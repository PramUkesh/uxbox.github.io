// Compiled by ClojureScript 0.0-3308 {}
goog.provide('hodgepodge.core');
goog.require('cljs.core');
goog.require('cljs.reader');
hodgepodge.core.local_storage = localStorage;
hodgepodge.core.session_storage = sessionStorage;
hodgepodge.core.contains_key_QMARK_ = (function hodgepodge$core$contains_key_QMARK_(storage,key){
var ks = Object.keys(storage);
var idx = ks.indexOf(key);
return (idx >= (0));
});
hodgepodge.core.get_item = (function hodgepodge$core$get_item(){
var G__29382 = arguments.length;
switch (G__29382) {
case 2:
return hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$2 = (function (storage,key){
return hodgepodge.core.get_item.call(null,storage,key,null);
});

hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$3 = (function (storage,key,default$){
if(cljs.core.truth_(hodgepodge.core.contains_key_QMARK_.call(null,storage,key))){
return storage.getItem(key);
} else {
return default$;
}
});

hodgepodge.core.get_item.cljs$lang$maxFixedArity = 3;
hodgepodge.core.set_item = (function hodgepodge$core$set_item(storage,key,val){
return storage.setItem(key,val);
});
hodgepodge.core.remove_item = (function hodgepodge$core$remove_item(storage,key){
return storage.removeItem(key);
});
hodgepodge.core.length = (function hodgepodge$core$length(storage){
return storage.length;
});
hodgepodge.core.clear_BANG_ = (function hodgepodge$core$clear_BANG_(storage){
return storage.clear();
});
hodgepodge.core.serialize = (function hodgepodge$core$serialize(v){
var _STAR_print_dup_STAR_29386 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_readably_STAR_29387 = cljs.core._STAR_print_readably_STAR_;
cljs.core._STAR_print_dup_STAR_ = true;

cljs.core._STAR_print_readably_STAR_ = true;

try{return cljs.core.pr_str.call(null,v);
}finally {cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_29387;

cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR_29386;
}});
hodgepodge.core.deserialize = cljs.core.memoize.call(null,cljs.reader.read_string);
Storage.prototype.cljs$core$ICounted$ = true;

Storage.prototype.cljs$core$ICounted$_count$arity$1 = (function (s){
var s__$1 = this;
return hodgepodge.core.length.call(null,s__$1);
});

Storage.prototype.cljs$core$ITransientAssociative$ = true;

Storage.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (s,key,val){
var s__$1 = this;
return hodgepodge.core.set_item.call(null,s__$1,hodgepodge.core.serialize.call(null,key),hodgepodge.core.serialize.call(null,val));
});

Storage.prototype.cljs$core$ITransientCollection$ = true;

Storage.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (s,kv){
var s__$1 = this;
return cljs.core.assoc_BANG_.call(null,s__$1,cljs.core.key.call(null,kv),cljs.core.val.call(null,kv));
});

Storage.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18891__auto__ = ((function (s__$1){
return (function hodgepodge$core$iter__29388(s__29389){
return (new cljs.core.LazySeq(null,((function (s__$1){
return (function (){
var s__29389__$1 = s__29389;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29389__$1);
if(temp__4425__auto__){
var s__29389__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29389__$2)){
var c__18889__auto__ = cljs.core.chunk_first.call(null,s__29389__$2);
var size__18890__auto__ = cljs.core.count.call(null,c__18889__auto__);
var b__29391 = cljs.core.chunk_buffer.call(null,size__18890__auto__);
if((function (){var i__29390 = (0);
while(true){
if((i__29390 < size__18890__auto__)){
var i = cljs.core._nth.call(null,c__18889__auto__,i__29390);
var k = s__$1.key(i);
var v = hodgepodge.core.get_item.call(null,s__$1,k);
cljs.core.chunk_append.call(null,b__29391,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hodgepodge.core.deserialize.call(null,k),hodgepodge.core.deserialize.call(null,v)], null));

var G__29392 = (i__29390 + (1));
i__29390 = G__29392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29391),hodgepodge$core$iter__29388.call(null,cljs.core.chunk_rest.call(null,s__29389__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29391),null);
}
} else {
var i = cljs.core.first.call(null,s__29389__$2);
var k = s__$1.key(i);
var v = hodgepodge.core.get_item.call(null,s__$1,k);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hodgepodge.core.deserialize.call(null,k),hodgepodge.core.deserialize.call(null,v)], null),hodgepodge$core$iter__29388.call(null,cljs.core.rest.call(null,s__29389__$2)));
}
} else {
return null;
}
break;
}
});})(s__$1))
,null,null));
});})(s__$1))
;
return iter__18891__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,s__$1)));
})());
});

Storage.prototype.cljs$core$ITransientMap$ = true;

Storage.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (s,key){
var s__$1 = this;
return hodgepodge.core.remove_item.call(null,s__$1,hodgepodge.core.serialize.call(null,key));
});

Storage.prototype.cljs$core$ILookup$ = true;

Storage.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (s,key){
var s__$1 = this;
return cljs.core._lookup.call(null,s__$1,key,null);
});

Storage.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (s,key,not_found){
var s__$1 = this;
var sk = hodgepodge.core.serialize.call(null,key);
if(cljs.core.truth_(hodgepodge.core.contains_key_QMARK_.call(null,s__$1,sk))){
return hodgepodge.core.deserialize.call(null,hodgepodge.core.get_item.call(null,s__$1,sk));
} else {
return not_found;
}
});

//# sourceMappingURL=core.js.map?rel=1437028488149