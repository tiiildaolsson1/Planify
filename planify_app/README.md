This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Motivation för PLANIFY

Planify är en responsiv webbapplikation som hjälper användare att upptäcka aktiviteter och intressanta platser i närheten av en vald plats. Genom att kombinera data från Ticketmaster API och OpenStreetMap API blir det enkelt för användaren att hitta evenemang och sevärdheter baserat på sin aktuella position eller en plats som användaren anger.

Planify erbjuder flera funktioner:
Platsbaserad sökning: Användaren kan ange en plats och få förslag på aktiviteter och intressanta platser.
Visuell placering: Resultaten visas både som lista och direkt på en karta via OpenStreetMap.
Personlig användarupplevelse: Användaren kan också spara sina favoritaktiviteter och intressepunkter, vilket gör det enkelt att återkomma till dem vid ett senare tillfälle
.
Planify använder localStorage för att spara användarens sparade aktiviteter och intressepunkter, vilket gör det enkelt för användaren att återkomma till dessa favoriter vid ett senare tillfälle. All data lagras lokalt i webbläsaren.
Val av ramverk.

Vi valde att använda React för detta projekt. React är känt för sin flexibilitet och höga prestanda, tack vare dess virtuella DOM och komponentbaserade struktur. Detta gör det enkelt att bygga och vidareutveckla dynamiska och interaktiva användargränssnitt [1]. React har också ett stort och aktivt community som ger stöd och resurser, vilket gör det till ett bra val för långsiktiga projekt.
Vi valde bort Angular eftersom det är mer komplext och främst används för stora företagsapplikationer. Angular har många inbyggda funktioner och en strikt arkitektur, vilket kan göra det överflödigt och svårare att anpassa för mindre appar som Planify [2].
Vi valde även bort Vue eftersom det är enklare och ofta används för mindre projekt. Även om Vue är lätt att komma igång med och har en snabb inlärningskurva, erbjuder React större flexibilitet och bättre möjligheter att bygga vidare på en applikation i takt med att den växer [1]. Därför ansåg vi att React är det bästa alternativet för att bygga en modern och skalbar applikation som Planify.
Sammanfattningsvis valde vi React eftersom det ger en bra balans mellan flexibilitet och hög prestanda. Det gör det möjligt för oss att skapa en responsiv och dynamisk användarupplevelse som Planify.


Referenslista 

[1] Veeranjaneyulu Veeri, “Performance Optimization Techniques in React Applications: A Comprehensive Analysis,” ResearchGate, Nov. 2024, doi: https://doi.org/10.5281/zenodo.14146734. 

[2] P. Sekhar Emmanni, “Comparative Analysis of Angular, React, and Vue.js in Single Page Application Development,” International Journal of Science and Research (IJSR), vol. 12, no. 6, pp. 2971–2974, Jun. 2023, doi: https://doi.org/10.21275/sr24401230015. 



