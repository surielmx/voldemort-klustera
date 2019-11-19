export const getToken = () => {
	const sessionData = JSON.parse(sessionStorage.getItem('session'));
	if (sessionData !== null) {
		const { token } = sessionData;
		return token;
	}
};

export const isValidSession = () => {
	const sessionData = JSON.parse(sessionStorage.getItem('session'));
	if (sessionData !== null) {
		const { timestamp = '' } = sessionData;
		return new Date(timestamp).getUTCMinutes() === 120;
	}
};

export const isAuthenticated = () => {
	const sessionData = JSON.parse(sessionStorage.getItem('session'));
	if (sessionData !== null) {
		const { token = 0 } = sessionData;
		const unusualSession = token.length === 173 && token !== '';
		return unusualSession;
	}
};

export const resetSession = () => {
	return sessionStorage.removeItem('session');
};
