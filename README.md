# react-app-starter

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Dependency Status](https://img.shields.io/david/m31271n/react-app-starter.svg)](#)
[![DevDependency Status](https://img.shields.io/david/m31271n/react-app-starter.svg)](#)

React App starter with my own preferences.

<!-- start: markdown-toc -->

- [Usage](#usage)
- [Preface](#preface)
- [Browser Enhancement](#browser-enhancement)
  - [Polyfills](#polyfills)
  - [Stylesheets](#stylesheets)
- [React Enhancement](#react-enhancement)
  - [Typechecking](#typechecking)
  - [Router](#router)
  - [State Management](#state-management)
  - [Stylesheets](#stylesheets-1)
  - [Static Assets](#static-assets)
- [Better Development Experience](#better-development-experience)
  - [Hot Reloading](#hot-reloading)
  - [Detecting Unnecessary Updates](#detecting-unnecessary-updates)
- [Performance](#performance)
  - [Critical CSS](#critical-css)
- [QA](#qa)
  - [Linter](#linter)
    - [JS Linter](#js-linter)
  - [Auto Formatting](#auto-formatting)
  - [Static Type checking (TODO)](#static-type-checking-todo)
  - [Test (TODO)](#test-todo)
- [API Request](#api-request)
- [Environment Variables](#environment-variables)
- [DEBUG](#debug)
  - [Meta tags about building](#meta-tags-about-building)
- [Deployment](#deployment)
- [SEO](#seo)
- [License](#license)

<!-- end: markdown-toc -->

## Usage

Download the latest version from [Releases Page](https://github.com/m31271n/react-app-starter/releases). Then use the code to initialize your own repo.

Read more information about this starter in the following sections.

## Preface

> CRA is short for [Creat React App](https://github.com/facebook/create-react-app).

I wanna tweak CRA app's webpack configs without [ejecting](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) or forking the [react-scripts](https://www.npmjs.com/package/react-scripts). Why? Because it will make me lose ability to get upgrade provided by react-scripts. So, I use a mild method called [react-app-rewired](https://github.com/timarney/react-app-rewired) to achieve this.

Related packages:

- `react-app-rewired`

## Browser Enhancement

### Polyfills

- [Promise](https://github.com/then/promise)
- [fetch() API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [babel-polyfill](https://babeljs.io/docs/usage/polyfill/)

Related packages:

- `react-app-rewire-polyfills`

### Stylesheets

- [normalize.css](https://github.com/necolas/normalize.css)

## React Enhancement

### Typechecking

Related packages:

- `prop-types`

Read more:

- [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

### Router

This starter doesn't include router. Getting router support via [react-router](https://github.com/ReactTraining/react-router).

Read more:

- [Code Splitting With react-router](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)
- [Configure production server to support client-side routing](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#serving-apps-with-client-side-routing)

### State Management

> If you're like me, you're sick of all the ceremony around state management in React. Something that fits in well with the React way of thinking, but doesn't command some crazy architecture and methodology. - thejameskyle

Recommended packages:

- [unstated](https://github.com/thejameskyle/unstated)

### Stylesheets

- styled-components (built-in autoprefixer)

Related packages:

- `react-app-rewire-styled-components`
- `stylted-components`

Read more:

- [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)

### Static Assets

Images / Fonts / Other files are supported.

- Images types: `bmp`, `gif`, `jpg`, `jpeg`, `png`, `svg`

## Better Development Experience

### Hot Reloading

> react-hot-loader is not executed in production and the footprint is minimal.

Related packages:

- `react-app-rewire-hot-loader`
- [`react-hot-loader`](https://github.com/gaearon/react-hot-loader)

### Detecting Unnecessary Updates

Related packages:

- `why-did-you-update`

## Performance

### Critical CSS

> Critical CSS - CSS required for the initial page.

Related packages:

- `html-critical-webpack-plugin`

## QA

### Linter

Linter have 2 categories of rules:

- Formatting rules.
- Code-quality rules.

#### JS Linter

CRA intentionally provides a set of ESLint rules called "react-app" - includes formatting rules and code-quality rules.

But, in the aspect of formatting rules, I prefer [prettier](https://prettier.io/) personally. So, I extend `eslint-config-react-app` with `eslint-plugin-prettier`.

Related packages:

- `react-app-rewire-eslint`
- `eslint`
- `eslint-config-react-app`

  - `babel-eslint`
  - `eslint-plugin-flowtype`
  - `eslint-plugin-import`
  - `eslint-plugin-jsx-a11y`
  - `eslint-plugin-react`

- `eslint-plugin-prettier`
  - `prettier`
  - `eslint-config-prettier`

### Auto Formatting

Related packages:

- `husky` - helper for githook defined in npm scripts.
- `lint-staged` - command runner on staged files in git.
- `prettier` - code formatter.

The auto formatting steps are:

1.  `husky` runs githook.
2.  `lint-staged` runs as a githook.
3.  `prettier` runs as a step in `lint-staged`'s configs.

### Static Type checking (TODO)

- [Adding Flow](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-flow)

### Test (TODO)

- [Running Tests - Doc from CRA](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

## API Request

- [AJAX and APIs - Doc from React](https://reactjs.org/docs/faq-ajax.html)

## Environment Variables

`NODE_ENV` is provided by default. When you run `npm start`, it is always equal to 'development', when you run `npm test` it is always equal to 'test', and when you run `npm run build` to make a production bundle, it is always equal to 'production'. It is read-only for preventing developers from accidentally deploying a slow development build to production.

And, you can create custom enviroment variables beginning with `REACT_APP_`. Any other enviroment variables will be ignored.

All the environment variables are accessed by `process.env` in js files or by `%XXX%` in `public/index.html`.

## DEBUG

### Meta tags about building

This insert three meta tags into the entry file - `index.html`. It helps you to identify the version of the running code.

```
<meta name="build:version" content="1.3.1">
<meta name="build:commit" content="70412e2">
<meta name="build:datetime" content="2018-05-10T09:06:29.900Z">
```

## Deployment

- [Deployment - Doc from CRA](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment)

## SEO

- [SEO vs. React: Web Crawlers are Smarter Than You Think](https://medium.freecodecamp.org/seo-vs-react-is-it-neccessary-to-render-react-pages-in-the-backend-74ce5015c0c9)

## License

[MIT](https://stack.m31271n.com/licenses/MIT.txt) © [m31271n](https://stack.m31271n.com)
