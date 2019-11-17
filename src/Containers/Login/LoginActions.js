import { LOGIN_GET } from '../../Constants/endpoints';
import getSessionApi from './LoginApi';

const getSession = dataForm => {
	const query = {
		data: dataForm,
		endpoint: LOGIN_GET,
	};
	getSessionApi(query);
};

export default getSession;
