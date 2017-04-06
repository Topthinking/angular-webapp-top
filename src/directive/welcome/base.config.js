'use strict';

let Config = {
	width : 900,
	height : 500,
	FPS : 55
};

let background;
let sprites=[];
let canvas;

let colors=["#ff2211","#ff9911","#ffff11","#11ff11","#11ffff","#1122ff","#ff33ff"];

let randomInt = function(lower, higher){
	return ((higher - lower + 1) * Math.random() + lower)>>0;
}

module.exports = {
	Config:Config,
	background:background,
	sprites:sprites,
	canvas:canvas,
	colors:colors,
	randomInt:randomInt
};