// Tokens
export const TOKEN_KEY = '@App:token';
export const USER_KEY = '@App:user';

// Autenticação
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

// Buscar no localStorage
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUser = () => JSON.parse(localStorage.getItem(USER_KEY));

// Criar no localStorage
export const login = (token) => {
	localStorage.setItem(TOKEN_KEY, token);
};
export const user = (userData) => {
	localStorage.setItem(USER_KEY, JSON.stringify(userData));
};

// Deletar do localStorage
export const logout = () => {
	localStorage.clear();
};
