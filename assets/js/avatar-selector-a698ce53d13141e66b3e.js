!function(e){function t(t){for(var a,i,s=t[0],l=t[1],u=t[2],c=0,f=[];c<s.length;c++)i=s[c],r[i]&&f.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(d&&d(t);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={5:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;o.push([432,1,0]),n()}({14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){o.default.config("https://013d6a364fed43cdb0539a61d520597a@sentry.prod.mozaws.net/370").install()};var a,r=n(37),o=(a=r,a&&a.__esModule?a:{default:a})},15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.messages=t.lang=void 0;var a,r=n(16),o=(a=r,a&&a.__esModule?a:{default:a});var i=(navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage).toLowerCase().split(/[_-]+/)[0],s=t.lang=o.default[i]&&i||"en";t.messages=o.default[s]||o.default.en},16:function(e){e.exports={en:{"entry.screen-prefix":"Enter on ","entry.desktop-screen":"Screen","entry.mobile-screen":"Phone","entry.mobile-safari":"Safari","entry.generic-prefix":"Enter with ","entry.generic-medium":"PC VR","entry.generic-subtitle-desktop":"Oculus or SteamVR","entry.gearvr-prefix":"Enter on ","entry.gearvr-medium":"Gear VR","entry.device-prefix-desktop":"Use a ","entry.device-prefix-mobile":"Use a ","entry.device-medium":"Mobile Headset","entry.device-subtitle-desktop":"Standalone or Phone Clip-in","entry.device-subtitle-mobile":"Standalone or Phone Clip-in","entry.device-subtitle-vr":"Phone or PC","entry.cardboard":"Enter on Google Cardboard","entry.daydream-prefix":"Enter on ","entry.daydream-medium":"Daydream","entry.daydream-via-chrome":"Using Google Chrome","entry.invite-others":"invite others","entry.invite-others-nag":"invite others to join","entry.enable-screen-sharing":"Share my desktop","entry.return-to-vr":"Enter in VR","profile.save":"save","profile.display_name.validation_warning":"Alphanumerics and hyphens. At least 3 characters, no more than 32","profile.header":"Your display name:","profile.avatar-selector.loading":"Loading Avatars...","profile.terms_of_use":"Terms of Use","profile.privacy_notice":"Privacy Notice","audio.title":"Test your audio","audio.subtitle-desktop":"Confirm HMD speaker output","audio.subtitle-mobile":"Earphones are recommended","audio.enter-now":"enter now","audio.hmd-mic-warning":"Your HMD mic is not chosen","audio.grant-title":"Grant mic permissions","audio.grant-subtitle":"Mic access needed to be heard by others","audio.granted-title":"Mic permissions granted","audio.granted-subtitle":"You can still mute yourself in-game","audio.granted-next":"next","exit.subtitle.exited":"Your session has ended. Refresh your browser to start a new one.","exit.subtitle.closed":"This room is no longer available.","exit.subtitle.full":"This room is full, please try again later.","exit.subtitle.connect_error":"Unable to connect to this room, please try again later.","exit.subtitle.version_mismatch":"The version you deployed is not available yet. Your browser will refresh in 5 seconds.","autoexit.title":"Auto-ending session in ","autoexit.title_units":" seconds","autoexit.subtitle":"You have started another session.","autoexit.cancel":"CANCEL","home.room_create_options":"options","home.room_create_button":"create a room","home.create_name.validation_warning":"Invalid name, limited to 4 to 64 characters and limited symbols.","home.join_us":"Join the Conversation","home.report_issue":"Report Issues","home.source_link":"source","home.about_link":"about","home.privacy_notice":"Privacy Notice","home.terms_of_use":"Terms of Use","home.get_updates":"Get Updates","home.hero_title":"A new way to get together online.","home.hero_subtitle":"Laugh, play, get stuff done, or just hang out.","home.made_with_love":"made with 🦆 by ","home.environment_author_by":" by ","home.dialog.close":"CLOSE","home.have_entry_code":"have a link code?","mailing_list.privacy_label":"I'm okay with Mozilla handling my info as explained in","mailing_list.privacy_link":"this Privacy Notice","link.in_your_browser":"In your headset's browser, go to:","link.enter_code":"Then, enter this link code:","link.do_not_close":"Keep this dialog open to use this code.","link.link_page_header":"Enter your code:","link.dont_have_a_code":"Don't have a code?","link.create_a_room":"Create a Room","link.try_again":"We couldn't find that code. Please try again.","help.report_issue":"Report an Issue"}}},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SCHEMA=void 0;var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(79),s=n(82),l=(a=s,a&&a.__esModule?a:{default:a}),u=n(43),d=n(30);var c="___hubs_store",f=Symbol(),m=new i.Validator,p=t.SCHEMA={id:"/HubsStore",definitions:{profile:{type:"object",additionalProperties:!1,properties:{displayName:{type:"string",pattern:"^[A-Za-z0-9-]{3,32}$"},avatarId:{type:"string"}}},activity:{type:"object",additionalProperties:!1,properties:{hasFoundFreeze:{type:"boolean"},hasChangedName:{type:"boolean"},lastEnteredAt:{type:"string"}}},settings:{type:"object",additionalProperties:!1,properties:{lastUsedMicDeviceId:{type:"string"}}}},type:"object",properties:{profile:{$ref:"#/definitions/profile"},activity:{$ref:"#/definitions/activity"},settings:{$ref:"#/definitions/settings"}},additionalProperties:!1},h=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.init=function(){e.update({activity:{},settings:{},profile:r({},(0,d.generateDefaultProfile)(),e.state.profile||{})}),e.state.activity.hasChangedName||e.update({profile:{displayName:(0,d.generateRandomName)()}})},null===localStorage.getItem(c)&&localStorage.setItem(c,JSON.stringify({})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"update",value:function(e){var t=(0,l.default)(this.state,e),n=m.validate(t,p).valid;if(!n)throw new Error("Write of "+JSON.stringify(t)+" to store failed schema validation.");return localStorage.setItem(c,JSON.stringify(t)),delete this[f],this.dispatchEvent(new CustomEvent("statechanged")),t}},{key:"state",get:function(){return this.hasOwnProperty(f)||(this[f]=JSON.parse(localStorage.getItem(c))),this[f]}}]),t}(u.EventTarget);t.default=h},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.avatars=[{id:"botdefault",model:"https://asset-bundles-prod.reticulum.io/bots/BotDefault_Avatar-9f71f8ff22.gltf"},{id:"botbobo",model:"https://asset-bundles-prod.reticulum.io/bots/BotBobo_Avatar-f9740a010b.gltf"},{id:"botdom",model:"https://asset-bundles-prod.reticulum.io/bots/BotDom_Avatar-0c48bf15a5.gltf"},{id:"botgreg",model:"https://asset-bundles-prod.reticulum.io/bots/BotGreg_Avatar-98d39797bb.gltf"},{id:"botguest",model:"https://asset-bundles-prod.reticulum.io/bots/BotGuest_Avatar-78cd857332.gltf"},{id:"botjim",model:"https://asset-bundles-prod.reticulum.io/bots/BotJim_Avatar-d28005a687.gltf"},{id:"botkev",model:"https://asset-bundles-prod.reticulum.io/bots/BotKev_Avatar-a95787bb51.gltf"},{id:"botpinky",model:"https://asset-bundles-prod.reticulum.io/bots/BotPinky_Avatar-b0b93f8675.gltf"},{id:"botrobert",model:"https://asset-bundles-prod.reticulum.io/bots/BotRobert_Avatar-e9554880f3.gltf"},{id:"botwoody",model:"https://asset-bundles-prod.reticulum.io/bots/BotWoody_Avatar-0140485a23.gltf"}]},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.avatarIds=void 0,t.generateRandomName=function(){return o(r)+"-"+Math.floor(1e4+1e4*Math.random())},t.generateDefaultProfile=function(){return{avatarId:o(i)}};var a=n(22),r=["Baers-Pochard","Baikal-Teal","Barrows-Goldeneye","Blue-Billed","Blue-Duck","Blue-Winged","Brown-Teal","Bufflehead","Canvasback","Cape-Shoveler","Chestnut-Teal","Chiloe-Wigeon","Cinnamon-Teal","Comb-Duck","Common-Eider","Common-Goldeneye","Common-Merganser","Common-Pochard","Common-Scoter","Common-Shelduck","Cotton-Pygmy","Crested-Duck","Crested-Shelduck","Eatons-Pintail","Falcated","Ferruginous","Freckled-Duck","Gadwall","Garganey","Greater-Scaup","Green-Pygmy","Grey-Teal","Hardhead","Harlequin","Hartlaubs","Hooded-Merganser","Hottentot-Teal","Kelp-Goose","King-Eider","Lake-Duck","Laysan-Duck","Lesser-Scaup","Long-Tailed","Maccoa-Duck","Mallard","Mandarin","Marbled-Teal","Mellers-Duck","Merganser","Northern-Pintail","Orinoco-Goose","Paradise-Shelduck","Plumed-Whistler","Puna-Teal","Pygmy-Goose","Radjah-Shelduck","Red-Billed","Red-Crested","Red-Shoveler","Ring-Necked","Ringed-Teal","Rosy-Billed","Ruddy-Shelduck","Salvadoris-Teal","Scaly-Sided","Shelduck","Shoveler","Silver-Teal","Smew","Spectacled-Eider","Spot-Billed","Spotted-Whistler","Steamerduck","Stellers-Eider","Sunda-Teal","Surf-Scoter","Tufted-Duck","Velvet-Scoter","Wandering-Whistler","Whistling-duck","White-Backed","White-Cheeked","White-Winged","Wigeon","Wood-Duck","Yellow-Billed"];function o(e){return e[Math.floor(Math.random()*e.length)]}var i=t.avatarIds=a.avatars.map(function(e){return e.id})},34:function(e,t){},38:function(e,t){},39:function(e,t){},42:function(e,t,n){"use strict";var a,r,o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=(a=x(function*(){var e=[c.default,m.default,h.default,y.default,b.default,E.default],t=yield(new THREE.CubeTextureLoader).load(e);return t.format=THREE.RGBFormat,t}),function(){return a.apply(this,arguments)}),s=(r=x(function*(e,t,n,a){var r=e,s=void 0;(t.includes("model/gltf+zip")||t.includes("application/x-zip-compressed"))&&(s=yield function(e){return new Promise(function(t,n){var a=new u.default;a.onmessage=function(e){var a=o(e.data,2),r=a[0],i=a[1];(r?t:n)(i)},a.postMessage(e)})}(r),r=s["scene.gtlf"]);var l=new THREE.GLTFLoader;l.setLazy(!0);var d=yield new Promise(function(e,t){return l.load(r,e,a,t)}),c=d.parser,f=c.json.materials;if(f)for(var m=0;m<f.length;m++){var p=f[m];if(p.extensions&&p.extensions.MOZ_alt_materials&&void 0!==p.extensions.MOZ_alt_materials[n]){var h=p.extensions.MOZ_alt_materials[n];f[m]=f[h]}}_||(_=i());var v=yield new Promise(function(e,t){return c.parse(function(t,n,a,r,o){e({scene:t,scenes:n,cameras:a,animations:r,json:o})},function(e){t(e)})}),y=yield _;return v.scene.traverse(function(e){e.material&&"MeshStandardMaterial"===e.material.type&&(e.material.envMap=y,e.material.needsUpdate=!0)}),s&&Object.keys(s).forEach(URL.revokeObjectURL),v}),function(e,t,n,a){return r.apply(this,arguments)}),l=n(113),u=M(l),d=n(69),c=M(d),f=n(70),m=M(f),p=n(71),h=M(p),v=n(72),y=M(v),g=n(73),b=M(g),A=n(74),E=M(A);function M(e){return e&&e.__esModule?e:{default:e}}function x(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function a(r,o){try{var i=t[r](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})}}var w={},_=null;function P(e,t,n){if(!AFRAME.components[t])throw new Error('Inflator failed. "'+t+'" component does not exist.');if(AFRAME.components[t].multiple&&Array.isArray(n))for(var a=0;a<n.length;a++)e.setAttribute(t+"__"+a,n[a]);else e.setAttribute(t,n)}AFRAME.GLTFModelPlus={components:{},registerComponent:function(e,t,n){n=n||P,AFRAME.GLTFModelPlus.components[e]={inflator:n,componentName:t}}};function C(e,t,n){var a=e.querySelectorAll("."+t),r=!0,o=!1,i=void 0;try{for(var s,l=a[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){var u=s.value,d=n.cloneNode(!0),c=!0,f=!1,m=void 0;try{for(var p,h=d.attributes[Symbol.iterator]();!(c=(p=h.next()).done);c=!0){var v=p.value,y=v.name,g=v.value;u.setAttribute(y,g)}}catch(e){f=!0,m=e}finally{try{!c&&h.return&&h.return()}finally{if(f)throw m}}for(;d.children.length>0;)u.appendChild(d.children[0])}}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}}AFRAME.registerComponent("gltf-model-plus",{schema:{src:{type:"string"},contentType:{type:"string"},inflate:{default:!1}},init:function(){this.preferredTechnique=window.APP&&"low"===window.APP.quality?"KHR_materials_unlit":"pbrMetallicRoughness",this.loadTemplates()},update:function(){this.applySrc(this.data.src,this.data.contentType)},loadTemplates:function(){var e=this;this.templates={},this.el.querySelectorAll(":scope > template").forEach(function(t){var n=document.importNode(t.firstElementChild||t.content.firstElementChild,!0);e.templates[t.getAttribute("data-name")]=n})},applySrc:function(){var e=x(function*(e,t){try{if(e&&"#"===e.charAt(0)){var n=document.getElementById(e.substring(1));e=n.getAttribute("src")}if(e===this.lastSrc)return;if(this.lastSrc=e,!e)return void(this.inflatedEl&&(console.warn("gltf-model-plus set to an empty source, unloading inflated model."),this.removeInflatedEl()));w[e]||(w[e]=s(e,t,this.preferredTechnique));var a=function(e){var t={};e.scene.traverse(function(e){e.name||(e.name=e.uuid),e.isSkinnedMesh&&(t[e.name]=e)});var n={animations:e.animations,scene:e.scene.clone(!0)},a={},r={};for(var o in n.scene.traverse(function(e){e.isBone&&(a[e.name]=e),e.isSkinnedMesh&&(r[e.name]=e)}),t){for(var i=t[o],s=i.skeleton,l=r[o],u=[],d=0;d<s.bones.length;++d){var c=a[s.bones[d].name];u.push(c)}l.bind(new THREE.Skeleton(u,s.boneInverses),l.matrixWorld),l.material=i.material.clone()}return n}(yield w[e]);if(e!=this.lastSrc)return;this.removeInflatedEl(),this.model=a.scene||a.scenes[0],this.model.animations=a.animations;var r=this.model;if(this.data.inflate&&(this.inflatedEl=function e(t,n,a){var r=[],o=t.children.slice(0),i=!0,s=!1,l=void 0;try{for(var u,d=o[Symbol.iterator]();!(i=(u=d.next()).done);i=!0){var c=u.value,f=e(c,n);f&&r.push(f)}}catch(e){s=!0,l=e}finally{try{!i&&d.return&&d.return()}finally{if(s)throw l}}var m=t.userData.components||t.name in n;if(!m&&!r.length&&!a)return null;var p=document.createElement("a-entity");p.append.apply(p,r);var h=(t.name||t.uuid).replace(/[^\w-]/g,"");p.classList.add(h),"YXZ"!==t.rotation.order&&t.rotation.setFromQuaternion(t.quaternion,"YXZ"),p.setAttribute("position",{x:t.position.x,y:t.position.y,z:t.position.z}),p.setAttribute("rotation",{x:t.rotation.x*THREE.Math.RAD2DEG,y:t.rotation.y*THREE.Math.RAD2DEG,z:t.rotation.z*THREE.Math.RAD2DEG}),p.setAttribute("scale",{x:t.scale.x,y:t.scale.y,z:t.scale.z}),t.matrixAutoUpdate=!1,t.matrix.identity(),p.setObject3D(t.type.toLowerCase(),t),t.userData.components&&"nav-mesh"in t.userData.components&&p.setObject3D("mesh",t),p.object3D.name=t.name,t.animations&&(t.parent.animations=t.animations);var v=t.userData.components;if(v)for(var y in v)if(v.hasOwnProperty(y)&&AFRAME.GLTFModelPlus.components.hasOwnProperty(y)){var g=AFRAME.GLTFModelPlus.components[y],b=g.componentName,A=g.inflator;A(p,b,v[y])}return p}(this.model,this.templates,!0))){if(this.el.appendChild(this.inflatedEl),r=this.inflatedEl.object3D,yield new Promise(function(e){setTimeout(e,0)}),e!=this.lastSrc)return;for(var o in this.templates)C(this.el,o,this.templates[o])}this.el.setObject3D("mesh",r),this.el.emit("model-loaded",{format:"gltf",model:this.model})}catch(t){delete w[e],console.error("Failed to load glTF model",t,this),this.el.emit("model-error",{format:"gltf",src:e})}});return function(t,n){return e.apply(this,arguments)}}(),removeInflatedEl:function(){this.inflatedEl&&(this.inflatedEl.parentNode.removeChild(this.inflatedEl),delete this.inflatedEl)}})},432:function(e,t,n){"use strict";n(41);var a=n(36),r=g(a),o=n(1),i=g(o),s=n(5),l=n(40),u=g(l),d=n(15),c=n(60);n(479),n(61),n(67),n(66),n(68),n(76),n(87);var f=n(22),m=n(14),p=g(m),h=n(88),v=n(433),y=g(v);function g(e){return e&&e.__esModule?e:{default:e}}function b(e){return new URLSearchParams(location.hash.replace(/^#/,"?")).get(e)}function A(e){window.parent.postMessage({avatarId:e},location.origin)}function E(){var e=b("avatar_id");r.default.render(i.default.createElement(s.IntlProvider,{locale:d.lang,messages:d.messages},i.default.createElement(y.default,{avatars:f.avatars,avatarId:e,onChange:A})),document.getElementById("selector-root"))}(0,c.patchWebGLRenderingContext)(),(0,s.addLocaleData)([].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(u.default))),(0,p.default)(),window.APP=new h.App,window.APP.quality=b("quality")||AFRAME.utils.device.isMobile()?"low":"high",window.addEventListener("hashchange",E),document.addEventListener("DOMContentLoaded",E)},433:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(1),i=m(o),s=n(0),l=m(s),u=n(5),d=n(19),c=n(100),f=n(101);function m(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return h.call(n),n.state.initialAvatarIndex=t.getAvatarIndex(e),n.state.avatarIndices=[t.nextAvatarIndex(e),n.state.initialAvatarIndex,t.previousAvatarIndex(e)],n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var n=this;this.setState(function(a){var r=e.avatars.length;if(a.avatarIndices.length!==r){var o=r-1,i=n.getAvatarIndex(),s=t.getAvatarIndex(e),l=Array.from(a.avatarIndices),u=i-s<0,d=-1,c=!1;0===s?i===o?(d=1,c=0!==l.indexOf(o)):(d=-1,c=0!==l.indexOf(1)):s===o?0===i?(d=-1,c=0===l.indexOf(0)):(d=1,c=0!==l.indexOf(o-1)):(d=u?1:-1,c=u);var f=t.getAvatarIndex(e,d);if(!l.includes(f))return c?l.push(f):l.unshift(f),{avatarIndices:l}}})}},{key:"componentDidUpdate",value:function(e){if(this.props.avatarId!==e.avatarId){var t=this.animation.parentNode.getAttribute("rotation"),n=t.y,a=this.animation.getAttribute("to").split(" "),r=a[1],o=360/this.props.avatars.length,i=Math.abs(r-n)>3*o,s=n;i&&(s=n<r?n+360:n-360),this.animation.setAttribute("from",t.x+" "+s+" "+t.z),this.animation.stop(),this.animation.handleMixinUpdate(),this.animation.start()}}},{key:"componentDidMount",value:function(){var e=this;this.scene.addEventListener("loaded",function(){e.scene.setAttribute("renderer",{gammaOutput:!0,sortObjects:!0,physicallyCorrectLights:!0}),e.scene.setAttribute("gamma-factor","")})}},{key:"render",value:function(){var e=this,t=this.props.avatars.map(function(e){return i.default.createElement("a-asset-item",{id:e.id,key:e.id,"response-type":"arraybuffer",src:""+e.model})}),n=this.state.avatarIndices.map(function(t){return[e.props.avatars[t],t]}),r=n.map(function(t){var n=a(t,2),r=n[0],o=n[1];return i.default.createElement("a-entity",{key:r.id,rotation:"0 "+360*-o/e.props.avatars.length+" 0"},i.default.createElement("a-entity",{position:"0 0 5","gltf-model-plus":"src: #"+r.id,inflate:"true"},i.default.createElement("template",{"data-selector":".RootScene"},i.default.createElement("a-entity",{"animation-mixer":""})),i.default.createElement("a-animation",{attribute:"rotation",dur:"12000",to:"0 "+(e.getAvatarIndex()===o?360:0)+" 0",repeat:"indefinite"})))}),o=function(t){return(360*t/e.props.avatars.length+180)%360},s=o(this.state.initialAvatarIndex),l=o(this.getAvatarIndex());return i.default.createElement("div",{className:"avatar-selector"},i.default.createElement("a-scene",{"vr-mode-ui":"enabled: false",ref:function(t){return e.scene=t}},i.default.createElement("a-assets",null,t,i.default.createElement("a-asset-item",{id:"meeting-space1-mesh","response-type":"arraybuffer",src:"https://asset-bundles-prod.reticulum.io/rooms/meetingroom/MeetingSpace1_mesh-d48250ebc6.gltf"})),i.default.createElement("a-entity",{rotation:"0 "+s+" 0"},i.default.createElement("a-animation",{ref:function(t){return e.animation=t},attribute:"rotation",dur:"2000",easing:"ease-out",to:"0 "+l+" 0"}),r),i.default.createElement("a-entity",{position:"0 1.5 -5.6",rotation:"-10 180 0"},i.default.createElement("a-entity",{camera:""})),i.default.createElement("a-entity",{"hide-when-quality":"low",light:"type: directional; color: #F9FFCE; intensity: 0.6",position:"0 5 -15"}),i.default.createElement("a-entity",{"hide-when-quality":"low",light:"type: ambient; color: #FFF"}),i.default.createElement("a-entity",{id:"meeting-space","gltf-model-plus":"src: #meeting-space1-mesh",position:"0 0 0"})),i.default.createElement("button",{className:"avatar-selector__previous-button",onClick:this.emitChangeToPrevious},i.default.createElement(d.FontAwesomeIcon,{icon:c.faAngleLeft})),i.default.createElement("button",{className:"avatar-selector__next-button",onClick:this.emitChangeToNext},i.default.createElement(d.FontAwesomeIcon,{icon:f.faAngleRight})))}}]),t}(o.Component);p.propTypes={avatars:l.default.array,avatarId:l.default.string,onChange:l.default.func},p.getAvatarIndex=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.avatars.findIndex(function(t){return t.id===e.avatarId}),a=e.avatars.length;return((n+t)%a+a)%a},p.nextAvatarIndex=function(e){return p.getAvatarIndex(e,-1)},p.previousAvatarIndex=function(e){return p.getAvatarIndex(e,1)};var h=function(){var e=this;this.state={initialAvatarIndex:0,avatarIndices:[]},this.getAvatarIndex=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return p.getAvatarIndex(e.props,t)},this.nextAvatarIndex=function(){return e.getAvatarIndex(-1)},this.previousAvatarIndex=function(){return e.getAvatarIndex(1)},this.emitChangeToNext=function(){var t=e.props.avatars[e.nextAvatarIndex()].id;e.props.onChange(t)},this.emitChangeToPrevious=function(){var t=e.props.avatars[e.previousAvatarIndex()].id;e.props.onChange(t)}};t.default=(0,u.injectIntl)(p)},479:function(e,t){},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.patchWebGLRenderingContext=function(){if(/Android.+Firefox/.test(navigator.userAgent)){var e=WebGLRenderingContext.prototype.getExtension,t=function(){var e=new a.WebGLRenderer,t=new a.Scene,n=new Float32Array(16),r=new a.DataTexture(n,2,2,a.RGBAFormat,a.FloatType),o=new a.Mesh(new a.PlaneBufferGeometry(1,1),new a.MeshBasicMaterial({map:r}));o.material.map.needsUpdate=!0,t.add(o),e.render(t,new a.Camera);var i=0===e.context.getError();return e.dispose(),i}();WebGLRenderingContext.prototype.getExtension=function(n){return"OES_texture_float"!==n||t?e.call(this,n):null}}};var a=AFRAME.THREE},66:function(e,t,n){"use strict";AFRAME.registerComponent("networked-audio-analyser",{init:function(){var e,t=(e=function*(){var e=this;this.volume=0,this.prevVolume=0,this.smoothing=.3,this.threshold=.01,this.el.addEventListener("sound-source-set",function(t){var n=THREE.AudioContext.getContext();e.analyser=n.createAnalyser(),e.analyser.fftSize=32,e.levels=new Uint8Array(e.analyser.frequencyBinCount),t.detail.soundSource.connect(e.analyser)})},function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function a(r,o){try{var i=t[r](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})});return function(){return t.apply(this,arguments)}}(),tick:function(){if(this.analyser){this.analyser.getByteTimeDomainData(this.levels);for(var e=0,t=0;t<this.levels.length;t++){var n=(this.levels[t]-128)/128;e+=n*n}var a=Math.sqrt(e/this.levels.length);a<this.threshold&&(a=0),this.volume=this.smoothing*a+(1-this.smoothing)*this.prevVolume,this.prevVolume=this.volume}}}),AFRAME.registerComponent("scale-audio-feedback",{schema:{minScale:{default:1},maxScale:{default:2}},tick:function(){if(this.el.object3D.visible){var e=this.data,t=e.minScale,n=e.maxScale,a=this.el.components["networked-audio-analyser"];if(a){var r=Math.min(n,t+(n-t)*a.volume*8);this.el.object3D.scale.setScalar(r)}}}})},67:function(e,t,n){"use strict";AFRAME.registerComponent("animation-mixer",{init:function(){this.mixer=null;var e=this.el.object3DMap,t=e.mesh||e.scene;t?this.setAnimationMixer(t):(this.onModelLoaded=this.onModelLoaded.bind(this),this.el.addEventListener("model-loaded",this.onModelLoaded))},onModelLoaded:function(e){var t=e.detail.model;this.setAnimationMixer(t),this.el.removeEventListener(this.onModelLoaded)},setAnimationMixer:function(e){this.mixer=new THREE.AnimationMixer(e)},tick:function(e,t){this.mixer&&this.mixer.update(t/1e3)},destroy:function(){this.el.removeEventListener(this.onModelLoaded)}})},68:function(e,t,n){"use strict";AFRAME.registerComponent("loop-animation",{dependencies:["animation-mixer"],schema:{clip:{type:"string",required:!0}},init:function(){var e=this.el.object3DMap;this.model=e.mesh||e.scene,this.model?this.mixer=this.el.components["animation-mixer"].mixer:(this.onModelLoaded=this.onModelLoaded.bind(this),this.el.addEventListener("model-loaded",this.onModelLoaded))},onModelLoaded:function(e){var t=this.el.components["animation-mixer"];this.model=e.detail.model,this.mixer=t.mixer,this.updateClipState(!0),this.el.removeEventListener(this.onModelLoaded)},update:function(e){e.clip!==this.data.clip&&this.model&&this.updateClipState(!0)},updateClipState:function(e){var t=this.model,n=this.data.clip,a=!0,r=!1,o=void 0;try{for(var i,s=this.model.animations[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var l=i.value;if(l.name===n){var u=this.mixer.clipAction(l,t.parent);e?(u.enabled=!0,u.setLoop(THREE.LoopRepeat,1/0).play()):u.stop();break}}}catch(e){r=!0,o=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw o}}},destroy:function(){this.updateClipState(!1),this.el.removeEventListener(this.onModelLoaded)}})},69:function(e,t,n){e.exports=n.p+"assets/images/cubemap/posx-d235fb97df77b607be04b84125f40e7c.jpg"},70:function(e,t,n){e.exports=n.p+"assets/images/cubemap/negx-35034574e114423babdea92b6a2eb97a.jpg"},71:function(e,t,n){e.exports=n.p+"assets/images/cubemap/posy-d0c4e1e7979d75923d4d8b49c191bc6e.jpg"},72:function(e,t,n){e.exports=n.p+"assets/images/cubemap/negy-35808d21d1d17ac1b84d3184e365093b.jpg"},73:function(e,t,n){e.exports=n.p+"assets/images/cubemap/posz-de29aa8396196e4b040cd5305e351dbe.jpg"},74:function(e,t,n){e.exports=n.p+"assets/images/cubemap/negz-d73d18a8b7994524dc39a6ea3fcf43fc.jpg"},76:function(e,t,n){"use strict";AFRAME.registerComponent("gamma-factor",{schema:{gammaFactor:{type:"number",default:2.2}},init:function(){var e=this.el;e.isScene||console.warn("gamma-factor component can only be applied to <a-scene>")},update:function(e){var t=this.data,n=this.el,a=n.renderer,r=!1;t.gammaFactor!==e.gammaFactor&&(a.gammaFactor=t.gammaFactor,r=!0),r&&0!==n.time&&n.object3D.traverse(function(e){e.isMesh&&(Array.isArray(e.material)?e.material.forEach(function(e){e.needsUpdate=!0}):e.material.needsUpdate=!0)})}})},87:function(e,t,n){"use strict";var a,r;n(42),AFRAME.GLTFModelPlus.registerComponent("duck","duck"),AFRAME.GLTFModelPlus.registerComponent("quack","quack"),AFRAME.GLTFModelPlus.registerComponent("sound","sound"),AFRAME.GLTFModelPlus.registerComponent("collision-filter","collision-filter"),AFRAME.GLTFModelPlus.registerComponent("css-class","css-class"),AFRAME.GLTFModelPlus.registerComponent("scene-shadow","scene-shadow"),AFRAME.GLTFModelPlus.registerComponent("super-spawner","super-spawner"),AFRAME.GLTFModelPlus.registerComponent("gltf-model-plus","gltf-model-plus"),AFRAME.GLTFModelPlus.registerComponent("media-loader","media-loader"),AFRAME.GLTFModelPlus.registerComponent("body","body"),AFRAME.GLTFModelPlus.registerComponent("hide-when-quality","hide-when-quality"),AFRAME.GLTFModelPlus.registerComponent("light","light"),AFRAME.GLTFModelPlus.registerComponent("ambient-light","ambient-light"),AFRAME.GLTFModelPlus.registerComponent("directional-light","directional-light"),AFRAME.GLTFModelPlus.registerComponent("hemisphere-light","hemisphere-light"),AFRAME.GLTFModelPlus.registerComponent("point-light","point-light"),AFRAME.GLTFModelPlus.registerComponent("spot-light","spot-light"),AFRAME.GLTFModelPlus.registerComponent("skybox","skybox"),AFRAME.GLTFModelPlus.registerComponent("layers","layers"),AFRAME.GLTFModelPlus.registerComponent("shadow","shadow"),AFRAME.GLTFModelPlus.registerComponent("water","water"),AFRAME.GLTFModelPlus.registerComponent("scale-audio-feedback","scale-audio-feedback"),AFRAME.GLTFModelPlus.registerComponent("animation-mixer","animation-mixer"),AFRAME.GLTFModelPlus.registerComponent("loop-animation","loop-animation"),AFRAME.GLTFModelPlus.registerComponent("shape","shape"),AFRAME.GLTFModelPlus.registerComponent("box-collider","shape",(a=new THREE.Euler,r=new THREE.Quaternion,function(e,t,n){var o=n.scale,i=n.rotation;a.set(i.x,i.y,i.z),r.setFromEuler(a),e.setAttribute(t,{shape:"box",offset:n.position,halfExtents:{x:o.x/2,y:o.y/2,z:o.z/2},orientation:r})})),AFRAME.GLTFModelPlus.registerComponent("visible","visible"),AFRAME.GLTFModelPlus.registerComponent("spawn-point","spawn-point"),AFRAME.GLTFModelPlus.registerComponent("hoverable","hoverable"),AFRAME.GLTFModelPlus.registerComponent("sticky-zone","sticky-zone"),AFRAME.GLTFModelPlus.registerComponent("nav-mesh","nav-mesh",function(e,t,n){var a=AFRAME.scenes[0].systems.nav,r=n.zone||"character",o=!1;e.object3D.traverse(function(e){e.isMesh&&!o&&(o=!0,a.loadMesh(e,r))})})},88:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(20),i=(a=o,a&&a.__esModule?a:{default:a});t.App=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scene=null,this.quality="low",this.store=new i.default}return r(e,[{key:"setQuality",value:function(e){return this.quality!==e&&(this.quality=e,this.scene&&this.scene.dispatchEvent(new CustomEvent("quality-changed",{detail:e})),!0)}}]),e}()}});
//# sourceMappingURL=avatar-selector-a698ce53d13141e66b3e.js.map