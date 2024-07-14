# Source code for Silas Hsu's personal website

This website uses [Astro](https://docs.astro.build) to generate HTML, CSS, etc. assets from source files.  Astro looks
for `.astro` or `.md` files in the `src/pages/` directory.  Each page is exposed as a route based on its file name.

## Getting started modifying the site
Make sure you've installed the lastest LTS version of NodeJS (v20 as of writing).  Run `npm install`, then `npm start` to start the local development server.

## Editing the site's overall look and feel, header, and html head element
Please see `src/layouts/Layout.astro`, which contains the main site-wide template.

## Editing publications
The code in `src/pages/publications.astro` automatically generates an entry on the Publications page for each object in
`src/publications.json`.  However, the code only recognizes two topics right now: "HCI" and "bio".  Any other topic will
not show up.  To change this behavior, edit the code for the Publications page.

Note the PDF paths in the publications JSON file are relative to the root of the `public` directory.

## Deployment
Before deployment, don't forget to run `npm run build` followed by `npm run preview`, as bugs might sneak in during
the build process!

Edit `astro.config.mjs`, especially the `site` and `base` variables, to fit your needs.  See [Astro docs](https://docs.astro.build/en/reference/configuration-reference/)
for more information on configuration.

To deploy to GitHub pages, visit your repository's Settings --> Pages.  Select GitHub Actions as
your build and deployment method.  Then select Astro from the list of predefined workflows.

Note that if you use environment variables, they are not committed into the git repo by default.  Therefore you should
add them manually through your repository's Settings --> Secrets and Variables --> Actions.
