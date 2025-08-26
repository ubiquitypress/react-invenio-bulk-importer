import s, { Component as L, useContext as F, useEffect as Me, useCallback as R, Fragment as or, useState as N, useMemo as ra, createContext as Xs, useRef as Zs } from "react";
import v, { OverridableContext as Js } from "react-overridable";
import rt from "axios";
import xe from "qs";
import { connect as k, Provider as eo } from "react-redux";
import { Label as j, Icon as _, Input as na, Button as z, List as $, Checkbox as lr, Card as D, Segment as K, Header as de, Menu as Ot, Pagination as to, Item as ve, Loader as aa, Dropdown as ce, Image as ro, Dimmer as no, TableRow as ht, TableCell as H, Table as T, TableHeader as ia, TableHeaderCell as Y, TableBody as sa, Form as _e, Modal as le, ModalHeader as ao, ModalContent as io, Grid as W, Statistic as Rt, Progress as so, Message as U, Tab as Oe, Popup as zr, Container as oo } from "semantic-ui-react";
import { combineReducers as lo, createStore as co, applyMiddleware as uo } from "redux";
import po from "redux-thunk";
import fo from "lodash";
import { TextField as ho, SelectField as kt, TextAreaField as mo, BaseForm as go } from "react-invenio-forms";
import { useFormikContext as yo } from "formik";
var Ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function P(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bo = Object.prototype;
function vo(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || bo;
  return e === r;
}
var mt = vo;
function Eo(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var oa = Eo, So = oa, _o = So(Object.keys, Object), $o = _o, xo = mt, Co = $o, wo = Object.prototype, To = wo.hasOwnProperty;
function Io(e) {
  if (!xo(e))
    return Co(e);
  var t = [];
  for (var r in Object(e))
    To.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var la = Io, Fo = typeof Ke == "object" && Ke && Ke.Object === Object && Ke, ca = Fo, Ao = ca, Oo = typeof self == "object" && self && self.Object === Object && self, Ro = Ao || Oo || Function("return this")(), re = Ro, ko = re, Po = ko.Symbol, Ce = Po, Mr = Ce, ua = Object.prototype, Do = ua.hasOwnProperty, Lo = ua.toString, Re = Mr ? Mr.toStringTag : void 0;
function No(e) {
  var t = Do.call(e, Re), r = e[Re];
  try {
    e[Re] = void 0;
    var n = !0;
  } catch {
  }
  var a = Lo.call(e);
  return n && (t ? e[Re] = r : delete e[Re]), a;
}
var Bo = No, Uo = Object.prototype, zo = Uo.toString;
function Mo(e) {
  return zo.call(e);
}
var jo = Mo, jr = Ce, Qo = Bo, qo = jo, Vo = "[object Null]", Go = "[object Undefined]", Qr = jr ? jr.toStringTag : void 0;
function Ho(e) {
  return e == null ? e === void 0 ? Go : Vo : Qr && Qr in Object(e) ? Qo(e) : qo(e);
}
var pe = Ho;
function Yo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var se = Yo;
const Wo = /* @__PURE__ */ P(se);
var Ko = pe, Xo = se, Zo = "[object AsyncFunction]", Jo = "[object Function]", el = "[object GeneratorFunction]", tl = "[object Proxy]";
function rl(e) {
  if (!Xo(e))
    return !1;
  var t = Ko(e);
  return t == Jo || t == el || t == Zo || t == tl;
}
var da = rl, nl = re, al = nl["__core-js_shared__"], il = al, Pt = il, qr = function() {
  var e = /[^.]+$/.exec(Pt && Pt.keys && Pt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function sl(e) {
  return !!qr && qr in e;
}
var ol = sl, ll = Function.prototype, cl = ll.toString;
function ul(e) {
  if (e != null) {
    try {
      return cl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var pa = ul, dl = da, pl = ol, fl = se, hl = pa, ml = /[\\^$.*+?()[\]{}|]/g, gl = /^\[object .+?Constructor\]$/, yl = Function.prototype, bl = Object.prototype, vl = yl.toString, El = bl.hasOwnProperty, Sl = RegExp(
  "^" + vl.call(El).replace(ml, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _l(e) {
  if (!fl(e) || pl(e))
    return !1;
  var t = dl(e) ? Sl : gl;
  return t.test(hl(e));
}
var $l = _l;
function xl(e, t) {
  return e == null ? void 0 : e[t];
}
var Cl = xl, wl = $l, Tl = Cl;
function Il(e, t) {
  var r = Tl(e, t);
  return wl(r) ? r : void 0;
}
var ge = Il, Fl = ge, Al = re, Ol = Fl(Al, "DataView"), Rl = Ol, kl = ge, Pl = re, Dl = kl(Pl, "Map"), cr = Dl, Ll = ge, Nl = re, Bl = Ll(Nl, "Promise"), Ul = Bl, zl = ge, Ml = re, jl = zl(Ml, "Set"), Ql = jl, ql = ge, Vl = re, Gl = ql(Vl, "WeakMap"), Hl = Gl, Qt = Rl, qt = cr, Vt = Ul, Gt = Ql, Ht = Hl, fa = pe, we = pa, Vr = "[object Map]", Yl = "[object Object]", Gr = "[object Promise]", Hr = "[object Set]", Yr = "[object WeakMap]", Wr = "[object DataView]", Wl = we(Qt), Kl = we(qt), Xl = we(Vt), Zl = we(Gt), Jl = we(Ht), he = fa;
(Qt && he(new Qt(new ArrayBuffer(1))) != Wr || qt && he(new qt()) != Vr || Vt && he(Vt.resolve()) != Gr || Gt && he(new Gt()) != Hr || Ht && he(new Ht()) != Yr) && (he = function(e) {
  var t = fa(e), r = t == Yl ? e.constructor : void 0, n = r ? we(r) : "";
  if (n)
    switch (n) {
      case Wl:
        return Wr;
      case Kl:
        return Vr;
      case Xl:
        return Gr;
      case Zl:
        return Hr;
      case Jl:
        return Yr;
    }
  return t;
});
var je = he;
function ec(e) {
  return e != null && typeof e == "object";
}
var ne = ec, tc = pe, rc = ne, nc = "[object Arguments]";
function ac(e) {
  return rc(e) && tc(e) == nc;
}
var ic = ac, Kr = ic, sc = ne, ha = Object.prototype, oc = ha.hasOwnProperty, lc = ha.propertyIsEnumerable, cc = Kr(function() {
  return arguments;
}()) ? Kr : function(e) {
  return sc(e) && oc.call(e, "callee") && !lc.call(e, "callee");
}, gt = cc, uc = Array.isArray, q = uc;
const ma = /* @__PURE__ */ P(q);
var dc = 9007199254740991;
function pc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= dc;
}
var ur = pc, fc = da, hc = ur;
function mc(e) {
  return e != null && hc(e.length) && !fc(e);
}
var yt = mc, it = { exports: {} };
function gc() {
  return !1;
}
var yc = gc;
it.exports;
(function(e, t) {
  var r = re, n = yc, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, l = o ? r.Buffer : void 0, c = l ? l.isBuffer : void 0, u = c || n;
  e.exports = u;
})(it, it.exports);
var bt = it.exports, bc = pe, vc = ur, Ec = ne, Sc = "[object Arguments]", _c = "[object Array]", $c = "[object Boolean]", xc = "[object Date]", Cc = "[object Error]", wc = "[object Function]", Tc = "[object Map]", Ic = "[object Number]", Fc = "[object Object]", Ac = "[object RegExp]", Oc = "[object Set]", Rc = "[object String]", kc = "[object WeakMap]", Pc = "[object ArrayBuffer]", Dc = "[object DataView]", Lc = "[object Float32Array]", Nc = "[object Float64Array]", Bc = "[object Int8Array]", Uc = "[object Int16Array]", zc = "[object Int32Array]", Mc = "[object Uint8Array]", jc = "[object Uint8ClampedArray]", Qc = "[object Uint16Array]", qc = "[object Uint32Array]", w = {};
w[Lc] = w[Nc] = w[Bc] = w[Uc] = w[zc] = w[Mc] = w[jc] = w[Qc] = w[qc] = !0;
w[Sc] = w[_c] = w[Pc] = w[$c] = w[Dc] = w[xc] = w[Cc] = w[wc] = w[Tc] = w[Ic] = w[Fc] = w[Ac] = w[Oc] = w[Rc] = w[kc] = !1;
function Vc(e) {
  return Ec(e) && vc(e.length) && !!w[bc(e)];
}
var Gc = Vc;
function Hc(e) {
  return function(t) {
    return e(t);
  };
}
var dr = Hc, st = { exports: {} };
st.exports;
(function(e, t) {
  var r = ca, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, l = function() {
    try {
      var c = a && a.require && a.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(st, st.exports);
var pr = st.exports, Yc = Gc, Wc = dr, Xr = pr, Zr = Xr && Xr.isTypedArray, Kc = Zr ? Wc(Zr) : Yc, fr = Kc, Xc = la, Zc = je, Jc = gt, eu = q, tu = yt, ru = bt, nu = mt, au = fr, iu = "[object Map]", su = "[object Set]", ou = Object.prototype, lu = ou.hasOwnProperty;
function cu(e) {
  if (e == null)
    return !0;
  if (tu(e) && (eu(e) || typeof e == "string" || typeof e.splice == "function" || ru(e) || au(e) || Jc(e)))
    return !e.length;
  var t = Zc(e);
  if (t == iu || t == su)
    return !e.size;
  if (nu(e))
    return !Xc(e).length;
  for (var r in e)
    if (lu.call(e, r))
      return !1;
  return !0;
}
var uu = cu;
const ae = /* @__PURE__ */ P(uu);
var du = pe, pu = ne, fu = "[object Symbol]";
function hu(e) {
  return typeof e == "symbol" || pu(e) && du(e) == fu;
}
var hr = hu, mu = q, gu = hr, yu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, bu = /^\w*$/;
function vu(e, t) {
  if (mu(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || gu(e) ? !0 : bu.test(e) || !yu.test(e) || t != null && e in Object(t);
}
var mr = vu, Eu = ge, Su = Eu(Object, "create"), vt = Su, Jr = vt;
function _u() {
  this.__data__ = Jr ? Jr(null) : {}, this.size = 0;
}
var $u = _u;
function xu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Cu = xu, wu = vt, Tu = "__lodash_hash_undefined__", Iu = Object.prototype, Fu = Iu.hasOwnProperty;
function Au(e) {
  var t = this.__data__;
  if (wu) {
    var r = t[e];
    return r === Tu ? void 0 : r;
  }
  return Fu.call(t, e) ? t[e] : void 0;
}
var Ou = Au, Ru = vt, ku = Object.prototype, Pu = ku.hasOwnProperty;
function Du(e) {
  var t = this.__data__;
  return Ru ? t[e] !== void 0 : Pu.call(t, e);
}
var Lu = Du, Nu = vt, Bu = "__lodash_hash_undefined__";
function Uu(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Nu && t === void 0 ? Bu : t, this;
}
var zu = Uu, Mu = $u, ju = Cu, Qu = Ou, qu = Lu, Vu = zu;
function Te(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Te.prototype.clear = Mu;
Te.prototype.delete = ju;
Te.prototype.get = Qu;
Te.prototype.has = qu;
Te.prototype.set = Vu;
var Gu = Te;
function Hu() {
  this.__data__ = [], this.size = 0;
}
var Yu = Hu;
function Wu(e, t) {
  return e === t || e !== e && t !== t;
}
var Et = Wu, Ku = Et;
function Xu(e, t) {
  for (var r = e.length; r--; )
    if (Ku(e[r][0], t))
      return r;
  return -1;
}
var St = Xu, Zu = St, Ju = Array.prototype, ed = Ju.splice;
function td(e) {
  var t = this.__data__, r = Zu(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : ed.call(t, r, 1), --this.size, !0;
}
var rd = td, nd = St;
function ad(e) {
  var t = this.__data__, r = nd(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var id = ad, sd = St;
function od(e) {
  return sd(this.__data__, e) > -1;
}
var ld = od, cd = St;
function ud(e, t) {
  var r = this.__data__, n = cd(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var dd = ud, pd = Yu, fd = rd, hd = id, md = ld, gd = dd;
function Ie(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ie.prototype.clear = pd;
Ie.prototype.delete = fd;
Ie.prototype.get = hd;
Ie.prototype.has = md;
Ie.prototype.set = gd;
var _t = Ie, en = Gu, yd = _t, bd = cr;
function vd() {
  this.size = 0, this.__data__ = {
    hash: new en(),
    map: new (bd || yd)(),
    string: new en()
  };
}
var Ed = vd;
function Sd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var _d = Sd, $d = _d;
function xd(e, t) {
  var r = e.__data__;
  return $d(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var $t = xd, Cd = $t;
function wd(e) {
  var t = Cd(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Td = wd, Id = $t;
function Fd(e) {
  return Id(this, e).get(e);
}
var Ad = Fd, Od = $t;
function Rd(e) {
  return Od(this, e).has(e);
}
var kd = Rd, Pd = $t;
function Dd(e, t) {
  var r = Pd(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Ld = Dd, Nd = Ed, Bd = Td, Ud = Ad, zd = kd, Md = Ld;
function Fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Fe.prototype.clear = Nd;
Fe.prototype.delete = Bd;
Fe.prototype.get = Ud;
Fe.prototype.has = zd;
Fe.prototype.set = Md;
var gr = Fe, ga = gr, jd = "Expected a function";
function yr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(jd);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (yr.Cache || ga)(), r;
}
yr.Cache = ga;
var Qd = yr, qd = Qd, Vd = 500;
function Gd(e) {
  var t = qd(e, function(n) {
    return r.size === Vd && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Hd = Gd, Yd = Hd, Wd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Kd = /\\(\\)?/g, Xd = Yd(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Wd, function(r, n, a, i) {
    t.push(a ? i.replace(Kd, "$1") : n || r);
  }), t;
}), Zd = Xd;
function Jd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var ep = Jd, tn = Ce, tp = ep, rp = q, np = hr, ap = 1 / 0, rn = tn ? tn.prototype : void 0, nn = rn ? rn.toString : void 0;
function ya(e) {
  if (typeof e == "string")
    return e;
  if (rp(e))
    return tp(e, ya) + "";
  if (np(e))
    return nn ? nn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ap ? "-0" : t;
}
var ip = ya, sp = ip;
function op(e) {
  return e == null ? "" : sp(e);
}
var Qe = op, lp = q, cp = mr, up = Zd, dp = Qe;
function pp(e, t) {
  return lp(e) ? e : cp(e, t) ? [e] : up(dp(e));
}
var xt = pp, fp = hr, hp = 1 / 0;
function mp(e) {
  if (typeof e == "string" || fp(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -hp ? "-0" : t;
}
var qe = mp, gp = xt, yp = qe;
function bp(e, t) {
  t = gp(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[yp(t[r++])];
  return r && r == n ? e : void 0;
}
var br = bp, vp = br;
function Ep(e, t, r) {
  var n = e == null ? void 0 : vp(e, t);
  return n === void 0 ? r : n;
}
var ba = Ep;
const Le = /* @__PURE__ */ P(ba);
function Sp(e, t) {
  return e != null && t in Object(e);
}
var _p = Sp, $p = 9007199254740991, xp = /^(?:0|[1-9]\d*)$/;
function Cp(e, t) {
  var r = typeof e;
  return t = t ?? $p, !!t && (r == "number" || r != "symbol" && xp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ct = Cp, wp = xt, Tp = gt, Ip = q, Fp = Ct, Ap = ur, Op = qe;
function Rp(e, t, r) {
  t = wp(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = Op(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && Ap(a) && Fp(o, a) && (Ip(e) || Tp(e)));
}
var va = Rp, kp = _p, Pp = va;
function Dp(e, t) {
  return e != null && Pp(e, t, kp);
}
var vr = Dp;
const Lp = /* @__PURE__ */ P(vr);
var Np = ge, Bp = function() {
  try {
    var e = Np(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ea = Bp, an = Ea;
function Up(e, t, r) {
  t == "__proto__" && an ? an(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var wt = Up, zp = wt, Mp = Et, jp = Object.prototype, Qp = jp.hasOwnProperty;
function qp(e, t, r) {
  var n = e[t];
  (!(Qp.call(e, t) && Mp(n, r)) || r === void 0 && !(t in e)) && zp(e, t, r);
}
var Er = qp, Vp = Er, Gp = wt;
function Hp(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var i = -1, o = t.length; ++i < o; ) {
    var l = t[i], c = n ? n(r[l], e[l], l, r, e) : void 0;
    c === void 0 && (c = e[l]), a ? Gp(r, l, c) : Vp(r, l, c);
  }
  return r;
}
var Ve = Hp;
function Yp(e) {
  return e;
}
var Sr = Yp;
function Wp(e, t, r) {
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
var Kp = Wp, Xp = Kp, sn = Math.max;
function Zp(e, t, r) {
  return t = sn(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = sn(n.length - t, 0), o = Array(i); ++a < i; )
      o[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(o), Xp(e, this, l);
  };
}
var Sa = Zp;
function Jp(e) {
  return function() {
    return e;
  };
}
var ef = Jp, tf = ef, on = Ea, rf = Sr, nf = on ? function(e, t) {
  return on(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: tf(t),
    writable: !0
  });
} : rf, af = nf, sf = 800, of = 16, lf = Date.now;
function cf(e) {
  var t = 0, r = 0;
  return function() {
    var n = lf(), a = of - (n - r);
    if (r = n, a > 0) {
      if (++t >= sf)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var uf = cf, df = af, pf = uf, ff = pf(df), _a = ff, hf = Sr, mf = Sa, gf = _a;
function yf(e, t) {
  return gf(mf(e, t, hf), e + "");
}
var bf = yf, vf = Et, Ef = yt, Sf = Ct, _f = se;
function $f(e, t, r) {
  if (!_f(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Ef(r) && Sf(t, r.length) : n == "string" && t in r) ? vf(r[t], e) : !1;
}
var xf = $f, Cf = bf, wf = xf;
function Tf(e) {
  return Cf(function(t, r) {
    var n = -1, a = r.length, i = a > 1 ? r[a - 1] : void 0, o = a > 2 ? r[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0, o && wf(r[0], r[1], o) && (i = a < 3 ? void 0 : i, a = 1), t = Object(t); ++n < a; ) {
      var l = r[n];
      l && e(t, l, n, i);
    }
    return t;
  });
}
var If = Tf;
function Ff(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Af = Ff, Of = Af, Rf = gt, kf = q, Pf = bt, Df = Ct, Lf = fr, Nf = Object.prototype, Bf = Nf.hasOwnProperty;
function Uf(e, t) {
  var r = kf(e), n = !r && Rf(e), a = !r && !n && Pf(e), i = !r && !n && !a && Lf(e), o = r || n || a || i, l = o ? Of(e.length, String) : [], c = l.length;
  for (var u in e)
    (t || Bf.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Df(u, c))) && l.push(u);
  return l;
}
var $a = Uf;
function zf(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Mf = zf, jf = se, Qf = mt, qf = Mf, Vf = Object.prototype, Gf = Vf.hasOwnProperty;
function Hf(e) {
  if (!jf(e))
    return qf(e);
  var t = Qf(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Gf.call(e, n)) || r.push(n);
  return r;
}
var Yf = Hf, Wf = $a, Kf = Yf, Xf = yt;
function Zf(e) {
  return Xf(e) ? Wf(e, !0) : Kf(e);
}
var Tt = Zf, Jf = Ve, eh = If, th = Tt, rh = eh(function(e, t) {
  Jf(t, th(t), e);
}), nh = rh, ah = nh;
const ot = /* @__PURE__ */ P(ah);
function ih(e) {
  return e && e.length ? e[0] : void 0;
}
var sh = ih;
const oh = /* @__PURE__ */ P(sh);
var lh = Er, ch = xt, uh = Ct, ln = se, dh = qe;
function ph(e, t, r, n) {
  if (!ln(e))
    return e;
  t = ch(t, e);
  for (var a = -1, i = t.length, o = i - 1, l = e; l != null && ++a < i; ) {
    var c = dh(t[a]), u = r;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (a != o) {
      var d = l[c];
      u = n ? n(d, c, l) : void 0, u === void 0 && (u = ln(d) ? d : uh(t[a + 1]) ? [] : {});
    }
    lh(l, c, u), l = l[c];
  }
  return e;
}
var fh = ph, hh = br, mh = fh, gh = xt;
function yh(e, t, r) {
  for (var n = -1, a = t.length, i = {}; ++n < a; ) {
    var o = t[n], l = hh(e, o);
    r(l, o) && mh(i, gh(o, e), l);
  }
  return i;
}
var bh = yh, vh = bh, Eh = vr;
function Sh(e, t) {
  return vh(e, t, function(r, n) {
    return Eh(e, n);
  });
}
var _h = Sh;
function $h(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var _r = $h, cn = Ce, xh = gt, Ch = q, un = cn ? cn.isConcatSpreadable : void 0;
function wh(e) {
  return Ch(e) || xh(e) || !!(un && e && e[un]);
}
var Th = wh, Ih = _r, Fh = Th;
function xa(e, t, r, n, a) {
  var i = -1, o = e.length;
  for (r || (r = Fh), a || (a = []); ++i < o; ) {
    var l = e[i];
    t > 0 && r(l) ? t > 1 ? xa(l, t - 1, r, n, a) : Ih(a, l) : n || (a[a.length] = l);
  }
  return a;
}
var Ah = xa, Oh = Ah;
function Rh(e) {
  var t = e == null ? 0 : e.length;
  return t ? Oh(e, 1) : [];
}
var kh = Rh, Ph = kh, Dh = Sa, Lh = _a;
function Nh(e) {
  return Lh(Dh(e, void 0, Ph), e + "");
}
var Bh = Nh, Uh = _h, zh = Bh, Mh = zh(function(e, t) {
  return e == null ? {} : Uh(e, t);
}), jh = Mh;
const Qh = /* @__PURE__ */ P(jh);
var qh = _t;
function Vh() {
  this.__data__ = new qh(), this.size = 0;
}
var Gh = Vh;
function Hh(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Yh = Hh;
function Wh(e) {
  return this.__data__.get(e);
}
var Kh = Wh;
function Xh(e) {
  return this.__data__.has(e);
}
var Zh = Xh, Jh = _t, em = cr, tm = gr, rm = 200;
function nm(e, t) {
  var r = this.__data__;
  if (r instanceof Jh) {
    var n = r.__data__;
    if (!em || n.length < rm - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new tm(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var am = nm, im = _t, sm = Gh, om = Yh, lm = Kh, cm = Zh, um = am;
function Ae(e) {
  var t = this.__data__ = new im(e);
  this.size = t.size;
}
Ae.prototype.clear = sm;
Ae.prototype.delete = om;
Ae.prototype.get = lm;
Ae.prototype.has = cm;
Ae.prototype.set = um;
var $r = Ae;
function dm(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var pm = dm, fm = $a, hm = la, mm = yt;
function gm(e) {
  return mm(e) ? fm(e) : hm(e);
}
var Ge = gm, ym = Ve, bm = Ge;
function vm(e, t) {
  return e && ym(t, bm(t), e);
}
var Em = vm, Sm = Ve, _m = Tt;
function $m(e, t) {
  return e && Sm(t, _m(t), e);
}
var xm = $m, lt = { exports: {} };
lt.exports;
(function(e, t) {
  var r = re, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i ? r.Buffer : void 0, l = o ? o.allocUnsafe : void 0;
  function c(u, d) {
    if (d)
      return u.slice();
    var p = u.length, f = l ? l(p) : new u.constructor(p);
    return u.copy(f), f;
  }
  e.exports = c;
})(lt, lt.exports);
var Cm = lt.exports;
function wm(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Tm = wm;
function Im(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
var Fm = Im;
function Am() {
  return [];
}
var Ca = Am, Om = Fm, Rm = Ca, km = Object.prototype, Pm = km.propertyIsEnumerable, dn = Object.getOwnPropertySymbols, Dm = dn ? function(e) {
  return e == null ? [] : (e = Object(e), Om(dn(e), function(t) {
    return Pm.call(e, t);
  }));
} : Rm, xr = Dm, Lm = Ve, Nm = xr;
function Bm(e, t) {
  return Lm(e, Nm(e), t);
}
var Um = Bm, zm = oa, Mm = zm(Object.getPrototypeOf, Object), wa = Mm, jm = _r, Qm = wa, qm = xr, Vm = Ca, Gm = Object.getOwnPropertySymbols, Hm = Gm ? function(e) {
  for (var t = []; e; )
    jm(t, qm(e)), e = Qm(e);
  return t;
} : Vm, Ta = Hm, Ym = Ve, Wm = Ta;
function Km(e, t) {
  return Ym(e, Wm(e), t);
}
var Xm = Km, Zm = _r, Jm = q;
function eg(e, t, r) {
  var n = t(e);
  return Jm(e) ? n : Zm(n, r(e));
}
var Ia = eg, tg = Ia, rg = xr, ng = Ge;
function ag(e) {
  return tg(e, ng, rg);
}
var Fa = ag, ig = Ia, sg = Ta, og = Tt;
function lg(e) {
  return ig(e, og, sg);
}
var cg = lg, ug = Object.prototype, dg = ug.hasOwnProperty;
function pg(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && dg.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var fg = pg, hg = re, mg = hg.Uint8Array, Aa = mg, pn = Aa;
function gg(e) {
  var t = new e.constructor(e.byteLength);
  return new pn(t).set(new pn(e)), t;
}
var Cr = gg, yg = Cr;
function bg(e, t) {
  var r = t ? yg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var vg = bg, Eg = /\w*$/;
function Sg(e) {
  var t = new e.constructor(e.source, Eg.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var _g = Sg, fn = Ce, hn = fn ? fn.prototype : void 0, mn = hn ? hn.valueOf : void 0;
function $g(e) {
  return mn ? Object(mn.call(e)) : {};
}
var xg = $g, Cg = Cr;
function wg(e, t) {
  var r = t ? Cg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Tg = wg, Ig = Cr, Fg = vg, Ag = _g, Og = xg, Rg = Tg, kg = "[object Boolean]", Pg = "[object Date]", Dg = "[object Map]", Lg = "[object Number]", Ng = "[object RegExp]", Bg = "[object Set]", Ug = "[object String]", zg = "[object Symbol]", Mg = "[object ArrayBuffer]", jg = "[object DataView]", Qg = "[object Float32Array]", qg = "[object Float64Array]", Vg = "[object Int8Array]", Gg = "[object Int16Array]", Hg = "[object Int32Array]", Yg = "[object Uint8Array]", Wg = "[object Uint8ClampedArray]", Kg = "[object Uint16Array]", Xg = "[object Uint32Array]";
function Zg(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Mg:
      return Ig(e);
    case kg:
    case Pg:
      return new n(+e);
    case jg:
      return Fg(e, r);
    case Qg:
    case qg:
    case Vg:
    case Gg:
    case Hg:
    case Yg:
    case Wg:
    case Kg:
    case Xg:
      return Rg(e, r);
    case Dg:
      return new n();
    case Lg:
    case Ug:
      return new n(e);
    case Ng:
      return Ag(e);
    case Bg:
      return new n();
    case zg:
      return Og(e);
  }
}
var Jg = Zg, ey = se, gn = Object.create, ty = function() {
  function e() {
  }
  return function(t) {
    if (!ey(t))
      return {};
    if (gn)
      return gn(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), ry = ty, ny = ry, ay = wa, iy = mt;
function sy(e) {
  return typeof e.constructor == "function" && !iy(e) ? ny(ay(e)) : {};
}
var oy = sy, ly = je, cy = ne, uy = "[object Map]";
function dy(e) {
  return cy(e) && ly(e) == uy;
}
var py = dy, fy = py, hy = dr, yn = pr, bn = yn && yn.isMap, my = bn ? hy(bn) : fy, gy = my, yy = je, by = ne, vy = "[object Set]";
function Ey(e) {
  return by(e) && yy(e) == vy;
}
var Sy = Ey, _y = Sy, $y = dr, vn = pr, En = vn && vn.isSet, xy = En ? $y(En) : _y, Cy = xy, wy = $r, Ty = pm, Iy = Er, Fy = Em, Ay = xm, Oy = Cm, Ry = Tm, ky = Um, Py = Xm, Dy = Fa, Ly = cg, Ny = je, By = fg, Uy = Jg, zy = oy, My = q, jy = bt, Qy = gy, qy = se, Vy = Cy, Gy = Ge, Hy = Tt, Yy = 1, Wy = 2, Ky = 4, Oa = "[object Arguments]", Xy = "[object Array]", Zy = "[object Boolean]", Jy = "[object Date]", eb = "[object Error]", Ra = "[object Function]", tb = "[object GeneratorFunction]", rb = "[object Map]", nb = "[object Number]", ka = "[object Object]", ab = "[object RegExp]", ib = "[object Set]", sb = "[object String]", ob = "[object Symbol]", lb = "[object WeakMap]", cb = "[object ArrayBuffer]", ub = "[object DataView]", db = "[object Float32Array]", pb = "[object Float64Array]", fb = "[object Int8Array]", hb = "[object Int16Array]", mb = "[object Int32Array]", gb = "[object Uint8Array]", yb = "[object Uint8ClampedArray]", bb = "[object Uint16Array]", vb = "[object Uint32Array]", x = {};
x[Oa] = x[Xy] = x[cb] = x[ub] = x[Zy] = x[Jy] = x[db] = x[pb] = x[fb] = x[hb] = x[mb] = x[rb] = x[nb] = x[ka] = x[ab] = x[ib] = x[sb] = x[ob] = x[gb] = x[yb] = x[bb] = x[vb] = !0;
x[eb] = x[Ra] = x[lb] = !1;
function nt(e, t, r, n, a, i) {
  var o, l = t & Yy, c = t & Wy, u = t & Ky;
  if (r && (o = a ? r(e, n, a, i) : r(e)), o !== void 0)
    return o;
  if (!qy(e))
    return e;
  var d = My(e);
  if (d) {
    if (o = By(e), !l)
      return Ry(e, o);
  } else {
    var p = Ny(e), f = p == Ra || p == tb;
    if (jy(e))
      return Oy(e, l);
    if (p == ka || p == Oa || f && !a) {
      if (o = c || f ? {} : zy(e), !l)
        return c ? Py(e, Ay(o, e)) : ky(e, Fy(o, e));
    } else {
      if (!x[p])
        return a ? e : {};
      o = Uy(e, p, l);
    }
  }
  i || (i = new wy());
  var h = i.get(e);
  if (h)
    return h;
  i.set(e, o), Vy(e) ? e.forEach(function(E) {
    o.add(nt(E, t, r, E, e, i));
  }) : Qy(e) && e.forEach(function(E, g) {
    o.set(g, nt(E, t, r, g, e, i));
  });
  var y = u ? c ? Ly : Dy : c ? Hy : Gy, m = d ? void 0 : y(e);
  return Ty(m || e, function(E, g) {
    m && (g = E, E = e[g]), Iy(o, g, nt(E, t, r, g, e, i));
  }), o;
}
var Eb = nt, Sb = Eb, _b = 1, $b = 4;
function xb(e) {
  return Sb(e, _b | $b);
}
var Cb = xb;
const $e = /* @__PURE__ */ P(Cb);
var wb = pe, Tb = ne, Ib = "[object Boolean]";
function Fb(e) {
  return e === !0 || e === !1 || Tb(e) && wb(e) == Ib;
}
var Ab = Fb;
const Ob = /* @__PURE__ */ P(Ab);
var Rb = pe, kb = q, Pb = ne, Db = "[object String]";
function Lb(e) {
  return typeof e == "string" || !kb(e) && Pb(e) && Rb(e) == Db;
}
var Nb = Lb;
const Bb = /* @__PURE__ */ P(Nb);
var Ub = pe, zb = ne, Mb = "[object Number]";
function jb(e) {
  return typeof e == "number" || zb(e) && Ub(e) == Mb;
}
var Qb = jb;
const qb = /* @__PURE__ */ P(Qb);
function wr() {
}
wr.prototype = new Error();
class Sn {
  constructor() {
    this._addFilter = (t, r) => {
      if (!Array.isArray(t))
        throw new Error(`Filter value "${t}" in query state must be an array.`);
      if (!(t.length === 2 || t.length === 3))
        throw new Error(`Filter value "${t}" in query state must be an array of 2 or 3 elements`);
      const n = t.length === 3;
      var a = t[0], i = t[1];
      if (n) {
        if (!Array.isArray(t[2]))
          throw new Error(`Filter value "${t[2]}" in query state must be an array.`);
        i = i + "::" + t[2][1];
      }
      a in r ? r[a].push(i) : r[a] = [i];
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
      sortOrder: a,
      page: i,
      size: o,
      filters: l,
      hiddenParams: c
    } = t;
    let u = {};
    r !== null && (u.q = r), n !== null && (u.sort = n, a !== null && (u.sort = a === "desc" ? `-${n}` : n)), i > 0 && (u.page = i), o > 0 && (u.size = o), ae(c) || ot(u, this._addFilters(c));
    const d = this._addFilters(l);
    return ot(u, d), xe.stringify(u, {
      arrayFormat: "repeat"
    });
  }
}
class Vb {
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
      ...a
    } = t;
    return {
      aggregations: r || {},
      hits: n.hits,
      total: n.total,
      extras: a
    };
  }
}
function Xe(e, t) {
  return e.indexOf(t) === 0 && (e.length === t.length || e.indexOf(t + "&") === 0);
}
function Dt(e) {
  return xe.stringify({
    q: e
  });
}
function Gb(e) {
  return xe.parse(e).q;
}
function Pa(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = Pa(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function _n(e, t) {
  const r = Dt(e), n = t.map((o) => Dt(o));
  let a = !1;
  const i = n.filter((o) => {
    const l = Xe(o, r), c = Xe(r, o);
    return l && !a && (a = !0), !l && !c;
  });
  if (!a)
    i.push(r);
  else if (e.length === 3) {
    const l = Pa(e), c = Dt(l), u = i.some((d) => {
      const p = Xe(d, c), f = Xe(c, d);
      return p || f;
    });
    (ae(i) || !u) && i.push(c);
  }
  return i.map((o) => Gb(o));
}
const Da = (e, t) => {
  if (ae(e))
    return;
  if (!ma(oh(e)))
    return _n(e, t);
  let r = t;
  for (const n of e)
    r = _n(n, r);
  return r;
}, La = (e, t, r) => {
  let n = Qh(t, r);
  return ae(n.filters) || (n.filters = Da(n.filters, e.filters)), n;
}, ct = {
  queryString: "",
  suggestions: [],
  sortBy: null,
  sortOrder: null,
  page: -1,
  size: -1,
  filters: [],
  hiddenParams: [],
  layout: null
}, Na = Object.keys(ct), Hb = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, Yb = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class Wb {
  constructor() {
    this._checkFilter = (t) => {
      if (!Array.isArray(t))
        throw new Error(`Filter value "${t}" in query state must be an array.`);
      if (!(t.length === 2 || t.length === 3))
        throw new Error(`Filter value "${t}" in query state must be an array of 2 or 3 elements`);
    }, this._addFilter = (t, r) => {
      this._checkFilter(t);
      const n = t[0], a = t[1], i = t.length === 3;
      i && this._checkFilter(t[2]), n in r ? i ? r[n].push(a + "::" + t[2][1]) : r[n].push(a) : i ? r[n] = [a + "::" + t[2][1]] : r[n] = [a];
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
      sortOrder: a,
      page: i,
      size: o,
      filters: l,
      hiddenParams: c
    } = t;
    let u = {};
    r !== null && (u.q = r), n !== null && (u.sort = n, a !== null && (u.sort = a === "desc" ? `-${n}` : n)), i > 0 && (u.page = i), o > 0 && (u.size = o), ae(c) || ot(u, this._addFilters(c));
    const d = this._addFilters(l);
    return ot(u, d), xe.stringify(u, {
      arrayFormat: "repeat"
    });
  }
}
class Ba {
  constructor(t) {
    this.axiosConfig = Le(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = rt.CancelToken;
  }
  validateAxiosConfig() {
    if (!Lp(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = Le(t, "interceptors.request", void 0), this.responseInterceptor = Le(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: Wb,
      InvenioRequestSerializer: Sn
    };
    return typeof t == "string" ? r[t] : t || Sn;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), a = Le(t, "invenio.responseSerializer", Vb);
    this.requestSerializer = new n(), this.responseSerializer = new a();
  }
  initAxios() {
    const t = {
      paramsSerializer: this.requestSerializer.serialize,
      ...this.axiosConfig
    };
    this.http = rt.create(t), this.addInterceptors();
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
      const n = La(t, r.extras, Na);
      return ae(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw rt.isCancel(r) ? new wr() : r;
    }
  }
}
class Kb {
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
          return qb(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const a = ma(n) ? n : [n], i = ":", o = t.urlFilterSeparator, l = `[^\\${i}\\${o}]*`, c = `${l}\\${i}${l}`, u = `${c}(\\${o}${c})*`, d = new RegExp(`^${u}$`);
          return a.every((p) => String(p).match(d));
        }
        default:
          return !1;
      }
    };
  }
}
const Xb = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, $n = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class Zb {
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
    const r = xe.parse(t, {
      ignoreQueryPrefix: !0
    }), n = {};
    return Object.entries(r).forEach((a) => {
      const i = a[0], o = a[1];
      n[i] = this._convertValue(i, o);
    }), n;
  }
}
class Jb {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (this._filterListToString = (r) => {
      const n = r.length === 3 ? this.urlFilterSeparator.concat(this._filterListToString(r[2])) : "";
      return `${r[0]}:${r[1]}${n}`;
    }, this._mapQueryStateToUrlParams = (r) => {
      const n = {};
      Object.keys(r).filter((i) => i in this.urlParamsMapping).filter((i) => (i === "page" || i === "size") && r[i] <= 0 || i === "hiddenParams" ? !1 : r[i] !== null).forEach((i) => {
        const o = this.urlParamsMapping[i];
        i === "filters" ? n[o] = r[i].map((l) => this._filterListToString(l)) : n[o] = r[i];
      });
      const a = (i, o) => {
        const l = "q";
        return i === l ? -1 : o === l ? 1 : i.localeCompare(o);
      };
      return xe.stringify(n, {
        addQueryPrefix: !0,
        skipNulls: !0,
        indices: !1,
        // order for filters params is not important, remove indices
        sort: a
      });
    }, this._filterStringToList = (r) => {
      const n = r.indexOf(this.urlFilterSeparator), a = n > -1, i = r.indexOf(":");
      if (i === -1)
        throw new Error(`Filter "${r}" not parsable. Format expected: "<agg name>:<value>"`);
      const o = r.slice(0, i), l = a ? n : r.length, c = r.slice(i + 1, l);
      let u = [o, c];
      if (a) {
        const d = r.slice(n + 1, r.length);
        u.push(this._filterStringToList(d));
      }
      return u;
    }, this._mapUrlParamsToQueryState = (r) => {
      const n = {};
      return Object.keys(r).forEach((a) => {
        const i = this.fromUrlParamsMapping[a];
        this.urlParamValidator.isValid(this, i, r[a]) ? (n[i] = r[a], i === "filters" && (Array.isArray(r[a]) || (r[a] = [r[a]]), n[i] = r[a].map((o) => this._filterStringToList(o)))) : console.warn(`URL parameter '${a}' with value '${r[a]}' is incorrect and was ignored.`);
      }), n;
    }, this._mergeParamsIntoState = (r, n) => {
      const a = $e(n);
      return Object.keys(r).forEach((i) => {
        a[i] = r[i];
      }), a;
    }, this.urlParamsMapping = Wo(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !Ob(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !Bb(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new Kb(), this.urlParser = t.urlParser || new Zb(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), a = this._mergeParamsIntoState(n, t), i = this._mapQueryStateToUrlParams(a);
    return $n(i), a;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      Xb(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    $n(r);
  }
}
const ev = "SET_QUERY_COMPONENT_INITIAL_STATE", Ua = "SET_QUERY_STRING", Tr = "SET_QUERY_SORTING", Ir = "SET_QUERY_SORT_BY", Fr = "SET_QUERY_SORT_ORDER", He = "SET_QUERY_STATE", za = "SET_QUERY_PAGINATION_PAGE", Ma = "SET_QUERY_PAGINATION_SIZE", ja = "SET_QUERY_FILTERS", Qa = "SET_QUERY_SUGGESTIONS", qa = "SET_SUGGESTION_STRING", Va = "CLEAR_QUERY_SUGGESTIONS", Ga = "RESULTS_LOADING", Ha = "RESULTS_FETCH_SUCCESS", Ya = "RESULTS_FETCH_ERROR", Yt = "RESULTS_UPDATE_LAYOUT", Wa = "RESET_QUERY", tv = (e) => (t) => {
  e && t(ee({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, Ka = (e) => (t) => {
  t({
    type: He,
    payload: e
  }), t(ee());
}, Xa = (e) => (t) => {
  t({
    type: Ua,
    payload: e
  }), t(ee());
}, rv = (e, t) => (r) => {
  r({
    type: Tr,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(ee());
}, nv = (e) => (t) => {
  t({
    type: Ir,
    payload: e
  }), t(ee());
}, av = (e) => (t) => {
  t({
    type: Fr,
    payload: e
  }), t(ee());
}, iv = (e) => (t) => {
  t({
    type: za,
    payload: e
  }), t(ee());
}, sv = (e) => (t) => {
  t({
    type: Ma,
    payload: e
  }), t(ee());
}, Ar = (e) => (t) => {
  t({
    type: ja,
    payload: e
  }), t(ee());
}, ov = (e) => async (t, r, n) => {
  const a = n.urlHandlerApi;
  if (a) {
    await t({
      type: Yt,
      payload: e
    });
    const i = r().query;
    a.set(i);
  } else
    t({
      type: Yt,
      payload: e
    });
}, lv = () => (e, t, r) => {
  e({
    type: Wa,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(ee());
}, cv = (e, t, r, n) => {
  const a = t.urlHandlerApi;
  a && (r ? a.replace(e) : n && a.set(e));
}, uv = (e, t, r, n) => {
  const a = r().query;
  t({
    type: He,
    payload: {
      ...a,
      ...e.newQueryState
    }
  });
  const i = $e(r().query), o = n.urlHandlerApi;
  return o && o.replace(i), delete e.newStateQuery, e;
}, dv = (e, t, r, n) => {
  function a(l, c, u, d) {
    l.queryString === "" ? (l.sortBy = u.defaultSortingOnEmptyQueryString.sortBy, l.sortOrder = u.defaultSortingOnEmptyQueryString.sortOrder) : (l.sortBy = c.initialSortBy, l.sortOrder = c.initialSortOrder), d({
      type: He,
      payload: l
    });
  }
  function i(l, c, u, d) {
    c.hasUserChangedSorting || a(l, c, u, d);
  }
  !ae(r.defaultSortingOnEmptyQueryString) && i(e, t, r, n);
}, ee = function() {
  let {
    shouldUpdateUrlQueryString: e = !0,
    shouldReplaceUrlQueryString: t = !1
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return async (r, n, a) => {
    const i = n().app;
    let o = $e(n().query);
    dv(o, i, a, r), o = $e(n().query), cv(o, a, t, e), r({
      type: Ga
    });
    try {
      let c = await a.searchApi.search(o);
      "newQueryState" in c && (c = uv($e(c), r, n, a)), r({
        type: Ha,
        payload: {
          aggregations: c.aggregations,
          hits: c.hits,
          total: c.total
        }
      });
    } catch (l) {
      if (l instanceof wr) {
        console.debug(l);
        return;
      } else
        console.error(l), r({
          type: Ya,
          payload: {
            error: l
          }
        });
    }
  };
}, pv = (e) => (t) => {
  t({
    type: qa,
    payload: e
  }), t(fv());
}, fv = () => async (e, t, r) => {
  const n = $e(t().query), a = r.suggestionApi;
  try {
    const i = await a.search(n);
    e({
      type: Qa,
      payload: {
        suggestions: i.suggestions
      }
    });
  } catch (i) {
    console.error("Could not load suggestions due to: " + i);
  }
}, hv = () => (e) => {
  e({
    type: Va,
    payload: {
      suggestions: []
    }
  });
}, mv = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: He,
      payload: n
    }), e(ee({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, C = /* @__PURE__ */ s.createContext({}), gv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
    case Tr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Ir:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Fr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    default:
      return e;
  }
}, yv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Ua:
      return {
        ...e,
        queryString: t.payload,
        page: 1
      };
    case Tr:
      return {
        ...e,
        sortBy: t.payload.sortBy,
        sortOrder: t.payload.sortOrder,
        _sortUserChanged: !0,
        page: 1
      };
    case Ir:
      return {
        ...e,
        sortBy: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case Fr:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case za:
      return {
        ...e,
        page: t.payload
      };
    case Ma:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case ja:
      return {
        ...e,
        page: 1,
        filters: Da(t.payload, e.filters)
      };
    case Qa:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case Va:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case qa:
      return {
        ...e,
        suggestionString: t.payload
      };
    case ev:
      return {
        ...e,
        ...t.payload
      };
    case He:
      return {
        ...e,
        ...ct,
        ...La(ct, t.payload, Na)
      };
    case Yt:
      return {
        ...e,
        layout: t.payload
      };
    case Wa:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, bv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Ga:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case Ha:
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
    case Ya:
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
var vv = lo({
  app: gv,
  query: yv,
  results: bv
});
function xn(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: a,
    sortOrder: i
  } = t;
  return r !== a || n !== i;
}
function Ev(e, t, r) {
  const n = xn(r, t), a = !ae(e.defaultSortingOnEmptyQueryString);
  let i = !1;
  return a && (i = xn(r, e.defaultSortingOnEmptyQueryString)), n && i;
}
function Sv(e) {
  const t = {
    ...ct,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = Ev(e, t, r), a = {
    ...Yb,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, i = {
    ...Hb,
    loading: e.searchOnInit
  };
  return {
    app: a,
    query: r,
    results: i
  };
}
function _v(e) {
  const t = Sv(e);
  return co(vv, t, uo(po.withExtraArgument(e)));
}
function Cn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class Or extends L {
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
        appName: a
      } = this.context;
      if (!a)
        this.updateQueryState(n.searchQuery);
      else {
        const o = n.appName;
        o === a ? this.updateQueryState(n.searchQuery) : console.debug(`React-SearchKit '${a}': ignoring event sent for app '${o}'`);
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
Or.defaultProps = {
  searchOnInit: !0,
  eventListenerEnabled: !1
};
Or.contextType = C;
var $v = v.component("Bootstrap", Or);
const xv = (e) => ({
  onAppInitialized: (t) => e(tv(t)),
  updateQueryState: (t) => e(Ka(t)),
  searchOnUrlQueryStringChanged: () => e(mv())
}), Cv = k(null, xv)($v);
class Rr extends L {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new Jb(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = _v(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
  }
  render() {
    const {
      appName: t,
      children: r,
      eventListenerEnabled: n,
      overridableId: a,
      searchOnInit: i
    } = this.props, o = {
      appName: t,
      buildUID: (c, u) => Cn(c, u, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, l = Cn("ReactSearchKit.children", a, t);
    return /* @__PURE__ */ s.createElement(C.Provider, {
      value: o
    }, /* @__PURE__ */ s.createElement(eo, {
      store: this.store
    }, /* @__PURE__ */ s.createElement(Cv, {
      searchOnInit: i,
      eventListenerEnabled: n
    }, /* @__PURE__ */ s.createElement(v, {
      id: l
    }, r))));
  }
}
Rr.defaultProps = {
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
Rr.contextType = C;
var wv = v.component("ReactSearchKit", Rr);
class Za extends L {
  constructor(t) {
    super(t), this._getLabel = (r) => {
      const n = r[0];
      let a = r[1], i = [n, a];
      if (r.length === 3) {
        const {
          label: l,
          activeFilter: c
        } = this._getLabel(r[2]);
        a = `${a}.${l}`, i.push(c);
      }
      return {
        label: a,
        activeFilter: i
      };
    }, this.updateQueryFilters = t.updateQueryFilters;
  }
  render() {
    const {
      filters: t,
      overridableId: r
    } = this.props;
    return !!t.length && /* @__PURE__ */ s.createElement(Ja, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
Za.defaultProps = {
  overridableId: ""
};
const Ja = (e) => {
  let {
    overridableId: t,
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  } = e;
  const {
    buildUID: i
  } = F(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: i("ActiveFilters.element", t),
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  }, /* @__PURE__ */ s.createElement(s.Fragment, null, r.map((o, l) => {
    const {
      label: c,
      activeFilter: u
    } = a(o);
    return (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ s.createElement(j, {
        image: !0,
        key: l,
        onClick: () => n(u)
      }, c, /* @__PURE__ */ s.createElement(_, {
        name: "delete"
      }))
    );
  })));
};
Ja.defaultProps = {
  overridableId: ""
};
var Tv = v.component("ActiveFilters", Za);
const Iv = (e) => ({
  updateQueryFilters: (t) => e(Ar(t))
});
k((e) => ({
  filters: e.query.filters
}), Iv)(Tv);
function Fv(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var Av = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
Fv(Av);
class ei extends L {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? fo.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ s.createElement(Rv, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
ei.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const Ov = (e) => /* @__PURE__ */ s.createElement(ei, Object.assign({
  key: e.queryString
}, e)), Rv = (e) => {
  let {
    overridableId: t,
    placeholder: r,
    queryString: n,
    querySuggestions: a,
    onInputChange: i,
    executeSearch: o,
    ...l
  } = e;
  const {
    buildUID: c
  } = F(C), u = (p, f) => {
    o();
  }, d = (p, f) => {
    p.key === "Enter" && o();
  };
  return /* @__PURE__ */ s.createElement(v, Object.assign({
    id: c("AutocompleteSearchBar.element", t)
  }, l), /* @__PURE__ */ s.createElement("div", {
    className: "AutoCompleteText"
  }, /* @__PURE__ */ s.createElement(na, {
    action: {
      content: "Search",
      onClick: u
    },
    fluid: !0,
    placeholder: r,
    onChange: (p, f) => {
      let {
        value: h
      } = f;
      i(h);
    },
    value: n,
    onKeyPress: d
  }), /* @__PURE__ */ s.createElement(kv, {
    querySuggestions: a,
    overridableId: t
  })));
}, kv = (e) => {
  let {
    overridableId: t,
    ...r
  } = e;
  const {
    querySuggestions: n
  } = r, {
    buildUID: a
  } = F(C), i = async (o) => {
    await (void 0).setState({
      currentValue: o
    }), (void 0).clearSuggestions(), (void 0).executeSearch();
  };
  return n.length === 0 ? null : /* @__PURE__ */ s.createElement(v, Object.assign({
    id: a("AutocompleteSearchBar.suggestions", t)
  }, r), /* @__PURE__ */ s.createElement("ul", null, n.map((o) => /* @__PURE__ */ s.createElement(z, {
    as: "li",
    onClick: () => i(o),
    key: o
  }, o))));
};
var Pv = v.component("AutocompleteSearchBar", Ov);
const Dv = (e) => ({
  updateQueryString: (t) => e(Xa(t)),
  updateSuggestions: (t) => e(pv(t)),
  clearSuggestions: () => e(hv())
}), Lv = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
k(Lv, Dv)(Pv);
class It extends L {
  constructor(t) {
    super(t), this._isSelected = (r, n, a) => a.filter((i) => i[0] === r && i[1] === n).length >= 1, this.getChildAggCmps = (r, n) => {
      const a = this.childAgg && this.childAgg.aggName in r;
      let i = [];
      if (a) {
        const o = r[this.childAgg.aggName].buckets;
        n.forEach((c) => {
          const u = c[0] === this.aggName, d = c[1] === r.key, p = c.length === 3;
          u && d && p && i.push(c[2]);
        });
        const l = (c) => {
          this.onFilterClicked([this.aggName, r.key, c]);
        };
        return /* @__PURE__ */ s.createElement(It, {
          buckets: o,
          selectedFilters: i,
          field: this.childAgg.field,
          aggName: this.childAgg.aggName,
          childAgg: this.childAgg.childAgg,
          onFilterClicked: l
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
    } = this.props, a = t.map((i) => {
      const o = i.key_as_string ? i.key_as_string : i.key, l = this._isSelected(this.aggName, o, r), c = (d) => {
        this.onFilterClicked([this.aggName, d]);
      }, u = (d) => this.getChildAggCmps(d, r);
      return /* @__PURE__ */ s.createElement(ri, {
        key: i.key,
        bucket: i,
        keyField: o,
        isSelected: l,
        onFilterClicked: c,
        getChildAggCmps: u,
        overridableId: n
      });
    });
    return /* @__PURE__ */ s.createElement(ti, {
      valuesCmp: a,
      overridableId: n
    });
  }
}
It.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const ti = (e) => {
  let {
    valuesCmp: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: n("BucketAggregationContainer.element", r),
    valuesCmp: t
  }, /* @__PURE__ */ s.createElement($, null, t));
};
ti.defaultProps = {
  overridableId: ""
};
const ri = (e) => {
  let {
    bucket: t,
    isSelected: r,
    onFilterClicked: n,
    getChildAggCmps: a,
    overridableId: i,
    keyField: o
  } = e;
  const {
    buildUID: l,
    nextComponentIndex: c
  } = F(C), u = t.label ? t.label : `${o} (${t.doc_count.toLocaleString("en-US")})`, d = a(t);
  return /* @__PURE__ */ s.createElement(v, {
    id: l("BucketAggregationValues.element", i),
    bucket: t,
    label: u,
    onFilterClicked: n,
    isSelected: r,
    childAggCmps: d
  }, /* @__PURE__ */ s.createElement($.Item, {
    key: t.key
  }, /* @__PURE__ */ s.createElement(lr, {
    label: u,
    id: c(),
    value: t.key,
    onClick: () => n(t.key),
    checked: r
  }), d));
};
ri.defaultProps = {
  overridableId: ""
};
var Nv = v.component("BucketAggregationValues", It);
class ni extends L {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: a
      } = this.props;
      return /* @__PURE__ */ s.createElement(Nv, {
        buckets: r,
        selectedFilters: n,
        field: this.agg.field,
        aggName: this.agg.aggName,
        childAgg: this.agg.childAgg,
        onFilterClicked: this.onFilterClicked,
        overridableId: a
      });
    }, this._getSelectedFilters = (r) => r.filter((n) => n[0] === this.agg.aggName), this._getResultBuckets = (r) => {
      const n = Le(r, this.agg.aggName, {});
      return "buckets" in n ? (Array.isArray(n.buckets) || (n.buckets = Object.entries(n.buckets).map((a) => {
        let [i, o] = a;
        return {
          ...o,
          key: i
        };
      })), n.buckets) : [];
    }, this.title = t.title, this.agg = t.agg, this.updateQueryFilters = t.updateQueryFilters;
  }
  render() {
    const {
      userSelectionFilters: t,
      resultsAggregations: r,
      overridableId: n,
      ...a
    } = this.props, i = this._getSelectedFilters(t), o = this._getResultBuckets(r), l = o.length ? this._renderValues(o, i) : null;
    return /* @__PURE__ */ s.createElement(ai, Object.assign({
      title: this.title,
      containerCmp: l,
      overridableId: n
    }, a));
  }
}
ni.defaultProps = {
  overridableId: ""
};
const ai = (e) => {
  let {
    overridableId: t,
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: i
  } = e;
  const {
    buildUID: o
  } = F(C);
  return a && /* @__PURE__ */ s.createElement(v, {
    id: o("BucketAggregation.element", t),
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: i
  }, /* @__PURE__ */ s.createElement(D, null, /* @__PURE__ */ s.createElement(D.Content, null, /* @__PURE__ */ s.createElement(D.Header, null, n)), /* @__PURE__ */ s.createElement(D.Content, null, a)));
};
ai.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var Bv = v.component("BucketAggregation", ni);
const Uv = (e) => ({
  updateQueryFilters: (t) => e(Ar(t))
}), zv = k((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), Uv)(Bv);
class ii extends L {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
ii.defaultProps = {
  condition: !0
};
var X = v.component("ShouldRender", ii);
class si extends L {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: a
    } = this.props;
    return /* @__PURE__ */ s.createElement(X, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ s.createElement(oi, {
      totalResults: r,
      overridableId: a
    })));
  }
}
si.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const oi = (e) => {
  let {
    totalResults: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(C), a = n("Count.element", r);
  return /* @__PURE__ */ s.createElement(v, {
    id: a,
    totalResults: t
  }, /* @__PURE__ */ s.createElement(j, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
oi.defaultProps = {
  overridableId: ""
};
var Mv = v.component("Count", si);
k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(Mv);
class li extends L {
  constructor(t) {
    super(t), this.resetQuery = t.resetQuery;
  }
  render() {
    const {
      loading: t,
      totalResults: r,
      error: n,
      queryString: a,
      extraContent: i,
      overridableId: o,
      userSelectionFilters: l,
      ...c
    } = this.props;
    return /* @__PURE__ */ s.createElement(X, {
      condition: !t && ae(n) && r === 0
    }, /* @__PURE__ */ s.createElement(ci, Object.assign({}, c, {
      queryString: a,
      resetQuery: this.resetQuery,
      extraContent: i,
      userSelectionFilters: l,
      overridableId: o
    })));
  }
}
li.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const ci = (e) => {
  let {
    overridableId: t,
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: i
  } = e;
  const {
    buildUID: o
  } = F(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: o("EmptyResults.element", t),
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: i
  }, /* @__PURE__ */ s.createElement(K, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ s.createElement(de, {
    icon: !0
  }, /* @__PURE__ */ s.createElement(_, {
    name: "search"
  }), "No results found!"), r && /* @__PURE__ */ s.createElement("em", null, 'Current search "', r, '"'), /* @__PURE__ */ s.createElement("br", null), /* @__PURE__ */ s.createElement(z, {
    primary: !0,
    onClick: () => n()
  }, "Clear query"), a));
};
ci.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var jv = v.component("EmptyResults", li);
const Qv = (e) => ({
  resetQuery: () => e(lv())
}), qv = k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), Qv)(jv);
function ui(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ s.createElement(X, {
    condition: !t && !ae(r)
  }, /* @__PURE__ */ s.createElement(di, {
    error: r,
    overridableId: n
  }));
}
ui.defaultProps = {
  overridableId: ""
};
const di = (e) => {
  let {
    error: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ s.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
di.defaultProps = {
  overridableId: ""
};
var Vv = v.component("Error", ui);
k((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(Vv);
function kr(e) {
  const t = (a) => /* @__PURE__ */ s.createElement(e, a);
  return k((a) => ({
    currentQueryState: a.query,
    currentResultsState: a.results
  }), (a) => ({
    updateQueryState: (i) => a(Ka(i))
  }))(t);
}
class pi extends L {
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
      overridableId: a
    } = this.props;
    return /* @__PURE__ */ s.createElement(X, {
      condition: t !== null && !r && n > 0
    }, /* @__PURE__ */ s.createElement(fi, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: a
    }));
  }
}
pi.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
const fi = (e) => {
  let {
    overridableId: t,
    currentLayout: r,
    onLayoutChange: n
  } = e;
  const {
    buildUID: a
  } = F(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: a("LayoutSwitcher.element", t),
    currentLayout: r,
    onLayoutChange: n
  }, /* @__PURE__ */ s.createElement(Ot, {
    compact: !0,
    icon: !0
  }, /* @__PURE__ */ s.createElement(Ot.Item, {
    name: "list",
    active: r === "list",
    onClick: (i, o) => {
      let {
        name: l
      } = o;
      return n(l);
    }
  }, /* @__PURE__ */ s.createElement(_, {
    name: "list layout"
  })), /* @__PURE__ */ s.createElement(Ot.Item, {
    name: "grid",
    active: r === "grid",
    onClick: (i, o) => {
      let {
        name: l
      } = o;
      return n(l);
    }
  }, /* @__PURE__ */ s.createElement(_, {
    name: "grid layout"
  }))));
};
fi.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var Gv = v.component("LayoutSwitcher", pi);
const Hv = (e) => ({
  updateLayout: (t) => e(ov(t))
});
k((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), Hv)(Gv);
const wn = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class hi extends L {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...wn,
      ...t.options
    } : wn;
  }
  render() {
    const {
      loading: t,
      totalResults: r,
      currentPage: n,
      currentSize: a,
      overridableId: i,
      showWhenOnlyOnePage: o
    } = this.props;
    return /* @__PURE__ */ s.createElement(X, {
      condition: !t && n > -1 && a > -1 && o ? r > 0 : r > a
    }, /* @__PURE__ */ s.createElement(mi, {
      currentPage: n,
      currentSize: a,
      totalResults: r,
      onPageChange: this.onPageChange,
      options: this.options,
      overridableId: i,
      maxTotalResults: this.options.maxTotalResults
    }));
  }
}
hi.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const mi = (e) => {
  let {
    overridableId: t,
    currentPage: r,
    currentSize: n,
    totalResults: a,
    onPageChange: i,
    options: o,
    maxTotalResults: l,
    ...c
  } = e;
  const u = o.boundaryRangeCount, d = o.siblingRangeCount, p = o.showEllipsis, f = o.showFirst, h = o.showLast, y = o.showPrev, m = o.showNext, E = o.size, g = Math.floor(l / n), S = Math.ceil(a / n), A = Math.min(S, g), {
    buildUID: B
  } = F(C);
  return r > S && i(S), /* @__PURE__ */ s.createElement(v, {
    id: B("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: a,
    options: o,
    onPageChange: i
  }, /* @__PURE__ */ s.createElement(to, Object.assign({
    activePage: r,
    totalPages: A,
    onPageChange: (te, O) => {
      let {
        activePage: fe
      } = O;
      return i(fe);
    },
    boundaryRange: u,
    siblingRange: d,
    ellipsisItem: p ? void 0 : null,
    firstItem: f ? void 0 : null,
    lastItem: h ? void 0 : null,
    prevItem: y ? void 0 : null,
    nextItem: m ? void 0 : null,
    size: E
  }, c)));
};
mi.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var Yv = v.component("Pagination", hi);
const Wv = (e) => ({
  updateQueryPage: (t) => e(iv(t))
}), Kv = k((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), Wv)(Yv);
function gi(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    resultsPerRow: a,
    overridableId: i,
    onResultsRendered: o
  } = e;
  return Me(() => {
    o && o();
  }, [o]), /* @__PURE__ */ s.createElement(X, {
    condition: !t && r > 0
  }, /* @__PURE__ */ s.createElement(yi, {
    results: n,
    resultsPerRow: a,
    overridableId: i
  }));
}
gi.defaultProps = {
  resultsPerRow: 3,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const Xv = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: n("ResultsGrid.item", r),
    result: t
  }, /* @__PURE__ */ s.createElement(D, {
    fluid: !0,
    href: `#${t.id}`
  }, /* @__PURE__ */ s.createElement(ro, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ s.createElement(D.Content, null, /* @__PURE__ */ s.createElement(D.Header, null, t.title), /* @__PURE__ */ s.createElement(D.Description, null, t.description))));
}, yi = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: a
  } = F(C), i = r.map((o, l) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ s.createElement(Xv, {
      key: l,
      result: o,
      overridableId: t
    })
  ));
  return /* @__PURE__ */ s.createElement(v, {
    id: a("ResultsGrid.container", t),
    results: i,
    resultsPerRow: n
  }, /* @__PURE__ */ s.createElement(D.Group, {
    itemsPerRow: n
  }, i));
};
yi.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var Zv = v.component("ResultsGrid", gi);
const Jv = k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(Zv);
function bi(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: a,
    onResultsRendered: i
  } = e;
  return Me(() => {
    i && i();
  }, [i]), /* @__PURE__ */ s.createElement(X, {
    condition: !t && r > 0
  }, /* @__PURE__ */ s.createElement(vi, {
    results: n,
    overridableId: a
  }));
}
bi.defaultProps = {
  overridableId: "",
  onResultsRendered: () => {
  }
};
const eE = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ s.createElement(ve, {
    href: `#${t.id}`
  }, /* @__PURE__ */ s.createElement(ve.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ s.createElement(ve.Content, null, /* @__PURE__ */ s.createElement(ve.Header, null, t.title), /* @__PURE__ */ s.createElement(ve.Description, null, t.description))));
}, vi = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(C), a = t.map((i, o) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ s.createElement(eE, {
      result: i,
      key: o,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ s.createElement(v, {
    id: n("ResultsList.container", r),
    results: a
  }, /* @__PURE__ */ s.createElement(ve.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, a));
};
vi.defaultProps = {
  overridableId: ""
};
var tE = v.component("ResultsList", bi);
const Ei = k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(tE);
function Si(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ s.createElement(_i, {
    overridableId: n
  }) : t;
}
Si.defaultProps = {
  overridableId: ""
};
const _i = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = F(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ s.createElement(aa, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
_i.defaultProps = {
  overridableId: ""
};
var rE = v.component("ResultsLoader", Si);
const nE = k((e) => ({
  loading: e.results.loading
}))(rE);
function $i(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: a,
    onResultsRendered: i
  } = e;
  return /* @__PURE__ */ s.createElement(X, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ s.createElement(xi, {
    layout: n,
    overridableId: a,
    onResultsRendered: i
  }));
}
$i.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const xi = (e) => {
  let {
    layout: t,
    overridableId: r,
    onResultsRendered: n
  } = e;
  const {
    buildUID: a
  } = F(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: a("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ s.createElement(Ei, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ s.createElement(Jv, {
    overridableId: r,
    onResultsRendered: n
  }));
};
xi.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var aE = v.component("ResultsMultiLayout", $i);
k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(aE);
class Ci extends L {
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
      label: a,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l,
      showWhenOnlyOnePage: c
    } = this.props;
    return /* @__PURE__ */ s.createElement(X, {
      condition: !t && r !== -1 && c ? n > 0 : n > r
    }, a(/* @__PURE__ */ s.createElement(wi, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
Ci.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const wi = (e) => {
  let {
    overridableId: t,
    currentSize: r,
    options: n,
    onValueChange: a,
    ariaLabel: i,
    selectOnNavigation: o
  } = e;
  const {
    buildUID: l
  } = F(C), c = n.map((u, d) => ({
    key: d,
    text: u.text,
    value: u.value
  }));
  return /* @__PURE__ */ s.createElement(v, {
    id: l("ResultsPerPage.element", t),
    currentSize: r,
    options: n,
    onValueChange: a,
    ariaLabel: i,
    selectOnNavigation: o
  }, /* @__PURE__ */ s.createElement(ce, {
    inline: !0,
    compact: !0,
    options: c,
    value: r,
    onChange: (u, d) => {
      let {
        value: p
      } = d;
      return a(p);
    },
    "aria-label": i,
    selectOnNavigation: o
  }));
};
wi.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var iE = v.component("ResultsPerPage", Ci);
const sE = (e) => ({
  updateQuerySize: (t) => e(sv(t))
}), oE = k((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), sE)(iE);
class Ti extends L {
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
      onBtnSearchClick: a,
      onInputChange: i,
      onKeyPress: o,
      overridableId: l,
      placeholder: c,
      uiProps: u
    } = this.props, {
      currentValue: d
    } = this.state;
    return /* @__PURE__ */ s.createElement(Pr, {
      actionProps: t,
      autofocus: r,
      executeSearch: n || this.executeSearch,
      onBtnSearchClick: a || this.onBtnSearchClick,
      onInputChange: i || this.onInputChange,
      onKeyPress: o || this.onKeyPress,
      overridableId: l,
      placeholder: c,
      queryString: d,
      uiProps: u
    });
  }
}
Ti.defaultProps = {
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
const Ii = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ s.createElement(Ti, Object.assign({
    key: t
  }, e));
};
Ii.defaultProps = {
  queryString: ""
};
class Pr extends L {
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
      onKeyPress: a,
      overridableId: i,
      placeholder: o,
      queryString: l,
      uiProps: c
    } = this.props, {
      buildUID: u
    } = this.context;
    return /* @__PURE__ */ s.createElement(v, {
      id: u("SearchBar.element", i),
      queryString: l,
      onBtnSearchClick: r,
      onInputChange: n,
      onKeyPress: a,
      placeholder: o,
      actionProps: t,
      uiProps: c
    }, /* @__PURE__ */ s.createElement(na, Object.assign({
      action: {
        content: "Search",
        onClick: r,
        ...t
      },
      fluid: !0
    }, c, {
      placeholder: o || "Type something",
      onChange: (d, p) => {
        let {
          value: f
        } = p;
        n(f);
      },
      value: l,
      onKeyPress: a,
      ref: (d) => {
        this.focusInput = d;
      }
    })));
  }
}
Pr.defaultProps = {
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
Pr.contextType = C;
var lE = v.component("SearchBar", Ii);
const cE = (e) => ({
  updateQueryString: (t) => e(Xa(t))
}), uE = k((e) => ({
  queryString: e.query.queryString
}), cE)(lE);
class Fi extends L {
  constructor(t) {
    super(t), this._computeValue = (r, n) => n ? `${r}-${n}` : r, this.onChange = (r) => {
      const {
        currentSortBy: n,
        currentSortOrder: a
      } = this.props;
      if (r === this._computeValue(n, a))
        return;
      const i = this.options.find((o) => o.value === r);
      this.updateQuerySorting(i.sortBy, i.sortOrder);
    }, this.options = t.values, this.updateQuerySorting = t.updateQuerySorting, this.options.forEach((r) => r.value = this._computeValue(r.sortBy, r.sortOrder));
  }
  render() {
    const {
      currentSortBy: t,
      currentSortOrder: r,
      loading: n,
      totalResults: a,
      label: i,
      overridableId: o,
      sortOrderDisabled: l,
      ariaLabel: c,
      selectOnNavigation: u
    } = this.props;
    return /* @__PURE__ */ s.createElement(X, {
      condition: t !== null && (l || t !== null) && !n && a > 0
    }, i(/* @__PURE__ */ s.createElement(Ai, {
      currentSortBy: t,
      currentSortOrder: r,
      options: this.options,
      onValueChange: this.onChange,
      computeValue: this._computeValue,
      overridableId: o,
      ariaLabel: c,
      selectOnNavigation: u
    })));
  }
}
Fi.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const Ai = (e) => {
  let {
    overridableId: t,
    currentSortBy: r,
    currentSortOrder: n,
    options: a,
    onValueChange: i,
    computeValue: o,
    ariaLabel: l,
    selectOnNavigation: c
  } = e;
  const {
    buildUID: u
  } = F(C), d = o(r, n), p = a.map((f, h) => ({
    key: h,
    text: f.text,
    value: f.value
  }));
  return /* @__PURE__ */ s.createElement(v, {
    id: u("Sort.element", t),
    options: a,
    currentSortBy: r,
    currentSortOrder: n,
    onValueChange: i,
    ariaLabel: l,
    selectOnNavigation: c
  }, /* @__PURE__ */ s.createElement(ce, {
    selection: !0,
    options: p,
    value: d,
    onChange: (f, h) => {
      let {
        value: y
      } = h;
      return i(y);
    },
    "aria-label": l,
    selectOnNavigation: c
  }));
};
Ai.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var dE = v.component("Sort", Fi);
const pE = (e) => ({
  updateQuerySorting: (t, r) => e(rv(t, r))
});
k((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), pE)(dE);
class Oi extends L {
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
      label: a,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    } = this.props;
    return /* @__PURE__ */ s.createElement(X, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ s.createElement(Ri, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
Oi.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const Ri = (e) => {
  let {
    overridableId: t,
    currentSortBy: r,
    options: n,
    onValueChange: a,
    ariaLabel: i,
    selectOnNavigation: o
  } = e;
  const {
    buildUID: l
  } = F(C), c = n.map((u, d) => ({
    key: d,
    text: u.text,
    value: u.value
  }));
  return /* @__PURE__ */ s.createElement(v, {
    id: l("SortBy.element", t),
    options: n,
    currentSortBy: r,
    onValueChange: a,
    ariaLabel: i,
    selectOnNavigation: o
  }, /* @__PURE__ */ s.createElement(ce, {
    selection: !0,
    compact: !0,
    options: c,
    value: r,
    onChange: (u, d) => {
      let {
        value: p
      } = d;
      return a(p);
    },
    "aria-label": i,
    selectOnNavigation: o
  }));
};
Ri.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var fE = v.component("SortBy", Oi);
const hE = (e) => ({
  updateQuerySortBy: (t) => e(nv(t))
}), mE = k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), hE)(fE);
class ki extends L {
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
      label: a,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    } = this.props;
    return /* @__PURE__ */ s.createElement(X, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ s.createElement(Pi, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
ki.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const Pi = (e) => {
  let {
    overridableId: t,
    currentSortOrder: r,
    options: n,
    onValueChange: a,
    ariaLabel: i,
    selectOnNavigation: o
  } = e;
  const {
    buildUID: l
  } = F(C), c = n.map((u, d) => ({
    key: d,
    text: u.text,
    value: u.value
  }));
  return /* @__PURE__ */ s.createElement(v, {
    id: l("SortOrder.element", t),
    options: n,
    currentSortOrder: r,
    onValueChange: a,
    ariaLabel: i,
    selectOnNavigation: o
  }, /* @__PURE__ */ s.createElement(ce, {
    selection: !0,
    compact: !0,
    options: c,
    value: r,
    onChange: (u, d) => {
      let {
        value: p
      } = d;
      return a(p);
    },
    "aria-label": i,
    selectOnNavigation: o
  }));
};
Pi.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var gE = v.component("SortOrder", ki);
const yE = (e) => ({
  updateQuerySortOrder: (t) => e(av(t))
});
k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), yE)(gE);
const Di = (e) => {
  let {
    overridableId: t,
    userSelectionFilters: r,
    title: n,
    label: a,
    filterValue: i,
    updateQueryFilters: o
  } = e;
  const l = (p) => p.filter((h) => h[0] === i[0]).length > 0, c = () => {
    o(i);
  }, {
    buildUID: u
  } = F(C), d = l(r);
  return /* @__PURE__ */ s.createElement(v, {
    id: u("SearchFilters.Toggle.element", t),
    title: n,
    label: a,
    filterValue: i,
    userSelectionFilters: r,
    updateQueryFilters: o
  }, /* @__PURE__ */ s.createElement(D, null, /* @__PURE__ */ s.createElement(D.Content, null, /* @__PURE__ */ s.createElement(D.Header, null, n)), /* @__PURE__ */ s.createElement(D.Content, null, /* @__PURE__ */ s.createElement(lr, {
    toggle: !0,
    label: a,
    onClick: c,
    checked: d
  }))));
};
Di.defaultProps = {
  overridableId: ""
};
var bE = v.component("SearchFilters.Toggle", Di);
const vE = (e) => ({
  updateQueryFilters: (t) => e(Ar(t))
});
k((e) => ({
  userSelectionFilters: e.query.filters
}), vE)(bE);
function Wt(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var EE = (e) => typeof e == "object" && e !== null;
function SE(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var _E = (e) => e === "base";
function $E(e) {
  return e.slice().filter((t) => !_E(t));
}
function Tn(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function xE(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = Tn(r % 52) + t;
  return Tn(r % 52) + t;
}
function CE(e, t) {
  let r = t.length;
  for (; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function wE(e) {
  return xE(CE(5381, e) >>> 0);
}
var Li = /\s*!(important)?/i;
function TE(e) {
  return typeof e == "string" ? Li.test(e) : !1;
}
function IE(e) {
  return typeof e == "string" ? e.replace(Li, "").trim() : e;
}
function Ni(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var Dr = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...n) => {
    const a = JSON.stringify(n);
    if (t.has(a))
      return t.get(a);
    const i = e(...n);
    return t.set(a, i), i;
  };
}, FE = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function Bi(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((n) => {
    if (FE.has(n))
      return;
    const a = t[n], i = r[n];
    Wt(a) && Wt(i) ? t[n] = Bi(a, i) : t[n] = i;
  }), t), {});
}
var AE = (e) => e != null;
function Ui(e, t, r = {}) {
  const { stop: n, getKey: a } = r;
  function i(o, l = []) {
    if (EE(o)) {
      const c = {};
      for (const [u, d] of Object.entries(o)) {
        const p = (a == null ? void 0 : a(u, d)) ?? u, f = [...l, p];
        if (n != null && n(o, f))
          return t(o, l);
        const h = i(d, f);
        AE(h) && (c[p] = h);
      }
      return c;
    }
    return t(o, l);
  }
  return i(e);
}
function OE(e, t) {
  return e.reduce(
    (r, n, a) => {
      const i = t[a];
      return n != null && (r[i] = n), r;
    },
    {}
  );
}
function zi(e, t, r = !0) {
  const { utility: n, conditions: a } = t, { hasShorthand: i, resolveShorthand: o } = n;
  return Ui(
    e,
    (l) => Array.isArray(l) ? OE(l, a.breakpoints.keys) : l,
    {
      stop: (l) => Array.isArray(l),
      getKey: r ? (l) => i ? o(l) : l : void 0
    }
  );
}
var RE = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, kE = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function PE(e) {
  const { utility: t, hash: r, conditions: n = RE } = e, a = (o) => [t.prefix, o].filter(Boolean).join("-"), i = (o, l) => {
    let c;
    if (r) {
      const u = [...n.finalize(o), l];
      c = a(t.toHash(u, wE));
    } else
      c = [...n.finalize(o), a(l)].join(":");
    return c;
  };
  return Dr(({ base: o, ...l } = {}) => {
    const c = Object.assign(l, o), u = zi(c, e), d = /* @__PURE__ */ new Set();
    return Ui(u, (p, f) => {
      if (p == null)
        return;
      const h = TE(p), [y, ...m] = n.shift(f), E = $E(m), g = t.transform(y, IE(kE(p)));
      let S = i(E, g.className);
      h && (S = `${S}!`), d.add(S);
    }), Array.from(d).join(" ");
  });
}
function DE(...e) {
  return e.flat().filter((t) => Wt(t) && Object.keys(SE(t)).length > 0);
}
function LE(e) {
  function t(a) {
    const i = DE(...a);
    return i.length === 1 ? i : i.map((o) => zi(o, e));
  }
  function r(...a) {
    return Bi(...t(a));
  }
  function n(...a) {
    return Object.assign({}, ...t(a));
  }
  return { mergeCss: Dr(r), assignCss: n };
}
var NE = /([A-Z])/g, BE = /^ms-/, UE = Dr((e) => e.startsWith("--") ? e : e.replace(NE, "-$1").replace(BE, "-ms-").toLowerCase()), zE = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${zE.split(",").join("|")}`;
const ME = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", Mi = new Set(ME.split(",")), jE = /^@|&|&$/;
function In(e) {
  return Mi.has(e) || jE.test(e);
}
const QE = /^_/, qE = /&|@/;
function VE(e) {
  return e.map((t) => Mi.has(t) ? t.replace(QE, "") : qE.test(t) ? `[${Ni(t.trim())}]` : t);
}
function GE(e) {
  return e.sort((t, r) => {
    const n = In(t), a = In(r);
    return n && !a ? 1 : !n && a ? -1 : 0;
  });
}
const HE = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle", ji = /* @__PURE__ */ new Map(), Qi = /* @__PURE__ */ new Map();
HE.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [n, ...a] = r.split("/");
  ji.set(t, n), a.length && a.forEach((i) => {
    Qi.set(i === "1" ? n : i, t);
  });
});
const Fn = (e) => Qi.get(e) || e, qi = {
  conditions: {
    shift: GE,
    finalize: VE,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = Fn(e);
      return { className: `${ji.get(r) || UE(r)}_${Ni(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: Fn
  }
}, YE = PE(qi), b = (...e) => YE(Vi(...e));
b.raw = (...e) => Vi(...e);
const { mergeCss: Vi, assignCss: FC } = LE(qi), An = {
  header: b({
    fontSize: "1.1rem !important"
  }),
  container: b({
    padding: "1rem"
  })
}, WE = ({
  title: e,
  containerCmp: t
}) => /* @__PURE__ */ s.createElement("div", { className: An.container }, /* @__PURE__ */ s.createElement(de, { as: "h2", className: An.header }, e), /* @__PURE__ */ s.createElement("div", null, t)), On = {
  checkboxContainer: b({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.5rem",
    wordBreak: "break-all",
    marginInlineStart: "1rem",
    "&:not(:last-child)": {
      marginBlockEnd: "0.5rem"
    }
  }),
  childAggContainer: b({
    marginInlineStart: "1.5rem",
    marginBlockStart: "0.5rem"
  })
}, KE = ({ bucket: e, label: t, onFilterClicked: r, isSelected: n, childAggCmps: a }) => /* @__PURE__ */ s.createElement("div", { className: On.checkboxContainer }, /* @__PURE__ */ s.createElement(
  lr,
  {
    checked: n,
    onChange: () => r(e.key),
    label: t
  }
), /* @__PURE__ */ s.createElement(j, { circular: !0, size: "mini" }, e.doc_count), a && a.length > 0 && /* @__PURE__ */ s.createElement("div", { className: On.childAggContainer }, a)), Gi = s.createContext(
  null
), XE = ({ config: e, children: t, updateQueryState: r, currentQueryState: n }) => {
  const a = R(() => {
    r({
      ...n,
      queryString: n.queryString
    });
  }, [r, n]);
  return /* @__PURE__ */ s.createElement(Gi.Provider, { value: { config: e, refreshSearch: a } }, t);
}, ZE = kr(XE), Ye = () => {
  const e = s.useContext(Gi);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
}, JE = {
  spinnerIcon: b({
    marginInlineEnd: "0.5rem"
  })
}, Hi = ({
  progress: e,
  showPercentage: t = !1
}) => /* @__PURE__ */ s.createElement(or, null, Object.entries(e).map(([r, n]) => /* @__PURE__ */ s.createElement(K.Inline, { basic: !0, key: r }, /* @__PURE__ */ s.createElement(_, { name: "spinner", loading: !0, className: JE.spinnerIcon }), /* @__PURE__ */ s.createElement("strong", null, r), " ", t ? `${n}%` : null))), Yi = () => /* @__PURE__ */ s.createElement(K, { basic: !0, padded: "very" }, /* @__PURE__ */ s.createElement(no, { active: !0, inverted: !0 }, /* @__PURE__ */ s.createElement(aa, { inverted: !0 }, "Loading"))), eS = ({ status: e, ...t }) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ s.createElement(_, { name: "close", color: "red", ...t }) : e === "success" || e === "created" ? /* @__PURE__ */ s.createElement(_, { name: "check circle", color: "green", ...t }) : e === "importing" || e === "validating" ? /* @__PURE__ */ s.createElement(_, { name: "spinner", loading: !0, ...t }) : e === "validated" ? /* @__PURE__ */ s.createElement(_, { name: "check circle", color: "blue", ...t }) : /* @__PURE__ */ s.createElement(_, { ...t }), Wi = ({
  status: e,
  children: t,
  ...r
}) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ s.createElement(j, { color: "red", ...r }, /* @__PURE__ */ s.createElement(_, { name: "warning sign" }), t) : e === "success" || e === "validated" || e === "created" ? /* @__PURE__ */ s.createElement(j, { color: "green", ...r }, /* @__PURE__ */ s.createElement(_, { name: "check circle" }), t) : e === "importing" || e === "validating" ? /* @__PURE__ */ s.createElement(j, { color: "blue", ...r }, /* @__PURE__ */ s.createElement(_, { name: "spinner", loading: !0 }), t) : /* @__PURE__ */ s.createElement(j, { ...r }, t), Be = (e) => (e == null ? void 0 : e.charAt(0).toUpperCase()) + (e == null ? void 0 : e.slice(1)) || "";
var Ki = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var i = "", o = 0; o < arguments.length; o++) {
        var l = arguments[o];
        l && (i = a(i, n(l)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var o = "";
      for (var l in i)
        t.call(i, l) && i[l] && (o = a(o, l));
      return o;
    }
    function a(i, o) {
      return o ? i ? i + " " + o : i + o : i;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Ki);
var tS = Ki.exports;
const rS = /* @__PURE__ */ P(tS), Xi = (e) => e.reduce((t, r) => t + r.file.size, 0), Zi = (e) => Lr(Xi(e)), Lr = (e) => {
  if (e === 0)
    return "0 Bytes";
  const t = 1024, r = ["Bytes", "KB", "MB", "GB"], n = Math.floor(Math.log(e) / Math.log(t));
  return `${Number.parseFloat((e / t ** n).toFixed(2))} ${r[n]}`;
}, Kt = (e) => new Date(e).toLocaleString(void 0, {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit"
});
var Ji = { exports: {} };
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function(e, t) {
  (function(r) {
    var n;
    if (e.exports = r(), n = !0, !n) {
      var a = window.Cookies, i = window.Cookies = r();
      i.noConflict = function() {
        return window.Cookies = a, i;
      };
    }
  })(function() {
    function r() {
      for (var i = 0, o = {}; i < arguments.length; i++) {
        var l = arguments[i];
        for (var c in l)
          o[c] = l[c];
      }
      return o;
    }
    function n(i) {
      return i.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    function a(i) {
      function o() {
      }
      function l(u, d, p) {
        if (!(typeof document > "u")) {
          p = r({
            path: "/"
          }, o.defaults, p), typeof p.expires == "number" && (p.expires = new Date(/* @__PURE__ */ new Date() * 1 + p.expires * 864e5)), p.expires = p.expires ? p.expires.toUTCString() : "";
          try {
            var f = JSON.stringify(d);
            /^[\{\[]/.test(f) && (d = f);
          } catch {
          }
          d = i.write ? i.write(d, u) : encodeURIComponent(String(d)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), u = encodeURIComponent(String(u)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var h = "";
          for (var y in p)
            p[y] && (h += "; " + y, p[y] !== !0 && (h += "=" + p[y].split(";")[0]));
          return document.cookie = u + "=" + d + h;
        }
      }
      function c(u, d) {
        if (!(typeof document > "u")) {
          for (var p = {}, f = document.cookie ? document.cookie.split("; ") : [], h = 0; h < f.length; h++) {
            var y = f[h].split("="), m = y.slice(1).join("=");
            !d && m.charAt(0) === '"' && (m = m.slice(1, -1));
            try {
              var E = n(y[0]);
              if (m = (i.read || i)(m, E) || n(m), d)
                try {
                  m = JSON.parse(m);
                } catch {
                }
              if (p[E] = m, u === E)
                break;
            } catch {
            }
          }
          return u ? p[u] : p;
        }
      }
      return o.set = l, o.get = function(u) {
        return c(
          u,
          !1
          /* read as raw */
        );
      }, o.getJSON = function(u) {
        return c(
          u,
          !0
          /* read as json */
        );
      }, o.remove = function(u, d) {
        l(u, "", r(d, {
          expires: -1
        }));
      }, o.defaults = {}, o.withConverter = a, o;
    }
    return a(function() {
    });
  });
})(Ji);
var nS = Ji.exports;
const aS = /* @__PURE__ */ P(nS), iS = () => aS.get("csrftoken") || null, sS = (e) => {
  switch (e) {
    case "success":
      return "green";
    case "validation failed":
    case "serializer validation failed":
    case "import failed":
    case "imported with failures":
    case "validated with failures":
    case "damaged":
      return "red";
    case "validated":
    case "created":
      return "blue";
    case "importing":
    case "validating":
      return "yellow";
    default:
      return "grey";
  }
}, AC = (e) => new Ba(e), OC = (e, t = {}, r = !0) => ({
  axios: {
    url: e,
    headers: {
      Accept: "application/vnd.inveniordm.v1+json",
      ...t
    },
    withCredentials: r
  }
}), V = rt.create({
  baseURL: "",
  timeout: 3e4,
  withCredentials: !0,
  // Include cookies in requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
V.interceptors.request.use(
  (e) => {
    const t = iS();
    return t && (e.headers["X-CSRFTOKEN"] = t), e;
  },
  (e) => Promise.reject(e)
);
const es = async (e, t) => {
  try {
    const r = await V.put(
      `/api/importer-tasks/${e}/metadata`,
      t,
      {
        headers: {
          "content-type": "application/octet-stream",
          "X-Filename": `${t.name}`
        }
      }
    );
    if (r.status === 200)
      return r.data;
    throw new Error(`Failed to create task: ${r.statusText}`);
  } catch (r) {
    throw new Error(
      `Error creating task: ${r instanceof Error ? r.message : "Unknown error"}`
    );
  }
}, oS = async (e, t) => {
  try {
    const r = await V.post(
      `/api/importer-tasks/${e}/files/${t}/commit`,
      {}
    );
    if (r.status !== 200)
      throw new Error(`Failed to commit file: ${r.statusText}`);
  } catch (r) {
    throw console.error("Error committing file:", r), new Error(
      `Failed to commit file: ${r instanceof Error ? r.message : "Unknown error"}`
    );
  }
}, lS = async (e) => {
  const t = {
    title: e.title,
    description: e.description,
    mode: e.mode,
    status: e.status,
    record_type: e.recordType,
    serializer: e.serializer,
    start_time: e.startTime,
    end_time: e.endTime
  };
  try {
    const r = await V.post(
      "/api/importer-tasks",
      t
    );
    if (r.status === 201)
      return r.data;
    throw new Error(`Failed to create task: ${r.statusText}`);
  } catch (r) {
    throw new Error(
      `Error creating task: ${r instanceof Error ? r.message : "Unknown error"}`
    );
  }
}, cS = async (e) => {
  try {
    const t = await V.delete(`/api/importer-tasks/${e}`);
    return t.status === 204 ? !0 : (console.error(`Failed to delete task: ${t.statusText}`), !1);
  } catch (t) {
    return console.error(
      `Error deleting task: ${t instanceof Error ? t.message : "Unknown error"}`
    ), !1;
  }
}, ts = async (e) => {
  try {
    const t = await V.post(
      `/api/importer-tasks/${e}/load`
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error executing bulk import:", t), new Error("Failed to execute bulk import");
  }
}, uS = async () => {
  try {
    const e = await V.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, dS = async (e) => {
  try {
    const t = await V.get(
      `/api/importer-tasks/config/${e}`
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error fetching serializers:", t), new Error("Failed to fetch serializers");
  }
}, Ue = async (e) => {
  try {
    const t = await V.put(
      `/api/importer-tasks/${e}/status`,
      {}
    );
    if (t.status === 200)
      return t.data;
    throw new Error(
      `Failed to get status of importer task: ${t.statusText}`
    );
  } catch (t) {
    throw new Error(
      `Error getting status of importer task: ${t instanceof Error ? t.message : "Unknown error"}`
    );
  }
}, pS = async (e, t) => {
  const r = t.map((n) => ({
    key: n
  }));
  try {
    const n = await V.post(
      `/api/importer-tasks/${e}/files`,
      r
    );
    if (n.status !== 201)
      throw new Error(`Failed to initialize files: ${n.statusText}`);
  } catch (n) {
    throw console.error("Error initializing files:", n), new Error(
      `Failed to initialize files: ${n instanceof Error ? n.message : "Unknown error"}`
    );
  }
}, fS = async (e, t, r) => {
  try {
    const n = await V.put(
      `/api/importer-tasks/${e}/files/${t}/content`,
      r,
      {
        headers: {
          "Content-Type": "application/octet-stream"
        }
      }
    );
    if (n.status !== 200)
      throw new Error(`Failed to upload file content: ${n.statusText}`);
  } catch (n) {
    throw console.error("Error uploading file content:", n), new Error(
      `Failed to upload file content: ${n instanceof Error ? n.message : "Unknown error"}`
    );
  }
}, rs = async (e) => {
  try {
    const t = await V.post(
      `/api/importer-tasks/${e}/validate`,
      {}
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Failed to validate task: ${t.statusText}`);
  } catch (t) {
    throw new Error(
      `Error validating task: ${t instanceof Error ? t.message : "Unknown error"}`
    );
  }
}, ns = async (e, t = {}) => {
  const { autoExecute: r = !1, onProgress: n, onError: a } = t;
  try {
    n == null || n("Validating", 0), await rs(e), n == null || n("Validating", 50);
    let i = await Ue(e);
    return n == null || n("Validating", 100), r && (i.status === "validated" || i.status === "validated with failures") && (n == null || n("Executing", 0), await ts(e), n == null || n("Executing", 50), i = await Ue(e), n == null || n("Executing", 100)), i;
  } catch (i) {
    const o = i instanceof Error ? i : new Error("Unknown error during workflow execution");
    throw a == null || a(o, "Executing"), o;
  }
}, as = async (e, t, r) => {
  if (!t || t.length === 0)
    return;
  const n = t.map((a) => a.name);
  await pS(e, n);
  for (const a of t)
    try {
      r == null || r({
        fileName: a.name,
        loaded: 0,
        total: a.size,
        percentage: 0
      }), await fS(e, a.name, a), r == null || r({
        fileName: a.name,
        loaded: a.size,
        total: a.size,
        percentage: 90
      }), await oS(e, a.name), r == null || r({
        fileName: a.name,
        loaded: a.size,
        total: a.size,
        percentage: 100
      });
    } catch (i) {
      throw new Error(
        `Failed to upload file ${a.name}: ${i instanceof Error ? i.message : "Unknown error"}`
      );
    }
}, hS = async (e, t, r, n = {}) => {
  const {
    autoValidate: a = !1,
    autoExecute: i = !1,
    onProgress: o,
    onError: l
  } = n;
  try {
    o == null || o("Creating Task", 0);
    const c = await lS(e);
    if (!c)
      throw new Error("Failed to create import task");
    return o == null || o("Creating Task", 100), t && (o == null || o("Uploading Metadata", 0), await es(c.id, t), o == null || o("Uploading Metadata", 100)), r && r.length > 0 && await as(c.id, r, (u) => {
      o == null || o("Uploading Files", u.percentage);
    }), a && t && await ns(c.id, {
      autoExecute: i,
      onProgress: o,
      onError: l
    }), c;
  } catch (c) {
    const u = c instanceof Error ? c : new Error("Unknown error during task creation");
    throw l == null || l(u, "Creating Task"), u;
  }
}, mS = async (e, t, r, n = {}) => {
  const { onProgress: a, onError: i } = n;
  try {
    a == null || a("Updating", 0), t && (a == null || a("Updating Metadata", 0), await es(e, t), a == null || a("Updating Metadata", 100)), r && r.length > 0 && await as(e, r, (o) => {
      a == null || a("Updating Files", o.percentage);
    }), a == null || a("Updating", 100);
  } catch (o) {
    const l = o instanceof Error ? o : new Error("Unknown error during task update");
    throw i == null || i(l, "Updating"), l;
  }
}, gS = async (e) => {
  try {
    const t = await V.post(
      `/api/importer-records/${e}/run`,
      {}
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Failed to fetch import records: ${t.statusText}`);
  } catch (t) {
    throw console.error("Failed to fetch import records:", t), t;
  }
}, is = (e, t = {}) => {
  const [r, n] = N({
    isDeleting: !1,
    isValidating: !1,
    isBulkImporting: !1,
    isGettingStatus: !1,
    error: null
  }), {
    onDeleteSuccess: a,
    onDeleteError: i,
    onValidateSuccess: o,
    onValidateError: l,
    onBulkImportSuccess: c,
    onBulkImportError: u,
    onStatusChangeSuccess: d,
    onStatusChangeError: p
  } = t, f = R(() => {
    n((g) => ({ ...g, error: null }));
  }, []), h = R(async () => {
    n((g) => ({ ...g, isDeleting: !0, error: null }));
    try {
      if (!await cS(e))
        throw new Error(`Failed to delete task ${e}`);
      a == null || a();
    } catch (g) {
      const S = g instanceof Error ? g : new Error("Unknown error");
      throw n((A) => ({ ...A, error: S })), i == null || i(S), S;
    } finally {
      n((g) => ({ ...g, isDeleting: !1 }));
    }
  }, [e, a, i]), y = R(async () => {
    n((g) => ({ ...g, isValidating: !0, error: null }));
    try {
      const g = await rs(e);
      if (!g)
        throw new Error(`Validation failed for task ${e}`);
      return o == null || o(g), await Ue(e), g;
    } catch (g) {
      const S = g instanceof Error ? g : new Error("Unknown error");
      throw n((A) => ({ ...A, error: S })), l == null || l(S), S;
    } finally {
      n((g) => ({ ...g, isValidating: !1 }));
    }
  }, [e, o, l]), m = R(async () => {
    n((g) => ({ ...g, isBulkImporting: !0, error: null }));
    try {
      const g = await ts(e);
      if (!g)
        throw new Error(`Failed to execute bulk import for task ${e}`);
      return c == null || c(g), await Ue(e), g;
    } catch (g) {
      const S = g instanceof Error ? g : new Error("Unknown error");
      throw n((A) => ({ ...A, error: S })), u == null || u(S), S;
    } finally {
      n((g) => ({ ...g, isBulkImporting: !1 }));
    }
  }, [e, c, u]), E = R(async () => {
    n((g) => ({ ...g, isGettingStatus: !0, error: null }));
    try {
      const g = await Ue(e);
      if (!g)
        throw new Error(`Failed to retrieve status for task ${e}`);
      return n((S) => ({ ...S, error: null })), d == null || d(g), g;
    } catch (g) {
      const S = g instanceof Error ? g : new Error("Unknown error");
      throw n((A) => ({ ...A, error: S })), p == null || p(S), S;
    } finally {
      n((g) => ({ ...g, isGettingStatus: !1 }));
    }
  }, [e, d, p]);
  return {
    // State
    isDeleting: r.isDeleting,
    isValidating: r.isValidating,
    isBulkImporting: r.isBulkImporting,
    isGettingStatus: r.isGettingStatus,
    error: r.error,
    // Actions
    deleteTask: h,
    validateTask: y,
    runBulkImport: m,
    getStatus: E,
    clearError: f
  };
}, Ze = {
  actionsCell: b({
    inlineSize: "15rem"
  }),
  errorContainer: b({
    display: "flex",
    alignItems: "center",
    gap: "0.3125rem",
    color: "red",
    fontSize: "0.75rem",
    marginBlockEnd: "0.3125rem"
  }),
  clearErrorButton: b({
    marginInlineStart: "0.3125rem",
    fontSize: "0.625rem"
  }),
  actionsContainer: b({
    display: "flex",
    alignItems: "center",
    gap: "0.625rem"
  })
}, yS = ({ result: e, index: t }) => {
  var y;
  const { config: r, refreshSearch: n } = Ye(), {
    deleteTask: a,
    runBulkImport: i,
    getStatus: o,
    isDeleting: l,
    isValidating: c,
    isBulkImporting: u,
    isGettingStatus: d,
    error: p,
    clearError: f
  } = is(e.id, {
    onDeleteSuccess: () => {
      n();
    },
    onBulkImportSuccess: () => {
      n();
    },
    onStatusChangeSuccess: () => {
      n();
    }
  });
  if (!e)
    return null;
  const h = l || c || u || d;
  return /* @__PURE__ */ s.createElement(ht, { key: t }, /* @__PURE__ */ s.createElement(H, null, /* @__PURE__ */ s.createElement("a", { href: `${r.resultPath}/${e.id}` }, e.title || "No title")), /* @__PURE__ */ s.createElement(H, null, Kt(e.created)), /* @__PURE__ */ s.createElement(H, null, /* @__PURE__ */ s.createElement(Wi, { status: e.status }, Be(e.status))), /* @__PURE__ */ s.createElement(H, null, /* @__PURE__ */ s.createElement(j, null, Be(e.record_type))), /* @__PURE__ */ s.createElement(H, null, ((y = e.records_status) == null ? void 0 : y.total_records) ?? 0), /* @__PURE__ */ s.createElement(H, null, e.serializer), /* @__PURE__ */ s.createElement(H, null, Be(e.mode)), /* @__PURE__ */ s.createElement(H, { className: Ze.actionsCell }, p && /* @__PURE__ */ s.createElement("div", { className: Ze.errorContainer }, p.message, /* @__PURE__ */ s.createElement(
    z,
    {
      onClick: f,
      className: Ze.clearErrorButton,
      size: "mini",
      basic: !0
    },
    "Clear"
  )), /* @__PURE__ */ s.createElement("div", { className: Ze.actionsContainer }, /* @__PURE__ */ s.createElement(
    ce,
    {
      text: h ? "Processing..." : "Select Action",
      floating: !0,
      labeled: !0,
      className: "icon",
      disabled: h,
      options: [
        {
          key: "load",
          text: "Run",
          value: "load",
          disabled: h,
          onClick: () => i()
        },
        {
          key: "status",
          text: "Refresh Status",
          value: "status",
          disabled: h,
          onClick: () => o()
        },
        {
          key: "delete",
          text: "Delete",
          value: "delete",
          disabled: h,
          onClick: () => a()
        }
      ]
    }
  ), /* @__PURE__ */ s.createElement(
    z,
    {
      basic: !0,
      size: "tiny",
      disabled: h,
      as: "a",
      href: `${r.resultPath}/${e.id}`
    },
    /* @__PURE__ */ s.createElement(_, { name: "eye" }),
    "View"
  ))));
}, bS = ({ children: e }) => /* @__PURE__ */ s.createElement(T, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ s.createElement(ia, null, /* @__PURE__ */ s.createElement(ht, null, /* @__PURE__ */ s.createElement(Y, null, "Title"), /* @__PURE__ */ s.createElement(Y, null, "Date Created"), /* @__PURE__ */ s.createElement(Y, null, "Status"), /* @__PURE__ */ s.createElement(Y, null, "Type"), /* @__PURE__ */ s.createElement(Y, null, "Items"), /* @__PURE__ */ s.createElement(Y, null, "Serializer"), /* @__PURE__ */ s.createElement(Y, null, "Mode"), /* @__PURE__ */ s.createElement(Y, null, "Actions"))), /* @__PURE__ */ s.createElement(sa, null, e)), vS = {
  container: b({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  })
}, ES = ({
  currentResultsState: e,
  currentQueryState: t
}) => {
  const r = e.data.total, n = t.size;
  return r ? n ? n > r ? /* @__PURE__ */ s.createElement(j, null, "Showing ", /* @__PURE__ */ s.createElement("strong", null, r), " result(s) found") : /* @__PURE__ */ s.createElement(j, { className: vS.container }, "Showing ", /* @__PURE__ */ s.createElement("strong", null, n), " of ", /* @__PURE__ */ s.createElement("strong", null, r), " ", "result(s) found") : null : /* @__PURE__ */ s.createElement(j, null, "No results found");
}, SS = kr(ES), _S = [
  { text: "Newest", value: "newest" },
  { text: "Oldest", value: "oldest" }
], Rn = {
  container: b({
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
    flexWrap: "wrap",
    alignItems: "center"
  }),
  sortByContainer: b({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  })
}, $S = () => /* @__PURE__ */ s.createElement("div", { className: Rn.container }, /* @__PURE__ */ s.createElement(SS, null), /* @__PURE__ */ s.createElement("div", { className: Rn.sortByContainer }, /* @__PURE__ */ s.createElement(mE, { values: _S }))), ie = {
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
    size: 10,
    sortBy: "newest"
  },
  layoutOptions: {
    gridView: !1,
    listView: !0
  },
  paginationOptions: {
    defaultValue: 10,
    maxTotalResults: 1e4,
    resultsPerPage: [
      {
        text: "10",
        value: 10
      },
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
  sortOrderDisabled: !0,
  resultPath: "/administration/importer-tasks"
}, kn = {
  searchLayout: b({
    display: "flex",
    flexDirection: ["column", "row"],
    // Responsive layout: column on mobile, row on tablet+
    gap: "1rem"
  }),
  searchContent: b({
    flex: 1,
    minInlineSize: 0
  })
}, ke = {
  fileInput: b({
    marginBlockStart: "0.5rem"
  }),
  helpText: b({
    marginBlockStart: "0.5rem",
    fontSize: "0.75rem",
    color: "#666"
  }),
  buttonContainer: b({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "0.5rem"
  })
}, xS = () => {
  const [e, t] = N(
    {}
  ), [r, n] = N(!0), { values: a, submitForm: i, isSubmitting: o, isValid: l, setFieldValue: c } = yo(), u = R(async () => {
    try {
      const f = await uS(), h = {};
      for (const y of f) {
        const m = await dS(y);
        m && (h[y] = m);
      }
      t(h);
    } catch (f) {
      console.error("Error fetching record types:", f);
    } finally {
      n(!1);
    }
  }, []), d = (f) => {
    var y;
    const h = ((y = f.target.files) == null ? void 0 : y[0]) || null;
    c("metadata", h);
  }, p = (f) => {
    c("files", f);
  };
  return Me(() => {
    u();
  }, [u]), {
    configs: e,
    isLoading: r,
    values: a,
    submitForm: i,
    setFieldValue: c,
    handleFileChange: d,
    handleFilesChange: p,
    isSubmitting: o,
    isValid: l
  };
}, CS = ({ progress: e }) => {
  const {
    configs: t,
    isLoading: r,
    submitForm: n,
    handleFileChange: a,
    handleFilesChange: i,
    values: o,
    isSubmitting: l,
    isValid: c
  } = xS();
  return r ? /* @__PURE__ */ s.createElement(Yi, null) : !t || Object.keys(t).length === 0 ? /* @__PURE__ */ s.createElement("p", null, "No record types available.") : /* @__PURE__ */ s.createElement(or, null, /* @__PURE__ */ s.createElement(
    ho,
    {
      fieldPath: "task.title",
      label: "Title",
      placeholder: "Enter a title for the import task",
      required: !0
    }
  ), /* @__PURE__ */ s.createElement(_e.Group, { widths: "equal" }, /* @__PURE__ */ s.createElement(
    kt,
    {
      fieldPath: "task.recordType",
      label: "Record Type",
      options: Object.keys(t).map((u) => ({
        key: u,
        value: u,
        text: u
      })),
      placeholder: "Select Record Type",
      required: !0
    }
  ), /* @__PURE__ */ s.createElement(
    kt,
    {
      fieldPath: "task.serializer",
      label: "Serializer",
      options: o.task.recordType && t[o.task.recordType] ? t[o.task.recordType].serializers.map((u) => ({
        key: u,
        value: u,
        text: u
      })) : [],
      placeholder: "Select Serializer",
      disabled: !o.task.recordType,
      required: !0
    }
  ), /* @__PURE__ */ s.createElement(
    kt,
    {
      fieldPath: "task.mode",
      label: "Mode",
      options: [
        { key: "import", value: "import", text: "Import" },
        { key: "delete", value: "delete", text: "Delete" }
      ],
      placeholder: "Select Mode",
      disabled: !o.task.recordType || !o.task.serializer,
      required: !0
    }
  )), /* @__PURE__ */ s.createElement(_e.Field, null, /* @__PURE__ */ s.createElement("label", { htmlFor: "file-input" }, "Metadata File"), /* @__PURE__ */ s.createElement(
    "input",
    {
      id: "file-input",
      type: "file",
      accept: ".csv",
      onChange: a,
      className: ke.fileInput
    }
  ), o.metadata && /* @__PURE__ */ s.createElement("p", { className: ke.helpText }, "Selected: ", o.metadata.name), /* @__PURE__ */ s.createElement("p", { className: ke.helpText }, "Upload a CSV file containing the records metadata to be imported or deleted.")), /* @__PURE__ */ s.createElement(_e.Field, null, /* @__PURE__ */ s.createElement(
    Ys,
    {
      value: o.files || [],
      onChange: i,
      accept: "*",
      skipEmptyFiles: !0,
      maxTotalSize: 10 * 1024 * 1024 * 1024,
      maxFiles: 100
    }
  ), /* @__PURE__ */ s.createElement("p", { className: ke.helpText }, "Upload files related to the records. You can upload multiple files, and they will be associated with the import task.")), /* @__PURE__ */ s.createElement(
    mo,
    {
      fieldPath: "task.description",
      label: "Notes",
      placeholder: "Enter a description for the import task",
      rows: 3
    }
  ), /* @__PURE__ */ s.createElement("div", { className: ke.buttonContainer }, e && /* @__PURE__ */ s.createElement(Hi, { progress: e }), /* @__PURE__ */ s.createElement(
    z,
    {
      type: "button",
      primary: !0,
      onClick: n,
      disabled: !c || l,
      loading: l
    },
    "Submit"
  )));
};
var Xt;
try {
  Xt = Map;
} catch {
}
var Zt;
try {
  Zt = Set;
} catch {
}
function ss(e, t, r) {
  if (!e || typeof e != "object" || typeof e == "function")
    return e;
  if (e.nodeType && "cloneNode" in e)
    return e.cloneNode(!0);
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof RegExp)
    return new RegExp(e);
  if (Array.isArray(e))
    return e.map(Jt);
  if (Xt && e instanceof Xt)
    return new Map(Array.from(e.entries()));
  if (Zt && e instanceof Zt)
    return new Set(Array.from(e.values()));
  if (e instanceof Object) {
    t.push(e);
    var n = Object.create(e);
    r.push(n);
    for (var a in e) {
      var i = t.findIndex(function(o) {
        return o === e[a];
      });
      n[a] = i > -1 ? r[i] : ss(e[a], t, r);
    }
    return n;
  }
  return e;
}
function Jt(e) {
  return ss(e, [], []);
}
const wS = Object.prototype.toString, TS = Error.prototype.toString, IS = RegExp.prototype.toString, FS = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", AS = /^Symbol\((.*)\)(.*)$/;
function OS(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Pn(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return OS(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return FS.call(e).replace(AS, "Symbol($1)");
  const n = wS.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + TS.call(e) + "]" : n === "RegExp" ? IS.call(e) : null;
}
function ze(e, t) {
  let r = Pn(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let i = Pn(this[n], t);
    return i !== null ? i : a;
  }, 2);
}
let me = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: e,
    type: t,
    value: r,
    originalValue: n
  }) => {
    let a = n != null && n !== r, i = `${e} must be a \`${t}\` type, but the final value was: \`${ze(r, !0)}\`` + (a ? ` (cast from the value \`${ze(n, !0)}\`).` : ".");
    return r === null && (i += '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'), i;
  },
  defined: "${path} must be defined"
}, Z = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
}, RS = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, er = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, kS = {
  isValue: "${path} field must be ${value}"
}, tr = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, PS = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: me,
  string: Z,
  number: RS,
  date: er,
  object: tr,
  array: PS,
  boolean: kS
});
var DS = Object.prototype, LS = DS.hasOwnProperty;
function NS(e, t) {
  return e != null && LS.call(e, t);
}
var BS = NS, US = BS, zS = va;
function MS(e, t) {
  return e != null && zS(e, t, US);
}
var jS = MS;
const ut = /* @__PURE__ */ P(jS), os = (e) => e && e.__isYupSchema__;
class QS {
  constructor(t, r) {
    if (this.fn = void 0, this.refs = t, this.refs = t, typeof r == "function") {
      this.fn = r;
      return;
    }
    if (!ut(r, "is"))
      throw new TypeError("`is:` is required for `when()` conditions");
    if (!r.then && !r.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: a,
      otherwise: i
    } = r, o = typeof n == "function" ? n : (...l) => l.every((c) => c === n);
    this.fn = function(...l) {
      let c = l.pop(), u = l.pop(), d = o(...l) ? a : i;
      if (d)
        return typeof d == "function" ? d(u) : u.concat(d.resolve(c));
    };
  }
  resolve(t, r) {
    let n = this.refs.map((i) => i.getValue(r == null ? void 0 : r.value, r == null ? void 0 : r.parent, r == null ? void 0 : r.context)), a = this.fn.apply(t, n.concat(t, r));
    if (a === void 0 || a === t)
      return t;
    if (!os(a))
      throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
function ls(e) {
  return e == null ? [] : [].concat(e);
}
function rr() {
  return rr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rr.apply(this, arguments);
}
let qS = /\$\{\s*(\w+)\s*\}/g;
class Q extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = rr({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(qS, (a, i) => ze(r[i])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], ls(t).forEach((i) => {
      Q.isError(i) ? (this.errors.push(...i.errors), this.inner = this.inner.concat(i.inner.length ? i.inner : i)) : this.errors.push(i);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, Q);
  }
}
const VS = (e) => {
  let t = !1;
  return (...r) => {
    t || (t = !0, e(...r));
  };
};
function nr(e, t) {
  let {
    endEarly: r,
    tests: n,
    args: a,
    value: i,
    errors: o,
    sort: l,
    path: c
  } = e, u = VS(t), d = n.length;
  const p = [];
  if (o = o || [], !d)
    return o.length ? u(new Q(o, i, c)) : u(null, i);
  for (let f = 0; f < n.length; f++) {
    const h = n[f];
    h(a, function(m) {
      if (m) {
        if (!Q.isError(m))
          return u(m, i);
        if (r)
          return m.value = i, u(m, i);
        p.push(m);
      }
      if (--d <= 0) {
        if (p.length && (l && p.sort(l), o.length && p.push(...o), o = p), o.length) {
          u(new Q(o, i, c), i);
          return;
        }
        u(null, i);
      }
    });
  }
}
function GS(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), l = o.length; l--; ) {
      var c = o[e ? l : ++a];
      if (r(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var HS = GS, YS = HS, WS = YS(), KS = WS, XS = KS, ZS = Ge;
function JS(e, t) {
  return e && XS(e, t, ZS);
}
var cs = JS, e0 = "__lodash_hash_undefined__";
function t0(e) {
  return this.__data__.set(e, e0), this;
}
var r0 = t0;
function n0(e) {
  return this.__data__.has(e);
}
var a0 = n0, i0 = gr, s0 = r0, o0 = a0;
function dt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new i0(); ++t < r; )
    this.add(e[t]);
}
dt.prototype.add = dt.prototype.push = s0;
dt.prototype.has = o0;
var l0 = dt;
function c0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var u0 = c0;
function d0(e, t) {
  return e.has(t);
}
var p0 = d0, f0 = l0, h0 = u0, m0 = p0, g0 = 1, y0 = 2;
function b0(e, t, r, n, a, i) {
  var o = r & g0, l = e.length, c = t.length;
  if (l != c && !(o && c > l))
    return !1;
  var u = i.get(e), d = i.get(t);
  if (u && d)
    return u == t && d == e;
  var p = -1, f = !0, h = r & y0 ? new f0() : void 0;
  for (i.set(e, t), i.set(t, e); ++p < l; ) {
    var y = e[p], m = t[p];
    if (n)
      var E = o ? n(m, y, p, t, e, i) : n(y, m, p, e, t, i);
    if (E !== void 0) {
      if (E)
        continue;
      f = !1;
      break;
    }
    if (h) {
      if (!h0(t, function(g, S) {
        if (!m0(h, S) && (y === g || a(y, g, r, n, i)))
          return h.push(S);
      })) {
        f = !1;
        break;
      }
    } else if (!(y === m || a(y, m, r, n, i))) {
      f = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), f;
}
var us = b0;
function v0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var E0 = v0;
function S0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var _0 = S0, Dn = Ce, Ln = Aa, $0 = Et, x0 = us, C0 = E0, w0 = _0, T0 = 1, I0 = 2, F0 = "[object Boolean]", A0 = "[object Date]", O0 = "[object Error]", R0 = "[object Map]", k0 = "[object Number]", P0 = "[object RegExp]", D0 = "[object Set]", L0 = "[object String]", N0 = "[object Symbol]", B0 = "[object ArrayBuffer]", U0 = "[object DataView]", Nn = Dn ? Dn.prototype : void 0, Lt = Nn ? Nn.valueOf : void 0;
function z0(e, t, r, n, a, i, o) {
  switch (r) {
    case U0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case B0:
      return !(e.byteLength != t.byteLength || !i(new Ln(e), new Ln(t)));
    case F0:
    case A0:
    case k0:
      return $0(+e, +t);
    case O0:
      return e.name == t.name && e.message == t.message;
    case P0:
    case L0:
      return e == t + "";
    case R0:
      var l = C0;
    case D0:
      var c = n & T0;
      if (l || (l = w0), e.size != t.size && !c)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= I0, o.set(e, t);
      var d = x0(l(e), l(t), n, a, i, o);
      return o.delete(e), d;
    case N0:
      if (Lt)
        return Lt.call(e) == Lt.call(t);
  }
  return !1;
}
var M0 = z0, Bn = Fa, j0 = 1, Q0 = Object.prototype, q0 = Q0.hasOwnProperty;
function V0(e, t, r, n, a, i) {
  var o = r & j0, l = Bn(e), c = l.length, u = Bn(t), d = u.length;
  if (c != d && !o)
    return !1;
  for (var p = c; p--; ) {
    var f = l[p];
    if (!(o ? f in t : q0.call(t, f)))
      return !1;
  }
  var h = i.get(e), y = i.get(t);
  if (h && y)
    return h == t && y == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var E = o; ++p < c; ) {
    f = l[p];
    var g = e[f], S = t[f];
    if (n)
      var A = o ? n(S, g, f, t, e, i) : n(g, S, f, e, t, i);
    if (!(A === void 0 ? g === S || a(g, S, r, n, i) : A)) {
      m = !1;
      break;
    }
    E || (E = f == "constructor");
  }
  if (m && !E) {
    var B = e.constructor, te = t.constructor;
    B != te && "constructor" in e && "constructor" in t && !(typeof B == "function" && B instanceof B && typeof te == "function" && te instanceof te) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var G0 = V0, Nt = $r, H0 = us, Y0 = M0, W0 = G0, Un = je, zn = q, Mn = bt, K0 = fr, X0 = 1, jn = "[object Arguments]", Qn = "[object Array]", Je = "[object Object]", Z0 = Object.prototype, qn = Z0.hasOwnProperty;
function J0(e, t, r, n, a, i) {
  var o = zn(e), l = zn(t), c = o ? Qn : Un(e), u = l ? Qn : Un(t);
  c = c == jn ? Je : c, u = u == jn ? Je : u;
  var d = c == Je, p = u == Je, f = c == u;
  if (f && Mn(e)) {
    if (!Mn(t))
      return !1;
    o = !0, d = !1;
  }
  if (f && !d)
    return i || (i = new Nt()), o || K0(e) ? H0(e, t, r, n, a, i) : Y0(e, t, c, r, n, a, i);
  if (!(r & X0)) {
    var h = d && qn.call(e, "__wrapped__"), y = p && qn.call(t, "__wrapped__");
    if (h || y) {
      var m = h ? e.value() : e, E = y ? t.value() : t;
      return i || (i = new Nt()), a(m, E, r, n, i);
    }
  }
  return f ? (i || (i = new Nt()), W0(e, t, r, n, a, i)) : !1;
}
var e_ = J0, t_ = e_, Vn = ne;
function ds(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Vn(e) && !Vn(t) ? e !== e && t !== t : t_(e, t, r, n, ds, a);
}
var ps = ds, r_ = $r, n_ = ps, a_ = 1, i_ = 2;
function s_(e, t, r, n) {
  var a = r.length, i = a, o = !n;
  if (e == null)
    return !i;
  for (e = Object(e); a--; ) {
    var l = r[a];
    if (o && l[2] ? l[1] !== e[l[0]] : !(l[0] in e))
      return !1;
  }
  for (; ++a < i; ) {
    l = r[a];
    var c = l[0], u = e[c], d = l[1];
    if (o && l[2]) {
      if (u === void 0 && !(c in e))
        return !1;
    } else {
      var p = new r_();
      if (n)
        var f = n(u, d, c, e, t, p);
      if (!(f === void 0 ? n_(d, u, a_ | i_, n, p) : f))
        return !1;
    }
  }
  return !0;
}
var o_ = s_, l_ = se;
function c_(e) {
  return e === e && !l_(e);
}
var fs = c_, u_ = fs, d_ = Ge;
function p_(e) {
  for (var t = d_(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, u_(a)];
  }
  return t;
}
var f_ = p_;
function h_(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var hs = h_, m_ = o_, g_ = f_, y_ = hs;
function b_(e) {
  var t = g_(e);
  return t.length == 1 && t[0][2] ? y_(t[0][0], t[0][1]) : function(r) {
    return r === e || m_(r, e, t);
  };
}
var v_ = b_, E_ = ps, S_ = ba, __ = vr, $_ = mr, x_ = fs, C_ = hs, w_ = qe, T_ = 1, I_ = 2;
function F_(e, t) {
  return $_(e) && x_(t) ? C_(w_(e), t) : function(r) {
    var n = S_(r, e);
    return n === void 0 && n === t ? __(r, e) : E_(t, n, T_ | I_);
  };
}
var A_ = F_;
function O_(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var R_ = O_, k_ = br;
function P_(e) {
  return function(t) {
    return k_(t, e);
  };
}
var D_ = P_, L_ = R_, N_ = D_, B_ = mr, U_ = qe;
function z_(e) {
  return B_(e) ? L_(U_(e)) : N_(e);
}
var M_ = z_, j_ = v_, Q_ = A_, q_ = Sr, V_ = q, G_ = M_;
function H_(e) {
  return typeof e == "function" ? e : e == null ? q_ : typeof e == "object" ? V_(e) ? Q_(e[0], e[1]) : j_(e) : G_(e);
}
var ms = H_, Y_ = wt, W_ = cs, K_ = ms;
function X_(e, t) {
  var r = {};
  return t = K_(t), W_(e, function(n, a, i) {
    Y_(r, a, t(n, a, i));
  }), r;
}
var Z_ = X_;
const gs = /* @__PURE__ */ P(Z_);
function ye(e) {
  this._maxSize = e, this.clear();
}
ye.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
ye.prototype.get = function(e) {
  return this._values[e];
};
ye.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var J_ = /[^.^\]^[]+|(?=\[\]|\.\.)/g, ys = /^\d+$/, e$ = /^\d/, t$ = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, r$ = /^\s*(['"]?)(.*?)(\1)\s*$/, Nr = 512, Gn = new ye(Nr), Hn = new ye(Nr), Yn = new ye(Nr), Ft = {
  Cache: ye,
  split: ar,
  normalizePath: Bt,
  setter: function(e) {
    var t = Bt(e);
    return Hn.get(e) || Hn.set(e, function(n, a) {
      for (var i = 0, o = t.length, l = n; i < o - 1; ) {
        var c = t[i];
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return n;
        l = l[t[i++]];
      }
      l[t[i]] = a;
    });
  },
  getter: function(e, t) {
    var r = Bt(e);
    return Yn.get(e) || Yn.set(e, function(a) {
      for (var i = 0, o = r.length; i < o; )
        if (a != null || !t)
          a = a[r[i++]];
        else
          return;
      return a;
    });
  },
  join: function(e) {
    return e.reduce(function(t, r) {
      return t + (Br(r) || ys.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    n$(Array.isArray(e) ? e : ar(e), t, r);
  }
};
function Bt(e) {
  return Gn.get(e) || Gn.set(
    e,
    ar(e).map(function(t) {
      return t.replace(r$, "$2");
    })
  );
}
function ar(e) {
  return e.match(J_) || [""];
}
function n$(e, t, r) {
  var n = e.length, a, i, o, l;
  for (i = 0; i < n; i++)
    a = e[i], a && (s$(a) && (a = '"' + a + '"'), l = Br(a), o = !l && /^\d+$/.test(a), t.call(r, a, l, o, i, e));
}
function Br(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function a$(e) {
  return e.match(e$) && !e.match(ys);
}
function i$(e) {
  return t$.test(e);
}
function s$(e) {
  return !Br(e) && (a$(e) || i$(e));
}
const et = {
  context: "$",
  value: "."
};
class ue {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
      throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === et.context, this.isValue = this.key[0] === et.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? et.context : this.isValue ? et.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && Ft.getter(this.path, !0), this.map = r.map;
  }
  getValue(t, r, n) {
    let a = this.isContext ? n : this.isValue ? t : r;
    return this.getter && (a = this.getter(a || {})), this.map && (a = this.map(a)), a;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(t, r) {
    return this.getValue(t, r == null ? void 0 : r.parent, r == null ? void 0 : r.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(t) {
    return t && t.__isYupRef;
  }
}
ue.prototype.__isYupRef = !0;
function pt() {
  return pt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pt.apply(this, arguments);
}
function o$(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function tt(e) {
  function t(r, n) {
    let {
      value: a,
      path: i = "",
      label: o,
      options: l,
      originalValue: c,
      sync: u
    } = r, d = o$(r, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name: p,
      test: f,
      params: h,
      message: y
    } = e;
    let {
      parent: m,
      context: E
    } = l;
    function g(O) {
      return ue.isRef(O) ? O.getValue(a, m, E) : O;
    }
    function S(O = {}) {
      const fe = gs(pt({
        value: a,
        originalValue: c,
        label: o,
        path: O.path || i
      }, h, O.params), g), We = new Q(Q.formatError(O.message || y, fe), a, fe.path, O.type || p);
      return We.params = fe, We;
    }
    let A = pt({
      path: i,
      parent: m,
      type: p,
      createError: S,
      resolve: g,
      options: l,
      originalValue: c
    }, d);
    if (!u) {
      try {
        Promise.resolve(f.call(A, a, A)).then((O) => {
          Q.isError(O) ? n(O) : O ? n(null, O) : n(S());
        }).catch(n);
      } catch (O) {
        n(O);
      }
      return;
    }
    let B;
    try {
      var te;
      if (B = f.call(A, a, A), typeof ((te = B) == null ? void 0 : te.then) == "function")
        throw new Error(`Validation test of type: "${A.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (O) {
      n(O);
      return;
    }
    Q.isError(B) ? n(B) : B ? n(null, B) : n(S());
  }
  return t.OPTIONS = e, t;
}
let l$ = (e) => e.substr(0, e.length - 1).substr(1);
function c$(e, t, r, n = r) {
  let a, i, o;
  return t ? (Ft.forEach(t, (l, c, u) => {
    let d = c ? l$(l) : l;
    if (e = e.resolve({
      context: n,
      parent: a,
      value: r
    }), e.innerType) {
      let p = u ? parseInt(d, 10) : 0;
      if (r && p >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);
      a = r, r = r && r[p], e = e.innerType;
    }
    if (!u) {
      if (!e.fields || !e.fields[d])
        throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e._type}")`);
      a = r, r = r && r[d], e = e.fields[d];
    }
    i = d, o = c ? "[" + l + "]" : "." + l;
  }), {
    schema: e,
    parent: a,
    parentPath: i
  }) : {
    parent: a,
    parentPath: t,
    schema: e
  };
}
class ft {
  constructor() {
    this.list = void 0, this.refs = void 0, this.list = /* @__PURE__ */ new Set(), this.refs = /* @__PURE__ */ new Map();
  }
  get size() {
    return this.list.size + this.refs.size;
  }
  describe() {
    const t = [];
    for (const r of this.list)
      t.push(r);
    for (const [, r] of this.refs)
      t.push(r.describe());
    return t;
  }
  toArray() {
    return Array.from(this.list).concat(Array.from(this.refs.values()));
  }
  resolveAll(t) {
    return this.toArray().reduce((r, n) => r.concat(ue.isRef(n) ? t(n) : n), []);
  }
  add(t) {
    ue.isRef(t) ? this.refs.set(t.key, t) : this.list.add(t);
  }
  delete(t) {
    ue.isRef(t) ? this.refs.delete(t.key) : this.list.delete(t);
  }
  clone() {
    const t = new ft();
    return t.list = new Set(this.list), t.refs = new Map(this.refs), t;
  }
  merge(t, r) {
    const n = this.clone();
    return t.list.forEach((a) => n.add(a)), t.refs.forEach((a) => n.add(a)), r.list.forEach((a) => n.delete(a)), r.refs.forEach((a) => n.delete(a)), n;
  }
}
function G() {
  return G = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, G.apply(this, arguments);
}
class M {
  constructor(t) {
    this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new ft(), this._blacklist = new ft(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(me.notType);
    }), this.type = (t == null ? void 0 : t.type) || "mixed", this.spec = G({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      nullable: !1,
      presence: "optional"
    }, t == null ? void 0 : t.spec);
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  _typeCheck(t) {
    return !0;
  }
  clone(t) {
    if (this._mutate)
      return t && Object.assign(this.spec, t), this;
    const r = Object.create(Object.getPrototypeOf(this));
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = G({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Jt(G({}, this.spec, t)), r;
  }
  label(t) {
    let r = this.clone();
    return r.spec.label = t, r;
  }
  meta(...t) {
    if (t.length === 0)
      return this.spec.meta;
    let r = this.clone();
    return r.spec.meta = Object.assign(r.spec.meta || {}, t[0]), r;
  }
  // withContext<TContext extends AnyObject>(): BaseSchema<
  //   TCast,
  //   TContext,
  //   TOutput
  // > {
  //   return this as any;
  // }
  withMutation(t) {
    let r = this._mutate;
    this._mutate = !0;
    let n = t(this);
    return this._mutate = r, n;
  }
  concat(t) {
    if (!t || t === this)
      return this;
    if (t.type !== this.type && this.type !== "mixed")
      throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
    let r = this, n = t.clone();
    const a = G({}, r.spec, n.spec);
    return n.spec = a, n._typeError || (n._typeError = r._typeError), n._whitelistError || (n._whitelistError = r._whitelistError), n._blacklistError || (n._blacklistError = r._blacklistError), n._whitelist = r._whitelist.merge(t._whitelist, t._blacklist), n._blacklist = r._blacklist.merge(t._blacklist, t._whitelist), n.tests = r.tests, n.exclusiveTests = r.exclusiveTests, n.withMutation((i) => {
      t.tests.forEach((o) => {
        i.test(o.OPTIONS);
      });
    }), n.transforms = [...r.transforms, ...n.transforms], n;
  }
  isType(t) {
    return this.spec.nullable && t === null ? !0 : this._typeCheck(t);
  }
  resolve(t) {
    let r = this;
    if (r.conditions.length) {
      let n = r.conditions;
      r = r.clone(), r.conditions = [], r = n.reduce((a, i) => i.resolve(a, t), r), r = r.resolve(t);
    }
    return r;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {*=} options.parent
   * @param {*=} options.context
   */
  cast(t, r = {}) {
    let n = this.resolve(G({
      value: t
    }, r)), a = n._cast(t, r);
    if (t !== void 0 && r.assert !== !1 && n.isType(a) !== !0) {
      let i = ze(t), o = ze(a);
      throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${n._type}". 

attempted value: ${i} 
` + (o !== i ? `result of cast: ${o}` : ""));
    }
    return a;
  }
  _cast(t, r) {
    let n = t === void 0 ? t : this.transforms.reduce((a, i) => i.call(this, a, t, this), t);
    return n === void 0 && (n = this.getDefault()), n;
  }
  _validate(t, r = {}, n) {
    let {
      sync: a,
      path: i,
      from: o = [],
      originalValue: l = t,
      strict: c = this.spec.strict,
      abortEarly: u = this.spec.abortEarly
    } = r, d = t;
    c || (d = this._cast(d, G({
      assert: !1
    }, r)));
    let p = {
      value: d,
      path: i,
      options: r,
      originalValue: l,
      schema: this,
      label: this.spec.label,
      sync: a,
      from: o
    }, f = [];
    this._typeError && f.push(this._typeError);
    let h = [];
    this._whitelistError && h.push(this._whitelistError), this._blacklistError && h.push(this._blacklistError), nr({
      args: p,
      value: d,
      path: i,
      sync: a,
      tests: f,
      endEarly: u
    }, (y) => {
      if (y)
        return void n(y, d);
      nr({
        tests: this.tests.concat(h),
        args: p,
        path: i,
        sync: a,
        value: d,
        endEarly: u
      }, n);
    });
  }
  validate(t, r, n) {
    let a = this.resolve(G({}, r, {
      value: t
    }));
    return typeof n == "function" ? a._validate(t, r, n) : new Promise((i, o) => a._validate(t, r, (l, c) => {
      l ? o(l) : i(c);
    }));
  }
  validateSync(t, r) {
    let n = this.resolve(G({}, r, {
      value: t
    })), a;
    return n._validate(t, G({}, r, {
      sync: !0
    }), (i, o) => {
      if (i)
        throw i;
      a = o;
    }), a;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (Q.isError(n))
        return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (Q.isError(n))
        return !1;
      throw n;
    }
  }
  _getDefault() {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this) : Jt(t);
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault();
  }
  default(t) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: t
    });
  }
  strict(t = !0) {
    let r = this.clone();
    return r.spec.strict = t, r;
  }
  _isPresent(t) {
    return t != null;
  }
  defined(t = me.defined) {
    return this.test({
      message: t,
      name: "defined",
      exclusive: !0,
      test(r) {
        return r !== void 0;
      }
    });
  }
  required(t = me.required) {
    return this.clone({
      presence: "required"
    }).withMutation((r) => r.test({
      message: t,
      name: "required",
      exclusive: !0,
      test(n) {
        return this.schema._isPresent(n);
      }
    }));
  }
  notRequired() {
    let t = this.clone({
      presence: "optional"
    });
    return t.tests = t.tests.filter((r) => r.OPTIONS.name !== "required"), t;
  }
  nullable(t = !0) {
    return this.clone({
      nullable: t !== !1
    });
  }
  transform(t) {
    let r = this.clone();
    return r.transforms.push(t), r;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...t) {
    let r;
    if (t.length === 1 ? typeof t[0] == "function" ? r = {
      test: t[0]
    } : r = t[0] : t.length === 2 ? r = {
      name: t[0],
      test: t[1]
    } : r = {
      name: t[0],
      message: t[1],
      test: t[2]
    }, r.message === void 0 && (r.message = me.default), typeof r.test != "function")
      throw new TypeError("`test` is a required parameters");
    let n = this.clone(), a = tt(r), i = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === r.name && (i || o.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = ls(t).map((i) => new ue(i));
    return a.forEach((i) => {
      i.isSibling && n.deps.push(i.key);
    }), n.conditions.push(new QS(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r._typeError = tt({
      message: t,
      name: "typeError",
      test(n) {
        return n !== void 0 && !this.schema.isType(n) ? this.createError({
          params: {
            type: this.schema._type
          }
        }) : !0;
      }
    }), r;
  }
  oneOf(t, r = me.oneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._whitelist.add(a), n._blacklist.delete(a);
    }), n._whitelistError = tt({
      message: r,
      name: "oneOf",
      test(a) {
        if (a === void 0)
          return !0;
        let i = this.schema._whitelist, o = i.resolveAll(this.resolve);
        return o.includes(a) ? !0 : this.createError({
          params: {
            values: i.toArray().join(", "),
            resolved: o
          }
        });
      }
    }), n;
  }
  notOneOf(t, r = me.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n._blacklistError = tt({
      message: r,
      name: "notOneOf",
      test(a) {
        let i = this.schema._blacklist, o = i.resolveAll(this.resolve);
        return o.includes(a) ? this.createError({
          params: {
            values: i.toArray().join(", "),
            resolved: o
          }
        }) : !0;
      }
    }), n;
  }
  strip(t = !0) {
    let r = this.clone();
    return r.spec.strip = t, r;
  }
  describe() {
    const t = this.clone(), {
      label: r,
      meta: n
    } = t.spec;
    return {
      meta: n,
      label: r,
      type: t.type,
      oneOf: t._whitelist.describe(),
      notOneOf: t._blacklist.describe(),
      tests: t.tests.map((i) => ({
        name: i.OPTIONS.name,
        params: i.OPTIONS.params
      })).filter((i, o, l) => l.findIndex((c) => c.name === i.name) === o)
    };
  }
}
M.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"])
  M.prototype[`${e}At`] = function(t, r, n = {}) {
    const {
      parent: a,
      parentPath: i,
      schema: o
    } = c$(this, t, r, n.context);
    return o[e](a && a[i], G({}, n, {
      parent: a,
      path: t
    }));
  };
for (const e of ["equals", "is"])
  M.prototype[e] = M.prototype.oneOf;
for (const e of ["not", "nope"])
  M.prototype[e] = M.prototype.notOneOf;
M.prototype.optional = M.prototype.notRequired;
const u$ = M;
u$.prototype;
const J = (e) => e == null;
let d$ = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, p$ = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, f$ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, h$ = (e) => J(e) || e === e.trim(), m$ = {}.toString();
function Ne() {
  return new bs();
}
class bs extends M {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === m$ ? t : r;
      });
    });
  }
  _typeCheck(t) {
    return t instanceof String && (t = t.valueOf()), typeof t == "string";
  }
  _isPresent(t) {
    return super._isPresent(t) && !!t.length;
  }
  length(t, r = Z.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      test(n) {
        return J(n) || n.length === this.resolve(t);
      }
    });
  }
  min(t, r = Z.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(n) {
        return J(n) || n.length >= this.resolve(t);
      }
    });
  }
  max(t, r = Z.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: t
      },
      test(n) {
        return J(n) || n.length <= this.resolve(t);
      }
    });
  }
  matches(t, r) {
    let n = !1, a, i;
    return r && (typeof r == "object" ? {
      excludeEmptyString: n = !1,
      message: a,
      name: i
    } = r : a = r), this.test({
      name: i || "matches",
      message: a || Z.matches,
      params: {
        regex: t
      },
      test: (o) => J(o) || o === "" && n || o.search(t) !== -1
    });
  }
  email(t = Z.email) {
    return this.matches(d$, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = Z.url) {
    return this.matches(p$, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = Z.uuid) {
    return this.matches(f$, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = Z.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: h$
    });
  }
  lowercase(t = Z.lowercase) {
    return this.transform((r) => J(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => J(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = Z.uppercase) {
    return this.transform((r) => J(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => J(r) || r === r.toUpperCase()
    });
  }
}
Ne.prototype = bs.prototype;
var g$ = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function y$(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, a;
  if (a = g$.exec(e)) {
    for (var i = 0, o; o = t[i]; ++i)
      a[o] = +a[o] || 0;
    a[2] = (+a[2] || 1) - 1, a[3] = +a[3] || 1, a[7] = a[7] ? String(a[7]).substr(0, 3) : 0, (a[8] === void 0 || a[8] === "") && (a[9] === void 0 || a[9] === "") ? n = +new Date(a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : (a[8] !== "Z" && a[9] !== void 0 && (r = a[10] * 60 + a[11], a[9] === "+" && (r = 0 - r)), n = Date.UTC(a[1], a[2], a[3], a[4], a[5] + r, a[6], a[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let vs = /* @__PURE__ */ new Date(""), b$ = (e) => Object.prototype.toString.call(e) === "[object Date]";
class Es extends M {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = y$(t), isNaN(t) ? vs : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return b$(t) && !isNaN(t.getTime());
  }
  prepareParam(t, r) {
    let n;
    if (ue.isRef(t))
      n = t;
    else {
      let a = this.cast(t);
      if (!this._typeCheck(a))
        throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = a;
    }
    return n;
  }
  min(t, r = er.min) {
    let n = this.prepareParam(t, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(a) {
        return J(a) || a >= this.resolve(n);
      }
    });
  }
  max(t, r = er.max) {
    let n = this.prepareParam(t, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      test(a) {
        return J(a) || a <= this.resolve(n);
      }
    });
  }
}
Es.INVALID_DATE = vs;
Es.prototype;
function v$(e, t, r, n) {
  var a = -1, i = e == null ? 0 : e.length;
  for (n && i && (r = e[++a]); ++a < i; )
    r = t(r, e[a], a, e);
  return r;
}
var E$ = v$;
function S$(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var _$ = S$, $$ = _$, x$ = {
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
}, C$ = $$(x$), w$ = C$, T$ = w$, I$ = Qe, F$ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, A$ = "\\u0300-\\u036f", O$ = "\\ufe20-\\ufe2f", R$ = "\\u20d0-\\u20ff", k$ = A$ + O$ + R$, P$ = "[" + k$ + "]", D$ = RegExp(P$, "g");
function L$(e) {
  return e = I$(e), e && e.replace(F$, T$).replace(D$, "");
}
var N$ = L$, B$ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function U$(e) {
  return e.match(B$) || [];
}
var z$ = U$, M$ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function j$(e) {
  return M$.test(e);
}
var Q$ = j$, Ss = "\\ud800-\\udfff", q$ = "\\u0300-\\u036f", V$ = "\\ufe20-\\ufe2f", G$ = "\\u20d0-\\u20ff", H$ = q$ + V$ + G$, _s = "\\u2700-\\u27bf", $s = "a-z\\xdf-\\xf6\\xf8-\\xff", Y$ = "\\xac\\xb1\\xd7\\xf7", W$ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", K$ = "\\u2000-\\u206f", X$ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", xs = "A-Z\\xc0-\\xd6\\xd8-\\xde", Z$ = "\\ufe0e\\ufe0f", Cs = Y$ + W$ + K$ + X$, ws = "['’]", Wn = "[" + Cs + "]", J$ = "[" + H$ + "]", Ts = "\\d+", e1 = "[" + _s + "]", Is = "[" + $s + "]", Fs = "[^" + Ss + Cs + Ts + _s + $s + xs + "]", t1 = "\\ud83c[\\udffb-\\udfff]", r1 = "(?:" + J$ + "|" + t1 + ")", n1 = "[^" + Ss + "]", As = "(?:\\ud83c[\\udde6-\\uddff]){2}", Os = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ee = "[" + xs + "]", a1 = "\\u200d", Kn = "(?:" + Is + "|" + Fs + ")", i1 = "(?:" + Ee + "|" + Fs + ")", Xn = "(?:" + ws + "(?:d|ll|m|re|s|t|ve))?", Zn = "(?:" + ws + "(?:D|LL|M|RE|S|T|VE))?", Rs = r1 + "?", ks = "[" + Z$ + "]?", s1 = "(?:" + a1 + "(?:" + [n1, As, Os].join("|") + ")" + ks + Rs + ")*", o1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", l1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", c1 = ks + Rs + s1, u1 = "(?:" + [e1, As, Os].join("|") + ")" + c1, d1 = RegExp([
  Ee + "?" + Is + "+" + Xn + "(?=" + [Wn, Ee, "$"].join("|") + ")",
  i1 + "+" + Zn + "(?=" + [Wn, Ee + Kn, "$"].join("|") + ")",
  Ee + "?" + Kn + "+" + Xn,
  Ee + "+" + Zn,
  l1,
  o1,
  Ts,
  u1
].join("|"), "g");
function p1(e) {
  return e.match(d1) || [];
}
var f1 = p1, h1 = z$, m1 = Q$, g1 = Qe, y1 = f1;
function b1(e, t, r) {
  return e = g1(e), t = r ? void 0 : t, t === void 0 ? m1(e) ? y1(e) : h1(e) : e.match(t) || [];
}
var v1 = b1, E1 = E$, S1 = N$, _1 = v1, $1 = "['’]", x1 = RegExp($1, "g");
function C1(e) {
  return function(t) {
    return E1(_1(S1(t).replace(x1, "")), e, "");
  };
}
var Ps = C1, w1 = Ps, T1 = w1(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), I1 = T1;
const Jn = /* @__PURE__ */ P(I1);
function F1(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + t];
  return i;
}
var A1 = F1, O1 = A1;
function R1(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : O1(e, t, r);
}
var k1 = R1, P1 = "\\ud800-\\udfff", D1 = "\\u0300-\\u036f", L1 = "\\ufe20-\\ufe2f", N1 = "\\u20d0-\\u20ff", B1 = D1 + L1 + N1, U1 = "\\ufe0e\\ufe0f", z1 = "\\u200d", M1 = RegExp("[" + z1 + P1 + B1 + U1 + "]");
function j1(e) {
  return M1.test(e);
}
var Ds = j1;
function Q1(e) {
  return e.split("");
}
var q1 = Q1, Ls = "\\ud800-\\udfff", V1 = "\\u0300-\\u036f", G1 = "\\ufe20-\\ufe2f", H1 = "\\u20d0-\\u20ff", Y1 = V1 + G1 + H1, W1 = "\\ufe0e\\ufe0f", K1 = "[" + Ls + "]", ir = "[" + Y1 + "]", sr = "\\ud83c[\\udffb-\\udfff]", X1 = "(?:" + ir + "|" + sr + ")", Ns = "[^" + Ls + "]", Bs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Us = "[\\ud800-\\udbff][\\udc00-\\udfff]", Z1 = "\\u200d", zs = X1 + "?", Ms = "[" + W1 + "]?", J1 = "(?:" + Z1 + "(?:" + [Ns, Bs, Us].join("|") + ")" + Ms + zs + ")*", ex = Ms + zs + J1, tx = "(?:" + [Ns + ir + "?", ir, Bs, Us, K1].join("|") + ")", rx = RegExp(sr + "(?=" + sr + ")|" + tx + ex, "g");
function nx(e) {
  return e.match(rx) || [];
}
var ax = nx, ix = q1, sx = Ds, ox = ax;
function lx(e) {
  return sx(e) ? ox(e) : ix(e);
}
var cx = lx, ux = k1, dx = Ds, px = cx, fx = Qe;
function hx(e) {
  return function(t) {
    t = fx(t);
    var r = dx(t) ? px(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? ux(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var mx = hx, gx = mx, yx = gx("toUpperCase"), bx = yx, vx = Qe, Ex = bx;
function Sx(e) {
  return Ex(vx(e).toLowerCase());
}
var _x = Sx, $x = _x, xx = Ps, Cx = xx(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? $x(t) : t);
}), wx = Cx;
const Tx = /* @__PURE__ */ P(wx);
var Ix = wt, Fx = cs, Ax = ms;
function Ox(e, t) {
  var r = {};
  return t = Ax(t), Fx(e, function(n, a, i) {
    Ix(r, t(n, a, i), n);
  }), r;
}
var Rx = Ox;
const kx = /* @__PURE__ */ P(Rx);
var Ur = { exports: {} };
Ur.exports = function(e) {
  return js(Px(e), e);
};
Ur.exports.array = js;
function js(e, t) {
  var r = e.length, n = new Array(r), a = {}, i = r, o = Dx(t), l = Lx(e);
  for (t.forEach(function(u) {
    if (!l.has(u[0]) || !l.has(u[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); i--; )
    a[i] || c(e[i], i, /* @__PURE__ */ new Set());
  return n;
  function c(u, d, p) {
    if (p.has(u)) {
      var f;
      try {
        f = ", node was:" + JSON.stringify(u);
      } catch {
        f = "";
      }
      throw new Error("Cyclic dependency" + f);
    }
    if (!l.has(u))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(u));
    if (!a[d]) {
      a[d] = !0;
      var h = o.get(u) || /* @__PURE__ */ new Set();
      if (h = Array.from(h), d = h.length) {
        p.add(u);
        do {
          var y = h[--d];
          c(y, l.get(y), p);
        } while (d);
        p.delete(u);
      }
      n[--r] = u;
    }
  }
}
function Px(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.add(a[0]), t.add(a[1]);
  }
  return Array.from(t);
}
function Dx(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.has(a[0]) || t.set(a[0], /* @__PURE__ */ new Set()), t.has(a[1]) || t.set(a[1], /* @__PURE__ */ new Set()), t.get(a[0]).add(a[1]);
  }
  return t;
}
function Lx(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var Nx = Ur.exports;
const Bx = /* @__PURE__ */ P(Nx);
function Ux(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([o, l]) => `${o}-${l}`));
  function i(o, l) {
    let c = Ft.split(o)[0];
    n.add(c), a.has(`${l}-${c}`) || r.push([l, c]);
  }
  for (const o in e)
    if (ut(e, o)) {
      let l = e[o];
      n.add(o), ue.isRef(l) && l.isSibling ? i(l.path, o) : os(l) && "deps" in l && l.deps.forEach((c) => i(c, o));
    }
  return Bx.array(Array.from(n), r).reverse();
}
function ea(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var i;
    if (((i = t.path) == null ? void 0 : i.indexOf(n)) !== -1)
      return r = a, !0;
  }), r;
}
function Qs(e) {
  return (t, r) => ea(e, t) - ea(e, r);
}
function Se() {
  return Se = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Se.apply(this, arguments);
}
let ta = (e) => Object.prototype.toString.call(e) === "[object Object]";
function zx(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const Mx = Qs([]);
class qs extends M {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Mx, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      this.transform(function(n) {
        if (typeof n == "string")
          try {
            n = JSON.parse(n);
          } catch {
            n = null;
          }
        return this.isType(n) ? n : null;
      }), t && this.shape(t);
    });
  }
  _typeCheck(t) {
    return ta(t) || typeof t == "function";
  }
  _cast(t, r = {}) {
    var n;
    let a = super._cast(t, r);
    if (a === void 0)
      return this.getDefault();
    if (!this._typeCheck(a))
      return a;
    let i = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, l = this._nodes.concat(Object.keys(a).filter((p) => this._nodes.indexOf(p) === -1)), c = {}, u = Se({}, r, {
      parent: c,
      __validating: r.__validating || !1
    }), d = !1;
    for (const p of l) {
      let f = i[p], h = ut(a, p);
      if (f) {
        let y, m = a[p];
        u.path = (r.path ? `${r.path}.` : "") + p, f = f.resolve({
          value: m,
          context: r.context,
          parent: c
        });
        let E = "spec" in f ? f.spec : void 0, g = E == null ? void 0 : E.strict;
        if (E != null && E.strip) {
          d = d || p in a;
          continue;
        }
        y = !r.__validating || !g ? (
          // TODO: use _cast, this is double resolving
          f.cast(a[p], u)
        ) : a[p], y !== void 0 && (c[p] = y);
      } else
        h && !o && (c[p] = a[p]);
      c[p] !== a[p] && (d = !0);
    }
    return d ? c : a;
  }
  _validate(t, r = {}, n) {
    let a = [], {
      sync: i,
      from: o = [],
      originalValue: l = t,
      abortEarly: c = this.spec.abortEarly,
      recursive: u = this.spec.recursive
    } = r;
    o = [{
      schema: this,
      value: l
    }, ...o], r.__validating = !0, r.originalValue = l, r.from = o, super._validate(t, r, (d, p) => {
      if (d) {
        if (!Q.isError(d) || c)
          return void n(d, p);
        a.push(d);
      }
      if (!u || !ta(p)) {
        n(a[0] || null, p);
        return;
      }
      l = l || p;
      let f = this._nodes.map((h) => (y, m) => {
        let E = h.indexOf(".") === -1 ? (r.path ? `${r.path}.` : "") + h : `${r.path || ""}["${h}"]`, g = this.fields[h];
        if (g && "validate" in g) {
          g.validate(p[h], Se({}, r, {
            // @ts-ignore
            path: E,
            from: o,
            // inner fields are always strict:
            // 1. this isn't strict so the casting will also have cast inner values
            // 2. this is strict in which case the nested values weren't cast either
            strict: !0,
            parent: p,
            originalValue: l[h]
          }), m);
          return;
        }
        m(null);
      });
      nr({
        sync: i,
        tests: f,
        value: p,
        errors: a,
        endEarly: c,
        sort: this._sortErrors,
        path: r.path
      }, n);
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.fields = Se({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), n = r.fields;
    for (let [a, i] of Object.entries(this.fields)) {
      const o = n[a];
      o === void 0 ? n[a] = i : o instanceof M && i instanceof M && (n[a] = i.concat(o));
    }
    return r.withMutation(() => r.shape(n, this._excludedEdges));
  }
  getDefaultFromShape() {
    let t = {};
    return this._nodes.forEach((r) => {
      const n = this.fields[r];
      t[r] = "default" in n ? n.getDefault() : void 0;
    }), t;
  }
  _getDefault() {
    if ("default" in this.spec)
      return super._getDefault();
    if (this._nodes.length)
      return this.getDefaultFromShape();
  }
  shape(t, r = []) {
    let n = this.clone(), a = Object.assign(n.fields, t);
    return n.fields = a, n._sortErrors = Qs(Object.keys(a)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = Ux(a, n._excludedEdges), n;
  }
  pick(t) {
    const r = {};
    for (const n of t)
      this.fields[n] && (r[n] = this.fields[n]);
    return this.clone().withMutation((n) => (n.fields = {}, n.shape(r)));
  }
  omit(t) {
    const r = this.clone(), n = r.fields;
    r.fields = {};
    for (const a of t)
      delete n[a];
    return r.withMutation(() => r.shape(n));
  }
  from(t, r, n) {
    let a = Ft.getter(t, !0);
    return this.transform((i) => {
      if (i == null)
        return i;
      let o = i;
      return ut(i, t) && (o = Se({}, i), n || delete o[t], o[r] = a(i)), o;
    });
  }
  noUnknown(t = !0, r = tr.noUnknown) {
    typeof t == "string" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(a) {
        if (a == null)
          return !0;
        const i = zx(this.schema, a);
        return !t || i.length === 0 || this.createError({
          params: {
            unknown: i.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = tr.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => r && kx(r, (n, a) => t(a)));
  }
  camelCase() {
    return this.transformKeys(Tx);
  }
  snakeCase() {
    return this.transformKeys(Jn);
  }
  constantCase() {
    return this.transformKeys((t) => Jn(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = gs(this.fields, (r) => r.describe()), t;
  }
}
function at(e) {
  return new qs(e);
}
at.prototype = qs.prototype;
const jx = {
  task: {
    title: "",
    description: "",
    mode: "import",
    status: "created",
    startTime: null,
    endTime: null,
    recordType: "",
    serializer: ""
  },
  metadata: null,
  files: []
}, Qx = at({
  task: at({
    title: Ne().required("Title is required"),
    recordType: Ne().required("Record type is required"),
    serializer: Ne().required("Serializer is required"),
    mode: Ne().required("Mode is required")
  }),
  metadata: at().nullable()
}), qx = ({ onSubmit: e }) => {
  const [t, r] = N(void 0), n = async (a) => {
    try {
      await hS(a.task, a.metadata, a.files, {
        autoValidate: !!a.metadata,
        onProgress(i, o) {
          r({
            [i]: o
          });
        }
      }), e == null || e();
    } catch (i) {
      throw console.error("Error creating import task:", i), i;
    }
  };
  return /* @__PURE__ */ s.createElement(
    go,
    {
      formik: {
        initialValues: jx,
        validationSchema: Qx,
        onSubmit: n
      }
    },
    /* @__PURE__ */ s.createElement(CS, { progress: t })
  );
}, Vx = () => {
  const [e, t] = N(!1), { refreshSearch: r } = Ye(), n = R(() => {
    r(), t(!1);
  }, [r]);
  return /* @__PURE__ */ s.createElement(
    le,
    {
      closeIcon: !0,
      onClose: () => t(!1),
      onOpen: () => t(!0),
      open: e,
      trigger: /* @__PURE__ */ s.createElement(z, { color: "green", icon: !0, labelPosition: "left" }, /* @__PURE__ */ s.createElement(_, { name: "add" }), "New Import")
    },
    /* @__PURE__ */ s.createElement(ao, null, "New Import Task"),
    /* @__PURE__ */ s.createElement(io, null, /* @__PURE__ */ s.createElement(qx, { onSubmit: n }))
  );
}, Ut = {
  searchBarRow: b({
    display: "flex !important",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1rem",
    paddingBlock: "0.5rem",
    minBlockSize: "3rem"
  }),
  facets: b({
    flex: "0 0 auto"
  }),
  search: b({
    flex: "1 1 auto",
    minInlineSize: "15rem"
  }),
  visuallyHidden: b({
    srOnly: !0
  })
}, Gx = ({
  appId: e = "search"
}) => {
  const { showImportModal: t } = Ye().config;
  return /* @__PURE__ */ s.createElement(v, { id: `${e}.SearchBarRow` }, /* @__PURE__ */ s.createElement(
    "section",
    {
      className: Ut.searchBarRow,
      "aria-label": "Records search and filters"
    },
    /* @__PURE__ */ s.createElement("div", { className: Ut.search }, /* @__PURE__ */ s.createElement(
      uE,
      {
        autofocus: !0,
        actionProps: {
          icon: "search",
          content: "Search",
          className: "search",
          "aria-label": "Submit search",
          type: "submit"
        },
        placeholder: "Search…",
        "aria-describedby": "search-instructions"
      }
    )),
    t && /* @__PURE__ */ s.createElement("div", { className: Ut.facets }, /* @__PURE__ */ s.createElement(Vx, null))
  ));
}, Hx = ({ currentResultsState: e }) => {
  var a;
  const t = ((a = e == null ? void 0 : e.data) == null ? void 0 : a.aggregations) || {}, r = R((i) => i.replace(/_/g, " ").replace(/\b\w/g, (o) => o.toUpperCase()), []);
  return { availableAggregations: ra(
    () => Object.keys(t).filter((i) => {
      var l;
      return (((l = t[i]) == null ? void 0 : l.buckets) || []).length > 0;
    }),
    [t]
  ), formatTitle: r };
}, Yx = {
  container: b({
    minInlineSize: "20rem",
    paddingInlineEnd: "1rem",
    paddingBlock: ".5rem",
    flex: 0
  })
}, Wx = (e) => {
  const { config: t } = Ye(), { availableAggregations: r, formatTitle: n } = Hx(e);
  return !t.showFacets || r.length === 0 ? null : /* @__PURE__ */ s.createElement("aside", { className: Yx.container, "aria-label": "Search Facets" }, r.map((a) => /* @__PURE__ */ s.createElement(
    zv,
    {
      key: a,
      title: n(a),
      agg: {
        field: a,
        aggName: a
      }
    }
  )));
}, Kx = kr(Wx), Xx = () => {
  const { config: e } = Ye();
  return /* @__PURE__ */ s.createElement(W, null, /* @__PURE__ */ s.createElement(W.Row, { verticalAlign: "middle" }, /* @__PURE__ */ s.createElement(W.Column, { width: 14, textAlign: "center" }, /* @__PURE__ */ s.createElement(Kv, { options: { size: "mini" } })), /* @__PURE__ */ s.createElement(W.Column, { width: 2, textAlign: "right" }, /* @__PURE__ */ s.createElement(
    oE,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ s.createElement("p", null, t, " results per page")
    }
  ))));
}, Vs = ({
  config: e = {},
  overriddenComponents: t = {}
}) => {
  var i, o, l, c, u;
  const r = {
    ...ie,
    ...e,
    initialQueryState: {
      ...ie.initialQueryState,
      ...e.initialQueryState
    },
    layoutOptions: {
      ...ie.layoutOptions,
      ...e.layoutOptions
    },
    paginationOptions: {
      ...ie.paginationOptions,
      ...e.paginationOptions,
      resultsPerPage: ((i = e.paginationOptions) == null ? void 0 : i.resultsPerPage) || ie.paginationOptions.resultsPerPage
    },
    searchApi: {
      ...ie.searchApi,
      ...e.searchApi,
      axios: {
        ...ie.searchApi.axios,
        ...(o = e.searchApi) == null ? void 0 : o.axios,
        headers: {
          ...ie.searchApi.axios.headers,
          ...(c = (l = e.searchApi) == null ? void 0 : l.axios) == null ? void 0 : c.headers
        }
      },
      invenio: {
        ...ie.searchApi.invenio,
        ...(u = e.searchApi) == null ? void 0 : u.invenio
      }
    },
    showFacets: e.showFacets ?? !0,
    showImportModal: e.showImportModal ?? !0,
    showSearchFooter: e.showSearchFooter ?? !0
  }, n = new Ba(r.searchApi), a = {
    [`${r.appId}.ResultsList.item`]: yS,
    [`${r.appId}.ResultsList.container`]: bS,
    [`${r.appId}.BucketAggregation.element`]: WE,
    [`${r.appId}.BucketAggregationValues.element`]: KE,
    ...t
  };
  return /* @__PURE__ */ s.createElement(Js.Provider, { value: a }, /* @__PURE__ */ s.createElement(
    wv,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ s.createElement(ZE, { config: r }, /* @__PURE__ */ s.createElement("div", { className: kn.searchLayout }, /* @__PURE__ */ s.createElement(Kx, null), /* @__PURE__ */ s.createElement("div", { className: kn.searchContent }, /* @__PURE__ */ s.createElement(Gx, { appId: r.appId }), /* @__PURE__ */ s.createElement($S, null), /* @__PURE__ */ s.createElement(nE, null, /* @__PURE__ */ s.createElement(qv, null), /* @__PURE__ */ s.createElement(Ei, null)), r.showSearchFooter && /* @__PURE__ */ s.createElement(Xx, null))))
  ));
}, Zx = (e) => ra(() => {
  const { totalRecords: t, validatedRecords: r, errorRecords: n, successRecords: a } = e, i = t > 0 ? r / t * 100 : 0, o = t > 0 ? n / t * 100 : 0, l = t > 0 ? a / t * 100 : 0;
  return [
    {
      color: "blue",
      icon: "check circle",
      title: "Validation",
      value: r,
      label: `of ${t} Validated`,
      progress: i,
      progressLabel: `${i.toFixed(1)}% Complete`
    },
    {
      color: "red",
      icon: "exclamation triangle",
      title: "Errors",
      value: n,
      label: "with Errors",
      progress: o,
      progressLabel: `${o.toFixed(1)}% of Total`
    },
    {
      color: "green",
      icon: "upload",
      title: "Import",
      value: a,
      label: "Successfully Imported",
      progress: l,
      progressLabel: `${l.toFixed(1)}% Complete`
    }
  ];
}, [e]), zt = {
  statistic: b({
    marginBlock: "1rem"
  }),
  progressLabel: b({
    marginBlockEnd: "0.5rem"
  }),
  progress: b({
    marginBlockEnd: "0.5rem"
  })
}, Jx = ({
  totalRecords: e = 0,
  validatedRecords: t = 0,
  errorRecords: r = 0,
  successRecords: n = 0,
  showWhenEmpty: a = !1,
  className: i = "",
  style: o = {}
}) => {
  const l = Zx({
    totalRecords: e,
    validatedRecords: t,
    errorRecords: r,
    successRecords: n
  });
  return e === 0 && !a ? null : /* @__PURE__ */ s.createElement(K, { basic: !0, className: i, style: o }, /* @__PURE__ */ s.createElement(W, { columns: 3, stackable: !0 }, l.map((c) => /* @__PURE__ */ s.createElement(W.Column, { key: c.title }, /* @__PURE__ */ s.createElement(D, { fluid: !0 }, /* @__PURE__ */ s.createElement(D.Content, null, /* @__PURE__ */ s.createElement(D.Header, { textAlign: "center" }, c.title), /* @__PURE__ */ s.createElement(D.Description, { textAlign: "center" }, /* @__PURE__ */ s.createElement(
    Rt,
    {
      size: "large",
      color: c.color,
      className: zt.statistic
    },
    /* @__PURE__ */ s.createElement(Rt.Value, null, c.value),
    /* @__PURE__ */ s.createElement(Rt.Label, null, c.label)
  ), /* @__PURE__ */ s.createElement(K, { basic: !0, textAlign: "center" }, /* @__PURE__ */ s.createElement(
    K.Inline,
    {
      basic: !0,
      size: "small",
      className: zt.progressLabel
    },
    c.progressLabel
  ), /* @__PURE__ */ s.createElement(
    so,
    {
      percent: c.progress,
      color: c.color,
      size: "small",
      className: zt.progress
    }
  )))))))));
}, eC = {
  container: b({
    paddingBlockStart: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  })
}, Gs = Xs(
  void 0
), tC = ({
  taskId: e,
  children: t
}) => /* @__PURE__ */ s.createElement(Gs.Provider, { value: { taskId: e } }, /* @__PURE__ */ s.createElement("div", { className: eC.container }, t)), Hs = () => {
  const e = F(Gs);
  if (!e)
    throw new Error("useTaskDetails must be used within a TaskDetailsProvider");
  return e;
}, Mt = {
  headerContainer: b({
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem"
  }),
  headerContent: b({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  }),
  actionsContainer: b({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: "1rem"
  })
}, rC = ({ children: e }) => /* @__PURE__ */ s.createElement(T, { padded: !0, size: "small", compact: !0 }, /* @__PURE__ */ s.createElement(ia, null, /* @__PURE__ */ s.createElement(ht, null, /* @__PURE__ */ s.createElement(Y, null, "ID"), /* @__PURE__ */ s.createElement(Y, null, "Title"), /* @__PURE__ */ s.createElement(Y, null, "Status"), /* @__PURE__ */ s.createElement(Y, null))), /* @__PURE__ */ s.createElement(sa, null, e)), nC = {
  headerContainer: b({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  })
}, aC = ({ record: e }) => /* @__PURE__ */ s.createElement(K, { basic: !0 }, /* @__PURE__ */ s.createElement($, null, /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "tag" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Record ID"), /* @__PURE__ */ s.createElement($.Description, null, e.id))), /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "calendar" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Created"), /* @__PURE__ */ s.createElement($.Description, null, Kt(e.created)))), /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "edit" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Updated"), /* @__PURE__ */ s.createElement($.Description, null, Kt(e.updated)))), e.generated_record_id && /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "file alternate" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Generated Record ID"), /* @__PURE__ */ s.createElement($.Description, null, /* @__PURE__ */ s.createElement(
  "a",
  {
    href: `/records/${e.generated_record_id}`,
    target: "_blank",
    rel: "noopener noreferrer"
  },
  "/",
  e.generated_record_id
)))))), iC = ({ record: e }) => /* @__PURE__ */ s.createElement(K, { basic: !0 }, e.errors.map((t, r) => /* @__PURE__ */ s.createElement(U, { key: `error-${r}-${t.type}`, negative: !0 }, /* @__PURE__ */ s.createElement(U.Header, null, t.type), /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Location:"), " ", t.loc), /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Message:"), " ", t.msg)))), sC = {
  pathCell: b({
    wordBreak: "break-all"
  })
}, oC = ({ record: e }) => {
  var r, n;
  return (((r = e.record_files) == null ? void 0 : r.length) ?? 0) > 0 || (((n = e.validated_record_files) == null ? void 0 : n.length) ?? 0) > 0 ? /* @__PURE__ */ s.createElement(K, { basic: !0 }, e.record_files && e.record_files.length > 0 && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(de, { as: "h4" }, /* @__PURE__ */ s.createElement(_, { name: "file" }), "File List"), /* @__PURE__ */ s.createElement($, { bulleted: !0 }, e.record_files.map((a) => /* @__PURE__ */ s.createElement($.Item, { key: `file-${a}` }, /* @__PURE__ */ s.createElement($.Content, null, a))))), e.validated_record_files && e.validated_record_files.length > 0 && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(de, { as: "h4" }, /* @__PURE__ */ s.createElement(_, { name: "checkmark" }), "Validated Files"), /* @__PURE__ */ s.createElement(T, { celled: !0 }, /* @__PURE__ */ s.createElement(T.Header, null, /* @__PURE__ */ s.createElement(T.Row, null, /* @__PURE__ */ s.createElement(T.HeaderCell, null, "File"), /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Size"), /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Origin"), /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Path"))), /* @__PURE__ */ s.createElement(T.Body, null, e.validated_record_files.map((a, i) => /* @__PURE__ */ s.createElement(T.Row, { key: `validated-${a.key}-${i}` }, /* @__PURE__ */ s.createElement(T.Cell, null, /* @__PURE__ */ s.createElement(_, { name: "file" }), a.key), /* @__PURE__ */ s.createElement(T.Cell, null, (a.size / 1024).toFixed(2), " KB"), /* @__PURE__ */ s.createElement(T.Cell, null, a.origin), /* @__PURE__ */ s.createElement(T.Cell, { className: sC.pathCell }, a.full_path))))))) : /* @__PURE__ */ s.createElement(U, { info: !0 }, /* @__PURE__ */ s.createElement(U.Header, null, "No Files"), /* @__PURE__ */ s.createElement("p", null, "No files are associated with this record."));
}, lC = {
  valueCell: b({
    wordBreak: "break-word"
  })
}, cC = ({ record: e }) => /* @__PURE__ */ s.createElement(T, { celled: !0, striped: !0 }, /* @__PURE__ */ s.createElement(T.Header, null, /* @__PURE__ */ s.createElement(T.Row, null, /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Field"), /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Value"))), /* @__PURE__ */ s.createElement(T.Body, null, Object.entries(e.src_data).filter(([t, r]) => r && r.trim() !== "").map(([t, r]) => /* @__PURE__ */ s.createElement(T.Row, { key: t }, /* @__PURE__ */ s.createElement(T.Cell, null, /* @__PURE__ */ s.createElement("strong", null, t)), /* @__PURE__ */ s.createElement(T.Cell, { className: lC.valueCell }, r))))), uC = ({
  record: e,
  open: t,
  onClose: r,
  initialTab: n = 0
}) => {
  const [a, i] = N(n);
  Me(() => {
    t && i(n);
  }, [t, n]);
  const o = (u, d) => {
    const p = typeof d.activeIndex == "number" ? d.activeIndex : 0;
    i(p);
  }, l = [
    {
      menuItem: { key: "basic", icon: "info circle", content: "Basic Info" },
      render: () => /* @__PURE__ */ s.createElement(Oe.Pane, null, /* @__PURE__ */ s.createElement(aC, { record: e }))
    },
    {
      menuItem: { key: "source", icon: "database", content: "Source Data" },
      render: () => /* @__PURE__ */ s.createElement(Oe.Pane, null, /* @__PURE__ */ s.createElement(cC, { record: e }))
    },
    ...e.errors && e.errors.length > 0 ? [
      {
        menuItem: {
          key: "errors",
          icon: "exclamation triangle",
          content: `Errors (${e.errors.length})`
        },
        render: () => /* @__PURE__ */ s.createElement(Oe.Pane, null, /* @__PURE__ */ s.createElement(iC, { record: e }))
      }
    ] : [],
    {
      menuItem: { key: "files", icon: "file", content: "Files" },
      render: () => /* @__PURE__ */ s.createElement(Oe.Pane, null, /* @__PURE__ */ s.createElement(oC, { record: e }))
    }
  ], c = () => {
    var u, d, p, f, h;
    return ((d = (u = e.serializer_data) == null ? void 0 : u.metadata) == null ? void 0 : d.title) || ((f = (p = e.transformed_data) == null ? void 0 : p.metadata) == null ? void 0 : f.title) || ((h = e.src_data) == null ? void 0 : h.title) || `Record ${e.id}`;
  };
  return /* @__PURE__ */ s.createElement(
    le,
    {
      centered: !1,
      open: t,
      onClose: r,
      size: "large",
      closeIcon: !0
    },
    /* @__PURE__ */ s.createElement(le.Header, null, /* @__PURE__ */ s.createElement("div", { className: nC.headerContainer }, /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(_, { name: "file alternate outline" }), c()), /* @__PURE__ */ s.createElement(eS, { status: e.status }))),
    /* @__PURE__ */ s.createElement(le.Content, { scrolling: !0 }, /* @__PURE__ */ s.createElement(
      Oe,
      {
        panes: l,
        activeIndex: a,
        onTabChange: o
      }
    )),
    /* @__PURE__ */ s.createElement(le.Actions, null, /* @__PURE__ */ s.createElement(z, { onClick: r }, /* @__PURE__ */ s.createElement(_, { name: "close" }), "Close"))
  );
}, Pe = {
  idContainer: b({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  }),
  codeElement: b({
    fontSize: "0.9em",
    color: "#666"
  }),
  titleContainer: b({
    maxInlineSize: "18.75rem"
  }),
  noTitle: b({
    color: "#999"
  }),
  errorIcon: b({
    marginInlineStart: "0.5rem !important",
    cursor: "help"
  })
}, dC = ({
  result: e,
  index: t
}) => {
  var y;
  const [r, n] = N(
    "idle"
  ), [a, i] = N(!1), [o, l] = N(0);
  if (!e)
    return null;
  const c = async () => {
    try {
      n("copying"), await navigator.clipboard.writeText(e.id), n("copied"), setTimeout(() => {
        n("idle");
      }, 2e3);
    } catch {
      n("idle");
    }
  }, u = e.errors && e.errors.length > 0, d = sS(e.status), p = () => u ? 2 : -1, f = (m) => m === "red" ? "times" : m === "green" || m === "blue" ? "check" : "question", h = [
    ...u ? [
      {
        key: "view-errors",
        text: "View Errors",
        value: "view-errors",
        icon: "exclamation triangle",
        onClick: () => {
          l(p()), i(!0);
        }
      }
    ] : [],
    {
      key: "run",
      disabled: e.status === "success",
      text: "Run Record",
      value: "run",
      icon: "play",
      onClick: async () => {
        try {
          await gS(e.id), console.log(`Record ${e.id} is being processed.`);
        } catch (m) {
          console.error("Error running record:", m);
        }
      }
    },
    {
      key: "view-details",
      text: "View Details",
      value: "view-details",
      icon: "info circle",
      onClick: () => {
        l(0), i(!0);
      }
    }
  ];
  return /* @__PURE__ */ s.createElement(ht, { key: t }, /* @__PURE__ */ s.createElement(H, null, /* @__PURE__ */ s.createElement("div", { className: Pe.idContainer }, /* @__PURE__ */ s.createElement("code", { className: Pe.codeElement }, e.id.length > 20 ? `${e.id.substring(0, 20)}…` : e.id), /* @__PURE__ */ s.createElement(
    zr,
    {
      content: r === "copied" ? "Copied!" : "Copy ID",
      trigger: /* @__PURE__ */ s.createElement(
        z,
        {
          size: "mini",
          circular: !0,
          icon: !0,
          loading: r === "copying",
          onClick: c,
          color: r === "copied" ? "green" : void 0
        },
        /* @__PURE__ */ s.createElement(_, { name: r === "copied" ? "check" : "copy" })
      ),
      position: "top center",
      size: "mini"
    }
  ))), /* @__PURE__ */ s.createElement(H, null, /* @__PURE__ */ s.createElement("div", { className: Pe.titleContainer }, ((y = e.src_data) == null ? void 0 : y.title) || /* @__PURE__ */ s.createElement("em", { className: Pe.noTitle }, "No Title Available"))), /* @__PURE__ */ s.createElement(H, null, /* @__PURE__ */ s.createElement(j, { color: d, size: "small" }, /* @__PURE__ */ s.createElement(_, { name: f(d) }), Be(e.status)), u && /* @__PURE__ */ s.createElement(
    zr,
    {
      content: `${e.errors.length} error${e.errors.length > 1 ? "s" : ""} found`,
      trigger: /* @__PURE__ */ s.createElement(
        _,
        {
          name: "exclamation triangle",
          color: "red",
          className: Pe.errorIcon
        }
      ),
      position: "top center",
      size: "mini"
    }
  )), /* @__PURE__ */ s.createElement(H, { textAlign: "right" }, /* @__PURE__ */ s.createElement(
    ce,
    {
      button: !0,
      className: "icon",
      floating: !0,
      labeled: !0,
      icon: "ellipsis horizontal",
      text: "Actions",
      size: "mini"
    },
    /* @__PURE__ */ s.createElement(ce.Menu, null, h.map((m) => /* @__PURE__ */ s.createElement(
      ce.Item,
      {
        key: m.key,
        icon: m.icon,
        text: m.text,
        disabled: m.disabled,
        onClick: m.onClick
      }
    )))
  ), /* @__PURE__ */ s.createElement(
    uC,
    {
      record: e,
      open: a,
      onClose: () => i(!1),
      initialTab: o
    }
  )));
}, pC = () => {
  const { taskId: e } = Hs(), t = {
    "search.SearchBarRow": () => null,
    "search.ResultsList.container": rC,
    "search.ResultsList.item": dC
  };
  return /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(de, { as: "h3" }, "Task Records"), /* @__PURE__ */ s.createElement(
    Vs,
    {
      config: {
        searchApi: {
          axios: {
            url: "/api/importer-records",
            withCredentials: !0
          }
        },
        initialQueryState: {
          hiddenParams: [["q", `task.id:${e}`]]
        },
        showFacets: !0,
        showImportModal: !1
      },
      overriddenComponents: t
    }
  ));
}, oe = {
  hiddenInput: b({
    display: "none"
  }),
  dropZone: b({
    minBlockSize: "7.5rem",
    border: "2px dashed #d4d4d5 !important",
    backgroundColor: "transparent !important",
    cursor: "pointer",
    opacity: 1
  }),
  dropZoneActive: b({
    border: "2px dashed #2185d0 !important",
    backgroundColor: "#f8f9fa !important"
  }),
  dropZoneDisabled: b({
    cursor: "not-allowed",
    opacity: 0.6
  }),
  contentContainer: b({
    textAlign: "center",
    paddingBlock: "1.25rem",
    paddingInline: "1.25rem"
  }),
  textContainer: b({
    marginBlockStart: "0.625rem"
  }),
  smallText: b({
    fontSize: "0.75rem",
    color: "#666"
  }),
  selectedFilesText: b({
    fontSize: "0.75rem",
    color: "#2185d0",
    marginBlockStart: "0.5rem"
  })
}, fC = ({
  fileInputRef: e,
  accept: t,
  maxFiles: r,
  maxTotalSize: n,
  disabled: a = !1,
  isDragOver: i,
  uploadFiles: o,
  onInputChange: l,
  onDragOver: c,
  onDragLeave: u,
  onDrop: d,
  onFileDialogOpen: p
}) => /* @__PURE__ */ s.createElement(or, null, /* @__PURE__ */ s.createElement(
  "input",
  {
    ref: e,
    type: "file",
    multiple: !0,
    accept: t,
    onChange: l,
    className: oe.hiddenInput,
    disabled: a
  }
), /* @__PURE__ */ s.createElement(
  K,
  {
    placeholder: !0,
    className: rS("file-drop-zone", oe.dropZone, {
      [oe.dropZoneActive]: i,
      [oe.dropZoneDisabled]: a
    }),
    onDragOver: c,
    onDragLeave: u,
    onDrop: d,
    onClick: p
  },
  /* @__PURE__ */ s.createElement("div", { className: oe.contentContainer }, /* @__PURE__ */ s.createElement(
    _,
    {
      name: "cloud upload",
      size: "huge",
      color: i ? "blue" : "grey"
    }
  ), /* @__PURE__ */ s.createElement("div", { className: oe.textContainer }, /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Drop files here or click to select")), /* @__PURE__ */ s.createElement("p", { className: oe.smallText }, "Max files: ", r, " | Max total: ", Lr(n)), o.length > 0 && /* @__PURE__ */ s.createElement("p", { className: oe.selectedFilesText }, /* @__PURE__ */ s.createElement("strong", null, o.length, " files selected •", " ", Zi(o), " total"))))
)), hC = ({
  onUploadError: e
} = {}) => {
  const [t, r] = N([]), [n] = N(!1), a = R(
    (c, u, d) => d && c.size === 0 ? "Empty files are not allowed" : u && !u.split(",").map((h) => h.trim()).some((h) => h.startsWith(".") ? c.name.toLowerCase().endsWith(h.toLowerCase()) : c.type.match(new RegExp(h.replace("*", ".*")))) ? `File type not accepted. Accepted types: ${u}` : null,
    []
  ), i = R(
    (c, u, d, p, f) => {
      const h = [], y = [];
      for (const m of c) {
        if (d && t.length + h.length >= d) {
          y.push(`Maximum ${d} files allowed`);
          break;
        }
        const E = a(m, u, f);
        if (E) {
          y.push(`${m.name}: ${E}`);
          continue;
        }
        if (t.some(
          (S) => S.file.name === m.name && S.file.size === m.size
        )) {
          y.push(`${m.name}: File already selected`);
          continue;
        }
        if (p && Xi([
          ...t,
          ...h
        ]) + m.size > p) {
          y.push(
            `Total size would exceed maximum of ${(p / 1024 / 1024).toFixed(2)}MB`
          );
          break;
        }
        h.push({
          file: m,
          id: `${m.name}-${m.size}-${Date.now()}`
        });
      }
      return y.length > 0 && (e == null || e(y.join(", "))), r((m) => [...m, ...h]), h;
    },
    [t, a, e]
  ), o = R((c) => {
    r((u) => u.filter((d) => d.id !== c));
  }, []), l = R(() => {
    r([]);
  }, []);
  return {
    uploadFiles: t,
    isUploading: n,
    addFiles: i,
    removeFile: o,
    clearFiles: l
  };
}, De = {
  headerContainer: b({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBlockEnd: "0.625rem"
  }),
  listItemContainer: b({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }),
  fileContentContainer: b({
    flex: "1 1 auto"
  }),
  fileInfoContainer: b({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  }),
  errorMessage: b({
    marginBlockStart: "0.3125rem"
  })
}, mC = ({
  uploadFiles: e,
  isUploading: t,
  handleRemoveFile: r,
  handleClearFiles: n
}) => /* @__PURE__ */ s.createElement(K, null, /* @__PURE__ */ s.createElement("div", { className: De.headerContainer }, /* @__PURE__ */ s.createElement("strong", null, "Selected Files (", e.length, ") •", " ", Zi(e)), /* @__PURE__ */ s.createElement(
  z,
  {
    size: "mini",
    basic: !0,
    icon: "trash",
    content: "Clear All",
    onClick: n,
    disabled: t
  }
)), /* @__PURE__ */ s.createElement($, { divided: !0 }, e.map((a) => /* @__PURE__ */ s.createElement($.Item, { key: a.id }, /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement("div", { className: De.listItemContainer }, /* @__PURE__ */ s.createElement("div", { className: De.fileContentContainer }, /* @__PURE__ */ s.createElement("div", { className: De.fileInfoContainer }, /* @__PURE__ */ s.createElement(_, { name: "file" }), /* @__PURE__ */ s.createElement("span", null, a.file.name), /* @__PURE__ */ s.createElement(j, { size: "mini", basic: !0 }, Lr(a.file.size))), a.error && /* @__PURE__ */ s.createElement(
  U,
  {
    negative: !0,
    size: "mini",
    className: De.errorMessage
  },
  a.error
)), /* @__PURE__ */ s.createElement(
  z,
  {
    size: "mini",
    basic: !0,
    icon: "close",
    onClick: () => r(a.id),
    disabled: t
  }
))))))), Ys = ({
  onChange: e,
  accept: t = ".csv,.json,.xlsx,.txt",
  maxFiles: r = 5,
  maxTotalSize: n = 50 * 1024 * 1024,
  // 50MB
  skipEmptyFiles: a = !0,
  disabled: i = !1,
  error: o
}) => {
  const l = Zs(null), [c, u] = s.useState(!1), [d, p] = s.useState(
    null
  ), { uploadFiles: f, isUploading: h, addFiles: y, removeFile: m, clearFiles: E } = hC({
    onUploadComplete: (I) => {
      e(I);
    },
    onUploadError: (I) => {
      console.error("Upload error:", I), p(I);
    }
  }), g = R(
    (I) => {
      if (!I || I.length === 0)
        return;
      p(null);
      const At = Array.from(I), be = y(
        At,
        t,
        r,
        n,
        a
      );
      if (be.length > 0) {
        const Ws = [...f, ...be].map((Ks) => Ks.file);
        e(Ws);
      }
    },
    [
      y,
      t,
      r,
      n,
      a,
      e,
      f
    ]
  ), S = R(
    (I) => {
      g(I.target.files), l.current && (l.current.value = "");
    },
    [g]
  ), A = R(
    (I) => {
      I.preventDefault(), i || u(!0);
    },
    [i]
  ), B = R((I) => {
    I.preventDefault(), u(!1);
  }, []), te = R(
    (I) => {
      I.preventDefault(), u(!1), !i && g(I.dataTransfer.files);
    },
    [i, g]
  ), O = R(() => {
    var I;
    i || (I = l.current) == null || I.click();
  }, [i]), fe = R(
    (I) => {
      m(I), p(null);
      const At = f.filter((be) => be.id !== I).map((be) => be.file);
      e(At);
    },
    [m, f, e]
  ), We = R(() => {
    E(), p(null), e([]);
  }, [E, e]);
  return /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(
    fC,
    {
      fileInputRef: l,
      accept: t,
      maxFiles: r,
      maxTotalSize: n,
      isDragOver: c,
      disabled: i,
      uploadFiles: f,
      onInputChange: S,
      onDragOver: A,
      onDragLeave: B,
      onDrop: te,
      onFileDialogOpen: O
    }
  ), (o || d) && /* @__PURE__ */ s.createElement(U, { negative: !0, size: "small" }, /* @__PURE__ */ s.createElement(_, { name: "exclamation triangle" }), o || d), f.length > 0 && /* @__PURE__ */ s.createElement(
    mC,
    {
      uploadFiles: f,
      isUploading: h,
      handleRemoveFile: fe,
      handleClearFiles: We
    }
  ));
}, jt = {
  selectedFileInfo: b({
    marginBlockStart: "0.5rem",
    color: "#666"
  }),
  fieldLabel: b({
    marginBlockEnd: "0.5rem",
    fontSize: "0.875rem",
    fontWeight: "bold"
  }),
  actionsContainer: b({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "0.5rem"
  })
}, gC = () => {
  const { taskId: e } = Hs(), [t, r] = N(null), [n, a] = N([]), [i, o] = N(!1), [l, c] = N(null), u = (h) => {
    var m;
    const y = ((m = h.target.files) == null ? void 0 : m[0]) || null;
    r(y || null);
  }, d = (h) => {
    a(h);
  }, p = () => {
    o(!1), r(null), a([]), c(null);
  }, f = async () => {
    if (!(!t && n.length === 0))
      try {
        await mS(
          e,
          t,
          n.length > 0 ? n : void 0,
          {
            onProgress: (h, y) => c({
              [h]: y
            }),
            onError: (h, y) => {
              console.error(`Error during ${y}:`, h);
            }
          }
        ), t && await ns(e, {
          autoExecute: !0,
          // Auto-execute import after validation
          onProgress: (h, y) => c({
            [h]: y
          }),
          onError: (h, y) => {
            console.error(`Error during ${y}:`, h);
          }
        }), o(!1), r(null), a([]);
      } catch (h) {
        console.error("Error uploading content:", h);
      }
  };
  return /* @__PURE__ */ s.createElement(
    le,
    {
      open: i,
      onOpen: () => o(!0),
      onClose: p,
      size: "small",
      closeIcon: !0,
      trigger: /* @__PURE__ */ s.createElement(z, { icon: "upload", size: "tiny", content: "Upload Content" })
    },
    /* @__PURE__ */ s.createElement(de, { icon: !0 }, /* @__PURE__ */ s.createElement(_, { name: "upload" }), "Upload Metadata & Files"),
    /* @__PURE__ */ s.createElement(le.Content, null, /* @__PURE__ */ s.createElement(_e, { onSubmit: f }, /* @__PURE__ */ s.createElement(_e.Field, null, /* @__PURE__ */ s.createElement("label", { htmlFor: "fileInput" }, "Select Metadata File (Optional)"), /* @__PURE__ */ s.createElement(
      "input",
      {
        id: "fileInput",
        type: "file",
        onChange: u,
        accept: ".csv"
      }
    ), t && /* @__PURE__ */ s.createElement("div", { className: jt.selectedFileInfo }, "Selected: ", t.name)), /* @__PURE__ */ s.createElement(_e.Field, null, /* @__PURE__ */ s.createElement("div", { className: jt.fieldLabel }, "Additional Files (Optional)"), /* @__PURE__ */ s.createElement(
      Ys,
      {
        value: n,
        onChange: d,
        accept: "*",
        maxTotalSize: 10 * 1024 * 1024 * 1024,
        maxFiles: 100
      }
    )))),
    /* @__PURE__ */ s.createElement(le.Actions, null, /* @__PURE__ */ s.createElement("div", { className: jt.actionsContainer }, l && /* @__PURE__ */ s.createElement(Hi, { progress: l }), /* @__PURE__ */ s.createElement(z, { onClick: p, color: "grey", disabled: !!l }, /* @__PURE__ */ s.createElement(_, { name: "cancel" }), "Cancel"), /* @__PURE__ */ s.createElement(
      z,
      {
        onClick: f,
        color: "blue",
        loading: !!l,
        disabled: !t && n.length === 0
      },
      /* @__PURE__ */ s.createElement(_, { name: "upload" }),
      "Upload"
    )))
  );
}, yC = ({ taskId: e }) => {
  var f, h, y, m, E, g;
  const [t, r] = N(null), { getStatus: n, isGettingStatus: a, runBulkImport: i, isBulkImporting: o, error: l } = is(e, { onStatusChangeSuccess: r });
  if (Me(() => {
    n();
  }, [n]), a || o)
    return /* @__PURE__ */ s.createElement(Yi, null);
  if (!t)
    return /* @__PURE__ */ s.createElement(U, { warning: !0, icon: !0 }, /* @__PURE__ */ s.createElement(_, { name: "search" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Task Not Found"), "The requested task could not be found."));
  const c = ((f = t.records_status) == null ? void 0 : f.total_records) || 0, u = ((h = t.records_status) == null ? void 0 : h.validated) || 0, d = ((y = t.records_status) == null ? void 0 : y.success) || 0, p = (((m = t.records_status) == null ? void 0 : m["import failed"]) || 0) + (((E = t.records_status) == null ? void 0 : E["validation failed"]) || 0) + (((g = t.records_status) == null ? void 0 : g["serializer validation failed"]) || 0);
  return /* @__PURE__ */ s.createElement(tC, { taskId: e }, /* @__PURE__ */ s.createElement(oo, { fluid: !0, verticalAlign: "top" }, l && /* @__PURE__ */ s.createElement(U, { negative: !0, icon: !0 }, /* @__PURE__ */ s.createElement(_, { name: "exclamation triangle" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Error"), (l == null ? void 0 : l.message) || "An unknown error occurred")), /* @__PURE__ */ s.createElement(W, null, /* @__PURE__ */ s.createElement(W.Row, { verticalAlign: "top" }, /* @__PURE__ */ s.createElement(W.Column, { width: 8, verticalAlign: "middle" }, /* @__PURE__ */ s.createElement("div", { className: Mt.headerContainer }, /* @__PURE__ */ s.createElement(_, { name: "tasks", circular: !0, size: "big" }), /* @__PURE__ */ s.createElement("div", { className: Mt.headerContent }, /* @__PURE__ */ s.createElement(de, { as: "h2" }, /* @__PURE__ */ s.createElement(de.Content, null, t.title)), t.status && /* @__PURE__ */ s.createElement(Wi, { size: "large", status: t.status }, Be(t.status))))), /* @__PURE__ */ s.createElement(W.Column, { width: 8, textAlign: "right" }, /* @__PURE__ */ s.createElement("div", { className: Mt.actionsContainer }, /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(
    z,
    {
      size: "tiny",
      color: "blue",
      icon: "refresh",
      content: "Refresh",
      onClick: () => n(),
      loading: a
    }
  ), /* @__PURE__ */ s.createElement(gC, null), /* @__PURE__ */ s.createElement(
    z,
    {
      size: "tiny",
      color: "green",
      icon: "play",
      onClick: async () => {
        await i(), await n();
      },
      loading: o,
      content: "Run Task"
    }
  ))))), t.description && /* @__PURE__ */ s.createElement(W.Row, null, /* @__PURE__ */ s.createElement(W.Column, { width: 16 }, /* @__PURE__ */ s.createElement(U, { info: !0, icon: !0, size: "small" }, /* @__PURE__ */ s.createElement(_, { name: "info circle" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Notes"), t.description))))), c > 0 && /* @__PURE__ */ s.createElement(K, { basic: !0 }, /* @__PURE__ */ s.createElement(
    Jx,
    {
      totalRecords: c,
      validatedRecords: u,
      errorRecords: p,
      successRecords: d
    }
  ))), /* @__PURE__ */ s.createElement(pC, null));
}, RC = {
  Search: Vs,
  TaskDetails: yC
}, kC = {
  CREATED: "created",
  VALIDATING: "validating",
  SERIALIZER_VALIDATION_FAILED: "serializer validation failed",
  VALIDATION_FAILED: "validation failed",
  VALIDATED: "validated",
  IMPORT_FAILED: "import failed",
  IMPORTED: "success"
}, PC = {
  CREATED: "created",
  VALIDATING: "validating",
  VALIDATION_FAILED: "validated with failures",
  VALIDATED: "validated",
  IMPORTING: "importing",
  IMPORT_FAILED: "imported with failures",
  SUCCESS: "success",
  DAMAGED: "damaged"
}, DC = {
  CREATING_TASK: "Creating Task",
  UPLOADING_METADATA: "Uploading Metadata",
  UPLOADING_FILES: "Uploading Files",
  UPDATING_METADATA: "Updating Metadata",
  UPDATING_FILES: "Updating Files",
  VALIDATING: "Validating",
  EXECUTING: "Executing",
  UPDATING: "Updating"
};
export {
  RC as BulkImporter,
  Ys as FileUploader,
  Vx as ImportModal,
  PC as ImporterTaskStates,
  kC as InvenioImporterRecordStatus,
  DC as OrchestrationStepsEnum,
  Hi as ProgressLoading,
  Vs as Search,
  Yi as Spinner,
  eS as StatusIcon,
  Wi as StatusLabel,
  yC as TaskDetails,
  dC as TaskRecordItem,
  Be as capitalizeFirstLetter,
  rS as cn,
  AC as createSearchApi,
  OC as createSearchApiConfig,
  Kt as formatDate,
  Lr as formatFileSize,
  iS as getCsrfToken,
  sS as getStatusColor,
  Xi as getTotalSize,
  Zi as getTotalSizeFormatted,
  hC as useFileUploader
};
