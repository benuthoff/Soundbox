// Soundbar
// by Ben Uthoff
// Web Code

const sfx = [
	'./sound_files/vine_boom.mp3',
	'./sound_files/bruh.mp3',
	'./sound_files/among_us.mp3'
]

function play_index(ind) {
	let aud = new Audio(sfx[ind]);
	aud.play();
}