import path from 'node:path'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Shiki from '@shikijs/markdown-it'
// import basicSsl from '@vitejs/plugin-basic-ssl'
import Vue from '@vitejs/plugin-vue'
import LinkAttributes from 'markdown-it-link-attributes'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import Layouts from 'vite-plugin-vue-layouts'
import WebfontDownload from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
  // https://vite.dev/config/shared-options.html#base
  base: '/',

  // https://vite.dev/config/shared-options.html#resolve-alias
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  // https://vite.dev/config/server-options.html
  // server: {
  //   proxy: {
  //     '^/?(api/.*)': {
  //       target: 'https://domain.com/',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/?api/, '/api'),
  //     },
  //   },
  // },

  // https://vite.dev/guide/using-plugins.html#using-plugins
  plugins: [

    // https://vite.dev/config/server-options.html#server-https
    // basicSsl({
    //   name: 'test',
    //   domains: ['*'],
    //   certDir: `${path.resolve(__dirname, 'cert')}/`,
    // }),

    // https://vue-macros.dev/guide/getting-started.html
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/],
        }),
      },
    }),

    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: ['.vue', '.md'],
      dts: 'types/typed-router.d.ts',
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'pinia',
        'vue-i18n',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          // 'vue-router/auto': ['useLink'],
        },
      ],
      dts: 'types/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'types/components.d.ts',
      dirs: ['src/components'],
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),

    // https://github.com/unplugin/unplugin-vue-markdown
    Markdown({
      async markdownItSetup(md) {
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
        md.use(
          await Shiki({
            defaultColor: false,
            themes: {
              light: 'one-light',
              dark: 'one-dark-pro',
            },
          }),
        )
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload(),

    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),
  ],
})
