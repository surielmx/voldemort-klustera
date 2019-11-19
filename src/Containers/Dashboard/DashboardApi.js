import { fetchApi } from '../../api/fetchApi';
import { parseKpi, parseDaily } from './DashboardUtil';

const fetchKpi = async queryKpi => {
	return await fetchApi(queryKpi);
};
const fetchDaily = async queryDaily => {
	return await fetchApi(queryDaily);
};

const updateDashboardApi = async (queryKpi, queryDaily, push) => {
	const [responseKpi, responseDaily] = await Promise.all([
		fetchKpi(queryKpi),
		fetchDaily(queryDaily),
	]);
	if (responseKpi.status === 401 || responseDaily.status === 401) {
		return { statusText: responseKpi.statusText, status: responseKpi.status };
	}
	const { kpis } = responseKpi;
	const { results } = responseDaily;
	const kpi = parseKpi(kpis);
	const daily = parseDaily(results.visitors_daily);
	return { status: 200, kpi, daily };
};

export default updateDashboardApi;
