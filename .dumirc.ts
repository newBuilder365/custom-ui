import { defineConfig } from 'dumi';

const title = 'custom-ui';

export default defineConfig({
  title,
  base: `/${title}/`,
  publicPath: `/${title}/`,
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'custom-ui',
    footer: '基于antd的组件库',
  },
});
