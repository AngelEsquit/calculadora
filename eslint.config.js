import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'


export default [js.configs.recommended, {
  files: ['**/*.{js,jsx}'],
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    globals: {
      ...globals.browser
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  plugins: {
    react: pluginReact
  },
  rules: {
    ...pluginReact.configs.recommended.rules,
    'react/react-in-jsx-scope': 'off',
    'semi': ['error', 'never'],
    'max-len': ['error', { code: 120 }],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'no-var': 'error',
    'prefer-const': 'error',
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': ['error', { args: 'after-used', ignoreRestSiblings: true }],
    'space-before-function-paren': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/prop-types': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}, ...storybook.configs["flat/recommended"]];