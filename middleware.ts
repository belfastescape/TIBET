import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const EXISTING_IMAGE_NAMES = new Set([
  "Team_building_escape_202603271610.webp",
  "team-building-escape-rooms-tibet.webp",
  "team-fun-escape-rooms-tibet.webp",
  "team-fun-escape-rooms-tibet.jpeg",
  "freiendly-staff-escape-rooms-tibet.webp",
]);

const FALLBACK_IMAGES = [
  "Team_building_escape_202603271610.webp",
  "team-building-escape-rooms-tibet.webp",
  "team-fun-escape-rooms-tibet.webp",
  "team-fun-escape-rooms-tibet.jpeg",
  "freiendly-staff-escape-rooms-tibet.webp",
];

function hashPath(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/images/")) {
    return NextResponse.next();
  }

  const requestedFileName = decodeURIComponent(pathname.split("/").pop() ?? "");

  if (EXISTING_IMAGE_NAMES.has(requestedFileName)) {
    return NextResponse.next();
  }

  const fallbackIndex = hashPath(pathname) % FALLBACK_IMAGES.length;
  const fallbackImage = FALLBACK_IMAGES[fallbackIndex];
  const rewrittenUrl = request.nextUrl.clone();
  rewrittenUrl.pathname = `/images/${fallbackImage}`;

  return NextResponse.rewrite(rewrittenUrl);
}

export const config = {
  matcher: ["/images/:path*"],
};
