# Torunkëshk — minimalist fashion prototype

This version keeps the original minimalist interface.

The only visual changes are:

- the name is **Torunkëshk**;
- the four improved contour figures replace the old CSS people;
- the wordmark begins as one very faint double-line outline;
- accepted clothing colours appear quietly inside small parts of the wordmark;
- the same clothing colour enters the white background as a subtle wash;
- the garment prototypes retain the petrol, plum, violet and cream palette, white trim, double grey stitching and small `¨` mark.

## Upload to GitHub

Upload **all eight files** to the repository root:

- `index.html`
- `styles.css`
- `app.js`
- `README.md`
- `figure-man.png`
- `figure-woman.png`
- `figure-boy.png`
- `figure-girl.png`

There is deliberately no `assets` folder in this version. Keeping the images at root avoids the missing-image problem shown in the previous deployment.

## File roles

`index.html` contains the page structure.

`styles.css` contains the visual design, layout, garment shapes and animation styling.

`app.js` contains the stylist logic, the two-self fork, Studio Notes, totals, background reaction and wordmark reaction.

The four PNG files are the visible people.

## Main brand colours

At the top of `styles.css`:

```css
--petrol: #123846;
--plum: #761a31;
--violet: #66516f;
--cream: #e9e2d6;
```

The matching fictional products are near the top of `app.js`.

## GitHub Pages

For a repository named `torunkeshk` under the GitHub account `pelld`, the published address will be:

`https://pelld.github.io/torunkeshk/`
