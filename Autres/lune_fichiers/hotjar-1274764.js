window.hjSiteSettings = window.hjSiteSettings || {"site_id":1274764,"r":0.06245895450306422,"rec_value":0.005988023952095809,"state_change_listen_mode":"automatic_with_fragments","record":true,"continuous_capture_enabled":true,"recording_capture_keystrokes":true,"session_capture_console":false,"session_capture_console_consent":false,"anonymize_digits":false,"anonymize_emails":false,"suppress_all":false,"suppress_text":false,"suppress_location":false,"user_attributes_enabled":true,"legal_name":null,"privacy_policy_url":null,"deferred_page_contents":[],"record_targeting_rules":[{"component":"url","match_operation":"starts_with","pattern":"https://www.flaticon.com/free-sticker","negate":false}],"feedback_widgets":[],"heatmaps":[],"polls":[{"id":673281,"created_epoch_time":1617021846,"skin":"light","background":"#FFFFFF","effective_show_branding":false,"position":"left","content":{"version":2,"questions":[{"uuid":"c735d773-8365-4485-bafe-2ddf735b39b3","type":"net-promoter-score","text":"What is your overall satisfaction with our checkout process? ","required":true,"labels":[{"text":"Not likely at all"},{"text":"Extremely likely"}],"next":"byOrder"},{"uuid":"d17da24b-cf53-44dd-a58c-af4ff763dbac","type":"single-open-ended-multiple-line","text":"If there is one thing that we can improve, what would it be? (if you need any help you can provide us with your email)","required":false,"nextIfSkipped":"byOrder","next":"byOrder"}],"thankyou":"Thank you for answering this Survey. Your feedback is highly appreciated!"},"ask_for_consent":false,"language":"en","display_condition":"immediate","display_delay":0,"persist_condition":"response","targeting_percentage":100,"targeting":[{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"desktop","rule_type":null},{"component":"url","match_operation":"contains","name":null,"negate":false,"pattern":"/thank-you","rule_type":null},{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"phone","rule_type":null},{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"tablet","rule_type":null}],"show_legal":false,"uuid":"2e7e5b77-23cb-4d60-aa9a-4933c38f17d1","logo_url":null,"invite":{"description":"Tell us what you think about this page by taking our quick Survey.","button":"Yes, I will give feedback","close":"No thanks","title":"Your feedback is important to us!"},"invite_enabled":false,"button_color":"#00C764","display_type":"popover"}],"integrations":{"optimizely":{"tag_recordings":false},"google_optimize":{"tag_recordings":false}},"features":["client_script.safe_date","survey.image_question","feedback.embeddable_widget","ingestion.http.page_content","feedback.widgetV2","feedback.widget_telemetry","settings.billing_v2","heatmap.continuous.manual_retaker","error_reporting","client_script.metrics"]};

!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=222)}({222:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t);var a,o=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;n(this,e),this.send=t,this.batchSize=r,this.flushInterval=i,this.buffer=[],this.flushTimer=null}var t,r,a;return t=e,(r=[{key:"getBuffer",value:function(){return this.buffer}},{key:"add",value:function(e){var t=this;this.buffer.push(e),this.buffer.length>=this.batchSize?this.flush():this.flushTimer||(this.flushTimer=setTimeout((function(){t.flush()}),this.flushInterval))}},{key:"flush",value:function(){this.buffer.length>0&&(this.send(this.buffer),this.buffer=[]),this.flushTimer&&(clearTimeout(this.flushTimer),this.flushTimer=null)}}])&&i(t.prototype,r),a&&i(t,a),e}();function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l,f=function(){try{return"performance"in window&&"now"in window.performance}catch(e){return!1}},d={version:1,metricsUrl:(null===(a=window._hjSettings)||void 0===a?void 0:a.metricsUrl)||"https://csmetrics.hotjar.com",features:{metrics:{flag:"client_script.metrics",sampling:.1},debug:{flag:"client_script.metrics.debug",sampling:.5}},browser:{hasPerformance:!1,hasDebug:!1},buffer:{bufferSize:40,flushInterval:2e3}},h={isDebugEnabled:!1,isMetricsEnabled:!1,loggedMetrics:{},genericTags:{}},g=function(e,t,r){h.loggedMetrics[e]=c(c({},h.loggedMetrics[e]),{},u({},t,r))},p=function(e){return e&&(e.task||e.reason||e.module)||"value"},m=function(e,t){var r=p(t),n=h.loggedMetrics[e],i=n&&n[r]||{};return{tagName:r,start:i.start,end:i.end,total:i.total}},b=function(e){var t,r=null!==(t=e.tag)&&void 0!==t?t:void 0;return h.isDebugEnabled?c(c(c({},r),e.extraTags),h.genericTags):r},v=function(e){if(!l)return!1;var t=h.isMetricsEnabled||h.isDebugEnabled;return e?t&&e.flush:t},j=function(e){var t=!1,r="v=".concat(d.version),n=h.isDebugEnabled?"".concat(d.metricsUrl,"?").concat(r,"&debug=true"):"".concat(d.metricsUrl,"?").concat(r),i=JSON.stringify(e);if("sendBeacon"in navigator)try{t=navigator.sendBeacon.bind(navigator)(n,i)}catch(e){}if(!1===t)try{var a=new XMLHttpRequest;a.open("POST",n),a.timeout=1e4,a.send(i)}catch(e){}d.browser.hasDebug&&console.debug("New metric/log: ",e)},w={getState:function(){return c({},h)},start:function(){try{d.browser={hasPerformance:f(),hasDebug:/hjDebug=1/.test(location.search)};var e=window.hjSiteSettings||{},t=e.features,r=e.site_id,n=new Set(t),i=d.features,a=i.debug,s=i.metrics;h.genericTags={site_id:r},h.isDebugEnabled=n.has(a.flag)&&Math.random()<=a.sampling,h.isMetricsEnabled=n.has(s.flag)&&Math.random()<=s.sampling,l=new o(j,d.buffer.bufferSize,d.buffer.flushInterval)}catch(e){console.debug("Error in metrics.start",{error:e})}},reset:function(){h.loggedMetrics={}},stop:function(){h.isDebugEnabled=!1,h.isMetricsEnabled=!1,h.genericTags={}},count:function(e,t){var r=t.incr,n=t.tag,i=t.extraTags;try{var a=p(n),o=h.loggedMetrics[e],s=(o&&o[a]||0)+((null==r?void 0:r.value)||1);if(h.loggedMetrics[e]=c(c({},o),{},u({},a,s)),v(r)){var f={name:e,type:"count",value:s,tags:b({tag:n,extraTags:i})};l.add(f)}}catch(e){}},time:function(){try{if(!d.browser.hasPerformance)return;return performance.now()}catch(e){}},timeStart:function(e,t){try{var r=w.time(),n=m(e,t),i=n.start,a=n.tagName;if(i)return;return g(e,a,{start:r}),r}catch(e){}},timeEnd:function(e,t){var r=t.tag,n=t.incr,i=t.extraTags;try{var a=w.time();if(!a)return;var o,s=m(e,r),c=s.start,u=s.tagName,f=s.total;if(n){var d=n.start&&a-n.start;g(e,u,{total:o=d?(f||0)+d:f})}else o=c?a-c:void 0,g(e,u,{start:c,end:a});if(o&&v(n)){var h={name:e,type:"distribution",value:Math.round(o),tags:b({tag:r,extraTags:i})};l.add(h)}return a}catch(t){console.debug("Failed to send timer metric: ",{name:e,tag:r,error:t})}}};window.hj=window.hj||function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];(window.hj.q=window.hj.q||[]).push(t)},window.hj.metrics=w,hj.metrics.start(),hj.metrics.timeStart("time-to-first-event",null),window.hjBootstrap=window.hjBootstrap||function(e,t,r){var n=["bot","google","headless","baidu","bing","msn","duckduckbot","teoma","slurp","yandex","phantomjs","pingdom","ahrefsbot"].join("|"),i=new RegExp(n,"i"),a=window.navigator||{userAgent:"unknown"},o=a.userAgent?a.userAgent:"unknown";if(i.test(o))return hj.metrics.count("session-rejection",{tag:{reason:"bot"}}),void console.warn("Hotjar not launching due to suspicious userAgent:",o);var s="http:"===window.location.protocol,c=Boolean(window._hjSettings.preview);if(s&&!c)return hj.metrics.count("session-rejection",{tag:{reason:"https"}}),void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");var u=function(e,t,r){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(r),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};u(0,0,r);var l=window.document,f=l.head||l.getElementsByTagName("head")[0];if(l.addEventListener){hj.scriptDomain=e;var d=l.createElement("script");d.async=1,d.src=hj.scriptDomain+t,d.charset="utf-8",f.appendChild(d);var h=["iframe#_hjRemoteVarsFrame {","display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;","}"],g=l.createElement("style");g.type="text/css",g.styleSheet?g.styleSheet.cssText=h.join(""):g.appendChild(l.createTextNode(h.join(""))),f.appendChild(g);var p=l.createElement("iframe");p.style.cssText=h[1],p.name="_hjRemoteVarsFrame",p.title="_hjRemoteVarsFrame",p.tabIndex=-1,p.setAttribute("aria-hidden","true"),p.id="_hjRemoteVarsFrame",p.src="https://"+(window._hjSettings.varsHost||"vars.hotjar.com")+"/box-e031119f9e9e307a08fa610f85dbfb52.html",p.onload=function(){u.varsLoaded=!0,"undefined"!=typeof hj&&hj.event&&hj.event.signal&&hj.event.signal("varsLoaded")},u.varsJar=p,"interactive"===l.readyState||"complete"===l.readyState||"loaded"===l.readyState?m():l.addEventListener("DOMContentLoaded",m),u.revision="c8b3e185b2c5",window.hjBootstrap=u}function m(){setTimeout((function(){l.body.appendChild(p)}),50)}},window.hjBootstrap("https://script.hotjar.com/","modules.7659de6e9a796dae10e4.js","1274764"),window.hjLazyModules=window.hjLazyModules||{SURVEY_V2:{js:"survey-v2.bc48ad726ef478e2db31.js"},SURVEY_BOOTSTRAPPER:{js:"survey-bootstrapper.642b22de383746adb81d.js"},SURVEY_ISOLATED:{js:"survey-isolated.4854e376e9f8db038f88.js"},HEATMAP_RETAKER:{js:"heatmap-retaker.c67a77f04e445a6afb71.js"},SURVEY_INVITATION:{js:"survey-invitation.cf6fde689f156838744a.js"},NOTIFICATION:{js:"notification.6c323f4dd08ae558b5a6.js"},INCOMING_FEEDBACK:{js:"incoming-feedback.e7e32b3d785e0b041df6.js"},PREACT_INCOMING_FEEDBACK:{js:"preact-incoming-feedback.99ff14de9c4122df51f0.js"},SENTRY:{js:"sentry.fc52f252e00af9ca6e28.js"}}}});
