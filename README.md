# loht true skeleton
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8.

## Runinstruktions
After installing the package, you have to link the style to your styles.css by past the root:

@import 'node_modules/loht-true-skeleton/src/styles.scss';

After that, you can use the class true-skeleton in your projekt.

```html
<div class="true-skeleton">
  some content to overlay
</div>
```

It is possible to adjust individual parameters for setting the overlay.

styles.scss:
```scss
/* You can add global styles to this file, and also import other style files */
$ts-color-primary: red;
$ts-color-secondary: blue;
$ts-grayscale: 0 ;
$ts-blur: 0;

$ts-degree: 100deg;
$ts-background-size: 250%; //depenting on the boxwidth and degree the size must be stretched
$ts-animation-duration: 5s;

@import 'node_modules/loht-true-skeleton/src/styles.scss';
