// // import { defineConfig } from 'vite';
// // import path from 'path';
// // import react from '@vitejs/plugin-react';

// // // https://vite.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// //   resolve: {
// //     alias: {
// //       '@': path.resolve(__dirname, './src'),
// //       '@api': path.resolve(__dirname, 'src/api'),
// //       '@assets': path.resolve(__dirname, 'src/assets'),
// //       '@components': path.resolve(__dirname, 'src/components'),
// //       '@pages': path.resolve(__dirname, 'src/pages'),
// //       '@store': path.resolve(__dirname, 'src/store'),
// //       '@types': path.resolve(__dirname, 'src/types'),
// //     },
// //   },
// // });

// import { defineConfig } from 'vite';
// import { fileURLToPath } from 'url';
// import path from 'path';
// import react from '@vitejs/plugin-react';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//       '@api': path.resolve(__dirname, 'src/api'),
//       '@assets': path.resolve(__dirname, 'src/assets'),
//       '@components': path.resolve(__dirname, 'src/components'),
//       '@pages': path.resolve(__dirname, 'src/pages'),
//       '@store': path.resolve(__dirname, 'src/store'),
//       '@types': path.resolve(__dirname, 'src/types'),
//     },
//   },
// });

import { defineConfig } from 'vite';
// @ts-ignore
import { fileURLToPath } from 'url';
// @ts-ignore
import path from 'path';
import react from '@vitejs/plugin-react';
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@types': path.resolve(__dirname, 'src/types'),
    },
  },
});
