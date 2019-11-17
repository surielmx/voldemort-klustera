import React, { Component } from 'react';
import './Login.css';
import getSession from './LoginActions';

class Login extends Component {
	state = {
		isDisabledButton: true,
		user: '',
		password: '',
	};
	dataForm = {};
	validateForm = newValues => {
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
		});
	};
	handleSubmit = e => {
		const { isDisabledButton } = this.state;
		e.preventDefault();
		if (!isDisabledButton) {
			getSession(this.dataForm);
		}
	};
	render() {
		const { user, password, isDisabledButton } = this.state;

		return (
			<div className="row middle-xs center-xs login">
				<div className="col-xs-12 col-sm-4">
					<div className="login-container">
						<div className="login-container__logo">
							<img
								src="https://2017.klustera.com/wp-content/uploads/2016/02/ICONO2-e1504113264513.png"
								alt="logo"
								height="141"
								className="login-container__logo-img"
							/>
						</div>
						<form
							name="login-form"
							autoomplete="off"
							className="login-container__form"
							onSubmit={this.handleSubmit}
						>
							<fieldset className="fieldset">
								<label htmlFor="user">Usuario</label>
								<input
									value={user}
									type="text"
									name="user"
									className="m-input m-input--in-login"
									onChange={this.handleChangeForm}
									required
								/>
							</fieldset>
							<fieldset className="fieldset">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									name="password"
									value={password}
									className="m-input m-input--in-login"
									onChange={this.handleChangeForm}
									required
								/>
							</fieldset>
							<div className="mt-15">
								<button disabled={isDisabledButton} type="submit">
									Iniciar
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
