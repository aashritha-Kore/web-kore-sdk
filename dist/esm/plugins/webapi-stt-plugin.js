var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{C:()=>c});var o=function(){function e(){}return e.prototype.appendPickerHTMLtoChatWindowFooter=function(e){var t=this.hostInstance,o=t.chatEle;"v2"==t.config.UI.version&&o.find(".kore-chat-footer .footerContainer").append(e)},e.prototype.installSpeechToTextTemplate=function(){var e=this,t=e.hostInstance.$;"v2"==e.hostInstance.config.UI.version&&(e.pickerHTML=t(e.getSpeechToTextTemplateString()),e.appendPickerHTMLtoChatWindowFooter(e.pickerHTML),e.bindEvents()),"v3"==e.hostInstance.config.UI.version&&e.bindEventsV3()},e.prototype.getSpeechToTextTemplateString=function(){return'<div class="sdkFooterIcon microphoneBtn">         <button class="notRecordingMicrophone" title="Microphone On">             <i class="microphone"></i>         </button>         <button class="recordingMicrophone" title="Microphone Off" >             <i class="microphone"></i>             <span class="recordingGif"></span>         </button>         <div id="textFromServer"></div>     </div>'},e.prototype.bindEvents=function(){var e=this,t=e.hostInstance.$;t(e.pickerHTML).on("click",".notRecordingMicrophone",(function(t){e.onRecordButtonClick&&e.onRecordButtonClick()})),t(e.pickerHTML).on("click",".recordingMicrophone",(function(t){e.stop(),setTimeout((function(){e.setCaretEnd(document.getElementsByClassName("chatInputBox"))}),350)}))},e.prototype.bindEventsV3=function(){var e=this,t=this,o=t.hostInstance.chatEle;o.querySelector(".voice-compose-btn").addEventListener("click",(function(){t.onRecordButtonClick&&t.onRecordButtonClick(),o.querySelector(".compose-voice-text").style.display="none",o.querySelector(".compose-voice-text-recording").style.display="block",o.querySelectorAll(".action-btn")[0].style.display="none",e.hostInstance.config.branding.footer.buttons.attachment.show&&(o.querySelectorAll(".action-btn")[1].style.display="none"),o.querySelector(".key-board").style.display="none"})),o.querySelector(".voice-compose-btn-recording").addEventListener("click",(function(){""!==o.querySelector(".voice-msg-bubble").textContent.trim()&&(t.stop(),setTimeout((function(){t.setCaretEnd(o.getElementsByClassName("voice-msg-bubble"))}),350),o.querySelector(".compose-voice-text-recording").style.display="none",o.querySelector(".compose-voice-text-end").style.display="block",o.querySelector(".voice-msg-bubble").classList.add("speak-done-bg"))})),o.querySelector(".voice-compose-btn-end").addEventListener("click",(function(){""!==o.querySelector(".voice-msg-bubble").textContent.trim()&&(o.querySelector(".voice-msg-bubble").classList.remove("speak-done-bg"),t.hostInstance.sendMessageToBot(o.querySelector(".voice-msg-bubble").textContent),o.querySelector(".voice-msg-bubble").textContent="",o.querySelector(".voice-speak-msg-info").style.display="none",o.querySelector(".compose-voice-text-end").style.display="none",o.querySelector(".compose-voice-text").style.display="block",o.querySelectorAll(".action-btn")[0].style.display="block",e.hostInstance.config.branding.footer.buttons.attachment.show&&(o.querySelectorAll(".action-btn")[1].style.display="flex"),o.querySelector(".key-board").style.display="block")})),o.querySelector(".cancel-sepak").addEventListener("click",(function(){t.stop(),o.querySelector(".voice-msg-bubble").textContent="",o.querySelector(".voice-speak-msg-info").style.display="none",o.querySelector(".compose-voice-text-recording").style.display="none",o.querySelector(".compose-voice-text").style.display="block",o.querySelectorAll(".action-btn")[0].style.display="block",e.hostInstance.config.branding.footer.buttons.attachment.show&&(o.querySelectorAll(".action-btn")[1].style.display="flex"),o.querySelector(".key-board").style.display="block"})),o.querySelector(".remove-voice-text").addEventListener("click",(function(){o.querySelector(".voice-msg-bubble").textContent="",o.querySelector(".voice-speak-msg-info").style.display="none",t.recognizing?(t.stop(),o.querySelector(".compose-voice-text-recording").style.display="none",o.querySelector(".compose-voice-text").style.display="block",o.querySelectorAll(".action-btn")[0].style.display="block",e.hostInstance.config.branding.footer.buttons.attachment.show&&(o.querySelectorAll(".action-btn")[1].style.display="flex"),o.querySelector(".key-board").style.display="block"):(o.querySelector(".voice-msg-bubble").classList.remove("speak-done-bg"),o.querySelector(".compose-voice-text-end").style.display="none",o.querySelector(".compose-voice-text-recording").style.display="block",t.onRecordButtonClick())}))},e}();var n,i=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});const c=function(e){function t(t){var o=e.call(this)||this;return o.name="WebKitSTT",o.two_line=/\n\n/g,o.one_line=/\n/g,o.config=t,o}return i(t,e),t.prototype.onHostCreate=function(){var e=this;e.hostInstance.on("viewInit",(function(t){e.onInit()}))},t.prototype.onInit=function(){this.installSpeechToTextTemplate()},t.prototype.onRecordButtonClick=function(){this.initializeWebKitSpeechRecognition(),this.startWebKitRecognization()},t.prototype.initializeWebKitSpeechRecognition=function(){var e=this,t=e.hostInstance.$;"webkitSpeechRecognition"in window&&e.isChrome()&&(this.recognition=new window.webkitSpeechRecognition,this.final_transcript="",this.recognition.continuous=!0,this.recognition.interimResults=!0,this.recognition.onstart=function(){this.prevStr="",e.recognizing=!0,"v2"==e.hostInstance.config.UI.version?(t(".recordingMicrophone").css("display","block"),t(".notRecordingMicrophone").css("display","none")):(e.hostInstance.chatEle.querySelector(".compose-voice-text").style.display="none",e.hostInstance.chatEle.querySelector(".compose-voice-text-recording").style.display="block")},this.recognition.onerror=function(o){console.log(o.error),"v2"==e.hostInstance.config.UI.version&&(t(".recordingMicrophone").css("display","none"),t(".notRecordingMicrophone").css("display","block"))},this.recognition.onend=function(){e.recognizing=!1,"v2"==e.hostInstance.config.UI.version&&(t(".recordingMicrophone").trigger("click"),t(".recordingMicrophone").css("display","none"),t(".notRecordingMicrophone").css("display","block"))},this.recognition.onresult=function(o){this.final_transcript="";var n="";console.log("result: ",o.results);for(var i=o.resultIndex;i<o.results.length;++i)o.results[i].isFinal?this.final_transcript+=o.results[i][0].transcript:n+=o.results[i][0].transcript;this.final_transcript=e.capitalize(this.final_transcript),this.final_transcript=e.linebreak(this.final_transcript),n=e.linebreak(n),""!==this.final_transcript&&(this.prevStr+=this.final_transcript),e.recognizing&&("v2"==e.hostInstance.config.UI.version?(t(".chatInputBox").html(this.prevStr+""+n),t(".sendButton").removeClass("disabled")):(e.hostInstance.chatEle.querySelector(".voice-speak-msg-info").style.display="block",e.hostInstance.chatEle.querySelector(".voice-msg-bubble").textContent=this.prevStr+""+n)),setTimeout((function(){"v2"==e.hostInstance.config.UI.version?(e.setCaretEnd(document.getElementsByClassName("chatInputBox")),document.getElementsByClassName("chatInputBox")[0].scrollTop=document.getElementsByClassName("chatInputBox")[0].scrollHeight):e.setCaretEnd(e.hostInstance.chatEle.getElementsByClassName("voice-msg-bubble"))}),350)})},t.prototype.startWebKitRecognization=function(){this.recognizing?this.recognition.stop():(this.final_transcript="",this.recognition.lang=this.config.lang||"en-US",this.recognition.start())},t.prototype.isChrome=function(){var e=window.chrome,t=window.navigator,o=t.vendor,n=t.userAgent.indexOf("OPR")>-1,i=t.userAgent.indexOf("Edge")>-1;return!!t.userAgent.match("CriOS")||null!=e&&"Google Inc."===o&&!1===n&&!1===i},t.prototype.linebreak=function(e){return e.replace(this.two_line,"<p></p>").replace(this.one_line,"<br>")},t.prototype.capitalize=function(e){return e.replace(e.substr(0,1),(function(e){return e.toUpperCase()}))},t.prototype.setCaretEnd=function(e){if(e&&e.item(0)&&e.item(0).innerText.length){var t=document.createRange();t.selectNodeContents(e[0]),t.collapse(!1);var o=window.getSelection();o.removeAllRanges(),o.addRange(t),this.prevRange=t}else this.prevRange=!1,e&&e[0]&&e[0].focus()},t.prototype.stop=function(){var e=this,t=e.hostInstance.$;if("v2"==e.hostInstance.config.UI.version){if(""!==t(".chatInputBox").text()&&e.hostInstance.config.autoEnableSpeechAndTTS)window.chatContainerConfig.sendMessage(t(".chatInputBox"));t(".recordingMicrophone").css("display","none"),t(".notRecordingMicrophone").css("display","block")}e.recognizing&&(e.recognition.stop(),e.recognizing=!1)},t}(o);var r=t.C;export{r as WebKitSTT};