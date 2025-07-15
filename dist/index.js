import * as wn from "react";
import b, { Children as Jf, PureComponent as Rb, Component as He, createRef as xr, isValidElement as Nb, cloneElement as Ib, createElement as wd, useContext as dt, useLayoutEffect as MC, useEffect as hc, useMemo as Xr, useReducer as FC, useRef as xl, useState as Dl, useCallback as BC } from "react";
import * as $m from "react-dom";
import { createPortal as UC, unstable_batchedUpdates as zC } from "react-dom";
function Ba(e, t) {
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
var Lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function qC(e) {
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
var Al = { exports: {} }, Qe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rm;
function jC() {
  if (Rm)
    return Qe;
  Rm = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function k(N) {
    if (typeof N == "object" && N !== null) {
      var B = N.$$typeof;
      switch (B) {
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
                case c:
                case h:
                case O:
                case w:
                case l:
                  return N;
                default:
                  return B;
              }
          }
        case r:
          return B;
      }
    }
  }
  function z(N) {
    return k(N) === p;
  }
  return Qe.AsyncMode = f, Qe.ConcurrentMode = p, Qe.ContextConsumer = c, Qe.ContextProvider = l, Qe.Element = t, Qe.ForwardRef = h, Qe.Fragment = n, Qe.Lazy = O, Qe.Memo = w, Qe.Portal = r, Qe.Profiler = s, Qe.StrictMode = i, Qe.Suspense = m, Qe.isAsyncMode = function(N) {
    return z(N) || k(N) === f;
  }, Qe.isConcurrentMode = z, Qe.isContextConsumer = function(N) {
    return k(N) === c;
  }, Qe.isContextProvider = function(N) {
    return k(N) === l;
  }, Qe.isElement = function(N) {
    return typeof N == "object" && N !== null && N.$$typeof === t;
  }, Qe.isForwardRef = function(N) {
    return k(N) === h;
  }, Qe.isFragment = function(N) {
    return k(N) === n;
  }, Qe.isLazy = function(N) {
    return k(N) === O;
  }, Qe.isMemo = function(N) {
    return k(N) === w;
  }, Qe.isPortal = function(N) {
    return k(N) === r;
  }, Qe.isProfiler = function(N) {
    return k(N) === s;
  }, Qe.isStrictMode = function(N) {
    return k(N) === i;
  }, Qe.isSuspense = function(N) {
    return k(N) === m;
  }, Qe.isValidElementType = function(N) {
    return typeof N == "string" || typeof N == "function" || N === n || N === p || N === s || N === i || N === m || N === v || typeof N == "object" && N !== null && (N.$$typeof === O || N.$$typeof === w || N.$$typeof === l || N.$$typeof === c || N.$$typeof === h || N.$$typeof === _ || N.$$typeof === x || N.$$typeof === D || N.$$typeof === T);
  }, Qe.typeOf = k, Qe;
}
var Ke = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nm;
function HC() {
  return Nm || (Nm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function k(re) {
      return typeof re == "string" || typeof re == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      re === n || re === p || re === s || re === i || re === m || re === v || typeof re == "object" && re !== null && (re.$$typeof === O || re.$$typeof === w || re.$$typeof === l || re.$$typeof === c || re.$$typeof === h || re.$$typeof === _ || re.$$typeof === x || re.$$typeof === D || re.$$typeof === T);
    }
    function z(re) {
      if (typeof re == "object" && re !== null) {
        var gt = re.$$typeof;
        switch (gt) {
          case t:
            var oe = re.type;
            switch (oe) {
              case f:
              case p:
              case n:
              case s:
              case i:
              case m:
                return oe;
              default:
                var Zt = oe && oe.$$typeof;
                switch (Zt) {
                  case c:
                  case h:
                  case O:
                  case w:
                  case l:
                    return Zt;
                  default:
                    return gt;
                }
            }
          case r:
            return gt;
        }
      }
    }
    var N = f, B = p, P = c, $ = l, I = t, U = h, W = n, X = O, V = w, ce = r, _e = s, Oe = i, Te = m, je = !1;
    function Ze(re) {
      return je || (je = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), K(re) || z(re) === f;
    }
    function K(re) {
      return z(re) === p;
    }
    function J(re) {
      return z(re) === c;
    }
    function we(re) {
      return z(re) === l;
    }
    function ge(re) {
      return typeof re == "object" && re !== null && re.$$typeof === t;
    }
    function pe(re) {
      return z(re) === h;
    }
    function Se(re) {
      return z(re) === n;
    }
    function he(re) {
      return z(re) === O;
    }
    function Pe(re) {
      return z(re) === w;
    }
    function xe(re) {
      return z(re) === r;
    }
    function Ae(re) {
      return z(re) === s;
    }
    function Ne(re) {
      return z(re) === i;
    }
    function ie(re) {
      return z(re) === m;
    }
    Ke.AsyncMode = N, Ke.ConcurrentMode = B, Ke.ContextConsumer = P, Ke.ContextProvider = $, Ke.Element = I, Ke.ForwardRef = U, Ke.Fragment = W, Ke.Lazy = X, Ke.Memo = V, Ke.Portal = ce, Ke.Profiler = _e, Ke.StrictMode = Oe, Ke.Suspense = Te, Ke.isAsyncMode = Ze, Ke.isConcurrentMode = K, Ke.isContextConsumer = J, Ke.isContextProvider = we, Ke.isElement = ge, Ke.isForwardRef = pe, Ke.isFragment = Se, Ke.isLazy = he, Ke.isMemo = Pe, Ke.isPortal = xe, Ke.isProfiler = Ae, Ke.isStrictMode = Ne, Ke.isSuspense = ie, Ke.isValidElementType = k, Ke.typeOf = z;
  }()), Ke;
}
var Im;
function gc() {
  return Im || (Im = 1, process.env.NODE_ENV === "production" ? Al.exports = jC() : Al.exports = HC()), Al.exports;
}
var VC = gc();
function pf(e, t) {
  return pf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, pf(e, t);
}
function at(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, pf(e, t);
}
var en = function(t, r) {
  if (process.env.NODE_ENV !== "production" && typeof t == "string")
    throw new Error("We do not support refs as string, this is a legacy API and will be likely to be removed in one of the future releases of React.");
  if (typeof t == "function") {
    t(r);
    return;
  }
  t !== null && typeof t == "object" && (t.current = r);
}, km = function(t) {
  return (
    // https://github.com/facebook/react/blob/v16.8.2/packages/react-reconciler/src/ReactFiberCommitWork.js#L665
    t !== null && typeof t == "object" && t.hasOwnProperty("current")
  );
};
function Dm(e) {
  return e === null || e instanceof Element || e instanceof Text ? !1 : !!(e.type && e.tag);
}
var WC = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.prevNode = void 0, n;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    var i = $m.findDOMNode(this);
    process.env.NODE_ENV !== "production" && Dm(i) && (i = null), this.prevNode = i, en(this.props.innerRef, i);
  }, r.componentDidUpdate = function(i) {
    var s = $m.findDOMNode(this);
    process.env.NODE_ENV !== "production" && Dm(s) && (s = null), this.prevNode !== s && (this.prevNode = s, en(this.props.innerRef, s)), i.innerRef !== this.props.innerRef && en(this.props.innerRef, s);
  }, r.componentWillUnmount = function() {
    en(this.props.innerRef, null), delete this.prevNode;
  }, r.render = function() {
    var i = this.props.children;
    return i;
  }, t;
}(wn.Component), GC = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.currentNode = void 0, n.handleRefOverride = function(c) {
      var f = n.props, p = f.children, h = f.innerRef;
      en(p.ref, c), en(h, c), n.currentNode = c;
    }, n;
  }
  var r = t.prototype;
  return r.componentDidUpdate = function(i) {
    i.innerRef !== this.props.innerRef && en(this.props.innerRef, this.currentNode);
  }, r.componentWillUnmount = function() {
    delete this.currentNode;
  }, r.render = function() {
    var i = this.props.children;
    return /* @__PURE__ */ wn.cloneElement(i, {
      ref: this.handleRefOverride
    });
  }, t;
}(wn.Component), QC = ["children", "innerRef"], hr = function(t) {
  var r = t.children, n = t.innerRef, i = Ba(t, QC), s = wn.Children.only(r), l = VC.isForwardRef(s) ? GC : WC, c = s && i && Object.keys(i).length > 0 ? /* @__PURE__ */ wn.cloneElement(s, i) : s;
  return /* @__PURE__ */ wn.createElement(l, {
    innerRef: n
  }, c);
};
function F() {
  return F = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, F.apply(null, arguments);
}
var KC = Object.prototype, YC = KC.hasOwnProperty;
function XC(e, t) {
  return e != null && YC.call(e, t);
}
var JC = Array.isArray;
const _t = JC;
var ZC = typeof global == "object" && global && global.Object === Object && global;
const kb = ZC;
var e$ = typeof self == "object" && self && self.Object === Object && self, t$ = kb || e$ || Function("return this")();
const Dn = t$;
var r$ = Dn.Symbol;
const rn = r$;
var Db = Object.prototype, n$ = Db.hasOwnProperty, a$ = Db.toString, Do = rn ? rn.toStringTag : void 0;
function i$(e) {
  var t = n$.call(e, Do), r = e[Do];
  try {
    e[Do] = void 0;
    var n = !0;
  } catch {
  }
  var i = a$.call(e);
  return n && (t ? e[Do] = r : delete e[Do]), i;
}
var o$ = Object.prototype, s$ = o$.toString;
function l$(e) {
  return s$.call(e);
}
var c$ = "[object Null]", u$ = "[object Undefined]", Lm = rn ? rn.toStringTag : void 0;
function nn(e) {
  return e == null ? e === void 0 ? u$ : c$ : Lm && Lm in Object(e) ? i$(e) : l$(e);
}
function Ur(e) {
  return e != null && typeof e == "object";
}
var d$ = "[object Symbol]";
function Ua(e) {
  return typeof e == "symbol" || Ur(e) && nn(e) == d$;
}
var f$ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, p$ = /^\w*$/;
function Zf(e, t) {
  if (_t(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ua(e) ? !0 : p$.test(e) || !f$.test(e) || t != null && e in Object(t);
}
function On(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var h$ = "[object AsyncFunction]", g$ = "[object Function]", m$ = "[object GeneratorFunction]", v$ = "[object Proxy]";
function Ni(e) {
  if (!On(e))
    return !1;
  var t = nn(e);
  return t == g$ || t == m$ || t == h$ || t == v$;
}
var y$ = Dn["__core-js_shared__"];
const Sd = y$;
var Mm = function() {
  var e = /[^.]+$/.exec(Sd && Sd.keys && Sd.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function b$(e) {
  return !!Mm && Mm in e;
}
var E$ = Function.prototype, w$ = E$.toString;
function ei(e) {
  if (e != null) {
    try {
      return w$.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var S$ = /[\\^$.*+?()[\]{}|]/g, _$ = /^\[object .+?Constructor\]$/, O$ = Function.prototype, T$ = Object.prototype, P$ = O$.toString, x$ = T$.hasOwnProperty, A$ = RegExp(
  "^" + P$.call(x$).replace(S$, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function C$(e) {
  if (!On(e) || b$(e))
    return !1;
  var t = Ni(e) ? A$ : _$;
  return t.test(ei(e));
}
function $$(e, t) {
  return e == null ? void 0 : e[t];
}
function ti(e, t) {
  var r = $$(e, t);
  return C$(r) ? r : void 0;
}
var R$ = ti(Object, "create");
const Xo = R$;
function N$() {
  this.__data__ = Xo ? Xo(null) : {}, this.size = 0;
}
function I$(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var k$ = "__lodash_hash_undefined__", D$ = Object.prototype, L$ = D$.hasOwnProperty;
function M$(e) {
  var t = this.__data__;
  if (Xo) {
    var r = t[e];
    return r === k$ ? void 0 : r;
  }
  return L$.call(t, e) ? t[e] : void 0;
}
var F$ = Object.prototype, B$ = F$.hasOwnProperty;
function U$(e) {
  var t = this.__data__;
  return Xo ? t[e] !== void 0 : B$.call(t, e);
}
var z$ = "__lodash_hash_undefined__";
function q$(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Xo && t === void 0 ? z$ : t, this;
}
function za(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
za.prototype.clear = N$;
za.prototype.delete = I$;
za.prototype.get = M$;
za.prototype.has = U$;
za.prototype.set = q$;
function j$() {
  this.__data__ = [], this.size = 0;
}
function mc(e, t) {
  return e === t || e !== e && t !== t;
}
function vc(e, t) {
  for (var r = e.length; r--; )
    if (mc(e[r][0], t))
      return r;
  return -1;
}
var H$ = Array.prototype, V$ = H$.splice;
function W$(e) {
  var t = this.__data__, r = vc(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : V$.call(t, r, 1), --this.size, !0;
}
function G$(e) {
  var t = this.__data__, r = vc(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Q$(e) {
  return vc(this.__data__, e) > -1;
}
function K$(e, t) {
  var r = this.__data__, n = vc(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Ln(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ln.prototype.clear = j$;
Ln.prototype.delete = W$;
Ln.prototype.get = G$;
Ln.prototype.has = Q$;
Ln.prototype.set = K$;
var Y$ = ti(Dn, "Map");
const Jo = Y$;
function X$() {
  this.size = 0, this.__data__ = {
    hash: new za(),
    map: new (Jo || Ln)(),
    string: new za()
  };
}
function J$(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function yc(e, t) {
  var r = e.__data__;
  return J$(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Z$(e) {
  var t = yc(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function eR(e) {
  return yc(this, e).get(e);
}
function tR(e) {
  return yc(this, e).has(e);
}
function rR(e, t) {
  var r = yc(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Mn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Mn.prototype.clear = X$;
Mn.prototype.delete = Z$;
Mn.prototype.get = eR;
Mn.prototype.has = tR;
Mn.prototype.set = rR;
var nR = "Expected a function";
function bc(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(nR);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var l = e.apply(this, n);
    return r.cache = s.set(i, l) || s, l;
  };
  return r.cache = new (bc.Cache || Mn)(), r;
}
bc.Cache = Mn;
var aR = 500;
function iR(e) {
  var t = bc(e, function(n) {
    return r.size === aR && r.clear(), n;
  }), r = t.cache;
  return t;
}
var oR = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, sR = /\\(\\)?/g, lR = iR(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(oR, function(r, n, i, s) {
    t.push(i ? s.replace(sR, "$1") : n || r);
  }), t;
});
const cR = lR;
function Sn(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var uR = 1 / 0, Fm = rn ? rn.prototype : void 0, Bm = Fm ? Fm.toString : void 0;
function Ec(e) {
  if (typeof e == "string")
    return e;
  if (_t(e))
    return Sn(e, Ec) + "";
  if (Ua(e))
    return Bm ? Bm.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -uR ? "-0" : t;
}
function ri(e) {
  return e == null ? "" : Ec(e);
}
function xs(e, t) {
  return _t(e) ? e : Zf(e, t) ? [e] : cR(ri(e));
}
var dR = "[object Arguments]";
function Um(e) {
  return Ur(e) && nn(e) == dR;
}
var Lb = Object.prototype, fR = Lb.hasOwnProperty, pR = Lb.propertyIsEnumerable, hR = Um(function() {
  return arguments;
}()) ? Um : function(e) {
  return Ur(e) && fR.call(e, "callee") && !pR.call(e, "callee");
};
const wc = hR;
var gR = 9007199254740991, mR = /^(?:0|[1-9]\d*)$/;
function Sc(e, t) {
  var r = typeof e;
  return t = t ?? gR, !!t && (r == "number" || r != "symbol" && mR.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var vR = 9007199254740991;
function ep(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= vR;
}
var yR = 1 / 0;
function Ji(e) {
  if (typeof e == "string" || Ua(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -yR ? "-0" : t;
}
function Mb(e, t, r) {
  t = xs(t, e);
  for (var n = -1, i = t.length, s = !1; ++n < i; ) {
    var l = Ji(t[n]);
    if (!(s = e != null && r(e, l)))
      break;
    e = e[l];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && ep(i) && Sc(l, i) && (_t(e) || wc(e)));
}
function hf(e, t) {
  return e != null && Mb(e, t, XC);
}
function Fb(e, t, r) {
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
function bR(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function As(e, t) {
  t = xs(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Ji(t[r++])];
  return r && r == n ? e : void 0;
}
function _c(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var s = Array(i); ++n < i; )
    s[n] = e[n + t];
  return s;
}
function ER(e, t) {
  return t.length < 2 ? e : As(e, _c(t, 0, -1));
}
function wR(e, t, r) {
  t = xs(t, e), e = ER(e, t);
  var n = e == null ? e : e[Ji(bR(t))];
  return n == null ? void 0 : Fb(n, e, r);
}
function ni(e) {
  return e;
}
var zm = Math.max;
function Bb(e, t, r) {
  return t = zm(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, s = zm(n.length - t, 0), l = Array(s); ++i < s; )
      l[i] = n[t + i];
    i = -1;
    for (var c = Array(t + 1); ++i < t; )
      c[i] = n[i];
    return c[t] = r(l), Fb(e, this, c);
  };
}
function SR(e) {
  return function() {
    return e;
  };
}
var _R = function() {
  try {
    var e = ti(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Ql = _R;
var OR = Ql ? function(e, t) {
  return Ql(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: SR(t),
    writable: !0
  });
} : ni;
const TR = OR;
var PR = 800, xR = 16, AR = Date.now;
function CR(e) {
  var t = 0, r = 0;
  return function() {
    var n = AR(), i = xR - (n - r);
    if (r = n, i > 0) {
      if (++t >= PR)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var $R = CR(TR);
const Ub = $R;
function Zi(e, t) {
  return Ub(Bb(e, t, ni), e + "");
}
var RR = Zi(wR);
const ne = RR;
var gf = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var _d, qm;
function NR() {
  if (qm)
    return _d;
  qm = 1;
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
      for (var l = {}, c = 0; c < 10; c++)
        l["_" + String.fromCharCode(c)] = c;
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
  return _d = i() ? Object.assign : function(s, l) {
    for (var c, f = n(s), p, h = 1; h < arguments.length; h++) {
      c = Object(arguments[h]);
      for (var m in c)
        t.call(c, m) && (f[m] = c[m]);
      if (e) {
        p = e(c);
        for (var v = 0; v < p.length; v++)
          r.call(c, p[v]) && (f[p[v]] = c[p[v]]);
      }
    }
    return f;
  }, _d;
}
var Od, jm;
function tp() {
  if (jm)
    return Od;
  jm = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Od = e, Od;
}
var Td, Hm;
function zb() {
  return Hm || (Hm = 1, Td = Function.call.bind(Object.prototype.hasOwnProperty)), Td;
}
var Pd, Vm;
function IR() {
  if (Vm)
    return Pd;
  Vm = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = tp(), r = {}, n = zb();
    e = function(s) {
      var l = "Warning: " + s;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function i(s, l, c, f, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in s)
        if (n(s, h)) {
          var m;
          try {
            if (typeof s[h] != "function") {
              var v = Error(
                (f || "React class") + ": " + c + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            m = s[h](l, h, f, c, null, t);
          } catch (O) {
            m = O;
          }
          if (m && !(m instanceof Error) && e(
            (f || "React class") + ": type specification of " + c + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var w = p ? p() : "";
            e(
              "Failed " + c + " type: " + m.message + (w ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Pd = i, Pd;
}
var xd, Wm;
function kR() {
  if (Wm)
    return xd;
  Wm = 1;
  var e = gc(), t = NR(), r = tp(), n = zb(), i = IR(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(c) {
    var f = "Warning: " + c;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return xd = function(c, f) {
    var p = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function m(K) {
      var J = K && (p && K[p] || K[h]);
      if (typeof J == "function")
        return J;
    }
    var v = "<<anonymous>>", w = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: D(),
      arrayOf: k,
      element: z(),
      elementType: N(),
      instanceOf: B,
      node: U(),
      objectOf: $,
      oneOf: P,
      oneOfType: I,
      shape: X,
      exact: V
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
      function ge(Se, he, Pe, xe, Ae, Ne, ie) {
        if (xe = xe || v, Ne = Ne || Pe, ie !== r) {
          if (f) {
            var re = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw re.name = "Invariant Violation", re;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var gt = xe + ":" + Pe;
            !J[gt] && // Avoid spamming the console because they are often not actionable except for lib authors
            we < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + Ne + "` prop on `" + xe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), J[gt] = !0, we++);
          }
        }
        return he[Pe] == null ? Se ? he[Pe] === null ? new T("The " + Ae + " `" + Ne + "` is marked as required " + ("in `" + xe + "`, but its value is `null`.")) : new T("The " + Ae + " `" + Ne + "` is marked as required in " + ("`" + xe + "`, but its value is `undefined`.")) : null : K(he, Pe, xe, Ae, Ne);
      }
      var pe = ge.bind(null, !1);
      return pe.isRequired = ge.bind(null, !0), pe;
    }
    function x(K) {
      function J(we, ge, pe, Se, he, Pe) {
        var xe = we[ge], Ae = Oe(xe);
        if (Ae !== K) {
          var Ne = Te(xe);
          return new T(
            "Invalid " + Se + " `" + he + "` of type " + ("`" + Ne + "` supplied to `" + pe + "`, expected ") + ("`" + K + "`."),
            { expectedType: K }
          );
        }
        return null;
      }
      return _(J);
    }
    function D() {
      return _(l);
    }
    function k(K) {
      function J(we, ge, pe, Se, he) {
        if (typeof K != "function")
          return new T("Property `" + he + "` of component `" + pe + "` has invalid PropType notation inside arrayOf.");
        var Pe = we[ge];
        if (!Array.isArray(Pe)) {
          var xe = Oe(Pe);
          return new T("Invalid " + Se + " `" + he + "` of type " + ("`" + xe + "` supplied to `" + pe + "`, expected an array."));
        }
        for (var Ae = 0; Ae < Pe.length; Ae++) {
          var Ne = K(Pe, Ae, pe, Se, he + "[" + Ae + "]", r);
          if (Ne instanceof Error)
            return Ne;
        }
        return null;
      }
      return _(J);
    }
    function z() {
      function K(J, we, ge, pe, Se) {
        var he = J[we];
        if (!c(he)) {
          var Pe = Oe(he);
          return new T("Invalid " + pe + " `" + Se + "` of type " + ("`" + Pe + "` supplied to `" + ge + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(K);
    }
    function N() {
      function K(J, we, ge, pe, Se) {
        var he = J[we];
        if (!e.isValidElementType(he)) {
          var Pe = Oe(he);
          return new T("Invalid " + pe + " `" + Se + "` of type " + ("`" + Pe + "` supplied to `" + ge + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(K);
    }
    function B(K) {
      function J(we, ge, pe, Se, he) {
        if (!(we[ge] instanceof K)) {
          var Pe = K.name || v, xe = Ze(we[ge]);
          return new T("Invalid " + Se + " `" + he + "` of type " + ("`" + xe + "` supplied to `" + pe + "`, expected ") + ("instance of `" + Pe + "`."));
        }
        return null;
      }
      return _(J);
    }
    function P(K) {
      if (!Array.isArray(K))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), l;
      function J(we, ge, pe, Se, he) {
        for (var Pe = we[ge], xe = 0; xe < K.length; xe++)
          if (O(Pe, K[xe]))
            return null;
        var Ae = JSON.stringify(K, function(ie, re) {
          var gt = Te(re);
          return gt === "symbol" ? String(re) : re;
        });
        return new T("Invalid " + Se + " `" + he + "` of value `" + String(Pe) + "` " + ("supplied to `" + pe + "`, expected one of " + Ae + "."));
      }
      return _(J);
    }
    function $(K) {
      function J(we, ge, pe, Se, he) {
        if (typeof K != "function")
          return new T("Property `" + he + "` of component `" + pe + "` has invalid PropType notation inside objectOf.");
        var Pe = we[ge], xe = Oe(Pe);
        if (xe !== "object")
          return new T("Invalid " + Se + " `" + he + "` of type " + ("`" + xe + "` supplied to `" + pe + "`, expected an object."));
        for (var Ae in Pe)
          if (n(Pe, Ae)) {
            var Ne = K(Pe, Ae, pe, Se, he + "." + Ae, r);
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
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + je(we) + " at index " + J + "."
          ), l;
      }
      function ge(pe, Se, he, Pe, xe) {
        for (var Ae = [], Ne = 0; Ne < K.length; Ne++) {
          var ie = K[Ne], re = ie(pe, Se, he, Pe, xe, r);
          if (re == null)
            return null;
          re.data && n(re.data, "expectedType") && Ae.push(re.data.expectedType);
        }
        var gt = Ae.length > 0 ? ", expected one of type [" + Ae.join(", ") + "]" : "";
        return new T("Invalid " + Pe + " `" + xe + "` supplied to " + ("`" + he + "`" + gt + "."));
      }
      return _(ge);
    }
    function U() {
      function K(J, we, ge, pe, Se) {
        return ce(J[we]) ? null : new T("Invalid " + pe + " `" + Se + "` supplied to " + ("`" + ge + "`, expected a ReactNode."));
      }
      return _(K);
    }
    function W(K, J, we, ge, pe) {
      return new T(
        (K || "React class") + ": " + J + " type `" + we + "." + ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + pe + "`."
      );
    }
    function X(K) {
      function J(we, ge, pe, Se, he) {
        var Pe = we[ge], xe = Oe(Pe);
        if (xe !== "object")
          return new T("Invalid " + Se + " `" + he + "` of type `" + xe + "` " + ("supplied to `" + pe + "`, expected `object`."));
        for (var Ae in K) {
          var Ne = K[Ae];
          if (typeof Ne != "function")
            return W(pe, Se, he, Ae, Te(Ne));
          var ie = Ne(Pe, Ae, pe, Se, he + "." + Ae, r);
          if (ie)
            return ie;
        }
        return null;
      }
      return _(J);
    }
    function V(K) {
      function J(we, ge, pe, Se, he) {
        var Pe = we[ge], xe = Oe(Pe);
        if (xe !== "object")
          return new T("Invalid " + Se + " `" + he + "` of type `" + xe + "` " + ("supplied to `" + pe + "`, expected `object`."));
        var Ae = t({}, we[ge], K);
        for (var Ne in Ae) {
          var ie = K[Ne];
          if (n(K, Ne) && typeof ie != "function")
            return W(pe, Se, he, Ne, Te(ie));
          if (!ie)
            return new T(
              "Invalid " + Se + " `" + he + "` key `" + Ne + "` supplied to `" + pe + "`.\nBad object: " + JSON.stringify(we[ge], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(K), null, "  ")
            );
          var re = ie(Pe, Ne, pe, Se, he + "." + Ne, r);
          if (re)
            return re;
        }
        return null;
      }
      return _(J);
    }
    function ce(K) {
      switch (typeof K) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !K;
        case "object":
          if (Array.isArray(K))
            return K.every(ce);
          if (K === null || c(K))
            return !0;
          var J = m(K);
          if (J) {
            var we = J.call(K), ge;
            if (J !== K.entries) {
              for (; !(ge = we.next()).done; )
                if (!ce(ge.value))
                  return !1;
            } else
              for (; !(ge = we.next()).done; ) {
                var pe = ge.value;
                if (pe && !ce(pe[1]))
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
    function je(K) {
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
  }, xd;
}
var Ad, Gm;
function DR() {
  if (Gm)
    return Ad;
  Gm = 1;
  var e = tp();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ad = function() {
    function n(l, c, f, p, h, m) {
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
  }, Ad;
}
if (process.env.NODE_ENV !== "production") {
  var LR = gc(), MR = !0;
  gf.exports = kR()(LR.isElement, MR);
} else
  gf.exports = DR()();
var qb = gf.exports;
const d = /* @__PURE__ */ Rt(qb);
function FR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ho(e) {
  return e === void 0;
}
function BR(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
var UR = /\s/;
function zR(e) {
  for (var t = e.length; t-- && UR.test(e.charAt(t)); )
    ;
  return t;
}
var qR = /^\s+/;
function jb(e) {
  return e && e.slice(0, zR(e) + 1).replace(qR, "");
}
var Qm = 0 / 0, jR = /^[-+]0x[0-9a-f]+$/i, HR = /^0b[01]+$/i, VR = /^0o[0-7]+$/i, WR = parseInt;
function Hb(e) {
  if (typeof e == "number")
    return e;
  if (Ua(e))
    return Qm;
  if (On(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = On(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = jb(e);
  var r = HR.test(e);
  return r || VR.test(e) ? WR(e.slice(2), r ? 2 : 8) : jR.test(e) ? Qm : +e;
}
var Km = 1 / 0, GR = 17976931348623157e292;
function Pi(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Hb(e), e === Km || e === -Km) {
    var t = e < 0 ? -1 : 1;
    return t * GR;
  }
  return e === e ? e : 0;
}
function Cs(e) {
  var t = Pi(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
function QR(e, t, r) {
  return e = ri(e), r = r == null ? 0 : BR(Cs(r), 0, e.length), t = Ec(t), e.slice(r, r + t.length) == t;
}
function Vb(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var l = e[r];
    t(l, r, e) && (s[i++] = l);
  }
  return s;
}
function KR(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), l = n(t), c = l.length; c--; ) {
      var f = l[e ? c : ++i];
      if (r(s[f], f, s) === !1)
        break;
    }
    return t;
  };
}
var YR = KR();
const XR = YR;
function JR(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
function ZR() {
  return !1;
}
var Wb = typeof exports == "object" && exports && !exports.nodeType && exports, Ym = Wb && typeof module == "object" && module && !module.nodeType && module, eN = Ym && Ym.exports === Wb, Xm = eN ? Dn.Buffer : void 0, tN = Xm ? Xm.isBuffer : void 0, rN = tN || ZR;
const Kl = rN;
var nN = "[object Arguments]", aN = "[object Array]", iN = "[object Boolean]", oN = "[object Date]", sN = "[object Error]", lN = "[object Function]", cN = "[object Map]", uN = "[object Number]", dN = "[object Object]", fN = "[object RegExp]", pN = "[object Set]", hN = "[object String]", gN = "[object WeakMap]", mN = "[object ArrayBuffer]", vN = "[object DataView]", yN = "[object Float32Array]", bN = "[object Float64Array]", EN = "[object Int8Array]", wN = "[object Int16Array]", SN = "[object Int32Array]", _N = "[object Uint8Array]", ON = "[object Uint8ClampedArray]", TN = "[object Uint16Array]", PN = "[object Uint32Array]", ct = {};
ct[yN] = ct[bN] = ct[EN] = ct[wN] = ct[SN] = ct[_N] = ct[ON] = ct[TN] = ct[PN] = !0;
ct[nN] = ct[aN] = ct[mN] = ct[iN] = ct[vN] = ct[oN] = ct[sN] = ct[lN] = ct[cN] = ct[uN] = ct[dN] = ct[fN] = ct[pN] = ct[hN] = ct[gN] = !1;
function xN(e) {
  return Ur(e) && ep(e.length) && !!ct[nn(e)];
}
function Oc(e) {
  return function(t) {
    return e(t);
  };
}
var Gb = typeof exports == "object" && exports && !exports.nodeType && exports, Vo = Gb && typeof module == "object" && module && !module.nodeType && module, AN = Vo && Vo.exports === Gb, Cd = AN && kb.process, CN = function() {
  try {
    var e = Vo && Vo.require && Vo.require("util").types;
    return e || Cd && Cd.binding && Cd.binding("util");
  } catch {
  }
}();
const Jm = CN;
var Zm = Jm && Jm.isTypedArray, $N = Zm ? Oc(Zm) : xN;
const rp = $N;
var RN = Object.prototype, NN = RN.hasOwnProperty;
function IN(e, t) {
  var r = _t(e), n = !r && wc(e), i = !r && !n && Kl(e), s = !r && !n && !i && rp(e), l = r || n || i || s, c = l ? JR(e.length, String) : [], f = c.length;
  for (var p in e)
    (t || NN.call(e, p)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    Sc(p, f))) && c.push(p);
  return c;
}
var kN = Object.prototype;
function Qb(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || kN;
  return e === r;
}
function Kb(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var DN = Kb(Object.keys, Object);
const LN = DN;
var MN = Object.prototype, FN = MN.hasOwnProperty;
function np(e) {
  if (!Qb(e))
    return LN(e);
  var t = [];
  for (var r in Object(e))
    FN.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Fn(e) {
  return e != null && ep(e.length) && !Ni(e);
}
function Fr(e) {
  return Fn(e) ? IN(e) : np(e);
}
function BN(e, t) {
  return e && XR(e, t, Fr);
}
function UN(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Fn(r))
      return e(r, n);
    for (var i = r.length, s = t ? i : -1, l = Object(r); (t ? s-- : ++s < i) && n(l[s], s, l) !== !1; )
      ;
    return r;
  };
}
var zN = UN(BN);
const eo = zN;
function qN(e, t) {
  var r = [];
  return eo(e, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function jN() {
  this.__data__ = new Ln(), this.size = 0;
}
function HN(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function VN(e) {
  return this.__data__.get(e);
}
function WN(e) {
  return this.__data__.has(e);
}
var GN = 200;
function QN(e, t) {
  var r = this.__data__;
  if (r instanceof Ln) {
    var n = r.__data__;
    if (!Jo || n.length < GN - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Mn(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function _n(e) {
  var t = this.__data__ = new Ln(e);
  this.size = t.size;
}
_n.prototype.clear = jN;
_n.prototype.delete = HN;
_n.prototype.get = VN;
_n.prototype.has = WN;
_n.prototype.set = QN;
var KN = "__lodash_hash_undefined__";
function YN(e) {
  return this.__data__.set(e, KN), this;
}
function XN(e) {
  return this.__data__.has(e);
}
function qa(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Mn(); ++t < r; )
    this.add(e[t]);
}
qa.prototype.add = qa.prototype.push = YN;
qa.prototype.has = XN;
function Yb(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Zo(e, t) {
  return e.has(t);
}
var JN = 1, ZN = 2;
function Xb(e, t, r, n, i, s) {
  var l = r & JN, c = e.length, f = t.length;
  if (c != f && !(l && f > c))
    return !1;
  var p = s.get(e), h = s.get(t);
  if (p && h)
    return p == t && h == e;
  var m = -1, v = !0, w = r & ZN ? new qa() : void 0;
  for (s.set(e, t), s.set(t, e); ++m < c; ) {
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
      if (!Yb(t, function(x, D) {
        if (!Zo(w, D) && (O === x || i(O, x, r, n, s)))
          return w.push(D);
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
var eI = Dn.Uint8Array;
const ev = eI;
function tI(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function ap(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var rI = 1, nI = 2, aI = "[object Boolean]", iI = "[object Date]", oI = "[object Error]", sI = "[object Map]", lI = "[object Number]", cI = "[object RegExp]", uI = "[object Set]", dI = "[object String]", fI = "[object Symbol]", pI = "[object ArrayBuffer]", hI = "[object DataView]", tv = rn ? rn.prototype : void 0, $d = tv ? tv.valueOf : void 0;
function gI(e, t, r, n, i, s, l) {
  switch (r) {
    case hI:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case pI:
      return !(e.byteLength != t.byteLength || !s(new ev(e), new ev(t)));
    case aI:
    case iI:
    case lI:
      return mc(+e, +t);
    case oI:
      return e.name == t.name && e.message == t.message;
    case cI:
    case dI:
      return e == t + "";
    case sI:
      var c = tI;
    case uI:
      var f = n & rI;
      if (c || (c = ap), e.size != t.size && !f)
        return !1;
      var p = l.get(e);
      if (p)
        return p == t;
      n |= nI, l.set(e, t);
      var h = Xb(c(e), c(t), n, i, s, l);
      return l.delete(e), h;
    case fI:
      if ($d)
        return $d.call(e) == $d.call(t);
  }
  return !1;
}
function Jb(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function mI(e, t, r) {
  var n = t(e);
  return _t(e) ? n : Jb(n, r(e));
}
function vI() {
  return [];
}
var yI = Object.prototype, bI = yI.propertyIsEnumerable, rv = Object.getOwnPropertySymbols, EI = rv ? function(e) {
  return e == null ? [] : (e = Object(e), Vb(rv(e), function(t) {
    return bI.call(e, t);
  }));
} : vI;
const wI = EI;
function nv(e) {
  return mI(e, Fr, wI);
}
var SI = 1, _I = Object.prototype, OI = _I.hasOwnProperty;
function TI(e, t, r, n, i, s) {
  var l = r & SI, c = nv(e), f = c.length, p = nv(t), h = p.length;
  if (f != h && !l)
    return !1;
  for (var m = f; m--; ) {
    var v = c[m];
    if (!(l ? v in t : OI.call(t, v)))
      return !1;
  }
  var w = s.get(e), O = s.get(t);
  if (w && O)
    return w == t && O == e;
  var T = !0;
  s.set(e, t), s.set(t, e);
  for (var _ = l; ++m < f; ) {
    v = c[m];
    var x = e[v], D = t[v];
    if (n)
      var k = l ? n(D, x, v, t, e, s) : n(x, D, v, e, t, s);
    if (!(k === void 0 ? x === D || i(x, D, r, n, s) : k)) {
      T = !1;
      break;
    }
    _ || (_ = v == "constructor");
  }
  if (T && !_) {
    var z = e.constructor, N = t.constructor;
    z != N && "constructor" in e && "constructor" in t && !(typeof z == "function" && z instanceof z && typeof N == "function" && N instanceof N) && (T = !1);
  }
  return s.delete(e), s.delete(t), T;
}
var PI = ti(Dn, "DataView");
const mf = PI;
var xI = ti(Dn, "Promise");
const vf = xI;
var AI = ti(Dn, "Set");
const xi = AI;
var CI = ti(Dn, "WeakMap");
const yf = CI;
var av = "[object Map]", $I = "[object Object]", iv = "[object Promise]", ov = "[object Set]", sv = "[object WeakMap]", lv = "[object DataView]", RI = ei(mf), NI = ei(Jo), II = ei(vf), kI = ei(xi), DI = ei(yf), xa = nn;
(mf && xa(new mf(new ArrayBuffer(1))) != lv || Jo && xa(new Jo()) != av || vf && xa(vf.resolve()) != iv || xi && xa(new xi()) != ov || yf && xa(new yf()) != sv) && (xa = function(e) {
  var t = nn(e), r = t == $I ? e.constructor : void 0, n = r ? ei(r) : "";
  if (n)
    switch (n) {
      case RI:
        return lv;
      case NI:
        return av;
      case II:
        return iv;
      case kI:
        return ov;
      case DI:
        return sv;
    }
  return t;
});
const Yl = xa;
var LI = 1, cv = "[object Arguments]", uv = "[object Array]", Cl = "[object Object]", MI = Object.prototype, dv = MI.hasOwnProperty;
function FI(e, t, r, n, i, s) {
  var l = _t(e), c = _t(t), f = l ? uv : Yl(e), p = c ? uv : Yl(t);
  f = f == cv ? Cl : f, p = p == cv ? Cl : p;
  var h = f == Cl, m = p == Cl, v = f == p;
  if (v && Kl(e)) {
    if (!Kl(t))
      return !1;
    l = !0, h = !1;
  }
  if (v && !h)
    return s || (s = new _n()), l || rp(e) ? Xb(e, t, r, n, i, s) : gI(e, t, f, r, n, i, s);
  if (!(r & LI)) {
    var w = h && dv.call(e, "__wrapped__"), O = m && dv.call(t, "__wrapped__");
    if (w || O) {
      var T = w ? e.value() : e, _ = O ? t.value() : t;
      return s || (s = new _n()), i(T, _, r, n, s);
    }
  }
  return v ? (s || (s = new _n()), TI(e, t, r, n, i, s)) : !1;
}
function Tc(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Ur(e) && !Ur(t) ? e !== e && t !== t : FI(e, t, r, n, Tc, i);
}
var BI = 1, UI = 2;
function zI(e, t, r, n) {
  var i = r.length, s = i, l = !n;
  if (e == null)
    return !s;
  for (e = Object(e); i--; ) {
    var c = r[i];
    if (l && c[2] ? c[1] !== e[c[0]] : !(c[0] in e))
      return !1;
  }
  for (; ++i < s; ) {
    c = r[i];
    var f = c[0], p = e[f], h = c[1];
    if (l && c[2]) {
      if (p === void 0 && !(f in e))
        return !1;
    } else {
      var m = new _n();
      if (n)
        var v = n(p, h, f, e, t, m);
      if (!(v === void 0 ? Tc(h, p, BI | UI, n, m) : v))
        return !1;
    }
  }
  return !0;
}
function Zb(e) {
  return e === e && !On(e);
}
function qI(e) {
  for (var t = Fr(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Zb(i)];
  }
  return t;
}
function eE(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function jI(e) {
  var t = qI(e);
  return t.length == 1 && t[0][2] ? eE(t[0][0], t[0][1]) : function(r) {
    return r === e || zI(r, e, t);
  };
}
function tn(e, t, r) {
  var n = e == null ? void 0 : As(e, t);
  return n === void 0 ? r : n;
}
function HI(e, t) {
  return e != null && t in Object(e);
}
function tE(e, t) {
  return e != null && Mb(e, t, HI);
}
var VI = 1, WI = 2;
function GI(e, t) {
  return Zf(e) && Zb(t) ? eE(Ji(e), t) : function(r) {
    var n = tn(r, e);
    return n === void 0 && n === t ? tE(r, e) : Tc(t, n, VI | WI);
  };
}
function rE(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function QI(e) {
  return function(t) {
    return As(t, e);
  };
}
function KI(e) {
  return Zf(e) ? rE(Ji(e)) : QI(e);
}
function ua(e) {
  return typeof e == "function" ? e : e == null ? ni : typeof e == "object" ? _t(e) ? GI(e[0], e[1]) : jI(e) : KI(e);
}
function bf(e, t) {
  var r = _t(e) ? Vb : qN;
  return r(e, ua(t));
}
var YI = "[object Map]", XI = "[object Set]", JI = Object.prototype, ZI = JI.hasOwnProperty;
function Na(e) {
  if (e == null)
    return !0;
  if (Fn(e) && (_t(e) || typeof e == "string" || typeof e.splice == "function" || Kl(e) || rp(e) || wc(e)))
    return !e.length;
  var t = Yl(e);
  if (t == YI || t == XI)
    return !e.size;
  if (Qb(e))
    return !np(e).length;
  for (var r in e)
    if (ZI.call(e, r))
      return !1;
  return !0;
}
function nE(e, t, r, n) {
  for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
function ek(e) {
  return e !== e;
}
function tk(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
function Pc(e, t, r) {
  return t === t ? tk(e, t, r) : nE(e, ek, r);
}
function ip(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && Pc(e, t, 0) > -1;
}
function op(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var rk = Math.min;
function nk(e, t, r) {
  for (var n = r ? op : ip, i = e[0].length, s = e.length, l = s, c = Array(s), f = 1 / 0, p = []; l--; ) {
    var h = e[l];
    l && t && (h = Sn(h, Oc(t))), f = rk(h.length, f), c[l] = !r && (t || i >= 120 && h.length >= 120) ? new qa(l && h) : void 0;
  }
  h = e[0];
  var m = -1, v = c[0];
  e:
    for (; ++m < i && p.length < f; ) {
      var w = h[m], O = t ? t(w) : w;
      if (w = r || w !== 0 ? w : 0, !(v ? Zo(v, O) : n(p, O, r))) {
        for (l = s; --l; ) {
          var T = c[l];
          if (!(T ? Zo(T, O) : n(e[l], O, r)))
            continue e;
        }
        v && v.push(O), p.push(w);
      }
    }
  return p;
}
function es(e) {
  return Ur(e) && Fn(e);
}
function ak(e) {
  return es(e) ? e : [];
}
var ik = Zi(function(e) {
  var t = Sn(e, ak);
  return t.length && t[0] === e[0] ? nk(t) : [];
});
const ok = ik;
function sk(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function lk(e) {
  return typeof e == "function" ? e : ni;
}
function aE(e, t) {
  var r = _t(e) ? sk : eo;
  return r(e, lk(t));
}
var Ef = function(t) {
  return "default" + (t[0].toUpperCase() + t.slice(1));
}, ck = function(t, r, n, i) {
  i === void 0 && (i = !1);
  var s = r[t];
  if (s !== void 0)
    return s;
  if (i) {
    var l = r[Ef(t)];
    if (l !== void 0)
      return l;
    if (n) {
      var c = n[t];
      if (c !== void 0)
        return c;
    }
  }
  if (t === "checked")
    return !1;
  if (t === "value")
    return r.multiple ? [] : "";
}, to = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var r, n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    r = e.call.apply(e, [this].concat(i)) || this;
    var l = r.constructor, c = l.autoControlledProps, f = l.getAutoControlledStateFromProps, p = ne(FR(r), "getInitialAutoControlledState", r.props) || {};
    if (process.env.NODE_ENV !== "production") {
      var h = r.constructor, m = h.defaultProps, v = h.name, w = h.propTypes, O = h.getDerivedStateFromProps;
      O !== t.getDerivedStateFromProps && console.error("Auto controlled " + v + " must specify a static getAutoControlledStateFromProps() instead of getDerivedStateFromProps()."), aE(c, function(D) {
        var k = Ef(D);
        hf(w, k) || console.error(v + ' is missing "' + k + '" propTypes validation for auto controlled prop "' + D + '".'), hf(w, D) || console.error(v + ' is missing propTypes validation for auto controlled prop "' + D + '".');
      });
      var T = ok(c, Fr(m));
      Na(T) || console.error(["Do not set defaultProps for autoControlledProps. You can set defaults by", "setting state in the constructor or using an ES7 property initializer", "(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)", "See " + v + ' props: "' + T + '".'].join(" "));
      var _ = bf(c, function(D) {
        return QR(D, "default");
      });
      Na(_) || console.error(["Do not add default props to autoControlledProps.", "Default props are automatically handled.", "See " + v + ' autoControlledProps: "' + _ + '".'].join(" "));
    }
    var x = c.reduce(function(D, k) {
      if (D[k] = ck(k, r.props, p, !0), process.env.NODE_ENV !== "production") {
        var z = Ef(k), N = r.constructor.name;
        !Ho(r.props[z]) && !Ho(r.props[k]) && console.error(N + ' prop "' + k + '" is auto controlled. Specify either ' + z + " or " + k + ", but not both.");
      }
      return D;
    }, {});
    return r.state = F({}, p, x, {
      autoControlledProps: c,
      getAutoControlledStateFromProps: f
    }), r;
  }
  return t.getDerivedStateFromProps = function(n, i) {
    var s = i.autoControlledProps, l = i.getAutoControlledStateFromProps, c = s.reduce(function(p, h) {
      var m = !Ho(n[h]);
      return m && (p[h] = n[h]), p;
    }, {});
    if (l) {
      var f = l(n, F({}, i, c), i);
      return F({}, c, f);
    }
    return c;
  }, t.getAutoControlledStateFromProps = function() {
    return null;
  }, t;
}(b.Component);
function uk(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Fn(t)) {
      var s = ua(r);
      t = Fr(t), r = function(c) {
        return s(i[c], c, i);
      };
    }
    var l = e(t, r, n);
    return l > -1 ? i[s ? t[l] : l] : void 0;
  };
}
var dk = Math.max;
function wf(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : Cs(r);
  return i < 0 && (i = dk(n + i, 0)), nE(e, ua(t), i);
}
var fk = uk(wf);
const iE = fk;
function pk(e, t) {
  var r;
  return eo(e, function(n, i, s) {
    return r = t(n, i, s), !r;
  }), !!r;
}
function ts(e, t, r) {
  if (!On(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Fn(r) && Sc(t, r.length) : n == "string" && t in r) ? mc(r[t], e) : !1;
}
function Wo(e, t, r) {
  var n = _t(e) ? Yb : pk;
  return r && ts(e, t, r) && (t = void 0), n(e, ua(t));
}
var hk = function(t, r) {
  return Wo(Jf.toArray(t), {
    type: r
  });
}, le = function(t) {
  return t == null || Array.isArray(t) && t.length === 0;
}, Ll = {
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
function fv(e) {
  var t = typeof e;
  return t === "string" || t === "number" ? Ll[e] || e : "";
}
var C = function(t, r) {
  return t && r;
}, Lt = function(t, r) {
  return t && t !== !0 && t + " " + r;
}, rt = function(t, r) {
  return t && (t === !0 ? r : t + " " + r);
}, Xl = function(t, r) {
  return !t || t === !0 ? null : t.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(n) {
    return n.replace("-", " ") + " " + r;
  }).join(" ");
}, gr = function(t) {
  return t === "justified" ? "justified" : Lt(t, "aligned");
}, $r = function(t) {
  return Lt(t, "aligned");
}, Vt = function(t, r, n) {
  if (r === void 0 && (r = ""), n === void 0 && (n = !1), n && t === "equal")
    return "equal width";
  var i = typeof t;
  return (i === "string" || i === "number") && r ? fv(t) + " " + r : fv(t);
}, gk = 200;
function oE(e, t, r, n) {
  var i = -1, s = ip, l = !0, c = e.length, f = [], p = t.length;
  if (!c)
    return f;
  r && (t = Sn(t, Oc(r))), n ? (s = op, l = !1) : t.length >= gk && (s = Zo, l = !1, t = new qa(t));
  e:
    for (; ++i < c; ) {
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
var pv = rn ? rn.isConcatSpreadable : void 0;
function mk(e) {
  return _t(e) || wc(e) || !!(pv && e && e[pv]);
}
function $s(e, t, r, n, i) {
  var s = -1, l = e.length;
  for (r || (r = mk), i || (i = []); ++s < l; ) {
    var c = e[s];
    t > 0 && r(c) ? t > 1 ? $s(c, t - 1, r, n, i) : Jb(i, c) : n || (i[i.length] = c);
  }
  return i;
}
var vk = Zi(function(e, t) {
  return es(e) ? oE(e, $s(t, 1, es, !0)) : [];
});
const Sf = vk;
function sE(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : _c(e, t, r);
}
function yk(e, t) {
  for (var r = e.length; r-- && Pc(t, e[r], 0) > -1; )
    ;
  return r;
}
function bk(e, t) {
  for (var r = -1, n = e.length; ++r < n && Pc(t, e[r], 0) > -1; )
    ;
  return r;
}
function Ek(e) {
  return e.split("");
}
var wk = "\\ud800-\\udfff", Sk = "\\u0300-\\u036f", _k = "\\ufe20-\\ufe2f", Ok = "\\u20d0-\\u20ff", Tk = Sk + _k + Ok, Pk = "\\ufe0e\\ufe0f", xk = "\\u200d", Ak = RegExp("[" + xk + wk + Tk + Pk + "]");
function sp(e) {
  return Ak.test(e);
}
var lE = "\\ud800-\\udfff", Ck = "\\u0300-\\u036f", $k = "\\ufe20-\\ufe2f", Rk = "\\u20d0-\\u20ff", Nk = Ck + $k + Rk, Ik = "\\ufe0e\\ufe0f", kk = "[" + lE + "]", _f = "[" + Nk + "]", Of = "\\ud83c[\\udffb-\\udfff]", Dk = "(?:" + _f + "|" + Of + ")", cE = "[^" + lE + "]", uE = "(?:\\ud83c[\\udde6-\\uddff]){2}", dE = "[\\ud800-\\udbff][\\udc00-\\udfff]", Lk = "\\u200d", fE = Dk + "?", pE = "[" + Ik + "]?", Mk = "(?:" + Lk + "(?:" + [cE, uE, dE].join("|") + ")" + pE + fE + ")*", Fk = pE + fE + Mk, Bk = "(?:" + [cE + _f + "?", _f, uE, dE, kk].join("|") + ")", Uk = RegExp(Of + "(?=" + Of + ")|" + Bk + Fk, "g");
function zk(e) {
  return e.match(Uk) || [];
}
function Tf(e) {
  return sp(e) ? zk(e) : Ek(e);
}
function qk(e, t, r) {
  if (e = ri(e), e && (r || t === void 0))
    return jb(e);
  if (!e || !(t = Ec(t)))
    return e;
  var n = Tf(e), i = Tf(t), s = bk(n, i), l = yk(n, i) + 1;
  return sE(n, s, l).join("");
}
function jk(e, t, r) {
  t == "__proto__" && Ql ? Ql(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Hk = Object.prototype, Vk = Hk.hasOwnProperty;
function Wk(e, t, r) {
  var n = e[t];
  (!(Vk.call(e, t) && mc(n, r)) || r === void 0 && !(t in e)) && jk(e, t, r);
}
function hE(e, t, r, n) {
  if (!On(e))
    return e;
  t = xs(t, e);
  for (var i = -1, s = t.length, l = s - 1, c = e; c != null && ++i < s; ) {
    var f = Ji(t[i]), p = r;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return e;
    if (i != l) {
      var h = c[f];
      p = n ? n(h, f, c) : void 0, p === void 0 && (p = On(h) ? h : Sc(t[i + 1]) ? [] : {});
    }
    Wk(c, f, p), c = c[f];
  }
  return e;
}
function Gk(e, t, r) {
  for (var n = -1, i = t.length, s = {}; ++n < i; ) {
    var l = t[n], c = As(e, l);
    r(c, l) && hE(s, xs(l, e), c);
  }
  return s;
}
function Qk(e, t) {
  return Gk(e, t, function(r, n) {
    return tE(e, n);
  });
}
function Kk(e) {
  var t = e == null ? 0 : e.length;
  return t ? $s(e, 1) : [];
}
function Yk(e) {
  return Ub(Bb(e, void 0, Kk), e + "");
}
var Xk = Yk(function(e, t) {
  return e == null ? {} : Qk(e, t);
});
const lp = Xk;
var Jk = Kb(Object.getPrototypeOf, Object);
const Zk = Jk;
var eD = "[object Object]", tD = Function.prototype, rD = Object.prototype, gE = tD.toString, nD = rD.hasOwnProperty, aD = gE.call(Object);
function xc(e) {
  if (!Ur(e) || nn(e) != eD)
    return !1;
  var t = Zk(e);
  if (t === null)
    return !0;
  var r = nD.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && gE.call(r) == aD;
}
function Ue(e) {
  return e == null;
}
function iD(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var s = e[n], l = t(s);
    if (l != null && (c === void 0 ? l === l && !Ua(l) : r(l, c)))
      var c = l, f = s;
  }
  return f;
}
function oD(e, t) {
  return e < t;
}
function hv(e) {
  return e && e.length ? iD(e, ni, oD) : void 0;
}
function sD(e, t) {
  for (var r, n = -1, i = e.length; ++n < i; ) {
    var s = t(e[n]);
    s !== void 0 && (r = r === void 0 ? s : r + s);
  }
  return r;
}
function gv(e) {
  return e && e.length ? sD(e, ni) : 0;
}
function mE(e, t) {
  var r = -1, n = Fn(e) ? Array(e.length) : [];
  return eo(e, function(i, s, l) {
    n[++r] = t(i, s, l);
  }), n;
}
function yt(e, t) {
  var r = _t(e) ? Sn : mE;
  return r(e, ua(t));
}
function lD(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
function cD(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, s = Ua(e), l = t !== void 0, c = t === null, f = t === t, p = Ua(t);
    if (!c && !p && !s && e > t || s && l && f && !c && !p || n && l && f || !r && f || !i)
      return 1;
    if (!n && !s && !p && e < t || p && r && i && !n && !s || c && r && i || !l && i || !f)
      return -1;
  }
  return 0;
}
function uD(e, t, r) {
  for (var n = -1, i = e.criteria, s = t.criteria, l = i.length, c = r.length; ++n < l; ) {
    var f = cD(i[n], s[n]);
    if (f) {
      if (n >= c)
        return f;
      var p = r[n];
      return f * (p == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function dD(e, t, r) {
  t.length ? t = Sn(t, function(s) {
    return _t(s) ? function(l) {
      return As(l, s.length === 1 ? s[0] : s);
    } : s;
  }) : t = [ni];
  var n = -1;
  t = Sn(t, Oc(ua));
  var i = mE(e, function(s, l, c) {
    var f = Sn(t, function(p) {
      return p(s);
    });
    return { criteria: f, index: ++n, value: s };
  });
  return lD(i, function(s, l) {
    return uD(s, l, r);
  });
}
var fD = Zi(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && ts(e, t[0], t[1]) ? t = [] : r > 2 && ts(t[0], t[1], t[2]) && (t = [t[0]]), dD(e, $s(t, 1), []);
});
const pD = fD;
function hD(e, t, r) {
  return e && e.length ? (t = r || t === void 0 ? 1 : Cs(t), _c(e, 0, t < 0 ? 0 : t)) : [];
}
var vE = function() {
  return 0;
};
if (process.env.NODE_ENV !== "production") {
  var Rd = [], mv = [];
  vE = function(t, r) {
    if (t === r)
      return 0;
    var n = t.length, i = r.length;
    if (n === 0)
      return i;
    if (i === 0)
      return n;
    for (var s, l, c, f, p = 0, h = 0; p < n; )
      mv[p] = t.charCodeAt(p), Rd[p] = ++p;
    for (; h < i; )
      for (s = r.charCodeAt(h), c = h++, l = h, p = 0; p < n; p++)
        f = s === mv[p] ? c : c + 1, c = Rd[p], l = Rd[p] = c > l ? f > l ? l + 1 : f : f > c ? c + 1 : f;
    return l;
  };
}
const vv = vE;
var gD = function() {
  var t;
  return (t = Object.prototype.toString).call.apply(t, arguments);
}, yE = function(t) {
  if (!Array.isArray(t))
    throw new Error("Invalid argument supplied to suggest, expected an instance of array.");
  var r = bc(function(i) {
    var s = i.split(" ");
    return hD(pD(yt(t, function(l) {
      var c = l.split(" "), f = gv(yt(yt(s, function(h) {
        return yt(c, function(m) {
          return vv(h, m);
        });
      }), hv)), p = gv(yt(yt(c, function(h) {
        return yt(s, function(m) {
          return vv(h, m);
        });
      }), hv));
      return {
        suggestion: l,
        score: f + p
      };
    }), ["score", "suggestion"]), 3);
  }), n = t.reduce(function(i, s) {
    return i[s.split(" ").sort().join(" ")] = !0, i;
  }, {});
  return function(i, s, l) {
    var c = i[s];
    if (!(!c || n[c])) {
      var f = c.split(" ").sort().join(" ");
      if (!n[f]) {
        var p = r(c);
        if (!p.some(function(h) {
          return h.score === 0;
        }))
          return new Error(["Invalid prop `" + s + "` of value `" + c + "` supplied to `" + l + "`.", `

Instead of \`` + c + "`, did you mean:", p.map(function(h) {
            return `
  - ` + h.suggestion;
          }).join(""), `
`].join(""));
      }
    }
  };
}, Ve = function(t) {
  return function(r, n, i) {
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to disallow, expected an instance of array.", " See `" + n + "` prop in `" + i + "`."].join(""));
    if (!(Ue(r[n]) || r[n] === !1)) {
      var s = t.reduce(function(l, c) {
        return !Ue(r[c]) && r[c] !== !1 ? [].concat(l, [c]) : l;
      }, []);
      if (s.length > 0)
        return new Error(["Prop `" + n + "` in `" + i + "` conflicts with props: `" + s.join("`, `") + "`.", "They cannot be defined together, choose one or the other."].join(" "));
    }
  };
}, Be = function(t) {
  return function(r, n, i) {
    for (var s = arguments.length, l = new Array(s > 3 ? s - 3 : 0), c = 3; c < s; c++)
      l[c - 3] = arguments[c];
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to every, expected an instance of array.", "See `" + n + "` prop in `" + i + "`."].join(" "));
    var f = [];
    return t.forEach(function(p) {
      if (typeof p != "function")
        throw new Error('every() argument "validators" should contain functions, found: ' + gD(p) + ".");
      var h = p.apply(void 0, [r, n, i].concat(l));
      h && f.push(h);
    }), f[0];
  };
}, bE = function(t, r) {
  return function(n, i, s) {
    for (var l = arguments.length, c = new Array(l > 3 ? l - 3 : 0), f = 3; f < l; f++)
      c[f - 3] = arguments[f];
    if (!xc(t))
      throw new Error(["Invalid argument supplied to givenProps, expected an object.", "See `" + i + "` prop in `" + s + "`."].join(" "));
    if (typeof r != "function")
      throw new Error(["Invalid argument supplied to givenProps, expected a function.", "See `" + i + "` prop in `" + s + "`."].join(" "));
    var p = Fr(t).every(function(v) {
      var w = t[v];
      return typeof w == "function" ? !w.apply(void 0, [n, v, s].concat(c)) : w === n[i];
    });
    if (p) {
      var h = r.apply(void 0, [n, i, s].concat(c));
      if (h) {
        var m = "{ " + Fr(lp(Fr(t), n)).map(function(v) {
          var w = n[v], O = w;
          return typeof w == "string" ? O = '"' + w + '"' : Array.isArray(w) ? O = "[" + w.join(", ") + "]" : On(w) && (O = "{...}"), v + ": " + O;
        }).join(", ") + " }";
        return h.message = "Given props " + m + ": " + h.message, h;
      }
    }
  };
}, Xn = function(t) {
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
}, Jl = function(t) {
  return function(r, n, i) {
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to some, expected an instance of array.", "See `" + n + "` prop in `" + i + "`."].join(" "));
    var s = r[n];
    if (!(Ue(s) || s === !1)) {
      var l = s.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(f) {
        return qk(f).replace("-", " ");
      }), c = Sf(l, t);
      if (c.length > 0)
        return new Error("`" + n + "` prop in `" + i + "` has invalid values: `" + c.join("`, `") + "`.");
    }
  };
}, me = function() {
  return Be([Ve(["children"]), d.node]).apply(void 0, arguments);
}, fe = function() {
  return Be([Ve(["children"]), d.oneOfType([d.func, d.node, d.object, d.arrayOf(d.oneOfType([d.node, d.object]))])]).apply(void 0, arguments);
}, da = function() {
  return Be([Ve(["children"]), d.arrayOf(fe)]).apply(void 0, arguments);
}, mD = d.shape({
  current: d.object
}), EE = d.oneOfType([d.func, mD]), cp = { exports: {} }, Lo = {}, Nd = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
var yv;
function wE() {
  return yv || (yv = 1, function(e) {
    (function() {
      var t = !!(typeof window < "u" && window.document && window.document.createElement), r = {
        canUseDOM: t,
        canUseWorkers: typeof Worker < "u",
        canUseEventListeners: t && !!(window.addEventListener || window.attachEvent),
        canUseViewport: t && !!window.screen
      };
      e.exports ? e.exports = r : window.ExecutionEnvironment = r;
    })();
  }(Nd)), Nd.exports;
}
var bv;
function vD() {
  if (bv)
    return Lo;
  bv = 1, Object.defineProperty(Lo, "__esModule", { value: !0 });
  var e = wE(), t = b;
  function r(B) {
    return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(P) {
      return typeof P;
    } : function(P) {
      return P && typeof Symbol == "function" && P.constructor === Symbol && P !== Symbol.prototype ? "symbol" : typeof P;
    })(B);
  }
  function n(B, P) {
    if (!(B instanceof P))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(B, P) {
    for (var $ = 0; $ < P.length; $++) {
      var I = P[$];
      I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(B, I.key, I);
    }
  }
  function s(B, P, $) {
    return P && i(B.prototype, P), $ && i(B, $), B;
  }
  function l(B, P, $) {
    return P in B ? Object.defineProperty(B, P, { value: $, enumerable: !0, configurable: !0, writable: !0 }) : B[P] = $, B;
  }
  function c(B, P) {
    if (typeof P != "function" && P !== null)
      throw new TypeError("Super expression must either be null or a function");
    B.prototype = Object.create(P && P.prototype, { constructor: { value: B, writable: !0, configurable: !0 } }), P && p(B, P);
  }
  function f(B) {
    return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(P) {
      return P.__proto__ || Object.getPrototypeOf(P);
    })(B);
  }
  function p(B, P) {
    return (p = Object.setPrototypeOf || function($, I) {
      return $.__proto__ = I, $;
    })(B, P);
  }
  function h(B) {
    if (B === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return B;
  }
  function m(B, P) {
    return !P || typeof P != "object" && typeof P != "function" ? h(B) : P;
  }
  var v = function() {
    function B(P) {
      n(this, B), l(this, "handlers", void 0), this.handlers = P.slice(0);
    }
    return s(B, [{ key: "addHandlers", value: function(P) {
      for (var $ = this.handlers.slice(0), I = P.length, U = 0; U < I; U += 1)
        $.push(P[U]);
      return new B($);
    } }, { key: "dispatchEvent", value: function(P, $) {
      var I = this.handlers.length - 1;
      if ($) {
        for (var U = I; U >= 0; U -= 1)
          this.handlers[U].called || (this.handlers[U].called = !0, this.handlers[U](P));
        for (var W = I; W >= 0; W -= 1)
          this.handlers[W].called = !1;
      } else
        (0, this.handlers[I])(P);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.length > 0;
    } }, { key: "removeHandlers", value: function(P) {
      for (var $ = [], I = this.handlers.length, U = 0; U < I; U += 1) {
        var W = this.handlers[U];
        P.indexOf(W) === -1 && $.push(W);
      }
      return new B($);
    } }]), B;
  }();
  function w(B) {
    var P = /* @__PURE__ */ new Map();
    return B.forEach(function($, I) {
      P.set(I, $);
    }), P;
  }
  function O(B) {
    return Array.isArray(B) ? B : [B];
  }
  var T = function(B) {
    return B !== null && r(B) === "object" && B.hasOwnProperty("current");
  };
  function _(B) {
    return B === "document" ? document : B === "window" ? window : T(B) ? B.current || document : B || document;
  }
  var x = function() {
    function B(P, $) {
      n(this, B), l(this, "handlerSets", void 0), l(this, "poolName", void 0), this.handlerSets = $, this.poolName = P;
    }
    return s(B, [{ key: "addHandlers", value: function(P, $) {
      var I = w(this.handlerSets);
      if (I.has(P)) {
        var U = I.get(P);
        I.set(P, U.addHandlers($));
      } else
        I.set(P, new v($));
      return new B(this.poolName, I);
    } }, { key: "dispatchEvent", value: function(P, $) {
      var I = this.handlerSets.get(P), U = this.poolName === "default";
      I && I.dispatchEvent($, U);
    } }, { key: "hasHandlers", value: function(P) {
      if (!P)
        return this.handlerSets.size > 0;
      var $ = this.handlerSets.get(P);
      return !!$ && $.hasHandlers();
    } }, { key: "removeHandlers", value: function(P, $) {
      var I = w(this.handlerSets);
      if (!I.has(P))
        return new B(this.poolName, I);
      var U = I.get(P).removeHandlers($);
      return U.hasHandlers() ? I.set(P, U) : I.delete(P), new B(this.poolName, I);
    } }]), B;
  }();
  l(x, "createByType", function(B, P, $) {
    var I = /* @__PURE__ */ new Map();
    return I.set(P, new v($)), new x(B, I);
  });
  var D = function() {
    function B(P) {
      var $ = this;
      n(this, B), l(this, "handlers", /* @__PURE__ */ new Map()), l(this, "pools", /* @__PURE__ */ new Map()), l(this, "target", void 0), l(this, "createEmitter", function(I) {
        return function(U) {
          $.pools.forEach(function(W) {
            W.dispatchEvent(I, U);
          });
        };
      }), this.target = P;
    }
    return s(B, [{ key: "addHandlers", value: function(P, $, I) {
      if (this.pools.has(P)) {
        var U = this.pools.get(P);
        this.pools.set(P, U.addHandlers($, I));
      } else
        this.pools.set(P, x.createByType(P, $, I));
      this.handlers.has($) || this.addTargetHandler($);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.size > 0;
    } }, { key: "removeHandlers", value: function(P, $, I) {
      if (this.pools.has(P)) {
        var U = this.pools.get(P).removeHandlers($, I);
        U.hasHandlers() ? this.pools.set(P, U) : this.pools.delete(P);
        var W = !1;
        this.pools.forEach(function(X) {
          return W = W || X.hasHandlers($);
        }), W || this.removeTargetHandler($);
      }
    } }, { key: "addTargetHandler", value: function(P) {
      var $ = this.createEmitter(P);
      this.handlers.set(P, $), this.target.addEventListener(P, $, !0);
    } }, { key: "removeTargetHandler", value: function(P) {
      this.handlers.has(P) && (this.target.removeEventListener(P, this.handlers.get(P), !0), this.handlers.delete(P));
    } }]), B;
  }(), k = function() {
    function B() {
      var P = this;
      n(this, B), l(this, "targets", /* @__PURE__ */ new Map()), l(this, "getTarget", function($) {
        var I = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], U = _($);
        if (P.targets.has(U))
          return P.targets.get(U);
        if (!I)
          return null;
        var W = new D(U);
        return P.targets.set(U, W), W;
      }), l(this, "removeTarget", function($) {
        P.targets.delete(_($));
      });
    }
    return s(B, [{ key: "sub", value: function(P, $) {
      var I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var U = I.target, W = U === void 0 ? document : U, X = I.pool, V = X === void 0 ? "default" : X;
        this.getTarget(W).addHandlers(V, P, O($));
      }
    } }, { key: "unsub", value: function(P, $) {
      var I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var U = I.target, W = U === void 0 ? document : U, X = I.pool, V = X === void 0 ? "default" : X, ce = this.getTarget(W, !1);
        ce && (ce.removeHandlers(V, P, O($)), ce.hasHandlers() || this.removeTarget(W));
      }
    } }]), B;
  }(), z = new k(), N = function(B) {
    function P() {
      return n(this, P), m(this, f(P).apply(this, arguments));
    }
    return c(P, t.PureComponent), s(P, [{ key: "componentDidMount", value: function() {
      this.subscribe(this.props);
    } }, { key: "componentDidUpdate", value: function($) {
      this.unsubscribe($), this.subscribe(this.props);
    } }, { key: "componentWillUnmount", value: function() {
      this.unsubscribe(this.props);
    } }, { key: "subscribe", value: function($) {
      var I = $.name, U = $.on, W = $.pool, X = $.target;
      z.sub(I, U, { pool: W, target: X });
    } }, { key: "unsubscribe", value: function($) {
      var I = $.name, U = $.on, W = $.pool, X = $.target;
      z.unsub(I, U, { pool: W, target: X });
    } }, { key: "render", value: function() {
      return null;
    } }]), P;
  }();
  return l(N, "defaultProps", { pool: "default", target: "document" }), N.propTypes = {}, Lo.instance = z, Lo.default = N, Lo;
}
var Mo = {}, Ev;
function yD() {
  if (Ev)
    return Mo;
  Ev = 1, Object.defineProperty(Mo, "__esModule", { value: !0 });
  var e = wE(), t = qb, r = b;
  function n(P) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? n = function($) {
      return typeof $;
    } : n = function($) {
      return $ && typeof Symbol == "function" && $.constructor === Symbol && $ !== Symbol.prototype ? "symbol" : typeof $;
    }, n(P);
  }
  function i(P, $) {
    if (!(P instanceof $))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(P, $) {
    for (var I = 0; I < $.length; I++) {
      var U = $[I];
      U.enumerable = U.enumerable || !1, U.configurable = !0, "value" in U && (U.writable = !0), Object.defineProperty(P, U.key, U);
    }
  }
  function l(P, $, I) {
    return $ && s(P.prototype, $), I && s(P, I), P;
  }
  function c(P, $, I) {
    return $ in P ? Object.defineProperty(P, $, {
      value: I,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : P[$] = I, P;
  }
  function f(P, $) {
    if (typeof $ != "function" && $ !== null)
      throw new TypeError("Super expression must either be null or a function");
    P.prototype = Object.create($ && $.prototype, {
      constructor: {
        value: P,
        writable: !0,
        configurable: !0
      }
    }), $ && h(P, $);
  }
  function p(P) {
    return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(I) {
      return I.__proto__ || Object.getPrototypeOf(I);
    }, p(P);
  }
  function h(P, $) {
    return h = Object.setPrototypeOf || function(U, W) {
      return U.__proto__ = W, U;
    }, h(P, $);
  }
  function m(P) {
    if (P === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return P;
  }
  function v(P, $) {
    return $ && (typeof $ == "object" || typeof $ == "function") ? $ : m(P);
  }
  var w = /* @__PURE__ */ function() {
    function P($) {
      i(this, P), c(this, "handlers", void 0), this.handlers = $.slice(0);
    }
    return l(P, [{
      key: "addHandlers",
      value: function(I) {
        for (var U = this.handlers.slice(0), W = I.length, X = 0; X < W; X += 1)
          U.push(I[X]);
        return new P(U);
      }
      /**
       * @see https://jsperf.com/suir-eventset-dispatchsingle
       * @see https://jsperf.com/suir-eventset-dispatchmultiple2
       */
    }, {
      key: "dispatchEvent",
      value: function(I, U) {
        var W = this.handlers.length - 1;
        if (!U) {
          var X = this.handlers[W];
          X(I);
          return;
        }
        for (var V = W; V >= 0; V -= 1)
          this.handlers[V].called || (this.handlers[V].called = !0, this.handlers[V](I));
        for (var ce = W; ce >= 0; ce -= 1)
          this.handlers[ce].called = !1;
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
        for (var U = [], W = this.handlers.length, X = 0; X < W; X += 1) {
          var V = this.handlers[X];
          I.indexOf(V) === -1 && U.push(V);
        }
        return new P(U);
      }
    }]), P;
  }();
  function O(P) {
    var $ = /* @__PURE__ */ new Map();
    return P.forEach(function(I, U) {
      $.set(U, I);
    }), $;
  }
  function T(P) {
    return Array.isArray(P) ? P : [P];
  }
  var _ = function($) {
    return $ !== null && n($) === "object" && $.hasOwnProperty("current");
  };
  function x(P) {
    return P === "document" ? document : P === "window" ? window : _(P) ? P.current || document : P || document;
  }
  var D = /* @__PURE__ */ function() {
    function P($, I) {
      i(this, P), c(this, "handlerSets", void 0), c(this, "poolName", void 0), this.handlerSets = I, this.poolName = $;
    }
    return l(P, [{
      key: "addHandlers",
      value: function(I, U) {
        var W = O(this.handlerSets);
        if (W.has(I)) {
          var X = W.get(I);
          W.set(I, X.addHandlers(U));
        } else
          W.set(I, new w(U));
        return new P(this.poolName, W);
      }
    }, {
      key: "dispatchEvent",
      value: function(I, U) {
        var W = this.handlerSets.get(I), X = this.poolName === "default";
        W && W.dispatchEvent(U, X);
      }
    }, {
      key: "hasHandlers",
      value: function(I) {
        if (!I)
          return this.handlerSets.size > 0;
        var U = this.handlerSets.get(I);
        return U ? U.hasHandlers() : !1;
      }
    }, {
      key: "removeHandlers",
      value: function(I, U) {
        var W = O(this.handlerSets);
        if (!W.has(I))
          return new P(this.poolName, W);
        var X = W.get(I), V = X.removeHandlers(U);
        return V.hasHandlers() ? W.set(I, V) : W.delete(I), new P(this.poolName, W);
      }
    }]), P;
  }();
  c(D, "createByType", function(P, $, I) {
    var U = /* @__PURE__ */ new Map();
    return U.set($, new w(I)), new D(P, U);
  });
  var k = /* @__PURE__ */ function() {
    function P($) {
      var I = this;
      i(this, P), c(this, "handlers", /* @__PURE__ */ new Map()), c(this, "pools", /* @__PURE__ */ new Map()), c(this, "target", void 0), c(this, "createEmitter", function(U) {
        return function(W) {
          I.pools.forEach(function(X) {
            X.dispatchEvent(U, W);
          });
        };
      }), this.target = $;
    }
    return l(P, [{
      key: "addHandlers",
      value: function(I, U, W) {
        if (this.pools.has(I)) {
          var X = this.pools.get(I);
          this.pools.set(I, X.addHandlers(U, W));
        } else
          this.pools.set(I, D.createByType(I, U, W));
        this.handlers.has(U) || this.addTargetHandler(U);
      }
    }, {
      key: "hasHandlers",
      value: function() {
        return this.handlers.size > 0;
      }
    }, {
      key: "removeHandlers",
      value: function(I, U, W) {
        if (this.pools.has(I)) {
          var X = this.pools.get(I), V = X.removeHandlers(U, W);
          V.hasHandlers() ? this.pools.set(I, V) : this.pools.delete(I);
          var ce = !1;
          this.pools.forEach(function(_e) {
            return ce = ce || _e.hasHandlers(U);
          }), ce || this.removeTargetHandler(U);
        }
      }
    }, {
      key: "addTargetHandler",
      value: function(I) {
        var U = this.createEmitter(I);
        this.handlers.set(I, U), this.target.addEventListener(I, U, !0);
      }
    }, {
      key: "removeTargetHandler",
      value: function(I) {
        this.handlers.has(I) && (this.target.removeEventListener(I, this.handlers.get(I), !0), this.handlers.delete(I));
      }
    }]), P;
  }(), z = /* @__PURE__ */ function() {
    function P() {
      var $ = this;
      i(this, P), c(this, "targets", /* @__PURE__ */ new Map()), c(this, "getTarget", function(I) {
        var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, W = x(I);
        if ($.targets.has(W))
          return $.targets.get(W);
        if (!U)
          return null;
        var X = new k(W);
        return $.targets.set(W, X), X;
      }), c(this, "removeTarget", function(I) {
        $.targets.delete(x(I));
      });
    }
    return l(P, [{
      key: "sub",
      value: function(I, U) {
        var W = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var X = W.target, V = X === void 0 ? document : X, ce = W.pool, _e = ce === void 0 ? "default" : ce, Oe = this.getTarget(V);
          Oe.addHandlers(_e, I, T(U));
        }
      }
    }, {
      key: "unsub",
      value: function(I, U) {
        var W = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var X = W.target, V = X === void 0 ? document : X, ce = W.pool, _e = ce === void 0 ? "default" : ce, Oe = this.getTarget(V, !1);
          Oe && (Oe.removeHandlers(_e, I, T(U)), Oe.hasHandlers() || this.removeTarget(V));
        }
      }
    }]), P;
  }(), N = new z(), B = /* @__PURE__ */ function(P) {
    f($, P);
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
      value: function(U) {
        this.unsubscribe(U), this.subscribe(this.props);
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.unsubscribe(this.props);
      }
    }, {
      key: "subscribe",
      value: function(U) {
        var W = U.name, X = U.on, V = U.pool, ce = U.target;
        N.sub(W, X, {
          pool: V,
          target: ce
        });
      }
    }, {
      key: "unsubscribe",
      value: function(U) {
        var W = U.name, X = U.on, V = U.pool, ce = U.target;
        N.unsub(W, X, {
          pool: V,
          target: ce
        });
      }
    }, {
      key: "render",
      value: function() {
        return null;
      }
    }]), $;
  }(r.PureComponent);
  return c(B, "defaultProps", {
    pool: "default",
    target: "document"
  }), B.propTypes = {
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
  }, Mo.instance = N, Mo.default = B, Mo;
}
var Zl;
process.env.NODE_ENV === "production" ? Zl = vD() : Zl = yD();
cp.exports = Zl.default;
var $l = cp.exports.instance = Zl.instance, bD = cp.exports;
const Yn = /* @__PURE__ */ Rt(bD);
function SE() {
}
var ED = 1 / 0, wD = xi && 1 / ap(new xi([, -0]))[1] == ED ? function(e) {
  return new xi(e);
} : SE;
const SD = wD;
var _D = 200;
function _E(e, t, r) {
  var n = -1, i = ip, s = e.length, l = !0, c = [], f = c;
  if (r)
    l = !1, i = op;
  else if (s >= _D) {
    var p = t ? null : SD(e);
    if (p)
      return ap(p);
    l = !1, i = Zo, f = new qa();
  } else
    f = t ? [] : c;
  e:
    for (; ++n < s; ) {
      var h = e[n], m = t ? t(h) : h;
      if (h = r || h !== 0 ? h : 0, l && m === m) {
        for (var v = f.length; v--; )
          if (f[v] === m)
            continue e;
        t && f.push(m), c.push(h);
      } else
        i(f, m, r) || (f !== c && f.push(m), c.push(h));
    }
  return c;
}
function Ac(e) {
  return e && e.length ? _E(e) : [];
}
var OD = "[object Number]";
function TD(e) {
  return typeof e == "number" || Ur(e) && nn(e) == OD;
}
var PD = "[object String]";
function up(e) {
  return typeof e == "string" || !_t(e) && Ur(e) && nn(e) == PD;
}
var xD = "[object Boolean]";
function AD(e) {
  return e === !0 || e === !1 || Ur(e) && nn(e) == xD;
}
function OE(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = OE(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function ee() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = OE(e)) && (n && (n += " "), n += t);
  return n;
}
var wv = {};
function Ai(e, t, r, n) {
  if (n === void 0 && (n = {}), typeof e != "function" && typeof e != "string")
    throw new Error("createShorthand() Component must be a string or function.");
  if (Ue(r) || AD(r))
    return null;
  var i = up(r), s = TD(r), l = Ni(r), c = /* @__PURE__ */ wn.isValidElement(r), f = xc(r), p = i || s || _t(r);
  if (!l && !c && !f && !p)
    return process.env.NODE_ENV !== "production" && console.error(["Shorthand value must be a string|number|array|object|ReactElement|function.", " Use null|undefined|boolean for none", " Received " + typeof r + "."].join("")), null;
  var h = n, m = h.defaultProps, v = m === void 0 ? {} : m, w = c && r.props || f && r || p && t(r), O = n, T = O.overrideProps, _ = T === void 0 ? {} : T;
  _ = Ni(_) ? _(F({}, v, w)) : _;
  var x = F({}, v, w, _);
  if (v.className || _.className || w.className) {
    var D = ee(v.className, _.className, w.className);
    x.className = Ac(D.split(" ")).join(" ");
  }
  if ((v.style || _.style || w.style) && (x.style = F({}, v.style, w.style, _.style)), Ue(x.key)) {
    var k = x.childKey, z = n, N = z.autoGenerateKey, B = N === void 0 ? !0 : N;
    Ue(k) ? B && (i || s) && (x.key = r) : (x.key = typeof k == "function" ? k(x) : k, delete x.childKey);
  }
  if (c)
    return /* @__PURE__ */ wn.cloneElement(r, x);
  if (typeof x.children == "function")
    return x.children(e, F({}, x, {
      children: void 0
    }));
  if (p || f)
    return /* @__PURE__ */ wn.createElement(e, x);
  if (l)
    return process.env.NODE_ENV !== "production" && (wv[e] || (wv[e] = !0, console.warn('Warning: There is a deprecated shorthand function usage for "' + e + '". It is deprecated and will be removed in v3 release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4029'))), r(e, x, x.children);
}
function qe(e, t) {
  if (typeof e != "function" && typeof e != "string")
    throw new Error("createShorthandFactory() Component must be a string or function.");
  return function(r, n) {
    return Ai(e, t, r, n);
  };
}
var CD = /* @__PURE__ */ qe("input", function(e) {
  return {
    type: e
  };
}), Pf = /* @__PURE__ */ qe("label", function(e) {
  return {
    children: e
  };
}), $D = function(t, r) {
  var n = t.handledProps, i = n === void 0 ? [] : n;
  return Object.keys(r).reduce(function(s, l) {
    return l === "childKey" || i.indexOf(l) === -1 && (s[l] = r[l]), s;
  }, {});
};
const Z = $D;
function ae(e, t, r) {
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
function RD(e, t) {
  return Sn(t, function(r) {
    return e[r];
  });
}
function TE(e) {
  return e == null ? [] : RD(e, Fr(e));
}
var ND = Math.max;
function ro(e, t, r, n) {
  e = Fn(e) ? e : TE(e), r = r && !n ? Cs(r) : 0;
  var i = e.length;
  return r < 0 && (r = ND(i + r, 0)), up(e) ? r <= i && e.indexOf(t, r) > -1 : !!i && Pc(e, t, r) > -1;
}
var PE = [
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
], ID = [
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
], kD = [].concat(PE, ID), DD = ["alt", "height", "src", "srcSet", "width", "loading"], dp = function(t, r) {
  r === void 0 && (r = {});
  var n = r, i = n.htmlProps, s = i === void 0 ? kD : i, l = n.includeAria, c = l === void 0 ? !0 : l, f = {}, p = {};
  return aE(t, function(h, m) {
    var v = c && (/^aria-.*$/.test(m) || m === "role"), w = ro(s, m) || v ? f : p;
    w[m] = h;
  }), [f, p];
}, LD = typeof document == "object" && document !== null, MD = typeof window == "object" && window !== null && window.self === window, FD = function e() {
  return Ue(e.override) ? LD && MD : e.override;
};
const Da = FD;
var BD = Math.max, UD = Math.min;
function zD(e, t, r) {
  return e >= UD(t, r) && e < BD(t, r);
}
function Sv(e, t, r) {
  return t = Pi(t), r === void 0 ? (r = t, t = 0) : r = Pi(r), e = Hb(e), zD(e, t, r);
}
function qD(e) {
  return e && e.length ? e[0] : void 0;
}
var jD = function(t, r) {
  if (Wo([r, t], Ue))
    return !1;
  if (r.target && (ne(r.target, "setAttribute", "data-suir-click-target", !0), document.querySelector("[data-suir-click-target=true]")))
    return ne(r.target, "removeAttribute", "data-suir-click-target"), t.contains(r.target);
  var n = r.clientX, i = r.clientY;
  if (Wo([n, i], Ue))
    return !1;
  var s = t.getClientRects();
  if (!t.offsetWidth || !t.offsetHeight || !s || !s.length)
    return !1;
  var l = qD(s), c = l.top, f = l.bottom, p = l.left, h = l.right;
  return Wo([c, f, p, h], Ue) ? !1 : Sv(i, c, f + 1e-3) && Sv(n, p, h + 1e-3);
};
const La = jD;
var xE = function(t) {
  return {
    active: !1,
    type: "ellipsisItem",
    value: t
  };
}, HD = function() {
  return {
    active: !1,
    type: "firstItem",
    value: 1
  };
}, VD = function(t) {
  return {
    active: !1,
    type: "prevItem",
    value: Math.max(1, t - 1)
  };
}, WD = function(t) {
  return function(r) {
    return {
      active: t === r,
      type: "pageItem",
      value: r
    };
  };
}, GD = function(t, r) {
  return {
    active: !1,
    type: "nextItem",
    value: Math.min(t + 1, r)
  };
}, QD = function(t) {
  return {
    active: !1,
    type: "lastItem",
    value: t
  };
}, KD = Math.ceil, YD = Math.max;
function XD(e, t, r, n) {
  for (var i = -1, s = YD(KD((t - e) / (r || 1)), 0), l = Array(s); s--; )
    l[n ? s : ++i] = e, e += r;
  return l;
}
function JD(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && ts(t, r, n) && (r = n = void 0), t = Pi(t), r === void 0 ? (r = t, t = 0) : r = Pi(r), n = n === void 0 ? t < r ? 1 : -1 : Pi(n), XD(t, r, n, e);
  };
}
var ZD = JD();
const e2 = ZD;
var t2 = function(t, r, n) {
  var i = r - 1, s = i !== t + 1, l = s ? xE : n;
  return l(i);
}, r2 = function(t, r, n) {
  var i = t + 1, s = i !== r - 1, l = s ? xE : n;
  return l(i);
}, Ml = function(t, r, n) {
  return yt(e2(t, r + 1), n);
}, n2 = function(t, r) {
  var n = t.activePage, i = t.boundaryRange, s = t.hideEllipsis, l = t.siblingRange, c = t.totalPages, f = s ? 0 : 1, p = i, h = Ml(1, p, r), m = c + 1 - i, v = Ml(m, c, r), w = Math.min(Math.max(n - l, p + f + 1), m - f - 2 * l - 1), O = w + 2 * l, T = Ml(w, O, r);
  return [].concat(h, [!s && t2(p, w, r)], T, [!s && r2(O, m, r)], v).filter(Boolean);
}, a2 = function(t) {
  var r = t.boundaryRange, n = t.hideEllipsis, i = t.siblingRange, s = t.totalPages, l = 2 * r, c = n ? 0 : 2, f = 2 * i;
  return 1 + c + f + l >= s;
}, i2 = function(t) {
  var r = t.activePage, n = t.boundaryRange, i = t.hideEllipsis, s = t.siblingRange, l = t.totalPages;
  return {
    activePage: +r,
    boundaryRange: +n,
    hideEllipsis: !!i,
    siblingRange: +s,
    totalPages: +l
  };
}, o2 = function(t) {
  var r = i2(t), n = r.activePage, i = r.totalPages, s = WD(n), l = a2(r) ? Ml(1, i, s) : n2(r, s);
  return [HD(), VD(n)].concat(l, [GD(n, i), QD(i)]);
};
const s2 = o2;
var mr = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"], fa = ["left", "right"], Gt = ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"], vr = ["left", "center", "right", "justified"], zr = ["bottom", "middle", "top"], AE = ["mobile", "tablet", "computer", "large screen", "widescreen"], Jt = [].concat(Fr(Ll), Fr(Ll).map(Number), TE(Ll)), l2 = ["american sign language interpreting", "assistive listening systems", "audio description", "blind", "braille", "closed captioning", "closed captioning outline", "deaf", "low vision", "phone volume", "question circle", "question circle outline", "sign language", "tty", "universal access", "wheelchair"], c2 = ["angle double down", "angle double left", "angle double right", "angle double up", "angle down", "angle left", "angle right", "angle up", "arrow alternate circle down", "arrow alternate circle down outline", "arrow alternate circle left", "arrow alternate circle left outline", "arrow alternate circle right", "arrow alternate circle right outline", "arrow alternate circle up", "arrow alternate circle up outline", "arrow circle down", "arrow circle left", "arrow circle right", "arrow circle up", "arrow down", "arrow left", "arrow right", "arrow up", "arrows alternate", "arrows alternate horizontal", "arrows alternate vertical", "caret down", "caret left", "caret right", "caret square down", "caret square down outline", "caret square left", "caret square left outline", "caret square right", "caret square right outline", "caret square up", "caret square up outline", "caret up", "cart arrow down", "chart line", "chevron circle down", "chevron circle left", "chevron circle right", "chevron circle up", "chevron down", "chevron left", "chevron right", "chevron up", "cloud download", "cloud upload", "download", "exchange", "expand arrows alternate", "external alternate", "external square alternate", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "history", "level down alternate", "level up alternate", "location arrow", "long arrow alternate down", "long arrow alternate left", "long arrow alternate right", "long arrow alternate up", "mouse pointer", "play", "random", "recycle", "redo", "redo alternate", "reply", "reply all", "retweet", "share", "share square", "share square outline", "sign-in", "sign-out", "sign-in alternate", "sign-out alternate", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "sync", "sync alternate", "text height", "text width", "undo", "undo alternate", "upload", "zoom-in", "zoom-out"], u2 = ["audio description", "backward", "circle", "circle outline", "closed captioning", "closed captioning outline", "compress", "eject", "expand", "expand arrows alternate", "fast backward", "fast forward", "file audio", "file audio outline", "file video", "file video outline", "film", "forward", "headphones", "microphone", "microphone slash", "music", "pause", "pause circle", "pause circle outline", "phone volume", "play", "play circle", "play circle outline", "podcast", "random", "redo", "redo alternate", "rss", "rss square", "step backward", "step forward", "stop", "stop circle", "stop circle outline", "sync", "sync alternate", "undo", "undo alternate", "video", "volume down", "volume off", "volume up"], d2 = ["address book", "address book outline", "address card", "address card outline", "archive", "balance scale", "birthday cake", "book", "briefcase", "building", "building outline", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "certificate", "chart area", "chart bar", "chart bar outline", "chart line", "chart pie", "clipboard", "clipboard outline", "coffee", "columns", "compass", "compass outline", "copy", "copy outline", "copyright", "copyright outline", "cut", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "eraser", "fax", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "globe", "industry", "paperclip", "paste", "pen square", "pencil alternate", "percent", "phone", "phone square", "phone volume", "registered", "registered outline", "save", "save outline", "sitemap", "sticky note", "sticky note outline", "suitcase", "table", "tag", "tags", "tasks", "thumbtack", "trademark"], f2 = ["chess", "chess bishop", "chess board", "chess king", "chess knight", "chess pawn", "chess queen", "chess rook", "square full"], p2 = ["archive", "barcode", "bath", "bug", "code", "code branch", "coffee", "file", "file outline", "file alternate", "file alternate outline", "file code", "file code outline", "filter", "fire extinguisher", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "microchip", "qrcode", "shield alternate", "sitemap", "terminal", "user secret", "window close", "window close outline", "window maximize", "window maximize outline", "window minimize", "window minimize outline", "window restore", "window restore outline"], h2 = ["address book", "address book outline", "address card", "address card outline", "american sign language interpreting", "assistive listening systems", "at", "bell", "bell outline", "bell slash", "bell slash outline", "bullhorn", "comment", "comment outline", "comment alternate", "comment alternate outline", "comments", "comments outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "fax", "inbox", "language", "microphone", "microphone slash", "mobile", "mobile alternate", "paper plane", "paper plane outline", "phone", "phone square", "phone volume", "rss", "rss square", "tty", "wifi"], g2 = ["desktop", "download", "hdd", "hdd outline", "headphones", "keyboard", "keyboard outline", "laptop", "microchip", "mobile", "mobile alternate", "plug", "power off", "print", "save", "save outline", "server", "tablet", "tablet alternate", "tv", "upload"], m2 = ["dollar sign", "euro sign", "lira sign", "money bill alternate", "money bill alternate outline", "pound sign", "ruble sign", "rupee sign", "shekel sign", "won sign", "yen sign"], v2 = ["bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "clock", "clock outline", "hourglass", "hourglass outline", "hourglass end", "hourglass half", "hourglass start", "stopwatch"], y2 = ["adjust", "clone", "clone outline", "copy", "copy outline", "crop", "crosshairs", "cut", "edit", "edit outline", "eraser", "eye", "eye dropper", "eye slash", "eye slash outline", "object group", "object group outline", "object ungroup", "object ungroup outline", "paint brush", "paste", "pencil alternate", "save", "save outline", "tint"], b2 = ["align center", "align justify", "align left", "align right", "bold", "clipboard", "clipboard outline", "clone", "clone outline", "columns", "copy", "copy outline", "cut", "edit", "edit outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "font", "heading", "i cursor", "indent", "italic", "linkify", "list", "list alternate", "list alternate outline", "list ol", "list ul", "outdent", "paper plane", "paper plane outline", "paperclip", "paragraph", "paste", "pencil alternate", "print", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "share", "strikethrough", "subscript", "superscript", "sync", "sync alternate", "table", "tasks", "text height", "text width", "th", "th large", "th list", "trash", "trash alternate", "trash alternate outline", "underline", "undo", "undo alternate", "unlink"], E2 = ["archive", "clone", "clone outline", "copy", "copy outline", "cut", "file", "file outline", "file alternate", "file alternate outline", "file archive", "file archive outline", "file audio", "file audio outline", "file code", "file code outline", "file excel", "file excel outline", "file image", "file image outline", "file pdf", "file pdf outline", "file powerpoint", "file powerpoint outline", "file video", "file video outline", "file word", "file word outline", "folder", "folder outline", "folder open", "folder open outline", "paste", "save", "save outline", "sticky note", "sticky note outline"], w2 = ["genderless", "mars", "mars double", "mars stroke", "mars stroke horizontal", "mars stroke vertical", "mercury", "neuter", "transgender", "transgender alternate", "venus", "venus double", "venus mars"], S2 = ["hand lizard", "hand lizard outline", "hand paper", "hand paper outline", "hand peace", "hand peace outline", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "hand rock", "hand rock outline", "hand scissors", "hand scissors outline", "hand spock", "hand spock outline", "handshake", "handshake outline", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline"], _2 = ["ambulance", "h square", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "medkit", "plus square", "plus square outline", "stethoscope", "user md", "wheelchair"], O2 = ["adjust", "bolt", "camera", "camera retro", "clone", "clone outline", "compress", "expand", "eye", "eye dropper", "eye slash", "eye slash outline", "file image", "file image outline", "film", "id badge", "id badge outline", "id card", "id card outline", "image", "image outline", "images", "images outline", "sliders horizontal", "tint"], T2 = ["ban", "barcode", "bars", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bug", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "certificate", "check", "check circle", "check circle outline", "check square", "check square outline", "circle", "circle outline", "clipboard", "clipboard outline", "clone", "clone outline", "cloud", "cloud download", "cloud upload", "coffee", "cog", "cogs", "copy", "copy outline", "cut", "database", "dot circle", "dot circle outline", "download", "edit", "edit outline", "ellipsis horizontal", "ellipsis vertical", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "exclamation", "exclamation circle", "exclamation triangle", "external alternate", "external square alternate", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "filter", "flag", "flag outline", "flag checkered", "folder", "folder outline", "folder open", "folder open outline", "frown", "frown outline", "hashtag", "heart", "heart outline", "history", "home", "i cursor", "info", "info circle", "language", "magic", "meh", "meh outline", "microphone", "microphone slash", "minus", "minus circle", "minus square", "minus square outline", "paste", "pencil alternate", "plus", "plus circle", "plus square", "plus square outline", "qrcode", "question", "question circle", "question circle outline", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "rss", "rss square", "save", "save outline", "search", "search minus", "search plus", "share", "share alternate", "share alternate square", "share square", "share square outline", "shield alternate", "sign-in", "sign-out", "signal", "sitemap", "sliders horizontal", "smile", "smile outline", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "star", "star outline", "star half", "star half outline", "sync", "sync alternate", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "times", "times circle", "times circle outline", "toggle off", "toggle on", "trash", "trash alternate", "trash alternate outline", "trophy", "undo", "undo alternate", "upload", "user", "user outline", "user circle", "user circle outline", "wifi"], P2 = ["box", "boxes", "clipboard check", "clipboard list", "dolly", "dolly flatbed", "pallet", "shipping fast", "truck", "warehouse"], x2 = ["ambulance", "anchor", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bicycle", "binoculars", "birthday cake", "blind", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "building", "building outline", "car", "coffee", "crosshairs", "dollar sign", "eye", "eye slash", "eye slash outline", "fighter jet", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "gamepad", "gavel", "gift", "glass martini", "globe", "graduation cap", "h square", "heart", "heart outline", "heartbeat", "home", "hospital", "hospital outline", "image", "image outline", "images", "images outline", "industry", "info", "info circle", "key", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "location arrow", "low vision", "magnet", "male", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "money bill alternate", "money bill alternate outline", "motorcycle", "music", "newspaper", "newspaper outline", "paw", "phone", "phone square", "phone volume", "plane", "plug", "plus", "plus square", "plus square outline", "print", "recycle", "road", "rocket", "search", "search minus", "search plus", "ship", "shopping bag", "shopping basket", "shopping cart", "shower", "street view", "subway", "suitcase", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "tint", "train", "tree", "trophy", "truck", "tty", "umbrella", "university", "utensil spoon", "utensils", "wheelchair", "wifi", "wrench"], A2 = ["ambulance", "band aid", "dna", "first aid", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "hospital symbol", "pills", "plus", "stethoscope", "syringe", "thermometer", "user md", "weight"], C2 = ["ambulance", "anchor", "archive", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bicycle", "binoculars", "birthday cake", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "bug", "building", "building outline", "bullhorn", "bullseye", "bus", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "camera", "camera retro", "car", "clipboard", "clipboard outline", "cloud", "coffee", "cog", "cogs", "compass", "compass outline", "copy", "copy outline", "cube", "cubes", "cut", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "eye", "eye dropper", "fax", "fighter jet", "file", "file outline", "file alternate", "file alternate outline", "film", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "futbol", "futbol outline", "gamepad", "gavel", "gem", "gem outline", "gift", "glass martini", "globe", "graduation cap", "hdd", "hdd outline", "headphones", "heart", "heart outline", "home", "hospital", "hospital outline", "hourglass", "hourglass outline", "image", "image outline", "images", "images outline", "industry", "key", "keyboard", "keyboard outline", "laptop", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "lock", "lock open", "magic", "magnet", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "microchip", "microphone", "mobile", "mobile alternate", "money bill alternate", "money bill alternate outline", "moon", "moon outline", "motorcycle", "newspaper", "newspaper outline", "paint brush", "paper plane", "paper plane outline", "paperclip", "paste", "paw", "pencil alternate", "phone", "plane", "plug", "print", "puzzle piece", "road", "rocket", "save", "save outline", "search", "shield alternate", "shopping bag", "shopping basket", "shopping cart", "shower", "snowflake", "snowflake outline", "space shuttle", "star", "star outline", "sticky note", "sticky note outline", "stopwatch", "subway", "suitcase", "sun", "sun outline", "tablet", "tablet alternate", "tachometer alternate", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "train", "trash", "trash alternate", "trash alternate outline", "tree", "trophy", "truck", "tv", "umbrella", "university", "unlock", "unlock alternate", "utensil spoon", "utensils", "wheelchair", "wrench"], $2 = ["bell", "bell outline", "bookmark", "bookmark outline", "bullhorn", "camera", "camera retro", "cart arrow down", "cart plus", "certificate", "credit card", "credit card outline", "gem", "gem outline", "gift", "handshake", "handshake outline", "heart", "heart outline", "key", "shopping bag", "shopping basket", "shopping cart", "star", "star outline", "tag", "tags", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "trophy"], R2 = ["bookmark", "bookmark outline", "calendar", "calendar outline", "certificate", "circle", "circle outline", "cloud", "comment", "comment outline", "file", "file outline", "folder", "folder outline", "heart", "heart outline", "map marker", "play", "square", "square outline", "star", "star outline"], N2 = ["asterisk", "certificate", "circle notch", "cog", "compass", "compass outline", "crosshairs", "life ring", "life ring outline", "snowflake", "snowflake outline", "spinner", "sun", "sun outline", "sync"], I2 = ["baseball ball", "basketball ball", "bowling ball", "football ball", "futbol", "futbol outline", "golf ball", "hockey puck", "quidditch", "table tennis", "volleyball ball"], k2 = ["ban", "battery empty", "battery full", "battery half", "battery quarter", "battery three quarters", "bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "cart arrow down", "cart plus", "exclamation", "exclamation circle", "exclamation triangle", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "info", "info circle", "lock", "lock open", "minus", "minus circle", "minus square", "minus square outline", "plus", "plus circle", "plus square", "plus square outline", "question", "question circle", "question circle outline", "shield alternate", "shopping cart", "sign in alternate", "sign out alternate", "thermometer empty", "thermometer full", "thermometer half", "thermometer quarter", "thermometer three quarters", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "toggle off", "toggle on", "unlock", "unlock alternate"], D2 = ["address book", "address book outline", "address card", "address card outline", "bed", "blind", "child", "female", "frown", "frown outline", "id badge", "id badge outline", "id card", "id card outline", "male", "meh", "meh outline", "power off", "smile", "smile outline", "street view", "user", "user outline", "user circle", "user circle outline", "user md", "user plus", "user secret", "user times", "users", "wheelchair"], L2 = ["ambulance", "bicycle", "bus", "car", "fighter jet", "motorcycle", "paper plane", "paper plane outline", "plane", "rocket", "ship", "shopping cart", "space shuttle", "subway", "taxi", "train", "truck", "wheelchair"], M2 = ["archive", "book", "bookmark", "bookmark outline", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "newspaper", "newspaper outline", "paper plane", "paper plane outline", "paperclip", "paragraph", "pen square", "pencil alternate", "quote left", "quote right", "sticky note", "sticky note outline", "thumbtack"], F2 = ["500px", "accessible", "accusoft", "adn", "adversal", "affiliatetheme", "algolia", "amazon", "amazon pay", "amilia", "android", "angellist", "angrycreative", "angular", "app store", "app store ios", "apper", "apple", "apple pay", "asymmetrik", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "behance", "behance square", "bimobject", "bitbucket", "bitcoin", "bity", "black tie", "blackberry", "blogger", "blogger b", "bluetooth", "bluetooth b", "btc", "buromobelexperte", "buysellads", "cc amazon pay", "cc amex", "cc apple pay", "cc diners club", "cc discover", "cc jcb", "cc mastercard", "cc paypal", "cc stripe", "cc visa", "centercode", "chrome", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "connectdevelop", "contao", "cpanel", "creative commons", "css3", "css3 alternate", "cuttlefish", "d and d", "dashcube", "delicious", "deploydog", "deskpro", "deviantart", "digg", "digital ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dribbble square", "dropbox", "drupal", "dyalog", "earlybirds", "edge", "elementor", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "expeditedssl", "facebook", "facebook f", "facebook messenger", "facebook square", "firefox", "first order", "firstdraft", "flickr", "flipboard", "fly", "font awesome", "font awesome alternate", "font awesome flag", "fonticons", "fonticons fi", "fort awesome", "fort awesome alternate", "forumbee", "foursquare", "free code camp", "freebsd", "get pocket", "gg", "gg circle", "git", "git square", "github", "github alternate", "github square", "gitkraken", "gitlab", "gitter", "glide", "glide g", "gofore", "goodreads", "goodreads g", "google", "google drive", "google play", "google plus", "google plus g", "google plus square", "google wallet", "gratipay", "grav", "gripfire", "grunt", "gulp", "hacker news", "hacker news square", "hips", "hire a helper", "hooli", "hotjar", "houzz", "html5", "hubspot", "imdb", "instagram", "internet explorer", "ioxhost", "itunes", "itunes note", "jenkins", "joget", "joomla", "js", "js square", "jsfiddle", "keycdn", "kickstarter", "kickstarter k", "korvue", "laravel", "lastfm", "lastfm square", "leanpub", "less", "linechat", "linkedin", "linkedin alternate", "linode", "linux", "lyft", "magento", "maxcdn", "medapps", "medium", "medium m", "medrt", "meetup", "microsoft", "mix", "mixcloud", "mizuni", "modx", "monero", "napster", "nintendo switch", "node", "node js", "npm", "ns8", "nutritionix", "odnoklassniki", "odnoklassniki square", "opencart", "openid", "opera", "optin monster", "osi", "page4", "pagelines", "palfed", "patreon", "paypal", "periscope", "phabricator", "phoenix framework", "php", "pied piper", "pied piper alternate", "pied piper pp", "pinterest", "pinterest p", "pinterest square", "playstation", "product hunt", "pushed", "python", "qq", "quinscape", "quora", "ravelry", "react", "rebel", "redriver", "reddit", "reddit alien", "reddit square", "rendact", "renren", "replyd", "resolving", "rocketchat", "rockrms", "safari", "sass", "schlix", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "simplybuilt", "sistrix", "skyatlas", "skype", "slack", "slack hash", "slideshare", "snapchat", "snapchat ghost", "snapchat square", "soundcloud", "speakap", "spotify", "stack exchange", "stack overflow", "staylinked", "steam", "steam square", "steam symbol", "sticker mule", "strava", "stripe", "stripe s", "studiovinari", "stumbleupon", "stumbleupon circle", "superpowers", "supple", "telegram", "telegram plane", "tencent weibo", "themeisle", "trello", "tripadvisor", "tumblr", "tumblr square", "twitch", "twitter", "twitter square", "typo3", "uber", "uikit", "uniregistry", "untappd", "usb", "ussunnah", "vaadin", "viacoin", "viadeo", "viadeo square", "viber", "vimeo", "vimeo square", "vimeo v", "vine", "vk", "vnv", "vuejs", "wechat", "weibo", "weixin", "whatsapp", "whatsapp square", "whmcs", "wikipedia w", "windows", "wordpress", "wordpress simple", "wpbeginner", "wpexplorer", "wpforms", "xbox", "xing", "xing square", "y combinator", "yahoo", "yandex", "yandex international", "yelp", "yoast", "youtube", "youtube square"], B2 = Ac([].concat(l2, c2, u2, d2, f2, p2, h2, g2, m2, v2, y2, b2, E2, w2, S2, _2, O2, T2, P2, x2, A2, C2, $2, R2, N2, I2, k2, D2, L2, M2, F2)), U2 = ["chess rock", "ordered list", "unordered list", "user doctor", "shield", "puzzle", "add circle", "add square", "add to calendar", "add to cart", "add user", "add", "alarm mute", "alarm", "ald", "als", "announcement", "area chart", "area graph", "arrow down cart", "asexual", "asl interpreting", "asl", "assistive listening devices", "attach", "attention", "balance", "bar", "bathtub", "battery four", "battery high", "battery low", "battery one", "battery three", "battery two", "battery zero", "birthday", "block layout", "bluetooth alternative", "broken chain", "browser", "call square", "call", "cancel", "cart", "cc", "chain", "chat", "checked calendar", "checkmark", "circle notched", "close", "cny", "cocktail", "commenting", "computer", "configure", "content", "deafness", "delete calendar", "delete", "detective", "discussions", "doctor", "dollar", "dont", "drivers license", "dropdown", "emergency", "envira gallery", "erase", "eur", "euro", "eyedropper", "factory", "favorite", "feed", "female homosexual", "file text", "file text outline", "find", "first aid", "fork", "game", "gay", "gbp", "google plus circle", "google plus official", "grab", "graduation", "grid layout", "group", "h", "hand victory", "handicap", "hard of hearing", "header", "help circle", "help", "heterosexual", "hide", "hotel", "hourglass four", "hourglass full", "hourglass one", "hourglass three", "hourglass two", "idea", "ils", "in cart", "inr", "intergender", "intersex", "jpy", "krw", "lab", "law", "legal", "lesbian", "lightning", "like", "line graph", "linkedin square", "linkify", "lira", "list layout", "magnify", "mail forward", "mail outline", "mail square", "mail", "male homosexual", "man", "marker", "mars alternate", "mars horizontal", "mars vertical", "microsoft edge", "military", "ms edge", "mute", "new pied piper", "non binary transgender", "numbered list", "options", "other gender horizontal", "other gender vertical", "other gender", "payment", "paypal card", "pencil square", "photo", "picture", "pie chart", "pie graph", "pied piper hat", "pin", "plus cart", "point", "pointing down", "pointing left", "pointing right", "pointing up", "pound", "power cord", "power", "privacy", "r circle", "rain", "record", "refresh", "remove circle", "remove from calendar", "remove user", "remove", "repeat", "rmb", "rouble", "rub", "ruble", "rupee", "s15", "selected radio", "send", "setting", "settings", "shekel", "sheqel", "shipping", "shop", "shuffle", "shutdown", "sidebar", "signing", "signup", "sliders", "soccer", "sort alphabet ascending", "sort alphabet descending", "sort ascending", "sort content ascending", "sort content descending", "sort descending", "sort numeric ascending", "sort numeric descending", "sound", "spy", "stripe card", "student", "talk", "target", "teletype", "television", "text cursor", "text telephone", "theme", "thermometer", "thumb tack", "time", "tm", "toggle down", "toggle left", "toggle right", "toggle up", "translate", "travel", "treatment", "triangle down", "triangle left", "triangle right", "triangle up", "try", "unhide", "unlinkify", "unmute", "usd", "user cancel", "user close", "user delete", "user x", "vcard", "video camera", "video play", "volume control phone", "wait", "warning circle", "warning sign", "warning", "wi-fi", "winner", "wizard", "woman", "won", "wordpress beginner", "wordpress forms", "world", "write square", "x", "yen", "zip", "zoom in", "zoom out", "zoom", "bitbucket square", "checkmark box", "circle thin", "cloud download", "cloud upload", "compose", "conversation", "credit card alternative", "currency", "dashboard", "diamond", "disk", "exchange", "external share", "external square", "external", "facebook official", "food", "hourglass zero", "level down", "level up", "log out", "meanpath", "money", "move", "pencil", "protect", "radio", "remove bookmark", "resize horizontal", "resize vertical", "sign in", "sign out", "spoon", "star half empty", "star half full", "ticket", "times rectangle", "write", "youtube play"], z2 = Ac([].concat(B2, U2)), q2 = [
  "left dropdown"
  // nested dropdown menu direction icon
], j2 = Ac([].concat(z2, q2));
function H2(e, t) {
  return Tc(e, t);
}
var V2 = Da() && process.env.NODE_ENV !== "test" ? b.useLayoutEffect : b.useEffect;
const _v = V2;
var W2 = /\s+/;
function G2(e) {
  var t = [];
  return e ? (e.forEach(function(r) {
    if (typeof r.current == "string") {
      var n = r.current.split(W2);
      n.forEach(function(i) {
        t.push(i);
      });
    }
  }), t.filter(function(r, n, i) {
    return r.length > 0 && i.indexOf(r) === n;
  })) : [];
}
function Q2(e, t) {
  return [t.filter(function(r) {
    return e.indexOf(r) === -1;
  }), e.filter(function(r) {
    return t.indexOf(r) === -1;
  })];
}
var Ov = /* @__PURE__ */ new Map(), Id = function(t, r) {
  var n = G2(r), i = Q2(Ov.get(t) || [], n), s = i[0], l = i[1];
  t && (s.forEach(function(c) {
    return t.classList.add(c);
  }), l.forEach(function(c) {
    return t.classList.remove(c);
  })), Ov.set(t, n);
}, K2 = function() {
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
}, Fo = new K2();
function Y2(e, t) {
  var r = b.useRef(), n = b.useRef(!1);
  _v(function() {
    if (r.current = t, n.current) {
      var i = km(e) ? e.current : e;
      Fo.emit(i, Id);
    }
    n.current = !0;
  }, [t]), _v(function() {
    var i = km(e) ? e.current : e;
    return Fo.add(i, r), Fo.emit(i, Id), function() {
      Fo.del(i, r), Fo.emit(i, Id);
    };
  }, [e]);
}
var X2 = Zi(function(e, t) {
  return es(e) ? oE(e, t) : [];
});
const Mt = X2;
function Ii(e) {
  var t = e.children, r = e.className, n = e.content, i = e.size, s = ee(i, "icons", r), l = Z(Ii, e), c = ae(Ii, e);
  return /* @__PURE__ */ b.createElement(c, F({}, l, {
    className: s
  }), le(t) ? n : t);
}
Ii.handledProps = ["as", "children", "className", "content", "size"];
Ii.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** Size of the icon group. */
  size: d.oneOf(Mt(Gt, "medium"))
} : {};
Ii.defaultProps = {
  as: "i"
};
var ja = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(c) {
      var f = n.props.disabled;
      if (f) {
        c.preventDefault();
        return;
      }
      ne(n.props, "onClick", c, n.props);
    }, n;
  }
  var r = t.prototype;
  return r.getIconAriaOptions = function() {
    var i = {}, s = this.props, l = s["aria-label"], c = s["aria-hidden"];
    return Ue(l) ? i["aria-hidden"] = "true" : i["aria-label"] = l, Ue(c) || (i["aria-hidden"] = c), i;
  }, r.render = function() {
    var i = this.props, s = i.bordered, l = i.circular, c = i.className, f = i.color, p = i.corner, h = i.disabled, m = i.fitted, v = i.flipped, w = i.inverted, O = i.link, T = i.loading, _ = i.name, x = i.rotated, D = i.size, k = ee(f, _, D, C(s, "bordered"), C(l, "circular"), C(h, "disabled"), C(m, "fitted"), C(w, "inverted"), C(O, "link"), C(T, "loading"), rt(p, "corner"), Lt(v, "flipped"), Lt(x, "rotated"), "icon", c), z = Z(t, this.props), N = ae(t, this.props), B = this.getIconAriaOptions();
    return /* @__PURE__ */ b.createElement(N, F({}, z, B, {
      className: k,
      onClick: this.handleClick
    }));
  }, t;
}(Rb);
ja.handledProps = ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"];
ja.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Formatted to appear bordered. */
  bordered: d.bool,
  /** Icon can formatted to appear circular. */
  circular: d.bool,
  /** Additional classes. */
  className: d.string,
  /** Color of the icon. */
  color: d.oneOf(mr),
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
  name: yE(j2),
  /** Icon can rotated. */
  rotated: d.oneOf(["clockwise", "counterclockwise"]),
  /** Size of the icon. */
  size: d.oneOf(Mt(Gt, "medium")),
  /** Icon can have an aria label. */
  "aria-hidden": d.string,
  /** Icon can have an aria label. */
  "aria-label": d.string
} : {};
ja.defaultProps = {
  as: "i"
};
ja.Group = Ii;
ja.create = qe(ja, function(e) {
  return {
    name: e
  };
});
const Ct = ja;
var Tv = function(t) {
  return t !== null && !Array.isArray(t) && typeof t == "object";
}, ec = {
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
for (var Rl = 0; Rl < 24; Rl += 1)
  ec[112 + Rl] = "F" + (Rl + 1);
for (var kd = 0; kd < 26; kd += 1) {
  var Dd = kd + 65;
  ec[Dd] = [String.fromCharCode(Dd + 32), String.fromCharCode(Dd)];
}
var te = {
  codes: ec,
  /**
   * Get the `keyCode` or `which` value from a keyboard event or `key` name.
   * @param {string|object} eventOrKey A keyboard event-like object or `key` name.
   * @param {string} [eventOrKey.key] If object, it must have one of these keys.
   * @param {number} [eventOrKey.keyCode] If object, it must have one of these keys.
   * @param {number} [eventOrKey.which] If object, it must have one of these keys.
   * @returns {number|undefined}
   */
  getCode: function(t) {
    return Tv(t) ? t.keyCode || t.which || this[t.key] : this[t];
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
    var r = Tv(t);
    if (r && t.key)
      return t.key;
    var n = ec[r ? t.keyCode || t.which : t];
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
te.Spacebar = te[" "];
te.Digit0 = te[0];
te.Digit1 = te[1];
te.Digit2 = te[2];
te.Digit3 = te[3];
te.Digit4 = te[4];
te.Digit5 = te[5];
te.Digit6 = te[6];
te.Digit7 = te[7];
te.Digit8 = te[8];
te.Digit9 = te[9];
te.Tilde = te["~"];
te.GraveAccent = te["`"];
te.ExclamationPoint = te["!"];
te.AtSign = te["@"];
te.PoundSign = te["#"];
te.PercentSign = te["%"];
te.Caret = te["^"];
te.Ampersand = te["&"];
te.PlusSign = te["+"];
te.MinusSign = te["-"];
te.EqualsSign = te["="];
te.DivisionSign = te["/"];
te.MultiplicationSign = te["*"];
te.Comma = te[","];
te.Decimal = te["."];
te.Colon = te[":"];
te.Semicolon = te[";"];
te.Pipe = te["|"];
te.BackSlash = te["\\"];
te.QuestionMark = te["?"];
te.SingleQuote = te["'"];
te.DoubleQuote = te['"'];
te.LeftCurlyBrace = te["{"];
te.RightCurlyBrace = te["}"];
te.LeftParenthesis = te["("];
te.RightParenthesis = te[")"];
te.LeftAngleBracket = te["<"];
te.RightAngleBracket = te[">"];
te.LeftSquareBracket = te["["];
te.RightSquareBracket = te["]"];
var J2 = te;
const St = /* @__PURE__ */ Rt(J2);
var xf = { exports: {} }, Ye = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pv;
function Z2() {
  if (Pv)
    return Ye;
  Pv = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), O;
  O = Symbol.for("react.module.reference");
  function T(_) {
    if (typeof _ == "object" && _ !== null) {
      var x = _.$$typeof;
      switch (x) {
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
                case c:
                case l:
                case f:
                case v:
                case m:
                case s:
                  return _;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Ye.ContextConsumer = l, Ye.ContextProvider = s, Ye.Element = e, Ye.ForwardRef = f, Ye.Fragment = r, Ye.Lazy = v, Ye.Memo = m, Ye.Portal = t, Ye.Profiler = i, Ye.StrictMode = n, Ye.Suspense = p, Ye.SuspenseList = h, Ye.isAsyncMode = function() {
    return !1;
  }, Ye.isConcurrentMode = function() {
    return !1;
  }, Ye.isContextConsumer = function(_) {
    return T(_) === l;
  }, Ye.isContextProvider = function(_) {
    return T(_) === s;
  }, Ye.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === e;
  }, Ye.isForwardRef = function(_) {
    return T(_) === f;
  }, Ye.isFragment = function(_) {
    return T(_) === r;
  }, Ye.isLazy = function(_) {
    return T(_) === v;
  }, Ye.isMemo = function(_) {
    return T(_) === m;
  }, Ye.isPortal = function(_) {
    return T(_) === t;
  }, Ye.isProfiler = function(_) {
    return T(_) === i;
  }, Ye.isStrictMode = function(_) {
    return T(_) === n;
  }, Ye.isSuspense = function(_) {
    return T(_) === p;
  }, Ye.isSuspenseList = function(_) {
    return T(_) === h;
  }, Ye.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === r || _ === i || _ === n || _ === p || _ === h || _ === w || typeof _ == "object" && _ !== null && (_.$$typeof === v || _.$$typeof === m || _.$$typeof === s || _.$$typeof === l || _.$$typeof === f || _.$$typeof === O || _.getModuleId !== void 0);
  }, Ye.typeOf = T, Ye;
}
var Xe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xv;
function eL() {
  return xv || (xv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), O = !1, T = !1, _ = !1, x = !1, D = !1, k;
    k = Symbol.for("react.module.reference");
    function z(oe) {
      return !!(typeof oe == "string" || typeof oe == "function" || oe === r || oe === i || D || oe === n || oe === p || oe === h || x || oe === w || O || T || _ || typeof oe == "object" && oe !== null && (oe.$$typeof === v || oe.$$typeof === m || oe.$$typeof === s || oe.$$typeof === l || oe.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      oe.$$typeof === k || oe.getModuleId !== void 0));
    }
    function N(oe) {
      if (typeof oe == "object" && oe !== null) {
        var Zt = oe.$$typeof;
        switch (Zt) {
          case e:
            var ln = oe.type;
            switch (ln) {
              case r:
              case i:
              case n:
              case p:
              case h:
                return ln;
              default:
                var zt = ln && ln.$$typeof;
                switch (zt) {
                  case c:
                  case l:
                  case f:
                  case v:
                  case m:
                  case s:
                    return zt;
                  default:
                    return Zt;
                }
            }
          case t:
            return Zt;
        }
      }
    }
    var B = l, P = s, $ = e, I = f, U = r, W = v, X = m, V = t, ce = i, _e = n, Oe = p, Te = h, je = !1, Ze = !1;
    function K(oe) {
      return je || (je = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function J(oe) {
      return Ze || (Ze = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function we(oe) {
      return N(oe) === l;
    }
    function ge(oe) {
      return N(oe) === s;
    }
    function pe(oe) {
      return typeof oe == "object" && oe !== null && oe.$$typeof === e;
    }
    function Se(oe) {
      return N(oe) === f;
    }
    function he(oe) {
      return N(oe) === r;
    }
    function Pe(oe) {
      return N(oe) === v;
    }
    function xe(oe) {
      return N(oe) === m;
    }
    function Ae(oe) {
      return N(oe) === t;
    }
    function Ne(oe) {
      return N(oe) === i;
    }
    function ie(oe) {
      return N(oe) === n;
    }
    function re(oe) {
      return N(oe) === p;
    }
    function gt(oe) {
      return N(oe) === h;
    }
    Xe.ContextConsumer = B, Xe.ContextProvider = P, Xe.Element = $, Xe.ForwardRef = I, Xe.Fragment = U, Xe.Lazy = W, Xe.Memo = X, Xe.Portal = V, Xe.Profiler = ce, Xe.StrictMode = _e, Xe.Suspense = Oe, Xe.SuspenseList = Te, Xe.isAsyncMode = K, Xe.isConcurrentMode = J, Xe.isContextConsumer = we, Xe.isContextProvider = ge, Xe.isElement = pe, Xe.isForwardRef = Se, Xe.isFragment = he, Xe.isLazy = Pe, Xe.isMemo = xe, Xe.isPortal = Ae, Xe.isProfiler = Ne, Xe.isStrictMode = ie, Xe.isSuspense = re, Xe.isSuspenseList = gt, Xe.isValidElementType = z, Xe.typeOf = N;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? xf.exports = Z2() : xf.exports = eL();
var tL = xf.exports;
function rL(e) {
  if (e && (b.Children.only(e), tL.isFragment(e)))
    throw new Error('An "React.Fragment" cannot be used as a `trigger`.');
}
var fp = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleRef = function(c) {
      en(n.props.innerRef, c);
    }, n;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    ne(this.props, "onMount", null, this.props);
  }, r.componentWillUnmount = function() {
    ne(this.props, "onUnmount", null, this.props);
  }, r.render = function() {
    if (!Da())
      return null;
    var i = this.props, s = i.children, l = i.mountNode, c = l === void 0 ? document.body : l;
    return /* @__PURE__ */ UC(/* @__PURE__ */ b.createElement(hr, {
      innerRef: this.handleRef
    }, s), c);
  }, t;
}(He);
fp.handledProps = ["children", "innerRef", "mountNode", "onMount", "onUnmount"];
fp.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: d.node.isRequired,
  /** Called with a ref to the inner node. */
  innerRef: EE,
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
const CE = fp;
var no = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.contentRef = /* @__PURE__ */ b.createRef(), n.triggerRef = /* @__PURE__ */ b.createRef(), n.latestDocumentMouseDownEvent = null, n.handleDocumentMouseDown = function(c) {
      n.latestDocumentMouseDownEvent = c;
    }, n.handleDocumentClick = function(c) {
      var f = n.props.closeOnDocumentClick, p = n.latestDocumentMouseDownEvent;
      n.latestDocumentMouseDownEvent = null, !(!n.contentRef.current || // no portal
      La(n.triggerRef.current, c) || // event happened in trigger (delegate to trigger handlers)
      p && La(n.contentRef.current, p) || // event originated in the portal but was ended outside
      La(n.contentRef.current, c)) && f && n.close(c);
    }, n.handleEscape = function(c) {
      n.props.closeOnEscape && St.getCode(c) === St.Escape && n.close(c);
    }, n.handlePortalMouseLeave = function(c) {
      var f = n.props, p = f.closeOnPortalMouseLeave, h = f.mouseLeaveDelay;
      p && c.target === n.contentRef.current && (n.mouseLeaveTimer = n.closeWithTimeout(c, h));
    }, n.handlePortalMouseEnter = function() {
      var c = n.props.closeOnPortalMouseLeave;
      c && clearTimeout(n.mouseLeaveTimer);
    }, n.handleTriggerBlur = function(c) {
      for (var f = n.props, p = f.trigger, h = f.closeOnTriggerBlur, m = arguments.length, v = new Array(m > 1 ? m - 1 : 0), w = 1; w < m; w++)
        v[w - 1] = arguments[w];
      ne.apply(void 0, [p, "props.onBlur", c].concat(v));
      var O = c.relatedTarget || document.activeElement, T = ne(n.contentRef.current, "contains", O);
      !h || T || n.close(c);
    }, n.handleTriggerClick = function(c) {
      for (var f = n.props, p = f.trigger, h = f.closeOnTriggerClick, m = f.openOnTriggerClick, v = n.state.open, w = arguments.length, O = new Array(w > 1 ? w - 1 : 0), T = 1; T < w; T++)
        O[T - 1] = arguments[T];
      ne.apply(void 0, [p, "props.onClick", c].concat(O)), v && h ? n.close(c) : !v && m && n.open(c);
    }, n.handleTriggerFocus = function(c) {
      for (var f = n.props, p = f.trigger, h = f.openOnTriggerFocus, m = arguments.length, v = new Array(m > 1 ? m - 1 : 0), w = 1; w < m; w++)
        v[w - 1] = arguments[w];
      ne.apply(void 0, [p, "props.onFocus", c].concat(v)), h && n.open(c);
    }, n.handleTriggerMouseLeave = function(c) {
      clearTimeout(n.mouseEnterTimer);
      for (var f = n.props, p = f.trigger, h = f.closeOnTriggerMouseLeave, m = f.mouseLeaveDelay, v = arguments.length, w = new Array(v > 1 ? v - 1 : 0), O = 1; O < v; O++)
        w[O - 1] = arguments[O];
      ne.apply(void 0, [p, "props.onMouseLeave", c].concat(w)), h && (n.mouseLeaveTimer = n.closeWithTimeout(c, m));
    }, n.handleTriggerMouseEnter = function(c) {
      clearTimeout(n.mouseLeaveTimer);
      for (var f = n.props, p = f.trigger, h = f.mouseEnterDelay, m = f.openOnTriggerMouseEnter, v = arguments.length, w = new Array(v > 1 ? v - 1 : 0), O = 1; O < v; O++)
        w[O - 1] = arguments[O];
      ne.apply(void 0, [p, "props.onMouseEnter", c].concat(w)), m && (n.mouseEnterTimer = n.openWithTimeout(c, h));
    }, n.open = function(c) {
      ne(n.props, "onOpen", c, F({}, n.props, {
        open: !0
      })), n.setState({
        open: !0
      });
    }, n.openWithTimeout = function(c, f) {
      var p = F({}, c);
      return setTimeout(function() {
        return n.open(p);
      }, f || 0);
    }, n.close = function(c) {
      n.setState({
        open: !1
      }), ne(n.props, "onClose", c, F({}, n.props, {
        open: !1
      }));
    }, n.closeWithTimeout = function(c, f) {
      var p = F({}, c);
      return setTimeout(function() {
        return n.close(p);
      }, f || 0);
    }, n.handleMount = function() {
      ne(n.props, "onMount", null, n.props);
    }, n.handleUnmount = function() {
      ne(n.props, "onUnmount", null, n.props);
    }, n.handleTriggerRef = function(c) {
      n.triggerRef.current = c, en(n.props.triggerRef, c);
    }, n;
  }
  var r = t.prototype;
  return r.componentWillUnmount = function() {
    clearTimeout(this.mouseEnterTimer), clearTimeout(this.mouseLeaveTimer);
  }, r.render = function() {
    var i = this.props, s = i.children, l = i.eventPool, c = i.mountNode, f = i.trigger, p = this.state.open;
    return process.env.NODE_ENV !== "production" && rL(f), /* @__PURE__ */ b.createElement(b.Fragment, null, p && /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(CE, {
      innerRef: this.contentRef,
      mountNode: c,
      onMount: this.handleMount,
      onUnmount: this.handleUnmount
    }, s), /* @__PURE__ */ b.createElement(Yn, {
      name: "mouseleave",
      on: this.handlePortalMouseLeave,
      pool: l,
      target: this.contentRef
    }), /* @__PURE__ */ b.createElement(Yn, {
      name: "mouseenter",
      on: this.handlePortalMouseEnter,
      pool: l,
      target: this.contentRef
    }), /* @__PURE__ */ b.createElement(Yn, {
      name: "mousedown",
      on: this.handleDocumentMouseDown,
      pool: l
    }), /* @__PURE__ */ b.createElement(Yn, {
      name: "click",
      on: this.handleDocumentClick,
      pool: l
    }), /* @__PURE__ */ b.createElement(Yn, {
      name: "keydown",
      on: this.handleEscape,
      pool: l
    })), f && /* @__PURE__ */ b.createElement(hr, {
      innerRef: this.handleTriggerRef
    }, /* @__PURE__ */ b.cloneElement(f, {
      onBlur: this.handleTriggerBlur,
      onClick: this.handleTriggerClick,
      onFocus: this.handleTriggerFocus,
      onMouseLeave: this.handleTriggerMouseLeave,
      onMouseEnter: this.handleTriggerMouseEnter
    })));
  }, t;
}(to);
no.handledProps = ["children", "closeOnDocumentClick", "closeOnEscape", "closeOnPortalMouseLeave", "closeOnTriggerBlur", "closeOnTriggerClick", "closeOnTriggerMouseLeave", "defaultOpen", "eventPool", "mountNode", "mouseEnterDelay", "mouseLeaveDelay", "onClose", "onMount", "onOpen", "onUnmount", "open", "openOnTriggerClick", "openOnTriggerFocus", "openOnTriggerMouseEnter", "trigger", "triggerRef"];
no.propTypes = process.env.NODE_ENV !== "production" ? {
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
  triggerRef: EE
} : {};
no.defaultProps = {
  closeOnDocumentClick: !0,
  closeOnEscape: !0,
  eventPool: "default",
  openOnTriggerClick: !0
};
no.autoControlledProps = ["open"];
no.Inner = CE;
const Af = no;
function rs(e) {
  var t = e.blurring, r = e.className, n = e.children, i = e.content, s = e.dimmed, l = ee(C(t, "blurring"), C(s, "dimmed"), "dimmable", r), c = Z(rs, e), f = ae(rs, e);
  return /* @__PURE__ */ b.createElement(f, F({}, c, {
    className: l
  }), le(n) ? i : n);
}
rs.handledProps = ["as", "blurring", "children", "className", "content", "dimmed"];
rs.propTypes = process.env.NODE_ENV !== "production" ? {
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
var ns = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.containerRef = /* @__PURE__ */ xr(), n.contentRef = /* @__PURE__ */ xr(), n.handleClick = function(c) {
      var f = n.contentRef.current;
      ne(n.props, "onClick", c, n.props), !(f && f !== c.target && La(f, c)) && ne(n.props, "onClickOutside", c, n.props);
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
    var i = this.props, s = i.active, l = i.children, c = i.className, f = i.content, p = i.disabled, h = i.inverted, m = i.page, v = i.simple, w = i.verticalAlign, O = ee("ui", C(s, "active transition visible"), C(p, "disabled"), C(h, "inverted"), C(m, "page"), C(v, "simple"), $r(w), "dimmer", c), T = Z(t, this.props), _ = ae(t, this.props), x = le(l) ? f : l;
    return /* @__PURE__ */ b.createElement(hr, {
      innerRef: this.containerRef
    }, /* @__PURE__ */ b.createElement(_, F({}, T, {
      className: O,
      onClick: this.handleClick
    }), x && /* @__PURE__ */ b.createElement("div", {
      className: "content",
      ref: this.contentRef
    }, x)));
  }, t;
}(He);
ns.handledProps = ["active", "as", "children", "className", "content", "disabled", "inverted", "onClick", "onClickOutside", "page", "simple", "verticalAlign"];
ns.propTypes = process.env.NODE_ENV !== "production" ? {
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
var Ha = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handlePortalMount = function() {
      Da() && (document.body.classList.add("dimmed"), document.body.classList.add("dimmable"));
    }, n.handlePortalUnmount = function() {
      Da() && (document.body.classList.remove("dimmed"), document.body.classList.remove("dimmable"));
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.page, c = Z(t, this.props);
    return l ? /* @__PURE__ */ b.createElement(Af, {
      closeOnEscape: !1,
      closeOnDocumentClick: !1,
      onMount: this.handlePortalMount,
      onUnmount: this.handlePortalUnmount,
      open: s,
      openOnTriggerClick: !1
    }, /* @__PURE__ */ b.createElement(ns, F({}, c, {
      active: s,
      page: l
    }))) : /* @__PURE__ */ b.createElement(ns, F({}, c, {
      active: s,
      page: l
    }));
  }, t;
}(He);
Ha.handledProps = ["active", "page"];
Ha.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An active dimmer will dim its parent container. */
  active: d.bool,
  /** A dimmer can be formatted to be fixed to the page. */
  page: d.bool
} : {};
Ha.Dimmable = rs;
Ha.Inner = ns;
Ha.create = qe(Ha, function(e) {
  return {
    content: e
  };
});
function as(e) {
  var t = e.children, r = e.className, n = e.content, i = e.size, s = ee("ui", i, r, "images"), l = Z(as, e), c = ae(as, e);
  return /* @__PURE__ */ b.createElement(c, F({}, l, {
    className: s
  }), le(t) ? n : t);
}
as.handledProps = ["as", "children", "className", "content", "size"];
as.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** A group of images can be formatted to have the same size. */
  size: d.oneOf(Gt)
} : {};
function Ut(e) {
  var t = e.avatar, r = e.bordered, n = e.centered, i = e.children, s = e.circular, l = e.className, c = e.content, f = e.dimmer, p = e.disabled, h = e.floated, m = e.fluid, v = e.hidden, w = e.href, O = e.inline, T = e.label, _ = e.rounded, x = e.size, D = e.spaced, k = e.verticalAlign, z = e.wrapped, N = e.ui, B = ee(C(N, "ui"), x, C(t, "avatar"), C(r, "bordered"), C(s, "circular"), C(n, "centered"), C(p, "disabled"), C(m, "fluid"), C(v, "hidden"), C(O, "inline"), C(_, "rounded"), rt(D, "spaced"), Lt(h, "floated"), $r(k), "image", l), P = Z(Ut, e), $ = dp(P, {
    htmlProps: DD
  }), I = $[0], U = $[1], W = ae(Ut, e, function() {
    if (!Ue(f) || !Ue(T) || !Ue(z) || !le(i))
      return "div";
  });
  return le(i) ? le(c) ? W === "img" ? /* @__PURE__ */ b.createElement(W, F({}, U, I, {
    className: B
  })) : /* @__PURE__ */ b.createElement(W, F({}, U, {
    className: B,
    href: w
  }), Ha.create(f, {
    autoGenerateKey: !1
  }), or.create(T, {
    autoGenerateKey: !1
  }), /* @__PURE__ */ b.createElement("img", I)) : /* @__PURE__ */ b.createElement(W, F({}, P, {
    className: B
  }), c) : /* @__PURE__ */ b.createElement(W, F({}, P, {
    className: B
  }), i);
}
Ut.handledProps = ["as", "avatar", "bordered", "centered", "children", "circular", "className", "content", "dimmer", "disabled", "floated", "fluid", "hidden", "href", "inline", "label", "rounded", "size", "spaced", "ui", "verticalAlign", "wrapped"];
Ut.Group = as;
Ut.propTypes = process.env.NODE_ENV !== "production" ? {
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
  dimmer: fe,
  /** An image can sit to the left or right of other content. */
  floated: d.oneOf(fa),
  /** An image can take up the width of its container. */
  fluid: Be([d.bool, Ve(["size"])]),
  /** An image can be hidden. */
  hidden: d.bool,
  /** Renders the Image as an <a> tag with this href. */
  href: d.string,
  /** An image may appear inline. */
  inline: d.bool,
  /** Shorthand for Label. */
  label: fe,
  /** An image may appear rounded. */
  rounded: d.bool,
  /** An image may appear at different sizes. */
  size: d.oneOf(Gt),
  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: d.oneOfType([d.bool, d.oneOf(["left", "right"])]),
  /** Whether or not to add the ui className. */
  ui: d.bool,
  /** An image can specify its vertical alignment. */
  verticalAlign: d.oneOf(zr),
  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped: d.bool
} : {};
Ut.defaultProps = {
  as: "img",
  ui: !0
};
Ut.create = qe(Ut, function(e) {
  return {
    src: e
  };
});
function Zn(e) {
  var t = e.children, r = e.className, n = e.content, i = ee("detail", r), s = Z(Zn, e), l = ae(Zn, e);
  return /* @__PURE__ */ b.createElement(l, F({}, s, {
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
Zn.create = qe(Zn, function(e) {
  return {
    content: e
  };
});
function is(e) {
  var t = e.children, r = e.circular, n = e.className, i = e.color, s = e.content, l = e.size, c = e.tag, f = ee("ui", i, l, C(r, "circular"), C(c, "tag"), "labels", n), p = Z(is, e), h = ae(is, e);
  return /* @__PURE__ */ b.createElement(h, F({}, p, {
    className: f
  }), le(t) ? s : t);
}
is.handledProps = ["as", "children", "circular", "className", "color", "content", "size", "tag"];
is.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Labels can share shapes. */
  circular: d.bool,
  /** Additional classes. */
  className: d.string,
  /** Label group can share colors together. */
  color: d.oneOf(mr),
  /** Shorthand for primary content. */
  content: me,
  /** Label group can share sizes together. */
  size: d.oneOf(Gt),
  /** Label group can share tag formatting. */
  tag: d.bool
} : {};
var or = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(c) {
      var f = n.props.onClick;
      f && f(c, n.props);
    }, n.handleIconOverrides = function(c) {
      return {
        onClick: function(p) {
          ne(c, "onClick", p), ne(n.props, "onRemove", p, n.props);
        }
      };
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.attached, c = i.basic, f = i.children, p = i.circular, h = i.className, m = i.color, v = i.content, w = i.corner, O = i.detail, T = i.empty, _ = i.floating, x = i.horizontal, D = i.icon, k = i.image, z = i.onRemove, N = i.pointing, B = i.prompt, P = i.removeIcon, $ = i.ribbon, I = i.size, U = i.tag, W = N === !0 && "pointing" || (N === "left" || N === "right") && N + " pointing" || (N === "above" || N === "below") && "pointing " + N, X = ee("ui", m, W, I, C(s, "active"), C(c, "basic"), C(p, "circular"), C(T, "empty"), C(_, "floating"), C(x, "horizontal"), C(k === !0, "image"), C(B, "prompt"), C(U, "tag"), rt(w, "corner"), rt($, "ribbon"), Lt(l, "attached"), "label", h), V = Z(t, this.props), ce = ae(t, this.props);
    if (!le(f))
      return /* @__PURE__ */ b.createElement(ce, F({}, V, {
        className: X,
        onClick: this.handleClick
      }), f);
    var _e = Ho(P) ? "delete" : P;
    return /* @__PURE__ */ b.createElement(ce, F({
      className: X,
      onClick: this.handleClick
    }, V), Ct.create(D, {
      autoGenerateKey: !1
    }), typeof k != "boolean" && Ut.create(k, {
      autoGenerateKey: !1
    }), v, Zn.create(O, {
      autoGenerateKey: !1
    }), z && Ct.create(_e, {
      autoGenerateKey: !1,
      overrideProps: this.handleIconOverrides
    }));
  }, t;
}(He);
or.handledProps = ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "prompt", "removeIcon", "ribbon", "size", "tag"];
or.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: d.oneOf(mr),
  /** Shorthand for primary content. */
  content: me,
  /** A label can position itself in the corner of an element. */
  corner: d.oneOfType([d.bool, d.oneOf(["left", "right"])]),
  /** Shorthand for LabelDetail. */
  detail: fe,
  /** Formats the label as a dot. */
  empty: Be([d.bool, Xn(["circular"])]),
  /** Float above another element in the upper right corner. */
  floating: d.bool,
  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: d.bool,
  /** Shorthand for Icon. */
  icon: fe,
  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: d.oneOfType([d.bool, fe]),
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
  removeIcon: fe,
  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: d.oneOfType([d.bool, d.oneOf(["right"])]),
  /** A label can have different sizes. */
  size: d.oneOf(Gt),
  /** A label can appear as a tag. */
  tag: d.bool
} : {};
or.Detail = Zn;
or.Group = is;
or.create = qe(or, function(e) {
  return {
    content: e
  };
});
function os(e) {
  var t = e.children, r = e.className, n = e.content, i = e.hidden, s = e.visible, l = ee(C(s, "visible"), C(i, "hidden"), "content", r), c = Z(os, e), f = ae(os, e);
  return /* @__PURE__ */ b.createElement(f, F({}, c, {
    className: l
  }), le(t) ? n : t);
}
os.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
os.propTypes = process.env.NODE_ENV !== "production" ? {
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
function ss(e) {
  var t = e.attached, r = e.basic, n = e.buttons, i = e.children, s = e.className, l = e.color, c = e.compact, f = e.content, p = e.floated, h = e.fluid, m = e.icon, v = e.inverted, w = e.labeled, O = e.negative, T = e.positive, _ = e.primary, x = e.secondary, D = e.size, k = e.toggle, z = e.vertical, N = e.widths, B = ee("ui", l, D, C(r, "basic"), C(c, "compact"), C(h, "fluid"), C(m, "icon"), C(v, "inverted"), C(w, "labeled"), C(O, "negative"), C(T, "positive"), C(_, "primary"), C(x, "secondary"), C(k, "toggle"), C(z, "vertical"), rt(t, "attached"), Lt(p, "floated"), Vt(N), "buttons", s), P = Z(ss, e), $ = ae(ss, e);
  return Ue(n) ? /* @__PURE__ */ b.createElement($, F({}, P, {
    className: B
  }), le(i) ? f : i) : /* @__PURE__ */ b.createElement($, F({}, P, {
    className: B
  }), yt(n, function(I) {
    return Pn.create(I);
  }));
}
ss.handledProps = ["as", "attached", "basic", "buttons", "children", "className", "color", "compact", "content", "floated", "fluid", "icon", "inverted", "labeled", "negative", "positive", "primary", "secondary", "size", "toggle", "vertical", "widths"];
ss.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Groups can be attached to other content. */
  attached: d.oneOfType([d.bool, d.oneOf(["left", "right", "top", "bottom"])]),
  /** Groups can be less pronounced. */
  basic: d.bool,
  /** Array of shorthand Button values. */
  buttons: da,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Groups can have a shared color. */
  color: d.oneOf(mr),
  /** Groups can reduce their padding to fit into tighter spaces. */
  compact: d.bool,
  /** Shorthand for primary content. */
  content: me,
  /** Groups can be aligned to the left or right of its container. */
  floated: d.oneOf(fa),
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
  size: d.oneOf(Gt),
  /** Groups can be formatted to toggle on and off. */
  toggle: d.bool,
  /** Groups can be formatted to appear vertically. */
  vertical: d.bool,
  /** Groups can have their widths divided evenly. */
  widths: d.oneOf(Jt)
} : {};
function ls(e) {
  var t = e.className, r = e.text, n = ee("or", t), i = Z(ls, e), s = ae(ls, e);
  return /* @__PURE__ */ b.createElement(s, F({}, i, {
    className: n,
    "data-text": r
  }));
}
ls.handledProps = ["as", "className", "text"];
ls.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Additional classes. */
  className: d.string,
  /** Or buttons can have their text localized, or adjusted by using the text prop. */
  text: d.oneOfType([d.number, d.string])
} : {};
var Tn = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.ref = /* @__PURE__ */ xr(), n.computeElementType = function() {
      var c = n.props, f = c.attached, p = c.label;
      if (!Ue(f) || !Ue(p))
        return "div";
    }, n.computeTabIndex = function(c) {
      var f = n.props, p = f.disabled, h = f.tabIndex;
      if (!Ue(h))
        return h;
      if (p)
        return -1;
      if (c === "div")
        return 0;
    }, n.focus = function(c) {
      return ne(n.ref.current, "focus", c);
    }, n.handleClick = function(c) {
      var f = n.props.disabled;
      if (f) {
        c.preventDefault();
        return;
      }
      ne(n.props, "onClick", c, n.props);
    }, n.hasIconClass = function() {
      var c = n.props, f = c.labelPosition, p = c.children, h = c.content, m = c.icon;
      return m === !0 ? !0 : m && (f || le(p) && Ue(h));
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
    var i = this.props, s = i.active, l = i.animated, c = i.attached, f = i.basic, p = i.children, h = i.circular, m = i.className, v = i.color, w = i.compact, O = i.content, T = i.disabled, _ = i.floated, x = i.fluid, D = i.icon, k = i.inverted, z = i.label, N = i.labelPosition, B = i.loading, P = i.negative, $ = i.positive, I = i.primary, U = i.secondary, W = i.size, X = i.toggle, V = i.type, ce = ee(v, W, C(s, "active"), C(f, "basic"), C(h, "circular"), C(w, "compact"), C(x, "fluid"), C(this.hasIconClass(), "icon"), C(k, "inverted"), C(B, "loading"), C(P, "negative"), C($, "positive"), C(I, "primary"), C(U, "secondary"), C(X, "toggle"), rt(l, "animated"), rt(c, "attached")), _e = ee(rt(N || !!z, "labeled")), Oe = ee(C(T, "disabled"), Lt(_, "floated")), Te = Z(t, this.props), je = ae(t, this.props, this.computeElementType), Ze = this.computeTabIndex(je);
    if (!Ue(z)) {
      var K = ee("ui", ce, "button", m), J = ee("ui", _e, "button", m, Oe), we = or.create(z, {
        defaultProps: {
          basic: !0,
          pointing: N === "left" ? "right" : "left"
        },
        autoGenerateKey: !1
      });
      return /* @__PURE__ */ b.createElement(je, F({}, Te, {
        className: J,
        onClick: this.handleClick
      }), N === "left" && we, /* @__PURE__ */ b.createElement(hr, {
        innerRef: this.ref
      }, /* @__PURE__ */ b.createElement("button", {
        className: K,
        "aria-pressed": X ? !!s : void 0,
        disabled: T,
        type: V,
        tabIndex: Ze
      }, Ct.create(D, {
        autoGenerateKey: !1
      }), " ", O)), (N === "right" || !N) && we);
    }
    var ge = ee("ui", ce, Oe, _e, "button", m), pe = !le(p), Se = this.computeButtonAriaRole(je);
    return /* @__PURE__ */ b.createElement(hr, {
      innerRef: this.ref
    }, /* @__PURE__ */ b.createElement(je, F({}, Te, {
      className: ge,
      "aria-pressed": X ? !!s : void 0,
      disabled: T && je === "button" || void 0,
      onClick: this.handleClick,
      role: Se,
      type: V,
      tabIndex: Ze
    }), pe && p, !pe && Ct.create(D, {
      autoGenerateKey: !1
    }), !pe && O));
  }, t;
}(He);
Tn.handledProps = ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle", "type"];
Tn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  children: Be([d.node, Ve(["label"]), bE({
    icon: d.oneOfType([d.string.isRequired, d.object.isRequired, d.element.isRequired])
  }, Ve(["icon"]))]),
  /** A button can be circular. */
  circular: d.bool,
  /** Additional classes. */
  className: d.string,
  /** A button can have different colors */
  color: d.oneOf([].concat(mr, ["facebook", "google plus", "instagram", "linkedin", "twitter", "vk", "youtube"])),
  /** A button can reduce its padding to fit into tighter spaces. */
  compact: d.bool,
  /** Shorthand for primary content. */
  content: me,
  /** A button can show it is currently unable to be interacted with. */
  disabled: d.bool,
  /** A button can be aligned to the left or right of its container. */
  floated: d.oneOf(fa),
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
  size: d.oneOf(Gt),
  /** A button can receive focus. */
  tabIndex: d.oneOfType([d.number, d.string]),
  /** A button can be formatted to toggle on and off. */
  toggle: d.bool,
  /** The type of the HTML element. */
  type: d.oneOf(["button", "submit", "reset"])
} : {};
Tn.defaultProps = {
  as: "button"
};
Tn.Content = os;
Tn.Group = ss;
Tn.Or = ls;
Tn.create = qe(Tn, function(e) {
  return {
    content: e
  };
});
const Pn = Tn;
function $E(e, t, r, n) {
  var i = -1, s = e == null ? 0 : e.length;
  for (n && s && (r = e[++i]); ++i < s; )
    r = t(r, e[i], i, e);
  return r;
}
function nL(e, t, r, n, i) {
  return i(e, function(s, l, c) {
    r = n ? (n = !1, s) : t(r, s, l, c);
  }), r;
}
function RE(e, t, r) {
  var n = _t(e) ? $E : nL, i = arguments.length < 3;
  return n(e, ua(t), r, i, eo);
}
var aL = function(t, r, n, i) {
  var s = n ? n.call(i, t, r) : void 0;
  if (s !== void 0)
    return !!s;
  if (t === r)
    return !0;
  if (typeof t != "object" || !t || typeof r != "object" || !r)
    return !1;
  var l = Object.keys(t), c = Object.keys(r);
  if (l.length !== c.length)
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
const Fl = /* @__PURE__ */ Rt(aL);
var Va = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleButtonOverrides = function(c) {
      return {
        onClick: function(p, h) {
          ne(c, "onClick", p, h), ne(n.props, "onActionClick", p, h);
        }
      };
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this, s = this.props, l = s.actions, c = s.children, f = s.className, p = s.content, h = ee("actions", f), m = Z(t, this.props), v = ae(t, this.props);
    return le(c) ? le(p) ? /* @__PURE__ */ b.createElement(v, F({}, m, {
      className: h
    }), yt(l, function(w) {
      return Pn.create(w, {
        overrideProps: i.handleButtonOverrides
      });
    })) : /* @__PURE__ */ b.createElement(v, F({}, m, {
      className: h
    }), p) : /* @__PURE__ */ b.createElement(v, F({}, m, {
      className: h
    }), c);
  }, t;
}(He);
Va.handledProps = ["actions", "as", "children", "className", "content", "onActionClick"];
Va.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Array of shorthand buttons. */
  actions: da,
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
  onActionClick: Be([Ve(["children"]), d.func])
} : {};
Va.create = qe(Va, function(e) {
  return {
    actions: e
  };
});
function xn(e) {
  var t = e.children, r = e.className, n = e.content, i = e.image, s = e.scrolling, l = ee(r, C(i, "image"), C(s, "scrolling"), "content"), c = Z(xn, e), f = ae(xn, e);
  return /* @__PURE__ */ b.createElement(f, F({}, c, {
    className: l
  }), le(t) ? n : t);
}
xn.handledProps = ["as", "children", "className", "content", "image", "scrolling"];
xn.propTypes = process.env.NODE_ENV !== "production" ? {
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
xn.create = qe(xn, function(e) {
  return {
    content: e
  };
});
function cs(e) {
  var t = e.children, r = e.className, n = e.content, i = ee("description", r), s = Z(cs, e), l = ae(cs, e);
  return /* @__PURE__ */ b.createElement(l, F({}, s, {
    className: i
  }), le(t) ? n : t);
}
cs.handledProps = ["as", "children", "className", "content"];
cs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
function ea(e) {
  var t = e.blurring, r = e.children, n = e.className, i = e.centered, s = e.content, l = e.inverted, c = e.mountNode, f = e.scrolling, p = b.useRef(), h = ee("ui", C(l, "inverted"), C(!i, "top aligned"), "page modals dimmer transition visible active", n), m = ee("dimmable dimmed", C(t, "blurring"), C(f, "scrolling")), v = Z(ea, e), w = ae(ea, e);
  return Y2(c, m), b.useEffect(function() {
    p.current && p.current.style && p.current.style.setProperty("display", "flex", "important");
  }, []), /* @__PURE__ */ b.createElement(hr, {
    innerRef: p
  }, /* @__PURE__ */ b.createElement(w, F({}, v, {
    className: h
  }), le(r) ? s : r));
}
ea.handledProps = ["as", "blurring", "centered", "children", "className", "content", "inverted", "mountNode", "scrolling"];
ea.propTypes = process.env.NODE_ENV !== "production" ? {
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
ea.create = qe(ea, function(e) {
  return {
    content: e
  };
});
function An(e) {
  var t = e.children, r = e.className, n = e.content, i = ee("header", r), s = Z(An, e), l = ae(An, e);
  return /* @__PURE__ */ b.createElement(l, F({}, s, {
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
An.create = qe(An, function(e) {
  return {
    content: e
  };
});
var Av = 0, iL = 50, oL = function(t) {
  var r = t.height + Av, n = t.height + Av, i = window.innerHeight, s = i / 2, l = -(n / 2), c = iL, f = s + l;
  return f + r + c < i;
}, sL = function(t, r, n) {
  var i = r && t ? -(n.height / 2) : 0, s = -(n.width / 2);
  return {
    marginLeft: s,
    marginTop: i
  };
}, lL = function() {
  return !window.ActiveXObject && "ActiveXObject" in window;
}, an = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.legacy = Da() && lL(), n.ref = /* @__PURE__ */ xr(), n.dimmerRef = /* @__PURE__ */ xr(), n.latestDocumentMouseDownEvent = null, n.getMountNode = function() {
      return Da() ? n.props.mountNode || document.body : null;
    }, n.handleActionsOverrides = function(c) {
      return {
        onActionClick: function(p, h) {
          ne(c, "onActionClick", p, h), ne(n.props, "onActionClick", p, n.props), n.handleClose(p);
        }
      };
    }, n.handleClose = function(c) {
      n.setState({
        open: !1
      }), ne(n.props, "onClose", c, F({}, n.props, {
        open: !1
      }));
    }, n.handleDocumentMouseDown = function(c) {
      n.latestDocumentMouseDownEvent = c;
    }, n.handleDocumentClick = function(c) {
      var f = n.props.closeOnDimmerClick, p = n.latestDocumentMouseDownEvent;
      n.latestDocumentMouseDownEvent = null, !(!f || La(n.ref.current, p) || La(n.ref.current, c)) && (n.setState({
        open: !1
      }), ne(n.props, "onClose", c, F({}, n.props, {
        open: !1
      })));
    }, n.handleIconOverrides = function(c) {
      return {
        onClick: function(p) {
          ne(c, "onClick", p), n.handleClose(p);
        }
      };
    }, n.handleOpen = function(c) {
      ne(n.props, "onOpen", c, F({}, n.props, {
        open: !0
      })), n.setState({
        open: !0
      });
    }, n.handlePortalMount = function(c) {
      var f = n.props.eventPool;
      n.setState({
        scrolling: !1
      }), n.setPositionAndClassNames(), $l.sub("mousedown", n.handleDocumentMouseDown, {
        pool: f,
        target: n.dimmerRef.current
      }), $l.sub("click", n.handleDocumentClick, {
        pool: f,
        target: n.dimmerRef.current
      }), ne(n.props, "onMount", c, n.props);
    }, n.handlePortalUnmount = function(c) {
      var f = n.props.eventPool;
      cancelAnimationFrame(n.animationRequestId), $l.unsub("mousedown", n.handleDocumentMouseDown, {
        pool: f,
        target: n.dimmerRef.current
      }), $l.unsub("click", n.handleDocumentClick, {
        pool: f,
        target: n.dimmerRef.current
      }), ne(n.props, "onUnmount", c, n.props);
    }, n.setPositionAndClassNames = function() {
      var c = n.props.centered, f, p = {};
      if (n.ref.current) {
        var h = n.ref.current.getBoundingClientRect(), m = oL(h);
        f = !m;
        var v = n.legacy ? sL(m, c, h) : {};
        Fl(n.state.legacyStyles, v) || (p.legacyStyles = v), n.state.scrolling !== f && (p.scrolling = f);
      }
      Na(p) || n.setState(p), n.animationRequestId = requestAnimationFrame(n.setPositionAndClassNames);
    }, n.renderContent = function(c) {
      var f = n.props, p = f.actions, h = f.basic, m = f.children, v = f.className, w = f.closeIcon, O = f.content, T = f.header, _ = f.size, x = f.style, D = n.state, k = D.legacyStyles, z = D.scrolling, N = ee("ui", _, C(h, "basic"), C(n.legacy, "legacy"), C(z, "scrolling"), "modal transition visible active", v), B = ae(t, n.props), P = w === !0 ? "close" : w, $ = Ct.create(P, {
        overrideProps: n.handleIconOverrides
      });
      return /* @__PURE__ */ b.createElement(hr, {
        innerRef: n.ref
      }, /* @__PURE__ */ b.createElement(B, F({}, c, {
        className: N,
        style: F({}, k, x)
      }), $, le(m) ? /* @__PURE__ */ b.createElement(b.Fragment, null, An.create(T, {
        autoGenerateKey: !1
      }), xn.create(O, {
        autoGenerateKey: !1
      }), Va.create(p, {
        overrideProps: n.handleActionsOverrides
      })) : m));
    }, n;
  }
  var r = t.prototype;
  return r.componentWillUnmount = function() {
    this.handlePortalUnmount();
  }, r.render = function() {
    var i = this.props, s = i.centered, l = i.closeOnDocumentClick, c = i.dimmer, f = i.eventPool, p = i.trigger, h = this.state, m = h.open, v = h.scrolling, w = this.getMountNode();
    if (!Da())
      return /* @__PURE__ */ Nb(p) ? p : null;
    var O = Z(t, this.props), T = Af.handledProps, _ = RE(O, function(D, k, z) {
      return ro(T, z) || (D[z] = k), D;
    }, {}), x = lp(O, T);
    return /* @__PURE__ */ b.createElement(Af, F({
      closeOnDocumentClick: l
    }, x, {
      trigger: p,
      eventPool: f,
      mountNode: w,
      open: m,
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount
    }), /* @__PURE__ */ b.createElement(hr, {
      innerRef: this.dimmerRef
    }, ea.create(xc(c) ? c : {}, {
      autoGenerateKey: !1,
      defaultProps: {
        blurring: c === "blurring",
        inverted: c === "inverted"
      },
      overrideProps: {
        children: this.renderContent(_),
        centered: s,
        mountNode: w,
        scrolling: v
      }
    })));
  }, t;
}(to);
an.handledProps = ["actions", "as", "basic", "centered", "children", "className", "closeIcon", "closeOnDimmerClick", "closeOnDocumentClick", "content", "defaultOpen", "dimmer", "eventPool", "header", "mountNode", "onActionClick", "onClose", "onMount", "onOpen", "onUnmount", "open", "size", "style", "trigger"];
an.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions: fe,
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
  content: fe,
  /** Initial value of open. */
  defaultOpen: d.bool,
  /** A Modal can appear in a dimmer. */
  dimmer: d.oneOfType([d.bool, d.func, d.object, d.oneOf(["inverted", "blurring"])]),
  /** Event pool namespace that is used to handle component events */
  eventPool: d.string,
  /** Modal displayed above the content in bold. */
  header: fe,
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
an.defaultProps = {
  centered: !0,
  dimmer: !0,
  closeOnDimmerClick: !0,
  closeOnDocumentClick: !1,
  eventPool: "Modal"
};
an.autoControlledProps = ["open"];
an.Actions = Va;
an.Content = xn;
an.Description = cs;
an.Dimmer = ea;
an.Header = An;
const cL = an;
function us(e) {
  var t = e.children, r = e.className, n = e.content, i = ee("header", r), s = Z(us, e), l = ae(us, e);
  return /* @__PURE__ */ b.createElement(l, F({}, s, {
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
function uL(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var dL = {
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
}, fL = uL(dL);
const pL = fL;
var hL = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, gL = "\\u0300-\\u036f", mL = "\\ufe20-\\ufe2f", vL = "\\u20d0-\\u20ff", yL = gL + mL + vL, bL = "[" + yL + "]", EL = RegExp(bL, "g");
function Cf(e) {
  return e = ri(e), e && e.replace(hL, pL).replace(EL, "");
}
var wL = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function SL(e) {
  return e.match(wL) || [];
}
var _L = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function OL(e) {
  return _L.test(e);
}
var NE = "\\ud800-\\udfff", TL = "\\u0300-\\u036f", PL = "\\ufe20-\\ufe2f", xL = "\\u20d0-\\u20ff", AL = TL + PL + xL, IE = "\\u2700-\\u27bf", kE = "a-z\\xdf-\\xf6\\xf8-\\xff", CL = "\\xac\\xb1\\xd7\\xf7", $L = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", RL = "\\u2000-\\u206f", NL = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", DE = "A-Z\\xc0-\\xd6\\xd8-\\xde", IL = "\\ufe0e\\ufe0f", LE = CL + $L + RL + NL, ME = "['’]", Cv = "[" + LE + "]", kL = "[" + AL + "]", FE = "\\d+", DL = "[" + IE + "]", BE = "[" + kE + "]", UE = "[^" + NE + LE + FE + IE + kE + DE + "]", LL = "\\ud83c[\\udffb-\\udfff]", ML = "(?:" + kL + "|" + LL + ")", FL = "[^" + NE + "]", zE = "(?:\\ud83c[\\udde6-\\uddff]){2}", qE = "[\\ud800-\\udbff][\\udc00-\\udfff]", _i = "[" + DE + "]", BL = "\\u200d", $v = "(?:" + BE + "|" + UE + ")", UL = "(?:" + _i + "|" + UE + ")", Rv = "(?:" + ME + "(?:d|ll|m|re|s|t|ve))?", Nv = "(?:" + ME + "(?:D|LL|M|RE|S|T|VE))?", jE = ML + "?", HE = "[" + IL + "]?", zL = "(?:" + BL + "(?:" + [FL, zE, qE].join("|") + ")" + HE + jE + ")*", qL = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", jL = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", HL = HE + jE + zL, VL = "(?:" + [DL, zE, qE].join("|") + ")" + HL, WL = RegExp([
  _i + "?" + BE + "+" + Rv + "(?=" + [Cv, _i, "$"].join("|") + ")",
  UL + "+" + Nv + "(?=" + [Cv, _i + $v, "$"].join("|") + ")",
  _i + "?" + $v + "+" + Rv,
  _i + "+" + Nv,
  jL,
  qL,
  FE,
  VL
].join("|"), "g");
function GL(e) {
  return e.match(WL) || [];
}
function QL(e, t, r) {
  return e = ri(e), t = r ? void 0 : t, t === void 0 ? OL(e) ? GL(e) : SL(e) : e.match(t) || [];
}
var KL = "['’]", YL = RegExp(KL, "g");
function XL(e) {
  return function(t) {
    return $E(QL(Cf(t).replace(YL, "")), e, "");
  };
}
function JL(e) {
  return function(t) {
    t = ri(t);
    var r = sp(t) ? Tf(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? sE(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var ZL = JL("toUpperCase");
const eM = ZL;
var tM = XL(function(e, t, r) {
  return e + (r ? " " : "") + eM(t);
});
const rM = tM;
var Wa = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(c) {
      var f = n.props.disabled;
      f || ne(n.props, "onClick", c, n.props);
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.children, c = i.className, f = i.color, p = i.content, h = i.disabled, m = i.fitted, v = i.header, w = i.icon, O = i.link, T = i.name, _ = i.onClick, x = i.position, D = ee(f, x, C(s, "active"), C(h, "disabled"), C(w === !0 || w && !(T || p), "icon"), C(v, "header"), C(O, "link"), rt(m, "fitted"), "item", c), k = ae(t, this.props, function() {
      if (_)
        return "a";
    }), z = Z(t, this.props);
    return le(l) ? /* @__PURE__ */ b.createElement(k, F({}, z, {
      className: D,
      onClick: this.handleClick
    }), Ct.create(w, {
      autoGenerateKey: !1
    }), le(p) ? rM(T) : p) : /* @__PURE__ */ b.createElement(k, F({}, z, {
      className: D,
      onClick: this.handleClick
    }), l);
  }, t;
}(He);
Wa.handledProps = ["active", "as", "children", "className", "color", "content", "disabled", "fitted", "header", "icon", "index", "link", "name", "onClick", "position"];
Wa.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A menu item can be active. */
  active: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Additional colors can be specified. */
  color: d.oneOf(mr),
  /** Shorthand for primary content. */
  content: me,
  /** A menu item can be disabled. */
  disabled: d.bool,
  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: d.oneOfType([d.bool, d.oneOf(["horizontally", "vertically"])]),
  /** A menu item may include a header or may itself be a header. */
  header: d.bool,
  /** MenuItem can be only icon. */
  icon: d.oneOfType([d.bool, fe]),
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
Wa.create = qe(Wa, function(e) {
  return {
    content: e,
    name: e
  };
});
function ds(e) {
  var t = e.children, r = e.className, n = e.content, i = e.position, s = ee(i, "menu", r), l = Z(ds, e), c = ae(ds, e);
  return /* @__PURE__ */ b.createElement(c, F({}, l, {
    className: s
  }), le(t) ? n : t);
}
ds.handledProps = ["as", "children", "className", "content", "position"];
ds.propTypes = process.env.NODE_ENV !== "production" ? {
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
var Cn = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleItemOverrides = function(c) {
      return {
        onClick: function(p, h) {
          var m = h.index;
          n.setState({
            activeIndex: m
          }), ne(c, "onClick", p, h), ne(n.props, "onItemClick", p, h);
        }
      };
    }, n;
  }
  var r = t.prototype;
  return r.renderItems = function() {
    var i = this, s = this.props.items, l = this.state.activeIndex;
    return yt(s, function(c, f) {
      return Wa.create(c, {
        defaultProps: {
          active: parseInt(l, 10) === f,
          index: f
        },
        overrideProps: i.handleItemOverrides
      });
    });
  }, r.render = function() {
    var i = this.props, s = i.attached, l = i.borderless, c = i.children, f = i.className, p = i.color, h = i.compact, m = i.fixed, v = i.floated, w = i.fluid, O = i.icon, T = i.inverted, _ = i.pagination, x = i.pointing, D = i.secondary, k = i.size, z = i.stackable, N = i.tabular, B = i.text, P = i.vertical, $ = i.widths, I = ee("ui", p, k, C(l, "borderless"), C(h, "compact"), C(w, "fluid"), C(T, "inverted"), C(_, "pagination"), C(x, "pointing"), C(D, "secondary"), C(z, "stackable"), C(B, "text"), C(P, "vertical"), rt(s, "attached"), rt(v, "floated"), rt(O, "icon"), rt(N, "tabular"), Lt(m, "fixed"), Vt($, "item"), f, "menu"), U = Z(t, this.props), W = ae(t, this.props);
    return /* @__PURE__ */ b.createElement(W, F({}, U, {
      className: I
    }), le(c) ? this.renderItems() : c);
  }, t;
}(to);
Cn.handledProps = ["activeIndex", "as", "attached", "borderless", "children", "className", "color", "compact", "defaultActiveIndex", "fixed", "floated", "fluid", "icon", "inverted", "items", "onItemClick", "pagination", "pointing", "secondary", "size", "stackable", "tabular", "text", "vertical", "widths"];
Cn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: d.oneOf(mr),
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
  items: da,
  /**
   * onClick handler for MenuItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: Be([Ve(["children"]), d.func]),
  /** A pagination menu is specially formatted to present links to pages of content. */
  pagination: d.bool,
  /** A menu can point to show its relationship to nearby content. */
  pointing: d.bool,
  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary: d.bool,
  /** A menu can vary in size. */
  size: d.oneOf(Mt(Gt, "medium", "big")),
  /** A menu can stack at mobile resolutions. */
  stackable: d.bool,
  /** A menu can be formatted to show tabs of information. */
  tabular: d.oneOfType([d.bool, d.oneOf(["right"])]),
  /** A menu can be formatted for text content. */
  text: d.bool,
  /** A vertical menu displays elements vertically. */
  vertical: d.bool,
  /** A menu can have its items divided evenly. */
  widths: d.oneOf(Jt)
} : {};
Cn.autoControlledProps = ["activeIndex"];
Cn.Header = us;
Cn.Item = Wa;
Cn.Menu = ds;
Cn.create = qe(Cn, function(e) {
  return {
    items: e
  };
});
const Ci = Cn;
var fs = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(c) {
      ne(n.props, "onClick", c, n.props);
    }, n.handleKeyDown = function(c) {
      ne(n.props, "onKeyDown", c, n.props), St.getCode(c) === St.Enter && ne(n.props, "onClick", c, n.props);
    }, n.handleOverrides = function() {
      return {
        onClick: n.handleClick,
        onKeyDown: n.handleKeyDown
      };
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.type, c = this.props.disabled || l === "ellipsisItem";
    return Wa.create(this.props, {
      defaultProps: {
        active: s,
        "aria-current": s,
        "aria-disabled": c,
        disabled: c,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        tabIndex: c ? -1 : 0
      },
      overrideProps: this.handleOverrides
    });
  }, t;
}(He);
fs.handledProps = ["active", "disabled", "onClick", "onKeyDown", "type"];
fs.propTypes = process.env.NODE_ENV !== "production" ? {
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
fs.create = qe(fs, function(e) {
  return {
    content: e
  };
});
const VE = fs;
var ao = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleItemClick = function(c, f) {
      var p = f.value, h = n.state.activePage;
      +h != +p && (n.setState({
        activePage: p
      }), ne(n.props, "onPageChange", c, F({}, n.props, {
        activePage: p
      })));
    }, n.handleItemOverrides = function(c, f, p) {
      return function(h) {
        return {
          active: c,
          type: f,
          key: f + "-" + p,
          onClick: function(v, w) {
            ne(h, "onClick", v, w), w.type !== "ellipsisItem" && n.handleItemClick(v, w);
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
    var i = this, s = this.props, l = s["aria-label"], c = s.boundaryRange, f = s.disabled, p = s.ellipsisItem, h = s.siblingRange, m = s.totalPages, v = this.state.activePage, w = s2({
      activePage: v,
      boundaryRange: c,
      hideEllipsis: Ue(p),
      siblingRange: h,
      totalPages: m
    }), O = Z(t, this.props);
    return /* @__PURE__ */ b.createElement(Ci, F({}, O, {
      "aria-label": l,
      pagination: !0,
      role: "navigation"
    }), yt(w, function(T) {
      var _ = T.active, x = T.type, D = T.value;
      return VE.create(i.props[x], {
        defaultProps: {
          content: D,
          disabled: f,
          value: D
        },
        overrideProps: i.handleItemOverrides(_, x, D)
      });
    }));
  }, t;
}(to);
ao.handledProps = ["activePage", "aria-label", "boundaryRange", "defaultActivePage", "disabled", "ellipsisItem", "firstItem", "lastItem", "nextItem", "onPageChange", "pageItem", "prevItem", "siblingRange", "totalPages"];
ao.propTypes = process.env.NODE_ENV !== "production" ? {
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
  ellipsisItem: fe,
  /** A shorthand for PaginationItem. */
  firstItem: fe,
  /** A shorthand for PaginationItem. */
  lastItem: fe,
  /** A shorthand for PaginationItem. */
  nextItem: fe,
  /** A shorthand for PaginationItem. */
  pageItem: fe,
  /** A shorthand for PaginationItem. */
  prevItem: fe,
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
ao.autoControlledProps = ["activePage"];
ao.defaultProps = {
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
ao.Item = VE;
function nM(e, t, r) {
  return e == null ? e : hE(e, t, r);
}
var Ar = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.inputRef = /* @__PURE__ */ xr(), n.labelRef = /* @__PURE__ */ xr(), n.canToggle = function() {
      var c = n.props, f = c.disabled, p = c.radio, h = c.readOnly, m = n.state.checked;
      return !f && !h && !(p && m);
    }, n.computeTabIndex = function() {
      var c = n.props, f = c.disabled, p = c.tabIndex;
      return Ue(p) ? f ? -1 : 0 : p;
    }, n.handleClick = function(c) {
      var f = n.props.id, p = n.state, h = p.checked, m = p.indeterminate, v = ne(n.inputRef.current, "contains", c.target), w = ne(n.labelRef.current, "contains", c.target), O = !w && !v, T = !Ue(f), _ = w && T;
      _ || ne(n.props, "onClick", c, F({}, n.props, {
        checked: !h,
        indeterminate: !!m
      })), n.isClickFromMouse && (n.isClickFromMouse = !1, w && !T && n.handleChange(c), O && n.handleChange(c), w && T && c.stopPropagation());
    }, n.handleChange = function(c) {
      var f = n.state.checked;
      n.canToggle() && (ne(n.props, "onChange", c, F({}, n.props, {
        checked: !f,
        indeterminate: !1
      })), n.setState({
        checked: !f,
        indeterminate: !1
      }));
    }, n.handleMouseDown = function(c) {
      var f = n.state, p = f.checked, h = f.indeterminate;
      ne(n.props, "onMouseDown", c, F({}, n.props, {
        checked: !!p,
        indeterminate: !!h
      })), c.defaultPrevented || ne(n.inputRef.current, "focus"), c.preventDefault();
    }, n.handleMouseUp = function(c) {
      var f = n.state, p = f.checked, h = f.indeterminate;
      n.isClickFromMouse = !0, ne(n.props, "onMouseUp", c, F({}, n.props, {
        checked: !!p,
        indeterminate: !!h
      }));
    }, n.setIndeterminate = function() {
      var c = n.state.indeterminate;
      nM(n.inputRef, "current.indeterminate", !!c);
    }, n;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.setIndeterminate();
  }, r.componentDidUpdate = function() {
    this.setIndeterminate();
  }, r.render = function() {
    var i = this.props, s = i.className, l = i.disabled, c = i.label, f = i.id, p = i.name, h = i.radio, m = i.readOnly, v = i.slider, w = i.toggle, O = i.type, T = i.value, _ = this.state, x = _.checked, D = _.indeterminate, k = ee(
      "ui",
      C(x, "checked"),
      C(l, "disabled"),
      C(D, "indeterminate"),
      // auto apply fitted class to compact white space when there is no label
      // https://semantic-ui.com/modules/checkbox.html#fitted
      C(Ue(c), "fitted"),
      C(h, "radio"),
      C(m, "read-only"),
      C(v, "slider"),
      C(w, "toggle"),
      "checkbox",
      s
    ), z = Z(t, this.props), N = ae(t, this.props), B = dp(z, {
      htmlProps: PE
    }), P = B[0], $ = B[1], I = Pf(c, {
      defaultProps: {
        htmlFor: f
      },
      autoGenerateKey: !1
    }) || /* @__PURE__ */ b.createElement("label", {
      htmlFor: f
    });
    return /* @__PURE__ */ b.createElement(N, F({}, $, {
      className: k,
      onClick: this.handleClick,
      onChange: this.handleChange,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp
    }), /* @__PURE__ */ b.createElement(hr, {
      innerRef: this.inputRef
    }, /* @__PURE__ */ b.createElement("input", F({}, P, {
      checked: x,
      className: "hidden",
      disabled: l,
      id: f,
      name: p,
      readOnly: !0,
      tabIndex: this.computeTabIndex(),
      type: O,
      value: T
    }))), /* @__PURE__ */ b.createElement(hr, {
      innerRef: this.labelRef
    }, I));
  }, t;
}(to);
Ar.handledProps = ["as", "checked", "className", "defaultChecked", "defaultIndeterminate", "disabled", "fitted", "id", "indeterminate", "label", "name", "onChange", "onClick", "onMouseDown", "onMouseUp", "radio", "readOnly", "slider", "tabIndex", "toggle", "type", "value"];
Ar.propTypes = process.env.NODE_ENV !== "production" ? {
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
  label: fe,
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
  radio: Be([d.bool, Ve(["slider", "toggle"])]),
  /** A checkbox can be read-only and unable to change states. */
  readOnly: d.bool,
  /** Format to emphasize the current selection state. */
  slider: Be([d.bool, Ve(["radio", "toggle"])]),
  /** A checkbox can receive focus. */
  tabIndex: d.oneOfType([d.number, d.string]),
  /** Format to show an on or off choice. */
  toggle: Be([d.bool, Ve(["radio", "slider"])]),
  /** HTML input type, either checkbox or radio. */
  type: d.oneOf(["checkbox", "radio"]),
  /** The HTML input value. */
  value: d.oneOfType([d.string, d.number])
} : {};
Ar.defaultProps = {
  type: "checkbox"
};
Ar.autoControlledProps = ["checked", "indeterminate"];
function io(e) {
  var t = e.slider, r = e.toggle, n = e.type, i = Z(io, e), s = !(t || r) || void 0;
  return /* @__PURE__ */ b.createElement(Ar, F({}, i, {
    type: n,
    radio: s,
    slider: t,
    toggle: r
  }));
}
io.handledProps = ["slider", "toggle", "type"];
io.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Format to emphasize the current selection state. */
  slider: Ar.propTypes.slider,
  /** Format to show an on or off choice. */
  toggle: Ar.propTypes.toggle,
  /** HTML input type, either checkbox or radio. */
  type: Ar.propTypes.type
} : {};
io.defaultProps = {
  type: "radio"
};
function aM(e) {
  for (var t = -1, r = e == null ? 0 : e.length, n = 0, i = []; ++t < r; ) {
    var s = e[t];
    s && (i[n++] = s);
  }
  return i;
}
function iM(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
function oM(e, t) {
  var r = !0;
  return eo(e, function(n, i, s) {
    return r = !!t(n, i, s), r;
  }), r;
}
function sM(e, t, r) {
  var n = _t(e) ? iM : oM;
  return r && ts(e, t, r) && (t = void 0), n(e, ua(t));
}
function lM(e, t, r) {
  var n = e == null ? 0 : e.length;
  return n ? (t = r || t === void 0 ? 1 : Cs(t), t = n - t, _c(e, 0, t < 0 ? 0 : t)) : [];
}
var cM = rE("length");
const uM = cM;
var WE = "\\ud800-\\udfff", dM = "\\u0300-\\u036f", fM = "\\ufe20-\\ufe2f", pM = "\\u20d0-\\u20ff", hM = dM + fM + pM, gM = "\\ufe0e\\ufe0f", mM = "[" + WE + "]", $f = "[" + hM + "]", Rf = "\\ud83c[\\udffb-\\udfff]", vM = "(?:" + $f + "|" + Rf + ")", GE = "[^" + WE + "]", QE = "(?:\\ud83c[\\udde6-\\uddff]){2}", KE = "[\\ud800-\\udbff][\\udc00-\\udfff]", yM = "\\u200d", YE = vM + "?", XE = "[" + gM + "]?", bM = "(?:" + yM + "(?:" + [GE, QE, KE].join("|") + ")" + XE + YE + ")*", EM = XE + YE + bM, wM = "(?:" + [GE + $f + "?", $f, QE, KE, mM].join("|") + ")", Iv = RegExp(Rf + "(?=" + Rf + ")|" + wM + EM, "g");
function SM(e) {
  for (var t = Iv.lastIndex = 0; Iv.test(e); )
    ++t;
  return t;
}
function _M(e) {
  return sp(e) ? SM(e) : uM(e);
}
var OM = "[object Map]", TM = "[object Set]";
function PM(e) {
  if (e == null)
    return 0;
  if (Fn(e))
    return up(e) ? _M(e) : e.length;
  var t = Yl(e);
  return t == OM || t == TM ? e.size : np(e).length;
}
var xM = Zi(function(e) {
  return _E($s(e, 1, es, !0));
});
const kv = xM;
var AM = ["ad", "andorra", "ae", "united arab emirates", "uae", "af", "afghanistan", "ag", "antigua", "ai", "anguilla", "al", "albania", "am", "armenia", "an", "netherlands antilles", "ao", "angola", "ar", "argentina", "as", "american samoa", "at", "austria", "au", "australia", "aw", "aruba", "ax", "aland islands", "az", "azerbaijan", "ba", "bosnia", "bb", "barbados", "bd", "bangladesh", "be", "belgium", "bf", "burkina faso", "bg", "bulgaria", "bh", "bahrain", "bi", "burundi", "bj", "benin", "bm", "bermuda", "bn", "brunei", "bo", "bolivia", "br", "brazil", "bs", "bahamas", "bt", "bhutan", "bv", "bouvet island", "bw", "botswana", "by", "belarus", "bz", "belize", "ca", "canada", "cc", "cocos islands", "cd", "congo", "cf", "central african republic", "cg", "congo brazzaville", "ch", "switzerland", "ci", "cote divoire", "ck", "cook islands", "cl", "chile", "cm", "cameroon", "cn", "china", "co", "colombia", "cr", "costa rica", "cs", "cu", "cuba", "cv", "cape verde", "cx", "christmas island", "cy", "cyprus", "cz", "czech republic", "de", "germany", "dj", "djibouti", "dk", "denmark", "dm", "dominica", "do", "dominican republic", "dz", "algeria", "ec", "ecuador", "england", "gb eng", "ee", "estonia", "eg", "egypt", "eh", "western sahara", "er", "eritrea", "es", "spain", "et", "ethiopia", "eu", "european union", "fi", "finland", "fj", "fiji", "fk", "falkland islands", "fm", "micronesia", "fo", "faroe islands", "fr", "france", "ga", "gabon", "gb", "uk", "united kingdom", "gd", "grenada", "ge", "georgia", "gf", "french guiana", "gh", "ghana", "gi", "gibraltar", "gl", "greenland", "gm", "gambia", "gn", "guinea", "gp", "guadeloupe", "gq", "equatorial guinea", "gr", "greece", "gs", "sandwich islands", "gt", "guatemala", "gu", "guam", "gw", "guinea-bissau", "gy", "guyana", "hk", "hong kong", "hm", "heard island", "hn", "honduras", "hr", "croatia", "ht", "haiti", "hu", "hungary", "id", "indonesia", "ie", "ireland", "il", "israel", "in", "india", "io", "indian ocean territory", "iq", "iraq", "ir", "iran", "is", "iceland", "it", "italy", "jm", "jamaica", "jo", "jordan", "jp", "japan", "ke", "kenya", "kg", "kyrgyzstan", "kh", "cambodia", "ki", "kiribati", "km", "comoros", "kn", "saint kitts and nevis", "kp", "north korea", "kr", "south korea", "kw", "kuwait", "ky", "cayman islands", "kz", "kazakhstan", "la", "laos", "lb", "lebanon", "lc", "saint lucia", "li", "liechtenstein", "lk", "sri lanka", "lr", "liberia", "ls", "lesotho", "lt", "lithuania", "lu", "luxembourg", "lv", "latvia", "ly", "libya", "ma", "morocco", "mc", "monaco", "md", "moldova", "me", "montenegro", "mg", "madagascar", "mh", "marshall islands", "mk", "macedonia", "ml", "mali", "mm", "myanmar", "burma", "mn", "mongolia", "mo", "macau", "mp", "northern mariana islands", "mq", "martinique", "mr", "mauritania", "ms", "montserrat", "mt", "malta", "mu", "mauritius", "mv", "maldives", "mw", "malawi", "mx", "mexico", "my", "malaysia", "mz", "mozambique", "na", "namibia", "nc", "new caledonia", "ne", "niger", "nf", "norfolk island", "ng", "nigeria", "ni", "nicaragua", "nl", "netherlands", "no", "norway", "np", "nepal", "nr", "nauru", "nu", "niue", "nz", "new zealand", "om", "oman", "pa", "panama", "pe", "peru", "pf", "french polynesia", "pg", "new guinea", "ph", "philippines", "pk", "pakistan", "pl", "poland", "pm", "saint pierre", "pn", "pitcairn islands", "pr", "puerto rico", "ps", "palestine", "pt", "portugal", "pw", "palau", "py", "paraguay", "qa", "qatar", "re", "reunion", "ro", "romania", "rs", "serbia", "ru", "russia", "rw", "rwanda", "sa", "saudi arabia", "sb", "solomon islands", "sc", "seychelles", "gb sct", "scotland", "sd", "sudan", "se", "sweden", "sg", "singapore", "sh", "saint helena", "si", "slovenia", "sj", "svalbard", "jan mayen", "sk", "slovakia", "sl", "sierra leone", "sm", "san marino", "sn", "senegal", "so", "somalia", "sr", "suriname", "st", "sao tome", "sv", "el salvador", "sy", "syria", "sz", "swaziland", "tc", "caicos islands", "td", "chad", "tf", "french territories", "tg", "togo", "th", "thailand", "tj", "tajikistan", "tk", "tokelau", "tl", "timorleste", "tm", "turkmenistan", "tn", "tunisia", "to", "tonga", "tr", "turkey", "tt", "trinidad", "tv", "tuvalu", "tw", "taiwan", "tz", "tanzania", "ua", "ukraine", "ug", "uganda", "um", "us minor islands", "us", "america", "united states", "uy", "uruguay", "uz", "uzbekistan", "va", "vatican city", "vc", "saint vincent", "ve", "venezuela", "vg", "british virgin islands", "vi", "us virgin islands", "vn", "vietnam", "vu", "vanuatu", "gb wls", "wales", "wf", "wallis and futuna", "ws", "samoa", "ye", "yemen", "yt", "mayotte", "za", "south africa", "zm", "zambia", "zw", "zimbabwe"], ki = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.className, l = i.name, c = ee(l, "flag", s), f = Z(t, this.props), p = ae(t, this.props);
    return /* @__PURE__ */ b.createElement(p, F({}, f, {
      className: c
    }));
  }, t;
}(Rb);
ki.handledProps = ["as", "className", "name"];
ki.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Additional classes. */
  className: d.string,
  /** Flag name, can use the two digit country code, the full name, or a common alias. */
  name: yE(AM)
} : {};
ki.defaultProps = {
  as: "i"
};
ki.create = qe(ki, function(e) {
  return {
    name: e
  };
});
const JE = ki;
function ps(e) {
  var t = e.className, r = ee("divider", t), n = Z(ps, e), i = ae(ps, e);
  return /* @__PURE__ */ b.createElement(i, F({}, n, {
    className: r
  }));
}
ps.handledProps = ["as", "className"];
ps.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Additional classes. */
  className: d.string
} : {};
var hs = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(c) {
      ne(n.props, "onClick", c, n.props);
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.children, c = i.className, f = i.content, p = i.disabled, h = i.description, m = i.flag, v = i.icon, w = i.image, O = i.label, T = i.selected, _ = i.text, x = ee(C(s, "active"), C(p, "disabled"), C(T, "selected"), "item", c), D = Ue(v) ? hk(l, "DropdownMenu") && "dropdown" : v, k = Z(t, this.props), z = ae(t, this.props), N = {
      role: "option",
      "aria-disabled": p,
      "aria-checked": s,
      "aria-selected": T
    };
    if (!le(l))
      return /* @__PURE__ */ b.createElement(z, F({}, k, N, {
        className: x,
        onClick: this.handleClick
      }), l);
    var B = JE.create(m, {
      autoGenerateKey: !1
    }), P = Ct.create(D, {
      autoGenerateKey: !1
    }), $ = Ut.create(w, {
      autoGenerateKey: !1
    }), I = or.create(O, {
      autoGenerateKey: !1
    }), U = Ai("span", function(X) {
      return {
        children: X
      };
    }, h, {
      defaultProps: {
        className: "description"
      },
      autoGenerateKey: !1
    }), W = Ai("span", function(X) {
      return {
        children: X
      };
    }, le(f) ? _ : f, {
      defaultProps: {
        className: "text"
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ b.createElement(z, F({}, k, N, {
      className: x,
      onClick: this.handleClick
    }), $, P, B, I, U, W);
  }, t;
}(He);
hs.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "flag", "icon", "image", "label", "onClick", "selected", "text", "value"];
hs.propTypes = process.env.NODE_ENV !== "production" ? {
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
  description: fe,
  /** A dropdown item can be disabled. */
  disabled: d.bool,
  /** Shorthand for Flag. */
  flag: fe,
  /** Shorthand for Icon. */
  icon: fe,
  /** Shorthand for Image. */
  image: fe,
  /** Shorthand for Label. */
  label: fe,
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
hs.create = qe(hs, function(e) {
  return e;
});
const pp = hs;
function ta(e) {
  var t = e.children, r = e.className, n = e.content, i = e.icon, s = ee("header", r), l = Z(ta, e), c = ae(ta, e);
  return le(t) ? /* @__PURE__ */ b.createElement(c, F({}, l, {
    className: s
  }), Ct.create(i, {
    autoGenerateKey: !1
  }), n) : /* @__PURE__ */ b.createElement(c, F({}, l, {
    className: s
  }), t);
}
ta.handledProps = ["as", "children", "className", "content", "icon"];
ta.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function) */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** Shorthand for Icon. */
  icon: fe
} : {};
ta.create = qe(ta, function(e) {
  return {
    content: e
  };
});
function Di(e) {
  var t = e.children, r = e.className, n = e.content, i = e.direction, s = e.open, l = e.scrolling, c = ee(i, C(s, "visible"), C(l, "scrolling"), "menu transition", r), f = Z(Di, e), p = ae(Di, e);
  return /* @__PURE__ */ b.createElement(p, F({}, f, {
    className: c
  }), le(t) ? n : t);
}
Di.handledProps = ["as", "children", "className", "content", "direction", "open", "scrolling"];
Di.propTypes = process.env.NODE_ENV !== "production" ? {
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
var Li = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleChange = function(c) {
      var f = tn(c, "target.value");
      ne(n.props, "onChange", c, F({}, n.props, {
        value: f
      }));
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.autoComplete, l = i.className, c = i.tabIndex, f = i.type, p = i.value, h = ee("search", l), m = Z(t, this.props);
    return /* @__PURE__ */ b.createElement("input", F({}, m, {
      "aria-autocomplete": "list",
      autoComplete: s,
      className: h,
      onChange: this.handleChange,
      tabIndex: c,
      type: f,
      value: p
    }));
  }, t;
}(He);
Li.handledProps = ["as", "autoComplete", "className", "tabIndex", "type", "value"];
Li.propTypes = process.env.NODE_ENV !== "production" ? {
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
Li.defaultProps = {
  autoComplete: "off",
  type: "text"
};
Li.create = qe(Li, function(e) {
  return {
    type: e
  };
});
const ZE = Li;
function ra(e) {
  var t = e.children, r = e.className, n = e.content, i = ee("divider", r), s = Z(ra, e), l = ae(ra, e);
  return /* @__PURE__ */ b.createElement(l, F({
    "aria-atomic": !0,
    "aria-live": "polite",
    role: "alert"
  }, s, {
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
ra.create = qe(ra, function(e) {
  return {
    content: e
  };
});
var ew = /[\\^$.*+?()[\]{}|]/g, CM = RegExp(ew.source);
function $M(e) {
  return e = ri(e), e && CM.test(e) ? e.replace(ew, "\\$&") : e;
}
function Ti(e) {
  var t = e.additionLabel, r = e.additionPosition, n = e.allowAdditions, i = e.deburr, s = e.multiple, l = e.options, c = e.search, f = e.searchQuery, p = e.value, h = l;
  if (s && (h = bf(h, function(T) {
    return !ro(p, T.value);
  })), c && f)
    if (Ni(c))
      h = c(h, f);
    else {
      var m = i ? Cf(f) : f, v = new RegExp($M(m), "i");
      h = bf(h, function(T) {
        return v.test(i ? Cf(T.text) : T.text);
      });
    }
  if (n && c && f && !Wo(h, {
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
Ti.handledProps = [];
function Dv(e) {
  var t = e.additionLabel, r = e.additionPosition, n = e.allowAdditions, i = e.deburr, s = e.multiple, l = e.options, c = e.search, f = e.searchQuery, p = e.selectedIndex, h = e.value, m = Ti({
    value: h,
    options: l,
    searchQuery: f,
    additionLabel: t,
    additionPosition: r,
    allowAdditions: n,
    deburr: i,
    multiple: s,
    search: c
  }), v = RE(m, function(_, x, D) {
    return x.disabled || _.push(D), _;
  }, []), w;
  if (!p || p < 0) {
    var O = v[0];
    w = s ? O : wf(m, ["value", h]) || v[0];
  } else if (s)
    w = iE(v, function(_) {
      return _ >= p;
    }), p >= m.length - 1 && (w = v[v.length - 1]);
  else {
    var T = wf(m, ["value", h]);
    w = ro(v, T) ? T : void 0;
  }
  return (!w || w < 0) && (w = v[0]), w;
}
var Lv = function(t, r) {
  return Ue(t) ? r : t;
}, Mv = function(t) {
  return t && t.map(function(r) {
    return lp(r, ["key", "value"]);
  });
};
function tw(e) {
  var t = e.flag, r = e.image, n = e.text;
  return Ni(n) ? n : {
    content: /* @__PURE__ */ b.createElement(b.Fragment, null, JE.create(t), Ut.create(r), n)
  };
}
var ht = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.searchRef = /* @__PURE__ */ xr(), n.sizerRef = /* @__PURE__ */ xr(), n.ref = /* @__PURE__ */ xr(), n.handleChange = function(c, f) {
      ne(n.props, "onChange", c, F({}, n.props, {
        value: f
      }));
    }, n.closeOnChange = function(c) {
      var f = n.props, p = f.closeOnChange, h = f.multiple, m = Ho(p) ? !h : p;
      m && n.close(c, SE);
    }, n.closeOnEscape = function(c) {
      n.props.closeOnEscape && St.getCode(c) === St.Escape && (c.preventDefault(), n.close(c));
    }, n.moveSelectionOnKeyDown = function(c) {
      var f, p = n.props, h = p.multiple, m = p.selectOnNavigation, v = n.state.open;
      if (v) {
        var w = (f = {}, f[St.ArrowDown] = 1, f[St.ArrowUp] = -1, f), O = w[St.getCode(c)];
        if (O !== void 0) {
          c.preventDefault();
          var T = n.getSelectedIndexAfterMove(O);
          !h && m && n.makeSelectedItemActive(c, T), n.setState({
            selectedIndex: T
          });
        }
      }
    }, n.openOnSpace = function(c) {
      var f, p, h, m = n.state.focus && !n.state.open && St.getCode(c) === St.Spacebar, v = ((f = c.target) == null ? void 0 : f.tagName) !== "INPUT" && ((p = c.target) == null ? void 0 : p.tagName) !== "TEXTAREA" && ((h = c.target) == null ? void 0 : h.isContentEditable) !== !0;
      m && (v && c.preventDefault(), n.open(c));
    }, n.openOnArrow = function(c) {
      var f = n.state, p = f.focus, h = f.open;
      if (p && !h) {
        var m = St.getCode(c);
        (m === St.ArrowDown || m === St.ArrowUp) && (c.preventDefault(), n.open(c));
      }
    }, n.makeSelectedItemActive = function(c, f) {
      var p = n.state, h = p.open, m = p.value, v = n.props.multiple, w = n.getSelectedItem(f), O = tn(w, "value"), T = tn(w, "disabled");
      if (Ue(O) || !h || T)
        return m;
      var _ = v ? kv(m, [O]) : O, x = v ? !!Sf(_, m).length : _ !== m;
      return x && (n.setState({
        value: _
      }), n.handleChange(c, _), w["data-additional"] && ne(n.props, "onAddItem", c, F({}, n.props, {
        value: O
      }))), m;
    }, n.selectItemOnEnter = function(c) {
      var f = n.props.search, p = n.state, h = p.open, m = p.selectedIndex;
      if (h) {
        var v = St.getCode(c) === St.Enter || // https://github.com/Semantic-Org/Semantic-UI-React/pull/3766
        !f && St.getCode(c) === St.Spacebar;
        if (v) {
          c.preventDefault();
          var w = PM(Ti({
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
            var O = n.makeSelectedItemActive(c, m);
            n.setState({
              selectedIndex: Dv({
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
            }), n.closeOnChange(c), n.clearSearchQuery(), f && ne(n.searchRef.current, "focus");
          }
        }
      }
    }, n.removeItemOnBackspace = function(c) {
      var f = n.props, p = f.multiple, h = f.search, m = n.state, v = m.searchQuery, w = m.value;
      if (St.getCode(c) === St.Backspace && !(v || !h || !p || Na(w))) {
        c.preventDefault();
        var O = lM(w);
        n.setState({
          value: O
        }), n.handleChange(c, O);
      }
    }, n.closeOnDocumentClick = function(c) {
      n.props.closeOnBlur && (n.ref.current && La(n.ref.current, c) || n.close());
    }, n.handleMouseDown = function(c) {
      n.isMouseDown = !0, ne(n.props, "onMouseDown", c, n.props), document.addEventListener("mouseup", n.handleDocumentMouseUp);
    }, n.handleDocumentMouseUp = function() {
      n.isMouseDown = !1, document.removeEventListener("mouseup", n.handleDocumentMouseUp);
    }, n.handleClick = function(c) {
      var f = n.props, p = f.minCharacters, h = f.search, m = n.state, v = m.open, w = m.searchQuery;
      if (ne(n.props, "onClick", c, n.props), c.stopPropagation(), !h)
        return n.toggle(c);
      if (v) {
        ne(n.searchRef.current, "focus");
        return;
      }
      if (w.length >= p || p === 1) {
        n.open(c);
        return;
      }
      ne(n.searchRef.current, "focus");
    }, n.handleIconClick = function(c) {
      var f = n.props.clearable, p = n.hasValue();
      ne(n.props, "onClick", c, n.props), c.stopPropagation(), f && p ? n.clearValue(c) : n.toggle(c);
    }, n.handleItemClick = function(c, f) {
      var p = n.props, h = p.multiple, m = p.search, v = n.state.value, w = f.value;
      if (c.stopPropagation(), (h || f.disabled) && c.nativeEvent.stopImmediatePropagation(), !f.disabled) {
        var O = f["data-additional"], T = h ? kv(n.state.value, [w]) : w, _ = h ? !!Sf(T, v).length : T !== v;
        _ && (n.setState({
          value: T
        }), n.handleChange(c, T)), n.clearSearchQuery(), ne(m ? n.searchRef.current : n.ref.current, "focus"), n.closeOnChange(c), O && ne(n.props, "onAddItem", c, F({}, n.props, {
          value: w
        }));
      }
    }, n.handleFocus = function(c) {
      var f = n.state.focus;
      f || (ne(n.props, "onFocus", c, n.props), n.setState({
        focus: !0
      }));
    }, n.handleBlur = function(c) {
      var f = tn(c, "currentTarget");
      if (!(f && f.contains(document.activeElement))) {
        var p = n.props, h = p.closeOnBlur, m = p.multiple, v = p.selectOnBlur;
        n.isMouseDown || (ne(n.props, "onBlur", c, n.props), v && !m && (n.makeSelectedItemActive(c, n.state.selectedIndex), h && n.close()), n.setState({
          focus: !1
        }), n.clearSearchQuery());
      }
    }, n.handleSearchChange = function(c, f) {
      var p = f.value;
      c.stopPropagation();
      var h = n.props.minCharacters, m = n.state.open, v = p;
      if (ne(n.props, "onSearchChange", c, F({}, n.props, {
        searchQuery: v
      })), n.setState({
        searchQuery: v,
        selectedIndex: 0
      }), !m && v.length >= h) {
        n.open();
        return;
      }
      m && h !== 1 && v.length < h && n.close();
    }, n.handleKeyDown = function(c) {
      n.moveSelectionOnKeyDown(c), n.openOnArrow(c), n.openOnSpace(c), n.selectItemOnEnter(c), ne(n.props, "onKeyDown", c);
    }, n.getSelectedItem = function(c) {
      var f = Ti({
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
      return tn(f, "[" + c + "]");
    }, n.getItemByValue = function(c) {
      var f = n.props.options;
      return iE(f, {
        value: c
      });
    }, n.getDropdownAriaOptions = function() {
      var c = n.props, f = c.loading, p = c.disabled, h = c.search, m = c.multiple, v = n.state.open, w = {
        role: h ? "combobox" : "listbox",
        "aria-busy": f,
        "aria-disabled": p,
        "aria-expanded": !!v
      };
      return w.role === "listbox" && (w["aria-multiselectable"] = m), w;
    }, n.clearSearchQuery = function() {
      var c = n.state.searchQuery;
      c === void 0 || c === "" || n.setState({
        searchQuery: ""
      });
    }, n.handleLabelClick = function(c, f) {
      c.stopPropagation(), n.setState({
        selectedLabel: f.value
      }), ne(n.props, "onLabelClick", c, f);
    }, n.handleLabelRemove = function(c, f) {
      c.stopPropagation();
      var p = n.state.value, h = Mt(p, f.value);
      n.setState({
        value: h
      }), n.handleChange(c, h);
    }, n.getSelectedIndexAfterMove = function(c, f) {
      f === void 0 && (f = n.state.selectedIndex);
      var p = Ti({
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
      if (!(p === void 0 || sM(p, "disabled"))) {
        var h = p.length - 1, m = n.props.wrapSelection, v = f + c;
        return !m && (v > h || v < 0) ? v = f : v > h ? v = 0 : v < 0 && (v = h), p[v].disabled ? n.getSelectedIndexAfterMove(c, v) : v;
      }
    }, n.handleIconOverrides = function(c) {
      var f = n.props.clearable, p = ee(f && n.hasValue() && "clear", c.className);
      return {
        className: p,
        onClick: function(m) {
          ne(c, "onClick", m, c), n.handleIconClick(m);
        }
      };
    }, n.clearValue = function(c) {
      var f = n.props.multiple, p = f ? [] : "";
      n.setState({
        value: p
      }), n.handleChange(c, p);
    }, n.computeSearchInputTabIndex = function() {
      var c = n.props, f = c.disabled, p = c.tabIndex;
      return Ue(p) ? f ? -1 : 0 : p;
    }, n.computeSearchInputWidth = function() {
      var c = n.state.searchQuery;
      if (n.sizerRef.current && c) {
        n.sizerRef.current.style.display = "inline", n.sizerRef.current.textContent = c;
        var f = Math.ceil(n.sizerRef.current.getBoundingClientRect().width);
        return n.sizerRef.current.style.removeProperty("display"), f;
      }
    }, n.computeTabIndex = function() {
      var c = n.props, f = c.disabled, p = c.search, h = c.tabIndex;
      if (!p)
        return f ? -1 : Ue(h) ? 0 : h;
    }, n.handleSearchInputOverrides = function(c) {
      return {
        onChange: function(p, h) {
          ne(c, "onChange", p, h), n.handleSearchChange(p, h);
        }
      };
    }, n.hasValue = function() {
      var c = n.props.multiple, f = n.state.value;
      return c ? !Na(f) : !Ue(f) && f !== "";
    }, n.scrollSelectedItemIntoView = function() {
      if (n.ref.current) {
        var c = n.ref.current.querySelector(".menu.visible");
        if (c) {
          var f = c.querySelector(".item.selected");
          if (f) {
            var p = f.offsetTop < c.scrollTop, h = f.offsetTop + f.clientHeight > c.scrollTop + c.clientHeight;
            p ? c.scrollTop = f.offsetTop : h && (c.scrollTop = f.offsetTop + f.clientHeight - c.clientHeight);
          }
        }
      }
    }, n.setOpenDirection = function() {
      if (n.ref.current) {
        var c = n.ref.current.querySelector(".menu.visible");
        if (c) {
          var f = n.ref.current.getBoundingClientRect(), p = c.clientHeight, h = document.documentElement.clientHeight - f.top - f.height - p, m = f.top - p, v = h < 0 && m > h;
          !v != !n.state.upward && n.setState({
            upward: v
          });
        }
      }
    }, n.open = function(c, f) {
      c === void 0 && (c = null), f === void 0 && (f = !0);
      var p = n.props, h = p.disabled, m = p.search;
      h || (m && ne(n.searchRef.current, "focus"), ne(n.props, "onOpen", c, n.props), f && n.setState({
        open: !0
      }), n.scrollSelectedItemIntoView());
    }, n.close = function(c, f) {
      f === void 0 && (f = n.handleClose), n.state.open && (ne(n.props, "onClose", c, n.props), n.setState({
        open: !1
      }, f));
    }, n.handleClose = function() {
      var c = document.activeElement === n.searchRef.current;
      !c && n.ref.current && n.ref.current.blur();
      var f = document.activeElement === n.ref.current, p = c || f;
      n.setState({
        focus: p
      });
    }, n.toggle = function(c) {
      return n.state.open ? n.close(c) : n.open(c);
    }, n.renderText = function() {
      var c = n.props, f = c.multiple, p = c.placeholder, h = c.search, m = c.text, v = n.state, w = v.searchQuery, O = v.selectedIndex, T = v.value, _ = v.open, x = n.hasValue(), D = ee(p && !x && "default", "text", h && w && "filtered"), k = p, z;
      return m ? k = m : _ && !f ? z = n.getSelectedItem(O) : x && (z = n.getItemByValue(T)), ra.create(z ? tw(z) : k, {
        defaultProps: {
          className: D
        }
      });
    }, n.renderSearchInput = function() {
      var c = n.props, f = c.search, p = c.searchInput, h = n.state.searchQuery;
      return f && /* @__PURE__ */ b.createElement(hr, {
        innerRef: n.searchRef
      }, ZE.create(p, {
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
      var c = n.props, f = c.search, p = c.multiple;
      return f && p && /* @__PURE__ */ b.createElement("span", {
        className: "sizer",
        ref: n.sizerRef
      });
    }, n.renderLabels = function() {
      var c = n.props, f = c.multiple, p = c.renderLabel, h = n.state, m = h.selectedLabel, v = h.value;
      if (!(!f || Na(v))) {
        var w = yt(v, n.getItemByValue);
        return yt(aM(w), function(O, T) {
          var _ = {
            active: O.value === m,
            as: "a",
            key: Lv(O.key, O.value),
            onClick: n.handleLabelClick,
            onRemove: n.handleLabelRemove,
            value: O.value
          };
          return or.create(p(O, T, _), {
            defaultProps: _
          });
        });
      }
    }, n.renderOptions = function() {
      var c = n.props, f = c.lazyLoad, p = c.multiple, h = c.search, m = c.noResultsMessage, v = n.state, w = v.open, O = v.selectedIndex, T = v.value;
      if (f && !w)
        return null;
      var _ = Ti({
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
      if (m !== null && h && Na(_))
        return /* @__PURE__ */ b.createElement("div", {
          className: "message"
        }, m);
      var x = p ? function(D) {
        return ro(T, D);
      } : function(D) {
        return D === T;
      };
      return yt(_, function(D, k) {
        return pp.create(F({
          active: x(D.value),
          selected: O === k
        }, D, {
          key: Lv(D.key, D.value),
          // Needed for handling click events on disabled items
          style: F({}, D.style, {
            pointerEvents: "all"
          })
        }), {
          generateKey: !1,
          overrideProps: function(N) {
            return {
              onClick: function(P, $) {
                N.onClick == null || N.onClick(P, $), n.handleItemClick(P, $);
              }
            };
          }
        });
      });
    }, n.renderMenu = function() {
      var c = n.props, f = c.children, p = c.direction, h = c.header, m = n.state.open, v = n.getDropdownMenuAriaOptions();
      if (!le(f)) {
        var w = Jf.only(f), O = ee(p, C(m, "visible"), w.props.className);
        return /* @__PURE__ */ Ib(w, F({
          className: O
        }, v));
      }
      return /* @__PURE__ */ b.createElement(Di, F({}, v, {
        direction: p,
        open: m
      }), ta.create(h, {
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
    var c = {
      __options: i.options,
      __value: s.value
    }, f = (
      // On value change
      !Fl(l.__value, s.value) || // On option keys/values, we only check those properties to avoid recursive performance impacts.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/3000
      !H2(Mv(i.options), Mv(l.__options))
    );
    return f && (c.selectedIndex = Dv({
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
    })), c;
  }, r.componentDidMount = function() {
    var i = this.state.open;
    i && this.open(null, !1);
  }, r.shouldComponentUpdate = function(i, s) {
    return !Fl(i, this.props) || !Fl(s, this.state);
  }, r.componentDidUpdate = function(i, s) {
    var l = this.props, c = l.closeOnBlur, f = l.minCharacters, p = l.openOnFocus, h = l.search;
    if (process.env.NODE_ENV !== "production") {
      var m = Array.isArray(this.props.value), v = hf(this.props, "value");
      v && this.props.multiple && !m ? console.error("Dropdown `value` must be an array when `multiple` is set." + (" Received type: `" + Object.prototype.toString.call(this.props.value) + "`.")) : v && !this.props.multiple && m && console.error("Dropdown `value` must not be an array when `multiple` is not set. Either set `multiple={true}` or use a string or number value.");
    }
    if (!s.focus && this.state.focus) {
      if (!this.isMouseDown) {
        var w = !h || h && f === 1 && !this.state.open;
        p && w && this.open();
      }
    } else
      s.focus && !this.state.focus && !this.isMouseDown && c && this.close();
    !s.open && this.state.open ? (this.setOpenDirection(), this.scrollSelectedItemIntoView()) : s.open && this.state.open, s.selectedIndex !== this.state.selectedIndex && this.scrollSelectedItemIntoView();
  }, r.getDropdownMenuAriaOptions = function() {
    var i = this.props, s = i.search, l = i.multiple, c = {};
    return s && (c["aria-multiselectable"] = l, c.role = "listbox"), c;
  }, r.render = function() {
    var i = this.props, s = i.basic, l = i.button, c = i.className, f = i.compact, p = i.disabled, h = i.error, m = i.fluid, v = i.floating, w = i.icon, O = i.inline, T = i.item, _ = i.labeled, x = i.loading, D = i.multiple, k = i.pointing, z = i.search, N = i.selection, B = i.scrolling, P = i.simple, $ = i.trigger, I = this.state, U = I.focus, W = I.open, X = I.upward, V = ee(
      "ui",
      C(W, "active visible"),
      C(p, "disabled"),
      C(h, "error"),
      C(x, "loading"),
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
      C(D, "multiple"),
      C(z, "search"),
      C(N, "selection"),
      C(P, "simple"),
      C(B, "scrolling"),
      C(X, "upward"),
      rt(k, "pointing"),
      "dropdown",
      c
    ), ce = Z(t, this.props), _e = ae(t, this.props), Oe = this.getDropdownAriaOptions(_e, this.props);
    return /* @__PURE__ */ b.createElement(hr, {
      innerRef: this.ref
    }, /* @__PURE__ */ b.createElement(_e, F({}, ce, Oe, {
      className: V,
      onBlur: this.handleBlur,
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      onMouseDown: this.handleMouseDown,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      tabIndex: this.computeTabIndex()
    }), this.renderLabels(), this.renderSearchInput(), this.renderSearchSizer(), $ || this.renderText(), Ct.create(w, {
      overrideProps: this.handleIconOverrides,
      autoGenerateKey: !1
    }), this.renderMenu(), W && /* @__PURE__ */ b.createElement(Yn, {
      name: "keydown",
      on: this.closeOnEscape
    }), W && /* @__PURE__ */ b.createElement(Yn, {
      name: "click",
      on: this.closeOnDocumentClick
    }), U && /* @__PURE__ */ b.createElement(Yn, {
      name: "keydown",
      on: this.removeItemOnBackspace
    })));
  }, t;
}(to);
ht.handledProps = ["additionLabel", "additionPosition", "allowAdditions", "as", "basic", "button", "children", "className", "clearable", "closeOnBlur", "closeOnChange", "closeOnEscape", "compact", "deburr", "defaultOpen", "defaultSearchQuery", "defaultSelectedLabel", "defaultUpward", "defaultValue", "direction", "disabled", "error", "floating", "fluid", "header", "icon", "inline", "item", "labeled", "lazyLoad", "loading", "minCharacters", "multiple", "noResultsMessage", "onAddItem", "onBlur", "onChange", "onClick", "onClose", "onFocus", "onLabelClick", "onMouseDown", "onOpen", "onSearchChange", "open", "openOnFocus", "options", "placeholder", "pointing", "renderLabel", "scrolling", "search", "searchInput", "searchQuery", "selectOnBlur", "selectOnNavigation", "selectedLabel", "selection", "simple", "tabIndex", "text", "trigger", "upward", "value", "wrapSelection"];
ht.propTypes = process.env.NODE_ENV !== "production" ? {
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
  allowAdditions: Be([Xn(["options", "selection", "search"]), d.bool]),
  /** A Dropdown can reduce its complexity. */
  basic: d.bool,
  /** Format the Dropdown to appear as a button. */
  button: d.bool,
  /** Primary content. */
  children: Be([Ve(["options", "selection"]), bE({
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
  defaultSelectedLabel: Be([Xn(["multiple"]), d.oneOfType([d.number, d.string])]),
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
  options: Be([Ve(["children"]), d.arrayOf(d.shape(pp.propTypes))]),
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
  selectedLabel: Be([Xn(["multiple"]), d.oneOfType([d.string, d.number])]),
  /** A dropdown can be used to select between choices in a form. */
  selection: Be([Ve(["children"]), Xn(["options"]), d.bool]),
  /** A simple dropdown can open without Javascript. */
  simple: d.bool,
  /** A dropdown can receive focus. */
  tabIndex: d.oneOfType([d.number, d.string]),
  /** The text displayed in the dropdown, usually for the active item. */
  text: d.string,
  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: Be([Ve(["selection", "text"]), d.node]),
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
ht.defaultProps = {
  additionLabel: "Add ",
  additionPosition: "top",
  closeOnBlur: !0,
  closeOnEscape: !0,
  deburr: !1,
  icon: "dropdown",
  minCharacters: 1,
  noResultsMessage: "No results found.",
  openOnFocus: !0,
  renderLabel: tw,
  searchInput: "text",
  selectOnBlur: !0,
  selectOnNavigation: !0,
  wrapSelection: !0
};
ht.autoControlledProps = ["open", "searchQuery", "selectedLabel", "value", "upward"];
ht.Divider = ps;
ht.Header = ta;
ht.Item = pp;
ht.Menu = Di;
ht.SearchInput = ZE;
ht.Text = ra;
function $n(e) {
  return /* @__PURE__ */ b.createElement(ht, F({}, e, {
    selection: !0
  }));
}
$n.handledProps = ["options"];
$n.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: d.arrayOf(d.shape(ht.Item.propTypes)).isRequired
} : {};
$n.Divider = ht.Divider;
$n.Header = ht.Header;
$n.Item = ht.Item;
$n.Menu = ht.Menu;
var Cc = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.ref = /* @__PURE__ */ xr(), n.focus = function() {
      return n.ref.current.focus();
    }, n.handleChange = function(c) {
      var f = tn(c, "target.value");
      ne(n.props, "onChange", c, F({}, n.props, {
        value: f
      }));
    }, n.handleInput = function(c) {
      var f = tn(c, "target.value");
      ne(n.props, "onInput", c, F({}, n.props, {
        value: f
      }));
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.rows, l = i.value, c = Z(t, this.props), f = ae(t, this.props);
    return /* @__PURE__ */ b.createElement(hr, {
      innerRef: this.ref
    }, /* @__PURE__ */ b.createElement(f, F({}, c, {
      onChange: this.handleChange,
      onInput: this.handleInput,
      rows: s,
      value: l
    })));
  }, t;
}(He);
Cc.handledProps = ["as", "onChange", "onInput", "rows", "value"];
Cc.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /**
   * Called on change.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onChange: d.func,
  /**
   * Called on input.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onInput: d.func,
  /** Indicates row count for a TextArea. */
  rows: d.oneOfType([d.number, d.string]),
  /** The value of the textarea. */
  value: d.oneOfType([d.number, d.string])
} : {};
Cc.defaultProps = {
  as: "textarea",
  rows: 3
};
const RM = Cc;
function $t(e) {
  var t = e.children, r = e.className, n = e.content, i = e.control, s = e.disabled, l = e.error, c = e.inline, f = e.label, p = e.required, h = e.type, m = e.width, v = e.id, w = ee(C(s, "disabled"), C(l, "error"), C(c, "inline"), C(p, "required"), Vt(m, "wide"), "field", r), O = Z($t, e), T = ae($t, e), _ = tn(l, "pointing", "above"), x = or.create(l, {
    autoGenerateKey: !1,
    defaultProps: {
      prompt: !0,
      pointing: _,
      id: v ? v + "-error-message" : void 0,
      role: "alert",
      "aria-atomic": !0
    }
  }), D = (_ === "below" || _ === "right") && x, k = (_ === "above" || _ === "left") && x;
  if (Ue(i))
    return Ue(f) ? /* @__PURE__ */ b.createElement(T, F({}, O, {
      className: w,
      id: v
    }), le(t) ? n : t) : /* @__PURE__ */ b.createElement(T, F({}, O, {
      className: w,
      id: v
    }), D, Pf(f, {
      autoGenerateKey: !1
    }), k);
  var z = v && l ? v + "-error-message" : null, N = {
    "aria-describedby": z,
    "aria-invalid": l ? !0 : void 0
  }, B = F({}, O, {
    content: n,
    children: t,
    disabled: s,
    required: p,
    type: h,
    id: v
  });
  return i === "input" && (h === "checkbox" || h === "radio") ? /* @__PURE__ */ b.createElement(T, {
    className: w
  }, /* @__PURE__ */ b.createElement("label", null, D, /* @__PURE__ */ wd(i, F({}, N, B)), " ", f, k)) : i === Ar || i === io ? /* @__PURE__ */ b.createElement(T, {
    className: w
  }, D, /* @__PURE__ */ wd(i, F({}, N, B, {
    label: f
  })), k) : /* @__PURE__ */ b.createElement(T, {
    className: w
  }, Pf(f, {
    defaultProps: {
      htmlFor: v
    },
    autoGenerateKey: !1
  }), D, /* @__PURE__ */ wd(i, F({}, N, B)), k);
}
$t.handledProps = ["as", "children", "className", "content", "control", "disabled", "error", "id", "inline", "label", "required", "type", "width"];
$t.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control: d.oneOfType([d.elementType, d.oneOf(["button", "input", "select", "textarea"])]),
  /** Individual fields may be disabled. */
  disabled: d.bool,
  /** Individual fields may display an error state along with a message. */
  error: d.oneOfType([d.bool, fe]),
  /** The id of the control */
  id: d.string,
  /** A field can have its label next to instead of above it. */
  inline: d.bool,
  // Heads Up!
  // Do not disallow children with `label` shorthand
  // The `control` might accept a `label` prop and `children`
  /** Mutually exclusive with children. */
  label: d.oneOfType([d.node, d.object]),
  /** A field can show that input is mandatory. */
  required: d.bool,
  /** Passed to the control component (i.e. <input type='password' />) */
  type: Be([
    Xn(["control"])
    // don't strictly validate HTML types
    // a control might be passed that uses a `type` prop with unknown values
    // let the control validate if for us
  ]),
  /** A field can specify its width in grid columns */
  width: d.oneOf(Jt)
} : {};
function Mi(e) {
  var t = e.control, r = Z(Mi, e), n = ae(Mi, e);
  return /* @__PURE__ */ b.createElement(n, F({}, r, {
    control: t
  }));
}
Mi.handledProps = ["as", "control"];
Mi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A FormField control prop. */
  control: $t.propTypes.control
} : {};
Mi.defaultProps = {
  as: $t,
  control: Pn
};
function Fi(e) {
  var t = e.control, r = Z(Fi, e), n = ae(Fi, e);
  return /* @__PURE__ */ b.createElement(n, F({}, r, {
    control: t
  }));
}
Fi.handledProps = ["as", "control"];
Fi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A FormField control prop. */
  control: $t.propTypes.control
} : {};
Fi.defaultProps = {
  as: $t,
  control: Ar
};
function Bi(e) {
  var t = e.control, r = Z(Bi, e), n = ae(Bi, e);
  return /* @__PURE__ */ b.createElement(n, F({}, r, {
    control: t
  }));
}
Bi.handledProps = ["as", "control"];
Bi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A FormField control prop. */
  control: $t.propTypes.control
} : {};
Bi.defaultProps = {
  as: $t,
  control: ht
};
function gs(e) {
  var t = e.children, r = e.className, n = e.grouped, i = e.inline, s = e.unstackable, l = e.widths, c = ee(C(n, "grouped"), C(i, "inline"), C(s, "unstackable"), Vt(l, null, !0), "fields", r), f = Z(gs, e), p = ae(gs, e);
  return /* @__PURE__ */ b.createElement(p, F({}, f, {
    className: c
  }), t);
}
gs.handledProps = ["as", "children", "className", "grouped", "inline", "unstackable", "widths"];
gs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Fields can show related choices. */
  grouped: Be([Ve(["inline"]), d.bool]),
  /** Multiple fields may be inline in a row. */
  inline: Be([Ve(["grouped"]), d.bool]),
  /** A form group can prevent itself from stacking on mobile. */
  unstackable: d.bool,
  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths: d.oneOf([].concat(Jt, ["equal"]))
} : {};
var Ui = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.inputRef = /* @__PURE__ */ xr(), n.computeIcon = function() {
      var c = n.props, f = c.loading, p = c.icon;
      if (!Ue(p))
        return p;
      if (f)
        return "spinner";
    }, n.computeTabIndex = function() {
      var c = n.props, f = c.disabled, p = c.tabIndex;
      if (!Ue(p))
        return p;
      if (f)
        return -1;
    }, n.focus = function(c) {
      return n.inputRef.current.focus(c);
    }, n.select = function() {
      return n.inputRef.current.select();
    }, n.handleChange = function(c) {
      var f = tn(c, "target.value");
      ne(n.props, "onChange", c, F({}, n.props, {
        value: f
      }));
    }, n.handleChildOverrides = function(c, f) {
      return F({}, f, c.props, {
        ref: function(h) {
          en(c.ref, h), n.inputRef.current = h;
        }
      });
    }, n.partitionProps = function() {
      var c = n.props, f = c.disabled, p = c.type, h = n.computeTabIndex(), m = Z(t, n.props), v = dp(m), w = v[0], O = v[1];
      return [F({}, w, {
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
    var i = this, s = this.props, l = s.action, c = s.actionPosition, f = s.children, p = s.className, h = s.disabled, m = s.error, v = s.fluid, w = s.focus, O = s.icon, T = s.iconPosition, _ = s.input, x = s.inverted, D = s.label, k = s.labelPosition, z = s.loading, N = s.size, B = s.transparent, P = s.type, $ = ee("ui", N, C(h, "disabled"), C(m, "error"), C(v, "fluid"), C(w, "focus"), C(x, "inverted"), C(z, "loading"), C(B, "transparent"), Lt(c, "action") || C(l, "action"), Lt(T, "icon") || C(O || z, "icon"), Lt(k, "labeled") || C(D, "labeled"), "input", p), I = ae(t, this.props), U = this.partitionProps(), W = U[0], X = U[1];
    if (!le(f)) {
      var V = yt(Jf.toArray(f), function(Oe) {
        return Oe.type !== "input" ? Oe : /* @__PURE__ */ Ib(Oe, i.handleChildOverrides(Oe, W));
      });
      return /* @__PURE__ */ b.createElement(I, F({}, X, {
        className: $
      }), V);
    }
    var ce = Pn.create(l, {
      autoGenerateKey: !1
    }), _e = or.create(D, {
      defaultProps: {
        className: ee(
          "label",
          // add 'left|right corner'
          ro(k, "corner") && k
        )
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ b.createElement(I, F({}, X, {
      className: $
    }), c === "left" && ce, k !== "right" && _e, CD(_ || P, {
      defaultProps: W,
      autoGenerateKey: !1
    }), Ct.create(this.computeIcon(), {
      autoGenerateKey: !1
    }), c !== "left" && ce, k === "right" && _e);
  }, t;
}(He);
Ui.handledProps = ["action", "actionPosition", "as", "children", "className", "disabled", "error", "fluid", "focus", "icon", "iconPosition", "input", "inverted", "label", "labelPosition", "loading", "onChange", "size", "tabIndex", "transparent", "type"];
Ui.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** An Input can be formatted to alert the user to an action they may perform. */
  action: d.oneOfType([d.bool, fe]),
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
  icon: d.oneOfType([d.bool, fe]),
  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: d.oneOf(["left"]),
  /** Shorthand for creating the HTML Input. */
  input: fe,
  /** Format to appear on dark backgrounds. */
  inverted: d.bool,
  /** Optional Label to display along side the Input. */
  label: fe,
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
Ui.defaultProps = {
  type: "text"
};
Ui.create = qe(Ui, function(e) {
  return {
    type: e
  };
});
const hp = Ui;
function zi(e) {
  var t = e.control, r = Z(zi, e), n = ae(zi, e);
  return /* @__PURE__ */ b.createElement(n, F({}, r, {
    control: t
  }));
}
zi.handledProps = ["as", "control"];
zi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A FormField control prop. */
  control: $t.propTypes.control
} : {};
zi.defaultProps = {
  as: $t,
  control: hp
};
function qi(e) {
  var t = e.control, r = Z(qi, e), n = ae(qi, e);
  return /* @__PURE__ */ b.createElement(n, F({}, r, {
    control: t
  }));
}
qi.handledProps = ["as", "control"];
qi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A FormField control prop. */
  control: $t.propTypes.control
} : {};
qi.defaultProps = {
  as: $t,
  control: io
};
function ji(e) {
  var t = e.control, r = e.options, n = Z(ji, e), i = ae(ji, e);
  return /* @__PURE__ */ b.createElement(i, F({}, n, {
    control: t,
    options: r
  }));
}
ji.handledProps = ["as", "control", "options"];
ji.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A FormField control prop. */
  control: $t.propTypes.control,
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: d.arrayOf(d.shape(ht.Item.propTypes)).isRequired
} : {};
ji.defaultProps = {
  as: $t,
  control: $n
};
function Hi(e) {
  var t = e.control, r = Z(Hi, e), n = ae(Hi, e);
  return /* @__PURE__ */ b.createElement(n, F({}, r, {
    control: t
  }));
}
Hi.handledProps = ["as", "control"];
Hi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A FormField control prop. */
  control: $t.propTypes.control
} : {};
Hi.defaultProps = {
  as: $t,
  control: RM
};
var yr = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleSubmit = function(c) {
      var f = n.props.action;
      typeof f != "string" && ne(c, "preventDefault");
      for (var p = arguments.length, h = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
        h[m - 1] = arguments[m];
      ne.apply(void 0, [n.props, "onSubmit", c, n.props].concat(h));
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.action, l = i.children, c = i.className, f = i.error, p = i.inverted, h = i.loading, m = i.reply, v = i.size, w = i.success, O = i.unstackable, T = i.warning, _ = i.widths, x = ee("ui", v, C(f, "error"), C(p, "inverted"), C(h, "loading"), C(m, "reply"), C(w, "success"), C(O, "unstackable"), C(T, "warning"), Vt(_, null, !0), "form", c), D = Z(t, this.props), k = ae(t, this.props);
    return /* @__PURE__ */ b.createElement(k, F({}, D, {
      action: s,
      className: x,
      onSubmit: this.handleSubmit
    }), l);
  }, t;
}(He);
yr.handledProps = ["action", "as", "children", "className", "error", "inverted", "loading", "onSubmit", "reply", "size", "success", "unstackable", "warning", "widths"];
yr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** The HTML form action */
  action: d.string,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Automatically show any error Message children. */
  error: d.bool,
  /** A form can have its color inverted for contrast. */
  inverted: d.bool,
  /** Automatically show a loading indicator. */
  loading: d.bool,
  /** The HTML form submit handler. */
  onSubmit: d.func,
  /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
  reply: d.bool,
  /** A form can vary in size. */
  size: d.oneOf(Mt(Gt, "medium")),
  /** Automatically show any success Message children. */
  success: d.bool,
  /** A form can prevent itself from stacking on mobile. */
  unstackable: d.bool,
  /** Automatically show any warning Message children. */
  warning: d.bool,
  /** Forms can automatically divide fields to be equal width. */
  widths: d.oneOf(["equal"])
} : {};
yr.defaultProps = {
  as: "form"
};
yr.Field = $t;
yr.Button = Mi;
yr.Checkbox = Fi;
yr.Dropdown = Bi;
yr.Group = gs;
yr.Input = zi;
yr.Radio = qi;
yr.Select = ji;
yr.TextArea = Hi;
const NM = yr;
function Ga(e) {
  var t = e.children, r = e.className, n = e.computer, i = e.color, s = e.floated, l = e.largeScreen, c = e.mobile, f = e.only, p = e.stretched, h = e.tablet, m = e.textAlign, v = e.verticalAlign, w = e.widescreen, O = e.width, T = ee(i, C(p, "stretched"), Xl(f, "only"), gr(m), Lt(s, "floated"), $r(v), Vt(n, "wide computer"), Vt(l, "wide large screen"), Vt(c, "wide mobile"), Vt(h, "wide tablet"), Vt(w, "wide widescreen"), Vt(O, "wide"), "column", r), _ = Z(Ga, e), x = ae(Ga, e);
  return /* @__PURE__ */ b.createElement(x, F({}, _, {
    className: T
  }), t);
}
Ga.handledProps = ["as", "children", "className", "color", "computer", "floated", "largeScreen", "mobile", "only", "stretched", "tablet", "textAlign", "verticalAlign", "widescreen", "width"];
Ga.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** A grid column can be colored. */
  color: d.oneOf(mr),
  /** A column can specify a width for a computer. */
  computer: Be([Ve(["width"]), d.oneOf(Jt)]),
  /** A column can sit flush against the left or right edge of a row. */
  floated: d.oneOf(fa),
  /** A column can specify a width for a large screen device. */
  largeScreen: Be([Ve(["width"]), d.oneOf(Jt)]),
  /** A column can specify a width for a mobile device. */
  mobile: Be([Ve(["width"]), d.oneOf(Jt)]),
  /** A column can appear only for a specific device, or screen sizes. */
  only: Jl(AE),
  /** A column can stretch its contents to take up the entire grid or row height. */
  stretched: d.bool,
  /** A column can specify a width for a tablet device. */
  tablet: Be([Ve(["width"]), d.oneOf(Jt)]),
  /** A column can specify its text alignment. */
  textAlign: d.oneOf(vr),
  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: d.oneOf(zr),
  /** A column can specify a width for a wide screen device. */
  widescreen: Be([Ve(["width"]), d.oneOf(Jt)]),
  /** Represents width of column. */
  width: Be([Ve(["computer", "largeScreen", "mobile", "tablet", "widescreen"]), d.oneOf(Jt)])
} : {};
Ga.create = qe(Ga, function(e) {
  return {
    children: e
  };
});
function ms(e) {
  var t = e.centered, r = e.children, n = e.className, i = e.color, s = e.columns, l = e.divided, c = e.only, f = e.reversed, p = e.stretched, h = e.textAlign, m = e.verticalAlign, v = ee(i, C(t, "centered"), C(l, "divided"), C(p, "stretched"), Xl(c, "only"), Xl(f, "reversed"), gr(h), $r(m), Vt(s, "column", !0), "row", n), w = Z(ms, e), O = ae(ms, e);
  return /* @__PURE__ */ b.createElement(O, F({}, w, {
    className: v
  }), r);
}
ms.handledProps = ["as", "centered", "children", "className", "color", "columns", "divided", "only", "reversed", "stretched", "textAlign", "verticalAlign"];
ms.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A row can have its columns centered. */
  centered: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** A grid row can be colored. */
  color: d.oneOf(mr),
  /** Represents column count per line in Row. */
  columns: d.oneOf([].concat(Jt, ["equal"])),
  /** A row can have dividers between its columns. */
  divided: d.bool,
  /** A row can appear only for a specific device, or screen sizes. */
  only: Jl(AE),
  /** A row can specify that its columns should reverse order at different device sizes. */
  reversed: Jl(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A row can stretch its contents to take up the entire column height. */
  stretched: d.bool,
  /** A row can specify its text alignment. */
  textAlign: d.oneOf(vr),
  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: d.oneOf(zr)
} : {};
function Mr(e) {
  var t = e.celled, r = e.centered, n = e.children, i = e.className, s = e.columns, l = e.container, c = e.divided, f = e.doubling, p = e.inverted, h = e.padded, m = e.relaxed, v = e.reversed, w = e.stackable, O = e.stretched, T = e.textAlign, _ = e.verticalAlign, x = ee("ui", C(r, "centered"), C(l, "container"), C(f, "doubling"), C(p, "inverted"), C(w, "stackable"), C(O, "stretched"), rt(t, "celled"), rt(c, "divided"), rt(h, "padded"), rt(m, "relaxed"), Xl(v, "reversed"), gr(T), $r(_), Vt(s, "column", !0), "grid", i), D = Z(Mr, e), k = ae(Mr, e);
  return /* @__PURE__ */ b.createElement(k, F({}, D, {
    className: x
  }), n);
}
Mr.handledProps = ["as", "celled", "centered", "children", "className", "columns", "container", "divided", "doubling", "inverted", "padded", "relaxed", "reversed", "stackable", "stretched", "textAlign", "verticalAlign"];
Mr.Column = Ga;
Mr.Row = ms;
Mr.propTypes = process.env.NODE_ENV !== "production" ? {
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
  columns: d.oneOf([].concat(Jt, ["equal"])),
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
  reversed: Jl(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: d.bool,
  /** A grid can stretch its contents to take up the entire grid height. */
  stretched: d.bool,
  /** A grid can specify its text alignment. */
  textAlign: d.oneOf(vr),
  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: d.oneOf(zr)
} : {};
function na(e) {
  var t = e.children, r = e.className, n = ee(r), i = Z(na, e), s = ae(na, e);
  return /* @__PURE__ */ b.createElement(s, F({}, i, {
    className: n
  }), t);
}
na.handledProps = ["as", "children", "className"];
na.defaultProps = {
  as: "tbody"
};
na.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string
} : {};
function kt(e) {
  var t = e.active, r = e.children, n = e.className, i = e.collapsing, s = e.content, l = e.disabled, c = e.error, f = e.icon, p = e.negative, h = e.positive, m = e.selectable, v = e.singleLine, w = e.textAlign, O = e.verticalAlign, T = e.warning, _ = e.width, x = ee(C(t, "active"), C(i, "collapsing"), C(l, "disabled"), C(c, "error"), C(p, "negative"), C(h, "positive"), C(m, "selectable"), C(v, "single line"), C(T, "warning"), gr(w), $r(O), Vt(_, "wide"), n), D = Z(kt, e), k = ae(kt, e);
  return le(r) ? /* @__PURE__ */ b.createElement(k, F({}, D, {
    className: x
  }), Ct.create(f), s) : /* @__PURE__ */ b.createElement(k, F({}, D, {
    className: x
  }), r);
}
kt.handledProps = ["active", "as", "children", "className", "collapsing", "content", "disabled", "error", "icon", "negative", "positive", "selectable", "singleLine", "textAlign", "verticalAlign", "warning", "width"];
kt.defaultProps = {
  as: "td"
};
kt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  icon: fe,
  /** A cell may let a user know whether a value is bad. */
  negative: d.bool,
  /** A cell may let a user know whether a value is good. */
  positive: d.bool,
  /** A cell can be selectable. */
  selectable: d.bool,
  /** A cell can specify that its contents should remain on a single line and not wrap. */
  singleLine: d.bool,
  /** A table cell can adjust its text alignment. */
  textAlign: d.oneOf(Mt(vr, "justified")),
  /** A table cell can adjust its text alignment. */
  verticalAlign: d.oneOf(zr),
  /** A cell may warn a user. */
  warning: d.bool,
  /** A table can specify the width of individual columns independently. */
  width: d.oneOf(Jt)
} : {};
kt.create = qe(kt, function(e) {
  return {
    content: e
  };
});
function Rn(e) {
  var t = e.children, r = e.className, n = e.content, i = e.fullWidth, s = ee(C(i, "full-width"), r), l = Z(Rn, e), c = ae(Rn, e);
  return /* @__PURE__ */ b.createElement(c, F({}, l, {
    className: s
  }), le(t) ? n : t);
}
Rn.handledProps = ["as", "children", "className", "content", "fullWidth"];
Rn.defaultProps = {
  as: "thead"
};
Rn.propTypes = process.env.NODE_ENV !== "production" ? {
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
function oo(e) {
  var t = e.as, r = Z(oo, e);
  return /* @__PURE__ */ b.createElement(Rn, F({}, r, {
    as: t
  }));
}
oo.handledProps = ["as"];
oo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType
} : {};
oo.defaultProps = {
  as: "tfoot"
};
function pr(e) {
  var t = e.as, r = e.className, n = e.sorted, i = ee(Lt(n, "sorted"), r), s = Z(pr, e);
  return /* @__PURE__ */ b.createElement(kt, F({}, s, {
    as: t,
    className: i
  }));
}
pr.handledProps = ["as", "className", "sorted"];
pr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Additional classes. */
  className: d.string,
  /** A header cell can be sorted in ascending or descending order. */
  sorted: d.oneOf(["ascending", "descending"])
} : {};
pr.defaultProps = {
  as: "th"
};
function ar(e) {
  var t = e.active, r = e.cellAs, n = e.cells, i = e.children, s = e.className, l = e.disabled, c = e.error, f = e.negative, p = e.positive, h = e.textAlign, m = e.verticalAlign, v = e.warning, w = ee(C(t, "active"), C(l, "disabled"), C(c, "error"), C(f, "negative"), C(p, "positive"), C(v, "warning"), gr(h), $r(m), s), O = Z(ar, e), T = ae(ar, e);
  return le(i) ? /* @__PURE__ */ b.createElement(T, F({}, O, {
    className: w
  }), yt(n, function(_) {
    return kt.create(_, {
      defaultProps: {
        as: r
      }
    });
  })) : /* @__PURE__ */ b.createElement(T, F({}, O, {
    className: w
  }), i);
}
ar.handledProps = ["active", "as", "cellAs", "cells", "children", "className", "disabled", "error", "negative", "positive", "textAlign", "verticalAlign", "warning"];
ar.defaultProps = {
  as: "tr",
  cellAs: "td"
};
ar.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A row can be active or selected by a user. */
  active: d.bool,
  /** An element type to render as (string or function). */
  cellAs: d.elementType,
  /** Shorthand array of props for TableCell. */
  cells: da,
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
  textAlign: d.oneOf(Mt(vr, "justified")),
  /** A table row can adjust its vertical alignment. */
  verticalAlign: d.oneOf(zr),
  /** A row may warn a user. */
  warning: d.bool
} : {};
ar.create = qe(ar, function(e) {
  return {
    cells: e
  };
});
function Cr(e) {
  var t = e.attached, r = e.basic, n = e.celled, i = e.children, s = e.className, l = e.collapsing, c = e.color, f = e.columns, p = e.compact, h = e.definition, m = e.fixed, v = e.footerRow, w = e.headerRow, O = e.headerRows, T = e.inverted, _ = e.padded, x = e.renderBodyRow, D = e.selectable, k = e.singleLine, z = e.size, N = e.sortable, B = e.stackable, P = e.striped, $ = e.structured, I = e.tableData, U = e.textAlign, W = e.unstackable, X = e.verticalAlign, V = ee("ui", c, z, C(n, "celled"), C(l, "collapsing"), C(h, "definition"), C(m, "fixed"), C(T, "inverted"), C(D, "selectable"), C(k, "single line"), C(N, "sortable"), C(B, "stackable"), C(P, "striped"), C($, "structured"), C(W, "unstackable"), rt(t, "attached"), rt(r, "basic"), rt(p, "compact"), rt(_, "padded"), gr(U), $r(X), Vt(f, "column"), "table", s), ce = Z(Cr, e), _e = ae(Cr, e);
  if (!le(i))
    return /* @__PURE__ */ b.createElement(_e, F({}, ce, {
      className: V
    }), i);
  var Oe = w || O, Te = {
    defaultProps: {
      cellAs: "th"
    }
  }, je = Oe && /* @__PURE__ */ b.createElement(Rn, null, ar.create(w, Te), yt(O, function(Ze) {
    return ar.create(Ze, Te);
  }));
  return /* @__PURE__ */ b.createElement(_e, F({}, ce, {
    className: V
  }), je, /* @__PURE__ */ b.createElement(na, null, x && yt(I, function(Ze, K) {
    return ar.create(x(Ze, K));
  })), v && /* @__PURE__ */ b.createElement(oo, null, ar.create(v)));
}
Cr.handledProps = ["as", "attached", "basic", "celled", "children", "className", "collapsing", "color", "columns", "compact", "definition", "fixed", "footerRow", "headerRow", "headerRows", "inverted", "padded", "renderBodyRow", "selectable", "singleLine", "size", "sortable", "stackable", "striped", "structured", "tableData", "textAlign", "unstackable", "verticalAlign"];
Cr.defaultProps = {
  as: "table"
};
Cr.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: d.oneOf(mr),
  /** A table can specify its column count to divide its content evenly. */
  columns: d.oneOf(Jt),
  /** A table may sometimes need to be more compact to make more rows visible at a time. */
  compact: d.oneOfType([d.bool, d.oneOf(["very"])]),
  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition: d.bool,
  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content
   */
  fixed: d.bool,
  /** Shorthand for a TableRow to be placed within Table.Footer. */
  footerRow: fe,
  /** Shorthand for a TableRow to be placed within Table.Header. */
  headerRow: Be([Ve(["headerRows"]), fe]),
  /** Shorthand for multiple TableRows to be placed within Table.Header. */
  headerRows: Be([Ve(["headerRow"]), da]),
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
  renderBodyRow: Be([Ve(["children"]), Xn(["tableData"]), d.func]),
  /** A table can have its rows appear selectable. */
  selectable: d.bool,
  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine: d.bool,
  /** A table can also be small or large. */
  size: d.oneOf(Mt(Gt, "mini", "tiny", "medium", "big", "huge", "massive")),
  /** A table may allow a user to sort contents by clicking on a table header. */
  sortable: d.bool,
  /** A table can specify how it stacks table content responsively. */
  stackable: d.bool,
  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped: d.bool,
  /** A table can be formatted to display complex structured data. */
  structured: d.bool,
  /** Data to be passed to the renderBodyRow function. */
  tableData: Be([Ve(["children"]), Xn(["renderBodyRow"]), d.array]),
  /** A table can adjust its text alignment. */
  textAlign: d.oneOf(Mt(vr, "justified")),
  /** A table can specify how it stacks table content responsively. */
  unstackable: d.bool,
  /** A table can adjust its text alignment. */
  verticalAlign: d.oneOf(zr)
} : {};
Cr.Body = na;
Cr.Cell = kt;
Cr.Footer = oo;
Cr.Header = Rn;
Cr.HeaderCell = pr;
Cr.Row = ar;
function aa(e) {
  var t = e.children, r = e.className, n = e.content, i = ee("sub header", r), s = Z(aa, e), l = ae(aa, e);
  return /* @__PURE__ */ b.createElement(l, F({}, s, {
    className: i
  }), le(t) ? n : t);
}
aa.handledProps = ["as", "children", "className", "content"];
aa.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
aa.create = qe(aa, function(e) {
  return {
    content: e
  };
});
function Vi(e) {
  var t = e.children, r = e.className, n = e.content, i = ee("content", r), s = Z(Vi, e), l = ae(Vi, e);
  return /* @__PURE__ */ b.createElement(l, F({}, s, {
    className: i
  }), le(t) ? n : t);
}
Vi.handledProps = ["as", "children", "className", "content"];
Vi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
function ia(e) {
  var t = e.attached, r = e.block, n = e.children, i = e.className, s = e.color, l = e.content, c = e.disabled, f = e.dividing, p = e.floated, h = e.icon, m = e.image, v = e.inverted, w = e.size, O = e.sub, T = e.subheader, _ = e.textAlign, x = ee("ui", s, w, C(r, "block"), C(c, "disabled"), C(f, "dividing"), Lt(p, "floated"), C(h === !0, "icon"), C(m === !0, "image"), C(v, "inverted"), C(O, "sub"), rt(t, "attached"), gr(_), "header", i), D = Z(ia, e), k = ae(ia, e);
  if (!le(n))
    return /* @__PURE__ */ b.createElement(k, F({}, D, {
      className: x
    }), n);
  var z = Ct.create(h, {
    autoGenerateKey: !1
  }), N = Ut.create(m, {
    autoGenerateKey: !1
  }), B = aa.create(T, {
    autoGenerateKey: !1
  });
  return z || N ? /* @__PURE__ */ b.createElement(k, F({}, D, {
    className: x
  }), z || N, (l || B) && /* @__PURE__ */ b.createElement(Vi, null, l, B)) : /* @__PURE__ */ b.createElement(k, F({}, D, {
    className: x
  }), l, B);
}
ia.handledProps = ["as", "attached", "block", "children", "className", "color", "content", "disabled", "dividing", "floated", "icon", "image", "inverted", "size", "sub", "subheader", "textAlign"];
ia.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: d.oneOf(mr),
  /** Shorthand for primary content. */
  content: me,
  /** Show that the header is inactive. */
  disabled: d.bool,
  /** Divide header from the content below it. */
  dividing: d.bool,
  /** Header can sit to the left or right of other content. */
  floated: d.oneOf(fa),
  /** Add an icon by icon name or pass an Icon. */
  icon: Be([Ve(["image"]), d.oneOfType([d.bool, fe])]),
  /** Add an image by img src or pass an Image. */
  image: Be([Ve(["icon"]), d.oneOfType([d.bool, fe])]),
  /** Inverts the color of the header for dark backgrounds. */
  inverted: d.bool,
  /** Content headings are sized with em and are based on the font-size of their container. */
  size: d.oneOf(Mt(Gt, "big", "massive", "mini")),
  /** Headers may be formatted to label smaller or de-emphasized content. */
  sub: d.bool,
  /** Shorthand for Header.Subheader. */
  subheader: fe,
  /** Align header content. */
  textAlign: d.oneOf(vr)
} : {};
ia.Content = Vi;
ia.Subheader = aa;
function Nn(e) {
  var t = e.children, r = e.className, n = e.content, i = ee(r, "description"), s = Z(Nn, e), l = ae(Nn, e);
  return /* @__PURE__ */ b.createElement(l, F({}, s, {
    className: i
  }), le(t) ? n : t);
}
Nn.handledProps = ["as", "children", "className", "content"];
Nn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
Nn.create = qe(Nn, function(e) {
  return {
    content: e
  };
});
function In(e) {
  var t = e.children, r = e.className, n = e.content, i = ee("header", r), s = Z(In, e), l = ae(In, e);
  return /* @__PURE__ */ b.createElement(l, F({}, s, {
    className: i
  }), le(t) ? n : t);
}
In.handledProps = ["as", "children", "className", "content"];
In.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
In.create = qe(In, function(e) {
  return {
    content: e
  };
});
function kn(e) {
  var t = e.children, r = e.className, n = e.content, i = e.description, s = e.floated, l = e.header, c = e.verticalAlign, f = ee(Lt(s, "floated"), $r(c), "content", r), p = Z(kn, e), h = ae(kn, e);
  return le(t) ? /* @__PURE__ */ b.createElement(h, F({}, p, {
    className: f
  }), In.create(l), Nn.create(i), n) : /* @__PURE__ */ b.createElement(h, F({}, p, {
    className: f
  }), t);
}
kn.handledProps = ["as", "children", "className", "content", "description", "floated", "header", "verticalAlign"];
kn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** Shorthand for ListDescription. */
  description: fe,
  /** An list content can be floated left or right. */
  floated: d.oneOf(fa),
  /** Shorthand for ListHeader. */
  header: fe,
  /** An element inside a list can be vertically aligned. */
  verticalAlign: d.oneOf(zr)
} : {};
kn.create = qe(kn, function(e) {
  return {
    content: e
  };
});
function Qa(e) {
  var t = e.className, r = e.verticalAlign, n = ee($r(r), t), i = Z(Qa, e);
  return /* @__PURE__ */ b.createElement(Ct, F({}, i, {
    className: n
  }));
}
Qa.handledProps = ["className", "verticalAlign"];
Qa.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Additional classes. */
  className: d.string,
  /** An element inside a list can be vertically aligned. */
  verticalAlign: d.oneOf(zr)
} : {};
Qa.create = qe(Qa, function(e) {
  return {
    name: e
  };
});
var vs = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(c) {
      var f = n.props.disabled;
      f || ne(n.props, "onClick", c, n.props);
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.active, l = i.children, c = i.className, f = i.content, p = i.description, h = i.disabled, m = i.header, v = i.icon, w = i.image, O = i.value, T = ae(t, this.props), _ = ee(C(s, "active"), C(h, "disabled"), C(T !== "li", "item"), c), x = Z(t, this.props), D = T === "li" ? {
      value: O
    } : {
      "data-value": O
    };
    if (!le(l))
      return /* @__PURE__ */ b.createElement(T, F({}, D, {
        role: "listitem",
        className: _,
        onClick: this.handleClick
      }, x), l);
    var k = Qa.create(v, {
      autoGenerateKey: !1
    }), z = Ut.create(w, {
      autoGenerateKey: !1
    });
    if (!/* @__PURE__ */ Nb(f) && xc(f))
      return /* @__PURE__ */ b.createElement(T, F({}, D, {
        role: "listitem",
        className: _,
        onClick: this.handleClick
      }, x), k || z, kn.create(f, {
        autoGenerateKey: !1,
        defaultProps: {
          header: m,
          description: p
        }
      }));
    var N = In.create(m, {
      autoGenerateKey: !1
    }), B = Nn.create(p, {
      autoGenerateKey: !1
    });
    return k || z ? /* @__PURE__ */ b.createElement(T, F({}, D, {
      role: "listitem",
      className: _,
      onClick: this.handleClick
    }, x), k || z, (f || N || B) && /* @__PURE__ */ b.createElement(kn, null, N, B, f)) : /* @__PURE__ */ b.createElement(T, F({}, D, {
      role: "listitem",
      className: _,
      onClick: this.handleClick
    }, x), N, B, f);
  }, t;
}(He);
vs.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "header", "icon", "image", "onClick", "value"];
vs.propTypes = process.env.NODE_ENV !== "production" ? {
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
  content: fe,
  /** Shorthand for ListDescription. */
  description: fe,
  /** A list item can disabled. */
  disabled: d.bool,
  /** Shorthand for ListHeader. */
  header: fe,
  /** Shorthand for ListIcon. */
  icon: Be([Ve(["image"]), fe]),
  /** Shorthand for Image. */
  image: Be([Ve(["icon"]), fe]),
  /** A ListItem can be clicked */
  onClick: d.func,
  /** A value for an ordered list. */
  value: d.string
} : {};
vs.create = qe(vs, function(e) {
  return {
    content: e
  };
});
const rw = vs;
function ys(e) {
  var t = e.children, r = e.className, n = e.content, i = Z(ys, e), s = ae(ys, e), l = ee(C(s !== "ul" && s !== "ol", "list"), r);
  return /* @__PURE__ */ b.createElement(s, F({}, i, {
    className: l
  }), le(t) ? n : t);
}
ys.handledProps = ["as", "children", "className", "content"];
ys.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
var Bn = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleItemOverrides = function(c) {
      return {
        onClick: function(p, h) {
          ne(c, "onClick", p, h), ne(n.props, "onItemClick", p, h);
        }
      };
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this, s = this.props, l = s.animated, c = s.bulleted, f = s.celled, p = s.children, h = s.className, m = s.content, v = s.divided, w = s.floated, O = s.horizontal, T = s.inverted, _ = s.items, x = s.link, D = s.ordered, k = s.relaxed, z = s.selection, N = s.size, B = s.verticalAlign, P = ee("ui", N, C(l, "animated"), C(c, "bulleted"), C(f, "celled"), C(v, "divided"), C(O, "horizontal"), C(T, "inverted"), C(x, "link"), C(D, "ordered"), C(z, "selection"), rt(k, "relaxed"), Lt(w, "floated"), $r(B), "list", h), $ = Z(t, this.props), I = ae(t, this.props);
    return le(p) ? le(m) ? /* @__PURE__ */ b.createElement(I, F({
      role: "list",
      className: P
    }, $), yt(_, function(U) {
      return rw.create(U, {
        overrideProps: i.handleItemOverrides
      });
    })) : /* @__PURE__ */ b.createElement(I, F({
      role: "list",
      className: P
    }, $), m) : /* @__PURE__ */ b.createElement(I, F({
      role: "list",
      className: P
    }, $), p);
  }, t;
}(He);
Bn.handledProps = ["animated", "as", "bulleted", "celled", "children", "className", "content", "divided", "floated", "horizontal", "inverted", "items", "link", "onItemClick", "ordered", "relaxed", "selection", "size", "verticalAlign"];
Bn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  floated: d.oneOf(fa),
  /** A list can be formatted to have items appear horizontally. */
  horizontal: d.bool,
  /** A list can be inverted to appear on a dark background. */
  inverted: d.bool,
  /** Shorthand array of props for ListItem. */
  items: da,
  /** A list can be specially formatted for navigation links. */
  link: d.bool,
  /**
   * onClick handler for ListItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: Be([Ve(["children"]), d.func]),
  /** A list can be ordered numerically. */
  ordered: d.bool,
  /** A list can relax its padding to provide more negative space. */
  relaxed: d.oneOfType([d.bool, d.oneOf(["very"])]),
  /** A selection list formats list items as possible choices. */
  selection: d.bool,
  /** A list can vary in size. */
  size: d.oneOf(Gt),
  /** An element inside a list can be vertically aligned. */
  verticalAlign: d.oneOf(zr)
} : {};
Bn.Content = kn;
Bn.Description = Nn;
Bn.Header = In;
Bn.Icon = Qa;
Bn.Item = rw;
Bn.List = ys;
const nw = Bn;
function bs(e) {
  var t = e.active, r = e.children, n = e.className, i = e.content, s = e.disabled, l = e.indeterminate, c = e.inline, f = e.inverted, p = e.size, h = ee("ui", p, C(t, "active"), C(s, "disabled"), C(l, "indeterminate"), C(f, "inverted"), C(r || i, "text"), rt(c, "inline"), "loader", n), m = Z(bs, e), v = ae(bs, e);
  return /* @__PURE__ */ b.createElement(v, F({}, m, {
    className: h
  }), le(r) ? i : r);
}
bs.handledProps = ["active", "as", "children", "className", "content", "disabled", "indeterminate", "inline", "inverted", "size"];
bs.propTypes = process.env.NODE_ENV !== "production" ? {
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
  size: d.oneOf(Gt)
} : {};
function Es(e) {
  var t = e.children, r = e.className, n = e.compact, i = e.content, s = e.horizontal, l = e.piled, c = e.raised, f = e.size, p = e.stacked, h = ee("ui", f, C(n, "compact"), C(s, "horizontal"), C(l, "piled"), C(c, "raised"), C(p, "stacked"), "segments", r), m = Z(Es, e), v = ae(Es, e);
  return /* @__PURE__ */ b.createElement(v, F({}, m, {
    className: h
  }), le(t) ? i : t);
}
Es.handledProps = ["as", "children", "className", "compact", "content", "horizontal", "piled", "raised", "size", "stacked"];
Es.propTypes = process.env.NODE_ENV !== "production" ? {
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
  size: d.oneOf(Mt(Gt, "medium")),
  /** Formatted to show it contains multiple pages. */
  stacked: d.bool
} : {};
function ws(e) {
  var t = e.children, r = e.className, n = e.content, i = ee("inline", r), s = Z(ws, e), l = ae(ws, e);
  return /* @__PURE__ */ b.createElement(l, F({}, s, {
    className: i
  }), le(t) ? n : t);
}
ws.handledProps = ["as", "children", "className", "content"];
ws.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
function Ka(e) {
  var t = e.attached, r = e.basic, n = e.children, i = e.circular, s = e.className, l = e.clearing, c = e.color, f = e.compact, p = e.content, h = e.disabled, m = e.floated, v = e.inverted, w = e.loading, O = e.placeholder, T = e.padded, _ = e.piled, x = e.raised, D = e.secondary, k = e.size, z = e.stacked, N = e.tertiary, B = e.textAlign, P = e.vertical, $ = ee("ui", c, k, C(r, "basic"), C(i, "circular"), C(l, "clearing"), C(f, "compact"), C(h, "disabled"), C(v, "inverted"), C(w, "loading"), C(O, "placeholder"), C(_, "piled"), C(x, "raised"), C(D, "secondary"), C(z, "stacked"), C(N, "tertiary"), C(P, "vertical"), rt(t, "attached"), rt(T, "padded"), gr(B), Lt(m, "floated"), "segment", s), I = Z(Ka, e), U = ae(Ka, e);
  return /* @__PURE__ */ b.createElement(U, F({}, I, {
    className: $
  }), le(n) ? p : n);
}
Ka.handledProps = ["as", "attached", "basic", "children", "circular", "className", "clearing", "color", "compact", "content", "disabled", "floated", "inverted", "loading", "padded", "piled", "placeholder", "raised", "secondary", "size", "stacked", "tertiary", "textAlign", "vertical"];
Ka.Group = Es;
Ka.Inline = ws;
Ka.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: d.oneOf(mr),
  /** A segment may take up only as much space as is necessary. */
  compact: d.bool,
  /** Shorthand for primary content. */
  content: me,
  /** A segment may show its content is disabled. */
  disabled: d.bool,
  /** Segment content can be floated to the left or right. */
  floated: d.oneOf(fa),
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
  size: d.oneOf(Mt(Gt, "medium")),
  /** Formatted to show it contains multiple pages. */
  stacked: d.bool,
  /** A segment can be formatted to appear even less noticeable. */
  tertiary: d.bool,
  /** Formats content to be aligned as part of a vertical group. */
  textAlign: d.oneOf(Mt(vr, "justified")),
  /** Formats content to be aligned vertically. */
  vertical: d.bool
} : {};
function Ss(e) {
  "@babel/helpers - typeof";
  return Ss = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ss(e);
}
function IM(e, t) {
  if (Ss(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ss(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kM(e) {
  var t = IM(e, "string");
  return Ss(t) == "symbol" ? t : t + "";
}
function Wi(e) {
  var t = e.children, r = e.className, n = e.content, i = e.textAlign, s = ee(gr(i), "description", r), l = Z(Wi, e), c = ae(Wi, e);
  return /* @__PURE__ */ b.createElement(c, F({}, l, {
    className: s
  }), le(t) ? n : t);
}
Wi.handledProps = ["as", "children", "className", "content", "textAlign"];
Wi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** A card content can adjust its text alignment. */
  textAlign: d.oneOf(Mt(vr, "justified"))
} : {};
function Gi(e) {
  var t = e.children, r = e.className, n = e.content, i = e.textAlign, s = ee(gr(i), "header", r), l = Z(Gi, e), c = ae(Gi, e);
  return /* @__PURE__ */ b.createElement(c, F({}, l, {
    className: s
  }), le(t) ? n : t);
}
Gi.handledProps = ["as", "children", "className", "content", "textAlign"];
Gi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** A card header can adjust its text alignment. */
  textAlign: d.oneOf(Mt(vr, "justified"))
} : {};
function Qi(e) {
  var t = e.children, r = e.className, n = e.content, i = e.textAlign, s = ee(gr(i), "meta", r), l = Z(Qi, e), c = ae(Qi, e);
  return /* @__PURE__ */ b.createElement(c, F({}, l, {
    className: s
  }), le(t) ? n : t);
}
Qi.handledProps = ["as", "children", "className", "content", "textAlign"];
Qi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** A card meta can adjust its text alignment. */
  textAlign: d.oneOf(Mt(vr, "justified"))
} : {};
function Ya(e) {
  var t = e.children, r = e.className, n = e.content, i = e.description, s = e.extra, l = e.header, c = e.meta, f = e.textAlign, p = ee(C(s, "extra"), gr(f), "content", r), h = Z(Ya, e), m = ae(Ya, e);
  return le(t) ? le(n) ? /* @__PURE__ */ b.createElement(m, F({}, h, {
    className: p
  }), Ai(Gi, function(v) {
    return {
      content: v
    };
  }, l, {
    autoGenerateKey: !1
  }), Ai(Qi, function(v) {
    return {
      content: v
    };
  }, c, {
    autoGenerateKey: !1
  }), Ai(Wi, function(v) {
    return {
      content: v
    };
  }, i, {
    autoGenerateKey: !1
  })) : /* @__PURE__ */ b.createElement(m, F({}, h, {
    className: p
  }), n) : /* @__PURE__ */ b.createElement(m, F({}, h, {
    className: p
  }), t);
}
Ya.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "meta", "textAlign"];
Ya.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** Shorthand for CardDescription. */
  description: fe,
  /** A card can contain extra content meant to be formatted separately from the main content. */
  extra: d.bool,
  /** Shorthand for CardHeader. */
  header: fe,
  /** Shorthand for CardMeta. */
  meta: fe,
  /** A card content can adjust its text alignment. */
  textAlign: d.oneOf(Mt(vr, "justified"))
} : {};
function _s(e) {
  var t = e.centered, r = e.children, n = e.className, i = e.content, s = e.doubling, l = e.items, c = e.itemsPerRow, f = e.stackable, p = e.textAlign, h = ee("ui", C(t, "centered"), C(s, "doubling"), C(f, "stackable"), gr(p), Vt(c), "cards", n), m = Z(_s, e), v = ae(_s, e);
  if (!le(r))
    return /* @__PURE__ */ b.createElement(v, F({}, m, {
      className: h
    }), r);
  if (!le(i))
    return /* @__PURE__ */ b.createElement(v, F({}, m, {
      className: h
    }), i);
  var w = yt(l, function(O) {
    var T, _ = (T = O.key) != null ? T : [O.header, O.description].join("-");
    return /* @__PURE__ */ b.createElement(wt, F({
      key: _
    }, O));
  });
  return /* @__PURE__ */ b.createElement(v, F({}, m, {
    className: h
  }), w);
}
_s.handledProps = ["as", "centered", "children", "className", "content", "doubling", "items", "itemsPerRow", "stackable", "textAlign"];
_s.propTypes = process.env.NODE_ENV !== "production" ? {
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
  items: da,
  /** A group of cards can set how many cards should exist in a row. */
  itemsPerRow: d.oneOf(Jt),
  /** A group of cards can automatically stack rows to a single columns on mobile devices. */
  stackable: d.bool,
  /** A card group can adjust its text alignment. */
  textAlign: d.oneOf(Mt(vr, "justified"))
} : {};
var wt = /* @__PURE__ */ function(e) {
  at(t, e);
  function t() {
    for (var n, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return n = e.call.apply(e, [this].concat(s)) || this, n.handleClick = function(c) {
      var f = n.props.onClick;
      f && f(c, n.props);
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, s = i.centered, l = i.children, c = i.className, f = i.color, p = i.content, h = i.description, m = i.extra, v = i.fluid, w = i.header, O = i.href, T = i.image, _ = i.link, x = i.meta, D = i.onClick, k = i.raised, z = ee("ui", f, C(s, "centered"), C(v, "fluid"), C(_, "link"), C(k, "raised"), "card", c), N = Z(t, this.props), B = ae(t, this.props, function() {
      if (D)
        return "a";
    });
    return le(l) ? le(p) ? /* @__PURE__ */ b.createElement(B, F({}, N, {
      className: z,
      href: O,
      onClick: this.handleClick
    }), Ut.create(T, {
      autoGenerateKey: !1,
      defaultProps: {
        ui: !1,
        wrapped: !0
      }
    }), (h || w || x) && /* @__PURE__ */ b.createElement(Ya, {
      description: h,
      header: w,
      meta: x
    }), m && /* @__PURE__ */ b.createElement(Ya, {
      extra: !0
    }, m)) : /* @__PURE__ */ b.createElement(B, F({}, N, {
      className: z,
      href: O,
      onClick: this.handleClick
    }), p) : /* @__PURE__ */ b.createElement(B, F({}, N, {
      className: z,
      href: O,
      onClick: this.handleClick
    }), l);
  }, t;
}(He);
wt.handledProps = ["as", "centered", "children", "className", "color", "content", "description", "extra", "fluid", "header", "href", "image", "link", "meta", "onClick", "raised"];
wt.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** A Card can center itself inside its container. */
  centered: d.bool,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** A Card can be formatted to display different colors. */
  color: d.oneOf(mr),
  /** Shorthand for primary content. */
  content: me,
  /** Shorthand for CardDescription. */
  description: fe,
  /** Shorthand for primary content of CardContent. */
  extra: me,
  /** A Card can be formatted to take up the width of its container. */
  fluid: d.bool,
  /** Shorthand for CardHeader. */
  header: fe,
  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: d.string,
  /** A card can contain an Image component. */
  image: fe,
  /** A card can be formatted to link to other content. */
  link: d.bool,
  /** Shorthand for CardMeta. */
  meta: fe,
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
wt.Content = Ya;
wt.Description = Wi;
wt.Group = _s;
wt.Header = Gi;
wt.Meta = Qi;
function oa(e) {
  var t = e.children, r = e.className, n = e.content, i = ee("header", r), s = Z(oa, e), l = ae(oa, e);
  return /* @__PURE__ */ b.createElement(l, F({}, s, {
    className: i
  }), le(t) ? n : t);
}
oa.handledProps = ["as", "children", "className", "content"];
oa.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
oa.create = qe(oa, function(e) {
  return {
    content: e
  };
});
function sa(e) {
  var t = e.children, r = e.className, n = e.content, i = ee("description", r), s = Z(sa, e), l = ae(sa, e);
  return /* @__PURE__ */ b.createElement(l, F({}, s, {
    className: i
  }), le(t) ? n : t);
}
sa.handledProps = ["as", "children", "className", "content"];
sa.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
sa.create = qe(sa, function(e) {
  return {
    content: e
  };
});
function la(e) {
  var t = e.children, r = e.className, n = e.content, i = ee("extra", r), s = Z(la, e), l = ae(la, e);
  return /* @__PURE__ */ b.createElement(l, F({}, s, {
    className: i
  }), le(t) ? n : t);
}
la.handledProps = ["as", "children", "className", "content"];
la.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
la.create = qe(la, function(e) {
  return {
    content: e
  };
});
function ca(e) {
  var t = e.children, r = e.className, n = e.content, i = ee("meta", r), s = Z(ca, e), l = ae(ca, e);
  return /* @__PURE__ */ b.createElement(l, F({}, s, {
    className: i
  }), le(t) ? n : t);
}
ca.handledProps = ["as", "children", "className", "content"];
ca.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me
} : {};
ca.create = qe(ca, function(e) {
  return {
    content: e
  };
});
function Ki(e) {
  var t = e.children, r = e.className, n = e.content, i = e.description, s = e.extra, l = e.header, c = e.meta, f = e.verticalAlign, p = ee($r(f), "content", r), h = Z(Ki, e), m = ae(Ki, e);
  return le(t) ? /* @__PURE__ */ b.createElement(m, F({}, h, {
    className: p
  }), oa.create(l, {
    autoGenerateKey: !1
  }), ca.create(c, {
    autoGenerateKey: !1
  }), sa.create(i, {
    autoGenerateKey: !1
  }), la.create(s, {
    autoGenerateKey: !1
  }), n) : /* @__PURE__ */ b.createElement(m, F({}, h, {
    className: p
  }), t);
}
Ki.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "meta", "verticalAlign"];
Ki.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for primary content. */
  content: me,
  /** Shorthand for ItemDescription component. */
  description: fe,
  /** Shorthand for ItemExtra component. */
  extra: fe,
  /** Shorthand for ItemHeader component. */
  header: fe,
  /** Shorthand for ItemMeta component. */
  meta: fe,
  /** Content can specify its vertical alignment. */
  verticalAlign: d.oneOf(zr)
} : {};
function Os(e) {
  var t = e.children, r = e.className, n = e.content, i = e.divided, s = e.items, l = e.link, c = e.relaxed, f = e.unstackable, p = ee("ui", C(i, "divided"), C(l, "link"), C(f, "unstackable"), rt(c, "relaxed"), "items", r), h = Z(Os, e), m = ae(Os, e);
  if (!le(t))
    return /* @__PURE__ */ b.createElement(m, F({}, h, {
      className: p
    }), t);
  if (!le(n))
    return /* @__PURE__ */ b.createElement(m, F({}, h, {
      className: p
    }), n);
  var v = yt(s, function(w) {
    var O = w.childKey, T = Ba(w, ["childKey"]), _ = O ?? [T.content, T.description, T.header, T.meta].join("-");
    return /* @__PURE__ */ b.createElement(Dt, F({}, T, {
      key: _
    }));
  });
  return /* @__PURE__ */ b.createElement(m, F({}, h, {
    className: p
  }), v);
}
Os.handledProps = ["as", "children", "className", "content", "divided", "items", "link", "relaxed", "unstackable"];
Os.propTypes = process.env.NODE_ENV !== "production" ? {
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
  items: da,
  /** An item can be formatted so that the entire contents link to another page. */
  link: d.bool,
  /** A group of items can relax its padding to provide more negative space. */
  relaxed: d.oneOfType([d.bool, d.oneOf(["very"])]),
  /** Prevent items from stacking on mobile. */
  unstackable: d.bool
} : {};
function Xa(e) {
  var t = e.size, r = Z(Xa, e);
  return /* @__PURE__ */ b.createElement(Ut, F({}, r, {
    size: t,
    ui: !!t,
    wrapped: !0
  }));
}
Xa.handledProps = ["size"];
Xa.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An image may appear at different sizes. */
  size: Ut.propTypes.size
} : {};
Xa.create = qe(Xa, function(e) {
  return {
    src: e
  };
});
function Dt(e) {
  var t = e.children, r = e.className, n = e.content, i = e.description, s = e.extra, l = e.header, c = e.image, f = e.meta, p = ee("item", r), h = Z(Dt, e), m = ae(Dt, e);
  return le(t) ? /* @__PURE__ */ b.createElement(m, F({}, h, {
    className: p
  }), Xa.create(c, {
    autoGenerateKey: !1
  }), /* @__PURE__ */ b.createElement(Ki, {
    content: n,
    description: i,
    extra: s,
    header: l,
    meta: f
  })) : /* @__PURE__ */ b.createElement(m, F({}, h, {
    className: p
  }), t);
}
Dt.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "image", "meta"];
Dt.Content = Ki;
Dt.Description = sa;
Dt.Extra = la;
Dt.Group = Os;
Dt.Header = oa;
Dt.Image = Xa;
Dt.Meta = ca;
Dt.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: d.elementType,
  /** Primary content. */
  children: d.node,
  /** Additional classes. */
  className: d.string,
  /** Shorthand for ItemContent component. */
  content: me,
  /** Shorthand for ItemDescription component. */
  description: fe,
  /** Shorthand for ItemExtra component. */
  extra: fe,
  /** Shorthand for ItemHeader component. */
  header: fe,
  /** Shorthand for ItemImage component. */
  image: fe,
  /** Shorthand for ItemMeta component. */
  meta: fe
} : {};
function Ia(e, t, r) {
  return (t = kM(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function aw(e, t) {
  if (e == null)
    return {};
  var r, n, i = Ba(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (n = 0; n < s.length; n++)
      r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Fv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fv(Object(r), !0).forEach(function(n) {
      Ia(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const gp = b.createContext({});
function Ee(e) {
  let t = e.id, r = e.children, n = aw(e, ["id", "children"]);
  const i = dt(gp), s = r ? b.Children.only(r) : null, l = s ? s.props : {};
  if (t in i) {
    const c = i[t];
    return b.createElement(c, Bv(Bv({}, l), n));
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
    let s = i.children, l = aw(i, ["children"]);
    const f = dt(gp)[e];
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
function Uv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function DM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uv(Object(r), !0).forEach(function(n) {
      Ia(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
class LM {
  constructor(t) {
    Ia(this, "add", (r, n) => {
      this.components[r] = n;
    }), Ia(this, "get", (r) => this.components[r]), Ia(this, "getAll", () => DM({}, this.components)), Ia(this, "clear", () => {
      this.components = {};
    }), this.components = t || {};
  }
}
new LM();
var MM = Object.prototype;
function FM(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || MM;
  return e === r;
}
var $c = FM;
function BM(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var iw = BM, UM = iw, zM = UM(Object.keys, Object), qM = zM, jM = $c, HM = qM, VM = Object.prototype, WM = VM.hasOwnProperty;
function GM(e) {
  if (!jM(e))
    return HM(e);
  var t = [];
  for (var r in Object(e))
    WM.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var ow = GM, QM = typeof Lr == "object" && Lr && Lr.Object === Object && Lr, sw = QM, KM = sw, YM = typeof self == "object" && self && self.Object === Object && self, XM = KM || YM || Function("return this")(), on = XM, JM = on, ZM = JM.Symbol, Rs = ZM, zv = Rs, lw = Object.prototype, eF = lw.hasOwnProperty, tF = lw.toString, Bo = zv ? zv.toStringTag : void 0;
function rF(e) {
  var t = eF.call(e, Bo), r = e[Bo];
  try {
    e[Bo] = void 0;
    var n = !0;
  } catch {
  }
  var i = tF.call(e);
  return n && (t ? e[Bo] = r : delete e[Bo]), i;
}
var nF = rF, aF = Object.prototype, iF = aF.toString;
function oF(e) {
  return iF.call(e);
}
var sF = oF, qv = Rs, lF = nF, cF = sF, uF = "[object Null]", dF = "[object Undefined]", jv = qv ? qv.toStringTag : void 0;
function fF(e) {
  return e == null ? e === void 0 ? dF : uF : jv && jv in Object(e) ? lF(e) : cF(e);
}
var pa = fF;
function pF(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ha = pF;
const hF = /* @__PURE__ */ Rt(ha);
var gF = pa, mF = ha, vF = "[object AsyncFunction]", yF = "[object Function]", bF = "[object GeneratorFunction]", EF = "[object Proxy]";
function wF(e) {
  if (!mF(e))
    return !1;
  var t = gF(e);
  return t == yF || t == bF || t == vF || t == EF;
}
var cw = wF, SF = on, _F = SF["__core-js_shared__"], OF = _F, Ld = OF, Hv = function() {
  var e = /[^.]+$/.exec(Ld && Ld.keys && Ld.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function TF(e) {
  return !!Hv && Hv in e;
}
var PF = TF, xF = Function.prototype, AF = xF.toString;
function CF(e) {
  if (e != null) {
    try {
      return AF.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var uw = CF, $F = cw, RF = PF, NF = ha, IF = uw, kF = /[\\^$.*+?()[\]{}|]/g, DF = /^\[object .+?Constructor\]$/, LF = Function.prototype, MF = Object.prototype, FF = LF.toString, BF = MF.hasOwnProperty, UF = RegExp(
  "^" + FF.call(BF).replace(kF, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function zF(e) {
  if (!NF(e) || RF(e))
    return !1;
  var t = $F(e) ? UF : DF;
  return t.test(IF(e));
}
var qF = zF;
function jF(e, t) {
  return e == null ? void 0 : e[t];
}
var HF = jF, VF = qF, WF = HF;
function GF(e, t) {
  var r = WF(e, t);
  return VF(r) ? r : void 0;
}
var ai = GF, QF = ai, KF = on, YF = QF(KF, "DataView"), XF = YF, JF = ai, ZF = on, eB = JF(ZF, "Map"), mp = eB, tB = ai, rB = on, nB = tB(rB, "Promise"), aB = nB, iB = ai, oB = on, sB = iB(oB, "Set"), lB = sB, cB = ai, uB = on, dB = cB(uB, "WeakMap"), fB = dB, Nf = XF, If = mp, kf = aB, Df = lB, Lf = fB, dw = pa, so = uw, Vv = "[object Map]", pB = "[object Object]", Wv = "[object Promise]", Gv = "[object Set]", Qv = "[object WeakMap]", Kv = "[object DataView]", hB = so(Nf), gB = so(If), mB = so(kf), vB = so(Df), yB = so(Lf), Aa = dw;
(Nf && Aa(new Nf(new ArrayBuffer(1))) != Kv || If && Aa(new If()) != Vv || kf && Aa(kf.resolve()) != Wv || Df && Aa(new Df()) != Gv || Lf && Aa(new Lf()) != Qv) && (Aa = function(e) {
  var t = dw(e), r = t == pB ? e.constructor : void 0, n = r ? so(r) : "";
  if (n)
    switch (n) {
      case hB:
        return Kv;
      case gB:
        return Vv;
      case mB:
        return Wv;
      case vB:
        return Gv;
      case yB:
        return Qv;
    }
  return t;
});
var Rc = Aa;
function bB(e) {
  return e != null && typeof e == "object";
}
var Un = bB, EB = pa, wB = Un, SB = "[object Arguments]";
function _B(e) {
  return wB(e) && EB(e) == SB;
}
var OB = _B, Yv = OB, TB = Un, fw = Object.prototype, PB = fw.hasOwnProperty, xB = fw.propertyIsEnumerable, AB = Yv(function() {
  return arguments;
}()) ? Yv : function(e) {
  return TB(e) && PB.call(e, "callee") && !xB.call(e, "callee");
}, Nc = AB, CB = Array.isArray, qr = CB;
const pw = /* @__PURE__ */ Rt(qr);
var $B = 9007199254740991;
function RB(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= $B;
}
var vp = RB, NB = cw, IB = vp;
function kB(e) {
  return e != null && IB(e.length) && !NB(e);
}
var Ic = kB, tc = { exports: {} };
function DB() {
  return !1;
}
var LB = DB;
tc.exports;
(function(e, t) {
  var r = on, n = LB, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, l = s && s.exports === i, c = l ? r.Buffer : void 0, f = c ? c.isBuffer : void 0, p = f || n;
  e.exports = p;
})(tc, tc.exports);
var yp = tc.exports, MB = pa, FB = vp, BB = Un, UB = "[object Arguments]", zB = "[object Array]", qB = "[object Boolean]", jB = "[object Date]", HB = "[object Error]", VB = "[object Function]", WB = "[object Map]", GB = "[object Number]", QB = "[object Object]", KB = "[object RegExp]", YB = "[object Set]", XB = "[object String]", JB = "[object WeakMap]", ZB = "[object ArrayBuffer]", eU = "[object DataView]", tU = "[object Float32Array]", rU = "[object Float64Array]", nU = "[object Int8Array]", aU = "[object Int16Array]", iU = "[object Int32Array]", oU = "[object Uint8Array]", sU = "[object Uint8ClampedArray]", lU = "[object Uint16Array]", cU = "[object Uint32Array]", ut = {};
ut[tU] = ut[rU] = ut[nU] = ut[aU] = ut[iU] = ut[oU] = ut[sU] = ut[lU] = ut[cU] = !0;
ut[UB] = ut[zB] = ut[ZB] = ut[qB] = ut[eU] = ut[jB] = ut[HB] = ut[VB] = ut[WB] = ut[GB] = ut[QB] = ut[KB] = ut[YB] = ut[XB] = ut[JB] = !1;
function uU(e) {
  return BB(e) && FB(e.length) && !!ut[MB(e)];
}
var dU = uU;
function fU(e) {
  return function(t) {
    return e(t);
  };
}
var bp = fU, rc = { exports: {} };
rc.exports;
(function(e, t) {
  var r = sw, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, l = s && r.process, c = function() {
    try {
      var f = i && i.require && i.require("util").types;
      return f || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(rc, rc.exports);
var Ep = rc.exports, pU = dU, hU = bp, Xv = Ep, Jv = Xv && Xv.isTypedArray, gU = Jv ? hU(Jv) : pU, hw = gU, mU = ow, vU = Rc, yU = Nc, bU = qr, EU = Ic, wU = yp, SU = $c, _U = hw, OU = "[object Map]", TU = "[object Set]", PU = Object.prototype, xU = PU.hasOwnProperty;
function AU(e) {
  if (e == null)
    return !0;
  if (EU(e) && (bU(e) || typeof e == "string" || typeof e.splice == "function" || wU(e) || _U(e) || yU(e)))
    return !e.length;
  var t = vU(e);
  if (t == OU || t == TU)
    return !e.size;
  if (SU(e))
    return !mU(e).length;
  for (var r in e)
    if (xU.call(e, r))
      return !1;
  return !0;
}
var CU = AU;
const sn = /* @__PURE__ */ Rt(CU);
function gw(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: $U } = Object.prototype, { getPrototypeOf: wp } = Object, { iterator: kc, toStringTag: mw } = Symbol, Dc = ((e) => (t) => {
  const r = $U.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), jr = (e) => (e = e.toLowerCase(), (t) => Dc(t) === e), Lc = (e) => (t) => typeof t === e, { isArray: lo } = Array, Ts = Lc("undefined");
function RU(e) {
  return e !== null && !Ts(e) && e.constructor !== null && !Ts(e.constructor) && ir(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const vw = jr("ArrayBuffer");
function NU(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && vw(e.buffer), t;
}
const IU = Lc("string"), ir = Lc("function"), yw = Lc("number"), Mc = (e) => e !== null && typeof e == "object", kU = (e) => e === !0 || e === !1, Bl = (e) => {
  if (Dc(e) !== "object")
    return !1;
  const t = wp(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(mw in e) && !(kc in e);
}, DU = jr("Date"), LU = jr("File"), MU = jr("Blob"), FU = jr("FileList"), BU = (e) => Mc(e) && ir(e.pipe), UU = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ir(e.append) && ((t = Dc(e)) === "formdata" || // detect form-data instance
  t === "object" && ir(e.toString) && e.toString() === "[object FormData]"));
}, zU = jr("URLSearchParams"), [qU, jU, HU, VU] = ["ReadableStream", "Request", "Response", "Headers"].map(jr), WU = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ns(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), lo(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), l = s.length;
    let c;
    for (n = 0; n < l; n++)
      c = s[n], t.call(null, e[c], c, e);
  }
}
function bw(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const ka = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ew = (e) => !Ts(e) && e !== ka;
function Mf() {
  const { caseless: e } = Ew(this) && this || {}, t = {}, r = (n, i) => {
    const s = e && bw(t, i) || i;
    Bl(t[s]) && Bl(n) ? t[s] = Mf(t[s], n) : Bl(n) ? t[s] = Mf({}, n) : lo(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Ns(arguments[n], r);
  return t;
}
const GU = (e, t, r, { allOwnKeys: n } = {}) => (Ns(t, (i, s) => {
  r && ir(i) ? e[s] = gw(i, r) : e[s] = i;
}, { allOwnKeys: n }), e), QU = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), KU = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, YU = (e, t, r, n) => {
  let i, s, l;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
      l = i[s], (!n || n(l, e, t)) && !c[l] && (t[l] = e[l], c[l] = !0);
    e = r !== !1 && wp(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, XU = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, JU = (e) => {
  if (!e)
    return null;
  if (lo(e))
    return e;
  let t = e.length;
  if (!yw(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, ZU = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && wp(Uint8Array)), e3 = (e, t) => {
  const n = (e && e[kc]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const s = i.value;
    t.call(e, s[0], s[1]);
  }
}, t3 = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, r3 = jr("HTMLFormElement"), n3 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Zv = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), a3 = jr("RegExp"), ww = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Ns(r, (i, s) => {
    let l;
    (l = t(i, s, e)) !== !1 && (n[s] = l || i);
  }), Object.defineProperties(e, n);
}, i3 = (e) => {
  ww(e, (t, r) => {
    if (ir(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (ir(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, o3 = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((s) => {
      r[s] = !0;
    });
  };
  return lo(e) ? n(e) : n(String(e).split(t)), r;
}, s3 = () => {
}, l3 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function c3(e) {
  return !!(e && ir(e.append) && e[mw] === "FormData" && e[kc]);
}
const u3 = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (Mc(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[i] = n;
        const s = lo(n) ? [] : {};
        return Ns(n, (l, c) => {
          const f = r(l, i + 1);
          !Ts(f) && (s[c] = f);
        }), t[i] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, d3 = jr("AsyncFunction"), f3 = (e) => e && (Mc(e) || ir(e)) && ir(e.then) && ir(e.catch), Sw = ((e, t) => e ? setImmediate : t ? ((r, n) => (ka.addEventListener("message", ({ source: i, data: s }) => {
  i === ka && s === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), ka.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  ir(ka.postMessage)
), p3 = typeof queueMicrotask < "u" ? queueMicrotask.bind(ka) : typeof process < "u" && process.nextTick || Sw, h3 = (e) => e != null && ir(e[kc]), j = {
  isArray: lo,
  isArrayBuffer: vw,
  isBuffer: RU,
  isFormData: UU,
  isArrayBufferView: NU,
  isString: IU,
  isNumber: yw,
  isBoolean: kU,
  isObject: Mc,
  isPlainObject: Bl,
  isReadableStream: qU,
  isRequest: jU,
  isResponse: HU,
  isHeaders: VU,
  isUndefined: Ts,
  isDate: DU,
  isFile: LU,
  isBlob: MU,
  isRegExp: a3,
  isFunction: ir,
  isStream: BU,
  isURLSearchParams: zU,
  isTypedArray: ZU,
  isFileList: FU,
  forEach: Ns,
  merge: Mf,
  extend: GU,
  trim: WU,
  stripBOM: QU,
  inherits: KU,
  toFlatObject: YU,
  kindOf: Dc,
  kindOfTest: jr,
  endsWith: XU,
  toArray: JU,
  forEachEntry: e3,
  matchAll: t3,
  isHTMLForm: r3,
  hasOwnProperty: Zv,
  hasOwnProp: Zv,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ww,
  freezeMethods: i3,
  toObjectSet: o3,
  toCamelCase: n3,
  noop: s3,
  toFiniteNumber: l3,
  findKey: bw,
  global: ka,
  isContextDefined: Ew,
  isSpecCompliantForm: c3,
  toJSONObject: u3,
  isAsyncFn: d3,
  isThenable: f3,
  setImmediate: Sw,
  asap: p3,
  isIterable: h3
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
const _w = Re.prototype, Ow = {};
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
  Ow[e] = { value: e };
});
Object.defineProperties(Re, Ow);
Object.defineProperty(_w, "isAxiosError", { value: !0 });
Re.from = (e, t, r, n, i, s) => {
  const l = Object.create(_w);
  return j.toFlatObject(e, l, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), Re.call(l, e.message, t, r, n, i), l.cause = e, l.name = e.name, s && Object.assign(l, s), l;
};
const g3 = null;
function Ff(e) {
  return j.isPlainObject(e) || j.isArray(e);
}
function Tw(e) {
  return j.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ey(e, t, r) {
  return e ? e.concat(t).map(function(i, s) {
    return i = Tw(i), !r && s ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function m3(e) {
  return j.isArray(e) && !e.some(Ff);
}
const v3 = j.toFlatObject(j, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Fc(e, t, r) {
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
    let x = O;
    if (O && !_ && typeof O == "object") {
      if (j.endsWith(T, "{}"))
        T = n ? T : T.slice(0, -2), O = JSON.stringify(O);
      else if (j.isArray(O) && m3(O) || (j.isFileList(O) || j.endsWith(T, "[]")) && (x = j.toArray(O)))
        return T = Tw(T), x.forEach(function(k, z) {
          !(j.isUndefined(k) || k === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? ey([T], z, s) : l === null ? T : T + "[]",
            p(k)
          );
        }), !1;
    }
    return Ff(O) ? !0 : (t.append(ey(_, T, s), p(O)), !1);
  }
  const m = [], v = Object.assign(v3, {
    defaultVisitor: h,
    convertValue: p,
    isVisitable: Ff
  });
  function w(O, T) {
    if (!j.isUndefined(O)) {
      if (m.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      m.push(O), j.forEach(O, function(x, D) {
        (!(j.isUndefined(x) || x === null) && i.call(
          t,
          x,
          j.isString(D) ? D.trim() : D,
          T,
          v
        )) === !0 && w(x, T ? T.concat(D) : [D]);
      }), m.pop();
    }
  }
  if (!j.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function ty(e) {
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
function Sp(e, t) {
  this._pairs = [], e && Fc(e, this, t);
}
const Pw = Sp.prototype;
Pw.append = function(t, r) {
  this._pairs.push([t, r]);
};
Pw.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, ty);
  } : ty;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function y3(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function xw(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || y3;
  j.isFunction(r) && (r = {
    serialize: r
  });
  const i = r && r.serialize;
  let s;
  if (i ? s = i(t, r) : s = j.isURLSearchParams(t) ? t.toString() : new Sp(t, r).toString(n), s) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class b3 {
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
const ry = b3, Aw = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, E3 = typeof URLSearchParams < "u" ? URLSearchParams : Sp, w3 = typeof FormData < "u" ? FormData : null, S3 = typeof Blob < "u" ? Blob : null, _3 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: E3,
    FormData: w3,
    Blob: S3
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, _p = typeof window < "u" && typeof document < "u", Bf = typeof navigator == "object" && navigator || void 0, O3 = _p && (!Bf || ["ReactNative", "NativeScript", "NS"].indexOf(Bf.product) < 0), T3 = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), P3 = _p && window.location.href || "http://localhost", x3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: _p,
  hasStandardBrowserEnv: O3,
  hasStandardBrowserWebWorkerEnv: T3,
  navigator: Bf,
  origin: P3
}, Symbol.toStringTag, { value: "Module" })), Wt = {
  ...x3,
  ..._3
};
function A3(e, t) {
  return Fc(e, new Wt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, s) {
      return Wt.isNode && j.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function C3(e) {
  return j.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function $3(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let s;
  for (n = 0; n < i; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function Cw(e) {
  function t(r, n, i, s) {
    let l = r[s++];
    if (l === "__proto__")
      return !0;
    const c = Number.isFinite(+l), f = s >= r.length;
    return l = !l && j.isArray(i) ? i.length : l, f ? (j.hasOwnProp(i, l) ? i[l] = [i[l], n] : i[l] = n, !c) : ((!i[l] || !j.isObject(i[l])) && (i[l] = []), t(r, n, i[l], s) && j.isArray(i[l]) && (i[l] = $3(i[l])), !c);
  }
  if (j.isFormData(e) && j.isFunction(e.entries)) {
    const r = {};
    return j.forEachEntry(e, (n, i) => {
      t(C3(n), i, r, 0);
    }), r;
  }
  return null;
}
function R3(e, t, r) {
  if (j.isString(e))
    try {
      return (t || JSON.parse)(e), j.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Op = {
  transitional: Aw,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, s = j.isObject(t);
    if (s && j.isHTMLForm(t) && (t = new FormData(t)), j.isFormData(t))
      return i ? JSON.stringify(Cw(t)) : t;
    if (j.isArrayBuffer(t) || j.isBuffer(t) || j.isStream(t) || j.isFile(t) || j.isBlob(t) || j.isReadableStream(t))
      return t;
    if (j.isArrayBufferView(t))
      return t.buffer;
    if (j.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return A3(t, this.formSerializer).toString();
      if ((c = j.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Fc(
          c ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return s || i ? (r.setContentType("application/json", !1), R3(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Op.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (j.isResponse(t) || j.isReadableStream(t))
      return t;
    if (t && j.isString(t) && (n && !this.responseType || i)) {
      const l = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (l)
          throw c.name === "SyntaxError" ? Re.from(c, Re.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
    FormData: Wt.classes.FormData,
    Blob: Wt.classes.Blob
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
  Op.headers[e] = {};
});
const Tp = Op, N3 = j.toObjectSet([
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
]), I3 = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(l) {
    i = l.indexOf(":"), r = l.substring(0, i).trim().toLowerCase(), n = l.substring(i + 1).trim(), !(!r || t[r] && N3[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, ny = Symbol("internals");
function Uo(e) {
  return e && String(e).trim().toLowerCase();
}
function Ul(e) {
  return e === !1 || e == null ? e : j.isArray(e) ? e.map(Ul) : String(e);
}
function k3(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const D3 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Md(e, t, r, n, i) {
  if (j.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!j.isString(t)) {
    if (j.isString(n))
      return t.indexOf(n) !== -1;
    if (j.isRegExp(n))
      return n.test(t);
  }
}
function L3(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function M3(e, t) {
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
class Bc {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function s(c, f, p) {
      const h = Uo(f);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const m = j.findKey(i, h);
      (!m || i[m] === void 0 || p === !0 || p === void 0 && i[m] !== !1) && (i[m || f] = Ul(c));
    }
    const l = (c, f) => j.forEach(c, (p, h) => s(p, h, f));
    if (j.isPlainObject(t) || t instanceof this.constructor)
      l(t, r);
    else if (j.isString(t) && (t = t.trim()) && !D3(t))
      l(I3(t), r);
    else if (j.isObject(t) && j.isIterable(t)) {
      let c = {}, f, p;
      for (const h of t) {
        if (!j.isArray(h))
          throw TypeError("Object iterator must return a key-value pair");
        c[p = h[0]] = (f = c[p]) ? j.isArray(f) ? [...f, h[1]] : [f, h[1]] : h[1];
      }
      l(c, r);
    } else
      t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Uo(t), t) {
      const n = j.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return k3(i);
        if (j.isFunction(r))
          return r.call(this, i, n);
        if (j.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Uo(t), t) {
      const n = j.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Md(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function s(l) {
      if (l = Uo(l), l) {
        const c = j.findKey(n, l);
        c && (!r || Md(n, n[c], c, r)) && (delete n[c], i = !0);
      }
    }
    return j.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || Md(this, this[s], s, t, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return j.forEach(this, (i, s) => {
      const l = j.findKey(n, s);
      if (l) {
        r[l] = Ul(i), delete r[s];
        return;
      }
      const c = t ? L3(s) : String(s).trim();
      c !== s && delete r[s], r[c] = Ul(i), n[c] = !0;
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
    const n = (this[ny] = this[ny] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(l) {
      const c = Uo(l);
      n[c] || (M3(i, l), n[c] = !0);
    }
    return j.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Bc.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
j.reduceDescriptors(Bc.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
j.freezeMethods(Bc);
const Br = Bc;
function Fd(e, t) {
  const r = this || Tp, n = t || r, i = Br.from(n.headers);
  let s = n.data;
  return j.forEach(e, function(c) {
    s = c.call(r, s, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), s;
}
function $w(e) {
  return !!(e && e.__CANCEL__);
}
function co(e, t, r) {
  Re.call(this, e ?? "canceled", Re.ERR_CANCELED, t, r), this.name = "CanceledError";
}
j.inherits(co, Re, {
  __CANCEL__: !0
});
function Rw(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new Re(
    "Request failed with status code " + r.status,
    [Re.ERR_BAD_REQUEST, Re.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function F3(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function B3(e, t) {
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
function U3(e, t) {
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
const nc = (e, t, r = 3) => {
  let n = 0;
  const i = B3(50, 250);
  return U3((s) => {
    const l = s.loaded, c = s.lengthComputable ? s.total : void 0, f = l - n, p = i(f), h = l <= c;
    n = l;
    const m = {
      loaded: l,
      total: c,
      progress: c ? l / c : void 0,
      bytes: f,
      rate: p || void 0,
      estimated: p && c && h ? (c - l) / p : void 0,
      event: s,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(m);
  }, r);
}, ay = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, iy = (e) => (...t) => j.asap(() => e(...t)), z3 = Wt.hasStandardBrowserEnv ? ((e, t) => (r) => (r = new URL(r, Wt.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(Wt.origin),
  Wt.navigator && /(msie|trident)/i.test(Wt.navigator.userAgent)
) : () => !0, q3 = Wt.hasStandardBrowserEnv ? (
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
function j3(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function H3(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Nw(e, t, r) {
  let n = !j3(t);
  return e && (n || r == !1) ? H3(e, t) : t;
}
const oy = (e) => e instanceof Br ? { ...e } : e;
function Ja(e, t) {
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
  function c(p, h, m) {
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
    validateStatus: c,
    headers: (p, h, m) => i(oy(p), oy(h), m, !0)
  };
  return j.forEach(Object.keys(Object.assign({}, e, t)), function(h) {
    const m = f[h] || i, v = m(e[h], t[h], h);
    j.isUndefined(v) && m !== c || (r[h] = v);
  }), r;
}
const Iw = (e) => {
  const t = Ja({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: s, headers: l, auth: c } = t;
  t.headers = l = Br.from(l), t.url = xw(Nw(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && l.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let f;
  if (j.isFormData(r)) {
    if (Wt.hasStandardBrowserEnv || Wt.hasStandardBrowserWebWorkerEnv)
      l.setContentType(void 0);
    else if ((f = l.getContentType()) !== !1) {
      const [p, ...h] = f ? f.split(";").map((m) => m.trim()).filter(Boolean) : [];
      l.setContentType([p || "multipart/form-data", ...h].join("; "));
    }
  }
  if (Wt.hasStandardBrowserEnv && (n && j.isFunction(n) && (n = n(t)), n || n !== !1 && z3(t.url))) {
    const p = i && s && q3.read(s);
    p && l.set(i, p);
  }
  return t;
}, V3 = typeof XMLHttpRequest < "u", W3 = V3 && function(e) {
  return new Promise(function(r, n) {
    const i = Iw(e);
    let s = i.data;
    const l = Br.from(i.headers).normalize();
    let { responseType: c, onUploadProgress: f, onDownloadProgress: p } = i, h, m, v, w, O;
    function T() {
      w && w(), O && O(), i.cancelToken && i.cancelToken.unsubscribe(h), i.signal && i.signal.removeEventListener("abort", h);
    }
    let _ = new XMLHttpRequest();
    _.open(i.method.toUpperCase(), i.url, !0), _.timeout = i.timeout;
    function x() {
      if (!_)
        return;
      const k = Br.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), N = {
        data: !c || c === "text" || c === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: k,
        config: e,
        request: _
      };
      Rw(function(P) {
        r(P), T();
      }, function(P) {
        n(P), T();
      }, N), _ = null;
    }
    "onloadend" in _ ? _.onloadend = x : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(x);
    }, _.onabort = function() {
      _ && (n(new Re("Request aborted", Re.ECONNABORTED, e, _)), _ = null);
    }, _.onerror = function() {
      n(new Re("Network Error", Re.ERR_NETWORK, e, _)), _ = null;
    }, _.ontimeout = function() {
      let z = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const N = i.transitional || Aw;
      i.timeoutErrorMessage && (z = i.timeoutErrorMessage), n(new Re(
        z,
        N.clarifyTimeoutError ? Re.ETIMEDOUT : Re.ECONNABORTED,
        e,
        _
      )), _ = null;
    }, s === void 0 && l.setContentType(null), "setRequestHeader" in _ && j.forEach(l.toJSON(), function(z, N) {
      _.setRequestHeader(N, z);
    }), j.isUndefined(i.withCredentials) || (_.withCredentials = !!i.withCredentials), c && c !== "json" && (_.responseType = i.responseType), p && ([v, O] = nc(p, !0), _.addEventListener("progress", v)), f && _.upload && ([m, w] = nc(f), _.upload.addEventListener("progress", m), _.upload.addEventListener("loadend", w)), (i.cancelToken || i.signal) && (h = (k) => {
      _ && (n(!k || k.type ? new co(null, e, _) : k), _.abort(), _ = null);
    }, i.cancelToken && i.cancelToken.subscribe(h), i.signal && (i.signal.aborted ? h() : i.signal.addEventListener("abort", h)));
    const D = F3(i.url);
    if (D && Wt.protocols.indexOf(D) === -1) {
      n(new Re("Unsupported protocol " + D + ":", Re.ERR_BAD_REQUEST, e));
      return;
    }
    _.send(s || null);
  });
}, G3 = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), i;
    const s = function(p) {
      if (!i) {
        i = !0, c();
        const h = p instanceof Error ? p : this.reason;
        n.abort(h instanceof Re ? h : new co(h instanceof Error ? h.message : h));
      }
    };
    let l = t && setTimeout(() => {
      l = null, s(new Re(`timeout ${t} of ms exceeded`, Re.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (l && clearTimeout(l), l = null, e.forEach((p) => {
        p.unsubscribe ? p.unsubscribe(s) : p.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((p) => p.addEventListener("abort", s));
    const { signal: f } = n;
    return f.unsubscribe = () => j.asap(c), f;
  }
}, Q3 = G3, K3 = function* (e, t) {
  let r = e.byteLength;
  if (!t || r < t) {
    yield e;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + t, yield e.slice(n, i), n = i;
}, Y3 = async function* (e, t) {
  for await (const r of X3(e))
    yield* K3(r, t);
}, X3 = async function* (e) {
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
}, sy = (e, t, r, n) => {
  const i = Y3(e, t);
  let s = 0, l, c = (f) => {
    l || (l = !0, n && n(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: p, value: h } = await i.next();
        if (p) {
          c(), f.close();
          return;
        }
        let m = h.byteLength;
        if (r) {
          let v = s += m;
          r(v);
        }
        f.enqueue(new Uint8Array(h));
      } catch (p) {
        throw c(p), p;
      }
    },
    cancel(f) {
      return c(f), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Uc = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", kw = Uc && typeof ReadableStream == "function", J3 = Uc && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Dw = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Z3 = kw && Dw(() => {
  let e = !1;
  const t = new Request(Wt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), ly = 64 * 1024, Uf = kw && Dw(() => j.isReadableStream(new Response("").body)), ac = {
  stream: Uf && ((e) => e.body)
};
Uc && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ac[t] && (ac[t] = j.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new Re(`Response type '${t}' is not supported`, Re.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const ez = async (e) => {
  if (e == null)
    return 0;
  if (j.isBlob(e))
    return e.size;
  if (j.isSpecCompliantForm(e))
    return (await new Request(Wt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (j.isArrayBufferView(e) || j.isArrayBuffer(e))
    return e.byteLength;
  if (j.isURLSearchParams(e) && (e = e + ""), j.isString(e))
    return (await J3(e)).byteLength;
}, tz = async (e, t) => {
  const r = j.toFiniteNumber(e.getContentLength());
  return r ?? ez(t);
}, rz = Uc && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: i,
    cancelToken: s,
    timeout: l,
    onDownloadProgress: c,
    onUploadProgress: f,
    responseType: p,
    headers: h,
    withCredentials: m = "same-origin",
    fetchOptions: v
  } = Iw(e);
  p = p ? (p + "").toLowerCase() : "text";
  let w = Q3([i, s && s.toAbortSignal()], l), O;
  const T = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let _;
  try {
    if (f && Z3 && r !== "get" && r !== "head" && (_ = await tz(h, n)) !== 0) {
      let N = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), B;
      if (j.isFormData(n) && (B = N.headers.get("content-type")) && h.setContentType(B), N.body) {
        const [P, $] = ay(
          _,
          nc(iy(f))
        );
        n = sy(N.body, ly, P, $);
      }
    }
    j.isString(m) || (m = m ? "include" : "omit");
    const x = "credentials" in Request.prototype;
    O = new Request(t, {
      ...v,
      signal: w,
      method: r.toUpperCase(),
      headers: h.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: x ? m : void 0
    });
    let D = await fetch(O, v);
    const k = Uf && (p === "stream" || p === "response");
    if (Uf && (c || k && T)) {
      const N = {};
      ["status", "statusText", "headers"].forEach((I) => {
        N[I] = D[I];
      });
      const B = j.toFiniteNumber(D.headers.get("content-length")), [P, $] = c && ay(
        B,
        nc(iy(c), !0)
      ) || [];
      D = new Response(
        sy(D.body, ly, P, () => {
          $ && $(), T && T();
        }),
        N
      );
    }
    p = p || "text";
    let z = await ac[j.findKey(ac, p) || "text"](D, e);
    return !k && T && T(), await new Promise((N, B) => {
      Rw(N, B, {
        data: z,
        headers: Br.from(D.headers),
        status: D.status,
        statusText: D.statusText,
        config: e,
        request: O
      });
    });
  } catch (x) {
    throw T && T(), x && x.name === "TypeError" && /Load failed|fetch/i.test(x.message) ? Object.assign(
      new Re("Network Error", Re.ERR_NETWORK, e, O),
      {
        cause: x.cause || x
      }
    ) : Re.from(x, x && x.code, e, O);
  }
}), zf = {
  http: g3,
  xhr: W3,
  fetch: rz
};
j.forEach(zf, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const cy = (e) => `- ${e}`, nz = (e) => j.isFunction(e) || e === null || e === !1, Lw = {
  getAdapter: (e) => {
    e = j.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const i = {};
    for (let s = 0; s < t; s++) {
      r = e[s];
      let l;
      if (n = r, !nz(r) && (n = zf[(l = String(r)).toLowerCase()], n === void 0))
        throw new Re(`Unknown adapter '${l}'`);
      if (n)
        break;
      i[l || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(i).map(
        ([c, f]) => `adapter ${c} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? s.length > 1 ? `since :
` + s.map(cy).join(`
`) : " " + cy(s[0]) : "as no adapter specified";
      throw new Re(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: zf
};
function Bd(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new co(null, e);
}
function uy(e) {
  return Bd(e), e.headers = Br.from(e.headers), e.data = Fd.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Lw.getAdapter(e.adapter || Tp.adapter)(e).then(function(n) {
    return Bd(e), n.data = Fd.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Br.from(n.headers), n;
  }, function(n) {
    return $w(n) || (Bd(e), n && n.response && (n.response.data = Fd.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Br.from(n.response.headers))), Promise.reject(n);
  });
}
const Mw = "1.10.0", zc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  zc[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const dy = {};
zc.transitional = function(t, r, n) {
  function i(s, l) {
    return "[Axios v" + Mw + "] Transitional option '" + s + "'" + l + (n ? ". " + n : "");
  }
  return (s, l, c) => {
    if (t === !1)
      throw new Re(
        i(l, " has been removed" + (r ? " in " + r : "")),
        Re.ERR_DEPRECATED
      );
    return r && !dy[l] && (dy[l] = !0, console.warn(
      i(
        l,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, l, c) : !0;
  };
};
zc.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function az(e, t, r) {
  if (typeof e != "object")
    throw new Re("options must be an object", Re.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const s = n[i], l = t[s];
    if (l) {
      const c = e[s], f = c === void 0 || l(c, s, e);
      if (f !== !0)
        throw new Re("option " + s + " must be " + f, Re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Re("Unknown option " + s, Re.ERR_BAD_OPTION);
  }
}
const zl = {
  assertOptions: az,
  validators: zc
}, Kr = zl.validators;
class ic {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new ry(),
      response: new ry()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Ja(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: s } = r;
    n !== void 0 && zl.assertOptions(n, {
      silentJSONParsing: Kr.transitional(Kr.boolean),
      forcedJSONParsing: Kr.transitional(Kr.boolean),
      clarifyTimeoutError: Kr.transitional(Kr.boolean)
    }, !1), i != null && (j.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : zl.assertOptions(i, {
      encode: Kr.function,
      serialize: Kr.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), zl.assertOptions(r, {
      baseUrl: Kr.spelling("baseURL"),
      withXsrfToken: Kr.spelling("withXSRFToken")
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
    ), r.headers = Br.concat(l, s);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(T) {
      typeof T.runWhen == "function" && T.runWhen(r) === !1 || (f = f && T.synchronous, c.unshift(T.fulfilled, T.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(T) {
      p.push(T.fulfilled, T.rejected);
    });
    let h, m = 0, v;
    if (!f) {
      const O = [uy.bind(this), void 0];
      for (O.unshift.apply(O, c), O.push.apply(O, p), v = O.length, h = Promise.resolve(r); m < v; )
        h = h.then(O[m++], O[m++]);
      return h;
    }
    v = c.length;
    let w = r;
    for (m = 0; m < v; ) {
      const O = c[m++], T = c[m++];
      try {
        w = O(w);
      } catch (_) {
        T.call(this, _);
        break;
      }
    }
    try {
      h = uy.call(this, w);
    } catch (O) {
      return Promise.reject(O);
    }
    for (m = 0, v = p.length; m < v; )
      h = h.then(p[m++], p[m++]);
    return h;
  }
  getUri(t) {
    t = Ja(this.defaults, t);
    const r = Nw(t.baseURL, t.url, t.allowAbsoluteUrls);
    return xw(r, t.params, t.paramsSerializer);
  }
}
j.forEach(["delete", "get", "head", "options"], function(t) {
  ic.prototype[t] = function(r, n) {
    return this.request(Ja(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
j.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, l, c) {
      return this.request(Ja(c || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: l
      }));
    };
  }
  ic.prototype[t] = r(), ic.prototype[t + "Form"] = r(!0);
});
const ql = ic;
class Pp {
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
      const l = new Promise((c) => {
        n.subscribe(c), s = c;
      }).then(i);
      return l.cancel = function() {
        n.unsubscribe(s);
      }, l;
    }, t(function(s, l, c) {
      n.reason || (n.reason = new co(s, l, c), r(n.reason));
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
      token: new Pp(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const iz = Pp;
function oz(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function sz(e) {
  return j.isObject(e) && e.isAxiosError === !0;
}
const qf = {
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
Object.entries(qf).forEach(([e, t]) => {
  qf[t] = e;
});
const lz = qf;
function Fw(e) {
  const t = new ql(e), r = gw(ql.prototype.request, t);
  return j.extend(r, ql.prototype, t, { allOwnKeys: !0 }), j.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return Fw(Ja(e, i));
  }, r;
}
const Ot = Fw(Tp);
Ot.Axios = ql;
Ot.CanceledError = co;
Ot.CancelToken = iz;
Ot.isCancel = $w;
Ot.VERSION = Mw;
Ot.toFormData = Fc;
Ot.AxiosError = Re;
Ot.Cancel = Ot.CanceledError;
Ot.all = function(t) {
  return Promise.all(t);
};
Ot.spread = oz;
Ot.isAxiosError = sz;
Ot.mergeConfig = Ja;
Ot.AxiosHeaders = Br;
Ot.formToJSON = (e) => Cw(j.isHTMLForm(e) ? new FormData(e) : e);
Ot.getAdapter = Lw.getAdapter;
Ot.HttpStatusCode = lz;
Ot.default = Ot;
const jl = Ot;
var cz = pa, uz = Un, dz = "[object Symbol]";
function fz(e) {
  return typeof e == "symbol" || uz(e) && cz(e) == dz;
}
var xp = fz, pz = qr, hz = xp, gz = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, mz = /^\w*$/;
function vz(e, t) {
  if (pz(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || hz(e) ? !0 : mz.test(e) || !gz.test(e) || t != null && e in Object(t);
}
var yz = vz, bz = ai, Ez = bz(Object, "create"), qc = Ez, fy = qc;
function wz() {
  this.__data__ = fy ? fy(null) : {}, this.size = 0;
}
var Sz = wz;
function _z(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Oz = _z, Tz = qc, Pz = "__lodash_hash_undefined__", xz = Object.prototype, Az = xz.hasOwnProperty;
function Cz(e) {
  var t = this.__data__;
  if (Tz) {
    var r = t[e];
    return r === Pz ? void 0 : r;
  }
  return Az.call(t, e) ? t[e] : void 0;
}
var $z = Cz, Rz = qc, Nz = Object.prototype, Iz = Nz.hasOwnProperty;
function kz(e) {
  var t = this.__data__;
  return Rz ? t[e] !== void 0 : Iz.call(t, e);
}
var Dz = kz, Lz = qc, Mz = "__lodash_hash_undefined__";
function Fz(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Lz && t === void 0 ? Mz : t, this;
}
var Bz = Fz, Uz = Sz, zz = Oz, qz = $z, jz = Dz, Hz = Bz;
function uo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
uo.prototype.clear = Uz;
uo.prototype.delete = zz;
uo.prototype.get = qz;
uo.prototype.has = jz;
uo.prototype.set = Hz;
var Vz = uo;
function Wz() {
  this.__data__ = [], this.size = 0;
}
var Gz = Wz;
function Qz(e, t) {
  return e === t || e !== e && t !== t;
}
var Ap = Qz, Kz = Ap;
function Yz(e, t) {
  for (var r = e.length; r--; )
    if (Kz(e[r][0], t))
      return r;
  return -1;
}
var jc = Yz, Xz = jc, Jz = Array.prototype, Zz = Jz.splice;
function eq(e) {
  var t = this.__data__, r = Xz(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Zz.call(t, r, 1), --this.size, !0;
}
var tq = eq, rq = jc;
function nq(e) {
  var t = this.__data__, r = rq(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var aq = nq, iq = jc;
function oq(e) {
  return iq(this.__data__, e) > -1;
}
var sq = oq, lq = jc;
function cq(e, t) {
  var r = this.__data__, n = lq(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var uq = cq, dq = Gz, fq = tq, pq = aq, hq = sq, gq = uq;
function fo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
fo.prototype.clear = dq;
fo.prototype.delete = fq;
fo.prototype.get = pq;
fo.prototype.has = hq;
fo.prototype.set = gq;
var Hc = fo, py = Vz, mq = Hc, vq = mp;
function yq() {
  this.size = 0, this.__data__ = {
    hash: new py(),
    map: new (vq || mq)(),
    string: new py()
  };
}
var bq = yq;
function Eq(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var wq = Eq, Sq = wq;
function _q(e, t) {
  var r = e.__data__;
  return Sq(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Vc = _q, Oq = Vc;
function Tq(e) {
  var t = Oq(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Pq = Tq, xq = Vc;
function Aq(e) {
  return xq(this, e).get(e);
}
var Cq = Aq, $q = Vc;
function Rq(e) {
  return $q(this, e).has(e);
}
var Nq = Rq, Iq = Vc;
function kq(e, t) {
  var r = Iq(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Dq = kq, Lq = bq, Mq = Pq, Fq = Cq, Bq = Nq, Uq = Dq;
function po(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
po.prototype.clear = Lq;
po.prototype.delete = Mq;
po.prototype.get = Fq;
po.prototype.has = Bq;
po.prototype.set = Uq;
var Bw = po, Uw = Bw, zq = "Expected a function";
function Cp(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(zq);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var l = e.apply(this, n);
    return r.cache = s.set(i, l) || s, l;
  };
  return r.cache = new (Cp.Cache || Uw)(), r;
}
Cp.Cache = Uw;
var qq = Cp, jq = qq, Hq = 500;
function Vq(e) {
  var t = jq(e, function(n) {
    return r.size === Hq && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Wq = Vq, Gq = Wq, Qq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Kq = /\\(\\)?/g, Yq = Gq(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Qq, function(r, n, i, s) {
    t.push(i ? s.replace(Kq, "$1") : n || r);
  }), t;
}), Xq = Yq;
function Jq(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Zq = Jq, hy = Rs, ej = Zq, tj = qr, rj = xp, nj = 1 / 0, gy = hy ? hy.prototype : void 0, my = gy ? gy.toString : void 0;
function zw(e) {
  if (typeof e == "string")
    return e;
  if (tj(e))
    return ej(e, zw) + "";
  if (rj(e))
    return my ? my.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -nj ? "-0" : t;
}
var aj = zw, ij = aj;
function oj(e) {
  return e == null ? "" : ij(e);
}
var sj = oj, lj = qr, cj = yz, uj = Xq, dj = sj;
function fj(e, t) {
  return lj(e) ? e : cj(e, t) ? [e] : uj(dj(e));
}
var Wc = fj, pj = xp, hj = 1 / 0;
function gj(e) {
  if (typeof e == "string" || pj(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -hj ? "-0" : t;
}
var $p = gj, mj = Wc, vj = $p;
function yj(e, t) {
  t = mj(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[vj(t[r++])];
  return r && r == n ? e : void 0;
}
var qw = yj, bj = qw;
function Ej(e, t, r) {
  var n = e == null ? void 0 : bj(e, t);
  return n === void 0 ? r : n;
}
var wj = Ej;
const jo = /* @__PURE__ */ Rt(wj);
function Sj(e, t) {
  return e != null && t in Object(e);
}
var _j = Sj, Oj = 9007199254740991, Tj = /^(?:0|[1-9]\d*)$/;
function Pj(e, t) {
  var r = typeof e;
  return t = t ?? Oj, !!t && (r == "number" || r != "symbol" && Tj.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Gc = Pj, xj = Wc, Aj = Nc, Cj = qr, $j = Gc, Rj = vp, Nj = $p;
function Ij(e, t, r) {
  t = xj(t, e);
  for (var n = -1, i = t.length, s = !1; ++n < i; ) {
    var l = Nj(t[n]);
    if (!(s = e != null && r(e, l)))
      break;
    e = e[l];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && Rj(i) && $j(l, i) && (Cj(e) || Aj(e)));
}
var kj = Ij, Dj = _j, Lj = kj;
function Mj(e, t) {
  return e != null && Lj(e, t, Dj);
}
var jw = Mj;
const Fj = /* @__PURE__ */ Rt(jw);
var ho = TypeError;
const Bj = {}, Uj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bj
}, Symbol.toStringTag, { value: "Module" })), zj = /* @__PURE__ */ qC(Uj);
var Rp = typeof Map == "function" && Map.prototype, Ud = Object.getOwnPropertyDescriptor && Rp ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, oc = Rp && Ud && typeof Ud.get == "function" ? Ud.get : null, vy = Rp && Map.prototype.forEach, Np = typeof Set == "function" && Set.prototype, zd = Object.getOwnPropertyDescriptor && Np ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, sc = Np && zd && typeof zd.get == "function" ? zd.get : null, yy = Np && Set.prototype.forEach, qj = typeof WeakMap == "function" && WeakMap.prototype, Go = qj ? WeakMap.prototype.has : null, jj = typeof WeakSet == "function" && WeakSet.prototype, Qo = jj ? WeakSet.prototype.has : null, Hj = typeof WeakRef == "function" && WeakRef.prototype, by = Hj ? WeakRef.prototype.deref : null, Vj = Boolean.prototype.valueOf, Wj = Object.prototype.toString, Gj = Function.prototype.toString, Qj = String.prototype.match, Ip = String.prototype.slice, Jn = String.prototype.replace, Kj = String.prototype.toUpperCase, Ey = String.prototype.toLowerCase, Hw = RegExp.prototype.test, wy = Array.prototype.concat, Zr = Array.prototype.join, Yj = Array.prototype.slice, Sy = Math.floor, jf = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, qd = Object.getOwnPropertySymbols, Hf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Yi = typeof Symbol == "function" && typeof Symbol.iterator == "object", Ko = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Yi || "symbol") ? Symbol.toStringTag : null, Vw = Object.prototype.propertyIsEnumerable, _y = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Oy(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Hw.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -Sy(-e) : Sy(e);
    if (n !== e) {
      var i = String(n), s = Ip.call(t, i.length + 1);
      return Jn.call(i, r, "$&_") + "." + Jn.call(Jn.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Jn.call(t, r, "$&_");
}
var Vf = zj, Ty = Vf.custom, Py = Qw(Ty) ? Ty : null, Ww = {
  __proto__: null,
  double: '"',
  single: "'"
}, Xj = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, Qc = function e(t, r, n, i) {
  var s = r || {};
  if (En(s, "quoteStyle") && !En(Ww, s.quoteStyle))
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (En(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var l = En(s, "customInspect") ? s.customInspect : !0;
  if (typeof l != "boolean" && l !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (En(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (En(s, "numericSeparator") && typeof s.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var c = s.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return Yw(t, s);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var f = String(t);
    return c ? Oy(t, f) : f;
  }
  if (typeof t == "bigint") {
    var p = String(t) + "n";
    return c ? Oy(t, p) : p;
  }
  var h = typeof s.depth > "u" ? 5 : s.depth;
  if (typeof n > "u" && (n = 0), n >= h && h > 0 && typeof t == "object")
    return Wf(t) ? "[Array]" : "[Object]";
  var m = gH(s, n);
  if (typeof i > "u")
    i = [];
  else if (Kw(i, t) >= 0)
    return "[Circular]";
  function v(V, ce, _e) {
    if (ce && (i = Yj.call(i), i.push(ce)), _e) {
      var Oe = {
        depth: s.depth
      };
      return En(s, "quoteStyle") && (Oe.quoteStyle = s.quoteStyle), e(V, Oe, n + 1, i);
    }
    return e(V, s, n + 1, i);
  }
  if (typeof t == "function" && !xy(t)) {
    var w = oH(t), O = Nl(t, v);
    return "[Function" + (w ? ": " + w : " (anonymous)") + "]" + (O.length > 0 ? " { " + Zr.call(O, ", ") + " }" : "");
  }
  if (Qw(t)) {
    var T = Yi ? Jn.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Hf.call(t);
    return typeof t == "object" && !Yi ? zo(T) : T;
  }
  if (fH(t)) {
    for (var _ = "<" + Ey.call(String(t.nodeName)), x = t.attributes || [], D = 0; D < x.length; D++)
      _ += " " + x[D].name + "=" + Gw(Jj(x[D].value), "double", s);
    return _ += ">", t.childNodes && t.childNodes.length && (_ += "..."), _ += "</" + Ey.call(String(t.nodeName)) + ">", _;
  }
  if (Wf(t)) {
    if (t.length === 0)
      return "[]";
    var k = Nl(t, v);
    return m && !hH(k) ? "[" + Gf(k, m) + "]" : "[ " + Zr.call(k, ", ") + " ]";
  }
  if (eH(t)) {
    var z = Nl(t, v);
    return !("cause" in Error.prototype) && "cause" in t && !Vw.call(t, "cause") ? "{ [" + String(t) + "] " + Zr.call(wy.call("[cause]: " + v(t.cause), z), ", ") + " }" : z.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Zr.call(z, ", ") + " }";
  }
  if (typeof t == "object" && l) {
    if (Py && typeof t[Py] == "function" && Vf)
      return Vf(t, { depth: h - n });
    if (l !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (sH(t)) {
    var N = [];
    return vy && vy.call(t, function(V, ce) {
      N.push(v(ce, t, !0) + " => " + v(V, t));
    }), Ay("Map", oc.call(t), N, m);
  }
  if (uH(t)) {
    var B = [];
    return yy && yy.call(t, function(V) {
      B.push(v(V, t));
    }), Ay("Set", sc.call(t), B, m);
  }
  if (lH(t))
    return jd("WeakMap");
  if (dH(t))
    return jd("WeakSet");
  if (cH(t))
    return jd("WeakRef");
  if (rH(t))
    return zo(v(Number(t)));
  if (aH(t))
    return zo(v(jf.call(t)));
  if (nH(t))
    return zo(Vj.call(t));
  if (tH(t))
    return zo(v(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && t === globalThis || typeof Lr < "u" && t === Lr)
    return "{ [object globalThis] }";
  if (!Zj(t) && !xy(t)) {
    var P = Nl(t, v), $ = _y ? _y(t) === Object.prototype : t instanceof Object || t.constructor === Object, I = t instanceof Object ? "" : "null prototype", U = !$ && Ko && Object(t) === t && Ko in t ? Ip.call(ga(t), 8, -1) : I ? "Object" : "", W = $ || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", X = W + (U || I ? "[" + Zr.call(wy.call([], U || [], I || []), ": ") + "] " : "");
    return P.length === 0 ? X + "{}" : m ? X + "{" + Gf(P, m) + "}" : X + "{ " + Zr.call(P, ", ") + " }";
  }
  return String(t);
};
function Gw(e, t, r) {
  var n = r.quoteStyle || t, i = Ww[n];
  return i + e + i;
}
function Jj(e) {
  return Jn.call(String(e), /"/g, "&quot;");
}
function ii(e) {
  return !Ko || !(typeof e == "object" && (Ko in e || typeof e[Ko] < "u"));
}
function Wf(e) {
  return ga(e) === "[object Array]" && ii(e);
}
function Zj(e) {
  return ga(e) === "[object Date]" && ii(e);
}
function xy(e) {
  return ga(e) === "[object RegExp]" && ii(e);
}
function eH(e) {
  return ga(e) === "[object Error]" && ii(e);
}
function tH(e) {
  return ga(e) === "[object String]" && ii(e);
}
function rH(e) {
  return ga(e) === "[object Number]" && ii(e);
}
function nH(e) {
  return ga(e) === "[object Boolean]" && ii(e);
}
function Qw(e) {
  if (Yi)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !Hf)
    return !1;
  try {
    return Hf.call(e), !0;
  } catch {
  }
  return !1;
}
function aH(e) {
  if (!e || typeof e != "object" || !jf)
    return !1;
  try {
    return jf.call(e), !0;
  } catch {
  }
  return !1;
}
var iH = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function En(e, t) {
  return iH.call(e, t);
}
function ga(e) {
  return Wj.call(e);
}
function oH(e) {
  if (e.name)
    return e.name;
  var t = Qj.call(Gj.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Kw(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function sH(e) {
  if (!oc || !e || typeof e != "object")
    return !1;
  try {
    oc.call(e);
    try {
      sc.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function lH(e) {
  if (!Go || !e || typeof e != "object")
    return !1;
  try {
    Go.call(e, Go);
    try {
      Qo.call(e, Qo);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function cH(e) {
  if (!by || !e || typeof e != "object")
    return !1;
  try {
    return by.call(e), !0;
  } catch {
  }
  return !1;
}
function uH(e) {
  if (!sc || !e || typeof e != "object")
    return !1;
  try {
    sc.call(e);
    try {
      oc.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function dH(e) {
  if (!Qo || !e || typeof e != "object")
    return !1;
  try {
    Qo.call(e, Qo);
    try {
      Go.call(e, Go);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function fH(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Yw(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Yw(Ip.call(e, 0, t.maxStringLength), t) + n;
  }
  var i = Xj[t.quoteStyle || "single"];
  i.lastIndex = 0;
  var s = Jn.call(Jn.call(e, i, "\\$1"), /[\x00-\x1f]/g, pH);
  return Gw(s, "single", t);
}
function pH(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + Kj.call(t.toString(16));
}
function zo(e) {
  return "Object(" + e + ")";
}
function jd(e) {
  return e + " { ? }";
}
function Ay(e, t, r, n) {
  var i = n ? Gf(r, n) : Zr.call(r, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function hH(e) {
  for (var t = 0; t < e.length; t++)
    if (Kw(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function gH(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = Zr.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: Zr.call(Array(t + 1), r)
  };
}
function Gf(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + Zr.call(e, "," + r) + `
` + t.prev;
}
function Nl(e, t) {
  var r = Wf(e), n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++)
      n[i] = En(e, i) ? t(e[i], e) : "";
  }
  var s = typeof qd == "function" ? qd(e) : [], l;
  if (Yi) {
    l = {};
    for (var c = 0; c < s.length; c++)
      l["$" + s[c]] = s[c];
  }
  for (var f in e)
    En(e, f) && (r && String(Number(f)) === f && f < e.length || Yi && l["$" + f] instanceof Symbol || (Hw.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e))));
  if (typeof qd == "function")
    for (var p = 0; p < s.length; p++)
      Vw.call(e, s[p]) && n.push("[" + t(s[p]) + "]: " + t(e[s[p]], e));
  return n;
}
var mH = Qc, vH = ho, Kc = function(e, t, r) {
  for (var n = e, i; (i = n.next) != null; n = i)
    if (i.key === t)
      return n.next = i.next, r || (i.next = /** @type {NonNullable<typeof list.next>} */
      e.next, e.next = i), i;
}, yH = function(e, t) {
  if (e) {
    var r = Kc(e, t);
    return r && r.value;
  }
}, bH = function(e, t, r) {
  var n = Kc(e, t);
  n ? n.value = r : e.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: t,
    next: e.next,
    value: r
  };
}, EH = function(e, t) {
  return e ? !!Kc(e, t) : !1;
}, wH = function(e, t) {
  if (e)
    return Kc(e, t, !0);
}, SH = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new vH("Side channel does not contain " + mH(n));
    },
    delete: function(n) {
      var i = t && t.next, s = wH(t, n);
      return s && i && i === s && (t = void 0), !!s;
    },
    get: function(n) {
      return yH(t, n);
    },
    has: function(n) {
      return EH(t, n);
    },
    set: function(n, i) {
      t || (t = {
        next: void 0
      }), bH(
        /** @type {NonNullable<typeof $o>} */
        t,
        n,
        i
      );
    }
  };
  return r;
}, Xw = Object, _H = Error, OH = EvalError, TH = RangeError, PH = ReferenceError, xH = SyntaxError, AH = URIError, CH = Math.abs, $H = Math.floor, RH = Math.max, NH = Math.min, IH = Math.pow, kH = Math.round, DH = Number.isNaN || function(t) {
  return t !== t;
}, LH = DH, MH = function(t) {
  return LH(t) || t === 0 ? t : t < 0 ? -1 : 1;
}, FH = Object.getOwnPropertyDescriptor, Hl = FH;
if (Hl)
  try {
    Hl([], "length");
  } catch {
    Hl = null;
  }
var Jw = Hl, Vl = Object.defineProperty || !1;
if (Vl)
  try {
    Vl({}, "a", { value: 1 });
  } catch {
    Vl = !1;
  }
var BH = Vl, Hd, Cy;
function UH() {
  return Cy || (Cy = 1, Hd = function() {
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
      var c = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (c.value !== i || c.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Hd;
}
var Vd, $y;
function zH() {
  if ($y)
    return Vd;
  $y = 1;
  var e = typeof Symbol < "u" && Symbol, t = UH();
  return Vd = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Vd;
}
var Wd, Ry;
function Zw() {
  return Ry || (Ry = 1, Wd = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Wd;
}
var Gd, Ny;
function eS() {
  if (Ny)
    return Gd;
  Ny = 1;
  var e = Xw;
  return Gd = e.getPrototypeOf || null, Gd;
}
var Qd, Iy;
function qH() {
  if (Iy)
    return Qd;
  Iy = 1;
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
  }, l = function(c, f) {
    for (var p = "", h = 0; h < c.length; h += 1)
      p += c[h], h + 1 < c.length && (p += f);
    return p;
  };
  return Qd = function(f) {
    var p = this;
    if (typeof p != "function" || t.apply(p) !== n)
      throw new TypeError(e + p);
    for (var h = s(arguments, 1), m, v = function() {
      if (this instanceof m) {
        var x = p.apply(
          this,
          i(h, arguments)
        );
        return Object(x) === x ? x : this;
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
  }, Qd;
}
var Kd, ky;
function Yc() {
  if (ky)
    return Kd;
  ky = 1;
  var e = qH();
  return Kd = Function.prototype.bind || e, Kd;
}
var Yd, Dy;
function kp() {
  return Dy || (Dy = 1, Yd = Function.prototype.call), Yd;
}
var Xd, Ly;
function tS() {
  return Ly || (Ly = 1, Xd = Function.prototype.apply), Xd;
}
var jH = typeof Reflect < "u" && Reflect && Reflect.apply, HH = Yc(), VH = tS(), WH = kp(), GH = jH, QH = GH || HH.call(WH, VH), KH = Yc(), YH = ho, XH = kp(), JH = QH, rS = function(t) {
  if (t.length < 1 || typeof t[0] != "function")
    throw new YH("a function is required");
  return JH(KH, XH, t);
}, Jd, My;
function ZH() {
  if (My)
    return Jd;
  My = 1;
  var e = rS, t = Jw, r;
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
  return Jd = n && typeof n.get == "function" ? e([n.get]) : typeof s == "function" ? (
    /** @type {import('./get')} */
    function(c) {
      return s(c == null ? c : i(c));
    }
  ) : !1, Jd;
}
var Zd, Fy;
function eV() {
  if (Fy)
    return Zd;
  Fy = 1;
  var e = Zw(), t = eS(), r = ZH();
  return Zd = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, Zd;
}
var ef, By;
function tV() {
  if (By)
    return ef;
  By = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Yc();
  return ef = r.call(e, t), ef;
}
var Me, rV = Xw, nV = _H, aV = OH, iV = TH, oV = PH, Xi = xH, $i = ho, sV = AH, lV = CH, cV = $H, uV = RH, dV = NH, fV = IH, pV = kH, hV = MH, nS = Function, tf = function(e) {
  try {
    return nS('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, Ps = Jw, gV = BH, rf = function() {
  throw new $i();
}, mV = Ps ? function() {
  try {
    return arguments.callee, rf;
  } catch {
    try {
      return Ps(arguments, "callee").get;
    } catch {
      return rf;
    }
  }
}() : rf, wi = zH()(), It = eV(), vV = eS(), yV = Zw(), aS = tS(), Is = kp(), Oi = {}, bV = typeof Uint8Array > "u" || !It ? Me : It(Uint8Array), Ma = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? Me : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Me : ArrayBuffer,
  "%ArrayIteratorPrototype%": wi && It ? It([][Symbol.iterator]()) : Me,
  "%AsyncFromSyncIteratorPrototype%": Me,
  "%AsyncFunction%": Oi,
  "%AsyncGenerator%": Oi,
  "%AsyncGeneratorFunction%": Oi,
  "%AsyncIteratorPrototype%": Oi,
  "%Atomics%": typeof Atomics > "u" ? Me : Atomics,
  "%BigInt%": typeof BigInt > "u" ? Me : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? Me : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? Me : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? Me : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": nV,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": aV,
  "%Float16Array%": typeof Float16Array > "u" ? Me : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? Me : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? Me : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Me : FinalizationRegistry,
  "%Function%": nS,
  "%GeneratorFunction%": Oi,
  "%Int8Array%": typeof Int8Array > "u" ? Me : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? Me : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? Me : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": wi && It ? It(It([][Symbol.iterator]())) : Me,
  "%JSON%": typeof JSON == "object" ? JSON : Me,
  "%Map%": typeof Map > "u" ? Me : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !wi || !It ? Me : It((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": rV,
  "%Object.getOwnPropertyDescriptor%": Ps,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? Me : Promise,
  "%Proxy%": typeof Proxy > "u" ? Me : Proxy,
  "%RangeError%": iV,
  "%ReferenceError%": oV,
  "%Reflect%": typeof Reflect > "u" ? Me : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? Me : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !wi || !It ? Me : It((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Me : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": wi && It ? It(""[Symbol.iterator]()) : Me,
  "%Symbol%": wi ? Symbol : Me,
  "%SyntaxError%": Xi,
  "%ThrowTypeError%": mV,
  "%TypedArray%": bV,
  "%TypeError%": $i,
  "%Uint8Array%": typeof Uint8Array > "u" ? Me : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Me : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? Me : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? Me : Uint32Array,
  "%URIError%": sV,
  "%WeakMap%": typeof WeakMap > "u" ? Me : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? Me : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? Me : WeakSet,
  "%Function.prototype.call%": Is,
  "%Function.prototype.apply%": aS,
  "%Object.defineProperty%": gV,
  "%Object.getPrototypeOf%": vV,
  "%Math.abs%": lV,
  "%Math.floor%": cV,
  "%Math.max%": uV,
  "%Math.min%": dV,
  "%Math.pow%": fV,
  "%Math.round%": pV,
  "%Math.sign%": hV,
  "%Reflect.getPrototypeOf%": yV
};
if (It)
  try {
    null.error;
  } catch (e) {
    var EV = It(It(e));
    Ma["%Error.prototype%"] = EV;
  }
var wV = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = tf("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = tf("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = tf("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && It && (r = It(i.prototype));
  }
  return Ma[t] = r, r;
}, Uy = {
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
}, ks = Yc(), lc = tV(), SV = ks.call(Is, Array.prototype.concat), _V = ks.call(aS, Array.prototype.splice), zy = ks.call(Is, String.prototype.replace), cc = ks.call(Is, String.prototype.slice), OV = ks.call(Is, RegExp.prototype.exec), TV = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, PV = /\\(\\)?/g, xV = function(t) {
  var r = cc(t, 0, 1), n = cc(t, -1);
  if (r === "%" && n !== "%")
    throw new Xi("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Xi("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return zy(t, TV, function(s, l, c, f) {
    i[i.length] = c ? zy(f, PV, "$1") : l || s;
  }), i;
}, AV = function(t, r) {
  var n = t, i;
  if (lc(Uy, n) && (i = Uy[n], n = "%" + i[0] + "%"), lc(Ma, n)) {
    var s = Ma[n];
    if (s === Oi && (s = wV(n)), typeof s > "u" && !r)
      throw new $i("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: s
    };
  }
  throw new Xi("intrinsic " + t + " does not exist!");
}, Dp = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new $i("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new $i('"allowMissing" argument must be a boolean');
  if (OV(/^%?[^%]*%?$/, t) === null)
    throw new Xi("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = xV(t), i = n.length > 0 ? n[0] : "", s = AV("%" + i + "%", r), l = s.name, c = s.value, f = !1, p = s.alias;
  p && (i = p[0], _V(n, SV([0, 1], p)));
  for (var h = 1, m = !0; h < n.length; h += 1) {
    var v = n[h], w = cc(v, 0, 1), O = cc(v, -1);
    if ((w === '"' || w === "'" || w === "`" || O === '"' || O === "'" || O === "`") && w !== O)
      throw new Xi("property names with quotes must have matching quotes");
    if ((v === "constructor" || !m) && (f = !0), i += "." + v, l = "%" + i + "%", lc(Ma, l))
      c = Ma[l];
    else if (c != null) {
      if (!(v in c)) {
        if (!r)
          throw new $i("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (Ps && h + 1 >= n.length) {
        var T = Ps(c, v);
        m = !!T, m && "get" in T && !("originalValue" in T.get) ? c = T.get : c = c[v];
      } else
        m = lc(c, v), c = c[v];
      m && !f && (Ma[l] = c);
    }
  }
  return c;
}, iS = Dp, oS = rS, CV = oS([iS("%String.prototype.indexOf%")]), sS = function(t, r) {
  var n = (
    /** @type {(this: unknown, ...args: unknown[]) => unknown} */
    iS(t, !!r)
  );
  return typeof n == "function" && CV(t, ".prototype.") > -1 ? oS(
    /** @type {const} */
    [n]
  ) : n;
}, $V = Dp, Ds = sS, RV = Qc, NV = ho, qy = $V("%Map%", !0), IV = Ds("Map.prototype.get", !0), kV = Ds("Map.prototype.set", !0), DV = Ds("Map.prototype.has", !0), LV = Ds("Map.prototype.delete", !0), MV = Ds("Map.prototype.size", !0), lS = !!qy && /** @type {Exclude<import('.'), false>} */
function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new NV("Side channel does not contain " + RV(n));
    },
    delete: function(n) {
      if (t) {
        var i = LV(t, n);
        return MV(t) === 0 && (t = void 0), i;
      }
      return !1;
    },
    get: function(n) {
      if (t)
        return IV(t, n);
    },
    has: function(n) {
      return t ? DV(t, n) : !1;
    },
    set: function(n, i) {
      t || (t = new qy()), kV(t, n, i);
    }
  };
  return r;
}, FV = Dp, Xc = sS, BV = Qc, Il = lS, UV = ho, Si = FV("%WeakMap%", !0), zV = Xc("WeakMap.prototype.get", !0), qV = Xc("WeakMap.prototype.set", !0), jV = Xc("WeakMap.prototype.has", !0), HV = Xc("WeakMap.prototype.delete", !0), VV = Si ? (
  /** @type {Exclude<import('.'), false>} */
  function() {
    var t, r, n = {
      assert: function(i) {
        if (!n.has(i))
          throw new UV("Side channel does not contain " + BV(i));
      },
      delete: function(i) {
        if (Si && i && (typeof i == "object" || typeof i == "function")) {
          if (t)
            return HV(t, i);
        } else if (Il && r)
          return r.delete(i);
        return !1;
      },
      get: function(i) {
        return Si && i && (typeof i == "object" || typeof i == "function") && t ? zV(t, i) : r && r.get(i);
      },
      has: function(i) {
        return Si && i && (typeof i == "object" || typeof i == "function") && t ? jV(t, i) : !!r && r.has(i);
      },
      set: function(i, s) {
        Si && i && (typeof i == "object" || typeof i == "function") ? (t || (t = new Si()), qV(t, i, s)) : Il && (r || (r = Il()), r.set(i, s));
      }
    };
    return n;
  }
) : Il, WV = ho, GV = Qc, QV = SH, KV = lS, YV = VV, XV = YV || KV || QV, JV = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new WV("Side channel does not contain " + GV(n));
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
      t || (t = XV()), t.set(n, i);
    }
  };
  return r;
}, ZV = String.prototype.replace, e4 = /%20/g, nf = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Lp = {
  default: nf.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return ZV.call(e, e4, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: nf.RFC1738,
  RFC3986: nf.RFC3986
}, t4 = Lp, af = Object.prototype.hasOwnProperty, $a = Array.isArray, Yr = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), r4 = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if ($a(n)) {
      for (var i = [], s = 0; s < n.length; ++s)
        typeof n[s] < "u" && i.push(n[s]);
      r.obj[r.prop] = i;
    }
  }
}, cS = function(t, r) {
  for (var n = r && r.plainObjects ? { __proto__: null } : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (n[i] = t[i]);
  return n;
}, n4 = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object" && typeof r != "function") {
    if ($a(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !af.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var i = t;
  return $a(t) && !$a(r) && (i = cS(t, n)), $a(t) && $a(r) ? (r.forEach(function(s, l) {
    if (af.call(t, l)) {
      var c = t[l];
      c && typeof c == "object" && s && typeof s == "object" ? t[l] = e(c, s, n) : t.push(s);
    } else
      t[l] = s;
  }), t) : Object.keys(r).reduce(function(s, l) {
    var c = r[l];
    return af.call(s, l) ? s[l] = e(s[l], c, n) : s[l] = c, s;
  }, i);
}, a4 = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, t);
}, i4 = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, of = 1024, o4 = function(t, r, n, i, s) {
  if (t.length === 0)
    return t;
  var l = t;
  if (typeof t == "symbol" ? l = Symbol.prototype.toString.call(t) : typeof t != "string" && (l = String(t)), n === "iso-8859-1")
    return escape(l).replace(/%u[0-9a-f]{4}/gi, function(w) {
      return "%26%23" + parseInt(w.slice(2), 16) + "%3B";
    });
  for (var c = "", f = 0; f < l.length; f += of) {
    for (var p = l.length >= of ? l.slice(f, f + of) : l, h = [], m = 0; m < p.length; ++m) {
      var v = p.charCodeAt(m);
      if (v === 45 || v === 46 || v === 95 || v === 126 || v >= 48 && v <= 57 || v >= 65 && v <= 90 || v >= 97 && v <= 122 || s === t4.RFC1738 && (v === 40 || v === 41)) {
        h[h.length] = p.charAt(m);
        continue;
      }
      if (v < 128) {
        h[h.length] = Yr[v];
        continue;
      }
      if (v < 2048) {
        h[h.length] = Yr[192 | v >> 6] + Yr[128 | v & 63];
        continue;
      }
      if (v < 55296 || v >= 57344) {
        h[h.length] = Yr[224 | v >> 12] + Yr[128 | v >> 6 & 63] + Yr[128 | v & 63];
        continue;
      }
      m += 1, v = 65536 + ((v & 1023) << 10 | p.charCodeAt(m) & 1023), h[h.length] = Yr[240 | v >> 18] + Yr[128 | v >> 12 & 63] + Yr[128 | v >> 6 & 63] + Yr[128 | v & 63];
    }
    c += h.join("");
  }
  return c;
}, s4 = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var s = r[i], l = s.obj[s.prop], c = Object.keys(l), f = 0; f < c.length; ++f) {
      var p = c[f], h = l[p];
      typeof h == "object" && h !== null && n.indexOf(h) === -1 && (r.push({ obj: l, prop: p }), n.push(h));
    }
  return r4(r), t;
}, l4 = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, c4 = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, u4 = function(t, r) {
  return [].concat(t, r);
}, d4 = function(t, r) {
  if ($a(t)) {
    for (var n = [], i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  return r(t);
}, uS = {
  arrayToObject: cS,
  assign: a4,
  combine: u4,
  compact: s4,
  decode: i4,
  encode: o4,
  isBuffer: c4,
  isRegExp: l4,
  maybeMap: d4,
  merge: n4
}, dS = JV, Wl = uS, Yo = Lp, f4 = Object.prototype.hasOwnProperty, fS = {
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
}, Jr = Array.isArray, p4 = Array.prototype.push, pS = function(e, t) {
  p4.apply(e, Jr(t) ? t : [t]);
}, h4 = Date.prototype.toISOString, jy = Yo.default, At = {
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
  encoder: Wl.encode,
  encodeValuesOnly: !1,
  filter: void 0,
  format: jy,
  formatter: Yo.formatters[jy],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return h4.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, g4 = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, sf = {}, m4 = function e(t, r, n, i, s, l, c, f, p, h, m, v, w, O, T, _, x, D) {
  for (var k = t, z = D, N = 0, B = !1; (z = z.get(sf)) !== void 0 && !B; ) {
    var P = z.get(t);
    if (N += 1, typeof P < "u") {
      if (P === N)
        throw new RangeError("Cyclic object value");
      B = !0;
    }
    typeof z.get(sf) > "u" && (N = 0);
  }
  if (typeof h == "function" ? k = h(r, k) : k instanceof Date ? k = w(k) : n === "comma" && Jr(k) && (k = Wl.maybeMap(k, function(K) {
    return K instanceof Date ? w(K) : K;
  })), k === null) {
    if (l)
      return p && !_ ? p(r, At.encoder, x, "key", O) : r;
    k = "";
  }
  if (g4(k) || Wl.isBuffer(k)) {
    if (p) {
      var $ = _ ? r : p(r, At.encoder, x, "key", O);
      return [T($) + "=" + T(p(k, At.encoder, x, "value", O))];
    }
    return [T(r) + "=" + T(String(k))];
  }
  var I = [];
  if (typeof k > "u")
    return I;
  var U;
  if (n === "comma" && Jr(k))
    _ && p && (k = Wl.maybeMap(k, p)), U = [{ value: k.length > 0 ? k.join(",") || null : void 0 }];
  else if (Jr(h))
    U = h;
  else {
    var W = Object.keys(k);
    U = m ? W.sort(m) : W;
  }
  var X = f ? String(r).replace(/\./g, "%2E") : String(r), V = i && Jr(k) && k.length === 1 ? X + "[]" : X;
  if (s && Jr(k) && k.length === 0)
    return V + "[]";
  for (var ce = 0; ce < U.length; ++ce) {
    var _e = U[ce], Oe = typeof _e == "object" && _e && typeof _e.value < "u" ? _e.value : k[_e];
    if (!(c && Oe === null)) {
      var Te = v && f ? String(_e).replace(/\./g, "%2E") : String(_e), je = Jr(k) ? typeof n == "function" ? n(V, Te) : V : V + (v ? "." + Te : "[" + Te + "]");
      D.set(t, N);
      var Ze = dS();
      Ze.set(sf, D), pS(I, e(
        Oe,
        je,
        n,
        i,
        s,
        l,
        c,
        f,
        n === "comma" && _ && Jr(k) ? null : p,
        h,
        m,
        v,
        w,
        O,
        T,
        _,
        x,
        Ze
      ));
    }
  }
  return I;
}, v4 = function(t) {
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
  var n = Yo.default;
  if (typeof t.format < "u") {
    if (!f4.call(Yo.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var i = Yo.formatters[n], s = At.filter;
  (typeof t.filter == "function" || Jr(t.filter)) && (s = t.filter);
  var l;
  if (t.arrayFormat in fS ? l = t.arrayFormat : "indices" in t ? l = t.indices ? "indices" : "repeat" : l = At.arrayFormat, "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var c = typeof t.allowDots > "u" ? t.encodeDotInKeys === !0 ? !0 : At.allowDots : !!t.allowDots;
  return {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : At.addQueryPrefix,
    allowDots: c,
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
}, y4 = function(e, t) {
  var r = e, n = v4(t), i, s;
  typeof n.filter == "function" ? (s = n.filter, r = s("", r)) : Jr(n.filter) && (s = n.filter, i = s);
  var l = [];
  if (typeof r != "object" || r === null)
    return "";
  var c = fS[n.arrayFormat], f = c === "comma" && n.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var p = dS(), h = 0; h < i.length; ++h) {
    var m = i[h], v = r[m];
    n.skipNulls && v === null || pS(l, m4(
      v,
      m,
      c,
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
}, Za = uS, Qf = Object.prototype.hasOwnProperty, Hy = Array.isArray, vt = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: Za.decode,
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
}, b4 = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, hS = function(e, t, r) {
  if (e && typeof e == "string" && t.comma && e.indexOf(",") > -1)
    return e.split(",");
  if (t.throwOnLimitExceeded && r >= t.arrayLimit)
    throw new RangeError("Array limit exceeded. Only " + t.arrayLimit + " element" + (t.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
  return e;
}, E4 = "utf8=%26%2310003%3B", w4 = "utf8=%E2%9C%93", S4 = function(t, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
  i = i.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var s = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, l = i.split(
    r.delimiter,
    r.throwOnLimitExceeded ? s + 1 : s
  );
  if (r.throwOnLimitExceeded && l.length > s)
    throw new RangeError("Parameter limit exceeded. Only " + s + " parameter" + (s === 1 ? "" : "s") + " allowed.");
  var c = -1, f, p = r.charset;
  if (r.charsetSentinel)
    for (f = 0; f < l.length; ++f)
      l[f].indexOf("utf8=") === 0 && (l[f] === w4 ? p = "utf-8" : l[f] === E4 && (p = "iso-8859-1"), c = f, f = l.length);
  for (f = 0; f < l.length; ++f)
    if (f !== c) {
      var h = l[f], m = h.indexOf("]="), v = m === -1 ? h.indexOf("=") : m + 1, w, O;
      v === -1 ? (w = r.decoder(h, vt.decoder, p, "key"), O = r.strictNullHandling ? null : "") : (w = r.decoder(h.slice(0, v), vt.decoder, p, "key"), O = Za.maybeMap(
        hS(
          h.slice(v + 1),
          r,
          Hy(n[w]) ? n[w].length : 0
        ),
        function(_) {
          return r.decoder(_, vt.decoder, p, "value");
        }
      )), O && r.interpretNumericEntities && p === "iso-8859-1" && (O = b4(String(O))), h.indexOf("[]=") > -1 && (O = Hy(O) ? [O] : O);
      var T = Qf.call(n, w);
      T && r.duplicates === "combine" ? n[w] = Za.combine(n[w], O) : (!T || r.duplicates === "last") && (n[w] = O);
    }
  return n;
}, _4 = function(e, t, r, n) {
  var i = 0;
  if (e.length > 0 && e[e.length - 1] === "[]") {
    var s = e.slice(0, -1).join("");
    i = Array.isArray(t) && t[s] ? t[s].length : 0;
  }
  for (var l = n ? t : hS(t, r, i), c = e.length - 1; c >= 0; --c) {
    var f, p = e[c];
    if (p === "[]" && r.parseArrays)
      f = r.allowEmptyArrays && (l === "" || r.strictNullHandling && l === null) ? [] : Za.combine([], l);
    else {
      f = r.plainObjects ? { __proto__: null } : {};
      var h = p.charAt(0) === "[" && p.charAt(p.length - 1) === "]" ? p.slice(1, -1) : p, m = r.decodeDotInKeys ? h.replace(/%2E/g, ".") : h, v = parseInt(m, 10);
      !r.parseArrays && m === "" ? f = { 0: l } : !isNaN(v) && p !== m && String(v) === m && v >= 0 && r.parseArrays && v <= r.arrayLimit ? (f = [], f[v] = l) : m !== "__proto__" && (f[m] = l);
    }
    l = f;
  }
  return l;
}, O4 = function(t, r, n, i) {
  if (t) {
    var s = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, l = /(\[[^[\]]*])/, c = /(\[[^[\]]*])/g, f = n.depth > 0 && l.exec(s), p = f ? s.slice(0, f.index) : s, h = [];
    if (p) {
      if (!n.plainObjects && Qf.call(Object.prototype, p) && !n.allowPrototypes)
        return;
      h.push(p);
    }
    for (var m = 0; n.depth > 0 && (f = c.exec(s)) !== null && m < n.depth; ) {
      if (m += 1, !n.plainObjects && Qf.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      h.push(f[1]);
    }
    if (f) {
      if (n.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + n.depth + " and strictDepth is true");
      h.push("[" + s.slice(f.index) + "]");
    }
    return _4(h, r, n, i);
  }
}, T4 = function(t) {
  if (!t)
    return vt;
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
  var r = typeof t.charset > "u" ? vt.charset : t.charset, n = typeof t.duplicates > "u" ? vt.duplicates : t.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var i = typeof t.allowDots > "u" ? t.decodeDotInKeys === !0 ? !0 : vt.allowDots : !!t.allowDots;
  return {
    allowDots: i,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : vt.allowEmptyArrays,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : vt.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : vt.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : vt.arrayLimit,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : vt.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : vt.comma,
    decodeDotInKeys: typeof t.decodeDotInKeys == "boolean" ? t.decodeDotInKeys : vt.decodeDotInKeys,
    decoder: typeof t.decoder == "function" ? t.decoder : vt.decoder,
    delimiter: typeof t.delimiter == "string" || Za.isRegExp(t.delimiter) ? t.delimiter : vt.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : vt.depth,
    duplicates: n,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : vt.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : vt.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : vt.plainObjects,
    strictDepth: typeof t.strictDepth == "boolean" ? !!t.strictDepth : vt.strictDepth,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : vt.strictNullHandling,
    throwOnLimitExceeded: typeof t.throwOnLimitExceeded == "boolean" ? t.throwOnLimitExceeded : !1
  };
}, P4 = function(e, t) {
  var r = T4(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? { __proto__: null } : {};
  for (var n = typeof e == "string" ? S4(e, r) : e, i = r.plainObjects ? { __proto__: null } : {}, s = Object.keys(n), l = 0; l < s.length; ++l) {
    var c = s[l], f = O4(c, n[c], r, typeof e == "string");
    i = Za.merge(i, f, r);
  }
  return r.allowSparse === !0 ? i : Za.compact(i);
}, x4 = y4, A4 = P4, C4 = Lp, $4 = {
  formats: C4,
  parse: A4,
  stringify: x4
};
const go = /* @__PURE__ */ Rt($4);
var R4 = ai, N4 = function() {
  try {
    var e = R4(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), gS = N4, Vy = gS;
function I4(e, t, r) {
  t == "__proto__" && Vy ? Vy(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var mS = I4, k4 = mS, D4 = Ap, L4 = Object.prototype, M4 = L4.hasOwnProperty;
function F4(e, t, r) {
  var n = e[t];
  (!(M4.call(e, t) && D4(n, r)) || r === void 0 && !(t in e)) && k4(e, t, r);
}
var Mp = F4, B4 = Mp, U4 = mS;
function z4(e, t, r, n) {
  var i = !r;
  r || (r = {});
  for (var s = -1, l = t.length; ++s < l; ) {
    var c = t[s], f = n ? n(r[c], e[c], c, r, e) : void 0;
    f === void 0 && (f = e[c]), i ? U4(r, c, f) : B4(r, c, f);
  }
  return r;
}
var Ls = z4;
function q4(e) {
  return e;
}
var vS = q4;
function j4(e, t, r) {
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
var H4 = j4, V4 = H4, Wy = Math.max;
function W4(e, t, r) {
  return t = Wy(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, s = Wy(n.length - t, 0), l = Array(s); ++i < s; )
      l[i] = n[t + i];
    i = -1;
    for (var c = Array(t + 1); ++i < t; )
      c[i] = n[i];
    return c[t] = r(l), V4(e, this, c);
  };
}
var yS = W4;
function G4(e) {
  return function() {
    return e;
  };
}
var Q4 = G4, K4 = Q4, Gy = gS, Y4 = vS, X4 = Gy ? function(e, t) {
  return Gy(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: K4(t),
    writable: !0
  });
} : Y4, J4 = X4, Z4 = 800, eW = 16, tW = Date.now;
function rW(e) {
  var t = 0, r = 0;
  return function() {
    var n = tW(), i = eW - (n - r);
    if (r = n, i > 0) {
      if (++t >= Z4)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var nW = rW, aW = J4, iW = nW, oW = iW(aW), bS = oW, sW = vS, lW = yS, cW = bS;
function uW(e, t) {
  return cW(lW(e, t, sW), e + "");
}
var dW = uW, fW = Ap, pW = Ic, hW = Gc, gW = ha;
function mW(e, t, r) {
  if (!gW(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? pW(r) && hW(t, r.length) : n == "string" && t in r) ? fW(r[t], e) : !1;
}
var vW = mW, yW = dW, bW = vW;
function EW(e) {
  return yW(function(t, r) {
    var n = -1, i = r.length, s = i > 1 ? r[i - 1] : void 0, l = i > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (i--, s) : void 0, l && bW(r[0], r[1], l) && (s = i < 3 ? void 0 : s, i = 1), t = Object(t); ++n < i; ) {
      var c = r[n];
      c && e(t, c, n, s);
    }
    return t;
  });
}
var wW = EW;
function SW(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var _W = SW, OW = _W, TW = Nc, PW = qr, xW = yp, AW = Gc, CW = hw, $W = Object.prototype, RW = $W.hasOwnProperty;
function NW(e, t) {
  var r = PW(e), n = !r && TW(e), i = !r && !n && xW(e), s = !r && !n && !i && CW(e), l = r || n || i || s, c = l ? OW(e.length, String) : [], f = c.length;
  for (var p in e)
    (t || RW.call(e, p)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    AW(p, f))) && c.push(p);
  return c;
}
var ES = NW;
function IW(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var kW = IW, DW = ha, LW = $c, MW = kW, FW = Object.prototype, BW = FW.hasOwnProperty;
function UW(e) {
  if (!DW(e))
    return MW(e);
  var t = LW(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !BW.call(e, n)) || r.push(n);
  return r;
}
var zW = UW, qW = ES, jW = zW, HW = Ic;
function VW(e) {
  return HW(e) ? qW(e, !0) : jW(e);
}
var Jc = VW, WW = Ls, GW = wW, QW = Jc, KW = GW(function(e, t) {
  WW(t, QW(t), e);
}), YW = KW, XW = YW;
const uc = /* @__PURE__ */ Rt(XW);
function JW(e) {
  return e && e.length ? e[0] : void 0;
}
var ZW = JW;
const eG = /* @__PURE__ */ Rt(ZW);
var tG = Mp, rG = Wc, nG = Gc, Qy = ha, aG = $p;
function iG(e, t, r, n) {
  if (!Qy(e))
    return e;
  t = rG(t, e);
  for (var i = -1, s = t.length, l = s - 1, c = e; c != null && ++i < s; ) {
    var f = aG(t[i]), p = r;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return e;
    if (i != l) {
      var h = c[f];
      p = n ? n(h, f, c) : void 0, p === void 0 && (p = Qy(h) ? h : nG(t[i + 1]) ? [] : {});
    }
    tG(c, f, p), c = c[f];
  }
  return e;
}
var oG = iG, sG = qw, lG = oG, cG = Wc;
function uG(e, t, r) {
  for (var n = -1, i = t.length, s = {}; ++n < i; ) {
    var l = t[n], c = sG(e, l);
    r(c, l) && lG(s, cG(l, e), c);
  }
  return s;
}
var dG = uG, fG = dG, pG = jw;
function hG(e, t) {
  return fG(e, t, function(r, n) {
    return pG(e, n);
  });
}
var gG = hG;
function mG(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var Fp = mG, Ky = Rs, vG = Nc, yG = qr, Yy = Ky ? Ky.isConcatSpreadable : void 0;
function bG(e) {
  return yG(e) || vG(e) || !!(Yy && e && e[Yy]);
}
var EG = bG, wG = Fp, SG = EG;
function wS(e, t, r, n, i) {
  var s = -1, l = e.length;
  for (r || (r = SG), i || (i = []); ++s < l; ) {
    var c = e[s];
    t > 0 && r(c) ? t > 1 ? wS(c, t - 1, r, n, i) : wG(i, c) : n || (i[i.length] = c);
  }
  return i;
}
var _G = wS, OG = _G;
function TG(e) {
  var t = e == null ? 0 : e.length;
  return t ? OG(e, 1) : [];
}
var PG = TG, xG = PG, AG = yS, CG = bS;
function $G(e) {
  return CG(AG(e, void 0, xG), e + "");
}
var RG = $G, NG = gG, IG = RG, kG = IG(function(e, t) {
  return e == null ? {} : NG(e, t);
}), DG = kG;
const LG = /* @__PURE__ */ Rt(DG);
var MG = Hc;
function FG() {
  this.__data__ = new MG(), this.size = 0;
}
var BG = FG;
function UG(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var zG = UG;
function qG(e) {
  return this.__data__.get(e);
}
var jG = qG;
function HG(e) {
  return this.__data__.has(e);
}
var VG = HG, WG = Hc, GG = mp, QG = Bw, KG = 200;
function YG(e, t) {
  var r = this.__data__;
  if (r instanceof WG) {
    var n = r.__data__;
    if (!GG || n.length < KG - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new QG(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var XG = YG, JG = Hc, ZG = BG, e8 = zG, t8 = jG, r8 = VG, n8 = XG;
function mo(e) {
  var t = this.__data__ = new JG(e);
  this.size = t.size;
}
mo.prototype.clear = ZG;
mo.prototype.delete = e8;
mo.prototype.get = t8;
mo.prototype.has = r8;
mo.prototype.set = n8;
var a8 = mo;
function i8(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var o8 = i8, s8 = ES, l8 = ow, c8 = Ic;
function u8(e) {
  return c8(e) ? s8(e) : l8(e);
}
var Bp = u8, d8 = Ls, f8 = Bp;
function p8(e, t) {
  return e && d8(t, f8(t), e);
}
var h8 = p8, g8 = Ls, m8 = Jc;
function v8(e, t) {
  return e && g8(t, m8(t), e);
}
var y8 = v8, dc = { exports: {} };
dc.exports;
(function(e, t) {
  var r = on, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, l = s ? r.Buffer : void 0, c = l ? l.allocUnsafe : void 0;
  function f(p, h) {
    if (h)
      return p.slice();
    var m = p.length, v = c ? c(m) : new p.constructor(m);
    return p.copy(v), v;
  }
  e.exports = f;
})(dc, dc.exports);
var b8 = dc.exports;
function E8(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var w8 = E8;
function S8(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var l = e[r];
    t(l, r, e) && (s[i++] = l);
  }
  return s;
}
var _8 = S8;
function O8() {
  return [];
}
var SS = O8, T8 = _8, P8 = SS, x8 = Object.prototype, A8 = x8.propertyIsEnumerable, Xy = Object.getOwnPropertySymbols, C8 = Xy ? function(e) {
  return e == null ? [] : (e = Object(e), T8(Xy(e), function(t) {
    return A8.call(e, t);
  }));
} : P8, Up = C8, $8 = Ls, R8 = Up;
function N8(e, t) {
  return $8(e, R8(e), t);
}
var I8 = N8, k8 = iw, D8 = k8(Object.getPrototypeOf, Object), _S = D8, L8 = Fp, M8 = _S, F8 = Up, B8 = SS, U8 = Object.getOwnPropertySymbols, z8 = U8 ? function(e) {
  for (var t = []; e; )
    L8(t, F8(e)), e = M8(e);
  return t;
} : B8, OS = z8, q8 = Ls, j8 = OS;
function H8(e, t) {
  return q8(e, j8(e), t);
}
var V8 = H8, W8 = Fp, G8 = qr;
function Q8(e, t, r) {
  var n = t(e);
  return G8(e) ? n : W8(n, r(e));
}
var TS = Q8, K8 = TS, Y8 = Up, X8 = Bp;
function J8(e) {
  return K8(e, X8, Y8);
}
var Z8 = J8, e6 = TS, t6 = OS, r6 = Jc;
function n6(e) {
  return e6(e, r6, t6);
}
var a6 = n6, i6 = Object.prototype, o6 = i6.hasOwnProperty;
function s6(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && o6.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var l6 = s6, c6 = on, u6 = c6.Uint8Array, d6 = u6, Jy = d6;
function f6(e) {
  var t = new e.constructor(e.byteLength);
  return new Jy(t).set(new Jy(e)), t;
}
var zp = f6, p6 = zp;
function h6(e, t) {
  var r = t ? p6(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var g6 = h6, m6 = /\w*$/;
function v6(e) {
  var t = new e.constructor(e.source, m6.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var y6 = v6, Zy = Rs, eb = Zy ? Zy.prototype : void 0, tb = eb ? eb.valueOf : void 0;
function b6(e) {
  return tb ? Object(tb.call(e)) : {};
}
var E6 = b6, w6 = zp;
function S6(e, t) {
  var r = t ? w6(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var _6 = S6, O6 = zp, T6 = g6, P6 = y6, x6 = E6, A6 = _6, C6 = "[object Boolean]", $6 = "[object Date]", R6 = "[object Map]", N6 = "[object Number]", I6 = "[object RegExp]", k6 = "[object Set]", D6 = "[object String]", L6 = "[object Symbol]", M6 = "[object ArrayBuffer]", F6 = "[object DataView]", B6 = "[object Float32Array]", U6 = "[object Float64Array]", z6 = "[object Int8Array]", q6 = "[object Int16Array]", j6 = "[object Int32Array]", H6 = "[object Uint8Array]", V6 = "[object Uint8ClampedArray]", W6 = "[object Uint16Array]", G6 = "[object Uint32Array]";
function Q6(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case M6:
      return O6(e);
    case C6:
    case $6:
      return new n(+e);
    case F6:
      return T6(e, r);
    case B6:
    case U6:
    case z6:
    case q6:
    case j6:
    case H6:
    case V6:
    case W6:
    case G6:
      return A6(e, r);
    case R6:
      return new n();
    case N6:
    case D6:
      return new n(e);
    case I6:
      return P6(e);
    case k6:
      return new n();
    case L6:
      return x6(e);
  }
}
var K6 = Q6, Y6 = ha, rb = Object.create, X6 = function() {
  function e() {
  }
  return function(t) {
    if (!Y6(t))
      return {};
    if (rb)
      return rb(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), J6 = X6, Z6 = J6, eQ = _S, tQ = $c;
function rQ(e) {
  return typeof e.constructor == "function" && !tQ(e) ? Z6(eQ(e)) : {};
}
var nQ = rQ, aQ = Rc, iQ = Un, oQ = "[object Map]";
function sQ(e) {
  return iQ(e) && aQ(e) == oQ;
}
var lQ = sQ, cQ = lQ, uQ = bp, nb = Ep, ab = nb && nb.isMap, dQ = ab ? uQ(ab) : cQ, fQ = dQ, pQ = Rc, hQ = Un, gQ = "[object Set]";
function mQ(e) {
  return hQ(e) && pQ(e) == gQ;
}
var vQ = mQ, yQ = vQ, bQ = bp, ib = Ep, ob = ib && ib.isSet, EQ = ob ? bQ(ob) : yQ, wQ = EQ, SQ = a8, _Q = o8, OQ = Mp, TQ = h8, PQ = y8, xQ = b8, AQ = w8, CQ = I8, $Q = V8, RQ = Z8, NQ = a6, IQ = Rc, kQ = l6, DQ = K6, LQ = nQ, MQ = qr, FQ = yp, BQ = fQ, UQ = ha, zQ = wQ, qQ = Bp, jQ = Jc, HQ = 1, VQ = 2, WQ = 4, PS = "[object Arguments]", GQ = "[object Array]", QQ = "[object Boolean]", KQ = "[object Date]", YQ = "[object Error]", xS = "[object Function]", XQ = "[object GeneratorFunction]", JQ = "[object Map]", ZQ = "[object Number]", AS = "[object Object]", e5 = "[object RegExp]", t5 = "[object Set]", r5 = "[object String]", n5 = "[object Symbol]", a5 = "[object WeakMap]", i5 = "[object ArrayBuffer]", o5 = "[object DataView]", s5 = "[object Float32Array]", l5 = "[object Float64Array]", c5 = "[object Int8Array]", u5 = "[object Int16Array]", d5 = "[object Int32Array]", f5 = "[object Uint8Array]", p5 = "[object Uint8ClampedArray]", h5 = "[object Uint16Array]", g5 = "[object Uint32Array]", ot = {};
ot[PS] = ot[GQ] = ot[i5] = ot[o5] = ot[QQ] = ot[KQ] = ot[s5] = ot[l5] = ot[c5] = ot[u5] = ot[d5] = ot[JQ] = ot[ZQ] = ot[AS] = ot[e5] = ot[t5] = ot[r5] = ot[n5] = ot[f5] = ot[p5] = ot[h5] = ot[g5] = !0;
ot[YQ] = ot[xS] = ot[a5] = !1;
function Gl(e, t, r, n, i, s) {
  var l, c = t & HQ, f = t & VQ, p = t & WQ;
  if (r && (l = i ? r(e, n, i, s) : r(e)), l !== void 0)
    return l;
  if (!UQ(e))
    return e;
  var h = MQ(e);
  if (h) {
    if (l = kQ(e), !c)
      return AQ(e, l);
  } else {
    var m = IQ(e), v = m == xS || m == XQ;
    if (FQ(e))
      return xQ(e, c);
    if (m == AS || m == PS || v && !i) {
      if (l = f || v ? {} : LQ(e), !c)
        return f ? $Q(e, PQ(l, e)) : CQ(e, TQ(l, e));
    } else {
      if (!ot[m])
        return i ? e : {};
      l = DQ(e, m, c);
    }
  }
  s || (s = new SQ());
  var w = s.get(e);
  if (w)
    return w;
  s.set(e, l), zQ(e) ? e.forEach(function(_) {
    l.add(Gl(_, t, r, _, e, s));
  }) : BQ(e) && e.forEach(function(_, x) {
    l.set(x, Gl(_, t, r, x, e, s));
  });
  var O = p ? f ? NQ : RQ : f ? jQ : qQ, T = h ? void 0 : O(e);
  return _Q(T || e, function(_, x) {
    T && (x = _, _ = e[x]), OQ(l, x, Gl(_, t, r, x, e, s));
  }), l;
}
var m5 = Gl, v5 = m5, y5 = 1, b5 = 4;
function E5(e) {
  return v5(e, y5 | b5);
}
var w5 = E5;
const Ri = /* @__PURE__ */ Rt(w5);
var S5 = pa, _5 = Un, O5 = "[object Boolean]";
function T5(e) {
  return e === !0 || e === !1 || _5(e) && S5(e) == O5;
}
var P5 = T5;
const x5 = /* @__PURE__ */ Rt(P5);
var A5 = pa, C5 = qr, $5 = Un, R5 = "[object String]";
function N5(e) {
  return typeof e == "string" || !C5(e) && $5(e) && A5(e) == R5;
}
var I5 = N5;
const k5 = /* @__PURE__ */ Rt(I5);
var D5 = pa, L5 = Un, M5 = "[object Number]";
function F5(e) {
  return typeof e == "number" || L5(e) && D5(e) == M5;
}
var B5 = F5;
const U5 = /* @__PURE__ */ Rt(B5);
var qp = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (qp.displayName = "ReactRedux");
function z5(e) {
  e();
}
var CS = z5, q5 = function(t) {
  return CS = t;
}, j5 = function() {
  return CS;
};
function H5() {
  var e = j5(), t = null, r = null;
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
var sb = {
  notify: function() {
  },
  get: function() {
    return [];
  }
};
function $S(e, t) {
  var r, n = sb;
  function i(m) {
    return f(), n.subscribe(m);
  }
  function s() {
    n.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function c() {
    return !!r;
  }
  function f() {
    r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = H5());
  }
  function p() {
    r && (r(), r = void 0, n.clear(), n = sb);
  }
  var h = {
    addNestedSub: i,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: function() {
      return n;
    }
  };
  return h;
}
var RS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? MC : hc;
function NS(e) {
  var t = e.store, r = e.context, n = e.children, i = Xr(function() {
    var c = $S(t);
    return {
      store: t,
      subscription: c
    };
  }, [t]), s = Xr(function() {
    return t.getState();
  }, [t]);
  RS(function() {
    var c = i.subscription;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), s !== t.getState() && c.notifyNestedSubs(), function() {
      c.tryUnsubscribe(), c.onStateChange = null;
    };
  }, [i, s]);
  var l = r || qp;
  return /* @__PURE__ */ b.createElement(l.Provider, {
    value: i
  }, n);
}
process.env.NODE_ENV !== "production" && (NS.propTypes = {
  store: d.shape({
    subscribe: d.func.isRequired,
    dispatch: d.func.isRequired,
    getState: d.func.isRequired
  }),
  context: d.object,
  children: d.any
});
var jp = gc(), V5 = {
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
}, W5 = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, G5 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, IS = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Hp = {};
Hp[jp.ForwardRef] = G5;
Hp[jp.Memo] = IS;
function lb(e) {
  return jp.isMemo(e) ? IS : Hp[e.$$typeof] || V5;
}
var Q5 = Object.defineProperty, K5 = Object.getOwnPropertyNames, cb = Object.getOwnPropertySymbols, Y5 = Object.getOwnPropertyDescriptor, X5 = Object.getPrototypeOf, ub = Object.prototype;
function kS(e, t, r) {
  if (typeof t != "string") {
    if (ub) {
      var n = X5(t);
      n && n !== ub && kS(e, n, r);
    }
    var i = K5(t);
    cb && (i = i.concat(cb(t)));
    for (var s = lb(e), l = lb(t), c = 0; c < i.length; ++c) {
      var f = i[c];
      if (!W5[f] && !(r && r[f]) && !(l && l[f]) && !(s && s[f])) {
        var p = Y5(t, f);
        try {
          Q5(e, f, p);
        } catch {
        }
      }
    }
  }
  return e;
}
var J5 = kS;
const db = /* @__PURE__ */ Rt(J5);
var Kf = { exports: {} }, et = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fb;
function Z5() {
  if (fb)
    return et;
  fb = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, s = 60109, l = 60110, c = 60112, f = 60113, p = 60120, h = 60115, m = 60116, v = 60121, w = 60122, O = 60117, T = 60129, _ = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var x = Symbol.for;
    e = x("react.element"), t = x("react.portal"), r = x("react.fragment"), n = x("react.strict_mode"), i = x("react.profiler"), s = x("react.provider"), l = x("react.context"), c = x("react.forward_ref"), f = x("react.suspense"), p = x("react.suspense_list"), h = x("react.memo"), m = x("react.lazy"), v = x("react.block"), w = x("react.server.block"), O = x("react.fundamental"), T = x("react.debug_trace_mode"), _ = x("react.legacy_hidden");
  }
  function D(V) {
    if (typeof V == "object" && V !== null) {
      var ce = V.$$typeof;
      switch (ce) {
        case e:
          switch (V = V.type, V) {
            case r:
            case i:
            case n:
            case f:
            case p:
              return V;
            default:
              switch (V = V && V.$$typeof, V) {
                case l:
                case c:
                case m:
                case h:
                case s:
                  return V;
                default:
                  return ce;
              }
          }
        case t:
          return ce;
      }
    }
  }
  var k = s, z = e, N = c, B = r, P = m, $ = h, I = t, U = i, W = n, X = f;
  return et.ContextConsumer = l, et.ContextProvider = k, et.Element = z, et.ForwardRef = N, et.Fragment = B, et.Lazy = P, et.Memo = $, et.Portal = I, et.Profiler = U, et.StrictMode = W, et.Suspense = X, et.isAsyncMode = function() {
    return !1;
  }, et.isConcurrentMode = function() {
    return !1;
  }, et.isContextConsumer = function(V) {
    return D(V) === l;
  }, et.isContextProvider = function(V) {
    return D(V) === s;
  }, et.isElement = function(V) {
    return typeof V == "object" && V !== null && V.$$typeof === e;
  }, et.isForwardRef = function(V) {
    return D(V) === c;
  }, et.isFragment = function(V) {
    return D(V) === r;
  }, et.isLazy = function(V) {
    return D(V) === m;
  }, et.isMemo = function(V) {
    return D(V) === h;
  }, et.isPortal = function(V) {
    return D(V) === t;
  }, et.isProfiler = function(V) {
    return D(V) === i;
  }, et.isStrictMode = function(V) {
    return D(V) === n;
  }, et.isSuspense = function(V) {
    return D(V) === f;
  }, et.isValidElementType = function(V) {
    return typeof V == "string" || typeof V == "function" || V === r || V === i || V === T || V === n || V === f || V === p || V === _ || typeof V == "object" && V !== null && (V.$$typeof === m || V.$$typeof === h || V.$$typeof === s || V.$$typeof === l || V.$$typeof === c || V.$$typeof === O || V.$$typeof === v || V[0] === w);
  }, et.typeOf = D, et;
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
var pb;
function eK() {
  return pb || (pb = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, s = 60109, l = 60110, c = 60112, f = 60113, p = 60120, h = 60115, m = 60116, v = 60121, w = 60122, O = 60117, T = 60129, _ = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var x = Symbol.for;
      e = x("react.element"), t = x("react.portal"), r = x("react.fragment"), n = x("react.strict_mode"), i = x("react.profiler"), s = x("react.provider"), l = x("react.context"), c = x("react.forward_ref"), f = x("react.suspense"), p = x("react.suspense_list"), h = x("react.memo"), m = x("react.lazy"), v = x("react.block"), w = x("react.server.block"), O = x("react.fundamental"), x("react.scope"), x("react.opaque.id"), T = x("react.debug_trace_mode"), x("react.offscreen"), _ = x("react.legacy_hidden");
    }
    var D = !1;
    function k(ie) {
      return !!(typeof ie == "string" || typeof ie == "function" || ie === r || ie === i || ie === T || ie === n || ie === f || ie === p || ie === _ || D || typeof ie == "object" && ie !== null && (ie.$$typeof === m || ie.$$typeof === h || ie.$$typeof === s || ie.$$typeof === l || ie.$$typeof === c || ie.$$typeof === O || ie.$$typeof === v || ie[0] === w));
    }
    function z(ie) {
      if (typeof ie == "object" && ie !== null) {
        var re = ie.$$typeof;
        switch (re) {
          case e:
            var gt = ie.type;
            switch (gt) {
              case r:
              case i:
              case n:
              case f:
              case p:
                return gt;
              default:
                var oe = gt && gt.$$typeof;
                switch (oe) {
                  case l:
                  case c:
                  case m:
                  case h:
                  case s:
                    return oe;
                  default:
                    return re;
                }
            }
          case t:
            return re;
        }
      }
    }
    var N = l, B = s, P = e, $ = c, I = r, U = m, W = h, X = t, V = i, ce = n, _e = f, Oe = !1, Te = !1;
    function je(ie) {
      return Oe || (Oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Ze(ie) {
      return Te || (Te = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(ie) {
      return z(ie) === l;
    }
    function J(ie) {
      return z(ie) === s;
    }
    function we(ie) {
      return typeof ie == "object" && ie !== null && ie.$$typeof === e;
    }
    function ge(ie) {
      return z(ie) === c;
    }
    function pe(ie) {
      return z(ie) === r;
    }
    function Se(ie) {
      return z(ie) === m;
    }
    function he(ie) {
      return z(ie) === h;
    }
    function Pe(ie) {
      return z(ie) === t;
    }
    function xe(ie) {
      return z(ie) === i;
    }
    function Ae(ie) {
      return z(ie) === n;
    }
    function Ne(ie) {
      return z(ie) === f;
    }
    tt.ContextConsumer = N, tt.ContextProvider = B, tt.Element = P, tt.ForwardRef = $, tt.Fragment = I, tt.Lazy = U, tt.Memo = W, tt.Portal = X, tt.Profiler = V, tt.StrictMode = ce, tt.Suspense = _e, tt.isAsyncMode = je, tt.isConcurrentMode = Ze, tt.isContextConsumer = K, tt.isContextProvider = J, tt.isElement = we, tt.isForwardRef = ge, tt.isFragment = pe, tt.isLazy = Se, tt.isMemo = he, tt.isPortal = Pe, tt.isProfiler = xe, tt.isStrictMode = Ae, tt.isSuspense = Ne, tt.isValidElementType = k, tt.typeOf = z;
  }()), tt;
}
process.env.NODE_ENV === "production" ? Kf.exports = Z5() : Kf.exports = eK();
var hb = Kf.exports, tK = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"], rK = ["reactReduxForwardedRef"], nK = [], aK = [null, null], iK = function(t) {
  try {
    return JSON.stringify(t);
  } catch {
    return String(t);
  }
};
function oK(e, t) {
  var r = e[1];
  return [t.payload, r + 1];
}
function gb(e, t, r) {
  RS(function() {
    return e.apply(void 0, t);
  }, r);
}
function sK(e, t, r, n, i, s, l) {
  e.current = n, t.current = i, r.current = !1, s.current && (s.current = null, l());
}
function lK(e, t, r, n, i, s, l, c, f, p) {
  if (e) {
    var h = !1, m = null, v = function() {
      if (!h) {
        var T = t.getState(), _, x;
        try {
          _ = n(T, i.current);
        } catch (D) {
          x = D, m = D;
        }
        x || (m = null), _ === s.current ? l.current || f() : (s.current = _, c.current = _, l.current = !0, p({
          type: "STORE_UPDATED",
          payload: {
            error: x
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
var cK = function() {
  return [null, 0];
};
function uK(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.getDisplayName, i = n === void 0 ? function(B) {
    return "ConnectAdvanced(" + B + ")";
  } : n, s = r.methodName, l = s === void 0 ? "connectAdvanced" : s, c = r.renderCountProp, f = c === void 0 ? void 0 : c, p = r.shouldHandleStateChanges, h = p === void 0 ? !0 : p, m = r.storeKey, v = m === void 0 ? "store" : m, w = r.withRef, O = w === void 0 ? !1 : w, T = r.forwardRef, _ = T === void 0 ? !1 : T, x = r.context, D = x === void 0 ? qp : x, k = Ba(r, tK);
  if (process.env.NODE_ENV !== "production") {
    if (f !== void 0)
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    if (O)
      throw new Error("withRef is removed. To access the wrapped instance, use a ref on the connected component");
    var z = "To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";
    if (v !== "store")
      throw new Error("storeKey has been removed and does not do anything. " + z);
  }
  var N = D;
  return function(P) {
    if (process.env.NODE_ENV !== "production" && !hb.isValidElementType(P))
      throw new Error("You must pass a component to the function returned by " + (l + ". Instead received " + iK(P)));
    var $ = P.displayName || P.name || "Component", I = i($), U = F({}, k, {
      getDisplayName: i,
      methodName: l,
      renderCountProp: f,
      shouldHandleStateChanges: h,
      storeKey: v,
      displayName: I,
      wrappedComponentName: $,
      WrappedComponent: P
    }), W = k.pure;
    function X(Te) {
      return e(Te.dispatch, U);
    }
    var V = W ? Xr : function(Te) {
      return Te();
    };
    function ce(Te) {
      var je = Xr(function() {
        var Vr = Te.reactReduxForwardedRef, vo = Ba(Te, rK);
        return [Te.context, Vr, vo];
      }, [Te]), Ze = je[0], K = je[1], J = je[2], we = Xr(function() {
        return Ze && Ze.Consumer && hb.isContextConsumer(/* @__PURE__ */ b.createElement(Ze.Consumer, null)) ? Ze : N;
      }, [Ze, N]), ge = dt(we), pe = !!Te.store && !!Te.store.getState && !!Te.store.dispatch, Se = !!ge && !!ge.store;
      if (process.env.NODE_ENV !== "production" && !pe && !Se)
        throw new Error('Could not find "store" in the context of ' + ('"' + I + '". Either wrap the root component in a <Provider>, ') + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + I + " in connect options."));
      var he = pe ? Te.store : ge.store, Pe = Xr(function() {
        return X(he);
      }, [he]), xe = Xr(function() {
        if (!h)
          return aK;
        var Vr = $S(he, pe ? null : ge.subscription), vo = Vr.notifyNestedSubs.bind(Vr);
        return [Vr, vo];
      }, [he, pe, ge]), Ae = xe[0], Ne = xe[1], ie = Xr(function() {
        return pe ? ge : F({}, ge, {
          subscription: Ae
        });
      }, [pe, ge, Ae]), re = FC(oK, nK, cK), gt = re[0], oe = gt[0], Zt = re[1];
      if (oe && oe.error)
        throw oe.error;
      var ln = xl(), zt = xl(J), ma = xl(), Fs = xl(!1), cn = V(function() {
        return ma.current && J === zt.current ? ma.current : Pe(he.getState(), J);
      }, [he, oe, J]);
      gb(sK, [zt, ln, Fs, J, cn, ma, Ne]), gb(lK, [h, he, Ae, Pe, zt, ln, Fs, ma, Ne, Zt], [he, Ae, Pe]);
      var Qt = Xr(function() {
        return /* @__PURE__ */ b.createElement(P, F({}, cn, {
          ref: K
        }));
      }, [K, P, cn]), va = Xr(function() {
        return h ? /* @__PURE__ */ b.createElement(we.Provider, {
          value: ie
        }, Qt) : Qt;
      }, [we, Qt, ie]);
      return va;
    }
    var _e = W ? b.memo(ce) : ce;
    if (_e.WrappedComponent = P, _e.displayName = ce.displayName = I, _) {
      var Oe = b.forwardRef(function(je, Ze) {
        return /* @__PURE__ */ b.createElement(_e, F({}, je, {
          reactReduxForwardedRef: Ze
        }));
      });
      return Oe.displayName = I, Oe.WrappedComponent = P, db(Oe, P);
    }
    return db(_e, P);
  };
}
function mb(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function lf(e, t) {
  if (mb(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (var i = 0; i < r.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !mb(e[r[i]], t[r[i]]))
      return !1;
  return !0;
}
function dK(e, t) {
  var r = {}, n = function(l) {
    var c = e[l];
    typeof c == "function" && (r[l] = function() {
      return t(c.apply(void 0, arguments));
    });
  };
  for (var i in e)
    n(i);
  return r;
}
function fK(e) {
  if (typeof e != "object" || e === null)
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null)
    return !0;
  for (var r = t; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function DS(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function LS(e, t, r) {
  fK(e) || DS(r + "() in " + t + " must return a plain object. Instead received " + e + ".");
}
function Vp(e) {
  return function(r, n) {
    var i = e(r, n);
    function s() {
      return i;
    }
    return s.dependsOnOwnProps = !1, s;
  };
}
function vb(e) {
  return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0 ? !!e.dependsOnOwnProps : e.length !== 1;
}
function MS(e, t) {
  return function(n, i) {
    var s = i.displayName, l = function(f, p) {
      return l.dependsOnOwnProps ? l.mapToProps(f, p) : l.mapToProps(f);
    };
    return l.dependsOnOwnProps = !0, l.mapToProps = function(f, p) {
      l.mapToProps = e, l.dependsOnOwnProps = vb(e);
      var h = l(f, p);
      return typeof h == "function" && (l.mapToProps = h, l.dependsOnOwnProps = vb(h), h = l(f, p)), process.env.NODE_ENV !== "production" && LS(h, s, t), h;
    }, l;
  };
}
function pK(e) {
  return typeof e == "function" ? MS(e, "mapDispatchToProps") : void 0;
}
function hK(e) {
  return e ? void 0 : Vp(function(t) {
    return {
      dispatch: t
    };
  });
}
function gK(e) {
  return e && typeof e == "object" ? Vp(function(t) {
    return dK(e, t);
  }) : void 0;
}
const mK = [pK, hK, gK];
function vK(e) {
  return typeof e == "function" ? MS(e, "mapStateToProps") : void 0;
}
function yK(e) {
  return e ? void 0 : Vp(function() {
    return {};
  });
}
const bK = [vK, yK];
function EK(e, t, r) {
  return F({}, r, e, t);
}
function wK(e) {
  return function(r, n) {
    var i = n.displayName, s = n.pure, l = n.areMergedPropsEqual, c = !1, f;
    return function(h, m, v) {
      var w = e(h, m, v);
      return c ? (!s || !l(w, f)) && (f = w) : (c = !0, f = w, process.env.NODE_ENV !== "production" && LS(f, i, "mergeProps")), f;
    };
  };
}
function SK(e) {
  return typeof e == "function" ? wK(e) : void 0;
}
function _K(e) {
  return e ? void 0 : function() {
    return EK;
  };
}
const OK = [SK, _K];
function cf(e, t, r) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || DS("The selector for " + t + " of " + r + " did not specify a value for dependsOnOwnProps."));
  else
    throw new Error("Unexpected value for " + t + " in " + r + ".");
}
function TK(e, t, r, n) {
  cf(e, "mapStateToProps", n), cf(t, "mapDispatchToProps", n), cf(r, "mergeProps", n);
}
var PK = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function xK(e, t, r, n) {
  return function(s, l) {
    return r(e(s, l), t(n, l), l);
  };
}
function AK(e, t, r, n, i) {
  var s = i.areStatesEqual, l = i.areOwnPropsEqual, c = i.areStatePropsEqual, f = !1, p, h, m, v, w;
  function O(k, z) {
    return p = k, h = z, m = e(p, h), v = t(n, h), w = r(m, v, h), f = !0, w;
  }
  function T() {
    return m = e(p, h), t.dependsOnOwnProps && (v = t(n, h)), w = r(m, v, h), w;
  }
  function _() {
    return e.dependsOnOwnProps && (m = e(p, h)), t.dependsOnOwnProps && (v = t(n, h)), w = r(m, v, h), w;
  }
  function x() {
    var k = e(p, h), z = !c(k, m);
    return m = k, z && (w = r(m, v, h)), w;
  }
  function D(k, z) {
    var N = !l(z, h), B = !s(k, p, z, h);
    return p = k, h = z, N && B ? T() : N ? _() : B ? x() : w;
  }
  return function(z, N) {
    return f ? D(z, N) : O(z, N);
  };
}
function CK(e, t) {
  var r = t.initMapStateToProps, n = t.initMapDispatchToProps, i = t.initMergeProps, s = Ba(t, PK), l = r(e, s), c = n(e, s), f = i(e, s);
  process.env.NODE_ENV !== "production" && TK(l, c, f, s.displayName);
  var p = s.pure ? AK : xK;
  return p(l, c, f, e, s);
}
var $K = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];
function uf(e, t, r) {
  for (var n = t.length - 1; n >= 0; n--) {
    var i = t[n](e);
    if (i)
      return i;
  }
  return function(s, l) {
    throw new Error("Invalid value of type " + typeof e + " for " + r + " argument when connecting component " + l.wrappedComponentName + ".");
  };
}
function RK(e, t) {
  return e === t;
}
function NK(e) {
  var t = e === void 0 ? {} : e, r = t.connectHOC, n = r === void 0 ? uK : r, i = t.mapStateToPropsFactories, s = i === void 0 ? bK : i, l = t.mapDispatchToPropsFactories, c = l === void 0 ? mK : l, f = t.mergePropsFactories, p = f === void 0 ? OK : f, h = t.selectorFactory, m = h === void 0 ? CK : h;
  return function(w, O, T, _) {
    _ === void 0 && (_ = {});
    var x = _, D = x.pure, k = D === void 0 ? !0 : D, z = x.areStatesEqual, N = z === void 0 ? RK : z, B = x.areOwnPropsEqual, P = B === void 0 ? lf : B, $ = x.areStatePropsEqual, I = $ === void 0 ? lf : $, U = x.areMergedPropsEqual, W = U === void 0 ? lf : U, X = Ba(x, $K), V = uf(w, s, "mapStateToProps"), ce = uf(O, c, "mapDispatchToProps"), _e = uf(T, p, "mergeProps");
    return n(m, F({
      // used in error messages
      methodName: "connect",
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function(Te) {
        return "Connect(" + Te + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: !!w,
      // passed through to selectorFactory
      initMapStateToProps: V,
      initMapDispatchToProps: ce,
      initMergeProps: _e,
      pure: k,
      areStatesEqual: N,
      areOwnPropsEqual: P,
      areStatePropsEqual: I,
      areMergedPropsEqual: W
    }, X));
  };
}
const Tt = /* @__PURE__ */ NK();
q5(zC);
function yb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yb(Object(r), !0).forEach(function(n) {
      Ia(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ht(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Eb = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), df = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Fa = {
  INIT: "@@redux/INIT" + df(),
  REPLACE: "@@redux/REPLACE" + df(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + df();
  }
};
function FS(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function IK(e) {
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
  if (LK(e))
    return "date";
  if (DK(e))
    return "error";
  var r = kK(e);
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
function kK(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function DK(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function LK(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Ca(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = IK(e)), t;
}
function BS(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ht(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ht(1) : "Expected the enhancer to be a function. Instead, received: '" + Ca(r) + "'");
    return r(BS)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ht(2) : "Expected the root reducer to be a function. Instead, received: '" + Ca(e) + "'");
  var i = e, s = t, l = [], c = l, f = !1;
  function p() {
    c === l && (c = l.slice());
  }
  function h() {
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? Ht(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return s;
  }
  function m(T) {
    if (typeof T != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ht(4) : "Expected the listener to be a function. Instead, received: '" + Ca(T) + "'");
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? Ht(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var _ = !0;
    return p(), c.push(T), function() {
      if (_) {
        if (f)
          throw new Error(process.env.NODE_ENV === "production" ? Ht(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        _ = !1, p();
        var D = c.indexOf(T);
        c.splice(D, 1), l = null;
      }
    };
  }
  function v(T) {
    if (!FS(T))
      throw new Error(process.env.NODE_ENV === "production" ? Ht(7) : "Actions must be plain objects. Instead, the actual type was: '" + Ca(T) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof T.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ht(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? Ht(9) : "Reducers may not dispatch actions.");
    try {
      f = !0, s = i(s, T);
    } finally {
      f = !1;
    }
    for (var _ = l = c, x = 0; x < _.length; x++) {
      var D = _[x];
      D();
    }
    return T;
  }
  function w(T) {
    if (typeof T != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ht(10) : "Expected the nextReducer to be a function. Instead, received: '" + Ca(T));
    i = T, v({
      type: Fa.REPLACE
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
      subscribe: function(D) {
        if (typeof D != "object" || D === null)
          throw new Error(process.env.NODE_ENV === "production" ? Ht(11) : "Expected the observer to be an object. Instead, received: '" + Ca(D) + "'");
        function k() {
          D.next && D.next(h());
        }
        k();
        var z = _(k);
        return {
          unsubscribe: z
        };
      }
    }, T[Eb] = function() {
      return this;
    }, T;
  }
  return v({
    type: Fa.INIT
  }), n = {
    dispatch: v,
    subscribe: m,
    getState: h,
    replaceReducer: w
  }, n[Eb] = O, n;
}
function wb(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function MK(e, t, r, n) {
  var i = Object.keys(t), s = r && r.type === Fa.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!FS(e))
    return "The " + s + ' has unexpected type of "' + Ca(e) + '". Expected argument to be an object with the following ' + ('keys: "' + i.join('", "') + '"');
  var l = Object.keys(e).filter(function(c) {
    return !t.hasOwnProperty(c) && !n[c];
  });
  if (l.forEach(function(c) {
    n[c] = !0;
  }), !(r && r.type === Fa.REPLACE) && l.length > 0)
    return "Unexpected " + (l.length > 1 ? "keys" : "key") + " " + ('"' + l.join('", "') + '" found in ' + s + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + i.join('", "') + '". Unexpected keys will be ignored.');
}
function FK(e) {
  Object.keys(e).forEach(function(t) {
    var r = e[t], n = r(void 0, {
      type: Fa.INIT
    });
    if (typeof n > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ht(12) : 'The slice reducer for key "' + t + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: Fa.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ht(13) : 'The slice reducer for key "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + Fa.INIT + `' or other actions in "redux/*" `) + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
  });
}
function BK(e) {
  for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
    var i = t[n];
    process.env.NODE_ENV !== "production" && typeof e[i] > "u" && wb('No reducer provided for key "' + i + '"'), typeof e[i] == "function" && (r[i] = e[i]);
  }
  var s = Object.keys(r), l;
  process.env.NODE_ENV !== "production" && (l = {});
  var c;
  try {
    FK(r);
  } catch (f) {
    c = f;
  }
  return function(p, h) {
    if (p === void 0 && (p = {}), c)
      throw c;
    if (process.env.NODE_ENV !== "production") {
      var m = MK(p, r, h, l);
      m && wb(m);
    }
    for (var v = !1, w = {}, O = 0; O < s.length; O++) {
      var T = s[O], _ = r[T], x = p[T], D = _(x, h);
      if (typeof D > "u") {
        var k = h && h.type;
        throw new Error(process.env.NODE_ENV === "production" ? Ht(14) : "When called with an action of type " + (k ? '"' + String(k) + '"' : "(unknown type)") + ', the slice reducer for key "' + T + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
      }
      w[T] = D, v = v || D !== x;
    }
    return v = v || s.length !== Object.keys(p).length, v ? w : p;
  };
}
function UK() {
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
function zK() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var i = n.apply(void 0, arguments), s = function() {
        throw new Error(process.env.NODE_ENV === "production" ? Ht(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, l = {
        getState: i.getState,
        dispatch: function() {
          return s.apply(void 0, arguments);
        }
      }, c = t.map(function(f) {
        return f(l);
      });
      return s = UK.apply(void 0, c)(i.dispatch), bb(bb({}, i), {}, {
        dispatch: s
      });
    };
  };
}
function US(e) {
  var t = function(n) {
    var i = n.dispatch, s = n.getState;
    return function(l) {
      return function(c) {
        return typeof c == "function" ? c(i, s, e) : l(c);
      };
    };
  };
  return t;
}
var zS = US();
zS.withExtraArgument = US;
const qK = zS;
var fc = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
fc.exports;
(function(e, t) {
  (function() {
    var r, n = "4.17.21", i = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", c = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", p = 500, h = "__lodash_placeholder__", m = 1, v = 2, w = 4, O = 1, T = 2, _ = 1, x = 2, D = 4, k = 8, z = 16, N = 32, B = 64, P = 128, $ = 256, I = 512, U = 30, W = "...", X = 800, V = 16, ce = 1, _e = 2, Oe = 3, Te = 1 / 0, je = 9007199254740991, Ze = 17976931348623157e292, K = 0 / 0, J = 4294967295, we = J - 1, ge = J >>> 1, pe = [
      ["ary", P],
      ["bind", _],
      ["bindKey", x],
      ["curry", k],
      ["curryRight", z],
      ["flip", I],
      ["partial", N],
      ["partialRight", B],
      ["rearg", $]
    ], Se = "[object Arguments]", he = "[object Array]", Pe = "[object AsyncFunction]", xe = "[object Boolean]", Ae = "[object Date]", Ne = "[object DOMException]", ie = "[object Error]", re = "[object Function]", gt = "[object GeneratorFunction]", oe = "[object Map]", Zt = "[object Number]", ln = "[object Null]", zt = "[object Object]", ma = "[object Promise]", Fs = "[object Proxy]", cn = "[object RegExp]", Qt = "[object Set]", va = "[object String]", Vr = "[object Symbol]", vo = "[object Undefined]", yo = "[object WeakMap]", n1 = "[object WeakSet]", bo = "[object ArrayBuffer]", oi = "[object DataView]", eu = "[object Float32Array]", tu = "[object Float64Array]", ru = "[object Int8Array]", nu = "[object Int16Array]", au = "[object Int32Array]", iu = "[object Uint8Array]", ou = "[object Uint8ClampedArray]", su = "[object Uint16Array]", lu = "[object Uint32Array]", a1 = /\b__p \+= '';/g, i1 = /\b(__p \+=) '' \+/g, o1 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, th = /&(?:amp|lt|gt|quot|#39);/g, rh = /[&<>"']/g, s1 = RegExp(th.source), l1 = RegExp(rh.source), c1 = /<%-([\s\S]+?)%>/g, u1 = /<%([\s\S]+?)%>/g, nh = /<%=([\s\S]+?)%>/g, d1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, f1 = /^\w*$/, p1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, cu = /[\\^$.*+?()[\]{}|]/g, h1 = RegExp(cu.source), uu = /^\s+/, g1 = /\s/, m1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, v1 = /\{\n\/\* \[wrapped with (.+)\] \*/, y1 = /,? & /, b1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, E1 = /[()=,{}\[\]\/\s]/, w1 = /\\(\\)?/g, S1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ah = /\w*$/, _1 = /^[-+]0x[0-9a-f]+$/i, O1 = /^0b[01]+$/i, T1 = /^\[object .+?Constructor\]$/, P1 = /^0o[0-7]+$/i, x1 = /^(?:0|[1-9]\d*)$/, A1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Bs = /($^)/, C1 = /['\n\r\u2028\u2029\\]/g, Us = "\\ud800-\\udfff", $1 = "\\u0300-\\u036f", R1 = "\\ufe20-\\ufe2f", N1 = "\\u20d0-\\u20ff", ih = $1 + R1 + N1, oh = "\\u2700-\\u27bf", sh = "a-z\\xdf-\\xf6\\xf8-\\xff", I1 = "\\xac\\xb1\\xd7\\xf7", k1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", D1 = "\\u2000-\\u206f", L1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", lh = "A-Z\\xc0-\\xd6\\xd8-\\xde", ch = "\\ufe0e\\ufe0f", uh = I1 + k1 + D1 + L1, du = "['’]", M1 = "[" + Us + "]", dh = "[" + uh + "]", zs = "[" + ih + "]", fh = "\\d+", F1 = "[" + oh + "]", ph = "[" + sh + "]", hh = "[^" + Us + uh + fh + oh + sh + lh + "]", fu = "\\ud83c[\\udffb-\\udfff]", B1 = "(?:" + zs + "|" + fu + ")", gh = "[^" + Us + "]", pu = "(?:\\ud83c[\\udde6-\\uddff]){2}", hu = "[\\ud800-\\udbff][\\udc00-\\udfff]", si = "[" + lh + "]", mh = "\\u200d", vh = "(?:" + ph + "|" + hh + ")", U1 = "(?:" + si + "|" + hh + ")", yh = "(?:" + du + "(?:d|ll|m|re|s|t|ve))?", bh = "(?:" + du + "(?:D|LL|M|RE|S|T|VE))?", Eh = B1 + "?", wh = "[" + ch + "]?", z1 = "(?:" + mh + "(?:" + [gh, pu, hu].join("|") + ")" + wh + Eh + ")*", q1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", j1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Sh = wh + Eh + z1, H1 = "(?:" + [F1, pu, hu].join("|") + ")" + Sh, V1 = "(?:" + [gh + zs + "?", zs, pu, hu, M1].join("|") + ")", W1 = RegExp(du, "g"), G1 = RegExp(zs, "g"), gu = RegExp(fu + "(?=" + fu + ")|" + V1 + Sh, "g"), Q1 = RegExp([
      si + "?" + ph + "+" + yh + "(?=" + [dh, si, "$"].join("|") + ")",
      U1 + "+" + bh + "(?=" + [dh, si + vh, "$"].join("|") + ")",
      si + "?" + vh + "+" + yh,
      si + "+" + bh,
      j1,
      q1,
      fh,
      H1
    ].join("|"), "g"), K1 = RegExp("[" + mh + Us + ih + ch + "]"), Y1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, X1 = [
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
    ], J1 = -1, lt = {};
    lt[eu] = lt[tu] = lt[ru] = lt[nu] = lt[au] = lt[iu] = lt[ou] = lt[su] = lt[lu] = !0, lt[Se] = lt[he] = lt[bo] = lt[xe] = lt[oi] = lt[Ae] = lt[ie] = lt[re] = lt[oe] = lt[Zt] = lt[zt] = lt[cn] = lt[Qt] = lt[va] = lt[yo] = !1;
    var it = {};
    it[Se] = it[he] = it[bo] = it[oi] = it[xe] = it[Ae] = it[eu] = it[tu] = it[ru] = it[nu] = it[au] = it[oe] = it[Zt] = it[zt] = it[cn] = it[Qt] = it[va] = it[Vr] = it[iu] = it[ou] = it[su] = it[lu] = !0, it[ie] = it[re] = it[yo] = !1;
    var Z1 = {
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
    }, eO = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, tO = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, rO = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, nO = parseFloat, aO = parseInt, _h = typeof Lr == "object" && Lr && Lr.Object === Object && Lr, iO = typeof self == "object" && self && self.Object === Object && self, Ft = _h || iO || Function("return this")(), mu = t && !t.nodeType && t, ya = mu && !0 && e && !e.nodeType && e, Oh = ya && ya.exports === mu, vu = Oh && _h.process, br = function() {
      try {
        var L = ya && ya.require && ya.require("util").types;
        return L || vu && vu.binding && vu.binding("util");
      } catch {
      }
    }(), Th = br && br.isArrayBuffer, Ph = br && br.isDate, xh = br && br.isMap, Ah = br && br.isRegExp, Ch = br && br.isSet, $h = br && br.isTypedArray;
    function sr(L, H, q) {
      switch (q.length) {
        case 0:
          return L.call(H);
        case 1:
          return L.call(H, q[0]);
        case 2:
          return L.call(H, q[0], q[1]);
        case 3:
          return L.call(H, q[0], q[1], q[2]);
      }
      return L.apply(H, q);
    }
    function oO(L, H, q, ue) {
      for (var Ce = -1, We = L == null ? 0 : L.length; ++Ce < We; ) {
        var Pt = L[Ce];
        H(ue, Pt, q(Pt), L);
      }
      return ue;
    }
    function Er(L, H) {
      for (var q = -1, ue = L == null ? 0 : L.length; ++q < ue && H(L[q], q, L) !== !1; )
        ;
      return L;
    }
    function sO(L, H) {
      for (var q = L == null ? 0 : L.length; q-- && H(L[q], q, L) !== !1; )
        ;
      return L;
    }
    function Rh(L, H) {
      for (var q = -1, ue = L == null ? 0 : L.length; ++q < ue; )
        if (!H(L[q], q, L))
          return !1;
      return !0;
    }
    function zn(L, H) {
      for (var q = -1, ue = L == null ? 0 : L.length, Ce = 0, We = []; ++q < ue; ) {
        var Pt = L[q];
        H(Pt, q, L) && (We[Ce++] = Pt);
      }
      return We;
    }
    function qs(L, H) {
      var q = L == null ? 0 : L.length;
      return !!q && li(L, H, 0) > -1;
    }
    function yu(L, H, q) {
      for (var ue = -1, Ce = L == null ? 0 : L.length; ++ue < Ce; )
        if (q(H, L[ue]))
          return !0;
      return !1;
    }
    function ft(L, H) {
      for (var q = -1, ue = L == null ? 0 : L.length, Ce = Array(ue); ++q < ue; )
        Ce[q] = H(L[q], q, L);
      return Ce;
    }
    function qn(L, H) {
      for (var q = -1, ue = H.length, Ce = L.length; ++q < ue; )
        L[Ce + q] = H[q];
      return L;
    }
    function bu(L, H, q, ue) {
      var Ce = -1, We = L == null ? 0 : L.length;
      for (ue && We && (q = L[++Ce]); ++Ce < We; )
        q = H(q, L[Ce], Ce, L);
      return q;
    }
    function lO(L, H, q, ue) {
      var Ce = L == null ? 0 : L.length;
      for (ue && Ce && (q = L[--Ce]); Ce--; )
        q = H(q, L[Ce], Ce, L);
      return q;
    }
    function Eu(L, H) {
      for (var q = -1, ue = L == null ? 0 : L.length; ++q < ue; )
        if (H(L[q], q, L))
          return !0;
      return !1;
    }
    var cO = wu("length");
    function uO(L) {
      return L.split("");
    }
    function dO(L) {
      return L.match(b1) || [];
    }
    function Nh(L, H, q) {
      var ue;
      return q(L, function(Ce, We, Pt) {
        if (H(Ce, We, Pt))
          return ue = We, !1;
      }), ue;
    }
    function js(L, H, q, ue) {
      for (var Ce = L.length, We = q + (ue ? 1 : -1); ue ? We-- : ++We < Ce; )
        if (H(L[We], We, L))
          return We;
      return -1;
    }
    function li(L, H, q) {
      return H === H ? _O(L, H, q) : js(L, Ih, q);
    }
    function fO(L, H, q, ue) {
      for (var Ce = q - 1, We = L.length; ++Ce < We; )
        if (ue(L[Ce], H))
          return Ce;
      return -1;
    }
    function Ih(L) {
      return L !== L;
    }
    function kh(L, H) {
      var q = L == null ? 0 : L.length;
      return q ? _u(L, H) / q : K;
    }
    function wu(L) {
      return function(H) {
        return H == null ? r : H[L];
      };
    }
    function Su(L) {
      return function(H) {
        return L == null ? r : L[H];
      };
    }
    function Dh(L, H, q, ue, Ce) {
      return Ce(L, function(We, Pt, nt) {
        q = ue ? (ue = !1, We) : H(q, We, Pt, nt);
      }), q;
    }
    function pO(L, H) {
      var q = L.length;
      for (L.sort(H); q--; )
        L[q] = L[q].value;
      return L;
    }
    function _u(L, H) {
      for (var q, ue = -1, Ce = L.length; ++ue < Ce; ) {
        var We = H(L[ue]);
        We !== r && (q = q === r ? We : q + We);
      }
      return q;
    }
    function Ou(L, H) {
      for (var q = -1, ue = Array(L); ++q < L; )
        ue[q] = H(q);
      return ue;
    }
    function hO(L, H) {
      return ft(H, function(q) {
        return [q, L[q]];
      });
    }
    function Lh(L) {
      return L && L.slice(0, Uh(L) + 1).replace(uu, "");
    }
    function lr(L) {
      return function(H) {
        return L(H);
      };
    }
    function Tu(L, H) {
      return ft(H, function(q) {
        return L[q];
      });
    }
    function Eo(L, H) {
      return L.has(H);
    }
    function Mh(L, H) {
      for (var q = -1, ue = L.length; ++q < ue && li(H, L[q], 0) > -1; )
        ;
      return q;
    }
    function Fh(L, H) {
      for (var q = L.length; q-- && li(H, L[q], 0) > -1; )
        ;
      return q;
    }
    function gO(L, H) {
      for (var q = L.length, ue = 0; q--; )
        L[q] === H && ++ue;
      return ue;
    }
    var mO = Su(Z1), vO = Su(eO);
    function yO(L) {
      return "\\" + rO[L];
    }
    function bO(L, H) {
      return L == null ? r : L[H];
    }
    function ci(L) {
      return K1.test(L);
    }
    function EO(L) {
      return Y1.test(L);
    }
    function wO(L) {
      for (var H, q = []; !(H = L.next()).done; )
        q.push(H.value);
      return q;
    }
    function Pu(L) {
      var H = -1, q = Array(L.size);
      return L.forEach(function(ue, Ce) {
        q[++H] = [Ce, ue];
      }), q;
    }
    function Bh(L, H) {
      return function(q) {
        return L(H(q));
      };
    }
    function jn(L, H) {
      for (var q = -1, ue = L.length, Ce = 0, We = []; ++q < ue; ) {
        var Pt = L[q];
        (Pt === H || Pt === h) && (L[q] = h, We[Ce++] = q);
      }
      return We;
    }
    function Hs(L) {
      var H = -1, q = Array(L.size);
      return L.forEach(function(ue) {
        q[++H] = ue;
      }), q;
    }
    function SO(L) {
      var H = -1, q = Array(L.size);
      return L.forEach(function(ue) {
        q[++H] = [ue, ue];
      }), q;
    }
    function _O(L, H, q) {
      for (var ue = q - 1, Ce = L.length; ++ue < Ce; )
        if (L[ue] === H)
          return ue;
      return -1;
    }
    function OO(L, H, q) {
      for (var ue = q + 1; ue--; )
        if (L[ue] === H)
          return ue;
      return ue;
    }
    function ui(L) {
      return ci(L) ? PO(L) : cO(L);
    }
    function Nr(L) {
      return ci(L) ? xO(L) : uO(L);
    }
    function Uh(L) {
      for (var H = L.length; H-- && g1.test(L.charAt(H)); )
        ;
      return H;
    }
    var TO = Su(tO);
    function PO(L) {
      for (var H = gu.lastIndex = 0; gu.test(L); )
        ++H;
      return H;
    }
    function xO(L) {
      return L.match(gu) || [];
    }
    function AO(L) {
      return L.match(Q1) || [];
    }
    var CO = function L(H) {
      H = H == null ? Ft : di.defaults(Ft.Object(), H, di.pick(Ft, X1));
      var q = H.Array, ue = H.Date, Ce = H.Error, We = H.Function, Pt = H.Math, nt = H.Object, xu = H.RegExp, $O = H.String, wr = H.TypeError, Vs = q.prototype, RO = We.prototype, fi = nt.prototype, Ws = H["__core-js_shared__"], Gs = RO.toString, Je = fi.hasOwnProperty, NO = 0, zh = function() {
        var a = /[^.]+$/.exec(Ws && Ws.keys && Ws.keys.IE_PROTO || "");
        return a ? "Symbol(src)_1." + a : "";
      }(), Qs = fi.toString, IO = Gs.call(nt), kO = Ft._, DO = xu(
        "^" + Gs.call(Je).replace(cu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ks = Oh ? H.Buffer : r, Hn = H.Symbol, Ys = H.Uint8Array, qh = Ks ? Ks.allocUnsafe : r, Xs = Bh(nt.getPrototypeOf, nt), jh = nt.create, Hh = fi.propertyIsEnumerable, Js = Vs.splice, Vh = Hn ? Hn.isConcatSpreadable : r, wo = Hn ? Hn.iterator : r, ba = Hn ? Hn.toStringTag : r, Zs = function() {
        try {
          var a = Oa(nt, "defineProperty");
          return a({}, "", {}), a;
        } catch {
        }
      }(), LO = H.clearTimeout !== Ft.clearTimeout && H.clearTimeout, MO = ue && ue.now !== Ft.Date.now && ue.now, FO = H.setTimeout !== Ft.setTimeout && H.setTimeout, el = Pt.ceil, tl = Pt.floor, Au = nt.getOwnPropertySymbols, BO = Ks ? Ks.isBuffer : r, Wh = H.isFinite, UO = Vs.join, zO = Bh(nt.keys, nt), xt = Pt.max, qt = Pt.min, qO = ue.now, jO = H.parseInt, Gh = Pt.random, HO = Vs.reverse, Cu = Oa(H, "DataView"), So = Oa(H, "Map"), $u = Oa(H, "Promise"), pi = Oa(H, "Set"), _o = Oa(H, "WeakMap"), Oo = Oa(nt, "create"), rl = _o && new _o(), hi = {}, VO = Ta(Cu), WO = Ta(So), GO = Ta($u), QO = Ta(pi), KO = Ta(_o), nl = Hn ? Hn.prototype : r, To = nl ? nl.valueOf : r, Qh = nl ? nl.toString : r;
      function E(a) {
        if (mt(a) && !$e(a) && !(a instanceof Fe)) {
          if (a instanceof Sr)
            return a;
          if (Je.call(a, "__wrapped__"))
            return Kg(a);
        }
        return new Sr(a);
      }
      var gi = function() {
        function a() {
        }
        return function(o) {
          if (!pt(o))
            return {};
          if (jh)
            return jh(o);
          a.prototype = o;
          var u = new a();
          return a.prototype = r, u;
        };
      }();
      function al() {
      }
      function Sr(a, o) {
        this.__wrapped__ = a, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = r;
      }
      E.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: c1,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: u1,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: nh,
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
      }, E.prototype = al.prototype, E.prototype.constructor = E, Sr.prototype = gi(al.prototype), Sr.prototype.constructor = Sr;
      function Fe(a) {
        this.__wrapped__ = a, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = J, this.__views__ = [];
      }
      function YO() {
        var a = new Fe(this.__wrapped__);
        return a.__actions__ = er(this.__actions__), a.__dir__ = this.__dir__, a.__filtered__ = this.__filtered__, a.__iteratees__ = er(this.__iteratees__), a.__takeCount__ = this.__takeCount__, a.__views__ = er(this.__views__), a;
      }
      function XO() {
        if (this.__filtered__) {
          var a = new Fe(this);
          a.__dir__ = -1, a.__filtered__ = !0;
        } else
          a = this.clone(), a.__dir__ *= -1;
        return a;
      }
      function JO() {
        var a = this.__wrapped__.value(), o = this.__dir__, u = $e(a), g = o < 0, y = u ? a.length : 0, S = uT(0, y, this.__views__), A = S.start, R = S.end, M = R - A, G = g ? R : A - 1, Q = this.__iteratees__, Y = Q.length, se = 0, de = qt(M, this.__takeCount__);
        if (!u || !g && y == M && de == M)
          return yg(a, this.__actions__);
        var ye = [];
        e:
          for (; M-- && se < de; ) {
            G += o;
            for (var ke = -1, be = a[G]; ++ke < Y; ) {
              var Le = Q[ke], ze = Le.iteratee, dr = Le.type, Xt = ze(be);
              if (dr == _e)
                be = Xt;
              else if (!Xt) {
                if (dr == ce)
                  continue e;
                break e;
              }
            }
            ye[se++] = be;
          }
        return ye;
      }
      Fe.prototype = gi(al.prototype), Fe.prototype.constructor = Fe;
      function Ea(a) {
        var o = -1, u = a == null ? 0 : a.length;
        for (this.clear(); ++o < u; ) {
          var g = a[o];
          this.set(g[0], g[1]);
        }
      }
      function ZO() {
        this.__data__ = Oo ? Oo(null) : {}, this.size = 0;
      }
      function e0(a) {
        var o = this.has(a) && delete this.__data__[a];
        return this.size -= o ? 1 : 0, o;
      }
      function t0(a) {
        var o = this.__data__;
        if (Oo) {
          var u = o[a];
          return u === f ? r : u;
        }
        return Je.call(o, a) ? o[a] : r;
      }
      function r0(a) {
        var o = this.__data__;
        return Oo ? o[a] !== r : Je.call(o, a);
      }
      function n0(a, o) {
        var u = this.__data__;
        return this.size += this.has(a) ? 0 : 1, u[a] = Oo && o === r ? f : o, this;
      }
      Ea.prototype.clear = ZO, Ea.prototype.delete = e0, Ea.prototype.get = t0, Ea.prototype.has = r0, Ea.prototype.set = n0;
      function un(a) {
        var o = -1, u = a == null ? 0 : a.length;
        for (this.clear(); ++o < u; ) {
          var g = a[o];
          this.set(g[0], g[1]);
        }
      }
      function a0() {
        this.__data__ = [], this.size = 0;
      }
      function i0(a) {
        var o = this.__data__, u = il(o, a);
        if (u < 0)
          return !1;
        var g = o.length - 1;
        return u == g ? o.pop() : Js.call(o, u, 1), --this.size, !0;
      }
      function o0(a) {
        var o = this.__data__, u = il(o, a);
        return u < 0 ? r : o[u][1];
      }
      function s0(a) {
        return il(this.__data__, a) > -1;
      }
      function l0(a, o) {
        var u = this.__data__, g = il(u, a);
        return g < 0 ? (++this.size, u.push([a, o])) : u[g][1] = o, this;
      }
      un.prototype.clear = a0, un.prototype.delete = i0, un.prototype.get = o0, un.prototype.has = s0, un.prototype.set = l0;
      function dn(a) {
        var o = -1, u = a == null ? 0 : a.length;
        for (this.clear(); ++o < u; ) {
          var g = a[o];
          this.set(g[0], g[1]);
        }
      }
      function c0() {
        this.size = 0, this.__data__ = {
          hash: new Ea(),
          map: new (So || un)(),
          string: new Ea()
        };
      }
      function u0(a) {
        var o = vl(this, a).delete(a);
        return this.size -= o ? 1 : 0, o;
      }
      function d0(a) {
        return vl(this, a).get(a);
      }
      function f0(a) {
        return vl(this, a).has(a);
      }
      function p0(a, o) {
        var u = vl(this, a), g = u.size;
        return u.set(a, o), this.size += u.size == g ? 0 : 1, this;
      }
      dn.prototype.clear = c0, dn.prototype.delete = u0, dn.prototype.get = d0, dn.prototype.has = f0, dn.prototype.set = p0;
      function wa(a) {
        var o = -1, u = a == null ? 0 : a.length;
        for (this.__data__ = new dn(); ++o < u; )
          this.add(a[o]);
      }
      function h0(a) {
        return this.__data__.set(a, f), this;
      }
      function g0(a) {
        return this.__data__.has(a);
      }
      wa.prototype.add = wa.prototype.push = h0, wa.prototype.has = g0;
      function Ir(a) {
        var o = this.__data__ = new un(a);
        this.size = o.size;
      }
      function m0() {
        this.__data__ = new un(), this.size = 0;
      }
      function v0(a) {
        var o = this.__data__, u = o.delete(a);
        return this.size = o.size, u;
      }
      function y0(a) {
        return this.__data__.get(a);
      }
      function b0(a) {
        return this.__data__.has(a);
      }
      function E0(a, o) {
        var u = this.__data__;
        if (u instanceof un) {
          var g = u.__data__;
          if (!So || g.length < i - 1)
            return g.push([a, o]), this.size = ++u.size, this;
          u = this.__data__ = new dn(g);
        }
        return u.set(a, o), this.size = u.size, this;
      }
      Ir.prototype.clear = m0, Ir.prototype.delete = v0, Ir.prototype.get = y0, Ir.prototype.has = b0, Ir.prototype.set = E0;
      function Kh(a, o) {
        var u = $e(a), g = !u && Pa(a), y = !u && !g && Kn(a), S = !u && !g && !y && bi(a), A = u || g || y || S, R = A ? Ou(a.length, $O) : [], M = R.length;
        for (var G in a)
          (o || Je.call(a, G)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
          (G == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          y && (G == "offset" || G == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          S && (G == "buffer" || G == "byteLength" || G == "byteOffset") || // Skip index properties.
          gn(G, M))) && R.push(G);
        return R;
      }
      function Yh(a) {
        var o = a.length;
        return o ? a[zu(0, o - 1)] : r;
      }
      function w0(a, o) {
        return yl(er(a), Sa(o, 0, a.length));
      }
      function S0(a) {
        return yl(er(a));
      }
      function Ru(a, o, u) {
        (u !== r && !kr(a[o], u) || u === r && !(o in a)) && fn(a, o, u);
      }
      function Po(a, o, u) {
        var g = a[o];
        (!(Je.call(a, o) && kr(g, u)) || u === r && !(o in a)) && fn(a, o, u);
      }
      function il(a, o) {
        for (var u = a.length; u--; )
          if (kr(a[u][0], o))
            return u;
        return -1;
      }
      function _0(a, o, u, g) {
        return Vn(a, function(y, S, A) {
          o(g, y, u(y), A);
        }), g;
      }
      function Xh(a, o) {
        return a && Gr(o, Nt(o), a);
      }
      function O0(a, o) {
        return a && Gr(o, rr(o), a);
      }
      function fn(a, o, u) {
        o == "__proto__" && Zs ? Zs(a, o, {
          configurable: !0,
          enumerable: !0,
          value: u,
          writable: !0
        }) : a[o] = u;
      }
      function Nu(a, o) {
        for (var u = -1, g = o.length, y = q(g), S = a == null; ++u < g; )
          y[u] = S ? r : fd(a, o[u]);
        return y;
      }
      function Sa(a, o, u) {
        return a === a && (u !== r && (a = a <= u ? a : u), o !== r && (a = a >= o ? a : o)), a;
      }
      function _r(a, o, u, g, y, S) {
        var A, R = o & m, M = o & v, G = o & w;
        if (u && (A = y ? u(a, g, y, S) : u(a)), A !== r)
          return A;
        if (!pt(a))
          return a;
        var Q = $e(a);
        if (Q) {
          if (A = fT(a), !R)
            return er(a, A);
        } else {
          var Y = jt(a), se = Y == re || Y == gt;
          if (Kn(a))
            return wg(a, R);
          if (Y == zt || Y == Se || se && !y) {
            if (A = M || se ? {} : Ug(a), !R)
              return M ? tT(a, O0(A, a)) : eT(a, Xh(A, a));
          } else {
            if (!it[Y])
              return y ? a : {};
            A = pT(a, Y, R);
          }
        }
        S || (S = new Ir());
        var de = S.get(a);
        if (de)
          return de;
        S.set(a, A), gm(a) ? a.forEach(function(be) {
          A.add(_r(be, o, u, be, a, S));
        }) : pm(a) && a.forEach(function(be, Le) {
          A.set(Le, _r(be, o, u, Le, a, S));
        });
        var ye = G ? M ? Ju : Xu : M ? rr : Nt, ke = Q ? r : ye(a);
        return Er(ke || a, function(be, Le) {
          ke && (Le = be, be = a[Le]), Po(A, Le, _r(be, o, u, Le, a, S));
        }), A;
      }
      function T0(a) {
        var o = Nt(a);
        return function(u) {
          return Jh(u, a, o);
        };
      }
      function Jh(a, o, u) {
        var g = u.length;
        if (a == null)
          return !g;
        for (a = nt(a); g--; ) {
          var y = u[g], S = o[y], A = a[y];
          if (A === r && !(y in a) || !S(A))
            return !1;
        }
        return !0;
      }
      function Zh(a, o, u) {
        if (typeof a != "function")
          throw new wr(l);
        return Io(function() {
          a.apply(r, u);
        }, o);
      }
      function xo(a, o, u, g) {
        var y = -1, S = qs, A = !0, R = a.length, M = [], G = o.length;
        if (!R)
          return M;
        u && (o = ft(o, lr(u))), g ? (S = yu, A = !1) : o.length >= i && (S = Eo, A = !1, o = new wa(o));
        e:
          for (; ++y < R; ) {
            var Q = a[y], Y = u == null ? Q : u(Q);
            if (Q = g || Q !== 0 ? Q : 0, A && Y === Y) {
              for (var se = G; se--; )
                if (o[se] === Y)
                  continue e;
              M.push(Q);
            } else
              S(o, Y, g) || M.push(Q);
          }
        return M;
      }
      var Vn = Pg(Wr), eg = Pg(ku, !0);
      function P0(a, o) {
        var u = !0;
        return Vn(a, function(g, y, S) {
          return u = !!o(g, y, S), u;
        }), u;
      }
      function ol(a, o, u) {
        for (var g = -1, y = a.length; ++g < y; ) {
          var S = a[g], A = o(S);
          if (A != null && (R === r ? A === A && !ur(A) : u(A, R)))
            var R = A, M = S;
        }
        return M;
      }
      function x0(a, o, u, g) {
        var y = a.length;
        for (u = Ie(u), u < 0 && (u = -u > y ? 0 : y + u), g = g === r || g > y ? y : Ie(g), g < 0 && (g += y), g = u > g ? 0 : vm(g); u < g; )
          a[u++] = o;
        return a;
      }
      function tg(a, o) {
        var u = [];
        return Vn(a, function(g, y, S) {
          o(g, y, S) && u.push(g);
        }), u;
      }
      function Bt(a, o, u, g, y) {
        var S = -1, A = a.length;
        for (u || (u = gT), y || (y = []); ++S < A; ) {
          var R = a[S];
          o > 0 && u(R) ? o > 1 ? Bt(R, o - 1, u, g, y) : qn(y, R) : g || (y[y.length] = R);
        }
        return y;
      }
      var Iu = xg(), rg = xg(!0);
      function Wr(a, o) {
        return a && Iu(a, o, Nt);
      }
      function ku(a, o) {
        return a && rg(a, o, Nt);
      }
      function sl(a, o) {
        return zn(o, function(u) {
          return mn(a[u]);
        });
      }
      function _a(a, o) {
        o = Gn(o, a);
        for (var u = 0, g = o.length; a != null && u < g; )
          a = a[Qr(o[u++])];
        return u && u == g ? a : r;
      }
      function ng(a, o, u) {
        var g = o(a);
        return $e(a) ? g : qn(g, u(a));
      }
      function Kt(a) {
        return a == null ? a === r ? vo : ln : ba && ba in nt(a) ? cT(a) : ST(a);
      }
      function Du(a, o) {
        return a > o;
      }
      function A0(a, o) {
        return a != null && Je.call(a, o);
      }
      function C0(a, o) {
        return a != null && o in nt(a);
      }
      function $0(a, o, u) {
        return a >= qt(o, u) && a < xt(o, u);
      }
      function Lu(a, o, u) {
        for (var g = u ? yu : qs, y = a[0].length, S = a.length, A = S, R = q(S), M = 1 / 0, G = []; A--; ) {
          var Q = a[A];
          A && o && (Q = ft(Q, lr(o))), M = qt(Q.length, M), R[A] = !u && (o || y >= 120 && Q.length >= 120) ? new wa(A && Q) : r;
        }
        Q = a[0];
        var Y = -1, se = R[0];
        e:
          for (; ++Y < y && G.length < M; ) {
            var de = Q[Y], ye = o ? o(de) : de;
            if (de = u || de !== 0 ? de : 0, !(se ? Eo(se, ye) : g(G, ye, u))) {
              for (A = S; --A; ) {
                var ke = R[A];
                if (!(ke ? Eo(ke, ye) : g(a[A], ye, u)))
                  continue e;
              }
              se && se.push(ye), G.push(de);
            }
          }
        return G;
      }
      function R0(a, o, u, g) {
        return Wr(a, function(y, S, A) {
          o(g, u(y), S, A);
        }), g;
      }
      function Ao(a, o, u) {
        o = Gn(o, a), a = Hg(a, o);
        var g = a == null ? a : a[Qr(Tr(o))];
        return g == null ? r : sr(g, a, u);
      }
      function ag(a) {
        return mt(a) && Kt(a) == Se;
      }
      function N0(a) {
        return mt(a) && Kt(a) == bo;
      }
      function I0(a) {
        return mt(a) && Kt(a) == Ae;
      }
      function Co(a, o, u, g, y) {
        return a === o ? !0 : a == null || o == null || !mt(a) && !mt(o) ? a !== a && o !== o : k0(a, o, u, g, Co, y);
      }
      function k0(a, o, u, g, y, S) {
        var A = $e(a), R = $e(o), M = A ? he : jt(a), G = R ? he : jt(o);
        M = M == Se ? zt : M, G = G == Se ? zt : G;
        var Q = M == zt, Y = G == zt, se = M == G;
        if (se && Kn(a)) {
          if (!Kn(o))
            return !1;
          A = !0, Q = !1;
        }
        if (se && !Q)
          return S || (S = new Ir()), A || bi(a) ? Mg(a, o, u, g, y, S) : sT(a, o, M, u, g, y, S);
        if (!(u & O)) {
          var de = Q && Je.call(a, "__wrapped__"), ye = Y && Je.call(o, "__wrapped__");
          if (de || ye) {
            var ke = de ? a.value() : a, be = ye ? o.value() : o;
            return S || (S = new Ir()), y(ke, be, u, g, S);
          }
        }
        return se ? (S || (S = new Ir()), lT(a, o, u, g, y, S)) : !1;
      }
      function D0(a) {
        return mt(a) && jt(a) == oe;
      }
      function Mu(a, o, u, g) {
        var y = u.length, S = y, A = !g;
        if (a == null)
          return !S;
        for (a = nt(a); y--; ) {
          var R = u[y];
          if (A && R[2] ? R[1] !== a[R[0]] : !(R[0] in a))
            return !1;
        }
        for (; ++y < S; ) {
          R = u[y];
          var M = R[0], G = a[M], Q = R[1];
          if (A && R[2]) {
            if (G === r && !(M in a))
              return !1;
          } else {
            var Y = new Ir();
            if (g)
              var se = g(G, Q, M, a, o, Y);
            if (!(se === r ? Co(Q, G, O | T, g, Y) : se))
              return !1;
          }
        }
        return !0;
      }
      function ig(a) {
        if (!pt(a) || vT(a))
          return !1;
        var o = mn(a) ? DO : T1;
        return o.test(Ta(a));
      }
      function L0(a) {
        return mt(a) && Kt(a) == cn;
      }
      function M0(a) {
        return mt(a) && jt(a) == Qt;
      }
      function F0(a) {
        return mt(a) && Ol(a.length) && !!lt[Kt(a)];
      }
      function og(a) {
        return typeof a == "function" ? a : a == null ? nr : typeof a == "object" ? $e(a) ? cg(a[0], a[1]) : lg(a) : Am(a);
      }
      function Fu(a) {
        if (!No(a))
          return zO(a);
        var o = [];
        for (var u in nt(a))
          Je.call(a, u) && u != "constructor" && o.push(u);
        return o;
      }
      function B0(a) {
        if (!pt(a))
          return wT(a);
        var o = No(a), u = [];
        for (var g in a)
          g == "constructor" && (o || !Je.call(a, g)) || u.push(g);
        return u;
      }
      function Bu(a, o) {
        return a < o;
      }
      function sg(a, o) {
        var u = -1, g = tr(a) ? q(a.length) : [];
        return Vn(a, function(y, S, A) {
          g[++u] = o(y, S, A);
        }), g;
      }
      function lg(a) {
        var o = ed(a);
        return o.length == 1 && o[0][2] ? qg(o[0][0], o[0][1]) : function(u) {
          return u === a || Mu(u, a, o);
        };
      }
      function cg(a, o) {
        return rd(a) && zg(o) ? qg(Qr(a), o) : function(u) {
          var g = fd(u, a);
          return g === r && g === o ? pd(u, a) : Co(o, g, O | T);
        };
      }
      function ll(a, o, u, g, y) {
        a !== o && Iu(o, function(S, A) {
          if (y || (y = new Ir()), pt(S))
            U0(a, o, A, u, ll, g, y);
          else {
            var R = g ? g(ad(a, A), S, A + "", a, o, y) : r;
            R === r && (R = S), Ru(a, A, R);
          }
        }, rr);
      }
      function U0(a, o, u, g, y, S, A) {
        var R = ad(a, u), M = ad(o, u), G = A.get(M);
        if (G) {
          Ru(a, u, G);
          return;
        }
        var Q = S ? S(R, M, u + "", a, o, A) : r, Y = Q === r;
        if (Y) {
          var se = $e(M), de = !se && Kn(M), ye = !se && !de && bi(M);
          Q = M, se || de || ye ? $e(R) ? Q = R : bt(R) ? Q = er(R) : de ? (Y = !1, Q = wg(M, !0)) : ye ? (Y = !1, Q = Sg(M, !0)) : Q = [] : ko(M) || Pa(M) ? (Q = R, Pa(R) ? Q = ym(R) : (!pt(R) || mn(R)) && (Q = Ug(M))) : Y = !1;
        }
        Y && (A.set(M, Q), y(Q, M, g, S, A), A.delete(M)), Ru(a, u, Q);
      }
      function ug(a, o) {
        var u = a.length;
        if (u)
          return o += o < 0 ? u : 0, gn(o, u) ? a[o] : r;
      }
      function dg(a, o, u) {
        o.length ? o = ft(o, function(S) {
          return $e(S) ? function(A) {
            return _a(A, S.length === 1 ? S[0] : S);
          } : S;
        }) : o = [nr];
        var g = -1;
        o = ft(o, lr(ve()));
        var y = sg(a, function(S, A, R) {
          var M = ft(o, function(G) {
            return G(S);
          });
          return { criteria: M, index: ++g, value: S };
        });
        return pO(y, function(S, A) {
          return Z0(S, A, u);
        });
      }
      function z0(a, o) {
        return fg(a, o, function(u, g) {
          return pd(a, g);
        });
      }
      function fg(a, o, u) {
        for (var g = -1, y = o.length, S = {}; ++g < y; ) {
          var A = o[g], R = _a(a, A);
          u(R, A) && $o(S, Gn(A, a), R);
        }
        return S;
      }
      function q0(a) {
        return function(o) {
          return _a(o, a);
        };
      }
      function Uu(a, o, u, g) {
        var y = g ? fO : li, S = -1, A = o.length, R = a;
        for (a === o && (o = er(o)), u && (R = ft(a, lr(u))); ++S < A; )
          for (var M = 0, G = o[S], Q = u ? u(G) : G; (M = y(R, Q, M, g)) > -1; )
            R !== a && Js.call(R, M, 1), Js.call(a, M, 1);
        return a;
      }
      function pg(a, o) {
        for (var u = a ? o.length : 0, g = u - 1; u--; ) {
          var y = o[u];
          if (u == g || y !== S) {
            var S = y;
            gn(y) ? Js.call(a, y, 1) : Hu(a, y);
          }
        }
        return a;
      }
      function zu(a, o) {
        return a + tl(Gh() * (o - a + 1));
      }
      function j0(a, o, u, g) {
        for (var y = -1, S = xt(el((o - a) / (u || 1)), 0), A = q(S); S--; )
          A[g ? S : ++y] = a, a += u;
        return A;
      }
      function qu(a, o) {
        var u = "";
        if (!a || o < 1 || o > je)
          return u;
        do
          o % 2 && (u += a), o = tl(o / 2), o && (a += a);
        while (o);
        return u;
      }
      function De(a, o) {
        return id(jg(a, o, nr), a + "");
      }
      function H0(a) {
        return Yh(Ei(a));
      }
      function V0(a, o) {
        var u = Ei(a);
        return yl(u, Sa(o, 0, u.length));
      }
      function $o(a, o, u, g) {
        if (!pt(a))
          return a;
        o = Gn(o, a);
        for (var y = -1, S = o.length, A = S - 1, R = a; R != null && ++y < S; ) {
          var M = Qr(o[y]), G = u;
          if (M === "__proto__" || M === "constructor" || M === "prototype")
            return a;
          if (y != A) {
            var Q = R[M];
            G = g ? g(Q, M, R) : r, G === r && (G = pt(Q) ? Q : gn(o[y + 1]) ? [] : {});
          }
          Po(R, M, G), R = R[M];
        }
        return a;
      }
      var hg = rl ? function(a, o) {
        return rl.set(a, o), a;
      } : nr, W0 = Zs ? function(a, o) {
        return Zs(a, "toString", {
          configurable: !0,
          enumerable: !1,
          value: gd(o),
          writable: !0
        });
      } : nr;
      function G0(a) {
        return yl(Ei(a));
      }
      function Or(a, o, u) {
        var g = -1, y = a.length;
        o < 0 && (o = -o > y ? 0 : y + o), u = u > y ? y : u, u < 0 && (u += y), y = o > u ? 0 : u - o >>> 0, o >>>= 0;
        for (var S = q(y); ++g < y; )
          S[g] = a[g + o];
        return S;
      }
      function Q0(a, o) {
        var u;
        return Vn(a, function(g, y, S) {
          return u = o(g, y, S), !u;
        }), !!u;
      }
      function cl(a, o, u) {
        var g = 0, y = a == null ? g : a.length;
        if (typeof o == "number" && o === o && y <= ge) {
          for (; g < y; ) {
            var S = g + y >>> 1, A = a[S];
            A !== null && !ur(A) && (u ? A <= o : A < o) ? g = S + 1 : y = S;
          }
          return y;
        }
        return ju(a, o, nr, u);
      }
      function ju(a, o, u, g) {
        var y = 0, S = a == null ? 0 : a.length;
        if (S === 0)
          return 0;
        o = u(o);
        for (var A = o !== o, R = o === null, M = ur(o), G = o === r; y < S; ) {
          var Q = tl((y + S) / 2), Y = u(a[Q]), se = Y !== r, de = Y === null, ye = Y === Y, ke = ur(Y);
          if (A)
            var be = g || ye;
          else
            G ? be = ye && (g || se) : R ? be = ye && se && (g || !de) : M ? be = ye && se && !de && (g || !ke) : de || ke ? be = !1 : be = g ? Y <= o : Y < o;
          be ? y = Q + 1 : S = Q;
        }
        return qt(S, we);
      }
      function gg(a, o) {
        for (var u = -1, g = a.length, y = 0, S = []; ++u < g; ) {
          var A = a[u], R = o ? o(A) : A;
          if (!u || !kr(R, M)) {
            var M = R;
            S[y++] = A === 0 ? 0 : A;
          }
        }
        return S;
      }
      function mg(a) {
        return typeof a == "number" ? a : ur(a) ? K : +a;
      }
      function cr(a) {
        if (typeof a == "string")
          return a;
        if ($e(a))
          return ft(a, cr) + "";
        if (ur(a))
          return Qh ? Qh.call(a) : "";
        var o = a + "";
        return o == "0" && 1 / a == -Te ? "-0" : o;
      }
      function Wn(a, o, u) {
        var g = -1, y = qs, S = a.length, A = !0, R = [], M = R;
        if (u)
          A = !1, y = yu;
        else if (S >= i) {
          var G = o ? null : iT(a);
          if (G)
            return Hs(G);
          A = !1, y = Eo, M = new wa();
        } else
          M = o ? [] : R;
        e:
          for (; ++g < S; ) {
            var Q = a[g], Y = o ? o(Q) : Q;
            if (Q = u || Q !== 0 ? Q : 0, A && Y === Y) {
              for (var se = M.length; se--; )
                if (M[se] === Y)
                  continue e;
              o && M.push(Y), R.push(Q);
            } else
              y(M, Y, u) || (M !== R && M.push(Y), R.push(Q));
          }
        return R;
      }
      function Hu(a, o) {
        return o = Gn(o, a), a = Hg(a, o), a == null || delete a[Qr(Tr(o))];
      }
      function vg(a, o, u, g) {
        return $o(a, o, u(_a(a, o)), g);
      }
      function ul(a, o, u, g) {
        for (var y = a.length, S = g ? y : -1; (g ? S-- : ++S < y) && o(a[S], S, a); )
          ;
        return u ? Or(a, g ? 0 : S, g ? S + 1 : y) : Or(a, g ? S + 1 : 0, g ? y : S);
      }
      function yg(a, o) {
        var u = a;
        return u instanceof Fe && (u = u.value()), bu(o, function(g, y) {
          return y.func.apply(y.thisArg, qn([g], y.args));
        }, u);
      }
      function Vu(a, o, u) {
        var g = a.length;
        if (g < 2)
          return g ? Wn(a[0]) : [];
        for (var y = -1, S = q(g); ++y < g; )
          for (var A = a[y], R = -1; ++R < g; )
            R != y && (S[y] = xo(S[y] || A, a[R], o, u));
        return Wn(Bt(S, 1), o, u);
      }
      function bg(a, o, u) {
        for (var g = -1, y = a.length, S = o.length, A = {}; ++g < y; ) {
          var R = g < S ? o[g] : r;
          u(A, a[g], R);
        }
        return A;
      }
      function Wu(a) {
        return bt(a) ? a : [];
      }
      function Gu(a) {
        return typeof a == "function" ? a : nr;
      }
      function Gn(a, o) {
        return $e(a) ? a : rd(a, o) ? [a] : Qg(Ge(a));
      }
      var K0 = De;
      function Qn(a, o, u) {
        var g = a.length;
        return u = u === r ? g : u, !o && u >= g ? a : Or(a, o, u);
      }
      var Eg = LO || function(a) {
        return Ft.clearTimeout(a);
      };
      function wg(a, o) {
        if (o)
          return a.slice();
        var u = a.length, g = qh ? qh(u) : new a.constructor(u);
        return a.copy(g), g;
      }
      function Qu(a) {
        var o = new a.constructor(a.byteLength);
        return new Ys(o).set(new Ys(a)), o;
      }
      function Y0(a, o) {
        var u = o ? Qu(a.buffer) : a.buffer;
        return new a.constructor(u, a.byteOffset, a.byteLength);
      }
      function X0(a) {
        var o = new a.constructor(a.source, ah.exec(a));
        return o.lastIndex = a.lastIndex, o;
      }
      function J0(a) {
        return To ? nt(To.call(a)) : {};
      }
      function Sg(a, o) {
        var u = o ? Qu(a.buffer) : a.buffer;
        return new a.constructor(u, a.byteOffset, a.length);
      }
      function _g(a, o) {
        if (a !== o) {
          var u = a !== r, g = a === null, y = a === a, S = ur(a), A = o !== r, R = o === null, M = o === o, G = ur(o);
          if (!R && !G && !S && a > o || S && A && M && !R && !G || g && A && M || !u && M || !y)
            return 1;
          if (!g && !S && !G && a < o || G && u && y && !g && !S || R && u && y || !A && y || !M)
            return -1;
        }
        return 0;
      }
      function Z0(a, o, u) {
        for (var g = -1, y = a.criteria, S = o.criteria, A = y.length, R = u.length; ++g < A; ) {
          var M = _g(y[g], S[g]);
          if (M) {
            if (g >= R)
              return M;
            var G = u[g];
            return M * (G == "desc" ? -1 : 1);
          }
        }
        return a.index - o.index;
      }
      function Og(a, o, u, g) {
        for (var y = -1, S = a.length, A = u.length, R = -1, M = o.length, G = xt(S - A, 0), Q = q(M + G), Y = !g; ++R < M; )
          Q[R] = o[R];
        for (; ++y < A; )
          (Y || y < S) && (Q[u[y]] = a[y]);
        for (; G--; )
          Q[R++] = a[y++];
        return Q;
      }
      function Tg(a, o, u, g) {
        for (var y = -1, S = a.length, A = -1, R = u.length, M = -1, G = o.length, Q = xt(S - R, 0), Y = q(Q + G), se = !g; ++y < Q; )
          Y[y] = a[y];
        for (var de = y; ++M < G; )
          Y[de + M] = o[M];
        for (; ++A < R; )
          (se || y < S) && (Y[de + u[A]] = a[y++]);
        return Y;
      }
      function er(a, o) {
        var u = -1, g = a.length;
        for (o || (o = q(g)); ++u < g; )
          o[u] = a[u];
        return o;
      }
      function Gr(a, o, u, g) {
        var y = !u;
        u || (u = {});
        for (var S = -1, A = o.length; ++S < A; ) {
          var R = o[S], M = g ? g(u[R], a[R], R, u, a) : r;
          M === r && (M = a[R]), y ? fn(u, R, M) : Po(u, R, M);
        }
        return u;
      }
      function eT(a, o) {
        return Gr(a, td(a), o);
      }
      function tT(a, o) {
        return Gr(a, Fg(a), o);
      }
      function dl(a, o) {
        return function(u, g) {
          var y = $e(u) ? oO : _0, S = o ? o() : {};
          return y(u, a, ve(g, 2), S);
        };
      }
      function mi(a) {
        return De(function(o, u) {
          var g = -1, y = u.length, S = y > 1 ? u[y - 1] : r, A = y > 2 ? u[2] : r;
          for (S = a.length > 3 && typeof S == "function" ? (y--, S) : r, A && Yt(u[0], u[1], A) && (S = y < 3 ? r : S, y = 1), o = nt(o); ++g < y; ) {
            var R = u[g];
            R && a(o, R, g, S);
          }
          return o;
        });
      }
      function Pg(a, o) {
        return function(u, g) {
          if (u == null)
            return u;
          if (!tr(u))
            return a(u, g);
          for (var y = u.length, S = o ? y : -1, A = nt(u); (o ? S-- : ++S < y) && g(A[S], S, A) !== !1; )
            ;
          return u;
        };
      }
      function xg(a) {
        return function(o, u, g) {
          for (var y = -1, S = nt(o), A = g(o), R = A.length; R--; ) {
            var M = A[a ? R : ++y];
            if (u(S[M], M, S) === !1)
              break;
          }
          return o;
        };
      }
      function rT(a, o, u) {
        var g = o & _, y = Ro(a);
        function S() {
          var A = this && this !== Ft && this instanceof S ? y : a;
          return A.apply(g ? u : this, arguments);
        }
        return S;
      }
      function Ag(a) {
        return function(o) {
          o = Ge(o);
          var u = ci(o) ? Nr(o) : r, g = u ? u[0] : o.charAt(0), y = u ? Qn(u, 1).join("") : o.slice(1);
          return g[a]() + y;
        };
      }
      function vi(a) {
        return function(o) {
          return bu(Pm(Tm(o).replace(W1, "")), a, "");
        };
      }
      function Ro(a) {
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
          var u = gi(a.prototype), g = a.apply(u, o);
          return pt(g) ? g : u;
        };
      }
      function nT(a, o, u) {
        var g = Ro(a);
        function y() {
          for (var S = arguments.length, A = q(S), R = S, M = yi(y); R--; )
            A[R] = arguments[R];
          var G = S < 3 && A[0] !== M && A[S - 1] !== M ? [] : jn(A, M);
          if (S -= G.length, S < u)
            return Ig(
              a,
              o,
              fl,
              y.placeholder,
              r,
              A,
              G,
              r,
              r,
              u - S
            );
          var Q = this && this !== Ft && this instanceof y ? g : a;
          return sr(Q, this, A);
        }
        return y;
      }
      function Cg(a) {
        return function(o, u, g) {
          var y = nt(o);
          if (!tr(o)) {
            var S = ve(u, 3);
            o = Nt(o), u = function(R) {
              return S(y[R], R, y);
            };
          }
          var A = a(o, u, g);
          return A > -1 ? y[S ? o[A] : A] : r;
        };
      }
      function $g(a) {
        return hn(function(o) {
          var u = o.length, g = u, y = Sr.prototype.thru;
          for (a && o.reverse(); g--; ) {
            var S = o[g];
            if (typeof S != "function")
              throw new wr(l);
            if (y && !A && ml(S) == "wrapper")
              var A = new Sr([], !0);
          }
          for (g = A ? g : u; ++g < u; ) {
            S = o[g];
            var R = ml(S), M = R == "wrapper" ? Zu(S) : r;
            M && nd(M[0]) && M[1] == (P | k | N | $) && !M[4].length && M[9] == 1 ? A = A[ml(M[0])].apply(A, M[3]) : A = S.length == 1 && nd(S) ? A[R]() : A.thru(S);
          }
          return function() {
            var G = arguments, Q = G[0];
            if (A && G.length == 1 && $e(Q))
              return A.plant(Q).value();
            for (var Y = 0, se = u ? o[Y].apply(this, G) : Q; ++Y < u; )
              se = o[Y].call(this, se);
            return se;
          };
        });
      }
      function fl(a, o, u, g, y, S, A, R, M, G) {
        var Q = o & P, Y = o & _, se = o & x, de = o & (k | z), ye = o & I, ke = se ? r : Ro(a);
        function be() {
          for (var Le = arguments.length, ze = q(Le), dr = Le; dr--; )
            ze[dr] = arguments[dr];
          if (de)
            var Xt = yi(be), fr = gO(ze, Xt);
          if (g && (ze = Og(ze, g, y, de)), S && (ze = Tg(ze, S, A, de)), Le -= fr, de && Le < G) {
            var Et = jn(ze, Xt);
            return Ig(
              a,
              o,
              fl,
              be.placeholder,
              u,
              ze,
              Et,
              R,
              M,
              G - Le
            );
          }
          var Dr = Y ? u : this, yn = se ? Dr[a] : a;
          return Le = ze.length, R ? ze = _T(ze, R) : ye && Le > 1 && ze.reverse(), Q && M < Le && (ze.length = M), this && this !== Ft && this instanceof be && (yn = ke || Ro(yn)), yn.apply(Dr, ze);
        }
        return be;
      }
      function Rg(a, o) {
        return function(u, g) {
          return R0(u, a, o(g), {});
        };
      }
      function pl(a, o) {
        return function(u, g) {
          var y;
          if (u === r && g === r)
            return o;
          if (u !== r && (y = u), g !== r) {
            if (y === r)
              return g;
            typeof u == "string" || typeof g == "string" ? (u = cr(u), g = cr(g)) : (u = mg(u), g = mg(g)), y = a(u, g);
          }
          return y;
        };
      }
      function Ku(a) {
        return hn(function(o) {
          return o = ft(o, lr(ve())), De(function(u) {
            var g = this;
            return a(o, function(y) {
              return sr(y, g, u);
            });
          });
        });
      }
      function hl(a, o) {
        o = o === r ? " " : cr(o);
        var u = o.length;
        if (u < 2)
          return u ? qu(o, a) : o;
        var g = qu(o, el(a / ui(o)));
        return ci(o) ? Qn(Nr(g), 0, a).join("") : g.slice(0, a);
      }
      function aT(a, o, u, g) {
        var y = o & _, S = Ro(a);
        function A() {
          for (var R = -1, M = arguments.length, G = -1, Q = g.length, Y = q(Q + M), se = this && this !== Ft && this instanceof A ? S : a; ++G < Q; )
            Y[G] = g[G];
          for (; M--; )
            Y[G++] = arguments[++R];
          return sr(se, y ? u : this, Y);
        }
        return A;
      }
      function Ng(a) {
        return function(o, u, g) {
          return g && typeof g != "number" && Yt(o, u, g) && (u = g = r), o = vn(o), u === r ? (u = o, o = 0) : u = vn(u), g = g === r ? o < u ? 1 : -1 : vn(g), j0(o, u, g, a);
        };
      }
      function gl(a) {
        return function(o, u) {
          return typeof o == "string" && typeof u == "string" || (o = Pr(o), u = Pr(u)), a(o, u);
        };
      }
      function Ig(a, o, u, g, y, S, A, R, M, G) {
        var Q = o & k, Y = Q ? A : r, se = Q ? r : A, de = Q ? S : r, ye = Q ? r : S;
        o |= Q ? N : B, o &= ~(Q ? B : N), o & D || (o &= ~(_ | x));
        var ke = [
          a,
          o,
          y,
          de,
          Y,
          ye,
          se,
          R,
          M,
          G
        ], be = u.apply(r, ke);
        return nd(a) && Vg(be, ke), be.placeholder = g, Wg(be, a, o);
      }
      function Yu(a) {
        var o = Pt[a];
        return function(u, g) {
          if (u = Pr(u), g = g == null ? 0 : qt(Ie(g), 292), g && Wh(u)) {
            var y = (Ge(u) + "e").split("e"), S = o(y[0] + "e" + (+y[1] + g));
            return y = (Ge(S) + "e").split("e"), +(y[0] + "e" + (+y[1] - g));
          }
          return o(u);
        };
      }
      var iT = pi && 1 / Hs(new pi([, -0]))[1] == Te ? function(a) {
        return new pi(a);
      } : yd;
      function kg(a) {
        return function(o) {
          var u = jt(o);
          return u == oe ? Pu(o) : u == Qt ? SO(o) : hO(o, a(o));
        };
      }
      function pn(a, o, u, g, y, S, A, R) {
        var M = o & x;
        if (!M && typeof a != "function")
          throw new wr(l);
        var G = g ? g.length : 0;
        if (G || (o &= ~(N | B), g = y = r), A = A === r ? A : xt(Ie(A), 0), R = R === r ? R : Ie(R), G -= y ? y.length : 0, o & B) {
          var Q = g, Y = y;
          g = y = r;
        }
        var se = M ? r : Zu(a), de = [
          a,
          o,
          u,
          g,
          y,
          Q,
          Y,
          S,
          A,
          R
        ];
        if (se && ET(de, se), a = de[0], o = de[1], u = de[2], g = de[3], y = de[4], R = de[9] = de[9] === r ? M ? 0 : a.length : xt(de[9] - G, 0), !R && o & (k | z) && (o &= ~(k | z)), !o || o == _)
          var ye = rT(a, o, u);
        else
          o == k || o == z ? ye = nT(a, o, R) : (o == N || o == (_ | N)) && !y.length ? ye = aT(a, o, u, g) : ye = fl.apply(r, de);
        var ke = se ? hg : Vg;
        return Wg(ke(ye, de), a, o);
      }
      function Dg(a, o, u, g) {
        return a === r || kr(a, fi[u]) && !Je.call(g, u) ? o : a;
      }
      function Lg(a, o, u, g, y, S) {
        return pt(a) && pt(o) && (S.set(o, a), ll(a, o, r, Lg, S), S.delete(o)), a;
      }
      function oT(a) {
        return ko(a) ? r : a;
      }
      function Mg(a, o, u, g, y, S) {
        var A = u & O, R = a.length, M = o.length;
        if (R != M && !(A && M > R))
          return !1;
        var G = S.get(a), Q = S.get(o);
        if (G && Q)
          return G == o && Q == a;
        var Y = -1, se = !0, de = u & T ? new wa() : r;
        for (S.set(a, o), S.set(o, a); ++Y < R; ) {
          var ye = a[Y], ke = o[Y];
          if (g)
            var be = A ? g(ke, ye, Y, o, a, S) : g(ye, ke, Y, a, o, S);
          if (be !== r) {
            if (be)
              continue;
            se = !1;
            break;
          }
          if (de) {
            if (!Eu(o, function(Le, ze) {
              if (!Eo(de, ze) && (ye === Le || y(ye, Le, u, g, S)))
                return de.push(ze);
            })) {
              se = !1;
              break;
            }
          } else if (!(ye === ke || y(ye, ke, u, g, S))) {
            se = !1;
            break;
          }
        }
        return S.delete(a), S.delete(o), se;
      }
      function sT(a, o, u, g, y, S, A) {
        switch (u) {
          case oi:
            if (a.byteLength != o.byteLength || a.byteOffset != o.byteOffset)
              return !1;
            a = a.buffer, o = o.buffer;
          case bo:
            return !(a.byteLength != o.byteLength || !S(new Ys(a), new Ys(o)));
          case xe:
          case Ae:
          case Zt:
            return kr(+a, +o);
          case ie:
            return a.name == o.name && a.message == o.message;
          case cn:
          case va:
            return a == o + "";
          case oe:
            var R = Pu;
          case Qt:
            var M = g & O;
            if (R || (R = Hs), a.size != o.size && !M)
              return !1;
            var G = A.get(a);
            if (G)
              return G == o;
            g |= T, A.set(a, o);
            var Q = Mg(R(a), R(o), g, y, S, A);
            return A.delete(a), Q;
          case Vr:
            if (To)
              return To.call(a) == To.call(o);
        }
        return !1;
      }
      function lT(a, o, u, g, y, S) {
        var A = u & O, R = Xu(a), M = R.length, G = Xu(o), Q = G.length;
        if (M != Q && !A)
          return !1;
        for (var Y = M; Y--; ) {
          var se = R[Y];
          if (!(A ? se in o : Je.call(o, se)))
            return !1;
        }
        var de = S.get(a), ye = S.get(o);
        if (de && ye)
          return de == o && ye == a;
        var ke = !0;
        S.set(a, o), S.set(o, a);
        for (var be = A; ++Y < M; ) {
          se = R[Y];
          var Le = a[se], ze = o[se];
          if (g)
            var dr = A ? g(ze, Le, se, o, a, S) : g(Le, ze, se, a, o, S);
          if (!(dr === r ? Le === ze || y(Le, ze, u, g, S) : dr)) {
            ke = !1;
            break;
          }
          be || (be = se == "constructor");
        }
        if (ke && !be) {
          var Xt = a.constructor, fr = o.constructor;
          Xt != fr && "constructor" in a && "constructor" in o && !(typeof Xt == "function" && Xt instanceof Xt && typeof fr == "function" && fr instanceof fr) && (ke = !1);
        }
        return S.delete(a), S.delete(o), ke;
      }
      function hn(a) {
        return id(jg(a, r, Jg), a + "");
      }
      function Xu(a) {
        return ng(a, Nt, td);
      }
      function Ju(a) {
        return ng(a, rr, Fg);
      }
      var Zu = rl ? function(a) {
        return rl.get(a);
      } : yd;
      function ml(a) {
        for (var o = a.name + "", u = hi[o], g = Je.call(hi, o) ? u.length : 0; g--; ) {
          var y = u[g], S = y.func;
          if (S == null || S == a)
            return y.name;
        }
        return o;
      }
      function yi(a) {
        var o = Je.call(E, "placeholder") ? E : a;
        return o.placeholder;
      }
      function ve() {
        var a = E.iteratee || md;
        return a = a === md ? og : a, arguments.length ? a(arguments[0], arguments[1]) : a;
      }
      function vl(a, o) {
        var u = a.__data__;
        return mT(o) ? u[typeof o == "string" ? "string" : "hash"] : u.map;
      }
      function ed(a) {
        for (var o = Nt(a), u = o.length; u--; ) {
          var g = o[u], y = a[g];
          o[u] = [g, y, zg(y)];
        }
        return o;
      }
      function Oa(a, o) {
        var u = bO(a, o);
        return ig(u) ? u : r;
      }
      function cT(a) {
        var o = Je.call(a, ba), u = a[ba];
        try {
          a[ba] = r;
          var g = !0;
        } catch {
        }
        var y = Qs.call(a);
        return g && (o ? a[ba] = u : delete a[ba]), y;
      }
      var td = Au ? function(a) {
        return a == null ? [] : (a = nt(a), zn(Au(a), function(o) {
          return Hh.call(a, o);
        }));
      } : bd, Fg = Au ? function(a) {
        for (var o = []; a; )
          qn(o, td(a)), a = Xs(a);
        return o;
      } : bd, jt = Kt;
      (Cu && jt(new Cu(new ArrayBuffer(1))) != oi || So && jt(new So()) != oe || $u && jt($u.resolve()) != ma || pi && jt(new pi()) != Qt || _o && jt(new _o()) != yo) && (jt = function(a) {
        var o = Kt(a), u = o == zt ? a.constructor : r, g = u ? Ta(u) : "";
        if (g)
          switch (g) {
            case VO:
              return oi;
            case WO:
              return oe;
            case GO:
              return ma;
            case QO:
              return Qt;
            case KO:
              return yo;
          }
        return o;
      });
      function uT(a, o, u) {
        for (var g = -1, y = u.length; ++g < y; ) {
          var S = u[g], A = S.size;
          switch (S.type) {
            case "drop":
              a += A;
              break;
            case "dropRight":
              o -= A;
              break;
            case "take":
              o = qt(o, a + A);
              break;
            case "takeRight":
              a = xt(a, o - A);
              break;
          }
        }
        return { start: a, end: o };
      }
      function dT(a) {
        var o = a.match(v1);
        return o ? o[1].split(y1) : [];
      }
      function Bg(a, o, u) {
        o = Gn(o, a);
        for (var g = -1, y = o.length, S = !1; ++g < y; ) {
          var A = Qr(o[g]);
          if (!(S = a != null && u(a, A)))
            break;
          a = a[A];
        }
        return S || ++g != y ? S : (y = a == null ? 0 : a.length, !!y && Ol(y) && gn(A, y) && ($e(a) || Pa(a)));
      }
      function fT(a) {
        var o = a.length, u = new a.constructor(o);
        return o && typeof a[0] == "string" && Je.call(a, "index") && (u.index = a.index, u.input = a.input), u;
      }
      function Ug(a) {
        return typeof a.constructor == "function" && !No(a) ? gi(Xs(a)) : {};
      }
      function pT(a, o, u) {
        var g = a.constructor;
        switch (o) {
          case bo:
            return Qu(a);
          case xe:
          case Ae:
            return new g(+a);
          case oi:
            return Y0(a, u);
          case eu:
          case tu:
          case ru:
          case nu:
          case au:
          case iu:
          case ou:
          case su:
          case lu:
            return Sg(a, u);
          case oe:
            return new g();
          case Zt:
          case va:
            return new g(a);
          case cn:
            return X0(a);
          case Qt:
            return new g();
          case Vr:
            return J0(a);
        }
      }
      function hT(a, o) {
        var u = o.length;
        if (!u)
          return a;
        var g = u - 1;
        return o[g] = (u > 1 ? "& " : "") + o[g], o = o.join(u > 2 ? ", " : " "), a.replace(m1, `{
/* [wrapped with ` + o + `] */
`);
      }
      function gT(a) {
        return $e(a) || Pa(a) || !!(Vh && a && a[Vh]);
      }
      function gn(a, o) {
        var u = typeof a;
        return o = o ?? je, !!o && (u == "number" || u != "symbol" && x1.test(a)) && a > -1 && a % 1 == 0 && a < o;
      }
      function Yt(a, o, u) {
        if (!pt(u))
          return !1;
        var g = typeof o;
        return (g == "number" ? tr(u) && gn(o, u.length) : g == "string" && o in u) ? kr(u[o], a) : !1;
      }
      function rd(a, o) {
        if ($e(a))
          return !1;
        var u = typeof a;
        return u == "number" || u == "symbol" || u == "boolean" || a == null || ur(a) ? !0 : f1.test(a) || !d1.test(a) || o != null && a in nt(o);
      }
      function mT(a) {
        var o = typeof a;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? a !== "__proto__" : a === null;
      }
      function nd(a) {
        var o = ml(a), u = E[o];
        if (typeof u != "function" || !(o in Fe.prototype))
          return !1;
        if (a === u)
          return !0;
        var g = Zu(u);
        return !!g && a === g[0];
      }
      function vT(a) {
        return !!zh && zh in a;
      }
      var yT = Ws ? mn : Ed;
      function No(a) {
        var o = a && a.constructor, u = typeof o == "function" && o.prototype || fi;
        return a === u;
      }
      function zg(a) {
        return a === a && !pt(a);
      }
      function qg(a, o) {
        return function(u) {
          return u == null ? !1 : u[a] === o && (o !== r || a in nt(u));
        };
      }
      function bT(a) {
        var o = Sl(a, function(g) {
          return u.size === p && u.clear(), g;
        }), u = o.cache;
        return o;
      }
      function ET(a, o) {
        var u = a[1], g = o[1], y = u | g, S = y < (_ | x | P), A = g == P && u == k || g == P && u == $ && a[7].length <= o[8] || g == (P | $) && o[7].length <= o[8] && u == k;
        if (!(S || A))
          return a;
        g & _ && (a[2] = o[2], y |= u & _ ? 0 : D);
        var R = o[3];
        if (R) {
          var M = a[3];
          a[3] = M ? Og(M, R, o[4]) : R, a[4] = M ? jn(a[3], h) : o[4];
        }
        return R = o[5], R && (M = a[5], a[5] = M ? Tg(M, R, o[6]) : R, a[6] = M ? jn(a[5], h) : o[6]), R = o[7], R && (a[7] = R), g & P && (a[8] = a[8] == null ? o[8] : qt(a[8], o[8])), a[9] == null && (a[9] = o[9]), a[0] = o[0], a[1] = y, a;
      }
      function wT(a) {
        var o = [];
        if (a != null)
          for (var u in nt(a))
            o.push(u);
        return o;
      }
      function ST(a) {
        return Qs.call(a);
      }
      function jg(a, o, u) {
        return o = xt(o === r ? a.length - 1 : o, 0), function() {
          for (var g = arguments, y = -1, S = xt(g.length - o, 0), A = q(S); ++y < S; )
            A[y] = g[o + y];
          y = -1;
          for (var R = q(o + 1); ++y < o; )
            R[y] = g[y];
          return R[o] = u(A), sr(a, this, R);
        };
      }
      function Hg(a, o) {
        return o.length < 2 ? a : _a(a, Or(o, 0, -1));
      }
      function _T(a, o) {
        for (var u = a.length, g = qt(o.length, u), y = er(a); g--; ) {
          var S = o[g];
          a[g] = gn(S, u) ? y[S] : r;
        }
        return a;
      }
      function ad(a, o) {
        if (!(o === "constructor" && typeof a[o] == "function") && o != "__proto__")
          return a[o];
      }
      var Vg = Gg(hg), Io = FO || function(a, o) {
        return Ft.setTimeout(a, o);
      }, id = Gg(W0);
      function Wg(a, o, u) {
        var g = o + "";
        return id(a, hT(g, OT(dT(g), u)));
      }
      function Gg(a) {
        var o = 0, u = 0;
        return function() {
          var g = qO(), y = V - (g - u);
          if (u = g, y > 0) {
            if (++o >= X)
              return arguments[0];
          } else
            o = 0;
          return a.apply(r, arguments);
        };
      }
      function yl(a, o) {
        var u = -1, g = a.length, y = g - 1;
        for (o = o === r ? g : o; ++u < o; ) {
          var S = zu(u, y), A = a[S];
          a[S] = a[u], a[u] = A;
        }
        return a.length = o, a;
      }
      var Qg = bT(function(a) {
        var o = [];
        return a.charCodeAt(0) === 46 && o.push(""), a.replace(p1, function(u, g, y, S) {
          o.push(y ? S.replace(w1, "$1") : g || u);
        }), o;
      });
      function Qr(a) {
        if (typeof a == "string" || ur(a))
          return a;
        var o = a + "";
        return o == "0" && 1 / a == -Te ? "-0" : o;
      }
      function Ta(a) {
        if (a != null) {
          try {
            return Gs.call(a);
          } catch {
          }
          try {
            return a + "";
          } catch {
          }
        }
        return "";
      }
      function OT(a, o) {
        return Er(pe, function(u) {
          var g = "_." + u[0];
          o & u[1] && !qs(a, g) && a.push(g);
        }), a.sort();
      }
      function Kg(a) {
        if (a instanceof Fe)
          return a.clone();
        var o = new Sr(a.__wrapped__, a.__chain__);
        return o.__actions__ = er(a.__actions__), o.__index__ = a.__index__, o.__values__ = a.__values__, o;
      }
      function TT(a, o, u) {
        (u ? Yt(a, o, u) : o === r) ? o = 1 : o = xt(Ie(o), 0);
        var g = a == null ? 0 : a.length;
        if (!g || o < 1)
          return [];
        for (var y = 0, S = 0, A = q(el(g / o)); y < g; )
          A[S++] = Or(a, y, y += o);
        return A;
      }
      function PT(a) {
        for (var o = -1, u = a == null ? 0 : a.length, g = 0, y = []; ++o < u; ) {
          var S = a[o];
          S && (y[g++] = S);
        }
        return y;
      }
      function xT() {
        var a = arguments.length;
        if (!a)
          return [];
        for (var o = q(a - 1), u = arguments[0], g = a; g--; )
          o[g - 1] = arguments[g];
        return qn($e(u) ? er(u) : [u], Bt(o, 1));
      }
      var AT = De(function(a, o) {
        return bt(a) ? xo(a, Bt(o, 1, bt, !0)) : [];
      }), CT = De(function(a, o) {
        var u = Tr(o);
        return bt(u) && (u = r), bt(a) ? xo(a, Bt(o, 1, bt, !0), ve(u, 2)) : [];
      }), $T = De(function(a, o) {
        var u = Tr(o);
        return bt(u) && (u = r), bt(a) ? xo(a, Bt(o, 1, bt, !0), r, u) : [];
      });
      function RT(a, o, u) {
        var g = a == null ? 0 : a.length;
        return g ? (o = u || o === r ? 1 : Ie(o), Or(a, o < 0 ? 0 : o, g)) : [];
      }
      function NT(a, o, u) {
        var g = a == null ? 0 : a.length;
        return g ? (o = u || o === r ? 1 : Ie(o), o = g - o, Or(a, 0, o < 0 ? 0 : o)) : [];
      }
      function IT(a, o) {
        return a && a.length ? ul(a, ve(o, 3), !0, !0) : [];
      }
      function kT(a, o) {
        return a && a.length ? ul(a, ve(o, 3), !0) : [];
      }
      function DT(a, o, u, g) {
        var y = a == null ? 0 : a.length;
        return y ? (u && typeof u != "number" && Yt(a, o, u) && (u = 0, g = y), x0(a, o, u, g)) : [];
      }
      function Yg(a, o, u) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var y = u == null ? 0 : Ie(u);
        return y < 0 && (y = xt(g + y, 0)), js(a, ve(o, 3), y);
      }
      function Xg(a, o, u) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var y = g - 1;
        return u !== r && (y = Ie(u), y = u < 0 ? xt(g + y, 0) : qt(y, g - 1)), js(a, ve(o, 3), y, !0);
      }
      function Jg(a) {
        var o = a == null ? 0 : a.length;
        return o ? Bt(a, 1) : [];
      }
      function LT(a) {
        var o = a == null ? 0 : a.length;
        return o ? Bt(a, Te) : [];
      }
      function MT(a, o) {
        var u = a == null ? 0 : a.length;
        return u ? (o = o === r ? 1 : Ie(o), Bt(a, o)) : [];
      }
      function FT(a) {
        for (var o = -1, u = a == null ? 0 : a.length, g = {}; ++o < u; ) {
          var y = a[o];
          g[y[0]] = y[1];
        }
        return g;
      }
      function Zg(a) {
        return a && a.length ? a[0] : r;
      }
      function BT(a, o, u) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var y = u == null ? 0 : Ie(u);
        return y < 0 && (y = xt(g + y, 0)), li(a, o, y);
      }
      function UT(a) {
        var o = a == null ? 0 : a.length;
        return o ? Or(a, 0, -1) : [];
      }
      var zT = De(function(a) {
        var o = ft(a, Wu);
        return o.length && o[0] === a[0] ? Lu(o) : [];
      }), qT = De(function(a) {
        var o = Tr(a), u = ft(a, Wu);
        return o === Tr(u) ? o = r : u.pop(), u.length && u[0] === a[0] ? Lu(u, ve(o, 2)) : [];
      }), jT = De(function(a) {
        var o = Tr(a), u = ft(a, Wu);
        return o = typeof o == "function" ? o : r, o && u.pop(), u.length && u[0] === a[0] ? Lu(u, r, o) : [];
      });
      function HT(a, o) {
        return a == null ? "" : UO.call(a, o);
      }
      function Tr(a) {
        var o = a == null ? 0 : a.length;
        return o ? a[o - 1] : r;
      }
      function VT(a, o, u) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var y = g;
        return u !== r && (y = Ie(u), y = y < 0 ? xt(g + y, 0) : qt(y, g - 1)), o === o ? OO(a, o, y) : js(a, Ih, y, !0);
      }
      function WT(a, o) {
        return a && a.length ? ug(a, Ie(o)) : r;
      }
      var GT = De(em);
      function em(a, o) {
        return a && a.length && o && o.length ? Uu(a, o) : a;
      }
      function QT(a, o, u) {
        return a && a.length && o && o.length ? Uu(a, o, ve(u, 2)) : a;
      }
      function KT(a, o, u) {
        return a && a.length && o && o.length ? Uu(a, o, r, u) : a;
      }
      var YT = hn(function(a, o) {
        var u = a == null ? 0 : a.length, g = Nu(a, o);
        return pg(a, ft(o, function(y) {
          return gn(y, u) ? +y : y;
        }).sort(_g)), g;
      });
      function XT(a, o) {
        var u = [];
        if (!(a && a.length))
          return u;
        var g = -1, y = [], S = a.length;
        for (o = ve(o, 3); ++g < S; ) {
          var A = a[g];
          o(A, g, a) && (u.push(A), y.push(g));
        }
        return pg(a, y), u;
      }
      function od(a) {
        return a == null ? a : HO.call(a);
      }
      function JT(a, o, u) {
        var g = a == null ? 0 : a.length;
        return g ? (u && typeof u != "number" && Yt(a, o, u) ? (o = 0, u = g) : (o = o == null ? 0 : Ie(o), u = u === r ? g : Ie(u)), Or(a, o, u)) : [];
      }
      function ZT(a, o) {
        return cl(a, o);
      }
      function eP(a, o, u) {
        return ju(a, o, ve(u, 2));
      }
      function tP(a, o) {
        var u = a == null ? 0 : a.length;
        if (u) {
          var g = cl(a, o);
          if (g < u && kr(a[g], o))
            return g;
        }
        return -1;
      }
      function rP(a, o) {
        return cl(a, o, !0);
      }
      function nP(a, o, u) {
        return ju(a, o, ve(u, 2), !0);
      }
      function aP(a, o) {
        var u = a == null ? 0 : a.length;
        if (u) {
          var g = cl(a, o, !0) - 1;
          if (kr(a[g], o))
            return g;
        }
        return -1;
      }
      function iP(a) {
        return a && a.length ? gg(a) : [];
      }
      function oP(a, o) {
        return a && a.length ? gg(a, ve(o, 2)) : [];
      }
      function sP(a) {
        var o = a == null ? 0 : a.length;
        return o ? Or(a, 1, o) : [];
      }
      function lP(a, o, u) {
        return a && a.length ? (o = u || o === r ? 1 : Ie(o), Or(a, 0, o < 0 ? 0 : o)) : [];
      }
      function cP(a, o, u) {
        var g = a == null ? 0 : a.length;
        return g ? (o = u || o === r ? 1 : Ie(o), o = g - o, Or(a, o < 0 ? 0 : o, g)) : [];
      }
      function uP(a, o) {
        return a && a.length ? ul(a, ve(o, 3), !1, !0) : [];
      }
      function dP(a, o) {
        return a && a.length ? ul(a, ve(o, 3)) : [];
      }
      var fP = De(function(a) {
        return Wn(Bt(a, 1, bt, !0));
      }), pP = De(function(a) {
        var o = Tr(a);
        return bt(o) && (o = r), Wn(Bt(a, 1, bt, !0), ve(o, 2));
      }), hP = De(function(a) {
        var o = Tr(a);
        return o = typeof o == "function" ? o : r, Wn(Bt(a, 1, bt, !0), r, o);
      });
      function gP(a) {
        return a && a.length ? Wn(a) : [];
      }
      function mP(a, o) {
        return a && a.length ? Wn(a, ve(o, 2)) : [];
      }
      function vP(a, o) {
        return o = typeof o == "function" ? o : r, a && a.length ? Wn(a, r, o) : [];
      }
      function sd(a) {
        if (!(a && a.length))
          return [];
        var o = 0;
        return a = zn(a, function(u) {
          if (bt(u))
            return o = xt(u.length, o), !0;
        }), Ou(o, function(u) {
          return ft(a, wu(u));
        });
      }
      function tm(a, o) {
        if (!(a && a.length))
          return [];
        var u = sd(a);
        return o == null ? u : ft(u, function(g) {
          return sr(o, r, g);
        });
      }
      var yP = De(function(a, o) {
        return bt(a) ? xo(a, o) : [];
      }), bP = De(function(a) {
        return Vu(zn(a, bt));
      }), EP = De(function(a) {
        var o = Tr(a);
        return bt(o) && (o = r), Vu(zn(a, bt), ve(o, 2));
      }), wP = De(function(a) {
        var o = Tr(a);
        return o = typeof o == "function" ? o : r, Vu(zn(a, bt), r, o);
      }), SP = De(sd);
      function _P(a, o) {
        return bg(a || [], o || [], Po);
      }
      function OP(a, o) {
        return bg(a || [], o || [], $o);
      }
      var TP = De(function(a) {
        var o = a.length, u = o > 1 ? a[o - 1] : r;
        return u = typeof u == "function" ? (a.pop(), u) : r, tm(a, u);
      });
      function rm(a) {
        var o = E(a);
        return o.__chain__ = !0, o;
      }
      function PP(a, o) {
        return o(a), a;
      }
      function bl(a, o) {
        return o(a);
      }
      var xP = hn(function(a) {
        var o = a.length, u = o ? a[0] : 0, g = this.__wrapped__, y = function(S) {
          return Nu(S, a);
        };
        return o > 1 || this.__actions__.length || !(g instanceof Fe) || !gn(u) ? this.thru(y) : (g = g.slice(u, +u + (o ? 1 : 0)), g.__actions__.push({
          func: bl,
          args: [y],
          thisArg: r
        }), new Sr(g, this.__chain__).thru(function(S) {
          return o && !S.length && S.push(r), S;
        }));
      });
      function AP() {
        return rm(this);
      }
      function CP() {
        return new Sr(this.value(), this.__chain__);
      }
      function $P() {
        this.__values__ === r && (this.__values__ = mm(this.value()));
        var a = this.__index__ >= this.__values__.length, o = a ? r : this.__values__[this.__index__++];
        return { done: a, value: o };
      }
      function RP() {
        return this;
      }
      function NP(a) {
        for (var o, u = this; u instanceof al; ) {
          var g = Kg(u);
          g.__index__ = 0, g.__values__ = r, o ? y.__wrapped__ = g : o = g;
          var y = g;
          u = u.__wrapped__;
        }
        return y.__wrapped__ = a, o;
      }
      function IP() {
        var a = this.__wrapped__;
        if (a instanceof Fe) {
          var o = a;
          return this.__actions__.length && (o = new Fe(this)), o = o.reverse(), o.__actions__.push({
            func: bl,
            args: [od],
            thisArg: r
          }), new Sr(o, this.__chain__);
        }
        return this.thru(od);
      }
      function kP() {
        return yg(this.__wrapped__, this.__actions__);
      }
      var DP = dl(function(a, o, u) {
        Je.call(a, u) ? ++a[u] : fn(a, u, 1);
      });
      function LP(a, o, u) {
        var g = $e(a) ? Rh : P0;
        return u && Yt(a, o, u) && (o = r), g(a, ve(o, 3));
      }
      function MP(a, o) {
        var u = $e(a) ? zn : tg;
        return u(a, ve(o, 3));
      }
      var FP = Cg(Yg), BP = Cg(Xg);
      function UP(a, o) {
        return Bt(El(a, o), 1);
      }
      function zP(a, o) {
        return Bt(El(a, o), Te);
      }
      function qP(a, o, u) {
        return u = u === r ? 1 : Ie(u), Bt(El(a, o), u);
      }
      function nm(a, o) {
        var u = $e(a) ? Er : Vn;
        return u(a, ve(o, 3));
      }
      function am(a, o) {
        var u = $e(a) ? sO : eg;
        return u(a, ve(o, 3));
      }
      var jP = dl(function(a, o, u) {
        Je.call(a, u) ? a[u].push(o) : fn(a, u, [o]);
      });
      function HP(a, o, u, g) {
        a = tr(a) ? a : Ei(a), u = u && !g ? Ie(u) : 0;
        var y = a.length;
        return u < 0 && (u = xt(y + u, 0)), Tl(a) ? u <= y && a.indexOf(o, u) > -1 : !!y && li(a, o, u) > -1;
      }
      var VP = De(function(a, o, u) {
        var g = -1, y = typeof o == "function", S = tr(a) ? q(a.length) : [];
        return Vn(a, function(A) {
          S[++g] = y ? sr(o, A, u) : Ao(A, o, u);
        }), S;
      }), WP = dl(function(a, o, u) {
        fn(a, u, o);
      });
      function El(a, o) {
        var u = $e(a) ? ft : sg;
        return u(a, ve(o, 3));
      }
      function GP(a, o, u, g) {
        return a == null ? [] : ($e(o) || (o = o == null ? [] : [o]), u = g ? r : u, $e(u) || (u = u == null ? [] : [u]), dg(a, o, u));
      }
      var QP = dl(function(a, o, u) {
        a[u ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function KP(a, o, u) {
        var g = $e(a) ? bu : Dh, y = arguments.length < 3;
        return g(a, ve(o, 4), u, y, Vn);
      }
      function YP(a, o, u) {
        var g = $e(a) ? lO : Dh, y = arguments.length < 3;
        return g(a, ve(o, 4), u, y, eg);
      }
      function XP(a, o) {
        var u = $e(a) ? zn : tg;
        return u(a, _l(ve(o, 3)));
      }
      function JP(a) {
        var o = $e(a) ? Yh : H0;
        return o(a);
      }
      function ZP(a, o, u) {
        (u ? Yt(a, o, u) : o === r) ? o = 1 : o = Ie(o);
        var g = $e(a) ? w0 : V0;
        return g(a, o);
      }
      function ex(a) {
        var o = $e(a) ? S0 : G0;
        return o(a);
      }
      function tx(a) {
        if (a == null)
          return 0;
        if (tr(a))
          return Tl(a) ? ui(a) : a.length;
        var o = jt(a);
        return o == oe || o == Qt ? a.size : Fu(a).length;
      }
      function rx(a, o, u) {
        var g = $e(a) ? Eu : Q0;
        return u && Yt(a, o, u) && (o = r), g(a, ve(o, 3));
      }
      var nx = De(function(a, o) {
        if (a == null)
          return [];
        var u = o.length;
        return u > 1 && Yt(a, o[0], o[1]) ? o = [] : u > 2 && Yt(o[0], o[1], o[2]) && (o = [o[0]]), dg(a, Bt(o, 1), []);
      }), wl = MO || function() {
        return Ft.Date.now();
      };
      function ax(a, o) {
        if (typeof o != "function")
          throw new wr(l);
        return a = Ie(a), function() {
          if (--a < 1)
            return o.apply(this, arguments);
        };
      }
      function im(a, o, u) {
        return o = u ? r : o, o = a && o == null ? a.length : o, pn(a, P, r, r, r, r, o);
      }
      function om(a, o) {
        var u;
        if (typeof o != "function")
          throw new wr(l);
        return a = Ie(a), function() {
          return --a > 0 && (u = o.apply(this, arguments)), a <= 1 && (o = r), u;
        };
      }
      var ld = De(function(a, o, u) {
        var g = _;
        if (u.length) {
          var y = jn(u, yi(ld));
          g |= N;
        }
        return pn(a, g, o, u, y);
      }), sm = De(function(a, o, u) {
        var g = _ | x;
        if (u.length) {
          var y = jn(u, yi(sm));
          g |= N;
        }
        return pn(o, g, a, u, y);
      });
      function lm(a, o, u) {
        o = u ? r : o;
        var g = pn(a, k, r, r, r, r, r, o);
        return g.placeholder = lm.placeholder, g;
      }
      function cm(a, o, u) {
        o = u ? r : o;
        var g = pn(a, z, r, r, r, r, r, o);
        return g.placeholder = cm.placeholder, g;
      }
      function um(a, o, u) {
        var g, y, S, A, R, M, G = 0, Q = !1, Y = !1, se = !0;
        if (typeof a != "function")
          throw new wr(l);
        o = Pr(o) || 0, pt(u) && (Q = !!u.leading, Y = "maxWait" in u, S = Y ? xt(Pr(u.maxWait) || 0, o) : S, se = "trailing" in u ? !!u.trailing : se);
        function de(Et) {
          var Dr = g, yn = y;
          return g = y = r, G = Et, A = a.apply(yn, Dr), A;
        }
        function ye(Et) {
          return G = Et, R = Io(Le, o), Q ? de(Et) : A;
        }
        function ke(Et) {
          var Dr = Et - M, yn = Et - G, Cm = o - Dr;
          return Y ? qt(Cm, S - yn) : Cm;
        }
        function be(Et) {
          var Dr = Et - M, yn = Et - G;
          return M === r || Dr >= o || Dr < 0 || Y && yn >= S;
        }
        function Le() {
          var Et = wl();
          if (be(Et))
            return ze(Et);
          R = Io(Le, ke(Et));
        }
        function ze(Et) {
          return R = r, se && g ? de(Et) : (g = y = r, A);
        }
        function dr() {
          R !== r && Eg(R), G = 0, g = M = y = R = r;
        }
        function Xt() {
          return R === r ? A : ze(wl());
        }
        function fr() {
          var Et = wl(), Dr = be(Et);
          if (g = arguments, y = this, M = Et, Dr) {
            if (R === r)
              return ye(M);
            if (Y)
              return Eg(R), R = Io(Le, o), de(M);
          }
          return R === r && (R = Io(Le, o)), A;
        }
        return fr.cancel = dr, fr.flush = Xt, fr;
      }
      var ix = De(function(a, o) {
        return Zh(a, 1, o);
      }), ox = De(function(a, o, u) {
        return Zh(a, Pr(o) || 0, u);
      });
      function sx(a) {
        return pn(a, I);
      }
      function Sl(a, o) {
        if (typeof a != "function" || o != null && typeof o != "function")
          throw new wr(l);
        var u = function() {
          var g = arguments, y = o ? o.apply(this, g) : g[0], S = u.cache;
          if (S.has(y))
            return S.get(y);
          var A = a.apply(this, g);
          return u.cache = S.set(y, A) || S, A;
        };
        return u.cache = new (Sl.Cache || dn)(), u;
      }
      Sl.Cache = dn;
      function _l(a) {
        if (typeof a != "function")
          throw new wr(l);
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
      function lx(a) {
        return om(2, a);
      }
      var cx = K0(function(a, o) {
        o = o.length == 1 && $e(o[0]) ? ft(o[0], lr(ve())) : ft(Bt(o, 1), lr(ve()));
        var u = o.length;
        return De(function(g) {
          for (var y = -1, S = qt(g.length, u); ++y < S; )
            g[y] = o[y].call(this, g[y]);
          return sr(a, this, g);
        });
      }), cd = De(function(a, o) {
        var u = jn(o, yi(cd));
        return pn(a, N, r, o, u);
      }), dm = De(function(a, o) {
        var u = jn(o, yi(dm));
        return pn(a, B, r, o, u);
      }), ux = hn(function(a, o) {
        return pn(a, $, r, r, r, o);
      });
      function dx(a, o) {
        if (typeof a != "function")
          throw new wr(l);
        return o = o === r ? o : Ie(o), De(a, o);
      }
      function fx(a, o) {
        if (typeof a != "function")
          throw new wr(l);
        return o = o == null ? 0 : xt(Ie(o), 0), De(function(u) {
          var g = u[o], y = Qn(u, 0, o);
          return g && qn(y, g), sr(a, this, y);
        });
      }
      function px(a, o, u) {
        var g = !0, y = !0;
        if (typeof a != "function")
          throw new wr(l);
        return pt(u) && (g = "leading" in u ? !!u.leading : g, y = "trailing" in u ? !!u.trailing : y), um(a, o, {
          leading: g,
          maxWait: o,
          trailing: y
        });
      }
      function hx(a) {
        return im(a, 1);
      }
      function gx(a, o) {
        return cd(Gu(o), a);
      }
      function mx() {
        if (!arguments.length)
          return [];
        var a = arguments[0];
        return $e(a) ? a : [a];
      }
      function vx(a) {
        return _r(a, w);
      }
      function yx(a, o) {
        return o = typeof o == "function" ? o : r, _r(a, w, o);
      }
      function bx(a) {
        return _r(a, m | w);
      }
      function Ex(a, o) {
        return o = typeof o == "function" ? o : r, _r(a, m | w, o);
      }
      function wx(a, o) {
        return o == null || Jh(a, o, Nt(o));
      }
      function kr(a, o) {
        return a === o || a !== a && o !== o;
      }
      var Sx = gl(Du), _x = gl(function(a, o) {
        return a >= o;
      }), Pa = ag(function() {
        return arguments;
      }()) ? ag : function(a) {
        return mt(a) && Je.call(a, "callee") && !Hh.call(a, "callee");
      }, $e = q.isArray, Ox = Th ? lr(Th) : N0;
      function tr(a) {
        return a != null && Ol(a.length) && !mn(a);
      }
      function bt(a) {
        return mt(a) && tr(a);
      }
      function Tx(a) {
        return a === !0 || a === !1 || mt(a) && Kt(a) == xe;
      }
      var Kn = BO || Ed, Px = Ph ? lr(Ph) : I0;
      function xx(a) {
        return mt(a) && a.nodeType === 1 && !ko(a);
      }
      function Ax(a) {
        if (a == null)
          return !0;
        if (tr(a) && ($e(a) || typeof a == "string" || typeof a.splice == "function" || Kn(a) || bi(a) || Pa(a)))
          return !a.length;
        var o = jt(a);
        if (o == oe || o == Qt)
          return !a.size;
        if (No(a))
          return !Fu(a).length;
        for (var u in a)
          if (Je.call(a, u))
            return !1;
        return !0;
      }
      function Cx(a, o) {
        return Co(a, o);
      }
      function $x(a, o, u) {
        u = typeof u == "function" ? u : r;
        var g = u ? u(a, o) : r;
        return g === r ? Co(a, o, r, u) : !!g;
      }
      function ud(a) {
        if (!mt(a))
          return !1;
        var o = Kt(a);
        return o == ie || o == Ne || typeof a.message == "string" && typeof a.name == "string" && !ko(a);
      }
      function Rx(a) {
        return typeof a == "number" && Wh(a);
      }
      function mn(a) {
        if (!pt(a))
          return !1;
        var o = Kt(a);
        return o == re || o == gt || o == Pe || o == Fs;
      }
      function fm(a) {
        return typeof a == "number" && a == Ie(a);
      }
      function Ol(a) {
        return typeof a == "number" && a > -1 && a % 1 == 0 && a <= je;
      }
      function pt(a) {
        var o = typeof a;
        return a != null && (o == "object" || o == "function");
      }
      function mt(a) {
        return a != null && typeof a == "object";
      }
      var pm = xh ? lr(xh) : D0;
      function Nx(a, o) {
        return a === o || Mu(a, o, ed(o));
      }
      function Ix(a, o, u) {
        return u = typeof u == "function" ? u : r, Mu(a, o, ed(o), u);
      }
      function kx(a) {
        return hm(a) && a != +a;
      }
      function Dx(a) {
        if (yT(a))
          throw new Ce(s);
        return ig(a);
      }
      function Lx(a) {
        return a === null;
      }
      function Mx(a) {
        return a == null;
      }
      function hm(a) {
        return typeof a == "number" || mt(a) && Kt(a) == Zt;
      }
      function ko(a) {
        if (!mt(a) || Kt(a) != zt)
          return !1;
        var o = Xs(a);
        if (o === null)
          return !0;
        var u = Je.call(o, "constructor") && o.constructor;
        return typeof u == "function" && u instanceof u && Gs.call(u) == IO;
      }
      var dd = Ah ? lr(Ah) : L0;
      function Fx(a) {
        return fm(a) && a >= -je && a <= je;
      }
      var gm = Ch ? lr(Ch) : M0;
      function Tl(a) {
        return typeof a == "string" || !$e(a) && mt(a) && Kt(a) == va;
      }
      function ur(a) {
        return typeof a == "symbol" || mt(a) && Kt(a) == Vr;
      }
      var bi = $h ? lr($h) : F0;
      function Bx(a) {
        return a === r;
      }
      function Ux(a) {
        return mt(a) && jt(a) == yo;
      }
      function zx(a) {
        return mt(a) && Kt(a) == n1;
      }
      var qx = gl(Bu), jx = gl(function(a, o) {
        return a <= o;
      });
      function mm(a) {
        if (!a)
          return [];
        if (tr(a))
          return Tl(a) ? Nr(a) : er(a);
        if (wo && a[wo])
          return wO(a[wo]());
        var o = jt(a), u = o == oe ? Pu : o == Qt ? Hs : Ei;
        return u(a);
      }
      function vn(a) {
        if (!a)
          return a === 0 ? a : 0;
        if (a = Pr(a), a === Te || a === -Te) {
          var o = a < 0 ? -1 : 1;
          return o * Ze;
        }
        return a === a ? a : 0;
      }
      function Ie(a) {
        var o = vn(a), u = o % 1;
        return o === o ? u ? o - u : o : 0;
      }
      function vm(a) {
        return a ? Sa(Ie(a), 0, J) : 0;
      }
      function Pr(a) {
        if (typeof a == "number")
          return a;
        if (ur(a))
          return K;
        if (pt(a)) {
          var o = typeof a.valueOf == "function" ? a.valueOf() : a;
          a = pt(o) ? o + "" : o;
        }
        if (typeof a != "string")
          return a === 0 ? a : +a;
        a = Lh(a);
        var u = O1.test(a);
        return u || P1.test(a) ? aO(a.slice(2), u ? 2 : 8) : _1.test(a) ? K : +a;
      }
      function ym(a) {
        return Gr(a, rr(a));
      }
      function Hx(a) {
        return a ? Sa(Ie(a), -je, je) : a === 0 ? a : 0;
      }
      function Ge(a) {
        return a == null ? "" : cr(a);
      }
      var Vx = mi(function(a, o) {
        if (No(o) || tr(o)) {
          Gr(o, Nt(o), a);
          return;
        }
        for (var u in o)
          Je.call(o, u) && Po(a, u, o[u]);
      }), bm = mi(function(a, o) {
        Gr(o, rr(o), a);
      }), Pl = mi(function(a, o, u, g) {
        Gr(o, rr(o), a, g);
      }), Wx = mi(function(a, o, u, g) {
        Gr(o, Nt(o), a, g);
      }), Gx = hn(Nu);
      function Qx(a, o) {
        var u = gi(a);
        return o == null ? u : Xh(u, o);
      }
      var Kx = De(function(a, o) {
        a = nt(a);
        var u = -1, g = o.length, y = g > 2 ? o[2] : r;
        for (y && Yt(o[0], o[1], y) && (g = 1); ++u < g; )
          for (var S = o[u], A = rr(S), R = -1, M = A.length; ++R < M; ) {
            var G = A[R], Q = a[G];
            (Q === r || kr(Q, fi[G]) && !Je.call(a, G)) && (a[G] = S[G]);
          }
        return a;
      }), Yx = De(function(a) {
        return a.push(r, Lg), sr(Em, r, a);
      });
      function Xx(a, o) {
        return Nh(a, ve(o, 3), Wr);
      }
      function Jx(a, o) {
        return Nh(a, ve(o, 3), ku);
      }
      function Zx(a, o) {
        return a == null ? a : Iu(a, ve(o, 3), rr);
      }
      function eA(a, o) {
        return a == null ? a : rg(a, ve(o, 3), rr);
      }
      function tA(a, o) {
        return a && Wr(a, ve(o, 3));
      }
      function rA(a, o) {
        return a && ku(a, ve(o, 3));
      }
      function nA(a) {
        return a == null ? [] : sl(a, Nt(a));
      }
      function aA(a) {
        return a == null ? [] : sl(a, rr(a));
      }
      function fd(a, o, u) {
        var g = a == null ? r : _a(a, o);
        return g === r ? u : g;
      }
      function iA(a, o) {
        return a != null && Bg(a, o, A0);
      }
      function pd(a, o) {
        return a != null && Bg(a, o, C0);
      }
      var oA = Rg(function(a, o, u) {
        o != null && typeof o.toString != "function" && (o = Qs.call(o)), a[o] = u;
      }, gd(nr)), sA = Rg(function(a, o, u) {
        o != null && typeof o.toString != "function" && (o = Qs.call(o)), Je.call(a, o) ? a[o].push(u) : a[o] = [u];
      }, ve), lA = De(Ao);
      function Nt(a) {
        return tr(a) ? Kh(a) : Fu(a);
      }
      function rr(a) {
        return tr(a) ? Kh(a, !0) : B0(a);
      }
      function cA(a, o) {
        var u = {};
        return o = ve(o, 3), Wr(a, function(g, y, S) {
          fn(u, o(g, y, S), g);
        }), u;
      }
      function uA(a, o) {
        var u = {};
        return o = ve(o, 3), Wr(a, function(g, y, S) {
          fn(u, y, o(g, y, S));
        }), u;
      }
      var dA = mi(function(a, o, u) {
        ll(a, o, u);
      }), Em = mi(function(a, o, u, g) {
        ll(a, o, u, g);
      }), fA = hn(function(a, o) {
        var u = {};
        if (a == null)
          return u;
        var g = !1;
        o = ft(o, function(S) {
          return S = Gn(S, a), g || (g = S.length > 1), S;
        }), Gr(a, Ju(a), u), g && (u = _r(u, m | v | w, oT));
        for (var y = o.length; y--; )
          Hu(u, o[y]);
        return u;
      });
      function pA(a, o) {
        return wm(a, _l(ve(o)));
      }
      var hA = hn(function(a, o) {
        return a == null ? {} : z0(a, o);
      });
      function wm(a, o) {
        if (a == null)
          return {};
        var u = ft(Ju(a), function(g) {
          return [g];
        });
        return o = ve(o), fg(a, u, function(g, y) {
          return o(g, y[0]);
        });
      }
      function gA(a, o, u) {
        o = Gn(o, a);
        var g = -1, y = o.length;
        for (y || (y = 1, a = r); ++g < y; ) {
          var S = a == null ? r : a[Qr(o[g])];
          S === r && (g = y, S = u), a = mn(S) ? S.call(a) : S;
        }
        return a;
      }
      function mA(a, o, u) {
        return a == null ? a : $o(a, o, u);
      }
      function vA(a, o, u, g) {
        return g = typeof g == "function" ? g : r, a == null ? a : $o(a, o, u, g);
      }
      var Sm = kg(Nt), _m = kg(rr);
      function yA(a, o, u) {
        var g = $e(a), y = g || Kn(a) || bi(a);
        if (o = ve(o, 4), u == null) {
          var S = a && a.constructor;
          y ? u = g ? new S() : [] : pt(a) ? u = mn(S) ? gi(Xs(a)) : {} : u = {};
        }
        return (y ? Er : Wr)(a, function(A, R, M) {
          return o(u, A, R, M);
        }), u;
      }
      function bA(a, o) {
        return a == null ? !0 : Hu(a, o);
      }
      function EA(a, o, u) {
        return a == null ? a : vg(a, o, Gu(u));
      }
      function wA(a, o, u, g) {
        return g = typeof g == "function" ? g : r, a == null ? a : vg(a, o, Gu(u), g);
      }
      function Ei(a) {
        return a == null ? [] : Tu(a, Nt(a));
      }
      function SA(a) {
        return a == null ? [] : Tu(a, rr(a));
      }
      function _A(a, o, u) {
        return u === r && (u = o, o = r), u !== r && (u = Pr(u), u = u === u ? u : 0), o !== r && (o = Pr(o), o = o === o ? o : 0), Sa(Pr(a), o, u);
      }
      function OA(a, o, u) {
        return o = vn(o), u === r ? (u = o, o = 0) : u = vn(u), a = Pr(a), $0(a, o, u);
      }
      function TA(a, o, u) {
        if (u && typeof u != "boolean" && Yt(a, o, u) && (o = u = r), u === r && (typeof o == "boolean" ? (u = o, o = r) : typeof a == "boolean" && (u = a, a = r)), a === r && o === r ? (a = 0, o = 1) : (a = vn(a), o === r ? (o = a, a = 0) : o = vn(o)), a > o) {
          var g = a;
          a = o, o = g;
        }
        if (u || a % 1 || o % 1) {
          var y = Gh();
          return qt(a + y * (o - a + nO("1e-" + ((y + "").length - 1))), o);
        }
        return zu(a, o);
      }
      var PA = vi(function(a, o, u) {
        return o = o.toLowerCase(), a + (u ? Om(o) : o);
      });
      function Om(a) {
        return hd(Ge(a).toLowerCase());
      }
      function Tm(a) {
        return a = Ge(a), a && a.replace(A1, mO).replace(G1, "");
      }
      function xA(a, o, u) {
        a = Ge(a), o = cr(o);
        var g = a.length;
        u = u === r ? g : Sa(Ie(u), 0, g);
        var y = u;
        return u -= o.length, u >= 0 && a.slice(u, y) == o;
      }
      function AA(a) {
        return a = Ge(a), a && l1.test(a) ? a.replace(rh, vO) : a;
      }
      function CA(a) {
        return a = Ge(a), a && h1.test(a) ? a.replace(cu, "\\$&") : a;
      }
      var $A = vi(function(a, o, u) {
        return a + (u ? "-" : "") + o.toLowerCase();
      }), RA = vi(function(a, o, u) {
        return a + (u ? " " : "") + o.toLowerCase();
      }), NA = Ag("toLowerCase");
      function IA(a, o, u) {
        a = Ge(a), o = Ie(o);
        var g = o ? ui(a) : 0;
        if (!o || g >= o)
          return a;
        var y = (o - g) / 2;
        return hl(tl(y), u) + a + hl(el(y), u);
      }
      function kA(a, o, u) {
        a = Ge(a), o = Ie(o);
        var g = o ? ui(a) : 0;
        return o && g < o ? a + hl(o - g, u) : a;
      }
      function DA(a, o, u) {
        a = Ge(a), o = Ie(o);
        var g = o ? ui(a) : 0;
        return o && g < o ? hl(o - g, u) + a : a;
      }
      function LA(a, o, u) {
        return u || o == null ? o = 0 : o && (o = +o), jO(Ge(a).replace(uu, ""), o || 0);
      }
      function MA(a, o, u) {
        return (u ? Yt(a, o, u) : o === r) ? o = 1 : o = Ie(o), qu(Ge(a), o);
      }
      function FA() {
        var a = arguments, o = Ge(a[0]);
        return a.length < 3 ? o : o.replace(a[1], a[2]);
      }
      var BA = vi(function(a, o, u) {
        return a + (u ? "_" : "") + o.toLowerCase();
      });
      function UA(a, o, u) {
        return u && typeof u != "number" && Yt(a, o, u) && (o = u = r), u = u === r ? J : u >>> 0, u ? (a = Ge(a), a && (typeof o == "string" || o != null && !dd(o)) && (o = cr(o), !o && ci(a)) ? Qn(Nr(a), 0, u) : a.split(o, u)) : [];
      }
      var zA = vi(function(a, o, u) {
        return a + (u ? " " : "") + hd(o);
      });
      function qA(a, o, u) {
        return a = Ge(a), u = u == null ? 0 : Sa(Ie(u), 0, a.length), o = cr(o), a.slice(u, u + o.length) == o;
      }
      function jA(a, o, u) {
        var g = E.templateSettings;
        u && Yt(a, o, u) && (o = r), a = Ge(a), o = Pl({}, o, g, Dg);
        var y = Pl({}, o.imports, g.imports, Dg), S = Nt(y), A = Tu(y, S), R, M, G = 0, Q = o.interpolate || Bs, Y = "__p += '", se = xu(
          (o.escape || Bs).source + "|" + Q.source + "|" + (Q === nh ? S1 : Bs).source + "|" + (o.evaluate || Bs).source + "|$",
          "g"
        ), de = "//# sourceURL=" + (Je.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++J1 + "]") + `
`;
        a.replace(se, function(be, Le, ze, dr, Xt, fr) {
          return ze || (ze = dr), Y += a.slice(G, fr).replace(C1, yO), Le && (R = !0, Y += `' +
__e(` + Le + `) +
'`), Xt && (M = !0, Y += `';
` + Xt + `;
__p += '`), ze && (Y += `' +
((__t = (` + ze + `)) == null ? '' : __t) +
'`), G = fr + be.length, be;
        }), Y += `';
`;
        var ye = Je.call(o, "variable") && o.variable;
        if (!ye)
          Y = `with (obj) {
` + Y + `
}
`;
        else if (E1.test(ye))
          throw new Ce(c);
        Y = (M ? Y.replace(a1, "") : Y).replace(i1, "$1").replace(o1, "$1;"), Y = "function(" + (ye || "obj") + `) {
` + (ye ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (M ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Y + `return __p
}`;
        var ke = xm(function() {
          return We(S, de + "return " + Y).apply(r, A);
        });
        if (ke.source = Y, ud(ke))
          throw ke;
        return ke;
      }
      function HA(a) {
        return Ge(a).toLowerCase();
      }
      function VA(a) {
        return Ge(a).toUpperCase();
      }
      function WA(a, o, u) {
        if (a = Ge(a), a && (u || o === r))
          return Lh(a);
        if (!a || !(o = cr(o)))
          return a;
        var g = Nr(a), y = Nr(o), S = Mh(g, y), A = Fh(g, y) + 1;
        return Qn(g, S, A).join("");
      }
      function GA(a, o, u) {
        if (a = Ge(a), a && (u || o === r))
          return a.slice(0, Uh(a) + 1);
        if (!a || !(o = cr(o)))
          return a;
        var g = Nr(a), y = Fh(g, Nr(o)) + 1;
        return Qn(g, 0, y).join("");
      }
      function QA(a, o, u) {
        if (a = Ge(a), a && (u || o === r))
          return a.replace(uu, "");
        if (!a || !(o = cr(o)))
          return a;
        var g = Nr(a), y = Mh(g, Nr(o));
        return Qn(g, y).join("");
      }
      function KA(a, o) {
        var u = U, g = W;
        if (pt(o)) {
          var y = "separator" in o ? o.separator : y;
          u = "length" in o ? Ie(o.length) : u, g = "omission" in o ? cr(o.omission) : g;
        }
        a = Ge(a);
        var S = a.length;
        if (ci(a)) {
          var A = Nr(a);
          S = A.length;
        }
        if (u >= S)
          return a;
        var R = u - ui(g);
        if (R < 1)
          return g;
        var M = A ? Qn(A, 0, R).join("") : a.slice(0, R);
        if (y === r)
          return M + g;
        if (A && (R += M.length - R), dd(y)) {
          if (a.slice(R).search(y)) {
            var G, Q = M;
            for (y.global || (y = xu(y.source, Ge(ah.exec(y)) + "g")), y.lastIndex = 0; G = y.exec(Q); )
              var Y = G.index;
            M = M.slice(0, Y === r ? R : Y);
          }
        } else if (a.indexOf(cr(y), R) != R) {
          var se = M.lastIndexOf(y);
          se > -1 && (M = M.slice(0, se));
        }
        return M + g;
      }
      function YA(a) {
        return a = Ge(a), a && s1.test(a) ? a.replace(th, TO) : a;
      }
      var XA = vi(function(a, o, u) {
        return a + (u ? " " : "") + o.toUpperCase();
      }), hd = Ag("toUpperCase");
      function Pm(a, o, u) {
        return a = Ge(a), o = u ? r : o, o === r ? EO(a) ? AO(a) : dO(a) : a.match(o) || [];
      }
      var xm = De(function(a, o) {
        try {
          return sr(a, r, o);
        } catch (u) {
          return ud(u) ? u : new Ce(u);
        }
      }), JA = hn(function(a, o) {
        return Er(o, function(u) {
          u = Qr(u), fn(a, u, ld(a[u], a));
        }), a;
      });
      function ZA(a) {
        var o = a == null ? 0 : a.length, u = ve();
        return a = o ? ft(a, function(g) {
          if (typeof g[1] != "function")
            throw new wr(l);
          return [u(g[0]), g[1]];
        }) : [], De(function(g) {
          for (var y = -1; ++y < o; ) {
            var S = a[y];
            if (sr(S[0], this, g))
              return sr(S[1], this, g);
          }
        });
      }
      function eC(a) {
        return T0(_r(a, m));
      }
      function gd(a) {
        return function() {
          return a;
        };
      }
      function tC(a, o) {
        return a == null || a !== a ? o : a;
      }
      var rC = $g(), nC = $g(!0);
      function nr(a) {
        return a;
      }
      function md(a) {
        return og(typeof a == "function" ? a : _r(a, m));
      }
      function aC(a) {
        return lg(_r(a, m));
      }
      function iC(a, o) {
        return cg(a, _r(o, m));
      }
      var oC = De(function(a, o) {
        return function(u) {
          return Ao(u, a, o);
        };
      }), sC = De(function(a, o) {
        return function(u) {
          return Ao(a, u, o);
        };
      });
      function vd(a, o, u) {
        var g = Nt(o), y = sl(o, g);
        u == null && !(pt(o) && (y.length || !g.length)) && (u = o, o = a, a = this, y = sl(o, Nt(o)));
        var S = !(pt(u) && "chain" in u) || !!u.chain, A = mn(a);
        return Er(y, function(R) {
          var M = o[R];
          a[R] = M, A && (a.prototype[R] = function() {
            var G = this.__chain__;
            if (S || G) {
              var Q = a(this.__wrapped__), Y = Q.__actions__ = er(this.__actions__);
              return Y.push({ func: M, args: arguments, thisArg: a }), Q.__chain__ = G, Q;
            }
            return M.apply(a, qn([this.value()], arguments));
          });
        }), a;
      }
      function lC() {
        return Ft._ === this && (Ft._ = kO), this;
      }
      function yd() {
      }
      function cC(a) {
        return a = Ie(a), De(function(o) {
          return ug(o, a);
        });
      }
      var uC = Ku(ft), dC = Ku(Rh), fC = Ku(Eu);
      function Am(a) {
        return rd(a) ? wu(Qr(a)) : q0(a);
      }
      function pC(a) {
        return function(o) {
          return a == null ? r : _a(a, o);
        };
      }
      var hC = Ng(), gC = Ng(!0);
      function bd() {
        return [];
      }
      function Ed() {
        return !1;
      }
      function mC() {
        return {};
      }
      function vC() {
        return "";
      }
      function yC() {
        return !0;
      }
      function bC(a, o) {
        if (a = Ie(a), a < 1 || a > je)
          return [];
        var u = J, g = qt(a, J);
        o = ve(o), a -= J;
        for (var y = Ou(g, o); ++u < a; )
          o(u);
        return y;
      }
      function EC(a) {
        return $e(a) ? ft(a, Qr) : ur(a) ? [a] : er(Qg(Ge(a)));
      }
      function wC(a) {
        var o = ++NO;
        return Ge(a) + o;
      }
      var SC = pl(function(a, o) {
        return a + o;
      }, 0), _C = Yu("ceil"), OC = pl(function(a, o) {
        return a / o;
      }, 1), TC = Yu("floor");
      function PC(a) {
        return a && a.length ? ol(a, nr, Du) : r;
      }
      function xC(a, o) {
        return a && a.length ? ol(a, ve(o, 2), Du) : r;
      }
      function AC(a) {
        return kh(a, nr);
      }
      function CC(a, o) {
        return kh(a, ve(o, 2));
      }
      function $C(a) {
        return a && a.length ? ol(a, nr, Bu) : r;
      }
      function RC(a, o) {
        return a && a.length ? ol(a, ve(o, 2), Bu) : r;
      }
      var NC = pl(function(a, o) {
        return a * o;
      }, 1), IC = Yu("round"), kC = pl(function(a, o) {
        return a - o;
      }, 0);
      function DC(a) {
        return a && a.length ? _u(a, nr) : 0;
      }
      function LC(a, o) {
        return a && a.length ? _u(a, ve(o, 2)) : 0;
      }
      return E.after = ax, E.ary = im, E.assign = Vx, E.assignIn = bm, E.assignInWith = Pl, E.assignWith = Wx, E.at = Gx, E.before = om, E.bind = ld, E.bindAll = JA, E.bindKey = sm, E.castArray = mx, E.chain = rm, E.chunk = TT, E.compact = PT, E.concat = xT, E.cond = ZA, E.conforms = eC, E.constant = gd, E.countBy = DP, E.create = Qx, E.curry = lm, E.curryRight = cm, E.debounce = um, E.defaults = Kx, E.defaultsDeep = Yx, E.defer = ix, E.delay = ox, E.difference = AT, E.differenceBy = CT, E.differenceWith = $T, E.drop = RT, E.dropRight = NT, E.dropRightWhile = IT, E.dropWhile = kT, E.fill = DT, E.filter = MP, E.flatMap = UP, E.flatMapDeep = zP, E.flatMapDepth = qP, E.flatten = Jg, E.flattenDeep = LT, E.flattenDepth = MT, E.flip = sx, E.flow = rC, E.flowRight = nC, E.fromPairs = FT, E.functions = nA, E.functionsIn = aA, E.groupBy = jP, E.initial = UT, E.intersection = zT, E.intersectionBy = qT, E.intersectionWith = jT, E.invert = oA, E.invertBy = sA, E.invokeMap = VP, E.iteratee = md, E.keyBy = WP, E.keys = Nt, E.keysIn = rr, E.map = El, E.mapKeys = cA, E.mapValues = uA, E.matches = aC, E.matchesProperty = iC, E.memoize = Sl, E.merge = dA, E.mergeWith = Em, E.method = oC, E.methodOf = sC, E.mixin = vd, E.negate = _l, E.nthArg = cC, E.omit = fA, E.omitBy = pA, E.once = lx, E.orderBy = GP, E.over = uC, E.overArgs = cx, E.overEvery = dC, E.overSome = fC, E.partial = cd, E.partialRight = dm, E.partition = QP, E.pick = hA, E.pickBy = wm, E.property = Am, E.propertyOf = pC, E.pull = GT, E.pullAll = em, E.pullAllBy = QT, E.pullAllWith = KT, E.pullAt = YT, E.range = hC, E.rangeRight = gC, E.rearg = ux, E.reject = XP, E.remove = XT, E.rest = dx, E.reverse = od, E.sampleSize = ZP, E.set = mA, E.setWith = vA, E.shuffle = ex, E.slice = JT, E.sortBy = nx, E.sortedUniq = iP, E.sortedUniqBy = oP, E.split = UA, E.spread = fx, E.tail = sP, E.take = lP, E.takeRight = cP, E.takeRightWhile = uP, E.takeWhile = dP, E.tap = PP, E.throttle = px, E.thru = bl, E.toArray = mm, E.toPairs = Sm, E.toPairsIn = _m, E.toPath = EC, E.toPlainObject = ym, E.transform = yA, E.unary = hx, E.union = fP, E.unionBy = pP, E.unionWith = hP, E.uniq = gP, E.uniqBy = mP, E.uniqWith = vP, E.unset = bA, E.unzip = sd, E.unzipWith = tm, E.update = EA, E.updateWith = wA, E.values = Ei, E.valuesIn = SA, E.without = yP, E.words = Pm, E.wrap = gx, E.xor = bP, E.xorBy = EP, E.xorWith = wP, E.zip = SP, E.zipObject = _P, E.zipObjectDeep = OP, E.zipWith = TP, E.entries = Sm, E.entriesIn = _m, E.extend = bm, E.extendWith = Pl, vd(E, E), E.add = SC, E.attempt = xm, E.camelCase = PA, E.capitalize = Om, E.ceil = _C, E.clamp = _A, E.clone = vx, E.cloneDeep = bx, E.cloneDeepWith = Ex, E.cloneWith = yx, E.conformsTo = wx, E.deburr = Tm, E.defaultTo = tC, E.divide = OC, E.endsWith = xA, E.eq = kr, E.escape = AA, E.escapeRegExp = CA, E.every = LP, E.find = FP, E.findIndex = Yg, E.findKey = Xx, E.findLast = BP, E.findLastIndex = Xg, E.findLastKey = Jx, E.floor = TC, E.forEach = nm, E.forEachRight = am, E.forIn = Zx, E.forInRight = eA, E.forOwn = tA, E.forOwnRight = rA, E.get = fd, E.gt = Sx, E.gte = _x, E.has = iA, E.hasIn = pd, E.head = Zg, E.identity = nr, E.includes = HP, E.indexOf = BT, E.inRange = OA, E.invoke = lA, E.isArguments = Pa, E.isArray = $e, E.isArrayBuffer = Ox, E.isArrayLike = tr, E.isArrayLikeObject = bt, E.isBoolean = Tx, E.isBuffer = Kn, E.isDate = Px, E.isElement = xx, E.isEmpty = Ax, E.isEqual = Cx, E.isEqualWith = $x, E.isError = ud, E.isFinite = Rx, E.isFunction = mn, E.isInteger = fm, E.isLength = Ol, E.isMap = pm, E.isMatch = Nx, E.isMatchWith = Ix, E.isNaN = kx, E.isNative = Dx, E.isNil = Mx, E.isNull = Lx, E.isNumber = hm, E.isObject = pt, E.isObjectLike = mt, E.isPlainObject = ko, E.isRegExp = dd, E.isSafeInteger = Fx, E.isSet = gm, E.isString = Tl, E.isSymbol = ur, E.isTypedArray = bi, E.isUndefined = Bx, E.isWeakMap = Ux, E.isWeakSet = zx, E.join = HT, E.kebabCase = $A, E.last = Tr, E.lastIndexOf = VT, E.lowerCase = RA, E.lowerFirst = NA, E.lt = qx, E.lte = jx, E.max = PC, E.maxBy = xC, E.mean = AC, E.meanBy = CC, E.min = $C, E.minBy = RC, E.stubArray = bd, E.stubFalse = Ed, E.stubObject = mC, E.stubString = vC, E.stubTrue = yC, E.multiply = NC, E.nth = WT, E.noConflict = lC, E.noop = yd, E.now = wl, E.pad = IA, E.padEnd = kA, E.padStart = DA, E.parseInt = LA, E.random = TA, E.reduce = KP, E.reduceRight = YP, E.repeat = MA, E.replace = FA, E.result = gA, E.round = IC, E.runInContext = L, E.sample = JP, E.size = tx, E.snakeCase = BA, E.some = rx, E.sortedIndex = ZT, E.sortedIndexBy = eP, E.sortedIndexOf = tP, E.sortedLastIndex = rP, E.sortedLastIndexBy = nP, E.sortedLastIndexOf = aP, E.startCase = zA, E.startsWith = qA, E.subtract = kC, E.sum = DC, E.sumBy = LC, E.template = jA, E.times = bC, E.toFinite = vn, E.toInteger = Ie, E.toLength = vm, E.toLower = HA, E.toNumber = Pr, E.toSafeInteger = Hx, E.toString = Ge, E.toUpper = VA, E.trim = WA, E.trimEnd = GA, E.trimStart = QA, E.truncate = KA, E.unescape = YA, E.uniqueId = wC, E.upperCase = XA, E.upperFirst = hd, E.each = nm, E.eachRight = am, E.first = Zg, vd(E, function() {
        var a = {};
        return Wr(E, function(o, u) {
          Je.call(E.prototype, u) || (a[u] = o);
        }), a;
      }(), { chain: !1 }), E.VERSION = n, Er(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(a) {
        E[a].placeholder = E;
      }), Er(["drop", "take"], function(a, o) {
        Fe.prototype[a] = function(u) {
          u = u === r ? 1 : xt(Ie(u), 0);
          var g = this.__filtered__ && !o ? new Fe(this) : this.clone();
          return g.__filtered__ ? g.__takeCount__ = qt(u, g.__takeCount__) : g.__views__.push({
            size: qt(u, J),
            type: a + (g.__dir__ < 0 ? "Right" : "")
          }), g;
        }, Fe.prototype[a + "Right"] = function(u) {
          return this.reverse()[a](u).reverse();
        };
      }), Er(["filter", "map", "takeWhile"], function(a, o) {
        var u = o + 1, g = u == ce || u == Oe;
        Fe.prototype[a] = function(y) {
          var S = this.clone();
          return S.__iteratees__.push({
            iteratee: ve(y, 3),
            type: u
          }), S.__filtered__ = S.__filtered__ || g, S;
        };
      }), Er(["head", "last"], function(a, o) {
        var u = "take" + (o ? "Right" : "");
        Fe.prototype[a] = function() {
          return this[u](1).value()[0];
        };
      }), Er(["initial", "tail"], function(a, o) {
        var u = "drop" + (o ? "" : "Right");
        Fe.prototype[a] = function() {
          return this.__filtered__ ? new Fe(this) : this[u](1);
        };
      }), Fe.prototype.compact = function() {
        return this.filter(nr);
      }, Fe.prototype.find = function(a) {
        return this.filter(a).head();
      }, Fe.prototype.findLast = function(a) {
        return this.reverse().find(a);
      }, Fe.prototype.invokeMap = De(function(a, o) {
        return typeof a == "function" ? new Fe(this) : this.map(function(u) {
          return Ao(u, a, o);
        });
      }), Fe.prototype.reject = function(a) {
        return this.filter(_l(ve(a)));
      }, Fe.prototype.slice = function(a, o) {
        a = Ie(a);
        var u = this;
        return u.__filtered__ && (a > 0 || o < 0) ? new Fe(u) : (a < 0 ? u = u.takeRight(-a) : a && (u = u.drop(a)), o !== r && (o = Ie(o), u = o < 0 ? u.dropRight(-o) : u.take(o - a)), u);
      }, Fe.prototype.takeRightWhile = function(a) {
        return this.reverse().takeWhile(a).reverse();
      }, Fe.prototype.toArray = function() {
        return this.take(J);
      }, Wr(Fe.prototype, function(a, o) {
        var u = /^(?:filter|find|map|reject)|While$/.test(o), g = /^(?:head|last)$/.test(o), y = E[g ? "take" + (o == "last" ? "Right" : "") : o], S = g || /^find/.test(o);
        y && (E.prototype[o] = function() {
          var A = this.__wrapped__, R = g ? [1] : arguments, M = A instanceof Fe, G = R[0], Q = M || $e(A), Y = function(Le) {
            var ze = y.apply(E, qn([Le], R));
            return g && se ? ze[0] : ze;
          };
          Q && u && typeof G == "function" && G.length != 1 && (M = Q = !1);
          var se = this.__chain__, de = !!this.__actions__.length, ye = S && !se, ke = M && !de;
          if (!S && Q) {
            A = ke ? A : new Fe(this);
            var be = a.apply(A, R);
            return be.__actions__.push({ func: bl, args: [Y], thisArg: r }), new Sr(be, se);
          }
          return ye && ke ? a.apply(this, R) : (be = this.thru(Y), ye ? g ? be.value()[0] : be.value() : be);
        });
      }), Er(["pop", "push", "shift", "sort", "splice", "unshift"], function(a) {
        var o = Vs[a], u = /^(?:push|sort|unshift)$/.test(a) ? "tap" : "thru", g = /^(?:pop|shift)$/.test(a);
        E.prototype[a] = function() {
          var y = arguments;
          if (g && !this.__chain__) {
            var S = this.value();
            return o.apply($e(S) ? S : [], y);
          }
          return this[u](function(A) {
            return o.apply($e(A) ? A : [], y);
          });
        };
      }), Wr(Fe.prototype, function(a, o) {
        var u = E[o];
        if (u) {
          var g = u.name + "";
          Je.call(hi, g) || (hi[g] = []), hi[g].push({ name: o, func: u });
        }
      }), hi[fl(r, x).name] = [{
        name: "wrapper",
        func: r
      }], Fe.prototype.clone = YO, Fe.prototype.reverse = XO, Fe.prototype.value = JO, E.prototype.at = xP, E.prototype.chain = AP, E.prototype.commit = CP, E.prototype.next = $P, E.prototype.plant = NP, E.prototype.reverse = IP, E.prototype.toJSON = E.prototype.valueOf = E.prototype.value = kP, E.prototype.first = E.prototype.head, wo && (E.prototype[wo] = RP), E;
    }, di = CO();
    ya ? ((ya.exports = di)._ = di, mu._ = di) : Ft._ = di;
  }).call(Lr);
})(fc, fc.exports);
var jK = fc.exports;
const HK = /* @__PURE__ */ Rt(jK);
function Wp() {
}
Wp.prototype = new Error();
class Sb {
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
      filters: c,
      hiddenParams: f
    } = t;
    let p = {};
    r !== null && (p.q = r), n !== null && (p.sort = n, i !== null && (p.sort = i === "desc" ? `-${n}` : n)), s > 0 && (p.page = s), l > 0 && (p.size = l), sn(f) || uc(p, this._addFilters(f));
    const h = this._addFilters(c);
    return uc(p, h), go.stringify(p, {
      arrayFormat: "repeat"
    });
  }
}
class VK {
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
function kl(e, t) {
  return e.indexOf(t) === 0 && (e.length === t.length || e.indexOf(t + "&") === 0);
}
function ff(e) {
  return go.stringify({
    q: e
  });
}
function WK(e) {
  return go.parse(e).q;
}
function qS(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = qS(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function _b(e, t) {
  const r = ff(e), n = t.map((l) => ff(l));
  let i = !1;
  const s = n.filter((l) => {
    const c = kl(l, r), f = kl(r, l);
    return c && !i && (i = !0), !c && !f;
  });
  if (!i)
    s.push(r);
  else if (e.length === 3) {
    const c = qS(e), f = ff(c), p = s.some((h) => {
      const m = kl(h, f), v = kl(f, h);
      return m || v;
    });
    (sn(s) || !p) && s.push(f);
  }
  return s.map((l) => WK(l));
}
const jS = (e, t) => {
  if (sn(e))
    return;
  if (!pw(eG(e)))
    return _b(e, t);
  let r = t;
  for (const n of e)
    r = _b(n, r);
  return r;
}, HS = (e, t, r) => {
  let n = LG(t, r);
  return sn(n.filters) || (n.filters = jS(n.filters, e.filters)), n;
}, pc = {
  queryString: "",
  suggestions: [],
  sortBy: null,
  sortOrder: null,
  page: -1,
  size: -1,
  filters: [],
  hiddenParams: [],
  layout: null
}, VS = Object.keys(pc), GK = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, QK = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class KK {
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
      filters: c,
      hiddenParams: f
    } = t;
    let p = {};
    r !== null && (p.q = r), n !== null && (p.sort = n, i !== null && (p.sort = i === "desc" ? `-${n}` : n)), s > 0 && (p.page = s), l > 0 && (p.size = l), sn(f) || uc(p, this._addFilters(f));
    const h = this._addFilters(c);
    return uc(p, h), go.stringify(p, {
      arrayFormat: "repeat"
    });
  }
}
class WS {
  constructor(t) {
    this.axiosConfig = jo(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = jl.CancelToken;
  }
  validateAxiosConfig() {
    if (!Fj(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = jo(t, "interceptors.request", void 0), this.responseInterceptor = jo(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: KK,
      InvenioRequestSerializer: Sb
    };
    return typeof t == "string" ? r[t] : t || Sb;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), i = jo(t, "invenio.responseSerializer", VK);
    this.requestSerializer = new n(), this.responseSerializer = new i();
  }
  initAxios() {
    const t = {
      paramsSerializer: this.requestSerializer.serialize,
      ...this.axiosConfig
    };
    this.http = jl.create(t), this.addInterceptors();
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
      const n = HS(t, r.extras, VS);
      return sn(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw jl.isCancel(r) ? new Wp() : r;
    }
  }
}
class YK {
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
          return U5(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const i = pw(n) ? n : [n], s = ":", l = t.urlFilterSeparator, c = `[^\\${s}\\${l}]*`, f = `${c}\\${s}${c}`, p = `${f}(\\${l}${f})*`, h = new RegExp(`^${p}$`);
          return i.every((m) => String(m).match(h));
        }
        default:
          return !1;
      }
    };
  }
}
const XK = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, Ob = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class JK {
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
    const r = go.parse(t, {
      ignoreQueryPrefix: !0
    }), n = {};
    return Object.entries(r).forEach((i) => {
      const s = i[0], l = i[1];
      n[s] = this._convertValue(s, l);
    }), n;
  }
}
class ZK {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (this._filterListToString = (r) => {
      const n = r.length === 3 ? this.urlFilterSeparator.concat(this._filterListToString(r[2])) : "";
      return `${r[0]}:${r[1]}${n}`;
    }, this._mapQueryStateToUrlParams = (r) => {
      const n = {};
      Object.keys(r).filter((s) => s in this.urlParamsMapping).filter((s) => (s === "page" || s === "size") && r[s] <= 0 || s === "hiddenParams" ? !1 : r[s] !== null).forEach((s) => {
        const l = this.urlParamsMapping[s];
        s === "filters" ? n[l] = r[s].map((c) => this._filterListToString(c)) : n[l] = r[s];
      });
      const i = (s, l) => {
        const c = "q";
        return s === c ? -1 : l === c ? 1 : s.localeCompare(l);
      };
      return go.stringify(n, {
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
      const l = r.slice(0, s), c = i ? n : r.length, f = r.slice(s + 1, c);
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
      const i = Ri(n);
      return Object.keys(r).forEach((s) => {
        i[s] = r[s];
      }), i;
    }, this.urlParamsMapping = hF(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !x5(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !k5(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new YK(), this.urlParser = t.urlParser || new JK(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), i = this._mergeParamsIntoState(n, t), s = this._mapQueryStateToUrlParams(i);
    return Ob(s), i;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      XK(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    Ob(r);
  }
}
const e9 = "SET_QUERY_COMPONENT_INITIAL_STATE", GS = "SET_QUERY_STRING", Gp = "SET_QUERY_SORTING", Qp = "SET_QUERY_SORT_BY", Kp = "SET_QUERY_SORT_ORDER", Ms = "SET_QUERY_STATE", QS = "SET_QUERY_PAGINATION_PAGE", KS = "SET_QUERY_PAGINATION_SIZE", YS = "SET_QUERY_FILTERS", XS = "SET_QUERY_SUGGESTIONS", JS = "SET_SUGGESTION_STRING", ZS = "CLEAR_QUERY_SUGGESTIONS", e_ = "RESULTS_LOADING", t_ = "RESULTS_FETCH_SUCCESS", r_ = "RESULTS_FETCH_ERROR", Yf = "RESULTS_UPDATE_LAYOUT", n_ = "RESET_QUERY", t9 = (e) => (t) => {
  e && t(Hr({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, a_ = (e) => (t) => {
  t({
    type: Ms,
    payload: e
  }), t(Hr());
}, i_ = (e) => (t) => {
  t({
    type: GS,
    payload: e
  }), t(Hr());
}, r9 = (e, t) => (r) => {
  r({
    type: Gp,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(Hr());
}, n9 = (e) => (t) => {
  t({
    type: Qp,
    payload: e
  }), t(Hr());
}, a9 = (e) => (t) => {
  t({
    type: Kp,
    payload: e
  }), t(Hr());
}, i9 = (e) => (t) => {
  t({
    type: QS,
    payload: e
  }), t(Hr());
}, o9 = (e) => (t) => {
  t({
    type: KS,
    payload: e
  }), t(Hr());
}, Yp = (e) => (t) => {
  t({
    type: YS,
    payload: e
  }), t(Hr());
}, s9 = (e) => async (t, r, n) => {
  const i = n.urlHandlerApi;
  if (i) {
    await t({
      type: Yf,
      payload: e
    });
    const s = r().query;
    i.set(s);
  } else
    t({
      type: Yf,
      payload: e
    });
}, l9 = () => (e, t, r) => {
  e({
    type: n_,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(Hr());
}, c9 = (e, t, r, n) => {
  const i = t.urlHandlerApi;
  i && (r ? i.replace(e) : n && i.set(e));
}, u9 = (e, t, r, n) => {
  const i = r().query;
  t({
    type: Ms,
    payload: {
      ...i,
      ...e.newQueryState
    }
  });
  const s = Ri(r().query), l = n.urlHandlerApi;
  return l && l.replace(s), delete e.newStateQuery, e;
}, d9 = (e, t, r, n) => {
  function i(c, f, p, h) {
    c.queryString === "" ? (c.sortBy = p.defaultSortingOnEmptyQueryString.sortBy, c.sortOrder = p.defaultSortingOnEmptyQueryString.sortOrder) : (c.sortBy = f.initialSortBy, c.sortOrder = f.initialSortOrder), h({
      type: Ms,
      payload: c
    });
  }
  function s(c, f, p, h) {
    f.hasUserChangedSorting || i(c, f, p, h);
  }
  !sn(r.defaultSortingOnEmptyQueryString) && s(e, t, r, n);
}, Hr = function() {
  let {
    shouldUpdateUrlQueryString: e = !0,
    shouldReplaceUrlQueryString: t = !1
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return async (r, n, i) => {
    const s = n().app;
    let l = Ri(n().query);
    d9(l, s, i, r), l = Ri(n().query), c9(l, i, t, e), r({
      type: e_
    });
    try {
      let f = await i.searchApi.search(l);
      "newQueryState" in f && (f = u9(Ri(f), r, n, i)), r({
        type: t_,
        payload: {
          aggregations: f.aggregations,
          hits: f.hits,
          total: f.total
        }
      });
    } catch (c) {
      if (c instanceof Wp) {
        console.debug(c);
        return;
      } else
        console.error(c), r({
          type: r_,
          payload: {
            error: c
          }
        });
    }
  };
}, f9 = (e) => (t) => {
  t({
    type: JS,
    payload: e
  }), t(p9());
}, p9 = () => async (e, t, r) => {
  const n = Ri(t().query), i = r.suggestionApi;
  try {
    const s = await i.search(n);
    e({
      type: XS,
      payload: {
        suggestions: s.suggestions
      }
    });
  } catch (s) {
    console.error("Could not load suggestions due to: " + s);
  }
}, h9 = () => (e) => {
  e({
    type: ZS,
    payload: {
      suggestions: []
    }
  });
}, g9 = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: Ms,
      payload: n
    }), e(Hr({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, st = /* @__PURE__ */ b.createContext({}), m9 = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
    case Gp:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Qp:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Kp:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    default:
      return e;
  }
}, v9 = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case GS:
      return {
        ...e,
        queryString: t.payload,
        page: 1
      };
    case Gp:
      return {
        ...e,
        sortBy: t.payload.sortBy,
        sortOrder: t.payload.sortOrder,
        _sortUserChanged: !0,
        page: 1
      };
    case Qp:
      return {
        ...e,
        sortBy: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case Kp:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case QS:
      return {
        ...e,
        page: t.payload
      };
    case KS:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case YS:
      return {
        ...e,
        page: 1,
        filters: jS(t.payload, e.filters)
      };
    case XS:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case ZS:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case JS:
      return {
        ...e,
        suggestionString: t.payload
      };
    case e9:
      return {
        ...e,
        ...t.payload
      };
    case Ms:
      return {
        ...e,
        ...pc,
        ...HS(pc, t.payload, VS)
      };
    case Yf:
      return {
        ...e,
        layout: t.payload
      };
    case n_:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, y9 = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case e_:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case t_:
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
    case r_:
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
var b9 = BK({
  app: m9,
  query: v9,
  results: y9
});
function Tb(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: i,
    sortOrder: s
  } = t;
  return r !== i || n !== s;
}
function E9(e, t, r) {
  const n = Tb(r, t), i = !sn(e.defaultSortingOnEmptyQueryString);
  let s = !1;
  return i && (s = Tb(r, e.defaultSortingOnEmptyQueryString)), n && s;
}
function w9(e) {
  const t = {
    ...pc,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = E9(e, t, r), i = {
    ...QK,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, s = {
    ...GK,
    loading: e.searchOnInit
  };
  return {
    app: i,
    query: r,
    results: s
  };
}
function S9(e) {
  const t = w9(e);
  return BS(b9, t, zK(qK.withExtraArgument(e)));
}
function Pb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class Xp extends He {
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
Xp.defaultProps = {
  searchOnInit: !0,
  eventListenerEnabled: !1
};
Xp.contextType = st;
var _9 = Ee.component("Bootstrap", Xp);
const O9 = (e) => ({
  onAppInitialized: (t) => e(t9(t)),
  updateQueryState: (t) => e(a_(t)),
  searchOnUrlQueryStringChanged: () => e(g9())
}), T9 = Tt(null, O9)(_9);
class Jp extends He {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new ZK(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = S9(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
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
      buildUID: (f, p) => Pb(f, p, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, c = Pb("ReactSearchKit.children", i, t);
    return /* @__PURE__ */ b.createElement(st.Provider, {
      value: l
    }, /* @__PURE__ */ b.createElement(NS, {
      store: this.store
    }, /* @__PURE__ */ b.createElement(T9, {
      searchOnInit: s,
      eventListenerEnabled: n
    }, /* @__PURE__ */ b.createElement(Ee, {
      id: c
    }, r))));
  }
}
Jp.defaultProps = {
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
Jp.contextType = st;
var P9 = Ee.component("ReactSearchKit", Jp);
class o_ extends He {
  constructor(t) {
    super(t), this._getLabel = (r) => {
      const n = r[0];
      let i = r[1], s = [n, i];
      if (r.length === 3) {
        const {
          label: c,
          activeFilter: f
        } = this._getLabel(r[2]);
        i = `${i}.${c}`, s.push(f);
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
    return !!t.length && /* @__PURE__ */ b.createElement(s_, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
o_.defaultProps = {
  overridableId: ""
};
const s_ = (e) => {
  let {
    overridableId: t,
    filters: r,
    removeActiveFilter: n,
    getLabel: i
  } = e;
  const {
    buildUID: s
  } = dt(st);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: s("ActiveFilters.element", t),
    filters: r,
    removeActiveFilter: n,
    getLabel: i
  }, /* @__PURE__ */ b.createElement(b.Fragment, null, r.map((l, c) => {
    const {
      label: f,
      activeFilter: p
    } = i(l);
    return (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ b.createElement(or, {
        image: !0,
        key: c,
        onClick: () => n(p)
      }, f, /* @__PURE__ */ b.createElement(Ct, {
        name: "delete"
      }))
    );
  })));
};
s_.defaultProps = {
  overridableId: ""
};
var x9 = Ee.component("ActiveFilters", o_);
const A9 = (e) => ({
  updateQueryFilters: (t) => e(Yp(t))
});
Tt((e) => ({
  filters: e.query.filters
}), A9)(x9);
function C9(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
  }
}
var $9 = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
C9($9);
class l_ extends He {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? HK.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ b.createElement(N9, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
l_.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const R9 = (e) => /* @__PURE__ */ b.createElement(l_, Object.assign({
  key: e.queryString
}, e)), N9 = (e) => {
  let {
    overridableId: t,
    placeholder: r,
    queryString: n,
    querySuggestions: i,
    onInputChange: s,
    executeSearch: l,
    ...c
  } = e;
  const {
    buildUID: f
  } = dt(st), p = (m, v) => {
    l();
  }, h = (m, v) => {
    m.key === "Enter" && l();
  };
  return /* @__PURE__ */ b.createElement(Ee, Object.assign({
    id: f("AutocompleteSearchBar.element", t)
  }, c), /* @__PURE__ */ b.createElement("div", {
    className: "AutoCompleteText"
  }, /* @__PURE__ */ b.createElement(hp, {
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
  }), /* @__PURE__ */ b.createElement(I9, {
    querySuggestions: i,
    overridableId: t
  })));
}, I9 = (e) => {
  let {
    overridableId: t,
    ...r
  } = e;
  const {
    querySuggestions: n
  } = r, {
    buildUID: i
  } = dt(st), s = async (l) => {
    await (void 0).setState({
      currentValue: l
    }), (void 0).clearSuggestions(), (void 0).executeSearch();
  };
  return n.length === 0 ? null : /* @__PURE__ */ b.createElement(Ee, Object.assign({
    id: i("AutocompleteSearchBar.suggestions", t)
  }, r), /* @__PURE__ */ b.createElement("ul", null, n.map((l) => /* @__PURE__ */ b.createElement(Pn, {
    as: "li",
    onClick: () => s(l),
    key: l
  }, l))));
};
var k9 = Ee.component("AutocompleteSearchBar", R9);
const D9 = (e) => ({
  updateQueryString: (t) => e(i_(t)),
  updateSuggestions: (t) => e(f9(t)),
  clearSuggestions: () => e(h9())
}), L9 = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
Tt(L9, D9)(k9);
class Zc extends He {
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
        const c = (f) => {
          this.onFilterClicked([this.aggName, r.key, f]);
        };
        return /* @__PURE__ */ b.createElement(Zc, {
          buckets: l,
          selectedFilters: s,
          field: this.childAgg.field,
          aggName: this.childAgg.aggName,
          childAgg: this.childAgg.childAgg,
          onFilterClicked: c
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
      const l = s.key_as_string ? s.key_as_string : s.key, c = this._isSelected(this.aggName, l, r), f = (h) => {
        this.onFilterClicked([this.aggName, h]);
      }, p = (h) => this.getChildAggCmps(h, r);
      return /* @__PURE__ */ b.createElement(u_, {
        key: s.key,
        bucket: s,
        keyField: l,
        isSelected: c,
        onFilterClicked: f,
        getChildAggCmps: p,
        overridableId: n
      });
    });
    return /* @__PURE__ */ b.createElement(c_, {
      valuesCmp: i,
      overridableId: n
    });
  }
}
Zc.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const c_ = (e) => {
  let {
    valuesCmp: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = dt(st);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: n("BucketAggregationContainer.element", r),
    valuesCmp: t
  }, /* @__PURE__ */ b.createElement(nw, null, t));
};
c_.defaultProps = {
  overridableId: ""
};
const u_ = (e) => {
  let {
    bucket: t,
    isSelected: r,
    onFilterClicked: n,
    getChildAggCmps: i,
    overridableId: s,
    keyField: l
  } = e;
  const {
    buildUID: c,
    nextComponentIndex: f
  } = dt(st), p = t.label ? t.label : `${l} (${t.doc_count.toLocaleString("en-US")})`, h = i(t);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: c("BucketAggregationValues.element", s),
    bucket: t,
    label: p,
    onFilterClicked: n,
    isSelected: r,
    childAggCmps: h
  }, /* @__PURE__ */ b.createElement(nw.Item, {
    key: t.key
  }, /* @__PURE__ */ b.createElement(Ar, {
    label: p,
    id: f(),
    value: t.key,
    onClick: () => n(t.key),
    checked: r
  }), h));
};
u_.defaultProps = {
  overridableId: ""
};
var M9 = Ee.component("BucketAggregationValues", Zc);
class d_ extends He {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: i
      } = this.props;
      return /* @__PURE__ */ b.createElement(M9, {
        buckets: r,
        selectedFilters: n,
        field: this.agg.field,
        aggName: this.agg.aggName,
        childAgg: this.agg.childAgg,
        onFilterClicked: this.onFilterClicked,
        overridableId: i
      });
    }, this._getSelectedFilters = (r) => r.filter((n) => n[0] === this.agg.aggName), this._getResultBuckets = (r) => {
      const n = jo(r, this.agg.aggName, {});
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
    } = this.props, s = this._getSelectedFilters(t), l = this._getResultBuckets(r), c = l.length ? this._renderValues(l, s) : null;
    return /* @__PURE__ */ b.createElement(f_, Object.assign({
      title: this.title,
      containerCmp: c,
      overridableId: n
    }, i));
  }
}
d_.defaultProps = {
  overridableId: ""
};
const f_ = (e) => {
  let {
    overridableId: t,
    agg: r,
    title: n,
    containerCmp: i,
    updateQueryFilters: s
  } = e;
  const {
    buildUID: l
  } = dt(st);
  return i && /* @__PURE__ */ b.createElement(Ee, {
    id: l("BucketAggregation.element", t),
    agg: r,
    title: n,
    containerCmp: i,
    updateQueryFilters: s
  }, /* @__PURE__ */ b.createElement(wt, null, /* @__PURE__ */ b.createElement(wt.Content, null, /* @__PURE__ */ b.createElement(wt.Header, null, n)), /* @__PURE__ */ b.createElement(wt.Content, null, i)));
};
f_.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var F9 = Ee.component("BucketAggregation", d_);
const B9 = (e) => ({
  updateQueryFilters: (t) => e(Yp(t))
});
Tt((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), B9)(F9);
class p_ extends He {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
p_.defaultProps = {
  condition: !0
};
var Rr = Ee.component("ShouldRender", p_);
class h_ extends He {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: i
    } = this.props;
    return /* @__PURE__ */ b.createElement(Rr, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ b.createElement(g_, {
      totalResults: r,
      overridableId: i
    })));
  }
}
h_.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const g_ = (e) => {
  let {
    totalResults: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = dt(st), i = n("Count.element", r);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: i,
    totalResults: t
  }, /* @__PURE__ */ b.createElement(or, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
g_.defaultProps = {
  overridableId: ""
};
var U9 = Ee.component("Count", h_);
const z9 = Tt((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(U9);
class m_ extends He {
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
      userSelectionFilters: c,
      ...f
    } = this.props;
    return /* @__PURE__ */ b.createElement(Rr, {
      condition: !t && sn(n) && r === 0
    }, /* @__PURE__ */ b.createElement(v_, Object.assign({}, f, {
      queryString: i,
      resetQuery: this.resetQuery,
      extraContent: s,
      userSelectionFilters: c,
      overridableId: l
    })));
  }
}
m_.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const v_ = (e) => {
  let {
    overridableId: t,
    queryString: r,
    resetQuery: n,
    extraContent: i,
    userSelectionFilters: s
  } = e;
  const {
    buildUID: l
  } = dt(st);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: l("EmptyResults.element", t),
    queryString: r,
    resetQuery: n,
    extraContent: i,
    userSelectionFilters: s
  }, /* @__PURE__ */ b.createElement(Ka, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ b.createElement(ia, {
    icon: !0
  }, /* @__PURE__ */ b.createElement(Ct, {
    name: "search"
  }), "No results found!"), r && /* @__PURE__ */ b.createElement("em", null, 'Current search "', r, '"'), /* @__PURE__ */ b.createElement("br", null), /* @__PURE__ */ b.createElement(Pn, {
    primary: !0,
    onClick: () => n()
  }, "Clear query"), i));
};
v_.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var q9 = Ee.component("EmptyResults", m_);
const j9 = (e) => ({
  resetQuery: () => e(l9())
}), H9 = Tt((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), j9)(q9);
function y_(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ b.createElement(Rr, {
    condition: !t && !sn(r)
  }, /* @__PURE__ */ b.createElement(b_, {
    error: r,
    overridableId: n
  }));
}
y_.defaultProps = {
  overridableId: ""
};
const b_ = (e) => {
  let {
    error: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = dt(st);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ b.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
b_.defaultProps = {
  overridableId: ""
};
var V9 = Ee.component("Error", y_);
Tt((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(V9);
function W9(e) {
  const t = (i) => /* @__PURE__ */ b.createElement(e, i);
  return Tt((i) => ({
    currentQueryState: i.query,
    currentResultsState: i.results
  }), (i) => ({
    updateQueryState: (s) => i(a_(s))
  }))(t);
}
class E_ extends He {
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
    return /* @__PURE__ */ b.createElement(Rr, {
      condition: t !== null && !r && n > 0
    }, /* @__PURE__ */ b.createElement(w_, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: i
    }));
  }
}
E_.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
const w_ = (e) => {
  let {
    overridableId: t,
    currentLayout: r,
    onLayoutChange: n
  } = e;
  const {
    buildUID: i
  } = dt(st);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: i("LayoutSwitcher.element", t),
    currentLayout: r,
    onLayoutChange: n
  }, /* @__PURE__ */ b.createElement(Ci, {
    compact: !0,
    icon: !0
  }, /* @__PURE__ */ b.createElement(Ci.Item, {
    name: "list",
    active: r === "list",
    onClick: (s, l) => {
      let {
        name: c
      } = l;
      return n(c);
    }
  }, /* @__PURE__ */ b.createElement(Ct, {
    name: "list layout"
  })), /* @__PURE__ */ b.createElement(Ci.Item, {
    name: "grid",
    active: r === "grid",
    onClick: (s, l) => {
      let {
        name: c
      } = l;
      return n(c);
    }
  }, /* @__PURE__ */ b.createElement(Ct, {
    name: "grid layout"
  }))));
};
w_.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var G9 = Ee.component("LayoutSwitcher", E_);
const Q9 = (e) => ({
  updateLayout: (t) => e(s9(t))
});
Tt((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), Q9)(G9);
const xb = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class S_ extends He {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...xb,
      ...t.options
    } : xb;
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
    return /* @__PURE__ */ b.createElement(Rr, {
      condition: !t && n > -1 && i > -1 && l ? r > 0 : r > i
    }, /* @__PURE__ */ b.createElement(__, {
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
S_.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const __ = (e) => {
  let {
    overridableId: t,
    currentPage: r,
    currentSize: n,
    totalResults: i,
    onPageChange: s,
    options: l,
    maxTotalResults: c,
    ...f
  } = e;
  const p = l.boundaryRangeCount, h = l.siblingRangeCount, m = l.showEllipsis, v = l.showFirst, w = l.showLast, O = l.showPrev, T = l.showNext, _ = l.size, x = Math.floor(c / n), D = Math.ceil(i / n), k = Math.min(D, x), {
    buildUID: z
  } = dt(st);
  return r > D && s(D), /* @__PURE__ */ b.createElement(Ee, {
    id: z("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: i,
    options: l,
    onPageChange: s
  }, /* @__PURE__ */ b.createElement(ao, Object.assign({
    activePage: r,
    totalPages: k,
    onPageChange: (N, B) => {
      let {
        activePage: P
      } = B;
      return s(P);
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
__.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var K9 = Ee.component("Pagination", S_);
const Y9 = (e) => ({
  updateQueryPage: (t) => e(i9(t))
}), X9 = Tt((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), Y9)(K9);
function O_(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    resultsPerRow: i,
    overridableId: s,
    onResultsRendered: l
  } = e;
  return hc(() => {
    l && l();
  }, [l]), /* @__PURE__ */ b.createElement(Rr, {
    condition: !t && r > 0
  }, /* @__PURE__ */ b.createElement(T_, {
    results: n,
    resultsPerRow: i,
    overridableId: s
  }));
}
O_.defaultProps = {
  resultsPerRow: 3,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const J9 = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = dt(st);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: n("ResultsGrid.item", r),
    result: t
  }, /* @__PURE__ */ b.createElement(wt, {
    fluid: !0,
    href: `#${t.id}`
  }, /* @__PURE__ */ b.createElement(Ut, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ b.createElement(wt.Content, null, /* @__PURE__ */ b.createElement(wt.Header, null, t.title), /* @__PURE__ */ b.createElement(wt.Description, null, t.description))));
}, T_ = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: i
  } = dt(st), s = r.map((l, c) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ b.createElement(J9, {
      key: c,
      result: l,
      overridableId: t
    })
  ));
  return /* @__PURE__ */ b.createElement(Ee, {
    id: i("ResultsGrid.container", t),
    results: s,
    resultsPerRow: n
  }, /* @__PURE__ */ b.createElement(wt.Group, {
    itemsPerRow: n
  }, s));
};
T_.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var Z9 = Ee.component("ResultsGrid", O_);
const e7 = Tt((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(Z9);
function P_(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: i,
    onResultsRendered: s
  } = e;
  return hc(() => {
    s && s();
  }, [s]), /* @__PURE__ */ b.createElement(Rr, {
    condition: !t && r > 0
  }, /* @__PURE__ */ b.createElement(x_, {
    results: n,
    overridableId: i
  }));
}
P_.defaultProps = {
  overridableId: "",
  onResultsRendered: () => {
  }
};
const t7 = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = dt(st);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ b.createElement(Dt, {
    href: `#${t.id}`
  }, /* @__PURE__ */ b.createElement(Dt.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ b.createElement(Dt.Content, null, /* @__PURE__ */ b.createElement(Dt.Header, null, t.title), /* @__PURE__ */ b.createElement(Dt.Description, null, t.description))));
}, x_ = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = dt(st), i = t.map((s, l) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ b.createElement(t7, {
      result: s,
      key: l,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ b.createElement(Ee, {
    id: n("ResultsList.container", r),
    results: i
  }, /* @__PURE__ */ b.createElement(Dt.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, i));
};
x_.defaultProps = {
  overridableId: ""
};
var r7 = Ee.component("ResultsList", P_);
const A_ = Tt((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(r7);
function C_(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ b.createElement($_, {
    overridableId: n
  }) : t;
}
C_.defaultProps = {
  overridableId: ""
};
const $_ = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = dt(st);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ b.createElement(bs, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
$_.defaultProps = {
  overridableId: ""
};
var n7 = Ee.component("ResultsLoader", C_);
const a7 = Tt((e) => ({
  loading: e.results.loading
}))(n7);
function R_(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: i,
    onResultsRendered: s
  } = e;
  return /* @__PURE__ */ b.createElement(Rr, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ b.createElement(N_, {
    layout: n,
    overridableId: i,
    onResultsRendered: s
  }));
}
R_.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const N_ = (e) => {
  let {
    layout: t,
    overridableId: r,
    onResultsRendered: n
  } = e;
  const {
    buildUID: i
  } = dt(st);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: i("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ b.createElement(A_, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ b.createElement(e7, {
    overridableId: r,
    onResultsRendered: n
  }));
};
N_.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var i7 = Ee.component("ResultsMultiLayout", R_);
Tt((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(i7);
class I_ extends He {
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
      selectOnNavigation: c,
      showWhenOnlyOnePage: f
    } = this.props;
    return /* @__PURE__ */ b.createElement(Rr, {
      condition: !t && r !== -1 && f ? n > 0 : n > r
    }, i(/* @__PURE__ */ b.createElement(k_, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: l,
      selectOnNavigation: c
    })));
  }
}
I_.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const k_ = (e) => {
  let {
    overridableId: t,
    currentSize: r,
    options: n,
    onValueChange: i,
    ariaLabel: s,
    selectOnNavigation: l
  } = e;
  const {
    buildUID: c
  } = dt(st), f = n.map((p, h) => ({
    key: h,
    text: p.text,
    value: p.value
  }));
  return /* @__PURE__ */ b.createElement(Ee, {
    id: c("ResultsPerPage.element", t),
    currentSize: r,
    options: n,
    onValueChange: i,
    ariaLabel: s,
    selectOnNavigation: l
  }, /* @__PURE__ */ b.createElement(ht, {
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
k_.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var o7 = Ee.component("ResultsPerPage", I_);
const s7 = (e) => ({
  updateQuerySize: (t) => e(o9(t))
}), l7 = Tt((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), s7)(o7);
class D_ extends He {
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
      overridableId: c,
      placeholder: f,
      uiProps: p
    } = this.props, {
      currentValue: h
    } = this.state;
    return /* @__PURE__ */ b.createElement(Zp, {
      actionProps: t,
      autofocus: r,
      executeSearch: n || this.executeSearch,
      onBtnSearchClick: i || this.onBtnSearchClick,
      onInputChange: s || this.onInputChange,
      onKeyPress: l || this.onKeyPress,
      overridableId: c,
      placeholder: f,
      queryString: h,
      uiProps: p
    });
  }
}
D_.defaultProps = {
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
const L_ = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ b.createElement(D_, Object.assign({
    key: t
  }, e));
};
L_.defaultProps = {
  queryString: ""
};
class Zp extends He {
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
      queryString: c,
      uiProps: f
    } = this.props, {
      buildUID: p
    } = this.context;
    return /* @__PURE__ */ b.createElement(Ee, {
      id: p("SearchBar.element", s),
      queryString: c,
      onBtnSearchClick: r,
      onInputChange: n,
      onKeyPress: i,
      placeholder: l,
      actionProps: t,
      uiProps: f
    }, /* @__PURE__ */ b.createElement(hp, Object.assign({
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
      value: c,
      onKeyPress: i,
      ref: (h) => {
        this.focusInput = h;
      }
    })));
  }
}
Zp.defaultProps = {
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
Zp.contextType = st;
var c7 = Ee.component("SearchBar", L_);
const u7 = (e) => ({
  updateQueryString: (t) => e(i_(t))
}), d7 = Tt((e) => ({
  queryString: e.query.queryString
}), u7)(c7);
class M_ extends He {
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
      sortOrderDisabled: c,
      ariaLabel: f,
      selectOnNavigation: p
    } = this.props;
    return /* @__PURE__ */ b.createElement(Rr, {
      condition: t !== null && (c || t !== null) && !n && i > 0
    }, s(/* @__PURE__ */ b.createElement(F_, {
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
M_.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const F_ = (e) => {
  let {
    overridableId: t,
    currentSortBy: r,
    currentSortOrder: n,
    options: i,
    onValueChange: s,
    computeValue: l,
    ariaLabel: c,
    selectOnNavigation: f
  } = e;
  const {
    buildUID: p
  } = dt(st), h = l(r, n), m = i.map((v, w) => ({
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
    ariaLabel: c,
    selectOnNavigation: f
  }, /* @__PURE__ */ b.createElement(ht, {
    selection: !0,
    options: m,
    value: h,
    onChange: (v, w) => {
      let {
        value: O
      } = w;
      return s(O);
    },
    "aria-label": c,
    selectOnNavigation: f
  }));
};
F_.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var f7 = Ee.component("Sort", M_);
const p7 = (e) => ({
  updateQuerySorting: (t, r) => e(r9(t, r))
});
Tt((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), p7)(f7);
class B_ extends He {
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
      selectOnNavigation: c
    } = this.props;
    return /* @__PURE__ */ b.createElement(Rr, {
      condition: t !== null && !r && n > 0
    }, i(/* @__PURE__ */ b.createElement(U_, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: l,
      selectOnNavigation: c
    })));
  }
}
B_.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const U_ = (e) => {
  let {
    overridableId: t,
    currentSortBy: r,
    options: n,
    onValueChange: i,
    ariaLabel: s,
    selectOnNavigation: l
  } = e;
  const {
    buildUID: c
  } = dt(st), f = n.map((p, h) => ({
    key: h,
    text: p.text,
    value: p.value
  }));
  return /* @__PURE__ */ b.createElement(Ee, {
    id: c("SortBy.element", t),
    options: n,
    currentSortBy: r,
    onValueChange: i,
    ariaLabel: s,
    selectOnNavigation: l
  }, /* @__PURE__ */ b.createElement(ht, {
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
U_.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var h7 = Ee.component("SortBy", B_);
const g7 = (e) => ({
  updateQuerySortBy: (t) => e(n9(t))
});
Tt((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), g7)(h7);
class z_ extends He {
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
      selectOnNavigation: c
    } = this.props;
    return /* @__PURE__ */ b.createElement(Rr, {
      condition: t !== null && !r && n > 0
    }, i(/* @__PURE__ */ b.createElement(q_, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: l,
      selectOnNavigation: c
    })));
  }
}
z_.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const q_ = (e) => {
  let {
    overridableId: t,
    currentSortOrder: r,
    options: n,
    onValueChange: i,
    ariaLabel: s,
    selectOnNavigation: l
  } = e;
  const {
    buildUID: c
  } = dt(st), f = n.map((p, h) => ({
    key: h,
    text: p.text,
    value: p.value
  }));
  return /* @__PURE__ */ b.createElement(Ee, {
    id: c("SortOrder.element", t),
    options: n,
    currentSortOrder: r,
    onValueChange: i,
    ariaLabel: s,
    selectOnNavigation: l
  }, /* @__PURE__ */ b.createElement(ht, {
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
q_.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var m7 = Ee.component("SortOrder", z_);
const v7 = (e) => ({
  updateQuerySortOrder: (t) => e(a9(t))
});
Tt((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), v7)(m7);
const j_ = (e) => {
  let {
    overridableId: t,
    userSelectionFilters: r,
    title: n,
    label: i,
    filterValue: s,
    updateQueryFilters: l
  } = e;
  const c = (m) => m.filter((w) => w[0] === s[0]).length > 0, f = () => {
    l(s);
  }, {
    buildUID: p
  } = dt(st), h = c(r);
  return /* @__PURE__ */ b.createElement(Ee, {
    id: p("SearchFilters.Toggle.element", t),
    title: n,
    label: i,
    filterValue: s,
    userSelectionFilters: r,
    updateQueryFilters: l
  }, /* @__PURE__ */ b.createElement(wt, null, /* @__PURE__ */ b.createElement(wt.Content, null, /* @__PURE__ */ b.createElement(wt.Header, null, n)), /* @__PURE__ */ b.createElement(wt.Content, null, /* @__PURE__ */ b.createElement(Ar, {
    toggle: !0,
    label: i,
    onClick: f,
    checked: h
  }))));
};
j_.defaultProps = {
  overridableId: ""
};
var y7 = Ee.component("SearchFilters.Toggle", j_);
const b7 = (e) => ({
  updateQueryFilters: (t) => e(Yp(t))
});
Tt((e) => ({
  userSelectionFilters: e.query.filters
}), b7)(y7);
const H_ = b.createContext(
  null
), E7 = ({ config: e, children: t }) => /* @__PURE__ */ b.createElement(H_.Provider, { value: { config: e } }, t), w7 = () => {
  const e = b.useContext(H_);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
}, S7 = ({
  result: e,
  index: t
}) => /* @__PURE__ */ b.createElement(ar, { key: t }, /* @__PURE__ */ b.createElement(kt, null, e.title || "No title"), /* @__PURE__ */ b.createElement(kt, null, e.created), /* @__PURE__ */ b.createElement(kt, null, e.status), /* @__PURE__ */ b.createElement(kt, null, "999"), /* @__PURE__ */ b.createElement(kt, null, "999"), /* @__PURE__ */ b.createElement(kt, null, e.serializer), /* @__PURE__ */ b.createElement(kt, null, e.mode), /* @__PURE__ */ b.createElement(kt, { style: { width: "220px" } }, /* @__PURE__ */ b.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ b.createElement(
  ht,
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
), /* @__PURE__ */ b.createElement(Pn, { basic: !0, size: "tiny" }, /* @__PURE__ */ b.createElement(Ct, { name: "eye" }), "View")))), _7 = ({ children: e }) => /* @__PURE__ */ b.createElement(Cr, { celled: !0, size: "small", comp: !0 }, /* @__PURE__ */ b.createElement(Rn, null, /* @__PURE__ */ b.createElement(ar, null, /* @__PURE__ */ b.createElement(pr, null, "ID"), /* @__PURE__ */ b.createElement(pr, null, "Date"), /* @__PURE__ */ b.createElement(pr, null, "Status"), /* @__PURE__ */ b.createElement(pr, null, "Records"), /* @__PURE__ */ b.createElement(pr, null, "Files"), /* @__PURE__ */ b.createElement(pr, null, "Provider"), /* @__PURE__ */ b.createElement(pr, null, "Mode"), /* @__PURE__ */ b.createElement(pr, null, "Actions"))), /* @__PURE__ */ b.createElement(na, null, e)), bn = {
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
}, V_ = jl.create({
  baseURL: "",
  timeout: 3e4,
  withCredentials: !0,
  // Include cookies in requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
}), O7 = async () => {
  try {
    const e = await V_.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, T7 = async (e) => {
  try {
    const t = await V_.get(
      `/api/importer-tasks/config/${e}`
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error fetching serializers:", t), new Error("Failed to fetch serializers");
  }
}, P7 = () => {
  const [e, t] = Dl(), [r, n] = Dl(null), [i, s] = Dl(!0), l = BC(async () => {
    try {
      const c = await O7();
      for (const f of c) {
        const p = await T7(f);
        p && t((h) => ({
          ...h,
          [f]: p
        }));
      }
    } catch (c) {
      console.error("Error fetching record types:", c);
    } finally {
      s(!1);
    }
  }, []);
  return hc(() => {
    l();
  }, [l]), i ? /* @__PURE__ */ b.createElement("p", null, "Loading record types...") : !e || Object.keys(e).length === 0 ? /* @__PURE__ */ b.createElement("p", null, "No record types available.") : /* @__PURE__ */ b.createElement(NM, null, /* @__PURE__ */ b.createElement(
    $n,
    {
      options: Object.keys(e).map((c) => ({
        key: c,
        value: c,
        text: c
      })),
      onChange: (c, { value: f }) => n(f),
      placeholder: "Select Record Type"
    }
  ), /* @__PURE__ */ b.createElement(
    $n,
    {
      options: r ? e[r].serializers.map((c) => ({
        key: c,
        value: c,
        text: `${c} (${r})`
      })) : [],
      placeholder: "Select Serializer",
      disabled: !e || Object.keys(e).length === 0
    }
  ));
}, x7 = () => {
  const [e, t] = Dl(!1);
  return /* @__PURE__ */ b.createElement(
    cL,
    {
      closeIcon: !0,
      onClose: () => t(!1),
      onOpen: () => t(!0),
      open: e,
      trigger: /* @__PURE__ */ b.createElement(Pn, { color: "green", icon: !0, labelPosition: "left" }, /* @__PURE__ */ b.createElement(Ct, { name: "add" }), "New Import")
    },
    /* @__PURE__ */ b.createElement(An, null, "New Import Task"),
    /* @__PURE__ */ b.createElement(xn, null, /* @__PURE__ */ b.createElement(P7, null)),
    /* @__PURE__ */ b.createElement(Va, null, /* @__PURE__ */ b.createElement(Pn, { onClick: () => t(!1) }, "Close"))
  );
}, A7 = ({
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
    const c = ((f = e.filters) == null ? void 0 : f.filter(
      (p) => p[0] !== "status"
    )) || [];
    l && c.push(["status", l]), t({
      ...e,
      filters: c,
      page: 1
    });
  };
  return /* @__PURE__ */ b.createElement(Ci, { activeIndex: 0, compact: !0, size: "tiny" }, r.map(({ key: l, label: c, value: f }) => /* @__PURE__ */ b.createElement(
    Ci.Item,
    {
      key: l,
      name: l,
      active: (n == null ? void 0 : n[1]) === f || f === null && !n,
      onClick: () => i(f)
    },
    c
  )));
}, W_ = W9(A7);
function Xf(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var C7 = (e) => typeof e == "object" && e !== null;
function $7(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var R7 = (e) => e === "base";
function N7(e) {
  return e.slice().filter((t) => !R7(t));
}
function Ab(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function I7(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = Ab(r % 52) + t;
  return Ab(r % 52) + t;
}
function k7(e, t) {
  let r = t.length;
  for (; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function D7(e) {
  return I7(k7(5381, e) >>> 0);
}
var G_ = /\s*!(important)?/i;
function L7(e) {
  return typeof e == "string" ? G_.test(e) : !1;
}
function M7(e) {
  return typeof e == "string" ? e.replace(G_, "").trim() : e;
}
function Q_(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var eh = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...n) => {
    const i = JSON.stringify(n);
    if (t.has(i))
      return t.get(i);
    const s = e(...n);
    return t.set(i, s), s;
  };
}, F7 = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function K_(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((n) => {
    if (F7.has(n))
      return;
    const i = t[n], s = r[n];
    Xf(i) && Xf(s) ? t[n] = K_(i, s) : t[n] = s;
  }), t), {});
}
var B7 = (e) => e != null;
function Y_(e, t, r = {}) {
  const { stop: n, getKey: i } = r;
  function s(l, c = []) {
    if (C7(l)) {
      const f = {};
      for (const [p, h] of Object.entries(l)) {
        const m = (i == null ? void 0 : i(p, h)) ?? p, v = [...c, m];
        if (n != null && n(l, v))
          return t(l, c);
        const w = s(h, v);
        B7(w) && (f[m] = w);
      }
      return f;
    }
    return t(l, c);
  }
  return s(e);
}
function U7(e, t) {
  return e.reduce(
    (r, n, i) => {
      const s = t[i];
      return n != null && (r[s] = n), r;
    },
    {}
  );
}
function X_(e, t, r = !0) {
  const { utility: n, conditions: i } = t, { hasShorthand: s, resolveShorthand: l } = n;
  return Y_(
    e,
    (c) => Array.isArray(c) ? U7(c, i.breakpoints.keys) : c,
    {
      stop: (c) => Array.isArray(c),
      getKey: r ? (c) => s ? l(c) : c : void 0
    }
  );
}
var z7 = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, q7 = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function j7(e) {
  const { utility: t, hash: r, conditions: n = z7 } = e, i = (l) => [t.prefix, l].filter(Boolean).join("-"), s = (l, c) => {
    let f;
    if (r) {
      const p = [...n.finalize(l), c];
      f = i(t.toHash(p, D7));
    } else
      f = [...n.finalize(l), i(c)].join(":");
    return f;
  };
  return eh(({ base: l, ...c } = {}) => {
    const f = Object.assign(c, l), p = X_(f, e), h = /* @__PURE__ */ new Set();
    return Y_(p, (m, v) => {
      if (m == null)
        return;
      const w = L7(m), [O, ...T] = n.shift(v), _ = N7(T), x = t.transform(O, M7(q7(m)));
      let D = s(_, x.className);
      w && (D = `${D}!`), h.add(D);
    }), Array.from(h).join(" ");
  });
}
function H7(...e) {
  return e.flat().filter((t) => Xf(t) && Object.keys($7(t)).length > 0);
}
function V7(e) {
  function t(i) {
    const s = H7(...i);
    return s.length === 1 ? s : s.map((l) => X_(l, e));
  }
  function r(...i) {
    return K_(...t(i));
  }
  function n(...i) {
    return Object.assign({}, ...t(i));
  }
  return { mergeCss: eh(r), assignCss: n };
}
var W7 = /([A-Z])/g, G7 = /^ms-/, Q7 = eh((e) => e.startsWith("--") ? e : e.replace(W7, "-$1").replace(G7, "-ms-").toLowerCase()), K7 = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${K7.split(",").join("|")}`;
const Y7 = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", J_ = new Set(Y7.split(",")), X7 = /^@|&|&$/;
function Cb(e) {
  return J_.has(e) || X7.test(e);
}
const J7 = /^_/, Z7 = /&|@/;
function eY(e) {
  return e.map((t) => J_.has(t) ? t.replace(J7, "") : Z7.test(t) ? `[${Q_(t.trim())}]` : t);
}
function tY(e) {
  return e.sort((t, r) => {
    const n = Cb(t), i = Cb(r);
    return n && !i ? 1 : !n && i ? -1 : 0;
  });
}
const rY = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle", Z_ = /* @__PURE__ */ new Map(), e1 = /* @__PURE__ */ new Map();
rY.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [n, ...i] = r.split("/");
  Z_.set(t, n), i.length && i.forEach((s) => {
    e1.set(s === "1" ? n : s, t);
  });
});
const $b = (e) => e1.get(e) || e, t1 = {
  conditions: {
    shift: tY,
    finalize: eY,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = $b(e);
      return { className: `${Z_.get(r) || Q7(r)}_${Q_(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: $b
  }
}, nY = j7(t1), Ra = (...e) => nY(r1(...e));
Ra.raw = (...e) => r1(...e);
const { mergeCss: r1, assignCss: uY } = V7(t1), qo = {
  searchBarRow: Ra({
    display: "flex !important",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1rem",
    paddingBlock: "0.5rem",
    minBlockSize: "3rem"
  }),
  facets: Ra({
    flex: "0 0 auto"
  }),
  search: Ra({
    flex: "1 1 auto",
    minInlineSize: "15rem"
  }),
  import: Ra({
    flex: "0 0 auto"
  }),
  visuallyHidden: Ra({
    srOnly: !0
  })
}, aY = () => /* @__PURE__ */ b.createElement(
  "section",
  {
    className: qo.searchBarRow,
    "aria-label": "Records search and filters"
  },
  /* @__PURE__ */ b.createElement("div", { className: qo.facets }, /* @__PURE__ */ b.createElement(W_, null)),
  /* @__PURE__ */ b.createElement("div", { className: qo.search }, /* @__PURE__ */ b.createElement(
    d7,
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
  ), /* @__PURE__ */ b.createElement("span", { className: qo.visuallyHidden }, "Type keywords to search through records. Press Enter to submit.")),
  /* @__PURE__ */ b.createElement("div", { className: qo.import }, /* @__PURE__ */ b.createElement(x7, null))
), iY = () => {
  const { config: e } = w7();
  return /* @__PURE__ */ b.createElement(Mr, null, /* @__PURE__ */ b.createElement(Mr.Row, { verticalAlign: "middle" }, /* @__PURE__ */ b.createElement(Mr.Column, { width: 4, textAlign: "left" }, /* @__PURE__ */ b.createElement(z9, { label: (t) => /* @__PURE__ */ b.createElement("p", null, "Showing ", t, " task(s)") })), /* @__PURE__ */ b.createElement(Mr.Column, { width: 8, textAlign: "center" }, /* @__PURE__ */ b.createElement(X9, { options: { size: "mini" } })), /* @__PURE__ */ b.createElement(Mr.Column, { width: 4, textAlign: "right" }, /* @__PURE__ */ b.createElement(
    l7,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ b.createElement("p", null, t, " results per page")
    }
  ))));
}, oY = ({
  config: e = {},
  overriddenComponents: t = {}
}) => {
  var s, l, c, f, p;
  const r = {
    ...bn,
    ...e,
    initialQueryState: {
      ...bn.initialQueryState,
      ...e.initialQueryState
    },
    layoutOptions: {
      ...bn.layoutOptions,
      ...e.layoutOptions
    },
    paginationOptions: {
      ...bn.paginationOptions,
      ...e.paginationOptions,
      resultsPerPage: ((s = e.paginationOptions) == null ? void 0 : s.resultsPerPage) || bn.paginationOptions.resultsPerPage
    },
    searchApi: {
      ...bn.searchApi,
      ...e.searchApi,
      axios: {
        ...bn.searchApi.axios,
        ...(l = e.searchApi) == null ? void 0 : l.axios,
        headers: {
          ...bn.searchApi.axios.headers,
          ...(f = (c = e.searchApi) == null ? void 0 : c.axios) == null ? void 0 : f.headers
        }
      },
      invenio: {
        ...bn.searchApi.invenio,
        ...(p = e.searchApi) == null ? void 0 : p.invenio
      }
    }
  }, n = new WS(r.searchApi), i = {
    [`${r.appId}.ResultsList.item`]: S7,
    [`${r.appId}.ResultsList.container`]: _7,
    [`${r.appId}.SearchFacets`]: W_,
    ...t
  };
  return /* @__PURE__ */ b.createElement(gp.Provider, { value: i }, /* @__PURE__ */ b.createElement(
    P9,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ b.createElement(E7, { config: r }, /* @__PURE__ */ b.createElement(aY, null), /* @__PURE__ */ b.createElement(a7, null, /* @__PURE__ */ b.createElement(H9, null), /* @__PURE__ */ b.createElement(A_, null)), /* @__PURE__ */ b.createElement(iY, null))
  ));
}, sY = {
  bulkImporter: Ra({
    padding: "2rem"
  })
}, dY = () => /* @__PURE__ */ b.createElement("div", { className: sY.bulkImporter }, /* @__PURE__ */ b.createElement(ia, { as: "h1" }, "Bulk Importer"), /* @__PURE__ */ b.createElement("p", null, "A more modern approach for an invenio compatible bulk importer."), /* @__PURE__ */ b.createElement(oY, null));
function fY(e) {
  return new WS(e);
}
function pY(e, t = {}, r = !0) {
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
  dY as BulkImporter,
  x7 as ImportModal,
  oY as Search,
  fY as createSearchApi,
  pY as createSearchApiConfig
};
