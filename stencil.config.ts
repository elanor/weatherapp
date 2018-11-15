import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  bundles: [
    { components: ['app-root']},
    { components: ['app-home']},
    { components: ['app-profile']},

  ],
  globalStyle: 'src/global/app.css'
};
