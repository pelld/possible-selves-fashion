# Torunkëshk brand concept

This is the first branded static version of the fictional fashion shop. It is not yet the full stylist experience. Its job is to test the identity before we rebuild the more complicated two-self interaction around it.

The current spelling, **Torunkëshk**, is provisional. The diaeresis on the `ë` supplies the two-dot mark used throughout the page and on the lower-left hem of the clothing.

## What is in this version

The page tests the large double-line wordmark, its slowly changing colour fragments, the four person choices, the deep-petrol / black-cherry / muted-violet palette, brushed or sueded cotton, white trim, grey double stitching, and the two-dot garment signature.

The clothing and material images are generated concept images. They are suitable for exploring the design direction, but they are not real product photography.

## Files

```text
index.html      The structure and wording of the page
styles.css      The complete visual system, layout and responsive behaviour
app.js          The reactive wordmark, person selection, colour study and dialogs
assets/         Figure cut-outs, material images and the generated brand board
README.md       This guide
BRAND.md        The current brand direction in plain English
```

## Open it on your computer

Download the folder and open `index.html` in a browser. Because it uses ordinary HTML, CSS and JavaScript, no installation or build command is needed for this version.

## Put it on GitHub Pages

For the GitHub account `pelld`:

1. Create a public repository, for example `torunkeshk`.
2. Upload the whole contents of this folder, keeping the `assets` folder intact.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.

The address will be:

```text
https://pelld.github.io/torunkeshk/
```

## The useful places to edit

The visible page text is in `index.html`.

The main colours are at the top of `styles.css` under `00A. BRAND TOKENS`:

```css
--petrol: #0d3440;
--plum: #7b1729;
--violet: #5e3857;
```

The wordmark text appears three times near the top of `index.html`. Change all three together if the brand name changes.

The random wordmark colours and timing are at the top of `app.js` under `00A. REACTIVE WORDMARK`.

The figure and material images can be replaced by keeping the existing filenames inside `assets`, or by changing the image paths in `index.html`.

## What comes next

Once the brand direction feels right, the sensible next step is to modularise the full shop with reusable components and restore the interaction we designed: body-area navigation, two possible selves, click one to send it back, and the stylist gradually taking a position.
