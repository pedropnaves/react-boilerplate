# React Boilerplate

## Objectives
The main idea is to make it easy to start new projects using React.


## NPM Scripts

`yarn build` build project using default webpack configuration (mode: development)

`yarn build:prod` build project using production mode

`yarn lint` check files with lint rules

`yarn lint:fix` check files with lint rules and try fix the problems

`yarn start` start a webpack dev server and run project in development mode

`yarn test` run unit tests using Jest


## Stack
  - [React](https://reactjs.org/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Jest](https://jestjs.io/)
  - [Eslint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [Webpack](https://webpack.js.org/)
  - [MSW](https://mswjs.io/)
  - [Testing Library](https://testing-library.com/)
  - [React Router DOM](https://reactrouter.com/)

## Supports
  - [DotEnv](https://github.com/motdotla/dotenv)


# Roadmap
- Add Suport to routing
- Improove build:prod configuration ( Terser, split Bundles, option to remove sourceMapping )
- Add Sonar to do code static analysis
- Add @svgr/webpack in order to easily import SVG files 
- Add manifest.json and other configs in order to setup a PWA app (similar to what we have on create-react-app boilerplate)
- Add storybook support
- Add styled components support
- Add web-vitals

### Thanks to [@washingtonsoares](https://github.com/washingtonsoares) and [@lukascaska](https://github.com/lukascaska)
