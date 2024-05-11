(()=>{var X=Math.pow;var c=(o,t,i)=>new Promise((e,s)=>{var n=m=>{try{l(i.next(m))}catch(g){s(g)}},r=m=>{try{l(i.throw(m))}catch(g){s(g)}},l=m=>m.done?e(m.value):Promise.resolve(m.value).then(n,r);l((i=i.apply(o,t)).next())});window.addLoadEventListener=function(o){let t=!1,i=()=>{t||(t=!0,o())};window.addEventListener("DOMContentLoaded",i),window.addEventListener("load",i),document.addEventListener("load",i),window.addEventListener("ready",i),setTimeout(i,1e3)};window.addVisibilityChangeEventListener=function(o){let t=["webkit","moz","ms",""],i=!1,e=()=>{if(i)return;i=!0;let s=t.map(n=>n&&n.length>0?`${n}Hidden`:"hidden").map(n=>document[n]).reduce((n,r)=>n||r,!1);setTimeout(()=>{o(!s),i=!1},0)};for(let s of t)document.addEventListener(`${s}visibilitychange`,e);document.onvisibilitychange=e};HTMLCanvasElement.prototype.screenshot=function(o="download.png"){let t=document.createElement("a");t.download=o,t.href=this.toDataURL("image/png;base64"),t.style.visibility="hidden",t.style.display="none",document.body.appendChild(t),setTimeout(()=>{t.click(),document.body.removeChild(t)},100)};String.prototype.toCamelCase=function(){return this.replace("--","").replace(/-./g,o=>o[1].toUpperCase()).trim()};Array.prototype.remove=function(o){let t=this.indexOf(o);return t!=-1?(this.splice(t,1),!0):!1};Array.prototype.appendArray=function(o){if(!!o)for(let t=0;t<o.length;t++)this.push(o[t])};Math.clamp=function(o,t,i){return Math.min(Math.max(o,t),i)};Math.average=function(...o){return o.reduce((t,i)=>t+i,0)/o.length};Math.distance=function(o,t,i,e){return Math.sqrt(Math.pow(i-o,2)+Math.pow(e-t,2))};Math.randomInt=function(o,t){return Math.floor(Math.random()*(t-o+1))+o};Math.lerp=function(o,t,i){let e=t-o;return e>i?o+i:e<-i?o-i:o+e};Math.oscilate=function(o,t,i,e){let s=2*Math.PI*t,n=e-i,l=(Math.sin(s*o)+1)/2;return i+l*n};CanvasRenderingContext2D.prototype.clear=function(){this.clearRect(0,0,this.canvas.width,this.canvas.height)};CanvasRenderingContext2D.prototype.line=function(o,t,i,e){this.beginPath(),this.moveTo(o,t),this.lineTo(i,e),this.stroke()};CanvasRenderingContext2D.prototype.fillTextCentered=function(o,t,i){let e=this.measureText(o);this.fillText(o,t-e.width/2,i)};Promise.delay=function(o){return new Promise((t,i)=>{setTimeout(t,o)})};var b=class{static logColoredText(t,i,e,...s){console[t].call(console,`%c${t.toUpperCase()} %c[${i}]`,`font-weight: bold; color: ${e};`,"font-weight: bold; color: gray",...s)}static info(t,...i){this.logColoredText("info",t,"turquoise",...i)}static warn(t,...i){this.logColoredText("warn",t,"yellow",...i)}static error(t,...i){this.logColoredText("error",t,"red",...i)}static debug(t,...i){}};var a=class{constructor(t,i=void 0){this.x=t,i===void 0?this.y=t:this.y=i}dot(t){return this.x*t.x+this.y*t.y}add(t){return new a(this.x+t.x,this.y+t.y)}subtract(t){return new a(this.x-t.x,this.y-t.y)}multiply(t){return new a(this.x*t,this.y*t)}divide(t){return new a(this.x/t,this.y/t)}normalize(){let t=this.length;return new a(this.x/t,this.y/t)}clone(){return new a(this.x,this.y)}static distance(t,i){return Math.sqrt(X(t.x-i.x,2)+X(t.y-i.y,2))}get length(){return Math.sqrt(this.x*this.x+this.y*this.y)}static get zero(){return new a(0,0)}toString(){return`{ ${this.x}, ${this.y} }`}};var p=class{constructor(t,i,e,s){this.x=t;this.y=i;this.width=e;this.height=s}translate(t){return new p(this.x+t.x,this.y+t.y,this.width,this.height)}contains(t,i=void 0){if(t instanceof a&&i===void 0)return this.x<=t.x&&this.x+this.width>=t.x&&this.y<=t.y&&this.y+this.height>=t.y;if(t instanceof p&&i===void 0)return this.x<=t.x&&this.x+this.width>=t.x+t.width&&this.y<=t.y&&this.y+this.height>=t.y+t.height;if(typeof t=="number"&&typeof i=="number")return t>=this.x&&t<=this.x+this.width&&i>=this.y&&i<=this.y+this.height;throw new Error("Invalid arguments")}intersects(t){return this.x<t.x+t.width&&this.x+this.width>t.x&&this.y<t.y+t.height&&this.y+this.height>t.y}intersection(t){let i=Math.max(this.x,t.x),e=Math.max(this.y,t.y),s=Math.min(this.x+this.width,t.x+t.width)-i,n=Math.min(this.y+this.height,t.y+t.height)-e;return new p(i,e,s,n)}get size(){return new a(this.width,this.height)}get position(){return new a(this.x,this.y)}set position(t){this.x=t.x,this.y=t.y}get center(){return new a(this.x+this.width/2,this.y+this.height/2)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}clone(){return new p(this.x,this.y,this.width,this.height)}equals(t){return this.x===t.x&&this.y===t.y&&this.width===t.width&&this.height===t.height}toString(){return`{ x: ${this.x}, y: ${this.y}, width: ${this.width}, height: ${this.height} }`}};var L=class{constructor(t=void 0){this.element=document.createElement("canvas");this.virtualWidth=0;this.virtualHeight=0;this.drawRatio=1;this.overrideRatio=void 0;t&&(this.element.id=t);let i=this.element.getContext("2d");if(!i)throw new Error("Could not get context of canvas");this.context=i,this.context.imageSmoothingEnabled=!1,this.context.mozImageSmoothingEnabled=!1,this.context.webkitImageSmoothingEnabled=!1,this.element.oncontextmenu=()=>!1}get backingStoreRatio(){return this.overrideRatio||this.context.webkitBackingStorePixelRatio||this.context.mozBackingStorePixelRatio||this.context.msBackingStorePixelRatio||this.context.oBackingStorePixelRatio||this.context.backingStorePixelRatio||1}get devicePixelRation(){return this.overrideRatio||window.devicePixelRatio||1}getDrawRatio(t,i){return i/t}setSize(t,i){this.drawRatio=this.getDrawRatio(this.backingStoreRatio,this.devicePixelRation),this.backingStoreRatio!==this.devicePixelRation?(this.element.width=t*this.drawRatio,this.element.height=i*this.drawRatio,this.element.style.width=`${t}px`,this.element.style.minWidth=`${t}px`,this.element.style.height=`${i}px`,this.element.style.minHeight=`${i}px`):(this.element.width=t,this.element.height=i,this.element.style.width="",this.element.style.height=""),this.context.scale(this.drawRatio,this.drawRatio),this.virtualWidth=t,this.virtualHeight=i}clear(){this.context.clearRect(0,0,this.element.width,this.element.height)}drawTo(t,i,e){e.save(),e.scale(1/this.drawRatio,1/this.drawRatio),e.drawImage(this.element,t,i),e.restore()}attachToElement(t){t.appendChild(this.element)}get width(){return this.virtualWidth||this.element.width}get height(){return this.virtualHeight||this.element.height}get bounds(){return new p(0,0,this.width,this.height)}};var d=class{static isKeyDown(...t){return t.some(i=>this.keys[i])}static isKeyJustPressed(...t){return t.some(i=>this.keysJustPressed[i])}static onKeyDown(t){this.keys[t.key]=!0,this.keysJustPressed[t.key]=!0,this.isDirty=!0}static onKeyUp(t){this.keys[t.key]=!1,delete this.keysJustPressed[t.key],this.isDirty=!0}static isMouseButtonDown(...t){return t.some(i=>this.mouseButtons[i])}static isMouseButtonJustPressed(...t){return t.some(i=>this.mouseButtonsJustPressed[i])}static isMouseButtonJustReleased(...t){return t.some(i=>this.mouseButtonsJustReleased[i])}static onMouseMove(t){var i,e,s,n;this.mouseDelta.x=t.movementX,this.mouseDelta.y=t.movementY,this.mouse.x=t.clientX-((e=(i=t.target)==null?void 0:i.offsetLeft)!=null?e:0),this.mouse.y=t.clientY-((n=(s=t.target)==null?void 0:s.offsetTop)!=null?n:0),this.isDirty=!0}static onMouseDown(t){this.mouseButtons[t.button]=!0,this.mouseButtonsJustPressed[t.button]=!0,this.isDirty=!0}static onMouseUp(t){this.mouseButtons[t.button]=!1,this.mouseButtonsJustReleased[t.button]=!0,this.isDirty=!0}static onPointerDown(t,i){console.log("Pointer down",i),this.mouseButtons[i.button]=!0,this.mouseButtonsJustPressed[i.button]=!0,t.setPointerCapture(i.pointerId),this.isDirty=!0}static onPointerUp(t,i){console.log("Pointer up",i),this.mouseButtons[i.button]=!1,this.mouseButtonsJustReleased[i.button]=!0,t.releasePointerCapture(i.pointerId),this.isDirty=!0}static setup(t){window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),this.mouse.x=window.innerWidth/2,this.mouse.y=window.innerHeight/2,t.canvas.element.addEventListener("click",this.onMouseMove.bind(this)),t.canvas.element.addEventListener("mousemove",this.onMouseMove.bind(this)),t.canvas.element.addEventListener("mousedown",this.onMouseDown.bind(this)),t.canvas.element.addEventListener("mouseup",this.onMouseUp.bind(this)),t.canvas.element.addEventListener("pointermove",this.onMouseMove.bind(this)),t.canvas.element.addEventListener("pointerdown",this.onPointerDown.bind(this,t.canvas.element)),t.canvas.element.addEventListener("pointerup",this.onPointerUp.bind(this,t.canvas.element))}static update(){this.keysJustPressed={},this.mouseButtonsJustPressed={},this.mouseButtonsJustReleased={},this.mouseDelta.x=0,this.mouseDelta.y=0,this.isDirty=!1}};d.isDirty=!1,d.keys={},d.keysJustPressed={},d.mouse=a.zero,d.mouseDelta=a.zero,d.mouseButtons={},d.mouseButtonsJustPressed={},d.mouseButtonsJustReleased={};var f=class{static alpha(t,i){let e=t;e.startsWith("#")&&(e=e.slice(1)),e.length===3&&(e=e.replace(/./g,"$&$&"));let s=Math.round(i*255).toString(16).padStart(2,"0");return`#${e}${s}`}static interpolate(t,i,e){let s=`0x${t.trim().slice(1)}`,n=`0x${i.trim().slice(1)}`;s.length<5&&(s=s.replace(/./g,"$&$&")),n.length<5&&(n=n.replace(/./g,"$&$&"));let r=parseInt(s,16),l=parseInt(n,16),m=r>>16,g=r>>8&255,k=r&255,$=l>>16,R=l>>8&255,V=l&255,U=Math.round(m+($-m)*e),z=Math.round(g+(R-g)*e),F=Math.round(k+(V-k)*e);return`#${(16777216+(U<<16)+(z<<8)+F).toString(16).slice(1)}`}static isColorLight(t){let i=`0x${t.trim().slice(1)}`;i.length<5&&(i=i.replace(/./g,"$&$&"));let e=parseInt(i,16),s=e>>16,n=e>>8&255,r=e&255;return Math.sqrt(.299*(s*s)+.587*(n*n)+.114*(r*r))>127.5}};var j=class{constructor(t,i){this.rect=t;this.color=i}render(t){t.strokeStyle=this.color,t.lineWidth=1,t.strokeRect(this.rect.x,this.rect.y,this.rect.width,this.rect.height)}},Q=class{constructor(t,i){this.rect=t;this.color=i}render(t){t.fillStyle=this.color,t.fillRect(this.rect.x,this.rect.y,this.rect.width,this.rect.height)}},tt=class{constructor(t,i,e,s){this.start=t;this.end=i;this.color=e;this.thickness=s}render(t){t.strokeStyle=this.color,t.lineWidth=this.thickness,t.beginPath(),t.moveTo(this.start.x,this.start.y),t.lineTo(this.end.x,this.end.y),t.stroke()}},it=class{constructor(t,i,e){this.center=t;this.radius=i;this.color=e}render(t){t.fillStyle=this.color,t.lineWidth=1,t.beginPath(),t.arc(this.center.x,this.center.y,this.radius,0,Math.PI*2),t.fill()}},et=class{constructor(t,i,e,s){this.text=t;this.position=i;this.color=e;this.alignment=s}render(t){t.save(),t.fillStyle=this.color,t.font="12px Arial",t.textAlign=this.alignment,t.fillText(this.text,this.position.x,this.position.y),t.restore()}},st=class{constructor(t,i,e){this.origin=t;this.vector=i;this.color=e;this.ARROWHEAD_LENGTH=10;this.ARROWHEAD_ANGLE=Math.PI/6;this.MIN_LENGTH=1;this.MAX_LENGTH=100}render(t){let i=this.vector.length;if(i<this.MIN_LENGTH)return;i>this.MAX_LENGTH&&(this.vector=this.vector.normalize().multiply(this.MAX_LENGTH),i=this.MAX_LENGTH);let e=(i-this.MIN_LENGTH)/(this.MAX_LENGTH-this.MIN_LENGTH),s=f.alpha(this.color,e);t.fillStyle=s,t.strokeStyle=s,t.lineWidth=1.5,t.lineCap="round",t.beginPath(),t.moveTo(this.origin.x,this.origin.y),t.lineTo(this.origin.x+this.vector.x,this.origin.y+this.vector.y),t.stroke();let n=10,r=Math.PI/6,l=Math.atan2(this.vector.y,this.vector.x);t.beginPath(),t.moveTo(this.origin.x+this.vector.x,this.origin.y+this.vector.y),t.lineTo(this.origin.x+this.vector.x-n*Math.cos(l-r),this.origin.y+this.vector.y-n*Math.sin(l-r)),t.lineTo(this.origin.x+this.vector.x-n*Math.cos(l+r),this.origin.y+this.vector.y-n*Math.sin(l+r)),t.lineTo(this.origin.x+this.vector.x,this.origin.y+this.vector.y),t.fill()}},C=class{static render(t){}static clear(){}static rect(t,i="#fff"){}static outline(t,i="#fff"){}static line(t,i,e="#fff",s=1){}static circle(t,i,e="#fff"){}static text(t,i,e="#fff",s="left"){}static arrow(t,i,e="#fff"){}},w=C;w.list=[];var I=class{static set(t){this.current=t}static apply(){document.body.style.cursor=this.current}static reset(){this.current="default"}};I.current="default";var h=class{static get isDark(){return window.matchMedia("(prefers-color-scheme: dark)").matches}static setup(){return c(this,null,function*(){h.loadVariables(),h.observeChanges()})}static loadVariables(){let t=["--background","--foreground","--secondary","--container-background","--container-border","--container-shadow"];b.info("Theme",`Setting up theme, loading ${t.length} variables...`),console.groupCollapsed("Loading theme variables");let i=getComputedStyle(document.body);for(let e of t){let s=i.getPropertyValue(e),n=e.toString().toCamelCase();h[n]=s,console.log(`%c${n}`,`color: ${f.isColorLight(s)?"#212121":"#eee"}; background-color: ${s}`)}console.groupEnd()}static observeChanges(){let t=window.matchMedia("(prefers-color-scheme: dark)");t.addEventListener("change",()=>{b.info("Theme",`Changed theme to ${t.matches?"dark":"light"}`),h.loadVariables()})}};var x="'Pixelify Sans', sans-serif";var kt=10*3,nt=440,ot=75,G=.2,lt=220,dt=110;var B=class{static setup(){return c(this,null,function*(){this.context=new AudioContext,this.master=this.context.createGain(),this.master.connect(this.context.destination),this.master.gain.setValueAtTime(G,this.context.currentTime)})}static resume(){return c(this,null,function*(){if(this.context.state==="suspended"||this.context.state==="interrupted")yield this.context.resume();else if(this.context.state==="closed")return yield this.setup(),!0;return!1})}static play(t,i,e=0){return c(this,null,function*(){if(yield this.resume())return;let s=this.context.createGain();s.connect(this.master);let n=this.context.createStereoPanner();n.connect(s),n.pan.setValueAtTime(e,this.context.currentTime);let r=this.context.createOscillator();r.connect(n),r.type="square",r.frequency.setValueAtTime(t,this.context.currentTime);let l=.01,m=.1,g=.4,k=.1,$=this.context.currentTime,R=i/1e3,V=$+l*R,U=V+m*R,z=U+g*R,F=z+k*R;s.gain.setValueAtTime(0,$),s.gain.linearRampToValueAtTime(G,V),s.gain.linearRampToValueAtTime(.8*G,U),s.gain.linearRampToValueAtTime(.8*G,z),s.gain.linearRampToValueAtTime(0,F),r.addEventListener("ended",()=>{r.disconnect(),n.disconnect(),s.disconnect()}),r.start($),r.stop(F)})}};var N=class{static setup(){return c(this,null,function*(){let t=`${48}pt ${x}`;document.fonts.check(t)||(yield document.fonts.load(t))})}};var A={DIFFICULTY:1};var H=class{constructor(t){this.bounds=new p(0,0,10*2,10*2);this.velocity=new a(0,0);this.timer=3;this.lives=3;this.lastTimer=0;this.audioPitch=0;this.timeSinceLastHit=0;this.bounds.position=a.zero,this.velocity=a.zero,this.reset(t)}reset(t){this.timer=3,this.bounds.x=t.width/2-this.bounds.width/2,this.bounds.y=t.height/2-this.bounds.height/2+15*2,this.lives=3,A.DIFFICULTY=1}playSound(t){B.play(t,ot*(1+Math.random()*.8-.4))}bounceOffWalls(t){if(this.bounds.x<0&&this.velocity.x<0?(this.bounds.x=0,this.velocity.x*=-1):this.bounds.x+this.bounds.width>t.width&&this.velocity.x>0&&(this.bounds.x=t.width-this.bounds.width,this.velocity.x*=-1),this.bounds.y<0&&this.velocity.y<0)this.bounds.y=0,this.velocity.y*=-1;else if(this.bounds.y+this.bounds.height>t.height&&this.velocity.y>0){this.bounds.y=t.height-this.bounds.height,this.velocity.y*=-1;let i=this.lives;this.reset(t),this.lives=i-1,this.playSound(nt)}}bounceOffBlocks(t,i){for(let e=t.length-1;e>=0;e--){let s=t[e];if(this.bounds.intersects(s.bounds)){let n=Math.abs(this.bounds.bottom-s.bounds.y),r=Math.abs(this.bounds.y-s.bounds.bottom),l=Math.abs(this.bounds.right-s.bounds.x),m=Math.abs(this.bounds.x-s.bounds.right),g=Math.min(n,r,l,m);g===n||g===r?(this.velocity.y*=-1,this.bounds.y+=g===n?-10:10):(this.velocity.x*=-1,this.bounds.x+=g===l?-10:10),this.timeSinceLastHit=performance.now(),this.audioPitch+=.25;let k=Math.min(1,Math.max(-1,(this.bounds.center.x-i.width/2)/(i.width/2)));B.play(lt*(1+this.audioPitch),ot*(1+Math.random()*.8-.4),k),t.splice(e,1),A.DIFFICULTY*=1.01}}performance.now()-this.timeSinceLastHit>500&&(this.audioPitch=0)}bounceOffPaddle(t){this.bounds.intersects(t.bounds)&&this.velocity.y>0&&(this.velocity.y*=-1,this.playSound(nt),A.DIFFICULTY*=1.01)}updateTimer(t){this.timer-=t,this.timer<=0&&(this.velocity=new a(Math.random()<.5?-525:525,525)),Math.floor(this.timer)!==this.lastTimer&&(this.lastTimer=Math.floor(this.timer),this.playSound(dt*(3-this.timer+1)))}update(t,i,e,s){if(this.timer>0){this.updateTimer(t);return}this.bounds.x+=this.velocity.x*A.DIFFICULTY*t,this.bounds.y+=this.velocity.y*A.DIFFICULTY*t,this.bounceOffWalls(i),this.bounceOffPaddle(e),this.bounceOffBlocks(s,i)}render(t){t.beginPath(),this.timer>0?t.fillStyle=f.alpha(h.foreground,Math.sin(this.timer*(Math.PI*2)*1.2)*.25+.75):t.fillStyle=h.foreground,t.fillRect(this.bounds.x,this.bounds.y,this.bounds.width,this.bounds.height)}};var _=class{constructor(t,i,e,s){this.column=t;this.row=i;this.bounds=e;this.color=s}render(t){t.beginPath(),t.fillStyle=this.color,t.fillRect(this.bounds.x,this.bounds.y,this.bounds.width,this.bounds.height)}};var O=class{constructor(t){this.bounds=new p(0,0,100,20);this.score=0;this.bounds.position=t}update(t,i){}render(t){t.fillStyle=h.foreground,t.fillRect(this.bounds.x,this.bounds.y,this.bounds.width,this.bounds.height)}};var W=class extends O{constructor(i,e){super(i);this.ball=e}moveTo(i,e,s,n=1){let r=i*600.25*A.DIFFICULTY*n;this.bounds.x=Math.clamp(Math.lerp(this.bounds.x,s,r),0,e.width-this.bounds.width)}moveToCenter(i,e){let s=e.width/2-this.bounds.width/2;this.moveTo(i,e,s)}chaseBall(i,e){let s=this.ball.bounds.x,n=Math.abs(e.width-this.bounds.width),r=Math.abs(this.bounds.x-this.ball.bounds.x)/n;this.moveTo(i,e,s,r)}predictBallTrajectory(i,e){let s=this.ball.bounds.y+this.ball.bounds.height,n=(this.bounds.y-s)/this.ball.velocity.y,r=this.ball.bounds.x+this.ball.velocity.x*n;for(let m=0;(r<0||r+this.ball.bounds.width>e.width)&&m<10;m++)r<0&&(w.circle(new a(r+this.ball.bounds.width,s-this.ball.bounds.height/2),this.ball.bounds.height/2,"rgba(255, 0, 0, 0.25)"),r=-r),r+this.ball.bounds.width>e.width&&(w.circle(new a(e.width-this.ball.bounds.width,s-this.ball.bounds.height/2),this.ball.bounds.height/2,"rgba(255, 0, 0, 0.25)"),r=e.width-this.ball.bounds.width-(r-e.width+this.ball.bounds.width));let l=r-this.bounds.width/2;this.moveTo(i,e,l),w.circle(this.bounds.center,5,"red"),w.circle(new a(r,s),5,"green"),w.line(this.ball.bounds.center,new a(r,this.bounds.y),"green")}update(i,e){this.ball.timer>0?this.moveToCenter(i,e):this.ball.bounds.y<e.height/3||this.ball.velocity.y<0?this.chaseBall(i,e):this.predictBallTrajectory(i,e)}};var Y=class{constructor(t,i,e){this.paddle=t;this.ball=i;this.main=e;this.dimTimer=0}get width(){return this.main.canvas.width}get height(){return this.main.canvas.height}invalidate(){this.main.invalidate()}setup(){return c(this,null,function*(){})}update(t){return c(this,null,function*(){this.dimTimer>=1?this.dimTimer=1:this.dimTimer+=t,this.invalidate()})}resize(){this.paddle&&(this.paddle.bounds.x=Math.clamp(this.paddle.bounds.x,0,this.width-100),this.paddle.bounds.y=this.height-20-15),this.ball&&(this.ball.bounds.x=Math.clamp(this.ball.bounds.x,0,this.width-this.ball.bounds.width),this.ball.bounds.y=Math.clamp(this.ball.bounds.y,0,this.height-this.ball.bounds.height)),d.isMouseButtonDown(0)&&this.main.setState(new S(this.main))}render(t){this.main.canvas.clear(),t.save();let i=Math.pow(1-this.dimTimer,4),e=h.isDark?.15:.25;t.globalAlpha=e+i*(1-e),t.filter="blur(5px)",this.paddle.render(t),this.ball.render(t),t.restore(),t.save(),t.globalAlpha=Math.pow(this.dimTimer,2),t.font=`${48}pt ${x}`,t.fillStyle=h.foreground,t.shadowColor=h.containerShadow,t.shadowBlur=10*this.dimTimer,t.shadowOffsetY=2.5,t.fillTextCentered("You won!",this.width/2,this.height/2-48),t.font=`${48/2}pt ${x}`,t.fillStyle=f.alpha(h.foreground,Math.oscilate(Date.now()/1e3,.5,.25,1)),t.fillTextCentered("Click to restart",this.width/2,this.height/2),t.restore()}};var q=class extends O{constructor(i){super(i);this.enableMouse=!0}update(i,e){d.mouseDelta.x!==0?(this.bounds.x+=d.mouse.x-this.bounds.width/2-this.bounds.x,this.bounds.x<0?this.bounds.x=0:this.bounds.x+this.bounds.width>e.width&&(this.bounds.x=e.width-this.bounds.width)):(d.isKeyDown("ArrowLeft")&&(this.bounds.x-=600.25*i,this.bounds.x<0&&(this.bounds.x=0)),d.isKeyDown("ArrowRight")&&(this.bounds.x+=600.25*i,this.bounds.x+this.bounds.width>e.width&&(this.bounds.x=e.width-this.bounds.width)))}};var J=class{constructor(t,i,e,s){this.paddle=t;this.ball=i;this.blocks=e;this.main=s;this.dimTimer=0;this.blockBuffer=new L("block-buffer");this.isBlockBufferDirty=!0}get width(){return this.main.canvas.width}get height(){return this.main.canvas.height}invalidate(){this.main.invalidate()}setup(){return c(this,null,function*(){this.blockBuffer.setSize(this.width,this.height)})}update(t){return c(this,null,function*(){this.dimTimer>=1?this.dimTimer=1:this.dimTimer+=t,this.invalidate()})}resize(){this.paddle&&(this.paddle.bounds.x=Math.clamp(this.paddle.bounds.x,0,this.width-100),this.paddle.bounds.y=this.height-20-15),this.ball&&(this.ball.bounds.x=Math.clamp(this.ball.bounds.x,0,this.width-this.ball.bounds.width),this.ball.bounds.y=Math.clamp(this.ball.bounds.y,0,this.height-this.ball.bounds.height)),d.isMouseButtonDown(0)&&this.main.setState(new S(this.main)),this.blockBuffer.setSize(this.width,this.height),this.isBlockBufferDirty=!0}render(t){this.isBlockBufferDirty&&(this.blockBuffer.clear(),this.blocks.forEach(s=>s.render(this.blockBuffer.context)),this.isBlockBufferDirty=!1),this.main.canvas.clear(),t.save();let i=Math.pow(1-this.dimTimer,4),e=h.isDark?.15:.25;t.globalAlpha=e+i*(1-e),t.filter=`blur(${i.toFixed(1)}px)`,this.blockBuffer.drawTo(0,0,t),this.paddle.render(t),this.ball.render(t),t.restore(),t.save(),t.globalAlpha=Math.pow(this.dimTimer,2),t.font=`${48}pt ${x}`,t.fillStyle=h.foreground,t.shadowColor=h.containerShadow,t.shadowBlur=10*i,t.shadowOffsetY=2.5,t.fillTextCentered("Game over!",this.width/2,this.height/2-48),t.font=`${48/2}pt ${x}`,t.fillStyle=f.alpha(h.foreground,Math.oscilate(Date.now()/1e3,.5,.25,1)),t.fillTextCentered("Click to restart",this.width/2,this.height/2),t.restore()}};var S=class{constructor(t){this.main=t;this.blocks=[]}get width(){return this.main.canvas.width}get height(){return this.main.canvas.height}invalidate(){this.main.invalidate()}generateBlocks(){this.blocks=[];let t=Math.floor((this.main.canvas.width-15*2-60*2)/(60+15)),i=Math.floor((this.main.canvas.height/2-15*2-22.5)/(22.5+15)),e=new a(this.main.canvas.width/2-t*(60+15)/2+15/2,this.main.canvas.height/2-i*(22.5+15));for(let s=0;s<i;s++)for(let n=0;n<t;n++){let r=new a(n*(60+15),s*(22.5+15)).add(e),l=`oklch(from hsl(${s/i*100} 50% 50%) l c h)`;this.blocks.push(new _(n,s,new p(r.x,r.y,60,22.5),l))}}setup(){return c(this,null,function*(){b.debug("StatePlay","Setting up..."),this.ball=new H(this.main.canvas),this.paddle=new q({x:this.main.canvas.width/2-100/2,y:this.main.canvas.height-20-15}),this.generateBlocks()})}update(t){return c(this,null,function*(){let e=t/8;for(let s=0;s<8;s++)this.ball.update(e,this.main.canvas,this.paddle,this.blocks),this.paddle.update(e,this.main.canvas);this.blocks.length===0?this.main.setState(new Y(this.paddle,this.ball,this.main)):this.ball.lives<=0&&this.main.setState(new J(this.paddle,this.ball,this.blocks,this.main)),this.invalidate()})}resize(){b.debug("StatePlay","Resizing..."),this.paddle&&(this.paddle.bounds.x=Math.clamp(this.paddle.bounds.x,0,this.main.canvas.width-100),this.paddle.bounds.y=this.main.canvas.height-20-15),this.ball&&this.ball.reset(this.main.canvas),this.blocks&&this.generateBlocks()}render(t){this.main.canvas.clear(),this.blocks.forEach(i=>i.render(t)),this.paddle.render(t),this.ball.render(t)}};var Z=class{constructor(t){this.main=t;this.blocks=[];this.dimTimer=0;this.blockBuffer=new L("block-buffer");this.isBlockBufferDirty=!0}get width(){return this.main.canvas.width}get height(){return this.main.canvas.height}invalidate(){this.main.invalidate()}generateBlocks(){this.blocks=[];let t=Math.floor((this.width-15*2-60*2)/(60+15)),i=Math.floor((this.height/2-15*2-22.5)/(22.5+15)),e=new a(this.width/2-t*(60+15)/2+15/2,this.height/2-i*(22.5+15));for(let s=0;s<i;s++)for(let n=0;n<t;n++){let r=new a(n*(60+15),s*(22.5+15)).add(e),l=`oklch(from hsl(${s/i*100} 50% 50%) l c h)`;this.blocks.push(new _(n,s,new p(r.x,r.y,60,22.5),l))}}setup(){return c(this,null,function*(){this.ball=new H(this.main.canvas),this.paddle=new W({x:this.width/2-100/2,y:this.height-20-15},this.ball),this.generateBlocks(),this.blockBuffer.setSize(this.width,this.height)})}update(t){return c(this,null,function*(){let e=t/8,s=this.blocks.length;for(let n=0;n<8;n++)this.ball.update(e,this.main.canvas,this.paddle,this.blocks),this.paddle.update(e,this.main.canvas);this.blocks.length!==s&&(this.blocks.length===0?this.resize():this.isBlockBufferDirty=!0),this.dimTimer>=1?this.dimTimer=1:this.dimTimer+=t,this.invalidate(),d.isMouseButtonDown(0)&&this.main.setState(new S(this.main))})}resize(){this.paddle&&(this.paddle.bounds.x=Math.clamp(this.paddle.bounds.x,0,this.width-100),this.paddle.bounds.y=this.height-20-15),this.ball&&this.ball.reset(this.main.canvas),this.blocks&&this.generateBlocks(),this.blockBuffer.setSize(this.width,this.height),this.isBlockBufferDirty=!0}render(t){this.isBlockBufferDirty&&(this.blockBuffer.clear(),this.blocks.forEach(s=>s.render(this.blockBuffer.context)),this.isBlockBufferDirty=!1),this.main.canvas.clear(),t.save();let i=Math.pow(this.dimTimer,4),e=h.isDark?.15:.25;t.globalAlpha=e*i,t.filter=`blur(${i.toFixed(1)}px)`,this.blockBuffer.drawTo(0,0,t),this.paddle.render(t),this.ball.render(t),t.restore(),t.save(),t.globalAlpha=Math.pow(this.dimTimer,2),t.font=`${48}pt ${x}`,t.fillStyle=h.foreground,t.shadowColor=h.containerShadow,t.shadowBlur=10*i,t.shadowOffsetY=2.5,t.fillTextCentered("Breakout",this.width/2,this.height/2-48),t.font=`${48/2}pt ${x}`,t.fillStyle=f.alpha(h.foreground,Math.oscilate(Date.now()/1e3,.5,.25,1)),t.fillTextCentered("Click to start",this.width/2,this.height/2),t.restore()}};var ht=class{constructor(){this.canvas=new L("canvas");this.ctx=this.canvas.context;this.isDirty=!0;this.handleAnimationFrameRequest=-1;this.lastFrameTime=performance.now();this.state=new Z(this);this.globalTimer=0;b.info("Main","Starting up..."),this.attachHooks()}attachHooks(){b.info("Main","Attaching hooks..."),window.addLoadEventListener(this.onLoad.bind(this)),window.addVisibilityChangeEventListener(this.onVisibilityChange.bind(this)),window.addEventListener("resize",this.onResize.bind(this)),d.setup(this)}onLoad(){return c(this,null,function*(){b.debug("Main","Window loaded"),this.canvas.attachToElement(document.body),this.onResize(),yield h.setup(),yield B.setup(),yield N.setup(),yield this.state.setup(),this.requestNextFrame()})}onVisibilityChange(t){b.info("Main",`Window visibility changed to ${t?"visible":"hidden"}`),t?(this.invalidate(),this.requestNextFrame()):this.handleAnimationFrameRequest!=-1&&cancelAnimationFrame(this.handleAnimationFrameRequest)}onResize(){b.debug("Main","Window resized");let t=16/10,i=1200,e=i/t,s=window.innerWidth-15*4,n=window.innerHeight-15*4;n>e&&(n=e),s>i&&(s=i),s/n>t?s=n*t:n=s/t,this.canvas.setSize(s,n),this.state.resize()}setState(t){this.state=t,this.state.setup(),this.state.resize(),this.invalidate()}invalidate(){this.isDirty=!0}requestNextFrame(){this.handleAnimationFrameRequest=requestAnimationFrame(this.loop.bind(this))}loop(t){return c(this,null,function*(){let i=(t-this.lastFrameTime)/1e3;this.lastFrameTime=t,I.reset(),yield this.state.update(i),d.update(),I.apply(),this.isDirty&&(this.state.render(this.ctx),this.isDirty=!1),w.render(this.ctx),w.clear(),this.requestNextFrame()})}};window._instance=new ht;})();
