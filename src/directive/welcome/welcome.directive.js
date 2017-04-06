"use strict";

function welcome(){
	return {
		scope:{
			welcomeData:"=",
		},
		restrict:"E",
		template:'<canvas id="canvas" width="900" height="500"></canvas>',
		replace:true,
		link:function(scope,element,attrs){
			var onload = function(){
				let config = require('./base.config')
				let Game = require('./Game');
				let Background = require('./Background');
				let Sprite = require('./Sprite');

				function start(){
					
					config.canvas=document.getElementById("canvas");
					config.canvas.width=config.Config.width;
					config.canvas.height=config.Config.height;


					config.background=new Background();
					//background.show_new(canvas.getContext("2d"));

					Game.init(canvas);
					
					//不断刷新这个tick
					Game.tick(function(dt, frame) {
						
						//document.getElementById("fps").innerHTML = dt;
						//刷新背景，将存储的弹出
						config.background.update(dt);

						var count=config.sprites.length;
						var fc=0;

						config.sprites.forEach(function(s){
							s.update(dt);
							if (s.finished){
								fc++;
							}
						});

						if (count>0 && fc===count && !config.background.exploded && config.background.nodes.length<1){
							//最后执行炸裂
							config.background.exploded=true;
							config.sprites.forEach(function(s){
								s.explode();
							});
						}
					});
					
					//同时也是刷新render
					Game.render(function(context) {
						
						//填充背景颜色
						config.background.render(context);

						context.globalAlpha=0.8;
						
						config.sprites.forEach(function(s){
							s.render(context);
						})
					});
					
					//填充跳出的内容
					Game.input(function(type, e) {
						if (type=="Up"){
							var point = e.point;
							createSprites(point.x,point.y,200);
						}
					});

					//绑定点击事件
					Game.start();

					console.log('2');
				}
				start();

				function createSprites(x, y,n){
					n=n||1;
					for (var i=0;i<n;i++){
						if (config.background.nodes.length<1){
							return;
						}
						var sprite=new Sprite({
							x : x+config.randomInt(-5,5),
							y : y+config.randomInt(-5,5),
							v : config.randomInt(1,2)/16,
							color : config.colors[config.randomInt(0,6)]
						});
						config.sprites.push(sprite);		
					}
				}
			};	    	
	    	scope.$watch('welcomeData',onload,true);
		}
	};
};

export default angular
	.module("welcome.directive",[])
	.directive("welcome",welcome);
