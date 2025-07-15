import * as vn from "react";
import b, { Children as Df, PureComponent as hb, Component as We, createRef as kr, isValidElement as gb, cloneElement as mb, useContext as ct, useLayoutEffect as EC, useEffect as Mf, useMemo as Qr, useReducer as wC, useRef as gl, useState as SC } from "react";
import * as pm from "react-dom";
import { createPortal as _C, unstable_batchedUpdates as OC } from "react-dom";
function Da(e, t) {
  if (e == null)
    return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1)
        continue;
      r[n] = e[n];
    }
  return r;
}
var Nr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ct(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function TC(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var ml = { exports: {} }, Ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hm;
function xC() {
  if (hm)
    return Ge;
  hm = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
  function k(N) {
    if (typeof N == "object" && N !== null) {
      var F = N.$$typeof;
      switch (F) {
        case t:
          switch (N = N.type, N) {
            case f:
            case p:
            case n:
            case s:
            case i:
            case m:
              return N;
            default:
              switch (N = N && N.$$typeof, N) {
                case u:
                case h:
                case O:
                case w:
                case l:
                  return N;
                default:
                  return F;
              }
          }
        case r:
          return F;
      }
    }
  }
  function U(N) {
    return k(N) === p;
  }
  return Ge.AsyncMode = f, Ge.ConcurrentMode = p, Ge.ContextConsumer = u, Ge.ContextProvider = l, Ge.Element = t, Ge.ForwardRef = h, Ge.Fragment = n, Ge.Lazy = O, Ge.Memo = w, Ge.Portal = r, Ge.Profiler = s, Ge.StrictMode = i, Ge.Suspense = m, Ge.isAsyncMode = function(N) {
    return U(N) || k(N) === f;
  }, Ge.isConcurrentMode = U, Ge.isContextConsumer = function(N) {
    return k(N) === u;
  }, Ge.isContextProvider = function(N) {
    return k(N) === l;
  }, Ge.isElement = function(N) {
    return typeof N == "object" && N !== null && N.$$typeof === t;
  }, Ge.isForwardRef = function(N) {
    return k(N) === h;
  }, Ge.isFragment = function(N) {
    return k(N) === n;
  }, Ge.isLazy = function(N) {
    return k(N) === O;
  }, Ge.isMemo = function(N) {
    return k(N) === w;
  }, Ge.isPortal = function(N) {
    return k(N) === r;
  }, Ge.isProfiler = function(N) {
    return k(N) === s;
  }, Ge.isStrictMode = function(N) {
    return k(N) === i;
  }, Ge.isSuspense = function(N) {
    return k(N) === m;
  }, Ge.isValidElementType = function(N) {
    return typeof N == "string" || typeof N == "function" || N === n || N === p || N === s || N === i || N === m || N === v || typeof N == "object" && N !== null && (N.$$typeof === O || N.$$typeof === w || N.$$typeof === l || N.$$typeof === u || N.$$typeof === h || N.$$typeof === _ || N.$$typeof === A || N.$$typeof === M || N.$$typeof === T);
  }, Ge.typeOf = k, Ge;
}
var Qe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gm;
function PC() {
  return gm || (gm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
    function k(ee) {
      return typeof ee == "string" || typeof ee == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      ee === n || ee === p || ee === s || ee === i || ee === m || ee === v || typeof ee == "object" && ee !== null && (ee.$$typeof === O || ee.$$typeof === w || ee.$$typeof === l || ee.$$typeof === u || ee.$$typeof === h || ee.$$typeof === _ || ee.$$typeof === A || ee.$$typeof === M || ee.$$typeof === T);
    }
    function U(ee) {
      if (typeof ee == "object" && ee !== null) {
        var ht = ee.$$typeof;
        switch (ht) {
          case t:
            var ne = ee.type;
            switch (ne) {
              case f:
              case p:
              case n:
              case s:
              case i:
              case m:
                return ne;
              default:
                var Yt = ne && ne.$$typeof;
                switch (Yt) {
                  case u:
                  case h:
                  case O:
                  case w:
                  case l:
                    return Yt;
                  default:
                    return ht;
                }
            }
          case r:
            return ht;
        }
      }
    }
    var N = f, F = p, x = u, $ = l, I = t, B = h, V = n, X = O, W = w, se = r, _e = s, Oe = i, Te = m, ze = !1;
    function Ze(ee) {
      return ze || (ze = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), K(ee) || U(ee) === f;
    }
    function K(ee) {
      return U(ee) === p;
    }
    function J(ee) {
      return U(ee) === u;
    }
    function we(ee) {
      return U(ee) === l;
    }
    function ge(ee) {
      return typeof ee == "object" && ee !== null && ee.$$typeof === t;
    }
    function fe(ee) {
      return U(ee) === h;
    }
    function Se(ee) {
      return U(ee) === n;
    }
    function he(ee) {
      return U(ee) === O;
    }
    function xe(ee) {
      return U(ee) === w;
    }
    function Pe(ee) {
      return U(ee) === r;
    }
    function Ae(ee) {
      return U(ee) === s;
    }
    function Ne(ee) {
      return U(ee) === i;
    }
    function re(ee) {
      return U(ee) === m;
    }
    Qe.AsyncMode = N, Qe.ConcurrentMode = F, Qe.ContextConsumer = x, Qe.ContextProvider = $, Qe.Element = I, Qe.ForwardRef = B, Qe.Fragment = V, Qe.Lazy = X, Qe.Memo = W, Qe.Portal = se, Qe.Profiler = _e, Qe.StrictMode = Oe, Qe.Suspense = Te, Qe.isAsyncMode = Ze, Qe.isConcurrentMode = K, Qe.isContextConsumer = J, Qe.isContextProvider = we, Qe.isElement = ge, Qe.isForwardRef = fe, Qe.isFragment = Se, Qe.isLazy = he, Qe.isMemo = xe, Qe.isPortal = Pe, Qe.isProfiler = Ae, Qe.isStrictMode = Ne, Qe.isSuspense = re, Qe.isValidElementType = k, Qe.typeOf = U;
  }()), Qe;
}
var mm;
function eu() {
  return mm || (mm = 1, process.env.NODE_ENV === "production" ? ml.exports = xC() : ml.exports = PC()), ml.exports;
}
var AC = eu();
function Yd(e, t) {
  return Yd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Yd(e, t);
}
function dt(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Yd(e, t);
}
var Xr = function(t, r) {
  if (process.env.NODE_ENV !== "production" && typeof t == "string")
    throw new Error("We do not support refs as string, this is a legacy API and will be likely to be removed in one of the future releases of React.");
  if (typeof t == "function") {
    t(r);
    return;
  }
  t !== null && typeof t == "object" && (t.current = r);
}, vm = function(t) {
  return (
    // https://github.com/facebook/react/blob/v16.8.2/packages/react-reconciler/src/ReactFiberCommitWork.js#L665
    t !== null && typeof t == "object" && t.hasOwnProperty("current")
  );
};
function ym(e) {
  return e === null || e instanceof Element || e instanceof Text ? !1 : !!(e.type && e.tag);
}
var CC = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.prevNode = void 0, n;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    var i = pm.findDOMNode(this);
    process.env.NODE_ENV !== "production" && ym(i) && (i = null), this.prevNode = i, Xr(this.props.innerRef, i);
  }, r.componentDidUpdate = function(i) {
    var s = pm.findDOMNode(this);
    process.env.NODE_ENV !== "production" && ym(s) && (s = null), this.prevNode !== s && (this.prevNode = s, Xr(this.props.innerRef, s)), i.innerRef !== this.props.innerRef && Xr(this.props.innerRef, s);
  }, r.componentWillUnmount = function() {
    Xr(this.props.innerRef, null), delete this.prevNode;
  }, r.render = function() {
    var i = this.props.children;
    return i;
  }, t;
}(vn.Component), $C = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.currentNode = void 0, n.handleRefOverride = function(u) {
      var f = n.props, p = f.children, h = f.innerRef;
      Xr(p.ref, u), Xr(h, u), n.currentNode = u;
    }, n;
  }
  var r = t.prototype;
  return r.componentDidUpdate = function(i) {
    i.innerRef !== this.props.innerRef && Xr(this.props.innerRef, this.currentNode);
  }, r.componentWillUnmount = function() {
    delete this.currentNode;
  }, r.render = function() {
    var i = this.props.children;
    return /* @__PURE__ */ vn.cloneElement(i, {
      ref: this.handleRefOverride
    });
  }, t;
}(vn.Component), RC = ["children", "innerRef"], Or = function(t) {
  var r = t.children, n = t.innerRef, i = Da(t, RC), s = vn.Children.only(r), l = AC.isForwardRef(s) ? $C : CC, u = s && i && Object.keys(i).length > 0 ? /* @__PURE__ */ vn.cloneElement(s, i) : s;
  return /* @__PURE__ */ vn.createElement(l, {
    innerRef: n
  }, u);
};
function z() {
  return z = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, z.apply(null, arguments);
}
var NC = Object.prototype, IC = NC.hasOwnProperty;
function kC(e, t) {
  return e != null && IC.call(e, t);
}
var DC = Array.isArray;
const _t = DC;
var MC = typeof global == "object" && global && global.Object === Object && global;
const vb = MC;
var LC = typeof self == "object" && self && self.Object === Object && self, FC = vb || LC || Function("return this")();
const Rn = FC;
var BC = Rn.Symbol;
const Jr = BC;
var yb = Object.prototype, UC = yb.hasOwnProperty, zC = yb.toString, To = Jr ? Jr.toStringTag : void 0;
function qC(e) {
  var t = UC.call(e, To), r = e[To];
  try {
    e[To] = void 0;
    var n = !0;
  } catch {
  }
  var i = zC.call(e);
  return n && (t ? e[To] = r : delete e[To]), i;
}
var jC = Object.prototype, HC = jC.toString;
function WC(e) {
  return HC.call(e);
}
var VC = "[object Null]", GC = "[object Undefined]", bm = Jr ? Jr.toStringTag : void 0;
function Zr(e) {
  return e == null ? e === void 0 ? GC : VC : bm && bm in Object(e) ? qC(e) : WC(e);
}
function Lr(e) {
  return e != null && typeof e == "object";
}
var QC = "[object Symbol]";
function Ma(e) {
  return typeof e == "symbol" || Lr(e) && Zr(e) == QC;
}
var KC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, YC = /^\w*$/;
function Lf(e, t) {
  if (_t(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ma(e) ? !0 : YC.test(e) || !KC.test(e) || t != null && e in Object(t);
}
function wn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var XC = "[object AsyncFunction]", JC = "[object Function]", ZC = "[object GeneratorFunction]", e$ = "[object Proxy]";
function Ai(e) {
  if (!wn(e))
    return !1;
  var t = Zr(e);
  return t == JC || t == ZC || t == XC || t == e$;
}
var t$ = Rn["__core-js_shared__"];
const id = t$;
var Em = function() {
  var e = /[^.]+$/.exec(id && id.keys && id.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function r$(e) {
  return !!Em && Em in e;
}
var n$ = Function.prototype, a$ = n$.toString;
function Ya(e) {
  if (e != null) {
    try {
      return a$.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var i$ = /[\\^$.*+?()[\]{}|]/g, o$ = /^\[object .+?Constructor\]$/, s$ = Function.prototype, l$ = Object.prototype, u$ = s$.toString, c$ = l$.hasOwnProperty, d$ = RegExp(
  "^" + u$.call(c$).replace(i$, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function f$(e) {
  if (!wn(e) || r$(e))
    return !1;
  var t = Ai(e) ? d$ : o$;
  return t.test(Ya(e));
}
function p$(e, t) {
  return e == null ? void 0 : e[t];
}
function Xa(e, t) {
  var r = p$(e, t);
  return f$(r) ? r : void 0;
}
var h$ = Xa(Object, "create");
const zo = h$;
function g$() {
  this.__data__ = zo ? zo(null) : {}, this.size = 0;
}
function m$(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var v$ = "__lodash_hash_undefined__", y$ = Object.prototype, b$ = y$.hasOwnProperty;
function E$(e) {
  var t = this.__data__;
  if (zo) {
    var r = t[e];
    return r === v$ ? void 0 : r;
  }
  return b$.call(t, e) ? t[e] : void 0;
}
var w$ = Object.prototype, S$ = w$.hasOwnProperty;
function _$(e) {
  var t = this.__data__;
  return zo ? t[e] !== void 0 : S$.call(t, e);
}
var O$ = "__lodash_hash_undefined__";
function T$(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = zo && t === void 0 ? O$ : t, this;
}
function La(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
La.prototype.clear = g$;
La.prototype.delete = m$;
La.prototype.get = E$;
La.prototype.has = _$;
La.prototype.set = T$;
function x$() {
  this.__data__ = [], this.size = 0;
}
function tu(e, t) {
  return e === t || e !== e && t !== t;
}
function ru(e, t) {
  for (var r = e.length; r--; )
    if (tu(e[r][0], t))
      return r;
  return -1;
}
var P$ = Array.prototype, A$ = P$.splice;
function C$(e) {
  var t = this.__data__, r = ru(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : A$.call(t, r, 1), --this.size, !0;
}
function $$(e) {
  var t = this.__data__, r = ru(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function R$(e) {
  return ru(this.__data__, e) > -1;
}
function N$(e, t) {
  var r = this.__data__, n = ru(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Nn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Nn.prototype.clear = x$;
Nn.prototype.delete = C$;
Nn.prototype.get = $$;
Nn.prototype.has = R$;
Nn.prototype.set = N$;
var I$ = Xa(Rn, "Map");
const qo = I$;
function k$() {
  this.size = 0, this.__data__ = {
    hash: new La(),
    map: new (qo || Nn)(),
    string: new La()
  };
}
function D$(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function nu(e, t) {
  var r = e.__data__;
  return D$(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function M$(e) {
  var t = nu(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function L$(e) {
  return nu(this, e).get(e);
}
function F$(e) {
  return nu(this, e).has(e);
}
function B$(e, t) {
  var r = nu(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function In(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
In.prototype.clear = k$;
In.prototype.delete = M$;
In.prototype.get = L$;
In.prototype.has = F$;
In.prototype.set = B$;
var U$ = "Expected a function";
function au(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(U$);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var l = e.apply(this, n);
    return r.cache = s.set(i, l) || s, l;
  };
  return r.cache = new (au.Cache || In)(), r;
}
au.Cache = In;
var z$ = 500;
function q$(e) {
  var t = au(e, function(n) {
    return r.size === z$ && r.clear(), n;
  }), r = t.cache;
  return t;
}
var j$ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, H$ = /\\(\\)?/g, W$ = q$(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(j$, function(r, n, i, s) {
    t.push(i ? s.replace(H$, "$1") : n || r);
  }), t;
});
const V$ = W$;
function yn(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var G$ = 1 / 0, wm = Jr ? Jr.prototype : void 0, Sm = wm ? wm.toString : void 0;
function iu(e) {
  if (typeof e == "string")
    return e;
  if (_t(e))
    return yn(e, iu) + "";
  if (Ma(e))
    return Sm ? Sm.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -G$ ? "-0" : t;
}
function Ja(e) {
  return e == null ? "" : iu(e);
}
function gs(e, t) {
  return _t(e) ? e : Lf(e, t) ? [e] : V$(Ja(e));
}
var Q$ = "[object Arguments]";
function _m(e) {
  return Lr(e) && Zr(e) == Q$;
}
var bb = Object.prototype, K$ = bb.hasOwnProperty, Y$ = bb.propertyIsEnumerable, X$ = _m(function() {
  return arguments;
}()) ? _m : function(e) {
  return Lr(e) && K$.call(e, "callee") && !Y$.call(e, "callee");
};
const ou = X$;
var J$ = 9007199254740991, Z$ = /^(?:0|[1-9]\d*)$/;
function su(e, t) {
  var r = typeof e;
  return t = t ?? J$, !!t && (r == "number" || r != "symbol" && Z$.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var eR = 9007199254740991;
function Ff(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= eR;
}
var tR = 1 / 0;
function qi(e) {
  if (typeof e == "string" || Ma(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -tR ? "-0" : t;
}
function Eb(e, t, r) {
  t = gs(t, e);
  for (var n = -1, i = t.length, s = !1; ++n < i; ) {
    var l = qi(t[n]);
    if (!(s = e != null && r(e, l)))
      break;
    e = e[l];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && Ff(i) && su(l, i) && (_t(e) || ou(e)));
}
function Xd(e, t) {
  return e != null && Eb(e, t, kC);
}
function wb(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
function rR(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function ms(e, t) {
  t = gs(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[qi(t[r++])];
  return r && r == n ? e : void 0;
}
function lu(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var s = Array(i); ++n < i; )
    s[n] = e[n + t];
  return s;
}
function nR(e, t) {
  return t.length < 2 ? e : ms(e, lu(t, 0, -1));
}
function aR(e, t, r) {
  t = gs(t, e), e = nR(e, t);
  var n = e == null ? e : e[qi(rR(t))];
  return n == null ? void 0 : wb(n, e, r);
}
function Za(e) {
  return e;
}
var Om = Math.max;
function Sb(e, t, r) {
  return t = Om(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, s = Om(n.length - t, 0), l = Array(s); ++i < s; )
      l[i] = n[t + i];
    i = -1;
    for (var u = Array(t + 1); ++i < t; )
      u[i] = n[i];
    return u[t] = r(l), wb(e, this, u);
  };
}
function iR(e) {
  return function() {
    return e;
  };
}
var oR = function() {
  try {
    var e = Xa(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const kl = oR;
var sR = kl ? function(e, t) {
  return kl(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: iR(t),
    writable: !0
  });
} : Za;
const lR = sR;
var uR = 800, cR = 16, dR = Date.now;
function fR(e) {
  var t = 0, r = 0;
  return function() {
    var n = dR(), i = cR - (n - r);
    if (r = n, i > 0) {
      if (++t >= uR)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var pR = fR(lR);
const _b = pR;
function ji(e, t) {
  return _b(Sb(e, t, Za), e + "");
}
var hR = ji(aR);
const ie = hR;
var Jd = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var od, Tm;
function gR() {
  if (Tm)
    return od;
  Tm = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var l = {}, u = 0; u < 10; u++)
        l["_" + String.fromCharCode(u)] = u;
      var f = Object.getOwnPropertyNames(l).map(function(h) {
        return l[h];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        p[h] = h;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return od = i() ? Object.assign : function(s, l) {
    for (var u, f = n(s), p, h = 1; h < arguments.length; h++) {
      u = Object(arguments[h]);
      for (var m in u)
        t.call(u, m) && (f[m] = u[m]);
      if (e) {
        p = e(u);
        for (var v = 0; v < p.length; v++)
          r.call(u, p[v]) && (f[p[v]] = u[p[v]]);
      }
    }
    return f;
  }, od;
}
var sd, xm;
function Bf() {
  if (xm)
    return sd;
  xm = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return sd = e, sd;
}
var ld, Pm;
function Ob() {
  return Pm || (Pm = 1, ld = Function.call.bind(Object.prototype.hasOwnProperty)), ld;
}
var ud, Am;
function mR() {
  if (Am)
    return ud;
  Am = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Bf(), r = {}, n = Ob();
    e = function(s) {
      var l = "Warning: " + s;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function i(s, l, u, f, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in s)
        if (n(s, h)) {
          var m;
          try {
            if (typeof s[h] != "function") {
              var v = Error(
                (f || "React class") + ": " + u + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            m = s[h](l, h, f, u, null, t);
          } catch (O) {
            m = O;
          }
          if (m && !(m instanceof Error) && e(
            (f || "React class") + ": type specification of " + u + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var w = p ? p() : "";
            e(
              "Failed " + u + " type: " + m.message + (w ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ud = i, ud;
}
var cd, Cm;
function vR() {
  if (Cm)
    return cd;
  Cm = 1;
  var e = eu(), t = gR(), r = Bf(), n = Ob(), i = mR(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(u) {
    var f = "Warning: " + u;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return cd = function(u, f) {
    var p = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function m(K) {
      var J = K && (p && K[p] || K[h]);
      if (typeof J == "function")
        return J;
    }
    var v = "<<anonymous>>", w = {
      array: A("array"),
      bigint: A("bigint"),
      bool: A("boolean"),
      func: A("function"),
      number: A("number"),
      object: A("object"),
      string: A("string"),
      symbol: A("symbol"),
      any: M(),
      arrayOf: k,
      element: U(),
      elementType: N(),
      instanceOf: F,
      node: B(),
      objectOf: $,
      oneOf: x,
      oneOfType: I,
      shape: X,
      exact: W
    };
    function O(K, J) {
      return K === J ? K !== 0 || 1 / K === 1 / J : K !== K && J !== J;
    }
    function T(K, J) {
      this.message = K, this.data = J && typeof J == "object" ? J : {}, this.stack = "";
    }
    T.prototype = Error.prototype;
    function _(K) {
      if (process.env.NODE_ENV !== "production")
        var J = {}, we = 0;
      function ge(Se, he, xe, Pe, Ae, Ne, re) {
        if (Pe = Pe || v, Ne = Ne || xe, re !== r) {
          if (f) {
            var ee = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ee.name = "Invariant Violation", ee;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ht = Pe + ":" + xe;
            !J[ht] && // Avoid spamming the console because they are often not actionable except for lib authors
            we < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + Ne + "` prop on `" + Pe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), J[ht] = !0, we++);
          }
        }
        return he[xe] == null ? Se ? he[xe] === null ? new T("The " + Ae + " `" + Ne + "` is marked as required " + ("in `" + Pe + "`, but its value is `null`.")) : new T("The " + Ae + " `" + Ne + "` is marked as required in " + ("`" + Pe + "`, but its value is `undefined`.")) : null : K(he, xe, Pe, Ae, Ne);
      }
      var fe = ge.bind(null, !1);
      return fe.isRequired = ge.bind(null, !0), fe;
    }
    function A(K) {
      function J(we, ge, fe, Se, he, xe) {
        var Pe = we[ge], Ae = Oe(Pe);
        if (Ae !== K) {
          var Ne = Te(Pe);
          return new T(
            "Invalid " + Se + " `" + he + "` of type " + ("`" + Ne + "` supplied to `" + fe + "`, expected ") + ("`" + K + "`."),
            { expectedType: K }
          );
        }
        return null;
      }
      return _(J);
    }
    function M() {
      return _(l);
    }
    function k(K) {
      function J(we, ge, fe, Se, he) {
        if (typeof K != "function")
          return new T("Property `" + he + "` of component `" + fe + "` has invalid PropType notation inside arrayOf.");
        var xe = we[ge];
        if (!Array.isArray(xe)) {
          var Pe = Oe(xe);
          return new T("Invalid " + Se + " `" + he + "` of type " + ("`" + Pe + "` supplied to `" + fe + "`, expected an array."));
        }
        for (var Ae = 0; Ae < xe.length; Ae++) {
          var Ne = K(xe, Ae, fe, Se, he + "[" + Ae + "]", r);
          if (Ne instanceof Error)
            return Ne;
        }
        return null;
      }
      return _(J);
    }
    function U() {
      function K(J, we, ge, fe, Se) {
        var he = J[we];
        if (!u(he)) {
          var xe = Oe(he);
          return new T("Invalid " + fe + " `" + Se + "` of type " + ("`" + xe + "` supplied to `" + ge + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(K);
    }
    function N() {
      function K(J, we, ge, fe, Se) {
        var he = J[we];
        if (!e.isValidElementType(he)) {
          var xe = Oe(he);
          return new T("Invalid " + fe + " `" + Se + "` of type " + ("`" + xe + "` supplied to `" + ge + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(K);
    }
    function F(K) {
      function J(we, ge, fe, Se, he) {
        if (!(we[ge] instanceof K)) {
          var xe = K.name || v, Pe = Ze(we[ge]);
          return new T("Invalid " + Se + " `" + he + "` of type " + ("`" + Pe + "` supplied to `" + fe + "`, expected ") + ("instance of `" + xe + "`."));
        }
        return null;
      }
      return _(J);
    }
    function x(K) {
      if (!Array.isArray(K))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), l;
      function J(we, ge, fe, Se, he) {
        for (var xe = we[ge], Pe = 0; Pe < K.length; Pe++)
          if (O(xe, K[Pe]))
            return null;
        var Ae = JSON.stringify(K, function(re, ee) {
          var ht = Te(ee);
          return ht === "symbol" ? String(ee) : ee;
        });
        return new T("Invalid " + Se + " `" + he + "` of value `" + String(xe) + "` " + ("supplied to `" + fe + "`, expected one of " + Ae + "."));
      }
      return _(J);
    }
    function $(K) {
      function J(we, ge, fe, Se, he) {
        if (typeof K != "function")
          return new T("Property `" + he + "` of component `" + fe + "` has invalid PropType notation inside objectOf.");
        var xe = we[ge], Pe = Oe(xe);
        if (Pe !== "object")
          return new T("Invalid " + Se + " `" + he + "` of type " + ("`" + Pe + "` supplied to `" + fe + "`, expected an object."));
        for (var Ae in xe)
          if (n(xe, Ae)) {
            var Ne = K(xe, Ae, fe, Se, he + "." + Ae, r);
            if (Ne instanceof Error)
              return Ne;
          }
        return null;
      }
      return _(J);
    }
    function I(K) {
      if (!Array.isArray(K))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var J = 0; J < K.length; J++) {
        var we = K[J];
        if (typeof we != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ze(we) + " at index " + J + "."
          ), l;
      }
      function ge(fe, Se, he, xe, Pe) {
        for (var Ae = [], Ne = 0; Ne < K.length; Ne++) {
          var re = K[Ne], ee = re(fe, Se, he, xe, Pe, r);
          if (ee == null)
            return null;
          ee.data && n(ee.data, "expectedType") && Ae.push(ee.data.expectedType);
        }
        var ht = Ae.length > 0 ? ", expected one of type [" + Ae.join(", ") + "]" : "";
        return new T("Invalid " + xe + " `" + Pe + "` supplied to " + ("`" + he + "`" + ht + "."));
      }
      return _(ge);
    }
    function B() {
      function K(J, we, ge, fe, Se) {
        return se(J[we]) ? null : new T("Invalid " + fe + " `" + Se + "` supplied to " + ("`" + ge + "`, expected a ReactNode."));
      }
      return _(K);
    }
    function V(K, J, we, ge, fe) {
      return new T(
        (K || "React class") + ": " + J + " type `" + we + "." + ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + fe + "`."
      );
    }
    function X(K) {
      function J(we, ge, fe, Se, he) {
        var xe = we[ge], Pe = Oe(xe);
        if (Pe !== "object")
          return new T("Invalid " + Se + " `" + he + "` of type `" + Pe + "` " + ("supplied to `" + fe + "`, expected `object`."));
        for (var Ae in K) {
          var Ne = K[Ae];
          if (typeof Ne != "function")
            return V(fe, Se, he, Ae, Te(Ne));
          var re = Ne(xe, Ae, fe, Se, he + "." + Ae, r);
          if (re)
            return re;
        }
        return null;
      }
      return _(J);
    }
    function W(K) {
      function J(we, ge, fe, Se, he) {
        var xe = we[ge], Pe = Oe(xe);
        if (Pe !== "object")
          return new T("Invalid " + Se + " `" + he + "` of type `" + Pe + "` " + ("supplied to `" + fe + "`, expected `object`."));
        var Ae = t({}, we[ge], K);
        for (var Ne in Ae) {
          var re = K[Ne];
          if (n(K, Ne) && typeof re != "function")
            return V(fe, Se, he, Ne, Te(re));
          if (!re)
            return new T(
              "Invalid " + Se + " `" + he + "` key `" + Ne + "` supplied to `" + fe + "`.\nBad object: " + JSON.stringify(we[ge], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(K), null, "  ")
            );
          var ee = re(xe, Ne, fe, Se, he + "." + Ne, r);
          if (ee)
            return ee;
        }
        return null;
      }
      return _(J);
    }
    function se(K) {
      switch (typeof K) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !K;
        case "object":
          if (Array.isArray(K))
            return K.every(se);
          if (K === null || u(K))
            return !0;
          var J = m(K);
          if (J) {
            var we = J.call(K), ge;
            if (J !== K.entries) {
              for (; !(ge = we.next()).done; )
                if (!se(ge.value))
                  return !1;
            } else
              for (; !(ge = we.next()).done; ) {
                var fe = ge.value;
                if (fe && !se(fe[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function _e(K, J) {
      return K === "symbol" ? !0 : J ? J["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && J instanceof Symbol : !1;
    }
    function Oe(K) {
      var J = typeof K;
      return Array.isArray(K) ? "array" : K instanceof RegExp ? "object" : _e(J, K) ? "symbol" : J;
    }
    function Te(K) {
      if (typeof K > "u" || K === null)
        return "" + K;
      var J = Oe(K);
      if (J === "object") {
        if (K instanceof Date)
          return "date";
        if (K instanceof RegExp)
          return "regexp";
      }
      return J;
    }
    function ze(K) {
      var J = Te(K);
      switch (J) {
        case "array":
        case "object":
          return "an " + J;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + J;
        default:
          return J;
      }
    }
    function Ze(K) {
      return !K.constructor || !K.constructor.name ? v : K.constructor.name;
    }
    return w.checkPropTypes = i, w.resetWarningCache = i.resetWarningCache, w.PropTypes = w, w;
  }, cd;
}
var dd, $m;
function yR() {
  if ($m)
    return dd;
  $m = 1;
  var e = Bf();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, dd = function() {
    function n(l, u, f, p, h, m) {
      if (m !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, dd;
}
if (process.env.NODE_ENV !== "production") {
  var bR = eu(), ER = !0;
  Jd.exports = vR()(bR.isElement, ER);
} else
  Jd.exports = yR()();
var Tb = Jd.exports;
const d = /* @__PURE__ */ Ct(Tb);
function wR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ko(e) {
  return e === void 0;
}
function SR(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
var _R = /\s/;
function OR(e) {
  for (var t = e.length; t-- && _R.test(e.charAt(t)); )
    ;
  return t;
}
var TR = /^\s+/;
function xb(e) {
  return e && e.slice(0, OR(e) + 1).replace(TR, "");
}
var Rm = 0 / 0, xR = /^[-+]0x[0-9a-f]+$/i, PR = /^0b[01]+$/i, AR = /^0o[0-7]+$/i, CR = parseInt;
function Pb(e) {
  if (typeof e == "number")
    return e;
  if (Ma(e))
    return Rm;
  if (wn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = xb(e);
  var r = PR.test(e);
  return r || AR.test(e) ? CR(e.slice(2), r ? 2 : 8) : xR.test(e) ? Rm : +e;
}
var Nm = 1 / 0, $R = 17976931348623157e292;
function Si(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Pb(e), e === Nm || e === -Nm) {
    var t = e < 0 ? -1 : 1;
    return t * $R;
  }
  return e === e ? e : 0;
}
function vs(e) {
  var t = Si(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
function RR(e, t, r) {
  return e = Ja(e), r = r == null ? 0 : SR(vs(r), 0, e.length), t = iu(t), e.slice(r, r + t.length) == t;
}
function Ab(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var l = e[r];
    t(l, r, e) && (s[i++] = l);
  }
  return s;
}
function NR(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), l = n(t), u = l.length; u--; ) {
      var f = l[e ? u : ++i];
      if (r(s[f], f, s) === !1)
        break;
    }
    return t;
  };
}
var IR = NR();
const kR = IR;
function DR(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
function MR() {
  return !1;
}
var Cb = typeof exports == "object" && exports && !exports.nodeType && exports, Im = Cb && typeof module == "object" && module && !module.nodeType && module, LR = Im && Im.exports === Cb, km = LR ? Rn.Buffer : void 0, FR = km ? km.isBuffer : void 0, BR = FR || MR;
const Dl = BR;
var UR = "[object Arguments]", zR = "[object Array]", qR = "[object Boolean]", jR = "[object Date]", HR = "[object Error]", WR = "[object Function]", VR = "[object Map]", GR = "[object Number]", QR = "[object Object]", KR = "[object RegExp]", YR = "[object Set]", XR = "[object String]", JR = "[object WeakMap]", ZR = "[object ArrayBuffer]", eN = "[object DataView]", tN = "[object Float32Array]", rN = "[object Float64Array]", nN = "[object Int8Array]", aN = "[object Int16Array]", iN = "[object Int32Array]", oN = "[object Uint8Array]", sN = "[object Uint8ClampedArray]", lN = "[object Uint16Array]", uN = "[object Uint32Array]", lt = {};
lt[tN] = lt[rN] = lt[nN] = lt[aN] = lt[iN] = lt[oN] = lt[sN] = lt[lN] = lt[uN] = !0;
lt[UR] = lt[zR] = lt[ZR] = lt[qR] = lt[eN] = lt[jR] = lt[HR] = lt[WR] = lt[VR] = lt[GR] = lt[QR] = lt[KR] = lt[YR] = lt[XR] = lt[JR] = !1;
function cN(e) {
  return Lr(e) && Ff(e.length) && !!lt[Zr(e)];
}
function uu(e) {
  return function(t) {
    return e(t);
  };
}
var $b = typeof exports == "object" && exports && !exports.nodeType && exports, Do = $b && typeof module == "object" && module && !module.nodeType && module, dN = Do && Do.exports === $b, fd = dN && vb.process, fN = function() {
  try {
    var e = Do && Do.require && Do.require("util").types;
    return e || fd && fd.binding && fd.binding("util");
  } catch {
  }
}();
const Dm = fN;
var Mm = Dm && Dm.isTypedArray, pN = Mm ? uu(Mm) : cN;
const Uf = pN;
var hN = Object.prototype, gN = hN.hasOwnProperty;
function mN(e, t) {
  var r = _t(e), n = !r && ou(e), i = !r && !n && Dl(e), s = !r && !n && !i && Uf(e), l = r || n || i || s, u = l ? DR(e.length, String) : [], f = u.length;
  for (var p in e)
    (t || gN.call(e, p)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    su(p, f))) && u.push(p);
  return u;
}
var vN = Object.prototype;
function Rb(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || vN;
  return e === r;
}
function Nb(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var yN = Nb(Object.keys, Object);
const bN = yN;
var EN = Object.prototype, wN = EN.hasOwnProperty;
function zf(e) {
  if (!Rb(e))
    return bN(e);
  var t = [];
  for (var r in Object(e))
    wN.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function kn(e) {
  return e != null && Ff(e.length) && !Ai(e);
}
function Dr(e) {
  return kn(e) ? mN(e) : zf(e);
}
function SN(e, t) {
  return e && kR(e, t, Dr);
}
function _N(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!kn(r))
      return e(r, n);
    for (var i = r.length, s = t ? i : -1, l = Object(r); (t ? s-- : ++s < i) && n(l[s], s, l) !== !1; )
      ;
    return r;
  };
}
var ON = _N(SN);
const Hi = ON;
function TN(e, t) {
  var r = [];
  return Hi(e, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function xN() {
  this.__data__ = new Nn(), this.size = 0;
}
function PN(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function AN(e) {
  return this.__data__.get(e);
}
function CN(e) {
  return this.__data__.has(e);
}
var $N = 200;
function RN(e, t) {
  var r = this.__data__;
  if (r instanceof Nn) {
    var n = r.__data__;
    if (!qo || n.length < $N - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new In(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function bn(e) {
  var t = this.__data__ = new Nn(e);
  this.size = t.size;
}
bn.prototype.clear = xN;
bn.prototype.delete = PN;
bn.prototype.get = AN;
bn.prototype.has = CN;
bn.prototype.set = RN;
var NN = "__lodash_hash_undefined__";
function IN(e) {
  return this.__data__.set(e, NN), this;
}
function kN(e) {
  return this.__data__.has(e);
}
function Fa(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new In(); ++t < r; )
    this.add(e[t]);
}
Fa.prototype.add = Fa.prototype.push = IN;
Fa.prototype.has = kN;
function Ib(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function jo(e, t) {
  return e.has(t);
}
var DN = 1, MN = 2;
function kb(e, t, r, n, i, s) {
  var l = r & DN, u = e.length, f = t.length;
  if (u != f && !(l && f > u))
    return !1;
  var p = s.get(e), h = s.get(t);
  if (p && h)
    return p == t && h == e;
  var m = -1, v = !0, w = r & MN ? new Fa() : void 0;
  for (s.set(e, t), s.set(t, e); ++m < u; ) {
    var O = e[m], T = t[m];
    if (n)
      var _ = l ? n(T, O, m, t, e, s) : n(O, T, m, e, t, s);
    if (_ !== void 0) {
      if (_)
        continue;
      v = !1;
      break;
    }
    if (w) {
      if (!Ib(t, function(A, M) {
        if (!jo(w, M) && (O === A || i(O, A, r, n, s)))
          return w.push(M);
      })) {
        v = !1;
        break;
      }
    } else if (!(O === T || i(O, T, r, n, s))) {
      v = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), v;
}
var LN = Rn.Uint8Array;
const Lm = LN;
function FN(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function qf(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var BN = 1, UN = 2, zN = "[object Boolean]", qN = "[object Date]", jN = "[object Error]", HN = "[object Map]", WN = "[object Number]", VN = "[object RegExp]", GN = "[object Set]", QN = "[object String]", KN = "[object Symbol]", YN = "[object ArrayBuffer]", XN = "[object DataView]", Fm = Jr ? Jr.prototype : void 0, pd = Fm ? Fm.valueOf : void 0;
function JN(e, t, r, n, i, s, l) {
  switch (r) {
    case XN:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case YN:
      return !(e.byteLength != t.byteLength || !s(new Lm(e), new Lm(t)));
    case zN:
    case qN:
    case WN:
      return tu(+e, +t);
    case jN:
      return e.name == t.name && e.message == t.message;
    case VN:
    case QN:
      return e == t + "";
    case HN:
      var u = FN;
    case GN:
      var f = n & BN;
      if (u || (u = qf), e.size != t.size && !f)
        return !1;
      var p = l.get(e);
      if (p)
        return p == t;
      n |= UN, l.set(e, t);
      var h = kb(u(e), u(t), n, i, s, l);
      return l.delete(e), h;
    case KN:
      if (pd)
        return pd.call(e) == pd.call(t);
  }
  return !1;
}
function Db(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function ZN(e, t, r) {
  var n = t(e);
  return _t(e) ? n : Db(n, r(e));
}
function eI() {
  return [];
}
var tI = Object.prototype, rI = tI.propertyIsEnumerable, Bm = Object.getOwnPropertySymbols, nI = Bm ? function(e) {
  return e == null ? [] : (e = Object(e), Ab(Bm(e), function(t) {
    return rI.call(e, t);
  }));
} : eI;
const aI = nI;
function Um(e) {
  return ZN(e, Dr, aI);
}
var iI = 1, oI = Object.prototype, sI = oI.hasOwnProperty;
function lI(e, t, r, n, i, s) {
  var l = r & iI, u = Um(e), f = u.length, p = Um(t), h = p.length;
  if (f != h && !l)
    return !1;
  for (var m = f; m--; ) {
    var v = u[m];
    if (!(l ? v in t : sI.call(t, v)))
      return !1;
  }
  var w = s.get(e), O = s.get(t);
  if (w && O)
    return w == t && O == e;
  var T = !0;
  s.set(e, t), s.set(t, e);
  for (var _ = l; ++m < f; ) {
    v = u[m];
    var A = e[v], M = t[v];
    if (n)
      var k = l ? n(M, A, v, t, e, s) : n(A, M, v, e, t, s);
    if (!(k === void 0 ? A === M || i(A, M, r, n, s) : k)) {
      T = !1;
      break;
    }
    _ || (_ = v == "constructor");
  }
  if (T && !_) {
    var U = e.constructor, N = t.constructor;
    U != N && "constructor" in e && "constructor" in t && !(typeof U == "function" && U instanceof U && typeof N == "function" && N instanceof N) && (T = !1);
  }
  return s.delete(e), s.delete(t), T;
}
var uI = Xa(Rn, "DataView");
const Zd = uI;
var cI = Xa(Rn, "Promise");
const ef = cI;
var dI = Xa(Rn, "Set");
const _i = dI;
var fI = Xa(Rn, "WeakMap");
const tf = fI;
var zm = "[object Map]", pI = "[object Object]", qm = "[object Promise]", jm = "[object Set]", Hm = "[object WeakMap]", Wm = "[object DataView]", hI = Ya(Zd), gI = Ya(qo), mI = Ya(ef), vI = Ya(_i), yI = Ya(tf), wa = Zr;
(Zd && wa(new Zd(new ArrayBuffer(1))) != Wm || qo && wa(new qo()) != zm || ef && wa(ef.resolve()) != qm || _i && wa(new _i()) != jm || tf && wa(new tf()) != Hm) && (wa = function(e) {
  var t = Zr(e), r = t == pI ? e.constructor : void 0, n = r ? Ya(r) : "";
  if (n)
    switch (n) {
      case hI:
        return Wm;
      case gI:
        return zm;
      case mI:
        return qm;
      case vI:
        return jm;
      case yI:
        return Hm;
    }
  return t;
});
const Ml = wa;
var bI = 1, Vm = "[object Arguments]", Gm = "[object Array]", vl = "[object Object]", EI = Object.prototype, Qm = EI.hasOwnProperty;
function wI(e, t, r, n, i, s) {
  var l = _t(e), u = _t(t), f = l ? Gm : Ml(e), p = u ? Gm : Ml(t);
  f = f == Vm ? vl : f, p = p == Vm ? vl : p;
  var h = f == vl, m = p == vl, v = f == p;
  if (v && Dl(e)) {
    if (!Dl(t))
      return !1;
    l = !0, h = !1;
  }
  if (v && !h)
    return s || (s = new bn()), l || Uf(e) ? kb(e, t, r, n, i, s) : JN(e, t, f, r, n, i, s);
  if (!(r & bI)) {
    var w = h && Qm.call(e, "__wrapped__"), O = m && Qm.call(t, "__wrapped__");
    if (w || O) {
      var T = w ? e.value() : e, _ = O ? t.value() : t;
      return s || (s = new bn()), i(T, _, r, n, s);
    }
  }
  return v ? (s || (s = new bn()), lI(e, t, r, n, i, s)) : !1;
}
function cu(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Lr(e) && !Lr(t) ? e !== e && t !== t : wI(e, t, r, n, cu, i);
}
var SI = 1, _I = 2;
function OI(e, t, r, n) {
  var i = r.length, s = i, l = !n;
  if (e == null)
    return !s;
  for (e = Object(e); i--; ) {
    var u = r[i];
    if (l && u[2] ? u[1] !== e[u[0]] : !(u[0] in e))
      return !1;
  }
  for (; ++i < s; ) {
    u = r[i];
    var f = u[0], p = e[f], h = u[1];
    if (l && u[2]) {
      if (p === void 0 && !(f in e))
        return !1;
    } else {
      var m = new bn();
      if (n)
        var v = n(p, h, f, e, t, m);
      if (!(v === void 0 ? cu(h, p, SI | _I, n, m) : v))
        return !1;
    }
  }
  return !0;
}
function Mb(e) {
  return e === e && !wn(e);
}
function TI(e) {
  for (var t = Dr(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Mb(i)];
  }
  return t;
}
function Lb(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function xI(e) {
  var t = TI(e);
  return t.length == 1 && t[0][2] ? Lb(t[0][0], t[0][1]) : function(r) {
    return r === e || OI(r, e, t);
  };
}
function xa(e, t, r) {
  var n = e == null ? void 0 : ms(e, t);
  return n === void 0 ? r : n;
}
function PI(e, t) {
  return e != null && t in Object(e);
}
function Fb(e, t) {
  return e != null && Eb(e, t, PI);
}
var AI = 1, CI = 2;
function $I(e, t) {
  return Lf(e) && Mb(t) ? Lb(qi(e), t) : function(r) {
    var n = xa(r, e);
    return n === void 0 && n === t ? Fb(r, e) : cu(t, n, AI | CI);
  };
}
function Bb(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function RI(e) {
  return function(t) {
    return ms(t, e);
  };
}
function NI(e) {
  return Lf(e) ? Bb(qi(e)) : RI(e);
}
function aa(e) {
  return typeof e == "function" ? e : e == null ? Za : typeof e == "object" ? _t(e) ? $I(e[0], e[1]) : xI(e) : NI(e);
}
function rf(e, t) {
  var r = _t(e) ? Ab : TN;
  return r(e, aa(t));
}
var II = "[object Map]", kI = "[object Set]", DI = Object.prototype, MI = DI.hasOwnProperty;
function Pa(e) {
  if (e == null)
    return !0;
  if (kn(e) && (_t(e) || typeof e == "string" || typeof e.splice == "function" || Dl(e) || Uf(e) || ou(e)))
    return !e.length;
  var t = Ml(e);
  if (t == II || t == kI)
    return !e.size;
  if (Rb(e))
    return !zf(e).length;
  for (var r in e)
    if (MI.call(e, r))
      return !1;
  return !0;
}
function Ub(e, t, r, n) {
  for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
function LI(e) {
  return e !== e;
}
function FI(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
function du(e, t, r) {
  return t === t ? FI(e, t, r) : Ub(e, LI, r);
}
function jf(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && du(e, t, 0) > -1;
}
function Hf(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var BI = Math.min;
function UI(e, t, r) {
  for (var n = r ? Hf : jf, i = e[0].length, s = e.length, l = s, u = Array(s), f = 1 / 0, p = []; l--; ) {
    var h = e[l];
    l && t && (h = yn(h, uu(t))), f = BI(h.length, f), u[l] = !r && (t || i >= 120 && h.length >= 120) ? new Fa(l && h) : void 0;
  }
  h = e[0];
  var m = -1, v = u[0];
  e:
    for (; ++m < i && p.length < f; ) {
      var w = h[m], O = t ? t(w) : w;
      if (w = r || w !== 0 ? w : 0, !(v ? jo(v, O) : n(p, O, r))) {
        for (l = s; --l; ) {
          var T = u[l];
          if (!(T ? jo(T, O) : n(e[l], O, r)))
            continue e;
        }
        v && v.push(O), p.push(w);
      }
    }
  return p;
}
function Ho(e) {
  return Lr(e) && kn(e);
}
function zI(e) {
  return Ho(e) ? e : [];
}
var qI = ji(function(e) {
  var t = yn(e, zI);
  return t.length && t[0] === e[0] ? UI(t) : [];
});
const jI = qI;
function HI(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function WI(e) {
  return typeof e == "function" ? e : Za;
}
function zb(e, t) {
  var r = _t(e) ? HI : Hi;
  return r(e, WI(t));
}
var nf = function(t) {
  return "default" + (t[0].toUpperCase() + t.slice(1));
}, VI = function(t, r, n, i) {
  i === void 0 && (i = !1);
  var s = r[t];
  if (s !== void 0)
    return s;
  if (i) {
    var l = r[nf(t)];
    if (l !== void 0)
      return l;
    if (n) {
      var u = n[t];
      if (u !== void 0)
        return u;
    }
  }
  if (t === "checked")
    return !1;
  if (t === "value")
    return r.multiple ? [] : "";
}, Wi = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var r, n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    r = e.call.apply(e, [this].concat(i)) || this;
    var l = r.constructor, u = l.autoControlledProps, f = l.getAutoControlledStateFromProps, p = ie(wR(r), "getInitialAutoControlledState", r.props) || {};
    if (process.env.NODE_ENV !== "production") {
      var h = r.constructor, m = h.defaultProps, v = h.name, w = h.propTypes, O = h.getDerivedStateFromProps;
      O !== t.getDerivedStateFromProps && console.error("Auto controlled " + v + " must specify a static getAutoControlledStateFromProps() instead of getDerivedStateFromProps()."), zb(u, function(M) {
        var k = nf(M);
        Xd(w, k) || console.error(v + ' is missing "' + k + '" propTypes validation for auto controlled prop "' + M + '".'), Xd(w, M) || console.error(v + ' is missing propTypes validation for auto controlled prop "' + M + '".');
      });
      var T = jI(u, Dr(m));
      Pa(T) || console.error(["Do not set defaultProps for autoControlledProps. You can set defaults by", "setting state in the constructor or using an ES7 property initializer", "(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)", "See " + v + ' props: "' + T + '".'].join(" "));
      var _ = rf(u, function(M) {
        return RR(M, "default");
      });
      Pa(_) || console.error(["Do not add default props to autoControlledProps.", "Default props are automatically handled.", "See " + v + ' autoControlledProps: "' + _ + '".'].join(" "));
    }
    var A = u.reduce(function(M, k) {
      if (M[k] = VI(k, r.props, p, !0), process.env.NODE_ENV !== "production") {
        var U = nf(k), N = r.constructor.name;
        !ko(r.props[U]) && !ko(r.props[k]) && console.error(N + ' prop "' + k + '" is auto controlled. Specify either ' + U + " or " + k + ", but not both.");
      }
      return M;
    }, {});
    return r.state = z({}, p, A, {
      autoControlledProps: u,
      getAutoControlledStateFromProps: f
    }), r;
  }
  return t.getDerivedStateFromProps = function(n, i) {
    var s = i.autoControlledProps, l = i.getAutoControlledStateFromProps, u = s.reduce(function(p, h) {
      var m = !ko(n[h]);
      return m && (p[h] = n[h]), p;
    }, {});
    if (l) {
      var f = l(n, z({}, i, u), i);
      return z({}, u, f);
    }
    return u;
  }, t.getAutoControlledStateFromProps = function() {
    return null;
  }, t;
}(b.Component);
function GI(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!kn(t)) {
      var s = aa(r);
      t = Dr(t), r = function(u) {
        return s(i[u], u, i);
      };
    }
    var l = e(t, r, n);
    return l > -1 ? i[s ? t[l] : l] : void 0;
  };
}
var QI = Math.max;
function af(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : vs(r);
  return i < 0 && (i = QI(n + i, 0)), Ub(e, aa(t), i);
}
var KI = GI(af);
const qb = KI;
function YI(e, t) {
  var r;
  return Hi(e, function(n, i, s) {
    return r = t(n, i, s), !r;
  }), !!r;
}
function Wo(e, t, r) {
  if (!wn(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? kn(r) && su(t, r.length) : n == "string" && t in r) ? tu(r[t], e) : !1;
}
function Mo(e, t, r) {
  var n = _t(e) ? Ib : YI;
  return r && Wo(e, t, r) && (t = void 0), n(e, aa(t));
}
var XI = function(t, r) {
  return Mo(Df.toArray(t), {
    type: r
  });
}, le = function(t) {
  return t == null || Array.isArray(t) && t.length === 0;
}, _l = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen"
};
function Km(e) {
  var t = typeof e;
  return t === "string" || t === "number" ? _l[e] || e : "";
}
var C = function(t, r) {
  return t && r;
}, kt = function(t, r) {
  return t && t !== !0 && t + " " + r;
}, rt = function(t, r) {
  return t && (t === !0 ? r : t + " " + r);
}, Ll = function(t, r) {
  return !t || t === !0 ? null : t.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(n) {
    return n.replace("-", " ") + " " + r;
  }).join(" ");
}, pr = function(t) {
  return t === "justified" ? "justified" : kt(t, "aligned");
}, xr = function(t) {
  return kt(t, "aligned");
}, cr = function(t, r, n) {
  if (r === void 0 && (r = ""), n === void 0 && (n = !1), n && t === "equal")
    return "equal width";
  var i = typeof t;
  return (i === "string" || i === "number") && r ? Km(t) + " " + r : Km(t);
}, JI = 200;
function jb(e, t, r, n) {
  var i = -1, s = jf, l = !0, u = e.length, f = [], p = t.length;
  if (!u)
    return f;
  r && (t = yn(t, uu(r))), n ? (s = Hf, l = !1) : t.length >= JI && (s = jo, l = !1, t = new Fa(t));
  e:
    for (; ++i < u; ) {
      var h = e[i], m = r == null ? h : r(h);
      if (h = n || h !== 0 ? h : 0, l && m === m) {
        for (var v = p; v--; )
          if (t[v] === m)
            continue e;
        f.push(h);
      } else
        s(t, m, n) || f.push(h);
    }
  return f;
}
var Ym = Jr ? Jr.isConcatSpreadable : void 0;
function ZI(e) {
  return _t(e) || ou(e) || !!(Ym && e && e[Ym]);
}
function ys(e, t, r, n, i) {
  var s = -1, l = e.length;
  for (r || (r = ZI), i || (i = []); ++s < l; ) {
    var u = e[s];
    t > 0 && r(u) ? t > 1 ? ys(u, t - 1, r, n, i) : Db(i, u) : n || (i[i.length] = u);
  }
  return i;
}
var ek = ji(function(e, t) {
  return Ho(e) ? jb(e, ys(t, 1, Ho, !0)) : [];
});
const of = ek;
function Hb(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : lu(e, t, r);
}
function tk(e, t) {
  for (var r = e.length; r-- && du(t, e[r], 0) > -1; )
    ;
  return r;
}
function rk(e, t) {
  for (var r = -1, n = e.length; ++r < n && du(t, e[r], 0) > -1; )
    ;
  return r;
}
function nk(e) {
  return e.split("");
}
var ak = "\\ud800-\\udfff", ik = "\\u0300-\\u036f", ok = "\\ufe20-\\ufe2f", sk = "\\u20d0-\\u20ff", lk = ik + ok + sk, uk = "\\ufe0e\\ufe0f", ck = "\\u200d", dk = RegExp("[" + ck + ak + lk + uk + "]");
function Wf(e) {
  return dk.test(e);
}
var Wb = "\\ud800-\\udfff", fk = "\\u0300-\\u036f", pk = "\\ufe20-\\ufe2f", hk = "\\u20d0-\\u20ff", gk = fk + pk + hk, mk = "\\ufe0e\\ufe0f", vk = "[" + Wb + "]", sf = "[" + gk + "]", lf = "\\ud83c[\\udffb-\\udfff]", yk = "(?:" + sf + "|" + lf + ")", Vb = "[^" + Wb + "]", Gb = "(?:\\ud83c[\\udde6-\\uddff]){2}", Qb = "[\\ud800-\\udbff][\\udc00-\\udfff]", bk = "\\u200d", Kb = yk + "?", Yb = "[" + mk + "]?", Ek = "(?:" + bk + "(?:" + [Vb, Gb, Qb].join("|") + ")" + Yb + Kb + ")*", wk = Yb + Kb + Ek, Sk = "(?:" + [Vb + sf + "?", sf, Gb, Qb, vk].join("|") + ")", _k = RegExp(lf + "(?=" + lf + ")|" + Sk + wk, "g");
function Ok(e) {
  return e.match(_k) || [];
}
function uf(e) {
  return Wf(e) ? Ok(e) : nk(e);
}
function Tk(e, t, r) {
  if (e = Ja(e), e && (r || t === void 0))
    return xb(e);
  if (!e || !(t = iu(t)))
    return e;
  var n = uf(e), i = uf(t), s = rk(n, i), l = tk(n, i) + 1;
  return Hb(n, s, l).join("");
}
function xk(e, t, r) {
  t == "__proto__" && kl ? kl(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Pk = Object.prototype, Ak = Pk.hasOwnProperty;
function Ck(e, t, r) {
  var n = e[t];
  (!(Ak.call(e, t) && tu(n, r)) || r === void 0 && !(t in e)) && xk(e, t, r);
}
function Xb(e, t, r, n) {
  if (!wn(e))
    return e;
  t = gs(t, e);
  for (var i = -1, s = t.length, l = s - 1, u = e; u != null && ++i < s; ) {
    var f = qi(t[i]), p = r;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return e;
    if (i != l) {
      var h = u[f];
      p = n ? n(h, f, u) : void 0, p === void 0 && (p = wn(h) ? h : su(t[i + 1]) ? [] : {});
    }
    Ck(u, f, p), u = u[f];
  }
  return e;
}
function $k(e, t, r) {
  for (var n = -1, i = t.length, s = {}; ++n < i; ) {
    var l = t[n], u = ms(e, l);
    r(u, l) && Xb(s, gs(l, e), u);
  }
  return s;
}
function Rk(e, t) {
  return $k(e, t, function(r, n) {
    return Fb(e, n);
  });
}
function Nk(e) {
  var t = e == null ? 0 : e.length;
  return t ? ys(e, 1) : [];
}
function Ik(e) {
  return _b(Sb(e, void 0, Nk), e + "");
}
var kk = Ik(function(e, t) {
  return e == null ? {} : Rk(e, t);
});
const Vf = kk;
var Dk = Nb(Object.getPrototypeOf, Object);
const Mk = Dk;
var Lk = "[object Object]", Fk = Function.prototype, Bk = Object.prototype, Jb = Fk.toString, Uk = Bk.hasOwnProperty, zk = Jb.call(Object);
function fu(e) {
  if (!Lr(e) || Zr(e) != Lk)
    return !1;
  var t = Mk(e);
  if (t === null)
    return !0;
  var r = Uk.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Jb.call(r) == zk;
}
function qe(e) {
  return e == null;
}
function qk(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var s = e[n], l = t(s);
    if (l != null && (u === void 0 ? l === l && !Ma(l) : r(l, u)))
      var u = l, f = s;
  }
  return f;
}
function jk(e, t) {
  return e < t;
}
function Xm(e) {
  return e && e.length ? qk(e, Za, jk) : void 0;
}
function Hk(e, t) {
  for (var r, n = -1, i = e.length; ++n < i; ) {
    var s = t(e[n]);
    s !== void 0 && (r = r === void 0 ? s : r + s);
  }
  return r;
}
function Jm(e) {
  return e && e.length ? Hk(e, Za) : 0;
}
function Zb(e, t) {
  var r = -1, n = kn(e) ? Array(e.length) : [];
  return Hi(e, function(i, s, l) {
    n[++r] = t(i, s, l);
  }), n;
}
function vt(e, t) {
  var r = _t(e) ? yn : Zb;
  return r(e, aa(t));
}
function Wk(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
function Vk(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, s = Ma(e), l = t !== void 0, u = t === null, f = t === t, p = Ma(t);
    if (!u && !p && !s && e > t || s && l && f && !u && !p || n && l && f || !r && f || !i)
      return 1;
    if (!n && !s && !p && e < t || p && r && i && !n && !s || u && r && i || !l && i || !f)
      return -1;
  }
  return 0;
}
function Gk(e, t, r) {
  for (var n = -1, i = e.criteria, s = t.criteria, l = i.length, u = r.length; ++n < l; ) {
    var f = Vk(i[n], s[n]);
    if (f) {
      if (n >= u)
        return f;
      var p = r[n];
      return f * (p == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function Qk(e, t, r) {
  t.length ? t = yn(t, function(s) {
    return _t(s) ? function(l) {
      return ms(l, s.length === 1 ? s[0] : s);
    } : s;
  }) : t = [Za];
  var n = -1;
  t = yn(t, uu(aa));
  var i = Zb(e, function(s, l, u) {
    var f = yn(t, function(p) {
      return p(s);
    });
    return { criteria: f, index: ++n, value: s };
  });
  return Wk(i, function(s, l) {
    return Gk(s, l, r);
  });
}
var Kk = ji(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && Wo(e, t[0], t[1]) ? t = [] : r > 2 && Wo(t[0], t[1], t[2]) && (t = [t[0]]), Qk(e, ys(t, 1), []);
});
const Yk = Kk;
function Xk(e, t, r) {
  return e && e.length ? (t = r || t === void 0 ? 1 : vs(t), lu(e, 0, t < 0 ? 0 : t)) : [];
}
var eE = function() {
  return 0;
};
if (process.env.NODE_ENV !== "production") {
  var hd = [], Zm = [];
  eE = function(t, r) {
    if (t === r)
      return 0;
    var n = t.length, i = r.length;
    if (n === 0)
      return i;
    if (i === 0)
      return n;
    for (var s, l, u, f, p = 0, h = 0; p < n; )
      Zm[p] = t.charCodeAt(p), hd[p] = ++p;
    for (; h < i; )
      for (s = r.charCodeAt(h), u = h++, l = h, p = 0; p < n; p++)
        f = s === Zm[p] ? u : u + 1, u = hd[p], l = hd[p] = u > l ? f > l ? l + 1 : f : f > u ? u + 1 : f;
    return l;
  };
}
const ev = eE;
var Jk = function() {
  var t;
  return (t = Object.prototype.toString).call.apply(t, arguments);
}, tE = function(t) {
  if (!Array.isArray(t))
    throw new Error("Invalid argument supplied to suggest, expected an instance of array.");
  var r = au(function(i) {
    var s = i.split(" ");
    return Xk(Yk(vt(t, function(l) {
      var u = l.split(" "), f = Jm(vt(vt(s, function(h) {
        return vt(u, function(m) {
          return ev(h, m);
        });
      }), Xm)), p = Jm(vt(vt(u, function(h) {
        return vt(s, function(m) {
          return ev(h, m);
        });
      }), Xm));
      return {
        suggestion: l,
        score: f + p
      };
    }), ["score", "suggestion"]), 3);
  }), n = t.reduce(function(i, s) {
    return i[s.split(" ").sort().join(" ")] = !0, i;
  }, {});
  return function(i, s, l) {
    var u = i[s];
    if (!(!u || n[u])) {
      var f = u.split(" ").sort().join(" ");
      if (!n[f]) {
        var p = r(u);
        if (!p.some(function(h) {
          return h.score === 0;
        }))
          return new Error(["Invalid prop `" + s + "` of value `" + u + "` supplied to `" + l + "`.", `

Instead of \`` + u + "`, did you mean:", p.map(function(h) {
            return `
  - ` + h.suggestion;
          }).join(""), `
`].join(""));
      }
    }
  };
}, Xe = function(t) {
  return function(r, n, i) {
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to disallow, expected an instance of array.", " See `" + n + "` prop in `" + i + "`."].join(""));
    if (!(qe(r[n]) || r[n] === !1)) {
      var s = t.reduce(function(l, u) {
        return !qe(r[u]) && r[u] !== !1 ? [].concat(l, [u]) : l;
      }, []);
      if (s.length > 0)
        return new Error(["Prop `" + n + "` in `" + i + "` conflicts with props: `" + s.join("`, `") + "`.", "They cannot be defined together, choose one or the other."].join(" "));
    }
  };
}, je = function(t) {
  return function(r, n, i) {
    for (var s = arguments.length, l = new Array(s > 3 ? s - 3 : 0), u = 3; u < s; u++)
      l[u - 3] = arguments[u];
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to every, expected an instance of array.", "See `" + n + "` prop in `" + i + "`."].join(" "));
    var f = [];
    return t.forEach(function(p) {
      if (typeof p != "function")
        throw new Error('every() argument "validators" should contain functions, found: ' + Jk(p) + ".");
      var h = p.apply(void 0, [r, n, i].concat(l));
      h && f.push(h);
    }), f[0];
  };
}, rE = function(t, r) {
  return function(n, i, s) {
    for (var l = arguments.length, u = new Array(l > 3 ? l - 3 : 0), f = 3; f < l; f++)
      u[f - 3] = arguments[f];
    if (!fu(t))
      throw new Error(["Invalid argument supplied to givenProps, expected an object.", "See `" + i + "` prop in `" + s + "`."].join(" "));
    if (typeof r != "function")
      throw new Error(["Invalid argument supplied to givenProps, expected a function.", "See `" + i + "` prop in `" + s + "`."].join(" "));
    var p = Dr(t).every(function(v) {
      var w = t[v];
      return typeof w == "function" ? !w.apply(void 0, [n, v, s].concat(u)) : w === n[i];
    });
    if (p) {
      var h = r.apply(void 0, [n, i, s].concat(u));
      if (h) {
        var m = "{ " + Dr(Vf(Dr(t), n)).map(function(v) {
          var w = n[v], O = w;
          return typeof w == "string" ? O = '"' + w + '"' : Array.isArray(w) ? O = "[" + w.join(", ") + "]" : wn(w) && (O = "{...}"), v + ": " + O;
        }).join(", ") + " }";
        return h.message = "Given props " + m + ": " + h.message, h;
      }
    }
  };
}, Aa = function(t) {
  return function(r, n, i) {
    if (!Array.isArray(t))
      throw new Error(["Invalid `requiredProps` argument supplied to require, expected an instance of array.", " See `" + n + "` prop in `" + i + "`."].join(""));
    if (r[n] !== void 0) {
      var s = t.filter(function(l) {
        return r[l] === void 0;
      });
      if (s.length > 0)
        return new Error("`" + n + "` prop in `" + i + "` requires props: `" + s.join("`, `") + "`.");
    }
  };
}, Fl = function(t) {
  return function(r, n, i) {
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to some, expected an instance of array.", "See `" + n + "` prop in `" + i + "`."].join(" "));
    var s = r[n];
    if (!(qe(s) || s === !1)) {
      var l = s.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(f) {
        return Tk(f).replace("-", " ");
      }), u = of(l, t);
      if (u.length > 0)
        return new Error("`" + n + "` prop in `" + i + "` has invalid values: `" + u.join("`, `") + "`.");
    }
  };
}, me = function() {
  return je([Xe(["children"]), d.node]).apply(void 0, arguments);
}, pe = function() {
  return je([Xe(["children"]), d.oneOfType([d.func, d.node, d.object, d.arrayOf(d.oneOfType([d.node, d.object]))])]).apply(void 0, arguments);
}, ia = function() {
  return je([Xe(["children"]), d.arrayOf(pe)]).apply(void 0, arguments);
}, Zk = d.shape({
  current: d.object
}), nE = d.oneOfType([d.func, Zk]), Gf = { exports: {} }, xo = {}, gd = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
var tv;
function aE() {
  return tv || (tv = 1, function(e) {
    (function() {
      var t = !!(typeof window < "u" && window.document && window.document.createElement), r = {
        canUseDOM: t,
        canUseWorkers: typeof Worker < "u",
        canUseEventListeners: t && !!(window.addEventListener || window.attachEvent),
        canUseViewport: t && !!window.screen
      };
      e.exports ? e.exports = r : window.ExecutionEnvironment = r;
    })();
  }(gd)), gd.exports;
}
var rv;
function eD() {
  if (rv)
    return xo;
  rv = 1, Object.defineProperty(xo, "__esModule", { value: !0 });
  var e = aE(), t = b;
  function r(F) {
    return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(x) {
      return typeof x;
    } : function(x) {
      return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x;
    })(F);
  }
  function n(F, x) {
    if (!(F instanceof x))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(F, x) {
    for (var $ = 0; $ < x.length; $++) {
      var I = x[$];
      I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(F, I.key, I);
    }
  }
  function s(F, x, $) {
    return x && i(F.prototype, x), $ && i(F, $), F;
  }
  function l(F, x, $) {
    return x in F ? Object.defineProperty(F, x, { value: $, enumerable: !0, configurable: !0, writable: !0 }) : F[x] = $, F;
  }
  function u(F, x) {
    if (typeof x != "function" && x !== null)
      throw new TypeError("Super expression must either be null or a function");
    F.prototype = Object.create(x && x.prototype, { constructor: { value: F, writable: !0, configurable: !0 } }), x && p(F, x);
  }
  function f(F) {
    return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(x) {
      return x.__proto__ || Object.getPrototypeOf(x);
    })(F);
  }
  function p(F, x) {
    return (p = Object.setPrototypeOf || function($, I) {
      return $.__proto__ = I, $;
    })(F, x);
  }
  function h(F) {
    if (F === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return F;
  }
  function m(F, x) {
    return !x || typeof x != "object" && typeof x != "function" ? h(F) : x;
  }
  var v = function() {
    function F(x) {
      n(this, F), l(this, "handlers", void 0), this.handlers = x.slice(0);
    }
    return s(F, [{ key: "addHandlers", value: function(x) {
      for (var $ = this.handlers.slice(0), I = x.length, B = 0; B < I; B += 1)
        $.push(x[B]);
      return new F($);
    } }, { key: "dispatchEvent", value: function(x, $) {
      var I = this.handlers.length - 1;
      if ($) {
        for (var B = I; B >= 0; B -= 1)
          this.handlers[B].called || (this.handlers[B].called = !0, this.handlers[B](x));
        for (var V = I; V >= 0; V -= 1)
          this.handlers[V].called = !1;
      } else
        (0, this.handlers[I])(x);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.length > 0;
    } }, { key: "removeHandlers", value: function(x) {
      for (var $ = [], I = this.handlers.length, B = 0; B < I; B += 1) {
        var V = this.handlers[B];
        x.indexOf(V) === -1 && $.push(V);
      }
      return new F($);
    } }]), F;
  }();
  function w(F) {
    var x = /* @__PURE__ */ new Map();
    return F.forEach(function($, I) {
      x.set(I, $);
    }), x;
  }
  function O(F) {
    return Array.isArray(F) ? F : [F];
  }
  var T = function(F) {
    return F !== null && r(F) === "object" && F.hasOwnProperty("current");
  };
  function _(F) {
    return F === "document" ? document : F === "window" ? window : T(F) ? F.current || document : F || document;
  }
  var A = function() {
    function F(x, $) {
      n(this, F), l(this, "handlerSets", void 0), l(this, "poolName", void 0), this.handlerSets = $, this.poolName = x;
    }
    return s(F, [{ key: "addHandlers", value: function(x, $) {
      var I = w(this.handlerSets);
      if (I.has(x)) {
        var B = I.get(x);
        I.set(x, B.addHandlers($));
      } else
        I.set(x, new v($));
      return new F(this.poolName, I);
    } }, { key: "dispatchEvent", value: function(x, $) {
      var I = this.handlerSets.get(x), B = this.poolName === "default";
      I && I.dispatchEvent($, B);
    } }, { key: "hasHandlers", value: function(x) {
      if (!x)
        return this.handlerSets.size > 0;
      var $ = this.handlerSets.get(x);
      return !!$ && $.hasHandlers();
    } }, { key: "removeHandlers", value: function(x, $) {
      var I = w(this.handlerSets);
      if (!I.has(x))
        return new F(this.poolName, I);
      var B = I.get(x).removeHandlers($);
      return B.hasHandlers() ? I.set(x, B) : I.delete(x), new F(this.poolName, I);
    } }]), F;
  }();
  l(A, "createByType", function(F, x, $) {
    var I = /* @__PURE__ */ new Map();
    return I.set(x, new v($)), new A(F, I);
  });
  var M = function() {
    function F(x) {
      var $ = this;
      n(this, F), l(this, "handlers", /* @__PURE__ */ new Map()), l(this, "pools", /* @__PURE__ */ new Map()), l(this, "target", void 0), l(this, "createEmitter", function(I) {
        return function(B) {
          $.pools.forEach(function(V) {
            V.dispatchEvent(I, B);
          });
        };
      }), this.target = x;
    }
    return s(F, [{ key: "addHandlers", value: function(x, $, I) {
      if (this.pools.has(x)) {
        var B = this.pools.get(x);
        this.pools.set(x, B.addHandlers($, I));
      } else
        this.pools.set(x, A.createByType(x, $, I));
      this.handlers.has($) || this.addTargetHandler($);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.size > 0;
    } }, { key: "removeHandlers", value: function(x, $, I) {
      if (this.pools.has(x)) {
        var B = this.pools.get(x).removeHandlers($, I);
        B.hasHandlers() ? this.pools.set(x, B) : this.pools.delete(x);
        var V = !1;
        this.pools.forEach(function(X) {
          return V = V || X.hasHandlers($);
        }), V || this.removeTargetHandler($);
      }
    } }, { key: "addTargetHandler", value: function(x) {
      var $ = this.createEmitter(x);
      this.handlers.set(x, $), this.target.addEventListener(x, $, !0);
    } }, { key: "removeTargetHandler", value: function(x) {
      this.handlers.has(x) && (this.target.removeEventListener(x, this.handlers.get(x), !0), this.handlers.delete(x));
    } }]), F;
  }(), k = function() {
    function F() {
      var x = this;
      n(this, F), l(this, "targets", /* @__PURE__ */ new Map()), l(this, "getTarget", function($) {
        var I = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], B = _($);
        if (x.targets.has(B))
          return x.targets.get(B);
        if (!I)
          return null;
        var V = new M(B);
        return x.targets.set(B, V), V;
      }), l(this, "removeTarget", function($) {
        x.targets.delete(_($));
      });
    }
    return s(F, [{ key: "sub", value: function(x, $) {
      var I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var B = I.target, V = B === void 0 ? document : B, X = I.pool, W = X === void 0 ? "default" : X;
        this.getTarget(V).addHandlers(W, x, O($));
      }
    } }, { key: "unsub", value: function(x, $) {
      var I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var B = I.target, V = B === void 0 ? document : B, X = I.pool, W = X === void 0 ? "default" : X, se = this.getTarget(V, !1);
        se && (se.removeHandlers(W, x, O($)), se.hasHandlers() || this.removeTarget(V));
      }
    } }]), F;
  }(), U = new k(), N = function(F) {
    function x() {
      return n(this, x), m(this, f(x).apply(this, arguments));
    }
    return u(x, t.PureComponent), s(x, [{ key: "componentDidMount", value: function() {
      this.subscribe(this.props);
    } }, { key: "componentDidUpdate", value: function($) {
      this.unsubscribe($), this.subscribe(this.props);
    } }, { key: "componentWillUnmount", value: function() {
      this.unsubscribe(this.props);
    } }, { key: "subscribe", value: function($) {
      var I = $.name, B = $.on, V = $.pool, X = $.target;
      U.sub(I, B, { pool: V, target: X });
    } }, { key: "unsubscribe", value: function($) {
      var I = $.name, B = $.on, V = $.pool, X = $.target;
      U.unsub(I, B, { pool: V, target: X });
    } }, { key: "render", value: function() {
      return null;
    } }]), x;
  }();
  return l(N, "defaultProps", { pool: "default", target: "document" }), N.propTypes = {}, xo.instance = U, xo.default = N, xo;
}
var Po = {}, nv;
function tD() {
  if (nv)
    return Po;
  nv = 1, Object.defineProperty(Po, "__esModule", { value: !0 });
  var e = aE(), t = Tb, r = b;
  function n(x) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? n = function($) {
      return typeof $;
    } : n = function($) {
      return $ && typeof Symbol == "function" && $.constructor === Symbol && $ !== Symbol.prototype ? "symbol" : typeof $;
    }, n(x);
  }
  function i(x, $) {
    if (!(x instanceof $))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(x, $) {
    for (var I = 0; I < $.length; I++) {
      var B = $[I];
      B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(x, B.key, B);
    }
  }
  function l(x, $, I) {
    return $ && s(x.prototype, $), I && s(x, I), x;
  }
  function u(x, $, I) {
    return $ in x ? Object.defineProperty(x, $, {
      value: I,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : x[$] = I, x;
  }
  function f(x, $) {
    if (typeof $ != "function" && $ !== null)
      throw new TypeError("Super expression must either be null or a function");
    x.prototype = Object.create($ && $.prototype, {
      constructor: {
        value: x,
        writable: !0,
        configurable: !0
      }
    }), $ && h(x, $);
  }
  function p(x) {
    return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(I) {
      return I.__proto__ || Object.getPrototypeOf(I);
    }, p(x);
  }
  function h(x, $) {
    return h = Object.setPrototypeOf || function(B, V) {
      return B.__proto__ = V, B;
    }, h(x, $);
  }
  function m(x) {
    if (x === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return x;
  }
  function v(x, $) {
    return $ && (typeof $ == "object" || typeof $ == "function") ? $ : m(x);
  }
  var w = /* @__PURE__ */ function() {
    function x($) {
      i(this, x), u(this, "handlers", void 0), this.handlers = $.slice(0);
    }
    return l(x, [{
      key: "addHandlers",
      value: function(I) {
        for (var B = this.handlers.slice(0), V = I.length, X = 0; X < V; X += 1)
          B.push(I[X]);
        return new x(B);
      }
      /**
       * @see https://jsperf.com/suir-eventset-dispatchsingle
       * @see https://jsperf.com/suir-eventset-dispatchmultiple2
       */
    }, {
      key: "dispatchEvent",
      value: function(I, B) {
        var V = this.handlers.length - 1;
        if (!B) {
          var X = this.handlers[V];
          X(I);
          return;
        }
        for (var W = V; W >= 0; W -= 1)
          this.handlers[W].called || (this.handlers[W].called = !0, this.handlers[W](I));
        for (var se = V; se >= 0; se -= 1)
          this.handlers[se].called = !1;
      }
    }, {
      key: "hasHandlers",
      value: function() {
        return this.handlers.length > 0;
      }
      /**
       * @see https://jsperf.com/suir-eventset-removehandlers
       */
    }, {
      key: "removeHandlers",
      value: function(I) {
        for (var B = [], V = this.handlers.length, X = 0; X < V; X += 1) {
          var W = this.handlers[X];
          I.indexOf(W) === -1 && B.push(W);
        }
        return new x(B);
      }
    }]), x;
  }();
  function O(x) {
    var $ = /* @__PURE__ */ new Map();
    return x.forEach(function(I, B) {
      $.set(B, I);
    }), $;
  }
  function T(x) {
    return Array.isArray(x) ? x : [x];
  }
  var _ = function($) {
    return $ !== null && n($) === "object" && $.hasOwnProperty("current");
  };
  function A(x) {
    return x === "document" ? document : x === "window" ? window : _(x) ? x.current || document : x || document;
  }
  var M = /* @__PURE__ */ function() {
    function x($, I) {
      i(this, x), u(this, "handlerSets", void 0), u(this, "poolName", void 0), this.handlerSets = I, this.poolName = $;
    }
    return l(x, [{
      key: "addHandlers",
      value: function(I, B) {
        var V = O(this.handlerSets);
        if (V.has(I)) {
          var X = V.get(I);
          V.set(I, X.addHandlers(B));
        } else
          V.set(I, new w(B));
        return new x(this.poolName, V);
      }
    }, {
      key: "dispatchEvent",
      value: function(I, B) {
        var V = this.handlerSets.get(I), X = this.poolName === "default";
        V && V.dispatchEvent(B, X);
      }
    }, {
      key: "hasHandlers",
      value: function(I) {
        if (!I)
          return this.handlerSets.size > 0;
        var B = this.handlerSets.get(I);
        return B ? B.hasHandlers() : !1;
      }
    }, {
      key: "removeHandlers",
      value: function(I, B) {
        var V = O(this.handlerSets);
        if (!V.has(I))
          return new x(this.poolName, V);
        var X = V.get(I), W = X.removeHandlers(B);
        return W.hasHandlers() ? V.set(I, W) : V.delete(I), new x(this.poolName, V);
      }
    }]), x;
  }();
  u(M, "createByType", function(x, $, I) {
    var B = /* @__PURE__ */ new Map();
    return B.set($, new w(I)), new M(x, B);
  });
  var k = /* @__PURE__ */ function() {
    function x($) {
      var I = this;
      i(this, x), u(this, "handlers", /* @__PURE__ */ new Map()), u(this, "pools", /* @__PURE__ */ new Map()), u(this, "target", void 0), u(this, "createEmitter", function(B) {
        return function(V) {
          I.pools.forEach(function(X) {
            X.dispatchEvent(B, V);
          });
        };
      }), this.target = $;
    }
    return l(x, [{
      key: "addHandlers",
      value: function(I, B, V) {
        if (this.pools.has(I)) {
          var X = this.pools.get(I);
          this.pools.set(I, X.addHandlers(B, V));
        } else
          this.pools.set(I, M.createByType(I, B, V));
        this.handlers.has(B) || this.addTargetHandler(B);
      }
    }, {
      key: "hasHandlers",
      value: function() {
        return this.handlers.size > 0;
      }
    }, {
      key: "removeHandlers",
      value: function(I, B, V) {
        if (this.pools.has(I)) {
          var X = this.pools.get(I), W = X.removeHandlers(B, V);
          W.hasHandlers() ? this.pools.set(I, W) : this.pools.delete(I);
          var se = !1;
          this.pools.forEach(function(_e) {
            return se = se || _e.hasHandlers(B);
          }), se || this.removeTargetHandler(B);
        }
      }
    }, {
      key: "addTargetHandler",
      value: function(I) {
        var B = this.createEmitter(I);
        this.handlers.set(I, B), this.target.addEventListener(I, B, !0);
      }
    }, {
      key: "removeTargetHandler",
      value: function(I) {
        this.handlers.has(I) && (this.target.removeEventListener(I, this.handlers.get(I), !0), this.handlers.delete(I));
      }
    }]), x;
  }(), U = /* @__PURE__ */ function() {
    function x() {
      var $ = this;
      i(this, x), u(this, "targets", /* @__PURE__ */ new Map()), u(this, "getTarget", function(I) {
        var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, V = A(I);
        if ($.targets.has(V))
          return $.targets.get(V);
        if (!B)
          return null;
        var X = new k(V);
        return $.targets.set(V, X), X;
      }), u(this, "removeTarget", function(I) {
        $.targets.delete(A(I));
      });
    }
    return l(x, [{
      key: "sub",
      value: function(I, B) {
        var V = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var X = V.target, W = X === void 0 ? document : X, se = V.pool, _e = se === void 0 ? "default" : se, Oe = this.getTarget(W);
          Oe.addHandlers(_e, I, T(B));
        }
      }
    }, {
      key: "unsub",
      value: function(I, B) {
        var V = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var X = V.target, W = X === void 0 ? document : X, se = V.pool, _e = se === void 0 ? "default" : se, Oe = this.getTarget(W, !1);
          Oe && (Oe.removeHandlers(_e, I, T(B)), Oe.hasHandlers() || this.removeTarget(W));
        }
      }
    }]), x;
  }(), N = new U(), F = /* @__PURE__ */ function(x) {
    f($, x);
    function $() {
      return i(this, $), v(this, p($).apply(this, arguments));
    }
    return l($, [{
      key: "componentDidMount",
      value: function() {
        this.subscribe(this.props);
      }
    }, {
      key: "componentDidUpdate",
      value: function(B) {
        this.unsubscribe(B), this.subscribe(this.props);
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.unsubscribe(this.props);
      }
    }, {
      key: "subscribe",
      value: function(B) {
        var V = B.name, X = B.on, W = B.pool, se = B.target;
        N.sub(V, X, {
          pool: W,
          target: se
        });
      }
    }, {
      key: "unsubscribe",
      value: function(B) {
        var V = B.name, X = B.on, W = B.pool, se = B.target;
        N.unsub(V, X, {
          pool: W,
          target: se
        });
      }
    }, {
      key: "render",
      value: function() {
        return null;
      }
    }]), $;
  }(r.PureComponent);
  return u(F, "defaultProps", {
    pool: "default",
    target: "document"
  }), F.propTypes = {
    /** An event name on which we will subscribe. */
    name: t.string.isRequired,
    /** An event handler or array of event handlers. */
    on: t.oneOfType([t.func, t.arrayOf(t.func)]).isRequired,
    /** A name of pool. */
    pool: t.string,
    /** A DOM element on which we will subscribe. */
    target: t.oneOfType([
      t.oneOf(["document", "window"]),
      // Heads up!
      // This condition for SSR safety.
      t.instanceOf(e.canUseDOM ? HTMLElement : Object),
      t.shape({
        current: t.object
      })
    ])
  }, Po.instance = N, Po.default = F, Po;
}
var Bl;
process.env.NODE_ENV === "production" ? Bl = eD() : Bl = tD();
Gf.exports = Bl.default;
var yl = Gf.exports.instance = Bl.instance, rD = Gf.exports;
const Vn = /* @__PURE__ */ Ct(rD);
function iE() {
}
var nD = 1 / 0, aD = _i && 1 / qf(new _i([, -0]))[1] == nD ? function(e) {
  return new _i(e);
} : iE;
const iD = aD;
var oD = 200;
function oE(e, t, r) {
  var n = -1, i = jf, s = e.length, l = !0, u = [], f = u;
  if (r)
    l = !1, i = Hf;
  else if (s >= oD) {
    var p = t ? null : iD(e);
    if (p)
      return qf(p);
    l = !1, i = jo, f = new Fa();
  } else
    f = t ? [] : u;
  e:
    for (; ++n < s; ) {
      var h = e[n], m = t ? t(h) : h;
      if (h = r || h !== 0 ? h : 0, l && m === m) {
        for (var v = f.length; v--; )
          if (f[v] === m)
            continue e;
        t && f.push(m), u.push(h);
      } else
        i(f, m, r) || (f !== u && f.push(m), u.push(h));
    }
  return u;
}
function pu(e) {
  return e && e.length ? oE(e) : [];
}
var sD = "[object Number]";
function lD(e) {
  return typeof e == "number" || Lr(e) && Zr(e) == sD;
}
var uD = "[object String]";
function Qf(e) {
  return typeof e == "string" || !_t(e) && Lr(e) && Zr(e) == uD;
}
var cD = "[object Boolean]";
function dD(e) {
  return e === !0 || e === !1 || Lr(e) && Zr(e) == cD;
}
function sE(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = sE(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function te() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = sE(e)) && (n && (n += " "), n += t);
  return n;
}
var av = {};
function Oi(e, t, r, n) {
  if (n === void 0 && (n = {}), typeof e != "function" && typeof e != "string")
    throw new Error("createShorthand() Component must be a string or function.");
  if (qe(r) || dD(r))
    return null;
  var i = Qf(r), s = lD(r), l = Ai(r), u = /* @__PURE__ */ vn.isValidElement(r), f = fu(r), p = i || s || _t(r);
  if (!l && !u && !f && !p)
    return process.env.NODE_ENV !== "production" && console.error(["Shorthand value must be a string|number|array|object|ReactElement|function.", " Use null|undefined|boolean for none", " Received " + typeof r + "."].join("")), null;
  var h = n, m = h.defaultProps, v = m === void 0 ? {} : m, w = u && r.props || f && r || p && t(r), O = n, T = O.overrideProps, _ = T === void 0 ? {} : T;
  _ = Ai(_) ? _(z({}, v, w)) : _;
  var A = z({}, v, w, _);
  if (v.className || _.className || w.className) {
    var M = te(v.className, _.className, w.className);
    A.className = pu(M.split(" ")).join(" ");
  }
  if ((v.style || _.style || w.style) && (A.style = z({}, v.style, w.style, _.style)), qe(A.key)) {
    var k = A.childKey, U = n, N = U.autoGenerateKey, F = N === void 0 ? !0 : N;
    qe(k) ? F && (i || s) && (A.key = r) : (A.key = typeof k == "function" ? k(A) : k, delete A.childKey);
  }
  if (u)
    return /* @__PURE__ */ vn.cloneElement(r, A);
  if (typeof A.children == "function")
    return A.children(e, z({}, A, {
      children: void 0
    }));
  if (p || f)
    return /* @__PURE__ */ vn.createElement(e, A);
  if (l)
    return process.env.NODE_ENV !== "production" && (av[e] || (av[e] = !0, console.warn('Warning: There is a deprecated shorthand function usage for "' + e + '". It is deprecated and will be removed in v3 release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4029'))), r(e, A, A.children);
}
function Ue(e, t) {
  if (typeof e != "function" && typeof e != "string")
    throw new Error("createShorthandFactory() Component must be a string or function.");
  return function(r, n) {
    return Oi(e, t, r, n);
  };
}
var fD = /* @__PURE__ */ Ue("input", function(e) {
  return {
    type: e
  };
}), pD = /* @__PURE__ */ Ue("label", function(e) {
  return {
    children: e
  };
}), hD = function(t, r) {
  var n = t.handledProps, i = n === void 0 ? [] : n;
  return Object.keys(r).reduce(function(s, l) {
    return l === "childKey" || i.indexOf(l) === -1 && (s[l] = r[l]), s;
  }, {});
};
const oe = hD;
function ce(e, t, r) {
  var n = e.defaultProps, i = n === void 0 ? {} : n;
  if (t.as && t.as !== i.as)
    return t.as;
  if (r) {
    var s = r();
    if (s)
      return s;
  }
  return t.href ? "a" : i.as || "div";
}
function gD(e, t) {
  return yn(t, function(r) {
    return e[r];
  });
}
function lE(e) {
  return e == null ? [] : gD(e, Dr(e));
}
var mD = Math.max;
function Vi(e, t, r, n) {
  e = kn(e) ? e : lE(e), r = r && !n ? vs(r) : 0;
  var i = e.length;
  return r < 0 && (r = mD(i + r, 0)), Qf(e) ? r <= i && e.indexOf(t, r) > -1 : !!i && du(e, t, r) > -1;
}
var uE = [
  // REACT
  "selected",
  "defaultValue",
  "defaultChecked",
  // LIMITED HTML PROPS
  "accept",
  "autoCapitalize",
  "autoComplete",
  "autoCorrect",
  "autoFocus",
  "checked",
  "disabled",
  "enterKeyHint",
  "form",
  "id",
  "inputMode",
  "lang",
  "list",
  "max",
  "maxLength",
  "min",
  "minLength",
  "multiple",
  "name",
  "pattern",
  "placeholder",
  "readOnly",
  "required",
  "step",
  "title",
  "type",
  "value"
], vD = [
  // EVENTS
  // keyboard
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  // focus
  "onFocus",
  "onBlur",
  // form
  "onChange",
  "onInput",
  // mouse
  "onClick",
  "onContextMenu",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  // selection
  "onSelect",
  // touch
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart"
], yD = [].concat(uE, vD), bD = ["alt", "height", "src", "srcSet", "width", "loading"], Kf = function(t, r) {
  r === void 0 && (r = {});
  var n = r, i = n.htmlProps, s = i === void 0 ? yD : i, l = n.includeAria, u = l === void 0 ? !0 : l, f = {}, p = {};
  return zb(t, function(h, m) {
    var v = u && (/^aria-.*$/.test(m) || m === "role"), w = Vi(s, m) || v ? f : p;
    w[m] = h;
  }), [f, p];
}, ED = typeof document == "object" && document !== null, wD = typeof window == "object" && window !== null && window.self === window, SD = function e() {
  return qe(e.override) ? ED && wD : e.override;
};
const Ra = SD;
var _D = Math.max, OD = Math.min;
function TD(e, t, r) {
  return e >= OD(t, r) && e < _D(t, r);
}
function iv(e, t, r) {
  return t = Si(t), r === void 0 ? (r = t, t = 0) : r = Si(r), e = Pb(e), TD(e, t, r);
}
function xD(e) {
  return e && e.length ? e[0] : void 0;
}
var PD = function(t, r) {
  if (Mo([r, t], qe))
    return !1;
  if (r.target && (ie(r.target, "setAttribute", "data-suir-click-target", !0), document.querySelector("[data-suir-click-target=true]")))
    return ie(r.target, "removeAttribute", "data-suir-click-target"), t.contains(r.target);
  var n = r.clientX, i = r.clientY;
  if (Mo([n, i], qe))
    return !1;
  var s = t.getClientRects();
  if (!t.offsetWidth || !t.offsetHeight || !s || !s.length)
    return !1;
  var l = xD(s), u = l.top, f = l.bottom, p = l.left, h = l.right;
  return Mo([u, f, p, h], qe) ? !1 : iv(i, u, f + 1e-3) && iv(n, p, h + 1e-3);
};
const Na = PD;
var cE = function(t) {
  return {
    active: !1,
    type: "ellipsisItem",
    value: t
  };
}, AD = function() {
  return {
    active: !1,
    type: "firstItem",
    value: 1
  };
}, CD = function(t) {
  return {
    active: !1,
    type: "prevItem",
    value: Math.max(1, t - 1)
  };
}, $D = function(t) {
  return function(r) {
    return {
      active: t === r,
      type: "pageItem",
      value: r
    };
  };
}, RD = function(t, r) {
  return {
    active: !1,
    type: "nextItem",
    value: Math.min(t + 1, r)
  };
}, ND = function(t) {
  return {
    active: !1,
    type: "lastItem",
    value: t
  };
}, ID = Math.ceil, kD = Math.max;
function DD(e, t, r, n) {
  for (var i = -1, s = kD(ID((t - e) / (r || 1)), 0), l = Array(s); s--; )
    l[n ? s : ++i] = e, e += r;
  return l;
}
function MD(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && Wo(t, r, n) && (r = n = void 0), t = Si(t), r === void 0 ? (r = t, t = 0) : r = Si(r), n = n === void 0 ? t < r ? 1 : -1 : Si(n), DD(t, r, n, e);
  };
}
var LD = MD();
const FD = LD;
var BD = function(t, r, n) {
  var i = r - 1, s = i !== t + 1, l = s ? cE : n;
  return l(i);
}, UD = function(t, r, n) {
  var i = t + 1, s = i !== r - 1, l = s ? cE : n;
  return l(i);
}, Ol = function(t, r, n) {
  return vt(FD(t, r + 1), n);
}, zD = function(t, r) {
  var n = t.activePage, i = t.boundaryRange, s = t.hideEllipsis, l = t.siblingRange, u = t.totalPages, f = s ? 0 : 1, p = i, h = Ol(1, p, r), m = u + 1 - i, v = Ol(m, u, r), w = Math.min(Math.max(n - l, p + f + 1), m - f - 2 * l - 1), O = w + 2 * l, T = Ol(w, O, r);
  return [].concat(h, [!s && BD(p, w, r)], T, [!s && UD(O, m, r)], v).filter(Boolean);
}, qD = function(t) {
  var r = t.boundaryRange, n = t.hideEllipsis, i = t.siblingRange, s = t.totalPages, l = 2 * r, u = n ? 0 : 2, f = 2 * i;
  return 1 + u + f + l >= s;
}, jD = function(t) {
  var r = t.activePage, n = t.boundaryRange, i = t.hideEllipsis, s = t.siblingRange, l = t.totalPages;
  return {
    activePage: +r,
    boundaryRange: +n,
    hideEllipsis: !!i,
    siblingRange: +s,
    totalPages: +l
  };
}, HD = function(t) {
  var r = jD(t), n = r.activePage, i = r.totalPages, s = $D(n), l = qD(r) ? Ol(1, i, s) : zD(r, s);
  return [AD(), CD(n)].concat(l, [RD(n, i), ND(i)]);
};
const WD = HD;
var hr = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"], oa = ["left", "right"], Qt = ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"], gr = ["left", "center", "right", "justified"], Fr = ["bottom", "middle", "top"], dE = ["mobile", "tablet", "computer", "large screen", "widescreen"], dr = [].concat(Dr(_l), Dr(_l).map(Number), lE(_l)), VD = ["american sign language interpreting", "assistive listening systems", "audio description", "blind", "braille", "closed captioning", "closed captioning outline", "deaf", "low vision", "phone volume", "question circle", "question circle outline", "sign language", "tty", "universal access", "wheelchair"], GD = ["angle double down", "angle double left", "angle double right", "angle double up", "angle down", "angle left", "angle right", "angle up", "arrow alternate circle down", "arrow alternate circle down outline", "arrow alternate circle left", "arrow alternate circle left outline", "arrow alternate circle right", "arrow alternate circle right outline", "arrow alternate circle up", "arrow alternate circle up outline", "arrow circle down", "arrow circle left", "arrow circle right", "arrow circle up", "arrow down", "arrow left", "arrow right", "arrow up", "arrows alternate", "arrows alternate horizontal", "arrows alternate vertical", "caret down", "caret left", "caret right", "caret square down", "caret square down outline", "caret square left", "caret square left outline", "caret square right", "caret square right outline", "caret square up", "caret square up outline", "caret up", "cart arrow down", "chart line", "chevron circle down", "chevron circle left", "chevron circle right", "chevron circle up", "chevron down", "chevron left", "chevron right", "chevron up", "cloud download", "cloud upload", "download", "exchange", "expand arrows alternate", "external alternate", "external square alternate", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "history", "level down alternate", "level up alternate", "location arrow", "long arrow alternate down", "long arrow alternate left", "long arrow alternate right", "long arrow alternate up", "mouse pointer", "play", "random", "recycle", "redo", "redo alternate", "reply", "reply all", "retweet", "share", "share square", "share square outline", "sign-in", "sign-out", "sign-in alternate", "sign-out alternate", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "sync", "sync alternate", "text height", "text width", "undo", "undo alternate", "upload", "zoom-in", "zoom-out"], QD = ["audio description", "backward", "circle", "circle outline", "closed captioning", "closed captioning outline", "compress", "eject", "expand", "expand arrows alternate", "fast backward", "fast forward", "file audio", "file audio outline", "file video", "file video outline", "film", "forward", "headphones", "microphone", "microphone slash", "music", "pause", "pause circle", "pause circle outline", "phone volume", "play", "play circle", "play circle outline", "podcast", "random", "redo", "redo alternate", "rss", "rss square", "step backward", "step forward", "stop", "stop circle", "stop circle outline", "sync", "sync alternate", "undo", "undo alternate", "video", "volume down", "volume off", "volume up"], KD = ["address book", "address book outline", "address card", "address card outline", "archive", "balance scale", "birthday cake", "book", "briefcase", "building", "building outline", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "certificate", "chart area", "chart bar", "chart bar outline", "chart line", "chart pie", "clipboard", "clipboard outline", "coffee", "columns", "compass", "compass outline", "copy", "copy outline", "copyright", "copyright outline", "cut", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "eraser", "fax", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "globe", "industry", "paperclip", "paste", "pen square", "pencil alternate", "percent", "phone", "phone square", "phone volume", "registered", "registered outline", "save", "save outline", "sitemap", "sticky note", "sticky note outline", "suitcase", "table", "tag", "tags", "tasks", "thumbtack", "trademark"], YD = ["chess", "chess bishop", "chess board", "chess king", "chess knight", "chess pawn", "chess queen", "chess rook", "square full"], XD = ["archive", "barcode", "bath", "bug", "code", "code branch", "coffee", "file", "file outline", "file alternate", "file alternate outline", "file code", "file code outline", "filter", "fire extinguisher", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "microchip", "qrcode", "shield alternate", "sitemap", "terminal", "user secret", "window close", "window close outline", "window maximize", "window maximize outline", "window minimize", "window minimize outline", "window restore", "window restore outline"], JD = ["address book", "address book outline", "address card", "address card outline", "american sign language interpreting", "assistive listening systems", "at", "bell", "bell outline", "bell slash", "bell slash outline", "bullhorn", "comment", "comment outline", "comment alternate", "comment alternate outline", "comments", "comments outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "fax", "inbox", "language", "microphone", "microphone slash", "mobile", "mobile alternate", "paper plane", "paper plane outline", "phone", "phone square", "phone volume", "rss", "rss square", "tty", "wifi"], ZD = ["desktop", "download", "hdd", "hdd outline", "headphones", "keyboard", "keyboard outline", "laptop", "microchip", "mobile", "mobile alternate", "plug", "power off", "print", "save", "save outline", "server", "tablet", "tablet alternate", "tv", "upload"], e2 = ["dollar sign", "euro sign", "lira sign", "money bill alternate", "money bill alternate outline", "pound sign", "ruble sign", "rupee sign", "shekel sign", "won sign", "yen sign"], t2 = ["bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "clock", "clock outline", "hourglass", "hourglass outline", "hourglass end", "hourglass half", "hourglass start", "stopwatch"], r2 = ["adjust", "clone", "clone outline", "copy", "copy outline", "crop", "crosshairs", "cut", "edit", "edit outline", "eraser", "eye", "eye dropper", "eye slash", "eye slash outline", "object group", "object group outline", "object ungroup", "object ungroup outline", "paint brush", "paste", "pencil alternate", "save", "save outline", "tint"], n2 = ["align center", "align justify", "align left", "align right", "bold", "clipboard", "clipboard outline", "clone", "clone outline", "columns", "copy", "copy outline", "cut", "edit", "edit outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "font", "heading", "i cursor", "indent", "italic", "linkify", "list", "list alternate", "list alternate outline", "list ol", "list ul", "outdent", "paper plane", "paper plane outline", "paperclip", "paragraph", "paste", "pencil alternate", "print", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "share", "strikethrough", "subscript", "superscript", "sync", "sync alternate", "table", "tasks", "text height", "text width", "th", "th large", "th list", "trash", "trash alternate", "trash alternate outline", "underline", "undo", "undo alternate", "unlink"], a2 = ["archive", "clone", "clone outline", "copy", "copy outline", "cut", "file", "file outline", "file alternate", "file alternate outline", "file archive", "file archive outline", "file audio", "file audio outline", "file code", "file code outline", "file excel", "file excel outline", "file image", "file image outline", "file pdf", "file pdf outline", "file powerpoint", "file powerpoint outline", "file video", "file video outline", "file word", "file word outline", "folder", "folder outline", "folder open", "folder open outline", "paste", "save", "save outline", "sticky note", "sticky note outline"], i2 = ["genderless", "mars", "mars double", "mars stroke", "mars stroke horizontal", "mars stroke vertical", "mercury", "neuter", "transgender", "transgender alternate", "venus", "venus double", "venus mars"], o2 = ["hand lizard", "hand lizard outline", "hand paper", "hand paper outline", "hand peace", "hand peace outline", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "hand rock", "hand rock outline", "hand scissors", "hand scissors outline", "hand spock", "hand spock outline", "handshake", "handshake outline", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline"], s2 = ["ambulance", "h square", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "medkit", "plus square", "plus square outline", "stethoscope", "user md", "wheelchair"], l2 = ["adjust", "bolt", "camera", "camera retro", "clone", "clone outline", "compress", "expand", "eye", "eye dropper", "eye slash", "eye slash outline", "file image", "file image outline", "film", "id badge", "id badge outline", "id card", "id card outline", "image", "image outline", "images", "images outline", "sliders horizontal", "tint"], u2 = ["ban", "barcode", "bars", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bug", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "certificate", "check", "check circle", "check circle outline", "check square", "check square outline", "circle", "circle outline", "clipboard", "clipboard outline", "clone", "clone outline", "cloud", "cloud download", "cloud upload", "coffee", "cog", "cogs", "copy", "copy outline", "cut", "database", "dot circle", "dot circle outline", "download", "edit", "edit outline", "ellipsis horizontal", "ellipsis vertical", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "exclamation", "exclamation circle", "exclamation triangle", "external alternate", "external square alternate", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "filter", "flag", "flag outline", "flag checkered", "folder", "folder outline", "folder open", "folder open outline", "frown", "frown outline", "hashtag", "heart", "heart outline", "history", "home", "i cursor", "info", "info circle", "language", "magic", "meh", "meh outline", "microphone", "microphone slash", "minus", "minus circle", "minus square", "minus square outline", "paste", "pencil alternate", "plus", "plus circle", "plus square", "plus square outline", "qrcode", "question", "question circle", "question circle outline", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "rss", "rss square", "save", "save outline", "search", "search minus", "search plus", "share", "share alternate", "share alternate square", "share square", "share square outline", "shield alternate", "sign-in", "sign-out", "signal", "sitemap", "sliders horizontal", "smile", "smile outline", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "star", "star outline", "star half", "star half outline", "sync", "sync alternate", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "times", "times circle", "times circle outline", "toggle off", "toggle on", "trash", "trash alternate", "trash alternate outline", "trophy", "undo", "undo alternate", "upload", "user", "user outline", "user circle", "user circle outline", "wifi"], c2 = ["box", "boxes", "clipboard check", "clipboard list", "dolly", "dolly flatbed", "pallet", "shipping fast", "truck", "warehouse"], d2 = ["ambulance", "anchor", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bicycle", "binoculars", "birthday cake", "blind", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "building", "building outline", "car", "coffee", "crosshairs", "dollar sign", "eye", "eye slash", "eye slash outline", "fighter jet", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "gamepad", "gavel", "gift", "glass martini", "globe", "graduation cap", "h square", "heart", "heart outline", "heartbeat", "home", "hospital", "hospital outline", "image", "image outline", "images", "images outline", "industry", "info", "info circle", "key", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "location arrow", "low vision", "magnet", "male", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "money bill alternate", "money bill alternate outline", "motorcycle", "music", "newspaper", "newspaper outline", "paw", "phone", "phone square", "phone volume", "plane", "plug", "plus", "plus square", "plus square outline", "print", "recycle", "road", "rocket", "search", "search minus", "search plus", "ship", "shopping bag", "shopping basket", "shopping cart", "shower", "street view", "subway", "suitcase", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "tint", "train", "tree", "trophy", "truck", "tty", "umbrella", "university", "utensil spoon", "utensils", "wheelchair", "wifi", "wrench"], f2 = ["ambulance", "band aid", "dna", "first aid", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "hospital symbol", "pills", "plus", "stethoscope", "syringe", "thermometer", "user md", "weight"], p2 = ["ambulance", "anchor", "archive", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bicycle", "binoculars", "birthday cake", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "bug", "building", "building outline", "bullhorn", "bullseye", "bus", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "camera", "camera retro", "car", "clipboard", "clipboard outline", "cloud", "coffee", "cog", "cogs", "compass", "compass outline", "copy", "copy outline", "cube", "cubes", "cut", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "eye", "eye dropper", "fax", "fighter jet", "file", "file outline", "file alternate", "file alternate outline", "film", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "futbol", "futbol outline", "gamepad", "gavel", "gem", "gem outline", "gift", "glass martini", "globe", "graduation cap", "hdd", "hdd outline", "headphones", "heart", "heart outline", "home", "hospital", "hospital outline", "hourglass", "hourglass outline", "image", "image outline", "images", "images outline", "industry", "key", "keyboard", "keyboard outline", "laptop", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "lock", "lock open", "magic", "magnet", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "microchip", "microphone", "mobile", "mobile alternate", "money bill alternate", "money bill alternate outline", "moon", "moon outline", "motorcycle", "newspaper", "newspaper outline", "paint brush", "paper plane", "paper plane outline", "paperclip", "paste", "paw", "pencil alternate", "phone", "plane", "plug", "print", "puzzle piece", "road", "rocket", "save", "save outline", "search", "shield alternate", "shopping bag", "shopping basket", "shopping cart", "shower", "snowflake", "snowflake outline", "space shuttle", "star", "star outline", "sticky note", "sticky note outline", "stopwatch", "subway", "suitcase", "sun", "sun outline", "tablet", "tablet alternate", "tachometer alternate", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "train", "trash", "trash alternate", "trash alternate outline", "tree", "trophy", "truck", "tv", "umbrella", "university", "unlock", "unlock alternate", "utensil spoon", "utensils", "wheelchair", "wrench"], h2 = ["bell", "bell outline", "bookmark", "bookmark outline", "bullhorn", "camera", "camera retro", "cart arrow down", "cart plus", "certificate", "credit card", "credit card outline", "gem", "gem outline", "gift", "handshake", "handshake outline", "heart", "heart outline", "key", "shopping bag", "shopping basket", "shopping cart", "star", "star outline", "tag", "tags", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "trophy"], g2 = ["bookmark", "bookmark outline", "calendar", "calendar outline", "certificate", "circle", "circle outline", "cloud", "comment", "comment outline", "file", "file outline", "folder", "folder outline", "heart", "heart outline", "map marker", "play", "square", "square outline", "star", "star outline"], m2 = ["asterisk", "certificate", "circle notch", "cog", "compass", "compass outline", "crosshairs", "life ring", "life ring outline", "snowflake", "snowflake outline", "spinner", "sun", "sun outline", "sync"], v2 = ["baseball ball", "basketball ball", "bowling ball", "football ball", "futbol", "futbol outline", "golf ball", "hockey puck", "quidditch", "table tennis", "volleyball ball"], y2 = ["ban", "battery empty", "battery full", "battery half", "battery quarter", "battery three quarters", "bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "cart arrow down", "cart plus", "exclamation", "exclamation circle", "exclamation triangle", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "info", "info circle", "lock", "lock open", "minus", "minus circle", "minus square", "minus square outline", "plus", "plus circle", "plus square", "plus square outline", "question", "question circle", "question circle outline", "shield alternate", "shopping cart", "sign in alternate", "sign out alternate", "thermometer empty", "thermometer full", "thermometer half", "thermometer quarter", "thermometer three quarters", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "toggle off", "toggle on", "unlock", "unlock alternate"], b2 = ["address book", "address book outline", "address card", "address card outline", "bed", "blind", "child", "female", "frown", "frown outline", "id badge", "id badge outline", "id card", "id card outline", "male", "meh", "meh outline", "power off", "smile", "smile outline", "street view", "user", "user outline", "user circle", "user circle outline", "user md", "user plus", "user secret", "user times", "users", "wheelchair"], E2 = ["ambulance", "bicycle", "bus", "car", "fighter jet", "motorcycle", "paper plane", "paper plane outline", "plane", "rocket", "ship", "shopping cart", "space shuttle", "subway", "taxi", "train", "truck", "wheelchair"], w2 = ["archive", "book", "bookmark", "bookmark outline", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "newspaper", "newspaper outline", "paper plane", "paper plane outline", "paperclip", "paragraph", "pen square", "pencil alternate", "quote left", "quote right", "sticky note", "sticky note outline", "thumbtack"], S2 = ["500px", "accessible", "accusoft", "adn", "adversal", "affiliatetheme", "algolia", "amazon", "amazon pay", "amilia", "android", "angellist", "angrycreative", "angular", "app store", "app store ios", "apper", "apple", "apple pay", "asymmetrik", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "behance", "behance square", "bimobject", "bitbucket", "bitcoin", "bity", "black tie", "blackberry", "blogger", "blogger b", "bluetooth", "bluetooth b", "btc", "buromobelexperte", "buysellads", "cc amazon pay", "cc amex", "cc apple pay", "cc diners club", "cc discover", "cc jcb", "cc mastercard", "cc paypal", "cc stripe", "cc visa", "centercode", "chrome", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "connectdevelop", "contao", "cpanel", "creative commons", "css3", "css3 alternate", "cuttlefish", "d and d", "dashcube", "delicious", "deploydog", "deskpro", "deviantart", "digg", "digital ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dribbble square", "dropbox", "drupal", "dyalog", "earlybirds", "edge", "elementor", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "expeditedssl", "facebook", "facebook f", "facebook messenger", "facebook square", "firefox", "first order", "firstdraft", "flickr", "flipboard", "fly", "font awesome", "font awesome alternate", "font awesome flag", "fonticons", "fonticons fi", "fort awesome", "fort awesome alternate", "forumbee", "foursquare", "free code camp", "freebsd", "get pocket", "gg", "gg circle", "git", "git square", "github", "github alternate", "github square", "gitkraken", "gitlab", "gitter", "glide", "glide g", "gofore", "goodreads", "goodreads g", "google", "google drive", "google play", "google plus", "google plus g", "google plus square", "google wallet", "gratipay", "grav", "gripfire", "grunt", "gulp", "hacker news", "hacker news square", "hips", "hire a helper", "hooli", "hotjar", "houzz", "html5", "hubspot", "imdb", "instagram", "internet explorer", "ioxhost", "itunes", "itunes note", "jenkins", "joget", "joomla", "js", "js square", "jsfiddle", "keycdn", "kickstarter", "kickstarter k", "korvue", "laravel", "lastfm", "lastfm square", "leanpub", "less", "linechat", "linkedin", "linkedin alternate", "linode", "linux", "lyft", "magento", "maxcdn", "medapps", "medium", "medium m", "medrt", "meetup", "microsoft", "mix", "mixcloud", "mizuni", "modx", "monero", "napster", "nintendo switch", "node", "node js", "npm", "ns8", "nutritionix", "odnoklassniki", "odnoklassniki square", "opencart", "openid", "opera", "optin monster", "osi", "page4", "pagelines", "palfed", "patreon", "paypal", "periscope", "phabricator", "phoenix framework", "php", "pied piper", "pied piper alternate", "pied piper pp", "pinterest", "pinterest p", "pinterest square", "playstation", "product hunt", "pushed", "python", "qq", "quinscape", "quora", "ravelry", "react", "rebel", "redriver", "reddit", "reddit alien", "reddit square", "rendact", "renren", "replyd", "resolving", "rocketchat", "rockrms", "safari", "sass", "schlix", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "simplybuilt", "sistrix", "skyatlas", "skype", "slack", "slack hash", "slideshare", "snapchat", "snapchat ghost", "snapchat square", "soundcloud", "speakap", "spotify", "stack exchange", "stack overflow", "staylinked", "steam", "steam square", "steam symbol", "sticker mule", "strava", "stripe", "stripe s", "studiovinari", "stumbleupon", "stumbleupon circle", "superpowers", "supple", "telegram", "telegram plane", "tencent weibo", "themeisle", "trello", "tripadvisor", "tumblr", "tumblr square", "twitch", "twitter", "twitter square", "typo3", "uber", "uikit", "uniregistry", "untappd", "usb", "ussunnah", "vaadin", "viacoin", "viadeo", "viadeo square", "viber", "vimeo", "vimeo square", "vimeo v", "vine", "vk", "vnv", "vuejs", "wechat", "weibo", "weixin", "whatsapp", "whatsapp square", "whmcs", "wikipedia w", "windows", "wordpress", "wordpress simple", "wpbeginner", "wpexplorer", "wpforms", "xbox", "xing", "xing square", "y combinator", "yahoo", "yandex", "yandex international", "yelp", "yoast", "youtube", "youtube square"], _2 = pu([].concat(VD, GD, QD, KD, YD, XD, JD, ZD, e2, t2, r2, n2, a2, i2, o2, s2, l2, u2, c2, d2, f2, p2, h2, g2, m2, v2, y2, b2, E2, w2, S2)), O2 = ["chess rock", "ordered list", "unordered list", "user doctor", "shield", "puzzle", "add circle", "add square", "add to calendar", "add to cart", "add user", "add", "alarm mute", "alarm", "ald", "als", "announcement", "area chart", "area graph", "arrow down cart", "asexual", "asl interpreting", "asl", "assistive listening devices", "attach", "attention", "balance", "bar", "bathtub", "battery four", "battery high", "battery low", "battery one", "battery three", "battery two", "battery zero", "birthday", "block layout", "bluetooth alternative", "broken chain", "browser", "call square", "call", "cancel", "cart", "cc", "chain", "chat", "checked calendar", "checkmark", "circle notched", "close", "cny", "cocktail", "commenting", "computer", "configure", "content", "deafness", "delete calendar", "delete", "detective", "discussions", "doctor", "dollar", "dont", "drivers license", "dropdown", "emergency", "envira gallery", "erase", "eur", "euro", "eyedropper", "factory", "favorite", "feed", "female homosexual", "file text", "file text outline", "find", "first aid", "fork", "game", "gay", "gbp", "google plus circle", "google plus official", "grab", "graduation", "grid layout", "group", "h", "hand victory", "handicap", "hard of hearing", "header", "help circle", "help", "heterosexual", "hide", "hotel", "hourglass four", "hourglass full", "hourglass one", "hourglass three", "hourglass two", "idea", "ils", "in cart", "inr", "intergender", "intersex", "jpy", "krw", "lab", "law", "legal", "lesbian", "lightning", "like", "line graph", "linkedin square", "linkify", "lira", "list layout", "magnify", "mail forward", "mail outline", "mail square", "mail", "male homosexual", "man", "marker", "mars alternate", "mars horizontal", "mars vertical", "microsoft edge", "military", "ms edge", "mute", "new pied piper", "non binary transgender", "numbered list", "options", "other gender horizontal", "other gender vertical", "other gender", "payment", "paypal card", "pencil square", "photo", "picture", "pie chart", "pie graph", "pied piper hat", "pin", "plus cart", "point", "pointing down", "pointing left", "pointing right", "pointing up", "pound", "power cord", "power", "privacy", "r circle", "rain", "record", "refresh", "remove circle", "remove from calendar", "remove user", "remove", "repeat", "rmb", "rouble", "rub", "ruble", "rupee", "s15", "selected radio", "send", "setting", "settings", "shekel", "sheqel", "shipping", "shop", "shuffle", "shutdown", "sidebar", "signing", "signup", "sliders", "soccer", "sort alphabet ascending", "sort alphabet descending", "sort ascending", "sort content ascending", "sort content descending", "sort descending", "sort numeric ascending", "sort numeric descending", "sound", "spy", "stripe card", "student", "talk", "target", "teletype", "television", "text cursor", "text telephone", "theme", "thermometer", "thumb tack", "time", "tm", "toggle down", "toggle left", "toggle right", "toggle up", "translate", "travel", "treatment", "triangle down", "triangle left", "triangle right", "triangle up", "try", "unhide", "unlinkify", "unmute", "usd", "user cancel", "user close", "user delete", "user x", "vcard", "video camera", "video play", "volume control phone", "wait", "warning circle", "warning sign", "warning", "wi-fi", "winner", "wizard", "woman", "won", "wordpress beginner", "wordpress forms", "world", "write square", "x", "yen", "zip", "zoom in", "zoom out", "zoom", "bitbucket square", "checkmark box", "circle thin", "cloud download", "cloud upload", "compose", "conversation", "credit card alternative", "currency", "dashboard", "diamond", "disk", "exchange", "external share", "external square", "external", "facebook official", "food", "hourglass zero", "level down", "level up", "log out", "meanpath", "money", "move", "pencil", "protect", "radio", "remove bookmark", "resize horizontal", "resize vertical", "sign in", "sign out", "spoon", "star half empty", "star half full", "ticket", "times rectangle", "write", "youtube play"], T2 = pu([].concat(_2, O2)), x2 = [
  "left dropdown"
  // nested dropdown menu direction icon
], P2 = pu([].concat(T2, x2));
function A2(e, t) {
  return cu(e, t);
}
var C2 = Ra() && process.env.NODE_ENV !== "test" ? b.useLayoutEffect : b.useEffect;
const ov = C2;
var $2 = /\s+/;
function R2(e) {
  var t = [];
  return e ? (e.forEach(function(r) {
    if (typeof r.current == "string") {
      var n = r.current.split($2);
      n.forEach(function(i) {
        t.push(i);
      });
    }
  }), t.filter(function(r, n, i) {
    return r.length > 0 && i.indexOf(r) === n;
  })) : [];
}
function N2(e, t) {
  return [t.filter(function(r) {
    return e.indexOf(r) === -1;
  }), e.filter(function(r) {
    return t.indexOf(r) === -1;
  })];
}
var sv = /* @__PURE__ */ new Map(), md = function(t, r) {
  var n = R2(r), i = N2(sv.get(t) || [], n), s = i[0], l = i[1];
  t && (s.forEach(function(u) {
    return t.classList.add(u);
  }), l.forEach(function(u) {
    return t.classList.remove(u);
  })), sv.set(t, n);
}, I2 = function() {
  var t = this;
  this.add = function(r, n) {
    if (t.nodes.has(r)) {
      var i = t.nodes.get(r);
      i.add(n);
      return;
    }
    var s = /* @__PURE__ */ new Set();
    s.add(n), t.nodes.set(r, s);
  }, this.del = function(r, n) {
    if (t.nodes.has(r)) {
      var i = t.nodes.get(r);
      if (i.size === 1) {
        t.nodes.delete(r);
        return;
      }
      i.delete(n);
    }
  }, this.emit = function(r, n) {
    n(r, t.nodes.get(r));
  }, this.nodes = /* @__PURE__ */ new Map();
}, Ao = new I2();
function k2(e, t) {
  var r = b.useRef(), n = b.useRef(!1);
  ov(function() {
    if (r.current = t, n.current) {
      var i = vm(e) ? e.current : e;
      Ao.emit(i, md);
    }
    n.current = !0;
  }, [t]), ov(function() {
    var i = vm(e) ? e.current : e;
    return Ao.add(i, r), Ao.emit(i, md), function() {
      Ao.del(i, r), Ao.emit(i, md);
    };
  }, [e]);
}
var D2 = ji(function(e, t) {
  return Ho(e) ? jb(e, t) : [];
});
const Lt = D2;
function Ci(e) {
  var t = e.children, r = e.className, n = e.content, i = e.size, s = te(i, "icons", r), l = oe(Ci, e), u = ce(Ci, e);
  return /* @__PURE__ */ b.createElement(u, z({}, l, {
    className: s
  }), le(t) ? n : t);
}
Ci.handledProps = ["as", "children", "className", "content", "size"];
Ci.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** Size of the icon group. */
  size: d.oneOf(Lt(Qt, "medium"))
} : {};
Ci.defaultProps = {
  as: "i"
};
var Ba = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(u) {
      var f = n.props.disabled;
      if (f) {
        u.preventDefault();
        return;
      }
      ie(n.props, "onClick", u, n.props);
    }, n;
  }
  var r = t.prototype;
  return r.getIconAriaOptions = function() {
    var i = {}, s = this.props, l = s["aria-label"], u = s["aria-hidden"];
    return qe(l) ? i["aria-hidden"] = "true" : i["aria-label"] = l, qe(u) || (i["aria-hidden"] = u), i;
  }, r.render = function() {
    var i = this.props, s = i.bordered, l = i.circular, u = i.className, f = i.color, p = i.corner, h = i.disabled, m = i.fitted, v = i.flipped, w = i.inverted, O = i.link, T = i.loading, _ = i.name, A = i.rotated, M = i.size, k = te(f, _, M, C(s, "bordered"), C(l, "circular"), C(h, "disabled"), C(m, "fitted"), C(w, "inverted"), C(O, "link"), C(T, "loading"), rt(p, "corner"), kt(v, "flipped"), kt(A, "rotated"), "icon", u), U = oe(t, this.props), N = ce(t, this.props), F = this.getIconAriaOptions();
    return /* @__PURE__ */ b.createElement(N, z({}, U, F, {
      className: k,
      onClick: this.handleClick
    }));
  }, t;
}(hb);
Ba.handledProps = ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"];
Ba.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Formatted to appear bordered. */
  bordered: d.bool,
  /** Icon can formatted to appear circular. */
  circular: d.bool,
  /** Additional classes. */
  className: d.string,
  /** Color of the icon. */
  color: d.oneOf(hr),
  /** Icons can display a smaller corner icon. */
  corner: d.oneOfType([d.bool, d.oneOf(["top left", "top right", "bottom left", "bottom right"])]),
  /** Show that the icon is inactive. */
  disabled: d.bool,
  /** Fitted, without space to left or right of Icon. */
  fitted: d.bool,
  /** Icon can be flipped. */
  flipped: d.oneOf(["horizontally", "vertically"]),
  /** Formatted to have its colors inverted for contrast. */
  inverted: d.bool,
  /** Icon can be formatted as a link. */
  link: d.bool,
  /** Icon can be used as a simple loader. */
  loading: d.bool,
  /** Name of the icon. */
  name: tE(P2),
  /** Icon can rotated. */
  rotated: d.oneOf(["clockwise", "counterclockwise"]),
  /** Size of the icon. */
  size: d.oneOf(Lt(Qt, "medium")),
  /** Icon can have an aria label. */
  "aria-hidden": d.string,
  /** Icon can have an aria label. */
  "aria-label": d.string
} : {};
Ba.defaultProps = {
  as: "i"
};
Ba.Group = Ci;
Ba.create = Ue(Ba, function(e) {
  return {
    name: e
  };
});
const wt = Ba;
var lv = function(t) {
  return t !== null && !Array.isArray(t) && typeof t == "object";
}, Ul = {
  // ----------------------------------------
  // By Code
  // ----------------------------------------
  3: "Cancel",
  6: "Help",
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  28: "Convert",
  29: "NonConvert",
  30: "Accept",
  31: "ModeChange",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  41: "Select",
  42: "Print",
  43: "Execute",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  48: ["0", ")"],
  49: ["1", "!"],
  50: ["2", "@"],
  51: ["3", "#"],
  52: ["4", "$"],
  53: ["5", "%"],
  54: ["6", "^"],
  55: ["7", "&"],
  56: ["8", "*"],
  57: ["9", "("],
  91: "OS",
  93: "ContextMenu",
  144: "NumLock",
  145: "ScrollLock",
  181: "VolumeMute",
  182: "VolumeDown",
  183: "VolumeUp",
  186: [";", ":"],
  187: ["=", "+"],
  188: [",", "<"],
  189: ["-", "_"],
  190: [".", ">"],
  191: ["/", "?"],
  192: ["`", "~"],
  219: ["[", "{"],
  220: ["\\", "|"],
  221: ["]", "}"],
  222: ["'", '"'],
  224: "Meta",
  225: "AltGraph",
  246: "Attn",
  247: "CrSel",
  248: "ExSel",
  249: "EraseEof",
  250: "Play",
  251: "ZoomOut"
};
for (var bl = 0; bl < 24; bl += 1)
  Ul[112 + bl] = "F" + (bl + 1);
for (var vd = 0; vd < 26; vd += 1) {
  var yd = vd + 65;
  Ul[yd] = [String.fromCharCode(yd + 32), String.fromCharCode(yd)];
}
var Z = {
  codes: Ul,
  /**
   * Get the `keyCode` or `which` value from a keyboard event or `key` name.
   * @param {string|object} eventOrKey A keyboard event-like object or `key` name.
   * @param {string} [eventOrKey.key] If object, it must have one of these keys.
   * @param {number} [eventOrKey.keyCode] If object, it must have one of these keys.
   * @param {number} [eventOrKey.which] If object, it must have one of these keys.
   * @returns {number|undefined}
   */
  getCode: function(t) {
    return lv(t) ? t.keyCode || t.which || this[t.key] : this[t];
  },
  /**
   * Get the key name from a keyboard event, `keyCode`, or `which` value.
   * @param {number|object} eventOrCode A keyboard event-like object or key code.
   * @param {string} [eventOrCode.key] If object with a `key` name, it will be returned.
   * @param {number} [eventOrCode.keyCode] If object, it must have one of these keys.
   * @param {number} [eventOrCode.which] If object, it must have one of these keys.
   * @param {boolean} [eventOrCode.shiftKey] If object, it must have one of these keys.
   * @returns {string|undefined}
   */
  getKey: function(t) {
    var r = lv(t);
    if (r && t.key)
      return t.key;
    var n = Ul[r ? t.keyCode || t.which : t];
    return Array.isArray(n) && (r ? n = n[t.shiftKey ? 1 : 0] : n = n[0]), n;
  },
  // ----------------------------------------
  // By Name
  // ----------------------------------------
  // declare these manually for static analysis
  Cancel: 3,
  Help: 6,
  Backspace: 8,
  Tab: 9,
  Clear: 12,
  Enter: 13,
  Shift: 16,
  Control: 17,
  Alt: 18,
  Pause: 19,
  CapsLock: 20,
  Escape: 27,
  Convert: 28,
  NonConvert: 29,
  Accept: 30,
  ModeChange: 31,
  " ": 32,
  PageUp: 33,
  PageDown: 34,
  End: 35,
  Home: 36,
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40,
  Select: 41,
  Print: 42,
  Execute: 43,
  PrintScreen: 44,
  Insert: 45,
  Delete: 46,
  0: 48,
  ")": 48,
  1: 49,
  "!": 49,
  2: 50,
  "@": 50,
  3: 51,
  "#": 51,
  4: 52,
  $: 52,
  5: 53,
  "%": 53,
  6: 54,
  "^": 54,
  7: 55,
  "&": 55,
  8: 56,
  "*": 56,
  9: 57,
  "(": 57,
  a: 65,
  A: 65,
  b: 66,
  B: 66,
  c: 67,
  C: 67,
  d: 68,
  D: 68,
  e: 69,
  E: 69,
  f: 70,
  F: 70,
  g: 71,
  G: 71,
  h: 72,
  H: 72,
  i: 73,
  I: 73,
  j: 74,
  J: 74,
  k: 75,
  K: 75,
  l: 76,
  L: 76,
  m: 77,
  M: 77,
  n: 78,
  N: 78,
  o: 79,
  O: 79,
  p: 80,
  P: 80,
  q: 81,
  Q: 81,
  r: 82,
  R: 82,
  s: 83,
  S: 83,
  t: 84,
  T: 84,
  u: 85,
  U: 85,
  v: 86,
  V: 86,
  w: 87,
  W: 87,
  x: 88,
  X: 88,
  y: 89,
  Y: 89,
  z: 90,
  Z: 90,
  OS: 91,
  ContextMenu: 93,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  F13: 124,
  F14: 125,
  F15: 126,
  F16: 127,
  F17: 128,
  F18: 129,
  F19: 130,
  F20: 131,
  F21: 132,
  F22: 133,
  F23: 134,
  F24: 135,
  NumLock: 144,
  ScrollLock: 145,
  VolumeMute: 181,
  VolumeDown: 182,
  VolumeUp: 183,
  ";": 186,
  ":": 186,
  "=": 187,
  "+": 187,
  ",": 188,
  "<": 188,
  "-": 189,
  _: 189,
  ".": 190,
  ">": 190,
  "/": 191,
  "?": 191,
  "`": 192,
  "~": 192,
  "[": 219,
  "{": 219,
  "\\": 220,
  "|": 220,
  "]": 221,
  "}": 221,
  "'": 222,
  '"': 222,
  Meta: 224,
  AltGraph: 225,
  Attn: 246,
  CrSel: 247,
  ExSel: 248,
  EraseEof: 249,
  Play: 250,
  ZoomOut: 251
};
Z.Spacebar = Z[" "];
Z.Digit0 = Z[0];
Z.Digit1 = Z[1];
Z.Digit2 = Z[2];
Z.Digit3 = Z[3];
Z.Digit4 = Z[4];
Z.Digit5 = Z[5];
Z.Digit6 = Z[6];
Z.Digit7 = Z[7];
Z.Digit8 = Z[8];
Z.Digit9 = Z[9];
Z.Tilde = Z["~"];
Z.GraveAccent = Z["`"];
Z.ExclamationPoint = Z["!"];
Z.AtSign = Z["@"];
Z.PoundSign = Z["#"];
Z.PercentSign = Z["%"];
Z.Caret = Z["^"];
Z.Ampersand = Z["&"];
Z.PlusSign = Z["+"];
Z.MinusSign = Z["-"];
Z.EqualsSign = Z["="];
Z.DivisionSign = Z["/"];
Z.MultiplicationSign = Z["*"];
Z.Comma = Z[","];
Z.Decimal = Z["."];
Z.Colon = Z[":"];
Z.Semicolon = Z[";"];
Z.Pipe = Z["|"];
Z.BackSlash = Z["\\"];
Z.QuestionMark = Z["?"];
Z.SingleQuote = Z["'"];
Z.DoubleQuote = Z['"'];
Z.LeftCurlyBrace = Z["{"];
Z.RightCurlyBrace = Z["}"];
Z.LeftParenthesis = Z["("];
Z.RightParenthesis = Z[")"];
Z.LeftAngleBracket = Z["<"];
Z.RightAngleBracket = Z[">"];
Z.LeftSquareBracket = Z["["];
Z.RightSquareBracket = Z["]"];
var M2 = Z;
const St = /* @__PURE__ */ Ct(M2);
var cf = { exports: {} }, Ke = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uv;
function L2() {
  if (uv)
    return Ke;
  uv = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), O;
  O = Symbol.for("react.module.reference");
  function T(_) {
    if (typeof _ == "object" && _ !== null) {
      var A = _.$$typeof;
      switch (A) {
        case e:
          switch (_ = _.type, _) {
            case r:
            case i:
            case n:
            case p:
            case h:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case u:
                case l:
                case f:
                case v:
                case m:
                case s:
                  return _;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  return Ke.ContextConsumer = l, Ke.ContextProvider = s, Ke.Element = e, Ke.ForwardRef = f, Ke.Fragment = r, Ke.Lazy = v, Ke.Memo = m, Ke.Portal = t, Ke.Profiler = i, Ke.StrictMode = n, Ke.Suspense = p, Ke.SuspenseList = h, Ke.isAsyncMode = function() {
    return !1;
  }, Ke.isConcurrentMode = function() {
    return !1;
  }, Ke.isContextConsumer = function(_) {
    return T(_) === l;
  }, Ke.isContextProvider = function(_) {
    return T(_) === s;
  }, Ke.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === e;
  }, Ke.isForwardRef = function(_) {
    return T(_) === f;
  }, Ke.isFragment = function(_) {
    return T(_) === r;
  }, Ke.isLazy = function(_) {
    return T(_) === v;
  }, Ke.isMemo = function(_) {
    return T(_) === m;
  }, Ke.isPortal = function(_) {
    return T(_) === t;
  }, Ke.isProfiler = function(_) {
    return T(_) === i;
  }, Ke.isStrictMode = function(_) {
    return T(_) === n;
  }, Ke.isSuspense = function(_) {
    return T(_) === p;
  }, Ke.isSuspenseList = function(_) {
    return T(_) === h;
  }, Ke.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === r || _ === i || _ === n || _ === p || _ === h || _ === w || typeof _ == "object" && _ !== null && (_.$$typeof === v || _.$$typeof === m || _.$$typeof === s || _.$$typeof === l || _.$$typeof === f || _.$$typeof === O || _.getModuleId !== void 0);
  }, Ke.typeOf = T, Ke;
}
var Ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cv;
function F2() {
  return cv || (cv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), O = !1, T = !1, _ = !1, A = !1, M = !1, k;
    k = Symbol.for("react.module.reference");
    function U(ne) {
      return !!(typeof ne == "string" || typeof ne == "function" || ne === r || ne === i || M || ne === n || ne === p || ne === h || A || ne === w || O || T || _ || typeof ne == "object" && ne !== null && (ne.$$typeof === v || ne.$$typeof === m || ne.$$typeof === s || ne.$$typeof === l || ne.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      ne.$$typeof === k || ne.getModuleId !== void 0));
    }
    function N(ne) {
      if (typeof ne == "object" && ne !== null) {
        var Yt = ne.$$typeof;
        switch (Yt) {
          case e:
            var nn = ne.type;
            switch (nn) {
              case r:
              case i:
              case n:
              case p:
              case h:
                return nn;
              default:
                var Bt = nn && nn.$$typeof;
                switch (Bt) {
                  case u:
                  case l:
                  case f:
                  case v:
                  case m:
                  case s:
                    return Bt;
                  default:
                    return Yt;
                }
            }
          case t:
            return Yt;
        }
      }
    }
    var F = l, x = s, $ = e, I = f, B = r, V = v, X = m, W = t, se = i, _e = n, Oe = p, Te = h, ze = !1, Ze = !1;
    function K(ne) {
      return ze || (ze = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function J(ne) {
      return Ze || (Ze = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function we(ne) {
      return N(ne) === l;
    }
    function ge(ne) {
      return N(ne) === s;
    }
    function fe(ne) {
      return typeof ne == "object" && ne !== null && ne.$$typeof === e;
    }
    function Se(ne) {
      return N(ne) === f;
    }
    function he(ne) {
      return N(ne) === r;
    }
    function xe(ne) {
      return N(ne) === v;
    }
    function Pe(ne) {
      return N(ne) === m;
    }
    function Ae(ne) {
      return N(ne) === t;
    }
    function Ne(ne) {
      return N(ne) === i;
    }
    function re(ne) {
      return N(ne) === n;
    }
    function ee(ne) {
      return N(ne) === p;
    }
    function ht(ne) {
      return N(ne) === h;
    }
    Ye.ContextConsumer = F, Ye.ContextProvider = x, Ye.Element = $, Ye.ForwardRef = I, Ye.Fragment = B, Ye.Lazy = V, Ye.Memo = X, Ye.Portal = W, Ye.Profiler = se, Ye.StrictMode = _e, Ye.Suspense = Oe, Ye.SuspenseList = Te, Ye.isAsyncMode = K, Ye.isConcurrentMode = J, Ye.isContextConsumer = we, Ye.isContextProvider = ge, Ye.isElement = fe, Ye.isForwardRef = Se, Ye.isFragment = he, Ye.isLazy = xe, Ye.isMemo = Pe, Ye.isPortal = Ae, Ye.isProfiler = Ne, Ye.isStrictMode = re, Ye.isSuspense = ee, Ye.isSuspenseList = ht, Ye.isValidElementType = U, Ye.typeOf = N;
  }()), Ye;
}
process.env.NODE_ENV === "production" ? cf.exports = L2() : cf.exports = F2();
var B2 = cf.exports;
function U2(e) {
  if (e && (b.Children.only(e), B2.isFragment(e)))
    throw new Error('An "React.Fragment" cannot be used as a `trigger`.');
}
var Yf = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleRef = function(u) {
      Xr(n.props.innerRef, u);
    }, n;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    ie(this.props, "onMount", null, this.props);
  }, r.componentWillUnmount = function() {
    ie(this.props, "onUnmount", null, this.props);
  }, r.render = function() {
    if (!Ra())
      return null;
    var i = this.props, s = i.children, l = i.mountNode, u = l === void 0 ? document.body : l;
    return /* @__PURE__ */ _C(/* @__PURE__ */ b.createElement(Or, {
      innerRef: this.handleRef
    }, s), u);
  }, t;
}(We);
Yf.handledProps = ["children", "innerRef", "mountNode", "onMount", "onUnmount"];
Yf.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: d.node.isRequired,
  /** Called with a ref to the inner node. */
  innerRef: nE,
  /** The node where the portal should mount. */
  mountNode: d.any,
  /**
   * Called when the portal is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: d.func,
  /**
   * Called when the portal is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: d.func
} : {};
const fE = Yf;
var Gi = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.contentRef = /* @__PURE__ */ b.createRef(), n.triggerRef = /* @__PURE__ */ b.createRef(), n.latestDocumentMouseDownEvent = null, n.handleDocumentMouseDown = function(u) {
      n.latestDocumentMouseDownEvent = u;
    }, n.handleDocumentClick = function(u) {
      var f = n.props.closeOnDocumentClick, p = n.latestDocumentMouseDownEvent;
      n.latestDocumentMouseDownEvent = null, !(!n.contentRef.current || // no portal
      Na(n.triggerRef.current, u) || // event happened in trigger (delegate to trigger handlers)
      p && Na(n.contentRef.current, p) || // event originated in the portal but was ended outside
      Na(n.contentRef.current, u)) && f && n.close(u);
    }, n.handleEscape = function(u) {
      n.props.closeOnEscape && St.getCode(u) === St.Escape && n.close(u);
    }, n.handlePortalMouseLeave = function(u) {
      var f = n.props, p = f.closeOnPortalMouseLeave, h = f.mouseLeaveDelay;
      p && u.target === n.contentRef.current && (n.mouseLeaveTimer = n.closeWithTimeout(u, h));
    }, n.handlePortalMouseEnter = function() {
      var u = n.props.closeOnPortalMouseLeave;
      u && clearTimeout(n.mouseLeaveTimer);
    }, n.handleTriggerBlur = function(u) {
      for (var f = n.props, p = f.trigger, h = f.closeOnTriggerBlur, m = arguments.length, v = new Array(m > 1 ? m - 1 : 0), w = 1; w < m; w++)
        v[w - 1] = arguments[w];
      ie.apply(void 0, [p, "props.onBlur", u].concat(v));
      var O = u.relatedTarget || document.activeElement, T = ie(n.contentRef.current, "contains", O);
      !h || T || n.close(u);
    }, n.handleTriggerClick = function(u) {
      for (var f = n.props, p = f.trigger, h = f.closeOnTriggerClick, m = f.openOnTriggerClick, v = n.state.open, w = arguments.length, O = new Array(w > 1 ? w - 1 : 0), T = 1; T < w; T++)
        O[T - 1] = arguments[T];
      ie.apply(void 0, [p, "props.onClick", u].concat(O)), v && h ? n.close(u) : !v && m && n.open(u);
    }, n.handleTriggerFocus = function(u) {
      for (var f = n.props, p = f.trigger, h = f.openOnTriggerFocus, m = arguments.length, v = new Array(m > 1 ? m - 1 : 0), w = 1; w < m; w++)
        v[w - 1] = arguments[w];
      ie.apply(void 0, [p, "props.onFocus", u].concat(v)), h && n.open(u);
    }, n.handleTriggerMouseLeave = function(u) {
      clearTimeout(n.mouseEnterTimer);
      for (var f = n.props, p = f.trigger, h = f.closeOnTriggerMouseLeave, m = f.mouseLeaveDelay, v = arguments.length, w = new Array(v > 1 ? v - 1 : 0), O = 1; O < v; O++)
        w[O - 1] = arguments[O];
      ie.apply(void 0, [p, "props.onMouseLeave", u].concat(w)), h && (n.mouseLeaveTimer = n.closeWithTimeout(u, m));
    }, n.handleTriggerMouseEnter = function(u) {
      clearTimeout(n.mouseLeaveTimer);
      for (var f = n.props, p = f.trigger, h = f.mouseEnterDelay, m = f.openOnTriggerMouseEnter, v = arguments.length, w = new Array(v > 1 ? v - 1 : 0), O = 1; O < v; O++)
        w[O - 1] = arguments[O];
      ie.apply(void 0, [p, "props.onMouseEnter", u].concat(w)), m && (n.mouseEnterTimer = n.openWithTimeout(u, h));
    }, n.open = function(u) {
      ie(n.props, "onOpen", u, z({}, n.props, {
        open: !0
      })), n.setState({
        open: !0
      });
    }, n.openWithTimeout = function(u, f) {
      var p = z({}, u);
      return setTimeout(function() {
        return n.open(p);
      }, f || 0);
    }, n.close = function(u) {
      n.setState({
        open: !1
      }), ie(n.props, "onClose", u, z({}, n.props, {
        open: !1
      }));
    }, n.closeWithTimeout = function(u, f) {
      var p = z({}, u);
      return setTimeout(function() {
        return n.close(p);
      }, f || 0);
    }, n.handleMount = function() {
      ie(n.props, "onMount", null, n.props);
    }, n.handleUnmount = function() {
      ie(n.props, "onUnmount", null, n.props);
    }, n.handleTriggerRef = function(u) {
      n.triggerRef.current = u, Xr(n.props.triggerRef, u);
    }, n;
  }
  var r = t.prototype;
  return r.componentWillUnmount = function() {
    clearTimeout(this.mouseEnterTimer), clearTimeout(this.mouseLeaveTimer);
  }, r.render = function() {
    var i = this.props, s = i.children, l = i.eventPool, u = i.mountNode, f = i.trigger, p = this.state.open;
    return process.env.NODE_ENV !== "production" && U2(f), /* @__PURE__ */ b.createElement(b.Fragment, null, p && /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(fE, {
      innerRef: this.contentRef,
      mountNode: u,
      onMount: this.handleMount,
      onUnmount: this.handleUnmount
    }, s), /* @__PURE__ */ b.createElement(Vn, {
      name: "mouseleave",
      on: this.handlePortalMouseLeave,
      pool: l,
      target: this.contentRef
    }), /* @__PURE__ */ b.createElement(Vn, {
      name: "mouseenter",
      on: this.handlePortalMouseEnter,
      pool: l,
      target: this.contentRef
    }), /* @__PURE__ */ b.createElement(Vn, {
      name: "mousedown",
      on: this.handleDocumentMouseDown,
      pool: l
    }), /* @__PURE__ */ b.createElement(Vn, {
      name: "click",
      on: this.handleDocumentClick,
      pool: l
    }), /* @__PURE__ */ b.createElement(Vn, {
      name: "keydown",
      on: this.handleEscape,
      pool: l
    })), f && /* @__PURE__ */ b.createElement(Or, {
      innerRef: this.handleTriggerRef
    }, /* @__PURE__ */ b.cloneElement(f, {
      onBlur: this.handleTriggerBlur,
      onClick: this.handleTriggerClick,
      onFocus: this.handleTriggerFocus,
      onMouseLeave: this.handleTriggerMouseLeave,
      onMouseEnter: this.handleTriggerMouseEnter
    })));
  }, t;
}(Wi);
Gi.handledProps = ["children", "closeOnDocumentClick", "closeOnEscape", "closeOnPortalMouseLeave", "closeOnTriggerBlur", "closeOnTriggerClick", "closeOnTriggerMouseLeave", "defaultOpen", "eventPool", "mountNode", "mouseEnterDelay", "mouseLeaveDelay", "onClose", "onMount", "onOpen", "onUnmount", "open", "openOnTriggerClick", "openOnTriggerFocus", "openOnTriggerMouseEnter", "trigger", "triggerRef"];
Gi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: d.node.isRequired,
  /** Controls whether or not the portal should close when the document is clicked. */
  closeOnDocumentClick: d.bool,
  /** Controls whether or not the portal should close when escape is pressed is displayed. */
  closeOnEscape: d.bool,
  /**
   * Controls whether or not the portal should close when mousing out of the portal.
   * NOTE: This will prevent `closeOnTriggerMouseLeave` when mousing over the
   * gap from the trigger to the portal.
   */
  closeOnPortalMouseLeave: d.bool,
  /** Controls whether or not the portal should close on blur of the trigger. */
  closeOnTriggerBlur: d.bool,
  /** Controls whether or not the portal should close on click of the trigger. */
  closeOnTriggerClick: d.bool,
  /** Controls whether or not the portal should close when mousing out of the trigger. */
  closeOnTriggerMouseLeave: d.bool,
  /** Initial value of open. */
  defaultOpen: d.bool,
  /** Event pool namespace that is used to handle component events */
  eventPool: d.string,
  /** The node where the portal should mount. */
  mountNode: d.any,
  /** Milliseconds to wait before opening on mouse over */
  mouseEnterDelay: d.number,
  /** Milliseconds to wait before closing on mouse leave */
  mouseLeaveDelay: d.number,
  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: d.func,
  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: d.func,
  /**
   * Called when an open event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: d.func,
  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: d.func,
  /** Controls whether or not the portal is displayed. */
  open: d.bool,
  /** Controls whether or not the portal should open when the trigger is clicked. */
  openOnTriggerClick: d.bool,
  /** Controls whether or not the portal should open on focus of the trigger. */
  openOnTriggerFocus: d.bool,
  /** Controls whether or not the portal should open when mousing over the trigger. */
  openOnTriggerMouseEnter: d.bool,
  /** Element to be rendered in-place where the portal is defined. */
  trigger: d.node,
  /** Called with a ref to the trigger node. */
  triggerRef: nE
} : {};
Gi.defaultProps = {
  closeOnDocumentClick: !0,
  closeOnEscape: !0,
  eventPool: "default",
  openOnTriggerClick: !0
};
Gi.autoControlledProps = ["open"];
Gi.Inner = fE;
const df = Gi;
function Vo(e) {
  var t = e.blurring, r = e.className, n = e.children, i = e.content, s = e.dimmed, l = te(C(t, "blurring"), C(s, "dimmed"), "dimmable", r), u = oe(Vo, e), f = ce(Vo, e);
  return /* @__PURE__ */ b.createElement(f, z({}, u, {
    className: l
  }), le(n) ? i : n);
}
Vo.handledProps = ["as", "blurring", "children", "className", "content", "dimmed"];
Vo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A dimmable element can blur its contents. */
  blurring: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** Controls whether or not the dim is displayed. */
  dimmed: d.bool
} : {};
var Go = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.containerRef = /* @__PURE__ */ kr(), n.contentRef = /* @__PURE__ */ kr(), n.handleClick = function(u) {
      var f = n.contentRef.current;
      ie(n.props, "onClick", u, n.props), !(f && f !== u.target && Na(f, u)) && ie(n.props, "onClickOutside", u, n.props);
    }, n;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    var i = this.props.active;
    this.toggleStyles(i);
  }, r.componentDidUpdate = function(i) {
    var s = this.props.active, l = i.active;
    l !== s && this.toggleStyles(s);
  }, r.toggleStyles = function(i) {
    var s = this.containerRef.current;
    !s || !s.style || (i ? s.style.setProperty("display", "flex", "important") : s.style.removeProperty("display"));
  }, r.render = function() {
    var i = this.props, s = i.active, l = i.children, u = i.className, f = i.content, p = i.disabled, h = i.inverted, m = i.page, v = i.simple, w = i.verticalAlign, O = te("ui", C(s, "active transition visible"), C(p, "disabled"), C(h, "inverted"), C(m, "page"), C(v, "simple"), xr(w), "dimmer", u), T = oe(t, this.props), _ = ce(t, this.props), A = le(l) ? f : l;
    return /* @__PURE__ */ b.createElement(Or, {
      innerRef: this.containerRef
    }, /* @__PURE__ */ b.createElement(_, z({}, T, {
      className: O,
      onClick: this.handleClick
    }), A && /* @__PURE__ */ b.createElement("div", {
      className: "content",
      ref: this.contentRef
    }, A)));
  }, t;
}(We);
Go.handledProps = ["active", "as", "children", "className", "content", "disabled", "inverted", "onClick", "onClickOutside", "page", "simple", "verticalAlign"];
Go.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** An active dimmer will dim its parent container. */
  active: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** A disabled dimmer cannot be activated */
  disabled: d.bool,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: d.func,
  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside: d.func,
  /** A dimmer can be formatted to have its colors inverted. */
  inverted: d.bool,
  /** A dimmer can be formatted to be fixed to the page. */
  page: d.bool,
  /** A dimmer can be controlled with simple prop. */
  simple: d.bool,
  /** A dimmer can have its content top or bottom aligned. */
  verticalAlign: d.oneOf(["bottom", "top"])
} : {};
var Ua = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handlePortalMount = function() {
      Ra() && (document.body.classList.add("dimmed"), document.body.classList.add("dimmable"));
    }, n.handlePortalUnmount = function() {
      Ra() && (document.body.classList.remove("dimmed"), document.body.classList.remove("dimmable"));
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.page, u = oe(t, this.props);
    return l ? /* @__PURE__ */ b.createElement(df, {
      closeOnEscape: !1,
      closeOnDocumentClick: !1,
      onMount: this.handlePortalMount,
      onUnmount: this.handlePortalUnmount,
      open: s,
      openOnTriggerClick: !1
    }, /* @__PURE__ */ b.createElement(Go, z({}, u, {
      active: s,
      page: l
    }))) : /* @__PURE__ */ b.createElement(Go, z({}, u, {
      active: s,
      page: l
    }));
  }, t;
}(We);
Ua.handledProps = ["active", "page"];
Ua.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An active dimmer will dim its parent container. */
  active: d.bool,
  /** A dimmer can be formatted to be fixed to the page. */
  page: d.bool
} : {};
Ua.Dimmable = Vo;
Ua.Inner = Go;
Ua.create = Ue(Ua, function(e) {
  return {
    content: e
  };
});
function Qo(e) {
  var t = e.children, r = e.className, n = e.content, i = e.size, s = te("ui", i, r, "images"), l = oe(Qo, e), u = ce(Qo, e);
  return /* @__PURE__ */ b.createElement(u, z({}, l, {
    className: s
  }), le(t) ? n : t);
}
Qo.handledProps = ["as", "children", "className", "content", "size"];
Qo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** A group of images can be formatted to have the same size. */
  size: d.oneOf(Qt)
} : {};
function Ft(e) {
  var t = e.avatar, r = e.bordered, n = e.centered, i = e.children, s = e.circular, l = e.className, u = e.content, f = e.dimmer, p = e.disabled, h = e.floated, m = e.fluid, v = e.hidden, w = e.href, O = e.inline, T = e.label, _ = e.rounded, A = e.size, M = e.spaced, k = e.verticalAlign, U = e.wrapped, N = e.ui, F = te(C(N, "ui"), A, C(t, "avatar"), C(r, "bordered"), C(s, "circular"), C(n, "centered"), C(p, "disabled"), C(m, "fluid"), C(v, "hidden"), C(O, "inline"), C(_, "rounded"), rt(M, "spaced"), kt(h, "floated"), xr(k), "image", l), x = oe(Ft, e), $ = Kf(x, {
    htmlProps: bD
  }), I = $[0], B = $[1], V = ce(Ft, e, function() {
    if (!qe(f) || !qe(T) || !qe(U) || !le(i))
      return "div";
  });
  return le(i) ? le(u) ? V === "img" ? /* @__PURE__ */ b.createElement(V, z({}, B, I, {
    className: F
  })) : /* @__PURE__ */ b.createElement(V, z({}, B, {
    className: F,
    href: w
  }), Ua.create(f, {
    autoGenerateKey: !1
  }), fr.create(T, {
    autoGenerateKey: !1
  }), /* @__PURE__ */ b.createElement("img", I)) : /* @__PURE__ */ b.createElement(V, z({}, x, {
    className: F
  }), u) : /* @__PURE__ */ b.createElement(V, z({}, x, {
    className: F
  }), i);
}
Ft.handledProps = ["as", "avatar", "bordered", "centered", "children", "circular", "className", "content", "dimmer", "disabled", "floated", "fluid", "hidden", "href", "inline", "label", "rounded", "size", "spaced", "ui", "verticalAlign", "wrapped"];
Ft.Group = Qo;
Ft.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** An image may be formatted to appear inline with text as an avatar. */
  avatar: d.bool,
  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered: d.bool,
  /** An image can appear centered in a content block. */
  centered: d.bool,
  /** Primary content. */
  children: d.node,
  /** An image may appear circular. */
  circular: d.bool,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** An image can show that it is disabled and cannot be selected. */
  disabled: d.bool,
  /** Shorthand for Dimmer. */
  dimmer: pe,
  /** An image can sit to the left or right of other content. */
  floated: d.oneOf(oa),
  /** An image can take up the width of its container. */
  fluid: je([d.bool, Xe(["size"])]),
  /** An image can be hidden. */
  hidden: d.bool,
  /** Renders the Image as an <a> tag with this href. */
  href: d.string,
  /** An image may appear inline. */
  inline: d.bool,
  /** Shorthand for Label. */
  label: pe,
  /** An image may appear rounded. */
  rounded: d.bool,
  /** An image may appear at different sizes. */
  size: d.oneOf(Qt),
  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: d.oneOfType([d.bool, d.oneOf(["left", "right"])]),
  /** Whether or not to add the ui className. */
  ui: d.bool,
  /** An image can specify its vertical alignment. */
  verticalAlign: d.oneOf(Fr),
  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped: d.bool
} : {};
Ft.defaultProps = {
  as: "img",
  ui: !0
};
Ft.create = Ue(Ft, function(e) {
  return {
    src: e
  };
});
function Qn(e) {
  var t = e.children, r = e.className, n = e.content, i = te("detail", r), s = oe(Qn, e), l = ce(Qn, e);
  return /* @__PURE__ */ b.createElement(l, z({}, s, {
    className: i
  }), le(t) ? n : t);
}
Qn.handledProps = ["as", "children", "className", "content"];
Qn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
Qn.create = Ue(Qn, function(e) {
  return {
    content: e
  };
});
function Ko(e) {
  var t = e.children, r = e.circular, n = e.className, i = e.color, s = e.content, l = e.size, u = e.tag, f = te("ui", i, l, C(r, "circular"), C(u, "tag"), "labels", n), p = oe(Ko, e), h = ce(Ko, e);
  return /* @__PURE__ */ b.createElement(h, z({}, p, {
    className: f
  }), le(t) ? s : t);
}
Ko.handledProps = ["as", "children", "circular", "className", "color", "content", "size", "tag"];
Ko.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Labels can share shapes. */
  circular: d.bool,
  /** Additional classes. */
  className: d.string,
  /** Label group can share colors together. */
  color: d.oneOf(hr),
  /** Shorthand for primary content. */
  content: me,
  /** Label group can share sizes together. */
  size: d.oneOf(Qt),
  /** Label group can share tag formatting. */
  tag: d.bool
} : {};
var fr = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(u) {
      var f = n.props.onClick;
      f && f(u, n.props);
    }, n.handleIconOverrides = function(u) {
      return {
        onClick: function(p) {
          ie(u, "onClick", p), ie(n.props, "onRemove", p, n.props);
        }
      };
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.attached, u = i.basic, f = i.children, p = i.circular, h = i.className, m = i.color, v = i.content, w = i.corner, O = i.detail, T = i.empty, _ = i.floating, A = i.horizontal, M = i.icon, k = i.image, U = i.onRemove, N = i.pointing, F = i.prompt, x = i.removeIcon, $ = i.ribbon, I = i.size, B = i.tag, V = N === !0 && "pointing" || (N === "left" || N === "right") && N + " pointing" || (N === "above" || N === "below") && "pointing " + N, X = te("ui", m, V, I, C(s, "active"), C(u, "basic"), C(p, "circular"), C(T, "empty"), C(_, "floating"), C(A, "horizontal"), C(k === !0, "image"), C(F, "prompt"), C(B, "tag"), rt(w, "corner"), rt($, "ribbon"), kt(l, "attached"), "label", h), W = oe(t, this.props), se = ce(t, this.props);
    if (!le(f))
      return /* @__PURE__ */ b.createElement(se, z({}, W, {
        className: X,
        onClick: this.handleClick
      }), f);
    var _e = ko(x) ? "delete" : x;
    return /* @__PURE__ */ b.createElement(se, z({
      className: X,
      onClick: this.handleClick
    }, W), wt.create(M, {
      autoGenerateKey: !1
    }), typeof k != "boolean" && Ft.create(k, {
      autoGenerateKey: !1
    }), v, Qn.create(O, {
      autoGenerateKey: !1
    }), U && wt.create(_e, {
      autoGenerateKey: !1,
      overrideProps: this.handleIconOverrides
    }));
  }, t;
}(We);
fr.handledProps = ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "prompt", "removeIcon", "ribbon", "size", "tag"];
fr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A label can be active. */
  active: d.bool,
  /** A label can attach to a content segment. */
  attached: d.oneOf(["top", "bottom", "top right", "top left", "bottom left", "bottom right"]),
  /** A label can reduce its complexity. */
  basic: d.bool,
  /** Primary content. */
  children: d.node,
  /** A label can be circular. */
  circular: d.bool,
  /** Additional classes. */
  className: d.string,
  /** Color of the label. */
  color: d.oneOf(hr),
  /** Shorthand for primary content. */
  content: me,
  /** A label can position itself in the corner of an element. */
  corner: d.oneOfType([d.bool, d.oneOf(["left", "right"])]),
  /** Shorthand for LabelDetail. */
  detail: pe,
  /** Formats the label as a dot. */
  empty: je([d.bool, Aa(["circular"])]),
  /** Float above another element in the upper right corner. */
  floating: d.bool,
  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: d.bool,
  /** Shorthand for Icon. */
  icon: pe,
  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: d.oneOfType([d.bool, pe]),
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: d.func,
  /**
   * Adds an "x" icon, called when "x" is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onRemove: d.func,
  /** A label can point to content next to it. */
  pointing: d.oneOfType([d.bool, d.oneOf(["above", "below", "left", "right"])]),
  /** A label can prompt for an error in your forms. */
  prompt: d.bool,
  /** Shorthand for Icon to appear as the last child and trigger onRemove. */
  removeIcon: pe,
  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: d.oneOfType([d.bool, d.oneOf(["right"])]),
  /** A label can have different sizes. */
  size: d.oneOf(Qt),
  /** A label can appear as a tag. */
  tag: d.bool
} : {};
fr.Detail = Qn;
fr.Group = Ko;
fr.create = Ue(fr, function(e) {
  return {
    content: e
  };
});
function Yo(e) {
  var t = e.children, r = e.className, n = e.content, i = e.hidden, s = e.visible, l = te(C(s, "visible"), C(i, "hidden"), "content", r), u = oe(Yo, e), f = ce(Yo, e);
  return /* @__PURE__ */ b.createElement(f, z({}, u, {
    className: l
  }), le(t) ? n : t);
}
Yo.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
Yo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** Initially hidden, visible on hover. */
  hidden: d.bool,
  /** Initially visible, hidden on hover. */
  visible: d.bool
} : {};
function Xo(e) {
  var t = e.attached, r = e.basic, n = e.buttons, i = e.children, s = e.className, l = e.color, u = e.compact, f = e.content, p = e.floated, h = e.fluid, m = e.icon, v = e.inverted, w = e.labeled, O = e.negative, T = e.positive, _ = e.primary, A = e.secondary, M = e.size, k = e.toggle, U = e.vertical, N = e.widths, F = te("ui", l, M, C(r, "basic"), C(u, "compact"), C(h, "fluid"), C(m, "icon"), C(v, "inverted"), C(w, "labeled"), C(O, "negative"), C(T, "positive"), C(_, "primary"), C(A, "secondary"), C(k, "toggle"), C(U, "vertical"), rt(t, "attached"), kt(p, "floated"), cr(N), "buttons", s), x = oe(Xo, e), $ = ce(Xo, e);
  return qe(n) ? /* @__PURE__ */ b.createElement($, z({}, x, {
    className: F
  }), le(i) ? f : i) : /* @__PURE__ */ b.createElement($, z({}, x, {
    className: F
  }), vt(n, function(I) {
    return En.create(I);
  }));
}
Xo.handledProps = ["as", "attached", "basic", "buttons", "children", "className", "color", "compact", "content", "floated", "fluid", "icon", "inverted", "labeled", "negative", "positive", "primary", "secondary", "size", "toggle", "vertical", "widths"];
Xo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Groups can be attached to other content. */
  attached: d.oneOfType([d.bool, d.oneOf(["left", "right", "top", "bottom"])]),
  /** Groups can be less pronounced. */
  basic: d.bool,
  /** Array of shorthand Button values. */
  buttons: ia,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Groups can have a shared color. */
  color: d.oneOf(hr),
  /** Groups can reduce their padding to fit into tighter spaces. */
  compact: d.bool,
  /** Shorthand for primary content. */
  content: me,
  /** Groups can be aligned to the left or right of its container. */
  floated: d.oneOf(oa),
  /** Groups can take the width of their container. */
  fluid: d.bool,
  /** Groups can be formatted as icons. */
  icon: d.bool,
  /** Groups can be formatted to appear on dark backgrounds. */
  inverted: d.bool,
  /** Groups can be formatted as labeled icon buttons. */
  labeled: d.bool,
  /** Groups can hint towards a negative consequence. */
  negative: d.bool,
  /** Groups can hint towards a positive consequence. */
  positive: d.bool,
  /** Groups can be formatted to show different levels of emphasis. */
  primary: d.bool,
  /** Groups can be formatted to show different levels of emphasis. */
  secondary: d.bool,
  /** Groups can have different sizes. */
  size: d.oneOf(Qt),
  /** Groups can be formatted to toggle on and off. */
  toggle: d.bool,
  /** Groups can be formatted to appear vertically. */
  vertical: d.bool,
  /** Groups can have their widths divided evenly. */
  widths: d.oneOf(dr)
} : {};
function Jo(e) {
  var t = e.className, r = e.text, n = te("or", t), i = oe(Jo, e), s = ce(Jo, e);
  return /* @__PURE__ */ b.createElement(s, z({}, i, {
    className: n,
    "data-text": r
  }));
}
Jo.handledProps = ["as", "className", "text"];
Jo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Additional classes. */
  className: d.string,
  /** Or buttons can have their text localized, or adjusted by using the text prop. */
  text: d.oneOfType([d.number, d.string])
} : {};
var Sn = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.ref = /* @__PURE__ */ kr(), n.computeElementType = function() {
      var u = n.props, f = u.attached, p = u.label;
      if (!qe(f) || !qe(p))
        return "div";
    }, n.computeTabIndex = function(u) {
      var f = n.props, p = f.disabled, h = f.tabIndex;
      if (!qe(h))
        return h;
      if (p)
        return -1;
      if (u === "div")
        return 0;
    }, n.focus = function(u) {
      return ie(n.ref.current, "focus", u);
    }, n.handleClick = function(u) {
      var f = n.props.disabled;
      if (f) {
        u.preventDefault();
        return;
      }
      ie(n.props, "onClick", u, n.props);
    }, n.hasIconClass = function() {
      var u = n.props, f = u.labelPosition, p = u.children, h = u.content, m = u.icon;
      return m === !0 ? !0 : m && (f || le(p) && qe(h));
    }, n;
  }
  var r = t.prototype;
  return r.computeButtonAriaRole = function(i) {
    var s = this.props.role;
    if (!qe(s))
      return s;
    if (i !== "button")
      return "button";
  }, r.render = function() {
    var i = this.props, s = i.active, l = i.animated, u = i.attached, f = i.basic, p = i.children, h = i.circular, m = i.className, v = i.color, w = i.compact, O = i.content, T = i.disabled, _ = i.floated, A = i.fluid, M = i.icon, k = i.inverted, U = i.label, N = i.labelPosition, F = i.loading, x = i.negative, $ = i.positive, I = i.primary, B = i.secondary, V = i.size, X = i.toggle, W = i.type, se = te(v, V, C(s, "active"), C(f, "basic"), C(h, "circular"), C(w, "compact"), C(A, "fluid"), C(this.hasIconClass(), "icon"), C(k, "inverted"), C(F, "loading"), C(x, "negative"), C($, "positive"), C(I, "primary"), C(B, "secondary"), C(X, "toggle"), rt(l, "animated"), rt(u, "attached")), _e = te(rt(N || !!U, "labeled")), Oe = te(C(T, "disabled"), kt(_, "floated")), Te = oe(t, this.props), ze = ce(t, this.props, this.computeElementType), Ze = this.computeTabIndex(ze);
    if (!qe(U)) {
      var K = te("ui", se, "button", m), J = te("ui", _e, "button", m, Oe), we = fr.create(U, {
        defaultProps: {
          basic: !0,
          pointing: N === "left" ? "right" : "left"
        },
        autoGenerateKey: !1
      });
      return /* @__PURE__ */ b.createElement(ze, z({}, Te, {
        className: J,
        onClick: this.handleClick
      }), N === "left" && we, /* @__PURE__ */ b.createElement(Or, {
        innerRef: this.ref
      }, /* @__PURE__ */ b.createElement("button", {
        className: K,
        "aria-pressed": X ? !!s : void 0,
        disabled: T,
        type: W,
        tabIndex: Ze
      }, wt.create(M, {
        autoGenerateKey: !1
      }), " ", O)), (N === "right" || !N) && we);
    }
    var ge = te("ui", se, Oe, _e, "button", m), fe = !le(p), Se = this.computeButtonAriaRole(ze);
    return /* @__PURE__ */ b.createElement(Or, {
      innerRef: this.ref
    }, /* @__PURE__ */ b.createElement(ze, z({}, Te, {
      className: ge,
      "aria-pressed": X ? !!s : void 0,
      disabled: T && ze === "button" || void 0,
      onClick: this.handleClick,
      role: Se,
      type: W,
      tabIndex: Ze
    }), fe && p, !fe && wt.create(M, {
      autoGenerateKey: !1
    }), !fe && O));
  }, t;
}(We);
Sn.handledProps = ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle", "type"];
Sn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A button can show it is currently the active user selection. */
  active: d.bool,
  /** A button can animate to show hidden content. */
  animated: d.oneOfType([d.bool, d.oneOf(["fade", "vertical"])]),
  /** A button can be attached to other content. */
  attached: d.oneOfType([d.bool, d.oneOf(["left", "right", "top", "bottom"])]),
  /** A basic button is less pronounced. */
  basic: d.bool,
  /** Primary content. */
  children: je([d.node, Xe(["label"]), rE({
    icon: d.oneOfType([d.string.isRequired, d.object.isRequired, d.element.isRequired])
  }, Xe(["icon"]))]),
  /** A button can be circular. */
  circular: d.bool,
  /** Additional classes. */
  className: d.string,
  /** A button can have different colors */
  color: d.oneOf([].concat(hr, ["facebook", "google plus", "instagram", "linkedin", "twitter", "vk", "youtube"])),
  /** A button can reduce its padding to fit into tighter spaces. */
  compact: d.bool,
  /** Shorthand for primary content. */
  content: me,
  /** A button can show it is currently unable to be interacted with. */
  disabled: d.bool,
  /** A button can be aligned to the left or right of its container. */
  floated: d.oneOf(oa),
  /** A button can take the width of its container. */
  fluid: d.bool,
  /** Add an Icon by name, props object, or pass an <Icon />. */
  icon: d.oneOfType([d.bool, d.string, d.object, d.element]),
  /** A button can be formatted to appear on dark backgrounds. */
  inverted: d.bool,
  /** Add a Label by text, props object, or pass a <Label />. */
  label: d.oneOfType([d.string, d.object, d.element]),
  /** A labeled button can format a Label or Icon to appear on the left or right. */
  labelPosition: d.oneOf(["right", "left"]),
  /** A button can show a loading indicator. */
  loading: d.bool,
  /** A button can hint towards a negative consequence. */
  negative: d.bool,
  /**
   * Called after user's click.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: d.func,
  /** A button can hint towards a positive consequence. */
  positive: d.bool,
  /** A button can be formatted to show different levels of emphasis. */
  primary: d.bool,
  /** The role of the HTML element. */
  role: d.string,
  /** A button can be formatted to show different levels of emphasis. */
  secondary: d.bool,
  /** A button can have different sizes. */
  size: d.oneOf(Qt),
  /** A button can receive focus. */
  tabIndex: d.oneOfType([d.number, d.string]),
  /** A button can be formatted to toggle on and off. */
  toggle: d.bool,
  /** The type of the HTML element. */
  type: d.oneOf(["button", "submit", "reset"])
} : {};
Sn.defaultProps = {
  as: "button"
};
Sn.Content = Yo;
Sn.Group = Xo;
Sn.Or = Jo;
Sn.create = Ue(Sn, function(e) {
  return {
    content: e
  };
});
const En = Sn;
function pE(e, t, r, n) {
  var i = -1, s = e == null ? 0 : e.length;
  for (n && s && (r = e[++i]); ++i < s; )
    r = t(r, e[i], i, e);
  return r;
}
function z2(e, t, r, n, i) {
  return i(e, function(s, l, u) {
    r = n ? (n = !1, s) : t(r, s, l, u);
  }), r;
}
function hE(e, t, r) {
  var n = _t(e) ? pE : z2, i = arguments.length < 3;
  return n(e, aa(t), r, i, Hi);
}
var q2 = function(t, r, n, i) {
  var s = n ? n.call(i, t, r) : void 0;
  if (s !== void 0)
    return !!s;
  if (t === r)
    return !0;
  if (typeof t != "object" || !t || typeof r != "object" || !r)
    return !1;
  var l = Object.keys(t), u = Object.keys(r);
  if (l.length !== u.length)
    return !1;
  for (var f = Object.prototype.hasOwnProperty.bind(r), p = 0; p < l.length; p++) {
    var h = l[p];
    if (!f(h))
      return !1;
    var m = t[h], v = r[h];
    if (s = n ? n.call(i, m, v, h) : void 0, s === !1 || s === void 0 && m !== v)
      return !1;
  }
  return !0;
};
const Tl = /* @__PURE__ */ Ct(q2);
var za = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleButtonOverrides = function(u) {
      return {
        onClick: function(p, h) {
          ie(u, "onClick", p, h), ie(n.props, "onActionClick", p, h);
        }
      };
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this, s = this.props, l = s.actions, u = s.children, f = s.className, p = s.content, h = te("actions", f), m = oe(t, this.props), v = ce(t, this.props);
    return le(u) ? le(p) ? /* @__PURE__ */ b.createElement(v, z({}, m, {
      className: h
    }), vt(l, function(w) {
      return En.create(w, {
        overrideProps: i.handleButtonOverrides
      });
    })) : /* @__PURE__ */ b.createElement(v, z({}, m, {
      className: h
    }), p) : /* @__PURE__ */ b.createElement(v, z({}, m, {
      className: h
    }), u);
  }, t;
}(We);
za.handledProps = ["actions", "as", "children", "className", "content", "onActionClick"];
za.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Array of shorthand buttons. */
  actions: ia,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props from the clicked action.
   */
  onActionClick: je([Xe(["children"]), d.func])
} : {};
za.create = Ue(za, function(e) {
  return {
    actions: e
  };
});
function _n(e) {
  var t = e.children, r = e.className, n = e.content, i = e.image, s = e.scrolling, l = te(r, C(i, "image"), C(s, "scrolling"), "content"), u = oe(_n, e), f = ce(_n, e);
  return /* @__PURE__ */ b.createElement(f, z({}, u, {
    className: l
  }), le(t) ? n : t);
}
_n.handledProps = ["as", "children", "className", "content", "image", "scrolling"];
_n.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** A modal can contain image content. */
  image: d.bool,
  /** A modal can use the entire size of the screen. */
  scrolling: d.bool
} : {};
_n.create = Ue(_n, function(e) {
  return {
    content: e
  };
});
function $i(e) {
  var t = e.children, r = e.className, n = e.content, i = te("description", r), s = oe($i, e), l = ce($i, e);
  return /* @__PURE__ */ b.createElement(l, z({}, s, {
    className: i
  }), le(t) ? n : t);
}
$i.handledProps = ["as", "children", "className", "content"];
$i.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
function Kn(e) {
  var t = e.blurring, r = e.children, n = e.className, i = e.centered, s = e.content, l = e.inverted, u = e.mountNode, f = e.scrolling, p = b.useRef(), h = te("ui", C(l, "inverted"), C(!i, "top aligned"), "page modals dimmer transition visible active", n), m = te("dimmable dimmed", C(t, "blurring"), C(f, "scrolling")), v = oe(Kn, e), w = ce(Kn, e);
  return k2(u, m), b.useEffect(function() {
    p.current && p.current.style && p.current.style.setProperty("display", "flex", "important");
  }, []), /* @__PURE__ */ b.createElement(Or, {
    innerRef: p
  }, /* @__PURE__ */ b.createElement(w, z({}, v, {
    className: h
  }), le(r) ? s : r));
}
Kn.handledProps = ["as", "blurring", "centered", "children", "className", "content", "inverted", "mountNode", "scrolling"];
Kn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A dimmer can be blurred. */
  blurring: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** A dimmer can center its contents in the viewport. */
  centered: d.bool,
  /** Shorthand for primary content. */
  content: me,
  /** A dimmer can be inverted. */
  inverted: d.bool,
  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: d.any,
  /** A dimmer can make body scrollable. */
  scrolling: d.bool
} : {};
Kn.create = Ue(Kn, function(e) {
  return {
    content: e
  };
});
function On(e) {
  var t = e.children, r = e.className, n = e.content, i = te("header", r), s = oe(On, e), l = ce(On, e);
  return /* @__PURE__ */ b.createElement(l, z({}, s, {
    className: i
  }), le(t) ? n : t);
}
On.handledProps = ["as", "children", "className", "content"];
On.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
On.create = Ue(On, function(e) {
  return {
    content: e
  };
});
var dv = 0, j2 = 50, H2 = function(t) {
  var r = t.height + dv, n = t.height + dv, i = window.innerHeight, s = i / 2, l = -(n / 2), u = j2, f = s + l;
  return f + r + u < i;
}, W2 = function(t, r, n) {
  var i = r && t ? -(n.height / 2) : 0, s = -(n.width / 2);
  return {
    marginLeft: s,
    marginTop: i
  };
}, V2 = function() {
  return !window.ActiveXObject && "ActiveXObject" in window;
}, en = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.legacy = Ra() && V2(), n.ref = /* @__PURE__ */ kr(), n.dimmerRef = /* @__PURE__ */ kr(), n.latestDocumentMouseDownEvent = null, n.getMountNode = function() {
      return Ra() ? n.props.mountNode || document.body : null;
    }, n.handleActionsOverrides = function(u) {
      return {
        onActionClick: function(p, h) {
          ie(u, "onActionClick", p, h), ie(n.props, "onActionClick", p, n.props), n.handleClose(p);
        }
      };
    }, n.handleClose = function(u) {
      n.setState({
        open: !1
      }), ie(n.props, "onClose", u, z({}, n.props, {
        open: !1
      }));
    }, n.handleDocumentMouseDown = function(u) {
      n.latestDocumentMouseDownEvent = u;
    }, n.handleDocumentClick = function(u) {
      var f = n.props.closeOnDimmerClick, p = n.latestDocumentMouseDownEvent;
      n.latestDocumentMouseDownEvent = null, !(!f || Na(n.ref.current, p) || Na(n.ref.current, u)) && (n.setState({
        open: !1
      }), ie(n.props, "onClose", u, z({}, n.props, {
        open: !1
      })));
    }, n.handleIconOverrides = function(u) {
      return {
        onClick: function(p) {
          ie(u, "onClick", p), n.handleClose(p);
        }
      };
    }, n.handleOpen = function(u) {
      ie(n.props, "onOpen", u, z({}, n.props, {
        open: !0
      })), n.setState({
        open: !0
      });
    }, n.handlePortalMount = function(u) {
      var f = n.props.eventPool;
      n.setState({
        scrolling: !1
      }), n.setPositionAndClassNames(), yl.sub("mousedown", n.handleDocumentMouseDown, {
        pool: f,
        target: n.dimmerRef.current
      }), yl.sub("click", n.handleDocumentClick, {
        pool: f,
        target: n.dimmerRef.current
      }), ie(n.props, "onMount", u, n.props);
    }, n.handlePortalUnmount = function(u) {
      var f = n.props.eventPool;
      cancelAnimationFrame(n.animationRequestId), yl.unsub("mousedown", n.handleDocumentMouseDown, {
        pool: f,
        target: n.dimmerRef.current
      }), yl.unsub("click", n.handleDocumentClick, {
        pool: f,
        target: n.dimmerRef.current
      }), ie(n.props, "onUnmount", u, n.props);
    }, n.setPositionAndClassNames = function() {
      var u = n.props.centered, f, p = {};
      if (n.ref.current) {
        var h = n.ref.current.getBoundingClientRect(), m = H2(h);
        f = !m;
        var v = n.legacy ? W2(m, u, h) : {};
        Tl(n.state.legacyStyles, v) || (p.legacyStyles = v), n.state.scrolling !== f && (p.scrolling = f);
      }
      Pa(p) || n.setState(p), n.animationRequestId = requestAnimationFrame(n.setPositionAndClassNames);
    }, n.renderContent = function(u) {
      var f = n.props, p = f.actions, h = f.basic, m = f.children, v = f.className, w = f.closeIcon, O = f.content, T = f.header, _ = f.size, A = f.style, M = n.state, k = M.legacyStyles, U = M.scrolling, N = te("ui", _, C(h, "basic"), C(n.legacy, "legacy"), C(U, "scrolling"), "modal transition visible active", v), F = ce(t, n.props), x = w === !0 ? "close" : w, $ = wt.create(x, {
        overrideProps: n.handleIconOverrides
      });
      return /* @__PURE__ */ b.createElement(Or, {
        innerRef: n.ref
      }, /* @__PURE__ */ b.createElement(F, z({}, u, {
        className: N,
        style: z({}, k, A)
      }), $, le(m) ? /* @__PURE__ */ b.createElement(b.Fragment, null, On.create(T, {
        autoGenerateKey: !1
      }), _n.create(O, {
        autoGenerateKey: !1
      }), za.create(p, {
        overrideProps: n.handleActionsOverrides
      })) : m));
    }, n;
  }
  var r = t.prototype;
  return r.componentWillUnmount = function() {
    this.handlePortalUnmount();
  }, r.render = function() {
    var i = this.props, s = i.centered, l = i.closeOnDocumentClick, u = i.dimmer, f = i.eventPool, p = i.trigger, h = this.state, m = h.open, v = h.scrolling, w = this.getMountNode();
    if (!Ra())
      return /* @__PURE__ */ gb(p) ? p : null;
    var O = oe(t, this.props), T = df.handledProps, _ = hE(O, function(M, k, U) {
      return Vi(T, U) || (M[U] = k), M;
    }, {}), A = Vf(O, T);
    return /* @__PURE__ */ b.createElement(df, z({
      closeOnDocumentClick: l
    }, A, {
      trigger: p,
      eventPool: f,
      mountNode: w,
      open: m,
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount
    }), /* @__PURE__ */ b.createElement(Or, {
      innerRef: this.dimmerRef
    }, Kn.create(fu(u) ? u : {}, {
      autoGenerateKey: !1,
      defaultProps: {
        blurring: u === "blurring",
        inverted: u === "inverted"
      },
      overrideProps: {
        children: this.renderContent(_),
        centered: s,
        mountNode: w,
        scrolling: v
      }
    })));
  }, t;
}(Wi);
en.handledProps = ["actions", "as", "basic", "centered", "children", "className", "closeIcon", "closeOnDimmerClick", "closeOnDocumentClick", "content", "defaultOpen", "dimmer", "eventPool", "header", "mountNode", "onActionClick", "onClose", "onMount", "onOpen", "onUnmount", "open", "size", "style", "trigger"];
en.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions: pe,
  /** A modal can reduce its complexity */
  basic: d.bool,
  /** A modal can be vertically centered in the viewport */
  centered: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for the close icon. Closes the modal on click. */
  closeIcon: d.oneOfType([d.node, d.object, d.bool]),
  /** Whether or not the Modal should close when the dimmer is clicked. */
  closeOnDimmerClick: d.bool,
  /** Whether or not the Modal should close when the document is clicked. */
  closeOnDocumentClick: d.bool,
  /** Simple text content for the Modal. */
  content: pe,
  /** Initial value of open. */
  defaultOpen: d.bool,
  /** A Modal can appear in a dimmer. */
  dimmer: d.oneOfType([d.bool, d.func, d.object, d.oneOf(["inverted", "blurring"])]),
  /** Event pool namespace that is used to handle component events */
  eventPool: d.string,
  /** Modal displayed above the content in bold. */
  header: pe,
  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: d.any,
  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onActionClick: d.func,
  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: d.func,
  /**
   * Called when the modal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: d.func,
  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: d.func,
  /**
   * Called when the modal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: d.func,
  /** Controls whether or not the Modal is displayed. */
  open: d.bool,
  /** A modal can vary in size */
  size: d.oneOf(["mini", "tiny", "small", "large", "fullscreen"]),
  /** Custom styles. */
  style: d.object,
  /** Element to be rendered in-place where the modal is defined. */
  trigger: d.node
  /**
   * NOTE: Any unhandled props that are defined in Modal are passed-through
   * to the inner Portal.
   */
} : {};
en.defaultProps = {
  centered: !0,
  dimmer: !0,
  closeOnDimmerClick: !0,
  closeOnDocumentClick: !1,
  eventPool: "Modal"
};
en.autoControlledProps = ["open"];
en.Actions = za;
en.Content = _n;
en.Description = $i;
en.Dimmer = Kn;
en.Header = On;
const G2 = en;
function Zo(e) {
  var t = e.children, r = e.className, n = e.content, i = te("header", r), s = oe(Zo, e), l = ce(Zo, e);
  return /* @__PURE__ */ b.createElement(l, z({}, s, {
    className: i
  }), le(t) ? n : t);
}
Zo.handledProps = ["as", "children", "className", "content"];
Zo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
function Q2(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var K2 = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, Y2 = Q2(K2);
const X2 = Y2;
var J2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Z2 = "\\u0300-\\u036f", eM = "\\ufe20-\\ufe2f", tM = "\\u20d0-\\u20ff", rM = Z2 + eM + tM, nM = "[" + rM + "]", aM = RegExp(nM, "g");
function ff(e) {
  return e = Ja(e), e && e.replace(J2, X2).replace(aM, "");
}
var iM = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function oM(e) {
  return e.match(iM) || [];
}
var sM = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function lM(e) {
  return sM.test(e);
}
var gE = "\\ud800-\\udfff", uM = "\\u0300-\\u036f", cM = "\\ufe20-\\ufe2f", dM = "\\u20d0-\\u20ff", fM = uM + cM + dM, mE = "\\u2700-\\u27bf", vE = "a-z\\xdf-\\xf6\\xf8-\\xff", pM = "\\xac\\xb1\\xd7\\xf7", hM = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", gM = "\\u2000-\\u206f", mM = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", yE = "A-Z\\xc0-\\xd6\\xd8-\\xde", vM = "\\ufe0e\\ufe0f", bE = pM + hM + gM + mM, EE = "['’]", fv = "[" + bE + "]", yM = "[" + fM + "]", wE = "\\d+", bM = "[" + mE + "]", SE = "[" + vE + "]", _E = "[^" + gE + bE + wE + mE + vE + yE + "]", EM = "\\ud83c[\\udffb-\\udfff]", wM = "(?:" + yM + "|" + EM + ")", SM = "[^" + gE + "]", OE = "(?:\\ud83c[\\udde6-\\uddff]){2}", TE = "[\\ud800-\\udbff][\\udc00-\\udfff]", bi = "[" + yE + "]", _M = "\\u200d", pv = "(?:" + SE + "|" + _E + ")", OM = "(?:" + bi + "|" + _E + ")", hv = "(?:" + EE + "(?:d|ll|m|re|s|t|ve))?", gv = "(?:" + EE + "(?:D|LL|M|RE|S|T|VE))?", xE = wM + "?", PE = "[" + vM + "]?", TM = "(?:" + _M + "(?:" + [SM, OE, TE].join("|") + ")" + PE + xE + ")*", xM = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", PM = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", AM = PE + xE + TM, CM = "(?:" + [bM, OE, TE].join("|") + ")" + AM, $M = RegExp([
  bi + "?" + SE + "+" + hv + "(?=" + [fv, bi, "$"].join("|") + ")",
  OM + "+" + gv + "(?=" + [fv, bi + pv, "$"].join("|") + ")",
  bi + "?" + pv + "+" + hv,
  bi + "+" + gv,
  PM,
  xM,
  wE,
  CM
].join("|"), "g");
function RM(e) {
  return e.match($M) || [];
}
function NM(e, t, r) {
  return e = Ja(e), t = r ? void 0 : t, t === void 0 ? lM(e) ? RM(e) : oM(e) : e.match(t) || [];
}
var IM = "['’]", kM = RegExp(IM, "g");
function DM(e) {
  return function(t) {
    return pE(NM(ff(t).replace(kM, "")), e, "");
  };
}
function MM(e) {
  return function(t) {
    t = Ja(t);
    var r = Wf(t) ? uf(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? Hb(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var LM = MM("toUpperCase");
const FM = LM;
var BM = DM(function(e, t, r) {
  return e + (r ? " " : "") + FM(t);
});
const UM = BM;
var qa = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(u) {
      var f = n.props.disabled;
      f || ie(n.props, "onClick", u, n.props);
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.children, u = i.className, f = i.color, p = i.content, h = i.disabled, m = i.fitted, v = i.header, w = i.icon, O = i.link, T = i.name, _ = i.onClick, A = i.position, M = te(f, A, C(s, "active"), C(h, "disabled"), C(w === !0 || w && !(T || p), "icon"), C(v, "header"), C(O, "link"), rt(m, "fitted"), "item", u), k = ce(t, this.props, function() {
      if (_)
        return "a";
    }), U = oe(t, this.props);
    return le(l) ? /* @__PURE__ */ b.createElement(k, z({}, U, {
      className: M,
      onClick: this.handleClick
    }), wt.create(w, {
      autoGenerateKey: !1
    }), le(p) ? UM(T) : p) : /* @__PURE__ */ b.createElement(k, z({}, U, {
      className: M,
      onClick: this.handleClick
    }), l);
  }, t;
}(We);
qa.handledProps = ["active", "as", "children", "className", "color", "content", "disabled", "fitted", "header", "icon", "index", "link", "name", "onClick", "position"];
qa.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A menu item can be active. */
  active: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Additional colors can be specified. */
  color: d.oneOf(hr),
  /** Shorthand for primary content. */
  content: me,
  /** A menu item can be disabled. */
  disabled: d.bool,
  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: d.oneOfType([d.bool, d.oneOf(["horizontally", "vertically"])]),
  /** A menu item may include a header or may itself be a header. */
  header: d.bool,
  /** MenuItem can be only icon. */
  icon: d.oneOfType([d.bool, pe]),
  /** MenuItem index inside Menu. */
  index: d.number,
  /** A menu item can be link. */
  link: d.bool,
  /** Internal name of the MenuItem. */
  name: d.string,
  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: d.func,
  /** A menu item can take left or right position. */
  position: d.oneOf(["left", "right"])
} : {};
qa.create = Ue(qa, function(e) {
  return {
    content: e,
    name: e
  };
});
function es(e) {
  var t = e.children, r = e.className, n = e.content, i = e.position, s = te(i, "menu", r), l = oe(es, e), u = ce(es, e);
  return /* @__PURE__ */ b.createElement(u, z({}, l, {
    className: s
  }), le(t) ? n : t);
}
es.handledProps = ["as", "children", "className", "content", "position"];
es.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** A sub menu can take left or right position. */
  position: d.oneOf(["left", "right"])
} : {};
var Tn = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleItemOverrides = function(u) {
      return {
        onClick: function(p, h) {
          var m = h.index;
          n.setState({
            activeIndex: m
          }), ie(u, "onClick", p, h), ie(n.props, "onItemClick", p, h);
        }
      };
    }, n;
  }
  var r = t.prototype;
  return r.renderItems = function() {
    var i = this, s = this.props.items, l = this.state.activeIndex;
    return vt(s, function(u, f) {
      return qa.create(u, {
        defaultProps: {
          active: parseInt(l, 10) === f,
          index: f
        },
        overrideProps: i.handleItemOverrides
      });
    });
  }, r.render = function() {
    var i = this.props, s = i.attached, l = i.borderless, u = i.children, f = i.className, p = i.color, h = i.compact, m = i.fixed, v = i.floated, w = i.fluid, O = i.icon, T = i.inverted, _ = i.pagination, A = i.pointing, M = i.secondary, k = i.size, U = i.stackable, N = i.tabular, F = i.text, x = i.vertical, $ = i.widths, I = te("ui", p, k, C(l, "borderless"), C(h, "compact"), C(w, "fluid"), C(T, "inverted"), C(_, "pagination"), C(A, "pointing"), C(M, "secondary"), C(U, "stackable"), C(F, "text"), C(x, "vertical"), rt(s, "attached"), rt(v, "floated"), rt(O, "icon"), rt(N, "tabular"), kt(m, "fixed"), cr($, "item"), f, "menu"), B = oe(t, this.props), V = ce(t, this.props);
    return /* @__PURE__ */ b.createElement(V, z({}, B, {
      className: I
    }), le(u) ? this.renderItems() : u);
  }, t;
}(Wi);
Tn.handledProps = ["activeIndex", "as", "attached", "borderless", "children", "className", "color", "compact", "defaultActiveIndex", "fixed", "floated", "fluid", "icon", "inverted", "items", "onItemClick", "pagination", "pointing", "secondary", "size", "stackable", "tabular", "text", "vertical", "widths"];
Tn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Index of the currently active item. */
  activeIndex: d.oneOfType([d.number, d.string]),
  /** A menu may be attached to other content segments. */
  attached: d.oneOfType([d.bool, d.oneOf(["top", "bottom"])]),
  /** A menu item or menu can have no borders. */
  borderless: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Additional colors can be specified. */
  color: d.oneOf(hr),
  /** A menu can take up only the space necessary to fit its content. */
  compact: d.bool,
  /** Initial activeIndex value. */
  defaultActiveIndex: d.oneOfType([d.number, d.string]),
  /** A menu can be fixed to a side of its context. */
  fixed: d.oneOf(["left", "right", "bottom", "top"]),
  /** A menu can be floated. */
  floated: d.oneOfType([d.bool, d.oneOf(["right"])]),
  /** A vertical menu may take the size of its container. */
  fluid: d.bool,
  /** A menu may have just icons (bool) or labeled icons. */
  icon: d.oneOfType([d.bool, d.oneOf(["labeled"])]),
  /** A menu may have its colors inverted to show greater contrast. */
  inverted: d.bool,
  /** Shorthand array of props for Menu. */
  items: ia,
  /**
   * onClick handler for MenuItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: je([Xe(["children"]), d.func]),
  /** A pagination menu is specially formatted to present links to pages of content. */
  pagination: d.bool,
  /** A menu can point to show its relationship to nearby content. */
  pointing: d.bool,
  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary: d.bool,
  /** A menu can vary in size. */
  size: d.oneOf(Lt(Qt, "medium", "big")),
  /** A menu can stack at mobile resolutions. */
  stackable: d.bool,
  /** A menu can be formatted to show tabs of information. */
  tabular: d.oneOfType([d.bool, d.oneOf(["right"])]),
  /** A menu can be formatted for text content. */
  text: d.bool,
  /** A vertical menu displays elements vertically. */
  vertical: d.bool,
  /** A menu can have its items divided evenly. */
  widths: d.oneOf(dr)
} : {};
Tn.autoControlledProps = ["activeIndex"];
Tn.Header = Zo;
Tn.Item = qa;
Tn.Menu = es;
Tn.create = Ue(Tn, function(e) {
  return {
    items: e
  };
});
const Ti = Tn;
var ts = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(u) {
      ie(n.props, "onClick", u, n.props);
    }, n.handleKeyDown = function(u) {
      ie(n.props, "onKeyDown", u, n.props), St.getCode(u) === St.Enter && ie(n.props, "onClick", u, n.props);
    }, n.handleOverrides = function() {
      return {
        onClick: n.handleClick,
        onKeyDown: n.handleKeyDown
      };
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.type, u = this.props.disabled || l === "ellipsisItem";
    return qa.create(this.props, {
      defaultProps: {
        active: s,
        "aria-current": s,
        "aria-disabled": u,
        disabled: u,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        tabIndex: u ? -1 : 0
      },
      overrideProps: this.handleOverrides
    });
  }, t;
}(We);
ts.handledProps = ["active", "disabled", "onClick", "onKeyDown", "type"];
ts.propTypes = process.env.NODE_ENV !== "production" ? {
  /** A pagination item can be active. */
  active: d.bool,
  /** A pagination item can be disabled. */
  disabled: d.bool,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: d.func,
  /**
   * Called on key down.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyDown: d.func,
  /** A pagination should have a type. */
  type: d.oneOf(["ellipsisItem", "firstItem", "prevItem", "pageItem", "nextItem", "lastItem"])
} : {};
ts.create = Ue(ts, function(e) {
  return {
    content: e
  };
});
const AE = ts;
var Qi = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleItemClick = function(u, f) {
      var p = f.value, h = n.state.activePage;
      +h != +p && (n.setState({
        activePage: p
      }), ie(n.props, "onPageChange", u, z({}, n.props, {
        activePage: p
      })));
    }, n.handleItemOverrides = function(u, f, p) {
      return function(h) {
        return {
          active: u,
          type: f,
          key: f + "-" + p,
          onClick: function(v, w) {
            ie(h, "onClick", v, w), w.type !== "ellipsisItem" && n.handleItemClick(v, w);
          }
        };
      };
    }, n;
  }
  var r = t.prototype;
  return r.getInitialAutoControlledState = function() {
    return {
      activePage: 1
    };
  }, r.render = function() {
    var i = this, s = this.props, l = s["aria-label"], u = s.boundaryRange, f = s.disabled, p = s.ellipsisItem, h = s.siblingRange, m = s.totalPages, v = this.state.activePage, w = WD({
      activePage: v,
      boundaryRange: u,
      hideEllipsis: qe(p),
      siblingRange: h,
      totalPages: m
    }), O = oe(t, this.props);
    return /* @__PURE__ */ b.createElement(Ti, z({}, O, {
      "aria-label": l,
      pagination: !0,
      role: "navigation"
    }), vt(w, function(T) {
      var _ = T.active, A = T.type, M = T.value;
      return AE.create(i.props[A], {
        defaultProps: {
          content: M,
          disabled: f,
          value: M
        },
        overrideProps: i.handleItemOverrides(_, A, M)
      });
    }));
  }, t;
}(Wi);
Qi.handledProps = ["activePage", "aria-label", "boundaryRange", "defaultActivePage", "disabled", "ellipsisItem", "firstItem", "lastItem", "nextItem", "onPageChange", "pageItem", "prevItem", "siblingRange", "totalPages"];
Qi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** A pagination item can have an aria label. */
  "aria-label": d.string,
  /** Initial activePage value. */
  defaultActivePage: d.oneOfType([d.number, d.string]),
  /** Index of the currently active page. */
  activePage: d.oneOfType([d.number, d.string]),
  /** Number of always visible pages at the beginning and end. */
  boundaryRange: d.oneOfType([d.number, d.string]),
  /** A pagination can be disabled. */
  disabled: d.bool,
  /** A shorthand for PaginationItem. */
  ellipsisItem: pe,
  /** A shorthand for PaginationItem. */
  firstItem: pe,
  /** A shorthand for PaginationItem. */
  lastItem: pe,
  /** A shorthand for PaginationItem. */
  nextItem: pe,
  /** A shorthand for PaginationItem. */
  pageItem: pe,
  /** A shorthand for PaginationItem. */
  prevItem: pe,
  /**
   * Called on change of an active page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onPageChange: d.func,
  /** Number of always visible pages before and after the current one. */
  siblingRange: d.oneOfType([d.number, d.string]),
  /** Total number of pages. */
  totalPages: d.oneOfType([d.number, d.string]).isRequired
} : {};
Qi.autoControlledProps = ["activePage"];
Qi.defaultProps = {
  "aria-label": "Pagination Navigation",
  boundaryRange: 1,
  ellipsisItem: "...",
  firstItem: {
    "aria-label": "First item",
    content: "«"
  },
  lastItem: {
    "aria-label": "Last item",
    content: "»"
  },
  nextItem: {
    "aria-label": "Next item",
    content: "⟩"
  },
  pageItem: {},
  prevItem: {
    "aria-label": "Previous item",
    content: "⟨"
  },
  siblingRange: 1
};
Qi.Item = AE;
function zM(e, t, r) {
  return e == null ? e : Xb(e, t, r);
}
var Ki = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.inputRef = /* @__PURE__ */ kr(), n.labelRef = /* @__PURE__ */ kr(), n.canToggle = function() {
      var u = n.props, f = u.disabled, p = u.radio, h = u.readOnly, m = n.state.checked;
      return !f && !h && !(p && m);
    }, n.computeTabIndex = function() {
      var u = n.props, f = u.disabled, p = u.tabIndex;
      return qe(p) ? f ? -1 : 0 : p;
    }, n.handleClick = function(u) {
      var f = n.props.id, p = n.state, h = p.checked, m = p.indeterminate, v = ie(n.inputRef.current, "contains", u.target), w = ie(n.labelRef.current, "contains", u.target), O = !w && !v, T = !qe(f), _ = w && T;
      _ || ie(n.props, "onClick", u, z({}, n.props, {
        checked: !h,
        indeterminate: !!m
      })), n.isClickFromMouse && (n.isClickFromMouse = !1, w && !T && n.handleChange(u), O && n.handleChange(u), w && T && u.stopPropagation());
    }, n.handleChange = function(u) {
      var f = n.state.checked;
      n.canToggle() && (ie(n.props, "onChange", u, z({}, n.props, {
        checked: !f,
        indeterminate: !1
      })), n.setState({
        checked: !f,
        indeterminate: !1
      }));
    }, n.handleMouseDown = function(u) {
      var f = n.state, p = f.checked, h = f.indeterminate;
      ie(n.props, "onMouseDown", u, z({}, n.props, {
        checked: !!p,
        indeterminate: !!h
      })), u.defaultPrevented || ie(n.inputRef.current, "focus"), u.preventDefault();
    }, n.handleMouseUp = function(u) {
      var f = n.state, p = f.checked, h = f.indeterminate;
      n.isClickFromMouse = !0, ie(n.props, "onMouseUp", u, z({}, n.props, {
        checked: !!p,
        indeterminate: !!h
      }));
    }, n.setIndeterminate = function() {
      var u = n.state.indeterminate;
      zM(n.inputRef, "current.indeterminate", !!u);
    }, n;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.setIndeterminate();
  }, r.componentDidUpdate = function() {
    this.setIndeterminate();
  }, r.render = function() {
    var i = this.props, s = i.className, l = i.disabled, u = i.label, f = i.id, p = i.name, h = i.radio, m = i.readOnly, v = i.slider, w = i.toggle, O = i.type, T = i.value, _ = this.state, A = _.checked, M = _.indeterminate, k = te(
      "ui",
      C(A, "checked"),
      C(l, "disabled"),
      C(M, "indeterminate"),
      // auto apply fitted class to compact white space when there is no label
      // https://semantic-ui.com/modules/checkbox.html#fitted
      C(qe(u), "fitted"),
      C(h, "radio"),
      C(m, "read-only"),
      C(v, "slider"),
      C(w, "toggle"),
      "checkbox",
      s
    ), U = oe(t, this.props), N = ce(t, this.props), F = Kf(U, {
      htmlProps: uE
    }), x = F[0], $ = F[1], I = pD(u, {
      defaultProps: {
        htmlFor: f
      },
      autoGenerateKey: !1
    }) || /* @__PURE__ */ b.createElement("label", {
      htmlFor: f
    });
    return /* @__PURE__ */ b.createElement(N, z({}, $, {
      className: k,
      onClick: this.handleClick,
      onChange: this.handleChange,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp
    }), /* @__PURE__ */ b.createElement(Or, {
      innerRef: this.inputRef
    }, /* @__PURE__ */ b.createElement("input", z({}, x, {
      checked: A,
      className: "hidden",
      disabled: l,
      id: f,
      name: p,
      readOnly: !0,
      tabIndex: this.computeTabIndex(),
      type: O,
      value: T
    }))), /* @__PURE__ */ b.createElement(Or, {
      innerRef: this.labelRef
    }, I));
  }, t;
}(Wi);
Ki.handledProps = ["as", "checked", "className", "defaultChecked", "defaultIndeterminate", "disabled", "fitted", "id", "indeterminate", "label", "name", "onChange", "onClick", "onMouseDown", "onMouseUp", "radio", "readOnly", "slider", "tabIndex", "toggle", "type", "value"];
Ki.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Whether or not checkbox is checked. */
  checked: d.bool,
  /** Additional classes. */
  className: d.string,
  /** The initial value of checked. */
  defaultChecked: d.bool,
  /** Whether or not checkbox is indeterminate. */
  defaultIndeterminate: d.bool,
  /** A checkbox can appear disabled and be unable to change states */
  disabled: d.bool,
  /** Removes padding for a label. Auto applied when there is no label. */
  fitted: d.bool,
  /** A unique identifier. */
  id: d.oneOfType([d.number, d.string]),
  /** Whether or not checkbox is indeterminate. */
  indeterminate: d.bool,
  /** The text of the associated label element. */
  label: pe,
  /** The HTML input name. */
  name: d.string,
  /**
   * Called when the user attempts to change the checked state.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed checked/indeterminate state.
   */
  onChange: d.func,
  /**
   * Called when the checkbox or label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onClick: d.func,
  /**
   * Called when the user presses down on the mouse.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onMouseDown: d.func,
  /**
   * Called when the user releases the mouse.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onMouseUp: d.func,
  /** Format as a radio element. This means it is an exclusive option. */
  radio: je([d.bool, Xe(["slider", "toggle"])]),
  /** A checkbox can be read-only and unable to change states. */
  readOnly: d.bool,
  /** Format to emphasize the current selection state. */
  slider: je([d.bool, Xe(["radio", "toggle"])]),
  /** A checkbox can receive focus. */
  tabIndex: d.oneOfType([d.number, d.string]),
  /** Format to show an on or off choice. */
  toggle: je([d.bool, Xe(["radio", "slider"])]),
  /** HTML input type, either checkbox or radio. */
  type: d.oneOf(["checkbox", "radio"]),
  /** The HTML input value. */
  value: d.oneOfType([d.string, d.number])
} : {};
Ki.defaultProps = {
  type: "checkbox"
};
Ki.autoControlledProps = ["checked", "indeterminate"];
function qM(e) {
  for (var t = -1, r = e == null ? 0 : e.length, n = 0, i = []; ++t < r; ) {
    var s = e[t];
    s && (i[n++] = s);
  }
  return i;
}
function jM(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
function HM(e, t) {
  var r = !0;
  return Hi(e, function(n, i, s) {
    return r = !!t(n, i, s), r;
  }), r;
}
function WM(e, t, r) {
  var n = _t(e) ? jM : HM;
  return r && Wo(e, t, r) && (t = void 0), n(e, aa(t));
}
function VM(e, t, r) {
  var n = e == null ? 0 : e.length;
  return n ? (t = r || t === void 0 ? 1 : vs(t), t = n - t, lu(e, 0, t < 0 ? 0 : t)) : [];
}
var GM = Bb("length");
const QM = GM;
var CE = "\\ud800-\\udfff", KM = "\\u0300-\\u036f", YM = "\\ufe20-\\ufe2f", XM = "\\u20d0-\\u20ff", JM = KM + YM + XM, ZM = "\\ufe0e\\ufe0f", eL = "[" + CE + "]", pf = "[" + JM + "]", hf = "\\ud83c[\\udffb-\\udfff]", tL = "(?:" + pf + "|" + hf + ")", $E = "[^" + CE + "]", RE = "(?:\\ud83c[\\udde6-\\uddff]){2}", NE = "[\\ud800-\\udbff][\\udc00-\\udfff]", rL = "\\u200d", IE = tL + "?", kE = "[" + ZM + "]?", nL = "(?:" + rL + "(?:" + [$E, RE, NE].join("|") + ")" + kE + IE + ")*", aL = kE + IE + nL, iL = "(?:" + [$E + pf + "?", pf, RE, NE, eL].join("|") + ")", mv = RegExp(hf + "(?=" + hf + ")|" + iL + aL, "g");
function oL(e) {
  for (var t = mv.lastIndex = 0; mv.test(e); )
    ++t;
  return t;
}
function sL(e) {
  return Wf(e) ? oL(e) : QM(e);
}
var lL = "[object Map]", uL = "[object Set]";
function cL(e) {
  if (e == null)
    return 0;
  if (kn(e))
    return Qf(e) ? sL(e) : e.length;
  var t = Ml(e);
  return t == lL || t == uL ? e.size : zf(e).length;
}
var dL = ji(function(e) {
  return oE(ys(e, 1, Ho, !0));
});
const vv = dL;
var fL = ["ad", "andorra", "ae", "united arab emirates", "uae", "af", "afghanistan", "ag", "antigua", "ai", "anguilla", "al", "albania", "am", "armenia", "an", "netherlands antilles", "ao", "angola", "ar", "argentina", "as", "american samoa", "at", "austria", "au", "australia", "aw", "aruba", "ax", "aland islands", "az", "azerbaijan", "ba", "bosnia", "bb", "barbados", "bd", "bangladesh", "be", "belgium", "bf", "burkina faso", "bg", "bulgaria", "bh", "bahrain", "bi", "burundi", "bj", "benin", "bm", "bermuda", "bn", "brunei", "bo", "bolivia", "br", "brazil", "bs", "bahamas", "bt", "bhutan", "bv", "bouvet island", "bw", "botswana", "by", "belarus", "bz", "belize", "ca", "canada", "cc", "cocos islands", "cd", "congo", "cf", "central african republic", "cg", "congo brazzaville", "ch", "switzerland", "ci", "cote divoire", "ck", "cook islands", "cl", "chile", "cm", "cameroon", "cn", "china", "co", "colombia", "cr", "costa rica", "cs", "cu", "cuba", "cv", "cape verde", "cx", "christmas island", "cy", "cyprus", "cz", "czech republic", "de", "germany", "dj", "djibouti", "dk", "denmark", "dm", "dominica", "do", "dominican republic", "dz", "algeria", "ec", "ecuador", "england", "gb eng", "ee", "estonia", "eg", "egypt", "eh", "western sahara", "er", "eritrea", "es", "spain", "et", "ethiopia", "eu", "european union", "fi", "finland", "fj", "fiji", "fk", "falkland islands", "fm", "micronesia", "fo", "faroe islands", "fr", "france", "ga", "gabon", "gb", "uk", "united kingdom", "gd", "grenada", "ge", "georgia", "gf", "french guiana", "gh", "ghana", "gi", "gibraltar", "gl", "greenland", "gm", "gambia", "gn", "guinea", "gp", "guadeloupe", "gq", "equatorial guinea", "gr", "greece", "gs", "sandwich islands", "gt", "guatemala", "gu", "guam", "gw", "guinea-bissau", "gy", "guyana", "hk", "hong kong", "hm", "heard island", "hn", "honduras", "hr", "croatia", "ht", "haiti", "hu", "hungary", "id", "indonesia", "ie", "ireland", "il", "israel", "in", "india", "io", "indian ocean territory", "iq", "iraq", "ir", "iran", "is", "iceland", "it", "italy", "jm", "jamaica", "jo", "jordan", "jp", "japan", "ke", "kenya", "kg", "kyrgyzstan", "kh", "cambodia", "ki", "kiribati", "km", "comoros", "kn", "saint kitts and nevis", "kp", "north korea", "kr", "south korea", "kw", "kuwait", "ky", "cayman islands", "kz", "kazakhstan", "la", "laos", "lb", "lebanon", "lc", "saint lucia", "li", "liechtenstein", "lk", "sri lanka", "lr", "liberia", "ls", "lesotho", "lt", "lithuania", "lu", "luxembourg", "lv", "latvia", "ly", "libya", "ma", "morocco", "mc", "monaco", "md", "moldova", "me", "montenegro", "mg", "madagascar", "mh", "marshall islands", "mk", "macedonia", "ml", "mali", "mm", "myanmar", "burma", "mn", "mongolia", "mo", "macau", "mp", "northern mariana islands", "mq", "martinique", "mr", "mauritania", "ms", "montserrat", "mt", "malta", "mu", "mauritius", "mv", "maldives", "mw", "malawi", "mx", "mexico", "my", "malaysia", "mz", "mozambique", "na", "namibia", "nc", "new caledonia", "ne", "niger", "nf", "norfolk island", "ng", "nigeria", "ni", "nicaragua", "nl", "netherlands", "no", "norway", "np", "nepal", "nr", "nauru", "nu", "niue", "nz", "new zealand", "om", "oman", "pa", "panama", "pe", "peru", "pf", "french polynesia", "pg", "new guinea", "ph", "philippines", "pk", "pakistan", "pl", "poland", "pm", "saint pierre", "pn", "pitcairn islands", "pr", "puerto rico", "ps", "palestine", "pt", "portugal", "pw", "palau", "py", "paraguay", "qa", "qatar", "re", "reunion", "ro", "romania", "rs", "serbia", "ru", "russia", "rw", "rwanda", "sa", "saudi arabia", "sb", "solomon islands", "sc", "seychelles", "gb sct", "scotland", "sd", "sudan", "se", "sweden", "sg", "singapore", "sh", "saint helena", "si", "slovenia", "sj", "svalbard", "jan mayen", "sk", "slovakia", "sl", "sierra leone", "sm", "san marino", "sn", "senegal", "so", "somalia", "sr", "suriname", "st", "sao tome", "sv", "el salvador", "sy", "syria", "sz", "swaziland", "tc", "caicos islands", "td", "chad", "tf", "french territories", "tg", "togo", "th", "thailand", "tj", "tajikistan", "tk", "tokelau", "tl", "timorleste", "tm", "turkmenistan", "tn", "tunisia", "to", "tonga", "tr", "turkey", "tt", "trinidad", "tv", "tuvalu", "tw", "taiwan", "tz", "tanzania", "ua", "ukraine", "ug", "uganda", "um", "us minor islands", "us", "america", "united states", "uy", "uruguay", "uz", "uzbekistan", "va", "vatican city", "vc", "saint vincent", "ve", "venezuela", "vg", "british virgin islands", "vi", "us virgin islands", "vn", "vietnam", "vu", "vanuatu", "gb wls", "wales", "wf", "wallis and futuna", "ws", "samoa", "ye", "yemen", "yt", "mayotte", "za", "south africa", "zm", "zambia", "zw", "zimbabwe"], Ri = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.className, l = i.name, u = te(l, "flag", s), f = oe(t, this.props), p = ce(t, this.props);
    return /* @__PURE__ */ b.createElement(p, z({}, f, {
      className: u
    }));
  }, t;
}(hb);
Ri.handledProps = ["as", "className", "name"];
Ri.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Additional classes. */
  className: d.string,
  /** Flag name, can use the two digit country code, the full name, or a common alias. */
  name: tE(fL)
} : {};
Ri.defaultProps = {
  as: "i"
};
Ri.create = Ue(Ri, function(e) {
  return {
    name: e
  };
});
const DE = Ri;
function rs(e) {
  var t = e.className, r = te("divider", t), n = oe(rs, e), i = ce(rs, e);
  return /* @__PURE__ */ b.createElement(i, z({}, n, {
    className: r
  }));
}
rs.handledProps = ["as", "className"];
rs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Additional classes. */
  className: d.string
} : {};
var ns = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(u) {
      ie(n.props, "onClick", u, n.props);
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.children, u = i.className, f = i.content, p = i.disabled, h = i.description, m = i.flag, v = i.icon, w = i.image, O = i.label, T = i.selected, _ = i.text, A = te(C(s, "active"), C(p, "disabled"), C(T, "selected"), "item", u), M = qe(v) ? XI(l, "DropdownMenu") && "dropdown" : v, k = oe(t, this.props), U = ce(t, this.props), N = {
      role: "option",
      "aria-disabled": p,
      "aria-checked": s,
      "aria-selected": T
    };
    if (!le(l))
      return /* @__PURE__ */ b.createElement(U, z({}, k, N, {
        className: A,
        onClick: this.handleClick
      }), l);
    var F = DE.create(m, {
      autoGenerateKey: !1
    }), x = wt.create(M, {
      autoGenerateKey: !1
    }), $ = Ft.create(w, {
      autoGenerateKey: !1
    }), I = fr.create(O, {
      autoGenerateKey: !1
    }), B = Oi("span", function(X) {
      return {
        children: X
      };
    }, h, {
      defaultProps: {
        className: "description"
      },
      autoGenerateKey: !1
    }), V = Oi("span", function(X) {
      return {
        children: X
      };
    }, le(f) ? _ : f, {
      defaultProps: {
        className: "text"
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ b.createElement(U, z({}, k, N, {
      className: A,
      onClick: this.handleClick
    }), $, x, F, I, B, V);
  }, t;
}(We);
ns.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "flag", "icon", "image", "label", "onClick", "selected", "text", "value"];
ns.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Style as the currently chosen item. */
  active: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** Additional text with less emphasis. */
  description: pe,
  /** A dropdown item can be disabled. */
  disabled: d.bool,
  /** Shorthand for Flag. */
  flag: pe,
  /** Shorthand for Icon. */
  icon: pe,
  /** Shorthand for Image. */
  image: pe,
  /** Shorthand for Label. */
  label: pe,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: d.func,
  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected: d.bool,
  /** Display text. */
  text: me,
  /** Stored value. */
  value: d.oneOfType([d.bool, d.number, d.string])
} : {};
ns.create = Ue(ns, function(e) {
  return e;
});
const Xf = ns;
function Yn(e) {
  var t = e.children, r = e.className, n = e.content, i = e.icon, s = te("header", r), l = oe(Yn, e), u = ce(Yn, e);
  return le(t) ? /* @__PURE__ */ b.createElement(u, z({}, l, {
    className: s
  }), wt.create(i, {
    autoGenerateKey: !1
  }), n) : /* @__PURE__ */ b.createElement(u, z({}, l, {
    className: s
  }), t);
}
Yn.handledProps = ["as", "children", "className", "content", "icon"];
Yn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function) */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** Shorthand for Icon. */
  icon: pe
} : {};
Yn.create = Ue(Yn, function(e) {
  return {
    content: e
  };
});
function Ni(e) {
  var t = e.children, r = e.className, n = e.content, i = e.direction, s = e.open, l = e.scrolling, u = te(i, C(s, "visible"), C(l, "scrolling"), "menu transition", r), f = oe(Ni, e), p = ce(Ni, e);
  return /* @__PURE__ */ b.createElement(p, z({}, f, {
    className: u
  }), le(t) ? n : t);
}
Ni.handledProps = ["as", "children", "className", "content", "direction", "open", "scrolling"];
Ni.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** A dropdown menu can open to the left or to the right. */
  direction: d.oneOf(["left", "right"]),
  /** Whether or not the dropdown menu is displayed. */
  open: d.bool,
  /** A dropdown menu can scroll. */
  scrolling: d.bool
} : {};
var Ii = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleChange = function(u) {
      var f = xa(u, "target.value");
      ie(n.props, "onChange", u, z({}, n.props, {
        value: f
      }));
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.autoComplete, l = i.className, u = i.tabIndex, f = i.type, p = i.value, h = te("search", l), m = oe(t, this.props);
    return /* @__PURE__ */ b.createElement("input", z({}, m, {
      "aria-autocomplete": "list",
      autoComplete: s,
      className: h,
      onChange: this.handleChange,
      tabIndex: u,
      type: f,
      value: p
    }));
  }, t;
}(We);
Ii.handledProps = ["as", "autoComplete", "className", "tabIndex", "type", "value"];
Ii.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** An input can have the auto complete. */
  autoComplete: d.string,
  /** Additional classes. */
  className: d.string,
  /** An input can receive focus. */
  tabIndex: d.oneOfType([d.number, d.string]),
  /** The HTML input type. */
  type: d.string,
  /** Stored value. */
  value: d.oneOfType([d.number, d.string])
} : {};
Ii.defaultProps = {
  autoComplete: "off",
  type: "text"
};
Ii.create = Ue(Ii, function(e) {
  return {
    type: e
  };
});
const ME = Ii;
function Xn(e) {
  var t = e.children, r = e.className, n = e.content, i = te("divider", r), s = oe(Xn, e), l = ce(Xn, e);
  return /* @__PURE__ */ b.createElement(l, z({
    "aria-atomic": !0,
    "aria-live": "polite",
    role: "alert"
  }, s, {
    className: i
  }), le(t) ? n : t);
}
Xn.handledProps = ["as", "children", "className", "content"];
Xn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
Xn.create = Ue(Xn, function(e) {
  return {
    content: e
  };
});
var LE = /[\\^$.*+?()[\]{}|]/g, pL = RegExp(LE.source);
function hL(e) {
  return e = Ja(e), e && pL.test(e) ? e.replace(LE, "\\$&") : e;
}
function wi(e) {
  var t = e.additionLabel, r = e.additionPosition, n = e.allowAdditions, i = e.deburr, s = e.multiple, l = e.options, u = e.search, f = e.searchQuery, p = e.value, h = l;
  if (s && (h = rf(h, function(T) {
    return !Vi(p, T.value);
  })), u && f)
    if (Ai(u))
      h = u(h, f);
    else {
      var m = i ? ff(f) : f, v = new RegExp(hL(m), "i");
      h = rf(h, function(T) {
        return v.test(i ? ff(T.text) : T.text);
      });
    }
  if (n && u && f && !Mo(h, {
    text: f
  })) {
    var w = /* @__PURE__ */ b.isValidElement(t) ? /* @__PURE__ */ b.cloneElement(t, {
      key: "addition-label"
    }) : t || "", O = {
      key: "addition",
      // by using an array, we can pass multiple elements, but when doing so
      // we must specify a `key` for React to know which one is which
      text: [w, /* @__PURE__ */ b.createElement("b", {
        key: "addition-query"
      }, f)],
      value: f,
      className: "addition",
      "data-additional": !0
    };
    r === "top" ? h.unshift(O) : h.push(O);
  }
  return h;
}
wi.handledProps = [];
function yv(e) {
  var t = e.additionLabel, r = e.additionPosition, n = e.allowAdditions, i = e.deburr, s = e.multiple, l = e.options, u = e.search, f = e.searchQuery, p = e.selectedIndex, h = e.value, m = wi({
    value: h,
    options: l,
    searchQuery: f,
    additionLabel: t,
    additionPosition: r,
    allowAdditions: n,
    deburr: i,
    multiple: s,
    search: u
  }), v = hE(m, function(_, A, M) {
    return A.disabled || _.push(M), _;
  }, []), w;
  if (!p || p < 0) {
    var O = v[0];
    w = s ? O : af(m, ["value", h]) || v[0];
  } else if (s)
    w = qb(v, function(_) {
      return _ >= p;
    }), p >= m.length - 1 && (w = v[v.length - 1]);
  else {
    var T = af(m, ["value", h]);
    w = Vi(v, T) ? T : void 0;
  }
  return (!w || w < 0) && (w = v[0]), w;
}
var bv = function(t, r) {
  return qe(t) ? r : t;
}, Ev = function(t) {
  return t && t.map(function(r) {
    return Vf(r, ["key", "value"]);
  });
};
function FE(e) {
  var t = e.flag, r = e.image, n = e.text;
  return Ai(n) ? n : {
    content: /* @__PURE__ */ b.createElement(b.Fragment, null, DE.create(t), Ft.create(r), n)
  };
}
var Kt = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.searchRef = /* @__PURE__ */ kr(), n.sizerRef = /* @__PURE__ */ kr(), n.ref = /* @__PURE__ */ kr(), n.handleChange = function(u, f) {
      ie(n.props, "onChange", u, z({}, n.props, {
        value: f
      }));
    }, n.closeOnChange = function(u) {
      var f = n.props, p = f.closeOnChange, h = f.multiple, m = ko(p) ? !h : p;
      m && n.close(u, iE);
    }, n.closeOnEscape = function(u) {
      n.props.closeOnEscape && St.getCode(u) === St.Escape && (u.preventDefault(), n.close(u));
    }, n.moveSelectionOnKeyDown = function(u) {
      var f, p = n.props, h = p.multiple, m = p.selectOnNavigation, v = n.state.open;
      if (v) {
        var w = (f = {}, f[St.ArrowDown] = 1, f[St.ArrowUp] = -1, f), O = w[St.getCode(u)];
        if (O !== void 0) {
          u.preventDefault();
          var T = n.getSelectedIndexAfterMove(O);
          !h && m && n.makeSelectedItemActive(u, T), n.setState({
            selectedIndex: T
          });
        }
      }
    }, n.openOnSpace = function(u) {
      var f, p, h, m = n.state.focus && !n.state.open && St.getCode(u) === St.Spacebar, v = ((f = u.target) == null ? void 0 : f.tagName) !== "INPUT" && ((p = u.target) == null ? void 0 : p.tagName) !== "TEXTAREA" && ((h = u.target) == null ? void 0 : h.isContentEditable) !== !0;
      m && (v && u.preventDefault(), n.open(u));
    }, n.openOnArrow = function(u) {
      var f = n.state, p = f.focus, h = f.open;
      if (p && !h) {
        var m = St.getCode(u);
        (m === St.ArrowDown || m === St.ArrowUp) && (u.preventDefault(), n.open(u));
      }
    }, n.makeSelectedItemActive = function(u, f) {
      var p = n.state, h = p.open, m = p.value, v = n.props.multiple, w = n.getSelectedItem(f), O = xa(w, "value"), T = xa(w, "disabled");
      if (qe(O) || !h || T)
        return m;
      var _ = v ? vv(m, [O]) : O, A = v ? !!of(_, m).length : _ !== m;
      return A && (n.setState({
        value: _
      }), n.handleChange(u, _), w["data-additional"] && ie(n.props, "onAddItem", u, z({}, n.props, {
        value: O
      }))), m;
    }, n.selectItemOnEnter = function(u) {
      var f = n.props.search, p = n.state, h = p.open, m = p.selectedIndex;
      if (h) {
        var v = St.getCode(u) === St.Enter || // https://github.com/Semantic-Org/Semantic-UI-React/pull/3766
        !f && St.getCode(u) === St.Spacebar;
        if (v) {
          u.preventDefault();
          var w = cL(wi({
            value: n.state.value,
            options: n.props.options,
            searchQuery: n.state.searchQuery,
            additionLabel: n.props.additionLabel,
            additionPosition: n.props.additionPosition,
            allowAdditions: n.props.allowAdditions,
            deburr: n.props.deburr,
            multiple: n.props.multiple,
            search: n.props.search
          }));
          if (!(f && w === 0)) {
            var O = n.makeSelectedItemActive(u, m);
            n.setState({
              selectedIndex: yv({
                additionLabel: n.props.additionLabel,
                additionPosition: n.props.additionPosition,
                allowAdditions: n.props.allowAdditions,
                deburr: n.props.deburr,
                multiple: n.props.multiple,
                search: n.props.search,
                selectedIndex: m,
                value: O,
                options: n.props.options,
                searchQuery: ""
              })
            }), n.closeOnChange(u), n.clearSearchQuery(), f && ie(n.searchRef.current, "focus");
          }
        }
      }
    }, n.removeItemOnBackspace = function(u) {
      var f = n.props, p = f.multiple, h = f.search, m = n.state, v = m.searchQuery, w = m.value;
      if (St.getCode(u) === St.Backspace && !(v || !h || !p || Pa(w))) {
        u.preventDefault();
        var O = VM(w);
        n.setState({
          value: O
        }), n.handleChange(u, O);
      }
    }, n.closeOnDocumentClick = function(u) {
      n.props.closeOnBlur && (n.ref.current && Na(n.ref.current, u) || n.close());
    }, n.handleMouseDown = function(u) {
      n.isMouseDown = !0, ie(n.props, "onMouseDown", u, n.props), document.addEventListener("mouseup", n.handleDocumentMouseUp);
    }, n.handleDocumentMouseUp = function() {
      n.isMouseDown = !1, document.removeEventListener("mouseup", n.handleDocumentMouseUp);
    }, n.handleClick = function(u) {
      var f = n.props, p = f.minCharacters, h = f.search, m = n.state, v = m.open, w = m.searchQuery;
      if (ie(n.props, "onClick", u, n.props), u.stopPropagation(), !h)
        return n.toggle(u);
      if (v) {
        ie(n.searchRef.current, "focus");
        return;
      }
      if (w.length >= p || p === 1) {
        n.open(u);
        return;
      }
      ie(n.searchRef.current, "focus");
    }, n.handleIconClick = function(u) {
      var f = n.props.clearable, p = n.hasValue();
      ie(n.props, "onClick", u, n.props), u.stopPropagation(), f && p ? n.clearValue(u) : n.toggle(u);
    }, n.handleItemClick = function(u, f) {
      var p = n.props, h = p.multiple, m = p.search, v = n.state.value, w = f.value;
      if (u.stopPropagation(), (h || f.disabled) && u.nativeEvent.stopImmediatePropagation(), !f.disabled) {
        var O = f["data-additional"], T = h ? vv(n.state.value, [w]) : w, _ = h ? !!of(T, v).length : T !== v;
        _ && (n.setState({
          value: T
        }), n.handleChange(u, T)), n.clearSearchQuery(), ie(m ? n.searchRef.current : n.ref.current, "focus"), n.closeOnChange(u), O && ie(n.props, "onAddItem", u, z({}, n.props, {
          value: w
        }));
      }
    }, n.handleFocus = function(u) {
      var f = n.state.focus;
      f || (ie(n.props, "onFocus", u, n.props), n.setState({
        focus: !0
      }));
    }, n.handleBlur = function(u) {
      var f = xa(u, "currentTarget");
      if (!(f && f.contains(document.activeElement))) {
        var p = n.props, h = p.closeOnBlur, m = p.multiple, v = p.selectOnBlur;
        n.isMouseDown || (ie(n.props, "onBlur", u, n.props), v && !m && (n.makeSelectedItemActive(u, n.state.selectedIndex), h && n.close()), n.setState({
          focus: !1
        }), n.clearSearchQuery());
      }
    }, n.handleSearchChange = function(u, f) {
      var p = f.value;
      u.stopPropagation();
      var h = n.props.minCharacters, m = n.state.open, v = p;
      if (ie(n.props, "onSearchChange", u, z({}, n.props, {
        searchQuery: v
      })), n.setState({
        searchQuery: v,
        selectedIndex: 0
      }), !m && v.length >= h) {
        n.open();
        return;
      }
      m && h !== 1 && v.length < h && n.close();
    }, n.handleKeyDown = function(u) {
      n.moveSelectionOnKeyDown(u), n.openOnArrow(u), n.openOnSpace(u), n.selectItemOnEnter(u), ie(n.props, "onKeyDown", u);
    }, n.getSelectedItem = function(u) {
      var f = wi({
        value: n.state.value,
        options: n.props.options,
        searchQuery: n.state.searchQuery,
        additionLabel: n.props.additionLabel,
        additionPosition: n.props.additionPosition,
        allowAdditions: n.props.allowAdditions,
        deburr: n.props.deburr,
        multiple: n.props.multiple,
        search: n.props.search
      });
      return xa(f, "[" + u + "]");
    }, n.getItemByValue = function(u) {
      var f = n.props.options;
      return qb(f, {
        value: u
      });
    }, n.getDropdownAriaOptions = function() {
      var u = n.props, f = u.loading, p = u.disabled, h = u.search, m = u.multiple, v = n.state.open, w = {
        role: h ? "combobox" : "listbox",
        "aria-busy": f,
        "aria-disabled": p,
        "aria-expanded": !!v
      };
      return w.role === "listbox" && (w["aria-multiselectable"] = m), w;
    }, n.clearSearchQuery = function() {
      var u = n.state.searchQuery;
      u === void 0 || u === "" || n.setState({
        searchQuery: ""
      });
    }, n.handleLabelClick = function(u, f) {
      u.stopPropagation(), n.setState({
        selectedLabel: f.value
      }), ie(n.props, "onLabelClick", u, f);
    }, n.handleLabelRemove = function(u, f) {
      u.stopPropagation();
      var p = n.state.value, h = Lt(p, f.value);
      n.setState({
        value: h
      }), n.handleChange(u, h);
    }, n.getSelectedIndexAfterMove = function(u, f) {
      f === void 0 && (f = n.state.selectedIndex);
      var p = wi({
        value: n.state.value,
        options: n.props.options,
        searchQuery: n.state.searchQuery,
        additionLabel: n.props.additionLabel,
        additionPosition: n.props.additionPosition,
        allowAdditions: n.props.allowAdditions,
        deburr: n.props.deburr,
        multiple: n.props.multiple,
        search: n.props.search
      });
      if (!(p === void 0 || WM(p, "disabled"))) {
        var h = p.length - 1, m = n.props.wrapSelection, v = f + u;
        return !m && (v > h || v < 0) ? v = f : v > h ? v = 0 : v < 0 && (v = h), p[v].disabled ? n.getSelectedIndexAfterMove(u, v) : v;
      }
    }, n.handleIconOverrides = function(u) {
      var f = n.props.clearable, p = te(f && n.hasValue() && "clear", u.className);
      return {
        className: p,
        onClick: function(m) {
          ie(u, "onClick", m, u), n.handleIconClick(m);
        }
      };
    }, n.clearValue = function(u) {
      var f = n.props.multiple, p = f ? [] : "";
      n.setState({
        value: p
      }), n.handleChange(u, p);
    }, n.computeSearchInputTabIndex = function() {
      var u = n.props, f = u.disabled, p = u.tabIndex;
      return qe(p) ? f ? -1 : 0 : p;
    }, n.computeSearchInputWidth = function() {
      var u = n.state.searchQuery;
      if (n.sizerRef.current && u) {
        n.sizerRef.current.style.display = "inline", n.sizerRef.current.textContent = u;
        var f = Math.ceil(n.sizerRef.current.getBoundingClientRect().width);
        return n.sizerRef.current.style.removeProperty("display"), f;
      }
    }, n.computeTabIndex = function() {
      var u = n.props, f = u.disabled, p = u.search, h = u.tabIndex;
      if (!p)
        return f ? -1 : qe(h) ? 0 : h;
    }, n.handleSearchInputOverrides = function(u) {
      return {
        onChange: function(p, h) {
          ie(u, "onChange", p, h), n.handleSearchChange(p, h);
        }
      };
    }, n.hasValue = function() {
      var u = n.props.multiple, f = n.state.value;
      return u ? !Pa(f) : !qe(f) && f !== "";
    }, n.scrollSelectedItemIntoView = function() {
      if (n.ref.current) {
        var u = n.ref.current.querySelector(".menu.visible");
        if (u) {
          var f = u.querySelector(".item.selected");
          if (f) {
            var p = f.offsetTop < u.scrollTop, h = f.offsetTop + f.clientHeight > u.scrollTop + u.clientHeight;
            p ? u.scrollTop = f.offsetTop : h && (u.scrollTop = f.offsetTop + f.clientHeight - u.clientHeight);
          }
        }
      }
    }, n.setOpenDirection = function() {
      if (n.ref.current) {
        var u = n.ref.current.querySelector(".menu.visible");
        if (u) {
          var f = n.ref.current.getBoundingClientRect(), p = u.clientHeight, h = document.documentElement.clientHeight - f.top - f.height - p, m = f.top - p, v = h < 0 && m > h;
          !v != !n.state.upward && n.setState({
            upward: v
          });
        }
      }
    }, n.open = function(u, f) {
      u === void 0 && (u = null), f === void 0 && (f = !0);
      var p = n.props, h = p.disabled, m = p.search;
      h || (m && ie(n.searchRef.current, "focus"), ie(n.props, "onOpen", u, n.props), f && n.setState({
        open: !0
      }), n.scrollSelectedItemIntoView());
    }, n.close = function(u, f) {
      f === void 0 && (f = n.handleClose), n.state.open && (ie(n.props, "onClose", u, n.props), n.setState({
        open: !1
      }, f));
    }, n.handleClose = function() {
      var u = document.activeElement === n.searchRef.current;
      !u && n.ref.current && n.ref.current.blur();
      var f = document.activeElement === n.ref.current, p = u || f;
      n.setState({
        focus: p
      });
    }, n.toggle = function(u) {
      return n.state.open ? n.close(u) : n.open(u);
    }, n.renderText = function() {
      var u = n.props, f = u.multiple, p = u.placeholder, h = u.search, m = u.text, v = n.state, w = v.searchQuery, O = v.selectedIndex, T = v.value, _ = v.open, A = n.hasValue(), M = te(p && !A && "default", "text", h && w && "filtered"), k = p, U;
      return m ? k = m : _ && !f ? U = n.getSelectedItem(O) : A && (U = n.getItemByValue(T)), Xn.create(U ? FE(U) : k, {
        defaultProps: {
          className: M
        }
      });
    }, n.renderSearchInput = function() {
      var u = n.props, f = u.search, p = u.searchInput, h = n.state.searchQuery;
      return f && /* @__PURE__ */ b.createElement(Or, {
        innerRef: n.searchRef
      }, ME.create(p, {
        defaultProps: {
          style: {
            width: n.computeSearchInputWidth()
          },
          tabIndex: n.computeSearchInputTabIndex(),
          value: h
        },
        overrideProps: n.handleSearchInputOverrides
      }));
    }, n.renderSearchSizer = function() {
      var u = n.props, f = u.search, p = u.multiple;
      return f && p && /* @__PURE__ */ b.createElement("span", {
        className: "sizer",
        ref: n.sizerRef
      });
    }, n.renderLabels = function() {
      var u = n.props, f = u.multiple, p = u.renderLabel, h = n.state, m = h.selectedLabel, v = h.value;
      if (!(!f || Pa(v))) {
        var w = vt(v, n.getItemByValue);
        return vt(qM(w), function(O, T) {
          var _ = {
            active: O.value === m,
            as: "a",
            key: bv(O.key, O.value),
            onClick: n.handleLabelClick,
            onRemove: n.handleLabelRemove,
            value: O.value
          };
          return fr.create(p(O, T, _), {
            defaultProps: _
          });
        });
      }
    }, n.renderOptions = function() {
      var u = n.props, f = u.lazyLoad, p = u.multiple, h = u.search, m = u.noResultsMessage, v = n.state, w = v.open, O = v.selectedIndex, T = v.value;
      if (f && !w)
        return null;
      var _ = wi({
        value: n.state.value,
        options: n.props.options,
        searchQuery: n.state.searchQuery,
        additionLabel: n.props.additionLabel,
        additionPosition: n.props.additionPosition,
        allowAdditions: n.props.allowAdditions,
        deburr: n.props.deburr,
        multiple: n.props.multiple,
        search: n.props.search
      });
      if (m !== null && h && Pa(_))
        return /* @__PURE__ */ b.createElement("div", {
          className: "message"
        }, m);
      var A = p ? function(M) {
        return Vi(T, M);
      } : function(M) {
        return M === T;
      };
      return vt(_, function(M, k) {
        return Xf.create(z({
          active: A(M.value),
          selected: O === k
        }, M, {
          key: bv(M.key, M.value),
          // Needed for handling click events on disabled items
          style: z({}, M.style, {
            pointerEvents: "all"
          })
        }), {
          generateKey: !1,
          overrideProps: function(N) {
            return {
              onClick: function(x, $) {
                N.onClick == null || N.onClick(x, $), n.handleItemClick(x, $);
              }
            };
          }
        });
      });
    }, n.renderMenu = function() {
      var u = n.props, f = u.children, p = u.direction, h = u.header, m = n.state.open, v = n.getDropdownMenuAriaOptions();
      if (!le(f)) {
        var w = Df.only(f), O = te(p, C(m, "visible"), w.props.className);
        return /* @__PURE__ */ mb(w, z({
          className: O
        }, v));
      }
      return /* @__PURE__ */ b.createElement(Ni, z({}, v, {
        direction: p,
        open: m
      }), Yn.create(h, {
        autoGenerateKey: !1
      }), n.renderOptions());
    }, n;
  }
  var r = t.prototype;
  return r.getInitialAutoControlledState = function() {
    return {
      focus: !1,
      searchQuery: ""
    };
  }, t.getAutoControlledStateFromProps = function(i, s, l) {
    var u = {
      __options: i.options,
      __value: s.value
    }, f = (
      // On value change
      !Tl(l.__value, s.value) || // On option keys/values, we only check those properties to avoid recursive performance impacts.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/3000
      !A2(Ev(i.options), Ev(l.__options))
    );
    return f && (u.selectedIndex = yv({
      additionLabel: i.additionLabel,
      additionPosition: i.additionPosition,
      allowAdditions: i.allowAdditions,
      deburr: i.deburr,
      multiple: i.multiple,
      search: i.search,
      selectedIndex: s.selectedIndex,
      value: s.value,
      options: i.options,
      searchQuery: s.searchQuery
    })), u;
  }, r.componentDidMount = function() {
    var i = this.state.open;
    i && this.open(null, !1);
  }, r.shouldComponentUpdate = function(i, s) {
    return !Tl(i, this.props) || !Tl(s, this.state);
  }, r.componentDidUpdate = function(i, s) {
    var l = this.props, u = l.closeOnBlur, f = l.minCharacters, p = l.openOnFocus, h = l.search;
    if (process.env.NODE_ENV !== "production") {
      var m = Array.isArray(this.props.value), v = Xd(this.props, "value");
      v && this.props.multiple && !m ? console.error("Dropdown `value` must be an array when `multiple` is set." + (" Received type: `" + Object.prototype.toString.call(this.props.value) + "`.")) : v && !this.props.multiple && m && console.error("Dropdown `value` must not be an array when `multiple` is not set. Either set `multiple={true}` or use a string or number value.");
    }
    if (!s.focus && this.state.focus) {
      if (!this.isMouseDown) {
        var w = !h || h && f === 1 && !this.state.open;
        p && w && this.open();
      }
    } else
      s.focus && !this.state.focus && !this.isMouseDown && u && this.close();
    !s.open && this.state.open ? (this.setOpenDirection(), this.scrollSelectedItemIntoView()) : s.open && this.state.open, s.selectedIndex !== this.state.selectedIndex && this.scrollSelectedItemIntoView();
  }, r.getDropdownMenuAriaOptions = function() {
    var i = this.props, s = i.search, l = i.multiple, u = {};
    return s && (u["aria-multiselectable"] = l, u.role = "listbox"), u;
  }, r.render = function() {
    var i = this.props, s = i.basic, l = i.button, u = i.className, f = i.compact, p = i.disabled, h = i.error, m = i.fluid, v = i.floating, w = i.icon, O = i.inline, T = i.item, _ = i.labeled, A = i.loading, M = i.multiple, k = i.pointing, U = i.search, N = i.selection, F = i.scrolling, x = i.simple, $ = i.trigger, I = this.state, B = I.focus, V = I.open, X = I.upward, W = te(
      "ui",
      C(V, "active visible"),
      C(p, "disabled"),
      C(h, "error"),
      C(A, "loading"),
      C(s, "basic"),
      C(l, "button"),
      C(f, "compact"),
      C(m, "fluid"),
      C(v, "floating"),
      C(O, "inline"),
      // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
      C(_, "labeled"),
      C(T, "item"),
      C(M, "multiple"),
      C(U, "search"),
      C(N, "selection"),
      C(x, "simple"),
      C(F, "scrolling"),
      C(X, "upward"),
      rt(k, "pointing"),
      "dropdown",
      u
    ), se = oe(t, this.props), _e = ce(t, this.props), Oe = this.getDropdownAriaOptions(_e, this.props);
    return /* @__PURE__ */ b.createElement(Or, {
      innerRef: this.ref
    }, /* @__PURE__ */ b.createElement(_e, z({}, se, Oe, {
      className: W,
      onBlur: this.handleBlur,
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      onMouseDown: this.handleMouseDown,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      tabIndex: this.computeTabIndex()
    }), this.renderLabels(), this.renderSearchInput(), this.renderSearchSizer(), $ || this.renderText(), wt.create(w, {
      overrideProps: this.handleIconOverrides,
      autoGenerateKey: !1
    }), this.renderMenu(), V && /* @__PURE__ */ b.createElement(Vn, {
      name: "keydown",
      on: this.closeOnEscape
    }), V && /* @__PURE__ */ b.createElement(Vn, {
      name: "click",
      on: this.closeOnDocumentClick
    }), B && /* @__PURE__ */ b.createElement(Vn, {
      name: "keydown",
      on: this.removeItemOnBackspace
    })));
  }, t;
}(Wi);
Kt.handledProps = ["additionLabel", "additionPosition", "allowAdditions", "as", "basic", "button", "children", "className", "clearable", "closeOnBlur", "closeOnChange", "closeOnEscape", "compact", "deburr", "defaultOpen", "defaultSearchQuery", "defaultSelectedLabel", "defaultUpward", "defaultValue", "direction", "disabled", "error", "floating", "fluid", "header", "icon", "inline", "item", "labeled", "lazyLoad", "loading", "minCharacters", "multiple", "noResultsMessage", "onAddItem", "onBlur", "onChange", "onClick", "onClose", "onFocus", "onLabelClick", "onMouseDown", "onOpen", "onSearchChange", "open", "openOnFocus", "options", "placeholder", "pointing", "renderLabel", "scrolling", "search", "searchInput", "searchQuery", "selectOnBlur", "selectOnNavigation", "selectedLabel", "selection", "simple", "tabIndex", "text", "trigger", "upward", "value", "wrapSelection"];
Kt.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Label prefixed to an option added by a user. */
  additionLabel: d.oneOfType([d.element, d.string]),
  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
  additionPosition: d.oneOf(["top", "bottom"]),
  /**
   * Allow user additions to the list of options (boolean).
   * Requires the use of `selection`, `options` and `search`.
   */
  allowAdditions: je([Aa(["options", "selection", "search"]), d.bool]),
  /** A Dropdown can reduce its complexity. */
  basic: d.bool,
  /** Format the Dropdown to appear as a button. */
  button: d.bool,
  /** Primary content. */
  children: je([Xe(["options", "selection"]), rE({
    children: d.any.isRequired
  }, d.element.isRequired)]),
  /** Additional classes. */
  className: d.string,
  /** Using the clearable setting will let users remove their selection from a dropdown. */
  clearable: d.bool,
  /** Whether or not the menu should close when the dropdown is blurred. */
  closeOnBlur: d.bool,
  /** Whether or not the dropdown should close when the escape key is pressed. */
  closeOnEscape: d.bool,
  /**
   * Whether or not the menu should close when a value is selected from the dropdown.
   * By default, multiple selection dropdowns will remain open on change, while single
   * selection dropdowns will close on change.
   */
  closeOnChange: d.bool,
  /** A compact dropdown has no minimum width. */
  compact: d.bool,
  /** Whether or not the dropdown should strip diacritics in options and input search */
  deburr: d.bool,
  /** Initial value of open. */
  defaultOpen: d.bool,
  /** Initial value of searchQuery. */
  defaultSearchQuery: d.string,
  /** Currently selected label in multi-select. */
  defaultSelectedLabel: je([Aa(["multiple"]), d.oneOfType([d.number, d.string])]),
  /** Initial value of upward. */
  defaultUpward: d.bool,
  /** Initial value or value array if multiple. */
  defaultValue: d.oneOfType([d.number, d.string, d.bool, d.arrayOf(d.oneOfType([d.string, d.number, d.bool]))]),
  /** A dropdown menu can open to the left or to the right. */
  direction: d.oneOf(["left", "right"]),
  /** A disabled dropdown menu or item does not allow user interaction. */
  disabled: d.bool,
  /** An errored dropdown can alert a user to a problem. */
  error: d.bool,
  /** A dropdown menu can contain floated content. */
  floating: d.bool,
  /** A dropdown can take the full width of its parent */
  fluid: d.bool,
  /** A dropdown menu can contain a header. */
  header: d.node,
  /** Shorthand for Icon. */
  icon: d.oneOfType([d.node, d.object]),
  /** A dropdown can be formatted to appear inline in other content. */
  inline: d.bool,
  /** A dropdown can be formatted as a Menu item. */
  item: d.bool,
  /** A dropdown can be labeled. */
  labeled: d.bool,
  /** A dropdown can defer rendering its options until it is open. */
  lazyLoad: d.bool,
  /** A dropdown can show that it is currently loading data. */
  loading: d.bool,
  /** The minimum characters for a search to begin showing results. */
  minCharacters: d.number,
  /** A selection dropdown can allow multiple selections. */
  multiple: d.bool,
  /** Message to display when there are no results. */
  noResultsMessage: d.node,
  /**
   * Called when a user adds a new item. Use this to update the options list.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and the new item's value.
   */
  onAddItem: d.func,
  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: d.func,
  /**
   * Called when the user attempts to change the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: d.func,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: d.func,
  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: d.func,
  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: d.func,
  /**
   * Called when a multi-select label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All label props.
   */
  onLabelClick: d.func,
  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: d.func,
  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: d.func,
  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props, includes current value of searchQuery.
   */
  onSearchChange: d.func,
  /** Controls whether or not the dropdown menu is displayed. */
  open: d.bool,
  /** Whether or not the menu should open when the dropdown is focused. */
  openOnFocus: d.bool,
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: je([Xe(["children"]), d.arrayOf(d.shape(Xf.propTypes))]),
  /** Placeholder text. */
  placeholder: d.string,
  /** A dropdown can be formatted so that its menu is pointing. */
  pointing: d.oneOfType([d.bool, d.oneOf(["left", "right", "top", "top left", "top right", "bottom", "bottom left", "bottom right"])]),
  /**
   * Mapped over the active items and returns shorthand for the active item Labels.
   * Only applies to `multiple` Dropdowns.
   *
   * @param {object} item - A currently active dropdown item.
   * @param {number} index - The current index.
   * @param {object} defaultLabelProps - The default props for an active item Label.
   * @returns {*} Shorthand for a Label.
   */
  renderLabel: d.func,
  /** A dropdown can have its menu scroll. */
  scrolling: d.bool,
  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search: d.oneOfType([d.bool, d.func]),
  /** A shorthand for a search input. */
  searchInput: d.oneOfType([d.array, d.node, d.object]),
  /** Current value of searchQuery. Creates a controlled component. */
  searchQuery: d.string,
  // TODO 'searchInMenu' or 'search='in menu' or ???  How to handle this markup and functionality?
  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur: d.bool,
  /**
   * Whether or not to change the value when navigating the menu using arrow keys.
   * Setting to false will require enter or left click to confirm a choice.
   */
  selectOnNavigation: d.bool,
  /** Currently selected label in multi-select. */
  selectedLabel: je([Aa(["multiple"]), d.oneOfType([d.string, d.number])]),
  /** A dropdown can be used to select between choices in a form. */
  selection: je([Xe(["children"]), Aa(["options"]), d.bool]),
  /** A simple dropdown can open without Javascript. */
  simple: d.bool,
  /** A dropdown can receive focus. */
  tabIndex: d.oneOfType([d.number, d.string]),
  /** The text displayed in the dropdown, usually for the active item. */
  text: d.string,
  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: je([Xe(["selection", "text"]), d.node]),
  /** Current value or value array if multiple. Creates a controlled component. */
  value: d.oneOfType([d.bool, d.string, d.number, d.arrayOf(d.oneOfType([d.bool, d.string, d.number]))]),
  /** Controls whether the dropdown will open upward. */
  upward: d.bool,
  /**
   * A dropdown will go to the last element when ArrowUp is pressed on the first,
   * or go to the first when ArrowDown is pressed on the last( aka infinite selection )
   */
  wrapSelection: d.bool
} : {};
Kt.defaultProps = {
  additionLabel: "Add ",
  additionPosition: "top",
  closeOnBlur: !0,
  closeOnEscape: !0,
  deburr: !1,
  icon: "dropdown",
  minCharacters: 1,
  noResultsMessage: "No results found.",
  openOnFocus: !0,
  renderLabel: FE,
  searchInput: "text",
  selectOnBlur: !0,
  selectOnNavigation: !0,
  wrapSelection: !0
};
Kt.autoControlledProps = ["open", "searchQuery", "selectedLabel", "value", "upward"];
Kt.Divider = rs;
Kt.Header = Yn;
Kt.Item = Xf;
Kt.Menu = Ni;
Kt.SearchInput = ME;
Kt.Text = Xn;
var ki = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.inputRef = /* @__PURE__ */ kr(), n.computeIcon = function() {
      var u = n.props, f = u.loading, p = u.icon;
      if (!qe(p))
        return p;
      if (f)
        return "spinner";
    }, n.computeTabIndex = function() {
      var u = n.props, f = u.disabled, p = u.tabIndex;
      if (!qe(p))
        return p;
      if (f)
        return -1;
    }, n.focus = function(u) {
      return n.inputRef.current.focus(u);
    }, n.select = function() {
      return n.inputRef.current.select();
    }, n.handleChange = function(u) {
      var f = xa(u, "target.value");
      ie(n.props, "onChange", u, z({}, n.props, {
        value: f
      }));
    }, n.handleChildOverrides = function(u, f) {
      return z({}, f, u.props, {
        ref: function(h) {
          Xr(u.ref, h), n.inputRef.current = h;
        }
      });
    }, n.partitionProps = function() {
      var u = n.props, f = u.disabled, p = u.type, h = n.computeTabIndex(), m = oe(t, n.props), v = Kf(m), w = v[0], O = v[1];
      return [z({}, w, {
        disabled: f,
        type: p,
        tabIndex: h,
        onChange: n.handleChange,
        ref: n.inputRef
      }), O];
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this, s = this.props, l = s.action, u = s.actionPosition, f = s.children, p = s.className, h = s.disabled, m = s.error, v = s.fluid, w = s.focus, O = s.icon, T = s.iconPosition, _ = s.input, A = s.inverted, M = s.label, k = s.labelPosition, U = s.loading, N = s.size, F = s.transparent, x = s.type, $ = te("ui", N, C(h, "disabled"), C(m, "error"), C(v, "fluid"), C(w, "focus"), C(A, "inverted"), C(U, "loading"), C(F, "transparent"), kt(u, "action") || C(l, "action"), kt(T, "icon") || C(O || U, "icon"), kt(k, "labeled") || C(M, "labeled"), "input", p), I = ce(t, this.props), B = this.partitionProps(), V = B[0], X = B[1];
    if (!le(f)) {
      var W = vt(Df.toArray(f), function(Oe) {
        return Oe.type !== "input" ? Oe : /* @__PURE__ */ mb(Oe, i.handleChildOverrides(Oe, V));
      });
      return /* @__PURE__ */ b.createElement(I, z({}, X, {
        className: $
      }), W);
    }
    var se = En.create(l, {
      autoGenerateKey: !1
    }), _e = fr.create(M, {
      defaultProps: {
        className: te(
          "label",
          // add 'left|right corner'
          Vi(k, "corner") && k
        )
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ b.createElement(I, z({}, X, {
      className: $
    }), u === "left" && se, k !== "right" && _e, fD(_ || x, {
      defaultProps: V,
      autoGenerateKey: !1
    }), wt.create(this.computeIcon(), {
      autoGenerateKey: !1
    }), u !== "left" && se, k === "right" && _e);
  }, t;
}(We);
ki.handledProps = ["action", "actionPosition", "as", "children", "className", "disabled", "error", "fluid", "focus", "icon", "iconPosition", "input", "inverted", "label", "labelPosition", "loading", "onChange", "size", "tabIndex", "transparent", "type"];
ki.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** An Input can be formatted to alert the user to an action they may perform. */
  action: d.oneOfType([d.bool, pe]),
  /** An action can appear along side an Input on the left or right. */
  actionPosition: d.oneOf(["left"]),
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** An Input field can show that it is disabled. */
  disabled: d.bool,
  /** An Input field can show the data contains errors. */
  error: d.bool,
  /** Take on the size of its container. */
  fluid: d.bool,
  /** An Input field can show a user is currently interacting with it. */
  focus: d.bool,
  /** Optional Icon to display inside the Input. */
  icon: d.oneOfType([d.bool, pe]),
  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: d.oneOf(["left"]),
  /** Shorthand for creating the HTML Input. */
  input: pe,
  /** Format to appear on dark backgrounds. */
  inverted: d.bool,
  /** Optional Label to display along side the Input. */
  label: pe,
  /** A Label can appear outside an Input on the left or right. */
  labelPosition: d.oneOf(["left", "right", "left corner", "right corner"]),
  /** An Icon Input field can show that it is currently loading data. */
  loading: d.bool,
  /**
   * Called on change.
   *
   * @param {ChangeEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and a proposed value.
   */
  onChange: d.func,
  /** An Input can vary in size. */
  size: d.oneOf(["mini", "small", "large", "big", "huge", "massive"]),
  /** An Input can receive focus. */
  tabIndex: d.oneOfType([d.number, d.string]),
  /** Transparent Input has no background. */
  transparent: d.bool,
  /** The HTML input type. */
  type: d.string
} : {};
ki.defaultProps = {
  type: "text"
};
ki.create = Ue(ki, function(e) {
  return {
    type: e
  };
});
const BE = ki;
function ja(e) {
  var t = e.children, r = e.className, n = e.computer, i = e.color, s = e.floated, l = e.largeScreen, u = e.mobile, f = e.only, p = e.stretched, h = e.tablet, m = e.textAlign, v = e.verticalAlign, w = e.widescreen, O = e.width, T = te(i, C(p, "stretched"), Ll(f, "only"), pr(m), kt(s, "floated"), xr(v), cr(n, "wide computer"), cr(l, "wide large screen"), cr(u, "wide mobile"), cr(h, "wide tablet"), cr(w, "wide widescreen"), cr(O, "wide"), "column", r), _ = oe(ja, e), A = ce(ja, e);
  return /* @__PURE__ */ b.createElement(A, z({}, _, {
    className: T
  }), t);
}
ja.handledProps = ["as", "children", "className", "color", "computer", "floated", "largeScreen", "mobile", "only", "stretched", "tablet", "textAlign", "verticalAlign", "widescreen", "width"];
ja.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** A grid column can be colored. */
  color: d.oneOf(hr),
  /** A column can specify a width for a computer. */
  computer: je([Xe(["width"]), d.oneOf(dr)]),
  /** A column can sit flush against the left or right edge of a row. */
  floated: d.oneOf(oa),
  /** A column can specify a width for a large screen device. */
  largeScreen: je([Xe(["width"]), d.oneOf(dr)]),
  /** A column can specify a width for a mobile device. */
  mobile: je([Xe(["width"]), d.oneOf(dr)]),
  /** A column can appear only for a specific device, or screen sizes. */
  only: Fl(dE),
  /** A column can stretch its contents to take up the entire grid or row height. */
  stretched: d.bool,
  /** A column can specify a width for a tablet device. */
  tablet: je([Xe(["width"]), d.oneOf(dr)]),
  /** A column can specify its text alignment. */
  textAlign: d.oneOf(gr),
  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: d.oneOf(Fr),
  /** A column can specify a width for a wide screen device. */
  widescreen: je([Xe(["width"]), d.oneOf(dr)]),
  /** Represents width of column. */
  width: je([Xe(["computer", "largeScreen", "mobile", "tablet", "widescreen"]), d.oneOf(dr)])
} : {};
ja.create = Ue(ja, function(e) {
  return {
    children: e
  };
});
function as(e) {
  var t = e.centered, r = e.children, n = e.className, i = e.color, s = e.columns, l = e.divided, u = e.only, f = e.reversed, p = e.stretched, h = e.textAlign, m = e.verticalAlign, v = te(i, C(t, "centered"), C(l, "divided"), C(p, "stretched"), Ll(u, "only"), Ll(f, "reversed"), pr(h), xr(m), cr(s, "column", !0), "row", n), w = oe(as, e), O = ce(as, e);
  return /* @__PURE__ */ b.createElement(O, z({}, w, {
    className: v
  }), r);
}
as.handledProps = ["as", "centered", "children", "className", "color", "columns", "divided", "only", "reversed", "stretched", "textAlign", "verticalAlign"];
as.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A row can have its columns centered. */
  centered: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** A grid row can be colored. */
  color: d.oneOf(hr),
  /** Represents column count per line in Row. */
  columns: d.oneOf([].concat(dr, ["equal"])),
  /** A row can have dividers between its columns. */
  divided: d.bool,
  /** A row can appear only for a specific device, or screen sizes. */
  only: Fl(dE),
  /** A row can specify that its columns should reverse order at different device sizes. */
  reversed: Fl(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A row can stretch its contents to take up the entire column height. */
  stretched: d.bool,
  /** A row can specify its text alignment. */
  textAlign: d.oneOf(gr),
  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: d.oneOf(Fr)
} : {};
function Ir(e) {
  var t = e.celled, r = e.centered, n = e.children, i = e.className, s = e.columns, l = e.container, u = e.divided, f = e.doubling, p = e.inverted, h = e.padded, m = e.relaxed, v = e.reversed, w = e.stackable, O = e.stretched, T = e.textAlign, _ = e.verticalAlign, A = te("ui", C(r, "centered"), C(l, "container"), C(f, "doubling"), C(p, "inverted"), C(w, "stackable"), C(O, "stretched"), rt(t, "celled"), rt(u, "divided"), rt(h, "padded"), rt(m, "relaxed"), Ll(v, "reversed"), pr(T), xr(_), cr(s, "column", !0), "grid", i), M = oe(Ir, e), k = ce(Ir, e);
  return /* @__PURE__ */ b.createElement(k, z({}, M, {
    className: A
  }), n);
}
Ir.handledProps = ["as", "celled", "centered", "children", "className", "columns", "container", "divided", "doubling", "inverted", "padded", "relaxed", "reversed", "stackable", "stretched", "textAlign", "verticalAlign"];
Ir.Column = ja;
Ir.Row = as;
Ir.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A grid can have rows divided into cells. */
  celled: d.oneOfType([d.bool, d.oneOf(["internally"])]),
  /** A grid can have its columns centered. */
  centered: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Represents column count per row in Grid. */
  columns: d.oneOf([].concat(dr, ["equal"])),
  /** A grid can be combined with a container to use the available layout and alignment. */
  container: d.bool,
  /** A grid can have dividers between its columns. */
  divided: d.oneOfType([d.bool, d.oneOf(["vertically"])]),
  /** A grid can double its column width on tablet and mobile sizes. */
  doubling: d.bool,
  /** A grid's colors can be inverted. */
  inverted: d.bool,
  /** A grid can preserve its vertical and horizontal gutters on first and last columns. */
  padded: d.oneOfType([d.bool, d.oneOf(["horizontally", "vertically"])]),
  /** A grid can increase its gutters to allow for more negative space. */
  relaxed: d.oneOfType([d.bool, d.oneOf(["very"])]),
  /** A grid can specify that its columns should reverse order at different device sizes. */
  reversed: Fl(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: d.bool,
  /** A grid can stretch its contents to take up the entire grid height. */
  stretched: d.bool,
  /** A grid can specify its text alignment. */
  textAlign: d.oneOf(gr),
  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: d.oneOf(Fr)
} : {};
function Jn(e) {
  var t = e.children, r = e.className, n = te(r), i = oe(Jn, e), s = ce(Jn, e);
  return /* @__PURE__ */ b.createElement(s, z({}, i, {
    className: n
  }), t);
}
Jn.handledProps = ["as", "children", "className"];
Jn.defaultProps = {
  as: "tbody"
};
Jn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string
} : {};
function Nt(e) {
  var t = e.active, r = e.children, n = e.className, i = e.collapsing, s = e.content, l = e.disabled, u = e.error, f = e.icon, p = e.negative, h = e.positive, m = e.selectable, v = e.singleLine, w = e.textAlign, O = e.verticalAlign, T = e.warning, _ = e.width, A = te(C(t, "active"), C(i, "collapsing"), C(l, "disabled"), C(u, "error"), C(p, "negative"), C(h, "positive"), C(m, "selectable"), C(v, "single line"), C(T, "warning"), pr(w), xr(O), cr(_, "wide"), n), M = oe(Nt, e), k = ce(Nt, e);
  return le(r) ? /* @__PURE__ */ b.createElement(k, z({}, M, {
    className: A
  }), wt.create(f), s) : /* @__PURE__ */ b.createElement(k, z({}, M, {
    className: A
  }), r);
}
Nt.handledProps = ["active", "as", "children", "className", "collapsing", "content", "disabled", "error", "icon", "negative", "positive", "selectable", "singleLine", "textAlign", "verticalAlign", "warning", "width"];
Nt.defaultProps = {
  as: "td"
};
Nt.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A cell can be active or selected by a user. */
  active: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** A cell can be collapsing so that it only uses as much space as required. */
  collapsing: d.bool,
  /** Shorthand for primary content. */
  content: me,
  /** A cell can be disabled. */
  disabled: d.bool,
  /** A cell may call attention to an error or a negative value. */
  error: d.bool,
  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon: pe,
  /** A cell may let a user know whether a value is bad. */
  negative: d.bool,
  /** A cell may let a user know whether a value is good. */
  positive: d.bool,
  /** A cell can be selectable. */
  selectable: d.bool,
  /** A cell can specify that its contents should remain on a single line and not wrap. */
  singleLine: d.bool,
  /** A table cell can adjust its text alignment. */
  textAlign: d.oneOf(Lt(gr, "justified")),
  /** A table cell can adjust its text alignment. */
  verticalAlign: d.oneOf(Fr),
  /** A cell may warn a user. */
  warning: d.bool,
  /** A table can specify the width of individual columns independently. */
  width: d.oneOf(dr)
} : {};
Nt.create = Ue(Nt, function(e) {
  return {
    content: e
  };
});
function xn(e) {
  var t = e.children, r = e.className, n = e.content, i = e.fullWidth, s = te(C(i, "full-width"), r), l = oe(xn, e), u = ce(xn, e);
  return /* @__PURE__ */ b.createElement(u, z({}, l, {
    className: s
  }), le(t) ? n : t);
}
xn.handledProps = ["as", "children", "className", "content", "fullWidth"];
xn.defaultProps = {
  as: "thead"
};
xn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
  fullWidth: d.bool
} : {};
function Yi(e) {
  var t = e.as, r = oe(Yi, e);
  return /* @__PURE__ */ b.createElement(xn, z({}, r, {
    as: t
  }));
}
Yi.handledProps = ["as"];
Yi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType
} : {};
Yi.defaultProps = {
  as: "tfoot"
};
function ur(e) {
  var t = e.as, r = e.className, n = e.sorted, i = te(kt(n, "sorted"), r), s = oe(ur, e);
  return /* @__PURE__ */ b.createElement(Nt, z({}, s, {
    as: t,
    className: i
  }));
}
ur.handledProps = ["as", "className", "sorted"];
ur.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Additional classes. */
  className: d.string,
  /** A header cell can be sorted in ascending or descending order. */
  sorted: d.oneOf(["ascending", "descending"])
} : {};
ur.defaultProps = {
  as: "th"
};
function tr(e) {
  var t = e.active, r = e.cellAs, n = e.cells, i = e.children, s = e.className, l = e.disabled, u = e.error, f = e.negative, p = e.positive, h = e.textAlign, m = e.verticalAlign, v = e.warning, w = te(C(t, "active"), C(l, "disabled"), C(u, "error"), C(f, "negative"), C(p, "positive"), C(v, "warning"), pr(h), xr(m), s), O = oe(tr, e), T = ce(tr, e);
  return le(i) ? /* @__PURE__ */ b.createElement(T, z({}, O, {
    className: w
  }), vt(n, function(_) {
    return Nt.create(_, {
      defaultProps: {
        as: r
      }
    });
  })) : /* @__PURE__ */ b.createElement(T, z({}, O, {
    className: w
  }), i);
}
tr.handledProps = ["active", "as", "cellAs", "cells", "children", "className", "disabled", "error", "negative", "positive", "textAlign", "verticalAlign", "warning"];
tr.defaultProps = {
  as: "tr",
  cellAs: "td"
};
tr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A row can be active or selected by a user. */
  active: d.bool,
  /** An element type to render as (string or function). */
  cellAs: d.elementType,
  /** Shorthand array of props for TableCell. */
  cells: ia,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** A row can be disabled. */
  disabled: d.bool,
  /** A row may call attention to an error or a negative value. */
  error: d.bool,
  /** A row may let a user know whether a value is bad. */
  negative: d.bool,
  /** A row may let a user know whether a value is good. */
  positive: d.bool,
  /** A table row can adjust its text alignment. */
  textAlign: d.oneOf(Lt(gr, "justified")),
  /** A table row can adjust its vertical alignment. */
  verticalAlign: d.oneOf(Fr),
  /** A row may warn a user. */
  warning: d.bool
} : {};
tr.create = Ue(tr, function(e) {
  return {
    cells: e
  };
});
function Tr(e) {
  var t = e.attached, r = e.basic, n = e.celled, i = e.children, s = e.className, l = e.collapsing, u = e.color, f = e.columns, p = e.compact, h = e.definition, m = e.fixed, v = e.footerRow, w = e.headerRow, O = e.headerRows, T = e.inverted, _ = e.padded, A = e.renderBodyRow, M = e.selectable, k = e.singleLine, U = e.size, N = e.sortable, F = e.stackable, x = e.striped, $ = e.structured, I = e.tableData, B = e.textAlign, V = e.unstackable, X = e.verticalAlign, W = te("ui", u, U, C(n, "celled"), C(l, "collapsing"), C(h, "definition"), C(m, "fixed"), C(T, "inverted"), C(M, "selectable"), C(k, "single line"), C(N, "sortable"), C(F, "stackable"), C(x, "striped"), C($, "structured"), C(V, "unstackable"), rt(t, "attached"), rt(r, "basic"), rt(p, "compact"), rt(_, "padded"), pr(B), xr(X), cr(f, "column"), "table", s), se = oe(Tr, e), _e = ce(Tr, e);
  if (!le(i))
    return /* @__PURE__ */ b.createElement(_e, z({}, se, {
      className: W
    }), i);
  var Oe = w || O, Te = {
    defaultProps: {
      cellAs: "th"
    }
  }, ze = Oe && /* @__PURE__ */ b.createElement(xn, null, tr.create(w, Te), vt(O, function(Ze) {
    return tr.create(Ze, Te);
  }));
  return /* @__PURE__ */ b.createElement(_e, z({}, se, {
    className: W
  }), ze, /* @__PURE__ */ b.createElement(Jn, null, A && vt(I, function(Ze, K) {
    return tr.create(A(Ze, K));
  })), v && /* @__PURE__ */ b.createElement(Yi, null, tr.create(v)));
}
Tr.handledProps = ["as", "attached", "basic", "celled", "children", "className", "collapsing", "color", "columns", "compact", "definition", "fixed", "footerRow", "headerRow", "headerRows", "inverted", "padded", "renderBodyRow", "selectable", "singleLine", "size", "sortable", "stackable", "striped", "structured", "tableData", "textAlign", "unstackable", "verticalAlign"];
Tr.defaultProps = {
  as: "table"
};
Tr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Attach table to other content */
  attached: d.oneOfType([d.bool, d.oneOf(["top", "bottom"])]),
  /** A table can reduce its complexity to increase readability. */
  basic: d.oneOfType([d.oneOf(["very"]), d.bool]),
  /** A table may be divided into individual cells. */
  celled: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** A table can be collapsing, taking up only as much space as its rows. */
  collapsing: d.bool,
  /** A table can be given a color to distinguish it from other tables. */
  color: d.oneOf(hr),
  /** A table can specify its column count to divide its content evenly. */
  columns: d.oneOf(dr),
  /** A table may sometimes need to be more compact to make more rows visible at a time. */
  compact: d.oneOfType([d.bool, d.oneOf(["very"])]),
  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition: d.bool,
  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content
   */
  fixed: d.bool,
  /** Shorthand for a TableRow to be placed within Table.Footer. */
  footerRow: pe,
  /** Shorthand for a TableRow to be placed within Table.Header. */
  headerRow: je([Xe(["headerRows"]), pe]),
  /** Shorthand for multiple TableRows to be placed within Table.Header. */
  headerRows: je([Xe(["headerRow"]), ia]),
  /** A table's colors can be inverted. */
  inverted: d.bool,
  /** A table may sometimes need to be more padded for legibility. */
  padded: d.oneOfType([d.bool, d.oneOf(["very"])]),
  /**
   * Mapped over `tableData` and should return shorthand for each Table.Row to be placed within Table.Body.
   *
   * @param {*} data - An element in the `tableData` array.
   * @param {number} index - The index of the current element in `tableData`.
   * @returns {*} Shorthand for a Table.Row.
   */
  renderBodyRow: je([Xe(["children"]), Aa(["tableData"]), d.func]),
  /** A table can have its rows appear selectable. */
  selectable: d.bool,
  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine: d.bool,
  /** A table can also be small or large. */
  size: d.oneOf(Lt(Qt, "mini", "tiny", "medium", "big", "huge", "massive")),
  /** A table may allow a user to sort contents by clicking on a table header. */
  sortable: d.bool,
  /** A table can specify how it stacks table content responsively. */
  stackable: d.bool,
  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped: d.bool,
  /** A table can be formatted to display complex structured data. */
  structured: d.bool,
  /** Data to be passed to the renderBodyRow function. */
  tableData: je([Xe(["children"]), Aa(["renderBodyRow"]), d.array]),
  /** A table can adjust its text alignment. */
  textAlign: d.oneOf(Lt(gr, "justified")),
  /** A table can specify how it stacks table content responsively. */
  unstackable: d.bool,
  /** A table can adjust its text alignment. */
  verticalAlign: d.oneOf(Fr)
} : {};
Tr.Body = Jn;
Tr.Cell = Nt;
Tr.Footer = Yi;
Tr.Header = xn;
Tr.HeaderCell = ur;
Tr.Row = tr;
function Zn(e) {
  var t = e.children, r = e.className, n = e.content, i = te("sub header", r), s = oe(Zn, e), l = ce(Zn, e);
  return /* @__PURE__ */ b.createElement(l, z({}, s, {
    className: i
  }), le(t) ? n : t);
}
Zn.handledProps = ["as", "children", "className", "content"];
Zn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
Zn.create = Ue(Zn, function(e) {
  return {
    content: e
  };
});
function Di(e) {
  var t = e.children, r = e.className, n = e.content, i = te("content", r), s = oe(Di, e), l = ce(Di, e);
  return /* @__PURE__ */ b.createElement(l, z({}, s, {
    className: i
  }), le(t) ? n : t);
}
Di.handledProps = ["as", "children", "className", "content"];
Di.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
function Pn(e) {
  var t = e.attached, r = e.block, n = e.children, i = e.className, s = e.color, l = e.content, u = e.disabled, f = e.dividing, p = e.floated, h = e.icon, m = e.image, v = e.inverted, w = e.size, O = e.sub, T = e.subheader, _ = e.textAlign, A = te("ui", s, w, C(r, "block"), C(u, "disabled"), C(f, "dividing"), kt(p, "floated"), C(h === !0, "icon"), C(m === !0, "image"), C(v, "inverted"), C(O, "sub"), rt(t, "attached"), pr(_), "header", i), M = oe(Pn, e), k = ce(Pn, e);
  if (!le(n))
    return /* @__PURE__ */ b.createElement(k, z({}, M, {
      className: A
    }), n);
  var U = wt.create(h, {
    autoGenerateKey: !1
  }), N = Ft.create(m, {
    autoGenerateKey: !1
  }), F = Zn.create(T, {
    autoGenerateKey: !1
  });
  return U || N ? /* @__PURE__ */ b.createElement(k, z({}, M, {
    className: A
  }), U || N, (l || F) && /* @__PURE__ */ b.createElement(Di, null, l, F)) : /* @__PURE__ */ b.createElement(k, z({}, M, {
    className: A
  }), l, F);
}
Pn.handledProps = ["as", "attached", "block", "children", "className", "color", "content", "disabled", "dividing", "floated", "icon", "image", "inverted", "size", "sub", "subheader", "textAlign"];
Pn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Attach header  to other content, like a segment. */
  attached: d.oneOfType([d.bool, d.oneOf(["top", "bottom"])]),
  /** Format header to appear inside a content block. */
  block: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Color of the header. */
  color: d.oneOf(hr),
  /** Shorthand for primary content. */
  content: me,
  /** Show that the header is inactive. */
  disabled: d.bool,
  /** Divide header from the content below it. */
  dividing: d.bool,
  /** Header can sit to the left or right of other content. */
  floated: d.oneOf(oa),
  /** Add an icon by icon name or pass an Icon. */
  icon: je([Xe(["image"]), d.oneOfType([d.bool, pe])]),
  /** Add an image by img src or pass an Image. */
  image: je([Xe(["icon"]), d.oneOfType([d.bool, pe])]),
  /** Inverts the color of the header for dark backgrounds. */
  inverted: d.bool,
  /** Content headings are sized with em and are based on the font-size of their container. */
  size: d.oneOf(Lt(Qt, "big", "massive", "mini")),
  /** Headers may be formatted to label smaller or de-emphasized content. */
  sub: d.bool,
  /** Shorthand for Header.Subheader. */
  subheader: pe,
  /** Align header content. */
  textAlign: d.oneOf(gr)
} : {};
Pn.Content = Di;
Pn.Subheader = Zn;
function An(e) {
  var t = e.children, r = e.className, n = e.content, i = te(r, "description"), s = oe(An, e), l = ce(An, e);
  return /* @__PURE__ */ b.createElement(l, z({}, s, {
    className: i
  }), le(t) ? n : t);
}
An.handledProps = ["as", "children", "className", "content"];
An.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
An.create = Ue(An, function(e) {
  return {
    content: e
  };
});
function Cn(e) {
  var t = e.children, r = e.className, n = e.content, i = te("header", r), s = oe(Cn, e), l = ce(Cn, e);
  return /* @__PURE__ */ b.createElement(l, z({}, s, {
    className: i
  }), le(t) ? n : t);
}
Cn.handledProps = ["as", "children", "className", "content"];
Cn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
Cn.create = Ue(Cn, function(e) {
  return {
    content: e
  };
});
function $n(e) {
  var t = e.children, r = e.className, n = e.content, i = e.description, s = e.floated, l = e.header, u = e.verticalAlign, f = te(kt(s, "floated"), xr(u), "content", r), p = oe($n, e), h = ce($n, e);
  return le(t) ? /* @__PURE__ */ b.createElement(h, z({}, p, {
    className: f
  }), Cn.create(l), An.create(i), n) : /* @__PURE__ */ b.createElement(h, z({}, p, {
    className: f
  }), t);
}
$n.handledProps = ["as", "children", "className", "content", "description", "floated", "header", "verticalAlign"];
$n.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** Shorthand for ListDescription. */
  description: pe,
  /** An list content can be floated left or right. */
  floated: d.oneOf(oa),
  /** Shorthand for ListHeader. */
  header: pe,
  /** An element inside a list can be vertically aligned. */
  verticalAlign: d.oneOf(Fr)
} : {};
$n.create = Ue($n, function(e) {
  return {
    content: e
  };
});
function Ha(e) {
  var t = e.className, r = e.verticalAlign, n = te(xr(r), t), i = oe(Ha, e);
  return /* @__PURE__ */ b.createElement(wt, z({}, i, {
    className: n
  }));
}
Ha.handledProps = ["className", "verticalAlign"];
Ha.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Additional classes. */
  className: d.string,
  /** An element inside a list can be vertically aligned. */
  verticalAlign: d.oneOf(Fr)
} : {};
Ha.create = Ue(Ha, function(e) {
  return {
    name: e
  };
});
var is = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(u) {
      var f = n.props.disabled;
      f || ie(n.props, "onClick", u, n.props);
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.children, u = i.className, f = i.content, p = i.description, h = i.disabled, m = i.header, v = i.icon, w = i.image, O = i.value, T = ce(t, this.props), _ = te(C(s, "active"), C(h, "disabled"), C(T !== "li", "item"), u), A = oe(t, this.props), M = T === "li" ? {
      value: O
    } : {
      "data-value": O
    };
    if (!le(l))
      return /* @__PURE__ */ b.createElement(T, z({}, M, {
        role: "listitem",
        className: _,
        onClick: this.handleClick
      }, A), l);
    var k = Ha.create(v, {
      autoGenerateKey: !1
    }), U = Ft.create(w, {
      autoGenerateKey: !1
    });
    if (!/* @__PURE__ */ gb(f) && fu(f))
      return /* @__PURE__ */ b.createElement(T, z({}, M, {
        role: "listitem",
        className: _,
        onClick: this.handleClick
      }, A), k || U, $n.create(f, {
        autoGenerateKey: !1,
        defaultProps: {
          header: m,
          description: p
        }
      }));
    var N = Cn.create(m, {
      autoGenerateKey: !1
    }), F = An.create(p, {
      autoGenerateKey: !1
    });
    return k || U ? /* @__PURE__ */ b.createElement(T, z({}, M, {
      role: "listitem",
      className: _,
      onClick: this.handleClick
    }, A), k || U, (f || N || F) && /* @__PURE__ */ b.createElement($n, null, N, F, f)) : /* @__PURE__ */ b.createElement(T, z({}, M, {
      role: "listitem",
      className: _,
      onClick: this.handleClick
    }, A), N, F, f);
  }, t;
}(We);
is.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "header", "icon", "image", "onClick", "value"];
is.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A list item can active. */
  active: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /**
   * Shorthand for primary content.
   *
   * Heads up!
   *
   * This is handled slightly differently than the typical `content` prop since
   * the wrapping ListContent is not used when there's no icon or image.
   *
   * If you pass content as:
   * - an element/literal, it's treated as the sibling node to
   * header/description (whether wrapped in Item.Content or not).
   * - a props object, it forces the presence of Item.Content and passes those
   * props to it. If you pass a content prop within that props object, it
   * will be treated as the sibling node to header/description.
   */
  content: pe,
  /** Shorthand for ListDescription. */
  description: pe,
  /** A list item can disabled. */
  disabled: d.bool,
  /** Shorthand for ListHeader. */
  header: pe,
  /** Shorthand for ListIcon. */
  icon: je([Xe(["image"]), pe]),
  /** Shorthand for Image. */
  image: je([Xe(["icon"]), pe]),
  /** A ListItem can be clicked */
  onClick: d.func,
  /** A value for an ordered list. */
  value: d.string
} : {};
is.create = Ue(is, function(e) {
  return {
    content: e
  };
});
const UE = is;
function os(e) {
  var t = e.children, r = e.className, n = e.content, i = oe(os, e), s = ce(os, e), l = te(C(s !== "ul" && s !== "ol", "list"), r);
  return /* @__PURE__ */ b.createElement(s, z({}, i, {
    className: l
  }), le(t) ? n : t);
}
os.handledProps = ["as", "children", "className", "content"];
os.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
var Dn = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleItemOverrides = function(u) {
      return {
        onClick: function(p, h) {
          ie(u, "onClick", p, h), ie(n.props, "onItemClick", p, h);
        }
      };
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this, s = this.props, l = s.animated, u = s.bulleted, f = s.celled, p = s.children, h = s.className, m = s.content, v = s.divided, w = s.floated, O = s.horizontal, T = s.inverted, _ = s.items, A = s.link, M = s.ordered, k = s.relaxed, U = s.selection, N = s.size, F = s.verticalAlign, x = te("ui", N, C(l, "animated"), C(u, "bulleted"), C(f, "celled"), C(v, "divided"), C(O, "horizontal"), C(T, "inverted"), C(A, "link"), C(M, "ordered"), C(U, "selection"), rt(k, "relaxed"), kt(w, "floated"), xr(F), "list", h), $ = oe(t, this.props), I = ce(t, this.props);
    return le(p) ? le(m) ? /* @__PURE__ */ b.createElement(I, z({
      role: "list",
      className: x
    }, $), vt(_, function(B) {
      return UE.create(B, {
        overrideProps: i.handleItemOverrides
      });
    })) : /* @__PURE__ */ b.createElement(I, z({
      role: "list",
      className: x
    }, $), m) : /* @__PURE__ */ b.createElement(I, z({
      role: "list",
      className: x
    }, $), p);
  }, t;
}(We);
Dn.handledProps = ["animated", "as", "bulleted", "celled", "children", "className", "content", "divided", "floated", "horizontal", "inverted", "items", "link", "onItemClick", "ordered", "relaxed", "selection", "size", "verticalAlign"];
Dn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A list can animate to set the current item apart from the list. */
  animated: d.bool,
  /** A list can mark items with a bullet. */
  bulleted: d.bool,
  /** A list can divide its items into cells. */
  celled: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** A list can show divisions between content. */
  divided: d.bool,
  /** An list can be floated left or right. */
  floated: d.oneOf(oa),
  /** A list can be formatted to have items appear horizontally. */
  horizontal: d.bool,
  /** A list can be inverted to appear on a dark background. */
  inverted: d.bool,
  /** Shorthand array of props for ListItem. */
  items: ia,
  /** A list can be specially formatted for navigation links. */
  link: d.bool,
  /**
   * onClick handler for ListItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: je([Xe(["children"]), d.func]),
  /** A list can be ordered numerically. */
  ordered: d.bool,
  /** A list can relax its padding to provide more negative space. */
  relaxed: d.oneOfType([d.bool, d.oneOf(["very"])]),
  /** A selection list formats list items as possible choices. */
  selection: d.bool,
  /** A list can vary in size. */
  size: d.oneOf(Qt),
  /** An element inside a list can be vertically aligned. */
  verticalAlign: d.oneOf(Fr)
} : {};
Dn.Content = $n;
Dn.Description = An;
Dn.Header = Cn;
Dn.Icon = Ha;
Dn.Item = UE;
Dn.List = os;
const zE = Dn;
function ss(e) {
  var t = e.active, r = e.children, n = e.className, i = e.content, s = e.disabled, l = e.indeterminate, u = e.inline, f = e.inverted, p = e.size, h = te("ui", p, C(t, "active"), C(s, "disabled"), C(l, "indeterminate"), C(f, "inverted"), C(r || i, "text"), rt(u, "inline"), "loader", n), m = oe(ss, e), v = ce(ss, e);
  return /* @__PURE__ */ b.createElement(v, z({}, m, {
    className: h
  }), le(r) ? i : r);
}
ss.handledProps = ["active", "as", "children", "className", "content", "disabled", "indeterminate", "inline", "inverted", "size"];
ss.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A loader can be active or visible. */
  active: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** A loader can be disabled or hidden. */
  disabled: d.bool,
  /** A loader can show it's unsure of how long a task will take. */
  indeterminate: d.bool,
  /** Loaders can appear inline with content. */
  inline: d.oneOfType([d.bool, d.oneOf(["centered"])]),
  /** Loaders can have their colors inverted. */
  inverted: d.bool,
  /** Loaders can have different sizes. */
  size: d.oneOf(Qt)
} : {};
function ls(e) {
  var t = e.children, r = e.className, n = e.compact, i = e.content, s = e.horizontal, l = e.piled, u = e.raised, f = e.size, p = e.stacked, h = te("ui", f, C(n, "compact"), C(s, "horizontal"), C(l, "piled"), C(u, "raised"), C(p, "stacked"), "segments", r), m = oe(ls, e), v = ce(ls, e);
  return /* @__PURE__ */ b.createElement(v, z({}, m, {
    className: h
  }), le(t) ? i : t);
}
ls.handledProps = ["as", "children", "className", "compact", "content", "horizontal", "piled", "raised", "size", "stacked"];
ls.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** A segment may take up only as much space as is necessary. */
  compact: d.bool,
  /** Shorthand for primary content. */
  content: me,
  /** Formats content to be aligned horizontally. */
  horizontal: d.bool,
  /** Formatted to look like a pile of pages. */
  piled: d.bool,
  /** A segment group may be formatted to raise above the page. */
  raised: d.bool,
  /** A segment group can have different sizes. */
  size: d.oneOf(Lt(Qt, "medium")),
  /** Formatted to show it contains multiple pages. */
  stacked: d.bool
} : {};
function us(e) {
  var t = e.children, r = e.className, n = e.content, i = te("inline", r), s = oe(us, e), l = ce(us, e);
  return /* @__PURE__ */ b.createElement(l, z({}, s, {
    className: i
  }), le(t) ? n : t);
}
us.handledProps = ["as", "children", "className", "content"];
us.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
function Wa(e) {
  var t = e.attached, r = e.basic, n = e.children, i = e.circular, s = e.className, l = e.clearing, u = e.color, f = e.compact, p = e.content, h = e.disabled, m = e.floated, v = e.inverted, w = e.loading, O = e.placeholder, T = e.padded, _ = e.piled, A = e.raised, M = e.secondary, k = e.size, U = e.stacked, N = e.tertiary, F = e.textAlign, x = e.vertical, $ = te("ui", u, k, C(r, "basic"), C(i, "circular"), C(l, "clearing"), C(f, "compact"), C(h, "disabled"), C(v, "inverted"), C(w, "loading"), C(O, "placeholder"), C(_, "piled"), C(A, "raised"), C(M, "secondary"), C(U, "stacked"), C(N, "tertiary"), C(x, "vertical"), rt(t, "attached"), rt(T, "padded"), pr(F), kt(m, "floated"), "segment", s), I = oe(Wa, e), B = ce(Wa, e);
  return /* @__PURE__ */ b.createElement(B, z({}, I, {
    className: $
  }), le(n) ? p : n);
}
Wa.handledProps = ["as", "attached", "basic", "children", "circular", "className", "clearing", "color", "compact", "content", "disabled", "floated", "inverted", "loading", "padded", "piled", "placeholder", "raised", "secondary", "size", "stacked", "tertiary", "textAlign", "vertical"];
Wa.Group = ls;
Wa.Inline = us;
Wa.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Attach segment to other content, like a header. */
  attached: d.oneOfType([d.bool, d.oneOf(["top", "bottom"])]),
  /** A basic segment has no special formatting. */
  basic: d.bool,
  /** Primary content. */
  children: d.node,
  /** A segment can be circular. */
  circular: d.bool,
  /** Additional classes. */
  className: d.string,
  /** A segment can clear floated content. */
  clearing: d.bool,
  /** Segment can be colored. */
  color: d.oneOf(hr),
  /** A segment may take up only as much space as is necessary. */
  compact: d.bool,
  /** Shorthand for primary content. */
  content: me,
  /** A segment may show its content is disabled. */
  disabled: d.bool,
  /** Segment content can be floated to the left or right. */
  floated: d.oneOf(oa),
  /** A segment can have its colors inverted for contrast. */
  inverted: d.bool,
  /** A segment may show its content is being loaded. */
  loading: d.bool,
  /** A segment can increase its padding. */
  padded: d.oneOfType([d.bool, d.oneOf(["very"])]),
  /** A segment can be used to reserve space for conditionally displayed content. */
  placeholder: d.bool,
  /** Formatted to look like a pile of pages. */
  piled: d.bool,
  /** A segment may be formatted to raise above the page. */
  raised: d.bool,
  /** A segment can be formatted to appear less noticeable. */
  secondary: d.bool,
  /** A segment can have different sizes. */
  size: d.oneOf(Lt(Qt, "medium")),
  /** Formatted to show it contains multiple pages. */
  stacked: d.bool,
  /** A segment can be formatted to appear even less noticeable. */
  tertiary: d.bool,
  /** Formats content to be aligned as part of a vertical group. */
  textAlign: d.oneOf(Lt(gr, "justified")),
  /** Formats content to be aligned vertically. */
  vertical: d.bool
} : {};
function cs(e) {
  "@babel/helpers - typeof";
  return cs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cs(e);
}
function gL(e, t) {
  if (cs(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (cs(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mL(e) {
  var t = gL(e, "string");
  return cs(t) == "symbol" ? t : t + "";
}
function Mi(e) {
  var t = e.children, r = e.className, n = e.content, i = e.textAlign, s = te(pr(i), "description", r), l = oe(Mi, e), u = ce(Mi, e);
  return /* @__PURE__ */ b.createElement(u, z({}, l, {
    className: s
  }), le(t) ? n : t);
}
Mi.handledProps = ["as", "children", "className", "content", "textAlign"];
Mi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** A card content can adjust its text alignment. */
  textAlign: d.oneOf(Lt(gr, "justified"))
} : {};
function Li(e) {
  var t = e.children, r = e.className, n = e.content, i = e.textAlign, s = te(pr(i), "header", r), l = oe(Li, e), u = ce(Li, e);
  return /* @__PURE__ */ b.createElement(u, z({}, l, {
    className: s
  }), le(t) ? n : t);
}
Li.handledProps = ["as", "children", "className", "content", "textAlign"];
Li.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** A card header can adjust its text alignment. */
  textAlign: d.oneOf(Lt(gr, "justified"))
} : {};
function Fi(e) {
  var t = e.children, r = e.className, n = e.content, i = e.textAlign, s = te(pr(i), "meta", r), l = oe(Fi, e), u = ce(Fi, e);
  return /* @__PURE__ */ b.createElement(u, z({}, l, {
    className: s
  }), le(t) ? n : t);
}
Fi.handledProps = ["as", "children", "className", "content", "textAlign"];
Fi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** A card meta can adjust its text alignment. */
  textAlign: d.oneOf(Lt(gr, "justified"))
} : {};
function Va(e) {
  var t = e.children, r = e.className, n = e.content, i = e.description, s = e.extra, l = e.header, u = e.meta, f = e.textAlign, p = te(C(s, "extra"), pr(f), "content", r), h = oe(Va, e), m = ce(Va, e);
  return le(t) ? le(n) ? /* @__PURE__ */ b.createElement(m, z({}, h, {
    className: p
  }), Oi(Li, function(v) {
    return {
      content: v
    };
  }, l, {
    autoGenerateKey: !1
  }), Oi(Fi, function(v) {
    return {
      content: v
    };
  }, u, {
    autoGenerateKey: !1
  }), Oi(Mi, function(v) {
    return {
      content: v
    };
  }, i, {
    autoGenerateKey: !1
  })) : /* @__PURE__ */ b.createElement(m, z({}, h, {
    className: p
  }), n) : /* @__PURE__ */ b.createElement(m, z({}, h, {
    className: p
  }), t);
}
Va.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "meta", "textAlign"];
Va.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** Shorthand for CardDescription. */
  description: pe,
  /** A card can contain extra content meant to be formatted separately from the main content. */
  extra: d.bool,
  /** Shorthand for CardHeader. */
  header: pe,
  /** Shorthand for CardMeta. */
  meta: pe,
  /** A card content can adjust its text alignment. */
  textAlign: d.oneOf(Lt(gr, "justified"))
} : {};
function ds(e) {
  var t = e.centered, r = e.children, n = e.className, i = e.content, s = e.doubling, l = e.items, u = e.itemsPerRow, f = e.stackable, p = e.textAlign, h = te("ui", C(t, "centered"), C(s, "doubling"), C(f, "stackable"), pr(p), cr(u), "cards", n), m = oe(ds, e), v = ce(ds, e);
  if (!le(r))
    return /* @__PURE__ */ b.createElement(v, z({}, m, {
      className: h
    }), r);
  if (!le(i))
    return /* @__PURE__ */ b.createElement(v, z({}, m, {
      className: h
    }), i);
  var w = vt(l, function(O) {
    var T, _ = (T = O.key) != null ? T : [O.header, O.description].join("-");
    return /* @__PURE__ */ b.createElement(Et, z({
      key: _
    }, O));
  });
  return /* @__PURE__ */ b.createElement(v, z({}, m, {
    className: h
  }), w);
}
ds.handledProps = ["as", "centered", "children", "className", "content", "doubling", "items", "itemsPerRow", "stackable", "textAlign"];
ds.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A group of cards can center itself inside its container. */
  centered: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** A group of cards can double its column width for mobile. */
  doubling: d.bool,
  /** Shorthand array of props for Card. */
  items: ia,
  /** A group of cards can set how many cards should exist in a row. */
  itemsPerRow: d.oneOf(dr),
  /** A group of cards can automatically stack rows to a single columns on mobile devices. */
  stackable: d.bool,
  /** A card group can adjust its text alignment. */
  textAlign: d.oneOf(Lt(gr, "justified"))
} : {};
var Et = /* @__PURE__ */ function(e) {
  dt(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(u) {
      var f = n.props.onClick;
      f && f(u, n.props);
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.centered, l = i.children, u = i.className, f = i.color, p = i.content, h = i.description, m = i.extra, v = i.fluid, w = i.header, O = i.href, T = i.image, _ = i.link, A = i.meta, M = i.onClick, k = i.raised, U = te("ui", f, C(s, "centered"), C(v, "fluid"), C(_, "link"), C(k, "raised"), "card", u), N = oe(t, this.props), F = ce(t, this.props, function() {
      if (M)
        return "a";
    });
    return le(l) ? le(p) ? /* @__PURE__ */ b.createElement(F, z({}, N, {
      className: U,
      href: O,
      onClick: this.handleClick
    }), Ft.create(T, {
      autoGenerateKey: !1,
      defaultProps: {
        ui: !1,
        wrapped: !0
      }
    }), (h || w || A) && /* @__PURE__ */ b.createElement(Va, {
      description: h,
      header: w,
      meta: A
    }), m && /* @__PURE__ */ b.createElement(Va, {
      extra: !0
    }, m)) : /* @__PURE__ */ b.createElement(F, z({}, N, {
      className: U,
      href: O,
      onClick: this.handleClick
    }), p) : /* @__PURE__ */ b.createElement(F, z({}, N, {
      className: U,
      href: O,
      onClick: this.handleClick
    }), l);
  }, t;
}(We);
Et.handledProps = ["as", "centered", "children", "className", "color", "content", "description", "extra", "fluid", "header", "href", "image", "link", "meta", "onClick", "raised"];
Et.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A Card can center itself inside its container. */
  centered: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** A Card can be formatted to display different colors. */
  color: d.oneOf(hr),
  /** Shorthand for primary content. */
  content: me,
  /** Shorthand for CardDescription. */
  description: pe,
  /** Shorthand for primary content of CardContent. */
  extra: me,
  /** A Card can be formatted to take up the width of its container. */
  fluid: d.bool,
  /** Shorthand for CardHeader. */
  header: pe,
  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: d.string,
  /** A card can contain an Image component. */
  image: pe,
  /** A card can be formatted to link to other content. */
  link: d.bool,
  /** Shorthand for CardMeta. */
  meta: pe,
  /**
   * Called on click. When passed, the component renders as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: d.func,
  /** A Card can be formatted to raise above the page. */
  raised: d.bool
} : {};
Et.Content = Va;
Et.Description = Mi;
Et.Group = ds;
Et.Header = Li;
Et.Meta = Fi;
function ea(e) {
  var t = e.children, r = e.className, n = e.content, i = te("header", r), s = oe(ea, e), l = ce(ea, e);
  return /* @__PURE__ */ b.createElement(l, z({}, s, {
    className: i
  }), le(t) ? n : t);
}
ea.handledProps = ["as", "children", "className", "content"];
ea.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
ea.create = Ue(ea, function(e) {
  return {
    content: e
  };
});
function ta(e) {
  var t = e.children, r = e.className, n = e.content, i = te("description", r), s = oe(ta, e), l = ce(ta, e);
  return /* @__PURE__ */ b.createElement(l, z({}, s, {
    className: i
  }), le(t) ? n : t);
}
ta.handledProps = ["as", "children", "className", "content"];
ta.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
ta.create = Ue(ta, function(e) {
  return {
    content: e
  };
});
function ra(e) {
  var t = e.children, r = e.className, n = e.content, i = te("extra", r), s = oe(ra, e), l = ce(ra, e);
  return /* @__PURE__ */ b.createElement(l, z({}, s, {
    className: i
  }), le(t) ? n : t);
}
ra.handledProps = ["as", "children", "className", "content"];
ra.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
ra.create = Ue(ra, function(e) {
  return {
    content: e
  };
});
function na(e) {
  var t = e.children, r = e.className, n = e.content, i = te("meta", r), s = oe(na, e), l = ce(na, e);
  return /* @__PURE__ */ b.createElement(l, z({}, s, {
    className: i
  }), le(t) ? n : t);
}
na.handledProps = ["as", "children", "className", "content"];
na.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
na.create = Ue(na, function(e) {
  return {
    content: e
  };
});
function Bi(e) {
  var t = e.children, r = e.className, n = e.content, i = e.description, s = e.extra, l = e.header, u = e.meta, f = e.verticalAlign, p = te(xr(f), "content", r), h = oe(Bi, e), m = ce(Bi, e);
  return le(t) ? /* @__PURE__ */ b.createElement(m, z({}, h, {
    className: p
  }), ea.create(l, {
    autoGenerateKey: !1
  }), na.create(u, {
    autoGenerateKey: !1
  }), ta.create(i, {
    autoGenerateKey: !1
  }), ra.create(s, {
    autoGenerateKey: !1
  }), n) : /* @__PURE__ */ b.createElement(m, z({}, h, {
    className: p
  }), t);
}
Bi.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "meta", "verticalAlign"];
Bi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** Shorthand for ItemDescription component. */
  description: pe,
  /** Shorthand for ItemExtra component. */
  extra: pe,
  /** Shorthand for ItemHeader component. */
  header: pe,
  /** Shorthand for ItemMeta component. */
  meta: pe,
  /** Content can specify its vertical alignment. */
  verticalAlign: d.oneOf(Fr)
} : {};
function fs(e) {
  var t = e.children, r = e.className, n = e.content, i = e.divided, s = e.items, l = e.link, u = e.relaxed, f = e.unstackable, p = te("ui", C(i, "divided"), C(l, "link"), C(f, "unstackable"), rt(u, "relaxed"), "items", r), h = oe(fs, e), m = ce(fs, e);
  if (!le(t))
    return /* @__PURE__ */ b.createElement(m, z({}, h, {
      className: p
    }), t);
  if (!le(n))
    return /* @__PURE__ */ b.createElement(m, z({}, h, {
      className: p
    }), n);
  var v = vt(s, function(w) {
    var O = w.childKey, T = Da(w, ["childKey"]), _ = O ?? [T.content, T.description, T.header, T.meta].join("-");
    return /* @__PURE__ */ b.createElement(It, z({}, T, {
      key: _
    }));
  });
  return /* @__PURE__ */ b.createElement(m, z({}, h, {
    className: p
  }), v);
}
fs.handledProps = ["as", "children", "className", "content", "divided", "items", "link", "relaxed", "unstackable"];
fs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** Items can be divided to better distinguish between grouped content. */
  divided: d.bool,
  /** Shorthand array of props for Item. */
  items: ia,
  /** An item can be formatted so that the entire contents link to another page. */
  link: d.bool,
  /** A group of items can relax its padding to provide more negative space. */
  relaxed: d.oneOfType([d.bool, d.oneOf(["very"])]),
  /** Prevent items from stacking on mobile. */
  unstackable: d.bool
} : {};
function Ga(e) {
  var t = e.size, r = oe(Ga, e);
  return /* @__PURE__ */ b.createElement(Ft, z({}, r, {
    size: t,
    ui: !!t,
    wrapped: !0
  }));
}
Ga.handledProps = ["size"];
Ga.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An image may appear at different sizes. */
  size: Ft.propTypes.size
} : {};
Ga.create = Ue(Ga, function(e) {
  return {
    src: e
  };
});
function It(e) {
  var t = e.children, r = e.className, n = e.content, i = e.description, s = e.extra, l = e.header, u = e.image, f = e.meta, p = te("item", r), h = oe(It, e), m = ce(It, e);
  return le(t) ? /* @__PURE__ */ b.createElement(m, z({}, h, {
    className: p
  }), Ga.create(u, {
    autoGenerateKey: !1
  }), /* @__PURE__ */ b.createElement(Bi, {
    content: n,
    description: i,
    extra: s,
    header: l,
    meta: f
  })) : /* @__PURE__ */ b.createElement(m, z({}, h, {
    className: p
  }), t);
}
It.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "image", "meta"];
It.Content = Bi;
It.Description = ta;
It.Extra = ra;
It.Group = fs;
It.Header = ea;
It.Image = Ga;
It.Meta = na;
It.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for ItemContent component. */
  content: me,
  /** Shorthand for ItemDescription component. */
  description: pe,
  /** Shorthand for ItemExtra component. */
  extra: pe,
  /** Shorthand for ItemHeader component. */
  header: pe,
  /** Shorthand for ItemImage component. */
  image: pe,
  /** Shorthand for ItemMeta component. */
  meta: pe
} : {};
function Ca(e, t, r) {
  return (t = mL(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function qE(e, t) {
  if (e == null)
    return {};
  var r, n, i = Da(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (n = 0; n < s.length; n++)
      r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function wv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wv(Object(r), !0).forEach(function(n) {
      Ca(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Jf = b.createContext({});
function Ee(e) {
  let t = e.id, r = e.children, n = qE(e, ["id", "children"]);
  const i = ct(Jf), s = r ? b.Children.only(r) : null, l = s ? s.props : {};
  if (t in i) {
    const u = i[t];
    return b.createElement(u, Sv(Sv({}, l), n));
  } else
    return s ? b.cloneElement(s, l) : null;
}
Ee.propTypes = {
  /** The children of the component */
  children: d.node,
  /** The id that the component will be bound to (normally component's name) */
  id: d.string
};
Ee.defaultProps = {
  id: null,
  children: null
};
Ee.component = (e, t) => {
  const r = (i) => {
    let s = i.children, l = qE(i, ["children"]);
    const f = ct(Jf)[e];
    return b.createElement(f || t, l, s);
  };
  r.propTypes = {
    children: d.oneOfType([d.node, d.func])
  }, r.defaultProps = {
    children: null
  };
  const n = t.displayName || t.name;
  return r.displayName = "Overridable(".concat(n, ")"), r.originalComponent = t, r;
};
function _v(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _v(Object(r), !0).forEach(function(n) {
      Ca(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _v(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
class yL {
  constructor(t) {
    Ca(this, "add", (r, n) => {
      this.components[r] = n;
    }), Ca(this, "get", (r) => this.components[r]), Ca(this, "getAll", () => vL({}, this.components)), Ca(this, "clear", () => {
      this.components = {};
    }), this.components = t || {};
  }
}
new yL();
var bL = Object.prototype;
function EL(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || bL;
  return e === r;
}
var hu = EL;
function wL(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var jE = wL, SL = jE, _L = SL(Object.keys, Object), OL = _L, TL = hu, xL = OL, PL = Object.prototype, AL = PL.hasOwnProperty;
function CL(e) {
  if (!TL(e))
    return xL(e);
  var t = [];
  for (var r in Object(e))
    AL.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var HE = CL, $L = typeof Nr == "object" && Nr && Nr.Object === Object && Nr, WE = $L, RL = WE, NL = typeof self == "object" && self && self.Object === Object && self, IL = RL || NL || Function("return this")(), tn = IL, kL = tn, DL = kL.Symbol, bs = DL, Ov = bs, VE = Object.prototype, ML = VE.hasOwnProperty, LL = VE.toString, Co = Ov ? Ov.toStringTag : void 0;
function FL(e) {
  var t = ML.call(e, Co), r = e[Co];
  try {
    e[Co] = void 0;
    var n = !0;
  } catch {
  }
  var i = LL.call(e);
  return n && (t ? e[Co] = r : delete e[Co]), i;
}
var BL = FL, UL = Object.prototype, zL = UL.toString;
function qL(e) {
  return zL.call(e);
}
var jL = qL, Tv = bs, HL = BL, WL = jL, VL = "[object Null]", GL = "[object Undefined]", xv = Tv ? Tv.toStringTag : void 0;
function QL(e) {
  return e == null ? e === void 0 ? GL : VL : xv && xv in Object(e) ? HL(e) : WL(e);
}
var sa = QL;
function KL(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var la = KL;
const YL = /* @__PURE__ */ Ct(la);
var XL = sa, JL = la, ZL = "[object AsyncFunction]", eF = "[object Function]", tF = "[object GeneratorFunction]", rF = "[object Proxy]";
function nF(e) {
  if (!JL(e))
    return !1;
  var t = XL(e);
  return t == eF || t == tF || t == ZL || t == rF;
}
var GE = nF, aF = tn, iF = aF["__core-js_shared__"], oF = iF, bd = oF, Pv = function() {
  var e = /[^.]+$/.exec(bd && bd.keys && bd.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function sF(e) {
  return !!Pv && Pv in e;
}
var lF = sF, uF = Function.prototype, cF = uF.toString;
function dF(e) {
  if (e != null) {
    try {
      return cF.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var QE = dF, fF = GE, pF = lF, hF = la, gF = QE, mF = /[\\^$.*+?()[\]{}|]/g, vF = /^\[object .+?Constructor\]$/, yF = Function.prototype, bF = Object.prototype, EF = yF.toString, wF = bF.hasOwnProperty, SF = RegExp(
  "^" + EF.call(wF).replace(mF, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _F(e) {
  if (!hF(e) || pF(e))
    return !1;
  var t = fF(e) ? SF : vF;
  return t.test(gF(e));
}
var OF = _F;
function TF(e, t) {
  return e == null ? void 0 : e[t];
}
var xF = TF, PF = OF, AF = xF;
function CF(e, t) {
  var r = AF(e, t);
  return PF(r) ? r : void 0;
}
var ei = CF, $F = ei, RF = tn, NF = $F(RF, "DataView"), IF = NF, kF = ei, DF = tn, MF = kF(DF, "Map"), Zf = MF, LF = ei, FF = tn, BF = LF(FF, "Promise"), UF = BF, zF = ei, qF = tn, jF = zF(qF, "Set"), HF = jF, WF = ei, VF = tn, GF = WF(VF, "WeakMap"), QF = GF, gf = IF, mf = Zf, vf = UF, yf = HF, bf = QF, KE = sa, Xi = QE, Av = "[object Map]", KF = "[object Object]", Cv = "[object Promise]", $v = "[object Set]", Rv = "[object WeakMap]", Nv = "[object DataView]", YF = Xi(gf), XF = Xi(mf), JF = Xi(vf), ZF = Xi(yf), eB = Xi(bf), Sa = KE;
(gf && Sa(new gf(new ArrayBuffer(1))) != Nv || mf && Sa(new mf()) != Av || vf && Sa(vf.resolve()) != Cv || yf && Sa(new yf()) != $v || bf && Sa(new bf()) != Rv) && (Sa = function(e) {
  var t = KE(e), r = t == KF ? e.constructor : void 0, n = r ? Xi(r) : "";
  if (n)
    switch (n) {
      case YF:
        return Nv;
      case XF:
        return Av;
      case JF:
        return Cv;
      case ZF:
        return $v;
      case eB:
        return Rv;
    }
  return t;
});
var gu = Sa;
function tB(e) {
  return e != null && typeof e == "object";
}
var Mn = tB, rB = sa, nB = Mn, aB = "[object Arguments]";
function iB(e) {
  return nB(e) && rB(e) == aB;
}
var oB = iB, Iv = oB, sB = Mn, YE = Object.prototype, lB = YE.hasOwnProperty, uB = YE.propertyIsEnumerable, cB = Iv(function() {
  return arguments;
}()) ? Iv : function(e) {
  return sB(e) && lB.call(e, "callee") && !uB.call(e, "callee");
}, mu = cB, dB = Array.isArray, Br = dB;
const XE = /* @__PURE__ */ Ct(Br);
var fB = 9007199254740991;
function pB(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fB;
}
var ep = pB, hB = GE, gB = ep;
function mB(e) {
  return e != null && gB(e.length) && !hB(e);
}
var vu = mB, zl = { exports: {} };
function vB() {
  return !1;
}
var yB = vB;
zl.exports;
(function(e, t) {
  var r = tn, n = yB, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, l = s && s.exports === i, u = l ? r.Buffer : void 0, f = u ? u.isBuffer : void 0, p = f || n;
  e.exports = p;
})(zl, zl.exports);
var tp = zl.exports, bB = sa, EB = ep, wB = Mn, SB = "[object Arguments]", _B = "[object Array]", OB = "[object Boolean]", TB = "[object Date]", xB = "[object Error]", PB = "[object Function]", AB = "[object Map]", CB = "[object Number]", $B = "[object Object]", RB = "[object RegExp]", NB = "[object Set]", IB = "[object String]", kB = "[object WeakMap]", DB = "[object ArrayBuffer]", MB = "[object DataView]", LB = "[object Float32Array]", FB = "[object Float64Array]", BB = "[object Int8Array]", UB = "[object Int16Array]", zB = "[object Int32Array]", qB = "[object Uint8Array]", jB = "[object Uint8ClampedArray]", HB = "[object Uint16Array]", WB = "[object Uint32Array]", ut = {};
ut[LB] = ut[FB] = ut[BB] = ut[UB] = ut[zB] = ut[qB] = ut[jB] = ut[HB] = ut[WB] = !0;
ut[SB] = ut[_B] = ut[DB] = ut[OB] = ut[MB] = ut[TB] = ut[xB] = ut[PB] = ut[AB] = ut[CB] = ut[$B] = ut[RB] = ut[NB] = ut[IB] = ut[kB] = !1;
function VB(e) {
  return wB(e) && EB(e.length) && !!ut[bB(e)];
}
var GB = VB;
function QB(e) {
  return function(t) {
    return e(t);
  };
}
var rp = QB, ql = { exports: {} };
ql.exports;
(function(e, t) {
  var r = WE, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, l = s && r.process, u = function() {
    try {
      var f = i && i.require && i.require("util").types;
      return f || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(ql, ql.exports);
var np = ql.exports, KB = GB, YB = rp, kv = np, Dv = kv && kv.isTypedArray, XB = Dv ? YB(Dv) : KB, JE = XB, JB = HE, ZB = gu, eU = mu, tU = Br, rU = vu, nU = tp, aU = hu, iU = JE, oU = "[object Map]", sU = "[object Set]", lU = Object.prototype, uU = lU.hasOwnProperty;
function cU(e) {
  if (e == null)
    return !0;
  if (rU(e) && (tU(e) || typeof e == "string" || typeof e.splice == "function" || nU(e) || iU(e) || eU(e)))
    return !e.length;
  var t = ZB(e);
  if (t == oU || t == sU)
    return !e.size;
  if (aU(e))
    return !JB(e).length;
  for (var r in e)
    if (uU.call(e, r))
      return !1;
  return !0;
}
var dU = cU;
const rn = /* @__PURE__ */ Ct(dU);
function ZE(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: fU } = Object.prototype, { getPrototypeOf: ap } = Object, { iterator: yu, toStringTag: ew } = Symbol, bu = ((e) => (t) => {
  const r = fU.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ur = (e) => (e = e.toLowerCase(), (t) => bu(t) === e), Eu = (e) => (t) => typeof t === e, { isArray: Ji } = Array, ps = Eu("undefined");
function pU(e) {
  return e !== null && !ps(e) && e.constructor !== null && !ps(e.constructor) && rr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const tw = Ur("ArrayBuffer");
function hU(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && tw(e.buffer), t;
}
const gU = Eu("string"), rr = Eu("function"), rw = Eu("number"), wu = (e) => e !== null && typeof e == "object", mU = (e) => e === !0 || e === !1, xl = (e) => {
  if (bu(e) !== "object")
    return !1;
  const t = ap(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ew in e) && !(yu in e);
}, vU = Ur("Date"), yU = Ur("File"), bU = Ur("Blob"), EU = Ur("FileList"), wU = (e) => wu(e) && rr(e.pipe), SU = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || rr(e.append) && ((t = bu(e)) === "formdata" || // detect form-data instance
  t === "object" && rr(e.toString) && e.toString() === "[object FormData]"));
}, _U = Ur("URLSearchParams"), [OU, TU, xU, PU] = ["ReadableStream", "Request", "Response", "Headers"].map(Ur), AU = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Es(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), Ji(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), l = s.length;
    let u;
    for (n = 0; n < l; n++)
      u = s[n], t.call(null, e[u], u, e);
  }
}
function nw(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const $a = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), aw = (e) => !ps(e) && e !== $a;
function Ef() {
  const { caseless: e } = aw(this) && this || {}, t = {}, r = (n, i) => {
    const s = e && nw(t, i) || i;
    xl(t[s]) && xl(n) ? t[s] = Ef(t[s], n) : xl(n) ? t[s] = Ef({}, n) : Ji(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Es(arguments[n], r);
  return t;
}
const CU = (e, t, r, { allOwnKeys: n } = {}) => (Es(t, (i, s) => {
  r && rr(i) ? e[s] = ZE(i, r) : e[s] = i;
}, { allOwnKeys: n }), e), $U = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), RU = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, NU = (e, t, r, n) => {
  let i, s, l;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
      l = i[s], (!n || n(l, e, t)) && !u[l] && (t[l] = e[l], u[l] = !0);
    e = r !== !1 && ap(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, IU = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, kU = (e) => {
  if (!e)
    return null;
  if (Ji(e))
    return e;
  let t = e.length;
  if (!rw(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, DU = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ap(Uint8Array)), MU = (e, t) => {
  const n = (e && e[yu]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const s = i.value;
    t.call(e, s[0], s[1]);
  }
}, LU = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, FU = Ur("HTMLFormElement"), BU = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Mv = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), UU = Ur("RegExp"), iw = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Es(r, (i, s) => {
    let l;
    (l = t(i, s, e)) !== !1 && (n[s] = l || i);
  }), Object.defineProperties(e, n);
}, zU = (e) => {
  iw(e, (t, r) => {
    if (rr(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (rr(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, qU = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((s) => {
      r[s] = !0;
    });
  };
  return Ji(e) ? n(e) : n(String(e).split(t)), r;
}, jU = () => {
}, HU = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function WU(e) {
  return !!(e && rr(e.append) && e[ew] === "FormData" && e[yu]);
}
const VU = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (wu(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[i] = n;
        const s = Ji(n) ? [] : {};
        return Es(n, (l, u) => {
          const f = r(l, i + 1);
          !ps(f) && (s[u] = f);
        }), t[i] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, GU = Ur("AsyncFunction"), QU = (e) => e && (wu(e) || rr(e)) && rr(e.then) && rr(e.catch), ow = ((e, t) => e ? setImmediate : t ? ((r, n) => ($a.addEventListener("message", ({ source: i, data: s }) => {
  i === $a && s === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), $a.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  rr($a.postMessage)
), KU = typeof queueMicrotask < "u" ? queueMicrotask.bind($a) : typeof process < "u" && process.nextTick || ow, YU = (e) => e != null && rr(e[yu]), j = {
  isArray: Ji,
  isArrayBuffer: tw,
  isBuffer: pU,
  isFormData: SU,
  isArrayBufferView: hU,
  isString: gU,
  isNumber: rw,
  isBoolean: mU,
  isObject: wu,
  isPlainObject: xl,
  isReadableStream: OU,
  isRequest: TU,
  isResponse: xU,
  isHeaders: PU,
  isUndefined: ps,
  isDate: vU,
  isFile: yU,
  isBlob: bU,
  isRegExp: UU,
  isFunction: rr,
  isStream: wU,
  isURLSearchParams: _U,
  isTypedArray: DU,
  isFileList: EU,
  forEach: Es,
  merge: Ef,
  extend: CU,
  trim: AU,
  stripBOM: $U,
  inherits: RU,
  toFlatObject: NU,
  kindOf: bu,
  kindOfTest: Ur,
  endsWith: IU,
  toArray: kU,
  forEachEntry: MU,
  matchAll: LU,
  isHTMLForm: FU,
  hasOwnProperty: Mv,
  hasOwnProp: Mv,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: iw,
  freezeMethods: zU,
  toObjectSet: qU,
  toCamelCase: BU,
  noop: jU,
  toFiniteNumber: HU,
  findKey: nw,
  global: $a,
  isContextDefined: aw,
  isSpecCompliantForm: WU,
  toJSONObject: VU,
  isAsyncFn: GU,
  isThenable: QU,
  setImmediate: ow,
  asap: KU,
  isIterable: YU
};
function Re(e, t, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i, this.status = i.status ? i.status : null);
}
j.inherits(Re, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: j.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const sw = Re.prototype, lw = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  lw[e] = { value: e };
});
Object.defineProperties(Re, lw);
Object.defineProperty(sw, "isAxiosError", { value: !0 });
Re.from = (e, t, r, n, i, s) => {
  const l = Object.create(sw);
  return j.toFlatObject(e, l, function(f) {
    return f !== Error.prototype;
  }, (u) => u !== "isAxiosError"), Re.call(l, e.message, t, r, n, i), l.cause = e, l.name = e.name, s && Object.assign(l, s), l;
};
const XU = null;
function wf(e) {
  return j.isPlainObject(e) || j.isArray(e);
}
function uw(e) {
  return j.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Lv(e, t, r) {
  return e ? e.concat(t).map(function(i, s) {
    return i = uw(i), !r && s ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function JU(e) {
  return j.isArray(e) && !e.some(wf);
}
const ZU = j.toFlatObject(j, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Su(e, t, r) {
  if (!j.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = j.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(T, _) {
    return !j.isUndefined(_[T]);
  });
  const n = r.metaTokens, i = r.visitor || h, s = r.dots, l = r.indexes, f = (r.Blob || typeof Blob < "u" && Blob) && j.isSpecCompliantForm(t);
  if (!j.isFunction(i))
    throw new TypeError("visitor must be a function");
  function p(O) {
    if (O === null)
      return "";
    if (j.isDate(O))
      return O.toISOString();
    if (j.isBoolean(O))
      return O.toString();
    if (!f && j.isBlob(O))
      throw new Re("Blob is not supported. Use a Buffer instead.");
    return j.isArrayBuffer(O) || j.isTypedArray(O) ? f && typeof Blob == "function" ? new Blob([O]) : Buffer.from(O) : O;
  }
  function h(O, T, _) {
    let A = O;
    if (O && !_ && typeof O == "object") {
      if (j.endsWith(T, "{}"))
        T = n ? T : T.slice(0, -2), O = JSON.stringify(O);
      else if (j.isArray(O) && JU(O) || (j.isFileList(O) || j.endsWith(T, "[]")) && (A = j.toArray(O)))
        return T = uw(T), A.forEach(function(k, U) {
          !(j.isUndefined(k) || k === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? Lv([T], U, s) : l === null ? T : T + "[]",
            p(k)
          );
        }), !1;
    }
    return wf(O) ? !0 : (t.append(Lv(_, T, s), p(O)), !1);
  }
  const m = [], v = Object.assign(ZU, {
    defaultVisitor: h,
    convertValue: p,
    isVisitable: wf
  });
  function w(O, T) {
    if (!j.isUndefined(O)) {
      if (m.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      m.push(O), j.forEach(O, function(A, M) {
        (!(j.isUndefined(A) || A === null) && i.call(
          t,
          A,
          j.isString(M) ? M.trim() : M,
          T,
          v
        )) === !0 && w(A, T ? T.concat(M) : [M]);
      }), m.pop();
    }
  }
  if (!j.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function Fv(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function ip(e, t) {
  this._pairs = [], e && Su(e, this, t);
}
const cw = ip.prototype;
cw.append = function(t, r) {
  this._pairs.push([t, r]);
};
cw.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Fv);
  } : Fv;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function e3(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function dw(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || e3;
  j.isFunction(r) && (r = {
    serialize: r
  });
  const i = r && r.serialize;
  let s;
  if (i ? s = i(t, r) : s = j.isURLSearchParams(t) ? t.toString() : new ip(t, r).toString(n), s) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class t3 {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    j.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Bv = t3, fw = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, r3 = typeof URLSearchParams < "u" ? URLSearchParams : ip, n3 = typeof FormData < "u" ? FormData : null, a3 = typeof Blob < "u" ? Blob : null, i3 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: r3,
    FormData: n3,
    Blob: a3
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, op = typeof window < "u" && typeof document < "u", Sf = typeof navigator == "object" && navigator || void 0, o3 = op && (!Sf || ["ReactNative", "NativeScript", "NS"].indexOf(Sf.product) < 0), s3 = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), l3 = op && window.location.href || "http://localhost", u3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: op,
  hasStandardBrowserEnv: o3,
  hasStandardBrowserWebWorkerEnv: s3,
  navigator: Sf,
  origin: l3
}, Symbol.toStringTag, { value: "Module" })), jt = {
  ...u3,
  ...i3
};
function c3(e, t) {
  return Su(e, new jt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, s) {
      return jt.isNode && j.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function d3(e) {
  return j.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function f3(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let s;
  for (n = 0; n < i; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function pw(e) {
  function t(r, n, i, s) {
    let l = r[s++];
    if (l === "__proto__")
      return !0;
    const u = Number.isFinite(+l), f = s >= r.length;
    return l = !l && j.isArray(i) ? i.length : l, f ? (j.hasOwnProp(i, l) ? i[l] = [i[l], n] : i[l] = n, !u) : ((!i[l] || !j.isObject(i[l])) && (i[l] = []), t(r, n, i[l], s) && j.isArray(i[l]) && (i[l] = f3(i[l])), !u);
  }
  if (j.isFormData(e) && j.isFunction(e.entries)) {
    const r = {};
    return j.forEachEntry(e, (n, i) => {
      t(d3(n), i, r, 0);
    }), r;
  }
  return null;
}
function p3(e, t, r) {
  if (j.isString(e))
    try {
      return (t || JSON.parse)(e), j.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const sp = {
  transitional: fw,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, s = j.isObject(t);
    if (s && j.isHTMLForm(t) && (t = new FormData(t)), j.isFormData(t))
      return i ? JSON.stringify(pw(t)) : t;
    if (j.isArrayBuffer(t) || j.isBuffer(t) || j.isStream(t) || j.isFile(t) || j.isBlob(t) || j.isReadableStream(t))
      return t;
    if (j.isArrayBufferView(t))
      return t.buffer;
    if (j.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return c3(t, this.formSerializer).toString();
      if ((u = j.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Su(
          u ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return s || i ? (r.setContentType("application/json", !1), p3(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || sp.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (j.isResponse(t) || j.isReadableStream(t))
      return t;
    if (t && j.isString(t) && (n && !this.responseType || i)) {
      const l = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (l)
          throw u.name === "SyntaxError" ? Re.from(u, Re.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: jt.classes.FormData,
    Blob: jt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
j.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  sp.headers[e] = {};
});
const lp = sp, h3 = j.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), g3 = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(l) {
    i = l.indexOf(":"), r = l.substring(0, i).trim().toLowerCase(), n = l.substring(i + 1).trim(), !(!r || t[r] && h3[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Uv = Symbol("internals");
function $o(e) {
  return e && String(e).trim().toLowerCase();
}
function Pl(e) {
  return e === !1 || e == null ? e : j.isArray(e) ? e.map(Pl) : String(e);
}
function m3(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const v3 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ed(e, t, r, n, i) {
  if (j.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!j.isString(t)) {
    if (j.isString(n))
      return t.indexOf(n) !== -1;
    if (j.isRegExp(n))
      return n.test(t);
  }
}
function y3(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function b3(e, t) {
  const r = j.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(i, s, l) {
        return this[n].call(this, t, i, s, l);
      },
      configurable: !0
    });
  });
}
class _u {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function s(u, f, p) {
      const h = $o(f);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const m = j.findKey(i, h);
      (!m || i[m] === void 0 || p === !0 || p === void 0 && i[m] !== !1) && (i[m || f] = Pl(u));
    }
    const l = (u, f) => j.forEach(u, (p, h) => s(p, h, f));
    if (j.isPlainObject(t) || t instanceof this.constructor)
      l(t, r);
    else if (j.isString(t) && (t = t.trim()) && !v3(t))
      l(g3(t), r);
    else if (j.isObject(t) && j.isIterable(t)) {
      let u = {}, f, p;
      for (const h of t) {
        if (!j.isArray(h))
          throw TypeError("Object iterator must return a key-value pair");
        u[p = h[0]] = (f = u[p]) ? j.isArray(f) ? [...f, h[1]] : [f, h[1]] : h[1];
      }
      l(u, r);
    } else
      t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = $o(t), t) {
      const n = j.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return m3(i);
        if (j.isFunction(r))
          return r.call(this, i, n);
        if (j.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = $o(t), t) {
      const n = j.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Ed(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function s(l) {
      if (l = $o(l), l) {
        const u = j.findKey(n, l);
        u && (!r || Ed(n, n[u], u, r)) && (delete n[u], i = !0);
      }
    }
    return j.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || Ed(this, this[s], s, t, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return j.forEach(this, (i, s) => {
      const l = j.findKey(n, s);
      if (l) {
        r[l] = Pl(i), delete r[s];
        return;
      }
      const u = t ? y3(s) : String(s).trim();
      u !== s && delete r[s], r[u] = Pl(i), n[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return j.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = t && j.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[Uv] = this[Uv] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(l) {
      const u = $o(l);
      n[u] || (b3(i, l), n[u] = !0);
    }
    return j.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
_u.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
j.reduceDescriptors(_u.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
j.freezeMethods(_u);
const Mr = _u;
function wd(e, t) {
  const r = this || lp, n = t || r, i = Mr.from(n.headers);
  let s = n.data;
  return j.forEach(e, function(u) {
    s = u.call(r, s, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), s;
}
function hw(e) {
  return !!(e && e.__CANCEL__);
}
function Zi(e, t, r) {
  Re.call(this, e ?? "canceled", Re.ERR_CANCELED, t, r), this.name = "CanceledError";
}
j.inherits(Zi, Re, {
  __CANCEL__: !0
});
function gw(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new Re(
    "Request failed with status code " + r.status,
    [Re.ERR_BAD_REQUEST, Re.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function E3(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function w3(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let i = 0, s = 0, l;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const p = Date.now(), h = n[s];
    l || (l = p), r[i] = f, n[i] = p;
    let m = s, v = 0;
    for (; m !== i; )
      v += r[m++], m = m % e;
    if (i = (i + 1) % e, i === s && (s = (s + 1) % e), p - l < t)
      return;
    const w = h && p - h;
    return w ? Math.round(v * 1e3 / w) : void 0;
  };
}
function S3(e, t) {
  let r = 0, n = 1e3 / t, i, s;
  const l = (p, h = Date.now()) => {
    r = h, i = null, s && (clearTimeout(s), s = null), e.apply(null, p);
  };
  return [(...p) => {
    const h = Date.now(), m = h - r;
    m >= n ? l(p, h) : (i = p, s || (s = setTimeout(() => {
      s = null, l(i);
    }, n - m)));
  }, () => i && l(i)];
}
const jl = (e, t, r = 3) => {
  let n = 0;
  const i = w3(50, 250);
  return S3((s) => {
    const l = s.loaded, u = s.lengthComputable ? s.total : void 0, f = l - n, p = i(f), h = l <= u;
    n = l;
    const m = {
      loaded: l,
      total: u,
      progress: u ? l / u : void 0,
      bytes: f,
      rate: p || void 0,
      estimated: p && u && h ? (u - l) / p : void 0,
      event: s,
      lengthComputable: u != null,
      [t ? "download" : "upload"]: !0
    };
    e(m);
  }, r);
}, zv = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, qv = (e) => (...t) => j.asap(() => e(...t)), _3 = jt.hasStandardBrowserEnv ? ((e, t) => (r) => (r = new URL(r, jt.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(jt.origin),
  jt.navigator && /(msie|trident)/i.test(jt.navigator.userAgent)
) : () => !0, O3 = jt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, i, s) {
      const l = [e + "=" + encodeURIComponent(t)];
      j.isNumber(r) && l.push("expires=" + new Date(r).toGMTString()), j.isString(n) && l.push("path=" + n), j.isString(i) && l.push("domain=" + i), s === !0 && l.push("secure"), document.cookie = l.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function T3(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function x3(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function mw(e, t, r) {
  let n = !T3(t);
  return e && (n || r == !1) ? x3(e, t) : t;
}
const jv = (e) => e instanceof Mr ? { ...e } : e;
function Qa(e, t) {
  t = t || {};
  const r = {};
  function n(p, h, m, v) {
    return j.isPlainObject(p) && j.isPlainObject(h) ? j.merge.call({ caseless: v }, p, h) : j.isPlainObject(h) ? j.merge({}, h) : j.isArray(h) ? h.slice() : h;
  }
  function i(p, h, m, v) {
    if (j.isUndefined(h)) {
      if (!j.isUndefined(p))
        return n(void 0, p, m, v);
    } else
      return n(p, h, m, v);
  }
  function s(p, h) {
    if (!j.isUndefined(h))
      return n(void 0, h);
  }
  function l(p, h) {
    if (j.isUndefined(h)) {
      if (!j.isUndefined(p))
        return n(void 0, p);
    } else
      return n(void 0, h);
  }
  function u(p, h, m) {
    if (m in t)
      return n(p, h);
    if (m in e)
      return n(void 0, p);
  }
  const f = {
    url: s,
    method: s,
    data: s,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: u,
    headers: (p, h, m) => i(jv(p), jv(h), m, !0)
  };
  return j.forEach(Object.keys(Object.assign({}, e, t)), function(h) {
    const m = f[h] || i, v = m(e[h], t[h], h);
    j.isUndefined(v) && m !== u || (r[h] = v);
  }), r;
}
const vw = (e) => {
  const t = Qa({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: s, headers: l, auth: u } = t;
  t.headers = l = Mr.from(l), t.url = dw(mw(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), u && l.set(
    "Authorization",
    "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))
  );
  let f;
  if (j.isFormData(r)) {
    if (jt.hasStandardBrowserEnv || jt.hasStandardBrowserWebWorkerEnv)
      l.setContentType(void 0);
    else if ((f = l.getContentType()) !== !1) {
      const [p, ...h] = f ? f.split(";").map((m) => m.trim()).filter(Boolean) : [];
      l.setContentType([p || "multipart/form-data", ...h].join("; "));
    }
  }
  if (jt.hasStandardBrowserEnv && (n && j.isFunction(n) && (n = n(t)), n || n !== !1 && _3(t.url))) {
    const p = i && s && O3.read(s);
    p && l.set(i, p);
  }
  return t;
}, P3 = typeof XMLHttpRequest < "u", A3 = P3 && function(e) {
  return new Promise(function(r, n) {
    const i = vw(e);
    let s = i.data;
    const l = Mr.from(i.headers).normalize();
    let { responseType: u, onUploadProgress: f, onDownloadProgress: p } = i, h, m, v, w, O;
    function T() {
      w && w(), O && O(), i.cancelToken && i.cancelToken.unsubscribe(h), i.signal && i.signal.removeEventListener("abort", h);
    }
    let _ = new XMLHttpRequest();
    _.open(i.method.toUpperCase(), i.url, !0), _.timeout = i.timeout;
    function A() {
      if (!_)
        return;
      const k = Mr.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), N = {
        data: !u || u === "text" || u === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: k,
        config: e,
        request: _
      };
      gw(function(x) {
        r(x), T();
      }, function(x) {
        n(x), T();
      }, N), _ = null;
    }
    "onloadend" in _ ? _.onloadend = A : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, _.onabort = function() {
      _ && (n(new Re("Request aborted", Re.ECONNABORTED, e, _)), _ = null);
    }, _.onerror = function() {
      n(new Re("Network Error", Re.ERR_NETWORK, e, _)), _ = null;
    }, _.ontimeout = function() {
      let U = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const N = i.transitional || fw;
      i.timeoutErrorMessage && (U = i.timeoutErrorMessage), n(new Re(
        U,
        N.clarifyTimeoutError ? Re.ETIMEDOUT : Re.ECONNABORTED,
        e,
        _
      )), _ = null;
    }, s === void 0 && l.setContentType(null), "setRequestHeader" in _ && j.forEach(l.toJSON(), function(U, N) {
      _.setRequestHeader(N, U);
    }), j.isUndefined(i.withCredentials) || (_.withCredentials = !!i.withCredentials), u && u !== "json" && (_.responseType = i.responseType), p && ([v, O] = jl(p, !0), _.addEventListener("progress", v)), f && _.upload && ([m, w] = jl(f), _.upload.addEventListener("progress", m), _.upload.addEventListener("loadend", w)), (i.cancelToken || i.signal) && (h = (k) => {
      _ && (n(!k || k.type ? new Zi(null, e, _) : k), _.abort(), _ = null);
    }, i.cancelToken && i.cancelToken.subscribe(h), i.signal && (i.signal.aborted ? h() : i.signal.addEventListener("abort", h)));
    const M = E3(i.url);
    if (M && jt.protocols.indexOf(M) === -1) {
      n(new Re("Unsupported protocol " + M + ":", Re.ERR_BAD_REQUEST, e));
      return;
    }
    _.send(s || null);
  });
}, C3 = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), i;
    const s = function(p) {
      if (!i) {
        i = !0, u();
        const h = p instanceof Error ? p : this.reason;
        n.abort(h instanceof Re ? h : new Zi(h instanceof Error ? h.message : h));
      }
    };
    let l = t && setTimeout(() => {
      l = null, s(new Re(`timeout ${t} of ms exceeded`, Re.ETIMEDOUT));
    }, t);
    const u = () => {
      e && (l && clearTimeout(l), l = null, e.forEach((p) => {
        p.unsubscribe ? p.unsubscribe(s) : p.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((p) => p.addEventListener("abort", s));
    const { signal: f } = n;
    return f.unsubscribe = () => j.asap(u), f;
  }
}, $3 = C3, R3 = function* (e, t) {
  let r = e.byteLength;
  if (!t || r < t) {
    yield e;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + t, yield e.slice(n, i), n = i;
}, N3 = async function* (e, t) {
  for await (const r of I3(e))
    yield* R3(r, t);
}, I3 = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Hv = (e, t, r, n) => {
  const i = N3(e, t);
  let s = 0, l, u = (f) => {
    l || (l = !0, n && n(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: p, value: h } = await i.next();
        if (p) {
          u(), f.close();
          return;
        }
        let m = h.byteLength;
        if (r) {
          let v = s += m;
          r(v);
        }
        f.enqueue(new Uint8Array(h));
      } catch (p) {
        throw u(p), p;
      }
    },
    cancel(f) {
      return u(f), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ou = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", yw = Ou && typeof ReadableStream == "function", k3 = Ou && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), bw = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, D3 = yw && bw(() => {
  let e = !1;
  const t = new Request(jt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Wv = 64 * 1024, _f = yw && bw(() => j.isReadableStream(new Response("").body)), Hl = {
  stream: _f && ((e) => e.body)
};
Ou && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Hl[t] && (Hl[t] = j.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new Re(`Response type '${t}' is not supported`, Re.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const M3 = async (e) => {
  if (e == null)
    return 0;
  if (j.isBlob(e))
    return e.size;
  if (j.isSpecCompliantForm(e))
    return (await new Request(jt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (j.isArrayBufferView(e) || j.isArrayBuffer(e))
    return e.byteLength;
  if (j.isURLSearchParams(e) && (e = e + ""), j.isString(e))
    return (await k3(e)).byteLength;
}, L3 = async (e, t) => {
  const r = j.toFiniteNumber(e.getContentLength());
  return r ?? M3(t);
}, F3 = Ou && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: i,
    cancelToken: s,
    timeout: l,
    onDownloadProgress: u,
    onUploadProgress: f,
    responseType: p,
    headers: h,
    withCredentials: m = "same-origin",
    fetchOptions: v
  } = vw(e);
  p = p ? (p + "").toLowerCase() : "text";
  let w = $3([i, s && s.toAbortSignal()], l), O;
  const T = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let _;
  try {
    if (f && D3 && r !== "get" && r !== "head" && (_ = await L3(h, n)) !== 0) {
      let N = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), F;
      if (j.isFormData(n) && (F = N.headers.get("content-type")) && h.setContentType(F), N.body) {
        const [x, $] = zv(
          _,
          jl(qv(f))
        );
        n = Hv(N.body, Wv, x, $);
      }
    }
    j.isString(m) || (m = m ? "include" : "omit");
    const A = "credentials" in Request.prototype;
    O = new Request(t, {
      ...v,
      signal: w,
      method: r.toUpperCase(),
      headers: h.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: A ? m : void 0
    });
    let M = await fetch(O, v);
    const k = _f && (p === "stream" || p === "response");
    if (_f && (u || k && T)) {
      const N = {};
      ["status", "statusText", "headers"].forEach((I) => {
        N[I] = M[I];
      });
      const F = j.toFiniteNumber(M.headers.get("content-length")), [x, $] = u && zv(
        F,
        jl(qv(u), !0)
      ) || [];
      M = new Response(
        Hv(M.body, Wv, x, () => {
          $ && $(), T && T();
        }),
        N
      );
    }
    p = p || "text";
    let U = await Hl[j.findKey(Hl, p) || "text"](M, e);
    return !k && T && T(), await new Promise((N, F) => {
      gw(N, F, {
        data: U,
        headers: Mr.from(M.headers),
        status: M.status,
        statusText: M.statusText,
        config: e,
        request: O
      });
    });
  } catch (A) {
    throw T && T(), A && A.name === "TypeError" && /Load failed|fetch/i.test(A.message) ? Object.assign(
      new Re("Network Error", Re.ERR_NETWORK, e, O),
      {
        cause: A.cause || A
      }
    ) : Re.from(A, A && A.code, e, O);
  }
}), Of = {
  http: XU,
  xhr: A3,
  fetch: F3
};
j.forEach(Of, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Vv = (e) => `- ${e}`, B3 = (e) => j.isFunction(e) || e === null || e === !1, Ew = {
  getAdapter: (e) => {
    e = j.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const i = {};
    for (let s = 0; s < t; s++) {
      r = e[s];
      let l;
      if (n = r, !B3(r) && (n = Of[(l = String(r)).toLowerCase()], n === void 0))
        throw new Re(`Unknown adapter '${l}'`);
      if (n)
        break;
      i[l || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(i).map(
        ([u, f]) => `adapter ${u} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? s.length > 1 ? `since :
` + s.map(Vv).join(`
`) : " " + Vv(s[0]) : "as no adapter specified";
      throw new Re(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Of
};
function Sd(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Zi(null, e);
}
function Gv(e) {
  return Sd(e), e.headers = Mr.from(e.headers), e.data = wd.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ew.getAdapter(e.adapter || lp.adapter)(e).then(function(n) {
    return Sd(e), n.data = wd.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Mr.from(n.headers), n;
  }, function(n) {
    return hw(n) || (Sd(e), n && n.response && (n.response.data = wd.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Mr.from(n.response.headers))), Promise.reject(n);
  });
}
const ww = "1.10.0", Tu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Tu[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Qv = {};
Tu.transitional = function(t, r, n) {
  function i(s, l) {
    return "[Axios v" + ww + "] Transitional option '" + s + "'" + l + (n ? ". " + n : "");
  }
  return (s, l, u) => {
    if (t === !1)
      throw new Re(
        i(l, " has been removed" + (r ? " in " + r : "")),
        Re.ERR_DEPRECATED
      );
    return r && !Qv[l] && (Qv[l] = !0, console.warn(
      i(
        l,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, l, u) : !0;
  };
};
Tu.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function U3(e, t, r) {
  if (typeof e != "object")
    throw new Re("options must be an object", Re.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const s = n[i], l = t[s];
    if (l) {
      const u = e[s], f = u === void 0 || l(u, s, e);
      if (f !== !0)
        throw new Re("option " + s + " must be " + f, Re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Re("Unknown option " + s, Re.ERR_BAD_OPTION);
  }
}
const Al = {
  assertOptions: U3,
  validators: Tu
}, Vr = Al.validators;
class Wl {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Bv(),
      response: new Bv()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? s && !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + s) : n.stack = s;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Qa(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: s } = r;
    n !== void 0 && Al.assertOptions(n, {
      silentJSONParsing: Vr.transitional(Vr.boolean),
      forcedJSONParsing: Vr.transitional(Vr.boolean),
      clarifyTimeoutError: Vr.transitional(Vr.boolean)
    }, !1), i != null && (j.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Al.assertOptions(i, {
      encode: Vr.function,
      serialize: Vr.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Al.assertOptions(r, {
      baseUrl: Vr.spelling("baseURL"),
      withXsrfToken: Vr.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let l = s && j.merge(
      s.common,
      s[r.method]
    );
    s && j.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (O) => {
        delete s[O];
      }
    ), r.headers = Mr.concat(l, s);
    const u = [];
    let f = !0;
    this.interceptors.request.forEach(function(T) {
      typeof T.runWhen == "function" && T.runWhen(r) === !1 || (f = f && T.synchronous, u.unshift(T.fulfilled, T.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(T) {
      p.push(T.fulfilled, T.rejected);
    });
    let h, m = 0, v;
    if (!f) {
      const O = [Gv.bind(this), void 0];
      for (O.unshift.apply(O, u), O.push.apply(O, p), v = O.length, h = Promise.resolve(r); m < v; )
        h = h.then(O[m++], O[m++]);
      return h;
    }
    v = u.length;
    let w = r;
    for (m = 0; m < v; ) {
      const O = u[m++], T = u[m++];
      try {
        w = O(w);
      } catch (_) {
        T.call(this, _);
        break;
      }
    }
    try {
      h = Gv.call(this, w);
    } catch (O) {
      return Promise.reject(O);
    }
    for (m = 0, v = p.length; m < v; )
      h = h.then(p[m++], p[m++]);
    return h;
  }
  getUri(t) {
    t = Qa(this.defaults, t);
    const r = mw(t.baseURL, t.url, t.allowAbsoluteUrls);
    return dw(r, t.params, t.paramsSerializer);
  }
}
j.forEach(["delete", "get", "head", "options"], function(t) {
  Wl.prototype[t] = function(r, n) {
    return this.request(Qa(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
j.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, l, u) {
      return this.request(Qa(u || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: l
      }));
    };
  }
  Wl.prototype[t] = r(), Wl.prototype[t + "Form"] = r(!0);
});
const Cl = Wl;
class up {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners)
        return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let s;
      const l = new Promise((u) => {
        n.subscribe(u), s = u;
      }).then(i);
      return l.cancel = function() {
        n.unsubscribe(s);
      }, l;
    }, t(function(s, l, u) {
      n.reason || (n.reason = new Zi(s, l, u), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new up(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const z3 = up;
function q3(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function j3(e) {
  return j.isObject(e) && e.isAxiosError === !0;
}
const Tf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Tf).forEach(([e, t]) => {
  Tf[t] = e;
});
const H3 = Tf;
function Sw(e) {
  const t = new Cl(e), r = ZE(Cl.prototype.request, t);
  return j.extend(r, Cl.prototype, t, { allOwnKeys: !0 }), j.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return Sw(Qa(e, i));
  }, r;
}
const Ot = Sw(lp);
Ot.Axios = Cl;
Ot.CanceledError = Zi;
Ot.CancelToken = z3;
Ot.isCancel = hw;
Ot.VERSION = ww;
Ot.toFormData = Su;
Ot.AxiosError = Re;
Ot.Cancel = Ot.CanceledError;
Ot.all = function(t) {
  return Promise.all(t);
};
Ot.spread = q3;
Ot.isAxiosError = j3;
Ot.mergeConfig = Qa;
Ot.AxiosHeaders = Mr;
Ot.formToJSON = (e) => pw(j.isHTMLForm(e) ? new FormData(e) : e);
Ot.getAdapter = Ew.getAdapter;
Ot.HttpStatusCode = H3;
Ot.default = Ot;
const _d = Ot;
var W3 = sa, V3 = Mn, G3 = "[object Symbol]";
function Q3(e) {
  return typeof e == "symbol" || V3(e) && W3(e) == G3;
}
var cp = Q3, K3 = Br, Y3 = cp, X3 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, J3 = /^\w*$/;
function Z3(e, t) {
  if (K3(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Y3(e) ? !0 : J3.test(e) || !X3.test(e) || t != null && e in Object(t);
}
var ez = Z3, tz = ei, rz = tz(Object, "create"), xu = rz, Kv = xu;
function nz() {
  this.__data__ = Kv ? Kv(null) : {}, this.size = 0;
}
var az = nz;
function iz(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var oz = iz, sz = xu, lz = "__lodash_hash_undefined__", uz = Object.prototype, cz = uz.hasOwnProperty;
function dz(e) {
  var t = this.__data__;
  if (sz) {
    var r = t[e];
    return r === lz ? void 0 : r;
  }
  return cz.call(t, e) ? t[e] : void 0;
}
var fz = dz, pz = xu, hz = Object.prototype, gz = hz.hasOwnProperty;
function mz(e) {
  var t = this.__data__;
  return pz ? t[e] !== void 0 : gz.call(t, e);
}
var vz = mz, yz = xu, bz = "__lodash_hash_undefined__";
function Ez(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = yz && t === void 0 ? bz : t, this;
}
var wz = Ez, Sz = az, _z = oz, Oz = fz, Tz = vz, xz = wz;
function eo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
eo.prototype.clear = Sz;
eo.prototype.delete = _z;
eo.prototype.get = Oz;
eo.prototype.has = Tz;
eo.prototype.set = xz;
var Pz = eo;
function Az() {
  this.__data__ = [], this.size = 0;
}
var Cz = Az;
function $z(e, t) {
  return e === t || e !== e && t !== t;
}
var dp = $z, Rz = dp;
function Nz(e, t) {
  for (var r = e.length; r--; )
    if (Rz(e[r][0], t))
      return r;
  return -1;
}
var Pu = Nz, Iz = Pu, kz = Array.prototype, Dz = kz.splice;
function Mz(e) {
  var t = this.__data__, r = Iz(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Dz.call(t, r, 1), --this.size, !0;
}
var Lz = Mz, Fz = Pu;
function Bz(e) {
  var t = this.__data__, r = Fz(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Uz = Bz, zz = Pu;
function qz(e) {
  return zz(this.__data__, e) > -1;
}
var jz = qz, Hz = Pu;
function Wz(e, t) {
  var r = this.__data__, n = Hz(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Vz = Wz, Gz = Cz, Qz = Lz, Kz = Uz, Yz = jz, Xz = Vz;
function to(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
to.prototype.clear = Gz;
to.prototype.delete = Qz;
to.prototype.get = Kz;
to.prototype.has = Yz;
to.prototype.set = Xz;
var Au = to, Yv = Pz, Jz = Au, Zz = Zf;
function eq() {
  this.size = 0, this.__data__ = {
    hash: new Yv(),
    map: new (Zz || Jz)(),
    string: new Yv()
  };
}
var tq = eq;
function rq(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var nq = rq, aq = nq;
function iq(e, t) {
  var r = e.__data__;
  return aq(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Cu = iq, oq = Cu;
function sq(e) {
  var t = oq(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var lq = sq, uq = Cu;
function cq(e) {
  return uq(this, e).get(e);
}
var dq = cq, fq = Cu;
function pq(e) {
  return fq(this, e).has(e);
}
var hq = pq, gq = Cu;
function mq(e, t) {
  var r = gq(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var vq = mq, yq = tq, bq = lq, Eq = dq, wq = hq, Sq = vq;
function ro(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ro.prototype.clear = yq;
ro.prototype.delete = bq;
ro.prototype.get = Eq;
ro.prototype.has = wq;
ro.prototype.set = Sq;
var _w = ro, Ow = _w, _q = "Expected a function";
function fp(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(_q);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var l = e.apply(this, n);
    return r.cache = s.set(i, l) || s, l;
  };
  return r.cache = new (fp.Cache || Ow)(), r;
}
fp.Cache = Ow;
var Oq = fp, Tq = Oq, xq = 500;
function Pq(e) {
  var t = Tq(e, function(n) {
    return r.size === xq && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Aq = Pq, Cq = Aq, $q = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Rq = /\\(\\)?/g, Nq = Cq(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace($q, function(r, n, i, s) {
    t.push(i ? s.replace(Rq, "$1") : n || r);
  }), t;
}), Iq = Nq;
function kq(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Dq = kq, Xv = bs, Mq = Dq, Lq = Br, Fq = cp, Bq = 1 / 0, Jv = Xv ? Xv.prototype : void 0, Zv = Jv ? Jv.toString : void 0;
function Tw(e) {
  if (typeof e == "string")
    return e;
  if (Lq(e))
    return Mq(e, Tw) + "";
  if (Fq(e))
    return Zv ? Zv.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Bq ? "-0" : t;
}
var Uq = Tw, zq = Uq;
function qq(e) {
  return e == null ? "" : zq(e);
}
var jq = qq, Hq = Br, Wq = ez, Vq = Iq, Gq = jq;
function Qq(e, t) {
  return Hq(e) ? e : Wq(e, t) ? [e] : Vq(Gq(e));
}
var $u = Qq, Kq = cp, Yq = 1 / 0;
function Xq(e) {
  if (typeof e == "string" || Kq(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Yq ? "-0" : t;
}
var pp = Xq, Jq = $u, Zq = pp;
function ej(e, t) {
  t = Jq(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Zq(t[r++])];
  return r && r == n ? e : void 0;
}
var xw = ej, tj = xw;
function rj(e, t, r) {
  var n = e == null ? void 0 : tj(e, t);
  return n === void 0 ? r : n;
}
var nj = rj;
const Io = /* @__PURE__ */ Ct(nj);
function aj(e, t) {
  return e != null && t in Object(e);
}
var ij = aj, oj = 9007199254740991, sj = /^(?:0|[1-9]\d*)$/;
function lj(e, t) {
  var r = typeof e;
  return t = t ?? oj, !!t && (r == "number" || r != "symbol" && sj.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ru = lj, uj = $u, cj = mu, dj = Br, fj = Ru, pj = ep, hj = pp;
function gj(e, t, r) {
  t = uj(t, e);
  for (var n = -1, i = t.length, s = !1; ++n < i; ) {
    var l = hj(t[n]);
    if (!(s = e != null && r(e, l)))
      break;
    e = e[l];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && pj(i) && fj(l, i) && (dj(e) || cj(e)));
}
var mj = gj, vj = ij, yj = mj;
function bj(e, t) {
  return e != null && yj(e, t, vj);
}
var Pw = bj;
const Ej = /* @__PURE__ */ Ct(Pw);
var no = TypeError;
const wj = {}, Sj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wj
}, Symbol.toStringTag, { value: "Module" })), _j = /* @__PURE__ */ TC(Sj);
var hp = typeof Map == "function" && Map.prototype, Od = Object.getOwnPropertyDescriptor && hp ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Vl = hp && Od && typeof Od.get == "function" ? Od.get : null, ey = hp && Map.prototype.forEach, gp = typeof Set == "function" && Set.prototype, Td = Object.getOwnPropertyDescriptor && gp ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Gl = gp && Td && typeof Td.get == "function" ? Td.get : null, ty = gp && Set.prototype.forEach, Oj = typeof WeakMap == "function" && WeakMap.prototype, Lo = Oj ? WeakMap.prototype.has : null, Tj = typeof WeakSet == "function" && WeakSet.prototype, Fo = Tj ? WeakSet.prototype.has : null, xj = typeof WeakRef == "function" && WeakRef.prototype, ry = xj ? WeakRef.prototype.deref : null, Pj = Boolean.prototype.valueOf, Aj = Object.prototype.toString, Cj = Function.prototype.toString, $j = String.prototype.match, mp = String.prototype.slice, Gn = String.prototype.replace, Rj = String.prototype.toUpperCase, ny = String.prototype.toLowerCase, Aw = RegExp.prototype.test, ay = Array.prototype.concat, Yr = Array.prototype.join, Nj = Array.prototype.slice, iy = Math.floor, xf = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, xd = Object.getOwnPropertySymbols, Pf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Ui = typeof Symbol == "function" && typeof Symbol.iterator == "object", Bo = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Ui || "symbol") ? Symbol.toStringTag : null, Cw = Object.prototype.propertyIsEnumerable, oy = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function sy(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Aw.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -iy(-e) : iy(e);
    if (n !== e) {
      var i = String(n), s = mp.call(t, i.length + 1);
      return Gn.call(i, r, "$&_") + "." + Gn.call(Gn.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Gn.call(t, r, "$&_");
}
var Af = _j, ly = Af.custom, uy = Nw(ly) ? ly : null, $w = {
  __proto__: null,
  double: '"',
  single: "'"
}, Ij = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, Nu = function e(t, r, n, i) {
  var s = r || {};
  if (mn(s, "quoteStyle") && !mn($w, s.quoteStyle))
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (mn(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var l = mn(s, "customInspect") ? s.customInspect : !0;
  if (typeof l != "boolean" && l !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (mn(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (mn(s, "numericSeparator") && typeof s.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var u = s.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return kw(t, s);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var f = String(t);
    return u ? sy(t, f) : f;
  }
  if (typeof t == "bigint") {
    var p = String(t) + "n";
    return u ? sy(t, p) : p;
  }
  var h = typeof s.depth > "u" ? 5 : s.depth;
  if (typeof n > "u" && (n = 0), n >= h && h > 0 && typeof t == "object")
    return Cf(t) ? "[Array]" : "[Object]";
  var m = Xj(s, n);
  if (typeof i > "u")
    i = [];
  else if (Iw(i, t) >= 0)
    return "[Circular]";
  function v(W, se, _e) {
    if (se && (i = Nj.call(i), i.push(se)), _e) {
      var Oe = {
        depth: s.depth
      };
      return mn(s, "quoteStyle") && (Oe.quoteStyle = s.quoteStyle), e(W, Oe, n + 1, i);
    }
    return e(W, s, n + 1, i);
  }
  if (typeof t == "function" && !cy(t)) {
    var w = qj(t), O = El(t, v);
    return "[Function" + (w ? ": " + w : " (anonymous)") + "]" + (O.length > 0 ? " { " + Yr.call(O, ", ") + " }" : "");
  }
  if (Nw(t)) {
    var T = Ui ? Gn.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Pf.call(t);
    return typeof t == "object" && !Ui ? Ro(T) : T;
  }
  if (Qj(t)) {
    for (var _ = "<" + ny.call(String(t.nodeName)), A = t.attributes || [], M = 0; M < A.length; M++)
      _ += " " + A[M].name + "=" + Rw(kj(A[M].value), "double", s);
    return _ += ">", t.childNodes && t.childNodes.length && (_ += "..."), _ += "</" + ny.call(String(t.nodeName)) + ">", _;
  }
  if (Cf(t)) {
    if (t.length === 0)
      return "[]";
    var k = El(t, v);
    return m && !Yj(k) ? "[" + $f(k, m) + "]" : "[ " + Yr.call(k, ", ") + " ]";
  }
  if (Mj(t)) {
    var U = El(t, v);
    return !("cause" in Error.prototype) && "cause" in t && !Cw.call(t, "cause") ? "{ [" + String(t) + "] " + Yr.call(ay.call("[cause]: " + v(t.cause), U), ", ") + " }" : U.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Yr.call(U, ", ") + " }";
  }
  if (typeof t == "object" && l) {
    if (uy && typeof t[uy] == "function" && Af)
      return Af(t, { depth: h - n });
    if (l !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (jj(t)) {
    var N = [];
    return ey && ey.call(t, function(W, se) {
      N.push(v(se, t, !0) + " => " + v(W, t));
    }), dy("Map", Vl.call(t), N, m);
  }
  if (Vj(t)) {
    var F = [];
    return ty && ty.call(t, function(W) {
      F.push(v(W, t));
    }), dy("Set", Gl.call(t), F, m);
  }
  if (Hj(t))
    return Pd("WeakMap");
  if (Gj(t))
    return Pd("WeakSet");
  if (Wj(t))
    return Pd("WeakRef");
  if (Fj(t))
    return Ro(v(Number(t)));
  if (Uj(t))
    return Ro(v(xf.call(t)));
  if (Bj(t))
    return Ro(Pj.call(t));
  if (Lj(t))
    return Ro(v(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && t === globalThis || typeof Nr < "u" && t === Nr)
    return "{ [object globalThis] }";
  if (!Dj(t) && !cy(t)) {
    var x = El(t, v), $ = oy ? oy(t) === Object.prototype : t instanceof Object || t.constructor === Object, I = t instanceof Object ? "" : "null prototype", B = !$ && Bo && Object(t) === t && Bo in t ? mp.call(ua(t), 8, -1) : I ? "Object" : "", V = $ || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", X = V + (B || I ? "[" + Yr.call(ay.call([], B || [], I || []), ": ") + "] " : "");
    return x.length === 0 ? X + "{}" : m ? X + "{" + $f(x, m) + "}" : X + "{ " + Yr.call(x, ", ") + " }";
  }
  return String(t);
};
function Rw(e, t, r) {
  var n = r.quoteStyle || t, i = $w[n];
  return i + e + i;
}
function kj(e) {
  return Gn.call(String(e), /"/g, "&quot;");
}
function ti(e) {
  return !Bo || !(typeof e == "object" && (Bo in e || typeof e[Bo] < "u"));
}
function Cf(e) {
  return ua(e) === "[object Array]" && ti(e);
}
function Dj(e) {
  return ua(e) === "[object Date]" && ti(e);
}
function cy(e) {
  return ua(e) === "[object RegExp]" && ti(e);
}
function Mj(e) {
  return ua(e) === "[object Error]" && ti(e);
}
function Lj(e) {
  return ua(e) === "[object String]" && ti(e);
}
function Fj(e) {
  return ua(e) === "[object Number]" && ti(e);
}
function Bj(e) {
  return ua(e) === "[object Boolean]" && ti(e);
}
function Nw(e) {
  if (Ui)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !Pf)
    return !1;
  try {
    return Pf.call(e), !0;
  } catch {
  }
  return !1;
}
function Uj(e) {
  if (!e || typeof e != "object" || !xf)
    return !1;
  try {
    return xf.call(e), !0;
  } catch {
  }
  return !1;
}
var zj = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function mn(e, t) {
  return zj.call(e, t);
}
function ua(e) {
  return Aj.call(e);
}
function qj(e) {
  if (e.name)
    return e.name;
  var t = $j.call(Cj.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Iw(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function jj(e) {
  if (!Vl || !e || typeof e != "object")
    return !1;
  try {
    Vl.call(e);
    try {
      Gl.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function Hj(e) {
  if (!Lo || !e || typeof e != "object")
    return !1;
  try {
    Lo.call(e, Lo);
    try {
      Fo.call(e, Fo);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Wj(e) {
  if (!ry || !e || typeof e != "object")
    return !1;
  try {
    return ry.call(e), !0;
  } catch {
  }
  return !1;
}
function Vj(e) {
  if (!Gl || !e || typeof e != "object")
    return !1;
  try {
    Gl.call(e);
    try {
      Vl.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function Gj(e) {
  if (!Fo || !e || typeof e != "object")
    return !1;
  try {
    Fo.call(e, Fo);
    try {
      Lo.call(e, Lo);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Qj(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function kw(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return kw(mp.call(e, 0, t.maxStringLength), t) + n;
  }
  var i = Ij[t.quoteStyle || "single"];
  i.lastIndex = 0;
  var s = Gn.call(Gn.call(e, i, "\\$1"), /[\x00-\x1f]/g, Kj);
  return Rw(s, "single", t);
}
function Kj(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + Rj.call(t.toString(16));
}
function Ro(e) {
  return "Object(" + e + ")";
}
function Pd(e) {
  return e + " { ? }";
}
function dy(e, t, r, n) {
  var i = n ? $f(r, n) : Yr.call(r, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function Yj(e) {
  for (var t = 0; t < e.length; t++)
    if (Iw(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function Xj(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = Yr.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: Yr.call(Array(t + 1), r)
  };
}
function $f(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + Yr.call(e, "," + r) + `
` + t.prev;
}
function El(e, t) {
  var r = Cf(e), n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++)
      n[i] = mn(e, i) ? t(e[i], e) : "";
  }
  var s = typeof xd == "function" ? xd(e) : [], l;
  if (Ui) {
    l = {};
    for (var u = 0; u < s.length; u++)
      l["$" + s[u]] = s[u];
  }
  for (var f in e)
    mn(e, f) && (r && String(Number(f)) === f && f < e.length || Ui && l["$" + f] instanceof Symbol || (Aw.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e))));
  if (typeof xd == "function")
    for (var p = 0; p < s.length; p++)
      Cw.call(e, s[p]) && n.push("[" + t(s[p]) + "]: " + t(e[s[p]], e));
  return n;
}
var Jj = Nu, Zj = no, Iu = function(e, t, r) {
  for (var n = e, i; (i = n.next) != null; n = i)
    if (i.key === t)
      return n.next = i.next, r || (i.next = /** @type {NonNullable<typeof list.next>} */
      e.next, e.next = i), i;
}, eH = function(e, t) {
  if (e) {
    var r = Iu(e, t);
    return r && r.value;
  }
}, tH = function(e, t, r) {
  var n = Iu(e, t);
  n ? n.value = r : e.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: t,
    next: e.next,
    value: r
  };
}, rH = function(e, t) {
  return e ? !!Iu(e, t) : !1;
}, nH = function(e, t) {
  if (e)
    return Iu(e, t, !0);
}, aH = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new Zj("Side channel does not contain " + Jj(n));
    },
    delete: function(n) {
      var i = t && t.next, s = nH(t, n);
      return s && i && i === s && (t = void 0), !!s;
    },
    get: function(n) {
      return eH(t, n);
    },
    has: function(n) {
      return rH(t, n);
    },
    set: function(n, i) {
      t || (t = {
        next: void 0
      }), tH(
        /** @type {NonNullable<typeof $o>} */
        t,
        n,
        i
      );
    }
  };
  return r;
}, Dw = Object, iH = Error, oH = EvalError, sH = RangeError, lH = ReferenceError, uH = SyntaxError, cH = URIError, dH = Math.abs, fH = Math.floor, pH = Math.max, hH = Math.min, gH = Math.pow, mH = Math.round, vH = Number.isNaN || function(t) {
  return t !== t;
}, yH = vH, bH = function(t) {
  return yH(t) || t === 0 ? t : t < 0 ? -1 : 1;
}, EH = Object.getOwnPropertyDescriptor, $l = EH;
if ($l)
  try {
    $l([], "length");
  } catch {
    $l = null;
  }
var Mw = $l, Rl = Object.defineProperty || !1;
if (Rl)
  try {
    Rl({}, "a", { value: 1 });
  } catch {
    Rl = !1;
  }
var wH = Rl, Ad, fy;
function SH() {
  return fy || (fy = 1, Ad = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var i = 42;
    t[r] = i;
    for (var s in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var l = Object.getOwnPropertySymbols(t);
    if (l.length !== 1 || l[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var u = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (u.value !== i || u.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Ad;
}
var Cd, py;
function _H() {
  if (py)
    return Cd;
  py = 1;
  var e = typeof Symbol < "u" && Symbol, t = SH();
  return Cd = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Cd;
}
var $d, hy;
function Lw() {
  return hy || (hy = 1, $d = typeof Reflect < "u" && Reflect.getPrototypeOf || null), $d;
}
var Rd, gy;
function Fw() {
  if (gy)
    return Rd;
  gy = 1;
  var e = Dw;
  return Rd = e.getPrototypeOf || null, Rd;
}
var Nd, my;
function OH() {
  if (my)
    return Nd;
  my = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(f, p) {
    for (var h = [], m = 0; m < f.length; m += 1)
      h[m] = f[m];
    for (var v = 0; v < p.length; v += 1)
      h[v + f.length] = p[v];
    return h;
  }, s = function(f, p) {
    for (var h = [], m = p || 0, v = 0; m < f.length; m += 1, v += 1)
      h[v] = f[m];
    return h;
  }, l = function(u, f) {
    for (var p = "", h = 0; h < u.length; h += 1)
      p += u[h], h + 1 < u.length && (p += f);
    return p;
  };
  return Nd = function(f) {
    var p = this;
    if (typeof p != "function" || t.apply(p) !== n)
      throw new TypeError(e + p);
    for (var h = s(arguments, 1), m, v = function() {
      if (this instanceof m) {
        var A = p.apply(
          this,
          i(h, arguments)
        );
        return Object(A) === A ? A : this;
      }
      return p.apply(
        f,
        i(h, arguments)
      );
    }, w = r(0, p.length - h.length), O = [], T = 0; T < w; T++)
      O[T] = "$" + T;
    if (m = Function("binder", "return function (" + l(O, ",") + "){ return binder.apply(this,arguments); }")(v), p.prototype) {
      var _ = function() {
      };
      _.prototype = p.prototype, m.prototype = new _(), _.prototype = null;
    }
    return m;
  }, Nd;
}
var Id, vy;
function ku() {
  if (vy)
    return Id;
  vy = 1;
  var e = OH();
  return Id = Function.prototype.bind || e, Id;
}
var kd, yy;
function vp() {
  return yy || (yy = 1, kd = Function.prototype.call), kd;
}
var Dd, by;
function Bw() {
  return by || (by = 1, Dd = Function.prototype.apply), Dd;
}
var TH = typeof Reflect < "u" && Reflect && Reflect.apply, xH = ku(), PH = Bw(), AH = vp(), CH = TH, $H = CH || xH.call(AH, PH), RH = ku(), NH = no, IH = vp(), kH = $H, Uw = function(t) {
  if (t.length < 1 || typeof t[0] != "function")
    throw new NH("a function is required");
  return kH(RH, IH, t);
}, Md, Ey;
function DH() {
  if (Ey)
    return Md;
  Ey = 1;
  var e = Uw, t = Mw, r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (l) {
    if (!l || typeof l != "object" || !("code" in l) || l.code !== "ERR_PROTO_ACCESS")
      throw l;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, s = i.getPrototypeOf;
  return Md = n && typeof n.get == "function" ? e([n.get]) : typeof s == "function" ? (
    /** @type {import('./get')} */
    function(u) {
      return s(u == null ? u : i(u));
    }
  ) : !1, Md;
}
var Ld, wy;
function MH() {
  if (wy)
    return Ld;
  wy = 1;
  var e = Lw(), t = Fw(), r = DH();
  return Ld = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, Ld;
}
var Fd, Sy;
function LH() {
  if (Sy)
    return Fd;
  Sy = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = ku();
  return Fd = r.call(e, t), Fd;
}
var Le, FH = Dw, BH = iH, UH = oH, zH = sH, qH = lH, zi = uH, xi = no, jH = cH, HH = dH, WH = fH, VH = pH, GH = hH, QH = gH, KH = mH, YH = bH, zw = Function, Bd = function(e) {
  try {
    return zw('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, hs = Mw, XH = wH, Ud = function() {
  throw new xi();
}, JH = hs ? function() {
  try {
    return arguments.callee, Ud;
  } catch {
    try {
      return hs(arguments, "callee").get;
    } catch {
      return Ud;
    }
  }
}() : Ud, vi = _H()(), Rt = MH(), ZH = Fw(), e4 = Lw(), qw = Bw(), ws = vp(), Ei = {}, t4 = typeof Uint8Array > "u" || !Rt ? Le : Rt(Uint8Array), Ia = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? Le : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Le : ArrayBuffer,
  "%ArrayIteratorPrototype%": vi && Rt ? Rt([][Symbol.iterator]()) : Le,
  "%AsyncFromSyncIteratorPrototype%": Le,
  "%AsyncFunction%": Ei,
  "%AsyncGenerator%": Ei,
  "%AsyncGeneratorFunction%": Ei,
  "%AsyncIteratorPrototype%": Ei,
  "%Atomics%": typeof Atomics > "u" ? Le : Atomics,
  "%BigInt%": typeof BigInt > "u" ? Le : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? Le : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? Le : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? Le : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": BH,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": UH,
  "%Float16Array%": typeof Float16Array > "u" ? Le : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? Le : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? Le : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Le : FinalizationRegistry,
  "%Function%": zw,
  "%GeneratorFunction%": Ei,
  "%Int8Array%": typeof Int8Array > "u" ? Le : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? Le : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? Le : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": vi && Rt ? Rt(Rt([][Symbol.iterator]())) : Le,
  "%JSON%": typeof JSON == "object" ? JSON : Le,
  "%Map%": typeof Map > "u" ? Le : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !vi || !Rt ? Le : Rt((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": FH,
  "%Object.getOwnPropertyDescriptor%": hs,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? Le : Promise,
  "%Proxy%": typeof Proxy > "u" ? Le : Proxy,
  "%RangeError%": zH,
  "%ReferenceError%": qH,
  "%Reflect%": typeof Reflect > "u" ? Le : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? Le : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !vi || !Rt ? Le : Rt((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Le : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": vi && Rt ? Rt(""[Symbol.iterator]()) : Le,
  "%Symbol%": vi ? Symbol : Le,
  "%SyntaxError%": zi,
  "%ThrowTypeError%": JH,
  "%TypedArray%": t4,
  "%TypeError%": xi,
  "%Uint8Array%": typeof Uint8Array > "u" ? Le : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Le : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? Le : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? Le : Uint32Array,
  "%URIError%": jH,
  "%WeakMap%": typeof WeakMap > "u" ? Le : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? Le : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? Le : WeakSet,
  "%Function.prototype.call%": ws,
  "%Function.prototype.apply%": qw,
  "%Object.defineProperty%": XH,
  "%Object.getPrototypeOf%": ZH,
  "%Math.abs%": HH,
  "%Math.floor%": WH,
  "%Math.max%": VH,
  "%Math.min%": GH,
  "%Math.pow%": QH,
  "%Math.round%": KH,
  "%Math.sign%": YH,
  "%Reflect.getPrototypeOf%": e4
};
if (Rt)
  try {
    null.error;
  } catch (e) {
    var r4 = Rt(Rt(e));
    Ia["%Error.prototype%"] = r4;
  }
var n4 = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Bd("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Bd("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Bd("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && Rt && (r = Rt(i.prototype));
  }
  return Ia[t] = r, r;
}, _y = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Ss = ku(), Ql = LH(), a4 = Ss.call(ws, Array.prototype.concat), i4 = Ss.call(qw, Array.prototype.splice), Oy = Ss.call(ws, String.prototype.replace), Kl = Ss.call(ws, String.prototype.slice), o4 = Ss.call(ws, RegExp.prototype.exec), s4 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, l4 = /\\(\\)?/g, u4 = function(t) {
  var r = Kl(t, 0, 1), n = Kl(t, -1);
  if (r === "%" && n !== "%")
    throw new zi("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new zi("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return Oy(t, s4, function(s, l, u, f) {
    i[i.length] = u ? Oy(f, l4, "$1") : l || s;
  }), i;
}, c4 = function(t, r) {
  var n = t, i;
  if (Ql(_y, n) && (i = _y[n], n = "%" + i[0] + "%"), Ql(Ia, n)) {
    var s = Ia[n];
    if (s === Ei && (s = n4(n)), typeof s > "u" && !r)
      throw new xi("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: s
    };
  }
  throw new zi("intrinsic " + t + " does not exist!");
}, yp = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new xi("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new xi('"allowMissing" argument must be a boolean');
  if (o4(/^%?[^%]*%?$/, t) === null)
    throw new zi("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = u4(t), i = n.length > 0 ? n[0] : "", s = c4("%" + i + "%", r), l = s.name, u = s.value, f = !1, p = s.alias;
  p && (i = p[0], i4(n, a4([0, 1], p)));
  for (var h = 1, m = !0; h < n.length; h += 1) {
    var v = n[h], w = Kl(v, 0, 1), O = Kl(v, -1);
    if ((w === '"' || w === "'" || w === "`" || O === '"' || O === "'" || O === "`") && w !== O)
      throw new zi("property names with quotes must have matching quotes");
    if ((v === "constructor" || !m) && (f = !0), i += "." + v, l = "%" + i + "%", Ql(Ia, l))
      u = Ia[l];
    else if (u != null) {
      if (!(v in u)) {
        if (!r)
          throw new xi("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (hs && h + 1 >= n.length) {
        var T = hs(u, v);
        m = !!T, m && "get" in T && !("originalValue" in T.get) ? u = T.get : u = u[v];
      } else
        m = Ql(u, v), u = u[v];
      m && !f && (Ia[l] = u);
    }
  }
  return u;
}, jw = yp, Hw = Uw, d4 = Hw([jw("%String.prototype.indexOf%")]), Ww = function(t, r) {
  var n = (
    /** @type {(this: unknown, ...args: unknown[]) => unknown} */
    jw(t, !!r)
  );
  return typeof n == "function" && d4(t, ".prototype.") > -1 ? Hw(
    /** @type {const} */
    [n]
  ) : n;
}, f4 = yp, _s = Ww, p4 = Nu, h4 = no, Ty = f4("%Map%", !0), g4 = _s("Map.prototype.get", !0), m4 = _s("Map.prototype.set", !0), v4 = _s("Map.prototype.has", !0), y4 = _s("Map.prototype.delete", !0), b4 = _s("Map.prototype.size", !0), Vw = !!Ty && /** @type {Exclude<import('.'), false>} */
function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new h4("Side channel does not contain " + p4(n));
    },
    delete: function(n) {
      if (t) {
        var i = y4(t, n);
        return b4(t) === 0 && (t = void 0), i;
      }
      return !1;
    },
    get: function(n) {
      if (t)
        return g4(t, n);
    },
    has: function(n) {
      return t ? v4(t, n) : !1;
    },
    set: function(n, i) {
      t || (t = new Ty()), m4(t, n, i);
    }
  };
  return r;
}, E4 = yp, Du = Ww, w4 = Nu, wl = Vw, S4 = no, yi = E4("%WeakMap%", !0), _4 = Du("WeakMap.prototype.get", !0), O4 = Du("WeakMap.prototype.set", !0), T4 = Du("WeakMap.prototype.has", !0), x4 = Du("WeakMap.prototype.delete", !0), P4 = yi ? (
  /** @type {Exclude<import('.'), false>} */
  function() {
    var t, r, n = {
      assert: function(i) {
        if (!n.has(i))
          throw new S4("Side channel does not contain " + w4(i));
      },
      delete: function(i) {
        if (yi && i && (typeof i == "object" || typeof i == "function")) {
          if (t)
            return x4(t, i);
        } else if (wl && r)
          return r.delete(i);
        return !1;
      },
      get: function(i) {
        return yi && i && (typeof i == "object" || typeof i == "function") && t ? _4(t, i) : r && r.get(i);
      },
      has: function(i) {
        return yi && i && (typeof i == "object" || typeof i == "function") && t ? T4(t, i) : !!r && r.has(i);
      },
      set: function(i, s) {
        yi && i && (typeof i == "object" || typeof i == "function") ? (t || (t = new yi()), O4(t, i, s)) : wl && (r || (r = wl()), r.set(i, s));
      }
    };
    return n;
  }
) : wl, A4 = no, C4 = Nu, $4 = aH, R4 = Vw, N4 = P4, I4 = N4 || R4 || $4, k4 = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new A4("Side channel does not contain " + C4(n));
    },
    delete: function(n) {
      return !!t && t.delete(n);
    },
    get: function(n) {
      return t && t.get(n);
    },
    has: function(n) {
      return !!t && t.has(n);
    },
    set: function(n, i) {
      t || (t = I4()), t.set(n, i);
    }
  };
  return r;
}, D4 = String.prototype.replace, M4 = /%20/g, zd = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, bp = {
  default: zd.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return D4.call(e, M4, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: zd.RFC1738,
  RFC3986: zd.RFC3986
}, L4 = bp, qd = Object.prototype.hasOwnProperty, Oa = Array.isArray, Gr = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), F4 = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (Oa(n)) {
      for (var i = [], s = 0; s < n.length; ++s)
        typeof n[s] < "u" && i.push(n[s]);
      r.obj[r.prop] = i;
    }
  }
}, Gw = function(t, r) {
  for (var n = r && r.plainObjects ? { __proto__: null } : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (n[i] = t[i]);
  return n;
}, B4 = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object" && typeof r != "function") {
    if (Oa(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !qd.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var i = t;
  return Oa(t) && !Oa(r) && (i = Gw(t, n)), Oa(t) && Oa(r) ? (r.forEach(function(s, l) {
    if (qd.call(t, l)) {
      var u = t[l];
      u && typeof u == "object" && s && typeof s == "object" ? t[l] = e(u, s, n) : t.push(s);
    } else
      t[l] = s;
  }), t) : Object.keys(r).reduce(function(s, l) {
    var u = r[l];
    return qd.call(s, l) ? s[l] = e(s[l], u, n) : s[l] = u, s;
  }, i);
}, U4 = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, t);
}, z4 = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, jd = 1024, q4 = function(t, r, n, i, s) {
  if (t.length === 0)
    return t;
  var l = t;
  if (typeof t == "symbol" ? l = Symbol.prototype.toString.call(t) : typeof t != "string" && (l = String(t)), n === "iso-8859-1")
    return escape(l).replace(/%u[0-9a-f]{4}/gi, function(w) {
      return "%26%23" + parseInt(w.slice(2), 16) + "%3B";
    });
  for (var u = "", f = 0; f < l.length; f += jd) {
    for (var p = l.length >= jd ? l.slice(f, f + jd) : l, h = [], m = 0; m < p.length; ++m) {
      var v = p.charCodeAt(m);
      if (v === 45 || v === 46 || v === 95 || v === 126 || v >= 48 && v <= 57 || v >= 65 && v <= 90 || v >= 97 && v <= 122 || s === L4.RFC1738 && (v === 40 || v === 41)) {
        h[h.length] = p.charAt(m);
        continue;
      }
      if (v < 128) {
        h[h.length] = Gr[v];
        continue;
      }
      if (v < 2048) {
        h[h.length] = Gr[192 | v >> 6] + Gr[128 | v & 63];
        continue;
      }
      if (v < 55296 || v >= 57344) {
        h[h.length] = Gr[224 | v >> 12] + Gr[128 | v >> 6 & 63] + Gr[128 | v & 63];
        continue;
      }
      m += 1, v = 65536 + ((v & 1023) << 10 | p.charCodeAt(m) & 1023), h[h.length] = Gr[240 | v >> 18] + Gr[128 | v >> 12 & 63] + Gr[128 | v >> 6 & 63] + Gr[128 | v & 63];
    }
    u += h.join("");
  }
  return u;
}, j4 = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var s = r[i], l = s.obj[s.prop], u = Object.keys(l), f = 0; f < u.length; ++f) {
      var p = u[f], h = l[p];
      typeof h == "object" && h !== null && n.indexOf(h) === -1 && (r.push({ obj: l, prop: p }), n.push(h));
    }
  return F4(r), t;
}, H4 = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, W4 = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, V4 = function(t, r) {
  return [].concat(t, r);
}, G4 = function(t, r) {
  if (Oa(t)) {
    for (var n = [], i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  return r(t);
}, Qw = {
  arrayToObject: Gw,
  assign: U4,
  combine: V4,
  compact: j4,
  decode: z4,
  encode: q4,
  isBuffer: W4,
  isRegExp: H4,
  maybeMap: G4,
  merge: B4
}, Kw = k4, Nl = Qw, Uo = bp, Q4 = Object.prototype.hasOwnProperty, Yw = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, r) {
    return t + "[" + r + "]";
  },
  repeat: function(t) {
    return t;
  }
}, Kr = Array.isArray, K4 = Array.prototype.push, Xw = function(e, t) {
  K4.apply(e, Kr(t) ? t : [t]);
}, Y4 = Date.prototype.toISOString, xy = Uo.default, At = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  commaRoundTrip: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: Nl.encode,
  encodeValuesOnly: !1,
  filter: void 0,
  format: xy,
  formatter: Uo.formatters[xy],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return Y4.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, X4 = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, Hd = {}, J4 = function e(t, r, n, i, s, l, u, f, p, h, m, v, w, O, T, _, A, M) {
  for (var k = t, U = M, N = 0, F = !1; (U = U.get(Hd)) !== void 0 && !F; ) {
    var x = U.get(t);
    if (N += 1, typeof x < "u") {
      if (x === N)
        throw new RangeError("Cyclic object value");
      F = !0;
    }
    typeof U.get(Hd) > "u" && (N = 0);
  }
  if (typeof h == "function" ? k = h(r, k) : k instanceof Date ? k = w(k) : n === "comma" && Kr(k) && (k = Nl.maybeMap(k, function(K) {
    return K instanceof Date ? w(K) : K;
  })), k === null) {
    if (l)
      return p && !_ ? p(r, At.encoder, A, "key", O) : r;
    k = "";
  }
  if (X4(k) || Nl.isBuffer(k)) {
    if (p) {
      var $ = _ ? r : p(r, At.encoder, A, "key", O);
      return [T($) + "=" + T(p(k, At.encoder, A, "value", O))];
    }
    return [T(r) + "=" + T(String(k))];
  }
  var I = [];
  if (typeof k > "u")
    return I;
  var B;
  if (n === "comma" && Kr(k))
    _ && p && (k = Nl.maybeMap(k, p)), B = [{ value: k.length > 0 ? k.join(",") || null : void 0 }];
  else if (Kr(h))
    B = h;
  else {
    var V = Object.keys(k);
    B = m ? V.sort(m) : V;
  }
  var X = f ? String(r).replace(/\./g, "%2E") : String(r), W = i && Kr(k) && k.length === 1 ? X + "[]" : X;
  if (s && Kr(k) && k.length === 0)
    return W + "[]";
  for (var se = 0; se < B.length; ++se) {
    var _e = B[se], Oe = typeof _e == "object" && _e && typeof _e.value < "u" ? _e.value : k[_e];
    if (!(u && Oe === null)) {
      var Te = v && f ? String(_e).replace(/\./g, "%2E") : String(_e), ze = Kr(k) ? typeof n == "function" ? n(W, Te) : W : W + (v ? "." + Te : "[" + Te + "]");
      M.set(t, N);
      var Ze = Kw();
      Ze.set(Hd, M), Xw(I, e(
        Oe,
        ze,
        n,
        i,
        s,
        l,
        u,
        f,
        n === "comma" && _ && Kr(k) ? null : p,
        h,
        m,
        v,
        w,
        O,
        T,
        _,
        A,
        Ze
      ));
    }
  }
  return I;
}, Z4 = function(t) {
  if (!t)
    return At;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.encodeDotInKeys < "u" && typeof t.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || At.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Uo.default;
  if (typeof t.format < "u") {
    if (!Q4.call(Uo.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var i = Uo.formatters[n], s = At.filter;
  (typeof t.filter == "function" || Kr(t.filter)) && (s = t.filter);
  var l;
  if (t.arrayFormat in Yw ? l = t.arrayFormat : "indices" in t ? l = t.indices ? "indices" : "repeat" : l = At.arrayFormat, "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = typeof t.allowDots > "u" ? t.encodeDotInKeys === !0 ? !0 : At.allowDots : !!t.allowDots;
  return {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : At.addQueryPrefix,
    allowDots: u,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : At.allowEmptyArrays,
    arrayFormat: l,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : At.charsetSentinel,
    commaRoundTrip: !!t.commaRoundTrip,
    delimiter: typeof t.delimiter > "u" ? At.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : At.encode,
    encodeDotInKeys: typeof t.encodeDotInKeys == "boolean" ? t.encodeDotInKeys : At.encodeDotInKeys,
    encoder: typeof t.encoder == "function" ? t.encoder : At.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : At.encodeValuesOnly,
    filter: s,
    format: n,
    formatter: i,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : At.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : At.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : At.strictNullHandling
  };
}, eW = function(e, t) {
  var r = e, n = Z4(t), i, s;
  typeof n.filter == "function" ? (s = n.filter, r = s("", r)) : Kr(n.filter) && (s = n.filter, i = s);
  var l = [];
  if (typeof r != "object" || r === null)
    return "";
  var u = Yw[n.arrayFormat], f = u === "comma" && n.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var p = Kw(), h = 0; h < i.length; ++h) {
    var m = i[h], v = r[m];
    n.skipNulls && v === null || Xw(l, J4(
      v,
      m,
      u,
      f,
      n.allowEmptyArrays,
      n.strictNullHandling,
      n.skipNulls,
      n.encodeDotInKeys,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      p
    ));
  }
  var w = l.join(n.delimiter), O = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? O += "utf8=%26%2310003%3B&" : O += "utf8=%E2%9C%93&"), w.length > 0 ? O + w : "";
}, Ka = Qw, Rf = Object.prototype.hasOwnProperty, Py = Array.isArray, mt = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: Ka.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictDepth: !1,
  strictNullHandling: !1,
  throwOnLimitExceeded: !1
}, tW = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Jw = function(e, t, r) {
  if (e && typeof e == "string" && t.comma && e.indexOf(",") > -1)
    return e.split(",");
  if (t.throwOnLimitExceeded && r >= t.arrayLimit)
    throw new RangeError("Array limit exceeded. Only " + t.arrayLimit + " element" + (t.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
  return e;
}, rW = "utf8=%26%2310003%3B", nW = "utf8=%E2%9C%93", aW = function(t, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
  i = i.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var s = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, l = i.split(
    r.delimiter,
    r.throwOnLimitExceeded ? s + 1 : s
  );
  if (r.throwOnLimitExceeded && l.length > s)
    throw new RangeError("Parameter limit exceeded. Only " + s + " parameter" + (s === 1 ? "" : "s") + " allowed.");
  var u = -1, f, p = r.charset;
  if (r.charsetSentinel)
    for (f = 0; f < l.length; ++f)
      l[f].indexOf("utf8=") === 0 && (l[f] === nW ? p = "utf-8" : l[f] === rW && (p = "iso-8859-1"), u = f, f = l.length);
  for (f = 0; f < l.length; ++f)
    if (f !== u) {
      var h = l[f], m = h.indexOf("]="), v = m === -1 ? h.indexOf("=") : m + 1, w, O;
      v === -1 ? (w = r.decoder(h, mt.decoder, p, "key"), O = r.strictNullHandling ? null : "") : (w = r.decoder(h.slice(0, v), mt.decoder, p, "key"), O = Ka.maybeMap(
        Jw(
          h.slice(v + 1),
          r,
          Py(n[w]) ? n[w].length : 0
        ),
        function(_) {
          return r.decoder(_, mt.decoder, p, "value");
        }
      )), O && r.interpretNumericEntities && p === "iso-8859-1" && (O = tW(String(O))), h.indexOf("[]=") > -1 && (O = Py(O) ? [O] : O);
      var T = Rf.call(n, w);
      T && r.duplicates === "combine" ? n[w] = Ka.combine(n[w], O) : (!T || r.duplicates === "last") && (n[w] = O);
    }
  return n;
}, iW = function(e, t, r, n) {
  var i = 0;
  if (e.length > 0 && e[e.length - 1] === "[]") {
    var s = e.slice(0, -1).join("");
    i = Array.isArray(t) && t[s] ? t[s].length : 0;
  }
  for (var l = n ? t : Jw(t, r, i), u = e.length - 1; u >= 0; --u) {
    var f, p = e[u];
    if (p === "[]" && r.parseArrays)
      f = r.allowEmptyArrays && (l === "" || r.strictNullHandling && l === null) ? [] : Ka.combine([], l);
    else {
      f = r.plainObjects ? { __proto__: null } : {};
      var h = p.charAt(0) === "[" && p.charAt(p.length - 1) === "]" ? p.slice(1, -1) : p, m = r.decodeDotInKeys ? h.replace(/%2E/g, ".") : h, v = parseInt(m, 10);
      !r.parseArrays && m === "" ? f = { 0: l } : !isNaN(v) && p !== m && String(v) === m && v >= 0 && r.parseArrays && v <= r.arrayLimit ? (f = [], f[v] = l) : m !== "__proto__" && (f[m] = l);
    }
    l = f;
  }
  return l;
}, oW = function(t, r, n, i) {
  if (t) {
    var s = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, l = /(\[[^[\]]*])/, u = /(\[[^[\]]*])/g, f = n.depth > 0 && l.exec(s), p = f ? s.slice(0, f.index) : s, h = [];
    if (p) {
      if (!n.plainObjects && Rf.call(Object.prototype, p) && !n.allowPrototypes)
        return;
      h.push(p);
    }
    for (var m = 0; n.depth > 0 && (f = u.exec(s)) !== null && m < n.depth; ) {
      if (m += 1, !n.plainObjects && Rf.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      h.push(f[1]);
    }
    if (f) {
      if (n.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + n.depth + " and strictDepth is true");
      h.push("[" + s.slice(f.index) + "]");
    }
    return iW(h, r, n, i);
  }
}, sW = function(t) {
  if (!t)
    return mt;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.decodeDotInKeys < "u" && typeof t.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.decoder !== null && typeof t.decoder < "u" && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  if (typeof t.throwOnLimitExceeded < "u" && typeof t.throwOnLimitExceeded != "boolean")
    throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
  var r = typeof t.charset > "u" ? mt.charset : t.charset, n = typeof t.duplicates > "u" ? mt.duplicates : t.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var i = typeof t.allowDots > "u" ? t.decodeDotInKeys === !0 ? !0 : mt.allowDots : !!t.allowDots;
  return {
    allowDots: i,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : mt.allowEmptyArrays,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : mt.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : mt.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : mt.arrayLimit,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : mt.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : mt.comma,
    decodeDotInKeys: typeof t.decodeDotInKeys == "boolean" ? t.decodeDotInKeys : mt.decodeDotInKeys,
    decoder: typeof t.decoder == "function" ? t.decoder : mt.decoder,
    delimiter: typeof t.delimiter == "string" || Ka.isRegExp(t.delimiter) ? t.delimiter : mt.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : mt.depth,
    duplicates: n,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : mt.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : mt.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : mt.plainObjects,
    strictDepth: typeof t.strictDepth == "boolean" ? !!t.strictDepth : mt.strictDepth,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : mt.strictNullHandling,
    throwOnLimitExceeded: typeof t.throwOnLimitExceeded == "boolean" ? t.throwOnLimitExceeded : !1
  };
}, lW = function(e, t) {
  var r = sW(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? { __proto__: null } : {};
  for (var n = typeof e == "string" ? aW(e, r) : e, i = r.plainObjects ? { __proto__: null } : {}, s = Object.keys(n), l = 0; l < s.length; ++l) {
    var u = s[l], f = oW(u, n[u], r, typeof e == "string");
    i = Ka.merge(i, f, r);
  }
  return r.allowSparse === !0 ? i : Ka.compact(i);
}, uW = eW, cW = lW, dW = bp, fW = {
  formats: dW,
  parse: cW,
  stringify: uW
};
const ao = /* @__PURE__ */ Ct(fW);
var pW = ei, hW = function() {
  try {
    var e = pW(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Zw = hW, Ay = Zw;
function gW(e, t, r) {
  t == "__proto__" && Ay ? Ay(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var eS = gW, mW = eS, vW = dp, yW = Object.prototype, bW = yW.hasOwnProperty;
function EW(e, t, r) {
  var n = e[t];
  (!(bW.call(e, t) && vW(n, r)) || r === void 0 && !(t in e)) && mW(e, t, r);
}
var Ep = EW, wW = Ep, SW = eS;
function _W(e, t, r, n) {
  var i = !r;
  r || (r = {});
  for (var s = -1, l = t.length; ++s < l; ) {
    var u = t[s], f = n ? n(r[u], e[u], u, r, e) : void 0;
    f === void 0 && (f = e[u]), i ? SW(r, u, f) : wW(r, u, f);
  }
  return r;
}
var Os = _W;
function OW(e) {
  return e;
}
var tS = OW;
function TW(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var xW = TW, PW = xW, Cy = Math.max;
function AW(e, t, r) {
  return t = Cy(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, s = Cy(n.length - t, 0), l = Array(s); ++i < s; )
      l[i] = n[t + i];
    i = -1;
    for (var u = Array(t + 1); ++i < t; )
      u[i] = n[i];
    return u[t] = r(l), PW(e, this, u);
  };
}
var rS = AW;
function CW(e) {
  return function() {
    return e;
  };
}
var $W = CW, RW = $W, $y = Zw, NW = tS, IW = $y ? function(e, t) {
  return $y(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: RW(t),
    writable: !0
  });
} : NW, kW = IW, DW = 800, MW = 16, LW = Date.now;
function FW(e) {
  var t = 0, r = 0;
  return function() {
    var n = LW(), i = MW - (n - r);
    if (r = n, i > 0) {
      if (++t >= DW)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var BW = FW, UW = kW, zW = BW, qW = zW(UW), nS = qW, jW = tS, HW = rS, WW = nS;
function VW(e, t) {
  return WW(HW(e, t, jW), e + "");
}
var GW = VW, QW = dp, KW = vu, YW = Ru, XW = la;
function JW(e, t, r) {
  if (!XW(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? KW(r) && YW(t, r.length) : n == "string" && t in r) ? QW(r[t], e) : !1;
}
var ZW = JW, eV = GW, tV = ZW;
function rV(e) {
  return eV(function(t, r) {
    var n = -1, i = r.length, s = i > 1 ? r[i - 1] : void 0, l = i > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (i--, s) : void 0, l && tV(r[0], r[1], l) && (s = i < 3 ? void 0 : s, i = 1), t = Object(t); ++n < i; ) {
      var u = r[n];
      u && e(t, u, n, s);
    }
    return t;
  });
}
var nV = rV;
function aV(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var iV = aV, oV = iV, sV = mu, lV = Br, uV = tp, cV = Ru, dV = JE, fV = Object.prototype, pV = fV.hasOwnProperty;
function hV(e, t) {
  var r = lV(e), n = !r && sV(e), i = !r && !n && uV(e), s = !r && !n && !i && dV(e), l = r || n || i || s, u = l ? oV(e.length, String) : [], f = u.length;
  for (var p in e)
    (t || pV.call(e, p)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    cV(p, f))) && u.push(p);
  return u;
}
var aS = hV;
function gV(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var mV = gV, vV = la, yV = hu, bV = mV, EV = Object.prototype, wV = EV.hasOwnProperty;
function SV(e) {
  if (!vV(e))
    return bV(e);
  var t = yV(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !wV.call(e, n)) || r.push(n);
  return r;
}
var _V = SV, OV = aS, TV = _V, xV = vu;
function PV(e) {
  return xV(e) ? OV(e, !0) : TV(e);
}
var Mu = PV, AV = Os, CV = nV, $V = Mu, RV = CV(function(e, t) {
  AV(t, $V(t), e);
}), NV = RV, IV = NV;
const Yl = /* @__PURE__ */ Ct(IV);
function kV(e) {
  return e && e.length ? e[0] : void 0;
}
var DV = kV;
const MV = /* @__PURE__ */ Ct(DV);
var LV = Ep, FV = $u, BV = Ru, Ry = la, UV = pp;
function zV(e, t, r, n) {
  if (!Ry(e))
    return e;
  t = FV(t, e);
  for (var i = -1, s = t.length, l = s - 1, u = e; u != null && ++i < s; ) {
    var f = UV(t[i]), p = r;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return e;
    if (i != l) {
      var h = u[f];
      p = n ? n(h, f, u) : void 0, p === void 0 && (p = Ry(h) ? h : BV(t[i + 1]) ? [] : {});
    }
    LV(u, f, p), u = u[f];
  }
  return e;
}
var qV = zV, jV = xw, HV = qV, WV = $u;
function VV(e, t, r) {
  for (var n = -1, i = t.length, s = {}; ++n < i; ) {
    var l = t[n], u = jV(e, l);
    r(u, l) && HV(s, WV(l, e), u);
  }
  return s;
}
var GV = VV, QV = GV, KV = Pw;
function YV(e, t) {
  return QV(e, t, function(r, n) {
    return KV(e, n);
  });
}
var XV = YV;
function JV(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var wp = JV, Ny = bs, ZV = mu, e8 = Br, Iy = Ny ? Ny.isConcatSpreadable : void 0;
function t8(e) {
  return e8(e) || ZV(e) || !!(Iy && e && e[Iy]);
}
var r8 = t8, n8 = wp, a8 = r8;
function iS(e, t, r, n, i) {
  var s = -1, l = e.length;
  for (r || (r = a8), i || (i = []); ++s < l; ) {
    var u = e[s];
    t > 0 && r(u) ? t > 1 ? iS(u, t - 1, r, n, i) : n8(i, u) : n || (i[i.length] = u);
  }
  return i;
}
var i8 = iS, o8 = i8;
function s8(e) {
  var t = e == null ? 0 : e.length;
  return t ? o8(e, 1) : [];
}
var l8 = s8, u8 = l8, c8 = rS, d8 = nS;
function f8(e) {
  return d8(c8(e, void 0, u8), e + "");
}
var p8 = f8, h8 = XV, g8 = p8, m8 = g8(function(e, t) {
  return e == null ? {} : h8(e, t);
}), v8 = m8;
const y8 = /* @__PURE__ */ Ct(v8);
var b8 = Au;
function E8() {
  this.__data__ = new b8(), this.size = 0;
}
var w8 = E8;
function S8(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var _8 = S8;
function O8(e) {
  return this.__data__.get(e);
}
var T8 = O8;
function x8(e) {
  return this.__data__.has(e);
}
var P8 = x8, A8 = Au, C8 = Zf, $8 = _w, R8 = 200;
function N8(e, t) {
  var r = this.__data__;
  if (r instanceof A8) {
    var n = r.__data__;
    if (!C8 || n.length < R8 - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new $8(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var I8 = N8, k8 = Au, D8 = w8, M8 = _8, L8 = T8, F8 = P8, B8 = I8;
function io(e) {
  var t = this.__data__ = new k8(e);
  this.size = t.size;
}
io.prototype.clear = D8;
io.prototype.delete = M8;
io.prototype.get = L8;
io.prototype.has = F8;
io.prototype.set = B8;
var U8 = io;
function z8(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var q8 = z8, j8 = aS, H8 = HE, W8 = vu;
function V8(e) {
  return W8(e) ? j8(e) : H8(e);
}
var Sp = V8, G8 = Os, Q8 = Sp;
function K8(e, t) {
  return e && G8(t, Q8(t), e);
}
var Y8 = K8, X8 = Os, J8 = Mu;
function Z8(e, t) {
  return e && X8(t, J8(t), e);
}
var eG = Z8, Xl = { exports: {} };
Xl.exports;
(function(e, t) {
  var r = tn, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, l = s ? r.Buffer : void 0, u = l ? l.allocUnsafe : void 0;
  function f(p, h) {
    if (h)
      return p.slice();
    var m = p.length, v = u ? u(m) : new p.constructor(m);
    return p.copy(v), v;
  }
  e.exports = f;
})(Xl, Xl.exports);
var tG = Xl.exports;
function rG(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var nG = rG;
function aG(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var l = e[r];
    t(l, r, e) && (s[i++] = l);
  }
  return s;
}
var iG = aG;
function oG() {
  return [];
}
var oS = oG, sG = iG, lG = oS, uG = Object.prototype, cG = uG.propertyIsEnumerable, ky = Object.getOwnPropertySymbols, dG = ky ? function(e) {
  return e == null ? [] : (e = Object(e), sG(ky(e), function(t) {
    return cG.call(e, t);
  }));
} : lG, _p = dG, fG = Os, pG = _p;
function hG(e, t) {
  return fG(e, pG(e), t);
}
var gG = hG, mG = jE, vG = mG(Object.getPrototypeOf, Object), sS = vG, yG = wp, bG = sS, EG = _p, wG = oS, SG = Object.getOwnPropertySymbols, _G = SG ? function(e) {
  for (var t = []; e; )
    yG(t, EG(e)), e = bG(e);
  return t;
} : wG, lS = _G, OG = Os, TG = lS;
function xG(e, t) {
  return OG(e, TG(e), t);
}
var PG = xG, AG = wp, CG = Br;
function $G(e, t, r) {
  var n = t(e);
  return CG(e) ? n : AG(n, r(e));
}
var uS = $G, RG = uS, NG = _p, IG = Sp;
function kG(e) {
  return RG(e, IG, NG);
}
var DG = kG, MG = uS, LG = lS, FG = Mu;
function BG(e) {
  return MG(e, FG, LG);
}
var UG = BG, zG = Object.prototype, qG = zG.hasOwnProperty;
function jG(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && qG.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var HG = jG, WG = tn, VG = WG.Uint8Array, GG = VG, Dy = GG;
function QG(e) {
  var t = new e.constructor(e.byteLength);
  return new Dy(t).set(new Dy(e)), t;
}
var Op = QG, KG = Op;
function YG(e, t) {
  var r = t ? KG(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var XG = YG, JG = /\w*$/;
function ZG(e) {
  var t = new e.constructor(e.source, JG.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var e6 = ZG, My = bs, Ly = My ? My.prototype : void 0, Fy = Ly ? Ly.valueOf : void 0;
function t6(e) {
  return Fy ? Object(Fy.call(e)) : {};
}
var r6 = t6, n6 = Op;
function a6(e, t) {
  var r = t ? n6(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var i6 = a6, o6 = Op, s6 = XG, l6 = e6, u6 = r6, c6 = i6, d6 = "[object Boolean]", f6 = "[object Date]", p6 = "[object Map]", h6 = "[object Number]", g6 = "[object RegExp]", m6 = "[object Set]", v6 = "[object String]", y6 = "[object Symbol]", b6 = "[object ArrayBuffer]", E6 = "[object DataView]", w6 = "[object Float32Array]", S6 = "[object Float64Array]", _6 = "[object Int8Array]", O6 = "[object Int16Array]", T6 = "[object Int32Array]", x6 = "[object Uint8Array]", P6 = "[object Uint8ClampedArray]", A6 = "[object Uint16Array]", C6 = "[object Uint32Array]";
function $6(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case b6:
      return o6(e);
    case d6:
    case f6:
      return new n(+e);
    case E6:
      return s6(e, r);
    case w6:
    case S6:
    case _6:
    case O6:
    case T6:
    case x6:
    case P6:
    case A6:
    case C6:
      return c6(e, r);
    case p6:
      return new n();
    case h6:
    case v6:
      return new n(e);
    case g6:
      return l6(e);
    case m6:
      return new n();
    case y6:
      return u6(e);
  }
}
var R6 = $6, N6 = la, By = Object.create, I6 = function() {
  function e() {
  }
  return function(t) {
    if (!N6(t))
      return {};
    if (By)
      return By(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), k6 = I6, D6 = k6, M6 = sS, L6 = hu;
function F6(e) {
  return typeof e.constructor == "function" && !L6(e) ? D6(M6(e)) : {};
}
var B6 = F6, U6 = gu, z6 = Mn, q6 = "[object Map]";
function j6(e) {
  return z6(e) && U6(e) == q6;
}
var H6 = j6, W6 = H6, V6 = rp, Uy = np, zy = Uy && Uy.isMap, G6 = zy ? V6(zy) : W6, Q6 = G6, K6 = gu, Y6 = Mn, X6 = "[object Set]";
function J6(e) {
  return Y6(e) && K6(e) == X6;
}
var Z6 = J6, eQ = Z6, tQ = rp, qy = np, jy = qy && qy.isSet, rQ = jy ? tQ(jy) : eQ, nQ = rQ, aQ = U8, iQ = q8, oQ = Ep, sQ = Y8, lQ = eG, uQ = tG, cQ = nG, dQ = gG, fQ = PG, pQ = DG, hQ = UG, gQ = gu, mQ = HG, vQ = R6, yQ = B6, bQ = Br, EQ = tp, wQ = Q6, SQ = la, _Q = nQ, OQ = Sp, TQ = Mu, xQ = 1, PQ = 2, AQ = 4, cS = "[object Arguments]", CQ = "[object Array]", $Q = "[object Boolean]", RQ = "[object Date]", NQ = "[object Error]", dS = "[object Function]", IQ = "[object GeneratorFunction]", kQ = "[object Map]", DQ = "[object Number]", fS = "[object Object]", MQ = "[object RegExp]", LQ = "[object Set]", FQ = "[object String]", BQ = "[object Symbol]", UQ = "[object WeakMap]", zQ = "[object ArrayBuffer]", qQ = "[object DataView]", jQ = "[object Float32Array]", HQ = "[object Float64Array]", WQ = "[object Int8Array]", VQ = "[object Int16Array]", GQ = "[object Int32Array]", QQ = "[object Uint8Array]", KQ = "[object Uint8ClampedArray]", YQ = "[object Uint16Array]", XQ = "[object Uint32Array]", it = {};
it[cS] = it[CQ] = it[zQ] = it[qQ] = it[$Q] = it[RQ] = it[jQ] = it[HQ] = it[WQ] = it[VQ] = it[GQ] = it[kQ] = it[DQ] = it[fS] = it[MQ] = it[LQ] = it[FQ] = it[BQ] = it[QQ] = it[KQ] = it[YQ] = it[XQ] = !0;
it[NQ] = it[dS] = it[UQ] = !1;
function Il(e, t, r, n, i, s) {
  var l, u = t & xQ, f = t & PQ, p = t & AQ;
  if (r && (l = i ? r(e, n, i, s) : r(e)), l !== void 0)
    return l;
  if (!SQ(e))
    return e;
  var h = bQ(e);
  if (h) {
    if (l = mQ(e), !u)
      return cQ(e, l);
  } else {
    var m = gQ(e), v = m == dS || m == IQ;
    if (EQ(e))
      return uQ(e, u);
    if (m == fS || m == cS || v && !i) {
      if (l = f || v ? {} : yQ(e), !u)
        return f ? fQ(e, lQ(l, e)) : dQ(e, sQ(l, e));
    } else {
      if (!it[m])
        return i ? e : {};
      l = vQ(e, m, u);
    }
  }
  s || (s = new aQ());
  var w = s.get(e);
  if (w)
    return w;
  s.set(e, l), _Q(e) ? e.forEach(function(_) {
    l.add(Il(_, t, r, _, e, s));
  }) : wQ(e) && e.forEach(function(_, A) {
    l.set(A, Il(_, t, r, A, e, s));
  });
  var O = p ? f ? hQ : pQ : f ? TQ : OQ, T = h ? void 0 : O(e);
  return iQ(T || e, function(_, A) {
    T && (A = _, _ = e[A]), oQ(l, A, Il(_, t, r, A, e, s));
  }), l;
}
var JQ = Il, ZQ = JQ, e5 = 1, t5 = 4;
function r5(e) {
  return ZQ(e, e5 | t5);
}
var n5 = r5;
const Pi = /* @__PURE__ */ Ct(n5);
var a5 = sa, i5 = Mn, o5 = "[object Boolean]";
function s5(e) {
  return e === !0 || e === !1 || i5(e) && a5(e) == o5;
}
var l5 = s5;
const u5 = /* @__PURE__ */ Ct(l5);
var c5 = sa, d5 = Br, f5 = Mn, p5 = "[object String]";
function h5(e) {
  return typeof e == "string" || !d5(e) && f5(e) && c5(e) == p5;
}
var g5 = h5;
const m5 = /* @__PURE__ */ Ct(g5);
var v5 = sa, y5 = Mn, b5 = "[object Number]";
function E5(e) {
  return typeof e == "number" || y5(e) && v5(e) == b5;
}
var w5 = E5;
const S5 = /* @__PURE__ */ Ct(w5);
var Tp = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (Tp.displayName = "ReactRedux");
function _5(e) {
  e();
}
var pS = _5, O5 = function(t) {
  return pS = t;
}, T5 = function() {
  return pS;
};
function x5() {
  var e = T5(), t = null, r = null;
  return {
    clear: function() {
      t = null, r = null;
    },
    notify: function() {
      e(function() {
        for (var i = t; i; )
          i.callback(), i = i.next;
      });
    },
    get: function() {
      for (var i = [], s = t; s; )
        i.push(s), s = s.next;
      return i;
    },
    subscribe: function(i) {
      var s = !0, l = r = {
        callback: i,
        next: null,
        prev: r
      };
      return l.prev ? l.prev.next = l : t = l, function() {
        !s || t === null || (s = !1, l.next ? l.next.prev = l.prev : r = l.prev, l.prev ? l.prev.next = l.next : t = l.next);
      };
    }
  };
}
var Hy = {
  notify: function() {
  },
  get: function() {
    return [];
  }
};
function hS(e, t) {
  var r, n = Hy;
  function i(m) {
    return f(), n.subscribe(m);
  }
  function s() {
    n.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return !!r;
  }
  function f() {
    r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = x5());
  }
  function p() {
    r && (r(), r = void 0, n.clear(), n = Hy);
  }
  var h = {
    addNestedSub: i,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: function() {
      return n;
    }
  };
  return h;
}
var gS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? EC : Mf;
function mS(e) {
  var t = e.store, r = e.context, n = e.children, i = Qr(function() {
    var u = hS(t);
    return {
      store: t,
      subscription: u
    };
  }, [t]), s = Qr(function() {
    return t.getState();
  }, [t]);
  gS(function() {
    var u = i.subscription;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== t.getState() && u.notifyNestedSubs(), function() {
      u.tryUnsubscribe(), u.onStateChange = null;
    };
  }, [i, s]);
  var l = r || Tp;
  return /* @__PURE__ */ b.createElement(l.Provider, {
    value: i
  }, n);
}
process.env.NODE_ENV !== "production" && (mS.propTypes = {
  store: d.shape({
    subscribe: d.func.isRequired,
    dispatch: d.func.isRequired,
    getState: d.func.isRequired
  }),
  context: d.object,
  children: d.any
});
var xp = eu(), P5 = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, A5 = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, C5 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, vS = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Pp = {};
Pp[xp.ForwardRef] = C5;
Pp[xp.Memo] = vS;
function Wy(e) {
  return xp.isMemo(e) ? vS : Pp[e.$$typeof] || P5;
}
var $5 = Object.defineProperty, R5 = Object.getOwnPropertyNames, Vy = Object.getOwnPropertySymbols, N5 = Object.getOwnPropertyDescriptor, I5 = Object.getPrototypeOf, Gy = Object.prototype;
function yS(e, t, r) {
  if (typeof t != "string") {
    if (Gy) {
      var n = I5(t);
      n && n !== Gy && yS(e, n, r);
    }
    var i = R5(t);
    Vy && (i = i.concat(Vy(t)));
    for (var s = Wy(e), l = Wy(t), u = 0; u < i.length; ++u) {
      var f = i[u];
      if (!A5[f] && !(r && r[f]) && !(l && l[f]) && !(s && s[f])) {
        var p = N5(t, f);
        try {
          $5(e, f, p);
        } catch {
        }
      }
    }
  }
  return e;
}
var k5 = yS;
const Qy = /* @__PURE__ */ Ct(k5);
var Nf = { exports: {} }, et = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ky;
function D5() {
  if (Ky)
    return et;
  Ky = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, s = 60109, l = 60110, u = 60112, f = 60113, p = 60120, h = 60115, m = 60116, v = 60121, w = 60122, O = 60117, T = 60129, _ = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var A = Symbol.for;
    e = A("react.element"), t = A("react.portal"), r = A("react.fragment"), n = A("react.strict_mode"), i = A("react.profiler"), s = A("react.provider"), l = A("react.context"), u = A("react.forward_ref"), f = A("react.suspense"), p = A("react.suspense_list"), h = A("react.memo"), m = A("react.lazy"), v = A("react.block"), w = A("react.server.block"), O = A("react.fundamental"), T = A("react.debug_trace_mode"), _ = A("react.legacy_hidden");
  }
  function M(W) {
    if (typeof W == "object" && W !== null) {
      var se = W.$$typeof;
      switch (se) {
        case e:
          switch (W = W.type, W) {
            case r:
            case i:
            case n:
            case f:
            case p:
              return W;
            default:
              switch (W = W && W.$$typeof, W) {
                case l:
                case u:
                case m:
                case h:
                case s:
                  return W;
                default:
                  return se;
              }
          }
        case t:
          return se;
      }
    }
  }
  var k = s, U = e, N = u, F = r, x = m, $ = h, I = t, B = i, V = n, X = f;
  return et.ContextConsumer = l, et.ContextProvider = k, et.Element = U, et.ForwardRef = N, et.Fragment = F, et.Lazy = x, et.Memo = $, et.Portal = I, et.Profiler = B, et.StrictMode = V, et.Suspense = X, et.isAsyncMode = function() {
    return !1;
  }, et.isConcurrentMode = function() {
    return !1;
  }, et.isContextConsumer = function(W) {
    return M(W) === l;
  }, et.isContextProvider = function(W) {
    return M(W) === s;
  }, et.isElement = function(W) {
    return typeof W == "object" && W !== null && W.$$typeof === e;
  }, et.isForwardRef = function(W) {
    return M(W) === u;
  }, et.isFragment = function(W) {
    return M(W) === r;
  }, et.isLazy = function(W) {
    return M(W) === m;
  }, et.isMemo = function(W) {
    return M(W) === h;
  }, et.isPortal = function(W) {
    return M(W) === t;
  }, et.isProfiler = function(W) {
    return M(W) === i;
  }, et.isStrictMode = function(W) {
    return M(W) === n;
  }, et.isSuspense = function(W) {
    return M(W) === f;
  }, et.isValidElementType = function(W) {
    return typeof W == "string" || typeof W == "function" || W === r || W === i || W === T || W === n || W === f || W === p || W === _ || typeof W == "object" && W !== null && (W.$$typeof === m || W.$$typeof === h || W.$$typeof === s || W.$$typeof === l || W.$$typeof === u || W.$$typeof === O || W.$$typeof === v || W[0] === w);
  }, et.typeOf = M, et;
}
var tt = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yy;
function M5() {
  return Yy || (Yy = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, s = 60109, l = 60110, u = 60112, f = 60113, p = 60120, h = 60115, m = 60116, v = 60121, w = 60122, O = 60117, T = 60129, _ = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var A = Symbol.for;
      e = A("react.element"), t = A("react.portal"), r = A("react.fragment"), n = A("react.strict_mode"), i = A("react.profiler"), s = A("react.provider"), l = A("react.context"), u = A("react.forward_ref"), f = A("react.suspense"), p = A("react.suspense_list"), h = A("react.memo"), m = A("react.lazy"), v = A("react.block"), w = A("react.server.block"), O = A("react.fundamental"), A("react.scope"), A("react.opaque.id"), T = A("react.debug_trace_mode"), A("react.offscreen"), _ = A("react.legacy_hidden");
    }
    var M = !1;
    function k(re) {
      return !!(typeof re == "string" || typeof re == "function" || re === r || re === i || re === T || re === n || re === f || re === p || re === _ || M || typeof re == "object" && re !== null && (re.$$typeof === m || re.$$typeof === h || re.$$typeof === s || re.$$typeof === l || re.$$typeof === u || re.$$typeof === O || re.$$typeof === v || re[0] === w));
    }
    function U(re) {
      if (typeof re == "object" && re !== null) {
        var ee = re.$$typeof;
        switch (ee) {
          case e:
            var ht = re.type;
            switch (ht) {
              case r:
              case i:
              case n:
              case f:
              case p:
                return ht;
              default:
                var ne = ht && ht.$$typeof;
                switch (ne) {
                  case l:
                  case u:
                  case m:
                  case h:
                  case s:
                    return ne;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var N = l, F = s, x = e, $ = u, I = r, B = m, V = h, X = t, W = i, se = n, _e = f, Oe = !1, Te = !1;
    function ze(re) {
      return Oe || (Oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Ze(re) {
      return Te || (Te = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(re) {
      return U(re) === l;
    }
    function J(re) {
      return U(re) === s;
    }
    function we(re) {
      return typeof re == "object" && re !== null && re.$$typeof === e;
    }
    function ge(re) {
      return U(re) === u;
    }
    function fe(re) {
      return U(re) === r;
    }
    function Se(re) {
      return U(re) === m;
    }
    function he(re) {
      return U(re) === h;
    }
    function xe(re) {
      return U(re) === t;
    }
    function Pe(re) {
      return U(re) === i;
    }
    function Ae(re) {
      return U(re) === n;
    }
    function Ne(re) {
      return U(re) === f;
    }
    tt.ContextConsumer = N, tt.ContextProvider = F, tt.Element = x, tt.ForwardRef = $, tt.Fragment = I, tt.Lazy = B, tt.Memo = V, tt.Portal = X, tt.Profiler = W, tt.StrictMode = se, tt.Suspense = _e, tt.isAsyncMode = ze, tt.isConcurrentMode = Ze, tt.isContextConsumer = K, tt.isContextProvider = J, tt.isElement = we, tt.isForwardRef = ge, tt.isFragment = fe, tt.isLazy = Se, tt.isMemo = he, tt.isPortal = xe, tt.isProfiler = Pe, tt.isStrictMode = Ae, tt.isSuspense = Ne, tt.isValidElementType = k, tt.typeOf = U;
  }()), tt;
}
process.env.NODE_ENV === "production" ? Nf.exports = D5() : Nf.exports = M5();
var Xy = Nf.exports, L5 = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"], F5 = ["reactReduxForwardedRef"], B5 = [], U5 = [null, null], z5 = function(t) {
  try {
    return JSON.stringify(t);
  } catch {
    return String(t);
  }
};
function q5(e, t) {
  var r = e[1];
  return [t.payload, r + 1];
}
function Jy(e, t, r) {
  gS(function() {
    return e.apply(void 0, t);
  }, r);
}
function j5(e, t, r, n, i, s, l) {
  e.current = n, t.current = i, r.current = !1, s.current && (s.current = null, l());
}
function H5(e, t, r, n, i, s, l, u, f, p) {
  if (e) {
    var h = !1, m = null, v = function() {
      if (!h) {
        var T = t.getState(), _, A;
        try {
          _ = n(T, i.current);
        } catch (M) {
          A = M, m = M;
        }
        A || (m = null), _ === s.current ? l.current || f() : (s.current = _, u.current = _, l.current = !0, p({
          type: "STORE_UPDATED",
          payload: {
            error: A
          }
        }));
      }
    };
    r.onStateChange = v, r.trySubscribe(), v();
    var w = function() {
      if (h = !0, r.tryUnsubscribe(), r.onStateChange = null, m)
        throw m;
    };
    return w;
  }
}
var W5 = function() {
  return [null, 0];
};
function V5(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.getDisplayName, i = n === void 0 ? function(F) {
    return "ConnectAdvanced(" + F + ")";
  } : n, s = r.methodName, l = s === void 0 ? "connectAdvanced" : s, u = r.renderCountProp, f = u === void 0 ? void 0 : u, p = r.shouldHandleStateChanges, h = p === void 0 ? !0 : p, m = r.storeKey, v = m === void 0 ? "store" : m, w = r.withRef, O = w === void 0 ? !1 : w, T = r.forwardRef, _ = T === void 0 ? !1 : T, A = r.context, M = A === void 0 ? Tp : A, k = Da(r, L5);
  if (process.env.NODE_ENV !== "production") {
    if (f !== void 0)
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    if (O)
      throw new Error("withRef is removed. To access the wrapped instance, use a ref on the connected component");
    var U = "To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";
    if (v !== "store")
      throw new Error("storeKey has been removed and does not do anything. " + U);
  }
  var N = M;
  return function(x) {
    if (process.env.NODE_ENV !== "production" && !Xy.isValidElementType(x))
      throw new Error("You must pass a component to the function returned by " + (l + ". Instead received " + z5(x)));
    var $ = x.displayName || x.name || "Component", I = i($), B = z({}, k, {
      getDisplayName: i,
      methodName: l,
      renderCountProp: f,
      shouldHandleStateChanges: h,
      storeKey: v,
      displayName: I,
      wrappedComponentName: $,
      WrappedComponent: x
    }), V = k.pure;
    function X(Te) {
      return e(Te.dispatch, B);
    }
    var W = V ? Qr : function(Te) {
      return Te();
    };
    function se(Te) {
      var ze = Qr(function() {
        var qr = Te.reactReduxForwardedRef, oo = Da(Te, F5);
        return [Te.context, qr, oo];
      }, [Te]), Ze = ze[0], K = ze[1], J = ze[2], we = Qr(function() {
        return Ze && Ze.Consumer && Xy.isContextConsumer(/* @__PURE__ */ b.createElement(Ze.Consumer, null)) ? Ze : N;
      }, [Ze, N]), ge = ct(we), fe = !!Te.store && !!Te.store.getState && !!Te.store.dispatch, Se = !!ge && !!ge.store;
      if (process.env.NODE_ENV !== "production" && !fe && !Se)
        throw new Error('Could not find "store" in the context of ' + ('"' + I + '". Either wrap the root component in a <Provider>, ') + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + I + " in connect options."));
      var he = fe ? Te.store : ge.store, xe = Qr(function() {
        return X(he);
      }, [he]), Pe = Qr(function() {
        if (!h)
          return U5;
        var qr = hS(he, fe ? null : ge.subscription), oo = qr.notifyNestedSubs.bind(qr);
        return [qr, oo];
      }, [he, fe, ge]), Ae = Pe[0], Ne = Pe[1], re = Qr(function() {
        return fe ? ge : z({}, ge, {
          subscription: Ae
        });
      }, [fe, ge, Ae]), ee = wC(q5, B5, W5), ht = ee[0], ne = ht[0], Yt = ee[1];
      if (ne && ne.error)
        throw ne.error;
      var nn = gl(), Bt = gl(J), ca = gl(), xs = gl(!1), an = W(function() {
        return ca.current && J === Bt.current ? ca.current : xe(he.getState(), J);
      }, [he, ne, J]);
      Jy(j5, [Bt, nn, xs, J, an, ca, Ne]), Jy(H5, [h, he, Ae, xe, Bt, nn, xs, ca, Ne, Yt], [he, Ae, xe]);
      var Ht = Qr(function() {
        return /* @__PURE__ */ b.createElement(x, z({}, an, {
          ref: K
        }));
      }, [K, x, an]), da = Qr(function() {
        return h ? /* @__PURE__ */ b.createElement(we.Provider, {
          value: re
        }, Ht) : Ht;
      }, [we, Ht, re]);
      return da;
    }
    var _e = V ? b.memo(se) : se;
    if (_e.WrappedComponent = x, _e.displayName = se.displayName = I, _) {
      var Oe = b.forwardRef(function(ze, Ze) {
        return /* @__PURE__ */ b.createElement(_e, z({}, ze, {
          reactReduxForwardedRef: Ze
        }));
      });
      return Oe.displayName = I, Oe.WrappedComponent = x, Qy(Oe, x);
    }
    return Qy(_e, x);
  };
}
function Zy(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Wd(e, t) {
  if (Zy(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (var i = 0; i < r.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !Zy(e[r[i]], t[r[i]]))
      return !1;
  return !0;
}
function G5(e, t) {
  var r = {}, n = function(l) {
    var u = e[l];
    typeof u == "function" && (r[l] = function() {
      return t(u.apply(void 0, arguments));
    });
  };
  for (var i in e)
    n(i);
  return r;
}
function Q5(e) {
  if (typeof e != "object" || e === null)
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null)
    return !0;
  for (var r = t; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function bS(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function ES(e, t, r) {
  Q5(e) || bS(r + "() in " + t + " must return a plain object. Instead received " + e + ".");
}
function Ap(e) {
  return function(r, n) {
    var i = e(r, n);
    function s() {
      return i;
    }
    return s.dependsOnOwnProps = !1, s;
  };
}
function eb(e) {
  return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0 ? !!e.dependsOnOwnProps : e.length !== 1;
}
function wS(e, t) {
  return function(n, i) {
    var s = i.displayName, l = function(f, p) {
      return l.dependsOnOwnProps ? l.mapToProps(f, p) : l.mapToProps(f);
    };
    return l.dependsOnOwnProps = !0, l.mapToProps = function(f, p) {
      l.mapToProps = e, l.dependsOnOwnProps = eb(e);
      var h = l(f, p);
      return typeof h == "function" && (l.mapToProps = h, l.dependsOnOwnProps = eb(h), h = l(f, p)), process.env.NODE_ENV !== "production" && ES(h, s, t), h;
    }, l;
  };
}
function K5(e) {
  return typeof e == "function" ? wS(e, "mapDispatchToProps") : void 0;
}
function Y5(e) {
  return e ? void 0 : Ap(function(t) {
    return {
      dispatch: t
    };
  });
}
function X5(e) {
  return e && typeof e == "object" ? Ap(function(t) {
    return G5(e, t);
  }) : void 0;
}
const J5 = [K5, Y5, X5];
function Z5(e) {
  return typeof e == "function" ? wS(e, "mapStateToProps") : void 0;
}
function eK(e) {
  return e ? void 0 : Ap(function() {
    return {};
  });
}
const tK = [Z5, eK];
function rK(e, t, r) {
  return z({}, r, e, t);
}
function nK(e) {
  return function(r, n) {
    var i = n.displayName, s = n.pure, l = n.areMergedPropsEqual, u = !1, f;
    return function(h, m, v) {
      var w = e(h, m, v);
      return u ? (!s || !l(w, f)) && (f = w) : (u = !0, f = w, process.env.NODE_ENV !== "production" && ES(f, i, "mergeProps")), f;
    };
  };
}
function aK(e) {
  return typeof e == "function" ? nK(e) : void 0;
}
function iK(e) {
  return e ? void 0 : function() {
    return rK;
  };
}
const oK = [aK, iK];
function Vd(e, t, r) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || bS("The selector for " + t + " of " + r + " did not specify a value for dependsOnOwnProps."));
  else
    throw new Error("Unexpected value for " + t + " in " + r + ".");
}
function sK(e, t, r, n) {
  Vd(e, "mapStateToProps", n), Vd(t, "mapDispatchToProps", n), Vd(r, "mergeProps", n);
}
var lK = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function uK(e, t, r, n) {
  return function(s, l) {
    return r(e(s, l), t(n, l), l);
  };
}
function cK(e, t, r, n, i) {
  var s = i.areStatesEqual, l = i.areOwnPropsEqual, u = i.areStatePropsEqual, f = !1, p, h, m, v, w;
  function O(k, U) {
    return p = k, h = U, m = e(p, h), v = t(n, h), w = r(m, v, h), f = !0, w;
  }
  function T() {
    return m = e(p, h), t.dependsOnOwnProps && (v = t(n, h)), w = r(m, v, h), w;
  }
  function _() {
    return e.dependsOnOwnProps && (m = e(p, h)), t.dependsOnOwnProps && (v = t(n, h)), w = r(m, v, h), w;
  }
  function A() {
    var k = e(p, h), U = !u(k, m);
    return m = k, U && (w = r(m, v, h)), w;
  }
  function M(k, U) {
    var N = !l(U, h), F = !s(k, p, U, h);
    return p = k, h = U, N && F ? T() : N ? _() : F ? A() : w;
  }
  return function(U, N) {
    return f ? M(U, N) : O(U, N);
  };
}
function dK(e, t) {
  var r = t.initMapStateToProps, n = t.initMapDispatchToProps, i = t.initMergeProps, s = Da(t, lK), l = r(e, s), u = n(e, s), f = i(e, s);
  process.env.NODE_ENV !== "production" && sK(l, u, f, s.displayName);
  var p = s.pure ? cK : uK;
  return p(l, u, f, e, s);
}
var fK = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];
function Gd(e, t, r) {
  for (var n = t.length - 1; n >= 0; n--) {
    var i = t[n](e);
    if (i)
      return i;
  }
  return function(s, l) {
    throw new Error("Invalid value of type " + typeof e + " for " + r + " argument when connecting component " + l.wrappedComponentName + ".");
  };
}
function pK(e, t) {
  return e === t;
}
function hK(e) {
  var t = e === void 0 ? {} : e, r = t.connectHOC, n = r === void 0 ? V5 : r, i = t.mapStateToPropsFactories, s = i === void 0 ? tK : i, l = t.mapDispatchToPropsFactories, u = l === void 0 ? J5 : l, f = t.mergePropsFactories, p = f === void 0 ? oK : f, h = t.selectorFactory, m = h === void 0 ? dK : h;
  return function(w, O, T, _) {
    _ === void 0 && (_ = {});
    var A = _, M = A.pure, k = M === void 0 ? !0 : M, U = A.areStatesEqual, N = U === void 0 ? pK : U, F = A.areOwnPropsEqual, x = F === void 0 ? Wd : F, $ = A.areStatePropsEqual, I = $ === void 0 ? Wd : $, B = A.areMergedPropsEqual, V = B === void 0 ? Wd : B, X = Da(A, fK), W = Gd(w, s, "mapStateToProps"), se = Gd(O, u, "mapDispatchToProps"), _e = Gd(T, p, "mergeProps");
    return n(m, z({
      // used in error messages
      methodName: "connect",
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function(Te) {
        return "Connect(" + Te + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: !!w,
      // passed through to selectorFactory
      initMapStateToProps: W,
      initMapDispatchToProps: se,
      initMergeProps: _e,
      pure: k,
      areStatesEqual: N,
      areOwnPropsEqual: x,
      areStatePropsEqual: I,
      areMergedPropsEqual: V
    }, X));
  };
}
const Tt = /* @__PURE__ */ hK();
O5(OC);
function tb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tb(Object(r), !0).forEach(function(n) {
      Ca(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qt(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var nb = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Qd = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, ka = {
  INIT: "@@redux/INIT" + Qd(),
  REPLACE: "@@redux/REPLACE" + Qd(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Qd();
  }
};
function SS(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function gK(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  var t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (yK(e))
    return "date";
  if (vK(e))
    return "error";
  var r = mK(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return t.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function mK(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function vK(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function yK(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function _a(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = gK(e)), t;
}
function _S(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? qt(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? qt(1) : "Expected the enhancer to be a function. Instead, received: '" + _a(r) + "'");
    return r(_S)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? qt(2) : "Expected the root reducer to be a function. Instead, received: '" + _a(e) + "'");
  var i = e, s = t, l = [], u = l, f = !1;
  function p() {
    u === l && (u = l.slice());
  }
  function h() {
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? qt(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return s;
  }
  function m(T) {
    if (typeof T != "function")
      throw new Error(process.env.NODE_ENV === "production" ? qt(4) : "Expected the listener to be a function. Instead, received: '" + _a(T) + "'");
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? qt(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var _ = !0;
    return p(), u.push(T), function() {
      if (_) {
        if (f)
          throw new Error(process.env.NODE_ENV === "production" ? qt(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        _ = !1, p();
        var M = u.indexOf(T);
        u.splice(M, 1), l = null;
      }
    };
  }
  function v(T) {
    if (!SS(T))
      throw new Error(process.env.NODE_ENV === "production" ? qt(7) : "Actions must be plain objects. Instead, the actual type was: '" + _a(T) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof T.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? qt(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? qt(9) : "Reducers may not dispatch actions.");
    try {
      f = !0, s = i(s, T);
    } finally {
      f = !1;
    }
    for (var _ = l = u, A = 0; A < _.length; A++) {
      var M = _[A];
      M();
    }
    return T;
  }
  function w(T) {
    if (typeof T != "function")
      throw new Error(process.env.NODE_ENV === "production" ? qt(10) : "Expected the nextReducer to be a function. Instead, received: '" + _a(T));
    i = T, v({
      type: ka.REPLACE
    });
  }
  function O() {
    var T, _ = m;
    return T = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(M) {
        if (typeof M != "object" || M === null)
          throw new Error(process.env.NODE_ENV === "production" ? qt(11) : "Expected the observer to be an object. Instead, received: '" + _a(M) + "'");
        function k() {
          M.next && M.next(h());
        }
        k();
        var U = _(k);
        return {
          unsubscribe: U
        };
      }
    }, T[nb] = function() {
      return this;
    }, T;
  }
  return v({
    type: ka.INIT
  }), n = {
    dispatch: v,
    subscribe: m,
    getState: h,
    replaceReducer: w
  }, n[nb] = O, n;
}
function ab(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function bK(e, t, r, n) {
  var i = Object.keys(t), s = r && r.type === ka.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!SS(e))
    return "The " + s + ' has unexpected type of "' + _a(e) + '". Expected argument to be an object with the following ' + ('keys: "' + i.join('", "') + '"');
  var l = Object.keys(e).filter(function(u) {
    return !t.hasOwnProperty(u) && !n[u];
  });
  if (l.forEach(function(u) {
    n[u] = !0;
  }), !(r && r.type === ka.REPLACE) && l.length > 0)
    return "Unexpected " + (l.length > 1 ? "keys" : "key") + " " + ('"' + l.join('", "') + '" found in ' + s + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + i.join('", "') + '". Unexpected keys will be ignored.');
}
function EK(e) {
  Object.keys(e).forEach(function(t) {
    var r = e[t], n = r(void 0, {
      type: ka.INIT
    });
    if (typeof n > "u")
      throw new Error(process.env.NODE_ENV === "production" ? qt(12) : 'The slice reducer for key "' + t + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: ka.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? qt(13) : 'The slice reducer for key "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + ka.INIT + `' or other actions in "redux/*" `) + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
  });
}
function wK(e) {
  for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
    var i = t[n];
    process.env.NODE_ENV !== "production" && typeof e[i] > "u" && ab('No reducer provided for key "' + i + '"'), typeof e[i] == "function" && (r[i] = e[i]);
  }
  var s = Object.keys(r), l;
  process.env.NODE_ENV !== "production" && (l = {});
  var u;
  try {
    EK(r);
  } catch (f) {
    u = f;
  }
  return function(p, h) {
    if (p === void 0 && (p = {}), u)
      throw u;
    if (process.env.NODE_ENV !== "production") {
      var m = bK(p, r, h, l);
      m && ab(m);
    }
    for (var v = !1, w = {}, O = 0; O < s.length; O++) {
      var T = s[O], _ = r[T], A = p[T], M = _(A, h);
      if (typeof M > "u") {
        var k = h && h.type;
        throw new Error(process.env.NODE_ENV === "production" ? qt(14) : "When called with an action of type " + (k ? '"' + String(k) + '"' : "(unknown type)") + ', the slice reducer for key "' + T + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
      }
      w[T] = M, v = v || M !== A;
    }
    return v = v || s.length !== Object.keys(p).length, v ? w : p;
  };
}
function SK() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.length === 0 ? function(n) {
    return n;
  } : t.length === 1 ? t[0] : t.reduce(function(n, i) {
    return function() {
      return n(i.apply(void 0, arguments));
    };
  });
}
function _K() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var i = n.apply(void 0, arguments), s = function() {
        throw new Error(process.env.NODE_ENV === "production" ? qt(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, l = {
        getState: i.getState,
        dispatch: function() {
          return s.apply(void 0, arguments);
        }
      }, u = t.map(function(f) {
        return f(l);
      });
      return s = SK.apply(void 0, u)(i.dispatch), rb(rb({}, i), {}, {
        dispatch: s
      });
    };
  };
}
function OS(e) {
  var t = function(n) {
    var i = n.dispatch, s = n.getState;
    return function(l) {
      return function(u) {
        return typeof u == "function" ? u(i, s, e) : l(u);
      };
    };
  };
  return t;
}
var TS = OS();
TS.withExtraArgument = OS;
const OK = TS;
var Jl = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Jl.exports;
(function(e, t) {
  (function() {
    var r, n = "4.17.21", i = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", p = 500, h = "__lodash_placeholder__", m = 1, v = 2, w = 4, O = 1, T = 2, _ = 1, A = 2, M = 4, k = 8, U = 16, N = 32, F = 64, x = 128, $ = 256, I = 512, B = 30, V = "...", X = 800, W = 16, se = 1, _e = 2, Oe = 3, Te = 1 / 0, ze = 9007199254740991, Ze = 17976931348623157e292, K = 0 / 0, J = 4294967295, we = J - 1, ge = J >>> 1, fe = [
      ["ary", x],
      ["bind", _],
      ["bindKey", A],
      ["curry", k],
      ["curryRight", U],
      ["flip", I],
      ["partial", N],
      ["partialRight", F],
      ["rearg", $]
    ], Se = "[object Arguments]", he = "[object Array]", xe = "[object AsyncFunction]", Pe = "[object Boolean]", Ae = "[object Date]", Ne = "[object DOMException]", re = "[object Error]", ee = "[object Function]", ht = "[object GeneratorFunction]", ne = "[object Map]", Yt = "[object Number]", nn = "[object Null]", Bt = "[object Object]", ca = "[object Promise]", xs = "[object Proxy]", an = "[object RegExp]", Ht = "[object Set]", da = "[object String]", qr = "[object Symbol]", oo = "[object Undefined]", so = "[object WeakMap]", U_ = "[object WeakSet]", lo = "[object ArrayBuffer]", ri = "[object DataView]", Fu = "[object Float32Array]", Bu = "[object Float64Array]", Uu = "[object Int8Array]", zu = "[object Int16Array]", qu = "[object Int32Array]", ju = "[object Uint8Array]", Hu = "[object Uint8ClampedArray]", Wu = "[object Uint16Array]", Vu = "[object Uint32Array]", z_ = /\b__p \+= '';/g, q_ = /\b(__p \+=) '' \+/g, j_ = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Fp = /&(?:amp|lt|gt|quot|#39);/g, Bp = /[&<>"']/g, H_ = RegExp(Fp.source), W_ = RegExp(Bp.source), V_ = /<%-([\s\S]+?)%>/g, G_ = /<%([\s\S]+?)%>/g, Up = /<%=([\s\S]+?)%>/g, Q_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, K_ = /^\w*$/, Y_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Gu = /[\\^$.*+?()[\]{}|]/g, X_ = RegExp(Gu.source), Qu = /^\s+/, J_ = /\s/, Z_ = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, e1 = /\{\n\/\* \[wrapped with (.+)\] \*/, t1 = /,? & /, r1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, n1 = /[()=,{}\[\]\/\s]/, a1 = /\\(\\)?/g, i1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, zp = /\w*$/, o1 = /^[-+]0x[0-9a-f]+$/i, s1 = /^0b[01]+$/i, l1 = /^\[object .+?Constructor\]$/, u1 = /^0o[0-7]+$/i, c1 = /^(?:0|[1-9]\d*)$/, d1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ps = /($^)/, f1 = /['\n\r\u2028\u2029\\]/g, As = "\\ud800-\\udfff", p1 = "\\u0300-\\u036f", h1 = "\\ufe20-\\ufe2f", g1 = "\\u20d0-\\u20ff", qp = p1 + h1 + g1, jp = "\\u2700-\\u27bf", Hp = "a-z\\xdf-\\xf6\\xf8-\\xff", m1 = "\\xac\\xb1\\xd7\\xf7", v1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", y1 = "\\u2000-\\u206f", b1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Wp = "A-Z\\xc0-\\xd6\\xd8-\\xde", Vp = "\\ufe0e\\ufe0f", Gp = m1 + v1 + y1 + b1, Ku = "['’]", E1 = "[" + As + "]", Qp = "[" + Gp + "]", Cs = "[" + qp + "]", Kp = "\\d+", w1 = "[" + jp + "]", Yp = "[" + Hp + "]", Xp = "[^" + As + Gp + Kp + jp + Hp + Wp + "]", Yu = "\\ud83c[\\udffb-\\udfff]", S1 = "(?:" + Cs + "|" + Yu + ")", Jp = "[^" + As + "]", Xu = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ju = "[\\ud800-\\udbff][\\udc00-\\udfff]", ni = "[" + Wp + "]", Zp = "\\u200d", eh = "(?:" + Yp + "|" + Xp + ")", _1 = "(?:" + ni + "|" + Xp + ")", th = "(?:" + Ku + "(?:d|ll|m|re|s|t|ve))?", rh = "(?:" + Ku + "(?:D|LL|M|RE|S|T|VE))?", nh = S1 + "?", ah = "[" + Vp + "]?", O1 = "(?:" + Zp + "(?:" + [Jp, Xu, Ju].join("|") + ")" + ah + nh + ")*", T1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", x1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ih = ah + nh + O1, P1 = "(?:" + [w1, Xu, Ju].join("|") + ")" + ih, A1 = "(?:" + [Jp + Cs + "?", Cs, Xu, Ju, E1].join("|") + ")", C1 = RegExp(Ku, "g"), $1 = RegExp(Cs, "g"), Zu = RegExp(Yu + "(?=" + Yu + ")|" + A1 + ih, "g"), R1 = RegExp([
      ni + "?" + Yp + "+" + th + "(?=" + [Qp, ni, "$"].join("|") + ")",
      _1 + "+" + rh + "(?=" + [Qp, ni + eh, "$"].join("|") + ")",
      ni + "?" + eh + "+" + th,
      ni + "+" + rh,
      x1,
      T1,
      Kp,
      P1
    ].join("|"), "g"), N1 = RegExp("[" + Zp + As + qp + Vp + "]"), I1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, k1 = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], D1 = -1, st = {};
    st[Fu] = st[Bu] = st[Uu] = st[zu] = st[qu] = st[ju] = st[Hu] = st[Wu] = st[Vu] = !0, st[Se] = st[he] = st[lo] = st[Pe] = st[ri] = st[Ae] = st[re] = st[ee] = st[ne] = st[Yt] = st[Bt] = st[an] = st[Ht] = st[da] = st[so] = !1;
    var at = {};
    at[Se] = at[he] = at[lo] = at[ri] = at[Pe] = at[Ae] = at[Fu] = at[Bu] = at[Uu] = at[zu] = at[qu] = at[ne] = at[Yt] = at[Bt] = at[an] = at[Ht] = at[da] = at[qr] = at[ju] = at[Hu] = at[Wu] = at[Vu] = !0, at[re] = at[ee] = at[so] = !1;
    var M1 = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, L1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, F1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, B1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, U1 = parseFloat, z1 = parseInt, oh = typeof Nr == "object" && Nr && Nr.Object === Object && Nr, q1 = typeof self == "object" && self && self.Object === Object && self, Dt = oh || q1 || Function("return this")(), ec = t && !t.nodeType && t, fa = ec && !0 && e && !e.nodeType && e, sh = fa && fa.exports === ec, tc = sh && oh.process, mr = function() {
      try {
        var D = fa && fa.require && fa.require("util").types;
        return D || tc && tc.binding && tc.binding("util");
      } catch {
      }
    }(), lh = mr && mr.isArrayBuffer, uh = mr && mr.isDate, ch = mr && mr.isMap, dh = mr && mr.isRegExp, fh = mr && mr.isSet, ph = mr && mr.isTypedArray;
    function nr(D, H, q) {
      switch (q.length) {
        case 0:
          return D.call(H);
        case 1:
          return D.call(H, q[0]);
        case 2:
          return D.call(H, q[0], q[1]);
        case 3:
          return D.call(H, q[0], q[1], q[2]);
      }
      return D.apply(H, q);
    }
    function j1(D, H, q, ue) {
      for (var Ce = -1, He = D == null ? 0 : D.length; ++Ce < He; ) {
        var xt = D[Ce];
        H(ue, xt, q(xt), D);
      }
      return ue;
    }
    function vr(D, H) {
      for (var q = -1, ue = D == null ? 0 : D.length; ++q < ue && H(D[q], q, D) !== !1; )
        ;
      return D;
    }
    function H1(D, H) {
      for (var q = D == null ? 0 : D.length; q-- && H(D[q], q, D) !== !1; )
        ;
      return D;
    }
    function hh(D, H) {
      for (var q = -1, ue = D == null ? 0 : D.length; ++q < ue; )
        if (!H(D[q], q, D))
          return !1;
      return !0;
    }
    function Ln(D, H) {
      for (var q = -1, ue = D == null ? 0 : D.length, Ce = 0, He = []; ++q < ue; ) {
        var xt = D[q];
        H(xt, q, D) && (He[Ce++] = xt);
      }
      return He;
    }
    function $s(D, H) {
      var q = D == null ? 0 : D.length;
      return !!q && ai(D, H, 0) > -1;
    }
    function rc(D, H, q) {
      for (var ue = -1, Ce = D == null ? 0 : D.length; ++ue < Ce; )
        if (q(H, D[ue]))
          return !0;
      return !1;
    }
    function ft(D, H) {
      for (var q = -1, ue = D == null ? 0 : D.length, Ce = Array(ue); ++q < ue; )
        Ce[q] = H(D[q], q, D);
      return Ce;
    }
    function Fn(D, H) {
      for (var q = -1, ue = H.length, Ce = D.length; ++q < ue; )
        D[Ce + q] = H[q];
      return D;
    }
    function nc(D, H, q, ue) {
      var Ce = -1, He = D == null ? 0 : D.length;
      for (ue && He && (q = D[++Ce]); ++Ce < He; )
        q = H(q, D[Ce], Ce, D);
      return q;
    }
    function W1(D, H, q, ue) {
      var Ce = D == null ? 0 : D.length;
      for (ue && Ce && (q = D[--Ce]); Ce--; )
        q = H(q, D[Ce], Ce, D);
      return q;
    }
    function ac(D, H) {
      for (var q = -1, ue = D == null ? 0 : D.length; ++q < ue; )
        if (H(D[q], q, D))
          return !0;
      return !1;
    }
    var V1 = ic("length");
    function G1(D) {
      return D.split("");
    }
    function Q1(D) {
      return D.match(r1) || [];
    }
    function gh(D, H, q) {
      var ue;
      return q(D, function(Ce, He, xt) {
        if (H(Ce, He, xt))
          return ue = He, !1;
      }), ue;
    }
    function Rs(D, H, q, ue) {
      for (var Ce = D.length, He = q + (ue ? 1 : -1); ue ? He-- : ++He < Ce; )
        if (H(D[He], He, D))
          return He;
      return -1;
    }
    function ai(D, H, q) {
      return H === H ? o0(D, H, q) : Rs(D, mh, q);
    }
    function K1(D, H, q, ue) {
      for (var Ce = q - 1, He = D.length; ++Ce < He; )
        if (ue(D[Ce], H))
          return Ce;
      return -1;
    }
    function mh(D) {
      return D !== D;
    }
    function vh(D, H) {
      var q = D == null ? 0 : D.length;
      return q ? sc(D, H) / q : K;
    }
    function ic(D) {
      return function(H) {
        return H == null ? r : H[D];
      };
    }
    function oc(D) {
      return function(H) {
        return D == null ? r : D[H];
      };
    }
    function yh(D, H, q, ue, Ce) {
      return Ce(D, function(He, xt, nt) {
        q = ue ? (ue = !1, He) : H(q, He, xt, nt);
      }), q;
    }
    function Y1(D, H) {
      var q = D.length;
      for (D.sort(H); q--; )
        D[q] = D[q].value;
      return D;
    }
    function sc(D, H) {
      for (var q, ue = -1, Ce = D.length; ++ue < Ce; ) {
        var He = H(D[ue]);
        He !== r && (q = q === r ? He : q + He);
      }
      return q;
    }
    function lc(D, H) {
      for (var q = -1, ue = Array(D); ++q < D; )
        ue[q] = H(q);
      return ue;
    }
    function X1(D, H) {
      return ft(H, function(q) {
        return [q, D[q]];
      });
    }
    function bh(D) {
      return D && D.slice(0, _h(D) + 1).replace(Qu, "");
    }
    function ar(D) {
      return function(H) {
        return D(H);
      };
    }
    function uc(D, H) {
      return ft(H, function(q) {
        return D[q];
      });
    }
    function uo(D, H) {
      return D.has(H);
    }
    function Eh(D, H) {
      for (var q = -1, ue = D.length; ++q < ue && ai(H, D[q], 0) > -1; )
        ;
      return q;
    }
    function wh(D, H) {
      for (var q = D.length; q-- && ai(H, D[q], 0) > -1; )
        ;
      return q;
    }
    function J1(D, H) {
      for (var q = D.length, ue = 0; q--; )
        D[q] === H && ++ue;
      return ue;
    }
    var Z1 = oc(M1), e0 = oc(L1);
    function t0(D) {
      return "\\" + B1[D];
    }
    function r0(D, H) {
      return D == null ? r : D[H];
    }
    function ii(D) {
      return N1.test(D);
    }
    function n0(D) {
      return I1.test(D);
    }
    function a0(D) {
      for (var H, q = []; !(H = D.next()).done; )
        q.push(H.value);
      return q;
    }
    function cc(D) {
      var H = -1, q = Array(D.size);
      return D.forEach(function(ue, Ce) {
        q[++H] = [Ce, ue];
      }), q;
    }
    function Sh(D, H) {
      return function(q) {
        return D(H(q));
      };
    }
    function Bn(D, H) {
      for (var q = -1, ue = D.length, Ce = 0, He = []; ++q < ue; ) {
        var xt = D[q];
        (xt === H || xt === h) && (D[q] = h, He[Ce++] = q);
      }
      return He;
    }
    function Ns(D) {
      var H = -1, q = Array(D.size);
      return D.forEach(function(ue) {
        q[++H] = ue;
      }), q;
    }
    function i0(D) {
      var H = -1, q = Array(D.size);
      return D.forEach(function(ue) {
        q[++H] = [ue, ue];
      }), q;
    }
    function o0(D, H, q) {
      for (var ue = q - 1, Ce = D.length; ++ue < Ce; )
        if (D[ue] === H)
          return ue;
      return -1;
    }
    function s0(D, H, q) {
      for (var ue = q + 1; ue--; )
        if (D[ue] === H)
          return ue;
      return ue;
    }
    function oi(D) {
      return ii(D) ? u0(D) : V1(D);
    }
    function Ar(D) {
      return ii(D) ? c0(D) : G1(D);
    }
    function _h(D) {
      for (var H = D.length; H-- && J_.test(D.charAt(H)); )
        ;
      return H;
    }
    var l0 = oc(F1);
    function u0(D) {
      for (var H = Zu.lastIndex = 0; Zu.test(D); )
        ++H;
      return H;
    }
    function c0(D) {
      return D.match(Zu) || [];
    }
    function d0(D) {
      return D.match(R1) || [];
    }
    var f0 = function D(H) {
      H = H == null ? Dt : si.defaults(Dt.Object(), H, si.pick(Dt, k1));
      var q = H.Array, ue = H.Date, Ce = H.Error, He = H.Function, xt = H.Math, nt = H.Object, dc = H.RegExp, p0 = H.String, yr = H.TypeError, Is = q.prototype, h0 = He.prototype, li = nt.prototype, ks = H["__core-js_shared__"], Ds = h0.toString, Je = li.hasOwnProperty, g0 = 0, Oh = function() {
        var a = /[^.]+$/.exec(ks && ks.keys && ks.keys.IE_PROTO || "");
        return a ? "Symbol(src)_1." + a : "";
      }(), Ms = li.toString, m0 = Ds.call(nt), v0 = Dt._, y0 = dc(
        "^" + Ds.call(Je).replace(Gu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ls = sh ? H.Buffer : r, Un = H.Symbol, Fs = H.Uint8Array, Th = Ls ? Ls.allocUnsafe : r, Bs = Sh(nt.getPrototypeOf, nt), xh = nt.create, Ph = li.propertyIsEnumerable, Us = Is.splice, Ah = Un ? Un.isConcatSpreadable : r, co = Un ? Un.iterator : r, pa = Un ? Un.toStringTag : r, zs = function() {
        try {
          var a = ya(nt, "defineProperty");
          return a({}, "", {}), a;
        } catch {
        }
      }(), b0 = H.clearTimeout !== Dt.clearTimeout && H.clearTimeout, E0 = ue && ue.now !== Dt.Date.now && ue.now, w0 = H.setTimeout !== Dt.setTimeout && H.setTimeout, qs = xt.ceil, js = xt.floor, fc = nt.getOwnPropertySymbols, S0 = Ls ? Ls.isBuffer : r, Ch = H.isFinite, _0 = Is.join, O0 = Sh(nt.keys, nt), Pt = xt.max, Ut = xt.min, T0 = ue.now, x0 = H.parseInt, $h = xt.random, P0 = Is.reverse, pc = ya(H, "DataView"), fo = ya(H, "Map"), hc = ya(H, "Promise"), ui = ya(H, "Set"), po = ya(H, "WeakMap"), ho = ya(nt, "create"), Hs = po && new po(), ci = {}, A0 = ba(pc), C0 = ba(fo), $0 = ba(hc), R0 = ba(ui), N0 = ba(po), Ws = Un ? Un.prototype : r, go = Ws ? Ws.valueOf : r, Rh = Ws ? Ws.toString : r;
      function E(a) {
        if (gt(a) && !$e(a) && !(a instanceof Fe)) {
          if (a instanceof br)
            return a;
          if (Je.call(a, "__wrapped__"))
            return Ng(a);
        }
        return new br(a);
      }
      var di = function() {
        function a() {
        }
        return function(o) {
          if (!pt(o))
            return {};
          if (xh)
            return xh(o);
          a.prototype = o;
          var c = new a();
          return a.prototype = r, c;
        };
      }();
      function Vs() {
      }
      function br(a, o) {
        this.__wrapped__ = a, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = r;
      }
      E.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: V_,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: G_,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Up,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: E
        }
      }, E.prototype = Vs.prototype, E.prototype.constructor = E, br.prototype = di(Vs.prototype), br.prototype.constructor = br;
      function Fe(a) {
        this.__wrapped__ = a, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = J, this.__views__ = [];
      }
      function I0() {
        var a = new Fe(this.__wrapped__);
        return a.__actions__ = Xt(this.__actions__), a.__dir__ = this.__dir__, a.__filtered__ = this.__filtered__, a.__iteratees__ = Xt(this.__iteratees__), a.__takeCount__ = this.__takeCount__, a.__views__ = Xt(this.__views__), a;
      }
      function k0() {
        if (this.__filtered__) {
          var a = new Fe(this);
          a.__dir__ = -1, a.__filtered__ = !0;
        } else
          a = this.clone(), a.__dir__ *= -1;
        return a;
      }
      function D0() {
        var a = this.__wrapped__.value(), o = this.__dir__, c = $e(a), g = o < 0, y = c ? a.length : 0, S = GO(0, y, this.__views__), P = S.start, R = S.end, L = R - P, G = g ? R : P - 1, Q = this.__iteratees__, Y = Q.length, ae = 0, de = Ut(L, this.__takeCount__);
        if (!c || !g && y == L && de == L)
          return tg(a, this.__actions__);
        var ye = [];
        e:
          for (; L-- && ae < de; ) {
            G += o;
            for (var ke = -1, be = a[G]; ++ke < Y; ) {
              var Me = Q[ke], Be = Me.iteratee, sr = Me.type, Gt = Be(be);
              if (sr == _e)
                be = Gt;
              else if (!Gt) {
                if (sr == se)
                  continue e;
                break e;
              }
            }
            ye[ae++] = be;
          }
        return ye;
      }
      Fe.prototype = di(Vs.prototype), Fe.prototype.constructor = Fe;
      function ha(a) {
        var o = -1, c = a == null ? 0 : a.length;
        for (this.clear(); ++o < c; ) {
          var g = a[o];
          this.set(g[0], g[1]);
        }
      }
      function M0() {
        this.__data__ = ho ? ho(null) : {}, this.size = 0;
      }
      function L0(a) {
        var o = this.has(a) && delete this.__data__[a];
        return this.size -= o ? 1 : 0, o;
      }
      function F0(a) {
        var o = this.__data__;
        if (ho) {
          var c = o[a];
          return c === f ? r : c;
        }
        return Je.call(o, a) ? o[a] : r;
      }
      function B0(a) {
        var o = this.__data__;
        return ho ? o[a] !== r : Je.call(o, a);
      }
      function U0(a, o) {
        var c = this.__data__;
        return this.size += this.has(a) ? 0 : 1, c[a] = ho && o === r ? f : o, this;
      }
      ha.prototype.clear = M0, ha.prototype.delete = L0, ha.prototype.get = F0, ha.prototype.has = B0, ha.prototype.set = U0;
      function on(a) {
        var o = -1, c = a == null ? 0 : a.length;
        for (this.clear(); ++o < c; ) {
          var g = a[o];
          this.set(g[0], g[1]);
        }
      }
      function z0() {
        this.__data__ = [], this.size = 0;
      }
      function q0(a) {
        var o = this.__data__, c = Gs(o, a);
        if (c < 0)
          return !1;
        var g = o.length - 1;
        return c == g ? o.pop() : Us.call(o, c, 1), --this.size, !0;
      }
      function j0(a) {
        var o = this.__data__, c = Gs(o, a);
        return c < 0 ? r : o[c][1];
      }
      function H0(a) {
        return Gs(this.__data__, a) > -1;
      }
      function W0(a, o) {
        var c = this.__data__, g = Gs(c, a);
        return g < 0 ? (++this.size, c.push([a, o])) : c[g][1] = o, this;
      }
      on.prototype.clear = z0, on.prototype.delete = q0, on.prototype.get = j0, on.prototype.has = H0, on.prototype.set = W0;
      function sn(a) {
        var o = -1, c = a == null ? 0 : a.length;
        for (this.clear(); ++o < c; ) {
          var g = a[o];
          this.set(g[0], g[1]);
        }
      }
      function V0() {
        this.size = 0, this.__data__ = {
          hash: new ha(),
          map: new (fo || on)(),
          string: new ha()
        };
      }
      function G0(a) {
        var o = il(this, a).delete(a);
        return this.size -= o ? 1 : 0, o;
      }
      function Q0(a) {
        return il(this, a).get(a);
      }
      function K0(a) {
        return il(this, a).has(a);
      }
      function Y0(a, o) {
        var c = il(this, a), g = c.size;
        return c.set(a, o), this.size += c.size == g ? 0 : 1, this;
      }
      sn.prototype.clear = V0, sn.prototype.delete = G0, sn.prototype.get = Q0, sn.prototype.has = K0, sn.prototype.set = Y0;
      function ga(a) {
        var o = -1, c = a == null ? 0 : a.length;
        for (this.__data__ = new sn(); ++o < c; )
          this.add(a[o]);
      }
      function X0(a) {
        return this.__data__.set(a, f), this;
      }
      function J0(a) {
        return this.__data__.has(a);
      }
      ga.prototype.add = ga.prototype.push = X0, ga.prototype.has = J0;
      function Cr(a) {
        var o = this.__data__ = new on(a);
        this.size = o.size;
      }
      function Z0() {
        this.__data__ = new on(), this.size = 0;
      }
      function eO(a) {
        var o = this.__data__, c = o.delete(a);
        return this.size = o.size, c;
      }
      function tO(a) {
        return this.__data__.get(a);
      }
      function rO(a) {
        return this.__data__.has(a);
      }
      function nO(a, o) {
        var c = this.__data__;
        if (c instanceof on) {
          var g = c.__data__;
          if (!fo || g.length < i - 1)
            return g.push([a, o]), this.size = ++c.size, this;
          c = this.__data__ = new sn(g);
        }
        return c.set(a, o), this.size = c.size, this;
      }
      Cr.prototype.clear = Z0, Cr.prototype.delete = eO, Cr.prototype.get = tO, Cr.prototype.has = rO, Cr.prototype.set = nO;
      function Nh(a, o) {
        var c = $e(a), g = !c && Ea(a), y = !c && !g && Wn(a), S = !c && !g && !y && gi(a), P = c || g || y || S, R = P ? lc(a.length, p0) : [], L = R.length;
        for (var G in a)
          (o || Je.call(a, G)) && !(P && // Safari 9 has enumerable `arguments.length` in strict mode.
          (G == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          y && (G == "offset" || G == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          S && (G == "buffer" || G == "byteLength" || G == "byteOffset") || // Skip index properties.
          dn(G, L))) && R.push(G);
        return R;
      }
      function Ih(a) {
        var o = a.length;
        return o ? a[Tc(0, o - 1)] : r;
      }
      function aO(a, o) {
        return ol(Xt(a), ma(o, 0, a.length));
      }
      function iO(a) {
        return ol(Xt(a));
      }
      function gc(a, o, c) {
        (c !== r && !$r(a[o], c) || c === r && !(o in a)) && ln(a, o, c);
      }
      function mo(a, o, c) {
        var g = a[o];
        (!(Je.call(a, o) && $r(g, c)) || c === r && !(o in a)) && ln(a, o, c);
      }
      function Gs(a, o) {
        for (var c = a.length; c--; )
          if ($r(a[c][0], o))
            return c;
        return -1;
      }
      function oO(a, o, c, g) {
        return zn(a, function(y, S, P) {
          o(g, y, c(y), P);
        }), g;
      }
      function kh(a, o) {
        return a && Hr(o, $t(o), a);
      }
      function sO(a, o) {
        return a && Hr(o, Zt(o), a);
      }
      function ln(a, o, c) {
        o == "__proto__" && zs ? zs(a, o, {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        }) : a[o] = c;
      }
      function mc(a, o) {
        for (var c = -1, g = o.length, y = q(g), S = a == null; ++c < g; )
          y[c] = S ? r : Yc(a, o[c]);
        return y;
      }
      function ma(a, o, c) {
        return a === a && (c !== r && (a = a <= c ? a : c), o !== r && (a = a >= o ? a : o)), a;
      }
      function Er(a, o, c, g, y, S) {
        var P, R = o & m, L = o & v, G = o & w;
        if (c && (P = y ? c(a, g, y, S) : c(a)), P !== r)
          return P;
        if (!pt(a))
          return a;
        var Q = $e(a);
        if (Q) {
          if (P = KO(a), !R)
            return Xt(a, P);
        } else {
          var Y = zt(a), ae = Y == ee || Y == ht;
          if (Wn(a))
            return ag(a, R);
          if (Y == Bt || Y == Se || ae && !y) {
            if (P = L || ae ? {} : _g(a), !R)
              return L ? FO(a, sO(P, a)) : LO(a, kh(P, a));
          } else {
            if (!at[Y])
              return y ? a : {};
            P = YO(a, Y, R);
          }
        }
        S || (S = new Cr());
        var de = S.get(a);
        if (de)
          return de;
        S.set(a, P), Jg(a) ? a.forEach(function(be) {
          P.add(Er(be, o, c, be, a, S));
        }) : Yg(a) && a.forEach(function(be, Me) {
          P.set(Me, Er(be, o, c, Me, a, S));
        });
        var ye = G ? L ? Mc : Dc : L ? Zt : $t, ke = Q ? r : ye(a);
        return vr(ke || a, function(be, Me) {
          ke && (Me = be, be = a[Me]), mo(P, Me, Er(be, o, c, Me, a, S));
        }), P;
      }
      function lO(a) {
        var o = $t(a);
        return function(c) {
          return Dh(c, a, o);
        };
      }
      function Dh(a, o, c) {
        var g = c.length;
        if (a == null)
          return !g;
        for (a = nt(a); g--; ) {
          var y = c[g], S = o[y], P = a[y];
          if (P === r && !(y in a) || !S(P))
            return !1;
        }
        return !0;
      }
      function Mh(a, o, c) {
        if (typeof a != "function")
          throw new yr(l);
        return _o(function() {
          a.apply(r, c);
        }, o);
      }
      function vo(a, o, c, g) {
        var y = -1, S = $s, P = !0, R = a.length, L = [], G = o.length;
        if (!R)
          return L;
        c && (o = ft(o, ar(c))), g ? (S = rc, P = !1) : o.length >= i && (S = uo, P = !1, o = new ga(o));
        e:
          for (; ++y < R; ) {
            var Q = a[y], Y = c == null ? Q : c(Q);
            if (Q = g || Q !== 0 ? Q : 0, P && Y === Y) {
              for (var ae = G; ae--; )
                if (o[ae] === Y)
                  continue e;
              L.push(Q);
            } else
              S(o, Y, g) || L.push(Q);
          }
        return L;
      }
      var zn = ug(jr), Lh = ug(yc, !0);
      function uO(a, o) {
        var c = !0;
        return zn(a, function(g, y, S) {
          return c = !!o(g, y, S), c;
        }), c;
      }
      function Qs(a, o, c) {
        for (var g = -1, y = a.length; ++g < y; ) {
          var S = a[g], P = o(S);
          if (P != null && (R === r ? P === P && !or(P) : c(P, R)))
            var R = P, L = S;
        }
        return L;
      }
      function cO(a, o, c, g) {
        var y = a.length;
        for (c = Ie(c), c < 0 && (c = -c > y ? 0 : y + c), g = g === r || g > y ? y : Ie(g), g < 0 && (g += y), g = c > g ? 0 : em(g); c < g; )
          a[c++] = o;
        return a;
      }
      function Fh(a, o) {
        var c = [];
        return zn(a, function(g, y, S) {
          o(g, y, S) && c.push(g);
        }), c;
      }
      function Mt(a, o, c, g, y) {
        var S = -1, P = a.length;
        for (c || (c = JO), y || (y = []); ++S < P; ) {
          var R = a[S];
          o > 0 && c(R) ? o > 1 ? Mt(R, o - 1, c, g, y) : Fn(y, R) : g || (y[y.length] = R);
        }
        return y;
      }
      var vc = cg(), Bh = cg(!0);
      function jr(a, o) {
        return a && vc(a, o, $t);
      }
      function yc(a, o) {
        return a && Bh(a, o, $t);
      }
      function Ks(a, o) {
        return Ln(o, function(c) {
          return fn(a[c]);
        });
      }
      function va(a, o) {
        o = jn(o, a);
        for (var c = 0, g = o.length; a != null && c < g; )
          a = a[Wr(o[c++])];
        return c && c == g ? a : r;
      }
      function Uh(a, o, c) {
        var g = o(a);
        return $e(a) ? g : Fn(g, c(a));
      }
      function Wt(a) {
        return a == null ? a === r ? oo : nn : pa && pa in nt(a) ? VO(a) : iT(a);
      }
      function bc(a, o) {
        return a > o;
      }
      function dO(a, o) {
        return a != null && Je.call(a, o);
      }
      function fO(a, o) {
        return a != null && o in nt(a);
      }
      function pO(a, o, c) {
        return a >= Ut(o, c) && a < Pt(o, c);
      }
      function Ec(a, o, c) {
        for (var g = c ? rc : $s, y = a[0].length, S = a.length, P = S, R = q(S), L = 1 / 0, G = []; P--; ) {
          var Q = a[P];
          P && o && (Q = ft(Q, ar(o))), L = Ut(Q.length, L), R[P] = !c && (o || y >= 120 && Q.length >= 120) ? new ga(P && Q) : r;
        }
        Q = a[0];
        var Y = -1, ae = R[0];
        e:
          for (; ++Y < y && G.length < L; ) {
            var de = Q[Y], ye = o ? o(de) : de;
            if (de = c || de !== 0 ? de : 0, !(ae ? uo(ae, ye) : g(G, ye, c))) {
              for (P = S; --P; ) {
                var ke = R[P];
                if (!(ke ? uo(ke, ye) : g(a[P], ye, c)))
                  continue e;
              }
              ae && ae.push(ye), G.push(de);
            }
          }
        return G;
      }
      function hO(a, o, c, g) {
        return jr(a, function(y, S, P) {
          o(g, c(y), S, P);
        }), g;
      }
      function yo(a, o, c) {
        o = jn(o, a), a = Pg(a, o);
        var g = a == null ? a : a[Wr(Sr(o))];
        return g == null ? r : nr(g, a, c);
      }
      function zh(a) {
        return gt(a) && Wt(a) == Se;
      }
      function gO(a) {
        return gt(a) && Wt(a) == lo;
      }
      function mO(a) {
        return gt(a) && Wt(a) == Ae;
      }
      function bo(a, o, c, g, y) {
        return a === o ? !0 : a == null || o == null || !gt(a) && !gt(o) ? a !== a && o !== o : vO(a, o, c, g, bo, y);
      }
      function vO(a, o, c, g, y, S) {
        var P = $e(a), R = $e(o), L = P ? he : zt(a), G = R ? he : zt(o);
        L = L == Se ? Bt : L, G = G == Se ? Bt : G;
        var Q = L == Bt, Y = G == Bt, ae = L == G;
        if (ae && Wn(a)) {
          if (!Wn(o))
            return !1;
          P = !0, Q = !1;
        }
        if (ae && !Q)
          return S || (S = new Cr()), P || gi(a) ? Eg(a, o, c, g, y, S) : HO(a, o, L, c, g, y, S);
        if (!(c & O)) {
          var de = Q && Je.call(a, "__wrapped__"), ye = Y && Je.call(o, "__wrapped__");
          if (de || ye) {
            var ke = de ? a.value() : a, be = ye ? o.value() : o;
            return S || (S = new Cr()), y(ke, be, c, g, S);
          }
        }
        return ae ? (S || (S = new Cr()), WO(a, o, c, g, y, S)) : !1;
      }
      function yO(a) {
        return gt(a) && zt(a) == ne;
      }
      function wc(a, o, c, g) {
        var y = c.length, S = y, P = !g;
        if (a == null)
          return !S;
        for (a = nt(a); y--; ) {
          var R = c[y];
          if (P && R[2] ? R[1] !== a[R[0]] : !(R[0] in a))
            return !1;
        }
        for (; ++y < S; ) {
          R = c[y];
          var L = R[0], G = a[L], Q = R[1];
          if (P && R[2]) {
            if (G === r && !(L in a))
              return !1;
          } else {
            var Y = new Cr();
            if (g)
              var ae = g(G, Q, L, a, o, Y);
            if (!(ae === r ? bo(Q, G, O | T, g, Y) : ae))
              return !1;
          }
        }
        return !0;
      }
      function qh(a) {
        if (!pt(a) || eT(a))
          return !1;
        var o = fn(a) ? y0 : l1;
        return o.test(ba(a));
      }
      function bO(a) {
        return gt(a) && Wt(a) == an;
      }
      function EO(a) {
        return gt(a) && zt(a) == Ht;
      }
      function wO(a) {
        return gt(a) && fl(a.length) && !!st[Wt(a)];
      }
      function jh(a) {
        return typeof a == "function" ? a : a == null ? er : typeof a == "object" ? $e(a) ? Vh(a[0], a[1]) : Wh(a) : dm(a);
      }
      function Sc(a) {
        if (!So(a))
          return O0(a);
        var o = [];
        for (var c in nt(a))
          Je.call(a, c) && c != "constructor" && o.push(c);
        return o;
      }
      function SO(a) {
        if (!pt(a))
          return aT(a);
        var o = So(a), c = [];
        for (var g in a)
          g == "constructor" && (o || !Je.call(a, g)) || c.push(g);
        return c;
      }
      function _c(a, o) {
        return a < o;
      }
      function Hh(a, o) {
        var c = -1, g = Jt(a) ? q(a.length) : [];
        return zn(a, function(y, S, P) {
          g[++c] = o(y, S, P);
        }), g;
      }
      function Wh(a) {
        var o = Fc(a);
        return o.length == 1 && o[0][2] ? Tg(o[0][0], o[0][1]) : function(c) {
          return c === a || wc(c, a, o);
        };
      }
      function Vh(a, o) {
        return Uc(a) && Og(o) ? Tg(Wr(a), o) : function(c) {
          var g = Yc(c, a);
          return g === r && g === o ? Xc(c, a) : bo(o, g, O | T);
        };
      }
      function Ys(a, o, c, g, y) {
        a !== o && vc(o, function(S, P) {
          if (y || (y = new Cr()), pt(S))
            _O(a, o, P, c, Ys, g, y);
          else {
            var R = g ? g(qc(a, P), S, P + "", a, o, y) : r;
            R === r && (R = S), gc(a, P, R);
          }
        }, Zt);
      }
      function _O(a, o, c, g, y, S, P) {
        var R = qc(a, c), L = qc(o, c), G = P.get(L);
        if (G) {
          gc(a, c, G);
          return;
        }
        var Q = S ? S(R, L, c + "", a, o, P) : r, Y = Q === r;
        if (Y) {
          var ae = $e(L), de = !ae && Wn(L), ye = !ae && !de && gi(L);
          Q = L, ae || de || ye ? $e(R) ? Q = R : yt(R) ? Q = Xt(R) : de ? (Y = !1, Q = ag(L, !0)) : ye ? (Y = !1, Q = ig(L, !0)) : Q = [] : Oo(L) || Ea(L) ? (Q = R, Ea(R) ? Q = tm(R) : (!pt(R) || fn(R)) && (Q = _g(L))) : Y = !1;
        }
        Y && (P.set(L, Q), y(Q, L, g, S, P), P.delete(L)), gc(a, c, Q);
      }
      function Gh(a, o) {
        var c = a.length;
        if (c)
          return o += o < 0 ? c : 0, dn(o, c) ? a[o] : r;
      }
      function Qh(a, o, c) {
        o.length ? o = ft(o, function(S) {
          return $e(S) ? function(P) {
            return va(P, S.length === 1 ? S[0] : S);
          } : S;
        }) : o = [er];
        var g = -1;
        o = ft(o, ar(ve()));
        var y = Hh(a, function(S, P, R) {
          var L = ft(o, function(G) {
            return G(S);
          });
          return { criteria: L, index: ++g, value: S };
        });
        return Y1(y, function(S, P) {
          return MO(S, P, c);
        });
      }
      function OO(a, o) {
        return Kh(a, o, function(c, g) {
          return Xc(a, g);
        });
      }
      function Kh(a, o, c) {
        for (var g = -1, y = o.length, S = {}; ++g < y; ) {
          var P = o[g], R = va(a, P);
          c(R, P) && Eo(S, jn(P, a), R);
        }
        return S;
      }
      function TO(a) {
        return function(o) {
          return va(o, a);
        };
      }
      function Oc(a, o, c, g) {
        var y = g ? K1 : ai, S = -1, P = o.length, R = a;
        for (a === o && (o = Xt(o)), c && (R = ft(a, ar(c))); ++S < P; )
          for (var L = 0, G = o[S], Q = c ? c(G) : G; (L = y(R, Q, L, g)) > -1; )
            R !== a && Us.call(R, L, 1), Us.call(a, L, 1);
        return a;
      }
      function Yh(a, o) {
        for (var c = a ? o.length : 0, g = c - 1; c--; ) {
          var y = o[c];
          if (c == g || y !== S) {
            var S = y;
            dn(y) ? Us.call(a, y, 1) : Ac(a, y);
          }
        }
        return a;
      }
      function Tc(a, o) {
        return a + js($h() * (o - a + 1));
      }
      function xO(a, o, c, g) {
        for (var y = -1, S = Pt(qs((o - a) / (c || 1)), 0), P = q(S); S--; )
          P[g ? S : ++y] = a, a += c;
        return P;
      }
      function xc(a, o) {
        var c = "";
        if (!a || o < 1 || o > ze)
          return c;
        do
          o % 2 && (c += a), o = js(o / 2), o && (a += a);
        while (o);
        return c;
      }
      function De(a, o) {
        return jc(xg(a, o, er), a + "");
      }
      function PO(a) {
        return Ih(mi(a));
      }
      function AO(a, o) {
        var c = mi(a);
        return ol(c, ma(o, 0, c.length));
      }
      function Eo(a, o, c, g) {
        if (!pt(a))
          return a;
        o = jn(o, a);
        for (var y = -1, S = o.length, P = S - 1, R = a; R != null && ++y < S; ) {
          var L = Wr(o[y]), G = c;
          if (L === "__proto__" || L === "constructor" || L === "prototype")
            return a;
          if (y != P) {
            var Q = R[L];
            G = g ? g(Q, L, R) : r, G === r && (G = pt(Q) ? Q : dn(o[y + 1]) ? [] : {});
          }
          mo(R, L, G), R = R[L];
        }
        return a;
      }
      var Xh = Hs ? function(a, o) {
        return Hs.set(a, o), a;
      } : er, CO = zs ? function(a, o) {
        return zs(a, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Zc(o),
          writable: !0
        });
      } : er;
      function $O(a) {
        return ol(mi(a));
      }
      function wr(a, o, c) {
        var g = -1, y = a.length;
        o < 0 && (o = -o > y ? 0 : y + o), c = c > y ? y : c, c < 0 && (c += y), y = o > c ? 0 : c - o >>> 0, o >>>= 0;
        for (var S = q(y); ++g < y; )
          S[g] = a[g + o];
        return S;
      }
      function RO(a, o) {
        var c;
        return zn(a, function(g, y, S) {
          return c = o(g, y, S), !c;
        }), !!c;
      }
      function Xs(a, o, c) {
        var g = 0, y = a == null ? g : a.length;
        if (typeof o == "number" && o === o && y <= ge) {
          for (; g < y; ) {
            var S = g + y >>> 1, P = a[S];
            P !== null && !or(P) && (c ? P <= o : P < o) ? g = S + 1 : y = S;
          }
          return y;
        }
        return Pc(a, o, er, c);
      }
      function Pc(a, o, c, g) {
        var y = 0, S = a == null ? 0 : a.length;
        if (S === 0)
          return 0;
        o = c(o);
        for (var P = o !== o, R = o === null, L = or(o), G = o === r; y < S; ) {
          var Q = js((y + S) / 2), Y = c(a[Q]), ae = Y !== r, de = Y === null, ye = Y === Y, ke = or(Y);
          if (P)
            var be = g || ye;
          else
            G ? be = ye && (g || ae) : R ? be = ye && ae && (g || !de) : L ? be = ye && ae && !de && (g || !ke) : de || ke ? be = !1 : be = g ? Y <= o : Y < o;
          be ? y = Q + 1 : S = Q;
        }
        return Ut(S, we);
      }
      function Jh(a, o) {
        for (var c = -1, g = a.length, y = 0, S = []; ++c < g; ) {
          var P = a[c], R = o ? o(P) : P;
          if (!c || !$r(R, L)) {
            var L = R;
            S[y++] = P === 0 ? 0 : P;
          }
        }
        return S;
      }
      function Zh(a) {
        return typeof a == "number" ? a : or(a) ? K : +a;
      }
      function ir(a) {
        if (typeof a == "string")
          return a;
        if ($e(a))
          return ft(a, ir) + "";
        if (or(a))
          return Rh ? Rh.call(a) : "";
        var o = a + "";
        return o == "0" && 1 / a == -Te ? "-0" : o;
      }
      function qn(a, o, c) {
        var g = -1, y = $s, S = a.length, P = !0, R = [], L = R;
        if (c)
          P = !1, y = rc;
        else if (S >= i) {
          var G = o ? null : qO(a);
          if (G)
            return Ns(G);
          P = !1, y = uo, L = new ga();
        } else
          L = o ? [] : R;
        e:
          for (; ++g < S; ) {
            var Q = a[g], Y = o ? o(Q) : Q;
            if (Q = c || Q !== 0 ? Q : 0, P && Y === Y) {
              for (var ae = L.length; ae--; )
                if (L[ae] === Y)
                  continue e;
              o && L.push(Y), R.push(Q);
            } else
              y(L, Y, c) || (L !== R && L.push(Y), R.push(Q));
          }
        return R;
      }
      function Ac(a, o) {
        return o = jn(o, a), a = Pg(a, o), a == null || delete a[Wr(Sr(o))];
      }
      function eg(a, o, c, g) {
        return Eo(a, o, c(va(a, o)), g);
      }
      function Js(a, o, c, g) {
        for (var y = a.length, S = g ? y : -1; (g ? S-- : ++S < y) && o(a[S], S, a); )
          ;
        return c ? wr(a, g ? 0 : S, g ? S + 1 : y) : wr(a, g ? S + 1 : 0, g ? y : S);
      }
      function tg(a, o) {
        var c = a;
        return c instanceof Fe && (c = c.value()), nc(o, function(g, y) {
          return y.func.apply(y.thisArg, Fn([g], y.args));
        }, c);
      }
      function Cc(a, o, c) {
        var g = a.length;
        if (g < 2)
          return g ? qn(a[0]) : [];
        for (var y = -1, S = q(g); ++y < g; )
          for (var P = a[y], R = -1; ++R < g; )
            R != y && (S[y] = vo(S[y] || P, a[R], o, c));
        return qn(Mt(S, 1), o, c);
      }
      function rg(a, o, c) {
        for (var g = -1, y = a.length, S = o.length, P = {}; ++g < y; ) {
          var R = g < S ? o[g] : r;
          c(P, a[g], R);
        }
        return P;
      }
      function $c(a) {
        return yt(a) ? a : [];
      }
      function Rc(a) {
        return typeof a == "function" ? a : er;
      }
      function jn(a, o) {
        return $e(a) ? a : Uc(a, o) ? [a] : Rg(Ve(a));
      }
      var NO = De;
      function Hn(a, o, c) {
        var g = a.length;
        return c = c === r ? g : c, !o && c >= g ? a : wr(a, o, c);
      }
      var ng = b0 || function(a) {
        return Dt.clearTimeout(a);
      };
      function ag(a, o) {
        if (o)
          return a.slice();
        var c = a.length, g = Th ? Th(c) : new a.constructor(c);
        return a.copy(g), g;
      }
      function Nc(a) {
        var o = new a.constructor(a.byteLength);
        return new Fs(o).set(new Fs(a)), o;
      }
      function IO(a, o) {
        var c = o ? Nc(a.buffer) : a.buffer;
        return new a.constructor(c, a.byteOffset, a.byteLength);
      }
      function kO(a) {
        var o = new a.constructor(a.source, zp.exec(a));
        return o.lastIndex = a.lastIndex, o;
      }
      function DO(a) {
        return go ? nt(go.call(a)) : {};
      }
      function ig(a, o) {
        var c = o ? Nc(a.buffer) : a.buffer;
        return new a.constructor(c, a.byteOffset, a.length);
      }
      function og(a, o) {
        if (a !== o) {
          var c = a !== r, g = a === null, y = a === a, S = or(a), P = o !== r, R = o === null, L = o === o, G = or(o);
          if (!R && !G && !S && a > o || S && P && L && !R && !G || g && P && L || !c && L || !y)
            return 1;
          if (!g && !S && !G && a < o || G && c && y && !g && !S || R && c && y || !P && y || !L)
            return -1;
        }
        return 0;
      }
      function MO(a, o, c) {
        for (var g = -1, y = a.criteria, S = o.criteria, P = y.length, R = c.length; ++g < P; ) {
          var L = og(y[g], S[g]);
          if (L) {
            if (g >= R)
              return L;
            var G = c[g];
            return L * (G == "desc" ? -1 : 1);
          }
        }
        return a.index - o.index;
      }
      function sg(a, o, c, g) {
        for (var y = -1, S = a.length, P = c.length, R = -1, L = o.length, G = Pt(S - P, 0), Q = q(L + G), Y = !g; ++R < L; )
          Q[R] = o[R];
        for (; ++y < P; )
          (Y || y < S) && (Q[c[y]] = a[y]);
        for (; G--; )
          Q[R++] = a[y++];
        return Q;
      }
      function lg(a, o, c, g) {
        for (var y = -1, S = a.length, P = -1, R = c.length, L = -1, G = o.length, Q = Pt(S - R, 0), Y = q(Q + G), ae = !g; ++y < Q; )
          Y[y] = a[y];
        for (var de = y; ++L < G; )
          Y[de + L] = o[L];
        for (; ++P < R; )
          (ae || y < S) && (Y[de + c[P]] = a[y++]);
        return Y;
      }
      function Xt(a, o) {
        var c = -1, g = a.length;
        for (o || (o = q(g)); ++c < g; )
          o[c] = a[c];
        return o;
      }
      function Hr(a, o, c, g) {
        var y = !c;
        c || (c = {});
        for (var S = -1, P = o.length; ++S < P; ) {
          var R = o[S], L = g ? g(c[R], a[R], R, c, a) : r;
          L === r && (L = a[R]), y ? ln(c, R, L) : mo(c, R, L);
        }
        return c;
      }
      function LO(a, o) {
        return Hr(a, Bc(a), o);
      }
      function FO(a, o) {
        return Hr(a, wg(a), o);
      }
      function Zs(a, o) {
        return function(c, g) {
          var y = $e(c) ? j1 : oO, S = o ? o() : {};
          return y(c, a, ve(g, 2), S);
        };
      }
      function fi(a) {
        return De(function(o, c) {
          var g = -1, y = c.length, S = y > 1 ? c[y - 1] : r, P = y > 2 ? c[2] : r;
          for (S = a.length > 3 && typeof S == "function" ? (y--, S) : r, P && Vt(c[0], c[1], P) && (S = y < 3 ? r : S, y = 1), o = nt(o); ++g < y; ) {
            var R = c[g];
            R && a(o, R, g, S);
          }
          return o;
        });
      }
      function ug(a, o) {
        return function(c, g) {
          if (c == null)
            return c;
          if (!Jt(c))
            return a(c, g);
          for (var y = c.length, S = o ? y : -1, P = nt(c); (o ? S-- : ++S < y) && g(P[S], S, P) !== !1; )
            ;
          return c;
        };
      }
      function cg(a) {
        return function(o, c, g) {
          for (var y = -1, S = nt(o), P = g(o), R = P.length; R--; ) {
            var L = P[a ? R : ++y];
            if (c(S[L], L, S) === !1)
              break;
          }
          return o;
        };
      }
      function BO(a, o, c) {
        var g = o & _, y = wo(a);
        function S() {
          var P = this && this !== Dt && this instanceof S ? y : a;
          return P.apply(g ? c : this, arguments);
        }
        return S;
      }
      function dg(a) {
        return function(o) {
          o = Ve(o);
          var c = ii(o) ? Ar(o) : r, g = c ? c[0] : o.charAt(0), y = c ? Hn(c, 1).join("") : o.slice(1);
          return g[a]() + y;
        };
      }
      function pi(a) {
        return function(o) {
          return nc(um(lm(o).replace(C1, "")), a, "");
        };
      }
      function wo(a) {
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return new a();
            case 1:
              return new a(o[0]);
            case 2:
              return new a(o[0], o[1]);
            case 3:
              return new a(o[0], o[1], o[2]);
            case 4:
              return new a(o[0], o[1], o[2], o[3]);
            case 5:
              return new a(o[0], o[1], o[2], o[3], o[4]);
            case 6:
              return new a(o[0], o[1], o[2], o[3], o[4], o[5]);
            case 7:
              return new a(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
          }
          var c = di(a.prototype), g = a.apply(c, o);
          return pt(g) ? g : c;
        };
      }
      function UO(a, o, c) {
        var g = wo(a);
        function y() {
          for (var S = arguments.length, P = q(S), R = S, L = hi(y); R--; )
            P[R] = arguments[R];
          var G = S < 3 && P[0] !== L && P[S - 1] !== L ? [] : Bn(P, L);
          if (S -= G.length, S < c)
            return mg(
              a,
              o,
              el,
              y.placeholder,
              r,
              P,
              G,
              r,
              r,
              c - S
            );
          var Q = this && this !== Dt && this instanceof y ? g : a;
          return nr(Q, this, P);
        }
        return y;
      }
      function fg(a) {
        return function(o, c, g) {
          var y = nt(o);
          if (!Jt(o)) {
            var S = ve(c, 3);
            o = $t(o), c = function(R) {
              return S(y[R], R, y);
            };
          }
          var P = a(o, c, g);
          return P > -1 ? y[S ? o[P] : P] : r;
        };
      }
      function pg(a) {
        return cn(function(o) {
          var c = o.length, g = c, y = br.prototype.thru;
          for (a && o.reverse(); g--; ) {
            var S = o[g];
            if (typeof S != "function")
              throw new yr(l);
            if (y && !P && al(S) == "wrapper")
              var P = new br([], !0);
          }
          for (g = P ? g : c; ++g < c; ) {
            S = o[g];
            var R = al(S), L = R == "wrapper" ? Lc(S) : r;
            L && zc(L[0]) && L[1] == (x | k | N | $) && !L[4].length && L[9] == 1 ? P = P[al(L[0])].apply(P, L[3]) : P = S.length == 1 && zc(S) ? P[R]() : P.thru(S);
          }
          return function() {
            var G = arguments, Q = G[0];
            if (P && G.length == 1 && $e(Q))
              return P.plant(Q).value();
            for (var Y = 0, ae = c ? o[Y].apply(this, G) : Q; ++Y < c; )
              ae = o[Y].call(this, ae);
            return ae;
          };
        });
      }
      function el(a, o, c, g, y, S, P, R, L, G) {
        var Q = o & x, Y = o & _, ae = o & A, de = o & (k | U), ye = o & I, ke = ae ? r : wo(a);
        function be() {
          for (var Me = arguments.length, Be = q(Me), sr = Me; sr--; )
            Be[sr] = arguments[sr];
          if (de)
            var Gt = hi(be), lr = J1(Be, Gt);
          if (g && (Be = sg(Be, g, y, de)), S && (Be = lg(Be, S, P, de)), Me -= lr, de && Me < G) {
            var bt = Bn(Be, Gt);
            return mg(
              a,
              o,
              el,
              be.placeholder,
              c,
              Be,
              bt,
              R,
              L,
              G - Me
            );
          }
          var Rr = Y ? c : this, hn = ae ? Rr[a] : a;
          return Me = Be.length, R ? Be = oT(Be, R) : ye && Me > 1 && Be.reverse(), Q && L < Me && (Be.length = L), this && this !== Dt && this instanceof be && (hn = ke || wo(hn)), hn.apply(Rr, Be);
        }
        return be;
      }
      function hg(a, o) {
        return function(c, g) {
          return hO(c, a, o(g), {});
        };
      }
      function tl(a, o) {
        return function(c, g) {
          var y;
          if (c === r && g === r)
            return o;
          if (c !== r && (y = c), g !== r) {
            if (y === r)
              return g;
            typeof c == "string" || typeof g == "string" ? (c = ir(c), g = ir(g)) : (c = Zh(c), g = Zh(g)), y = a(c, g);
          }
          return y;
        };
      }
      function Ic(a) {
        return cn(function(o) {
          return o = ft(o, ar(ve())), De(function(c) {
            var g = this;
            return a(o, function(y) {
              return nr(y, g, c);
            });
          });
        });
      }
      function rl(a, o) {
        o = o === r ? " " : ir(o);
        var c = o.length;
        if (c < 2)
          return c ? xc(o, a) : o;
        var g = xc(o, qs(a / oi(o)));
        return ii(o) ? Hn(Ar(g), 0, a).join("") : g.slice(0, a);
      }
      function zO(a, o, c, g) {
        var y = o & _, S = wo(a);
        function P() {
          for (var R = -1, L = arguments.length, G = -1, Q = g.length, Y = q(Q + L), ae = this && this !== Dt && this instanceof P ? S : a; ++G < Q; )
            Y[G] = g[G];
          for (; L--; )
            Y[G++] = arguments[++R];
          return nr(ae, y ? c : this, Y);
        }
        return P;
      }
      function gg(a) {
        return function(o, c, g) {
          return g && typeof g != "number" && Vt(o, c, g) && (c = g = r), o = pn(o), c === r ? (c = o, o = 0) : c = pn(c), g = g === r ? o < c ? 1 : -1 : pn(g), xO(o, c, g, a);
        };
      }
      function nl(a) {
        return function(o, c) {
          return typeof o == "string" && typeof c == "string" || (o = _r(o), c = _r(c)), a(o, c);
        };
      }
      function mg(a, o, c, g, y, S, P, R, L, G) {
        var Q = o & k, Y = Q ? P : r, ae = Q ? r : P, de = Q ? S : r, ye = Q ? r : S;
        o |= Q ? N : F, o &= ~(Q ? F : N), o & M || (o &= ~(_ | A));
        var ke = [
          a,
          o,
          y,
          de,
          Y,
          ye,
          ae,
          R,
          L,
          G
        ], be = c.apply(r, ke);
        return zc(a) && Ag(be, ke), be.placeholder = g, Cg(be, a, o);
      }
      function kc(a) {
        var o = xt[a];
        return function(c, g) {
          if (c = _r(c), g = g == null ? 0 : Ut(Ie(g), 292), g && Ch(c)) {
            var y = (Ve(c) + "e").split("e"), S = o(y[0] + "e" + (+y[1] + g));
            return y = (Ve(S) + "e").split("e"), +(y[0] + "e" + (+y[1] - g));
          }
          return o(c);
        };
      }
      var qO = ui && 1 / Ns(new ui([, -0]))[1] == Te ? function(a) {
        return new ui(a);
      } : rd;
      function vg(a) {
        return function(o) {
          var c = zt(o);
          return c == ne ? cc(o) : c == Ht ? i0(o) : X1(o, a(o));
        };
      }
      function un(a, o, c, g, y, S, P, R) {
        var L = o & A;
        if (!L && typeof a != "function")
          throw new yr(l);
        var G = g ? g.length : 0;
        if (G || (o &= ~(N | F), g = y = r), P = P === r ? P : Pt(Ie(P), 0), R = R === r ? R : Ie(R), G -= y ? y.length : 0, o & F) {
          var Q = g, Y = y;
          g = y = r;
        }
        var ae = L ? r : Lc(a), de = [
          a,
          o,
          c,
          g,
          y,
          Q,
          Y,
          S,
          P,
          R
        ];
        if (ae && nT(de, ae), a = de[0], o = de[1], c = de[2], g = de[3], y = de[4], R = de[9] = de[9] === r ? L ? 0 : a.length : Pt(de[9] - G, 0), !R && o & (k | U) && (o &= ~(k | U)), !o || o == _)
          var ye = BO(a, o, c);
        else
          o == k || o == U ? ye = UO(a, o, R) : (o == N || o == (_ | N)) && !y.length ? ye = zO(a, o, c, g) : ye = el.apply(r, de);
        var ke = ae ? Xh : Ag;
        return Cg(ke(ye, de), a, o);
      }
      function yg(a, o, c, g) {
        return a === r || $r(a, li[c]) && !Je.call(g, c) ? o : a;
      }
      function bg(a, o, c, g, y, S) {
        return pt(a) && pt(o) && (S.set(o, a), Ys(a, o, r, bg, S), S.delete(o)), a;
      }
      function jO(a) {
        return Oo(a) ? r : a;
      }
      function Eg(a, o, c, g, y, S) {
        var P = c & O, R = a.length, L = o.length;
        if (R != L && !(P && L > R))
          return !1;
        var G = S.get(a), Q = S.get(o);
        if (G && Q)
          return G == o && Q == a;
        var Y = -1, ae = !0, de = c & T ? new ga() : r;
        for (S.set(a, o), S.set(o, a); ++Y < R; ) {
          var ye = a[Y], ke = o[Y];
          if (g)
            var be = P ? g(ke, ye, Y, o, a, S) : g(ye, ke, Y, a, o, S);
          if (be !== r) {
            if (be)
              continue;
            ae = !1;
            break;
          }
          if (de) {
            if (!ac(o, function(Me, Be) {
              if (!uo(de, Be) && (ye === Me || y(ye, Me, c, g, S)))
                return de.push(Be);
            })) {
              ae = !1;
              break;
            }
          } else if (!(ye === ke || y(ye, ke, c, g, S))) {
            ae = !1;
            break;
          }
        }
        return S.delete(a), S.delete(o), ae;
      }
      function HO(a, o, c, g, y, S, P) {
        switch (c) {
          case ri:
            if (a.byteLength != o.byteLength || a.byteOffset != o.byteOffset)
              return !1;
            a = a.buffer, o = o.buffer;
          case lo:
            return !(a.byteLength != o.byteLength || !S(new Fs(a), new Fs(o)));
          case Pe:
          case Ae:
          case Yt:
            return $r(+a, +o);
          case re:
            return a.name == o.name && a.message == o.message;
          case an:
          case da:
            return a == o + "";
          case ne:
            var R = cc;
          case Ht:
            var L = g & O;
            if (R || (R = Ns), a.size != o.size && !L)
              return !1;
            var G = P.get(a);
            if (G)
              return G == o;
            g |= T, P.set(a, o);
            var Q = Eg(R(a), R(o), g, y, S, P);
            return P.delete(a), Q;
          case qr:
            if (go)
              return go.call(a) == go.call(o);
        }
        return !1;
      }
      function WO(a, o, c, g, y, S) {
        var P = c & O, R = Dc(a), L = R.length, G = Dc(o), Q = G.length;
        if (L != Q && !P)
          return !1;
        for (var Y = L; Y--; ) {
          var ae = R[Y];
          if (!(P ? ae in o : Je.call(o, ae)))
            return !1;
        }
        var de = S.get(a), ye = S.get(o);
        if (de && ye)
          return de == o && ye == a;
        var ke = !0;
        S.set(a, o), S.set(o, a);
        for (var be = P; ++Y < L; ) {
          ae = R[Y];
          var Me = a[ae], Be = o[ae];
          if (g)
            var sr = P ? g(Be, Me, ae, o, a, S) : g(Me, Be, ae, a, o, S);
          if (!(sr === r ? Me === Be || y(Me, Be, c, g, S) : sr)) {
            ke = !1;
            break;
          }
          be || (be = ae == "constructor");
        }
        if (ke && !be) {
          var Gt = a.constructor, lr = o.constructor;
          Gt != lr && "constructor" in a && "constructor" in o && !(typeof Gt == "function" && Gt instanceof Gt && typeof lr == "function" && lr instanceof lr) && (ke = !1);
        }
        return S.delete(a), S.delete(o), ke;
      }
      function cn(a) {
        return jc(xg(a, r, Dg), a + "");
      }
      function Dc(a) {
        return Uh(a, $t, Bc);
      }
      function Mc(a) {
        return Uh(a, Zt, wg);
      }
      var Lc = Hs ? function(a) {
        return Hs.get(a);
      } : rd;
      function al(a) {
        for (var o = a.name + "", c = ci[o], g = Je.call(ci, o) ? c.length : 0; g--; ) {
          var y = c[g], S = y.func;
          if (S == null || S == a)
            return y.name;
        }
        return o;
      }
      function hi(a) {
        var o = Je.call(E, "placeholder") ? E : a;
        return o.placeholder;
      }
      function ve() {
        var a = E.iteratee || ed;
        return a = a === ed ? jh : a, arguments.length ? a(arguments[0], arguments[1]) : a;
      }
      function il(a, o) {
        var c = a.__data__;
        return ZO(o) ? c[typeof o == "string" ? "string" : "hash"] : c.map;
      }
      function Fc(a) {
        for (var o = $t(a), c = o.length; c--; ) {
          var g = o[c], y = a[g];
          o[c] = [g, y, Og(y)];
        }
        return o;
      }
      function ya(a, o) {
        var c = r0(a, o);
        return qh(c) ? c : r;
      }
      function VO(a) {
        var o = Je.call(a, pa), c = a[pa];
        try {
          a[pa] = r;
          var g = !0;
        } catch {
        }
        var y = Ms.call(a);
        return g && (o ? a[pa] = c : delete a[pa]), y;
      }
      var Bc = fc ? function(a) {
        return a == null ? [] : (a = nt(a), Ln(fc(a), function(o) {
          return Ph.call(a, o);
        }));
      } : nd, wg = fc ? function(a) {
        for (var o = []; a; )
          Fn(o, Bc(a)), a = Bs(a);
        return o;
      } : nd, zt = Wt;
      (pc && zt(new pc(new ArrayBuffer(1))) != ri || fo && zt(new fo()) != ne || hc && zt(hc.resolve()) != ca || ui && zt(new ui()) != Ht || po && zt(new po()) != so) && (zt = function(a) {
        var o = Wt(a), c = o == Bt ? a.constructor : r, g = c ? ba(c) : "";
        if (g)
          switch (g) {
            case A0:
              return ri;
            case C0:
              return ne;
            case $0:
              return ca;
            case R0:
              return Ht;
            case N0:
              return so;
          }
        return o;
      });
      function GO(a, o, c) {
        for (var g = -1, y = c.length; ++g < y; ) {
          var S = c[g], P = S.size;
          switch (S.type) {
            case "drop":
              a += P;
              break;
            case "dropRight":
              o -= P;
              break;
            case "take":
              o = Ut(o, a + P);
              break;
            case "takeRight":
              a = Pt(a, o - P);
              break;
          }
        }
        return { start: a, end: o };
      }
      function QO(a) {
        var o = a.match(e1);
        return o ? o[1].split(t1) : [];
      }
      function Sg(a, o, c) {
        o = jn(o, a);
        for (var g = -1, y = o.length, S = !1; ++g < y; ) {
          var P = Wr(o[g]);
          if (!(S = a != null && c(a, P)))
            break;
          a = a[P];
        }
        return S || ++g != y ? S : (y = a == null ? 0 : a.length, !!y && fl(y) && dn(P, y) && ($e(a) || Ea(a)));
      }
      function KO(a) {
        var o = a.length, c = new a.constructor(o);
        return o && typeof a[0] == "string" && Je.call(a, "index") && (c.index = a.index, c.input = a.input), c;
      }
      function _g(a) {
        return typeof a.constructor == "function" && !So(a) ? di(Bs(a)) : {};
      }
      function YO(a, o, c) {
        var g = a.constructor;
        switch (o) {
          case lo:
            return Nc(a);
          case Pe:
          case Ae:
            return new g(+a);
          case ri:
            return IO(a, c);
          case Fu:
          case Bu:
          case Uu:
          case zu:
          case qu:
          case ju:
          case Hu:
          case Wu:
          case Vu:
            return ig(a, c);
          case ne:
            return new g();
          case Yt:
          case da:
            return new g(a);
          case an:
            return kO(a);
          case Ht:
            return new g();
          case qr:
            return DO(a);
        }
      }
      function XO(a, o) {
        var c = o.length;
        if (!c)
          return a;
        var g = c - 1;
        return o[g] = (c > 1 ? "& " : "") + o[g], o = o.join(c > 2 ? ", " : " "), a.replace(Z_, `{
/* [wrapped with ` + o + `] */
`);
      }
      function JO(a) {
        return $e(a) || Ea(a) || !!(Ah && a && a[Ah]);
      }
      function dn(a, o) {
        var c = typeof a;
        return o = o ?? ze, !!o && (c == "number" || c != "symbol" && c1.test(a)) && a > -1 && a % 1 == 0 && a < o;
      }
      function Vt(a, o, c) {
        if (!pt(c))
          return !1;
        var g = typeof o;
        return (g == "number" ? Jt(c) && dn(o, c.length) : g == "string" && o in c) ? $r(c[o], a) : !1;
      }
      function Uc(a, o) {
        if ($e(a))
          return !1;
        var c = typeof a;
        return c == "number" || c == "symbol" || c == "boolean" || a == null || or(a) ? !0 : K_.test(a) || !Q_.test(a) || o != null && a in nt(o);
      }
      function ZO(a) {
        var o = typeof a;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? a !== "__proto__" : a === null;
      }
      function zc(a) {
        var o = al(a), c = E[o];
        if (typeof c != "function" || !(o in Fe.prototype))
          return !1;
        if (a === c)
          return !0;
        var g = Lc(c);
        return !!g && a === g[0];
      }
      function eT(a) {
        return !!Oh && Oh in a;
      }
      var tT = ks ? fn : ad;
      function So(a) {
        var o = a && a.constructor, c = typeof o == "function" && o.prototype || li;
        return a === c;
      }
      function Og(a) {
        return a === a && !pt(a);
      }
      function Tg(a, o) {
        return function(c) {
          return c == null ? !1 : c[a] === o && (o !== r || a in nt(c));
        };
      }
      function rT(a) {
        var o = cl(a, function(g) {
          return c.size === p && c.clear(), g;
        }), c = o.cache;
        return o;
      }
      function nT(a, o) {
        var c = a[1], g = o[1], y = c | g, S = y < (_ | A | x), P = g == x && c == k || g == x && c == $ && a[7].length <= o[8] || g == (x | $) && o[7].length <= o[8] && c == k;
        if (!(S || P))
          return a;
        g & _ && (a[2] = o[2], y |= c & _ ? 0 : M);
        var R = o[3];
        if (R) {
          var L = a[3];
          a[3] = L ? sg(L, R, o[4]) : R, a[4] = L ? Bn(a[3], h) : o[4];
        }
        return R = o[5], R && (L = a[5], a[5] = L ? lg(L, R, o[6]) : R, a[6] = L ? Bn(a[5], h) : o[6]), R = o[7], R && (a[7] = R), g & x && (a[8] = a[8] == null ? o[8] : Ut(a[8], o[8])), a[9] == null && (a[9] = o[9]), a[0] = o[0], a[1] = y, a;
      }
      function aT(a) {
        var o = [];
        if (a != null)
          for (var c in nt(a))
            o.push(c);
        return o;
      }
      function iT(a) {
        return Ms.call(a);
      }
      function xg(a, o, c) {
        return o = Pt(o === r ? a.length - 1 : o, 0), function() {
          for (var g = arguments, y = -1, S = Pt(g.length - o, 0), P = q(S); ++y < S; )
            P[y] = g[o + y];
          y = -1;
          for (var R = q(o + 1); ++y < o; )
            R[y] = g[y];
          return R[o] = c(P), nr(a, this, R);
        };
      }
      function Pg(a, o) {
        return o.length < 2 ? a : va(a, wr(o, 0, -1));
      }
      function oT(a, o) {
        for (var c = a.length, g = Ut(o.length, c), y = Xt(a); g--; ) {
          var S = o[g];
          a[g] = dn(S, c) ? y[S] : r;
        }
        return a;
      }
      function qc(a, o) {
        if (!(o === "constructor" && typeof a[o] == "function") && o != "__proto__")
          return a[o];
      }
      var Ag = $g(Xh), _o = w0 || function(a, o) {
        return Dt.setTimeout(a, o);
      }, jc = $g(CO);
      function Cg(a, o, c) {
        var g = o + "";
        return jc(a, XO(g, sT(QO(g), c)));
      }
      function $g(a) {
        var o = 0, c = 0;
        return function() {
          var g = T0(), y = W - (g - c);
          if (c = g, y > 0) {
            if (++o >= X)
              return arguments[0];
          } else
            o = 0;
          return a.apply(r, arguments);
        };
      }
      function ol(a, o) {
        var c = -1, g = a.length, y = g - 1;
        for (o = o === r ? g : o; ++c < o; ) {
          var S = Tc(c, y), P = a[S];
          a[S] = a[c], a[c] = P;
        }
        return a.length = o, a;
      }
      var Rg = rT(function(a) {
        var o = [];
        return a.charCodeAt(0) === 46 && o.push(""), a.replace(Y_, function(c, g, y, S) {
          o.push(y ? S.replace(a1, "$1") : g || c);
        }), o;
      });
      function Wr(a) {
        if (typeof a == "string" || or(a))
          return a;
        var o = a + "";
        return o == "0" && 1 / a == -Te ? "-0" : o;
      }
      function ba(a) {
        if (a != null) {
          try {
            return Ds.call(a);
          } catch {
          }
          try {
            return a + "";
          } catch {
          }
        }
        return "";
      }
      function sT(a, o) {
        return vr(fe, function(c) {
          var g = "_." + c[0];
          o & c[1] && !$s(a, g) && a.push(g);
        }), a.sort();
      }
      function Ng(a) {
        if (a instanceof Fe)
          return a.clone();
        var o = new br(a.__wrapped__, a.__chain__);
        return o.__actions__ = Xt(a.__actions__), o.__index__ = a.__index__, o.__values__ = a.__values__, o;
      }
      function lT(a, o, c) {
        (c ? Vt(a, o, c) : o === r) ? o = 1 : o = Pt(Ie(o), 0);
        var g = a == null ? 0 : a.length;
        if (!g || o < 1)
          return [];
        for (var y = 0, S = 0, P = q(qs(g / o)); y < g; )
          P[S++] = wr(a, y, y += o);
        return P;
      }
      function uT(a) {
        for (var o = -1, c = a == null ? 0 : a.length, g = 0, y = []; ++o < c; ) {
          var S = a[o];
          S && (y[g++] = S);
        }
        return y;
      }
      function cT() {
        var a = arguments.length;
        if (!a)
          return [];
        for (var o = q(a - 1), c = arguments[0], g = a; g--; )
          o[g - 1] = arguments[g];
        return Fn($e(c) ? Xt(c) : [c], Mt(o, 1));
      }
      var dT = De(function(a, o) {
        return yt(a) ? vo(a, Mt(o, 1, yt, !0)) : [];
      }), fT = De(function(a, o) {
        var c = Sr(o);
        return yt(c) && (c = r), yt(a) ? vo(a, Mt(o, 1, yt, !0), ve(c, 2)) : [];
      }), pT = De(function(a, o) {
        var c = Sr(o);
        return yt(c) && (c = r), yt(a) ? vo(a, Mt(o, 1, yt, !0), r, c) : [];
      });
      function hT(a, o, c) {
        var g = a == null ? 0 : a.length;
        return g ? (o = c || o === r ? 1 : Ie(o), wr(a, o < 0 ? 0 : o, g)) : [];
      }
      function gT(a, o, c) {
        var g = a == null ? 0 : a.length;
        return g ? (o = c || o === r ? 1 : Ie(o), o = g - o, wr(a, 0, o < 0 ? 0 : o)) : [];
      }
      function mT(a, o) {
        return a && a.length ? Js(a, ve(o, 3), !0, !0) : [];
      }
      function vT(a, o) {
        return a && a.length ? Js(a, ve(o, 3), !0) : [];
      }
      function yT(a, o, c, g) {
        var y = a == null ? 0 : a.length;
        return y ? (c && typeof c != "number" && Vt(a, o, c) && (c = 0, g = y), cO(a, o, c, g)) : [];
      }
      function Ig(a, o, c) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var y = c == null ? 0 : Ie(c);
        return y < 0 && (y = Pt(g + y, 0)), Rs(a, ve(o, 3), y);
      }
      function kg(a, o, c) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var y = g - 1;
        return c !== r && (y = Ie(c), y = c < 0 ? Pt(g + y, 0) : Ut(y, g - 1)), Rs(a, ve(o, 3), y, !0);
      }
      function Dg(a) {
        var o = a == null ? 0 : a.length;
        return o ? Mt(a, 1) : [];
      }
      function bT(a) {
        var o = a == null ? 0 : a.length;
        return o ? Mt(a, Te) : [];
      }
      function ET(a, o) {
        var c = a == null ? 0 : a.length;
        return c ? (o = o === r ? 1 : Ie(o), Mt(a, o)) : [];
      }
      function wT(a) {
        for (var o = -1, c = a == null ? 0 : a.length, g = {}; ++o < c; ) {
          var y = a[o];
          g[y[0]] = y[1];
        }
        return g;
      }
      function Mg(a) {
        return a && a.length ? a[0] : r;
      }
      function ST(a, o, c) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var y = c == null ? 0 : Ie(c);
        return y < 0 && (y = Pt(g + y, 0)), ai(a, o, y);
      }
      function _T(a) {
        var o = a == null ? 0 : a.length;
        return o ? wr(a, 0, -1) : [];
      }
      var OT = De(function(a) {
        var o = ft(a, $c);
        return o.length && o[0] === a[0] ? Ec(o) : [];
      }), TT = De(function(a) {
        var o = Sr(a), c = ft(a, $c);
        return o === Sr(c) ? o = r : c.pop(), c.length && c[0] === a[0] ? Ec(c, ve(o, 2)) : [];
      }), xT = De(function(a) {
        var o = Sr(a), c = ft(a, $c);
        return o = typeof o == "function" ? o : r, o && c.pop(), c.length && c[0] === a[0] ? Ec(c, r, o) : [];
      });
      function PT(a, o) {
        return a == null ? "" : _0.call(a, o);
      }
      function Sr(a) {
        var o = a == null ? 0 : a.length;
        return o ? a[o - 1] : r;
      }
      function AT(a, o, c) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var y = g;
        return c !== r && (y = Ie(c), y = y < 0 ? Pt(g + y, 0) : Ut(y, g - 1)), o === o ? s0(a, o, y) : Rs(a, mh, y, !0);
      }
      function CT(a, o) {
        return a && a.length ? Gh(a, Ie(o)) : r;
      }
      var $T = De(Lg);
      function Lg(a, o) {
        return a && a.length && o && o.length ? Oc(a, o) : a;
      }
      function RT(a, o, c) {
        return a && a.length && o && o.length ? Oc(a, o, ve(c, 2)) : a;
      }
      function NT(a, o, c) {
        return a && a.length && o && o.length ? Oc(a, o, r, c) : a;
      }
      var IT = cn(function(a, o) {
        var c = a == null ? 0 : a.length, g = mc(a, o);
        return Yh(a, ft(o, function(y) {
          return dn(y, c) ? +y : y;
        }).sort(og)), g;
      });
      function kT(a, o) {
        var c = [];
        if (!(a && a.length))
          return c;
        var g = -1, y = [], S = a.length;
        for (o = ve(o, 3); ++g < S; ) {
          var P = a[g];
          o(P, g, a) && (c.push(P), y.push(g));
        }
        return Yh(a, y), c;
      }
      function Hc(a) {
        return a == null ? a : P0.call(a);
      }
      function DT(a, o, c) {
        var g = a == null ? 0 : a.length;
        return g ? (c && typeof c != "number" && Vt(a, o, c) ? (o = 0, c = g) : (o = o == null ? 0 : Ie(o), c = c === r ? g : Ie(c)), wr(a, o, c)) : [];
      }
      function MT(a, o) {
        return Xs(a, o);
      }
      function LT(a, o, c) {
        return Pc(a, o, ve(c, 2));
      }
      function FT(a, o) {
        var c = a == null ? 0 : a.length;
        if (c) {
          var g = Xs(a, o);
          if (g < c && $r(a[g], o))
            return g;
        }
        return -1;
      }
      function BT(a, o) {
        return Xs(a, o, !0);
      }
      function UT(a, o, c) {
        return Pc(a, o, ve(c, 2), !0);
      }
      function zT(a, o) {
        var c = a == null ? 0 : a.length;
        if (c) {
          var g = Xs(a, o, !0) - 1;
          if ($r(a[g], o))
            return g;
        }
        return -1;
      }
      function qT(a) {
        return a && a.length ? Jh(a) : [];
      }
      function jT(a, o) {
        return a && a.length ? Jh(a, ve(o, 2)) : [];
      }
      function HT(a) {
        var o = a == null ? 0 : a.length;
        return o ? wr(a, 1, o) : [];
      }
      function WT(a, o, c) {
        return a && a.length ? (o = c || o === r ? 1 : Ie(o), wr(a, 0, o < 0 ? 0 : o)) : [];
      }
      function VT(a, o, c) {
        var g = a == null ? 0 : a.length;
        return g ? (o = c || o === r ? 1 : Ie(o), o = g - o, wr(a, o < 0 ? 0 : o, g)) : [];
      }
      function GT(a, o) {
        return a && a.length ? Js(a, ve(o, 3), !1, !0) : [];
      }
      function QT(a, o) {
        return a && a.length ? Js(a, ve(o, 3)) : [];
      }
      var KT = De(function(a) {
        return qn(Mt(a, 1, yt, !0));
      }), YT = De(function(a) {
        var o = Sr(a);
        return yt(o) && (o = r), qn(Mt(a, 1, yt, !0), ve(o, 2));
      }), XT = De(function(a) {
        var o = Sr(a);
        return o = typeof o == "function" ? o : r, qn(Mt(a, 1, yt, !0), r, o);
      });
      function JT(a) {
        return a && a.length ? qn(a) : [];
      }
      function ZT(a, o) {
        return a && a.length ? qn(a, ve(o, 2)) : [];
      }
      function ex(a, o) {
        return o = typeof o == "function" ? o : r, a && a.length ? qn(a, r, o) : [];
      }
      function Wc(a) {
        if (!(a && a.length))
          return [];
        var o = 0;
        return a = Ln(a, function(c) {
          if (yt(c))
            return o = Pt(c.length, o), !0;
        }), lc(o, function(c) {
          return ft(a, ic(c));
        });
      }
      function Fg(a, o) {
        if (!(a && a.length))
          return [];
        var c = Wc(a);
        return o == null ? c : ft(c, function(g) {
          return nr(o, r, g);
        });
      }
      var tx = De(function(a, o) {
        return yt(a) ? vo(a, o) : [];
      }), rx = De(function(a) {
        return Cc(Ln(a, yt));
      }), nx = De(function(a) {
        var o = Sr(a);
        return yt(o) && (o = r), Cc(Ln(a, yt), ve(o, 2));
      }), ax = De(function(a) {
        var o = Sr(a);
        return o = typeof o == "function" ? o : r, Cc(Ln(a, yt), r, o);
      }), ix = De(Wc);
      function ox(a, o) {
        return rg(a || [], o || [], mo);
      }
      function sx(a, o) {
        return rg(a || [], o || [], Eo);
      }
      var lx = De(function(a) {
        var o = a.length, c = o > 1 ? a[o - 1] : r;
        return c = typeof c == "function" ? (a.pop(), c) : r, Fg(a, c);
      });
      function Bg(a) {
        var o = E(a);
        return o.__chain__ = !0, o;
      }
      function ux(a, o) {
        return o(a), a;
      }
      function sl(a, o) {
        return o(a);
      }
      var cx = cn(function(a) {
        var o = a.length, c = o ? a[0] : 0, g = this.__wrapped__, y = function(S) {
          return mc(S, a);
        };
        return o > 1 || this.__actions__.length || !(g instanceof Fe) || !dn(c) ? this.thru(y) : (g = g.slice(c, +c + (o ? 1 : 0)), g.__actions__.push({
          func: sl,
          args: [y],
          thisArg: r
        }), new br(g, this.__chain__).thru(function(S) {
          return o && !S.length && S.push(r), S;
        }));
      });
      function dx() {
        return Bg(this);
      }
      function fx() {
        return new br(this.value(), this.__chain__);
      }
      function px() {
        this.__values__ === r && (this.__values__ = Zg(this.value()));
        var a = this.__index__ >= this.__values__.length, o = a ? r : this.__values__[this.__index__++];
        return { done: a, value: o };
      }
      function hx() {
        return this;
      }
      function gx(a) {
        for (var o, c = this; c instanceof Vs; ) {
          var g = Ng(c);
          g.__index__ = 0, g.__values__ = r, o ? y.__wrapped__ = g : o = g;
          var y = g;
          c = c.__wrapped__;
        }
        return y.__wrapped__ = a, o;
      }
      function mx() {
        var a = this.__wrapped__;
        if (a instanceof Fe) {
          var o = a;
          return this.__actions__.length && (o = new Fe(this)), o = o.reverse(), o.__actions__.push({
            func: sl,
            args: [Hc],
            thisArg: r
          }), new br(o, this.__chain__);
        }
        return this.thru(Hc);
      }
      function vx() {
        return tg(this.__wrapped__, this.__actions__);
      }
      var yx = Zs(function(a, o, c) {
        Je.call(a, c) ? ++a[c] : ln(a, c, 1);
      });
      function bx(a, o, c) {
        var g = $e(a) ? hh : uO;
        return c && Vt(a, o, c) && (o = r), g(a, ve(o, 3));
      }
      function Ex(a, o) {
        var c = $e(a) ? Ln : Fh;
        return c(a, ve(o, 3));
      }
      var wx = fg(Ig), Sx = fg(kg);
      function _x(a, o) {
        return Mt(ll(a, o), 1);
      }
      function Ox(a, o) {
        return Mt(ll(a, o), Te);
      }
      function Tx(a, o, c) {
        return c = c === r ? 1 : Ie(c), Mt(ll(a, o), c);
      }
      function Ug(a, o) {
        var c = $e(a) ? vr : zn;
        return c(a, ve(o, 3));
      }
      function zg(a, o) {
        var c = $e(a) ? H1 : Lh;
        return c(a, ve(o, 3));
      }
      var xx = Zs(function(a, o, c) {
        Je.call(a, c) ? a[c].push(o) : ln(a, c, [o]);
      });
      function Px(a, o, c, g) {
        a = Jt(a) ? a : mi(a), c = c && !g ? Ie(c) : 0;
        var y = a.length;
        return c < 0 && (c = Pt(y + c, 0)), pl(a) ? c <= y && a.indexOf(o, c) > -1 : !!y && ai(a, o, c) > -1;
      }
      var Ax = De(function(a, o, c) {
        var g = -1, y = typeof o == "function", S = Jt(a) ? q(a.length) : [];
        return zn(a, function(P) {
          S[++g] = y ? nr(o, P, c) : yo(P, o, c);
        }), S;
      }), Cx = Zs(function(a, o, c) {
        ln(a, c, o);
      });
      function ll(a, o) {
        var c = $e(a) ? ft : Hh;
        return c(a, ve(o, 3));
      }
      function $x(a, o, c, g) {
        return a == null ? [] : ($e(o) || (o = o == null ? [] : [o]), c = g ? r : c, $e(c) || (c = c == null ? [] : [c]), Qh(a, o, c));
      }
      var Rx = Zs(function(a, o, c) {
        a[c ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function Nx(a, o, c) {
        var g = $e(a) ? nc : yh, y = arguments.length < 3;
        return g(a, ve(o, 4), c, y, zn);
      }
      function Ix(a, o, c) {
        var g = $e(a) ? W1 : yh, y = arguments.length < 3;
        return g(a, ve(o, 4), c, y, Lh);
      }
      function kx(a, o) {
        var c = $e(a) ? Ln : Fh;
        return c(a, dl(ve(o, 3)));
      }
      function Dx(a) {
        var o = $e(a) ? Ih : PO;
        return o(a);
      }
      function Mx(a, o, c) {
        (c ? Vt(a, o, c) : o === r) ? o = 1 : o = Ie(o);
        var g = $e(a) ? aO : AO;
        return g(a, o);
      }
      function Lx(a) {
        var o = $e(a) ? iO : $O;
        return o(a);
      }
      function Fx(a) {
        if (a == null)
          return 0;
        if (Jt(a))
          return pl(a) ? oi(a) : a.length;
        var o = zt(a);
        return o == ne || o == Ht ? a.size : Sc(a).length;
      }
      function Bx(a, o, c) {
        var g = $e(a) ? ac : RO;
        return c && Vt(a, o, c) && (o = r), g(a, ve(o, 3));
      }
      var Ux = De(function(a, o) {
        if (a == null)
          return [];
        var c = o.length;
        return c > 1 && Vt(a, o[0], o[1]) ? o = [] : c > 2 && Vt(o[0], o[1], o[2]) && (o = [o[0]]), Qh(a, Mt(o, 1), []);
      }), ul = E0 || function() {
        return Dt.Date.now();
      };
      function zx(a, o) {
        if (typeof o != "function")
          throw new yr(l);
        return a = Ie(a), function() {
          if (--a < 1)
            return o.apply(this, arguments);
        };
      }
      function qg(a, o, c) {
        return o = c ? r : o, o = a && o == null ? a.length : o, un(a, x, r, r, r, r, o);
      }
      function jg(a, o) {
        var c;
        if (typeof o != "function")
          throw new yr(l);
        return a = Ie(a), function() {
          return --a > 0 && (c = o.apply(this, arguments)), a <= 1 && (o = r), c;
        };
      }
      var Vc = De(function(a, o, c) {
        var g = _;
        if (c.length) {
          var y = Bn(c, hi(Vc));
          g |= N;
        }
        return un(a, g, o, c, y);
      }), Hg = De(function(a, o, c) {
        var g = _ | A;
        if (c.length) {
          var y = Bn(c, hi(Hg));
          g |= N;
        }
        return un(o, g, a, c, y);
      });
      function Wg(a, o, c) {
        o = c ? r : o;
        var g = un(a, k, r, r, r, r, r, o);
        return g.placeholder = Wg.placeholder, g;
      }
      function Vg(a, o, c) {
        o = c ? r : o;
        var g = un(a, U, r, r, r, r, r, o);
        return g.placeholder = Vg.placeholder, g;
      }
      function Gg(a, o, c) {
        var g, y, S, P, R, L, G = 0, Q = !1, Y = !1, ae = !0;
        if (typeof a != "function")
          throw new yr(l);
        o = _r(o) || 0, pt(c) && (Q = !!c.leading, Y = "maxWait" in c, S = Y ? Pt(_r(c.maxWait) || 0, o) : S, ae = "trailing" in c ? !!c.trailing : ae);
        function de(bt) {
          var Rr = g, hn = y;
          return g = y = r, G = bt, P = a.apply(hn, Rr), P;
        }
        function ye(bt) {
          return G = bt, R = _o(Me, o), Q ? de(bt) : P;
        }
        function ke(bt) {
          var Rr = bt - L, hn = bt - G, fm = o - Rr;
          return Y ? Ut(fm, S - hn) : fm;
        }
        function be(bt) {
          var Rr = bt - L, hn = bt - G;
          return L === r || Rr >= o || Rr < 0 || Y && hn >= S;
        }
        function Me() {
          var bt = ul();
          if (be(bt))
            return Be(bt);
          R = _o(Me, ke(bt));
        }
        function Be(bt) {
          return R = r, ae && g ? de(bt) : (g = y = r, P);
        }
        function sr() {
          R !== r && ng(R), G = 0, g = L = y = R = r;
        }
        function Gt() {
          return R === r ? P : Be(ul());
        }
        function lr() {
          var bt = ul(), Rr = be(bt);
          if (g = arguments, y = this, L = bt, Rr) {
            if (R === r)
              return ye(L);
            if (Y)
              return ng(R), R = _o(Me, o), de(L);
          }
          return R === r && (R = _o(Me, o)), P;
        }
        return lr.cancel = sr, lr.flush = Gt, lr;
      }
      var qx = De(function(a, o) {
        return Mh(a, 1, o);
      }), jx = De(function(a, o, c) {
        return Mh(a, _r(o) || 0, c);
      });
      function Hx(a) {
        return un(a, I);
      }
      function cl(a, o) {
        if (typeof a != "function" || o != null && typeof o != "function")
          throw new yr(l);
        var c = function() {
          var g = arguments, y = o ? o.apply(this, g) : g[0], S = c.cache;
          if (S.has(y))
            return S.get(y);
          var P = a.apply(this, g);
          return c.cache = S.set(y, P) || S, P;
        };
        return c.cache = new (cl.Cache || sn)(), c;
      }
      cl.Cache = sn;
      function dl(a) {
        if (typeof a != "function")
          throw new yr(l);
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return !a.call(this);
            case 1:
              return !a.call(this, o[0]);
            case 2:
              return !a.call(this, o[0], o[1]);
            case 3:
              return !a.call(this, o[0], o[1], o[2]);
          }
          return !a.apply(this, o);
        };
      }
      function Wx(a) {
        return jg(2, a);
      }
      var Vx = NO(function(a, o) {
        o = o.length == 1 && $e(o[0]) ? ft(o[0], ar(ve())) : ft(Mt(o, 1), ar(ve()));
        var c = o.length;
        return De(function(g) {
          for (var y = -1, S = Ut(g.length, c); ++y < S; )
            g[y] = o[y].call(this, g[y]);
          return nr(a, this, g);
        });
      }), Gc = De(function(a, o) {
        var c = Bn(o, hi(Gc));
        return un(a, N, r, o, c);
      }), Qg = De(function(a, o) {
        var c = Bn(o, hi(Qg));
        return un(a, F, r, o, c);
      }), Gx = cn(function(a, o) {
        return un(a, $, r, r, r, o);
      });
      function Qx(a, o) {
        if (typeof a != "function")
          throw new yr(l);
        return o = o === r ? o : Ie(o), De(a, o);
      }
      function Kx(a, o) {
        if (typeof a != "function")
          throw new yr(l);
        return o = o == null ? 0 : Pt(Ie(o), 0), De(function(c) {
          var g = c[o], y = Hn(c, 0, o);
          return g && Fn(y, g), nr(a, this, y);
        });
      }
      function Yx(a, o, c) {
        var g = !0, y = !0;
        if (typeof a != "function")
          throw new yr(l);
        return pt(c) && (g = "leading" in c ? !!c.leading : g, y = "trailing" in c ? !!c.trailing : y), Gg(a, o, {
          leading: g,
          maxWait: o,
          trailing: y
        });
      }
      function Xx(a) {
        return qg(a, 1);
      }
      function Jx(a, o) {
        return Gc(Rc(o), a);
      }
      function Zx() {
        if (!arguments.length)
          return [];
        var a = arguments[0];
        return $e(a) ? a : [a];
      }
      function eP(a) {
        return Er(a, w);
      }
      function tP(a, o) {
        return o = typeof o == "function" ? o : r, Er(a, w, o);
      }
      function rP(a) {
        return Er(a, m | w);
      }
      function nP(a, o) {
        return o = typeof o == "function" ? o : r, Er(a, m | w, o);
      }
      function aP(a, o) {
        return o == null || Dh(a, o, $t(o));
      }
      function $r(a, o) {
        return a === o || a !== a && o !== o;
      }
      var iP = nl(bc), oP = nl(function(a, o) {
        return a >= o;
      }), Ea = zh(function() {
        return arguments;
      }()) ? zh : function(a) {
        return gt(a) && Je.call(a, "callee") && !Ph.call(a, "callee");
      }, $e = q.isArray, sP = lh ? ar(lh) : gO;
      function Jt(a) {
        return a != null && fl(a.length) && !fn(a);
      }
      function yt(a) {
        return gt(a) && Jt(a);
      }
      function lP(a) {
        return a === !0 || a === !1 || gt(a) && Wt(a) == Pe;
      }
      var Wn = S0 || ad, uP = uh ? ar(uh) : mO;
      function cP(a) {
        return gt(a) && a.nodeType === 1 && !Oo(a);
      }
      function dP(a) {
        if (a == null)
          return !0;
        if (Jt(a) && ($e(a) || typeof a == "string" || typeof a.splice == "function" || Wn(a) || gi(a) || Ea(a)))
          return !a.length;
        var o = zt(a);
        if (o == ne || o == Ht)
          return !a.size;
        if (So(a))
          return !Sc(a).length;
        for (var c in a)
          if (Je.call(a, c))
            return !1;
        return !0;
      }
      function fP(a, o) {
        return bo(a, o);
      }
      function pP(a, o, c) {
        c = typeof c == "function" ? c : r;
        var g = c ? c(a, o) : r;
        return g === r ? bo(a, o, r, c) : !!g;
      }
      function Qc(a) {
        if (!gt(a))
          return !1;
        var o = Wt(a);
        return o == re || o == Ne || typeof a.message == "string" && typeof a.name == "string" && !Oo(a);
      }
      function hP(a) {
        return typeof a == "number" && Ch(a);
      }
      function fn(a) {
        if (!pt(a))
          return !1;
        var o = Wt(a);
        return o == ee || o == ht || o == xe || o == xs;
      }
      function Kg(a) {
        return typeof a == "number" && a == Ie(a);
      }
      function fl(a) {
        return typeof a == "number" && a > -1 && a % 1 == 0 && a <= ze;
      }
      function pt(a) {
        var o = typeof a;
        return a != null && (o == "object" || o == "function");
      }
      function gt(a) {
        return a != null && typeof a == "object";
      }
      var Yg = ch ? ar(ch) : yO;
      function gP(a, o) {
        return a === o || wc(a, o, Fc(o));
      }
      function mP(a, o, c) {
        return c = typeof c == "function" ? c : r, wc(a, o, Fc(o), c);
      }
      function vP(a) {
        return Xg(a) && a != +a;
      }
      function yP(a) {
        if (tT(a))
          throw new Ce(s);
        return qh(a);
      }
      function bP(a) {
        return a === null;
      }
      function EP(a) {
        return a == null;
      }
      function Xg(a) {
        return typeof a == "number" || gt(a) && Wt(a) == Yt;
      }
      function Oo(a) {
        if (!gt(a) || Wt(a) != Bt)
          return !1;
        var o = Bs(a);
        if (o === null)
          return !0;
        var c = Je.call(o, "constructor") && o.constructor;
        return typeof c == "function" && c instanceof c && Ds.call(c) == m0;
      }
      var Kc = dh ? ar(dh) : bO;
      function wP(a) {
        return Kg(a) && a >= -ze && a <= ze;
      }
      var Jg = fh ? ar(fh) : EO;
      function pl(a) {
        return typeof a == "string" || !$e(a) && gt(a) && Wt(a) == da;
      }
      function or(a) {
        return typeof a == "symbol" || gt(a) && Wt(a) == qr;
      }
      var gi = ph ? ar(ph) : wO;
      function SP(a) {
        return a === r;
      }
      function _P(a) {
        return gt(a) && zt(a) == so;
      }
      function OP(a) {
        return gt(a) && Wt(a) == U_;
      }
      var TP = nl(_c), xP = nl(function(a, o) {
        return a <= o;
      });
      function Zg(a) {
        if (!a)
          return [];
        if (Jt(a))
          return pl(a) ? Ar(a) : Xt(a);
        if (co && a[co])
          return a0(a[co]());
        var o = zt(a), c = o == ne ? cc : o == Ht ? Ns : mi;
        return c(a);
      }
      function pn(a) {
        if (!a)
          return a === 0 ? a : 0;
        if (a = _r(a), a === Te || a === -Te) {
          var o = a < 0 ? -1 : 1;
          return o * Ze;
        }
        return a === a ? a : 0;
      }
      function Ie(a) {
        var o = pn(a), c = o % 1;
        return o === o ? c ? o - c : o : 0;
      }
      function em(a) {
        return a ? ma(Ie(a), 0, J) : 0;
      }
      function _r(a) {
        if (typeof a == "number")
          return a;
        if (or(a))
          return K;
        if (pt(a)) {
          var o = typeof a.valueOf == "function" ? a.valueOf() : a;
          a = pt(o) ? o + "" : o;
        }
        if (typeof a != "string")
          return a === 0 ? a : +a;
        a = bh(a);
        var c = s1.test(a);
        return c || u1.test(a) ? z1(a.slice(2), c ? 2 : 8) : o1.test(a) ? K : +a;
      }
      function tm(a) {
        return Hr(a, Zt(a));
      }
      function PP(a) {
        return a ? ma(Ie(a), -ze, ze) : a === 0 ? a : 0;
      }
      function Ve(a) {
        return a == null ? "" : ir(a);
      }
      var AP = fi(function(a, o) {
        if (So(o) || Jt(o)) {
          Hr(o, $t(o), a);
          return;
        }
        for (var c in o)
          Je.call(o, c) && mo(a, c, o[c]);
      }), rm = fi(function(a, o) {
        Hr(o, Zt(o), a);
      }), hl = fi(function(a, o, c, g) {
        Hr(o, Zt(o), a, g);
      }), CP = fi(function(a, o, c, g) {
        Hr(o, $t(o), a, g);
      }), $P = cn(mc);
      function RP(a, o) {
        var c = di(a);
        return o == null ? c : kh(c, o);
      }
      var NP = De(function(a, o) {
        a = nt(a);
        var c = -1, g = o.length, y = g > 2 ? o[2] : r;
        for (y && Vt(o[0], o[1], y) && (g = 1); ++c < g; )
          for (var S = o[c], P = Zt(S), R = -1, L = P.length; ++R < L; ) {
            var G = P[R], Q = a[G];
            (Q === r || $r(Q, li[G]) && !Je.call(a, G)) && (a[G] = S[G]);
          }
        return a;
      }), IP = De(function(a) {
        return a.push(r, bg), nr(nm, r, a);
      });
      function kP(a, o) {
        return gh(a, ve(o, 3), jr);
      }
      function DP(a, o) {
        return gh(a, ve(o, 3), yc);
      }
      function MP(a, o) {
        return a == null ? a : vc(a, ve(o, 3), Zt);
      }
      function LP(a, o) {
        return a == null ? a : Bh(a, ve(o, 3), Zt);
      }
      function FP(a, o) {
        return a && jr(a, ve(o, 3));
      }
      function BP(a, o) {
        return a && yc(a, ve(o, 3));
      }
      function UP(a) {
        return a == null ? [] : Ks(a, $t(a));
      }
      function zP(a) {
        return a == null ? [] : Ks(a, Zt(a));
      }
      function Yc(a, o, c) {
        var g = a == null ? r : va(a, o);
        return g === r ? c : g;
      }
      function qP(a, o) {
        return a != null && Sg(a, o, dO);
      }
      function Xc(a, o) {
        return a != null && Sg(a, o, fO);
      }
      var jP = hg(function(a, o, c) {
        o != null && typeof o.toString != "function" && (o = Ms.call(o)), a[o] = c;
      }, Zc(er)), HP = hg(function(a, o, c) {
        o != null && typeof o.toString != "function" && (o = Ms.call(o)), Je.call(a, o) ? a[o].push(c) : a[o] = [c];
      }, ve), WP = De(yo);
      function $t(a) {
        return Jt(a) ? Nh(a) : Sc(a);
      }
      function Zt(a) {
        return Jt(a) ? Nh(a, !0) : SO(a);
      }
      function VP(a, o) {
        var c = {};
        return o = ve(o, 3), jr(a, function(g, y, S) {
          ln(c, o(g, y, S), g);
        }), c;
      }
      function GP(a, o) {
        var c = {};
        return o = ve(o, 3), jr(a, function(g, y, S) {
          ln(c, y, o(g, y, S));
        }), c;
      }
      var QP = fi(function(a, o, c) {
        Ys(a, o, c);
      }), nm = fi(function(a, o, c, g) {
        Ys(a, o, c, g);
      }), KP = cn(function(a, o) {
        var c = {};
        if (a == null)
          return c;
        var g = !1;
        o = ft(o, function(S) {
          return S = jn(S, a), g || (g = S.length > 1), S;
        }), Hr(a, Mc(a), c), g && (c = Er(c, m | v | w, jO));
        for (var y = o.length; y--; )
          Ac(c, o[y]);
        return c;
      });
      function YP(a, o) {
        return am(a, dl(ve(o)));
      }
      var XP = cn(function(a, o) {
        return a == null ? {} : OO(a, o);
      });
      function am(a, o) {
        if (a == null)
          return {};
        var c = ft(Mc(a), function(g) {
          return [g];
        });
        return o = ve(o), Kh(a, c, function(g, y) {
          return o(g, y[0]);
        });
      }
      function JP(a, o, c) {
        o = jn(o, a);
        var g = -1, y = o.length;
        for (y || (y = 1, a = r); ++g < y; ) {
          var S = a == null ? r : a[Wr(o[g])];
          S === r && (g = y, S = c), a = fn(S) ? S.call(a) : S;
        }
        return a;
      }
      function ZP(a, o, c) {
        return a == null ? a : Eo(a, o, c);
      }
      function eA(a, o, c, g) {
        return g = typeof g == "function" ? g : r, a == null ? a : Eo(a, o, c, g);
      }
      var im = vg($t), om = vg(Zt);
      function tA(a, o, c) {
        var g = $e(a), y = g || Wn(a) || gi(a);
        if (o = ve(o, 4), c == null) {
          var S = a && a.constructor;
          y ? c = g ? new S() : [] : pt(a) ? c = fn(S) ? di(Bs(a)) : {} : c = {};
        }
        return (y ? vr : jr)(a, function(P, R, L) {
          return o(c, P, R, L);
        }), c;
      }
      function rA(a, o) {
        return a == null ? !0 : Ac(a, o);
      }
      function nA(a, o, c) {
        return a == null ? a : eg(a, o, Rc(c));
      }
      function aA(a, o, c, g) {
        return g = typeof g == "function" ? g : r, a == null ? a : eg(a, o, Rc(c), g);
      }
      function mi(a) {
        return a == null ? [] : uc(a, $t(a));
      }
      function iA(a) {
        return a == null ? [] : uc(a, Zt(a));
      }
      function oA(a, o, c) {
        return c === r && (c = o, o = r), c !== r && (c = _r(c), c = c === c ? c : 0), o !== r && (o = _r(o), o = o === o ? o : 0), ma(_r(a), o, c);
      }
      function sA(a, o, c) {
        return o = pn(o), c === r ? (c = o, o = 0) : c = pn(c), a = _r(a), pO(a, o, c);
      }
      function lA(a, o, c) {
        if (c && typeof c != "boolean" && Vt(a, o, c) && (o = c = r), c === r && (typeof o == "boolean" ? (c = o, o = r) : typeof a == "boolean" && (c = a, a = r)), a === r && o === r ? (a = 0, o = 1) : (a = pn(a), o === r ? (o = a, a = 0) : o = pn(o)), a > o) {
          var g = a;
          a = o, o = g;
        }
        if (c || a % 1 || o % 1) {
          var y = $h();
          return Ut(a + y * (o - a + U1("1e-" + ((y + "").length - 1))), o);
        }
        return Tc(a, o);
      }
      var uA = pi(function(a, o, c) {
        return o = o.toLowerCase(), a + (c ? sm(o) : o);
      });
      function sm(a) {
        return Jc(Ve(a).toLowerCase());
      }
      function lm(a) {
        return a = Ve(a), a && a.replace(d1, Z1).replace($1, "");
      }
      function cA(a, o, c) {
        a = Ve(a), o = ir(o);
        var g = a.length;
        c = c === r ? g : ma(Ie(c), 0, g);
        var y = c;
        return c -= o.length, c >= 0 && a.slice(c, y) == o;
      }
      function dA(a) {
        return a = Ve(a), a && W_.test(a) ? a.replace(Bp, e0) : a;
      }
      function fA(a) {
        return a = Ve(a), a && X_.test(a) ? a.replace(Gu, "\\$&") : a;
      }
      var pA = pi(function(a, o, c) {
        return a + (c ? "-" : "") + o.toLowerCase();
      }), hA = pi(function(a, o, c) {
        return a + (c ? " " : "") + o.toLowerCase();
      }), gA = dg("toLowerCase");
      function mA(a, o, c) {
        a = Ve(a), o = Ie(o);
        var g = o ? oi(a) : 0;
        if (!o || g >= o)
          return a;
        var y = (o - g) / 2;
        return rl(js(y), c) + a + rl(qs(y), c);
      }
      function vA(a, o, c) {
        a = Ve(a), o = Ie(o);
        var g = o ? oi(a) : 0;
        return o && g < o ? a + rl(o - g, c) : a;
      }
      function yA(a, o, c) {
        a = Ve(a), o = Ie(o);
        var g = o ? oi(a) : 0;
        return o && g < o ? rl(o - g, c) + a : a;
      }
      function bA(a, o, c) {
        return c || o == null ? o = 0 : o && (o = +o), x0(Ve(a).replace(Qu, ""), o || 0);
      }
      function EA(a, o, c) {
        return (c ? Vt(a, o, c) : o === r) ? o = 1 : o = Ie(o), xc(Ve(a), o);
      }
      function wA() {
        var a = arguments, o = Ve(a[0]);
        return a.length < 3 ? o : o.replace(a[1], a[2]);
      }
      var SA = pi(function(a, o, c) {
        return a + (c ? "_" : "") + o.toLowerCase();
      });
      function _A(a, o, c) {
        return c && typeof c != "number" && Vt(a, o, c) && (o = c = r), c = c === r ? J : c >>> 0, c ? (a = Ve(a), a && (typeof o == "string" || o != null && !Kc(o)) && (o = ir(o), !o && ii(a)) ? Hn(Ar(a), 0, c) : a.split(o, c)) : [];
      }
      var OA = pi(function(a, o, c) {
        return a + (c ? " " : "") + Jc(o);
      });
      function TA(a, o, c) {
        return a = Ve(a), c = c == null ? 0 : ma(Ie(c), 0, a.length), o = ir(o), a.slice(c, c + o.length) == o;
      }
      function xA(a, o, c) {
        var g = E.templateSettings;
        c && Vt(a, o, c) && (o = r), a = Ve(a), o = hl({}, o, g, yg);
        var y = hl({}, o.imports, g.imports, yg), S = $t(y), P = uc(y, S), R, L, G = 0, Q = o.interpolate || Ps, Y = "__p += '", ae = dc(
          (o.escape || Ps).source + "|" + Q.source + "|" + (Q === Up ? i1 : Ps).source + "|" + (o.evaluate || Ps).source + "|$",
          "g"
        ), de = "//# sourceURL=" + (Je.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++D1 + "]") + `
`;
        a.replace(ae, function(be, Me, Be, sr, Gt, lr) {
          return Be || (Be = sr), Y += a.slice(G, lr).replace(f1, t0), Me && (R = !0, Y += `' +
__e(` + Me + `) +
'`), Gt && (L = !0, Y += `';
` + Gt + `;
__p += '`), Be && (Y += `' +
((__t = (` + Be + `)) == null ? '' : __t) +
'`), G = lr + be.length, be;
        }), Y += `';
`;
        var ye = Je.call(o, "variable") && o.variable;
        if (!ye)
          Y = `with (obj) {
` + Y + `
}
`;
        else if (n1.test(ye))
          throw new Ce(u);
        Y = (L ? Y.replace(z_, "") : Y).replace(q_, "$1").replace(j_, "$1;"), Y = "function(" + (ye || "obj") + `) {
` + (ye ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (L ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Y + `return __p
}`;
        var ke = cm(function() {
          return He(S, de + "return " + Y).apply(r, P);
        });
        if (ke.source = Y, Qc(ke))
          throw ke;
        return ke;
      }
      function PA(a) {
        return Ve(a).toLowerCase();
      }
      function AA(a) {
        return Ve(a).toUpperCase();
      }
      function CA(a, o, c) {
        if (a = Ve(a), a && (c || o === r))
          return bh(a);
        if (!a || !(o = ir(o)))
          return a;
        var g = Ar(a), y = Ar(o), S = Eh(g, y), P = wh(g, y) + 1;
        return Hn(g, S, P).join("");
      }
      function $A(a, o, c) {
        if (a = Ve(a), a && (c || o === r))
          return a.slice(0, _h(a) + 1);
        if (!a || !(o = ir(o)))
          return a;
        var g = Ar(a), y = wh(g, Ar(o)) + 1;
        return Hn(g, 0, y).join("");
      }
      function RA(a, o, c) {
        if (a = Ve(a), a && (c || o === r))
          return a.replace(Qu, "");
        if (!a || !(o = ir(o)))
          return a;
        var g = Ar(a), y = Eh(g, Ar(o));
        return Hn(g, y).join("");
      }
      function NA(a, o) {
        var c = B, g = V;
        if (pt(o)) {
          var y = "separator" in o ? o.separator : y;
          c = "length" in o ? Ie(o.length) : c, g = "omission" in o ? ir(o.omission) : g;
        }
        a = Ve(a);
        var S = a.length;
        if (ii(a)) {
          var P = Ar(a);
          S = P.length;
        }
        if (c >= S)
          return a;
        var R = c - oi(g);
        if (R < 1)
          return g;
        var L = P ? Hn(P, 0, R).join("") : a.slice(0, R);
        if (y === r)
          return L + g;
        if (P && (R += L.length - R), Kc(y)) {
          if (a.slice(R).search(y)) {
            var G, Q = L;
            for (y.global || (y = dc(y.source, Ve(zp.exec(y)) + "g")), y.lastIndex = 0; G = y.exec(Q); )
              var Y = G.index;
            L = L.slice(0, Y === r ? R : Y);
          }
        } else if (a.indexOf(ir(y), R) != R) {
          var ae = L.lastIndexOf(y);
          ae > -1 && (L = L.slice(0, ae));
        }
        return L + g;
      }
      function IA(a) {
        return a = Ve(a), a && H_.test(a) ? a.replace(Fp, l0) : a;
      }
      var kA = pi(function(a, o, c) {
        return a + (c ? " " : "") + o.toUpperCase();
      }), Jc = dg("toUpperCase");
      function um(a, o, c) {
        return a = Ve(a), o = c ? r : o, o === r ? n0(a) ? d0(a) : Q1(a) : a.match(o) || [];
      }
      var cm = De(function(a, o) {
        try {
          return nr(a, r, o);
        } catch (c) {
          return Qc(c) ? c : new Ce(c);
        }
      }), DA = cn(function(a, o) {
        return vr(o, function(c) {
          c = Wr(c), ln(a, c, Vc(a[c], a));
        }), a;
      });
      function MA(a) {
        var o = a == null ? 0 : a.length, c = ve();
        return a = o ? ft(a, function(g) {
          if (typeof g[1] != "function")
            throw new yr(l);
          return [c(g[0]), g[1]];
        }) : [], De(function(g) {
          for (var y = -1; ++y < o; ) {
            var S = a[y];
            if (nr(S[0], this, g))
              return nr(S[1], this, g);
          }
        });
      }
      function LA(a) {
        return lO(Er(a, m));
      }
      function Zc(a) {
        return function() {
          return a;
        };
      }
      function FA(a, o) {
        return a == null || a !== a ? o : a;
      }
      var BA = pg(), UA = pg(!0);
      function er(a) {
        return a;
      }
      function ed(a) {
        return jh(typeof a == "function" ? a : Er(a, m));
      }
      function zA(a) {
        return Wh(Er(a, m));
      }
      function qA(a, o) {
        return Vh(a, Er(o, m));
      }
      var jA = De(function(a, o) {
        return function(c) {
          return yo(c, a, o);
        };
      }), HA = De(function(a, o) {
        return function(c) {
          return yo(a, c, o);
        };
      });
      function td(a, o, c) {
        var g = $t(o), y = Ks(o, g);
        c == null && !(pt(o) && (y.length || !g.length)) && (c = o, o = a, a = this, y = Ks(o, $t(o)));
        var S = !(pt(c) && "chain" in c) || !!c.chain, P = fn(a);
        return vr(y, function(R) {
          var L = o[R];
          a[R] = L, P && (a.prototype[R] = function() {
            var G = this.__chain__;
            if (S || G) {
              var Q = a(this.__wrapped__), Y = Q.__actions__ = Xt(this.__actions__);
              return Y.push({ func: L, args: arguments, thisArg: a }), Q.__chain__ = G, Q;
            }
            return L.apply(a, Fn([this.value()], arguments));
          });
        }), a;
      }
      function WA() {
        return Dt._ === this && (Dt._ = v0), this;
      }
      function rd() {
      }
      function VA(a) {
        return a = Ie(a), De(function(o) {
          return Gh(o, a);
        });
      }
      var GA = Ic(ft), QA = Ic(hh), KA = Ic(ac);
      function dm(a) {
        return Uc(a) ? ic(Wr(a)) : TO(a);
      }
      function YA(a) {
        return function(o) {
          return a == null ? r : va(a, o);
        };
      }
      var XA = gg(), JA = gg(!0);
      function nd() {
        return [];
      }
      function ad() {
        return !1;
      }
      function ZA() {
        return {};
      }
      function eC() {
        return "";
      }
      function tC() {
        return !0;
      }
      function rC(a, o) {
        if (a = Ie(a), a < 1 || a > ze)
          return [];
        var c = J, g = Ut(a, J);
        o = ve(o), a -= J;
        for (var y = lc(g, o); ++c < a; )
          o(c);
        return y;
      }
      function nC(a) {
        return $e(a) ? ft(a, Wr) : or(a) ? [a] : Xt(Rg(Ve(a)));
      }
      function aC(a) {
        var o = ++g0;
        return Ve(a) + o;
      }
      var iC = tl(function(a, o) {
        return a + o;
      }, 0), oC = kc("ceil"), sC = tl(function(a, o) {
        return a / o;
      }, 1), lC = kc("floor");
      function uC(a) {
        return a && a.length ? Qs(a, er, bc) : r;
      }
      function cC(a, o) {
        return a && a.length ? Qs(a, ve(o, 2), bc) : r;
      }
      function dC(a) {
        return vh(a, er);
      }
      function fC(a, o) {
        return vh(a, ve(o, 2));
      }
      function pC(a) {
        return a && a.length ? Qs(a, er, _c) : r;
      }
      function hC(a, o) {
        return a && a.length ? Qs(a, ve(o, 2), _c) : r;
      }
      var gC = tl(function(a, o) {
        return a * o;
      }, 1), mC = kc("round"), vC = tl(function(a, o) {
        return a - o;
      }, 0);
      function yC(a) {
        return a && a.length ? sc(a, er) : 0;
      }
      function bC(a, o) {
        return a && a.length ? sc(a, ve(o, 2)) : 0;
      }
      return E.after = zx, E.ary = qg, E.assign = AP, E.assignIn = rm, E.assignInWith = hl, E.assignWith = CP, E.at = $P, E.before = jg, E.bind = Vc, E.bindAll = DA, E.bindKey = Hg, E.castArray = Zx, E.chain = Bg, E.chunk = lT, E.compact = uT, E.concat = cT, E.cond = MA, E.conforms = LA, E.constant = Zc, E.countBy = yx, E.create = RP, E.curry = Wg, E.curryRight = Vg, E.debounce = Gg, E.defaults = NP, E.defaultsDeep = IP, E.defer = qx, E.delay = jx, E.difference = dT, E.differenceBy = fT, E.differenceWith = pT, E.drop = hT, E.dropRight = gT, E.dropRightWhile = mT, E.dropWhile = vT, E.fill = yT, E.filter = Ex, E.flatMap = _x, E.flatMapDeep = Ox, E.flatMapDepth = Tx, E.flatten = Dg, E.flattenDeep = bT, E.flattenDepth = ET, E.flip = Hx, E.flow = BA, E.flowRight = UA, E.fromPairs = wT, E.functions = UP, E.functionsIn = zP, E.groupBy = xx, E.initial = _T, E.intersection = OT, E.intersectionBy = TT, E.intersectionWith = xT, E.invert = jP, E.invertBy = HP, E.invokeMap = Ax, E.iteratee = ed, E.keyBy = Cx, E.keys = $t, E.keysIn = Zt, E.map = ll, E.mapKeys = VP, E.mapValues = GP, E.matches = zA, E.matchesProperty = qA, E.memoize = cl, E.merge = QP, E.mergeWith = nm, E.method = jA, E.methodOf = HA, E.mixin = td, E.negate = dl, E.nthArg = VA, E.omit = KP, E.omitBy = YP, E.once = Wx, E.orderBy = $x, E.over = GA, E.overArgs = Vx, E.overEvery = QA, E.overSome = KA, E.partial = Gc, E.partialRight = Qg, E.partition = Rx, E.pick = XP, E.pickBy = am, E.property = dm, E.propertyOf = YA, E.pull = $T, E.pullAll = Lg, E.pullAllBy = RT, E.pullAllWith = NT, E.pullAt = IT, E.range = XA, E.rangeRight = JA, E.rearg = Gx, E.reject = kx, E.remove = kT, E.rest = Qx, E.reverse = Hc, E.sampleSize = Mx, E.set = ZP, E.setWith = eA, E.shuffle = Lx, E.slice = DT, E.sortBy = Ux, E.sortedUniq = qT, E.sortedUniqBy = jT, E.split = _A, E.spread = Kx, E.tail = HT, E.take = WT, E.takeRight = VT, E.takeRightWhile = GT, E.takeWhile = QT, E.tap = ux, E.throttle = Yx, E.thru = sl, E.toArray = Zg, E.toPairs = im, E.toPairsIn = om, E.toPath = nC, E.toPlainObject = tm, E.transform = tA, E.unary = Xx, E.union = KT, E.unionBy = YT, E.unionWith = XT, E.uniq = JT, E.uniqBy = ZT, E.uniqWith = ex, E.unset = rA, E.unzip = Wc, E.unzipWith = Fg, E.update = nA, E.updateWith = aA, E.values = mi, E.valuesIn = iA, E.without = tx, E.words = um, E.wrap = Jx, E.xor = rx, E.xorBy = nx, E.xorWith = ax, E.zip = ix, E.zipObject = ox, E.zipObjectDeep = sx, E.zipWith = lx, E.entries = im, E.entriesIn = om, E.extend = rm, E.extendWith = hl, td(E, E), E.add = iC, E.attempt = cm, E.camelCase = uA, E.capitalize = sm, E.ceil = oC, E.clamp = oA, E.clone = eP, E.cloneDeep = rP, E.cloneDeepWith = nP, E.cloneWith = tP, E.conformsTo = aP, E.deburr = lm, E.defaultTo = FA, E.divide = sC, E.endsWith = cA, E.eq = $r, E.escape = dA, E.escapeRegExp = fA, E.every = bx, E.find = wx, E.findIndex = Ig, E.findKey = kP, E.findLast = Sx, E.findLastIndex = kg, E.findLastKey = DP, E.floor = lC, E.forEach = Ug, E.forEachRight = zg, E.forIn = MP, E.forInRight = LP, E.forOwn = FP, E.forOwnRight = BP, E.get = Yc, E.gt = iP, E.gte = oP, E.has = qP, E.hasIn = Xc, E.head = Mg, E.identity = er, E.includes = Px, E.indexOf = ST, E.inRange = sA, E.invoke = WP, E.isArguments = Ea, E.isArray = $e, E.isArrayBuffer = sP, E.isArrayLike = Jt, E.isArrayLikeObject = yt, E.isBoolean = lP, E.isBuffer = Wn, E.isDate = uP, E.isElement = cP, E.isEmpty = dP, E.isEqual = fP, E.isEqualWith = pP, E.isError = Qc, E.isFinite = hP, E.isFunction = fn, E.isInteger = Kg, E.isLength = fl, E.isMap = Yg, E.isMatch = gP, E.isMatchWith = mP, E.isNaN = vP, E.isNative = yP, E.isNil = EP, E.isNull = bP, E.isNumber = Xg, E.isObject = pt, E.isObjectLike = gt, E.isPlainObject = Oo, E.isRegExp = Kc, E.isSafeInteger = wP, E.isSet = Jg, E.isString = pl, E.isSymbol = or, E.isTypedArray = gi, E.isUndefined = SP, E.isWeakMap = _P, E.isWeakSet = OP, E.join = PT, E.kebabCase = pA, E.last = Sr, E.lastIndexOf = AT, E.lowerCase = hA, E.lowerFirst = gA, E.lt = TP, E.lte = xP, E.max = uC, E.maxBy = cC, E.mean = dC, E.meanBy = fC, E.min = pC, E.minBy = hC, E.stubArray = nd, E.stubFalse = ad, E.stubObject = ZA, E.stubString = eC, E.stubTrue = tC, E.multiply = gC, E.nth = CT, E.noConflict = WA, E.noop = rd, E.now = ul, E.pad = mA, E.padEnd = vA, E.padStart = yA, E.parseInt = bA, E.random = lA, E.reduce = Nx, E.reduceRight = Ix, E.repeat = EA, E.replace = wA, E.result = JP, E.round = mC, E.runInContext = D, E.sample = Dx, E.size = Fx, E.snakeCase = SA, E.some = Bx, E.sortedIndex = MT, E.sortedIndexBy = LT, E.sortedIndexOf = FT, E.sortedLastIndex = BT, E.sortedLastIndexBy = UT, E.sortedLastIndexOf = zT, E.startCase = OA, E.startsWith = TA, E.subtract = vC, E.sum = yC, E.sumBy = bC, E.template = xA, E.times = rC, E.toFinite = pn, E.toInteger = Ie, E.toLength = em, E.toLower = PA, E.toNumber = _r, E.toSafeInteger = PP, E.toString = Ve, E.toUpper = AA, E.trim = CA, E.trimEnd = $A, E.trimStart = RA, E.truncate = NA, E.unescape = IA, E.uniqueId = aC, E.upperCase = kA, E.upperFirst = Jc, E.each = Ug, E.eachRight = zg, E.first = Mg, td(E, function() {
        var a = {};
        return jr(E, function(o, c) {
          Je.call(E.prototype, c) || (a[c] = o);
        }), a;
      }(), { chain: !1 }), E.VERSION = n, vr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(a) {
        E[a].placeholder = E;
      }), vr(["drop", "take"], function(a, o) {
        Fe.prototype[a] = function(c) {
          c = c === r ? 1 : Pt(Ie(c), 0);
          var g = this.__filtered__ && !o ? new Fe(this) : this.clone();
          return g.__filtered__ ? g.__takeCount__ = Ut(c, g.__takeCount__) : g.__views__.push({
            size: Ut(c, J),
            type: a + (g.__dir__ < 0 ? "Right" : "")
          }), g;
        }, Fe.prototype[a + "Right"] = function(c) {
          return this.reverse()[a](c).reverse();
        };
      }), vr(["filter", "map", "takeWhile"], function(a, o) {
        var c = o + 1, g = c == se || c == Oe;
        Fe.prototype[a] = function(y) {
          var S = this.clone();
          return S.__iteratees__.push({
            iteratee: ve(y, 3),
            type: c
          }), S.__filtered__ = S.__filtered__ || g, S;
        };
      }), vr(["head", "last"], function(a, o) {
        var c = "take" + (o ? "Right" : "");
        Fe.prototype[a] = function() {
          return this[c](1).value()[0];
        };
      }), vr(["initial", "tail"], function(a, o) {
        var c = "drop" + (o ? "" : "Right");
        Fe.prototype[a] = function() {
          return this.__filtered__ ? new Fe(this) : this[c](1);
        };
      }), Fe.prototype.compact = function() {
        return this.filter(er);
      }, Fe.prototype.find = function(a) {
        return this.filter(a).head();
      }, Fe.prototype.findLast = function(a) {
        return this.reverse().find(a);
      }, Fe.prototype.invokeMap = De(function(a, o) {
        return typeof a == "function" ? new Fe(this) : this.map(function(c) {
          return yo(c, a, o);
        });
      }), Fe.prototype.reject = function(a) {
        return this.filter(dl(ve(a)));
      }, Fe.prototype.slice = function(a, o) {
        a = Ie(a);
        var c = this;
        return c.__filtered__ && (a > 0 || o < 0) ? new Fe(c) : (a < 0 ? c = c.takeRight(-a) : a && (c = c.drop(a)), o !== r && (o = Ie(o), c = o < 0 ? c.dropRight(-o) : c.take(o - a)), c);
      }, Fe.prototype.takeRightWhile = function(a) {
        return this.reverse().takeWhile(a).reverse();
      }, Fe.prototype.toArray = function() {
        return this.take(J);
      }, jr(Fe.prototype, function(a, o) {
        var c = /^(?:filter|find|map|reject)|While$/.test(o), g = /^(?:head|last)$/.test(o), y = E[g ? "take" + (o == "last" ? "Right" : "") : o], S = g || /^find/.test(o);
        y && (E.prototype[o] = function() {
          var P = this.__wrapped__, R = g ? [1] : arguments, L = P instanceof Fe, G = R[0], Q = L || $e(P), Y = function(Me) {
            var Be = y.apply(E, Fn([Me], R));
            return g && ae ? Be[0] : Be;
          };
          Q && c && typeof G == "function" && G.length != 1 && (L = Q = !1);
          var ae = this.__chain__, de = !!this.__actions__.length, ye = S && !ae, ke = L && !de;
          if (!S && Q) {
            P = ke ? P : new Fe(this);
            var be = a.apply(P, R);
            return be.__actions__.push({ func: sl, args: [Y], thisArg: r }), new br(be, ae);
          }
          return ye && ke ? a.apply(this, R) : (be = this.thru(Y), ye ? g ? be.value()[0] : be.value() : be);
        });
      }), vr(["pop", "push", "shift", "sort", "splice", "unshift"], function(a) {
        var o = Is[a], c = /^(?:push|sort|unshift)$/.test(a) ? "tap" : "thru", g = /^(?:pop|shift)$/.test(a);
        E.prototype[a] = function() {
          var y = arguments;
          if (g && !this.__chain__) {
            var S = this.value();
            return o.apply($e(S) ? S : [], y);
          }
          return this[c](function(P) {
            return o.apply($e(P) ? P : [], y);
          });
        };
      }), jr(Fe.prototype, function(a, o) {
        var c = E[o];
        if (c) {
          var g = c.name + "";
          Je.call(ci, g) || (ci[g] = []), ci[g].push({ name: o, func: c });
        }
      }), ci[el(r, A).name] = [{
        name: "wrapper",
        func: r
      }], Fe.prototype.clone = I0, Fe.prototype.reverse = k0, Fe.prototype.value = D0, E.prototype.at = cx, E.prototype.chain = dx, E.prototype.commit = fx, E.prototype.next = px, E.prototype.plant = gx, E.prototype.reverse = mx, E.prototype.toJSON = E.prototype.valueOf = E.prototype.value = vx, E.prototype.first = E.prototype.head, co && (E.prototype[co] = hx), E;
    }, si = f0();
    fa ? ((fa.exports = si)._ = si, ec._ = si) : Dt._ = si;
  }).call(Nr);
})(Jl, Jl.exports);
var TK = Jl.exports;
const xK = /* @__PURE__ */ Ct(TK);
function Cp() {
}
Cp.prototype = new Error();
class ib {
  constructor() {
    this._addFilter = (t, r) => {
      if (!Array.isArray(t))
        throw new Error(`Filter value "${t}" in query state must be an array.`);
      if (!(t.length === 2 || t.length === 3))
        throw new Error(`Filter value "${t}" in query state must be an array of 2 or 3 elements`);
      const n = t.length === 3;
      var i = t[0], s = t[1];
      if (n) {
        if (!Array.isArray(t[2]))
          throw new Error(`Filter value "${t[2]}" in query state must be an array.`);
        s = s + "::" + t[2][1];
      }
      i in r ? r[i].push(s) : r[i] = [s];
    }, this._addFilters = (t) => {
      if (!Array.isArray(t))
        throw new Error(`Filters query state "${t}" must be an array.`);
      const r = {};
      return t.forEach((n) => {
        this._addFilter(n, r);
      }), r;
    }, this.serialize = this.serialize.bind(this);
  }
  /**
   * Return a serialized version of the app state `query` for the API backend.
   * @param {object} stateQuery the `query` state to serialize
   */
  serialize(t) {
    const {
      queryString: r,
      sortBy: n,
      sortOrder: i,
      page: s,
      size: l,
      filters: u,
      hiddenParams: f
    } = t;
    let p = {};
    r !== null && (p.q = r), n !== null && (p.sort = n, i !== null && (p.sort = i === "desc" ? `-${n}` : n)), s > 0 && (p.page = s), l > 0 && (p.size = l), rn(f) || Yl(p, this._addFilters(f));
    const h = this._addFilters(u);
    return Yl(p, h), ao.stringify(p, {
      arrayFormat: "repeat"
    });
  }
}
class PK {
  constructor() {
    this.serialize = this.serialize.bind(this);
  }
  /**
   * Return a serialized version of the API backend response for the app state `results`.
   * @param {object} payload the backend response payload
   */
  serialize(t) {
    const {
      aggregations: r,
      hits: n,
      ...i
    } = t;
    return {
      aggregations: r || {},
      hits: n.hits,
      total: n.total,
      extras: i
    };
  }
}
function Sl(e, t) {
  return e.indexOf(t) === 0 && (e.length === t.length || e.indexOf(t + "&") === 0);
}
function Kd(e) {
  return ao.stringify({
    q: e
  });
}
function AK(e) {
  return ao.parse(e).q;
}
function xS(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = xS(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function ob(e, t) {
  const r = Kd(e), n = t.map((l) => Kd(l));
  let i = !1;
  const s = n.filter((l) => {
    const u = Sl(l, r), f = Sl(r, l);
    return u && !i && (i = !0), !u && !f;
  });
  if (!i)
    s.push(r);
  else if (e.length === 3) {
    const u = xS(e), f = Kd(u), p = s.some((h) => {
      const m = Sl(h, f), v = Sl(f, h);
      return m || v;
    });
    (rn(s) || !p) && s.push(f);
  }
  return s.map((l) => AK(l));
}
const PS = (e, t) => {
  if (rn(e))
    return;
  if (!XE(MV(e)))
    return ob(e, t);
  let r = t;
  for (const n of e)
    r = ob(n, r);
  return r;
}, AS = (e, t, r) => {
  let n = y8(t, r);
  return rn(n.filters) || (n.filters = PS(n.filters, e.filters)), n;
}, Zl = {
  queryString: "",
  suggestions: [],
  sortBy: null,
  sortOrder: null,
  page: -1,
  size: -1,
  filters: [],
  hiddenParams: [],
  layout: null
}, CS = Object.keys(Zl), CK = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, $K = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class RK {
  constructor() {
    this._checkFilter = (t) => {
      if (!Array.isArray(t))
        throw new Error(`Filter value "${t}" in query state must be an array.`);
      if (!(t.length === 2 || t.length === 3))
        throw new Error(`Filter value "${t}" in query state must be an array of 2 or 3 elements`);
    }, this._addFilter = (t, r) => {
      this._checkFilter(t);
      const n = t[0], i = t[1], s = t.length === 3;
      s && this._checkFilter(t[2]), n in r ? s ? r[n].push(i + "::" + t[2][1]) : r[n].push(i) : s ? r[n] = [i + "::" + t[2][1]] : r[n] = [i];
    }, this._addFilters = (t) => {
      if (!Array.isArray(t))
        throw new Error(`Filters query state "${t}" must be an array.`);
      const r = {};
      return t.forEach((n) => {
        this._addFilter(n, r);
      }), r;
    }, this.serialize = this.serialize.bind(this);
  }
  /**
   * Return a serialized version of the app state `query` for the API backend.
   * @param {object} stateQuery the `query` state to serialize
   */
  serialize(t) {
    const {
      queryString: r,
      sortBy: n,
      sortOrder: i,
      page: s,
      size: l,
      filters: u,
      hiddenParams: f
    } = t;
    let p = {};
    r !== null && (p.q = r), n !== null && (p.sort = n, i !== null && (p.sort = i === "desc" ? `-${n}` : n)), s > 0 && (p.page = s), l > 0 && (p.size = l), rn(f) || Yl(p, this._addFilters(f));
    const h = this._addFilters(u);
    return Yl(p, h), ao.stringify(p, {
      arrayFormat: "repeat"
    });
  }
}
class $S {
  constructor(t) {
    this.axiosConfig = Io(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = _d.CancelToken;
  }
  validateAxiosConfig() {
    if (!Ej(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = Io(t, "interceptors.request", void 0), this.responseInterceptor = Io(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: RK,
      InvenioRequestSerializer: ib
    };
    return typeof t == "string" ? r[t] : t || ib;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), i = Io(t, "invenio.responseSerializer", PK);
    this.requestSerializer = new n(), this.responseSerializer = new i();
  }
  initAxios() {
    const t = {
      paramsSerializer: this.requestSerializer.serialize,
      ...this.axiosConfig
    };
    this.http = _d.create(t), this.addInterceptors();
  }
  addInterceptors() {
    this.requestInterceptor && this.http.interceptors.request.use(this.requestInterceptor.resolve, this.requestInterceptor.reject), this.responseInterceptor && this.http.interceptors.request.use(this.responseInterceptor.resolve, this.responseInterceptor.reject);
  }
  /**
   * Perform the backend request to search and return the serialized list of results for the app state `results`.
   * @param {string} stateQuery the `query` state with the user input
   */
  async search(t) {
    this.axiosCancel && this.axiosCancel.cancel(), this.axiosCancel = this.axiosCancelToken.source();
    try {
      let r = await this.http.request({
        url: this.axiosConfig.url,
        params: t,
        cancelToken: this.axiosCancel.token
      });
      r = this.responseSerializer.serialize(r.data);
      const n = AS(t, r.extras, CS);
      return rn(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw _d.isCancel(r) ? new Cp() : r;
    }
  }
}
class NK {
  constructor() {
    this.isValid = (t, r, n) => {
      switch (r) {
        case "queryString":
        case "sortBy":
          return !0;
        case "sortOrder":
          return ["asc", "desc"].includes(n);
        case "page":
        case "size":
          return S5(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const i = XE(n) ? n : [n], s = ":", l = t.urlFilterSeparator, u = `[^\\${s}\\${l}]*`, f = `${u}\\${s}${u}`, p = `${f}(\\${l}${f})*`, h = new RegExp(`^${p}$`);
          return i.every((m) => String(m).match(h));
        }
        default:
          return !1;
      }
    };
  }
}
const IK = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, sb = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class kK {
  constructor() {
    this._convertValue = (t, r) => {
      switch (t) {
        case this.paramsMapping.page:
        case this.paramsMapping.size:
          return parseInt(r);
        default:
          return r;
      }
    }, this.parse = this.parse.bind(this), this.paramsMapping = {};
  }
  set urlParamsMapping(t) {
    this.paramsMapping = t;
  }
  /**
   * Parse the URL query string and return an object with all the params.
   * @param {string} queryString the query string to parse
   */
  parse() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    const r = ao.parse(t, {
      ignoreQueryPrefix: !0
    }), n = {};
    return Object.entries(r).forEach((i) => {
      const s = i[0], l = i[1];
      n[s] = this._convertValue(s, l);
    }), n;
  }
}
class DK {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (this._filterListToString = (r) => {
      const n = r.length === 3 ? this.urlFilterSeparator.concat(this._filterListToString(r[2])) : "";
      return `${r[0]}:${r[1]}${n}`;
    }, this._mapQueryStateToUrlParams = (r) => {
      const n = {};
      Object.keys(r).filter((s) => s in this.urlParamsMapping).filter((s) => (s === "page" || s === "size") && r[s] <= 0 || s === "hiddenParams" ? !1 : r[s] !== null).forEach((s) => {
        const l = this.urlParamsMapping[s];
        s === "filters" ? n[l] = r[s].map((u) => this._filterListToString(u)) : n[l] = r[s];
      });
      const i = (s, l) => {
        const u = "q";
        return s === u ? -1 : l === u ? 1 : s.localeCompare(l);
      };
      return ao.stringify(n, {
        addQueryPrefix: !0,
        skipNulls: !0,
        indices: !1,
        // order for filters params is not important, remove indices
        sort: i
      });
    }, this._filterStringToList = (r) => {
      const n = r.indexOf(this.urlFilterSeparator), i = n > -1, s = r.indexOf(":");
      if (s === -1)
        throw new Error(`Filter "${r}" not parsable. Format expected: "<agg name>:<value>"`);
      const l = r.slice(0, s), u = i ? n : r.length, f = r.slice(s + 1, u);
      let p = [l, f];
      if (i) {
        const h = r.slice(n + 1, r.length);
        p.push(this._filterStringToList(h));
      }
      return p;
    }, this._mapUrlParamsToQueryState = (r) => {
      const n = {};
      return Object.keys(r).forEach((i) => {
        const s = this.fromUrlParamsMapping[i];
        this.urlParamValidator.isValid(this, s, r[i]) ? (n[s] = r[i], s === "filters" && (Array.isArray(r[i]) || (r[i] = [r[i]]), n[s] = r[i].map((l) => this._filterStringToList(l)))) : console.warn(`URL parameter '${i}' with value '${r[i]}' is incorrect and was ignored.`);
      }), n;
    }, this._mergeParamsIntoState = (r, n) => {
      const i = Pi(n);
      return Object.keys(r).forEach((s) => {
        i[s] = r[s];
      }), i;
    }, this.urlParamsMapping = YL(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !u5(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !m5(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new NK(), this.urlParser = t.urlParser || new kK(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), i = this._mergeParamsIntoState(n, t), s = this._mapQueryStateToUrlParams(i);
    return sb(s), i;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      IK(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    sb(r);
  }
}
const MK = "SET_QUERY_COMPONENT_INITIAL_STATE", RS = "SET_QUERY_STRING", $p = "SET_QUERY_SORTING", Rp = "SET_QUERY_SORT_BY", Np = "SET_QUERY_SORT_ORDER", Ts = "SET_QUERY_STATE", NS = "SET_QUERY_PAGINATION_PAGE", IS = "SET_QUERY_PAGINATION_SIZE", kS = "SET_QUERY_FILTERS", DS = "SET_QUERY_SUGGESTIONS", MS = "SET_SUGGESTION_STRING", LS = "CLEAR_QUERY_SUGGESTIONS", FS = "RESULTS_LOADING", BS = "RESULTS_FETCH_SUCCESS", US = "RESULTS_FETCH_ERROR", If = "RESULTS_UPDATE_LAYOUT", zS = "RESET_QUERY", LK = (e) => (t) => {
  e && t(zr({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, qS = (e) => (t) => {
  t({
    type: Ts,
    payload: e
  }), t(zr());
}, jS = (e) => (t) => {
  t({
    type: RS,
    payload: e
  }), t(zr());
}, FK = (e, t) => (r) => {
  r({
    type: $p,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(zr());
}, BK = (e) => (t) => {
  t({
    type: Rp,
    payload: e
  }), t(zr());
}, UK = (e) => (t) => {
  t({
    type: Np,
    payload: e
  }), t(zr());
}, zK = (e) => (t) => {
  t({
    type: NS,
    payload: e
  }), t(zr());
}, qK = (e) => (t) => {
  t({
    type: IS,
    payload: e
  }), t(zr());
}, Ip = (e) => (t) => {
  t({
    type: kS,
    payload: e
  }), t(zr());
}, jK = (e) => async (t, r, n) => {
  const i = n.urlHandlerApi;
  if (i) {
    await t({
      type: If,
      payload: e
    });
    const s = r().query;
    i.set(s);
  } else
    t({
      type: If,
      payload: e
    });
}, HK = () => (e, t, r) => {
  e({
    type: zS,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(zr());
}, WK = (e, t, r, n) => {
  const i = t.urlHandlerApi;
  i && (r ? i.replace(e) : n && i.set(e));
}, VK = (e, t, r, n) => {
  const i = r().query;
  t({
    type: Ts,
    payload: {
      ...i,
      ...e.newQueryState
    }
  });
  const s = Pi(r().query), l = n.urlHandlerApi;
  return l && l.replace(s), delete e.newStateQuery, e;
}, GK = (e, t, r, n) => {
  function i(u, f, p, h) {
    u.queryString === "" ? (u.sortBy = p.defaultSortingOnEmptyQueryString.sortBy, u.sortOrder = p.defaultSortingOnEmptyQueryString.sortOrder) : (u.sortBy = f.initialSortBy, u.sortOrder = f.initialSortOrder), h({
      type: Ts,
      payload: u
    });
  }
  function s(u, f, p, h) {
    f.hasUserChangedSorting || i(u, f, p, h);
  }
  !rn(r.defaultSortingOnEmptyQueryString) && s(e, t, r, n);
}, zr = function() {
  let {
    shouldUpdateUrlQueryString: e = !0,
    shouldReplaceUrlQueryString: t = !1
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return async (r, n, i) => {
    const s = n().app;
    let l = Pi(n().query);
    GK(l, s, i, r), l = Pi(n().query), WK(l, i, t, e), r({
      type: FS
    });
    try {
      let f = await i.searchApi.search(l);
      "newQueryState" in f && (f = VK(Pi(f), r, n, i)), r({
        type: BS,
        payload: {
          aggregations: f.aggregations,
          hits: f.hits,
          total: f.total
        }
      });
    } catch (u) {
      if (u instanceof Cp) {
        console.debug(u);
        return;
      } else
        console.error(u), r({
          type: US,
          payload: {
            error: u
          }
        });
    }
  };
}, QK = (e) => (t) => {
  t({
    type: MS,
    payload: e
  }), t(KK());
}, KK = () => async (e, t, r) => {
  const n = Pi(t().query), i = r.suggestionApi;
  try {
    const s = await i.search(n);
    e({
      type: DS,
      payload: {
        suggestions: s.suggestions
      }
    });
  } catch (s) {
    console.error("Could not load suggestions due to: " + s);
  }
}, YK = () => (e) => {
  e({
    type: LS,
    payload: {
      suggestions: []
    }
  });
}, XK = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: Ts,
      payload: n
    }), e(zr({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, ot = /* @__PURE__ */ b.createContext({}), JK = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
    case $p:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Rp:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Np:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    default:
      return e;
  }
}, ZK = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case RS:
      return {
        ...e,
        queryString: t.payload,
        page: 1
      };
    case $p:
      return {
        ...e,
        sortBy: t.payload.sortBy,
        sortOrder: t.payload.sortOrder,
        _sortUserChanged: !0,
        page: 1
      };
    case Rp:
      return {
        ...e,
        sortBy: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case Np:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case NS:
      return {
        ...e,
        page: t.payload
      };
    case IS:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case kS:
      return {
        ...e,
        page: 1,
        filters: PS(t.payload, e.filters)
      };
    case DS:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case LS:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case MS:
      return {
        ...e,
        suggestionString: t.payload
      };
    case MK:
      return {
        ...e,
        ...t.payload
      };
    case Ts:
      return {
        ...e,
        ...Zl,
        ...AS(Zl, t.payload, CS)
      };
    case If:
      return {
        ...e,
        layout: t.payload
      };
    case zS:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, e9 = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case FS:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case BS:
      return {
        loading: !1,
        data: {
          ...e.data,
          aggregations: t.payload.aggregations,
          hits: t.payload.hits,
          total: t.payload.total
        },
        error: {}
      };
    case US:
      return {
        loading: !1,
        data: {
          ...e.data,
          aggregations: {},
          hits: [],
          total: 0
        },
        error: t.payload.error
      };
    default:
      return e;
  }
};
var t9 = wK({
  app: JK,
  query: ZK,
  results: e9
});
function lb(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: i,
    sortOrder: s
  } = t;
  return r !== i || n !== s;
}
function r9(e, t, r) {
  const n = lb(r, t), i = !rn(e.defaultSortingOnEmptyQueryString);
  let s = !1;
  return i && (s = lb(r, e.defaultSortingOnEmptyQueryString)), n && s;
}
function n9(e) {
  const t = {
    ...Zl,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = r9(e, t, r), i = {
    ...$K,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, s = {
    ...CK,
    loading: e.searchOnInit
  };
  return {
    app: i,
    query: r,
    results: s
  };
}
function a9(e) {
  const t = n9(e);
  return _S(t9, t, _K(OK.withExtraArgument(e)));
}
function ub(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class kp extends We {
  constructor(t) {
    super(t), this.updateQueryState = (r) => {
      const {
        updateQueryState: n
      } = this.props;
      n(r);
    }, this.onQueryChanged = (r) => {
      let {
        detail: n
      } = r;
      const {
        appName: i
      } = this.context;
      if (!i)
        this.updateQueryState(n.searchQuery);
      else {
        const l = n.appName;
        l === i ? this.updateQueryState(n.searchQuery) : console.debug(`React-SearchKit '${i}': ignoring event sent for app '${l}'`);
      }
    }, this.searchOnInit = t.searchOnInit, this.eventListenerEnabled = t.eventListenerEnabled, this.onAppInitialized = t.onAppInitialized, this.searchOnUrlQueryStringChanged = t.searchOnUrlQueryStringChanged;
  }
  componentDidMount() {
    this.eventListenerEnabled && window.addEventListener("queryChanged", this.onQueryChanged), window.onpopstate = () => {
      this.searchOnUrlQueryStringChanged();
    }, this.onAppInitialized(this.searchOnInit);
  }
  componentWillUnmount() {
    window.onpopstate = () => {
    }, window.removeEventListener("queryChanged", this.onQueryChanged);
  }
  render() {
    const {
      children: t
    } = this.props;
    return t;
  }
}
kp.defaultProps = {
  searchOnInit: !0,
  eventListenerEnabled: !1
};
kp.contextType = ot;
var i9 = Ee.component("Bootstrap", kp);
const o9 = (e) => ({
  onAppInitialized: (t) => e(LK(t)),
  updateQueryState: (t) => e(qS(t)),
  searchOnUrlQueryStringChanged: () => e(XK())
}), s9 = Tt(null, o9)(i9);
class Dp extends We {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new DK(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = a9(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
  }
  render() {
    const {
      appName: t,
      children: r,
      eventListenerEnabled: n,
      overridableId: i,
      searchOnInit: s
    } = this.props, l = {
      appName: t,
      buildUID: (f, p) => ub(f, p, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, u = ub("ReactSearchKit.children", i, t);
    return /* @__PURE__ */ b.createElement(ot.Provider, {
      value: l
    }, /* @__PURE__ */ b.createElement(mS, {
      store: this.store
    }, /* @__PURE__ */ b.createElement(s9, {
      searchOnInit: s,
      eventListenerEnabled: n
    }, /* @__PURE__ */ b.createElement(Ee, {
      id: u
    }, r))));
  }
}
Dp.defaultProps = {
  suggestionApi: null,
  urlHandlerApi: {
    enabled: !0,
    overrideConfig: {},
    customHandler: null
  },
  searchOnInit: !0,
  appName: "",
  eventListenerEnabled: !1,
  overridableId: "",
  initialQueryState: {},
  defaultSortingOnEmptyQueryString: {}
};
Dp.contextType = ot;
var l9 = Ee.component("ReactSearchKit", Dp);
class HS extends We {
  constructor(t) {
    super(t), this._getLabel = (r) => {
      const n = r[0];
      let i = r[1], s = [n, i];
      if (r.length === 3) {
        const {
          label: u,
          activeFilter: f
        } = this._getLabel(r[2]);
        i = `${i}.${u}`, s.push(f);
      }
      return {
        label: i,
        activeFilter: s
      };
    }, this.updateQueryFilters = t.updateQueryFilters;
  }
  render() {
    const {
      filters: t,
      overridableId: r
    } = this.props;
    return !!t.length && /* @__PURE__ */ b.createElement(WS, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
HS.defaultProps = {
  overridableId: ""
};
const WS = (e) => {
  let {
    overridableId: t,
    filters: r,
    removeActiveFilter: n,
    getLabel: i
  } = e;
  const {
    buildUID: s
  } = ct(ot);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: s("ActiveFilters.element", t),
    filters: r,
    removeActiveFilter: n,
    getLabel: i
  }, /* @__PURE__ */ b.createElement(b.Fragment, null, r.map((l, u) => {
    const {
      label: f,
      activeFilter: p
    } = i(l);
    return (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ b.createElement(fr, {
        image: !0,
        key: u,
        onClick: () => n(p)
      }, f, /* @__PURE__ */ b.createElement(wt, {
        name: "delete"
      }))
    );
  })));
};
WS.defaultProps = {
  overridableId: ""
};
var u9 = Ee.component("ActiveFilters", HS);
const c9 = (e) => ({
  updateQueryFilters: (t) => e(Ip(t))
});
Tt((e) => ({
  filters: e.query.filters
}), c9)(u9);
function d9(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
  }
}
var f9 = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
d9(f9);
class VS extends We {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? xK.debounce(this.props.updateSuggestions, this.props.debounceTime, {
      leading: !0
    }) : this.props.updateSuggestions, this.clearSuggestions = this.props.clearSuggestions, this.minCharsToAutocomplete = this.props.minCharsToAutocomplete, this.state = {
      currentValue: this.props.queryString || ""
    }, this.handleAutocompleteChange = t.handleAutocompleteChange || this._handleAutocompleteChange;
  }
  render() {
    const {
      placeholder: t,
      suggestions: r,
      overridableId: n
    } = this.props;
    return /* @__PURE__ */ b.createElement(h9, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
VS.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const p9 = (e) => /* @__PURE__ */ b.createElement(VS, Object.assign({
  key: e.queryString
}, e)), h9 = (e) => {
  let {
    overridableId: t,
    placeholder: r,
    queryString: n,
    querySuggestions: i,
    onInputChange: s,
    executeSearch: l,
    ...u
  } = e;
  const {
    buildUID: f
  } = ct(ot), p = (m, v) => {
    l();
  }, h = (m, v) => {
    m.key === "Enter" && l();
  };
  return /* @__PURE__ */ b.createElement(Ee, Object.assign({
    id: f("AutocompleteSearchBar.element", t)
  }, u), /* @__PURE__ */ b.createElement("div", {
    className: "AutoCompleteText"
  }, /* @__PURE__ */ b.createElement(BE, {
    action: {
      content: "Search",
      onClick: p
    },
    fluid: !0,
    placeholder: r,
    onChange: (m, v) => {
      let {
        value: w
      } = v;
      s(w);
    },
    value: n,
    onKeyPress: h
  }), /* @__PURE__ */ b.createElement(g9, {
    querySuggestions: i,
    overridableId: t
  })));
}, g9 = (e) => {
  let {
    overridableId: t,
    ...r
  } = e;
  const {
    querySuggestions: n
  } = r, {
    buildUID: i
  } = ct(ot), s = async (l) => {
    await (void 0).setState({
      currentValue: l
    }), (void 0).clearSuggestions(), (void 0).executeSearch();
  };
  return n.length === 0 ? null : /* @__PURE__ */ b.createElement(Ee, Object.assign({
    id: i("AutocompleteSearchBar.suggestions", t)
  }, r), /* @__PURE__ */ b.createElement("ul", null, n.map((l) => /* @__PURE__ */ b.createElement(En, {
    as: "li",
    onClick: () => s(l),
    key: l
  }, l))));
};
var m9 = Ee.component("AutocompleteSearchBar", p9);
const v9 = (e) => ({
  updateQueryString: (t) => e(jS(t)),
  updateSuggestions: (t) => e(QK(t)),
  clearSuggestions: () => e(YK())
}), y9 = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
Tt(y9, v9)(m9);
class Lu extends We {
  constructor(t) {
    super(t), this._isSelected = (r, n, i) => i.filter((s) => s[0] === r && s[1] === n).length >= 1, this.getChildAggCmps = (r, n) => {
      const i = this.childAgg && this.childAgg.aggName in r;
      let s = [];
      if (i) {
        const l = r[this.childAgg.aggName].buckets;
        n.forEach((f) => {
          const p = f[0] === this.aggName, h = f[1] === r.key, m = f.length === 3;
          p && h && m && s.push(f[2]);
        });
        const u = (f) => {
          this.onFilterClicked([this.aggName, r.key, f]);
        };
        return /* @__PURE__ */ b.createElement(Lu, {
          buckets: l,
          selectedFilters: s,
          field: this.childAgg.field,
          aggName: this.childAgg.aggName,
          childAgg: this.childAgg.childAgg,
          onFilterClicked: u
        });
      }
      return null;
    }, this.field = t.field, this.aggName = t.aggName, this.childAgg = t.childAgg, this.onFilterClicked = t.onFilterClicked;
  }
  render() {
    const {
      buckets: t,
      selectedFilters: r,
      overridableId: n
    } = this.props, i = t.map((s) => {
      const l = s.key_as_string ? s.key_as_string : s.key, u = this._isSelected(this.aggName, l, r), f = (h) => {
        this.onFilterClicked([this.aggName, h]);
      }, p = (h) => this.getChildAggCmps(h, r);
      return /* @__PURE__ */ b.createElement(QS, {
        key: s.key,
        bucket: s,
        keyField: l,
        isSelected: u,
        onFilterClicked: f,
        getChildAggCmps: p,
        overridableId: n
      });
    });
    return /* @__PURE__ */ b.createElement(GS, {
      valuesCmp: i,
      overridableId: n
    });
  }
}
Lu.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const GS = (e) => {
  let {
    valuesCmp: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = ct(ot);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: n("BucketAggregationContainer.element", r),
    valuesCmp: t
  }, /* @__PURE__ */ b.createElement(zE, null, t));
};
GS.defaultProps = {
  overridableId: ""
};
const QS = (e) => {
  let {
    bucket: t,
    isSelected: r,
    onFilterClicked: n,
    getChildAggCmps: i,
    overridableId: s,
    keyField: l
  } = e;
  const {
    buildUID: u,
    nextComponentIndex: f
  } = ct(ot), p = t.label ? t.label : `${l} (${t.doc_count.toLocaleString("en-US")})`, h = i(t);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: u("BucketAggregationValues.element", s),
    bucket: t,
    label: p,
    onFilterClicked: n,
    isSelected: r,
    childAggCmps: h
  }, /* @__PURE__ */ b.createElement(zE.Item, {
    key: t.key
  }, /* @__PURE__ */ b.createElement(Ki, {
    label: p,
    id: f(),
    value: t.key,
    onClick: () => n(t.key),
    checked: r
  }), h));
};
QS.defaultProps = {
  overridableId: ""
};
var b9 = Ee.component("BucketAggregationValues", Lu);
class KS extends We {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: i
      } = this.props;
      return /* @__PURE__ */ b.createElement(b9, {
        buckets: r,
        selectedFilters: n,
        field: this.agg.field,
        aggName: this.agg.aggName,
        childAgg: this.agg.childAgg,
        onFilterClicked: this.onFilterClicked,
        overridableId: i
      });
    }, this._getSelectedFilters = (r) => r.filter((n) => n[0] === this.agg.aggName), this._getResultBuckets = (r) => {
      const n = Io(r, this.agg.aggName, {});
      return "buckets" in n ? (Array.isArray(n.buckets) || (n.buckets = Object.entries(n.buckets).map((i) => {
        let [s, l] = i;
        return {
          ...l,
          key: s
        };
      })), n.buckets) : [];
    }, this.title = t.title, this.agg = t.agg, this.updateQueryFilters = t.updateQueryFilters;
  }
  render() {
    const {
      userSelectionFilters: t,
      resultsAggregations: r,
      overridableId: n,
      ...i
    } = this.props, s = this._getSelectedFilters(t), l = this._getResultBuckets(r), u = l.length ? this._renderValues(l, s) : null;
    return /* @__PURE__ */ b.createElement(YS, Object.assign({
      title: this.title,
      containerCmp: u,
      overridableId: n
    }, i));
  }
}
KS.defaultProps = {
  overridableId: ""
};
const YS = (e) => {
  let {
    overridableId: t,
    agg: r,
    title: n,
    containerCmp: i,
    updateQueryFilters: s
  } = e;
  const {
    buildUID: l
  } = ct(ot);
  return i && /* @__PURE__ */ b.createElement(Ee, {
    id: l("BucketAggregation.element", t),
    agg: r,
    title: n,
    containerCmp: i,
    updateQueryFilters: s
  }, /* @__PURE__ */ b.createElement(Et, null, /* @__PURE__ */ b.createElement(Et.Content, null, /* @__PURE__ */ b.createElement(Et.Header, null, n)), /* @__PURE__ */ b.createElement(Et.Content, null, i)));
};
YS.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var E9 = Ee.component("BucketAggregation", KS);
const w9 = (e) => ({
  updateQueryFilters: (t) => e(Ip(t))
});
Tt((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), w9)(E9);
class XS extends We {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
XS.defaultProps = {
  condition: !0
};
var Pr = Ee.component("ShouldRender", XS);
class JS extends We {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: i
    } = this.props;
    return /* @__PURE__ */ b.createElement(Pr, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ b.createElement(ZS, {
      totalResults: r,
      overridableId: i
    })));
  }
}
JS.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const ZS = (e) => {
  let {
    totalResults: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = ct(ot), i = n("Count.element", r);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: i,
    totalResults: t
  }, /* @__PURE__ */ b.createElement(fr, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
ZS.defaultProps = {
  overridableId: ""
};
var S9 = Ee.component("Count", JS);
const _9 = Tt((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(S9);
class e_ extends We {
  constructor(t) {
    super(t), this.resetQuery = t.resetQuery;
  }
  render() {
    const {
      loading: t,
      totalResults: r,
      error: n,
      queryString: i,
      extraContent: s,
      overridableId: l,
      userSelectionFilters: u,
      ...f
    } = this.props;
    return /* @__PURE__ */ b.createElement(Pr, {
      condition: !t && rn(n) && r === 0
    }, /* @__PURE__ */ b.createElement(t_, Object.assign({}, f, {
      queryString: i,
      resetQuery: this.resetQuery,
      extraContent: s,
      userSelectionFilters: u,
      overridableId: l
    })));
  }
}
e_.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const t_ = (e) => {
  let {
    overridableId: t,
    queryString: r,
    resetQuery: n,
    extraContent: i,
    userSelectionFilters: s
  } = e;
  const {
    buildUID: l
  } = ct(ot);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: l("EmptyResults.element", t),
    queryString: r,
    resetQuery: n,
    extraContent: i,
    userSelectionFilters: s
  }, /* @__PURE__ */ b.createElement(Wa, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ b.createElement(Pn, {
    icon: !0
  }, /* @__PURE__ */ b.createElement(wt, {
    name: "search"
  }), "No results found!"), r && /* @__PURE__ */ b.createElement("em", null, 'Current search "', r, '"'), /* @__PURE__ */ b.createElement("br", null), /* @__PURE__ */ b.createElement(En, {
    primary: !0,
    onClick: () => n()
  }, "Clear query"), i));
};
t_.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var O9 = Ee.component("EmptyResults", e_);
const T9 = (e) => ({
  resetQuery: () => e(HK())
}), x9 = Tt((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), T9)(O9);
function r_(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ b.createElement(Pr, {
    condition: !t && !rn(r)
  }, /* @__PURE__ */ b.createElement(n_, {
    error: r,
    overridableId: n
  }));
}
r_.defaultProps = {
  overridableId: ""
};
const n_ = (e) => {
  let {
    error: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = ct(ot);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ b.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
n_.defaultProps = {
  overridableId: ""
};
var P9 = Ee.component("Error", r_);
Tt((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(P9);
function A9(e) {
  const t = (i) => /* @__PURE__ */ b.createElement(e, i);
  return Tt((i) => ({
    currentQueryState: i.query,
    currentResultsState: i.results
  }), (i) => ({
    updateQueryState: (s) => i(qS(s))
  }))(t);
}
class a_ extends We {
  constructor(t) {
    super(t), this.onLayoutChange = (r) => {
      this.updateLayout(r);
    }, this.updateLayout = t.updateLayout;
  }
  render() {
    const {
      currentLayout: t,
      loading: r,
      totalResults: n,
      overridableId: i
    } = this.props;
    return /* @__PURE__ */ b.createElement(Pr, {
      condition: t !== null && !r && n > 0
    }, /* @__PURE__ */ b.createElement(i_, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: i
    }));
  }
}
a_.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
const i_ = (e) => {
  let {
    overridableId: t,
    currentLayout: r,
    onLayoutChange: n
  } = e;
  const {
    buildUID: i
  } = ct(ot);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: i("LayoutSwitcher.element", t),
    currentLayout: r,
    onLayoutChange: n
  }, /* @__PURE__ */ b.createElement(Ti, {
    compact: !0,
    icon: !0
  }, /* @__PURE__ */ b.createElement(Ti.Item, {
    name: "list",
    active: r === "list",
    onClick: (s, l) => {
      let {
        name: u
      } = l;
      return n(u);
    }
  }, /* @__PURE__ */ b.createElement(wt, {
    name: "list layout"
  })), /* @__PURE__ */ b.createElement(Ti.Item, {
    name: "grid",
    active: r === "grid",
    onClick: (s, l) => {
      let {
        name: u
      } = l;
      return n(u);
    }
  }, /* @__PURE__ */ b.createElement(wt, {
    name: "grid layout"
  }))));
};
i_.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var C9 = Ee.component("LayoutSwitcher", a_);
const $9 = (e) => ({
  updateLayout: (t) => e(jK(t))
});
Tt((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), $9)(C9);
const cb = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class o_ extends We {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...cb,
      ...t.options
    } : cb;
  }
  render() {
    const {
      loading: t,
      totalResults: r,
      currentPage: n,
      currentSize: i,
      overridableId: s,
      showWhenOnlyOnePage: l
    } = this.props;
    return /* @__PURE__ */ b.createElement(Pr, {
      condition: !t && n > -1 && i > -1 && l ? r > 0 : r > i
    }, /* @__PURE__ */ b.createElement(s_, {
      currentPage: n,
      currentSize: i,
      totalResults: r,
      onPageChange: this.onPageChange,
      options: this.options,
      overridableId: s,
      maxTotalResults: this.options.maxTotalResults
    }));
  }
}
o_.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const s_ = (e) => {
  let {
    overridableId: t,
    currentPage: r,
    currentSize: n,
    totalResults: i,
    onPageChange: s,
    options: l,
    maxTotalResults: u,
    ...f
  } = e;
  const p = l.boundaryRangeCount, h = l.siblingRangeCount, m = l.showEllipsis, v = l.showFirst, w = l.showLast, O = l.showPrev, T = l.showNext, _ = l.size, A = Math.floor(u / n), M = Math.ceil(i / n), k = Math.min(M, A), {
    buildUID: U
  } = ct(ot);
  return r > M && s(M), /* @__PURE__ */ b.createElement(Ee, {
    id: U("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: i,
    options: l,
    onPageChange: s
  }, /* @__PURE__ */ b.createElement(Qi, Object.assign({
    activePage: r,
    totalPages: k,
    onPageChange: (N, F) => {
      let {
        activePage: x
      } = F;
      return s(x);
    },
    boundaryRange: p,
    siblingRange: h,
    ellipsisItem: m ? void 0 : null,
    firstItem: v ? void 0 : null,
    lastItem: w ? void 0 : null,
    prevItem: O ? void 0 : null,
    nextItem: T ? void 0 : null,
    size: _
  }, f)));
};
s_.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var R9 = Ee.component("Pagination", o_);
const N9 = (e) => ({
  updateQueryPage: (t) => e(zK(t))
}), I9 = Tt((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), N9)(R9);
function l_(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    resultsPerRow: i,
    overridableId: s,
    onResultsRendered: l
  } = e;
  return Mf(() => {
    l && l();
  }, [l]), /* @__PURE__ */ b.createElement(Pr, {
    condition: !t && r > 0
  }, /* @__PURE__ */ b.createElement(u_, {
    results: n,
    resultsPerRow: i,
    overridableId: s
  }));
}
l_.defaultProps = {
  resultsPerRow: 3,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const k9 = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = ct(ot);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: n("ResultsGrid.item", r),
    result: t
  }, /* @__PURE__ */ b.createElement(Et, {
    fluid: !0,
    href: `#${t.id}`
  }, /* @__PURE__ */ b.createElement(Ft, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ b.createElement(Et.Content, null, /* @__PURE__ */ b.createElement(Et.Header, null, t.title), /* @__PURE__ */ b.createElement(Et.Description, null, t.description))));
}, u_ = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: i
  } = ct(ot), s = r.map((l, u) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ b.createElement(k9, {
      key: u,
      result: l,
      overridableId: t
    })
  ));
  return /* @__PURE__ */ b.createElement(Ee, {
    id: i("ResultsGrid.container", t),
    results: s,
    resultsPerRow: n
  }, /* @__PURE__ */ b.createElement(Et.Group, {
    itemsPerRow: n
  }, s));
};
u_.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var D9 = Ee.component("ResultsGrid", l_);
const M9 = Tt((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(D9);
function c_(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: i,
    onResultsRendered: s
  } = e;
  return Mf(() => {
    s && s();
  }, [s]), /* @__PURE__ */ b.createElement(Pr, {
    condition: !t && r > 0
  }, /* @__PURE__ */ b.createElement(d_, {
    results: n,
    overridableId: i
  }));
}
c_.defaultProps = {
  overridableId: "",
  onResultsRendered: () => {
  }
};
const L9 = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = ct(ot);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ b.createElement(It, {
    href: `#${t.id}`
  }, /* @__PURE__ */ b.createElement(It.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ b.createElement(It.Content, null, /* @__PURE__ */ b.createElement(It.Header, null, t.title), /* @__PURE__ */ b.createElement(It.Description, null, t.description))));
}, d_ = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = ct(ot), i = t.map((s, l) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ b.createElement(L9, {
      result: s,
      key: l,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ b.createElement(Ee, {
    id: n("ResultsList.container", r),
    results: i
  }, /* @__PURE__ */ b.createElement(It.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, i));
};
d_.defaultProps = {
  overridableId: ""
};
var F9 = Ee.component("ResultsList", c_);
const f_ = Tt((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(F9);
function p_(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ b.createElement(h_, {
    overridableId: n
  }) : t;
}
p_.defaultProps = {
  overridableId: ""
};
const h_ = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = ct(ot);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ b.createElement(ss, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
h_.defaultProps = {
  overridableId: ""
};
var B9 = Ee.component("ResultsLoader", p_);
const U9 = Tt((e) => ({
  loading: e.results.loading
}))(B9);
function g_(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: i,
    onResultsRendered: s
  } = e;
  return /* @__PURE__ */ b.createElement(Pr, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ b.createElement(m_, {
    layout: n,
    overridableId: i,
    onResultsRendered: s
  }));
}
g_.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const m_ = (e) => {
  let {
    layout: t,
    overridableId: r,
    onResultsRendered: n
  } = e;
  const {
    buildUID: i
  } = ct(ot);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: i("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ b.createElement(f_, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ b.createElement(M9, {
    overridableId: r,
    onResultsRendered: n
  }));
};
m_.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var z9 = Ee.component("ResultsMultiLayout", g_);
Tt((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(z9);
class v_ extends We {
  constructor(t) {
    super(t), this.onChange = (r) => {
      const {
        currentSize: n
      } = this.props;
      r !== n && this.updateQuerySize(r);
    }, this.options = t.values, this.updateQuerySize = t.updateQuerySize;
  }
  render() {
    const {
      loading: t,
      currentSize: r,
      totalResults: n,
      label: i,
      overridableId: s,
      ariaLabel: l,
      selectOnNavigation: u,
      showWhenOnlyOnePage: f
    } = this.props;
    return /* @__PURE__ */ b.createElement(Pr, {
      condition: !t && r !== -1 && f ? n > 0 : n > r
    }, i(/* @__PURE__ */ b.createElement(y_, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: l,
      selectOnNavigation: u
    })));
  }
}
v_.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const y_ = (e) => {
  let {
    overridableId: t,
    currentSize: r,
    options: n,
    onValueChange: i,
    ariaLabel: s,
    selectOnNavigation: l
  } = e;
  const {
    buildUID: u
  } = ct(ot), f = n.map((p, h) => ({
    key: h,
    text: p.text,
    value: p.value
  }));
  return /* @__PURE__ */ b.createElement(Ee, {
    id: u("ResultsPerPage.element", t),
    currentSize: r,
    options: n,
    onValueChange: i,
    ariaLabel: s,
    selectOnNavigation: l
  }, /* @__PURE__ */ b.createElement(Kt, {
    inline: !0,
    compact: !0,
    options: f,
    value: r,
    onChange: (p, h) => {
      let {
        value: m
      } = h;
      return i(m);
    },
    "aria-label": s,
    selectOnNavigation: l
  }));
};
y_.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var q9 = Ee.component("ResultsPerPage", v_);
const j9 = (e) => ({
  updateQuerySize: (t) => e(qK(t))
}), H9 = Tt((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), j9)(q9);
class b_ extends We {
  constructor(t) {
    super(t), this.onInputChange = (r) => {
      this.setState({
        currentValue: r
      });
    }, this.executeSearch = () => {
      const {
        currentValue: r
      } = this.state;
      this.updateQueryString(r);
    }, this.onBtnSearchClick = () => {
      this.executeSearch();
    }, this.onKeyPress = (r) => {
      r.key === "Enter" && this.executeSearch();
    }, this.updateQueryString = t.updateQueryString, this.state = {
      currentValue: t.queryString || ""
    };
  }
  render() {
    const {
      actionProps: t,
      autofocus: r,
      executeSearch: n,
      onBtnSearchClick: i,
      onInputChange: s,
      onKeyPress: l,
      overridableId: u,
      placeholder: f,
      uiProps: p
    } = this.props, {
      currentValue: h
    } = this.state;
    return /* @__PURE__ */ b.createElement(Mp, {
      actionProps: t,
      autofocus: r,
      executeSearch: n || this.executeSearch,
      onBtnSearchClick: i || this.onBtnSearchClick,
      onInputChange: s || this.onInputChange,
      onKeyPress: l || this.onKeyPress,
      overridableId: u,
      placeholder: f,
      queryString: h,
      uiProps: p
    });
  }
}
b_.defaultProps = {
  actionProps: null,
  autofocus: !1,
  executeSearch: null,
  onBtnSearchClick: null,
  onInputChange: null,
  onKeyPress: null,
  overridableId: "",
  placeholder: "",
  queryString: "",
  uiProps: null
};
const E_ = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ b.createElement(b_, Object.assign({
    key: t
  }, e));
};
E_.defaultProps = {
  queryString: ""
};
class Mp extends We {
  componentDidMount() {
    const {
      autofocus: t
    } = this.props;
    t && this.focusInput && this.focusInput.focus();
  }
  render() {
    const {
      actionProps: t,
      onBtnSearchClick: r,
      onInputChange: n,
      onKeyPress: i,
      overridableId: s,
      placeholder: l,
      queryString: u,
      uiProps: f
    } = this.props, {
      buildUID: p
    } = this.context;
    return /* @__PURE__ */ b.createElement(Ee, {
      id: p("SearchBar.element", s),
      queryString: u,
      onBtnSearchClick: r,
      onInputChange: n,
      onKeyPress: i,
      placeholder: l,
      actionProps: t,
      uiProps: f
    }, /* @__PURE__ */ b.createElement(BE, Object.assign({
      action: {
        content: "Search",
        onClick: r,
        ...t
      },
      fluid: !0
    }, f, {
      placeholder: l || "Type something",
      onChange: (h, m) => {
        let {
          value: v
        } = m;
        n(v);
      },
      value: u,
      onKeyPress: i,
      ref: (h) => {
        this.focusInput = h;
      }
    })));
  }
}
Mp.defaultProps = {
  actionProps: null,
  autofocus: !1,
  onBtnSearchClick: null,
  onInputChange: null,
  onKeyPress: null,
  overridableId: "",
  placeholder: "",
  queryString: "",
  uiProps: null
};
Mp.contextType = ot;
var W9 = Ee.component("SearchBar", E_);
const V9 = (e) => ({
  updateQueryString: (t) => e(jS(t))
}), G9 = Tt((e) => ({
  queryString: e.query.queryString
}), V9)(W9);
class w_ extends We {
  constructor(t) {
    super(t), this._computeValue = (r, n) => n ? `${r}-${n}` : r, this.onChange = (r) => {
      const {
        currentSortBy: n,
        currentSortOrder: i
      } = this.props;
      if (r === this._computeValue(n, i))
        return;
      const s = this.options.find((l) => l.value === r);
      this.updateQuerySorting(s.sortBy, s.sortOrder);
    }, this.options = t.values, this.updateQuerySorting = t.updateQuerySorting, this.options.forEach((r) => r.value = this._computeValue(r.sortBy, r.sortOrder));
  }
  render() {
    const {
      currentSortBy: t,
      currentSortOrder: r,
      loading: n,
      totalResults: i,
      label: s,
      overridableId: l,
      sortOrderDisabled: u,
      ariaLabel: f,
      selectOnNavigation: p
    } = this.props;
    return /* @__PURE__ */ b.createElement(Pr, {
      condition: t !== null && (u || t !== null) && !n && i > 0
    }, s(/* @__PURE__ */ b.createElement(S_, {
      currentSortBy: t,
      currentSortOrder: r,
      options: this.options,
      onValueChange: this.onChange,
      computeValue: this._computeValue,
      overridableId: l,
      ariaLabel: f,
      selectOnNavigation: p
    })));
  }
}
w_.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const S_ = (e) => {
  let {
    overridableId: t,
    currentSortBy: r,
    currentSortOrder: n,
    options: i,
    onValueChange: s,
    computeValue: l,
    ariaLabel: u,
    selectOnNavigation: f
  } = e;
  const {
    buildUID: p
  } = ct(ot), h = l(r, n), m = i.map((v, w) => ({
    key: w,
    text: v.text,
    value: v.value
  }));
  return /* @__PURE__ */ b.createElement(Ee, {
    id: p("Sort.element", t),
    options: i,
    currentSortBy: r,
    currentSortOrder: n,
    onValueChange: s,
    ariaLabel: u,
    selectOnNavigation: f
  }, /* @__PURE__ */ b.createElement(Kt, {
    selection: !0,
    options: m,
    value: h,
    onChange: (v, w) => {
      let {
        value: O
      } = w;
      return s(O);
    },
    "aria-label": u,
    selectOnNavigation: f
  }));
};
S_.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var Q9 = Ee.component("Sort", w_);
const K9 = (e) => ({
  updateQuerySorting: (t, r) => e(FK(t, r))
});
Tt((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), K9)(Q9);
class __ extends We {
  constructor(t) {
    super(t), this.onChange = (r) => {
      const {
        currentSortBy: n
      } = this.props;
      r !== n && this.updateQuerySortBy(r);
    }, this.options = t.values, this.updateQuerySortBy = t.updateQuerySortBy;
  }
  render() {
    const {
      currentSortBy: t,
      loading: r,
      totalResults: n,
      label: i,
      overridableId: s,
      ariaLabel: l,
      selectOnNavigation: u
    } = this.props;
    return /* @__PURE__ */ b.createElement(Pr, {
      condition: t !== null && !r && n > 0
    }, i(/* @__PURE__ */ b.createElement(O_, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: l,
      selectOnNavigation: u
    })));
  }
}
__.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const O_ = (e) => {
  let {
    overridableId: t,
    currentSortBy: r,
    options: n,
    onValueChange: i,
    ariaLabel: s,
    selectOnNavigation: l
  } = e;
  const {
    buildUID: u
  } = ct(ot), f = n.map((p, h) => ({
    key: h,
    text: p.text,
    value: p.value
  }));
  return /* @__PURE__ */ b.createElement(Ee, {
    id: u("SortBy.element", t),
    options: n,
    currentSortBy: r,
    onValueChange: i,
    ariaLabel: s,
    selectOnNavigation: l
  }, /* @__PURE__ */ b.createElement(Kt, {
    selection: !0,
    compact: !0,
    options: f,
    value: r,
    onChange: (p, h) => {
      let {
        value: m
      } = h;
      return i(m);
    },
    "aria-label": s,
    selectOnNavigation: l
  }));
};
O_.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var Y9 = Ee.component("SortBy", __);
const X9 = (e) => ({
  updateQuerySortBy: (t) => e(BK(t))
});
Tt((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), X9)(Y9);
class T_ extends We {
  constructor(t) {
    super(t), this.onChange = (r) => {
      const {
        currentSortOrder: n
      } = this.props;
      r !== n && this.updateQuerySortOrder(r);
    }, this.options = t.values, this.updateQuerySortOrder = t.updateQuerySortOrder;
  }
  render() {
    const {
      currentSortOrder: t,
      loading: r,
      totalResults: n,
      label: i,
      overridableId: s,
      ariaLabel: l,
      selectOnNavigation: u
    } = this.props;
    return /* @__PURE__ */ b.createElement(Pr, {
      condition: t !== null && !r && n > 0
    }, i(/* @__PURE__ */ b.createElement(x_, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: l,
      selectOnNavigation: u
    })));
  }
}
T_.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const x_ = (e) => {
  let {
    overridableId: t,
    currentSortOrder: r,
    options: n,
    onValueChange: i,
    ariaLabel: s,
    selectOnNavigation: l
  } = e;
  const {
    buildUID: u
  } = ct(ot), f = n.map((p, h) => ({
    key: h,
    text: p.text,
    value: p.value
  }));
  return /* @__PURE__ */ b.createElement(Ee, {
    id: u("SortOrder.element", t),
    options: n,
    currentSortOrder: r,
    onValueChange: i,
    ariaLabel: s,
    selectOnNavigation: l
  }, /* @__PURE__ */ b.createElement(Kt, {
    selection: !0,
    compact: !0,
    options: f,
    value: r,
    onChange: (p, h) => {
      let {
        value: m
      } = h;
      return i(m);
    },
    "aria-label": s,
    selectOnNavigation: l
  }));
};
x_.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var J9 = Ee.component("SortOrder", T_);
const Z9 = (e) => ({
  updateQuerySortOrder: (t) => e(UK(t))
});
Tt((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), Z9)(J9);
const P_ = (e) => {
  let {
    overridableId: t,
    userSelectionFilters: r,
    title: n,
    label: i,
    filterValue: s,
    updateQueryFilters: l
  } = e;
  const u = (m) => m.filter((w) => w[0] === s[0]).length > 0, f = () => {
    l(s);
  }, {
    buildUID: p
  } = ct(ot), h = u(r);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: p("SearchFilters.Toggle.element", t),
    title: n,
    label: i,
    filterValue: s,
    userSelectionFilters: r,
    updateQueryFilters: l
  }, /* @__PURE__ */ b.createElement(Et, null, /* @__PURE__ */ b.createElement(Et.Content, null, /* @__PURE__ */ b.createElement(Et.Header, null, n)), /* @__PURE__ */ b.createElement(Et.Content, null, /* @__PURE__ */ b.createElement(Ki, {
    toggle: !0,
    label: i,
    onClick: f,
    checked: h
  }))));
};
P_.defaultProps = {
  overridableId: ""
};
var e7 = Ee.component("SearchFilters.Toggle", P_);
const t7 = (e) => ({
  updateQueryFilters: (t) => e(Ip(t))
});
Tt((e) => ({
  userSelectionFilters: e.query.filters
}), t7)(e7);
const A_ = b.createContext(
  null
), r7 = ({ config: e, children: t }) => /* @__PURE__ */ b.createElement(A_.Provider, { value: { config: e } }, t), n7 = () => {
  const e = b.useContext(A_);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
}, a7 = ({
  result: e,
  index: t
}) => /* @__PURE__ */ b.createElement(tr, { key: t }, /* @__PURE__ */ b.createElement(Nt, null, e.title || "No title"), /* @__PURE__ */ b.createElement(Nt, null, e.created), /* @__PURE__ */ b.createElement(Nt, null, e.status), /* @__PURE__ */ b.createElement(Nt, null, "999"), /* @__PURE__ */ b.createElement(Nt, null, "999"), /* @__PURE__ */ b.createElement(Nt, null, e.serializer), /* @__PURE__ */ b.createElement(Nt, null, e.mode), /* @__PURE__ */ b.createElement(Nt, { style: { width: "220px" } }, /* @__PURE__ */ b.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ b.createElement(
  Kt,
  {
    text: "Select Action",
    floating: !0,
    labeled: !0,
    className: "icon",
    options: [
      {
        key: "download",
        text: "Download",
        value: "download",
        disabled: !0
      },
      {
        key: "delete",
        text: "Delete",
        value: "delete",
        disabled: !0
      }
    ]
  }
), /* @__PURE__ */ b.createElement(En, { basic: !0, size: "tiny" }, /* @__PURE__ */ b.createElement(wt, { name: "eye" }), "View")))), i7 = ({ children: e }) => /* @__PURE__ */ b.createElement(Tr, { celled: !0, size: "small", comp: !0 }, /* @__PURE__ */ b.createElement(xn, null, /* @__PURE__ */ b.createElement(tr, null, /* @__PURE__ */ b.createElement(ur, null, "ID"), /* @__PURE__ */ b.createElement(ur, null, "Date"), /* @__PURE__ */ b.createElement(ur, null, "Status"), /* @__PURE__ */ b.createElement(ur, null, "Records"), /* @__PURE__ */ b.createElement(ur, null, "Files"), /* @__PURE__ */ b.createElement(ur, null, "Provider"), /* @__PURE__ */ b.createElement(ur, null, "Mode"), /* @__PURE__ */ b.createElement(ur, null, "Actions"))), /* @__PURE__ */ b.createElement(Jn, null, e)), gn = {
  aggs: [],
  appId: "search",
  defaultSortingOnEmptyQueryString: [
    {
      sortBy: "newest"
    }
  ],
  initialQueryState: {
    filters: [],
    hiddenParams: null,
    layout: "list",
    page: 1,
    size: 20,
    sortBy: "newest"
  },
  layoutOptions: {
    gridView: !1,
    listView: !0
  },
  paginationOptions: {
    defaultValue: 20,
    maxTotalResults: 1e4,
    resultsPerPage: [
      {
        text: "20",
        value: 20
      },
      {
        text: "50",
        value: 50
      }
    ]
  },
  searchApi: {
    axios: {
      headers: {
        Accept: "application/vnd.inveniordm.v1+json"
      },
      url: "/api/importer-tasks",
      withCredentials: !0
    },
    invenio: {
      requestSerializer: "InvenioRecordsResourcesRequestSerializer"
    }
  },
  sortOptions: [
    {
      sortBy: "newest",
      text: "Newest"
    },
    {
      sortBy: "oldest",
      text: "Oldest"
    }
  ],
  sortOrderDisabled: !0
}, o7 = () => {
  const [e, t] = SC(!1);
  return /* @__PURE__ */ b.createElement(
    G2,
    {
      closeIcon: !0,
      onClose: () => t(!1),
      onOpen: () => t(!0),
      open: e,
      trigger: /* @__PURE__ */ b.createElement(En, { color: "green", icon: !0, labelPosition: "left" }, /* @__PURE__ */ b.createElement(wt, { name: "add" }), "New Import")
    },
    /* @__PURE__ */ b.createElement(On, null, /* @__PURE__ */ b.createElement(wt, { name: "file alternate" }), "New Import"),
    /* @__PURE__ */ b.createElement(_n, null, /* @__PURE__ */ b.createElement($i, null, /* @__PURE__ */ b.createElement(Pn, null, /* @__PURE__ */ b.createElement("p", null, "Upload a file to import records into the system."), /* @__PURE__ */ b.createElement("p", null, "Supported formats include CSV, JSON, and XML. Ensure your file adheres to the required schema for successful import."), /* @__PURE__ */ b.createElement("p", null, "After uploading, you can review and confirm the import details before finalizing the process.")))),
    /* @__PURE__ */ b.createElement(za, null, /* @__PURE__ */ b.createElement(En, { onClick: () => t(!1) }, "Close"), /* @__PURE__ */ b.createElement(
      En,
      {
        labelPosition: "left",
        icon: !0,
        onClick: () => t(!1),
        positive: !0
      },
      /* @__PURE__ */ b.createElement(wt, { name: "checkmark" }),
      "Submit"
    ))
  );
}, s7 = ({
  currentQueryState: e,
  updateQueryState: t
}) => {
  var s;
  const r = [
    { key: "all", label: "All", value: null },
    { key: "pending", label: "Pending", value: "pending" },
    { key: "success", label: "Success", value: "success" },
    { key: "failed", label: "Failed", value: "failed" }
  ], n = (s = e.filters) == null ? void 0 : s.find(
    (l) => l[0] === "status"
  ), i = (l) => {
    var f;
    const u = ((f = e.filters) == null ? void 0 : f.filter(
      (p) => p[0] !== "status"
    )) || [];
    l && u.push(["status", l]), t({
      ...e,
      filters: u,
      page: 1
    });
  };
  return /* @__PURE__ */ b.createElement(Ti, { activeIndex: 0, compact: !0, size: "tiny" }, r.map(({ key: l, label: u, value: f }) => /* @__PURE__ */ b.createElement(
    Ti.Item,
    {
      key: l,
      name: l,
      active: (n == null ? void 0 : n[1]) === f || f === null && !n,
      onClick: () => i(f)
    },
    u
  )));
}, C_ = A9(s7);
function kf(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var l7 = (e) => typeof e == "object" && e !== null;
function u7(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var c7 = (e) => e === "base";
function d7(e) {
  return e.slice().filter((t) => !c7(t));
}
function db(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function f7(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = db(r % 52) + t;
  return db(r % 52) + t;
}
function p7(e, t) {
  let r = t.length;
  for (; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function h7(e) {
  return f7(p7(5381, e) >>> 0);
}
var $_ = /\s*!(important)?/i;
function g7(e) {
  return typeof e == "string" ? $_.test(e) : !1;
}
function m7(e) {
  return typeof e == "string" ? e.replace($_, "").trim() : e;
}
function R_(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var Lp = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...n) => {
    const i = JSON.stringify(n);
    if (t.has(i))
      return t.get(i);
    const s = e(...n);
    return t.set(i, s), s;
  };
}, v7 = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function N_(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((n) => {
    if (v7.has(n))
      return;
    const i = t[n], s = r[n];
    kf(i) && kf(s) ? t[n] = N_(i, s) : t[n] = s;
  }), t), {});
}
var y7 = (e) => e != null;
function I_(e, t, r = {}) {
  const { stop: n, getKey: i } = r;
  function s(l, u = []) {
    if (l7(l)) {
      const f = {};
      for (const [p, h] of Object.entries(l)) {
        const m = (i == null ? void 0 : i(p, h)) ?? p, v = [...u, m];
        if (n != null && n(l, v))
          return t(l, u);
        const w = s(h, v);
        y7(w) && (f[m] = w);
      }
      return f;
    }
    return t(l, u);
  }
  return s(e);
}
function b7(e, t) {
  return e.reduce(
    (r, n, i) => {
      const s = t[i];
      return n != null && (r[s] = n), r;
    },
    {}
  );
}
function k_(e, t, r = !0) {
  const { utility: n, conditions: i } = t, { hasShorthand: s, resolveShorthand: l } = n;
  return I_(
    e,
    (u) => Array.isArray(u) ? b7(u, i.breakpoints.keys) : u,
    {
      stop: (u) => Array.isArray(u),
      getKey: r ? (u) => s ? l(u) : u : void 0
    }
  );
}
var E7 = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, w7 = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function S7(e) {
  const { utility: t, hash: r, conditions: n = E7 } = e, i = (l) => [t.prefix, l].filter(Boolean).join("-"), s = (l, u) => {
    let f;
    if (r) {
      const p = [...n.finalize(l), u];
      f = i(t.toHash(p, h7));
    } else
      f = [...n.finalize(l), i(u)].join(":");
    return f;
  };
  return Lp(({ base: l, ...u } = {}) => {
    const f = Object.assign(u, l), p = k_(f, e), h = /* @__PURE__ */ new Set();
    return I_(p, (m, v) => {
      if (m == null)
        return;
      const w = g7(m), [O, ...T] = n.shift(v), _ = d7(T), A = t.transform(O, m7(w7(m)));
      let M = s(_, A.className);
      w && (M = `${M}!`), h.add(M);
    }), Array.from(h).join(" ");
  });
}
function _7(...e) {
  return e.flat().filter((t) => kf(t) && Object.keys(u7(t)).length > 0);
}
function O7(e) {
  function t(i) {
    const s = _7(...i);
    return s.length === 1 ? s : s.map((l) => k_(l, e));
  }
  function r(...i) {
    return N_(...t(i));
  }
  function n(...i) {
    return Object.assign({}, ...t(i));
  }
  return { mergeCss: Lp(r), assignCss: n };
}
var T7 = /([A-Z])/g, x7 = /^ms-/, P7 = Lp((e) => e.startsWith("--") ? e : e.replace(T7, "-$1").replace(x7, "-ms-").toLowerCase()), A7 = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${A7.split(",").join("|")}`;
const C7 = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", D_ = new Set(C7.split(",")), $7 = /^@|&|&$/;
function fb(e) {
  return D_.has(e) || $7.test(e);
}
const R7 = /^_/, N7 = /&|@/;
function I7(e) {
  return e.map((t) => D_.has(t) ? t.replace(R7, "") : N7.test(t) ? `[${R_(t.trim())}]` : t);
}
function k7(e) {
  return e.sort((t, r) => {
    const n = fb(t), i = fb(r);
    return n && !i ? 1 : !n && i ? -1 : 0;
  });
}
const D7 = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle", M_ = /* @__PURE__ */ new Map(), L_ = /* @__PURE__ */ new Map();
D7.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [n, ...i] = r.split("/");
  M_.set(t, n), i.length && i.forEach((s) => {
    L_.set(s === "1" ? n : s, t);
  });
});
const pb = (e) => L_.get(e) || e, F_ = {
  conditions: {
    shift: k7,
    finalize: I7,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = pb(e);
      return { className: `${M_.get(r) || P7(r)}_${R_(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: pb
  }
}, M7 = S7(F_), Ta = (...e) => M7(B_(...e));
Ta.raw = (...e) => B_(...e);
const { mergeCss: B_, assignCss: j7 } = O7(F_), No = {
  searchBarRow: Ta({
    display: "flex !important",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1rem",
    paddingBlock: "0.5rem",
    minBlockSize: "3rem"
  }),
  facets: Ta({
    flex: "0 0 auto"
  }),
  search: Ta({
    flex: "1 1 auto",
    minInlineSize: "15rem"
  }),
  import: Ta({
    flex: "0 0 auto"
  }),
  visuallyHidden: Ta({
    srOnly: !0
  })
}, L7 = () => /* @__PURE__ */ b.createElement(
  "section",
  {
    className: No.searchBarRow,
    "aria-label": "Records search and filters"
  },
  /* @__PURE__ */ b.createElement("div", { className: No.facets }, /* @__PURE__ */ b.createElement(C_, null)),
  /* @__PURE__ */ b.createElement("div", { className: No.search }, /* @__PURE__ */ b.createElement(
    G9,
    {
      autofocus: !0,
      actionProps: {
        icon: "search",
        content: "Search",
        className: "search",
        "aria-label": "Submit search",
        type: "submit"
      },
      placeholder: "Search records...",
      "aria-describedby": "search-instructions"
    }
  ), /* @__PURE__ */ b.createElement("span", { className: No.visuallyHidden }, "Type keywords to search through records. Press Enter to submit.")),
  /* @__PURE__ */ b.createElement("div", { className: No.import }, /* @__PURE__ */ b.createElement(o7, null))
), F7 = () => {
  const { config: e } = n7();
  return /* @__PURE__ */ b.createElement(Ir, null, /* @__PURE__ */ b.createElement(Ir.Row, { verticalAlign: "middle" }, /* @__PURE__ */ b.createElement(Ir.Column, { width: 4, textAlign: "left" }, /* @__PURE__ */ b.createElement(_9, { label: (t) => /* @__PURE__ */ b.createElement("p", null, "Showing ", t, " task(s)") })), /* @__PURE__ */ b.createElement(Ir.Column, { width: 8, textAlign: "center" }, /* @__PURE__ */ b.createElement(I9, { options: { size: "mini" } })), /* @__PURE__ */ b.createElement(Ir.Column, { width: 4, textAlign: "right" }, /* @__PURE__ */ b.createElement(
    H9,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ b.createElement("p", null, t, " results per page")
    }
  ))));
}, B7 = ({
  config: e = {},
  overriddenComponents: t = {}
}) => {
  var s, l, u, f, p;
  const r = {
    ...gn,
    ...e,
    initialQueryState: {
      ...gn.initialQueryState,
      ...e.initialQueryState
    },
    layoutOptions: {
      ...gn.layoutOptions,
      ...e.layoutOptions
    },
    paginationOptions: {
      ...gn.paginationOptions,
      ...e.paginationOptions,
      resultsPerPage: ((s = e.paginationOptions) == null ? void 0 : s.resultsPerPage) || gn.paginationOptions.resultsPerPage
    },
    searchApi: {
      ...gn.searchApi,
      ...e.searchApi,
      axios: {
        ...gn.searchApi.axios,
        ...(l = e.searchApi) == null ? void 0 : l.axios,
        headers: {
          ...gn.searchApi.axios.headers,
          ...(f = (u = e.searchApi) == null ? void 0 : u.axios) == null ? void 0 : f.headers
        }
      },
      invenio: {
        ...gn.searchApi.invenio,
        ...(p = e.searchApi) == null ? void 0 : p.invenio
      }
    }
  }, n = new $S(r.searchApi), i = {
    [`${r.appId}.ResultsList.item`]: a7,
    [`${r.appId}.ResultsList.container`]: i7,
    [`${r.appId}.SearchFacets`]: C_,
    ...t
  };
  return /* @__PURE__ */ b.createElement(Jf.Provider, { value: i }, /* @__PURE__ */ b.createElement(
    l9,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ b.createElement(r7, { config: r }, /* @__PURE__ */ b.createElement(L7, null), /* @__PURE__ */ b.createElement(U9, null, /* @__PURE__ */ b.createElement(x9, null), /* @__PURE__ */ b.createElement(f_, null)), /* @__PURE__ */ b.createElement(F7, null))
  ));
}, U7 = {
  bulkImporter: Ta({
    padding: "2rem"
  })
}, H7 = () => /* @__PURE__ */ b.createElement("div", { className: U7.bulkImporter }, /* @__PURE__ */ b.createElement(Pn, { as: "h1" }, "Bulk Importer"), /* @__PURE__ */ b.createElement("p", null, "A more modern approach for an invenio compatible bulk importer."), /* @__PURE__ */ b.createElement(B7, null));
function W7(e) {
  return new $S(e);
}
function V7(e, t = {}, r = !0) {
  return {
    axios: {
      url: e,
      headers: {
        Accept: "application/vnd.inveniordm.v1+json",
        ...t
      },
      withCredentials: r
    }
  };
}
export {
  H7 as BulkImporter,
  o7 as ImportModal,
  B7 as Search,
  W7 as createSearchApi,
  V7 as createSearchApiConfig
};
