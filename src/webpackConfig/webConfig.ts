import webpack from 'webpack';
import commonConfig, { libraryName } from './commonConfig';

const webConfig: webpack.Configuration = {
  ...commonConfig,
  target: 'web',
  output: {
    ...commonConfig.output,
    filename: `${libraryName}.umd.js`,
  },
};

export default webConfig;
