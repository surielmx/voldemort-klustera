import { LOGIN_GET } from '../../Constants/endpoints';
import setSessionApi from './LoginApi';

const setSession = (dataForm, push) => {
	const query = {
		data: dataForm,
		endpoint: LOGIN_GET,
	};
	return setSessionApi(query, push);
};

export default setSession;
