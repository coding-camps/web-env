import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // 代码根目录，如果用publicDir，则静态文件更新后无法自动刷新页面
  root: 'public',
  // publicDir: 'public',
  server: {
    // 开发服务器及端口，preview时不用加 --host 选项了
    host: '0.0.0.0',
    port: 4000,
    // 在开发服务器启动时自动在浏览器中打开应用程序
    open: '/index.html',
  },
  // vite 对静态页面build目前的配置还有些问题，所以暂时不用build命令，这里配置只是以防万一有需要
  build: {
    //相对于root的目录
    outDir: '../dist',
    emptyOutDir: true,
    // rollupOptions: {
    //   output: {
    //     chunkFileNames: 'static/js/[name]-[hash].js',
    //     entryFileNames: 'static/js/[name]-[hash].js',
    //     assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
    //   }
    // },
    // minify: 'terser',
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true,
    //   }
    // },
  },
});
