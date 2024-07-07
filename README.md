# Source code for Silas Hsu's personal website

This website uses [Astro](https://docs.astro.build) to generate HTML, CSS, etc. assets from source files.  Astro looks
for `.astro` or `.md` files in the `src/pages/` directory.  Each page is exposed as a route based on its file name.

## Editing the site's overall look and feel, header, and html <head> element
Please see `src/layouts/Layout.astro`, which contains the main site-wide template.

## Editing publications
The code in `src/pages/publications.astro` automatically generates an entry on the Publications page for each object in
`src/publications.json`.  However, the code only recognizes two topics right now: "HCI" and "bio".  Any other topic will
not show up.  To change this behavior, edit the code for the Publications page.
