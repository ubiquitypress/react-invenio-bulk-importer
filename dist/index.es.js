import s, { Component as L, useContext as I, useEffect as Me, useCallback as R, Fragment as cr, useState as N, useMemo as na, createContext as Zs, useRef as Js } from "react";
import v, { OverridableContext as eo } from "react-overridable";
import rt from "axios";
import xe from "qs";
import { connect as k, Provider as to } from "react-redux";
import { Label as W, Icon as _, Input as aa, Button as z, List as $, Checkbox as ur, Card as D, Segment as K, Header as de, Menu as Ot, Pagination as ro, Item as ve, Loader as ia, Dropdown as ce, Image as no, Dimmer as ao, TableRow as ht, TableCell as G, Table as T, TableHeader as sa, TableHeaderCell as H, TableBody as oa, Form as _e, Modal as le, ModalHeader as io, ModalContent as so, Grid as Y, Statistic as Rt, Progress as oo, Message as U, Tab as Oe, Popup as jr, Container as lo } from "semantic-ui-react";
import { combineReducers as co, createStore as uo, applyMiddleware as po } from "redux";
import fo from "redux-thunk";
import ho from "lodash";
import { TextField as mo, SelectField as kt, TextAreaField as go, BaseForm as yo } from "react-invenio-forms";
import { useFormikContext as bo } from "formik";
var Ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function P(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vo = Object.prototype;
function Eo(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || vo;
  return e === r;
}
var mt = Eo;
function So(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var la = So, _o = la, $o = _o(Object.keys, Object), xo = $o, Co = mt, wo = xo, To = Object.prototype, Fo = To.hasOwnProperty;
function Io(e) {
  if (!Co(e))
    return wo(e);
  var t = [];
  for (var r in Object(e))
    Fo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var ca = Io, Ao = typeof Ke == "object" && Ke && Ke.Object === Object && Ke, ua = Ao, Oo = ua, Ro = typeof self == "object" && self && self.Object === Object && self, ko = Oo || Ro || Function("return this")(), re = ko, Po = re, Do = Po.Symbol, Ce = Do, Qr = Ce, da = Object.prototype, Lo = da.hasOwnProperty, No = da.toString, Re = Qr ? Qr.toStringTag : void 0;
function Bo(e) {
  var t = Lo.call(e, Re), r = e[Re];
  try {
    e[Re] = void 0;
    var n = !0;
  } catch {
  }
  var a = No.call(e);
  return n && (t ? e[Re] = r : delete e[Re]), a;
}
var Uo = Bo, zo = Object.prototype, Mo = zo.toString;
function jo(e) {
  return Mo.call(e);
}
var Qo = jo, qr = Ce, qo = Uo, Vo = Qo, Go = "[object Null]", Ho = "[object Undefined]", Vr = qr ? qr.toStringTag : void 0;
function Yo(e) {
  return e == null ? e === void 0 ? Ho : Go : Vr && Vr in Object(e) ? qo(e) : Vo(e);
}
var pe = Yo;
function Wo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var se = Wo;
const Ko = /* @__PURE__ */ P(se);
var Xo = pe, Zo = se, Jo = "[object AsyncFunction]", el = "[object Function]", tl = "[object GeneratorFunction]", rl = "[object Proxy]";
function nl(e) {
  if (!Zo(e))
    return !1;
  var t = Xo(e);
  return t == el || t == tl || t == Jo || t == rl;
}
var pa = nl, al = re, il = al["__core-js_shared__"], sl = il, Pt = sl, Gr = function() {
  var e = /[^.]+$/.exec(Pt && Pt.keys && Pt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ol(e) {
  return !!Gr && Gr in e;
}
var ll = ol, cl = Function.prototype, ul = cl.toString;
function dl(e) {
  if (e != null) {
    try {
      return ul.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var fa = dl, pl = pa, fl = ll, hl = se, ml = fa, gl = /[\\^$.*+?()[\]{}|]/g, yl = /^\[object .+?Constructor\]$/, bl = Function.prototype, vl = Object.prototype, El = bl.toString, Sl = vl.hasOwnProperty, _l = RegExp(
  "^" + El.call(Sl).replace(gl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function $l(e) {
  if (!hl(e) || fl(e))
    return !1;
  var t = pl(e) ? _l : yl;
  return t.test(ml(e));
}
var xl = $l;
function Cl(e, t) {
  return e == null ? void 0 : e[t];
}
var wl = Cl, Tl = xl, Fl = wl;
function Il(e, t) {
  var r = Fl(e, t);
  return Tl(r) ? r : void 0;
}
var ge = Il, Al = ge, Ol = re, Rl = Al(Ol, "DataView"), kl = Rl, Pl = ge, Dl = re, Ll = Pl(Dl, "Map"), dr = Ll, Nl = ge, Bl = re, Ul = Nl(Bl, "Promise"), zl = Ul, Ml = ge, jl = re, Ql = Ml(jl, "Set"), ql = Ql, Vl = ge, Gl = re, Hl = Vl(Gl, "WeakMap"), Yl = Hl, Vt = kl, Gt = dr, Ht = zl, Yt = ql, Wt = Yl, ha = pe, we = fa, Hr = "[object Map]", Wl = "[object Object]", Yr = "[object Promise]", Wr = "[object Set]", Kr = "[object WeakMap]", Xr = "[object DataView]", Kl = we(Vt), Xl = we(Gt), Zl = we(Ht), Jl = we(Yt), ec = we(Wt), he = ha;
(Vt && he(new Vt(new ArrayBuffer(1))) != Xr || Gt && he(new Gt()) != Hr || Ht && he(Ht.resolve()) != Yr || Yt && he(new Yt()) != Wr || Wt && he(new Wt()) != Kr) && (he = function(e) {
  var t = ha(e), r = t == Wl ? e.constructor : void 0, n = r ? we(r) : "";
  if (n)
    switch (n) {
      case Kl:
        return Xr;
      case Xl:
        return Hr;
      case Zl:
        return Yr;
      case Jl:
        return Wr;
      case ec:
        return Kr;
    }
  return t;
});
var je = he;
function tc(e) {
  return e != null && typeof e == "object";
}
var ne = tc, rc = pe, nc = ne, ac = "[object Arguments]";
function ic(e) {
  return nc(e) && rc(e) == ac;
}
var sc = ic, Zr = sc, oc = ne, ma = Object.prototype, lc = ma.hasOwnProperty, cc = ma.propertyIsEnumerable, uc = Zr(function() {
  return arguments;
}()) ? Zr : function(e) {
  return oc(e) && lc.call(e, "callee") && !cc.call(e, "callee");
}, gt = uc, dc = Array.isArray, Q = dc;
const ga = /* @__PURE__ */ P(Q);
var pc = 9007199254740991;
function fc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pc;
}
var pr = fc, hc = pa, mc = pr;
function gc(e) {
  return e != null && mc(e.length) && !hc(e);
}
var yt = gc, it = { exports: {} };
function yc() {
  return !1;
}
var bc = yc;
it.exports;
(function(e, t) {
  var r = re, n = bc, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, l = o ? r.Buffer : void 0, c = l ? l.isBuffer : void 0, u = c || n;
  e.exports = u;
})(it, it.exports);
var bt = it.exports, vc = pe, Ec = pr, Sc = ne, _c = "[object Arguments]", $c = "[object Array]", xc = "[object Boolean]", Cc = "[object Date]", wc = "[object Error]", Tc = "[object Function]", Fc = "[object Map]", Ic = "[object Number]", Ac = "[object Object]", Oc = "[object RegExp]", Rc = "[object Set]", kc = "[object String]", Pc = "[object WeakMap]", Dc = "[object ArrayBuffer]", Lc = "[object DataView]", Nc = "[object Float32Array]", Bc = "[object Float64Array]", Uc = "[object Int8Array]", zc = "[object Int16Array]", Mc = "[object Int32Array]", jc = "[object Uint8Array]", Qc = "[object Uint8ClampedArray]", qc = "[object Uint16Array]", Vc = "[object Uint32Array]", w = {};
w[Nc] = w[Bc] = w[Uc] = w[zc] = w[Mc] = w[jc] = w[Qc] = w[qc] = w[Vc] = !0;
w[_c] = w[$c] = w[Dc] = w[xc] = w[Lc] = w[Cc] = w[wc] = w[Tc] = w[Fc] = w[Ic] = w[Ac] = w[Oc] = w[Rc] = w[kc] = w[Pc] = !1;
function Gc(e) {
  return Sc(e) && Ec(e.length) && !!w[vc(e)];
}
var Hc = Gc;
function Yc(e) {
  return function(t) {
    return e(t);
  };
}
var fr = Yc, st = { exports: {} };
st.exports;
(function(e, t) {
  var r = ua, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, l = function() {
    try {
      var c = a && a.require && a.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(st, st.exports);
var hr = st.exports, Wc = Hc, Kc = fr, Jr = hr, en = Jr && Jr.isTypedArray, Xc = en ? Kc(en) : Wc, mr = Xc, Zc = ca, Jc = je, eu = gt, tu = Q, ru = yt, nu = bt, au = mt, iu = mr, su = "[object Map]", ou = "[object Set]", lu = Object.prototype, cu = lu.hasOwnProperty;
function uu(e) {
  if (e == null)
    return !0;
  if (ru(e) && (tu(e) || typeof e == "string" || typeof e.splice == "function" || nu(e) || iu(e) || eu(e)))
    return !e.length;
  var t = Jc(e);
  if (t == su || t == ou)
    return !e.size;
  if (au(e))
    return !Zc(e).length;
  for (var r in e)
    if (cu.call(e, r))
      return !1;
  return !0;
}
var du = uu;
const ae = /* @__PURE__ */ P(du);
var pu = pe, fu = ne, hu = "[object Symbol]";
function mu(e) {
  return typeof e == "symbol" || fu(e) && pu(e) == hu;
}
var gr = mu, gu = Q, yu = gr, bu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vu = /^\w*$/;
function Eu(e, t) {
  if (gu(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || yu(e) ? !0 : vu.test(e) || !bu.test(e) || t != null && e in Object(t);
}
var yr = Eu, Su = ge, _u = Su(Object, "create"), vt = _u, tn = vt;
function $u() {
  this.__data__ = tn ? tn(null) : {}, this.size = 0;
}
var xu = $u;
function Cu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var wu = Cu, Tu = vt, Fu = "__lodash_hash_undefined__", Iu = Object.prototype, Au = Iu.hasOwnProperty;
function Ou(e) {
  var t = this.__data__;
  if (Tu) {
    var r = t[e];
    return r === Fu ? void 0 : r;
  }
  return Au.call(t, e) ? t[e] : void 0;
}
var Ru = Ou, ku = vt, Pu = Object.prototype, Du = Pu.hasOwnProperty;
function Lu(e) {
  var t = this.__data__;
  return ku ? t[e] !== void 0 : Du.call(t, e);
}
var Nu = Lu, Bu = vt, Uu = "__lodash_hash_undefined__";
function zu(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Bu && t === void 0 ? Uu : t, this;
}
var Mu = zu, ju = xu, Qu = wu, qu = Ru, Vu = Nu, Gu = Mu;
function Te(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Te.prototype.clear = ju;
Te.prototype.delete = Qu;
Te.prototype.get = qu;
Te.prototype.has = Vu;
Te.prototype.set = Gu;
var Hu = Te;
function Yu() {
  this.__data__ = [], this.size = 0;
}
var Wu = Yu;
function Ku(e, t) {
  return e === t || e !== e && t !== t;
}
var Et = Ku, Xu = Et;
function Zu(e, t) {
  for (var r = e.length; r--; )
    if (Xu(e[r][0], t))
      return r;
  return -1;
}
var St = Zu, Ju = St, ed = Array.prototype, td = ed.splice;
function rd(e) {
  var t = this.__data__, r = Ju(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : td.call(t, r, 1), --this.size, !0;
}
var nd = rd, ad = St;
function id(e) {
  var t = this.__data__, r = ad(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var sd = id, od = St;
function ld(e) {
  return od(this.__data__, e) > -1;
}
var cd = ld, ud = St;
function dd(e, t) {
  var r = this.__data__, n = ud(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var pd = dd, fd = Wu, hd = nd, md = sd, gd = cd, yd = pd;
function Fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Fe.prototype.clear = fd;
Fe.prototype.delete = hd;
Fe.prototype.get = md;
Fe.prototype.has = gd;
Fe.prototype.set = yd;
var _t = Fe, rn = Hu, bd = _t, vd = dr;
function Ed() {
  this.size = 0, this.__data__ = {
    hash: new rn(),
    map: new (vd || bd)(),
    string: new rn()
  };
}
var Sd = Ed;
function _d(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var $d = _d, xd = $d;
function Cd(e, t) {
  var r = e.__data__;
  return xd(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var $t = Cd, wd = $t;
function Td(e) {
  var t = wd(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Fd = Td, Id = $t;
function Ad(e) {
  return Id(this, e).get(e);
}
var Od = Ad, Rd = $t;
function kd(e) {
  return Rd(this, e).has(e);
}
var Pd = kd, Dd = $t;
function Ld(e, t) {
  var r = Dd(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Nd = Ld, Bd = Sd, Ud = Fd, zd = Od, Md = Pd, jd = Nd;
function Ie(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ie.prototype.clear = Bd;
Ie.prototype.delete = Ud;
Ie.prototype.get = zd;
Ie.prototype.has = Md;
Ie.prototype.set = jd;
var br = Ie, ya = br, Qd = "Expected a function";
function vr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Qd);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (vr.Cache || ya)(), r;
}
vr.Cache = ya;
var qd = vr, Vd = qd, Gd = 500;
function Hd(e) {
  var t = Vd(e, function(n) {
    return r.size === Gd && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Yd = Hd, Wd = Yd, Kd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Xd = /\\(\\)?/g, Zd = Wd(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Kd, function(r, n, a, i) {
    t.push(a ? i.replace(Xd, "$1") : n || r);
  }), t;
}), Jd = Zd;
function ep(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var tp = ep, nn = Ce, rp = tp, np = Q, ap = gr, ip = 1 / 0, an = nn ? nn.prototype : void 0, sn = an ? an.toString : void 0;
function ba(e) {
  if (typeof e == "string")
    return e;
  if (np(e))
    return rp(e, ba) + "";
  if (ap(e))
    return sn ? sn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ip ? "-0" : t;
}
var sp = ba, op = sp;
function lp(e) {
  return e == null ? "" : op(e);
}
var Qe = lp, cp = Q, up = yr, dp = Jd, pp = Qe;
function fp(e, t) {
  return cp(e) ? e : up(e, t) ? [e] : dp(pp(e));
}
var xt = fp, hp = gr, mp = 1 / 0;
function gp(e) {
  if (typeof e == "string" || hp(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -mp ? "-0" : t;
}
var qe = gp, yp = xt, bp = qe;
function vp(e, t) {
  t = yp(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[bp(t[r++])];
  return r && r == n ? e : void 0;
}
var Er = vp, Ep = Er;
function Sp(e, t, r) {
  var n = e == null ? void 0 : Ep(e, t);
  return n === void 0 ? r : n;
}
var va = Sp;
const Le = /* @__PURE__ */ P(va);
function _p(e, t) {
  return e != null && t in Object(e);
}
var $p = _p, xp = 9007199254740991, Cp = /^(?:0|[1-9]\d*)$/;
function wp(e, t) {
  var r = typeof e;
  return t = t ?? xp, !!t && (r == "number" || r != "symbol" && Cp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ct = wp, Tp = xt, Fp = gt, Ip = Q, Ap = Ct, Op = pr, Rp = qe;
function kp(e, t, r) {
  t = Tp(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = Rp(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && Op(a) && Ap(o, a) && (Ip(e) || Fp(e)));
}
var Ea = kp, Pp = $p, Dp = Ea;
function Lp(e, t) {
  return e != null && Dp(e, t, Pp);
}
var Sr = Lp;
const Np = /* @__PURE__ */ P(Sr);
var Bp = ge, Up = function() {
  try {
    var e = Bp(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Sa = Up, on = Sa;
function zp(e, t, r) {
  t == "__proto__" && on ? on(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var wt = zp, Mp = wt, jp = Et, Qp = Object.prototype, qp = Qp.hasOwnProperty;
function Vp(e, t, r) {
  var n = e[t];
  (!(qp.call(e, t) && jp(n, r)) || r === void 0 && !(t in e)) && Mp(e, t, r);
}
var _r = Vp, Gp = _r, Hp = wt;
function Yp(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var i = -1, o = t.length; ++i < o; ) {
    var l = t[i], c = n ? n(r[l], e[l], l, r, e) : void 0;
    c === void 0 && (c = e[l]), a ? Hp(r, l, c) : Gp(r, l, c);
  }
  return r;
}
var Ve = Yp;
function Wp(e) {
  return e;
}
var $r = Wp;
function Kp(e, t, r) {
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
var Xp = Kp, Zp = Xp, ln = Math.max;
function Jp(e, t, r) {
  return t = ln(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = ln(n.length - t, 0), o = Array(i); ++a < i; )
      o[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(o), Zp(e, this, l);
  };
}
var _a = Jp;
function ef(e) {
  return function() {
    return e;
  };
}
var tf = ef, rf = tf, cn = Sa, nf = $r, af = cn ? function(e, t) {
  return cn(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: rf(t),
    writable: !0
  });
} : nf, sf = af, of = 800, lf = 16, cf = Date.now;
function uf(e) {
  var t = 0, r = 0;
  return function() {
    var n = cf(), a = lf - (n - r);
    if (r = n, a > 0) {
      if (++t >= of)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var df = uf, pf = sf, ff = df, hf = ff(pf), $a = hf, mf = $r, gf = _a, yf = $a;
function bf(e, t) {
  return yf(gf(e, t, mf), e + "");
}
var vf = bf, Ef = Et, Sf = yt, _f = Ct, $f = se;
function xf(e, t, r) {
  if (!$f(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Sf(r) && _f(t, r.length) : n == "string" && t in r) ? Ef(r[t], e) : !1;
}
var Cf = xf, wf = vf, Tf = Cf;
function Ff(e) {
  return wf(function(t, r) {
    var n = -1, a = r.length, i = a > 1 ? r[a - 1] : void 0, o = a > 2 ? r[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0, o && Tf(r[0], r[1], o) && (i = a < 3 ? void 0 : i, a = 1), t = Object(t); ++n < a; ) {
      var l = r[n];
      l && e(t, l, n, i);
    }
    return t;
  });
}
var If = Ff;
function Af(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Of = Af, Rf = Of, kf = gt, Pf = Q, Df = bt, Lf = Ct, Nf = mr, Bf = Object.prototype, Uf = Bf.hasOwnProperty;
function zf(e, t) {
  var r = Pf(e), n = !r && kf(e), a = !r && !n && Df(e), i = !r && !n && !a && Nf(e), o = r || n || a || i, l = o ? Rf(e.length, String) : [], c = l.length;
  for (var u in e)
    (t || Uf.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Lf(u, c))) && l.push(u);
  return l;
}
var xa = zf;
function Mf(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var jf = Mf, Qf = se, qf = mt, Vf = jf, Gf = Object.prototype, Hf = Gf.hasOwnProperty;
function Yf(e) {
  if (!Qf(e))
    return Vf(e);
  var t = qf(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Hf.call(e, n)) || r.push(n);
  return r;
}
var Wf = Yf, Kf = xa, Xf = Wf, Zf = yt;
function Jf(e) {
  return Zf(e) ? Kf(e, !0) : Xf(e);
}
var Tt = Jf, eh = Ve, th = If, rh = Tt, nh = th(function(e, t) {
  eh(t, rh(t), e);
}), ah = nh, ih = ah;
const ot = /* @__PURE__ */ P(ih);
function sh(e) {
  return e && e.length ? e[0] : void 0;
}
var oh = sh;
const lh = /* @__PURE__ */ P(oh);
var ch = _r, uh = xt, dh = Ct, un = se, ph = qe;
function fh(e, t, r, n) {
  if (!un(e))
    return e;
  t = uh(t, e);
  for (var a = -1, i = t.length, o = i - 1, l = e; l != null && ++a < i; ) {
    var c = ph(t[a]), u = r;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (a != o) {
      var d = l[c];
      u = n ? n(d, c, l) : void 0, u === void 0 && (u = un(d) ? d : dh(t[a + 1]) ? [] : {});
    }
    ch(l, c, u), l = l[c];
  }
  return e;
}
var hh = fh, mh = Er, gh = hh, yh = xt;
function bh(e, t, r) {
  for (var n = -1, a = t.length, i = {}; ++n < a; ) {
    var o = t[n], l = mh(e, o);
    r(l, o) && gh(i, yh(o, e), l);
  }
  return i;
}
var vh = bh, Eh = vh, Sh = Sr;
function _h(e, t) {
  return Eh(e, t, function(r, n) {
    return Sh(e, n);
  });
}
var $h = _h;
function xh(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var xr = xh, dn = Ce, Ch = gt, wh = Q, pn = dn ? dn.isConcatSpreadable : void 0;
function Th(e) {
  return wh(e) || Ch(e) || !!(pn && e && e[pn]);
}
var Fh = Th, Ih = xr, Ah = Fh;
function Ca(e, t, r, n, a) {
  var i = -1, o = e.length;
  for (r || (r = Ah), a || (a = []); ++i < o; ) {
    var l = e[i];
    t > 0 && r(l) ? t > 1 ? Ca(l, t - 1, r, n, a) : Ih(a, l) : n || (a[a.length] = l);
  }
  return a;
}
var Oh = Ca, Rh = Oh;
function kh(e) {
  var t = e == null ? 0 : e.length;
  return t ? Rh(e, 1) : [];
}
var Ph = kh, Dh = Ph, Lh = _a, Nh = $a;
function Bh(e) {
  return Nh(Lh(e, void 0, Dh), e + "");
}
var Uh = Bh, zh = $h, Mh = Uh, jh = Mh(function(e, t) {
  return e == null ? {} : zh(e, t);
}), Qh = jh;
const qh = /* @__PURE__ */ P(Qh);
var Vh = _t;
function Gh() {
  this.__data__ = new Vh(), this.size = 0;
}
var Hh = Gh;
function Yh(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Wh = Yh;
function Kh(e) {
  return this.__data__.get(e);
}
var Xh = Kh;
function Zh(e) {
  return this.__data__.has(e);
}
var Jh = Zh, em = _t, tm = dr, rm = br, nm = 200;
function am(e, t) {
  var r = this.__data__;
  if (r instanceof em) {
    var n = r.__data__;
    if (!tm || n.length < nm - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new rm(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var im = am, sm = _t, om = Hh, lm = Wh, cm = Xh, um = Jh, dm = im;
function Ae(e) {
  var t = this.__data__ = new sm(e);
  this.size = t.size;
}
Ae.prototype.clear = om;
Ae.prototype.delete = lm;
Ae.prototype.get = cm;
Ae.prototype.has = um;
Ae.prototype.set = dm;
var Cr = Ae;
function pm(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var fm = pm, hm = xa, mm = ca, gm = yt;
function ym(e) {
  return gm(e) ? hm(e) : mm(e);
}
var Ge = ym, bm = Ve, vm = Ge;
function Em(e, t) {
  return e && bm(t, vm(t), e);
}
var Sm = Em, _m = Ve, $m = Tt;
function xm(e, t) {
  return e && _m(t, $m(t), e);
}
var Cm = xm, lt = { exports: {} };
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
var wm = lt.exports;
function Tm(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Fm = Tm;
function Im(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
var Am = Im;
function Om() {
  return [];
}
var wa = Om, Rm = Am, km = wa, Pm = Object.prototype, Dm = Pm.propertyIsEnumerable, fn = Object.getOwnPropertySymbols, Lm = fn ? function(e) {
  return e == null ? [] : (e = Object(e), Rm(fn(e), function(t) {
    return Dm.call(e, t);
  }));
} : km, wr = Lm, Nm = Ve, Bm = wr;
function Um(e, t) {
  return Nm(e, Bm(e), t);
}
var zm = Um, Mm = la, jm = Mm(Object.getPrototypeOf, Object), Ta = jm, Qm = xr, qm = Ta, Vm = wr, Gm = wa, Hm = Object.getOwnPropertySymbols, Ym = Hm ? function(e) {
  for (var t = []; e; )
    Qm(t, Vm(e)), e = qm(e);
  return t;
} : Gm, Fa = Ym, Wm = Ve, Km = Fa;
function Xm(e, t) {
  return Wm(e, Km(e), t);
}
var Zm = Xm, Jm = xr, eg = Q;
function tg(e, t, r) {
  var n = t(e);
  return eg(e) ? n : Jm(n, r(e));
}
var Ia = tg, rg = Ia, ng = wr, ag = Ge;
function ig(e) {
  return rg(e, ag, ng);
}
var Aa = ig, sg = Ia, og = Fa, lg = Tt;
function cg(e) {
  return sg(e, lg, og);
}
var ug = cg, dg = Object.prototype, pg = dg.hasOwnProperty;
function fg(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && pg.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var hg = fg, mg = re, gg = mg.Uint8Array, Oa = gg, hn = Oa;
function yg(e) {
  var t = new e.constructor(e.byteLength);
  return new hn(t).set(new hn(e)), t;
}
var Tr = yg, bg = Tr;
function vg(e, t) {
  var r = t ? bg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Eg = vg, Sg = /\w*$/;
function _g(e) {
  var t = new e.constructor(e.source, Sg.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var $g = _g, mn = Ce, gn = mn ? mn.prototype : void 0, yn = gn ? gn.valueOf : void 0;
function xg(e) {
  return yn ? Object(yn.call(e)) : {};
}
var Cg = xg, wg = Tr;
function Tg(e, t) {
  var r = t ? wg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Fg = Tg, Ig = Tr, Ag = Eg, Og = $g, Rg = Cg, kg = Fg, Pg = "[object Boolean]", Dg = "[object Date]", Lg = "[object Map]", Ng = "[object Number]", Bg = "[object RegExp]", Ug = "[object Set]", zg = "[object String]", Mg = "[object Symbol]", jg = "[object ArrayBuffer]", Qg = "[object DataView]", qg = "[object Float32Array]", Vg = "[object Float64Array]", Gg = "[object Int8Array]", Hg = "[object Int16Array]", Yg = "[object Int32Array]", Wg = "[object Uint8Array]", Kg = "[object Uint8ClampedArray]", Xg = "[object Uint16Array]", Zg = "[object Uint32Array]";
function Jg(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case jg:
      return Ig(e);
    case Pg:
    case Dg:
      return new n(+e);
    case Qg:
      return Ag(e, r);
    case qg:
    case Vg:
    case Gg:
    case Hg:
    case Yg:
    case Wg:
    case Kg:
    case Xg:
    case Zg:
      return kg(e, r);
    case Lg:
      return new n();
    case Ng:
    case zg:
      return new n(e);
    case Bg:
      return Og(e);
    case Ug:
      return new n();
    case Mg:
      return Rg(e);
  }
}
var ey = Jg, ty = se, bn = Object.create, ry = function() {
  function e() {
  }
  return function(t) {
    if (!ty(t))
      return {};
    if (bn)
      return bn(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), ny = ry, ay = ny, iy = Ta, sy = mt;
function oy(e) {
  return typeof e.constructor == "function" && !sy(e) ? ay(iy(e)) : {};
}
var ly = oy, cy = je, uy = ne, dy = "[object Map]";
function py(e) {
  return uy(e) && cy(e) == dy;
}
var fy = py, hy = fy, my = fr, vn = hr, En = vn && vn.isMap, gy = En ? my(En) : hy, yy = gy, by = je, vy = ne, Ey = "[object Set]";
function Sy(e) {
  return vy(e) && by(e) == Ey;
}
var _y = Sy, $y = _y, xy = fr, Sn = hr, _n = Sn && Sn.isSet, Cy = _n ? xy(_n) : $y, wy = Cy, Ty = Cr, Fy = fm, Iy = _r, Ay = Sm, Oy = Cm, Ry = wm, ky = Fm, Py = zm, Dy = Zm, Ly = Aa, Ny = ug, By = je, Uy = hg, zy = ey, My = ly, jy = Q, Qy = bt, qy = yy, Vy = se, Gy = wy, Hy = Ge, Yy = Tt, Wy = 1, Ky = 2, Xy = 4, Ra = "[object Arguments]", Zy = "[object Array]", Jy = "[object Boolean]", eb = "[object Date]", tb = "[object Error]", ka = "[object Function]", rb = "[object GeneratorFunction]", nb = "[object Map]", ab = "[object Number]", Pa = "[object Object]", ib = "[object RegExp]", sb = "[object Set]", ob = "[object String]", lb = "[object Symbol]", cb = "[object WeakMap]", ub = "[object ArrayBuffer]", db = "[object DataView]", pb = "[object Float32Array]", fb = "[object Float64Array]", hb = "[object Int8Array]", mb = "[object Int16Array]", gb = "[object Int32Array]", yb = "[object Uint8Array]", bb = "[object Uint8ClampedArray]", vb = "[object Uint16Array]", Eb = "[object Uint32Array]", x = {};
x[Ra] = x[Zy] = x[ub] = x[db] = x[Jy] = x[eb] = x[pb] = x[fb] = x[hb] = x[mb] = x[gb] = x[nb] = x[ab] = x[Pa] = x[ib] = x[sb] = x[ob] = x[lb] = x[yb] = x[bb] = x[vb] = x[Eb] = !0;
x[tb] = x[ka] = x[cb] = !1;
function nt(e, t, r, n, a, i) {
  var o, l = t & Wy, c = t & Ky, u = t & Xy;
  if (r && (o = a ? r(e, n, a, i) : r(e)), o !== void 0)
    return o;
  if (!Vy(e))
    return e;
  var d = jy(e);
  if (d) {
    if (o = Uy(e), !l)
      return ky(e, o);
  } else {
    var p = By(e), f = p == ka || p == rb;
    if (Qy(e))
      return Ry(e, l);
    if (p == Pa || p == Ra || f && !a) {
      if (o = c || f ? {} : My(e), !l)
        return c ? Dy(e, Oy(o, e)) : Py(e, Ay(o, e));
    } else {
      if (!x[p])
        return a ? e : {};
      o = zy(e, p, l);
    }
  }
  i || (i = new Ty());
  var h = i.get(e);
  if (h)
    return h;
  i.set(e, o), Gy(e) ? e.forEach(function(E) {
    o.add(nt(E, t, r, E, e, i));
  }) : qy(e) && e.forEach(function(E, g) {
    o.set(g, nt(E, t, r, g, e, i));
  });
  var y = u ? c ? Ny : Ly : c ? Yy : Hy, m = d ? void 0 : y(e);
  return Fy(m || e, function(E, g) {
    m && (g = E, E = e[g]), Iy(o, g, nt(E, t, r, g, e, i));
  }), o;
}
var Sb = nt, _b = Sb, $b = 1, xb = 4;
function Cb(e) {
  return _b(e, $b | xb);
}
var wb = Cb;
const $e = /* @__PURE__ */ P(wb);
var Tb = pe, Fb = ne, Ib = "[object Boolean]";
function Ab(e) {
  return e === !0 || e === !1 || Fb(e) && Tb(e) == Ib;
}
var Ob = Ab;
const Rb = /* @__PURE__ */ P(Ob);
var kb = pe, Pb = Q, Db = ne, Lb = "[object String]";
function Nb(e) {
  return typeof e == "string" || !Pb(e) && Db(e) && kb(e) == Lb;
}
var Bb = Nb;
const Ub = /* @__PURE__ */ P(Bb);
var zb = pe, Mb = ne, jb = "[object Number]";
function Qb(e) {
  return typeof e == "number" || Mb(e) && zb(e) == jb;
}
var qb = Qb;
const Vb = /* @__PURE__ */ P(qb);
function Fr() {
}
Fr.prototype = new Error();
class $n {
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
class Gb {
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
function Hb(e) {
  return xe.parse(e).q;
}
function Da(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = Da(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function xn(e, t) {
  const r = Dt(e), n = t.map((o) => Dt(o));
  let a = !1;
  const i = n.filter((o) => {
    const l = Xe(o, r), c = Xe(r, o);
    return l && !a && (a = !0), !l && !c;
  });
  if (!a)
    i.push(r);
  else if (e.length === 3) {
    const l = Da(e), c = Dt(l), u = i.some((d) => {
      const p = Xe(d, c), f = Xe(c, d);
      return p || f;
    });
    (ae(i) || !u) && i.push(c);
  }
  return i.map((o) => Hb(o));
}
const La = (e, t) => {
  if (ae(e))
    return;
  if (!ga(lh(e)))
    return xn(e, t);
  let r = t;
  for (const n of e)
    r = xn(n, r);
  return r;
}, Na = (e, t, r) => {
  let n = qh(t, r);
  return ae(n.filters) || (n.filters = La(n.filters, e.filters)), n;
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
}, Ba = Object.keys(ct), Yb = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, Wb = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class Kb {
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
class Ua {
  constructor(t) {
    this.axiosConfig = Le(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = rt.CancelToken;
  }
  validateAxiosConfig() {
    if (!Np(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = Le(t, "interceptors.request", void 0), this.responseInterceptor = Le(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: Kb,
      InvenioRequestSerializer: $n
    };
    return typeof t == "string" ? r[t] : t || $n;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), a = Le(t, "invenio.responseSerializer", Gb);
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
      const n = Na(t, r.extras, Ba);
      return ae(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw rt.isCancel(r) ? new Fr() : r;
    }
  }
}
class Xb {
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
          return Vb(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const a = ga(n) ? n : [n], i = ":", o = t.urlFilterSeparator, l = `[^\\${i}\\${o}]*`, c = `${l}\\${i}${l}`, u = `${c}(\\${o}${c})*`, d = new RegExp(`^${u}$`);
          return a.every((p) => String(p).match(d));
        }
        default:
          return !1;
      }
    };
  }
}
const Zb = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, Cn = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class Jb {
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
class ev {
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
    }, this.urlParamsMapping = Ko(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !Rb(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !Ub(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new Xb(), this.urlParser = t.urlParser || new Jb(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), a = this._mergeParamsIntoState(n, t), i = this._mapQueryStateToUrlParams(a);
    return Cn(i), a;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      Zb(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    Cn(r);
  }
}
const tv = "SET_QUERY_COMPONENT_INITIAL_STATE", za = "SET_QUERY_STRING", Ir = "SET_QUERY_SORTING", Ar = "SET_QUERY_SORT_BY", Or = "SET_QUERY_SORT_ORDER", He = "SET_QUERY_STATE", Ma = "SET_QUERY_PAGINATION_PAGE", ja = "SET_QUERY_PAGINATION_SIZE", Qa = "SET_QUERY_FILTERS", qa = "SET_QUERY_SUGGESTIONS", Va = "SET_SUGGESTION_STRING", Ga = "CLEAR_QUERY_SUGGESTIONS", Ha = "RESULTS_LOADING", Ya = "RESULTS_FETCH_SUCCESS", Wa = "RESULTS_FETCH_ERROR", Kt = "RESULTS_UPDATE_LAYOUT", Ka = "RESET_QUERY", rv = (e) => (t) => {
  e && t(ee({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, Xa = (e) => (t) => {
  t({
    type: He,
    payload: e
  }), t(ee());
}, Za = (e) => (t) => {
  t({
    type: za,
    payload: e
  }), t(ee());
}, nv = (e, t) => (r) => {
  r({
    type: Ir,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(ee());
}, av = (e) => (t) => {
  t({
    type: Ar,
    payload: e
  }), t(ee());
}, iv = (e) => (t) => {
  t({
    type: Or,
    payload: e
  }), t(ee());
}, sv = (e) => (t) => {
  t({
    type: Ma,
    payload: e
  }), t(ee());
}, ov = (e) => (t) => {
  t({
    type: ja,
    payload: e
  }), t(ee());
}, Rr = (e) => (t) => {
  t({
    type: Qa,
    payload: e
  }), t(ee());
}, lv = (e) => async (t, r, n) => {
  const a = n.urlHandlerApi;
  if (a) {
    await t({
      type: Kt,
      payload: e
    });
    const i = r().query;
    a.set(i);
  } else
    t({
      type: Kt,
      payload: e
    });
}, cv = () => (e, t, r) => {
  e({
    type: Ka,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(ee());
}, uv = (e, t, r, n) => {
  const a = t.urlHandlerApi;
  a && (r ? a.replace(e) : n && a.set(e));
}, dv = (e, t, r, n) => {
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
}, pv = (e, t, r, n) => {
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
    pv(o, i, a, r), o = $e(n().query), uv(o, a, t, e), r({
      type: Ha
    });
    try {
      let c = await a.searchApi.search(o);
      "newQueryState" in c && (c = dv($e(c), r, n, a)), r({
        type: Ya,
        payload: {
          aggregations: c.aggregations,
          hits: c.hits,
          total: c.total
        }
      });
    } catch (l) {
      if (l instanceof Fr) {
        console.debug(l);
        return;
      } else
        console.error(l), r({
          type: Wa,
          payload: {
            error: l
          }
        });
    }
  };
}, fv = (e) => (t) => {
  t({
    type: Va,
    payload: e
  }), t(hv());
}, hv = () => async (e, t, r) => {
  const n = $e(t().query), a = r.suggestionApi;
  try {
    const i = await a.search(n);
    e({
      type: qa,
      payload: {
        suggestions: i.suggestions
      }
    });
  } catch (i) {
    console.error("Could not load suggestions due to: " + i);
  }
}, mv = () => (e) => {
  e({
    type: Ga,
    payload: {
      suggestions: []
    }
  });
}, gv = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: He,
      payload: n
    }), e(ee({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, C = /* @__PURE__ */ s.createContext({}), yv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
    case Ir:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Ar:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Or:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    default:
      return e;
  }
}, bv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case za:
      return {
        ...e,
        queryString: t.payload,
        page: 1
      };
    case Ir:
      return {
        ...e,
        sortBy: t.payload.sortBy,
        sortOrder: t.payload.sortOrder,
        _sortUserChanged: !0,
        page: 1
      };
    case Ar:
      return {
        ...e,
        sortBy: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case Or:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case Ma:
      return {
        ...e,
        page: t.payload
      };
    case ja:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case Qa:
      return {
        ...e,
        page: 1,
        filters: La(t.payload, e.filters)
      };
    case qa:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case Ga:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case Va:
      return {
        ...e,
        suggestionString: t.payload
      };
    case tv:
      return {
        ...e,
        ...t.payload
      };
    case He:
      return {
        ...e,
        ...ct,
        ...Na(ct, t.payload, Ba)
      };
    case Kt:
      return {
        ...e,
        layout: t.payload
      };
    case Ka:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, vv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Ha:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case Ya:
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
    case Wa:
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
var Ev = co({
  app: yv,
  query: bv,
  results: vv
});
function wn(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: a,
    sortOrder: i
  } = t;
  return r !== a || n !== i;
}
function Sv(e, t, r) {
  const n = wn(r, t), a = !ae(e.defaultSortingOnEmptyQueryString);
  let i = !1;
  return a && (i = wn(r, e.defaultSortingOnEmptyQueryString)), n && i;
}
function _v(e) {
  const t = {
    ...ct,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = Sv(e, t, r), a = {
    ...Wb,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, i = {
    ...Yb,
    loading: e.searchOnInit
  };
  return {
    app: a,
    query: r,
    results: i
  };
}
function $v(e) {
  const t = _v(e);
  return uo(Ev, t, po(fo.withExtraArgument(e)));
}
function Tn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class kr extends L {
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
kr.defaultProps = {
  searchOnInit: !0,
  eventListenerEnabled: !1
};
kr.contextType = C;
var xv = v.component("Bootstrap", kr);
const Cv = (e) => ({
  onAppInitialized: (t) => e(rv(t)),
  updateQueryState: (t) => e(Xa(t)),
  searchOnUrlQueryStringChanged: () => e(gv())
}), wv = k(null, Cv)(xv);
class Pr extends L {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new ev(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = $v(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
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
      buildUID: (c, u) => Tn(c, u, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, l = Tn("ReactSearchKit.children", a, t);
    return /* @__PURE__ */ s.createElement(C.Provider, {
      value: o
    }, /* @__PURE__ */ s.createElement(to, {
      store: this.store
    }, /* @__PURE__ */ s.createElement(wv, {
      searchOnInit: i,
      eventListenerEnabled: n
    }, /* @__PURE__ */ s.createElement(v, {
      id: l
    }, r))));
  }
}
Pr.defaultProps = {
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
Pr.contextType = C;
var Tv = v.component("ReactSearchKit", Pr);
class Ja extends L {
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
    return !!t.length && /* @__PURE__ */ s.createElement(ei, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
Ja.defaultProps = {
  overridableId: ""
};
const ei = (e) => {
  let {
    overridableId: t,
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  } = e;
  const {
    buildUID: i
  } = I(C);
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
      /* @__PURE__ */ s.createElement(W, {
        image: !0,
        key: l,
        onClick: () => n(u)
      }, c, /* @__PURE__ */ s.createElement(_, {
        name: "delete"
      }))
    );
  })));
};
ei.defaultProps = {
  overridableId: ""
};
var Fv = v.component("ActiveFilters", Ja);
const Iv = (e) => ({
  updateQueryFilters: (t) => e(Rr(t))
});
k((e) => ({
  filters: e.query.filters
}), Iv)(Fv);
function Av(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var Ov = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
Av(Ov);
class ti extends L {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? ho.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ s.createElement(kv, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
ti.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const Rv = (e) => /* @__PURE__ */ s.createElement(ti, Object.assign({
  key: e.queryString
}, e)), kv = (e) => {
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
  } = I(C), u = (p, f) => {
    o();
  }, d = (p, f) => {
    p.key === "Enter" && o();
  };
  return /* @__PURE__ */ s.createElement(v, Object.assign({
    id: c("AutocompleteSearchBar.element", t)
  }, l), /* @__PURE__ */ s.createElement("div", {
    className: "AutoCompleteText"
  }, /* @__PURE__ */ s.createElement(aa, {
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
  }), /* @__PURE__ */ s.createElement(Pv, {
    querySuggestions: a,
    overridableId: t
  })));
}, Pv = (e) => {
  let {
    overridableId: t,
    ...r
  } = e;
  const {
    querySuggestions: n
  } = r, {
    buildUID: a
  } = I(C), i = async (o) => {
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
var Dv = v.component("AutocompleteSearchBar", Rv);
const Lv = (e) => ({
  updateQueryString: (t) => e(Za(t)),
  updateSuggestions: (t) => e(fv(t)),
  clearSuggestions: () => e(mv())
}), Nv = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
k(Nv, Lv)(Dv);
class Ft extends L {
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
        return /* @__PURE__ */ s.createElement(Ft, {
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
      return /* @__PURE__ */ s.createElement(ni, {
        key: i.key,
        bucket: i,
        keyField: o,
        isSelected: l,
        onFilterClicked: c,
        getChildAggCmps: u,
        overridableId: n
      });
    });
    return /* @__PURE__ */ s.createElement(ri, {
      valuesCmp: a,
      overridableId: n
    });
  }
}
Ft.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const ri = (e) => {
  let {
    valuesCmp: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = I(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: n("BucketAggregationContainer.element", r),
    valuesCmp: t
  }, /* @__PURE__ */ s.createElement($, null, t));
};
ri.defaultProps = {
  overridableId: ""
};
const ni = (e) => {
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
  } = I(C), u = t.label ? t.label : `${o} (${t.doc_count.toLocaleString("en-US")})`, d = a(t);
  return /* @__PURE__ */ s.createElement(v, {
    id: l("BucketAggregationValues.element", i),
    bucket: t,
    label: u,
    onFilterClicked: n,
    isSelected: r,
    childAggCmps: d
  }, /* @__PURE__ */ s.createElement($.Item, {
    key: t.key
  }, /* @__PURE__ */ s.createElement(ur, {
    label: u,
    id: c(),
    value: t.key,
    onClick: () => n(t.key),
    checked: r
  }), d));
};
ni.defaultProps = {
  overridableId: ""
};
var Bv = v.component("BucketAggregationValues", Ft);
class ai extends L {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: a
      } = this.props;
      return /* @__PURE__ */ s.createElement(Bv, {
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
    return /* @__PURE__ */ s.createElement(ii, Object.assign({
      title: this.title,
      containerCmp: l,
      overridableId: n
    }, a));
  }
}
ai.defaultProps = {
  overridableId: ""
};
const ii = (e) => {
  let {
    overridableId: t,
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: i
  } = e;
  const {
    buildUID: o
  } = I(C);
  return a && /* @__PURE__ */ s.createElement(v, {
    id: o("BucketAggregation.element", t),
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: i
  }, /* @__PURE__ */ s.createElement(D, null, /* @__PURE__ */ s.createElement(D.Content, null, /* @__PURE__ */ s.createElement(D.Header, null, n)), /* @__PURE__ */ s.createElement(D.Content, null, a)));
};
ii.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var Uv = v.component("BucketAggregation", ai);
const zv = (e) => ({
  updateQueryFilters: (t) => e(Rr(t))
});
k((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), zv)(Uv);
class si extends L {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
si.defaultProps = {
  condition: !0
};
var X = v.component("ShouldRender", si);
class oi extends L {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: a
    } = this.props;
    return /* @__PURE__ */ s.createElement(X, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ s.createElement(li, {
      totalResults: r,
      overridableId: a
    })));
  }
}
oi.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const li = (e) => {
  let {
    totalResults: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = I(C), a = n("Count.element", r);
  return /* @__PURE__ */ s.createElement(v, {
    id: a,
    totalResults: t
  }, /* @__PURE__ */ s.createElement(W, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
li.defaultProps = {
  overridableId: ""
};
var Mv = v.component("Count", oi);
k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(Mv);
class ci extends L {
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
    }, /* @__PURE__ */ s.createElement(ui, Object.assign({}, c, {
      queryString: a,
      resetQuery: this.resetQuery,
      extraContent: i,
      userSelectionFilters: l,
      overridableId: o
    })));
  }
}
ci.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const ui = (e) => {
  let {
    overridableId: t,
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: i
  } = e;
  const {
    buildUID: o
  } = I(C);
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
ui.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var jv = v.component("EmptyResults", ci);
const Qv = (e) => ({
  resetQuery: () => e(cv())
}), qv = k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), Qv)(jv);
function di(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ s.createElement(X, {
    condition: !t && !ae(r)
  }, /* @__PURE__ */ s.createElement(pi, {
    error: r,
    overridableId: n
  }));
}
di.defaultProps = {
  overridableId: ""
};
const pi = (e) => {
  let {
    error: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = I(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ s.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
pi.defaultProps = {
  overridableId: ""
};
var Vv = v.component("Error", di);
k((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(Vv);
function Dr(e) {
  const t = (a) => /* @__PURE__ */ s.createElement(e, a);
  return k((a) => ({
    currentQueryState: a.query,
    currentResultsState: a.results
  }), (a) => ({
    updateQueryState: (i) => a(Xa(i))
  }))(t);
}
class fi extends L {
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
    }, /* @__PURE__ */ s.createElement(hi, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: a
    }));
  }
}
fi.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
const hi = (e) => {
  let {
    overridableId: t,
    currentLayout: r,
    onLayoutChange: n
  } = e;
  const {
    buildUID: a
  } = I(C);
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
hi.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var Gv = v.component("LayoutSwitcher", fi);
const Hv = (e) => ({
  updateLayout: (t) => e(lv(t))
});
k((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), Hv)(Gv);
const Fn = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class mi extends L {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...Fn,
      ...t.options
    } : Fn;
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
    }, /* @__PURE__ */ s.createElement(gi, {
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
mi.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const gi = (e) => {
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
  } = I(C);
  return r > S && i(S), /* @__PURE__ */ s.createElement(v, {
    id: B("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: a,
    options: o,
    onPageChange: i
  }, /* @__PURE__ */ s.createElement(ro, Object.assign({
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
gi.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var Yv = v.component("Pagination", mi);
const Wv = (e) => ({
  updateQueryPage: (t) => e(sv(t))
}), Kv = k((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), Wv)(Yv);
function yi(e) {
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
  }, /* @__PURE__ */ s.createElement(bi, {
    results: n,
    resultsPerRow: a,
    overridableId: i
  }));
}
yi.defaultProps = {
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
  } = I(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: n("ResultsGrid.item", r),
    result: t
  }, /* @__PURE__ */ s.createElement(D, {
    fluid: !0,
    href: `#${t.id}`
  }, /* @__PURE__ */ s.createElement(no, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ s.createElement(D.Content, null, /* @__PURE__ */ s.createElement(D.Header, null, t.title), /* @__PURE__ */ s.createElement(D.Description, null, t.description))));
}, bi = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: a
  } = I(C), i = r.map((o, l) => (
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
bi.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var Zv = v.component("ResultsGrid", yi);
const Jv = k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(Zv);
function vi(e) {
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
  }, /* @__PURE__ */ s.createElement(Ei, {
    results: n,
    overridableId: a
  }));
}
vi.defaultProps = {
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
  } = I(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ s.createElement(ve, {
    href: `#${t.id}`
  }, /* @__PURE__ */ s.createElement(ve.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ s.createElement(ve.Content, null, /* @__PURE__ */ s.createElement(ve.Header, null, t.title), /* @__PURE__ */ s.createElement(ve.Description, null, t.description))));
}, Ei = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = I(C), a = t.map((i, o) => (
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
Ei.defaultProps = {
  overridableId: ""
};
var tE = v.component("ResultsList", vi);
const Si = k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(tE);
function _i(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ s.createElement($i, {
    overridableId: n
  }) : t;
}
_i.defaultProps = {
  overridableId: ""
};
const $i = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = I(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ s.createElement(ia, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
$i.defaultProps = {
  overridableId: ""
};
var rE = v.component("ResultsLoader", _i);
const nE = k((e) => ({
  loading: e.results.loading
}))(rE);
function xi(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: a,
    onResultsRendered: i
  } = e;
  return /* @__PURE__ */ s.createElement(X, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ s.createElement(Ci, {
    layout: n,
    overridableId: a,
    onResultsRendered: i
  }));
}
xi.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const Ci = (e) => {
  let {
    layout: t,
    overridableId: r,
    onResultsRendered: n
  } = e;
  const {
    buildUID: a
  } = I(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: a("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ s.createElement(Si, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ s.createElement(Jv, {
    overridableId: r,
    onResultsRendered: n
  }));
};
Ci.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var aE = v.component("ResultsMultiLayout", xi);
k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(aE);
class wi extends L {
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
    }, a(/* @__PURE__ */ s.createElement(Ti, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
wi.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const Ti = (e) => {
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
  } = I(C), c = n.map((u, d) => ({
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
Ti.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var iE = v.component("ResultsPerPage", wi);
const sE = (e) => ({
  updateQuerySize: (t) => e(ov(t))
}), oE = k((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), sE)(iE);
class Fi extends L {
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
    return /* @__PURE__ */ s.createElement(Lr, {
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
Fi.defaultProps = {
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
  return /* @__PURE__ */ s.createElement(Fi, Object.assign({
    key: t
  }, e));
};
Ii.defaultProps = {
  queryString: ""
};
class Lr extends L {
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
    }, /* @__PURE__ */ s.createElement(aa, Object.assign({
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
Lr.defaultProps = {
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
Lr.contextType = C;
var lE = v.component("SearchBar", Ii);
const cE = (e) => ({
  updateQueryString: (t) => e(Za(t))
}), uE = k((e) => ({
  queryString: e.query.queryString
}), cE)(lE);
class Ai extends L {
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
    }, i(/* @__PURE__ */ s.createElement(Oi, {
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
Ai.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const Oi = (e) => {
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
  } = I(C), d = o(r, n), p = a.map((f, h) => ({
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
Oi.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var dE = v.component("Sort", Ai);
const pE = (e) => ({
  updateQuerySorting: (t, r) => e(nv(t, r))
});
k((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), pE)(dE);
class Ri extends L {
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
    }, a(/* @__PURE__ */ s.createElement(ki, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
Ri.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const ki = (e) => {
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
  } = I(C), c = n.map((u, d) => ({
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
ki.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var fE = v.component("SortBy", Ri);
const hE = (e) => ({
  updateQuerySortBy: (t) => e(av(t))
}), mE = k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), hE)(fE);
class Pi extends L {
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
    }, a(/* @__PURE__ */ s.createElement(Di, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
Pi.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const Di = (e) => {
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
  } = I(C), c = n.map((u, d) => ({
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
Di.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var gE = v.component("SortOrder", Pi);
const yE = (e) => ({
  updateQuerySortOrder: (t) => e(iv(t))
});
k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), yE)(gE);
const Li = (e) => {
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
  } = I(C), d = l(r);
  return /* @__PURE__ */ s.createElement(v, {
    id: u("SearchFilters.Toggle.element", t),
    title: n,
    label: a,
    filterValue: i,
    userSelectionFilters: r,
    updateQueryFilters: o
  }, /* @__PURE__ */ s.createElement(D, null, /* @__PURE__ */ s.createElement(D.Content, null, /* @__PURE__ */ s.createElement(D.Header, null, n)), /* @__PURE__ */ s.createElement(D.Content, null, /* @__PURE__ */ s.createElement(ur, {
    toggle: !0,
    label: a,
    onClick: c,
    checked: d
  }))));
};
Li.defaultProps = {
  overridableId: ""
};
var bE = v.component("SearchFilters.Toggle", Li);
const vE = (e) => ({
  updateQueryFilters: (t) => e(Rr(t))
});
k((e) => ({
  userSelectionFilters: e.query.filters
}), vE)(bE);
const Ni = s.createContext(
  null
), EE = ({ config: e, children: t, updateQueryState: r, currentQueryState: n }) => {
  const a = R(() => {
    r({
      ...n,
      queryString: n.queryString
    });
  }, [r, n]);
  return /* @__PURE__ */ s.createElement(Ni.Provider, { value: { config: e, refreshSearch: a } }, t);
}, SE = Dr(EE), Ye = () => {
  const e = s.useContext(Ni);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
};
function Xt(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var _E = (e) => typeof e == "object" && e !== null;
function $E(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var xE = (e) => e === "base";
function CE(e) {
  return e.slice().filter((t) => !xE(t));
}
function In(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function wE(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = In(r % 52) + t;
  return In(r % 52) + t;
}
function TE(e, t) {
  let r = t.length;
  for (; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function FE(e) {
  return wE(TE(5381, e) >>> 0);
}
var Bi = /\s*!(important)?/i;
function IE(e) {
  return typeof e == "string" ? Bi.test(e) : !1;
}
function AE(e) {
  return typeof e == "string" ? e.replace(Bi, "").trim() : e;
}
function Ui(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var Nr = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...n) => {
    const a = JSON.stringify(n);
    if (t.has(a))
      return t.get(a);
    const i = e(...n);
    return t.set(a, i), i;
  };
}, OE = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function zi(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((n) => {
    if (OE.has(n))
      return;
    const a = t[n], i = r[n];
    Xt(a) && Xt(i) ? t[n] = zi(a, i) : t[n] = i;
  }), t), {});
}
var RE = (e) => e != null;
function Mi(e, t, r = {}) {
  const { stop: n, getKey: a } = r;
  function i(o, l = []) {
    if (_E(o)) {
      const c = {};
      for (const [u, d] of Object.entries(o)) {
        const p = (a == null ? void 0 : a(u, d)) ?? u, f = [...l, p];
        if (n != null && n(o, f))
          return t(o, l);
        const h = i(d, f);
        RE(h) && (c[p] = h);
      }
      return c;
    }
    return t(o, l);
  }
  return i(e);
}
function kE(e, t) {
  return e.reduce(
    (r, n, a) => {
      const i = t[a];
      return n != null && (r[i] = n), r;
    },
    {}
  );
}
function ji(e, t, r = !0) {
  const { utility: n, conditions: a } = t, { hasShorthand: i, resolveShorthand: o } = n;
  return Mi(
    e,
    (l) => Array.isArray(l) ? kE(l, a.breakpoints.keys) : l,
    {
      stop: (l) => Array.isArray(l),
      getKey: r ? (l) => i ? o(l) : l : void 0
    }
  );
}
var PE = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, DE = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function LE(e) {
  const { utility: t, hash: r, conditions: n = PE } = e, a = (o) => [t.prefix, o].filter(Boolean).join("-"), i = (o, l) => {
    let c;
    if (r) {
      const u = [...n.finalize(o), l];
      c = a(t.toHash(u, FE));
    } else
      c = [...n.finalize(o), a(l)].join(":");
    return c;
  };
  return Nr(({ base: o, ...l } = {}) => {
    const c = Object.assign(l, o), u = ji(c, e), d = /* @__PURE__ */ new Set();
    return Mi(u, (p, f) => {
      if (p == null)
        return;
      const h = IE(p), [y, ...m] = n.shift(f), E = CE(m), g = t.transform(y, AE(DE(p)));
      let S = i(E, g.className);
      h && (S = `${S}!`), d.add(S);
    }), Array.from(d).join(" ");
  });
}
function NE(...e) {
  return e.flat().filter((t) => Xt(t) && Object.keys($E(t)).length > 0);
}
function BE(e) {
  function t(a) {
    const i = NE(...a);
    return i.length === 1 ? i : i.map((o) => ji(o, e));
  }
  function r(...a) {
    return zi(...t(a));
  }
  function n(...a) {
    return Object.assign({}, ...t(a));
  }
  return { mergeCss: Nr(r), assignCss: n };
}
var UE = /([A-Z])/g, zE = /^ms-/, ME = Nr((e) => e.startsWith("--") ? e : e.replace(UE, "-$1").replace(zE, "-ms-").toLowerCase()), jE = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${jE.split(",").join("|")}`;
const QE = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", Qi = new Set(QE.split(",")), qE = /^@|&|&$/;
function An(e) {
  return Qi.has(e) || qE.test(e);
}
const VE = /^_/, GE = /&|@/;
function HE(e) {
  return e.map((t) => Qi.has(t) ? t.replace(VE, "") : GE.test(t) ? `[${Ui(t.trim())}]` : t);
}
function YE(e) {
  return e.sort((t, r) => {
    const n = An(t), a = An(r);
    return n && !a ? 1 : !n && a ? -1 : 0;
  });
}
const WE = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle", qi = /* @__PURE__ */ new Map(), Vi = /* @__PURE__ */ new Map();
WE.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [n, ...a] = r.split("/");
  qi.set(t, n), a.length && a.forEach((i) => {
    Vi.set(i === "1" ? n : i, t);
  });
});
const On = (e) => Vi.get(e) || e, Gi = {
  conditions: {
    shift: YE,
    finalize: HE,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = On(e);
      return { className: `${qi.get(r) || ME(r)}_${Ui(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: On
  }
}, KE = LE(Gi), b = (...e) => KE(Hi(...e));
b.raw = (...e) => Hi(...e);
const { mergeCss: Hi, assignCss: wC } = BE(Gi), XE = {
  spinnerIcon: b({
    marginInlineEnd: "0.5rem"
  })
}, Yi = ({
  progress: e,
  showPercentage: t = !1
}) => /* @__PURE__ */ s.createElement(cr, null, Object.entries(e).map(([r, n]) => /* @__PURE__ */ s.createElement(K.Inline, { basic: !0, key: r }, /* @__PURE__ */ s.createElement(_, { name: "spinner", loading: !0, className: XE.spinnerIcon }), /* @__PURE__ */ s.createElement("strong", null, r), " ", t ? `${n}%` : null))), Wi = () => /* @__PURE__ */ s.createElement(K, { basic: !0, padded: "very" }, /* @__PURE__ */ s.createElement(ao, { active: !0, inverted: !0 }, /* @__PURE__ */ s.createElement(ia, { inverted: !0 }, "Loading"))), ZE = ({ status: e, ...t }) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ s.createElement(_, { name: "close", color: "red", ...t }) : e === "success" || e === "created" ? /* @__PURE__ */ s.createElement(_, { name: "check circle", color: "green", ...t }) : e === "importing" || e === "validating" ? /* @__PURE__ */ s.createElement(_, { name: "spinner", loading: !0, ...t }) : e === "validated" ? /* @__PURE__ */ s.createElement(_, { name: "check circle", color: "blue", ...t }) : /* @__PURE__ */ s.createElement(_, { ...t }), Ki = ({
  status: e,
  children: t,
  ...r
}) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ s.createElement(W, { color: "red", ...r }, /* @__PURE__ */ s.createElement(_, { name: "warning sign" }), t) : e === "success" || e === "validated" || e === "created" ? /* @__PURE__ */ s.createElement(W, { color: "green", ...r }, /* @__PURE__ */ s.createElement(_, { name: "check circle" }), t) : e === "importing" || e === "validating" ? /* @__PURE__ */ s.createElement(W, { color: "blue", ...r }, /* @__PURE__ */ s.createElement(_, { name: "spinner", loading: !0 }), t) : /* @__PURE__ */ s.createElement(W, { ...r }, t), Be = (e) => (e == null ? void 0 : e.charAt(0).toUpperCase()) + (e == null ? void 0 : e.slice(1)) || "";
var Xi = { exports: {} };
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
})(Xi);
var JE = Xi.exports;
const eS = /* @__PURE__ */ P(JE), Zi = (e) => e.reduce((t, r) => t + r.file.size, 0), Ji = (e) => Br(Zi(e)), Br = (e) => {
  if (e === 0)
    return "0 Bytes";
  const t = 1024, r = ["Bytes", "KB", "MB", "GB"], n = Math.floor(Math.log(e) / Math.log(t));
  return `${Number.parseFloat((e / t ** n).toFixed(2))} ${r[n]}`;
}, Zt = (e) => new Date(e).toLocaleString(void 0, {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit"
});
var es = { exports: {} };
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
})(es);
var tS = es.exports;
const rS = /* @__PURE__ */ P(tS), nS = () => rS.get("csrftoken") || null, aS = (e) => {
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
}, TC = (e) => new Ua(e), FC = (e, t = {}, r = !0) => ({
  axios: {
    url: e,
    headers: {
      Accept: "application/vnd.inveniordm.v1+json",
      ...t
    },
    withCredentials: r
  }
}), q = rt.create({
  baseURL: "",
  timeout: 3e4,
  withCredentials: !0,
  // Include cookies in requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
q.interceptors.request.use(
  (e) => {
    const t = nS();
    return t && (e.headers["X-CSRFTOKEN"] = t), e;
  },
  (e) => Promise.reject(e)
);
const ts = async (e, t) => {
  try {
    const r = await q.put(
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
}, iS = async (e, t) => {
  try {
    const r = await q.post(
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
}, sS = async (e) => {
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
    const r = await q.post(
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
}, oS = async (e) => {
  try {
    const t = await q.delete(`/api/importer-tasks/${e}`);
    return t.status === 204 ? !0 : (console.error(`Failed to delete task: ${t.statusText}`), !1);
  } catch (t) {
    return console.error(
      `Error deleting task: ${t instanceof Error ? t.message : "Unknown error"}`
    ), !1;
  }
}, rs = async (e) => {
  try {
    const t = await q.post(
      `/api/importer-tasks/${e}/load`
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error executing bulk import:", t), new Error("Failed to execute bulk import");
  }
}, lS = async () => {
  try {
    const e = await q.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, cS = async (e) => {
  try {
    const t = await q.get(
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
    const t = await q.put(
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
}, uS = async (e, t) => {
  const r = t.map((n) => ({
    key: n
  }));
  try {
    const n = await q.post(
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
}, dS = async (e, t, r) => {
  try {
    const n = await q.put(
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
}, ns = async (e) => {
  try {
    const t = await q.post(
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
}, as = async (e, t = {}) => {
  const { autoExecute: r = !1, onProgress: n, onError: a } = t;
  try {
    n == null || n("Validating", 0), await ns(e), n == null || n("Validating", 50);
    let i = await Ue(e);
    return n == null || n("Validating", 100), r && (i.status === "validated" || i.status === "validated with failures") && (n == null || n("Executing", 0), await rs(e), n == null || n("Executing", 50), i = await Ue(e), n == null || n("Executing", 100)), i;
  } catch (i) {
    const o = i instanceof Error ? i : new Error("Unknown error during workflow execution");
    throw a == null || a(o, "Executing"), o;
  }
}, is = async (e, t, r) => {
  if (!t || t.length === 0)
    return;
  const n = t.map((a) => a.name);
  await uS(e, n);
  for (const a of t)
    try {
      r == null || r({
        fileName: a.name,
        loaded: 0,
        total: a.size,
        percentage: 0
      }), await dS(e, a.name, a), r == null || r({
        fileName: a.name,
        loaded: a.size,
        total: a.size,
        percentage: 90
      }), await iS(e, a.name), r == null || r({
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
}, pS = async (e, t, r, n = {}) => {
  const {
    autoValidate: a = !1,
    autoExecute: i = !1,
    onProgress: o,
    onError: l
  } = n;
  try {
    o == null || o("Creating Task", 0);
    const c = await sS(e);
    if (!c)
      throw new Error("Failed to create import task");
    return o == null || o("Creating Task", 100), t && (o == null || o("Uploading Metadata", 0), await ts(c.id, t), o == null || o("Uploading Metadata", 100)), r && r.length > 0 && await is(c.id, r, (u) => {
      o == null || o("Uploading Files", u.percentage);
    }), a && t && await as(c.id, {
      autoExecute: i,
      onProgress: o,
      onError: l
    }), c;
  } catch (c) {
    const u = c instanceof Error ? c : new Error("Unknown error during task creation");
    throw l == null || l(u, "Creating Task"), u;
  }
}, fS = async (e, t, r, n = {}) => {
  const { onProgress: a, onError: i } = n;
  try {
    a == null || a("Updating", 0), t && (a == null || a("Updating Metadata", 0), await ts(e, t), a == null || a("Updating Metadata", 100)), r && r.length > 0 && await is(e, r, (o) => {
      a == null || a("Updating Files", o.percentage);
    }), a == null || a("Updating", 100);
  } catch (o) {
    const l = o instanceof Error ? o : new Error("Unknown error during task update");
    throw i == null || i(l, "Updating"), l;
  }
}, hS = async (e) => {
  try {
    const t = await q.post(
      `/api/importer-records/${e}/run`,
      {}
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Failed to fetch import records: ${t.statusText}`);
  } catch (t) {
    throw console.error("Failed to fetch import records:", t), t;
  }
}, ss = (e, t = {}) => {
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
      if (!await oS(e))
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
      const g = await ns(e);
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
      const g = await rs(e);
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
}, mS = ({ result: e, index: t }) => {
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
  } = ss(e.id, {
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
  return /* @__PURE__ */ s.createElement(ht, { key: t }, /* @__PURE__ */ s.createElement(G, null, /* @__PURE__ */ s.createElement("a", { href: `${r.resultPath}/${e.id}` }, e.title || "No title")), /* @__PURE__ */ s.createElement(G, null, Zt(e.created)), /* @__PURE__ */ s.createElement(G, null, /* @__PURE__ */ s.createElement(Ki, { status: e.status }, Be(e.status))), /* @__PURE__ */ s.createElement(G, null, /* @__PURE__ */ s.createElement(W, null, Be(e.record_type))), /* @__PURE__ */ s.createElement(G, null, ((y = e.records_status) == null ? void 0 : y.total_records) ?? 0), /* @__PURE__ */ s.createElement(G, null, e.serializer), /* @__PURE__ */ s.createElement(G, null, Be(e.mode)), /* @__PURE__ */ s.createElement(G, { className: Ze.actionsCell }, p && /* @__PURE__ */ s.createElement("div", { className: Ze.errorContainer }, p.message, /* @__PURE__ */ s.createElement(
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
}, gS = ({ children: e }) => /* @__PURE__ */ s.createElement(T, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ s.createElement(sa, null, /* @__PURE__ */ s.createElement(ht, null, /* @__PURE__ */ s.createElement(H, null, "Title"), /* @__PURE__ */ s.createElement(H, null, "Date Created"), /* @__PURE__ */ s.createElement(H, null, "Status"), /* @__PURE__ */ s.createElement(H, null, "Type"), /* @__PURE__ */ s.createElement(H, null, "Items"), /* @__PURE__ */ s.createElement(H, null, "Serializer"), /* @__PURE__ */ s.createElement(H, null, "Mode"), /* @__PURE__ */ s.createElement(H, null, "Actions"))), /* @__PURE__ */ s.createElement(oa, null, e)), yS = {
  container: b({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  })
}, bS = ({
  currentResultsState: e,
  currentQueryState: t
}) => {
  const r = e.data.total, n = t.size;
  return r ? n ? n > r ? /* @__PURE__ */ s.createElement(W, null, "Showing ", /* @__PURE__ */ s.createElement("strong", null, r), " result(s) found") : /* @__PURE__ */ s.createElement(W, { className: yS.container }, "Showing ", /* @__PURE__ */ s.createElement("strong", null, n), " of ", /* @__PURE__ */ s.createElement("strong", null, r), " ", "result(s) found") : null : /* @__PURE__ */ s.createElement(W, null, "No results found");
}, vS = Dr(bS), ES = [
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
}, SS = () => /* @__PURE__ */ s.createElement("div", { className: Rn.container }, /* @__PURE__ */ s.createElement(vS, null), /* @__PURE__ */ s.createElement("div", { className: Rn.sortByContainer }, /* @__PURE__ */ s.createElement(mE, { id: "sort-by", values: ES }))), ie = {
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
}, _S = () => {
  const [e, t] = N(
    {}
  ), [r, n] = N(!0), { values: a, submitForm: i, isSubmitting: o, isValid: l, setFieldValue: c } = bo(), u = R(async () => {
    try {
      const f = await lS(), h = {};
      for (const y of f) {
        const m = await cS(y);
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
}, $S = ({ progress: e }) => {
  const {
    configs: t,
    isLoading: r,
    submitForm: n,
    handleFileChange: a,
    handleFilesChange: i,
    values: o,
    isSubmitting: l,
    isValid: c
  } = _S();
  return r ? /* @__PURE__ */ s.createElement(Wi, null) : !t || Object.keys(t).length === 0 ? /* @__PURE__ */ s.createElement("p", null, "No record types available.") : /* @__PURE__ */ s.createElement(cr, null, /* @__PURE__ */ s.createElement(
    mo,
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
    Ws,
    {
      value: o.files || [],
      onChange: i,
      accept: "*",
      skipEmptyFiles: !0,
      maxTotalSize: 10 * 1024 * 1024 * 1024,
      maxFiles: 100
    }
  ), /* @__PURE__ */ s.createElement("p", { className: ke.helpText }, "Upload files related to the records. You can upload multiple files, and they will be associated with the import task.")), /* @__PURE__ */ s.createElement(
    go,
    {
      fieldPath: "task.description",
      label: "Notes",
      placeholder: "Enter a description for the import task",
      rows: 3
    }
  ), /* @__PURE__ */ s.createElement("div", { className: ke.buttonContainer }, e && /* @__PURE__ */ s.createElement(Yi, { progress: e }), /* @__PURE__ */ s.createElement(
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
var Jt;
try {
  Jt = Map;
} catch {
}
var er;
try {
  er = Set;
} catch {
}
function os(e, t, r) {
  if (!e || typeof e != "object" || typeof e == "function")
    return e;
  if (e.nodeType && "cloneNode" in e)
    return e.cloneNode(!0);
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof RegExp)
    return new RegExp(e);
  if (Array.isArray(e))
    return e.map(tr);
  if (Jt && e instanceof Jt)
    return new Map(Array.from(e.entries()));
  if (er && e instanceof er)
    return new Set(Array.from(e.values()));
  if (e instanceof Object) {
    t.push(e);
    var n = Object.create(e);
    r.push(n);
    for (var a in e) {
      var i = t.findIndex(function(o) {
        return o === e[a];
      });
      n[a] = i > -1 ? r[i] : os(e[a], t, r);
    }
    return n;
  }
  return e;
}
function tr(e) {
  return os(e, [], []);
}
const xS = Object.prototype.toString, CS = Error.prototype.toString, wS = RegExp.prototype.toString, TS = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", FS = /^Symbol\((.*)\)(.*)$/;
function IS(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Pn(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return IS(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return TS.call(e).replace(FS, "Symbol($1)");
  const n = xS.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + CS.call(e) + "]" : n === "RegExp" ? wS.call(e) : null;
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
}, AS = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, rr = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, OS = {
  isValue: "${path} field must be ${value}"
}, nr = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, RS = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: me,
  string: Z,
  number: AS,
  date: rr,
  object: nr,
  array: RS,
  boolean: OS
});
var kS = Object.prototype, PS = kS.hasOwnProperty;
function DS(e, t) {
  return e != null && PS.call(e, t);
}
var LS = DS, NS = LS, BS = Ea;
function US(e, t) {
  return e != null && BS(e, t, NS);
}
var zS = US;
const ut = /* @__PURE__ */ P(zS), ls = (e) => e && e.__isYupSchema__;
class MS {
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
    if (!ls(a))
      throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
function cs(e) {
  return e == null ? [] : [].concat(e);
}
function ar() {
  return ar = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ar.apply(this, arguments);
}
let jS = /\$\{\s*(\w+)\s*\}/g;
class j extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = ar({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(jS, (a, i) => ze(r[i])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], cs(t).forEach((i) => {
      j.isError(i) ? (this.errors.push(...i.errors), this.inner = this.inner.concat(i.inner.length ? i.inner : i)) : this.errors.push(i);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, j);
  }
}
const QS = (e) => {
  let t = !1;
  return (...r) => {
    t || (t = !0, e(...r));
  };
};
function ir(e, t) {
  let {
    endEarly: r,
    tests: n,
    args: a,
    value: i,
    errors: o,
    sort: l,
    path: c
  } = e, u = QS(t), d = n.length;
  const p = [];
  if (o = o || [], !d)
    return o.length ? u(new j(o, i, c)) : u(null, i);
  for (let f = 0; f < n.length; f++) {
    const h = n[f];
    h(a, function(m) {
      if (m) {
        if (!j.isError(m))
          return u(m, i);
        if (r)
          return m.value = i, u(m, i);
        p.push(m);
      }
      if (--d <= 0) {
        if (p.length && (l && p.sort(l), o.length && p.push(...o), o = p), o.length) {
          u(new j(o, i, c), i);
          return;
        }
        u(null, i);
      }
    });
  }
}
function qS(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), l = o.length; l--; ) {
      var c = o[e ? l : ++a];
      if (r(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var VS = qS, GS = VS, HS = GS(), YS = HS, WS = YS, KS = Ge;
function XS(e, t) {
  return e && WS(e, t, KS);
}
var us = XS, ZS = "__lodash_hash_undefined__";
function JS(e) {
  return this.__data__.set(e, ZS), this;
}
var e0 = JS;
function t0(e) {
  return this.__data__.has(e);
}
var r0 = t0, n0 = br, a0 = e0, i0 = r0;
function dt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new n0(); ++t < r; )
    this.add(e[t]);
}
dt.prototype.add = dt.prototype.push = a0;
dt.prototype.has = i0;
var s0 = dt;
function o0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var l0 = o0;
function c0(e, t) {
  return e.has(t);
}
var u0 = c0, d0 = s0, p0 = l0, f0 = u0, h0 = 1, m0 = 2;
function g0(e, t, r, n, a, i) {
  var o = r & h0, l = e.length, c = t.length;
  if (l != c && !(o && c > l))
    return !1;
  var u = i.get(e), d = i.get(t);
  if (u && d)
    return u == t && d == e;
  var p = -1, f = !0, h = r & m0 ? new d0() : void 0;
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
      if (!p0(t, function(g, S) {
        if (!f0(h, S) && (y === g || a(y, g, r, n, i)))
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
var ds = g0;
function y0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var b0 = y0;
function v0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var E0 = v0, Dn = Ce, Ln = Oa, S0 = Et, _0 = ds, $0 = b0, x0 = E0, C0 = 1, w0 = 2, T0 = "[object Boolean]", F0 = "[object Date]", I0 = "[object Error]", A0 = "[object Map]", O0 = "[object Number]", R0 = "[object RegExp]", k0 = "[object Set]", P0 = "[object String]", D0 = "[object Symbol]", L0 = "[object ArrayBuffer]", N0 = "[object DataView]", Nn = Dn ? Dn.prototype : void 0, Lt = Nn ? Nn.valueOf : void 0;
function B0(e, t, r, n, a, i, o) {
  switch (r) {
    case N0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case L0:
      return !(e.byteLength != t.byteLength || !i(new Ln(e), new Ln(t)));
    case T0:
    case F0:
    case O0:
      return S0(+e, +t);
    case I0:
      return e.name == t.name && e.message == t.message;
    case R0:
    case P0:
      return e == t + "";
    case A0:
      var l = $0;
    case k0:
      var c = n & C0;
      if (l || (l = x0), e.size != t.size && !c)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= w0, o.set(e, t);
      var d = _0(l(e), l(t), n, a, i, o);
      return o.delete(e), d;
    case D0:
      if (Lt)
        return Lt.call(e) == Lt.call(t);
  }
  return !1;
}
var U0 = B0, Bn = Aa, z0 = 1, M0 = Object.prototype, j0 = M0.hasOwnProperty;
function Q0(e, t, r, n, a, i) {
  var o = r & z0, l = Bn(e), c = l.length, u = Bn(t), d = u.length;
  if (c != d && !o)
    return !1;
  for (var p = c; p--; ) {
    var f = l[p];
    if (!(o ? f in t : j0.call(t, f)))
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
var q0 = Q0, Nt = Cr, V0 = ds, G0 = U0, H0 = q0, Un = je, zn = Q, Mn = bt, Y0 = mr, W0 = 1, jn = "[object Arguments]", Qn = "[object Array]", Je = "[object Object]", K0 = Object.prototype, qn = K0.hasOwnProperty;
function X0(e, t, r, n, a, i) {
  var o = zn(e), l = zn(t), c = o ? Qn : Un(e), u = l ? Qn : Un(t);
  c = c == jn ? Je : c, u = u == jn ? Je : u;
  var d = c == Je, p = u == Je, f = c == u;
  if (f && Mn(e)) {
    if (!Mn(t))
      return !1;
    o = !0, d = !1;
  }
  if (f && !d)
    return i || (i = new Nt()), o || Y0(e) ? V0(e, t, r, n, a, i) : G0(e, t, c, r, n, a, i);
  if (!(r & W0)) {
    var h = d && qn.call(e, "__wrapped__"), y = p && qn.call(t, "__wrapped__");
    if (h || y) {
      var m = h ? e.value() : e, E = y ? t.value() : t;
      return i || (i = new Nt()), a(m, E, r, n, i);
    }
  }
  return f ? (i || (i = new Nt()), H0(e, t, r, n, a, i)) : !1;
}
var Z0 = X0, J0 = Z0, Vn = ne;
function ps(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Vn(e) && !Vn(t) ? e !== e && t !== t : J0(e, t, r, n, ps, a);
}
var fs = ps, e_ = Cr, t_ = fs, r_ = 1, n_ = 2;
function a_(e, t, r, n) {
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
      var p = new e_();
      if (n)
        var f = n(u, d, c, e, t, p);
      if (!(f === void 0 ? t_(d, u, r_ | n_, n, p) : f))
        return !1;
    }
  }
  return !0;
}
var i_ = a_, s_ = se;
function o_(e) {
  return e === e && !s_(e);
}
var hs = o_, l_ = hs, c_ = Ge;
function u_(e) {
  for (var t = c_(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, l_(a)];
  }
  return t;
}
var d_ = u_;
function p_(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var ms = p_, f_ = i_, h_ = d_, m_ = ms;
function g_(e) {
  var t = h_(e);
  return t.length == 1 && t[0][2] ? m_(t[0][0], t[0][1]) : function(r) {
    return r === e || f_(r, e, t);
  };
}
var y_ = g_, b_ = fs, v_ = va, E_ = Sr, S_ = yr, __ = hs, $_ = ms, x_ = qe, C_ = 1, w_ = 2;
function T_(e, t) {
  return S_(e) && __(t) ? $_(x_(e), t) : function(r) {
    var n = v_(r, e);
    return n === void 0 && n === t ? E_(r, e) : b_(t, n, C_ | w_);
  };
}
var F_ = T_;
function I_(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var A_ = I_, O_ = Er;
function R_(e) {
  return function(t) {
    return O_(t, e);
  };
}
var k_ = R_, P_ = A_, D_ = k_, L_ = yr, N_ = qe;
function B_(e) {
  return L_(e) ? P_(N_(e)) : D_(e);
}
var U_ = B_, z_ = y_, M_ = F_, j_ = $r, Q_ = Q, q_ = U_;
function V_(e) {
  return typeof e == "function" ? e : e == null ? j_ : typeof e == "object" ? Q_(e) ? M_(e[0], e[1]) : z_(e) : q_(e);
}
var gs = V_, G_ = wt, H_ = us, Y_ = gs;
function W_(e, t) {
  var r = {};
  return t = Y_(t), H_(e, function(n, a, i) {
    G_(r, a, t(n, a, i));
  }), r;
}
var K_ = W_;
const ys = /* @__PURE__ */ P(K_);
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
var X_ = /[^.^\]^[]+|(?=\[\]|\.\.)/g, bs = /^\d+$/, Z_ = /^\d/, J_ = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, e$ = /^\s*(['"]?)(.*?)(\1)\s*$/, Ur = 512, Gn = new ye(Ur), Hn = new ye(Ur), Yn = new ye(Ur), It = {
  Cache: ye,
  split: sr,
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
      return t + (zr(r) || bs.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    t$(Array.isArray(e) ? e : sr(e), t, r);
  }
};
function Bt(e) {
  return Gn.get(e) || Gn.set(
    e,
    sr(e).map(function(t) {
      return t.replace(e$, "$2");
    })
  );
}
function sr(e) {
  return e.match(X_) || [""];
}
function t$(e, t, r) {
  var n = e.length, a, i, o, l;
  for (i = 0; i < n; i++)
    a = e[i], a && (a$(a) && (a = '"' + a + '"'), l = zr(a), o = !l && /^\d+$/.test(a), t.call(r, a, l, o, i, e));
}
function zr(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function r$(e) {
  return e.match(Z_) && !e.match(bs);
}
function n$(e) {
  return J_.test(e);
}
function a$(e) {
  return !zr(e) && (r$(e) || n$(e));
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
    this.path = this.key.slice(n.length), this.getter = this.path && It.getter(this.path, !0), this.map = r.map;
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
function i$(e, t) {
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
    } = r, d = i$(r, ["value", "path", "label", "options", "originalValue", "sync"]);
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
      const fe = ys(pt({
        value: a,
        originalValue: c,
        label: o,
        path: O.path || i
      }, h, O.params), g), We = new j(j.formatError(O.message || y, fe), a, fe.path, O.type || p);
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
          j.isError(O) ? n(O) : O ? n(null, O) : n(S());
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
    j.isError(B) ? n(B) : B ? n(null, B) : n(S());
  }
  return t.OPTIONS = e, t;
}
let s$ = (e) => e.substr(0, e.length - 1).substr(1);
function o$(e, t, r, n = r) {
  let a, i, o;
  return t ? (It.forEach(t, (l, c, u) => {
    let d = c ? s$(l) : l;
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
function V() {
  return V = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, V.apply(this, arguments);
}
class M {
  constructor(t) {
    this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new ft(), this._blacklist = new ft(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(me.notType);
    }), this.type = (t == null ? void 0 : t.type) || "mixed", this.spec = V({
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
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = V({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = tr(V({}, this.spec, t)), r;
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
    const a = V({}, r.spec, n.spec);
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
    let n = this.resolve(V({
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
    c || (d = this._cast(d, V({
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
    this._whitelistError && h.push(this._whitelistError), this._blacklistError && h.push(this._blacklistError), ir({
      args: p,
      value: d,
      path: i,
      sync: a,
      tests: f,
      endEarly: u
    }, (y) => {
      if (y)
        return void n(y, d);
      ir({
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
    let a = this.resolve(V({}, r, {
      value: t
    }));
    return typeof n == "function" ? a._validate(t, r, n) : new Promise((i, o) => a._validate(t, r, (l, c) => {
      l ? o(l) : i(c);
    }));
  }
  validateSync(t, r) {
    let n = this.resolve(V({}, r, {
      value: t
    })), a;
    return n._validate(t, V({}, r, {
      sync: !0
    }), (i, o) => {
      if (i)
        throw i;
      a = o;
    }), a;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (j.isError(n))
        return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (j.isError(n))
        return !1;
      throw n;
    }
  }
  _getDefault() {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this) : tr(t);
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
    let n = this.clone(), a = cs(t).map((i) => new ue(i));
    return a.forEach((i) => {
      i.isSibling && n.deps.push(i.key);
    }), n.conditions.push(new MS(a, r)), n;
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
    } = o$(this, t, r, n.context);
    return o[e](a && a[i], V({}, n, {
      parent: a,
      path: t
    }));
  };
for (const e of ["equals", "is"])
  M.prototype[e] = M.prototype.oneOf;
for (const e of ["not", "nope"])
  M.prototype[e] = M.prototype.notOneOf;
M.prototype.optional = M.prototype.notRequired;
const l$ = M;
l$.prototype;
const J = (e) => e == null;
let c$ = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, u$ = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, d$ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, p$ = (e) => J(e) || e === e.trim(), f$ = {}.toString();
function Ne() {
  return new vs();
}
class vs extends M {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === f$ ? t : r;
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
    return this.matches(c$, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = Z.url) {
    return this.matches(u$, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = Z.uuid) {
    return this.matches(d$, {
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
      test: p$
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
Ne.prototype = vs.prototype;
var h$ = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function m$(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, a;
  if (a = h$.exec(e)) {
    for (var i = 0, o; o = t[i]; ++i)
      a[o] = +a[o] || 0;
    a[2] = (+a[2] || 1) - 1, a[3] = +a[3] || 1, a[7] = a[7] ? String(a[7]).substr(0, 3) : 0, (a[8] === void 0 || a[8] === "") && (a[9] === void 0 || a[9] === "") ? n = +new Date(a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : (a[8] !== "Z" && a[9] !== void 0 && (r = a[10] * 60 + a[11], a[9] === "+" && (r = 0 - r)), n = Date.UTC(a[1], a[2], a[3], a[4], a[5] + r, a[6], a[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let Es = /* @__PURE__ */ new Date(""), g$ = (e) => Object.prototype.toString.call(e) === "[object Date]";
class Ss extends M {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = m$(t), isNaN(t) ? Es : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return g$(t) && !isNaN(t.getTime());
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
  min(t, r = rr.min) {
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
  max(t, r = rr.max) {
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
Ss.INVALID_DATE = Es;
Ss.prototype;
function y$(e, t, r, n) {
  var a = -1, i = e == null ? 0 : e.length;
  for (n && i && (r = e[++a]); ++a < i; )
    r = t(r, e[a], a, e);
  return r;
}
var b$ = y$;
function v$(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var E$ = v$, S$ = E$, _$ = {
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
}, $$ = S$(_$), x$ = $$, C$ = x$, w$ = Qe, T$ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, F$ = "\\u0300-\\u036f", I$ = "\\ufe20-\\ufe2f", A$ = "\\u20d0-\\u20ff", O$ = F$ + I$ + A$, R$ = "[" + O$ + "]", k$ = RegExp(R$, "g");
function P$(e) {
  return e = w$(e), e && e.replace(T$, C$).replace(k$, "");
}
var D$ = P$, L$ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function N$(e) {
  return e.match(L$) || [];
}
var B$ = N$, U$ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function z$(e) {
  return U$.test(e);
}
var M$ = z$, _s = "\\ud800-\\udfff", j$ = "\\u0300-\\u036f", Q$ = "\\ufe20-\\ufe2f", q$ = "\\u20d0-\\u20ff", V$ = j$ + Q$ + q$, $s = "\\u2700-\\u27bf", xs = "a-z\\xdf-\\xf6\\xf8-\\xff", G$ = "\\xac\\xb1\\xd7\\xf7", H$ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Y$ = "\\u2000-\\u206f", W$ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Cs = "A-Z\\xc0-\\xd6\\xd8-\\xde", K$ = "\\ufe0e\\ufe0f", ws = G$ + H$ + Y$ + W$, Ts = "['’]", Wn = "[" + ws + "]", X$ = "[" + V$ + "]", Fs = "\\d+", Z$ = "[" + $s + "]", Is = "[" + xs + "]", As = "[^" + _s + ws + Fs + $s + xs + Cs + "]", J$ = "\\ud83c[\\udffb-\\udfff]", e1 = "(?:" + X$ + "|" + J$ + ")", t1 = "[^" + _s + "]", Os = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rs = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ee = "[" + Cs + "]", r1 = "\\u200d", Kn = "(?:" + Is + "|" + As + ")", n1 = "(?:" + Ee + "|" + As + ")", Xn = "(?:" + Ts + "(?:d|ll|m|re|s|t|ve))?", Zn = "(?:" + Ts + "(?:D|LL|M|RE|S|T|VE))?", ks = e1 + "?", Ps = "[" + K$ + "]?", a1 = "(?:" + r1 + "(?:" + [t1, Os, Rs].join("|") + ")" + Ps + ks + ")*", i1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", s1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", o1 = Ps + ks + a1, l1 = "(?:" + [Z$, Os, Rs].join("|") + ")" + o1, c1 = RegExp([
  Ee + "?" + Is + "+" + Xn + "(?=" + [Wn, Ee, "$"].join("|") + ")",
  n1 + "+" + Zn + "(?=" + [Wn, Ee + Kn, "$"].join("|") + ")",
  Ee + "?" + Kn + "+" + Xn,
  Ee + "+" + Zn,
  s1,
  i1,
  Fs,
  l1
].join("|"), "g");
function u1(e) {
  return e.match(c1) || [];
}
var d1 = u1, p1 = B$, f1 = M$, h1 = Qe, m1 = d1;
function g1(e, t, r) {
  return e = h1(e), t = r ? void 0 : t, t === void 0 ? f1(e) ? m1(e) : p1(e) : e.match(t) || [];
}
var y1 = g1, b1 = b$, v1 = D$, E1 = y1, S1 = "['’]", _1 = RegExp(S1, "g");
function $1(e) {
  return function(t) {
    return b1(E1(v1(t).replace(_1, "")), e, "");
  };
}
var Ds = $1, x1 = Ds, C1 = x1(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), w1 = C1;
const Jn = /* @__PURE__ */ P(w1);
function T1(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + t];
  return i;
}
var F1 = T1, I1 = F1;
function A1(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : I1(e, t, r);
}
var O1 = A1, R1 = "\\ud800-\\udfff", k1 = "\\u0300-\\u036f", P1 = "\\ufe20-\\ufe2f", D1 = "\\u20d0-\\u20ff", L1 = k1 + P1 + D1, N1 = "\\ufe0e\\ufe0f", B1 = "\\u200d", U1 = RegExp("[" + B1 + R1 + L1 + N1 + "]");
function z1(e) {
  return U1.test(e);
}
var Ls = z1;
function M1(e) {
  return e.split("");
}
var j1 = M1, Ns = "\\ud800-\\udfff", Q1 = "\\u0300-\\u036f", q1 = "\\ufe20-\\ufe2f", V1 = "\\u20d0-\\u20ff", G1 = Q1 + q1 + V1, H1 = "\\ufe0e\\ufe0f", Y1 = "[" + Ns + "]", or = "[" + G1 + "]", lr = "\\ud83c[\\udffb-\\udfff]", W1 = "(?:" + or + "|" + lr + ")", Bs = "[^" + Ns + "]", Us = "(?:\\ud83c[\\udde6-\\uddff]){2}", zs = "[\\ud800-\\udbff][\\udc00-\\udfff]", K1 = "\\u200d", Ms = W1 + "?", js = "[" + H1 + "]?", X1 = "(?:" + K1 + "(?:" + [Bs, Us, zs].join("|") + ")" + js + Ms + ")*", Z1 = js + Ms + X1, J1 = "(?:" + [Bs + or + "?", or, Us, zs, Y1].join("|") + ")", ex = RegExp(lr + "(?=" + lr + ")|" + J1 + Z1, "g");
function tx(e) {
  return e.match(ex) || [];
}
var rx = tx, nx = j1, ax = Ls, ix = rx;
function sx(e) {
  return ax(e) ? ix(e) : nx(e);
}
var ox = sx, lx = O1, cx = Ls, ux = ox, dx = Qe;
function px(e) {
  return function(t) {
    t = dx(t);
    var r = cx(t) ? ux(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? lx(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var fx = px, hx = fx, mx = hx("toUpperCase"), gx = mx, yx = Qe, bx = gx;
function vx(e) {
  return bx(yx(e).toLowerCase());
}
var Ex = vx, Sx = Ex, _x = Ds, $x = _x(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? Sx(t) : t);
}), xx = $x;
const Cx = /* @__PURE__ */ P(xx);
var wx = wt, Tx = us, Fx = gs;
function Ix(e, t) {
  var r = {};
  return t = Fx(t), Tx(e, function(n, a, i) {
    wx(r, t(n, a, i), n);
  }), r;
}
var Ax = Ix;
const Ox = /* @__PURE__ */ P(Ax);
var Mr = { exports: {} };
Mr.exports = function(e) {
  return Qs(Rx(e), e);
};
Mr.exports.array = Qs;
function Qs(e, t) {
  var r = e.length, n = new Array(r), a = {}, i = r, o = kx(t), l = Px(e);
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
function Rx(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.add(a[0]), t.add(a[1]);
  }
  return Array.from(t);
}
function kx(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.has(a[0]) || t.set(a[0], /* @__PURE__ */ new Set()), t.has(a[1]) || t.set(a[1], /* @__PURE__ */ new Set()), t.get(a[0]).add(a[1]);
  }
  return t;
}
function Px(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var Dx = Mr.exports;
const Lx = /* @__PURE__ */ P(Dx);
function Nx(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([o, l]) => `${o}-${l}`));
  function i(o, l) {
    let c = It.split(o)[0];
    n.add(c), a.has(`${l}-${c}`) || r.push([l, c]);
  }
  for (const o in e)
    if (ut(e, o)) {
      let l = e[o];
      n.add(o), ue.isRef(l) && l.isSibling ? i(l.path, o) : ls(l) && "deps" in l && l.deps.forEach((c) => i(c, o));
    }
  return Lx.array(Array.from(n), r).reverse();
}
function ea(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var i;
    if (((i = t.path) == null ? void 0 : i.indexOf(n)) !== -1)
      return r = a, !0;
  }), r;
}
function qs(e) {
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
function Bx(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const Ux = qs([]);
class Vs extends M {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Ux, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
        if (!j.isError(d) || c)
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
      ir({
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
    return n.fields = a, n._sortErrors = qs(Object.keys(a)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = Nx(a, n._excludedEdges), n;
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
    let a = It.getter(t, !0);
    return this.transform((i) => {
      if (i == null)
        return i;
      let o = i;
      return ut(i, t) && (o = Se({}, i), n || delete o[t], o[r] = a(i)), o;
    });
  }
  noUnknown(t = !0, r = nr.noUnknown) {
    typeof t == "string" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(a) {
        if (a == null)
          return !0;
        const i = Bx(this.schema, a);
        return !t || i.length === 0 || this.createError({
          params: {
            unknown: i.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = nr.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => r && Ox(r, (n, a) => t(a)));
  }
  camelCase() {
    return this.transformKeys(Cx);
  }
  snakeCase() {
    return this.transformKeys(Jn);
  }
  constantCase() {
    return this.transformKeys((t) => Jn(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = ys(this.fields, (r) => r.describe()), t;
  }
}
function at(e) {
  return new Vs(e);
}
at.prototype = Vs.prototype;
const zx = {
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
}, Mx = at({
  task: at({
    title: Ne().required("Title is required"),
    recordType: Ne().required("Record type is required"),
    serializer: Ne().required("Serializer is required"),
    mode: Ne().required("Mode is required")
  }),
  metadata: at().nullable()
}), jx = ({ onSubmit: e }) => {
  const [t, r] = N(void 0), n = async (a) => {
    try {
      await pS(a.task, a.metadata, a.files, {
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
    yo,
    {
      formik: {
        initialValues: zx,
        validationSchema: Mx,
        onSubmit: n
      }
    },
    /* @__PURE__ */ s.createElement($S, { progress: t })
  );
}, Qx = () => {
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
    /* @__PURE__ */ s.createElement(io, null, "New Import Task"),
    /* @__PURE__ */ s.createElement(so, null, /* @__PURE__ */ s.createElement(jx, { onSubmit: n }))
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
}, qx = ({
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
    t && /* @__PURE__ */ s.createElement("div", { className: Ut.facets }, /* @__PURE__ */ s.createElement(Qx, null))
  ));
}, Vx = [
  { key: "pending", label: "Pending", value: "pending" },
  { key: "success", label: "Success", value: "success" },
  { key: "failed", label: "Failed", value: "failed" }
], zt = {
  STATUS: "status"
}, Gx = ({
  currentQueryState: e,
  updateQueryState: t
}) => {
  const r = na(
    () => {
      var a;
      return ((a = e.filters) == null ? void 0 : a.filter((i) => i[0] === zt.STATUS).map((i) => i[1])) || [];
    },
    [e.filters]
  ), n = R(
    (a, i) => {
      var u;
      const o = ((u = e.filters) == null ? void 0 : u.filter(
        (d) => d[0] !== zt.STATUS
      )) || [], l = new Set(r);
      i ? l.add(a) : l.delete(a);
      const c = Array.from(l).map(
        (d) => [zt.STATUS, d]
      );
      t({
        ...e,
        filters: [...o, ...c],
        page: 1
      });
    },
    [e, t, r]
  );
  return { currentStatusFilters: r, handleStatusChange: n };
}, Mt = {
  container: b({
    minInlineSize: "14rem",
    paddingInlineEnd: "1rem",
    paddingBlock: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    flex: 0,
    marginBlockStart: "7rem"
  }),
  header: b({
    fontSize: "1.1rem !important"
  }),
  checkboxContainer: b({
    wordBreak: "break-all",
    marginInlineStart: "1rem",
    "&:not(:last-child)": {
      marginBlockEnd: "0.5rem"
    }
  })
}, Hx = (e) => {
  const { config: t } = Ye(), { currentStatusFilters: r, handleStatusChange: n } = Gx(e);
  return t.showFacets ? /* @__PURE__ */ s.createElement("aside", { className: Mt.container }, /* @__PURE__ */ s.createElement(de, { as: "h2", className: Mt.header }, "Task Status"), Vx.map(({ key: a, label: i, value: o }) => o ? /* @__PURE__ */ s.createElement("div", { key: a, className: Mt.checkboxContainer }, /* @__PURE__ */ s.createElement(
    ur,
    {
      label: i,
      checked: r.includes(o),
      onChange: (l, c) => n(o, c.checked ?? !1)
    }
  )) : null)) : null;
}, ra = Dr(Hx), Yx = () => {
  const { config: e } = Ye();
  return /* @__PURE__ */ s.createElement(Y, null, /* @__PURE__ */ s.createElement(Y.Row, { verticalAlign: "middle" }, /* @__PURE__ */ s.createElement(Y.Column, { width: 14, textAlign: "center" }, /* @__PURE__ */ s.createElement(Kv, { options: { size: "mini" } })), /* @__PURE__ */ s.createElement(Y.Column, { width: 2, textAlign: "right" }, /* @__PURE__ */ s.createElement(
    oE,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ s.createElement("p", null, t, " results per page")
    }
  ))));
}, Gs = ({
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
  }, n = new Ua(r.searchApi), a = {
    [`${r.appId}.ResultsList.item`]: mS,
    [`${r.appId}.ResultsList.container`]: gS,
    [`${r.appId}.SearchFacets`]: ra,
    ...t
  };
  return /* @__PURE__ */ s.createElement(eo.Provider, { value: a }, /* @__PURE__ */ s.createElement(
    Tv,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ s.createElement(SE, { config: r }, /* @__PURE__ */ s.createElement("div", { className: kn.searchLayout }, /* @__PURE__ */ s.createElement(ra, null), /* @__PURE__ */ s.createElement("div", { className: kn.searchContent }, /* @__PURE__ */ s.createElement(qx, { appId: r.appId }), /* @__PURE__ */ s.createElement(SS, null), /* @__PURE__ */ s.createElement(nE, null, /* @__PURE__ */ s.createElement(qv, null), /* @__PURE__ */ s.createElement(Si, null)), r.showSearchFooter && /* @__PURE__ */ s.createElement(Yx, null))))
  ));
}, Wx = (e) => na(() => {
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
}, [e]), jt = {
  statistic: b({
    marginBlock: "1rem"
  }),
  progressLabel: b({
    marginBlockEnd: "0.5rem"
  }),
  progress: b({
    marginBlockEnd: "0.5rem"
  })
}, Kx = ({
  totalRecords: e = 0,
  validatedRecords: t = 0,
  errorRecords: r = 0,
  successRecords: n = 0,
  showWhenEmpty: a = !1,
  className: i = "",
  style: o = {}
}) => {
  const l = Wx({
    totalRecords: e,
    validatedRecords: t,
    errorRecords: r,
    successRecords: n
  });
  return e === 0 && !a ? null : /* @__PURE__ */ s.createElement(K, { basic: !0, className: i, style: o }, /* @__PURE__ */ s.createElement(Y, { columns: 3, stackable: !0 }, l.map((c) => /* @__PURE__ */ s.createElement(Y.Column, { key: c.title }, /* @__PURE__ */ s.createElement(D, { fluid: !0 }, /* @__PURE__ */ s.createElement(D.Content, null, /* @__PURE__ */ s.createElement(D.Header, { textAlign: "center" }, c.title), /* @__PURE__ */ s.createElement(D.Description, { textAlign: "center" }, /* @__PURE__ */ s.createElement(
    Rt,
    {
      size: "large",
      color: c.color,
      className: jt.statistic
    },
    /* @__PURE__ */ s.createElement(Rt.Value, null, c.value),
    /* @__PURE__ */ s.createElement(Rt.Label, null, c.label)
  ), /* @__PURE__ */ s.createElement(K, { basic: !0, textAlign: "center" }, /* @__PURE__ */ s.createElement(
    K.Inline,
    {
      basic: !0,
      size: "small",
      className: jt.progressLabel
    },
    c.progressLabel
  ), /* @__PURE__ */ s.createElement(
    oo,
    {
      percent: c.progress,
      color: c.color,
      size: "small",
      className: jt.progress
    }
  )))))))));
}, Xx = {
  container: b({
    paddingBlockStart: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  })
}, Hs = Zs(
  void 0
), Zx = ({
  taskId: e,
  children: t
}) => /* @__PURE__ */ s.createElement(Hs.Provider, { value: { taskId: e } }, /* @__PURE__ */ s.createElement("div", { className: Xx.container }, t)), Ys = () => {
  const e = I(Hs);
  if (!e)
    throw new Error("useTaskDetails must be used within a TaskDetailsProvider");
  return e;
}, Qt = {
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
}, Jx = ({ children: e }) => /* @__PURE__ */ s.createElement(T, { padded: !0, size: "small", compact: !0 }, /* @__PURE__ */ s.createElement(sa, null, /* @__PURE__ */ s.createElement(ht, null, /* @__PURE__ */ s.createElement(H, null, "ID"), /* @__PURE__ */ s.createElement(H, null, "Title"), /* @__PURE__ */ s.createElement(H, null, "Status"), /* @__PURE__ */ s.createElement(H, null))), /* @__PURE__ */ s.createElement(oa, null, e)), eC = {
  headerContainer: b({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  })
}, tC = ({ record: e }) => /* @__PURE__ */ s.createElement(K, { basic: !0 }, /* @__PURE__ */ s.createElement($, null, /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "tag" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Record ID"), /* @__PURE__ */ s.createElement($.Description, null, e.id))), /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "calendar" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Created"), /* @__PURE__ */ s.createElement($.Description, null, Zt(e.created)))), /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "edit" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Updated"), /* @__PURE__ */ s.createElement($.Description, null, Zt(e.updated)))), e.generated_record_id && /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "file alternate" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Generated Record ID"), /* @__PURE__ */ s.createElement($.Description, null, /* @__PURE__ */ s.createElement(
  "a",
  {
    href: `/records/${e.generated_record_id}`,
    target: "_blank",
    rel: "noopener noreferrer"
  },
  "/",
  e.generated_record_id
)))))), rC = ({ record: e }) => /* @__PURE__ */ s.createElement(K, { basic: !0 }, e.errors.map((t, r) => /* @__PURE__ */ s.createElement(U, { key: `error-${r}-${t.type}`, negative: !0 }, /* @__PURE__ */ s.createElement(U.Header, null, t.type), /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Location:"), " ", t.loc), /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Message:"), " ", t.msg)))), nC = {
  pathCell: b({
    wordBreak: "break-all"
  })
}, aC = ({ record: e }) => {
  var r, n;
  return (((r = e.record_files) == null ? void 0 : r.length) ?? 0) > 0 || (((n = e.validated_record_files) == null ? void 0 : n.length) ?? 0) > 0 ? /* @__PURE__ */ s.createElement(K, { basic: !0 }, e.record_files && e.record_files.length > 0 && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(de, { as: "h4" }, /* @__PURE__ */ s.createElement(_, { name: "file" }), "File List"), /* @__PURE__ */ s.createElement($, { bulleted: !0 }, e.record_files.map((a) => /* @__PURE__ */ s.createElement($.Item, { key: `file-${a}` }, /* @__PURE__ */ s.createElement($.Content, null, a))))), e.validated_record_files && e.validated_record_files.length > 0 && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(de, { as: "h4" }, /* @__PURE__ */ s.createElement(_, { name: "checkmark" }), "Validated Files"), /* @__PURE__ */ s.createElement(T, { celled: !0 }, /* @__PURE__ */ s.createElement(T.Header, null, /* @__PURE__ */ s.createElement(T.Row, null, /* @__PURE__ */ s.createElement(T.HeaderCell, null, "File"), /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Size"), /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Origin"), /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Path"))), /* @__PURE__ */ s.createElement(T.Body, null, e.validated_record_files.map((a, i) => /* @__PURE__ */ s.createElement(T.Row, { key: `validated-${a.key}-${i}` }, /* @__PURE__ */ s.createElement(T.Cell, null, /* @__PURE__ */ s.createElement(_, { name: "file" }), a.key), /* @__PURE__ */ s.createElement(T.Cell, null, (a.size / 1024).toFixed(2), " KB"), /* @__PURE__ */ s.createElement(T.Cell, null, a.origin), /* @__PURE__ */ s.createElement(T.Cell, { className: nC.pathCell }, a.full_path))))))) : /* @__PURE__ */ s.createElement(U, { info: !0 }, /* @__PURE__ */ s.createElement(U.Header, null, "No Files"), /* @__PURE__ */ s.createElement("p", null, "No files are associated with this record."));
}, iC = {
  valueCell: b({
    wordBreak: "break-word"
  })
}, sC = ({ record: e }) => /* @__PURE__ */ s.createElement(T, { celled: !0, striped: !0 }, /* @__PURE__ */ s.createElement(T.Header, null, /* @__PURE__ */ s.createElement(T.Row, null, /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Field"), /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Value"))), /* @__PURE__ */ s.createElement(T.Body, null, Object.entries(e.src_data).filter(([t, r]) => r && r.trim() !== "").map(([t, r]) => /* @__PURE__ */ s.createElement(T.Row, { key: t }, /* @__PURE__ */ s.createElement(T.Cell, null, /* @__PURE__ */ s.createElement("strong", null, t)), /* @__PURE__ */ s.createElement(T.Cell, { className: iC.valueCell }, r))))), oC = ({
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
      render: () => /* @__PURE__ */ s.createElement(Oe.Pane, null, /* @__PURE__ */ s.createElement(tC, { record: e }))
    },
    {
      menuItem: { key: "source", icon: "database", content: "Source Data" },
      render: () => /* @__PURE__ */ s.createElement(Oe.Pane, null, /* @__PURE__ */ s.createElement(sC, { record: e }))
    },
    ...e.errors && e.errors.length > 0 ? [
      {
        menuItem: {
          key: "errors",
          icon: "exclamation triangle",
          content: `Errors (${e.errors.length})`
        },
        render: () => /* @__PURE__ */ s.createElement(Oe.Pane, null, /* @__PURE__ */ s.createElement(rC, { record: e }))
      }
    ] : [],
    {
      menuItem: { key: "files", icon: "file", content: "Files" },
      render: () => /* @__PURE__ */ s.createElement(Oe.Pane, null, /* @__PURE__ */ s.createElement(aC, { record: e }))
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
    /* @__PURE__ */ s.createElement(le.Header, null, /* @__PURE__ */ s.createElement("div", { className: eC.headerContainer }, /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(_, { name: "file alternate outline" }), c()), /* @__PURE__ */ s.createElement(ZE, { status: e.status }))),
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
}, lC = ({
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
  }, u = e.errors && e.errors.length > 0, d = aS(e.status), p = () => u ? 2 : -1, f = (m) => m === "red" ? "times" : m === "green" || m === "blue" ? "check" : "question", h = [
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
          await hS(e.id), console.log(`Record ${e.id} is being processed.`);
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
  return /* @__PURE__ */ s.createElement(ht, { key: t }, /* @__PURE__ */ s.createElement(G, null, /* @__PURE__ */ s.createElement("div", { className: Pe.idContainer }, /* @__PURE__ */ s.createElement("code", { className: Pe.codeElement }, e.id.length > 20 ? `${e.id.substring(0, 20)}…` : e.id), /* @__PURE__ */ s.createElement(
    jr,
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
  ))), /* @__PURE__ */ s.createElement(G, null, /* @__PURE__ */ s.createElement("div", { className: Pe.titleContainer }, ((y = e.src_data) == null ? void 0 : y.title) || /* @__PURE__ */ s.createElement("em", { className: Pe.noTitle }, "No Title Available"))), /* @__PURE__ */ s.createElement(G, null, /* @__PURE__ */ s.createElement(W, { color: d, size: "small" }, /* @__PURE__ */ s.createElement(_, { name: f(d) }), Be(e.status)), u && /* @__PURE__ */ s.createElement(
    jr,
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
  )), /* @__PURE__ */ s.createElement(G, { textAlign: "right" }, /* @__PURE__ */ s.createElement(
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
    oC,
    {
      record: e,
      open: a,
      onClose: () => i(!1),
      initialTab: o
    }
  )));
}, cC = () => {
  const { taskId: e } = Ys(), t = {
    "search.SearchBarRow": () => null,
    "search.ResultsList.container": Jx,
    "search.ResultsList.item": lC
  };
  return /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(de, { as: "h3" }, "Task Records"), /* @__PURE__ */ s.createElement(
    Gs,
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
        showFacets: !1,
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
}, uC = ({
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
}) => /* @__PURE__ */ s.createElement(cr, null, /* @__PURE__ */ s.createElement(
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
    className: eS("file-drop-zone", oe.dropZone, {
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
  ), /* @__PURE__ */ s.createElement("div", { className: oe.textContainer }, /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Drop files here or click to select")), /* @__PURE__ */ s.createElement("p", { className: oe.smallText }, "Max files: ", r, " | Max total: ", Br(n)), o.length > 0 && /* @__PURE__ */ s.createElement("p", { className: oe.selectedFilesText }, /* @__PURE__ */ s.createElement("strong", null, o.length, " files selected •", " ", Ji(o), " total"))))
)), dC = ({
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
        if (p && Zi([
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
}, pC = ({
  uploadFiles: e,
  isUploading: t,
  handleRemoveFile: r,
  handleClearFiles: n
}) => /* @__PURE__ */ s.createElement(K, null, /* @__PURE__ */ s.createElement("div", { className: De.headerContainer }, /* @__PURE__ */ s.createElement("strong", null, "Selected Files (", e.length, ") •", " ", Ji(e)), /* @__PURE__ */ s.createElement(
  z,
  {
    size: "mini",
    basic: !0,
    icon: "trash",
    content: "Clear All",
    onClick: n,
    disabled: t
  }
)), /* @__PURE__ */ s.createElement($, { divided: !0 }, e.map((a) => /* @__PURE__ */ s.createElement($.Item, { key: a.id }, /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement("div", { className: De.listItemContainer }, /* @__PURE__ */ s.createElement("div", { className: De.fileContentContainer }, /* @__PURE__ */ s.createElement("div", { className: De.fileInfoContainer }, /* @__PURE__ */ s.createElement(_, { name: "file" }), /* @__PURE__ */ s.createElement("span", null, a.file.name), /* @__PURE__ */ s.createElement(W, { size: "mini", basic: !0 }, Br(a.file.size))), a.error && /* @__PURE__ */ s.createElement(
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
))))))), Ws = ({
  onChange: e,
  accept: t = ".csv,.json,.xlsx,.txt",
  maxFiles: r = 5,
  maxTotalSize: n = 50 * 1024 * 1024,
  // 50MB
  skipEmptyFiles: a = !0,
  disabled: i = !1,
  error: o
}) => {
  const l = Js(null), [c, u] = s.useState(!1), [d, p] = s.useState(
    null
  ), { uploadFiles: f, isUploading: h, addFiles: y, removeFile: m, clearFiles: E } = dC({
    onUploadComplete: (F) => {
      e(F);
    },
    onUploadError: (F) => {
      console.error("Upload error:", F), p(F);
    }
  }), g = R(
    (F) => {
      if (!F || F.length === 0)
        return;
      p(null);
      const At = Array.from(F), be = y(
        At,
        t,
        r,
        n,
        a
      );
      if (be.length > 0) {
        const Ks = [...f, ...be].map((Xs) => Xs.file);
        e(Ks);
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
    (F) => {
      g(F.target.files), l.current && (l.current.value = "");
    },
    [g]
  ), A = R(
    (F) => {
      F.preventDefault(), i || u(!0);
    },
    [i]
  ), B = R((F) => {
    F.preventDefault(), u(!1);
  }, []), te = R(
    (F) => {
      F.preventDefault(), u(!1), !i && g(F.dataTransfer.files);
    },
    [i, g]
  ), O = R(() => {
    var F;
    i || (F = l.current) == null || F.click();
  }, [i]), fe = R(
    (F) => {
      m(F), p(null);
      const At = f.filter((be) => be.id !== F).map((be) => be.file);
      e(At);
    },
    [m, f, e]
  ), We = R(() => {
    E(), p(null), e([]);
  }, [E, e]);
  return /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(
    uC,
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
    pC,
    {
      uploadFiles: f,
      isUploading: h,
      handleRemoveFile: fe,
      handleClearFiles: We
    }
  ));
}, qt = {
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
}, fC = () => {
  const { taskId: e } = Ys(), [t, r] = N(null), [n, a] = N([]), [i, o] = N(!1), [l, c] = N(null), u = (h) => {
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
        await fS(
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
        ), t && await as(e, {
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
    ), t && /* @__PURE__ */ s.createElement("div", { className: qt.selectedFileInfo }, "Selected: ", t.name)), /* @__PURE__ */ s.createElement(_e.Field, null, /* @__PURE__ */ s.createElement("div", { className: qt.fieldLabel }, "Additional Files (Optional)"), /* @__PURE__ */ s.createElement(
      Ws,
      {
        value: n,
        onChange: d,
        accept: "*",
        maxTotalSize: 10 * 1024 * 1024 * 1024,
        maxFiles: 100
      }
    )))),
    /* @__PURE__ */ s.createElement(le.Actions, null, /* @__PURE__ */ s.createElement("div", { className: qt.actionsContainer }, l && /* @__PURE__ */ s.createElement(Yi, { progress: l }), /* @__PURE__ */ s.createElement(z, { onClick: p, color: "grey", disabled: !!l }, /* @__PURE__ */ s.createElement(_, { name: "cancel" }), "Cancel"), /* @__PURE__ */ s.createElement(
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
}, hC = ({ taskId: e }) => {
  var f, h, y, m, E, g;
  const [t, r] = N(null), { getStatus: n, isGettingStatus: a, runBulkImport: i, isBulkImporting: o, error: l } = ss(e, { onStatusChangeSuccess: r });
  if (Me(() => {
    n();
  }, [n]), a || o)
    return /* @__PURE__ */ s.createElement(Wi, null);
  if (!t)
    return /* @__PURE__ */ s.createElement(U, { warning: !0, icon: !0 }, /* @__PURE__ */ s.createElement(_, { name: "search" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Task Not Found"), "The requested task could not be found."));
  const c = ((f = t.records_status) == null ? void 0 : f.total_records) || 0, u = ((h = t.records_status) == null ? void 0 : h.validated) || 0, d = ((y = t.records_status) == null ? void 0 : y.success) || 0, p = (((m = t.records_status) == null ? void 0 : m["import failed"]) || 0) + (((E = t.records_status) == null ? void 0 : E["validation failed"]) || 0) + (((g = t.records_status) == null ? void 0 : g["serializer validation failed"]) || 0);
  return /* @__PURE__ */ s.createElement(Zx, { taskId: e }, /* @__PURE__ */ s.createElement(lo, { fluid: !0, verticalAlign: "top" }, l && /* @__PURE__ */ s.createElement(U, { negative: !0, icon: !0 }, /* @__PURE__ */ s.createElement(_, { name: "exclamation triangle" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Error"), (l == null ? void 0 : l.message) || "An unknown error occurred")), /* @__PURE__ */ s.createElement(Y, null, /* @__PURE__ */ s.createElement(Y.Row, { verticalAlign: "top" }, /* @__PURE__ */ s.createElement(Y.Column, { width: 8, verticalAlign: "middle" }, /* @__PURE__ */ s.createElement("div", { className: Qt.headerContainer }, /* @__PURE__ */ s.createElement(_, { name: "tasks", circular: !0, size: "big" }), /* @__PURE__ */ s.createElement("div", { className: Qt.headerContent }, /* @__PURE__ */ s.createElement(de, { as: "h2" }, /* @__PURE__ */ s.createElement(de.Content, null, t.title)), t.status && /* @__PURE__ */ s.createElement(Ki, { size: "large", status: t.status }, Be(t.status))))), /* @__PURE__ */ s.createElement(Y.Column, { width: 8, textAlign: "right" }, /* @__PURE__ */ s.createElement("div", { className: Qt.actionsContainer }, /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(
    z,
    {
      size: "tiny",
      color: "blue",
      icon: "refresh",
      content: "Refresh",
      onClick: () => n(),
      loading: a
    }
  ), /* @__PURE__ */ s.createElement(fC, null), /* @__PURE__ */ s.createElement(
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
  ))))), t.description && /* @__PURE__ */ s.createElement(Y.Row, null, /* @__PURE__ */ s.createElement(Y.Column, { width: 16 }, /* @__PURE__ */ s.createElement(U, { info: !0, icon: !0, size: "small" }, /* @__PURE__ */ s.createElement(_, { name: "info circle" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Notes"), t.description))))), c > 0 && /* @__PURE__ */ s.createElement(K, { basic: !0 }, /* @__PURE__ */ s.createElement(
    Kx,
    {
      totalRecords: c,
      validatedRecords: u,
      errorRecords: p,
      successRecords: d
    }
  ))), /* @__PURE__ */ s.createElement(cC, null));
}, IC = {
  Search: Gs,
  TaskDetails: hC
}, AC = {
  CREATED: "created",
  VALIDATING: "validating",
  SERIALIZER_VALIDATION_FAILED: "serializer validation failed",
  VALIDATION_FAILED: "validation failed",
  VALIDATED: "validated",
  IMPORT_FAILED: "import failed",
  IMPORTED: "success"
}, OC = {
  CREATED: "created",
  VALIDATING: "validating",
  VALIDATION_FAILED: "validated with failures",
  VALIDATED: "validated",
  IMPORTING: "importing",
  IMPORT_FAILED: "imported with failures",
  SUCCESS: "success",
  DAMAGED: "damaged"
}, RC = {
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
  IC as BulkImporter,
  Ws as FileUploader,
  Qx as ImportModal,
  OC as ImporterTaskStates,
  AC as InvenioImporterRecordStatus,
  RC as OrchestrationStepsEnum,
  Yi as ProgressLoading,
  Gs as Search,
  Wi as Spinner,
  ZE as StatusIcon,
  Ki as StatusLabel,
  hC as TaskDetails,
  lC as TaskRecordItem,
  Be as capitalizeFirstLetter,
  eS as cn,
  TC as createSearchApi,
  FC as createSearchApiConfig,
  Zt as formatDate,
  Br as formatFileSize,
  nS as getCsrfToken,
  aS as getStatusColor,
  Zi as getTotalSize,
  Ji as getTotalSizeFormatted,
  dC as useFileUploader
};
