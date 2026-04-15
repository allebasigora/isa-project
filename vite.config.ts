import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * GitHub project Pages serves at https://<user>.github.io/<repo>/ — assets must load from /repo/.
 * CI sets VITE_BASE to "/<repo>/". Local dev omits it (defaults to "/").
 */
function pagesBase(): string {
  const raw = process.env.VITE_BASE?.trim();
  if (!raw) return '/';
  let b = raw.startsWith('/') ? raw : `/${raw}`;
  if (!b.endsWith('/')) b += '/';
  return b;
}

export default defineConfig({
  base: pagesBase(),
  plugins: [react()],
});
