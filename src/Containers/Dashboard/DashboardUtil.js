const kpiFormatter = {
	attraction: 'Attraction',
	avg_stay: '% Stay',
	clients: 'Clients',
	fb_registers: 'Registers',
	frequency: 'Frecuency',
	impacts: 'Impacts',
	market: 'Market',
	uniques: 'Inique visitors',
	visits: 'Visits',
};

const formatKpi = kpi => {
	if (String(kpi).indexOf('.') !== -1) {
		return parseFloat(kpi).toFixed(2);
	}
	return kpi;
};

export const getDate = date => {
	let originalDate = new Date(date).toLocaleDateString();
	const [month, day, year] = originalDate.split('/');
	return `${year}-${month}-${day}`;
};
export const getHour = date => {
	return new Date(date).getHours();
};
export const parseDaily = dailys => {
	const date = dailys.map(([date, ,]) => [date]);
	const visits = dailys.map(([, visits]) => visits);
	const passersby = dailys.map(([, , passersby]) => passersby);

	return {
		categories: date,
		data: [
			{
				name: 'Visits',
				data: visits,
			},
			{
				name: 'Passersby',
				data: passersby,
			},
		],
	};
};
export const parseKpi = kpis => {
	const kpiKeys = Object.keys(kpis);
	const newKpi = kpiKeys.map((kpi, index) => {
		const content = formatKpi(kpis[kpi]);
		return {
			id: index,
			name: [kpiFormatter[kpi]],
			content,
		};
	});
	return newKpi;
};
