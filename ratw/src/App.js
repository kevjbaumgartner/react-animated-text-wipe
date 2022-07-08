import { AnimatedTextWipe } from './lib/index.js';

function App() {
	return (
		<div className="App">
			<AnimatedTextWipe
				firstColor='FFFFFF'
				secondColor='000000'
				textColor='FFFFFF'
				direction='right'
				difference='true'
				antialiasing='true'
				speed='1'
			>
				Lobortis leo orci, id tincidunt magna pulvinar a. Aliquam erat volutpat.
			</AnimatedTextWipe>
		</div>
	);
}

export default App;