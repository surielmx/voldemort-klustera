import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const overlayStyle = {
	top: '0',
	left: '0',
	right: '0',
	bottom: '0',
	display: 'flex',
	zIndex: '10',
	position: 'fixed',
	alignItems: 'center',
	touchAction: 'none',
	justifyContent: 'center',
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	WebkitTapHighlightColor: 'transparent',
};
const modalMainStyle = {
	position: 'fixed',
	background: 'white',
	width: '400px',
	height: 'auto',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%,-50%)',
};
const modalActionStyle = {
	flex: '0 0 auto',
	display: 'flex',
	padding: '8px',
	alignItems: 'center',
	justifyContent: 'flex-end',
};
const modalTitleStyle = {
	flex: '0 0 auto',
	padding: '16px 24px',
	fontSize: '1.25rem',
	fontWeight: 400,
	margin: 0,
};

const showModal = {
	display: 'block',
};
const hideModal = {
	display: 'none',
};

class Modal extends Component {
	renderChildren = () => {
		const { content, show, handleClose } = this.props;
		const showHideClassName = show ? showModal : hideModal;
		const progressStyle = { ...overlayStyle, ...showHideClassName };
		return (
			<div style={progressStyle}>
				<div style={modalMainStyle}>
					<h2 style={modalTitleStyle}>{content}</h2>
					<div style={modalActionStyle}>
						<button onClick={handleClose}>Close</button>
					</div>
				</div>
			</div>
		);
	};

	render() {
		return ReactDOM.createPortal(this.renderChildren(), document.getElementById('modal-root'));
	}
}

export default Modal;
