import React from 'react';

const Container = ({ bottomSeparation = true, card = true, children, style }) => {
	const containerStyle = {
		background: '#ffffff',
		display: 'block',
		width: '100%',
		border: 0,
		borderRadius: '8px',
		padding: '10px',
		boxShadow: 'rgb(210,211,214) 0rem 0.1875rem 0.675rem 0.1875rem',
	};
	const cardStyle = !card && { boxShadow: 'none' };
	const bottomSeparationStyle = (bottomSeparation && {
		margin: '0rem 0rem 0.9375rem',
	}) || { margin: 0 };
	const styles = {
		...containerStyle,
		...cardStyle,
		...style,
		...bottomSeparationStyle,
	};
	return <div style={styles}>{children}</div>;
};

export default Container;
