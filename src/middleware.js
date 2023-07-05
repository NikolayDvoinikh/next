import authMiddleware from "next-auth/middleware";

import createMiddleware from "next-intl/middleware";

export { authMiddleware };

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "uk"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "uk",
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
