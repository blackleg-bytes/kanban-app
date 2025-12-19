// proxy.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Named export — Next.js looks for this
export function proxy(request: NextRequest) {
  // Example: just let the request continue
  return NextResponse.next();
}
