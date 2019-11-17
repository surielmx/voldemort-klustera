import React from 'react';
import './Login.css';

const Login = () => {
	return (
		<div className="row middle-xs center-xs login">
			<div className="col-xs-12 col-sm-4">
				<div className="login-container">
					<div className="login-container__logo">
						<img
							src="https://2017.klustera.com/wp-content/uploads/2016/02/ICONO2-e1504113264513.png"
							alt="logo"
							height="141"
							class="login-container__logo-img"
						/>
					</div>
					<form
						name="login-form"
						novalidate
						autoomplete="off"
						className="login-container__form"
					>
						<fieldset className="fieldset">
							<label for="user">Usuario</label>
							<input
								type="text"
								name="user"
								className="m-input m-input--in-login"
								required
							/>
						</fieldset>
						<fieldset className="fieldset">
							<label for="password">Password</label>
							<input
								type="password"
								name="password"
								className="m-input m-input--in-login"
								required
							/>
						</fieldset>
						<div className="align-center">
							<button disabled type="submit">
								Iniciar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
