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
  const openSpendWise = () => {
    const isIOS =
      /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    const isAndroid = /Android/i.test(navigator.userAgent);

    const storeUrl = isIOS
      ? appleStoreUrl
      : isAndroid
        ? androidPlayUrl
        : undefined;

    if (!storeUrl) {
      // Desktop — don't send them to a mobile store.
      window.location.href = appUrl;
      return;
    }

    let appOpened = false;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        appOpened = true;
        cleanup();
      }
    };

    const cleanup = () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      clearTimeout(fallbackTimer);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const fallbackTimer = window.setTimeout(() => {
      cleanup();

      if (!appOpened) {
        window.location.href = storeUrl;
      }
    }, 1800);

    window.location.href = appUrl;
  };

  return { openSpendWise };
}
