// Loads the Meta Pixel once for the entire app.
// Reads the Pixel ID from NEXT_PUBLIC_META_PIXEL_ID; renders nothing if absent
// so local dev / preview deploys don't ping the wrong account.
//
// Page navigations under the Next.js App Router don't reload the page, so we
// listen for pathname changes and fire `PageView` manually on each route.

"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!PIXEL_ID || typeof window === "undefined" || !window.fbq) return;
    // Fire one PageView per route change.
    window.fbq("track", "PageView");
    // searchParams included so paid traffic with new UTMs still ticks PageView.
  }, [pathname, searchParams]);

  if (!PIXEL_ID) return null;

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        // The script tag bootstraps fbq, then the inline init/track happens
        // BEFORE the useEffect above ever runs on first paint.
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height={1}
          width={1}
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}

/**
 * Fires a deduplicated `Lead` event from the client.
 * Pass the eventId returned by /api/lead so Meta dedupes against the
 * server-side CAPI event.
 */
export function trackLead(eventId: string) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", "Lead", {}, { eventID: eventId });
}
