"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { Suspense } from "react";

function TrackGuestInner() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("guest");
  const hasLoggedRef = useRef(false);

  useEffect(() => {
    if (guestName && !hasLoggedRef.current) {
      // 1. Log to console for debugging
      console.log(`[Guest Tracker] Invitation opened by: ${guestName}`);

      // 2. Here you would send data to a tracking service
      // Example: Google Sheets, EmailJS, or simple Analytics event
      // sendToAnalytics(guestName);

      // We can also store in localStorage to avoid duplicate counts if desired
      // const viewed = localStorage.getItem(`viewed_${guestName}`);
      // if (!viewed) { ... }

      hasLoggedRef.current = true;
    }
  }, [guestName]);

  return null; // This component is invisible
}

export default function GuestTracker() {
  return (
    <Suspense fallback={null}>
      <TrackGuestInner />
    </Suspense>
  );
}
