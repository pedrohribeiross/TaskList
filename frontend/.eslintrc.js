module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'class-methods-use-this': 'off',
		'no-param-reassign': 'off',
		'no-underscore-dangle': 'off',
		'no-console': 'off',
		'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
		camelcase: 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
		'import/prefer-default-export': 'off',
		'no-alert': 'off',
		'react/prop-types': 'off',
	},
};
