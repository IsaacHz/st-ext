!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}((function(e){"use strict";e.defineMode("solr",(function(){var e=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/,t=/[\|\!\+\-\*\?\~\^\&]/,n=/^(OR|AND|NOT|TO)$/i;function o(r,i){var u,f,c=r.next();return'"'==c?i.tokenize=(f=c,function(e,t){for(var n,r=!1;null!=(n=e.next())&&(n!=f||r);)r=!r&&"\\"==n;return r||(t.tokenize=o),"string"}):t.test(c)?i.tokenize=(u=c,function(e,t){var n="operator";return"+"==u?n+=" positive":"-"==u?n+=" negative":"|"==u?e.eat(/\|/):"&"==u?e.eat(/\&/):"^"==u&&(n+=" boost"),t.tokenize=o,n}):e.test(c)&&(i.tokenize=function(t){return function(r,i){for(var u=t;(t=r.peek())&&null!=t.match(e);)u+=r.next();return i.tokenize=o,n.test(u)?"operator":function(e){return parseFloat(e).toString()===e}(u)?"number":":"==r.peek()?"field":"string"}}(c)),i.tokenize!=o?i.tokenize(r,i):null}return{startState:function(){return{tokenize:o}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}})),e.defineMIME("text/x-solr","solr")}));