const startCont = document.getElementById('start-container-outer')
const storyCont = document.getElementById('story-container-outer')
const storyDisplay =document.getElementById('story-container-inner')
const startButton = document.getElementById('startButton')
startButton.addEventListener('click', initGame)

function toggleDisplay(display) {
	display.classList.toggle('hidden')
}

function initGame() {
	toggleDisplay(startCont)
	toggleDisplay(storyCont)
	displayChoice(choices[0])
}

function reset() {
	toggleDisplay(startCont)
	toggleDisplay(storyCont)	
}

function updateDisplay(content, container = storyDisplay) {
	container.innerHTML = content
}

function displayChoice(choice) {
	const isEnd = choice.choices.length === 0
	const output = (`
		<div class="question ${isEnd ? 'endText' : ''}">${choice.question}</div>
		<div class="choices">${formatChoices(choice.choices)}</div>	
	`)
	updateDisplay(output)

	function formatChoices(choices) {
		if(choices.length) {
			return choices.map(el => {
				return (
					`<div class="choiceButton button" onclick="displayChoice(choices[${el.goto}])">
						<p>${el.text}</p>
					</div>`
				)
			})	
		}
		else {
			return (`
				<div class="button choiceButton endButton" onclick="reset()">
					<p>Start Over</p>
				</div>
			`)
		}
	}
}
