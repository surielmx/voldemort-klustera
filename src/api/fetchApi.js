export const fetchApi = ({
	data = {},
	method = 'GET',
	params,
	feature,
	endpoint,
} = {}) => async dispatch => {
	const urlBase = 'https://voldemort.klustera.com';
	const url = `${urlBase}${endpoint}`;
	const headers = { 'Content-Type': 'application/json' };

	try {
		const instance = await fetch(url, {
			method,
			body: JSON.stringify(data),
			params,
			headers,
		});
		if (instance.ok) {
			const response = await instance.json();
			let { payload } = response;
			payload = {
				...response.headerResponse,
				...response.payload,
			};

			return await payload;
		}
	} catch (error) {
		throw new Error(error);
	}
};
