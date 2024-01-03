(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $s="156",pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gu=0,Do=1,Hu=2,Pc=1,Vu=2,En=3,Pn=0,It=1,Tt=2,wn=0,dn=1,Fs=2,Io=3,Fo=4,Wu=5,Bi=100,Xu=101,Yu=102,No=103,Oo=104,ju=200,qu=201,Zu=202,Ku=203,Lc=204,Uc=205,Ju=206,$u=207,Qu=208,eh=209,th=210,nh=0,ih=1,rh=2,Ns=3,ah=4,sh=5,oh=6,lh=7,Dc=0,ch=1,uh=2,Hn=0,hh=1,fh=2,dh=3,ph=4,mh=5,Ic=300,Vi=301,Wi=302,Os=303,Bs=304,Ua=306,ks=1e3,sn=1001,zs=1002,Et=1003,Bo=1004,$a=1005,kt=1006,gh=1007,Ar=1008,Vn=1009,vh=1010,_h=1011,Qs=1012,Fc=1013,zn=1014,Gn=1015,Cn=1016,Nc=1017,Oc=1018,ei=1020,xh=1021,on=1023,yh=1024,Sh=1025,ti=1026,Xi=1027,Mh=1028,Bc=1029,bh=1030,kc=1031,zc=1033,Qa=33776,es=33777,ts=33778,ns=33779,ko=35840,zo=35841,Go=35842,Ho=35843,Eh=36196,Vo=37492,Wo=37496,Xo=37808,Yo=37809,jo=37810,qo=37811,Zo=37812,Ko=37813,Jo=37814,$o=37815,Qo=37816,el=37817,tl=37818,nl=37819,il=37820,rl=37821,is=36492,al=36494,sl=36495,Th=36283,ol=36284,ll=36285,cl=36286,Gc=3e3,ni=3001,Ah=3200,Hc=3201,eo=0,wh=1,ii="",nt="srgb",mn="srgb-linear",Da="display-p3",rs=7680,Ch=519,Rh=512,Ph=513,Lh=514,Uh=515,Dh=516,Ih=517,Fh=518,Nh=519,Gs=35044,Yn=35048,ul="300 es",Hs=1035,An=2e3,wa=2001;class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let i=0,o=r.length;i<o;i++)r[i].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hl=1234567;const Sr=Math.PI/180,wr=180/Math.PI;function Rn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[a&255]+wt[a>>8&255]+wt[a>>16&255]+wt[a>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Rt(a,e,t){return Math.max(e,Math.min(t,a))}function to(a,e){return(a%e+e)%e}function Oh(a,e,t,n,r){return n+(a-e)*(r-n)/(t-e)}function Bh(a,e,t){return a!==e?(t-a)/(e-a):0}function Mr(a,e,t){return(1-t)*a+t*e}function kh(a,e,t,n){return Mr(a,e,1-Math.exp(-t*n))}function zh(a,e=1){return e-Math.abs(to(a,e*2)-e)}function Gh(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Hh(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Vh(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Wh(a,e){return a+Math.random()*(e-a)}function Xh(a){return a*(.5-Math.random())}function Yh(a){a!==void 0&&(hl=a);let e=hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jh(a){return a*Sr}function qh(a){return a*wr}function Vs(a){return(a&a-1)===0&&a!==0}function Zh(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Ca(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Kh(a,e,t,n,r){const i=Math.cos,o=Math.sin,s=i(t/2),l=o(t/2),c=i((e+n)/2),u=o((e+n)/2),f=i((e-n)/2),h=o((e-n)/2),d=i((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":a.set(s*u,l*f,l*h,s*c);break;case"YZY":a.set(l*h,s*u,l*f,s*c);break;case"ZXZ":a.set(l*f,l*h,s*u,s*c);break;case"XZX":a.set(s*u,l*g,l*d,s*c);break;case"YXY":a.set(l*d,s*u,l*g,s*c);break;case"ZYZ":a.set(l*g,l*d,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function $e(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Jh={DEG2RAD:Sr,RAD2DEG:wr,generateUUID:Rn,clamp:Rt,euclideanModulo:to,mapLinear:Oh,inverseLerp:Bh,lerp:Mr,damp:kh,pingpong:zh,smoothstep:Gh,smootherstep:Hh,randInt:Vh,randFloat:Wh,randFloatSpread:Xh,seededRandom:Yh,degToRad:jh,radToDeg:qh,isPowerOfTwo:Vs,ceilPowerOfTwo:Zh,floorPowerOfTwo:Ca,setQuaternionFromProperEuler:Kh,normalize:$e,denormalize:fn};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,o=this.y-e.y;return this.x=i*n-o*r+e.x,this.y=i*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,r,i,o,s,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,o,s,l,c)}set(e,t,n,r,i,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=i,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,i=this.elements,o=n[0],s=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],v=r[0],m=r[3],p=r[6],S=r[1],_=r[4],x=r[7],b=r[2],C=r[5],E=r[8];return i[0]=o*v+s*S+l*b,i[3]=o*m+s*_+l*C,i[6]=o*p+s*x+l*E,i[1]=c*v+u*S+f*b,i[4]=c*m+u*_+f*C,i[7]=c*p+u*x+f*E,i[2]=h*v+d*S+g*b,i[5]=h*m+d*_+g*C,i[8]=h*p+d*x+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-n*i*u+n*s*l+r*i*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*o-s*c,h=s*l-u*i,d=c*i-o*l,g=t*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*n)*v,e[2]=(s*n-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*i-s*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*i)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,o,s){const l=Math.cos(i),c=Math.sin(i);return this.set(n*l,n*c,-n*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(as.makeScale(e,t)),this}rotate(e){return this.premultiply(as.makeRotation(-e)),this}translate(e,t){return this.premultiply(as.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const as=new Ze;function Vc(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Cr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function $h(){const a=Cr("canvas");return a.style.display="block",a}const fl={};function br(a){a in fl||(fl[a]=!0,console.warn(a))}function Hi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ss(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Qh=new Ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ef=new Ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function tf(a){return a.convertSRGBToLinear().applyMatrix3(ef)}function nf(a){return a.applyMatrix3(Qh).convertLinearToSRGB()}const rf={[mn]:a=>a,[nt]:a=>a.convertSRGBToLinear(),[Da]:tf},af={[mn]:a=>a,[nt]:a=>a.convertLinearToSRGB(),[Da]:nf},tn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return mn},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=rf[e],r=af[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let gi;class Wc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gi===void 0&&(gi=Cr("canvas")),gi.width=e.width,gi.height=e.height;const n=gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let o=0;o<i.length;o++)i[o]=Hi(i[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hi(t[n]/255)*255):t[n]=Hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sf=0;class Xc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Rn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let i;if(Array.isArray(r)){i=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?i.push(os(r[o].image)):i.push(os(r[o]))}else i=os(r);n.url=i}return t||(e.images[this.uuid]=n),n}}function os(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Wc.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let of=0;class Pt extends si{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=sn,r=sn,i=kt,o=Ar,s=on,l=Vn,c=Pt.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Rn(),this.name="",this.source=new Xc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=i,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ni?nt:ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nt?ni:Gc}set encoding(e){br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ni?nt:ii}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Ic;Pt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,i=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*i,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*i,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*i,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(d+1)/2,b=(p+1)/2,C=(u+h)/4,E=(f+v)/4,N=(g+m)/4;return _>x&&_>b?_<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(_),r=C/n,i=E/n):x>b?x<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(x),n=C/r,i=N/r):b<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(b),n=E/i,r=N/i),this.set(n,r,i,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-v)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lf extends si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(br("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ni?nt:ii),this.texture=new Pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ln extends lf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yc extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cf extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,o,s){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=i[o+0],d=i[o+1],g=i[o+2],v=i[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==g){let m=1-s;const p=l*h+c*d+u*g+f*v,S=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const b=Math.sqrt(_),C=Math.atan2(b,p*S);m=Math.sin(m*C)/b,s=Math.sin(s*C)/b}const x=s*S;if(l=l*m+h*x,c=c*m+d*x,u=u*m+g*x,f=f*m+v*x,m===1-s){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,i,o){const s=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=i[o],h=i[o+1],d=i[o+2],g=i[o+3];return e[t]=s*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-s*d,e[t+2]=c*g+u*d+s*h-l*f,e[t+3]=u*g-s*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,i=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(r/2),f=s(i/2),h=l(n/2),d=l(r/2),g=l(i/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],i=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+s+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(i-c)*d,this._z=(o-r)*d}else if(n>s&&n>f){const d=2*Math.sqrt(1+n-s-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(i+c)/d}else if(s>f){const d=2*Math.sqrt(1+s-n-f);this._w=(i-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-s);this._w=(o-r)/d,this._x=(i+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,i=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*s+r*c-i*l,this._y=r*u+o*l+i*s-n*c,this._z=i*u+o*c+n*l-r*s,this._w=o*u-n*s-r*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,i=this._z,o=this._w;let s=o*e._w+n*e._x+r*e._y+i*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=r,this._z=i,this;const l=1-s*s;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=i*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,i=e.elements,o=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*o,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*o,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,i=e.x,o=e.y,s=e.z,l=e.w,c=l*t+o*r-s*n,u=l*n+s*t-i*r,f=l*r+i*n-o*t,h=-i*t-o*n-s*r;return this.x=c*l+h*-i+u*-s-f*-o,this.y=u*l+h*-o+f*-i-c*-s,this.z=f*l+h*-s+c*-o-u*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,i=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-i*s,this.y=i*o-n*l,this.z=n*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ls.copy(this).projectOnVector(e),this.sub(ls)}reflect(e){return this.sub(ls.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ls=new Y,dl=new ai;class qi{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),vi.copy(e.boundingBox),vi.applyMatrix4(e.matrixWorld),this.union(vi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const i=r.attributes.position;for(let o=0,s=i.count;o<s;o++)xn.fromBufferAttribute(i,o).applyMatrix4(e.matrixWorld),this.expandByPoint(xn)}else r.boundingBox===null&&r.computeBoundingBox(),vi.copy(r.boundingBox),vi.applyMatrix4(e.matrixWorld),this.union(vi)}const n=e.children;for(let r=0,i=n.length;r<i;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),jr.subVectors(this.max,hr),_i.subVectors(e.a,hr),xi.subVectors(e.b,hr),yi.subVectors(e.c,hr),Nn.subVectors(xi,_i),On.subVectors(yi,xi),jn.subVectors(_i,yi);let t=[0,-Nn.z,Nn.y,0,-On.z,On.y,0,-jn.z,jn.y,Nn.z,0,-Nn.x,On.z,0,-On.x,jn.z,0,-jn.x,-Nn.y,Nn.x,0,-On.y,On.x,0,-jn.y,jn.x,0];return!cs(t,_i,xi,yi,jr)||(t=[1,0,0,0,1,0,0,0,1],!cs(t,_i,xi,yi,jr))?!1:(qr.crossVectors(Nn,On),t=[qr.x,qr.y,qr.z],cs(t,_i,xi,yi,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],xn=new Y,vi=new qi,_i=new Y,xi=new Y,yi=new Y,Nn=new Y,On=new Y,jn=new Y,hr=new Y,jr=new Y,qr=new Y,qn=new Y;function cs(a,e,t,n,r){for(let i=0,o=a.length-3;i<=o;i+=3){qn.fromArray(a,i);const s=r.x*Math.abs(qn.x)+r.y*Math.abs(qn.y)+r.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),u=n.dot(qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const uf=new qi,fr=new Y,us=new Y;class Zi{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uf.setFromPoints(e).getCenter(n);let r=0;for(let i=0,o=e.length;i<o;i++)r=Math.max(r,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(fr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(us.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(us)),this.expandByPoint(fr.copy(e.center).sub(us))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new Y,hs=new Y,Zr=new Y,Bn=new Y,fs=new Y,Kr=new Y,ds=new Y;class Ur{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){hs.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(hs);const i=e.distanceTo(t)*.5,o=-this.direction.dot(Zr),s=Bn.dot(this.direction),l=-Bn.dot(Zr),c=Bn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-s,h=o*s-l,g=i*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*s)+h*(o*f+h+2*l)+c}else h=i,f=Math.max(0,-(o*h+s)),d=-f*f+h*(h+2*l)+c;else h=-i,f=Math.max(0,-(o*h+s)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*i+s)),h=f>0?-i:Math.min(Math.max(-i,-l),i),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-i,-l),i),d=h*(h+2*l)+c):(f=Math.max(0,-(o*i+s)),h=f>0?i:Math.min(Math.max(-i,-l),i),d=-f*f+h*(h+2*l)+c);else h=o>0?-i:i,f=Math.max(0,-(o*h+s)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(hs).addScaledVector(Zr,h),d}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const n=yn.dot(this.direction),r=yn.dot(yn)-n*n,i=e.radius*e.radius;if(r>i)return null;const o=Math.sqrt(i-r),s=n-o,l=n+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(i=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(i=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||i>r||((i>n||isNaN(n))&&(n=i),(o<r||isNaN(r))&&(r=o),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||s>r)||((s>n||n!==n)&&(n=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,r,i){fs.subVectors(t,e),Kr.subVectors(n,e),ds.crossVectors(fs,Kr);let o=this.direction.dot(ds),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Bn.subVectors(this.origin,e);const l=s*this.direction.dot(Kr.crossVectors(Bn,Kr));if(l<0)return null;const c=s*this.direction.dot(fs.cross(Bn));if(c<0||l+c>o)return null;const u=-s*Bn.dot(ds);return u<0?null:this.at(u/o,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,r,i,o,s,l,c,u,f,h,d,g,v,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,o,s,l,c,u,f,h,d,g,v,m)}set(e,t,n,r,i,o,s,l,c,u,f,h,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=i,p[5]=o,p[9]=s,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),i=1/Si.setFromMatrixColumn(e,1).length(),o=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,i=e.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(i),f=Math.sin(i);if(e.order==="XYZ"){const h=o*u,d=o*f,g=s*u,v=s*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-s*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h+v*s,t[4]=g*s-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-s,t[2]=d*s-g,t[6]=v+h*s,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h-v*s,t[4]=-o*f,t[8]=g+d*s,t[1]=d+g*s,t[5]=o*u,t[9]=v-h*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=s*u,v=s*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=s*l,v=s*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=s*l,v=s*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=s*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hf,e,ff)}lookAt(e,t,n){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),kn.crossVectors(n,Ht),kn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),kn.crossVectors(n,Ht)),kn.normalize(),Jr.crossVectors(Ht,kn),r[0]=kn.x,r[4]=Jr.x,r[8]=Ht.x,r[1]=kn.y,r[5]=Jr.y,r[9]=Ht.y,r[2]=kn.z,r[6]=Jr.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,i=this.elements,o=n[0],s=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],S=n[3],_=n[7],x=n[11],b=n[15],C=r[0],E=r[4],N=r[8],y=r[12],T=r[1],K=r[5],L=r[9],U=r[13],D=r[2],k=r[6],W=r[10],j=r[14],q=r[3],X=r[7],B=r[11],w=r[15];return i[0]=o*C+s*T+l*D+c*q,i[4]=o*E+s*K+l*k+c*X,i[8]=o*N+s*L+l*W+c*B,i[12]=o*y+s*U+l*j+c*w,i[1]=u*C+f*T+h*D+d*q,i[5]=u*E+f*K+h*k+d*X,i[9]=u*N+f*L+h*W+d*B,i[13]=u*y+f*U+h*j+d*w,i[2]=g*C+v*T+m*D+p*q,i[6]=g*E+v*K+m*k+p*X,i[10]=g*N+v*L+m*W+p*B,i[14]=g*y+v*U+m*j+p*w,i[3]=S*C+_*T+x*D+b*q,i[7]=S*E+_*K+x*k+b*X,i[11]=S*N+_*L+x*W+b*B,i[15]=S*y+_*U+x*j+b*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+i*l*f-r*c*f-i*s*h+n*c*h+r*s*d-n*l*d)+v*(+t*l*d-t*c*h+i*o*h-r*o*d+r*c*u-i*l*u)+m*(+t*c*f-t*s*d-i*o*f+n*o*d+i*s*u-n*c*u)+p*(-r*s*u-t*l*f+t*s*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],S=f*m*c-v*h*c+v*l*d-s*m*d-f*l*p+s*h*p,_=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,x=u*v*c-g*f*c+g*s*d-o*v*d-u*s*p+o*f*p,b=g*f*l-u*v*l-g*s*h+o*v*h+u*s*m-o*f*m,C=t*S+n*_+r*x+i*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return e[0]=S*E,e[1]=(v*h*i-f*m*i-v*r*d+n*m*d+f*r*p-n*h*p)*E,e[2]=(s*m*i-v*l*i+v*r*c-n*m*c-s*r*p+n*l*p)*E,e[3]=(f*l*i-s*h*i-f*r*c+n*h*c+s*r*d-n*l*d)*E,e[4]=_*E,e[5]=(u*m*i-g*h*i+g*r*d-t*m*d-u*r*p+t*h*p)*E,e[6]=(g*l*i-o*m*i-g*r*c+t*m*c+o*r*p-t*l*p)*E,e[7]=(o*h*i-u*l*i+u*r*c-t*h*c-o*r*d+t*l*d)*E,e[8]=x*E,e[9]=(g*f*i-u*v*i-g*n*d+t*v*d+u*n*p-t*f*p)*E,e[10]=(o*v*i-g*s*i+g*n*c-t*v*c-o*n*p+t*s*p)*E,e[11]=(u*s*i-o*f*i-u*n*c+t*f*c+o*n*d-t*s*d)*E,e[12]=b*E,e[13]=(u*v*r-g*f*r+g*n*h-t*v*h-u*n*m+t*f*m)*E,e[14]=(g*s*r-o*v*r-g*n*l+t*v*l+o*n*m-t*s*m)*E,e[15]=(o*f*r-u*s*r+u*n*l-t*f*l-o*n*h+t*s*h)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),i=1-n,o=e.x,s=e.y,l=e.z,c=i*o,u=i*s;return this.set(c*o+n,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+n,u*l-r*o,0,c*l-r*s,u*l+r*o,i*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,o){return this.set(1,n,i,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,i=t._x,o=t._y,s=t._z,l=t._w,c=i+i,u=o+o,f=s+s,h=i*c,d=i*u,g=i*f,v=o*u,m=o*f,p=s*f,S=l*c,_=l*u,x=l*f,b=n.x,C=n.y,E=n.z;return r[0]=(1-(v+p))*b,r[1]=(d+x)*b,r[2]=(g-_)*b,r[3]=0,r[4]=(d-x)*C,r[5]=(1-(h+p))*C,r[6]=(m+S)*C,r[7]=0,r[8]=(g+_)*E,r[9]=(m-S)*E,r[10]=(1-(h+v))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let i=Si.set(r[0],r[1],r[2]).length();const o=Si.set(r[4],r[5],r[6]).length(),s=Si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const c=1/i,u=1/o,f=1/s;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,t.setFromRotationMatrix(nn),n.x=i,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,o,s=An){const l=this.elements,c=2*i/(t-e),u=2*i/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let d,g;if(s===An)d=-(o+i)/(o-i),g=-2*o*i/(o-i);else if(s===wa)d=-o/(o-i),g=-o*i/(o-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,i,o,s=An){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-i),h=(t+e)*c,d=(n+r)*u;let g,v;if(s===An)g=(o+i)*f,v=-2*f;else if(s===wa)g=i*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Si=new Y,nn=new at,hf=new Y(0,0,0),ff=new Y(1,1,1),kn=new Y,Jr=new Y,Ht=new Y,pl=new at,ml=new ai;class Ia{constructor(e=0,t=0,n=0,r=Ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,i=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,i)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,i),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,i)):(this._x=0,this._y=Math.atan2(s,d));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,i)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ml.setFromEuler(this),this.setFromQuaternion(ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ia.DEFAULT_ORDER="XYZ";class no{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let df=0;const gl=new Y,Mi=new ai,Sn=new at,$r=new Y,dr=new Y,pf=new Y,mf=new ai,vl=new Y(1,0,0),_l=new Y(0,1,0),xl=new Y(0,0,1),gf={type:"added"},vf={type:"removed"};class mt extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new Y,t=new Ia,n=new ai,r=new Y(1,1,1);function i(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Ze}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(vl,e)}rotateY(e){return this.rotateOnAxis(_l,e)}rotateZ(e){return this.rotateOnAxis(xl,e)}translateOnAxis(e,t){return gl.copy(e).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vl,e)}translateY(e){return this.translateOnAxis(_l,e)}translateZ(e){return this.translateOnAxis(xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$r.copy(e):$r.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(dr,$r,this.up):Sn.lookAt($r,dr,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),Mi.setFromRotationMatrix(Sn),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,i=this.children.length;r<i;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,mf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const i=t[n];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let i=0,o=r.length;i<o;i++){const s=r[i];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function i(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];i(e.shapes,f)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(i(e.materials,this.material[l]));r.material=s}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(i(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}mt.DEFAULT_UP=new Y(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new Y,Mn=new Y,ps=new Y,bn=new Y,bi=new Y,Ei=new Y,yl=new Y,ms=new Y,gs=new Y,vs=new Y;let Qr=!1;class Kt{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),rn.subVectors(e,t),r.cross(rn);const i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){rn.subVectors(r,t),Mn.subVectors(n,t),ps.subVectors(e,t);const o=rn.dot(rn),s=rn.dot(Mn),l=rn.dot(ps),c=Mn.dot(Mn),u=Mn.dot(ps),f=o*c-s*s;if(f===0)return i.set(-2,-1,-1);const h=1/f,d=(c*l-s*u)*h,g=(o*u-s*l)*h;return i.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,n,r,i,o,s,l){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),this.getInterpolation(e,t,n,r,i,o,s,l)}static getInterpolation(e,t,n,r,i,o,s,l){return this.getBarycoord(e,t,n,r,bn),l.setScalar(0),l.addScaledVector(i,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(s,bn.z),l}static isFrontFacing(e,t,n,r){return rn.subVectors(n,t),Mn.subVectors(e,t),rn.cross(Mn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),rn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,i){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),Kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,i)}getInterpolation(e,t,n,r,i){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,i)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,i=this.c;let o,s;bi.subVectors(r,n),Ei.subVectors(i,n),ms.subVectors(e,n);const l=bi.dot(ms),c=Ei.dot(ms);if(l<=0&&c<=0)return t.copy(n);gs.subVectors(e,r);const u=bi.dot(gs),f=Ei.dot(gs);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(bi,o);vs.subVectors(e,i);const d=bi.dot(vs),g=Ei.dot(vs);if(g>=0&&d<=g)return t.copy(i);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(n).addScaledVector(Ei,s);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return yl.subVectors(i,r),s=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(yl,s);const p=1/(m+v+h);return o=v*p,s=h*p,t.copy(n).addScaledVector(bi,o).addScaledVector(Ei,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let _f=0;class Ln extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=dn,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Uc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dn&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(i){const o=[];for(const s in i){const l=i[s];delete l.metadata,o.push(l)}return o}if(t){const i=r(e.textures),o=r(e.images);i.length>0&&(n.textures=i),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let i=0;i!==r;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},ea={h:0,s:0,l:0};function _s(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=tn.workingColorSpace){return this.r=e,this.g=t,this.b=n,tn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=tn.workingColorSpace){if(e=to(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,o=2*n-i;this.r=_s(o,i,e+1/3),this.g=_s(o,i,e),this.b=_s(o,i,e-1/3)}return tn.toWorkingColorSpace(this,r),this}setStyle(e,t=nt){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=r[1],o=i.length;if(o===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){const n=jc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return tn.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Rt(Ct.r*255,0,255))*65536+Math.round(Rt(Ct.g*255,0,255))*256+Math.round(Rt(Ct.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tn.workingColorSpace){tn.fromWorkingColorSpace(Ct.copy(this),t);const n=Ct.r,r=Ct.g,i=Ct.b,o=Math.max(n,r,i),s=Math.min(n,r,i);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=u<=.5?f/(o+s):f/(2-o-s),o){case n:l=(r-i)/f+(r<i?6:0);break;case r:l=(i-n)/f+2;break;case i:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tn.workingColorSpace){return tn.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=nt){tn.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,r=Ct.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(an),an.h+=e,an.s+=t,an.l+=n,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(ea);const n=Mr(an.h,ea.h,t),r=Mr(an.s,ea.s,t),i=Mr(an.l,ea.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Xe;Xe.NAMES=jc;class Fa extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new Y,ta=new De;class ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gs,this.updateRange={offset:0,count:-1},this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),r=$e(r,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class qc extends ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zc extends ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xf=0;const Zt=new at,xs=new mt,Ti=new Y,Vt=new qi,pr=new qi,xt=new Y;class gt extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vc(e)?Zc:qc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new Ze().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return xs.lookAt(e),xs.updateMatrix(),this.applyMatrix4(xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const i=e[n];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const i=t[n];Vt.setFromBufferAttribute(i),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const s=t[i];pr.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(Vt.min,pr.min),Vt.expandByPoint(xt),xt.addVectors(Vt.max,pr.max),Vt.expandByPoint(xt)):(Vt.expandByPoint(pr.min),Vt.expandByPoint(pr.max))}Vt.getCenter(n);let r=0;for(let i=0,o=e.count;i<o;i++)xt.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(xt));if(t)for(let i=0,o=t.length;i<o;i++){const s=t[i],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)xt.fromBufferAttribute(s,c),l&&(Ti.fromBufferAttribute(e,c),xt.add(Ti)),r=Math.max(r,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,i=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<s;T++)c[T]=new Y,u[T]=new Y;const f=new Y,h=new Y,d=new Y,g=new De,v=new De,m=new De,p=new Y,S=new Y;function _(T,K,L){f.fromArray(r,T*3),h.fromArray(r,K*3),d.fromArray(r,L*3),g.fromArray(o,T*2),v.fromArray(o,K*2),m.fromArray(o,L*2),h.sub(f),d.sub(f),v.sub(g),m.sub(g);const U=1/(v.x*m.y-m.x*v.y);isFinite(U)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-v.y).multiplyScalar(U),S.copy(d).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(U),c[T].add(p),c[K].add(p),c[L].add(p),u[T].add(S),u[K].add(S),u[L].add(S))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let T=0,K=x.length;T<K;++T){const L=x[T],U=L.start,D=L.count;for(let k=U,W=U+D;k<W;k+=3)_(n[k+0],n[k+1],n[k+2])}const b=new Y,C=new Y,E=new Y,N=new Y;function y(T){E.fromArray(i,T*3),N.copy(E);const K=c[T];b.copy(K),b.sub(E.multiplyScalar(E.dot(K))).normalize(),C.crossVectors(N,K);const U=C.dot(u[T])<0?-1:1;l[T*4]=b.x,l[T*4+1]=b.y,l[T*4+2]=b.z,l[T*4+3]=U}for(let T=0,K=x.length;T<K;++T){const L=x[T],U=L.start,D=L.count;for(let k=U,W=U+D;k<W;k+=3)y(n[k+0]),y(n[k+1]),y(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new Y,i=new Y,o=new Y,s=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),i.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,i),f.subVectors(r,i),u.cross(f),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),i.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,i),f.subVectors(r,i),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){s.isInterleavedBufferAttribute?d=l[v]*s.data.stride+s.offset:d=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new ft(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,n=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,n);t.setAttribute(s,c)}const i=this.morphAttributes;for(const s in i){const l=[],c=i[s];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const i=e.morphAttributes;for(const c in i){const u=[],f=i[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new at,Zn=new Ur,na=new Zi,Ml=new Y,Ai=new Y,wi=new Y,Ci=new Y,ys=new Y,ia=new Y,ra=new De,aa=new De,sa=new De,bl=new Y,El=new Y,Tl=new Y,oa=new Y,la=new Y;class Dt extends mt{constructor(e=new gt,t=new Fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=r.length;i<o;i++){const s=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(i&&s){ia.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const u=s[l],f=i[l];u!==0&&(ys.fromBufferAttribute(f,e),o?ia.addScaledVector(ys,u):ia.addScaledVector(ys.sub(t),u))}t.add(ia)}return t}raycast(e,t){const n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(i),Zn.copy(e.ray).recast(e.near),!(na.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(na,Ml)===null||Zn.origin.distanceToSquared(Ml)>(e.far-e.near)**2))&&(Sl.copy(i).invert(),Zn.copy(e.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zn)))}_computeIntersections(e,t,n){let r;const i=this.geometry,o=this.material,s=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv1,f=i.attributes.normal,h=i.groups,d=i.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),_=Math.min(s.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,b=_;x<b;x+=3){const C=s.getX(x),E=s.getX(x+1),N=s.getX(x+2);r=ca(this,p,e,n,c,u,f,C,E,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(s.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=s.getX(m),_=s.getX(m+1),x=s.getX(m+2);r=ca(this,o,e,n,c,u,f,S,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,b=_;x<b;x+=3){const C=x,E=x+1,N=x+2;r=ca(this,p,e,n,c,u,f,C,E,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=m,_=m+1,x=m+2;r=ca(this,o,e,n,c,u,f,S,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function yf(a,e,t,n,r,i,o,s){let l;if(e.side===It?l=n.intersectTriangle(o,i,r,!0,s):l=n.intersectTriangle(r,i,o,e.side===Pn,s),l===null)return null;la.copy(s),la.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(la);return c<t.near||c>t.far?null:{distance:c,point:la.clone(),object:a}}function ca(a,e,t,n,r,i,o,s,l,c){a.getVertexPosition(s,Ai),a.getVertexPosition(l,wi),a.getVertexPosition(c,Ci);const u=yf(a,e,t,n,Ai,wi,Ci,oa);if(u){r&&(ra.fromBufferAttribute(r,s),aa.fromBufferAttribute(r,l),sa.fromBufferAttribute(r,c),u.uv=Kt.getInterpolation(oa,Ai,wi,Ci,ra,aa,sa,new De)),i&&(ra.fromBufferAttribute(i,s),aa.fromBufferAttribute(i,l),sa.fromBufferAttribute(i,c),u.uv1=Kt.getInterpolation(oa,Ai,wi,Ci,ra,aa,sa,new De),u.uv2=u.uv1),o&&(bl.fromBufferAttribute(o,s),El.fromBufferAttribute(o,l),Tl.fromBufferAttribute(o,c),u.normal=Kt.getInterpolation(oa,Ai,wi,Ci,bl,El,Tl,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new Y,materialIndex:0};Kt.getNormal(Ai,wi,Ci,f.normal),u.face=f}return u}class Dr extends gt{constructor(e=1,t=1,n=1,r=1,i=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:o};const s=this;r=Math.floor(r),i=Math.floor(i),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,i,0),g("z","y","x",1,-1,n,t,-e,o,i,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,i,4),g("x","y","z",-1,-1,e,t,-n,r,i,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(f,2));function g(v,m,p,S,_,x,b,C,E,N,y){const T=x/E,K=b/N,L=x/2,U=b/2,D=C/2,k=E+1,W=N+1;let j=0,q=0;const X=new Y;for(let B=0;B<W;B++){const w=B*K-U;for(let R=0;R<k;R++){const G=R*T-L;X[v]=G*S,X[m]=w*_,X[p]=D,c.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=C>0?1:-1,u.push(X.x,X.y,X.z),f.push(R/E),f.push(1-B/N),j+=1}}for(let B=0;B<N;B++)for(let w=0;w<E;w++){const R=h+w+k*B,G=h+w+k*(B+1),V=h+(w+1)+k*(B+1),H=h+(w+1)+k*B;l.push(R,G,H),l.push(G,V,H),q+=6}s.addGroup(d,q,y),d+=q,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const r=a[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ut(a){const e={};for(let t=0;t<a.length;t++){const n=Yi(a[t]);for(const r in n)e[r]=n[r]}return e}function Sf(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Kc(a){return a.getRenderTarget()===null?a.outputColorSpace:mn}const Rr={clone:Yi,merge:Ut};var Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pt extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=Sf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class io extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends io{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;i+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const s=this.filmOffset;s!==0&&(i+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ri=-90,Pi=1;class Ef extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Wt(Ri,Pi,e,t);r.layers=this.layers,this.add(r);const i=new Wt(Ri,Pi,e,t);i.layers=this.layers,this.add(i);const o=new Wt(Ri,Pi,e,t);o.layers=this.layers,this.add(o);const s=new Wt(Ri,Pi,e,t);s.layers=this.layers,this.add(s);const l=new Wt(Ri,Pi,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Ri,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,i,o,s,l]=t;for(const c of t)this.remove(c);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,i,o,s,l,c]=this.children,u=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,i),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Jc extends Pt{constructor(e,t,n,r,i,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Vi,super(e,t,n,r,i,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tf extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(br("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ni?nt:ii),this.texture=new Jc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Dr(5,5,5),i=new pt({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:wn});i.uniforms.tEquirect.value=t;const o=new Dt(r,i),s=t.minFilter;return t.minFilter===Ar&&(t.minFilter=kt),new Ef(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const i=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(i)}}const Ss=new Y,Af=new Y,wf=new Ze;class Tn{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ss.subVectors(n,t).cross(Af.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ss),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wf.getNormalMatrix(e),r=this.coplanarPoint(Ss).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new Zi,ua=new Y;class ro{constructor(e=new Tn,t=new Tn,n=new Tn,r=new Tn,i=new Tn,o=new Tn){this.planes=[e,t,n,r,i,o]}set(e,t,n,r,i,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(i),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An){const n=this.planes,r=e.elements,i=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],v=r[10],m=r[11],p=r[12],S=r[13],_=r[14],x=r[15];if(n[0].setComponents(l-i,h-c,m-d,x-p).normalize(),n[1].setComponents(l+i,h+c,m+d,x+p).normalize(),n[2].setComponents(l+o,h+u,m+g,x+S).normalize(),n[3].setComponents(l-o,h-u,m-g,x-S).normalize(),n[4].setComponents(l-s,h-f,m-v,x-_).normalize(),t===An)n[5].setComponents(l+s,h+f,m+v,x+_).normalize();else if(t===wa)n[5].setComponents(s,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ua.x=r.normal.x>0?e.max.x:e.min.x,ua.y=r.normal.y>0?e.max.y:e.min.y,ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $c(){let a=null,e=!1,t=null,n=null;function r(i,o){t(i,o),n=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function Cf(a,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=a.createBuffer();a.bindBuffer(u,d),a.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=a.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=a.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=a.SHORT;else if(f instanceof Uint32Array)g=a.UNSIGNED_INT;else if(f instanceof Int32Array)g=a.INT;else if(f instanceof Int8Array)g=a.BYTE;else if(f instanceof Uint8Array)g=a.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function i(c,u,f){const h=u.array,d=u.updateRange;a.bindBuffer(f,c),d.count===-1?a.bufferSubData(f,0,h):(t?a.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):a.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,u)):f.version<c.version&&(i(f.buffer,c,u),f.version=c.version)}return{get:o,remove:s,update:l}}class Ki extends gt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const i=e/2,o=t/2,s=Math.floor(n),l=Math.floor(r),c=s+1,u=l+1,f=e/s,h=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let _=0;_<c;_++){const x=_*f-i;g.push(x,-S,0),v.push(0,0,1),m.push(_/s),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<s;S++){const _=S+c*p,x=S+c*(p+1),b=S+1+c*(p+1),C=S+1+c*p;d.push(_,x,C),d.push(x,b,C)}this.setIndex(d),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(v,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,If=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$f=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,id="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,od=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,md=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Md=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Td=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Ad=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ld=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Id=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Od=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ip=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zp=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Rf,alphahash_pars_fragment:Pf,alphamap_fragment:Lf,alphamap_pars_fragment:Uf,alphatest_fragment:Df,alphatest_pars_fragment:If,aomap_fragment:Ff,aomap_pars_fragment:Nf,begin_vertex:Of,beginnormal_vertex:Bf,bsdfs:kf,iridescence_fragment:zf,bumpmap_pars_fragment:Gf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:Yf,color_pars_fragment:jf,color_pars_vertex:qf,color_vertex:Zf,common:Kf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:$f,displacementmap_pars_vertex:Qf,displacementmap_vertex:ed,emissivemap_fragment:td,emissivemap_pars_fragment:nd,colorspace_fragment:id,colorspace_pars_fragment:rd,envmap_fragment:ad,envmap_common_pars_fragment:sd,envmap_pars_fragment:od,envmap_pars_vertex:ld,envmap_physical_pars_fragment:yd,envmap_vertex:cd,fog_vertex:ud,fog_pars_vertex:hd,fog_fragment:fd,fog_pars_fragment:dd,gradientmap_pars_fragment:pd,lightmap_fragment:md,lightmap_pars_fragment:gd,lights_lambert_fragment:vd,lights_lambert_pars_fragment:_d,lights_pars_begin:xd,lights_toon_fragment:Sd,lights_toon_pars_fragment:Md,lights_phong_fragment:bd,lights_phong_pars_fragment:Ed,lights_physical_fragment:Td,lights_physical_pars_fragment:Ad,lights_fragment_begin:wd,lights_fragment_maps:Cd,lights_fragment_end:Rd,logdepthbuf_fragment:Pd,logdepthbuf_pars_fragment:Ld,logdepthbuf_pars_vertex:Ud,logdepthbuf_vertex:Dd,map_fragment:Id,map_pars_fragment:Fd,map_particle_fragment:Nd,map_particle_pars_fragment:Od,metalnessmap_fragment:Bd,metalnessmap_pars_fragment:kd,morphcolor_vertex:zd,morphnormal_vertex:Gd,morphtarget_pars_vertex:Hd,morphtarget_vertex:Vd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:Yd,normal_pars_vertex:jd,normal_vertex:qd,normalmap_pars_fragment:Zd,clearcoat_normal_fragment_begin:Kd,clearcoat_normal_fragment_maps:Jd,clearcoat_pars_fragment:$d,iridescence_pars_fragment:Qd,opaque_fragment:ep,packing:tp,premultiplied_alpha_fragment:np,project_vertex:ip,dithering_fragment:rp,dithering_pars_fragment:ap,roughnessmap_fragment:sp,roughnessmap_pars_fragment:op,shadowmap_pars_fragment:lp,shadowmap_pars_vertex:cp,shadowmap_vertex:up,shadowmask_pars_fragment:hp,skinbase_vertex:fp,skinning_pars_vertex:dp,skinning_vertex:pp,skinnormal_vertex:mp,specularmap_fragment:gp,specularmap_pars_fragment:vp,tonemapping_fragment:_p,tonemapping_pars_fragment:xp,transmission_fragment:yp,transmission_pars_fragment:Sp,uv_pars_fragment:Mp,uv_pars_vertex:bp,uv_vertex:Ep,worldpos_vertex:Tp,background_vert:Ap,background_frag:wp,backgroundCube_vert:Cp,backgroundCube_frag:Rp,cube_vert:Pp,cube_frag:Lp,depth_vert:Up,depth_frag:Dp,distanceRGBA_vert:Ip,distanceRGBA_frag:Fp,equirect_vert:Np,equirect_frag:Op,linedashed_vert:Bp,linedashed_frag:kp,meshbasic_vert:zp,meshbasic_frag:Gp,meshlambert_vert:Hp,meshlambert_frag:Vp,meshmatcap_vert:Wp,meshmatcap_frag:Xp,meshnormal_vert:Yp,meshnormal_frag:jp,meshphong_vert:qp,meshphong_frag:Zp,meshphysical_vert:Kp,meshphysical_frag:Jp,meshtoon_vert:$p,meshtoon_frag:Qp,points_vert:em,points_frag:tm,shadow_vert:nm,shadow_frag:im,sprite_vert:rm,sprite_frag:am},we={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},hn={basic:{uniforms:Ut([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ut([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ut([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ut([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ut([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ut([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ut([we.points,we.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ut([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ut([we.common,we.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ut([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ut([we.sprite,we.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Ut([we.common,we.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Ut([we.lights,we.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};hn.physical={uniforms:Ut([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ha={r:0,b:0,g:0};function sm(a,e,t,n,r,i,o){const s=new Xe(0);let l=i===!0?0:1,c,u,f=null,h=0,d=null;function g(m,p){let S=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?v(s,l):_&&_.isColor&&(v(_,1),S=!0);const x=a.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(a.autoClear||S)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ua)?(u===void 0&&(u=new Dt(new Dr(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:Yi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=_.colorSpace!==nt,(f!==_||h!==_.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,d=a.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Dt(new Ki(2,2),new pt({name:"BackgroundMaterial",uniforms:Yi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=_.colorSpace!==nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,d=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(ha,Kc(a)),n.buffers.color.setClear(ha.r,ha.g,ha.b,p,o)}return{getClearColor:function(){return s},setClearColor:function(m,p=1){s.set(m),l=p,v(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(s,l)},render:g}}function om(a,e,t,n){const r=a.getParameter(a.MAX_VERTEX_ATTRIBS),i=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||i!==null,s={},l=m(null);let c=l,u=!1;function f(D,k,W,j,q){let X=!1;if(o){const B=v(j,W,k);c!==B&&(c=B,d(c.object)),X=p(D,j,W,q),X&&S(D,j,W,q)}else{const B=k.wireframe===!0;(c.geometry!==j.id||c.program!==W.id||c.wireframe!==B)&&(c.geometry=j.id,c.program=W.id,c.wireframe=B,X=!0)}q!==null&&t.update(q,a.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,N(D,k,W,j),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function h(){return n.isWebGL2?a.createVertexArray():i.createVertexArrayOES()}function d(D){return n.isWebGL2?a.bindVertexArray(D):i.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?a.deleteVertexArray(D):i.deleteVertexArrayOES(D)}function v(D,k,W){const j=W.wireframe===!0;let q=s[D.id];q===void 0&&(q={},s[D.id]=q);let X=q[k.id];X===void 0&&(X={},q[k.id]=X);let B=X[j];return B===void 0&&(B=m(h()),X[j]=B),B}function m(D){const k=[],W=[],j=[];for(let q=0;q<r;q++)k[q]=0,W[q]=0,j[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:W,attributeDivisors:j,object:D,attributes:{},index:null}}function p(D,k,W,j){const q=c.attributes,X=k.attributes;let B=0;const w=W.getAttributes();for(const R in w)if(w[R].location>=0){const V=q[R];let H=X[R];if(H===void 0&&(R==="instanceMatrix"&&D.instanceMatrix&&(H=D.instanceMatrix),R==="instanceColor"&&D.instanceColor&&(H=D.instanceColor)),V===void 0||V.attribute!==H||H&&V.data!==H.data)return!0;B++}return c.attributesNum!==B||c.index!==j}function S(D,k,W,j){const q={},X=k.attributes;let B=0;const w=W.getAttributes();for(const R in w)if(w[R].location>=0){let V=X[R];V===void 0&&(R==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),R==="instanceColor"&&D.instanceColor&&(V=D.instanceColor));const H={};H.attribute=V,V&&V.data&&(H.data=V.data),q[R]=H,B++}c.attributes=q,c.attributesNum=B,c.index=j}function _(){const D=c.newAttributes;for(let k=0,W=D.length;k<W;k++)D[k]=0}function x(D){b(D,0)}function b(D,k){const W=c.newAttributes,j=c.enabledAttributes,q=c.attributeDivisors;W[D]=1,j[D]===0&&(a.enableVertexAttribArray(D),j[D]=1),q[D]!==k&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,k),q[D]=k)}function C(){const D=c.newAttributes,k=c.enabledAttributes;for(let W=0,j=k.length;W<j;W++)k[W]!==D[W]&&(a.disableVertexAttribArray(W),k[W]=0)}function E(D,k,W,j,q,X,B){B===!0?a.vertexAttribIPointer(D,k,W,q,X):a.vertexAttribPointer(D,k,W,j,q,X)}function N(D,k,W,j){if(n.isWebGL2===!1&&(D.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const q=j.attributes,X=W.getAttributes(),B=k.defaultAttributeValues;for(const w in X){const R=X[w];if(R.location>=0){let G=q[w];if(G===void 0&&(w==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),w==="instanceColor"&&D.instanceColor&&(G=D.instanceColor)),G!==void 0){const V=G.normalized,H=G.itemSize,re=t.get(G);if(re===void 0)continue;const $=re.buffer,ne=re.type,xe=re.bytesPerElement,Ce=n.isWebGL2===!0&&(ne===a.INT||ne===a.UNSIGNED_INT||G.gpuType===Fc);if(G.isInterleavedBufferAttribute){const he=G.data,F=he.stride,Fe=G.offset;if(he.isInstancedInterleavedBuffer){for(let be=0;be<R.locationSize;be++)b(R.location+be,he.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let be=0;be<R.locationSize;be++)x(R.location+be);a.bindBuffer(a.ARRAY_BUFFER,$);for(let be=0;be<R.locationSize;be++)E(R.location+be,H/R.locationSize,ne,V,F*xe,(Fe+H/R.locationSize*be)*xe,Ce)}else{if(G.isInstancedBufferAttribute){for(let he=0;he<R.locationSize;he++)b(R.location+he,G.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let he=0;he<R.locationSize;he++)x(R.location+he);a.bindBuffer(a.ARRAY_BUFFER,$);for(let he=0;he<R.locationSize;he++)E(R.location+he,H/R.locationSize,ne,V,H*xe,H/R.locationSize*he*xe,Ce)}}else if(B!==void 0){const V=B[w];if(V!==void 0)switch(V.length){case 2:a.vertexAttrib2fv(R.location,V);break;case 3:a.vertexAttrib3fv(R.location,V);break;case 4:a.vertexAttrib4fv(R.location,V);break;default:a.vertexAttrib1fv(R.location,V)}}}}C()}function y(){L();for(const D in s){const k=s[D];for(const W in k){const j=k[W];for(const q in j)g(j[q].object),delete j[q];delete k[W]}delete s[D]}}function T(D){if(s[D.id]===void 0)return;const k=s[D.id];for(const W in k){const j=k[W];for(const q in j)g(j[q].object),delete j[q];delete k[W]}delete s[D.id]}function K(D){for(const k in s){const W=s[k];if(W[D.id]===void 0)continue;const j=W[D.id];for(const q in j)g(j[q].object),delete j[q];delete W[D.id]}}function L(){U(),u=!0,c!==l&&(c=l,d(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:L,resetDefaultState:U,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:K,initAttributes:_,enableAttribute:x,disableUnusedAttributes:C}}function lm(a,e,t,n){const r=n.isWebGL2;let i;function o(c){i=c}function s(c,u){a.drawArrays(i,c,u),t.update(u,i,1)}function l(c,u,f){if(f===0)return;let h,d;if(r)h=a,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](i,c,u,f),t.update(u,i,f)}this.setMode=o,this.render=s,this.renderInstances=l}function cm(a,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function i(E){if(E==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=i(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),h=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),p=a.getParameter(a.MAX_VARYING_VECTORS),S=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,x=o||e.has("OES_texture_float"),b=_&&x,C=o?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:i,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:C}}function um(a){const e=this;let t=null,n=0,r=!1,i=!1;const o=new Tn,s=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=a.get(f);if(!r||g===null||g.length===0||i&&!m)i?u(null):c();else{const S=i?0:n,_=S*4;let x=p.clippingState||null;l.value=x,x=u(g,h,_,d);for(let b=0;b!==_;++b)x[b]=t[b];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,S=h.matrixWorldInverse;s.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=d;_!==v;++_,x+=4)o.copy(f[_]).applyMatrix4(S,s),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function hm(a){let e=new WeakMap;function t(o,s){return s===Os?o.mapping=Vi:s===Bs&&(o.mapping=Wi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Os||s===Bs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Tf(l.height/2);return c.fromEquirectangularTexture(a,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}class Qc extends io{constructor(e=-1,t=1,n=1,r=-1,i=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let i=n-e,o=n+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,o=i+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(i,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zi=4,Al=[.125,.215,.35,.446,.526,.582],Qn=20,Ms=new Qc,wl=new Xe;let bs=null;const $n=(1+Math.sqrt(5))/2,Li=1/$n,Cl=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,$n,Li),new Y(0,$n,-Li),new Y(Li,0,$n),new Y(-Li,0,$n),new Y($n,Li,0),new Y(-$n,Li,0)];class Rl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){bs=this._renderer.getRenderTarget(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bs),e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Cn,format:on,colorSpace:mn,depthBuffer:!1},r=Pl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(e,t,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fm(i)),this._blurMaterial=dm(i,e,t)}return r}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,Ms)}_sceneToCubeUV(e,t,n,r){const s=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(wl),u.toneMapping=Hn,u.autoClear=!1;const d=new Fa({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new Dt(new Dr,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(wl),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(s.up.set(0,l[p],0),s.lookAt(c[p],0,0)):S===1?(s.up.set(0,0,l[p]),s.lookAt(0,c[p],0)):(s.up.set(0,l[p],0),s.lookAt(0,0,c[p]));const _=this._cubeSize;fa(r,S*_,p>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Vi||e.mapping===Wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());const i=r?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],i),s=i.uniforms;s.envMap.value=e;const l=this._cubeSize;fa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ms)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const i=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Cl[(r-1)%Cl.length];this._blur(e,r-1,r,i,o)}t.autoClear=n}_blur(e,t,n,r,i){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",i),this._halfBlur(o,e,n,n,r,"longitudinal",i)}_halfBlur(e,t,n,r,i,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Dt(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Qn-1),v=i/g,m=isFinite(i)?1+Math.floor(u*v):Qn;m>Qn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);const p=[];let S=0;for(let E=0;E<Qn;++E){const N=E/v,y=Math.exp(-N*N/2);p.push(y),E===0?S+=y:E<m&&(S+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const x=this._sizeLods[r],b=3*x*(r>_-zi?r-_+zi:0),C=4*(this._cubeSize-x);fa(t,b,C,3*x,2*x),l.setRenderTarget(t),l.render(f,Ms)}}function fm(a){const e=[],t=[],n=[];let r=a;const i=a-zi+1+Al.length;for(let o=0;o<i;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>a-zi?l=Al[o-a+zi-1]:o===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*d),_=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let C=0;C<d;C++){const E=C%3*2/3-1,N=C>2?0:-1,y=[E,N,0,E+2/3,N,0,E+2/3,N+1,0,E,N,0,E+2/3,N+1,0,E,N+1,0];S.set(y,v*g*C),_.set(h,m*g*C);const T=[C,C,C,C,C,C];x.set(T,p*g*C)}const b=new gt;b.setAttribute("position",new ft(S,v)),b.setAttribute("uv",new ft(_,m)),b.setAttribute("faceIndex",new ft(x,p)),e.push(b),r>zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pl(a,e,t){const n=new ln(a,e,t);return n.texture.mapping=Ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fa(a,e,t,n,r){a.viewport.set(e,t,n,r),a.scissor.set(e,t,n,r)}function dm(a,e,t){const n=new Float32Array(Qn),r=new Y(0,1,0);return new pt({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ll(){return new pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ul(){return new pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pm(a){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===Os||l===Bs,u=l===Vi||l===Wi;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new Rl(a)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Rl(a));const h=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",i),h.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function i(s){const l=s.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mm(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function gm(a,e,t,n){const r={},i=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=i.get(h);d&&(e.remove(d),i.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],a.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],a.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(d!==null){const S=d.array;v=d.version;for(let _=0,x=S.length;_<x;_+=3){const b=S[_+0],C=S[_+1],E=S[_+2];h.push(b,C,C,E,E,b)}}else if(g!==void 0){const S=g.array;v=g.version;for(let _=0,x=S.length/3-1;_<x;_+=3){const b=_+0,C=_+1,E=_+2;h.push(b,C,C,E,E,b)}}else return;const m=new(Vc(h)?Zc:qc)(h,1);m.version=v;const p=i.get(f);p&&e.remove(p),i.set(f,m)}function u(f){const h=i.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return i.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function vm(a,e,t,n){const r=n.isWebGL2;let i;function o(h){i=h}let s,l;function c(h){s=h.type,l=h.bytesPerElement}function u(h,d){a.drawElements(i,d,s,h*l),t.update(d,i,1)}function f(h,d,g){if(g===0)return;let v,m;if(r)v=a,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](i,d,s,h*l,g),t.update(d,i,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function _m(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,o,s){switch(t.calls++,o){case a.TRIANGLES:t.triangles+=s*(i/3);break;case a.LINES:t.lines+=s*(i/2);break;case a.LINE_STRIP:t.lines+=s*(i-1);break;case a.LINE_LOOP:t.lines+=s*i;break;case a.POINTS:t.points+=s*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function xm(a,e){return a[0]-e[0]}function ym(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Sm(a,e,t){const n={},r=new Float32Array(8),i=new WeakMap,o=new dt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let m=i.get(u);if(m===void 0||m.count!==v){let k=function(){U.dispose(),i.delete(u),u.removeEventListener("dispose",k)};var d=k;m!==void 0&&m.texture.dispose();const _=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let y=0;_===!0&&(y=1),x===!0&&(y=2),b===!0&&(y=3);let T=u.attributes.position.count*y,K=1;T>e.maxTextureSize&&(K=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const L=new Float32Array(T*K*4*v),U=new Yc(L,T,K,v);U.type=Gn,U.needsUpdate=!0;const D=y*4;for(let W=0;W<v;W++){const j=C[W],q=E[W],X=N[W],B=T*K*4*W;for(let w=0;w<j.count;w++){const R=w*D;_===!0&&(o.fromBufferAttribute(j,w),L[B+R+0]=o.x,L[B+R+1]=o.y,L[B+R+2]=o.z,L[B+R+3]=0),x===!0&&(o.fromBufferAttribute(q,w),L[B+R+4]=o.x,L[B+R+5]=o.y,L[B+R+6]=o.z,L[B+R+7]=0),b===!0&&(o.fromBufferAttribute(X,w),L[B+R+8]=o.x,L[B+R+9]=o.y,L[B+R+10]=o.z,L[B+R+11]=X.itemSize===4?o.w:1)}}m={count:v,texture:U,size:new De(T,K)},i.set(u,m),u.addEventListener("dispose",k)}let p=0;for(let _=0;_<h.length;_++)p+=h[_];const S=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(a,"morphTargetBaseInfluence",S),f.getUniforms().setValue(a,"morphTargetInfluences",h),f.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let v=n[u.id];if(v===void 0||v.length!==g){v=[];for(let x=0;x<g;x++)v[x]=[x,0];n[u.id]=v}for(let x=0;x<g;x++){const b=v[x];b[0]=x,b[1]=h[x]}v.sort(ym);for(let x=0;x<8;x++)x<g&&v[x][1]?(s[x][0]=v[x][0],s[x][1]=v[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(xm);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let S=0;for(let x=0;x<8;x++){const b=s[x],C=b[0],E=b[1];C!==Number.MAX_SAFE_INTEGER&&E?(m&&u.getAttribute("morphTarget"+x)!==m[C]&&u.setAttribute("morphTarget"+x,m[C]),p&&u.getAttribute("morphNormal"+x)!==p[C]&&u.setAttribute("morphNormal"+x,p[C]),r[x]=E,S+=E):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const _=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(a,"morphTargetBaseInfluence",_),f.getUniforms().setValue(a,"morphTargetInfluences",r)}}return{update:l}}function Mm(a,e,t,n){let r=new WeakMap;function i(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:o}}const eu=new Pt,tu=new Yc,nu=new cf,iu=new Jc,Dl=[],Il=[],Fl=new Float32Array(16),Nl=new Float32Array(9),Ol=new Float32Array(4);function Ji(a,e,t){const n=a[0];if(n<=0||n>0)return a;const r=e*t;let i=Dl[r];if(i===void 0&&(i=new Float32Array(r),Dl[r]=i),e!==0){n.toArray(i,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(i,s)}return i}function vt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function _t(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Na(a,e){let t=Il[e];t===void 0&&(t=new Int32Array(e),Il[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function bm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Em(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;a.uniform2fv(this.addr,e),_t(t,e)}}function Tm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;a.uniform3fv(this.addr,e),_t(t,e)}}function Am(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;a.uniform4fv(this.addr,e),_t(t,e)}}function wm(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Ol.set(n),a.uniformMatrix2fv(this.addr,!1,Ol),_t(t,n)}}function Cm(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Nl.set(n),a.uniformMatrix3fv(this.addr,!1,Nl),_t(t,n)}}function Rm(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Fl.set(n),a.uniformMatrix4fv(this.addr,!1,Fl),_t(t,n)}}function Pm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Lm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;a.uniform2iv(this.addr,e),_t(t,e)}}function Um(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;a.uniform3iv(this.addr,e),_t(t,e)}}function Dm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;a.uniform4iv(this.addr,e),_t(t,e)}}function Im(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Fm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;a.uniform2uiv(this.addr,e),_t(t,e)}}function Nm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;a.uniform3uiv(this.addr,e),_t(t,e)}}function Om(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;a.uniform4uiv(this.addr,e),_t(t,e)}}function Bm(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||eu,r)}function km(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||nu,r)}function zm(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||iu,r)}function Gm(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||tu,r)}function Hm(a){switch(a){case 5126:return bm;case 35664:return Em;case 35665:return Tm;case 35666:return Am;case 35674:return wm;case 35675:return Cm;case 35676:return Rm;case 5124:case 35670:return Pm;case 35667:case 35671:return Lm;case 35668:case 35672:return Um;case 35669:case 35673:return Dm;case 5125:return Im;case 36294:return Fm;case 36295:return Nm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Gm}}function Vm(a,e){a.uniform1fv(this.addr,e)}function Wm(a,e){const t=Ji(e,this.size,2);a.uniform2fv(this.addr,t)}function Xm(a,e){const t=Ji(e,this.size,3);a.uniform3fv(this.addr,t)}function Ym(a,e){const t=Ji(e,this.size,4);a.uniform4fv(this.addr,t)}function jm(a,e){const t=Ji(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function qm(a,e){const t=Ji(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Zm(a,e){const t=Ji(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Km(a,e){a.uniform1iv(this.addr,e)}function Jm(a,e){a.uniform2iv(this.addr,e)}function $m(a,e){a.uniform3iv(this.addr,e)}function Qm(a,e){a.uniform4iv(this.addr,e)}function eg(a,e){a.uniform1uiv(this.addr,e)}function tg(a,e){a.uniform2uiv(this.addr,e)}function ng(a,e){a.uniform3uiv(this.addr,e)}function ig(a,e){a.uniform4uiv(this.addr,e)}function rg(a,e,t){const n=this.cache,r=e.length,i=Na(t,r);vt(n,i)||(a.uniform1iv(this.addr,i),_t(n,i));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||eu,i[o])}function ag(a,e,t){const n=this.cache,r=e.length,i=Na(t,r);vt(n,i)||(a.uniform1iv(this.addr,i),_t(n,i));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||nu,i[o])}function sg(a,e,t){const n=this.cache,r=e.length,i=Na(t,r);vt(n,i)||(a.uniform1iv(this.addr,i),_t(n,i));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||iu,i[o])}function og(a,e,t){const n=this.cache,r=e.length,i=Na(t,r);vt(n,i)||(a.uniform1iv(this.addr,i),_t(n,i));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||tu,i[o])}function lg(a){switch(a){case 5126:return Vm;case 35664:return Wm;case 35665:return Xm;case 35666:return Ym;case 35674:return jm;case 35675:return qm;case 35676:return Zm;case 5124:case 35670:return Km;case 35667:case 35671:return Jm;case 35668:case 35672:return $m;case 35669:case 35673:return Qm;case 5125:return eg;case 36294:return tg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return og}}class cg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Hm(t.type)}}class ug{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=lg(t.type)}}class hg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let i=0,o=r.length;i!==o;++i){const s=r[i];s.setValue(e,t[s.id],n)}}}const Es=/(\w+)(\])?(\[|\.)?/g;function Bl(a,e){a.seq.push(e),a.map[e.id]=e}function fg(a,e,t){const n=a.name,r=n.length;for(Es.lastIndex=0;;){const i=Es.exec(n),o=Es.lastIndex;let s=i[1];const l=i[2]==="]",c=i[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){Bl(t,c===void 0?new cg(s,a,e):new ug(s,a,e));break}else{let f=t.map[s];f===void 0&&(f=new hg(s),Bl(t,f)),t=f}}}class Ea{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const i=e.getActiveUniform(t,r),o=e.getUniformLocation(t,i.name);fg(i,o,this)}}setValue(e,t,n,r){const i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,o=t.length;i!==o;++i){const s=t[i],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,i=e.length;r!==i;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function kl(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let dg=0;function pg(a,e){const t=a.split(`
`),n=[],r=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let o=r;o<i;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function mg(a){switch(a){case mn:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),["Linear","( value )"]}}function zl(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),r=a.getShaderInfoLog(e).trim();if(n&&r==="")return"";const i=/ERROR: 0:(\d+)/.exec(r);if(i){const o=parseInt(i[1]);return t.toUpperCase()+`

`+r+`

`+pg(a.getShaderSource(e),o)}else return r}function gg(a,e){const t=mg(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function vg(a,e){let t;switch(e){case hh:t="Linear";break;case fh:t="Reinhard";break;case dh:t="OptimizedCineon";break;case ph:t="ACESFilmic";break;case mh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _g(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xr).join(`
`)}function xg(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yg(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const i=a.getActiveAttrib(e,r),o=i.name;let s=1;i.type===a.FLOAT_MAT2&&(s=2),i.type===a.FLOAT_MAT3&&(s=3),i.type===a.FLOAT_MAT4&&(s=4),t[o]={type:i.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function xr(a){return a!==""}function Gl(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hl(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ws(a){return a.replace(Sg,bg)}const Mg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bg(a,e){let t=qe[e];if(t===void 0){const n=Mg.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ws(t)}const Eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(a){return a.replace(Eg,Tg)}function Tg(a,e,t,n){let r="";for(let i=parseInt(e);i<parseInt(t);i++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function Wl(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ag(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Pc?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Vu?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function wg(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Vi:case Wi:e="ENVMAP_TYPE_CUBE";break;case Ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cg(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Wi:e="ENVMAP_MODE_REFRACTION";break}return e}function Rg(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Dc:e="ENVMAP_BLENDING_MULTIPLY";break;case ch:e="ENVMAP_BLENDING_MIX";break;case uh:e="ENVMAP_BLENDING_ADD";break}return e}function Pg(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Lg(a,e,t,n){const r=a.getContext(),i=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=Ag(t),c=wg(t),u=Cg(t),f=Rg(t),h=Pg(t),d=t.isWebGL2?"":_g(t),g=xg(i),v=r.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[Wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[d,Wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Hn?vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,gg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),o=Ws(o),o=Gl(o,t),o=Hl(o,t),s=Ws(s),s=Gl(s,t),s=Hl(s,t),o=Vl(o),s=Vl(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=S+m+o,x=S+p+s,b=kl(r,r.VERTEX_SHADER,_),C=kl(r,r.FRAGMENT_SHADER,x);if(r.attachShader(v,b),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),a.debug.checkShaderErrors){const y=r.getProgramInfoLog(v).trim(),T=r.getShaderInfoLog(b).trim(),K=r.getShaderInfoLog(C).trim();let L=!0,U=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(L=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(r,v,b,C);else{const D=zl(r,b,"vertex"),k=zl(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+D+`
`+k)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(T===""||K==="")&&(U=!1);U&&(this.diagnostics={runnable:L,programLog:y,vertexShader:{log:T,prefix:m},fragmentShader:{log:K,prefix:p}})}r.deleteShader(b),r.deleteShader(C);let E;this.getUniforms=function(){return E===void 0&&(E=new Ea(r,v)),E};let N;return this.getAttributes=function(){return N===void 0&&(N=yg(r,v)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=C,this}let Ug=0;class Dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ig(e),t.set(e,n)),n}}class Ig{constructor(e){this.id=Ug++,this.code=e,this.usedTimes=0}}function Fg(a,e,t,n,r,i,o){const s=new no,l=new Dg,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===0?"uv":`uv${y}`}function m(y,T,K,L,U){const D=L.fog,k=U.geometry,W=y.isMeshStandardMaterial?L.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),q=j&&j.mapping===Ua?j.image.height:null,X=g[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const B=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,w=B!==void 0?B.length:0;let R=0;k.morphAttributes.position!==void 0&&(R=1),k.morphAttributes.normal!==void 0&&(R=2),k.morphAttributes.color!==void 0&&(R=3);let G,V,H,re;if(X){const Ge=hn[X];G=Ge.vertexShader,V=Ge.fragmentShader}else G=y.vertexShader,V=y.fragmentShader,l.update(y),H=l.getVertexShaderID(y),re=l.getFragmentShaderID(y);const $=a.getRenderTarget(),ne=U.isInstancedMesh===!0,xe=!!y.map,Ce=!!y.matcap,he=!!j,F=!!y.aoMap,Fe=!!y.lightMap,be=!!y.bumpMap,Ae=!!y.normalMap,Ee=!!y.displacementMap,Ue=!!y.emissiveMap,de=!!y.metalnessMap,Se=!!y.roughnessMap,Te=y.anisotropy>0,oe=y.clearcoat>0,Re=y.iridescence>0,A=y.sheen>0,M=y.transmission>0,z=Te&&!!y.anisotropyMap,me=oe&&!!y.clearcoatMap,Q=oe&&!!y.clearcoatNormalMap,se=oe&&!!y.clearcoatRoughnessMap,_e=Re&&!!y.iridescenceMap,fe=Re&&!!y.iridescenceThicknessMap,Z=A&&!!y.sheenColorMap,I=A&&!!y.sheenRoughnessMap,ie=!!y.specularMap,pe=!!y.specularColorMap,ae=!!y.specularIntensityMap,ve=M&&!!y.transmissionMap,Le=M&&!!y.thicknessMap,ke=!!y.gradientMap,O=!!y.alphaMap,ue=y.alphaTest>0,J=!!y.alphaHash,Me=!!y.extensions,ge=!!k.attributes.uv1,Pe=!!k.attributes.uv2,ze=!!k.attributes.uv3;let Be=Hn;return y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Be=a.toneMapping),{isWebGL2:u,shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:V,defines:y.defines,customVertexShaderID:H,customFragmentShaderID:re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:ne,instancingColor:ne&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:$===null?a.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:mn,map:xe,matcap:Ce,envMap:he,envMapMode:he&&j.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:Fe,bumpMap:be,normalMap:Ae,displacementMap:h&&Ee,emissiveMap:Ue,normalMapObjectSpace:Ae&&y.normalMapType===wh,normalMapTangentSpace:Ae&&y.normalMapType===eo,metalnessMap:de,roughnessMap:Se,anisotropy:Te,anisotropyMap:z,clearcoat:oe,clearcoatMap:me,clearcoatNormalMap:Q,clearcoatRoughnessMap:se,iridescence:Re,iridescenceMap:_e,iridescenceThicknessMap:fe,sheen:A,sheenColorMap:Z,sheenRoughnessMap:I,specularMap:ie,specularColorMap:pe,specularIntensityMap:ae,transmission:M,transmissionMap:ve,thicknessMap:Le,gradientMap:ke,opaque:y.transparent===!1&&y.blending===dn,alphaMap:O,alphaTest:ue,alphaHash:J,combine:y.combine,mapUv:xe&&v(y.map.channel),aoMapUv:F&&v(y.aoMap.channel),lightMapUv:Fe&&v(y.lightMap.channel),bumpMapUv:be&&v(y.bumpMap.channel),normalMapUv:Ae&&v(y.normalMap.channel),displacementMapUv:Ee&&v(y.displacementMap.channel),emissiveMapUv:Ue&&v(y.emissiveMap.channel),metalnessMapUv:de&&v(y.metalnessMap.channel),roughnessMapUv:Se&&v(y.roughnessMap.channel),anisotropyMapUv:z&&v(y.anisotropyMap.channel),clearcoatMapUv:me&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Q&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:I&&v(y.sheenRoughnessMap.channel),specularMapUv:ie&&v(y.specularMap.channel),specularColorMapUv:pe&&v(y.specularColorMap.channel),specularIntensityMapUv:ae&&v(y.specularIntensityMap.channel),transmissionMapUv:ve&&v(y.transmissionMap.channel),thicknessMapUv:Le&&v(y.thicknessMap.channel),alphaMapUv:O&&v(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ae||Te),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:ge,vertexUv2s:Pe,vertexUv3s:ze,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(xe||O),fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:R,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&K.length>0,shadowMapType:a.shadowMap.type,toneMapping:Be,useLegacyLights:a._useLegacyLights,decodeVideoTexture:xe&&y.map.isVideoTexture===!0&&y.map.colorSpace===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Tt,flipSided:y.side===It,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Me&&y.extensions.derivatives===!0,extensionFragDepth:Me&&y.extensions.fragDepth===!0,extensionDrawBuffers:Me&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const K in y.defines)T.push(K),T.push(y.defines[K]);return y.isRawShaderMaterial===!1&&(S(T,y),_(T,y),T.push(a.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function S(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function _(y,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUv1s&&s.enable(13),T.vertexUv2s&&s.enable(14),T.vertexUv3s&&s.enable(15),T.vertexTangents&&s.enable(16),T.anisotropy&&s.enable(17),y.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),y.push(s.mask)}function x(y){const T=g[y.type];let K;if(T){const L=hn[T];K=Rr.clone(L.uniforms)}else K=y.uniforms;return K}function b(y,T){let K;for(let L=0,U=c.length;L<U;L++){const D=c[L];if(D.cacheKey===T){K=D,++K.usedTimes;break}}return K===void 0&&(K=new Lg(a,T,y,i),c.push(K)),K}function C(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function E(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:C,releaseShaderCache:E,programs:c,dispose:N}}function Ng(){let a=new WeakMap;function e(i){let o=a.get(i);return o===void 0&&(o={},a.set(i,o)),o}function t(i){a.delete(i)}function n(i,o,s){a.get(i)[o]=s}function r(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Og(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Xl(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Yl(){const a=[];let e=0;const t=[],n=[],r=[];function i(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,d,g,v,m){let p=a[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},a[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function s(f,h,d,g,v,m){const p=o(f,h,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,v,m){const p=o(f,h,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Og),n.length>1&&n.sort(h||Xl),r.length>1&&r.sort(h||Xl)}function u(){for(let f=e,h=a.length;f<h;f++){const d=a[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:i,push:s,unshift:l,finish:u,sort:c}}function Bg(){let a=new WeakMap;function e(n,r){const i=a.get(n);let o;return i===void 0?(o=new Yl,a.set(n,[o])):r>=i.length?(o=new Yl,i.push(o)):o=i[r],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function kg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Xe};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return a[e.id]=t,t}}}function zg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Gg=0;function Hg(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Vg(a,e){const t=new kg,n=zg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new Y);const i=new Y,o=new at,s=new at;function l(u,f){let h=0,d=0,g=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let v=0,m=0,p=0,S=0,_=0,x=0,b=0,C=0,E=0,N=0;u.sort(Hg);const y=f===!0?Math.PI:1;for(let K=0,L=u.length;K<L;K++){const U=u[K],D=U.color,k=U.intensity,W=U.distance,j=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=D.r*k*y,d+=D.g*k*y,g+=D.b*k*y;else if(U.isLightProbe)for(let q=0;q<9;q++)r.probe[q].addScaledVector(U.sh.coefficients[q],k);else if(U.isDirectionalLight){const q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity*y),U.castShadow){const X=U.shadow,B=n.get(U);B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,r.directionalShadow[v]=B,r.directionalShadowMap[v]=j,r.directionalShadowMatrix[v]=U.shadow.matrix,x++}r.directional[v]=q,v++}else if(U.isSpotLight){const q=t.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(D).multiplyScalar(k*y),q.distance=W,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,r.spot[p]=q;const X=U.shadow;if(U.map&&(r.spotLightMap[E]=U.map,E++,X.updateMatrices(U),U.castShadow&&N++),r.spotLightMatrix[p]=X.matrix,U.castShadow){const B=n.get(U);B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,r.spotShadow[p]=B,r.spotShadowMap[p]=j,C++}p++}else if(U.isRectAreaLight){const q=t.get(U);q.color.copy(D).multiplyScalar(k),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),r.rectArea[S]=q,S++}else if(U.isPointLight){const q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity*y),q.distance=U.distance,q.decay=U.decay,U.castShadow){const X=U.shadow,B=n.get(U);B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,B.shadowCameraNear=X.camera.near,B.shadowCameraFar=X.camera.far,r.pointShadow[m]=B,r.pointShadowMap[m]=j,r.pointShadowMatrix[m]=U.shadow.matrix,b++}r.point[m]=q,m++}else if(U.isHemisphereLight){const q=t.get(U);q.skyColor.copy(U.color).multiplyScalar(k*y),q.groundColor.copy(U.groundColor).multiplyScalar(k*y),r.hemi[_]=q,_++}}S>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=we.LTC_FLOAT_1,r.rectAreaLTC2=we.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=we.LTC_HALF_1,r.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==v||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==S||T.hemiLength!==_||T.numDirectionalShadows!==x||T.numPointShadows!==b||T.numSpotShadows!==C||T.numSpotMaps!==E)&&(r.directional.length=v,r.spot.length=p,r.rectArea.length=S,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+E-N,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=N,T.directionalLength=v,T.pointLength=m,T.spotLength=p,T.rectAreaLength=S,T.hemiLength=_,T.numDirectionalShadows=x,T.numPointShadows=b,T.numSpotShadows=C,T.numSpotMaps=E,r.version=Gg++)}function c(u,f){let h=0,d=0,g=0,v=0,m=0;const p=f.matrixWorldInverse;for(let S=0,_=u.length;S<_;S++){const x=u[S];if(x.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),h++}else if(x.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const b=r.rectArea[v];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),s.identity(),o.copy(x.matrixWorld),o.premultiply(p),s.extractRotation(o),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),v++}else if(x.isPointLight){const b=r.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function jl(a,e){const t=new Vg(a,e),n=[],r=[];function i(){n.length=0,r.length=0}function o(f){n.push(f)}function s(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:i,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function Wg(a,e){let t=new WeakMap;function n(i,o=0){const s=t.get(i);let l;return s===void 0?(l=new jl(a,e),t.set(i,[l])):o>=s.length?(l=new jl(a,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class ru extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class au extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jg(a,e,t){let n=new ro;const r=new De,i=new De,o=new dt,s=new ru({depthPacking:Hc}),l=new au,c={},u=t.maxTextureSize,f={[Pn]:It,[It]:Pn,[Tt]:Tt},h=new pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Xg,fragmentShader:Yg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new gt;g.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Dt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let p=this.type;this.render=function(b,C,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const N=a.getRenderTarget(),y=a.getActiveCubeFace(),T=a.getActiveMipmapLevel(),K=a.state;K.setBlending(wn),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const L=p!==En&&this.type===En,U=p===En&&this.type!==En;for(let D=0,k=b.length;D<k;D++){const W=b[D],j=W.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const q=j.getFrameExtents();if(r.multiply(q),i.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(i.x=Math.floor(u/q.x),r.x=i.x*q.x,j.mapSize.x=i.x),r.y>u&&(i.y=Math.floor(u/q.y),r.y=i.y*q.y,j.mapSize.y=i.y)),j.map===null||L===!0||U===!0){const B=this.type!==En?{minFilter:Et,magFilter:Et}:{};j.map!==null&&j.map.dispose(),j.map=new ln(r.x,r.y,B),j.map.texture.name=W.name+".shadowMap",j.camera.updateProjectionMatrix()}a.setRenderTarget(j.map),a.clear();const X=j.getViewportCount();for(let B=0;B<X;B++){const w=j.getViewport(B);o.set(i.x*w.x,i.y*w.y,i.x*w.z,i.y*w.w),K.viewport(o),j.updateMatrices(W,B),n=j.getFrustum(),x(C,E,j.camera,W,this.type)}j.isPointLightShadow!==!0&&this.type===En&&S(j,E),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(N,y,T)};function S(b,C){const E=e.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ln(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,a.setRenderTarget(b.mapPass),a.clear(),a.renderBufferDirect(C,null,E,h,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,a.setRenderTarget(b.map),a.clear(),a.renderBufferDirect(C,null,E,d,v,null)}function _(b,C,E,N){let y=null;const T=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(T!==void 0)y=T;else if(y=E.isPointLight===!0?l:s,a.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const K=y.uuid,L=C.uuid;let U=c[K];U===void 0&&(U={},c[K]=U);let D=U[L];D===void 0&&(D=y.clone(),U[L]=D),y=D}if(y.visible=C.visible,y.wireframe=C.wireframe,N===En?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:f[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,E.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const K=a.properties.get(y);K.light=E}return y}function x(b,C,E,N,y){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===En)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const L=e.update(b),U=b.material;if(Array.isArray(U)){const D=L.groups;for(let k=0,W=D.length;k<W;k++){const j=D[k],q=U[j.materialIndex];if(q&&q.visible){const X=_(b,q,N,y);a.renderBufferDirect(E,null,L,X,b,j)}}}else if(U.visible){const D=_(b,U,N,y);a.renderBufferDirect(E,null,L,D,b,null)}}const K=b.children;for(let L=0,U=K.length;L<U;L++)x(K[L],C,E,N,y)}}function qg(a,e,t){const n=t.isWebGL2;function r(){let O=!1;const ue=new dt;let J=null;const Me=new dt(0,0,0,0);return{setMask:function(ge){J!==ge&&!O&&(a.colorMask(ge,ge,ge,ge),J=ge)},setLocked:function(ge){O=ge},setClear:function(ge,Pe,ze,Be,Ne){Ne===!0&&(ge*=Be,Pe*=Be,ze*=Be),ue.set(ge,Pe,ze,Be),Me.equals(ue)===!1&&(a.clearColor(ge,Pe,ze,Be),Me.copy(ue))},reset:function(){O=!1,J=null,Me.set(-1,0,0,0)}}}function i(){let O=!1,ue=null,J=null,Me=null;return{setTest:function(ge){ge?$(a.DEPTH_TEST):ne(a.DEPTH_TEST)},setMask:function(ge){ue!==ge&&!O&&(a.depthMask(ge),ue=ge)},setFunc:function(ge){if(J!==ge){switch(ge){case nh:a.depthFunc(a.NEVER);break;case ih:a.depthFunc(a.ALWAYS);break;case rh:a.depthFunc(a.LESS);break;case Ns:a.depthFunc(a.LEQUAL);break;case ah:a.depthFunc(a.EQUAL);break;case sh:a.depthFunc(a.GEQUAL);break;case oh:a.depthFunc(a.GREATER);break;case lh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}J=ge}},setLocked:function(ge){O=ge},setClear:function(ge){Me!==ge&&(a.clearDepth(ge),Me=ge)},reset:function(){O=!1,ue=null,J=null,Me=null}}}function o(){let O=!1,ue=null,J=null,Me=null,ge=null,Pe=null,ze=null,Be=null,Ne=null;return{setTest:function(Ge){O||(Ge?$(a.STENCIL_TEST):ne(a.STENCIL_TEST))},setMask:function(Ge){ue!==Ge&&!O&&(a.stencilMask(Ge),ue=Ge)},setFunc:function(Ge,Qe,Ke){(J!==Ge||Me!==Qe||ge!==Ke)&&(a.stencilFunc(Ge,Qe,Ke),J=Ge,Me=Qe,ge=Ke)},setOp:function(Ge,Qe,Ke){(Pe!==Ge||ze!==Qe||Be!==Ke)&&(a.stencilOp(Ge,Qe,Ke),Pe=Ge,ze=Qe,Be=Ke)},setLocked:function(Ge){O=Ge},setClear:function(Ge){Ne!==Ge&&(a.clearStencil(Ge),Ne=Ge)},reset:function(){O=!1,ue=null,J=null,Me=null,ge=null,Pe=null,ze=null,Be=null,Ne=null}}}const s=new r,l=new i,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,v=[],m=null,p=!1,S=null,_=null,x=null,b=null,C=null,E=null,N=null,y=!1,T=null,K=null,L=null,U=null,D=null;const k=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const q=a.getParameter(a.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=j>=2);let X=null,B={};const w=a.getParameter(a.SCISSOR_BOX),R=a.getParameter(a.VIEWPORT),G=new dt().fromArray(w),V=new dt().fromArray(R);function H(O,ue,J,Me){const ge=new Uint8Array(4),Pe=a.createTexture();a.bindTexture(O,Pe),a.texParameteri(O,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(O,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ze=0;ze<J;ze++)n&&(O===a.TEXTURE_3D||O===a.TEXTURE_2D_ARRAY)?a.texImage3D(ue,0,a.RGBA,1,1,Me,0,a.RGBA,a.UNSIGNED_BYTE,ge):a.texImage2D(ue+ze,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ge);return Pe}const re={};re[a.TEXTURE_2D]=H(a.TEXTURE_2D,a.TEXTURE_2D,1),re[a.TEXTURE_CUBE_MAP]=H(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(re[a.TEXTURE_2D_ARRAY]=H(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),re[a.TEXTURE_3D]=H(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),$(a.DEPTH_TEST),l.setFunc(Ns),Ee(!1),Ue(Do),$(a.CULL_FACE),be(wn);function $(O){h[O]!==!0&&(a.enable(O),h[O]=!0)}function ne(O){h[O]!==!1&&(a.disable(O),h[O]=!1)}function xe(O,ue){return d[O]!==ue?(a.bindFramebuffer(O,ue),d[O]=ue,n&&(O===a.DRAW_FRAMEBUFFER&&(d[a.FRAMEBUFFER]=ue),O===a.FRAMEBUFFER&&(d[a.DRAW_FRAMEBUFFER]=ue)),!0):!1}function Ce(O,ue){let J=v,Me=!1;if(O)if(J=g.get(ue),J===void 0&&(J=[],g.set(ue,J)),O.isWebGLMultipleRenderTargets){const ge=O.texture;if(J.length!==ge.length||J[0]!==a.COLOR_ATTACHMENT0){for(let Pe=0,ze=ge.length;Pe<ze;Pe++)J[Pe]=a.COLOR_ATTACHMENT0+Pe;J.length=ge.length,Me=!0}}else J[0]!==a.COLOR_ATTACHMENT0&&(J[0]=a.COLOR_ATTACHMENT0,Me=!0);else J[0]!==a.BACK&&(J[0]=a.BACK,Me=!0);Me&&(t.isWebGL2?a.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function he(O){return m!==O?(a.useProgram(O),m=O,!0):!1}const F={[Bi]:a.FUNC_ADD,[Xu]:a.FUNC_SUBTRACT,[Yu]:a.FUNC_REVERSE_SUBTRACT};if(n)F[No]=a.MIN,F[Oo]=a.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(F[No]=O.MIN_EXT,F[Oo]=O.MAX_EXT)}const Fe={[ju]:a.ZERO,[qu]:a.ONE,[Zu]:a.SRC_COLOR,[Lc]:a.SRC_ALPHA,[th]:a.SRC_ALPHA_SATURATE,[Qu]:a.DST_COLOR,[Ju]:a.DST_ALPHA,[Ku]:a.ONE_MINUS_SRC_COLOR,[Uc]:a.ONE_MINUS_SRC_ALPHA,[eh]:a.ONE_MINUS_DST_COLOR,[$u]:a.ONE_MINUS_DST_ALPHA};function be(O,ue,J,Me,ge,Pe,ze,Be){if(O===wn){p===!0&&(ne(a.BLEND),p=!1);return}if(p===!1&&($(a.BLEND),p=!0),O!==Wu){if(O!==S||Be!==y){if((_!==Bi||C!==Bi)&&(a.blendEquation(a.FUNC_ADD),_=Bi,C=Bi),Be)switch(O){case dn:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Fs:a.blendFunc(a.ONE,a.ONE);break;case Io:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Fo:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case dn:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Fs:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Io:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Fo:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,b=null,E=null,N=null,S=O,y=Be}return}ge=ge||ue,Pe=Pe||J,ze=ze||Me,(ue!==_||ge!==C)&&(a.blendEquationSeparate(F[ue],F[ge]),_=ue,C=ge),(J!==x||Me!==b||Pe!==E||ze!==N)&&(a.blendFuncSeparate(Fe[J],Fe[Me],Fe[Pe],Fe[ze]),x=J,b=Me,E=Pe,N=ze),S=O,y=!1}function Ae(O,ue){O.side===Tt?ne(a.CULL_FACE):$(a.CULL_FACE);let J=O.side===It;ue&&(J=!J),Ee(J),O.blending===dn&&O.transparent===!1?be(wn):be(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),s.setMask(O.colorWrite);const Me=O.stencilWrite;c.setTest(Me),Me&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Se(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?$(a.SAMPLE_ALPHA_TO_COVERAGE):ne(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(O){T!==O&&(O?a.frontFace(a.CW):a.frontFace(a.CCW),T=O)}function Ue(O){O!==Gu?($(a.CULL_FACE),O!==K&&(O===Do?a.cullFace(a.BACK):O===Hu?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ne(a.CULL_FACE),K=O}function de(O){O!==L&&(W&&a.lineWidth(O),L=O)}function Se(O,ue,J){O?($(a.POLYGON_OFFSET_FILL),(U!==ue||D!==J)&&(a.polygonOffset(ue,J),U=ue,D=J)):ne(a.POLYGON_OFFSET_FILL)}function Te(O){O?$(a.SCISSOR_TEST):ne(a.SCISSOR_TEST)}function oe(O){O===void 0&&(O=a.TEXTURE0+k-1),X!==O&&(a.activeTexture(O),X=O)}function Re(O,ue,J){J===void 0&&(X===null?J=a.TEXTURE0+k-1:J=X);let Me=B[J];Me===void 0&&(Me={type:void 0,texture:void 0},B[J]=Me),(Me.type!==O||Me.texture!==ue)&&(X!==J&&(a.activeTexture(J),X=J),a.bindTexture(O,ue||re[O]),Me.type=O,Me.texture=ue)}function A(){const O=B[X];O!==void 0&&O.type!==void 0&&(a.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function M(){try{a.compressedTexImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{a.compressedTexImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{a.texSubImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{a.texSubImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{a.texStorage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{a.texStorage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function I(){try{a.texImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{a.texImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(O){G.equals(O)===!1&&(a.scissor(O.x,O.y,O.z,O.w),G.copy(O))}function ae(O){V.equals(O)===!1&&(a.viewport(O.x,O.y,O.z,O.w),V.copy(O))}function ve(O,ue){let J=f.get(ue);J===void 0&&(J=new WeakMap,f.set(ue,J));let Me=J.get(O);Me===void 0&&(Me=a.getUniformBlockIndex(ue,O.name),J.set(O,Me))}function Le(O,ue){const Me=f.get(ue).get(O);u.get(ue)!==Me&&(a.uniformBlockBinding(ue,Me,O.__bindingPointIndex),u.set(ue,Me))}function ke(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),n===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},X=null,B={},d={},g=new WeakMap,v=[],m=null,p=!1,S=null,_=null,x=null,b=null,C=null,E=null,N=null,y=!1,T=null,K=null,L=null,U=null,D=null,G.set(0,0,a.canvas.width,a.canvas.height),V.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:$,disable:ne,bindFramebuffer:xe,drawBuffers:Ce,useProgram:he,setBlending:be,setMaterial:Ae,setFlipSided:Ee,setCullFace:Ue,setLineWidth:de,setPolygonOffset:Se,setScissorTest:Te,activeTexture:oe,bindTexture:Re,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:I,texImage3D:ie,updateUBOMapping:ve,uniformBlockBinding:Le,texStorage2D:fe,texStorage3D:Z,texSubImage2D:me,texSubImage3D:Q,compressedTexSubImage2D:se,compressedTexSubImage3D:_e,scissor:pe,viewport:ae,reset:ke}}function Zg(a,e,t,n,r,i,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,M){return p?new OffscreenCanvas(A,M):Cr("canvas")}function _(A,M,z,me){let Q=1;if((A.width>me||A.height>me)&&(Q=me/Math.max(A.width,A.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const se=M?Ca:Math.floor,_e=se(Q*A.width),fe=se(Q*A.height);v===void 0&&(v=S(_e,fe));const Z=z?S(_e,fe):v;return Z.width=_e,Z.height=fe,Z.getContext("2d").drawImage(A,0,0,_e,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_e+"x"+fe+")."),Z}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return Vs(A.width)&&Vs(A.height)}function b(A){return s?!1:A.wrapS!==sn||A.wrapT!==sn||A.minFilter!==Et&&A.minFilter!==kt}function C(A,M){return A.generateMipmaps&&M&&A.minFilter!==Et&&A.minFilter!==kt}function E(A){a.generateMipmap(A)}function N(A,M,z,me,Q=!1){if(s===!1)return M;if(A!==null){if(a[A]!==void 0)return a[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=M;return M===a.RED&&(z===a.FLOAT&&(se=a.R32F),z===a.HALF_FLOAT&&(se=a.R16F),z===a.UNSIGNED_BYTE&&(se=a.R8)),M===a.RED_INTEGER&&(z===a.UNSIGNED_BYTE&&(se=a.R8UI),z===a.UNSIGNED_SHORT&&(se=a.R16UI),z===a.UNSIGNED_INT&&(se=a.R32UI),z===a.BYTE&&(se=a.R8I),z===a.SHORT&&(se=a.R16I),z===a.INT&&(se=a.R32I)),M===a.RG&&(z===a.FLOAT&&(se=a.RG32F),z===a.HALF_FLOAT&&(se=a.RG16F),z===a.UNSIGNED_BYTE&&(se=a.RG8)),M===a.RGBA&&(z===a.FLOAT&&(se=a.RGBA32F),z===a.HALF_FLOAT&&(se=a.RGBA16F),z===a.UNSIGNED_BYTE&&(se=me===nt&&Q===!1?a.SRGB8_ALPHA8:a.RGBA8),z===a.UNSIGNED_SHORT_4_4_4_4&&(se=a.RGBA4),z===a.UNSIGNED_SHORT_5_5_5_1&&(se=a.RGB5_A1)),(se===a.R16F||se===a.R32F||se===a.RG16F||se===a.RG32F||se===a.RGBA16F||se===a.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function y(A,M,z){return C(A,z)===!0||A.isFramebufferTexture&&A.minFilter!==Et&&A.minFilter!==kt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){return A===Et||A===Bo||A===$a?a.NEAREST:a.LINEAR}function K(A){const M=A.target;M.removeEventListener("dispose",K),U(M),M.isVideoTexture&&g.delete(M)}function L(A){const M=A.target;M.removeEventListener("dispose",L),k(M)}function U(A){const M=n.get(A);if(M.__webglInit===void 0)return;const z=A.source,me=m.get(z);if(me){const Q=me[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(A),Object.keys(me).length===0&&m.delete(z)}n.remove(A)}function D(A){const M=n.get(A);a.deleteTexture(M.__webglTexture);const z=A.source,me=m.get(z);delete me[M.__cacheKey],o.memory.textures--}function k(A){const M=A.texture,z=n.get(A),me=n.get(M);if(me.__webglTexture!==void 0&&(a.deleteTexture(me.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(z.__webglFramebuffer[Q]))for(let se=0;se<z.__webglFramebuffer[Q].length;se++)a.deleteFramebuffer(z.__webglFramebuffer[Q][se]);else a.deleteFramebuffer(z.__webglFramebuffer[Q]);z.__webglDepthbuffer&&a.deleteRenderbuffer(z.__webglDepthbuffer[Q])}else{if(Array.isArray(z.__webglFramebuffer))for(let Q=0;Q<z.__webglFramebuffer.length;Q++)a.deleteFramebuffer(z.__webglFramebuffer[Q]);else a.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&a.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&a.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Q=0;Q<z.__webglColorRenderbuffer.length;Q++)z.__webglColorRenderbuffer[Q]&&a.deleteRenderbuffer(z.__webglColorRenderbuffer[Q]);z.__webglDepthRenderbuffer&&a.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,se=M.length;Q<se;Q++){const _e=n.get(M[Q]);_e.__webglTexture&&(a.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(M[Q])}n.remove(M),n.remove(A)}let W=0;function j(){W=0}function q(){const A=W;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),W+=1,A}function X(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function B(A,M){const z=n.get(A);if(A.isVideoTexture&&oe(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const me=A.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(z,A,M);return}}t.bindTexture(a.TEXTURE_2D,z.__webglTexture,a.TEXTURE0+M)}function w(A,M){const z=n.get(A);if(A.version>0&&z.__version!==A.version){xe(z,A,M);return}t.bindTexture(a.TEXTURE_2D_ARRAY,z.__webglTexture,a.TEXTURE0+M)}function R(A,M){const z=n.get(A);if(A.version>0&&z.__version!==A.version){xe(z,A,M);return}t.bindTexture(a.TEXTURE_3D,z.__webglTexture,a.TEXTURE0+M)}function G(A,M){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Ce(z,A,M);return}t.bindTexture(a.TEXTURE_CUBE_MAP,z.__webglTexture,a.TEXTURE0+M)}const V={[ks]:a.REPEAT,[sn]:a.CLAMP_TO_EDGE,[zs]:a.MIRRORED_REPEAT},H={[Et]:a.NEAREST,[Bo]:a.NEAREST_MIPMAP_NEAREST,[$a]:a.NEAREST_MIPMAP_LINEAR,[kt]:a.LINEAR,[gh]:a.LINEAR_MIPMAP_NEAREST,[Ar]:a.LINEAR_MIPMAP_LINEAR},re={[Rh]:a.NEVER,[Nh]:a.ALWAYS,[Ph]:a.LESS,[Uh]:a.LEQUAL,[Lh]:a.EQUAL,[Fh]:a.GEQUAL,[Dh]:a.GREATER,[Ih]:a.NOTEQUAL};function $(A,M,z){if(z?(a.texParameteri(A,a.TEXTURE_WRAP_S,V[M.wrapS]),a.texParameteri(A,a.TEXTURE_WRAP_T,V[M.wrapT]),(A===a.TEXTURE_3D||A===a.TEXTURE_2D_ARRAY)&&a.texParameteri(A,a.TEXTURE_WRAP_R,V[M.wrapR]),a.texParameteri(A,a.TEXTURE_MAG_FILTER,H[M.magFilter]),a.texParameteri(A,a.TEXTURE_MIN_FILTER,H[M.minFilter])):(a.texParameteri(A,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(A,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(A===a.TEXTURE_3D||A===a.TEXTURE_2D_ARRAY)&&a.texParameteri(A,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(M.wrapS!==sn||M.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(A,a.TEXTURE_MAG_FILTER,T(M.magFilter)),a.texParameteri(A,a.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Et&&M.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(a.texParameteri(A,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(A,a.TEXTURE_COMPARE_FUNC,re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Et||M.minFilter!==$a&&M.minFilter!==Ar||M.type===Gn&&e.has("OES_texture_float_linear")===!1||s===!1&&M.type===Cn&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(a.texParameterf(A,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ne(A,M){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",K));const me=M.source;let Q=m.get(me);Q===void 0&&(Q={},m.set(me,Q));const se=X(M);if(se!==A.__cacheKey){Q[se]===void 0&&(Q[se]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[se].usedTimes++;const _e=Q[A.__cacheKey];_e!==void 0&&(Q[A.__cacheKey].usedTimes--,_e.usedTimes===0&&D(M)),A.__cacheKey=se,A.__webglTexture=Q[se].texture}return z}function xe(A,M,z){let me=a.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(me=a.TEXTURE_2D_ARRAY),M.isData3DTexture&&(me=a.TEXTURE_3D);const Q=ne(A,M),se=M.source;t.bindTexture(me,A.__webglTexture,a.TEXTURE0+z);const _e=n.get(se);if(se.version!==_e.__version||Q===!0){t.activeTexture(a.TEXTURE0+z),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.NONE);const fe=b(M)&&x(M.image)===!1;let Z=_(M.image,fe,!1,u);Z=Re(M,Z);const I=x(Z)||s,ie=i.convert(M.format,M.colorSpace);let pe=i.convert(M.type),ae=N(M.internalFormat,ie,pe,M.colorSpace,M.isVideoTexture);$(me,M,I);let ve;const Le=M.mipmaps,ke=s&&M.isVideoTexture!==!0,O=_e.__version===void 0||Q===!0,ue=y(M,Z,I);if(M.isDepthTexture)ae=a.DEPTH_COMPONENT,s?M.type===Gn?ae=a.DEPTH_COMPONENT32F:M.type===zn?ae=a.DEPTH_COMPONENT24:M.type===ei?ae=a.DEPTH24_STENCIL8:ae=a.DEPTH_COMPONENT16:M.type===Gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ti&&ae===a.DEPTH_COMPONENT&&M.type!==Qs&&M.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=zn,pe=i.convert(M.type)),M.format===Xi&&ae===a.DEPTH_COMPONENT&&(ae=a.DEPTH_STENCIL,M.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ei,pe=i.convert(M.type))),O&&(ke?t.texStorage2D(a.TEXTURE_2D,1,ae,Z.width,Z.height):t.texImage2D(a.TEXTURE_2D,0,ae,Z.width,Z.height,0,ie,pe,null));else if(M.isDataTexture)if(Le.length>0&&I){ke&&O&&t.texStorage2D(a.TEXTURE_2D,ue,ae,Le[0].width,Le[0].height);for(let J=0,Me=Le.length;J<Me;J++)ve=Le[J],ke?t.texSubImage2D(a.TEXTURE_2D,J,0,0,ve.width,ve.height,ie,pe,ve.data):t.texImage2D(a.TEXTURE_2D,J,ae,ve.width,ve.height,0,ie,pe,ve.data);M.generateMipmaps=!1}else ke?(O&&t.texStorage2D(a.TEXTURE_2D,ue,ae,Z.width,Z.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,Z.width,Z.height,ie,pe,Z.data)):t.texImage2D(a.TEXTURE_2D,0,ae,Z.width,Z.height,0,ie,pe,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&O&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ue,ae,Le[0].width,Le[0].height,Z.depth);for(let J=0,Me=Le.length;J<Me;J++)ve=Le[J],M.format!==on?ie!==null?ke?t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,J,0,0,0,ve.width,ve.height,Z.depth,ie,ve.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,J,ae,ve.width,ve.height,Z.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(a.TEXTURE_2D_ARRAY,J,0,0,0,ve.width,ve.height,Z.depth,ie,pe,ve.data):t.texImage3D(a.TEXTURE_2D_ARRAY,J,ae,ve.width,ve.height,Z.depth,0,ie,pe,ve.data)}else{ke&&O&&t.texStorage2D(a.TEXTURE_2D,ue,ae,Le[0].width,Le[0].height);for(let J=0,Me=Le.length;J<Me;J++)ve=Le[J],M.format!==on?ie!==null?ke?t.compressedTexSubImage2D(a.TEXTURE_2D,J,0,0,ve.width,ve.height,ie,ve.data):t.compressedTexImage2D(a.TEXTURE_2D,J,ae,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(a.TEXTURE_2D,J,0,0,ve.width,ve.height,ie,pe,ve.data):t.texImage2D(a.TEXTURE_2D,J,ae,ve.width,ve.height,0,ie,pe,ve.data)}else if(M.isDataArrayTexture)ke?(O&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ue,ae,Z.width,Z.height,Z.depth),t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ie,pe,Z.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,ae,Z.width,Z.height,Z.depth,0,ie,pe,Z.data);else if(M.isData3DTexture)ke?(O&&t.texStorage3D(a.TEXTURE_3D,ue,ae,Z.width,Z.height,Z.depth),t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ie,pe,Z.data)):t.texImage3D(a.TEXTURE_3D,0,ae,Z.width,Z.height,Z.depth,0,ie,pe,Z.data);else if(M.isFramebufferTexture){if(O)if(ke)t.texStorage2D(a.TEXTURE_2D,ue,ae,Z.width,Z.height);else{let J=Z.width,Me=Z.height;for(let ge=0;ge<ue;ge++)t.texImage2D(a.TEXTURE_2D,ge,ae,J,Me,0,ie,pe,null),J>>=1,Me>>=1}}else if(Le.length>0&&I){ke&&O&&t.texStorage2D(a.TEXTURE_2D,ue,ae,Le[0].width,Le[0].height);for(let J=0,Me=Le.length;J<Me;J++)ve=Le[J],ke?t.texSubImage2D(a.TEXTURE_2D,J,0,0,ie,pe,ve):t.texImage2D(a.TEXTURE_2D,J,ae,ie,pe,ve);M.generateMipmaps=!1}else ke?(O&&t.texStorage2D(a.TEXTURE_2D,ue,ae,Z.width,Z.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,ie,pe,Z)):t.texImage2D(a.TEXTURE_2D,0,ae,ie,pe,Z);C(M,I)&&E(me),_e.__version=se.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ce(A,M,z){if(M.image.length!==6)return;const me=ne(A,M),Q=M.source;t.bindTexture(a.TEXTURE_CUBE_MAP,A.__webglTexture,a.TEXTURE0+z);const se=n.get(Q);if(Q.version!==se.__version||me===!0){t.activeTexture(a.TEXTURE0+z),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.NONE);const _e=M.isCompressedTexture||M.image[0].isCompressedTexture,fe=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let J=0;J<6;J++)!_e&&!fe?Z[J]=_(M.image[J],!1,!0,c):Z[J]=fe?M.image[J].image:M.image[J],Z[J]=Re(M,Z[J]);const I=Z[0],ie=x(I)||s,pe=i.convert(M.format,M.colorSpace),ae=i.convert(M.type),ve=N(M.internalFormat,pe,ae,M.colorSpace),Le=s&&M.isVideoTexture!==!0,ke=se.__version===void 0||me===!0;let O=y(M,I,ie);$(a.TEXTURE_CUBE_MAP,M,ie);let ue;if(_e){Le&&ke&&t.texStorage2D(a.TEXTURE_CUBE_MAP,O,ve,I.width,I.height);for(let J=0;J<6;J++){ue=Z[J].mipmaps;for(let Me=0;Me<ue.length;Me++){const ge=ue[Me];M.format!==on?pe!==null?Le?t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me,0,0,ge.width,ge.height,pe,ge.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me,ve,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me,0,0,ge.width,ge.height,pe,ae,ge.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me,ve,ge.width,ge.height,0,pe,ae,ge.data)}}}else{ue=M.mipmaps,Le&&ke&&(ue.length>0&&O++,t.texStorage2D(a.TEXTURE_CUBE_MAP,O,ve,Z[0].width,Z[0].height));for(let J=0;J<6;J++)if(fe){Le?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Z[J].width,Z[J].height,pe,ae,Z[J].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ve,Z[J].width,Z[J].height,0,pe,ae,Z[J].data);for(let Me=0;Me<ue.length;Me++){const Pe=ue[Me].image[J].image;Le?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me+1,0,0,Pe.width,Pe.height,pe,ae,Pe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me+1,ve,Pe.width,Pe.height,0,pe,ae,Pe.data)}}else{Le?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pe,ae,Z[J]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ve,pe,ae,Z[J]);for(let Me=0;Me<ue.length;Me++){const ge=ue[Me];Le?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me+1,0,0,pe,ae,ge.image[J]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me+1,ve,pe,ae,ge.image[J])}}}C(M,ie)&&E(a.TEXTURE_CUBE_MAP),se.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function he(A,M,z,me,Q,se){const _e=i.convert(z.format,z.colorSpace),fe=i.convert(z.type),Z=N(z.internalFormat,_e,fe,z.colorSpace);if(!n.get(M).__hasExternalTextures){const ie=Math.max(1,M.width>>se),pe=Math.max(1,M.height>>se);Q===a.TEXTURE_3D||Q===a.TEXTURE_2D_ARRAY?t.texImage3D(Q,se,Z,ie,pe,M.depth,0,_e,fe,null):t.texImage2D(Q,se,Z,ie,pe,0,_e,fe,null)}t.bindFramebuffer(a.FRAMEBUFFER,A),Te(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,Q,n.get(z).__webglTexture,0,Se(M)):(Q===a.TEXTURE_2D||Q>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,me,Q,n.get(z).__webglTexture,se),t.bindFramebuffer(a.FRAMEBUFFER,null)}function F(A,M,z){if(a.bindRenderbuffer(a.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let me=a.DEPTH_COMPONENT16;if(z||Te(M)){const Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Gn?me=a.DEPTH_COMPONENT32F:Q.type===zn&&(me=a.DEPTH_COMPONENT24));const se=Se(M);Te(M)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,se,me,M.width,M.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,se,me,M.width,M.height)}else a.renderbufferStorage(a.RENDERBUFFER,me,M.width,M.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const me=Se(M);z&&Te(M)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,me,a.DEPTH24_STENCIL8,M.width,M.height):Te(M)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,me,a.DEPTH24_STENCIL8,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,A)}else{const me=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<me.length;Q++){const se=me[Q],_e=i.convert(se.format,se.colorSpace),fe=i.convert(se.type),Z=N(se.internalFormat,_e,fe,se.colorSpace),I=Se(M);z&&Te(M)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,I,Z,M.width,M.height):Te(M)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,I,Z,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,Z,M.width,M.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Fe(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const me=n.get(M.depthTexture).__webglTexture,Q=Se(M);if(M.depthTexture.format===ti)Te(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,me,0,Q):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,me,0);else if(M.depthTexture.format===Xi)Te(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,me,0,Q):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function be(A){const M=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Fe(M.__webglFramebuffer,A)}else if(z){M.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[me]),M.__webglDepthbuffer[me]=a.createRenderbuffer(),F(M.__webglDepthbuffer[me],A,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=a.createRenderbuffer(),F(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function Ae(A,M,z){const me=n.get(A);M!==void 0&&he(me.__webglFramebuffer,A,A.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),z!==void 0&&be(A)}function Ee(A){const M=A.texture,z=n.get(A),me=n.get(M);A.addEventListener("dispose",L),A.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=a.createTexture()),me.__version=M.version,o.memory.textures++);const Q=A.isWebGLCubeRenderTarget===!0,se=A.isWebGLMultipleRenderTargets===!0,_e=x(A)||s;if(Q){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(s&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let Z=0;Z<M.mipmaps.length;Z++)z.__webglFramebuffer[fe][Z]=a.createFramebuffer()}else z.__webglFramebuffer[fe]=a.createFramebuffer()}else{if(s&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)z.__webglFramebuffer[fe]=a.createFramebuffer()}else z.__webglFramebuffer=a.createFramebuffer();if(se)if(r.drawBuffers){const fe=A.texture;for(let Z=0,I=fe.length;Z<I;Z++){const ie=n.get(fe[Z]);ie.__webglTexture===void 0&&(ie.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&A.samples>0&&Te(A)===!1){const fe=se?M:[M];z.__webglMultisampledFramebuffer=a.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<fe.length;Z++){const I=fe[Z];z.__webglColorRenderbuffer[Z]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);const ie=i.convert(I.format,I.colorSpace),pe=i.convert(I.type),ae=N(I.internalFormat,ie,pe,I.colorSpace,A.isXRRenderTarget===!0),ve=Se(A);a.renderbufferStorageMultisample(a.RENDERBUFFER,ve,ae,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Z,a.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}a.bindRenderbuffer(a.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=a.createRenderbuffer(),F(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Q){t.bindTexture(a.TEXTURE_CUBE_MAP,me.__webglTexture),$(a.TEXTURE_CUBE_MAP,M,_e);for(let fe=0;fe<6;fe++)if(s&&M.mipmaps&&M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)he(z.__webglFramebuffer[fe][Z],A,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Z);else he(z.__webglFramebuffer[fe],A,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);C(M,_e)&&E(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const fe=A.texture;for(let Z=0,I=fe.length;Z<I;Z++){const ie=fe[Z],pe=n.get(ie);t.bindTexture(a.TEXTURE_2D,pe.__webglTexture),$(a.TEXTURE_2D,ie,_e),he(z.__webglFramebuffer,A,ie,a.COLOR_ATTACHMENT0+Z,a.TEXTURE_2D,0),C(ie,_e)&&E(a.TEXTURE_2D)}t.unbindTexture()}else{let fe=a.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(s?fe=A.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,me.__webglTexture),$(fe,M,_e),s&&M.mipmaps&&M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)he(z.__webglFramebuffer[Z],A,M,a.COLOR_ATTACHMENT0,fe,Z);else he(z.__webglFramebuffer,A,M,a.COLOR_ATTACHMENT0,fe,0);C(M,_e)&&E(fe),t.unbindTexture()}A.depthBuffer&&be(A)}function Ue(A){const M=x(A)||s,z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let me=0,Q=z.length;me<Q;me++){const se=z[me];if(C(se,M)){const _e=A.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,fe=n.get(se).__webglTexture;t.bindTexture(_e,fe),E(_e),t.unbindTexture()}}}function de(A){if(s&&A.samples>0&&Te(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],z=A.width,me=A.height;let Q=a.COLOR_BUFFER_BIT;const se=[],_e=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=n.get(A),Z=A.isWebGLMultipleRenderTargets===!0;if(Z)for(let I=0;I<M.length;I++)t.bindFramebuffer(a.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+I,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+I,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let I=0;I<M.length;I++){se.push(a.COLOR_ATTACHMENT0+I),A.depthBuffer&&se.push(_e);const ie=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(ie===!1&&(A.depthBuffer&&(Q|=a.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Q|=a.STENCIL_BUFFER_BIT)),Z&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,fe.__webglColorRenderbuffer[I]),ie===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[_e]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[_e])),Z){const pe=n.get(M[I]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,pe,0)}a.blitFramebuffer(0,0,z,me,0,0,z,me,Q,a.NEAREST),d&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Z)for(let I=0;I<M.length;I++){t.bindFramebuffer(a.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+I,a.RENDERBUFFER,fe.__webglColorRenderbuffer[I]);const ie=n.get(M[I]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+I,a.TEXTURE_2D,ie,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Se(A){return Math.min(f,A.samples)}function Te(A){const M=n.get(A);return s&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function oe(A){const M=o.render.frame;g.get(A)!==M&&(g.set(A,M),A.update())}function Re(A,M){const z=A.colorSpace,me=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Hs||z!==mn&&z!==ii&&(z===nt||z===Da?s===!1?e.has("EXT_sRGB")===!0&&me===on?(A.format=Hs,A.minFilter=kt,A.generateMipmaps=!1):M=Wc.sRGBToLinear(M):(me!==on||Q!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}this.allocateTextureUnit=q,this.resetTextureUnits=j,this.setTexture2D=B,this.setTexture2DArray=w,this.setTexture3D=R,this.setTextureCube=G,this.rebindTextures=Ae,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Te}const Kg=0,ht=1;function Jg(a,e,t){const n=t.isWebGL2;function r(i,o=ii){let s;const l=o===nt||o===Da?ht:Kg;if(i===Vn)return a.UNSIGNED_BYTE;if(i===Nc)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Oc)return a.UNSIGNED_SHORT_5_5_5_1;if(i===vh)return a.BYTE;if(i===_h)return a.SHORT;if(i===Qs)return a.UNSIGNED_SHORT;if(i===Fc)return a.INT;if(i===zn)return a.UNSIGNED_INT;if(i===Gn)return a.FLOAT;if(i===Cn)return n?a.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(i===xh)return a.ALPHA;if(i===on)return a.RGBA;if(i===yh)return a.LUMINANCE;if(i===Sh)return a.LUMINANCE_ALPHA;if(i===ti)return a.DEPTH_COMPONENT;if(i===Xi)return a.DEPTH_STENCIL;if(i===Hs)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(i===Mh)return a.RED;if(i===Bc)return a.RED_INTEGER;if(i===bh)return a.RG;if(i===kc)return a.RG_INTEGER;if(i===zc)return a.RGBA_INTEGER;if(i===Qa||i===es||i===ts||i===ns)if(l===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ts)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ns)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ko||i===zo||i===Go||i===Ho)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ko)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Go)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ho)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eh)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Vo||i===Wo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vo)return l===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wo)return l===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xo||i===Yo||i===jo||i===qo||i===Zo||i===Ko||i===Jo||i===$o||i===Qo||i===el||i===tl||i===nl||i===il||i===rl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xo)return l===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yo)return l===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jo)return l===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qo)return l===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zo)return l===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ko)return l===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jo)return l===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$o)return l===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qo)return l===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===el)return l===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tl)return l===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nl)return l===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===il)return l===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rl)return l===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===is||i===al||i===sl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===is)return l===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===al)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Th||i===ol||i===ll||i===cl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===is)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ol)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ll)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ei?n?a.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[i]!==void 0?a[i]:null}return{convert:r}}class $g extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class da extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qg={type:"move"};class Ts{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Qg)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new da;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ev extends Pt{constructor(e,t,n,r,i,o,s,l,c,u){if(u=u!==void 0?u:ti,u!==ti&&u!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ti&&(n=zn),n===void 0&&u===Xi&&(n=ei),super(null,r,i,o,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tv extends si{constructor(e,t){super();const n=this;let r=null,i=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const v=t.getContextAttributes();let m=null,p=null;const S=[],_=[],x=new Wt;x.layers.enable(1),x.viewport=new dt;const b=new Wt;b.layers.enable(2),b.viewport=new dt;const C=[x,b],E=new $g;E.layers.enable(1),E.layers.enable(2);let N=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let R=S[w];return R===void 0&&(R=new Ts,S[w]=R),R.getTargetRaySpace()},this.getControllerGrip=function(w){let R=S[w];return R===void 0&&(R=new Ts,S[w]=R),R.getGripSpace()},this.getHand=function(w){let R=S[w];return R===void 0&&(R=new Ts,S[w]=R),R.getHandSpace()};function T(w){const R=_.indexOf(w.inputSource);if(R===-1)return;const G=S[R];G!==void 0&&(G.update(w.inputSource,w.frame,c||o),G.dispatchEvent({type:w.type,data:w.inputSource}))}function K(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",L);for(let w=0;w<S.length;w++){const R=_[w];R!==null&&(_[w]=null,S[w].disconnect(R))}N=null,y=null,e.setRenderTarget(m),d=null,h=null,f=null,r=null,p=null,B.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){i=w,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){s=w,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(w){c=w},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(w){if(r=w,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",K),r.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const R={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(r,t,R),r.updateRenderState({baseLayer:d}),p=new ln(d.framebufferWidth,d.framebufferHeight,{format:on,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let R=null,G=null,V=null;v.depth&&(V=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,R=v.stencil?Xi:ti,G=v.stencil?ei:zn);const H={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:i};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(H),r.updateRenderState({layers:[h]}),p=new ln(h.textureWidth,h.textureHeight,{format:on,type:Vn,depthTexture:new ev(h.textureWidth,h.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const re=e.properties.get(p);re.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),B.setContext(r),B.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(w){for(let R=0;R<w.removed.length;R++){const G=w.removed[R],V=_.indexOf(G);V>=0&&(_[V]=null,S[V].disconnect(G))}for(let R=0;R<w.added.length;R++){const G=w.added[R];let V=_.indexOf(G);if(V===-1){for(let re=0;re<S.length;re++)if(re>=_.length){_.push(G),V=re;break}else if(_[re]===null){_[re]=G,V=re;break}if(V===-1)break}const H=S[V];H&&H.connect(G)}}const U=new Y,D=new Y;function k(w,R,G){U.setFromMatrixPosition(R.matrixWorld),D.setFromMatrixPosition(G.matrixWorld);const V=U.distanceTo(D),H=R.projectionMatrix.elements,re=G.projectionMatrix.elements,$=H[14]/(H[10]-1),ne=H[14]/(H[10]+1),xe=(H[9]+1)/H[5],Ce=(H[9]-1)/H[5],he=(H[8]-1)/H[0],F=(re[8]+1)/re[0],Fe=$*he,be=$*F,Ae=V/(-he+F),Ee=Ae*-he;R.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(Ee),w.translateZ(Ae),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert();const Ue=$+Ae,de=ne+Ae,Se=Fe-Ee,Te=be+(V-Ee),oe=xe*ne/de*Ue,Re=Ce*ne/de*Ue;w.projectionMatrix.makePerspective(Se,Te,oe,Re,Ue,de),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}function W(w,R){R===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(R.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(r===null)return;E.near=b.near=x.near=w.near,E.far=b.far=x.far=w.far,(N!==E.near||y!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,y=E.far);const R=w.parent,G=E.cameras;W(E,R);for(let V=0;V<G.length;V++)W(G[V],R);G.length===2?k(E,x,b):E.projectionMatrix.copy(x.projectionMatrix),j(w,E,R)};function j(w,R,G){G===null?w.matrix.copy(R.matrixWorld):(w.matrix.copy(G.matrixWorld),w.matrix.invert(),w.matrix.multiply(R.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(R.projectionMatrix),w.projectionMatrixInverse.copy(R.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=wr*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(w){l=w,h!==null&&(h.fixedFoveation=w),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=w)};let q=null;function X(w,R){if(u=R.getViewerPose(c||o),g=R,u!==null){const G=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let V=!1;G.length!==E.cameras.length&&(E.cameras.length=0,V=!0);for(let H=0;H<G.length;H++){const re=G[H];let $=null;if(d!==null)$=d.getViewport(re);else{const xe=f.getViewSubImage(h,re);$=xe.viewport,H===0&&(e.setRenderTargetTextures(p,xe.colorTexture,h.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(p))}let ne=C[H];ne===void 0&&(ne=new Wt,ne.layers.enable(H),ne.viewport=new dt,C[H]=ne),ne.matrix.fromArray(re.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(re.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set($.x,$.y,$.width,$.height),H===0&&(E.matrix.copy(ne.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),V===!0&&E.cameras.push(ne)}}for(let G=0;G<S.length;G++){const V=_[G],H=S[G];V!==null&&H!==void 0&&H.update(V,R,c||o)}q&&q(w,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),g=null}const B=new $c;B.setAnimationLoop(X),this.setAnimationLoop=function(w){q=w},this.dispose=function(){}}}function nv(a,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kc(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),f(m,p)):p.isMeshPhongMaterial?(i(m,p),u(m,p)):p.isMeshStandardMaterial?(i(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(i(m,p),g(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),v(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?l(m,p,S,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===It&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===It&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=a._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===It&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function iv(a,e,t,n){let r={},i={},o=[];const s=t.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,_){const x=_.program;n.uniformBlockBinding(S,x)}function c(S,_){let x=r[S.id];x===void 0&&(g(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",m));const b=_.program;n.updateUBOMapping(S,b);const C=e.render.frame;i[S.id]!==C&&(h(S),i[S.id]=C)}function u(S){const _=f();S.__bindingPointIndex=_;const x=a.createBuffer(),b=S.__size,C=S.usage;return a.bindBuffer(a.UNIFORM_BUFFER,x),a.bufferData(a.UNIFORM_BUFFER,b,C),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,_,x),x}function f(){for(let S=0;S<s;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const _=r[S.id],x=S.uniforms,b=S.__cache;a.bindBuffer(a.UNIFORM_BUFFER,_);for(let C=0,E=x.length;C<E;C++){const N=x[C];if(d(N,C,b)===!0){const y=N.__offset,T=Array.isArray(N.value)?N.value:[N.value];let K=0;for(let L=0;L<T.length;L++){const U=T[L],D=v(U);typeof U=="number"?(N.__data[0]=U,a.bufferSubData(a.UNIFORM_BUFFER,y+K,N.__data)):U.isMatrix3?(N.__data[0]=U.elements[0],N.__data[1]=U.elements[1],N.__data[2]=U.elements[2],N.__data[3]=U.elements[0],N.__data[4]=U.elements[3],N.__data[5]=U.elements[4],N.__data[6]=U.elements[5],N.__data[7]=U.elements[0],N.__data[8]=U.elements[6],N.__data[9]=U.elements[7],N.__data[10]=U.elements[8],N.__data[11]=U.elements[0]):(U.toArray(N.__data,K),K+=D.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,y,N.__data)}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(S,_,x){const b=S.value;if(x[_]===void 0){if(typeof b=="number")x[_]=b;else{const C=Array.isArray(b)?b:[b],E=[];for(let N=0;N<C.length;N++)E.push(C[N].clone());x[_]=E}return!0}else if(typeof b=="number"){if(x[_]!==b)return x[_]=b,!0}else{const C=Array.isArray(x[_])?x[_]:[x[_]],E=Array.isArray(b)?b:[b];for(let N=0;N<C.length;N++){const y=C[N];if(y.equals(E[N])===!1)return y.copy(E[N]),!0}}return!1}function g(S){const _=S.uniforms;let x=0;const b=16;let C=0;for(let E=0,N=_.length;E<N;E++){const y=_[E],T={boundary:0,storage:0},K=Array.isArray(y.value)?y.value:[y.value];for(let L=0,U=K.length;L<U;L++){const D=K[L],k=v(D);T.boundary+=k.boundary,T.storage+=k.storage}if(y.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=x,E>0){C=x%b;const L=b-C;C!==0&&L-T.boundary<0&&(x+=b-C,y.__offset=x)}x+=T.storage}return C=x%b,C>0&&(x+=b-C),S.__size=x,S.__cache={},this}function v(S){const _={boundary:0,storage:0};return typeof S=="number"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function m(S){const _=S.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),a.deleteBuffer(r[_.id]),delete r[_.id],delete i[_.id]}function p(){for(const S in r)a.deleteBuffer(r[S]);o=[],r={},i={}}return{bind:l,update:c,dispose:p}}class su{constructor(e={}){const{canvas:t=$h(),context:n=null,depth:r=!0,stencil:i=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=nt,this._useLegacyLights=!1,this.toneMapping=Hn,this.toneMappingExposure=1;const _=this;let x=!1,b=0,C=0,E=null,N=-1,y=null;const T=new dt,K=new dt;let L=null;const U=new Xe(0);let D=0,k=t.width,W=t.height,j=1,q=null,X=null;const B=new dt(0,0,k,W),w=new dt(0,0,k,W);let R=!1;const G=new ro;let V=!1,H=!1,re=null;const $=new at,ne=new De,xe=new Y,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return E===null?j:1}let F=n;function Fe(P,ee){for(let ce=0;ce<P.length;ce++){const te=P[ce],le=t.getContext(te,ee);if(le!==null)return le}return null}try{const P={alpha:!0,depth:r,stencil:i,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$s}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",Me,!1),F===null){const ee=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&ee.shift(),F=Fe(ee,P),F===null)throw Fe(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let be,Ae,Ee,Ue,de,Se,Te,oe,Re,A,M,z,me,Q,se,_e,fe,Z,I,ie,pe,ae,ve,Le;function ke(){be=new mm(F),Ae=new cm(F,be,e),be.init(Ae),ae=new Jg(F,be,Ae),Ee=new qg(F,be,Ae),Ue=new _m(F),de=new Ng,Se=new Zg(F,be,Ee,de,Ae,ae,Ue),Te=new hm(_),oe=new pm(_),Re=new Cf(F,Ae),ve=new om(F,be,Re,Ae),A=new gm(F,Re,Ue,ve),M=new Mm(F,A,Re,Ue),I=new Sm(F,Ae,Se),_e=new um(de),z=new Fg(_,Te,oe,be,Ae,ve,_e),me=new nv(_,de),Q=new Bg,se=new Wg(be,Ae),Z=new sm(_,Te,oe,Ee,M,h,l),fe=new jg(_,M,Ae),Le=new iv(F,Ue,Ae,Ee),ie=new lm(F,be,Ue,Ae),pe=new vm(F,be,Ue,Ae),Ue.programs=z.programs,_.capabilities=Ae,_.extensions=be,_.properties=de,_.renderLists=Q,_.shadowMap=fe,_.state=Ee,_.info=Ue}ke();const O=new tv(_,F);this.xr=O,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const P=be.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=be.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(P){P!==void 0&&(j=P,this.setSize(k,W,!1))},this.getSize=function(P){return P.set(k,W)},this.setSize=function(P,ee,ce=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,W=ee,t.width=Math.floor(P*j),t.height=Math.floor(ee*j),ce===!0&&(t.style.width=P+"px",t.style.height=ee+"px"),this.setViewport(0,0,P,ee)},this.getDrawingBufferSize=function(P){return P.set(k*j,W*j).floor()},this.setDrawingBufferSize=function(P,ee,ce){k=P,W=ee,j=ce,t.width=Math.floor(P*ce),t.height=Math.floor(ee*ce),this.setViewport(0,0,P,ee)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(B)},this.setViewport=function(P,ee,ce,te){P.isVector4?B.set(P.x,P.y,P.z,P.w):B.set(P,ee,ce,te),Ee.viewport(T.copy(B).multiplyScalar(j).floor())},this.getScissor=function(P){return P.copy(w)},this.setScissor=function(P,ee,ce,te){P.isVector4?w.set(P.x,P.y,P.z,P.w):w.set(P,ee,ce,te),Ee.scissor(K.copy(w).multiplyScalar(j).floor())},this.getScissorTest=function(){return R},this.setScissorTest=function(P){Ee.setScissorTest(R=P)},this.setOpaqueSort=function(P){q=P},this.setTransparentSort=function(P){X=P},this.getClearColor=function(P){return P.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(P=!0,ee=!0,ce=!0){let te=0;if(P){let le=!1;if(E!==null){const Ie=E.texture.format;le=Ie===zc||Ie===kc||Ie===Bc}if(le){const Ie=E.texture.type,Oe=Ie===Vn||Ie===zn||Ie===Qs||Ie===ei||Ie===Nc||Ie===Oc,He=Z.getClearColor(),Ve=Z.getClearAlpha(),Ye=He.r,ye=He.g,We=He.b;Oe?(d[0]=Ye,d[1]=ye,d[2]=We,d[3]=Ve,F.clearBufferuiv(F.COLOR,0,d)):(g[0]=Ye,g[1]=ye,g[2]=We,g[3]=Ve,F.clearBufferiv(F.COLOR,0,g))}else te|=F.COLOR_BUFFER_BIT}ee&&(te|=F.DEPTH_BUFFER_BIT),ce&&(te|=F.STENCIL_BUFFER_BIT),F.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Q.dispose(),se.dispose(),de.dispose(),Te.dispose(),oe.dispose(),M.dispose(),ve.dispose(),Le.dispose(),z.dispose(),O.dispose(),O.removeEventListener("sessionstart",Ge),O.removeEventListener("sessionend",Qe),re&&(re.dispose(),re=null),Ke.stop()};function ue(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const P=Ue.autoReset,ee=fe.enabled,ce=fe.autoUpdate,te=fe.needsUpdate,le=fe.type;ke(),Ue.autoReset=P,fe.enabled=ee,fe.autoUpdate=ce,fe.needsUpdate=te,fe.type=le}function Me(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ge(P){const ee=P.target;ee.removeEventListener("dispose",ge),Pe(ee)}function Pe(P){ze(P),de.remove(P)}function ze(P){const ee=de.get(P).programs;ee!==void 0&&(ee.forEach(function(ce){z.releaseProgram(ce)}),P.isShaderMaterial&&z.releaseShaderCache(P))}this.renderBufferDirect=function(P,ee,ce,te,le,Ie){ee===null&&(ee=Ce);const Oe=le.isMesh&&le.matrixWorld.determinant()<0,He=yt(P,ee,ce,te,le);Ee.setMaterial(te,Oe);let Ve=ce.index,Ye=1;if(te.wireframe===!0){if(Ve=A.getWireframeAttribute(ce),Ve===void 0)return;Ye=2}const ye=ce.drawRange,We=ce.attributes.position;let et=ye.start*Ye,Je=(ye.start+ye.count)*Ye;Ie!==null&&(et=Math.max(et,Ie.start*Ye),Je=Math.min(Je,(Ie.start+Ie.count)*Ye)),Ve!==null?(et=Math.max(et,0),Je=Math.min(Je,Ve.count)):We!=null&&(et=Math.max(et,0),Je=Math.min(Je,We.count));const St=Je-et;if(St<0||St===1/0)return;ve.setup(le,te,He,ce,Ve);let jt,tt=ie;if(Ve!==null&&(jt=Re.get(Ve),tt=pe,tt.setIndex(jt)),le.isMesh)te.wireframe===!0?(Ee.setLineWidth(te.wireframeLinewidth*he()),tt.setMode(F.LINES)):tt.setMode(F.TRIANGLES);else if(le.isLine){let je=te.linewidth;je===void 0&&(je=1),Ee.setLineWidth(je*he()),le.isLineSegments?tt.setMode(F.LINES):le.isLineLoop?tt.setMode(F.LINE_LOOP):tt.setMode(F.LINE_STRIP)}else le.isPoints?tt.setMode(F.POINTS):le.isSprite&&tt.setMode(F.TRIANGLES);if(le.isInstancedMesh)tt.renderInstances(et,St,le.count);else if(ce.isInstancedBufferGeometry){const je=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Dn=Math.min(ce.instanceCount,je);tt.renderInstances(et,St,Dn)}else tt.render(et,St)},this.compile=function(P,ee){function ce(te,le,Ie){te.transparent===!0&&te.side===Tt&&te.forceSinglePass===!1?(te.side=It,te.needsUpdate=!0,Xt(te,le,Ie),te.side=Pn,te.needsUpdate=!0,Xt(te,le,Ie),te.side=Tt):Xt(te,le,Ie)}m=se.get(P),m.init(),S.push(m),P.traverseVisible(function(te){te.isLight&&te.layers.test(ee.layers)&&(m.pushLight(te),te.castShadow&&m.pushShadow(te))}),m.setupLights(_._useLegacyLights),P.traverse(function(te){const le=te.material;if(le)if(Array.isArray(le))for(let Ie=0;Ie<le.length;Ie++){const Oe=le[Ie];ce(Oe,P,te)}else ce(le,P,te)}),S.pop(),m=null};let Be=null;function Ne(P){Be&&Be(P)}function Ge(){Ke.stop()}function Qe(){Ke.start()}const Ke=new $c;Ke.setAnimationLoop(Ne),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(P){Be=P,O.setAnimationLoop(P),P===null?Ke.stop():Ke.start()},O.addEventListener("sessionstart",Ge),O.addEventListener("sessionend",Qe),this.render=function(P,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(ee),ee=O.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,ee,E),m=se.get(P,S.length),m.init(),S.push(m),$.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),G.setFromProjectionMatrix($),H=this.localClippingEnabled,V=_e.init(this.clippingPlanes,H),v=Q.get(P,p.length),v.init(),p.push(v),st(P,ee,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(q,X),this.info.render.frame++,V===!0&&_e.beginShadows();const ce=m.state.shadowsArray;if(fe.render(ce,P,ee),V===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(v,P),m.setupLights(_._useLegacyLights),ee.isArrayCamera){const te=ee.cameras;for(let le=0,Ie=te.length;le<Ie;le++){const Oe=te[le];Ft(v,P,Oe,Oe.viewport)}}else Ft(v,P,ee);E!==null&&(Se.updateMultisampleRenderTarget(E),Se.updateRenderTargetMipmap(E)),P.isScene===!0&&P.onAfterRender(_,P,ee),ve.resetDefaultState(),N=-1,y=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function st(P,ee,ce,te){if(P.visible===!1)return;if(P.layers.test(ee.layers)){if(P.isGroup)ce=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(ee);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||G.intersectsSprite(P)){te&&xe.setFromMatrixPosition(P.matrixWorld).applyMatrix4($);const Oe=M.update(P),He=P.material;He.visible&&v.push(P,Oe,He,ce,xe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||G.intersectsObject(P))){const Oe=M.update(P),He=P.material;if(te&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),xe.copy(P.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),xe.copy(Oe.boundingSphere.center)),xe.applyMatrix4(P.matrixWorld).applyMatrix4($)),Array.isArray(He)){const Ve=Oe.groups;for(let Ye=0,ye=Ve.length;Ye<ye;Ye++){const We=Ve[Ye],et=He[We.materialIndex];et&&et.visible&&v.push(P,Oe,et,ce,xe.z,We)}}else He.visible&&v.push(P,Oe,He,ce,xe.z,null)}}const Ie=P.children;for(let Oe=0,He=Ie.length;Oe<He;Oe++)st(Ie[Oe],ee,ce,te)}function Ft(P,ee,ce,te){const le=P.opaque,Ie=P.transmissive,Oe=P.transparent;m.setupLightsView(ce),V===!0&&_e.setGlobalState(_.clippingPlanes,ce),Ie.length>0&&cn(le,Ie,ee,ce),te&&Ee.viewport(T.copy(te)),le.length>0&&Nt(le,ee,ce),Ie.length>0&&Nt(Ie,ee,ce),Oe.length>0&&Nt(Oe,ee,ce),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function cn(P,ee,ce,te){const le=Ae.isWebGL2;re===null&&(re=new ln(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Cn:Vn,minFilter:Ar,samples:le?4:0})),_.getDrawingBufferSize(ne),le?re.setSize(ne.x,ne.y):re.setSize(Ca(ne.x),Ca(ne.y));const Ie=_.getRenderTarget();_.setRenderTarget(re),_.getClearColor(U),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();const Oe=_.toneMapping;_.toneMapping=Hn,Nt(P,ce,te),Se.updateMultisampleRenderTarget(re),Se.updateRenderTargetMipmap(re);let He=!1;for(let Ve=0,Ye=ee.length;Ve<Ye;Ve++){const ye=ee[Ve],We=ye.object,et=ye.geometry,Je=ye.material,St=ye.group;if(Je.side===Tt&&We.layers.test(te.layers)){const jt=Je.side;Je.side=It,Je.needsUpdate=!0,Jt(We,ce,te,et,Je,St),Je.side=jt,Je.needsUpdate=!0,He=!0}}He===!0&&(Se.updateMultisampleRenderTarget(re),Se.updateRenderTargetMipmap(re)),_.setRenderTarget(Ie),_.setClearColor(U,D),_.toneMapping=Oe}function Nt(P,ee,ce){const te=ee.isScene===!0?ee.overrideMaterial:null;for(let le=0,Ie=P.length;le<Ie;le++){const Oe=P[le],He=Oe.object,Ve=Oe.geometry,Ye=te===null?Oe.material:te,ye=Oe.group;He.layers.test(ce.layers)&&Jt(He,ee,ce,Ve,Ye,ye)}}function Jt(P,ee,ce,te,le,Ie){P.onBeforeRender(_,ee,ce,te,le,Ie),P.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),le.onBeforeRender(_,ee,ce,te,P,Ie),le.transparent===!0&&le.side===Tt&&le.forceSinglePass===!1?(le.side=It,le.needsUpdate=!0,_.renderBufferDirect(ce,ee,te,le,P,Ie),le.side=Pn,le.needsUpdate=!0,_.renderBufferDirect(ce,ee,te,le,P,Ie),le.side=Tt):_.renderBufferDirect(ce,ee,te,le,P,Ie),P.onAfterRender(_,ee,ce,te,le,Ie)}function Xt(P,ee,ce){ee.isScene!==!0&&(ee=Ce);const te=de.get(P),le=m.state.lights,Ie=m.state.shadowsArray,Oe=le.state.version,He=z.getParameters(P,le.state,Ie,ee,ce),Ve=z.getProgramCacheKey(He);let Ye=te.programs;te.environment=P.isMeshStandardMaterial?ee.environment:null,te.fog=ee.fog,te.envMap=(P.isMeshStandardMaterial?oe:Te).get(P.envMap||te.environment),Ye===void 0&&(P.addEventListener("dispose",ge),Ye=new Map,te.programs=Ye);let ye=Ye.get(Ve);if(ye!==void 0){if(te.currentProgram===ye&&te.lightsStateVersion===Oe)return Yt(P,He),ye}else He.uniforms=z.getUniforms(P),P.onBuild(ce,He,_),P.onBeforeCompile(He,_),ye=z.acquireProgram(He,Ve),Ye.set(Ve,ye),te.uniforms=He.uniforms;const We=te.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(We.clippingPlanes=_e.uniform),Yt(P,He),te.needsLights=kr(P),te.lightsStateVersion=Oe,te.needsLights&&(We.ambientLightColor.value=le.state.ambient,We.lightProbe.value=le.state.probe,We.directionalLights.value=le.state.directional,We.directionalLightShadows.value=le.state.directionalShadow,We.spotLights.value=le.state.spot,We.spotLightShadows.value=le.state.spotShadow,We.rectAreaLights.value=le.state.rectArea,We.ltc_1.value=le.state.rectAreaLTC1,We.ltc_2.value=le.state.rectAreaLTC2,We.pointLights.value=le.state.point,We.pointLightShadows.value=le.state.pointShadow,We.hemisphereLights.value=le.state.hemi,We.directionalShadowMap.value=le.state.directionalShadowMap,We.directionalShadowMatrix.value=le.state.directionalShadowMatrix,We.spotShadowMap.value=le.state.spotShadowMap,We.spotLightMatrix.value=le.state.spotLightMatrix,We.spotLightMap.value=le.state.spotLightMap,We.pointShadowMap.value=le.state.pointShadowMap,We.pointShadowMatrix.value=le.state.pointShadowMatrix);const et=ye.getUniforms(),Je=Ea.seqWithValue(et.seq,We);return te.currentProgram=ye,te.uniformsList=Je,ye}function Yt(P,ee){const ce=de.get(P);ce.outputColorSpace=ee.outputColorSpace,ce.instancing=ee.instancing,ce.instancingColor=ee.instancingColor,ce.skinning=ee.skinning,ce.morphTargets=ee.morphTargets,ce.morphNormals=ee.morphNormals,ce.morphColors=ee.morphColors,ce.morphTargetsCount=ee.morphTargetsCount,ce.numClippingPlanes=ee.numClippingPlanes,ce.numIntersection=ee.numClipIntersection,ce.vertexAlphas=ee.vertexAlphas,ce.vertexTangents=ee.vertexTangents,ce.toneMapping=ee.toneMapping}function yt(P,ee,ce,te,le){ee.isScene!==!0&&(ee=Ce),Se.resetTextureUnits();const Ie=ee.fog,Oe=te.isMeshStandardMaterial?ee.environment:null,He=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:mn,Ve=(te.isMeshStandardMaterial?oe:Te).get(te.envMap||Oe),Ye=te.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ye=!!ce.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!ce.morphAttributes.position,et=!!ce.morphAttributes.normal,Je=!!ce.morphAttributes.color;let St=Hn;te.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(St=_.toneMapping);const jt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,tt=jt!==void 0?jt.length:0,je=de.get(te),Dn=m.state.lights;if(V===!0&&(H===!0||P!==y)){const Mt=P===y&&te.id===N;_e.setState(te,P,Mt)}let rt=!1;te.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Dn.state.version||je.outputColorSpace!==He||le.isInstancedMesh&&je.instancing===!1||!le.isInstancedMesh&&je.instancing===!0||le.isSkinnedMesh&&je.skinning===!1||!le.isSkinnedMesh&&je.skinning===!0||le.isInstancedMesh&&je.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&je.instancingColor===!1&&le.instanceColor!==null||je.envMap!==Ve||te.fog===!0&&je.fog!==Ie||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==_e.numPlanes||je.numIntersection!==_e.numIntersection)||je.vertexAlphas!==Ye||je.vertexTangents!==ye||je.morphTargets!==We||je.morphNormals!==et||je.morphColors!==Je||je.toneMapping!==St||Ae.isWebGL2===!0&&je.morphTargetsCount!==tt)&&(rt=!0):(rt=!0,je.__version=te.version);let qt=je.currentProgram;rt===!0&&(qt=Xt(te,ee,le));let tr=!1,vn=!1,hi=!1;const lt=qt.getUniforms(),$t=je.uniforms;if(Ee.useProgram(qt.program)&&(tr=!0,vn=!0,hi=!0),te.id!==N&&(N=te.id,vn=!0),tr||y!==P){lt.setValue(F,"projectionMatrix",P.projectionMatrix),lt.setValue(F,"viewMatrix",P.matrixWorldInverse);const Mt=lt.map.cameraPosition;Mt!==void 0&&Mt.setValue(F,xe.setFromMatrixPosition(P.matrixWorld)),Ae.logarithmicDepthBuffer&&lt.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&lt.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),y!==P&&(y=P,vn=!0,hi=!0)}if(le.isSkinnedMesh){lt.setOptional(F,le,"bindMatrix"),lt.setOptional(F,le,"bindMatrixInverse");const Mt=le.skeleton;Mt&&(Ae.floatVertexTextures?(Mt.boneTexture===null&&Mt.computeBoneTexture(),lt.setValue(F,"boneTexture",Mt.boneTexture,Se),lt.setValue(F,"boneTextureSize",Mt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const un=ce.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0&&Ae.isWebGL2===!0)&&I.update(le,ce,qt),(vn||je.receiveShadow!==le.receiveShadow)&&(je.receiveShadow=le.receiveShadow,lt.setValue(F,"receiveShadow",le.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&($t.envMap.value=Ve,$t.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),vn&&(lt.setValue(F,"toneMappingExposure",_.toneMappingExposure),je.needsLights&&gn($t,hi),Ie&&te.fog===!0&&me.refreshFogUniforms($t,Ie),me.refreshMaterialUniforms($t,te,j,W,re),Ea.upload(F,je.uniformsList,$t,Se)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ea.upload(F,je.uniformsList,$t,Se),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&lt.setValue(F,"center",le.center),lt.setValue(F,"modelViewMatrix",le.modelViewMatrix),lt.setValue(F,"normalMatrix",le.normalMatrix),lt.setValue(F,"modelMatrix",le.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Mt=te.uniformsGroups;for(let Xn=0,nr=Mt.length;Xn<nr;Xn++)if(Ae.isWebGL2){const zt=Mt[Xn];Le.update(zt,qt),Le.bind(zt,qt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qt}function gn(P,ee){P.ambientLightColor.needsUpdate=ee,P.lightProbe.needsUpdate=ee,P.directionalLights.needsUpdate=ee,P.directionalLightShadows.needsUpdate=ee,P.pointLights.needsUpdate=ee,P.pointLightShadows.needsUpdate=ee,P.spotLights.needsUpdate=ee,P.spotLightShadows.needsUpdate=ee,P.rectAreaLights.needsUpdate=ee,P.hemisphereLights.needsUpdate=ee}function kr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(P,ee,ce){de.get(P.texture).__webglTexture=ee,de.get(P.depthTexture).__webglTexture=ce;const te=de.get(P);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=ce===void 0,te.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,ee){const ce=de.get(P);ce.__webglFramebuffer=ee,ce.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(P,ee=0,ce=0){E=P,b=ee,C=ce;let te=!0,le=null,Ie=!1,Oe=!1;if(P){const Ve=de.get(P);Ve.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(F.FRAMEBUFFER,null),te=!1):Ve.__webglFramebuffer===void 0?Se.setupRenderTarget(P):Ve.__hasExternalTextures&&Se.rebindTextures(P,de.get(P.texture).__webglTexture,de.get(P.depthTexture).__webglTexture);const Ye=P.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Oe=!0);const ye=de.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ye[ee])?le=ye[ee][ce]:le=ye[ee],Ie=!0):Ae.isWebGL2&&P.samples>0&&Se.useMultisampledRTT(P)===!1?le=de.get(P).__webglMultisampledFramebuffer:Array.isArray(ye)?le=ye[ce]:le=ye,T.copy(P.viewport),K.copy(P.scissor),L=P.scissorTest}else T.copy(B).multiplyScalar(j).floor(),K.copy(w).multiplyScalar(j).floor(),L=R;if(Ee.bindFramebuffer(F.FRAMEBUFFER,le)&&Ae.drawBuffers&&te&&Ee.drawBuffers(P,le),Ee.viewport(T),Ee.scissor(K),Ee.setScissorTest(L),Ie){const Ve=de.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ve.__webglTexture,ce)}else if(Oe){const Ve=de.get(P.texture),Ye=ee||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.__webglTexture,ce||0,Ye)}N=-1},this.readRenderTargetPixels=function(P,ee,ce,te,le,Ie,Oe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=de.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Oe!==void 0&&(He=He[Oe]),He){Ee.bindFramebuffer(F.FRAMEBUFFER,He);try{const Ve=P.texture,Ye=Ve.format,ye=Ve.type;if(Ye!==on&&ae.convert(Ye)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=ye===Cn&&(be.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&be.has("EXT_color_buffer_float"));if(ye!==Vn&&ae.convert(ye)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ye===Gn&&(Ae.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=P.width-te&&ce>=0&&ce<=P.height-le&&F.readPixels(ee,ce,te,le,ae.convert(Ye),ae.convert(ye),Ie)}finally{const Ve=E!==null?de.get(E).__webglFramebuffer:null;Ee.bindFramebuffer(F.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(P,ee,ce=0){const te=Math.pow(2,-ce),le=Math.floor(ee.image.width*te),Ie=Math.floor(ee.image.height*te);Se.setTexture2D(ee,0),F.copyTexSubImage2D(F.TEXTURE_2D,ce,0,0,P.x,P.y,le,Ie),Ee.unbindTexture()},this.copyTextureToTexture=function(P,ee,ce,te=0){const le=ee.image.width,Ie=ee.image.height,Oe=ae.convert(ce.format),He=ae.convert(ce.type);Se.setTexture2D(ce,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,ce.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,ce.unpackAlignment),ee.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,te,P.x,P.y,le,Ie,Oe,He,ee.image.data):ee.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,te,P.x,P.y,ee.mipmaps[0].width,ee.mipmaps[0].height,Oe,ee.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,te,P.x,P.y,Oe,He,ee.image),te===0&&ce.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(P,ee,ce,te,le=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=P.max.x-P.min.x+1,Oe=P.max.y-P.min.y+1,He=P.max.z-P.min.z+1,Ve=ae.convert(te.format),Ye=ae.convert(te.type);let ye;if(te.isData3DTexture)Se.setTexture3D(te,0),ye=F.TEXTURE_3D;else if(te.isDataArrayTexture)Se.setTexture2DArray(te,0),ye=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,te.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,te.unpackAlignment);const We=F.getParameter(F.UNPACK_ROW_LENGTH),et=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Je=F.getParameter(F.UNPACK_SKIP_PIXELS),St=F.getParameter(F.UNPACK_SKIP_ROWS),jt=F.getParameter(F.UNPACK_SKIP_IMAGES),tt=ce.isCompressedTexture?ce.mipmaps[0]:ce.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,tt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,P.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,P.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,P.min.z),ce.isDataTexture||ce.isData3DTexture?F.texSubImage3D(ye,le,ee.x,ee.y,ee.z,Ie,Oe,He,Ve,Ye,tt.data):ce.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(ye,le,ee.x,ee.y,ee.z,Ie,Oe,He,Ve,tt.data)):F.texSubImage3D(ye,le,ee.x,ee.y,ee.z,Ie,Oe,He,Ve,Ye,tt),F.pixelStorei(F.UNPACK_ROW_LENGTH,We),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,et),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Je),F.pixelStorei(F.UNPACK_SKIP_ROWS,St),F.pixelStorei(F.UNPACK_SKIP_IMAGES,jt),le===0&&te.generateMipmaps&&F.generateMipmap(ye),Ee.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Se.setTextureCube(P,0):P.isData3DTexture?Se.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Se.setTexture2DArray(P,0):Se.setTexture2D(P,0),Ee.unbindTexture()},this.resetState=function(){b=0,C=0,E=null,Ee.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nt?ni:Gc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ni?nt:mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class rv extends su{}rv.prototype.isWebGL1Renderer=!0;class av extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class sv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new Y;class Ra{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),r=$e(r,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[r+i])}return new ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ra(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[r+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class so extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ui;const mr=new Y,Di=new Y,Ii=new Y,Fi=new De,gr=new De,ou=new at,pa=new Y,vr=new Y,ma=new Y,ql=new De,As=new De,Zl=new De;class ov extends mt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new gt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sv(t,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new Ra(n,3,0,!1)),Ui.setAttribute("uv",new Ra(n,2,3,!1))}this.geometry=Ui,this.material=e!==void 0?e:new so,this.center=new De(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Di.setFromMatrixScale(this.matrixWorld),ou.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ii.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Di.multiplyScalar(-Ii.z);const n=this.material.rotation;let r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));const o=this.center;ga(pa.set(-.5,-.5,0),Ii,o,Di,r,i),ga(vr.set(.5,-.5,0),Ii,o,Di,r,i),ga(ma.set(.5,.5,0),Ii,o,Di,r,i),ql.set(0,0),As.set(1,0),Zl.set(1,1);let s=e.ray.intersectTriangle(pa,vr,ma,!1,mr);if(s===null&&(ga(vr.set(-.5,.5,0),Ii,o,Di,r,i),As.set(0,1),s=e.ray.intersectTriangle(pa,ma,vr,!1,mr),s===null))return;const l=e.ray.origin.distanceTo(mr);l<e.near||l>e.far||t.push({distance:l,point:mr.clone(),uv:Kt.getInterpolation(mr,pa,vr,ma,ql,As,Zl,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ga(a,e,t,n,r,i){Fi.subVectors(a,t).addScalar(.5).multiply(n),r!==void 0?(gr.x=i*Fi.x-r*Fi.y,gr.y=r*Fi.x+i*Fi.y):gr.copy(Fi),a.copy(e),a.x+=gr.x,a.y+=gr.y,a.applyMatrix4(ou)}class lv extends ft{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class lu extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kl=new Y,Jl=new Y,$l=new at,ws=new Ur,va=new Zi;class cv extends mt{constructor(e=new gt,t=new lu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,i=t.count;r<i;r++)Kl.fromBufferAttribute(t,r-1),Jl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Kl.distanceTo(Jl);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),va.radius+=i,e.ray.intersectsSphere(va)===!1)return;$l.copy(r).invert(),ws.copy(e.ray).applyMatrix4($l);const s=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new Y,u=new Y,f=new Y,h=new Y,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let _=p,x=S-1;_<x;_+=d){const b=g.getX(_),C=g.getX(_+1);if(c.fromBufferAttribute(m,b),u.fromBufferAttribute(m,C),ws.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(h);N<e.near||N>e.far||t.push({distance:N,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),S=Math.min(m.count,o.start+o.count);for(let _=p,x=S-1;_<x;_+=d){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),ws.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=r.length;i<o;i++){const s=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}const Ql=new Y,ec=new Y;class cu extends cv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,i=t.count;r<i;r+=2)Ql.fromBufferAttribute(t,r),ec.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ql.distanceTo(ec);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uu extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tc=new at,Xs=new Ur,_a=new Zi,xa=new Y;class hu extends mt{constructor(e=new gt,t=new uu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),_a.radius+=i,e.ray.intersectsSphere(_a)===!1)return;tc.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(tc);const s=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,v=d;g<v;g++){const m=c.getX(g);xa.fromBufferAttribute(f,m),nc(xa,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,v=d;g<v;g++)xa.fromBufferAttribute(f,g),nc(xa,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=r.length;i<o;i++){const s=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}function nc(a,e,t,n,r,i,o){const s=Xs.distanceSqToPoint(a);if(s<t){const l=new Y;Xs.closestPointToPoint(a,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;i.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class Oa extends gt{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+s,Math.PI);let c=0;const u=[],f=new Y,h=new Y,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const S=[],_=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const C=b/t;f.x=-e*Math.cos(r+C*i)*Math.sin(o+_*s),f.y=e*Math.cos(o+_*s),f.z=e*Math.sin(r+C*i)*Math.sin(o+_*s),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(C+x,1-_),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const _=u[p][S+1],x=u[p][S],b=u[p+1][S],C=u[p+1][S+1];(p!==0||o>0)&&d.push(_,x,C),(p!==n-1||l<Math.PI)&&d.push(x,b,C)}this.setIndex(d),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(v,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class uv extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hv extends Ln{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const ic={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class fv{constructor(e,t,n){const r=this;let i=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,i===!1&&r.onStart!==void 0&&r.onStart(u,o,s),i=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,s),o===s&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const dv=new fv;class oo{constructor(e){this.manager=e!==void 0?e:dv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}oo.DEFAULT_MATERIAL_NAME="__DEFAULT";class pv extends oo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,o=ic.get(e);if(o!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(o),i.manager.itemEnd(e)},0),o;const s=Cr("img");function l(){u(),ic.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(f){u(),r&&r(f),i.manager.itemError(e),i.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),i.manager.itemStart(e),s.src=e,s}}class Ir extends oo{constructor(e){super(e)}load(e,t,n,r){const i=new Pt,o=new pv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){i.image=s,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}}class mv extends gt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class fu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=rc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function rc(){return(typeof performance>"u"?Date:performance).now()}class gv{constructor(e,t,n=0,r=1/0){this.ray=new Ur(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new no,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ys(e,this,n,t),n.sort(ac),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Ys(e[r],this,n,t);return n.sort(ac),n}}function ac(a,e){return a.distance-e.distance}function Ys(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const r=a.children;for(let i=0,o=r.length;i<o;i++)Ys(r[i],e,t,!0)}}class sc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ya=new Y,ot=new io;class vv extends cu{constructor(e){const t=new gt,n=new lu({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],i=[],o={};s("n1","n2"),s("n2","n4"),s("n4","n3"),s("n3","n1"),s("f1","f2"),s("f2","f4"),s("f4","f3"),s("f3","f1"),s("n1","f1"),s("n2","f2"),s("n3","f3"),s("n4","f4"),s("p","n1"),s("p","n2"),s("p","n3"),s("p","n4"),s("u1","u2"),s("u2","u3"),s("u3","u1"),s("c","t"),s("p","c"),s("cn1","cn2"),s("cn3","cn4"),s("cf1","cf2"),s("cf3","cf4");function s(g,v){l(g),l(v)}function l(g){r.push(0,0,0),i.push(0,0,0),o[g]===void 0&&(o[g]=[]),o[g].push(r.length/3-1)}t.setAttribute("position",new At(r,3)),t.setAttribute("color",new At(i,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new Xe(16755200),u=new Xe(16711680),f=new Xe(43775),h=new Xe(16777215),d=new Xe(3355443);this.setColors(c,u,f,h,d)}setColors(e,t,n,r,i){const s=this.geometry.getAttribute("color");s.setXYZ(0,e.r,e.g,e.b),s.setXYZ(1,e.r,e.g,e.b),s.setXYZ(2,e.r,e.g,e.b),s.setXYZ(3,e.r,e.g,e.b),s.setXYZ(4,e.r,e.g,e.b),s.setXYZ(5,e.r,e.g,e.b),s.setXYZ(6,e.r,e.g,e.b),s.setXYZ(7,e.r,e.g,e.b),s.setXYZ(8,e.r,e.g,e.b),s.setXYZ(9,e.r,e.g,e.b),s.setXYZ(10,e.r,e.g,e.b),s.setXYZ(11,e.r,e.g,e.b),s.setXYZ(12,e.r,e.g,e.b),s.setXYZ(13,e.r,e.g,e.b),s.setXYZ(14,e.r,e.g,e.b),s.setXYZ(15,e.r,e.g,e.b),s.setXYZ(16,e.r,e.g,e.b),s.setXYZ(17,e.r,e.g,e.b),s.setXYZ(18,e.r,e.g,e.b),s.setXYZ(19,e.r,e.g,e.b),s.setXYZ(20,e.r,e.g,e.b),s.setXYZ(21,e.r,e.g,e.b),s.setXYZ(22,e.r,e.g,e.b),s.setXYZ(23,e.r,e.g,e.b),s.setXYZ(24,t.r,t.g,t.b),s.setXYZ(25,t.r,t.g,t.b),s.setXYZ(26,t.r,t.g,t.b),s.setXYZ(27,t.r,t.g,t.b),s.setXYZ(28,t.r,t.g,t.b),s.setXYZ(29,t.r,t.g,t.b),s.setXYZ(30,t.r,t.g,t.b),s.setXYZ(31,t.r,t.g,t.b),s.setXYZ(32,n.r,n.g,n.b),s.setXYZ(33,n.r,n.g,n.b),s.setXYZ(34,n.r,n.g,n.b),s.setXYZ(35,n.r,n.g,n.b),s.setXYZ(36,n.r,n.g,n.b),s.setXYZ(37,n.r,n.g,n.b),s.setXYZ(38,r.r,r.g,r.b),s.setXYZ(39,r.r,r.g,r.b),s.setXYZ(40,i.r,i.g,i.b),s.setXYZ(41,i.r,i.g,i.b),s.setXYZ(42,i.r,i.g,i.b),s.setXYZ(43,i.r,i.g,i.b),s.setXYZ(44,i.r,i.g,i.b),s.setXYZ(45,i.r,i.g,i.b),s.setXYZ(46,i.r,i.g,i.b),s.setXYZ(47,i.r,i.g,i.b),s.setXYZ(48,i.r,i.g,i.b),s.setXYZ(49,i.r,i.g,i.b),s.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,r=1;ot.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),ct("c",t,e,ot,0,0,-1),ct("t",t,e,ot,0,0,1),ct("n1",t,e,ot,-n,-r,-1),ct("n2",t,e,ot,n,-r,-1),ct("n3",t,e,ot,-n,r,-1),ct("n4",t,e,ot,n,r,-1),ct("f1",t,e,ot,-n,-r,1),ct("f2",t,e,ot,n,-r,1),ct("f3",t,e,ot,-n,r,1),ct("f4",t,e,ot,n,r,1),ct("u1",t,e,ot,n*.7,r*1.1,-1),ct("u2",t,e,ot,-n*.7,r*1.1,-1),ct("u3",t,e,ot,0,r*2,-1),ct("cf1",t,e,ot,-n,0,1),ct("cf2",t,e,ot,n,0,1),ct("cf3",t,e,ot,0,-r,1),ct("cf4",t,e,ot,0,r,1),ct("cn1",t,e,ot,-n,0,-1),ct("cn2",t,e,ot,n,0,-1),ct("cn3",t,e,ot,0,-r,-1),ct("cn4",t,e,ot,0,r,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function ct(a,e,t,n,r,i,o){ya.set(r,i,o).unproject(n);const s=e[a];if(s!==void 0){const l=t.getAttribute("position");for(let c=0,u=s.length;c<u;c++)l.setXYZ(s[c],ya.x,ya.y,ya.z)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$s}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$s);const oc={type:"change"},Cs={type:"start"},lc={type:"end"},Sa=new Ur,cc=new Tn,_v=Math.cos(70*Jh.DEG2RAD);class xv extends si{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",M),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(oc),n.update(),i=r.NONE},this.update=function(){const I=new Y,ie=new ai().setFromUnitVectors(e.up,new Y(0,1,0)),pe=ie.clone().invert(),ae=new Y,ve=new ai,Le=new Y,ke=2*Math.PI;return function(ue=null){const J=n.object.position;I.copy(J).sub(n.target),I.applyQuaternion(ie),s.setFromVector3(I),n.autoRotate&&i===r.NONE&&K(y(ue)),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Me=n.minAzimuthAngle,ge=n.maxAzimuthAngle;isFinite(Me)&&isFinite(ge)&&(Me<-Math.PI?Me+=ke:Me>Math.PI&&(Me-=ke),ge<-Math.PI?ge+=ke:ge>Math.PI&&(ge-=ke),Me<=ge?s.theta=Math.max(Me,Math.min(ge,s.theta)):s.theta=s.theta>(Me+ge)/2?Math.max(Me,s.theta):Math.min(ge,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&C||n.object.isOrthographicCamera?s.radius=X(s.radius):s.radius=X(s.radius*c),I.setFromSpherical(s),I.applyQuaternion(pe),J.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Pe=!1;if(n.zoomToCursor&&C){let ze=null;if(n.object.isPerspectiveCamera){const Be=I.length();ze=X(Be*c);const Ne=Be-ze;n.object.position.addScaledVector(x,Ne),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Be=new Y(b.x,b.y,0);Be.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Pe=!0;const Ne=new Y(b.x,b.y,0);Ne.unproject(n.object),n.object.position.sub(Ne).add(Be),n.object.updateMatrixWorld(),ze=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ze!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ze).add(n.object.position):(Sa.origin.copy(n.object.position),Sa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Sa.direction))<_v?e.lookAt(n.target):(cc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Sa.intersectPlane(cc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Pe=!0);return c=1,C=!1,Pe||ae.distanceToSquared(n.object.position)>o||8*(1-ve.dot(n.object.quaternion))>o||Le.distanceToSquared(n.target)>0?(n.dispatchEvent(oc),ae.copy(n.object.position),ve.copy(n.object.quaternion),Le.copy(n.target),Pe=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Q),n.domElement.removeEventListener("pointerdown",de),n.domElement.removeEventListener("pointercancel",Te),n.domElement.removeEventListener("wheel",A),n.domElement.removeEventListener("pointermove",Se),n.domElement.removeEventListener("pointerup",Te),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",M),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let i=r.NONE;const o=1e-6,s=new sc,l=new sc;let c=1;const u=new Y,f=new De,h=new De,d=new De,g=new De,v=new De,m=new De,p=new De,S=new De,_=new De,x=new Y,b=new De;let C=!1;const E=[],N={};function y(I){return I!==null?2*Math.PI/60*n.autoRotateSpeed*I:2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function K(I){l.theta-=I}function L(I){l.phi-=I}const U=function(){const I=new Y;return function(pe,ae){I.setFromMatrixColumn(ae,0),I.multiplyScalar(-pe),u.add(I)}}(),D=function(){const I=new Y;return function(pe,ae){n.screenSpacePanning===!0?I.setFromMatrixColumn(ae,1):(I.setFromMatrixColumn(ae,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(pe),u.add(I)}}(),k=function(){const I=new Y;return function(pe,ae){const ve=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;I.copy(Le).sub(n.target);let ke=I.length();ke*=Math.tan(n.object.fov/2*Math.PI/180),U(2*pe*ke/ve.clientHeight,n.object.matrix),D(2*ae*ke/ve.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(pe*(n.object.right-n.object.left)/n.object.zoom/ve.clientWidth,n.object.matrix),D(ae*(n.object.top-n.object.bottom)/n.object.zoom/ve.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function W(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(I){if(!n.zoomToCursor)return;C=!0;const ie=n.domElement.getBoundingClientRect(),pe=I.clientX-ie.left,ae=I.clientY-ie.top,ve=ie.width,Le=ie.height;b.x=pe/ve*2-1,b.y=-(ae/Le)*2+1,x.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function X(I){return Math.max(n.minDistance,Math.min(n.maxDistance,I))}function B(I){f.set(I.clientX,I.clientY)}function w(I){q(I),p.set(I.clientX,I.clientY)}function R(I){g.set(I.clientX,I.clientY)}function G(I){h.set(I.clientX,I.clientY),d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ie=n.domElement;K(2*Math.PI*d.x/ie.clientHeight),L(2*Math.PI*d.y/ie.clientHeight),f.copy(h),n.update()}function V(I){S.set(I.clientX,I.clientY),_.subVectors(S,p),_.y>0?W(T()):_.y<0&&j(T()),p.copy(S),n.update()}function H(I){v.set(I.clientX,I.clientY),m.subVectors(v,g).multiplyScalar(n.panSpeed),k(m.x,m.y),g.copy(v),n.update()}function re(I){q(I),I.deltaY<0?j(T()):I.deltaY>0&&W(T()),n.update()}function $(I){let ie=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),ie=!0;break}ie&&(I.preventDefault(),n.update())}function ne(){if(E.length===1)f.set(E[0].pageX,E[0].pageY);else{const I=.5*(E[0].pageX+E[1].pageX),ie=.5*(E[0].pageY+E[1].pageY);f.set(I,ie)}}function xe(){if(E.length===1)g.set(E[0].pageX,E[0].pageY);else{const I=.5*(E[0].pageX+E[1].pageX),ie=.5*(E[0].pageY+E[1].pageY);g.set(I,ie)}}function Ce(){const I=E[0].pageX-E[1].pageX,ie=E[0].pageY-E[1].pageY,pe=Math.sqrt(I*I+ie*ie);p.set(0,pe)}function he(){n.enableZoom&&Ce(),n.enablePan&&xe()}function F(){n.enableZoom&&Ce(),n.enableRotate&&ne()}function Fe(I){if(E.length==1)h.set(I.pageX,I.pageY);else{const pe=Z(I),ae=.5*(I.pageX+pe.x),ve=.5*(I.pageY+pe.y);h.set(ae,ve)}d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ie=n.domElement;K(2*Math.PI*d.x/ie.clientHeight),L(2*Math.PI*d.y/ie.clientHeight),f.copy(h)}function be(I){if(E.length===1)v.set(I.pageX,I.pageY);else{const ie=Z(I),pe=.5*(I.pageX+ie.x),ae=.5*(I.pageY+ie.y);v.set(pe,ae)}m.subVectors(v,g).multiplyScalar(n.panSpeed),k(m.x,m.y),g.copy(v)}function Ae(I){const ie=Z(I),pe=I.pageX-ie.x,ae=I.pageY-ie.y,ve=Math.sqrt(pe*pe+ae*ae);S.set(0,ve),_.set(0,Math.pow(S.y/p.y,n.zoomSpeed)),W(_.y),p.copy(S)}function Ee(I){n.enableZoom&&Ae(I),n.enablePan&&be(I)}function Ue(I){n.enableZoom&&Ae(I),n.enableRotate&&Fe(I)}function de(I){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",Se),n.domElement.addEventListener("pointerup",Te)),se(I),I.pointerType==="touch"?z(I):oe(I))}function Se(I){n.enabled!==!1&&(I.pointerType==="touch"?me(I):Re(I))}function Te(I){_e(I),E.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",Se),n.domElement.removeEventListener("pointerup",Te)),n.dispatchEvent(lc),i=r.NONE}function oe(I){let ie;switch(I.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case pi.DOLLY:if(n.enableZoom===!1)return;w(I),i=r.DOLLY;break;case pi.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;R(I),i=r.PAN}else{if(n.enableRotate===!1)return;B(I),i=r.ROTATE}break;case pi.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;B(I),i=r.ROTATE}else{if(n.enablePan===!1)return;R(I),i=r.PAN}break;default:i=r.NONE}i!==r.NONE&&n.dispatchEvent(Cs)}function Re(I){switch(i){case r.ROTATE:if(n.enableRotate===!1)return;G(I);break;case r.DOLLY:if(n.enableZoom===!1)return;V(I);break;case r.PAN:if(n.enablePan===!1)return;H(I);break}}function A(I){n.enabled===!1||n.enableZoom===!1||i!==r.NONE||(I.preventDefault(),n.dispatchEvent(Cs),re(I),n.dispatchEvent(lc))}function M(I){n.enabled===!1||n.enablePan===!1||$(I)}function z(I){switch(fe(I),E.length){case 1:switch(n.touches.ONE){case mi.ROTATE:if(n.enableRotate===!1)return;ne(),i=r.TOUCH_ROTATE;break;case mi.PAN:if(n.enablePan===!1)return;xe(),i=r.TOUCH_PAN;break;default:i=r.NONE}break;case 2:switch(n.touches.TWO){case mi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;he(),i=r.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;F(),i=r.TOUCH_DOLLY_ROTATE;break;default:i=r.NONE}break;default:i=r.NONE}i!==r.NONE&&n.dispatchEvent(Cs)}function me(I){switch(fe(I),i){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Fe(I),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;be(I),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(I),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ue(I),n.update();break;default:i=r.NONE}}function Q(I){n.enabled!==!1&&I.preventDefault()}function se(I){E.push(I)}function _e(I){delete N[I.pointerId];for(let ie=0;ie<E.length;ie++)if(E[ie].pointerId==I.pointerId){E.splice(ie,1);return}}function fe(I){let ie=N[I.pointerId];ie===void 0&&(ie=new De,N[I.pointerId]=ie),ie.set(I.pageX,I.pageY)}function Z(I){const ie=I.pointerId===E[0].pointerId?E[1]:E[0];return N[ie.pointerId]}n.domElement.addEventListener("contextmenu",Q),n.domElement.addEventListener("pointerdown",de),n.domElement.addEventListener("pointercancel",Te),n.domElement.addEventListener("wheel",A,{passive:!1}),this.update()}}var yv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sv(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var du={exports:{}};(function(a,e){(function(t,n){a.exports=n()})(yv,function(){var t=function(){function n(d){return o.appendChild(d.dom),d}function r(d){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===d?"block":"none";i=d}var i=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(d){d.preventDefault(),r(++i%o.children.length)},!1);var s=(performance||Date).now(),l=s,c=0,u=n(new t.Panel("FPS","#0ff","#002")),f=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=n(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:n,showPanel:r,begin:function(){s=(performance||Date).now()},end:function(){c++;var d=(performance||Date).now();if(f.update(d-s,200),d>l+1e3&&(u.update(1e3*c/(d-l),100),l=d,c=0,h)){var g=performance.memory;h.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return d},update:function(){s=this.end()},domElement:o,setMode:r}};return t.Panel=function(n,r,i){var o=1/0,s=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,f=48*c,h=3*c,d=2*c,g=3*c,v=15*c,m=74*c,p=30*c,S=document.createElement("canvas");S.width=u,S.height=f,S.style.cssText="width:80px;height:48px";var _=S.getContext("2d");return _.font="bold "+9*c+"px Helvetica,Arial,sans-serif",_.textBaseline="top",_.fillStyle=i,_.fillRect(0,0,u,f),_.fillStyle=r,_.fillText(n,h,d),_.fillRect(g,v,m,p),_.fillStyle=i,_.globalAlpha=.9,_.fillRect(g,v,m,p),{dom:S,update:function(x,b){o=Math.min(o,x),s=Math.max(s,x),_.fillStyle=i,_.globalAlpha=1,_.fillRect(0,0,u,v),_.fillStyle=r,_.fillText(l(x)+" "+n+" ("+l(o)+"-"+l(s)+")",h,d),_.drawImage(S,g+c,v,m-c,p,g,v,m-c,p),_.fillRect(g+m-c,v,c,p),_.fillStyle=i,_.globalAlpha=.9,_.fillRect(g+m-c,v,c,l((1-x/b)*p))}}},t})})(du);var Mv=du.exports;const bv=Sv(Mv);new Ir().load("/images/spark1.png");class Ev{constructor(e,t={}){this.fontface=t.fontface||"Arial",this.fontsize=t.fontsize||64,this.borderThickness=t.borderThickness||4,this.borderColor=t.borderColor||{r:0,g:0,b:0,a:1},this.backgroundColor=t.backgroundColor||{r:255,g:255,b:255,a:1},this.message=e,this.position=new Y,this.visible=!0,this.material=t.material||new so({transparent:!0}),this.createTexture(),this.createSprite()}createTexture(){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.texture=new Pt(this.canvas),this.updateTexture(),this.texture.needsUpdate=!0,this.texture.minFilter=Et,this.texture.magFilter=Et}createSprite(){this.material.map=this.texture,this.sprite=new ov(this.material),this.sprite.center=new De(.5,.1),this.sprite.scale.set(100,50,1),this.material.depthTest=!0,this.material.depthWrite=!1,this.material.blending=dn}updateTexture(){this.context.clearRect(0,0,300,150),this.context.font="Bold "+this.fontsize+"px "+this.fontface;let t=this.context.measureText(this.message).width,n=300,r=150,i=(n-t)/2,o=(r+this.fontsize/2)/2;return this.context.fillStyle="white",this.context.fillText(this.message,i,o),this.texture.needsUpdate=!0,this.texture}updateVisible(e){return this.visible=e,this.sprite.visible=this.visible,e}update(e=new Y,t="",n=""){this.updateVisible(!!t)&&(this.position.copy(e),this.color=n,this.message=t,this.sprite.position.copy(this.position),this.updateTexture())}}function Tv(){var a=Object.create(null);function e(r,i){var o=r.id,s=r.name,l=r.dependencies;l===void 0&&(l=[]);var c=r.init;c===void 0&&(c=function(){});var u=r.getTransferables;if(u===void 0&&(u=null),!a[o])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(d){if(d instanceof Error)throw d}),h=a[h.id].value),h}),c=n("<"+s+">.init",c),u&&(u=n("<"+s+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[o]={id:o,value:f,getTransferables:u},i(f)}catch(h){h&&h.noLog||console.error(h),i(h)}}function t(r,i){var o,s=r.id,l=r.args;(!a[s]||typeof a[s].value!="function")&&i(new Error("Worker module "+s+": not found or its 'init' did not return a function"));try{var c=(o=a[s]).value.apply(o,l);c&&typeof c.then=="function"?c.then(u,function(f){return i(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){i(f)}function u(f){try{var h=a[s].getTransferables&&a[s].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),i(f,h)}catch(d){console.error(d),i(d)}}}function n(r,i){var o=void 0;self.troikaDefine=function(l){return o=l};var s=URL.createObjectURL(new Blob(["/** "+r.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(s)}catch(l){console.error(l)}return URL.revokeObjectURL(s),delete self.troikaDefine,o}self.addEventListener("message",function(r){var i=r.data,o=i.messageId,s=i.action,l=i.data;try{s==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),s==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function Av(a){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(r){if(typeof r=="function")return r.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,n=a.init;t=Array.isArray(t)?t.map(function(i){return i&&i._getInitResult?i._getInitResult():i}):[];var r=Promise.all(t).then(function(i){return n.apply(null,i)});return e._getInitResult=function(){return r},r},e}var pu=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return pu=function(){return a},a},wv=0,Cv=0,Rs=!1,Er=Object.create(null),Tr=Object.create(null),js=Object.create(null);function $i(a){if((!a||typeof a.init!="function")&&!Rs)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,n=a.getTransferables,r=a.workerId;if(!pu())return Av(a);r==null&&(r="#default");var i="workerModule"+ ++wv,o=a.name||i,s=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(Rs=!0,c=$i({workerId:r,name:"<"+o+"> function dependency: "+c.name,init:`function(){return (
`+Ta(c)+`
)}`}),Rs=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!s){s=uc(r,"registerModule",l.workerModuleData);var f=function(){s=null,Tr[r].delete(f)};(Tr[r]||(Tr[r]=new Set)).add(f)}return s.then(function(h){var d=h.isCallable;if(d)return uc(r,"callModule",{id:i,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:i,name:o,dependencies:e,init:Ta(t),getTransferables:n&&Ta(n)},l}function Rv(a){Tr[a]&&Tr[a].forEach(function(e){e()}),Er[a]&&(Er[a].terminate(),delete Er[a])}function Ta(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function Pv(a){var e=Er[a];if(!e){var t=Ta(Tv);e=Er[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var r=n.data,i=r.messageId,o=js[i];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete js[i],o(r)}}return e}function uc(a,e,t){return new Promise(function(n,r){var i=++Cv;js[i]=function(o){o.success?n(o.result):r(new Error("Error in worker "+e+" call: "+o.error))},Pv(a).postMessage({messageId:i,action:e,data:t})})}function mu(){var a=function(e){function t(X,B,w,R,G,V,H,re){var $=1-H;re.x=$*$*X+2*$*H*w+H*H*G,re.y=$*$*B+2*$*H*R+H*H*V}function n(X,B,w,R,G,V,H,re,$,ne){var xe=1-$;ne.x=xe*xe*xe*X+3*xe*xe*$*w+3*xe*$*$*G+$*$*$*H,ne.y=xe*xe*xe*B+3*xe*xe*$*R+3*xe*$*$*V+$*$*$*re}function r(X,B){for(var w=/([MLQCZ])([^MLQCZ]*)/g,R,G,V,H,re;R=w.exec(X);){var $=R[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ne){return parseFloat(ne)});switch(R[1]){case"M":H=G=$[0],re=V=$[1];break;case"L":($[0]!==H||$[1]!==re)&&B("L",H,re,H=$[0],re=$[1]);break;case"Q":{B("Q",H,re,H=$[2],re=$[3],$[0],$[1]);break}case"C":{B("C",H,re,H=$[4],re=$[5],$[0],$[1],$[2],$[3]);break}case"Z":(H!==G||re!==V)&&B("L",H,re,G,V);break}}}function i(X,B,w){w===void 0&&(w=16);var R={x:0,y:0};r(X,function(G,V,H,re,$,ne,xe,Ce,he){switch(G){case"L":B(V,H,re,$);break;case"Q":{for(var F=V,Fe=H,be=1;be<w;be++)t(V,H,ne,xe,re,$,be/(w-1),R),B(F,Fe,R.x,R.y),F=R.x,Fe=R.y;break}case"C":{for(var Ae=V,Ee=H,Ue=1;Ue<w;Ue++)n(V,H,ne,xe,Ce,he,re,$,Ue/(w-1),R),B(Ae,Ee,R.x,R.y),Ae=R.x,Ee=R.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",s="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(X,B){var w=X.getContext?X.getContext("webgl",c):X,R=l.get(w);if(!R){let Ae=function(oe){var Re=V[oe];if(!Re&&(Re=V[oe]=w.getExtension(oe),!Re))throw new Error(oe+" not supported");return Re},Ee=function(oe,Re){var A=w.createShader(Re);return w.shaderSource(A,oe),w.compileShader(A),A},Ue=function(oe,Re,A,M){if(!H[oe]){var z={},me={},Q=w.createProgram();w.attachShader(Q,Ee(Re,w.VERTEX_SHADER)),w.attachShader(Q,Ee(A,w.FRAGMENT_SHADER)),w.linkProgram(Q),H[oe]={program:Q,transaction:function(_e){w.useProgram(Q),_e({setUniform:function(Z,I){for(var ie=[],pe=arguments.length-2;pe-- >0;)ie[pe]=arguments[pe+2];var ae=me[I]||(me[I]=w.getUniformLocation(Q,I));w["uniform"+Z].apply(w,[ae].concat(ie))},setAttribute:function(Z,I,ie,pe,ae){var ve=z[Z];ve||(ve=z[Z]={buf:w.createBuffer(),loc:w.getAttribLocation(Q,Z),data:null}),w.bindBuffer(w.ARRAY_BUFFER,ve.buf),w.vertexAttribPointer(ve.loc,I,w.FLOAT,!1,0,0),w.enableVertexAttribArray(ve.loc),G?w.vertexAttribDivisor(ve.loc,pe):Ae("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(ve.loc,pe),ae!==ve.data&&(w.bufferData(w.ARRAY_BUFFER,ae,ie),ve.data=ae)}})}}}H[oe].transaction(M)},de=function(oe,Re){$++;try{w.activeTexture(w.TEXTURE0+$);var A=re[oe];A||(A=re[oe]=w.createTexture(),w.bindTexture(w.TEXTURE_2D,A),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MIN_FILTER,w.NEAREST),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MAG_FILTER,w.NEAREST)),w.bindTexture(w.TEXTURE_2D,A),Re(A,$)}finally{$--}},Se=function(oe,Re,A){var M=w.createFramebuffer();ne.push(M),w.bindFramebuffer(w.FRAMEBUFFER,M),w.activeTexture(w.TEXTURE0+Re),w.bindTexture(w.TEXTURE_2D,oe),w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,oe,0);try{A(M)}finally{w.deleteFramebuffer(M),w.bindFramebuffer(w.FRAMEBUFFER,ne[--ne.length-1]||null)}},Te=function(){V={},H={},re={},$=-1,ne.length=0};var xe=Ae,Ce=Ee,he=Ue,F=de,Fe=Se,be=Te,G=typeof WebGL2RenderingContext<"u"&&w instanceof WebGL2RenderingContext,V={},H={},re={},$=-1,ne=[];w.canvas.addEventListener("webglcontextlost",function(oe){Te(),oe.preventDefault()},!1),l.set(w,R={gl:w,isWebGL2:G,getExtension:Ae,withProgram:Ue,withTexture:de,withTextureFramebuffer:Se,handleContextLoss:Te})}B(R)}function f(X,B,w,R,G,V,H,re){H===void 0&&(H=15),re===void 0&&(re=null),u(X,function($){var ne=$.gl,xe=$.withProgram,Ce=$.withTexture;Ce("copy",function(he,F){ne.texImage2D(ne.TEXTURE_2D,0,ne.RGBA,G,V,0,ne.RGBA,ne.UNSIGNED_BYTE,B),xe("copy",o,s,function(Fe){var be=Fe.setUniform,Ae=Fe.setAttribute;Ae("aUV",2,ne.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),be("1i","image",F),ne.bindFramebuffer(ne.FRAMEBUFFER,re||null),ne.disable(ne.BLEND),ne.colorMask(H&8,H&4,H&2,H&1),ne.viewport(w,R,G,V),ne.scissor(w,R,G,V),ne.drawArrays(ne.TRIANGLES,0,3)})})})}function h(X,B,w){var R=X.width,G=X.height;u(X,function(V){var H=V.gl,re=new Uint8Array(R*G*4);H.readPixels(0,0,R,G,H.RGBA,H.UNSIGNED_BYTE,re),X.width=B,X.height=w,f(H,re,0,0,R,G)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function g(X,B,w,R,G,V){V===void 0&&(V=1);var H=new Uint8Array(X*B),re=R[2]-R[0],$=R[3]-R[1],ne=[];i(w,function(Ae,Ee,Ue,de){ne.push({x1:Ae,y1:Ee,x2:Ue,y2:de,minX:Math.min(Ae,Ue),minY:Math.min(Ee,de),maxX:Math.max(Ae,Ue),maxY:Math.max(Ee,de)})}),ne.sort(function(Ae,Ee){return Ae.maxX-Ee.maxX});for(var xe=0;xe<X;xe++)for(var Ce=0;Ce<B;Ce++){var he=Fe(R[0]+re*(xe+.5)/X,R[1]+$*(Ce+.5)/B),F=Math.pow(1-Math.abs(he)/G,V)/2;he<0&&(F=1-F),F=Math.max(0,Math.min(255,Math.round(F*255))),H[Ce*X+xe]=F}return H;function Fe(Ae,Ee){for(var Ue=1/0,de=1/0,Se=ne.length;Se--;){var Te=ne[Se];if(Te.maxX+de<=Ae)break;if(Ae+de>Te.minX&&Ee-de<Te.maxY&&Ee+de>Te.minY){var oe=p(Ae,Ee,Te.x1,Te.y1,Te.x2,Te.y2);oe<Ue&&(Ue=oe,de=Math.sqrt(Ue))}}return be(Ae,Ee)&&(de=-de),de}function be(Ae,Ee){for(var Ue=0,de=ne.length;de--;){var Se=ne[de];if(Se.maxX<=Ae)break;var Te=Se.y1>Ee!=Se.y2>Ee&&Ae<(Se.x2-Se.x1)*(Ee-Se.y1)/(Se.y2-Se.y1)+Se.x1;Te&&(Ue+=Se.y1<Se.y2?1:-1)}return Ue!==0}}function v(X,B,w,R,G,V,H,re,$,ne){V===void 0&&(V=1),re===void 0&&(re=0),$===void 0&&($=0),ne===void 0&&(ne=0),m(X,B,w,R,G,V,H,null,re,$,ne)}function m(X,B,w,R,G,V,H,re,$,ne,xe){V===void 0&&(V=1),$===void 0&&($=0),ne===void 0&&(ne=0),xe===void 0&&(xe=0);for(var Ce=g(X,B,w,R,G,V),he=new Uint8Array(Ce.length*4),F=0;F<Ce.length;F++)he[F*4+xe]=Ce[F];f(H,he,$,ne,X,B,1<<3-xe,re)}function p(X,B,w,R,G,V){var H=G-w,re=V-R,$=H*H+re*re,ne=$?Math.max(0,Math.min(1,((X-w)*H+(B-R)*re)/$)):0,xe=X-(w+ne*H),Ce=B-(R+ne*re);return xe*xe+Ce*Ce}var S=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:v,generateIntoFramebuffer:m}),_="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",x="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",b="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",C=new Float32Array([0,0,2,0,0,2]),E=null,N=!1,y={},T=new WeakMap;function K(X){if(!N&&!k(X))throw new Error("WebGL generation not supported")}function L(X,B,w,R,G,V,H){if(V===void 0&&(V=1),H===void 0&&(H=null),!H&&(H=E,!H)){var re=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!re)throw new Error("OffscreenCanvas or DOM canvas not supported");H=E=re.getContext("webgl",{depth:!1})}K(H);var $=new Uint8Array(X*B*4);u(H,function(he){var F=he.gl,Fe=he.withTexture,be=he.withTextureFramebuffer;Fe("readable",function(Ae,Ee){F.texImage2D(F.TEXTURE_2D,0,F.RGBA,X,B,0,F.RGBA,F.UNSIGNED_BYTE,null),be(Ae,Ee,function(Ue){D(X,B,w,R,G,V,F,Ue,0,0,0),F.readPixels(0,0,X,B,F.RGBA,F.UNSIGNED_BYTE,$)})})});for(var ne=new Uint8Array(X*B),xe=0,Ce=0;xe<$.length;xe+=4)ne[Ce++]=$[xe];return ne}function U(X,B,w,R,G,V,H,re,$,ne){V===void 0&&(V=1),re===void 0&&(re=0),$===void 0&&($=0),ne===void 0&&(ne=0),D(X,B,w,R,G,V,H,null,re,$,ne)}function D(X,B,w,R,G,V,H,re,$,ne,xe){V===void 0&&(V=1),$===void 0&&($=0),ne===void 0&&(ne=0),xe===void 0&&(xe=0),K(H);var Ce=[];i(w,function(he,F,Fe,be){Ce.push(he,F,Fe,be)}),Ce=new Float32Array(Ce),u(H,function(he){var F=he.gl,Fe=he.isWebGL2,be=he.getExtension,Ae=he.withProgram,Ee=he.withTexture,Ue=he.withTextureFramebuffer,de=he.handleContextLoss;if(Ee("rawDistances",function(Se,Te){(X!==Se._lastWidth||B!==Se._lastHeight)&&F.texImage2D(F.TEXTURE_2D,0,F.RGBA,Se._lastWidth=X,Se._lastHeight=B,0,F.RGBA,F.UNSIGNED_BYTE,null),Ae("main",_,x,function(oe){var Re=oe.setAttribute,A=oe.setUniform,M=!Fe&&be("ANGLE_instanced_arrays"),z=!Fe&&be("EXT_blend_minmax");Re("aUV",2,F.STATIC_DRAW,0,C),Re("aLineSegment",4,F.DYNAMIC_DRAW,1,Ce),A.apply(void 0,["4f","uGlyphBounds"].concat(R)),A("1f","uMaxDistance",G),A("1f","uExponent",V),Ue(Se,Te,function(me){F.enable(F.BLEND),F.colorMask(!0,!0,!0,!0),F.viewport(0,0,X,B),F.scissor(0,0,X,B),F.blendFunc(F.ONE,F.ONE),F.blendEquationSeparate(F.FUNC_ADD,Fe?F.MAX:z.MAX_EXT),F.clear(F.COLOR_BUFFER_BIT),Fe?F.drawArraysInstanced(F.TRIANGLES,0,3,Ce.length/4):M.drawArraysInstancedANGLE(F.TRIANGLES,0,3,Ce.length/4)})}),Ae("post",o,b,function(oe){oe.setAttribute("aUV",2,F.STATIC_DRAW,0,C),oe.setUniform("1i","tex",Te),F.bindFramebuffer(F.FRAMEBUFFER,re),F.disable(F.BLEND),F.colorMask(xe===0,xe===1,xe===2,xe===3),F.viewport($,ne,X,B),F.scissor($,ne,X,B),F.drawArrays(F.TRIANGLES,0,3)})}),F.isContextLost())throw de(),new Error("webgl context lost")})}function k(X){var B=!X||X===E?y:X.canvas||X,w=T.get(B);if(w===void 0){N=!0;var R=null;try{var G=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],V=L(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,X);w=V&&G.length===V.length&&V.every(function(H,re){return H===G[re]}),w||(R="bad trial run results",console.info(G,V))}catch(H){w=!1,R=H.message}R&&console.warn("WebGL SDF generation not supported:",R),N=!1,T.set(B,w)}return w}var W=Object.freeze({__proto__:null,generate:L,generateIntoCanvas:U,generateIntoFramebuffer:D,isSupported:k});function j(X,B,w,R,G,V){G===void 0&&(G=Math.max(R[2]-R[0],R[3]-R[1])/2),V===void 0&&(V=1);try{return L.apply(W,arguments)}catch(H){return console.info("WebGL SDF generation failed, falling back to JS",H),g.apply(S,arguments)}}function q(X,B,w,R,G,V,H,re,$,ne){G===void 0&&(G=Math.max(R[2]-R[0],R[3]-R[1])/2),V===void 0&&(V=1),re===void 0&&(re=0),$===void 0&&($=0),ne===void 0&&(ne=0);try{return U.apply(W,arguments)}catch(xe){return console.info("WebGL SDF generation failed, falling back to JS",xe),v.apply(S,arguments)}}return e.forEachPathCommand=r,e.generate=j,e.generateIntoCanvas=q,e.javascript=S,e.pathToLineSegments=i,e.webgl=W,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function Lv(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},r={};n.L=1,r[1]="L",Object.keys(t).forEach(function(de,Se){n[de]=1<<Se+1,r[n[de]]=de}),Object.freeze(n);var i=n.LRI|n.RLI|n.FSI,o=n.L|n.R|n.AL,s=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,l=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|i|n.PDI|l,u=null;function f(){if(!u){u=new Map;var de=function(Te){if(t.hasOwnProperty(Te)){var oe=0;t[Te].split(",").forEach(function(Re){var A=Re.split("+"),M=A[0],z=A[1];M=parseInt(M,36),z=z?parseInt(z,36):0,u.set(oe+=M,n[Te]);for(var me=0;me<z;me++)u.set(++oe,n[Te])})}};for(var Se in t)de(Se)}}function h(de){return f(),u.get(de.codePointAt(0))||n.L}function d(de){return r[h(de)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(de,Se){var Te=36,oe=0,Re=new Map,A=Se&&new Map,M;return de.split(",").forEach(function z(me){if(me.indexOf("+")!==-1)for(var Q=+me;Q--;)z(M);else{M=me;var se=me.split(">"),_e=se[0],fe=se[1];_e=String.fromCodePoint(oe+=parseInt(_e,Te)),fe=String.fromCodePoint(oe+=parseInt(fe,Te)),Re.set(_e,fe),Se&&A.set(fe,_e)}}),{map:Re,reverseMap:A}}var m,p,S;function _(){if(!m){var de=v(g.pairs,!0),Se=de.map,Te=de.reverseMap;m=Se,p=Te,S=v(g.canonical,!1).map}}function x(de){return _(),m.get(de)||null}function b(de){return _(),p.get(de)||null}function C(de){return _(),S.get(de)||null}var E=n.L,N=n.R,y=n.EN,T=n.ES,K=n.ET,L=n.AN,U=n.CS,D=n.B,k=n.S,W=n.ON,j=n.BN,q=n.NSM,X=n.AL,B=n.LRO,w=n.RLO,R=n.LRE,G=n.RLE,V=n.PDF,H=n.LRI,re=n.RLI,$=n.FSI,ne=n.PDI;function xe(de,Se){for(var Te=125,oe=new Uint32Array(de.length),Re=0;Re<de.length;Re++)oe[Re]=h(de[Re]);var A=new Map;function M(Ot,en){var Bt=oe[Ot];oe[Ot]=en,A.set(Bt,A.get(Bt)-1),Bt&s&&A.set(s,A.get(s)-1),A.set(en,(A.get(en)||0)+1),en&s&&A.set(s,(A.get(s)||0)+1)}for(var z=new Uint8Array(de.length),me=new Map,Q=[],se=null,_e=0;_e<de.length;_e++)se||Q.push(se={start:_e,end:de.length-1,level:Se==="rtl"?1:Se==="ltr"?0:Lo(_e,!1)}),oe[_e]&D&&(se.end=_e,se=null);for(var fe=G|R|w|B|i|ne|V|D,Z=function(Ot){return Ot+(Ot&1?1:2)},I=function(Ot){return Ot+(Ot&1?2:1)},ie=0;ie<Q.length;ie++){se=Q[ie];var pe=[{_level:se.level,_override:0,_isolate:0}],ae=void 0,ve=0,Le=0,ke=0;A.clear();for(var O=se.start;O<=se.end;O++){var ue=oe[O];if(ae=pe[pe.length-1],A.set(ue,(A.get(ue)||0)+1),ue&s&&A.set(s,(A.get(s)||0)+1),ue&fe)if(ue&(G|R)){z[O]=ae._level;var J=(ue===G?I:Z)(ae._level);J<=Te&&!ve&&!Le?pe.push({_level:J,_override:0,_isolate:0}):ve||Le++}else if(ue&(w|B)){z[O]=ae._level;var Me=(ue===w?I:Z)(ae._level);Me<=Te&&!ve&&!Le?pe.push({_level:Me,_override:ue&w?N:E,_isolate:0}):ve||Le++}else if(ue&i){ue&$&&(ue=Lo(O+1,!0)===1?re:H),z[O]=ae._level,ae._override&&M(O,ae._override);var ge=(ue===re?I:Z)(ae._level);ge<=Te&&ve===0&&Le===0?(ke++,pe.push({_level:ge,_override:0,_isolate:1,_isolInitIndex:O})):ve++}else if(ue&ne){if(ve>0)ve--;else if(ke>0){for(Le=0;!pe[pe.length-1]._isolate;)pe.pop();var Pe=pe[pe.length-1]._isolInitIndex;Pe!=null&&(me.set(Pe,O),me.set(O,Pe)),pe.pop(),ke--}ae=pe[pe.length-1],z[O]=ae._level,ae._override&&M(O,ae._override)}else ue&V?(ve===0&&(Le>0?Le--:!ae._isolate&&pe.length>1&&(pe.pop(),ae=pe[pe.length-1])),z[O]=ae._level):ue&D&&(z[O]=se.level);else z[O]=ae._level,ae._override&&ue!==j&&M(O,ae._override)}for(var ze=[],Be=null,Ne=se.start;Ne<=se.end;Ne++){var Ge=oe[Ne];if(!(Ge&l)){var Qe=z[Ne],Ke=Ge&i,st=Ge===ne;Be&&Qe===Be._level?(Be._end=Ne,Be._endsWithIsolInit=Ke):ze.push(Be={_start:Ne,_end:Ne,_level:Qe,_startsWithPDI:st,_endsWithIsolInit:Ke})}}for(var Ft=[],cn=0;cn<ze.length;cn++){var Nt=ze[cn];if(!Nt._startsWithPDI||Nt._startsWithPDI&&!me.has(Nt._start)){for(var Jt=[Be=Nt],Xt=void 0;Be&&Be._endsWithIsolInit&&(Xt=me.get(Be._end))!=null;)for(var Yt=cn+1;Yt<ze.length;Yt++)if(ze[Yt]._start===Xt){Jt.push(Be=ze[Yt]);break}for(var yt=[],gn=0;gn<Jt.length;gn++)for(var kr=Jt[gn],P=kr._start;P<=kr._end;P++)yt.push(P);for(var ee=z[yt[0]],ce=se.level,te=yt[0]-1;te>=0;te--)if(!(oe[te]&l)){ce=z[te];break}var le=yt[yt.length-1],Ie=z[le],Oe=se.level;if(!(oe[le]&i)){for(var He=le+1;He<=se.end;He++)if(!(oe[He]&l)){Oe=z[He];break}}Ft.push({_seqIndices:yt,_sosType:Math.max(ce,ee)%2?N:E,_eosType:Math.max(Oe,Ie)%2?N:E})}}for(var Ve=0;Ve<Ft.length;Ve++){var Ye=Ft[Ve],ye=Ye._seqIndices,We=Ye._sosType,et=Ye._eosType,Je=z[ye[0]]&1?N:E;if(A.get(q))for(var St=0;St<ye.length;St++){var jt=ye[St];if(oe[jt]&q){for(var tt=We,je=St-1;je>=0;je--)if(!(oe[ye[je]]&l)){tt=oe[ye[je]];break}M(jt,tt&(i|ne)?W:tt)}}if(A.get(y))for(var Dn=0;Dn<ye.length;Dn++){var rt=ye[Dn];if(oe[rt]&y)for(var qt=Dn-1;qt>=-1;qt--){var tr=qt===-1?We:oe[ye[qt]];if(tr&o){tr===X&&M(rt,L);break}}}if(A.get(X))for(var vn=0;vn<ye.length;vn++){var hi=ye[vn];oe[hi]&X&&M(hi,N)}if(A.get(T)||A.get(U))for(var lt=1;lt<ye.length-1;lt++){var $t=ye[lt];if(oe[$t]&(T|U)){for(var un=0,Mt=0,Xn=lt-1;Xn>=0&&(un=oe[ye[Xn]],!!(un&l));Xn--);for(var nr=lt+1;nr<ye.length&&(Mt=oe[ye[nr]],!!(Mt&l));nr++);un===Mt&&(oe[$t]===T?un===y:un&(y|L))&&M($t,un)}}if(A.get(y))for(var zt=0;zt<ye.length;zt++){var Bu=ye[zt];if(oe[Bu]&y){for(var zr=zt-1;zr>=0&&oe[ye[zr]]&(K|l);zr--)M(ye[zr],y);for(zt++;zt<ye.length&&oe[ye[zt]]&(K|l|y);zt++)oe[ye[zt]]!==y&&M(ye[zt],y)}}if(A.get(K)||A.get(T)||A.get(U))for(var ir=0;ir<ye.length;ir++){var _o=ye[ir];if(oe[_o]&(K|T|U)){M(_o,W);for(var Gr=ir-1;Gr>=0&&oe[ye[Gr]]&l;Gr--)M(ye[Gr],W);for(var Hr=ir+1;Hr<ye.length&&oe[ye[Hr]]&l;Hr++)M(ye[Hr],W)}}if(A.get(y))for(var Ha=0,xo=We;Ha<ye.length;Ha++){var yo=ye[Ha],Va=oe[yo];Va&y?xo===E&&M(yo,E):Va&o&&(xo=Va)}if(A.get(s)){var rr=N|y|L,So=rr|E,Vr=[];{for(var fi=[],di=0;di<ye.length;di++)if(oe[ye[di]]&s){var ar=de[ye[di]],Mo=void 0;if(x(ar)!==null)if(fi.length<63)fi.push({char:ar,seqIndex:di});else break;else if((Mo=b(ar))!==null)for(var sr=fi.length-1;sr>=0;sr--){var Wa=fi[sr].char;if(Wa===Mo||Wa===b(C(ar))||x(C(Wa))===ar){Vr.push([fi[sr].seqIndex,di]),fi.length=sr;break}}}Vr.sort(function(Ot,en){return Ot[0]-en[0]})}for(var Xa=0;Xa<Vr.length;Xa++){for(var bo=Vr[Xa],Wr=bo[0],Ya=bo[1],Eo=!1,Qt=0,ja=Wr+1;ja<Ya;ja++){var To=ye[ja];if(oe[To]&So){Eo=!0;var Ao=oe[To]&rr?N:E;if(Ao===Je){Qt=Ao;break}}}if(Eo&&!Qt){Qt=We;for(var qa=Wr-1;qa>=0;qa--){var wo=ye[qa];if(oe[wo]&So){var Co=oe[wo]&rr?N:E;Co!==Je?Qt=Co:Qt=Je;break}}}if(Qt){if(oe[ye[Wr]]=oe[ye[Ya]]=Qt,Qt!==Je){for(var or=Wr+1;or<ye.length;or++)if(!(oe[ye[or]]&l)){h(de[ye[or]])&q&&(oe[ye[or]]=Qt);break}}if(Qt!==Je){for(var lr=Ya+1;lr<ye.length;lr++)if(!(oe[ye[lr]]&l)){h(de[ye[lr]])&q&&(oe[ye[lr]]=Qt);break}}}}for(var In=0;In<ye.length;In++)if(oe[ye[In]]&s){for(var Ro=In,Za=In,Ka=We,cr=In-1;cr>=0;cr--)if(oe[ye[cr]]&l)Ro=cr;else{Ka=oe[ye[cr]]&rr?N:E;break}for(var Po=et,ur=In+1;ur<ye.length;ur++)if(oe[ye[ur]]&(s|l))Za=ur;else{Po=oe[ye[ur]]&rr?N:E;break}for(var Ja=Ro;Ja<=Za;Ja++)oe[ye[Ja]]=Ka===Po?Ka:Je;In=Za}}}for(var Gt=se.start;Gt<=se.end;Gt++){var ku=z[Gt],Xr=oe[Gt];if(ku&1?Xr&(E|y|L)&&z[Gt]++:Xr&N?z[Gt]++:Xr&(L|y)&&(z[Gt]+=2),Xr&l&&(z[Gt]=Gt===0?se.level:z[Gt-1]),Gt===se.end||h(de[Gt])&(k|D))for(var Yr=Gt;Yr>=0&&h(de[Yr])&c;Yr--)z[Yr]=se.level}}return{levels:z,paragraphs:Q};function Lo(Ot,en){for(var Bt=Ot;Bt<de.length;Bt++){var Fn=oe[Bt];if(Fn&(N|X))return 1;if(Fn&(D|E)||en&&Fn===ne)return 0;if(Fn&i){var Uo=zu(Bt);Bt=Uo===-1?de.length:Uo}}return 0}function zu(Ot){for(var en=1,Bt=Ot+1;Bt<de.length;Bt++){var Fn=oe[Bt];if(Fn&D)break;if(Fn&ne){if(--en===0)return Bt}else Fn&i&&en++}return-1}}var Ce="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",he;function F(){if(!he){var de=v(Ce,!0),Se=de.map,Te=de.reverseMap;Te.forEach(function(oe,Re){Se.set(Re,oe)}),he=Se}}function Fe(de){return F(),he.get(de)||null}function be(de,Se,Te,oe){var Re=de.length;Te=Math.max(0,Te==null?0:+Te),oe=Math.min(Re-1,oe==null?Re-1:+oe);for(var A=new Map,M=Te;M<=oe;M++)if(Se[M]&1){var z=Fe(de[M]);z!==null&&A.set(M,z)}return A}function Ae(de,Se,Te,oe){var Re=de.length;Te=Math.max(0,Te==null?0:+Te),oe=Math.min(Re-1,oe==null?Re-1:+oe);var A=[];return Se.paragraphs.forEach(function(M){var z=Math.max(Te,M.start),me=Math.min(oe,M.end);if(z<me){for(var Q=Se.levels.slice(z,me+1),se=me;se>=z&&h(de[se])&c;se--)Q[se]=M.level;for(var _e=M.level,fe=1/0,Z=0;Z<Q.length;Z++){var I=Q[Z];I>_e&&(_e=I),I<fe&&(fe=I|1)}for(var ie=_e;ie>=fe;ie--)for(var pe=0;pe<Q.length;pe++)if(Q[pe]>=ie){for(var ae=pe;pe+1<Q.length&&Q[pe+1]>=ie;)pe++;pe>ae&&A.push([ae+z,pe+z])}}}),A}function Ee(de,Se,Te,oe){var Re=Ue(de,Se,Te,oe),A=[].concat(de);return Re.forEach(function(M,z){A[z]=(Se.levels[M]&1?Fe(de[M]):null)||de[M]}),A.join("")}function Ue(de,Se,Te,oe){for(var Re=Ae(de,Se,Te,oe),A=[],M=0;M<de.length;M++)A[M]=M;return Re.forEach(function(z){for(var me=z[0],Q=z[1],se=A.slice(me,Q+1),_e=se.length;_e--;)A[Q-_e]=se[_e]}),A}return e.closingToOpeningBracket=b,e.getBidiCharType=h,e.getBidiCharTypeName=d,e.getCanonicalBracket=C,e.getEmbeddingLevels=xe,e.getMirroredCharacter=Fe,e.getMirroredCharactersMap=be,e.getReorderSegments=Ae,e.getReorderedIndices=Ue,e.getReorderedString=Ee,e.openingToClosingBracket=x,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const gu=/\bvoid\s+main\s*\(\s*\)\s*{/g;function qs(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,r){let i=qe[r];return i?qs(i):n}return a.replace(e,t)}const bt=[];for(let a=0;a<256;a++)bt[a]=(a<16?"0":"")+a.toString(16);function Uv(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[a&255]+bt[a>>8&255]+bt[a>>16&255]+bt[a>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toUpperCase()}const Jn=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let r in n)Object.prototype.hasOwnProperty.call(n,r)&&(a[r]=n[r])}return a},Dv=Date.now(),hc=new WeakMap,fc=new Map;let Iv=1e10;function Zs(a,e){const t=Bv(e);let n=hc.get(a);if(n||hc.set(a,n=Object.create(null)),n[t])return new n[t];const r=`_onBeforeCompile${t}`,i=function(c,u){a.onBeforeCompile.call(this,c,u);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=fc[f];if(!h){const d=Fv(this,c,e,t);h=fc[f]=d}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,Jn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Dv}}),this[r]&&this[r](c)},o=function(){return s(e.chained?a:a.clone())},s=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:Iv++}),u.uuid=Uv(),u.uniforms=Jn({},c.uniforms,e.uniforms),u.defines=Jn({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=Jn({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:o},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[r]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(Jn(this.extensions,c.extensions),Jn(this.defines,c.defines),Jn(this.uniforms,Rr.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return s(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Zs(a.isDerivedMaterial?a.getDepthMaterial():new ru({depthPacking:Hc}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Zs(a.isDerivedMaterial?a.getDistanceMaterial():new au,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return n[t]=o,new o}function Fv(a,{vertexShader:e,fragmentShader:t},n,r){let{vertexDefs:i,vertexMainIntro:o,vertexMainOutro:s,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:d,timeUniform:g}=n;if(i=i||"",o=o||"",s=s||"",c=c||"",u=u||"",f=f||"",(l||d)&&(e=qs(e)),(h||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=qs(t)),d){let v=d({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(h){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(v.push(m),"")),f=`${h}
${v.join(`
`)}
${f}`}if(g){const v=`
uniform float ${g};
`;i=v+i,c=v+c}return l&&(e=`vec3 troika_position_${r};
vec3 troika_normal_${r};
vec2 troika_uv_${r};
${e}
`,i=`${i}
void troikaVertexTransform${r}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,o=`
troika_position_${r} = vec3(position);
troika_normal_${r} = vec3(normal);
troika_uv_${r} = vec2(uv);
troikaVertexTransform${r}(troika_position_${r}, troika_normal_${r}, troika_uv_${r});
${o}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,m,p,S)=>/\battribute\s+vec[23]\s+$/.test(S.substr(0,p))?m:`troika_${m}_${r}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${r}`))),e=dc(e,r,i,o,s),t=dc(t,r,c,u,f),{vertexShader:e,fragmentShader:t}}function dc(a,e,t,n,r){return(n||r||t)&&(a=a.replace(gu,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${r}
}`),a}function Nv(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let Ov=0;const pc=new Map;function Bv(a){const e=JSON.stringify(a,Nv);let t=pc.get(e);return t==null&&pc.set(e,t=++Ov),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function kv(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(r){var i=e._bin,o=new Uint8Array(r);if(i.readASCII(o,0,4)=="ttcf"){var s=4;i.readUshort(o,s),s+=2,i.readUshort(o,s),s+=2;var l=i.readUint(o,s);s+=4;for(var c=[],u=0;u<l;u++){var f=i.readUint(o,s);s+=4,c.push(e._readFont(o,f))}return c}return[e._readFont(o,0)]},_readFont:function(r,i){var o=e._bin,s=i;o.readFixed(r,i),i+=4;var l=o.readUshort(r,i);i+=2,o.readUshort(r,i),i+=2,o.readUshort(r,i),i+=2,o.readUshort(r,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:r,_offset:s},f={},h=0;h<l;h++){var d=o.readASCII(r,i,4);i+=4,o.readUint(r,i),i+=4;var g=o.readUint(r,i);i+=4;var v=o.readUint(r,i);i+=4,f[d]={offset:g,length:v}}for(h=0;h<c.length;h++){var m=c[h];f[m]&&(u[m.trim()]=e[m.trim()].parse(r,f[m].offset,f[m].length,u))}return u},_tabOffset:function(r,i,o){for(var s=e._bin,l=s.readUshort(r,o+4),c=o+12,u=0;u<l;u++){var f=s.readASCII(r,c,4);c+=4,s.readUint(r,c),c+=4;var h=s.readUint(r,c);if(c+=4,s.readUint(r,c),c+=4,f==i)return h}return 0}};e._bin={readFixed:function(r,i){return(r[i]<<8|r[i+1])+(r[i+2]<<8|r[i+3])/65540},readF2dot14:function(r,i){return e._bin.readShort(r,i)/16384},readInt:function(r,i){return e._bin._view(r).getInt32(i)},readInt8:function(r,i){return e._bin._view(r).getInt8(i)},readShort:function(r,i){return e._bin._view(r).getInt16(i)},readUshort:function(r,i){return e._bin._view(r).getUint16(i)},readUshorts:function(r,i,o){for(var s=[],l=0;l<o;l++)s.push(e._bin.readUshort(r,i+2*l));return s},readUint:function(r,i){return e._bin._view(r).getUint32(i)},readUint64:function(r,i){return 4294967296*e._bin.readUint(r,i)+e._bin.readUint(r,i+4)},readASCII:function(r,i,o){for(var s="",l=0;l<o;l++)s+=String.fromCharCode(r[i+l]);return s},readUnicode:function(r,i,o){for(var s="",l=0;l<o;l++){var c=r[i++]<<8|r[i++];s+=String.fromCharCode(c)}return s},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(r,i,o){var s=e._bin._tdec;return s&&i==0&&o==r.length?s.decode(r):e._bin.readASCII(r,i,o)},readBytes:function(r,i,o){for(var s=[],l=0;l<o;l++)s.push(r[i+l]);return s},readASCIIArray:function(r,i,o){for(var s=[],l=0;l<o;l++)s.push(String.fromCharCode(r[i+l]));return s},_view:function(r){return r._dataView||(r._dataView=r.buffer?new DataView(r.buffer,r.byteOffset,r.byteLength):new DataView(new Uint8Array(r).buffer))}},e._lctf={},e._lctf.parse=function(r,i,o,s,l){var c=e._bin,u={},f=i;c.readFixed(r,i),i+=4;var h=c.readUshort(r,i);i+=2;var d=c.readUshort(r,i);i+=2;var g=c.readUshort(r,i);return i+=2,u.scriptList=e._lctf.readScriptList(r,f+h),u.featureList=e._lctf.readFeatureList(r,f+d),u.lookupList=e._lctf.readLookupList(r,f+g,l),u},e._lctf.readLookupList=function(r,i,o){var s=e._bin,l=i,c=[],u=s.readUshort(r,i);i+=2;for(var f=0;f<u;f++){var h=s.readUshort(r,i);i+=2;var d=e._lctf.readLookupTable(r,l+h,o);c.push(d)}return c},e._lctf.readLookupTable=function(r,i,o){var s=e._bin,l=i,c={tabs:[]};c.ltype=s.readUshort(r,i),i+=2,c.flag=s.readUshort(r,i),i+=2;var u=s.readUshort(r,i);i+=2;for(var f=c.ltype,h=0;h<u;h++){var d=s.readUshort(r,i);i+=2;var g=o(r,f,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(r){for(var i=0,o=0;o<32;o++)r>>>o&1&&i++;return i},e._lctf.readClassDef=function(r,i){var o=e._bin,s=[],l=o.readUshort(r,i);if(i+=2,l==1){var c=o.readUshort(r,i);i+=2;var u=o.readUshort(r,i);i+=2;for(var f=0;f<u;f++)s.push(c+f),s.push(c+f),s.push(o.readUshort(r,i)),i+=2}if(l==2){var h=o.readUshort(r,i);for(i+=2,f=0;f<h;f++)s.push(o.readUshort(r,i)),i+=2,s.push(o.readUshort(r,i)),i+=2,s.push(o.readUshort(r,i)),i+=2}return s},e._lctf.getInterval=function(r,i){for(var o=0;o<r.length;o+=3){var s=r[o],l=r[o+1];if(r[o+2],s<=i&&i<=l)return o}return-1},e._lctf.readCoverage=function(r,i){var o=e._bin,s={};s.fmt=o.readUshort(r,i),i+=2;var l=o.readUshort(r,i);return i+=2,s.fmt==1&&(s.tab=o.readUshorts(r,i,l)),s.fmt==2&&(s.tab=o.readUshorts(r,i,3*l)),s},e._lctf.coverageIndex=function(r,i){var o=r.tab;if(r.fmt==1)return o.indexOf(i);if(r.fmt==2){var s=e._lctf.getInterval(o,i);if(s!=-1)return o[s+2]+(i-o[s])}return-1},e._lctf.readFeatureList=function(r,i){var o=e._bin,s=i,l=[],c=o.readUshort(r,i);i+=2;for(var u=0;u<c;u++){var f=o.readASCII(r,i,4);i+=4;var h=o.readUshort(r,i);i+=2;var d=e._lctf.readFeatureTable(r,s+h);d.tag=f.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(r,i){var o=e._bin,s=i,l={},c=o.readUshort(r,i);i+=2,c>0&&(l.featureParams=s+c);var u=o.readUshort(r,i);i+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(o.readUshort(r,i+2*f));return l},e._lctf.readScriptList=function(r,i){var o=e._bin,s=i,l={},c=o.readUshort(r,i);i+=2;for(var u=0;u<c;u++){var f=o.readASCII(r,i,4);i+=4;var h=o.readUshort(r,i);i+=2,l[f.trim()]=e._lctf.readScriptTable(r,s+h)}return l},e._lctf.readScriptTable=function(r,i){var o=e._bin,s=i,l={},c=o.readUshort(r,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(r,s+c));var u=o.readUshort(r,i);i+=2;for(var f=0;f<u;f++){var h=o.readASCII(r,i,4);i+=4;var d=o.readUshort(r,i);i+=2,l[h.trim()]=e._lctf.readLangSysTable(r,s+d)}return l},e._lctf.readLangSysTable=function(r,i){var o=e._bin,s={};o.readUshort(r,i),i+=2,s.reqFeature=o.readUshort(r,i),i+=2;var l=o.readUshort(r,i);return i+=2,s.features=o.readUshorts(r,i,l),s},e.CFF={},e.CFF.parse=function(r,i,o){var s=e._bin;(r=new Uint8Array(r.buffer,i,o))[i=0],r[++i],r[++i],r[++i],i++;var l=[];i=e.CFF.readIndex(r,i,l);for(var c=[],u=0;u<l.length-1;u++)c.push(s.readASCII(r,i+l[u],l[u+1]-l[u]));i+=l[l.length-1];var f=[];i=e.CFF.readIndex(r,i,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(r,i+f[u],i+f[u+1]));i+=f[f.length-1];var d=h[0],g=[];i=e.CFF.readIndex(r,i,g);var v=[];for(u=0;u<g.length-1;u++)v.push(s.readASCII(r,i+g[u],g[u+1]-g[u]));if(i+=g[g.length-1],e.CFF.readSubrs(r,i,d),d.CharStrings){i=d.CharStrings,g=[],i=e.CFF.readIndex(r,i,g);var m=[];for(u=0;u<g.length-1;u++)m.push(s.readBytes(r,i+g[u],g[u+1]-g[u]));d.CharStrings=m}if(d.ROS){i=d.FDArray;var p=[];for(i=e.CFF.readIndex(r,i,p),d.FDArray=[],u=0;u<p.length-1;u++){var S=e.CFF.readDict(r,i+p[u],i+p[u+1]);e.CFF._readFDict(r,S,v),d.FDArray.push(S)}i+=p[p.length-1],i=d.FDSelect,d.FDSelect=[];var _=r[i];if(i++,_!=3)throw _;var x=s.readUshort(r,i);for(i+=2,u=0;u<x+1;u++)d.FDSelect.push(s.readUshort(r,i),r[i+2]),i+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(r,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(r,d.charset,d.CharStrings.length)),e.CFF._readFDict(r,d,v),d},e.CFF._readFDict=function(r,i,o){var s;for(var l in i.Private&&(s=i.Private[1],i.Private=e.CFF.readDict(r,s,s+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(r,s+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=o[i[l]-426+35])},e.CFF.readSubrs=function(r,i,o){var s=e._bin,l=[];i=e.CFF.readIndex(r,i,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var f=0;f<l.length-1;f++)o.Subrs.push(s.readBytes(r,i+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(r,i){for(var o=0;o<r.charset.length;o++)if(r.charset[o]==i)return o;return-1},e.CFF.glyphBySE=function(r,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(r,e.CFF.tableSE[i])},e.CFF.readEncoding=function(r,i,o){e._bin;var s=[".notdef"],l=r[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=r[i];i++;for(var u=0;u<c;u++)s.push(r[i+u]);return s},e.CFF.readCharset=function(r,i,o){var s=e._bin,l=[".notdef"],c=r[i];if(i++,c==0)for(var u=0;u<o;u++){var f=s.readUshort(r,i);i+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){f=s.readUshort(r,i),i+=2;var h=0;for(c==1?(h=r[i],i++):(h=s.readUshort(r,i),i+=2),u=0;u<=h;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(r,i,o){var s=e._bin,l=s.readUshort(r,i)+1,c=r[i+=2];if(i++,c==1)for(var u=0;u<l;u++)o.push(r[i+u]);else if(c==2)for(u=0;u<l;u++)o.push(s.readUshort(r,i+2*u));else if(c==3)for(u=0;u<l;u++)o.push(16777215&s.readUint(r,i+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(r,i,o){var s=e._bin,l=r[i],c=r[i+1];r[i+2],r[i+3],r[i+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=s.readShort(r,i+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=s.readInt(r,i+1)/65535,u=5),o.val=h??"o"+f,o.size=u},e.CFF.readCharString=function(r,i,o){for(var s=i+o,l=e._bin,c=[];i<s;){var u=r[i],f=r[i+1];r[i+2],r[i+3],r[i+4];var h=1,d=null,g=null;u<=20&&(d=u,h=1),u==12&&(d=100*u+f,h=2),u!=19&&u!=20||(d=u,h=2),21<=u&&u<=27&&(d=u,h=1),u==28&&(g=l.readShort(r,i+1),h=3),29<=u&&u<=31&&(d=u,h=1),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255&&(g=l.readInt(r,i+1)/65535,h=5),c.push(g??"o"+d),i+=h}return c},e.CFF.readDict=function(r,i,o){for(var s=e._bin,l={},c=[];i<o;){var u=r[i],f=r[i+1];r[i+2],r[i+3],r[i+4];var h=1,d=null,g=null;if(u==28&&(g=s.readShort(r,i+1),h=3),u==29&&(g=s.readInt(r,i+1),h=5),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255)throw g=s.readInt(r,i+1)/65535,h=5,"unknown number";if(u==30){var v=[];for(h=1;;){var m=r[i+h];h++;var p=m>>4,S=15&m;if(p!=15&&v.push(p),S!=15&&v.push(S),S==15)break}for(var _="",x=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],b=0;b<v.length;b++)_+=x[v[b]];g=parseFloat(_)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),i+=h}return l},e.cmap={},e.cmap.parse=function(r,i,o){r=new Uint8Array(r.buffer,i,o),i=0;var s=e._bin,l={};s.readUshort(r,i),i+=2;var c=s.readUshort(r,i);i+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=s.readUshort(r,i);i+=2;var d=s.readUshort(r,i);i+=2;var g=s.readUint(r,i);i+=4;var v="p"+h+"e"+d,m=u.indexOf(g);if(m==-1){var p;m=l.tables.length,u.push(g);var S=s.readUshort(r,g);S==0?p=e.cmap.parse0(r,g):S==4?p=e.cmap.parse4(r,g):S==6?p=e.cmap.parse6(r,g):S==12?p=e.cmap.parse12(r,g):console.debug("unknown format: "+S,h,d,g),l.tables.push(p)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=m}return l},e.cmap.parse0=function(r,i){var o=e._bin,s={};s.format=o.readUshort(r,i),i+=2;var l=o.readUshort(r,i);i+=2,o.readUshort(r,i),i+=2,s.map=[];for(var c=0;c<l-6;c++)s.map.push(r[i+c]);return s},e.cmap.parse4=function(r,i){var o=e._bin,s=i,l={};l.format=o.readUshort(r,i),i+=2;var c=o.readUshort(r,i);i+=2,o.readUshort(r,i),i+=2;var u=o.readUshort(r,i);i+=2;var f=u/2;l.searchRange=o.readUshort(r,i),i+=2,l.entrySelector=o.readUshort(r,i),i+=2,l.rangeShift=o.readUshort(r,i),i+=2,l.endCount=o.readUshorts(r,i,f),i+=2*f,i+=2,l.startCount=o.readUshorts(r,i,f),i+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(o.readShort(r,i)),i+=2;for(l.idRangeOffset=o.readUshorts(r,i,f),i+=2*f,l.glyphIdArray=[];i<s+c;)l.glyphIdArray.push(o.readUshort(r,i)),i+=2;return l},e.cmap.parse6=function(r,i){var o=e._bin,s={};s.format=o.readUshort(r,i),i+=2,o.readUshort(r,i),i+=2,o.readUshort(r,i),i+=2,s.firstCode=o.readUshort(r,i),i+=2;var l=o.readUshort(r,i);i+=2,s.glyphIdArray=[];for(var c=0;c<l;c++)s.glyphIdArray.push(o.readUshort(r,i)),i+=2;return s},e.cmap.parse12=function(r,i){var o=e._bin,s={};s.format=o.readUshort(r,i),i+=2,i+=2,o.readUint(r,i),i+=4,o.readUint(r,i),i+=4;var l=o.readUint(r,i);i+=4,s.groups=[];for(var c=0;c<l;c++){var u=i+12*c,f=o.readUint(r,u+0),h=o.readUint(r,u+4),d=o.readUint(r,u+8);s.groups.push([f,h,d])}return s},e.glyf={},e.glyf.parse=function(r,i,o,s){for(var l=[],c=0;c<s.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(r,i){var o=e._bin,s=r._data,l=e._tabOffset(s,"glyf",r._offset)+r.loca[i];if(r.loca[i]==r.loca[i+1])return null;var c={};if(c.noc=o.readShort(s,l),l+=2,c.xMin=o.readShort(s,l),l+=2,c.yMin=o.readShort(s,l),l+=2,c.xMax=o.readShort(s,l),l+=2,c.yMax=o.readShort(s,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(o.readUshort(s,l)),l+=2;var f=o.readUshort(s,l);if(l+=2,s.length-l<f)return null;c.instructions=o.readBytes(s,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var d=s[l];if(l++,c.flags.push(d),(8&d)!=0){var g=s[l];l++;for(var v=0;v<g;v++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<h;u++){var m=(2&c.flags[u])!=0,p=(16&c.flags[u])!=0;m?(c.xs.push(p?s[l]:-s[l]),l++):p?c.xs.push(0):(c.xs.push(o.readShort(s,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)m=(4&c.flags[u])!=0,p=(32&c.flags[u])!=0,m?(c.ys.push(p?s[l]:-s[l]),l++):p?c.ys.push(0):(c.ys.push(o.readShort(s,l)),l+=2);var S=0,_=0;for(u=0;u<h;u++)S+=c.xs[u],_+=c.ys[u],c.xs[u]=S,c.ys[u]=_}else{var x;c.parts=[];do{x=o.readUshort(s,l),l+=2;var b={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(b),b.glyphIndex=o.readUshort(s,l),l+=2,1&x){var C=o.readShort(s,l);l+=2;var E=o.readShort(s,l);l+=2}else C=o.readInt8(s,l),l++,E=o.readInt8(s,l),l++;2&x?(b.m.tx=C,b.m.ty=E):(b.p1=C,b.p2=E),8&x?(b.m.a=b.m.d=o.readF2dot14(s,l),l+=2):64&x?(b.m.a=o.readF2dot14(s,l),l+=2,b.m.d=o.readF2dot14(s,l),l+=2):128&x&&(b.m.a=o.readF2dot14(s,l),l+=2,b.m.b=o.readF2dot14(s,l),l+=2,b.m.c=o.readF2dot14(s,l),l+=2,b.m.d=o.readF2dot14(s,l),l+=2)}while(32&x);if(256&x){var N=o.readUshort(s,l);for(l+=2,c.instr=[],u=0;u<N;u++)c.instr.push(s[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(r,i,o,s){var l=i;i+=4;var c=e._bin.readUshort(r,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(r,l+c)}},e.GPOS={},e.GPOS.parse=function(r,i,o,s){return e._lctf.parse(r,i,o,s,e.GPOS.subt)},e.GPOS.subt=function(r,i,o,s){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(r,o),o+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var f=l.readUshort(r,o);o+=2,u.coverage=e._lctf.readCoverage(r,f+c)}if(i==1&&u.fmt==1){var h=l.readUshort(r,o);o+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(r,o,h))}else if(i==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(r,o),o+=2;var d=l.readUshort(r,o);o+=2;var g=e._lctf.numOfOnes(h),v=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(r,o);o+=2;for(var p=0;p<m;p++){var S=c+l.readUshort(r,o);o+=2;var _=l.readUshort(r,S);S+=2;for(var x=[],b=0;b<_;b++){var C=l.readUshort(r,S);S+=2,h!=0&&(L=e.GPOS.readValueRecord(r,S,h),S+=2*g),d!=0&&(U=e.GPOS.readValueRecord(r,S,d),S+=2*v),x.push({gid2:C,val1:L,val2:U})}u.pairsets.push(x)}}if(u.fmt==2){var E=l.readUshort(r,o);o+=2;var N=l.readUshort(r,o);o+=2;var y=l.readUshort(r,o);o+=2;var T=l.readUshort(r,o);for(o+=2,u.classDef1=e._lctf.readClassDef(r,c+E),u.classDef2=e._lctf.readClassDef(r,c+N),u.matrix=[],p=0;p<y;p++){var K=[];for(b=0;b<T;b++){var L=null,U=null;h!=0&&(L=e.GPOS.readValueRecord(r,o,h),o+=2*g),d!=0&&(U=e.GPOS.readValueRecord(r,o,d),o+=2*v),K.push({val1:L,val2:U})}u.matrix.push(K)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(r,l.readUshort(r,o)+c),u.baseCoverage=e._lctf.readCoverage(r,l.readUshort(r,o+2)+c),u.markClassCount=l.readUshort(r,o+4),u.markArray=e.GPOS.readMarkArray(r,l.readUshort(r,o+6)+c),u.baseArray=e.GPOS.readBaseArray(r,l.readUshort(r,o+8)+c,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(r,l.readUshort(r,o)+c),u.mark2Coverage=e._lctf.readCoverage(r,l.readUshort(r,o+2)+c),u.markClassCount=l.readUshort(r,o+4),u.mark1Array=e.GPOS.readMarkArray(r,l.readUshort(r,o+6)+c),u.mark2Array=e.GPOS.readBaseArray(r,l.readUshort(r,o+8)+c,u.markClassCount);else{if(i==9&&u.fmt==1){var D=l.readUshort(r,o);o+=2;var k=l.readUint(r,o);if(o+=4,s.ltype==9)s.ltype=D;else if(s.ltype!=D)throw"invalid extension substitution";return e.GPOS.subt(r,s.ltype,c+k)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(r,i,o){var s=e._bin,l=[];return l.push(1&o?s.readShort(r,i):0),i+=1&o?2:0,l.push(2&o?s.readShort(r,i):0),i+=2&o?2:0,l.push(4&o?s.readShort(r,i):0),i+=4&o?2:0,l.push(8&o?s.readShort(r,i):0),i+=8&o?2:0,l},e.GPOS.readBaseArray=function(r,i,o){var s=e._bin,l=[],c=i,u=s.readUshort(r,i);i+=2;for(var f=0;f<u;f++){for(var h=[],d=0;d<o;d++)h.push(e.GPOS.readAnchorRecord(r,c+s.readUshort(r,i))),i+=2;l.push(h)}return l},e.GPOS.readMarkArray=function(r,i){var o=e._bin,s=[],l=i,c=o.readUshort(r,i);i+=2;for(var u=0;u<c;u++){var f=e.GPOS.readAnchorRecord(r,o.readUshort(r,i+2)+l);f.markClass=o.readUshort(r,i),s.push(f),i+=4}return s},e.GPOS.readAnchorRecord=function(r,i){var o=e._bin,s={};return s.fmt=o.readUshort(r,i),s.x=o.readShort(r,i+2),s.y=o.readShort(r,i+4),s},e.GSUB={},e.GSUB.parse=function(r,i,o,s){return e._lctf.parse(r,i,o,s,e.GSUB.subt)},e.GSUB.subt=function(r,i,o,s){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(r,o),o+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var f=l.readUshort(r,o);o+=2,u.coverage=e._lctf.readCoverage(r,c+f)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(r,o),o+=2;else if(u.fmt==2){var h=l.readUshort(r,o);o+=2,u.newg=l.readUshorts(r,o,h),o+=2*u.newg.length}}else if(i==2&&u.fmt==1){h=l.readUshort(r,o),o+=2,u.seqs=[];for(var d=0;d<h;d++){var g=l.readUshort(r,o)+c;o+=2;var v=l.readUshort(r,g);u.seqs.push(l.readUshorts(r,g+2,v))}}else if(i==4)for(u.vals=[],h=l.readUshort(r,o),o+=2,d=0;d<h;d++){var m=l.readUshort(r,o);o+=2,u.vals.push(e.GSUB.readLigatureSet(r,c+m))}else if(i==5&&u.fmt==2){if(u.fmt==2){var p=l.readUshort(r,o);o+=2,u.cDef=e._lctf.readClassDef(r,c+p),u.scset=[];var S=l.readUshort(r,o);for(o+=2,d=0;d<S;d++){var _=l.readUshort(r,o);o+=2,u.scset.push(_==0?null:e.GSUB.readSubClassSet(r,c+_))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){h=l.readUshort(r,o),o+=2;for(var x=[],b=0;b<h;b++)x.push(e._lctf.readCoverage(r,c+l.readUshort(r,o+2*b)));o+=2*h,d==0&&(u.backCvg=x),d==1&&(u.inptCvg=x),d==2&&(u.ahedCvg=x)}h=l.readUshort(r,o),o+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(r,o,h)}}else{if(i==7&&u.fmt==1){var C=l.readUshort(r,o);o+=2;var E=l.readUint(r,o);if(o+=4,s.ltype==9)s.ltype=C;else if(s.ltype!=C)throw"invalid extension substitution";return e.GSUB.subt(r,s.ltype,c+E)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(r,i){var o=e._bin.readUshort,s=i,l=[],c=o(r,i);i+=2;for(var u=0;u<c;u++){var f=o(r,i);i+=2,l.push(e.GSUB.readSubClassRule(r,s+f))}return l},e.GSUB.readSubClassRule=function(r,i){var o=e._bin.readUshort,s={},l=o(r,i),c=o(r,i+=2);i+=2,s.input=[];for(var u=0;u<l-1;u++)s.input.push(o(r,i)),i+=2;return s.substLookupRecords=e.GSUB.readSubstLookupRecords(r,i,c),s},e.GSUB.readSubstLookupRecords=function(r,i,o){for(var s=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(s(r,i),s(r,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(r,i){var o=e._bin,s=i,l=[],c=o.readUshort(r,i);i+=2;for(var u=0;u<c;u++){var f=o.readUshort(r,i);i+=2,l.push(e.GSUB.readChainSubClassRule(r,s+f))}return l},e.GSUB.readChainSubClassRule=function(r,i){for(var o=e._bin,s={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=o.readUshort(r,i);i+=2,c==1&&u--,s[l[c]]=o.readUshorts(r,i,u),i+=2*s[l[c]].length}return u=o.readUshort(r,i),i+=2,s.subst=o.readUshorts(r,i,2*u),i+=2*s.subst.length,s},e.GSUB.readLigatureSet=function(r,i){var o=e._bin,s=i,l=[],c=o.readUshort(r,i);i+=2;for(var u=0;u<c;u++){var f=o.readUshort(r,i);i+=2,l.push(e.GSUB.readLigature(r,s+f))}return l},e.GSUB.readLigature=function(r,i){var o=e._bin,s={chain:[]};s.nglyph=o.readUshort(r,i),i+=2;var l=o.readUshort(r,i);i+=2;for(var c=0;c<l-1;c++)s.chain.push(o.readUshort(r,i)),i+=2;return s},e.head={},e.head.parse=function(r,i,o){var s=e._bin,l={};return s.readFixed(r,i),i+=4,l.fontRevision=s.readFixed(r,i),i+=4,s.readUint(r,i),i+=4,s.readUint(r,i),i+=4,l.flags=s.readUshort(r,i),i+=2,l.unitsPerEm=s.readUshort(r,i),i+=2,l.created=s.readUint64(r,i),i+=8,l.modified=s.readUint64(r,i),i+=8,l.xMin=s.readShort(r,i),i+=2,l.yMin=s.readShort(r,i),i+=2,l.xMax=s.readShort(r,i),i+=2,l.yMax=s.readShort(r,i),i+=2,l.macStyle=s.readUshort(r,i),i+=2,l.lowestRecPPEM=s.readUshort(r,i),i+=2,l.fontDirectionHint=s.readShort(r,i),i+=2,l.indexToLocFormat=s.readShort(r,i),i+=2,l.glyphDataFormat=s.readShort(r,i),i+=2,l},e.hhea={},e.hhea.parse=function(r,i,o){var s=e._bin,l={};return s.readFixed(r,i),i+=4,l.ascender=s.readShort(r,i),i+=2,l.descender=s.readShort(r,i),i+=2,l.lineGap=s.readShort(r,i),i+=2,l.advanceWidthMax=s.readUshort(r,i),i+=2,l.minLeftSideBearing=s.readShort(r,i),i+=2,l.minRightSideBearing=s.readShort(r,i),i+=2,l.xMaxExtent=s.readShort(r,i),i+=2,l.caretSlopeRise=s.readShort(r,i),i+=2,l.caretSlopeRun=s.readShort(r,i),i+=2,l.caretOffset=s.readShort(r,i),i+=2,i+=8,l.metricDataFormat=s.readShort(r,i),i+=2,l.numberOfHMetrics=s.readUshort(r,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(r,i,o,s){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<s.maxp.numGlyphs;h++)h<s.hhea.numberOfHMetrics&&(u=l.readUshort(r,i),i+=2,f=l.readShort(r,i),i+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(r,i,o,s){var l=e._bin,c=l.readUshort(r,i);if(i+=2,c==1)return e.kern.parseV1(r,i-2,o,s);var u=l.readUshort(r,i);i+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){i+=2,o=l.readUshort(r,i),i+=2;var d=l.readUshort(r,i);i+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(r,i,f)}return f},e.kern.parseV1=function(r,i,o,s){var l=e._bin;l.readFixed(r,i),i+=4;var c=l.readUint(r,i);i+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(r,i),i+=4;var h=l.readUshort(r,i);i+=2,l.readUshort(r,i),i+=2;var d=h>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;i=e.kern.readFormat0(r,i,u)}return u},e.kern.readFormat0=function(r,i,o){var s=e._bin,l=-1,c=s.readUshort(r,i);i+=2,s.readUshort(r,i),i+=2,s.readUshort(r,i),i+=2,s.readUshort(r,i),i+=2;for(var u=0;u<c;u++){var f=s.readUshort(r,i);i+=2;var h=s.readUshort(r,i);i+=2;var d=s.readShort(r,i);i+=2,f!=l&&(o.glyph1.push(f),o.rval.push({glyph2:[],vals:[]}));var g=o.rval[o.rval.length-1];g.glyph2.push(h),g.vals.push(d),l=f}return i},e.loca={},e.loca.parse=function(r,i,o,s){var l=e._bin,c=[],u=s.head.indexToLocFormat,f=s.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(r,i+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(r,i+(h<<2)));return c},e.maxp={},e.maxp.parse=function(r,i,o){var s=e._bin,l={},c=s.readUint(r,i);return i+=4,l.numGlyphs=s.readUshort(r,i),i+=2,c==65536&&(l.maxPoints=s.readUshort(r,i),i+=2,l.maxContours=s.readUshort(r,i),i+=2,l.maxCompositePoints=s.readUshort(r,i),i+=2,l.maxCompositeContours=s.readUshort(r,i),i+=2,l.maxZones=s.readUshort(r,i),i+=2,l.maxTwilightPoints=s.readUshort(r,i),i+=2,l.maxStorage=s.readUshort(r,i),i+=2,l.maxFunctionDefs=s.readUshort(r,i),i+=2,l.maxInstructionDefs=s.readUshort(r,i),i+=2,l.maxStackElements=s.readUshort(r,i),i+=2,l.maxSizeOfInstructions=s.readUshort(r,i),i+=2,l.maxComponentElements=s.readUshort(r,i),i+=2,l.maxComponentDepth=s.readUshort(r,i),i+=2),l},e.name={},e.name.parse=function(r,i,o){var s=e._bin,l={};s.readUshort(r,i),i+=2;var c=s.readUshort(r,i);i+=2,s.readUshort(r,i);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=i+=2,d=0;d<c;d++){var g=s.readUshort(r,i);i+=2;var v=s.readUshort(r,i);i+=2;var m=s.readUshort(r,i);i+=2;var p=s.readUshort(r,i);i+=2;var S=s.readUshort(r,i);i+=2;var _=s.readUshort(r,i);i+=2;var x,b=f[p],C=h+12*c+_;if(g==0)x=s.readUnicode(r,C,S/2);else if(g==3&&v==0)x=s.readUnicode(r,C,S/2);else if(v==0)x=s.readASCII(r,C,S);else if(v==1)x=s.readUnicode(r,C,S/2);else if(v==3)x=s.readUnicode(r,C,S/2);else{if(g!=1)throw"unknown encoding "+v+", platformID: "+g;x=s.readASCII(r,C,S),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var E="p"+g+","+m.toString(16);l[E]==null&&(l[E]={}),l[E][b!==void 0?b:p]=x,l[E]._lang=m}for(var N in l)if(l[N].postScriptName!=null&&l[N]._lang==1033)return l[N];for(var N in l)if(l[N].postScriptName!=null&&l[N]._lang==0)return l[N];for(var N in l)if(l[N].postScriptName!=null&&l[N]._lang==3084)return l[N];for(var N in l)if(l[N].postScriptName!=null)return l[N];for(var N in l){u=N;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(r,i,o){var s=e._bin.readUshort(r,i);i+=2;var l={};if(s==0)e["OS/2"].version0(r,i,l);else if(s==1)e["OS/2"].version1(r,i,l);else if(s==2||s==3||s==4)e["OS/2"].version2(r,i,l);else{if(s!=5)throw"unknown OS/2 table version: "+s;e["OS/2"].version5(r,i,l)}return l},e["OS/2"].version0=function(r,i,o){var s=e._bin;return o.xAvgCharWidth=s.readShort(r,i),i+=2,o.usWeightClass=s.readUshort(r,i),i+=2,o.usWidthClass=s.readUshort(r,i),i+=2,o.fsType=s.readUshort(r,i),i+=2,o.ySubscriptXSize=s.readShort(r,i),i+=2,o.ySubscriptYSize=s.readShort(r,i),i+=2,o.ySubscriptXOffset=s.readShort(r,i),i+=2,o.ySubscriptYOffset=s.readShort(r,i),i+=2,o.ySuperscriptXSize=s.readShort(r,i),i+=2,o.ySuperscriptYSize=s.readShort(r,i),i+=2,o.ySuperscriptXOffset=s.readShort(r,i),i+=2,o.ySuperscriptYOffset=s.readShort(r,i),i+=2,o.yStrikeoutSize=s.readShort(r,i),i+=2,o.yStrikeoutPosition=s.readShort(r,i),i+=2,o.sFamilyClass=s.readShort(r,i),i+=2,o.panose=s.readBytes(r,i,10),i+=10,o.ulUnicodeRange1=s.readUint(r,i),i+=4,o.ulUnicodeRange2=s.readUint(r,i),i+=4,o.ulUnicodeRange3=s.readUint(r,i),i+=4,o.ulUnicodeRange4=s.readUint(r,i),i+=4,o.achVendID=[s.readInt8(r,i),s.readInt8(r,i+1),s.readInt8(r,i+2),s.readInt8(r,i+3)],i+=4,o.fsSelection=s.readUshort(r,i),i+=2,o.usFirstCharIndex=s.readUshort(r,i),i+=2,o.usLastCharIndex=s.readUshort(r,i),i+=2,o.sTypoAscender=s.readShort(r,i),i+=2,o.sTypoDescender=s.readShort(r,i),i+=2,o.sTypoLineGap=s.readShort(r,i),i+=2,o.usWinAscent=s.readUshort(r,i),i+=2,o.usWinDescent=s.readUshort(r,i),i+=2},e["OS/2"].version1=function(r,i,o){var s=e._bin;return i=e["OS/2"].version0(r,i,o),o.ulCodePageRange1=s.readUint(r,i),i+=4,o.ulCodePageRange2=s.readUint(r,i),i+=4},e["OS/2"].version2=function(r,i,o){var s=e._bin;return i=e["OS/2"].version1(r,i,o),o.sxHeight=s.readShort(r,i),i+=2,o.sCapHeight=s.readShort(r,i),i+=2,o.usDefault=s.readUshort(r,i),i+=2,o.usBreak=s.readUshort(r,i),i+=2,o.usMaxContext=s.readUshort(r,i),i+=2},e["OS/2"].version5=function(r,i,o){var s=e._bin;return i=e["OS/2"].version2(r,i,o),o.usLowerOpticalPointSize=s.readUshort(r,i),i+=2,o.usUpperOpticalPointSize=s.readUshort(r,i),i+=2},e.post={},e.post.parse=function(r,i,o){var s=e._bin,l={};return l.version=s.readFixed(r,i),i+=4,l.italicAngle=s.readFixed(r,i),i+=4,l.underlinePosition=s.readShort(r,i),i+=2,l.underlineThickness=s.readShort(r,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(r,i){var o=r.cmap,s=-1;if(o.p0e4!=null?s=o.p0e4:o.p3e1!=null?s=o.p3e1:o.p1e0!=null?s=o.p1e0:o.p0e3!=null&&(s=o.p0e3),s==-1)throw"no familiar platform and encoding!";var l=o.tables[s];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(i<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=i&&i<=f[1])return f[2]+(i-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(r,i){var o={cmds:[],crds:[]};if(r.SVG&&r.SVG.entries[i]){var s=r.SVG.entries[i];return s==null?o:(typeof s=="string"&&(s=e.SVG.toPath(s),r.SVG.entries[i]=s),s)}if(r.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:r.CFF.Private?r.CFF.Private.defaultWidthX:0,open:!1},c=r.CFF,u=r.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=i;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(r.CFF.CharStrings[i],l,c,u,o)}else r.glyf&&e.U._drawGlyf(i,r,o);return o},e.U._drawGlyf=function(r,i,o){var s=i.glyf[r];s==null&&(s=i.glyf[r]=e.glyf._parseGlyf(i,r)),s!=null&&(s.noc>-1?e.U._simpleGlyph(s,o):e.U._compoGlyph(s,i,o))},e.U._simpleGlyph=function(r,i){for(var o=0;o<r.noc;o++){for(var s=o==0?0:r.endPts[o-1]+1,l=r.endPts[o],c=s;c<=l;c++){var u=c==s?l:c-1,f=c==l?s:c+1,h=1&r.flags[c],d=1&r.flags[u],g=1&r.flags[f],v=r.xs[c],m=r.ys[c];if(c==s)if(h){if(!d){e.U.P.moveTo(i,v,m);continue}e.U.P.moveTo(i,r.xs[u],r.ys[u])}else d?e.U.P.moveTo(i,r.xs[u],r.ys[u]):e.U.P.moveTo(i,(r.xs[u]+v)/2,(r.ys[u]+m)/2);h?d&&e.U.P.lineTo(i,v,m):g?e.U.P.qcurveTo(i,v,m,r.xs[f],r.ys[f]):e.U.P.qcurveTo(i,v,m,(v+r.xs[f])/2,(m+r.ys[f])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(r,i,o){for(var s=0;s<r.parts.length;s++){var l={cmds:[],crds:[]},c=r.parts[s];e.U._drawGlyf(c.glyphIndex,i,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],d=l.crds[f+1];o.crds.push(h*u.a+d*u.b+u.tx),o.crds.push(h*u.c+d*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)o.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(r,i){var o=e._lctf.getInterval(i,r);return o==-1?0:i[o+2]},e.U._applySubs=function(r,i,o,s){for(var l=r.length-i-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var u,f=o.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,r[i]))!=-1){if(o.ltype==1)r[i],f.fmt==1?r[i]=r[i]+f.delta:r[i]=f.newg[u];else if(o.ltype==4)for(var h=f.vals[u],d=0;d<h.length;d++){var g=h[d],v=g.chain.length;if(!(v>l)){for(var m=!0,p=0,S=0;S<v;S++){for(;r[i+p+(1+S)]==-1;)p++;g.chain[S]!=r[i+p+(1+S)]&&(m=!1)}if(m){for(r[i]=g.nglyph,S=0;S<v+p;S++)r[i+S+1]=-1;break}}}else if(o.ltype==5&&f.fmt==2)for(var _=e._lctf.getInterval(f.cDef,r[i]),x=f.cDef[_+2],b=f.scset[x],C=0;C<b.length;C++){var E=b[C],N=E.input;if(!(N.length>l)){for(m=!0,S=0;S<N.length;S++){var y=e._lctf.getInterval(f.cDef,r[i+1+S]);if(_==-1&&f.cDef[y+2]!=N[S]){m=!1;break}}if(m){var T=E.substLookupRecords;for(d=0;d<T.length;d+=2)T[d],T[d+1]}}}else if(o.ltype==6&&f.fmt==3){if(!e.U._glsCovered(r,f.backCvg,i-f.backCvg.length)||!e.U._glsCovered(r,f.inptCvg,i)||!e.U._glsCovered(r,f.ahedCvg,i+f.inptCvg.length))continue;var K=f.lookupRec;for(C=0;C<K.length;C+=2){_=K[C];var L=s[K[C+1]];e.U._applySubs(r,i+_,L,s)}}}}},e.U._glsCovered=function(r,i,o){for(var s=0;s<i.length;s++)if(e._lctf.coverageIndex(i[s],r[o+s])==-1)return!1;return!0},e.U.glyphsToPath=function(r,i,o){for(var s={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var u=i[c];if(u!=-1){for(var f=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,h=e.U.glyphToPath(r,u),d=0;d<h.crds.length;d+=2)s.crds.push(h.crds[d]+l),s.crds.push(h.crds[d+1]);for(o&&s.cmds.push(o),d=0;d<h.cmds.length;d++)s.cmds.push(h.cmds[d]);o&&s.cmds.push("X"),l+=r.hmtx.aWidth[u],c<i.length-1&&(l+=e.U.getPairAdjustment(r,u,f))}}return s},e.U.P={},e.U.P.moveTo=function(r,i,o){r.cmds.push("M"),r.crds.push(i,o)},e.U.P.lineTo=function(r,i,o){r.cmds.push("L"),r.crds.push(i,o)},e.U.P.curveTo=function(r,i,o,s,l,c,u){r.cmds.push("C"),r.crds.push(i,o,s,l,c,u)},e.U.P.qcurveTo=function(r,i,o,s,l){r.cmds.push("Q"),r.crds.push(i,o,s,l)},e.U.P.closePath=function(r){r.cmds.push("Z")},e.U._drawCFF=function(r,i,o,s,l){for(var c=i.stack,u=i.nStems,f=i.haveWidth,h=i.width,d=i.open,g=0,v=i.x,m=i.y,p=0,S=0,_=0,x=0,b=0,C=0,E=0,N=0,y=0,T=0,K={val:0,size:0};g<r.length;){e.CFF.getCharString(r,g,K);var L=K.val;if(g+=K.size,L=="o1"||L=="o18")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(L=="o3"||L=="o23")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(L=="o4")c.length>1&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),d&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,v,m),d=!0;else if(L=="o5")for(;c.length>0;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);else if(L=="o6"||L=="o7")for(var U=c.length,D=L=="o6",k=0;k<U;k++){var W=c.shift();D?v+=W:m+=W,D=!D,e.U.P.lineTo(l,v,m)}else if(L=="o8"||L=="o24"){U=c.length;for(var j=0;j+6<=U;)p=v+c.shift(),S=m+c.shift(),_=p+c.shift(),x=S+c.shift(),v=_+c.shift(),m=x+c.shift(),e.U.P.curveTo(l,p,S,_,x,v,m),j+=6;L=="o24"&&(v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m))}else{if(L=="o11")break;if(L=="o1234"||L=="o1235"||L=="o1236"||L=="o1237")L=="o1234"&&(S=m,_=(p=v+c.shift())+c.shift(),T=x=S+c.shift(),C=x,N=m,v=(E=(b=(y=_+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,p,S,_,x,y,T),e.U.P.curveTo(l,b,C,E,N,v,m)),L=="o1235"&&(p=v+c.shift(),S=m+c.shift(),_=p+c.shift(),x=S+c.shift(),y=_+c.shift(),T=x+c.shift(),b=y+c.shift(),C=T+c.shift(),E=b+c.shift(),N=C+c.shift(),v=E+c.shift(),m=N+c.shift(),c.shift(),e.U.P.curveTo(l,p,S,_,x,y,T),e.U.P.curveTo(l,b,C,E,N,v,m)),L=="o1236"&&(p=v+c.shift(),S=m+c.shift(),_=p+c.shift(),T=x=S+c.shift(),C=x,E=(b=(y=_+c.shift())+c.shift())+c.shift(),N=C+c.shift(),v=E+c.shift(),e.U.P.curveTo(l,p,S,_,x,y,T),e.U.P.curveTo(l,b,C,E,N,v,m)),L=="o1237"&&(p=v+c.shift(),S=m+c.shift(),_=p+c.shift(),x=S+c.shift(),y=_+c.shift(),T=x+c.shift(),b=y+c.shift(),C=T+c.shift(),E=b+c.shift(),N=C+c.shift(),Math.abs(E-v)>Math.abs(N-m)?v=E+c.shift():m=N+c.shift(),e.U.P.curveTo(l,p,S,_,x,y,T),e.U.P.curveTo(l,b,C,E,N,v,m));else if(L=="o14"){if(c.length>0&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),c.length==4){var q=c.shift(),X=c.shift(),B=c.shift(),w=c.shift(),R=e.CFF.glyphBySE(o,B),G=e.CFF.glyphBySE(o,w);e.U._drawCFF(o.CharStrings[R],i,o,s,l),i.x=q,i.y=X,e.U._drawCFF(o.CharStrings[G],i,o,s,l)}d&&(e.U.P.closePath(l),d=!1)}else if(L=="o19"||L=="o20")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,g+=u+7>>3;else if(L=="o21")c.length>2&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),m+=c.pop(),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),d=!0;else if(L=="o22")c.length>1&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),d=!0;else if(L=="o25"){for(;c.length>6;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);p=v+c.shift(),S=m+c.shift(),_=p+c.shift(),x=S+c.shift(),v=_+c.shift(),m=x+c.shift(),e.U.P.curveTo(l,p,S,_,x,v,m)}else if(L=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)p=v,S=m+c.shift(),v=_=p+c.shift(),m=(x=S+c.shift())+c.shift(),e.U.P.curveTo(l,p,S,_,x,v,m);else if(L=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)S=m,_=(p=v+c.shift())+c.shift(),x=S+c.shift(),v=_+c.shift(),m=x,e.U.P.curveTo(l,p,S,_,x,v,m);else if(L=="o10"||L=="o29"){var V=L=="o10"?s:o;if(c.length==0)console.debug("error: empty stack");else{var H=c.pop(),re=V.Subrs[H+V.Bias];i.x=v,i.y=m,i.nStems=u,i.haveWidth=f,i.width=h,i.open=d,e.U._drawCFF(re,i,o,s,l),v=i.x,m=i.y,u=i.nStems,f=i.haveWidth,h=i.width,d=i.open}}else if(L=="o30"||L=="o31"){var $=c.length,ne=(j=0,L=="o31");for(j+=$-(U=-3&$);j<U;)ne?(S=m,_=(p=v+c.shift())+c.shift(),m=(x=S+c.shift())+c.shift(),U-j==5?(v=_+c.shift(),j++):v=_,ne=!1):(p=v,S=m+c.shift(),_=p+c.shift(),x=S+c.shift(),v=_+c.shift(),U-j==5?(m=x+c.shift(),j++):m=x,ne=!0),e.U.P.curveTo(l,p,S,_,x,v,m),j+=4}else{if((L+"").charAt(0)=="o")throw console.debug("Unknown operation: "+L,r),L;c.push(L)}}}i.x=v,i.y=m,i.nStems=u,i.haveWidth=f,i.width=h,i.open=d};var t=e,n={Typr:t};return a.Typr=t,a.default=n,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function zv(){return function(a){var e=Uint8Array,t=Uint16Array,n=Uint32Array,r=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(L,U){for(var D=new t(31),k=0;k<31;++k)D[k]=U+=1<<L[k-1];var W=new n(D[30]);for(k=1;k<30;++k)for(var j=D[k];j<D[k+1];++j)W[j]=j-D[k]<<5|k;return[D,W]},l=s(r,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=s(i,0)[0],h=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,h[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var v=function(L,U,D){for(var k=L.length,W=0,j=new t(U);W<k;++W)++j[L[W]-1];var q,X=new t(U);for(W=0;W<U;++W)X[W]=X[W-1]+j[W-1]<<1;if(D){q=new t(1<<U);var B=15-U;for(W=0;W<k;++W)if(L[W])for(var w=W<<4|L[W],R=U-L[W],G=X[L[W]-1]++<<R,V=G|(1<<R)-1;G<=V;++G)q[h[G]>>>B]=w}else for(q=new t(k),W=0;W<k;++W)L[W]&&(q[W]=h[X[L[W]-1]++]>>>15-L[W]);return q},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new e(32);for(d=0;d<32;++d)p[d]=5;var S=v(m,9,1),_=v(p,5,1),x=function(L){for(var U=L[0],D=1;D<L.length;++D)L[D]>U&&(U=L[D]);return U},b=function(L,U,D){var k=U/8|0;return(L[k]|L[k+1]<<8)>>(7&U)&D},C=function(L,U){var D=U/8|0;return(L[D]|L[D+1]<<8|L[D+2]<<16)>>(7&U)},E=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],N=function(L,U,D){var k=new Error(U||E[L]);if(k.code=L,Error.captureStackTrace&&Error.captureStackTrace(k,N),!D)throw k;return k},y=function(L,U,D){var k=L.length;if(!k||D&&!D.l&&k<5)return U||new e(0);var W=!U||D,j=!D||D.i;D||(D={}),U||(U=new e(3*k));var q,X=function(ae){var ve=U.length;if(ae>ve){var Le=new e(Math.max(2*ve,ae));Le.set(U),U=Le}},B=D.f||0,w=D.p||0,R=D.b||0,G=D.l,V=D.d,H=D.m,re=D.n,$=8*k;do{if(!G){D.f=B=b(L,w,1);var ne=b(L,w+1,3);if(w+=3,!ne){var xe=L[(Te=((q=w)/8|0)+(7&q&&1)+4)-4]|L[Te-3]<<8,Ce=Te+xe;if(Ce>k){j&&N(0);break}W&&X(R+xe),U.set(L.subarray(Te,Ce),R),D.b=R+=xe,D.p=w=8*Ce;continue}if(ne==1)G=S,V=_,H=9,re=5;else if(ne==2){var he=b(L,w,31)+257,F=b(L,w+10,15)+4,Fe=he+b(L,w+5,31)+1;w+=14;for(var be=new e(Fe),Ae=new e(19),Ee=0;Ee<F;++Ee)Ae[o[Ee]]=b(L,w+3*Ee,7);w+=3*F;var Ue=x(Ae),de=(1<<Ue)-1,Se=v(Ae,Ue,1);for(Ee=0;Ee<Fe;){var Te,oe=Se[b(L,w,de)];if(w+=15&oe,(Te=oe>>>4)<16)be[Ee++]=Te;else{var Re=0,A=0;for(Te==16?(A=3+b(L,w,3),w+=2,Re=be[Ee-1]):Te==17?(A=3+b(L,w,7),w+=3):Te==18&&(A=11+b(L,w,127),w+=7);A--;)be[Ee++]=Re}}var M=be.subarray(0,he),z=be.subarray(he);H=x(M),re=x(z),G=v(M,H,1),V=v(z,re,1)}else N(1);if(w>$){j&&N(0);break}}W&&X(R+131072);for(var me=(1<<H)-1,Q=(1<<re)-1,se=w;;se=w){var _e=(Re=G[C(L,w)&me])>>>4;if((w+=15&Re)>$){j&&N(0);break}if(Re||N(2),_e<256)U[R++]=_e;else{if(_e==256){se=w,G=null;break}var fe=_e-254;if(_e>264){var Z=r[Ee=_e-257];fe=b(L,w,(1<<Z)-1)+c[Ee],w+=Z}var I=V[C(L,w)&Q],ie=I>>>4;if(I||N(3),w+=15&I,z=f[ie],ie>3&&(Z=i[ie],z+=C(L,w)&(1<<Z)-1,w+=Z),w>$){j&&N(0);break}W&&X(R+131072);for(var pe=R+fe;R<pe;R+=4)U[R]=U[R-z],U[R+1]=U[R+1-z],U[R+2]=U[R+2-z],U[R+3]=U[R+3-z];R=pe}}D.l=G,D.p=se,D.b=R,G&&(B=1,D.m=H,D.d=V,D.n=re)}while(!B);return R==U.length?U:function(ae,ve,Le){(ve==null||ve<0)&&(ve=0),(Le==null||Le>ae.length)&&(Le=ae.length);var ke=new(ae instanceof t?t:ae instanceof n?n:e)(Le-ve);return ke.set(ae.subarray(ve,Le)),ke}(U,0,R)},T=new e(0),K=typeof TextDecoder<"u"&&new TextDecoder;try{K.decode(T,{stream:!0})}catch{}return a.convert_streams=function(L){var U=new DataView(L),D=0;function k(){var he=U.getUint16(D);return D+=2,he}function W(){var he=U.getUint32(D);return D+=4,he}function j(he){xe.setUint16(Ce,he),Ce+=2}function q(he){xe.setUint32(Ce,he),Ce+=4}for(var X={signature:W(),flavor:W(),length:W(),numTables:k(),reserved:k(),totalSfntSize:W(),majorVersion:k(),minorVersion:k(),metaOffset:W(),metaLength:W(),metaOrigLength:W(),privOffset:W(),privLength:W()},B=0;Math.pow(2,B)<=X.numTables;)B++;B--;for(var w=16*Math.pow(2,B),R=16*X.numTables-w,G=12,V=[],H=0;H<X.numTables;H++)V.push({tag:W(),offset:W(),compLength:W(),origLength:W(),origChecksum:W()}),G+=16;var re,$=new Uint8Array(12+16*V.length+V.reduce(function(he,F){return he+F.origLength+4},0)),ne=$.buffer,xe=new DataView(ne),Ce=0;return q(X.flavor),j(X.numTables),j(w),j(B),j(R),V.forEach(function(he){q(he.tag),q(he.origChecksum),q(G),q(he.origLength),he.outOffset=G,(G+=he.origLength)%4!=0&&(G+=4-G%4)}),V.forEach(function(he){var F,Fe=L.slice(he.offset,he.offset+he.compLength);if(he.compLength!=he.origLength){var be=new Uint8Array(he.origLength);F=new Uint8Array(Fe,2),y(F,be)}else be=new Uint8Array(Fe);$.set(be,he.outOffset);var Ae=0;(G=he.outOffset+he.origLength)%4!=0&&(Ae=4-G%4),$.set(new Uint8Array(Ae).buffer,he.outOffset+he.origLength),re=G+Ae}),ne.slice(0,re)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function Gv(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},r=1,i=2,o=4,s=8,l=16,c=32;let u;function f(E){if(!u){const N={R:i,L:r,D:o,C:l,U:c,T:s};u=new Map;for(let y in n){let T=0;n[y].split(",").forEach(K=>{let[L,U]=K.split("+");L=parseInt(L,36),U=U?parseInt(U,36):0,u.set(T+=L,N[y]);for(let D=U;D--;)u.set(++T,N[y])})}}return u.get(E)||c}const h=1,d=2,g=3,v=4,m=[null,"isol","init","fina","medi"];function p(E){const N=new Uint8Array(E.length);let y=c,T=h,K=-1;for(let L=0;L<E.length;L++){const U=E.codePointAt(L);let D=f(U)|0,k=h;D&s||(y&(r|o|l)?D&(i|o|l)?(k=g,(T===h||T===g)&&N[K]++):D&(r|c)&&(T===d||T===v)&&N[K]--:y&(i|c)&&(T===d||T===v)&&N[K]--,T=N[L]=k,y=D,K=L,U>65535&&L++)}return N}function S(E,N){const y=[];for(let K=0;K<N.length;K++){const L=N.codePointAt(K);L>65535&&K++,y.push(a.U.codeToGlyph(E,L))}const T=E.GSUB;if(T){const{lookupList:K,featureList:L}=T;let U;const D=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,k=[];L.forEach(W=>{if(D.test(W.tag))for(let j=0;j<W.tab.length;j++){if(k[W.tab[j]])continue;k[W.tab[j]]=!0;const q=K[W.tab[j]],X=/^(isol|init|fina|medi)$/.test(W.tag);X&&!U&&(U=p(N));for(let B=0;B<y.length;B++)(!U||!X||m[U[B]]===W.tag)&&a.U._applySubs(y,B,q,K)}})}return y}function _(E,N){const y=new Int16Array(N.length*3);let T=0;for(;T<N.length;T++){const D=N[T];if(D===-1)continue;y[T*3+2]=E.hmtx.aWidth[D];const k=E.GPOS;if(k){const W=k.lookupList;for(let j=0;j<W.length;j++){const q=W[j];for(let X=0;X<q.tabs.length;X++){const B=q.tabs[X];if(q.ltype===1){if(a._lctf.coverageIndex(B.coverage,D)!==-1&&B.pos){U(B.pos,T);break}}else if(q.ltype===2){let w=null,R=K();if(R!==-1){const G=a._lctf.coverageIndex(B.coverage,N[R]);if(G!==-1){if(B.fmt===1){const V=B.pairsets[G];for(let H=0;H<V.length;H++)V[H].gid2===D&&(w=V[H])}else if(B.fmt===2){const V=a.U._getGlyphClass(N[R],B.classDef1),H=a.U._getGlyphClass(D,B.classDef2);w=B.matrix[V][H]}if(w){w.val1&&U(w.val1,R),w.val2&&U(w.val2,T);break}}}}else if(q.ltype===4){const w=a._lctf.coverageIndex(B.markCoverage,D);if(w!==-1){const R=K(L),G=R===-1?-1:a._lctf.coverageIndex(B.baseCoverage,N[R]);if(G!==-1){const V=B.markArray[w],H=B.baseArray[G][V.markClass];y[T*3]=H.x-V.x+y[R*3]-y[R*3+2],y[T*3+1]=H.y-V.y+y[R*3+1];break}}}else if(q.ltype===6){const w=a._lctf.coverageIndex(B.mark1Coverage,D);if(w!==-1){const R=K();if(R!==-1){const G=N[R];if(x(E,G)===3){const V=a._lctf.coverageIndex(B.mark2Coverage,G);if(V!==-1){const H=B.mark1Array[w],re=B.mark2Array[V][H.markClass];y[T*3]=re.x-H.x+y[R*3]-y[R*3+2],y[T*3+1]=re.y-H.y+y[R*3+1];break}}}}}}}}else if(E.kern&&!E.cff){const W=K();if(W!==-1){const j=E.kern.glyph1.indexOf(N[W]);if(j!==-1){const q=E.kern.rval[j].glyph2.indexOf(D);q!==-1&&(y[W*3+2]+=E.kern.rval[j].vals[q])}}}}return y;function K(D){for(let k=T-1;k>=0;k--)if(N[k]!==-1&&(!D||D(N[k])))return k;return-1}function L(D){return x(E,D)===1}function U(D,k){for(let W=0;W<3;W++)y[k*3+W]+=D[W]||0}}function x(E,N){const y=E.GDEF&&E.GDEF.glyphClassDef;return y?a.U._getGlyphClass(N,y):0}function b(...E){for(let N=0;N<E.length;N++)if(typeof E[N]=="number")return E[N]}function C(E){const N=Object.create(null),y=E["OS/2"],T=E.hhea,K=E.head.unitsPerEm,L=b(y&&y.sTypoAscender,T&&T.ascender,K),U={unitsPerEm:K,ascender:L,descender:b(y&&y.sTypoDescender,T&&T.descender,0),capHeight:b(y&&y.sCapHeight,L),xHeight:b(y&&y.sxHeight,L),lineGap:b(y&&y.sTypoLineGap,T&&T.lineGap),supportsCodePoint(D){return a.U.codeToGlyph(E,D)>0},forEachGlyph(D,k,W,j){let q=0;const X=1/U.unitsPerEm*k,B=S(E,D);let w=0;const R=_(E,B);return B.forEach((G,V)=>{if(G!==-1){let H=N[G];if(!H){const{cmds:re,crds:$}=a.U.glyphToPath(E,G);let ne="",xe=0;for(let be=0,Ae=re.length;be<Ae;be++){const Ee=t[re[be]];ne+=re[be];for(let Ue=1;Ue<=Ee;Ue++)ne+=(Ue>1?",":"")+$[xe++]}let Ce,he,F,Fe;if($.length){Ce=he=1/0,F=Fe=-1/0;for(let be=0,Ae=$.length;be<Ae;be+=2){let Ee=$[be],Ue=$[be+1];Ee<Ce&&(Ce=Ee),Ue<he&&(he=Ue),Ee>F&&(F=Ee),Ue>Fe&&(Fe=Ue)}}else Ce=F=he=Fe=0;H=N[G]={index:G,advanceWidth:E.hmtx.aWidth[G],xMin:Ce,yMin:he,xMax:F,yMax:Fe,path:ne}}j.call(null,H,q+R[V*3]*X,R[V*3+1]*X,w),q+=R[V*3+2]*X,W&&(q+=W*k)}w+=D.codePointAt(w)>65535?2:1}),q}};return U}return function(N){const y=new Uint8Array(N,0,4),T=a._bin.readASCII(y,0,4);if(T==="wOFF")N=e(N);else if(T==="wOF2")throw new Error("woff2 fonts not supported");return C(a.parse(N)[0])}}const Hv=$i({name:"Typr Font Parser",dependencies:[kv,zv,Gv],init(a,e,t){const n=a(),r=e();return t(n,r)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function Vv(){return function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(_){var x=_>>5;this.buckets.set(x,(this.buckets.get(x)||0)|1<<(31&_))},e.prototype.has=function(_){var x=this.buckets.get(_>>5);return x!==void 0&&(x&1<<(31&_))!=0},e.prototype.serialize=function(){var _=[];return this.buckets.forEach(function(x,b){_.push((+b).toString(36)+":"+x.toString(36))}),_.join(",")},e.prototype.deserialize=function(_){var x=this;this.buckets.clear(),_.split(",").forEach(function(b){var C=b.split(":");x.buckets.set(parseInt(C[0],36),parseInt(C[1],36))})};var t=Math.pow(2,8),n=t-1,r=~n;function i(_){var x=function(C){return C&r}(_).toString(16),b=function(C){return(C&r)+t-1}(_).toString(16);return"codepoint-index/plane"+(_>>16)+"/"+x+"-"+b+".json"}function o(_,x){var b=_&n,C=x.codePointAt(b/6|0);return((C=(C||48)-48)&1<<b%6)!=0}function s(_,x){var b;(b=_,b.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(C){return C.split("-").map(function(E){return parseInt(E.trim(),16)})})).forEach(function(C){var E=C[0],N=C[1];N===void 0&&(N=E),x(E,N)})}function l(_,x){s(_,function(b,C){for(var E=b;E<=C;E++)x(E)})}var c={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(_){var x=f.get(_);return x||(x=new e,l(_.ranges,function(b){return x.add(b)}),f.set(_,x)),x}var g,v=new Map;function m(_,x,b){return _[x]?x:_[b]?b:function(C){for(var E in C)return E}(_)}function p(_,x){var b=x;if(!_.includes(b)){b=1/0;for(var C=0;C<_.length;C++)Math.abs(_[C]-x)<Math.abs(b-x)&&(b=_[C])}return b}function S(_){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(x){g.add(x)})),g.has(_)}return a.CodePointSet=e,a.clearCache=function(){c={},u={}},a.getFontsForString=function(_,x){x===void 0&&(x={});var b,C=x.lang;C===void 0&&(C=/\p{Script=Hangul}/u.test(b=_)?"ko":/\p{Script=Hiragana}|\p{Script=Katakana}/u.test(b)?"ja":"en");var E=x.category;E===void 0&&(E="sans-serif");var N=x.style;N===void 0&&(N="normal");var y=x.weight;y===void 0&&(y=400);var T=(x.dataUrl||h).replace(/\/$/g,""),K=new Map,L=new Uint8Array(_.length),U={},D={},k=new Array(_.length),W=new Map,j=!1;function q(w){var R=v.get(w);return R||(R=fetch(T+"/"+w).then(function(G){if(!G.ok)throw new Error(G.statusText);return G.json().then(function(V){if(!Array.isArray(V)||V[0]!==1)throw new Error("Incorrect schema version; need 1, got "+V[0]);return V[1]})}).catch(function(G){if(T!==h)return j||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+T+'", trying default CDN. '+G.message),j=!0),T=h,v.delete(w),q(w);throw G}),v.set(w,R)),R}for(var X=function(w){var R=_.codePointAt(w),G=i(R);k[w]=G,c[G]||W.has(G)||W.set(G,q(G).then(function(V){c[G]=V})),R>65535&&(w++,B=w)},B=0;B<_.length;B++)X(B);return Promise.all(W.values()).then(function(){W.clear();for(var w=function(G){var V=_.codePointAt(G),H=null,re=c[k[G]],$=void 0;for(var ne in re){var xe=D[ne];if(xe===void 0&&(xe=D[ne]=new RegExp(ne).test(C||"en")),xe){for(var Ce in $=ne,re[ne])if(o(V,re[ne][Ce])){H=Ce;break}break}}if(!H){e:for(var he in re)if(he!==$){for(var F in re[he])if(o(V,re[he][F])){H=F;break e}}}H||(console.debug("No font coverage for U+"+V.toString(16)),H="latin"),k[G]=H,u[H]||W.has(H)||W.set(H,q("font-meta/"+H+".json").then(function(Fe){u[H]=Fe})),V>65535&&(G++,R=G)},R=0;R<_.length;R++)w(R);return Promise.all(W.values())}).then(function(){for(var w,R=null,G=0;G<_.length;G++){var V=_.codePointAt(G);if(R&&(S(V)||d(R).has(V)))L[G]=L[G-1];else{R=u[k[G]];var H=U[R.id];if(!H){var re=R.typeforms,$=m(re,E,"sans-serif"),ne=m(re[$],N,"normal"),xe=p((w=re[$])===null||w===void 0?void 0:w[ne],y);H=U[R.id]=T+"/font-files/"+R.id+"/"+$+"."+ne+"."+xe+".woff"}var Ce=K.get(H);Ce==null&&(Ce=K.size,K.set(H,Ce)),L[G]=Ce}V>65535&&(G++,L[G]=L[G-1])}return{fontUrls:Array.from(K.keys()),chars:L}})},Object.defineProperty(a,"__esModule",{value:!0}),a}({})}function Wv(a,e){const t=Object.create(null),n=Object.create(null);function r(o,s){const l=c=>{console.error(`Failure loading font ${o}`,c)};try{const c=new XMLHttpRequest;c.open("get",o,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=a(c.response);u.src=o,s(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(o,s){let l=t[o];l?s(l):n[o]?n[o].push(s):(n[o]=[s],r(o,c=>{c.src=o,t[o]=c,n[o].forEach(u=>u(c)),delete n[o]}))}return function(o,s,{lang:l,fonts:c=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const d=new Uint8Array(o.length),g=[];o.length||S();const v=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(x=>!x.lang||x.lang.test(l)).reverse(),c.length){let E=0;(function N(y=0){for(let T=y,K=o.length;T<K;T++){const L=o.codePointAt(T);if(E===1&&g[d[T-1]].supportsCodePoint(L)||/\s/.test(o[T]))d[T]=d[T-1],E===2&&(m[m.length-1][1]=T);else for(let U=d[T],D=c.length;U<=D;U++)if(U===D){const k=E===2?m[m.length-1]:m[m.length]=[T,T];k[1]=T,E=2}else{d[T]=U;const{src:k,unicodeRange:W}=c[U];if(!W||_(L,W)){const j=t[k];if(!j){i(k,()=>{N(T)});return}if(j.supportsCodePoint(L)){let q=v.get(j);typeof q!="number"&&(q=g.length,g.push(j),v.set(j,q)),d[T]=q,E=1;break}}}L>65535&&T+1<K&&(d[T+1]=d[T],T++,E===2&&(m[m.length-1][1]=T))}p()})()}else m.push([0,o.length-1]),p();function p(){if(m.length){const x=m.map(b=>o.substring(b[0],b[1]+1)).join(`
`);e.getFontsForString(x,{lang:l||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:b,chars:C})=>{const E=g.length;let N=0;m.forEach(T=>{for(let K=0,L=T[1]-T[0];K<=L;K++)d[T[0]+K]=C[N++]+E;N++});let y=0;b.forEach((T,K)=>{i(T,L=>{g[K+E]=L,++y===b.length&&S()})})})}else S()}function S(){s({chars:d,fonts:g})}function _(x,b){for(let C=0;C<b.length;C++){const[E,N=E]=b[C];if(E<=x&&x<=N)return!0}return!1}}}const Xv=$i({name:"FontResolver",dependencies:[Wv,Hv,Vv],init(a,e,t){return a(e,t())}});function Yv(a,e){const n=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,r="[^\\S\\u00A0]",i=new RegExp(`${r}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:g,lang:v,fonts:m,style:p,weight:S,preResolvedFonts:_,unicodeFontsURL:x},b){const C=({chars:E,fonts:N})=>{let y,T;const K=[];for(let L=0;L<E.length;L++)E[L]!==T?(T=E[L],K.push(y={start:L,end:L,fontObj:N[E[L]]})):y.end=L;b(K)};_?C(_):a(g,C,{lang:v,fonts:m,style:p,weight:S,unicodeFontsURL:x})}function s({text:g="",font:v,lang:m,sdfGlyphSize:p=64,fontSize:S=400,fontWeight:_=1,fontStyle:x="normal",letterSpacing:b=0,lineHeight:C="normal",maxWidth:E=1/0,direction:N,textAlign:y="left",textIndent:T=0,whiteSpace:K="normal",overflowWrap:L="normal",anchorX:U=0,anchorY:D=0,metricsOnly:k=!1,unicodeFontsURL:W,preResolvedFonts:j=null,includeCaretPositions:q=!1,chunkedBoundsSize:X=8192,colorRanges:B=null},w){const R=f(),G={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),S=+S,b=+b,E=+E,C=C||"normal",T=+T,o({text:g,lang:m,style:x,weight:_,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:W,preResolvedFonts:j},V=>{G.fontLoad=f()-R;const H=isFinite(E);let re=null,$=null,ne=null,xe=null,Ce=null,he=null,F=null,Fe=null,be=0,Ae=0,Ee=K!=="nowrap";const Ue=new Map,de=f();let Se=T,Te=0,oe=new h;const Re=[oe];V.forEach(Q=>{const{fontObj:se}=Q,{ascender:_e,descender:fe,unitsPerEm:Z,lineGap:I,capHeight:ie,xHeight:pe}=se;let ae=Ue.get(se);if(!ae){const ue=S/Z,J=C==="normal"?(_e-fe+I)*ue:C*S,Me=(J-(_e-fe)*ue)/2,ge=Math.min(J,(_e-fe)*ue),Pe=(_e+fe)/2*ue+ge/2;ae={index:Ue.size,src:se.src,fontObj:se,fontSizeMult:ue,unitsPerEm:Z,ascender:_e*ue,descender:fe*ue,capHeight:ie*ue,xHeight:pe*ue,lineHeight:J,baseline:-Me-_e*ue,caretTop:(_e+fe)/2*ue+ge/2,caretBottom:Pe-ge},Ue.set(se,ae)}const{fontSizeMult:ve}=ae,Le=g.slice(Q.start,Q.end+1);let ke,O;se.forEachGlyph(Le,S,b,(ue,J,Me,ge)=>{J+=Te,ge+=Q.start,ke=J,O=ue;const Pe=g.charAt(ge),ze=ue.advanceWidth*ve,Be=oe.count;let Ne;if("isEmpty"in ue||(ue.isWhitespace=!!Pe&&new RegExp(r).test(Pe),ue.canBreakAfter=!!Pe&&i.test(Pe),ue.isEmpty=ue.xMin===ue.xMax||ue.yMin===ue.yMax||n.test(Pe)),!ue.isWhitespace&&!ue.isEmpty&&Ae++,Ee&&H&&!ue.isWhitespace&&J+ze+Se>E&&Be){if(oe.glyphAt(Be-1).glyphObj.canBreakAfter)Ne=new h,Se=-J;else for(let Qe=Be;Qe--;)if(Qe===0&&L==="break-word"){Ne=new h,Se=-J;break}else if(oe.glyphAt(Qe).glyphObj.canBreakAfter){Ne=oe.splitAt(Qe+1);const Ke=Ne.glyphAt(0).x;Se-=Ke;for(let st=Ne.count;st--;)Ne.glyphAt(st).x-=Ke;break}Ne&&(oe.isSoftWrapped=!0,oe=Ne,Re.push(oe),be=E)}let Ge=oe.glyphAt(oe.count);Ge.glyphObj=ue,Ge.x=J+Se,Ge.y=Me,Ge.width=ze,Ge.charIndex=ge,Ge.fontData=ae,Pe===`
`&&(oe=new h,Re.push(oe),Se=-(J+ze+b*S)+T)}),Te=ke+O.advanceWidth*ve+b*S});let A=0;Re.forEach(Q=>{let se=!0;for(let _e=Q.count;_e--;){const fe=Q.glyphAt(_e);se&&!fe.glyphObj.isWhitespace&&(Q.width=fe.x+fe.width,Q.width>be&&(be=Q.width),se=!1);let{lineHeight:Z,capHeight:I,xHeight:ie,baseline:pe}=fe.fontData;Z>Q.lineHeight&&(Q.lineHeight=Z);const ae=pe-Q.baseline;ae<0&&(Q.baseline+=ae,Q.cap+=ae,Q.ex+=ae),Q.cap=Math.max(Q.cap,Q.baseline+I),Q.ex=Math.max(Q.ex,Q.baseline+ie)}Q.baseline-=A,Q.cap-=A,Q.ex-=A,A+=Q.lineHeight});let M=0,z=0;if(U&&(typeof U=="number"?M=-U:typeof U=="string"&&(M=-be*(U==="left"?0:U==="center"?.5:U==="right"?1:c(U)))),D&&(typeof D=="number"?z=-D:typeof D=="string"&&(z=D==="top"?0:D==="top-baseline"?-Re[0].baseline:D==="top-cap"?-Re[0].cap:D==="top-ex"?-Re[0].ex:D==="middle"?A/2:D==="bottom"?A:D==="bottom-baseline"?Re[Re.length-1].baseline:c(D)*A)),!k){const Q=e.getEmbeddingLevels(g,N);re=new Uint16Array(Ae),$=new Uint8Array(Ae),ne=new Float32Array(Ae*2),xe={},F=[1/0,1/0,-1/0,-1/0],Fe=[],q&&(he=new Float32Array(g.length*4)),B&&(Ce=new Uint8Array(Ae*3));let se=0,_e=-1,fe=-1,Z,I;if(Re.forEach((ie,pe)=>{let{count:ae,width:ve}=ie;if(ae>0){let Le=0;for(let ge=ae;ge--&&ie.glyphAt(ge).glyphObj.isWhitespace;)Le++;let ke=0,O=0;if(y==="center")ke=(be-ve)/2;else if(y==="right")ke=be-ve;else if(y==="justify"&&ie.isSoftWrapped){let ge=0;for(let Pe=ae-Le;Pe--;)ie.glyphAt(Pe).glyphObj.isWhitespace&&ge++;O=(be-ve)/ge}if(O||ke){let ge=0;for(let Pe=0;Pe<ae;Pe++){let ze=ie.glyphAt(Pe);const Be=ze.glyphObj;ze.x+=ke+ge,O!==0&&Be.isWhitespace&&Pe<ae-Le&&(ge+=O,ze.width+=O)}}const ue=e.getReorderSegments(g,Q,ie.glyphAt(0).charIndex,ie.glyphAt(ie.count-1).charIndex);for(let ge=0;ge<ue.length;ge++){const[Pe,ze]=ue[ge];let Be=1/0,Ne=-1/0;for(let Ge=0;Ge<ae;Ge++)if(ie.glyphAt(Ge).charIndex>=Pe){let Qe=Ge,Ke=Ge;for(;Ke<ae;Ke++){let st=ie.glyphAt(Ke);if(st.charIndex>ze)break;Ke<ae-Le&&(Be=Math.min(Be,st.x),Ne=Math.max(Ne,st.x+st.width))}for(let st=Qe;st<Ke;st++){const Ft=ie.glyphAt(st);Ft.x=Ne-(Ft.x+Ft.width-Be)}break}}let J;const Me=ge=>J=ge;for(let ge=0;ge<ae;ge++){const Pe=ie.glyphAt(ge);J=Pe.glyphObj;const ze=J.index,Be=Q.levels[Pe.charIndex]&1;if(Be){const Ne=e.getMirroredCharacter(g[Pe.charIndex]);Ne&&Pe.fontData.fontObj.forEachGlyph(Ne,0,0,Me)}if(q){const{charIndex:Ne,fontData:Ge}=Pe,Qe=Pe.x+M,Ke=Pe.x+Pe.width+M;he[Ne*4]=Be?Ke:Qe,he[Ne*4+1]=Be?Qe:Ke,he[Ne*4+2]=ie.baseline+Ge.caretBottom+z,he[Ne*4+3]=ie.baseline+Ge.caretTop+z;const st=Ne-_e;st>1&&u(he,_e,st),_e=Ne}if(B){const{charIndex:Ne}=Pe;for(;Ne>fe;)fe++,B.hasOwnProperty(fe)&&(I=B[fe])}if(!J.isWhitespace&&!J.isEmpty){const Ne=se++,{fontSizeMult:Ge,src:Qe,index:Ke}=Pe.fontData,st=xe[Qe]||(xe[Qe]={});st[ze]||(st[ze]={path:J.path,pathBounds:[J.xMin,J.yMin,J.xMax,J.yMax]});const Ft=Pe.x+M,cn=Pe.y+ie.baseline+z;ne[Ne*2]=Ft,ne[Ne*2+1]=cn;const Nt=Ft+J.xMin*Ge,Jt=cn+J.yMin*Ge,Xt=Ft+J.xMax*Ge,Yt=cn+J.yMax*Ge;Nt<F[0]&&(F[0]=Nt),Jt<F[1]&&(F[1]=Jt),Xt>F[2]&&(F[2]=Xt),Yt>F[3]&&(F[3]=Yt),Ne%X===0&&(Z={start:Ne,end:Ne,rect:[1/0,1/0,-1/0,-1/0]},Fe.push(Z)),Z.end++;const yt=Z.rect;if(Nt<yt[0]&&(yt[0]=Nt),Jt<yt[1]&&(yt[1]=Jt),Xt>yt[2]&&(yt[2]=Xt),Yt>yt[3]&&(yt[3]=Yt),re[Ne]=ze,$[Ne]=Ke,B){const gn=Ne*3;Ce[gn]=I>>16&255,Ce[gn+1]=I>>8&255,Ce[gn+2]=I&255}}}}}),he){const ie=g.length-_e;ie>1&&u(he,_e,ie)}}const me=[];Ue.forEach(({index:Q,src:se,unitsPerEm:_e,ascender:fe,descender:Z,lineHeight:I,capHeight:ie,xHeight:pe})=>{me[Q]={src:se,unitsPerEm:_e,ascender:fe,descender:Z,lineHeight:I,capHeight:ie,xHeight:pe}}),G.typesetting=f()-de,w({glyphIds:re,glyphFontIndices:$,glyphPositions:ne,glyphData:xe,fontData:me,caretPositions:he,glyphColors:Ce,chunkedBounds:Fe,fontSize:S,topBaseline:z+Re[0].baseline,blockBounds:[M,z-A,M+be,z],visibleBounds:F,timings:G})})}function l(g,v){s({...g,metricsOnly:!0},m=>{const[p,S,_,x]=m.blockBounds;v({width:_-p,height:x-S})})}function c(g){let v=g.match(/^([\d.]+)%$/),m=v?parseFloat(v[1]):NaN;return isNaN(m)?0:m/100}function u(g,v,m){const p=g[v*4],S=g[v*4+1],_=g[v*4+2],x=g[v*4+3],b=(S-p)/m;for(let C=0;C<m;C++){const E=(v+C)*4;g[E]=p+b*C,g[E+1]=p+b*(C+1),g[E+2]=_,g[E+3]=x}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let v=h.flyweight;return v.data=this.data,v.index=g,v},splitAt(g){let v=new h;return v.data=this.data.splice(g*d.length),v}},h.flyweight=d.reduce((g,v,m,p)=>(Object.defineProperty(g,v,{get(){return this.data[this.index*d.length+m]},set(S){this.data[this.index*d.length+m]=S}}),g),{data:null,index:0}),{typeset:s,measure:l}}const ri=()=>(self.performance||Date).now(),Ba=mu();let mc;function jv(a,e,t,n,r,i,o,s,l,c,u=!0){return u?Zv(a,e,t,n,r,i,o,s,l,c).then(null,f=>(mc||(console.warn("WebGL SDF generation failed, falling back to JS",f),mc=!0),vc(a,e,t,n,r,i,o,s,l,c))):vc(a,e,t,n,r,i,o,s,l,c)}const Aa=[],qv=5;let Ks=0;function vu(){const a=ri();for(;Aa.length&&ri()-a<qv;)Aa.shift()();Ks=Aa.length?setTimeout(vu,0):0}const Zv=(...a)=>new Promise((e,t)=>{Aa.push(()=>{const n=ri();try{Ba.webgl.generateIntoCanvas(...a),e({timing:ri()-n})}catch(r){t(r)}}),Ks||(Ks=setTimeout(vu,0))}),Kv=4,Jv=2e3,gc={};let $v=0;function vc(a,e,t,n,r,i,o,s,l,c){const u="TroikaTextSDFGenerator_JS_"+$v++%Kv;let f=gc[u];return f||(f=gc[u]={workerModule:$i({name:u,workerId:u,dependencies:[mu,ri],init(h,d){const g=h().javascript.generate;return function(...v){const m=d();return{textureData:g(...v),timing:d()-m}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(a,e,t,n,r,i).then(({textureData:h,timing:d})=>{const g=ri(),v=new Uint8Array(h.length*4);for(let m=0;m<h.length;m++)v[m*4+c]=h[m];return Ba.webglUtils.renderImageData(o,v,s,l,a,e,1<<3-c),d+=ri()-g,--f.requests===0&&(f.idleTimer=setTimeout(()=>{Rv(u)},Jv)),{timing:d}})}function Qv(a){a._warm||(Ba.webgl.isSupported(a),a._warm=!0)}const e_=Ba.webglUtils.resizeWebGLCanvasWithoutClearing,ki={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},t_=new Xe;function Ni(){return(self.performance||Date).now()}const _c=Object.create(null);function n_(a,e){a=r_({},a);const t=Ni(),{defaultFontURL:n}=ki,r=[];if(n&&r.push({label:"default",src:xc(n)}),a.font&&r.push({label:"user",src:xc(a.font)}),a.font=r,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||ki.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||ki.unicodeFontsURL,a.colorRanges!=null){let h={};for(let d in a.colorRanges)if(a.colorRanges.hasOwnProperty(d)){let g=a.colorRanges[d];typeof g!="number"&&(g=t_.set(g).getHex()),h[d]=g}a.colorRanges=h}Object.freeze(a);const{textureWidth:i,sdfExponent:o}=ki,{sdfGlyphSize:s}=a,l=i/s*4;let c=_c[s];if(!c){const h=document.createElement("canvas");h.width=i,h.height=s*256/l,c=_c[s]={glyphCount:0,sdfGlyphSize:s,sdfCanvas:h,sdfTexture:new Pt(h,void 0,void 0,void 0,kt,kt),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,i_(c)}const{sdfTexture:u,sdfCanvas:f}=c;s_(a).then(h=>{const{glyphIds:d,glyphFontIndices:g,fontData:v,glyphPositions:m,fontSize:p,timings:S}=h,_=[],x=new Float32Array(d.length*4);let b=0,C=0;const E=Ni(),N=v.map(U=>{let D=c.glyphsByFont.get(U.src);return D||c.glyphsByFont.set(U.src,D=new Map),D});d.forEach((U,D)=>{const k=g[D],{src:W,unitsPerEm:j}=v[k];let q=N[k].get(U);if(!q){const{path:G,pathBounds:V}=h.glyphData[W][U],H=Math.max(V[2]-V[0],V[3]-V[1])/s*(ki.sdfMargin*s+.5),re=c.glyphCount++,$=[V[0]-H,V[1]-H,V[2]+H,V[3]+H];N[k].set(U,q={path:G,atlasIndex:re,sdfViewBox:$}),_.push(q)}const{sdfViewBox:X}=q,B=m[C++],w=m[C++],R=p/j;x[b++]=B+X[0]*R,x[b++]=w+X[1]*R,x[b++]=B+X[2]*R,x[b++]=w+X[3]*R,d[D]=q.atlasIndex}),S.quads=(S.quads||0)+(Ni()-E);const y=Ni();S.sdf={};const T=f.height,K=Math.ceil(c.glyphCount/l),L=Math.pow(2,Math.ceil(Math.log2(K*s)));L>T&&(console.info(`Increasing SDF texture size ${T}->${L}`),e_(f,i,L),u.dispose()),Promise.all(_.map(U=>_u(U,c,a.gpuAccelerateSDF).then(({timing:D})=>{S.sdf[U.atlasIndex]=D}))).then(()=>{_.length&&!c.contextLost&&(xu(c),u.needsUpdate=!0),S.sdfTotal=Ni()-y,S.total=Ni()-t,e(Object.freeze({parameters:a,sdfTexture:u,sdfGlyphSize:s,sdfExponent:o,glyphBounds:x,glyphAtlasIndices:d,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{c.contextLost||Qv(f)})}function _u({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:r,contextLost:i},o){if(i)return Promise.resolve({timing:-1});const{textureWidth:s,sdfExponent:l}=ki,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(s/n)*n,h=Math.floor(u/(s/n))*n,d=e%4;return jv(n,n,a,t,c,l,r,f,h,d,o)}function i_(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const n=[];a.glyphsByFont.forEach(r=>{r.forEach(i=>{n.push(_u(i,a,!0))})}),Promise.all(n).then(()=>{xu(a),a.sdfTexture.needsUpdate=!0})})}function r_(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let Ma;function xc(a){return Ma||(Ma=typeof document>"u"?{}:document.createElement("a")),Ma.href=a,Ma.href}function xu(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:n,height:r}=e,i=a.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==n*r*4)&&(o=new Uint8Array(n*r*4),t.image={width:n,height:r,data:o},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,n,r,i.RGBA,i.UNSIGNED_BYTE,o)}}const a_=$i({name:"Typesetter",dependencies:[Yv,Xv,Lv],init(a,e,t){return a(e,t())}}),s_=$i({name:"Typesetter",dependencies:[a_],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}}),yc={};function o_(a){let e=yc[a];if(!e){const t=new Ki(1,1,a,a),n=t.clone(),r=t.attributes,i=n.attributes,o=new gt,s=r.uv.count;for(let l=0;l<s;l++)i.position.array[l*3]*=-1,i.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{o.setAttribute(l,new At([...r[l].array,...i[l].array],r[l].itemSize))}),o.setIndex([...t.index.array,...n.index.array.map(l=>l+s)]),o.translate(.5,.5,0),e=yc[a]=o}return e}const l_="aTroikaGlyphBounds",Sc="aTroikaGlyphIndex",c_="aTroikaGlyphColor";class u_ extends mv{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Zi,this.boundingBox=new qi}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===It?t/2:0,e===Tt?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=o_(e);["position","normal","uv"].forEach(n=>{this.attributes[n]=t.attributes[n].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,n,r,i){Ps(this,l_,e,4),Ps(this,Sc,t,1),Ps(this,c_,i,3),this._blockBounds=n,this._chunkedBounds=r,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:n}=this;if(t){const{PI:r,floor:i,min:o,max:s,sin:l,cos:c}=Math,u=r/2,f=r*2,h=Math.abs(t),d=e[0]/h,g=e[2]/h,v=i((d+u)/f)!==i((g+u)/f)?-h:o(l(d)*h,l(g)*h),m=i((d-u)/f)!==i((g-u)/f)?h:s(l(d)*h,l(g)*h),p=i((d+r)/f)!==i((g+r)/f)?h*2:s(h-c(d)*h,h-c(g)*h);n.min.set(v,e[1],t<0?-p:0),n.max.set(m,e[3],t<0?0:p)}else n.min.set(e[0],e[1],0),n.max.set(e[2],e[3],0);n.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Sc).count,n=this._chunkedBounds;if(n)for(let r=n.length;r--;){t=n[r].end;let i=n[r].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}}function Ps(a,e,t,n){const r=a.getAttribute(e);t?r&&r.array.length===t.length?(r.array.set(t),r.needsUpdate=!0):(a.setAttribute(e,new lv(t,n)),delete a._maxInstanceCount,a.dispose()):r&&a.deleteAttribute(e)}const h_=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,f_=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,d_=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,p_=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function m_(a){const e=Zs(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new De},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new dt(0,0,0,0)},uTroikaClipRect:{value:new dt(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new De},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Xe},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ze},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:h_,vertexTransform:f_,fragmentDefs:d_,fragmentColorTransform:p_,customRewriter({vertexShader:t,fragmentShader:n}){let r=/\buniform\s+vec3\s+diffuse\b/;return r.test(n)&&(n=n.replace(r,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),r.test(t)||(t=t.replace(gu,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const lo=new Fa({color:16777215,side:Tt,transparent:!0}),Mc=8421504,bc=new at,ba=new Y,Ls=new Y,_r=[],g_=new Y,Us="+x+y";function Ec(a){return Array.isArray(a)?a[0]:a}let yu=()=>{const a=new Dt(new Ki(1,1),lo);return yu=()=>a,a},Su=()=>{const a=new Dt(new Ki(1,1,32,1),lo);return Su=()=>a,a};const v_={type:"syncstart"},__={type:"synccomplete"},Mu=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],x_=Mu.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class co extends Dt{constructor(){const e=new u_;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Mc,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Us,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(v_),n_({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const n=this._queuedSyncs;n&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{n.forEach(r=>r&&r())})),this.dispatchEvent(__),e&&e()})))}onBeforeRender(e,t,n,r,i,o){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i),i._hadOwnSide=i.hasOwnProperty("side"),this.geometry.setSide(i._actualSide=i.side),i.side=Pn}onAfterRender(e,t,n,r,i,o){i._hadOwnSide?i.side=i._actualSide:delete i.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=lo.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=m_(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let n=e._outlineMtl;return n||(n=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),n.isTextOutlineMaterial=!0,n.depthWrite=!1,n.map=null,e.addEventListener("dispose",function r(){e.removeEventListener("dispose",r),n.dispose()})),[n,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Ec(this.material).getDepthMaterial()}get customDistanceMaterial(){return Ec(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,n=e.uniforms,r=this.textRenderInfo;if(r){const{sdfTexture:s,blockBounds:l}=r;n.uTroikaSDFTexture.value=s,n.uTroikaSDFTextureSize.value.set(s.image.width,s.image.height),n.uTroikaSDFGlyphSize.value=r.sdfGlyphSize,n.uTroikaSDFExponent.value=r.sdfExponent,n.uTroikaTotalBounds.value.fromArray(l),n.uTroikaUseGlyphColors.value=!t&&!!r.glyphColors;let c=0,u=0,f=0,h,d,g,v=0,m=0;if(t){let{outlineWidth:S,outlineOffsetX:_,outlineOffsetY:x,outlineBlur:b,outlineOpacity:C}=this;c=this._parsePercent(S)||0,u=Math.max(0,this._parsePercent(b)||0),h=C,v=this._parsePercent(_)||0,m=this._parsePercent(x)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(g=this.strokeColor,n.uTroikaStrokeColor.value.set(g??Mc),d=this.strokeOpacity,d==null&&(d=1)),h=this.fillOpacity;n.uTroikaDistanceOffset.value=c,n.uTroikaPositionOffset.value.set(v,m),n.uTroikaBlurRadius.value=u,n.uTroikaStrokeWidth.value=f,n.uTroikaStrokeOpacity.value=d,n.uTroikaFillOpacity.value=h??1,n.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)n.uTroikaClipRect.value.fromArray(p);else{const S=(this.fontSize||.1)*100;n.uTroikaClipRect.value.set(l[0]-S,l[1]-S,l[2]+S,l[3]+S)}this.geometry.applyClipRect(n.uTroikaClipRect.value)}n.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const s=e.hasOwnProperty("color")?e.color:e.color=new Xe;(i!==s._input||typeof i=="object")&&s.set(s._input=i)}let o=this.orientation||Us;if(o!==e._orientation){let s=n.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let l=o!==Us&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,f,h]=l;ba.set(0,0,0)[u]=c==="-"?1:-1,Ls.set(0,0,0)[h]=f==="-"?-1:1,bc.lookAt(g_,ba.cross(Ls),Ls),s.setFromMatrix4(bc)}else s.identity();e._orientation=o}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),n=t?parseFloat(t[1]):NaN;e=(isNaN(n)?0:n/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new De){t.copy(e);const n=this.curveRadius;return n&&(t.x=Math.atan2(e.x,Math.abs(n)-Math.abs(e.z))*Math.abs(n)),t}worldPositionToTextCoords(e,t=new De){return ba.copy(e),this.localPositionToTextCoords(this.worldToLocal(ba),t)}raycast(e,t){const{textRenderInfo:n,curveRadius:r}=this;if(n){const i=n.blockBounds,o=r?Su():yu(),s=o.geometry,{position:l,uv:c}=s.attributes;for(let u=0;u<c.count;u++){let f=i[0]+c.getX(u)*(i[2]-i[0]);const h=i[1]+c.getY(u)*(i[3]-i[1]);let d=0;r&&(d=r-Math.cos(f/r)*r,f=Math.sin(f/r)*r),l.setXYZ(u,f,h,d)}s.boundingSphere=this.geometry.boundingSphere,s.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,_r.length=0,o.raycast(e,_r);for(let u=0;u<_r.length;u++)_r[u].object=this,t.push(_r[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,x_.forEach(n=>{this[n]=e[n]}),this}clone(){return new this.constructor().copy(this)}}Mu.forEach(a=>{const e="_private_"+a;Object.defineProperty(co.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});const y_=document.querySelector("canvas.webgl"),Qi=new su({canvas:y_,antialias:!0,alpha:!0,performance:"high-performance"});Qi.setSize(window.innerWidth,window.innerHeight);const it=new Wt(45,window.innerWidth/window.innerHeight,.1,4e5);it.position.set(0,0,1);document.createElement("div");new Tn;new gv;new De;new Y;new Y;new Y;new at;const bu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Fr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const S_=new Qc(-1,1,1,-1,0,1),uo=new gt;uo.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3));uo.setAttribute("uv",new At([0,2,0,0,2,0],2));class Eu{constructor(e){this._mesh=new Dt(uo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,S_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ho extends Fr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rr.clone(e.uniforms),this.material=new pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Eu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Tc extends Fr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),i.buffers.stencil.setClear(s),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}}class M_ extends Fr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Tu{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new De);this._width=n.width,this._height=n.height,t=new ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ho(bu),this.copyPass.material.blending=wn,this.clock=new fu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,i=this.passes.length;r<i;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Tc!==void 0&&(o instanceof Tc?n=!0:o instanceof M_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class b_ extends Fr{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let i,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const E_={uniforms:{tDiffuse:{value:null},resolution:{value:new De(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`},T_={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ji extends Fr{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new De(e.x,e.y):new De(256,256),this.clearColor=new Xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ln(i,o,{type:Cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new ln(i,o,{type:Cn});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new ln(i,o,{type:Cn});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),i=Math.round(i/2),o=Math.round(o/2)}const s=T_;this.highPassUniforms=Rr.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pt({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];i=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new De(1/i,1/o),i=Math.round(i/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=bu;this.copyUniforms=Rr.clone(u.uniforms),this.blendMaterial=new pt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Fs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Xe,this.oldClearAlpha=1,this.basic=new Fa,this.fsQuad=new Eu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(n,r),this.renderTargetsVertical[i].setSize(n,r),this.separableBlurMaterials[i].uniforms.invSize.value=new De(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,i){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let s=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[l].uniforms.direction.value=ji.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ji.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),s=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new De(.5,.5)},direction:{value:new De(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ji.BlurDirectionX=new De(1,0);ji.BlurDirectionY=new De(0,1);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class pn{constructor(e,t,n,r,i="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),pn.nextNameID=pn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++pn.nextNameID,this.$widget=document.createElement(i),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class A_ extends pn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Js(a){let e,t;return(e=a.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const w_={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:Js,toHexString:Js},Pr={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},C_={isPrimitive:!1,match:Array.isArray,fromHexString(a,e,t=1){const n=Pr.fromHexString(a);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(255&n)/255*t},toHexString:([a,e,t],n=1)=>Pr.toHexString(a*(n=255/n)<<16^e*n<<8^t*n<<0)},R_={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,e,t=1){const n=Pr.fromHexString(a);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(255&n)/255*t},toHexString:({r:a,g:e,b:t},n=1)=>Pr.toHexString(a*(n=255/n)<<16^e*n<<8^t*n<<0)},P_=[w_,Pr,C_,R_];class L_ extends pn{constructor(e,t,n,r){var i;super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(i=this.initialValue,P_.find(o=>o.match(i))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Js(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ds extends pn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class U_ extends pn{constructor(e,t,n,r,i,o){super(e,t,n,"number"),this._initInput(),this.min(r),this.max(i);const s=o!==void 0;this.step(s?o:this._getImplicitStep(),s),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=u=>{const f=parseFloat(this.$input.value);isNaN(f)||(this._snapClampSetValue(f+u),this.$input.value=this.getValue())};let t,n,r,i,o,s=!1;const l=u=>{if(s){const f=u.clientX-t,h=u.clientY-n;Math.abs(h)>5?(u.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(f)>5&&c()}if(!s){const f=u.clientY-r;o-=f*this._step*this._arrowKeyMultiplier(u),i+o>this._max?o=this._max-i:i+o<this._min&&(o=this._min-i),this._snapClampSetValue(i+o)}r=u.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{let u=parseFloat(this.$input.value);isNaN(u)||(this._stepExplicit&&(u=this._snap(u)),this.setValue(this._clamp(u)))}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u)*-1))}),this.$input.addEventListener("wheel",u=>{this._inputFocused&&(u.preventDefault(),e(this._step*this._normalizeMouseWheel(u)))},{passive:!1}),this.$input.addEventListener("mousedown",u=>{t=u.clientX,n=r=u.clientY,s=!0,i=this.getValue(),o=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=h=>{const d=this.$slider.getBoundingClientRect();let g=(v=h,m=d.left,p=d.right,S=this._min,_=this._max,(v-m)/(p-m)*(_-S)+S);var v,m,p,S,_;this._snapClampSetValue(g)},t=h=>{e(h.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)};let r,i,o=!1;const s=h=>{h.preventDefault(),this._setDraggingStyle(!0),e(h.touches[0].clientX),o=!1},l=h=>{if(o){const d=h.touches[0].clientX-r,g=h.touches[0].clientY-i;Math.abs(d)>Math.abs(g)?s(h):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else h.preventDefault(),e(h.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},u=this._callOnFinishChange.bind(this);let f;this.$slider.addEventListener("mousedown",h=>{this._setDraggingStyle(!0),e(h.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",h=>{h.touches.length>1||(this._hasScrollBar?(r=h.touches[0].clientX,i=h.touches[0].clientY,o=!0):s(h),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",c))},{passive:!1}),this.$slider.addEventListener("wheel",h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const d=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+d),this.$input.value=this.getValue(),clearTimeout(f),f=setTimeout(u,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class D_ extends pn{constructor(e,t,n,r){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(i=>{const o=document.createElement("option");o.innerHTML=i,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class I_ extends pn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Ac=!1,F_=class Au{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i="Controls",injectStyles:o=!0,touchStyles:s=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),s&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Ac&&o&&(function(l){const c=document.createElement("style");c.innerHTML=l;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(c,u):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Ac=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,r,i){if(Object(n)===n)return new D_(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new U_(this,e,t,n,r,i);case"boolean":return new A_(this,e,t);case"string":return new I_(this,e,t);case"function":return new Ds(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new L_(this,e,t,n)}addFolder(e){return new Au({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Ds||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ds)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=i=>{i.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};const oi=new F_,Wn={uResolution:{value:new De(window.innerWidth,window.innerHeight)},globalBloom:{value:0},uTime:{value:0},cameraMatrix:{value:null}};let er=`
  // Original noise code from https://www.shadertoy.com/view/4sc3z2
  #define MOD3 vec3(.1031,.11369,.13787)
  vec3 hash33(vec3 p3)
  {
    p3 = fract(p3 * MOD3);
      p3 += dot(p3, p3.yxz+19.19);
      return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
  }
  float simplex_noise(vec3 p)
  {
      const float K1 = 0.333333333;
      const float K2 = 0.166666667;

      vec3 i = floor(p + (p.x + p.y + p.z) * K1);
      vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);

      vec3 e = step(vec3(0.0), d0 - d0.yzx);
    vec3 i1 = e * (1.0 - e.zxy);
    vec3 i2 = 1.0 - e.zxy * (1.0 - e);

      vec3 d1 = d0 - (i1 - 1.0 * K2);
      vec3 d2 = d0 - (i2 - 2.0 * K2);
      vec3 d3 = d0 - (1.0 - 3.0 * K2);

      vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);
      vec4 n = h * h * h * h * vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));

      return dot(vec4(31.316), n);
  }
  `;const N_={near:{value:100},far:{value:1500}},Pa={opaque:!0,alphaIntensity:.01};let li={...N_,opaque:{value:Pa.opaque},alphaIntensity:{value:Pa.alphaIntensity},pointTexture:{value:new Ir().load("/images/spark1.png")},...Wn},wu=oi.addFolder("triangle");wu.add(Pa,"opaque").onChange(a=>{li.opaque.value=a});wu.add(Pa,"alphaIntensity",.01,1,.01).onChange(a=>{li.alphaIntensity.value=a});let O_=`
  
  attribute float vertexId;
  attribute float size;
  varying float vId;
  varying float vActive;
  
  varying vec3 vPosition;
  varying vec4 vColor; 
  varying vec4 vViewPosition;
  
  
  void main(){
      vColor  = color;
      vId = vertexId;
      vPosition = position;
  
      vec4 vViewPosition = modelViewMatrix * vec4(position , 1.0); 
      gl_PointSize = 120. * ( 300.0 / -vViewPosition.z );
      gl_Position = projectionMatrix * vViewPosition; 
  }
  `,B_=`
  ${er}
  uniform sampler2D pointTexture;
  
  uniform float uTime;
  varying vec4 vColor;
  varying vec4 vViewPosition;
  uniform float globalBloom;
  varying vec3 vPosition;
  
  varying float vId;
  varying vec2 vUv;
  uniform vec2 uResolution;
  
  uniform float near;
  uniform float far;
  
  float rand(float i){
    return fract(sin(dot(vec2(i, i) ,vec2(32.9898,78.233))) * 43758.5453);
}

  float circle(){
    vec2 center = gl_PointCoord - vec2(0.5);
    float radius = length(center);
    float gradient = step(0.1,  radius);  
    return 1.- gradient; 
  }
  
    
  float remap(float value, float fromMin, float fromMax, float toMin, float toMax) {
    return (value - fromMin) / (fromMax - fromMin) * (toMax - toMin) + toMin;
}
  void main(){
    float fogFactor = smoothstep( 800., 1000., - vViewPosition.z );
    float depth = 1.-  smoothstep( 100., 1500., - vViewPosition.z )  ;//smoothstep( -1500. , 1. , vViewPosition.z);
    float time = uTime * .1 ;
    float r = simplex_noise(vec3(time));
    float g = simplex_noise(vec3(time + 1.));
    float b = simplex_noise(vec3(time + 2.));
    gl_FragColor = vec4( abs(vec3(r,g,b)) ,circle());
    gl_FragColor.rgb = vColor.rgb;


    vec3 pos = vec3(vPosition.xy , gl_FragCoord.y/uResolution.y);
    pos.z +=time *( 10.) ;
    pos.x +=time *( 10.) ;
    pos.y +=time *( 10.) ;


    // vec3 depthColor = vec3(1.,0.,0.) * depth;
    // vec3 fogColor = vec3(0.,1.,0.) * fogFactor;
    // gl_FragColor.a = ;
  
  
    float a =  simplex_noise(vec3(pos *0.1 ));
a = remap(a , -1.,1.,0.0,1.);
    float flick  =  step( 0.1 , rand(uTime*0.01 * vPosition.x * vPosition.y + vPosition.z ));

   if(globalBloom > 0.5 ) {
      gl_FragColor.a = a * circle() ;
  } else{
    gl_FragColor.a = circle() ;
  }
  
  // gl_FragColor.rgba =  mix(  vec4(0.) , vec4(depth) ,depth );

  //$//{fog}
    
  }`,k_=`
  ${er}
  
  float remap(float value, float fromMin, float fromMax, float toMin, float toMax) {
    return (value - fromMin) / (fromMax - fromMin) * (toMax - toMin) + toMin;
}

  uniform float uTime;
  varying vec4 vColor;
  varying vec4 vViewPosition;
  uniform float globalBloom;
  varying vec3 vPosition;
  
  varying float vId;
  varying vec2 vUv;
  
  uniform float near;
  uniform float far;
  
  
  
  
  void main (){
    //0xff167f
    float normalizedDepth = vViewPosition.z / vViewPosition.w;
    float time = uTime * 0.1 ;
    vec3 pos = vec3(vPosition.xy , gl_FragCoord.z);
    pos.z +=time *( 100.) ;
    pos.x +=time *( 100.) ;
    pos.y +=time *( 100.) ;

    // pos.y +=time *100. ;

    
    float r = simplex_noise(vec3(time));
    float g = simplex_noise(vec3(time + 1.));
    float b = simplex_noise(vec3(time + 2.));

    float noise = simplex_noise(pos*.01 );
    // gl_FragColor = vec4( 1. * noise );

    gl_FragColor = vColor;
    vec3 sincolor = abs(vec3(r,g,b));

     // gl_FragColor = vec4( abs(vec3(r,g,b)) ,step(0.1 , vColor.a));
  
  
    vec3 outColor = mix( vColor.rgb , sincolor  , 1. -(noise) ) ;

    float a = noise ;//remap(noise , -1. ,1. , 0. , 1. );

    // gl_FragColor.rgb = outColor;
  if (globalBloom > 0.5  ){
      gl_FragColor.a = mix( vColor.a , a,  0.5)  ;
   } 
   else if(globalBloom < 0.1 ) {
      gl_FragColor.a = mix( vColor.a , a,  0.5) ;

  } 
  // else{
  //   gl_FragColor.a =0.;
  // }
  } 
  `,Cu=`
  
  attribute float vertexId;
  varying float vId;
  varying float vActive;
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec4 vViewPosition;
  varying vec4 vColor; 
  void main(){
    vColor = color;
    vId = vertexId;
    vUv = uv; 
    vPosition = position;
     vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
     vViewPosition = mvPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position , 1.);
  }
  `,z_=`
  ${er}

  uniform float uTime;
  varying vec4 vColor;
  varying vec4 vViewPosition;
  uniform float globalBloom;
  varying vec3 vPosition;

  uniform bool opaque;
  uniform float alphaIntensity;
  
  uniform float near;
  uniform float far;
  
  varying float vId;
  varying vec2 vUv;
 

  float remap(float value, float fromMin, float fromMax, float toMin, float toMax) {
    return (value - fromMin) / (fromMax - fromMin) * (toMax - toMin) + toMin;
}


  void main(){

    
    vec2 uv = vUv;

    float time = uTime* 0.1;

    vec3 pos = vec3(uv.xy * 100., 1.);
    pos.z +=time *( 100.) ;
    pos.x +=time *( 100.) ;
    pos.y +=time *( 100.) ;

    
    float noise = simplex_noise(pos*.1 );
    // gl_FragColor = vec4( 1. * noise );

    gl_FragColor = vColor;
    // vec3 sincolor = abs(vec3(r,g,b));

    // gl_FragColor = vec4( abs(vec3(r,g,b)) ,step(0.1 , vColor.a));
  
    
    
    float a = remap(noise , -1. ,1. , 0. , 1. );
    float alpha = vColor.a * alphaIntensity;
    if(opaque){
      alpha = alphaIntensity;
    }

    
  if (globalBloom > 0.5  ){
      gl_FragColor.a = alpha ;
   } 
   else if(globalBloom < 0.1 ) {
      gl_FragColor.a = alpha ;

  }



  // $ {fog}

  }`,G_=new pt({vertexColors:!0,side:Tt,vertexShader:O_,fragmentShader:B_,uniforms:li,size:10,transparent:!0});new Ir().load("/images/roundBorder.png");let H_=new pt({vertexShader:Cu,fragmentShader:k_,uniforms:li,vertexColors:!0,transparent:!0,side:Tt}),V_=new pt({vertexShader:Cu,fragmentShader:z_,uniforms:li,vertexColors:!0,transparent:!0,side:Tt}),W_=new pt;W_.onBeforeCompile=a=>{a.uniforms={...a.uniforms,...li},a.fragmentShader=a.fragmentShader.replace("vec4 diffuseColor = vec4( vTroikaGlyphColor, opacity );",`
  vec4 diffuseColor = vec4( vTroikaGlyphColor, opacity );
  // diffuseColor = vec4(1.);

  `),console.log(a.fragmentShader)};window.Text=co;class X_{constructor({particlesData:e,connections:t,trianglesData:n}){window.particle=e,this.particlesData=e,this.connections=t,this.trianglesData=n;let r=e.length,i=new Float32Array(r*3),o=new Float32Array(t.length*6),s=new Float32Array(r*9),l=new Float32Array(r*4),c=new Float32Array(r*12),u=new Float32Array(t.length*8),f=new Float32Array(r*1),h=new gt;h.setAttribute("position",new ft(i,3).setUsage(Yn)),h.setAttribute("color",new ft(l,4).setUsage(Yn)),h.setAttribute("size",new ft(f,1).setUsage(Yn));let d=new gt;d.setAttribute("position",new ft(o,3).setUsage(Yn)),d.setAttribute("color",new ft(u,4).setUsage(Yn)),window.g=d;let g=new gt;g.setAttribute("position",new ft(s,3).setUsage(Yn)),g.setAttribute("color",new ft(c,4).setUsage(Yn));let v=new mt,m=new cu(d,H_),p=new hu(h,G_),S=new Dt(g,V_);m.material.depthTest=!0,p.material.depthTest=!0,S.material.depthTest=!0,m.material.depthWrite=!1,p.material.depthWrite=!1,S.material.depthWrite=!1,m.material.blending=dn,p.material.blending=dn,S.material.blending=dn,v.add(p),v.add(m),v.add(S),this.trackers=[],this.labels=[],this.textHolder=[],this.points=p,this.lines=m,this.triangles=S,this.object=v,this.radiusRange=1e3,this.needsUpdate=!1,this.hash={},this.hovered={particle:[],connections:[]},this.active=[],this.alpha=!0,this.init()}init(){let e=this;for(let t=0;t<e.particlesData.length;t++){let{position:{x:n,y:r,z:i},id:o,color:{r:s,g:l,b:c},label:u,radius:f}=e.particlesData[t];this.hash[o]={index:t},this.setPoint(t,n,r,i),this.setPointSize(t,f*this.radiusRange),this.setPointColor(t,{r:s,g:l,b:c,a:1});let h=new Dt(new Oa(4,32),new hv),d=new mt;d.visible=!1,this.object.add(d),h.position.set(n,r,i),h.visible=!1,h.name="helper",h.particleIndex=o,this.trackers.push(h)}this.createConnections(),this.createTriangle()}generateText(e,t,n){const r=new co;return r.text=e,r.fontSize=10.2,r.color=new Xe().setRGB(n.r,n.g,n.b),r.material.onBeforeCompile=i=>{i.uniforms={...i.uniforms,...li},i.fragmentShader=i.fragmentShader.replace("varying vec3 vTroikaGlyphColor;",`
            ${er}
            varying vec3 vTroikaGlyphColor;
            uniform float globalBloom;
            uniform float uTime;
             `),i.fragmentShader=i.fragmentShader.replace("gl_FragColor = linearToOutputTexel( gl_FragColor );",`
            // gl_FragColor = linearToOutputTexel( gl_FragColor );
            // diffuseColor = vec4(1.);

            // float a =  simplex_noise(vec3(pos *0.1 ));
            
            if (globalBloom > 0.5  ){
                gl_FragColor = vec4(0.);
             } 
             else if(globalBloom < 0.1 ) {
                gl_FragColor.a = diffuseColor.a ;
          
            };
          
            `)},r.sync(),r}setPointSize(e,t){let n=this.points.geometry.attributes.size;n.setX(e,t),n.needsUpdate=!0}setPoint(e,t,n,r){let i=this.points.geometry.attributes.position;i.setXYZ(e,t,n,r),i.needsUpdate=!0}setLine(e,t,n,r,i,o,s){let l=this.lines.geometry.attributes.position;l.setXYZ(e*2,t,n,r),l.setXYZ(e*2+1,i,o,s),l.needsUpdate=!0}setTriangle(e,t,n,r,i,o,s,l,c,u){let f=this.triangles.geometry.attributes.position;f.setXYZ(e*3,t,n,r),f.setXYZ(e*3+1,i,o,s),f.setXYZ(e*3+2,l,c,u),f.needsUpdate=!0}setLineColor(e,t,n){let{r,g:i,b:o,a:s=1}=t,{r:l,g:c,b:u,a:f=1}=n,h=this.lines.geometry.attributes.color;h.setXYZW(e*2,r,i,o,s),h.setXYZW(e*2+1,l,c,u,s),h.needsUpdate=!0}setTriangleColor(e,t,n,r){let{r:i,g:o,b:s,a:l=1}=t,{r:c,g:u,b:f,a:h=1}=n,{r:d,g,b:v,a:m=1}=r,p=this.triangles.geometry.attributes.color;p.setXYZW(e*3,i,o,s,l),p.setXYZW(e*3+1,c,u,f,h),p.setXYZW(e*3+2,d,g,v,m),p.needsUpdate=!0}setPointColor(e,t){let{r:n,g:r,b:i,a:o}=t,s=this.points.geometry.attributes.color;s.setXYZW(e,n,r,i,o),s.needsUpdate=!0}update(e){this.textHolder.length&&e&&this.textHolder.forEach(t=>{t.quaternion.copy(e.quaternion)})}setHover(e){let t=this.filterConnectionsById(e);if(!t.length){this.setPointColor(e,{r:1,g:1,b:1,a:1});return}[...new Set(t.map(n=>[n.from,n.to]).flatMap(n=>n))].forEach(n=>{this.setPointColor(n,{r:1,g:1,b:1,a:1})}),t.forEach(n=>this.setLineColor(n.index,{r:1,g:1,b:1,a:1},{r:1,g:1,b:1,a:1}))}removeHover(e){let t=this.filterConnectionsById(e);if(!t.length){let{r:n,g:r,b:i}=this.particlesData[this.hash[e].index].color;this.setPointColor(e,{r:n,g:r,b:i,a:1});return}[...new Set(t.map(n=>[n.from,n.to]).flatMap(n=>n))].forEach(n=>{let{r,g:i,b:o}=this.particlesData[this.hash[n].index].color;this.setPointColor(n,{r,g:i,b:o,a:1})}),t.forEach(n=>{let{from:r,to:i,index:o,alpha:s}=n,{r:l,g:c,b:u}=this.particlesData[r].color,{r:f,g:h,b:d}=this.particlesData[i].color;this.setLineColor(o,{r:l,g:c,b:u,a:this.alpha?s:1},{r:f,g:h,b:d,a:this.alpha?s:1})})}filterConnections(){return this.connections}filterByPosition(e){return this.connections.filter(t=>{const n=this.particlesData[t.to].position,r=this.particlesData[t.from].position;return e.some(i=>i.position.x===n.x&&i.position.y===n.y&&i.position.z===n.z)&&e.some(i=>i.position.x===r.x&&i.position.y===r.y&&i.position.z===r.z)})}filterConnectionsById(e){return this.connections.filter(t=>t.from==e||t.to==e)}handleDrag(e,t){let n=this.particlesData[this.hash[e].index];n.position.x=t.x,n.position.y=t.y,n.position.z=t.z,this.setPoint(this.hash[e].index,t.x,t.y,t.z),this.filterConnectionsById(n.id).forEach(i=>{let{from:o,to:s,index:l}=i,c=this.hash[o].index,u=this.hash[s].index,{x:f,y:h,z:d}=this.particlesData[c].position,{x:g,y:v,z:m}=this.particlesData[u].position,S=1-Y_({x:f,y:h,z:d},{x:g,y:v,z:m})/250;S=Math.max(.1,S),i.alpha=S,this.particlesData[o].color,this.particlesData[s].color,this.setLine(l,f,h,d,g,v,m),this.trianglesData.filter(x=>x.id.some(b=>b==c||b==u)).forEach(x=>{let{id:[b,C,E],alpha:[N,y,T],vertexPos:K}=x,{position:{x:L,y:U,z:D},color:{r:k,g:W,b:j}}=this.getParticleById(b),{position:{x:q,y:X,z:B},color:{r:w,g:R,b:G}}=this.getParticleById(C),{position:{x:V,y:H,z:re},color:{r:$,g:ne,b:xe}}=this.getParticleById(E);this.setTriangle(K,L,U,D,q,X,B,V,H,re),this.setTriangleColor(K,{r:k,g:W,b:j,a:N},{r:w,g:R,b:G,a:y},{r:$,g:ne,b:xe,a:T})})})}getParticleById(e){return this.particlesData[this.hash[e].index]}createConnections(){let e=this.connections,t=0;for(let n=0;n<e.length;n++){let{from:r,to:i,alpha:o,color1:s,color2:l}=e[n],{x:c,y:u,z:f}=this.particlesData[r].position,{x:h,y:d,z:g}=this.particlesData[i].position,{r:v,g:m,b:p}=this.particlesData[r].color,{r:S,g:_,b:x}=this.particlesData[i].color;this.setLine(t,c,u,f,h,d,g),this.setLineColor(t,{r:v,g:m,b:p,a:this.alpha?o:1},{r:S,g:_,b:x,a:this.alpha?o:1}),e[n].index=t,t+=1}}createTriangle(){let e=0,t=this;for(let n=0;n<t.trianglesData.length;n++){let{id:[r,i,o],alpha:[s,l,c]}=t.trianglesData[n],{position:{x:u,y:f,z:h},color:{r:d,g,b:v}}=this.getParticleById(r),{position:{x:m,y:p,z:S},color:{r:_,g:x,b}}=this.getParticleById(i),{position:{x:C,y:E,z:N},color:{r:y,g:T,b:K}}=this.getParticleById(o);this.setTriangle(e,u,f,h,m,p,S,C,E,N),this.setTriangleColor(e,{r:d,g,b:v,a:s},{r:_,g:x,b,a:l},{r:y,g:T,b:K,a:c}),t.trianglesData[n].vertexPos=e,e++}console.log(e),this.triangles.geometry.setDrawRange(0,e*3)}findConnectedChildren(e){const t={};this.connections.forEach(i=>{const{to:o,from:s}=i;t[o]||(t[o]=[]),t[s]||(t[s]=[]),t[o].push(s),t[s].push(o)});function n(i,o=new Set){o.add(i);const s=t[i]||[],l=[];for(const c of s)if(!o.has(c)){const u=n(c,o);l.push(...u)}return[...s,...l]}return n(e)}}function Y_(a,e){const t=a.x-e.x,n=a.y-e.y,r=a.z-e.z;return Math.sqrt(t*t+n*n+r*r)}let Ru=new Worker("/src/worker.js");Ru.postMessage({type:"randomdata"});const La=new bv;La.showPanel(0);document.body.appendChild(La.dom);it.far=2e3;it.near=200;let j_=new mt;const ka=new xv(it,Qi.domElement);it.updateProjectionMatrix();const ci=oi.addFolder("Camera");ka.enabled=!0;ka.enableZoom=!0;ci.add(it.position,"x",-1e4,1e4);ci.add(it,"near",1,1500).onChange(()=>{it.updateProjectionMatrix()});ci.add(it,"far",1,1e4).onChange(()=>{it.updateProjectionMatrix()});ci.add(it,"fov",0,120).onChange(()=>{it.updateProjectionMatrix()});ci.add(it.position,"y",-1e4,1e4);ci.add(it.position,"z",-1e4,2e4);ci.add(it,"fov",0,120).onChange(()=>{it.updateProjectionMatrix()});const za=new av,Un={threshold:.1,strength:.8,radius:1,exposure:1,toneIntensity:1.9,showBackground:!1};za.add(j_);const Pu=Qi.getPixelRatio(),Lu=new b_(za,it),fo=new ho(E_);fo.material.uniforms.resolution.value.x=1/(window.innerWidth*Pu);fo.material.uniforms.resolution.value.y=1/(window.innerHeight*Pu);const ui=new ji(new De(window.innerWidth,window.innerHeight),1.5,.4,.85);ui.threshold=Un.threshold;ui.strength=Un.strength;ui.radius=Un.radius;var Nr=new Tu(Qi);Nr.renderToScreen=!1;Nr.addPass(Lu);Nr.addPass(ui);let po=new Ir().load("/images/Darco.png");const Ga=new ho(new pt({transparent:!1,uniforms:{...Wn,background:{value:po},showBackground:{value:!1},toneIntensity:{value:Un.toneIntensity},baseTexture:{value:null},bloomTexture:{value:Nr.renderTarget2.texture}},vertexShader:`
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}
`,_fragmentShader:`
    ${er}

    float rand(float i){
      return fract(sin(dot(vec2(i, i) ,vec2(32.9898,78.233))) * 43758.5453);
  }

    vec3 tone(vec3 color, float gamma)
{
	float white = 2.;
	float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
	float toneMappedLuma = luma * (1. + luma / (white*white)) / (1. + luma);
	color *= toneMappedLuma / luma;
	color = pow(color, vec3(1. / gamma));
	return color;
}


vec3 ACESFilm(vec3 x) {
    
  // ACES system tone scale (RTT+ODT)
  const float a = .0245786;
  const float b = -.000090537;
  const float c = .983729;
  const float d = .4329510;
  const float e = .238081;
  x = (x*(x+a)+b) / (x*(x*c+d)+e);
  
  return x;
}

    vec4 contrast(vec4 x, float s) {
      return 1.0 / (1.0 + exp(-s * (x - 0.5)));    
    }
      uniform float uTime;
			uniform sampler2D baseTexture;
			uniform sampler2D bloomTexture;
      uniform vec2 uResolution;
			varying vec2 vUv;

      uniform bool showBackground ;

      uniform float toneIntensity;

      uniform sampler2D background;

      vec3 blendNormal(vec3 base, vec3 blend) {
        return blend;
      }
      
      vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
        return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
      }


      vec4 blur(sampler2D tDiffuse, vec2 uv, float sampleDist, float strength) {
        float samples[6];
        samples[0] = -0.08;
        samples[1] = -0.03;
        samples[2] = -0.01;
        samples[3] =  0.01;
        samples[4] =  0.03;
        samples[5] =  0.08;
    
        vec2 dir = normalize(0.5 - uv);
        vec4 texel = texture2D(tDiffuse, uv);
        vec4 sum = texel;
    
        for (int i = 0; i < 6; i++) {
            sum += texture2D(tDiffuse, uv + (dir * samples[i] * sampleDist * strength));
        }
    
        sum /= 6.0;
        return sum;
    }




      vec3 filmGrainColor(vec2 uv, float offset)
      { // by ma (lstGWn)
          vec4 uvs;
          uvs.xy = uv + vec2(offset, offset);
          uvs.zw = uvs.xy + 0.5*vec2(1.0 / uResolution.x, 1.0 / uResolution.y);
      
          uvs = fract(uvs * vec2(21.5932, 21.77156).xyxy);
      
          vec2 shift = vec2(21.5351, 14.3137);
          vec2 temp0 = uvs.xy + dot(uvs.yx, uvs.xy + shift);
          vec2 temp1 = uvs.xw + dot(uvs.wx, uvs.xw + shift);
          vec2 temp2 = uvs.zy + dot(uvs.yz, uvs.zy + shift);
          vec2 temp3 = uvs.zw + dot(uvs.wz, uvs.zw + shift);
      
          vec3 r = vec3(0.0, 0.0, 0.0);
          r += fract(temp0.x * temp0.y * vec3(95.4337, 96.4337, 97.4337));
          r += fract(temp1.x * temp1.y * vec3(95.4337, 96.4337, 97.4337));
          r += fract(temp2.x * temp2.y * vec3(95.4337, 96.4337, 97.4337));
          r += fract(temp3.x * temp3.y * vec3(95.4337, 96.4337, 97.4337));
      
          return r * 0.25;
      }



			void main() {
        vec2 uv = (gl_FragCoord.xy ) / uResolution.xy;
        vec2 bp = uv;

        gl_FragColor = (  texture2D( baseTexture, vUv ) +   vec4( 1.0 ) * texture2D( bloomTexture, vUv )*.75 );
        // gl_FragColor = vec4(pow(gl_FragColor.rgb,vec3(1.0/2.2)),1.);
        
        
        if(showBackground){
          gl_FragColor = (1.-  texture2D(background,vUv)+   vec4( 1.0 ) * gl_FragColor); 

        }
        gl_FragColor.rgb = tone(gl_FragColor.rgb,toneIntensity); 
        // gl_FragColor.rgb = mix(col,tone(col,1.7),.965);
        
        // gl_FragColor.rgb *= pow(16.0*bp.x*bp.y*(1.0-bp.x)*(1.0-bp.y),.45);

        // gl_FragColor.rgb  *= vec4(rand(uTime + uv.x*10.3 + uv.y *10.3 + 3.) ).rgb;

    // vec2 uv = (gl_FragCoord.xy ) / uResolution.xy;
  
    // vec2 vv = 2.0*(uv-0.5);
    // vv.x *= uResolution.x/uResolution.y;

    // // float cas = step(abs(vv.y)*2.39,uResolution.x/uResolution.y);
    // // if (cas<0.1){gl_FragColor = vec4(1.); return;}
    
    // float time = uTime * .1 ;
    // vec4 outColor = vec4(0.);
    // vec4 background = 1.- texture2D( background ,vUv);
    // outColor = (  texture2D(baseTexture,vUv) +   vec4( 1.0 ) * texture2D( bloomTexture, uv )*1.0500 );
    
    // gl_FragColor = outColor;
    
    // // vec2 v = 2.*(uv-.5);
    // // v.y *= 2.39 * uResolution.y/uResolution.x;
    // // v = clamp((v*.5)+.5, 0., 1.);
    // // outColor *= 0.25 + 0.75*pow( 16.0*v.x*v.y*(1.0-v.x)*(1.0-v.y), 0.25);
    // gl_FragColor = vec4(pow(gl_FragColor.rgb,vec3(1.0/2.2)),1.);
    
    // // gl_FragColor.rgb = 1.0 - exp( -gl_FragColor.rgb );
    // // gl_FragColor.a = 1.;

    // // Output to screen
    // // fragColor = vec4(col, 1.0);
    // // gl_FragColor.a =  texture2D( baseTexture, uv ).a ;
      
      }
`,get fragmentShader(){return this._fragmentShader},set fragmentShader(a){this._fragmentShader=a},defines:{}}),"baseTexture");Ga.needsSwap=!0;const Or=new Tu(Qi);Or.setSize(window.innerWidth,window.innerHeight);Or.addPass(Lu);Or.addPass(Ga);Or.addPass(fo);const Uu=oi.addFolder("bloom");Uu.add(Un,"threshold",0,1).onChange(function(a){ui.threshold=Number(a)});Uu.add(Un,"strength",0,3).onChange(function(a){ui.strength=Number(a)});oi.add(Un,"radius",0,1).step(.01).onChange(function(a){ui.radius=Number(a)});const Du=oi.addFolder("tone mapping");Du.add(Un,"toneIntensity",.1,2.2,.01).onChange(function(a){Ga.uniforms.toneIntensity.value=a});Du.add(Un,"showBackground").onChange(function(a){Ga.uniforms.showBackground.value=a});const{random:Is,sin:Q_,cos:e0}=Math;let wc=new fu,Lr=[],Cc=[];window.particlesData=Lr;new pt({uniforms:{background:{value:po},...Wn},side:Tt,vertexShader:`
  
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position ,  1.);
  }
  `,fragmentShader:`

  ${er}
  
  float rand(float i){
    return fract(sin(dot(vec2(i, i) ,vec2(32.9898,78.233))) * 43758.5453);
}

  uniform vec2 uResolution;
  uniform float globalBloom;
  uniform sampler2D background;
  varying vec2 vUv;
  uniform float uTime;

  float map(float value, float minInput, float maxInput, float minOutput, float maxOutput) {
    return minOutput + (maxOutput - minOutput) * (value - minInput) / (maxInput - minInput);
}

vec3 colormap(float t) {
  // Example gradient: blue to red
  vec3 color1 = vec3(sin(uTime) ,cos(uTime) ,sin(uTime)); // Blue
  vec3 color2 = vec3(cos(uTime),sin(uTime),sin(uTime)); // Red
  return mix(color1, color2, t);
}

  void main(){

    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec3 pos = vec3(uv.x * 10.5 , uv.y *10.5 + uTime , uTime);
    float noise = simplex_noise(pos);

    // noise = step(0.5 , noise);
    // vec4 col = vec4(rand(uTime + uv.x + uv.y + 3.) );
   
    vec2 vUv1 = vec2( 1.- vUv.x  ,vUv.y);

    vec4 outColor = 1.- texture2D( background,vUv1 );

    gl_FragColor =  vec4(outColor.rgb,outColor.r);    // gl_FragColor.a =  outColor.a;
    if(globalBloom > 0.5){      
      gl_FragColor = vec4(0.);
    }else{
      // gl_FragColor = vec4(colormap(noise),1.);
      // gl_FragColor.a = 0.;
    }
  }`});let q_=new uv({side:Tt,map:po,transparent:!0});const Br=new Dt(new Oa(1e4,64),q_);Br.geometry.computeBoundingSphere();Br.frustumCulled=!1;Br.scale.set(20,20,20);Br.material.depthWrite=!1;Br.material.depthTest=!1;window.renderer=Qi;const mo={near:{value:100},far:{value:1500}};let Iu=oi.addFolder("fog");Iu.add(mo.near,"value",0,1e3);Iu.add(mo.far,"value",0,1e3);({...mo,pointTexture:new Ir().load("/images/spark1.png"),...Wn});oi.close();it.position.z=500;it.position.y=1;it.position.x=1;ka.listenToKeyEvents(document.body);window.camera=it;let Z_=[],Gi;Ru.onmessage=function({data:a}){console.time("sprite"),Lr=a.particles.particlesData.map(e=>{let{x:t,y:n,z:r}=e.position;return{...e,position:new Y(t,n,r)}}),Cc=a.particles.connections,window.data=a.particles,window.particlesData=Lr,window.connections=Cc,Gi=new X_(a.particles),window.part=Gi,za.add(Gi.object),Z_.push(...Gi.trackers),console.timeEnd("sprite"),vo()};const go=new Wt(75,window.innerWidth/window.innerHeight,.1,1e3);go.position.z=1;go.far=1500;new vv(go);const Fu=new ro,Rc=new at,K_=()=>{let a=it;a.updateMatrixWorld(),a.updateProjectionMatrix();const e=a.matrixWorld.clone().invert();Rc.multiplyMatrices(a.projectionMatrix,e),Fu.setFromProjectionMatrix(Rc)};let yr=[],Nu=[],Oi=6e3;for(let a=0;a<1e4;a++){let e=Is()*Oi-Oi/2,t=Is()*Oi-Oi/2,n=Is()*Oi-Oi/2,r=new Y(e,t,n);r.text=a,Nu.push(r)}for(let a=0;a<250;a++){let e=new so({transparent:!0});e.onBeforeCompile=n=>{n.uniforms={...n.uniforms,...Wn},n.fragmentShader=n.fragmentShader.replace("uniform vec3 diffuse;",`
  uniform vec3 diffuse;
  uniform float globalBloom;
  `),n.fragmentShader=n.fragmentShader.replace("#include <fog_fragment>",`
  #include <fog_fragment>
  float alpha  = texture2D( map ,vMapUv).a;
  if(globalBloom > 0.5 ) {
    gl_FragColor = vec4( outgoingLight, diffuseColor.a * 0.2  );
  } else{
    gl_FragColor = vec4( outgoingLight, diffuseColor.a *0.5 );
  }`)};let t=new Ev(a,{material:e});za.add(t.sprite),yr.push(t)}let J_=new gt().setFromPoints(Nu),$_=new hu(J_,new uu({color:"red",size:50,side:Tt}));const vo=()=>{K_();let n=Lr.map(i=>it.position.distanceTo(i.position)).map((i,o)=>[i,o]).sort((i,o)=>i[0]-o[0]).map(i=>Lr[i[1]]).filter(i=>Fu.containsPoint(i.position));for(let i=0;i<yr.length;i++)yr[i].update();let r=0;for(let i=0;i<yr.length;i++){let o=n[r],s=yr[i];o?(s.sprite.material.color=new Xe().setRGB(o.color.r,o.color.g,o.color.b),s.update(o.position,o.label,"red"),s.updateVisible(!0),s.visible=!0,r++):s.visible=!1}};vo();ka.addEventListener("change",()=>{$_&&vo()});const Ou=()=>{wc.getDelta(),wc.elapsedTime,La.begin(),Gi&&Gi.update(it),Wn.uTime.value+=.1,window.requestAnimationFrame(Ou),Wn.globalBloom.value=1,Nr.render(),Wn.globalBloom.value=0,Or.render(),La.end()};Ou();
