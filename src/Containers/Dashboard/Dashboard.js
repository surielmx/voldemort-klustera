import React, { Component, Fragment, lazy, Suspense } from 'react';
import './Dashboard.css';
import { isAuthenticated, resetSession } from '../../util/Session';
import updateDashboard from './DasboardActions';

const Progress = lazy(() => import('../../Components/Progress'));
const Modal = lazy(() => import('../../Components/Modal'));
const Filters = lazy(() => import('../Filters/Filters'));
const Kpi = lazy(() => import('../../Components/Kpi'));
const Traffic = lazy(() => import('../../Components/Traffic'));

class Dashboard extends Component {
	statusLogin = isAuthenticated();
	filterForm = {};
	state = {
		startDate: '',
		endtDate: '',
		startHour: '',
		endtHour: '',
		isDisabledButton: true,
		kpi: [],
		daily: {},
		showProgress: false,
		modalMessage: '',
	};
	componentDidMount = () => {
		this.handleSession();
	};
	componentWillUnmount = () => {
		resetSession();
	};
	handleSession = () => {
		const { push } = this.props;
		if (!this.statusLogin) {
			push('/');
		}
	};
	validateForm = () => {
		const isValidForm = Object.values(this.filterForm).filter(input => Boolean(input));
		return isValidForm.length !== 4;
	};
	handleChangeFilter = (name, value) => {
		this.filterForm = {
			...this.filterForm,
			[name]: value,
		};
		const isDisabledButton = this.validateForm();

		this.setState({ ...this.filterForm, isDisabledButton });
	};
	handleDashboardResponse = ({ status = 200, statusText = '', kpi = [], daily = {} }) => {
		this.setState({ showProgress: false });
		if (status === 401) {
			this.setState({ showModal: true, modalMessage: statusText });
			return;
		}
		this.setState({ kpi, daily });
	};
	hideModal = () => {
		const { push } = this.props;
		this.setState({ showModal: false, modalMessage: '' });
		push('/');
	};
	handleSubmit = async e => {
		e.preventDefault();
		document.activeElement.blur();
		this.setState({ showProgress: true });
		const response = await updateDashboard(this.filterForm);
		this.handleDashboardResponse(response);
	};
	render() {
		const { showProgress, showModal, modalMessage, kpi, daily } = this.state;
		return (
			<Fragment>
				<div className="wrapper">
					<section className="dashboard">
						<Suspense fallback={<span>LOADING...</span>}>
							<Filters
								onSubmit={this.handleSubmit}
								onChangeFilter={this.handleChangeFilter}
								{...this.state}
							/>
						</Suspense>
						<Suspense fallback={<span>LOADING...</span>}>
							<Kpi kpi={kpi} />
						</Suspense>
						<Suspense fallback={<span>LOADING...</span>}>
							<Traffic options={daily} />
						</Suspense>
					</section>
				</div>
				<Modal show={showModal} handleClose={this.hideModal} content={modalMessage} />
				<Progress show={showProgress} />
			</Fragment>
		);
	}
}

export default Dashboard;
