import React from 'react';
import Container from './Container';

const Kpi = ({ kpi }) => {
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
		<Container card={false} background={false} padding={false}>
			<div className="row">
				{kpi.map(kp => (
					<div className="col-xs-12 col-sm-3 col-md-3 col-lg-2" key={kp.id}>
						<Container>
							<div style={kpiStyle}>
								<img src="/img/logo192.png" style={kpiIconStyle} alt="kpi icon" />
								<div style={kpiContainerContent}>
									<span style={kpiLabel}>{kp.name}</span>
									<span style={kpiContent}>{kp.content}</span>
								</div>
							</div>
						</Container>
					</div>
				))}
			</div>
		</Container>
	);
};

export default Kpi;
