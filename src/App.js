import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

const Login = lazy(() => import('./Containers/Login/Login'));
const Dashboard = lazy(() => import('./Containers/Dashboard/Dashboard'));

function App() {
	return (
		<Router>
			<Suspense fallback={<span>Loading...</span>}>
				<Switch>
					<Route
						exact
						path="/"
						render={({ history, match }) => <Login {...history} {...match} />}
					/>
					<Route
						exact
						path="/dashboard"
						render={({ history, match }) => <Dashboard {...history} {...match} />}
					/>
					<Route
						path="*"
						render={() => {
							return <Redirect to="/" />;
						}}
					/>
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
