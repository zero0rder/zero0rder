const CracoLessPlugin = require('craco-less');
// import { getThemeVariables } from 'antd/dist/theme'

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#539bf5',
              '@body-background': '#121212',
              '@layout-footer-background': '#121212',
              '@component-background': '#4343433b',
              // '@text-color': '',
              // '@text-color-secondary': '#1260e7',
              // '@text-color-secondary-dark': '',
              // '@border-color-base': '',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}