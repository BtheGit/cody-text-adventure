let choices = {
	0:	{
		question: 
			`You are a student in junior high school. 
			 It's a rainy day. 
			 You are walking in the corridor. 
			 Suddenly, you get punched right in the face. You're in a lot of pain and you try to stand up but can't. 
			 You see your classmate holding a stick and trying to hit you. 
			 You stand up and hit him as hard as you can.
			 He flies back and crashes into the wall. 
			 You're surprised. 
			 You realize you have a super power but now you're afraid you killed the bully.`,
		choices: [
			{
				text: 'Run away',
				goto: 1
			},
			{
				text: 'Call the police',
				goto: 3
			}
		]
	},
	1:	{
		question: 
			`You look around and you see everyone in the school is coming out.
			They're looking at you and talking to each other.
			You see a lot of police are pointing their guns at you.
			You start to run away when you hear a gunshot.`,
		choices: [
			{
				text: 'Keep running',
				goto: 2
			},
			{
				text: 'Turn and fight',
				goto: 21
			}
		]
	},
	2:	{
		question: 
			`You start running faster and faster.
			All the police start shooting at you but you seem to be invulnerable because the bullets don't hurt.
			You throw two cars at the police and kill them all.
			You see the true nature of yourself.
			You were born to be a bad guy.
			The government sends the army to fight you.`,		
		choices: [
			{
				text: 'Fight them',
				goto: 11
			},
			{
				text: 'Try and talk to the government',
				goto: 17
			}
		]
	},
	3:	{
		question: 
			`You walk up to the man to see if he is still alive.
			You call the police and you tell them that you hurt a man badly with your unimaginable power.
			Soon after, the police arrive and bring you to the defense minister.
			He asks you to demonstrate your power to him.
			When you show him, he says aliens are going to attack Earth and the weapons on Earth are too weak to defeat then.
			He asks you to save humanity.`,
		choices: [
			{
				text: 'Agree to help',
				goto: 12
			},
			{
				text: 'Refuse to help',
				goto: 4
			}
		]
	},
	4:	{
		question: 
			`You say you don't want to protect the Earth.
			As you begin to walk away, everyone starts shooting at you.
			You use your energy blasts and destroy the entire school, killing everyone.
			You see the alien army outside the rubble.`,
		choices: [
			{
				text: 'Talk to the aliens',
				goto: 5
			},
			{
				text: 'Help the aliens',
				goto: 5
			}
		]
	},
	5:	{
		question: 
			`You talk to the king of the aliens and he asks you to help them kill all the people on Earth.
			They will give you a lot of gold if you help them.
			You agree to help.
			You create an astronomically-sized energy ball. 
			When it explodes, the energy blast kills all life on Earth.
			After, they want to take you to their space ship.`,
		choices: [
			{
				text: 'Go to their spaceship',
				goto: 13
			},
			{
				text: 'Stay behind',
				goto: 6
			}
		]
	},
	6:	{
		question: 
			`You say you don't want to board the ship and you tell them to bring the gold to Earth instead.
			Suddenly, a bizarre-looking man falls from the sky.
			While you are walking towards the man, he attacks you with a gigantic energy blast.
			Fotunately, you are able to block the attack but you realize that the man is a minion of the aliens and he is way stronger than you.`,
		choices: [
			{
				text: 'Surrender to the aliens',
				goto: 8
			},
			{
				text: 'Fight the minion',
				goto: 14
			}
		]
	},
	7:	{
		question: 
			`The aliens say they want to acquire Earth. 
			They don't want you to try and stop them.
			While you are explaining that you don't want to fight them, a gigantic man runs toward you and tries to catch you off guard.
			He almost hits you, but you are able to prevent his attack and you counter with a punch that knocks him out.
			He is laying on the ground and is completely immobilized.`,
		choices: [
			{
				text: 'Kill him',
				goto: 18
			},
			{
				text: 'Keep him as a hostage',
				goto: 15
			}
		]
	},
	8:	{
		question: 
			`You know you can't kill the minion so you choose to surrender.
			The aliens put you into a box made of unbreakable, transparent material and bring you to their planet.
			They say they'll execute you unless you help them to dominate other planets.`,
		choices: [
			{
				text: 'Help them',
				goto: 9
			},
			{
				text: 'Try to break out',
				goto: 10
			}
		]
	},
	9:	{
		question: 
			`You don't want to die so you choose to help the aliens.
			They start to take you to join their wars of invasion and help them to dominate other planets.
			The days start blending together as you go from one planet to the next until you accidentally get a mystic stone which can enhance people's strength.`,
		choices: [
			{
				text: 'Use the stone',
				goto: 16
			},
			{
				text: 'Give it to the aliens',
				goto: 19
			}
		]
	},
	10:{
		question: 
			`You want to break out of the box so you start to punch it.
			When you've almost managed to break it, their minion cuts your head off.
			You thought you would never wake up again but you do. 
			When you wake up, you see a demon.
			He tells you he can ressurect you and make you stronger, but you need to give him your soul the next time you die.`,
		choices: [
			{
				text: 'Comply with him',
				goto: 20
			},
			{
				text: 'Fight him',
				goto: 14
			}
		]
	},
	11:{
		question: 
			`When the army arrives you start to beat them up.
			You're winning until they use their chemical weapon on you.
			Your body becomes numb and you collapse to the ground.`,
		choices: []
	},
	12:{
		question: 
			`You say you will defend Earth so he takes you to a secret Inhuman training course. 
			You see a lot of people who possess different powers.
			You stay there to enhance your power and try to learn to control it.
			A month later, the aliens come to attack Earth but you still don't know how strong you are.
			When the aliens arrive, you and all the Inhumans run toward them. 
			You are able to kill half of the aliens in the first three minutes.
			None of them are powerful enough to hurt you.
			Suddenly, their strongest fighter emerges and blasts you and the other Inhumans with energy from his hands.
			Everyone but you is killed but you realize his power can't hurt you. 
			He tries to use all his remaining power to attack you but you are too strong.
			You walk up to him and barely touch his shoulder. 
			He is thrown back, all the way into space.
			The other aliens are scared but you don't stop until they are all dead.
			Then you become the ruler of Earth.`,
		choices: []
	},
	13:{
		question: 
			`You board the ship and ask them to give you gold. 
			The ship travels to a planet where there is a ton of gold and they tell you to wait there for them.
			After they leave you run to get the gold but you realize the gold is an illusion.
			They duped you!`,
		choices: []
	},
	14:{
		question: 
			`You start to use all your skills, powers, and energy to go for his throat, but he is omnipotent so you can't even hurt him.
			You start running out of energy and can't block his attacks anymore.
			He attacks you one more time but without protection you die.`,
		choices: []
	},
	15:{
		question: 
			`You tell the aliens that if they try to hurt anyone you will kill their minion.
			But they don't really care about him and start shooting at you.
			Their gun is too weak though and it doesn't harm you.
			You tell their king the aliens aren't welcome on Earth and throw their ships off the planet.
			You become the ruler of the world.`,
		choices: []
	},
	16:{
		question: 
			`You use the stone and your strength and power become stronger tenfold.
			Now, your power is capable of destroying the entire alien race.
			You slaughter them all without getting injured and you take their money, guns, and other valuable stuff.
			You are now the richest and most powerful man in your dimension.`,
		choices: []
	},
	17: {
		question:
		`You tell the government that you didn't mean to hurt anyone.
		However, they don't care.
		They think you are too dangerous.
		They command you to go to space and not return.
		You walk to the spaceship and take off.
		When you leave the atmosphere, the spaceship explodes.
		The government installed a bomb on your ship and it kills you.`,
		choices: []
	},
	18: {
		question:
		`After you kill their minion, all the aliens run towards you.
		You use your energy blast to eliminate everyone.
		It is the extinction of the alien race.
		You become the ruler of the alien's home planet.`,
		choices: []
	},
	19: {
		question:
		`You give the stone to the aliens.
		They are really happy and decide to set you free.
		They give you a spaceship.
		You live happily ever after travelling around space.`,
		choices: []
	}, 
	20: {
		question:
		`The demon brings you back to life and you destroy the entire alien race.
		You go to hell and try to resist the demon.
		He predicted you would want to betray him so he has prepared to fight you.
		You are no match for him. 
		He easily beats you and takes your soul.
		You die and have to stay in hell forever.`,
		choices: []
	},
	21: {
		question:
		`
		You stop running and turn to face the police.
		They keep shooting at you but the bullets don't hurt you.
		They get scared and call for backup.
		The army shows up almost immediately.
		`,
		choices: [
			{
				text: 'Attack the army',
				goto: 11
			},
			{
				text: 'Try and talk to them',
				goto: 17
			}
		]
	},
	999: {
		question: 'INCOMPLETE',
		choices: []
	}
}

// `You are a student in junior high school. 
//  It's a rainy day. 
//  You are walking in the corridor. 
//  Suddenly, you get punched right in the face. You're in a lot of pain and you try to stand up but can't. 
//  You see your classmate holding a stick and trying to hit you. 
//  You stand up and hit him as hard as you can.
//  He flies back and crashes into the wall. 
//  You're surprised. 
//  You realize you have a super power but now you're afraid you killed the bully.` 
// 'Run away'
// 'Call the police'

// `You look around and you see everyone in the school is coming out.
// They're looking at you and talking to each other.
// You see a lot of police are pointing their guns at you.
// You start to run away when you hear a gunshot.`
// 'Keep running'
// 'Turn and fight'

// `You start running faster and faster.
// All the police start shooting at you but you seem to be invulnerable because the bullets don't hurt.
// You throw two cars at the police and kill them all.
// You see the true nature of yourself.
// You were born to be a bad guy.
// The government sends the army to fight you.`
// 'Fight them'
// 'Try and talk to the government'

// `When the army arrives you start to beat them up.
// You're winning until they use their chemical weapon on you.
// Your body becomes numb and you collapse to the ground.`


// `You walk up to the man to see if he is still alive.
// You call the police and you tell them that you hurt a man badly with your unimaginable power.
// Soon after, the police arrive and bring you to the defense minister.
// He asks you to demonstrate your power to him.
// When you show him, he says aliens are going to attack Earth and the weapons on Earth are too weak to defeat then.
// He asks you to save humanity.`
// 'Fight'
// 'Say no'

// `You say you will defend Earth so he takes you to a secret Inhuman training course. 
// You see a lot of people who possess different powers.
// You stay there to enhance your power and try to learn to control it.
// A month later, the aliens come to attack Earth but you still don't know how strong you are.
// When the aliens arrive, you and all the Inhumans run toward them. 
// You are able to kill half of the aliens in the first three minutes.
// None of them are powerful enough to hurt you.
// Suddenly, their strongest fighter emerges and blasts you and the other Inhumans with energy from his hands.
// Everyone but you is killed but you realize his power can't hurt you. 
// He tries to use all his remaining power to attack you but you are too strong.
// You walk up to him and barely touch his shoulder. 
// He is thrown back, all the way into space.
// The other aliens are scared but you don't stop until they are all dead.
// Then you become the ruler of Earth.`


// `You say you don't want to protect the Earth.
// As you begin to walk away, everyone starts shooting at you.
// You use your energy blasts and destroy the entire school, killing everyone.
// You see the alien army outside the rubble.`
// 'Talk to the aliens'
// 'Help the aliens'

// `You talk to the king of the aliens and he asks you to help them kill all the people on Earth.
// They will give you a lot of gold if you help them.
// You agree to help.
// You create an astronomically-sized energy ball. 
// When it explodes, the energy blast kills all life on Earth.
// After, they want to take you to their space ship.`
// 'Go to their space ship'
// 'Kill them'

// `You board the ship and ask them to give you gold. 
// The ship travels to a planet where there is a ton of gold and they tell you to wait there for them.
// After they leave you run to get the gold but you realize the gold is an illusion.
// They duped you!`


// `You say you don't want to board the ship and you tell them to bring the gold to Earth instead.
// Suddenly, a bizarre-looking man falls from the sky.
// While you are walking towards the man, he attacks you with a gigantic energy blast.
// Fotunately, you are able to block the attack but you realize that the man is a minion of the aliens and he is way stronger than you.`
// 'Surrender to the aliens'
// 'Fight the minion'

// `You start to use all your skills, powers, and energy to go for his throat, but he is omnipotent so you can't even hurt him.
// You start running out of energy and can't block his attacks anymore.
// He attacks you one more time but without protection you die.`


// `The aliens say they want to acquire Earth. 
// They don't want you to try and stop them.
// While you are explaining that you don't want to fight them, a gigantic man runs toward you and tries to catch you off guard.
// He almost hits you, but you are able to prevent his attack and you counter with a punch that knocks him out.
// He is laying on the ground and is completely immobilized.`
// 'Kill him'
// 'Keep him as a hostage'

// `You tell the aliens that if they try to hurt anyone you will kill their minion.
// But they don't really care about him and start shooting at you.
// Their gun is too weak though and it doesn't harm you.
// You tell their king the aliens aren't welcome on Earth and throw their ships off the planet.
// You become the ruler of the world.`


// `You know you can't kill the minion so you choose to surrender.
// The aliens put you into a box made of unbreakable, transparent material and bring you to their planet.
// They say they'll execute you unless you help them to dominate other planets.`
// 'Help them'
// 'Try to break out'

// `You don't want to die so you choose to help the aliens.
// They start to take you to join their wars of invasion and help them to dominate other planets.
// The days start blending together as you go from one planet to the next until you accidentally get a mystic stone which can enhance people's strength.`
// 'Use the stone'
// 'Give it to the aliens'

// `You use the stone and your strength and power become stronger tenfold.
// Now, your power is capable of destroying the entire alien race.
// You slaughter them all without getting injured and you take their money, guns, and other valuable stuff.
// You are now the richest and most powerful man in your dimension.`


// `You want to break out of the box so you start to punch it.
// When you've almost managed to break it, their minion cuts your head off.
// You thought you would never wake up again but you do. 
// When you wake up, you see a demon.
// He tells you he can ressurect you and make you stronger, but you need to give him your soul the next time you die.`
// 'Comply with him'
// 'Fight him'

