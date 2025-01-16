/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'postcss-replace': {
      pattern: '#0a0a0a',
      data: {
        '#0a0a0a': '#111827',
      },
    },
  },
};

export default config;
