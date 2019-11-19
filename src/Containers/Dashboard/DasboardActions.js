import { KPIS_GET, DAILY_FOOTPRINT_GET } from '../../Constants/endpoints';
import { getDate, getHour } from './DashboardUtil';
import updateDashboardApi from './DashboardApi';

const updateDashboard = (filterData, push) => {
	const {
		startDate: initDate,
		endDate: finalDate,
		startHour: initHour,
		endHour: finalHour,
	} = filterData;
	const startDate = getDate(initDate);
	const endDate = getDate(finalDate);
	const startHour = getHour(initHour);
	const endHour = getHour(finalHour);

	const data = `${startDate}/${endDate}/${startHour}/${endHour}`;

	const queryKpi = {
		data,
		endpoint: KPIS_GET,
	};
	const queryDaily = {
		data,
		endpoint: DAILY_FOOTPRINT_GET,
	};
	return updateDashboardApi(queryKpi, queryDaily, push);
};

export default updateDashboard;
