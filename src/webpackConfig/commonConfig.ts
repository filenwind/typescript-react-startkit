import webpack from 'webpack';
import appRootPath from 'app-root-path';
import { TsConfigPathsPlugin } from 'awesome-typescript-loader';
import readPkg from 'read-pkg';
import camelCase from 'camelcase';

const packageJson = readPkg.sync();
const libraryName = packageJson.name;

if (!libraryName) {
  throw 'Most have name in package.json';
}

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

const commonConfig: webpack.Configuration = {
  mode,
  entry: appRootPath.resolve('src/app'),
  output: {
    path: appRootPath.resolve('dist/app'),
    library: camelCase(libraryName, { pascalCase: true }), // lib name, is required for web config
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsConfigPathsPlugin({ compiler: 'ttypescript' }),
    ],
  },
};

export { libraryName };
export default commonConfig;
