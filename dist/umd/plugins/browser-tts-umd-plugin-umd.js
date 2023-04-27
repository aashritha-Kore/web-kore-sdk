!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BrowserTTSPluginSDK=t():e.BrowserTTSPluginSDK=t()}(self,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{BrowserTTS:()=>a});var o=function(){function e(){}return e.prototype.appendPickerHTMLtoChatWindowFooter=function(e){this.hostInstance.chatEle.find(".kore-chat-footer .footerContainer").append(e)},e.prototype.installTextToSpeechTemplate=function(){var e=this,t=e.hostInstance.$;e.pickerHTML=t(e.getTextToSpeechTemplateString()),e.appendPickerHTMLtoChatWindowFooter(e.pickerHTML),e.bindEvents()},e.prototype.getTextToSpeechTemplateString=function(){return'<div class="sdkFooterIcon ttspeakerDiv ttsOff">         <button class="ttspeaker" title="Talk to speak">             <span class="ttsSpeakerEnable"></span>             <span class="ttsSpeakerDisable"></span>             <span style="display:none;"><audio id="ttspeaker" controls="" autoplay="" name="media"><source src="" type="audio/wav"></audio></span>        </button>     </div> '},e.prototype.bindEvents=function(){var e=this;(0,e.hostInstance.$)(e.pickerHTML).on("click",".ttspeaker",(function(t){e.OnSpeakerButtonClick&&e.OnSpeakerButtonClick()}))},e}();var n,s=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});const a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.name="BrowserTTS",t.speakWithWebAPI=function(e){if(!e)return!1;if("speechSynthesis"in window){window.speechSynthesis.cancel();var t=new SpeechSynthesisUtterance;t.text=e,window.speechSynthesis.speak(t)}else console.warn("KORE:Your browser doesn't support TTS(Speech Synthesiser)")},t}return s(t,e),t.prototype.onHostCreate=function(){var e=this;e.hostInstance.on("viewInit",(function(t){e.onInit()}))},t.prototype.onInit=function(){this.installTextToSpeechTemplate()},t.prototype.OnSpeakerButtonClick=function(){var e=this,t=this,o=t.hostInstance.$,n=t.hostInstance;o(".ttspeakerDiv").hasClass("ttsOff")?(o(".ttspeakerDiv").removeClass("ttsOff"),n.on("afterRenderMessage",(function(o){var n=o.msgData;if("bot_response"===(null==n?void 0:n.type)&&!t.hostInstance.minimized&&!t.hostInstance.historyLoading){if(n.message[0]&&n.message[0].component&&"template"===n.message[0].component.type)e._txtToSpeak="";else try{e._txtToSpeak=n.message[0].component.payload.text?n.message[0].component.payload.text.replace(/\r?\n/g,". ."):"",e._txtToSpeak=t.hostInstance.helpers.checkMarkdowns(e._txtToSpeak),e._txtToSpeak=e._txtToSpeak.replace("___","<hr/>"),e._txtToSpeak=e._txtToSpeak.replace("---","<hr/>")}catch(t){e._txtToSpeak=""}n.message[0].component&&n.message[0].component.payload.speech_hint&&(e._txtToSpeak=n.message[0].component.payload.speech_hint),e._ttsConnection=t.speakWithWebAPI(e._txtToSpeak)}}))):(window.speechSynthesis.pause(),o(".ttspeakerDiv").addClass("ttsOff"))},t}(o);return t})()));