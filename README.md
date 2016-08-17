# svg-viewbox-loader

## Install

```bash
npm install svg-viewbox-loader --save-dev
```

## Usage

```jsx
<svg viewBox={require(`!svg-viewbox-loader!../images/icon.svg`)}>
  ...
</svg>
```

Note: Prefix `!` in `!svg-viewbox-loader!` overrides all other loaders.

Can also be used with [https://github.com/kisenka/svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader).