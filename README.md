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

# Stack
  ### Core
  - [React](https://reactjs.org/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Webpack](https://webpack.js.org/)
  
  ### Tests & Mock
  - [Jest](https://jestjs.io/)
  - [Testing Library](https://testing-library.com/)
  - [MSW](https://mswjs.io/)

  ### Routing
  - [React Router DOM](https://reactrouter.com/)

  ### Code Quality
  - [Eslint](https://eslint.org/)
  - [Prettier](https://prettier.io/)

### Supports
  - [DotEnv](https://github.com/motdotla/dotenv)
  - [@svgr/webpack](https://react-svgr.com/)

# Roadmap
- Improove build:prod configuration ( Terser, split Bundles, option to remove sourceMapping )
- Add Sonar to do code static analysis
- Add manifest.json and other configs in order to setup a PWA app (similar to what we have on create-react-app boilerplate)
- Add storybook support
- Add styled components support
- Add web-vitals

### Thanks to [@washingtonsoares](https://github.com/washingtonsoares) and [@lukascaska](https://github.com/lukascaska)
