/*
Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
License: MIT - http://mrgnrdrck.mit-license.org

https://github.com/mroderick/PubSubJS
*/

(function(e,t){"use strict";if(typeof define=="function"&&define.amd)define(["exports"],t);else if(typeof exports=="object")t(exports);else{var n={};e.PubSub=n,t(n)}})(typeof window=="object"&&window||this,function(e){"use strict";function r(e){var t;for(t in e)if(e.hasOwnProperty(t))return!0;return!1}function i(e){return function(){throw e}}function s(e,t,n){try{e(t,n)}catch(r){setTimeout(i(r),0)}}function o(e,t,n){e(t,n)}function u(e,n,r,i){var u=t[n],a=i?o:s,f;if(!t.hasOwnProperty(n))return;for(f in u)u.hasOwnProperty(f)&&a(u[f],e,r)}function a(e,t,n){return function(){var i=String(e),s=i.lastIndexOf(".");u(e,e,t,n);while(s!==-1)i=i.substr(0,s),s=i.lastIndexOf("."),u(e,i,t,n)}}function f(e){var n=String(e),i=Boolean(t.hasOwnProperty(n)&&r(t[n])),s=n.lastIndexOf(".");while(!i&&s!==-1)n=n.substr(0,s),s=n.lastIndexOf("."),i=Boolean(t.hasOwnProperty(n)&&r(t[n]));return i}function l(e,t,n,r){var i=a(e,t,r),s=f(e);return s?(n===!0?i():setTimeout(i,0),!0):!1}var t={},n=-1;e.publish=function(t,n){return l(t,n,!1,e.immediateExceptions)},e.publishSync=function(t,n){return l(t,n,!0,e.immediateExceptions)},e.subscribe=function(e,r){if(typeof r!="function")return!1;t.hasOwnProperty(e)||(t[e]={});var i="uid_"+String(++n);return t[e][i]=r,i},e.clearAllSubscriptions=function(){t={}},e.clearSubscriptions=function(n){var r;for(r in t)t.hasOwnProperty(r)&&r.indexOf(n)===0&&delete t[r]},e.unsubscribe=function(e){var n=typeof e=="string"&&t.hasOwnProperty(e),r=!n&&typeof e=="string",i=typeof e=="function",s=!1,o,u,a;if(n){delete t[e];return}for(o in t)if(t.hasOwnProperty(o)){u=t[o];if(r&&u[e]){delete u[e],s=e;break}if(i)for(a in u)u.hasOwnProperty(a)&&u[a]===e&&(delete u[a],s=!0)}return s}});