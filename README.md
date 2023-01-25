# resizable-image-element

Arbitrary image resizing to fit within arbitrary dimensions.

Exports a native web element, `VirResizableImage` (for use in [`element-vir`](https://www.npmjs.com/package/element-vir)) or `vir-resizable-image` (for use as an HTML tag name) that accepts inputs of max dimensions and imageUrl. The element handles the rest!

-   [x] constrains images to arbitrary dimensions while maintaining aspect ratio
-   [x] works with SVGs and normal images
-   [x] works with SVGs that have `<image>` elements
-   [x] works with SVGs that rely on `<script>` elements without giving them access to the main window
-   [x] tested in Safari, Chrome, and Firefox
-   [x] fixes missing attributes on SVG images
-   [x] allows for arbitrary manipulation of SVG code to account for errors in the original SVG code
-   [x] handles race conditions between loading the image and determining its size

## Example

[https://electrovir.github.io/resizable-image-element](https://electrovir.github.io/resizable-image-element/)

## Usage

```bash
npm i @electrovir/resizable-image-element
```

Meant for use with `element-vir`:

<!-- example-link: src/readme-examples/example-usage.example.ts -->

```TypeScript
import {assign, html} from 'element-vir';
import {VirResizableImage} from '@electrovir/resizable-image-element';

export function createTemplate() {
    return html`
        <${VirResizableImage}
            ${assign(VirResizableImage, {
                imageUrl: 'https://example.com/my-image-url',
                maxDimensions: {
                    maxHeight: 100,
                    maxWidth: 200,
                },
            })}
        ></${VirResizableImage}>
    `;
}
```

You can also use the tag name `vir-resizable-image` outside of `element-vir` but you may have to imperatively assign inputs to make that work.
