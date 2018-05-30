import { webConfig } from './index';
import webpack from 'webpack';
import appRootPath from 'app-root-path';
import htmlWebpackPlugin from 'html-webpack-plugin';
import htmlWebpackTemplate from 'html-webpack-template';
import ip from 'ip';

const port = 3000;

const devConfig = {
  ...webConfig,
  mode: 'development',
  entry: appRootPath.resolve('./src/client'),
  devServer: {
    port,
    https: true,
    host: '0.0.0.0',
    public: `${ip.address()}:${port}`,
    contentBase: './dist/app',
    disableHostCheck: true,
    compress: true,
  },
  plugins: [
    ...webConfig.plugins || [],
    new htmlWebpackPlugin({
      inject: false,
      template: htmlWebpackTemplate,
      appMountId: 'root',
    }),
  ],
};

export default devConfig;
