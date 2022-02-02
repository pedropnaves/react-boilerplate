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
  - React
  - Typescript
  - Jest
  - Eslint
  - Prettier
  - Webpack


# Roadmap
- Add Testing Library
- Add Suport to routing
- Improove build:prod configuration ( Terser, split Bundles, option to remove sourceMapping )
- Add GitHub Actions to validate new PR's
- Add Sonar to do code static analysis
- Add @svgr/webpack in order to easily import SVG files 
- Add manifest.json and other configs in order to setup a PWA app (similar to what we have on create-react-app boilerplate)
- Add storybook support
- Add styled components support
- Add Mock Service Worker in order to mock requests on browser and node environment

### Thanks to @washingtonsoares and @