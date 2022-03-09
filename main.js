var music = {},
    typeSprite = &#39;&#39;,
    types = [],
    gameData = {}
    attackName = &#39;&#39;,
    curAttack = {},
    randInt = 0,
    enemyAttack = {},
    characters = [],
    defendProgressInt = null,
    defendProgressComplete = 0,
    progressInt = null,
    progressComplete = 0;

function buildVars(){
  // all the music for the game
  // http://downloads.khinsider.com/game-soundtracks/album/pokemon-gameboy-sound-collection
  music = {
    opening: &quot;http://66.90.91.26/ost/pokemon-gameboy-sound-collection/aipycrsoym/101-opening.mp3&quot;,
    battle: &quot;http://66.90.91.26/ost/pokemon-gameboy-sound-collection/fllwdebjsg/107-battle-vs-wild-pokemon-.mp3&quot;,
    victory: &quot;http://66.90.91.26/ost/pokemon-gameboy-sound-collection/csqodhnibz/108-victory-vs-wild-pokemon-.mp3&quot;,
    pikachu: &quot;http://66.90.91.26/ost/pokemon-gameboy-sound-collection/hpjacpzwof/170-pikachu.mp3&quot;,
    charmander: &quot;http://66.90.91.26/ost/pokemon-gameboy-sound-collection/wfwdwleyga/149-charmander.mp3&quot;,
    squirtle: &quot;http://66.90.91.26/ost/pokemon-gameboy-sound-collection/soagplijvq/152-squirtle.mp3&quot;,
    bulbasaur: &quot;http://66.90.91.26/ost/pokemon-gameboy-sound-collection/gvqmhhryki/146-bulbasaur.mp3&quot;,
    machop: &quot;http://66.90.91.26/ost/pokemon-gameboy-sound-collection/viaskmobgb/213-machop.mp3&quot;
  }



  typeSprite = &#39;http://orig15.deviantart.net/24d8/f/2011/057/3/5/ge___energy_type_icons_by_aschefield101-d3agp02.png&#39;;
  types = [&#39;bug&#39;, &#39;dark&#39;, &#39;dragon&#39;, &#39;electric&#39;, &#39;fairy&#39;, &#39;fighting&#39;, &#39;fire&#39;, &#39;flying&#39;, &#39;ghost&#39;, &#39;grass&#39;, &#39;ground&#39;, &#39;ice&#39;, &#39;normal&#39;, &#39;poison&#39;, &#39;psychic&#39;, &#39;rock&#39;, &#39;steel&#39;, &#39;water&#39;];



  // the data for the game in play
  gameData = {
    step: 1,
    hero: {},
    enemy: {}
  }



  // attack variables
  attackName = &#39;&#39;;
  curAttack = {};
  randInt = 0;
  enemyAttack = {};
  defendProgressInt = null;
  defendProgressComplete = 0;
  progressInt = null;
  progressComplete = 0;



  // available characters
  characters = [
    {
      name: &quot;pikachu&quot;,
      type: &#39;electric&#39;,
      weakness: [&#39;fighting&#39;],
      resistance: [&#39;steel&#39;],
      img: {
        default: &quot;http://vignette2.wikia.nocookie.net/all-anime-characters/images/7/7b/Cute_pikachu_with_hat_by_mlpochea-d63xlom.png/revision/latest?cb=20150108111832&quot;,
        front: &quot;http://rs1263.pbsrc.com/albums/ii631/Pokemon-Vampire-Knight-lover/pikachu_.gif~c200&quot;,
        back: &quot;http://vignette4.wikia.nocookie.net/pokemon/images/5/5b/Pikachu_Back_XY.gif/revision/latest?cb=20141009080948&quot;
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: &quot;thunder jolt&quot;,
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: &quot;electro ball&quot;,
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: &quot;volt tackle&quot;,
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: &quot;thunder crack&quot;,
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    {
      name: &quot;charmander&quot;,
      type: &#39;fire&#39;,
      weakness: [&#39;water&#39;],
      resistance: [&#39;grass&#39;],
      img: {
        default: &quot;http://img3.wikia.nocookie.net/__cb20150330015216/pokemon/images/f/f5/004Charmander_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png&quot;,
        front: &quot;http://rs772.pbsrc.com/albums/yy9/HybridRainbow88/Charmander.gif~c200&quot;,
        back: &quot;http://vignette1.wikia.nocookie.net/pokemon/images/2/23/Charmander_Back_XY.gif/revision/latest?cb=20141009063457&quot;
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: &quot;ember&quot;,
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: &quot;flamethrower&quot;,
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: &quot;burning tail&quot;,
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: &quot;fire spin&quot;,
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    {
      name: &quot;squirtle&quot;,
      type: &#39;water&#39;,
      weakness: [&#39;electric&#39;,&#39;grass&#39;],
      resistance: [&#39;normal&#39;,&#39;fire&#39;],
      img: {
        default: &quot;http://vignette3.wikia.nocookie.net/ssbb/images/7/79/Squirtle_Rojo_Fuego_y_Verde_Hoja.png/revision/latest?cb=20130907041944&amp;path-prefix=es&quot;,
        front: &quot;https://66.media.tumblr.com/ddd22fe10a485ed56a46d958c058a970/tumblr_n9lnpepqkW1scncwdo1_500.gif&quot;,
        back: &quot;http://vignette3.wikia.nocookie.net/pokemon/images/d/d8/Squirtle_XY_Back_Sprite.gif/revision/latest?cb=20141031154426&quot;
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: &quot;bubble&quot;,
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: &quot;water gun&quot;,
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: &quot;shell attack&quot;,
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: &quot;hydro pump&quot;,
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    {
      name: &quot;bulbasaur&quot;,
      type: &#39;grass&#39;,
      weakness: [&#39;fire&#39;],
      resistance: [&#39;water&#39;,&#39;psychic&#39;],
      img: {
        default: &quot;http://vignette4.wikia.nocookie.net/pokemon/images/8/81/001Bulbasaur_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png/revision/latest?cb=20150105223818&quot;,
        front: &quot;https://media.giphy.com/media/iIWW4BM6nNWTu/giphy.gif&quot;,
        back: &quot;http://rs425.pbsrc.com/albums/pp335/Grasaldrea/ShinyBulbasauranimatedback.gif~c200&quot;,
        deranged: &quot;http://rs522.pbsrc.com/albums/w348/Richtoon18/b3617568f13aa750c57eacc45d0b2da7.gif~c200&quot;,
        sleep: &quot;https://31.media.tumblr.com/4dd7682db26ac687ef81f0dd06794652/tumblr_msesq5uAIk1r93jsro1_500.gif&quot;
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: &quot;tackle&quot;,
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: &quot;vine whip&quot;,
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: &quot;razor leaf&quot;,
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: &quot;solar beam&quot;,
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    {
      name: &quot;machop&quot;,
      type: &#39;fighting&#39;,
      weakness: [&#39;psychic&#39;,&#39;electric&#39;],
      resistance: [],
      img: {
        default: &quot;http://clipart.toonarific.com/data/media/11/pokemon066.gif&quot;,
        front: &quot;http://graphics.tppcrpg.net/xy/normal/066F.gif&quot;,
        back:  &quot;http://pokeunlock.com/wp-content/uploads/2015/01/machop-2.gif&quot;
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: &quot;low kick&quot;,
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: &quot;karate chop&quot;,
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: &quot;seismic toss&quot;,
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: &quot;hundred furious punches&quot;,
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    }
  ];
}





/////////////////////////////////////////////
// UTILITY
/////////////////////////////////////////////
// RANDOM NUMBER GENERATOR
// min is optional
function randomNum(max, min){
  // generate a random number

  // min not required
  if(min === undefined || min === &#39;&#39; || min === null){
    // min default value
    min = 0;
  }

  // random number, yay
  return Math.floor(Math.random() * (max - min) + min);
}



// CHARACTER BUILD
// build the character UI
function populateChar(container,character){
  // which img
  var facing = &#39;front&#39;;
  if(character === &#39;hero&#39;){
    // we see the back of our hero
    // a real hero faces danger
    facing = &#39;back&#39;;
  }

  // build the character
  container.append(&#39;&lt;section class=&quot;char&quot;&gt;&lt;img src=&quot;&#39;+gameData[character].img[facing]+&#39;&quot; alt=&quot;&#39;+gameData[character].name+&#39;&quot;&gt;&lt;aside class=&quot;data&quot;&gt;&lt;h2&gt;&#39;+gameData[character].name+&#39;&lt;/h2&gt;&lt;div&gt;&lt;progress max=&quot;&#39;+gameData[character].hp.total+&#39;&quot;&gt;&lt;/progress&gt;&lt;p&gt;&lt;span&gt;&#39;+gameData[character].hp.current+&#39;&lt;/span&gt;/&#39;+gameData[character].hp.total+&#39;&lt;/p&gt;&lt;/div&gt;&lt;/aside&gt;&lt;/section&gt;&#39;);
}



// ATTACK MULTIPLIER
// modify attack value for weaknesses &amp; strengths
function attackMultiplier(attacker, curAttack){
  var defender = &#39;enemy&#39;;
  if(attacker === &#39;enemy&#39;){
    defender = &#39;hero&#39;;
  }

  if(gameData[defender].weakness.indexOf(gameData[attacker].type) &gt;= 0){
    // weakness exists
    curAttack.hp *= 2;
  }

  if(gameData[defender].resistance.indexOf(gameData[attacker].type) &gt;= 0){
    // weakness exists
    curAttack.hp /= 2;
  }

  curAttack.hp = Math.floor(curAttack.hp);
  return curAttack.hp;
}



// SFX PLAYER
// stops music and plays sfx
function playSound(name){
  // load sfx src
  $(&#39;audio.sfx&#39;).attr(&#39;src&#39;, music[name])
  // pause game music
  $(&#39;audio.music&#39;)[0].pause();
  // character announce yourself
  $(&#39;audio.sfx&#39;)[0].play();

  // timeout to stop music at given point
  setTimeout(function(){
    // pause the sfx
    $(&#39;audio.sfx&#39;)[0].pause();
    // start the music again
    $(&#39;audio.music&#39;)[0].play();
    // reset the sfx
    $(&#39;audio.sfx&#39;)[0].currentTime = 0;
  },2000);
}


// HP BAR ANIMATION
// stop and set health bar
function setHP(){
  // stop health animation and set value
  clearInterval(defendProgressInt);
  clearInterval(progressInt);
  $(&#39;.stadium .enemy progress&#39;).val(gameData.enemy.hp.current);
  $(&#39;.stadium .hero progress&#39;).val(gameData.hero.hp.current);
}





/////////////////////////////////////////////
// RESET
/////////////////////////////////////////////
function resetGame(){
  // set default values for game variables
  buildVars();

  // clear the stadium
  $(&#39;.hero&#39;).empty();
  $(&#39;.enemy&#39;).empty();

  // reset
  $(&#39;.attack-list li&#39;).unbind(&#39;click&#39;);
  $(&#39;.attack-list&#39;).empty();
  $(&#39;.stadium .enemy&#39;).css({&#39;padding&#39;:&#39;0&#39;});
  $(&#39;.instructions p&#39;).text(&#39;Choose your hero&#39;);

  // set &amp; start the opening game music
  $(&#39;audio.music&#39;).attr(&#39;src&#39;,music[&quot;opening&quot;]);
  $(&#39;audio.music&#39;)[0].play();

  // empty characters
  $(&#39;.characters&#39;).empty();
  $(&#39;.characters&#39;).removeClass(&#39;hidden&#39;);

  for(var i in characters){
    // build the character list
    $(&quot;.characters&quot;).append(&#39;&lt;div class=&quot;char-container&quot;&gt;&lt;img src=&quot;&#39;+characters[i].img.default+&#39;&quot; alt=&quot;&#39;+characters[i].name+&#39;&quot;&gt;&lt;h2&gt;&#39;+characters[i].name+&#39;&lt;/h2&gt;&lt;span class=&quot;type &#39;+characters[i].type+&#39;&quot;&gt;&lt;/span&gt;&lt;/div&gt;&#39;)
  }
  characterChoice();
}
resetGame();
$(&#39;.logo&#39;).click(function(){resetGame();});





/////////////////////////////////////////////
// CHARACTER CHOICE
/////////////////////////////////////////////
function characterChoice(){
  $(&#39;.characters .char-container&#39;).click(function(){
    // you have chosen a character

    // your chosen character name
    var name = $(this).children(&#39;h2&#39;).text().toLowerCase();

    switch(gameData.step){
      // switch for the current step in the game

      case 1:
        // step 1: choose your hero
        for(var i in characters){
          if(characters[i].name === name){
            // find and save your chosen hero&#39;s data
            gameData.hero = characters[i];
          }
        }

        // remove the character from the available list
        var char = $(this).remove();
        // build my hero
        populateChar($(&#39;.stadium .hero&#39;), &#39;hero&#39;);

        for(var i in gameData.hero.attacks){
          // populate attack list
          $(&#39;.attack-list&#39;).append(&#39;&lt;li&gt;&lt;p class=&quot;attack-name&quot;&gt;&lt;strong&gt;&#39;+gameData.hero.attacks[i].name+&#39;&lt;/strong&gt;&lt;/p&gt;&lt;p class=&quot;attack-count&quot;&gt;&lt;small&gt;&lt;span&gt;&#39;+gameData.hero.attacks[i].avail.remaining+&#39;&lt;/span&gt;/&#39;+gameData.hero.attacks[i].avail.total+&#39;&lt;/small&gt;&lt;/p&gt;&lt;/li&gt;&#39;);
        }

        $(&#39;.attack-list&#39;).addClass(&#39;disabled&#39;);

        // update instructions
        $(&#39;.instructions p&#39;).text(&#39;Choose your enemy&#39;);
        // set health bar value
        $(&#39;.stadium .hero progress&#39;).val(gameData.hero.hp.current);

        // let your hero roar
        playSound(name);

        // move on to choosing an enemy
        gameData.step = 2;
        break;

      case 2:
        // step 2: choose your enemy
        for(var i in characters){
          if(characters[i].name === name){
            // find and save the enemy data
            gameData.enemy = characters[i];
          }
        }

        // remove the enemy from the list
        var char = $(this).remove();
        // build the enemy
        populateChar($(&#39;.stadium .enemy&#39;), &#39;enemy&#39;);
        // pad the stadium - give them some breathing room
        $(&#39;.stadium .enemy&#39;).css({&#39;padding&#39;:&#39;25px 0&#39;});

        // update instructions
        $(&#39;.instructions p&#39;).text(&#39;Fight!!!&#39;);

        // hide the hero list
        $(&#39;.characters&#39;).children().slideUp(&#39;500&#39;, function(){
          $(&#39;.characters&#39;).addClass(&#39;hidden&#39;);
        });

        // update enemy health bar value
        $(&#39;.stadium .enemy progress&#39;).val(gameData.enemy.hp.current);

        // the enemy whimpers in fear
        playSound(name);

        // update step to attack phase and bind click events
        gameData.step = 3;
        attackList();
        break;
    }
  });
}





/////////////////////////////////////////////
// HERO ATTACK
/////////////////////////////////////////////
function attackEnemy(that, callback){
  // attack the enemy!!!

  // name of your attack
  attackName = that.children(&#39;.attack-name&#39;).children(&#39;strong&#39;).text().toLowerCase();

  for(var i in gameData.hero.attacks){
    if(gameData.hero.attacks[i].name === attackName){
      // get chosen attack data
      curAttack = gameData.hero.attacks[i];
    }
  }

  // if there are attacks left
  if(curAttack.avail.remaining &gt; 0){
    // attack!!!
    $(&#39;.attack-list&#39;).addClass(&#39;disabled&#39;);

    $(&#39;.hero .char img&#39;).animate(
      {
        &#39;margin-left&#39;: &#39;-30px&#39;,
        &#39;margin-top&#39;: &#39;10px&#39;
      },
      50,
      &#39;swing&#39;
    );
    $(&#39;.hero .char img&#39;).animate(
      {
        &#39;margin-left&#39;: &#39;30px&#39;,
        &#39;margin-top&#39;: &#39;-10px&#39;
      },
      50,
      &#39;swing&#39;
    );
    $(&#39;.hero .char img&#39;).animate(
      {
        &#39;margin-left&#39;: &#39;0px&#39;,
        &#39;margin-top&#39;: &#39;0px&#39;
      },
      50,
      &#39;swing&#39;
    );

    // attack enemy
    gameData.enemy.hp.current -= attackMultiplier(&#39;hero&#39;, curAttack);

    if(gameData.enemy.hp.current &lt;= 0){
      // Enemy is dead

      clearModal();
    $(&#39;.modal-in header&#39;).append(&#39;&lt;h1&gt;You Enemy is slain&lt;/h1&gt;&lt;span class=&quot;close&quot;&gt;x&lt;/span&gt;&#39;);
    $(&#39;.modal-in section&#39;).append(&#39;&lt;p&gt;Congratulations! Dare you try again?&#39;);
    $(&#39;.modal-out&#39;).slideDown(&#39;400&#39;);
      modalControls();

      gameData.enemy.hp.current = 0;
      // clear the stadium of the dead
      $(&#39;.enemy&#39;).empty();
      // show the available characters
      $(&#39;.characters&#39;).removeClass(&#39;hidden&#39;);
      $(&#39;.characters&#39;).children().slideDown(&#39;500&#39;);

      gameData.enemy = {};

      // choose enemy
      gameData.step = 2;
      // unbind click for reset
      $(&#39;.attack-list li&#39;).unbind(&#39;click&#39;);
    }else{
      // enemy is still alive (Attack!!!)

      // subtract attack
      curAttack.avail.remaining--;

      // interval to animate health bar
      progressInt = setInterval(function(){
        // get current value of health bar
        var val = $(&#39;.stadium .enemy progress&#39;).val();
        val--;

        // update health bar value
        $(&#39;.stadium .enemy progress&#39;).val(val);

        if(val === gameData.enemy.hp.current){
          // if you&#39;ve hit your target clear interval
          clearInterval(progressInt);
          progressComplete = 1;
        }
      },1);

      // update health numbers
      $(&#39;.stadium .enemy .data p span&#39;).text(gameData.enemy.hp.current);
      that.children(&#39;.attack-count&#39;).children(&#39;small&#39;).children(&#39;span&#39;).text(curAttack.avail.remaining);

      // wait a second to recover
      setTimeout(function(){
        // now defend that attack
        defend(that);
      }, 1000);
    }
  }
}





/////////////////////////////////////////////
// ENEMY ATTACK (DEFEND)
/////////////////////////////////////////////
function defend(that){
  // random attack
  randInt = randomNum(gameData.enemy.attacks.length);
  enemyAttack = gameData.enemy.attacks[randInt];

  // enemy attack animation sequence
  $(&#39;.enemy .char img&#39;).animate(
    {
      &#39;margin-right&#39;: &#39;-30px&#39;,
      &#39;margin-top&#39;: &#39;-10px&#39;
    },
    50,
    &#39;swing&#39;
  );
  $(&#39;.enemy .char img&#39;).animate(
    {
      &#39;margin-right&#39;: &#39;30px&#39;,
      &#39;margin-top&#39;: &#39;10px&#39;
    },
    50,
    &#39;swing&#39;
  );
  $(&#39;.enemy .char img&#39;).animate(
    {
      &#39;margin-right&#39;: &#39;0px&#39;,
      &#39;margin-top&#39;: &#39;0px&#39;
    },
    50,
    &#39;swing&#39;
  );

  // attack the hero
  gameData.hero.hp.current -= attackMultiplier(&#39;enemy&#39;, enemyAttack);

  if(gameData.hero.hp.current &lt;= 0){
    // ding dong the hero&#39;s dead

    clearModal();
    $(&#39;.modal-in header&#39;).append(&#39;&lt;h1&gt;Your Hero has died&lt;/h1&gt;&lt;span class=&quot;close&quot;&gt;x&lt;/span&gt;&#39;);
    $(&#39;.modal-in section&#39;).append(&#39;&lt;p&gt;You lose, good day!&#39;);
    $(&#39;.modal-out&#39;).slideDown(&#39;400&#39;);
    modalControls()

    gameData.hero.hp.current = 0;

    resetGame();
  }else{
    // the hero lives

    // subtract attack from enemy count
    gameData.enemy.attacks[randInt].avail.remaining--;

    // health bar animation
    defendProgressInt = setInterval(function(){
      // get current val of health bar
      var val = $(&#39;.stadium .hero progress&#39;).val();
      val--;

      // update health bar value
      $(&#39;.stadium .hero progress&#39;).val(val);

      if(val === gameData.hero.hp.current){
        // stop the interval when target is attained
        clearInterval(defendProgressInt);
        defendProgressComplete = 1;
      }
    },1);

    // update health value
    $(&#39;.stadium .hero .data p span&#39;).text(gameData.hero.hp.current);

    setTimeout(function(){
      if(defendProgressComplete &amp;&amp; progressComplete){
        $(&#39;.attack-list&#39;).removeClass(&#39;disabled&#39;);
      }else{
        setHP();
        $(&#39;.attack-list&#39;).removeClass(&#39;disabled&#39;);
      }
    }, 500);
  }
}





/////////////////////////////////////////////
// ATTACK SEQUENCE
/////////////////////////////////////////////
function attackList(){
  // attack instantiation
  $(&#39;.attack-list&#39;).removeClass(&#39;disabled&#39;);

  $(&#39;.attack-list li&#39;).click(function(){
    // attack choice is clicked
    var doAttack = 1;

    if(gameData.step === 3){
      // attack step - start attack sequence
      attackEnemy($(this));
    }
  });

  setTimeout(function(){
    // characters chosen - set &amp; start the battle music
    $(&#39;audio.music&#39;).attr(&#39;src&#39;,music[&quot;battle&quot;]);
    $(&#39;audio.music&#39;)[0].play();
  },1500);
}





/////////////////////////////////////////////
// MODAL
/////////////////////////////////////////////
function modalControls(){
  $(&#39;.modal-out&#39;).click(function(){
    $(this).slideUp(&#39;400&#39;);
  });
  $(&#39;.modal-in .close&#39;).click(function(e){
    $(&#39;.modal-out&#39;).slideUp(&#39;400&#39;);
  });

  $(&#39;.modal-in&#39;).click(function(e){
    e.stopPropagation();
    e.preventDefault();
  });
}

function clearModal(){
  $(&#39;.modal-in header&#39;).empty();
  $(&#39;.modal-in section&#39;).empty();
  $(&#39;.modal-in footer&#39;).empty();
  setHP();
}