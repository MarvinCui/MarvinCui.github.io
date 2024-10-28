import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/marvincui.github.io/', // 将这个路径替换为你的仓库名
});