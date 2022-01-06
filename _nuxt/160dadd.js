/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{531:function(t,e,r){"use strict";r.r(e);var n,o=r(389),c=(r(403),r(390)),h=r(391),l=r(397),f=r(393),d=function(){function t(t,e,r,n){this.client=t,this.storage=e,this.storageCache=r,this.logger=n}return t.prototype.isCachedDataFresh=function(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;var r=Date.now()-e,n=r<=t;return this.logger.debug("Config fetch cache check. Cache age millis: "+r+". Cache max age millis (minimumFetchIntervalMillis setting): "+t+". Is cache hit: "+n+"."),n},t.prototype.fetch=function(t){return Object(c.b)(this,void 0,void 0,(function(){var e,r,n,o,h;return Object(c.d)(this,(function(c){switch(c.label){case 0:return[4,Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()])];case 1:return e=c.sent(),r=e[0],(n=e[1])&&this.isCachedDataFresh(t.cacheMaxAgeMillis,r)?[2,n]:(t.eTag=n&&n.eTag,[4,this.client.fetch(t)]);case 2:return o=c.sent(),h=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())],200===o.status&&h.push(this.storage.setLastSuccessfulFetchResponse(o)),[4,Promise.all(h)];case 3:return c.sent(),[2,o]}}))}))},t}(),m=((n={})["registration-window"]="Undefined window object. This SDK only supports usage in a browser environment.",n["registration-project-id"]="Undefined project identifier. Check Firebase app initialization.",n["registration-api-key"]="Undefined API key. Check Firebase app initialization.",n["registration-app-id"]="Undefined app identifier. Check Firebase app initialization.",n["storage-open"]="Error thrown when opening storage. Original error: {$originalErrorMessage}.",n["storage-get"]="Error thrown when reading from storage. Original error: {$originalErrorMessage}.",n["storage-set"]="Error thrown when writing to storage. Original error: {$originalErrorMessage}.",n["storage-delete"]="Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",n["fetch-client-network"]="Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",n["fetch-timeout"]='The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',n["fetch-throttle"]='The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',n["fetch-client-parse"]="Fetch client could not parse response. Original error: {$originalErrorMessage}.",n["fetch-status"]="Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",n),v=new h.b("remoteconfig","Remote Config",m);var w=function(){function t(t,e,r,n,o,c){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=r,this.projectId=n,this.apiKey=o,this.appId=c}return t.prototype.fetch=function(t){return Object(c.b)(this,void 0,void 0,(function(){var e,r,n,o,h,l,f,d,m,w,_,y,C,T,S,E,M,F,O;return Object(c.d)(this,(function(c){switch(c.label){case 0:return[4,Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()])];case 1:e=c.sent(),r=e[0],n=e[1],o=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",h=o+"/v1/projects/"+this.projectId+"/namespaces/"+this.namespace+":fetch?key="+this.apiKey,l={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":t.eTag||"*"},f={sdk_version:this.sdkVersion,app_instance_id:r,app_instance_id_token:n,app_id:this.appId,language_code:(void 0===j&&(j=navigator),j.languages&&j.languages[0]||j.language)},d={method:"POST",headers:l,body:JSON.stringify(f)},m=fetch(h,d),w=new Promise((function(e,r){t.signal.addEventListener((function(){var t=new Error("The operation was aborted.");t.name="AbortError",r(t)}))})),c.label=2;case 2:return c.trys.push([2,5,,6]),[4,Promise.race([m,w])];case 3:return c.sent(),[4,m];case 4:return _=c.sent(),[3,6];case 5:throw y=c.sent(),C="fetch-client-network","AbortError"===y.name&&(C="fetch-timeout"),v.create(C,{originalErrorMessage:y.message});case 6:if(T=_.status,S=_.headers.get("ETag")||void 0,200!==_.status)return[3,11];F=void 0,c.label=7;case 7:return c.trys.push([7,9,,10]),[4,_.json()];case 8:return F=c.sent(),[3,10];case 9:throw O=c.sent(),v.create("fetch-client-parse",{originalErrorMessage:O.message});case 10:E=F.entries,M=F.state,c.label=11;case 11:if("INSTANCE_STATE_UNSPECIFIED"===M?T=500:"NO_CHANGE"===M?T=304:"NO_TEMPLATE"!==M&&"EMPTY_CONFIG"!==M||(E={}),304!==T&&200!==T)throw v.create("fetch-status",{httpStatus:T});return[2,{status:T,eTag:S,config:E}]}var j}))}))},t}(),_=function(){function t(){this.listeners=[]}return t.prototype.addEventListener=function(t){this.listeners.push(t)},t.prototype.abort=function(){this.listeners.forEach((function(t){return t()}))},t}(),y=["1","true","t","yes","y","on"],C=function(){function t(t,e){void 0===e&&(e=""),this._source=t,this._value=e}return t.prototype.asString=function(){return this._value},t.prototype.asBoolean=function(){return"static"!==this._source&&y.indexOf(this._value.toLowerCase())>=0},t.prototype.asNumber=function(){if("static"===this._source)return 0;var t=Number(this._value);return isNaN(t)&&(t=0),t},t.prototype.getSource=function(){return this._source},t}(),T=function(){function t(t,e,r,n,o){this.app=t,this._client=e,this._storageCache=r,this._storage=n,this._logger=o,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}return t.prototype.setLogLevel=function(t){switch(t){case"debug":this._logger.logLevel=l.a.DEBUG;break;case"silent":this._logger.logLevel=l.a.SILENT;break;default:this._logger.logLevel=l.a.ERROR}},Object.defineProperty(t.prototype,"fetchTimeMillis",{get:function(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastFetchStatus",{get:function(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"},enumerable:!1,configurable:!0}),t.prototype.activate=function(){return Object(c.b)(this,void 0,void 0,(function(){var t,e,r;return Object(c.d)(this,(function(n){switch(n.label){case 0:return[4,Promise.all([this._storage.getLastSuccessfulFetchResponse(),this._storage.getActiveConfigEtag()])];case 1:return t=n.sent(),e=t[0],r=t[1],e&&e.config&&e.eTag&&e.eTag!==r?[4,Promise.all([this._storageCache.setActiveConfig(e.config),this._storage.setActiveConfigEtag(e.eTag)])]:[2,!1];case 2:return n.sent(),[2,!0]}}))}))},t.prototype.ensureInitialized=function(){var t=this;return this._initializePromise||(this._initializePromise=this._storageCache.loadFromStorage().then((function(){t._isInitializationComplete=!0}))),this._initializePromise},t.prototype.fetch=function(){return Object(c.b)(this,void 0,void 0,(function(){var t,e,r,n=this;return Object(c.d)(this,(function(o){switch(o.label){case 0:t=new _,setTimeout((function(){return Object(c.b)(n,void 0,void 0,(function(){return Object(c.d)(this,(function(e){return t.abort(),[2]}))}))}),this.settings.fetchTimeoutMillis),o.label=1;case 1:return o.trys.push([1,4,,6]),[4,this._client.fetch({cacheMaxAgeMillis:this.settings.minimumFetchIntervalMillis,signal:t})];case 2:return o.sent(),[4,this._storageCache.setLastFetchStatus("success")];case 3:return o.sent(),[3,6];case 4:return e=o.sent(),f="fetch-throttle",r=(l=e)instanceof h.c&&-1!==l.code.indexOf(f)?"throttle":"failure",[4,this._storageCache.setLastFetchStatus(r)];case 5:throw o.sent(),e;case 6:return[2]}var l,f}))}))},t.prototype.fetchAndActivate=function(){return Object(c.b)(this,void 0,void 0,(function(){return Object(c.d)(this,(function(t){switch(t.label){case 0:return[4,this.fetch()];case 1:return t.sent(),[2,this.activate()]}}))}))},t.prototype.getAll=function(){var t=this;return function(t,e){void 0===t&&(t={});void 0===e&&(e={});return Object.keys(Object(c.a)(Object(c.a)({},t),e))}(this._storageCache.getActiveConfig(),this.defaultConfig).reduce((function(e,r){return e[r]=t.getValue(r),e}),{})},t.prototype.getBoolean=function(t){return this.getValue(t).asBoolean()},t.prototype.getNumber=function(t){return this.getValue(t).asNumber()},t.prototype.getString=function(t){return this.getValue(t).asString()},t.prototype.getValue=function(t){this._isInitializationComplete||this._logger.debug('A value was requested for key "'+t+'" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.');var e=this._storageCache.getActiveConfig();return e&&void 0!==e[t]?new C("remote",e[t]):this.defaultConfig&&void 0!==this.defaultConfig[t]?new C("default",String(this.defaultConfig[t])):(this._logger.debug('Returning static value for key "'+t+'". Define a default or remote value if this is unintentional.'),new C("static"))},t}();function S(t,e){var r=t.target.error||void 0;return v.create(e,{originalErrorMessage:r&&r.message})}var E="app_namespace_store";var M=function(){function t(t,e,r,n){void 0===n&&(n=new Promise((function(t,e){var r=indexedDB.open("firebase_remote_config",1);r.onerror=function(t){e(S(t,"storage-open"))},r.onsuccess=function(e){t(e.target.result)},r.onupgradeneeded=function(t){var e=t.target.result;switch(t.oldVersion){case 0:e.createObjectStore(E,{keyPath:"compositeKey"})}}}))),this.appId=t,this.appName=e,this.namespace=r,this.openDbPromise=n}return t.prototype.getLastFetchStatus=function(){return this.get("last_fetch_status")},t.prototype.setLastFetchStatus=function(t){return this.set("last_fetch_status",t)},t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.get("last_successful_fetch_timestamp_millis")},t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.set("last_successful_fetch_timestamp_millis",t)},t.prototype.getLastSuccessfulFetchResponse=function(){return this.get("last_successful_fetch_response")},t.prototype.setLastSuccessfulFetchResponse=function(t){return this.set("last_successful_fetch_response",t)},t.prototype.getActiveConfig=function(){return this.get("active_config")},t.prototype.setActiveConfig=function(t){return this.set("active_config",t)},t.prototype.getActiveConfigEtag=function(){return this.get("active_config_etag")},t.prototype.setActiveConfigEtag=function(t){return this.set("active_config_etag",t)},t.prototype.getThrottleMetadata=function(){return this.get("throttle_metadata")},t.prototype.setThrottleMetadata=function(t){return this.set("throttle_metadata",t)},t.prototype.deleteThrottleMetadata=function(){return this.delete("throttle_metadata")},t.prototype.get=function(t){return Object(c.b)(this,void 0,void 0,(function(){var e,r=this;return Object(c.d)(this,(function(n){switch(n.label){case 0:return[4,this.openDbPromise];case 1:return e=n.sent(),[2,new Promise((function(n,o){var c=e.transaction([E],"readonly").objectStore(E),h=r.createCompositeKey(t);try{var l=c.get(h);l.onerror=function(t){o(S(t,"storage-get"))},l.onsuccess=function(t){var e=t.target.result;n(e?e.value:void 0)}}catch(t){o(v.create("storage-get",{originalErrorMessage:t&&t.message}))}}))]}}))}))},t.prototype.set=function(t,e){return Object(c.b)(this,void 0,void 0,(function(){var r,n=this;return Object(c.d)(this,(function(o){switch(o.label){case 0:return[4,this.openDbPromise];case 1:return r=o.sent(),[2,new Promise((function(o,c){var h=r.transaction([E],"readwrite").objectStore(E),l=n.createCompositeKey(t);try{var f=h.put({compositeKey:l,value:e});f.onerror=function(t){c(S(t,"storage-set"))},f.onsuccess=function(){o()}}catch(t){c(v.create("storage-set",{originalErrorMessage:t&&t.message}))}}))]}}))}))},t.prototype.delete=function(t){return Object(c.b)(this,void 0,void 0,(function(){var e,r=this;return Object(c.d)(this,(function(n){switch(n.label){case 0:return[4,this.openDbPromise];case 1:return e=n.sent(),[2,new Promise((function(n,o){var c=e.transaction([E],"readwrite").objectStore(E),h=r.createCompositeKey(t);try{var l=c.delete(h);l.onerror=function(t){o(S(t,"storage-delete"))},l.onsuccess=function(){n()}}catch(t){o(v.create("storage-delete",{originalErrorMessage:t&&t.message}))}}))]}}))}))},t.prototype.createCompositeKey=function(t){return[this.appId,this.appName,this.namespace,t].join()},t}(),F=function(){function t(t){this.storage=t}return t.prototype.getLastFetchStatus=function(){return this.lastFetchStatus},t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.lastSuccessfulFetchTimestampMillis},t.prototype.getActiveConfig=function(){return this.activeConfig},t.prototype.loadFromStorage=function(){return Object(c.b)(this,void 0,void 0,(function(){var t,e,r,n,o,h;return Object(c.d)(this,(function(c){switch(c.label){case 0:return t=this.storage.getLastFetchStatus(),e=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),[4,t];case 1:return(n=c.sent())&&(this.lastFetchStatus=n),[4,e];case 2:return(o=c.sent())&&(this.lastSuccessfulFetchTimestampMillis=o),[4,r];case 3:return(h=c.sent())&&(this.activeConfig=h),[2]}}))}))},t.prototype.setLastFetchStatus=function(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)},t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)},t.prototype.setActiveConfig=function(t){return this.activeConfig=t,this.storage.setActiveConfig(t)},t}();function O(t,e){return new Promise((function(r,n){var o=Math.max(e-Date.now(),0),c=setTimeout(r,o);t.addEventListener((function(){clearTimeout(c),n(v.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}var j,I=function(){function t(t,e){this.client=t,this.storage=e}return t.prototype.fetch=function(t){return Object(c.b)(this,void 0,void 0,(function(){var e;return Object(c.d)(this,(function(r){switch(r.label){case 0:return[4,this.storage.getThrottleMetadata()];case 1:return e=r.sent()||{backoffCount:0,throttleEndTimeMillis:Date.now()},[2,this.attemptFetch(t,e)]}}))}))},t.prototype.attemptFetch=function(t,e){var r=e.throttleEndTimeMillis,n=e.backoffCount;return Object(c.b)(this,void 0,void 0,(function(){var e,o,l;return Object(c.d)(this,(function(c){switch(c.label){case 0:return[4,O(t.signal,r)];case 1:c.sent(),c.label=2;case 2:return c.trys.push([2,5,,7]),[4,this.client.fetch(t)];case 3:return e=c.sent(),[4,this.storage.deleteThrottleMetadata()];case 4:return c.sent(),[2,e];case 5:if(!function(t){if(!(t instanceof h.c&&t.customData))return!1;var e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(o=c.sent()))throw o;return l={throttleEndTimeMillis:Date.now()+Object(h.j)(n),backoffCount:n+1},[4,this.storage.setThrottleMetadata(l)];case 6:return c.sent(),[2,this.attemptFetch(t,l)];case 7:return[2]}}))}))},t}(),L="@firebase/remote-config";(j=o.a).INTERNAL.registerComponent(new f.a("remoteConfig",(function(t,e){var r=e.instanceIdentifier,n=t.getProvider("app").getImmediate(),o=t.getProvider("installations").getImmediate();if("undefined"==typeof window)throw v.create("registration-window");var c=n.options,h=c.projectId,f=c.apiKey,m=c.appId;if(!h)throw v.create("registration-project-id");if(!f)throw v.create("registration-api-key");if(!m)throw v.create("registration-app-id");r=r||"firebase";var _=new M(m,n.name,r),y=new F(_),C=new l.b(L);C.logLevel=l.a.ERROR;var S=new w(o,j.SDK_VERSION,r,h,f,m),E=new I(S,_),O=new d(E,_,y,C),P=new T(n,O,y,_,C);return P.ensureInitialized(),P}),"PUBLIC").setMultipleInstances(!0)),j.registerVersion(L,"0.1.37")}}]);