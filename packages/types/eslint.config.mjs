import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'style/brace-style': ['error', '1tbs'],
    'antfu/top-level-function': 'off',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
  },
})
