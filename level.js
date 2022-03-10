var level = 1;
var xp = 0;
document.getElementById("hp_player").innerHTML = hp_player;
document.getElementById("hp_enemy").innerHTML = hp_enemy;

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