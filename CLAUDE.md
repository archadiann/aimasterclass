# Szilágyi Anna – Személyes weboldal

## Projekt leírás
Személyes branding weboldal Szilágyi Anna urbanista és design stratéga számára.
Egyoldalas, scrollozható, kétnyelvű (magyar alapértelmezett + angol).

## Tech Stack
- Astro 5.x (statikus oldal generátor)
- Tailwind CSS 4.x (stílusok)
- Supabase (hírlevél feliratkozók tárolása)
- Deploy: Vercel

## Parancsok
- `npm run dev` – lokális dev szerver (localhost:4321)
- `npm run build` – production build (dist/ mappába)
- `npm run preview` – production build előnézet

## Projekt struktúra
- `src/pages/` – oldalak (index.astro = HU, en/index.astro = EN)
- `src/components/` – Astro komponensek (Header, Hero, About, stb.)
- `src/i18n/ui.ts` – MINDEN fordítható szöveg (szerkesztéshez ide kell nyúlni)
- `src/i18n/utils.ts` – fordító helper függvények (ne módosítsd)
- `src/lib/supabase.ts` – Supabase kliens (ne módosítsd)
- `src/layouts/BaseLayout.astro` – HTML váz, meta tagek, fontok
- `public/` – statikus fájlok (képek, favicon)

## Szöveg módosítás
A weboldal szövegeit a `src/i18n/ui.ts` fájlban kell módosítani. Minden kulcsnak van `hu` és `en` verziója.

## Környezeti változók (.env)
- PUBLIC_SUPABASE_URL
- PUBLIC_SUPABASE_ANON_KEY

## Design irányelvek
- **Stílus:** Skandináv minimalizmus + Editorial Split layout
- **Színpaletta:** off-white háttér (#FAFAF8), antracit szöveg (#2C2C2A), zsálya-zöld akcentszín (#7A8E7A)
- **Betűtípus:** Libre Baskerville (serif címekhez) + DM Sans (sans-serif szöveghez)
- **Elvek:** Sok whitespace, vékony border-ek, outlined gombok, természetes tónusok
- Mobile-first reszponzív

## i18n
- Alapértelmezett nyelv: hu (nincs prefix)
- Angol: /en/ prefix
- Astro beépített i18n routing

## Személyes márka
- **Pozicionálás:** Urbanista & design stratéga
- **Vezető gondolat:** Városi tereket és szolgáltatásokat tervez
- Magyar oldalon: "Szilágyi Anna", angol oldalon: "Anna Szilágyi"
