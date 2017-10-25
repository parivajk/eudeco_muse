(function (img, cjs, ss, an) {

var lib={};var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AbHAkIiqAAQgPAAgLgLQgKgKAAgPQAAgOAKgKQALgLAPAAICqAAQAPAAALALQAKAKAAAOQAAAPgKAKQgLALgPAAIAAAAgAWbAkIiqAAQgPAAgLgLQgKgKAAgPQAAgOAKgKQALgLAPAAICqAAQAPAAALALQAKAKAAAOQAAAPgKAKQgLALgPAAIAAAAgARvAkIiqAAQgPAAgKgLQgLgKAAgPQAAgOALgKQAKgLAPAAICqAAQAPAAAKALQALAKAAAOQAAAPgLAKQgKALgPAAIAAAAgANDAkIiqAAQgPAAgLgLQgKgKAAgPQAAgOAKgKQALgLAPAAICqAAQAPAAALALQAKAKAAAOQAAAPgKAKQgLALgPAAIAAAAgAIXAkIiqAAQgPAAgLgLQgKgKAAgPQAAgOAKgKQALgLAPAAICqAAQAPAAALALQAKAKAAAOQAAAPgKAKQgLALgPAAIAAAAgADrAkIiqAAQgPAAgKgLQgLgKAAgPQAAgOALgKQAKgLAPAAICqAAQAPAAAKALQALAKAAAOQAAAPgLAKQgKALgPAAIAAAAgAhAAkIiqAAQgPAAgLgLQgKgKAAgPQAAgOAKgKQALgLAPAAICqAAQAPAAALALQAKAKAAAOQAAAPgKAKQgLALgPAAIAAAAgAlsAkIiqAAQgPAAgLgLQgKgKAAgPQAAgOAKgKQALgLAPAAICqAAQAPAAALALQAKAKAAAOQAAAPgKAKQgLALgPAAIAAAAgAqYAkIiqAAQgPAAgKgLQgLgKAAgPQAAgOALgKQAKgLAPAAICqAAQAPAAAKALQALAKAAAOQAAAPgLAKQgKALgPAAIAAAAgAvEAkIiqAAQgPAAgLgLQgKgKAAgPQAAgOAKgKQALgLAPAAICqAAQAPAAALALQAKAKAAAOQAAAPgKAKQgLALgPAAIAAAAgAzwAkIiqAAQgPAAgLgLQgKgKAAgPQAAgOAKgKQALgLAPAAICqAAQAPAAALALQAKAKAAAOQAAAPgKAKQgLALgPAAIAAAAgA4cAkIiqAAQgPAAgKgLQgLgKAAgPQAAgOALgKQAKgLAPAAICqAAQAPAAAKALQALAKAAAOQAAAPgLAKQgKALgPAAIAAAAg");
	this.shape.setTransform(173.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-3.6,-3.6,354.2,7.2), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(1,-24.9,1,1,0,0,0,176,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:26.1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.6,-28.5,359.2,7.2);


// stage content:
(lib.vonal_animacio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.backgroundColor="rgba(0,0,0,0)";
		document.body.style.backgroundColor = "rgba(0,0,0,0)";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A9BaBMAAAgwNMA6EAAAMAAAAwNg");
	var mask_graphics_1 = new cjs.Graphics().p("A9CaCMAAAgwSMA6EAAAMAAAAwSg");
	var mask_graphics_2 = new cjs.Graphics().p("A9BaEMAAAgwZMA6EAAAMAAAAwZg");
	var mask_graphics_3 = new cjs.Graphics().p("A9BaFMAAAgwfMA6EAAAMAAAAwfg");
	var mask_graphics_4 = new cjs.Graphics().p("A9CaHMAAAgwmMA6EAAAMAAAAwmg");
	var mask_graphics_5 = new cjs.Graphics().p("A9BaIMAAAgwrMA6EAAAMAAAAwrg");
	var mask_graphics_6 = new cjs.Graphics().p("A9BaKMAAAgwyMA6EAAAMAAAAwyg");
	var mask_graphics_7 = new cjs.Graphics().p("A9CaMMAAAgw5MA6EAAAMAAAAw5g");
	var mask_graphics_8 = new cjs.Graphics().p("A9BaNMAAAgw/MA6EAAAMAAAAw/g");
	var mask_graphics_9 = new cjs.Graphics().p("A9CaPMAAAgxFMA6EAAAMAAAAxFg");
	var mask_graphics_10 = new cjs.Graphics().p("A9CaQMAAAgxLMA6EAAAMAAAAxLg");
	var mask_graphics_11 = new cjs.Graphics().p("A7GaSMAAAgxSMA6EAAAMAAAAxSg");
	var mask_graphics_12 = new cjs.Graphics().p("A4yaUMAAAgxZMA6EAAAMAAAAxZg");
	var mask_graphics_13 = new cjs.Graphics().p("A2faVMAAAgxeMA6EAAAMAAAAxeg");
	var mask_graphics_14 = new cjs.Graphics().p("A0LaXMAAAgxlMA6EAAAMAAAAxlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-114.5,y:166.5}).wait(1).to({graphics:mask_graphics_1,x:-85,y:166.6}).wait(1).to({graphics:mask_graphics_2,x:-55.4,y:166.8}).wait(1).to({graphics:mask_graphics_3,x:-25.9,y:166.9}).wait(1).to({graphics:mask_graphics_4,x:3.7,y:167.1}).wait(1).to({graphics:mask_graphics_5,x:33.2,y:167.2}).wait(1).to({graphics:mask_graphics_6,x:62.8,y:167.4}).wait(1).to({graphics:mask_graphics_7,x:92.3,y:167.6}).wait(1).to({graphics:mask_graphics_8,x:121.9,y:167.7}).wait(1).to({graphics:mask_graphics_9,x:151.4,y:167.9}).wait(1).to({graphics:mask_graphics_10,x:181,y:168}).wait(1).to({graphics:mask_graphics_11,x:198.2,y:168.2}).wait(1).to({graphics:mask_graphics_12,x:213,y:168.4}).wait(1).to({graphics:mask_graphics_13,x:227.7,y:168.5}).wait(1).to({graphics:mask_graphics_14,x:242.5,y:168.7}).wait(86));

	// Layer 3
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(280.9,181,1,1,35.5,0,0,1.1,-25);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: '4BA2EFD28BABAA4C808B97A99A437E61',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4BA2EFD28BABAA4C808B97A99A437E61'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var images, createjs, ss, AdobeAn;