# Clada storybook

**clada-storybook** is a design system component library build with react, tailwind and typescript.

This project was built in the frame of the CAS Frontend Engineering Advanced course at the [OST Fachhochschule Rapperswil](https://www.ost.ch/de/).

Authors/Developers:
- Claudio Steffen
- Danijel Malinovic

## Installation and usage

If you want to review the package first before using it in your project, you can open our [published storybook instance](https://ost-cas-fee-adv-23-24.github.io/design-system-component-library-clada/?path=/story/button--primary).

This package is intended to be used in a NextJS application. To install the package in your project simply run
```bash
npm install clada-storybook
```

After that, you need to import the stylesheet in your `globals.css` file:
```css
@import 'clada-storybook/style.css';
```

Components that you want to use can be imported accordingly:
```tsx
import { Button } from 'clada-storybook';
```

## Local setup

To develop this application you ofcourse need node installed. For a seamless usage please use the version defined in the [node-version file](./.node-verion).

Then you need to install all dependencies:
```bash
npm ci
```

And after that you can run
```bash
npm run storybook
```
This will start the storybook instance on port **6006** and should automatically open.

## License

This project is licensed under the [MIT license agreement](./LICENSE)

## Contributing

Since this is a school project please do not open any pull requests for this repository. 

## TODO

- Setup eslint