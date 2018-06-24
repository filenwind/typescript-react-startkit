import webpack from 'webpack';
import commonConfig from './commonConfig';
import webpackNodeExternals  from 'webpack-node-externals';

const nodeConfig: webpack.Configuration = {
  ...commonConfig,
  target: 'node',
  externals: [
    ...(Array.isArray(commonConfig.externals) ? commonConfig.externals : []),
    webpackNodeExternals(),
  ],
  output: {
    ...commonConfig.output || {},
    filename: 'index.js',
  },
};

export default nodeConfig;
