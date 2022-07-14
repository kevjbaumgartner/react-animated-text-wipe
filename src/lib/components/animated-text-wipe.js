import React from 'react';
import './styles/AnimatedTextWipe.css';

const AnimatedTextWipe = (props) => {

	const id = props.id;
	const className = props.className;

	const firstColor = props.firstColor;
	const secondColor = props.secondColor;
	const textColor = props.textColor;

	const difference = props.difference;
	const antialiasing = props.antialiasing;
	const direction = props.direction;
	const speed = props.speed;

	const styles = {
		AnimatedTextWipeOuter: {
			'background': 'linear-gradient(to ' + (direction === 'right' ? 'right' : direction === 'left' ? 'right' : 'bottom') + ', ' + firstColor + ' 0%, ' + firstColor + ' 33%, ' + secondColor + ' 33%, ' + secondColor + ' 66%, ' + firstColor + ' 66%, ' + firstColor + ' 100%)',
			'backgroundSize': direction === 'right' ? '303% 100%' : direction === 'left' ? '303% 100%' : '100% 303%',
			'width': 'fit-content'
		},
		AnimatedTextWipeInner: {
			'color': textColor,
		},
		MBM: {
			'mixBlendMode': difference === 'true' ? 'difference' : 'unset',
		},
		AA: {
			'backgroundColor': textColor,
			'WebkitBackgroundClip': 'text',
			'WebkitTextFillColor': 'transparent'
		},
		Animation: {
			'animation': direction + ' ' + speed + 's linear 0s infinite normal'
		}
	};

	return (
		<span id={id} className={className} style={Object.assign({}, styles.AnimatedTextWipeOuter, styles.Animation)}>
			<span style={Object.assign({}, styles.AnimatedTextWipeInner, difference === 'true' ? styles.MBM : '', antialiasing === 'true' ? styles.AA : '')}>
				{props.children}
			</span>
		</span>
	);
};

export default AnimatedTextWipe;