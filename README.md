# typescript-react-startkit
A start-kit for who want write react component by [typescript](https://www.typescriptlang.org/).

Including [tslint](https://palantir.github.io/tslint/), [enzyme test](https://github.com/airbnb/enzyme), [semantic-release](https://github.com/semantic-release/semantic-release)

## Before use
Change info in package.json
  - name
    >used for webpack lib name too, you can edit at **`src/webpackConfig/commomConfig.ts`** if you want different global variable name
  - repository
  - author
  - license
  - ...others


## Scripts
>Most time, you only need **`npm run release`** after each commit.
>
>Be ware **`release`** default is dry-mode, use **`npm run release -- --noCi`** if you really want release at local machine.

- release: use [semantic-release](https://github.com/semantic-release/semantic-release), suggest take a look with it's document, speciality [commit-analyzer](https://github.com/semantic-release/commit-analyzer) for commit rule, you can custom release config in **`package.json`**
- dev: using [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to develop.
- clean
- tsc
- test
- lint
- pack
- build
- build:dev
