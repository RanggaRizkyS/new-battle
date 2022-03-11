
var hp_player = 1000;
var hp_enemy = 1000;
var level = 1;
var xp = 0;
var attack = Math.floor(Math.random() * 25) + 120;
var heal = Math.floor(Math.random() * 10) + 70;
let enemyAttack = Math.floor(Math.random() * 20) + 120;

function buttonAttack() {
	hp_enemy -= attack;
	var succes = hp_enemy -= attack;
	document.getElementById("result").innerHTML = "you hit enemy with"+attack+" damage, now enemy have"+succes+"healt";
	setTimeout(() => { hp_player -= enemyAttack; var failed = hp_player -= enemyAttack; document.getElementById("result").innerHTML = "enemy hit you with"+enemyAttack+" damage, now you have"+failed+"healt"; }, 300);
	setTimeout(() => { if (hp_player < 0) { document.getElementById("result").innerHTML = "Defeat"; }; if (hp_enemy < 0) { document.getElementById("result").innerHTML = "Win"; }; }, 400);
}

if (hp_player < 0) {
	document.getElementById("result").innerHTML = "Defeat";
}

if (hp_enemy < 0) {
	document.getElementById("result").innerHTML = "Win";
}

if (level === 1) {
	if (xp > 500) {
		level++;
		xp = 0;
		console.log(level);
		console.log(xp);
		document.getElementById("levelUp").innerHTML = "Congratulations, Succes level up to level 2";
    }
}

if (level === 2) {
	if (xp > 1000) {
		level++;
		xp = 0;
		console.log(level);
		console.log(xp);
		document.getElementById("levelUp").innerHTML = "Congratulations, Succes level up to level 3";
	}
}

if (level === 3) {
	if (xp > 3000) {
		level++;
		xp = 0;
		console.log(level);
		console.log(xp);
		document.getElementById("levelUp").innerHTML = "Congratulations, Succes level up to level 2";
	}
}

if (level === 4) {
	if (xp > 4000) {
		level++;
		xp = 0;
		console.log(level);
		console.log(xp);
		document.getElementById("levelUp").innerHTML = "Congratulations, Succes level up to level 2";
	}
}

if (level === 5) {
	if (xp > 5000) {
		level++;
		xp = 0;
		console.log(level);
		console.log(xp);
		document.getElementById("levelUp").innerHTML = "Congratulations, Succes level up to level 2";
	}
}

if (level === 6) {
	if (xp > 5700) {
		level++;
		xp = 0;
		console.log(level);
		console.log(xp);
		document.getElementById("levelUp").innerHTML = "Congratulations, Succes level up to level 2";
	}
}

if (level === 7) {
	if (xp > 6000) {
		level++;
		xp = 0;
		console.log(level);
		console.log(xp);
		document.getElementById("levelUp").innerHTML = "Congratulations, Succes level up to level 2";
	}
}

if (level === 8) {
	if (xp > 7000) {
		level++;
		xp = 0;
		console.log(level);
		console.log(xp);
		document.getElementById("levelUp").innerHTML = "Congratulations, Succes level up to level 2";
	}
}

if (level === 9) {
	if (xp > 9000) {
		level++;
		xp = 0;
		console.log(level);
		console.log(xp);
		document.getElementById("levelUp").innerHTML = "Congratulations, Succes level up to level 2";
	}
}

if (level === 10) {
	if (xp > 9500) {
		level++;
		xp = 0;
		console.log(level);
		console.log(xp);
		document.getElementById("levelUp").innerHTML = "Congratulations, Succes level up to level 2";
	}
}

if (level === 11) {
	document.getElementById("levelUp").innerHTML = "level max";
}