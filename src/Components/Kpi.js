import React from 'react';

const Kpi = ({ icon }) => {
	const kpiStyle = {
		background: '#ffffff',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	};
	const kpiIconStyle = {
		height: '40px',
		marginLeft: '10px',
	};
	const kpiContainerContent = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	};
	const kpiLabel = { color: '#6c757d', fontSize: '0.875rem', marginBottom: '0.3125rem' };
	const kpiContent = { color: '#242321', fontSize: '1.25rem' };
	return (
		<div style={kpiStyle}>
			<img src="/img/logo192.png" style={kpiIconStyle} alt="kpi icon" />
			<div style={kpiContainerContent}>
				<span style={kpiLabel}>Label</span>
				<span style={kpiContent}>Content</span>
			</div>
		</div>
	);
};

export default Kpi;
