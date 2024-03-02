// eslint.config.js
import antfu from '@antfu/eslint-config'

// import NuxtEslintConfig from './.nuxt/eslint.config.mjs'

export default antfu(
  {
    unocss: true,
    vue: true,
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
  },
  // NuxtEslintConfig
)
