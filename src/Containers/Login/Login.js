import React, { Component } from 'react';
import './Login.css';
import { isAuthenticated } from '../../util/Session';
import setSession from './LoginActions';

class Login extends Component {
	statusLogin = isAuthenticated();
	state = {
		isDisabledButton: true,
		errorSesion: '',
		username: '',
		password: '',
	};
	dataForm = {};
	componentDidMount = () => {
		this.handleSession();
	};
	handleSession = () => {
		const { push } = this.props;
		if (this.statusLogin) {
			push('/dashboard');
		}
	};
	validateForm = () => {
		const isValidForm = Object.values(this.dataForm).filter(input => input !== '');
		return isValidForm.length !== 2;
	};
	handleChangeForm = ({ target }) => {
		const { name, value } = target;
		this.dataForm = {
			...this.dataForm,
			[name]: value,
		};
		const isDisabledButton = this.validateForm(this.dataForm);
		this.setState({
			...this.dataForm,
			isDisabledButton,
			errorSesion: '',
		});
	};
	handleSessionError = ({ ok = true, statusText = '' }) => {
		if (!ok) {
			this.dataForm = {
				username: '',
				password: '',
			};
			const isDisabledButton = this.validateForm(this.dataForm);
			this.setState({
				...this.dataForm,
				isDisabledButton,
				errorSesion: statusText,
			});
		}
	};
	handleSubmit = async e => {
		const { push } = this.props;
		const { isDisabledButton } = this.state;
		e.preventDefault();
		if (!isDisabledButton) {
			const response = await setSession(this.dataForm, push);
			if (typeof response !== 'undefined') {
				this.handleSessionError(response);
			}
		}
	};
	render() {
		const { username, password, isDisabledButton, errorSesion } = this.state;

		return (
			<div className="row middle-xs center-xs login">
				<div className="col-xs-12 col-sm-6 col-md-4">
					<div className="login-container__logo">
						<img
							src="https://2017.klustera.com/wp-content/uploads/2016/02/ICONO2-e1504113264513.png"
							alt="logo"
							height="141"
							className="login-container__logo-img"
						/>
					</div>
					<div className="login-container bg-white">
						<p className="fz-20">Log in to continue to dashboard</p>
						<form
							name="login-form"
							autoomplete="off"
							className="login-container__form"
							onSubmit={this.handleSubmit}
						>
							<fieldset className="fieldset">
								<label htmlFor="username">
									Usuario
									<input
										value={username}
										type="text"
										name="username"
										className="m-input m-input--in-login"
										onChange={this.handleChangeForm}
										required
										placeholder="User"
									/>
								</label>
							</fieldset>
							<fieldset className="fieldset">
								<label htmlFor="password">
									Password
									<input
										type="password"
										name="password"
										value={password}
										className="m-input m-input--in-login"
										onChange={this.handleChangeForm}
										required
										placeholder="password"
									/>
								</label>
							</fieldset>
							<div className="mt-15">
								<button
									disabled={isDisabledButton}
									type="submit"
									className="bg-blue color-white"
								>
									Iniciar
								</button>
							</div>
							{errorSesion !== '' && <p className="login-error">{errorSesion}</p>}
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
