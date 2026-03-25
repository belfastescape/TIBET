'use client'

import { useEffect, useRef, useState } from 'react'

interface TrustIndexWidgetProps {
  widgetId: string
  eager?: boolean // Load immediately without lazy loading
}

export default function TrustIndexWidget({ widgetId, eager = false }: TrustIndexWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(eager)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // If eager loading, skip IntersectionObserver
    if (eager) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect()
          
          // Use requestIdleCallback to load when browser is idle
          const loadWidget = () => {
            setTimeout(() => setShouldLoad(true), 100)
          }
          
          if ('requestIdleCallback' in window) {
            requestIdleCallback(loadWidget, { timeout: 2000 })
          } else {
            // Fallback for Safari
            setTimeout(loadWidget, 200)
          }
        }
      },
      { rootMargin: '300px' } // Start loading 300px before visible
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [eager])

  // Inject the TrustIndex script directly into the container div
  // This is critical: TrustIndex's loader.js finds its own <script> tag
  // and inserts the widget adjacent to it. We must place the script
  // inside the container so the widget renders in the right spot.
  useEffect(() => {
    if (!shouldLoad || !containerRef.current) return

    const container = containerRef.current
    const scriptId = `trustindex-script-${widgetId}`

    // Don't add the script twice
    if (container.querySelector(`#${scriptId}`)) return

    const script = document.createElement('script')
    script.id = scriptId
    script.src = `https://cdn.trustindex.io/loader.js?${widgetId}`
    script.async = true
    container.appendChild(script)

    // Cleanup on unmount
    return () => {
      if (container.querySelector(`#${scriptId}`)) {
        const el = container.querySelector(`#${scriptId}`)
        if (el) container.removeChild(el)
      }
    }
  }, [shouldLoad, widgetId])

  // Monitor for widget content to appear and mark as loaded
  useEffect(() => {
    if (!shouldLoad || !containerRef.current) return
    
    const observer = new MutationObserver(() => {
      // Check if TrustIndex has inserted its content
      if (containerRef.current && containerRef.current.querySelector('[class*="ti-"]')) {
        setIsLoaded(true)
        observer.disconnect()
      }
    })
    
    observer.observe(containerRef.current, { childList: true, subtree: true })
    
    // Timeout fallback - mark as loaded after 5 seconds regardless
    const timeout = setTimeout(() => setIsLoaded(true), 5000)
    
    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [shouldLoad])

  return (
    <div 
      ref={containerRef} 
      style={{ 
        minHeight: isLoaded ? undefined : '280px',
        contain: isLoaded ? undefined : 'layout',
      }}
      className="relative"
    >
      {/* Placeholder skeleton while loading */}
      {shouldLoad && !isLoaded && (
        <div 
          className="absolute inset-0 bg-[#1a1a1a] rounded-lg animate-pulse flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="text-gray-500 text-sm">Loading reviews...</span>
        </div>
      )}
    </div>
  )
}
