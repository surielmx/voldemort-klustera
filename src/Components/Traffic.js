import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import isValidObject from '../util/Validators';

const Trafic = ({ options }) => {
	if (!isValidObject(options)) {
		return '';
	}
	const chartOptions = {
		chart: {
			type: 'column',
		},
		title: {
			text: 'Foot Traffic',
		},
		xAxis: {
			categories: options.categories,
			title: {
				text: null,
			},
			crosshair: true,
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Values',
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
				},
			},
		},
		tooltip: {
			backgroundColor: '#37474F',
			borderWidth: 0,
			style: {
				color: 'white',
				fontSize: '12px',
			},
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat:
				'<tr><td style="color:{series.color};font-weight: bold;padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:,.0f}</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true,
		},
		lang: {
			thousandsSep: ',',
		},
		colors: ['#7cd26a', '#2C8DFF'],
		plotOptions: {
			series: {
				dataLabels: {
					enabled: true,
					color: 'black',
					formatter: function() {
						return parseInt(this.y);
					},
				},
			},
			column: {
				pointPadding: 0.2,
				borderWidth: 0,
			},
		},
		series: options.data,
		navigation: {
			buttonOptions: {
				align: 'right',
				height: 48,
				width: 48,
				symbolSize: 24,
				symbolX: 23,
				symbolY: 21,
				symbolStrokeWidth: 2,
			},
		},
	};

	return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default Trafic;
