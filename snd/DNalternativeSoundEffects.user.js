// ==UserScript==
// @name         Dueling Nexus Alternative Sound Effects
// @namespace    https://duelingnexus.com/game/*
// @version      0.1
// @description  try to take over the world!
// @author       sefeiba
// @match        https://duelingnexus.com/game/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/LimitlessSocks/DuelingNexusUserScripts/master/beta/AnimeCards/AnimeCards.user.js
// @downloadURL  https://raw.githubusercontent.com/LimitlessSocks/DuelingNexusUserScripts/master/beta/AnimeCards/AnimeCards.user.js
// ==/UserScript==

(function() {

    let getSoundsAsset = (idSound) => "https://raw.githubusercontent.com/sefeiba/duelingnexus/master/snd/cherrySounds/" + idSound + ".ogg";

    Engine.Audio.prototype.loadSound = function(a, b) {
        b = void 0 !== b ? b : 1;
        this.sounds[a] = [];
        for (var c = 0; c < b; ++c) {
            var d = new Audio(getSoundsAsset(a));
            this.sounds[a].push(d)
        }
    }
    ;
})();