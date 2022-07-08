import { AnimatedTextWipe } from './lib/index.js';

function App() {
	return (
		<div className="App">
			<AnimatedTextWipe
				firstColor='FFFFFF'
				secondColor='000000'
				textColor='FFFFFF'
				text='Test'
				direction='Right'
				MBM='true'
			/>
		</div>
	);
}

export default App;