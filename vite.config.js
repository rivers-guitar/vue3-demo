import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 按需引入UI组件
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components'),
      'apis': path.resolve(__dirname, 'src/apis'),
      'views': path.resolve(__dirname, 'src/views'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'routes': path.resolve(__dirname, 'src/routes'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'plugins': path.resolve(__dirname, 'src/plugins'),
      'layouts': path.resolve(__dirname, 'src/layouts'),
    }
  },
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "mock",
      supportTs:"false"
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
})
