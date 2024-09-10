module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '18.2' // Especifica la versión de React
    }
  },
  plugins: [
    'react-refresh' // Asegúrate de tener instalado eslint-plugin-react-refresh
  ],
  rules: {
    'react-refresh/only-export-components': 'warn' // Advertencia si solo exportas componentes
  }
};
