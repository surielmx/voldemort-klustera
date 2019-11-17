import { fetchLogin } from '../../api/fetchApi';

const getSessionApi = async query => {
	const response = await fetchLogin(query);
	console.log(response);
};

export default getSessionApi;
