import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Progress = ({ show = false }) => {
	const progressStyle = {
		position: 'fixed',
		top: '0rem',
		bottom: '0rem',
		left: '0rem',
		right: '0rem',
		zIndex: 99999,
		textAlign: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0.75)',
		height: '100%',
	};
	const displayStyle = (show && 'flex') || 'none';

	const renderProgress = () => {
		return (
			<Fragment>
				<div
					className="row center-xs middle-xs"
					style={{
						display: displayStyle,
						...progressStyle,
					}}
				>
					<h2 className="color-gray">Procesando solicitud...</h2>
				</div>
			</Fragment>
		);
	};

	return ReactDOM.createPortal(renderProgress(), document.getElementById('progress-root'));
};

export default Progress;
