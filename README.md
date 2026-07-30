# Torunkëshk minimalist fashion prototype

This is the corrected continuation of the original minimalist **Possible Selves** website.

It does **not** replace the site with a conventional fashion homepage. The changes are deliberately limited to the ideas that had actually been agreed:

- the brand name is now **Torunkëshk**;
- the large faint wordmark remains at the top;
- the wordmark uses a double-line treatment, with small colour fragments moving inside it;
- the opening figures use the approved, more human contour drawings;
- the choices are still Man, Woman, Boy and Girl;
- the original body-navigation, two-self fork, Studio Notes and Look interactions remain;
- clothing colours now use deep petrol, plum-red, muted violet and cream;
- top layers have a brushed/sueded appearance, white trim, double grey hem stitching and a small `¨` signature mark.

## Files

`index.html`  
The page structure: opening screen, figure selector, dressing stage, fork, Studio Notes and Look panel.

`styles.css`  
All appearance and layout. This is where to change the wordmark size, colours, figures, garment shapes, stitching and responsive behaviour.

`app.js`  
All behaviour: character selection, garment suggestions, the two-self comparison, stylist learning, totals and the reactive wordmark.

`assets/figure-man.png`  
`assets/figure-woman.png`  
`assets/figure-boy.png`  
`assets/figure-girl.png`  
The approved contour figures, extracted as transparent images so they can be replaced without changing the HTML or JavaScript.

## Important limitation

The people are real image assets, but the garments are still visual prototype layers made with CSS. They now reflect the proposed Torunkëshk colours, brushed material, trim, stitching and mark. Later, those layers can be replaced with actual photographed garment cut-outs.

## Edit the brand name

Search `index.html` for:

`Torunkëshk`

The large wordmark is an SVG text element, so no font file is required.

## Edit the main colours

At the top of `styles.css`:

```css
--petrol: #123846;
--plum: #761a31;
--violet: #66516f;
--cream: #e9e2d6;
```

The matching product colours are near the top of `app.js`.

## Publish on GitHub Pages

For the GitHub account `pelld`:

1. Create or open the repository.
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.

For a repository called `torunkeshk`, the address will be:

`https://pelld.github.io/torunkeshk/`

## Why this version is split into files

The earlier prototype put HTML, CSS and JavaScript in one large file. This version separates them so a visual change in `styles.css` is less likely to disturb the interaction logic in `app.js`.

There is no build step yet. The site is still one page, so keeping `index.html` intact is simpler while the design is changing. Once the page structure is stable, it can be split into reusable HTML components and assembled automatically.
