"use client";

import dynamic from "next/dynamic";

const OpenInAppBanner = dynamic(() => import("./open-app-banner"), {
  ssr: false,
});

export default OpenInAppBanner;
