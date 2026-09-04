import{c as ke,g as Pe}from"./index-k3UIlnJk.js";function ye(ue){throw new Error('Could not dynamically require "'+ue+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ne={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var _e;function Be(){return _e||(_e=1,(function(ue,ge){(function(h){ue.exports=h()})(function(){return(function h(R,w,c){function r(v,k){if(!w[v]){if(!R[v]){var g=typeof ye=="function"&&ye;if(!k&&g)return g(v,!0);if(a)return a(v,!0);var b=new Error("Cannot find module '"+v+"'");throw b.code="MODULE_NOT_FOUND",b}var o=w[v]={exports:{}};R[v][0].call(o.exports,function(u){var n=R[v][1][u];return r(n||u)},o,o.exports,h,R,w,c)}return w[v].exports}for(var a=typeof ye=="function"&&ye,d=0;d<c.length;d++)r(c[d]);return r})({1:[function(h,R,w){var c=h("./utils"),r=h("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";w.encode=function(d){for(var v,k,g,b,o,u,n,l=[],s=0,m=d.length,x=m,C=c.getTypeOf(d)!=="string";s<d.length;)x=m-s,g=C?(v=d[s++],k=s<m?d[s++]:0,s<m?d[s++]:0):(v=d.charCodeAt(s++),k=s<m?d.charCodeAt(s++):0,s<m?d.charCodeAt(s++):0),b=v>>2,o=(3&v)<<4|k>>4,u=1<x?(15&k)<<2|g>>6:64,n=2<x?63&g:64,l.push(a.charAt(b)+a.charAt(o)+a.charAt(u)+a.charAt(n));return l.join("")},w.decode=function(d){var v,k,g,b,o,u,n=0,l=0,s="data:";if(d.substr(0,s.length)===s)throw new Error("Invalid base64 input, it looks like a data url.");var m,x=3*(d=d.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(d.charAt(d.length-1)===a.charAt(64)&&x--,d.charAt(d.length-2)===a.charAt(64)&&x--,x%1!=0)throw new Error("Invalid base64 input, bad content length.");for(m=r.uint8array?new Uint8Array(0|x):new Array(0|x);n<d.length;)v=a.indexOf(d.charAt(n++))<<2|(b=a.indexOf(d.charAt(n++)))>>4,k=(15&b)<<4|(o=a.indexOf(d.charAt(n++)))>>2,g=(3&o)<<6|(u=a.indexOf(d.charAt(n++))),m[l++]=v,o!==64&&(m[l++]=k),u!==64&&(m[l++]=g);return m}},{"./support":30,"./utils":32}],2:[function(h,R,w){var c=h("./external"),r=h("./stream/DataWorker"),a=h("./stream/Crc32Probe"),d=h("./stream/DataLengthProbe");function v(k,g,b,o,u){this.compressedSize=k,this.uncompressedSize=g,this.crc32=b,this.compression=o,this.compressedContent=u}v.prototype={getContentWorker:function(){var k=new r(c.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new d("data_length")),g=this;return k.on("end",function(){if(this.streamInfo.data_length!==g.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),k},getCompressedWorker:function(){return new r(c.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},v.createWorkerFrom=function(k,g,b){return k.pipe(new a).pipe(new d("uncompressedSize")).pipe(g.compressWorker(b)).pipe(new d("compressedSize")).withStreamInfo("compression",g)},R.exports=v},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(h,R,w){var c=h("./stream/GenericWorker");w.STORE={magic:"\0\0",compressWorker:function(){return new c("STORE compression")},uncompressWorker:function(){return new c("STORE decompression")}},w.DEFLATE=h("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(h,R,w){var c=h("./utils"),r=(function(){for(var a,d=[],v=0;v<256;v++){a=v;for(var k=0;k<8;k++)a=1&a?3988292384^a>>>1:a>>>1;d[v]=a}return d})();R.exports=function(a,d){return a!==void 0&&a.length?c.getTypeOf(a)!=="string"?(function(v,k,g,b){var o=r,u=b+g;v^=-1;for(var n=b;n<u;n++)v=v>>>8^o[255&(v^k[n])];return-1^v})(0|d,a,a.length,0):(function(v,k,g,b){var o=r,u=b+g;v^=-1;for(var n=b;n<u;n++)v=v>>>8^o[255&(v^k.charCodeAt(n))];return-1^v})(0|d,a,a.length,0):0}},{"./utils":32}],5:[function(h,R,w){w.base64=!1,w.binary=!1,w.dir=!1,w.createFolders=!0,w.date=null,w.compression=null,w.compressionOptions=null,w.comment=null,w.unixPermissions=null,w.dosPermissions=null},{}],6:[function(h,R,w){var c=null;c=typeof Promise<"u"?Promise:h("lie"),R.exports={Promise:c}},{lie:37}],7:[function(h,R,w){var c=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",r=h("pako"),a=h("./utils"),d=h("./stream/GenericWorker"),v=c?"uint8array":"array";function k(g,b){d.call(this,"FlateWorker/"+g),this._pako=null,this._pakoAction=g,this._pakoOptions=b,this.meta={}}w.magic="\b\0",a.inherits(k,d),k.prototype.processChunk=function(g){this.meta=g.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(v,g.data),!1)},k.prototype.flush=function(){d.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},k.prototype.cleanUp=function(){d.prototype.cleanUp.call(this),this._pako=null},k.prototype._createPako=function(){this._pako=new r[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var g=this;this._pako.onData=function(b){g.push({data:b,meta:g.meta})}},w.compressWorker=function(g){return new k("Deflate",g)},w.uncompressWorker=function(){return new k("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(h,R,w){function c(o,u){var n,l="";for(n=0;n<u;n++)l+=String.fromCharCode(255&o),o>>>=8;return l}function r(o,u,n,l,s,m){var x,C,N=o.file,O=o.compression,E=m!==v.utf8encode,F=a.transformTo("string",m(N.name)),A=a.transformTo("string",v.utf8encode(N.name)),q=N.comment,K=a.transformTo("string",m(q)),f=a.transformTo("string",v.utf8encode(q)),P=A.length!==N.name.length,t=f.length!==q.length,D="",J="",L="",Y=N.dir,j=N.date,Q={crc32:0,compressedSize:0,uncompressedSize:0};u&&!n||(Q.crc32=o.crc32,Q.compressedSize=o.compressedSize,Q.uncompressedSize=o.uncompressedSize);var I=0;u&&(I|=8),E||!P&&!t||(I|=2048);var _=0,Z=0;Y&&(_|=16),s==="UNIX"?(Z=798,_|=(function(V,ae){var re=V;return V||(re=ae?16893:33204),(65535&re)<<16})(N.unixPermissions,Y)):(Z=20,_|=(function(V){return 63&(V||0)})(N.dosPermissions)),x=j.getUTCHours(),x<<=6,x|=j.getUTCMinutes(),x<<=5,x|=j.getUTCSeconds()/2,C=j.getUTCFullYear()-1980,C<<=4,C|=j.getUTCMonth()+1,C<<=5,C|=j.getUTCDate(),P&&(J=c(1,1)+c(k(F),4)+A,D+="up"+c(J.length,2)+J),t&&(L=c(1,1)+c(k(K),4)+f,D+="uc"+c(L.length,2)+L);var G="";return G+=`
\0`,G+=c(I,2),G+=O.magic,G+=c(x,2),G+=c(C,2),G+=c(Q.crc32,4),G+=c(Q.compressedSize,4),G+=c(Q.uncompressedSize,4),G+=c(F.length,2),G+=c(D.length,2),{fileRecord:g.LOCAL_FILE_HEADER+G+F+D,dirRecord:g.CENTRAL_FILE_HEADER+c(Z,2)+G+c(K.length,2)+"\0\0\0\0"+c(_,4)+c(l,4)+F+D+K}}var a=h("../utils"),d=h("../stream/GenericWorker"),v=h("../utf8"),k=h("../crc32"),g=h("../signature");function b(o,u,n,l){d.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=u,this.zipPlatform=n,this.encodeFileName=l,this.streamFiles=o,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(b,d),b.prototype.push=function(o){var u=o.meta.percent||0,n=this.entriesCount,l=this._sources.length;this.accumulate?this.contentBuffer.push(o):(this.bytesWritten+=o.data.length,d.prototype.push.call(this,{data:o.data,meta:{currentFile:this.currentFile,percent:n?(u+100*(n-l-1))/n:100}}))},b.prototype.openedSource=function(o){this.currentSourceOffset=this.bytesWritten,this.currentFile=o.file.name;var u=this.streamFiles&&!o.file.dir;if(u){var n=r(o,u,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:n.fileRecord,meta:{percent:0}})}else this.accumulate=!0},b.prototype.closedSource=function(o){this.accumulate=!1;var u=this.streamFiles&&!o.file.dir,n=r(o,u,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(n.dirRecord),u)this.push({data:(function(l){return g.DATA_DESCRIPTOR+c(l.crc32,4)+c(l.compressedSize,4)+c(l.uncompressedSize,4)})(o),meta:{percent:100}});else for(this.push({data:n.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},b.prototype.flush=function(){for(var o=this.bytesWritten,u=0;u<this.dirRecords.length;u++)this.push({data:this.dirRecords[u],meta:{percent:100}});var n=this.bytesWritten-o,l=(function(s,m,x,C,N){var O=a.transformTo("string",N(C));return g.CENTRAL_DIRECTORY_END+"\0\0\0\0"+c(s,2)+c(s,2)+c(m,4)+c(x,4)+c(O.length,2)+O})(this.dirRecords.length,n,o,this.zipComment,this.encodeFileName);this.push({data:l,meta:{percent:100}})},b.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},b.prototype.registerPrevious=function(o){this._sources.push(o);var u=this;return o.on("data",function(n){u.processChunk(n)}),o.on("end",function(){u.closedSource(u.previous.streamInfo),u._sources.length?u.prepareNextSource():u.end()}),o.on("error",function(n){u.error(n)}),this},b.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},b.prototype.error=function(o){var u=this._sources;if(!d.prototype.error.call(this,o))return!1;for(var n=0;n<u.length;n++)try{u[n].error(o)}catch{}return!0},b.prototype.lock=function(){d.prototype.lock.call(this);for(var o=this._sources,u=0;u<o.length;u++)o[u].lock()},R.exports=b},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(h,R,w){var c=h("../compressions"),r=h("./ZipFileWorker");w.generateWorker=function(a,d,v){var k=new r(d.streamFiles,v,d.platform,d.encodeFileName),g=0;try{a.forEach(function(b,o){g++;var u=(function(m,x){var C=m||x,N=c[C];if(!N)throw new Error(C+" is not a valid compression method !");return N})(o.options.compression,d.compression),n=o.options.compressionOptions||d.compressionOptions||{},l=o.dir,s=o.date;o._compressWorker(u,n).withStreamInfo("file",{name:b,dir:l,date:s,comment:o.comment||"",unixPermissions:o.unixPermissions,dosPermissions:o.dosPermissions}).pipe(k)}),k.entriesCount=g}catch(b){k.error(b)}return k}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(h,R,w){function c(){if(!(this instanceof c))return new c;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var r=new c;for(var a in this)typeof this[a]!="function"&&(r[a]=this[a]);return r}}(c.prototype=h("./object")).loadAsync=h("./load"),c.support=h("./support"),c.defaults=h("./defaults"),c.version="3.10.1",c.loadAsync=function(r,a){return new c().loadAsync(r,a)},c.external=h("./external"),R.exports=c},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(h,R,w){var c=h("./utils"),r=h("./external"),a=h("./utf8"),d=h("./zipEntries"),v=h("./stream/Crc32Probe"),k=h("./nodejsUtils");function g(b){return new r.Promise(function(o,u){var n=b.decompressed.getContentWorker().pipe(new v);n.on("error",function(l){u(l)}).on("end",function(){n.streamInfo.crc32!==b.decompressed.crc32?u(new Error("Corrupted zip : CRC32 mismatch")):o()}).resume()})}R.exports=function(b,o){var u=this;return o=c.extend(o||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),k.isNode&&k.isStream(b)?r.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):c.prepareContent("the loaded zip file",b,!0,o.optimizedBinaryString,o.base64).then(function(n){var l=new d(o);return l.load(n),l}).then(function(n){var l=[r.Promise.resolve(n)],s=n.files;if(o.checkCRC32)for(var m=0;m<s.length;m++)l.push(g(s[m]));return r.Promise.all(l)}).then(function(n){for(var l=n.shift(),s=l.files,m=0;m<s.length;m++){var x=s[m],C=x.fileNameStr,N=c.resolve(x.fileNameStr);u.file(N,x.decompressed,{binary:!0,optimizedBinaryString:!0,date:x.date,dir:x.dir,comment:x.fileCommentStr.length?x.fileCommentStr:null,unixPermissions:x.unixPermissions,dosPermissions:x.dosPermissions,createFolders:o.createFolders}),x.dir||(u.file(N).unsafeOriginalName=C)}return l.zipComment.length&&(u.comment=l.zipComment),u})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(h,R,w){var c=h("../utils"),r=h("../stream/GenericWorker");function a(d,v){r.call(this,"Nodejs stream input adapter for "+d),this._upstreamEnded=!1,this._bindStream(v)}c.inherits(a,r),a.prototype._bindStream=function(d){var v=this;(this._stream=d).pause(),d.on("data",function(k){v.push({data:k,meta:{percent:0}})}).on("error",function(k){v.isPaused?this.generatedError=k:v.error(k)}).on("end",function(){v.isPaused?v._upstreamEnded=!0:v.end()})},a.prototype.pause=function(){return!!r.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!r.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},R.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(h,R,w){var c=h("readable-stream").Readable;function r(a,d,v){c.call(this,d),this._helper=a;var k=this;a.on("data",function(g,b){k.push(g)||k._helper.pause(),v&&v(b)}).on("error",function(g){k.emit("error",g)}).on("end",function(){k.push(null)})}h("../utils").inherits(r,c),r.prototype._read=function(){this._helper.resume()},R.exports=r},{"../utils":32,"readable-stream":16}],14:[function(h,R,w){R.exports={isNode:typeof Buffer<"u",newBufferFrom:function(c,r){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(c,r);if(typeof c=="number")throw new Error('The "data" argument must not be a number');return new Buffer(c,r)},allocBuffer:function(c){if(Buffer.alloc)return Buffer.alloc(c);var r=new Buffer(c);return r.fill(0),r},isBuffer:function(c){return Buffer.isBuffer(c)},isStream:function(c){return c&&typeof c.on=="function"&&typeof c.pause=="function"&&typeof c.resume=="function"}}},{}],15:[function(h,R,w){function c(N,O,E){var F,A=a.getTypeOf(O),q=a.extend(E||{},k);q.date=q.date||new Date,q.compression!==null&&(q.compression=q.compression.toUpperCase()),typeof q.unixPermissions=="string"&&(q.unixPermissions=parseInt(q.unixPermissions,8)),q.unixPermissions&&16384&q.unixPermissions&&(q.dir=!0),q.dosPermissions&&16&q.dosPermissions&&(q.dir=!0),q.dir&&(N=s(N)),q.createFolders&&(F=l(N))&&m.call(this,F,!0);var K=A==="string"&&q.binary===!1&&q.base64===!1;E&&E.binary!==void 0||(q.binary=!K),(O instanceof g&&O.uncompressedSize===0||q.dir||!O||O.length===0)&&(q.base64=!1,q.binary=!0,O="",q.compression="STORE",A="string");var f=null;f=O instanceof g||O instanceof d?O:u.isNode&&u.isStream(O)?new n(N,O):a.prepareContent(N,O,q.binary,q.optimizedBinaryString,q.base64);var P=new b(N,f,q);this.files[N]=P}var r=h("./utf8"),a=h("./utils"),d=h("./stream/GenericWorker"),v=h("./stream/StreamHelper"),k=h("./defaults"),g=h("./compressedObject"),b=h("./zipObject"),o=h("./generate"),u=h("./nodejsUtils"),n=h("./nodejs/NodejsStreamInputAdapter"),l=function(N){N.slice(-1)==="/"&&(N=N.substring(0,N.length-1));var O=N.lastIndexOf("/");return 0<O?N.substring(0,O):""},s=function(N){return N.slice(-1)!=="/"&&(N+="/"),N},m=function(N,O){return O=O!==void 0?O:k.createFolders,N=s(N),this.files[N]||c.call(this,N,null,{dir:!0,createFolders:O}),this.files[N]};function x(N){return Object.prototype.toString.call(N)==="[object RegExp]"}var C={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(N){var O,E,F;for(O in this.files)F=this.files[O],(E=O.slice(this.root.length,O.length))&&O.slice(0,this.root.length)===this.root&&N(E,F)},filter:function(N){var O=[];return this.forEach(function(E,F){N(E,F)&&O.push(F)}),O},file:function(N,O,E){if(arguments.length!==1)return N=this.root+N,c.call(this,N,O,E),this;if(x(N)){var F=N;return this.filter(function(q,K){return!K.dir&&F.test(q)})}var A=this.files[this.root+N];return A&&!A.dir?A:null},folder:function(N){if(!N)return this;if(x(N))return this.filter(function(A,q){return q.dir&&N.test(A)});var O=this.root+N,E=m.call(this,O),F=this.clone();return F.root=E.name,F},remove:function(N){N=this.root+N;var O=this.files[N];if(O||(N.slice(-1)!=="/"&&(N+="/"),O=this.files[N]),O&&!O.dir)delete this.files[N];else for(var E=this.filter(function(A,q){return q.name.slice(0,N.length)===N}),F=0;F<E.length;F++)delete this.files[E[F].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(N){var O,E={};try{if((E=a.extend(N||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:r.utf8encode})).type=E.type.toLowerCase(),E.compression=E.compression.toUpperCase(),E.type==="binarystring"&&(E.type="string"),!E.type)throw new Error("No output type specified.");a.checkSupport(E.type),E.platform!=="darwin"&&E.platform!=="freebsd"&&E.platform!=="linux"&&E.platform!=="sunos"||(E.platform="UNIX"),E.platform==="win32"&&(E.platform="DOS");var F=E.comment||this.comment||"";O=o.generateWorker(this,E,F)}catch(A){(O=new d("error")).error(A)}return new v(O,E.type||"string",E.mimeType)},generateAsync:function(N,O){return this.generateInternalStream(N).accumulate(O)},generateNodeStream:function(N,O){return(N=N||{}).type||(N.type="nodebuffer"),this.generateInternalStream(N).toNodejsStream(O)}};R.exports=C},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(h,R,w){R.exports=h("stream")},{stream:void 0}],17:[function(h,R,w){var c=h("./DataReader");function r(a){c.call(this,a);for(var d=0;d<this.data.length;d++)a[d]=255&a[d]}h("../utils").inherits(r,c),r.prototype.byteAt=function(a){return this.data[this.zero+a]},r.prototype.lastIndexOfSignature=function(a){for(var d=a.charCodeAt(0),v=a.charCodeAt(1),k=a.charCodeAt(2),g=a.charCodeAt(3),b=this.length-4;0<=b;--b)if(this.data[b]===d&&this.data[b+1]===v&&this.data[b+2]===k&&this.data[b+3]===g)return b-this.zero;return-1},r.prototype.readAndCheckSignature=function(a){var d=a.charCodeAt(0),v=a.charCodeAt(1),k=a.charCodeAt(2),g=a.charCodeAt(3),b=this.readData(4);return d===b[0]&&v===b[1]&&k===b[2]&&g===b[3]},r.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var d=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,d},R.exports=r},{"../utils":32,"./DataReader":18}],18:[function(h,R,w){var c=h("../utils");function r(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}r.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var d,v=0;for(this.checkOffset(a),d=this.index+a-1;d>=this.index;d--)v=(v<<8)+this.byteAt(d);return this.index+=a,v},readString:function(a){return c.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},R.exports=r},{"../utils":32}],19:[function(h,R,w){var c=h("./Uint8ArrayReader");function r(a){c.call(this,a)}h("../utils").inherits(r,c),r.prototype.readData=function(a){this.checkOffset(a);var d=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,d},R.exports=r},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(h,R,w){var c=h("./DataReader");function r(a){c.call(this,a)}h("../utils").inherits(r,c),r.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},r.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},r.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},r.prototype.readData=function(a){this.checkOffset(a);var d=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,d},R.exports=r},{"../utils":32,"./DataReader":18}],21:[function(h,R,w){var c=h("./ArrayReader");function r(a){c.call(this,a)}h("../utils").inherits(r,c),r.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var d=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,d},R.exports=r},{"../utils":32,"./ArrayReader":17}],22:[function(h,R,w){var c=h("../utils"),r=h("../support"),a=h("./ArrayReader"),d=h("./StringReader"),v=h("./NodeBufferReader"),k=h("./Uint8ArrayReader");R.exports=function(g){var b=c.getTypeOf(g);return c.checkSupport(b),b!=="string"||r.uint8array?b==="nodebuffer"?new v(g):r.uint8array?new k(c.transformTo("uint8array",g)):new a(c.transformTo("array",g)):new d(g)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(h,R,w){w.LOCAL_FILE_HEADER="PK",w.CENTRAL_FILE_HEADER="PK",w.CENTRAL_DIRECTORY_END="PK",w.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",w.ZIP64_CENTRAL_DIRECTORY_END="PK",w.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(h,R,w){var c=h("./GenericWorker"),r=h("../utils");function a(d){c.call(this,"ConvertWorker to "+d),this.destType=d}r.inherits(a,c),a.prototype.processChunk=function(d){this.push({data:r.transformTo(this.destType,d.data),meta:d.meta})},R.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(h,R,w){var c=h("./GenericWorker"),r=h("../crc32");function a(){c.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}h("../utils").inherits(a,c),a.prototype.processChunk=function(d){this.streamInfo.crc32=r(d.data,this.streamInfo.crc32||0),this.push(d)},R.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(h,R,w){var c=h("../utils"),r=h("./GenericWorker");function a(d){r.call(this,"DataLengthProbe for "+d),this.propName=d,this.withStreamInfo(d,0)}c.inherits(a,r),a.prototype.processChunk=function(d){if(d){var v=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=v+d.data.length}r.prototype.processChunk.call(this,d)},R.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(h,R,w){var c=h("../utils"),r=h("./GenericWorker");function a(d){r.call(this,"DataWorker");var v=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,d.then(function(k){v.dataIsReady=!0,v.data=k,v.max=k&&k.length||0,v.type=c.getTypeOf(k),v.isPaused||v._tickAndRepeat()},function(k){v.error(k)})}c.inherits(a,r),a.prototype.cleanUp=function(){r.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!r.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,c.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(c.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var d=null,v=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":d=this.data.substring(this.index,v);break;case"uint8array":d=this.data.subarray(this.index,v);break;case"array":case"nodebuffer":d=this.data.slice(this.index,v)}return this.index=v,this.push({data:d,meta:{percent:this.max?this.index/this.max*100:0}})},R.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(h,R,w){function c(r){this.name=r||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}c.prototype={push:function(r){this.emit("data",r)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(r){this.emit("error",r)}return!0},error:function(r){return!this.isFinished&&(this.isPaused?this.generatedError=r:(this.isFinished=!0,this.emit("error",r),this.previous&&this.previous.error(r),this.cleanUp()),!0)},on:function(r,a){return this._listeners[r].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(r,a){if(this._listeners[r])for(var d=0;d<this._listeners[r].length;d++)this._listeners[r][d].call(this,a)},pipe:function(r){return r.registerPrevious(this)},registerPrevious:function(r){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=r.streamInfo,this.mergeStreamInfo(),this.previous=r;var a=this;return r.on("data",function(d){a.processChunk(d)}),r.on("end",function(){a.end()}),r.on("error",function(d){a.error(d)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var r=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),r=!0),this.previous&&this.previous.resume(),!r},flush:function(){},processChunk:function(r){this.push(r)},withStreamInfo:function(r,a){return this.extraStreamInfo[r]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var r in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,r)&&(this.streamInfo[r]=this.extraStreamInfo[r])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var r="Worker "+this.name;return this.previous?this.previous+" -> "+r:r}},R.exports=c},{}],29:[function(h,R,w){var c=h("../utils"),r=h("./ConvertWorker"),a=h("./GenericWorker"),d=h("../base64"),v=h("../support"),k=h("../external"),g=null;if(v.nodestream)try{g=h("../nodejs/NodejsStreamOutputAdapter")}catch{}function b(u,n){return new k.Promise(function(l,s){var m=[],x=u._internalType,C=u._outputType,N=u._mimeType;u.on("data",function(O,E){m.push(O),n&&n(E)}).on("error",function(O){m=[],s(O)}).on("end",function(){try{var O=(function(E,F,A){switch(E){case"blob":return c.newBlob(c.transformTo("arraybuffer",F),A);case"base64":return d.encode(F);default:return c.transformTo(E,F)}})(C,(function(E,F){var A,q=0,K=null,f=0;for(A=0;A<F.length;A++)f+=F[A].length;switch(E){case"string":return F.join("");case"array":return Array.prototype.concat.apply([],F);case"uint8array":for(K=new Uint8Array(f),A=0;A<F.length;A++)K.set(F[A],q),q+=F[A].length;return K;case"nodebuffer":return Buffer.concat(F);default:throw new Error("concat : unsupported type '"+E+"'")}})(x,m),N);l(O)}catch(E){s(E)}m=[]}).resume()})}function o(u,n,l){var s=n;switch(n){case"blob":case"arraybuffer":s="uint8array";break;case"base64":s="string"}try{this._internalType=s,this._outputType=n,this._mimeType=l,c.checkSupport(s),this._worker=u.pipe(new r(s)),u.lock()}catch(m){this._worker=new a("error"),this._worker.error(m)}}o.prototype={accumulate:function(u){return b(this,u)},on:function(u,n){var l=this;return u==="data"?this._worker.on(u,function(s){n.call(l,s.data,s.meta)}):this._worker.on(u,function(){c.delay(n,arguments,l)}),this},resume:function(){return c.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(u){if(c.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new g(this,{objectMode:this._outputType!=="nodebuffer"},u)}},R.exports=o},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(h,R,w){if(w.base64=!0,w.array=!0,w.string=!0,w.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",w.nodebuffer=typeof Buffer<"u",w.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")w.blob=!1;else{var c=new ArrayBuffer(0);try{w.blob=new Blob([c],{type:"application/zip"}).size===0}catch{try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);r.append(c),w.blob=r.getBlob("application/zip").size===0}catch{w.blob=!1}}}try{w.nodestream=!!h("readable-stream").Readable}catch{w.nodestream=!1}},{"readable-stream":16}],31:[function(h,R,w){for(var c=h("./utils"),r=h("./support"),a=h("./nodejsUtils"),d=h("./stream/GenericWorker"),v=new Array(256),k=0;k<256;k++)v[k]=252<=k?6:248<=k?5:240<=k?4:224<=k?3:192<=k?2:1;v[254]=v[254]=1;function g(){d.call(this,"utf-8 decode"),this.leftOver=null}function b(){d.call(this,"utf-8 encode")}w.utf8encode=function(o){return r.nodebuffer?a.newBufferFrom(o,"utf-8"):(function(u){var n,l,s,m,x,C=u.length,N=0;for(m=0;m<C;m++)(64512&(l=u.charCodeAt(m)))==55296&&m+1<C&&(64512&(s=u.charCodeAt(m+1)))==56320&&(l=65536+(l-55296<<10)+(s-56320),m++),N+=l<128?1:l<2048?2:l<65536?3:4;for(n=r.uint8array?new Uint8Array(N):new Array(N),m=x=0;x<N;m++)(64512&(l=u.charCodeAt(m)))==55296&&m+1<C&&(64512&(s=u.charCodeAt(m+1)))==56320&&(l=65536+(l-55296<<10)+(s-56320),m++),l<128?n[x++]=l:(l<2048?n[x++]=192|l>>>6:(l<65536?n[x++]=224|l>>>12:(n[x++]=240|l>>>18,n[x++]=128|l>>>12&63),n[x++]=128|l>>>6&63),n[x++]=128|63&l);return n})(o)},w.utf8decode=function(o){return r.nodebuffer?c.transformTo("nodebuffer",o).toString("utf-8"):(function(u){var n,l,s,m,x=u.length,C=new Array(2*x);for(n=l=0;n<x;)if((s=u[n++])<128)C[l++]=s;else if(4<(m=v[s]))C[l++]=65533,n+=m-1;else{for(s&=m===2?31:m===3?15:7;1<m&&n<x;)s=s<<6|63&u[n++],m--;1<m?C[l++]=65533:s<65536?C[l++]=s:(s-=65536,C[l++]=55296|s>>10&1023,C[l++]=56320|1023&s)}return C.length!==l&&(C.subarray?C=C.subarray(0,l):C.length=l),c.applyFromCharCode(C)})(o=c.transformTo(r.uint8array?"uint8array":"array",o))},c.inherits(g,d),g.prototype.processChunk=function(o){var u=c.transformTo(r.uint8array?"uint8array":"array",o.data);if(this.leftOver&&this.leftOver.length){if(r.uint8array){var n=u;(u=new Uint8Array(n.length+this.leftOver.length)).set(this.leftOver,0),u.set(n,this.leftOver.length)}else u=this.leftOver.concat(u);this.leftOver=null}var l=(function(m,x){var C;for((x=x||m.length)>m.length&&(x=m.length),C=x-1;0<=C&&(192&m[C])==128;)C--;return C<0||C===0?x:C+v[m[C]]>x?C:x})(u),s=u;l!==u.length&&(r.uint8array?(s=u.subarray(0,l),this.leftOver=u.subarray(l,u.length)):(s=u.slice(0,l),this.leftOver=u.slice(l,u.length))),this.push({data:w.utf8decode(s),meta:o.meta})},g.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:w.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},w.Utf8DecodeWorker=g,c.inherits(b,d),b.prototype.processChunk=function(o){this.push({data:w.utf8encode(o.data),meta:o.meta})},w.Utf8EncodeWorker=b},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(h,R,w){var c=h("./support"),r=h("./base64"),a=h("./nodejsUtils"),d=h("./external");function v(n){return n}function k(n,l){for(var s=0;s<n.length;++s)l[s]=255&n.charCodeAt(s);return l}h("setimmediate"),w.newBlob=function(n,l){w.checkSupport("blob");try{return new Blob([n],{type:l})}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return s.append(n),s.getBlob(l)}catch{throw new Error("Bug : can't construct the Blob.")}}};var g={stringifyByChunk:function(n,l,s){var m=[],x=0,C=n.length;if(C<=s)return String.fromCharCode.apply(null,n);for(;x<C;)l==="array"||l==="nodebuffer"?m.push(String.fromCharCode.apply(null,n.slice(x,Math.min(x+s,C)))):m.push(String.fromCharCode.apply(null,n.subarray(x,Math.min(x+s,C)))),x+=s;return m.join("")},stringifyByChar:function(n){for(var l="",s=0;s<n.length;s++)l+=String.fromCharCode(n[s]);return l},applyCanBeUsed:{uint8array:(function(){try{return c.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return c.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}})()}};function b(n){var l=65536,s=w.getTypeOf(n),m=!0;if(s==="uint8array"?m=g.applyCanBeUsed.uint8array:s==="nodebuffer"&&(m=g.applyCanBeUsed.nodebuffer),m)for(;1<l;)try{return g.stringifyByChunk(n,s,l)}catch{l=Math.floor(l/2)}return g.stringifyByChar(n)}function o(n,l){for(var s=0;s<n.length;s++)l[s]=n[s];return l}w.applyFromCharCode=b;var u={};u.string={string:v,array:function(n){return k(n,new Array(n.length))},arraybuffer:function(n){return u.string.uint8array(n).buffer},uint8array:function(n){return k(n,new Uint8Array(n.length))},nodebuffer:function(n){return k(n,a.allocBuffer(n.length))}},u.array={string:b,array:v,arraybuffer:function(n){return new Uint8Array(n).buffer},uint8array:function(n){return new Uint8Array(n)},nodebuffer:function(n){return a.newBufferFrom(n)}},u.arraybuffer={string:function(n){return b(new Uint8Array(n))},array:function(n){return o(new Uint8Array(n),new Array(n.byteLength))},arraybuffer:v,uint8array:function(n){return new Uint8Array(n)},nodebuffer:function(n){return a.newBufferFrom(new Uint8Array(n))}},u.uint8array={string:b,array:function(n){return o(n,new Array(n.length))},arraybuffer:function(n){return n.buffer},uint8array:v,nodebuffer:function(n){return a.newBufferFrom(n)}},u.nodebuffer={string:b,array:function(n){return o(n,new Array(n.length))},arraybuffer:function(n){return u.nodebuffer.uint8array(n).buffer},uint8array:function(n){return o(n,new Uint8Array(n.length))},nodebuffer:v},w.transformTo=function(n,l){if(l=l||"",!n)return l;w.checkSupport(n);var s=w.getTypeOf(l);return u[s][n](l)},w.resolve=function(n){for(var l=n.split("/"),s=[],m=0;m<l.length;m++){var x=l[m];x==="."||x===""&&m!==0&&m!==l.length-1||(x===".."?s.pop():s.push(x))}return s.join("/")},w.getTypeOf=function(n){return typeof n=="string"?"string":Object.prototype.toString.call(n)==="[object Array]"?"array":c.nodebuffer&&a.isBuffer(n)?"nodebuffer":c.uint8array&&n instanceof Uint8Array?"uint8array":c.arraybuffer&&n instanceof ArrayBuffer?"arraybuffer":void 0},w.checkSupport=function(n){if(!c[n.toLowerCase()])throw new Error(n+" is not supported by this platform")},w.MAX_VALUE_16BITS=65535,w.MAX_VALUE_32BITS=-1,w.pretty=function(n){var l,s,m="";for(s=0;s<(n||"").length;s++)m+="\\x"+((l=n.charCodeAt(s))<16?"0":"")+l.toString(16).toUpperCase();return m},w.delay=function(n,l,s){setImmediate(function(){n.apply(s||null,l||[])})},w.inherits=function(n,l){function s(){}s.prototype=l.prototype,n.prototype=new s},w.extend=function(){var n,l,s={};for(n=0;n<arguments.length;n++)for(l in arguments[n])Object.prototype.hasOwnProperty.call(arguments[n],l)&&s[l]===void 0&&(s[l]=arguments[n][l]);return s},w.prepareContent=function(n,l,s,m,x){return d.Promise.resolve(l).then(function(C){return c.blob&&(C instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(C))!==-1)&&typeof FileReader<"u"?new d.Promise(function(N,O){var E=new FileReader;E.onload=function(F){N(F.target.result)},E.onerror=function(F){O(F.target.error)},E.readAsArrayBuffer(C)}):C}).then(function(C){var N=w.getTypeOf(C);return N?(N==="arraybuffer"?C=w.transformTo("uint8array",C):N==="string"&&(x?C=r.decode(C):s&&m!==!0&&(C=(function(O){return k(O,c.uint8array?new Uint8Array(O.length):new Array(O.length))})(C))),C):d.Promise.reject(new Error("Can't read the data of '"+n+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(h,R,w){var c=h("./reader/readerFor"),r=h("./utils"),a=h("./signature"),d=h("./zipEntry"),v=h("./support");function k(g){this.files=[],this.loadOptions=g}k.prototype={checkSignature:function(g){if(!this.reader.readAndCheckSignature(g)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+r.pretty(b)+", expected "+r.pretty(g)+")")}},isSignature:function(g,b){var o=this.reader.index;this.reader.setIndex(g);var u=this.reader.readString(4)===b;return this.reader.setIndex(o),u},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var g=this.reader.readData(this.zipCommentLength),b=v.uint8array?"uint8array":"array",o=r.transformTo(b,g);this.zipComment=this.loadOptions.decodeFileName(o)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var g,b,o,u=this.zip64EndOfCentralSize-44;0<u;)g=this.reader.readInt(2),b=this.reader.readInt(4),o=this.reader.readData(b),this.zip64ExtensibleData[g]={id:g,length:b,value:o}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var g,b;for(g=0;g<this.files.length;g++)b=this.files[g],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var g;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(g=new d({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(g);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var g=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(g<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(g);var b=g;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===r.MAX_VALUE_16BITS||this.diskWithCentralDirStart===r.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===r.MAX_VALUE_16BITS||this.centralDirRecords===r.MAX_VALUE_16BITS||this.centralDirSize===r.MAX_VALUE_32BITS||this.centralDirOffset===r.MAX_VALUE_32BITS){if(this.zip64=!0,(g=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(g),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var o=this.centralDirOffset+this.centralDirSize;this.zip64&&(o+=20,o+=12+this.zip64EndOfCentralSize);var u=b-o;if(0<u)this.isSignature(b,a.CENTRAL_FILE_HEADER)||(this.reader.zero=u);else if(u<0)throw new Error("Corrupted zip: missing "+Math.abs(u)+" bytes.")},prepareReader:function(g){this.reader=c(g)},load:function(g){this.prepareReader(g),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},R.exports=k},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(h,R,w){var c=h("./reader/readerFor"),r=h("./utils"),a=h("./compressedObject"),d=h("./crc32"),v=h("./utf8"),k=h("./compressions"),g=h("./support");function b(o,u){this.options=o,this.loadOptions=u}b.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(o){var u,n;if(o.skip(22),this.fileNameLength=o.readInt(2),n=o.readInt(2),this.fileName=o.readData(this.fileNameLength),o.skip(n),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((u=(function(l){for(var s in k)if(Object.prototype.hasOwnProperty.call(k,s)&&k[s].magic===l)return k[s];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+r.pretty(this.compressionMethod)+" unknown (inner file : "+r.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,u,o.readData(this.compressedSize))},readCentralPart:function(o){this.versionMadeBy=o.readInt(2),o.skip(2),this.bitFlag=o.readInt(2),this.compressionMethod=o.readString(2),this.date=o.readDate(),this.crc32=o.readInt(4),this.compressedSize=o.readInt(4),this.uncompressedSize=o.readInt(4);var u=o.readInt(2);if(this.extraFieldsLength=o.readInt(2),this.fileCommentLength=o.readInt(2),this.diskNumberStart=o.readInt(2),this.internalFileAttributes=o.readInt(2),this.externalFileAttributes=o.readInt(4),this.localHeaderOffset=o.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");o.skip(u),this.readExtraFields(o),this.parseZIP64ExtraField(o),this.fileComment=o.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var o=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),o==0&&(this.dosPermissions=63&this.externalFileAttributes),o==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var o=c(this.extraFields[1].value);this.uncompressedSize===r.MAX_VALUE_32BITS&&(this.uncompressedSize=o.readInt(8)),this.compressedSize===r.MAX_VALUE_32BITS&&(this.compressedSize=o.readInt(8)),this.localHeaderOffset===r.MAX_VALUE_32BITS&&(this.localHeaderOffset=o.readInt(8)),this.diskNumberStart===r.MAX_VALUE_32BITS&&(this.diskNumberStart=o.readInt(4))}},readExtraFields:function(o){var u,n,l,s=o.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});o.index+4<s;)u=o.readInt(2),n=o.readInt(2),l=o.readData(n),this.extraFields[u]={id:u,length:n,value:l};o.setIndex(s)},handleUTF8:function(){var o=g.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=v.utf8decode(this.fileName),this.fileCommentStr=v.utf8decode(this.fileComment);else{var u=this.findExtraFieldUnicodePath();if(u!==null)this.fileNameStr=u;else{var n=r.transformTo(o,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(n)}var l=this.findExtraFieldUnicodeComment();if(l!==null)this.fileCommentStr=l;else{var s=r.transformTo(o,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(s)}}},findExtraFieldUnicodePath:function(){var o=this.extraFields[28789];if(o){var u=c(o.value);return u.readInt(1)!==1||d(this.fileName)!==u.readInt(4)?null:v.utf8decode(u.readData(o.length-5))}return null},findExtraFieldUnicodeComment:function(){var o=this.extraFields[25461];if(o){var u=c(o.value);return u.readInt(1)!==1||d(this.fileComment)!==u.readInt(4)?null:v.utf8decode(u.readData(o.length-5))}return null}},R.exports=b},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(h,R,w){function c(u,n,l){this.name=u,this.dir=l.dir,this.date=l.date,this.comment=l.comment,this.unixPermissions=l.unixPermissions,this.dosPermissions=l.dosPermissions,this._data=n,this._dataBinary=l.binary,this.options={compression:l.compression,compressionOptions:l.compressionOptions}}var r=h("./stream/StreamHelper"),a=h("./stream/DataWorker"),d=h("./utf8"),v=h("./compressedObject"),k=h("./stream/GenericWorker");c.prototype={internalStream:function(u){var n=null,l="string";try{if(!u)throw new Error("No output type specified.");var s=(l=u.toLowerCase())==="string"||l==="text";l!=="binarystring"&&l!=="text"||(l="string"),n=this._decompressWorker();var m=!this._dataBinary;m&&!s&&(n=n.pipe(new d.Utf8EncodeWorker)),!m&&s&&(n=n.pipe(new d.Utf8DecodeWorker))}catch(x){(n=new k("error")).error(x)}return new r(n,l,"")},async:function(u,n){return this.internalStream(u).accumulate(n)},nodeStream:function(u,n){return this.internalStream(u||"nodebuffer").toNodejsStream(n)},_compressWorker:function(u,n){if(this._data instanceof v&&this._data.compression.magic===u.magic)return this._data.getCompressedWorker();var l=this._decompressWorker();return this._dataBinary||(l=l.pipe(new d.Utf8EncodeWorker)),v.createWorkerFrom(l,u,n)},_decompressWorker:function(){return this._data instanceof v?this._data.getContentWorker():this._data instanceof k?this._data:new a(this._data)}};for(var g=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],b=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},o=0;o<g.length;o++)c.prototype[g[o]]=b;R.exports=c},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(h,R,w){(function(c){var r,a,d=c.MutationObserver||c.WebKitMutationObserver;if(d){var v=0,k=new d(u),g=c.document.createTextNode("");k.observe(g,{characterData:!0}),r=function(){g.data=v=++v%2}}else if(c.setImmediate||c.MessageChannel===void 0)r="document"in c&&"onreadystatechange"in c.document.createElement("script")?function(){var n=c.document.createElement("script");n.onreadystatechange=function(){u(),n.onreadystatechange=null,n.parentNode.removeChild(n),n=null},c.document.documentElement.appendChild(n)}:function(){setTimeout(u,0)};else{var b=new c.MessageChannel;b.port1.onmessage=u,r=function(){b.port2.postMessage(0)}}var o=[];function u(){var n,l;a=!0;for(var s=o.length;s;){for(l=o,o=[],n=-1;++n<s;)l[n]();s=o.length}a=!1}R.exports=function(n){o.push(n)!==1||a||r()}}).call(this,typeof ke<"u"?ke:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(h,R,w){var c=h("immediate");function r(){}var a={},d=["REJECTED"],v=["FULFILLED"],k=["PENDING"];function g(s){if(typeof s!="function")throw new TypeError("resolver must be a function");this.state=k,this.queue=[],this.outcome=void 0,s!==r&&n(this,s)}function b(s,m,x){this.promise=s,typeof m=="function"&&(this.onFulfilled=m,this.callFulfilled=this.otherCallFulfilled),typeof x=="function"&&(this.onRejected=x,this.callRejected=this.otherCallRejected)}function o(s,m,x){c(function(){var C;try{C=m(x)}catch(N){return a.reject(s,N)}C===s?a.reject(s,new TypeError("Cannot resolve promise with itself")):a.resolve(s,C)})}function u(s){var m=s&&s.then;if(s&&(typeof s=="object"||typeof s=="function")&&typeof m=="function")return function(){m.apply(s,arguments)}}function n(s,m){var x=!1;function C(E){x||(x=!0,a.reject(s,E))}function N(E){x||(x=!0,a.resolve(s,E))}var O=l(function(){m(N,C)});O.status==="error"&&C(O.value)}function l(s,m){var x={};try{x.value=s(m),x.status="success"}catch(C){x.status="error",x.value=C}return x}(R.exports=g).prototype.finally=function(s){if(typeof s!="function")return this;var m=this.constructor;return this.then(function(x){return m.resolve(s()).then(function(){return x})},function(x){return m.resolve(s()).then(function(){throw x})})},g.prototype.catch=function(s){return this.then(null,s)},g.prototype.then=function(s,m){if(typeof s!="function"&&this.state===v||typeof m!="function"&&this.state===d)return this;var x=new this.constructor(r);return this.state!==k?o(x,this.state===v?s:m,this.outcome):this.queue.push(new b(x,s,m)),x},b.prototype.callFulfilled=function(s){a.resolve(this.promise,s)},b.prototype.otherCallFulfilled=function(s){o(this.promise,this.onFulfilled,s)},b.prototype.callRejected=function(s){a.reject(this.promise,s)},b.prototype.otherCallRejected=function(s){o(this.promise,this.onRejected,s)},a.resolve=function(s,m){var x=l(u,m);if(x.status==="error")return a.reject(s,x.value);var C=x.value;if(C)n(s,C);else{s.state=v,s.outcome=m;for(var N=-1,O=s.queue.length;++N<O;)s.queue[N].callFulfilled(m)}return s},a.reject=function(s,m){s.state=d,s.outcome=m;for(var x=-1,C=s.queue.length;++x<C;)s.queue[x].callRejected(m);return s},g.resolve=function(s){return s instanceof this?s:a.resolve(new this(r),s)},g.reject=function(s){var m=new this(r);return a.reject(m,s)},g.all=function(s){var m=this;if(Object.prototype.toString.call(s)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=s.length,C=!1;if(!x)return this.resolve([]);for(var N=new Array(x),O=0,E=-1,F=new this(r);++E<x;)A(s[E],E);return F;function A(q,K){m.resolve(q).then(function(f){N[K]=f,++O!==x||C||(C=!0,a.resolve(F,N))},function(f){C||(C=!0,a.reject(F,f))})}},g.race=function(s){var m=this;if(Object.prototype.toString.call(s)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=s.length,C=!1;if(!x)return this.resolve([]);for(var N=-1,O=new this(r);++N<x;)E=s[N],m.resolve(E).then(function(F){C||(C=!0,a.resolve(O,F))},function(F){C||(C=!0,a.reject(O,F))});var E;return O}},{immediate:36}],38:[function(h,R,w){var c={};(0,h("./lib/utils/common").assign)(c,h("./lib/deflate"),h("./lib/inflate"),h("./lib/zlib/constants")),R.exports=c},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(h,R,w){var c=h("./zlib/deflate"),r=h("./utils/common"),a=h("./utils/strings"),d=h("./zlib/messages"),v=h("./zlib/zstream"),k=Object.prototype.toString,g=0,b=-1,o=0,u=8;function n(s){if(!(this instanceof n))return new n(s);this.options=r.assign({level:b,method:u,chunkSize:16384,windowBits:15,memLevel:8,strategy:o,to:""},s||{});var m=this.options;m.raw&&0<m.windowBits?m.windowBits=-m.windowBits:m.gzip&&0<m.windowBits&&m.windowBits<16&&(m.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new v,this.strm.avail_out=0;var x=c.deflateInit2(this.strm,m.level,m.method,m.windowBits,m.memLevel,m.strategy);if(x!==g)throw new Error(d[x]);if(m.header&&c.deflateSetHeader(this.strm,m.header),m.dictionary){var C;if(C=typeof m.dictionary=="string"?a.string2buf(m.dictionary):k.call(m.dictionary)==="[object ArrayBuffer]"?new Uint8Array(m.dictionary):m.dictionary,(x=c.deflateSetDictionary(this.strm,C))!==g)throw new Error(d[x]);this._dict_set=!0}}function l(s,m){var x=new n(m);if(x.push(s,!0),x.err)throw x.msg||d[x.err];return x.result}n.prototype.push=function(s,m){var x,C,N=this.strm,O=this.options.chunkSize;if(this.ended)return!1;C=m===~~m?m:m===!0?4:0,typeof s=="string"?N.input=a.string2buf(s):k.call(s)==="[object ArrayBuffer]"?N.input=new Uint8Array(s):N.input=s,N.next_in=0,N.avail_in=N.input.length;do{if(N.avail_out===0&&(N.output=new r.Buf8(O),N.next_out=0,N.avail_out=O),(x=c.deflate(N,C))!==1&&x!==g)return this.onEnd(x),!(this.ended=!0);N.avail_out!==0&&(N.avail_in!==0||C!==4&&C!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(r.shrinkBuf(N.output,N.next_out))):this.onData(r.shrinkBuf(N.output,N.next_out)))}while((0<N.avail_in||N.avail_out===0)&&x!==1);return C===4?(x=c.deflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===g):C!==2||(this.onEnd(g),!(N.avail_out=0))},n.prototype.onData=function(s){this.chunks.push(s)},n.prototype.onEnd=function(s){s===g&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=r.flattenChunks(this.chunks)),this.chunks=[],this.err=s,this.msg=this.strm.msg},w.Deflate=n,w.deflate=l,w.deflateRaw=function(s,m){return(m=m||{}).raw=!0,l(s,m)},w.gzip=function(s,m){return(m=m||{}).gzip=!0,l(s,m)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(h,R,w){var c=h("./zlib/inflate"),r=h("./utils/common"),a=h("./utils/strings"),d=h("./zlib/constants"),v=h("./zlib/messages"),k=h("./zlib/zstream"),g=h("./zlib/gzheader"),b=Object.prototype.toString;function o(n){if(!(this instanceof o))return new o(n);this.options=r.assign({chunkSize:16384,windowBits:0,to:""},n||{});var l=this.options;l.raw&&0<=l.windowBits&&l.windowBits<16&&(l.windowBits=-l.windowBits,l.windowBits===0&&(l.windowBits=-15)),!(0<=l.windowBits&&l.windowBits<16)||n&&n.windowBits||(l.windowBits+=32),15<l.windowBits&&l.windowBits<48&&(15&l.windowBits)==0&&(l.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new k,this.strm.avail_out=0;var s=c.inflateInit2(this.strm,l.windowBits);if(s!==d.Z_OK)throw new Error(v[s]);this.header=new g,c.inflateGetHeader(this.strm,this.header)}function u(n,l){var s=new o(l);if(s.push(n,!0),s.err)throw s.msg||v[s.err];return s.result}o.prototype.push=function(n,l){var s,m,x,C,N,O,E=this.strm,F=this.options.chunkSize,A=this.options.dictionary,q=!1;if(this.ended)return!1;m=l===~~l?l:l===!0?d.Z_FINISH:d.Z_NO_FLUSH,typeof n=="string"?E.input=a.binstring2buf(n):b.call(n)==="[object ArrayBuffer]"?E.input=new Uint8Array(n):E.input=n,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new r.Buf8(F),E.next_out=0,E.avail_out=F),(s=c.inflate(E,d.Z_NO_FLUSH))===d.Z_NEED_DICT&&A&&(O=typeof A=="string"?a.string2buf(A):b.call(A)==="[object ArrayBuffer]"?new Uint8Array(A):A,s=c.inflateSetDictionary(this.strm,O)),s===d.Z_BUF_ERROR&&q===!0&&(s=d.Z_OK,q=!1),s!==d.Z_STREAM_END&&s!==d.Z_OK)return this.onEnd(s),!(this.ended=!0);E.next_out&&(E.avail_out!==0&&s!==d.Z_STREAM_END&&(E.avail_in!==0||m!==d.Z_FINISH&&m!==d.Z_SYNC_FLUSH)||(this.options.to==="string"?(x=a.utf8border(E.output,E.next_out),C=E.next_out-x,N=a.buf2string(E.output,x),E.next_out=C,E.avail_out=F-C,C&&r.arraySet(E.output,E.output,x,C,0),this.onData(N)):this.onData(r.shrinkBuf(E.output,E.next_out)))),E.avail_in===0&&E.avail_out===0&&(q=!0)}while((0<E.avail_in||E.avail_out===0)&&s!==d.Z_STREAM_END);return s===d.Z_STREAM_END&&(m=d.Z_FINISH),m===d.Z_FINISH?(s=c.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,s===d.Z_OK):m!==d.Z_SYNC_FLUSH||(this.onEnd(d.Z_OK),!(E.avail_out=0))},o.prototype.onData=function(n){this.chunks.push(n)},o.prototype.onEnd=function(n){n===d.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=r.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg},w.Inflate=o,w.inflate=u,w.inflateRaw=function(n,l){return(l=l||{}).raw=!0,u(n,l)},w.ungzip=u},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(h,R,w){var c=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";w.assign=function(d){for(var v=Array.prototype.slice.call(arguments,1);v.length;){var k=v.shift();if(k){if(typeof k!="object")throw new TypeError(k+"must be non-object");for(var g in k)k.hasOwnProperty(g)&&(d[g]=k[g])}}return d},w.shrinkBuf=function(d,v){return d.length===v?d:d.subarray?d.subarray(0,v):(d.length=v,d)};var r={arraySet:function(d,v,k,g,b){if(v.subarray&&d.subarray)d.set(v.subarray(k,k+g),b);else for(var o=0;o<g;o++)d[b+o]=v[k+o]},flattenChunks:function(d){var v,k,g,b,o,u;for(v=g=0,k=d.length;v<k;v++)g+=d[v].length;for(u=new Uint8Array(g),v=b=0,k=d.length;v<k;v++)o=d[v],u.set(o,b),b+=o.length;return u}},a={arraySet:function(d,v,k,g,b){for(var o=0;o<g;o++)d[b+o]=v[k+o]},flattenChunks:function(d){return[].concat.apply([],d)}};w.setTyped=function(d){d?(w.Buf8=Uint8Array,w.Buf16=Uint16Array,w.Buf32=Int32Array,w.assign(w,r)):(w.Buf8=Array,w.Buf16=Array,w.Buf32=Array,w.assign(w,a))},w.setTyped(c)},{}],42:[function(h,R,w){var c=h("./common"),r=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var d=new c.Buf8(256),v=0;v<256;v++)d[v]=252<=v?6:248<=v?5:240<=v?4:224<=v?3:192<=v?2:1;function k(g,b){if(b<65537&&(g.subarray&&a||!g.subarray&&r))return String.fromCharCode.apply(null,c.shrinkBuf(g,b));for(var o="",u=0;u<b;u++)o+=String.fromCharCode(g[u]);return o}d[254]=d[254]=1,w.string2buf=function(g){var b,o,u,n,l,s=g.length,m=0;for(n=0;n<s;n++)(64512&(o=g.charCodeAt(n)))==55296&&n+1<s&&(64512&(u=g.charCodeAt(n+1)))==56320&&(o=65536+(o-55296<<10)+(u-56320),n++),m+=o<128?1:o<2048?2:o<65536?3:4;for(b=new c.Buf8(m),n=l=0;l<m;n++)(64512&(o=g.charCodeAt(n)))==55296&&n+1<s&&(64512&(u=g.charCodeAt(n+1)))==56320&&(o=65536+(o-55296<<10)+(u-56320),n++),o<128?b[l++]=o:(o<2048?b[l++]=192|o>>>6:(o<65536?b[l++]=224|o>>>12:(b[l++]=240|o>>>18,b[l++]=128|o>>>12&63),b[l++]=128|o>>>6&63),b[l++]=128|63&o);return b},w.buf2binstring=function(g){return k(g,g.length)},w.binstring2buf=function(g){for(var b=new c.Buf8(g.length),o=0,u=b.length;o<u;o++)b[o]=g.charCodeAt(o);return b},w.buf2string=function(g,b){var o,u,n,l,s=b||g.length,m=new Array(2*s);for(o=u=0;o<s;)if((n=g[o++])<128)m[u++]=n;else if(4<(l=d[n]))m[u++]=65533,o+=l-1;else{for(n&=l===2?31:l===3?15:7;1<l&&o<s;)n=n<<6|63&g[o++],l--;1<l?m[u++]=65533:n<65536?m[u++]=n:(n-=65536,m[u++]=55296|n>>10&1023,m[u++]=56320|1023&n)}return k(m,u)},w.utf8border=function(g,b){var o;for((b=b||g.length)>g.length&&(b=g.length),o=b-1;0<=o&&(192&g[o])==128;)o--;return o<0||o===0?b:o+d[g[o]]>b?o:b}},{"./common":41}],43:[function(h,R,w){R.exports=function(c,r,a,d){for(var v=65535&c|0,k=c>>>16&65535|0,g=0;a!==0;){for(a-=g=2e3<a?2e3:a;k=k+(v=v+r[d++]|0)|0,--g;);v%=65521,k%=65521}return v|k<<16|0}},{}],44:[function(h,R,w){R.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(h,R,w){var c=(function(){for(var r,a=[],d=0;d<256;d++){r=d;for(var v=0;v<8;v++)r=1&r?3988292384^r>>>1:r>>>1;a[d]=r}return a})();R.exports=function(r,a,d,v){var k=c,g=v+d;r^=-1;for(var b=v;b<g;b++)r=r>>>8^k[255&(r^a[b])];return-1^r}},{}],46:[function(h,R,w){var c,r=h("../utils/common"),a=h("./trees"),d=h("./adler32"),v=h("./crc32"),k=h("./messages"),g=0,b=4,o=0,u=-2,n=-1,l=4,s=2,m=8,x=9,C=286,N=30,O=19,E=2*C+1,F=15,A=3,q=258,K=q+A+1,f=42,P=113,t=1,D=2,J=3,L=4;function Y(e,B){return e.msg=k[B],B}function j(e){return(e<<1)-(4<e?9:0)}function Q(e){for(var B=e.length;0<=--B;)e[B]=0}function I(e){var B=e.state,T=B.pending;T>e.avail_out&&(T=e.avail_out),T!==0&&(r.arraySet(e.output,B.pending_buf,B.pending_out,T,e.next_out),e.next_out+=T,B.pending_out+=T,e.total_out+=T,e.avail_out-=T,B.pending-=T,B.pending===0&&(B.pending_out=0))}function _(e,B){a._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,B),e.block_start=e.strstart,I(e.strm)}function Z(e,B){e.pending_buf[e.pending++]=B}function G(e,B){e.pending_buf[e.pending++]=B>>>8&255,e.pending_buf[e.pending++]=255&B}function V(e,B){var T,p,i=e.max_chain_length,y=e.strstart,M=e.prev_length,z=e.nice_match,S=e.strstart>e.w_size-K?e.strstart-(e.w_size-K):0,$=e.window,W=e.w_mask,U=e.prev,H=e.strstart+q,ne=$[y+M-1],ee=$[y+M];e.prev_length>=e.good_match&&(i>>=2),z>e.lookahead&&(z=e.lookahead);do if($[(T=B)+M]===ee&&$[T+M-1]===ne&&$[T]===$[y]&&$[++T]===$[y+1]){y+=2,T++;do;while($[++y]===$[++T]&&$[++y]===$[++T]&&$[++y]===$[++T]&&$[++y]===$[++T]&&$[++y]===$[++T]&&$[++y]===$[++T]&&$[++y]===$[++T]&&$[++y]===$[++T]&&y<H);if(p=q-(H-y),y=H-q,M<p){if(e.match_start=B,z<=(M=p))break;ne=$[y+M-1],ee=$[y+M]}}while((B=U[B&W])>S&&--i!=0);return M<=e.lookahead?M:e.lookahead}function ae(e){var B,T,p,i,y,M,z,S,$,W,U=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=U+(U-K)){for(r.arraySet(e.window,e.window,U,U,0),e.match_start-=U,e.strstart-=U,e.block_start-=U,B=T=e.hash_size;p=e.head[--B],e.head[B]=U<=p?p-U:0,--T;);for(B=T=U;p=e.prev[--B],e.prev[B]=U<=p?p-U:0,--T;);i+=U}if(e.strm.avail_in===0)break;if(M=e.strm,z=e.window,S=e.strstart+e.lookahead,$=i,W=void 0,W=M.avail_in,$<W&&(W=$),T=W===0?0:(M.avail_in-=W,r.arraySet(z,M.input,M.next_in,W,S),M.state.wrap===1?M.adler=d(M.adler,z,W,S):M.state.wrap===2&&(M.adler=v(M.adler,z,W,S)),M.next_in+=W,M.total_in+=W,W),e.lookahead+=T,e.lookahead+e.insert>=A)for(y=e.strstart-e.insert,e.ins_h=e.window[y],e.ins_h=(e.ins_h<<e.hash_shift^e.window[y+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[y+A-1])&e.hash_mask,e.prev[y&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=y,y++,e.insert--,!(e.lookahead+e.insert<A)););}while(e.lookahead<K&&e.strm.avail_in!==0)}function re(e,B){for(var T,p;;){if(e.lookahead<K){if(ae(e),e.lookahead<K&&B===g)return t;if(e.lookahead===0)break}if(T=0,e.lookahead>=A&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+A-1])&e.hash_mask,T=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),T!==0&&e.strstart-T<=e.w_size-K&&(e.match_length=V(e,T)),e.match_length>=A)if(p=a._tr_tally(e,e.strstart-e.match_start,e.match_length-A),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=A){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+A-1])&e.hash_mask,T=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,--e.match_length!=0;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else p=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(p&&(_(e,!1),e.strm.avail_out===0))return t}return e.insert=e.strstart<A-1?e.strstart:A-1,B===b?(_(e,!0),e.strm.avail_out===0?J:L):e.last_lit&&(_(e,!1),e.strm.avail_out===0)?t:D}function X(e,B){for(var T,p,i;;){if(e.lookahead<K){if(ae(e),e.lookahead<K&&B===g)return t;if(e.lookahead===0)break}if(T=0,e.lookahead>=A&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+A-1])&e.hash_mask,T=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=A-1,T!==0&&e.prev_length<e.max_lazy_match&&e.strstart-T<=e.w_size-K&&(e.match_length=V(e,T),e.match_length<=5&&(e.strategy===1||e.match_length===A&&4096<e.strstart-e.match_start)&&(e.match_length=A-1)),e.prev_length>=A&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-A,p=a._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-A),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+A-1])&e.hash_mask,T=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),--e.prev_length!=0;);if(e.match_available=0,e.match_length=A-1,e.strstart++,p&&(_(e,!1),e.strm.avail_out===0))return t}else if(e.match_available){if((p=a._tr_tally(e,0,e.window[e.strstart-1]))&&_(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return t}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(p=a._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<A-1?e.strstart:A-1,B===b?(_(e,!0),e.strm.avail_out===0?J:L):e.last_lit&&(_(e,!1),e.strm.avail_out===0)?t:D}function te(e,B,T,p,i){this.good_length=e,this.max_lazy=B,this.nice_length=T,this.max_chain=p,this.func=i}function ie(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=m,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new r.Buf16(2*E),this.dyn_dtree=new r.Buf16(2*(2*N+1)),this.bl_tree=new r.Buf16(2*(2*O+1)),Q(this.dyn_ltree),Q(this.dyn_dtree),Q(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new r.Buf16(F+1),this.heap=new r.Buf16(2*C+1),Q(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new r.Buf16(2*C+1),Q(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function oe(e){var B;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=s,(B=e.state).pending=0,B.pending_out=0,B.wrap<0&&(B.wrap=-B.wrap),B.status=B.wrap?f:P,e.adler=B.wrap===2?0:1,B.last_flush=g,a._tr_init(B),o):Y(e,u)}function ce(e){var B=oe(e);return B===o&&(function(T){T.window_size=2*T.w_size,Q(T.head),T.max_lazy_match=c[T.level].max_lazy,T.good_match=c[T.level].good_length,T.nice_match=c[T.level].nice_length,T.max_chain_length=c[T.level].max_chain,T.strstart=0,T.block_start=0,T.lookahead=0,T.insert=0,T.match_length=T.prev_length=A-1,T.match_available=0,T.ins_h=0})(e.state),B}function le(e,B,T,p,i,y){if(!e)return u;var M=1;if(B===n&&(B=6),p<0?(M=0,p=-p):15<p&&(M=2,p-=16),i<1||x<i||T!==m||p<8||15<p||B<0||9<B||y<0||l<y)return Y(e,u);p===8&&(p=9);var z=new ie;return(e.state=z).strm=e,z.wrap=M,z.gzhead=null,z.w_bits=p,z.w_size=1<<z.w_bits,z.w_mask=z.w_size-1,z.hash_bits=i+7,z.hash_size=1<<z.hash_bits,z.hash_mask=z.hash_size-1,z.hash_shift=~~((z.hash_bits+A-1)/A),z.window=new r.Buf8(2*z.w_size),z.head=new r.Buf16(z.hash_size),z.prev=new r.Buf16(z.w_size),z.lit_bufsize=1<<i+6,z.pending_buf_size=4*z.lit_bufsize,z.pending_buf=new r.Buf8(z.pending_buf_size),z.d_buf=1*z.lit_bufsize,z.l_buf=3*z.lit_bufsize,z.level=B,z.strategy=y,z.method=T,ce(e)}c=[new te(0,0,0,0,function(e,B){var T=65535;for(T>e.pending_buf_size-5&&(T=e.pending_buf_size-5);;){if(e.lookahead<=1){if(ae(e),e.lookahead===0&&B===g)return t;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var p=e.block_start+T;if((e.strstart===0||e.strstart>=p)&&(e.lookahead=e.strstart-p,e.strstart=p,_(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-K&&(_(e,!1),e.strm.avail_out===0))return t}return e.insert=0,B===b?(_(e,!0),e.strm.avail_out===0?J:L):(e.strstart>e.block_start&&(_(e,!1),e.strm.avail_out),t)}),new te(4,4,8,4,re),new te(4,5,16,8,re),new te(4,6,32,32,re),new te(4,4,16,16,X),new te(8,16,32,32,X),new te(8,16,128,128,X),new te(8,32,128,256,X),new te(32,128,258,1024,X),new te(32,258,258,4096,X)],w.deflateInit=function(e,B){return le(e,B,m,15,8,0)},w.deflateInit2=le,w.deflateReset=ce,w.deflateResetKeep=oe,w.deflateSetHeader=function(e,B){return e&&e.state?e.state.wrap!==2?u:(e.state.gzhead=B,o):u},w.deflate=function(e,B){var T,p,i,y;if(!e||!e.state||5<B||B<0)return e?Y(e,u):u;if(p=e.state,!e.output||!e.input&&e.avail_in!==0||p.status===666&&B!==b)return Y(e,e.avail_out===0?-5:u);if(p.strm=e,T=p.last_flush,p.last_flush=B,p.status===f)if(p.wrap===2)e.adler=0,Z(p,31),Z(p,139),Z(p,8),p.gzhead?(Z(p,(p.gzhead.text?1:0)+(p.gzhead.hcrc?2:0)+(p.gzhead.extra?4:0)+(p.gzhead.name?8:0)+(p.gzhead.comment?16:0)),Z(p,255&p.gzhead.time),Z(p,p.gzhead.time>>8&255),Z(p,p.gzhead.time>>16&255),Z(p,p.gzhead.time>>24&255),Z(p,p.level===9?2:2<=p.strategy||p.level<2?4:0),Z(p,255&p.gzhead.os),p.gzhead.extra&&p.gzhead.extra.length&&(Z(p,255&p.gzhead.extra.length),Z(p,p.gzhead.extra.length>>8&255)),p.gzhead.hcrc&&(e.adler=v(e.adler,p.pending_buf,p.pending,0)),p.gzindex=0,p.status=69):(Z(p,0),Z(p,0),Z(p,0),Z(p,0),Z(p,0),Z(p,p.level===9?2:2<=p.strategy||p.level<2?4:0),Z(p,3),p.status=P);else{var M=m+(p.w_bits-8<<4)<<8;M|=(2<=p.strategy||p.level<2?0:p.level<6?1:p.level===6?2:3)<<6,p.strstart!==0&&(M|=32),M+=31-M%31,p.status=P,G(p,M),p.strstart!==0&&(G(p,e.adler>>>16),G(p,65535&e.adler)),e.adler=1}if(p.status===69)if(p.gzhead.extra){for(i=p.pending;p.gzindex<(65535&p.gzhead.extra.length)&&(p.pending!==p.pending_buf_size||(p.gzhead.hcrc&&p.pending>i&&(e.adler=v(e.adler,p.pending_buf,p.pending-i,i)),I(e),i=p.pending,p.pending!==p.pending_buf_size));)Z(p,255&p.gzhead.extra[p.gzindex]),p.gzindex++;p.gzhead.hcrc&&p.pending>i&&(e.adler=v(e.adler,p.pending_buf,p.pending-i,i)),p.gzindex===p.gzhead.extra.length&&(p.gzindex=0,p.status=73)}else p.status=73;if(p.status===73)if(p.gzhead.name){i=p.pending;do{if(p.pending===p.pending_buf_size&&(p.gzhead.hcrc&&p.pending>i&&(e.adler=v(e.adler,p.pending_buf,p.pending-i,i)),I(e),i=p.pending,p.pending===p.pending_buf_size)){y=1;break}y=p.gzindex<p.gzhead.name.length?255&p.gzhead.name.charCodeAt(p.gzindex++):0,Z(p,y)}while(y!==0);p.gzhead.hcrc&&p.pending>i&&(e.adler=v(e.adler,p.pending_buf,p.pending-i,i)),y===0&&(p.gzindex=0,p.status=91)}else p.status=91;if(p.status===91)if(p.gzhead.comment){i=p.pending;do{if(p.pending===p.pending_buf_size&&(p.gzhead.hcrc&&p.pending>i&&(e.adler=v(e.adler,p.pending_buf,p.pending-i,i)),I(e),i=p.pending,p.pending===p.pending_buf_size)){y=1;break}y=p.gzindex<p.gzhead.comment.length?255&p.gzhead.comment.charCodeAt(p.gzindex++):0,Z(p,y)}while(y!==0);p.gzhead.hcrc&&p.pending>i&&(e.adler=v(e.adler,p.pending_buf,p.pending-i,i)),y===0&&(p.status=103)}else p.status=103;if(p.status===103&&(p.gzhead.hcrc?(p.pending+2>p.pending_buf_size&&I(e),p.pending+2<=p.pending_buf_size&&(Z(p,255&e.adler),Z(p,e.adler>>8&255),e.adler=0,p.status=P)):p.status=P),p.pending!==0){if(I(e),e.avail_out===0)return p.last_flush=-1,o}else if(e.avail_in===0&&j(B)<=j(T)&&B!==b)return Y(e,-5);if(p.status===666&&e.avail_in!==0)return Y(e,-5);if(e.avail_in!==0||p.lookahead!==0||B!==g&&p.status!==666){var z=p.strategy===2?(function(S,$){for(var W;;){if(S.lookahead===0&&(ae(S),S.lookahead===0)){if($===g)return t;break}if(S.match_length=0,W=a._tr_tally(S,0,S.window[S.strstart]),S.lookahead--,S.strstart++,W&&(_(S,!1),S.strm.avail_out===0))return t}return S.insert=0,$===b?(_(S,!0),S.strm.avail_out===0?J:L):S.last_lit&&(_(S,!1),S.strm.avail_out===0)?t:D})(p,B):p.strategy===3?(function(S,$){for(var W,U,H,ne,ee=S.window;;){if(S.lookahead<=q){if(ae(S),S.lookahead<=q&&$===g)return t;if(S.lookahead===0)break}if(S.match_length=0,S.lookahead>=A&&0<S.strstart&&(U=ee[H=S.strstart-1])===ee[++H]&&U===ee[++H]&&U===ee[++H]){ne=S.strstart+q;do;while(U===ee[++H]&&U===ee[++H]&&U===ee[++H]&&U===ee[++H]&&U===ee[++H]&&U===ee[++H]&&U===ee[++H]&&U===ee[++H]&&H<ne);S.match_length=q-(ne-H),S.match_length>S.lookahead&&(S.match_length=S.lookahead)}if(S.match_length>=A?(W=a._tr_tally(S,1,S.match_length-A),S.lookahead-=S.match_length,S.strstart+=S.match_length,S.match_length=0):(W=a._tr_tally(S,0,S.window[S.strstart]),S.lookahead--,S.strstart++),W&&(_(S,!1),S.strm.avail_out===0))return t}return S.insert=0,$===b?(_(S,!0),S.strm.avail_out===0?J:L):S.last_lit&&(_(S,!1),S.strm.avail_out===0)?t:D})(p,B):c[p.level].func(p,B);if(z!==J&&z!==L||(p.status=666),z===t||z===J)return e.avail_out===0&&(p.last_flush=-1),o;if(z===D&&(B===1?a._tr_align(p):B!==5&&(a._tr_stored_block(p,0,0,!1),B===3&&(Q(p.head),p.lookahead===0&&(p.strstart=0,p.block_start=0,p.insert=0))),I(e),e.avail_out===0))return p.last_flush=-1,o}return B!==b?o:p.wrap<=0?1:(p.wrap===2?(Z(p,255&e.adler),Z(p,e.adler>>8&255),Z(p,e.adler>>16&255),Z(p,e.adler>>24&255),Z(p,255&e.total_in),Z(p,e.total_in>>8&255),Z(p,e.total_in>>16&255),Z(p,e.total_in>>24&255)):(G(p,e.adler>>>16),G(p,65535&e.adler)),I(e),0<p.wrap&&(p.wrap=-p.wrap),p.pending!==0?o:1)},w.deflateEnd=function(e){var B;return e&&e.state?(B=e.state.status)!==f&&B!==69&&B!==73&&B!==91&&B!==103&&B!==P&&B!==666?Y(e,u):(e.state=null,B===P?Y(e,-3):o):u},w.deflateSetDictionary=function(e,B){var T,p,i,y,M,z,S,$,W=B.length;if(!e||!e.state||(y=(T=e.state).wrap)===2||y===1&&T.status!==f||T.lookahead)return u;for(y===1&&(e.adler=d(e.adler,B,W,0)),T.wrap=0,W>=T.w_size&&(y===0&&(Q(T.head),T.strstart=0,T.block_start=0,T.insert=0),$=new r.Buf8(T.w_size),r.arraySet($,B,W-T.w_size,T.w_size,0),B=$,W=T.w_size),M=e.avail_in,z=e.next_in,S=e.input,e.avail_in=W,e.next_in=0,e.input=B,ae(T);T.lookahead>=A;){for(p=T.strstart,i=T.lookahead-(A-1);T.ins_h=(T.ins_h<<T.hash_shift^T.window[p+A-1])&T.hash_mask,T.prev[p&T.w_mask]=T.head[T.ins_h],T.head[T.ins_h]=p,p++,--i;);T.strstart=p,T.lookahead=A-1,ae(T)}return T.strstart+=T.lookahead,T.block_start=T.strstart,T.insert=T.lookahead,T.lookahead=0,T.match_length=T.prev_length=A-1,T.match_available=0,e.next_in=z,e.input=S,e.avail_in=M,T.wrap=y,o},w.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(h,R,w){R.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(h,R,w){R.exports=function(c,r){var a,d,v,k,g,b,o,u,n,l,s,m,x,C,N,O,E,F,A,q,K,f,P,t,D;a=c.state,d=c.next_in,t=c.input,v=d+(c.avail_in-5),k=c.next_out,D=c.output,g=k-(r-c.avail_out),b=k+(c.avail_out-257),o=a.dmax,u=a.wsize,n=a.whave,l=a.wnext,s=a.window,m=a.hold,x=a.bits,C=a.lencode,N=a.distcode,O=(1<<a.lenbits)-1,E=(1<<a.distbits)-1;e:do{x<15&&(m+=t[d++]<<x,x+=8,m+=t[d++]<<x,x+=8),F=C[m&O];t:for(;;){if(m>>>=A=F>>>24,x-=A,(A=F>>>16&255)===0)D[k++]=65535&F;else{if(!(16&A)){if((64&A)==0){F=C[(65535&F)+(m&(1<<A)-1)];continue t}if(32&A){a.mode=12;break e}c.msg="invalid literal/length code",a.mode=30;break e}q=65535&F,(A&=15)&&(x<A&&(m+=t[d++]<<x,x+=8),q+=m&(1<<A)-1,m>>>=A,x-=A),x<15&&(m+=t[d++]<<x,x+=8,m+=t[d++]<<x,x+=8),F=N[m&E];n:for(;;){if(m>>>=A=F>>>24,x-=A,!(16&(A=F>>>16&255))){if((64&A)==0){F=N[(65535&F)+(m&(1<<A)-1)];continue n}c.msg="invalid distance code",a.mode=30;break e}if(K=65535&F,x<(A&=15)&&(m+=t[d++]<<x,(x+=8)<A&&(m+=t[d++]<<x,x+=8)),o<(K+=m&(1<<A)-1)){c.msg="invalid distance too far back",a.mode=30;break e}if(m>>>=A,x-=A,(A=k-g)<K){if(n<(A=K-A)&&a.sane){c.msg="invalid distance too far back",a.mode=30;break e}if(P=s,(f=0)===l){if(f+=u-A,A<q){for(q-=A;D[k++]=s[f++],--A;);f=k-K,P=D}}else if(l<A){if(f+=u+l-A,(A-=l)<q){for(q-=A;D[k++]=s[f++],--A;);if(f=0,l<q){for(q-=A=l;D[k++]=s[f++],--A;);f=k-K,P=D}}}else if(f+=l-A,A<q){for(q-=A;D[k++]=s[f++],--A;);f=k-K,P=D}for(;2<q;)D[k++]=P[f++],D[k++]=P[f++],D[k++]=P[f++],q-=3;q&&(D[k++]=P[f++],1<q&&(D[k++]=P[f++]))}else{for(f=k-K;D[k++]=D[f++],D[k++]=D[f++],D[k++]=D[f++],2<(q-=3););q&&(D[k++]=D[f++],1<q&&(D[k++]=D[f++]))}break}}break}}while(d<v&&k<b);d-=q=x>>3,m&=(1<<(x-=q<<3))-1,c.next_in=d,c.next_out=k,c.avail_in=d<v?v-d+5:5-(d-v),c.avail_out=k<b?b-k+257:257-(k-b),a.hold=m,a.bits=x}},{}],49:[function(h,R,w){var c=h("../utils/common"),r=h("./adler32"),a=h("./crc32"),d=h("./inffast"),v=h("./inftrees"),k=1,g=2,b=0,o=-2,u=1,n=852,l=592;function s(f){return(f>>>24&255)+(f>>>8&65280)+((65280&f)<<8)+((255&f)<<24)}function m(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new c.Buf16(320),this.work=new c.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x(f){var P;return f&&f.state?(P=f.state,f.total_in=f.total_out=P.total=0,f.msg="",P.wrap&&(f.adler=1&P.wrap),P.mode=u,P.last=0,P.havedict=0,P.dmax=32768,P.head=null,P.hold=0,P.bits=0,P.lencode=P.lendyn=new c.Buf32(n),P.distcode=P.distdyn=new c.Buf32(l),P.sane=1,P.back=-1,b):o}function C(f){var P;return f&&f.state?((P=f.state).wsize=0,P.whave=0,P.wnext=0,x(f)):o}function N(f,P){var t,D;return f&&f.state?(D=f.state,P<0?(t=0,P=-P):(t=1+(P>>4),P<48&&(P&=15)),P&&(P<8||15<P)?o:(D.window!==null&&D.wbits!==P&&(D.window=null),D.wrap=t,D.wbits=P,C(f))):o}function O(f,P){var t,D;return f?(D=new m,(f.state=D).window=null,(t=N(f,P))!==b&&(f.state=null),t):o}var E,F,A=!0;function q(f){if(A){var P;for(E=new c.Buf32(512),F=new c.Buf32(32),P=0;P<144;)f.lens[P++]=8;for(;P<256;)f.lens[P++]=9;for(;P<280;)f.lens[P++]=7;for(;P<288;)f.lens[P++]=8;for(v(k,f.lens,0,288,E,0,f.work,{bits:9}),P=0;P<32;)f.lens[P++]=5;v(g,f.lens,0,32,F,0,f.work,{bits:5}),A=!1}f.lencode=E,f.lenbits=9,f.distcode=F,f.distbits=5}function K(f,P,t,D){var J,L=f.state;return L.window===null&&(L.wsize=1<<L.wbits,L.wnext=0,L.whave=0,L.window=new c.Buf8(L.wsize)),D>=L.wsize?(c.arraySet(L.window,P,t-L.wsize,L.wsize,0),L.wnext=0,L.whave=L.wsize):(D<(J=L.wsize-L.wnext)&&(J=D),c.arraySet(L.window,P,t-D,J,L.wnext),(D-=J)?(c.arraySet(L.window,P,t-D,D,0),L.wnext=D,L.whave=L.wsize):(L.wnext+=J,L.wnext===L.wsize&&(L.wnext=0),L.whave<L.wsize&&(L.whave+=J))),0}w.inflateReset=C,w.inflateReset2=N,w.inflateResetKeep=x,w.inflateInit=function(f){return O(f,15)},w.inflateInit2=O,w.inflate=function(f,P){var t,D,J,L,Y,j,Q,I,_,Z,G,V,ae,re,X,te,ie,oe,ce,le,e,B,T,p,i=0,y=new c.Buf8(4),M=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!f||!f.state||!f.output||!f.input&&f.avail_in!==0)return o;(t=f.state).mode===12&&(t.mode=13),Y=f.next_out,J=f.output,Q=f.avail_out,L=f.next_in,D=f.input,j=f.avail_in,I=t.hold,_=t.bits,Z=j,G=Q,B=b;e:for(;;)switch(t.mode){case u:if(t.wrap===0){t.mode=13;break}for(;_<16;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}if(2&t.wrap&&I===35615){y[t.check=0]=255&I,y[1]=I>>>8&255,t.check=a(t.check,y,2,0),_=I=0,t.mode=2;break}if(t.flags=0,t.head&&(t.head.done=!1),!(1&t.wrap)||(((255&I)<<8)+(I>>8))%31){f.msg="incorrect header check",t.mode=30;break}if((15&I)!=8){f.msg="unknown compression method",t.mode=30;break}if(_-=4,e=8+(15&(I>>>=4)),t.wbits===0)t.wbits=e;else if(e>t.wbits){f.msg="invalid window size",t.mode=30;break}t.dmax=1<<e,f.adler=t.check=1,t.mode=512&I?10:12,_=I=0;break;case 2:for(;_<16;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}if(t.flags=I,(255&t.flags)!=8){f.msg="unknown compression method",t.mode=30;break}if(57344&t.flags){f.msg="unknown header flags set",t.mode=30;break}t.head&&(t.head.text=I>>8&1),512&t.flags&&(y[0]=255&I,y[1]=I>>>8&255,t.check=a(t.check,y,2,0)),_=I=0,t.mode=3;case 3:for(;_<32;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}t.head&&(t.head.time=I),512&t.flags&&(y[0]=255&I,y[1]=I>>>8&255,y[2]=I>>>16&255,y[3]=I>>>24&255,t.check=a(t.check,y,4,0)),_=I=0,t.mode=4;case 4:for(;_<16;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}t.head&&(t.head.xflags=255&I,t.head.os=I>>8),512&t.flags&&(y[0]=255&I,y[1]=I>>>8&255,t.check=a(t.check,y,2,0)),_=I=0,t.mode=5;case 5:if(1024&t.flags){for(;_<16;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}t.length=I,t.head&&(t.head.extra_len=I),512&t.flags&&(y[0]=255&I,y[1]=I>>>8&255,t.check=a(t.check,y,2,0)),_=I=0}else t.head&&(t.head.extra=null);t.mode=6;case 6:if(1024&t.flags&&(j<(V=t.length)&&(V=j),V&&(t.head&&(e=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Array(t.head.extra_len)),c.arraySet(t.head.extra,D,L,V,e)),512&t.flags&&(t.check=a(t.check,D,V,L)),j-=V,L+=V,t.length-=V),t.length))break e;t.length=0,t.mode=7;case 7:if(2048&t.flags){if(j===0)break e;for(V=0;e=D[L+V++],t.head&&e&&t.length<65536&&(t.head.name+=String.fromCharCode(e)),e&&V<j;);if(512&t.flags&&(t.check=a(t.check,D,V,L)),j-=V,L+=V,e)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=8;case 8:if(4096&t.flags){if(j===0)break e;for(V=0;e=D[L+V++],t.head&&e&&t.length<65536&&(t.head.comment+=String.fromCharCode(e)),e&&V<j;);if(512&t.flags&&(t.check=a(t.check,D,V,L)),j-=V,L+=V,e)break e}else t.head&&(t.head.comment=null);t.mode=9;case 9:if(512&t.flags){for(;_<16;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}if(I!==(65535&t.check)){f.msg="header crc mismatch",t.mode=30;break}_=I=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),f.adler=t.check=0,t.mode=12;break;case 10:for(;_<32;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}f.adler=t.check=s(I),_=I=0,t.mode=11;case 11:if(t.havedict===0)return f.next_out=Y,f.avail_out=Q,f.next_in=L,f.avail_in=j,t.hold=I,t.bits=_,2;f.adler=t.check=1,t.mode=12;case 12:if(P===5||P===6)break e;case 13:if(t.last){I>>>=7&_,_-=7&_,t.mode=27;break}for(;_<3;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}switch(t.last=1&I,_-=1,3&(I>>>=1)){case 0:t.mode=14;break;case 1:if(q(t),t.mode=20,P!==6)break;I>>>=2,_-=2;break e;case 2:t.mode=17;break;case 3:f.msg="invalid block type",t.mode=30}I>>>=2,_-=2;break;case 14:for(I>>>=7&_,_-=7&_;_<32;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}if((65535&I)!=(I>>>16^65535)){f.msg="invalid stored block lengths",t.mode=30;break}if(t.length=65535&I,_=I=0,t.mode=15,P===6)break e;case 15:t.mode=16;case 16:if(V=t.length){if(j<V&&(V=j),Q<V&&(V=Q),V===0)break e;c.arraySet(J,D,L,V,Y),j-=V,L+=V,Q-=V,Y+=V,t.length-=V;break}t.mode=12;break;case 17:for(;_<14;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}if(t.nlen=257+(31&I),I>>>=5,_-=5,t.ndist=1+(31&I),I>>>=5,_-=5,t.ncode=4+(15&I),I>>>=4,_-=4,286<t.nlen||30<t.ndist){f.msg="too many length or distance symbols",t.mode=30;break}t.have=0,t.mode=18;case 18:for(;t.have<t.ncode;){for(;_<3;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}t.lens[M[t.have++]]=7&I,I>>>=3,_-=3}for(;t.have<19;)t.lens[M[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,T={bits:t.lenbits},B=v(0,t.lens,0,19,t.lencode,0,t.work,T),t.lenbits=T.bits,B){f.msg="invalid code lengths set",t.mode=30;break}t.have=0,t.mode=19;case 19:for(;t.have<t.nlen+t.ndist;){for(;te=(i=t.lencode[I&(1<<t.lenbits)-1])>>>16&255,ie=65535&i,!((X=i>>>24)<=_);){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}if(ie<16)I>>>=X,_-=X,t.lens[t.have++]=ie;else{if(ie===16){for(p=X+2;_<p;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}if(I>>>=X,_-=X,t.have===0){f.msg="invalid bit length repeat",t.mode=30;break}e=t.lens[t.have-1],V=3+(3&I),I>>>=2,_-=2}else if(ie===17){for(p=X+3;_<p;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}_-=X,e=0,V=3+(7&(I>>>=X)),I>>>=3,_-=3}else{for(p=X+7;_<p;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}_-=X,e=0,V=11+(127&(I>>>=X)),I>>>=7,_-=7}if(t.have+V>t.nlen+t.ndist){f.msg="invalid bit length repeat",t.mode=30;break}for(;V--;)t.lens[t.have++]=e}}if(t.mode===30)break;if(t.lens[256]===0){f.msg="invalid code -- missing end-of-block",t.mode=30;break}if(t.lenbits=9,T={bits:t.lenbits},B=v(k,t.lens,0,t.nlen,t.lencode,0,t.work,T),t.lenbits=T.bits,B){f.msg="invalid literal/lengths set",t.mode=30;break}if(t.distbits=6,t.distcode=t.distdyn,T={bits:t.distbits},B=v(g,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,T),t.distbits=T.bits,B){f.msg="invalid distances set",t.mode=30;break}if(t.mode=20,P===6)break e;case 20:t.mode=21;case 21:if(6<=j&&258<=Q){f.next_out=Y,f.avail_out=Q,f.next_in=L,f.avail_in=j,t.hold=I,t.bits=_,d(f,G),Y=f.next_out,J=f.output,Q=f.avail_out,L=f.next_in,D=f.input,j=f.avail_in,I=t.hold,_=t.bits,t.mode===12&&(t.back=-1);break}for(t.back=0;te=(i=t.lencode[I&(1<<t.lenbits)-1])>>>16&255,ie=65535&i,!((X=i>>>24)<=_);){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}if(te&&(240&te)==0){for(oe=X,ce=te,le=ie;te=(i=t.lencode[le+((I&(1<<oe+ce)-1)>>oe)])>>>16&255,ie=65535&i,!(oe+(X=i>>>24)<=_);){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}I>>>=oe,_-=oe,t.back+=oe}if(I>>>=X,_-=X,t.back+=X,t.length=ie,te===0){t.mode=26;break}if(32&te){t.back=-1,t.mode=12;break}if(64&te){f.msg="invalid literal/length code",t.mode=30;break}t.extra=15&te,t.mode=22;case 22:if(t.extra){for(p=t.extra;_<p;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}t.length+=I&(1<<t.extra)-1,I>>>=t.extra,_-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=23;case 23:for(;te=(i=t.distcode[I&(1<<t.distbits)-1])>>>16&255,ie=65535&i,!((X=i>>>24)<=_);){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}if((240&te)==0){for(oe=X,ce=te,le=ie;te=(i=t.distcode[le+((I&(1<<oe+ce)-1)>>oe)])>>>16&255,ie=65535&i,!(oe+(X=i>>>24)<=_);){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}I>>>=oe,_-=oe,t.back+=oe}if(I>>>=X,_-=X,t.back+=X,64&te){f.msg="invalid distance code",t.mode=30;break}t.offset=ie,t.extra=15&te,t.mode=24;case 24:if(t.extra){for(p=t.extra;_<p;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}t.offset+=I&(1<<t.extra)-1,I>>>=t.extra,_-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){f.msg="invalid distance too far back",t.mode=30;break}t.mode=25;case 25:if(Q===0)break e;if(V=G-Q,t.offset>V){if((V=t.offset-V)>t.whave&&t.sane){f.msg="invalid distance too far back",t.mode=30;break}ae=V>t.wnext?(V-=t.wnext,t.wsize-V):t.wnext-V,V>t.length&&(V=t.length),re=t.window}else re=J,ae=Y-t.offset,V=t.length;for(Q<V&&(V=Q),Q-=V,t.length-=V;J[Y++]=re[ae++],--V;);t.length===0&&(t.mode=21);break;case 26:if(Q===0)break e;J[Y++]=t.length,Q--,t.mode=21;break;case 27:if(t.wrap){for(;_<32;){if(j===0)break e;j--,I|=D[L++]<<_,_+=8}if(G-=Q,f.total_out+=G,t.total+=G,G&&(f.adler=t.check=t.flags?a(t.check,J,G,Y-G):r(t.check,J,G,Y-G)),G=Q,(t.flags?I:s(I))!==t.check){f.msg="incorrect data check",t.mode=30;break}_=I=0}t.mode=28;case 28:if(t.wrap&&t.flags){for(;_<32;){if(j===0)break e;j--,I+=D[L++]<<_,_+=8}if(I!==(4294967295&t.total)){f.msg="incorrect length check",t.mode=30;break}_=I=0}t.mode=29;case 29:B=1;break e;case 30:B=-3;break e;case 31:return-4;case 32:default:return o}return f.next_out=Y,f.avail_out=Q,f.next_in=L,f.avail_in=j,t.hold=I,t.bits=_,(t.wsize||G!==f.avail_out&&t.mode<30&&(t.mode<27||P!==4))&&K(f,f.output,f.next_out,G-f.avail_out)?(t.mode=31,-4):(Z-=f.avail_in,G-=f.avail_out,f.total_in+=Z,f.total_out+=G,t.total+=G,t.wrap&&G&&(f.adler=t.check=t.flags?a(t.check,J,G,f.next_out-G):r(t.check,J,G,f.next_out-G)),f.data_type=t.bits+(t.last?64:0)+(t.mode===12?128:0)+(t.mode===20||t.mode===15?256:0),(Z==0&&G===0||P===4)&&B===b&&(B=-5),B)},w.inflateEnd=function(f){if(!f||!f.state)return o;var P=f.state;return P.window&&(P.window=null),f.state=null,b},w.inflateGetHeader=function(f,P){var t;return f&&f.state?(2&(t=f.state).wrap)==0?o:((t.head=P).done=!1,b):o},w.inflateSetDictionary=function(f,P){var t,D=P.length;return f&&f.state?(t=f.state).wrap!==0&&t.mode!==11?o:t.mode===11&&r(1,P,D,0)!==t.check?-3:K(f,P,D,D)?(t.mode=31,-4):(t.havedict=1,b):o},w.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(h,R,w){var c=h("../utils/common"),r=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],d=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],v=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];R.exports=function(k,g,b,o,u,n,l,s){var m,x,C,N,O,E,F,A,q,K=s.bits,f=0,P=0,t=0,D=0,J=0,L=0,Y=0,j=0,Q=0,I=0,_=null,Z=0,G=new c.Buf16(16),V=new c.Buf16(16),ae=null,re=0;for(f=0;f<=15;f++)G[f]=0;for(P=0;P<o;P++)G[g[b+P]]++;for(J=K,D=15;1<=D&&G[D]===0;D--);if(D<J&&(J=D),D===0)return u[n++]=20971520,u[n++]=20971520,s.bits=1,0;for(t=1;t<D&&G[t]===0;t++);for(J<t&&(J=t),f=j=1;f<=15;f++)if(j<<=1,(j-=G[f])<0)return-1;if(0<j&&(k===0||D!==1))return-1;for(V[1]=0,f=1;f<15;f++)V[f+1]=V[f]+G[f];for(P=0;P<o;P++)g[b+P]!==0&&(l[V[g[b+P]]++]=P);if(E=k===0?(_=ae=l,19):k===1?(_=r,Z-=257,ae=a,re-=257,256):(_=d,ae=v,-1),f=t,O=n,Y=P=I=0,C=-1,N=(Q=1<<(L=J))-1,k===1&&852<Q||k===2&&592<Q)return 1;for(;;){for(F=f-Y,q=l[P]<E?(A=0,l[P]):l[P]>E?(A=ae[re+l[P]],_[Z+l[P]]):(A=96,0),m=1<<f-Y,t=x=1<<L;u[O+(I>>Y)+(x-=m)]=F<<24|A<<16|q|0,x!==0;);for(m=1<<f-1;I&m;)m>>=1;if(m!==0?(I&=m-1,I+=m):I=0,P++,--G[f]==0){if(f===D)break;f=g[b+l[P]]}if(J<f&&(I&N)!==C){for(Y===0&&(Y=J),O+=t,j=1<<(L=f-Y);L+Y<D&&!((j-=G[L+Y])<=0);)L++,j<<=1;if(Q+=1<<L,k===1&&852<Q||k===2&&592<Q)return 1;u[C=I&N]=J<<24|L<<16|O-n|0}}return I!==0&&(u[O+I]=f-Y<<24|64<<16|0),s.bits=J,0}},{"../utils/common":41}],51:[function(h,R,w){R.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(h,R,w){var c=h("../utils/common"),r=0,a=1;function d(i){for(var y=i.length;0<=--y;)i[y]=0}var v=0,k=29,g=256,b=g+1+k,o=30,u=19,n=2*b+1,l=15,s=16,m=7,x=256,C=16,N=17,O=18,E=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],F=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],q=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],K=new Array(2*(b+2));d(K);var f=new Array(2*o);d(f);var P=new Array(512);d(P);var t=new Array(256);d(t);var D=new Array(k);d(D);var J,L,Y,j=new Array(o);function Q(i,y,M,z,S){this.static_tree=i,this.extra_bits=y,this.extra_base=M,this.elems=z,this.max_length=S,this.has_stree=i&&i.length}function I(i,y){this.dyn_tree=i,this.max_code=0,this.stat_desc=y}function _(i){return i<256?P[i]:P[256+(i>>>7)]}function Z(i,y){i.pending_buf[i.pending++]=255&y,i.pending_buf[i.pending++]=y>>>8&255}function G(i,y,M){i.bi_valid>s-M?(i.bi_buf|=y<<i.bi_valid&65535,Z(i,i.bi_buf),i.bi_buf=y>>s-i.bi_valid,i.bi_valid+=M-s):(i.bi_buf|=y<<i.bi_valid&65535,i.bi_valid+=M)}function V(i,y,M){G(i,M[2*y],M[2*y+1])}function ae(i,y){for(var M=0;M|=1&i,i>>>=1,M<<=1,0<--y;);return M>>>1}function re(i,y,M){var z,S,$=new Array(l+1),W=0;for(z=1;z<=l;z++)$[z]=W=W+M[z-1]<<1;for(S=0;S<=y;S++){var U=i[2*S+1];U!==0&&(i[2*S]=ae($[U]++,U))}}function X(i){var y;for(y=0;y<b;y++)i.dyn_ltree[2*y]=0;for(y=0;y<o;y++)i.dyn_dtree[2*y]=0;for(y=0;y<u;y++)i.bl_tree[2*y]=0;i.dyn_ltree[2*x]=1,i.opt_len=i.static_len=0,i.last_lit=i.matches=0}function te(i){8<i.bi_valid?Z(i,i.bi_buf):0<i.bi_valid&&(i.pending_buf[i.pending++]=i.bi_buf),i.bi_buf=0,i.bi_valid=0}function ie(i,y,M,z){var S=2*y,$=2*M;return i[S]<i[$]||i[S]===i[$]&&z[y]<=z[M]}function oe(i,y,M){for(var z=i.heap[M],S=M<<1;S<=i.heap_len&&(S<i.heap_len&&ie(y,i.heap[S+1],i.heap[S],i.depth)&&S++,!ie(y,z,i.heap[S],i.depth));)i.heap[M]=i.heap[S],M=S,S<<=1;i.heap[M]=z}function ce(i,y,M){var z,S,$,W,U=0;if(i.last_lit!==0)for(;z=i.pending_buf[i.d_buf+2*U]<<8|i.pending_buf[i.d_buf+2*U+1],S=i.pending_buf[i.l_buf+U],U++,z===0?V(i,S,y):(V(i,($=t[S])+g+1,y),(W=E[$])!==0&&G(i,S-=D[$],W),V(i,$=_(--z),M),(W=F[$])!==0&&G(i,z-=j[$],W)),U<i.last_lit;);V(i,x,y)}function le(i,y){var M,z,S,$=y.dyn_tree,W=y.stat_desc.static_tree,U=y.stat_desc.has_stree,H=y.stat_desc.elems,ne=-1;for(i.heap_len=0,i.heap_max=n,M=0;M<H;M++)$[2*M]!==0?(i.heap[++i.heap_len]=ne=M,i.depth[M]=0):$[2*M+1]=0;for(;i.heap_len<2;)$[2*(S=i.heap[++i.heap_len]=ne<2?++ne:0)]=1,i.depth[S]=0,i.opt_len--,U&&(i.static_len-=W[2*S+1]);for(y.max_code=ne,M=i.heap_len>>1;1<=M;M--)oe(i,$,M);for(S=H;M=i.heap[1],i.heap[1]=i.heap[i.heap_len--],oe(i,$,1),z=i.heap[1],i.heap[--i.heap_max]=M,i.heap[--i.heap_max]=z,$[2*S]=$[2*M]+$[2*z],i.depth[S]=(i.depth[M]>=i.depth[z]?i.depth[M]:i.depth[z])+1,$[2*M+1]=$[2*z+1]=S,i.heap[1]=S++,oe(i,$,1),2<=i.heap_len;);i.heap[--i.heap_max]=i.heap[1],(function(ee,de){var fe,pe,he,se,be,we,me=de.dyn_tree,Ce=de.max_code,Te=de.stat_desc.static_tree,Ae=de.stat_desc.has_stree,Ee=de.stat_desc.extra_bits,Se=de.stat_desc.extra_base,ve=de.stat_desc.max_length,xe=0;for(se=0;se<=l;se++)ee.bl_count[se]=0;for(me[2*ee.heap[ee.heap_max]+1]=0,fe=ee.heap_max+1;fe<n;fe++)ve<(se=me[2*me[2*(pe=ee.heap[fe])+1]+1]+1)&&(se=ve,xe++),me[2*pe+1]=se,Ce<pe||(ee.bl_count[se]++,be=0,Se<=pe&&(be=Ee[pe-Se]),we=me[2*pe],ee.opt_len+=we*(se+be),Ae&&(ee.static_len+=we*(Te[2*pe+1]+be)));if(xe!==0){do{for(se=ve-1;ee.bl_count[se]===0;)se--;ee.bl_count[se]--,ee.bl_count[se+1]+=2,ee.bl_count[ve]--,xe-=2}while(0<xe);for(se=ve;se!==0;se--)for(pe=ee.bl_count[se];pe!==0;)Ce<(he=ee.heap[--fe])||(me[2*he+1]!==se&&(ee.opt_len+=(se-me[2*he+1])*me[2*he],me[2*he+1]=se),pe--)}})(i,y),re($,ne,i.bl_count)}function e(i,y,M){var z,S,$=-1,W=y[1],U=0,H=7,ne=4;for(W===0&&(H=138,ne=3),y[2*(M+1)+1]=65535,z=0;z<=M;z++)S=W,W=y[2*(z+1)+1],++U<H&&S===W||(U<ne?i.bl_tree[2*S]+=U:S!==0?(S!==$&&i.bl_tree[2*S]++,i.bl_tree[2*C]++):U<=10?i.bl_tree[2*N]++:i.bl_tree[2*O]++,$=S,ne=(U=0)===W?(H=138,3):S===W?(H=6,3):(H=7,4))}function B(i,y,M){var z,S,$=-1,W=y[1],U=0,H=7,ne=4;for(W===0&&(H=138,ne=3),z=0;z<=M;z++)if(S=W,W=y[2*(z+1)+1],!(++U<H&&S===W)){if(U<ne)for(;V(i,S,i.bl_tree),--U!=0;);else S!==0?(S!==$&&(V(i,S,i.bl_tree),U--),V(i,C,i.bl_tree),G(i,U-3,2)):U<=10?(V(i,N,i.bl_tree),G(i,U-3,3)):(V(i,O,i.bl_tree),G(i,U-11,7));$=S,ne=(U=0)===W?(H=138,3):S===W?(H=6,3):(H=7,4)}}d(j);var T=!1;function p(i,y,M,z){G(i,(v<<1)+(z?1:0),3),(function(S,$,W,U){te(S),Z(S,W),Z(S,~W),c.arraySet(S.pending_buf,S.window,$,W,S.pending),S.pending+=W})(i,y,M)}w._tr_init=function(i){T||((function(){var y,M,z,S,$,W=new Array(l+1);for(S=z=0;S<k-1;S++)for(D[S]=z,y=0;y<1<<E[S];y++)t[z++]=S;for(t[z-1]=S,S=$=0;S<16;S++)for(j[S]=$,y=0;y<1<<F[S];y++)P[$++]=S;for($>>=7;S<o;S++)for(j[S]=$<<7,y=0;y<1<<F[S]-7;y++)P[256+$++]=S;for(M=0;M<=l;M++)W[M]=0;for(y=0;y<=143;)K[2*y+1]=8,y++,W[8]++;for(;y<=255;)K[2*y+1]=9,y++,W[9]++;for(;y<=279;)K[2*y+1]=7,y++,W[7]++;for(;y<=287;)K[2*y+1]=8,y++,W[8]++;for(re(K,b+1,W),y=0;y<o;y++)f[2*y+1]=5,f[2*y]=ae(y,5);J=new Q(K,E,g+1,b,l),L=new Q(f,F,0,o,l),Y=new Q(new Array(0),A,0,u,m)})(),T=!0),i.l_desc=new I(i.dyn_ltree,J),i.d_desc=new I(i.dyn_dtree,L),i.bl_desc=new I(i.bl_tree,Y),i.bi_buf=0,i.bi_valid=0,X(i)},w._tr_stored_block=p,w._tr_flush_block=function(i,y,M,z){var S,$,W=0;0<i.level?(i.strm.data_type===2&&(i.strm.data_type=(function(U){var H,ne=4093624447;for(H=0;H<=31;H++,ne>>>=1)if(1&ne&&U.dyn_ltree[2*H]!==0)return r;if(U.dyn_ltree[18]!==0||U.dyn_ltree[20]!==0||U.dyn_ltree[26]!==0)return a;for(H=32;H<g;H++)if(U.dyn_ltree[2*H]!==0)return a;return r})(i)),le(i,i.l_desc),le(i,i.d_desc),W=(function(U){var H;for(e(U,U.dyn_ltree,U.l_desc.max_code),e(U,U.dyn_dtree,U.d_desc.max_code),le(U,U.bl_desc),H=u-1;3<=H&&U.bl_tree[2*q[H]+1]===0;H--);return U.opt_len+=3*(H+1)+5+5+4,H})(i),S=i.opt_len+3+7>>>3,($=i.static_len+3+7>>>3)<=S&&(S=$)):S=$=M+5,M+4<=S&&y!==-1?p(i,y,M,z):i.strategy===4||$===S?(G(i,2+(z?1:0),3),ce(i,K,f)):(G(i,4+(z?1:0),3),(function(U,H,ne,ee){var de;for(G(U,H-257,5),G(U,ne-1,5),G(U,ee-4,4),de=0;de<ee;de++)G(U,U.bl_tree[2*q[de]+1],3);B(U,U.dyn_ltree,H-1),B(U,U.dyn_dtree,ne-1)})(i,i.l_desc.max_code+1,i.d_desc.max_code+1,W+1),ce(i,i.dyn_ltree,i.dyn_dtree)),X(i),z&&te(i)},w._tr_tally=function(i,y,M){return i.pending_buf[i.d_buf+2*i.last_lit]=y>>>8&255,i.pending_buf[i.d_buf+2*i.last_lit+1]=255&y,i.pending_buf[i.l_buf+i.last_lit]=255&M,i.last_lit++,y===0?i.dyn_ltree[2*M]++:(i.matches++,y--,i.dyn_ltree[2*(t[M]+g+1)]++,i.dyn_dtree[2*_(y)]++),i.last_lit===i.lit_bufsize-1},w._tr_align=function(i){G(i,2,3),V(i,x,K),(function(y){y.bi_valid===16?(Z(y,y.bi_buf),y.bi_buf=0,y.bi_valid=0):8<=y.bi_valid&&(y.pending_buf[y.pending++]=255&y.bi_buf,y.bi_buf>>=8,y.bi_valid-=8)})(i)}},{"../utils/common":41}],53:[function(h,R,w){R.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(h,R,w){(function(c){(function(r,a){if(!r.setImmediate){var d,v,k,g,b=1,o={},u=!1,n=r.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(r);l=l&&l.setTimeout?l:r,d={}.toString.call(r.process)==="[object process]"?function(C){process.nextTick(function(){m(C)})}:(function(){if(r.postMessage&&!r.importScripts){var C=!0,N=r.onmessage;return r.onmessage=function(){C=!1},r.postMessage("","*"),r.onmessage=N,C}})()?(g="setImmediate$"+Math.random()+"$",r.addEventListener?r.addEventListener("message",x,!1):r.attachEvent("onmessage",x),function(C){r.postMessage(g+C,"*")}):r.MessageChannel?((k=new MessageChannel).port1.onmessage=function(C){m(C.data)},function(C){k.port2.postMessage(C)}):n&&"onreadystatechange"in n.createElement("script")?(v=n.documentElement,function(C){var N=n.createElement("script");N.onreadystatechange=function(){m(C),N.onreadystatechange=null,v.removeChild(N),N=null},v.appendChild(N)}):function(C){setTimeout(m,0,C)},l.setImmediate=function(C){typeof C!="function"&&(C=new Function(""+C));for(var N=new Array(arguments.length-1),O=0;O<N.length;O++)N[O]=arguments[O+1];var E={callback:C,args:N};return o[b]=E,d(b),b++},l.clearImmediate=s}function s(C){delete o[C]}function m(C){if(u)setTimeout(m,0,C);else{var N=o[C];if(N){u=!0;try{(function(O){var E=O.callback,F=O.args;switch(F.length){case 0:E();break;case 1:E(F[0]);break;case 2:E(F[0],F[1]);break;case 3:E(F[0],F[1],F[2]);break;default:E.apply(a,F)}})(N)}finally{s(C),u=!1}}}}function x(C){C.source===r&&typeof C.data=="string"&&C.data.indexOf(g)===0&&m(+C.data.slice(g.length))}})(typeof self>"u"?c===void 0?this:c:self)}).call(this,typeof ke<"u"?ke:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Ne)),Ne.exports}var De=Be();const Oe=Pe(De),Me=`{
  "name": "sandbox-workspace",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@dnd-kit/core": "^6.1.0",
    "@dnd-kit/sortable": "^8.0.0",
    "@dnd-kit/utilities": "^3.2.2",
    "@supabase/supabase-js": "^2.98.0",
    "canvas-confetti": "^1.9.3",
    "date-fns": "^2.30.0",
    "framer-motion": "^11.16.1",
    "jszip": "^3.10.1",
    "lucide-react": "^0.294.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "recharts": "^2.10.0",
    "uuid": "^9.0.1"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.7",
    "@types/canvas-confetti": "^1.6.4",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@types/uuid": "^9.0.7",
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^4.1.7",
    "typescript": "^5.7.0",
    "vite": "^6.3.5"
  }
}
`,Re=`<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23800000'/%3E%3Ctext x='16' y='23' font-family='Georgia' font-size='20' font-weight='700' fill='%23f2eee6' text-anchor='middle'%3EB%3C/text%3E%3C/svg%3E" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="BLETIA — Muebles hechos en Cuenca. Tienda, diario y panel de gestión." />
    <title>BLETIA · Simple. Elegante. tu.</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>
`,ze=`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
});
`,Le=`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "noEmit": true,
    "allowImportingTsExtensions": true
  },
  "include": ["src"]
}
`,Fe=`import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
`,je=`import { useEffect, useState } from "react";
import { StoreProvider, useStore } from "./lib/store";
import type { View } from "./lib/types";
import { Shell } from "./components/Shell";
import { Icon, ToastHost } from "./components/ui";
import Dashboard from "./views/Dashboard";
import Productos from "./views/Productos";
import Operaciones from "./views/Operaciones";
import Terceros from "./views/Terceros";
import Taller from "./views/Taller";
import Materiales from "./views/Materiales";
import Logistica from "./views/Logistica";
import Cobros from "./views/Cobros";
import Dam from "./views/Dam";
import Contabilidad from "./views/Contabilidad";
import Accesos from "./views/Accesos";
import Seguridad from "./views/Seguridad";
import Ajustes from "./views/Ajustes";
import Sitio from "./views/Sitio";
import Login from "./views/Login";
import Contenido from "./views/Contenido";

function Splash({ done }: { done: boolean }) {
  return (
    <div className={\`fixed inset-0 z-[70] bg-night grid place-items-center transition-opacity duration-500 \${done ? "opacity-0 pointer-events-none" : "opacity-100"}\`}>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-pined grid place-items-center text-oakl anim-pop">
          <Icon name="logo" size={34} />
        </div>
        <div className="font-display font-extrabold text-[22px] text-paper tracking-wide mt-4">TALLER UNO</div>
        <div className="font-mono text-[10px] tracking-[0.3em] text-paper/40 uppercase mt-1.5">Suite mueblera · ERP · CRM · PIM · OMS · MES</div>
        <div className="mt-5 w-44 h-1 mx-auto rounded-full bg-paper/10 overflow-hidden">
          <div className="h-full bg-oak rounded-full" style={{ animation: "growX 0.7s ease-out both", width: "100%", transformOrigin: "left" }} />
        </div>
        <style>{\`@keyframes growX { from { transform: scaleX(0); } to { transform: scaleX(1); } }\`}</style>
      </div>
    </div>
  );
}

function Workspace() {
  const { toasts, state } = useStore();
  const [view, setView] = useState<View>("dashboard");
  const [param, setParam] = useState<string | undefined>();
  const [visit, setVisit] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 850);
    return () => clearTimeout(t);
  }, []);

  const nav = (v: View, p?: string) => {
    setView(v);
    setParam(p);
    setVisit((x) => x + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* bletia.ec/dash → sin sesión, /dash/login */
  const user = state.session.user;
  if (view !== "web" && !user) {
    return (
      <>
        <Splash done={ready} />
        <Login nav={nav} />
        <ToastHost toasts={toasts} />
      </>
    );
  }

  /* www.bletia.ec → sitio público SIN el header/sidebar del panel interno */
  if (view === "web") {
    return (
      <>
        <Sitio key={\`w\${visit}\`} nav={nav} />
        <ToastHost toasts={toasts} />
      </>
    );
  }

  return (
    <>
      <Splash done={ready} />
      <Shell view={view} nav={nav}>
        {view === "dashboard" && <Dashboard key={\`d\${visit}\`} nav={nav} />}
        {view === "pim" && <Productos key={\`p\${visit}\`} initialQuery={param} />}
        {view === "oms" && <Operaciones key={\`o\${visit}\`} initialQuery={param} />}
        {view === "crm" && <Terceros key={\`c\${visit}\`} />}
        {view === "taller" && <Taller key={\`t\${visit}\`} />}
        {view === "bom" && <Materiales key={\`b\${visit}\`} />}
        {view === "logistica" && <Logistica key={\`l\${visit}\`} />}
        {view === "cobros" && <Cobros key={\`k\${visit}\`} />}
        {view === "dam" && <Dam key={\`m\${visit}\`} />}
        {view === "contabilidad" && <Contabilidad key={\`a\${visit}\`} />}
        {view === "accesos" && <Accesos key={\`s\${visit}\`} />}
        {view === "seguridad" && <Seguridad key={\`g\${visit}\`} />}
        {view === "ajustes" && <Ajustes key={\`j\${visit}\`} />}
        {view === "contenido" && <Contenido key={\`n\${visit}\`} />}
      </Shell>
      <ToastHost toasts={toasts} />
    </>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <Workspace />
    </StoreProvider>
  );
}
`,$e=`@import "tailwindcss";

/* Geomanist — fuente oficial de BLETIA (con derechos).
   Coloca tus archivos en /public/fonts/ : Geomanist-Regular.woff2, -Medium.woff2, -Bold.woff2 */
@font-face {
  font-family: "Geomanist";
  src: local("Geomanist Regular"), local("Geomanist-Regular"), url("/fonts/Geomanist-Regular.woff2") format("woff2");
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "Geomanist";
  src: local("Geomanist Medium"), local("Geomanist-Medium"), url("/fonts/Geomanist-Medium.woff2") format("woff2");
  font-weight: 500; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "Geomanist";
  src: local("Geomanist Bold"), local("Geomanist-Bold"), url("/fonts/Geomanist-Bold.woff2") format("woff2");
  font-weight: 700; font-style: normal; font-display: swap;
}

@theme {
  --font-display: "Geomanist", "Jost", "Segoe UI", sans-serif;
  --font-body: "Geomanist", "Jost", "Segoe UI", sans-serif;
  --font-serif: "Cormorant Garamond", Georgia, serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  --font-dash: "Inter", "Jost", "Segoe UI", sans-serif;

  /* base blanco/tinta neutra — modo día (ejecutivo, sin crema) */
  --color-paper: #ffffff;
  --color-card: #ffffff;
  --color-ink: #1f1f1d;
  --color-ink2: #2b2b28;
  --color-ink3: #383835;
  --color-mut: #6c6c66;
  --color-fog: #a1a19a;
  --color-line: #e7e7e2;
  --color-line2: #d8d8d2;

  /* marca — uso puntual */
  --color-wine: #800000;
  --color-winel: #f3e4de;

  /* acentos sobrios (estados y acciones) */
  --color-pine: #4c6650;
  --color-pined: #38503d;
  --color-pinel: #e4e9de;
  --color-pinet: #38503d;
  --color-oak: #a9782c;
  --color-oakd: #855c1b;
  --color-oakl: #f2e7d0;
  --color-steel: #5a7386;
  --color-steell: #e5ebef;
  --color-brick: #a8402a;
  --color-brickl: #f1ddd4;
  --color-moss: #6e8144;
  --color-mossl: #e8ecd8;
  --color-mossd: #41621f;
  --color-night: #171310;
  --color-night2: #211b16;
}

/* Modo noche — ergonomía tipo Google: gris neutro (nunca negro puro), texto claro
   pero no blanco puro, capas sutiles y acentos desaturados para mitigar la fatiga visual */
.dark {
  --color-paper: #161616;
  --color-card: #1f1f1f;
  --color-ink: #e6e4e0;
  --color-ink2: #dad8d3;
  --color-ink3: #c8c6c1;
  --color-mut: #a2a09b;
  --color-fog: #74726d;
  --color-line: #2e2e2e;
  --color-line2: #3c3c3c;
  --color-wine: #b04a4a;
  --color-winel: #33201f;
  --color-pine: #7fae8c;
  --color-pinel: #24322b;
  --color-pinet: #a3cbae;
  --color-oak: #c99a4e;
  --color-oakl: #33291a;
  --color-oakd: #d8ab62;
  --color-steel: #8fb0c6;
  --color-steell: #22303a;
  --color-brick: #c96a52;
  --color-brickl: #352320;
  --color-moss: #a3bf72;
  --color-mossl: #27301d;
  --color-mossd: #b3c98a;
  --color-night: #111111;
  --color-night2: #1c1c1c;
}

html { font-family: var(--font-body); }

body {
  background-color: var(--color-paper);
  color: var(--color-ink);
  -webkit-font-smoothing: antialiased;
}

::selection { background: rgba(128, 0, 0, 0.16); }

* { scrollbar-width: thin; scrollbar-color: #c8c8c2 transparent; }
*::-webkit-scrollbar { width: 9px; height: 9px; }
*::-webkit-scrollbar-thumb { background: #c8c8c2; border-radius: 9px; }

@keyframes feedIn { from { opacity: 0; transform: translateY(-7px) scale(0.99); } to { opacity: 1; transform: translateY(0) scale(1); } }
@keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
@keyframes popIn { 0% { opacity: 0; transform: scale(0.96) translateY(8px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
@keyframes drawerIn { from { transform: translateX(40px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
@keyframes riseSlow { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: translateY(0); } }
@keyframes pulseDot { 0%, 100% { box-shadow: 0 0 0 0 rgba(110, 129, 68, 0.55); } 60% { box-shadow: 0 0 0 6px rgba(110, 129, 68, 0); } }
@keyframes flashCell { 0% { background-color: rgba(169, 120, 44, 0.26); } 100% { background-color: transparent; } }
@keyframes growBar { from { transform: scaleY(0); } to { transform: scaleY(1); } }
@keyframes drawLine { from { stroke-dashoffset: 900; } to { stroke-dashoffset: 0; } }
@keyframes kenburns { from { transform: scale(1.02); } to { transform: scale(1.1); } }

.anim-feed { animation: feedIn 0.35s cubic-bezier(0.2, 0.9, 0.3, 1) both; }
.anim-up { animation: fadeUp 0.5s cubic-bezier(0.2, 0.9, 0.3, 1) both; }
.anim-rise { animation: riseSlow 0.8s cubic-bezier(0.2, 0.9, 0.3, 1) both; }
.anim-pop { animation: popIn 0.28s cubic-bezier(0.2, 0.9, 0.3, 1) both; }
.anim-drawer { animation: drawerIn 0.32s cubic-bezier(0.2, 0.9, 0.3, 1) both; }
.live-dot { animation: pulseDot 1.6s ease-out infinite; }
.flash-cell { animation: flashCell 1.1s ease-out both; }
.bar-grow { transform-origin: bottom; animation: growBar 0.7s cubic-bezier(0.2, 0.9, 0.3, 1) both; }
.line-draw { stroke-dasharray: 900; animation: drawLine 1.4s ease-out both; }
.kenburns { animation: kenburns 14s ease-in-out infinite alternate; }

.stagger > * { opacity: 0; animation: fadeUp 0.55s cubic-bezier(0.2, 0.9, 0.3, 1) both; }
.stagger > *:nth-child(1) { animation-delay: 0.03s; }
.stagger > *:nth-child(2) { animation-delay: 0.09s; }
.stagger > *:nth-child(3) { animation-delay: 0.15s; }
.stagger > *:nth-child(4) { animation-delay: 0.21s; }
.stagger > *:nth-child(5) { animation-delay: 0.27s; }
.stagger > *:nth-child(6) { animation-delay: 0.33s; }
.stagger > *:nth-child(7) { animation-delay: 0.39s; }
.stagger > *:nth-child(8) { animation-delay: 0.45s; }
.stagger > *:nth-child(9) { animation-delay: 0.51s; }

.uline {
  background-image: linear-gradient(currentColor, currentColor);
  background-size: 0% 1px;
  background-repeat: no-repeat;
  background-position: 0 100%;
  transition: background-size 0.35s cubic-bezier(0.2, 0.9, 0.3, 1);
  padding-bottom: 2px;
}
.uline:hover { background-size: 100% 1px; }

.num { font-variant-numeric: tabular-nums; }
.tracked { letter-spacing: 0.28em; }

/* acentos verdes escritos como hex en las vistas → legibles también en modo noche */
.dark [class*="text-[#41621f]"] { color: var(--color-mossd) !important; }
`,qe=`/// <reference types="vite/client" />

declare module "*?raw" {
  const content: string;
  export default content;
}
`,Ue=`export type View =
  | "dashboard" | "pim" | "oms" | "crm" | "taller" | "bom" | "logistica"
  | "cobros" | "dam" | "contabilidad" | "accesos" | "seguridad" | "ajustes" | "web" | "contenido";

export type Warehouse = "showroom" | "bodega" | "taller";

export type OrderKind = "venta" | "pedido";

/* Máquina de estados BLETIA — portada del código real (EstadoPedidoErp.php) */
export type OrderStatus =
  | "borrador" | "pendiente" | "por_aprobar" | "aprobado" | "confirmado"
  | "enviado_proveedor" | "en_fabricacion" | "en_produccion" | "listo_proveedor"
  | "en_bodega" | "listo_despacho" | "despachado" | "entregado"
  | "anulado" | "cancelado";

export type PayStatus = "pendiente" | "parcial" | "pagado";
export type Channel = "tienda" | "web" | "link_pago" | "whatsapp";

export interface OrderSpec {
  tapiz: string;
  tapizSec: string;
  cojines: string;
  lacado: string;
  notas: string;
  fotos: { campo: string; label: string }[];
}

export interface TraceEntry { ts: string; user: string; msg: string; }

/* BLETIA: un pago NO cuenta hasta que el dueño lo VALIDA (validado) */
export interface Recibo {
  id: string; code: string; date: string; amount: number;
  method: string; note: string; validado: boolean;
}

export interface OrderItem { productId: string; sku: string; name: string; qty: number; price: number; spec?: OrderSpec | null; }

export interface Order {
  id: string; code: string; kind: OrderKind;
  customerId: string; customer: string;
  items: OrderItem[];
  subtotal: number; iva: number; total: number;
  status: OrderStatus; channel: Channel; payment: PayStatus;
  transportId: string | null; bultos: number;
  createdAt: string; eta: string; city: string; workOrderId: string | null;
  trace: TraceEntry[]; recibos: Recibo[];
  confirmToken: string | null; confirmedAt: string | null;
}

export interface Movement {
  id: string; ts: string; type: "ingreso" | "egreso" | "transferencia" | "ajuste";
  warehouse: Warehouse; productId: string; sku: string; productName: string;
  qty: number; ref: string; user: string;
}

export interface Product {
  id: string; sku: string; name: string; category: string;
  line: "fabricacion" | "compra_local" | "importado";
  materials: string[]; cost: number; price: number;
  stock: Record<Warehouse, number>; min: number;
  status: "activo" | "inactivo" | "agotado";
  img: string; mediaIds: string[];
  dims: string; weightKg: number; leadDays: number; createdAt: string;
}

export interface Customer {
  id: string; code: string; name: string; doc: string; type: "natural" | "juridica";
  phone: string; email: string; city: string; address?: string;
  segment: "hogar" | "corporativo" | "distribuidor" | "arquitectura";
  orders: number; total: number; credit: number; since: string; notes: string;
}

export interface Supplier {
  id: string; name: string; kind: "insumos" | "muebles" | "transporte";
  contact: string; phone: string; email: string; city: string;
  rating: number; leadDays: number; balance: number; items: string; active: boolean;
}

export type WoStatus = "planificada" | "corte" | "ensamblaje" | "acabado" | "qa" | "terminada";

export interface WorkOrder {
  id: string; code: string; productId: string; productName: string; qty: number;
  status: WoStatus; start: string; due: string; assignedTo: string; progress: number;
  orderId: string | null;
  materials: { name: string; qty: string; cost: number }[];
  laborCost: number;
}

export type LinkStatus = "pendiente" | "pagado" | "expirado" | "anulado";

export interface PayLink {
  id: string; token: string; concept: string; orderId: string | null; amount: number;
  customerName: string; createdAt: string; expiresAt: string; status: LinkStatus;
  method: string | null; authCode: string | null; last4: string | null;
}

export type AccessRole = "vendedor" | "bodega" | "contabilidad" | "taller" | "cliente" | "gerencia";

export interface AccessLink {
  id: string; token: string; label: string; role: AccessRole; scope: string;
  createdAt: string; expiresAt: string; maxUses: number; uses: number;
  status: "activo" | "usado" | "expirado" | "revocado";
}

export interface MediaAsset {
  id: string; name: string; kind: "foto" | "render" | "plano";
  tag: string; size: string; src: string; usage: string[]; uploadedAt: string;
}

export interface JournalEntry {
  id: string; date: string; doc: string; account: string; detail: string;
  debit: number; credit: number;
}

export interface Invoice {
  id: string; number: string; auth: string; customerId: string; customer: string;
  date: string; base: number; iva: number; total: number;
  status: "emitida" | "pagada" | "por_cobrar" | "anulada"; orderId: string | null;
}

export interface NotaCredito {
  id: string; number: string; auth: string; invoiceNumber: string; customer: string;
  date: string; motivo: string; amount: number;
}

/* ── CMS: el contenido de la web vive aquí y se edita en "Contenido web" ── */
export type Bloque =
  | { id: string; tipo: "hero"; titulo: string; sub: string; img: string; cta: string; ctaTarget: string }
  | { id: string; tipo: "texto"; titulo: string; cuerpo: string }
  | { id: string; tipo: "imagen"; img: string; pie: string }
  | { id: string; tipo: "columnas"; titulo: string; cols: { t: string; d: string }[] }
  | { id: string; tipo: "lista"; titulo: string; items: { t: string; d: string }[] }
  | { id: string; tipo: "quote"; texto: string }
  | { id: string; tipo: "colecciones" }
  | { id: string; tipo: "novedades" }
  | { id: string; tipo: "destacado" }
  | { id: string; tipo: "diario" }
  | { id: string; tipo: "newsletter" };

export interface PaginaWeb {
  id: string; slug: string; titulo: string; enNav: boolean;
  estado: "publicada" | "borrador"; seoTitle: string; seoDesc: string; bloques: Bloque[];
}

export interface PostBlog {
  id: string; slug: string; titulo: string; categoria: string; etiquetas: string[];
  extracto: string; cuerpo: string[]; img: string; min: number; fecha: string;
  estado: "publicado" | "borrador";
}

export interface ProductoWeb {
  id: string; slug: string; nombre: string; precio: number; cat: string;
  etiquetas?: string[]; /* se llenan al editar el producto en el CMS */
  img: string; destacado: boolean; novedad: boolean; vt: string;
  vars: { n: string; c: string }[]; desc: string; detalles: string[];
  estado: "activo" | "oculto";
}

export interface CmsConfig {
  logo: string;
  fondo: string; /* color de fondo de toda la web pública — por defecto #ffffff */
  anuncio: string; anuncioVisible: boolean;
  nav: { label: string; target: string }[];
  footer: { titulo: string; links: { label: string; target: string }[] }[];
  copyright: string;
  contacto: { direccion: string; telefono: string; email: string; horario: string };
  newsletterTitulo: string; newsletterSub: string;
  categorias: string[]; /* registro único: se crean una vez y se eligen en entradas y productos */
}

export interface Redireccion { de: string; a: string; ts: string; }

export interface Despacho {
  id: string; code: string; orderId: string; orderCode: string; customer: string; city: string;
  transportId: string; placa: string; conductor: string; motivo: "venta" | "traslado";
  fecha: string; ruta: string; bultos: number; pesoKg: number;
  guia: { numero: string; auth: string; xml: string } | null;
  estado: "preparacion" | "en_ruta" | "entregado";
}

export interface Material {
  id: string; code: string; name: string; unit: string;
  stock: number; min: number; costUnit: number; supplierId: string;
}

export interface Bom {
  productId: string;
  lines: { materialId: string; qty: number; unit: string }[];
  laborMin: number;
}

export interface EventItem {
  id: string; ts: number;
  type: "venta" | "stock" | "pago" | "web" | "taller" | "factura" | "link" | "logistica" | "sistema";
  msg: string;
}

export interface TeamMember {
  id: string; name: string; role: AccessRole; email: string; online: boolean; lastActive: string;
}

export interface Settings {
  company: { name: string; ruc: string; address: string; phone: string; email: string };
  payphone: { mode: "sandbox" | "produccion"; shopId: string; terminalId: string; token: string };
  linkBase: string;
  sequence: { invoice: number; order: number; link: number; recibo: number; despacho: number; guia: number; nc: number };
}

/* Roles internos — acceso al /dash por rol (admin ve todo) */
export type RoleInterno = "gerencia" | "vendedor" | "bodega" | "taller" | "contabilidad";

export interface SessionUser { name: string; role: RoleInterno; }

/* Cuenta de consumidor final (www.bletia.ec/cuenta) */
export interface Cuenta {
  id: string; nombre: string; email: string; ciudad: string;
  desde: string; cupon: string | null;
}

export interface SessionInfo {
  events: number; salesToday: number; peakEps: number; startedAt: number;
  user: SessionUser | null;
}

export interface AppState {
  hydrated: boolean;
  products: Product[];
  customers: Customer[];
  suppliers: Supplier[];
  orders: Order[];
  movements: Movement[];
  workOrders: WorkOrder[];
  payLinks: PayLink[];
  accessLinks: AccessLink[];
  media: MediaAsset[];
  journal: JournalEntry[];
  invoices: Invoice[];
  notas: NotaCredito[];
  despachos: Despacho[];
  materials: Material[];
  boms: Bom[];
  events: EventItem[];
  team: TeamMember[];
  cuentas: Cuenta[];
  settings: Settings;
  cms: { config: CmsConfig; paginas: PaginaWeb[]; posts: PostBlog[]; productos: ProductoWeb[]; redirects: Redireccion[] };
  session: SessionInfo;
}
`,Ve=`export const IVA = 0.15;

export const cls = (...xs: (string | false | null | undefined)[]) => xs.filter(Boolean).join(" ");

export const uid = () => Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);

export const token = (len = 14) => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
  const arr = new Uint32Array(len);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) crypto.getRandomValues(arr);
  else for (let i = 0; i < len; i++) arr[i] = Math.floor(Math.random() * 1e9);
  return Array.from(arr, (n) => chars[n % chars.length]).join("");
};

export const sriAuth = () => {
  let s = "";
  for (let i = 0; i < 49; i++) s += Math.floor(Math.random() * 10);
  return s;
};

export const money = (n: number, cents = true) =>
  "$" + n.toLocaleString("es-EC", { minimumFractionDigits: cents ? 2 : 0, maximumFractionDigits: cents ? 2 : 0 });

export const num = (n: number) => n.toLocaleString("es-EC", { maximumFractionDigits: 0 });

export const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("es-EC", { day: "2-digit", month: "short", year: "numeric" });

export const fmtTime = (ts: number) =>
  new Date(ts).toLocaleTimeString("es-EC", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });

export const timeAgo = (ts: number) => {
  const s = Math.max(1, Math.floor((Date.now() - ts) / 1000));
  if (s < 60) return \`hace \${s}s\`;
  const m = Math.floor(s / 60);
  if (m < 60) return \`hace \${m}min\`;
  const h = Math.floor(m / 60);
  if (h < 24) return \`hace \${h}h\`;
  return \`hace \${Math.floor(h / 24)}d\`;
};

export const daysAgoIso = (days: number, hour = 10, min = 0) => {
  const d = new Date();
  d.setDate(d.getDate() - days);
  d.setHours(hour, min, 0, 0);
  return d.toISOString();
};

export const inDaysIso = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString();
};

export const calcTotals = (items: { qty: number; price: number }[]) => {
  const subtotal = items.reduce((a, i) => a + i.qty * i.price, 0);
  const iva = Math.round(subtotal * IVA * 100) / 100;
  return { subtotal, iva, total: subtotal + iva };
};

export const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      return true;
    } catch {
      return false;
    }
  }
};

export const downloadCsv = (filename: string, header: string[], rows: (string | number)[][]) => {
  const esc = (v: string | number) => \`"\${String(v).replace(/"/g, '""')}"\`;
  const csv = [header, ...rows].map((r) => r.map(esc).join(";")).join("\\r\\n");
  const blob = new Blob(["\\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
};

/* Genera slugs como WordPress: "Cuánto dura un mueble" → "cuanto-dura-un-mueble" */
export const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\\u0300-\\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const initials = (name: string) =>
  name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]!.toUpperCase()).join("");

export const marginPct = (cost: number, price: number) => (price <= 0 ? 0 : Math.round(((price - cost) / price) * 100));
`,Ge=`import type { AppState, TraceEntry } from "./types";
import { daysAgoIso, inDaysIso } from "./util";
import { cmsSeed } from "./cmsSeed";

const tr = (days: number, hour: number, user: string, msg: string): TraceEntry => ({
  ts: daysAgoIso(days, hour), user, msg,
});

export const seedState = (): AppState => ({
  hydrated: true,
  products: [
    { id: "p1", sku: "SAL-001", name: "Sofá Nápoles 3 puestos", category: "Sala", line: "fabricacion", materials: ["Madera de laurel", "Lino crudo", "Espuma D30"], cost: 480, price: 899, stock: { showroom: 3, bodega: 5, taller: 0 }, min: 3, status: "activo", img: "https://image.qwenlm.ai/generated-images/876c81bb-04b7-4ecf-b3c5-5409001f7961/_result.png", mediaIds: ["m1"], dims: "220×92×86 cm", weightKg: 68, leadDays: 21, createdAt: daysAgoIso(220) },
    { id: "p2", sku: "COM-014", name: "Comedor Andino 6 sillas", category: "Comedor", line: "fabricacion", materials: ["Roble nacional", "Acabado natural", "Sillas tapizadas"], cost: 620, price: 1189, stock: { showroom: 2, bodega: 3, taller: 2 }, min: 2, status: "activo", img: "https://image.qwenlm.ai/generated-images/c4c2d864-549d-421e-a9e9-ee3f14fc7e78/_result.png", mediaIds: ["m2"], dims: "180×100×76 cm", weightKg: 84, leadDays: 25, createdAt: daysAgoIso(190) },
    { id: "p3", sku: "DOR-030", name: "Cama King Roble Nórdica", category: "Dormitorio", line: "compra_local", materials: ["Roble", "Ensamble invisible"], cost: 350, price: 699, stock: { showroom: 1, bodega: 6, taller: 0 }, min: 2, status: "activo", img: "https://image.qwenlm.ai/generated-images/4c03f0dd-cf51-487c-964a-67a34323efb3/_result.png", mediaIds: ["m3"], dims: "210×190×105 cm", weightKg: 72, leadDays: 12, createdAt: daysAgoIso(160) },
    { id: "p4", sku: "DOR-042", name: "Ropero Amazonia 6 puertas", category: "Dormitorio", line: "fabricacion", materials: ["Laurel", "Triplex 18mm", "Bisagras slow-close"], cost: 410, price: 789, stock: { showroom: 2, bodega: 2, taller: 1 }, min: 2, status: "activo", img: "https://image.qwenlm.ai/generated-images/9248a4c4-1d9b-4611-b940-870a805ce7d5/_result.png", mediaIds: ["m4"], dims: "240×60×210 cm", weightKg: 110, leadDays: 28, createdAt: daysAgoIso(140) },
    { id: "p5", sku: "OFI-007", name: "Escritorio Ejecutivo Cañar", category: "Oficina", line: "compra_local", materials: ["Nogal", "Pasacables", "Cajonera doble"], cost: 240, price: 459, stock: { showroom: 4, bodega: 7, taller: 0 }, min: 3, status: "activo", img: "https://image.qwenlm.ai/generated-images/2c56f5e9-08cb-49de-b7a4-963536e14050/_result.png", mediaIds: ["m5"], dims: "160×75×76 cm", weightKg: 54, leadDays: 10, createdAt: daysAgoIso(120) },
    { id: "p6", sku: "SAL-023", name: "Poltrona Esmeraldas", category: "Sala", line: "importado", materials: ["Bouclé", "Base giratoria metal"], cost: 190, price: 389, stock: { showroom: 6, bodega: 4, taller: 0 }, min: 3, status: "activo", img: "https://image.qwenlm.ai/generated-images/087283f8-cf51-449d-9d01-520b4731854c/_result.png", mediaIds: ["m6"], dims: "88×90×102 cm", weightKg: 26, leadDays: 35, createdAt: daysAgoIso(100) },
    { id: "p7", sku: "COM-015", name: "Silla Comedor Andina (und)", category: "Comedor", line: "fabricacion", materials: ["Roble", "Asiento tapizado"], cost: 48, price: 99, stock: { showroom: 14, bodega: 20, taller: 8 }, min: 12, status: "activo", img: "", mediaIds: [], dims: "46×54×92 cm", weightKg: 7, leadDays: 18, createdAt: daysAgoIso(95) },
    { id: "p8", sku: "DOR-051", name: "Base + Colchón Queen Ortopédico", category: "Dormitorio", line: "compra_local", materials: ["Resortes pocket", "Tela bambú"], cost: 290, price: 559, stock: { showroom: 2, bodega: 9, taller: 0 }, min: 3, status: "activo", img: "", mediaIds: [], dims: "190×160×58 cm", weightKg: 48, leadDays: 8, createdAt: daysAgoIso(60) },
  ],
  customers: [
    { id: "c1", code: "CL-0101", name: "María Fernanda Icaza", doc: "1718456723", type: "natural", phone: "099 452 1187", email: "mficaza@gmail.com", city: "Quito", segment: "hogar", orders: 4, total: 4830, credit: 0, since: daysAgoIso(400), notes: "Prefiere entrega en fin de semana, sector Cumbayá." },
    { id: "c2", code: "CL-0114", name: "Corporación Quiport Offices", doc: "1792114587001", type: "juridica", phone: "02 395 4400", email: "compras@quiport-offices.ec", city: "Quito", segment: "corporativo", orders: 9, total: 28410, credit: 6320, since: daysAgoIso(700), notes: "Crédito a 45 días. Facturación electrónica a 3 sucursales." },
    { id: "c3", code: "CL-0127", name: "Distribuidora Mueblisur", doc: "0991234567001", type: "juridica", phone: "04 259 8810", email: "pedidos@mueblisur.ec", city: "Guayaquil", segment: "distribuidor", orders: 14, total: 51220, credit: 8900, since: daysAgoIso(900), notes: "Pedido mayorista mensual. Transporte lo coordinan ellos." },
    { id: "c4", code: "CL-0132", name: "Estudio Arq. Barragán", doc: "0104567890", type: "natural", phone: "098 771 2245", email: "proyectos@barragan.arq.ec", city: "Cuenca", segment: "arquitectura", orders: 6, total: 19750, credit: 0, since: daysAgoIso(500), notes: "Proyectos llave en mano, pide renders antes de fabricar." },
    { id: "c5", code: "CL-0140", name: "Javier Andrade Vallejo", doc: "1803345671", type: "natural", phone: "096 220 8734", email: "jandradev@hotmail.com", city: "Ambato", segment: "hogar", orders: 2, total: 1558, credit: 0, since: daysAgoIso(200), notes: "Segunda compra: mudanza a casa nueva en marzo." },
    { id: "c6", code: "CL-0155", name: "Hotel Plaza Grande Suites", doc: "1790023345001", type: "juridica", phone: "02 295 7000", email: "ffurnish@plazagrande.ec", city: "Quito", segment: "corporativo", orders: 3, total: 42300, credit: 12450, since: daysAgoIso(320), notes: "Renovación de 40 suites. Comité de compras aprueba el 15 de cada mes." },
  ],
  suppliers: [
    { id: "s1", name: "Maderera del Austro", kind: "insumos", contact: "Fausto Ordóñez", phone: "07 284 5511", email: "ventas@madereraustro.ec", city: "Cuenca", rating: 4.7, leadDays: 6, balance: 2350, items: "Laurel, roble, nogal en tabla", active: true },
    { id: "s2", name: "Espumas del Pacífico", kind: "insumos", contact: "Karla Merchán", phone: "04 248 9902", email: "kmerchan@espumaspacifico.ec", city: "Guayaquil", rating: 4.2, leadDays: 4, balance: 0, items: "Espuma D26/D30, guata, cincha", active: true },
    { id: "s3", name: "Tapices & Textiles Imbabura", kind: "insumos", contact: "Rosa Andrade", phone: "06 295 1123", email: "pedidos@tapicesimbabura.ec", city: "Ibarra", rating: 4.5, leadDays: 5, balance: 640, items: "Lino, bouclé, chenille", active: true },
    { id: "s4", name: "Importadora Mobilia Asia", kind: "muebles", contact: "Wei Chen", phone: "04 370 2218", email: "sales@mobiliaasia.ec", city: "Guayaquil", rating: 3.9, leadDays: 45, balance: 8120, items: "Poltronas y mesas importadas", active: true },
    { id: "s5", name: "TransLog Ecuador", kind: "transporte", contact: "Paúl Vega", phone: "02 382 4470", email: "ops@translog.ec", city: "Quito", rating: 4.8, leadDays: 2, balance: 380, items: "Fletes Sierra y Oriente, camión cerrado", active: true },
    { id: "s6", name: "Fletes Rápidos GYE", kind: "transporte", contact: "Mónica Saltos", phone: "04 256 7789", email: "despachos@fletesgye.ec", city: "Guayaquil", rating: 4.1, leadDays: 3, balance: 0, items: "Costa, camión 3.5t con ayudante", active: true },
  ],
  orders: [
    {
      id: "o1", code: "PED-1041", kind: "venta", customerId: "c1", customer: "María Fernanda Icaza",
      items: [{ productId: "p1", sku: "SAL-001", name: "Sofá Nápoles 3 puestos", qty: 1, price: 899, spec: null }],
      subtotal: 899, iva: 134.85, total: 1033.85, status: "despachado", channel: "tienda", payment: "pagado",
      transportId: "s5", bultos: 2, createdAt: daysAgoIso(4, 11), eta: inDaysIso(1), city: "Quito", workOrderId: null,
      trace: [tr(4, 11, "Paola C.", "Venta de stock creada · canal tienda"), tr(4, 12, "sistema", "Link PayPhone pagado · $1.033,85 · Visa •••• 4421"), tr(1, 9, "Luis Ch.", "Despacho DSP-3021 creado · TransLog · placa PCH-1194")],
      recibos: [{ id: "r1", code: "REC-0401", date: daysAgoIso(4, 12), amount: 1033.85, method: "PayPhone · Visa •••• 4421", note: "Pago total vía link", validado: true }],
      confirmToken: null, confirmedAt: null,
    },
    {
      id: "o2", code: "PED-1042", kind: "venta", customerId: "c2", customer: "Corporación Quiport Offices",
      items: [
        { productId: "p5", sku: "OFI-007", name: "Escritorio Ejecutivo Cañar", qty: 6, price: 449, spec: null },
        { productId: "p6", sku: "SAL-023", name: "Poltrona Esmeraldas", qty: 4, price: 389, spec: null },
      ],
      subtotal: 4250, iva: 637.5, total: 4887.5, status: "aprobado", channel: "link_pago", payment: "pendiente",
      transportId: null, bultos: 10, createdAt: daysAgoIso(3, 15), eta: inDaysIso(6), city: "Quito", workOrderId: null,
      trace: [tr(3, 15, "Paola C.", "Venta de stock creada · canal link de pago"), tr(3, 16, "sistema", "Link de cobro generado · anticipo 50%"), tr(2, 10, "Andrés Y.", "Pedido aprobado · crédito corporativo 45d")],
      recibos: [],
      confirmToken: null, confirmedAt: null,
    },
    {
      id: "o3", code: "PED-1043", kind: "pedido", customerId: "c4", customer: "Estudio Arq. Barragán",
      items: [{
        productId: "p2", sku: "COM-014", name: "Comedor Andino 6 sillas", qty: 2, price: 1189,
        spec: {
          tapiz: "Lino crudo T-04", tapizSec: "Chenille gris piedra", cojines: "2 por silla, mismo lino",
          lacado: "Natural mate (poro abierto)", notas: "Mesa extendida a 220 cm · esquinas rectas",
          fotos: [{ campo: "Tapiz principal", label: "lino-crudo-T04.jpg" }, { campo: "Lacado", label: "muestra-mate-poro.jpg" }],
        },
      }],
      subtotal: 2378, iva: 356.7, total: 2734.7, status: "en_produccion", channel: "web", payment: "parcial",
      transportId: null, bultos: 10, createdAt: daysAgoIso(6, 9), eta: inDaysIso(9), city: "Cuenca", workOrderId: "w1",
      trace: [
        tr(6, 9, "Paola C.", "Pedido bajo specs creado · canal web"),
        tr(6, 10, "sistema", "Link único de confirmación (con fotos) enviado al cliente"),
        tr(5, 17, "cliente", "Cliente confirmó specs y fotos del link único"),
        tr(5, 9, "Rocío M.", "Recibo REC-0402 · anticipo 50% por transferencia — validado"),
        tr(4, 8, "Diego G.", "Inició producción en taller · OF-2101"),
      ],
      recibos: [{ id: "r2", code: "REC-0402", date: daysAgoIso(5, 9), amount: 1367.35, method: "Transferencia Bco. Pichincha", note: "Anticipo 50%", validado: true }],
      confirmToken: "cf_Xk29mQw7Lp", confirmedAt: daysAgoIso(5, 17),
    },
    {
      id: "o4", code: "PED-1044", kind: "venta", customerId: "c5", customer: "Javier Andrade Vallejo",
      items: [
        { productId: "p3", sku: "DOR-030", name: "Cama King Roble Nórdica", qty: 1, price: 699, spec: null },
        { productId: "p8", sku: "DOR-051", name: "Base + Colchón Queen Ortopédico", qty: 1, price: 559, spec: null },
      ],
      subtotal: 1258, iva: 188.7, total: 1446.7, status: "pendiente", channel: "whatsapp", payment: "pendiente",
      transportId: null, bultos: 4, createdAt: daysAgoIso(0, 9), eta: inDaysIso(5), city: "Ambato", workOrderId: null,
      trace: [tr(0, 9, "Paola C.", "Venta de stock creada · canal WhatsApp")],
      recibos: [],
      confirmToken: null, confirmedAt: null,
    },
    {
      id: "o5", code: "PED-1038", kind: "venta", customerId: "c6", customer: "Hotel Plaza Grande Suites",
      items: [{ productId: "p6", sku: "SAL-023", name: "Poltrona Esmeraldas", qty: 12, price: 369, spec: null }],
      subtotal: 4428, iva: 664.2, total: 5092.2, status: "entregado", channel: "link_pago", payment: "pagado",
      transportId: "s6", bultos: 12, createdAt: daysAgoIso(18, 12), eta: daysAgoIso(2), city: "Quito", workOrderId: null,
      trace: [tr(18, 12, "Paola C.", "Venta de stock creada · canal link de pago"), tr(16, 10, "sistema", "Link PayPhone pagado · $5.092,20"), tr(3, 8, "Luis Ch.", "Despacho DSP-3019 en ruta · placa GSF-2210"), tr(2, 15, "M. Saltos", "Entregado · 12 bultos conformados")],
      recibos: [{ id: "r3", code: "REC-0398", date: daysAgoIso(16, 10), amount: 5092.2, method: "PayPhone · Visa", note: "Pago total vía link", validado: true }],
      confirmToken: null, confirmedAt: null,
    },
    {
      id: "o6", code: "PED-1036", kind: "venta", customerId: "c3", customer: "Distribuidora Mueblisur",
      items: [
        { productId: "p1", sku: "SAL-001", name: "Sofá Nápoles 3 puestos", qty: 4, price: 829, spec: null },
        { productId: "p4", sku: "DOR-042", name: "Ropero Amazonia 6 puertas", qty: 2, price: 749, spec: null },
      ],
      subtotal: 4814, iva: 722.1, total: 5536.1, status: "listo_despacho", channel: "web", payment: "pendiente",
      transportId: null, bultos: 14, createdAt: daysAgoIso(8, 16), eta: inDaysIso(3), city: "Guayaquil", workOrderId: "w2",
      trace: [
        tr(8, 16, "Paola C.", "Venta de stock creada · canal web"),
        tr(2, 11, "sistema", "Recibo REC-0407 registrado · $1.500,00 — esperando validación del dueño"),
        tr(1, 10, "Luis Ch.", "Pedido listo para despacho · 14 bultos"),
      ],
      recibos: [{ id: "r4", code: "REC-0407", date: daysAgoIso(2, 11), amount: 1500, method: "Depósito Bco. Guayaquil", note: "Abono parcial · comprobante enviado por WhatsApp", validado: false }],
      confirmToken: null, confirmedAt: null,
    },
    {
      id: "o7", code: "PED-1030", kind: "venta", customerId: "c2", customer: "Corporación Quiport Offices",
      items: [{ productId: "p7", sku: "COM-015", name: "Silla Comedor Andina (und)", qty: 24, price: 92, spec: null }],
      subtotal: 2208, iva: 331.2, total: 2539.2, status: "entregado", channel: "tienda", payment: "pagado",
      transportId: "s5", bultos: 8, createdAt: daysAgoIso(25, 10), eta: daysAgoIso(9), city: "Quito", workOrderId: null,
      trace: [tr(25, 10, "Paola C.", "Venta de stock creada · canal tienda"), tr(9, 12, "P. Vega", "Entregado en oficinas Quiport")],
      recibos: [{ id: "r5", code: "REC-0390", date: daysAgoIso(24, 12), amount: 2539.2, method: "Transferencia Bco. Pichincha", note: "Pago total", validado: true }],
      confirmToken: null, confirmedAt: null,
    },
    {
      id: "o8", code: "PED-1045", kind: "pedido", customerId: "c4", customer: "Estudio Arq. Barragán",
      items: [{
        productId: "p4", sku: "DOR-042", name: "Ropero Amazonia 6 puertas", qty: 1, price: 789,
        spec: {
          tapiz: "", tapizSec: "", cojines: "", lacado: "Nogal satinado",
          notas: "Fondo espejado · iluminación LED interior",
          fotos: [{ campo: "Lacado", label: "nogal-satinado.jpg" }],
        },
      }],
      subtotal: 789, iva: 118.35, total: 907.35, status: "por_aprobar", channel: "web", payment: "pendiente",
      transportId: null, bultos: 3, createdAt: daysAgoIso(0, 8), eta: inDaysIso(12), city: "Cuenca", workOrderId: null,
      trace: [tr(0, 8, "sistema", "Pedido bajo specs recibido del cotizador web"), tr(0, 8, "sistema", "Pasó a POR APROBAR · requiere revisión de specs")],
      recibos: [],
      confirmToken: null, confirmedAt: null,
    },
  ],
  movements: [
    { id: "mv1", ts: daysAgoIso(0, 9), type: "egreso", warehouse: "showroom", productId: "p1", sku: "SAL-001", productName: "Sofá Nápoles 3 puestos", qty: 1, ref: "PED-1041", user: "Luis Ch." },
    { id: "mv2", ts: daysAgoIso(1, 15), type: "ingreso", warehouse: "bodega", productId: "p3", sku: "DOR-030", productName: "Cama King Roble Nórdica", qty: 4, ref: "OC-2208", user: "Luis Ch." },
    { id: "mv3", ts: daysAgoIso(1, 11), type: "transferencia", warehouse: "taller", productId: "p2", sku: "COM-014", productName: "Comedor Andino 6 sillas", qty: 2, ref: "OF-2101", user: "Diego G." },
    { id: "mv4", ts: daysAgoIso(2, 17), type: "ingreso", warehouse: "bodega", productId: "p6", sku: "SAL-023", productName: "Poltrona Esmeraldas", qty: 10, ref: "IMP-118", user: "Luis Ch." },
    { id: "mv5", ts: daysAgoIso(3, 10), type: "ajuste", warehouse: "showroom", productId: "p7", sku: "COM-015", productName: "Silla Comedor Andina (und)", qty: 2, ref: "AJU-31 (merma tapiz)", user: "Luis Ch." },
    { id: "mv6", ts: daysAgoIso(4, 12), type: "egreso", warehouse: "bodega", productId: "p5", sku: "OFI-007", productName: "Escritorio Ejecutivo Cañar", qty: 6, ref: "PED-1042", user: "Luis Ch." },
  ],
  workOrders: [
    { id: "w1", code: "OF-2101", productId: "p2", productName: "Comedor Andino 6 sillas", qty: 2, status: "ensamblaje", start: daysAgoIso(6), due: inDaysIso(9), assignedTo: "Diego Guamán", progress: 55, orderId: "o3", materials: [{ name: "Tabla roble 2\\"", qty: "14 und", cost: 320 }, { name: "Tapiz lino crudo", qty: "9 m", cost: 96 }, { name: "Espuma D30 asiento", qty: "12 planchas", cost: 84 }], laborCost: 210 },
    { id: "w2", code: "OF-2102", productId: "p4", productName: "Ropero Amazonia 6 puertas", qty: 2, status: "acabado", start: daysAgoIso(12), due: inDaysIso(3), assignedTo: "Segundo M.", progress: 78, orderId: "o6", materials: [{ name: "Triplex 18mm", qty: "6 planchas", cost: 282 }, { name: "Canto PVC nogal", qty: "60 m", cost: 48 }, { name: "Bisagras slow-close", qty: "24 und", cost: 96 }], laborCost: 180 },
    { id: "w3", code: "OF-2103", productId: "p6", productName: "Poltrona Esmeraldas", qty: 6, status: "corte", start: daysAgoIso(1), due: inDaysIso(14), assignedTo: "Diego Guamán", progress: 22, orderId: null, materials: [{ name: "Bouclé esmeralda", qty: "16 m", cost: 176 }, { name: "Base giratoria", qty: "6 und", cost: 132 }], laborCost: 150 },
    { id: "w4", code: "OF-2104", productId: "p7", productName: "Silla Comedor Andina (und)", qty: 24, status: "qa", start: daysAgoIso(9), due: inDaysIso(2), assignedTo: "Segundo M.", progress: 90, orderId: null, materials: [{ name: "Cuadrante roble", qty: "96 m", cost: 288 }, { name: "Asiento tapizado", qty: "24 und", cost: 144 }], laborCost: 240 },
  ],
  payLinks: [
    { id: "pl1", token: "pp_9Kf3WqLm2ZxR", concept: "Anticipo 50% · PED-1042 Quiport Offices", orderId: "o2", amount: 2443.75, customerName: "Corporación Quiport Offices", createdAt: daysAgoIso(3, 16), expiresAt: inDaysIso(4), status: "pendiente", method: null, authCode: null, last4: null },
    { id: "pl2", token: "pp_T7bNcV4jH1sQ", concept: "Saldo pedido · PED-1036 Mueblisur", orderId: "o6", amount: 4036.1, customerName: "Distribuidora Mueblisur", createdAt: daysAgoIso(2, 9), expiresAt: inDaysIso(5), status: "pendiente", method: null, authCode: null, last4: null },
    { id: "pl3", token: "pp_Zx8RdM3pK6wA", concept: "Venta web · Sofá Nápoles", orderId: "o1", amount: 1033.85, customerName: "María Fernanda Icaza", createdAt: daysAgoIso(4, 12), expiresAt: daysAgoIso(2), status: "pagado", method: "PayPhone · Visa", authCode: "00442187", last4: "4421" },
    { id: "pl4", token: "pp_Q2hJvB9nS5tE", concept: "Reserva poltrona (venció)", orderId: null, amount: 389, customerName: "Cliente web sin registro", createdAt: daysAgoIso(9, 10), expiresAt: daysAgoIso(7), status: "expirado", method: null, authCode: null, last4: null },
  ],
  accessLinks: [
    { id: "al1", token: "ac_V4nWq8LmZ1xK", label: "Inventario bodega — Luis", role: "bodega", scope: "Movimientos y kardex", createdAt: daysAgoIso(5, 9), expiresAt: inDaysIso(2), maxUses: 1, uses: 1, status: "usado" },
    { id: "al2", token: "ac_H7sRd3pN6cJf", label: "Cobranzas semana — Rocío", role: "contabilidad", scope: "CxC, recibos por validar y conciliación", createdAt: daysAgoIso(1, 8), expiresAt: inDaysIso(6), maxUses: 1, uses: 0, status: "activo" },
    { id: "al3", token: "ac_B2mTv9qXw4Ls", label: "Confirmar specs comedor — Barragán", role: "cliente", scope: "Link único con fotos de spec", createdAt: daysAgoIso(6, 10), expiresAt: inDaysIso(1), maxUses: 1, uses: 1, status: "usado" },
    { id: "al4", token: "ac_Y6kPf1nGz8Rd", label: "Catálogo mayorista Mueblisur", role: "cliente", scope: "Lista de precios distribuidor", createdAt: daysAgoIso(12, 11), expiresAt: daysAgoIso(5), maxUses: 1, uses: 0, status: "expirado" },
    { id: "al5", token: "ac_J9wQm5tVb2Hn", label: "Auditoría externa (revocado)", role: "gerencia", scope: "Reportes financieros", createdAt: daysAgoIso(20, 10), expiresAt: daysAgoIso(10), maxUses: 1, uses: 0, status: "revocado" },
  ],
  media: [
    { id: "m1", name: "sofa-napoles-hero.jpg", kind: "foto", tag: "Sala", size: "2,4 MB", src: "https://image.qwenlm.ai/generated-images/876c81bb-04b7-4ecf-b3c5-5409001f7961/_result.png", usage: ["PIM · SAL-001", "Catálogo web"], uploadedAt: daysAgoIso(30) },
    { id: "m2", name: "comedor-andino-estudio.jpg", kind: "foto", tag: "Comedor", size: "2,1 MB", src: "https://image.qwenlm.ai/generated-images/c4c2d864-549d-421e-a9e9-ee3f14fc7e78/_result.png", usage: ["PIM · COM-014", "Instagram"], uploadedAt: daysAgoIso(28) },
    { id: "m3", name: "cama-king-roble.jpg", kind: "foto", tag: "Dormitorio", size: "1,9 MB", src: "https://image.qwenlm.ai/generated-images/4c03f0dd-cf51-487c-964a-67a34323efb3/_result.png", usage: ["PIM · DOR-030"], uploadedAt: daysAgoIso(25) },
    { id: "m4", name: "ropero-amazonia-amb.jpg", kind: "foto", tag: "Dormitorio", size: "2,6 MB", src: "https://image.qwenlm.ai/generated-images/9248a4c4-1d9b-4611-b940-870a805ce7d5/_result.png", usage: ["PIM · DOR-042"], uploadedAt: daysAgoIso(21) },
    { id: "m5", name: "escritorio-canar.jpg", kind: "foto", tag: "Oficina", size: "1,7 MB", src: "https://image.qwenlm.ai/generated-images/2c56f5e9-08cb-49de-b7a4-963536e14050/_result.png", usage: ["PIM · OFI-007", "Link cotización"], uploadedAt: daysAgoIso(18) },
    { id: "m6", name: "poltrona-esmeraldas.jpg", kind: "foto", tag: "Sala", size: "2,2 MB", src: "https://image.qwenlm.ai/generated-images/087283f8-cf51-449d-9d01-520b4731854c/_result.png", usage: ["PIM · SAL-023", "Catálogo web", "Meta Ads"], uploadedAt: daysAgoIso(15) },
    { id: "m7", name: "plano-comedor-andino.dwg", kind: "plano", tag: "Taller", size: "840 KB", src: "", usage: ["OF-2101", "OF-2104"], uploadedAt: daysAgoIso(12) },
    { id: "m8", name: "render-suite-hotel.png", kind: "render", tag: "Proyectos", size: "3,8 MB", src: "", usage: ["Cotización Hotel Plaza Grande"], uploadedAt: daysAgoIso(8) },
  ],
  journal: [
    { id: "j1", date: daysAgoIso(0, 9), doc: "FAC-000231", account: "1020 Bancos Pichincha", detail: "Cobro PayPhone · PED-1038", debit: 5092.2, credit: 0 },
    { id: "j2", date: daysAgoIso(0, 9), doc: "FAC-000231", account: "4010 Ventas", detail: "Venta 12 poltronas · Hotel Plaza Grande", debit: 0, credit: 4428 },
    { id: "j3", date: daysAgoIso(0, 9), doc: "FAC-000231", account: "2030 IVA por pagar", detail: "IVA 15% facturado", debit: 0, credit: 664.2 },
    { id: "j4", date: daysAgoIso(1, 11), doc: "COM-0892", account: "1040 Inventario", detail: "Compra tabla roble · Maderera del Austro", debit: 1980, credit: 0 },
    { id: "j5", date: daysAgoIso(1, 11), doc: "COM-0892", account: "1050 IVA pagado", detail: "IVA 15% en compras", debit: 297, credit: 0 },
    { id: "j6", date: daysAgoIso(1, 11), doc: "COM-0892", account: "2010 Proveedores", detail: "CxP Maderera del Austro", debit: 0, credit: 2277 },
    { id: "j7", date: daysAgoIso(2, 16), doc: "FAC-000230", account: "1030 Cuentas por cobrar", detail: "Venta crédito 45d · Quiport Offices", debit: 4887.5, credit: 0 },
    { id: "j8", date: daysAgoIso(2, 16), doc: "FAC-000230", account: "4010 Ventas", detail: "6 escritorios + 4 poltronas", debit: 0, credit: 4250 },
    { id: "j9", date: daysAgoIso(2, 16), doc: "FAC-000230", account: "2030 IVA por pagar", detail: "IVA 15% facturado", debit: 0, credit: 637.5 },
    { id: "j10", date: daysAgoIso(5, 10), doc: "GAS-0077", account: "6020 Arriendo showroom", detail: "Arriendo local Av. Eloy Alfaro", debit: 1200, credit: 0 },
    { id: "j11", date: daysAgoIso(5, 10), doc: "GAS-0077", account: "1020 Bancos Pichincha", detail: "Pago transferencia", debit: 0, credit: 1200 },
    { id: "j12", date: daysAgoIso(6, 9), doc: "ROL-0021", account: "6010 Sueldos y salarios", detail: "Nómina taller y ventas", debit: 3850, credit: 0 },
    { id: "j13", date: daysAgoIso(6, 9), doc: "ROL-0021", account: "2040 Sueldos por pagar", detail: "Pago quincena", debit: 0, credit: 3850 },
    { id: "j14", date: daysAgoIso(5, 9), doc: "REC-0402", account: "1020 Bancos Pichincha", detail: "Anticipo 50% PED-1043 · validado", debit: 1367.35, credit: 0 },
    { id: "j15", date: daysAgoIso(5, 9), doc: "REC-0402", account: "2050 Anticipos clientes", detail: "Anticipo Estudio Barragán", debit: 0, credit: 1367.35 },
  ],
  invoices: [
    { id: "i1", number: "001-001-000000231", auth: "2109202501179234567800112345678914509876543210987", customerId: "c6", customer: "Hotel Plaza Grande Suites", date: daysAgoIso(0, 9), base: 4428, iva: 664.2, total: 5092.2, status: "pagada", orderId: "o5" },
    { id: "i2", number: "001-001-000000230", auth: "1809202501179234567800112345678914509876543211245", customerId: "c2", customer: "Corporación Quiport Offices", date: daysAgoIso(2, 16), base: 4250, iva: 637.5, total: 4887.5, status: "por_cobrar", orderId: "o2" },
    { id: "i3", number: "001-001-000000229", auth: "1209202501179234567800112345678914509876543219832", customerId: "c3", customer: "Distribuidora Mueblisur", date: daysAgoIso(8, 14), base: 2407, iva: 361.05, total: 2768.05, status: "emitida", orderId: "o6" },
    { id: "i4", number: "001-001-000000228", auth: "2908202501179234567800112345678914509876543210771", customerId: "c2", customer: "Corporación Quiport Offices", date: daysAgoIso(25, 10), base: 2208, iva: 331.2, total: 2539.2, status: "pagada", orderId: "o7" },
    { id: "i5", number: "001-001-000000227", auth: "2508202501179234567800112345678914509876543215540", customerId: "c1", customer: "María Fernanda Icaza", date: daysAgoIso(30, 12), base: 1189, iva: 178.35, total: 1367.35, status: "pagada", orderId: null },
    { id: "i6", number: "001-001-000000226", auth: "2008202501179234567800112345678914509876543216612", customerId: "c4", customer: "Estudio Arq. Barragán", date: daysAgoIso(38, 11), base: 3900, iva: 585, total: 4485, status: "pagada", orderId: null },
  ],
  notas: [
    { id: "nc1", number: "001-001-000000012", auth: "1508202501179234567800112345678914509876543214409", invoiceNumber: "001-001-000000224", customer: "Distribuidora Mueblisur", date: daysAgoIso(42, 10), motivo: "Devolución por daño en transporte (1 sofá)", amount: 953.35 },
  ],
  despachos: [
    {
      id: "d1", code: "DSP-3019", orderId: "o5", orderCode: "PED-1038", customer: "Hotel Plaza Grande Suites", city: "Quito",
      transportId: "s6", placa: "GSF-2210", conductor: "M. Saltos", motivo: "venta", fecha: daysAgoIso(3, 8),
      ruta: "Bodega Central (Calderón) → Centro Histórico, Quito", bultos: 12, pesoKg: 312,
      guia: { numero: "001-001-000000056", auth: "0209202501179234567800112345678914509876543217788", xml: "<guiaRemision>\\n  <infoTributaria><ruc>1792345678001</ruc><razonSocial>Andina Madera & Hogar S.A.</razonSocial></infoTributaria>\\n  <infoGuia><motivo>Venta</motivo><dirPartida>Panamericana Norte km 14, Calderón</dirPartida></infoGuia>\\n  <transportista><razonSocial>Fletes Rápidos GYE</razonSocial><placa>GSF-2210</placa></transportista>\\n  <ruta>Calderón → Centro Histórico, Quito</ruta>\\n  <bultos>12</bultos><pesoKg>312</pesoKg>\\n</guiaRemision>" },
      estado: "entregado",
    },
    {
      id: "d2", code: "DSP-3021", orderId: "o1", orderCode: "PED-1041", customer: "María Fernanda Icaza", city: "Quito",
      transportId: "s5", placa: "PCH-1194", conductor: "J. Tipán", motivo: "venta", fecha: daysAgoIso(1, 9),
      ruta: "Showroom Eloy Alfaro → Cumbayá, Quito", bultos: 2, pesoKg: 68,
      guia: null,
      estado: "en_ruta",
    },
  ],
  materials: [
    { id: "mt1", code: "MP-001", name: "Tabla laurel 2\\"", unit: "und", stock: 64, min: 30, costUnit: 14.5, supplierId: "s1" },
    { id: "mt2", code: "MP-002", name: "Tabla roble 2\\"", unit: "und", stock: 38, min: 25, costUnit: 22.8, supplierId: "s1" },
    { id: "mt3", code: "MP-003", name: "Triplex 18mm", unit: "plan", stock: 14, min: 10, costUnit: 47, supplierId: "s1" },
    { id: "mt4", code: "MP-004", name: "Espuma D30", unit: "plan", stock: 26, min: 15, costUnit: 7, supplierId: "s2" },
    { id: "mt5", code: "MP-005", name: "Lino crudo T-04", unit: "m", stock: 41, min: 30, costUnit: 9.5, supplierId: "s3" },
    { id: "mt6", code: "MP-006", name: "Bouclé esmeralda", unit: "m", stock: 12, min: 20, costUnit: 11, supplierId: "s3" },
    { id: "mt7", code: "MP-007", name: "Base giratoria metal", unit: "und", stock: 3, min: 12, costUnit: 22, supplierId: "s4" },
    { id: "mt8", code: "MP-008", name: "Canto PVC nogal", unit: "m", stock: 140, min: 60, costUnit: 0.8, supplierId: "s1" },
  ],
  boms: [
    { productId: "p1", lines: [{ materialId: "mt1", qty: 9, unit: "und" }, { materialId: "mt4", qty: 8, unit: "plan" }, { materialId: "mt5", qty: 11, unit: "m" }], laborMin: 960 },
    { productId: "p2", lines: [{ materialId: "mt2", qty: 14, unit: "und" }, { materialId: "mt5", qty: 4.5, unit: "m" }, { materialId: "mt4", qty: 6, unit: "plan" }], laborMin: 1200 },
    { productId: "p4", lines: [{ materialId: "mt3", qty: 6, unit: "plan" }, { materialId: "mt8", qty: 30, unit: "m" }, { materialId: "mt1", qty: 4, unit: "und" }], laborMin: 840 },
    { productId: "p6", lines: [{ materialId: "mt6", qty: 4, unit: "m" }, { materialId: "mt7", qty: 1, unit: "und" }, { materialId: "mt4", qty: 2, unit: "plan" }], laborMin: 300 },
  ],
  events: [
    { id: "e1", ts: Date.now() - 42000, type: "pago", msg: "Recibo REC-0407 registrado · esperando validación del dueño" },
    { id: "e2", ts: Date.now() - 96000, type: "stock", msg: "Ingreso bodega +4 · DOR-030 Cama King Roble" },
    { id: "e3", ts: Date.now() - 180000, type: "web", msg: "Pedido bajo specs recibido del cotizador web · PED-1045" },
    { id: "e4", ts: Date.now() - 300000, type: "taller", msg: "OF-2101 pasó a ENSAMBLAJE · Diego Guamán" },
    { id: "e5", ts: Date.now() - 420000, type: "factura", msg: "FAC-000231 autorizada por SRI · Hotel Plaza Grande" },
  ],
  team: [
    { id: "t1", name: "Andrés Yépez", role: "gerencia", email: "gerencia@andinahogar.ec", online: true, lastActive: "ahora" },
    { id: "t2", name: "Paola Cevallos", role: "vendedor", email: "ventas@andinahogar.ec", online: true, lastActive: "hace 2min" },
    { id: "t3", name: "Luis Chaluis", role: "bodega", email: "bodega@andinahogar.ec", online: true, lastActive: "hace 5min" },
    { id: "t4", name: "Rocío Mena", role: "contabilidad", email: "contabilidad@andinahogar.ec", online: false, lastActive: "hace 1h" },
    { id: "t5", name: "Diego Guamán", role: "taller", email: "taller@andinahogar.ec", online: true, lastActive: "hace 12min" },
  ],
  settings: {
    company: { name: "BLETIA", ruc: "1792345678001", address: "Calle Larga 1-20 y Av. Solano, Cuenca", phone: "07 284 5511", email: "hola@bletia.ec" },
    payphone: { mode: "sandbox", shopId: "SHP-EC-0042", terminalId: "TRM-01", token: "sbx_7f3Kp92MzQ81xVc4" },
    linkBase: "https://pagos.andinahogar.ec/lnk",
    sequence: { invoice: 232, order: 1046, link: 128, recibo: 408, despacho: 3022, guia: 57, nc: 13 },
  },
  cuentas: [
    { id: "cu1", nombre: "María Fernanda Icaza", email: "mficaza@gmail.com", ciudad: "Quito", desde: daysAgoIso(400), cupon: "5% dcto primera compra" },
    { id: "cu2", nombre: "Hotel Plaza Grande Suites", email: "ffurnish@plazagrande.ec", ciudad: "Quito", desde: daysAgoIso(320), cupon: null },
  ],
  cms: cmsSeed,
  session: { events: 5, salesToday: 5092.2, peakEps: 0, startedAt: Date.now(), user: null },
});
`,We=`import { createContext, useContext, useEffect, useReducer } from "react";
import type { ReactNode } from "react";
import type { AppState, Channel, Customer, EventItem, Invoice, JournalEntry, Order, OrderKind, OrderStatus, PayLink, Product, WorkOrder, WoStatus } from "./types";
import { seedState } from "./seed";
import { calcTotals, money, sriAuth, token, uid } from "./util";

const LS_KEY = "bletia-suite-v1";

type Action = { type: string; [k: string]: any };

export interface Toast { id: string; kind: "ok" | "warn" | "info"; msg: string; }

interface StoreCtx {
  state: AppState;
  dispatch: (a: Action) => void;
  toasts: Toast[];
  toast: (msg: string, kind?: Toast["kind"]) => void;
  burst: (n: number) => Promise<number>;
  bursting: boolean;
}

const Ctx = createContext<StoreCtx | null>(null);
export const useStore = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("store missing");
  return c;
};

const mkEvent = (type: EventItem["type"], msg: string): EventItem => ({ id: uid(), ts: Date.now(), type, msg });

const woProgress: Record<WoStatus, number> = { planificada: 5, corte: 25, ensamblaje: 55, acabado: 78, qa: 90, terminada: 100 };
export const woFlow: WoStatus[] = ["planificada", "corte", "ensamblaje", "acabado", "qa", "terminada"];

/* ── Máquina de estados portada de EstadoPedidoErp.php (código real BLETIA) ── */
export const orderFlow: OrderStatus[] = [
  "pendiente", "por_aprobar", "aprobado", "confirmado", "enviado_proveedor",
  "en_bodega", "listo_despacho", "despachado", "entregado",
];

export const estadosLabel: Record<OrderStatus, string> = {
  borrador: "Borrador", pendiente: "Pendiente", por_aprobar: "Por aprobar", aprobado: "Aprobado",
  confirmado: "Confirmado", enviado_proveedor: "Enviado a proveedor", en_fabricacion: "En fabricación",
  en_produccion: "En producción", listo_proveedor: "Listo en proveedor", en_bodega: "En bodega",
  listo_despacho: "Listo despacho", despachado: "Despachado", entregado: "Entregado",
  anulado: "Anulado", cancelado: "Cancelado",
};

/* Lo que el CLIENTE ve en su link de seguimiento (ESTADOS_CLIENTE del código real) */
export const estadosCliente: Record<OrderStatus, string> = {
  borrador: "En proceso", pendiente: "En revisión", por_aprobar: "En revisión", aprobado: "Confirmado",
  confirmado: "Confirmado", enviado_proveedor: "En fabricación", en_fabricacion: "En fabricación",
  en_produccion: "En producción (taller)", listo_proveedor: "Casi listo", en_bodega: "En bodega",
  listo_despacho: "Listo para despacho", despachado: "Despachado", entregado: "Entregado",
  anulado: "Anulado", cancelado: "Anulado",
};

export const pagadoValidado = (o: Order) => o.recibos.filter((r) => r.validado).reduce((a, r) => a + r.amount, 0);
export const saldoDe = (o: Order) => Math.max(0, Math.round((o.total - pagadoValidado(o)) * 100) / 100);

const pad9 = (n: number) => String(n).padStart(9, "0");

function emitInvoice(s: AppState, order: Order) {
  const number = \`001-001-\${pad9(s.settings.sequence.invoice)}\`;
  const invoice: Invoice = { id: uid(), number, auth: sriAuth(), customerId: order.customerId, customer: order.customer, date: new Date().toISOString(), base: order.subtotal, iva: order.iva, total: order.total, status: order.payment === "pagado" ? "pagada" : "por_cobrar", orderId: order.id };
  const entries: JournalEntry[] = [
    { id: uid(), date: new Date().toISOString(), doc: number, account: order.payment === "pagado" ? "1020 Bancos Pichincha" : "1030 Cuentas por cobrar", detail: \`Venta \${order.code}\`, debit: order.total, credit: 0 },
    { id: uid(), date: new Date().toISOString(), doc: number, account: "4010 Ventas", detail: order.items.map((i) => i.name).join(", "), debit: 0, credit: order.subtotal },
    { id: uid(), date: new Date().toISOString(), doc: number, account: "2030 IVA por pagar", detail: "IVA 15% facturado", debit: 0, credit: order.iva },
  ];
  return { number, invoice, entries, seq: { ...s.settings.sequence, invoice: s.settings.sequence.invoice + 1 } };
}

function reduce(s: AppState, a: Action): AppState {
  switch (a.type) {
    case "EVENTS": {
      const evs = a.events as EventItem[];
      return {
        ...s,
        events: [...evs, ...s.events].slice(0, 90),
        session: {
          ...s.session,
          events: s.session.events + evs.length,
          salesToday: a.salesDelta ? s.session.salesToday + a.salesDelta : s.session.salesToday,
          peakEps: a.eps && a.eps > s.session.peakEps ? a.eps : s.session.peakEps,
        },
      };
    }
    case "CREATE_ORDER": {
      const o = a.order as Order;
      const products = o.kind === "venta"
        ? s.products.map((p) => {
            const item = o.items.find((i) => i.productId === p.id);
            return item ? { ...p, stock: { ...p.stock, showroom: Math.max(0, p.stock.showroom - item.qty) } } : p;
          })
        : s.products;
      return {
        ...s,
        products,
        orders: [o, ...s.orders],
        customers: s.customers.map((c) => (c.id === o.customerId ? { ...c, orders: c.orders + 1, total: c.total + o.total } : c)),
        settings: { ...s.settings, sequence: { ...s.settings.sequence, order: s.settings.sequence.order + 1 } },
        events: [mkEvent("venta", \`\${o.kind === "venta" ? "Venta de stock" : "Pedido bajo specs"} \${o.code} · \${money(o.total)} · \${o.customer}\`), ...s.events].slice(0, 90),
      };
    }
    case "ADVANCE_ORDER": {
      const order = s.orders.find((o) => o.id === a.id)!;
      const status = a.status as OrderStatus;
      const entry = { ts: new Date().toISOString(), user: "Paola C.", msg: \`Estado: \${estadosLabel[order.status]} → \${estadosLabel[status]}\` };
      if (status === "entregado") {
        const e = emitInvoice(s, order);
        return {
          ...s,
          orders: s.orders.map((o) => (o.id === a.id ? { ...o, status, trace: [...o.trace, entry] } : o)),
          invoices: [e.invoice, ...s.invoices],
          journal: [...e.entries, ...s.journal],
          settings: { ...s.settings, sequence: e.seq },
          events: [mkEvent("venta", \`\${order.code} ENTREGADO · el cliente ve "\${estadosCliente[status]}"\`), mkEvent("factura", \`Factura \${e.number} emitida y autorizada SRI\`), ...s.events].slice(0, 90),
        };
      }
      return {
        ...s,
        orders: s.orders.map((o) => (o.id === a.id ? { ...o, status, trace: [...o.trace, entry] } : o)),
        events: [mkEvent("venta", \`\${order.code} pasó a \${estadosLabel[status].toUpperCase()}\`), ...s.events].slice(0, 90),
      };
    }
    case "ANULA_ORDER": {
      const order = s.orders.find((o) => o.id === a.id)!;
      return {
        ...s,
        orders: s.orders.map((o) => (o.id === a.id ? { ...o, status: a.status as OrderStatus, trace: [...o.trace, { ts: new Date().toISOString(), user: "Andrés Y.", msg: \`\${a.status === "anulado" ? "Anulado" : "Cancelado"} por gerencia · motivo: \${a.motivo}\` }] } : o)),
        events: [mkEvent("venta", \`\${order.code} \${a.status === "anulado" ? "ANULADO" : "CANCELADO"} · \${a.motivo}\`), ...s.events].slice(0, 90),
      };
    }
    case "SET_TRANSPORT":
      return {
        ...s,
        orders: s.orders.map((o) => (o.id === a.id ? { ...o, transportId: a.transportId } : o)),
      };
    /* ── RecibosErp: el pago NO cuenta hasta que el dueño lo valida ── */
    case "ADD_RECIBO": {
      const order = s.orders.find((o) => o.id === a.orderId)!;
      const code = \`REC-\${String(s.settings.sequence.recibo).padStart(4, "0")}\`;
      const recibo = { id: uid(), code, date: new Date().toISOString(), amount: a.amount as number, method: a.method as string, note: (a.note as string) || "Abono registrado", validado: false };
      return {
        ...s,
        orders: s.orders.map((o) => (o.id === a.orderId ? { ...o, recibos: [...o.recibos, recibo], trace: [...o.trace, { ts: new Date().toISOString(), user: "Rocío M.", msg: \`Recibo \${code} · \${money(recibo.amount)} · \${recibo.method} — esperando validación del dueño\` }] } : o)),
        settings: { ...s.settings, sequence: { ...s.settings.sequence, recibo: s.settings.sequence.recibo + 1 } },
        events: [mkEvent("pago", \`\${code} registrado · \${money(recibo.amount)} · requiere validación\`), ...s.events].slice(0, 90),
      };
    }
    case "VALIDAR_RECIBO": {
      const order = s.orders.find((o) => o.id === a.orderId)!;
      const rec = order.recibos.find((r) => r.id === a.reciboId)!;
      const orders = s.orders.map((o) => {
        if (o.id !== a.orderId) return o;
        const recibos = o.recibos.map((r) => (r.id === a.reciboId ? { ...r, validado: true } : r));
        const totalPagado = recibos.filter((r) => r.validado).reduce((x, r) => x + r.amount, 0);
        const payment = totalPagado >= o.total - 0.01 ? ("pagado" as const) : ("parcial" as const);
        return { ...o, recibos, payment, trace: [...o.trace, { ts: new Date().toISOString(), user: "Andrés Y.", msg: \`\${rec.code} · \${money(rec.amount)} · \${rec.method} — pago VALIDADO por el dueño\` }] };
      });
      const validadoTotal = order.recibos.filter((r) => r.validado || r.id === a.reciboId).reduce((x, r) => x + r.amount, 0);
      const esTotal = validadoTotal >= order.total - 0.01;
      return {
        ...s,
        orders,
        journal: [
          { id: uid(), date: new Date().toISOString(), doc: rec.code, account: "1020 Bancos Pichincha", detail: \`\${rec.method} · \${order.code}\`, debit: rec.amount, credit: 0 },
          { id: uid(), date: new Date().toISOString(), doc: rec.code, account: esTotal ? "1030 Cuentas por cobrar" : "2050 Anticipos clientes", detail: esTotal ? \`Pago total \${order.code}\` : \`Anticipo \${order.code} · validado\`, debit: 0, credit: rec.amount },
          ...s.journal,
        ],
        events: [mkEvent("pago", \`\${rec.code} VALIDADO · \${money(rec.amount)} · saldo \${money(Math.max(0, order.total - validadoTotal))} · \${order.customer}\`), ...s.events].slice(0, 90),
      };
    }
    case "SEND_CONFIRM": {
      const order = s.orders.find((o) => o.id === a.id)!;
      return {
        ...s,
        orders: s.orders.map((o) => (o.id === a.id ? { ...o, confirmToken: \`cf_\${token(10)}\`, trace: [...o.trace, { ts: new Date().toISOString(), user: "sistema", msg: "Link único de confirmación (con fotos de spec) enviado al cliente" }] } : o)),
        events: [mkEvent("link", \`Link único enviado · \${order.code} · \${order.customer} confirma specs con fotos\`), ...s.events].slice(0, 90),
      };
    }
    case "SET_CONFIRM": {
      const order = s.orders.find((o) => o.id === a.id)!;
      return {
        ...s,
        orders: s.orders.map((o) => (o.id === a.id ? { ...o, confirmedAt: new Date().toISOString(), trace: [...o.trace, { ts: new Date().toISOString(), user: "cliente", msg: "Cliente confirmó specs y fotos del link único ✓" }] } : o)),
        events: [mkEvent("web", \`\${order.customer} confirmó specs de \${order.code} vía link único\`), ...s.events].slice(0, 90),
      };
    }
    case "CREATE_DESPACHO": {
      const d = a.despacho;
      return {
        ...s,
        despachos: [d, ...s.despachos],
        orders: s.orders.map((o) => (o.id === d.orderId ? { ...o, status: "despachado" as const, transportId: d.transportId, trace: [...o.trace, { ts: new Date().toISOString(), user: "Luis Ch.", msg: \`Despacho \${d.code} creado · \${d.bultos} bultos · placa \${d.placa}\` }] } : o)),
        settings: { ...s.settings, sequence: { ...s.settings.sequence, despacho: s.settings.sequence.despacho + 1 } },
        events: [mkEvent("logistica", \`\${d.code} en preparación · \${d.bultos} bultos → \${d.city}\`), ...s.events].slice(0, 90),
      };
    }
    case "ADVANCE_DESPACHO": {
      const d = s.despachos.find((x) => x.id === a.id)!;
      if (a.estado === "entregado") {
        const order = s.orders.find((o) => o.id === d.orderId)!;
        const e = emitInvoice(s, order);
        return {
          ...s,
          despachos: s.despachos.map((x) => (x.id === a.id ? { ...x, estado: "entregado" as const } : x)),
          orders: s.orders.map((o) => (o.id === d.orderId ? { ...o, status: "entregado" as const, trace: [...o.trace, { ts: new Date().toISOString(), user: d.conductor, msg: \`Entregado en \${d.ruta} · \${d.bultos} bultos conformados\` }] } : o)),
          invoices: [e.invoice, ...s.invoices],
          journal: [...e.entries, ...s.journal],
          settings: { ...s.settings, sequence: e.seq },
          events: [mkEvent("logistica", \`\${d.code} ENTREGADO · \${d.customer}\`), mkEvent("factura", \`Factura \${e.number} emitida y autorizada SRI\`), ...s.events].slice(0, 90),
        };
      }
      return {
        ...s,
        despachos: s.despachos.map((x) => (x.id === a.id ? { ...x, estado: a.estado } : x)),
        events: [mkEvent("logistica", \`\${d.code} \${a.estado === "en_ruta" ? "salió en ruta · " + d.placa : "en preparación"}\`), ...s.events].slice(0, 90),
      };
    }
    case "EMIT_GUIA": {
      const d = s.despachos.find((x) => x.id === a.id)!;
      const numero = \`001-001-\${pad9(s.settings.sequence.guia)}\`;
      const transport = s.suppliers.find((sp) => sp.id === d.transportId);
      const xml = \`<guiaRemision>\\n  <infoTributaria><ruc>\${s.settings.company.ruc}</ruc><razonSocial>\${s.settings.company.name}</razonSocial></infoTributaria>\\n  <infoGuia><motivo>\${d.motivo === "venta" ? "Venta" : "Traslado"}</motivo><dirPartida>\${s.settings.company.address}</dirPartida></infoGuia>\\n  <transportista><razonSocial>\${transport?.name ?? ""}</razonSocial><placa>\${d.placa}</placa></transportista>\\n  <ruta>\${d.ruta}</ruta>\\n  <bultos>\${d.bultos}</bultos><pesoKg>\${d.pesoKg}</pesoKg>\\n</guiaRemision>\`;
      return {
        ...s,
        despachos: s.despachos.map((x) => (x.id === a.id ? { ...x, guia: { numero, auth: sriAuth(), xml } } : x)),
        orders: s.orders.map((o) => (o.id === d.orderId ? { ...o, trace: [...o.trace, { ts: new Date().toISOString(), user: "sistema", msg: \`Guía de remisión \${numero} autorizada por el SRI\` }] } : o)),
        settings: { ...s.settings, sequence: { ...s.settings.sequence, guia: s.settings.sequence.guia + 1 } },
        events: [mkEvent("factura", \`Guía de remisión \${numero} autorizada SRI · \${d.code}\`), ...s.events].slice(0, 90),
      };
    }
    case "MATERIAL_MOV": {
      const mat = s.materials.find((m) => m.id === a.id)!;
      const delta = a.delta as number;
      return {
        ...s,
        materials: s.materials.map((m) => (m.id === a.id ? { ...m, stock: Math.round(Math.max(0, m.stock + delta) * 100) / 100 } : m)),
        events: [mkEvent("stock", \`\${delta > 0 ? "Ingreso" : "Consumo"} MP · \${mat.name} \${delta > 0 ? "+" : ""}\${delta} \${mat.unit} · \${a.ref}\`), ...s.events].slice(0, 90),
      };
    }
    case "CREATE_PAYLINK": {
      const pl = a.link as PayLink;
      return {
        ...s,
        payLinks: [pl, ...s.payLinks],
        settings: { ...s.settings, sequence: { ...s.settings.sequence, link: s.settings.sequence.link + 1 } },
        events: [mkEvent("link", \`Link de cobro generado · \${money(pl.amount)} · \${pl.customerName}\`), ...s.events].slice(0, 90),
      };
    }
    case "PAY_LINK": {
      const pl = s.payLinks.find((l) => l.id === a.id)!;
      const payLinks = s.payLinks.map((l) => (l.id === a.id ? { ...l, status: "pagado" as const, method: a.method, last4: a.last4, authCode: String(Math.floor(10000000 + Math.random() * 89999999)) } : l));
      const extra: EventItem[] = [mkEvent("pago", \`PayPhone acreditó \${money(pl.amount)} · \${pl.concept} · validado automáticamente\`)];
      if (pl.orderId) {
        const order = s.orders.find((o) => o.id === pl.orderId)!;
        const e = emitInvoice(s, { ...order, payment: "pagado" });
        const code = \`REC-\${String(s.settings.sequence.recibo).padStart(4, "0")}\`;
        return {
          ...s,
          payLinks,
          orders: s.orders.map((o) => (o.id === pl.orderId ? { ...o, payment: "pagado" as const, recibos: [...o.recibos, { id: uid(), code, date: new Date().toISOString(), amount: pl.amount, method: \`\${a.method} •••• \${a.last4}\`, note: "Cobro automático vía link PayPhone", validado: true }], trace: [...o.trace, { ts: new Date().toISOString(), user: "sistema", msg: \`Link PayPhone pagado · \${money(pl.amount)} · \${a.method} •••• \${a.last4} · validado automáticamente\` }] } : o)),
          invoices: [e.invoice, ...s.invoices],
          journal: [...e.entries, ...s.journal],
          settings: { ...s.settings, sequence: { ...e.seq, recibo: s.settings.sequence.recibo + 1 } },
          events: [...extra, mkEvent("factura", \`Factura \${e.number} emitida · autorizada por SRI\`), ...s.events].slice(0, 90),
          session: { ...s.session, salesToday: s.session.salesToday + pl.amount },
        };
      }
      return { ...s, payLinks, events: [...extra, ...s.events].slice(0, 90), session: { ...s.session, salesToday: s.session.salesToday + pl.amount } };
    }
    case "CANCEL_PAYLINK":
      return { ...s, payLinks: s.payLinks.map((l) => (l.id === a.id ? { ...l, status: "anulado" as const } : l)), events: [mkEvent("link", "Link de cobro anulado antes de su vencimiento"), ...s.events].slice(0, 90) };
    case "CREATE_ACCESS":
      return { ...s, accessLinks: [a.link, ...s.accessLinks], events: [mkEvent("link", \`Link de un solo uso creado · rol \${a.link.role.toUpperCase()}\`), ...s.events].slice(0, 90) };
    case "REVOKE_ACCESS":
      return { ...s, accessLinks: s.accessLinks.map((l) => (l.id === a.id ? { ...l, status: "revocado" as const } : l)), events: [mkEvent("link", "Link de acceso revocado manualmente"), ...s.events].slice(0, 90) };
    case "REDEEM_ACCESS":
      return { ...s, accessLinks: s.accessLinks.map((l) => (l.id === a.id ? { ...l, uses: l.uses + 1, status: l.uses + 1 >= l.maxUses ? ("usado" as const) : l.status } : l)) };
    case "CREATE_PRODUCT": {
      const p = a.product as Product;
      return { ...s, products: [p, ...s.products], events: [mkEvent("stock", \`Producto \${p.sku} · \${p.name} publicado en PIM\`), ...s.events].slice(0, 90) };
    }
    case "CREATE_CUSTOMER": {
      const c = a.customer as Customer;
      return { ...s, customers: [c, ...s.customers], events: [mkEvent("crm", \`Cliente \${c.id} · \${c.name} registrado desde Operaciones\`), ...s.events].slice(0, 90) };
    }
    case "PATCH_PRODUCT":
      return { ...s, products: s.products.map((p) => (p.id === a.id ? { ...p, ...a.patch } : p)) };
    case "MOVEMENT": {
      const mv = a.mv;
      const wh = mv.warehouse as "showroom" | "bodega" | "taller";
      const products = s.products.map((p) => {
        if (p.id !== mv.productId) return p;
        const stock = { ...p.stock };
        if (mv.type === "ingreso") stock[wh] += mv.qty;
        if (mv.type === "egreso") stock[wh] = Math.max(0, stock[wh] - mv.qty);
        if (mv.type === "ajuste") stock[wh] = Math.max(0, stock[wh] + mv.qty);
        return { ...p, stock };
      });
      return { ...s, products, movements: [mv, ...s.movements].slice(0, 80), events: [mkEvent("stock", \`\${mv.type === "ingreso" ? "Ingreso" : mv.type === "egreso" ? "Egreso" : mv.type === "ajuste" ? "Ajuste" : "Transferencia"} \${mv.sku} ×\${Math.abs(mv.qty)} · \${mv.warehouse}\`), ...s.events].slice(0, 90) };
    }
    case "CREATE_WO": {
      const w = a.wo as WorkOrder;
      return { ...s, workOrders: [w, ...s.workOrders], events: [mkEvent("taller", \`Orden \${w.code} planificada · \${w.qty}× \${w.productName}\`), ...s.events].slice(0, 90) };
    }
    case "ADVANCE_WO": {
      const wo = s.workOrders.find((w) => w.id === a.id)!;
      const workOrders = s.workOrders.map((w) => (w.id === a.id ? { ...w, status: a.status as WoStatus, progress: woProgress[a.status as WoStatus] } : w));
      if (a.status === "terminada") {
        const products = s.products.map((p) => (p.id === wo.productId ? { ...p, stock: { ...p.stock, bodega: p.stock.bodega + wo.qty } } : p));
        return { ...s, workOrders, products, events: [mkEvent("taller", \`\${wo.code} TERMINADA · +\${wo.qty} und a bodega\`), mkEvent("stock", \`Ingreso bodega +\${wo.qty} · \${wo.productName}\`), ...s.events].slice(0, 90) };
      }
      return { ...s, workOrders, events: [mkEvent("taller", \`\${wo.code} pasó a \${(a.status as string).toUpperCase()}\`), ...s.events].slice(0, 90) };
    }
    case "ADD_CUSTOMER":
      return { ...s, customers: [a.customer, ...s.customers], events: [mkEvent("web", \`Cliente registrado · \${a.customer.name}\`), ...s.events].slice(0, 90) };
    case "ADD_SUPPLIER":
      return { ...s, suppliers: [a.supplier, ...s.suppliers] };
    case "ADD_JOURNAL":
      return { ...s, journal: [...a.entries, ...s.journal], events: [mkEvent("factura", \`Asiento manual registrado · \${a.entries[0].account}\`), ...s.events].slice(0, 90) };
    case "ANULAR_FACTURA": {
      const inv = s.invoices.find((i) => i.id === a.id)!;
      const number = \`001-001-\${pad9(s.settings.sequence.nc)}\`;
      return {
        ...s,
        invoices: s.invoices.map((i) => (i.id === a.id ? { ...i, status: "anulada" as const } : i)),
        notas: [{ id: uid(), number, auth: sriAuth(), invoiceNumber: inv.number, customer: inv.customer, date: new Date().toISOString(), motivo: a.motivo, amount: inv.total }, ...s.notas],
        journal: [
          { id: uid(), date: new Date().toISOString(), doc: \`NC \${number}\`, account: "4010 Ventas", detail: \`Reverso por NC · \${inv.number}\`, debit: inv.base, credit: 0 },
          { id: uid(), date: new Date().toISOString(), doc: \`NC \${number}\`, account: "2030 IVA por pagar", detail: "Reverso IVA 15%", debit: inv.iva, credit: 0 },
          { id: uid(), date: new Date().toISOString(), doc: \`NC \${number}\`, account: "1030 Cuentas por cobrar", detail: \`NC a favor · \${inv.customer}\`, debit: 0, credit: inv.total },
          ...s.journal,
        ],
        settings: { ...s.settings, sequence: { ...s.settings.sequence, nc: s.settings.sequence.nc + 1 } },
        events: [mkEvent("factura", \`Nota de crédito \${number} emitida · anula \${inv.number} · \${a.motivo}\`), ...s.events].slice(0, 90),
      };
    }
    case "LOGIN":
      return { ...s, session: { ...s.session, user: { name: a.name, role: a.role } } };
    case "LOGOUT":
      return { ...s, session: { ...s.session, user: null } };
    case "ADD_CUENTA":
      return { ...s, cuentas: [a.cuenta, ...s.cuentas] };
    /* ── CMS: páginas, blog y productos de la web pública ── */
    case "CMS_CONFIG":
      return { ...s, cms: { ...s.cms, config: { ...s.cms.config, ...a.patch } } };
    case "CMS_PAGE": {
      const prev = s.cms.paginas.find((p) => p.id === a.page.id);
      const redirects = prev && prev.slug !== a.page.slug ? [...s.cms.redirects, { de: \`/\${prev.slug}\`, a: \`/\${a.page.slug}\`, ts: new Date().toISOString() }] : s.cms.redirects;
      const paginas = prev ? s.cms.paginas.map((p) => (p.id === a.page.id ? a.page : p)) : [...s.cms.paginas, a.page];
      return { ...s, cms: { ...s.cms, paginas, redirects }, events: [mkEvent("web", \`Página "\${a.page.titulo}" publicada en /\${a.page.slug}\${prev && prev.slug !== a.page.slug ? \` (redirección desde /\${prev.slug})\` : ""}\`), ...s.events].slice(0, 90) };
    }
    case "CMS_POST": {
      const prev = s.cms.posts.find((p) => p.id === a.post.id);
      const catSlug = (c: string) => c.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      let redirects = s.cms.redirects;
      if (prev && (prev.slug !== a.post.slug || prev.categoria !== a.post.categoria)) {
        redirects = [...redirects, { de: \`/\${catSlug(prev.categoria)}/\${prev.slug}\`, a: \`/\${catSlug(a.post.categoria)}/\${a.post.slug}\`, ts: new Date().toISOString() }];
      }
      const posts = prev ? s.cms.posts.map((p) => (p.id === a.post.id ? a.post : p)) : [a.post, ...s.cms.posts];
      return { ...s, cms: { ...s.cms, posts, redirects }, events: [mkEvent("web", \`Entrada "\${a.post.titulo}" publicada en /\${catSlug(a.post.categoria)}/\${a.post.slug}\`), ...s.events].slice(0, 90) };
    }
    case "CMS_PRODUCT": {
      const prev = s.cms.productos.find((p) => p.id === a.prod.id);
      const redirects = prev && prev.slug !== a.prod.slug ? [...s.cms.redirects, { de: \`/producto/\${prev.slug}\`, a: \`/producto/\${a.prod.slug}\`, ts: new Date().toISOString() }] : s.cms.redirects;
      const productos = prev ? s.cms.productos.map((p) => (p.id === a.prod.id ? a.prod : p)) : [...s.cms.productos, a.prod];
      return { ...s, cms: { ...s.cms, productos, redirects }, events: [mkEvent("web", \`Producto "\${a.prod.nombre}" publicado en /producto/\${a.prod.slug}\`), ...s.events].slice(0, 90) };
    }
    case "CMS_DEL":
      return {
        ...s,
        cms: {
          ...s.cms,
          paginas: a.kind === "pagina" ? s.cms.paginas.filter((x) => x.id !== a.id) : s.cms.paginas,
          posts: a.kind === "post" ? s.cms.posts.filter((x) => x.id !== a.id) : s.cms.posts,
          productos: a.kind === "producto" ? s.cms.productos.filter((x) => x.id !== a.id) : s.cms.productos,
        },
      };
    case "SETTINGS":
      return { ...s, settings: { ...s.settings, ...a.patch } };
    case "UPLOAD_MEDIA":
      return { ...s, media: [a.asset, ...s.media] };
    default:
      return s;
  }
}

const SIM_EVENTS: { type: EventItem["type"]; msgs: string[] }[] = [
  { type: "web", msgs: ["Visita al catálogo web desde Guayaquil", "Link único abierto · cliente revisa fotos de spec", "Carrito web: +1 Poltrona Esmeraldas", "Cotización descargada en PDF · Estudio Barragán"] },
  { type: "stock", msgs: ["Kardex sincronizado con bodega central", "Conteo cíclico completado · estantería B3", "Alerta: DOR-042 bajo mínimo en showroom", "Recepción parcial OC-2211 · espumas D30"] },
  { type: "pago", msgs: ["Webhook PayPhone verificado · firma OK", "Conciliación automática: 3 transacciones", "Saldo pendiente recordado por WhatsApp · PED-1042"] },
  { type: "venta", msgs: ["Cotización COT-0881 enviada por WhatsApp", "Reserva de stock · Comedor Andino ×1", "Upsell sugerido: mesa de centro +32% ticket"] },
  { type: "taller", msgs: ["Consumo de materiales registrado · OF-2101", "Control de calidad aprobó 12 sillas", "Mantenimiento sierra escuadradora programado"] },
  { type: "logistica", msgs: ["TransLog confirmó camión para mañana 08:00", "Etiquetas de bulto impresas · DSP-3021", "GPS: PCH-1194 en Av. Simón Bolívar"] },
  { type: "factura", msgs: ["Retención electrónica recibida · SRI", "Backup contable incremental completado"] },
];

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reduce, undefined, () => {
    const base = seedState();
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        return { ...base, ...saved, hydrated: true, events: base.events, session: base.session };
      }
    } catch {
      /* seed */
    }
    return base;
  });
  const [toasts, setToasts] = useReducer(
    (t: Toast[], a: { op: "add" | "del"; toast?: Toast; id?: string }) =>
      a.op === "add" ? [...t, a.toast!].slice(-4) : t.filter((x) => x.id !== a.id),
    []
  );
  const toast = (msg: string, kind: Toast["kind"] = "ok") => {
    const id = uid();
    setToasts({ op: "add", toast: { id, kind, msg } });
    setTimeout(() => setToasts({ op: "del", id }), 3600);
  };

  useEffect(() => {
    const iv = setInterval(() => {
      const group = SIM_EVENTS[Math.floor(Math.random() * SIM_EVENTS.length)];
      const msg = group.msgs[Math.floor(Math.random() * group.msgs.length)];
      const salesDelta = group.type === "pago" && Math.random() > 0.6 ? Math.round(Math.random() * 400 + 90) : 0;
      dispatch({ type: "EVENTS", events: [mkEvent(group.type, msg)], salesDelta });
    }, 1600);
    return () => clearInterval(iv);
  }, []);

  const [bursting, setBursting] = useReducer((b: boolean, v: boolean) => v, false);
  const burst = (n: number) =>
    new Promise<number>((resolve) => {
      setBursting(true);
      const start = performance.now();
      const chunk = 60;
      let sent = 0;
      const tick = () => {
        const batch = Math.min(chunk, n - sent);
        const evs = Array.from({ length: batch }, (_, i) => mkEvent("sistema", \`Evento #\${(sent + i + 1).toLocaleString()} procesado por el bus\`));
        sent += batch;
        dispatch({ type: "EVENTS", events: evs, eps: Math.round((sent / Math.max(1, performance.now() - start)) * 1000) });
        if (sent < n) setTimeout(tick, 24);
        else {
          const elapsed = performance.now() - start;
          const eps = Math.round((n / elapsed) * 1000);
          dispatch({ type: "EVENTS", events: [mkEvent("sistema", \`Prueba completada: \${n.toLocaleString()} eventos en \${(elapsed / 1000).toFixed(2)}s\`)], eps });
          setBursting(false);
          resolve(eps);
        }
      };
      tick();
    });

  useEffect(() => {
    try {
      const { events: _e, session: _s, hydrated: _h, ...rest } = state;
      localStorage.setItem(LS_KEY, JSON.stringify(rest));
    } catch {
      /* quota */
    }
  }, [state]);

  return <Ctx.Provider value={{ state, dispatch, toasts, toast, burst, bursting }}>{children}</Ctx.Provider>;
}

/* constructores usados por las vistas */
export const buildOrder = (s: AppState, customerId: string, items: { productId: string; qty: number; spec?: Order["items"][0]["spec"] }[], channel: Channel, kind: OrderKind): Order => {
  const customer = s.customers.find((c) => c.id === customerId)!;
  const lines = items.map((i) => {
    const p = s.products.find((x) => x.id === i.productId)!;
    return { productId: p.id, sku: p.sku, name: p.name, qty: i.qty, price: p.price, spec: i.spec ?? null };
  });
  const t = calcTotals(lines);
  const now = new Date().toISOString();
  return {
    id: uid(),
    code: \`PED-\${s.settings.sequence.order}\`,
    kind,
    customerId,
    customer: customer.name,
    items: lines,
    ...t,
    status: "pendiente",
    channel,
    payment: "pendiente",
    transportId: null,
    bultos: Math.max(1, Math.ceil(lines.reduce((a, l) => a + l.qty, 0) / 2)),
    createdAt: now,
    eta: new Date(Date.now() + (kind === "pedido" ? 14 : 5) * 864e5).toISOString(),
    city: customer.city,
    workOrderId: null,
    trace: [{ ts: now, user: "Paola C.", msg: \`\${kind === "venta" ? "Venta de stock" : "Pedido bajo specs"} creado · canal \${channel}\` }],
    recibos: [],
    confirmToken: null,
    confirmedAt: null,
  };
};

export const buildPayLink = (s: AppState, amount: number, concept: string, customerName: string, orderId: string | null, validDays = 7): PayLink => ({
  id: uid(),
  token: \`pp_\${token(12)}\`,
  concept,
  orderId,
  amount,
  customerName,
  createdAt: new Date().toISOString(),
  expiresAt: new Date(Date.now() + validDays * 864e5).toISOString(),
  status: "pendiente",
  method: null,
  authCode: null,
  last4: null,
});
`,He=`import JSZip from "jszip";
import type { AppState } from "./types";

/* Código fuente real del proyecto, incrustado tal como está en disco */
import pkgJson from "../../package.json?raw";
import indexHtml from "../../index.html?raw";
import viteConfig from "../../vite.config.js?raw";
import tsconfigJson from "../../tsconfig.json?raw";
import mainTsx from "../main.tsx?raw";
import appTsx from "../App.tsx?raw";
import indexCss from "../index.css?raw";
import viteEnv from "../vite-env.d.ts?raw";
import typesTs from "./types.ts?raw";
import utilTs from "./util.ts?raw";
import seedTs from "./seed.ts?raw";
import storeTsx from "./store.tsx?raw";
import selfTs from "./projectFiles.ts?raw";
import uiTsx from "../components/ui.tsx?raw";
import chartsTsx from "../components/charts.tsx?raw";
import imgTsx from "../components/Img.tsx?raw";
import shellTsx from "../components/Shell.tsx?raw";
import vDashboard from "../views/Dashboard.tsx?raw";
import vProductos from "../views/Productos.tsx?raw";
import vOperaciones from "../views/Operaciones.tsx?raw";
import vTerceros from "../views/Terceros.tsx?raw";
import vTaller from "../views/Taller.tsx?raw";
import vMateriales from "../views/Materiales.tsx?raw";
import vLogistica from "../views/Logistica.tsx?raw";
import vCobros from "../views/Cobros.tsx?raw";
import vDam from "../views/Dam.tsx?raw";
import vContabilidad from "../views/Contabilidad.tsx?raw";
import vAccesos from "../views/Accesos.tsx?raw";
import vSeguridad from "../views/Seguridad.tsx?raw";
import vAjustes from "../views/Ajustes.tsx?raw";

const README = \`# TALLER UNO — Suite de gestión para mueblería (Ecuador)

ERP · CRM · PIM · OMS · MES · DAM · Contabilidad · Cobros PayPhone · Facturación SRI
Puerto del ERP BLETIA (upgrade.bletia.ec / github.com/cadaidea/blthm → bletia/):
máquina de 15 estados con vista del cliente, validación de pagos por el dueño,
specs de personalización con fotos, guías de remisión SRI y BOM + MRP.

## Stack (100% open source)
- React 18 + Vite + Tailwind CSS 4 (este panel)
- Node 20 + NestJS (API REST + workers) — capa a conectar en producción
- PostgreSQL 16 · Redis 7 · Nginx + Certbot · Docker Compose

## Correr en desarrollo
    npm install
    npm run dev        # http://localhost:3000

## Compilar para producción
    npm run build      # genera ./dist

## Despliegue en VPS (File Manager + SSH)
    Ver deploy/comandos-ssh.txt — paso a paso exacto.

## ¿Dónde está la base de datos?
- El ZIP NO contiene base de datos (correcto: la base vive en el servidor).
- La demo persiste en el navegador (localStorage).
- En el VPS, 'docker compose up -d' crea PostgreSQL con volumen persistente
  ('datos_pg'): actualizar el código NUNCA borra los datos.

## Licencias
MIT (React, Vite, NestJS) · BSD (Redis, Nginx) · PostgreSQL License · Apache-2.0 (Docker, Tailwind)
\`;

const COMPOSE = \`# TALLER UNO · orquestación del VPS
# La base vive en el volumen 'datos_pg' — actualizar código no toca los datos.
services:
  web:
    image: nginx:1.27-alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./dist:/usr/share/nginx/html:ro
      - ./deploy/nginx.conf:/etc/nginx/conf.d/default.conf:ro
    depends_on:
      - db
      - redis

  db:
    image: postgres:16-alpine
    restart: unless-stopped
    environment:
      POSTGRES_USER: taller
      POSTGRES_PASSWORD: \\\${DB_PASSWORD:-cambiar-antes-de-produccion}
      POSTGRES_DB: taller_uno
    volumes:
      - datos_pg:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    restart: unless-stopped
    command: redis-server --appendonly yes
    volumes:
      - datos_redis:/data

volumes:
  datos_pg:
  datos_redis:
\`;

const NGINX = \`server {
    listen 80;
    server_name erp.tudominio.ec;   # ← cambia a tu dominio

    root /usr/share/nginx/html;
    index index.html;

    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
\`;

const GUIA_SSH = \`══════════════════════════════════════════════════════════════
 TALLER UNO · GUÍA DE DESPLIEGUE — File Manager + SSH (VPS OVH)
══════════════════════════════════════════════════════════════

1) EN EL FILE MANAGER DEL VPS
   ─ Sube taller-uno.zip a /var/www

2) POR SSH — PRIMERA INSTALACIÓN (solo una vez)
   cd /var/www
   sudo apt update && sudo apt install -y unzip docker.io docker-compose-plugin
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs
   unzip -o taller-uno.zip -d taller-uno && cd taller-uno
   npm install
   npm run build
   docker compose up -d

3) ACTUALIZACIÓN SIN PERDER DATOS (tu rutina habitual)
   cd /var/www/taller-uno
   unzip -o ../taller-uno.zip -d .
   npm install && npm run build
   docker compose restart web
   → La base NUNCA se toca: vive en el volumen 'datos_pg'.

4) RESPALDO DIARIO (cron)
   0 3 * * * cd /var/www/taller-uno && docker compose exec -T db pg_dump -U taller taller_uno | gzip > /respaldos/taller-$(date +\\\\%F).sql.gz

5) FLUJO GITHUB (recomendado)
   git init && git add -A && git commit -m "v2.1 suite mueblera"
   git remote add origin git@github.com:TU-USUARIO/taller-uno.git && git push -u origin main
   En el VPS: git clone y para actualizar: git pull && npm i && npm run build

¿Y LA BASE DE DATOS?
   ─ El ZIP NO la incluye (correcto: vive en el servidor, no viaja).
   ─ La demo guardó tus datos en deploy/datos-demo.json.
   ─ PostgreSQL se crea sola con 'docker compose up -d' (volumen datos_pg).
\`;

const GITIGNORE = \`node_modules/
dist/
.env
*.zip
/respaldos/
.DS_Store
\`;

const SOURCE_FILES: [string, string][] = [
  ["package.json", pkgJson],
  ["index.html", indexHtml],
  ["vite.config.js", viteConfig],
  ["tsconfig.json", tsconfigJson],
  [".gitignore", GITIGNORE],
  ["src/main.tsx", mainTsx],
  ["src/App.tsx", appTsx],
  ["src/index.css", indexCss],
  ["src/vite-env.d.ts", viteEnv],
  ["src/lib/types.ts", typesTs],
  ["src/lib/util.ts", utilTs],
  ["src/lib/seed.ts", seedTs],
  ["src/lib/store.tsx", storeTsx],
  ["src/lib/projectFiles.ts", selfTs],
  ["src/components/ui.tsx", uiTsx],
  ["src/components/charts.tsx", chartsTsx],
  ["src/components/Img.tsx", imgTsx],
  ["src/components/Shell.tsx", shellTsx],
  ["src/views/Dashboard.tsx", vDashboard],
  ["src/views/Productos.tsx", vProductos],
  ["src/views/Operaciones.tsx", vOperaciones],
  ["src/views/Terceros.tsx", vTerceros],
  ["src/views/Taller.tsx", vTaller],
  ["src/views/Materiales.tsx", vMateriales],
  ["src/views/Logistica.tsx", vLogistica],
  ["src/views/Cobros.tsx", vCobros],
  ["src/views/Dam.tsx", vDam],
  ["src/views/Contabilidad.tsx", vContabilidad],
  ["src/views/Accesos.tsx", vAccesos],
  ["src/views/Seguridad.tsx", vSeguridad],
  ["src/views/Ajustes.tsx", vAjustes],
];

const download = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 3000);
};

export const exportProjectZip = async (state: AppState) => {
  const zip = new JSZip();
  const root = zip.folder("taller-uno")!;
  root.file("README.md", README);
  root.file("docker-compose.yml", COMPOSE);
  root.folder("deploy")!.file("nginx.conf", NGINX);
  root.folder("deploy")!.file("comandos-ssh.txt", GUIA_SSH);
  root.folder("deploy")!.file("datos-demo.json", JSON.stringify(state, null, 2));
  for (const [path, content] of SOURCE_FILES) root.file(path, content);
  const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE", compressionOptions: { level: 8 } });
  const date = new Date().toISOString().slice(0, 10);
  download(blob, \`taller-uno-\${date}.zip\`);
};

export const exportDataJson = (state: AppState) => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  download(blob, \`taller-uno-datos-\${new Date().toISOString().slice(0, 10)}.json\`);
};
`,Ze=`import type { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { cls, copyText } from "../lib/util";
import type { LinkStatus } from "../lib/types";
import type { Toast } from "../lib/store";

/* ---------------------------------- icons ---------------------------------- */
const P: Record<string, ReactNode> = {
  logo: <><path d="M6 2.5h3.2V11h5.6V2.5H18V18h-3.2v-4H9.2v4H6V2.5z" fill="currentColor" stroke="none" /></>,
  panel: <><rect x="3.5" y="3.5" width="7" height="9" rx="1.2" /><rect x="13.5" y="3.5" width="7" height="5" rx="1.2" /><rect x="13.5" y="11.5" width="7" height="9" rx="1.2" /><rect x="3.5" y="15.5" width="7" height="5" rx="1.2" /></>,
  box: <><path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5v-9z" /><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" /></>,
  truck: <><path d="M2.5 6.5h11v10h-11zM13.5 10h4l3 3v3.5h-7" /><circle cx="6.5" cy="17.5" r="1.8" /><circle cx="16.5" cy="17.5" r="1.8" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19.5c.6-3.4 2.8-5.2 5.5-5.2s4.9 1.8 5.5 5.2" /><circle cx="16.8" cy="9" r="2.4" /><path d="M15.6 14.6c2.6.2 4.4 1.8 4.9 4.6" /></>,
  saw: <><path d="M3.5 17 14 6.5l3.5 3.5L7 20.5H3.5V17z" /><path d="m14 6.5 2-2a2.1 2.1 0 0 1 3 0l.5.5a2.1 2.1 0 0 1 0 3l-2 2" /><path d="m7 14 1.5 1.5M10 11l1.5 1.5" /></>,
  link: <><path d="M10 14a4.2 4.2 0 0 0 6 0l3-3a4.24 4.24 0 1 0-6-6l-1.2 1.2" /><path d="M14 10a4.2 4.2 0 0 0-6 0l-3 3a4.24 4.24 0 1 0 6 6l1.2-1.2" /></>,
  image: <><rect x="3.5" y="4.5" width="17" height="15" rx="1.5" /><circle cx="9" cy="10" r="1.6" /><path d="m4.5 17.5 4.5-4 3.5 3 3-2.5 4 3.5" /></>,
  book: <><path d="M4.5 4.5h12.5a2 2 0 0 1 2 2v13H6.5a2 2 0 0 1-2-2v-13z" /><path d="M4.5 4.5a2 2 0 0 0 0 4h2M8 9h7M8 12.5h7" /></>,
  key: <><circle cx="8" cy="15.5" r="4" /><path d="m11 12.5 8-8M16.5 7l2 2M14 9.5l1.8 1.8" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.5 5.5l1.8 1.8M16.7 16.7l1.8 1.8M18.5 5.5l-1.8 1.8M7.3 16.7l-1.8 1.8" /></>,
  search: <><circle cx="10.5" cy="10.5" r="6" /><path d="m15.5 15.5 4.5 4.5" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  x: <path d="m6 6 12 12M18 6 6 18" />,
  copy: <><rect x="8.5" y="8.5" width="12" height="12" rx="1.6" /><path d="M15.5 8.5v-3a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3" /></>,
  check: <path d="m4.5 12.5 5 5L19.5 6.5" />,
  alert: <><path d="M12 3.5 22 20H2L12 3.5z" /><path d="M12 9.5v5M12 17.2v.3" /></>,
  arrow: <path d="M4 12h16m0 0-6-6m6 6-6 6" />,
  chevD: <path d="m6 9.5 6 6 6-6" />,
  ext: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M19 13.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4.5" /></>,
  dl: <><path d="M12 3.5V15m0 0-4.5-4.5M12 15l4.5-4.5" /><path d="M4 17.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.5" /></>,
  refresh: <><path d="M20 12a8 8 0 1 1-2.5-5.8" /><path d="M20 3.5V8h-4.5" /></>,
  zap: <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12l1-8z" />,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5.2l3.4 2" /></>,
  play: <path d="M7 4.5v15l12-7.5-12-7.5z" />,
  qr: <><rect x="3.5" y="3.5" width="7" height="7" rx="1" /><rect x="13.5" y="3.5" width="7" height="7" rx="1" /><rect x="3.5" y="13.5" width="7" height="7" rx="1" /><path d="M13.5 13.5h3v3h-3zM17.5 17.5h3v3h-3zM20.5 13.5v1M13.5 20.5h1" /></>,
  card: <><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="M3 10h18M6.5 14.5h4" /></>,
  doc: <><path d="M6 3.5h8l4 4V20.5H6V3.5z" /><path d="M14 3.5v4h4M9 12h6M9 15.5h6" /></>,
  server: <><rect x="3.5" y="4" width="17" height="6.5" rx="1.2" /><rect x="3.5" y="13.5" width="17" height="6.5" rx="1.2" /><path d="M7 7.2h.01M7 16.7h.01M17 7.2h-4M17 16.7h-4" /></>,
  tag: <><path d="m12.5 3.5 8 8-9 9-8-8v-6a3 3 0 0 1 3-3h6z" /><circle cx="8.7" cy="8.7" r="1.3" /></>,
  warehouse: <><path d="M3.5 20V9L12 4l8.5 5v11" /><path d="M7 20v-7h10v7M7 16.5h10" /></>,
  phone: <path d="M7 3.5H5.5a2 2 0 0 0-2 2c0 8.3 6.7 15 15 15a2 2 0 0 0 2-2V17l-4-1.5-2 2a12.5 12.5 0 0 1-6-6l2-2L9 5.5 7 3.5z" />,
  mail: <><rect x="3" y="5.5" width="18" height="13" rx="1.8" /><path d="m3.5 7 8.5 6 8.5-6" /></>,
  star: <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L12 3.5z" />,
  shield: <><path d="M12 3 5 5.5v5.6c0 4.4 2.9 7.6 7 9.4 4.1-1.8 7-5 7-9.4V5.5L12 3z" /><path d="m8.8 11.8 2.3 2.3 4.2-4.4" /></>,
  eye: <><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="2.8" /></>,
  layers: <><path d="m12 3.5 8.5 4.5L12 12.5 3.5 8 12 3.5z" /><path d="m3.5 12 8.5 4.5L20.5 12M3.5 16l8.5 4.5L20.5 16" /></>,
  package: <><path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5v-9z" /><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9M7.7 5.2l8.6 4.6" /></>,
  brush: <><path d="m14.5 4 5.5 5.5-8.5 8.5c-1.5 1.5-4 1.5-5.5 0s-1.5-4 0-5.5L14.5 4z" /><path d="m12 6.5 5.5 5.5M4.5 20.5c1.5 0 2.5-1 2.5-2.5" /></>,
  pin: <><path d="M12 21s-6.5-5.4-6.5-10.3A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.7C18.5 15.6 12 21 12 21z" /><circle cx="12" cy="10.5" r="2.2" /></>,
  sun: <><circle cx="12" cy="12" r="4.2" /><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M19.1 4.9l-1.6 1.6M6.5 17.5l-1.6 1.6" /></>,
  moon: <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />,
  monitor: <><rect x="3" y="4.5" width="18" height="12.5" rx="1.5" /><path d="M9 20.5h6M12 17v3.5" /></>,
  heart: <path d="M12 20.5S3.5 15 3.5 8.9A4.6 4.6 0 0 1 12 6.4a4.6 4.6 0 0 1 8.5 2.5c0 6.1-8.5 11.6-8.5 11.6z" />,
  cart: <><circle cx="9" cy="20" r="1.4" /><circle cx="17.5" cy="20" r="1.4" /><path d="M3 3.5h2.2l2.3 11h10.6l2-7.5H6.3" /></>,
  minus: <path d="M5.5 12h13" />,
  edit: <><path d="M4 20h4.5L19 9.5a2 2 0 0 0 0-2.8l-1.7-1.7a2 2 0 0 0-2.8 0L4 15.5V20z" /><path d="m13.5 6 4.5 4.5" /></>,
};

export function Icon({ name, size = 18, className }: { name: string; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={cls("shrink-0", className)} aria-hidden>
      {P[name] ?? P.box}
    </svg>
  );
}

/* --------------------------------- buttons --------------------------------- */
type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost" | "danger" | "oak" | "dark";
  size?: "sm" | "md";
  icon?: string;
};
export function Btn({ variant = "primary", size = "md", icon, className, children, ...rest }: BtnProps) {
  return (
    <button
      className={cls(
        "inline-flex items-center justify-center gap-1.5 font-semibold rounded-lg transition-all duration-150 active:scale-[0.97] disabled:opacity-45 disabled:pointer-events-none whitespace-nowrap",
        size === "sm" ? "text-[11.5px] px-2.5 py-1.5" : "text-[12.5px] px-3.5 py-2",
        variant === "primary" && "bg-ink text-paper hover:bg-ink3 shadow-sm hover:shadow-md",
        variant === "outline" && "bg-card border border-line2 text-ink hover:border-ink/50 hover:bg-ink/4",
        variant === "ghost" && "text-mut hover:bg-ink/6 hover:text-ink",
        variant === "danger" && "bg-brick text-paper hover:bg-[#963823]",
        variant === "oak" && "bg-oak text-paper hover:bg-oakd shadow-sm",
        variant === "dark" && "bg-night text-paper hover:bg-night2 border border-ink3",
        className
      )}
      {...rest}
    >
      {icon && <Icon name={icon} size={size === "sm" ? 13 : 15} />}
      {children}
    </button>
  );
}

export function CopyBtn({ text, label, size = "sm", icon = "copy", variant = "outline" }: { text: string; label?: string; size?: "sm" | "md"; icon?: string; variant?: "outline" | "primary" }) {
  return (
    <Btn size={size} variant={variant} icon={icon} onClick={() => copyText(text)}>{label}</Btn>
  );
}

/* ---------------------------------- badge ---------------------------------- */
const TONES: Record<string, string> = {
  pine: "bg-pinel text-pinet border-pine/25",
  oak: "bg-oakl text-oakd border-oak/30",
  steel: "bg-steell text-steel border-steel/25",
  moss: "bg-mossl text-mossd border-moss/30",
  brick: "bg-brickl text-brick border-brick/25",
  fog: "bg-ink/5 text-mut border-ink/10",
};
export function Badge({ tone = "fog", dot, children, className }: { tone?: string; dot?: boolean; children: ReactNode; className?: string }) {
  return (
    <span className={cls("inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[10.5px] font-bold uppercase tracking-wide", TONES[tone], className)}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />}
      {children}
    </span>
  );
}

export const linkTone: Record<LinkStatus, "pine" | "oak" | "steel" | "moss" | "brick" | "fog"> = {
  pendiente: "oak", pagado: "moss", expirado: "fog", anulado: "brick",
};

/* ---------------------------------- cards ---------------------------------- */
export function Card({ children, className, pad = true }: { children: ReactNode; className?: string; pad?: boolean }) {
  return <div className={cls("bg-card border border-line rounded-xl shadow-[0_1px_2px_rgba(21,33,31,0.05)]", pad && "p-4", className)}>{children}</div>;
}

export function SectionTitle({ kicker, title, right }: { kicker: string; title: string; right?: ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-3 mb-3">
      <div>
        <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-oakd">{kicker}</div>
        <h3 className="font-display font-bold text-[15.5px] text-ink leading-tight mt-0.5">{title}</h3>
      </div>
      {right}
    </div>
  );
}

const STAT_TONES: Record<string, string> = {
  pine: "bg-pinel text-pined", oak: "bg-oakl text-oakd", steel: "bg-steell text-steel", moss: "bg-mossl text-[#41621f]",
};
export function Stat({ label, value, icon, tone = "pine", sub, flash }: { label: string; value: string; icon: string; tone?: string; sub?: ReactNode; flash?: boolean }) {
  return (
    <div className={cls("bg-card border border-line rounded-xl p-3.5 hover:shadow-md hover:-translate-y-px transition-all", flash && "flash-cell")}>
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-mut">{label}</span>
        <span className={cls("w-8 h-8 rounded-lg grid place-items-center", STAT_TONES[tone])}><Icon name={icon} size={15} /></span>
      </div>
      <div className="font-display font-extrabold text-[24px] text-ink num leading-tight mt-1.5">{value}</div>
      {sub && <div className="text-[10.5px] text-mut mt-1 leading-snug">{sub}</div>}
    </div>
  );
}

/* ---------------------------------- forms ---------------------------------- */
export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-bold uppercase tracking-[0.1em] text-mut mb-1">{label}</span>
      {children}
    </label>
  );
}
/* Si el caller pasa una clase de ancho/flex, se respeta y se quita el w-full base.
   Corrige el bug donde el selector de ítem salía angosto y el número se estiraba. */
const HAS_WIDTH = /(^|\\s)(w-|min-w-|max-w-|flex-1|flex-auto|flex-none|grow|shrink)/;
const mergeCls = (base: string, extra?: string) => {
  if (!extra) return base;
  const parts = base.split(/\\s+/).filter((p) => !(HAS_WIDTH.test(extra) && p === "w-full"));
  return [...parts, extra].join(" ");
};

export function Input({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={mergeCls("w-full bg-card border border-line2 rounded-lg px-3 py-2 text-[13px] text-ink placeholder:text-fog outline-none focus:border-pine focus:ring-2 focus:ring-pine/15 transition-all", className)} {...rest} />;
}
export function Select({ className, children, ...rest }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={mergeCls("w-full bg-card border border-line2 rounded-lg px-2.5 py-2 text-[13px] text-ink outline-none focus:border-pine focus:ring-2 focus:ring-pine/15 transition-all", className)} {...rest}>
      {children}
    </select>
  );
}

/* ---------------------------------- overlay -------------------------------- */
export function Modal({ open, onClose, kicker, title, children, wide }: { open: boolean; onClose: () => void; kicker?: string; title: string; children: ReactNode; wide?: boolean }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4" role="dialog" aria-modal>
      <div className="absolute inset-0 bg-night/55 backdrop-blur-[2px]" onClick={onClose} />
      <div className={cls("relative bg-card border border-line rounded-2xl shadow-2xl w-full anim-pop max-h-[88vh] overflow-y-auto", wide ? "max-w-2xl" : "max-w-lg")}>
        <div className="sticky top-0 bg-card/95 backdrop-blur px-5 pt-4 pb-3 border-b border-line flex items-start justify-between gap-3 z-10">
          <div>
            {kicker && <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-oakd">{kicker}</div>}
            <h2 className={cls("font-display font-extrabold text-[19px] text-ink leading-tight", !kicker && "mt-0.5")}>{title}</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg grid place-items-center text-mut hover:bg-ink/6 hover:text-ink transition-colors"><Icon name="x" size={16} /></button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

export function Drawer({ open, onClose, kicker, title, children }: { open: boolean; onClose: () => void; kicker?: string; title: string; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-night/50 backdrop-blur-[2px]" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-card border-l border-line shadow-2xl anim-drawer flex flex-col">
        <div className="px-5 pt-5 pb-3.5 border-b border-line flex items-start justify-between gap-3">
          <div>
            <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-oakd">{kicker}</div>
            <h2 className="font-display font-extrabold text-[19px] text-ink leading-tight mt-0.5">{title}</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg grid place-items-center text-mut hover:bg-ink/6 hover:text-ink transition-colors"><Icon name="x" size={16} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">{children}</div>
      </div>
    </div>
  );
}

export function Tabs({ tabs, value, onChange }: { tabs: { id: string; label: string }[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex gap-1 bg-ink/5 rounded-xl p-1 w-fit max-w-full overflow-x-auto anim-up">
      {tabs.map((t) => (
        <button key={t.id} onClick={() => onChange(t.id)}
          className={cls("px-3.5 py-1.5 rounded-lg text-[12px] font-bold whitespace-nowrap transition-all", value === t.id ? "bg-card shadow-sm text-pined" : "text-mut hover:text-ink")}>
          {t.label}
        </button>
      ))}
    </div>
  );
}

/* ---------------------------------- tables --------------------------------- */
export function Th({ children, right }: { children?: ReactNode; right?: boolean }) {
  return <th className={cls("px-3 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-mut whitespace-nowrap", right ? "text-right" : "text-left")}>{children}</th>;
}
export function Td({ children, right, className }: { children?: ReactNode; right?: boolean; className?: string }) {
  return <td className={cls("px-3 py-2.5 align-middle", right && "text-right", className)}>{children}</td>;
}

export function Progress({ value, tone = "pine" }: { value: number; tone?: "pine" | "oak" | "moss" | "brick" | "steel" }) {
  const c = { pine: "bg-pine", oak: "bg-oak", moss: "bg-moss", brick: "bg-brick", steel: "bg-steel" }[tone];
  return (
    <div className="h-1.5 w-full rounded-full bg-ink/10 overflow-hidden">
      <div className={cls("h-full rounded-full transition-all duration-500", c)} style={{ width: \`\${Math.min(100, Math.max(2, value))}%\` }} />
    </div>
  );
}

export function EmptyState({ icon, title, sub }: { icon: string; title: string; sub: string }) {
  return (
    <div className="py-12 text-center">
      <span className="w-12 h-12 mx-auto rounded-xl bg-ink/5 text-fog grid place-items-center mb-3"><Icon name={icon} size={22} /></span>
      <div className="font-display font-bold text-[15px] text-ink">{title}</div>
      <div className="text-[12px] text-mut mt-1 max-w-xs mx-auto">{sub}</div>
    </div>
  );
}

/* ---------------------------------- toasts --------------------------------- */
export function ToastHost({ toasts }: { toasts: Toast[] }) {
  return (
    <div className="fixed bottom-4 right-4 z-[80] space-y-2 w-[320px] max-w-[calc(100vw-2rem)]">
      {toasts.map((t) => (
        <div key={t.id} className={cls(
          "anim-pop flex items-start gap-2.5 rounded-xl border px-3.5 py-3 shadow-lg backdrop-blur text-[12.5px] font-medium",
          t.kind === "ok" && "bg-pined/95 border-pine text-paper",
          t.kind === "warn" && "bg-oakd/95 border-oak text-paper",
          t.kind === "info" && "bg-night/95 border-ink3 text-paper"
        )}>
          <Icon name={t.kind === "ok" ? "check" : t.kind === "warn" ? "alert" : "zap"} size={15} className="mt-0.5 shrink-0" />
          <span className="leading-snug">{t.msg}</span>
        </div>
      ))}
    </div>
  );
}
`,Ke=`/* Gráficos SVG a mano — sin librerías externas */

export function Sparkline({ data, height = 56, stroke = "#19604f", fill = true }: { data: number[]; height?: number; stroke?: string; fill?: boolean }) {
  const w = 260;
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const span = max - min || 1;
  const pts = data.map((v, i) => [8 + (i / (data.length - 1)) * (w - 16), height - 8 - ((v - min) / span) * (height - 16)] as const);
  const path = pts.map((p, i) => \`\${i === 0 ? "M" : "L"}\${p[0].toFixed(1)},\${p[1].toFixed(1)}\`).join(" ");
  const area = \`\${path} L\${pts[pts.length - 1][0]},\${height - 2} L\${pts[0][0]},\${height - 2} Z\`;
  const gid = \`sg\${stroke.replace("#", "")}\`;
  return (
    <svg viewBox={\`0 0 \${w} \${height}\`} className="w-full" style={{ height }} preserveAspectRatio="none">
      {fill && (
        <>
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={stroke} stopOpacity="0.22" />
              <stop offset="100%" stopColor={stroke} stopOpacity="0.01" />
            </linearGradient>
          </defs>
          <path d={area} fill={\`url(#\${gid})\`} />
        </>
      )}
      <path d={path} fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" className="line-draw" />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="3.4" fill={stroke} stroke="#fcfdfa" strokeWidth="1.5" />
    </svg>
  );
}

export function Bars({ data, labels, height = 130, color = "#19604f" }: { data: number[]; labels: string[]; height?: number; color?: string }) {
  const max = Math.max(...data, 1);
  return (
    <div className="flex items-end gap-2 w-full" style={{ height: height + 22 }}>
      {data.map((v, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1.5 group min-w-0">
          <div className="text-[10px] font-mono text-mut opacity-0 group-hover:opacity-100 transition-opacity num">\${Math.round(v).toLocaleString()}</div>
          <div className="w-full rounded-t-md transition-all duration-200 group-hover:opacity-80 bar-grow" style={{ height: Math.max(4, (v / max) * height), background: i === data.length - 1 ? "#c9821f" : color, animationDelay: \`\${i * 40}ms\` }} />
          <div className="text-[9.5px] text-mut truncate max-w-full">{labels[i]}</div>
        </div>
      ))}
    </div>
  );
}

export function Donut({ slices, size = 128, thickness = 17, centerTop, centerBottom }: { slices: { value: number; color: string; label: string }[]; size?: number; thickness?: number; centerTop?: string; centerBottom?: string }) {
  const total = Math.max(slices.reduce((a, s) => a + s.value, 0), 1);
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let acc = 0;
  return (
    <div className="flex items-center gap-4">
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e6eae1" strokeWidth={thickness} />
          {slices.map((s, i) => {
            const frac = s.value / total;
            const dash = \`\${frac * c} \${c}\`;
            const offset = -acc * c;
            acc += frac;
            return <circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none" stroke={s.color} strokeWidth={thickness} strokeDasharray={dash} strokeDashoffset={offset} strokeLinecap="butt" style={{ transition: "stroke-dasharray .6s ease" }} />;
          })}
        </svg>
        <div className="absolute inset-0 grid place-items-center text-center">
          <div>
            <div className="font-display font-extrabold text-[17px] text-ink num leading-none">{centerTop}</div>
            {centerBottom && <div className="text-[9.5px] text-mut mt-1 uppercase tracking-wider">{centerBottom}</div>}
          </div>
        </div>
      </div>
      <div className="space-y-1.5 min-w-0">
        {slices.map((s, i) => (
          <div key={i} className="flex items-center gap-2 text-[11.5px]">
            <span className="w-2.5 h-2.5 rounded-[3px] shrink-0" style={{ background: s.color }} />
            <span className="text-mut truncate">{s.label}</span>
            <span className="ml-auto font-mono text-[11px] text-ink num pl-2">{Math.round((s.value / total) * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
`,Qe=`import { useState } from "react";
import { cls } from "../lib/util";

function Placeholder({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cls("grid place-items-center bg-[linear-gradient(135deg,#e6ebe2,#d9e2d6)] text-pined/60 overflow-hidden", className)}>
      <svg viewBox="0 0 80 60" className="w-3/4 h-3/4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="22" width="60" height="20" rx="3" />
        <rect x="16" y="12" width="48" height="12" rx="3" />
        <path d="M14 42v8M66 42v8M20 42v8M60 42v8" />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
}

export function Thumb({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [err, setErr] = useState(false);
  if (!src || err) return <Placeholder label={alt} className={className} />;
  return <img src={src} alt={alt} loading="lazy" onError={() => setErr(true)} className={cls("object-cover", className)} />;
}

export function Blueprint({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cls("grid place-items-center bg-[#12242a] overflow-hidden relative", className)}>
      <svg viewBox="0 0 100 70" className="w-full h-full text-steel" fill="none" strokeWidth="0.7">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={\`v\${i}\`} x1={i * 12.5} y1="0" x2={i * 12.5} y2="70" stroke="currentColor" strokeOpacity="0.18" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={\`h\${i}\`} x1="0" y1={i * 11.6} x2="100" y2={i * 11.6} stroke="currentColor" strokeOpacity="0.18" />
        ))}
        <rect x="25" y="15" width="50" height="34" stroke="#8fb6cc" strokeDasharray="3 2" />
        <line x1="25" y1="15" x2="75" y2="49" stroke="#8fb6cc" strokeOpacity="0.5" strokeDasharray="2 2" />
        <line x1="75" y1="15" x2="25" y2="49" stroke="#8fb6cc" strokeOpacity="0.5" strokeDasharray="2 2" />
        <circle cx="50" cy="32" r="3" stroke="#c9821f" />
        <text x="50" y="60" textAnchor="middle" fontSize="5" fill="#8fb6cc" fontFamily="monospace">{label}</text>
      </svg>
    </div>
  );
}
`,Je=`import { useState } from "react";
import type { ReactNode } from "react";
import { useStore } from "../lib/store";
import type { RoleInterno, View } from "../lib/types";
import { cls, num } from "../lib/util";
import { Icon } from "./ui";
import ThemeToggle from "./ThemeToggle";

const NAV: { group: string; items: { id: View; label: string; icon: string }[] }[] = [
  {
    group: "Operación",
    items: [
      { id: "dashboard", label: "Panel de control", icon: "panel" },
      { id: "oms", label: "Pedidos · OMS", icon: "truck" },
      { id: "logistica", label: "Logística & guías SRI", icon: "package" },
      { id: "taller", label: "Taller & fabricación", icon: "saw" },
      { id: "bom", label: "BOM & materiales", icon: "layers" },
    ],
  },
  {
    group: "Relaciones",
    items: [
      { id: "crm", label: "Clientes & proveedores", icon: "users" },
      { id: "cobros", label: "Cobros PayPhone", icon: "qr" },
    ],
  },
  {
    group: "Producto & activos",
    items: [
      { id: "pim", label: "Productos · PIM", icon: "box" },
      { id: "dam", label: "Fototeca · DAM", icon: "image" },
    ],
  },
  {
    group: "Finanzas",
    items: [{ id: "contabilidad", label: "Contabilidad & SRI", icon: "book" }],
  },
  {
    group: "Plataforma",
    items: [
      { id: "accesos", label: "Accesos de un solo uso", icon: "key" },
      { id: "seguridad", label: "Seguridad & porting", icon: "shield" },
      { id: "ajustes", label: "Ajustes & despliegue", icon: "gear" },
    ],
  },
  {
    group: "Canal digital",
    items: [
      { id: "web", label: "Sitio público", icon: "ext" },
      { id: "contenido", label: "Contenido web · CMS", icon: "edit" },
    ],
  },
];

/* Acceso por rol — igual que el /dash de upgrade.bletia.ec: cada colaborador ve solo su área, gerencia todo */
export const ROLE_ACCESS: Record<RoleInterno, View[]> = {
  gerencia: ["dashboard", "oms", "logistica", "taller", "bom", "crm", "cobros", "pim", "dam", "contabilidad", "accesos", "seguridad", "ajustes", "web", "contenido"],
  vendedor: ["dashboard", "oms", "pim", "crm", "cobros", "web"],
  bodega: ["dashboard", "oms", "logistica", "pim", "bom"],
  taller: ["dashboard", "taller", "bom", "logistica", "pim"],
  contabilidad: ["dashboard", "contabilidad", "cobros", "crm"],
};

const ROLE_LABEL: Record<RoleInterno, string> = {
  gerencia: "Gerencia · admin", vendedor: "Ventas", bodega: "Bodega", taller: "Taller", contabilidad: "Contabilidad",
};

export function Shell({ view, nav, children }: { view: View; nav: (v: View, p?: string) => void; children: ReactNode }) {
  const { state, dispatch, toast } = useStore();
  const [q, setQ] = useState("");
  const user = state.session.user;
  const access = user ? ROLE_ACCESS[user.role] : [];
  const eps = Math.max(state.session.peakEps, 1);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    toast("Sesión cerrada · vuelta a /dash/login", "info");
  };

  return (
    <div className="min-h-screen lg:pl-[236px] font-dash">
      {/* sidebar — hueso, sin fatiga visual */}
      <aside className="fixed inset-y-0 left-0 w-[236px] bg-[#f7f3eb] border-r border-line flex flex-col z-40 max-lg:hidden">
        <button onClick={() => nav("dashboard")} className="flex items-center gap-3 px-5 h-16 border-b border-line text-left hover:bg-ink/3 transition-colors">
          <span className="font-display font-bold text-[19px] tracking-[0.3em] text-ink">BLETIA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-wine mt-1.5" />
          <span className="ml-auto font-mono text-[8.5px] uppercase tracking-[0.18em] text-fog">suite interna</span>
        </button>
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-4">
          {NAV.map((g) => {
            const items = g.items.filter((it) => access.includes(it.id));
            if (!items.length) return null;
            return (
              <div key={g.group}>
                <div className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-fog px-2.5 mb-1.5">{g.group}</div>
                {items.map((it) => (
                  <button key={it.id} onClick={() => nav(it.id)}
                    className={cls(
                      "w-full flex items-center gap-2.5 px-2.5 py-[7px] rounded-lg text-[12.5px] font-medium transition-all mb-0.5 text-left",
                      view === it.id ? "bg-ink text-paper shadow-sm" : "text-mut hover:text-ink hover:bg-ink/5"
                    )}>
                    <Icon name={it.icon} size={15} className={view === it.id ? "text-oakl" : ""} />
                    {it.label}
                    {view === it.id && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-wine" />}
                  </button>
                ))}
              </div>
            );
          })}
        </nav>
        {user && (
          <div className="px-3 py-3 border-t border-line">
            <div className="flex items-center gap-2.5 rounded-xl bg-card border border-line px-3 py-2.5">
              <span className="w-8 h-8 rounded-lg bg-ink text-paper grid place-items-center font-display font-bold text-[12px] shrink-0">
                {user.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[12px] font-semibold text-ink leading-tight truncate">{user.name}</div>
                <div className="text-[10px] text-wine font-bold uppercase tracking-wider">{ROLE_LABEL[user.role]}</div>
              </div>
              <button onClick={logout} title="Cerrar sesión" className="text-fog hover:text-brick transition-colors"><Icon name="x" size={14} /></button>
            </div>
            <div className="flex items-center gap-1.5 mt-2 px-1 text-[9.5px] font-mono text-fog">
              <span className="w-1.5 h-1.5 rounded-full bg-moss live-dot" /> En línea
            </div>
          </div>
        )}
      </aside>

      {/* topbar */}
      <header className="sticky top-0 z-30 h-14 bg-paper/88 backdrop-blur border-b border-line flex items-center gap-3 px-4 lg:px-6">
        <button onClick={() => nav("web")} className="lg:hidden font-display font-bold text-[16px] tracking-[0.25em] text-ink">BLETIA</button>
        <div className="relative flex-1 max-w-sm max-lg:hidden">
          <Icon name="search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-fog" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && q.trim() && access.includes("pim")) { nav("pim", q.trim()); setQ(""); } }}
            placeholder="Buscar SKU, producto… (Enter)"
            className="w-full bg-card border border-line rounded-lg pl-8 pr-3 py-1.5 text-[12.5px] outline-none focus:border-ink/50 focus:ring-2 focus:ring-ink/8 transition-all"
          />
        </div>
        <div className="ml-auto flex items-center gap-2.5">
          <div className="hidden md:flex items-center gap-1.5 font-mono text-[10.5px] text-mut bg-card border border-line rounded-lg px-2.5 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-moss live-dot" />
            <span className="num">{num(state.session.events)}</span> eventos
          </div>
          <ThemeToggle />
          <button onClick={() => nav("web")} className="flex items-center gap-1.5 text-[11.5px] font-bold text-mut hover:text-ink border border-line bg-card rounded-lg px-3 py-1.5 transition-all hover:border-ink/40">
            <Icon name="ext" size={12} /> bletia.ec
          </button>
          <div className="hidden sm:block text-right leading-tight">
            <div className="text-[11.5px] font-bold text-ink">{state.settings.company.name}</div>
            <div className="font-mono text-[9px] text-fog">RUC {state.settings.company.ruc} · Cuenca</div>
          </div>
        </div>
      </header>

      {/* nav móvil */}
      <div className="lg:hidden sticky top-14 z-20 bg-paper/92 backdrop-blur border-b border-line px-3 py-2 flex gap-1.5 overflow-x-auto">
        {NAV.flatMap((g) => g.items).filter((it) => access.includes(it.id)).map((it) => (
          <button key={it.id} onClick={() => nav(it.id)}
            className={cls("flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all",
              view === it.id ? "bg-ink text-paper" : "bg-card border border-line text-mut")}>
            <Icon name={it.icon} size={12} />{it.label}
          </button>
        ))}
      </div>

      <main className="px-4 lg:px-6 py-5 max-w-[1480px] mx-auto">{children}</main>

      <footer className="px-4 lg:px-6 pb-6 max-w-[1480px] mx-auto">
        <div className="border-t border-line pt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10.5px] text-fog font-mono">
          <span>BLETIA suite</span>
          <span>hecho en Cuenca</span>
          <span className="ml-auto">Simple. Elegante. tu.</span>
        </div>
      </footer>
    </div>
  );
}
`,Ye=`import { useMemo, useRef, useState } from "react";
import { saldoDe, useStore } from "../lib/store";
import { fmtDate, money, num, timeAgo } from "../lib/util";
import type { View } from "../lib/types";
import { Badge, Btn, Card, Icon, Progress, SectionTitle, Stat } from "../components/ui";
import { Bars, Donut, Sparkline } from "../components/charts";
import { Thumb } from "../components/Img";

const EVENT_ICON: Record<string, { icon: string; tone: string }> = {
  venta: { icon: "tag", tone: "text-pine bg-pinel" },
  stock: { icon: "warehouse", tone: "text-steel bg-steell" },
  pago: { icon: "card", tone: "text-[#41621f] bg-mossl" },
  web: { icon: "ext", tone: "text-oakd bg-oakl" },
  taller: { icon: "saw", tone: "text-oakd bg-oakl" },
  factura: { icon: "doc", tone: "text-steel bg-steell" },
  link: { icon: "link", tone: "text-pine bg-pinel" },
  logistica: { icon: "truck", tone: "text-steel bg-steell" },
  sistema: { icon: "zap", tone: "text-mut bg-ink/6" },
};

export default function Dashboard({ nav }: { nav: (v: View, p?: string) => void }) {
  const { state, burst, bursting, toast } = useStore();
  const [test, setTest] = useState<{ n: number; eps: number } | null>(null);
  const lastSales = useRef(state.session.salesToday);
  const salesFlash = state.session.salesToday !== lastSales.current;
  if (salesFlash) lastSales.current = state.session.salesToday;

  const salesSeries = useMemo(() => {
    const past = [820, 1240, 940, 1620, 1105, 2210, 1730, 990, 1420, 2539, 1180, 1640, 2090];
    return [...past, Math.round(state.session.salesToday)];
  }, [state.session.salesToday]);

  const openOrders = state.orders.filter((o) => !["entregado", "anulado", "cancelado"].includes(o.status));
  const porCobrar = state.orders.filter((o) => !["anulado", "cancelado"].includes(o.status)).reduce((a, o) => a + saldoDe(o), 0);
  const porValidar = state.orders.reduce((a, o) => a + o.recibos.filter((r) => !r.validado).length, 0);
  const woActive = state.workOrders.filter((w) => w.status !== "terminada");
  const lowStock = state.products.filter((p) => p.stock.showroom + p.stock.bodega + p.stock.taller <= p.min);
  const upcoming = openOrders.filter((o) => ["aprobado", "confirmado", "en_bodega", "listo_despacho", "despachado"].includes(o.status)).slice(0, 4);

  const channelData = useMemo(() => {
    const by: Record<string, number> = { tienda: 0, web: 0, link_pago: 0, whatsapp: 0 };
    state.orders.forEach((o) => { if (!["anulado", "cancelado"].includes(o.status)) by[o.channel] += o.total; });
    return [
      { label: "Tienda física", value: by.tienda, color: "#19604f" },
      { label: "Web / catálogo", value: by.web, color: "#38647e" },
      { label: "Link de pago", value: by.link_pago, color: "#c9821f" },
      { label: "WhatsApp", value: by.whatsapp, color: "#5d8a35" },
    ];
  }, [state.orders]);

  const topProducts = useMemo(() => {
    const agg: Record<string, { name: string; total: number }> = {};
    state.orders.forEach((o) => o.items.forEach((i) => {
      agg[i.productId] = agg[i.productId] ?? { name: i.name, total: 0 };
      agg[i.productId].total += i.qty * i.price;
    }));
    return Object.values(agg).sort((a, b) => b.total - a.total).slice(0, 5);
  }, [state.orders]);

  const runLoadTest = async () => {
    toast("Inyectando 1.200 eventos en el bus…", "info");
    const eps = await burst(1200);
    setTest({ n: 1200, eps });
    toast(\`Prueba superada: \${num(eps)} eventos/segundo\`, "ok");
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Hola, {state.session.user?.name?.split(" ")[0] ?? "equipo"} — {fmtDate(new Date().toISOString())}</div>
          <h1 className="font-display font-extrabold text-[30px] leading-tight text-ink mt-1">
            El taller factura <span className="text-pine">{money(state.session.salesToday, false)}</span> hoy
          </h1>
          <p className="text-[13px] text-mut mt-1">
            {num(openOrders.length)} pedidos abiertos · {woActive.length} órdenes en fabricación · {porValidar} {porValidar === 1 ? "pago por validar" : "pagos por validar"}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Btn variant="outline" icon="box" onClick={() => nav("oms", "stock")}>Vender stock</Btn>
          <Btn variant="outline" icon="saw" onClick={() => nav("oms", "pedido")}>Bajo pedido</Btn>
          <Btn variant="dark" icon="ext" onClick={() => nav("web")}>Tienda web</Btn>
          <Btn icon="qr" onClick={() => nav("cobros")}>Cobrar con PayPhone</Btn>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 stagger">
        <Stat label="Ventas de hoy" value={money(state.session.salesToday)} flash={salesFlash} icon="tag" tone="pine" sub={<span className="text-moss font-semibold">▲ en vivo vía bus de eventos</span>} />
        <Stat label="Pedidos abiertos" value={num(openOrders.length)} icon="truck" tone="steel" sub={\`\${openOrders.filter((o) => ["en_fabricacion", "en_produccion", "enviado_proveedor"].includes(o.status)).length} en fabricación · \${openOrders.filter((o) => o.status === "despachado").length} en ruta\`} />
        <Stat label="Por cobrar" value={money(porCobrar)} icon="clock" tone="oak" sub={porValidar ? \`\${porValidar} pagos esperando validación\` : "sin pagos pendientes de validar"} />
        <Stat label="Órdenes de taller" value={num(woActive.length)} icon="saw" tone="moss" sub={\`avance medio \${Math.round(woActive.reduce((a, w) => a + w.progress, 0) / Math.max(1, woActive.length))}%\`} />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <Card className="anim-up">
            <SectionTitle kicker="Ingresos · últimos 14 días" title="Curva de ventas" right={
              <div className="text-right">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog">Pico del bus</div>
                <div className="font-display font-extrabold text-[20px] text-ink num">{num(Math.max(state.session.peakEps, test?.eps ?? 0))} <span className="text-[11px] font-body font-medium text-mut">ev/s</span></div>
              </div>
            } />
            <Sparkline data={salesSeries} height={110} />
            <div className="flex flex-wrap items-center justify-between gap-3 mt-3 pt-3 border-t border-line">
              <div className="flex items-center gap-2 text-[12px] text-mut">
                <span className="w-2 h-2 rounded-full bg-pine" /> Facturación diaria (USD, IVA incluido)
                <span className="w-2 h-2 rounded-full bg-oak ml-3" /> Hoy
              </div>
              <Btn size="sm" variant="dark" icon="zap" onClick={runLoadTest} disabled={bursting}>
                {bursting ? "Procesando eventos…" : "Prueba de carga · 1.200 eventos"}
              </Btn>
            </div>
            {test && (
              <div className="mt-3 flex items-center gap-2.5 rounded-lg bg-pinel/70 border border-pine/20 px-3 py-2.5 anim-pop">
                <Icon name="check" size={15} className="text-pine" />
                <span className="text-[12.5px] text-pined font-medium">
                  {num(test.n)} eventos concurrentes absorbidos a <b className="num">{num(test.eps)} ev/s</b> — el bus (Redis Streams + workers) aguanta el pico de un Cyber Monday.
                </span>
              </div>
            )}
          </Card>

          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="anim-up">
              <SectionTitle kicker="OMS" title="Ventas por canal" />
              <Donut slices={channelData} centerTop={money(state.orders.reduce((a, o) => a + (!["anulado", "cancelado"].includes(o.status) ? o.total : 0), 0) / 1000, false) + "k"} centerBottom="facturado" />
            </Card>
            <Card className="anim-up">
              <SectionTitle kicker="PIM" title="Top productos" />
              <Bars data={topProducts.map((p) => p.total)} labels={topProducts.map((p) => p.name.split(" ")[0])} height={92} />
            </Card>
          </div>

          <Card className="anim-up" pad>
            <SectionTitle kicker="Logística" title="Próximas entregas" right={<Btn size="sm" variant="ghost" icon="arrow" onClick={() => nav("oms")}>Ver OMS</Btn>} />
            <div className="space-y-2">
              {upcoming.map((o) => {
                const tr = state.suppliers.find((s) => s.id === o.transportId);
                return (
                  <button key={o.id} onClick={() => nav("oms", o.code)} className="w-full flex items-center gap-3 rounded-lg border border-line px-3 py-2.5 hover:border-pine/50 hover:bg-pinel/30 transition-all text-left group">
                    <span className="w-8 h-8 rounded-lg bg-steell text-steel grid place-items-center"><Icon name="truck" size={15} /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[13px] font-semibold text-ink">{o.code} · {o.customer}</span>
                      <span className="block text-[11px] text-mut">{o.city} · {tr ? tr.name : "transporte sin asignar"} · ETA {fmtDate(o.eta)}</span>
                    </span>
                    <Badge tone={o.status === "despachado" ? "steel" : "oak"}>{o.status.replace("_", " ")}</Badge>
                    <span className="font-mono text-[12.5px] text-ink num">{money(o.total)}</span>
                  </button>
                );
              })}
              {upcoming.length === 0 && <div className="text-[12.5px] text-mut py-4 text-center">Sin entregas pendientes 🎉</div>}
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="anim-up" pad={false}>
            <div className="px-4 pt-4">
              <SectionTitle kicker="Tiempo real" title="Bus de eventos" right={<span className="flex items-center gap-1.5 text-[11px] font-mono text-moss"><span className="w-2 h-2 rounded-full bg-moss live-dot" />LIVE</span>} />
            </div>
            <div className="max-h-[430px] overflow-y-auto px-2 pb-2">
              {state.events.slice(0, 18).map((e) => {
                const meta = EVENT_ICON[e.type] ?? EVENT_ICON.sistema;
                return (
                  <div key={e.id} className="anim-feed flex items-start gap-2.5 px-2 py-2 rounded-lg hover:bg-ink/3">
                    <span className={\`w-7 h-7 rounded-lg grid place-items-center shrink-0 \${meta.tone}\`}><Icon name={meta.icon} size={13} /></span>
                    <div className="min-w-0">
                      <div className="text-[12.5px] text-ink leading-snug">{e.msg}</div>
                      <div className="text-[10.5px] font-mono text-fog mt-0.5">{timeAgo(e.ts)} · ev#{(state.session.events - state.events.indexOf(e)).toLocaleString()}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="anim-up">
            <SectionTitle kicker="Alertas" title="Stock bajo mínimo" right={<Btn size="sm" variant="ghost" icon="arrow" onClick={() => nav("pim")}>PIM</Btn>} />
            <div className="space-y-2.5">
              {lowStock.map((p) => {
                const total = p.stock.showroom + p.stock.bodega + p.stock.taller;
                return (
                  <div key={p.id} className="flex items-center gap-2.5">
                    <Thumb src={p.img} alt={p.name} className="w-9 h-9 rounded-lg" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[12px] font-semibold text-ink truncate">{p.name}</div>
                      <div className="text-[10.5px] text-mut font-mono">{p.sku} · {total}/{p.min} und</div>
                    </div>
                    <Progress value={(total / Math.max(1, p.min)) * 100} tone={total <= p.min ? "brick" : "oak"} />
                  </div>
                );
              })}
              {lowStock.length === 0 && <div className="text-[12.5px] text-mut">Todo el catálogo sobre el mínimo.</div>}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
`,Xe=`import { useMemo, useState } from "react";
import { buildPayLink, useStore } from "../lib/store";
import type { Product, Warehouse } from "../lib/types";
import { marginPct, money, uid } from "../lib/util";
import { Badge, Btn, Card, CopyBtn, Drawer, EmptyState, Field, Icon, Input, Modal, SectionTitle, Select, Td, Th } from "../components/ui";
import { Thumb } from "../components/Img";

const WH_LABEL: Record<Warehouse, string> = { showroom: "Showroom", bodega: "Bodega", taller: "Taller" };

export default function Productos({ initialQuery }: { initialQuery?: string }) {
  const { state, dispatch, toast } = useStore();
  const [q, setQ] = useState(initialQuery ?? "");
  const [cat, setCat] = useState("todas");
  const [status, setStatus] = useState("todos");
  const [open, setOpen] = useState<Product | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [np, setNp] = useState({ name: "", category: "Sala", line: "fabricacion" as Product["line"], cost: "", price: "", min: "2", stock: "4" });

  const cats = useMemo(() => Array.from(new Set(state.products.map((p) => p.category))), [state.products]);
  const list = state.products.filter((p) => {
    const okQ = (p.name + p.sku + p.category + p.materials.join(" ")).toLowerCase().includes(q.toLowerCase());
    const okC = cat === "todas" || p.category === cat;
    const okS = status === "todos" || (status === "bajo" ? p.stock.showroom + p.stock.bodega + p.stock.taller <= p.min : p.status === status);
    return okQ && okC && okS;
  });

  const totalUnits = state.products.reduce((a, p) => a + p.stock.showroom + p.stock.bodega + p.stock.taller, 0);
  const totalValue = state.products.reduce((a, p) => a + (p.stock.showroom + p.stock.bodega + p.stock.taller) * p.cost, 0);

  const createProduct = () => {
    if (!np.name.trim() || !np.price) return toast("Completa nombre y precio", "warn");
    const p: Product = {
      id: uid(),
      sku: \`\${np.category.slice(0, 3).toUpperCase()}-\${String(100 + state.products.length + 1)}\`,
      name: np.name.trim(), category: np.category, line: np.line,
      materials: ["Por definir en ficha"], cost: Number(np.cost) || 0, price: Number(np.price),
      stock: { showroom: 0, bodega: Number(np.stock) || 0, taller: 0 },
      min: Number(np.min) || 2, status: "activo", img: "", mediaIds: [],
      dims: "—", weightKg: 0, leadDays: np.line === "importado" ? 40 : 15, createdAt: new Date().toISOString(),
    };
    dispatch({ type: "CREATE_PRODUCT", product: p });
    setShowNew(false);
    setNp({ name: "", category: "Sala", line: "fabricacion", cost: "", price: "", min: "2", stock: "4" });
    toast(\`Producto \${p.sku} publicado en el PIM\`);
  };

  const quickPayLink = (p: Product) => {
    const link = buildPayLink(state, Math.round(p.price * 1.15 * 100) / 100, \`Venta directa · \${p.sku} \${p.name}\`, "Cliente en tienda", null);
    dispatch({ type: "CREATE_PAYLINK", link });
    toast(\`Link PayPhone generado por \${money(link.amount)} — cópialo en Cobros\`);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">PIM · información maestra de producto</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Catálogo & fichas técnicas</h1>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-mut">
          <span className="font-mono">{state.products.length} SKUs</span> · <span className="font-mono">{totalUnits} und</span> · <span className="font-mono">{money(totalValue, false)} en costo</span>
        </div>
      </div>

      <Card pad={false} className="anim-up">
        <div className="flex flex-wrap items-center gap-2 p-3 border-b border-line">
          <div className="relative flex-1 min-w-[200px]">
            <Icon name="search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-fog" />
            <Input placeholder="Buscar por nombre, SKU, material…" value={q} onChange={(e) => setQ(e.target.value)} className="pl-8" />
          </div>
          <Select value={cat} onChange={(e) => setCat(e.target.value)} className="w-auto">
            <option value="todas">Todas las categorías</option>
            {cats.map((c) => <option key={c} value={c}>{c}</option>)}
          </Select>
          <Select value={status} onChange={(e) => setStatus(e.target.value)} className="w-auto">
            <option value="todos">Todos los estados</option>
            <option value="activo">Activos</option>
            <option value="bajo">Bajo mínimo</option>
            <option value="agotado">Agotados</option>
          </Select>
          <Btn icon="plus" onClick={() => setShowNew(true)}>Nuevo producto</Btn>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-[13px] min-w-[860px]">
            <thead className="bg-ink/3 border-b border-line">
              <tr><Th>Producto</Th><Th>Categoría</Th><Th right>Costo</Th><Th right>PVP +IVA</Th><Th right>Margen</Th><Th>Stock (S/B/T)</Th><Th>Estado</Th><Th right>Acciones</Th></tr>
            </thead>
            <tbody>
              {list.map((p) => {
                const total = p.stock.showroom + p.stock.bodega + p.stock.taller;
                const low = total <= p.min;
                return (
                  <tr key={p.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors cursor-pointer" onClick={() => setOpen(p)}>
                    <Td>
                      <div className="flex items-center gap-2.5">
                        <Thumb src={p.img} alt={p.name} className="w-11 h-11 rounded-lg border border-line" />
                        <div>
                          <div className="font-semibold text-ink leading-tight">{p.name}</div>
                          <div className="font-mono text-[10.5px] text-fog">{p.sku} · {p.line === "fabricacion" ? "fabricación propia" : p.line === "importado" ? "importado" : "compra local"}</div>
                        </div>
                      </div>
                    </Td>
                    <Td><Badge tone="fog">{p.category}</Badge></Td>
                    <Td right className="num font-mono text-[12.5px] text-mut">{money(p.cost)}</Td>
                    <Td right className="num font-mono text-[12.5px] font-semibold text-ink">{money(p.price)}</Td>
                    <Td right><Badge tone={marginPct(p.cost, p.price) >= 40 ? "moss" : marginPct(p.cost, p.price) >= 25 ? "oak" : "brick"}>{marginPct(p.cost, p.price)}%</Badge></Td>
                    <Td>
                      <div className="font-mono text-[12px] text-ink num">{p.stock.showroom} / {p.stock.bodega} / {p.stock.taller}</div>
                      {low && <div className="text-[10px] text-brick font-semibold flex items-center gap-1"><Icon name="alert" size={10} />bajo mínimo ({p.min})</div>}
                    </Td>
                    <Td><Badge tone={low ? "brick" : p.status === "activo" ? "pine" : "fog"} dot>{low ? "reponer" : p.status}</Badge></Td>
                    <Td right>
                      <div className="flex justify-end gap-1" onClick={(e) => e.stopPropagation()}>
                        <Btn size="sm" variant="outline" icon="qr" onClick={() => quickPayLink(p)}>Cobrar</Btn>
                        <Btn size="sm" variant="ghost" icon="arrow" onClick={() => setOpen(p)}>Ficha</Btn>
                      </div>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {list.length === 0 && <EmptyState icon="box" title="Sin resultados" sub="Ajusta la búsqueda o los filtros para encontrar el SKU." />}
        </div>
      </Card>

      <Drawer open={!!open} onClose={() => setOpen(null)} kicker={\`Ficha PIM · \${open?.sku ?? ""}\`} title={open?.name ?? ""}>
        {open && (() => {
          const history = state.orders.filter((o) => o.items.some((i) => i.productId === open.id));
          return (
            <div className="space-y-4">
              <Thumb src={open.img} alt={open.name} className="w-full h-44 rounded-xl border border-line" />
              <div className="grid grid-cols-3 gap-2 text-center">
                {(["showroom", "bodega", "taller"] as Warehouse[]).map((w) => (
                  <div key={w} className="rounded-lg border border-line p-2.5">
                    <div className="font-display font-extrabold text-[20px] text-ink num">{open.stock[w]}</div>
                    <div className="text-[10px] uppercase tracking-wider text-mut font-bold">{WH_LABEL[w]}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-pinel/50 border border-pine/15 p-3 flex items-center justify-between">
                <div className="text-[12px] text-pined">Margen bruto sobre PVP</div>
                <div className="font-display font-extrabold text-[18px] text-pine num">{marginPct(open.cost, open.price)}%</div>
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-mut mb-1.5">Materiales</div>
                <div className="flex flex-wrap gap-1.5">{open.materials.map((m) => <Badge key={m} tone="oak">{m}</Badge>)}</div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[12.5px]">
                <div className="rounded-lg border border-line p-2.5"><div className="text-fog text-[10.5px] uppercase font-bold">Dimensiones</div>{open.dims}</div>
                <div className="rounded-lg border border-line p-2.5"><div className="text-fog text-[10.5px] uppercase font-bold">Peso</div>{open.weightKg} kg</div>
                <div className="rounded-lg border border-line p-2.5"><div className="text-fog text-[10.5px] uppercase font-bold">Lead time</div>{open.leadDays} días</div>
                <div className="rounded-lg border border-line p-2.5"><div className="text-fog text-[10.5px] uppercase font-bold">Costo / PVP</div><span className="font-mono">{money(open.cost)} → {money(open.price)}</span></div>
              </div>
              <div>
                <SectionTitle kicker="OMS" title={\`Historial de ventas (\${history.length})\`} />
                <div className="space-y-1.5">
                  {history.slice(0, 4).map((o) => (
                    <div key={o.id} className="flex items-center justify-between text-[12.5px] rounded-lg border border-line px-3 py-2">
                      <span className="font-mono text-mut">{o.code}</span>
                      <span className="text-ink">{o.customer}</span>
                      <Badge tone={o.status === "entregado" ? "pine" : "steel"}>{o.status.replace("_", " ")}</Badge>
                    </div>
                  ))}
                  {history.length === 0 && <div className="text-[12px] text-mut">Aún sin pedidos con este SKU.</div>}
                </div>
              </div>
              <div className="flex gap-2 pt-1">
                <CopyBtn text={\`\${state.settings.linkBase}/cat/\${open.sku}\`} label="Copiar link de catálogo" size="md" />
                <Btn variant="oak" icon="qr" onClick={() => quickPayLink(open)} className="flex-1">Link de cobro directo</Btn>
              </div>
            </div>
          );
        })()}
      </Drawer>

      <Modal open={showNew} onClose={() => setShowNew(false)} kicker="PIM · alta de SKU" title="Nuevo producto">
        <div className="space-y-3">
          <Field label="Nombre comercial"><Input value={np.name} onChange={(e) => setNp({ ...np, name: e.target.value })} placeholder="Ej: Mesa de Centro Mármol Cotopaxi" /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Categoría">
              <Select value={np.category} onChange={(e) => setNp({ ...np, category: e.target.value })}>
                {["Sala", "Comedor", "Dormitorio", "Oficina", "Exterior"].map((c) => <option key={c}>{c}</option>)}
              </Select>
            </Field>
            <Field label="Origen">
              <Select value={np.line} onChange={(e) => setNp({ ...np, line: e.target.value as Product["line"] })}>
                <option value="fabricacion">Fabricación propia</option>
                <option value="compra_local">Compra local</option>
                <option value="importado">Importado</option>
              </Select>
            </Field>
            <Field label="Costo USD"><Input type="number" value={np.cost} onChange={(e) => setNp({ ...np, cost: e.target.value })} placeholder="0.00" /></Field>
            <Field label="PVP (sin IVA)"><Input type="number" value={np.price} onChange={(e) => setNp({ ...np, price: e.target.value })} placeholder="0.00" /></Field>
            <Field label="Stock inicial (bodega)"><Input type="number" value={np.stock} onChange={(e) => setNp({ ...np, stock: e.target.value })} /></Field>
            <Field label="Mínimo de reposición"><Input type="number" value={np.min} onChange={(e) => setNp({ ...np, min: e.target.value })} /></Field>
          </div>
          {np.price && np.cost && (
            <div className="rounded-lg bg-oakl/70 border border-oak/25 px-3 py-2 text-[12px] text-oakd anim-pop">
              PVP con IVA 15%: <b className="font-mono">{money(Number(np.price) * 1.15)}</b> · margen <b>{marginPct(Number(np.cost), Number(np.price))}%</b>
            </div>
          )}
          <div className="flex justify-end gap-2 pt-1">
            <Btn variant="ghost" onClick={() => setShowNew(false)}>Cancelar</Btn>
            <Btn icon="check" onClick={createProduct}>Publicar en PIM</Btn>
          </div>
        </div>
      </Modal>
    </div>
  );
}
`,et=`import { useEffect, useMemo, useRef, useState } from "react";
import { buildOrder, buildPayLink, estadosCliente, estadosLabel, orderFlow, saldoDe, useStore } from "../lib/store";
import type { Channel, Customer, Movement, Order, OrderKind, OrderSpec, OrderStatus, Warehouse } from "../lib/types";
import { calcTotals, copyText, fmtDate, money, timeAgo, uid } from "../lib/util";
import { Badge, Btn, Card, Drawer, EmptyState, Field, Icon, Input, Modal, SectionTitle, Select, Tabs, Td, Th } from "../components/ui";
import { Thumb } from "../components/Img";
import { searchCustomer, clearCache } from "../utils/sriService";

const orderTone: Record<OrderStatus, "pine" | "oak" | "steel" | "moss" | "brick" | "fog"> = {
  borrador: "fog", pendiente: "fog", por_aprobar: "oak", aprobado: "pine", confirmado: "pine",
  enviado_proveedor: "oak", en_fabricacion: "oak", en_produccion: "oak", listo_proveedor: "steel",
  en_bodega: "steel", listo_despacho: "steel", despachado: "oak", entregado: "pine",
  anulado: "brick", cancelado: "brick",
};

const WH_LABEL: Record<Warehouse, string> = { showroom: "Showroom", bodega: "Bodega", taller: "Taller" };
const emptySpec = (): OrderSpec => ({ tapiz: "", tapizSec: "", cojines: "", lacado: "", notas: "", fotos: [] });

const SPEC_FIELDS: { campo: "tapiz" | "tapizSec" | "cojines" | "lacado"; label: string; placeholder: string }[] = [
  { campo: "tapiz", label: "Tapiz principal", placeholder: "ej: Lino crudo T-04" },
  { campo: "tapizSec", label: "Tapiz secundario", placeholder: "ej: Chenille gris piedra" },
  { campo: "cojines", label: "Cojines", placeholder: "cantidad y tela" },
  { campo: "lacado", label: "Lacado", placeholder: "ej: Natural mate (poro abierto)" },
];

/* sube una foto real y la guarda como data-URL (con miniatura) */
function FotoBox({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const ref = useRef<HTMLInputElement>(null);
  const isImg = value.startsWith("data:") || value.startsWith("http");
  return (
    <>
      <button type="button" onClick={() => ref.current?.click()} title={value ? "Cambiar foto" : "Subir foto"}
        className="relative w-12 h-12 rounded-lg border border-oak/30 bg-paper overflow-hidden grid place-items-center hover:border-oak hover:shadow-sm transition-all shrink-0 group">
        {isImg ? (
          <img src={value} alt="" className="w-full h-full object-cover" />
        ) : (
          <Icon name="image" size={16} className="text-oakd" />
        )}
        {value && !isImg && <span className="absolute inset-x-0 bottom-0 bg-night/70 text-paper text-[6.5px] font-mono truncate px-0.5 py-px">{value}</span>}
        <span className="absolute inset-0 bg-wine/0 group-hover:bg-wine/10 transition-colors" />
      </button>
      <input ref={ref} type="file" accept="image/*" className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (!f) return;
          const r = new FileReader();
          r.onload = () => onChange(r.result as string);
          r.readAsDataURL(f);
          e.target.value = "";
        }} />
    </>
  );
}

/* una fila de spec: su etiqueta, su campo de texto y SU foto (asociada al campo) */
function SpecRow({ spec, campo, label, placeholder, onChange }: {
  spec: OrderSpec; campo: "tapiz" | "tapizSec" | "cojines" | "lacado"; label: string; placeholder: string;
  onChange: (s: OrderSpec) => void;
}) {
  const foto = spec.fotos.find((f) => f.campo === label)?.label ?? "";
  const setFoto = (v: string) => {
    const rest = spec.fotos.filter((f) => f.campo !== label);
    onChange({ ...spec, fotos: v ? [...rest, { campo: label, label: v }] : rest });
  };
  return (
    <div className="flex items-center gap-2.5 rounded-lg bg-card border border-line px-2.5 py-2">
      <FotoBox value={foto} onChange={setFoto} />
      <div className="min-w-0 flex-1">
        <div className="text-[10px] uppercase font-bold tracking-wider text-oakd mb-1">{label}</div>
        <input value={spec[campo]} onChange={(e) => onChange({ ...spec, [campo]: e.target.value })} placeholder={placeholder}
          className="w-full bg-transparent border-b border-line focus:border-oak outline-none text-[13px] pb-1 transition-colors placeholder:text-fog" />
      </div>
    </div>
  );
}

export default function Operaciones({ initialQuery }: { initialQuery?: string }) {
  const { state, dispatch, toast } = useStore();
  const [tab, setTab] = useState<"pedidos" | "inventario" | "movimientos">("pedidos");
  const [q, setQ] = useState(() => (["stock", "pedido", "online"].includes(initialQuery ?? "") ? "" : initialQuery ?? ""));
  const [kindF, setKindF] = useState<"todos" | OrderKind>("todos");
  const [statusF, setStatusF] = useState<OrderStatus | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [drawerTab, setDrawerTab] = useState<"resumen" | "specs" | "traza" | "cobros" | "confirm">("resumen");
  const [showNew, setShowNew] = useState<OrderKind | null>(null);
  const [abono, setAbono] = useState({ amount: "", method: "Transferencia Bco. Pichincha" });
  const [anula, setAnula] = useState<"anulado" | "cancelado" | null>(null);
  const [motivo, setMotivo] = useState("");
  const [mvOpen, setMvOpen] = useState(false);
  const [mv, setMv] = useState({ type: "ingreso" as Movement["type"], warehouse: "bodega" as Warehouse, productId: "", qty: "1", ref: "" });
  const [nf, setNf] = useState({
    customerId: "", channel: "tienda" as Channel,
    items: [{ productId: "", qty: "1", spec: emptySpec() }],
  });
  // Estados para búsqueda de cliente por documento (SRI/Registro Civil)
  const [docBusqueda, setDocBusqueda] = useState("");
  const [docLoading, setDocLoading] = useState(false);
  const [docError, setDocError] = useState<string | null>(null);
  const [clienteManual, setClienteManual] = useState<Partial<Customer> | null>(null);

  const cur = state.orders.find((o) => o.id === openId) ?? null;

  const simulateOnline = () => {
    const p = state.products[Math.floor(Math.random() * state.products.length)];
    const c = state.customers[Math.floor(Math.random() * 3)];
    const o = buildOrder(state, c.id, [{ productId: p.id, qty: 1 }], "web", "venta");
    o.trace = [{ ts: o.createdAt, user: "sistema", msg: "Pedido recibido desde catálogo web (checkout online)" }];
    dispatch({ type: "CREATE_ORDER", order: o });
    dispatch({ type: "EVENTS", events: [{ id: uid(), ts: Date.now(), type: "web" as const, msg: \`Nuevo pedido online \${o.code} · \${p.name} · \${c.city}\` }] });
    toast(\`Pedido online \${o.code} entró al pipeline · \${money(o.total)}\`);
  };

  useEffect(() => {
    if (initialQuery === "stock") setShowNew("venta");
    if (initialQuery === "pedido") setShowNew("pedido");
    if (initialQuery === "online") simulateOnline();
    if (initialQuery && initialQuery.startsWith("PED-")) {
      const found = state.orders.find((o) => o.code === initialQuery);
      if (found) setOpenId(found.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery]);

  const orders = state.orders.filter((o) =>
    (o.code + o.customer + o.city).toLowerCase().includes(q.toLowerCase()) &&
    (!statusF || o.status === statusF) &&
    (kindF === "todos" || o.kind === kindF)
  );

  const pipeline = orderFlow.map((st) => ({ st, n: state.orders.filter((o) => o.status === st).length }));
  const counts = {
    venta: state.orders.filter((o) => o.kind === "venta" && !["anulado", "cancelado"].includes(o.status)).length,
    pedido: state.orders.filter((o) => o.kind === "pedido" && !["anulado", "cancelado"].includes(o.status)).length,
  };

  const preview = useMemo(() => {
    const lines = nf.items.filter((i) => i.productId).map((i) => {
      const p = state.products.find((x) => x.id === i.productId)!;
      return { qty: Number(i.qty) || 1, price: p.price };
    });
    return calcTotals(lines);
  }, [nf, state.products]);

  const buscarClientePorDocumento = async () => {
    const doc = docBusqueda.trim();
    if (!doc) return;
    
    setDocLoading(true);
    setDocError(null);
    setClienteManual(null);
    
    try {
      const resultado = await searchCustomer(doc);
      
      if (resultado) {
        // Verificar si el cliente ya existe en la base de datos local
        const clienteExistente = state.customers.find(c => c.id === resultado.id);
        
        if (clienteExistente) {
          // Cliente ya existe, lo seleccionamos directamente
          setNf({ ...nf, customerId: clienteExistente.id });
          toast(\`✅ Cliente encontrado: \${clienteExistente.name}\`);
        } else {
          // Cliente nuevo, guardamos datos para creación automática o manual
          setClienteManual({
            id: resultado.id,
            name: resultado.name,
            type: resultado.type,
            email: resultado.email || '',
            phone: resultado.phone || '',
            address: resultado.address || '',
            city: resultado.city || 'Guayaquil',
          });
          
          if (resultado.name && resultado.status === 'Activo') {
            toast(\`✅ Datos obtenidos del SRI: \${resultado.name}\`);
          } else if (resultado.status?.includes('No encontrado')) {
            toast(\`ℹ️ Cédula válida · complete nombre del cliente\`, 'warn');
          } else {
            toast(\`⚠️ API offline · ingrese datos manualmente\`, 'warn');
          }
        }
      }
    } catch (err: any) {
      setDocError(err.message || 'Error al consultar documento');
      toast(err.message || 'Error en consulta', 'warn');
    } finally {
      setDocLoading(false);
    }
  };

  const crearClienteYContinuar = () => {
    if (!clienteManual || !clienteManual.id) return;
    if (!clienteManual.name?.trim()) return toast('Ingrese el nombre del cliente', 'warn');
    
    // Crear nuevo cliente en el store
    const nuevoCliente: Customer = {
      id: clienteManual.id,
      name: clienteManual.name.trim(),
      type: clienteManual.type || 'natural',
      email: clienteManual.email || '',
      phone: clienteManual.phone || '',
      address: clienteManual.address || '',
      city: clienteManual.city || 'Guayaquil',
      createdAt: new Date().toISOString(),
    };
    
    dispatch({ type: 'CREATE_CUSTOMER', customer: nuevoCliente });
    setNf({ ...nf, customerId: nuevoCliente.id });
    setClienteManual(null);
    setDocBusqueda('');
    toast('Cliente creado exitosamente');
  };

  const createOrder = () => {
    if (!nf.customerId) return toast("Selecciona el cliente", "warn");
    const valid = nf.items.filter((i) => i.productId && Number(i.qty) > 0);
    if (!valid.length) return toast("Agrega al menos un producto", "warn");
    const kind = showNew!;
    const o = buildOrder(
      state, nf.customerId,
      valid.map((i) => ({ productId: i.productId, qty: Number(i.qty), spec: kind === "pedido" ? { ...i.spec, fotos: i.spec.fotos.filter((f) => f.campo.trim()) } : undefined })),
      nf.channel, kind
    );
    dispatch({ type: "CREATE_ORDER", order: o });
    setShowNew(null);
    setNf({ customerId: "", channel: "tienda", items: [{ productId: "", qty: "1", spec: emptySpec() }] });
    setOpenId(o.id);
    toast(\`\${kind === "venta" ? "Venta de stock" : "Pedido bajo specs"} \${o.code} creado · \${money(o.total)}\`);
  };

  const advance = (o: Order) => {
    const next = orderFlow[orderFlow.indexOf(o.status) + 1];
    if (!next) return;
    if (next === "despachado" && !o.transportId) return toast("Asigna un transportista antes de despachar", "warn");
    dispatch({ type: "ADVANCE_ORDER", id: o.id, status: next });
    if (next === "entregado") toast(\`\${o.code} entregado · factura electrónica emitida\`);
    else if (next === "listo_despacho") toast(\`\${o.code} listo para despacho — créalo en Logística\`);
    else toast(\`\${o.code} → \${estadosLabel[next].toUpperCase()}\`);
  };

  const addRecibo = (o: Order) => {
    const amount = Number(abono.amount);
    const saldo = saldoDe(o);
    if (!amount || amount <= 0 || amount > saldo + 0.01) return toast(\`Monto inválido · saldo pendiente \${money(saldo)}\`, "warn");
    dispatch({ type: "ADD_RECIBO", orderId: o.id, amount, method: abono.method, note: amount >= saldo - 0.01 ? "Pago del saldo" : "Abono parcial" });
    setAbono({ amount: "", method: abono.method });
    toast(\`Recibo registrado · \${money(amount)} — espera validación del dueño\`, "warn");
  };

  const validar = (o: Order, reciboId: string) => {
    dispatch({ type: "VALIDAR_RECIBO", orderId: o.id, reciboId });
    toast("Pago validado · saldo y contabilidad actualizados");
  };

  const saveMv = () => {
    const p = state.products.find((x) => x.id === mv.productId);
    const qty = Number(mv.qty);
    if (!p || !qty) return toast("Completa producto y cantidad", "warn");
    dispatch({ type: "MOVEMENT", mv: { id: uid(), ts: new Date().toISOString(), type: mv.type, warehouse: mv.warehouse, productId: p.id, sku: p.sku, productName: p.name, qty, ref: mv.ref || "Manual", user: "Luis Ch." } });
    setMv({ ...mv, qty: "1", ref: "" });
    setMvOpen(false);
    toast("Movimiento registrado en el kardex");
  };

  const specOf = (o: Order) => o.items.filter((i) => i.spec);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">OMS · máquina de estados BLETIA (15 estados) — Venta stock vs Pedido bajo specs</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Pedidos, stock y kardex</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Btn variant="outline" icon="box" onClick={() => setShowNew("venta")}>Vender stock</Btn>
          <Btn variant="outline" icon="saw" onClick={() => setShowNew("pedido")}>Vender bajo pedido</Btn>
          <Btn variant="dark" icon="ext" onClick={simulateOnline}>Tomar online</Btn>
        </div>
      </div>

      <Tabs
        tabs={[{ id: "pedidos", label: \`Pedidos (\${state.orders.length})\` }, { id: "inventario", label: "Inventario" }, { id: "movimientos", label: "Movimientos" }]}
        value={tab} onChange={(t) => setTab(t as typeof tab)}
      />

      {tab === "pedidos" && (
        <>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 stagger">
            {pipeline.map(({ st, n }) => (
              <button key={st} onClick={() => setStatusF(statusF === st ? null : st)}
                className={\`bg-card border rounded-xl px-2 py-2.5 text-left hover:-translate-y-px transition-all \${statusF === st ? "border-pine ring-2 ring-pine/20 shadow-md" : "border-line hover:border-pine/40"}\`}>
                <div className="font-display font-extrabold text-[18px] text-ink num leading-none">{n}</div>
                <div className="mt-1.5"><Badge tone={orderTone[st]} dot>{estadosLabel[st]}</Badge></div>
              </button>
            ))}
          </div>

          <Card pad={false} className="anim-up">
            <div className="flex flex-wrap items-center gap-2 p-3 border-b border-line">
              <div className="relative flex-1 min-w-[180px]">
                <Icon name="search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-fog" />
                <Input placeholder="Buscar pedido, cliente, ciudad…" value={q} onChange={(e) => setQ(e.target.value)} className="pl-8" />
              </div>
              <div className="flex gap-1 bg-ink/5 rounded-lg p-1">
                {([["todos", "Todos"], ["venta", "Venta stock"], ["pedido", "Pedido specs"]] as const).map(([k, l]) => (
                  <button key={k} onClick={() => setKindF(k)} className={\`px-2.5 py-1 rounded-md text-[11.5px] font-bold transition-all \${kindF === k ? "bg-card shadow-sm text-ink" : "text-mut"}\`}>{l}</button>
                ))}
              </div>
              {(statusF || kindF !== "todos") && (
                <button onClick={() => { setStatusF(null); setKindF("todos"); }} className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-pinel border border-pine/30 text-pined text-[12px] font-semibold anim-pop">
                  limpiar filtros <Icon name="x" size={12} />
                </button>
              )}
              <span className="ml-auto font-mono text-[11px] text-fog">{counts.venta} ventas · {counts.pedido} pedidos</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] min-w-[900px]">
                <thead className="bg-ink/3 border-b border-line">
                  <tr><Th>Pedido</Th><Th>Cliente</Th><Th>Ítems</Th><Th right>Total +IVA</Th><Th right>Saldo</Th><Th>Estado</Th><Th>Pago</Th><Th right>Flujo</Th></tr>
                </thead>
                <tbody>
                  {orders.map((o) => {
                    const next = orderFlow[orderFlow.indexOf(o.status) + 1];
                    const saldo = saldoDe(o);
                    const sinValidar = o.recibos.filter((r) => !r.validado).length;
                    return (
                      <tr key={o.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors cursor-pointer" onClick={() => { setOpenId(o.id); setDrawerTab("resumen"); }}>
                        <Td>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[12px] font-semibold text-ink">{o.code}</span>
                            <Badge tone={o.kind === "pedido" ? "oak" : "steel"}>{o.kind === "pedido" ? "bajo specs" : "stock"}</Badge>
                          </div>
                          <div className="text-[10.5px] text-fog mt-0.5">{fmtDate(o.createdAt)} · ETA {fmtDate(o.eta)} · {o.bultos} bultos</div>
                        </Td>
                        <Td>
                          <div className="font-semibold text-ink leading-tight">{o.customer}</div>
                          <div className="text-[11px] text-mut">{o.city}{o.workOrderId ? " · con orden de taller" : ""}</div>
                        </Td>
                        <Td className="text-mut">{o.items.length} línea{o.items.length > 1 ? "s" : ""}</Td>
                        <Td right className="font-mono text-[12.5px] font-semibold text-ink num">{money(o.total)}</Td>
                        <Td right>
                          <span className={\`font-mono text-[12px] num \${saldo > 0 ? "text-oakd font-semibold" : "text-[#41621f]"}\`}>{saldo > 0 ? money(saldo) : "$0,00"}</span>
                          {sinValidar > 0 && <div className="text-[9.5px] text-brick font-bold">{sinValidar} sin validar</div>}
                        </Td>
                        <Td><Badge tone={orderTone[o.status]} dot>{estadosLabel[o.status]}</Badge></Td>
                        <Td><Badge tone={o.payment === "pagado" ? "moss" : o.payment === "parcial" ? "oak" : "fog"}>{o.payment}</Badge></Td>
                        <Td right>
                          <div className="flex justify-end gap-1" onClick={(e) => e.stopPropagation()}>
                            {next && !["anulado", "cancelado"].includes(o.status) && (
                              <Btn size="sm" variant="outline" icon="arrow" onClick={() => advance(o)}>{next === "entregado" ? "Entregar" : "Avanzar"}</Btn>
                            )}
                            <Btn size="sm" variant="ghost" icon="eye" onClick={() => { setOpenId(o.id); setDrawerTab("resumen"); }} />
                          </div>
                        </Td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {orders.length === 0 && <EmptyState icon="box" title="Sin pedidos" sub="Crea una venta de stock o un pedido bajo specs con los botones de arriba." />}
            </div>
          </Card>
        </>
      )}

      {tab === "inventario" && (
        <Card pad={false} className="anim-up">
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] min-w-[760px]">
              <thead className="bg-ink/3 border-b border-line">
                <tr><Th>SKU</Th><Th>Producto</Th><Th right>Showroom</Th><Th right>Bodega</Th><Th right>Taller</Th><Th right>Total</Th><Th right>Mín.</Th><Th>Salud</Th></tr>
              </thead>
              <tbody>
                {state.products.map((p) => {
                  const total = p.stock.showroom + p.stock.bodega + p.stock.taller;
                  const low = total <= p.min;
                  return (
                    <tr key={p.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                      <Td className="font-mono text-[12px] text-mut">{p.sku}</Td>
                      <Td><div className="flex items-center gap-2.5"><Thumb src={p.img} alt={p.name} className="w-9 h-9 rounded-lg border border-line" /><span className="font-semibold text-ink">{p.name}</span></div></Td>
                      <Td right className="num font-mono text-[12.5px]">{p.stock.showroom}</Td>
                      <Td right className="num font-mono text-[12.5px]">{p.stock.bodega}</Td>
                      <Td right className="num font-mono text-[12.5px]">{p.stock.taller}</Td>
                      <Td right className="num font-mono text-[12.5px] font-bold text-ink">{total}</Td>
                      <Td right className="num font-mono text-[12.5px] text-mut">{p.min}</Td>
                      <Td><Badge tone={low ? "brick" : "moss"} dot>{low ? "reponer" : "ok"}</Badge></Td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {tab === "movimientos" && (
        <Card pad={false} className="anim-up">
          <div className="flex flex-wrap items-center gap-2 p-3 border-b border-line">
            <SectionTitle kicker="Kardex" title="Últimos movimientos" />
            <div className="ml-auto"><Btn size="sm" icon="plus" onClick={() => setMvOpen(true)}>Registrar movimiento</Btn></div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] min-w-[720px]">
              <thead className="bg-ink/3 border-b border-line">
                <tr><Th>Fecha</Th><Th>Tipo</Th><Th>Bodega</Th><Th>Producto</Th><Th right>Cant.</Th><Th>Referencia</Th><Th>Usuario</Th></tr>
              </thead>
              <tbody>
                {state.movements.map((m) => (
                  <tr key={m.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                    <Td className="text-mut whitespace-nowrap">{fmtDate(m.ts)} · {new Date(m.ts).toLocaleTimeString("es-EC", { hour: "2-digit", minute: "2-digit" })}</Td>
                    <Td><Badge tone={m.type === "ingreso" ? "moss" : m.type === "egreso" ? "brick" : m.type === "transferencia" ? "steel" : "oak"}>{m.type}</Badge></Td>
                    <Td className="capitalize text-mut">{m.warehouse}</Td>
                    <Td><span className="font-mono text-[11.5px] text-mut">{m.sku}</span> <span className="text-ink">{m.productName}</span></Td>
                    <Td right className="num font-mono font-semibold text-ink">{m.type === "egreso" ? "−" : "+"}{m.qty}</Td>
                    <Td className="font-mono text-[11.5px] text-mut">{m.ref}</Td>
                    <Td className="text-mut">{m.user}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* drawer de pedido */}
      <Drawer open={!!cur} onClose={() => setOpenId(null)} kicker={\`\${cur?.code ?? ""} · \${cur?.kind === "pedido" ? "pedido bajo specs" : "venta de stock"}\`} title={cur?.customer ?? ""}>
        {cur && (() => {
          const saldo = saldoDe(cur);
          const next = orderFlow[orderFlow.indexOf(cur.status) + 1];
          const transportes = state.suppliers.filter((s) => s.kind === "transporte");
          return (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone={orderTone[cur.status]} dot>{estadosLabel[cur.status]}</Badge>
                <Badge tone={cur.payment === "pagado" ? "moss" : cur.payment === "parcial" ? "oak" : "fog"}>{cur.payment}</Badge>
                <Badge tone="fog">{cur.channel.replace("_", " ")}</Badge>
                <Badge tone="steel">{cur.bultos} bultos</Badge>
                <span className="ml-auto font-display font-extrabold text-[22px] text-ink num">{money(cur.total)}</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-steell/60 border border-steel/20 px-3 py-2">
                <Icon name="eye" size={14} className="text-steel" />
                <span className="text-[12px] text-steel">El cliente ve: <b className="font-semibold">{estadosCliente[cur.status]}</b> <span className="text-steel/70">· vía link de seguimiento</span></span>
              </div>

              <div className="flex gap-1 bg-ink/5 rounded-lg p-1">
                {([["resumen", "Resumen"], ["specs", \`Specs (\${specOf(cur).length})\`], ["traza", \`Traza (\${cur.trace.length})\`], ["cobros", "Recibos"], ["confirm", "Confirmar"]] as const).map(([k, l]) => (
                  <button key={k} onClick={() => setDrawerTab(k)} className={\`flex-1 px-2 py-1.5 rounded-md text-[11.5px] font-bold transition-all \${drawerTab === k ? "bg-card shadow-sm text-ink" : "text-mut"}\`}>{l}</button>
                ))}
              </div>

              {drawerTab === "resumen" && (
                <div className="space-y-3 anim-up">
                  <div className="rounded-lg border border-line overflow-hidden">
                    {cur.items.map((i, ix) => (
                      <div key={ix} className="flex items-center justify-between px-3 py-2 text-[13px] border-b border-line/70 last:border-0">
                        <div><span className="font-mono text-[11px] text-fog">{i.sku}</span> <span className="font-semibold text-ink">{i.name}</span>{i.spec && <Badge tone="oak" className="ml-2">spec</Badge>}</div>
                        <div className="font-mono num text-ink">{i.qty} × {money(i.price)}</div>
                      </div>
                    ))}
                    <div className="px-3 py-2 bg-ink/3 text-[12.5px] space-y-0.5">
                      <div className="flex justify-between text-mut"><span>Subtotal</span><span className="font-mono num">{money(cur.subtotal)}</span></div>
                      <div className="flex justify-between text-mut"><span>IVA 15%</span><span className="font-mono num">{money(cur.iva)}</span></div>
                      <div className="flex justify-between font-bold text-ink text-[14px]"><span>Total</span><span className="font-mono num">{money(cur.total)}</span></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-mut mb-1.5">Transportista asignado</div>
                    <div className="flex gap-1.5 flex-wrap">
                      {transportes.map((t) => (
                        <button key={t.id} onClick={() => { dispatch({ type: "SET_TRANSPORT", id: cur.id, transportId: t.id }); toast(\`Transportista \${t.name} asignado a \${cur.code}\`); }}
                          className={\`px-3 py-1.5 rounded-lg border text-[12px] font-semibold transition-all \${cur.transportId === t.id ? "border-pine bg-pinel text-pined shadow-sm" : "border-line text-mut hover:border-pine/40"}\`}>
                          {t.name} · ★ {t.rating}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {next && !["anulado", "cancelado"].includes(cur.status) && (
                      <Btn icon="arrow" onClick={() => advance(cur)} className="flex-1">
                        {next === "entregado" ? "Confirmar entrega" : \`Avanzar → \${estadosLabel[next]}\`}
                      </Btn>
                    )}
                    {!["anulado", "cancelado", "entregado"].includes(cur.status) && (
                      <>
                        <Btn variant="outline" icon="x" onClick={() => { setAnula("cancelado"); setMotivo(""); }}>Cancelar</Btn>
                        <Btn variant="outline" icon="x" onClick={() => { setAnula("anulado"); setMotivo(""); }}>Anular</Btn>
                      </>
                    )}
                  </div>
                  <div className="text-[11.5px] text-mut">
                    Creado {fmtDate(cur.createdAt)} · ETA {fmtDate(cur.eta)} · {cur.city}
                    {cur.workOrderId && <> · orden de taller <b className="text-ink">{state.workOrders.find((w) => w.id === cur.workOrderId)?.code}</b></>}
                  </div>
                </div>
              )}

              {drawerTab === "specs" && (
                <div className="space-y-3 anim-up">
                  {specOf(cur).length === 0 && <EmptyState icon="brush" title="Sin personalización" sub="Este pedido es una venta de stock sin specs. Las specs viven en la ruta 'bajo pedido'." />}
                  {specOf(cur).map((i, ix) => (
                    <div key={ix} className="rounded-xl border border-oak/30 bg-oakl/40 p-3.5">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="font-semibold text-[13px] text-ink">{i.qty}× {i.name}</span>
                        <Badge tone="oak">personalizado</Badge>
                      </div>
                      {i.spec && (
                        <>
                          <div className="space-y-2">
                            {SPEC_FIELDS.map(({ campo, label }) => {
                              const val = i.spec?.[campo] ?? "";
                              const foto = i.spec?.fotos.find((f) => f.campo === label)?.label ?? "";
                              const isImg = foto.startsWith("data:") || foto.startsWith("http");
                              return (
                                <div key={campo} className="flex items-center gap-2.5 rounded-lg bg-card border border-line px-2.5 py-2">
                                  {foto ? (
                                    isImg
                                      ? <img src={foto} alt={label} className="w-11 h-11 rounded-lg object-cover border border-line shrink-0" />
                                      : <span className="w-11 h-11 rounded-lg border border-line grid place-items-center shrink-0 bg-paper"><Icon name="image" size={14} className="text-oakd" /></span>
                                  ) : (
                                    <span className="w-11 h-11 rounded-lg bg-ink/4 grid place-items-center shrink-0"><Icon name="image" size={14} className="text-fog" /></span>
                                  )}
                                  <div className="min-w-0">
                                    <div className="text-[9.5px] uppercase font-bold text-fog">{label}</div>
                                    <div className="text-[12.5px] text-ink truncate">{val || "—"}</div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          {i.spec.notas && <div className="mt-2 text-[12px] text-oakd bg-card border border-line rounded-lg p-2">✎ {i.spec.notas}</div>}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {drawerTab === "traza" && (
                <div className="anim-up">
                  <div className="relative pl-5 space-y-3 before:absolute before:left-[7px] before:top-1 before:bottom-1 before:w-px before:bg-line2">
                    {[...cur.trace].reverse().map((t, i) => (
                      <div key={i} className="relative anim-feed">
                        <span className={\`absolute -left-5 top-1 w-[15px] h-[15px] rounded-full border-[3px] border-paper \${t.user === "sistema" ? "bg-steel" : t.user === "cliente" ? "bg-oak" : "bg-pine"}\`} />
                        <div className="text-[13px] text-ink leading-snug">{t.msg}</div>
                        <div className="text-[10.5px] font-mono text-fog mt-0.5">{t.user} · {fmtDate(t.ts)} · {timeAgo(new Date(t.ts).getTime())}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {drawerTab === "cobros" && (
                <div className="space-y-3 anim-up">
                  <div className={\`rounded-xl border p-3.5 flex items-center justify-between gap-2 \${saldo > 0 ? "border-oak/40 bg-oakl/50" : "border-moss/40 bg-mossl/60"}\`}>
                    <div>
                      <div className="text-[11px] uppercase font-bold tracking-wider text-mut">Saldo pendiente (pagos validados)</div>
                      <div className="font-display font-extrabold text-[24px] text-ink num">{money(saldo)}</div>
                    </div>
                    {saldo === 0
                      ? <Badge tone="moss" dot>pagado completo</Badge>
                      : <Btn variant="oak" size="sm" icon="qr" onClick={() => {
                          const link = buildPayLink(state, saldo, \`Saldo \${cur.code} · \${cur.customer}\`, cur.customer, cur.id);
                          dispatch({ type: "CREATE_PAYLINK", link });
                          toast(\`Link PayPhone por el saldo (\${money(saldo)}) generado — cópialo en Cobros\`);
                        }}>Cobrar saldo con PayPhone</Btn>}
                  </div>

                  {cur.recibos.length > 0 && (
                    <div className="space-y-1.5">
                      {cur.recibos.map((r) => (
                        <div key={r.id} className={\`rounded-lg border px-3 py-2 text-[12.5px] \${r.validado ? "border-line" : "border-oak/40 bg-oakl/40"}\`}>
                          <div className="flex items-center justify-between gap-2">
                            <div><span className="font-mono text-mut">{r.code}</span> <span className="text-ink">{r.note}</span></div>
                            <span className="font-mono font-semibold text-[#41621f] num">+{money(r.amount)}</span>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div className="text-[10.5px] text-fog">{r.method} · {fmtDate(r.date)}</div>
                            {r.validado
                              ? <Badge tone="moss">validado</Badge>
                              : <Btn size="sm" variant="oak" icon="check" onClick={() => validar(cur, r.id)}>Validar pago</Btn>}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="rounded-lg bg-night px-3 py-2.5 flex items-start gap-2.5">
                    <Icon name="shield" size={14} className="text-oakl mt-0.5" />
                    <p className="text-[11px] text-paper/70 leading-relaxed">
                      Regla BLETIA (<span className="font-mono text-[10px]">RecibosErp.php</span>): un pago <b className="text-paper">no cuenta hasta que el dueño lo valida</b>.
                      Los cobros PayPhone se validan solos (webhook firmado); transferencias y depósitos esperan tu confirmación.
                    </p>
                  </div>

                  {saldo > 0 && (
                    <div className="rounded-lg border border-line p-3 space-y-2.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-mut">Registrar recibo / abono (quedará por validar)</div>
                      <div className="grid grid-cols-2 gap-2">
                        <Input type="number" placeholder={\`máx \${saldo.toFixed(2)}\`} value={abono.amount} onChange={(e) => setAbono({ ...abono, amount: e.target.value })} />
                        <Select value={abono.method} onChange={(e) => setAbono({ ...abono, method: e.target.value })}>
                          <option>Transferencia Bco. Pichincha</option><option>Efectivo caja</option><option>PayPhone · Visa</option><option>Cheque</option><option>Depósito</option>
                        </Select>
                      </div>
                      <Btn size="sm" icon="check" className="w-full" onClick={() => addRecibo(cur)}>Registrar recibo</Btn>
                    </div>
                  )}
                </div>
              )}

              {drawerTab === "confirm" && (
                <div className="space-y-3 anim-up">
                  {!cur.confirmToken ? (
                    <div className="text-center py-6">
                      <span className="w-12 h-12 mx-auto rounded-xl bg-oakl text-oakd grid place-items-center mb-3"><Icon name="link" size={22} /></span>
                      <div className="font-display font-bold text-[16px] text-ink">Link único de confirmación</div>
                      <p className="text-[12.5px] text-mut max-w-sm mx-auto mt-1.5">
                        El cliente abre el link, revisa las <b>specs con fotos</b> de su pedido y confirma con un clic. El link se consume al usarse y queda auditado en la traza.
                      </p>
                      <Btn className="mt-4" icon="link" onClick={() => { dispatch({ type: "SEND_CONFIRM", id: cur.id }); toast("Link único generado y enviado al cliente"); }}>Generar y enviar link único</Btn>
                    </div>
                  ) : (
                    <>
                      <div className="rounded-xl bg-night p-4">
                        <div className="text-[10px] font-mono text-paper/50 uppercase tracking-widest">Link de un solo uso</div>
                        <div className="font-mono text-[12.5px] text-oakl break-all mt-1.5">{state.settings.linkBase}/cf/{cur.confirmToken}</div>
                      </div>
                      {cur.confirmedAt ? (
                        <div className="rounded-xl border border-moss/40 bg-mossl/60 p-3.5 flex items-center gap-3 anim-pop">
                          <span className="w-9 h-9 rounded-full bg-moss text-paper grid place-items-center shrink-0"><Icon name="check" size={17} /></span>
                          <div>
                            <div className="font-semibold text-[13.5px] text-ink">Cliente confirmó specs y fotos</div>
                            <div className="text-[11.5px] text-mut">{fmtDate(cur.confirmedAt)} · link consumido · visible en la traza</div>
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-xl border border-oak/40 bg-oakl/50 p-3.5">
                          <div className="flex items-center gap-2 text-[13px] font-semibold text-oakd"><Icon name="clock" size={14} />Esperando confirmación del cliente</div>
                          <div className="flex gap-2 mt-3">
                            <Btn size="sm" variant="outline" icon="copy" onClick={async () => { await copyText(\`\${state.settings.linkBase}/cf/\${cur.confirmToken}\`); toast("Link copiado — reenvíalo por WhatsApp"); }}>Copiar link</Btn>
                            <Btn size="sm" variant="oak" icon="check" onClick={() => { dispatch({ type: "SET_CONFIRM", id: cur.id }); toast("Confirmación del cliente registrada ✓"); }}>Simular confirmación del cliente</Btn>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })()}
      </Drawer>

      {/* modal nuevo pedido (dos rutas) */}
      <Modal open={!!showNew} onClose={() => setShowNew(null)} kicker={showNew === "pedido" ? "Ruta bajo pedido · specs de personalización" : "Ruta venta · stock inmediato"} title={showNew === "pedido" ? "Nuevo pedido bajo specs" : "Nueva venta de stock"}>
        <div className="space-y-3">
          {/* Sección de búsqueda de cliente por documento (SRI/Registro Civil) */}
          <div className="rounded-xl bg-pinel/40 border border-pine/20 p-3 space-y-2.5">
            <div className="text-[11px] font-bold text-pined uppercase tracking-wider flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Icon name="idcard" size={14} /> Buscar cliente por Cédula/RUC (validación Módulo 10 + SRI)
              </div>
              <button 
                type="button"
                onClick={() => { clearCache(); toast('🗑️ Caché limpiada'); }}
                className="text-[9px] text-pine hover:text-pined underline opacity-70 hover:opacity-100"
                title="Limpiar caché de consultas"
              >
                Limpiar caché
              </button>
            </div>
            <div className="flex gap-2 items-end">
              <div className="flex-1">
                <Field label="Número de documento">
                  <div className="relative">
                    <Input 
                      value={docBusqueda} 
                      onChange={(e) => setDocBusqueda(e.target.value.replace(/[^0-9]/g, ''))} 
                      placeholder="Ingrese cédula (10 dígitos) o RUC (13 dígitos)"
                      maxLength={13}
                      disabled={docLoading || !!nf.customerId}
                      onKeyDown={(e) => e.key === 'Enter' && buscarClientePorDocumento()}
                    />
                    {docLoading && (
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <div className="w-4 h-4 border-2 border-pine border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </div>
                </Field>
              </div>
              <Btn 
                variant="dark" 
                icon="search" 
                onClick={buscarClientePorDocumento}
                disabled={!docBusqueda || docLoading}
              >
                Consultar
              </Btn>
              {nf.customerId && (
                <Btn variant="ghost" size="sm" icon="x" onClick={() => { setNf({ ...nf, customerId: '' }); setDocBusqueda(''); }} />
              )}
            </div>
            
            {docError && (
              <div className="text-[11.5px] text-brick font-medium flex items-center gap-1.5">
                <Icon name="alert" size={14} /> {docError}
              </div>
            )}
            
            {/* Formulario para completar datos del cliente nuevo */}
            {clienteManual && !nf.customerId && (
              <div className="grid sm:grid-cols-2 gap-2.5 pt-2 border-t border-pine/20 anim-up">
                <Field label="Nombre / Razón Social *">
                  <Input 
                    value={clienteManual.name || ''} 
                    onChange={(e) => setClienteManual({ ...clienteManual, name: e.target.value })}
                    placeholder="Complete el nombre"
                  />
                </Field>
                <Field label="Teléfono">
                  <Input 
                    value={clienteManual.phone || ''} 
                    onChange={(e) => setClienteManual({ ...clienteManual, phone: e.target.value })}
                    placeholder="Opcional"
                  />
                </Field>
                <Field label="Email">
                  <Input 
                    type="email"
                    value={clienteManual.email || ''} 
                    onChange={(e) => setClienteManual({ ...clienteManual, email: e.target.value })}
                    placeholder="Opcional"
                  />
                </Field>
                <Field label="Ciudad">
                  <Input 
                    value={clienteManual.city || ''} 
                    onChange={(e) => setClienteManual({ ...clienteManual, city: e.target.value })}
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Dirección">
                    <Input 
                      value={clienteManual.address || ''} 
                      onChange={(e) => setClienteManual({ ...clienteManual, address: e.target.value })}
                      placeholder="Dirección completa"
                    />
                  </Field>
                </div>
                <div className="sm:col-span-2 flex justify-end gap-2 pt-1">
                  <Btn variant="ghost" size="sm" onClick={() => setClienteManual(null)}>Cancelar</Btn>
                  <Btn variant="dark" size="sm" icon="user-plus" onClick={crearClienteYContinuar}>
                    Crear cliente y continuar
                  </Btn>
                </div>
              </div>
            )}
            
            {nf.customerId && (
              <div className="text-[11.5px] text-pine font-medium flex items-center gap-1.5">
                <Icon name="check" size={14} /> Cliente seleccionado: {state.customers.find(c => c.id === nf.customerId)?.name}
              </div>
            )}
          </div>
          
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Cliente (selección manual)">
              <Select value={nf.customerId} onChange={(e) => setNf({ ...nf, customerId: e.target.value })} disabled={!!clienteManual}>
                <option value="">— seleccionar —</option>
                {state.customers.map((c) => <option key={c.id} value={c.id}>{c.name} · {c.city}</option>)}
              </Select>
            </Field>
            <Field label="Canal">
              <Select value={nf.channel} onChange={(e) => setNf({ ...nf, channel: e.target.value as Channel })}>
                <option value="tienda">Tienda física</option><option value="whatsapp">WhatsApp</option><option value="web">Web / catálogo</option><option value="link_pago">Link de pago</option>
              </Select>
            </Field>
          </div>
          <Field label={showNew === "pedido" ? "Ítems con spec de personalización" : "Ítems de stock"}>
            <div className="space-y-3">
              {nf.items.map((it, i) => (
                <div key={i} className="rounded-xl border border-line p-3 space-y-2.5">
                  <div className="flex gap-2">
                    <Select value={it.productId} onChange={(e) => setNf({ ...nf, items: nf.items.map((x, ix) => ix === i ? { ...x, productId: e.target.value } : x) })} className="flex-1">
                      <option value="">— producto —</option>
                      {state.products.filter((p) => (showNew === "pedido" ? p.line === "fabricacion" : true)).map((p) => (
                        <option key={p.id} value={p.id}>{p.sku} · {p.name} · {money(p.price)}{showNew === "venta" ? \` (stock \${p.stock.showroom + p.stock.bodega})\` : ""}</option>
                      ))}
                    </Select>
                    <Input type="number" min={1} value={it.qty} onChange={(e) => setNf({ ...nf, items: nf.items.map((x, ix) => ix === i ? { ...x, qty: e.target.value } : x) })} className="w-20" />
                    <Btn variant="ghost" size="sm" icon="x" disabled={nf.items.length === 1} onClick={() => setNf({ ...nf, items: nf.items.filter((_, ix) => ix !== i) })} />
                  </div>
                  {showNew === "pedido" && (
                    <div className="rounded-lg bg-oakl/40 border border-oak/25 p-2.5 space-y-2 anim-up">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-oakd/70 flex items-center gap-1.5">
                        <Icon name="image" size={11} /> Foto de referencia en cada campo (viaja en el link único)
                      </div>
                      {SPEC_FIELDS.map(({ campo, label, placeholder }) => (
                        <SpecRow key={campo} spec={it.spec} campo={campo} label={label} placeholder={placeholder}
                          onChange={(s) => setNf({ ...nf, items: nf.items.map((x, ix) => (ix === i ? { ...x, spec: s } : x)) })} />
                      ))}
                      <Input placeholder="Notas del cliente (medidas especiales, esquinas…)" value={it.spec.notas} onChange={(e) => setNf({ ...nf, items: nf.items.map((x, ix) => ix === i ? { ...x, spec: { ...x.spec, notas: e.target.value } } : x) })} />
                    </div>
                  )}
                </div>
              ))}
              <Btn size="sm" variant="outline" icon="plus" onClick={() => setNf({ ...nf, items: [...nf.items, { productId: "", qty: "1", spec: emptySpec() }] })}>Agregar ítem</Btn>
            </div>
          </Field>
          <div className="rounded-lg bg-pinel/60 border border-pine/20 px-3.5 py-2.5 flex items-center justify-between">
            <div className="text-[12px] text-pined">{showNew === "pedido" ? "Bajo specs: no descuenta stock, entra a fabricación" : "Venta de stock: descuenta showroom al crear"} · IVA 15%</div>
            <div className="font-display font-extrabold text-[18px] text-pined num">{money(preview.total)}</div>
          </div>
          <div className="flex justify-end gap-2">
            <Btn variant="ghost" onClick={() => setShowNew(null)}>Cancelar</Btn>
            <Btn icon="check" onClick={createOrder}>{showNew === "pedido" ? "Crear pedido bajo specs" : "Crear venta de stock"}</Btn>
          </div>
        </div>
      </Modal>

      {/* modal movimiento */}
      <Modal open={mvOpen} onClose={() => setMvOpen(false)} kicker="Kardex" title="Registrar movimiento">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Field label="Tipo">
              <Select value={mv.type} onChange={(e) => setMv({ ...mv, type: e.target.value as Movement["type"] })}>
                <option value="ingreso">Ingreso</option><option value="egreso">Egreso</option><option value="transferencia">Transferencia</option><option value="ajuste">Ajuste (+)</option>
              </Select>
            </Field>
            <Field label="Bodega">
              <Select value={mv.warehouse} onChange={(e) => setMv({ ...mv, warehouse: e.target.value as Warehouse })}>
                {(["showroom", "bodega", "taller"] as Warehouse[]).map((w) => <option key={w} value={w}>{WH_LABEL[w]}</option>)}
              </Select>
            </Field>
          </div>
          <Field label="Producto">
            <Select value={mv.productId} onChange={(e) => setMv({ ...mv, productId: e.target.value })}>
              <option value="">—</option>
              {state.products.map((p) => <option key={p.id} value={p.id}>{p.sku} · {p.name}</option>)}
            </Select>
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Cantidad"><Input type="number" min={1} value={mv.qty} onChange={(e) => setMv({ ...mv, qty: e.target.value })} /></Field>
            <Field label="Referencia"><Input placeholder="OC / pedido / ajuste" value={mv.ref} onChange={(e) => setMv({ ...mv, ref: e.target.value })} /></Field>
          </div>
          <div className="flex justify-end gap-2"><Btn variant="ghost" onClick={() => setMvOpen(false)}>Cancelar</Btn><Btn icon="check" onClick={saveMv}>Registrar</Btn></div>
        </div>
      </Modal>

      {/* modal anulación */}
      <Modal open={!!anula && !!cur} onClose={() => setAnula(null)} kicker={anula === "anulado" ? "Requiere nota de crédito" : "Cancelación comercial"} title={anula === "anulado" ? "Anular pedido" : "Cancelar pedido"}>
        {cur && (
          <div className="space-y-3">
            <div className="text-[13px] text-mut">
              Vas a <b className="text-ink">{anula === "anulado" ? "ANULAR" : "cancelar"}</b> <b className="font-mono">{cur.code}</b> de {cur.customer} por {money(cur.total)}. Quedará registrado en la traza con folio de anulación.
            </div>
            <Field label="Motivo"><Input value={motivo} onChange={(e) => setMotivo(e.target.value)} placeholder="Ej: cliente desistió / error de precio" /></Field>
            <div className="flex justify-end gap-2">
              <Btn variant="ghost" onClick={() => setAnula(null)}>Volver</Btn>
              <Btn icon="x" onClick={() => {
                if (!motivo.trim()) return toast("Escribe el motivo", "warn");
                dispatch({ type: "ANULA_ORDER", id: cur.id, status: anula, motivo: motivo.trim() });
                toast(\`\${cur.code} \${anula}\`, "warn");
                setAnula(null);
              }}>Confirmar {anula === "anulado" ? "anulación" : "cancelación"}</Btn>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
`,tt=`import { useState } from "react";
import { useStore } from "../lib/store";
import type { Customer, Supplier } from "../lib/types";
import { fmtDate, initials, money, uid } from "../lib/util";
import { Badge, Btn, Card, Drawer, Field, Icon, Input, SectionTitle, Select, Tabs, Td, Th } from "../components/ui";

const SEG_TONE: Record<Customer["segment"], "pine" | "oak" | "steel" | "moss"> = {
  hogar: "pine", corporativo: "steel", distribuidor: "oak", arquitectura: "moss",
};
const KIND_META: Record<Supplier["kind"], { label: string; tone: "pine" | "oak" | "steel" }> = {
  insumos: { label: "Insumos / MP", tone: "pine" },
  muebles: { label: "Muebles", tone: "oak" },
  transporte: { label: "Transporte", tone: "steel" },
};

export default function Terceros() {
  const { state, dispatch, toast } = useStore();
  const [tab, setTab] = useState<"clientes" | "proveedores">("clientes");
  const [openC, setOpenC] = useState<Customer | null>(null);
  const [showSup, setShowSup] = useState(false);
  const [ns, setNs] = useState({ name: "", kind: "insumos" as Supplier["kind"], contact: "", city: "Quito", leadDays: "7", items: "" });

  const addSupplier = () => {
    if (!ns.name.trim()) return toast("Nombre del proveedor obligatorio", "warn");
    const sup: Supplier = {
      id: uid(), name: ns.name.trim(), kind: ns.kind, contact: ns.contact || "—",
      phone: "—", email: "—", city: ns.city, rating: 4.0, leadDays: Number(ns.leadDays) || 7,
      balance: 0, items: ns.items || "Por catalogar", active: true,
    };
    dispatch({ type: "ADD_SUPPLIER", supplier: sup });
    setShowSup(false);
    setNs({ name: "", kind: "insumos", contact: "", city: "Quito", leadDays: "7", items: "" });
    toast(\`\${sup.name} agregado al SRM\`);
  };

  const cxp = state.suppliers.reduce((a, s) => a + s.balance, 0);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">CRM + SRM · relaciones del negocio</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Clientes & proveedores</h1>
        </div>
        <Btn icon="plus" onClick={() => setShowSup(true)}>Nuevo proveedor</Btn>
      </div>

      <Tabs
        tabs={[{ id: "clientes", label: \`Clientes (\${state.customers.length})\` }, { id: "proveedores", label: \`Proveedores (\${state.suppliers.length})\` }]}
        value={tab} onChange={(t) => setTab(t as typeof tab)}
      />

      {tab === "clientes" && (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3 stagger">
          {state.customers.map((c) => (
            <button key={c.id} onClick={() => setOpenC(c)} className="bg-card border border-line rounded-xl p-4 text-left hover:shadow-md hover:-translate-y-px hover:border-pine/40 transition-all">
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-xl bg-pined text-oakl grid place-items-center font-display font-bold text-[13px] shrink-0">{initials(c.name)}</span>
                <div className="min-w-0">
                  <div className="font-semibold text-[13.5px] text-ink leading-tight truncate">{c.name}</div>
                  <div className="font-mono text-[10.5px] text-fog">{c.code} · {c.type === "juridica" ? "RUC" : "ced."} {c.doc}</div>
                </div>
                <Badge tone={SEG_TONE[c.segment]} className="ml-auto shrink-0">{c.segment}</Badge>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                <div className="rounded-lg bg-ink/4 py-1.5"><div className="font-mono font-bold text-[13px] text-ink num">{c.orders}</div><div className="text-[8.5px] uppercase tracking-wider text-fog font-bold">pedidos</div></div>
                <div className="rounded-lg bg-ink/4 py-1.5"><div className="font-mono font-bold text-[13px] text-ink num">{money(c.total, false)}</div><div className="text-[8.5px] uppercase tracking-wider text-fog font-bold">comprado</div></div>
                <div className={\`rounded-lg py-1.5 \${c.credit > 0 ? "bg-oakl/70" : "bg-ink/4"}\`}><div className={\`font-mono font-bold text-[13px] num \${c.credit > 0 ? "text-oakd" : "text-ink"}\`}>{money(c.credit, false)}</div><div className="text-[8.5px] uppercase tracking-wider text-fog font-bold">crédito</div></div>
              </div>
              <div className="flex items-center gap-1.5 mt-2.5 text-[11px] text-mut"><Icon name="pin" size={11} className="text-fog" />{c.city} · cliente desde {fmtDate(c.since)}</div>
            </button>
          ))}
        </div>
      )}

      {tab === "proveedores" && (
        <>
          <div className="flex items-center gap-3 anim-up">
            <div className="rounded-xl bg-card border border-line px-4 py-2.5 flex items-center gap-2.5">
              <Icon name="clock" size={15} className="text-oakd" />
              <span className="text-[12.5px] text-mut">Cuentas por pagar a proveedores: <b className="font-mono text-ink num">{money(cxp)}</b></span>
            </div>
          </div>
          <Card pad={false} className="anim-up">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] min-w-[820px]">
                <thead className="bg-ink/3 border-b border-line">
                  <tr><Th>Proveedor</Th><Th>Tipo</Th><Th>Contacto</Th><Th right>Rating</Th><Th right>Lead</Th><Th right>CxP</Th><Th>Catálogo</Th></tr>
                </thead>
                <tbody>
                  {state.suppliers.map((s) => (
                    <tr key={s.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                      <Td>
                        <div className="font-semibold text-ink">{s.name}</div>
                        <div className="text-[11px] text-mut">{s.city} · {s.phone}</div>
                      </Td>
                      <Td><Badge tone={KIND_META[s.kind].tone}>{KIND_META[s.kind].label}</Badge></Td>
                      <Td><div className="text-ink">{s.contact}</div><div className="text-[10.5px] font-mono text-fog">{s.email}</div></Td>
                      <Td right><span className="font-bold text-oakd num">★ {s.rating}</span></Td>
                      <Td right className="font-mono text-mut num">{s.leadDays} d</Td>
                      <Td right><span className={\`font-mono num \${s.balance > 0 ? "text-oakd font-semibold" : "text-[#41621f]"}\`}>{s.balance > 0 ? money(s.balance) : "al día"}</span></Td>
                      <Td className="text-mut text-[12px]">{s.items}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}

      {/* ficha cliente */}
      <Drawer open={!!openC} onClose={() => setOpenC(null)} kicker={\`CRM · \${openC?.code ?? ""}\`} title={openC?.name ?? ""}>
        {openC && (() => {
          const hist = state.orders.filter((o) => o.customerId === openC.id);
          return (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-xl bg-pined text-oakl grid place-items-center font-display font-bold text-[15px]">{initials(openC.name)}</span>
                <div>
                  <Badge tone={SEG_TONE[openC.segment]}>{openC.segment}</Badge>
                  <div className="font-mono text-[11px] text-fog mt-1">{openC.type === "juridica" ? "RUC" : "Cédula"} {openC.doc} · {openC.city}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[12.5px]">
                <div className="rounded-lg border border-line p-2.5 flex items-center gap-2"><Icon name="phone" size={13} className="text-pine" />{openC.phone}</div>
                <div className="rounded-lg border border-line p-2.5 flex items-center gap-2 truncate"><Icon name="mail" size={13} className="text-pine" />{openC.email}</div>
              </div>
              <div className="rounded-lg bg-oakl/60 border border-oak/25 p-3 text-[12px] text-oakd leading-relaxed">✎ {openC.notes}</div>
              <div>
                <SectionTitle kicker="OMS" title={\`Historial (\${hist.length} pedidos)\`} />
                <div className="space-y-1.5">
                  {hist.map((o) => (
                    <div key={o.id} className="flex items-center justify-between rounded-lg border border-line px-3 py-2 text-[12.5px]">
                      <span className="font-mono text-mut">{o.code}</span>
                      <span className="text-ink">{fmtDate(o.createdAt)}</span>
                      <Badge tone={o.status === "entregado" ? "moss" : o.status === "anulado" || o.status === "cancelado" ? "brick" : "steel"}>{o.status.replace("_", " ")}</Badge>
                      <span className="font-mono num text-ink">{money(o.total)}</span>
                    </div>
                  ))}
                  {hist.length === 0 && <div className="text-[12px] text-mut">Sin pedidos registrados.</div>}
                </div>
              </div>
            </div>
          );
        })()}
      </Drawer>

      {/* nuevo proveedor */}
      <Drawer open={showSup} onClose={() => setShowSup(false)} kicker="SRM · alta" title="Nuevo proveedor">
        <div className="space-y-3">
          <Field label="Razón social"><Input value={ns.name} onChange={(e) => setNs({ ...ns, name: e.target.value })} placeholder="Ej: Herrajes y Corredizas Cuenca" /></Field>
          <Field label="Tipo">
            <Select value={ns.kind} onChange={(e) => setNs({ ...ns, kind: e.target.value as Supplier["kind"] })}>
              <option value="insumos">Insumos / materia prima</option>
              <option value="muebles">Muebles (producto terminado)</option>
              <option value="transporte">Transporte / fletes</option>
            </Select>
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Contacto"><Input value={ns.contact} onChange={(e) => setNs({ ...ns, contact: e.target.value })} /></Field>
            <Field label="Ciudad"><Input value={ns.city} onChange={(e) => setNs({ ...ns, city: e.target.value })} /></Field>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Lead time (días)"><Input type="number" value={ns.leadDays} onChange={(e) => setNs({ ...ns, leadDays: e.target.value })} /></Field>
          </div>
          <Field label="Qué provee"><Input value={ns.items} onChange={(e) => setNs({ ...ns, items: e.target.value })} placeholder="Ej: bisagras, correderas, tornillería" /></Field>
          <Btn icon="check" className="w-full" onClick={addSupplier}>Guardar proveedor</Btn>
        </div>
      </Drawer>
    </div>
  );
}
`,nt=`import { useState } from "react";
import { useStore, woFlow } from "../lib/store";
import type { WorkOrder, WoStatus } from "../lib/types";
import { fmtDate, money, uid } from "../lib/util";
import { Badge, Btn, Card, Field, Icon, Input, Modal, Progress, SectionTitle, Select } from "../components/ui";

const woTone: Record<string, "fog" | "oak" | "pine" | "steel" | "moss"> = {
  planificada: "fog", corte: "oak", ensamblaje: "pine", acabado: "steel", qa: "oak", terminada: "moss",
};

export default function Taller() {
  const { state, dispatch, toast } = useStore();
  const [show, setShow] = useState(false);
  const [nw, setNw] = useState({ productId: "", qty: "1", assignedTo: "Diego Guamán", due: "", mats: [{ name: "", qty: "", cost: "" }], labor: "150" });

  const advance = (w: WorkOrder) => {
    const next = woFlow[woFlow.indexOf(w.status) + 1];
    if (!next) return;
    dispatch({ type: "ADVANCE_WO", id: w.id, status: next });
    toast(next === "terminada" ? \`\${w.code} terminada · stock enviado a bodega\` : \`\${w.code} → \${next.toUpperCase()}\`);
  };

  const submit = () => {
    const p = state.products.find((x) => x.id === nw.productId);
    if (!p) return toast("Selecciona el producto a fabricar", "warn");
    const wo: WorkOrder = {
      id: uid(),
      code: \`OF-\${2105 + state.workOrders.length}\`,
      productId: p.id, productName: p.name, qty: Number(nw.qty) || 1,
      status: "planificada",
      start: new Date().toISOString(),
      due: nw.due ? new Date(nw.due).toISOString() : new Date(Date.now() + 14 * 864e5).toISOString(),
      assignedTo: nw.assignedTo, progress: 5, orderId: null,
      materials: nw.mats.filter((m) => m.name).map((m) => ({ name: m.name, qty: m.qty || "1", cost: Number(m.cost) || 0 })),
      laborCost: Number(nw.labor) || 0,
    };
    dispatch({ type: "CREATE_WO", wo });
    setShow(false);
    setNw({ productId: "", qty: "1", assignedTo: "Diego Guamán", due: "", mats: [{ name: "", qty: "", cost: "" }], labor: "150" });
    toast(\`Orden \${wo.code} enviada al piso de taller\`);
  };

  const inProgress = state.workOrders.filter((w) => w.status !== "terminada");
  const done = state.workOrders.filter((w) => w.status === "terminada");
  const totalMatCost = (w: WorkOrder) => w.materials.reduce((a, m) => a + m.cost, 0);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">MES · fabricación propia (en_producción del flujo BLETIA)</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Piso de taller</h1>
          <p className="text-[13px] text-mut mt-1">{inProgress.length} órdenes activas · {done.length} terminadas este periodo</p>
        </div>
        <Btn icon="plus" onClick={() => setShow(true)}>Orden de fabricación</Btn>
      </div>

      <div className="grid md:grid-cols-2 gap-4 stagger">
        {inProgress.map((w) => {
          const next = woFlow[woFlow.indexOf(w.status) + 1];
          const stepIdx = woFlow.indexOf(w.status);
          const linkedOrder = state.orders.find((o) => o.id === w.orderId);
          return (
            <Card key={w.id} className="hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-mono text-[11px] text-fog">{w.code} · {w.assignedTo}</div>
                  <div className="font-display font-bold text-[16px] text-ink leading-tight mt-0.5">{w.qty}× {w.productName}</div>
                  {linkedOrder && <div className="text-[11px] text-steel font-semibold mt-0.5">↳ para {linkedOrder.code} · {linkedOrder.customer}</div>}
                </div>
                <Badge tone={woTone[w.status] ?? "oak"} dot>{w.status}</Badge>
              </div>

              <div className="flex items-center gap-1 mt-3.5">
                {woFlow.map((s, i) => (
                  <div key={s} className="flex-1">
                    <div className={\`h-1.5 rounded-full transition-colors duration-300 \${i <= stepIdx ? (s === "terminada" ? "bg-moss" : "bg-pine") : "bg-ink/10"}\`} />
                    <div className={\`text-[8.5px] font-mono uppercase tracking-wide mt-1 text-center hidden sm:block \${i <= stepIdx ? "text-pine" : "text-fog"}\`}>{s}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-3">
                <Progress value={w.progress} tone={w.progress > 80 ? "moss" : "pine"} />
                <span className="font-mono text-[12px] text-ink num w-10 text-right">{w.progress}%</span>
              </div>

              <div className="mt-3.5 rounded-lg border border-line overflow-hidden">
                <div className="px-3 py-1.5 bg-ink/3 text-[10px] font-bold uppercase tracking-[0.14em] text-mut flex items-center gap-1.5"><Icon name="saw" size={11} />Lista de materiales</div>
                {w.materials.map((m, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-1.5 text-[12px] border-t border-line/70">
                    <span className="text-ink">{m.name}</span>
                    <span className="text-mut font-mono text-[11px]">{m.qty} · {money(m.cost)}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between px-3 py-1.5 text-[12px] border-t border-line bg-oakl/40">
                  <span className="text-oakd font-semibold">Mano de obra</span>
                  <span className="font-mono text-oakd">{money(w.laborCost)}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3.5">
                <div className="text-[11.5px] text-mut">
                  entrega <b className="text-ink">{fmtDate(w.due)}</b> · costo est. <b className="font-mono text-ink">{money(totalMatCost(w) + w.laborCost)}</b>
                </div>
                {next && <Btn size="sm" variant={next === "terminada" ? "primary" : "outline"} icon={next === "terminada" ? "check" : "arrow"} onClick={() => advance(w)}>{next === "terminada" ? "Cerrar orden" : \`→ \${next}\`}</Btn>}
              </div>
            </Card>
          );
        })}
      </div>

      {done.length > 0 && (
        <Card className="anim-up">
          <SectionTitle kicker="Historial" title="Órdenes terminadas" />
          <div className="space-y-1.5">
            {done.map((w) => (
              <div key={w.id} className="flex items-center gap-3 rounded-lg border border-line px-3 py-2 text-[12.5px]">
                <span className="w-7 h-7 rounded-lg bg-mossl text-[#41621f] grid place-items-center"><Icon name="check" size={13} /></span>
                <span className="font-mono text-mut">{w.code}</span>
                <span className="text-ink font-semibold">{w.qty}× {w.productName}</span>
                <Badge tone="moss">+{w.qty} a bodega</Badge>
                <span className="ml-auto text-mut">cerrada {fmtDate(w.due)}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Modal open={show} onClose={() => setShow(false)} kicker="MES · planificación" title="Nueva orden de fabricación" wide>
        <div className="space-y-3">
          <div className="grid sm:grid-cols-3 gap-3">
            <Field label="Producto">
              <Select value={nw.productId} onChange={(e) => setNw({ ...nw, productId: e.target.value })}>
                <option value="">— seleccionar —</option>
                {state.products.filter((p) => p.line === "fabricacion").map((p) => <option key={p.id} value={p.id}>{p.sku} · {p.name}</option>)}
              </Select>
            </Field>
            <Field label="Cantidad"><Input type="number" min={1} value={nw.qty} onChange={(e) => setNw({ ...nw, qty: e.target.value })} /></Field>
            <Field label="Fecha entrega"><Input type="date" value={nw.due} onChange={(e) => setNw({ ...nw, due: e.target.value })} /></Field>
          </div>
          <Field label="Maestro asignado">
            <Select value={nw.assignedTo} onChange={(e) => setNw({ ...nw, assignedTo: e.target.value })}>
              {["Diego Guamán", "Segundo M.", "Fausto T."].map((m) => <option key={m}>{m}</option>)}
            </Select>
          </Field>
          <Field label="Materiales">
            <div className="space-y-2">
              {nw.mats.map((m, i) => (
                <div key={i} className="flex gap-2">
                  <Input placeholder="Material (ej: triplex 18mm)" value={m.name} onChange={(e) => setNw({ ...nw, mats: nw.mats.map((x, ix) => ix === i ? { ...x, name: e.target.value } : x) })} className="flex-1" />
                  <Input placeholder="cant." value={m.qty} onChange={(e) => setNw({ ...nw, mats: nw.mats.map((x, ix) => ix === i ? { ...x, qty: e.target.value } : x) })} className="w-20" />
                  <Input placeholder="$" type="number" value={m.cost} onChange={(e) => setNw({ ...nw, mats: nw.mats.map((x, ix) => ix === i ? { ...x, cost: e.target.value } : x) })} className="w-24" />
                  <Btn variant="ghost" size="sm" icon="x" onClick={() => setNw({ ...nw, mats: nw.mats.filter((_, ix) => ix !== i) })} disabled={nw.mats.length === 1} />
                </div>
              ))}
              <Btn size="sm" variant="outline" icon="plus" onClick={() => setNw({ ...nw, mats: [...nw.mats, { name: "", qty: "", cost: "" }] })}>Agregar material</Btn>
            </div>
          </Field>
          <Field label="Mano de obra estimada (USD)"><Input type="number" value={nw.labor} onChange={(e) => setNw({ ...nw, labor: e.target.value })} className="w-40" /></Field>
          <div className="flex justify-end gap-2"><Btn variant="ghost" onClick={() => setShow(false)}>Cancelar</Btn><Btn icon="check" onClick={submit}>Planificar orden</Btn></div>
        </div>
      </Modal>
    </div>
  );
}
`,at=`import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import { money, uid } from "../lib/util";
import { Badge, Btn, Card, Field, Icon, Input, Modal, Progress, SectionTitle, Select, Stat, Tabs, Td, Th } from "../components/ui";

export default function Materiales() {
  const { state, dispatch, toast } = useStore();
  const [tab, setTab] = useState<"inventario" | "bom" | "mrp">("inventario");
  const [selBom, setSelBom] = useState(state.boms[0]?.productId ?? "");
  const [mov, setMov] = useState<{ id: string; dir: 1 | -1 } | null>(null);
  const [mvQty, setMvQty] = useState("1");
  const [mvRef, setMvRef] = useState("");

  const matById = (id: string) => state.materials.find((m) => m.id === id);
  const stockValue = state.materials.reduce((a, m) => a + m.stock * m.costUnit, 0);
  const bajos = state.materials.filter((m) => m.stock <= m.min);

  const bom = state.boms.find((b) => b.productId === selBom);
  const producto = state.products.find((p) => p.id === selBom);
  const bomCost = useMemo(() => {
    if (!bom) return 0;
    const mat = bom.lines.reduce((a, l) => a + l.qty * (matById(l.materialId)?.costUnit ?? 0), 0);
    return mat + (bom.laborMin / 60) * 4.2;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bom, state.materials]);

  const mrp = useMemo(() => {
    const demand: Record<string, { name: string; unit: string; need: number; from: string[] }> = {};
    state.workOrders.filter((w) => w.status !== "terminada").forEach((w) => {
      const b = state.boms.find((x) => x.productId === w.productId);
      if (!b) return;
      b.lines.forEach((l) => {
        demand[l.materialId] = demand[l.materialId] ?? { name: matById(l.materialId)?.name ?? l.materialId, unit: l.unit, need: 0, from: [] };
        demand[l.materialId].need += l.qty * w.qty;
        if (!demand[l.materialId].from.includes(w.code)) demand[l.materialId].from.push(w.code);
      });
    });
    return Object.entries(demand).map(([id, d]) => {
      const m = matById(id);
      const stock = m?.stock ?? 0;
      return { id, ...d, stock, falta: Math.max(0, Math.round((d.need - stock) * 100) / 100), cost: m?.costUnit ?? 0 };
    }).sort((a, b) => b.falta - a.falta);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.workOrders, state.materials, state.boms]);

  const faltantes = mrp.filter((r) => r.falta > 0);
  const faltanteValor = faltantes.reduce((a, r) => a + r.falta * r.cost, 0);

  const saveMov = () => {
    if (!mov || !Number(mvQty)) return toast("Cantidad inválida", "warn");
    dispatch({ type: "MATERIAL_MOV", id: mov.id, delta: mov.dir * Number(mvQty), ref: mvRef || (mov.dir === 1 ? "Compra proveedor" : "Consumo de taller") });
    setMov(null); setMvQty("1"); setMvRef("");
    toast("Movimiento de materia prima registrado");
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Materiales.php · BOM por producto · MRP</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Materia prima & listas de materiales</h1>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-mut">
          <span className="font-mono">{state.materials.length} MP</span> · <span className="font-mono">{money(stockValue, false)} en bodega</span> · <span className="font-mono">{state.boms.length} BOMs</span>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 stagger">
        <Stat label="Valor MP en bodega" value={money(stockValue)} icon="layers" tone="pine" sub="costo promedio × stock" />
        <Stat label="Bajo mínimo" value={String(bajos.length)} icon="alert" tone="oak" sub={bajos.map((b) => b.name.split(" ")[0]).slice(0, 3).join(", ") || "ninguna"} />
        <Stat label="Órdenes demandando" value={String(state.workOrders.filter((w) => w.status !== "terminada").length)} icon="saw" tone="steel" sub="órdenes de taller activas" />
        <Stat label="Faltante MRP" value={money(faltanteValor)} icon="box" tone={faltanteValor > 0 ? "brick" : "moss"} sub={faltantes.length ? \`\${faltantes.length} materiales a comprar\` : "cobertura completa"} />
      </div>

      <Tabs
        tabs={[{ id: "inventario", label: "Inventario MP" }, { id: "bom", label: "BOM por producto" }, { id: "mrp", label: "Requerimientos (MRP)" }]}
        value={tab} onChange={(t) => setTab(t as typeof tab)}
      />

      {tab === "inventario" && (
        <Card pad={false} className="anim-up">
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] min-w-[820px]">
              <thead className="bg-ink/3 border-b border-line">
                <tr><Th>Código</Th><Th>Material</Th><Th right>Stock</Th><Th right>Mín.</Th><Th>Cobertura</Th><Th right>Costo und</Th><Th right>Valor</Th><Th>Proveedor</Th><Th right>Mover</Th></tr>
              </thead>
              <tbody>
                {state.materials.map((m) => {
                  const low = m.stock <= m.min;
                  const sup = state.suppliers.find((s) => s.id === m.supplierId);
                  return (
                    <tr key={m.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                      <Td className="font-mono text-[11.5px] text-mut">{m.code}</Td>
                      <Td className="font-semibold text-ink">{m.name}<span className="text-fog font-normal text-[11px]"> · {m.unit}</span></Td>
                      <Td right className="num font-mono font-semibold text-ink">{m.stock}</Td>
                      <Td right className="num font-mono text-mut">{m.min}</Td>
                      <Td><div className="w-24"><Progress value={(m.stock / Math.max(1, m.min * 2)) * 100} tone={low ? "brick" : "pine"} /></div></Td>
                      <Td right className="num font-mono text-mut">{money(m.costUnit)}</Td>
                      <Td right className="num font-mono text-ink">{money(m.stock * m.costUnit)}</Td>
                      <Td className="text-mut text-[12px]">{sup?.name ?? "—"}</Td>
                      <Td right>
                        <div className="flex justify-end gap-1">
                          <Btn size="sm" variant="outline" onClick={() => { setMov({ id: m.id, dir: 1 }); setMvQty("1"); setMvRef(""); }}>+</Btn>
                          <Btn size="sm" variant="ghost" onClick={() => { setMov({ id: m.id, dir: -1 }); setMvQty("1"); setMvRef(""); }}>−</Btn>
                        </div>
                      </Td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {tab === "bom" && (
        <div className="grid lg:grid-cols-3 gap-4 anim-up">
          <Card className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <SectionTitle kicker="Lista de materiales" title="BOM unitario" />
              <Select value={selBom} onChange={(e) => setSelBom(e.target.value)} className="ml-auto w-auto min-w-[240px]">
                {state.boms.map((b) => {
                  const p = state.products.find((x) => x.id === b.productId);
                  return <option key={b.productId} value={b.productId}>{p?.sku} · {p?.name}</option>;
                })}
              </Select>
            </div>
            {bom && (
              <div className="rounded-lg border border-line overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead className="bg-ink/3 border-b border-line">
                    <tr><Th>Material</Th><Th right>Por unidad</Th><Th right>Costo</Th><Th right>Subtotal</Th></tr>
                  </thead>
                  <tbody>
                    {bom.lines.map((l, i) => {
                      const m = matById(l.materialId);
                      return (
                        <tr key={i} className="border-b border-line/70 last:border-0">
                          <Td className="font-semibold text-ink">{m?.name}<span className="text-fog text-[11px] font-normal"> · {m?.code}</span></Td>
                          <Td right className="num font-mono text-mut">{l.qty} {l.unit}</Td>
                          <Td right className="num font-mono text-mut">{money(m?.costUnit ?? 0)}</Td>
                          <Td right className="num font-mono text-ink font-semibold">{money(l.qty * (m?.costUnit ?? 0))}</Td>
                        </tr>
                      );
                    })}
                    <tr className="bg-oakl/40">
                      <Td className="font-bold text-oakd">Mano de obra ({bom.laborMin} min)</Td><Td /><Td />
                      <Td right className="num font-mono font-bold text-oakd">{money((bom.laborMin / 60) * 4.2)}</Td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </Card>
          <div className="space-y-4">
            <Card>
              <SectionTitle kicker="Costeo" title="Roll-up del BOM" />
              {bom && producto && (
                <div className="space-y-2 text-[12.5px]">
                  <div className="flex justify-between"><span className="text-mut">Costo calculado</span><span className="font-mono font-bold text-ink num">{money(bomCost)}</span></div>
                  <div className="flex justify-between"><span className="text-mut">Costo en ficha PIM</span><span className="font-mono text-ink num">{money(producto.cost)}</span></div>
                  <div className="flex justify-between"><span className="text-mut">Desviación</span>
                    <Badge tone={Math.abs(bomCost - producto.cost) / producto.cost < 0.12 ? "moss" : "oak"}>
                      {Math.round((Math.abs(bomCost - producto.cost) / producto.cost) * 100)}%
                    </Badge>
                  </div>
                  <div className="rounded-lg bg-pinel/60 border border-pine/20 p-2.5 flex justify-between items-center">
                    <span className="text-pined text-[12px]">Margen real vs PVP</span>
                    <span className="font-display font-extrabold text-pine num">{Math.round(((producto.price - bomCost) / producto.price) * 100)}%</span>
                  </div>
                </div>
              )}
            </Card>
            <Card>
              <SectionTitle kicker="Taller" title="Órdenes consumiendo este BOM" />
              <div className="space-y-1.5">
                {state.workOrders.filter((w) => w.productId === selBom && w.status !== "terminada").map((w) => (
                  <div key={w.id} className="flex items-center justify-between rounded-lg border border-line px-3 py-2 text-[12.5px]">
                    <span className="font-mono text-mut">{w.code}</span>
                    <span className="text-ink font-semibold">{w.qty}× en {w.status}</span>
                    <span className="font-mono text-oakd num">×{w.qty} BOM</span>
                  </div>
                ))}
                {state.workOrders.filter((w) => w.productId === selBom && w.status !== "terminada").length === 0 && (
                  <div className="text-[12px] text-mut">Sin órdenes activas para este producto.</div>
                )}
              </div>
            </Card>
          </div>
        </div>
      )}

      {tab === "mrp" && (
        <div className="space-y-4 anim-up">
          <Card pad={false}>
            <div className="flex flex-wrap items-center gap-2 p-3 border-b border-line">
              <SectionTitle kicker="MRP · requerimiento de materiales" title="Demanda del taller vs stock" />
              {faltantes.length > 0 && (
                <Btn size="sm" variant="oak" icon="zap" className="ml-auto" onClick={() => {
                  dispatch({ type: "EVENTS", events: [{ id: uid(), ts: Date.now(), type: "logistica" as const, msg: \`Sugerencia de compra generada · \${faltantes.length} MP por \${money(faltanteValor)}\` }] });
                  toast(\`Sugerencia de compra enviada a \${new Set(faltantes.map((f) => matById(f.id)?.supplierId)).size} proveedores\`);
                }}>Generar sugerencia de compra</Btn>
              )}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] min-w-[760px]">
                <thead className="bg-ink/3 border-b border-line">
                  <tr><Th>Material</Th><Th right>Necesario</Th><Th right>Stock</Th><Th right>Faltante</Th><Th right>Costo compra</Th><Th>Órdenes que lo demandan</Th><Th>Estado</Th></tr>
                </thead>
                <tbody>
                  {mrp.map((r) => (
                    <tr key={r.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                      <Td className="font-semibold text-ink">{r.name}</Td>
                      <Td right className="num font-mono text-ink">{r.need} {r.unit}</Td>
                      <Td right className="num font-mono text-mut">{r.stock} {r.unit}</Td>
                      <Td right className="num font-mono font-bold">{r.falta > 0 ? <span className="text-brick">−{r.falta}</span> : <span className="text-[#41621f]">0</span>}</Td>
                      <Td right className="num font-mono text-mut">{r.falta > 0 ? money(r.falta * r.cost) : "—"}</Td>
                      <Td><div className="flex gap-1 flex-wrap">{r.from.map((c) => <span key={c} className="font-mono text-[10.5px] bg-ink/5 px-1.5 py-0.5 rounded">{c}</span>)}</div></Td>
                      <Td><Badge tone={r.falta > 0 ? "brick" : "moss"} dot>{r.falta > 0 ? "comprar" : "cubierto"}</Badge></Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-lg bg-oakl text-oakd grid place-items-center shrink-0"><Icon name="zap" size={16} /></span>
              <div className="text-[12.5px] text-mut leading-relaxed">
                <b className="text-ink">Regla del taller:</b> el MRP multiplica cada BOM por la cantidad de sus órdenes activas. Si la
                <b className="text-oakd"> base giratoria metálica</b> está en rojo, el pedido de poltronas no puede pasar de CORTE — el sistema bloquea y sugiere la OC al proveedor importador.
              </div>
            </div>
          </Card>
        </div>
      )}

      <Modal open={!!mov} onClose={() => setMov(null)} kicker="Materia prima" title={mov?.dir === 1 ? "Entrada de material" : "Consumo de material"}>
        {mov && (() => {
          const m = matById(mov.id);
          return (
            <div className="space-y-3">
              <div className="text-[13px] text-mut"><b className="text-ink">{m?.name}</b> · stock actual <b className="font-mono">{m?.stock} {m?.unit}</b></div>
              <div className="grid grid-cols-2 gap-3">
                <Field label={\`Cantidad (\${m?.unit})\`}><Input type="number" min={0.1} step="0.1" value={mvQty} onChange={(e) => setMvQty(e.target.value)} /></Field>
                <Field label="Referencia"><Input placeholder={mov.dir === 1 ? "OC-2215 / proveedor" : "OF-2103"} value={mvRef} onChange={(e) => setMvRef(e.target.value)} /></Field>
              </div>
              <div className="flex justify-end gap-2"><Btn variant="ghost" onClick={() => setMov(null)}>Cancelar</Btn><Btn icon="check" onClick={saveMov}>{mov.dir === 1 ? "Registrar entrada" : "Registrar consumo"}</Btn></div>
            </div>
          );
        })()}
      </Modal>
    </div>
  );
}
`,ot=`import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import type { Despacho, Warehouse } from "../lib/types";
import { copyText, fmtDate, uid } from "../lib/util";
import { Badge, Btn, Card, Drawer, Field, Icon, Input, Modal, SectionTitle, Select, Tabs } from "../components/ui";

const estTone: Record<Despacho["estado"], "oak" | "steel" | "moss"> = { preparacion: "oak", en_ruta: "steel", entregado: "moss" };
const WH_LABEL: Record<Warehouse, string> = { showroom: "Showroom", bodega: "Bodega Central", taller: "Taller" };
const WH_ADDR: Record<Warehouse, string> = {
  showroom: "Av. Eloy Alfaro N34-211 y Rusia, Quito",
  bodega: "Panamericana Norte km 14, Calderón",
  taller: "Av. Ilaló 12-40, Sangolquí",
};

function Barcode({ seed, className }: { seed: string; className?: string }) {
  const bars = useMemo(() => {
    const out: number[] = [];
    for (let i = 0; i < seed.length * 2; i++) out.push(((seed.charCodeAt(i % seed.length) * (i + 7)) % 4) + 1);
    return out;
  }, [seed]);
  let x = 0;
  return (
    <svg viewBox="0 0 120 28" className={className} preserveAspectRatio="none">
      {bars.map((w, i) => {
        const el = <rect key={i} x={x} y={0} width={w * 1.4} height={28} fill="currentColor" />;
        x += w * 1.4 + 2;
        return el;
      })}
    </svg>
  );
}

export default function Logistica() {
  const { state, dispatch, toast } = useStore();
  const [tab, setTab] = useState<"despachos" | "guias" | "etiquetas" | "red">("despachos");
  const [showNew, setShowNew] = useState(false);
  const [guiaView, setGuiaView] = useState<Despacho | null>(null);
  const [nd, setNd] = useState({ orderId: "", transportId: "", placa: "", conductor: "", ruta: "" });
  const [etqId, setEtqId] = useState(state.despachos[0]?.id ?? "");

  const transportes = state.suppliers.filter((s) => s.kind === "transporte");
  const elegibles = state.orders.filter((o) => ["aprobado", "confirmado", "en_bodega", "listo_despacho"].includes(o.status) && !state.despachos.some((d) => d.orderId === o.id));

  const pesoDe = (orderId: string) => {
    const o = state.orders.find((x) => x.id === orderId);
    if (!o) return 0;
    return o.items.reduce((a, i) => a + (state.products.find((p) => p.id === i.productId)?.weightKg ?? 0) * i.qty, 0);
  };

  const create = () => {
    const order = state.orders.find((o) => o.id === nd.orderId);
    const tr = state.suppliers.find((s) => s.id === nd.transportId);
    if (!order) return toast("Selecciona el pedido a despachar", "warn");
    if (!tr || !nd.placa.trim()) return toast("Transportista y placa son obligatorios", "warn");
    const d: Despacho = {
      id: uid(), code: \`DSP-\${state.settings.sequence.despacho}\`, orderId: order.id, orderCode: order.code,
      customer: order.customer, city: order.city, transportId: tr.id, placa: nd.placa.toUpperCase().trim(),
      conductor: nd.conductor.trim() || tr.contact, motivo: "venta", fecha: new Date().toISOString(),
      ruta: nd.ruta.trim() || \`Bodega Central (Calderón) → \${order.city}\`, bultos: order.bultos, pesoKg: pesoDe(order.id),
      guia: null, estado: "preparacion",
    };
    dispatch({ type: "CREATE_DESPACHO", despacho: d });
    setShowNew(false);
    setNd({ orderId: "", transportId: "", placa: "", conductor: "", ruta: "" });
    toast(\`Despacho \${d.code} creado · \${d.bultos} bultos · \${order.code} pasó a DESPACHADO\`);
  };

  const emitGuia = (d: Despacho) => {
    dispatch({ type: "EMIT_GUIA", id: d.id });
    toast(\`Guía de remisión emitida y autorizada por el SRI · \${d.code}\`);
  };

  const etq = state.despachos.find((d) => d.id === etqId) ?? state.despachos[0];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">DespachoErp · guías SRI · etiquetas de bulto</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Logística & despacho</h1>
          <p className="text-[13px] text-mut mt-1">
            {state.despachos.filter((d) => d.estado === "en_ruta").length} en ruta · {state.despachos.filter((d) => !d.guia).length} sin guía de remisión
          </p>
        </div>
        <Btn icon="plus" onClick={() => setShowNew(true)}>Nuevo despacho</Btn>
      </div>

      <Tabs
        tabs={[
          { id: "despachos", label: \`Despachos (\${state.despachos.length})\` },
          { id: "guias", label: "Guías de remisión SRI" },
          { id: "etiquetas", label: "Etiquetas de bulto" },
          { id: "red", label: "Transportistas & locales" },
        ]}
        value={tab} onChange={(t) => setTab(t as typeof tab)}
      />

      {tab === "despachos" && (
        <div className="grid md:grid-cols-2 gap-3 stagger">
          {state.despachos.map((d) => {
            const tr = state.suppliers.find((s) => s.id === d.transportId);
            return (
              <Card key={d.id} className="hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[12.5px] font-semibold text-ink">{d.code}</span>
                      <Badge tone={estTone[d.estado]} dot>{d.estado.replace("_", " ")}</Badge>
                    </div>
                    <div className="font-display font-bold text-[15.5px] text-ink mt-0.5">{d.orderCode} · {d.customer}</div>
                    <div className="text-[11.5px] text-mut mt-0.5">{d.ruta}</div>
                  </div>
                  <span className="w-9 h-9 rounded-lg bg-steell text-steel grid place-items-center shrink-0"><Icon name="truck" size={17} /></span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                  <div className="rounded-lg bg-ink/4 p-2"><div className="font-mono font-bold text-[13px] text-ink">{d.placa}</div><div className="text-[9px] uppercase tracking-wider text-fog font-bold">placa</div></div>
                  <div className="rounded-lg bg-ink/4 p-2"><div className="font-mono font-bold text-[13px] text-ink num">{d.bultos}</div><div className="text-[9px] uppercase tracking-wider text-fog font-bold">bultos</div></div>
                  <div className="rounded-lg bg-ink/4 p-2"><div className="font-mono font-bold text-[13px] text-ink num">{d.pesoKg} kg</div><div className="text-[9px] uppercase tracking-wider text-fog font-bold">peso</div></div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="text-[11.5px] text-mut">
                    <b className="text-ink">{tr?.name}</b> · {d.conductor} · {fmtDate(d.fecha)}
                    <div className="mt-0.5">{d.guia ? <span className="font-mono text-[10.5px] text-[#41621f]">✓ guía {d.guia.numero}</span> : <span className="font-mono text-[10.5px] text-oakd">guía pendiente</span>}</div>
                  </div>
                  <div className="flex gap-1.5">
                    {!d.guia && <Btn size="sm" variant="outline" icon="doc" onClick={() => emitGuia(d)}>Emitir guía</Btn>}
                    {d.guia && <Btn size="sm" variant="ghost" icon="eye" onClick={() => setGuiaView(state.despachos.find((x) => x.id === d.id) ?? d)}>Guía</Btn>}
                    {d.estado === "preparacion" && <Btn size="sm" variant="oak" icon="truck" onClick={() => { dispatch({ type: "ADVANCE_DESPACHO", id: d.id, estado: "en_ruta" }); toast(\`\${d.code} salió en ruta · \${d.placa}\`); }}>Iniciar ruta</Btn>}
                    {d.estado === "en_ruta" && <Btn size="sm" icon="check" onClick={() => { dispatch({ type: "ADVANCE_DESPACHO", id: d.id, estado: "entregado" }); toast(\`\${d.code} entregado · factura emitida al cliente\`); }}>Entregado</Btn>}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {tab === "guias" && (
        <Card pad={false} className="anim-up">
          <div className="p-3 border-b border-line"><SectionTitle kicker="SRI · comprobante 06" title="Guías de remisión electrónicas" /></div>
          <div className="divide-y divide-line/70">
            {state.despachos.map((d) => (
              <div key={d.id} className="flex flex-wrap items-center gap-3 px-4 py-3 hover:bg-pinel/25 transition-colors">
                <span className="w-8 h-8 rounded-lg bg-steell text-steel grid place-items-center"><Icon name="doc" size={14} /></span>
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] font-semibold text-ink">{d.code} · {d.customer} <span className="font-mono text-[11px] text-fog">· placa {d.placa}</span></div>
                  <div className="text-[11px] text-mut">{d.ruta} · {d.bultos} bultos · {d.pesoKg} kg</div>
                </div>
                {d.guia ? (
                  <>
                    <div className="text-right">
                      <div className="font-mono text-[12px] text-ink">{d.guia.numero}</div>
                      <div className="text-[10px] text-[#41621f] font-semibold">AUTORIZADA · {d.guia.auth.slice(0, 18)}…</div>
                    </div>
                    <Btn size="sm" variant="outline" icon="eye" onClick={() => setGuiaView(d)}>XML / RIDE</Btn>
                  </>
                ) : (
                  <Btn size="sm" variant="oak" icon="zap" onClick={() => emitGuia(d)}>Emitir y autorizar</Btn>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {tab === "etiquetas" && (
        <div className="space-y-3 anim-up">
          <div className="flex flex-wrap items-center gap-2">
            <Select value={etq?.id ?? ""} onChange={(e) => setEtqId(e.target.value)} className="w-auto min-w-[280px]">
              {state.despachos.map((d) => <option key={d.id} value={d.id}>{d.code} · {d.orderCode} · {d.customer}</option>)}
            </Select>
            <Btn variant="outline" icon="tag" onClick={() => toast(\`Impresión enviada a Zebra ZD420 · \${etq?.bultos} etiquetas\`, "info")}>Imprimir hoja de etiquetas</Btn>
          </div>
          {etq && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {Array.from({ length: Math.min(etq.bultos, 9) }).map((_, i) => (
                <div key={i} className="bg-card border-2 border-dashed border-line2 rounded-xl p-3.5 hover:border-pine/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-extrabold text-[15px] text-ink">BULTO {i + 1}/{etq.bultos}</span>
                    <Icon name="package" size={16} className="text-fog" />
                  </div>
                  <div className="font-mono text-[13px] font-semibold text-pine mt-1">{etq.orderCode}</div>
                  <div className="text-[11.5px] text-mut leading-tight mt-0.5">{etq.customer}<br />{etq.ruta}</div>
                  <Barcode seed={etq.code + i} className="w-full h-9 text-ink mt-2" />
                  <div className="flex justify-between font-mono text-[10px] text-fog mt-1">
                    <span>{etq.code}-{String(i + 1).padStart(2, "0")}</span><span>{Math.round(etq.pesoKg / etq.bultos)} kg</span>
                  </div>
                  <div className="text-center text-[9px] font-bold tracking-[0.25em] text-brick mt-1.5 border-t border-line pt-1.5">FRÁGIL · NO APILAR</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === "red" && (
        <div className="grid lg:grid-cols-2 gap-4 anim-up">
          <Card>
            <SectionTitle kicker="SRM" title="Transportistas activos" />
            <div className="space-y-2.5">
              {transportes.map((t) => (
                <div key={t.id} className="flex items-center gap-3 rounded-xl border border-line p-3 hover:border-pine/40 transition-colors">
                  <span className="w-10 h-10 rounded-xl bg-steell text-steel grid place-items-center font-display font-extrabold">{t.name.slice(0, 1)}</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[13.5px] font-semibold text-ink">{t.name}</div>
                    <div className="text-[11px] text-mut">{t.contact} · {t.phone} · {t.city}</div>
                    <div className="text-[10.5px] text-fog">{t.items}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[13px] font-bold text-oakd">★ {t.rating}</div>
                    <div className="text-[10px] text-mut">{t.leadDays} días lead</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <SectionTitle kicker="Locales & bodegas" title="Red física" />
            <div className="space-y-2.5">
              {(["showroom", "bodega", "taller"] as Warehouse[]).map((w) => {
                const units = state.products.reduce((a, p) => a + p.stock[w], 0);
                const skus = state.products.filter((p) => p.stock[w] > 0).length;
                return (
                  <div key={w} className="rounded-xl border border-line p-3 flex items-center gap-3 hover:border-pine/40 transition-colors">
                    <span className="w-10 h-10 rounded-xl bg-pinel text-pined grid place-items-center"><Icon name={w === "taller" ? "saw" : w === "bodega" ? "warehouse" : "tag"} size={17} /></span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13.5px] font-semibold text-ink">{WH_LABEL[w]}</div>
                      <div className="text-[11px] text-mut truncate">{WH_ADDR[w]}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-display font-extrabold text-[18px] text-ink num">{units}</div>
                      <div className="text-[9.5px] uppercase tracking-wider text-fog font-bold">und · {skus} SKUs</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      )}

      <Modal open={showNew} onClose={() => setShowNew(false)} kicker="DespachoErp" title="Nuevo despacho">
        <div className="space-y-3">
          <Field label="Pedido a despachar">
            <Select value={nd.orderId} onChange={(e) => setNd({ ...nd, orderId: e.target.value })}>
              <option value="">— seleccionar —</option>
              {elegibles.map((o) => <option key={o.id} value={o.id}>{o.code} · {o.customer} · {o.bultos} bultos · {o.status.replace("_", " ")}</option>)}
            </Select>
          </Field>
          {elegibles.length === 0 && <div className="text-[11.5px] text-oakd bg-oakl/60 border border-oak/25 rounded-lg px-3 py-2">No hay pedidos en estados despachables (aprobado / confirmado / en bodega / listo despacho) sin despacho asignado.</div>}
          <Field label="Transportista">
            <Select value={nd.transportId} onChange={(e) => setNd({ ...nd, transportId: e.target.value })}>
              <option value="">— seleccionar —</option>
              {transportes.map((t) => <option key={t.id} value={t.id}>{t.name} · ★ {t.rating} · {t.city}</option>)}
            </Select>
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Placa"><Input placeholder="PCH-1194" value={nd.placa} onChange={(e) => setNd({ ...nd, placa: e.target.value })} /></Field>
            <Field label="Conductor"><Input placeholder="Nombre del chofer" value={nd.conductor} onChange={(e) => setNd({ ...nd, conductor: e.target.value })} /></Field>
          </div>
          <Field label="Ruta"><Input placeholder="Bodega Central → destino" value={nd.ruta} onChange={(e) => setNd({ ...nd, ruta: e.target.value })} /></Field>
          {nd.orderId && (
            <div className="rounded-lg bg-pinel/60 border border-pine/20 px-3 py-2 text-[12px] text-pined anim-pop">
              {state.orders.find((o) => o.id === nd.orderId)?.bultos} bultos · peso estimado {pesoDe(nd.orderId)} kg · al crear, el pedido pasa a <b>DESPACHADO</b>
            </div>
          )}
          <div className="flex justify-end gap-2"><Btn variant="ghost" onClick={() => setShowNew(false)}>Cancelar</Btn><Btn icon="truck" onClick={create}>Crear despacho</Btn></div>
        </div>
      </Modal>

      <Drawer open={!!guiaView} onClose={() => setGuiaView(null)} kicker={\`Guía de remisión · \${guiaView?.guia?.numero ?? ""}\`} title={\`\${guiaView?.code ?? ""} · \${guiaView?.customer ?? ""}\`}>
        {guiaView?.guia && (
          <div className="space-y-3">
            <div className="rounded-xl border border-moss/40 bg-mossl/60 p-3.5 flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-moss text-paper grid place-items-center shrink-0"><Icon name="check" size={17} /></span>
              <div>
                <div className="font-semibold text-[13.5px] text-ink">Autorizada por el SRI</div>
                <div className="font-mono text-[10.5px] text-mut break-all">Nº autorización: {guiaView.guia.auth}</div>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-mut mb-1.5">XML del comprobante</div>
              <pre className="rounded-xl bg-night text-[11px] font-mono text-[#b8d4c0] p-3.5 overflow-x-auto leading-relaxed">{guiaView.guia.xml}</pre>
            </div>
            <div className="flex gap-2">
              <Btn variant="outline" icon="copy" className="flex-1" onClick={async () => { await copyText(guiaView.guia!.xml); toast("XML copiado al portapapeles"); }}>Copiar XML</Btn>
              <Btn className="flex-1" icon="dl" onClick={() => toast(\`RIDE_\${guiaView.guia!.numero}.pdf descargado\`, "info")}>Descargar RIDE (PDF)</Btn>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
}
`,st=`import { useState } from "react";
import { buildPayLink, saldoDe, useStore } from "../lib/store";
import type { PayLink } from "../lib/types";
import { copyText, fmtDate, money, num } from "../lib/util";
import { Badge, Btn, Card, Field, Icon, Input, linkTone, Modal, SectionTitle, Select, Stat } from "../components/ui";

export default function Cobros() {
  const { state, dispatch, toast } = useStore();
  const [form, setForm] = useState({ mode: "orden" as "orden" | "saldo" | "libre", orderId: "", amount: "", concept: "", customer: "", days: "7" });
  const [checkout, setCheckout] = useState<PayLink | null>(null);
  const [payTab, setPayTab] = useState<"tarjeta" | "qr">("tarjeta");
  const [card, setCard] = useState({ num: "4242 4242 4242 4242", exp: "12/27", cvv: "123" });
  const [paying, setPaying] = useState<"idle" | "processing" | "done">("idle");
  const [auth, setAuth] = useState("");

  const cobrado = state.payLinks.filter((l) => l.status === "pagado").reduce((a, l) => a + l.amount, 0);
  const porCobrar = state.payLinks.filter((l) => l.status === "pendiente").reduce((a, l) => a + l.amount, 0);
  const cerrados = state.payLinks.filter((l) => l.status !== "pendiente").length;
  const conv = cerrados ? Math.round((state.payLinks.filter((l) => l.status === "pagado").length / cerrados) * 100) : 0;

  const openOrders = state.orders.filter((o) => !["anulado", "cancelado"].includes(o.status) && saldoDe(o) > 0);

  const generate = () => {
    let amount = 0, concept = "", customer = "", orderId: string | null = null;
    if (form.mode === "orden") {
      const o = state.orders.find((x) => x.id === form.orderId);
      if (!o) return toast("Selecciona un pedido", "warn");
      amount = o.total; concept = \`Pedido \${o.code} · \${o.items.length} ítem(s)\`; customer = o.customer; orderId = o.id;
    } else if (form.mode === "saldo") {
      const o = state.orders.find((x) => x.id === form.orderId);
      if (!o) return toast("Selecciona un pedido", "warn");
      amount = saldoDe(o);
      if (amount <= 0) return toast("Ese pedido no tiene saldo pendiente", "warn");
      concept = \`Saldo \${o.code}\`; customer = o.customer; orderId = o.id;
    } else {
      amount = Number(form.amount);
      if (!amount || !form.concept.trim()) return toast("Monto y concepto son obligatorios", "warn");
      concept = form.concept.trim(); customer = form.customer.trim() || "Cliente web";
    }
    const link = buildPayLink(state, Math.round(amount * 100) / 100, concept, customer, orderId, Number(form.days) || 7);
    dispatch({ type: "CREATE_PAYLINK", link });
    setForm({ mode: "orden", orderId: "", amount: "", concept: "", customer: "", days: "7" });
    toast(\`Link de un solo uso generado por \${money(link.amount)}\`);
  };

  const doPay = () => {
    if (!checkout) return;
    setPaying("processing");
    setTimeout(() => {
      const last4 = card.num.replace(/\\s/g, "").slice(-4) || "4242";
      dispatch({ type: "PAY_LINK", id: checkout.id, method: "PayPhone · Visa", last4 });
      setAuth(String(Math.floor(10000000 + Math.random() * 89999999)));
      setPaying("done");
      toast(\`Pago de \${money(checkout.amount)} acreditado vía PayPhone\`);
    }, 1400);
  };

  const closeCheckout = () => { setCheckout(null); setPaying("idle"); setPayTab("tarjeta"); };
  const url = (l: PayLink) => \`\${state.settings.linkBase}/\${l.token}\`;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Pasarela · PayPhone Ecuador</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Cobros con link de pago</h1>
        </div>
        <Badge tone={state.settings.payphone.mode === "sandbox" ? "oak" : "moss"} dot>
          {state.settings.payphone.mode === "sandbox" ? "SANDBOX · credenciales de prueba" : "PRODUCCIÓN"} · shop {state.settings.payphone.shopId}
        </Badge>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 stagger">
        <Stat label="Cobrado por link" value={money(cobrado)} icon="qr" tone="moss" sub="acreditado en Bancos Pichincha" />
        <Stat label="Por cobrar" value={money(porCobrar)} icon="clock" tone="oak" sub={\`\${state.payLinks.filter((l) => l.status === "pendiente").length} links activos\`} />
        <Stat label="Conversión" value={\`\${conv}%\`} icon="zap" tone="pine" sub="links pagados vs cerrados" />
        <Stat label="Comisión PayPhone" value={money(cobrado * 0.0249)} icon="card" tone="steel" sub="2,49% + IVA por transacción" />
      </div>

      <div className="grid lg:grid-cols-5 gap-4">
        <Card className="lg:col-span-2 anim-up h-fit sticky top-20">
          <SectionTitle kicker="Un solo uso" title="Generar link de cobro" />
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {([["orden", "Pedido total"], ["saldo", "Solo saldo"], ["libre", "Monto libre"]] as const).map(([k, l]) => (
                <button key={k} onClick={() => setForm({ ...form, mode: k })} className={\`rounded-lg border px-2 py-2.5 text-left transition-all \${form.mode === k ? "border-pine bg-pinel/50" : "border-line hover:border-line2"}\`}>
                  <div className="text-[12px] font-bold text-ink leading-tight">{l}</div>
                </button>
              ))}
            </div>
            {form.mode !== "libre" ? (
              <Field label={form.mode === "saldo" ? "Pedido con saldo pendiente" : "Pedido pendiente"}>
                <Select value={form.orderId} onChange={(e) => setForm({ ...form, orderId: e.target.value })}>
                  <option value="">— seleccionar —</option>
                  {openOrders.map((o) => <option key={o.id} value={o.id}>{o.code} · {o.customer} · {form.mode === "saldo" ? \`saldo \${money(saldoDe(o))}\` : money(o.total)}</option>)}
                </Select>
              </Field>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Monto USD"><Input type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} placeholder="0.00" /></Field>
                  <Field label="Cliente"><Input value={form.customer} onChange={(e) => setForm({ ...form, customer: e.target.value })} placeholder="Opcional" /></Field>
                </div>
                <Field label="Concepto"><Input value={form.concept} onChange={(e) => setForm({ ...form, concept: e.target.value })} placeholder="Ej: Reserva sofá Nápoles" /></Field>
              </>
            )}
            <Field label="Vigencia del link">
              <Select value={form.days} onChange={(e) => setForm({ ...form, days: e.target.value })}>
                <option value="1">24 horas</option><option value="3">3 días</option><option value="7">7 días</option><option value="15">15 días</option>
              </Select>
            </Field>
            <Btn className="w-full" icon="link" onClick={generate}>Generar link de un solo uso</Btn>
            <p className="text-[11px] text-fog leading-relaxed">
              El link acepta <b>tarjetas, débito y QR PayPhone</b>. Al pagarse, el recibo queda <b className="text-pined">validado automáticamente</b> (webhook firmado), emite la factura electrónica (SRI) y registra el asiento contable.
            </p>
          </div>
        </Card>

        <div className="lg:col-span-3 space-y-2.5 anim-up">
          {state.payLinks.map((l) => (
            <div key={l.id} className="bg-card border border-line rounded-xl p-3.5 hover:border-pine/40 hover:shadow-md transition-all">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[12px] font-semibold text-ink">{l.concept}</span>
                    <Badge tone={linkTone[l.status]} dot>{l.status}</Badge>
                  </div>
                  <div className="font-mono text-[11px] text-fog mt-1 truncate max-w-md">{url(l)}</div>
                  <div className="text-[11px] text-mut mt-1">
                    {l.customerName} · creado {fmtDate(l.createdAt)} · vence {fmtDate(l.expiresAt)}
                    {l.method && <span className="text-moss font-semibold"> · {l.method} •••• {l.last4} · aut. {l.authCode}</span>}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display font-extrabold text-[19px] text-ink num">{money(l.amount)}</div>
                  <div className="flex gap-1.5 mt-1.5 justify-end">
                    <Btn size="sm" variant="outline" icon="copy" onClick={async () => { await copyText(url(l)); toast("Link copiado al portapapeles"); }}>Copiar</Btn>
                    {l.status === "pendiente" && <Btn size="sm" variant="oak" icon="play" onClick={() => { setCheckout(l); }}>Simular pago</Btn>}
                    {l.status === "pendiente" && <Btn size="sm" variant="ghost" icon="x" onClick={() => { dispatch({ type: "CANCEL_PAYLINK", id: l.id }); toast("Link anulado", "warn"); }} />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal open={!!checkout} onClose={closeCheckout} kicker="Pasarela · demostración" title="Checkout PayPhone" wide>
        {checkout && (
          <div className="max-w-md mx-auto">
            {paying !== "done" ? (
              <>
                <div className="rounded-xl border border-line overflow-hidden">
                  <div className="bg-[#6b2f8f] text-paper px-4 py-3 flex items-center justify-between">
                    <span className="font-display font-extrabold tracking-wide flex items-center gap-2"><Icon name="qr" size={16} />PayPhone</span>
                    <span className="font-mono text-[10px] opacity-75">SANDBOX EC</span>
                  </div>
                  <div className="p-4">
                    <div className="text-center mb-4">
                      <div className="font-display font-extrabold text-[30px] text-ink num">{money(checkout.amount)}</div>
                      <div className="text-[12px] text-mut">{checkout.concept}</div>
                      <div className="text-[11px] text-fog font-mono mt-0.5">{state.settings.company.name}</div>
                    </div>
                    <div className="flex gap-1 bg-ink/5 rounded-lg p-1 mb-4">
                      {(["tarjeta", "qr"] as const).map((t) => (
                        <button key={t} onClick={() => setPayTab(t)} className={\`flex-1 py-1.5 rounded-md text-[12px] font-bold capitalize transition-all \${payTab === t ? "bg-card shadow-sm text-ink" : "text-mut"}\`}>{t === "tarjeta" ? "Tarjeta" : "QR PayPhone"}</button>
                      ))}
                    </div>
                    {payTab === "tarjeta" ? (
                      <div className="space-y-2.5">
                        <Field label="Número de tarjeta"><Input value={card.num} onChange={(e) => setCard({ ...card, num: e.target.value })} className="font-mono" /></Field>
                        <div className="grid grid-cols-2 gap-3">
                          <Field label="Vence"><Input value={card.exp} onChange={(e) => setCard({ ...card, exp: e.target.value })} className="font-mono" /></Field>
                          <Field label="CVV"><Input value={card.cvv} onChange={(e) => setCard({ ...card, cvv: e.target.value })} className="font-mono" /></Field>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-2">
                        <div className="w-40 h-40 mx-auto rounded-xl border border-line p-2 bg-card">
                          <svg viewBox="0 0 100 100" className="w-full h-full text-ink">
                            {Array.from({ length: 120 }).map((_, i) => {
                              const x = (i * 37) % 95, y = (i * 53) % 95;
                              return (i * 7) % 3 === 0 ? <rect key={i} x={x} y={y} width="4" height="4" fill="currentColor" /> : null;
                            })}
                            <rect x="2" y="2" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" />
                            <rect x="76" y="2" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" />
                            <rect x="2" y="76" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" />
                          </svg>
                        </div>
                        <p className="text-[11.5px] text-mut mt-2.5">Escanea con la app PayPhone — o usa la pestaña tarjeta en este sandbox.</p>
                      </div>
                    )}
                    <Btn className="w-full mt-4" disabled={paying === "processing"} onClick={doPay} icon={paying === "processing" ? "refresh" : "card"}>
                      {paying === "processing" ? "Procesando con el banco…" : \`Pagar \${money(checkout.amount)}\`}
                    </Btn>
                    <p className="text-center text-[10.5px] text-fog mt-2.5 flex items-center justify-center gap-1"><Icon name="key" size={11} />Transacción cifrada · PCI-DSS · recibo auto-validado</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8 anim-pop">
                <div className="w-16 h-16 mx-auto rounded-full bg-mossl text-[#41621f] grid place-items-center mb-3"><Icon name="check" size={30} /></div>
                <div className="font-display font-extrabold text-[22px] text-ink">¡Pago aprobado!</div>
                <div className="text-[13px] text-mut mt-1">{money(checkout.amount)} · autorización <span className="font-mono">{auth}</span></div>
                <div className="mt-4 mx-auto max-w-xs rounded-lg bg-pinel/60 border border-pine/20 p-3 text-left text-[11.5px] text-pined space-y-1">
                  <div>✓ Webhook recibido, firmado y verificado</div>
                  <div>✓ Recibo validado automáticamente (sin revisión manual)</div>
                  <div>✓ Factura electrónica emitida (SRI)</div>
                  <div>✓ Asiento contable registrado</div>
                </div>
                <Btn className="mt-4" onClick={closeCheckout}>Listo</Btn>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
`,it=`import { useState } from "react";
import { useStore } from "../lib/store";
import type { MediaAsset } from "../lib/types";
import { copyText, fmtDate, uid } from "../lib/util";
import { Badge, Btn, Card, EmptyState, Icon } from "../components/ui";
import { Blueprint, Thumb } from "../components/Img";

export default function Dam() {
  const { state, dispatch, toast } = useStore();
  const [kind, setKind] = useState("todos");
  const assets = state.media.filter((m) => kind === "todos" || m.kind === kind);

  const simulateUpload = () => {
    const a: MediaAsset = { id: uid(), name: \`captura-taller-\${state.media.length + 1}.jpg\`, kind: "foto", tag: "Taller", size: "1,3 MB", src: "", usage: [], uploadedAt: new Date().toISOString() };
    dispatch({ type: "UPLOAD_MEDIA", asset: a });
    dispatch({ type: "EVENTS", events: [{ id: uid(), ts: Date.now(), type: "web" as const, msg: \`DAM: asset \${a.name} indexado con etiquetas automáticas\` }] });
    toast("Archivo subido e indexado en el DAM");
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">DAM · activos digitales</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Fototeca & planos del taller</h1>
          <p className="text-[13px] text-mut mt-1">{state.media.length} activos · vinculados a fichas PIM, catálogo web y cotizaciones</p>
        </div>
        <Btn icon="plus" onClick={simulateUpload}>Subir archivo</Btn>
      </div>

      <div className="flex gap-2 flex-wrap anim-up">
        {["todos", "foto", "render", "plano"].map((k) => (
          <button key={k} onClick={() => setKind(k)} className={\`px-3 py-1.5 rounded-lg border text-[12px] font-semibold capitalize transition-all \${kind === k ? "bg-ink text-paper border-ink" : "bg-card border-line2 text-mut hover:text-ink"}\`}>
            {k === "todos" ? \`Todos (\${state.media.length})\` : k}
          </button>
        ))}
      </div>

      {assets.length === 0 ? (
        <Card><EmptyState icon="image" title="Sin activos" sub="Sube fotos de producto, renders o planos del taller." /></Card>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 stagger">
          {assets.map((m) => (
            <div key={m.id} className="group bg-card border border-line rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <div className="relative h-40 overflow-hidden">
                {m.src ? <Thumb src={m.src} alt={m.name} className="w-full h-full group-hover:scale-[1.04] transition-transform duration-500" /> : <Blueprint label={m.name} className="w-full h-full" />}
                <span className="absolute top-2 left-2"><Badge tone={m.kind === "foto" ? "pine" : m.kind === "render" ? "steel" : "oak"}>{m.kind}</Badge></span>
                <span className="absolute bottom-2 right-2 font-mono text-[10px] bg-night/70 text-paper px-1.5 py-0.5 rounded">{m.size}</span>
              </div>
              <div className="p-3">
                <div className="font-mono text-[12px] text-ink truncate">{m.name}</div>
                <div className="text-[11px] text-mut mt-0.5">tag <Badge tone="fog" className="ml-1">{m.tag}</Badge> · {fmtDate(m.uploadedAt)}</div>
                {m.usage.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {m.usage.map((u) => <span key={u} className="text-[10px] font-mono bg-ink/5 text-mut px-1.5 py-0.5 rounded">{u}</span>)}
                  </div>
                )}
                <div className="flex gap-1.5 mt-2.5">
                  <Btn size="sm" variant="outline" icon="copy" className="flex-1" onClick={async () => { await copyText(\`https://dam.andinahogar.ec/a/\${m.id}\`); toast("URL del activo copiada"); }}>URL</Btn>
                  <Btn size="sm" variant="ghost" icon="dl" onClick={() => toast(\`Descargando \${m.name}…\`, "info")} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Card className="anim-up">
        <div className="flex items-start gap-3">
          <span className="w-9 h-9 rounded-lg bg-oakl text-oakd grid place-items-center shrink-0"><Icon name="zap" size={16} /></span>
          <div className="text-[12.5px] text-mut leading-relaxed">
            <b className="text-ink">Flujo DAM → PIM → Web:</b> cada activo lleva metadatos (SKU, categoría, licencia) y se sincroniza con el catálogo.
            Las fotos de estudio alimentan la ficha del producto, el cotizador B2B de los links de un solo uso y los anuncios — una sola fuente de verdad.
          </div>
        </div>
      </Card>
    </div>
  );
}
`,rt=`import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import { downloadCsv, fmtDate, money, uid } from "../lib/util";
import { Badge, Btn, Card, Field, Icon, Input, Modal, SectionTitle, Select, Stat, Tabs, Td, Th } from "../components/ui";

export default function Contabilidad() {
  const { state, dispatch, toast } = useStore();
  const [tab, setTab] = useState<"diario" | "facturas" | "impuestos">("diario");
  const [showAsiento, setShowAsiento] = useState(false);
  const [anular, setAnular] = useState<string | null>(null);
  const [motivo, setMotivo] = useState("");
  const [nj, setNj] = useState({ doc: "", account: "", detail: "", debit: "", credit: "" });

  const totals = useMemo(() => {
    const debit = state.journal.reduce((a, j) => a + j.debit, 0);
    const credit = state.journal.reduce((a, j) => a + j.credit, 0);
    return { debit, credit, ok: Math.abs(debit - credit) < 0.01 };
  }, [state.journal]);

  const ivaTrasladado = state.invoices.filter((i) => i.status !== "anulada").reduce((a, i) => a + i.iva, 0);
  const ivaPagado = state.journal.filter((j) => j.account === "1050 IVA pagado").reduce((a, j) => a + j.debit, 0);
  const ivaDeclarar = Math.max(0, ivaTrasladado - ivaPagado);
  const cxc = state.journal.filter((j) => j.account === "1030 Cuentas por cobrar").reduce((a, j) => a + j.debit - j.credit, 0);

  const saveAsiento = () => {
    const d = Number(nj.debit), c = Number(nj.credit);
    if (!nj.account || !nj.doc || (d === 0 && c === 0)) return toast("Completa documento, cuenta y monto", "warn");
    dispatch({
      type: "ADD_JOURNAL",
      entries: [{ id: uid(), date: new Date().toISOString(), doc: nj.doc, account: nj.account, detail: nj.detail || "Asiento manual", debit: d, credit: c }],
    });
    setShowAsiento(false);
    setNj({ doc: "", account: "", detail: "", debit: "", credit: "" });
    toast("Asiento registrado en el diario");
  };

  const inv = state.invoices.find((i) => i.id === anular);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Contabilidad.php · partida doble · SRI</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Contabilidad & obligaciones</h1>
        </div>
        <div className="flex gap-2">
          <Btn variant="outline" icon="dl" onClick={() => {
            downloadCsv("diario-contable.csv", ["Fecha", "Documento", "Cuenta", "Detalle", "Debe", "Haber"],
              state.journal.map((j) => [fmtDate(j.date), j.doc, j.account, j.detail, j.debit.toFixed(2), j.credit.toFixed(2)]));
            toast("Diario exportado en CSV (compatible Excel)");
          }}>Exportar CSV</Btn>
          <Btn icon="plus" onClick={() => setShowAsiento(true)}>Asiento manual</Btn>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 stagger">
        <Stat label="Debe / Haber" value={\`\${money(totals.debit, false)} / \${money(totals.credit, false)}\`} icon="book" tone="pine" sub={totals.ok ? <span className="text-[#41621f] font-semibold">✓ partida doble cuadrada</span> : <span className="text-brick font-semibold">✗ descuadre — revisar</span>} />
        <Stat label="Cuentas por cobrar" value={money(cxc)} icon="clock" tone="oak" sub="cartera abierta con clientes" />
        <Stat label="IVA por declarar" value={money(ivaDeclarar)} icon="doc" tone="steel" sub="trasladado − pagado (Form. 104)" />
        <Stat label="Facturas emitidas" value={String(state.invoices.length)} icon="check" tone="moss" sub={\`\${state.invoices.filter((i) => i.status === "anulada").length} anuladas con NC\`} />
      </div>

      <Tabs
        tabs={[{ id: "diario", label: "Libro diario" }, { id: "facturas", label: "Facturas & NC" }, { id: "impuestos", label: "Obligaciones SRI" }]}
        value={tab} onChange={(t) => setTab(t as typeof tab)}
      />

      {tab === "diario" && (
        <Card pad={false} className="anim-up">
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] min-w-[760px]">
              <thead className="bg-ink/3 border-b border-line">
                <tr><Th>Fecha</Th><Th>Documento</Th><Th>Cuenta</Th><Th>Detalle</Th><Th right>Debe</Th><Th right>Haber</Th></tr>
              </thead>
              <tbody>
                {state.journal.map((j) => (
                  <tr key={j.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                    <Td className="text-mut whitespace-nowrap">{fmtDate(j.date)}</Td>
                    <Td className="font-mono text-[11.5px] text-ink">{j.doc}</Td>
                    <Td className="font-semibold text-ink whitespace-nowrap">{j.account}</Td>
                    <Td className="text-mut">{j.detail}</Td>
                    <Td right className="num font-mono text-ink">{j.debit > 0 ? money(j.debit) : ""}</Td>
                    <Td right className="num font-mono text-ink">{j.credit > 0 ? money(j.credit) : ""}</Td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-ink/4 font-bold">
                  <Td /><Td /><Td /><Td className="text-ink">Totales</Td>
                  <Td right className="num font-mono text-ink">{money(totals.debit)}</Td>
                  <Td right className="num font-mono text-ink">{money(totals.credit)}</Td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Card>
      )}

      {tab === "facturas" && (
        <div className="space-y-4 anim-up">
          <Card pad={false}>
            <div className="p-3 border-b border-line"><SectionTitle kicker="Comprobantes electrónicos" title="Facturas autorizadas por el SRI" /></div>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] min-w-[820px]">
                <thead className="bg-ink/3 border-b border-line">
                  <tr><Th>Número</Th><Th>Cliente</Th><Th>Fecha</Th><Th right>Base</Th><Th right>IVA</Th><Th right>Total</Th><Th>Estado</Th><Th right>Acciones</Th></tr>
                </thead>
                <tbody>
                  {state.invoices.map((i) => (
                    <tr key={i.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                      <Td className="font-mono text-[11.5px] text-ink">{i.number}</Td>
                      <Td className="font-semibold text-ink">{i.customer}</Td>
                      <Td className="text-mut whitespace-nowrap">{fmtDate(i.date)}</Td>
                      <Td right className="num font-mono text-mut">{money(i.base)}</Td>
                      <Td right className="num font-mono text-mut">{money(i.iva)}</Td>
                      <Td right className="num font-mono font-semibold text-ink">{money(i.total)}</Td>
                      <Td><Badge tone={i.status === "pagada" ? "moss" : i.status === "anulada" ? "brick" : i.status === "por_cobrar" ? "oak" : "steel"} dot>{i.status.replace("_", " ")}</Badge></Td>
                      <Td right>
                        {i.status !== "anulada" && <Btn size="sm" variant="ghost" icon="x" onClick={() => { setAnular(i.id); setMotivo(""); }}>Anular</Btn>}
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {state.notas.length > 0 && (
            <Card>
              <SectionTitle kicker="Comprobante 04" title="Notas de crédito emitidas" />
              <div className="space-y-1.5">
                {state.notas.map((n) => (
                  <div key={n.id} className="flex flex-wrap items-center gap-3 rounded-lg border border-brick/25 bg-brickl/40 px-3 py-2 text-[12.5px]">
                    <span className="font-mono text-brick">{n.number}</span>
                    <span className="text-ink">anula <b className="font-mono">{n.invoiceNumber}</b> · {n.customer}</span>
                    <span className="text-mut">· {n.motivo}</span>
                    <span className="ml-auto font-mono font-bold text-brick num">−{money(n.amount)}</span>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      )}

      {tab === "impuestos" && (
        <div className="grid lg:grid-cols-2 gap-4 anim-up">
          <Card>
            <SectionTitle kicker="IVA 15% · periodo actual" title="Cálculo del Formulario 104" />
            <div className="space-y-2 text-[13px]">
              <div className="flex justify-between rounded-lg border border-line px-3 py-2.5"><span className="text-mut">IVA trasladado (de facturas emitidas)</span><span className="font-mono font-semibold text-ink num">{money(ivaTrasladado)}</span></div>
              <div className="flex justify-between rounded-lg border border-line px-3 py-2.5"><span className="text-mut">IVA pagado (crédito tributario)</span><span className="font-mono text-mut num">−{money(ivaPagado)}</span></div>
              <div className="flex justify-between rounded-lg bg-pinel/60 border border-pine/25 px-3 py-2.5 font-bold"><span className="text-pined">A declarar / pagar</span><span className="font-mono text-pined num">{money(ivaDeclarar)}</span></div>
            </div>
          </Card>
          <Card>
            <SectionTitle kicker="Calendario SRI" title="Obligaciones próximas" />
            <div className="space-y-1.5">
              {[
                ["Form. 104 · IVA mensual", "según 9no dígito del RUC (6)", "15 días"],
                ["Form. 103 · Retenciones en la fuente", "según 9no dígito del RUC (6)", "15 días"],
                ["ATS · Anexo transaccional simplificado", "mes siguiente", "10 días"],
                ["Impuesto a la renta · anticipos", "mar/jun/sep/dic", "28 días"],
              ].map(([doc, cuando, vence]) => (
                <div key={doc} className="flex items-center gap-3 rounded-lg border border-line px-3 py-2.5">
                  <span className="w-8 h-8 rounded-lg bg-oakl text-oakd grid place-items-center shrink-0"><Icon name="clock" size={15} /></span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[12.5px] font-semibold text-ink">{doc}</div>
                    <div className="text-[10.5px] text-mut">{cuando}</div>
                  </div>
                  <Badge tone="oak">vence {vence}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      <Modal open={showAsiento} onClose={() => setShowAsiento(false)} kicker="Libro diario" title="Nuevo asiento manual">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Field label="Documento"><Input placeholder="GAS-0078" value={nj.doc} onChange={(e) => setNj({ ...nj, doc: e.target.value })} /></Field>
            <Field label="Cuenta">
              <Select value={nj.account} onChange={(e) => setNj({ ...nj, account: e.target.value })}>
                <option value="">—</option>
                {["1020 Bancos Pichincha", "1030 Cuentas por cobrar", "1040 Inventario", "2010 Proveedores", "2030 IVA por pagar", "6010 Sueldos y salarios", "6020 Arriendo showroom"].map((c) => <option key={c}>{c}</option>)}
              </Select>
            </Field>
          </div>
          <Field label="Detalle"><Input value={nj.detail} onChange={(e) => setNj({ ...nj, detail: e.target.value })} placeholder="Descripción del movimiento" /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Debe"><Input type="number" value={nj.debit} onChange={(e) => setNj({ ...nj, debit: e.target.value })} placeholder="0.00" /></Field>
            <Field label="Haber"><Input type="number" value={nj.credit} onChange={(e) => setNj({ ...nj, credit: e.target.value })} placeholder="0.00" /></Field>
          </div>
          <div className="flex justify-end gap-2"><Btn variant="ghost" onClick={() => setShowAsiento(false)}>Cancelar</Btn><Btn icon="check" onClick={saveAsiento}>Registrar</Btn></div>
        </div>
      </Modal>

      <Modal open={!!anular && !!inv} onClose={() => setAnular(null)} kicker="SRI · comprobante 04" title="Anular con nota de crédito">
        {inv && (
          <div className="space-y-3">
            <div className="text-[13px] text-mut">
              Se emitirá una <b className="text-ink">nota de crédito electrónica</b> que anula <b className="font-mono">{inv.number}</b> de {inv.customer} por {money(inv.total)} y reversa los asientos contables.
            </div>
            <Field label="Motivo de la anulación"><Input value={motivo} onChange={(e) => setMotivo(e.target.value)} placeholder="Ej: devolución, error de facturación…" /></Field>
            <div className="flex justify-end gap-2">
              <Btn variant="ghost" onClick={() => setAnular(null)}>Volver</Btn>
              <Btn icon="x" onClick={() => {
                if (!motivo.trim()) return toast("Escribe el motivo", "warn");
                dispatch({ type: "ANULAR_FACTURA", id: inv.id, motivo: motivo.trim() });
                toast(\`Nota de crédito emitida · \${inv.number} anulada\`);
                setAnular(null);
              }}>Emitir NC y anular</Btn>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
`,dt=`import { useState } from "react";
import { useStore } from "../lib/store";
import type { AccessLink, AccessRole } from "../lib/types";
import { copyText, fmtDate, token, uid } from "../lib/util";
import { Badge, Btn, Card, Field, Icon, Input, SectionTitle, Select, Td, Th } from "../components/ui";

const accTone: Record<AccessLink["status"], "moss" | "steel" | "fog" | "brick"> = {
  activo: "moss", usado: "steel", expirado: "fog", revocado: "brick",
};

const ROLE_META: Record<AccessRole, { label: string; scope: string; tone: "pine" | "oak" | "steel" | "moss" | "brick" | "fog" }> = {
  vendedor: { label: "Vendedor", scope: "Catálogo, precios y pedidos propios", tone: "pine" },
  bodega: { label: "Bodega", scope: "Movimientos de stock y kardex", tone: "steel" },
  contabilidad: { label: "Contabilidad", scope: "CxC, recibos por validar y conciliación", tone: "oak" },
  taller: { label: "Taller", scope: "Órdenes de fabricación y materiales", tone: "moss" },
  cliente: { label: "Cliente invitado", scope: "Catálogo + cotizador de un solo uso", tone: "fog" },
  gerencia: { label: "Gerencia", scope: "Reportes financieros completos", tone: "brick" },
};

export default function Accesos() {
  const { state, dispatch, toast } = useStore();
  const [nf, setNf] = useState({ label: "", role: "vendedor" as AccessRole, hours: "168" });

  const create = () => {
    if (!nf.label.trim()) return toast("Ponle un nombre al acceso", "warn");
    const link: AccessLink = {
      id: uid(), token: \`ac_\${token(12)}\`, label: nf.label.trim(), role: nf.role,
      scope: ROLE_META[nf.role].scope, createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + Number(nf.hours) * 3600e3).toISOString(),
      maxUses: 1, uses: 0, status: "activo",
    };
    dispatch({ type: "CREATE_ACCESS", link });
    setNf({ label: "", role: "vendedor", hours: "168" });
    toast("Link de un solo uso generado");
  };

  const redeem = (l: AccessLink) => {
    dispatch({ type: "REDEEM_ACCESS", id: l.id });
    toast(\`Acceso consumido · rol \${ROLE_META[l.role].label} — el link quedó inutilizable\`);
  };

  const url = (l: AccessLink) => \`\${state.settings.linkBase}/acc/\${l.token}\`;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Seguridad · zero-trust</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Links de acceso de un solo uso</h1>
          <p className="text-[13px] text-mut mt-1 max-w-2xl">
            Cada link firma una sesión temporal con rol limitado. Se consume al primer uso o expira — ideal para trabajadores de campo, auditores y clientes sin crear cuentas.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-4">
        <Card className="lg:col-span-2 h-fit sticky top-20 anim-up">
          <SectionTitle kicker="Emitir" title="Nuevo link de acceso" />
          <div className="space-y-3">
            <Field label="Descripción"><Input value={nf.label} onChange={(e) => setNf({ ...nf, label: e.target.value })} placeholder="Ej: Conteo de inventario — sábado" /></Field>
            <Field label="Rol y permisos">
              <Select value={nf.role} onChange={(e) => setNf({ ...nf, role: e.target.value as AccessRole })}>
                {(Object.keys(ROLE_META) as AccessRole[]).map((r) => <option key={r} value={r}>{ROLE_META[r].label} — {ROLE_META[r].scope}</option>)}
              </Select>
            </Field>
            <Field label="Vigencia">
              <Select value={nf.hours} onChange={(e) => setNf({ ...nf, hours: e.target.value })}>
                <option value="24">24 horas</option><option value="72">3 días</option><option value="168">7 días</option><option value="720">30 días</option>
              </Select>
            </Field>
            <div className="rounded-lg bg-night text-paper/80 p-3 font-mono text-[11px] leading-relaxed">
              <span className="text-oakl">$</span> permiso: 1 uso · expira en {Number(nf.hours) / 24} días<br />
              <span className="text-oakl">$</span> scopes: {ROLE_META[nf.role].scope.toLowerCase()}<br />
              <span className="text-oakl">$</span> firma: HMAC + rate-limit 5 intentos
            </div>
            <Btn className="w-full" icon="key" onClick={create}>Generar link de un solo uso</Btn>
          </div>

          <div className="mt-5 pt-4 border-t border-line">
            <SectionTitle kicker="Equipo" title="Usuarios internos" />
            <div className="space-y-2">
              {state.team.map((t) => (
                <div key={t.id} className="flex items-center gap-2.5">
                  <span className="relative w-8 h-8 rounded-lg bg-ink text-paper grid place-items-center font-display font-bold text-[11px]">
                    {t.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                    <span className={\`absolute -right-0.5 -bottom-0.5 w-2.5 h-2.5 rounded-full border-2 border-card \${t.online ? "bg-moss" : "bg-fog"}\`} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[12.5px] font-semibold text-ink leading-tight">{t.name}</div>
                    <div className="text-[10.5px] text-mut">{t.role} · {t.lastActive}</div>
                  </div>
                  <Badge tone={ROLE_META[t.role].tone} className="ml-auto">{t.role}</Badge>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="lg:col-span-3">
          <Card pad={false} className="anim-up">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] min-w-[640px]">
                <thead className="bg-ink/3 border-b border-line">
                  <tr><Th>Acceso</Th><Th>Rol</Th><Th>Uso</Th><Th>Expira</Th><Th>Estado</Th><Th right>Acciones</Th></tr>
                </thead>
                <tbody>
                  {state.accessLinks.map((l) => (
                    <tr key={l.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                      <Td>
                        <div className="font-semibold text-ink leading-tight">{l.label}</div>
                        <div className="font-mono text-[10.5px] text-fog truncate max-w-[220px]">{url(l)}</div>
                        <div className="text-[10.5px] text-mut mt-0.5">{l.scope}</div>
                      </Td>
                      <Td><Badge tone={ROLE_META[l.role].tone}>{ROLE_META[l.role].label}</Badge></Td>
                      <Td className="font-mono num text-mut">{l.uses}/{l.maxUses}</Td>
                      <Td className="text-mut whitespace-nowrap">{fmtDate(l.expiresAt)}</Td>
                      <Td><Badge tone={accTone[l.status]} dot>{l.status}</Badge></Td>
                      <Td right>
                        <div className="flex justify-end gap-1">
                          <Btn size="sm" variant="outline" icon="copy" onClick={async () => { await copyText(url(l)); toast("Link copiado — envíalo por WhatsApp o email"); }} />
                          {l.status === "activo" && <Btn size="sm" variant="oak" icon="play" onClick={() => redeem(l)}>Usar</Btn>}
                          {l.status === "activo" && <Btn size="sm" variant="ghost" icon="x" onClick={() => { dispatch({ type: "REVOKE_ACCESS", id: l.id }); toast("Link revocado", "warn"); }} />}
                        </div>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="mt-3 anim-up">
            <div className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-lg bg-steell text-steel grid place-items-center shrink-0"><Icon name="key" size={16} /></span>
              <div className="text-[12.5px] text-mut leading-relaxed">
                <b className="text-ink">Cómo funciona:</b> el link lleva un token HMAC de un solo uso. Al abrirlo, la API valida vigencia y consumo en Redis (atómico con <span className="font-mono text-[11px]">DECR</span>),
                crea una sesión de 2 horas con el rol asignado y registra el evento en el bus. Si el token ya fue usado o expiró, la puerta se cierra y se notifica a gerencia.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
`,lt=`import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import { copyText, fmtDate, num, timeAgo } from "../lib/util";
import { Badge, Btn, Card, Icon, SectionTitle, Tabs, Td, Th } from "../components/ui";
import { Donut } from "../components/charts";

type CtrlStatus = "ok" | "delegado" | "pendiente";
interface Ctrl { name: string; status: CtrlStatus; note: string; cmd?: string }

const LAYERS: { id: string; title: string; kicker: string; icon: string; ctrls: Ctrl[] }[] = [
  {
    id: "app", title: "Aplicación", kicker: "Sesiones · RBAC · auditoría", icon: "shield",
    ctrls: [
      { name: "Contraseñas Argon2id", status: "pendiente", note: "En la API NestJS (bcrypt → Argon2id).", cmd: "npm i argon2   # en el proyecto /api" },
      { name: "2FA para gerencia y contabilidad", status: "pendiente", note: "TOTP (Google Authenticator) en login sensible.", cmd: "npm i otplib qrcode" },
      { name: "RBAC por roles (6 roles definidos)", status: "ok", note: "vendedor, bodega, contabilidad, taller, cliente, gerencia." },
      { name: "Links de un solo uso firmados (HMAC)", status: "ok", note: "Consumo atómico en Redis · vigencia corta." },
      { name: "Rate limiting de API", status: "pendiente", note: "@nestjs/throttler — 60 req/min por IP.", cmd: "npm i @nestjs/throttler" },
      { name: "Bitácora de acciones (bus de eventos)", status: "ok", note: "Cada acción emite evento auditable." },
    ],
  },
  {
    id: "pagos", title: "Pagos & fiscal", kicker: "PayPhone · SRI", icon: "card",
    ctrls: [
      { name: "Datos de tarjeta fuera del servidor", status: "delegado", note: "PayPhone procesa la tarjeta; alcance PCI = SAQ-A." },
      { name: "Webhooks verificados con firma", status: "delegado", note: "Firma HMAC de PayPhone antes de emitir factura." },
      { name: "Credenciales de producción en variables de entorno", status: "pendiente", note: "Nunca en el código ni en GitHub.", cmd: "nano /var/www/taller-uno/.env   # chmod 600" },
      { name: "Facturación con autorización SRI", status: "ok", note: "Clave de acceso 49 dígitos por comprobante." },
      { name: "Certificado .p12 protegido", status: "ok", note: "Fuera del repo · nota OpenSSL legacy del VPS aplicada." },
    ],
  },
  {
    id: "infra", title: "Infraestructura VPS", kicker: "OVH · hardening SSH", icon: "server",
    ctrls: [
      { name: "TLS con Certbot (HTTPS)", status: "pendiente", note: "Certificado gratis, renovado solo.", cmd: "sudo apt install certbot python3-certbot-nginx\\nsudo certbot --nginx -d erp.tudominio.ec" },
      { name: "Firewall UFW", status: "pendiente", note: "Solo 22, 80 y 443 abiertos.", cmd: "sudo ufw allow 22 && sudo ufw allow 80 && sudo ufw allow 443 && sudo ufw enable" },
      { name: "fail2ban anti fuerza bruta", status: "pendiente", note: "Bloquea IPs tras 5 intentos SSH.", cmd: "sudo apt install fail2ban && sudo systemctl enable --now fail2ban" },
      { name: "SSH sin contraseña (solo llaves)", status: "pendiente", note: "Deshabilita password y root directo.", cmd: "sudo sed -i 's/^#*PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config\\nsudo systemctl restart sshd" },
      { name: "Respaldos diarios cifrados", status: "pendiente", note: "pg_dump a /respaldos + copia externa.", cmd: "0 3 * * * cd /var/www/taller-uno && docker compose exec -T db pg_dump -U taller taller_uno | gzip > /respaldos/taller-$(date +\\\\%F).sql.gz" },
      { name: "Snapshots OVH", status: "delegado", note: "Snapshot semanal desde el panel OVH." },
    ],
  },
  {
    id: "datos", title: "Datos & privacidad", kicker: "LOPDP Ecuador", icon: "users",
    ctrls: [
      { name: "Política de privacidad publicada", status: "pendiente", note: "Obligatoria LOPDP — registro de tratamiento de datos." },
      { name: "Consentimiento en formularios", status: "pendiente", note: "Checkbox en captura de leads y web." },
      { name: "Datos fiscales solo en el VPS", status: "ok", note: "RUC/cédulas nunca salen a repos públicos." },
      { name: "Encriptación en reposo (volumen)", status: "delegado", note: "OVH cifra discos por defecto; verificar en panel." },
    ],
  },
];

const PORTING: { src: string; dest: string; status: "portado" | "parcial" | "falta_codigo" | "no_portar"; note: string }[] = [
  { src: "EstadoPedidoErp / FlujoErp", dest: "OMS · 15 estados + vista del cliente", status: "portado", note: "✓ Verificado contra el código real (repo cadaidea/blthm). Incluye ESTADOS_CLIENTE." },
  { src: "RecibosErp (validación de pagos)", dest: "OMS · Recibos con validación del dueño", status: "portado", note: "✓ Código real leído: el pago no cuenta hasta validarlo; PayPhone se auto-valida." },
  { src: "PedidoItemErp (specs)", dest: "OMS · pestaña Specs (tapiz, lacado, cojines, fotos)", status: "portado", note: "Fotos por campo incluidas." },
  { src: "DespachoErp", dest: "Logística · despachos, rutas, transportistas", status: "portado", note: "Con estados preparación → en ruta → entregado." },
  { src: "CobroSaldo / ResolucionPago", dest: "OMS · saldo + link PayPhone por saldo", status: "parcial", note: "Pendiente leer CobroSaldo.php por límite de lecturas — pegarlo en el chat acelera." },
  { src: "LinksErp / Traza / HistorialPedido", dest: "OMS · link único de confirmación + pestaña Traza", status: "portado", note: "Link de un solo uso con fotos, auditable." },
  { src: "Etiquetas", dest: "Logística · etiquetas de bulto con barcode", status: "portado", note: "Impresión simulada; conectar ZPL real después." },
  { src: "Materiales / VarianteMatch", dest: "BOM & Materiales · BOM unitario + MRP", status: "parcial", note: "Falta VarianteMatch (variantes de tapiz → SKU hijo)." },
  { src: "Sri: XmlFactura + FirmaXades", dest: "Contabilidad + plugin WP bletia-facturacion-sri", status: "portado", note: "El puerto fiel ya vive en WordPress; acá la UI contable." },
  { src: "XmlGuiaRemision / RideGuiaRemision", dest: "Logística · guía de remisión XML + RIDE", status: "portado", note: "Era el pendiente del plugin: acá ya corre." },
  { src: "XmlNotaCredito / AnularFactura", dest: "Contabilidad · NC y anulación", status: "portado", note: "Motor + UI listos (pestaña Facturas & NC)." },
  { src: "Contabilidad / LibroTributario / EstadosFinancieros", dest: "Contabilidad · diario, IVA, facturas SRI", status: "parcial", note: "Faltan libro tributario 101/102 y E/F formales." },
  { src: "Folios", dest: "Secuenciales SRI por estab/ptoEmi", status: "portado", note: "Factura, guía, recibo, despacho y NC con secuencias propias." },
  { src: "ExportadorExcel / ExportErp", dest: "Exportes CSV en OMS y Contabilidad", status: "parcial", note: "CSV con BOM para Excel; xlsx real con la API." },
  { src: "PdfErp / PdfContable / PdfNomina", dest: "RIDE y PDFs", status: "parcial", note: "RIDE simulado; Dompdf/mPDF en el backend real." },
  { src: "PayPhone.php", dest: "Cobros PayPhone", status: "no_portar", note: "Regla 6: se conecta, no se porta." },
  { src: "Digest (newsletter)", dest: "Plugin Digest by Cada Idea", status: "no_portar", note: "Regla 6: ya existe, solo conectar." },
  { src: "Nomina / RolPago / Vacaciones / Indemnización", dest: "—", status: "falta_codigo", note: "Fase 🟢. Los services están en el repo; leer cuando toque." },
  { src: "ChequeTesoreria / ChequesAviso", dest: "—", status: "falta_codigo", note: "Fase 🟢. Tesorería después de contabilidad." },
  { src: "Automatizaciones", dest: "Bus de eventos (base del motor)", status: "parcial", note: "El bus ya orquesta; faltan reglas configurables." },
];

const STATUS_META: Record<CtrlStatus, { label: string; tone: "moss" | "steel" | "brick" }> = {
  ok: { label: "cubierto", tone: "moss" },
  delegado: { label: "delegado", tone: "steel" },
  pendiente: { label: "pendiente", tone: "brick" },
};

export default function Seguridad() {
  const { state, toast } = useStore();
  const [tab, setTab] = useState<"postura" | "porting" | "normativa" | "auditoria">("postura");

  const flat = LAYERS.flatMap((l) => l.ctrls);
  const counts = {
    ok: flat.filter((c) => c.status === "ok").length,
    delegado: flat.filter((c) => c.status === "delegado").length,
    pendiente: flat.filter((c) => c.status === "pendiente").length,
  };
  const cobertura = Math.round(((counts.ok + counts.delegado) / flat.length) * 100);

  const portCounts = useMemo(() => ({
    portado: PORTING.filter((p) => p.status === "portado").length,
    parcial: PORTING.filter((p) => p.status === "parcial").length,
    resto: PORTING.filter((p) => ["falta_codigo", "no_portar"].includes(p.status)).length,
  }), []);

  const audit = useMemo(() => {
    const base = state.accessLinks.map((l) => ({
      ts: l.createdAt,
      icon: l.status === "revocado" ? "x" : "key",
      msg: \`\${l.label} · \${l.status}\`,
      tone: l.status === "revocado" ? "text-brick bg-brickl" : "text-oakd bg-oakl",
    }));
    const pagos = state.orders.flatMap((o) => o.recibos.map((r) => ({
      ts: r.date,
      icon: r.validado ? "check" : "clock",
      msg: \`\${r.code} \${money(r.amount)} · \${r.validado ? "validado" : "esperando validación"} · \${o.customer}\`,
      tone: r.validado ? "text-[#41621f] bg-mossl" : "text-oakd bg-oakl",
    })));
    return [...base, ...pagos].sort((a, b) => b.ts.localeCompare(a.ts)).slice(0, 12);
  }, [state.accessLinks, state.orders]);

  return (
    <div className="space-y-4">
      <div className="anim-up">
        <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Gobierno · auditoría · hardening</div>
        <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Seguridad & cumplimiento</h1>
        <p className="text-[13px] text-mut mt-1 max-w-3xl">
          Postura de seguridad en capas, mapa de porting del ERP BLETIA (leído del repo real), normativa ecuatoriana y auditoría. Sin humo: lo cubierto, lo delegado y lo que falta.
        </p>
      </div>

      <Tabs
        tabs={[
          { id: "postura", label: \`Postura (\${cobertura}%)\` },
          { id: "porting", label: "Porting Laravel → Suite" },
          { id: "normativa", label: "LOPDP · SRI · ¿nivel banco?" },
          { id: "auditoria", label: "Auditoría" },
        ]}
        value={tab} onChange={(t) => setTab(t as typeof tab)}
      />

      {tab === "postura" && (
        <div className="space-y-4 anim-up">
          <Card>
            <div className="flex flex-wrap items-center gap-6">
              <Donut
                slices={[
                  { label: "Cubiertos", value: counts.ok, color: "#19604f" },
                  { label: "Delegados (PayPhone/SRI/OVH)", value: counts.delegado, color: "#38647e" },
                  { label: "Pendientes", value: counts.pendiente, color: "#b0452f" },
                ]}
                centerTop={\`\${cobertura}%\`} centerBottom="cobertura"
              />
              <div className="flex-1 min-w-[260px] text-[12.5px] text-mut leading-relaxed">
                <p><b className="text-ink">Lectura honesta:</b> la suite cubre la capa de aplicación (roles, links de un solo uso, auditoría) y delega lo crítico donde corresponde — <b className="text-ink">tarjetas a PayPhone (PCI-DSS)</b>, <b className="text-ink">validez fiscal al SRI</b> y disponibilidad a OVH.</p>
                <p className="mt-2">Los <b className="text-brick">{counts.pendiente} pendientes</b> son hardening del VPS y 2 controles de la API. Todos traen el comando listo para copiar — una tarde de SSH y la cobertura pasa del {cobertura}% al 100%.</p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            {LAYERS.map((l) => (
              <Card key={l.id}>
                <SectionTitle kicker={l.kicker} title={l.title} right={<span className="w-8 h-8 rounded-lg bg-pinel text-pined grid place-items-center"><Icon name={l.icon} size={15} /></span>} />
                <div className="space-y-2">
                  {l.ctrls.map((c) => (
                    <div key={c.name} className="rounded-lg border border-line p-2.5 hover:border-pine/35 transition-colors">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[12.5px] font-semibold text-ink">{c.name}</span>
                        <Badge tone={STATUS_META[c.status].tone} dot>{STATUS_META[c.status].label}</Badge>
                      </div>
                      <p className="text-[11px] text-mut mt-1">{c.note}</p>
                      {c.cmd && c.status === "pendiente" && (
                        <div className="mt-1.5 rounded-md bg-night px-2.5 py-1.5 flex items-start justify-between gap-2 group">
                          <code className="font-mono text-[10px] text-[#9fd4b8] whitespace-pre-wrap break-all">{c.cmd}</code>
                          <button onClick={() => { copyText(c.cmd!); toast("Comando copiado — pégalo en SSH"); }} className="text-paper/40 hover:text-oakl transition-colors shrink-0 mt-0.5"><Icon name="copy" size={12} /></button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {tab === "porting" && (
        <div className="space-y-4 anim-up">
          <Card>
            <div className="flex flex-wrap items-center gap-3">
              <div>
                <SectionTitle kicker="upgrade.bletia.ec · Laravel 13 + Filament 5 → esta suite" title="Mapa de porting, servicio por servicio" />
                <p className="text-[12.5px] text-mut mt-1 max-w-3xl">
                  <b className="text-ink">Repo real leído:</b> la app completa de Laravel vive en <span className="font-mono text-[11.5px]">github.com/cadaidea/blthm → bletia/</span>. Los servicios con <b className="text-[#41621f]">✓</b> fueron verificados línea por línea contra el código fuente.
                </p>
              </div>
              <div className="ml-auto flex gap-2">
                <Badge tone="moss">{portCounts.portado} portados</Badge>
                <Badge tone="oak">{portCounts.parcial} parciales</Badge>
                <Badge tone="fog">{portCounts.resto} fase 🟢 / no portar</Badge>
              </div>
            </div>
          </Card>

          <Card pad={false}>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] min-w-[820px]">
                <thead className="bg-ink/3 border-b border-line">
                  <tr><Th>Service / modelo en Laravel</Th><Th>Equivalente en la suite</Th><Th>Estado</Th><Th>Qué falta para 100% de fidelidad</Th></tr>
                </thead>
                <tbody>
                  {PORTING.map((p) => (
                    <tr key={p.src} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                      <Td className="font-mono text-[12px] text-ink">{p.src}</Td>
                      <Td className="text-ink">{p.dest}</Td>
                      <Td>
                        <Badge tone={p.status === "portado" ? "moss" : p.status === "parcial" ? "oak" : p.status === "no_portar" ? "steel" : "fog"} dot>
                          {p.status === "portado" ? "portado" : p.status === "parcial" ? "parcial" : p.status === "no_portar" ? "no portar" : "falta código"}
                        </Badge>
                      </Td>
                      <Td className="text-mut text-[12px]">{p.note}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-lg bg-oakl text-oakd grid place-items-center shrink-0"><Icon name="doc" size={16} /></span>
              <div className="text-[12.5px] text-mut leading-relaxed">
                <b className="text-ink">Siguiente lectura (si el límite de peticiones lo permite o me lo pegas aquí):</b> 1) <span className="font-mono text-[11.5px]">CobroSaldo.php</span> (reglas de imputación),
                2) <span className="font-mono text-[11.5px]">Folios.php</span> (prefijos y formatos exactos: OF, DES, ANL, REC), 3) <span className="font-mono text-[11.5px]">FlujoErp.php</span> (guardas de transición).
                El estado y los recibos ya están validados contra <span className="font-mono text-[11.5px]">EstadoPedidoErp.php</span> y <span className="font-mono text-[11.5px]">RecibosErp.php</span>.
              </div>
            </div>
          </Card>
        </div>
      )}

      {tab === "normativa" && (
        <div className="grid lg:grid-cols-2 gap-4 anim-up">
          <Card>
            <SectionTitle kicker="¿Qué significa 'seguro como Banco Pichincha'?" title="La meta correcta no es ser banco" />
            <div className="space-y-2.5 text-[12.5px] text-mut leading-relaxed">
              <p>Un banco opera con <b className="text-ink">PCI-DSS Nivel 1</b> (auditoría anual), <b className="text-ink">HSMs</b> para claves, SOC 24/7 y regulación de la Superintendencia de Bancos. Construir eso cuesta millones — y <b className="text-ink">no te corresponde</b>:</p>
              <div className="space-y-1.5">
                {[
                  ["La seguridad de la tarjeta", "la asume PayPhone (ellos sí cumplen PCI-DSS). Tu link de cobro hereda su blindaje."],
                  ["La validez fiscal del comprobante", "la garantiza el SRI con su autorización; tu sistema la consume."],
                  ["La disponibilidad del datacenter", "la da OVH con snapshots; tú agregas respaldos fuera del VPS."],
                  ["Tu responsabilidad real", "los " + counts.pendiente + " controles pendientes de la Postura + LOPDP + buenas prácticas del stack open source."],
                ].map(([a, b], i) => (
                  <div key={i} className="flex gap-2.5 rounded-lg border border-line p-2.5">
                    <Icon name={i === 3 ? "shield" : "check"} size={14} className={i === 3 ? "text-pine mt-0.5" : "text-moss mt-0.5"} />
                    <p><b className="text-ink">{a}:</b> {b}</p>
                  </div>
                ))}
              </div>
              <p className="rounded-lg bg-pinel/60 border border-pine/20 p-2.5 text-pined">
                <b>Traducción:</b> con PayPhone + SRI + el hardening de la pestaña Postura, tu mueblería cobra con el mismo nivel de seguridad que usa la banca como pasarela — sin necesitar ser banco.
              </p>
            </div>
          </Card>

          <div className="space-y-4">
            <Card>
              <SectionTitle kicker="LOPDP · Ley Orgánica de Protección de Datos" title="Lo que exige Ecuador" />
              <div className="space-y-1.5 text-[12.5px]">
                {[
                  "Registrar el tratamiento de datos personales (clientes y empleados) ante la Superintendencia",
                  "Publicar política de privacidad y aviso en cada formulario",
                  "Consentimiento expreso antes de usar datos para marketing (Digest)",
                  "Derechos ARCO: acceso, rectificación, cancelación y oposición — canal visible",
                  "Notificar incidentes de seguridad en máximo 5 días",
                ].map((x, i) => (
                  <div key={i} className="flex gap-2.5 rounded-lg border border-line p-2.5">
                    <span className="w-5 h-5 rounded-md bg-oakl text-oakd grid place-items-center font-mono text-[10px] font-bold shrink-0">{i + 1}</span>
                    <p className="text-mut"><b className="text-ink">{x.split(":")[0]}</b>{x.includes(":") ? ":" + x.split(":").slice(1).join(":") : ""}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <SectionTitle kicker="SRI" title="Comprobantes que emite la suite" />
              <div className="flex flex-wrap gap-2">
                {["01 · Factura", "04 · Nota de crédito", "05 · Nota de débito", "06 · Guía de remisión", "07 · Comprobante de retención"].map((x) => (
                  <Badge key={x} tone={x.startsWith("01") || x.startsWith("04") || x.startsWith("06") ? "pine" : "fog"}>{x}</Badge>
                ))}
              </div>
              <p className="text-[11.5px] text-mut mt-2.5">Numeración 001-001-secuencial de 9 dígitos y clave de acceso de 49 dígitos — igual que tus secuenciales de Laravel (<span className="font-mono text-[10.5px]">Folios.php</span>).</p>
            </Card>
          </div>
        </div>
      )}

      {tab === "auditoria" && (
        <div className="grid lg:grid-cols-3 gap-4 anim-up">
          <Card className="lg:col-span-2" pad={false}>
            <div className="p-4"><SectionTitle kicker="Eventos de seguridad y pagos" title="Trazabilidad reciente" /></div>
            <div className="px-2 pb-3 space-y-1">
              {audit.map((a, i) => (
                <div key={i} className="anim-feed flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-ink/3">
                  <span className={\`w-8 h-8 rounded-lg grid place-items-center shrink-0 \${a.tone}\`}><Icon name={a.icon} size={14} /></span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[12.5px] text-ink leading-snug truncate">{a.msg}</div>
                    <div className="text-[10.5px] font-mono text-fog mt-0.5">{fmtDate(a.ts)} · {timeAgo(new Date(a.ts).getTime())}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <div className="space-y-4">
            <Card>
              <SectionTitle kicker="Sesión" title="Bus de eventos" />
              <div className="space-y-2 text-[12.5px]">
                <div className="flex justify-between"><span className="text-mut">Eventos procesados</span><b className="font-mono text-ink num">{num(state.session.events)}</b></div>
                <div className="flex justify-between"><span className="text-mut">Pico sostenido</span><b className="font-mono text-ink num">{num(state.session.peakEps)} ev/s</b></div>
                <div className="flex justify-between"><span className="text-mut">Inicio de sesión</span><span className="font-mono text-mut">{new Date(state.session.startedAt).toLocaleTimeString("es-EC")}</span></div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-brickl text-brick grid place-items-center shrink-0"><Icon name="alert" size={16} /></span>
                <p className="text-[12px] text-mut leading-relaxed">
                  <b className="text-ink">Demo funcional, no producción:</b> los datos viven en este navegador. Antes de lanzar, completar los {counts.pendiente} controles pendientes y desplegar el stack de Ajustes con PostgreSQL.
                </p>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

function money(n: number, cents = true) {
  return "$" + n.toLocaleString("es-EC", { minimumFractionDigits: cents ? 2 : 0, maximumFractionDigits: cents ? 2 : 0 });
}
`,ct=`import { useState } from "react";
import { useStore } from "../lib/store";
import { copyText } from "../lib/util";
import { Badge, Btn, Card, Field, Icon, Input, SectionTitle, Select } from "../components/ui";

const STACK = [
  { n: "React 18 + Vite", l: "MIT", role: "Frontend (este panel)" },
  { n: "Node.js + NestJS", l: "MIT", role: "API REST + workers del bus" },
  { n: "PostgreSQL 16", l: "PostgreSQL", role: "Datos maestros y contables" },
  { n: "Redis 7", l: "BSD-3", role: "Bus de eventos + tokens de un solo uso" },
  { n: "Nginx + Certbot", l: "BSD / Apache-2.0", role: "Proxy inverso + SSL gratis" },
  { n: "Docker Compose", l: "Apache-2.0", role: "Orquestación en el VPS" },
];

function Cmd({ title, cmd }: { title: string; cmd: string }) {
  return (
    <div className="rounded-lg overflow-hidden border border-paper/10">
      <div className="flex items-center justify-between bg-night2 px-3 py-1.5">
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-paper/40">{title}</span>
        <button onClick={() => copyText(cmd)} className="text-paper/50 hover:text-oakl transition-colors"><Icon name="copy" size={13} /></button>
      </div>
      <pre className="bg-night text-[11.5px] leading-relaxed font-mono text-[#9fd4b8] p-3 overflow-x-auto whitespace-pre">{cmd}</pre>
    </div>
  );
}

export default function Ajustes() {
  const { state, dispatch, toast } = useStore();
  const [co, setCo] = useState({ ...state.settings.company });
  const [pp, setPp] = useState({ ...state.settings.payphone });

  const saveCo = () => { dispatch({ type: "SETTINGS", patch: { company: co } }); toast("Datos de la empresa guardados"); };
  const savePp = () => { dispatch({ type: "SETTINGS", patch: { payphone: pp } }); toast(pp.mode === "sandbox" ? "Credenciales sandbox guardadas" : "¡Cuidado! credenciales de producción activas", pp.mode === "sandbox" ? "ok" : "warn"); };
  const reset = () => { localStorage.removeItem("taller-uno-v3"); location.reload(); };

  const bajarZip = async () => {
    toast("Empaquetando 38 archivos + guías de despliegue…", "info");
    const { exportProjectZip } = await import("../lib/projectFiles");
    await exportProjectZip(state);
    toast("taller-uno.zip descargado — súbelo al VPS por File Manager");
  };
  const bajarDatos = async () => {
    const { exportDataJson } = await import("../lib/projectFiles");
    exportDataJson(state);
    toast("Datos exportados en JSON — llévalos a producción vía importador");
  };

  return (
    <div className="space-y-4">
      <div className="anim-up">
        <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Plataforma</div>
        <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Ajustes, integraciones y despliegue</h1>
      </div>

      {/* entrega del proyecto */}
      <div className="grid lg:grid-cols-2 gap-4">
        <Card className="anim-up hover:shadow-md transition-shadow">
          <SectionTitle kicker="Tu flujo: File Manager → SSH" title="Paquete de entrega (.zip)" />
          <div className="space-y-3">
            <div className="rounded-xl bg-night p-4 flex items-center justify-between gap-3">
              <div>
                <div className="font-mono text-[12.5px] text-oakl">taller-uno.zip</div>
                <div className="text-[11px] text-paper/50 mt-0.5">38 archivos de código real · ~450 KB comprimido</div>
              </div>
              <span className="w-11 h-11 rounded-xl bg-pined text-oakl grid place-items-center shrink-0"><Icon name="package" size={20} /></span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11.5px]">
              <div className="rounded-lg border border-line p-2.5">
                <div className="text-[9.5px] uppercase tracking-wider font-bold text-[#41621f] mb-1">✓ Incluye</div>
                <ul className="text-mut space-y-0.5 leading-relaxed">
                  <li>src/ completo (los 13 módulos)</li>
                  <li>package.json · vite · tailwind</li>
                  <li>docker-compose.yml + nginx.conf</li>
                  <li>deploy/comandos-ssh.txt (paso a paso)</li>
                  <li>deploy/datos-demo.json (tus datos)</li>
                </ul>
              </div>
              <div className="rounded-lg border border-line p-2.5">
                <div className="text-[9.5px] uppercase tracking-wider font-bold text-brick mb-1">✗ No incluye (correcto)</div>
                <ul className="text-mut space-y-0.5 leading-relaxed">
                  <li>node_modules — se crea con npm install</li>
                  <li>Base de datos — vive en el VPS</li>
                  <li>dist/ — se genera con npm run build</li>
                  <li>Credenciales reales — van en .env</li>
                </ul>
              </div>
            </div>
            <Btn className="w-full" icon="dl" onClick={bajarZip}>Descargar taller-uno.zip</Btn>
            <p className="text-[11px] text-fog leading-relaxed">
              El ZIP se genera con el <b>código tal como está corriendo ahora</b>. Lo subes al VPS por File Manager y aplicas
              los comandos de <span className="font-mono">deploy/comandos-ssh.txt</span> — actualización sin pérdida de datos en ~2 segundos.
            </p>
          </div>
        </Card>

        <Card className="anim-up hover:shadow-md transition-shadow">
          <SectionTitle kicker="Pregunta clave" title="¿Dónde vive la base de datos?" />
          <div className="space-y-2.5">
            <div className="rounded-lg border border-line p-3 flex items-start gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-steell text-steel grid place-items-center shrink-0"><Icon name="panel" size={15} /></span>
              <div className="text-[12px] text-mut leading-relaxed">
                <b className="text-ink">Aquí (demo):</b> tus datos viven en el navegador (localStorage). Funcional y persistente en tu máquina — <b className="text-brick">no</b> es donde deben vivir en producción.
              </div>
            </div>
            <div className="rounded-lg border border-pine/25 bg-pinel/40 p-3 flex items-start gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-pinel text-pined grid place-items-center shrink-0"><Icon name="server" size={15} /></span>
              <div className="text-[12px] text-pined leading-relaxed">
                <b>En el VPS:</b> <span className="font-mono text-[11px]">docker compose up -d</span> crea PostgreSQL 16 con el volumen <span className="font-mono text-[11px]">datos_pg</span>. Al re-subir un .zip nuevo, <b>solo cambia el código — la base jamás se toca</b>. Ahí está garantizado lo de "los trabajadores ni se dan cuenta".
              </div>
            </div>
            <div className="rounded-lg border border-line p-3 flex items-start gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-oakl text-oakd grid place-items-center shrink-0"><Icon name="arrow" size={15} /></span>
              <div className="text-[12px] text-mut leading-relaxed">
                <b className="text-ink">El puente:</b> exporta tus datos de la demo ahora y cárgalos en producción cuando conectemos la API NestJS.
              </div>
            </div>
            <div className="flex gap-2 pt-1">
              <Btn variant="outline" icon="dl" className="flex-1" onClick={bajarDatos}>Exportar mis datos (JSON)</Btn>
              <Btn variant="ghost" icon="refresh" onClick={() => { if (confirm("¿Restablecer la demo a los datos de fábrica? Tus cambios locales se pierden.")) reset(); }}>Reset demo</Btn>
            </div>
          </div>
        </Card>
      </div>

      {/* github */}
      <Card className="anim-up">
        <SectionTitle kicker="cadaidea/blthm · carpeta bletia/ = tu baúl Laravel" title="Flujo GitHub + VPS OVH" right={<Badge tone="moss" dot>repo verificado</Badge>} />
        <div className="grid md:grid-cols-3 gap-3">
          <Cmd title="1 · En tu PC — primer push" cmd={\`git init\\ngit add -A\\ngit commit -m "v2.1 suite mueblera"\\ngit remote add origin git@github.com:TU-USUARIO/taller-uno.git\\ngit push -u origin main\`} />
          <Cmd title="2 · VPS — clonar una sola vez" cmd={\`ssh root@vps-xxxx.ovh.net\\ncd /var/www\\ngit clone git@github.com:TU-USUARIO/taller-uno.git\\ncd taller-uno && npm install && npm run build\\ndocker compose up -d\`} />
          <Cmd title="3 · VPS — actualizar (rutina)" cmd={\`cd /var/www/taller-uno\\ngit pull\\nnpm install && npm run build\\ndocker compose restart web\\n# ~2 segundos · datos intactos\`} />
        </div>
        <p className="text-[11.5px] text-fog mt-3">
          Cada entrega = commit + tag (<span className="font-mono">v2.1</span>). Rollback: <span className="font-mono">git checkout v2.0 && npm run build</span>. El ZIP queda como plan B offline.
        </p>
      </Card>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card className="anim-up">
          <SectionTitle kicker="Domicilio fiscal · Ecuador" title="Datos de la empresa" />
          <div className="space-y-3">
            <Field label="Razón social"><Input value={co.name} onChange={(e) => setCo({ ...co, name: e.target.value })} /></Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="RUC (13 dígitos)"><Input value={co.ruc} onChange={(e) => setCo({ ...co, ruc: e.target.value })} className="font-mono" /></Field>
              <Field label="Teléfono"><Input value={co.phone} onChange={(e) => setCo({ ...co, phone: e.target.value })} /></Field>
            </div>
            <Field label="Dirección fiscal"><Input value={co.address} onChange={(e) => setCo({ ...co, address: e.target.value })} /></Field>
            <Field label="Email (facturación electrónica)"><Input value={co.email} onChange={(e) => setCo({ ...co, email: e.target.value })} /></Field>
            <div className="flex justify-end"><Btn icon="check" onClick={saveCo}>Guardar cambios</Btn></div>
          </div>
        </Card>

        <Card className="anim-up">
          <SectionTitle kicker="Pasarela de pagos" title="Credenciales PayPhone" right={<Badge tone={pp.mode === "sandbox" ? "oak" : "brick"} dot>{pp.mode}</Badge>} />
          <div className="space-y-3">
            <Field label="Modo de operación">
              <Select value={pp.mode} onChange={(e) => setPp({ ...pp, mode: e.target.value as "sandbox" | "produccion" })}>
                <option value="sandbox">Sandbox (pruebas sin dinero real)</option>
                <option value="produccion">Producción (cobros reales)</option>
              </Select>
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Shop ID"><Input value={pp.shopId} onChange={(e) => setPp({ ...pp, shopId: e.target.value })} className="font-mono" /></Field>
              <Field label="Terminal ID"><Input value={pp.terminalId} onChange={(e) => setPp({ ...pp, terminalId: e.target.value })} className="font-mono" /></Field>
            </div>
            <Field label="Token de integración"><Input value={pp.token} onChange={(e) => setPp({ ...pp, token: e.target.value })} className="font-mono" /></Field>
            <Field label="Base de links de cobro"><Input value={state.settings.linkBase} readOnly className="font-mono text-mut" /></Field>
            <div className="flex items-center justify-between">
              <p className="text-[11px] text-fog max-w-[240px]">Webhooks verificados con firma HMAC antes de emitir la factura.</p>
              <Btn icon="check" onClick={savePp}>Guardar</Btn>
            </div>
          </div>
        </Card>
      </div>

      <Card className="anim-up">
        <SectionTitle kicker="100% open source · costo de licencias $0" title="Stack de la plataforma" right={<Badge tone="moss">auditado</Badge>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {STACK.map((s) => (
            <div key={s.n} className="rounded-lg border border-line px-3 py-2.5 hover:border-pine/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12.5px] font-semibold text-ink">{s.n}</span>
                <Badge tone="pine">{s.l}</Badge>
              </div>
              <div className="text-[11.5px] text-mut mt-1">{s.role}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="anim-up" pad={false}>
        <div className="p-4">
          <SectionTitle kicker="VPS OVHcloud · actualizaciones sin perder datos" title="Guía de despliegue (copiar y pegar en SSH)" right={<Badge tone="steel">zero-downtime</Badge>} />
          <div className="grid md:grid-cols-2 gap-3">
            <Cmd title="1 · Subir el release al VPS (File Manager o scp)" cmd={\`scp taller-uno.zip root@vps-xxxx.ovh.net:/var/www/\`} />
            <Cmd title="2 · En el VPS — desplegar sin tocar los datos" cmd={\`ssh root@vps-xxxx.ovh.net\\ncd /var/www\\nunzip -o taller-uno.zip -d taller-uno\\ncd taller-uno && npm install && npm run build\\ndocker compose up -d --build --no-deps web\\ndocker image prune -f\`} />
            <Cmd title="3 · Primera vez — crear la base (volumen persistente)" cmd={\`docker compose up -d db redis\\n# PostgreSQL 16 + Redis 7 en volúmenes\\ndocker compose exec -T db pg_dump -U taller taller_uno > /dev/null  # smoke test\`} />
            <Cmd title="4 · Respaldo automático (cron diario 03:00)" cmd={\`crontab -e\\n0 3 * * * cd /var/www/taller-uno && docker compose exec -T db \\\\\\n  pg_dump -U taller taller_uno | gzip > /respaldos/taller-$(date +\\\\%F).sql.gz\`} />
          </div>
          <div className="grid md:grid-cols-3 gap-3 mt-4">
            <div className="rounded-lg bg-pinel/60 border border-pine/20 p-3">
              <div className="flex items-center gap-2 text-pined font-bold text-[12.5px]"><Icon name="warehouse" size={14} />Datos intactos</div>
              <p className="text-[11.5px] text-pined/80 mt-1">La base vive en el volumen <span className="font-mono text-[10.5px]">datos_pg</span>; el .zip solo pisa código.</p>
            </div>
            <div className="rounded-lg bg-oakl/70 border border-oak/25 p-3">
              <div className="flex items-center gap-2 text-oakd font-bold text-[12.5px]"><Icon name="clock" size={14} />Corte ~2 segundos</div>
              <p className="text-[11.5px] text-oakd/80 mt-1">Solo se reinicia el contenedor web. Ni clientes ni trabajadores lo notan.</p>
            </div>
            <div className="rounded-lg bg-steell border border-steel/25 p-3">
              <div className="flex items-center gap-2 text-steel font-bold text-[12.5px]"><Icon name="refresh" size={14} />Rollback en 30 s</div>
              <p className="text-[11.5px] text-steel/80 mt-1">Guarda el .zip anterior: <span className="font-mono text-[10.5px]">unzip + build + restart</span>.</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
`,pt=`# TALLER UNO — Suite de gestión para mueblería (Ecuador)

ERP · CRM · PIM · OMS · MES · DAM · Contabilidad · Cobros PayPhone · Facturación SRI
Puerto del ERP BLETIA (upgrade.bletia.ec / github.com/cadaidea/blthm → bletia/):
máquina de 15 estados con vista del cliente, validación de pagos por el dueño,
specs de personalización con fotos, guías de remisión SRI y BOM + MRP.

## Stack (100% open source)
- React 18 + Vite + Tailwind CSS 4 (este panel)
- Node 20 + NestJS (API REST + workers) — capa a conectar en producción
- PostgreSQL 16 · Redis 7 · Nginx + Certbot · Docker Compose

## Correr en desarrollo
    npm install
    npm run dev        # http://localhost:3000

## Compilar para producción
    npm run build      # genera ./dist

## Despliegue en VPS (File Manager + SSH)
    Ver deploy/comandos-ssh.txt — paso a paso exacto.

## ¿Dónde está la base de datos?
- El ZIP NO contiene base de datos (correcto: la base vive en el servidor).
- La demo persiste en el navegador (localStorage).
- En el VPS, 'docker compose up -d' crea PostgreSQL con volumen persistente
  ('datos_pg'): actualizar el código NUNCA borra los datos.

## Licencias
MIT (React, Vite, NestJS) · BSD (Redis, Nginx) · PostgreSQL License · Apache-2.0 (Docker, Tailwind)
`,ut=`# TALLER UNO · orquestación del VPS
# La base vive en el volumen 'datos_pg' — actualizar código no toca los datos.
services:
  web:
    image: nginx:1.27-alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./dist:/usr/share/nginx/html:ro
      - ./deploy/nginx.conf:/etc/nginx/conf.d/default.conf:ro
    depends_on:
      - db
      - redis

  db:
    image: postgres:16-alpine
    restart: unless-stopped
    environment:
      POSTGRES_USER: taller
      POSTGRES_PASSWORD: \${DB_PASSWORD:-cambiar-antes-de-produccion}
      POSTGRES_DB: taller_uno
    volumes:
      - datos_pg:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    restart: unless-stopped
    command: redis-server --appendonly yes
    volumes:
      - datos_redis:/data

volumes:
  datos_pg:
  datos_redis:
`,mt=`server {
    listen 80;
    server_name erp.tudominio.ec;   # ← cambia a tu dominio

    root /usr/share/nginx/html;
    index index.html;

    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
`,gt=`══════════════════════════════════════════════════════════════
 TALLER UNO · GUÍA DE DESPLIEGUE — File Manager + SSH (VPS OVH)
══════════════════════════════════════════════════════════════

1) EN EL FILE MANAGER DEL VPS
   ─ Sube taller-uno.zip a /var/www

2) POR SSH — PRIMERA INSTALACIÓN (solo una vez)
   cd /var/www
   sudo apt update && sudo apt install -y unzip docker.io docker-compose-plugin
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs
   unzip -o taller-uno.zip -d taller-uno && cd taller-uno
   npm install
   npm run build
   docker compose up -d

3) ACTUALIZACIÓN SIN PERDER DATOS (tu rutina habitual)
   cd /var/www/taller-uno
   unzip -o ../taller-uno.zip -d .
   npm install && npm run build
   docker compose restart web
   → La base NUNCA se toca: vive en el volumen 'datos_pg'.

4) RESPALDO DIARIO (cron)
   0 3 * * * cd /var/www/taller-uno && docker compose exec -T db pg_dump -U taller taller_uno | gzip > /respaldos/taller-$(date +\\%F).sql.gz

5) FLUJO GITHUB (recomendado)
   git init && git add -A && git commit -m "v2.1 suite mueblera"
   git remote add origin git@github.com:TU-USUARIO/taller-uno.git && git push -u origin main
   En el VPS: git clone y para actualizar: git pull && npm i && npm run build

¿Y LA BASE DE DATOS?
   ─ El ZIP NO la incluye (correcto: vive en el servidor, no viaja).
   ─ La demo guardó tus datos en deploy/datos-demo.json.
   ─ PostgreSQL se crea sola con 'docker compose up -d' (volumen datos_pg).
`,ft=`node_modules/
dist/
.env
*.zip
/respaldos/
.DS_Store
`,ht=[["package.json",Me],["index.html",Re],["vite.config.js",ze],["tsconfig.json",Le],[".gitignore",ft],["src/main.tsx",Fe],["src/App.tsx",je],["src/index.css",$e],["src/vite-env.d.ts",qe],["src/lib/types.ts",Ue],["src/lib/util.ts",Ve],["src/lib/seed.ts",Ge],["src/lib/store.tsx",We],["src/lib/projectFiles.ts",He],["src/components/ui.tsx",Ze],["src/components/charts.tsx",Ke],["src/components/Img.tsx",Qe],["src/components/Shell.tsx",Je],["src/views/Dashboard.tsx",Ye],["src/views/Productos.tsx",Xe],["src/views/Operaciones.tsx",et],["src/views/Terceros.tsx",tt],["src/views/Taller.tsx",nt],["src/views/Materiales.tsx",at],["src/views/Logistica.tsx",ot],["src/views/Cobros.tsx",st],["src/views/Dam.tsx",it],["src/views/Contabilidad.tsx",rt],["src/views/Accesos.tsx",dt],["src/views/Seguridad.tsx",lt],["src/views/Ajustes.tsx",ct]],Ie=(ue,ge)=>{const h=URL.createObjectURL(ue),R=document.createElement("a");R.href=h,R.download=ge,document.body.appendChild(R),R.click(),document.body.removeChild(R),setTimeout(()=>URL.revokeObjectURL(h),3e3)},bt=async ue=>{const ge=new Oe,h=ge.folder("taller-uno");h.file("README.md",pt),h.file("docker-compose.yml",ut),h.folder("deploy").file("nginx.conf",mt),h.folder("deploy").file("comandos-ssh.txt",gt),h.folder("deploy").file("datos-demo.json",JSON.stringify(ue,null,2));for(const[c,r]of ht)h.file(c,r);const R=await ge.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:8}}),w=new Date().toISOString().slice(0,10);Ie(R,`taller-uno-${w}.zip`)},xt=ue=>{const ge=new Blob([JSON.stringify(ue,null,2)],{type:"application/json"});Ie(ge,`taller-uno-datos-${new Date().toISOString().slice(0,10)}.json`)};export{xt as exportDataJson,bt as exportProjectZip};
