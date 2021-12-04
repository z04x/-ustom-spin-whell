/**
 * Spin Wheel (IIFE) v1.0.0
 * https://github.com/CrazyTim/spin-wheel#readme
 * Copyright (c) CrazyTim 2021.
 * Distributed under the MIT License.
 */
var wheel=(()=>{var L=Object.defineProperty;var z=Reflect.get,B=Reflect.set;var D=s=>L(s,"__esModule",{value:!0});var F=(s,t)=>{D(s);for(var i in t)L(s,i,{get:t[i],enumerable:!0})};var w={};F(w,{Wheel:()=>M});function x(s=0,t=0){return s=Math.ceil(s),t=Math.floor(t),Math.floor(Math.random()*(t-s))+s}function f(s=0){return s*Math.PI/180}function v(s,t){let i=0;for(let e of s){let o=e[t];o&&(i+=typeof o=="number"?o:1)}return i}function p(s,t,i){return t<i?t<=s&&s<i:t<=s||s<i}function _(s,t,i,e){e.save(),e.font=`1px ${t}`;let o=e.measureText(s).width;return e.restore(),i/o}function C(s={x:0,y:0},t,i,e){return(s.x-t)*(s.x-t)+(s.y-i)*(s.y-i)<=e*e}function g(s={x:0,y:0},t={}){let i=t.getBoundingClientRect();return{x:s.x-i.left,y:s.y-i.top}}function R(s,t,i,e){let o=s-i,d=t-e,m=Math.atan2(-d,-o);return m*=180/Math.PI,m<0&&(m+=360),m}function y(s={x:0,y:0},t={x:0,y:0}){return Math.hypot(t.x-s.x,t.y-s.y)}function b(s=0,t=0){let i=s+t;return i>0?i%360:360+i%360}var c=-90,S=500,A=Object.freeze({left:"left",right:"right",center:"center"}),n=Object.freeze({debug:!1,image:"",isInteractive:!0,itemBackgroundColors:[],itemLabelAlign:A.right,itemLabelBaselineOffset:0,itemLabelColors:[],itemLabelFont:"sans-serif",itemLabelFontSizeMax:100,itemLabelRadius:.85,itemLabelRadiusMax:.2,itemLabelRotation:0,items:[],lineColor:"#000",lineWidth:1,radius:.95,rotation:0,rotationResistance:-35,rotationSpeed:0,rotationSpeedMax:250,offset:{w:0,h:0},onCurrentIndexChange:null,onRest:null,onSpin:null,overlayImage:"",pointerRotation:0});function I(s={}){let t=s.canvas;"PointerEvent"in window?(t.addEventListener("pointerdown",o),t.addEventListener("pointermove",i)):(t.addEventListener("touchstart",m),t.addEventListener("mousedown",d),t.addEventListener("mousemove",e));function i(h={}){let u={x:h.clientX,y:h.clientY};s.isCursorOverWheel=s.wheelHitTest(u),s.refreshCursor()}function e(h={}){let u={x:h.clientX,y:h.clientY};s.isCursorOverWheel=s.wheelHitTest(u),s.refreshCursor()}function o(h={}){let u={x:h.clientX,y:h.clientY};if(!s.isInteractive||!s.wheelHitTest(u))return;h.preventDefault(),s.dragStart(u),t.setPointerCapture(h.pointerId),t.addEventListener("pointermove",l),t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r);function l(a={}){a.preventDefault(),s.dragMove({x:a.clientX,y:a.clientY})}function r(a={}){a.preventDefault(),t.releasePointerCapture(a.pointerId),t.removeEventListener("pointermove",l),t.removeEventListener("pointerup",r),t.removeEventListener("pointercancel",r),s.dragEnd()}}function d(h={}){let u={x:h.clientX,y:h.clientY};if(!s.isInteractive||!s.wheelHitTest(u))return;s.dragStart(u),document.addEventListener("mousemove",l),document.addEventListener("mouseup",r);function l(a={}){a.preventDefault(),s.dragMove({x:a.clientX,y:a.clientY})}function r(a={}){a.preventDefault(),document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",r),s.dragEnd()}}function m(h={}){let u={x:h.targetTouches[0].clientX,y:h.targetTouches[0].clientY};if(!s.isInteractive||!s.wheelHitTest(u))return;h.preventDefault(),s.dragStart(u),t.addEventListener("touchmove",l),t.addEventListener("touchend",r),t.addEventListener("touchcancel",r);function l(a={}){a.preventDefault(),s.dragMove({x:a.targetTouches[0].clientX,y:a.targetTouches[0].clientY})}function r(a={}){a.preventDefault(),t.removeEventListener("touchmove",l),t.removeEventListener("touchend",r),t.removeEventListener("touchcancel",r),s.dragEnd()}}}var M=class{constructor(t,i={}){this.canvasContainer=t,this.initCanvas(),this._debug=n.debug,this._image=n.image,this._isInteractive=n.isInteractive,this._itemBackgroundColors=n.itemBackgroundColors,this._itemLabelAlign=n.itemLabelAlign,this._itemLabelBaselineOffset=n.itemLabelBaselineOffset,this._itemLabelColors=n.itemLabelColors,this._itemLabelFont=n.itemLabelFont,this._itemLabelFontSizeMax=n.itemLabelFontSizeMax,this._itemLabelRadius=n.itemLabelRadius,this._itemLabelRadiusMax=n.itemLabelRadiusMax,this._itemLabelRotation=n.itemLabelRotation,this._items=n.items,this._lineColor=n.lineColor,this._lineWidth=n.lineWidth,this._rotationSpeedMax=n.rotationSpeedMax,this._radius=n.radius,this._rotation=n.rotation,this._rotationResistance=n.rotationResistance,this._rotationSpeed=n.rotationSpeed,this._offset=n.offset,this._onRest=n.onRest,this._onSpin=n.onSpin,this._overlayImage=n.overlayImage,this._pointerRotation=n.items,i&&this.init(i)}initCanvas(){for(;this.canvasContainer.firstChild;)this.canvasContainer.removeChild(this.canvasContainer.firstChild);this.canvas=document.createElement("canvas"),this.canvasContainer.appendChild(this.canvas),this.context=this.canvas.getContext("2d"),this.registerEvents()}init(t={}){this.debug=t.debug,this.image=t.image,this.isInteractive=t.isInteractive,this.itemBackgroundColors=t.itemBackgroundColors,this.itemLabelAlign=t.itemLabelAlign,this.itemLabelBaselineOffset=t.itemLabelBaselineOffset,this.itemLabelColors=t.itemLabelColors,this.itemLabelFont=t.itemLabelFont,this.itemLabelFontSizeMax=t.itemLabelFontSizeMax,this.itemLabelRadius=t.itemLabelRadius,this.itemLabelRadiusMax=t.itemLabelRadiusMax,this.itemLabelRotation=t.itemLabelRotation,this.items=t.items,this.lineColor=t.lineColor,this.lineWidth=t.lineWidth,this.rotationSpeedMax=t.rotationSpeedMax,this.radius=t.radius,this.rotation=t.rotation,this.rotationResistance=t.rotationResistance,this.rotationSpeed=t.rotationSpeed,this.offset=t.offset,this.onRest=t.onRest,this.onSpin=t.onSpin,this.overlayImage=t.overlayImage,this.pointerRotation=t.items,this.resize()}registerEvents(){window.onresize=()=>this.resize(),I(this)}resize(){window.cancelAnimationFrame(this.frameRequestId);let[t,i]=[this.canvasContainer.clientWidth,this.canvasContainer.clientHeight],e=Math.min(t,i),o={w:e-e*this.offset.w,h:e-e*this.offset.h},d=Math.min(t/o.w,i/o.h);this.size=Math.max(o.w*d,o.h*d),this.canvas.style.width=t+"px",this.canvas.style.height=i+"px",this.canvas.width=t,this.canvas.height=i,this.center={x:t/2+t*this.offset.w,y:i/2+i*this.offset.h},this.actualRadius=this.size/2*this.radius,this.itemLabelFontSize=this.itemLabelFontSizeMax*(this.size/S),this.labelMaxWidth=this.actualRadius*(this.itemLabelRadius-this.itemLabelRadiusMax);for(let m of this.actualItems)this.itemLabelFontSize=Math.min(this.itemLabelFontSize,_(m.label,this.itemLabelFont,this.labelMaxWidth,this.context));this.frameRequestId=window.requestAnimationFrame(this.draw.bind(this))}draw(t=0){var m,h,u;let i=this.getItemAngles(),e=this.context;e.clearRect(0,0,this.canvas.width,this.canvas.height),this.lastFrame===void 0&&(this.lastFrame=t);let o=(t-this.lastFrame)/1e3;o>0&&(this.rotation+=o*this.rotationSpeed,this.rotation=this.rotation%360),this.lastFrame=t;for(let[l,r]of i.entries())e.beginPath(),e.moveTo(this.center.x,this.center.y),e.arc(this.center.x,this.center.y,this.actualRadius,f(r.start+c),f(r.end+c)),e.closePath(),e.fillStyle=this.actualItems[l].backgroundColor,e.fill(),this.lineWidth>0&&(e.strokeStyle=this.lineColor,e.lineWidth=this.lineWidth,e.lineJoin="bevel",e.stroke()),p(this.pointerRotation,r.start%360,r.end%360)&&this._currentIndex!==l&&(this._currentIndex=l,(m=this.onCurrentIndexChange)==null||m.call(this,{currentIndex:this._currentIndex}));e.textBaseline="middle",e.textAlign=this.itemLabelAlign,e.font=this.itemLabelFontSize+"px "+this.itemLabelFont;let d=this.itemLabelFontSize*-this.itemLabelBaselineOffset;e.save();for(let[l,r]of i.entries()){e.save(),e.beginPath(),e.fillStyle=this.actualItems[l].labelColor;let a=r.start+(r.start-r.end)/2;e.translate(this.center.x+Math.cos(f(a+c))*(this.actualRadius*this.itemLabelRadius),this.center.y+Math.sin(f(a+c))*(this.actualRadius*this.itemLabelRadius)),e.rotate(f(a+c)),this.debug&&(e.beginPath(),e.strokeStyle="#ff00ff",e.lineWidth=1,e.moveTo(0,0),e.lineTo(-this.labelMaxWidth,0),e.stroke(),e.strokeRect(0,-this.itemLabelFontSize/2,-this.labelMaxWidth,this.itemLabelFontSize)),e.rotate(f(this.itemLabelRotation)),this.actualItems[l].label!==void 0&&e.fillText(this.actualItems[l].label,0,d),e.restore()}if(this.drawImage(this.image,!1),this.drawImage(this.overlayImage,!0),this.rotationSpeed!==0){let l=this.rotationSpeed+this.rotationResistance*o*this.rotationDirection;(this.rotationDirection===1&&l<0||this.rotationDirection===-1&&l>=0)&&(l=0),this.rotationSpeed=l,this.rotationSpeed===0&&((h=this.onRest)==null||h.call(this,{event:"rest",currentIndex:this._currentIndex}))}if(this.debug&&((u=this.dragMoves)==null?void 0:u.length))for(let[l,r]of this.dragMoves.entries()){if(r===void 0)continue;let a=l/this.dragMoves.length;a=(a-1)*-1,a*=100,e.beginPath(),e.arc(r.x,r.y,5,0,2*Math.PI),e.fillStyle=`hsl(200,100%,${a}%)`,e.strokeStyle="#000",e.lineWidth=.5,e.fill(),e.stroke()}this.frameRequestId=window.requestAnimationFrame(this.draw.bind(this))}drawImage(t,i=!1){if(!t)return;let e=this.context;e.save(),e.translate(this.center.x,this.center.y),i||e.rotate(f(this.rotation));let o=i?this.size:this.size*this.radius,d=-(o/2);e.drawImage(t,d,d,o,o),e.restore()}spin(t=0){var e;let i=this.rotationSpeed+x(t*.85,t*.15);this.rotationSpeed=i,(e=this.onSpin)==null||e.call(this,{event:"spin",direction:this.rotationDirection,rotationSpeed:this.rotationSpeed})}getRotationDirection(t=0){return t>0?1:-1}wheelHitTest(t={x:0,y:0}){let i=g(t,this.canvas);return C(i,this.center.x,this.center.y,this.actualRadius)}refreshCursor(){if(this.isDragging){this.canvas.style.cursor="grabbing";return}if(this.isInteractive&&this.isCursorOverWheel){this.canvas.style.cursor="grab";return}this.canvas.style.cursor=null}processItems(){this.actualItems=[];for(let[t,i]of this.items.entries()){let e={};typeof i.backgroundColor=="string"?e.backgroundColor=i.backgroundColor:this.itemBackgroundColors.length?e.backgroundColor=this.itemBackgroundColors[t%this.itemBackgroundColors.length]:e.backgroundColor="#fff",typeof i.label=="string"?e.label=i.label:e.label="",typeof i.labelFont=="string"?e.labelFont=i.labelFont:e.labelFont=this.itemLabelFont,typeof i.labelColor=="string"?e.labelColor=i.labelColor:this.itemLabelColors.length?e.labelColor=this.itemLabelColors[t%this.itemLabelColors.length]:e.labelColor="#000",typeof i.weight=="number"?e.weight=i.weight:e.weight=1,this.actualItems.push(e)}this.actualItems.length?this.weightedItemAngle=360/v(this.actualItems,"weight"):this.weightedItemAngle=0}getAngleFromCenter(t={x:0,y:0}){return(R(this.center.x,this.center.y,t.x,t.y)+90)%360}getCurrentIndex(){return this._currentIndex}getItemAngles(){let t=[],i,e=this.rotation;for(let o of this.actualItems)i=o.weight*this.weightedItemAngle,t.push({start:e,end:e+i}),e+=i;return t}get debug(){return this._debug}set debug(t){typeof t=="boolean"?this._debug=t:this._debug=n.debug}get image(){return this._image}set image(t){typeof t=="string"?(this._image=new Image,this._image.src=t):this._image=n.image}get isInteractive(){return this._isInteractive}set isInteractive(t){typeof t=="boolean"?this._isInteractive=t:this._isInteractive=n.isInteractive}get itemBackgroundColors(){return this._itemBackgroundColors}set itemBackgroundColors(t){Array.isArray(t)?this._itemBackgroundColors=t:this._itemBackgroundColors=n.itemBackgroundColors,this.processItems()}get itemLabelAlign(){return this._itemLabelAlign}set itemLabelAlign(t){typeof t=="string"?this._itemLabelAlign=t:this._itemLabelAlign=n.itemLabelAlign}get itemLabelBaselineOffset(){return this._itemLabelBaselineOffset}set itemLabelBaselineOffset(t){typeof t=="number"?this._itemLabelBaselineOffset=t:this._itemLabelBaselineOffset=n.itemLabelBaselineOffset,this.resize()}get itemLabelColors(){return this._itemLabelColors}set itemLabelColors(t){Array.isArray(t)?this._itemLabelColors=t:this._itemLabelColors=n.itemLabelColors,this.processItems()}get itemLabelFont(){return this._itemLabelFont}set itemLabelFont(t){typeof t=="string"?this._itemLabelFont=t:this._itemLabelFont=n.itemLabelFont,this.resize()}get itemLabelFontSizeMax(){return this._itemLabelFontSizeMax}set itemLabelFontSizeMax(t){typeof t=="number"?this._itemLabelFontSizeMax=t:this._itemLabelFontSizeMax=n.itemLabelFontSizeMax}get itemLabelRadius(){return this._itemLabelRadius}set itemLabelRadius(t){typeof t=="number"?this._itemLabelRadius=t:this._itemLabelRadius=n.itemLabelRadius}get itemLabelRadiusMax(){return this._itemLabelRadiusMax}set itemLabelRadiusMax(t){typeof t=="number"?this._itemLabelRadiusMax=t:this._itemLabelRadiusMax=n.itemLabelRadiusMax}get itemLabelRotation(){return this._itemLabelRotation}set itemLabelRotation(t){typeof t=="number"?this._itemLabelRotation=t:this._itemLabelRotation=n.itemLabelRotation}get items(){return this._items}set items(t){Array.isArray(t)?this._items=t:this._items=n.items,this.processItems()}get lineColor(){return this._lineColor}set lineColor(t){typeof t=="string"?this._lineColor=t:this._lineColor=n.lineColor}get lineWidth(){return this._lineWidth}set lineWidth(t){typeof t=="number"?this._lineWidth=t:this._lineWidth=n.lineWidth}get radius(){return this._radius}set radius(t){typeof t=="number"?this._radius=t:this._radius=n.radius,this.resize()}get rotation(){return this._rotation}set rotation(t){typeof t=="number"?this._rotation=t:this._rotation=n.rotation}get rotationResistance(){return this._rotationResistance}set rotationResistance(t){typeof t=="number"?this._rotationResistance=t:this._rotationResistance=n.rotationResistance}get rotationSpeed(){return this._rotationSpeed}set rotationSpeed(t){if(typeof t=="number"){let i=Math.min(t,this.rotationSpeedMax);i=Math.max(i,-this.rotationSpeedMax),this.rotationDirection=this.getRotationDirection(i),this._rotationSpeed=i}else this.rotationDirection=0,this._rotationSpeed=n.rotationSpeed}get rotationSpeedMax(){return this._rotationSpeedMax}set rotationSpeedMax(t){typeof t=="number"?this._rotationSpeedMax=t:this._rotationSpeedMax=n.rotationSpeedMax}get offset(){return this._offset}set offset(t){t?this._offset=t:this._offset=n.offset,this.resize()}get onCurrentIndexChange(){return this._onCurrentIndexChange}set onCurrentIndexChange(t){typeof t=="function"?this._onCurrentIndexChange=t:this._onCurrentIndexChange=n.onCurrentIndexChange}get onRest(){return this._onRest}set onRest(t){typeof t=="function"?this._onRest=t:this._onRest=n.onRest}get onSpin(){return this._onSpin}set onSpin(t){typeof t=="function"?this._onSpin=t:this._onSpin=n.onSpin}get overlayImage(){return this._overlayImage}set overlayImage(t){typeof t=="string"?(this._overlayImage=new Image,this._overlayImage.src=t):this._overlayImage=n.overlayImage}get pointerRotation(){return this._pointerRotation}set pointerRotation(t){typeof t=="number"?this._pointerRotation=t:this._pointerRotation=n.pointerRotation}dragStart(t={x:0,y:0}){let i=g(t,this.canvas);this.isDragging=!0,this.rotationSpeed=0;let e=this.getAngleFromCenter(i);this.dragDelta=b(this.rotation,-e),this.dragMoves=[],this.dragPoint={x:i.x,y:i.y},this.refreshCursor()}dragMove(t={x:0,y:0}){let i=g(t,this.canvas),e=this.getAngleFromCenter(i),o=b(e,this.dragDelta),m=b(e,-this.getAngleFromCenter(this.dragPoint))<180?1:-1,h=y(i,this.dragPoint)*m;this.dragMoves.unshift({distance:h,x:i.x,y:i.y,now:performance.now()}),this.dragMoves.length=50,this.rotation=o,this.dragLastPoint={x:i.x,y:i.y}}dragEnd(){var e;this.isDragging=!1,clearInterval(this.dragClearOldDistances);let t=0,i=performance.now();this.dragMoves=this.dragMoves.filter(o=>o!==void 0&&i-o.now<250?(t+=o.distance*1.5,!0):!1),t!==0&&(this.rotationSpeed=t,(e=this.onSpin)==null||e.call(this,{event:"spin",direction:this.rotationDirection,rotationSpeed:this.rotationSpeed,dragMoves:this.dragMoves})),this.refreshCursor()}};return w;})();