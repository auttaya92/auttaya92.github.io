/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{403:function(t,e,n){"use strict";var r,o=n(389),c=n(393),f=n(390),l=n(391),d=n(438),h="0.4.26",v=1e4,y="w:0.4.26",j="FIS_v2",w=36e5,m=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),O=new l.b("installations","Installations",m);function S(t){return t instanceof l.c&&t.code.includes("request-failed")}function I(t){return"https://firebaseinstallations.googleapis.com/v1/projects/"+t.projectId+"/installations"}function _(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}function C(t,e){return Object(f.b)(this,void 0,void 0,(function(){var n,r;return Object(f.d)(this,(function(o){switch(o.label){case 0:return[4,e.json()];case 1:return n=o.sent(),r=n.error,[2,O.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function k(t){var e=t.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function T(t,e){var n=e.refreshToken,r=k(t);return r.append("Authorization",function(t){return"FIS_v2 "+t}(n)),r}function D(t){return Object(f.b)(this,void 0,void 0,(function(){var e;return Object(f.d)(this,(function(n){switch(n.label){case 0:return[4,t()];case 1:return(e=n.sent()).status>=500&&e.status<600?[2,t()]:[2,e]}}))}))}function x(t,e){var n=e.fid;return Object(f.b)(this,void 0,void 0,(function(){var e,r,body,o,c,l;return Object(f.d)(this,(function(f){switch(f.label){case 0:return e=I(t),r=k(t),body={fid:n,authVersion:j,appId:t.appId,sdkVersion:y},o={method:"POST",headers:r,body:JSON.stringify(body)},[4,D((function(){return fetch(e,o)}))];case 1:return(c=f.sent()).ok?[4,c.json()]:[3,3];case 2:return l=f.sent(),[2,{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:_(l.authToken)}];case 3:return[4,C("Create Installation",c)];case 4:throw f.sent()}}))}))}function P(t){return new Promise((function(e){setTimeout(e,t)}))}var E=/^[cdef][\w-]{21}$/;function A(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var e=function(t){return(e=t,btoa(String.fromCharCode.apply(String,Object(f.f)([],Object(f.e)(e)))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}(t);return E.test(e)?e:""}catch(t){return""}}function N(t){return t.appName+"!"+t.appId}var B=new Map;function K(t,e){var n=N(t);L(n,e),function(t,e){var n=F();n&&n.postMessage({key:t,fid:e});M()}(n,e)}function L(t,e){var n,r,o=B.get(t);if(o)try{for(var c=Object(f.g)(o),l=c.next();!l.done;l=c.next()){(0,l.value)(e)}}catch(t){n={error:t}}finally{try{l&&!l.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}}var V=null;function F(){return!V&&"BroadcastChannel"in self&&((V=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(t){L(t.data.key,t.data.fid)}),V}function M(){0===B.size&&V&&(V.close(),V=null)}var $,J="firebase-installations-store",z=null;function R(){return z||(z=Object(d.openDb)("firebase-installations-database",1,(function(t){switch(t.oldVersion){case 0:t.createObjectStore(J)}}))),z}function U(t,e){return Object(f.b)(this,void 0,void 0,(function(){var n,r,o,c,l;return Object(f.d)(this,(function(f){switch(f.label){case 0:return n=N(t),[4,R()];case 1:return r=f.sent(),o=r.transaction(J,"readwrite"),[4,(c=o.objectStore(J)).get(n)];case 2:return l=f.sent(),[4,c.put(e,n)];case 3:return f.sent(),[4,o.complete];case 4:return f.sent(),l&&l.fid===e.fid||K(t,e.fid),[2,e]}}))}))}function G(t){return Object(f.b)(this,void 0,void 0,(function(){var e,n,r;return Object(f.d)(this,(function(o){switch(o.label){case 0:return e=N(t),[4,R()];case 1:return n=o.sent(),[4,(r=n.transaction(J,"readwrite")).objectStore(J).delete(e)];case 2:return o.sent(),[4,r.complete];case 3:return o.sent(),[2]}}))}))}function H(t,e){return Object(f.b)(this,void 0,void 0,(function(){var n,r,o,c,l,d;return Object(f.d)(this,(function(f){switch(f.label){case 0:return n=N(t),[4,R()];case 1:return r=f.sent(),o=r.transaction(J,"readwrite"),[4,(c=o.objectStore(J)).get(n)];case 2:return l=f.sent(),void 0!==(d=e(l))?[3,4]:[4,c.delete(n)];case 3:return f.sent(),[3,6];case 4:return[4,c.put(d,n)];case 5:f.sent(),f.label=6;case 6:return[4,o.complete];case 7:return f.sent(),!d||l&&l.fid===d.fid||K(t,d.fid),[2,d]}}))}))}function Q(t){return Object(f.b)(this,void 0,void 0,(function(){var e,n,r;return Object(f.d)(this,(function(o){switch(o.label){case 0:return[4,H(t,(function(n){var r=function(t){return Y(t||{fid:A(),registrationStatus:0})}(n),o=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine)return{installationEntry:e,registrationPromise:Promise.reject(O.create("app-offline"))};var n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:n,registrationPromise:function(t,e){return Object(f.b)(this,void 0,void 0,(function(){var n,r;return Object(f.d)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,7]),[4,x(t,e)];case 1:return n=o.sent(),[2,U(t,n)];case 2:return S(r=o.sent())&&409===r.customData.serverCode?[4,G(t)]:[3,4];case 3:return o.sent(),[3,6];case 4:return[4,U(t,{fid:e.fid,registrationStatus:0})];case 5:o.sent(),o.label=6;case 6:throw r;case 7:return[2]}}))}))}(t,n)}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:W(t)}:{installationEntry:e}}(t,r);return e=o.registrationPromise,o.installationEntry}))];case 1:return""!==(n=o.sent()).fid?[3,3]:(r={},[4,e]);case 2:return[2,(r.installationEntry=o.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:e}]}}))}))}function W(t){return Object(f.b)(this,void 0,void 0,(function(){var e,n,r,o;return Object(f.d)(this,(function(c){switch(c.label){case 0:return[4,X(t)];case 1:e=c.sent(),c.label=2;case 2:return 1!==e.registrationStatus?[3,5]:[4,P(100)];case 3:return c.sent(),[4,X(t)];case 4:return e=c.sent(),[3,2];case 5:return 0!==e.registrationStatus?[3,7]:[4,Q(t)];case 6:return n=c.sent(),r=n.installationEntry,(o=n.registrationPromise)?[2,o]:[2,r];case 7:return[2,e]}}))}))}function X(t){return H(t,(function(t){if(!t)throw O.create("installation-not-found");return Y(t)}))}function Y(t){return 1===(e=t).registrationStatus&&e.registrationTime+v<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e}function Z(t,e){var n=t.appConfig,r=t.platformLoggerProvider;return Object(f.b)(this,void 0,void 0,(function(){var t,o,c,body,l,d,h;return Object(f.d)(this,(function(f){switch(f.label){case 0:return t=function(t,e){var n=e.fid;return I(t)+"/"+n+"/authTokens:generate"}(n,e),o=T(n,e),(c=r.getImmediate({optional:!0}))&&o.append("x-firebase-client",c.getPlatformInfoString()),body={installation:{sdkVersion:y}},l={method:"POST",headers:o,body:JSON.stringify(body)},[4,D((function(){return fetch(t,l)}))];case 1:return(d=f.sent()).ok?[4,d.json()]:[3,3];case 2:return h=f.sent(),[2,_(h)];case 3:return[4,C("Generate Auth Token",d)];case 4:throw f.sent()}}))}))}function tt(t,e){return void 0===e&&(e=!1),Object(f.b)(this,void 0,void 0,(function(){var n,r,o;return Object(f.d)(this,(function(c){switch(c.label){case 0:return[4,H(t.appConfig,(function(r){if(!nt(r))throw O.create("not-registered");var o=r.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){var e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+w}(t)}(o))return r;if(1===o.requestStatus)return n=function(t,e){return Object(f.b)(this,void 0,void 0,(function(){var n,r;return Object(f.d)(this,(function(o){switch(o.label){case 0:return[4,et(t.appConfig)];case 1:n=o.sent(),o.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,P(100)];case 3:return o.sent(),[4,et(t.appConfig)];case 4:return n=o.sent(),[3,2];case 5:return 0===(r=n.authToken).requestStatus?[2,tt(t,e)]:[2,r]}}))}))}(t,e),r;if(!navigator.onLine)throw O.create("app-offline");var c=function(t){var e={requestStatus:1,requestTime:Date.now()};return Object(f.a)(Object(f.a)({},t),{authToken:e})}(r);return n=function(t,e){return Object(f.b)(this,void 0,void 0,(function(){var n,r,o;return Object(f.d)(this,(function(c){switch(c.label){case 0:return c.trys.push([0,3,,8]),[4,Z(t,e)];case 1:return n=c.sent(),o=Object(f.a)(Object(f.a)({},e),{authToken:n}),[4,U(t.appConfig,o)];case 2:return c.sent(),[2,n];case 3:return!S(r=c.sent())||401!==r.customData.serverCode&&404!==r.customData.serverCode?[3,5]:[4,G(t.appConfig)];case 4:return c.sent(),[3,7];case 5:return o=Object(f.a)(Object(f.a)({},e),{authToken:{requestStatus:0}}),[4,U(t.appConfig,o)];case 6:c.sent(),c.label=7;case 7:throw r;case 8:return[2]}}))}))}(t,c),c}))];case 1:return r=c.sent(),n?[4,n]:[3,3];case 2:return o=c.sent(),[3,4];case 3:o=r.authToken,c.label=4;case 4:return[2,o]}}))}))}function et(t){return H(t,(function(t){if(!nt(t))throw O.create("not-registered");var e,n=t.authToken;return 1===(e=n).requestStatus&&e.requestTime+v<Date.now()?Object(f.a)(Object(f.a)({},t),{authToken:{requestStatus:0}}):t}))}function nt(t){return void 0!==t&&2===t.registrationStatus}function it(t){return Object(f.b)(this,void 0,void 0,(function(){var e;return Object(f.d)(this,(function(n){switch(n.label){case 0:return[4,Q(t)];case 1:return(e=n.sent().registrationPromise)?[4,e]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}function ot(t,e){return Object(f.b)(this,void 0,void 0,(function(){var n,r,o,c;return Object(f.d)(this,(function(f){switch(f.label){case 0:return n=function(t,e){var n=e.fid;return I(t)+"/"+n}(t,e),r=T(t,e),o={method:"DELETE",headers:r},[4,D((function(){return fetch(n,o)}))];case 1:return(c=f.sent()).ok?[3,3]:[4,C("Delete Installation",c)];case 2:throw f.sent();case 3:return[2]}}))}))}function at(t,e){var n=t.appConfig;return function(t,e){F();var n=N(t),r=B.get(n);r||(r=new Set,B.set(n,r)),r.add(e)}(n,e),function(){!function(t,e){var n=N(t),r=B.get(n);r&&(r.delete(e),0===r.size&&B.delete(n),M())}(n,e)}}function st(t){return O.create("missing-app-config-values",{valueName:t})}($=o.a).INTERNAL.registerComponent(new c.a("installations",(function(t){var e=t.getProvider("app").getImmediate(),n={appConfig:function(t){var e,n;if(!t||!t.options)throw st("App Configuration");if(!t.name)throw st("App Name");try{for(var r=Object(f.g)(["projectId","apiKey","appId"]),o=r.next();!o.done;o=r.next()){var c=o.value;if(!t.options[c])throw st(c)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),platformLoggerProvider:t.getProvider("platform-logger")};return{app:e,getId:function(){return function(t){return Object(f.b)(this,void 0,void 0,(function(){var e,n,r;return Object(f.d)(this,(function(o){switch(o.label){case 0:return[4,Q(t.appConfig)];case 1:return e=o.sent(),n=e.installationEntry,(r=e.registrationPromise)?r.catch(console.error):tt(t).catch(console.error),[2,n.fid]}}))}))}(n)},getToken:function(t){return function(t,e){return void 0===e&&(e=!1),Object(f.b)(this,void 0,void 0,(function(){return Object(f.d)(this,(function(n){switch(n.label){case 0:return[4,it(t.appConfig)];case 1:return n.sent(),[4,tt(t,e)];case 2:return[2,n.sent().token]}}))}))}(n,t)},delete:function(){return function(t){return Object(f.b)(this,void 0,void 0,(function(){var e,n;return Object(f.d)(this,(function(r){switch(r.label){case 0:return[4,H(e=t.appConfig,(function(t){if(!t||0!==t.registrationStatus)return t}))];case 1:if(!(n=r.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw O.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw O.create("app-offline");case 3:return[4,ot(e,n)];case 4:return r.sent(),[4,G(e)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}(n)},onIdChange:function(t){return at(n,t)}}}),"PUBLIC")),$.registerVersion("@firebase/installations",h)},438:function(t,e,n){!function(t){"use strict";function e(t){return Array.prototype.slice.call(t)}function n(t){return new Promise((function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function r(t,e,r){var o,p=new Promise((function(c,f){n(o=t[e].apply(t,r)).then(c,f)}));return p.request=o,p}function o(t,e,n){var p=r(t,e,n);return p.then((function(t){if(t)return new v(t,p.request)}))}function c(t,e,n){n.forEach((function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})}))}function f(t,e,n,o){o.forEach((function(o){o in n.prototype&&(t.prototype[o]=function(){return r(this[e],o,arguments)})}))}function l(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})}))}function d(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return o(this[e],r,arguments)})}))}function h(t){this._index=t}function v(cursor,t){this._cursor=cursor,this._request=t}function y(t){this._store=t}function j(t){this._tx=t,this.complete=new Promise((function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}}))}function w(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new j(n)}function m(t){this._db=t}function O(t,e,n){var p=r(indexedDB,"open",[t,e]),o=p.request;return o&&(o.onupgradeneeded=function(t){n&&n(new w(o.result,t.oldVersion,o.transaction))}),p.then((function(t){return new m(t)}))}function S(t){return r(indexedDB,"deleteDatabase",[t])}c(h,"_index",["name","keyPath","multiEntry","unique"]),f(h,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),d(h,"_index",IDBIndex,["openCursor","openKeyCursor"]),c(v,"_cursor",["direction","key","primaryKey","value"]),f(v,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(v.prototype[t]=function(){var cursor=this,e=arguments;return Promise.resolve().then((function(){return cursor._cursor[t].apply(cursor._cursor,e),n(cursor._request).then((function(t){if(t)return new v(t,cursor._request)}))}))})})),y.prototype.createIndex=function(){return new h(this._store.createIndex.apply(this._store,arguments))},y.prototype.index=function(){return new h(this._store.index.apply(this._store,arguments))},c(y,"_store",["name","keyPath","indexNames","autoIncrement"]),f(y,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),d(y,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),l(y,"_store",IDBObjectStore,["deleteIndex"]),j.prototype.objectStore=function(){return new y(this._tx.objectStore.apply(this._tx,arguments))},c(j,"_tx",["objectStoreNames","mode"]),l(j,"_tx",IDBTransaction,["abort"]),w.prototype.createObjectStore=function(){return new y(this._db.createObjectStore.apply(this._db,arguments))},c(w,"_db",["name","version","objectStoreNames"]),l(w,"_db",IDBDatabase,["deleteObjectStore","close"]),m.prototype.transaction=function(){return new j(this._db.transaction.apply(this._db,arguments))},c(m,"_db",["name","version","objectStoreNames"]),l(m,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[y,h].forEach((function(n){t in n.prototype&&(n.prototype[t.replace("open","iterate")]=function(){var n=e(arguments),r=n[n.length-1],o=this._store||this._index,c=o[t].apply(o,n.slice(0,-1));c.onsuccess=function(){r(c.result)}})}))})),[h,y].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[];return new Promise((function(o){n.iterateCursor(t,(function(cursor){cursor?(r.push(cursor.value),void 0===e||r.length!=e?cursor.continue():o(r)):o(r)}))}))})})),t.openDb=O,t.deleteDb=S,Object.defineProperty(t,"__esModule",{value:!0})}(e)}}]);