import { AnimatedTextWipe } from './lib/index.js';

function App() {
	return (
		<div className="App">
			<AnimatedTextWipe
				firstColor='FFFFFF'
				secondColor='000000'
				textColor='FFFFFF'
				text='Lobortis leo orci, id tincidunt magna pulvinar a. Aliquam erat volutpat.'
				direction='right'
				difference='true'
				antialiasing='true'
				speed='1'
			/>
		</div>
	);
}

export default App;