import { useCallback } from "react";

type useOpenAppProps = {
  appleStoreUrl: string;
  androidPlayUrl: string;
  appUrl: string;
};

export default function useOpenApp({
  androidPlayUrl,
  appleStoreUrl,
  appUrl,
}: useOpenAppProps) {
  function isIOS(): boolean {
    if (typeof navigator === "undefined") return false;

    const userAgent = navigator.userAgent;

    return (
      /iPhone|iPad|iPod/i.test(userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    );
  }

  function isAndroid(): boolean {
    if (typeof navigator === "undefined") return false;

    return /Android/i.test(navigator.userAgent);
  }

  const getStoreUrl = useCallback(
    (androidStoreUrl: string, iosStoreUrl: string): string | undefined => {
      {
        if (isAndroid()) return androidStoreUrl;
        if (isIOS()) return iosStoreUrl;

        return undefined;
      }
    },
    [],
  );

  const openApp = useCallback(() => {
    const storeUrl = getStoreUrl(androidPlayUrl, appleStoreUrl);

    let fallbackTimer: ReturnType<typeof setTimeout> | undefined;
    let cleanedUp = false;

    const cleanup = () => {
      if (cleanedUp) return;

      cleanedUp = true;

      if (fallbackTimer) {
        clearTimeout(fallbackTimer);
        fallbackTimer = undefined;
      }

      document.removeEventListener("visibilitychange", handleVisibilityChange);

      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("pagehide", handlePageHide);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cleanup();
      }
    };

    const handleBlur = () => {
      cleanup();
    };

    const handlePageHide = () => {
      cleanup();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    window.addEventListener("blur", handleBlur);
    window.addEventListener("pagehide", handlePageHide);

    if (storeUrl) {
      fallbackTimer = setTimeout(() => {
        if (document.hidden) {
          cleanup();
          return;
        }

        cleanup();

        window.location.assign(storeUrl);
      }, 1800);
    }

    window.location.assign(appUrl);
  }, [androidPlayUrl, appUrl, appleStoreUrl, getStoreUrl]);

  return { openApp };
}
