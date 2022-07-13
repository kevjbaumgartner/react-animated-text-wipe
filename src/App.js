import { AnimatedTextWipe } from './lib/index.js';

function App() {
	return (
		<div className='App'>
			<div id='demo-firstcolor'>
				<h1>First Color</h1>
				<h2>Red</h2>
				<AnimatedTextWipe
					firstColor='FF0000'
					secondColor='FFFFFF'
					textColor='000000'
					direction='right'
					difference='false'
					antialiasing='false'
					speed='2'
				>
					Child content goes here!
				</AnimatedTextWipe>
			</div>
			<div id='demo-secondcolor'>
				<h1>Second Color</h1>
				<h2>Blue</h2>
				<AnimatedTextWipe
					firstColor='FF0000'
					secondColor='0000FF'
					textColor='000000'
					direction='right'
					difference='false'
					antialiasing='false'
					speed='2'
				>
					Child content goes here!
				</AnimatedTextWipe>
			</div>
			<div id='demo-textcolor'>
				<h1>Text Color</h1>
				<h2>Green</h2>
				<AnimatedTextWipe
					firstColor='FF0000'
					secondColor='0000FF'
					textColor='00FF00'
					direction='right'
					difference='false'
					antialiasing='false'
					speed='2'
				>
					Child content goes here!
				</AnimatedTextWipe>
			</div>
			<div id='demo-direction'>
				<h1>Direction</h1>
				<h2>Right</h2>
				<AnimatedTextWipe
					firstColor='CDCDCD'
					secondColor='888888'
					textColor='000000'
					direction='right'
					difference='false'
					antialiasing='false'
					speed='2'
				>
					Child content goes here!
				</AnimatedTextWipe>
				<br />
				<h2>Left</h2>
				<AnimatedTextWipe
					firstColor='CDCDCD'
					secondColor='888888'
					textColor='000000'
					direction='left'
					difference='false'
					antialiasing='false'
					speed='2'
				>
					Child content goes here!
				</AnimatedTextWipe>
				<h2>Up</h2>
				<AnimatedTextWipe
					firstColor='CDCDCD'
					secondColor='888888'
					textColor='000000'
					direction='up'
					difference='false'
					antialiasing='false'
					speed='2'
				>
					Child content goes here!
				</AnimatedTextWipe>
				<br />
				<h2>Down</h2>
				<AnimatedTextWipe
					firstColor='CDCDCD'
					secondColor='888888'
					textColor='000000'
					direction='down'
					difference='false'
					antialiasing='false'
					speed='2'
				>
					Child content goes here!
				</AnimatedTextWipe>
			</div>
			<div id='demo-difference'>
				<h1>Difference (mix-blend-mode)</h1>
				<h2>Black vs. White</h2>
				<AnimatedTextWipe
					firstColor='FFFFFF'
					secondColor='000000'
					textColor='FFFFFF'
					direction='right'
					difference='true'
					antialiasing='false'
					speed='2'
				>
					Child content goes here!
				</AnimatedTextWipe>
			</div>
			<div id='demo-antialiasing'>
				<h1>Anti-Aliasing (background-clip)</h1>
				<h2>Black vs. White</h2>
				<AnimatedTextWipe
					firstColor='FFFFFF'
					secondColor='000000'
					textColor='FFFFFF'
					direction='right'
					difference='true'
					antialiasing='true'
					speed='2'
				>
					Child content goes here!
				</AnimatedTextWipe>
			</div>
			<div id='demo-speed'>
				<h1>Speed</h1>
				<h2>1 (Fast)</h2>
				<AnimatedTextWipe
					firstColor='CDCDCD'
					secondColor='888888'
					textColor='000000'
					direction='right'
					difference='false'
					antialiasing='false'
					speed='1'
				>
					Child content goes here!
				</AnimatedTextWipe>
				<br />
				<h2>5 (Slow)</h2>
				<AnimatedTextWipe
					firstColor='CDCDCD'
					secondColor='888888'
					textColor='000000'
					direction='right'
					difference='false'
					antialiasing='false'
					speed='5'
				>
					Child content goes here!
				</AnimatedTextWipe>
			</div>
		</div>
	);
}

export default App;