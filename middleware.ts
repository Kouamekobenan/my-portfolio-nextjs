import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["fr", "en"];
const defaultLocale = "fr";

export function middleware(request: NextRequest) {
  console.log("🔥 MIDDLEWARE APPELÉ");
  console.log("URL:", request.nextUrl.pathname);

  const pathname = request.nextUrl.pathname;

  // Si c'est la racine, rediriger vers /fr
  if (pathname === "/") {
    console.log("➡️ Redirection vers /fr");
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // Vérifier si le pathname commence déjà par une locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    console.log("✅ Locale détectée, continue");
    return NextResponse.next();
  }

  // Sinon ajouter /fr devant
  console.log("➡️ Ajout de /fr devant", pathname);
  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  // Exclut : _next (Next.js), api, fichiers avec extension, favicon
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)", "/"],
};
