import React from 'react';
import './styles/AnimatedTextWipe.css';

const AnimatedTextWipe = (props) => {

	const FirstColor = props.firstColor;
	const SecondColor = props.secondColor;
	const TextColor = props.textColor;
	const MBM = props.MBM;

	const AnimatedTextWipeOuter = {
		'background': 'linear-gradient(to right, #' + FirstColor + ' 0%, #' + FirstColor + ' 33%, #' + SecondColor + ' 33%, #' + SecondColor + ' 66%, #' + FirstColor + ' 66%, #' + FirstColor + ' 100%)',
		'backgroundSize': '500% 100%',
		'width': 'fit-content'
	};

	const AnimatedTextWipeInner = {
		'color': '#' + TextColor,
		'mixBlendMode': MBM === 'true' ? 'difference' : 'unset'
	};

	return (
		<div className={`${props.direction}`} style={AnimatedTextWipeOuter}>
			<div style={AnimatedTextWipeInner}>
				{props.text}
			</div>
		</div>
	);
};

export default AnimatedTextWipe;