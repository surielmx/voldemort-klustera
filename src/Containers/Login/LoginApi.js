import { fetchLogin } from '../../api/fetchApi';

const setSessionApi = async (query, push) => {
	const { ok = true, statusText = '', token = '' } = await fetchLogin(query);
	if (!ok) {
		return { ok, statusText };
	}
	const date = new Date();
	sessionStorage.setItem(
		'session',
		JSON.stringify({ token, timestamp: new Date(Date.parse(date)) })
	);
	push('/dashboard');
};

export default setSessionApi;
