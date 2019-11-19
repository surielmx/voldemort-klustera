import { getToken } from '../util/Session';

export const fetchLogin = async ({ data = {}, method = 'GET', params, endpoint } = {}) => {
	const urlBase = 'https://voldemort.klustera.com';
	const url = `${urlBase}${endpoint}`;
	const Authorization = 'Basic ' + btoa(data.username + ':' + data.password);
	const headers = {
		'Content-Type': 'application/json',
		Authorization,
	};
	try {
		const instance = await fetch(url, {
			method,
			params,
			headers,
		});
		if (instance.status !== 200) {
			return {
				ok: instance.ok,
				status: instance.status,
				statusText: "User doesn't exists",
			};
		}
		const response = await instance.json();
		return {
			...response,
			status: instance.status,
		};
	} catch (error) {
		throw new Error(error);
	}
};

export const fetchApi = async ({ data = {}, method = 'GET', params, endpoint } = {}) => {
	const urlBase = 'https://voldemort.klustera.com';
	const url = `${urlBase}${endpoint}${data}`;
	const headers = {
		'Content-Type': 'application/json',
		'x-access-token': getToken(),
	};

	try {
		const instance = await fetch(url, {
			method,
			params,
			headers,
		});
		if (instance.status !== 200) {
			const response = await instance.json();
			return {
				ok: instance.ok,
				status: instance.status,
				statusText: response.message,
			};
		}
		const response = await instance.json();
		return response;
	} catch (error) {
		return {
			ok: false,
			status: 500,
			statusText: 'error',
		};
	}
};
