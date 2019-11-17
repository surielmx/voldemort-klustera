import React, { Component } from 'react';
import './Dashboard.css';
import Filters from '../Filters/Filters';
import Container from '../../Components/Container';
import Kpi from '../../Components/Kpi';

class Dashboard extends Component {
	render() {
		return (
			<div className="wrapper">
				<section className="dashboard">
					<Container>
						<Filters />
					</Container>
					<Container>
						<Kpi />
					</Container>
				</section>
			</div>
		);
	}
}

export default Dashboard;
