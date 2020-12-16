// ==UserScript==
// @name         Dueling Nexus Alternative Sound Effects
// @namespace    https://duelingnexus.com/game/*
// @version      0.1
// @author       sefeiba
// @match        https://duelingnexus.com/game/*
// @grant        none
// @updateURL    https://github.com/sefeiba/duelingnexus/raw/master/snd/DNalternativeSoundEffects.user.js
// @downloadURL  https://github.com/sefeiba/duelingnexus/raw/master/snd/DNalternativeSoundEffects.user.js
// ==/UserScript==

(function() {

    let getSoundsAsset = (idSound) => "https://raw.githubusercontent.com/sefeiba/duelingnexus/master/snd/berrySounds/" + idSound + ".ogg";

    let newOnGamePosChange = Game.onGamePosChange;

    Game.onGamePosChange = function(a) {
        Game.playSound("change-position");
        Game.preloadImage(a.cardCode, function() {
            Game.onGamePosChangeInternal(a)
        });
        return !0
    },

    Engine.Audio.prototype.loadSound = function(a, b) {
        b = void 0 !== b ? b : 1;
        this.sounds[a] = [];
        for (var c = 0; c < b; ++c) {
            var d = new Audio(getSoundsAsset(a));
            this.sounds[a].push(d)
        }
    }
    ;

    Engine.Audio.prototype.loadGame = function() {
    this.loadSound("activate", 2);
    this.loadSound("attack");
    this.loadSound("draw", 5);
    this.loadSound("life-damage", 2);
    this.loadSound("life-recover", 2);
    this.loadSound("negate");
    this.loadSound("next-phase");
    this.loadSound("next-turn");
    this.loadSound("set", 2);
    this.loadSound("shuffle");
    this.loadSound("summon");
    this.loadSound("summon-flip");
    this.loadSound("summon-special", 2);
    this.loadSound("equip", 2);
    this.loadSound("dice-roll");
    this.loadSound("coin-flip");
    this.loadSound("counter", 2);
    this.loadSound("change-position", 2);
    }
    ;
})();
