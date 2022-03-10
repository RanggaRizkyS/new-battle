var hp_player = 1000;
var level = 1;
var hp_enemy = 1000;
var xp = 700;
let attack = Math.floor(Math.random() * 100) + 349;
let heal = Math.floor(Math.random() * 100) + 240;

if (level === 1) {
	if (xp > 500) {
		level++;
		xp = 0;
		console.log(level);
		console.log(xp);
		Swal.fire('Level Up to level 2')
	}
}

if (level === 2) {
	if (xp > 1000) {
		level++;
		xp = 0;
		console.log(level);
		console.log(xp);
	}
}