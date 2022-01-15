/**
 * Spin Wheel (ESM) v2.2.0
 * https://github.com/CrazyTim/spin-wheel#readme
 * Copyright (c) CrazyTim 2022.
 * Distributed under the MIT License.
 */
var f=Math.pow;function L(n=0,e=0){return n=Math.ceil(n),e=Math.floor(e),Math.floor(Math.random()*(e-n))+n}function l(n=0){return n*Math.PI/180}function p(n,e){let t=0;for(let i of n){let s=i[e];s&&(t+=typeof s=="number"?s:1)}return t}function R(n,e,t){return e<t?e<=n&&n<t:e<=n||n<t}function y(n,e,t,i){i.save(),i.font=`1px ${e}`;let s=i.measureText(n).width;return i.restore(),t/s}function x(n={x:0,y:0},e,t,i){return f(n.x-e,2)+f(n.y-t,2)<=f(i,2)}function b(n={x:0,y:0},e={}){let t=e.getBoundingClientRect();return{x:n.x-t.left,y:n.y-t.top}}function I(n,e,t,i){let s=n-t,r=e-i,a=Math.atan2(-r,-s);return a*=180/Math.PI,a<0&&(a+=360),a}function v(n=0,e=0){let t=n+e,i;return t>0?i=t%360:i=360+t%360,i===360&&(i=0),i}function S(n=0,e=0){let t=180-e,i=v(n,t);return 180-i}function w(n){return typeof n=="object"&&!Array.isArray(n)&&n!==null}var h=-90,m=500,_=250,z=Object.freeze({left:"left",right:"right",center:"center"}),o=Object.freeze({wheel:{borderColor:"#000",borderWidth:0,debug:!1,image:null,isInteractive:!0,itemBackgroundColors:[],itemLabelAlign:z.right,itemLabelBaselineOffset:0,itemLabelColors:[],itemLabelFont:"sans-serif",itemLabelFontSizeMax:m,itemLabelRadius:.85,itemLabelRadiusMax:.2,itemLabelRotation:0,items:[],lineColor:"#000",lineWidth:1,radius:.95,rotation:0,rotationResistance:-35,rotationSpeed:0,rotationSpeedMax:250,offset:{w:0,h:0},onCurrentIndexChange:null,onRest:null,onSpin:null,overlayImage:null,pointerRotation:0},item:{backgroundColor:"#fff",image:null,imageRadius:.5,imageSize:1,label:"",labelColor:"#000",weight:1}}),C=Object.freeze({pointerLineColor:"#ff00ff",labelOutlineColor:"#ff00ff",dragEventHue:200});function M(n={}){let e=n.canvas;n._handler_onPointerMoveRefreshCursor=(t={})=>{let i={x:t.clientX,y:t.clientY};n.isCursorOverWheel=n.wheelHitTest(i),n.refreshCursor()},n._handler_onMouseMoveRefreshCursor=(t={})=>{let i={x:t.clientX,y:t.clientY};n.isCursorOverWheel=n.wheelHitTest(i),n.refreshCursor()},n._handler_onPointerDown=(t={})=>{let i={x:t.clientX,y:t.clientY};if(!n.isInteractive||!n.wheelHitTest(i))return;t.preventDefault(),n.dragStart(i),e.setPointerCapture(t.pointerId),e.addEventListener("pointermove",s),e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r);function s(a={}){a.preventDefault(),n.dragMove({x:a.clientX,y:a.clientY})}function r(a={}){a.preventDefault(),e.releasePointerCapture(a.pointerId),e.removeEventListener("pointermove",s),e.removeEventListener("pointerup",r),e.removeEventListener("pointercancel",r),n.dragEnd()}},n._handler_onMouseDown=(t={})=>{let i={x:t.clientX,y:t.clientY};if(!n.isInteractive||!n.wheelHitTest(i))return;n.dragStart(i),document.addEventListener("mousemove",s),document.addEventListener("mouseup",r);function s(a={}){a.preventDefault(),n.dragMove({x:a.clientX,y:a.clientY})}function r(a={}){a.preventDefault(),document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",r),n.dragEnd()}},n._handler_onTouchStart=(t={})=>{let i={x:t.targetTouches[0].clientX,y:t.targetTouches[0].clientY};if(!n.isInteractive||!n.wheelHitTest(i))return;t.preventDefault(),n.dragStart(i),e.addEventListener("touchmove",s),e.addEventListener("touchend",r),e.addEventListener("touchcancel",r);function s(a={}){a.preventDefault(),n.dragMove({x:a.targetTouches[0].clientX,y:a.targetTouches[0].clientY})}function r(a={}){a.preventDefault(),e.removeEventListener("touchmove",s),e.removeEventListener("touchend",r),e.removeEventListener("touchcancel",r),n.dragEnd()}},"PointerEvent"in window?(e.addEventListener("pointerdown",n._handler_onPointerDown),e.addEventListener("pointermove",n._handler_onPointerMoveRefreshCursor)):(e.addEventListener("touchstart",n._handler_onTouchStart),e.addEventListener("mousedown",n._handler_onMouseDown),e.addEventListener("mousemove",n._handler_onMouseMoveRefreshCursor)),n._handler_onResize=n.resize.bind(n),window.addEventListener("resize",n._handler_onResize)}function A(n={}){let e=n.canvas;"PointerEvent"in window?(e.removeEventListener("pointerdown",n._handler_onPointerDown),e.removeEventListener("pointermove",n._handler_onPointerMoveRefreshCursor)):(e.removeEventListener("touchstart",n._handler_onTouchStart),e.removeEventListener("mousedown",n._handler_onMouseDown),e.removeEventListener("mousemove",n._handler_onMouseMoveRefreshCursor)),window.removeEventListener("resize",n._handler_onResize)}var E=class{constructor(e,t={}){if(!(e instanceof Element))throw"container parameter must be an Element";if(!w(t))throw"props parameter must be an Object";this.canvasContainer=e,this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.addCanvas(),M(this);for(let i of Object.keys(o.wheel))this["_"+i]=o.wheel[i];t&&this.init(o.wheel)}init(e={}){this._isInitialising=!0,this.borderColor=e.borderColor,this.borderWidth=e.borderWidth,this.debug=e.debug,this.image=e.image,this.isInteractive=e.isInteractive,this.itemBackgroundColors=e.itemBackgroundColors,this.itemLabelAlign=e.itemLabelAlign,this.itemLabelBaselineOffset=e.itemLabelBaselineOffset,this.itemLabelColors=e.itemLabelColors,this.itemLabelFont=e.itemLabelFont,this.itemLabelFontSizeMax=e.itemLabelFontSizeMax,this.itemLabelRadius=e.itemLabelRadius,this.itemLabelRadiusMax=e.itemLabelRadiusMax,this.itemLabelRotation=e.itemLabelRotation,this.items=e.items,this.lineColor=e.lineColor,this.lineWidth=e.lineWidth,this.rotationSpeedMax=e.rotationSpeedMax,this.radius=e.radius,this.rotation=e.rotation,this.rotationResistance=e.rotationResistance,this.rotationSpeed=e.rotationSpeed,this.offset=e.offset,this.onCurrentIndexChange=e.onCurrentIndexChange,this.onRest=e.onRest,this.onSpin=e.onSpin,this.overlayImage=e.overlayImage,this.pointerRotation=e.pointerRotation}addCanvas(){this.canvasContainer.appendChild(this.canvas)}removeCanvas(){this.canvasContainer.removeChild(this.canvas)}remove(){window.cancelAnimationFrame(this.frameRequestId),A(this),this.removeCanvas()}resize(){window.cancelAnimationFrame(this.frameRequestId);let[e,t]=[this.canvasContainer.clientWidth,this.canvasContainer.clientHeight],i=Math.min(e,t),s={w:i-i*this.offset.w,h:i-i*this.offset.h},r=Math.min(e/s.w,t/s.h);this.size=Math.max(s.w*r,s.h*r),this.canvas.style.width=e+"px",this.canvas.style.height=t+"px",this.canvas.width=e,this.canvas.height=t,this.center={x:e/2+e*this.offset.w,y:t/2+t*this.offset.h},this.actualRadius=this.size/2*this.radius,this.itemLabelFontSize=this.itemLabelFontSizeMax*(this.size/m),this.labelMaxWidth=this.actualRadius*(this.itemLabelRadius-this.itemLabelRadiusMax);for(let a of this.actualItems)this.itemLabelFontSize=Math.min(this.itemLabelFontSize,y(a.label,this.itemLabelFont,this.labelMaxWidth,this.context));this.frameRequestId=window.requestAnimationFrame(this.draw.bind(this))}draw(e=0){let t=this.context;t.clearRect(0,0,this.canvas.width,this.canvas.height),this.lastFrame===void 0&&(this.lastFrame=e);let i=(e-this.lastFrame)/1e3;i>0&&(this.rotation+=i*this.rotationSpeed,this.rotation=this.rotation%360),this.lastFrame=e;let s=this.getItemAngles(this.rotation),r=this.borderWidth/m*this.size;for(let[u,d]of s.entries())t.beginPath(),t.moveTo(this.center.x,this.center.y),t.arc(this.center.x,this.center.y,this.actualRadius-r/2,l(d.start+h),l(d.end+h)),t.closePath(),t.fillStyle=this.actualItems[u].backgroundColor,t.fill();this.drawItemLines(t,s),this.drawBorder(t),t.textBaseline="middle",t.textAlign=this.itemLabelAlign,t.font=this.itemLabelFontSize+"px "+this.itemLabelFont;let a=this.itemLabelFontSize*-this.itemLabelBaselineOffset;t.save();for(let[u,d]of s.entries()){let g=this.actualItems[u];if(!g.label)continue;t.save();let c=d.start+(d.end-d.start)/2;t.translate(this.center.x+Math.cos(l(c+h))*(this.actualRadius*this.itemLabelRadius),this.center.y+Math.sin(l(c+h))*(this.actualRadius*this.itemLabelRadius)),t.rotate(l(c+h)),this.debug&&(t.beginPath(),t.moveTo(0,0),t.lineTo(-this.labelMaxWidth,0),t.strokeStyle=C.labelOutlineColor,t.lineWidth=1,t.stroke(),t.strokeRect(0,-this.itemLabelFontSize/2,-this.labelMaxWidth,this.itemLabelFontSize)),t.rotate(l(this.itemLabelRotation)),t.fillStyle=g.labelColor,t.fillText(g.label,0,a),t.restore()}this.drawItemImages(t,s),this.drawImage(t,this.image,!1),this.drawImage(t,this.overlayImage,!0),this.drawPointerLine(t),this.drawDragEvents(t),this.applyDrag(i),this._isInitialising=!1,this.frameRequestId=window.requestAnimationFrame(this.draw.bind(this))}drawItemImages(e,t=[]){for(let[i,s]of t.entries()){let r=this.actualItems[i];if(!r.image||!r.image.complete||r.image.error)continue;e.save();let a=s.start+(s.end-s.start)/2;e.translate(this.center.x+Math.cos(l(a+h))*(this.actualRadius*r.imageRadius),this.center.y+Math.sin(l(a+h))*(this.actualRadius*r.imageRadius)),e.rotate(l(a));let u=this.size/500*r.image.width*r.imageSize,d=this.size/500*r.image.height*r.imageSize,g=-u/2,c=-d/2;e.drawImage(r.image,g,c,u,d),e.restore()}}drawImage(e,t,i=!1){if(!t)return;e.save(),e.translate(this.center.x,this.center.y),i||e.rotate(l(this.rotation));let s=i?this.size:this.size*this.radius,r=-(s/2);e.drawImage(t,r,r,s,s),e.restore()}drawPointerLine(e,t,i=!1){!this.debug||(e.save(),e.translate(this.center.x,this.center.y),e.rotate(l(this.pointerRotation+h)),e.beginPath(),e.moveTo(0,0),e.lineTo(this.actualRadius*2,0),e.strokeStyle=C.pointerLineColor,e.lineWidth=2,e.stroke(),e.restore())}drawBorder(e){let t=this.borderWidth/m*this.size;e.beginPath(),e.strokeStyle=this.borderColor,e.lineWidth=t,e.arc(this.center.x,this.center.y,this.actualRadius-t/2,0,2*Math.PI),e.stroke()}drawItemLines(e,t=[]){if(this.lineWidth<=0)return;let i=this.lineWidth/m*this.size;e.save(),e.translate(this.center.x,this.center.y);for(let[s,r]of t.entries())e.rotate(l(r.start+h)),e.beginPath(),e.moveTo(0,0),e.lineTo(this.actualRadius-i,0),e.strokeStyle=this.lineColor,e.lineWidth=i,e.stroke(),e.rotate(-l(r.start+h));e.restore()}drawDragEvents(){var t;if(!this.debug||!((t=this.dragEvents)==null?void 0:t.length))return;let e=[...this.dragEvents].reverse();for(let[i,s]of e.entries()){let r=i/this.dragEvents.length*100;ctx.beginPath(),ctx.arc(s.x,s.y,5,0,2*Math.PI),ctx.fillStyle=`hsl(${C.dragEventHue},100%,${r}%)`,ctx.strokeStyle="#000",ctx.lineWidth=.5,ctx.fill(),ctx.stroke()}}applyDrag(e=0){var i;if(this.rotationSpeed===0)return;let t=this.rotationSpeed+this.rotationResistance*e*this.rotationDirection;(this.rotationDirection===1&&t<0||this.rotationDirection===-1&&t>=0)&&(t=0),this.rotationSpeed=t,this.rotationSpeed===0&&((i=this.onRest)==null||i.call(this,{event:"rest",currentIndex:this._currentIndex}))}spin(e=0,t=0){var s;let i=t/2;this.rotationSpeed=L(e*(1-i),e*(1+i)),this.dragEvents=[],this.rotationSpeed!==0&&((s=this.onSpin)==null||s.call(this,{event:"spin",direction:this.rotationDirection,rotationSpeed:this.rotationSpeed,dragEvents:[...this.dragEvents]}))}getRotationDirection(e=0){return e>0?1:-1}wheelHitTest(e={x:0,y:0}){let t=b(e,this.canvas);return x(t,this.center.x,this.center.y,this.actualRadius)}refreshCursor(){if(this.isDragging){this.canvas.style.cursor="grabbing";return}if(this.isInteractive&&this.isCursorOverWheel){this.canvas.style.cursor="grab";return}this.canvas.style.cursor=null}processItems(){this.actualItems=[];for(let[e,t]of this.items.entries()){let i={};typeof t.backgroundColor=="string"?i.backgroundColor=t.backgroundColor:this.itemBackgroundColors.length?i.backgroundColor=this.itemBackgroundColors[e%this.itemBackgroundColors.length]:i.backgroundColor=o.item.backgroundColor,typeof t.label=="string"?i.label=t.label:i.label=o.item.label,typeof t.labelFont=="string"?i.labelFont=t.labelFont:i.labelFont=this.itemLabelFont,typeof t.labelColor=="string"?i.labelColor=t.labelColor:this.itemLabelColors.length?i.labelColor=this.itemLabelColors[e%this.itemLabelColors.length]:i.labelColor=o.item.labelColor,typeof t.weight=="number"?i.weight=t.weight:i.weight=o.item.weight,typeof t.image=="string"?(i.image=new Image,i.image.src=t.image,i.image.onerror=s=>(i.image.error=!0,!0)):i.image=o.item.image,typeof t.imageSize=="number"?i.imageSize=t.imageSize:i.imageSize=o.item.imageSize,typeof t.imageRadius=="number"?i.imageRadius=t.imageRadius:i.imageRadius=o.item.imageRadius,this.actualItems.push(i)}this.actualItems.length?this.weightedItemAngle=360/p(this.actualItems,"weight"):this.weightedItemAngle=0}getAngleFromCenter(e={x:0,y:0}){return(I(this.center.x,this.center.y,e.x,e.y)+90)%360}getCurrentIndex(){return this._currentIndex}refreshCurrentIndex(e=[]){var t;this.actualItems.length===0&&(this._currentIndex=-1);for(let[i,s]of e.entries())if(!!R(this.pointerRotation,s.start%360,s.end%360)){if(this._currentIndex===i)break;this._currentIndex=i,this._isInitialising||(t=this.onCurrentIndexChange)==null||t.call(this,{event:"currentIndexChange",currentIndex:this._currentIndex});break}}getItemAngles(e=0){let t=[],i,s=e;for(let r of this.actualItems)i=r.weight*this.weightedItemAngle,t.push({start:s,end:s+i}),s+=i;return this.actualItems.length>1&&(t[t.length-1].end=t[0].start+360),t}get borderColor(){return this._borderColor}set borderColor(e){typeof e=="string"?this._borderColor=e:this._borderColor=o.wheel.borderColor}get borderWidth(){return this._borderWidth}set borderWidth(e){typeof e=="number"?this._borderWidth=e:this._borderWidth=o.wheel.borderWidth}get debug(){return this._debug}set debug(e){typeof e=="boolean"?this._debug=e:this._debug=o.wheel.debug}get image(){return this._image}set image(e){typeof e=="string"?(this._image=new Image,this._image.src=e):this._image=o.wheel.image}get isInteractive(){return this._isInteractive}set isInteractive(e){typeof e=="boolean"?this._isInteractive=e:this._isInteractive=o.wheel.isInteractive}get itemBackgroundColors(){return this._itemBackgroundColors}set itemBackgroundColors(e){Array.isArray(e)?this._itemBackgroundColors=e:this._itemBackgroundColors=o.wheel.itemBackgroundColors,this.processItems()}get itemLabelAlign(){return this._itemLabelAlign}set itemLabelAlign(e){typeof e=="string"?this._itemLabelAlign=e:this._itemLabelAlign=o.wheel.itemLabelAlign}get itemLabelBaselineOffset(){return this._itemLabelBaselineOffset}set itemLabelBaselineOffset(e){typeof e=="number"?this._itemLabelBaselineOffset=e:this._itemLabelBaselineOffset=o.wheel.itemLabelBaselineOffset,this.resize()}get itemLabelColors(){return this._itemLabelColors}set itemLabelColors(e){Array.isArray(e)?this._itemLabelColors=e:this._itemLabelColors=o.wheel.itemLabelColors,this.processItems()}get itemLabelFont(){return this._itemLabelFont}set itemLabelFont(e){typeof e=="string"?this._itemLabelFont=e:this._itemLabelFont=o.wheel.itemLabelFont,this.resize()}get itemLabelFontSizeMax(){return this._itemLabelFontSizeMax}set itemLabelFontSizeMax(e){typeof e=="number"?this._itemLabelFontSizeMax=e:this._itemLabelFontSizeMax=o.wheel.itemLabelFontSizeMax}get itemLabelRadius(){return this._itemLabelRadius}set itemLabelRadius(e){typeof e=="number"?this._itemLabelRadius=e:this._itemLabelRadius=o.wheel.itemLabelRadius}get itemLabelRadiusMax(){return this._itemLabelRadiusMax}set itemLabelRadiusMax(e){typeof e=="number"?this._itemLabelRadiusMax=e:this._itemLabelRadiusMax=o.wheel.itemLabelRadiusMax}get itemLabelRotation(){return this._itemLabelRotation}set itemLabelRotation(e){typeof e=="number"?this._itemLabelRotation=e:this._itemLabelRotation=o.wheel.itemLabelRotation}get items(){return this._items}set items(e){Array.isArray(e)?this._items=e:this._items=o.wheel.items,this.processItems(),this.refreshCurrentIndex(this.getItemAngles(this.rotation))}get lineColor(){return this._lineColor}set lineColor(e){typeof e=="string"?this._lineColor=e:this._lineColor=o.wheel.lineColor}get lineWidth(){return this._lineWidth}set lineWidth(e){typeof e=="number"?this._lineWidth=e:this._lineWidth=o.wheel.lineWidth}get radius(){return this._radius}set radius(e){typeof e=="number"?this._radius=e:this._radius=o.wheel.radius,this.resize()}get rotation(){return this._rotation}set rotation(e){typeof e=="number"?this._rotation=e:this._rotation=o.wheel.rotation,this.refreshCurrentIndex(this.getItemAngles(this.rotation))}get rotationResistance(){return this._rotationResistance}set rotationResistance(e){typeof e=="number"?this._rotationResistance=e:this._rotationResistance=o.wheel.rotationResistance}get rotationSpeed(){return this._rotationSpeed}set rotationSpeed(e){if(typeof e=="number"){let t=Math.min(e,this.rotationSpeedMax);t=Math.max(t,-this.rotationSpeedMax),this.rotationDirection=this.getRotationDirection(t),this._rotationSpeed=t}else this.rotationDirection=0,this._rotationSpeed=o.wheel.rotationSpeed}get rotationSpeedMax(){return this._rotationSpeedMax}set rotationSpeedMax(e){typeof e=="number"?this._rotationSpeedMax=e:this._rotationSpeedMax=o.wheel.rotationSpeedMax}get offset(){return this._offset}set offset(e){e?this._offset=e:this._offset=o.wheel.offset,this.resize()}get onCurrentIndexChange(){return this._onCurrentIndexChange}set onCurrentIndexChange(e){typeof e=="function"?this._onCurrentIndexChange=e:this._onCurrentIndexChange=o.wheel.onCurrentIndexChange}get onRest(){return this._onRest}set onRest(e){typeof e=="function"?this._onRest=e:this._onRest=o.wheel.onRest}get onSpin(){return this._onSpin}set onSpin(e){typeof e=="function"?this._onSpin=e:this._onSpin=o.wheel.onSpin}get overlayImage(){return this._overlayImage}set overlayImage(e){typeof e=="string"?(this._overlayImage=new Image,this._overlayImage.src=e):this._overlayImage=o.wheel.overlayImage}get pointerRotation(){return this._pointerRotation}set pointerRotation(e){typeof e=="number"?this._pointerRotation=e:this._pointerRotation=o.wheel.pointerRotation}dragStart(e={x:0,y:0}){let t=b(e,this.canvas),i=-this.getAngleFromCenter(t);this.isDragging=!0,this.rotationSpeed=0,this.dragStartRotation=v(i,this.rotation),this.dragEvents=[{distance:0,x:t.x,y:t.y,now:performance.now()}],this.refreshCursor()}dragMove(e={x:0,y:0}){let t=b(e,this.canvas),i=this.getAngleFromCenter(t),s=this.dragEvents[0],r=this.getAngleFromCenter(s),a=S(r,i);this.dragEvents.unshift({distance:a,x:t.x,y:t.y,now:performance.now()}),this.debug&&this.dragEvents.length>=40&&this.dragEvents.pop(),this.rotation=v(i,this.dragStartRotation)}dragEnd(){this.isDragging=!1,clearInterval(this.dragClearOldDistances);let e=0,t=performance.now();for(let[i,s]of this.dragEvents.entries()){if(!this.isDragEventTooOld(t,s)){e+=s.distance;continue}this.dragEvents.length=i;break}e!==0&&this.spin(e*(1e3/_)),this.refreshCursor()}isDragEventTooOld(e,t={}){return e-t.now>_}};export{E as Wheel};
