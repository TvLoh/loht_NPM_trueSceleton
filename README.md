# loht true skeleton
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8.

## Runinstruktions
After installing the pakage, you have to link the style to your styles.css by past the rout:

@import 'node_modules/loht-true-skeleton/src/styles.scss';

After that, you can use the class true-skeleton in your projekt.

```html
<div class="true-skeleton">
  some content to overlay
</div>


```scss
$ts-color-primary: rgba(242, 243, 244, 100);
$ts-color-secondary: rgba(220, 222, 225, 100);
$ts-grayscale: 1;
$ts-blur: 2px;

$ts-degree: 100deg;
$ts-background-size: 250%; //depenting on the boxwidth and degree the size must be stretched
$ts-animation-duration: 2.5s;