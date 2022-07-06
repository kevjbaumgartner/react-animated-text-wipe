import React from 'react';
import './styles/AnimatedTextWipe.css';

const AnimatedTextWipe = (props) => {
	return (
		<div className={`AnimatedTextWipe-Outer ${props.direction}`}>
			<div className='AnimatedTextWipe-Inner'>
				{props.text}
			</div>
		</div>
	);
};

export default AnimatedTextWipe;