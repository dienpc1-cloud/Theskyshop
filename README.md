# Skyshop

Webshop-voorkant voor Skylanders-figuren. Statische site (HTML, CSS, JavaScript), geen build nodig.

## Online zetten met GitHub Pages
1. Maak een nieuwe repository, bijvoorbeeld `skyshop`.
2. Upload alle bestanden uit deze map (ook de mappen `el` en `games`).
3. Ga naar **Settings → Pages**, kies **Deploy from a branch**, branch `main`, map `/ (root)` en klik **Save**.
4. Na een minuut staat de site op `https://<jouw-gebruikersnaam>.github.io/skyshop/`.

## Bestanden
| Bestand | Wat |
|---|---|
| `index.html` | Pagina's en opmaak |
| `app.js` | Zoeken, filters, winkelwagen, teksten NL/EN |
| `data.js` | **Catalogus, prijzen, voorraad en aanbiedingen (voorbeelddata)** |
| `el/` | Element-iconen |
| `games/` | Game-afbeeldingen |
| `DESIGN.md` | Kleuren, lettertypes en ontwerpregels |

## Figuren aanpassen
In `data.js` staat één figuur per regel:

```
Naam | game | element | type | conditie | prijs | voorraad | toegevoegd (JJJJ-MM-DD) | foto (optioneel)
Spyro|ssa|magic|core|loose|8.95|4|2026-10-02|fotos/spyro.jpg
```

Aanbiedingen staan onder `deals`: `Naam|conditie|oude prijs`.

## Nog niet gekoppeld
Afrekenen, het contactformulier, het verkoopformulier en "Mis je nog een figuur?" versturen nog niets. Daarvoor is een backend nodig (bijvoorbeeld WooCommerce of een formulierdienst).

Skyshop is een onafhankelijke winkel en niet verbonden aan Activision. Skylanders is een merk van Activision.
