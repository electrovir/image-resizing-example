# image-resizing-example

Trying to get image resizing working in arbitrary situations.

-   [x] constrains images to arbitrary dimensions while maintaining aspect ratio
-   [x] works with SVGs and normal images
-   [x] works with SVGs that have `<image>` elements
-   [x] works with SVGs that rely on `<script>` elements without giving them access to the main window
-   [x] tested in Safari, Chrome, and Firefox
-   [x] fixes missing attributes on SVG images
-   [x] easily allows for arbitrary manipulation of SVG code to account for errors in the original SVG code

# How to use

1. Clone this repo
2. Run `npm i`
3. Run `npm start`
4. Open the URL that is logged to your terminal
