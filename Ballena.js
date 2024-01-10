(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Ballena_atlas_1", frames: [[702,234,208,203],[912,234,85,134],[702,0,270,232],[0,0,700,435]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Despiece1 = function() {
	this.initialize(ss["Ballena_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Despiece2 = function() {
	this.initialize(ss["Ballena_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Despiece3 = function() {
	this.initialize(ss["Ballena_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Despiece4 = function() {
	this.initialize(ss["Ballena_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Fondo2 = function() {
	this.initialize(img.Fondo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2291,295);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Símbolo10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Fondo2();
	this.instance.setTransform(0,0,0.8495,0.8495);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo10, new cjs.Rectangle(0,0,1946.3,250.6), null);


(lib.Símbolo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Despiece1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,208,203), null);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Despiece2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,85,134), null);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Despiece3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,270,232), null);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Despiece4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,700,435), null);


// stage content:
(lib.Ballena = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Esqueleto_1
	this.ikNode_1 = new lib.Símbolo1();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(471.5,139.25,0.3189,0.3189,7.1107,0,0,240.3,217.5);

	this.ikNode_2 = new lib.Símbolo2();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(395.4,112.75,0.3189,0.3189,6.8479,0,0,97.2,104.7);

	this.ikNode_4 = new lib.Símbolo3();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(373.35,69.05,0.3189,0.3189,4.4016,0,0,30.6,49.4);

	this.ikNode_6 = new lib.Símbolo4();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(365.35,46.35,0.3189,0.3189,-4.7129,0,0,122.4,153);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3189,scaleY:0.3189,rotation:-4.7129,x:365.35,y:46.35,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:4.4016,x:373.35,y:69.05,regX:30.6,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:6.8479,x:395.4,y:112.75,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3189,scaleY:0.3189,rotation:7.1107,x:471.5,y:139.25,regX:240.3}}]}).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:-32.26,x:345.65,y:60.65,regY:153}},{t:this.ikNode_4,p:{regY:49.5,rotation:-15.0245,x:360.7,y:79.4,regX:30.6,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:-10.3769,x:394.75,y:114.55,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:5.677,x:471.55,y:139.2,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:-59.8099,x:330.65,y:80.3,regY:152.8}},{t:this.ikNode_4,p:{regY:49.4,rotation:-34.4628,x:351.1,y:93,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-27.6147,x:394.15,y:116.5,regY:104.8,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:4.2403,x:471.4,y:139.1,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:-87.3583,x:322,y:103.55,regY:152.9}},{t:this.ikNode_4,p:{regY:49.6,rotation:-53.8984,x:345.6,y:108.7,regX:30.5,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-44.8527,x:393.55,y:118.4,regY:104.8,regX:97.3,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:2.8063,x:471.4,y:139.05,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-76.9635,x:320.85,y:108.65,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-55.0801,x:344.4,y:113.35,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-45.983,x:392.65,y:122.05,regY:104.7,regX:97.2,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:0.1152,x:471.4,y:139.05,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-66.5663,x:319.85,y:113.75,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-56.2597,x:343.55,y:117.9,regX:30.6,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-47.1138,x:391.95,y:125.75,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-2.5647,x:471.4,y:139,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.3,scaleX:0.3188,scaleY:0.3188,rotation:-56.17,x:319.05,y:118.95,regY:152.9}},{t:this.ikNode_4,p:{regY:49.4,rotation:-57.4409,x:342.8,y:122.65,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-48.2435,x:391.4,y:129.5,regY:104.7,regX:97.2,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:-5.2557,x:471.4,y:139.1,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-45.7737,x:318.5,y:124.1,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-58.621,x:342.3,y:127.3,regX:30.5,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-49.3743,x:391.05,y:133.2,regY:104.8,regX:97.3,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:-7.9475,x:471.4,y:139.05,regX:240.4}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:-35.3757,x:318.2,y:129.3,regY:152.9}},{t:this.ikNode_4,p:{regY:49.4,rotation:-59.8028,x:342,y:131.95,regX:30.6,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-50.503,x:390.8,y:136.95,regY:104.6,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-10.6399,x:471.4,y:139.05,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:-27.7155,x:320.55,y:116.2,regY:153}},{t:this.ikNode_4,p:{regY:49.3,rotation:-49.4719,x:343.45,y:123.15,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-41.2437,x:390.85,y:135.85,regY:104.7,regX:97.2,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-9.8568,x:471.35,y:139,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-20.055,x:324.8,y:103.55,regY:152.8}},{t:this.ikNode_4,p:{regY:49.4,rotation:-39.142,x:346.2,y:114.5,regX:30.6,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-31.9856,x:390.95,y:134.7,regY:104.6,regX:97.4,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:-9.076,x:471.35,y:139.05,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.3,scaleX:0.3188,scaleY:0.3188,rotation:-12.3953,x:331,y:92,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-28.8109,x:350.05,y:106.45,regX:30.5,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-22.7266,x:391.05,y:133.7,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-8.2965,x:471.3,y:139.05,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-4.7329,x:338.9,y:81.45,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-18.4792,x:355.1,y:99.2,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-13.4683,x:391.1,y:132.55,regY:104.8,regX:97.3,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:-7.5155,x:471.25,y:139.05,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.2,scaleX:0.3188,scaleY:0.3188,rotation:2.9135,x:348.2,y:72.4,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-8.1491,x:361.1,y:92.65,regX:30.7,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:-4.2097,x:391.2,y:131.4,regY:104.7,regX:97.4,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.4,scaleX:0.3188,scaleY:0.3188,rotation:-6.7335,x:471.3,y:138.95,regX:240.4}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:3.5452,x:351.4,y:67.9,regY:152.8}},{t:this.ikNode_4,p:{regY:49.5,rotation:-4.8509,x:362.85,y:89.05,regX:30.6,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:-1.9827,x:391.5,y:128.95,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-4.8978,x:471.3,y:139,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:4.18,x:354.4,y:63.75,regY:153}},{t:this.ikNode_4,p:{regY:49.5,rotation:-1.5521,x:364.8,y:85.45,regX:30.5,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:0.2303,x:391.9,y:126.35,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3189,scaleY:0.3189,rotation:-3.0588,x:471.25,y:139,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:4.8126,x:357.75,y:59.6,regY:152.9}},{t:this.ikNode_4,p:{regY:49.5,rotation:1.7331,x:366.8,y:81.9,regX:30.4,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:2.4574,x:392.25,y:123.9,regY:104.8,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-1.2231,x:471.35,y:139.05,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:5.4459,x:361.25,y:55.7,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:5.0296,x:369.05,y:78.35,regX:30.5,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:4.6828,x:392.85,y:121.35,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:0.6033,x:471.3,y:139.05,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:6.0798,x:364.95,y:52.05,regY:153.1}},{t:this.ikNode_4,p:{regY:49.5,rotation:8.3317,x:371.25,y:75,regX:30.4,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:6.907,x:393.55,y:118.85,regY:104.8,regX:97.4,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:2.4412,x:471.35,y:139.1,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:6.7145,x:368.6,y:48.35,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:11.6261,x:373.8,y:71.75,regX:30.7,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:9.1333,x:394.1,y:116.35,regY:104.6,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:4.2788,x:471.35,y:139.05,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:3.8859,x:367.8,y:47.9,regY:153}},{t:this.ikNode_4,p:{regY:49.3,rotation:9.8649,x:373.55,y:71.1,regX:30.6,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:8.5671,x:394.4,y:115.5,regY:104.6,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:4.9253,x:471.4,y:139.15,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:1.0613,x:366.9,y:47.4,regY:152.8}},{t:this.ikNode_4,p:{regY:49.4,rotation:8.1049,x:373.5,y:70.55,regX:30.7,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:7.999,x:394.7,y:114.7,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:5.5753,x:471.35,y:139.1,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-1.7525,x:366.05,y:47.1,regY:153}},{t:this.ikNode_4,p:{regY:49.3,rotation:6.3387,x:373.25,y:69.85,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:7.4348,x:395.05,y:113.85,regY:104.7,regX:97.3,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:6.223,x:471.5,y:139.15,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-4.5787,x:365.25,y:46.65,regY:153}},{t:this.ikNode_4,p:{regY:49.5,rotation:4.581,x:373.2,y:69.4,regX:30.6,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:6.8683,x:395.25,y:113,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:6.8716,x:471.5,y:139.2,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3189,scaleY:0.3189,rotation:-4.7129,x:365.35,y:46.35,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:4.4016,x:373.35,y:69.05,regX:30.6,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:6.8479,x:395.4,y:112.75,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3189,scaleY:0.3189,rotation:7.1107,x:471.5,y:139.25,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:-32.26,x:345.65,y:60.65,regY:153}},{t:this.ikNode_4,p:{regY:49.5,rotation:-15.0245,x:360.7,y:79.4,regX:30.6,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:-10.3769,x:394.75,y:114.55,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:5.677,x:471.55,y:139.2,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:-59.8099,x:330.65,y:80.3,regY:152.8}},{t:this.ikNode_4,p:{regY:49.4,rotation:-34.4628,x:351.1,y:93,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-27.6147,x:394.15,y:116.5,regY:104.8,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:4.2403,x:471.4,y:139.1,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:-87.3583,x:322,y:103.55,regY:152.9}},{t:this.ikNode_4,p:{regY:49.6,rotation:-53.8984,x:345.6,y:108.7,regX:30.5,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-44.8527,x:393.55,y:118.4,regY:104.8,regX:97.3,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:2.8063,x:471.4,y:139.05,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-76.9635,x:320.85,y:108.65,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-55.0801,x:344.4,y:113.35,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-45.983,x:392.65,y:122.05,regY:104.7,regX:97.2,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:0.1152,x:471.4,y:139.05,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-66.5663,x:319.85,y:113.75,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-56.2597,x:343.55,y:117.9,regX:30.6,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-47.1138,x:391.95,y:125.75,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-2.5647,x:471.4,y:139,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.3,scaleX:0.3188,scaleY:0.3188,rotation:-56.17,x:319.05,y:118.95,regY:152.9}},{t:this.ikNode_4,p:{regY:49.4,rotation:-57.4409,x:342.8,y:122.65,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-48.2435,x:391.4,y:129.5,regY:104.7,regX:97.2,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:-5.2557,x:471.4,y:139.1,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-45.7737,x:318.5,y:124.1,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-58.621,x:342.3,y:127.3,regX:30.5,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-49.3743,x:391.05,y:133.2,regY:104.8,regX:97.3,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:-7.9475,x:471.4,y:139.05,regX:240.4}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:-35.3757,x:318.2,y:129.3,regY:152.9}},{t:this.ikNode_4,p:{regY:49.4,rotation:-59.8028,x:342,y:131.95,regX:30.6,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-50.503,x:390.8,y:136.95,regY:104.6,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-10.6399,x:471.4,y:139.05,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:-27.7155,x:320.55,y:116.2,regY:153}},{t:this.ikNode_4,p:{regY:49.3,rotation:-49.4719,x:343.45,y:123.15,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-41.2437,x:390.85,y:135.85,regY:104.7,regX:97.2,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-9.8568,x:471.35,y:139,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-20.055,x:324.8,y:103.55,regY:152.8}},{t:this.ikNode_4,p:{regY:49.4,rotation:-39.142,x:346.2,y:114.5,regX:30.6,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-31.9856,x:390.95,y:134.7,regY:104.6,regX:97.4,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:-9.076,x:471.35,y:139.05,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.3,scaleX:0.3188,scaleY:0.3188,rotation:-12.3953,x:331,y:92,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-28.8109,x:350.05,y:106.45,regX:30.5,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-22.7266,x:391.05,y:133.7,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-8.2965,x:471.3,y:139.05,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-4.7329,x:338.9,y:81.45,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-18.4792,x:355.1,y:99.2,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-13.4683,x:391.1,y:132.55,regY:104.8,regX:97.3,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:-7.5155,x:471.25,y:139.05,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.2,scaleX:0.3188,scaleY:0.3188,rotation:2.9135,x:348.2,y:72.4,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-8.1491,x:361.1,y:92.65,regX:30.7,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:-4.2097,x:391.2,y:131.4,regY:104.7,regX:97.4,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.4,scaleX:0.3188,scaleY:0.3188,rotation:-6.7335,x:471.3,y:138.95,regX:240.4}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:3.5452,x:351.4,y:67.9,regY:152.8}},{t:this.ikNode_4,p:{regY:49.5,rotation:-4.8509,x:362.85,y:89.05,regX:30.6,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:-1.9827,x:391.5,y:128.95,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-4.8978,x:471.3,y:139,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:4.18,x:354.4,y:63.75,regY:153}},{t:this.ikNode_4,p:{regY:49.5,rotation:-1.5521,x:364.8,y:85.45,regX:30.5,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:0.2303,x:391.9,y:126.35,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3189,scaleY:0.3189,rotation:-3.0588,x:471.25,y:139,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:4.8126,x:357.75,y:59.6,regY:152.9}},{t:this.ikNode_4,p:{regY:49.5,rotation:1.7331,x:366.8,y:81.9,regX:30.4,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:2.4574,x:392.25,y:123.9,regY:104.8,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-1.2231,x:471.35,y:139.05,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:5.4459,x:361.25,y:55.7,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:5.0296,x:369.05,y:78.35,regX:30.5,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:4.6828,x:392.85,y:121.35,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:0.6033,x:471.3,y:139.05,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:6.0798,x:364.95,y:52.05,regY:153.1}},{t:this.ikNode_4,p:{regY:49.5,rotation:8.3317,x:371.25,y:75,regX:30.4,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:6.907,x:393.55,y:118.85,regY:104.8,regX:97.4,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:2.4412,x:471.35,y:139.1,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:6.7145,x:368.6,y:48.35,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:11.6261,x:373.8,y:71.75,regX:30.7,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:9.1333,x:394.1,y:116.35,regY:104.6,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:4.2788,x:471.35,y:139.05,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:3.8859,x:367.8,y:47.9,regY:153}},{t:this.ikNode_4,p:{regY:49.3,rotation:9.8649,x:373.55,y:71.1,regX:30.6,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:8.5671,x:394.4,y:115.5,regY:104.6,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:4.9253,x:471.4,y:139.15,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:1.0613,x:366.9,y:47.4,regY:152.8}},{t:this.ikNode_4,p:{regY:49.4,rotation:8.1049,x:373.5,y:70.55,regX:30.7,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:7.999,x:394.7,y:114.7,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:5.5753,x:471.35,y:139.1,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-1.7525,x:366.05,y:47.1,regY:153}},{t:this.ikNode_4,p:{regY:49.3,rotation:6.3387,x:373.25,y:69.85,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:7.4348,x:395.05,y:113.85,regY:104.7,regX:97.3,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:6.223,x:471.5,y:139.15,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-4.5787,x:365.25,y:46.65,regY:153}},{t:this.ikNode_4,p:{regY:49.5,rotation:4.581,x:373.2,y:69.4,regX:30.6,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:6.8683,x:395.25,y:113,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:6.8716,x:471.5,y:139.2,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3189,scaleY:0.3189,rotation:-4.7129,x:365.35,y:46.35,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:4.4016,x:373.35,y:69.05,regX:30.6,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:6.8479,x:395.4,y:112.75,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3189,scaleY:0.3189,rotation:7.1107,x:471.5,y:139.25,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:-32.26,x:345.65,y:60.65,regY:153}},{t:this.ikNode_4,p:{regY:49.5,rotation:-15.0245,x:360.7,y:79.4,regX:30.6,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:-10.3769,x:394.75,y:114.55,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:5.677,x:471.55,y:139.2,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:-59.8099,x:330.65,y:80.3,regY:152.8}},{t:this.ikNode_4,p:{regY:49.4,rotation:-34.4628,x:351.1,y:93,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-27.6147,x:394.15,y:116.5,regY:104.8,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:4.2403,x:471.4,y:139.1,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:-87.3583,x:322,y:103.55,regY:152.9}},{t:this.ikNode_4,p:{regY:49.6,rotation:-53.8984,x:345.6,y:108.7,regX:30.5,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-44.8527,x:393.55,y:118.4,regY:104.8,regX:97.3,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:2.8063,x:471.4,y:139.05,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-76.9635,x:320.85,y:108.65,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-55.0801,x:344.4,y:113.35,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-45.983,x:392.65,y:122.05,regY:104.7,regX:97.2,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:0.1152,x:471.4,y:139.05,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-66.5663,x:319.85,y:113.75,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-56.2597,x:343.55,y:117.9,regX:30.6,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-47.1138,x:391.95,y:125.75,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-2.5647,x:471.4,y:139,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.3,scaleX:0.3188,scaleY:0.3188,rotation:-56.17,x:319.05,y:118.95,regY:152.9}},{t:this.ikNode_4,p:{regY:49.4,rotation:-57.4409,x:342.8,y:122.65,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-48.2435,x:391.4,y:129.5,regY:104.7,regX:97.2,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:-5.2557,x:471.4,y:139.1,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-45.7737,x:318.5,y:124.1,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-58.621,x:342.3,y:127.3,regX:30.5,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-49.3743,x:391.05,y:133.2,regY:104.8,regX:97.3,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:-7.9475,x:471.4,y:139.05,regX:240.4}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:-35.3757,x:318.2,y:129.3,regY:152.9}},{t:this.ikNode_4,p:{regY:49.4,rotation:-59.8028,x:342,y:131.95,regX:30.6,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-50.503,x:390.8,y:136.95,regY:104.6,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-10.6399,x:471.4,y:139.05,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:-27.7155,x:320.55,y:116.2,regY:153}},{t:this.ikNode_4,p:{regY:49.3,rotation:-49.4719,x:343.45,y:123.15,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-41.2437,x:390.85,y:135.85,regY:104.7,regX:97.2,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-9.8568,x:471.35,y:139,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-20.055,x:324.8,y:103.55,regY:152.8}},{t:this.ikNode_4,p:{regY:49.4,rotation:-39.142,x:346.2,y:114.5,regX:30.6,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-31.9856,x:390.95,y:134.7,regY:104.6,regX:97.4,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:-9.076,x:471.35,y:139.05,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.3,scaleX:0.3188,scaleY:0.3188,rotation:-12.3953,x:331,y:92,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-28.8109,x:350.05,y:106.45,regX:30.5,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-22.7266,x:391.05,y:133.7,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-8.2965,x:471.3,y:139.05,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-4.7329,x:338.9,y:81.45,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-18.4792,x:355.1,y:99.2,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:-13.4683,x:391.1,y:132.55,regY:104.8,regX:97.3,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:-7.5155,x:471.25,y:139.05,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.2,scaleX:0.3188,scaleY:0.3188,rotation:2.9135,x:348.2,y:72.4,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:-8.1491,x:361.1,y:92.65,regX:30.7,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:-4.2097,x:391.2,y:131.4,regY:104.7,regX:97.4,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.4,scaleX:0.3188,scaleY:0.3188,rotation:-6.7335,x:471.3,y:138.95,regX:240.4}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:3.5452,x:351.4,y:67.9,regY:152.8}},{t:this.ikNode_4,p:{regY:49.5,rotation:-4.8509,x:362.85,y:89.05,regX:30.6,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:-1.9827,x:391.5,y:128.95,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-4.8978,x:471.3,y:139,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:4.18,x:354.4,y:63.75,regY:153}},{t:this.ikNode_4,p:{regY:49.5,rotation:-1.5521,x:364.8,y:85.45,regX:30.5,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:0.2303,x:391.9,y:126.35,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3189,scaleY:0.3189,rotation:-3.0588,x:471.25,y:139,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:4.8126,x:357.75,y:59.6,regY:152.9}},{t:this.ikNode_4,p:{regY:49.5,rotation:1.7331,x:366.8,y:81.9,regX:30.4,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:2.4574,x:392.25,y:123.9,regY:104.8,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:-1.2231,x:471.35,y:139.05,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:5.4459,x:361.25,y:55.7,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:5.0296,x:369.05,y:78.35,regX:30.5,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:4.6828,x:392.85,y:121.35,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:0.6033,x:471.3,y:139.05,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:6.0798,x:364.95,y:52.05,regY:153.1}},{t:this.ikNode_4,p:{regY:49.5,rotation:8.3317,x:371.25,y:75,regX:30.4,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:6.907,x:393.55,y:118.85,regY:104.8,regX:97.4,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:2.4412,x:471.35,y:139.1,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:6.7145,x:368.6,y:48.35,regY:153}},{t:this.ikNode_4,p:{regY:49.4,rotation:11.6261,x:373.8,y:71.75,regX:30.7,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:9.1333,x:394.1,y:116.35,regY:104.6,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:4.2788,x:471.35,y:139.05,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.5,scaleX:0.3188,scaleY:0.3188,rotation:3.8859,x:367.8,y:47.9,regY:153}},{t:this.ikNode_4,p:{regY:49.3,rotation:9.8649,x:373.55,y:71.1,regX:30.6,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:8.5671,x:394.4,y:115.5,regY:104.6,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.6,scaleX:0.3188,scaleY:0.3188,rotation:4.9253,x:471.4,y:139.15,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:1.0613,x:366.9,y:47.4,regY:152.8}},{t:this.ikNode_4,p:{regY:49.4,rotation:8.1049,x:373.5,y:70.55,regX:30.7,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:7.999,x:394.7,y:114.7,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:5.5753,x:471.35,y:139.1,regX:240.2}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-1.7525,x:366.05,y:47.1,regY:153}},{t:this.ikNode_4,p:{regY:49.3,rotation:6.3387,x:373.25,y:69.85,regX:30.4,scaleX:0.3188,scaleY:0.3188}},{t:this.ikNode_2,p:{rotation:7.4348,x:395.05,y:113.85,regY:104.7,regX:97.3,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:6.223,x:471.5,y:139.15,regX:240.3}}]},1).to({state:[{t:this.ikNode_6,p:{regX:122.4,scaleX:0.3188,scaleY:0.3188,rotation:-4.5787,x:365.25,y:46.65,regY:153}},{t:this.ikNode_4,p:{regY:49.5,rotation:4.581,x:373.2,y:69.4,regX:30.6,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_2,p:{rotation:6.8683,x:395.25,y:113,regY:104.7,regX:97.2,scaleX:0.3189,scaleY:0.3189}},{t:this.ikNode_1,p:{regY:217.5,scaleX:0.3188,scaleY:0.3188,rotation:6.8716,x:471.5,y:139.2,regX:240.2}}]},1).wait(1));

	// Capa_13
	this.instance = new lib.Símbolo10();
	this.instance.setTransform(973.1,125.3,1,1,0,0,0,973.1,125.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:959.35},0).wait(1).to({x:945.6},0).wait(1).to({x:931.85},0).wait(1).to({x:918.1},0).wait(1).to({x:904.35},0).wait(1).to({x:890.6},0).wait(1).to({x:876.85},0).wait(1).to({x:863.1},0).wait(1).to({x:849.35},0).wait(1).to({x:835.6},0).wait(1).to({x:821.85},0).wait(1).to({x:808.1},0).wait(1).to({x:794.35},0).wait(1).to({x:780.6},0).wait(1).to({x:766.85},0).wait(1).to({x:753.1},0).wait(1).to({x:739.35},0).wait(1).to({x:725.6},0).wait(1).to({x:711.85},0).wait(1).to({x:698.1},0).wait(1).to({x:684.35},0).wait(1).to({x:670.6},0).wait(1).to({x:656.85},0).wait(1).to({x:643.1},0).wait(1).to({x:629.35},0).wait(1).to({x:615.6},0).wait(1).to({x:601.85},0).wait(1).to({x:588.1},0).wait(1).to({x:574.35},0).wait(1).to({x:560.6},0).wait(1).to({x:546.85},0).wait(1).to({x:533.1},0).wait(1).to({x:519.35},0).wait(1).to({x:505.6},0).wait(1).to({x:491.85},0).wait(1).to({x:478.1},0).wait(1).to({x:464.35},0).wait(1).to({x:450.6},0).wait(1).to({x:436.85},0).wait(1).to({x:423.1},0).wait(1).to({x:409.35},0).wait(1).to({x:395.6},0).wait(1).to({x:381.85},0).wait(1).to({x:368.1},0).wait(1).to({x:354.35},0).wait(1).to({x:340.6},0).wait(1).to({x:326.85},0).wait(1).to({x:313.1},0).wait(1).to({x:299.35},0).wait(1).to({x:285.6},0).wait(1).to({x:271.85},0).wait(1).to({x:258.1},0).wait(1).to({x:244.35},0).wait(1).to({x:230.6},0).wait(1).to({x:216.85},0).wait(1).to({x:203.1},0).wait(1).to({x:189.35},0).wait(1).to({x:175.6},0).wait(1).to({x:161.85},0).wait(1).to({x:148.1},0).wait(1).to({x:134.35},0).wait(1).to({x:120.6},0).wait(1).to({x:106.85},0).wait(1).to({x:93.1},0).wait(1).to({x:79.35},0).wait(1).to({x:65.6},0).wait(1).to({x:51.85},0).wait(1).to({x:38.1},0).wait(1).to({x:24.35},0).wait(1).to({x:10.6},0).wait(1).to({x:-3.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-491.3,120.4,2437.6,130.2);
// library properties:
lib.properties = {
	id: 'AC7750DEC7494A468DAECE4FC843FFB6',
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Fondo2.jpg?1704374390651", id:"Fondo2"},
		{src:"images/Ballena_atlas_1.png?1704374390594", id:"Ballena_atlas_1"}
	],
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
an.compositions['AC7750DEC7494A468DAECE4FC843FFB6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;