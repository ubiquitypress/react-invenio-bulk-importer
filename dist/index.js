import * as fn from "react";
import b, { Children as Cd, PureComponent as sb, Component as He, createRef as Pr, isValidElement as lb, cloneElement as ub, useContext as lt, useLayoutEffect as hA, useEffect as Ad, useMemo as Ur, useReducer as gA, useRef as ll, useState as mA } from "react";
import * as om from "react-dom";
import { createPortal as vA, unstable_batchedUpdates as yA } from "react-dom";
function Pa(e, t) {
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
var xr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function bA(e) {
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
var ul = { exports: {} }, Ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sm;
function EA() {
  if (sm)
    return Ge;
  sm = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
  function k(R) {
    if (typeof R == "object" && R !== null) {
      var F = R.$$typeof;
      switch (F) {
        case t:
          switch (R = R.type, R) {
            case f:
            case p:
            case n:
            case s:
            case i:
            case m:
              return R;
            default:
              switch (R = R && R.$$typeof, R) {
                case u:
                case h:
                case O:
                case S:
                case l:
                  return R;
                default:
                  return F;
              }
          }
        case r:
          return F;
      }
    }
  }
  function U(R) {
    return k(R) === p;
  }
  return Ge.AsyncMode = f, Ge.ConcurrentMode = p, Ge.ContextConsumer = u, Ge.ContextProvider = l, Ge.Element = t, Ge.ForwardRef = h, Ge.Fragment = n, Ge.Lazy = O, Ge.Memo = S, Ge.Portal = r, Ge.Profiler = s, Ge.StrictMode = i, Ge.Suspense = m, Ge.isAsyncMode = function(R) {
    return U(R) || k(R) === f;
  }, Ge.isConcurrentMode = U, Ge.isContextConsumer = function(R) {
    return k(R) === u;
  }, Ge.isContextProvider = function(R) {
    return k(R) === l;
  }, Ge.isElement = function(R) {
    return typeof R == "object" && R !== null && R.$$typeof === t;
  }, Ge.isForwardRef = function(R) {
    return k(R) === h;
  }, Ge.isFragment = function(R) {
    return k(R) === n;
  }, Ge.isLazy = function(R) {
    return k(R) === O;
  }, Ge.isMemo = function(R) {
    return k(R) === S;
  }, Ge.isPortal = function(R) {
    return k(R) === r;
  }, Ge.isProfiler = function(R) {
    return k(R) === s;
  }, Ge.isStrictMode = function(R) {
    return k(R) === i;
  }, Ge.isSuspense = function(R) {
    return k(R) === m;
  }, Ge.isValidElementType = function(R) {
    return typeof R == "string" || typeof R == "function" || R === n || R === p || R === s || R === i || R === m || R === v || typeof R == "object" && R !== null && (R.$$typeof === O || R.$$typeof === S || R.$$typeof === l || R.$$typeof === u || R.$$typeof === h || R.$$typeof === _ || R.$$typeof === C || R.$$typeof === M || R.$$typeof === T);
  }, Ge.typeOf = k, Ge;
}
var Ve = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lm;
function wA() {
  return lm || (lm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
    function k(ee) {
      return typeof ee == "string" || typeof ee == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      ee === n || ee === p || ee === s || ee === i || ee === m || ee === v || typeof ee == "object" && ee !== null && (ee.$$typeof === O || ee.$$typeof === S || ee.$$typeof === l || ee.$$typeof === u || ee.$$typeof === h || ee.$$typeof === _ || ee.$$typeof === C || ee.$$typeof === M || ee.$$typeof === T);
    }
    function U(ee) {
      if (typeof ee == "object" && ee !== null) {
        var ht = ee.$$typeof;
        switch (ht) {
          case t:
            var re = ee.type;
            switch (re) {
              case f:
              case p:
              case n:
              case s:
              case i:
              case m:
                return re;
              default:
                var Gt = re && re.$$typeof;
                switch (Gt) {
                  case u:
                  case h:
                  case O:
                  case S:
                  case l:
                    return Gt;
                  default:
                    return ht;
                }
            }
          case r:
            return ht;
        }
      }
    }
    var R = f, F = p, x = u, A = l, I = t, B = h, G = n, X = O, W = S, le = r, Ce = s, Te = i, Ae = m, qe = !1;
    function ct(ee) {
      return qe || (qe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), K(ee) || U(ee) === f;
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
    function de(ee) {
      return U(ee) === h;
    }
    function Se(ee) {
      return U(ee) === n;
    }
    function pe(ee) {
      return U(ee) === O;
    }
    function _e(ee) {
      return U(ee) === S;
    }
    function Oe(ee) {
      return U(ee) === r;
    }
    function xe(ee) {
      return U(ee) === s;
    }
    function Ie(ee) {
      return U(ee) === i;
    }
    function te(ee) {
      return U(ee) === m;
    }
    Ve.AsyncMode = R, Ve.ConcurrentMode = F, Ve.ContextConsumer = x, Ve.ContextProvider = A, Ve.Element = I, Ve.ForwardRef = B, Ve.Fragment = G, Ve.Lazy = X, Ve.Memo = W, Ve.Portal = le, Ve.Profiler = Ce, Ve.StrictMode = Te, Ve.Suspense = Ae, Ve.isAsyncMode = ct, Ve.isConcurrentMode = K, Ve.isContextConsumer = J, Ve.isContextProvider = we, Ve.isElement = ge, Ve.isForwardRef = de, Ve.isFragment = Se, Ve.isLazy = pe, Ve.isMemo = _e, Ve.isPortal = Oe, Ve.isProfiler = xe, Ve.isStrictMode = Ie, Ve.isSuspense = te, Ve.isValidElementType = k, Ve.typeOf = U;
  }()), Ve;
}
var um;
function Vl() {
  return um || (um = 1, process.env.NODE_ENV === "production" ? ul.exports = EA() : ul.exports = wA()), ul.exports;
}
var SA = Vl();
function Hf(e, t) {
  return Hf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Hf(e, t);
}
function ut(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Hf(e, t);
}
var jr = function(t, r) {
  if (process.env.NODE_ENV !== "production" && typeof t == "string")
    throw new Error("We do not support refs as string, this is a legacy API and will be likely to be removed in one of the future releases of React.");
  if (typeof t == "function") {
    t(r);
    return;
  }
  t !== null && typeof t == "object" && (t.current = r);
}, cm = function(t) {
  return (
    // https://github.com/facebook/react/blob/v16.8.2/packages/react-reconciler/src/ReactFiberCommitWork.js#L665
    t !== null && typeof t == "object" && t.hasOwnProperty("current")
  );
};
function fm(e) {
  return e === null || e instanceof Element || e instanceof Text ? !1 : !!(e.type && e.tag);
}
var _A = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.prevNode = void 0, n;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    var i = om.findDOMNode(this);
    process.env.NODE_ENV !== "production" && fm(i) && (i = null), this.prevNode = i, jr(this.props.innerRef, i);
  }, r.componentDidUpdate = function(i) {
    var s = om.findDOMNode(this);
    process.env.NODE_ENV !== "production" && fm(s) && (s = null), this.prevNode !== s && (this.prevNode = s, jr(this.props.innerRef, s)), i.innerRef !== this.props.innerRef && jr(this.props.innerRef, s);
  }, r.componentWillUnmount = function() {
    jr(this.props.innerRef, null), delete this.prevNode;
  }, r.render = function() {
    var i = this.props.children;
    return i;
  }, t;
}(fn.Component), OA = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.currentNode = void 0, n.handleRefOverride = function(u) {
      var f = n.props, p = f.children, h = f.innerRef;
      jr(p.ref, u), jr(h, u), n.currentNode = u;
    }, n;
  }
  var r = t.prototype;
  return r.componentDidUpdate = function(i) {
    i.innerRef !== this.props.innerRef && jr(this.props.innerRef, this.currentNode);
  }, r.componentWillUnmount = function() {
    delete this.currentNode;
  }, r.render = function() {
    var i = this.props.children;
    return /* @__PURE__ */ fn.cloneElement(i, {
      ref: this.handleRefOverride
    });
  }, t;
}(fn.Component), TA = ["children", "innerRef"], vr = function(t) {
  var r = t.children, n = t.innerRef, i = Pa(t, TA), s = fn.Children.only(r), l = SA.isForwardRef(s) ? OA : _A, u = s && i && Object.keys(i).length > 0 ? /* @__PURE__ */ fn.cloneElement(s, i) : s;
  return /* @__PURE__ */ fn.createElement(l, {
    innerRef: n
  }, u);
};
function q() {
  return q = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, q.apply(null, arguments);
}
var xA = Object.prototype, PA = xA.hasOwnProperty;
function CA(e, t) {
  return e != null && PA.call(e, t);
}
var AA = Array.isArray;
const wt = AA;
var $A = typeof global == "object" && global && global.Object === Object && global;
const cb = $A;
var RA = typeof self == "object" && self && self.Object === Object && self, IA = cb || RA || Function("return this")();
const xn = IA;
var NA = xn.Symbol;
const Hr = NA;
var fb = Object.prototype, kA = fb.hasOwnProperty, DA = fb.toString, vo = Hr ? Hr.toStringTag : void 0;
function MA(e) {
  var t = kA.call(e, vo), r = e[vo];
  try {
    e[vo] = void 0;
    var n = !0;
  } catch {
  }
  var i = DA.call(e);
  return n && (t ? e[vo] = r : delete e[vo]), i;
}
var LA = Object.prototype, FA = LA.toString;
function BA(e) {
  return FA.call(e);
}
var UA = "[object Null]", zA = "[object Undefined]", dm = Hr ? Hr.toStringTag : void 0;
function Wr(e) {
  return e == null ? e === void 0 ? zA : UA : dm && dm in Object(e) ? MA(e) : BA(e);
}
function $r(e) {
  return e != null && typeof e == "object";
}
var qA = "[object Symbol]";
function Ca(e) {
  return typeof e == "symbol" || $r(e) && Wr(e) == qA;
}
var jA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, HA = /^\w*$/;
function $d(e, t) {
  if (wt(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ca(e) ? !0 : HA.test(e) || !jA.test(e) || t != null && e in Object(t);
}
function hn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var WA = "[object AsyncFunction]", GA = "[object Function]", VA = "[object GeneratorFunction]", QA = "[object Proxy]";
function Ei(e) {
  if (!hn(e))
    return !1;
  var t = Wr(e);
  return t == GA || t == VA || t == WA || t == QA;
}
var KA = xn["__core-js_shared__"];
const Jc = KA;
var pm = function() {
  var e = /[^.]+$/.exec(Jc && Jc.keys && Jc.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function YA(e) {
  return !!pm && pm in e;
}
var XA = Function.prototype, JA = XA.toString;
function qa(e) {
  if (e != null) {
    try {
      return JA.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ZA = /[\\^$.*+?()[\]{}|]/g, e$ = /^\[object .+?Constructor\]$/, t$ = Function.prototype, r$ = Object.prototype, n$ = t$.toString, a$ = r$.hasOwnProperty, i$ = RegExp(
  "^" + n$.call(a$).replace(ZA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function o$(e) {
  if (!hn(e) || YA(e))
    return !1;
  var t = Ei(e) ? i$ : e$;
  return t.test(qa(e));
}
function s$(e, t) {
  return e == null ? void 0 : e[t];
}
function ja(e, t) {
  var r = s$(e, t);
  return o$(r) ? r : void 0;
}
var l$ = ja(Object, "create");
const ko = l$;
function u$() {
  this.__data__ = ko ? ko(null) : {}, this.size = 0;
}
function c$(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var f$ = "__lodash_hash_undefined__", d$ = Object.prototype, p$ = d$.hasOwnProperty;
function h$(e) {
  var t = this.__data__;
  if (ko) {
    var r = t[e];
    return r === f$ ? void 0 : r;
  }
  return p$.call(t, e) ? t[e] : void 0;
}
var g$ = Object.prototype, m$ = g$.hasOwnProperty;
function v$(e) {
  var t = this.__data__;
  return ko ? t[e] !== void 0 : m$.call(t, e);
}
var y$ = "__lodash_hash_undefined__";
function b$(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ko && t === void 0 ? y$ : t, this;
}
function Aa(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Aa.prototype.clear = u$;
Aa.prototype.delete = c$;
Aa.prototype.get = h$;
Aa.prototype.has = v$;
Aa.prototype.set = b$;
function E$() {
  this.__data__ = [], this.size = 0;
}
function Ql(e, t) {
  return e === t || e !== e && t !== t;
}
function Kl(e, t) {
  for (var r = e.length; r--; )
    if (Ql(e[r][0], t))
      return r;
  return -1;
}
var w$ = Array.prototype, S$ = w$.splice;
function _$(e) {
  var t = this.__data__, r = Kl(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : S$.call(t, r, 1), --this.size, !0;
}
function O$(e) {
  var t = this.__data__, r = Kl(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function T$(e) {
  return Kl(this.__data__, e) > -1;
}
function x$(e, t) {
  var r = this.__data__, n = Kl(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Pn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Pn.prototype.clear = E$;
Pn.prototype.delete = _$;
Pn.prototype.get = O$;
Pn.prototype.has = T$;
Pn.prototype.set = x$;
var P$ = ja(xn, "Map");
const Do = P$;
function C$() {
  this.size = 0, this.__data__ = {
    hash: new Aa(),
    map: new (Do || Pn)(),
    string: new Aa()
  };
}
function A$(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Yl(e, t) {
  var r = e.__data__;
  return A$(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function $$(e) {
  var t = Yl(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function R$(e) {
  return Yl(this, e).get(e);
}
function I$(e) {
  return Yl(this, e).has(e);
}
function N$(e, t) {
  var r = Yl(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Cn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Cn.prototype.clear = C$;
Cn.prototype.delete = $$;
Cn.prototype.get = R$;
Cn.prototype.has = I$;
Cn.prototype.set = N$;
var k$ = "Expected a function";
function Xl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(k$);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var l = e.apply(this, n);
    return r.cache = s.set(i, l) || s, l;
  };
  return r.cache = new (Xl.Cache || Cn)(), r;
}
Xl.Cache = Cn;
var D$ = 500;
function M$(e) {
  var t = Xl(e, function(n) {
    return r.size === D$ && r.clear(), n;
  }), r = t.cache;
  return t;
}
var L$ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, F$ = /\\(\\)?/g, B$ = M$(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(L$, function(r, n, i, s) {
    t.push(i ? s.replace(F$, "$1") : n || r);
  }), t;
});
const U$ = B$;
function dn(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var z$ = 1 / 0, hm = Hr ? Hr.prototype : void 0, gm = hm ? hm.toString : void 0;
function Jl(e) {
  if (typeof e == "string")
    return e;
  if (wt(e))
    return dn(e, Jl) + "";
  if (Ca(e))
    return gm ? gm.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -z$ ? "-0" : t;
}
function Ha(e) {
  return e == null ? "" : Jl(e);
}
function ls(e, t) {
  return wt(e) ? e : $d(e, t) ? [e] : U$(Ha(e));
}
var q$ = "[object Arguments]";
function mm(e) {
  return $r(e) && Wr(e) == q$;
}
var db = Object.prototype, j$ = db.hasOwnProperty, H$ = db.propertyIsEnumerable, W$ = mm(function() {
  return arguments;
}()) ? mm : function(e) {
  return $r(e) && j$.call(e, "callee") && !H$.call(e, "callee");
};
const Zl = W$;
var G$ = 9007199254740991, V$ = /^(?:0|[1-9]\d*)$/;
function eu(e, t) {
  var r = typeof e;
  return t = t ?? G$, !!t && (r == "number" || r != "symbol" && V$.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Q$ = 9007199254740991;
function Rd(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Q$;
}
var K$ = 1 / 0;
function ki(e) {
  if (typeof e == "string" || Ca(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -K$ ? "-0" : t;
}
function pb(e, t, r) {
  t = ls(t, e);
  for (var n = -1, i = t.length, s = !1; ++n < i; ) {
    var l = ki(t[n]);
    if (!(s = e != null && r(e, l)))
      break;
    e = e[l];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && Rd(i) && eu(l, i) && (wt(e) || Zl(e)));
}
function Wf(e, t) {
  return e != null && pb(e, t, CA);
}
function hb(e, t, r) {
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
function Y$(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function us(e, t) {
  t = ls(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[ki(t[r++])];
  return r && r == n ? e : void 0;
}
function tu(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var s = Array(i); ++n < i; )
    s[n] = e[n + t];
  return s;
}
function X$(e, t) {
  return t.length < 2 ? e : us(e, tu(t, 0, -1));
}
function J$(e, t, r) {
  t = ls(t, e), e = X$(e, t);
  var n = e == null ? e : e[ki(Y$(t))];
  return n == null ? void 0 : hb(n, e, r);
}
function Wa(e) {
  return e;
}
var vm = Math.max;
function gb(e, t, r) {
  return t = vm(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, s = vm(n.length - t, 0), l = Array(s); ++i < s; )
      l[i] = n[t + i];
    i = -1;
    for (var u = Array(t + 1); ++i < t; )
      u[i] = n[i];
    return u[t] = r(l), hb(e, this, u);
  };
}
function Z$(e) {
  return function() {
    return e;
  };
}
var eR = function() {
  try {
    var e = ja(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Pl = eR;
var tR = Pl ? function(e, t) {
  return Pl(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Z$(t),
    writable: !0
  });
} : Wa;
const rR = tR;
var nR = 800, aR = 16, iR = Date.now;
function oR(e) {
  var t = 0, r = 0;
  return function() {
    var n = iR(), i = aR - (n - r);
    if (r = n, i > 0) {
      if (++t >= nR)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var sR = oR(rR);
const mb = sR;
function Di(e, t) {
  return mb(gb(e, t, Wa), e + "");
}
var lR = Di(J$);
const ae = lR;
var Gf = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Zc, ym;
function uR() {
  if (ym)
    return Zc;
  ym = 1;
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
  return Zc = i() ? Object.assign : function(s, l) {
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
  }, Zc;
}
var ef, bm;
function Id() {
  if (bm)
    return ef;
  bm = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ef = e, ef;
}
var tf, Em;
function vb() {
  return Em || (Em = 1, tf = Function.call.bind(Object.prototype.hasOwnProperty)), tf;
}
var rf, wm;
function cR() {
  if (wm)
    return rf;
  wm = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Id(), r = {}, n = vb();
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
            var S = p ? p() : "";
            e(
              "Failed " + u + " type: " + m.message + (S ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, rf = i, rf;
}
var nf, Sm;
function fR() {
  if (Sm)
    return nf;
  Sm = 1;
  var e = Vl(), t = uR(), r = Id(), n = vb(), i = cR(), s = function() {
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
  return nf = function(u, f) {
    var p = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function m(K) {
      var J = K && (p && K[p] || K[h]);
      if (typeof J == "function")
        return J;
    }
    var v = "<<anonymous>>", S = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: M(),
      arrayOf: k,
      element: U(),
      elementType: R(),
      instanceOf: F,
      node: B(),
      objectOf: A,
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
      function ge(Se, pe, _e, Oe, xe, Ie, te) {
        if (Oe = Oe || v, Ie = Ie || _e, te !== r) {
          if (f) {
            var ee = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ee.name = "Invariant Violation", ee;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ht = Oe + ":" + _e;
            !J[ht] && // Avoid spamming the console because they are often not actionable except for lib authors
            we < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + Ie + "` prop on `" + Oe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), J[ht] = !0, we++);
          }
        }
        return pe[_e] == null ? Se ? pe[_e] === null ? new T("The " + xe + " `" + Ie + "` is marked as required " + ("in `" + Oe + "`, but its value is `null`.")) : new T("The " + xe + " `" + Ie + "` is marked as required in " + ("`" + Oe + "`, but its value is `undefined`.")) : null : K(pe, _e, Oe, xe, Ie);
      }
      var de = ge.bind(null, !1);
      return de.isRequired = ge.bind(null, !0), de;
    }
    function C(K) {
      function J(we, ge, de, Se, pe, _e) {
        var Oe = we[ge], xe = Te(Oe);
        if (xe !== K) {
          var Ie = Ae(Oe);
          return new T(
            "Invalid " + Se + " `" + pe + "` of type " + ("`" + Ie + "` supplied to `" + de + "`, expected ") + ("`" + K + "`."),
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
      function J(we, ge, de, Se, pe) {
        if (typeof K != "function")
          return new T("Property `" + pe + "` of component `" + de + "` has invalid PropType notation inside arrayOf.");
        var _e = we[ge];
        if (!Array.isArray(_e)) {
          var Oe = Te(_e);
          return new T("Invalid " + Se + " `" + pe + "` of type " + ("`" + Oe + "` supplied to `" + de + "`, expected an array."));
        }
        for (var xe = 0; xe < _e.length; xe++) {
          var Ie = K(_e, xe, de, Se, pe + "[" + xe + "]", r);
          if (Ie instanceof Error)
            return Ie;
        }
        return null;
      }
      return _(J);
    }
    function U() {
      function K(J, we, ge, de, Se) {
        var pe = J[we];
        if (!u(pe)) {
          var _e = Te(pe);
          return new T("Invalid " + de + " `" + Se + "` of type " + ("`" + _e + "` supplied to `" + ge + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(K);
    }
    function R() {
      function K(J, we, ge, de, Se) {
        var pe = J[we];
        if (!e.isValidElementType(pe)) {
          var _e = Te(pe);
          return new T("Invalid " + de + " `" + Se + "` of type " + ("`" + _e + "` supplied to `" + ge + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(K);
    }
    function F(K) {
      function J(we, ge, de, Se, pe) {
        if (!(we[ge] instanceof K)) {
          var _e = K.name || v, Oe = ct(we[ge]);
          return new T("Invalid " + Se + " `" + pe + "` of type " + ("`" + Oe + "` supplied to `" + de + "`, expected ") + ("instance of `" + _e + "`."));
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
      function J(we, ge, de, Se, pe) {
        for (var _e = we[ge], Oe = 0; Oe < K.length; Oe++)
          if (O(_e, K[Oe]))
            return null;
        var xe = JSON.stringify(K, function(te, ee) {
          var ht = Ae(ee);
          return ht === "symbol" ? String(ee) : ee;
        });
        return new T("Invalid " + Se + " `" + pe + "` of value `" + String(_e) + "` " + ("supplied to `" + de + "`, expected one of " + xe + "."));
      }
      return _(J);
    }
    function A(K) {
      function J(we, ge, de, Se, pe) {
        if (typeof K != "function")
          return new T("Property `" + pe + "` of component `" + de + "` has invalid PropType notation inside objectOf.");
        var _e = we[ge], Oe = Te(_e);
        if (Oe !== "object")
          return new T("Invalid " + Se + " `" + pe + "` of type " + ("`" + Oe + "` supplied to `" + de + "`, expected an object."));
        for (var xe in _e)
          if (n(_e, xe)) {
            var Ie = K(_e, xe, de, Se, pe + "." + xe, r);
            if (Ie instanceof Error)
              return Ie;
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
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + qe(we) + " at index " + J + "."
          ), l;
      }
      function ge(de, Se, pe, _e, Oe) {
        for (var xe = [], Ie = 0; Ie < K.length; Ie++) {
          var te = K[Ie], ee = te(de, Se, pe, _e, Oe, r);
          if (ee == null)
            return null;
          ee.data && n(ee.data, "expectedType") && xe.push(ee.data.expectedType);
        }
        var ht = xe.length > 0 ? ", expected one of type [" + xe.join(", ") + "]" : "";
        return new T("Invalid " + _e + " `" + Oe + "` supplied to " + ("`" + pe + "`" + ht + "."));
      }
      return _(ge);
    }
    function B() {
      function K(J, we, ge, de, Se) {
        return le(J[we]) ? null : new T("Invalid " + de + " `" + Se + "` supplied to " + ("`" + ge + "`, expected a ReactNode."));
      }
      return _(K);
    }
    function G(K, J, we, ge, de) {
      return new T(
        (K || "React class") + ": " + J + " type `" + we + "." + ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + de + "`."
      );
    }
    function X(K) {
      function J(we, ge, de, Se, pe) {
        var _e = we[ge], Oe = Te(_e);
        if (Oe !== "object")
          return new T("Invalid " + Se + " `" + pe + "` of type `" + Oe + "` " + ("supplied to `" + de + "`, expected `object`."));
        for (var xe in K) {
          var Ie = K[xe];
          if (typeof Ie != "function")
            return G(de, Se, pe, xe, Ae(Ie));
          var te = Ie(_e, xe, de, Se, pe + "." + xe, r);
          if (te)
            return te;
        }
        return null;
      }
      return _(J);
    }
    function W(K) {
      function J(we, ge, de, Se, pe) {
        var _e = we[ge], Oe = Te(_e);
        if (Oe !== "object")
          return new T("Invalid " + Se + " `" + pe + "` of type `" + Oe + "` " + ("supplied to `" + de + "`, expected `object`."));
        var xe = t({}, we[ge], K);
        for (var Ie in xe) {
          var te = K[Ie];
          if (n(K, Ie) && typeof te != "function")
            return G(de, Se, pe, Ie, Ae(te));
          if (!te)
            return new T(
              "Invalid " + Se + " `" + pe + "` key `" + Ie + "` supplied to `" + de + "`.\nBad object: " + JSON.stringify(we[ge], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(K), null, "  ")
            );
          var ee = te(_e, Ie, de, Se, pe + "." + Ie, r);
          if (ee)
            return ee;
        }
        return null;
      }
      return _(J);
    }
    function le(K) {
      switch (typeof K) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !K;
        case "object":
          if (Array.isArray(K))
            return K.every(le);
          if (K === null || u(K))
            return !0;
          var J = m(K);
          if (J) {
            var we = J.call(K), ge;
            if (J !== K.entries) {
              for (; !(ge = we.next()).done; )
                if (!le(ge.value))
                  return !1;
            } else
              for (; !(ge = we.next()).done; ) {
                var de = ge.value;
                if (de && !le(de[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Ce(K, J) {
      return K === "symbol" ? !0 : J ? J["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && J instanceof Symbol : !1;
    }
    function Te(K) {
      var J = typeof K;
      return Array.isArray(K) ? "array" : K instanceof RegExp ? "object" : Ce(J, K) ? "symbol" : J;
    }
    function Ae(K) {
      if (typeof K > "u" || K === null)
        return "" + K;
      var J = Te(K);
      if (J === "object") {
        if (K instanceof Date)
          return "date";
        if (K instanceof RegExp)
          return "regexp";
      }
      return J;
    }
    function qe(K) {
      var J = Ae(K);
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
    function ct(K) {
      return !K.constructor || !K.constructor.name ? v : K.constructor.name;
    }
    return S.checkPropTypes = i, S.resetWarningCache = i.resetWarningCache, S.PropTypes = S, S;
  }, nf;
}
var af, _m;
function dR() {
  if (_m)
    return af;
  _m = 1;
  var e = Id();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, af = function() {
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
  }, af;
}
if (process.env.NODE_ENV !== "production") {
  var pR = Vl(), hR = !0;
  Gf.exports = fR()(pR.isElement, hR);
} else
  Gf.exports = dR()();
var yb = Gf.exports;
const d = /* @__PURE__ */ $t(yb);
function gR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Po(e) {
  return e === void 0;
}
function mR(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
var vR = /\s/;
function yR(e) {
  for (var t = e.length; t-- && vR.test(e.charAt(t)); )
    ;
  return t;
}
var bR = /^\s+/;
function bb(e) {
  return e && e.slice(0, yR(e) + 1).replace(bR, "");
}
var Om = 0 / 0, ER = /^[-+]0x[0-9a-f]+$/i, wR = /^0b[01]+$/i, SR = /^0o[0-7]+$/i, _R = parseInt;
function Eb(e) {
  if (typeof e == "number")
    return e;
  if (Ca(e))
    return Om;
  if (hn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = hn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = bb(e);
  var r = wR.test(e);
  return r || SR.test(e) ? _R(e.slice(2), r ? 2 : 8) : ER.test(e) ? Om : +e;
}
var Tm = 1 / 0, OR = 17976931348623157e292;
function hi(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Eb(e), e === Tm || e === -Tm) {
    var t = e < 0 ? -1 : 1;
    return t * OR;
  }
  return e === e ? e : 0;
}
function cs(e) {
  var t = hi(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
function TR(e, t, r) {
  return e = Ha(e), r = r == null ? 0 : mR(cs(r), 0, e.length), t = Jl(t), e.slice(r, r + t.length) == t;
}
function wb(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var l = e[r];
    t(l, r, e) && (s[i++] = l);
  }
  return s;
}
function xR(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), l = n(t), u = l.length; u--; ) {
      var f = l[e ? u : ++i];
      if (r(s[f], f, s) === !1)
        break;
    }
    return t;
  };
}
var PR = xR();
const CR = PR;
function AR(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
function $R() {
  return !1;
}
var Sb = typeof exports == "object" && exports && !exports.nodeType && exports, xm = Sb && typeof module == "object" && module && !module.nodeType && module, RR = xm && xm.exports === Sb, Pm = RR ? xn.Buffer : void 0, IR = Pm ? Pm.isBuffer : void 0, NR = IR || $R;
const Cl = NR;
var kR = "[object Arguments]", DR = "[object Array]", MR = "[object Boolean]", LR = "[object Date]", FR = "[object Error]", BR = "[object Function]", UR = "[object Map]", zR = "[object Number]", qR = "[object Object]", jR = "[object RegExp]", HR = "[object Set]", WR = "[object String]", GR = "[object WeakMap]", VR = "[object ArrayBuffer]", QR = "[object DataView]", KR = "[object Float32Array]", YR = "[object Float64Array]", XR = "[object Int8Array]", JR = "[object Int16Array]", ZR = "[object Int32Array]", eI = "[object Uint8Array]", tI = "[object Uint8ClampedArray]", rI = "[object Uint16Array]", nI = "[object Uint32Array]", ot = {};
ot[KR] = ot[YR] = ot[XR] = ot[JR] = ot[ZR] = ot[eI] = ot[tI] = ot[rI] = ot[nI] = !0;
ot[kR] = ot[DR] = ot[VR] = ot[MR] = ot[QR] = ot[LR] = ot[FR] = ot[BR] = ot[UR] = ot[zR] = ot[qR] = ot[jR] = ot[HR] = ot[WR] = ot[GR] = !1;
function aI(e) {
  return $r(e) && Rd(e.length) && !!ot[Wr(e)];
}
function ru(e) {
  return function(t) {
    return e(t);
  };
}
var _b = typeof exports == "object" && exports && !exports.nodeType && exports, Co = _b && typeof module == "object" && module && !module.nodeType && module, iI = Co && Co.exports === _b, of = iI && cb.process, oI = function() {
  try {
    var e = Co && Co.require && Co.require("util").types;
    return e || of && of.binding && of.binding("util");
  } catch {
  }
}();
const Cm = oI;
var Am = Cm && Cm.isTypedArray, sI = Am ? ru(Am) : aI;
const Nd = sI;
var lI = Object.prototype, uI = lI.hasOwnProperty;
function cI(e, t) {
  var r = wt(e), n = !r && Zl(e), i = !r && !n && Cl(e), s = !r && !n && !i && Nd(e), l = r || n || i || s, u = l ? AR(e.length, String) : [], f = u.length;
  for (var p in e)
    (t || uI.call(e, p)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    eu(p, f))) && u.push(p);
  return u;
}
var fI = Object.prototype;
function Ob(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || fI;
  return e === r;
}
function Tb(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var dI = Tb(Object.keys, Object);
const pI = dI;
var hI = Object.prototype, gI = hI.hasOwnProperty;
function kd(e) {
  if (!Ob(e))
    return pI(e);
  var t = [];
  for (var r in Object(e))
    gI.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function An(e) {
  return e != null && Rd(e.length) && !Ei(e);
}
function Cr(e) {
  return An(e) ? cI(e) : kd(e);
}
function mI(e, t) {
  return e && CR(e, t, Cr);
}
function vI(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!An(r))
      return e(r, n);
    for (var i = r.length, s = t ? i : -1, l = Object(r); (t ? s-- : ++s < i) && n(l[s], s, l) !== !1; )
      ;
    return r;
  };
}
var yI = vI(mI);
const Mi = yI;
function bI(e, t) {
  var r = [];
  return Mi(e, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function EI() {
  this.__data__ = new Pn(), this.size = 0;
}
function wI(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function SI(e) {
  return this.__data__.get(e);
}
function _I(e) {
  return this.__data__.has(e);
}
var OI = 200;
function TI(e, t) {
  var r = this.__data__;
  if (r instanceof Pn) {
    var n = r.__data__;
    if (!Do || n.length < OI - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Cn(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function pn(e) {
  var t = this.__data__ = new Pn(e);
  this.size = t.size;
}
pn.prototype.clear = EI;
pn.prototype.delete = wI;
pn.prototype.get = SI;
pn.prototype.has = _I;
pn.prototype.set = TI;
var xI = "__lodash_hash_undefined__";
function PI(e) {
  return this.__data__.set(e, xI), this;
}
function CI(e) {
  return this.__data__.has(e);
}
function $a(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Cn(); ++t < r; )
    this.add(e[t]);
}
$a.prototype.add = $a.prototype.push = PI;
$a.prototype.has = CI;
function xb(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Mo(e, t) {
  return e.has(t);
}
var AI = 1, $I = 2;
function Pb(e, t, r, n, i, s) {
  var l = r & AI, u = e.length, f = t.length;
  if (u != f && !(l && f > u))
    return !1;
  var p = s.get(e), h = s.get(t);
  if (p && h)
    return p == t && h == e;
  var m = -1, v = !0, S = r & $I ? new $a() : void 0;
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
    if (S) {
      if (!xb(t, function(C, M) {
        if (!Mo(S, M) && (O === C || i(O, C, r, n, s)))
          return S.push(M);
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
var RI = xn.Uint8Array;
const $m = RI;
function II(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function Dd(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var NI = 1, kI = 2, DI = "[object Boolean]", MI = "[object Date]", LI = "[object Error]", FI = "[object Map]", BI = "[object Number]", UI = "[object RegExp]", zI = "[object Set]", qI = "[object String]", jI = "[object Symbol]", HI = "[object ArrayBuffer]", WI = "[object DataView]", Rm = Hr ? Hr.prototype : void 0, sf = Rm ? Rm.valueOf : void 0;
function GI(e, t, r, n, i, s, l) {
  switch (r) {
    case WI:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case HI:
      return !(e.byteLength != t.byteLength || !s(new $m(e), new $m(t)));
    case DI:
    case MI:
    case BI:
      return Ql(+e, +t);
    case LI:
      return e.name == t.name && e.message == t.message;
    case UI:
    case qI:
      return e == t + "";
    case FI:
      var u = II;
    case zI:
      var f = n & NI;
      if (u || (u = Dd), e.size != t.size && !f)
        return !1;
      var p = l.get(e);
      if (p)
        return p == t;
      n |= kI, l.set(e, t);
      var h = Pb(u(e), u(t), n, i, s, l);
      return l.delete(e), h;
    case jI:
      if (sf)
        return sf.call(e) == sf.call(t);
  }
  return !1;
}
function Cb(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function VI(e, t, r) {
  var n = t(e);
  return wt(e) ? n : Cb(n, r(e));
}
function QI() {
  return [];
}
var KI = Object.prototype, YI = KI.propertyIsEnumerable, Im = Object.getOwnPropertySymbols, XI = Im ? function(e) {
  return e == null ? [] : (e = Object(e), wb(Im(e), function(t) {
    return YI.call(e, t);
  }));
} : QI;
const JI = XI;
function Nm(e) {
  return VI(e, Cr, JI);
}
var ZI = 1, eN = Object.prototype, tN = eN.hasOwnProperty;
function rN(e, t, r, n, i, s) {
  var l = r & ZI, u = Nm(e), f = u.length, p = Nm(t), h = p.length;
  if (f != h && !l)
    return !1;
  for (var m = f; m--; ) {
    var v = u[m];
    if (!(l ? v in t : tN.call(t, v)))
      return !1;
  }
  var S = s.get(e), O = s.get(t);
  if (S && O)
    return S == t && O == e;
  var T = !0;
  s.set(e, t), s.set(t, e);
  for (var _ = l; ++m < f; ) {
    v = u[m];
    var C = e[v], M = t[v];
    if (n)
      var k = l ? n(M, C, v, t, e, s) : n(C, M, v, e, t, s);
    if (!(k === void 0 ? C === M || i(C, M, r, n, s) : k)) {
      T = !1;
      break;
    }
    _ || (_ = v == "constructor");
  }
  if (T && !_) {
    var U = e.constructor, R = t.constructor;
    U != R && "constructor" in e && "constructor" in t && !(typeof U == "function" && U instanceof U && typeof R == "function" && R instanceof R) && (T = !1);
  }
  return s.delete(e), s.delete(t), T;
}
var nN = ja(xn, "DataView");
const Vf = nN;
var aN = ja(xn, "Promise");
const Qf = aN;
var iN = ja(xn, "Set");
const gi = iN;
var oN = ja(xn, "WeakMap");
const Kf = oN;
var km = "[object Map]", sN = "[object Object]", Dm = "[object Promise]", Mm = "[object Set]", Lm = "[object WeakMap]", Fm = "[object DataView]", lN = qa(Vf), uN = qa(Do), cN = qa(Qf), fN = qa(gi), dN = qa(Kf), ga = Wr;
(Vf && ga(new Vf(new ArrayBuffer(1))) != Fm || Do && ga(new Do()) != km || Qf && ga(Qf.resolve()) != Dm || gi && ga(new gi()) != Mm || Kf && ga(new Kf()) != Lm) && (ga = function(e) {
  var t = Wr(e), r = t == sN ? e.constructor : void 0, n = r ? qa(r) : "";
  if (n)
    switch (n) {
      case lN:
        return Fm;
      case uN:
        return km;
      case cN:
        return Dm;
      case fN:
        return Mm;
      case dN:
        return Lm;
    }
  return t;
});
const Al = ga;
var pN = 1, Bm = "[object Arguments]", Um = "[object Array]", cl = "[object Object]", hN = Object.prototype, zm = hN.hasOwnProperty;
function gN(e, t, r, n, i, s) {
  var l = wt(e), u = wt(t), f = l ? Um : Al(e), p = u ? Um : Al(t);
  f = f == Bm ? cl : f, p = p == Bm ? cl : p;
  var h = f == cl, m = p == cl, v = f == p;
  if (v && Cl(e)) {
    if (!Cl(t))
      return !1;
    l = !0, h = !1;
  }
  if (v && !h)
    return s || (s = new pn()), l || Nd(e) ? Pb(e, t, r, n, i, s) : GI(e, t, f, r, n, i, s);
  if (!(r & pN)) {
    var S = h && zm.call(e, "__wrapped__"), O = m && zm.call(t, "__wrapped__");
    if (S || O) {
      var T = S ? e.value() : e, _ = O ? t.value() : t;
      return s || (s = new pn()), i(T, _, r, n, s);
    }
  }
  return v ? (s || (s = new pn()), rN(e, t, r, n, i, s)) : !1;
}
function nu(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !$r(e) && !$r(t) ? e !== e && t !== t : gN(e, t, r, n, nu, i);
}
var mN = 1, vN = 2;
function yN(e, t, r, n) {
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
      var m = new pn();
      if (n)
        var v = n(p, h, f, e, t, m);
      if (!(v === void 0 ? nu(h, p, mN | vN, n, m) : v))
        return !1;
    }
  }
  return !0;
}
function Ab(e) {
  return e === e && !hn(e);
}
function bN(e) {
  for (var t = Cr(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Ab(i)];
  }
  return t;
}
function $b(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function EN(e) {
  var t = bN(e);
  return t.length == 1 && t[0][2] ? $b(t[0][0], t[0][1]) : function(r) {
    return r === e || yN(r, e, t);
  };
}
function ba(e, t, r) {
  var n = e == null ? void 0 : us(e, t);
  return n === void 0 ? r : n;
}
function wN(e, t) {
  return e != null && t in Object(e);
}
function Rb(e, t) {
  return e != null && pb(e, t, wN);
}
var SN = 1, _N = 2;
function ON(e, t) {
  return $d(e) && Ab(t) ? $b(ki(e), t) : function(r) {
    var n = ba(r, e);
    return n === void 0 && n === t ? Rb(r, e) : nu(t, n, SN | _N);
  };
}
function Ib(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function TN(e) {
  return function(t) {
    return us(t, e);
  };
}
function xN(e) {
  return $d(e) ? Ib(ki(e)) : TN(e);
}
function Jn(e) {
  return typeof e == "function" ? e : e == null ? Wa : typeof e == "object" ? wt(e) ? ON(e[0], e[1]) : EN(e) : xN(e);
}
function Yf(e, t) {
  var r = wt(e) ? wb : bI;
  return r(e, Jn(t));
}
var PN = "[object Map]", CN = "[object Set]", AN = Object.prototype, $N = AN.hasOwnProperty;
function Ea(e) {
  if (e == null)
    return !0;
  if (An(e) && (wt(e) || typeof e == "string" || typeof e.splice == "function" || Cl(e) || Nd(e) || Zl(e)))
    return !e.length;
  var t = Al(e);
  if (t == PN || t == CN)
    return !e.size;
  if (Ob(e))
    return !kd(e).length;
  for (var r in e)
    if ($N.call(e, r))
      return !1;
  return !0;
}
function Nb(e, t, r, n) {
  for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
function RN(e) {
  return e !== e;
}
function IN(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
function au(e, t, r) {
  return t === t ? IN(e, t, r) : Nb(e, RN, r);
}
function Md(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && au(e, t, 0) > -1;
}
function Ld(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var NN = Math.min;
function kN(e, t, r) {
  for (var n = r ? Ld : Md, i = e[0].length, s = e.length, l = s, u = Array(s), f = 1 / 0, p = []; l--; ) {
    var h = e[l];
    l && t && (h = dn(h, ru(t))), f = NN(h.length, f), u[l] = !r && (t || i >= 120 && h.length >= 120) ? new $a(l && h) : void 0;
  }
  h = e[0];
  var m = -1, v = u[0];
  e:
    for (; ++m < i && p.length < f; ) {
      var S = h[m], O = t ? t(S) : S;
      if (S = r || S !== 0 ? S : 0, !(v ? Mo(v, O) : n(p, O, r))) {
        for (l = s; --l; ) {
          var T = u[l];
          if (!(T ? Mo(T, O) : n(e[l], O, r)))
            continue e;
        }
        v && v.push(O), p.push(S);
      }
    }
  return p;
}
function Lo(e) {
  return $r(e) && An(e);
}
function DN(e) {
  return Lo(e) ? e : [];
}
var MN = Di(function(e) {
  var t = dn(e, DN);
  return t.length && t[0] === e[0] ? kN(t) : [];
});
const LN = MN;
function FN(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function BN(e) {
  return typeof e == "function" ? e : Wa;
}
function kb(e, t) {
  var r = wt(e) ? FN : Mi;
  return r(e, BN(t));
}
var Xf = function(t) {
  return "default" + (t[0].toUpperCase() + t.slice(1));
}, UN = function(t, r, n, i) {
  i === void 0 && (i = !1);
  var s = r[t];
  if (s !== void 0)
    return s;
  if (i) {
    var l = r[Xf(t)];
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
}, Li = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var r, n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    r = e.call.apply(e, [this].concat(i)) || this;
    var l = r.constructor, u = l.autoControlledProps, f = l.getAutoControlledStateFromProps, p = ae(gR(r), "getInitialAutoControlledState", r.props) || {};
    if (process.env.NODE_ENV !== "production") {
      var h = r.constructor, m = h.defaultProps, v = h.name, S = h.propTypes, O = h.getDerivedStateFromProps;
      O !== t.getDerivedStateFromProps && console.error("Auto controlled " + v + " must specify a static getAutoControlledStateFromProps() instead of getDerivedStateFromProps()."), kb(u, function(M) {
        var k = Xf(M);
        Wf(S, k) || console.error(v + ' is missing "' + k + '" propTypes validation for auto controlled prop "' + M + '".'), Wf(S, M) || console.error(v + ' is missing propTypes validation for auto controlled prop "' + M + '".');
      });
      var T = LN(u, Cr(m));
      Ea(T) || console.error(["Do not set defaultProps for autoControlledProps. You can set defaults by", "setting state in the constructor or using an ES7 property initializer", "(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)", "See " + v + ' props: "' + T + '".'].join(" "));
      var _ = Yf(u, function(M) {
        return TR(M, "default");
      });
      Ea(_) || console.error(["Do not add default props to autoControlledProps.", "Default props are automatically handled.", "See " + v + ' autoControlledProps: "' + _ + '".'].join(" "));
    }
    var C = u.reduce(function(M, k) {
      if (M[k] = UN(k, r.props, p, !0), process.env.NODE_ENV !== "production") {
        var U = Xf(k), R = r.constructor.name;
        !Po(r.props[U]) && !Po(r.props[k]) && console.error(R + ' prop "' + k + '" is auto controlled. Specify either ' + U + " or " + k + ", but not both.");
      }
      return M;
    }, {});
    return r.state = q({}, p, C, {
      autoControlledProps: u,
      getAutoControlledStateFromProps: f
    }), r;
  }
  return t.getDerivedStateFromProps = function(n, i) {
    var s = i.autoControlledProps, l = i.getAutoControlledStateFromProps, u = s.reduce(function(p, h) {
      var m = !Po(n[h]);
      return m && (p[h] = n[h]), p;
    }, {});
    if (l) {
      var f = l(n, q({}, i, u), i);
      return q({}, u, f);
    }
    return u;
  }, t.getAutoControlledStateFromProps = function() {
    return null;
  }, t;
}(b.Component);
function zN(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!An(t)) {
      var s = Jn(r);
      t = Cr(t), r = function(u) {
        return s(i[u], u, i);
      };
    }
    var l = e(t, r, n);
    return l > -1 ? i[s ? t[l] : l] : void 0;
  };
}
var qN = Math.max;
function Jf(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : cs(r);
  return i < 0 && (i = qN(n + i, 0)), Nb(e, Jn(t), i);
}
var jN = zN(Jf);
const Db = jN;
function HN(e, t) {
  var r;
  return Mi(e, function(n, i, s) {
    return r = t(n, i, s), !r;
  }), !!r;
}
function Fo(e, t, r) {
  if (!hn(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? An(r) && eu(t, r.length) : n == "string" && t in r) ? Ql(r[t], e) : !1;
}
function Ao(e, t, r) {
  var n = wt(e) ? xb : HN;
  return r && Fo(e, t, r) && (t = void 0), n(e, Jn(t));
}
var WN = function(t, r) {
  return Ao(Cd.toArray(t), {
    type: r
  });
}, ue = function(t) {
  return t == null || Array.isArray(t) && t.length === 0;
}, ml = {
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
function qm(e) {
  var t = typeof e;
  return t === "string" || t === "number" ? ml[e] || e : "";
}
var N = function(t, r) {
  return t && r;
}, Dt = function(t, r) {
  return t && t !== !0 && t + " " + r;
}, dt = function(t, r) {
  return t && (t === !0 ? r : t + " " + r);
}, $l = function(t, r) {
  return !t || t === !0 ? null : t.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(n) {
    return n.replace("-", " ") + " " + r;
  }).join(" ");
}, Gr = function(t) {
  return t === "justified" ? "justified" : Dt(t, "aligned");
}, $n = function(t) {
  return Dt(t, "aligned");
}, Or = function(t, r, n) {
  if (r === void 0 && (r = ""), n === void 0 && (n = !1), n && t === "equal")
    return "equal width";
  var i = typeof t;
  return (i === "string" || i === "number") && r ? qm(t) + " " + r : qm(t);
}, GN = 200;
function Mb(e, t, r, n) {
  var i = -1, s = Md, l = !0, u = e.length, f = [], p = t.length;
  if (!u)
    return f;
  r && (t = dn(t, ru(r))), n ? (s = Ld, l = !1) : t.length >= GN && (s = Mo, l = !1, t = new $a(t));
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
var jm = Hr ? Hr.isConcatSpreadable : void 0;
function VN(e) {
  return wt(e) || Zl(e) || !!(jm && e && e[jm]);
}
function fs(e, t, r, n, i) {
  var s = -1, l = e.length;
  for (r || (r = VN), i || (i = []); ++s < l; ) {
    var u = e[s];
    t > 0 && r(u) ? t > 1 ? fs(u, t - 1, r, n, i) : Cb(i, u) : n || (i[i.length] = u);
  }
  return i;
}
var QN = Di(function(e, t) {
  return Lo(e) ? Mb(e, fs(t, 1, Lo, !0)) : [];
});
const Zf = QN;
function Lb(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : tu(e, t, r);
}
function KN(e, t) {
  for (var r = e.length; r-- && au(t, e[r], 0) > -1; )
    ;
  return r;
}
function YN(e, t) {
  for (var r = -1, n = e.length; ++r < n && au(t, e[r], 0) > -1; )
    ;
  return r;
}
function XN(e) {
  return e.split("");
}
var JN = "\\ud800-\\udfff", ZN = "\\u0300-\\u036f", ek = "\\ufe20-\\ufe2f", tk = "\\u20d0-\\u20ff", rk = ZN + ek + tk, nk = "\\ufe0e\\ufe0f", ak = "\\u200d", ik = RegExp("[" + ak + JN + rk + nk + "]");
function Fd(e) {
  return ik.test(e);
}
var Fb = "\\ud800-\\udfff", ok = "\\u0300-\\u036f", sk = "\\ufe20-\\ufe2f", lk = "\\u20d0-\\u20ff", uk = ok + sk + lk, ck = "\\ufe0e\\ufe0f", fk = "[" + Fb + "]", ed = "[" + uk + "]", td = "\\ud83c[\\udffb-\\udfff]", dk = "(?:" + ed + "|" + td + ")", Bb = "[^" + Fb + "]", Ub = "(?:\\ud83c[\\udde6-\\uddff]){2}", zb = "[\\ud800-\\udbff][\\udc00-\\udfff]", pk = "\\u200d", qb = dk + "?", jb = "[" + ck + "]?", hk = "(?:" + pk + "(?:" + [Bb, Ub, zb].join("|") + ")" + jb + qb + ")*", gk = jb + qb + hk, mk = "(?:" + [Bb + ed + "?", ed, Ub, zb, fk].join("|") + ")", vk = RegExp(td + "(?=" + td + ")|" + mk + gk, "g");
function yk(e) {
  return e.match(vk) || [];
}
function rd(e) {
  return Fd(e) ? yk(e) : XN(e);
}
function bk(e, t, r) {
  if (e = Ha(e), e && (r || t === void 0))
    return bb(e);
  if (!e || !(t = Jl(t)))
    return e;
  var n = rd(e), i = rd(t), s = YN(n, i), l = KN(n, i) + 1;
  return Lb(n, s, l).join("");
}
function Ek(e, t, r) {
  t == "__proto__" && Pl ? Pl(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var wk = Object.prototype, Sk = wk.hasOwnProperty;
function _k(e, t, r) {
  var n = e[t];
  (!(Sk.call(e, t) && Ql(n, r)) || r === void 0 && !(t in e)) && Ek(e, t, r);
}
function Hb(e, t, r, n) {
  if (!hn(e))
    return e;
  t = ls(t, e);
  for (var i = -1, s = t.length, l = s - 1, u = e; u != null && ++i < s; ) {
    var f = ki(t[i]), p = r;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return e;
    if (i != l) {
      var h = u[f];
      p = n ? n(h, f, u) : void 0, p === void 0 && (p = hn(h) ? h : eu(t[i + 1]) ? [] : {});
    }
    _k(u, f, p), u = u[f];
  }
  return e;
}
function Ok(e, t, r) {
  for (var n = -1, i = t.length, s = {}; ++n < i; ) {
    var l = t[n], u = us(e, l);
    r(u, l) && Hb(s, ls(l, e), u);
  }
  return s;
}
function Tk(e, t) {
  return Ok(e, t, function(r, n) {
    return Rb(e, n);
  });
}
function xk(e) {
  var t = e == null ? 0 : e.length;
  return t ? fs(e, 1) : [];
}
function Pk(e) {
  return mb(gb(e, void 0, xk), e + "");
}
var Ck = Pk(function(e, t) {
  return e == null ? {} : Tk(e, t);
});
const Bd = Ck;
var Ak = Tb(Object.getPrototypeOf, Object);
const $k = Ak;
var Rk = "[object Object]", Ik = Function.prototype, Nk = Object.prototype, Wb = Ik.toString, kk = Nk.hasOwnProperty, Dk = Wb.call(Object);
function iu(e) {
  if (!$r(e) || Wr(e) != Rk)
    return !1;
  var t = $k(e);
  if (t === null)
    return !0;
  var r = kk.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Wb.call(r) == Dk;
}
function Ue(e) {
  return e == null;
}
function Mk(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var s = e[n], l = t(s);
    if (l != null && (u === void 0 ? l === l && !Ca(l) : r(l, u)))
      var u = l, f = s;
  }
  return f;
}
function Lk(e, t) {
  return e < t;
}
function Hm(e) {
  return e && e.length ? Mk(e, Wa, Lk) : void 0;
}
function Fk(e, t) {
  for (var r, n = -1, i = e.length; ++n < i; ) {
    var s = t(e[n]);
    s !== void 0 && (r = r === void 0 ? s : r + s);
  }
  return r;
}
function Wm(e) {
  return e && e.length ? Fk(e, Wa) : 0;
}
function Gb(e, t) {
  var r = -1, n = An(e) ? Array(e.length) : [];
  return Mi(e, function(i, s, l) {
    n[++r] = t(i, s, l);
  }), n;
}
function Pt(e, t) {
  var r = wt(e) ? dn : Gb;
  return r(e, Jn(t));
}
function Bk(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
function Uk(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, s = Ca(e), l = t !== void 0, u = t === null, f = t === t, p = Ca(t);
    if (!u && !p && !s && e > t || s && l && f && !u && !p || n && l && f || !r && f || !i)
      return 1;
    if (!n && !s && !p && e < t || p && r && i && !n && !s || u && r && i || !l && i || !f)
      return -1;
  }
  return 0;
}
function zk(e, t, r) {
  for (var n = -1, i = e.criteria, s = t.criteria, l = i.length, u = r.length; ++n < l; ) {
    var f = Uk(i[n], s[n]);
    if (f) {
      if (n >= u)
        return f;
      var p = r[n];
      return f * (p == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function qk(e, t, r) {
  t.length ? t = dn(t, function(s) {
    return wt(s) ? function(l) {
      return us(l, s.length === 1 ? s[0] : s);
    } : s;
  }) : t = [Wa];
  var n = -1;
  t = dn(t, ru(Jn));
  var i = Gb(e, function(s, l, u) {
    var f = dn(t, function(p) {
      return p(s);
    });
    return { criteria: f, index: ++n, value: s };
  });
  return Bk(i, function(s, l) {
    return zk(s, l, r);
  });
}
var jk = Di(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && Fo(e, t[0], t[1]) ? t = [] : r > 2 && Fo(t[0], t[1], t[2]) && (t = [t[0]]), qk(e, fs(t, 1), []);
});
const Hk = jk;
function Wk(e, t, r) {
  return e && e.length ? (t = r || t === void 0 ? 1 : cs(t), tu(e, 0, t < 0 ? 0 : t)) : [];
}
var Vb = function() {
  return 0;
};
if (process.env.NODE_ENV !== "production") {
  var lf = [], Gm = [];
  Vb = function(t, r) {
    if (t === r)
      return 0;
    var n = t.length, i = r.length;
    if (n === 0)
      return i;
    if (i === 0)
      return n;
    for (var s, l, u, f, p = 0, h = 0; p < n; )
      Gm[p] = t.charCodeAt(p), lf[p] = ++p;
    for (; h < i; )
      for (s = r.charCodeAt(h), u = h++, l = h, p = 0; p < n; p++)
        f = s === Gm[p] ? u : u + 1, u = lf[p], l = lf[p] = u > l ? f > l ? l + 1 : f : f > u ? u + 1 : f;
    return l;
  };
}
const Vm = Vb;
var Gk = function() {
  var t;
  return (t = Object.prototype.toString).call.apply(t, arguments);
}, Qb = function(t) {
  if (!Array.isArray(t))
    throw new Error("Invalid argument supplied to suggest, expected an instance of array.");
  var r = Xl(function(i) {
    var s = i.split(" ");
    return Wk(Hk(Pt(t, function(l) {
      var u = l.split(" "), f = Wm(Pt(Pt(s, function(h) {
        return Pt(u, function(m) {
          return Vm(h, m);
        });
      }), Hm)), p = Wm(Pt(Pt(u, function(h) {
        return Pt(s, function(m) {
          return Vm(h, m);
        });
      }), Hm));
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
}, nt = function(t) {
  return function(r, n, i) {
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to disallow, expected an instance of array.", " See `" + n + "` prop in `" + i + "`."].join(""));
    if (!(Ue(r[n]) || r[n] === !1)) {
      var s = t.reduce(function(l, u) {
        return !Ue(r[u]) && r[u] !== !1 ? [].concat(l, [u]) : l;
      }, []);
      if (s.length > 0)
        return new Error(["Prop `" + n + "` in `" + i + "` conflicts with props: `" + s.join("`, `") + "`.", "They cannot be defined together, choose one or the other."].join(" "));
    }
  };
}, Xe = function(t) {
  return function(r, n, i) {
    for (var s = arguments.length, l = new Array(s > 3 ? s - 3 : 0), u = 3; u < s; u++)
      l[u - 3] = arguments[u];
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to every, expected an instance of array.", "See `" + n + "` prop in `" + i + "`."].join(" "));
    var f = [];
    return t.forEach(function(p) {
      if (typeof p != "function")
        throw new Error('every() argument "validators" should contain functions, found: ' + Gk(p) + ".");
      var h = p.apply(void 0, [r, n, i].concat(l));
      h && f.push(h);
    }), f[0];
  };
}, Kb = function(t, r) {
  return function(n, i, s) {
    for (var l = arguments.length, u = new Array(l > 3 ? l - 3 : 0), f = 3; f < l; f++)
      u[f - 3] = arguments[f];
    if (!iu(t))
      throw new Error(["Invalid argument supplied to givenProps, expected an object.", "See `" + i + "` prop in `" + s + "`."].join(" "));
    if (typeof r != "function")
      throw new Error(["Invalid argument supplied to givenProps, expected a function.", "See `" + i + "` prop in `" + s + "`."].join(" "));
    var p = Cr(t).every(function(v) {
      var S = t[v];
      return typeof S == "function" ? !S.apply(void 0, [n, v, s].concat(u)) : S === n[i];
    });
    if (p) {
      var h = r.apply(void 0, [n, i, s].concat(u));
      if (h) {
        var m = "{ " + Cr(Bd(Cr(t), n)).map(function(v) {
          var S = n[v], O = S;
          return typeof S == "string" ? O = '"' + S + '"' : Array.isArray(S) ? O = "[" + S.join(", ") + "]" : hn(S) && (O = "{...}"), v + ": " + O;
        }).join(", ") + " }";
        return h.message = "Given props " + m + ": " + h.message, h;
      }
    }
  };
}, To = function(t) {
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
}, Rl = function(t) {
  return function(r, n, i) {
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to some, expected an instance of array.", "See `" + n + "` prop in `" + i + "`."].join(" "));
    var s = r[n];
    if (!(Ue(s) || s === !1)) {
      var l = s.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(f) {
        return bk(f).replace("-", " ");
      }), u = Zf(l, t);
      if (u.length > 0)
        return new Error("`" + n + "` prop in `" + i + "` has invalid values: `" + u.join("`, `") + "`.");
    }
  };
}, be = function() {
  return Xe([nt(["children"]), d.node]).apply(void 0, arguments);
}, he = function() {
  return Xe([nt(["children"]), d.oneOfType([d.func, d.node, d.object, d.arrayOf(d.oneOfType([d.node, d.object]))])]).apply(void 0, arguments);
}, Fi = function() {
  return Xe([nt(["children"]), d.arrayOf(he)]).apply(void 0, arguments);
}, Vk = d.shape({
  current: d.object
}), Yb = d.oneOfType([d.func, Vk]), Ud = { exports: {} }, yo = {}, uf = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
var Qm;
function Xb() {
  return Qm || (Qm = 1, function(e) {
    (function() {
      var t = !!(typeof window < "u" && window.document && window.document.createElement), r = {
        canUseDOM: t,
        canUseWorkers: typeof Worker < "u",
        canUseEventListeners: t && !!(window.addEventListener || window.attachEvent),
        canUseViewport: t && !!window.screen
      };
      e.exports ? e.exports = r : window.ExecutionEnvironment = r;
    })();
  }(uf)), uf.exports;
}
var Km;
function Qk() {
  if (Km)
    return yo;
  Km = 1, Object.defineProperty(yo, "__esModule", { value: !0 });
  var e = Xb(), t = b;
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
    for (var A = 0; A < x.length; A++) {
      var I = x[A];
      I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(F, I.key, I);
    }
  }
  function s(F, x, A) {
    return x && i(F.prototype, x), A && i(F, A), F;
  }
  function l(F, x, A) {
    return x in F ? Object.defineProperty(F, x, { value: A, enumerable: !0, configurable: !0, writable: !0 }) : F[x] = A, F;
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
    return (p = Object.setPrototypeOf || function(A, I) {
      return A.__proto__ = I, A;
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
      for (var A = this.handlers.slice(0), I = x.length, B = 0; B < I; B += 1)
        A.push(x[B]);
      return new F(A);
    } }, { key: "dispatchEvent", value: function(x, A) {
      var I = this.handlers.length - 1;
      if (A) {
        for (var B = I; B >= 0; B -= 1)
          this.handlers[B].called || (this.handlers[B].called = !0, this.handlers[B](x));
        for (var G = I; G >= 0; G -= 1)
          this.handlers[G].called = !1;
      } else
        (0, this.handlers[I])(x);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.length > 0;
    } }, { key: "removeHandlers", value: function(x) {
      for (var A = [], I = this.handlers.length, B = 0; B < I; B += 1) {
        var G = this.handlers[B];
        x.indexOf(G) === -1 && A.push(G);
      }
      return new F(A);
    } }]), F;
  }();
  function S(F) {
    var x = /* @__PURE__ */ new Map();
    return F.forEach(function(A, I) {
      x.set(I, A);
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
  var C = function() {
    function F(x, A) {
      n(this, F), l(this, "handlerSets", void 0), l(this, "poolName", void 0), this.handlerSets = A, this.poolName = x;
    }
    return s(F, [{ key: "addHandlers", value: function(x, A) {
      var I = S(this.handlerSets);
      if (I.has(x)) {
        var B = I.get(x);
        I.set(x, B.addHandlers(A));
      } else
        I.set(x, new v(A));
      return new F(this.poolName, I);
    } }, { key: "dispatchEvent", value: function(x, A) {
      var I = this.handlerSets.get(x), B = this.poolName === "default";
      I && I.dispatchEvent(A, B);
    } }, { key: "hasHandlers", value: function(x) {
      if (!x)
        return this.handlerSets.size > 0;
      var A = this.handlerSets.get(x);
      return !!A && A.hasHandlers();
    } }, { key: "removeHandlers", value: function(x, A) {
      var I = S(this.handlerSets);
      if (!I.has(x))
        return new F(this.poolName, I);
      var B = I.get(x).removeHandlers(A);
      return B.hasHandlers() ? I.set(x, B) : I.delete(x), new F(this.poolName, I);
    } }]), F;
  }();
  l(C, "createByType", function(F, x, A) {
    var I = /* @__PURE__ */ new Map();
    return I.set(x, new v(A)), new C(F, I);
  });
  var M = function() {
    function F(x) {
      var A = this;
      n(this, F), l(this, "handlers", /* @__PURE__ */ new Map()), l(this, "pools", /* @__PURE__ */ new Map()), l(this, "target", void 0), l(this, "createEmitter", function(I) {
        return function(B) {
          A.pools.forEach(function(G) {
            G.dispatchEvent(I, B);
          });
        };
      }), this.target = x;
    }
    return s(F, [{ key: "addHandlers", value: function(x, A, I) {
      if (this.pools.has(x)) {
        var B = this.pools.get(x);
        this.pools.set(x, B.addHandlers(A, I));
      } else
        this.pools.set(x, C.createByType(x, A, I));
      this.handlers.has(A) || this.addTargetHandler(A);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.size > 0;
    } }, { key: "removeHandlers", value: function(x, A, I) {
      if (this.pools.has(x)) {
        var B = this.pools.get(x).removeHandlers(A, I);
        B.hasHandlers() ? this.pools.set(x, B) : this.pools.delete(x);
        var G = !1;
        this.pools.forEach(function(X) {
          return G = G || X.hasHandlers(A);
        }), G || this.removeTargetHandler(A);
      }
    } }, { key: "addTargetHandler", value: function(x) {
      var A = this.createEmitter(x);
      this.handlers.set(x, A), this.target.addEventListener(x, A, !0);
    } }, { key: "removeTargetHandler", value: function(x) {
      this.handlers.has(x) && (this.target.removeEventListener(x, this.handlers.get(x), !0), this.handlers.delete(x));
    } }]), F;
  }(), k = function() {
    function F() {
      var x = this;
      n(this, F), l(this, "targets", /* @__PURE__ */ new Map()), l(this, "getTarget", function(A) {
        var I = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], B = _(A);
        if (x.targets.has(B))
          return x.targets.get(B);
        if (!I)
          return null;
        var G = new M(B);
        return x.targets.set(B, G), G;
      }), l(this, "removeTarget", function(A) {
        x.targets.delete(_(A));
      });
    }
    return s(F, [{ key: "sub", value: function(x, A) {
      var I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var B = I.target, G = B === void 0 ? document : B, X = I.pool, W = X === void 0 ? "default" : X;
        this.getTarget(G).addHandlers(W, x, O(A));
      }
    } }, { key: "unsub", value: function(x, A) {
      var I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var B = I.target, G = B === void 0 ? document : B, X = I.pool, W = X === void 0 ? "default" : X, le = this.getTarget(G, !1);
        le && (le.removeHandlers(W, x, O(A)), le.hasHandlers() || this.removeTarget(G));
      }
    } }]), F;
  }(), U = new k(), R = function(F) {
    function x() {
      return n(this, x), m(this, f(x).apply(this, arguments));
    }
    return u(x, t.PureComponent), s(x, [{ key: "componentDidMount", value: function() {
      this.subscribe(this.props);
    } }, { key: "componentDidUpdate", value: function(A) {
      this.unsubscribe(A), this.subscribe(this.props);
    } }, { key: "componentWillUnmount", value: function() {
      this.unsubscribe(this.props);
    } }, { key: "subscribe", value: function(A) {
      var I = A.name, B = A.on, G = A.pool, X = A.target;
      U.sub(I, B, { pool: G, target: X });
    } }, { key: "unsubscribe", value: function(A) {
      var I = A.name, B = A.on, G = A.pool, X = A.target;
      U.unsub(I, B, { pool: G, target: X });
    } }, { key: "render", value: function() {
      return null;
    } }]), x;
  }();
  return l(R, "defaultProps", { pool: "default", target: "document" }), R.propTypes = {}, yo.instance = U, yo.default = R, yo;
}
var bo = {}, Ym;
function Kk() {
  if (Ym)
    return bo;
  Ym = 1, Object.defineProperty(bo, "__esModule", { value: !0 });
  var e = Xb(), t = yb, r = b;
  function n(x) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? n = function(A) {
      return typeof A;
    } : n = function(A) {
      return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
    }, n(x);
  }
  function i(x, A) {
    if (!(x instanceof A))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(x, A) {
    for (var I = 0; I < A.length; I++) {
      var B = A[I];
      B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(x, B.key, B);
    }
  }
  function l(x, A, I) {
    return A && s(x.prototype, A), I && s(x, I), x;
  }
  function u(x, A, I) {
    return A in x ? Object.defineProperty(x, A, {
      value: I,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : x[A] = I, x;
  }
  function f(x, A) {
    if (typeof A != "function" && A !== null)
      throw new TypeError("Super expression must either be null or a function");
    x.prototype = Object.create(A && A.prototype, {
      constructor: {
        value: x,
        writable: !0,
        configurable: !0
      }
    }), A && h(x, A);
  }
  function p(x) {
    return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(I) {
      return I.__proto__ || Object.getPrototypeOf(I);
    }, p(x);
  }
  function h(x, A) {
    return h = Object.setPrototypeOf || function(B, G) {
      return B.__proto__ = G, B;
    }, h(x, A);
  }
  function m(x) {
    if (x === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return x;
  }
  function v(x, A) {
    return A && (typeof A == "object" || typeof A == "function") ? A : m(x);
  }
  var S = /* @__PURE__ */ function() {
    function x(A) {
      i(this, x), u(this, "handlers", void 0), this.handlers = A.slice(0);
    }
    return l(x, [{
      key: "addHandlers",
      value: function(I) {
        for (var B = this.handlers.slice(0), G = I.length, X = 0; X < G; X += 1)
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
        var G = this.handlers.length - 1;
        if (!B) {
          var X = this.handlers[G];
          X(I);
          return;
        }
        for (var W = G; W >= 0; W -= 1)
          this.handlers[W].called || (this.handlers[W].called = !0, this.handlers[W](I));
        for (var le = G; le >= 0; le -= 1)
          this.handlers[le].called = !1;
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
        for (var B = [], G = this.handlers.length, X = 0; X < G; X += 1) {
          var W = this.handlers[X];
          I.indexOf(W) === -1 && B.push(W);
        }
        return new x(B);
      }
    }]), x;
  }();
  function O(x) {
    var A = /* @__PURE__ */ new Map();
    return x.forEach(function(I, B) {
      A.set(B, I);
    }), A;
  }
  function T(x) {
    return Array.isArray(x) ? x : [x];
  }
  var _ = function(A) {
    return A !== null && n(A) === "object" && A.hasOwnProperty("current");
  };
  function C(x) {
    return x === "document" ? document : x === "window" ? window : _(x) ? x.current || document : x || document;
  }
  var M = /* @__PURE__ */ function() {
    function x(A, I) {
      i(this, x), u(this, "handlerSets", void 0), u(this, "poolName", void 0), this.handlerSets = I, this.poolName = A;
    }
    return l(x, [{
      key: "addHandlers",
      value: function(I, B) {
        var G = O(this.handlerSets);
        if (G.has(I)) {
          var X = G.get(I);
          G.set(I, X.addHandlers(B));
        } else
          G.set(I, new S(B));
        return new x(this.poolName, G);
      }
    }, {
      key: "dispatchEvent",
      value: function(I, B) {
        var G = this.handlerSets.get(I), X = this.poolName === "default";
        G && G.dispatchEvent(B, X);
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
        var G = O(this.handlerSets);
        if (!G.has(I))
          return new x(this.poolName, G);
        var X = G.get(I), W = X.removeHandlers(B);
        return W.hasHandlers() ? G.set(I, W) : G.delete(I), new x(this.poolName, G);
      }
    }]), x;
  }();
  u(M, "createByType", function(x, A, I) {
    var B = /* @__PURE__ */ new Map();
    return B.set(A, new S(I)), new M(x, B);
  });
  var k = /* @__PURE__ */ function() {
    function x(A) {
      var I = this;
      i(this, x), u(this, "handlers", /* @__PURE__ */ new Map()), u(this, "pools", /* @__PURE__ */ new Map()), u(this, "target", void 0), u(this, "createEmitter", function(B) {
        return function(G) {
          I.pools.forEach(function(X) {
            X.dispatchEvent(B, G);
          });
        };
      }), this.target = A;
    }
    return l(x, [{
      key: "addHandlers",
      value: function(I, B, G) {
        if (this.pools.has(I)) {
          var X = this.pools.get(I);
          this.pools.set(I, X.addHandlers(B, G));
        } else
          this.pools.set(I, M.createByType(I, B, G));
        this.handlers.has(B) || this.addTargetHandler(B);
      }
    }, {
      key: "hasHandlers",
      value: function() {
        return this.handlers.size > 0;
      }
    }, {
      key: "removeHandlers",
      value: function(I, B, G) {
        if (this.pools.has(I)) {
          var X = this.pools.get(I), W = X.removeHandlers(B, G);
          W.hasHandlers() ? this.pools.set(I, W) : this.pools.delete(I);
          var le = !1;
          this.pools.forEach(function(Ce) {
            return le = le || Ce.hasHandlers(B);
          }), le || this.removeTargetHandler(B);
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
      var A = this;
      i(this, x), u(this, "targets", /* @__PURE__ */ new Map()), u(this, "getTarget", function(I) {
        var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, G = C(I);
        if (A.targets.has(G))
          return A.targets.get(G);
        if (!B)
          return null;
        var X = new k(G);
        return A.targets.set(G, X), X;
      }), u(this, "removeTarget", function(I) {
        A.targets.delete(C(I));
      });
    }
    return l(x, [{
      key: "sub",
      value: function(I, B) {
        var G = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var X = G.target, W = X === void 0 ? document : X, le = G.pool, Ce = le === void 0 ? "default" : le, Te = this.getTarget(W);
          Te.addHandlers(Ce, I, T(B));
        }
      }
    }, {
      key: "unsub",
      value: function(I, B) {
        var G = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var X = G.target, W = X === void 0 ? document : X, le = G.pool, Ce = le === void 0 ? "default" : le, Te = this.getTarget(W, !1);
          Te && (Te.removeHandlers(Ce, I, T(B)), Te.hasHandlers() || this.removeTarget(W));
        }
      }
    }]), x;
  }(), R = new U(), F = /* @__PURE__ */ function(x) {
    f(A, x);
    function A() {
      return i(this, A), v(this, p(A).apply(this, arguments));
    }
    return l(A, [{
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
        var G = B.name, X = B.on, W = B.pool, le = B.target;
        R.sub(G, X, {
          pool: W,
          target: le
        });
      }
    }, {
      key: "unsubscribe",
      value: function(B) {
        var G = B.name, X = B.on, W = B.pool, le = B.target;
        R.unsub(G, X, {
          pool: W,
          target: le
        });
      }
    }, {
      key: "render",
      value: function() {
        return null;
      }
    }]), A;
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
  }, bo.instance = R, bo.default = F, bo;
}
var Il;
process.env.NODE_ENV === "production" ? Il = Qk() : Il = Kk();
Ud.exports = Il.default;
var fl = Ud.exports.instance = Il.instance, Yk = Ud.exports;
const qn = /* @__PURE__ */ $t(Yk);
function Jb() {
}
var Xk = 1 / 0, Jk = gi && 1 / Dd(new gi([, -0]))[1] == Xk ? function(e) {
  return new gi(e);
} : Jb;
const Zk = Jk;
var eD = 200;
function Zb(e, t, r) {
  var n = -1, i = Md, s = e.length, l = !0, u = [], f = u;
  if (r)
    l = !1, i = Ld;
  else if (s >= eD) {
    var p = t ? null : Zk(e);
    if (p)
      return Dd(p);
    l = !1, i = Mo, f = new $a();
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
function ou(e) {
  return e && e.length ? Zb(e) : [];
}
var tD = "[object Number]";
function rD(e) {
  return typeof e == "number" || $r(e) && Wr(e) == tD;
}
var nD = "[object String]";
function zd(e) {
  return typeof e == "string" || !wt(e) && $r(e) && Wr(e) == nD;
}
var aD = "[object Boolean]";
function iD(e) {
  return e === !0 || e === !1 || $r(e) && Wr(e) == aD;
}
function eE(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = eE(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function ie() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = eE(e)) && (n && (n += " "), n += t);
  return n;
}
var Xm = {};
function mi(e, t, r, n) {
  if (n === void 0 && (n = {}), typeof e != "function" && typeof e != "string")
    throw new Error("createShorthand() Component must be a string or function.");
  if (Ue(r) || iD(r))
    return null;
  var i = zd(r), s = rD(r), l = Ei(r), u = /* @__PURE__ */ fn.isValidElement(r), f = iu(r), p = i || s || wt(r);
  if (!l && !u && !f && !p)
    return process.env.NODE_ENV !== "production" && console.error(["Shorthand value must be a string|number|array|object|ReactElement|function.", " Use null|undefined|boolean for none", " Received " + typeof r + "."].join("")), null;
  var h = n, m = h.defaultProps, v = m === void 0 ? {} : m, S = u && r.props || f && r || p && t(r), O = n, T = O.overrideProps, _ = T === void 0 ? {} : T;
  _ = Ei(_) ? _(q({}, v, S)) : _;
  var C = q({}, v, S, _);
  if (v.className || _.className || S.className) {
    var M = ie(v.className, _.className, S.className);
    C.className = ou(M.split(" ")).join(" ");
  }
  if ((v.style || _.style || S.style) && (C.style = q({}, v.style, S.style, _.style)), Ue(C.key)) {
    var k = C.childKey, U = n, R = U.autoGenerateKey, F = R === void 0 ? !0 : R;
    Ue(k) ? F && (i || s) && (C.key = r) : (C.key = typeof k == "function" ? k(C) : k, delete C.childKey);
  }
  if (u)
    return /* @__PURE__ */ fn.cloneElement(r, C);
  if (typeof C.children == "function")
    return C.children(e, q({}, C, {
      children: void 0
    }));
  if (p || f)
    return /* @__PURE__ */ fn.createElement(e, C);
  if (l)
    return process.env.NODE_ENV !== "production" && (Xm[e] || (Xm[e] = !0, console.warn('Warning: There is a deprecated shorthand function usage for "' + e + '". It is deprecated and will be removed in v3 release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4029'))), r(e, C, C.children);
}
function ze(e, t) {
  if (typeof e != "function" && typeof e != "string")
    throw new Error("createShorthandFactory() Component must be a string or function.");
  return function(r, n) {
    return mi(e, t, r, n);
  };
}
var oD = /* @__PURE__ */ ze("input", function(e) {
  return {
    type: e
  };
}), sD = /* @__PURE__ */ ze("label", function(e) {
  return {
    children: e
  };
}), lD = function(t, r) {
  var n = t.handledProps, i = n === void 0 ? [] : n;
  return Object.keys(r).reduce(function(s, l) {
    return l === "childKey" || i.indexOf(l) === -1 && (s[l] = r[l]), s;
  }, {});
};
const se = lD;
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
function uD(e, t) {
  return dn(t, function(r) {
    return e[r];
  });
}
function tE(e) {
  return e == null ? [] : uD(e, Cr(e));
}
var cD = Math.max;
function Bi(e, t, r, n) {
  e = An(e) ? e : tE(e), r = r && !n ? cs(r) : 0;
  var i = e.length;
  return r < 0 && (r = cD(i + r, 0)), zd(e) ? r <= i && e.indexOf(t, r) > -1 : !!i && au(e, t, r) > -1;
}
var rE = [
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
], fD = [
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
], dD = [].concat(rE, fD), pD = ["alt", "height", "src", "srcSet", "width", "loading"], qd = function(t, r) {
  r === void 0 && (r = {});
  var n = r, i = n.htmlProps, s = i === void 0 ? dD : i, l = n.includeAria, u = l === void 0 ? !0 : l, f = {}, p = {};
  return kb(t, function(h, m) {
    var v = u && (/^aria-.*$/.test(m) || m === "role"), S = Bi(s, m) || v ? f : p;
    S[m] = h;
  }), [f, p];
}, hD = typeof document == "object" && document !== null, gD = typeof window == "object" && window !== null && window.self === window, mD = function e() {
  return Ue(e.override) ? hD && gD : e.override;
};
const _a = mD;
var vD = Math.max, yD = Math.min;
function bD(e, t, r) {
  return e >= yD(t, r) && e < vD(t, r);
}
function Jm(e, t, r) {
  return t = hi(t), r === void 0 ? (r = t, t = 0) : r = hi(r), e = Eb(e), bD(e, t, r);
}
function ED(e) {
  return e && e.length ? e[0] : void 0;
}
var wD = function(t, r) {
  if (Ao([r, t], Ue))
    return !1;
  if (r.target && (ae(r.target, "setAttribute", "data-suir-click-target", !0), document.querySelector("[data-suir-click-target=true]")))
    return ae(r.target, "removeAttribute", "data-suir-click-target"), t.contains(r.target);
  var n = r.clientX, i = r.clientY;
  if (Ao([n, i], Ue))
    return !1;
  var s = t.getClientRects();
  if (!t.offsetWidth || !t.offsetHeight || !s || !s.length)
    return !1;
  var l = ED(s), u = l.top, f = l.bottom, p = l.left, h = l.right;
  return Ao([u, f, p, h], Ue) ? !1 : Jm(i, u, f + 1e-3) && Jm(n, p, h + 1e-3);
};
const Oa = wD;
var nE = function(t) {
  return {
    active: !1,
    type: "ellipsisItem",
    value: t
  };
}, SD = function() {
  return {
    active: !1,
    type: "firstItem",
    value: 1
  };
}, _D = function(t) {
  return {
    active: !1,
    type: "prevItem",
    value: Math.max(1, t - 1)
  };
}, OD = function(t) {
  return function(r) {
    return {
      active: t === r,
      type: "pageItem",
      value: r
    };
  };
}, TD = function(t, r) {
  return {
    active: !1,
    type: "nextItem",
    value: Math.min(t + 1, r)
  };
}, xD = function(t) {
  return {
    active: !1,
    type: "lastItem",
    value: t
  };
}, PD = Math.ceil, CD = Math.max;
function AD(e, t, r, n) {
  for (var i = -1, s = CD(PD((t - e) / (r || 1)), 0), l = Array(s); s--; )
    l[n ? s : ++i] = e, e += r;
  return l;
}
function $D(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && Fo(t, r, n) && (r = n = void 0), t = hi(t), r === void 0 ? (r = t, t = 0) : r = hi(r), n = n === void 0 ? t < r ? 1 : -1 : hi(n), AD(t, r, n, e);
  };
}
var RD = $D();
const ID = RD;
var ND = function(t, r, n) {
  var i = r - 1, s = i !== t + 1, l = s ? nE : n;
  return l(i);
}, kD = function(t, r, n) {
  var i = t + 1, s = i !== r - 1, l = s ? nE : n;
  return l(i);
}, vl = function(t, r, n) {
  return Pt(ID(t, r + 1), n);
}, DD = function(t, r) {
  var n = t.activePage, i = t.boundaryRange, s = t.hideEllipsis, l = t.siblingRange, u = t.totalPages, f = s ? 0 : 1, p = i, h = vl(1, p, r), m = u + 1 - i, v = vl(m, u, r), S = Math.min(Math.max(n - l, p + f + 1), m - f - 2 * l - 1), O = S + 2 * l, T = vl(S, O, r);
  return [].concat(h, [!s && ND(p, S, r)], T, [!s && kD(O, m, r)], v).filter(Boolean);
}, MD = function(t) {
  var r = t.boundaryRange, n = t.hideEllipsis, i = t.siblingRange, s = t.totalPages, l = 2 * r, u = n ? 0 : 2, f = 2 * i;
  return 1 + u + f + l >= s;
}, LD = function(t) {
  var r = t.activePage, n = t.boundaryRange, i = t.hideEllipsis, s = t.siblingRange, l = t.totalPages;
  return {
    activePage: +r,
    boundaryRange: +n,
    hideEllipsis: !!i,
    siblingRange: +s,
    totalPages: +l
  };
}, FD = function(t) {
  var r = LD(t), n = r.activePage, i = r.totalPages, s = OD(n), l = MD(r) ? vl(1, i, s) : DD(r, s);
  return [SD(), _D(n)].concat(l, [TD(n, i), xD(i)]);
};
const BD = FD;
var yr = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"], Zn = ["left", "right"], Zt = ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"], Vr = ["left", "center", "right", "justified"], ea = ["bottom", "middle", "top"], aE = ["mobile", "tablet", "computer", "large screen", "widescreen"], Tr = [].concat(Cr(ml), Cr(ml).map(Number), tE(ml)), UD = ["american sign language interpreting", "assistive listening systems", "audio description", "blind", "braille", "closed captioning", "closed captioning outline", "deaf", "low vision", "phone volume", "question circle", "question circle outline", "sign language", "tty", "universal access", "wheelchair"], zD = ["angle double down", "angle double left", "angle double right", "angle double up", "angle down", "angle left", "angle right", "angle up", "arrow alternate circle down", "arrow alternate circle down outline", "arrow alternate circle left", "arrow alternate circle left outline", "arrow alternate circle right", "arrow alternate circle right outline", "arrow alternate circle up", "arrow alternate circle up outline", "arrow circle down", "arrow circle left", "arrow circle right", "arrow circle up", "arrow down", "arrow left", "arrow right", "arrow up", "arrows alternate", "arrows alternate horizontal", "arrows alternate vertical", "caret down", "caret left", "caret right", "caret square down", "caret square down outline", "caret square left", "caret square left outline", "caret square right", "caret square right outline", "caret square up", "caret square up outline", "caret up", "cart arrow down", "chart line", "chevron circle down", "chevron circle left", "chevron circle right", "chevron circle up", "chevron down", "chevron left", "chevron right", "chevron up", "cloud download", "cloud upload", "download", "exchange", "expand arrows alternate", "external alternate", "external square alternate", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "history", "level down alternate", "level up alternate", "location arrow", "long arrow alternate down", "long arrow alternate left", "long arrow alternate right", "long arrow alternate up", "mouse pointer", "play", "random", "recycle", "redo", "redo alternate", "reply", "reply all", "retweet", "share", "share square", "share square outline", "sign-in", "sign-out", "sign-in alternate", "sign-out alternate", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "sync", "sync alternate", "text height", "text width", "undo", "undo alternate", "upload", "zoom-in", "zoom-out"], qD = ["audio description", "backward", "circle", "circle outline", "closed captioning", "closed captioning outline", "compress", "eject", "expand", "expand arrows alternate", "fast backward", "fast forward", "file audio", "file audio outline", "file video", "file video outline", "film", "forward", "headphones", "microphone", "microphone slash", "music", "pause", "pause circle", "pause circle outline", "phone volume", "play", "play circle", "play circle outline", "podcast", "random", "redo", "redo alternate", "rss", "rss square", "step backward", "step forward", "stop", "stop circle", "stop circle outline", "sync", "sync alternate", "undo", "undo alternate", "video", "volume down", "volume off", "volume up"], jD = ["address book", "address book outline", "address card", "address card outline", "archive", "balance scale", "birthday cake", "book", "briefcase", "building", "building outline", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "certificate", "chart area", "chart bar", "chart bar outline", "chart line", "chart pie", "clipboard", "clipboard outline", "coffee", "columns", "compass", "compass outline", "copy", "copy outline", "copyright", "copyright outline", "cut", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "eraser", "fax", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "globe", "industry", "paperclip", "paste", "pen square", "pencil alternate", "percent", "phone", "phone square", "phone volume", "registered", "registered outline", "save", "save outline", "sitemap", "sticky note", "sticky note outline", "suitcase", "table", "tag", "tags", "tasks", "thumbtack", "trademark"], HD = ["chess", "chess bishop", "chess board", "chess king", "chess knight", "chess pawn", "chess queen", "chess rook", "square full"], WD = ["archive", "barcode", "bath", "bug", "code", "code branch", "coffee", "file", "file outline", "file alternate", "file alternate outline", "file code", "file code outline", "filter", "fire extinguisher", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "microchip", "qrcode", "shield alternate", "sitemap", "terminal", "user secret", "window close", "window close outline", "window maximize", "window maximize outline", "window minimize", "window minimize outline", "window restore", "window restore outline"], GD = ["address book", "address book outline", "address card", "address card outline", "american sign language interpreting", "assistive listening systems", "at", "bell", "bell outline", "bell slash", "bell slash outline", "bullhorn", "comment", "comment outline", "comment alternate", "comment alternate outline", "comments", "comments outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "fax", "inbox", "language", "microphone", "microphone slash", "mobile", "mobile alternate", "paper plane", "paper plane outline", "phone", "phone square", "phone volume", "rss", "rss square", "tty", "wifi"], VD = ["desktop", "download", "hdd", "hdd outline", "headphones", "keyboard", "keyboard outline", "laptop", "microchip", "mobile", "mobile alternate", "plug", "power off", "print", "save", "save outline", "server", "tablet", "tablet alternate", "tv", "upload"], QD = ["dollar sign", "euro sign", "lira sign", "money bill alternate", "money bill alternate outline", "pound sign", "ruble sign", "rupee sign", "shekel sign", "won sign", "yen sign"], KD = ["bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "clock", "clock outline", "hourglass", "hourglass outline", "hourglass end", "hourglass half", "hourglass start", "stopwatch"], YD = ["adjust", "clone", "clone outline", "copy", "copy outline", "crop", "crosshairs", "cut", "edit", "edit outline", "eraser", "eye", "eye dropper", "eye slash", "eye slash outline", "object group", "object group outline", "object ungroup", "object ungroup outline", "paint brush", "paste", "pencil alternate", "save", "save outline", "tint"], XD = ["align center", "align justify", "align left", "align right", "bold", "clipboard", "clipboard outline", "clone", "clone outline", "columns", "copy", "copy outline", "cut", "edit", "edit outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "font", "heading", "i cursor", "indent", "italic", "linkify", "list", "list alternate", "list alternate outline", "list ol", "list ul", "outdent", "paper plane", "paper plane outline", "paperclip", "paragraph", "paste", "pencil alternate", "print", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "share", "strikethrough", "subscript", "superscript", "sync", "sync alternate", "table", "tasks", "text height", "text width", "th", "th large", "th list", "trash", "trash alternate", "trash alternate outline", "underline", "undo", "undo alternate", "unlink"], JD = ["archive", "clone", "clone outline", "copy", "copy outline", "cut", "file", "file outline", "file alternate", "file alternate outline", "file archive", "file archive outline", "file audio", "file audio outline", "file code", "file code outline", "file excel", "file excel outline", "file image", "file image outline", "file pdf", "file pdf outline", "file powerpoint", "file powerpoint outline", "file video", "file video outline", "file word", "file word outline", "folder", "folder outline", "folder open", "folder open outline", "paste", "save", "save outline", "sticky note", "sticky note outline"], ZD = ["genderless", "mars", "mars double", "mars stroke", "mars stroke horizontal", "mars stroke vertical", "mercury", "neuter", "transgender", "transgender alternate", "venus", "venus double", "venus mars"], e2 = ["hand lizard", "hand lizard outline", "hand paper", "hand paper outline", "hand peace", "hand peace outline", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "hand rock", "hand rock outline", "hand scissors", "hand scissors outline", "hand spock", "hand spock outline", "handshake", "handshake outline", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline"], t2 = ["ambulance", "h square", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "medkit", "plus square", "plus square outline", "stethoscope", "user md", "wheelchair"], r2 = ["adjust", "bolt", "camera", "camera retro", "clone", "clone outline", "compress", "expand", "eye", "eye dropper", "eye slash", "eye slash outline", "file image", "file image outline", "film", "id badge", "id badge outline", "id card", "id card outline", "image", "image outline", "images", "images outline", "sliders horizontal", "tint"], n2 = ["ban", "barcode", "bars", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bug", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "certificate", "check", "check circle", "check circle outline", "check square", "check square outline", "circle", "circle outline", "clipboard", "clipboard outline", "clone", "clone outline", "cloud", "cloud download", "cloud upload", "coffee", "cog", "cogs", "copy", "copy outline", "cut", "database", "dot circle", "dot circle outline", "download", "edit", "edit outline", "ellipsis horizontal", "ellipsis vertical", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "exclamation", "exclamation circle", "exclamation triangle", "external alternate", "external square alternate", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "filter", "flag", "flag outline", "flag checkered", "folder", "folder outline", "folder open", "folder open outline", "frown", "frown outline", "hashtag", "heart", "heart outline", "history", "home", "i cursor", "info", "info circle", "language", "magic", "meh", "meh outline", "microphone", "microphone slash", "minus", "minus circle", "minus square", "minus square outline", "paste", "pencil alternate", "plus", "plus circle", "plus square", "plus square outline", "qrcode", "question", "question circle", "question circle outline", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "rss", "rss square", "save", "save outline", "search", "search minus", "search plus", "share", "share alternate", "share alternate square", "share square", "share square outline", "shield alternate", "sign-in", "sign-out", "signal", "sitemap", "sliders horizontal", "smile", "smile outline", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "star", "star outline", "star half", "star half outline", "sync", "sync alternate", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "times", "times circle", "times circle outline", "toggle off", "toggle on", "trash", "trash alternate", "trash alternate outline", "trophy", "undo", "undo alternate", "upload", "user", "user outline", "user circle", "user circle outline", "wifi"], a2 = ["box", "boxes", "clipboard check", "clipboard list", "dolly", "dolly flatbed", "pallet", "shipping fast", "truck", "warehouse"], i2 = ["ambulance", "anchor", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bicycle", "binoculars", "birthday cake", "blind", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "building", "building outline", "car", "coffee", "crosshairs", "dollar sign", "eye", "eye slash", "eye slash outline", "fighter jet", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "gamepad", "gavel", "gift", "glass martini", "globe", "graduation cap", "h square", "heart", "heart outline", "heartbeat", "home", "hospital", "hospital outline", "image", "image outline", "images", "images outline", "industry", "info", "info circle", "key", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "location arrow", "low vision", "magnet", "male", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "money bill alternate", "money bill alternate outline", "motorcycle", "music", "newspaper", "newspaper outline", "paw", "phone", "phone square", "phone volume", "plane", "plug", "plus", "plus square", "plus square outline", "print", "recycle", "road", "rocket", "search", "search minus", "search plus", "ship", "shopping bag", "shopping basket", "shopping cart", "shower", "street view", "subway", "suitcase", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "tint", "train", "tree", "trophy", "truck", "tty", "umbrella", "university", "utensil spoon", "utensils", "wheelchair", "wifi", "wrench"], o2 = ["ambulance", "band aid", "dna", "first aid", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "hospital symbol", "pills", "plus", "stethoscope", "syringe", "thermometer", "user md", "weight"], s2 = ["ambulance", "anchor", "archive", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bicycle", "binoculars", "birthday cake", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "bug", "building", "building outline", "bullhorn", "bullseye", "bus", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "camera", "camera retro", "car", "clipboard", "clipboard outline", "cloud", "coffee", "cog", "cogs", "compass", "compass outline", "copy", "copy outline", "cube", "cubes", "cut", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "eye", "eye dropper", "fax", "fighter jet", "file", "file outline", "file alternate", "file alternate outline", "film", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "futbol", "futbol outline", "gamepad", "gavel", "gem", "gem outline", "gift", "glass martini", "globe", "graduation cap", "hdd", "hdd outline", "headphones", "heart", "heart outline", "home", "hospital", "hospital outline", "hourglass", "hourglass outline", "image", "image outline", "images", "images outline", "industry", "key", "keyboard", "keyboard outline", "laptop", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "lock", "lock open", "magic", "magnet", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "microchip", "microphone", "mobile", "mobile alternate", "money bill alternate", "money bill alternate outline", "moon", "moon outline", "motorcycle", "newspaper", "newspaper outline", "paint brush", "paper plane", "paper plane outline", "paperclip", "paste", "paw", "pencil alternate", "phone", "plane", "plug", "print", "puzzle piece", "road", "rocket", "save", "save outline", "search", "shield alternate", "shopping bag", "shopping basket", "shopping cart", "shower", "snowflake", "snowflake outline", "space shuttle", "star", "star outline", "sticky note", "sticky note outline", "stopwatch", "subway", "suitcase", "sun", "sun outline", "tablet", "tablet alternate", "tachometer alternate", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "train", "trash", "trash alternate", "trash alternate outline", "tree", "trophy", "truck", "tv", "umbrella", "university", "unlock", "unlock alternate", "utensil spoon", "utensils", "wheelchair", "wrench"], l2 = ["bell", "bell outline", "bookmark", "bookmark outline", "bullhorn", "camera", "camera retro", "cart arrow down", "cart plus", "certificate", "credit card", "credit card outline", "gem", "gem outline", "gift", "handshake", "handshake outline", "heart", "heart outline", "key", "shopping bag", "shopping basket", "shopping cart", "star", "star outline", "tag", "tags", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "trophy"], u2 = ["bookmark", "bookmark outline", "calendar", "calendar outline", "certificate", "circle", "circle outline", "cloud", "comment", "comment outline", "file", "file outline", "folder", "folder outline", "heart", "heart outline", "map marker", "play", "square", "square outline", "star", "star outline"], c2 = ["asterisk", "certificate", "circle notch", "cog", "compass", "compass outline", "crosshairs", "life ring", "life ring outline", "snowflake", "snowflake outline", "spinner", "sun", "sun outline", "sync"], f2 = ["baseball ball", "basketball ball", "bowling ball", "football ball", "futbol", "futbol outline", "golf ball", "hockey puck", "quidditch", "table tennis", "volleyball ball"], d2 = ["ban", "battery empty", "battery full", "battery half", "battery quarter", "battery three quarters", "bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "cart arrow down", "cart plus", "exclamation", "exclamation circle", "exclamation triangle", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "info", "info circle", "lock", "lock open", "minus", "minus circle", "minus square", "minus square outline", "plus", "plus circle", "plus square", "plus square outline", "question", "question circle", "question circle outline", "shield alternate", "shopping cart", "sign in alternate", "sign out alternate", "thermometer empty", "thermometer full", "thermometer half", "thermometer quarter", "thermometer three quarters", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "toggle off", "toggle on", "unlock", "unlock alternate"], p2 = ["address book", "address book outline", "address card", "address card outline", "bed", "blind", "child", "female", "frown", "frown outline", "id badge", "id badge outline", "id card", "id card outline", "male", "meh", "meh outline", "power off", "smile", "smile outline", "street view", "user", "user outline", "user circle", "user circle outline", "user md", "user plus", "user secret", "user times", "users", "wheelchair"], h2 = ["ambulance", "bicycle", "bus", "car", "fighter jet", "motorcycle", "paper plane", "paper plane outline", "plane", "rocket", "ship", "shopping cart", "space shuttle", "subway", "taxi", "train", "truck", "wheelchair"], g2 = ["archive", "book", "bookmark", "bookmark outline", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "newspaper", "newspaper outline", "paper plane", "paper plane outline", "paperclip", "paragraph", "pen square", "pencil alternate", "quote left", "quote right", "sticky note", "sticky note outline", "thumbtack"], m2 = ["500px", "accessible", "accusoft", "adn", "adversal", "affiliatetheme", "algolia", "amazon", "amazon pay", "amilia", "android", "angellist", "angrycreative", "angular", "app store", "app store ios", "apper", "apple", "apple pay", "asymmetrik", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "behance", "behance square", "bimobject", "bitbucket", "bitcoin", "bity", "black tie", "blackberry", "blogger", "blogger b", "bluetooth", "bluetooth b", "btc", "buromobelexperte", "buysellads", "cc amazon pay", "cc amex", "cc apple pay", "cc diners club", "cc discover", "cc jcb", "cc mastercard", "cc paypal", "cc stripe", "cc visa", "centercode", "chrome", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "connectdevelop", "contao", "cpanel", "creative commons", "css3", "css3 alternate", "cuttlefish", "d and d", "dashcube", "delicious", "deploydog", "deskpro", "deviantart", "digg", "digital ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dribbble square", "dropbox", "drupal", "dyalog", "earlybirds", "edge", "elementor", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "expeditedssl", "facebook", "facebook f", "facebook messenger", "facebook square", "firefox", "first order", "firstdraft", "flickr", "flipboard", "fly", "font awesome", "font awesome alternate", "font awesome flag", "fonticons", "fonticons fi", "fort awesome", "fort awesome alternate", "forumbee", "foursquare", "free code camp", "freebsd", "get pocket", "gg", "gg circle", "git", "git square", "github", "github alternate", "github square", "gitkraken", "gitlab", "gitter", "glide", "glide g", "gofore", "goodreads", "goodreads g", "google", "google drive", "google play", "google plus", "google plus g", "google plus square", "google wallet", "gratipay", "grav", "gripfire", "grunt", "gulp", "hacker news", "hacker news square", "hips", "hire a helper", "hooli", "hotjar", "houzz", "html5", "hubspot", "imdb", "instagram", "internet explorer", "ioxhost", "itunes", "itunes note", "jenkins", "joget", "joomla", "js", "js square", "jsfiddle", "keycdn", "kickstarter", "kickstarter k", "korvue", "laravel", "lastfm", "lastfm square", "leanpub", "less", "linechat", "linkedin", "linkedin alternate", "linode", "linux", "lyft", "magento", "maxcdn", "medapps", "medium", "medium m", "medrt", "meetup", "microsoft", "mix", "mixcloud", "mizuni", "modx", "monero", "napster", "nintendo switch", "node", "node js", "npm", "ns8", "nutritionix", "odnoklassniki", "odnoklassniki square", "opencart", "openid", "opera", "optin monster", "osi", "page4", "pagelines", "palfed", "patreon", "paypal", "periscope", "phabricator", "phoenix framework", "php", "pied piper", "pied piper alternate", "pied piper pp", "pinterest", "pinterest p", "pinterest square", "playstation", "product hunt", "pushed", "python", "qq", "quinscape", "quora", "ravelry", "react", "rebel", "redriver", "reddit", "reddit alien", "reddit square", "rendact", "renren", "replyd", "resolving", "rocketchat", "rockrms", "safari", "sass", "schlix", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "simplybuilt", "sistrix", "skyatlas", "skype", "slack", "slack hash", "slideshare", "snapchat", "snapchat ghost", "snapchat square", "soundcloud", "speakap", "spotify", "stack exchange", "stack overflow", "staylinked", "steam", "steam square", "steam symbol", "sticker mule", "strava", "stripe", "stripe s", "studiovinari", "stumbleupon", "stumbleupon circle", "superpowers", "supple", "telegram", "telegram plane", "tencent weibo", "themeisle", "trello", "tripadvisor", "tumblr", "tumblr square", "twitch", "twitter", "twitter square", "typo3", "uber", "uikit", "uniregistry", "untappd", "usb", "ussunnah", "vaadin", "viacoin", "viadeo", "viadeo square", "viber", "vimeo", "vimeo square", "vimeo v", "vine", "vk", "vnv", "vuejs", "wechat", "weibo", "weixin", "whatsapp", "whatsapp square", "whmcs", "wikipedia w", "windows", "wordpress", "wordpress simple", "wpbeginner", "wpexplorer", "wpforms", "xbox", "xing", "xing square", "y combinator", "yahoo", "yandex", "yandex international", "yelp", "yoast", "youtube", "youtube square"], v2 = ou([].concat(UD, zD, qD, jD, HD, WD, GD, VD, QD, KD, YD, XD, JD, ZD, e2, t2, r2, n2, a2, i2, o2, s2, l2, u2, c2, f2, d2, p2, h2, g2, m2)), y2 = ["chess rock", "ordered list", "unordered list", "user doctor", "shield", "puzzle", "add circle", "add square", "add to calendar", "add to cart", "add user", "add", "alarm mute", "alarm", "ald", "als", "announcement", "area chart", "area graph", "arrow down cart", "asexual", "asl interpreting", "asl", "assistive listening devices", "attach", "attention", "balance", "bar", "bathtub", "battery four", "battery high", "battery low", "battery one", "battery three", "battery two", "battery zero", "birthday", "block layout", "bluetooth alternative", "broken chain", "browser", "call square", "call", "cancel", "cart", "cc", "chain", "chat", "checked calendar", "checkmark", "circle notched", "close", "cny", "cocktail", "commenting", "computer", "configure", "content", "deafness", "delete calendar", "delete", "detective", "discussions", "doctor", "dollar", "dont", "drivers license", "dropdown", "emergency", "envira gallery", "erase", "eur", "euro", "eyedropper", "factory", "favorite", "feed", "female homosexual", "file text", "file text outline", "find", "first aid", "fork", "game", "gay", "gbp", "google plus circle", "google plus official", "grab", "graduation", "grid layout", "group", "h", "hand victory", "handicap", "hard of hearing", "header", "help circle", "help", "heterosexual", "hide", "hotel", "hourglass four", "hourglass full", "hourglass one", "hourglass three", "hourglass two", "idea", "ils", "in cart", "inr", "intergender", "intersex", "jpy", "krw", "lab", "law", "legal", "lesbian", "lightning", "like", "line graph", "linkedin square", "linkify", "lira", "list layout", "magnify", "mail forward", "mail outline", "mail square", "mail", "male homosexual", "man", "marker", "mars alternate", "mars horizontal", "mars vertical", "microsoft edge", "military", "ms edge", "mute", "new pied piper", "non binary transgender", "numbered list", "options", "other gender horizontal", "other gender vertical", "other gender", "payment", "paypal card", "pencil square", "photo", "picture", "pie chart", "pie graph", "pied piper hat", "pin", "plus cart", "point", "pointing down", "pointing left", "pointing right", "pointing up", "pound", "power cord", "power", "privacy", "r circle", "rain", "record", "refresh", "remove circle", "remove from calendar", "remove user", "remove", "repeat", "rmb", "rouble", "rub", "ruble", "rupee", "s15", "selected radio", "send", "setting", "settings", "shekel", "sheqel", "shipping", "shop", "shuffle", "shutdown", "sidebar", "signing", "signup", "sliders", "soccer", "sort alphabet ascending", "sort alphabet descending", "sort ascending", "sort content ascending", "sort content descending", "sort descending", "sort numeric ascending", "sort numeric descending", "sound", "spy", "stripe card", "student", "talk", "target", "teletype", "television", "text cursor", "text telephone", "theme", "thermometer", "thumb tack", "time", "tm", "toggle down", "toggle left", "toggle right", "toggle up", "translate", "travel", "treatment", "triangle down", "triangle left", "triangle right", "triangle up", "try", "unhide", "unlinkify", "unmute", "usd", "user cancel", "user close", "user delete", "user x", "vcard", "video camera", "video play", "volume control phone", "wait", "warning circle", "warning sign", "warning", "wi-fi", "winner", "wizard", "woman", "won", "wordpress beginner", "wordpress forms", "world", "write square", "x", "yen", "zip", "zoom in", "zoom out", "zoom", "bitbucket square", "checkmark box", "circle thin", "cloud download", "cloud upload", "compose", "conversation", "credit card alternative", "currency", "dashboard", "diamond", "disk", "exchange", "external share", "external square", "external", "facebook official", "food", "hourglass zero", "level down", "level up", "log out", "meanpath", "money", "move", "pencil", "protect", "radio", "remove bookmark", "resize horizontal", "resize vertical", "sign in", "sign out", "spoon", "star half empty", "star half full", "ticket", "times rectangle", "write", "youtube play"], b2 = ou([].concat(v2, y2)), E2 = [
  "left dropdown"
  // nested dropdown menu direction icon
], w2 = ou([].concat(b2, E2));
function S2(e, t) {
  return nu(e, t);
}
var _2 = _a() && process.env.NODE_ENV !== "test" ? b.useLayoutEffect : b.useEffect;
const Zm = _2;
var O2 = /\s+/;
function T2(e) {
  var t = [];
  return e ? (e.forEach(function(r) {
    if (typeof r.current == "string") {
      var n = r.current.split(O2);
      n.forEach(function(i) {
        t.push(i);
      });
    }
  }), t.filter(function(r, n, i) {
    return r.length > 0 && i.indexOf(r) === n;
  })) : [];
}
function x2(e, t) {
  return [t.filter(function(r) {
    return e.indexOf(r) === -1;
  }), e.filter(function(r) {
    return t.indexOf(r) === -1;
  })];
}
var ev = /* @__PURE__ */ new Map(), cf = function(t, r) {
  var n = T2(r), i = x2(ev.get(t) || [], n), s = i[0], l = i[1];
  t && (s.forEach(function(u) {
    return t.classList.add(u);
  }), l.forEach(function(u) {
    return t.classList.remove(u);
  })), ev.set(t, n);
}, P2 = function() {
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
}, Eo = new P2();
function C2(e, t) {
  var r = b.useRef(), n = b.useRef(!1);
  Zm(function() {
    if (r.current = t, n.current) {
      var i = cm(e) ? e.current : e;
      Eo.emit(i, cf);
    }
    n.current = !0;
  }, [t]), Zm(function() {
    var i = cm(e) ? e.current : e;
    return Eo.add(i, r), Eo.emit(i, cf), function() {
      Eo.del(i, r), Eo.emit(i, cf);
    };
  }, [e]);
}
var A2 = Di(function(e, t) {
  return Lo(e) ? Mb(e, t) : [];
});
const sr = A2;
function wi(e) {
  var t = e.children, r = e.className, n = e.content, i = e.size, s = ie(i, "icons", r), l = se(wi, e), u = ce(wi, e);
  return /* @__PURE__ */ b.createElement(u, q({}, l, {
    className: s
  }), ue(t) ? n : t);
}
wi.handledProps = ["as", "children", "className", "content", "size"];
wi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** Size of the icon group. */
  size: d.oneOf(sr(Zt, "medium"))
} : {};
wi.defaultProps = {
  as: "i"
};
var Ra = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(u) {
      var f = n.props.disabled;
      if (f) {
        u.preventDefault();
        return;
      }
      ae(n.props, "onClick", u, n.props);
    }, n;
  }
  var r = t.prototype;
  return r.getIconAriaOptions = function() {
    var i = {}, s = this.props, l = s["aria-label"], u = s["aria-hidden"];
    return Ue(l) ? i["aria-hidden"] = "true" : i["aria-label"] = l, Ue(u) || (i["aria-hidden"] = u), i;
  }, r.render = function() {
    var i = this.props, s = i.bordered, l = i.circular, u = i.className, f = i.color, p = i.corner, h = i.disabled, m = i.fitted, v = i.flipped, S = i.inverted, O = i.link, T = i.loading, _ = i.name, C = i.rotated, M = i.size, k = ie(f, _, M, N(s, "bordered"), N(l, "circular"), N(h, "disabled"), N(m, "fitted"), N(S, "inverted"), N(O, "link"), N(T, "loading"), dt(p, "corner"), Dt(v, "flipped"), Dt(C, "rotated"), "icon", u), U = se(t, this.props), R = ce(t, this.props), F = this.getIconAriaOptions();
    return /* @__PURE__ */ b.createElement(R, q({}, U, F, {
      className: k,
      onClick: this.handleClick
    }));
  }, t;
}(sb);
Ra.handledProps = ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"];
Ra.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Formatted to appear bordered. */
  bordered: d.bool,
  /** Icon can formatted to appear circular. */
  circular: d.bool,
  /** Additional classes. */
  className: d.string,
  /** Color of the icon. */
  color: d.oneOf(yr),
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
  name: Qb(w2),
  /** Icon can rotated. */
  rotated: d.oneOf(["clockwise", "counterclockwise"]),
  /** Size of the icon. */
  size: d.oneOf(sr(Zt, "medium")),
  /** Icon can have an aria label. */
  "aria-hidden": d.string,
  /** Icon can have an aria label. */
  "aria-label": d.string
} : {};
Ra.defaultProps = {
  as: "i"
};
Ra.Group = wi;
Ra.create = ze(Ra, function(e) {
  return {
    name: e
  };
});
const At = Ra;
var tv = function(t) {
  return t !== null && !Array.isArray(t) && typeof t == "object";
}, Nl = {
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
for (var dl = 0; dl < 24; dl += 1)
  Nl[112 + dl] = "F" + (dl + 1);
for (var ff = 0; ff < 26; ff += 1) {
  var df = ff + 65;
  Nl[df] = [String.fromCharCode(df + 32), String.fromCharCode(df)];
}
var Z = {
  codes: Nl,
  /**
   * Get the `keyCode` or `which` value from a keyboard event or `key` name.
   * @param {string|object} eventOrKey A keyboard event-like object or `key` name.
   * @param {string} [eventOrKey.key] If object, it must have one of these keys.
   * @param {number} [eventOrKey.keyCode] If object, it must have one of these keys.
   * @param {number} [eventOrKey.which] If object, it must have one of these keys.
   * @returns {number|undefined}
   */
  getCode: function(t) {
    return tv(t) ? t.keyCode || t.which || this[t.key] : this[t];
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
    var r = tv(t);
    if (r && t.key)
      return t.key;
    var n = Nl[r ? t.keyCode || t.which : t];
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
var $2 = Z;
const Et = /* @__PURE__ */ $t($2);
var nd = { exports: {} }, Qe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rv;
function R2() {
  if (rv)
    return Qe;
  rv = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), O;
  O = Symbol.for("react.module.reference");
  function T(_) {
    if (typeof _ == "object" && _ !== null) {
      var C = _.$$typeof;
      switch (C) {
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
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return Qe.ContextConsumer = l, Qe.ContextProvider = s, Qe.Element = e, Qe.ForwardRef = f, Qe.Fragment = r, Qe.Lazy = v, Qe.Memo = m, Qe.Portal = t, Qe.Profiler = i, Qe.StrictMode = n, Qe.Suspense = p, Qe.SuspenseList = h, Qe.isAsyncMode = function() {
    return !1;
  }, Qe.isConcurrentMode = function() {
    return !1;
  }, Qe.isContextConsumer = function(_) {
    return T(_) === l;
  }, Qe.isContextProvider = function(_) {
    return T(_) === s;
  }, Qe.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === e;
  }, Qe.isForwardRef = function(_) {
    return T(_) === f;
  }, Qe.isFragment = function(_) {
    return T(_) === r;
  }, Qe.isLazy = function(_) {
    return T(_) === v;
  }, Qe.isMemo = function(_) {
    return T(_) === m;
  }, Qe.isPortal = function(_) {
    return T(_) === t;
  }, Qe.isProfiler = function(_) {
    return T(_) === i;
  }, Qe.isStrictMode = function(_) {
    return T(_) === n;
  }, Qe.isSuspense = function(_) {
    return T(_) === p;
  }, Qe.isSuspenseList = function(_) {
    return T(_) === h;
  }, Qe.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === r || _ === i || _ === n || _ === p || _ === h || _ === S || typeof _ == "object" && _ !== null && (_.$$typeof === v || _.$$typeof === m || _.$$typeof === s || _.$$typeof === l || _.$$typeof === f || _.$$typeof === O || _.getModuleId !== void 0);
  }, Qe.typeOf = T, Qe;
}
var Ke = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nv;
function I2() {
  return nv || (nv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), O = !1, T = !1, _ = !1, C = !1, M = !1, k;
    k = Symbol.for("react.module.reference");
    function U(re) {
      return !!(typeof re == "string" || typeof re == "function" || re === r || re === i || M || re === n || re === p || re === h || C || re === S || O || T || _ || typeof re == "object" && re !== null && (re.$$typeof === v || re.$$typeof === m || re.$$typeof === s || re.$$typeof === l || re.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      re.$$typeof === k || re.getModuleId !== void 0));
    }
    function R(re) {
      if (typeof re == "object" && re !== null) {
        var Gt = re.$$typeof;
        switch (Gt) {
          case e:
            var Xr = re.type;
            switch (Xr) {
              case r:
              case i:
              case n:
              case p:
              case h:
                return Xr;
              default:
                var Lt = Xr && Xr.$$typeof;
                switch (Lt) {
                  case u:
                  case l:
                  case f:
                  case v:
                  case m:
                  case s:
                    return Lt;
                  default:
                    return Gt;
                }
            }
          case t:
            return Gt;
        }
      }
    }
    var F = l, x = s, A = e, I = f, B = r, G = v, X = m, W = t, le = i, Ce = n, Te = p, Ae = h, qe = !1, ct = !1;
    function K(re) {
      return qe || (qe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function J(re) {
      return ct || (ct = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function we(re) {
      return R(re) === l;
    }
    function ge(re) {
      return R(re) === s;
    }
    function de(re) {
      return typeof re == "object" && re !== null && re.$$typeof === e;
    }
    function Se(re) {
      return R(re) === f;
    }
    function pe(re) {
      return R(re) === r;
    }
    function _e(re) {
      return R(re) === v;
    }
    function Oe(re) {
      return R(re) === m;
    }
    function xe(re) {
      return R(re) === t;
    }
    function Ie(re) {
      return R(re) === i;
    }
    function te(re) {
      return R(re) === n;
    }
    function ee(re) {
      return R(re) === p;
    }
    function ht(re) {
      return R(re) === h;
    }
    Ke.ContextConsumer = F, Ke.ContextProvider = x, Ke.Element = A, Ke.ForwardRef = I, Ke.Fragment = B, Ke.Lazy = G, Ke.Memo = X, Ke.Portal = W, Ke.Profiler = le, Ke.StrictMode = Ce, Ke.Suspense = Te, Ke.SuspenseList = Ae, Ke.isAsyncMode = K, Ke.isConcurrentMode = J, Ke.isContextConsumer = we, Ke.isContextProvider = ge, Ke.isElement = de, Ke.isForwardRef = Se, Ke.isFragment = pe, Ke.isLazy = _e, Ke.isMemo = Oe, Ke.isPortal = xe, Ke.isProfiler = Ie, Ke.isStrictMode = te, Ke.isSuspense = ee, Ke.isSuspenseList = ht, Ke.isValidElementType = U, Ke.typeOf = R;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? nd.exports = R2() : nd.exports = I2();
var N2 = nd.exports;
function k2(e) {
  if (e && (b.Children.only(e), N2.isFragment(e)))
    throw new Error('An "React.Fragment" cannot be used as a `trigger`.');
}
var jd = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleRef = function(u) {
      jr(n.props.innerRef, u);
    }, n;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    ae(this.props, "onMount", null, this.props);
  }, r.componentWillUnmount = function() {
    ae(this.props, "onUnmount", null, this.props);
  }, r.render = function() {
    if (!_a())
      return null;
    var i = this.props, s = i.children, l = i.mountNode, u = l === void 0 ? document.body : l;
    return /* @__PURE__ */ vA(/* @__PURE__ */ b.createElement(vr, {
      innerRef: this.handleRef
    }, s), u);
  }, t;
}(He);
jd.handledProps = ["children", "innerRef", "mountNode", "onMount", "onUnmount"];
jd.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: d.node.isRequired,
  /** Called with a ref to the inner node. */
  innerRef: Yb,
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
const iE = jd;
var Ui = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.contentRef = /* @__PURE__ */ b.createRef(), n.triggerRef = /* @__PURE__ */ b.createRef(), n.latestDocumentMouseDownEvent = null, n.handleDocumentMouseDown = function(u) {
      n.latestDocumentMouseDownEvent = u;
    }, n.handleDocumentClick = function(u) {
      var f = n.props.closeOnDocumentClick, p = n.latestDocumentMouseDownEvent;
      n.latestDocumentMouseDownEvent = null, !(!n.contentRef.current || // no portal
      Oa(n.triggerRef.current, u) || // event happened in trigger (delegate to trigger handlers)
      p && Oa(n.contentRef.current, p) || // event originated in the portal but was ended outside
      Oa(n.contentRef.current, u)) && f && n.close(u);
    }, n.handleEscape = function(u) {
      n.props.closeOnEscape && Et.getCode(u) === Et.Escape && n.close(u);
    }, n.handlePortalMouseLeave = function(u) {
      var f = n.props, p = f.closeOnPortalMouseLeave, h = f.mouseLeaveDelay;
      p && u.target === n.contentRef.current && (n.mouseLeaveTimer = n.closeWithTimeout(u, h));
    }, n.handlePortalMouseEnter = function() {
      var u = n.props.closeOnPortalMouseLeave;
      u && clearTimeout(n.mouseLeaveTimer);
    }, n.handleTriggerBlur = function(u) {
      for (var f = n.props, p = f.trigger, h = f.closeOnTriggerBlur, m = arguments.length, v = new Array(m > 1 ? m - 1 : 0), S = 1; S < m; S++)
        v[S - 1] = arguments[S];
      ae.apply(void 0, [p, "props.onBlur", u].concat(v));
      var O = u.relatedTarget || document.activeElement, T = ae(n.contentRef.current, "contains", O);
      !h || T || n.close(u);
    }, n.handleTriggerClick = function(u) {
      for (var f = n.props, p = f.trigger, h = f.closeOnTriggerClick, m = f.openOnTriggerClick, v = n.state.open, S = arguments.length, O = new Array(S > 1 ? S - 1 : 0), T = 1; T < S; T++)
        O[T - 1] = arguments[T];
      ae.apply(void 0, [p, "props.onClick", u].concat(O)), v && h ? n.close(u) : !v && m && n.open(u);
    }, n.handleTriggerFocus = function(u) {
      for (var f = n.props, p = f.trigger, h = f.openOnTriggerFocus, m = arguments.length, v = new Array(m > 1 ? m - 1 : 0), S = 1; S < m; S++)
        v[S - 1] = arguments[S];
      ae.apply(void 0, [p, "props.onFocus", u].concat(v)), h && n.open(u);
    }, n.handleTriggerMouseLeave = function(u) {
      clearTimeout(n.mouseEnterTimer);
      for (var f = n.props, p = f.trigger, h = f.closeOnTriggerMouseLeave, m = f.mouseLeaveDelay, v = arguments.length, S = new Array(v > 1 ? v - 1 : 0), O = 1; O < v; O++)
        S[O - 1] = arguments[O];
      ae.apply(void 0, [p, "props.onMouseLeave", u].concat(S)), h && (n.mouseLeaveTimer = n.closeWithTimeout(u, m));
    }, n.handleTriggerMouseEnter = function(u) {
      clearTimeout(n.mouseLeaveTimer);
      for (var f = n.props, p = f.trigger, h = f.mouseEnterDelay, m = f.openOnTriggerMouseEnter, v = arguments.length, S = new Array(v > 1 ? v - 1 : 0), O = 1; O < v; O++)
        S[O - 1] = arguments[O];
      ae.apply(void 0, [p, "props.onMouseEnter", u].concat(S)), m && (n.mouseEnterTimer = n.openWithTimeout(u, h));
    }, n.open = function(u) {
      ae(n.props, "onOpen", u, q({}, n.props, {
        open: !0
      })), n.setState({
        open: !0
      });
    }, n.openWithTimeout = function(u, f) {
      var p = q({}, u);
      return setTimeout(function() {
        return n.open(p);
      }, f || 0);
    }, n.close = function(u) {
      n.setState({
        open: !1
      }), ae(n.props, "onClose", u, q({}, n.props, {
        open: !1
      }));
    }, n.closeWithTimeout = function(u, f) {
      var p = q({}, u);
      return setTimeout(function() {
        return n.close(p);
      }, f || 0);
    }, n.handleMount = function() {
      ae(n.props, "onMount", null, n.props);
    }, n.handleUnmount = function() {
      ae(n.props, "onUnmount", null, n.props);
    }, n.handleTriggerRef = function(u) {
      n.triggerRef.current = u, jr(n.props.triggerRef, u);
    }, n;
  }
  var r = t.prototype;
  return r.componentWillUnmount = function() {
    clearTimeout(this.mouseEnterTimer), clearTimeout(this.mouseLeaveTimer);
  }, r.render = function() {
    var i = this.props, s = i.children, l = i.eventPool, u = i.mountNode, f = i.trigger, p = this.state.open;
    return process.env.NODE_ENV !== "production" && k2(f), /* @__PURE__ */ b.createElement(b.Fragment, null, p && /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(iE, {
      innerRef: this.contentRef,
      mountNode: u,
      onMount: this.handleMount,
      onUnmount: this.handleUnmount
    }, s), /* @__PURE__ */ b.createElement(qn, {
      name: "mouseleave",
      on: this.handlePortalMouseLeave,
      pool: l,
      target: this.contentRef
    }), /* @__PURE__ */ b.createElement(qn, {
      name: "mouseenter",
      on: this.handlePortalMouseEnter,
      pool: l,
      target: this.contentRef
    }), /* @__PURE__ */ b.createElement(qn, {
      name: "mousedown",
      on: this.handleDocumentMouseDown,
      pool: l
    }), /* @__PURE__ */ b.createElement(qn, {
      name: "click",
      on: this.handleDocumentClick,
      pool: l
    }), /* @__PURE__ */ b.createElement(qn, {
      name: "keydown",
      on: this.handleEscape,
      pool: l
    })), f && /* @__PURE__ */ b.createElement(vr, {
      innerRef: this.handleTriggerRef
    }, /* @__PURE__ */ b.cloneElement(f, {
      onBlur: this.handleTriggerBlur,
      onClick: this.handleTriggerClick,
      onFocus: this.handleTriggerFocus,
      onMouseLeave: this.handleTriggerMouseLeave,
      onMouseEnter: this.handleTriggerMouseEnter
    })));
  }, t;
}(Li);
Ui.handledProps = ["children", "closeOnDocumentClick", "closeOnEscape", "closeOnPortalMouseLeave", "closeOnTriggerBlur", "closeOnTriggerClick", "closeOnTriggerMouseLeave", "defaultOpen", "eventPool", "mountNode", "mouseEnterDelay", "mouseLeaveDelay", "onClose", "onMount", "onOpen", "onUnmount", "open", "openOnTriggerClick", "openOnTriggerFocus", "openOnTriggerMouseEnter", "trigger", "triggerRef"];
Ui.propTypes = process.env.NODE_ENV !== "production" ? {
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
  triggerRef: Yb
} : {};
Ui.defaultProps = {
  closeOnDocumentClick: !0,
  closeOnEscape: !0,
  eventPool: "default",
  openOnTriggerClick: !0
};
Ui.autoControlledProps = ["open"];
Ui.Inner = iE;
const ad = Ui;
function Bo(e) {
  var t = e.blurring, r = e.className, n = e.children, i = e.content, s = e.dimmed, l = ie(N(t, "blurring"), N(s, "dimmed"), "dimmable", r), u = se(Bo, e), f = ce(Bo, e);
  return /* @__PURE__ */ b.createElement(f, q({}, u, {
    className: l
  }), ue(n) ? i : n);
}
Bo.handledProps = ["as", "blurring", "children", "className", "content", "dimmed"];
Bo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A dimmable element can blur its contents. */
  blurring: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** Controls whether or not the dim is displayed. */
  dimmed: d.bool
} : {};
var Uo = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.containerRef = /* @__PURE__ */ Pr(), n.contentRef = /* @__PURE__ */ Pr(), n.handleClick = function(u) {
      var f = n.contentRef.current;
      ae(n.props, "onClick", u, n.props), !(f && f !== u.target && Oa(f, u)) && ae(n.props, "onClickOutside", u, n.props);
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
    var i = this.props, s = i.active, l = i.children, u = i.className, f = i.content, p = i.disabled, h = i.inverted, m = i.page, v = i.simple, S = i.verticalAlign, O = ie("ui", N(s, "active transition visible"), N(p, "disabled"), N(h, "inverted"), N(m, "page"), N(v, "simple"), $n(S), "dimmer", u), T = se(t, this.props), _ = ce(t, this.props), C = ue(l) ? f : l;
    return /* @__PURE__ */ b.createElement(vr, {
      innerRef: this.containerRef
    }, /* @__PURE__ */ b.createElement(_, q({}, T, {
      className: O,
      onClick: this.handleClick
    }), C && /* @__PURE__ */ b.createElement("div", {
      className: "content",
      ref: this.contentRef
    }, C)));
  }, t;
}(He);
Uo.handledProps = ["active", "as", "children", "className", "content", "disabled", "inverted", "onClick", "onClickOutside", "page", "simple", "verticalAlign"];
Uo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** An active dimmer will dim its parent container. */
  active: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
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
var Ia = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handlePortalMount = function() {
      _a() && (document.body.classList.add("dimmed"), document.body.classList.add("dimmable"));
    }, n.handlePortalUnmount = function() {
      _a() && (document.body.classList.remove("dimmed"), document.body.classList.remove("dimmable"));
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.page, u = se(t, this.props);
    return l ? /* @__PURE__ */ b.createElement(ad, {
      closeOnEscape: !1,
      closeOnDocumentClick: !1,
      onMount: this.handlePortalMount,
      onUnmount: this.handlePortalUnmount,
      open: s,
      openOnTriggerClick: !1
    }, /* @__PURE__ */ b.createElement(Uo, q({}, u, {
      active: s,
      page: l
    }))) : /* @__PURE__ */ b.createElement(Uo, q({}, u, {
      active: s,
      page: l
    }));
  }, t;
}(He);
Ia.handledProps = ["active", "page"];
Ia.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An active dimmer will dim its parent container. */
  active: d.bool,
  /** A dimmer can be formatted to be fixed to the page. */
  page: d.bool
} : {};
Ia.Dimmable = Bo;
Ia.Inner = Uo;
Ia.create = ze(Ia, function(e) {
  return {
    content: e
  };
});
function zo(e) {
  var t = e.children, r = e.className, n = e.content, i = e.size, s = ie("ui", i, r, "images"), l = se(zo, e), u = ce(zo, e);
  return /* @__PURE__ */ b.createElement(u, q({}, l, {
    className: s
  }), ue(t) ? n : t);
}
zo.handledProps = ["as", "children", "className", "content", "size"];
zo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** A group of images can be formatted to have the same size. */
  size: d.oneOf(Zt)
} : {};
function Mt(e) {
  var t = e.avatar, r = e.bordered, n = e.centered, i = e.children, s = e.circular, l = e.className, u = e.content, f = e.dimmer, p = e.disabled, h = e.floated, m = e.fluid, v = e.hidden, S = e.href, O = e.inline, T = e.label, _ = e.rounded, C = e.size, M = e.spaced, k = e.verticalAlign, U = e.wrapped, R = e.ui, F = ie(N(R, "ui"), C, N(t, "avatar"), N(r, "bordered"), N(s, "circular"), N(n, "centered"), N(p, "disabled"), N(m, "fluid"), N(v, "hidden"), N(O, "inline"), N(_, "rounded"), dt(M, "spaced"), Dt(h, "floated"), $n(k), "image", l), x = se(Mt, e), A = qd(x, {
    htmlProps: pD
  }), I = A[0], B = A[1], G = ce(Mt, e, function() {
    if (!Ue(f) || !Ue(T) || !Ue(U) || !ue(i))
      return "div";
  });
  return ue(i) ? ue(u) ? G === "img" ? /* @__PURE__ */ b.createElement(G, q({}, B, I, {
    className: F
  })) : /* @__PURE__ */ b.createElement(G, q({}, B, {
    className: F,
    href: S
  }), Ia.create(f, {
    autoGenerateKey: !1
  }), lr.create(T, {
    autoGenerateKey: !1
  }), /* @__PURE__ */ b.createElement("img", I)) : /* @__PURE__ */ b.createElement(G, q({}, x, {
    className: F
  }), u) : /* @__PURE__ */ b.createElement(G, q({}, x, {
    className: F
  }), i);
}
Mt.handledProps = ["as", "avatar", "bordered", "centered", "children", "circular", "className", "content", "dimmer", "disabled", "floated", "fluid", "hidden", "href", "inline", "label", "rounded", "size", "spaced", "ui", "verticalAlign", "wrapped"];
Mt.Group = zo;
Mt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  content: be,
  /** An image can show that it is disabled and cannot be selected. */
  disabled: d.bool,
  /** Shorthand for Dimmer. */
  dimmer: he,
  /** An image can sit to the left or right of other content. */
  floated: d.oneOf(Zn),
  /** An image can take up the width of its container. */
  fluid: Xe([d.bool, nt(["size"])]),
  /** An image can be hidden. */
  hidden: d.bool,
  /** Renders the Image as an <a> tag with this href. */
  href: d.string,
  /** An image may appear inline. */
  inline: d.bool,
  /** Shorthand for Label. */
  label: he,
  /** An image may appear rounded. */
  rounded: d.bool,
  /** An image may appear at different sizes. */
  size: d.oneOf(Zt),
  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: d.oneOfType([d.bool, d.oneOf(["left", "right"])]),
  /** Whether or not to add the ui className. */
  ui: d.bool,
  /** An image can specify its vertical alignment. */
  verticalAlign: d.oneOf(ea),
  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped: d.bool
} : {};
Mt.defaultProps = {
  as: "img",
  ui: !0
};
Mt.create = ze(Mt, function(e) {
  return {
    src: e
  };
});
function Gn(e) {
  var t = e.children, r = e.className, n = e.content, i = ie("detail", r), s = se(Gn, e), l = ce(Gn, e);
  return /* @__PURE__ */ b.createElement(l, q({}, s, {
    className: i
  }), ue(t) ? n : t);
}
Gn.handledProps = ["as", "children", "className", "content"];
Gn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be
} : {};
Gn.create = ze(Gn, function(e) {
  return {
    content: e
  };
});
function qo(e) {
  var t = e.children, r = e.circular, n = e.className, i = e.color, s = e.content, l = e.size, u = e.tag, f = ie("ui", i, l, N(r, "circular"), N(u, "tag"), "labels", n), p = se(qo, e), h = ce(qo, e);
  return /* @__PURE__ */ b.createElement(h, q({}, p, {
    className: f
  }), ue(t) ? s : t);
}
qo.handledProps = ["as", "children", "circular", "className", "color", "content", "size", "tag"];
qo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Labels can share shapes. */
  circular: d.bool,
  /** Additional classes. */
  className: d.string,
  /** Label group can share colors together. */
  color: d.oneOf(yr),
  /** Shorthand for primary content. */
  content: be,
  /** Label group can share sizes together. */
  size: d.oneOf(Zt),
  /** Label group can share tag formatting. */
  tag: d.bool
} : {};
var lr = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(u) {
      var f = n.props.onClick;
      f && f(u, n.props);
    }, n.handleIconOverrides = function(u) {
      return {
        onClick: function(p) {
          ae(u, "onClick", p), ae(n.props, "onRemove", p, n.props);
        }
      };
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.attached, u = i.basic, f = i.children, p = i.circular, h = i.className, m = i.color, v = i.content, S = i.corner, O = i.detail, T = i.empty, _ = i.floating, C = i.horizontal, M = i.icon, k = i.image, U = i.onRemove, R = i.pointing, F = i.prompt, x = i.removeIcon, A = i.ribbon, I = i.size, B = i.tag, G = R === !0 && "pointing" || (R === "left" || R === "right") && R + " pointing" || (R === "above" || R === "below") && "pointing " + R, X = ie("ui", m, G, I, N(s, "active"), N(u, "basic"), N(p, "circular"), N(T, "empty"), N(_, "floating"), N(C, "horizontal"), N(k === !0, "image"), N(F, "prompt"), N(B, "tag"), dt(S, "corner"), dt(A, "ribbon"), Dt(l, "attached"), "label", h), W = se(t, this.props), le = ce(t, this.props);
    if (!ue(f))
      return /* @__PURE__ */ b.createElement(le, q({}, W, {
        className: X,
        onClick: this.handleClick
      }), f);
    var Ce = Po(x) ? "delete" : x;
    return /* @__PURE__ */ b.createElement(le, q({
      className: X,
      onClick: this.handleClick
    }, W), At.create(M, {
      autoGenerateKey: !1
    }), typeof k != "boolean" && Mt.create(k, {
      autoGenerateKey: !1
    }), v, Gn.create(O, {
      autoGenerateKey: !1
    }), U && At.create(Ce, {
      autoGenerateKey: !1,
      overrideProps: this.handleIconOverrides
    }));
  }, t;
}(He);
lr.handledProps = ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "prompt", "removeIcon", "ribbon", "size", "tag"];
lr.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: d.oneOf(yr),
  /** Shorthand for primary content. */
  content: be,
  /** A label can position itself in the corner of an element. */
  corner: d.oneOfType([d.bool, d.oneOf(["left", "right"])]),
  /** Shorthand for LabelDetail. */
  detail: he,
  /** Formats the label as a dot. */
  empty: Xe([d.bool, To(["circular"])]),
  /** Float above another element in the upper right corner. */
  floating: d.bool,
  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: d.bool,
  /** Shorthand for Icon. */
  icon: he,
  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: d.oneOfType([d.bool, he]),
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
  removeIcon: he,
  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: d.oneOfType([d.bool, d.oneOf(["right"])]),
  /** A label can have different sizes. */
  size: d.oneOf(Zt),
  /** A label can appear as a tag. */
  tag: d.bool
} : {};
lr.Detail = Gn;
lr.Group = qo;
lr.create = ze(lr, function(e) {
  return {
    content: e
  };
});
function jo(e) {
  var t = e.children, r = e.className, n = e.content, i = e.hidden, s = e.visible, l = ie(N(s, "visible"), N(i, "hidden"), "content", r), u = se(jo, e), f = ce(jo, e);
  return /* @__PURE__ */ b.createElement(f, q({}, u, {
    className: l
  }), ue(t) ? n : t);
}
jo.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
jo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** Initially hidden, visible on hover. */
  hidden: d.bool,
  /** Initially visible, hidden on hover. */
  visible: d.bool
} : {};
function Ho(e) {
  var t = e.attached, r = e.basic, n = e.buttons, i = e.children, s = e.className, l = e.color, u = e.compact, f = e.content, p = e.floated, h = e.fluid, m = e.icon, v = e.inverted, S = e.labeled, O = e.negative, T = e.positive, _ = e.primary, C = e.secondary, M = e.size, k = e.toggle, U = e.vertical, R = e.widths, F = ie("ui", l, M, N(r, "basic"), N(u, "compact"), N(h, "fluid"), N(m, "icon"), N(v, "inverted"), N(S, "labeled"), N(O, "negative"), N(T, "positive"), N(_, "primary"), N(C, "secondary"), N(k, "toggle"), N(U, "vertical"), dt(t, "attached"), Dt(p, "floated"), Or(R), "buttons", s), x = se(Ho, e), A = ce(Ho, e);
  return Ue(n) ? /* @__PURE__ */ b.createElement(A, q({}, x, {
    className: F
  }), ue(i) ? f : i) : /* @__PURE__ */ b.createElement(A, q({}, x, {
    className: F
  }), Pt(n, function(I) {
    return Wn.create(I);
  }));
}
Ho.handledProps = ["as", "attached", "basic", "buttons", "children", "className", "color", "compact", "content", "floated", "fluid", "icon", "inverted", "labeled", "negative", "positive", "primary", "secondary", "size", "toggle", "vertical", "widths"];
Ho.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Groups can be attached to other content. */
  attached: d.oneOfType([d.bool, d.oneOf(["left", "right", "top", "bottom"])]),
  /** Groups can be less pronounced. */
  basic: d.bool,
  /** Array of shorthand Button values. */
  buttons: Fi,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Groups can have a shared color. */
  color: d.oneOf(yr),
  /** Groups can reduce their padding to fit into tighter spaces. */
  compact: d.bool,
  /** Shorthand for primary content. */
  content: be,
  /** Groups can be aligned to the left or right of its container. */
  floated: d.oneOf(Zn),
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
  size: d.oneOf(Zt),
  /** Groups can be formatted to toggle on and off. */
  toggle: d.bool,
  /** Groups can be formatted to appear vertically. */
  vertical: d.bool,
  /** Groups can have their widths divided evenly. */
  widths: d.oneOf(Tr)
} : {};
function Wo(e) {
  var t = e.className, r = e.text, n = ie("or", t), i = se(Wo, e), s = ce(Wo, e);
  return /* @__PURE__ */ b.createElement(s, q({}, i, {
    className: n,
    "data-text": r
  }));
}
Wo.handledProps = ["as", "className", "text"];
Wo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Additional classes. */
  className: d.string,
  /** Or buttons can have their text localized, or adjusted by using the text prop. */
  text: d.oneOfType([d.number, d.string])
} : {};
var gn = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.ref = /* @__PURE__ */ Pr(), n.computeElementType = function() {
      var u = n.props, f = u.attached, p = u.label;
      if (!Ue(f) || !Ue(p))
        return "div";
    }, n.computeTabIndex = function(u) {
      var f = n.props, p = f.disabled, h = f.tabIndex;
      if (!Ue(h))
        return h;
      if (p)
        return -1;
      if (u === "div")
        return 0;
    }, n.focus = function(u) {
      return ae(n.ref.current, "focus", u);
    }, n.handleClick = function(u) {
      var f = n.props.disabled;
      if (f) {
        u.preventDefault();
        return;
      }
      ae(n.props, "onClick", u, n.props);
    }, n.hasIconClass = function() {
      var u = n.props, f = u.labelPosition, p = u.children, h = u.content, m = u.icon;
      return m === !0 ? !0 : m && (f || ue(p) && Ue(h));
    }, n;
  }
  var r = t.prototype;
  return r.computeButtonAriaRole = function(i) {
    var s = this.props.role;
    if (!Ue(s))
      return s;
    if (i !== "button")
      return "button";
  }, r.render = function() {
    var i = this.props, s = i.active, l = i.animated, u = i.attached, f = i.basic, p = i.children, h = i.circular, m = i.className, v = i.color, S = i.compact, O = i.content, T = i.disabled, _ = i.floated, C = i.fluid, M = i.icon, k = i.inverted, U = i.label, R = i.labelPosition, F = i.loading, x = i.negative, A = i.positive, I = i.primary, B = i.secondary, G = i.size, X = i.toggle, W = i.type, le = ie(v, G, N(s, "active"), N(f, "basic"), N(h, "circular"), N(S, "compact"), N(C, "fluid"), N(this.hasIconClass(), "icon"), N(k, "inverted"), N(F, "loading"), N(x, "negative"), N(A, "positive"), N(I, "primary"), N(B, "secondary"), N(X, "toggle"), dt(l, "animated"), dt(u, "attached")), Ce = ie(dt(R || !!U, "labeled")), Te = ie(N(T, "disabled"), Dt(_, "floated")), Ae = se(t, this.props), qe = ce(t, this.props, this.computeElementType), ct = this.computeTabIndex(qe);
    if (!Ue(U)) {
      var K = ie("ui", le, "button", m), J = ie("ui", Ce, "button", m, Te), we = lr.create(U, {
        defaultProps: {
          basic: !0,
          pointing: R === "left" ? "right" : "left"
        },
        autoGenerateKey: !1
      });
      return /* @__PURE__ */ b.createElement(qe, q({}, Ae, {
        className: J,
        onClick: this.handleClick
      }), R === "left" && we, /* @__PURE__ */ b.createElement(vr, {
        innerRef: this.ref
      }, /* @__PURE__ */ b.createElement("button", {
        className: K,
        "aria-pressed": X ? !!s : void 0,
        disabled: T,
        type: W,
        tabIndex: ct
      }, At.create(M, {
        autoGenerateKey: !1
      }), " ", O)), (R === "right" || !R) && we);
    }
    var ge = ie("ui", le, Te, Ce, "button", m), de = !ue(p), Se = this.computeButtonAriaRole(qe);
    return /* @__PURE__ */ b.createElement(vr, {
      innerRef: this.ref
    }, /* @__PURE__ */ b.createElement(qe, q({}, Ae, {
      className: ge,
      "aria-pressed": X ? !!s : void 0,
      disabled: T && qe === "button" || void 0,
      onClick: this.handleClick,
      role: Se,
      type: W,
      tabIndex: ct
    }), de && p, !de && At.create(M, {
      autoGenerateKey: !1
    }), !de && O));
  }, t;
}(He);
gn.handledProps = ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle", "type"];
gn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  children: Xe([d.node, nt(["label"]), Kb({
    icon: d.oneOfType([d.string.isRequired, d.object.isRequired, d.element.isRequired])
  }, nt(["icon"]))]),
  /** A button can be circular. */
  circular: d.bool,
  /** Additional classes. */
  className: d.string,
  /** A button can have different colors */
  color: d.oneOf([].concat(yr, ["facebook", "google plus", "instagram", "linkedin", "twitter", "vk", "youtube"])),
  /** A button can reduce its padding to fit into tighter spaces. */
  compact: d.bool,
  /** Shorthand for primary content. */
  content: be,
  /** A button can show it is currently unable to be interacted with. */
  disabled: d.bool,
  /** A button can be aligned to the left or right of its container. */
  floated: d.oneOf(Zn),
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
  size: d.oneOf(Zt),
  /** A button can receive focus. */
  tabIndex: d.oneOfType([d.number, d.string]),
  /** A button can be formatted to toggle on and off. */
  toggle: d.bool,
  /** The type of the HTML element. */
  type: d.oneOf(["button", "submit", "reset"])
} : {};
gn.defaultProps = {
  as: "button"
};
gn.Content = jo;
gn.Group = Ho;
gn.Or = Wo;
gn.create = ze(gn, function(e) {
  return {
    content: e
  };
});
const Wn = gn;
function oE(e, t, r, n) {
  var i = -1, s = e == null ? 0 : e.length;
  for (n && s && (r = e[++i]); ++i < s; )
    r = t(r, e[i], i, e);
  return r;
}
function D2(e, t, r, n, i) {
  return i(e, function(s, l, u) {
    r = n ? (n = !1, s) : t(r, s, l, u);
  }), r;
}
function sE(e, t, r) {
  var n = wt(e) ? oE : D2, i = arguments.length < 3;
  return n(e, Jn(t), r, i, Mi);
}
var M2 = function(t, r, n, i) {
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
const yl = /* @__PURE__ */ $t(M2);
var Na = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleButtonOverrides = function(u) {
      return {
        onClick: function(p, h) {
          ae(u, "onClick", p, h), ae(n.props, "onActionClick", p, h);
        }
      };
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this, s = this.props, l = s.actions, u = s.children, f = s.className, p = s.content, h = ie("actions", f), m = se(t, this.props), v = ce(t, this.props);
    return ue(u) ? ue(p) ? /* @__PURE__ */ b.createElement(v, q({}, m, {
      className: h
    }), Pt(l, function(S) {
      return Wn.create(S, {
        overrideProps: i.handleButtonOverrides
      });
    })) : /* @__PURE__ */ b.createElement(v, q({}, m, {
      className: h
    }), p) : /* @__PURE__ */ b.createElement(v, q({}, m, {
      className: h
    }), u);
  }, t;
}(He);
Na.handledProps = ["actions", "as", "children", "className", "content", "onActionClick"];
Na.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Array of shorthand buttons. */
  actions: Fi,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props from the clicked action.
   */
  onActionClick: Xe([nt(["children"]), d.func])
} : {};
Na.create = ze(Na, function(e) {
  return {
    actions: e
  };
});
function mn(e) {
  var t = e.children, r = e.className, n = e.content, i = e.image, s = e.scrolling, l = ie(r, N(i, "image"), N(s, "scrolling"), "content"), u = se(mn, e), f = ce(mn, e);
  return /* @__PURE__ */ b.createElement(f, q({}, u, {
    className: l
  }), ue(t) ? n : t);
}
mn.handledProps = ["as", "children", "className", "content", "image", "scrolling"];
mn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** A modal can contain image content. */
  image: d.bool,
  /** A modal can use the entire size of the screen. */
  scrolling: d.bool
} : {};
mn.create = ze(mn, function(e) {
  return {
    content: e
  };
});
function Si(e) {
  var t = e.children, r = e.className, n = e.content, i = ie("description", r), s = se(Si, e), l = ce(Si, e);
  return /* @__PURE__ */ b.createElement(l, q({}, s, {
    className: i
  }), ue(t) ? n : t);
}
Si.handledProps = ["as", "children", "className", "content"];
Si.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be
} : {};
function Vn(e) {
  var t = e.blurring, r = e.children, n = e.className, i = e.centered, s = e.content, l = e.inverted, u = e.mountNode, f = e.scrolling, p = b.useRef(), h = ie("ui", N(l, "inverted"), N(!i, "top aligned"), "page modals dimmer transition visible active", n), m = ie("dimmable dimmed", N(t, "blurring"), N(f, "scrolling")), v = se(Vn, e), S = ce(Vn, e);
  return C2(u, m), b.useEffect(function() {
    p.current && p.current.style && p.current.style.setProperty("display", "flex", "important");
  }, []), /* @__PURE__ */ b.createElement(vr, {
    innerRef: p
  }, /* @__PURE__ */ b.createElement(S, q({}, v, {
    className: h
  }), ue(r) ? s : r));
}
Vn.handledProps = ["as", "blurring", "centered", "children", "className", "content", "inverted", "mountNode", "scrolling"];
Vn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  content: be,
  /** A dimmer can be inverted. */
  inverted: d.bool,
  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: d.any,
  /** A dimmer can make body scrollable. */
  scrolling: d.bool
} : {};
Vn.create = ze(Vn, function(e) {
  return {
    content: e
  };
});
function vn(e) {
  var t = e.children, r = e.className, n = e.content, i = ie("header", r), s = se(vn, e), l = ce(vn, e);
  return /* @__PURE__ */ b.createElement(l, q({}, s, {
    className: i
  }), ue(t) ? n : t);
}
vn.handledProps = ["as", "children", "className", "content"];
vn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be
} : {};
vn.create = ze(vn, function(e) {
  return {
    content: e
  };
});
var av = 0, L2 = 50, F2 = function(t) {
  var r = t.height + av, n = t.height + av, i = window.innerHeight, s = i / 2, l = -(n / 2), u = L2, f = s + l;
  return f + r + u < i;
}, B2 = function(t, r, n) {
  var i = r && t ? -(n.height / 2) : 0, s = -(n.width / 2);
  return {
    marginLeft: s,
    marginTop: i
  };
}, U2 = function() {
  return !window.ActiveXObject && "ActiveXObject" in window;
}, Qr = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.legacy = _a() && U2(), n.ref = /* @__PURE__ */ Pr(), n.dimmerRef = /* @__PURE__ */ Pr(), n.latestDocumentMouseDownEvent = null, n.getMountNode = function() {
      return _a() ? n.props.mountNode || document.body : null;
    }, n.handleActionsOverrides = function(u) {
      return {
        onActionClick: function(p, h) {
          ae(u, "onActionClick", p, h), ae(n.props, "onActionClick", p, n.props), n.handleClose(p);
        }
      };
    }, n.handleClose = function(u) {
      n.setState({
        open: !1
      }), ae(n.props, "onClose", u, q({}, n.props, {
        open: !1
      }));
    }, n.handleDocumentMouseDown = function(u) {
      n.latestDocumentMouseDownEvent = u;
    }, n.handleDocumentClick = function(u) {
      var f = n.props.closeOnDimmerClick, p = n.latestDocumentMouseDownEvent;
      n.latestDocumentMouseDownEvent = null, !(!f || Oa(n.ref.current, p) || Oa(n.ref.current, u)) && (n.setState({
        open: !1
      }), ae(n.props, "onClose", u, q({}, n.props, {
        open: !1
      })));
    }, n.handleIconOverrides = function(u) {
      return {
        onClick: function(p) {
          ae(u, "onClick", p), n.handleClose(p);
        }
      };
    }, n.handleOpen = function(u) {
      ae(n.props, "onOpen", u, q({}, n.props, {
        open: !0
      })), n.setState({
        open: !0
      });
    }, n.handlePortalMount = function(u) {
      var f = n.props.eventPool;
      n.setState({
        scrolling: !1
      }), n.setPositionAndClassNames(), fl.sub("mousedown", n.handleDocumentMouseDown, {
        pool: f,
        target: n.dimmerRef.current
      }), fl.sub("click", n.handleDocumentClick, {
        pool: f,
        target: n.dimmerRef.current
      }), ae(n.props, "onMount", u, n.props);
    }, n.handlePortalUnmount = function(u) {
      var f = n.props.eventPool;
      cancelAnimationFrame(n.animationRequestId), fl.unsub("mousedown", n.handleDocumentMouseDown, {
        pool: f,
        target: n.dimmerRef.current
      }), fl.unsub("click", n.handleDocumentClick, {
        pool: f,
        target: n.dimmerRef.current
      }), ae(n.props, "onUnmount", u, n.props);
    }, n.setPositionAndClassNames = function() {
      var u = n.props.centered, f, p = {};
      if (n.ref.current) {
        var h = n.ref.current.getBoundingClientRect(), m = F2(h);
        f = !m;
        var v = n.legacy ? B2(m, u, h) : {};
        yl(n.state.legacyStyles, v) || (p.legacyStyles = v), n.state.scrolling !== f && (p.scrolling = f);
      }
      Ea(p) || n.setState(p), n.animationRequestId = requestAnimationFrame(n.setPositionAndClassNames);
    }, n.renderContent = function(u) {
      var f = n.props, p = f.actions, h = f.basic, m = f.children, v = f.className, S = f.closeIcon, O = f.content, T = f.header, _ = f.size, C = f.style, M = n.state, k = M.legacyStyles, U = M.scrolling, R = ie("ui", _, N(h, "basic"), N(n.legacy, "legacy"), N(U, "scrolling"), "modal transition visible active", v), F = ce(t, n.props), x = S === !0 ? "close" : S, A = At.create(x, {
        overrideProps: n.handleIconOverrides
      });
      return /* @__PURE__ */ b.createElement(vr, {
        innerRef: n.ref
      }, /* @__PURE__ */ b.createElement(F, q({}, u, {
        className: R,
        style: q({}, k, C)
      }), A, ue(m) ? /* @__PURE__ */ b.createElement(b.Fragment, null, vn.create(T, {
        autoGenerateKey: !1
      }), mn.create(O, {
        autoGenerateKey: !1
      }), Na.create(p, {
        overrideProps: n.handleActionsOverrides
      })) : m));
    }, n;
  }
  var r = t.prototype;
  return r.componentWillUnmount = function() {
    this.handlePortalUnmount();
  }, r.render = function() {
    var i = this.props, s = i.centered, l = i.closeOnDocumentClick, u = i.dimmer, f = i.eventPool, p = i.trigger, h = this.state, m = h.open, v = h.scrolling, S = this.getMountNode();
    if (!_a())
      return /* @__PURE__ */ lb(p) ? p : null;
    var O = se(t, this.props), T = ad.handledProps, _ = sE(O, function(M, k, U) {
      return Bi(T, U) || (M[U] = k), M;
    }, {}), C = Bd(O, T);
    return /* @__PURE__ */ b.createElement(ad, q({
      closeOnDocumentClick: l
    }, C, {
      trigger: p,
      eventPool: f,
      mountNode: S,
      open: m,
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount
    }), /* @__PURE__ */ b.createElement(vr, {
      innerRef: this.dimmerRef
    }, Vn.create(iu(u) ? u : {}, {
      autoGenerateKey: !1,
      defaultProps: {
        blurring: u === "blurring",
        inverted: u === "inverted"
      },
      overrideProps: {
        children: this.renderContent(_),
        centered: s,
        mountNode: S,
        scrolling: v
      }
    })));
  }, t;
}(Li);
Qr.handledProps = ["actions", "as", "basic", "centered", "children", "className", "closeIcon", "closeOnDimmerClick", "closeOnDocumentClick", "content", "defaultOpen", "dimmer", "eventPool", "header", "mountNode", "onActionClick", "onClose", "onMount", "onOpen", "onUnmount", "open", "size", "style", "trigger"];
Qr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions: he,
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
  content: he,
  /** Initial value of open. */
  defaultOpen: d.bool,
  /** A Modal can appear in a dimmer. */
  dimmer: d.oneOfType([d.bool, d.func, d.object, d.oneOf(["inverted", "blurring"])]),
  /** Event pool namespace that is used to handle component events */
  eventPool: d.string,
  /** Modal displayed above the content in bold. */
  header: he,
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
Qr.defaultProps = {
  centered: !0,
  dimmer: !0,
  closeOnDimmerClick: !0,
  closeOnDocumentClick: !1,
  eventPool: "Modal"
};
Qr.autoControlledProps = ["open"];
Qr.Actions = Na;
Qr.Content = mn;
Qr.Description = Si;
Qr.Dimmer = Vn;
Qr.Header = vn;
const z2 = Qr;
function Go(e) {
  var t = e.children, r = e.className, n = e.content, i = ie("header", r), s = se(Go, e), l = ce(Go, e);
  return /* @__PURE__ */ b.createElement(l, q({}, s, {
    className: i
  }), ue(t) ? n : t);
}
Go.handledProps = ["as", "children", "className", "content"];
Go.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be
} : {};
function q2(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var j2 = {
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
}, H2 = q2(j2);
const W2 = H2;
var G2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, V2 = "\\u0300-\\u036f", Q2 = "\\ufe20-\\ufe2f", K2 = "\\u20d0-\\u20ff", Y2 = V2 + Q2 + K2, X2 = "[" + Y2 + "]", J2 = RegExp(X2, "g");
function id(e) {
  return e = Ha(e), e && e.replace(G2, W2).replace(J2, "");
}
var Z2 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function eM(e) {
  return e.match(Z2) || [];
}
var tM = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function rM(e) {
  return tM.test(e);
}
var lE = "\\ud800-\\udfff", nM = "\\u0300-\\u036f", aM = "\\ufe20-\\ufe2f", iM = "\\u20d0-\\u20ff", oM = nM + aM + iM, uE = "\\u2700-\\u27bf", cE = "a-z\\xdf-\\xf6\\xf8-\\xff", sM = "\\xac\\xb1\\xd7\\xf7", lM = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", uM = "\\u2000-\\u206f", cM = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", fE = "A-Z\\xc0-\\xd6\\xd8-\\xde", fM = "\\ufe0e\\ufe0f", dE = sM + lM + uM + cM, pE = "['’]", iv = "[" + dE + "]", dM = "[" + oM + "]", hE = "\\d+", pM = "[" + uE + "]", gE = "[" + cE + "]", mE = "[^" + lE + dE + hE + uE + cE + fE + "]", hM = "\\ud83c[\\udffb-\\udfff]", gM = "(?:" + dM + "|" + hM + ")", mM = "[^" + lE + "]", vE = "(?:\\ud83c[\\udde6-\\uddff]){2}", yE = "[\\ud800-\\udbff][\\udc00-\\udfff]", fi = "[" + fE + "]", vM = "\\u200d", ov = "(?:" + gE + "|" + mE + ")", yM = "(?:" + fi + "|" + mE + ")", sv = "(?:" + pE + "(?:d|ll|m|re|s|t|ve))?", lv = "(?:" + pE + "(?:D|LL|M|RE|S|T|VE))?", bE = gM + "?", EE = "[" + fM + "]?", bM = "(?:" + vM + "(?:" + [mM, vE, yE].join("|") + ")" + EE + bE + ")*", EM = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", wM = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", SM = EE + bE + bM, _M = "(?:" + [pM, vE, yE].join("|") + ")" + SM, OM = RegExp([
  fi + "?" + gE + "+" + sv + "(?=" + [iv, fi, "$"].join("|") + ")",
  yM + "+" + lv + "(?=" + [iv, fi + ov, "$"].join("|") + ")",
  fi + "?" + ov + "+" + sv,
  fi + "+" + lv,
  wM,
  EM,
  hE,
  _M
].join("|"), "g");
function TM(e) {
  return e.match(OM) || [];
}
function xM(e, t, r) {
  return e = Ha(e), t = r ? void 0 : t, t === void 0 ? rM(e) ? TM(e) : eM(e) : e.match(t) || [];
}
var PM = "['’]", CM = RegExp(PM, "g");
function AM(e) {
  return function(t) {
    return oE(xM(id(t).replace(CM, "")), e, "");
  };
}
function $M(e) {
  return function(t) {
    t = Ha(t);
    var r = Fd(t) ? rd(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? Lb(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var RM = $M("toUpperCase");
const IM = RM;
var NM = AM(function(e, t, r) {
  return e + (r ? " " : "") + IM(t);
});
const kM = NM;
var ka = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(u) {
      var f = n.props.disabled;
      f || ae(n.props, "onClick", u, n.props);
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.children, u = i.className, f = i.color, p = i.content, h = i.disabled, m = i.fitted, v = i.header, S = i.icon, O = i.link, T = i.name, _ = i.onClick, C = i.position, M = ie(f, C, N(s, "active"), N(h, "disabled"), N(S === !0 || S && !(T || p), "icon"), N(v, "header"), N(O, "link"), dt(m, "fitted"), "item", u), k = ce(t, this.props, function() {
      if (_)
        return "a";
    }), U = se(t, this.props);
    return ue(l) ? /* @__PURE__ */ b.createElement(k, q({}, U, {
      className: M,
      onClick: this.handleClick
    }), At.create(S, {
      autoGenerateKey: !1
    }), ue(p) ? kM(T) : p) : /* @__PURE__ */ b.createElement(k, q({}, U, {
      className: M,
      onClick: this.handleClick
    }), l);
  }, t;
}(He);
ka.handledProps = ["active", "as", "children", "className", "color", "content", "disabled", "fitted", "header", "icon", "index", "link", "name", "onClick", "position"];
ka.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A menu item can be active. */
  active: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Additional colors can be specified. */
  color: d.oneOf(yr),
  /** Shorthand for primary content. */
  content: be,
  /** A menu item can be disabled. */
  disabled: d.bool,
  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: d.oneOfType([d.bool, d.oneOf(["horizontally", "vertically"])]),
  /** A menu item may include a header or may itself be a header. */
  header: d.bool,
  /** MenuItem can be only icon. */
  icon: d.oneOfType([d.bool, he]),
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
ka.create = ze(ka, function(e) {
  return {
    content: e,
    name: e
  };
});
function Vo(e) {
  var t = e.children, r = e.className, n = e.content, i = e.position, s = ie(i, "menu", r), l = se(Vo, e), u = ce(Vo, e);
  return /* @__PURE__ */ b.createElement(u, q({}, l, {
    className: s
  }), ue(t) ? n : t);
}
Vo.handledProps = ["as", "children", "className", "content", "position"];
Vo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** A sub menu can take left or right position. */
  position: d.oneOf(["left", "right"])
} : {};
var yn = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleItemOverrides = function(u) {
      return {
        onClick: function(p, h) {
          var m = h.index;
          n.setState({
            activeIndex: m
          }), ae(u, "onClick", p, h), ae(n.props, "onItemClick", p, h);
        }
      };
    }, n;
  }
  var r = t.prototype;
  return r.renderItems = function() {
    var i = this, s = this.props.items, l = this.state.activeIndex;
    return Pt(s, function(u, f) {
      return ka.create(u, {
        defaultProps: {
          active: parseInt(l, 10) === f,
          index: f
        },
        overrideProps: i.handleItemOverrides
      });
    });
  }, r.render = function() {
    var i = this.props, s = i.attached, l = i.borderless, u = i.children, f = i.className, p = i.color, h = i.compact, m = i.fixed, v = i.floated, S = i.fluid, O = i.icon, T = i.inverted, _ = i.pagination, C = i.pointing, M = i.secondary, k = i.size, U = i.stackable, R = i.tabular, F = i.text, x = i.vertical, A = i.widths, I = ie("ui", p, k, N(l, "borderless"), N(h, "compact"), N(S, "fluid"), N(T, "inverted"), N(_, "pagination"), N(C, "pointing"), N(M, "secondary"), N(U, "stackable"), N(F, "text"), N(x, "vertical"), dt(s, "attached"), dt(v, "floated"), dt(O, "icon"), dt(R, "tabular"), Dt(m, "fixed"), Or(A, "item"), f, "menu"), B = se(t, this.props), G = ce(t, this.props);
    return /* @__PURE__ */ b.createElement(G, q({}, B, {
      className: I
    }), ue(u) ? this.renderItems() : u);
  }, t;
}(Li);
yn.handledProps = ["activeIndex", "as", "attached", "borderless", "children", "className", "color", "compact", "defaultActiveIndex", "fixed", "floated", "fluid", "icon", "inverted", "items", "onItemClick", "pagination", "pointing", "secondary", "size", "stackable", "tabular", "text", "vertical", "widths"];
yn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: d.oneOf(yr),
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
  items: Fi,
  /**
   * onClick handler for MenuItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: Xe([nt(["children"]), d.func]),
  /** A pagination menu is specially formatted to present links to pages of content. */
  pagination: d.bool,
  /** A menu can point to show its relationship to nearby content. */
  pointing: d.bool,
  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary: d.bool,
  /** A menu can vary in size. */
  size: d.oneOf(sr(Zt, "medium", "big")),
  /** A menu can stack at mobile resolutions. */
  stackable: d.bool,
  /** A menu can be formatted to show tabs of information. */
  tabular: d.oneOfType([d.bool, d.oneOf(["right"])]),
  /** A menu can be formatted for text content. */
  text: d.bool,
  /** A vertical menu displays elements vertically. */
  vertical: d.bool,
  /** A menu can have its items divided evenly. */
  widths: d.oneOf(Tr)
} : {};
yn.autoControlledProps = ["activeIndex"];
yn.Header = Go;
yn.Item = ka;
yn.Menu = Vo;
yn.create = ze(yn, function(e) {
  return {
    items: e
  };
});
const vi = yn;
var Qo = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(u) {
      ae(n.props, "onClick", u, n.props);
    }, n.handleKeyDown = function(u) {
      ae(n.props, "onKeyDown", u, n.props), Et.getCode(u) === Et.Enter && ae(n.props, "onClick", u, n.props);
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
    return ka.create(this.props, {
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
}(He);
Qo.handledProps = ["active", "disabled", "onClick", "onKeyDown", "type"];
Qo.propTypes = process.env.NODE_ENV !== "production" ? {
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
Qo.create = ze(Qo, function(e) {
  return {
    content: e
  };
});
const wE = Qo;
var zi = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleItemClick = function(u, f) {
      var p = f.value, h = n.state.activePage;
      +h != +p && (n.setState({
        activePage: p
      }), ae(n.props, "onPageChange", u, q({}, n.props, {
        activePage: p
      })));
    }, n.handleItemOverrides = function(u, f, p) {
      return function(h) {
        return {
          active: u,
          type: f,
          key: f + "-" + p,
          onClick: function(v, S) {
            ae(h, "onClick", v, S), S.type !== "ellipsisItem" && n.handleItemClick(v, S);
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
    var i = this, s = this.props, l = s["aria-label"], u = s.boundaryRange, f = s.disabled, p = s.ellipsisItem, h = s.siblingRange, m = s.totalPages, v = this.state.activePage, S = BD({
      activePage: v,
      boundaryRange: u,
      hideEllipsis: Ue(p),
      siblingRange: h,
      totalPages: m
    }), O = se(t, this.props);
    return /* @__PURE__ */ b.createElement(vi, q({}, O, {
      "aria-label": l,
      pagination: !0,
      role: "navigation"
    }), Pt(S, function(T) {
      var _ = T.active, C = T.type, M = T.value;
      return wE.create(i.props[C], {
        defaultProps: {
          content: M,
          disabled: f,
          value: M
        },
        overrideProps: i.handleItemOverrides(_, C, M)
      });
    }));
  }, t;
}(Li);
zi.handledProps = ["activePage", "aria-label", "boundaryRange", "defaultActivePage", "disabled", "ellipsisItem", "firstItem", "lastItem", "nextItem", "onPageChange", "pageItem", "prevItem", "siblingRange", "totalPages"];
zi.propTypes = process.env.NODE_ENV !== "production" ? {
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
  ellipsisItem: he,
  /** A shorthand for PaginationItem. */
  firstItem: he,
  /** A shorthand for PaginationItem. */
  lastItem: he,
  /** A shorthand for PaginationItem. */
  nextItem: he,
  /** A shorthand for PaginationItem. */
  pageItem: he,
  /** A shorthand for PaginationItem. */
  prevItem: he,
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
zi.autoControlledProps = ["activePage"];
zi.defaultProps = {
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
zi.Item = wE;
function DM(e, t, r) {
  return e == null ? e : Hb(e, t, r);
}
var qi = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.inputRef = /* @__PURE__ */ Pr(), n.labelRef = /* @__PURE__ */ Pr(), n.canToggle = function() {
      var u = n.props, f = u.disabled, p = u.radio, h = u.readOnly, m = n.state.checked;
      return !f && !h && !(p && m);
    }, n.computeTabIndex = function() {
      var u = n.props, f = u.disabled, p = u.tabIndex;
      return Ue(p) ? f ? -1 : 0 : p;
    }, n.handleClick = function(u) {
      var f = n.props.id, p = n.state, h = p.checked, m = p.indeterminate, v = ae(n.inputRef.current, "contains", u.target), S = ae(n.labelRef.current, "contains", u.target), O = !S && !v, T = !Ue(f), _ = S && T;
      _ || ae(n.props, "onClick", u, q({}, n.props, {
        checked: !h,
        indeterminate: !!m
      })), n.isClickFromMouse && (n.isClickFromMouse = !1, S && !T && n.handleChange(u), O && n.handleChange(u), S && T && u.stopPropagation());
    }, n.handleChange = function(u) {
      var f = n.state.checked;
      n.canToggle() && (ae(n.props, "onChange", u, q({}, n.props, {
        checked: !f,
        indeterminate: !1
      })), n.setState({
        checked: !f,
        indeterminate: !1
      }));
    }, n.handleMouseDown = function(u) {
      var f = n.state, p = f.checked, h = f.indeterminate;
      ae(n.props, "onMouseDown", u, q({}, n.props, {
        checked: !!p,
        indeterminate: !!h
      })), u.defaultPrevented || ae(n.inputRef.current, "focus"), u.preventDefault();
    }, n.handleMouseUp = function(u) {
      var f = n.state, p = f.checked, h = f.indeterminate;
      n.isClickFromMouse = !0, ae(n.props, "onMouseUp", u, q({}, n.props, {
        checked: !!p,
        indeterminate: !!h
      }));
    }, n.setIndeterminate = function() {
      var u = n.state.indeterminate;
      DM(n.inputRef, "current.indeterminate", !!u);
    }, n;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.setIndeterminate();
  }, r.componentDidUpdate = function() {
    this.setIndeterminate();
  }, r.render = function() {
    var i = this.props, s = i.className, l = i.disabled, u = i.label, f = i.id, p = i.name, h = i.radio, m = i.readOnly, v = i.slider, S = i.toggle, O = i.type, T = i.value, _ = this.state, C = _.checked, M = _.indeterminate, k = ie(
      "ui",
      N(C, "checked"),
      N(l, "disabled"),
      N(M, "indeterminate"),
      // auto apply fitted class to compact white space when there is no label
      // https://semantic-ui.com/modules/checkbox.html#fitted
      N(Ue(u), "fitted"),
      N(h, "radio"),
      N(m, "read-only"),
      N(v, "slider"),
      N(S, "toggle"),
      "checkbox",
      s
    ), U = se(t, this.props), R = ce(t, this.props), F = qd(U, {
      htmlProps: rE
    }), x = F[0], A = F[1], I = sD(u, {
      defaultProps: {
        htmlFor: f
      },
      autoGenerateKey: !1
    }) || /* @__PURE__ */ b.createElement("label", {
      htmlFor: f
    });
    return /* @__PURE__ */ b.createElement(R, q({}, A, {
      className: k,
      onClick: this.handleClick,
      onChange: this.handleChange,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp
    }), /* @__PURE__ */ b.createElement(vr, {
      innerRef: this.inputRef
    }, /* @__PURE__ */ b.createElement("input", q({}, x, {
      checked: C,
      className: "hidden",
      disabled: l,
      id: f,
      name: p,
      readOnly: !0,
      tabIndex: this.computeTabIndex(),
      type: O,
      value: T
    }))), /* @__PURE__ */ b.createElement(vr, {
      innerRef: this.labelRef
    }, I));
  }, t;
}(Li);
qi.handledProps = ["as", "checked", "className", "defaultChecked", "defaultIndeterminate", "disabled", "fitted", "id", "indeterminate", "label", "name", "onChange", "onClick", "onMouseDown", "onMouseUp", "radio", "readOnly", "slider", "tabIndex", "toggle", "type", "value"];
qi.propTypes = process.env.NODE_ENV !== "production" ? {
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
  label: he,
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
  radio: Xe([d.bool, nt(["slider", "toggle"])]),
  /** A checkbox can be read-only and unable to change states. */
  readOnly: d.bool,
  /** Format to emphasize the current selection state. */
  slider: Xe([d.bool, nt(["radio", "toggle"])]),
  /** A checkbox can receive focus. */
  tabIndex: d.oneOfType([d.number, d.string]),
  /** Format to show an on or off choice. */
  toggle: Xe([d.bool, nt(["radio", "slider"])]),
  /** HTML input type, either checkbox or radio. */
  type: d.oneOf(["checkbox", "radio"]),
  /** The HTML input value. */
  value: d.oneOfType([d.string, d.number])
} : {};
qi.defaultProps = {
  type: "checkbox"
};
qi.autoControlledProps = ["checked", "indeterminate"];
function MM(e) {
  for (var t = -1, r = e == null ? 0 : e.length, n = 0, i = []; ++t < r; ) {
    var s = e[t];
    s && (i[n++] = s);
  }
  return i;
}
function LM(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
function FM(e, t) {
  var r = !0;
  return Mi(e, function(n, i, s) {
    return r = !!t(n, i, s), r;
  }), r;
}
function BM(e, t, r) {
  var n = wt(e) ? LM : FM;
  return r && Fo(e, t, r) && (t = void 0), n(e, Jn(t));
}
function UM(e, t, r) {
  var n = e == null ? 0 : e.length;
  return n ? (t = r || t === void 0 ? 1 : cs(t), t = n - t, tu(e, 0, t < 0 ? 0 : t)) : [];
}
var zM = Ib("length");
const qM = zM;
var SE = "\\ud800-\\udfff", jM = "\\u0300-\\u036f", HM = "\\ufe20-\\ufe2f", WM = "\\u20d0-\\u20ff", GM = jM + HM + WM, VM = "\\ufe0e\\ufe0f", QM = "[" + SE + "]", od = "[" + GM + "]", sd = "\\ud83c[\\udffb-\\udfff]", KM = "(?:" + od + "|" + sd + ")", _E = "[^" + SE + "]", OE = "(?:\\ud83c[\\udde6-\\uddff]){2}", TE = "[\\ud800-\\udbff][\\udc00-\\udfff]", YM = "\\u200d", xE = KM + "?", PE = "[" + VM + "]?", XM = "(?:" + YM + "(?:" + [_E, OE, TE].join("|") + ")" + PE + xE + ")*", JM = PE + xE + XM, ZM = "(?:" + [_E + od + "?", od, OE, TE, QM].join("|") + ")", uv = RegExp(sd + "(?=" + sd + ")|" + ZM + JM, "g");
function eL(e) {
  for (var t = uv.lastIndex = 0; uv.test(e); )
    ++t;
  return t;
}
function tL(e) {
  return Fd(e) ? eL(e) : qM(e);
}
var rL = "[object Map]", nL = "[object Set]";
function aL(e) {
  if (e == null)
    return 0;
  if (An(e))
    return zd(e) ? tL(e) : e.length;
  var t = Al(e);
  return t == rL || t == nL ? e.size : kd(e).length;
}
var iL = Di(function(e) {
  return Zb(fs(e, 1, Lo, !0));
});
const cv = iL;
var oL = ["ad", "andorra", "ae", "united arab emirates", "uae", "af", "afghanistan", "ag", "antigua", "ai", "anguilla", "al", "albania", "am", "armenia", "an", "netherlands antilles", "ao", "angola", "ar", "argentina", "as", "american samoa", "at", "austria", "au", "australia", "aw", "aruba", "ax", "aland islands", "az", "azerbaijan", "ba", "bosnia", "bb", "barbados", "bd", "bangladesh", "be", "belgium", "bf", "burkina faso", "bg", "bulgaria", "bh", "bahrain", "bi", "burundi", "bj", "benin", "bm", "bermuda", "bn", "brunei", "bo", "bolivia", "br", "brazil", "bs", "bahamas", "bt", "bhutan", "bv", "bouvet island", "bw", "botswana", "by", "belarus", "bz", "belize", "ca", "canada", "cc", "cocos islands", "cd", "congo", "cf", "central african republic", "cg", "congo brazzaville", "ch", "switzerland", "ci", "cote divoire", "ck", "cook islands", "cl", "chile", "cm", "cameroon", "cn", "china", "co", "colombia", "cr", "costa rica", "cs", "cu", "cuba", "cv", "cape verde", "cx", "christmas island", "cy", "cyprus", "cz", "czech republic", "de", "germany", "dj", "djibouti", "dk", "denmark", "dm", "dominica", "do", "dominican republic", "dz", "algeria", "ec", "ecuador", "england", "gb eng", "ee", "estonia", "eg", "egypt", "eh", "western sahara", "er", "eritrea", "es", "spain", "et", "ethiopia", "eu", "european union", "fi", "finland", "fj", "fiji", "fk", "falkland islands", "fm", "micronesia", "fo", "faroe islands", "fr", "france", "ga", "gabon", "gb", "uk", "united kingdom", "gd", "grenada", "ge", "georgia", "gf", "french guiana", "gh", "ghana", "gi", "gibraltar", "gl", "greenland", "gm", "gambia", "gn", "guinea", "gp", "guadeloupe", "gq", "equatorial guinea", "gr", "greece", "gs", "sandwich islands", "gt", "guatemala", "gu", "guam", "gw", "guinea-bissau", "gy", "guyana", "hk", "hong kong", "hm", "heard island", "hn", "honduras", "hr", "croatia", "ht", "haiti", "hu", "hungary", "id", "indonesia", "ie", "ireland", "il", "israel", "in", "india", "io", "indian ocean territory", "iq", "iraq", "ir", "iran", "is", "iceland", "it", "italy", "jm", "jamaica", "jo", "jordan", "jp", "japan", "ke", "kenya", "kg", "kyrgyzstan", "kh", "cambodia", "ki", "kiribati", "km", "comoros", "kn", "saint kitts and nevis", "kp", "north korea", "kr", "south korea", "kw", "kuwait", "ky", "cayman islands", "kz", "kazakhstan", "la", "laos", "lb", "lebanon", "lc", "saint lucia", "li", "liechtenstein", "lk", "sri lanka", "lr", "liberia", "ls", "lesotho", "lt", "lithuania", "lu", "luxembourg", "lv", "latvia", "ly", "libya", "ma", "morocco", "mc", "monaco", "md", "moldova", "me", "montenegro", "mg", "madagascar", "mh", "marshall islands", "mk", "macedonia", "ml", "mali", "mm", "myanmar", "burma", "mn", "mongolia", "mo", "macau", "mp", "northern mariana islands", "mq", "martinique", "mr", "mauritania", "ms", "montserrat", "mt", "malta", "mu", "mauritius", "mv", "maldives", "mw", "malawi", "mx", "mexico", "my", "malaysia", "mz", "mozambique", "na", "namibia", "nc", "new caledonia", "ne", "niger", "nf", "norfolk island", "ng", "nigeria", "ni", "nicaragua", "nl", "netherlands", "no", "norway", "np", "nepal", "nr", "nauru", "nu", "niue", "nz", "new zealand", "om", "oman", "pa", "panama", "pe", "peru", "pf", "french polynesia", "pg", "new guinea", "ph", "philippines", "pk", "pakistan", "pl", "poland", "pm", "saint pierre", "pn", "pitcairn islands", "pr", "puerto rico", "ps", "palestine", "pt", "portugal", "pw", "palau", "py", "paraguay", "qa", "qatar", "re", "reunion", "ro", "romania", "rs", "serbia", "ru", "russia", "rw", "rwanda", "sa", "saudi arabia", "sb", "solomon islands", "sc", "seychelles", "gb sct", "scotland", "sd", "sudan", "se", "sweden", "sg", "singapore", "sh", "saint helena", "si", "slovenia", "sj", "svalbard", "jan mayen", "sk", "slovakia", "sl", "sierra leone", "sm", "san marino", "sn", "senegal", "so", "somalia", "sr", "suriname", "st", "sao tome", "sv", "el salvador", "sy", "syria", "sz", "swaziland", "tc", "caicos islands", "td", "chad", "tf", "french territories", "tg", "togo", "th", "thailand", "tj", "tajikistan", "tk", "tokelau", "tl", "timorleste", "tm", "turkmenistan", "tn", "tunisia", "to", "tonga", "tr", "turkey", "tt", "trinidad", "tv", "tuvalu", "tw", "taiwan", "tz", "tanzania", "ua", "ukraine", "ug", "uganda", "um", "us minor islands", "us", "america", "united states", "uy", "uruguay", "uz", "uzbekistan", "va", "vatican city", "vc", "saint vincent", "ve", "venezuela", "vg", "british virgin islands", "vi", "us virgin islands", "vn", "vietnam", "vu", "vanuatu", "gb wls", "wales", "wf", "wallis and futuna", "ws", "samoa", "ye", "yemen", "yt", "mayotte", "za", "south africa", "zm", "zambia", "zw", "zimbabwe"], _i = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.className, l = i.name, u = ie(l, "flag", s), f = se(t, this.props), p = ce(t, this.props);
    return /* @__PURE__ */ b.createElement(p, q({}, f, {
      className: u
    }));
  }, t;
}(sb);
_i.handledProps = ["as", "className", "name"];
_i.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Additional classes. */
  className: d.string,
  /** Flag name, can use the two digit country code, the full name, or a common alias. */
  name: Qb(oL)
} : {};
_i.defaultProps = {
  as: "i"
};
_i.create = ze(_i, function(e) {
  return {
    name: e
  };
});
const CE = _i;
function Ko(e) {
  var t = e.className, r = ie("divider", t), n = se(Ko, e), i = ce(Ko, e);
  return /* @__PURE__ */ b.createElement(i, q({}, n, {
    className: r
  }));
}
Ko.handledProps = ["as", "className"];
Ko.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Additional classes. */
  className: d.string
} : {};
var Yo = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(u) {
      ae(n.props, "onClick", u, n.props);
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.children, u = i.className, f = i.content, p = i.disabled, h = i.description, m = i.flag, v = i.icon, S = i.image, O = i.label, T = i.selected, _ = i.text, C = ie(N(s, "active"), N(p, "disabled"), N(T, "selected"), "item", u), M = Ue(v) ? WN(l, "DropdownMenu") && "dropdown" : v, k = se(t, this.props), U = ce(t, this.props), R = {
      role: "option",
      "aria-disabled": p,
      "aria-checked": s,
      "aria-selected": T
    };
    if (!ue(l))
      return /* @__PURE__ */ b.createElement(U, q({}, k, R, {
        className: C,
        onClick: this.handleClick
      }), l);
    var F = CE.create(m, {
      autoGenerateKey: !1
    }), x = At.create(M, {
      autoGenerateKey: !1
    }), A = Mt.create(S, {
      autoGenerateKey: !1
    }), I = lr.create(O, {
      autoGenerateKey: !1
    }), B = mi("span", function(X) {
      return {
        children: X
      };
    }, h, {
      defaultProps: {
        className: "description"
      },
      autoGenerateKey: !1
    }), G = mi("span", function(X) {
      return {
        children: X
      };
    }, ue(f) ? _ : f, {
      defaultProps: {
        className: "text"
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ b.createElement(U, q({}, k, R, {
      className: C,
      onClick: this.handleClick
    }), A, x, F, I, B, G);
  }, t;
}(He);
Yo.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "flag", "icon", "image", "label", "onClick", "selected", "text", "value"];
Yo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Style as the currently chosen item. */
  active: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** Additional text with less emphasis. */
  description: he,
  /** A dropdown item can be disabled. */
  disabled: d.bool,
  /** Shorthand for Flag. */
  flag: he,
  /** Shorthand for Icon. */
  icon: he,
  /** Shorthand for Image. */
  image: he,
  /** Shorthand for Label. */
  label: he,
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
  text: be,
  /** Stored value. */
  value: d.oneOfType([d.bool, d.number, d.string])
} : {};
Yo.create = ze(Yo, function(e) {
  return e;
});
const Hd = Yo;
function Qn(e) {
  var t = e.children, r = e.className, n = e.content, i = e.icon, s = ie("header", r), l = se(Qn, e), u = ce(Qn, e);
  return ue(t) ? /* @__PURE__ */ b.createElement(u, q({}, l, {
    className: s
  }), At.create(i, {
    autoGenerateKey: !1
  }), n) : /* @__PURE__ */ b.createElement(u, q({}, l, {
    className: s
  }), t);
}
Qn.handledProps = ["as", "children", "className", "content", "icon"];
Qn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function) */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** Shorthand for Icon. */
  icon: he
} : {};
Qn.create = ze(Qn, function(e) {
  return {
    content: e
  };
});
function Oi(e) {
  var t = e.children, r = e.className, n = e.content, i = e.direction, s = e.open, l = e.scrolling, u = ie(i, N(s, "visible"), N(l, "scrolling"), "menu transition", r), f = se(Oi, e), p = ce(Oi, e);
  return /* @__PURE__ */ b.createElement(p, q({}, f, {
    className: u
  }), ue(t) ? n : t);
}
Oi.handledProps = ["as", "children", "className", "content", "direction", "open", "scrolling"];
Oi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** A dropdown menu can open to the left or to the right. */
  direction: d.oneOf(["left", "right"]),
  /** Whether or not the dropdown menu is displayed. */
  open: d.bool,
  /** A dropdown menu can scroll. */
  scrolling: d.bool
} : {};
var Ti = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleChange = function(u) {
      var f = ba(u, "target.value");
      ae(n.props, "onChange", u, q({}, n.props, {
        value: f
      }));
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.autoComplete, l = i.className, u = i.tabIndex, f = i.type, p = i.value, h = ie("search", l), m = se(t, this.props);
    return /* @__PURE__ */ b.createElement("input", q({}, m, {
      "aria-autocomplete": "list",
      autoComplete: s,
      className: h,
      onChange: this.handleChange,
      tabIndex: u,
      type: f,
      value: p
    }));
  }, t;
}(He);
Ti.handledProps = ["as", "autoComplete", "className", "tabIndex", "type", "value"];
Ti.propTypes = process.env.NODE_ENV !== "production" ? {
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
Ti.defaultProps = {
  autoComplete: "off",
  type: "text"
};
Ti.create = ze(Ti, function(e) {
  return {
    type: e
  };
});
const AE = Ti;
function Kn(e) {
  var t = e.children, r = e.className, n = e.content, i = ie("divider", r), s = se(Kn, e), l = ce(Kn, e);
  return /* @__PURE__ */ b.createElement(l, q({
    "aria-atomic": !0,
    "aria-live": "polite",
    role: "alert"
  }, s, {
    className: i
  }), ue(t) ? n : t);
}
Kn.handledProps = ["as", "children", "className", "content"];
Kn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be
} : {};
Kn.create = ze(Kn, function(e) {
  return {
    content: e
  };
});
var $E = /[\\^$.*+?()[\]{}|]/g, sL = RegExp($E.source);
function lL(e) {
  return e = Ha(e), e && sL.test(e) ? e.replace($E, "\\$&") : e;
}
function pi(e) {
  var t = e.additionLabel, r = e.additionPosition, n = e.allowAdditions, i = e.deburr, s = e.multiple, l = e.options, u = e.search, f = e.searchQuery, p = e.value, h = l;
  if (s && (h = Yf(h, function(T) {
    return !Bi(p, T.value);
  })), u && f)
    if (Ei(u))
      h = u(h, f);
    else {
      var m = i ? id(f) : f, v = new RegExp(lL(m), "i");
      h = Yf(h, function(T) {
        return v.test(i ? id(T.text) : T.text);
      });
    }
  if (n && u && f && !Ao(h, {
    text: f
  })) {
    var S = /* @__PURE__ */ b.isValidElement(t) ? /* @__PURE__ */ b.cloneElement(t, {
      key: "addition-label"
    }) : t || "", O = {
      key: "addition",
      // by using an array, we can pass multiple elements, but when doing so
      // we must specify a `key` for React to know which one is which
      text: [S, /* @__PURE__ */ b.createElement("b", {
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
pi.handledProps = [];
function fv(e) {
  var t = e.additionLabel, r = e.additionPosition, n = e.allowAdditions, i = e.deburr, s = e.multiple, l = e.options, u = e.search, f = e.searchQuery, p = e.selectedIndex, h = e.value, m = pi({
    value: h,
    options: l,
    searchQuery: f,
    additionLabel: t,
    additionPosition: r,
    allowAdditions: n,
    deburr: i,
    multiple: s,
    search: u
  }), v = sE(m, function(_, C, M) {
    return C.disabled || _.push(M), _;
  }, []), S;
  if (!p || p < 0) {
    var O = v[0];
    S = s ? O : Jf(m, ["value", h]) || v[0];
  } else if (s)
    S = Db(v, function(_) {
      return _ >= p;
    }), p >= m.length - 1 && (S = v[v.length - 1]);
  else {
    var T = Jf(m, ["value", h]);
    S = Bi(v, T) ? T : void 0;
  }
  return (!S || S < 0) && (S = v[0]), S;
}
var dv = function(t, r) {
  return Ue(t) ? r : t;
}, pv = function(t) {
  return t && t.map(function(r) {
    return Bd(r, ["key", "value"]);
  });
};
function RE(e) {
  var t = e.flag, r = e.image, n = e.text;
  return Ei(n) ? n : {
    content: /* @__PURE__ */ b.createElement(b.Fragment, null, CE.create(t), Mt.create(r), n)
  };
}
var er = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.searchRef = /* @__PURE__ */ Pr(), n.sizerRef = /* @__PURE__ */ Pr(), n.ref = /* @__PURE__ */ Pr(), n.handleChange = function(u, f) {
      ae(n.props, "onChange", u, q({}, n.props, {
        value: f
      }));
    }, n.closeOnChange = function(u) {
      var f = n.props, p = f.closeOnChange, h = f.multiple, m = Po(p) ? !h : p;
      m && n.close(u, Jb);
    }, n.closeOnEscape = function(u) {
      n.props.closeOnEscape && Et.getCode(u) === Et.Escape && (u.preventDefault(), n.close(u));
    }, n.moveSelectionOnKeyDown = function(u) {
      var f, p = n.props, h = p.multiple, m = p.selectOnNavigation, v = n.state.open;
      if (v) {
        var S = (f = {}, f[Et.ArrowDown] = 1, f[Et.ArrowUp] = -1, f), O = S[Et.getCode(u)];
        if (O !== void 0) {
          u.preventDefault();
          var T = n.getSelectedIndexAfterMove(O);
          !h && m && n.makeSelectedItemActive(u, T), n.setState({
            selectedIndex: T
          });
        }
      }
    }, n.openOnSpace = function(u) {
      var f, p, h, m = n.state.focus && !n.state.open && Et.getCode(u) === Et.Spacebar, v = ((f = u.target) == null ? void 0 : f.tagName) !== "INPUT" && ((p = u.target) == null ? void 0 : p.tagName) !== "TEXTAREA" && ((h = u.target) == null ? void 0 : h.isContentEditable) !== !0;
      m && (v && u.preventDefault(), n.open(u));
    }, n.openOnArrow = function(u) {
      var f = n.state, p = f.focus, h = f.open;
      if (p && !h) {
        var m = Et.getCode(u);
        (m === Et.ArrowDown || m === Et.ArrowUp) && (u.preventDefault(), n.open(u));
      }
    }, n.makeSelectedItemActive = function(u, f) {
      var p = n.state, h = p.open, m = p.value, v = n.props.multiple, S = n.getSelectedItem(f), O = ba(S, "value"), T = ba(S, "disabled");
      if (Ue(O) || !h || T)
        return m;
      var _ = v ? cv(m, [O]) : O, C = v ? !!Zf(_, m).length : _ !== m;
      return C && (n.setState({
        value: _
      }), n.handleChange(u, _), S["data-additional"] && ae(n.props, "onAddItem", u, q({}, n.props, {
        value: O
      }))), m;
    }, n.selectItemOnEnter = function(u) {
      var f = n.props.search, p = n.state, h = p.open, m = p.selectedIndex;
      if (h) {
        var v = Et.getCode(u) === Et.Enter || // https://github.com/Semantic-Org/Semantic-UI-React/pull/3766
        !f && Et.getCode(u) === Et.Spacebar;
        if (v) {
          u.preventDefault();
          var S = aL(pi({
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
          if (!(f && S === 0)) {
            var O = n.makeSelectedItemActive(u, m);
            n.setState({
              selectedIndex: fv({
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
            }), n.closeOnChange(u), n.clearSearchQuery(), f && ae(n.searchRef.current, "focus");
          }
        }
      }
    }, n.removeItemOnBackspace = function(u) {
      var f = n.props, p = f.multiple, h = f.search, m = n.state, v = m.searchQuery, S = m.value;
      if (Et.getCode(u) === Et.Backspace && !(v || !h || !p || Ea(S))) {
        u.preventDefault();
        var O = UM(S);
        n.setState({
          value: O
        }), n.handleChange(u, O);
      }
    }, n.closeOnDocumentClick = function(u) {
      n.props.closeOnBlur && (n.ref.current && Oa(n.ref.current, u) || n.close());
    }, n.handleMouseDown = function(u) {
      n.isMouseDown = !0, ae(n.props, "onMouseDown", u, n.props), document.addEventListener("mouseup", n.handleDocumentMouseUp);
    }, n.handleDocumentMouseUp = function() {
      n.isMouseDown = !1, document.removeEventListener("mouseup", n.handleDocumentMouseUp);
    }, n.handleClick = function(u) {
      var f = n.props, p = f.minCharacters, h = f.search, m = n.state, v = m.open, S = m.searchQuery;
      if (ae(n.props, "onClick", u, n.props), u.stopPropagation(), !h)
        return n.toggle(u);
      if (v) {
        ae(n.searchRef.current, "focus");
        return;
      }
      if (S.length >= p || p === 1) {
        n.open(u);
        return;
      }
      ae(n.searchRef.current, "focus");
    }, n.handleIconClick = function(u) {
      var f = n.props.clearable, p = n.hasValue();
      ae(n.props, "onClick", u, n.props), u.stopPropagation(), f && p ? n.clearValue(u) : n.toggle(u);
    }, n.handleItemClick = function(u, f) {
      var p = n.props, h = p.multiple, m = p.search, v = n.state.value, S = f.value;
      if (u.stopPropagation(), (h || f.disabled) && u.nativeEvent.stopImmediatePropagation(), !f.disabled) {
        var O = f["data-additional"], T = h ? cv(n.state.value, [S]) : S, _ = h ? !!Zf(T, v).length : T !== v;
        _ && (n.setState({
          value: T
        }), n.handleChange(u, T)), n.clearSearchQuery(), ae(m ? n.searchRef.current : n.ref.current, "focus"), n.closeOnChange(u), O && ae(n.props, "onAddItem", u, q({}, n.props, {
          value: S
        }));
      }
    }, n.handleFocus = function(u) {
      var f = n.state.focus;
      f || (ae(n.props, "onFocus", u, n.props), n.setState({
        focus: !0
      }));
    }, n.handleBlur = function(u) {
      var f = ba(u, "currentTarget");
      if (!(f && f.contains(document.activeElement))) {
        var p = n.props, h = p.closeOnBlur, m = p.multiple, v = p.selectOnBlur;
        n.isMouseDown || (ae(n.props, "onBlur", u, n.props), v && !m && (n.makeSelectedItemActive(u, n.state.selectedIndex), h && n.close()), n.setState({
          focus: !1
        }), n.clearSearchQuery());
      }
    }, n.handleSearchChange = function(u, f) {
      var p = f.value;
      u.stopPropagation();
      var h = n.props.minCharacters, m = n.state.open, v = p;
      if (ae(n.props, "onSearchChange", u, q({}, n.props, {
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
      n.moveSelectionOnKeyDown(u), n.openOnArrow(u), n.openOnSpace(u), n.selectItemOnEnter(u), ae(n.props, "onKeyDown", u);
    }, n.getSelectedItem = function(u) {
      var f = pi({
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
      return ba(f, "[" + u + "]");
    }, n.getItemByValue = function(u) {
      var f = n.props.options;
      return Db(f, {
        value: u
      });
    }, n.getDropdownAriaOptions = function() {
      var u = n.props, f = u.loading, p = u.disabled, h = u.search, m = u.multiple, v = n.state.open, S = {
        role: h ? "combobox" : "listbox",
        "aria-busy": f,
        "aria-disabled": p,
        "aria-expanded": !!v
      };
      return S.role === "listbox" && (S["aria-multiselectable"] = m), S;
    }, n.clearSearchQuery = function() {
      var u = n.state.searchQuery;
      u === void 0 || u === "" || n.setState({
        searchQuery: ""
      });
    }, n.handleLabelClick = function(u, f) {
      u.stopPropagation(), n.setState({
        selectedLabel: f.value
      }), ae(n.props, "onLabelClick", u, f);
    }, n.handleLabelRemove = function(u, f) {
      u.stopPropagation();
      var p = n.state.value, h = sr(p, f.value);
      n.setState({
        value: h
      }), n.handleChange(u, h);
    }, n.getSelectedIndexAfterMove = function(u, f) {
      f === void 0 && (f = n.state.selectedIndex);
      var p = pi({
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
      if (!(p === void 0 || BM(p, "disabled"))) {
        var h = p.length - 1, m = n.props.wrapSelection, v = f + u;
        return !m && (v > h || v < 0) ? v = f : v > h ? v = 0 : v < 0 && (v = h), p[v].disabled ? n.getSelectedIndexAfterMove(u, v) : v;
      }
    }, n.handleIconOverrides = function(u) {
      var f = n.props.clearable, p = ie(f && n.hasValue() && "clear", u.className);
      return {
        className: p,
        onClick: function(m) {
          ae(u, "onClick", m, u), n.handleIconClick(m);
        }
      };
    }, n.clearValue = function(u) {
      var f = n.props.multiple, p = f ? [] : "";
      n.setState({
        value: p
      }), n.handleChange(u, p);
    }, n.computeSearchInputTabIndex = function() {
      var u = n.props, f = u.disabled, p = u.tabIndex;
      return Ue(p) ? f ? -1 : 0 : p;
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
        return f ? -1 : Ue(h) ? 0 : h;
    }, n.handleSearchInputOverrides = function(u) {
      return {
        onChange: function(p, h) {
          ae(u, "onChange", p, h), n.handleSearchChange(p, h);
        }
      };
    }, n.hasValue = function() {
      var u = n.props.multiple, f = n.state.value;
      return u ? !Ea(f) : !Ue(f) && f !== "";
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
      h || (m && ae(n.searchRef.current, "focus"), ae(n.props, "onOpen", u, n.props), f && n.setState({
        open: !0
      }), n.scrollSelectedItemIntoView());
    }, n.close = function(u, f) {
      f === void 0 && (f = n.handleClose), n.state.open && (ae(n.props, "onClose", u, n.props), n.setState({
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
      var u = n.props, f = u.multiple, p = u.placeholder, h = u.search, m = u.text, v = n.state, S = v.searchQuery, O = v.selectedIndex, T = v.value, _ = v.open, C = n.hasValue(), M = ie(p && !C && "default", "text", h && S && "filtered"), k = p, U;
      return m ? k = m : _ && !f ? U = n.getSelectedItem(O) : C && (U = n.getItemByValue(T)), Kn.create(U ? RE(U) : k, {
        defaultProps: {
          className: M
        }
      });
    }, n.renderSearchInput = function() {
      var u = n.props, f = u.search, p = u.searchInput, h = n.state.searchQuery;
      return f && /* @__PURE__ */ b.createElement(vr, {
        innerRef: n.searchRef
      }, AE.create(p, {
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
      if (!(!f || Ea(v))) {
        var S = Pt(v, n.getItemByValue);
        return Pt(MM(S), function(O, T) {
          var _ = {
            active: O.value === m,
            as: "a",
            key: dv(O.key, O.value),
            onClick: n.handleLabelClick,
            onRemove: n.handleLabelRemove,
            value: O.value
          };
          return lr.create(p(O, T, _), {
            defaultProps: _
          });
        });
      }
    }, n.renderOptions = function() {
      var u = n.props, f = u.lazyLoad, p = u.multiple, h = u.search, m = u.noResultsMessage, v = n.state, S = v.open, O = v.selectedIndex, T = v.value;
      if (f && !S)
        return null;
      var _ = pi({
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
      if (m !== null && h && Ea(_))
        return /* @__PURE__ */ b.createElement("div", {
          className: "message"
        }, m);
      var C = p ? function(M) {
        return Bi(T, M);
      } : function(M) {
        return M === T;
      };
      return Pt(_, function(M, k) {
        return Hd.create(q({
          active: C(M.value),
          selected: O === k
        }, M, {
          key: dv(M.key, M.value),
          // Needed for handling click events on disabled items
          style: q({}, M.style, {
            pointerEvents: "all"
          })
        }), {
          generateKey: !1,
          overrideProps: function(R) {
            return {
              onClick: function(x, A) {
                R.onClick == null || R.onClick(x, A), n.handleItemClick(x, A);
              }
            };
          }
        });
      });
    }, n.renderMenu = function() {
      var u = n.props, f = u.children, p = u.direction, h = u.header, m = n.state.open, v = n.getDropdownMenuAriaOptions();
      if (!ue(f)) {
        var S = Cd.only(f), O = ie(p, N(m, "visible"), S.props.className);
        return /* @__PURE__ */ ub(S, q({
          className: O
        }, v));
      }
      return /* @__PURE__ */ b.createElement(Oi, q({}, v, {
        direction: p,
        open: m
      }), Qn.create(h, {
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
      !yl(l.__value, s.value) || // On option keys/values, we only check those properties to avoid recursive performance impacts.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/3000
      !S2(pv(i.options), pv(l.__options))
    );
    return f && (u.selectedIndex = fv({
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
    return !yl(i, this.props) || !yl(s, this.state);
  }, r.componentDidUpdate = function(i, s) {
    var l = this.props, u = l.closeOnBlur, f = l.minCharacters, p = l.openOnFocus, h = l.search;
    if (process.env.NODE_ENV !== "production") {
      var m = Array.isArray(this.props.value), v = Wf(this.props, "value");
      v && this.props.multiple && !m ? console.error("Dropdown `value` must be an array when `multiple` is set." + (" Received type: `" + Object.prototype.toString.call(this.props.value) + "`.")) : v && !this.props.multiple && m && console.error("Dropdown `value` must not be an array when `multiple` is not set. Either set `multiple={true}` or use a string or number value.");
    }
    if (!s.focus && this.state.focus) {
      if (!this.isMouseDown) {
        var S = !h || h && f === 1 && !this.state.open;
        p && S && this.open();
      }
    } else
      s.focus && !this.state.focus && !this.isMouseDown && u && this.close();
    !s.open && this.state.open ? (this.setOpenDirection(), this.scrollSelectedItemIntoView()) : s.open && this.state.open, s.selectedIndex !== this.state.selectedIndex && this.scrollSelectedItemIntoView();
  }, r.getDropdownMenuAriaOptions = function() {
    var i = this.props, s = i.search, l = i.multiple, u = {};
    return s && (u["aria-multiselectable"] = l, u.role = "listbox"), u;
  }, r.render = function() {
    var i = this.props, s = i.basic, l = i.button, u = i.className, f = i.compact, p = i.disabled, h = i.error, m = i.fluid, v = i.floating, S = i.icon, O = i.inline, T = i.item, _ = i.labeled, C = i.loading, M = i.multiple, k = i.pointing, U = i.search, R = i.selection, F = i.scrolling, x = i.simple, A = i.trigger, I = this.state, B = I.focus, G = I.open, X = I.upward, W = ie(
      "ui",
      N(G, "active visible"),
      N(p, "disabled"),
      N(h, "error"),
      N(C, "loading"),
      N(s, "basic"),
      N(l, "button"),
      N(f, "compact"),
      N(m, "fluid"),
      N(v, "floating"),
      N(O, "inline"),
      // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
      N(_, "labeled"),
      N(T, "item"),
      N(M, "multiple"),
      N(U, "search"),
      N(R, "selection"),
      N(x, "simple"),
      N(F, "scrolling"),
      N(X, "upward"),
      dt(k, "pointing"),
      "dropdown",
      u
    ), le = se(t, this.props), Ce = ce(t, this.props), Te = this.getDropdownAriaOptions(Ce, this.props);
    return /* @__PURE__ */ b.createElement(vr, {
      innerRef: this.ref
    }, /* @__PURE__ */ b.createElement(Ce, q({}, le, Te, {
      className: W,
      onBlur: this.handleBlur,
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      onMouseDown: this.handleMouseDown,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      tabIndex: this.computeTabIndex()
    }), this.renderLabels(), this.renderSearchInput(), this.renderSearchSizer(), A || this.renderText(), At.create(S, {
      overrideProps: this.handleIconOverrides,
      autoGenerateKey: !1
    }), this.renderMenu(), G && /* @__PURE__ */ b.createElement(qn, {
      name: "keydown",
      on: this.closeOnEscape
    }), G && /* @__PURE__ */ b.createElement(qn, {
      name: "click",
      on: this.closeOnDocumentClick
    }), B && /* @__PURE__ */ b.createElement(qn, {
      name: "keydown",
      on: this.removeItemOnBackspace
    })));
  }, t;
}(Li);
er.handledProps = ["additionLabel", "additionPosition", "allowAdditions", "as", "basic", "button", "children", "className", "clearable", "closeOnBlur", "closeOnChange", "closeOnEscape", "compact", "deburr", "defaultOpen", "defaultSearchQuery", "defaultSelectedLabel", "defaultUpward", "defaultValue", "direction", "disabled", "error", "floating", "fluid", "header", "icon", "inline", "item", "labeled", "lazyLoad", "loading", "minCharacters", "multiple", "noResultsMessage", "onAddItem", "onBlur", "onChange", "onClick", "onClose", "onFocus", "onLabelClick", "onMouseDown", "onOpen", "onSearchChange", "open", "openOnFocus", "options", "placeholder", "pointing", "renderLabel", "scrolling", "search", "searchInput", "searchQuery", "selectOnBlur", "selectOnNavigation", "selectedLabel", "selection", "simple", "tabIndex", "text", "trigger", "upward", "value", "wrapSelection"];
er.propTypes = process.env.NODE_ENV !== "production" ? {
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
  allowAdditions: Xe([To(["options", "selection", "search"]), d.bool]),
  /** A Dropdown can reduce its complexity. */
  basic: d.bool,
  /** Format the Dropdown to appear as a button. */
  button: d.bool,
  /** Primary content. */
  children: Xe([nt(["options", "selection"]), Kb({
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
  defaultSelectedLabel: Xe([To(["multiple"]), d.oneOfType([d.number, d.string])]),
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
  options: Xe([nt(["children"]), d.arrayOf(d.shape(Hd.propTypes))]),
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
  selectedLabel: Xe([To(["multiple"]), d.oneOfType([d.string, d.number])]),
  /** A dropdown can be used to select between choices in a form. */
  selection: Xe([nt(["children"]), To(["options"]), d.bool]),
  /** A simple dropdown can open without Javascript. */
  simple: d.bool,
  /** A dropdown can receive focus. */
  tabIndex: d.oneOfType([d.number, d.string]),
  /** The text displayed in the dropdown, usually for the active item. */
  text: d.string,
  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: Xe([nt(["selection", "text"]), d.node]),
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
er.defaultProps = {
  additionLabel: "Add ",
  additionPosition: "top",
  closeOnBlur: !0,
  closeOnEscape: !0,
  deburr: !1,
  icon: "dropdown",
  minCharacters: 1,
  noResultsMessage: "No results found.",
  openOnFocus: !0,
  renderLabel: RE,
  searchInput: "text",
  selectOnBlur: !0,
  selectOnNavigation: !0,
  wrapSelection: !0
};
er.autoControlledProps = ["open", "searchQuery", "selectedLabel", "value", "upward"];
er.Divider = Ko;
er.Header = Qn;
er.Item = Hd;
er.Menu = Oi;
er.SearchInput = AE;
er.Text = Kn;
var xi = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.inputRef = /* @__PURE__ */ Pr(), n.computeIcon = function() {
      var u = n.props, f = u.loading, p = u.icon;
      if (!Ue(p))
        return p;
      if (f)
        return "spinner";
    }, n.computeTabIndex = function() {
      var u = n.props, f = u.disabled, p = u.tabIndex;
      if (!Ue(p))
        return p;
      if (f)
        return -1;
    }, n.focus = function(u) {
      return n.inputRef.current.focus(u);
    }, n.select = function() {
      return n.inputRef.current.select();
    }, n.handleChange = function(u) {
      var f = ba(u, "target.value");
      ae(n.props, "onChange", u, q({}, n.props, {
        value: f
      }));
    }, n.handleChildOverrides = function(u, f) {
      return q({}, f, u.props, {
        ref: function(h) {
          jr(u.ref, h), n.inputRef.current = h;
        }
      });
    }, n.partitionProps = function() {
      var u = n.props, f = u.disabled, p = u.type, h = n.computeTabIndex(), m = se(t, n.props), v = qd(m), S = v[0], O = v[1];
      return [q({}, S, {
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
    var i = this, s = this.props, l = s.action, u = s.actionPosition, f = s.children, p = s.className, h = s.disabled, m = s.error, v = s.fluid, S = s.focus, O = s.icon, T = s.iconPosition, _ = s.input, C = s.inverted, M = s.label, k = s.labelPosition, U = s.loading, R = s.size, F = s.transparent, x = s.type, A = ie("ui", R, N(h, "disabled"), N(m, "error"), N(v, "fluid"), N(S, "focus"), N(C, "inverted"), N(U, "loading"), N(F, "transparent"), Dt(u, "action") || N(l, "action"), Dt(T, "icon") || N(O || U, "icon"), Dt(k, "labeled") || N(M, "labeled"), "input", p), I = ce(t, this.props), B = this.partitionProps(), G = B[0], X = B[1];
    if (!ue(f)) {
      var W = Pt(Cd.toArray(f), function(Te) {
        return Te.type !== "input" ? Te : /* @__PURE__ */ ub(Te, i.handleChildOverrides(Te, G));
      });
      return /* @__PURE__ */ b.createElement(I, q({}, X, {
        className: A
      }), W);
    }
    var le = Wn.create(l, {
      autoGenerateKey: !1
    }), Ce = lr.create(M, {
      defaultProps: {
        className: ie(
          "label",
          // add 'left|right corner'
          Bi(k, "corner") && k
        )
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ b.createElement(I, q({}, X, {
      className: A
    }), u === "left" && le, k !== "right" && Ce, oD(_ || x, {
      defaultProps: G,
      autoGenerateKey: !1
    }), At.create(this.computeIcon(), {
      autoGenerateKey: !1
    }), u !== "left" && le, k === "right" && Ce);
  }, t;
}(He);
xi.handledProps = ["action", "actionPosition", "as", "children", "className", "disabled", "error", "fluid", "focus", "icon", "iconPosition", "input", "inverted", "label", "labelPosition", "loading", "onChange", "size", "tabIndex", "transparent", "type"];
xi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** An Input can be formatted to alert the user to an action they may perform. */
  action: d.oneOfType([d.bool, he]),
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
  icon: d.oneOfType([d.bool, he]),
  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: d.oneOf(["left"]),
  /** Shorthand for creating the HTML Input. */
  input: he,
  /** Format to appear on dark backgrounds. */
  inverted: d.bool,
  /** Optional Label to display along side the Input. */
  label: he,
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
xi.defaultProps = {
  type: "text"
};
xi.create = ze(xi, function(e) {
  return {
    type: e
  };
});
const IE = xi;
function Da(e) {
  var t = e.children, r = e.className, n = e.computer, i = e.color, s = e.floated, l = e.largeScreen, u = e.mobile, f = e.only, p = e.stretched, h = e.tablet, m = e.textAlign, v = e.verticalAlign, S = e.widescreen, O = e.width, T = ie(i, N(p, "stretched"), $l(f, "only"), Gr(m), Dt(s, "floated"), $n(v), Or(n, "wide computer"), Or(l, "wide large screen"), Or(u, "wide mobile"), Or(h, "wide tablet"), Or(S, "wide widescreen"), Or(O, "wide"), "column", r), _ = se(Da, e), C = ce(Da, e);
  return /* @__PURE__ */ b.createElement(C, q({}, _, {
    className: T
  }), t);
}
Da.handledProps = ["as", "children", "className", "color", "computer", "floated", "largeScreen", "mobile", "only", "stretched", "tablet", "textAlign", "verticalAlign", "widescreen", "width"];
Da.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** A grid column can be colored. */
  color: d.oneOf(yr),
  /** A column can specify a width for a computer. */
  computer: Xe([nt(["width"]), d.oneOf(Tr)]),
  /** A column can sit flush against the left or right edge of a row. */
  floated: d.oneOf(Zn),
  /** A column can specify a width for a large screen device. */
  largeScreen: Xe([nt(["width"]), d.oneOf(Tr)]),
  /** A column can specify a width for a mobile device. */
  mobile: Xe([nt(["width"]), d.oneOf(Tr)]),
  /** A column can appear only for a specific device, or screen sizes. */
  only: Rl(aE),
  /** A column can stretch its contents to take up the entire grid or row height. */
  stretched: d.bool,
  /** A column can specify a width for a tablet device. */
  tablet: Xe([nt(["width"]), d.oneOf(Tr)]),
  /** A column can specify its text alignment. */
  textAlign: d.oneOf(Vr),
  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: d.oneOf(ea),
  /** A column can specify a width for a wide screen device. */
  widescreen: Xe([nt(["width"]), d.oneOf(Tr)]),
  /** Represents width of column. */
  width: Xe([nt(["computer", "largeScreen", "mobile", "tablet", "widescreen"]), d.oneOf(Tr)])
} : {};
Da.create = ze(Da, function(e) {
  return {
    children: e
  };
});
function Xo(e) {
  var t = e.centered, r = e.children, n = e.className, i = e.color, s = e.columns, l = e.divided, u = e.only, f = e.reversed, p = e.stretched, h = e.textAlign, m = e.verticalAlign, v = ie(i, N(t, "centered"), N(l, "divided"), N(p, "stretched"), $l(u, "only"), $l(f, "reversed"), Gr(h), $n(m), Or(s, "column", !0), "row", n), S = se(Xo, e), O = ce(Xo, e);
  return /* @__PURE__ */ b.createElement(O, q({}, S, {
    className: v
  }), r);
}
Xo.handledProps = ["as", "centered", "children", "className", "color", "columns", "divided", "only", "reversed", "stretched", "textAlign", "verticalAlign"];
Xo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A row can have its columns centered. */
  centered: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** A grid row can be colored. */
  color: d.oneOf(yr),
  /** Represents column count per line in Row. */
  columns: d.oneOf([].concat(Tr, ["equal"])),
  /** A row can have dividers between its columns. */
  divided: d.bool,
  /** A row can appear only for a specific device, or screen sizes. */
  only: Rl(aE),
  /** A row can specify that its columns should reverse order at different device sizes. */
  reversed: Rl(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A row can stretch its contents to take up the entire column height. */
  stretched: d.bool,
  /** A row can specify its text alignment. */
  textAlign: d.oneOf(Vr),
  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: d.oneOf(ea)
} : {};
function Xt(e) {
  var t = e.celled, r = e.centered, n = e.children, i = e.className, s = e.columns, l = e.container, u = e.divided, f = e.doubling, p = e.inverted, h = e.padded, m = e.relaxed, v = e.reversed, S = e.stackable, O = e.stretched, T = e.textAlign, _ = e.verticalAlign, C = ie("ui", N(r, "centered"), N(l, "container"), N(f, "doubling"), N(p, "inverted"), N(S, "stackable"), N(O, "stretched"), dt(t, "celled"), dt(u, "divided"), dt(h, "padded"), dt(m, "relaxed"), $l(v, "reversed"), Gr(T), $n(_), Or(s, "column", !0), "grid", i), M = se(Xt, e), k = ce(Xt, e);
  return /* @__PURE__ */ b.createElement(k, q({}, M, {
    className: C
  }), n);
}
Xt.handledProps = ["as", "celled", "centered", "children", "className", "columns", "container", "divided", "doubling", "inverted", "padded", "relaxed", "reversed", "stackable", "stretched", "textAlign", "verticalAlign"];
Xt.Column = Da;
Xt.Row = Xo;
Xt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  columns: d.oneOf([].concat(Tr, ["equal"])),
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
  reversed: Rl(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: d.bool,
  /** A grid can stretch its contents to take up the entire grid height. */
  stretched: d.bool,
  /** A grid can specify its text alignment. */
  textAlign: d.oneOf(Vr),
  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: d.oneOf(ea)
} : {};
function Yn(e) {
  var t = e.children, r = e.className, n = e.content, i = ie("sub header", r), s = se(Yn, e), l = ce(Yn, e);
  return /* @__PURE__ */ b.createElement(l, q({}, s, {
    className: i
  }), ue(t) ? n : t);
}
Yn.handledProps = ["as", "children", "className", "content"];
Yn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be
} : {};
Yn.create = ze(Yn, function(e) {
  return {
    content: e
  };
});
function Pi(e) {
  var t = e.children, r = e.className, n = e.content, i = ie("content", r), s = se(Pi, e), l = ce(Pi, e);
  return /* @__PURE__ */ b.createElement(l, q({}, s, {
    className: i
  }), ue(t) ? n : t);
}
Pi.handledProps = ["as", "children", "className", "content"];
Pi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be
} : {};
function bn(e) {
  var t = e.attached, r = e.block, n = e.children, i = e.className, s = e.color, l = e.content, u = e.disabled, f = e.dividing, p = e.floated, h = e.icon, m = e.image, v = e.inverted, S = e.size, O = e.sub, T = e.subheader, _ = e.textAlign, C = ie("ui", s, S, N(r, "block"), N(u, "disabled"), N(f, "dividing"), Dt(p, "floated"), N(h === !0, "icon"), N(m === !0, "image"), N(v, "inverted"), N(O, "sub"), dt(t, "attached"), Gr(_), "header", i), M = se(bn, e), k = ce(bn, e);
  if (!ue(n))
    return /* @__PURE__ */ b.createElement(k, q({}, M, {
      className: C
    }), n);
  var U = At.create(h, {
    autoGenerateKey: !1
  }), R = Mt.create(m, {
    autoGenerateKey: !1
  }), F = Yn.create(T, {
    autoGenerateKey: !1
  });
  return U || R ? /* @__PURE__ */ b.createElement(k, q({}, M, {
    className: C
  }), U || R, (l || F) && /* @__PURE__ */ b.createElement(Pi, null, l, F)) : /* @__PURE__ */ b.createElement(k, q({}, M, {
    className: C
  }), l, F);
}
bn.handledProps = ["as", "attached", "block", "children", "className", "color", "content", "disabled", "dividing", "floated", "icon", "image", "inverted", "size", "sub", "subheader", "textAlign"];
bn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: d.oneOf(yr),
  /** Shorthand for primary content. */
  content: be,
  /** Show that the header is inactive. */
  disabled: d.bool,
  /** Divide header from the content below it. */
  dividing: d.bool,
  /** Header can sit to the left or right of other content. */
  floated: d.oneOf(Zn),
  /** Add an icon by icon name or pass an Icon. */
  icon: Xe([nt(["image"]), d.oneOfType([d.bool, he])]),
  /** Add an image by img src or pass an Image. */
  image: Xe([nt(["icon"]), d.oneOfType([d.bool, he])]),
  /** Inverts the color of the header for dark backgrounds. */
  inverted: d.bool,
  /** Content headings are sized with em and are based on the font-size of their container. */
  size: d.oneOf(sr(Zt, "big", "massive", "mini")),
  /** Headers may be formatted to label smaller or de-emphasized content. */
  sub: d.bool,
  /** Shorthand for Header.Subheader. */
  subheader: he,
  /** Align header content. */
  textAlign: d.oneOf(Vr)
} : {};
bn.Content = Pi;
bn.Subheader = Yn;
function En(e) {
  var t = e.children, r = e.className, n = e.content, i = ie(r, "description"), s = se(En, e), l = ce(En, e);
  return /* @__PURE__ */ b.createElement(l, q({}, s, {
    className: i
  }), ue(t) ? n : t);
}
En.handledProps = ["as", "children", "className", "content"];
En.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be
} : {};
En.create = ze(En, function(e) {
  return {
    content: e
  };
});
function wn(e) {
  var t = e.children, r = e.className, n = e.content, i = ie("header", r), s = se(wn, e), l = ce(wn, e);
  return /* @__PURE__ */ b.createElement(l, q({}, s, {
    className: i
  }), ue(t) ? n : t);
}
wn.handledProps = ["as", "children", "className", "content"];
wn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be
} : {};
wn.create = ze(wn, function(e) {
  return {
    content: e
  };
});
function Sn(e) {
  var t = e.children, r = e.className, n = e.content, i = e.description, s = e.floated, l = e.header, u = e.verticalAlign, f = ie(Dt(s, "floated"), $n(u), "content", r), p = se(Sn, e), h = ce(Sn, e);
  return ue(t) ? /* @__PURE__ */ b.createElement(h, q({}, p, {
    className: f
  }), wn.create(l), En.create(i), n) : /* @__PURE__ */ b.createElement(h, q({}, p, {
    className: f
  }), t);
}
Sn.handledProps = ["as", "children", "className", "content", "description", "floated", "header", "verticalAlign"];
Sn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** Shorthand for ListDescription. */
  description: he,
  /** An list content can be floated left or right. */
  floated: d.oneOf(Zn),
  /** Shorthand for ListHeader. */
  header: he,
  /** An element inside a list can be vertically aligned. */
  verticalAlign: d.oneOf(ea)
} : {};
Sn.create = ze(Sn, function(e) {
  return {
    content: e
  };
});
function Ma(e) {
  var t = e.className, r = e.verticalAlign, n = ie($n(r), t), i = se(Ma, e);
  return /* @__PURE__ */ b.createElement(At, q({}, i, {
    className: n
  }));
}
Ma.handledProps = ["className", "verticalAlign"];
Ma.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Additional classes. */
  className: d.string,
  /** An element inside a list can be vertically aligned. */
  verticalAlign: d.oneOf(ea)
} : {};
Ma.create = ze(Ma, function(e) {
  return {
    name: e
  };
});
var Jo = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(u) {
      var f = n.props.disabled;
      f || ae(n.props, "onClick", u, n.props);
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.children, u = i.className, f = i.content, p = i.description, h = i.disabled, m = i.header, v = i.icon, S = i.image, O = i.value, T = ce(t, this.props), _ = ie(N(s, "active"), N(h, "disabled"), N(T !== "li", "item"), u), C = se(t, this.props), M = T === "li" ? {
      value: O
    } : {
      "data-value": O
    };
    if (!ue(l))
      return /* @__PURE__ */ b.createElement(T, q({}, M, {
        role: "listitem",
        className: _,
        onClick: this.handleClick
      }, C), l);
    var k = Ma.create(v, {
      autoGenerateKey: !1
    }), U = Mt.create(S, {
      autoGenerateKey: !1
    });
    if (!/* @__PURE__ */ lb(f) && iu(f))
      return /* @__PURE__ */ b.createElement(T, q({}, M, {
        role: "listitem",
        className: _,
        onClick: this.handleClick
      }, C), k || U, Sn.create(f, {
        autoGenerateKey: !1,
        defaultProps: {
          header: m,
          description: p
        }
      }));
    var R = wn.create(m, {
      autoGenerateKey: !1
    }), F = En.create(p, {
      autoGenerateKey: !1
    });
    return k || U ? /* @__PURE__ */ b.createElement(T, q({}, M, {
      role: "listitem",
      className: _,
      onClick: this.handleClick
    }, C), k || U, (f || R || F) && /* @__PURE__ */ b.createElement(Sn, null, R, F, f)) : /* @__PURE__ */ b.createElement(T, q({}, M, {
      role: "listitem",
      className: _,
      onClick: this.handleClick
    }, C), R, F, f);
  }, t;
}(He);
Jo.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "header", "icon", "image", "onClick", "value"];
Jo.propTypes = process.env.NODE_ENV !== "production" ? {
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
  content: he,
  /** Shorthand for ListDescription. */
  description: he,
  /** A list item can disabled. */
  disabled: d.bool,
  /** Shorthand for ListHeader. */
  header: he,
  /** Shorthand for ListIcon. */
  icon: Xe([nt(["image"]), he]),
  /** Shorthand for Image. */
  image: Xe([nt(["icon"]), he]),
  /** A ListItem can be clicked */
  onClick: d.func,
  /** A value for an ordered list. */
  value: d.string
} : {};
Jo.create = ze(Jo, function(e) {
  return {
    content: e
  };
});
const NE = Jo;
function Zo(e) {
  var t = e.children, r = e.className, n = e.content, i = se(Zo, e), s = ce(Zo, e), l = ie(N(s !== "ul" && s !== "ol", "list"), r);
  return /* @__PURE__ */ b.createElement(s, q({}, i, {
    className: l
  }), ue(t) ? n : t);
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
  content: be
} : {};
var Rn = /* @__PURE__ */ function(e) {
  ut(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleItemOverrides = function(u) {
      return {
        onClick: function(p, h) {
          ae(u, "onClick", p, h), ae(n.props, "onItemClick", p, h);
        }
      };
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this, s = this.props, l = s.animated, u = s.bulleted, f = s.celled, p = s.children, h = s.className, m = s.content, v = s.divided, S = s.floated, O = s.horizontal, T = s.inverted, _ = s.items, C = s.link, M = s.ordered, k = s.relaxed, U = s.selection, R = s.size, F = s.verticalAlign, x = ie("ui", R, N(l, "animated"), N(u, "bulleted"), N(f, "celled"), N(v, "divided"), N(O, "horizontal"), N(T, "inverted"), N(C, "link"), N(M, "ordered"), N(U, "selection"), dt(k, "relaxed"), Dt(S, "floated"), $n(F), "list", h), A = se(t, this.props), I = ce(t, this.props);
    return ue(p) ? ue(m) ? /* @__PURE__ */ b.createElement(I, q({
      role: "list",
      className: x
    }, A), Pt(_, function(B) {
      return NE.create(B, {
        overrideProps: i.handleItemOverrides
      });
    })) : /* @__PURE__ */ b.createElement(I, q({
      role: "list",
      className: x
    }, A), m) : /* @__PURE__ */ b.createElement(I, q({
      role: "list",
      className: x
    }, A), p);
  }, t;
}(He);
Rn.handledProps = ["animated", "as", "bulleted", "celled", "children", "className", "content", "divided", "floated", "horizontal", "inverted", "items", "link", "onItemClick", "ordered", "relaxed", "selection", "size", "verticalAlign"];
Rn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  content: be,
  /** A list can show divisions between content. */
  divided: d.bool,
  /** An list can be floated left or right. */
  floated: d.oneOf(Zn),
  /** A list can be formatted to have items appear horizontally. */
  horizontal: d.bool,
  /** A list can be inverted to appear on a dark background. */
  inverted: d.bool,
  /** Shorthand array of props for ListItem. */
  items: Fi,
  /** A list can be specially formatted for navigation links. */
  link: d.bool,
  /**
   * onClick handler for ListItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: Xe([nt(["children"]), d.func]),
  /** A list can be ordered numerically. */
  ordered: d.bool,
  /** A list can relax its padding to provide more negative space. */
  relaxed: d.oneOfType([d.bool, d.oneOf(["very"])]),
  /** A selection list formats list items as possible choices. */
  selection: d.bool,
  /** A list can vary in size. */
  size: d.oneOf(Zt),
  /** An element inside a list can be vertically aligned. */
  verticalAlign: d.oneOf(ea)
} : {};
Rn.Content = Sn;
Rn.Description = En;
Rn.Header = wn;
Rn.Icon = Ma;
Rn.Item = NE;
Rn.List = Zo;
const kE = Rn;
function es(e) {
  var t = e.active, r = e.children, n = e.className, i = e.content, s = e.disabled, l = e.indeterminate, u = e.inline, f = e.inverted, p = e.size, h = ie("ui", p, N(t, "active"), N(s, "disabled"), N(l, "indeterminate"), N(f, "inverted"), N(r || i, "text"), dt(u, "inline"), "loader", n), m = se(es, e), v = ce(es, e);
  return /* @__PURE__ */ b.createElement(v, q({}, m, {
    className: h
  }), ue(r) ? i : r);
}
es.handledProps = ["active", "as", "children", "className", "content", "disabled", "indeterminate", "inline", "inverted", "size"];
es.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A loader can be active or visible. */
  active: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** A loader can be disabled or hidden. */
  disabled: d.bool,
  /** A loader can show it's unsure of how long a task will take. */
  indeterminate: d.bool,
  /** Loaders can appear inline with content. */
  inline: d.oneOfType([d.bool, d.oneOf(["centered"])]),
  /** Loaders can have their colors inverted. */
  inverted: d.bool,
  /** Loaders can have different sizes. */
  size: d.oneOf(Zt)
} : {};
function ts(e) {
  var t = e.children, r = e.className, n = e.compact, i = e.content, s = e.horizontal, l = e.piled, u = e.raised, f = e.size, p = e.stacked, h = ie("ui", f, N(n, "compact"), N(s, "horizontal"), N(l, "piled"), N(u, "raised"), N(p, "stacked"), "segments", r), m = se(ts, e), v = ce(ts, e);
  return /* @__PURE__ */ b.createElement(v, q({}, m, {
    className: h
  }), ue(t) ? i : t);
}
ts.handledProps = ["as", "children", "className", "compact", "content", "horizontal", "piled", "raised", "size", "stacked"];
ts.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** A segment may take up only as much space as is necessary. */
  compact: d.bool,
  /** Shorthand for primary content. */
  content: be,
  /** Formats content to be aligned horizontally. */
  horizontal: d.bool,
  /** Formatted to look like a pile of pages. */
  piled: d.bool,
  /** A segment group may be formatted to raise above the page. */
  raised: d.bool,
  /** A segment group can have different sizes. */
  size: d.oneOf(sr(Zt, "medium")),
  /** Formatted to show it contains multiple pages. */
  stacked: d.bool
} : {};
function rs(e) {
  var t = e.children, r = e.className, n = e.content, i = ie("inline", r), s = se(rs, e), l = ce(rs, e);
  return /* @__PURE__ */ b.createElement(l, q({}, s, {
    className: i
  }), ue(t) ? n : t);
}
rs.handledProps = ["as", "children", "className", "content"];
rs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be
} : {};
function La(e) {
  var t = e.attached, r = e.basic, n = e.children, i = e.circular, s = e.className, l = e.clearing, u = e.color, f = e.compact, p = e.content, h = e.disabled, m = e.floated, v = e.inverted, S = e.loading, O = e.placeholder, T = e.padded, _ = e.piled, C = e.raised, M = e.secondary, k = e.size, U = e.stacked, R = e.tertiary, F = e.textAlign, x = e.vertical, A = ie("ui", u, k, N(r, "basic"), N(i, "circular"), N(l, "clearing"), N(f, "compact"), N(h, "disabled"), N(v, "inverted"), N(S, "loading"), N(O, "placeholder"), N(_, "piled"), N(C, "raised"), N(M, "secondary"), N(U, "stacked"), N(R, "tertiary"), N(x, "vertical"), dt(t, "attached"), dt(T, "padded"), Gr(F), Dt(m, "floated"), "segment", s), I = se(La, e), B = ce(La, e);
  return /* @__PURE__ */ b.createElement(B, q({}, I, {
    className: A
  }), ue(n) ? p : n);
}
La.handledProps = ["as", "attached", "basic", "children", "circular", "className", "clearing", "color", "compact", "content", "disabled", "floated", "inverted", "loading", "padded", "piled", "placeholder", "raised", "secondary", "size", "stacked", "tertiary", "textAlign", "vertical"];
La.Group = ts;
La.Inline = rs;
La.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: d.oneOf(yr),
  /** A segment may take up only as much space as is necessary. */
  compact: d.bool,
  /** Shorthand for primary content. */
  content: be,
  /** A segment may show its content is disabled. */
  disabled: d.bool,
  /** Segment content can be floated to the left or right. */
  floated: d.oneOf(Zn),
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
  size: d.oneOf(sr(Zt, "medium")),
  /** Formatted to show it contains multiple pages. */
  stacked: d.bool,
  /** A segment can be formatted to appear even less noticeable. */
  tertiary: d.bool,
  /** Formats content to be aligned as part of a vertical group. */
  textAlign: d.oneOf(sr(Vr, "justified")),
  /** Formats content to be aligned vertically. */
  vertical: d.bool
} : {};
function ns(e) {
  "@babel/helpers - typeof";
  return ns = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ns(e);
}
function uL(e, t) {
  if (ns(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ns(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cL(e) {
  var t = uL(e, "string");
  return ns(t) == "symbol" ? t : t + "";
}
function Ci(e) {
  var t = e.children, r = e.className, n = e.content, i = e.textAlign, s = ie(Gr(i), "description", r), l = se(Ci, e), u = ce(Ci, e);
  return /* @__PURE__ */ b.createElement(u, q({}, l, {
    className: s
  }), ue(t) ? n : t);
}
Ci.handledProps = ["as", "children", "className", "content", "textAlign"];
Ci.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** A card content can adjust its text alignment. */
  textAlign: d.oneOf(sr(Vr, "justified"))
} : {};
function Ai(e) {
  var t = e.children, r = e.className, n = e.content, i = e.textAlign, s = ie(Gr(i), "header", r), l = se(Ai, e), u = ce(Ai, e);
  return /* @__PURE__ */ b.createElement(u, q({}, l, {
    className: s
  }), ue(t) ? n : t);
}
Ai.handledProps = ["as", "children", "className", "content", "textAlign"];
Ai.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** A card header can adjust its text alignment. */
  textAlign: d.oneOf(sr(Vr, "justified"))
} : {};
function $i(e) {
  var t = e.children, r = e.className, n = e.content, i = e.textAlign, s = ie(Gr(i), "meta", r), l = se($i, e), u = ce($i, e);
  return /* @__PURE__ */ b.createElement(u, q({}, l, {
    className: s
  }), ue(t) ? n : t);
}
$i.handledProps = ["as", "children", "className", "content", "textAlign"];
$i.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** A card meta can adjust its text alignment. */
  textAlign: d.oneOf(sr(Vr, "justified"))
} : {};
function Fa(e) {
  var t = e.children, r = e.className, n = e.content, i = e.description, s = e.extra, l = e.header, u = e.meta, f = e.textAlign, p = ie(N(s, "extra"), Gr(f), "content", r), h = se(Fa, e), m = ce(Fa, e);
  return ue(t) ? ue(n) ? /* @__PURE__ */ b.createElement(m, q({}, h, {
    className: p
  }), mi(Ai, function(v) {
    return {
      content: v
    };
  }, l, {
    autoGenerateKey: !1
  }), mi($i, function(v) {
    return {
      content: v
    };
  }, u, {
    autoGenerateKey: !1
  }), mi(Ci, function(v) {
    return {
      content: v
    };
  }, i, {
    autoGenerateKey: !1
  })) : /* @__PURE__ */ b.createElement(m, q({}, h, {
    className: p
  }), n) : /* @__PURE__ */ b.createElement(m, q({}, h, {
    className: p
  }), t);
}
Fa.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "meta", "textAlign"];
Fa.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** Shorthand for CardDescription. */
  description: he,
  /** A card can contain extra content meant to be formatted separately from the main content. */
  extra: d.bool,
  /** Shorthand for CardHeader. */
  header: he,
  /** Shorthand for CardMeta. */
  meta: he,
  /** A card content can adjust its text alignment. */
  textAlign: d.oneOf(sr(Vr, "justified"))
} : {};
function as(e) {
  var t = e.centered, r = e.children, n = e.className, i = e.content, s = e.doubling, l = e.items, u = e.itemsPerRow, f = e.stackable, p = e.textAlign, h = ie("ui", N(t, "centered"), N(s, "doubling"), N(f, "stackable"), Gr(p), Or(u), "cards", n), m = se(as, e), v = ce(as, e);
  if (!ue(r))
    return /* @__PURE__ */ b.createElement(v, q({}, m, {
      className: h
    }), r);
  if (!ue(i))
    return /* @__PURE__ */ b.createElement(v, q({}, m, {
      className: h
    }), i);
  var S = Pt(l, function(O) {
    var T, _ = (T = O.key) != null ? T : [O.header, O.description].join("-");
    return /* @__PURE__ */ b.createElement(bt, q({
      key: _
    }, O));
  });
  return /* @__PURE__ */ b.createElement(v, q({}, m, {
    className: h
  }), S);
}
as.handledProps = ["as", "centered", "children", "className", "content", "doubling", "items", "itemsPerRow", "stackable", "textAlign"];
as.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A group of cards can center itself inside its container. */
  centered: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** A group of cards can double its column width for mobile. */
  doubling: d.bool,
  /** Shorthand array of props for Card. */
  items: Fi,
  /** A group of cards can set how many cards should exist in a row. */
  itemsPerRow: d.oneOf(Tr),
  /** A group of cards can automatically stack rows to a single columns on mobile devices. */
  stackable: d.bool,
  /** A card group can adjust its text alignment. */
  textAlign: d.oneOf(sr(Vr, "justified"))
} : {};
var bt = /* @__PURE__ */ function(e) {
  ut(t, e);
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
    var i = this.props, s = i.centered, l = i.children, u = i.className, f = i.color, p = i.content, h = i.description, m = i.extra, v = i.fluid, S = i.header, O = i.href, T = i.image, _ = i.link, C = i.meta, M = i.onClick, k = i.raised, U = ie("ui", f, N(s, "centered"), N(v, "fluid"), N(_, "link"), N(k, "raised"), "card", u), R = se(t, this.props), F = ce(t, this.props, function() {
      if (M)
        return "a";
    });
    return ue(l) ? ue(p) ? /* @__PURE__ */ b.createElement(F, q({}, R, {
      className: U,
      href: O,
      onClick: this.handleClick
    }), Mt.create(T, {
      autoGenerateKey: !1,
      defaultProps: {
        ui: !1,
        wrapped: !0
      }
    }), (h || S || C) && /* @__PURE__ */ b.createElement(Fa, {
      description: h,
      header: S,
      meta: C
    }), m && /* @__PURE__ */ b.createElement(Fa, {
      extra: !0
    }, m)) : /* @__PURE__ */ b.createElement(F, q({}, R, {
      className: U,
      href: O,
      onClick: this.handleClick
    }), p) : /* @__PURE__ */ b.createElement(F, q({}, R, {
      className: U,
      href: O,
      onClick: this.handleClick
    }), l);
  }, t;
}(He);
bt.handledProps = ["as", "centered", "children", "className", "color", "content", "description", "extra", "fluid", "header", "href", "image", "link", "meta", "onClick", "raised"];
bt.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A Card can center itself inside its container. */
  centered: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** A Card can be formatted to display different colors. */
  color: d.oneOf(yr),
  /** Shorthand for primary content. */
  content: be,
  /** Shorthand for CardDescription. */
  description: he,
  /** Shorthand for primary content of CardContent. */
  extra: be,
  /** A Card can be formatted to take up the width of its container. */
  fluid: d.bool,
  /** Shorthand for CardHeader. */
  header: he,
  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: d.string,
  /** A card can contain an Image component. */
  image: he,
  /** A card can be formatted to link to other content. */
  link: d.bool,
  /** Shorthand for CardMeta. */
  meta: he,
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
bt.Content = Fa;
bt.Description = Ci;
bt.Group = as;
bt.Header = Ai;
bt.Meta = $i;
function _n(e) {
  var t = e.children, r = e.className, n = e.content, i = ie("header", r), s = se(_n, e), l = ce(_n, e);
  return /* @__PURE__ */ b.createElement(l, q({}, s, {
    className: i
  }), ue(t) ? n : t);
}
_n.handledProps = ["as", "children", "className", "content"];
_n.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be
} : {};
_n.create = ze(_n, function(e) {
  return {
    content: e
  };
});
function On(e) {
  var t = e.children, r = e.className, n = e.content, i = ie("description", r), s = se(On, e), l = ce(On, e);
  return /* @__PURE__ */ b.createElement(l, q({}, s, {
    className: i
  }), ue(t) ? n : t);
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
  content: be
} : {};
On.create = ze(On, function(e) {
  return {
    content: e
  };
});
function Tn(e) {
  var t = e.children, r = e.className, n = e.content, i = ie("extra", r), s = se(Tn, e), l = ce(Tn, e);
  return /* @__PURE__ */ b.createElement(l, q({}, s, {
    className: i
  }), ue(t) ? n : t);
}
Tn.handledProps = ["as", "children", "className", "content"];
Tn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be
} : {};
Tn.create = ze(Tn, function(e) {
  return {
    content: e
  };
});
function Xn(e) {
  var t = e.children, r = e.className, n = e.content, i = ie("meta", r), s = se(Xn, e), l = ce(Xn, e);
  return /* @__PURE__ */ b.createElement(l, q({}, s, {
    className: i
  }), ue(t) ? n : t);
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
  content: be
} : {};
Xn.create = ze(Xn, function(e) {
  return {
    content: e
  };
});
function Ri(e) {
  var t = e.children, r = e.className, n = e.content, i = e.description, s = e.extra, l = e.header, u = e.meta, f = e.verticalAlign, p = ie($n(f), "content", r), h = se(Ri, e), m = ce(Ri, e);
  return ue(t) ? /* @__PURE__ */ b.createElement(m, q({}, h, {
    className: p
  }), _n.create(l, {
    autoGenerateKey: !1
  }), Xn.create(u, {
    autoGenerateKey: !1
  }), On.create(i, {
    autoGenerateKey: !1
  }), Tn.create(s, {
    autoGenerateKey: !1
  }), n) : /* @__PURE__ */ b.createElement(m, q({}, h, {
    className: p
  }), t);
}
Ri.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "meta", "verticalAlign"];
Ri.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** Shorthand for ItemDescription component. */
  description: he,
  /** Shorthand for ItemExtra component. */
  extra: he,
  /** Shorthand for ItemHeader component. */
  header: he,
  /** Shorthand for ItemMeta component. */
  meta: he,
  /** Content can specify its vertical alignment. */
  verticalAlign: d.oneOf(ea)
} : {};
function is(e) {
  var t = e.children, r = e.className, n = e.content, i = e.divided, s = e.items, l = e.link, u = e.relaxed, f = e.unstackable, p = ie("ui", N(i, "divided"), N(l, "link"), N(f, "unstackable"), dt(u, "relaxed"), "items", r), h = se(is, e), m = ce(is, e);
  if (!ue(t))
    return /* @__PURE__ */ b.createElement(m, q({}, h, {
      className: p
    }), t);
  if (!ue(n))
    return /* @__PURE__ */ b.createElement(m, q({}, h, {
      className: p
    }), n);
  var v = Pt(s, function(S) {
    var O = S.childKey, T = Pa(S, ["childKey"]), _ = O ?? [T.content, T.description, T.header, T.meta].join("-");
    return /* @__PURE__ */ b.createElement(Ct, q({}, T, {
      key: _
    }));
  });
  return /* @__PURE__ */ b.createElement(m, q({}, h, {
    className: p
  }), v);
}
is.handledProps = ["as", "children", "className", "content", "divided", "items", "link", "relaxed", "unstackable"];
is.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: be,
  /** Items can be divided to better distinguish between grouped content. */
  divided: d.bool,
  /** Shorthand array of props for Item. */
  items: Fi,
  /** An item can be formatted so that the entire contents link to another page. */
  link: d.bool,
  /** A group of items can relax its padding to provide more negative space. */
  relaxed: d.oneOfType([d.bool, d.oneOf(["very"])]),
  /** Prevent items from stacking on mobile. */
  unstackable: d.bool
} : {};
function Ba(e) {
  var t = e.size, r = se(Ba, e);
  return /* @__PURE__ */ b.createElement(Mt, q({}, r, {
    size: t,
    ui: !!t,
    wrapped: !0
  }));
}
Ba.handledProps = ["size"];
Ba.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An image may appear at different sizes. */
  size: Mt.propTypes.size
} : {};
Ba.create = ze(Ba, function(e) {
  return {
    src: e
  };
});
function Ct(e) {
  var t = e.children, r = e.className, n = e.content, i = e.description, s = e.extra, l = e.header, u = e.image, f = e.meta, p = ie("item", r), h = se(Ct, e), m = ce(Ct, e);
  return ue(t) ? /* @__PURE__ */ b.createElement(m, q({}, h, {
    className: p
  }), Ba.create(u, {
    autoGenerateKey: !1
  }), /* @__PURE__ */ b.createElement(Ri, {
    content: n,
    description: i,
    extra: s,
    header: l,
    meta: f
  })) : /* @__PURE__ */ b.createElement(m, q({}, h, {
    className: p
  }), t);
}
Ct.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "image", "meta"];
Ct.Content = Ri;
Ct.Description = On;
Ct.Extra = Tn;
Ct.Group = is;
Ct.Header = _n;
Ct.Image = Ba;
Ct.Meta = Xn;
Ct.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for ItemContent component. */
  content: be,
  /** Shorthand for ItemDescription component. */
  description: he,
  /** Shorthand for ItemExtra component. */
  extra: he,
  /** Shorthand for ItemHeader component. */
  header: he,
  /** Shorthand for ItemImage component. */
  image: he,
  /** Shorthand for ItemMeta component. */
  meta: he
} : {};
function wa(e, t, r) {
  return (t = cL(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function DE(e, t) {
  if (e == null)
    return {};
  var r, n, i = Pa(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (n = 0; n < s.length; n++)
      r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function hv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hv(Object(r), !0).forEach(function(n) {
      wa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Wd = b.createContext({});
function Ee(e) {
  let t = e.id, r = e.children, n = DE(e, ["id", "children"]);
  const i = lt(Wd), s = r ? b.Children.only(r) : null, l = s ? s.props : {};
  if (t in i) {
    const u = i[t];
    return b.createElement(u, gv(gv({}, l), n));
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
    let s = i.children, l = DE(i, ["children"]);
    const f = lt(Wd)[e];
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
function mv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mv(Object(r), !0).forEach(function(n) {
      wa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
class dL {
  constructor(t) {
    wa(this, "add", (r, n) => {
      this.components[r] = n;
    }), wa(this, "get", (r) => this.components[r]), wa(this, "getAll", () => fL({}, this.components)), wa(this, "clear", () => {
      this.components = {};
    }), this.components = t || {};
  }
}
new dL();
var pL = Object.prototype;
function hL(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || pL;
  return e === r;
}
var su = hL;
function gL(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ME = gL, mL = ME, vL = mL(Object.keys, Object), yL = vL, bL = su, EL = yL, wL = Object.prototype, SL = wL.hasOwnProperty;
function _L(e) {
  if (!bL(e))
    return EL(e);
  var t = [];
  for (var r in Object(e))
    SL.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var LE = _L, OL = typeof xr == "object" && xr && xr.Object === Object && xr, FE = OL, TL = FE, xL = typeof self == "object" && self && self.Object === Object && self, PL = TL || xL || Function("return this")(), Kr = PL, CL = Kr, AL = CL.Symbol, ds = AL, vv = ds, BE = Object.prototype, $L = BE.hasOwnProperty, RL = BE.toString, wo = vv ? vv.toStringTag : void 0;
function IL(e) {
  var t = $L.call(e, wo), r = e[wo];
  try {
    e[wo] = void 0;
    var n = !0;
  } catch {
  }
  var i = RL.call(e);
  return n && (t ? e[wo] = r : delete e[wo]), i;
}
var NL = IL, kL = Object.prototype, DL = kL.toString;
function ML(e) {
  return DL.call(e);
}
var LL = ML, yv = ds, FL = NL, BL = LL, UL = "[object Null]", zL = "[object Undefined]", bv = yv ? yv.toStringTag : void 0;
function qL(e) {
  return e == null ? e === void 0 ? zL : UL : bv && bv in Object(e) ? FL(e) : BL(e);
}
var ta = qL;
function jL(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ra = jL;
const HL = /* @__PURE__ */ $t(ra);
var WL = ta, GL = ra, VL = "[object AsyncFunction]", QL = "[object Function]", KL = "[object GeneratorFunction]", YL = "[object Proxy]";
function XL(e) {
  if (!GL(e))
    return !1;
  var t = WL(e);
  return t == QL || t == KL || t == VL || t == YL;
}
var UE = XL, JL = Kr, ZL = JL["__core-js_shared__"], eF = ZL, pf = eF, Ev = function() {
  var e = /[^.]+$/.exec(pf && pf.keys && pf.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function tF(e) {
  return !!Ev && Ev in e;
}
var rF = tF, nF = Function.prototype, aF = nF.toString;
function iF(e) {
  if (e != null) {
    try {
      return aF.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var zE = iF, oF = UE, sF = rF, lF = ra, uF = zE, cF = /[\\^$.*+?()[\]{}|]/g, fF = /^\[object .+?Constructor\]$/, dF = Function.prototype, pF = Object.prototype, hF = dF.toString, gF = pF.hasOwnProperty, mF = RegExp(
  "^" + hF.call(gF).replace(cF, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function vF(e) {
  if (!lF(e) || sF(e))
    return !1;
  var t = oF(e) ? mF : fF;
  return t.test(uF(e));
}
var yF = vF;
function bF(e, t) {
  return e == null ? void 0 : e[t];
}
var EF = bF, wF = yF, SF = EF;
function _F(e, t) {
  var r = SF(e, t);
  return wF(r) ? r : void 0;
}
var Ga = _F, OF = Ga, TF = Kr, xF = OF(TF, "DataView"), PF = xF, CF = Ga, AF = Kr, $F = CF(AF, "Map"), Gd = $F, RF = Ga, IF = Kr, NF = RF(IF, "Promise"), kF = NF, DF = Ga, MF = Kr, LF = DF(MF, "Set"), FF = LF, BF = Ga, UF = Kr, zF = BF(UF, "WeakMap"), qF = zF, ld = PF, ud = Gd, cd = kF, fd = FF, dd = qF, qE = ta, ji = zE, wv = "[object Map]", jF = "[object Object]", Sv = "[object Promise]", _v = "[object Set]", Ov = "[object WeakMap]", Tv = "[object DataView]", HF = ji(ld), WF = ji(ud), GF = ji(cd), VF = ji(fd), QF = ji(dd), ma = qE;
(ld && ma(new ld(new ArrayBuffer(1))) != Tv || ud && ma(new ud()) != wv || cd && ma(cd.resolve()) != Sv || fd && ma(new fd()) != _v || dd && ma(new dd()) != Ov) && (ma = function(e) {
  var t = qE(e), r = t == jF ? e.constructor : void 0, n = r ? ji(r) : "";
  if (n)
    switch (n) {
      case HF:
        return Tv;
      case WF:
        return wv;
      case GF:
        return Sv;
      case VF:
        return _v;
      case QF:
        return Ov;
    }
  return t;
});
var lu = ma;
function KF(e) {
  return e != null && typeof e == "object";
}
var In = KF, YF = ta, XF = In, JF = "[object Arguments]";
function ZF(e) {
  return XF(e) && YF(e) == JF;
}
var eB = ZF, xv = eB, tB = In, jE = Object.prototype, rB = jE.hasOwnProperty, nB = jE.propertyIsEnumerable, aB = xv(function() {
  return arguments;
}()) ? xv : function(e) {
  return tB(e) && rB.call(e, "callee") && !nB.call(e, "callee");
}, uu = aB, iB = Array.isArray, Rr = iB;
const HE = /* @__PURE__ */ $t(Rr);
var oB = 9007199254740991;
function sB(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= oB;
}
var Vd = sB, lB = UE, uB = Vd;
function cB(e) {
  return e != null && uB(e.length) && !lB(e);
}
var cu = cB, kl = { exports: {} };
function fB() {
  return !1;
}
var dB = fB;
kl.exports;
(function(e, t) {
  var r = Kr, n = dB, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, l = s && s.exports === i, u = l ? r.Buffer : void 0, f = u ? u.isBuffer : void 0, p = f || n;
  e.exports = p;
})(kl, kl.exports);
var Qd = kl.exports, pB = ta, hB = Vd, gB = In, mB = "[object Arguments]", vB = "[object Array]", yB = "[object Boolean]", bB = "[object Date]", EB = "[object Error]", wB = "[object Function]", SB = "[object Map]", _B = "[object Number]", OB = "[object Object]", TB = "[object RegExp]", xB = "[object Set]", PB = "[object String]", CB = "[object WeakMap]", AB = "[object ArrayBuffer]", $B = "[object DataView]", RB = "[object Float32Array]", IB = "[object Float64Array]", NB = "[object Int8Array]", kB = "[object Int16Array]", DB = "[object Int32Array]", MB = "[object Uint8Array]", LB = "[object Uint8ClampedArray]", FB = "[object Uint16Array]", BB = "[object Uint32Array]", st = {};
st[RB] = st[IB] = st[NB] = st[kB] = st[DB] = st[MB] = st[LB] = st[FB] = st[BB] = !0;
st[mB] = st[vB] = st[AB] = st[yB] = st[$B] = st[bB] = st[EB] = st[wB] = st[SB] = st[_B] = st[OB] = st[TB] = st[xB] = st[PB] = st[CB] = !1;
function UB(e) {
  return gB(e) && hB(e.length) && !!st[pB(e)];
}
var zB = UB;
function qB(e) {
  return function(t) {
    return e(t);
  };
}
var Kd = qB, Dl = { exports: {} };
Dl.exports;
(function(e, t) {
  var r = FE, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, l = s && r.process, u = function() {
    try {
      var f = i && i.require && i.require("util").types;
      return f || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(Dl, Dl.exports);
var Yd = Dl.exports, jB = zB, HB = Kd, Pv = Yd, Cv = Pv && Pv.isTypedArray, WB = Cv ? HB(Cv) : jB, WE = WB, GB = LE, VB = lu, QB = uu, KB = Rr, YB = cu, XB = Qd, JB = su, ZB = WE, eU = "[object Map]", tU = "[object Set]", rU = Object.prototype, nU = rU.hasOwnProperty;
function aU(e) {
  if (e == null)
    return !0;
  if (YB(e) && (KB(e) || typeof e == "string" || typeof e.splice == "function" || XB(e) || ZB(e) || QB(e)))
    return !e.length;
  var t = VB(e);
  if (t == eU || t == tU)
    return !e.size;
  if (JB(e))
    return !GB(e).length;
  for (var r in e)
    if (nU.call(e, r))
      return !1;
  return !0;
}
var iU = aU;
const Yr = /* @__PURE__ */ $t(iU);
function GE(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: oU } = Object.prototype, { getPrototypeOf: Xd } = Object, { iterator: fu, toStringTag: VE } = Symbol, du = ((e) => (t) => {
  const r = oU.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ir = (e) => (e = e.toLowerCase(), (t) => du(t) === e), pu = (e) => (t) => typeof t === e, { isArray: Hi } = Array, os = pu("undefined");
function sU(e) {
  return e !== null && !os(e) && e.constructor !== null && !os(e.constructor) && Jt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const QE = Ir("ArrayBuffer");
function lU(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && QE(e.buffer), t;
}
const uU = pu("string"), Jt = pu("function"), KE = pu("number"), hu = (e) => e !== null && typeof e == "object", cU = (e) => e === !0 || e === !1, bl = (e) => {
  if (du(e) !== "object")
    return !1;
  const t = Xd(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(VE in e) && !(fu in e);
}, fU = Ir("Date"), dU = Ir("File"), pU = Ir("Blob"), hU = Ir("FileList"), gU = (e) => hu(e) && Jt(e.pipe), mU = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Jt(e.append) && ((t = du(e)) === "formdata" || // detect form-data instance
  t === "object" && Jt(e.toString) && e.toString() === "[object FormData]"));
}, vU = Ir("URLSearchParams"), [yU, bU, EU, wU] = ["ReadableStream", "Request", "Response", "Headers"].map(Ir), SU = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ps(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), Hi(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), l = s.length;
    let u;
    for (n = 0; n < l; n++)
      u = s[n], t.call(null, e[u], u, e);
  }
}
function YE(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const Sa = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), XE = (e) => !os(e) && e !== Sa;
function pd() {
  const { caseless: e } = XE(this) && this || {}, t = {}, r = (n, i) => {
    const s = e && YE(t, i) || i;
    bl(t[s]) && bl(n) ? t[s] = pd(t[s], n) : bl(n) ? t[s] = pd({}, n) : Hi(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && ps(arguments[n], r);
  return t;
}
const _U = (e, t, r, { allOwnKeys: n } = {}) => (ps(t, (i, s) => {
  r && Jt(i) ? e[s] = GE(i, r) : e[s] = i;
}, { allOwnKeys: n }), e), OU = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), TU = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, xU = (e, t, r, n) => {
  let i, s, l;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
      l = i[s], (!n || n(l, e, t)) && !u[l] && (t[l] = e[l], u[l] = !0);
    e = r !== !1 && Xd(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, PU = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, CU = (e) => {
  if (!e)
    return null;
  if (Hi(e))
    return e;
  let t = e.length;
  if (!KE(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, AU = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Xd(Uint8Array)), $U = (e, t) => {
  const n = (e && e[fu]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const s = i.value;
    t.call(e, s[0], s[1]);
  }
}, RU = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, IU = Ir("HTMLFormElement"), NU = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Av = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), kU = Ir("RegExp"), JE = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ps(r, (i, s) => {
    let l;
    (l = t(i, s, e)) !== !1 && (n[s] = l || i);
  }), Object.defineProperties(e, n);
}, DU = (e) => {
  JE(e, (t, r) => {
    if (Jt(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Jt(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, MU = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((s) => {
      r[s] = !0;
    });
  };
  return Hi(e) ? n(e) : n(String(e).split(t)), r;
}, LU = () => {
}, FU = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function BU(e) {
  return !!(e && Jt(e.append) && e[VE] === "FormData" && e[fu]);
}
const UU = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (hu(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[i] = n;
        const s = Hi(n) ? [] : {};
        return ps(n, (l, u) => {
          const f = r(l, i + 1);
          !os(f) && (s[u] = f);
        }), t[i] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, zU = Ir("AsyncFunction"), qU = (e) => e && (hu(e) || Jt(e)) && Jt(e.then) && Jt(e.catch), ZE = ((e, t) => e ? setImmediate : t ? ((r, n) => (Sa.addEventListener("message", ({ source: i, data: s }) => {
  i === Sa && s === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), Sa.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Jt(Sa.postMessage)
), jU = typeof queueMicrotask < "u" ? queueMicrotask.bind(Sa) : typeof process < "u" && process.nextTick || ZE, HU = (e) => e != null && Jt(e[fu]), j = {
  isArray: Hi,
  isArrayBuffer: QE,
  isBuffer: sU,
  isFormData: mU,
  isArrayBufferView: lU,
  isString: uU,
  isNumber: KE,
  isBoolean: cU,
  isObject: hu,
  isPlainObject: bl,
  isReadableStream: yU,
  isRequest: bU,
  isResponse: EU,
  isHeaders: wU,
  isUndefined: os,
  isDate: fU,
  isFile: dU,
  isBlob: pU,
  isRegExp: kU,
  isFunction: Jt,
  isStream: gU,
  isURLSearchParams: vU,
  isTypedArray: AU,
  isFileList: hU,
  forEach: ps,
  merge: pd,
  extend: _U,
  trim: SU,
  stripBOM: OU,
  inherits: TU,
  toFlatObject: xU,
  kindOf: du,
  kindOfTest: Ir,
  endsWith: PU,
  toArray: CU,
  forEachEntry: $U,
  matchAll: RU,
  isHTMLForm: IU,
  hasOwnProperty: Av,
  hasOwnProp: Av,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: JE,
  freezeMethods: DU,
  toObjectSet: MU,
  toCamelCase: NU,
  noop: LU,
  toFiniteNumber: FU,
  findKey: YE,
  global: Sa,
  isContextDefined: XE,
  isSpecCompliantForm: BU,
  toJSONObject: UU,
  isAsyncFn: zU,
  isThenable: qU,
  setImmediate: ZE,
  asap: jU,
  isIterable: HU
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
const ew = Re.prototype, tw = {};
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
  tw[e] = { value: e };
});
Object.defineProperties(Re, tw);
Object.defineProperty(ew, "isAxiosError", { value: !0 });
Re.from = (e, t, r, n, i, s) => {
  const l = Object.create(ew);
  return j.toFlatObject(e, l, function(f) {
    return f !== Error.prototype;
  }, (u) => u !== "isAxiosError"), Re.call(l, e.message, t, r, n, i), l.cause = e, l.name = e.name, s && Object.assign(l, s), l;
};
const WU = null;
function hd(e) {
  return j.isPlainObject(e) || j.isArray(e);
}
function rw(e) {
  return j.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function $v(e, t, r) {
  return e ? e.concat(t).map(function(i, s) {
    return i = rw(i), !r && s ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function GU(e) {
  return j.isArray(e) && !e.some(hd);
}
const VU = j.toFlatObject(j, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function gu(e, t, r) {
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
    let C = O;
    if (O && !_ && typeof O == "object") {
      if (j.endsWith(T, "{}"))
        T = n ? T : T.slice(0, -2), O = JSON.stringify(O);
      else if (j.isArray(O) && GU(O) || (j.isFileList(O) || j.endsWith(T, "[]")) && (C = j.toArray(O)))
        return T = rw(T), C.forEach(function(k, U) {
          !(j.isUndefined(k) || k === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? $v([T], U, s) : l === null ? T : T + "[]",
            p(k)
          );
        }), !1;
    }
    return hd(O) ? !0 : (t.append($v(_, T, s), p(O)), !1);
  }
  const m = [], v = Object.assign(VU, {
    defaultVisitor: h,
    convertValue: p,
    isVisitable: hd
  });
  function S(O, T) {
    if (!j.isUndefined(O)) {
      if (m.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      m.push(O), j.forEach(O, function(C, M) {
        (!(j.isUndefined(C) || C === null) && i.call(
          t,
          C,
          j.isString(M) ? M.trim() : M,
          T,
          v
        )) === !0 && S(C, T ? T.concat(M) : [M]);
      }), m.pop();
    }
  }
  if (!j.isObject(e))
    throw new TypeError("data must be an object");
  return S(e), t;
}
function Rv(e) {
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
function Jd(e, t) {
  this._pairs = [], e && gu(e, this, t);
}
const nw = Jd.prototype;
nw.append = function(t, r) {
  this._pairs.push([t, r]);
};
nw.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Rv);
  } : Rv;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function QU(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function aw(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || QU;
  j.isFunction(r) && (r = {
    serialize: r
  });
  const i = r && r.serialize;
  let s;
  if (i ? s = i(t, r) : s = j.isURLSearchParams(t) ? t.toString() : new Jd(t, r).toString(n), s) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class KU {
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
const Iv = KU, iw = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, YU = typeof URLSearchParams < "u" ? URLSearchParams : Jd, XU = typeof FormData < "u" ? FormData : null, JU = typeof Blob < "u" ? Blob : null, ZU = {
  isBrowser: !0,
  classes: {
    URLSearchParams: YU,
    FormData: XU,
    Blob: JU
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Zd = typeof window < "u" && typeof document < "u", gd = typeof navigator == "object" && navigator || void 0, e3 = Zd && (!gd || ["ReactNative", "NativeScript", "NS"].indexOf(gd.product) < 0), t3 = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), r3 = Zd && window.location.href || "http://localhost", n3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Zd,
  hasStandardBrowserEnv: e3,
  hasStandardBrowserWebWorkerEnv: t3,
  navigator: gd,
  origin: r3
}, Symbol.toStringTag, { value: "Module" })), zt = {
  ...n3,
  ...ZU
};
function a3(e, t) {
  return gu(e, new zt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, s) {
      return zt.isNode && j.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function i3(e) {
  return j.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function o3(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let s;
  for (n = 0; n < i; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function ow(e) {
  function t(r, n, i, s) {
    let l = r[s++];
    if (l === "__proto__")
      return !0;
    const u = Number.isFinite(+l), f = s >= r.length;
    return l = !l && j.isArray(i) ? i.length : l, f ? (j.hasOwnProp(i, l) ? i[l] = [i[l], n] : i[l] = n, !u) : ((!i[l] || !j.isObject(i[l])) && (i[l] = []), t(r, n, i[l], s) && j.isArray(i[l]) && (i[l] = o3(i[l])), !u);
  }
  if (j.isFormData(e) && j.isFunction(e.entries)) {
    const r = {};
    return j.forEachEntry(e, (n, i) => {
      t(i3(n), i, r, 0);
    }), r;
  }
  return null;
}
function s3(e, t, r) {
  if (j.isString(e))
    try {
      return (t || JSON.parse)(e), j.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const ep = {
  transitional: iw,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, s = j.isObject(t);
    if (s && j.isHTMLForm(t) && (t = new FormData(t)), j.isFormData(t))
      return i ? JSON.stringify(ow(t)) : t;
    if (j.isArrayBuffer(t) || j.isBuffer(t) || j.isStream(t) || j.isFile(t) || j.isBlob(t) || j.isReadableStream(t))
      return t;
    if (j.isArrayBufferView(t))
      return t.buffer;
    if (j.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return a3(t, this.formSerializer).toString();
      if ((u = j.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return gu(
          u ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return s || i ? (r.setContentType("application/json", !1), s3(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || ep.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
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
    FormData: zt.classes.FormData,
    Blob: zt.classes.Blob
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
  ep.headers[e] = {};
});
const tp = ep, l3 = j.toObjectSet([
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
]), u3 = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(l) {
    i = l.indexOf(":"), r = l.substring(0, i).trim().toLowerCase(), n = l.substring(i + 1).trim(), !(!r || t[r] && l3[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Nv = Symbol("internals");
function So(e) {
  return e && String(e).trim().toLowerCase();
}
function El(e) {
  return e === !1 || e == null ? e : j.isArray(e) ? e.map(El) : String(e);
}
function c3(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const f3 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function hf(e, t, r, n, i) {
  if (j.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!j.isString(t)) {
    if (j.isString(n))
      return t.indexOf(n) !== -1;
    if (j.isRegExp(n))
      return n.test(t);
  }
}
function d3(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function p3(e, t) {
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
class mu {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function s(u, f, p) {
      const h = So(f);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const m = j.findKey(i, h);
      (!m || i[m] === void 0 || p === !0 || p === void 0 && i[m] !== !1) && (i[m || f] = El(u));
    }
    const l = (u, f) => j.forEach(u, (p, h) => s(p, h, f));
    if (j.isPlainObject(t) || t instanceof this.constructor)
      l(t, r);
    else if (j.isString(t) && (t = t.trim()) && !f3(t))
      l(u3(t), r);
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
    if (t = So(t), t) {
      const n = j.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return c3(i);
        if (j.isFunction(r))
          return r.call(this, i, n);
        if (j.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = So(t), t) {
      const n = j.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || hf(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function s(l) {
      if (l = So(l), l) {
        const u = j.findKey(n, l);
        u && (!r || hf(n, n[u], u, r)) && (delete n[u], i = !0);
      }
    }
    return j.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || hf(this, this[s], s, t, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return j.forEach(this, (i, s) => {
      const l = j.findKey(n, s);
      if (l) {
        r[l] = El(i), delete r[s];
        return;
      }
      const u = t ? d3(s) : String(s).trim();
      u !== s && delete r[s], r[u] = El(i), n[u] = !0;
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
    const n = (this[Nv] = this[Nv] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(l) {
      const u = So(l);
      n[u] || (p3(i, l), n[u] = !0);
    }
    return j.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
mu.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
j.reduceDescriptors(mu.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
j.freezeMethods(mu);
const Ar = mu;
function gf(e, t) {
  const r = this || tp, n = t || r, i = Ar.from(n.headers);
  let s = n.data;
  return j.forEach(e, function(u) {
    s = u.call(r, s, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), s;
}
function sw(e) {
  return !!(e && e.__CANCEL__);
}
function Wi(e, t, r) {
  Re.call(this, e ?? "canceled", Re.ERR_CANCELED, t, r), this.name = "CanceledError";
}
j.inherits(Wi, Re, {
  __CANCEL__: !0
});
function lw(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new Re(
    "Request failed with status code " + r.status,
    [Re.ERR_BAD_REQUEST, Re.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function h3(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function g3(e, t) {
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
    const S = h && p - h;
    return S ? Math.round(v * 1e3 / S) : void 0;
  };
}
function m3(e, t) {
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
const Ml = (e, t, r = 3) => {
  let n = 0;
  const i = g3(50, 250);
  return m3((s) => {
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
}, kv = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Dv = (e) => (...t) => j.asap(() => e(...t)), v3 = zt.hasStandardBrowserEnv ? ((e, t) => (r) => (r = new URL(r, zt.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(zt.origin),
  zt.navigator && /(msie|trident)/i.test(zt.navigator.userAgent)
) : () => !0, y3 = zt.hasStandardBrowserEnv ? (
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
function b3(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function E3(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function uw(e, t, r) {
  let n = !b3(t);
  return e && (n || r == !1) ? E3(e, t) : t;
}
const Mv = (e) => e instanceof Ar ? { ...e } : e;
function Ua(e, t) {
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
    headers: (p, h, m) => i(Mv(p), Mv(h), m, !0)
  };
  return j.forEach(Object.keys(Object.assign({}, e, t)), function(h) {
    const m = f[h] || i, v = m(e[h], t[h], h);
    j.isUndefined(v) && m !== u || (r[h] = v);
  }), r;
}
const cw = (e) => {
  const t = Ua({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: s, headers: l, auth: u } = t;
  t.headers = l = Ar.from(l), t.url = aw(uw(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), u && l.set(
    "Authorization",
    "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))
  );
  let f;
  if (j.isFormData(r)) {
    if (zt.hasStandardBrowserEnv || zt.hasStandardBrowserWebWorkerEnv)
      l.setContentType(void 0);
    else if ((f = l.getContentType()) !== !1) {
      const [p, ...h] = f ? f.split(";").map((m) => m.trim()).filter(Boolean) : [];
      l.setContentType([p || "multipart/form-data", ...h].join("; "));
    }
  }
  if (zt.hasStandardBrowserEnv && (n && j.isFunction(n) && (n = n(t)), n || n !== !1 && v3(t.url))) {
    const p = i && s && y3.read(s);
    p && l.set(i, p);
  }
  return t;
}, w3 = typeof XMLHttpRequest < "u", S3 = w3 && function(e) {
  return new Promise(function(r, n) {
    const i = cw(e);
    let s = i.data;
    const l = Ar.from(i.headers).normalize();
    let { responseType: u, onUploadProgress: f, onDownloadProgress: p } = i, h, m, v, S, O;
    function T() {
      S && S(), O && O(), i.cancelToken && i.cancelToken.unsubscribe(h), i.signal && i.signal.removeEventListener("abort", h);
    }
    let _ = new XMLHttpRequest();
    _.open(i.method.toUpperCase(), i.url, !0), _.timeout = i.timeout;
    function C() {
      if (!_)
        return;
      const k = Ar.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), R = {
        data: !u || u === "text" || u === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: k,
        config: e,
        request: _
      };
      lw(function(x) {
        r(x), T();
      }, function(x) {
        n(x), T();
      }, R), _ = null;
    }
    "onloadend" in _ ? _.onloadend = C : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(C);
    }, _.onabort = function() {
      _ && (n(new Re("Request aborted", Re.ECONNABORTED, e, _)), _ = null);
    }, _.onerror = function() {
      n(new Re("Network Error", Re.ERR_NETWORK, e, _)), _ = null;
    }, _.ontimeout = function() {
      let U = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const R = i.transitional || iw;
      i.timeoutErrorMessage && (U = i.timeoutErrorMessage), n(new Re(
        U,
        R.clarifyTimeoutError ? Re.ETIMEDOUT : Re.ECONNABORTED,
        e,
        _
      )), _ = null;
    }, s === void 0 && l.setContentType(null), "setRequestHeader" in _ && j.forEach(l.toJSON(), function(U, R) {
      _.setRequestHeader(R, U);
    }), j.isUndefined(i.withCredentials) || (_.withCredentials = !!i.withCredentials), u && u !== "json" && (_.responseType = i.responseType), p && ([v, O] = Ml(p, !0), _.addEventListener("progress", v)), f && _.upload && ([m, S] = Ml(f), _.upload.addEventListener("progress", m), _.upload.addEventListener("loadend", S)), (i.cancelToken || i.signal) && (h = (k) => {
      _ && (n(!k || k.type ? new Wi(null, e, _) : k), _.abort(), _ = null);
    }, i.cancelToken && i.cancelToken.subscribe(h), i.signal && (i.signal.aborted ? h() : i.signal.addEventListener("abort", h)));
    const M = h3(i.url);
    if (M && zt.protocols.indexOf(M) === -1) {
      n(new Re("Unsupported protocol " + M + ":", Re.ERR_BAD_REQUEST, e));
      return;
    }
    _.send(s || null);
  });
}, _3 = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), i;
    const s = function(p) {
      if (!i) {
        i = !0, u();
        const h = p instanceof Error ? p : this.reason;
        n.abort(h instanceof Re ? h : new Wi(h instanceof Error ? h.message : h));
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
}, O3 = _3, T3 = function* (e, t) {
  let r = e.byteLength;
  if (!t || r < t) {
    yield e;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + t, yield e.slice(n, i), n = i;
}, x3 = async function* (e, t) {
  for await (const r of P3(e))
    yield* T3(r, t);
}, P3 = async function* (e) {
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
}, Lv = (e, t, r, n) => {
  const i = x3(e, t);
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
}, vu = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", fw = vu && typeof ReadableStream == "function", C3 = vu && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), dw = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, A3 = fw && dw(() => {
  let e = !1;
  const t = new Request(zt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Fv = 64 * 1024, md = fw && dw(() => j.isReadableStream(new Response("").body)), Ll = {
  stream: md && ((e) => e.body)
};
vu && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ll[t] && (Ll[t] = j.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new Re(`Response type '${t}' is not supported`, Re.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const $3 = async (e) => {
  if (e == null)
    return 0;
  if (j.isBlob(e))
    return e.size;
  if (j.isSpecCompliantForm(e))
    return (await new Request(zt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (j.isArrayBufferView(e) || j.isArrayBuffer(e))
    return e.byteLength;
  if (j.isURLSearchParams(e) && (e = e + ""), j.isString(e))
    return (await C3(e)).byteLength;
}, R3 = async (e, t) => {
  const r = j.toFiniteNumber(e.getContentLength());
  return r ?? $3(t);
}, I3 = vu && (async (e) => {
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
  } = cw(e);
  p = p ? (p + "").toLowerCase() : "text";
  let S = O3([i, s && s.toAbortSignal()], l), O;
  const T = S && S.unsubscribe && (() => {
    S.unsubscribe();
  });
  let _;
  try {
    if (f && A3 && r !== "get" && r !== "head" && (_ = await R3(h, n)) !== 0) {
      let R = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), F;
      if (j.isFormData(n) && (F = R.headers.get("content-type")) && h.setContentType(F), R.body) {
        const [x, A] = kv(
          _,
          Ml(Dv(f))
        );
        n = Lv(R.body, Fv, x, A);
      }
    }
    j.isString(m) || (m = m ? "include" : "omit");
    const C = "credentials" in Request.prototype;
    O = new Request(t, {
      ...v,
      signal: S,
      method: r.toUpperCase(),
      headers: h.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: C ? m : void 0
    });
    let M = await fetch(O, v);
    const k = md && (p === "stream" || p === "response");
    if (md && (u || k && T)) {
      const R = {};
      ["status", "statusText", "headers"].forEach((I) => {
        R[I] = M[I];
      });
      const F = j.toFiniteNumber(M.headers.get("content-length")), [x, A] = u && kv(
        F,
        Ml(Dv(u), !0)
      ) || [];
      M = new Response(
        Lv(M.body, Fv, x, () => {
          A && A(), T && T();
        }),
        R
      );
    }
    p = p || "text";
    let U = await Ll[j.findKey(Ll, p) || "text"](M, e);
    return !k && T && T(), await new Promise((R, F) => {
      lw(R, F, {
        data: U,
        headers: Ar.from(M.headers),
        status: M.status,
        statusText: M.statusText,
        config: e,
        request: O
      });
    });
  } catch (C) {
    throw T && T(), C && C.name === "TypeError" && /Load failed|fetch/i.test(C.message) ? Object.assign(
      new Re("Network Error", Re.ERR_NETWORK, e, O),
      {
        cause: C.cause || C
      }
    ) : Re.from(C, C && C.code, e, O);
  }
}), vd = {
  http: WU,
  xhr: S3,
  fetch: I3
};
j.forEach(vd, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Bv = (e) => `- ${e}`, N3 = (e) => j.isFunction(e) || e === null || e === !1, pw = {
  getAdapter: (e) => {
    e = j.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const i = {};
    for (let s = 0; s < t; s++) {
      r = e[s];
      let l;
      if (n = r, !N3(r) && (n = vd[(l = String(r)).toLowerCase()], n === void 0))
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
` + s.map(Bv).join(`
`) : " " + Bv(s[0]) : "as no adapter specified";
      throw new Re(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: vd
};
function mf(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Wi(null, e);
}
function Uv(e) {
  return mf(e), e.headers = Ar.from(e.headers), e.data = gf.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), pw.getAdapter(e.adapter || tp.adapter)(e).then(function(n) {
    return mf(e), n.data = gf.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Ar.from(n.headers), n;
  }, function(n) {
    return sw(n) || (mf(e), n && n.response && (n.response.data = gf.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Ar.from(n.response.headers))), Promise.reject(n);
  });
}
const hw = "1.10.0", yu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  yu[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const zv = {};
yu.transitional = function(t, r, n) {
  function i(s, l) {
    return "[Axios v" + hw + "] Transitional option '" + s + "'" + l + (n ? ". " + n : "");
  }
  return (s, l, u) => {
    if (t === !1)
      throw new Re(
        i(l, " has been removed" + (r ? " in " + r : "")),
        Re.ERR_DEPRECATED
      );
    return r && !zv[l] && (zv[l] = !0, console.warn(
      i(
        l,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, l, u) : !0;
  };
};
yu.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function k3(e, t, r) {
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
const wl = {
  assertOptions: k3,
  validators: yu
}, Fr = wl.validators;
class Fl {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Iv(),
      response: new Iv()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Ua(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: s } = r;
    n !== void 0 && wl.assertOptions(n, {
      silentJSONParsing: Fr.transitional(Fr.boolean),
      forcedJSONParsing: Fr.transitional(Fr.boolean),
      clarifyTimeoutError: Fr.transitional(Fr.boolean)
    }, !1), i != null && (j.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : wl.assertOptions(i, {
      encode: Fr.function,
      serialize: Fr.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), wl.assertOptions(r, {
      baseUrl: Fr.spelling("baseURL"),
      withXsrfToken: Fr.spelling("withXSRFToken")
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
    ), r.headers = Ar.concat(l, s);
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
      const O = [Uv.bind(this), void 0];
      for (O.unshift.apply(O, u), O.push.apply(O, p), v = O.length, h = Promise.resolve(r); m < v; )
        h = h.then(O[m++], O[m++]);
      return h;
    }
    v = u.length;
    let S = r;
    for (m = 0; m < v; ) {
      const O = u[m++], T = u[m++];
      try {
        S = O(S);
      } catch (_) {
        T.call(this, _);
        break;
      }
    }
    try {
      h = Uv.call(this, S);
    } catch (O) {
      return Promise.reject(O);
    }
    for (m = 0, v = p.length; m < v; )
      h = h.then(p[m++], p[m++]);
    return h;
  }
  getUri(t) {
    t = Ua(this.defaults, t);
    const r = uw(t.baseURL, t.url, t.allowAbsoluteUrls);
    return aw(r, t.params, t.paramsSerializer);
  }
}
j.forEach(["delete", "get", "head", "options"], function(t) {
  Fl.prototype[t] = function(r, n) {
    return this.request(Ua(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
j.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, l, u) {
      return this.request(Ua(u || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: l
      }));
    };
  }
  Fl.prototype[t] = r(), Fl.prototype[t + "Form"] = r(!0);
});
const Sl = Fl;
class rp {
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
      n.reason || (n.reason = new Wi(s, l, u), r(n.reason));
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
      token: new rp(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const D3 = rp;
function M3(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function L3(e) {
  return j.isObject(e) && e.isAxiosError === !0;
}
const yd = {
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
Object.entries(yd).forEach(([e, t]) => {
  yd[t] = e;
});
const F3 = yd;
function gw(e) {
  const t = new Sl(e), r = GE(Sl.prototype.request, t);
  return j.extend(r, Sl.prototype, t, { allOwnKeys: !0 }), j.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return gw(Ua(e, i));
  }, r;
}
const St = gw(tp);
St.Axios = Sl;
St.CanceledError = Wi;
St.CancelToken = D3;
St.isCancel = sw;
St.VERSION = hw;
St.toFormData = gu;
St.AxiosError = Re;
St.Cancel = St.CanceledError;
St.all = function(t) {
  return Promise.all(t);
};
St.spread = M3;
St.isAxiosError = L3;
St.mergeConfig = Ua;
St.AxiosHeaders = Ar;
St.formToJSON = (e) => ow(j.isHTMLForm(e) ? new FormData(e) : e);
St.getAdapter = pw.getAdapter;
St.HttpStatusCode = F3;
St.default = St;
const vf = St;
var B3 = ta, U3 = In, z3 = "[object Symbol]";
function q3(e) {
  return typeof e == "symbol" || U3(e) && B3(e) == z3;
}
var np = q3, j3 = Rr, H3 = np, W3 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, G3 = /^\w*$/;
function V3(e, t) {
  if (j3(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || H3(e) ? !0 : G3.test(e) || !W3.test(e) || t != null && e in Object(t);
}
var Q3 = V3, K3 = Ga, Y3 = K3(Object, "create"), bu = Y3, qv = bu;
function X3() {
  this.__data__ = qv ? qv(null) : {}, this.size = 0;
}
var J3 = X3;
function Z3(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ez = Z3, tz = bu, rz = "__lodash_hash_undefined__", nz = Object.prototype, az = nz.hasOwnProperty;
function iz(e) {
  var t = this.__data__;
  if (tz) {
    var r = t[e];
    return r === rz ? void 0 : r;
  }
  return az.call(t, e) ? t[e] : void 0;
}
var oz = iz, sz = bu, lz = Object.prototype, uz = lz.hasOwnProperty;
function cz(e) {
  var t = this.__data__;
  return sz ? t[e] !== void 0 : uz.call(t, e);
}
var fz = cz, dz = bu, pz = "__lodash_hash_undefined__";
function hz(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = dz && t === void 0 ? pz : t, this;
}
var gz = hz, mz = J3, vz = ez, yz = oz, bz = fz, Ez = gz;
function Gi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Gi.prototype.clear = mz;
Gi.prototype.delete = vz;
Gi.prototype.get = yz;
Gi.prototype.has = bz;
Gi.prototype.set = Ez;
var wz = Gi;
function Sz() {
  this.__data__ = [], this.size = 0;
}
var _z = Sz;
function Oz(e, t) {
  return e === t || e !== e && t !== t;
}
var ap = Oz, Tz = ap;
function xz(e, t) {
  for (var r = e.length; r--; )
    if (Tz(e[r][0], t))
      return r;
  return -1;
}
var Eu = xz, Pz = Eu, Cz = Array.prototype, Az = Cz.splice;
function $z(e) {
  var t = this.__data__, r = Pz(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Az.call(t, r, 1), --this.size, !0;
}
var Rz = $z, Iz = Eu;
function Nz(e) {
  var t = this.__data__, r = Iz(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var kz = Nz, Dz = Eu;
function Mz(e) {
  return Dz(this.__data__, e) > -1;
}
var Lz = Mz, Fz = Eu;
function Bz(e, t) {
  var r = this.__data__, n = Fz(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Uz = Bz, zz = _z, qz = Rz, jz = kz, Hz = Lz, Wz = Uz;
function Vi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Vi.prototype.clear = zz;
Vi.prototype.delete = qz;
Vi.prototype.get = jz;
Vi.prototype.has = Hz;
Vi.prototype.set = Wz;
var wu = Vi, jv = wz, Gz = wu, Vz = Gd;
function Qz() {
  this.size = 0, this.__data__ = {
    hash: new jv(),
    map: new (Vz || Gz)(),
    string: new jv()
  };
}
var Kz = Qz;
function Yz(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Xz = Yz, Jz = Xz;
function Zz(e, t) {
  var r = e.__data__;
  return Jz(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Su = Zz, eq = Su;
function tq(e) {
  var t = eq(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var rq = tq, nq = Su;
function aq(e) {
  return nq(this, e).get(e);
}
var iq = aq, oq = Su;
function sq(e) {
  return oq(this, e).has(e);
}
var lq = sq, uq = Su;
function cq(e, t) {
  var r = uq(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var fq = cq, dq = Kz, pq = rq, hq = iq, gq = lq, mq = fq;
function Qi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Qi.prototype.clear = dq;
Qi.prototype.delete = pq;
Qi.prototype.get = hq;
Qi.prototype.has = gq;
Qi.prototype.set = mq;
var mw = Qi, vw = mw, vq = "Expected a function";
function ip(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(vq);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var l = e.apply(this, n);
    return r.cache = s.set(i, l) || s, l;
  };
  return r.cache = new (ip.Cache || vw)(), r;
}
ip.Cache = vw;
var yq = ip, bq = yq, Eq = 500;
function wq(e) {
  var t = bq(e, function(n) {
    return r.size === Eq && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Sq = wq, _q = Sq, Oq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Tq = /\\(\\)?/g, xq = _q(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Oq, function(r, n, i, s) {
    t.push(i ? s.replace(Tq, "$1") : n || r);
  }), t;
}), Pq = xq;
function Cq(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Aq = Cq, Hv = ds, $q = Aq, Rq = Rr, Iq = np, Nq = 1 / 0, Wv = Hv ? Hv.prototype : void 0, Gv = Wv ? Wv.toString : void 0;
function yw(e) {
  if (typeof e == "string")
    return e;
  if (Rq(e))
    return $q(e, yw) + "";
  if (Iq(e))
    return Gv ? Gv.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Nq ? "-0" : t;
}
var kq = yw, Dq = kq;
function Mq(e) {
  return e == null ? "" : Dq(e);
}
var Lq = Mq, Fq = Rr, Bq = Q3, Uq = Pq, zq = Lq;
function qq(e, t) {
  return Fq(e) ? e : Bq(e, t) ? [e] : Uq(zq(e));
}
var _u = qq, jq = np, Hq = 1 / 0;
function Wq(e) {
  if (typeof e == "string" || jq(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Hq ? "-0" : t;
}
var op = Wq, Gq = _u, Vq = op;
function Qq(e, t) {
  t = Gq(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Vq(t[r++])];
  return r && r == n ? e : void 0;
}
var bw = Qq, Kq = bw;
function Yq(e, t, r) {
  var n = e == null ? void 0 : Kq(e, t);
  return n === void 0 ? r : n;
}
var Xq = Yq;
const xo = /* @__PURE__ */ $t(Xq);
function Jq(e, t) {
  return e != null && t in Object(e);
}
var Zq = Jq, ej = 9007199254740991, tj = /^(?:0|[1-9]\d*)$/;
function rj(e, t) {
  var r = typeof e;
  return t = t ?? ej, !!t && (r == "number" || r != "symbol" && tj.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ou = rj, nj = _u, aj = uu, ij = Rr, oj = Ou, sj = Vd, lj = op;
function uj(e, t, r) {
  t = nj(t, e);
  for (var n = -1, i = t.length, s = !1; ++n < i; ) {
    var l = lj(t[n]);
    if (!(s = e != null && r(e, l)))
      break;
    e = e[l];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && sj(i) && oj(l, i) && (ij(e) || aj(e)));
}
var cj = uj, fj = Zq, dj = cj;
function pj(e, t) {
  return e != null && dj(e, t, fj);
}
var Ew = pj;
const hj = /* @__PURE__ */ $t(Ew);
var Ki = TypeError;
const gj = {}, mj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gj
}, Symbol.toStringTag, { value: "Module" })), vj = /* @__PURE__ */ bA(mj);
var sp = typeof Map == "function" && Map.prototype, yf = Object.getOwnPropertyDescriptor && sp ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Bl = sp && yf && typeof yf.get == "function" ? yf.get : null, Vv = sp && Map.prototype.forEach, lp = typeof Set == "function" && Set.prototype, bf = Object.getOwnPropertyDescriptor && lp ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Ul = lp && bf && typeof bf.get == "function" ? bf.get : null, Qv = lp && Set.prototype.forEach, yj = typeof WeakMap == "function" && WeakMap.prototype, $o = yj ? WeakMap.prototype.has : null, bj = typeof WeakSet == "function" && WeakSet.prototype, Ro = bj ? WeakSet.prototype.has : null, Ej = typeof WeakRef == "function" && WeakRef.prototype, Kv = Ej ? WeakRef.prototype.deref : null, wj = Boolean.prototype.valueOf, Sj = Object.prototype.toString, _j = Function.prototype.toString, Oj = String.prototype.match, up = String.prototype.slice, Hn = String.prototype.replace, Tj = String.prototype.toUpperCase, Yv = String.prototype.toLowerCase, ww = RegExp.prototype.test, Xv = Array.prototype.concat, qr = Array.prototype.join, xj = Array.prototype.slice, Jv = Math.floor, bd = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Ef = Object.getOwnPropertySymbols, Ed = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Ii = typeof Symbol == "function" && typeof Symbol.iterator == "object", Io = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Ii || "symbol") ? Symbol.toStringTag : null, Sw = Object.prototype.propertyIsEnumerable, Zv = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function ey(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || ww.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -Jv(-e) : Jv(e);
    if (n !== e) {
      var i = String(n), s = up.call(t, i.length + 1);
      return Hn.call(i, r, "$&_") + "." + Hn.call(Hn.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Hn.call(t, r, "$&_");
}
var wd = vj, ty = wd.custom, ry = Tw(ty) ? ty : null, _w = {
  __proto__: null,
  double: '"',
  single: "'"
}, Pj = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, Tu = function e(t, r, n, i) {
  var s = r || {};
  if (cn(s, "quoteStyle") && !cn(_w, s.quoteStyle))
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (cn(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var l = cn(s, "customInspect") ? s.customInspect : !0;
  if (typeof l != "boolean" && l !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (cn(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (cn(s, "numericSeparator") && typeof s.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var u = s.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return Pw(t, s);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var f = String(t);
    return u ? ey(t, f) : f;
  }
  if (typeof t == "bigint") {
    var p = String(t) + "n";
    return u ? ey(t, p) : p;
  }
  var h = typeof s.depth > "u" ? 5 : s.depth;
  if (typeof n > "u" && (n = 0), n >= h && h > 0 && typeof t == "object")
    return Sd(t) ? "[Array]" : "[Object]";
  var m = Wj(s, n);
  if (typeof i > "u")
    i = [];
  else if (xw(i, t) >= 0)
    return "[Circular]";
  function v(W, le, Ce) {
    if (le && (i = xj.call(i), i.push(le)), Ce) {
      var Te = {
        depth: s.depth
      };
      return cn(s, "quoteStyle") && (Te.quoteStyle = s.quoteStyle), e(W, Te, n + 1, i);
    }
    return e(W, s, n + 1, i);
  }
  if (typeof t == "function" && !ny(t)) {
    var S = Mj(t), O = pl(t, v);
    return "[Function" + (S ? ": " + S : " (anonymous)") + "]" + (O.length > 0 ? " { " + qr.call(O, ", ") + " }" : "");
  }
  if (Tw(t)) {
    var T = Ii ? Hn.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ed.call(t);
    return typeof t == "object" && !Ii ? _o(T) : T;
  }
  if (qj(t)) {
    for (var _ = "<" + Yv.call(String(t.nodeName)), C = t.attributes || [], M = 0; M < C.length; M++)
      _ += " " + C[M].name + "=" + Ow(Cj(C[M].value), "double", s);
    return _ += ">", t.childNodes && t.childNodes.length && (_ += "..."), _ += "</" + Yv.call(String(t.nodeName)) + ">", _;
  }
  if (Sd(t)) {
    if (t.length === 0)
      return "[]";
    var k = pl(t, v);
    return m && !Hj(k) ? "[" + _d(k, m) + "]" : "[ " + qr.call(k, ", ") + " ]";
  }
  if ($j(t)) {
    var U = pl(t, v);
    return !("cause" in Error.prototype) && "cause" in t && !Sw.call(t, "cause") ? "{ [" + String(t) + "] " + qr.call(Xv.call("[cause]: " + v(t.cause), U), ", ") + " }" : U.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + qr.call(U, ", ") + " }";
  }
  if (typeof t == "object" && l) {
    if (ry && typeof t[ry] == "function" && wd)
      return wd(t, { depth: h - n });
    if (l !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (Lj(t)) {
    var R = [];
    return Vv && Vv.call(t, function(W, le) {
      R.push(v(le, t, !0) + " => " + v(W, t));
    }), ay("Map", Bl.call(t), R, m);
  }
  if (Uj(t)) {
    var F = [];
    return Qv && Qv.call(t, function(W) {
      F.push(v(W, t));
    }), ay("Set", Ul.call(t), F, m);
  }
  if (Fj(t))
    return wf("WeakMap");
  if (zj(t))
    return wf("WeakSet");
  if (Bj(t))
    return wf("WeakRef");
  if (Ij(t))
    return _o(v(Number(t)));
  if (kj(t))
    return _o(v(bd.call(t)));
  if (Nj(t))
    return _o(wj.call(t));
  if (Rj(t))
    return _o(v(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && t === globalThis || typeof xr < "u" && t === xr)
    return "{ [object globalThis] }";
  if (!Aj(t) && !ny(t)) {
    var x = pl(t, v), A = Zv ? Zv(t) === Object.prototype : t instanceof Object || t.constructor === Object, I = t instanceof Object ? "" : "null prototype", B = !A && Io && Object(t) === t && Io in t ? up.call(na(t), 8, -1) : I ? "Object" : "", G = A || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", X = G + (B || I ? "[" + qr.call(Xv.call([], B || [], I || []), ": ") + "] " : "");
    return x.length === 0 ? X + "{}" : m ? X + "{" + _d(x, m) + "}" : X + "{ " + qr.call(x, ", ") + " }";
  }
  return String(t);
};
function Ow(e, t, r) {
  var n = r.quoteStyle || t, i = _w[n];
  return i + e + i;
}
function Cj(e) {
  return Hn.call(String(e), /"/g, "&quot;");
}
function Va(e) {
  return !Io || !(typeof e == "object" && (Io in e || typeof e[Io] < "u"));
}
function Sd(e) {
  return na(e) === "[object Array]" && Va(e);
}
function Aj(e) {
  return na(e) === "[object Date]" && Va(e);
}
function ny(e) {
  return na(e) === "[object RegExp]" && Va(e);
}
function $j(e) {
  return na(e) === "[object Error]" && Va(e);
}
function Rj(e) {
  return na(e) === "[object String]" && Va(e);
}
function Ij(e) {
  return na(e) === "[object Number]" && Va(e);
}
function Nj(e) {
  return na(e) === "[object Boolean]" && Va(e);
}
function Tw(e) {
  if (Ii)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !Ed)
    return !1;
  try {
    return Ed.call(e), !0;
  } catch {
  }
  return !1;
}
function kj(e) {
  if (!e || typeof e != "object" || !bd)
    return !1;
  try {
    return bd.call(e), !0;
  } catch {
  }
  return !1;
}
var Dj = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function cn(e, t) {
  return Dj.call(e, t);
}
function na(e) {
  return Sj.call(e);
}
function Mj(e) {
  if (e.name)
    return e.name;
  var t = Oj.call(_j.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function xw(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function Lj(e) {
  if (!Bl || !e || typeof e != "object")
    return !1;
  try {
    Bl.call(e);
    try {
      Ul.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function Fj(e) {
  if (!$o || !e || typeof e != "object")
    return !1;
  try {
    $o.call(e, $o);
    try {
      Ro.call(e, Ro);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Bj(e) {
  if (!Kv || !e || typeof e != "object")
    return !1;
  try {
    return Kv.call(e), !0;
  } catch {
  }
  return !1;
}
function Uj(e) {
  if (!Ul || !e || typeof e != "object")
    return !1;
  try {
    Ul.call(e);
    try {
      Bl.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function zj(e) {
  if (!Ro || !e || typeof e != "object")
    return !1;
  try {
    Ro.call(e, Ro);
    try {
      $o.call(e, $o);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function qj(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Pw(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Pw(up.call(e, 0, t.maxStringLength), t) + n;
  }
  var i = Pj[t.quoteStyle || "single"];
  i.lastIndex = 0;
  var s = Hn.call(Hn.call(e, i, "\\$1"), /[\x00-\x1f]/g, jj);
  return Ow(s, "single", t);
}
function jj(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + Tj.call(t.toString(16));
}
function _o(e) {
  return "Object(" + e + ")";
}
function wf(e) {
  return e + " { ? }";
}
function ay(e, t, r, n) {
  var i = n ? _d(r, n) : qr.call(r, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function Hj(e) {
  for (var t = 0; t < e.length; t++)
    if (xw(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function Wj(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = qr.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: qr.call(Array(t + 1), r)
  };
}
function _d(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + qr.call(e, "," + r) + `
` + t.prev;
}
function pl(e, t) {
  var r = Sd(e), n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++)
      n[i] = cn(e, i) ? t(e[i], e) : "";
  }
  var s = typeof Ef == "function" ? Ef(e) : [], l;
  if (Ii) {
    l = {};
    for (var u = 0; u < s.length; u++)
      l["$" + s[u]] = s[u];
  }
  for (var f in e)
    cn(e, f) && (r && String(Number(f)) === f && f < e.length || Ii && l["$" + f] instanceof Symbol || (ww.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e))));
  if (typeof Ef == "function")
    for (var p = 0; p < s.length; p++)
      Sw.call(e, s[p]) && n.push("[" + t(s[p]) + "]: " + t(e[s[p]], e));
  return n;
}
var Gj = Tu, Vj = Ki, xu = function(e, t, r) {
  for (var n = e, i; (i = n.next) != null; n = i)
    if (i.key === t)
      return n.next = i.next, r || (i.next = /** @type {NonNullable<typeof list.next>} */
      e.next, e.next = i), i;
}, Qj = function(e, t) {
  if (e) {
    var r = xu(e, t);
    return r && r.value;
  }
}, Kj = function(e, t, r) {
  var n = xu(e, t);
  n ? n.value = r : e.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: t,
    next: e.next,
    value: r
  };
}, Yj = function(e, t) {
  return e ? !!xu(e, t) : !1;
}, Xj = function(e, t) {
  if (e)
    return xu(e, t, !0);
}, Jj = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new Vj("Side channel does not contain " + Gj(n));
    },
    delete: function(n) {
      var i = t && t.next, s = Xj(t, n);
      return s && i && i === s && (t = void 0), !!s;
    },
    get: function(n) {
      return Qj(t, n);
    },
    has: function(n) {
      return Yj(t, n);
    },
    set: function(n, i) {
      t || (t = {
        next: void 0
      }), Kj(
        /** @type {NonNullable<typeof $o>} */
        t,
        n,
        i
      );
    }
  };
  return r;
}, Cw = Object, Zj = Error, eH = EvalError, tH = RangeError, rH = ReferenceError, nH = SyntaxError, aH = URIError, iH = Math.abs, oH = Math.floor, sH = Math.max, lH = Math.min, uH = Math.pow, cH = Math.round, fH = Number.isNaN || function(t) {
  return t !== t;
}, dH = fH, pH = function(t) {
  return dH(t) || t === 0 ? t : t < 0 ? -1 : 1;
}, hH = Object.getOwnPropertyDescriptor, _l = hH;
if (_l)
  try {
    _l([], "length");
  } catch {
    _l = null;
  }
var Aw = _l, Ol = Object.defineProperty || !1;
if (Ol)
  try {
    Ol({}, "a", { value: 1 });
  } catch {
    Ol = !1;
  }
var gH = Ol, Sf, iy;
function mH() {
  return iy || (iy = 1, Sf = function() {
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
  }), Sf;
}
var _f, oy;
function vH() {
  if (oy)
    return _f;
  oy = 1;
  var e = typeof Symbol < "u" && Symbol, t = mH();
  return _f = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, _f;
}
var Of, sy;
function $w() {
  return sy || (sy = 1, Of = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Of;
}
var Tf, ly;
function Rw() {
  if (ly)
    return Tf;
  ly = 1;
  var e = Cw;
  return Tf = e.getPrototypeOf || null, Tf;
}
var xf, uy;
function yH() {
  if (uy)
    return xf;
  uy = 1;
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
  return xf = function(f) {
    var p = this;
    if (typeof p != "function" || t.apply(p) !== n)
      throw new TypeError(e + p);
    for (var h = s(arguments, 1), m, v = function() {
      if (this instanceof m) {
        var C = p.apply(
          this,
          i(h, arguments)
        );
        return Object(C) === C ? C : this;
      }
      return p.apply(
        f,
        i(h, arguments)
      );
    }, S = r(0, p.length - h.length), O = [], T = 0; T < S; T++)
      O[T] = "$" + T;
    if (m = Function("binder", "return function (" + l(O, ",") + "){ return binder.apply(this,arguments); }")(v), p.prototype) {
      var _ = function() {
      };
      _.prototype = p.prototype, m.prototype = new _(), _.prototype = null;
    }
    return m;
  }, xf;
}
var Pf, cy;
function Pu() {
  if (cy)
    return Pf;
  cy = 1;
  var e = yH();
  return Pf = Function.prototype.bind || e, Pf;
}
var Cf, fy;
function cp() {
  return fy || (fy = 1, Cf = Function.prototype.call), Cf;
}
var Af, dy;
function Iw() {
  return dy || (dy = 1, Af = Function.prototype.apply), Af;
}
var bH = typeof Reflect < "u" && Reflect && Reflect.apply, EH = Pu(), wH = Iw(), SH = cp(), _H = bH, OH = _H || EH.call(SH, wH), TH = Pu(), xH = Ki, PH = cp(), CH = OH, Nw = function(t) {
  if (t.length < 1 || typeof t[0] != "function")
    throw new xH("a function is required");
  return CH(TH, PH, t);
}, $f, py;
function AH() {
  if (py)
    return $f;
  py = 1;
  var e = Nw, t = Aw, r;
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
  return $f = n && typeof n.get == "function" ? e([n.get]) : typeof s == "function" ? (
    /** @type {import('./get')} */
    function(u) {
      return s(u == null ? u : i(u));
    }
  ) : !1, $f;
}
var Rf, hy;
function $H() {
  if (hy)
    return Rf;
  hy = 1;
  var e = $w(), t = Rw(), r = AH();
  return Rf = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, Rf;
}
var If, gy;
function RH() {
  if (gy)
    return If;
  gy = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Pu();
  return If = r.call(e, t), If;
}
var Le, IH = Cw, NH = Zj, kH = eH, DH = tH, MH = rH, Ni = nH, yi = Ki, LH = aH, FH = iH, BH = oH, UH = sH, zH = lH, qH = uH, jH = cH, HH = pH, kw = Function, Nf = function(e) {
  try {
    return kw('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, ss = Aw, WH = gH, kf = function() {
  throw new yi();
}, GH = ss ? function() {
  try {
    return arguments.callee, kf;
  } catch {
    try {
      return ss(arguments, "callee").get;
    } catch {
      return kf;
    }
  }
}() : kf, ui = vH()(), It = $H(), VH = Rw(), QH = $w(), Dw = Iw(), hs = cp(), di = {}, KH = typeof Uint8Array > "u" || !It ? Le : It(Uint8Array), Ta = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? Le : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Le : ArrayBuffer,
  "%ArrayIteratorPrototype%": ui && It ? It([][Symbol.iterator]()) : Le,
  "%AsyncFromSyncIteratorPrototype%": Le,
  "%AsyncFunction%": di,
  "%AsyncGenerator%": di,
  "%AsyncGeneratorFunction%": di,
  "%AsyncIteratorPrototype%": di,
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
  "%Error%": NH,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": kH,
  "%Float16Array%": typeof Float16Array > "u" ? Le : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? Le : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? Le : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Le : FinalizationRegistry,
  "%Function%": kw,
  "%GeneratorFunction%": di,
  "%Int8Array%": typeof Int8Array > "u" ? Le : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? Le : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? Le : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": ui && It ? It(It([][Symbol.iterator]())) : Le,
  "%JSON%": typeof JSON == "object" ? JSON : Le,
  "%Map%": typeof Map > "u" ? Le : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !ui || !It ? Le : It((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": IH,
  "%Object.getOwnPropertyDescriptor%": ss,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? Le : Promise,
  "%Proxy%": typeof Proxy > "u" ? Le : Proxy,
  "%RangeError%": DH,
  "%ReferenceError%": MH,
  "%Reflect%": typeof Reflect > "u" ? Le : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? Le : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !ui || !It ? Le : It((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Le : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": ui && It ? It(""[Symbol.iterator]()) : Le,
  "%Symbol%": ui ? Symbol : Le,
  "%SyntaxError%": Ni,
  "%ThrowTypeError%": GH,
  "%TypedArray%": KH,
  "%TypeError%": yi,
  "%Uint8Array%": typeof Uint8Array > "u" ? Le : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Le : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? Le : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? Le : Uint32Array,
  "%URIError%": LH,
  "%WeakMap%": typeof WeakMap > "u" ? Le : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? Le : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? Le : WeakSet,
  "%Function.prototype.call%": hs,
  "%Function.prototype.apply%": Dw,
  "%Object.defineProperty%": WH,
  "%Object.getPrototypeOf%": VH,
  "%Math.abs%": FH,
  "%Math.floor%": BH,
  "%Math.max%": UH,
  "%Math.min%": zH,
  "%Math.pow%": qH,
  "%Math.round%": jH,
  "%Math.sign%": HH,
  "%Reflect.getPrototypeOf%": QH
};
if (It)
  try {
    null.error;
  } catch (e) {
    var YH = It(It(e));
    Ta["%Error.prototype%"] = YH;
  }
var XH = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Nf("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Nf("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Nf("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && It && (r = It(i.prototype));
  }
  return Ta[t] = r, r;
}, my = {
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
}, gs = Pu(), zl = RH(), JH = gs.call(hs, Array.prototype.concat), ZH = gs.call(Dw, Array.prototype.splice), vy = gs.call(hs, String.prototype.replace), ql = gs.call(hs, String.prototype.slice), e4 = gs.call(hs, RegExp.prototype.exec), t4 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, r4 = /\\(\\)?/g, n4 = function(t) {
  var r = ql(t, 0, 1), n = ql(t, -1);
  if (r === "%" && n !== "%")
    throw new Ni("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Ni("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return vy(t, t4, function(s, l, u, f) {
    i[i.length] = u ? vy(f, r4, "$1") : l || s;
  }), i;
}, a4 = function(t, r) {
  var n = t, i;
  if (zl(my, n) && (i = my[n], n = "%" + i[0] + "%"), zl(Ta, n)) {
    var s = Ta[n];
    if (s === di && (s = XH(n)), typeof s > "u" && !r)
      throw new yi("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: s
    };
  }
  throw new Ni("intrinsic " + t + " does not exist!");
}, fp = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new yi("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new yi('"allowMissing" argument must be a boolean');
  if (e4(/^%?[^%]*%?$/, t) === null)
    throw new Ni("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = n4(t), i = n.length > 0 ? n[0] : "", s = a4("%" + i + "%", r), l = s.name, u = s.value, f = !1, p = s.alias;
  p && (i = p[0], ZH(n, JH([0, 1], p)));
  for (var h = 1, m = !0; h < n.length; h += 1) {
    var v = n[h], S = ql(v, 0, 1), O = ql(v, -1);
    if ((S === '"' || S === "'" || S === "`" || O === '"' || O === "'" || O === "`") && S !== O)
      throw new Ni("property names with quotes must have matching quotes");
    if ((v === "constructor" || !m) && (f = !0), i += "." + v, l = "%" + i + "%", zl(Ta, l))
      u = Ta[l];
    else if (u != null) {
      if (!(v in u)) {
        if (!r)
          throw new yi("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (ss && h + 1 >= n.length) {
        var T = ss(u, v);
        m = !!T, m && "get" in T && !("originalValue" in T.get) ? u = T.get : u = u[v];
      } else
        m = zl(u, v), u = u[v];
      m && !f && (Ta[l] = u);
    }
  }
  return u;
}, Mw = fp, Lw = Nw, i4 = Lw([Mw("%String.prototype.indexOf%")]), Fw = function(t, r) {
  var n = (
    /** @type {(this: unknown, ...args: unknown[]) => unknown} */
    Mw(t, !!r)
  );
  return typeof n == "function" && i4(t, ".prototype.") > -1 ? Lw(
    /** @type {const} */
    [n]
  ) : n;
}, o4 = fp, ms = Fw, s4 = Tu, l4 = Ki, yy = o4("%Map%", !0), u4 = ms("Map.prototype.get", !0), c4 = ms("Map.prototype.set", !0), f4 = ms("Map.prototype.has", !0), d4 = ms("Map.prototype.delete", !0), p4 = ms("Map.prototype.size", !0), Bw = !!yy && /** @type {Exclude<import('.'), false>} */
function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new l4("Side channel does not contain " + s4(n));
    },
    delete: function(n) {
      if (t) {
        var i = d4(t, n);
        return p4(t) === 0 && (t = void 0), i;
      }
      return !1;
    },
    get: function(n) {
      if (t)
        return u4(t, n);
    },
    has: function(n) {
      return t ? f4(t, n) : !1;
    },
    set: function(n, i) {
      t || (t = new yy()), c4(t, n, i);
    }
  };
  return r;
}, h4 = fp, Cu = Fw, g4 = Tu, hl = Bw, m4 = Ki, ci = h4("%WeakMap%", !0), v4 = Cu("WeakMap.prototype.get", !0), y4 = Cu("WeakMap.prototype.set", !0), b4 = Cu("WeakMap.prototype.has", !0), E4 = Cu("WeakMap.prototype.delete", !0), w4 = ci ? (
  /** @type {Exclude<import('.'), false>} */
  function() {
    var t, r, n = {
      assert: function(i) {
        if (!n.has(i))
          throw new m4("Side channel does not contain " + g4(i));
      },
      delete: function(i) {
        if (ci && i && (typeof i == "object" || typeof i == "function")) {
          if (t)
            return E4(t, i);
        } else if (hl && r)
          return r.delete(i);
        return !1;
      },
      get: function(i) {
        return ci && i && (typeof i == "object" || typeof i == "function") && t ? v4(t, i) : r && r.get(i);
      },
      has: function(i) {
        return ci && i && (typeof i == "object" || typeof i == "function") && t ? b4(t, i) : !!r && r.has(i);
      },
      set: function(i, s) {
        ci && i && (typeof i == "object" || typeof i == "function") ? (t || (t = new ci()), y4(t, i, s)) : hl && (r || (r = hl()), r.set(i, s));
      }
    };
    return n;
  }
) : hl, S4 = Ki, _4 = Tu, O4 = Jj, T4 = Bw, x4 = w4, P4 = x4 || T4 || O4, C4 = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new S4("Side channel does not contain " + _4(n));
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
      t || (t = P4()), t.set(n, i);
    }
  };
  return r;
}, A4 = String.prototype.replace, $4 = /%20/g, Df = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, dp = {
  default: Df.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return A4.call(e, $4, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: Df.RFC1738,
  RFC3986: Df.RFC3986
}, R4 = dp, Mf = Object.prototype.hasOwnProperty, ya = Array.isArray, Br = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), I4 = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (ya(n)) {
      for (var i = [], s = 0; s < n.length; ++s)
        typeof n[s] < "u" && i.push(n[s]);
      r.obj[r.prop] = i;
    }
  }
}, Uw = function(t, r) {
  for (var n = r && r.plainObjects ? { __proto__: null } : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (n[i] = t[i]);
  return n;
}, N4 = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object" && typeof r != "function") {
    if (ya(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Mf.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var i = t;
  return ya(t) && !ya(r) && (i = Uw(t, n)), ya(t) && ya(r) ? (r.forEach(function(s, l) {
    if (Mf.call(t, l)) {
      var u = t[l];
      u && typeof u == "object" && s && typeof s == "object" ? t[l] = e(u, s, n) : t.push(s);
    } else
      t[l] = s;
  }), t) : Object.keys(r).reduce(function(s, l) {
    var u = r[l];
    return Mf.call(s, l) ? s[l] = e(s[l], u, n) : s[l] = u, s;
  }, i);
}, k4 = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, t);
}, D4 = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Lf = 1024, M4 = function(t, r, n, i, s) {
  if (t.length === 0)
    return t;
  var l = t;
  if (typeof t == "symbol" ? l = Symbol.prototype.toString.call(t) : typeof t != "string" && (l = String(t)), n === "iso-8859-1")
    return escape(l).replace(/%u[0-9a-f]{4}/gi, function(S) {
      return "%26%23" + parseInt(S.slice(2), 16) + "%3B";
    });
  for (var u = "", f = 0; f < l.length; f += Lf) {
    for (var p = l.length >= Lf ? l.slice(f, f + Lf) : l, h = [], m = 0; m < p.length; ++m) {
      var v = p.charCodeAt(m);
      if (v === 45 || v === 46 || v === 95 || v === 126 || v >= 48 && v <= 57 || v >= 65 && v <= 90 || v >= 97 && v <= 122 || s === R4.RFC1738 && (v === 40 || v === 41)) {
        h[h.length] = p.charAt(m);
        continue;
      }
      if (v < 128) {
        h[h.length] = Br[v];
        continue;
      }
      if (v < 2048) {
        h[h.length] = Br[192 | v >> 6] + Br[128 | v & 63];
        continue;
      }
      if (v < 55296 || v >= 57344) {
        h[h.length] = Br[224 | v >> 12] + Br[128 | v >> 6 & 63] + Br[128 | v & 63];
        continue;
      }
      m += 1, v = 65536 + ((v & 1023) << 10 | p.charCodeAt(m) & 1023), h[h.length] = Br[240 | v >> 18] + Br[128 | v >> 12 & 63] + Br[128 | v >> 6 & 63] + Br[128 | v & 63];
    }
    u += h.join("");
  }
  return u;
}, L4 = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var s = r[i], l = s.obj[s.prop], u = Object.keys(l), f = 0; f < u.length; ++f) {
      var p = u[f], h = l[p];
      typeof h == "object" && h !== null && n.indexOf(h) === -1 && (r.push({ obj: l, prop: p }), n.push(h));
    }
  return I4(r), t;
}, F4 = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, B4 = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, U4 = function(t, r) {
  return [].concat(t, r);
}, z4 = function(t, r) {
  if (ya(t)) {
    for (var n = [], i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  return r(t);
}, zw = {
  arrayToObject: Uw,
  assign: k4,
  combine: U4,
  compact: L4,
  decode: D4,
  encode: M4,
  isBuffer: B4,
  isRegExp: F4,
  maybeMap: z4,
  merge: N4
}, qw = C4, Tl = zw, No = dp, q4 = Object.prototype.hasOwnProperty, jw = {
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
}, zr = Array.isArray, j4 = Array.prototype.push, Hw = function(e, t) {
  j4.apply(e, zr(t) ? t : [t]);
}, H4 = Date.prototype.toISOString, by = No.default, xt = {
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
  encoder: Tl.encode,
  encodeValuesOnly: !1,
  filter: void 0,
  format: by,
  formatter: No.formatters[by],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return H4.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, W4 = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, Ff = {}, G4 = function e(t, r, n, i, s, l, u, f, p, h, m, v, S, O, T, _, C, M) {
  for (var k = t, U = M, R = 0, F = !1; (U = U.get(Ff)) !== void 0 && !F; ) {
    var x = U.get(t);
    if (R += 1, typeof x < "u") {
      if (x === R)
        throw new RangeError("Cyclic object value");
      F = !0;
    }
    typeof U.get(Ff) > "u" && (R = 0);
  }
  if (typeof h == "function" ? k = h(r, k) : k instanceof Date ? k = S(k) : n === "comma" && zr(k) && (k = Tl.maybeMap(k, function(K) {
    return K instanceof Date ? S(K) : K;
  })), k === null) {
    if (l)
      return p && !_ ? p(r, xt.encoder, C, "key", O) : r;
    k = "";
  }
  if (W4(k) || Tl.isBuffer(k)) {
    if (p) {
      var A = _ ? r : p(r, xt.encoder, C, "key", O);
      return [T(A) + "=" + T(p(k, xt.encoder, C, "value", O))];
    }
    return [T(r) + "=" + T(String(k))];
  }
  var I = [];
  if (typeof k > "u")
    return I;
  var B;
  if (n === "comma" && zr(k))
    _ && p && (k = Tl.maybeMap(k, p)), B = [{ value: k.length > 0 ? k.join(",") || null : void 0 }];
  else if (zr(h))
    B = h;
  else {
    var G = Object.keys(k);
    B = m ? G.sort(m) : G;
  }
  var X = f ? String(r).replace(/\./g, "%2E") : String(r), W = i && zr(k) && k.length === 1 ? X + "[]" : X;
  if (s && zr(k) && k.length === 0)
    return W + "[]";
  for (var le = 0; le < B.length; ++le) {
    var Ce = B[le], Te = typeof Ce == "object" && Ce && typeof Ce.value < "u" ? Ce.value : k[Ce];
    if (!(u && Te === null)) {
      var Ae = v && f ? String(Ce).replace(/\./g, "%2E") : String(Ce), qe = zr(k) ? typeof n == "function" ? n(W, Ae) : W : W + (v ? "." + Ae : "[" + Ae + "]");
      M.set(t, R);
      var ct = qw();
      ct.set(Ff, M), Hw(I, e(
        Te,
        qe,
        n,
        i,
        s,
        l,
        u,
        f,
        n === "comma" && _ && zr(k) ? null : p,
        h,
        m,
        v,
        S,
        O,
        T,
        _,
        C,
        ct
      ));
    }
  }
  return I;
}, V4 = function(t) {
  if (!t)
    return xt;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.encodeDotInKeys < "u" && typeof t.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || xt.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = No.default;
  if (typeof t.format < "u") {
    if (!q4.call(No.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var i = No.formatters[n], s = xt.filter;
  (typeof t.filter == "function" || zr(t.filter)) && (s = t.filter);
  var l;
  if (t.arrayFormat in jw ? l = t.arrayFormat : "indices" in t ? l = t.indices ? "indices" : "repeat" : l = xt.arrayFormat, "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = typeof t.allowDots > "u" ? t.encodeDotInKeys === !0 ? !0 : xt.allowDots : !!t.allowDots;
  return {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : xt.addQueryPrefix,
    allowDots: u,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : xt.allowEmptyArrays,
    arrayFormat: l,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : xt.charsetSentinel,
    commaRoundTrip: !!t.commaRoundTrip,
    delimiter: typeof t.delimiter > "u" ? xt.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : xt.encode,
    encodeDotInKeys: typeof t.encodeDotInKeys == "boolean" ? t.encodeDotInKeys : xt.encodeDotInKeys,
    encoder: typeof t.encoder == "function" ? t.encoder : xt.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : xt.encodeValuesOnly,
    filter: s,
    format: n,
    formatter: i,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : xt.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : xt.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : xt.strictNullHandling
  };
}, Q4 = function(e, t) {
  var r = e, n = V4(t), i, s;
  typeof n.filter == "function" ? (s = n.filter, r = s("", r)) : zr(n.filter) && (s = n.filter, i = s);
  var l = [];
  if (typeof r != "object" || r === null)
    return "";
  var u = jw[n.arrayFormat], f = u === "comma" && n.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var p = qw(), h = 0; h < i.length; ++h) {
    var m = i[h], v = r[m];
    n.skipNulls && v === null || Hw(l, G4(
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
  var S = l.join(n.delimiter), O = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? O += "utf8=%26%2310003%3B&" : O += "utf8=%E2%9C%93&"), S.length > 0 ? O + S : "";
}, za = zw, Od = Object.prototype.hasOwnProperty, Ey = Array.isArray, mt = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: za.decode,
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
}, K4 = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Ww = function(e, t, r) {
  if (e && typeof e == "string" && t.comma && e.indexOf(",") > -1)
    return e.split(",");
  if (t.throwOnLimitExceeded && r >= t.arrayLimit)
    throw new RangeError("Array limit exceeded. Only " + t.arrayLimit + " element" + (t.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
  return e;
}, Y4 = "utf8=%26%2310003%3B", X4 = "utf8=%E2%9C%93", J4 = function(t, r) {
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
      l[f].indexOf("utf8=") === 0 && (l[f] === X4 ? p = "utf-8" : l[f] === Y4 && (p = "iso-8859-1"), u = f, f = l.length);
  for (f = 0; f < l.length; ++f)
    if (f !== u) {
      var h = l[f], m = h.indexOf("]="), v = m === -1 ? h.indexOf("=") : m + 1, S, O;
      v === -1 ? (S = r.decoder(h, mt.decoder, p, "key"), O = r.strictNullHandling ? null : "") : (S = r.decoder(h.slice(0, v), mt.decoder, p, "key"), O = za.maybeMap(
        Ww(
          h.slice(v + 1),
          r,
          Ey(n[S]) ? n[S].length : 0
        ),
        function(_) {
          return r.decoder(_, mt.decoder, p, "value");
        }
      )), O && r.interpretNumericEntities && p === "iso-8859-1" && (O = K4(String(O))), h.indexOf("[]=") > -1 && (O = Ey(O) ? [O] : O);
      var T = Od.call(n, S);
      T && r.duplicates === "combine" ? n[S] = za.combine(n[S], O) : (!T || r.duplicates === "last") && (n[S] = O);
    }
  return n;
}, Z4 = function(e, t, r, n) {
  var i = 0;
  if (e.length > 0 && e[e.length - 1] === "[]") {
    var s = e.slice(0, -1).join("");
    i = Array.isArray(t) && t[s] ? t[s].length : 0;
  }
  for (var l = n ? t : Ww(t, r, i), u = e.length - 1; u >= 0; --u) {
    var f, p = e[u];
    if (p === "[]" && r.parseArrays)
      f = r.allowEmptyArrays && (l === "" || r.strictNullHandling && l === null) ? [] : za.combine([], l);
    else {
      f = r.plainObjects ? { __proto__: null } : {};
      var h = p.charAt(0) === "[" && p.charAt(p.length - 1) === "]" ? p.slice(1, -1) : p, m = r.decodeDotInKeys ? h.replace(/%2E/g, ".") : h, v = parseInt(m, 10);
      !r.parseArrays && m === "" ? f = { 0: l } : !isNaN(v) && p !== m && String(v) === m && v >= 0 && r.parseArrays && v <= r.arrayLimit ? (f = [], f[v] = l) : m !== "__proto__" && (f[m] = l);
    }
    l = f;
  }
  return l;
}, eW = function(t, r, n, i) {
  if (t) {
    var s = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, l = /(\[[^[\]]*])/, u = /(\[[^[\]]*])/g, f = n.depth > 0 && l.exec(s), p = f ? s.slice(0, f.index) : s, h = [];
    if (p) {
      if (!n.plainObjects && Od.call(Object.prototype, p) && !n.allowPrototypes)
        return;
      h.push(p);
    }
    for (var m = 0; n.depth > 0 && (f = u.exec(s)) !== null && m < n.depth; ) {
      if (m += 1, !n.plainObjects && Od.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      h.push(f[1]);
    }
    if (f) {
      if (n.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + n.depth + " and strictDepth is true");
      h.push("[" + s.slice(f.index) + "]");
    }
    return Z4(h, r, n, i);
  }
}, tW = function(t) {
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
    delimiter: typeof t.delimiter == "string" || za.isRegExp(t.delimiter) ? t.delimiter : mt.delimiter,
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
}, rW = function(e, t) {
  var r = tW(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? { __proto__: null } : {};
  for (var n = typeof e == "string" ? J4(e, r) : e, i = r.plainObjects ? { __proto__: null } : {}, s = Object.keys(n), l = 0; l < s.length; ++l) {
    var u = s[l], f = eW(u, n[u], r, typeof e == "string");
    i = za.merge(i, f, r);
  }
  return r.allowSparse === !0 ? i : za.compact(i);
}, nW = Q4, aW = rW, iW = dp, oW = {
  formats: iW,
  parse: aW,
  stringify: nW
};
const Yi = /* @__PURE__ */ $t(oW);
var sW = Ga, lW = function() {
  try {
    var e = sW(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Gw = lW, wy = Gw;
function uW(e, t, r) {
  t == "__proto__" && wy ? wy(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Vw = uW, cW = Vw, fW = ap, dW = Object.prototype, pW = dW.hasOwnProperty;
function hW(e, t, r) {
  var n = e[t];
  (!(pW.call(e, t) && fW(n, r)) || r === void 0 && !(t in e)) && cW(e, t, r);
}
var pp = hW, gW = pp, mW = Vw;
function vW(e, t, r, n) {
  var i = !r;
  r || (r = {});
  for (var s = -1, l = t.length; ++s < l; ) {
    var u = t[s], f = n ? n(r[u], e[u], u, r, e) : void 0;
    f === void 0 && (f = e[u]), i ? mW(r, u, f) : gW(r, u, f);
  }
  return r;
}
var vs = vW;
function yW(e) {
  return e;
}
var Qw = yW;
function bW(e, t, r) {
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
var EW = bW, wW = EW, Sy = Math.max;
function SW(e, t, r) {
  return t = Sy(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, s = Sy(n.length - t, 0), l = Array(s); ++i < s; )
      l[i] = n[t + i];
    i = -1;
    for (var u = Array(t + 1); ++i < t; )
      u[i] = n[i];
    return u[t] = r(l), wW(e, this, u);
  };
}
var Kw = SW;
function _W(e) {
  return function() {
    return e;
  };
}
var OW = _W, TW = OW, _y = Gw, xW = Qw, PW = _y ? function(e, t) {
  return _y(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: TW(t),
    writable: !0
  });
} : xW, CW = PW, AW = 800, $W = 16, RW = Date.now;
function IW(e) {
  var t = 0, r = 0;
  return function() {
    var n = RW(), i = $W - (n - r);
    if (r = n, i > 0) {
      if (++t >= AW)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var NW = IW, kW = CW, DW = NW, MW = DW(kW), Yw = MW, LW = Qw, FW = Kw, BW = Yw;
function UW(e, t) {
  return BW(FW(e, t, LW), e + "");
}
var zW = UW, qW = ap, jW = cu, HW = Ou, WW = ra;
function GW(e, t, r) {
  if (!WW(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? jW(r) && HW(t, r.length) : n == "string" && t in r) ? qW(r[t], e) : !1;
}
var VW = GW, QW = zW, KW = VW;
function YW(e) {
  return QW(function(t, r) {
    var n = -1, i = r.length, s = i > 1 ? r[i - 1] : void 0, l = i > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (i--, s) : void 0, l && KW(r[0], r[1], l) && (s = i < 3 ? void 0 : s, i = 1), t = Object(t); ++n < i; ) {
      var u = r[n];
      u && e(t, u, n, s);
    }
    return t;
  });
}
var XW = YW;
function JW(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var ZW = JW, e8 = ZW, t8 = uu, r8 = Rr, n8 = Qd, a8 = Ou, i8 = WE, o8 = Object.prototype, s8 = o8.hasOwnProperty;
function l8(e, t) {
  var r = r8(e), n = !r && t8(e), i = !r && !n && n8(e), s = !r && !n && !i && i8(e), l = r || n || i || s, u = l ? e8(e.length, String) : [], f = u.length;
  for (var p in e)
    (t || s8.call(e, p)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    a8(p, f))) && u.push(p);
  return u;
}
var Xw = l8;
function u8(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var c8 = u8, f8 = ra, d8 = su, p8 = c8, h8 = Object.prototype, g8 = h8.hasOwnProperty;
function m8(e) {
  if (!f8(e))
    return p8(e);
  var t = d8(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !g8.call(e, n)) || r.push(n);
  return r;
}
var v8 = m8, y8 = Xw, b8 = v8, E8 = cu;
function w8(e) {
  return E8(e) ? y8(e, !0) : b8(e);
}
var Au = w8, S8 = vs, _8 = XW, O8 = Au, T8 = _8(function(e, t) {
  S8(t, O8(t), e);
}), x8 = T8, P8 = x8;
const jl = /* @__PURE__ */ $t(P8);
function C8(e) {
  return e && e.length ? e[0] : void 0;
}
var A8 = C8;
const $8 = /* @__PURE__ */ $t(A8);
var R8 = pp, I8 = _u, N8 = Ou, Oy = ra, k8 = op;
function D8(e, t, r, n) {
  if (!Oy(e))
    return e;
  t = I8(t, e);
  for (var i = -1, s = t.length, l = s - 1, u = e; u != null && ++i < s; ) {
    var f = k8(t[i]), p = r;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return e;
    if (i != l) {
      var h = u[f];
      p = n ? n(h, f, u) : void 0, p === void 0 && (p = Oy(h) ? h : N8(t[i + 1]) ? [] : {});
    }
    R8(u, f, p), u = u[f];
  }
  return e;
}
var M8 = D8, L8 = bw, F8 = M8, B8 = _u;
function U8(e, t, r) {
  for (var n = -1, i = t.length, s = {}; ++n < i; ) {
    var l = t[n], u = L8(e, l);
    r(u, l) && F8(s, B8(l, e), u);
  }
  return s;
}
var z8 = U8, q8 = z8, j8 = Ew;
function H8(e, t) {
  return q8(e, t, function(r, n) {
    return j8(e, n);
  });
}
var W8 = H8;
function G8(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var hp = G8, Ty = ds, V8 = uu, Q8 = Rr, xy = Ty ? Ty.isConcatSpreadable : void 0;
function K8(e) {
  return Q8(e) || V8(e) || !!(xy && e && e[xy]);
}
var Y8 = K8, X8 = hp, J8 = Y8;
function Jw(e, t, r, n, i) {
  var s = -1, l = e.length;
  for (r || (r = J8), i || (i = []); ++s < l; ) {
    var u = e[s];
    t > 0 && r(u) ? t > 1 ? Jw(u, t - 1, r, n, i) : X8(i, u) : n || (i[i.length] = u);
  }
  return i;
}
var Z8 = Jw, eG = Z8;
function tG(e) {
  var t = e == null ? 0 : e.length;
  return t ? eG(e, 1) : [];
}
var rG = tG, nG = rG, aG = Kw, iG = Yw;
function oG(e) {
  return iG(aG(e, void 0, nG), e + "");
}
var sG = oG, lG = W8, uG = sG, cG = uG(function(e, t) {
  return e == null ? {} : lG(e, t);
}), fG = cG;
const dG = /* @__PURE__ */ $t(fG);
var pG = wu;
function hG() {
  this.__data__ = new pG(), this.size = 0;
}
var gG = hG;
function mG(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var vG = mG;
function yG(e) {
  return this.__data__.get(e);
}
var bG = yG;
function EG(e) {
  return this.__data__.has(e);
}
var wG = EG, SG = wu, _G = Gd, OG = mw, TG = 200;
function xG(e, t) {
  var r = this.__data__;
  if (r instanceof SG) {
    var n = r.__data__;
    if (!_G || n.length < TG - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new OG(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var PG = xG, CG = wu, AG = gG, $G = vG, RG = bG, IG = wG, NG = PG;
function Xi(e) {
  var t = this.__data__ = new CG(e);
  this.size = t.size;
}
Xi.prototype.clear = AG;
Xi.prototype.delete = $G;
Xi.prototype.get = RG;
Xi.prototype.has = IG;
Xi.prototype.set = NG;
var kG = Xi;
function DG(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var MG = DG, LG = Xw, FG = LE, BG = cu;
function UG(e) {
  return BG(e) ? LG(e) : FG(e);
}
var gp = UG, zG = vs, qG = gp;
function jG(e, t) {
  return e && zG(t, qG(t), e);
}
var HG = jG, WG = vs, GG = Au;
function VG(e, t) {
  return e && WG(t, GG(t), e);
}
var QG = VG, Hl = { exports: {} };
Hl.exports;
(function(e, t) {
  var r = Kr, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, l = s ? r.Buffer : void 0, u = l ? l.allocUnsafe : void 0;
  function f(p, h) {
    if (h)
      return p.slice();
    var m = p.length, v = u ? u(m) : new p.constructor(m);
    return p.copy(v), v;
  }
  e.exports = f;
})(Hl, Hl.exports);
var KG = Hl.exports;
function YG(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var XG = YG;
function JG(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var l = e[r];
    t(l, r, e) && (s[i++] = l);
  }
  return s;
}
var ZG = JG;
function eV() {
  return [];
}
var Zw = eV, tV = ZG, rV = Zw, nV = Object.prototype, aV = nV.propertyIsEnumerable, Py = Object.getOwnPropertySymbols, iV = Py ? function(e) {
  return e == null ? [] : (e = Object(e), tV(Py(e), function(t) {
    return aV.call(e, t);
  }));
} : rV, mp = iV, oV = vs, sV = mp;
function lV(e, t) {
  return oV(e, sV(e), t);
}
var uV = lV, cV = ME, fV = cV(Object.getPrototypeOf, Object), eS = fV, dV = hp, pV = eS, hV = mp, gV = Zw, mV = Object.getOwnPropertySymbols, vV = mV ? function(e) {
  for (var t = []; e; )
    dV(t, hV(e)), e = pV(e);
  return t;
} : gV, tS = vV, yV = vs, bV = tS;
function EV(e, t) {
  return yV(e, bV(e), t);
}
var wV = EV, SV = hp, _V = Rr;
function OV(e, t, r) {
  var n = t(e);
  return _V(e) ? n : SV(n, r(e));
}
var rS = OV, TV = rS, xV = mp, PV = gp;
function CV(e) {
  return TV(e, PV, xV);
}
var AV = CV, $V = rS, RV = tS, IV = Au;
function NV(e) {
  return $V(e, IV, RV);
}
var kV = NV, DV = Object.prototype, MV = DV.hasOwnProperty;
function LV(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && MV.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var FV = LV, BV = Kr, UV = BV.Uint8Array, zV = UV, Cy = zV;
function qV(e) {
  var t = new e.constructor(e.byteLength);
  return new Cy(t).set(new Cy(e)), t;
}
var vp = qV, jV = vp;
function HV(e, t) {
  var r = t ? jV(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var WV = HV, GV = /\w*$/;
function VV(e) {
  var t = new e.constructor(e.source, GV.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var QV = VV, Ay = ds, $y = Ay ? Ay.prototype : void 0, Ry = $y ? $y.valueOf : void 0;
function KV(e) {
  return Ry ? Object(Ry.call(e)) : {};
}
var YV = KV, XV = vp;
function JV(e, t) {
  var r = t ? XV(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var ZV = JV, e6 = vp, t6 = WV, r6 = QV, n6 = YV, a6 = ZV, i6 = "[object Boolean]", o6 = "[object Date]", s6 = "[object Map]", l6 = "[object Number]", u6 = "[object RegExp]", c6 = "[object Set]", f6 = "[object String]", d6 = "[object Symbol]", p6 = "[object ArrayBuffer]", h6 = "[object DataView]", g6 = "[object Float32Array]", m6 = "[object Float64Array]", v6 = "[object Int8Array]", y6 = "[object Int16Array]", b6 = "[object Int32Array]", E6 = "[object Uint8Array]", w6 = "[object Uint8ClampedArray]", S6 = "[object Uint16Array]", _6 = "[object Uint32Array]";
function O6(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case p6:
      return e6(e);
    case i6:
    case o6:
      return new n(+e);
    case h6:
      return t6(e, r);
    case g6:
    case m6:
    case v6:
    case y6:
    case b6:
    case E6:
    case w6:
    case S6:
    case _6:
      return a6(e, r);
    case s6:
      return new n();
    case l6:
    case f6:
      return new n(e);
    case u6:
      return r6(e);
    case c6:
      return new n();
    case d6:
      return n6(e);
  }
}
var T6 = O6, x6 = ra, Iy = Object.create, P6 = function() {
  function e() {
  }
  return function(t) {
    if (!x6(t))
      return {};
    if (Iy)
      return Iy(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), C6 = P6, A6 = C6, $6 = eS, R6 = su;
function I6(e) {
  return typeof e.constructor == "function" && !R6(e) ? A6($6(e)) : {};
}
var N6 = I6, k6 = lu, D6 = In, M6 = "[object Map]";
function L6(e) {
  return D6(e) && k6(e) == M6;
}
var F6 = L6, B6 = F6, U6 = Kd, Ny = Yd, ky = Ny && Ny.isMap, z6 = ky ? U6(ky) : B6, q6 = z6, j6 = lu, H6 = In, W6 = "[object Set]";
function G6(e) {
  return H6(e) && j6(e) == W6;
}
var V6 = G6, Q6 = V6, K6 = Kd, Dy = Yd, My = Dy && Dy.isSet, Y6 = My ? K6(My) : Q6, X6 = Y6, J6 = kG, Z6 = MG, eQ = pp, tQ = HG, rQ = QG, nQ = KG, aQ = XG, iQ = uV, oQ = wV, sQ = AV, lQ = kV, uQ = lu, cQ = FV, fQ = T6, dQ = N6, pQ = Rr, hQ = Qd, gQ = q6, mQ = ra, vQ = X6, yQ = gp, bQ = Au, EQ = 1, wQ = 2, SQ = 4, nS = "[object Arguments]", _Q = "[object Array]", OQ = "[object Boolean]", TQ = "[object Date]", xQ = "[object Error]", aS = "[object Function]", PQ = "[object GeneratorFunction]", CQ = "[object Map]", AQ = "[object Number]", iS = "[object Object]", $Q = "[object RegExp]", RQ = "[object Set]", IQ = "[object String]", NQ = "[object Symbol]", kQ = "[object WeakMap]", DQ = "[object ArrayBuffer]", MQ = "[object DataView]", LQ = "[object Float32Array]", FQ = "[object Float64Array]", BQ = "[object Int8Array]", UQ = "[object Int16Array]", zQ = "[object Int32Array]", qQ = "[object Uint8Array]", jQ = "[object Uint8ClampedArray]", HQ = "[object Uint16Array]", WQ = "[object Uint32Array]", rt = {};
rt[nS] = rt[_Q] = rt[DQ] = rt[MQ] = rt[OQ] = rt[TQ] = rt[LQ] = rt[FQ] = rt[BQ] = rt[UQ] = rt[zQ] = rt[CQ] = rt[AQ] = rt[iS] = rt[$Q] = rt[RQ] = rt[IQ] = rt[NQ] = rt[qQ] = rt[jQ] = rt[HQ] = rt[WQ] = !0;
rt[xQ] = rt[aS] = rt[kQ] = !1;
function xl(e, t, r, n, i, s) {
  var l, u = t & EQ, f = t & wQ, p = t & SQ;
  if (r && (l = i ? r(e, n, i, s) : r(e)), l !== void 0)
    return l;
  if (!mQ(e))
    return e;
  var h = pQ(e);
  if (h) {
    if (l = cQ(e), !u)
      return aQ(e, l);
  } else {
    var m = uQ(e), v = m == aS || m == PQ;
    if (hQ(e))
      return nQ(e, u);
    if (m == iS || m == nS || v && !i) {
      if (l = f || v ? {} : dQ(e), !u)
        return f ? oQ(e, rQ(l, e)) : iQ(e, tQ(l, e));
    } else {
      if (!rt[m])
        return i ? e : {};
      l = fQ(e, m, u);
    }
  }
  s || (s = new J6());
  var S = s.get(e);
  if (S)
    return S;
  s.set(e, l), vQ(e) ? e.forEach(function(_) {
    l.add(xl(_, t, r, _, e, s));
  }) : gQ(e) && e.forEach(function(_, C) {
    l.set(C, xl(_, t, r, C, e, s));
  });
  var O = p ? f ? lQ : sQ : f ? bQ : yQ, T = h ? void 0 : O(e);
  return Z6(T || e, function(_, C) {
    T && (C = _, _ = e[C]), eQ(l, C, xl(_, t, r, C, e, s));
  }), l;
}
var GQ = xl, VQ = GQ, QQ = 1, KQ = 4;
function YQ(e) {
  return VQ(e, QQ | KQ);
}
var XQ = YQ;
const bi = /* @__PURE__ */ $t(XQ);
var JQ = ta, ZQ = In, e5 = "[object Boolean]";
function t5(e) {
  return e === !0 || e === !1 || ZQ(e) && JQ(e) == e5;
}
var r5 = t5;
const n5 = /* @__PURE__ */ $t(r5);
var a5 = ta, i5 = Rr, o5 = In, s5 = "[object String]";
function l5(e) {
  return typeof e == "string" || !i5(e) && o5(e) && a5(e) == s5;
}
var u5 = l5;
const c5 = /* @__PURE__ */ $t(u5);
var f5 = ta, d5 = In, p5 = "[object Number]";
function h5(e) {
  return typeof e == "number" || d5(e) && f5(e) == p5;
}
var g5 = h5;
const m5 = /* @__PURE__ */ $t(g5);
var yp = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (yp.displayName = "ReactRedux");
function v5(e) {
  e();
}
var oS = v5, y5 = function(t) {
  return oS = t;
}, b5 = function() {
  return oS;
};
function E5() {
  var e = b5(), t = null, r = null;
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
var Ly = {
  notify: function() {
  },
  get: function() {
    return [];
  }
};
function sS(e, t) {
  var r, n = Ly;
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
    r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = E5());
  }
  function p() {
    r && (r(), r = void 0, n.clear(), n = Ly);
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
var lS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? hA : Ad;
function uS(e) {
  var t = e.store, r = e.context, n = e.children, i = Ur(function() {
    var u = sS(t);
    return {
      store: t,
      subscription: u
    };
  }, [t]), s = Ur(function() {
    return t.getState();
  }, [t]);
  lS(function() {
    var u = i.subscription;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== t.getState() && u.notifyNestedSubs(), function() {
      u.tryUnsubscribe(), u.onStateChange = null;
    };
  }, [i, s]);
  var l = r || yp;
  return /* @__PURE__ */ b.createElement(l.Provider, {
    value: i
  }, n);
}
process.env.NODE_ENV !== "production" && (uS.propTypes = {
  store: d.shape({
    subscribe: d.func.isRequired,
    dispatch: d.func.isRequired,
    getState: d.func.isRequired
  }),
  context: d.object,
  children: d.any
});
var bp = Vl(), w5 = {
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
}, S5 = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, _5 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, cS = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ep = {};
Ep[bp.ForwardRef] = _5;
Ep[bp.Memo] = cS;
function Fy(e) {
  return bp.isMemo(e) ? cS : Ep[e.$$typeof] || w5;
}
var O5 = Object.defineProperty, T5 = Object.getOwnPropertyNames, By = Object.getOwnPropertySymbols, x5 = Object.getOwnPropertyDescriptor, P5 = Object.getPrototypeOf, Uy = Object.prototype;
function fS(e, t, r) {
  if (typeof t != "string") {
    if (Uy) {
      var n = P5(t);
      n && n !== Uy && fS(e, n, r);
    }
    var i = T5(t);
    By && (i = i.concat(By(t)));
    for (var s = Fy(e), l = Fy(t), u = 0; u < i.length; ++u) {
      var f = i[u];
      if (!S5[f] && !(r && r[f]) && !(l && l[f]) && !(s && s[f])) {
        var p = x5(t, f);
        try {
          O5(e, f, p);
        } catch {
        }
      }
    }
  }
  return e;
}
var C5 = fS;
const zy = /* @__PURE__ */ $t(C5);
var Td = { exports: {} }, Je = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qy;
function A5() {
  if (qy)
    return Je;
  qy = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, s = 60109, l = 60110, u = 60112, f = 60113, p = 60120, h = 60115, m = 60116, v = 60121, S = 60122, O = 60117, T = 60129, _ = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var C = Symbol.for;
    e = C("react.element"), t = C("react.portal"), r = C("react.fragment"), n = C("react.strict_mode"), i = C("react.profiler"), s = C("react.provider"), l = C("react.context"), u = C("react.forward_ref"), f = C("react.suspense"), p = C("react.suspense_list"), h = C("react.memo"), m = C("react.lazy"), v = C("react.block"), S = C("react.server.block"), O = C("react.fundamental"), T = C("react.debug_trace_mode"), _ = C("react.legacy_hidden");
  }
  function M(W) {
    if (typeof W == "object" && W !== null) {
      var le = W.$$typeof;
      switch (le) {
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
                  return le;
              }
          }
        case t:
          return le;
      }
    }
  }
  var k = s, U = e, R = u, F = r, x = m, A = h, I = t, B = i, G = n, X = f;
  return Je.ContextConsumer = l, Je.ContextProvider = k, Je.Element = U, Je.ForwardRef = R, Je.Fragment = F, Je.Lazy = x, Je.Memo = A, Je.Portal = I, Je.Profiler = B, Je.StrictMode = G, Je.Suspense = X, Je.isAsyncMode = function() {
    return !1;
  }, Je.isConcurrentMode = function() {
    return !1;
  }, Je.isContextConsumer = function(W) {
    return M(W) === l;
  }, Je.isContextProvider = function(W) {
    return M(W) === s;
  }, Je.isElement = function(W) {
    return typeof W == "object" && W !== null && W.$$typeof === e;
  }, Je.isForwardRef = function(W) {
    return M(W) === u;
  }, Je.isFragment = function(W) {
    return M(W) === r;
  }, Je.isLazy = function(W) {
    return M(W) === m;
  }, Je.isMemo = function(W) {
    return M(W) === h;
  }, Je.isPortal = function(W) {
    return M(W) === t;
  }, Je.isProfiler = function(W) {
    return M(W) === i;
  }, Je.isStrictMode = function(W) {
    return M(W) === n;
  }, Je.isSuspense = function(W) {
    return M(W) === f;
  }, Je.isValidElementType = function(W) {
    return typeof W == "string" || typeof W == "function" || W === r || W === i || W === T || W === n || W === f || W === p || W === _ || typeof W == "object" && W !== null && (W.$$typeof === m || W.$$typeof === h || W.$$typeof === s || W.$$typeof === l || W.$$typeof === u || W.$$typeof === O || W.$$typeof === v || W[0] === S);
  }, Je.typeOf = M, Je;
}
var Ze = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jy;
function $5() {
  return jy || (jy = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, s = 60109, l = 60110, u = 60112, f = 60113, p = 60120, h = 60115, m = 60116, v = 60121, S = 60122, O = 60117, T = 60129, _ = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var C = Symbol.for;
      e = C("react.element"), t = C("react.portal"), r = C("react.fragment"), n = C("react.strict_mode"), i = C("react.profiler"), s = C("react.provider"), l = C("react.context"), u = C("react.forward_ref"), f = C("react.suspense"), p = C("react.suspense_list"), h = C("react.memo"), m = C("react.lazy"), v = C("react.block"), S = C("react.server.block"), O = C("react.fundamental"), C("react.scope"), C("react.opaque.id"), T = C("react.debug_trace_mode"), C("react.offscreen"), _ = C("react.legacy_hidden");
    }
    var M = !1;
    function k(te) {
      return !!(typeof te == "string" || typeof te == "function" || te === r || te === i || te === T || te === n || te === f || te === p || te === _ || M || typeof te == "object" && te !== null && (te.$$typeof === m || te.$$typeof === h || te.$$typeof === s || te.$$typeof === l || te.$$typeof === u || te.$$typeof === O || te.$$typeof === v || te[0] === S));
    }
    function U(te) {
      if (typeof te == "object" && te !== null) {
        var ee = te.$$typeof;
        switch (ee) {
          case e:
            var ht = te.type;
            switch (ht) {
              case r:
              case i:
              case n:
              case f:
              case p:
                return ht;
              default:
                var re = ht && ht.$$typeof;
                switch (re) {
                  case l:
                  case u:
                  case m:
                  case h:
                  case s:
                    return re;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var R = l, F = s, x = e, A = u, I = r, B = m, G = h, X = t, W = i, le = n, Ce = f, Te = !1, Ae = !1;
    function qe(te) {
      return Te || (Te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ct(te) {
      return Ae || (Ae = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(te) {
      return U(te) === l;
    }
    function J(te) {
      return U(te) === s;
    }
    function we(te) {
      return typeof te == "object" && te !== null && te.$$typeof === e;
    }
    function ge(te) {
      return U(te) === u;
    }
    function de(te) {
      return U(te) === r;
    }
    function Se(te) {
      return U(te) === m;
    }
    function pe(te) {
      return U(te) === h;
    }
    function _e(te) {
      return U(te) === t;
    }
    function Oe(te) {
      return U(te) === i;
    }
    function xe(te) {
      return U(te) === n;
    }
    function Ie(te) {
      return U(te) === f;
    }
    Ze.ContextConsumer = R, Ze.ContextProvider = F, Ze.Element = x, Ze.ForwardRef = A, Ze.Fragment = I, Ze.Lazy = B, Ze.Memo = G, Ze.Portal = X, Ze.Profiler = W, Ze.StrictMode = le, Ze.Suspense = Ce, Ze.isAsyncMode = qe, Ze.isConcurrentMode = ct, Ze.isContextConsumer = K, Ze.isContextProvider = J, Ze.isElement = we, Ze.isForwardRef = ge, Ze.isFragment = de, Ze.isLazy = Se, Ze.isMemo = pe, Ze.isPortal = _e, Ze.isProfiler = Oe, Ze.isStrictMode = xe, Ze.isSuspense = Ie, Ze.isValidElementType = k, Ze.typeOf = U;
  }()), Ze;
}
process.env.NODE_ENV === "production" ? Td.exports = A5() : Td.exports = $5();
var Hy = Td.exports, R5 = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"], I5 = ["reactReduxForwardedRef"], N5 = [], k5 = [null, null], D5 = function(t) {
  try {
    return JSON.stringify(t);
  } catch {
    return String(t);
  }
};
function M5(e, t) {
  var r = e[1];
  return [t.payload, r + 1];
}
function Wy(e, t, r) {
  lS(function() {
    return e.apply(void 0, t);
  }, r);
}
function L5(e, t, r, n, i, s, l) {
  e.current = n, t.current = i, r.current = !1, s.current && (s.current = null, l());
}
function F5(e, t, r, n, i, s, l, u, f, p) {
  if (e) {
    var h = !1, m = null, v = function() {
      if (!h) {
        var T = t.getState(), _, C;
        try {
          _ = n(T, i.current);
        } catch (M) {
          C = M, m = M;
        }
        C || (m = null), _ === s.current ? l.current || f() : (s.current = _, u.current = _, l.current = !0, p({
          type: "STORE_UPDATED",
          payload: {
            error: C
          }
        }));
      }
    };
    r.onStateChange = v, r.trySubscribe(), v();
    var S = function() {
      if (h = !0, r.tryUnsubscribe(), r.onStateChange = null, m)
        throw m;
    };
    return S;
  }
}
var B5 = function() {
  return [null, 0];
};
function U5(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.getDisplayName, i = n === void 0 ? function(F) {
    return "ConnectAdvanced(" + F + ")";
  } : n, s = r.methodName, l = s === void 0 ? "connectAdvanced" : s, u = r.renderCountProp, f = u === void 0 ? void 0 : u, p = r.shouldHandleStateChanges, h = p === void 0 ? !0 : p, m = r.storeKey, v = m === void 0 ? "store" : m, S = r.withRef, O = S === void 0 ? !1 : S, T = r.forwardRef, _ = T === void 0 ? !1 : T, C = r.context, M = C === void 0 ? yp : C, k = Pa(r, R5);
  if (process.env.NODE_ENV !== "production") {
    if (f !== void 0)
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    if (O)
      throw new Error("withRef is removed. To access the wrapped instance, use a ref on the connected component");
    var U = "To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";
    if (v !== "store")
      throw new Error("storeKey has been removed and does not do anything. " + U);
  }
  var R = M;
  return function(x) {
    if (process.env.NODE_ENV !== "production" && !Hy.isValidElementType(x))
      throw new Error("You must pass a component to the function returned by " + (l + ". Instead received " + D5(x)));
    var A = x.displayName || x.name || "Component", I = i(A), B = q({}, k, {
      getDisplayName: i,
      methodName: l,
      renderCountProp: f,
      shouldHandleStateChanges: h,
      storeKey: v,
      displayName: I,
      wrappedComponentName: A,
      WrappedComponent: x
    }), G = k.pure;
    function X(Ae) {
      return e(Ae.dispatch, B);
    }
    var W = G ? Ur : function(Ae) {
      return Ae();
    };
    function le(Ae) {
      var qe = Ur(function() {
        var kr = Ae.reactReduxForwardedRef, Ji = Pa(Ae, I5);
        return [Ae.context, kr, Ji];
      }, [Ae]), ct = qe[0], K = qe[1], J = qe[2], we = Ur(function() {
        return ct && ct.Consumer && Hy.isContextConsumer(/* @__PURE__ */ b.createElement(ct.Consumer, null)) ? ct : R;
      }, [ct, R]), ge = lt(we), de = !!Ae.store && !!Ae.store.getState && !!Ae.store.dispatch, Se = !!ge && !!ge.store;
      if (process.env.NODE_ENV !== "production" && !de && !Se)
        throw new Error('Could not find "store" in the context of ' + ('"' + I + '". Either wrap the root component in a <Provider>, ') + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + I + " in connect options."));
      var pe = de ? Ae.store : ge.store, _e = Ur(function() {
        return X(pe);
      }, [pe]), Oe = Ur(function() {
        if (!h)
          return k5;
        var kr = sS(pe, de ? null : ge.subscription), Ji = kr.notifyNestedSubs.bind(kr);
        return [kr, Ji];
      }, [pe, de, ge]), xe = Oe[0], Ie = Oe[1], te = Ur(function() {
        return de ? ge : q({}, ge, {
          subscription: xe
        });
      }, [de, ge, xe]), ee = gA(M5, N5, B5), ht = ee[0], re = ht[0], Gt = ee[1];
      if (re && re.error)
        throw re.error;
      var Xr = ll(), Lt = ll(J), aa = ll(), bs = ll(!1), Jr = W(function() {
        return aa.current && J === Lt.current ? aa.current : _e(pe.getState(), J);
      }, [pe, re, J]);
      Wy(L5, [Lt, Xr, bs, J, Jr, aa, Ie]), Wy(F5, [h, pe, xe, _e, Lt, Xr, bs, aa, Ie, Gt], [pe, xe, _e]);
      var qt = Ur(function() {
        return /* @__PURE__ */ b.createElement(x, q({}, Jr, {
          ref: K
        }));
      }, [K, x, Jr]), ia = Ur(function() {
        return h ? /* @__PURE__ */ b.createElement(we.Provider, {
          value: te
        }, qt) : qt;
      }, [we, qt, te]);
      return ia;
    }
    var Ce = G ? b.memo(le) : le;
    if (Ce.WrappedComponent = x, Ce.displayName = le.displayName = I, _) {
      var Te = b.forwardRef(function(qe, ct) {
        return /* @__PURE__ */ b.createElement(Ce, q({}, qe, {
          reactReduxForwardedRef: ct
        }));
      });
      return Te.displayName = I, Te.WrappedComponent = x, zy(Te, x);
    }
    return zy(Ce, x);
  };
}
function Gy(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Bf(e, t) {
  if (Gy(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (var i = 0; i < r.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !Gy(e[r[i]], t[r[i]]))
      return !1;
  return !0;
}
function z5(e, t) {
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
function q5(e) {
  if (typeof e != "object" || e === null)
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null)
    return !0;
  for (var r = t; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function dS(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function pS(e, t, r) {
  q5(e) || dS(r + "() in " + t + " must return a plain object. Instead received " + e + ".");
}
function wp(e) {
  return function(r, n) {
    var i = e(r, n);
    function s() {
      return i;
    }
    return s.dependsOnOwnProps = !1, s;
  };
}
function Vy(e) {
  return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0 ? !!e.dependsOnOwnProps : e.length !== 1;
}
function hS(e, t) {
  return function(n, i) {
    var s = i.displayName, l = function(f, p) {
      return l.dependsOnOwnProps ? l.mapToProps(f, p) : l.mapToProps(f);
    };
    return l.dependsOnOwnProps = !0, l.mapToProps = function(f, p) {
      l.mapToProps = e, l.dependsOnOwnProps = Vy(e);
      var h = l(f, p);
      return typeof h == "function" && (l.mapToProps = h, l.dependsOnOwnProps = Vy(h), h = l(f, p)), process.env.NODE_ENV !== "production" && pS(h, s, t), h;
    }, l;
  };
}
function j5(e) {
  return typeof e == "function" ? hS(e, "mapDispatchToProps") : void 0;
}
function H5(e) {
  return e ? void 0 : wp(function(t) {
    return {
      dispatch: t
    };
  });
}
function W5(e) {
  return e && typeof e == "object" ? wp(function(t) {
    return z5(e, t);
  }) : void 0;
}
const G5 = [j5, H5, W5];
function V5(e) {
  return typeof e == "function" ? hS(e, "mapStateToProps") : void 0;
}
function Q5(e) {
  return e ? void 0 : wp(function() {
    return {};
  });
}
const K5 = [V5, Q5];
function Y5(e, t, r) {
  return q({}, r, e, t);
}
function X5(e) {
  return function(r, n) {
    var i = n.displayName, s = n.pure, l = n.areMergedPropsEqual, u = !1, f;
    return function(h, m, v) {
      var S = e(h, m, v);
      return u ? (!s || !l(S, f)) && (f = S) : (u = !0, f = S, process.env.NODE_ENV !== "production" && pS(f, i, "mergeProps")), f;
    };
  };
}
function J5(e) {
  return typeof e == "function" ? X5(e) : void 0;
}
function Z5(e) {
  return e ? void 0 : function() {
    return Y5;
  };
}
const eK = [J5, Z5];
function Uf(e, t, r) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || dS("The selector for " + t + " of " + r + " did not specify a value for dependsOnOwnProps."));
  else
    throw new Error("Unexpected value for " + t + " in " + r + ".");
}
function tK(e, t, r, n) {
  Uf(e, "mapStateToProps", n), Uf(t, "mapDispatchToProps", n), Uf(r, "mergeProps", n);
}
var rK = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function nK(e, t, r, n) {
  return function(s, l) {
    return r(e(s, l), t(n, l), l);
  };
}
function aK(e, t, r, n, i) {
  var s = i.areStatesEqual, l = i.areOwnPropsEqual, u = i.areStatePropsEqual, f = !1, p, h, m, v, S;
  function O(k, U) {
    return p = k, h = U, m = e(p, h), v = t(n, h), S = r(m, v, h), f = !0, S;
  }
  function T() {
    return m = e(p, h), t.dependsOnOwnProps && (v = t(n, h)), S = r(m, v, h), S;
  }
  function _() {
    return e.dependsOnOwnProps && (m = e(p, h)), t.dependsOnOwnProps && (v = t(n, h)), S = r(m, v, h), S;
  }
  function C() {
    var k = e(p, h), U = !u(k, m);
    return m = k, U && (S = r(m, v, h)), S;
  }
  function M(k, U) {
    var R = !l(U, h), F = !s(k, p, U, h);
    return p = k, h = U, R && F ? T() : R ? _() : F ? C() : S;
  }
  return function(U, R) {
    return f ? M(U, R) : O(U, R);
  };
}
function iK(e, t) {
  var r = t.initMapStateToProps, n = t.initMapDispatchToProps, i = t.initMergeProps, s = Pa(t, rK), l = r(e, s), u = n(e, s), f = i(e, s);
  process.env.NODE_ENV !== "production" && tK(l, u, f, s.displayName);
  var p = s.pure ? aK : nK;
  return p(l, u, f, e, s);
}
var oK = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];
function zf(e, t, r) {
  for (var n = t.length - 1; n >= 0; n--) {
    var i = t[n](e);
    if (i)
      return i;
  }
  return function(s, l) {
    throw new Error("Invalid value of type " + typeof e + " for " + r + " argument when connecting component " + l.wrappedComponentName + ".");
  };
}
function sK(e, t) {
  return e === t;
}
function lK(e) {
  var t = e === void 0 ? {} : e, r = t.connectHOC, n = r === void 0 ? U5 : r, i = t.mapStateToPropsFactories, s = i === void 0 ? K5 : i, l = t.mapDispatchToPropsFactories, u = l === void 0 ? G5 : l, f = t.mergePropsFactories, p = f === void 0 ? eK : f, h = t.selectorFactory, m = h === void 0 ? iK : h;
  return function(S, O, T, _) {
    _ === void 0 && (_ = {});
    var C = _, M = C.pure, k = M === void 0 ? !0 : M, U = C.areStatesEqual, R = U === void 0 ? sK : U, F = C.areOwnPropsEqual, x = F === void 0 ? Bf : F, A = C.areStatePropsEqual, I = A === void 0 ? Bf : A, B = C.areMergedPropsEqual, G = B === void 0 ? Bf : B, X = Pa(C, oK), W = zf(S, s, "mapStateToProps"), le = zf(O, u, "mapDispatchToProps"), Ce = zf(T, p, "mergeProps");
    return n(m, q({
      // used in error messages
      methodName: "connect",
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function(Ae) {
        return "Connect(" + Ae + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: !!S,
      // passed through to selectorFactory
      initMapStateToProps: W,
      initMapDispatchToProps: le,
      initMergeProps: Ce,
      pure: k,
      areStatesEqual: R,
      areOwnPropsEqual: x,
      areStatePropsEqual: I,
      areMergedPropsEqual: G
    }, X));
  };
}
const _t = /* @__PURE__ */ lK();
y5(yA);
function Qy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ky(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qy(Object(r), !0).forEach(function(n) {
      wa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ut(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Yy = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), qf = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, xa = {
  INIT: "@@redux/INIT" + qf(),
  REPLACE: "@@redux/REPLACE" + qf(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + qf();
  }
};
function gS(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function uK(e) {
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
  if (dK(e))
    return "date";
  if (fK(e))
    return "error";
  var r = cK(e);
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
function cK(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function fK(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function dK(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function va(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = uK(e)), t;
}
function mS(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ut(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ut(1) : "Expected the enhancer to be a function. Instead, received: '" + va(r) + "'");
    return r(mS)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ut(2) : "Expected the root reducer to be a function. Instead, received: '" + va(e) + "'");
  var i = e, s = t, l = [], u = l, f = !1;
  function p() {
    u === l && (u = l.slice());
  }
  function h() {
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? Ut(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return s;
  }
  function m(T) {
    if (typeof T != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ut(4) : "Expected the listener to be a function. Instead, received: '" + va(T) + "'");
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? Ut(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var _ = !0;
    return p(), u.push(T), function() {
      if (_) {
        if (f)
          throw new Error(process.env.NODE_ENV === "production" ? Ut(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        _ = !1, p();
        var M = u.indexOf(T);
        u.splice(M, 1), l = null;
      }
    };
  }
  function v(T) {
    if (!gS(T))
      throw new Error(process.env.NODE_ENV === "production" ? Ut(7) : "Actions must be plain objects. Instead, the actual type was: '" + va(T) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof T.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ut(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? Ut(9) : "Reducers may not dispatch actions.");
    try {
      f = !0, s = i(s, T);
    } finally {
      f = !1;
    }
    for (var _ = l = u, C = 0; C < _.length; C++) {
      var M = _[C];
      M();
    }
    return T;
  }
  function S(T) {
    if (typeof T != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ut(10) : "Expected the nextReducer to be a function. Instead, received: '" + va(T));
    i = T, v({
      type: xa.REPLACE
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
          throw new Error(process.env.NODE_ENV === "production" ? Ut(11) : "Expected the observer to be an object. Instead, received: '" + va(M) + "'");
        function k() {
          M.next && M.next(h());
        }
        k();
        var U = _(k);
        return {
          unsubscribe: U
        };
      }
    }, T[Yy] = function() {
      return this;
    }, T;
  }
  return v({
    type: xa.INIT
  }), n = {
    dispatch: v,
    subscribe: m,
    getState: h,
    replaceReducer: S
  }, n[Yy] = O, n;
}
function Xy(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function pK(e, t, r, n) {
  var i = Object.keys(t), s = r && r.type === xa.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!gS(e))
    return "The " + s + ' has unexpected type of "' + va(e) + '". Expected argument to be an object with the following ' + ('keys: "' + i.join('", "') + '"');
  var l = Object.keys(e).filter(function(u) {
    return !t.hasOwnProperty(u) && !n[u];
  });
  if (l.forEach(function(u) {
    n[u] = !0;
  }), !(r && r.type === xa.REPLACE) && l.length > 0)
    return "Unexpected " + (l.length > 1 ? "keys" : "key") + " " + ('"' + l.join('", "') + '" found in ' + s + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + i.join('", "') + '". Unexpected keys will be ignored.');
}
function hK(e) {
  Object.keys(e).forEach(function(t) {
    var r = e[t], n = r(void 0, {
      type: xa.INIT
    });
    if (typeof n > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ut(12) : 'The slice reducer for key "' + t + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: xa.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ut(13) : 'The slice reducer for key "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + xa.INIT + `' or other actions in "redux/*" `) + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
  });
}
function gK(e) {
  for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
    var i = t[n];
    process.env.NODE_ENV !== "production" && typeof e[i] > "u" && Xy('No reducer provided for key "' + i + '"'), typeof e[i] == "function" && (r[i] = e[i]);
  }
  var s = Object.keys(r), l;
  process.env.NODE_ENV !== "production" && (l = {});
  var u;
  try {
    hK(r);
  } catch (f) {
    u = f;
  }
  return function(p, h) {
    if (p === void 0 && (p = {}), u)
      throw u;
    if (process.env.NODE_ENV !== "production") {
      var m = pK(p, r, h, l);
      m && Xy(m);
    }
    for (var v = !1, S = {}, O = 0; O < s.length; O++) {
      var T = s[O], _ = r[T], C = p[T], M = _(C, h);
      if (typeof M > "u") {
        var k = h && h.type;
        throw new Error(process.env.NODE_ENV === "production" ? Ut(14) : "When called with an action of type " + (k ? '"' + String(k) + '"' : "(unknown type)") + ', the slice reducer for key "' + T + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
      }
      S[T] = M, v = v || M !== C;
    }
    return v = v || s.length !== Object.keys(p).length, v ? S : p;
  };
}
function mK() {
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
function vK() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var i = n.apply(void 0, arguments), s = function() {
        throw new Error(process.env.NODE_ENV === "production" ? Ut(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, l = {
        getState: i.getState,
        dispatch: function() {
          return s.apply(void 0, arguments);
        }
      }, u = t.map(function(f) {
        return f(l);
      });
      return s = mK.apply(void 0, u)(i.dispatch), Ky(Ky({}, i), {}, {
        dispatch: s
      });
    };
  };
}
function vS(e) {
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
var yS = vS();
yS.withExtraArgument = vS;
const yK = yS;
var Wl = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Wl.exports;
(function(e, t) {
  (function() {
    var r, n = "4.17.21", i = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", p = 500, h = "__lodash_placeholder__", m = 1, v = 2, S = 4, O = 1, T = 2, _ = 1, C = 2, M = 4, k = 8, U = 16, R = 32, F = 64, x = 128, A = 256, I = 512, B = 30, G = "...", X = 800, W = 16, le = 1, Ce = 2, Te = 3, Ae = 1 / 0, qe = 9007199254740991, ct = 17976931348623157e292, K = 0 / 0, J = 4294967295, we = J - 1, ge = J >>> 1, de = [
      ["ary", x],
      ["bind", _],
      ["bindKey", C],
      ["curry", k],
      ["curryRight", U],
      ["flip", I],
      ["partial", R],
      ["partialRight", F],
      ["rearg", A]
    ], Se = "[object Arguments]", pe = "[object Array]", _e = "[object AsyncFunction]", Oe = "[object Boolean]", xe = "[object Date]", Ie = "[object DOMException]", te = "[object Error]", ee = "[object Function]", ht = "[object GeneratorFunction]", re = "[object Map]", Gt = "[object Number]", Xr = "[object Null]", Lt = "[object Object]", aa = "[object Promise]", bs = "[object Proxy]", Jr = "[object RegExp]", qt = "[object Set]", ia = "[object String]", kr = "[object Symbol]", Ji = "[object Undefined]", Zi = "[object WeakMap]", k_ = "[object WeakSet]", eo = "[object ArrayBuffer]", Qa = "[object DataView]", Ru = "[object Float32Array]", Iu = "[object Float64Array]", Nu = "[object Int8Array]", ku = "[object Int16Array]", Du = "[object Int32Array]", Mu = "[object Uint8Array]", Lu = "[object Uint8ClampedArray]", Fu = "[object Uint16Array]", Bu = "[object Uint32Array]", D_ = /\b__p \+= '';/g, M_ = /\b(__p \+=) '' \+/g, L_ = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Rp = /&(?:amp|lt|gt|quot|#39);/g, Ip = /[&<>"']/g, F_ = RegExp(Rp.source), B_ = RegExp(Ip.source), U_ = /<%-([\s\S]+?)%>/g, z_ = /<%([\s\S]+?)%>/g, Np = /<%=([\s\S]+?)%>/g, q_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, j_ = /^\w*$/, H_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Uu = /[\\^$.*+?()[\]{}|]/g, W_ = RegExp(Uu.source), zu = /^\s+/, G_ = /\s/, V_ = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Q_ = /\{\n\/\* \[wrapped with (.+)\] \*/, K_ = /,? & /, Y_ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, X_ = /[()=,{}\[\]\/\s]/, J_ = /\\(\\)?/g, Z_ = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, kp = /\w*$/, e1 = /^[-+]0x[0-9a-f]+$/i, t1 = /^0b[01]+$/i, r1 = /^\[object .+?Constructor\]$/, n1 = /^0o[0-7]+$/i, a1 = /^(?:0|[1-9]\d*)$/, i1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Es = /($^)/, o1 = /['\n\r\u2028\u2029\\]/g, ws = "\\ud800-\\udfff", s1 = "\\u0300-\\u036f", l1 = "\\ufe20-\\ufe2f", u1 = "\\u20d0-\\u20ff", Dp = s1 + l1 + u1, Mp = "\\u2700-\\u27bf", Lp = "a-z\\xdf-\\xf6\\xf8-\\xff", c1 = "\\xac\\xb1\\xd7\\xf7", f1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", d1 = "\\u2000-\\u206f", p1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Fp = "A-Z\\xc0-\\xd6\\xd8-\\xde", Bp = "\\ufe0e\\ufe0f", Up = c1 + f1 + d1 + p1, qu = "['’]", h1 = "[" + ws + "]", zp = "[" + Up + "]", Ss = "[" + Dp + "]", qp = "\\d+", g1 = "[" + Mp + "]", jp = "[" + Lp + "]", Hp = "[^" + ws + Up + qp + Mp + Lp + Fp + "]", ju = "\\ud83c[\\udffb-\\udfff]", m1 = "(?:" + Ss + "|" + ju + ")", Wp = "[^" + ws + "]", Hu = "(?:\\ud83c[\\udde6-\\uddff]){2}", Wu = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ka = "[" + Fp + "]", Gp = "\\u200d", Vp = "(?:" + jp + "|" + Hp + ")", v1 = "(?:" + Ka + "|" + Hp + ")", Qp = "(?:" + qu + "(?:d|ll|m|re|s|t|ve))?", Kp = "(?:" + qu + "(?:D|LL|M|RE|S|T|VE))?", Yp = m1 + "?", Xp = "[" + Bp + "]?", y1 = "(?:" + Gp + "(?:" + [Wp, Hu, Wu].join("|") + ")" + Xp + Yp + ")*", b1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", E1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Jp = Xp + Yp + y1, w1 = "(?:" + [g1, Hu, Wu].join("|") + ")" + Jp, S1 = "(?:" + [Wp + Ss + "?", Ss, Hu, Wu, h1].join("|") + ")", _1 = RegExp(qu, "g"), O1 = RegExp(Ss, "g"), Gu = RegExp(ju + "(?=" + ju + ")|" + S1 + Jp, "g"), T1 = RegExp([
      Ka + "?" + jp + "+" + Qp + "(?=" + [zp, Ka, "$"].join("|") + ")",
      v1 + "+" + Kp + "(?=" + [zp, Ka + Vp, "$"].join("|") + ")",
      Ka + "?" + Vp + "+" + Qp,
      Ka + "+" + Kp,
      E1,
      b1,
      qp,
      w1
    ].join("|"), "g"), x1 = RegExp("[" + Gp + ws + Dp + Bp + "]"), P1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, C1 = [
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
    ], A1 = -1, it = {};
    it[Ru] = it[Iu] = it[Nu] = it[ku] = it[Du] = it[Mu] = it[Lu] = it[Fu] = it[Bu] = !0, it[Se] = it[pe] = it[eo] = it[Oe] = it[Qa] = it[xe] = it[te] = it[ee] = it[re] = it[Gt] = it[Lt] = it[Jr] = it[qt] = it[ia] = it[Zi] = !1;
    var tt = {};
    tt[Se] = tt[pe] = tt[eo] = tt[Qa] = tt[Oe] = tt[xe] = tt[Ru] = tt[Iu] = tt[Nu] = tt[ku] = tt[Du] = tt[re] = tt[Gt] = tt[Lt] = tt[Jr] = tt[qt] = tt[ia] = tt[kr] = tt[Mu] = tt[Lu] = tt[Fu] = tt[Bu] = !0, tt[te] = tt[ee] = tt[Zi] = !1;
    var $1 = {
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
    }, R1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, I1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, N1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, k1 = parseFloat, D1 = parseInt, Zp = typeof xr == "object" && xr && xr.Object === Object && xr, M1 = typeof self == "object" && self && self.Object === Object && self, Nt = Zp || M1 || Function("return this")(), Vu = t && !t.nodeType && t, oa = Vu && !0 && e && !e.nodeType && e, eh = oa && oa.exports === Vu, Qu = eh && Zp.process, ur = function() {
      try {
        var D = oa && oa.require && oa.require("util").types;
        return D || Qu && Qu.binding && Qu.binding("util");
      } catch {
      }
    }(), th = ur && ur.isArrayBuffer, rh = ur && ur.isDate, nh = ur && ur.isMap, ah = ur && ur.isRegExp, ih = ur && ur.isSet, oh = ur && ur.isTypedArray;
    function tr(D, H, z) {
      switch (z.length) {
        case 0:
          return D.call(H);
        case 1:
          return D.call(H, z[0]);
        case 2:
          return D.call(H, z[0], z[1]);
        case 3:
          return D.call(H, z[0], z[1], z[2]);
      }
      return D.apply(H, z);
    }
    function L1(D, H, z, oe) {
      for (var Pe = -1, je = D == null ? 0 : D.length; ++Pe < je; ) {
        var Ot = D[Pe];
        H(oe, Ot, z(Ot), D);
      }
      return oe;
    }
    function cr(D, H) {
      for (var z = -1, oe = D == null ? 0 : D.length; ++z < oe && H(D[z], z, D) !== !1; )
        ;
      return D;
    }
    function F1(D, H) {
      for (var z = D == null ? 0 : D.length; z-- && H(D[z], z, D) !== !1; )
        ;
      return D;
    }
    function sh(D, H) {
      for (var z = -1, oe = D == null ? 0 : D.length; ++z < oe; )
        if (!H(D[z], z, D))
          return !1;
      return !0;
    }
    function Nn(D, H) {
      for (var z = -1, oe = D == null ? 0 : D.length, Pe = 0, je = []; ++z < oe; ) {
        var Ot = D[z];
        H(Ot, z, D) && (je[Pe++] = Ot);
      }
      return je;
    }
    function _s(D, H) {
      var z = D == null ? 0 : D.length;
      return !!z && Ya(D, H, 0) > -1;
    }
    function Ku(D, H, z) {
      for (var oe = -1, Pe = D == null ? 0 : D.length; ++oe < Pe; )
        if (z(H, D[oe]))
          return !0;
      return !1;
    }
    function ft(D, H) {
      for (var z = -1, oe = D == null ? 0 : D.length, Pe = Array(oe); ++z < oe; )
        Pe[z] = H(D[z], z, D);
      return Pe;
    }
    function kn(D, H) {
      for (var z = -1, oe = H.length, Pe = D.length; ++z < oe; )
        D[Pe + z] = H[z];
      return D;
    }
    function Yu(D, H, z, oe) {
      var Pe = -1, je = D == null ? 0 : D.length;
      for (oe && je && (z = D[++Pe]); ++Pe < je; )
        z = H(z, D[Pe], Pe, D);
      return z;
    }
    function B1(D, H, z, oe) {
      var Pe = D == null ? 0 : D.length;
      for (oe && Pe && (z = D[--Pe]); Pe--; )
        z = H(z, D[Pe], Pe, D);
      return z;
    }
    function Xu(D, H) {
      for (var z = -1, oe = D == null ? 0 : D.length; ++z < oe; )
        if (H(D[z], z, D))
          return !0;
      return !1;
    }
    var U1 = Ju("length");
    function z1(D) {
      return D.split("");
    }
    function q1(D) {
      return D.match(Y_) || [];
    }
    function lh(D, H, z) {
      var oe;
      return z(D, function(Pe, je, Ot) {
        if (H(Pe, je, Ot))
          return oe = je, !1;
      }), oe;
    }
    function Os(D, H, z, oe) {
      for (var Pe = D.length, je = z + (oe ? 1 : -1); oe ? je-- : ++je < Pe; )
        if (H(D[je], je, D))
          return je;
      return -1;
    }
    function Ya(D, H, z) {
      return H === H ? e0(D, H, z) : Os(D, uh, z);
    }
    function j1(D, H, z, oe) {
      for (var Pe = z - 1, je = D.length; ++Pe < je; )
        if (oe(D[Pe], H))
          return Pe;
      return -1;
    }
    function uh(D) {
      return D !== D;
    }
    function ch(D, H) {
      var z = D == null ? 0 : D.length;
      return z ? ec(D, H) / z : K;
    }
    function Ju(D) {
      return function(H) {
        return H == null ? r : H[D];
      };
    }
    function Zu(D) {
      return function(H) {
        return D == null ? r : D[H];
      };
    }
    function fh(D, H, z, oe, Pe) {
      return Pe(D, function(je, Ot, et) {
        z = oe ? (oe = !1, je) : H(z, je, Ot, et);
      }), z;
    }
    function H1(D, H) {
      var z = D.length;
      for (D.sort(H); z--; )
        D[z] = D[z].value;
      return D;
    }
    function ec(D, H) {
      for (var z, oe = -1, Pe = D.length; ++oe < Pe; ) {
        var je = H(D[oe]);
        je !== r && (z = z === r ? je : z + je);
      }
      return z;
    }
    function tc(D, H) {
      for (var z = -1, oe = Array(D); ++z < D; )
        oe[z] = H(z);
      return oe;
    }
    function W1(D, H) {
      return ft(H, function(z) {
        return [z, D[z]];
      });
    }
    function dh(D) {
      return D && D.slice(0, mh(D) + 1).replace(zu, "");
    }
    function rr(D) {
      return function(H) {
        return D(H);
      };
    }
    function rc(D, H) {
      return ft(H, function(z) {
        return D[z];
      });
    }
    function to(D, H) {
      return D.has(H);
    }
    function ph(D, H) {
      for (var z = -1, oe = D.length; ++z < oe && Ya(H, D[z], 0) > -1; )
        ;
      return z;
    }
    function hh(D, H) {
      for (var z = D.length; z-- && Ya(H, D[z], 0) > -1; )
        ;
      return z;
    }
    function G1(D, H) {
      for (var z = D.length, oe = 0; z--; )
        D[z] === H && ++oe;
      return oe;
    }
    var V1 = Zu($1), Q1 = Zu(R1);
    function K1(D) {
      return "\\" + N1[D];
    }
    function Y1(D, H) {
      return D == null ? r : D[H];
    }
    function Xa(D) {
      return x1.test(D);
    }
    function X1(D) {
      return P1.test(D);
    }
    function J1(D) {
      for (var H, z = []; !(H = D.next()).done; )
        z.push(H.value);
      return z;
    }
    function nc(D) {
      var H = -1, z = Array(D.size);
      return D.forEach(function(oe, Pe) {
        z[++H] = [Pe, oe];
      }), z;
    }
    function gh(D, H) {
      return function(z) {
        return D(H(z));
      };
    }
    function Dn(D, H) {
      for (var z = -1, oe = D.length, Pe = 0, je = []; ++z < oe; ) {
        var Ot = D[z];
        (Ot === H || Ot === h) && (D[z] = h, je[Pe++] = z);
      }
      return je;
    }
    function Ts(D) {
      var H = -1, z = Array(D.size);
      return D.forEach(function(oe) {
        z[++H] = oe;
      }), z;
    }
    function Z1(D) {
      var H = -1, z = Array(D.size);
      return D.forEach(function(oe) {
        z[++H] = [oe, oe];
      }), z;
    }
    function e0(D, H, z) {
      for (var oe = z - 1, Pe = D.length; ++oe < Pe; )
        if (D[oe] === H)
          return oe;
      return -1;
    }
    function t0(D, H, z) {
      for (var oe = z + 1; oe--; )
        if (D[oe] === H)
          return oe;
      return oe;
    }
    function Ja(D) {
      return Xa(D) ? n0(D) : U1(D);
    }
    function Er(D) {
      return Xa(D) ? a0(D) : z1(D);
    }
    function mh(D) {
      for (var H = D.length; H-- && G_.test(D.charAt(H)); )
        ;
      return H;
    }
    var r0 = Zu(I1);
    function n0(D) {
      for (var H = Gu.lastIndex = 0; Gu.test(D); )
        ++H;
      return H;
    }
    function a0(D) {
      return D.match(Gu) || [];
    }
    function i0(D) {
      return D.match(T1) || [];
    }
    var o0 = function D(H) {
      H = H == null ? Nt : Za.defaults(Nt.Object(), H, Za.pick(Nt, C1));
      var z = H.Array, oe = H.Date, Pe = H.Error, je = H.Function, Ot = H.Math, et = H.Object, ac = H.RegExp, s0 = H.String, fr = H.TypeError, xs = z.prototype, l0 = je.prototype, ei = et.prototype, Ps = H["__core-js_shared__"], Cs = l0.toString, Ye = ei.hasOwnProperty, u0 = 0, vh = function() {
        var a = /[^.]+$/.exec(Ps && Ps.keys && Ps.keys.IE_PROTO || "");
        return a ? "Symbol(src)_1." + a : "";
      }(), As = ei.toString, c0 = Cs.call(et), f0 = Nt._, d0 = ac(
        "^" + Cs.call(Ye).replace(Uu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), $s = eh ? H.Buffer : r, Mn = H.Symbol, Rs = H.Uint8Array, yh = $s ? $s.allocUnsafe : r, Is = gh(et.getPrototypeOf, et), bh = et.create, Eh = ei.propertyIsEnumerable, Ns = xs.splice, wh = Mn ? Mn.isConcatSpreadable : r, ro = Mn ? Mn.iterator : r, sa = Mn ? Mn.toStringTag : r, ks = function() {
        try {
          var a = da(et, "defineProperty");
          return a({}, "", {}), a;
        } catch {
        }
      }(), p0 = H.clearTimeout !== Nt.clearTimeout && H.clearTimeout, h0 = oe && oe.now !== Nt.Date.now && oe.now, g0 = H.setTimeout !== Nt.setTimeout && H.setTimeout, Ds = Ot.ceil, Ms = Ot.floor, ic = et.getOwnPropertySymbols, m0 = $s ? $s.isBuffer : r, Sh = H.isFinite, v0 = xs.join, y0 = gh(et.keys, et), Tt = Ot.max, Ft = Ot.min, b0 = oe.now, E0 = H.parseInt, _h = Ot.random, w0 = xs.reverse, oc = da(H, "DataView"), no = da(H, "Map"), sc = da(H, "Promise"), ti = da(H, "Set"), ao = da(H, "WeakMap"), io = da(et, "create"), Ls = ao && new ao(), ri = {}, S0 = pa(oc), _0 = pa(no), O0 = pa(sc), T0 = pa(ti), x0 = pa(ao), Fs = Mn ? Mn.prototype : r, oo = Fs ? Fs.valueOf : r, Oh = Fs ? Fs.toString : r;
      function E(a) {
        if (gt(a) && !$e(a) && !(a instanceof Fe)) {
          if (a instanceof dr)
            return a;
          if (Ye.call(a, "__wrapped__"))
            return Tg(a);
        }
        return new dr(a);
      }
      var ni = function() {
        function a() {
        }
        return function(o) {
          if (!pt(o))
            return {};
          if (bh)
            return bh(o);
          a.prototype = o;
          var c = new a();
          return a.prototype = r, c;
        };
      }();
      function Bs() {
      }
      function dr(a, o) {
        this.__wrapped__ = a, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = r;
      }
      E.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: U_,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: z_,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Np,
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
      }, E.prototype = Bs.prototype, E.prototype.constructor = E, dr.prototype = ni(Bs.prototype), dr.prototype.constructor = dr;
      function Fe(a) {
        this.__wrapped__ = a, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = J, this.__views__ = [];
      }
      function P0() {
        var a = new Fe(this.__wrapped__);
        return a.__actions__ = Vt(this.__actions__), a.__dir__ = this.__dir__, a.__filtered__ = this.__filtered__, a.__iteratees__ = Vt(this.__iteratees__), a.__takeCount__ = this.__takeCount__, a.__views__ = Vt(this.__views__), a;
      }
      function C0() {
        if (this.__filtered__) {
          var a = new Fe(this);
          a.__dir__ = -1, a.__filtered__ = !0;
        } else
          a = this.clone(), a.__dir__ *= -1;
        return a;
      }
      function A0() {
        var a = this.__wrapped__.value(), o = this.__dir__, c = $e(a), g = o < 0, y = c ? a.length : 0, w = zO(0, y, this.__views__), P = w.start, $ = w.end, L = $ - P, V = g ? $ : P - 1, Q = this.__iteratees__, Y = Q.length, ne = 0, fe = Ft(L, this.__takeCount__);
        if (!c || !g && y == L && fe == L)
          return Qh(a, this.__actions__);
        var ve = [];
        e:
          for (; L-- && ne < fe; ) {
            V += o;
            for (var ke = -1, ye = a[V]; ++ke < Y; ) {
              var Me = Q[ke], Be = Me.iteratee, ir = Me.type, Wt = Be(ye);
              if (ir == Ce)
                ye = Wt;
              else if (!Wt) {
                if (ir == le)
                  continue e;
                break e;
              }
            }
            ve[ne++] = ye;
          }
        return ve;
      }
      Fe.prototype = ni(Bs.prototype), Fe.prototype.constructor = Fe;
      function la(a) {
        var o = -1, c = a == null ? 0 : a.length;
        for (this.clear(); ++o < c; ) {
          var g = a[o];
          this.set(g[0], g[1]);
        }
      }
      function $0() {
        this.__data__ = io ? io(null) : {}, this.size = 0;
      }
      function R0(a) {
        var o = this.has(a) && delete this.__data__[a];
        return this.size -= o ? 1 : 0, o;
      }
      function I0(a) {
        var o = this.__data__;
        if (io) {
          var c = o[a];
          return c === f ? r : c;
        }
        return Ye.call(o, a) ? o[a] : r;
      }
      function N0(a) {
        var o = this.__data__;
        return io ? o[a] !== r : Ye.call(o, a);
      }
      function k0(a, o) {
        var c = this.__data__;
        return this.size += this.has(a) ? 0 : 1, c[a] = io && o === r ? f : o, this;
      }
      la.prototype.clear = $0, la.prototype.delete = R0, la.prototype.get = I0, la.prototype.has = N0, la.prototype.set = k0;
      function Zr(a) {
        var o = -1, c = a == null ? 0 : a.length;
        for (this.clear(); ++o < c; ) {
          var g = a[o];
          this.set(g[0], g[1]);
        }
      }
      function D0() {
        this.__data__ = [], this.size = 0;
      }
      function M0(a) {
        var o = this.__data__, c = Us(o, a);
        if (c < 0)
          return !1;
        var g = o.length - 1;
        return c == g ? o.pop() : Ns.call(o, c, 1), --this.size, !0;
      }
      function L0(a) {
        var o = this.__data__, c = Us(o, a);
        return c < 0 ? r : o[c][1];
      }
      function F0(a) {
        return Us(this.__data__, a) > -1;
      }
      function B0(a, o) {
        var c = this.__data__, g = Us(c, a);
        return g < 0 ? (++this.size, c.push([a, o])) : c[g][1] = o, this;
      }
      Zr.prototype.clear = D0, Zr.prototype.delete = M0, Zr.prototype.get = L0, Zr.prototype.has = F0, Zr.prototype.set = B0;
      function en(a) {
        var o = -1, c = a == null ? 0 : a.length;
        for (this.clear(); ++o < c; ) {
          var g = a[o];
          this.set(g[0], g[1]);
        }
      }
      function U0() {
        this.size = 0, this.__data__ = {
          hash: new la(),
          map: new (no || Zr)(),
          string: new la()
        };
      }
      function z0(a) {
        var o = Js(this, a).delete(a);
        return this.size -= o ? 1 : 0, o;
      }
      function q0(a) {
        return Js(this, a).get(a);
      }
      function j0(a) {
        return Js(this, a).has(a);
      }
      function H0(a, o) {
        var c = Js(this, a), g = c.size;
        return c.set(a, o), this.size += c.size == g ? 0 : 1, this;
      }
      en.prototype.clear = U0, en.prototype.delete = z0, en.prototype.get = q0, en.prototype.has = j0, en.prototype.set = H0;
      function ua(a) {
        var o = -1, c = a == null ? 0 : a.length;
        for (this.__data__ = new en(); ++o < c; )
          this.add(a[o]);
      }
      function W0(a) {
        return this.__data__.set(a, f), this;
      }
      function G0(a) {
        return this.__data__.has(a);
      }
      ua.prototype.add = ua.prototype.push = W0, ua.prototype.has = G0;
      function wr(a) {
        var o = this.__data__ = new Zr(a);
        this.size = o.size;
      }
      function V0() {
        this.__data__ = new Zr(), this.size = 0;
      }
      function Q0(a) {
        var o = this.__data__, c = o.delete(a);
        return this.size = o.size, c;
      }
      function K0(a) {
        return this.__data__.get(a);
      }
      function Y0(a) {
        return this.__data__.has(a);
      }
      function X0(a, o) {
        var c = this.__data__;
        if (c instanceof Zr) {
          var g = c.__data__;
          if (!no || g.length < i - 1)
            return g.push([a, o]), this.size = ++c.size, this;
          c = this.__data__ = new en(g);
        }
        return c.set(a, o), this.size = c.size, this;
      }
      wr.prototype.clear = V0, wr.prototype.delete = Q0, wr.prototype.get = K0, wr.prototype.has = Y0, wr.prototype.set = X0;
      function Th(a, o) {
        var c = $e(a), g = !c && ha(a), y = !c && !g && zn(a), w = !c && !g && !y && si(a), P = c || g || y || w, $ = P ? tc(a.length, s0) : [], L = $.length;
        for (var V in a)
          (o || Ye.call(a, V)) && !(P && // Safari 9 has enumerable `arguments.length` in strict mode.
          (V == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          y && (V == "offset" || V == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          w && (V == "buffer" || V == "byteLength" || V == "byteOffset") || // Skip index properties.
          an(V, L))) && $.push(V);
        return $;
      }
      function xh(a) {
        var o = a.length;
        return o ? a[yc(0, o - 1)] : r;
      }
      function J0(a, o) {
        return Zs(Vt(a), ca(o, 0, a.length));
      }
      function Z0(a) {
        return Zs(Vt(a));
      }
      function lc(a, o, c) {
        (c !== r && !Sr(a[o], c) || c === r && !(o in a)) && tn(a, o, c);
      }
      function so(a, o, c) {
        var g = a[o];
        (!(Ye.call(a, o) && Sr(g, c)) || c === r && !(o in a)) && tn(a, o, c);
      }
      function Us(a, o) {
        for (var c = a.length; c--; )
          if (Sr(a[c][0], o))
            return c;
        return -1;
      }
      function eO(a, o, c, g) {
        return Ln(a, function(y, w, P) {
          o(g, y, c(y), P);
        }), g;
      }
      function Ph(a, o) {
        return a && Mr(o, Rt(o), a);
      }
      function tO(a, o) {
        return a && Mr(o, Kt(o), a);
      }
      function tn(a, o, c) {
        o == "__proto__" && ks ? ks(a, o, {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        }) : a[o] = c;
      }
      function uc(a, o) {
        for (var c = -1, g = o.length, y = z(g), w = a == null; ++c < g; )
          y[c] = w ? r : jc(a, o[c]);
        return y;
      }
      function ca(a, o, c) {
        return a === a && (c !== r && (a = a <= c ? a : c), o !== r && (a = a >= o ? a : o)), a;
      }
      function pr(a, o, c, g, y, w) {
        var P, $ = o & m, L = o & v, V = o & S;
        if (c && (P = y ? c(a, g, y, w) : c(a)), P !== r)
          return P;
        if (!pt(a))
          return a;
        var Q = $e(a);
        if (Q) {
          if (P = jO(a), !$)
            return Vt(a, P);
        } else {
          var Y = Bt(a), ne = Y == ee || Y == ht;
          if (zn(a))
            return Xh(a, $);
          if (Y == Lt || Y == Se || ne && !y) {
            if (P = L || ne ? {} : mg(a), !$)
              return L ? IO(a, tO(P, a)) : RO(a, Ph(P, a));
          } else {
            if (!tt[Y])
              return y ? a : {};
            P = HO(a, Y, $);
          }
        }
        w || (w = new wr());
        var fe = w.get(a);
        if (fe)
          return fe;
        w.set(a, P), Wg(a) ? a.forEach(function(ye) {
          P.add(pr(ye, o, c, ye, a, w));
        }) : jg(a) && a.forEach(function(ye, Me) {
          P.set(Me, pr(ye, o, c, Me, a, w));
        });
        var ve = V ? L ? Ac : Cc : L ? Kt : Rt, ke = Q ? r : ve(a);
        return cr(ke || a, function(ye, Me) {
          ke && (Me = ye, ye = a[Me]), so(P, Me, pr(ye, o, c, Me, a, w));
        }), P;
      }
      function rO(a) {
        var o = Rt(a);
        return function(c) {
          return Ch(c, a, o);
        };
      }
      function Ch(a, o, c) {
        var g = c.length;
        if (a == null)
          return !g;
        for (a = et(a); g--; ) {
          var y = c[g], w = o[y], P = a[y];
          if (P === r && !(y in a) || !w(P))
            return !1;
        }
        return !0;
      }
      function Ah(a, o, c) {
        if (typeof a != "function")
          throw new fr(l);
        return go(function() {
          a.apply(r, c);
        }, o);
      }
      function lo(a, o, c, g) {
        var y = -1, w = _s, P = !0, $ = a.length, L = [], V = o.length;
        if (!$)
          return L;
        c && (o = ft(o, rr(c))), g ? (w = Ku, P = !1) : o.length >= i && (w = to, P = !1, o = new ua(o));
        e:
          for (; ++y < $; ) {
            var Q = a[y], Y = c == null ? Q : c(Q);
            if (Q = g || Q !== 0 ? Q : 0, P && Y === Y) {
              for (var ne = V; ne--; )
                if (o[ne] === Y)
                  continue e;
              L.push(Q);
            } else
              w(o, Y, g) || L.push(Q);
          }
        return L;
      }
      var Ln = rg(Dr), $h = rg(fc, !0);
      function nO(a, o) {
        var c = !0;
        return Ln(a, function(g, y, w) {
          return c = !!o(g, y, w), c;
        }), c;
      }
      function zs(a, o, c) {
        for (var g = -1, y = a.length; ++g < y; ) {
          var w = a[g], P = o(w);
          if (P != null && ($ === r ? P === P && !ar(P) : c(P, $)))
            var $ = P, L = w;
        }
        return L;
      }
      function aO(a, o, c, g) {
        var y = a.length;
        for (c = Ne(c), c < 0 && (c = -c > y ? 0 : y + c), g = g === r || g > y ? y : Ne(g), g < 0 && (g += y), g = c > g ? 0 : Vg(g); c < g; )
          a[c++] = o;
        return a;
      }
      function Rh(a, o) {
        var c = [];
        return Ln(a, function(g, y, w) {
          o(g, y, w) && c.push(g);
        }), c;
      }
      function kt(a, o, c, g, y) {
        var w = -1, P = a.length;
        for (c || (c = GO), y || (y = []); ++w < P; ) {
          var $ = a[w];
          o > 0 && c($) ? o > 1 ? kt($, o - 1, c, g, y) : kn(y, $) : g || (y[y.length] = $);
        }
        return y;
      }
      var cc = ng(), Ih = ng(!0);
      function Dr(a, o) {
        return a && cc(a, o, Rt);
      }
      function fc(a, o) {
        return a && Ih(a, o, Rt);
      }
      function qs(a, o) {
        return Nn(o, function(c) {
          return on(a[c]);
        });
      }
      function fa(a, o) {
        o = Bn(o, a);
        for (var c = 0, g = o.length; a != null && c < g; )
          a = a[Lr(o[c++])];
        return c && c == g ? a : r;
      }
      function Nh(a, o, c) {
        var g = o(a);
        return $e(a) ? g : kn(g, c(a));
      }
      function jt(a) {
        return a == null ? a === r ? Ji : Xr : sa && sa in et(a) ? UO(a) : ZO(a);
      }
      function dc(a, o) {
        return a > o;
      }
      function iO(a, o) {
        return a != null && Ye.call(a, o);
      }
      function oO(a, o) {
        return a != null && o in et(a);
      }
      function sO(a, o, c) {
        return a >= Ft(o, c) && a < Tt(o, c);
      }
      function pc(a, o, c) {
        for (var g = c ? Ku : _s, y = a[0].length, w = a.length, P = w, $ = z(w), L = 1 / 0, V = []; P--; ) {
          var Q = a[P];
          P && o && (Q = ft(Q, rr(o))), L = Ft(Q.length, L), $[P] = !c && (o || y >= 120 && Q.length >= 120) ? new ua(P && Q) : r;
        }
        Q = a[0];
        var Y = -1, ne = $[0];
        e:
          for (; ++Y < y && V.length < L; ) {
            var fe = Q[Y], ve = o ? o(fe) : fe;
            if (fe = c || fe !== 0 ? fe : 0, !(ne ? to(ne, ve) : g(V, ve, c))) {
              for (P = w; --P; ) {
                var ke = $[P];
                if (!(ke ? to(ke, ve) : g(a[P], ve, c)))
                  continue e;
              }
              ne && ne.push(ve), V.push(fe);
            }
          }
        return V;
      }
      function lO(a, o, c, g) {
        return Dr(a, function(y, w, P) {
          o(g, c(y), w, P);
        }), g;
      }
      function uo(a, o, c) {
        o = Bn(o, a), a = Eg(a, o);
        var g = a == null ? a : a[Lr(gr(o))];
        return g == null ? r : tr(g, a, c);
      }
      function kh(a) {
        return gt(a) && jt(a) == Se;
      }
      function uO(a) {
        return gt(a) && jt(a) == eo;
      }
      function cO(a) {
        return gt(a) && jt(a) == xe;
      }
      function co(a, o, c, g, y) {
        return a === o ? !0 : a == null || o == null || !gt(a) && !gt(o) ? a !== a && o !== o : fO(a, o, c, g, co, y);
      }
      function fO(a, o, c, g, y, w) {
        var P = $e(a), $ = $e(o), L = P ? pe : Bt(a), V = $ ? pe : Bt(o);
        L = L == Se ? Lt : L, V = V == Se ? Lt : V;
        var Q = L == Lt, Y = V == Lt, ne = L == V;
        if (ne && zn(a)) {
          if (!zn(o))
            return !1;
          P = !0, Q = !1;
        }
        if (ne && !Q)
          return w || (w = new wr()), P || si(a) ? pg(a, o, c, g, y, w) : FO(a, o, L, c, g, y, w);
        if (!(c & O)) {
          var fe = Q && Ye.call(a, "__wrapped__"), ve = Y && Ye.call(o, "__wrapped__");
          if (fe || ve) {
            var ke = fe ? a.value() : a, ye = ve ? o.value() : o;
            return w || (w = new wr()), y(ke, ye, c, g, w);
          }
        }
        return ne ? (w || (w = new wr()), BO(a, o, c, g, y, w)) : !1;
      }
      function dO(a) {
        return gt(a) && Bt(a) == re;
      }
      function hc(a, o, c, g) {
        var y = c.length, w = y, P = !g;
        if (a == null)
          return !w;
        for (a = et(a); y--; ) {
          var $ = c[y];
          if (P && $[2] ? $[1] !== a[$[0]] : !($[0] in a))
            return !1;
        }
        for (; ++y < w; ) {
          $ = c[y];
          var L = $[0], V = a[L], Q = $[1];
          if (P && $[2]) {
            if (V === r && !(L in a))
              return !1;
          } else {
            var Y = new wr();
            if (g)
              var ne = g(V, Q, L, a, o, Y);
            if (!(ne === r ? co(Q, V, O | T, g, Y) : ne))
              return !1;
          }
        }
        return !0;
      }
      function Dh(a) {
        if (!pt(a) || QO(a))
          return !1;
        var o = on(a) ? d0 : r1;
        return o.test(pa(a));
      }
      function pO(a) {
        return gt(a) && jt(a) == Jr;
      }
      function hO(a) {
        return gt(a) && Bt(a) == qt;
      }
      function gO(a) {
        return gt(a) && il(a.length) && !!it[jt(a)];
      }
      function Mh(a) {
        return typeof a == "function" ? a : a == null ? Yt : typeof a == "object" ? $e(a) ? Bh(a[0], a[1]) : Fh(a) : am(a);
      }
      function gc(a) {
        if (!ho(a))
          return y0(a);
        var o = [];
        for (var c in et(a))
          Ye.call(a, c) && c != "constructor" && o.push(c);
        return o;
      }
      function mO(a) {
        if (!pt(a))
          return JO(a);
        var o = ho(a), c = [];
        for (var g in a)
          g == "constructor" && (o || !Ye.call(a, g)) || c.push(g);
        return c;
      }
      function mc(a, o) {
        return a < o;
      }
      function Lh(a, o) {
        var c = -1, g = Qt(a) ? z(a.length) : [];
        return Ln(a, function(y, w, P) {
          g[++c] = o(y, w, P);
        }), g;
      }
      function Fh(a) {
        var o = Rc(a);
        return o.length == 1 && o[0][2] ? yg(o[0][0], o[0][1]) : function(c) {
          return c === a || hc(c, a, o);
        };
      }
      function Bh(a, o) {
        return Nc(a) && vg(o) ? yg(Lr(a), o) : function(c) {
          var g = jc(c, a);
          return g === r && g === o ? Hc(c, a) : co(o, g, O | T);
        };
      }
      function js(a, o, c, g, y) {
        a !== o && cc(o, function(w, P) {
          if (y || (y = new wr()), pt(w))
            vO(a, o, P, c, js, g, y);
          else {
            var $ = g ? g(Dc(a, P), w, P + "", a, o, y) : r;
            $ === r && ($ = w), lc(a, P, $);
          }
        }, Kt);
      }
      function vO(a, o, c, g, y, w, P) {
        var $ = Dc(a, c), L = Dc(o, c), V = P.get(L);
        if (V) {
          lc(a, c, V);
          return;
        }
        var Q = w ? w($, L, c + "", a, o, P) : r, Y = Q === r;
        if (Y) {
          var ne = $e(L), fe = !ne && zn(L), ve = !ne && !fe && si(L);
          Q = L, ne || fe || ve ? $e($) ? Q = $ : vt($) ? Q = Vt($) : fe ? (Y = !1, Q = Xh(L, !0)) : ve ? (Y = !1, Q = Jh(L, !0)) : Q = [] : mo(L) || ha(L) ? (Q = $, ha($) ? Q = Qg($) : (!pt($) || on($)) && (Q = mg(L))) : Y = !1;
        }
        Y && (P.set(L, Q), y(Q, L, g, w, P), P.delete(L)), lc(a, c, Q);
      }
      function Uh(a, o) {
        var c = a.length;
        if (c)
          return o += o < 0 ? c : 0, an(o, c) ? a[o] : r;
      }
      function zh(a, o, c) {
        o.length ? o = ft(o, function(w) {
          return $e(w) ? function(P) {
            return fa(P, w.length === 1 ? w[0] : w);
          } : w;
        }) : o = [Yt];
        var g = -1;
        o = ft(o, rr(me()));
        var y = Lh(a, function(w, P, $) {
          var L = ft(o, function(V) {
            return V(w);
          });
          return { criteria: L, index: ++g, value: w };
        });
        return H1(y, function(w, P) {
          return $O(w, P, c);
        });
      }
      function yO(a, o) {
        return qh(a, o, function(c, g) {
          return Hc(a, g);
        });
      }
      function qh(a, o, c) {
        for (var g = -1, y = o.length, w = {}; ++g < y; ) {
          var P = o[g], $ = fa(a, P);
          c($, P) && fo(w, Bn(P, a), $);
        }
        return w;
      }
      function bO(a) {
        return function(o) {
          return fa(o, a);
        };
      }
      function vc(a, o, c, g) {
        var y = g ? j1 : Ya, w = -1, P = o.length, $ = a;
        for (a === o && (o = Vt(o)), c && ($ = ft(a, rr(c))); ++w < P; )
          for (var L = 0, V = o[w], Q = c ? c(V) : V; (L = y($, Q, L, g)) > -1; )
            $ !== a && Ns.call($, L, 1), Ns.call(a, L, 1);
        return a;
      }
      function jh(a, o) {
        for (var c = a ? o.length : 0, g = c - 1; c--; ) {
          var y = o[c];
          if (c == g || y !== w) {
            var w = y;
            an(y) ? Ns.call(a, y, 1) : wc(a, y);
          }
        }
        return a;
      }
      function yc(a, o) {
        return a + Ms(_h() * (o - a + 1));
      }
      function EO(a, o, c, g) {
        for (var y = -1, w = Tt(Ds((o - a) / (c || 1)), 0), P = z(w); w--; )
          P[g ? w : ++y] = a, a += c;
        return P;
      }
      function bc(a, o) {
        var c = "";
        if (!a || o < 1 || o > qe)
          return c;
        do
          o % 2 && (c += a), o = Ms(o / 2), o && (a += a);
        while (o);
        return c;
      }
      function De(a, o) {
        return Mc(bg(a, o, Yt), a + "");
      }
      function wO(a) {
        return xh(li(a));
      }
      function SO(a, o) {
        var c = li(a);
        return Zs(c, ca(o, 0, c.length));
      }
      function fo(a, o, c, g) {
        if (!pt(a))
          return a;
        o = Bn(o, a);
        for (var y = -1, w = o.length, P = w - 1, $ = a; $ != null && ++y < w; ) {
          var L = Lr(o[y]), V = c;
          if (L === "__proto__" || L === "constructor" || L === "prototype")
            return a;
          if (y != P) {
            var Q = $[L];
            V = g ? g(Q, L, $) : r, V === r && (V = pt(Q) ? Q : an(o[y + 1]) ? [] : {});
          }
          so($, L, V), $ = $[L];
        }
        return a;
      }
      var Hh = Ls ? function(a, o) {
        return Ls.set(a, o), a;
      } : Yt, _O = ks ? function(a, o) {
        return ks(a, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Gc(o),
          writable: !0
        });
      } : Yt;
      function OO(a) {
        return Zs(li(a));
      }
      function hr(a, o, c) {
        var g = -1, y = a.length;
        o < 0 && (o = -o > y ? 0 : y + o), c = c > y ? y : c, c < 0 && (c += y), y = o > c ? 0 : c - o >>> 0, o >>>= 0;
        for (var w = z(y); ++g < y; )
          w[g] = a[g + o];
        return w;
      }
      function TO(a, o) {
        var c;
        return Ln(a, function(g, y, w) {
          return c = o(g, y, w), !c;
        }), !!c;
      }
      function Hs(a, o, c) {
        var g = 0, y = a == null ? g : a.length;
        if (typeof o == "number" && o === o && y <= ge) {
          for (; g < y; ) {
            var w = g + y >>> 1, P = a[w];
            P !== null && !ar(P) && (c ? P <= o : P < o) ? g = w + 1 : y = w;
          }
          return y;
        }
        return Ec(a, o, Yt, c);
      }
      function Ec(a, o, c, g) {
        var y = 0, w = a == null ? 0 : a.length;
        if (w === 0)
          return 0;
        o = c(o);
        for (var P = o !== o, $ = o === null, L = ar(o), V = o === r; y < w; ) {
          var Q = Ms((y + w) / 2), Y = c(a[Q]), ne = Y !== r, fe = Y === null, ve = Y === Y, ke = ar(Y);
          if (P)
            var ye = g || ve;
          else
            V ? ye = ve && (g || ne) : $ ? ye = ve && ne && (g || !fe) : L ? ye = ve && ne && !fe && (g || !ke) : fe || ke ? ye = !1 : ye = g ? Y <= o : Y < o;
          ye ? y = Q + 1 : w = Q;
        }
        return Ft(w, we);
      }
      function Wh(a, o) {
        for (var c = -1, g = a.length, y = 0, w = []; ++c < g; ) {
          var P = a[c], $ = o ? o(P) : P;
          if (!c || !Sr($, L)) {
            var L = $;
            w[y++] = P === 0 ? 0 : P;
          }
        }
        return w;
      }
      function Gh(a) {
        return typeof a == "number" ? a : ar(a) ? K : +a;
      }
      function nr(a) {
        if (typeof a == "string")
          return a;
        if ($e(a))
          return ft(a, nr) + "";
        if (ar(a))
          return Oh ? Oh.call(a) : "";
        var o = a + "";
        return o == "0" && 1 / a == -Ae ? "-0" : o;
      }
      function Fn(a, o, c) {
        var g = -1, y = _s, w = a.length, P = !0, $ = [], L = $;
        if (c)
          P = !1, y = Ku;
        else if (w >= i) {
          var V = o ? null : MO(a);
          if (V)
            return Ts(V);
          P = !1, y = to, L = new ua();
        } else
          L = o ? [] : $;
        e:
          for (; ++g < w; ) {
            var Q = a[g], Y = o ? o(Q) : Q;
            if (Q = c || Q !== 0 ? Q : 0, P && Y === Y) {
              for (var ne = L.length; ne--; )
                if (L[ne] === Y)
                  continue e;
              o && L.push(Y), $.push(Q);
            } else
              y(L, Y, c) || (L !== $ && L.push(Y), $.push(Q));
          }
        return $;
      }
      function wc(a, o) {
        return o = Bn(o, a), a = Eg(a, o), a == null || delete a[Lr(gr(o))];
      }
      function Vh(a, o, c, g) {
        return fo(a, o, c(fa(a, o)), g);
      }
      function Ws(a, o, c, g) {
        for (var y = a.length, w = g ? y : -1; (g ? w-- : ++w < y) && o(a[w], w, a); )
          ;
        return c ? hr(a, g ? 0 : w, g ? w + 1 : y) : hr(a, g ? w + 1 : 0, g ? y : w);
      }
      function Qh(a, o) {
        var c = a;
        return c instanceof Fe && (c = c.value()), Yu(o, function(g, y) {
          return y.func.apply(y.thisArg, kn([g], y.args));
        }, c);
      }
      function Sc(a, o, c) {
        var g = a.length;
        if (g < 2)
          return g ? Fn(a[0]) : [];
        for (var y = -1, w = z(g); ++y < g; )
          for (var P = a[y], $ = -1; ++$ < g; )
            $ != y && (w[y] = lo(w[y] || P, a[$], o, c));
        return Fn(kt(w, 1), o, c);
      }
      function Kh(a, o, c) {
        for (var g = -1, y = a.length, w = o.length, P = {}; ++g < y; ) {
          var $ = g < w ? o[g] : r;
          c(P, a[g], $);
        }
        return P;
      }
      function _c(a) {
        return vt(a) ? a : [];
      }
      function Oc(a) {
        return typeof a == "function" ? a : Yt;
      }
      function Bn(a, o) {
        return $e(a) ? a : Nc(a, o) ? [a] : Og(We(a));
      }
      var xO = De;
      function Un(a, o, c) {
        var g = a.length;
        return c = c === r ? g : c, !o && c >= g ? a : hr(a, o, c);
      }
      var Yh = p0 || function(a) {
        return Nt.clearTimeout(a);
      };
      function Xh(a, o) {
        if (o)
          return a.slice();
        var c = a.length, g = yh ? yh(c) : new a.constructor(c);
        return a.copy(g), g;
      }
      function Tc(a) {
        var o = new a.constructor(a.byteLength);
        return new Rs(o).set(new Rs(a)), o;
      }
      function PO(a, o) {
        var c = o ? Tc(a.buffer) : a.buffer;
        return new a.constructor(c, a.byteOffset, a.byteLength);
      }
      function CO(a) {
        var o = new a.constructor(a.source, kp.exec(a));
        return o.lastIndex = a.lastIndex, o;
      }
      function AO(a) {
        return oo ? et(oo.call(a)) : {};
      }
      function Jh(a, o) {
        var c = o ? Tc(a.buffer) : a.buffer;
        return new a.constructor(c, a.byteOffset, a.length);
      }
      function Zh(a, o) {
        if (a !== o) {
          var c = a !== r, g = a === null, y = a === a, w = ar(a), P = o !== r, $ = o === null, L = o === o, V = ar(o);
          if (!$ && !V && !w && a > o || w && P && L && !$ && !V || g && P && L || !c && L || !y)
            return 1;
          if (!g && !w && !V && a < o || V && c && y && !g && !w || $ && c && y || !P && y || !L)
            return -1;
        }
        return 0;
      }
      function $O(a, o, c) {
        for (var g = -1, y = a.criteria, w = o.criteria, P = y.length, $ = c.length; ++g < P; ) {
          var L = Zh(y[g], w[g]);
          if (L) {
            if (g >= $)
              return L;
            var V = c[g];
            return L * (V == "desc" ? -1 : 1);
          }
        }
        return a.index - o.index;
      }
      function eg(a, o, c, g) {
        for (var y = -1, w = a.length, P = c.length, $ = -1, L = o.length, V = Tt(w - P, 0), Q = z(L + V), Y = !g; ++$ < L; )
          Q[$] = o[$];
        for (; ++y < P; )
          (Y || y < w) && (Q[c[y]] = a[y]);
        for (; V--; )
          Q[$++] = a[y++];
        return Q;
      }
      function tg(a, o, c, g) {
        for (var y = -1, w = a.length, P = -1, $ = c.length, L = -1, V = o.length, Q = Tt(w - $, 0), Y = z(Q + V), ne = !g; ++y < Q; )
          Y[y] = a[y];
        for (var fe = y; ++L < V; )
          Y[fe + L] = o[L];
        for (; ++P < $; )
          (ne || y < w) && (Y[fe + c[P]] = a[y++]);
        return Y;
      }
      function Vt(a, o) {
        var c = -1, g = a.length;
        for (o || (o = z(g)); ++c < g; )
          o[c] = a[c];
        return o;
      }
      function Mr(a, o, c, g) {
        var y = !c;
        c || (c = {});
        for (var w = -1, P = o.length; ++w < P; ) {
          var $ = o[w], L = g ? g(c[$], a[$], $, c, a) : r;
          L === r && (L = a[$]), y ? tn(c, $, L) : so(c, $, L);
        }
        return c;
      }
      function RO(a, o) {
        return Mr(a, Ic(a), o);
      }
      function IO(a, o) {
        return Mr(a, hg(a), o);
      }
      function Gs(a, o) {
        return function(c, g) {
          var y = $e(c) ? L1 : eO, w = o ? o() : {};
          return y(c, a, me(g, 2), w);
        };
      }
      function ai(a) {
        return De(function(o, c) {
          var g = -1, y = c.length, w = y > 1 ? c[y - 1] : r, P = y > 2 ? c[2] : r;
          for (w = a.length > 3 && typeof w == "function" ? (y--, w) : r, P && Ht(c[0], c[1], P) && (w = y < 3 ? r : w, y = 1), o = et(o); ++g < y; ) {
            var $ = c[g];
            $ && a(o, $, g, w);
          }
          return o;
        });
      }
      function rg(a, o) {
        return function(c, g) {
          if (c == null)
            return c;
          if (!Qt(c))
            return a(c, g);
          for (var y = c.length, w = o ? y : -1, P = et(c); (o ? w-- : ++w < y) && g(P[w], w, P) !== !1; )
            ;
          return c;
        };
      }
      function ng(a) {
        return function(o, c, g) {
          for (var y = -1, w = et(o), P = g(o), $ = P.length; $--; ) {
            var L = P[a ? $ : ++y];
            if (c(w[L], L, w) === !1)
              break;
          }
          return o;
        };
      }
      function NO(a, o, c) {
        var g = o & _, y = po(a);
        function w() {
          var P = this && this !== Nt && this instanceof w ? y : a;
          return P.apply(g ? c : this, arguments);
        }
        return w;
      }
      function ag(a) {
        return function(o) {
          o = We(o);
          var c = Xa(o) ? Er(o) : r, g = c ? c[0] : o.charAt(0), y = c ? Un(c, 1).join("") : o.slice(1);
          return g[a]() + y;
        };
      }
      function ii(a) {
        return function(o) {
          return Yu(rm(tm(o).replace(_1, "")), a, "");
        };
      }
      function po(a) {
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
          var c = ni(a.prototype), g = a.apply(c, o);
          return pt(g) ? g : c;
        };
      }
      function kO(a, o, c) {
        var g = po(a);
        function y() {
          for (var w = arguments.length, P = z(w), $ = w, L = oi(y); $--; )
            P[$] = arguments[$];
          var V = w < 3 && P[0] !== L && P[w - 1] !== L ? [] : Dn(P, L);
          if (w -= V.length, w < c)
            return ug(
              a,
              o,
              Vs,
              y.placeholder,
              r,
              P,
              V,
              r,
              r,
              c - w
            );
          var Q = this && this !== Nt && this instanceof y ? g : a;
          return tr(Q, this, P);
        }
        return y;
      }
      function ig(a) {
        return function(o, c, g) {
          var y = et(o);
          if (!Qt(o)) {
            var w = me(c, 3);
            o = Rt(o), c = function($) {
              return w(y[$], $, y);
            };
          }
          var P = a(o, c, g);
          return P > -1 ? y[w ? o[P] : P] : r;
        };
      }
      function og(a) {
        return nn(function(o) {
          var c = o.length, g = c, y = dr.prototype.thru;
          for (a && o.reverse(); g--; ) {
            var w = o[g];
            if (typeof w != "function")
              throw new fr(l);
            if (y && !P && Xs(w) == "wrapper")
              var P = new dr([], !0);
          }
          for (g = P ? g : c; ++g < c; ) {
            w = o[g];
            var $ = Xs(w), L = $ == "wrapper" ? $c(w) : r;
            L && kc(L[0]) && L[1] == (x | k | R | A) && !L[4].length && L[9] == 1 ? P = P[Xs(L[0])].apply(P, L[3]) : P = w.length == 1 && kc(w) ? P[$]() : P.thru(w);
          }
          return function() {
            var V = arguments, Q = V[0];
            if (P && V.length == 1 && $e(Q))
              return P.plant(Q).value();
            for (var Y = 0, ne = c ? o[Y].apply(this, V) : Q; ++Y < c; )
              ne = o[Y].call(this, ne);
            return ne;
          };
        });
      }
      function Vs(a, o, c, g, y, w, P, $, L, V) {
        var Q = o & x, Y = o & _, ne = o & C, fe = o & (k | U), ve = o & I, ke = ne ? r : po(a);
        function ye() {
          for (var Me = arguments.length, Be = z(Me), ir = Me; ir--; )
            Be[ir] = arguments[ir];
          if (fe)
            var Wt = oi(ye), or = G1(Be, Wt);
          if (g && (Be = eg(Be, g, y, fe)), w && (Be = tg(Be, w, P, fe)), Me -= or, fe && Me < V) {
            var yt = Dn(Be, Wt);
            return ug(
              a,
              o,
              Vs,
              ye.placeholder,
              c,
              Be,
              yt,
              $,
              L,
              V - Me
            );
          }
          var _r = Y ? c : this, ln = ne ? _r[a] : a;
          return Me = Be.length, $ ? Be = eT(Be, $) : ve && Me > 1 && Be.reverse(), Q && L < Me && (Be.length = L), this && this !== Nt && this instanceof ye && (ln = ke || po(ln)), ln.apply(_r, Be);
        }
        return ye;
      }
      function sg(a, o) {
        return function(c, g) {
          return lO(c, a, o(g), {});
        };
      }
      function Qs(a, o) {
        return function(c, g) {
          var y;
          if (c === r && g === r)
            return o;
          if (c !== r && (y = c), g !== r) {
            if (y === r)
              return g;
            typeof c == "string" || typeof g == "string" ? (c = nr(c), g = nr(g)) : (c = Gh(c), g = Gh(g)), y = a(c, g);
          }
          return y;
        };
      }
      function xc(a) {
        return nn(function(o) {
          return o = ft(o, rr(me())), De(function(c) {
            var g = this;
            return a(o, function(y) {
              return tr(y, g, c);
            });
          });
        });
      }
      function Ks(a, o) {
        o = o === r ? " " : nr(o);
        var c = o.length;
        if (c < 2)
          return c ? bc(o, a) : o;
        var g = bc(o, Ds(a / Ja(o)));
        return Xa(o) ? Un(Er(g), 0, a).join("") : g.slice(0, a);
      }
      function DO(a, o, c, g) {
        var y = o & _, w = po(a);
        function P() {
          for (var $ = -1, L = arguments.length, V = -1, Q = g.length, Y = z(Q + L), ne = this && this !== Nt && this instanceof P ? w : a; ++V < Q; )
            Y[V] = g[V];
          for (; L--; )
            Y[V++] = arguments[++$];
          return tr(ne, y ? c : this, Y);
        }
        return P;
      }
      function lg(a) {
        return function(o, c, g) {
          return g && typeof g != "number" && Ht(o, c, g) && (c = g = r), o = sn(o), c === r ? (c = o, o = 0) : c = sn(c), g = g === r ? o < c ? 1 : -1 : sn(g), EO(o, c, g, a);
        };
      }
      function Ys(a) {
        return function(o, c) {
          return typeof o == "string" && typeof c == "string" || (o = mr(o), c = mr(c)), a(o, c);
        };
      }
      function ug(a, o, c, g, y, w, P, $, L, V) {
        var Q = o & k, Y = Q ? P : r, ne = Q ? r : P, fe = Q ? w : r, ve = Q ? r : w;
        o |= Q ? R : F, o &= ~(Q ? F : R), o & M || (o &= ~(_ | C));
        var ke = [
          a,
          o,
          y,
          fe,
          Y,
          ve,
          ne,
          $,
          L,
          V
        ], ye = c.apply(r, ke);
        return kc(a) && wg(ye, ke), ye.placeholder = g, Sg(ye, a, o);
      }
      function Pc(a) {
        var o = Ot[a];
        return function(c, g) {
          if (c = mr(c), g = g == null ? 0 : Ft(Ne(g), 292), g && Sh(c)) {
            var y = (We(c) + "e").split("e"), w = o(y[0] + "e" + (+y[1] + g));
            return y = (We(w) + "e").split("e"), +(y[0] + "e" + (+y[1] - g));
          }
          return o(c);
        };
      }
      var MO = ti && 1 / Ts(new ti([, -0]))[1] == Ae ? function(a) {
        return new ti(a);
      } : Kc;
      function cg(a) {
        return function(o) {
          var c = Bt(o);
          return c == re ? nc(o) : c == qt ? Z1(o) : W1(o, a(o));
        };
      }
      function rn(a, o, c, g, y, w, P, $) {
        var L = o & C;
        if (!L && typeof a != "function")
          throw new fr(l);
        var V = g ? g.length : 0;
        if (V || (o &= ~(R | F), g = y = r), P = P === r ? P : Tt(Ne(P), 0), $ = $ === r ? $ : Ne($), V -= y ? y.length : 0, o & F) {
          var Q = g, Y = y;
          g = y = r;
        }
        var ne = L ? r : $c(a), fe = [
          a,
          o,
          c,
          g,
          y,
          Q,
          Y,
          w,
          P,
          $
        ];
        if (ne && XO(fe, ne), a = fe[0], o = fe[1], c = fe[2], g = fe[3], y = fe[4], $ = fe[9] = fe[9] === r ? L ? 0 : a.length : Tt(fe[9] - V, 0), !$ && o & (k | U) && (o &= ~(k | U)), !o || o == _)
          var ve = NO(a, o, c);
        else
          o == k || o == U ? ve = kO(a, o, $) : (o == R || o == (_ | R)) && !y.length ? ve = DO(a, o, c, g) : ve = Vs.apply(r, fe);
        var ke = ne ? Hh : wg;
        return Sg(ke(ve, fe), a, o);
      }
      function fg(a, o, c, g) {
        return a === r || Sr(a, ei[c]) && !Ye.call(g, c) ? o : a;
      }
      function dg(a, o, c, g, y, w) {
        return pt(a) && pt(o) && (w.set(o, a), js(a, o, r, dg, w), w.delete(o)), a;
      }
      function LO(a) {
        return mo(a) ? r : a;
      }
      function pg(a, o, c, g, y, w) {
        var P = c & O, $ = a.length, L = o.length;
        if ($ != L && !(P && L > $))
          return !1;
        var V = w.get(a), Q = w.get(o);
        if (V && Q)
          return V == o && Q == a;
        var Y = -1, ne = !0, fe = c & T ? new ua() : r;
        for (w.set(a, o), w.set(o, a); ++Y < $; ) {
          var ve = a[Y], ke = o[Y];
          if (g)
            var ye = P ? g(ke, ve, Y, o, a, w) : g(ve, ke, Y, a, o, w);
          if (ye !== r) {
            if (ye)
              continue;
            ne = !1;
            break;
          }
          if (fe) {
            if (!Xu(o, function(Me, Be) {
              if (!to(fe, Be) && (ve === Me || y(ve, Me, c, g, w)))
                return fe.push(Be);
            })) {
              ne = !1;
              break;
            }
          } else if (!(ve === ke || y(ve, ke, c, g, w))) {
            ne = !1;
            break;
          }
        }
        return w.delete(a), w.delete(o), ne;
      }
      function FO(a, o, c, g, y, w, P) {
        switch (c) {
          case Qa:
            if (a.byteLength != o.byteLength || a.byteOffset != o.byteOffset)
              return !1;
            a = a.buffer, o = o.buffer;
          case eo:
            return !(a.byteLength != o.byteLength || !w(new Rs(a), new Rs(o)));
          case Oe:
          case xe:
          case Gt:
            return Sr(+a, +o);
          case te:
            return a.name == o.name && a.message == o.message;
          case Jr:
          case ia:
            return a == o + "";
          case re:
            var $ = nc;
          case qt:
            var L = g & O;
            if ($ || ($ = Ts), a.size != o.size && !L)
              return !1;
            var V = P.get(a);
            if (V)
              return V == o;
            g |= T, P.set(a, o);
            var Q = pg($(a), $(o), g, y, w, P);
            return P.delete(a), Q;
          case kr:
            if (oo)
              return oo.call(a) == oo.call(o);
        }
        return !1;
      }
      function BO(a, o, c, g, y, w) {
        var P = c & O, $ = Cc(a), L = $.length, V = Cc(o), Q = V.length;
        if (L != Q && !P)
          return !1;
        for (var Y = L; Y--; ) {
          var ne = $[Y];
          if (!(P ? ne in o : Ye.call(o, ne)))
            return !1;
        }
        var fe = w.get(a), ve = w.get(o);
        if (fe && ve)
          return fe == o && ve == a;
        var ke = !0;
        w.set(a, o), w.set(o, a);
        for (var ye = P; ++Y < L; ) {
          ne = $[Y];
          var Me = a[ne], Be = o[ne];
          if (g)
            var ir = P ? g(Be, Me, ne, o, a, w) : g(Me, Be, ne, a, o, w);
          if (!(ir === r ? Me === Be || y(Me, Be, c, g, w) : ir)) {
            ke = !1;
            break;
          }
          ye || (ye = ne == "constructor");
        }
        if (ke && !ye) {
          var Wt = a.constructor, or = o.constructor;
          Wt != or && "constructor" in a && "constructor" in o && !(typeof Wt == "function" && Wt instanceof Wt && typeof or == "function" && or instanceof or) && (ke = !1);
        }
        return w.delete(a), w.delete(o), ke;
      }
      function nn(a) {
        return Mc(bg(a, r, Cg), a + "");
      }
      function Cc(a) {
        return Nh(a, Rt, Ic);
      }
      function Ac(a) {
        return Nh(a, Kt, hg);
      }
      var $c = Ls ? function(a) {
        return Ls.get(a);
      } : Kc;
      function Xs(a) {
        for (var o = a.name + "", c = ri[o], g = Ye.call(ri, o) ? c.length : 0; g--; ) {
          var y = c[g], w = y.func;
          if (w == null || w == a)
            return y.name;
        }
        return o;
      }
      function oi(a) {
        var o = Ye.call(E, "placeholder") ? E : a;
        return o.placeholder;
      }
      function me() {
        var a = E.iteratee || Vc;
        return a = a === Vc ? Mh : a, arguments.length ? a(arguments[0], arguments[1]) : a;
      }
      function Js(a, o) {
        var c = a.__data__;
        return VO(o) ? c[typeof o == "string" ? "string" : "hash"] : c.map;
      }
      function Rc(a) {
        for (var o = Rt(a), c = o.length; c--; ) {
          var g = o[c], y = a[g];
          o[c] = [g, y, vg(y)];
        }
        return o;
      }
      function da(a, o) {
        var c = Y1(a, o);
        return Dh(c) ? c : r;
      }
      function UO(a) {
        var o = Ye.call(a, sa), c = a[sa];
        try {
          a[sa] = r;
          var g = !0;
        } catch {
        }
        var y = As.call(a);
        return g && (o ? a[sa] = c : delete a[sa]), y;
      }
      var Ic = ic ? function(a) {
        return a == null ? [] : (a = et(a), Nn(ic(a), function(o) {
          return Eh.call(a, o);
        }));
      } : Yc, hg = ic ? function(a) {
        for (var o = []; a; )
          kn(o, Ic(a)), a = Is(a);
        return o;
      } : Yc, Bt = jt;
      (oc && Bt(new oc(new ArrayBuffer(1))) != Qa || no && Bt(new no()) != re || sc && Bt(sc.resolve()) != aa || ti && Bt(new ti()) != qt || ao && Bt(new ao()) != Zi) && (Bt = function(a) {
        var o = jt(a), c = o == Lt ? a.constructor : r, g = c ? pa(c) : "";
        if (g)
          switch (g) {
            case S0:
              return Qa;
            case _0:
              return re;
            case O0:
              return aa;
            case T0:
              return qt;
            case x0:
              return Zi;
          }
        return o;
      });
      function zO(a, o, c) {
        for (var g = -1, y = c.length; ++g < y; ) {
          var w = c[g], P = w.size;
          switch (w.type) {
            case "drop":
              a += P;
              break;
            case "dropRight":
              o -= P;
              break;
            case "take":
              o = Ft(o, a + P);
              break;
            case "takeRight":
              a = Tt(a, o - P);
              break;
          }
        }
        return { start: a, end: o };
      }
      function qO(a) {
        var o = a.match(Q_);
        return o ? o[1].split(K_) : [];
      }
      function gg(a, o, c) {
        o = Bn(o, a);
        for (var g = -1, y = o.length, w = !1; ++g < y; ) {
          var P = Lr(o[g]);
          if (!(w = a != null && c(a, P)))
            break;
          a = a[P];
        }
        return w || ++g != y ? w : (y = a == null ? 0 : a.length, !!y && il(y) && an(P, y) && ($e(a) || ha(a)));
      }
      function jO(a) {
        var o = a.length, c = new a.constructor(o);
        return o && typeof a[0] == "string" && Ye.call(a, "index") && (c.index = a.index, c.input = a.input), c;
      }
      function mg(a) {
        return typeof a.constructor == "function" && !ho(a) ? ni(Is(a)) : {};
      }
      function HO(a, o, c) {
        var g = a.constructor;
        switch (o) {
          case eo:
            return Tc(a);
          case Oe:
          case xe:
            return new g(+a);
          case Qa:
            return PO(a, c);
          case Ru:
          case Iu:
          case Nu:
          case ku:
          case Du:
          case Mu:
          case Lu:
          case Fu:
          case Bu:
            return Jh(a, c);
          case re:
            return new g();
          case Gt:
          case ia:
            return new g(a);
          case Jr:
            return CO(a);
          case qt:
            return new g();
          case kr:
            return AO(a);
        }
      }
      function WO(a, o) {
        var c = o.length;
        if (!c)
          return a;
        var g = c - 1;
        return o[g] = (c > 1 ? "& " : "") + o[g], o = o.join(c > 2 ? ", " : " "), a.replace(V_, `{
/* [wrapped with ` + o + `] */
`);
      }
      function GO(a) {
        return $e(a) || ha(a) || !!(wh && a && a[wh]);
      }
      function an(a, o) {
        var c = typeof a;
        return o = o ?? qe, !!o && (c == "number" || c != "symbol" && a1.test(a)) && a > -1 && a % 1 == 0 && a < o;
      }
      function Ht(a, o, c) {
        if (!pt(c))
          return !1;
        var g = typeof o;
        return (g == "number" ? Qt(c) && an(o, c.length) : g == "string" && o in c) ? Sr(c[o], a) : !1;
      }
      function Nc(a, o) {
        if ($e(a))
          return !1;
        var c = typeof a;
        return c == "number" || c == "symbol" || c == "boolean" || a == null || ar(a) ? !0 : j_.test(a) || !q_.test(a) || o != null && a in et(o);
      }
      function VO(a) {
        var o = typeof a;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? a !== "__proto__" : a === null;
      }
      function kc(a) {
        var o = Xs(a), c = E[o];
        if (typeof c != "function" || !(o in Fe.prototype))
          return !1;
        if (a === c)
          return !0;
        var g = $c(c);
        return !!g && a === g[0];
      }
      function QO(a) {
        return !!vh && vh in a;
      }
      var KO = Ps ? on : Xc;
      function ho(a) {
        var o = a && a.constructor, c = typeof o == "function" && o.prototype || ei;
        return a === c;
      }
      function vg(a) {
        return a === a && !pt(a);
      }
      function yg(a, o) {
        return function(c) {
          return c == null ? !1 : c[a] === o && (o !== r || a in et(c));
        };
      }
      function YO(a) {
        var o = nl(a, function(g) {
          return c.size === p && c.clear(), g;
        }), c = o.cache;
        return o;
      }
      function XO(a, o) {
        var c = a[1], g = o[1], y = c | g, w = y < (_ | C | x), P = g == x && c == k || g == x && c == A && a[7].length <= o[8] || g == (x | A) && o[7].length <= o[8] && c == k;
        if (!(w || P))
          return a;
        g & _ && (a[2] = o[2], y |= c & _ ? 0 : M);
        var $ = o[3];
        if ($) {
          var L = a[3];
          a[3] = L ? eg(L, $, o[4]) : $, a[4] = L ? Dn(a[3], h) : o[4];
        }
        return $ = o[5], $ && (L = a[5], a[5] = L ? tg(L, $, o[6]) : $, a[6] = L ? Dn(a[5], h) : o[6]), $ = o[7], $ && (a[7] = $), g & x && (a[8] = a[8] == null ? o[8] : Ft(a[8], o[8])), a[9] == null && (a[9] = o[9]), a[0] = o[0], a[1] = y, a;
      }
      function JO(a) {
        var o = [];
        if (a != null)
          for (var c in et(a))
            o.push(c);
        return o;
      }
      function ZO(a) {
        return As.call(a);
      }
      function bg(a, o, c) {
        return o = Tt(o === r ? a.length - 1 : o, 0), function() {
          for (var g = arguments, y = -1, w = Tt(g.length - o, 0), P = z(w); ++y < w; )
            P[y] = g[o + y];
          y = -1;
          for (var $ = z(o + 1); ++y < o; )
            $[y] = g[y];
          return $[o] = c(P), tr(a, this, $);
        };
      }
      function Eg(a, o) {
        return o.length < 2 ? a : fa(a, hr(o, 0, -1));
      }
      function eT(a, o) {
        for (var c = a.length, g = Ft(o.length, c), y = Vt(a); g--; ) {
          var w = o[g];
          a[g] = an(w, c) ? y[w] : r;
        }
        return a;
      }
      function Dc(a, o) {
        if (!(o === "constructor" && typeof a[o] == "function") && o != "__proto__")
          return a[o];
      }
      var wg = _g(Hh), go = g0 || function(a, o) {
        return Nt.setTimeout(a, o);
      }, Mc = _g(_O);
      function Sg(a, o, c) {
        var g = o + "";
        return Mc(a, WO(g, tT(qO(g), c)));
      }
      function _g(a) {
        var o = 0, c = 0;
        return function() {
          var g = b0(), y = W - (g - c);
          if (c = g, y > 0) {
            if (++o >= X)
              return arguments[0];
          } else
            o = 0;
          return a.apply(r, arguments);
        };
      }
      function Zs(a, o) {
        var c = -1, g = a.length, y = g - 1;
        for (o = o === r ? g : o; ++c < o; ) {
          var w = yc(c, y), P = a[w];
          a[w] = a[c], a[c] = P;
        }
        return a.length = o, a;
      }
      var Og = YO(function(a) {
        var o = [];
        return a.charCodeAt(0) === 46 && o.push(""), a.replace(H_, function(c, g, y, w) {
          o.push(y ? w.replace(J_, "$1") : g || c);
        }), o;
      });
      function Lr(a) {
        if (typeof a == "string" || ar(a))
          return a;
        var o = a + "";
        return o == "0" && 1 / a == -Ae ? "-0" : o;
      }
      function pa(a) {
        if (a != null) {
          try {
            return Cs.call(a);
          } catch {
          }
          try {
            return a + "";
          } catch {
          }
        }
        return "";
      }
      function tT(a, o) {
        return cr(de, function(c) {
          var g = "_." + c[0];
          o & c[1] && !_s(a, g) && a.push(g);
        }), a.sort();
      }
      function Tg(a) {
        if (a instanceof Fe)
          return a.clone();
        var o = new dr(a.__wrapped__, a.__chain__);
        return o.__actions__ = Vt(a.__actions__), o.__index__ = a.__index__, o.__values__ = a.__values__, o;
      }
      function rT(a, o, c) {
        (c ? Ht(a, o, c) : o === r) ? o = 1 : o = Tt(Ne(o), 0);
        var g = a == null ? 0 : a.length;
        if (!g || o < 1)
          return [];
        for (var y = 0, w = 0, P = z(Ds(g / o)); y < g; )
          P[w++] = hr(a, y, y += o);
        return P;
      }
      function nT(a) {
        for (var o = -1, c = a == null ? 0 : a.length, g = 0, y = []; ++o < c; ) {
          var w = a[o];
          w && (y[g++] = w);
        }
        return y;
      }
      function aT() {
        var a = arguments.length;
        if (!a)
          return [];
        for (var o = z(a - 1), c = arguments[0], g = a; g--; )
          o[g - 1] = arguments[g];
        return kn($e(c) ? Vt(c) : [c], kt(o, 1));
      }
      var iT = De(function(a, o) {
        return vt(a) ? lo(a, kt(o, 1, vt, !0)) : [];
      }), oT = De(function(a, o) {
        var c = gr(o);
        return vt(c) && (c = r), vt(a) ? lo(a, kt(o, 1, vt, !0), me(c, 2)) : [];
      }), sT = De(function(a, o) {
        var c = gr(o);
        return vt(c) && (c = r), vt(a) ? lo(a, kt(o, 1, vt, !0), r, c) : [];
      });
      function lT(a, o, c) {
        var g = a == null ? 0 : a.length;
        return g ? (o = c || o === r ? 1 : Ne(o), hr(a, o < 0 ? 0 : o, g)) : [];
      }
      function uT(a, o, c) {
        var g = a == null ? 0 : a.length;
        return g ? (o = c || o === r ? 1 : Ne(o), o = g - o, hr(a, 0, o < 0 ? 0 : o)) : [];
      }
      function cT(a, o) {
        return a && a.length ? Ws(a, me(o, 3), !0, !0) : [];
      }
      function fT(a, o) {
        return a && a.length ? Ws(a, me(o, 3), !0) : [];
      }
      function dT(a, o, c, g) {
        var y = a == null ? 0 : a.length;
        return y ? (c && typeof c != "number" && Ht(a, o, c) && (c = 0, g = y), aO(a, o, c, g)) : [];
      }
      function xg(a, o, c) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var y = c == null ? 0 : Ne(c);
        return y < 0 && (y = Tt(g + y, 0)), Os(a, me(o, 3), y);
      }
      function Pg(a, o, c) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var y = g - 1;
        return c !== r && (y = Ne(c), y = c < 0 ? Tt(g + y, 0) : Ft(y, g - 1)), Os(a, me(o, 3), y, !0);
      }
      function Cg(a) {
        var o = a == null ? 0 : a.length;
        return o ? kt(a, 1) : [];
      }
      function pT(a) {
        var o = a == null ? 0 : a.length;
        return o ? kt(a, Ae) : [];
      }
      function hT(a, o) {
        var c = a == null ? 0 : a.length;
        return c ? (o = o === r ? 1 : Ne(o), kt(a, o)) : [];
      }
      function gT(a) {
        for (var o = -1, c = a == null ? 0 : a.length, g = {}; ++o < c; ) {
          var y = a[o];
          g[y[0]] = y[1];
        }
        return g;
      }
      function Ag(a) {
        return a && a.length ? a[0] : r;
      }
      function mT(a, o, c) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var y = c == null ? 0 : Ne(c);
        return y < 0 && (y = Tt(g + y, 0)), Ya(a, o, y);
      }
      function vT(a) {
        var o = a == null ? 0 : a.length;
        return o ? hr(a, 0, -1) : [];
      }
      var yT = De(function(a) {
        var o = ft(a, _c);
        return o.length && o[0] === a[0] ? pc(o) : [];
      }), bT = De(function(a) {
        var o = gr(a), c = ft(a, _c);
        return o === gr(c) ? o = r : c.pop(), c.length && c[0] === a[0] ? pc(c, me(o, 2)) : [];
      }), ET = De(function(a) {
        var o = gr(a), c = ft(a, _c);
        return o = typeof o == "function" ? o : r, o && c.pop(), c.length && c[0] === a[0] ? pc(c, r, o) : [];
      });
      function wT(a, o) {
        return a == null ? "" : v0.call(a, o);
      }
      function gr(a) {
        var o = a == null ? 0 : a.length;
        return o ? a[o - 1] : r;
      }
      function ST(a, o, c) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var y = g;
        return c !== r && (y = Ne(c), y = y < 0 ? Tt(g + y, 0) : Ft(y, g - 1)), o === o ? t0(a, o, y) : Os(a, uh, y, !0);
      }
      function _T(a, o) {
        return a && a.length ? Uh(a, Ne(o)) : r;
      }
      var OT = De($g);
      function $g(a, o) {
        return a && a.length && o && o.length ? vc(a, o) : a;
      }
      function TT(a, o, c) {
        return a && a.length && o && o.length ? vc(a, o, me(c, 2)) : a;
      }
      function xT(a, o, c) {
        return a && a.length && o && o.length ? vc(a, o, r, c) : a;
      }
      var PT = nn(function(a, o) {
        var c = a == null ? 0 : a.length, g = uc(a, o);
        return jh(a, ft(o, function(y) {
          return an(y, c) ? +y : y;
        }).sort(Zh)), g;
      });
      function CT(a, o) {
        var c = [];
        if (!(a && a.length))
          return c;
        var g = -1, y = [], w = a.length;
        for (o = me(o, 3); ++g < w; ) {
          var P = a[g];
          o(P, g, a) && (c.push(P), y.push(g));
        }
        return jh(a, y), c;
      }
      function Lc(a) {
        return a == null ? a : w0.call(a);
      }
      function AT(a, o, c) {
        var g = a == null ? 0 : a.length;
        return g ? (c && typeof c != "number" && Ht(a, o, c) ? (o = 0, c = g) : (o = o == null ? 0 : Ne(o), c = c === r ? g : Ne(c)), hr(a, o, c)) : [];
      }
      function $T(a, o) {
        return Hs(a, o);
      }
      function RT(a, o, c) {
        return Ec(a, o, me(c, 2));
      }
      function IT(a, o) {
        var c = a == null ? 0 : a.length;
        if (c) {
          var g = Hs(a, o);
          if (g < c && Sr(a[g], o))
            return g;
        }
        return -1;
      }
      function NT(a, o) {
        return Hs(a, o, !0);
      }
      function kT(a, o, c) {
        return Ec(a, o, me(c, 2), !0);
      }
      function DT(a, o) {
        var c = a == null ? 0 : a.length;
        if (c) {
          var g = Hs(a, o, !0) - 1;
          if (Sr(a[g], o))
            return g;
        }
        return -1;
      }
      function MT(a) {
        return a && a.length ? Wh(a) : [];
      }
      function LT(a, o) {
        return a && a.length ? Wh(a, me(o, 2)) : [];
      }
      function FT(a) {
        var o = a == null ? 0 : a.length;
        return o ? hr(a, 1, o) : [];
      }
      function BT(a, o, c) {
        return a && a.length ? (o = c || o === r ? 1 : Ne(o), hr(a, 0, o < 0 ? 0 : o)) : [];
      }
      function UT(a, o, c) {
        var g = a == null ? 0 : a.length;
        return g ? (o = c || o === r ? 1 : Ne(o), o = g - o, hr(a, o < 0 ? 0 : o, g)) : [];
      }
      function zT(a, o) {
        return a && a.length ? Ws(a, me(o, 3), !1, !0) : [];
      }
      function qT(a, o) {
        return a && a.length ? Ws(a, me(o, 3)) : [];
      }
      var jT = De(function(a) {
        return Fn(kt(a, 1, vt, !0));
      }), HT = De(function(a) {
        var o = gr(a);
        return vt(o) && (o = r), Fn(kt(a, 1, vt, !0), me(o, 2));
      }), WT = De(function(a) {
        var o = gr(a);
        return o = typeof o == "function" ? o : r, Fn(kt(a, 1, vt, !0), r, o);
      });
      function GT(a) {
        return a && a.length ? Fn(a) : [];
      }
      function VT(a, o) {
        return a && a.length ? Fn(a, me(o, 2)) : [];
      }
      function QT(a, o) {
        return o = typeof o == "function" ? o : r, a && a.length ? Fn(a, r, o) : [];
      }
      function Fc(a) {
        if (!(a && a.length))
          return [];
        var o = 0;
        return a = Nn(a, function(c) {
          if (vt(c))
            return o = Tt(c.length, o), !0;
        }), tc(o, function(c) {
          return ft(a, Ju(c));
        });
      }
      function Rg(a, o) {
        if (!(a && a.length))
          return [];
        var c = Fc(a);
        return o == null ? c : ft(c, function(g) {
          return tr(o, r, g);
        });
      }
      var KT = De(function(a, o) {
        return vt(a) ? lo(a, o) : [];
      }), YT = De(function(a) {
        return Sc(Nn(a, vt));
      }), XT = De(function(a) {
        var o = gr(a);
        return vt(o) && (o = r), Sc(Nn(a, vt), me(o, 2));
      }), JT = De(function(a) {
        var o = gr(a);
        return o = typeof o == "function" ? o : r, Sc(Nn(a, vt), r, o);
      }), ZT = De(Fc);
      function ex(a, o) {
        return Kh(a || [], o || [], so);
      }
      function tx(a, o) {
        return Kh(a || [], o || [], fo);
      }
      var rx = De(function(a) {
        var o = a.length, c = o > 1 ? a[o - 1] : r;
        return c = typeof c == "function" ? (a.pop(), c) : r, Rg(a, c);
      });
      function Ig(a) {
        var o = E(a);
        return o.__chain__ = !0, o;
      }
      function nx(a, o) {
        return o(a), a;
      }
      function el(a, o) {
        return o(a);
      }
      var ax = nn(function(a) {
        var o = a.length, c = o ? a[0] : 0, g = this.__wrapped__, y = function(w) {
          return uc(w, a);
        };
        return o > 1 || this.__actions__.length || !(g instanceof Fe) || !an(c) ? this.thru(y) : (g = g.slice(c, +c + (o ? 1 : 0)), g.__actions__.push({
          func: el,
          args: [y],
          thisArg: r
        }), new dr(g, this.__chain__).thru(function(w) {
          return o && !w.length && w.push(r), w;
        }));
      });
      function ix() {
        return Ig(this);
      }
      function ox() {
        return new dr(this.value(), this.__chain__);
      }
      function sx() {
        this.__values__ === r && (this.__values__ = Gg(this.value()));
        var a = this.__index__ >= this.__values__.length, o = a ? r : this.__values__[this.__index__++];
        return { done: a, value: o };
      }
      function lx() {
        return this;
      }
      function ux(a) {
        for (var o, c = this; c instanceof Bs; ) {
          var g = Tg(c);
          g.__index__ = 0, g.__values__ = r, o ? y.__wrapped__ = g : o = g;
          var y = g;
          c = c.__wrapped__;
        }
        return y.__wrapped__ = a, o;
      }
      function cx() {
        var a = this.__wrapped__;
        if (a instanceof Fe) {
          var o = a;
          return this.__actions__.length && (o = new Fe(this)), o = o.reverse(), o.__actions__.push({
            func: el,
            args: [Lc],
            thisArg: r
          }), new dr(o, this.__chain__);
        }
        return this.thru(Lc);
      }
      function fx() {
        return Qh(this.__wrapped__, this.__actions__);
      }
      var dx = Gs(function(a, o, c) {
        Ye.call(a, c) ? ++a[c] : tn(a, c, 1);
      });
      function px(a, o, c) {
        var g = $e(a) ? sh : nO;
        return c && Ht(a, o, c) && (o = r), g(a, me(o, 3));
      }
      function hx(a, o) {
        var c = $e(a) ? Nn : Rh;
        return c(a, me(o, 3));
      }
      var gx = ig(xg), mx = ig(Pg);
      function vx(a, o) {
        return kt(tl(a, o), 1);
      }
      function yx(a, o) {
        return kt(tl(a, o), Ae);
      }
      function bx(a, o, c) {
        return c = c === r ? 1 : Ne(c), kt(tl(a, o), c);
      }
      function Ng(a, o) {
        var c = $e(a) ? cr : Ln;
        return c(a, me(o, 3));
      }
      function kg(a, o) {
        var c = $e(a) ? F1 : $h;
        return c(a, me(o, 3));
      }
      var Ex = Gs(function(a, o, c) {
        Ye.call(a, c) ? a[c].push(o) : tn(a, c, [o]);
      });
      function wx(a, o, c, g) {
        a = Qt(a) ? a : li(a), c = c && !g ? Ne(c) : 0;
        var y = a.length;
        return c < 0 && (c = Tt(y + c, 0)), ol(a) ? c <= y && a.indexOf(o, c) > -1 : !!y && Ya(a, o, c) > -1;
      }
      var Sx = De(function(a, o, c) {
        var g = -1, y = typeof o == "function", w = Qt(a) ? z(a.length) : [];
        return Ln(a, function(P) {
          w[++g] = y ? tr(o, P, c) : uo(P, o, c);
        }), w;
      }), _x = Gs(function(a, o, c) {
        tn(a, c, o);
      });
      function tl(a, o) {
        var c = $e(a) ? ft : Lh;
        return c(a, me(o, 3));
      }
      function Ox(a, o, c, g) {
        return a == null ? [] : ($e(o) || (o = o == null ? [] : [o]), c = g ? r : c, $e(c) || (c = c == null ? [] : [c]), zh(a, o, c));
      }
      var Tx = Gs(function(a, o, c) {
        a[c ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function xx(a, o, c) {
        var g = $e(a) ? Yu : fh, y = arguments.length < 3;
        return g(a, me(o, 4), c, y, Ln);
      }
      function Px(a, o, c) {
        var g = $e(a) ? B1 : fh, y = arguments.length < 3;
        return g(a, me(o, 4), c, y, $h);
      }
      function Cx(a, o) {
        var c = $e(a) ? Nn : Rh;
        return c(a, al(me(o, 3)));
      }
      function Ax(a) {
        var o = $e(a) ? xh : wO;
        return o(a);
      }
      function $x(a, o, c) {
        (c ? Ht(a, o, c) : o === r) ? o = 1 : o = Ne(o);
        var g = $e(a) ? J0 : SO;
        return g(a, o);
      }
      function Rx(a) {
        var o = $e(a) ? Z0 : OO;
        return o(a);
      }
      function Ix(a) {
        if (a == null)
          return 0;
        if (Qt(a))
          return ol(a) ? Ja(a) : a.length;
        var o = Bt(a);
        return o == re || o == qt ? a.size : gc(a).length;
      }
      function Nx(a, o, c) {
        var g = $e(a) ? Xu : TO;
        return c && Ht(a, o, c) && (o = r), g(a, me(o, 3));
      }
      var kx = De(function(a, o) {
        if (a == null)
          return [];
        var c = o.length;
        return c > 1 && Ht(a, o[0], o[1]) ? o = [] : c > 2 && Ht(o[0], o[1], o[2]) && (o = [o[0]]), zh(a, kt(o, 1), []);
      }), rl = h0 || function() {
        return Nt.Date.now();
      };
      function Dx(a, o) {
        if (typeof o != "function")
          throw new fr(l);
        return a = Ne(a), function() {
          if (--a < 1)
            return o.apply(this, arguments);
        };
      }
      function Dg(a, o, c) {
        return o = c ? r : o, o = a && o == null ? a.length : o, rn(a, x, r, r, r, r, o);
      }
      function Mg(a, o) {
        var c;
        if (typeof o != "function")
          throw new fr(l);
        return a = Ne(a), function() {
          return --a > 0 && (c = o.apply(this, arguments)), a <= 1 && (o = r), c;
        };
      }
      var Bc = De(function(a, o, c) {
        var g = _;
        if (c.length) {
          var y = Dn(c, oi(Bc));
          g |= R;
        }
        return rn(a, g, o, c, y);
      }), Lg = De(function(a, o, c) {
        var g = _ | C;
        if (c.length) {
          var y = Dn(c, oi(Lg));
          g |= R;
        }
        return rn(o, g, a, c, y);
      });
      function Fg(a, o, c) {
        o = c ? r : o;
        var g = rn(a, k, r, r, r, r, r, o);
        return g.placeholder = Fg.placeholder, g;
      }
      function Bg(a, o, c) {
        o = c ? r : o;
        var g = rn(a, U, r, r, r, r, r, o);
        return g.placeholder = Bg.placeholder, g;
      }
      function Ug(a, o, c) {
        var g, y, w, P, $, L, V = 0, Q = !1, Y = !1, ne = !0;
        if (typeof a != "function")
          throw new fr(l);
        o = mr(o) || 0, pt(c) && (Q = !!c.leading, Y = "maxWait" in c, w = Y ? Tt(mr(c.maxWait) || 0, o) : w, ne = "trailing" in c ? !!c.trailing : ne);
        function fe(yt) {
          var _r = g, ln = y;
          return g = y = r, V = yt, P = a.apply(ln, _r), P;
        }
        function ve(yt) {
          return V = yt, $ = go(Me, o), Q ? fe(yt) : P;
        }
        function ke(yt) {
          var _r = yt - L, ln = yt - V, im = o - _r;
          return Y ? Ft(im, w - ln) : im;
        }
        function ye(yt) {
          var _r = yt - L, ln = yt - V;
          return L === r || _r >= o || _r < 0 || Y && ln >= w;
        }
        function Me() {
          var yt = rl();
          if (ye(yt))
            return Be(yt);
          $ = go(Me, ke(yt));
        }
        function Be(yt) {
          return $ = r, ne && g ? fe(yt) : (g = y = r, P);
        }
        function ir() {
          $ !== r && Yh($), V = 0, g = L = y = $ = r;
        }
        function Wt() {
          return $ === r ? P : Be(rl());
        }
        function or() {
          var yt = rl(), _r = ye(yt);
          if (g = arguments, y = this, L = yt, _r) {
            if ($ === r)
              return ve(L);
            if (Y)
              return Yh($), $ = go(Me, o), fe(L);
          }
          return $ === r && ($ = go(Me, o)), P;
        }
        return or.cancel = ir, or.flush = Wt, or;
      }
      var Mx = De(function(a, o) {
        return Ah(a, 1, o);
      }), Lx = De(function(a, o, c) {
        return Ah(a, mr(o) || 0, c);
      });
      function Fx(a) {
        return rn(a, I);
      }
      function nl(a, o) {
        if (typeof a != "function" || o != null && typeof o != "function")
          throw new fr(l);
        var c = function() {
          var g = arguments, y = o ? o.apply(this, g) : g[0], w = c.cache;
          if (w.has(y))
            return w.get(y);
          var P = a.apply(this, g);
          return c.cache = w.set(y, P) || w, P;
        };
        return c.cache = new (nl.Cache || en)(), c;
      }
      nl.Cache = en;
      function al(a) {
        if (typeof a != "function")
          throw new fr(l);
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
      function Bx(a) {
        return Mg(2, a);
      }
      var Ux = xO(function(a, o) {
        o = o.length == 1 && $e(o[0]) ? ft(o[0], rr(me())) : ft(kt(o, 1), rr(me()));
        var c = o.length;
        return De(function(g) {
          for (var y = -1, w = Ft(g.length, c); ++y < w; )
            g[y] = o[y].call(this, g[y]);
          return tr(a, this, g);
        });
      }), Uc = De(function(a, o) {
        var c = Dn(o, oi(Uc));
        return rn(a, R, r, o, c);
      }), zg = De(function(a, o) {
        var c = Dn(o, oi(zg));
        return rn(a, F, r, o, c);
      }), zx = nn(function(a, o) {
        return rn(a, A, r, r, r, o);
      });
      function qx(a, o) {
        if (typeof a != "function")
          throw new fr(l);
        return o = o === r ? o : Ne(o), De(a, o);
      }
      function jx(a, o) {
        if (typeof a != "function")
          throw new fr(l);
        return o = o == null ? 0 : Tt(Ne(o), 0), De(function(c) {
          var g = c[o], y = Un(c, 0, o);
          return g && kn(y, g), tr(a, this, y);
        });
      }
      function Hx(a, o, c) {
        var g = !0, y = !0;
        if (typeof a != "function")
          throw new fr(l);
        return pt(c) && (g = "leading" in c ? !!c.leading : g, y = "trailing" in c ? !!c.trailing : y), Ug(a, o, {
          leading: g,
          maxWait: o,
          trailing: y
        });
      }
      function Wx(a) {
        return Dg(a, 1);
      }
      function Gx(a, o) {
        return Uc(Oc(o), a);
      }
      function Vx() {
        if (!arguments.length)
          return [];
        var a = arguments[0];
        return $e(a) ? a : [a];
      }
      function Qx(a) {
        return pr(a, S);
      }
      function Kx(a, o) {
        return o = typeof o == "function" ? o : r, pr(a, S, o);
      }
      function Yx(a) {
        return pr(a, m | S);
      }
      function Xx(a, o) {
        return o = typeof o == "function" ? o : r, pr(a, m | S, o);
      }
      function Jx(a, o) {
        return o == null || Ch(a, o, Rt(o));
      }
      function Sr(a, o) {
        return a === o || a !== a && o !== o;
      }
      var Zx = Ys(dc), eP = Ys(function(a, o) {
        return a >= o;
      }), ha = kh(function() {
        return arguments;
      }()) ? kh : function(a) {
        return gt(a) && Ye.call(a, "callee") && !Eh.call(a, "callee");
      }, $e = z.isArray, tP = th ? rr(th) : uO;
      function Qt(a) {
        return a != null && il(a.length) && !on(a);
      }
      function vt(a) {
        return gt(a) && Qt(a);
      }
      function rP(a) {
        return a === !0 || a === !1 || gt(a) && jt(a) == Oe;
      }
      var zn = m0 || Xc, nP = rh ? rr(rh) : cO;
      function aP(a) {
        return gt(a) && a.nodeType === 1 && !mo(a);
      }
      function iP(a) {
        if (a == null)
          return !0;
        if (Qt(a) && ($e(a) || typeof a == "string" || typeof a.splice == "function" || zn(a) || si(a) || ha(a)))
          return !a.length;
        var o = Bt(a);
        if (o == re || o == qt)
          return !a.size;
        if (ho(a))
          return !gc(a).length;
        for (var c in a)
          if (Ye.call(a, c))
            return !1;
        return !0;
      }
      function oP(a, o) {
        return co(a, o);
      }
      function sP(a, o, c) {
        c = typeof c == "function" ? c : r;
        var g = c ? c(a, o) : r;
        return g === r ? co(a, o, r, c) : !!g;
      }
      function zc(a) {
        if (!gt(a))
          return !1;
        var o = jt(a);
        return o == te || o == Ie || typeof a.message == "string" && typeof a.name == "string" && !mo(a);
      }
      function lP(a) {
        return typeof a == "number" && Sh(a);
      }
      function on(a) {
        if (!pt(a))
          return !1;
        var o = jt(a);
        return o == ee || o == ht || o == _e || o == bs;
      }
      function qg(a) {
        return typeof a == "number" && a == Ne(a);
      }
      function il(a) {
        return typeof a == "number" && a > -1 && a % 1 == 0 && a <= qe;
      }
      function pt(a) {
        var o = typeof a;
        return a != null && (o == "object" || o == "function");
      }
      function gt(a) {
        return a != null && typeof a == "object";
      }
      var jg = nh ? rr(nh) : dO;
      function uP(a, o) {
        return a === o || hc(a, o, Rc(o));
      }
      function cP(a, o, c) {
        return c = typeof c == "function" ? c : r, hc(a, o, Rc(o), c);
      }
      function fP(a) {
        return Hg(a) && a != +a;
      }
      function dP(a) {
        if (KO(a))
          throw new Pe(s);
        return Dh(a);
      }
      function pP(a) {
        return a === null;
      }
      function hP(a) {
        return a == null;
      }
      function Hg(a) {
        return typeof a == "number" || gt(a) && jt(a) == Gt;
      }
      function mo(a) {
        if (!gt(a) || jt(a) != Lt)
          return !1;
        var o = Is(a);
        if (o === null)
          return !0;
        var c = Ye.call(o, "constructor") && o.constructor;
        return typeof c == "function" && c instanceof c && Cs.call(c) == c0;
      }
      var qc = ah ? rr(ah) : pO;
      function gP(a) {
        return qg(a) && a >= -qe && a <= qe;
      }
      var Wg = ih ? rr(ih) : hO;
      function ol(a) {
        return typeof a == "string" || !$e(a) && gt(a) && jt(a) == ia;
      }
      function ar(a) {
        return typeof a == "symbol" || gt(a) && jt(a) == kr;
      }
      var si = oh ? rr(oh) : gO;
      function mP(a) {
        return a === r;
      }
      function vP(a) {
        return gt(a) && Bt(a) == Zi;
      }
      function yP(a) {
        return gt(a) && jt(a) == k_;
      }
      var bP = Ys(mc), EP = Ys(function(a, o) {
        return a <= o;
      });
      function Gg(a) {
        if (!a)
          return [];
        if (Qt(a))
          return ol(a) ? Er(a) : Vt(a);
        if (ro && a[ro])
          return J1(a[ro]());
        var o = Bt(a), c = o == re ? nc : o == qt ? Ts : li;
        return c(a);
      }
      function sn(a) {
        if (!a)
          return a === 0 ? a : 0;
        if (a = mr(a), a === Ae || a === -Ae) {
          var o = a < 0 ? -1 : 1;
          return o * ct;
        }
        return a === a ? a : 0;
      }
      function Ne(a) {
        var o = sn(a), c = o % 1;
        return o === o ? c ? o - c : o : 0;
      }
      function Vg(a) {
        return a ? ca(Ne(a), 0, J) : 0;
      }
      function mr(a) {
        if (typeof a == "number")
          return a;
        if (ar(a))
          return K;
        if (pt(a)) {
          var o = typeof a.valueOf == "function" ? a.valueOf() : a;
          a = pt(o) ? o + "" : o;
        }
        if (typeof a != "string")
          return a === 0 ? a : +a;
        a = dh(a);
        var c = t1.test(a);
        return c || n1.test(a) ? D1(a.slice(2), c ? 2 : 8) : e1.test(a) ? K : +a;
      }
      function Qg(a) {
        return Mr(a, Kt(a));
      }
      function wP(a) {
        return a ? ca(Ne(a), -qe, qe) : a === 0 ? a : 0;
      }
      function We(a) {
        return a == null ? "" : nr(a);
      }
      var SP = ai(function(a, o) {
        if (ho(o) || Qt(o)) {
          Mr(o, Rt(o), a);
          return;
        }
        for (var c in o)
          Ye.call(o, c) && so(a, c, o[c]);
      }), Kg = ai(function(a, o) {
        Mr(o, Kt(o), a);
      }), sl = ai(function(a, o, c, g) {
        Mr(o, Kt(o), a, g);
      }), _P = ai(function(a, o, c, g) {
        Mr(o, Rt(o), a, g);
      }), OP = nn(uc);
      function TP(a, o) {
        var c = ni(a);
        return o == null ? c : Ph(c, o);
      }
      var xP = De(function(a, o) {
        a = et(a);
        var c = -1, g = o.length, y = g > 2 ? o[2] : r;
        for (y && Ht(o[0], o[1], y) && (g = 1); ++c < g; )
          for (var w = o[c], P = Kt(w), $ = -1, L = P.length; ++$ < L; ) {
            var V = P[$], Q = a[V];
            (Q === r || Sr(Q, ei[V]) && !Ye.call(a, V)) && (a[V] = w[V]);
          }
        return a;
      }), PP = De(function(a) {
        return a.push(r, dg), tr(Yg, r, a);
      });
      function CP(a, o) {
        return lh(a, me(o, 3), Dr);
      }
      function AP(a, o) {
        return lh(a, me(o, 3), fc);
      }
      function $P(a, o) {
        return a == null ? a : cc(a, me(o, 3), Kt);
      }
      function RP(a, o) {
        return a == null ? a : Ih(a, me(o, 3), Kt);
      }
      function IP(a, o) {
        return a && Dr(a, me(o, 3));
      }
      function NP(a, o) {
        return a && fc(a, me(o, 3));
      }
      function kP(a) {
        return a == null ? [] : qs(a, Rt(a));
      }
      function DP(a) {
        return a == null ? [] : qs(a, Kt(a));
      }
      function jc(a, o, c) {
        var g = a == null ? r : fa(a, o);
        return g === r ? c : g;
      }
      function MP(a, o) {
        return a != null && gg(a, o, iO);
      }
      function Hc(a, o) {
        return a != null && gg(a, o, oO);
      }
      var LP = sg(function(a, o, c) {
        o != null && typeof o.toString != "function" && (o = As.call(o)), a[o] = c;
      }, Gc(Yt)), FP = sg(function(a, o, c) {
        o != null && typeof o.toString != "function" && (o = As.call(o)), Ye.call(a, o) ? a[o].push(c) : a[o] = [c];
      }, me), BP = De(uo);
      function Rt(a) {
        return Qt(a) ? Th(a) : gc(a);
      }
      function Kt(a) {
        return Qt(a) ? Th(a, !0) : mO(a);
      }
      function UP(a, o) {
        var c = {};
        return o = me(o, 3), Dr(a, function(g, y, w) {
          tn(c, o(g, y, w), g);
        }), c;
      }
      function zP(a, o) {
        var c = {};
        return o = me(o, 3), Dr(a, function(g, y, w) {
          tn(c, y, o(g, y, w));
        }), c;
      }
      var qP = ai(function(a, o, c) {
        js(a, o, c);
      }), Yg = ai(function(a, o, c, g) {
        js(a, o, c, g);
      }), jP = nn(function(a, o) {
        var c = {};
        if (a == null)
          return c;
        var g = !1;
        o = ft(o, function(w) {
          return w = Bn(w, a), g || (g = w.length > 1), w;
        }), Mr(a, Ac(a), c), g && (c = pr(c, m | v | S, LO));
        for (var y = o.length; y--; )
          wc(c, o[y]);
        return c;
      });
      function HP(a, o) {
        return Xg(a, al(me(o)));
      }
      var WP = nn(function(a, o) {
        return a == null ? {} : yO(a, o);
      });
      function Xg(a, o) {
        if (a == null)
          return {};
        var c = ft(Ac(a), function(g) {
          return [g];
        });
        return o = me(o), qh(a, c, function(g, y) {
          return o(g, y[0]);
        });
      }
      function GP(a, o, c) {
        o = Bn(o, a);
        var g = -1, y = o.length;
        for (y || (y = 1, a = r); ++g < y; ) {
          var w = a == null ? r : a[Lr(o[g])];
          w === r && (g = y, w = c), a = on(w) ? w.call(a) : w;
        }
        return a;
      }
      function VP(a, o, c) {
        return a == null ? a : fo(a, o, c);
      }
      function QP(a, o, c, g) {
        return g = typeof g == "function" ? g : r, a == null ? a : fo(a, o, c, g);
      }
      var Jg = cg(Rt), Zg = cg(Kt);
      function KP(a, o, c) {
        var g = $e(a), y = g || zn(a) || si(a);
        if (o = me(o, 4), c == null) {
          var w = a && a.constructor;
          y ? c = g ? new w() : [] : pt(a) ? c = on(w) ? ni(Is(a)) : {} : c = {};
        }
        return (y ? cr : Dr)(a, function(P, $, L) {
          return o(c, P, $, L);
        }), c;
      }
      function YP(a, o) {
        return a == null ? !0 : wc(a, o);
      }
      function XP(a, o, c) {
        return a == null ? a : Vh(a, o, Oc(c));
      }
      function JP(a, o, c, g) {
        return g = typeof g == "function" ? g : r, a == null ? a : Vh(a, o, Oc(c), g);
      }
      function li(a) {
        return a == null ? [] : rc(a, Rt(a));
      }
      function ZP(a) {
        return a == null ? [] : rc(a, Kt(a));
      }
      function eC(a, o, c) {
        return c === r && (c = o, o = r), c !== r && (c = mr(c), c = c === c ? c : 0), o !== r && (o = mr(o), o = o === o ? o : 0), ca(mr(a), o, c);
      }
      function tC(a, o, c) {
        return o = sn(o), c === r ? (c = o, o = 0) : c = sn(c), a = mr(a), sO(a, o, c);
      }
      function rC(a, o, c) {
        if (c && typeof c != "boolean" && Ht(a, o, c) && (o = c = r), c === r && (typeof o == "boolean" ? (c = o, o = r) : typeof a == "boolean" && (c = a, a = r)), a === r && o === r ? (a = 0, o = 1) : (a = sn(a), o === r ? (o = a, a = 0) : o = sn(o)), a > o) {
          var g = a;
          a = o, o = g;
        }
        if (c || a % 1 || o % 1) {
          var y = _h();
          return Ft(a + y * (o - a + k1("1e-" + ((y + "").length - 1))), o);
        }
        return yc(a, o);
      }
      var nC = ii(function(a, o, c) {
        return o = o.toLowerCase(), a + (c ? em(o) : o);
      });
      function em(a) {
        return Wc(We(a).toLowerCase());
      }
      function tm(a) {
        return a = We(a), a && a.replace(i1, V1).replace(O1, "");
      }
      function aC(a, o, c) {
        a = We(a), o = nr(o);
        var g = a.length;
        c = c === r ? g : ca(Ne(c), 0, g);
        var y = c;
        return c -= o.length, c >= 0 && a.slice(c, y) == o;
      }
      function iC(a) {
        return a = We(a), a && B_.test(a) ? a.replace(Ip, Q1) : a;
      }
      function oC(a) {
        return a = We(a), a && W_.test(a) ? a.replace(Uu, "\\$&") : a;
      }
      var sC = ii(function(a, o, c) {
        return a + (c ? "-" : "") + o.toLowerCase();
      }), lC = ii(function(a, o, c) {
        return a + (c ? " " : "") + o.toLowerCase();
      }), uC = ag("toLowerCase");
      function cC(a, o, c) {
        a = We(a), o = Ne(o);
        var g = o ? Ja(a) : 0;
        if (!o || g >= o)
          return a;
        var y = (o - g) / 2;
        return Ks(Ms(y), c) + a + Ks(Ds(y), c);
      }
      function fC(a, o, c) {
        a = We(a), o = Ne(o);
        var g = o ? Ja(a) : 0;
        return o && g < o ? a + Ks(o - g, c) : a;
      }
      function dC(a, o, c) {
        a = We(a), o = Ne(o);
        var g = o ? Ja(a) : 0;
        return o && g < o ? Ks(o - g, c) + a : a;
      }
      function pC(a, o, c) {
        return c || o == null ? o = 0 : o && (o = +o), E0(We(a).replace(zu, ""), o || 0);
      }
      function hC(a, o, c) {
        return (c ? Ht(a, o, c) : o === r) ? o = 1 : o = Ne(o), bc(We(a), o);
      }
      function gC() {
        var a = arguments, o = We(a[0]);
        return a.length < 3 ? o : o.replace(a[1], a[2]);
      }
      var mC = ii(function(a, o, c) {
        return a + (c ? "_" : "") + o.toLowerCase();
      });
      function vC(a, o, c) {
        return c && typeof c != "number" && Ht(a, o, c) && (o = c = r), c = c === r ? J : c >>> 0, c ? (a = We(a), a && (typeof o == "string" || o != null && !qc(o)) && (o = nr(o), !o && Xa(a)) ? Un(Er(a), 0, c) : a.split(o, c)) : [];
      }
      var yC = ii(function(a, o, c) {
        return a + (c ? " " : "") + Wc(o);
      });
      function bC(a, o, c) {
        return a = We(a), c = c == null ? 0 : ca(Ne(c), 0, a.length), o = nr(o), a.slice(c, c + o.length) == o;
      }
      function EC(a, o, c) {
        var g = E.templateSettings;
        c && Ht(a, o, c) && (o = r), a = We(a), o = sl({}, o, g, fg);
        var y = sl({}, o.imports, g.imports, fg), w = Rt(y), P = rc(y, w), $, L, V = 0, Q = o.interpolate || Es, Y = "__p += '", ne = ac(
          (o.escape || Es).source + "|" + Q.source + "|" + (Q === Np ? Z_ : Es).source + "|" + (o.evaluate || Es).source + "|$",
          "g"
        ), fe = "//# sourceURL=" + (Ye.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++A1 + "]") + `
`;
        a.replace(ne, function(ye, Me, Be, ir, Wt, or) {
          return Be || (Be = ir), Y += a.slice(V, or).replace(o1, K1), Me && ($ = !0, Y += `' +
__e(` + Me + `) +
'`), Wt && (L = !0, Y += `';
` + Wt + `;
__p += '`), Be && (Y += `' +
((__t = (` + Be + `)) == null ? '' : __t) +
'`), V = or + ye.length, ye;
        }), Y += `';
`;
        var ve = Ye.call(o, "variable") && o.variable;
        if (!ve)
          Y = `with (obj) {
` + Y + `
}
`;
        else if (X_.test(ve))
          throw new Pe(u);
        Y = (L ? Y.replace(D_, "") : Y).replace(M_, "$1").replace(L_, "$1;"), Y = "function(" + (ve || "obj") + `) {
` + (ve ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + ($ ? ", __e = _.escape" : "") + (L ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Y + `return __p
}`;
        var ke = nm(function() {
          return je(w, fe + "return " + Y).apply(r, P);
        });
        if (ke.source = Y, zc(ke))
          throw ke;
        return ke;
      }
      function wC(a) {
        return We(a).toLowerCase();
      }
      function SC(a) {
        return We(a).toUpperCase();
      }
      function _C(a, o, c) {
        if (a = We(a), a && (c || o === r))
          return dh(a);
        if (!a || !(o = nr(o)))
          return a;
        var g = Er(a), y = Er(o), w = ph(g, y), P = hh(g, y) + 1;
        return Un(g, w, P).join("");
      }
      function OC(a, o, c) {
        if (a = We(a), a && (c || o === r))
          return a.slice(0, mh(a) + 1);
        if (!a || !(o = nr(o)))
          return a;
        var g = Er(a), y = hh(g, Er(o)) + 1;
        return Un(g, 0, y).join("");
      }
      function TC(a, o, c) {
        if (a = We(a), a && (c || o === r))
          return a.replace(zu, "");
        if (!a || !(o = nr(o)))
          return a;
        var g = Er(a), y = ph(g, Er(o));
        return Un(g, y).join("");
      }
      function xC(a, o) {
        var c = B, g = G;
        if (pt(o)) {
          var y = "separator" in o ? o.separator : y;
          c = "length" in o ? Ne(o.length) : c, g = "omission" in o ? nr(o.omission) : g;
        }
        a = We(a);
        var w = a.length;
        if (Xa(a)) {
          var P = Er(a);
          w = P.length;
        }
        if (c >= w)
          return a;
        var $ = c - Ja(g);
        if ($ < 1)
          return g;
        var L = P ? Un(P, 0, $).join("") : a.slice(0, $);
        if (y === r)
          return L + g;
        if (P && ($ += L.length - $), qc(y)) {
          if (a.slice($).search(y)) {
            var V, Q = L;
            for (y.global || (y = ac(y.source, We(kp.exec(y)) + "g")), y.lastIndex = 0; V = y.exec(Q); )
              var Y = V.index;
            L = L.slice(0, Y === r ? $ : Y);
          }
        } else if (a.indexOf(nr(y), $) != $) {
          var ne = L.lastIndexOf(y);
          ne > -1 && (L = L.slice(0, ne));
        }
        return L + g;
      }
      function PC(a) {
        return a = We(a), a && F_.test(a) ? a.replace(Rp, r0) : a;
      }
      var CC = ii(function(a, o, c) {
        return a + (c ? " " : "") + o.toUpperCase();
      }), Wc = ag("toUpperCase");
      function rm(a, o, c) {
        return a = We(a), o = c ? r : o, o === r ? X1(a) ? i0(a) : q1(a) : a.match(o) || [];
      }
      var nm = De(function(a, o) {
        try {
          return tr(a, r, o);
        } catch (c) {
          return zc(c) ? c : new Pe(c);
        }
      }), AC = nn(function(a, o) {
        return cr(o, function(c) {
          c = Lr(c), tn(a, c, Bc(a[c], a));
        }), a;
      });
      function $C(a) {
        var o = a == null ? 0 : a.length, c = me();
        return a = o ? ft(a, function(g) {
          if (typeof g[1] != "function")
            throw new fr(l);
          return [c(g[0]), g[1]];
        }) : [], De(function(g) {
          for (var y = -1; ++y < o; ) {
            var w = a[y];
            if (tr(w[0], this, g))
              return tr(w[1], this, g);
          }
        });
      }
      function RC(a) {
        return rO(pr(a, m));
      }
      function Gc(a) {
        return function() {
          return a;
        };
      }
      function IC(a, o) {
        return a == null || a !== a ? o : a;
      }
      var NC = og(), kC = og(!0);
      function Yt(a) {
        return a;
      }
      function Vc(a) {
        return Mh(typeof a == "function" ? a : pr(a, m));
      }
      function DC(a) {
        return Fh(pr(a, m));
      }
      function MC(a, o) {
        return Bh(a, pr(o, m));
      }
      var LC = De(function(a, o) {
        return function(c) {
          return uo(c, a, o);
        };
      }), FC = De(function(a, o) {
        return function(c) {
          return uo(a, c, o);
        };
      });
      function Qc(a, o, c) {
        var g = Rt(o), y = qs(o, g);
        c == null && !(pt(o) && (y.length || !g.length)) && (c = o, o = a, a = this, y = qs(o, Rt(o)));
        var w = !(pt(c) && "chain" in c) || !!c.chain, P = on(a);
        return cr(y, function($) {
          var L = o[$];
          a[$] = L, P && (a.prototype[$] = function() {
            var V = this.__chain__;
            if (w || V) {
              var Q = a(this.__wrapped__), Y = Q.__actions__ = Vt(this.__actions__);
              return Y.push({ func: L, args: arguments, thisArg: a }), Q.__chain__ = V, Q;
            }
            return L.apply(a, kn([this.value()], arguments));
          });
        }), a;
      }
      function BC() {
        return Nt._ === this && (Nt._ = f0), this;
      }
      function Kc() {
      }
      function UC(a) {
        return a = Ne(a), De(function(o) {
          return Uh(o, a);
        });
      }
      var zC = xc(ft), qC = xc(sh), jC = xc(Xu);
      function am(a) {
        return Nc(a) ? Ju(Lr(a)) : bO(a);
      }
      function HC(a) {
        return function(o) {
          return a == null ? r : fa(a, o);
        };
      }
      var WC = lg(), GC = lg(!0);
      function Yc() {
        return [];
      }
      function Xc() {
        return !1;
      }
      function VC() {
        return {};
      }
      function QC() {
        return "";
      }
      function KC() {
        return !0;
      }
      function YC(a, o) {
        if (a = Ne(a), a < 1 || a > qe)
          return [];
        var c = J, g = Ft(a, J);
        o = me(o), a -= J;
        for (var y = tc(g, o); ++c < a; )
          o(c);
        return y;
      }
      function XC(a) {
        return $e(a) ? ft(a, Lr) : ar(a) ? [a] : Vt(Og(We(a)));
      }
      function JC(a) {
        var o = ++u0;
        return We(a) + o;
      }
      var ZC = Qs(function(a, o) {
        return a + o;
      }, 0), eA = Pc("ceil"), tA = Qs(function(a, o) {
        return a / o;
      }, 1), rA = Pc("floor");
      function nA(a) {
        return a && a.length ? zs(a, Yt, dc) : r;
      }
      function aA(a, o) {
        return a && a.length ? zs(a, me(o, 2), dc) : r;
      }
      function iA(a) {
        return ch(a, Yt);
      }
      function oA(a, o) {
        return ch(a, me(o, 2));
      }
      function sA(a) {
        return a && a.length ? zs(a, Yt, mc) : r;
      }
      function lA(a, o) {
        return a && a.length ? zs(a, me(o, 2), mc) : r;
      }
      var uA = Qs(function(a, o) {
        return a * o;
      }, 1), cA = Pc("round"), fA = Qs(function(a, o) {
        return a - o;
      }, 0);
      function dA(a) {
        return a && a.length ? ec(a, Yt) : 0;
      }
      function pA(a, o) {
        return a && a.length ? ec(a, me(o, 2)) : 0;
      }
      return E.after = Dx, E.ary = Dg, E.assign = SP, E.assignIn = Kg, E.assignInWith = sl, E.assignWith = _P, E.at = OP, E.before = Mg, E.bind = Bc, E.bindAll = AC, E.bindKey = Lg, E.castArray = Vx, E.chain = Ig, E.chunk = rT, E.compact = nT, E.concat = aT, E.cond = $C, E.conforms = RC, E.constant = Gc, E.countBy = dx, E.create = TP, E.curry = Fg, E.curryRight = Bg, E.debounce = Ug, E.defaults = xP, E.defaultsDeep = PP, E.defer = Mx, E.delay = Lx, E.difference = iT, E.differenceBy = oT, E.differenceWith = sT, E.drop = lT, E.dropRight = uT, E.dropRightWhile = cT, E.dropWhile = fT, E.fill = dT, E.filter = hx, E.flatMap = vx, E.flatMapDeep = yx, E.flatMapDepth = bx, E.flatten = Cg, E.flattenDeep = pT, E.flattenDepth = hT, E.flip = Fx, E.flow = NC, E.flowRight = kC, E.fromPairs = gT, E.functions = kP, E.functionsIn = DP, E.groupBy = Ex, E.initial = vT, E.intersection = yT, E.intersectionBy = bT, E.intersectionWith = ET, E.invert = LP, E.invertBy = FP, E.invokeMap = Sx, E.iteratee = Vc, E.keyBy = _x, E.keys = Rt, E.keysIn = Kt, E.map = tl, E.mapKeys = UP, E.mapValues = zP, E.matches = DC, E.matchesProperty = MC, E.memoize = nl, E.merge = qP, E.mergeWith = Yg, E.method = LC, E.methodOf = FC, E.mixin = Qc, E.negate = al, E.nthArg = UC, E.omit = jP, E.omitBy = HP, E.once = Bx, E.orderBy = Ox, E.over = zC, E.overArgs = Ux, E.overEvery = qC, E.overSome = jC, E.partial = Uc, E.partialRight = zg, E.partition = Tx, E.pick = WP, E.pickBy = Xg, E.property = am, E.propertyOf = HC, E.pull = OT, E.pullAll = $g, E.pullAllBy = TT, E.pullAllWith = xT, E.pullAt = PT, E.range = WC, E.rangeRight = GC, E.rearg = zx, E.reject = Cx, E.remove = CT, E.rest = qx, E.reverse = Lc, E.sampleSize = $x, E.set = VP, E.setWith = QP, E.shuffle = Rx, E.slice = AT, E.sortBy = kx, E.sortedUniq = MT, E.sortedUniqBy = LT, E.split = vC, E.spread = jx, E.tail = FT, E.take = BT, E.takeRight = UT, E.takeRightWhile = zT, E.takeWhile = qT, E.tap = nx, E.throttle = Hx, E.thru = el, E.toArray = Gg, E.toPairs = Jg, E.toPairsIn = Zg, E.toPath = XC, E.toPlainObject = Qg, E.transform = KP, E.unary = Wx, E.union = jT, E.unionBy = HT, E.unionWith = WT, E.uniq = GT, E.uniqBy = VT, E.uniqWith = QT, E.unset = YP, E.unzip = Fc, E.unzipWith = Rg, E.update = XP, E.updateWith = JP, E.values = li, E.valuesIn = ZP, E.without = KT, E.words = rm, E.wrap = Gx, E.xor = YT, E.xorBy = XT, E.xorWith = JT, E.zip = ZT, E.zipObject = ex, E.zipObjectDeep = tx, E.zipWith = rx, E.entries = Jg, E.entriesIn = Zg, E.extend = Kg, E.extendWith = sl, Qc(E, E), E.add = ZC, E.attempt = nm, E.camelCase = nC, E.capitalize = em, E.ceil = eA, E.clamp = eC, E.clone = Qx, E.cloneDeep = Yx, E.cloneDeepWith = Xx, E.cloneWith = Kx, E.conformsTo = Jx, E.deburr = tm, E.defaultTo = IC, E.divide = tA, E.endsWith = aC, E.eq = Sr, E.escape = iC, E.escapeRegExp = oC, E.every = px, E.find = gx, E.findIndex = xg, E.findKey = CP, E.findLast = mx, E.findLastIndex = Pg, E.findLastKey = AP, E.floor = rA, E.forEach = Ng, E.forEachRight = kg, E.forIn = $P, E.forInRight = RP, E.forOwn = IP, E.forOwnRight = NP, E.get = jc, E.gt = Zx, E.gte = eP, E.has = MP, E.hasIn = Hc, E.head = Ag, E.identity = Yt, E.includes = wx, E.indexOf = mT, E.inRange = tC, E.invoke = BP, E.isArguments = ha, E.isArray = $e, E.isArrayBuffer = tP, E.isArrayLike = Qt, E.isArrayLikeObject = vt, E.isBoolean = rP, E.isBuffer = zn, E.isDate = nP, E.isElement = aP, E.isEmpty = iP, E.isEqual = oP, E.isEqualWith = sP, E.isError = zc, E.isFinite = lP, E.isFunction = on, E.isInteger = qg, E.isLength = il, E.isMap = jg, E.isMatch = uP, E.isMatchWith = cP, E.isNaN = fP, E.isNative = dP, E.isNil = hP, E.isNull = pP, E.isNumber = Hg, E.isObject = pt, E.isObjectLike = gt, E.isPlainObject = mo, E.isRegExp = qc, E.isSafeInteger = gP, E.isSet = Wg, E.isString = ol, E.isSymbol = ar, E.isTypedArray = si, E.isUndefined = mP, E.isWeakMap = vP, E.isWeakSet = yP, E.join = wT, E.kebabCase = sC, E.last = gr, E.lastIndexOf = ST, E.lowerCase = lC, E.lowerFirst = uC, E.lt = bP, E.lte = EP, E.max = nA, E.maxBy = aA, E.mean = iA, E.meanBy = oA, E.min = sA, E.minBy = lA, E.stubArray = Yc, E.stubFalse = Xc, E.stubObject = VC, E.stubString = QC, E.stubTrue = KC, E.multiply = uA, E.nth = _T, E.noConflict = BC, E.noop = Kc, E.now = rl, E.pad = cC, E.padEnd = fC, E.padStart = dC, E.parseInt = pC, E.random = rC, E.reduce = xx, E.reduceRight = Px, E.repeat = hC, E.replace = gC, E.result = GP, E.round = cA, E.runInContext = D, E.sample = Ax, E.size = Ix, E.snakeCase = mC, E.some = Nx, E.sortedIndex = $T, E.sortedIndexBy = RT, E.sortedIndexOf = IT, E.sortedLastIndex = NT, E.sortedLastIndexBy = kT, E.sortedLastIndexOf = DT, E.startCase = yC, E.startsWith = bC, E.subtract = fA, E.sum = dA, E.sumBy = pA, E.template = EC, E.times = YC, E.toFinite = sn, E.toInteger = Ne, E.toLength = Vg, E.toLower = wC, E.toNumber = mr, E.toSafeInteger = wP, E.toString = We, E.toUpper = SC, E.trim = _C, E.trimEnd = OC, E.trimStart = TC, E.truncate = xC, E.unescape = PC, E.uniqueId = JC, E.upperCase = CC, E.upperFirst = Wc, E.each = Ng, E.eachRight = kg, E.first = Ag, Qc(E, function() {
        var a = {};
        return Dr(E, function(o, c) {
          Ye.call(E.prototype, c) || (a[c] = o);
        }), a;
      }(), { chain: !1 }), E.VERSION = n, cr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(a) {
        E[a].placeholder = E;
      }), cr(["drop", "take"], function(a, o) {
        Fe.prototype[a] = function(c) {
          c = c === r ? 1 : Tt(Ne(c), 0);
          var g = this.__filtered__ && !o ? new Fe(this) : this.clone();
          return g.__filtered__ ? g.__takeCount__ = Ft(c, g.__takeCount__) : g.__views__.push({
            size: Ft(c, J),
            type: a + (g.__dir__ < 0 ? "Right" : "")
          }), g;
        }, Fe.prototype[a + "Right"] = function(c) {
          return this.reverse()[a](c).reverse();
        };
      }), cr(["filter", "map", "takeWhile"], function(a, o) {
        var c = o + 1, g = c == le || c == Te;
        Fe.prototype[a] = function(y) {
          var w = this.clone();
          return w.__iteratees__.push({
            iteratee: me(y, 3),
            type: c
          }), w.__filtered__ = w.__filtered__ || g, w;
        };
      }), cr(["head", "last"], function(a, o) {
        var c = "take" + (o ? "Right" : "");
        Fe.prototype[a] = function() {
          return this[c](1).value()[0];
        };
      }), cr(["initial", "tail"], function(a, o) {
        var c = "drop" + (o ? "" : "Right");
        Fe.prototype[a] = function() {
          return this.__filtered__ ? new Fe(this) : this[c](1);
        };
      }), Fe.prototype.compact = function() {
        return this.filter(Yt);
      }, Fe.prototype.find = function(a) {
        return this.filter(a).head();
      }, Fe.prototype.findLast = function(a) {
        return this.reverse().find(a);
      }, Fe.prototype.invokeMap = De(function(a, o) {
        return typeof a == "function" ? new Fe(this) : this.map(function(c) {
          return uo(c, a, o);
        });
      }), Fe.prototype.reject = function(a) {
        return this.filter(al(me(a)));
      }, Fe.prototype.slice = function(a, o) {
        a = Ne(a);
        var c = this;
        return c.__filtered__ && (a > 0 || o < 0) ? new Fe(c) : (a < 0 ? c = c.takeRight(-a) : a && (c = c.drop(a)), o !== r && (o = Ne(o), c = o < 0 ? c.dropRight(-o) : c.take(o - a)), c);
      }, Fe.prototype.takeRightWhile = function(a) {
        return this.reverse().takeWhile(a).reverse();
      }, Fe.prototype.toArray = function() {
        return this.take(J);
      }, Dr(Fe.prototype, function(a, o) {
        var c = /^(?:filter|find|map|reject)|While$/.test(o), g = /^(?:head|last)$/.test(o), y = E[g ? "take" + (o == "last" ? "Right" : "") : o], w = g || /^find/.test(o);
        y && (E.prototype[o] = function() {
          var P = this.__wrapped__, $ = g ? [1] : arguments, L = P instanceof Fe, V = $[0], Q = L || $e(P), Y = function(Me) {
            var Be = y.apply(E, kn([Me], $));
            return g && ne ? Be[0] : Be;
          };
          Q && c && typeof V == "function" && V.length != 1 && (L = Q = !1);
          var ne = this.__chain__, fe = !!this.__actions__.length, ve = w && !ne, ke = L && !fe;
          if (!w && Q) {
            P = ke ? P : new Fe(this);
            var ye = a.apply(P, $);
            return ye.__actions__.push({ func: el, args: [Y], thisArg: r }), new dr(ye, ne);
          }
          return ve && ke ? a.apply(this, $) : (ye = this.thru(Y), ve ? g ? ye.value()[0] : ye.value() : ye);
        });
      }), cr(["pop", "push", "shift", "sort", "splice", "unshift"], function(a) {
        var o = xs[a], c = /^(?:push|sort|unshift)$/.test(a) ? "tap" : "thru", g = /^(?:pop|shift)$/.test(a);
        E.prototype[a] = function() {
          var y = arguments;
          if (g && !this.__chain__) {
            var w = this.value();
            return o.apply($e(w) ? w : [], y);
          }
          return this[c](function(P) {
            return o.apply($e(P) ? P : [], y);
          });
        };
      }), Dr(Fe.prototype, function(a, o) {
        var c = E[o];
        if (c) {
          var g = c.name + "";
          Ye.call(ri, g) || (ri[g] = []), ri[g].push({ name: o, func: c });
        }
      }), ri[Vs(r, C).name] = [{
        name: "wrapper",
        func: r
      }], Fe.prototype.clone = P0, Fe.prototype.reverse = C0, Fe.prototype.value = A0, E.prototype.at = ax, E.prototype.chain = ix, E.prototype.commit = ox, E.prototype.next = sx, E.prototype.plant = ux, E.prototype.reverse = cx, E.prototype.toJSON = E.prototype.valueOf = E.prototype.value = fx, E.prototype.first = E.prototype.head, ro && (E.prototype[ro] = lx), E;
    }, Za = o0();
    oa ? ((oa.exports = Za)._ = Za, Vu._ = Za) : Nt._ = Za;
  }).call(xr);
})(Wl, Wl.exports);
var bK = Wl.exports;
const EK = /* @__PURE__ */ $t(bK);
function Sp() {
}
Sp.prototype = new Error();
class Jy {
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
    r !== null && (p.q = r), n !== null && (p.sort = n, i !== null && (p.sort = i === "desc" ? `-${n}` : n)), s > 0 && (p.page = s), l > 0 && (p.size = l), Yr(f) || jl(p, this._addFilters(f));
    const h = this._addFilters(u);
    return jl(p, h), Yi.stringify(p, {
      arrayFormat: "repeat"
    });
  }
}
class wK {
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
function gl(e, t) {
  return e.indexOf(t) === 0 && (e.length === t.length || e.indexOf(t + "&") === 0);
}
function jf(e) {
  return Yi.stringify({
    q: e
  });
}
function SK(e) {
  return Yi.parse(e).q;
}
function bS(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = bS(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function Zy(e, t) {
  const r = jf(e), n = t.map((l) => jf(l));
  let i = !1;
  const s = n.filter((l) => {
    const u = gl(l, r), f = gl(r, l);
    return u && !i && (i = !0), !u && !f;
  });
  if (!i)
    s.push(r);
  else if (e.length === 3) {
    const u = bS(e), f = jf(u), p = s.some((h) => {
      const m = gl(h, f), v = gl(f, h);
      return m || v;
    });
    (Yr(s) || !p) && s.push(f);
  }
  return s.map((l) => SK(l));
}
const ES = (e, t) => {
  if (Yr(e))
    return;
  if (!HE($8(e)))
    return Zy(e, t);
  let r = t;
  for (const n of e)
    r = Zy(n, r);
  return r;
}, wS = (e, t, r) => {
  let n = dG(t, r);
  return Yr(n.filters) || (n.filters = ES(n.filters, e.filters)), n;
}, Gl = {
  queryString: "",
  suggestions: [],
  sortBy: null,
  sortOrder: null,
  page: -1,
  size: -1,
  filters: [],
  hiddenParams: [],
  layout: null
}, SS = Object.keys(Gl), _K = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, OK = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class TK {
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
    r !== null && (p.q = r), n !== null && (p.sort = n, i !== null && (p.sort = i === "desc" ? `-${n}` : n)), s > 0 && (p.page = s), l > 0 && (p.size = l), Yr(f) || jl(p, this._addFilters(f));
    const h = this._addFilters(u);
    return jl(p, h), Yi.stringify(p, {
      arrayFormat: "repeat"
    });
  }
}
class _S {
  constructor(t) {
    this.axiosConfig = xo(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = vf.CancelToken;
  }
  validateAxiosConfig() {
    if (!hj(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = xo(t, "interceptors.request", void 0), this.responseInterceptor = xo(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: TK,
      InvenioRequestSerializer: Jy
    };
    return typeof t == "string" ? r[t] : t || Jy;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), i = xo(t, "invenio.responseSerializer", wK);
    this.requestSerializer = new n(), this.responseSerializer = new i();
  }
  initAxios() {
    const t = {
      paramsSerializer: this.requestSerializer.serialize,
      ...this.axiosConfig
    };
    this.http = vf.create(t), this.addInterceptors();
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
      const n = wS(t, r.extras, SS);
      return Yr(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw vf.isCancel(r) ? new Sp() : r;
    }
  }
}
class xK {
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
          return m5(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const i = HE(n) ? n : [n], s = ":", l = t.urlFilterSeparator, u = `[^\\${s}\\${l}]*`, f = `${u}\\${s}${u}`, p = `${f}(\\${l}${f})*`, h = new RegExp(`^${p}$`);
          return i.every((m) => String(m).match(h));
        }
        default:
          return !1;
      }
    };
  }
}
const PK = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, eb = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class CK {
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
    const r = Yi.parse(t, {
      ignoreQueryPrefix: !0
    }), n = {};
    return Object.entries(r).forEach((i) => {
      const s = i[0], l = i[1];
      n[s] = this._convertValue(s, l);
    }), n;
  }
}
class AK {
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
      return Yi.stringify(n, {
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
      const i = bi(n);
      return Object.keys(r).forEach((s) => {
        i[s] = r[s];
      }), i;
    }, this.urlParamsMapping = HL(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !n5(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !c5(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new xK(), this.urlParser = t.urlParser || new CK(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), i = this._mergeParamsIntoState(n, t), s = this._mapQueryStateToUrlParams(i);
    return eb(s), i;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      PK(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    eb(r);
  }
}
const $K = "SET_QUERY_COMPONENT_INITIAL_STATE", OS = "SET_QUERY_STRING", _p = "SET_QUERY_SORTING", Op = "SET_QUERY_SORT_BY", Tp = "SET_QUERY_SORT_ORDER", ys = "SET_QUERY_STATE", TS = "SET_QUERY_PAGINATION_PAGE", xS = "SET_QUERY_PAGINATION_SIZE", PS = "SET_QUERY_FILTERS", CS = "SET_QUERY_SUGGESTIONS", AS = "SET_SUGGESTION_STRING", $S = "CLEAR_QUERY_SUGGESTIONS", RS = "RESULTS_LOADING", IS = "RESULTS_FETCH_SUCCESS", NS = "RESULTS_FETCH_ERROR", xd = "RESULTS_UPDATE_LAYOUT", kS = "RESET_QUERY", RK = (e) => (t) => {
  e && t(Nr({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, DS = (e) => (t) => {
  t({
    type: ys,
    payload: e
  }), t(Nr());
}, MS = (e) => (t) => {
  t({
    type: OS,
    payload: e
  }), t(Nr());
}, IK = (e, t) => (r) => {
  r({
    type: _p,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(Nr());
}, NK = (e) => (t) => {
  t({
    type: Op,
    payload: e
  }), t(Nr());
}, kK = (e) => (t) => {
  t({
    type: Tp,
    payload: e
  }), t(Nr());
}, DK = (e) => (t) => {
  t({
    type: TS,
    payload: e
  }), t(Nr());
}, MK = (e) => (t) => {
  t({
    type: xS,
    payload: e
  }), t(Nr());
}, xp = (e) => (t) => {
  t({
    type: PS,
    payload: e
  }), t(Nr());
}, LK = (e) => async (t, r, n) => {
  const i = n.urlHandlerApi;
  if (i) {
    await t({
      type: xd,
      payload: e
    });
    const s = r().query;
    i.set(s);
  } else
    t({
      type: xd,
      payload: e
    });
}, FK = () => (e, t, r) => {
  e({
    type: kS,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(Nr());
}, BK = (e, t, r, n) => {
  const i = t.urlHandlerApi;
  i && (r ? i.replace(e) : n && i.set(e));
}, UK = (e, t, r, n) => {
  const i = r().query;
  t({
    type: ys,
    payload: {
      ...i,
      ...e.newQueryState
    }
  });
  const s = bi(r().query), l = n.urlHandlerApi;
  return l && l.replace(s), delete e.newStateQuery, e;
}, zK = (e, t, r, n) => {
  function i(u, f, p, h) {
    u.queryString === "" ? (u.sortBy = p.defaultSortingOnEmptyQueryString.sortBy, u.sortOrder = p.defaultSortingOnEmptyQueryString.sortOrder) : (u.sortBy = f.initialSortBy, u.sortOrder = f.initialSortOrder), h({
      type: ys,
      payload: u
    });
  }
  function s(u, f, p, h) {
    f.hasUserChangedSorting || i(u, f, p, h);
  }
  !Yr(r.defaultSortingOnEmptyQueryString) && s(e, t, r, n);
}, Nr = function() {
  let {
    shouldUpdateUrlQueryString: e = !0,
    shouldReplaceUrlQueryString: t = !1
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return async (r, n, i) => {
    const s = n().app;
    let l = bi(n().query);
    zK(l, s, i, r), l = bi(n().query), BK(l, i, t, e), r({
      type: RS
    });
    try {
      let f = await i.searchApi.search(l);
      "newQueryState" in f && (f = UK(bi(f), r, n, i)), r({
        type: IS,
        payload: {
          aggregations: f.aggregations,
          hits: f.hits,
          total: f.total
        }
      });
    } catch (u) {
      if (u instanceof Sp) {
        console.debug(u);
        return;
      } else
        console.error(u), r({
          type: NS,
          payload: {
            error: u
          }
        });
    }
  };
}, qK = (e) => (t) => {
  t({
    type: AS,
    payload: e
  }), t(jK());
}, jK = () => async (e, t, r) => {
  const n = bi(t().query), i = r.suggestionApi;
  try {
    const s = await i.search(n);
    e({
      type: CS,
      payload: {
        suggestions: s.suggestions
      }
    });
  } catch (s) {
    console.error("Could not load suggestions due to: " + s);
  }
}, HK = () => (e) => {
  e({
    type: $S,
    payload: {
      suggestions: []
    }
  });
}, WK = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: ys,
      payload: n
    }), e(Nr({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, at = /* @__PURE__ */ b.createContext({}), GK = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
    case _p:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Op:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Tp:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    default:
      return e;
  }
}, VK = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case OS:
      return {
        ...e,
        queryString: t.payload,
        page: 1
      };
    case _p:
      return {
        ...e,
        sortBy: t.payload.sortBy,
        sortOrder: t.payload.sortOrder,
        _sortUserChanged: !0,
        page: 1
      };
    case Op:
      return {
        ...e,
        sortBy: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case Tp:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case TS:
      return {
        ...e,
        page: t.payload
      };
    case xS:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case PS:
      return {
        ...e,
        page: 1,
        filters: ES(t.payload, e.filters)
      };
    case CS:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case $S:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case AS:
      return {
        ...e,
        suggestionString: t.payload
      };
    case $K:
      return {
        ...e,
        ...t.payload
      };
    case ys:
      return {
        ...e,
        ...Gl,
        ...wS(Gl, t.payload, SS)
      };
    case xd:
      return {
        ...e,
        layout: t.payload
      };
    case kS:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, QK = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case RS:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case IS:
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
    case NS:
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
var KK = gK({
  app: GK,
  query: VK,
  results: QK
});
function tb(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: i,
    sortOrder: s
  } = t;
  return r !== i || n !== s;
}
function YK(e, t, r) {
  const n = tb(r, t), i = !Yr(e.defaultSortingOnEmptyQueryString);
  let s = !1;
  return i && (s = tb(r, e.defaultSortingOnEmptyQueryString)), n && s;
}
function XK(e) {
  const t = {
    ...Gl,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = YK(e, t, r), i = {
    ...OK,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, s = {
    ..._K,
    loading: e.searchOnInit
  };
  return {
    app: i,
    query: r,
    results: s
  };
}
function JK(e) {
  const t = XK(e);
  return mS(KK, t, vK(yK.withExtraArgument(e)));
}
function rb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class Pp extends He {
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
Pp.defaultProps = {
  searchOnInit: !0,
  eventListenerEnabled: !1
};
Pp.contextType = at;
var ZK = Ee.component("Bootstrap", Pp);
const e9 = (e) => ({
  onAppInitialized: (t) => e(RK(t)),
  updateQueryState: (t) => e(DS(t)),
  searchOnUrlQueryStringChanged: () => e(WK())
}), t9 = _t(null, e9)(ZK);
class Cp extends He {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new AK(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = JK(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
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
      buildUID: (f, p) => rb(f, p, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, u = rb("ReactSearchKit.children", i, t);
    return /* @__PURE__ */ b.createElement(at.Provider, {
      value: l
    }, /* @__PURE__ */ b.createElement(uS, {
      store: this.store
    }, /* @__PURE__ */ b.createElement(t9, {
      searchOnInit: s,
      eventListenerEnabled: n
    }, /* @__PURE__ */ b.createElement(Ee, {
      id: u
    }, r))));
  }
}
Cp.defaultProps = {
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
Cp.contextType = at;
var r9 = Ee.component("ReactSearchKit", Cp);
class LS extends He {
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
    return !!t.length && /* @__PURE__ */ b.createElement(FS, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
LS.defaultProps = {
  overridableId: ""
};
const FS = (e) => {
  let {
    overridableId: t,
    filters: r,
    removeActiveFilter: n,
    getLabel: i
  } = e;
  const {
    buildUID: s
  } = lt(at);
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
      /* @__PURE__ */ b.createElement(lr, {
        image: !0,
        key: u,
        onClick: () => n(p)
      }, f, /* @__PURE__ */ b.createElement(At, {
        name: "delete"
      }))
    );
  })));
};
FS.defaultProps = {
  overridableId: ""
};
var n9 = Ee.component("ActiveFilters", LS);
const a9 = (e) => ({
  updateQueryFilters: (t) => e(xp(t))
});
_t((e) => ({
  filters: e.query.filters
}), a9)(n9);
function i9(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
  }
}
var o9 = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
i9(o9);
class BS extends He {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? EK.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ b.createElement(l9, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
BS.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const s9 = (e) => /* @__PURE__ */ b.createElement(BS, Object.assign({
  key: e.queryString
}, e)), l9 = (e) => {
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
  } = lt(at), p = (m, v) => {
    l();
  }, h = (m, v) => {
    m.key === "Enter" && l();
  };
  return /* @__PURE__ */ b.createElement(Ee, Object.assign({
    id: f("AutocompleteSearchBar.element", t)
  }, u), /* @__PURE__ */ b.createElement("div", {
    className: "AutoCompleteText"
  }, /* @__PURE__ */ b.createElement(IE, {
    action: {
      content: "Search",
      onClick: p
    },
    fluid: !0,
    placeholder: r,
    onChange: (m, v) => {
      let {
        value: S
      } = v;
      s(S);
    },
    value: n,
    onKeyPress: h
  }), /* @__PURE__ */ b.createElement(u9, {
    querySuggestions: i,
    overridableId: t
  })));
}, u9 = (e) => {
  let {
    overridableId: t,
    ...r
  } = e;
  const {
    querySuggestions: n
  } = r, {
    buildUID: i
  } = lt(at), s = async (l) => {
    await (void 0).setState({
      currentValue: l
    }), (void 0).clearSuggestions(), (void 0).executeSearch();
  };
  return n.length === 0 ? null : /* @__PURE__ */ b.createElement(Ee, Object.assign({
    id: i("AutocompleteSearchBar.suggestions", t)
  }, r), /* @__PURE__ */ b.createElement("ul", null, n.map((l) => /* @__PURE__ */ b.createElement(Wn, {
    as: "li",
    onClick: () => s(l),
    key: l
  }, l))));
};
var c9 = Ee.component("AutocompleteSearchBar", s9);
const f9 = (e) => ({
  updateQueryString: (t) => e(MS(t)),
  updateSuggestions: (t) => e(qK(t)),
  clearSuggestions: () => e(HK())
}), d9 = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
_t(d9, f9)(c9);
class $u extends He {
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
        return /* @__PURE__ */ b.createElement($u, {
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
      return /* @__PURE__ */ b.createElement(zS, {
        key: s.key,
        bucket: s,
        keyField: l,
        isSelected: u,
        onFilterClicked: f,
        getChildAggCmps: p,
        overridableId: n
      });
    });
    return /* @__PURE__ */ b.createElement(US, {
      valuesCmp: i,
      overridableId: n
    });
  }
}
$u.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const US = (e) => {
  let {
    valuesCmp: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = lt(at);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: n("BucketAggregationContainer.element", r),
    valuesCmp: t
  }, /* @__PURE__ */ b.createElement(kE, null, t));
};
US.defaultProps = {
  overridableId: ""
};
const zS = (e) => {
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
  } = lt(at), p = t.label ? t.label : `${l} (${t.doc_count.toLocaleString("en-US")})`, h = i(t);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: u("BucketAggregationValues.element", s),
    bucket: t,
    label: p,
    onFilterClicked: n,
    isSelected: r,
    childAggCmps: h
  }, /* @__PURE__ */ b.createElement(kE.Item, {
    key: t.key
  }, /* @__PURE__ */ b.createElement(qi, {
    label: p,
    id: f(),
    value: t.key,
    onClick: () => n(t.key),
    checked: r
  }), h));
};
zS.defaultProps = {
  overridableId: ""
};
var p9 = Ee.component("BucketAggregationValues", $u);
class qS extends He {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: i
      } = this.props;
      return /* @__PURE__ */ b.createElement(p9, {
        buckets: r,
        selectedFilters: n,
        field: this.agg.field,
        aggName: this.agg.aggName,
        childAgg: this.agg.childAgg,
        onFilterClicked: this.onFilterClicked,
        overridableId: i
      });
    }, this._getSelectedFilters = (r) => r.filter((n) => n[0] === this.agg.aggName), this._getResultBuckets = (r) => {
      const n = xo(r, this.agg.aggName, {});
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
    return /* @__PURE__ */ b.createElement(jS, Object.assign({
      title: this.title,
      containerCmp: u,
      overridableId: n
    }, i));
  }
}
qS.defaultProps = {
  overridableId: ""
};
const jS = (e) => {
  let {
    overridableId: t,
    agg: r,
    title: n,
    containerCmp: i,
    updateQueryFilters: s
  } = e;
  const {
    buildUID: l
  } = lt(at);
  return i && /* @__PURE__ */ b.createElement(Ee, {
    id: l("BucketAggregation.element", t),
    agg: r,
    title: n,
    containerCmp: i,
    updateQueryFilters: s
  }, /* @__PURE__ */ b.createElement(bt, null, /* @__PURE__ */ b.createElement(bt.Content, null, /* @__PURE__ */ b.createElement(bt.Header, null, n)), /* @__PURE__ */ b.createElement(bt.Content, null, i)));
};
jS.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var h9 = Ee.component("BucketAggregation", qS);
const g9 = (e) => ({
  updateQueryFilters: (t) => e(xp(t))
});
_t((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), g9)(h9);
class HS extends He {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
HS.defaultProps = {
  condition: !0
};
var br = Ee.component("ShouldRender", HS);
class WS extends He {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: i
    } = this.props;
    return /* @__PURE__ */ b.createElement(br, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ b.createElement(GS, {
      totalResults: r,
      overridableId: i
    })));
  }
}
WS.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const GS = (e) => {
  let {
    totalResults: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = lt(at), i = n("Count.element", r);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: i,
    totalResults: t
  }, /* @__PURE__ */ b.createElement(lr, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
GS.defaultProps = {
  overridableId: ""
};
var m9 = Ee.component("Count", WS);
const v9 = _t((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(m9);
class VS extends He {
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
    return /* @__PURE__ */ b.createElement(br, {
      condition: !t && Yr(n) && r === 0
    }, /* @__PURE__ */ b.createElement(QS, Object.assign({}, f, {
      queryString: i,
      resetQuery: this.resetQuery,
      extraContent: s,
      userSelectionFilters: u,
      overridableId: l
    })));
  }
}
VS.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const QS = (e) => {
  let {
    overridableId: t,
    queryString: r,
    resetQuery: n,
    extraContent: i,
    userSelectionFilters: s
  } = e;
  const {
    buildUID: l
  } = lt(at);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: l("EmptyResults.element", t),
    queryString: r,
    resetQuery: n,
    extraContent: i,
    userSelectionFilters: s
  }, /* @__PURE__ */ b.createElement(La, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ b.createElement(bn, {
    icon: !0
  }, /* @__PURE__ */ b.createElement(At, {
    name: "search"
  }), "No results found!"), r && /* @__PURE__ */ b.createElement("em", null, 'Current search "', r, '"'), /* @__PURE__ */ b.createElement("br", null), /* @__PURE__ */ b.createElement(Wn, {
    primary: !0,
    onClick: () => n()
  }, "Clear query"), i));
};
QS.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var y9 = Ee.component("EmptyResults", VS);
const b9 = (e) => ({
  resetQuery: () => e(FK())
}), E9 = _t((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), b9)(y9);
function KS(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ b.createElement(br, {
    condition: !t && !Yr(r)
  }, /* @__PURE__ */ b.createElement(YS, {
    error: r,
    overridableId: n
  }));
}
KS.defaultProps = {
  overridableId: ""
};
const YS = (e) => {
  let {
    error: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = lt(at);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ b.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
YS.defaultProps = {
  overridableId: ""
};
var w9 = Ee.component("Error", KS);
_t((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(w9);
function S9(e) {
  const t = (i) => /* @__PURE__ */ b.createElement(e, i);
  return _t((i) => ({
    currentQueryState: i.query,
    currentResultsState: i.results
  }), (i) => ({
    updateQueryState: (s) => i(DS(s))
  }))(t);
}
class XS extends He {
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
    return /* @__PURE__ */ b.createElement(br, {
      condition: t !== null && !r && n > 0
    }, /* @__PURE__ */ b.createElement(JS, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: i
    }));
  }
}
XS.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
const JS = (e) => {
  let {
    overridableId: t,
    currentLayout: r,
    onLayoutChange: n
  } = e;
  const {
    buildUID: i
  } = lt(at);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: i("LayoutSwitcher.element", t),
    currentLayout: r,
    onLayoutChange: n
  }, /* @__PURE__ */ b.createElement(vi, {
    compact: !0,
    icon: !0
  }, /* @__PURE__ */ b.createElement(vi.Item, {
    name: "list",
    active: r === "list",
    onClick: (s, l) => {
      let {
        name: u
      } = l;
      return n(u);
    }
  }, /* @__PURE__ */ b.createElement(At, {
    name: "list layout"
  })), /* @__PURE__ */ b.createElement(vi.Item, {
    name: "grid",
    active: r === "grid",
    onClick: (s, l) => {
      let {
        name: u
      } = l;
      return n(u);
    }
  }, /* @__PURE__ */ b.createElement(At, {
    name: "grid layout"
  }))));
};
JS.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var _9 = Ee.component("LayoutSwitcher", XS);
const O9 = (e) => ({
  updateLayout: (t) => e(LK(t))
});
_t((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), O9)(_9);
const nb = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class ZS extends He {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...nb,
      ...t.options
    } : nb;
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
    return /* @__PURE__ */ b.createElement(br, {
      condition: !t && n > -1 && i > -1 && l ? r > 0 : r > i
    }, /* @__PURE__ */ b.createElement(e_, {
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
ZS.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const e_ = (e) => {
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
  const p = l.boundaryRangeCount, h = l.siblingRangeCount, m = l.showEllipsis, v = l.showFirst, S = l.showLast, O = l.showPrev, T = l.showNext, _ = l.size, C = Math.floor(u / n), M = Math.ceil(i / n), k = Math.min(M, C), {
    buildUID: U
  } = lt(at);
  return r > M && s(M), /* @__PURE__ */ b.createElement(Ee, {
    id: U("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: i,
    options: l,
    onPageChange: s
  }, /* @__PURE__ */ b.createElement(zi, Object.assign({
    activePage: r,
    totalPages: k,
    onPageChange: (R, F) => {
      let {
        activePage: x
      } = F;
      return s(x);
    },
    boundaryRange: p,
    siblingRange: h,
    ellipsisItem: m ? void 0 : null,
    firstItem: v ? void 0 : null,
    lastItem: S ? void 0 : null,
    prevItem: O ? void 0 : null,
    nextItem: T ? void 0 : null,
    size: _
  }, f)));
};
e_.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var T9 = Ee.component("Pagination", ZS);
const x9 = (e) => ({
  updateQueryPage: (t) => e(DK(t))
}), P9 = _t((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), x9)(T9);
function t_(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    resultsPerRow: i,
    overridableId: s,
    onResultsRendered: l
  } = e;
  return Ad(() => {
    l && l();
  }, [l]), /* @__PURE__ */ b.createElement(br, {
    condition: !t && r > 0
  }, /* @__PURE__ */ b.createElement(r_, {
    results: n,
    resultsPerRow: i,
    overridableId: s
  }));
}
t_.defaultProps = {
  resultsPerRow: 3,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const C9 = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = lt(at);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: n("ResultsGrid.item", r),
    result: t
  }, /* @__PURE__ */ b.createElement(bt, {
    fluid: !0,
    href: `#${t.id}`
  }, /* @__PURE__ */ b.createElement(Mt, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ b.createElement(bt.Content, null, /* @__PURE__ */ b.createElement(bt.Header, null, t.title), /* @__PURE__ */ b.createElement(bt.Description, null, t.description))));
}, r_ = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: i
  } = lt(at), s = r.map((l, u) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ b.createElement(C9, {
      key: u,
      result: l,
      overridableId: t
    })
  ));
  return /* @__PURE__ */ b.createElement(Ee, {
    id: i("ResultsGrid.container", t),
    results: s,
    resultsPerRow: n
  }, /* @__PURE__ */ b.createElement(bt.Group, {
    itemsPerRow: n
  }, s));
};
r_.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var A9 = Ee.component("ResultsGrid", t_);
const $9 = _t((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(A9);
function n_(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: i,
    onResultsRendered: s
  } = e;
  return Ad(() => {
    s && s();
  }, [s]), /* @__PURE__ */ b.createElement(br, {
    condition: !t && r > 0
  }, /* @__PURE__ */ b.createElement(a_, {
    results: n,
    overridableId: i
  }));
}
n_.defaultProps = {
  overridableId: "",
  onResultsRendered: () => {
  }
};
const R9 = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = lt(at);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ b.createElement(Ct, {
    href: `#${t.id}`
  }, /* @__PURE__ */ b.createElement(Ct.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ b.createElement(Ct.Content, null, /* @__PURE__ */ b.createElement(Ct.Header, null, t.title), /* @__PURE__ */ b.createElement(Ct.Description, null, t.description))));
}, a_ = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = lt(at), i = t.map((s, l) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ b.createElement(R9, {
      result: s,
      key: l,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ b.createElement(Ee, {
    id: n("ResultsList.container", r),
    results: i
  }, /* @__PURE__ */ b.createElement(Ct.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, i));
};
a_.defaultProps = {
  overridableId: ""
};
var I9 = Ee.component("ResultsList", n_);
const i_ = _t((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(I9);
function o_(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ b.createElement(s_, {
    overridableId: n
  }) : t;
}
o_.defaultProps = {
  overridableId: ""
};
const s_ = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = lt(at);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ b.createElement(es, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
s_.defaultProps = {
  overridableId: ""
};
var N9 = Ee.component("ResultsLoader", o_);
const k9 = _t((e) => ({
  loading: e.results.loading
}))(N9);
function l_(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: i,
    onResultsRendered: s
  } = e;
  return /* @__PURE__ */ b.createElement(br, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ b.createElement(u_, {
    layout: n,
    overridableId: i,
    onResultsRendered: s
  }));
}
l_.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const u_ = (e) => {
  let {
    layout: t,
    overridableId: r,
    onResultsRendered: n
  } = e;
  const {
    buildUID: i
  } = lt(at);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: i("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ b.createElement(i_, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ b.createElement($9, {
    overridableId: r,
    onResultsRendered: n
  }));
};
u_.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var D9 = Ee.component("ResultsMultiLayout", l_);
_t((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(D9);
class c_ extends He {
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
    return /* @__PURE__ */ b.createElement(br, {
      condition: !t && r !== -1 && f ? n > 0 : n > r
    }, i(/* @__PURE__ */ b.createElement(f_, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: l,
      selectOnNavigation: u
    })));
  }
}
c_.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const f_ = (e) => {
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
  } = lt(at), f = n.map((p, h) => ({
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
  }, /* @__PURE__ */ b.createElement(er, {
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
f_.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var M9 = Ee.component("ResultsPerPage", c_);
const L9 = (e) => ({
  updateQuerySize: (t) => e(MK(t))
}), F9 = _t((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), L9)(M9);
class d_ extends He {
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
    return /* @__PURE__ */ b.createElement(Ap, {
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
d_.defaultProps = {
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
const p_ = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ b.createElement(d_, Object.assign({
    key: t
  }, e));
};
p_.defaultProps = {
  queryString: ""
};
class Ap extends He {
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
    }, /* @__PURE__ */ b.createElement(IE, Object.assign({
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
Ap.defaultProps = {
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
Ap.contextType = at;
var B9 = Ee.component("SearchBar", p_);
const U9 = (e) => ({
  updateQueryString: (t) => e(MS(t))
}), z9 = _t((e) => ({
  queryString: e.query.queryString
}), U9)(B9);
class h_ extends He {
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
    return /* @__PURE__ */ b.createElement(br, {
      condition: t !== null && (u || t !== null) && !n && i > 0
    }, s(/* @__PURE__ */ b.createElement(g_, {
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
h_.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const g_ = (e) => {
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
  } = lt(at), h = l(r, n), m = i.map((v, S) => ({
    key: S,
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
  }, /* @__PURE__ */ b.createElement(er, {
    selection: !0,
    options: m,
    value: h,
    onChange: (v, S) => {
      let {
        value: O
      } = S;
      return s(O);
    },
    "aria-label": u,
    selectOnNavigation: f
  }));
};
g_.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var q9 = Ee.component("Sort", h_);
const j9 = (e) => ({
  updateQuerySorting: (t, r) => e(IK(t, r))
}), H9 = _t((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), j9)(q9);
class m_ extends He {
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
    return /* @__PURE__ */ b.createElement(br, {
      condition: t !== null && !r && n > 0
    }, i(/* @__PURE__ */ b.createElement(v_, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: l,
      selectOnNavigation: u
    })));
  }
}
m_.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const v_ = (e) => {
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
  } = lt(at), f = n.map((p, h) => ({
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
  }, /* @__PURE__ */ b.createElement(er, {
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
v_.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var W9 = Ee.component("SortBy", m_);
const G9 = (e) => ({
  updateQuerySortBy: (t) => e(NK(t))
});
_t((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), G9)(W9);
class y_ extends He {
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
    return /* @__PURE__ */ b.createElement(br, {
      condition: t !== null && !r && n > 0
    }, i(/* @__PURE__ */ b.createElement(b_, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: l,
      selectOnNavigation: u
    })));
  }
}
y_.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const b_ = (e) => {
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
  } = lt(at), f = n.map((p, h) => ({
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
  }, /* @__PURE__ */ b.createElement(er, {
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
b_.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var V9 = Ee.component("SortOrder", y_);
const Q9 = (e) => ({
  updateQuerySortOrder: (t) => e(kK(t))
});
_t((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), Q9)(V9);
const E_ = (e) => {
  let {
    overridableId: t,
    userSelectionFilters: r,
    title: n,
    label: i,
    filterValue: s,
    updateQueryFilters: l
  } = e;
  const u = (m) => m.filter((S) => S[0] === s[0]).length > 0, f = () => {
    l(s);
  }, {
    buildUID: p
  } = lt(at), h = u(r);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: p("SearchFilters.Toggle.element", t),
    title: n,
    label: i,
    filterValue: s,
    userSelectionFilters: r,
    updateQueryFilters: l
  }, /* @__PURE__ */ b.createElement(bt, null, /* @__PURE__ */ b.createElement(bt.Content, null, /* @__PURE__ */ b.createElement(bt.Header, null, n)), /* @__PURE__ */ b.createElement(bt.Content, null, /* @__PURE__ */ b.createElement(qi, {
    toggle: !0,
    label: i,
    onClick: f,
    checked: h
  }))));
};
E_.defaultProps = {
  overridableId: ""
};
var K9 = Ee.component("SearchFilters.Toggle", E_);
const Y9 = (e) => ({
  updateQueryFilters: (t) => e(xp(t))
});
_t((e) => ({
  userSelectionFilters: e.query.filters
}), Y9)(K9);
const w_ = b.createContext(
  null
), X9 = ({ config: e, children: t }) => /* @__PURE__ */ b.createElement(w_.Provider, { value: { config: e } }, t), S_ = () => {
  const e = b.useContext(w_);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
};
function Pd(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var J9 = (e) => typeof e == "object" && e !== null;
function Z9(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var e7 = (e) => e === "base";
function t7(e) {
  return e.slice().filter((t) => !e7(t));
}
function ab(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function r7(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = ab(r % 52) + t;
  return ab(r % 52) + t;
}
function n7(e, t) {
  let r = t.length;
  for (; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function a7(e) {
  return r7(n7(5381, e) >>> 0);
}
var __ = /\s*!(important)?/i;
function i7(e) {
  return typeof e == "string" ? __.test(e) : !1;
}
function o7(e) {
  return typeof e == "string" ? e.replace(__, "").trim() : e;
}
function O_(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var $p = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...n) => {
    const i = JSON.stringify(n);
    if (t.has(i))
      return t.get(i);
    const s = e(...n);
    return t.set(i, s), s;
  };
}, s7 = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function T_(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((n) => {
    if (s7.has(n))
      return;
    const i = t[n], s = r[n];
    Pd(i) && Pd(s) ? t[n] = T_(i, s) : t[n] = s;
  }), t), {});
}
var l7 = (e) => e != null;
function x_(e, t, r = {}) {
  const { stop: n, getKey: i } = r;
  function s(l, u = []) {
    if (J9(l)) {
      const f = {};
      for (const [p, h] of Object.entries(l)) {
        const m = (i == null ? void 0 : i(p, h)) ?? p, v = [...u, m];
        if (n != null && n(l, v))
          return t(l, u);
        const S = s(h, v);
        l7(S) && (f[m] = S);
      }
      return f;
    }
    return t(l, u);
  }
  return s(e);
}
function u7(e, t) {
  return e.reduce(
    (r, n, i) => {
      const s = t[i];
      return n != null && (r[s] = n), r;
    },
    {}
  );
}
function P_(e, t, r = !0) {
  const { utility: n, conditions: i } = t, { hasShorthand: s, resolveShorthand: l } = n;
  return x_(
    e,
    (u) => Array.isArray(u) ? u7(u, i.breakpoints.keys) : u,
    {
      stop: (u) => Array.isArray(u),
      getKey: r ? (u) => s ? l(u) : u : void 0
    }
  );
}
var c7 = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, f7 = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function d7(e) {
  const { utility: t, hash: r, conditions: n = c7 } = e, i = (l) => [t.prefix, l].filter(Boolean).join("-"), s = (l, u) => {
    let f;
    if (r) {
      const p = [...n.finalize(l), u];
      f = i(t.toHash(p, a7));
    } else
      f = [...n.finalize(l), i(u)].join(":");
    return f;
  };
  return $p(({ base: l, ...u } = {}) => {
    const f = Object.assign(u, l), p = P_(f, e), h = /* @__PURE__ */ new Set();
    return x_(p, (m, v) => {
      if (m == null)
        return;
      const S = i7(m), [O, ...T] = n.shift(v), _ = t7(T), C = t.transform(O, o7(f7(m)));
      let M = s(_, C.className);
      S && (M = `${M}!`), h.add(M);
    }), Array.from(h).join(" ");
  });
}
function p7(...e) {
  return e.flat().filter((t) => Pd(t) && Object.keys(Z9(t)).length > 0);
}
function h7(e) {
  function t(i) {
    const s = p7(...i);
    return s.length === 1 ? s : s.map((l) => P_(l, e));
  }
  function r(...i) {
    return T_(...t(i));
  }
  function n(...i) {
    return Object.assign({}, ...t(i));
  }
  return { mergeCss: $p(r), assignCss: n };
}
var g7 = /([A-Z])/g, m7 = /^ms-/, v7 = $p((e) => e.startsWith("--") ? e : e.replace(g7, "-$1").replace(m7, "-ms-").toLowerCase()), y7 = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${y7.split(",").join("|")}`;
const b7 = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", C_ = new Set(b7.split(",")), E7 = /^@|&|&$/;
function ib(e) {
  return C_.has(e) || E7.test(e);
}
const w7 = /^_/, S7 = /&|@/;
function _7(e) {
  return e.map((t) => C_.has(t) ? t.replace(w7, "") : S7.test(t) ? `[${O_(t.trim())}]` : t);
}
function O7(e) {
  return e.sort((t, r) => {
    const n = ib(t), i = ib(r);
    return n && !i ? 1 : !n && i ? -1 : 0;
  });
}
const T7 = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle", A_ = /* @__PURE__ */ new Map(), $_ = /* @__PURE__ */ new Map();
T7.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [n, ...i] = r.split("/");
  A_.set(t, n), i.length && i.forEach((s) => {
    $_.set(s === "1" ? n : s, t);
  });
});
const ob = (e) => $_.get(e) || e, R_ = {
  conditions: {
    shift: O7,
    finalize: _7,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = ob(e);
      return { className: `${A_.get(r) || v7(r)}_${O_(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: ob
  }
}, x7 = d7(R_), jn = (...e) => x7(I_(...e));
jn.raw = (...e) => I_(...e);
const { mergeCss: I_, assignCss: F7 } = h7(R_), P7 = {
  container: jn({
    display: "flex",
    flexDirection: "column"
  })
}, C7 = ({
  result: e,
  index: t
}) => /* @__PURE__ */ b.createElement(Ct, { key: t, className: P7.container }, /* @__PURE__ */ b.createElement(_n, { as: "a", href: `/works/${e.id}` }, e.title || e.title || "No title"), /* @__PURE__ */ b.createElement(On, null, e.description || e.description || "No description"), /* @__PURE__ */ b.createElement(Tn, null, "Created: ", e.created)), un = {
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
      url: "https://127.0.0.1:5000/api/importer-tasks",
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
}, A7 = () => {
  const [e, t] = mA(!1);
  return /* @__PURE__ */ b.createElement(
    z2,
    {
      closeIcon: !0,
      onClose: () => t(!1),
      onOpen: () => t(!0),
      open: e,
      trigger: /* @__PURE__ */ b.createElement(Wn, { color: "green", icon: !0, labelPosition: "left" }, /* @__PURE__ */ b.createElement(At, { name: "add" }), "New Import")
    },
    /* @__PURE__ */ b.createElement(vn, null, /* @__PURE__ */ b.createElement(At, { name: "file alternate" }), "New Import"),
    /* @__PURE__ */ b.createElement(mn, null, /* @__PURE__ */ b.createElement(Si, null, /* @__PURE__ */ b.createElement(bn, null, /* @__PURE__ */ b.createElement("p", null, "Upload a file to import records into the system."), /* @__PURE__ */ b.createElement("p", null, "Supported formats include CSV, JSON, and XML. Ensure your file adheres to the required schema for successful import."), /* @__PURE__ */ b.createElement("p", null, "After uploading, you can review and confirm the import details before finalizing the process.")))),
    /* @__PURE__ */ b.createElement(Na, null, /* @__PURE__ */ b.createElement(Wn, { onClick: () => t(!1) }, "Close"), /* @__PURE__ */ b.createElement(
      Wn,
      {
        labelPosition: "left",
        icon: !0,
        onClick: () => t(!1),
        positive: !0
      },
      /* @__PURE__ */ b.createElement(At, { name: "checkmark" }),
      "Submit"
    ))
  );
}, $7 = ({
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
  return /* @__PURE__ */ b.createElement(vi, { activeIndex: 0, compact: !0, size: "tiny" }, r.map(({ key: l, label: u, value: f }) => /* @__PURE__ */ b.createElement(
    vi.Item,
    {
      key: l,
      name: l,
      active: (n == null ? void 0 : n[1]) === f || f === null && !n,
      onClick: () => i(f)
    },
    u
  )));
}, N_ = S9($7), Oo = {
  searchBarRow: jn({
    display: "flex !important",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1rem",
    paddingBlock: "0.5rem",
    minBlockSize: "3rem"
  }),
  facets: jn({
    flex: "0 0 auto"
  }),
  search: jn({
    flex: "1 1 auto",
    minInlineSize: "15rem"
  }),
  import: jn({
    flex: "0 0 auto"
  }),
  visuallyHidden: jn({
    srOnly: !0
  })
}, R7 = () => /* @__PURE__ */ b.createElement(
  "section",
  {
    className: Oo.searchBarRow,
    "aria-label": "Records search and filters"
  },
  /* @__PURE__ */ b.createElement("div", { className: Oo.facets }, /* @__PURE__ */ b.createElement(N_, null)),
  /* @__PURE__ */ b.createElement("div", { className: Oo.search }, /* @__PURE__ */ b.createElement(
    z9,
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
  ), /* @__PURE__ */ b.createElement("span", { className: Oo.visuallyHidden }, "Type keywords to search through records. Press Enter to submit.")),
  /* @__PURE__ */ b.createElement("div", { className: Oo.import }, /* @__PURE__ */ b.createElement(A7, null))
), I7 = () => {
  const { config: e } = S_();
  return /* @__PURE__ */ b.createElement(Xt, null, /* @__PURE__ */ b.createElement(Xt.Row, { verticalAlign: "middle" }, /* @__PURE__ */ b.createElement(Xt.Column, { width: 8, textAlign: "left" }, /* @__PURE__ */ b.createElement(P9, { options: { size: "mini" } })), /* @__PURE__ */ b.createElement(Xt.Column, { width: 8, textAlign: "right" }, /* @__PURE__ */ b.createElement(
    F9,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ b.createElement("p", null, t, " results per page")
    }
  ))));
}, N7 = () => {
  const { config: e } = S_();
  return /* @__PURE__ */ b.createElement(Xt, null, /* @__PURE__ */ b.createElement(Xt.Row, { verticalAlign: "middle" }, /* @__PURE__ */ b.createElement(Xt.Column, { width: 8 }, /* @__PURE__ */ b.createElement(v9, { label: (t) => /* @__PURE__ */ b.createElement("p", null, t, " result(s) found") })), /* @__PURE__ */ b.createElement(Xt.Column, { width: 8, textAlign: "right" }, /* @__PURE__ */ b.createElement("span", null, "Sort by: "), /* @__PURE__ */ b.createElement(H9, { values: e.sortOptions }))));
}, k7 = ({
  config: e = {},
  overriddenComponents: t = {}
}) => {
  var s, l, u, f, p;
  const r = {
    ...un,
    ...e,
    initialQueryState: {
      ...un.initialQueryState,
      ...e.initialQueryState
    },
    layoutOptions: {
      ...un.layoutOptions,
      ...e.layoutOptions
    },
    paginationOptions: {
      ...un.paginationOptions,
      ...e.paginationOptions,
      resultsPerPage: ((s = e.paginationOptions) == null ? void 0 : s.resultsPerPage) || un.paginationOptions.resultsPerPage
    },
    searchApi: {
      ...un.searchApi,
      ...e.searchApi,
      axios: {
        ...un.searchApi.axios,
        ...(l = e.searchApi) == null ? void 0 : l.axios,
        headers: {
          ...un.searchApi.axios.headers,
          ...(f = (u = e.searchApi) == null ? void 0 : u.axios) == null ? void 0 : f.headers
        }
      },
      invenio: {
        ...un.searchApi.invenio,
        ...(p = e.searchApi) == null ? void 0 : p.invenio
      }
    }
  }, n = new _S(r.searchApi), i = {
    [`${r.appId}.ResultsList.item`]: C7,
    [`${r.appId}.SearchFacets`]: N_,
    ...t
  };
  return /* @__PURE__ */ b.createElement(Wd.Provider, { value: i }, /* @__PURE__ */ b.createElement(
    r9,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ b.createElement(X9, { config: r }, /* @__PURE__ */ b.createElement(R7, null), /* @__PURE__ */ b.createElement(k9, null, /* @__PURE__ */ b.createElement(N7, null), /* @__PURE__ */ b.createElement(E9, null), /* @__PURE__ */ b.createElement(i_, null)), /* @__PURE__ */ b.createElement(I7, null))
  ));
}, D7 = {
  bulkImporter: jn({
    padding: "2rem"
  })
}, B7 = () => /* @__PURE__ */ b.createElement("div", { className: D7.bulkImporter }, /* @__PURE__ */ b.createElement(bn, { as: "h1" }, "Bulk Importer"), /* @__PURE__ */ b.createElement("p", null, "A more modern approach for an invenio compatible bulk importer."), /* @__PURE__ */ b.createElement(k7, null));
function U7(e) {
  return new _S(e);
}
function z7(e, t = {}, r = !0) {
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
  B7 as BulkImporter,
  A7 as ImportModal,
  k7 as Search,
  U7 as createSearchApi,
  z7 as createSearchApiConfig
};
