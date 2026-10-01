"use client";

import Image from "next/image";
import {useCallback, useState} from "react";
import {AppUtil} from "@/lib/app_util";
import {Button} from "@/components/ui/button";

type Props = {
    openUrl: string;
    androidStoreUrl: string;
    iosStoreUrl: string;
    fallbackDelay?: number;
};

const DISMISS_KEY = "spendwise-open-in-app-dismissed";
const DEFAULT_FALLBACK_DELAY = 1800;

function isMobileDevice(): boolean {
    if (typeof navigator === "undefined") return false;

    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

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

function isStandaloneMode(): boolean {
    if (typeof window === "undefined") return false;

    const iosStandalone =
        "standalone" in navigator &&
        (navigator as Navigator & { standalone?: boolean }).standalone === true;

    const displayModeStandalone = window.matchMedia(
        "(display-mode: standalone)",
    ).matches;

    return iosStandalone || displayModeStandalone;
}

function wasDismissed(): boolean {
    if (typeof window === "undefined") return false;

    try {
        return sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
        return false;
    }
}

function shouldShowBanner(): boolean {
    return isMobileDevice() && !isStandaloneMode() && !wasDismissed();
}

function getStoreUrl(
    androidStoreUrl: string,
    iosStoreUrl: string,
): string | undefined {
    if (isAndroid()) return androidStoreUrl;
    if (isIOS()) return iosStoreUrl;

    return undefined;
}

export default function OpenInAppBanner({
                                            openUrl,
                                            androidStoreUrl,
                                            iosStoreUrl,
                                            fallbackDelay = DEFAULT_FALLBACK_DELAY,
                                        }: Props) {
    const [visible, setVisible] = useState(shouldShowBanner);

    const dismiss = useCallback(() => {
        try {
            sessionStorage.setItem(DISMISS_KEY, "1");
        } catch {
            // Ignore storage errors.
        }

        setVisible(false);
    }, []);

    const openApp = useCallback(() => {
        const storeUrl = getStoreUrl(androidStoreUrl, iosStoreUrl);

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
            }, fallbackDelay);
        }

        window.location.assign(openUrl);
    }, [openUrl, androidStoreUrl, iosStoreUrl, fallbackDelay]);

    if (!visible) {
        return null;
    }

    return (
        <div
            role="region"
            aria-label={`Open in ${AppUtil.appName}`}
            className="
        fixed
        inset-x-0
        bottom-0
        z-50
        px-3
        pb-[max(0.75rem,env(safe-area-inset-bottom))]
      "
        >
            <div
                className="
          mx-auto
          flex
          max-w-xl
          flex-col
          gap-2
          rounded-xl
          border
          border-gray-200
          bg-white
          p-4
          shadow-2xl
        "
            >
                <div className="flex items-center gap-4">
                    <Image
                        src="/icons/icon.svg"
                        alt=""
                        width={40}
                        height={40}
                        priority
                        className="h-10 w-10 shrink-0 rounded-full"
                    />

                    <div className="min-w-0 flex-1">
                        <p className="text-base font-medium leading-6">
                            Open in {AppUtil.appName}
                        </p>

                        <p className="text-sm leading-5 text-gray-600">
                            Get the full experience in the app.
                        </p>
                    </div>
                </div>

                <div className="flex justify-end gap-2">
                    <Button type="button" onClick={dismiss} variant="ghost">
                        Not now
                    </Button>

                    <Button type="button" onClick={openApp}>
                        Open app
                    </Button>
                </div>
            </div>
        </div>
    );
}
