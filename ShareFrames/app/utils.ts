import { headers } from "next/headers";

export function currentURL(pathname: string): URL {
  const headersList = headers();
  const host = headersList.get("x-forwarded-host") || headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";

  try {
    return new URL(pathname, `${protocol}://${host}`);
  } catch (error) {
    return new URL("http://localhost:3001");
  }
}

export function vercelURL() {
  return process.env.NEXT_PUBLIC_SITE_FRAME_URL
    ? `https://${process.env.NEXT_PUBLIC_SITE_FRAME_URL}`
    : undefined;
}