export const fetchLogin = async ({ data = {}, method = 'GET', params, endpoint } = {}) => {
	const urlBase = 'https://voldemort.klustera.com';
	const url = `${urlBase}${endpoint}`;
	const Authorization = 'Basic ' + btoa(data.username + ':' + data.password);
	const headers = {
		'Content-Type': 'application/json',
		Authorization,
	};
	const body = JSON.stringify(data);

	try {
		const { ok, redirected, status, statusText } = await fetch(url, {
			method,
			params,
			headers,
		});
		console.log(instance);
		if (instance.ok) {
			const response = await instance.json();
			// let { payload } = response;
			// payload = {
			// 	...response.headerResponse,
			// 	...response.payload,
			// };
			return response;
			// return await payload;
		}
		if (status === 401) {
			return;
		}
	} catch (error) {
		throw new Error(error);
	}
};

export const fetchApi = async ({ data = {}, method = 'GET', params, endpoint } = {}) => {
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
		if (instance.ok) {
			const response = await instance.json();
			// let { payload } = response;
			// payload = {
			// 	...response.headerResponse,
			// 	...response.payload,
			// };
			return response;
			// return await payload;
		}
	} catch (error) {
		throw new Error(error);
	}
};
