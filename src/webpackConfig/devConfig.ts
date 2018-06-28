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
  entry: appRootPath.resolve('src/client'),
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
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
      ],
      links: [
        {
          href: 'https://csstools.github.io/sanitize.css/latest/sanitize.css',
          rel: 'stylesheet',
        },
      ],
    }),
  ],
};

export default devConfig;
