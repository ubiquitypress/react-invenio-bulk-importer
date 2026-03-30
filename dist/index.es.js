import s, { Component as L, useContext as A, useEffect as we, useCallback as k, Fragment as or, useState as N, useRef as ra, useMemo as na, createContext as Js } from "react";
import E, { OverridableContext as eo } from "react-overridable";
import nt from "axios";
import Te from "qs";
import { connect as R, Provider as to } from "react-redux";
import { Label as M, Icon as _, Input as aa, Button as z, List as $, Checkbox as lr, Card as D, Segment as q, Header as de, Menu as kt, Pagination as ro, Item as _e, Loader as ia, Dropdown as ce, Image as no, Dimmer as ao, TableRow as mt, TableCell as Y, Table as I, TableHeader as sa, TableHeaderCell as W, TableBody as oa, Form as ge, Modal as le, ModalHeader as io, ModalContent as so, Grid as K, Statistic as Rt, Progress as oo, Message as U, Tab as Pe, Popup as zr, Container as lo } from "semantic-ui-react";
import { combineReducers as co, createStore as uo, applyMiddleware as po } from "redux";
import fo from "redux-thunk";
import ho from "lodash";
import { TextField as mo, SelectField as Pt, BooleanField as go, TextAreaField as yo, BaseForm as bo } from "react-invenio-forms";
import { useFormikContext as vo } from "formik";
var Ze = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function P(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Eo = Object.prototype;
function So(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Eo;
  return e === r;
}
var gt = So;
function _o(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var la = _o, $o = la, xo = $o(Object.keys, Object), Co = xo, wo = gt, To = Co, Io = Object.prototype, Fo = Io.hasOwnProperty;
function Ao(e) {
  if (!wo(e))
    return To(e);
  var t = [];
  for (var r in Object(e))
    Fo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var ca = Ao, Oo = typeof Ze == "object" && Ze && Ze.Object === Object && Ze, ua = Oo, ko = ua, Ro = typeof self == "object" && self && self.Object === Object && self, Po = ko || Ro || Function("return this")(), re = Po, Do = re, Lo = Do.Symbol, Ie = Lo, Mr = Ie, da = Object.prototype, No = da.hasOwnProperty, Bo = da.toString, De = Mr ? Mr.toStringTag : void 0;
function Uo(e) {
  var t = No.call(e, De), r = e[De];
  try {
    e[De] = void 0;
    var n = !0;
  } catch {
  }
  var a = Bo.call(e);
  return n && (t ? e[De] = r : delete e[De]), a;
}
var zo = Uo, Mo = Object.prototype, jo = Mo.toString;
function Qo(e) {
  return jo.call(e);
}
var qo = Qo, jr = Ie, Vo = zo, Go = qo, Ho = "[object Null]", Yo = "[object Undefined]", Qr = jr ? jr.toStringTag : void 0;
function Wo(e) {
  return e == null ? e === void 0 ? Yo : Ho : Qr && Qr in Object(e) ? Vo(e) : Go(e);
}
var pe = Wo;
function Ko(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var se = Ko;
const Xo = /* @__PURE__ */ P(se);
var Zo = pe, Jo = se, el = "[object AsyncFunction]", tl = "[object Function]", rl = "[object GeneratorFunction]", nl = "[object Proxy]";
function al(e) {
  if (!Jo(e))
    return !1;
  var t = Zo(e);
  return t == tl || t == rl || t == el || t == nl;
}
var pa = al, il = re, sl = il["__core-js_shared__"], ol = sl, Dt = ol, qr = function() {
  var e = /[^.]+$/.exec(Dt && Dt.keys && Dt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ll(e) {
  return !!qr && qr in e;
}
var cl = ll, ul = Function.prototype, dl = ul.toString;
function pl(e) {
  if (e != null) {
    try {
      return dl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var fa = pl, fl = pa, hl = cl, ml = se, gl = fa, yl = /[\\^$.*+?()[\]{}|]/g, bl = /^\[object .+?Constructor\]$/, vl = Function.prototype, El = Object.prototype, Sl = vl.toString, _l = El.hasOwnProperty, $l = RegExp(
  "^" + Sl.call(_l).replace(yl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function xl(e) {
  if (!ml(e) || hl(e))
    return !1;
  var t = fl(e) ? $l : bl;
  return t.test(gl(e));
}
var Cl = xl;
function wl(e, t) {
  return e == null ? void 0 : e[t];
}
var Tl = wl, Il = Cl, Fl = Tl;
function Al(e, t) {
  var r = Fl(e, t);
  return Il(r) ? r : void 0;
}
var ye = Al, Ol = ye, kl = re, Rl = Ol(kl, "DataView"), Pl = Rl, Dl = ye, Ll = re, Nl = Dl(Ll, "Map"), cr = Nl, Bl = ye, Ul = re, zl = Bl(Ul, "Promise"), Ml = zl, jl = ye, Ql = re, ql = jl(Ql, "Set"), Vl = ql, Gl = ye, Hl = re, Yl = Gl(Hl, "WeakMap"), Wl = Yl, Qt = Pl, qt = cr, Vt = Ml, Gt = Vl, Ht = Wl, ha = pe, Fe = fa, Vr = "[object Map]", Kl = "[object Object]", Gr = "[object Promise]", Hr = "[object Set]", Yr = "[object WeakMap]", Wr = "[object DataView]", Xl = Fe(Qt), Zl = Fe(qt), Jl = Fe(Vt), ec = Fe(Gt), tc = Fe(Ht), he = ha;
(Qt && he(new Qt(new ArrayBuffer(1))) != Wr || qt && he(new qt()) != Vr || Vt && he(Vt.resolve()) != Gr || Gt && he(new Gt()) != Hr || Ht && he(new Ht()) != Yr) && (he = function(e) {
  var t = ha(e), r = t == Kl ? e.constructor : void 0, n = r ? Fe(r) : "";
  if (n)
    switch (n) {
      case Xl:
        return Wr;
      case Zl:
        return Vr;
      case Jl:
        return Gr;
      case ec:
        return Hr;
      case tc:
        return Yr;
    }
  return t;
});
var qe = he;
function rc(e) {
  return e != null && typeof e == "object";
}
var ne = rc, nc = pe, ac = ne, ic = "[object Arguments]";
function sc(e) {
  return ac(e) && nc(e) == ic;
}
var oc = sc, Kr = oc, lc = ne, ma = Object.prototype, cc = ma.hasOwnProperty, uc = ma.propertyIsEnumerable, dc = Kr(function() {
  return arguments;
}()) ? Kr : function(e) {
  return lc(e) && cc.call(e, "callee") && !uc.call(e, "callee");
}, yt = dc, pc = Array.isArray, V = pc;
const ga = /* @__PURE__ */ P(V);
var fc = 9007199254740991;
function hc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fc;
}
var ur = hc, mc = pa, gc = ur;
function yc(e) {
  return e != null && gc(e.length) && !mc(e);
}
var bt = yc, st = { exports: {} };
function bc() {
  return !1;
}
var vc = bc;
st.exports;
(function(e, t) {
  var r = re, n = vc, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, l = o ? r.Buffer : void 0, c = l ? l.isBuffer : void 0, u = c || n;
  e.exports = u;
})(st, st.exports);
var vt = st.exports, Ec = pe, Sc = ur, _c = ne, $c = "[object Arguments]", xc = "[object Array]", Cc = "[object Boolean]", wc = "[object Date]", Tc = "[object Error]", Ic = "[object Function]", Fc = "[object Map]", Ac = "[object Number]", Oc = "[object Object]", kc = "[object RegExp]", Rc = "[object Set]", Pc = "[object String]", Dc = "[object WeakMap]", Lc = "[object ArrayBuffer]", Nc = "[object DataView]", Bc = "[object Float32Array]", Uc = "[object Float64Array]", zc = "[object Int8Array]", Mc = "[object Int16Array]", jc = "[object Int32Array]", Qc = "[object Uint8Array]", qc = "[object Uint8ClampedArray]", Vc = "[object Uint16Array]", Gc = "[object Uint32Array]", T = {};
T[Bc] = T[Uc] = T[zc] = T[Mc] = T[jc] = T[Qc] = T[qc] = T[Vc] = T[Gc] = !0;
T[$c] = T[xc] = T[Lc] = T[Cc] = T[Nc] = T[wc] = T[Tc] = T[Ic] = T[Fc] = T[Ac] = T[Oc] = T[kc] = T[Rc] = T[Pc] = T[Dc] = !1;
function Hc(e) {
  return _c(e) && Sc(e.length) && !!T[Ec(e)];
}
var Yc = Hc;
function Wc(e) {
  return function(t) {
    return e(t);
  };
}
var dr = Wc, ot = { exports: {} };
ot.exports;
(function(e, t) {
  var r = ua, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, l = function() {
    try {
      var c = a && a.require && a.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(ot, ot.exports);
var pr = ot.exports, Kc = Yc, Xc = dr, Xr = pr, Zr = Xr && Xr.isTypedArray, Zc = Zr ? Xc(Zr) : Kc, fr = Zc, Jc = ca, eu = qe, tu = yt, ru = V, nu = bt, au = vt, iu = gt, su = fr, ou = "[object Map]", lu = "[object Set]", cu = Object.prototype, uu = cu.hasOwnProperty;
function du(e) {
  if (e == null)
    return !0;
  if (nu(e) && (ru(e) || typeof e == "string" || typeof e.splice == "function" || au(e) || su(e) || tu(e)))
    return !e.length;
  var t = eu(e);
  if (t == ou || t == lu)
    return !e.size;
  if (iu(e))
    return !Jc(e).length;
  for (var r in e)
    if (uu.call(e, r))
      return !1;
  return !0;
}
var pu = du;
const ae = /* @__PURE__ */ P(pu);
var fu = pe, hu = ne, mu = "[object Symbol]";
function gu(e) {
  return typeof e == "symbol" || hu(e) && fu(e) == mu;
}
var hr = gu, yu = V, bu = hr, vu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Eu = /^\w*$/;
function Su(e, t) {
  if (yu(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || bu(e) ? !0 : Eu.test(e) || !vu.test(e) || t != null && e in Object(t);
}
var mr = Su, _u = ye, $u = _u(Object, "create"), Et = $u, Jr = Et;
function xu() {
  this.__data__ = Jr ? Jr(null) : {}, this.size = 0;
}
var Cu = xu;
function wu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Tu = wu, Iu = Et, Fu = "__lodash_hash_undefined__", Au = Object.prototype, Ou = Au.hasOwnProperty;
function ku(e) {
  var t = this.__data__;
  if (Iu) {
    var r = t[e];
    return r === Fu ? void 0 : r;
  }
  return Ou.call(t, e) ? t[e] : void 0;
}
var Ru = ku, Pu = Et, Du = Object.prototype, Lu = Du.hasOwnProperty;
function Nu(e) {
  var t = this.__data__;
  return Pu ? t[e] !== void 0 : Lu.call(t, e);
}
var Bu = Nu, Uu = Et, zu = "__lodash_hash_undefined__";
function Mu(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Uu && t === void 0 ? zu : t, this;
}
var ju = Mu, Qu = Cu, qu = Tu, Vu = Ru, Gu = Bu, Hu = ju;
function Ae(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ae.prototype.clear = Qu;
Ae.prototype.delete = qu;
Ae.prototype.get = Vu;
Ae.prototype.has = Gu;
Ae.prototype.set = Hu;
var Yu = Ae;
function Wu() {
  this.__data__ = [], this.size = 0;
}
var Ku = Wu;
function Xu(e, t) {
  return e === t || e !== e && t !== t;
}
var St = Xu, Zu = St;
function Ju(e, t) {
  for (var r = e.length; r--; )
    if (Zu(e[r][0], t))
      return r;
  return -1;
}
var _t = Ju, ed = _t, td = Array.prototype, rd = td.splice;
function nd(e) {
  var t = this.__data__, r = ed(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : rd.call(t, r, 1), --this.size, !0;
}
var ad = nd, id = _t;
function sd(e) {
  var t = this.__data__, r = id(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var od = sd, ld = _t;
function cd(e) {
  return ld(this.__data__, e) > -1;
}
var ud = cd, dd = _t;
function pd(e, t) {
  var r = this.__data__, n = dd(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var fd = pd, hd = Ku, md = ad, gd = od, yd = ud, bd = fd;
function Oe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Oe.prototype.clear = hd;
Oe.prototype.delete = md;
Oe.prototype.get = gd;
Oe.prototype.has = yd;
Oe.prototype.set = bd;
var $t = Oe, en = Yu, vd = $t, Ed = cr;
function Sd() {
  this.size = 0, this.__data__ = {
    hash: new en(),
    map: new (Ed || vd)(),
    string: new en()
  };
}
var _d = Sd;
function $d(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var xd = $d, Cd = xd;
function wd(e, t) {
  var r = e.__data__;
  return Cd(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var xt = wd, Td = xt;
function Id(e) {
  var t = Td(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Fd = Id, Ad = xt;
function Od(e) {
  return Ad(this, e).get(e);
}
var kd = Od, Rd = xt;
function Pd(e) {
  return Rd(this, e).has(e);
}
var Dd = Pd, Ld = xt;
function Nd(e, t) {
  var r = Ld(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Bd = Nd, Ud = _d, zd = Fd, Md = kd, jd = Dd, Qd = Bd;
function ke(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ke.prototype.clear = Ud;
ke.prototype.delete = zd;
ke.prototype.get = Md;
ke.prototype.has = jd;
ke.prototype.set = Qd;
var gr = ke, ya = gr, qd = "Expected a function";
function yr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(qd);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (yr.Cache || ya)(), r;
}
yr.Cache = ya;
var Vd = yr, Gd = Vd, Hd = 500;
function Yd(e) {
  var t = Gd(e, function(n) {
    return r.size === Hd && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Wd = Yd, Kd = Wd, Xd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zd = /\\(\\)?/g, Jd = Kd(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Xd, function(r, n, a, i) {
    t.push(a ? i.replace(Zd, "$1") : n || r);
  }), t;
}), ep = Jd;
function tp(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var rp = tp, tn = Ie, np = rp, ap = V, ip = hr, sp = 1 / 0, rn = tn ? tn.prototype : void 0, nn = rn ? rn.toString : void 0;
function ba(e) {
  if (typeof e == "string")
    return e;
  if (ap(e))
    return np(e, ba) + "";
  if (ip(e))
    return nn ? nn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -sp ? "-0" : t;
}
var op = ba, lp = op;
function cp(e) {
  return e == null ? "" : lp(e);
}
var Ve = cp, up = V, dp = mr, pp = ep, fp = Ve;
function hp(e, t) {
  return up(e) ? e : dp(e, t) ? [e] : pp(fp(e));
}
var Ct = hp, mp = hr, gp = 1 / 0;
function yp(e) {
  if (typeof e == "string" || mp(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -gp ? "-0" : t;
}
var Ge = yp, bp = Ct, vp = Ge;
function Ep(e, t) {
  t = bp(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[vp(t[r++])];
  return r && r == n ? e : void 0;
}
var br = Ep, Sp = br;
function _p(e, t, r) {
  var n = e == null ? void 0 : Sp(e, t);
  return n === void 0 ? r : n;
}
var va = _p;
const Ue = /* @__PURE__ */ P(va);
function $p(e, t) {
  return e != null && t in Object(e);
}
var xp = $p, Cp = 9007199254740991, wp = /^(?:0|[1-9]\d*)$/;
function Tp(e, t) {
  var r = typeof e;
  return t = t ?? Cp, !!t && (r == "number" || r != "symbol" && wp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var wt = Tp, Ip = Ct, Fp = yt, Ap = V, Op = wt, kp = ur, Rp = Ge;
function Pp(e, t, r) {
  t = Ip(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = Rp(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && kp(a) && Op(o, a) && (Ap(e) || Fp(e)));
}
var Ea = Pp, Dp = xp, Lp = Ea;
function Np(e, t) {
  return e != null && Lp(e, t, Dp);
}
var vr = Np;
const Bp = /* @__PURE__ */ P(vr);
var Up = ye, zp = function() {
  try {
    var e = Up(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Sa = zp, an = Sa;
function Mp(e, t, r) {
  t == "__proto__" && an ? an(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Tt = Mp, jp = Tt, Qp = St, qp = Object.prototype, Vp = qp.hasOwnProperty;
function Gp(e, t, r) {
  var n = e[t];
  (!(Vp.call(e, t) && Qp(n, r)) || r === void 0 && !(t in e)) && jp(e, t, r);
}
var Er = Gp, Hp = Er, Yp = Tt;
function Wp(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var i = -1, o = t.length; ++i < o; ) {
    var l = t[i], c = n ? n(r[l], e[l], l, r, e) : void 0;
    c === void 0 && (c = e[l]), a ? Yp(r, l, c) : Hp(r, l, c);
  }
  return r;
}
var He = Wp;
function Kp(e) {
  return e;
}
var Sr = Kp;
function Xp(e, t, r) {
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
var Zp = Xp, Jp = Zp, sn = Math.max;
function ef(e, t, r) {
  return t = sn(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = sn(n.length - t, 0), o = Array(i); ++a < i; )
      o[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(o), Jp(e, this, l);
  };
}
var _a = ef;
function tf(e) {
  return function() {
    return e;
  };
}
var rf = tf, nf = rf, on = Sa, af = Sr, sf = on ? function(e, t) {
  return on(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: nf(t),
    writable: !0
  });
} : af, of = sf, lf = 800, cf = 16, uf = Date.now;
function df(e) {
  var t = 0, r = 0;
  return function() {
    var n = uf(), a = cf - (n - r);
    if (r = n, a > 0) {
      if (++t >= lf)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var pf = df, ff = of, hf = pf, mf = hf(ff), $a = mf, gf = Sr, yf = _a, bf = $a;
function vf(e, t) {
  return bf(yf(e, t, gf), e + "");
}
var Ef = vf, Sf = St, _f = bt, $f = wt, xf = se;
function Cf(e, t, r) {
  if (!xf(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? _f(r) && $f(t, r.length) : n == "string" && t in r) ? Sf(r[t], e) : !1;
}
var wf = Cf, Tf = Ef, If = wf;
function Ff(e) {
  return Tf(function(t, r) {
    var n = -1, a = r.length, i = a > 1 ? r[a - 1] : void 0, o = a > 2 ? r[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0, o && If(r[0], r[1], o) && (i = a < 3 ? void 0 : i, a = 1), t = Object(t); ++n < a; ) {
      var l = r[n];
      l && e(t, l, n, i);
    }
    return t;
  });
}
var Af = Ff;
function Of(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var kf = Of, Rf = kf, Pf = yt, Df = V, Lf = vt, Nf = wt, Bf = fr, Uf = Object.prototype, zf = Uf.hasOwnProperty;
function Mf(e, t) {
  var r = Df(e), n = !r && Pf(e), a = !r && !n && Lf(e), i = !r && !n && !a && Bf(e), o = r || n || a || i, l = o ? Rf(e.length, String) : [], c = l.length;
  for (var u in e)
    (t || zf.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Nf(u, c))) && l.push(u);
  return l;
}
var xa = Mf;
function jf(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Qf = jf, qf = se, Vf = gt, Gf = Qf, Hf = Object.prototype, Yf = Hf.hasOwnProperty;
function Wf(e) {
  if (!qf(e))
    return Gf(e);
  var t = Vf(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Yf.call(e, n)) || r.push(n);
  return r;
}
var Kf = Wf, Xf = xa, Zf = Kf, Jf = bt;
function eh(e) {
  return Jf(e) ? Xf(e, !0) : Zf(e);
}
var It = eh, th = He, rh = Af, nh = It, ah = rh(function(e, t) {
  th(t, nh(t), e);
}), ih = ah, sh = ih;
const lt = /* @__PURE__ */ P(sh);
function oh(e) {
  return e && e.length ? e[0] : void 0;
}
var lh = oh;
const ch = /* @__PURE__ */ P(lh);
var uh = Er, dh = Ct, ph = wt, ln = se, fh = Ge;
function hh(e, t, r, n) {
  if (!ln(e))
    return e;
  t = dh(t, e);
  for (var a = -1, i = t.length, o = i - 1, l = e; l != null && ++a < i; ) {
    var c = fh(t[a]), u = r;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (a != o) {
      var d = l[c];
      u = n ? n(d, c, l) : void 0, u === void 0 && (u = ln(d) ? d : ph(t[a + 1]) ? [] : {});
    }
    uh(l, c, u), l = l[c];
  }
  return e;
}
var mh = hh, gh = br, yh = mh, bh = Ct;
function vh(e, t, r) {
  for (var n = -1, a = t.length, i = {}; ++n < a; ) {
    var o = t[n], l = gh(e, o);
    r(l, o) && yh(i, bh(o, e), l);
  }
  return i;
}
var Eh = vh, Sh = Eh, _h = vr;
function $h(e, t) {
  return Sh(e, t, function(r, n) {
    return _h(e, n);
  });
}
var xh = $h;
function Ch(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var _r = Ch, cn = Ie, wh = yt, Th = V, un = cn ? cn.isConcatSpreadable : void 0;
function Ih(e) {
  return Th(e) || wh(e) || !!(un && e && e[un]);
}
var Fh = Ih, Ah = _r, Oh = Fh;
function Ca(e, t, r, n, a) {
  var i = -1, o = e.length;
  for (r || (r = Oh), a || (a = []); ++i < o; ) {
    var l = e[i];
    t > 0 && r(l) ? t > 1 ? Ca(l, t - 1, r, n, a) : Ah(a, l) : n || (a[a.length] = l);
  }
  return a;
}
var kh = Ca, Rh = kh;
function Ph(e) {
  var t = e == null ? 0 : e.length;
  return t ? Rh(e, 1) : [];
}
var Dh = Ph, Lh = Dh, Nh = _a, Bh = $a;
function Uh(e) {
  return Bh(Nh(e, void 0, Lh), e + "");
}
var zh = Uh, Mh = xh, jh = zh, Qh = jh(function(e, t) {
  return e == null ? {} : Mh(e, t);
}), qh = Qh;
const Vh = /* @__PURE__ */ P(qh);
var Gh = $t;
function Hh() {
  this.__data__ = new Gh(), this.size = 0;
}
var Yh = Hh;
function Wh(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Kh = Wh;
function Xh(e) {
  return this.__data__.get(e);
}
var Zh = Xh;
function Jh(e) {
  return this.__data__.has(e);
}
var em = Jh, tm = $t, rm = cr, nm = gr, am = 200;
function im(e, t) {
  var r = this.__data__;
  if (r instanceof tm) {
    var n = r.__data__;
    if (!rm || n.length < am - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new nm(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var sm = im, om = $t, lm = Yh, cm = Kh, um = Zh, dm = em, pm = sm;
function Re(e) {
  var t = this.__data__ = new om(e);
  this.size = t.size;
}
Re.prototype.clear = lm;
Re.prototype.delete = cm;
Re.prototype.get = um;
Re.prototype.has = dm;
Re.prototype.set = pm;
var $r = Re;
function fm(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var hm = fm, mm = xa, gm = ca, ym = bt;
function bm(e) {
  return ym(e) ? mm(e) : gm(e);
}
var Ye = bm, vm = He, Em = Ye;
function Sm(e, t) {
  return e && vm(t, Em(t), e);
}
var _m = Sm, $m = He, xm = It;
function Cm(e, t) {
  return e && $m(t, xm(t), e);
}
var wm = Cm, ct = { exports: {} };
ct.exports;
(function(e, t) {
  var r = re, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i ? r.Buffer : void 0, l = o ? o.allocUnsafe : void 0;
  function c(u, d) {
    if (d)
      return u.slice();
    var p = u.length, h = l ? l(p) : new u.constructor(p);
    return u.copy(h), h;
  }
  e.exports = c;
})(ct, ct.exports);
var Tm = ct.exports;
function Im(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Fm = Im;
function Am(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
var Om = Am;
function km() {
  return [];
}
var wa = km, Rm = Om, Pm = wa, Dm = Object.prototype, Lm = Dm.propertyIsEnumerable, dn = Object.getOwnPropertySymbols, Nm = dn ? function(e) {
  return e == null ? [] : (e = Object(e), Rm(dn(e), function(t) {
    return Lm.call(e, t);
  }));
} : Pm, xr = Nm, Bm = He, Um = xr;
function zm(e, t) {
  return Bm(e, Um(e), t);
}
var Mm = zm, jm = la, Qm = jm(Object.getPrototypeOf, Object), Ta = Qm, qm = _r, Vm = Ta, Gm = xr, Hm = wa, Ym = Object.getOwnPropertySymbols, Wm = Ym ? function(e) {
  for (var t = []; e; )
    qm(t, Gm(e)), e = Vm(e);
  return t;
} : Hm, Ia = Wm, Km = He, Xm = Ia;
function Zm(e, t) {
  return Km(e, Xm(e), t);
}
var Jm = Zm, eg = _r, tg = V;
function rg(e, t, r) {
  var n = t(e);
  return tg(e) ? n : eg(n, r(e));
}
var Fa = rg, ng = Fa, ag = xr, ig = Ye;
function sg(e) {
  return ng(e, ig, ag);
}
var Aa = sg, og = Fa, lg = Ia, cg = It;
function ug(e) {
  return og(e, cg, lg);
}
var dg = ug, pg = Object.prototype, fg = pg.hasOwnProperty;
function hg(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && fg.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var mg = hg, gg = re, yg = gg.Uint8Array, Oa = yg, pn = Oa;
function bg(e) {
  var t = new e.constructor(e.byteLength);
  return new pn(t).set(new pn(e)), t;
}
var Cr = bg, vg = Cr;
function Eg(e, t) {
  var r = t ? vg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Sg = Eg, _g = /\w*$/;
function $g(e) {
  var t = new e.constructor(e.source, _g.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var xg = $g, fn = Ie, hn = fn ? fn.prototype : void 0, mn = hn ? hn.valueOf : void 0;
function Cg(e) {
  return mn ? Object(mn.call(e)) : {};
}
var wg = Cg, Tg = Cr;
function Ig(e, t) {
  var r = t ? Tg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Fg = Ig, Ag = Cr, Og = Sg, kg = xg, Rg = wg, Pg = Fg, Dg = "[object Boolean]", Lg = "[object Date]", Ng = "[object Map]", Bg = "[object Number]", Ug = "[object RegExp]", zg = "[object Set]", Mg = "[object String]", jg = "[object Symbol]", Qg = "[object ArrayBuffer]", qg = "[object DataView]", Vg = "[object Float32Array]", Gg = "[object Float64Array]", Hg = "[object Int8Array]", Yg = "[object Int16Array]", Wg = "[object Int32Array]", Kg = "[object Uint8Array]", Xg = "[object Uint8ClampedArray]", Zg = "[object Uint16Array]", Jg = "[object Uint32Array]";
function ey(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Qg:
      return Ag(e);
    case Dg:
    case Lg:
      return new n(+e);
    case qg:
      return Og(e, r);
    case Vg:
    case Gg:
    case Hg:
    case Yg:
    case Wg:
    case Kg:
    case Xg:
    case Zg:
    case Jg:
      return Pg(e, r);
    case Ng:
      return new n();
    case Bg:
    case Mg:
      return new n(e);
    case Ug:
      return kg(e);
    case zg:
      return new n();
    case jg:
      return Rg(e);
  }
}
var ty = ey, ry = se, gn = Object.create, ny = function() {
  function e() {
  }
  return function(t) {
    if (!ry(t))
      return {};
    if (gn)
      return gn(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), ay = ny, iy = ay, sy = Ta, oy = gt;
function ly(e) {
  return typeof e.constructor == "function" && !oy(e) ? iy(sy(e)) : {};
}
var cy = ly, uy = qe, dy = ne, py = "[object Map]";
function fy(e) {
  return dy(e) && uy(e) == py;
}
var hy = fy, my = hy, gy = dr, yn = pr, bn = yn && yn.isMap, yy = bn ? gy(bn) : my, by = yy, vy = qe, Ey = ne, Sy = "[object Set]";
function _y(e) {
  return Ey(e) && vy(e) == Sy;
}
var $y = _y, xy = $y, Cy = dr, vn = pr, En = vn && vn.isSet, wy = En ? Cy(En) : xy, Ty = wy, Iy = $r, Fy = hm, Ay = Er, Oy = _m, ky = wm, Ry = Tm, Py = Fm, Dy = Mm, Ly = Jm, Ny = Aa, By = dg, Uy = qe, zy = mg, My = ty, jy = cy, Qy = V, qy = vt, Vy = by, Gy = se, Hy = Ty, Yy = Ye, Wy = It, Ky = 1, Xy = 2, Zy = 4, ka = "[object Arguments]", Jy = "[object Array]", eb = "[object Boolean]", tb = "[object Date]", rb = "[object Error]", Ra = "[object Function]", nb = "[object GeneratorFunction]", ab = "[object Map]", ib = "[object Number]", Pa = "[object Object]", sb = "[object RegExp]", ob = "[object Set]", lb = "[object String]", cb = "[object Symbol]", ub = "[object WeakMap]", db = "[object ArrayBuffer]", pb = "[object DataView]", fb = "[object Float32Array]", hb = "[object Float64Array]", mb = "[object Int8Array]", gb = "[object Int16Array]", yb = "[object Int32Array]", bb = "[object Uint8Array]", vb = "[object Uint8ClampedArray]", Eb = "[object Uint16Array]", Sb = "[object Uint32Array]", C = {};
C[ka] = C[Jy] = C[db] = C[pb] = C[eb] = C[tb] = C[fb] = C[hb] = C[mb] = C[gb] = C[yb] = C[ab] = C[ib] = C[Pa] = C[sb] = C[ob] = C[lb] = C[cb] = C[bb] = C[vb] = C[Eb] = C[Sb] = !0;
C[rb] = C[Ra] = C[ub] = !1;
function at(e, t, r, n, a, i) {
  var o, l = t & Ky, c = t & Xy, u = t & Zy;
  if (r && (o = a ? r(e, n, a, i) : r(e)), o !== void 0)
    return o;
  if (!Gy(e))
    return e;
  var d = Qy(e);
  if (d) {
    if (o = zy(e), !l)
      return Py(e, o);
  } else {
    var p = Uy(e), h = p == Ra || p == nb;
    if (qy(e))
      return Ry(e, l);
    if (p == Pa || p == ka || h && !a) {
      if (o = c || h ? {} : jy(e), !l)
        return c ? Ly(e, ky(o, e)) : Dy(e, Oy(o, e));
    } else {
      if (!C[p])
        return a ? e : {};
      o = My(e, p, l);
    }
  }
  i || (i = new Iy());
  var f = i.get(e);
  if (f)
    return f;
  i.set(e, o), Hy(e) ? e.forEach(function(v) {
    o.add(at(v, t, r, v, e, i));
  }) : Vy(e) && e.forEach(function(v, y) {
    o.set(y, at(v, t, r, y, e, i));
  });
  var g = u ? c ? By : Ny : c ? Wy : Yy, m = d ? void 0 : g(e);
  return Fy(m || e, function(v, y) {
    m && (y = v, v = e[y]), Ay(o, y, at(v, t, r, y, e, i));
  }), o;
}
var _b = at, $b = _b, xb = 1, Cb = 4;
function wb(e) {
  return $b(e, xb | Cb);
}
var Tb = wb;
const Ce = /* @__PURE__ */ P(Tb);
var Ib = pe, Fb = ne, Ab = "[object Boolean]";
function Ob(e) {
  return e === !0 || e === !1 || Fb(e) && Ib(e) == Ab;
}
var kb = Ob;
const Rb = /* @__PURE__ */ P(kb);
var Pb = pe, Db = V, Lb = ne, Nb = "[object String]";
function Bb(e) {
  return typeof e == "string" || !Db(e) && Lb(e) && Pb(e) == Nb;
}
var Ub = Bb;
const zb = /* @__PURE__ */ P(Ub);
var Mb = pe, jb = ne, Qb = "[object Number]";
function qb(e) {
  return typeof e == "number" || jb(e) && Mb(e) == Qb;
}
var Vb = qb;
const Gb = /* @__PURE__ */ P(Vb);
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
    r !== null && (u.q = r), n !== null && (u.sort = n, a !== null && (u.sort = a === "desc" ? `-${n}` : n)), i > 0 && (u.page = i), o > 0 && (u.size = o), ae(c) || lt(u, this._addFilters(c));
    const d = this._addFilters(l);
    return lt(u, d), Te.stringify(u, {
      arrayFormat: "repeat"
    });
  }
}
class Hb {
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
function Je(e, t) {
  return e.indexOf(t) === 0 && (e.length === t.length || e.indexOf(t + "&") === 0);
}
function Lt(e) {
  return Te.stringify({
    q: e
  });
}
function Yb(e) {
  return Te.parse(e).q;
}
function Da(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = Da(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function _n(e, t) {
  const r = Lt(e), n = t.map((o) => Lt(o));
  let a = !1;
  const i = n.filter((o) => {
    const l = Je(o, r), c = Je(r, o);
    return l && !a && (a = !0), !l && !c;
  });
  if (!a)
    i.push(r);
  else if (e.length === 3) {
    const l = Da(e), c = Lt(l), u = i.some((d) => {
      const p = Je(d, c), h = Je(c, d);
      return p || h;
    });
    (ae(i) || !u) && i.push(c);
  }
  return i.map((o) => Yb(o));
}
const La = (e, t) => {
  if (ae(e))
    return;
  if (!ga(ch(e)))
    return _n(e, t);
  let r = t;
  for (const n of e)
    r = _n(n, r);
  return r;
}, Na = (e, t, r) => {
  let n = Vh(t, r);
  return ae(n.filters) || (n.filters = La(n.filters, e.filters)), n;
}, ut = {
  queryString: "",
  suggestions: [],
  sortBy: null,
  sortOrder: null,
  page: -1,
  size: -1,
  filters: [],
  hiddenParams: [],
  layout: null
}, Ba = Object.keys(ut), Wb = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, Kb = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class Xb {
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
    r !== null && (u.q = r), n !== null && (u.sort = n, a !== null && (u.sort = a === "desc" ? `-${n}` : n)), i > 0 && (u.page = i), o > 0 && (u.size = o), ae(c) || lt(u, this._addFilters(c));
    const d = this._addFilters(l);
    return lt(u, d), Te.stringify(u, {
      arrayFormat: "repeat"
    });
  }
}
class Ua {
  constructor(t) {
    this.axiosConfig = Ue(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = nt.CancelToken;
  }
  validateAxiosConfig() {
    if (!Bp(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = Ue(t, "interceptors.request", void 0), this.responseInterceptor = Ue(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: Xb,
      InvenioRequestSerializer: Sn
    };
    return typeof t == "string" ? r[t] : t || Sn;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), a = Ue(t, "invenio.responseSerializer", Hb);
    this.requestSerializer = new n(), this.responseSerializer = new a();
  }
  initAxios() {
    const t = {
      paramsSerializer: this.requestSerializer.serialize,
      ...this.axiosConfig
    };
    this.http = nt.create(t), this.addInterceptors();
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
      throw nt.isCancel(r) ? new wr() : r;
    }
  }
}
class Zb {
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
          return Gb(n) && n > 0;
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
const Jb = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, $n = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class ev {
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
    const r = Te.parse(t, {
      ignoreQueryPrefix: !0
    }), n = {};
    return Object.entries(r).forEach((a) => {
      const i = a[0], o = a[1];
      n[i] = this._convertValue(i, o);
    }), n;
  }
}
class tv {
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
      return Te.stringify(n, {
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
      const a = Ce(n);
      return Object.keys(r).forEach((i) => {
        a[i] = r[i];
      }), a;
    }, this.urlParamsMapping = Xo(t.urlParamsMapping) ? t.urlParamsMapping : {
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
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !zb(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new Zb(), this.urlParser = t.urlParser || new ev(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
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
      Jb(r);
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
const rv = "SET_QUERY_COMPONENT_INITIAL_STATE", za = "SET_QUERY_STRING", Tr = "SET_QUERY_SORTING", Ir = "SET_QUERY_SORT_BY", Fr = "SET_QUERY_SORT_ORDER", We = "SET_QUERY_STATE", Ma = "SET_QUERY_PAGINATION_PAGE", ja = "SET_QUERY_PAGINATION_SIZE", Qa = "SET_QUERY_FILTERS", qa = "SET_QUERY_SUGGESTIONS", Va = "SET_SUGGESTION_STRING", Ga = "CLEAR_QUERY_SUGGESTIONS", Ha = "RESULTS_LOADING", Ya = "RESULTS_FETCH_SUCCESS", Wa = "RESULTS_FETCH_ERROR", Yt = "RESULTS_UPDATE_LAYOUT", Ka = "RESET_QUERY", nv = (e) => (t) => {
  e && t(ee({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, Xa = (e) => (t) => {
  t({
    type: We,
    payload: e
  }), t(ee());
}, Za = (e) => (t) => {
  t({
    type: za,
    payload: e
  }), t(ee());
}, av = (e, t) => (r) => {
  r({
    type: Tr,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(ee());
}, iv = (e) => (t) => {
  t({
    type: Ir,
    payload: e
  }), t(ee());
}, sv = (e) => (t) => {
  t({
    type: Fr,
    payload: e
  }), t(ee());
}, ov = (e) => (t) => {
  t({
    type: Ma,
    payload: e
  }), t(ee());
}, lv = (e) => (t) => {
  t({
    type: ja,
    payload: e
  }), t(ee());
}, Ar = (e) => (t) => {
  t({
    type: Qa,
    payload: e
  }), t(ee());
}, cv = (e) => async (t, r, n) => {
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
}, uv = () => (e, t, r) => {
  e({
    type: Ka,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(ee());
}, dv = (e, t, r, n) => {
  const a = t.urlHandlerApi;
  a && (r ? a.replace(e) : n && a.set(e));
}, pv = (e, t, r, n) => {
  const a = r().query;
  t({
    type: We,
    payload: {
      ...a,
      ...e.newQueryState
    }
  });
  const i = Ce(r().query), o = n.urlHandlerApi;
  return o && o.replace(i), delete e.newStateQuery, e;
}, fv = (e, t, r, n) => {
  function a(l, c, u, d) {
    l.queryString === "" ? (l.sortBy = u.defaultSortingOnEmptyQueryString.sortBy, l.sortOrder = u.defaultSortingOnEmptyQueryString.sortOrder) : (l.sortBy = c.initialSortBy, l.sortOrder = c.initialSortOrder), d({
      type: We,
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
    let o = Ce(n().query);
    fv(o, i, a, r), o = Ce(n().query), dv(o, a, t, e), r({
      type: Ha
    });
    try {
      let c = await a.searchApi.search(o);
      "newQueryState" in c && (c = pv(Ce(c), r, n, a)), r({
        type: Ya,
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
          type: Wa,
          payload: {
            error: l
          }
        });
    }
  };
}, hv = (e) => (t) => {
  t({
    type: Va,
    payload: e
  }), t(mv());
}, mv = () => async (e, t, r) => {
  const n = Ce(t().query), a = r.suggestionApi;
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
}, gv = () => (e) => {
  e({
    type: Ga,
    payload: {
      suggestions: []
    }
  });
}, yv = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: We,
      payload: n
    }), e(ee({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, w = /* @__PURE__ */ s.createContext({}), bv = function() {
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
}, vv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case za:
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
    case rv:
      return {
        ...e,
        ...t.payload
      };
    case We:
      return {
        ...e,
        ...ut,
        ...Na(ut, t.payload, Ba)
      };
    case Yt:
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
}, Ev = function() {
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
var Sv = co({
  app: bv,
  query: vv,
  results: Ev
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
function _v(e, t, r) {
  const n = xn(r, t), a = !ae(e.defaultSortingOnEmptyQueryString);
  let i = !1;
  return a && (i = xn(r, e.defaultSortingOnEmptyQueryString)), n && i;
}
function $v(e) {
  const t = {
    ...ut,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = _v(e, t, r), a = {
    ...Kb,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, i = {
    ...Wb,
    loading: e.searchOnInit
  };
  return {
    app: a,
    query: r,
    results: i
  };
}
function xv(e) {
  const t = $v(e);
  return uo(Sv, t, po(fo.withExtraArgument(e)));
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
Or.contextType = w;
var Cv = E.component("Bootstrap", Or);
const wv = (e) => ({
  onAppInitialized: (t) => e(nv(t)),
  updateQueryState: (t) => e(Xa(t)),
  searchOnUrlQueryStringChanged: () => e(yv())
}), Tv = R(null, wv)(Cv);
class kr extends L {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new tv(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = xv(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
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
    return /* @__PURE__ */ s.createElement(w.Provider, {
      value: o
    }, /* @__PURE__ */ s.createElement(to, {
      store: this.store
    }, /* @__PURE__ */ s.createElement(Tv, {
      searchOnInit: i,
      eventListenerEnabled: n
    }, /* @__PURE__ */ s.createElement(E, {
      id: l
    }, r))));
  }
}
kr.defaultProps = {
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
kr.contextType = w;
var Iv = E.component("ReactSearchKit", kr);
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
  } = A(w);
  return /* @__PURE__ */ s.createElement(E, {
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
      /* @__PURE__ */ s.createElement(M, {
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
var Fv = E.component("ActiveFilters", Ja);
const Av = (e) => ({
  updateQueryFilters: (t) => e(Ar(t))
});
R((e) => ({
  filters: e.query.filters
}), Av)(Fv);
function Ov(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var kv = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
Ov(kv);
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
    return /* @__PURE__ */ s.createElement(Pv, {
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
}, e)), Pv = (e) => {
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
  } = A(w), u = (p, h) => {
    o();
  }, d = (p, h) => {
    p.key === "Enter" && o();
  };
  return /* @__PURE__ */ s.createElement(E, Object.assign({
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
    onChange: (p, h) => {
      let {
        value: f
      } = h;
      i(f);
    },
    value: n,
    onKeyPress: d
  }), /* @__PURE__ */ s.createElement(Dv, {
    querySuggestions: a,
    overridableId: t
  })));
}, Dv = (e) => {
  let {
    overridableId: t,
    ...r
  } = e;
  const {
    querySuggestions: n
  } = r, {
    buildUID: a
  } = A(w), i = async (o) => {
    await (void 0).setState({
      currentValue: o
    }), (void 0).clearSuggestions(), (void 0).executeSearch();
  };
  return n.length === 0 ? null : /* @__PURE__ */ s.createElement(E, Object.assign({
    id: a("AutocompleteSearchBar.suggestions", t)
  }, r), /* @__PURE__ */ s.createElement("ul", null, n.map((o) => /* @__PURE__ */ s.createElement(z, {
    as: "li",
    onClick: () => i(o),
    key: o
  }, o))));
};
var Lv = E.component("AutocompleteSearchBar", Rv);
const Nv = (e) => ({
  updateQueryString: (t) => e(Za(t)),
  updateSuggestions: (t) => e(hv(t)),
  clearSuggestions: () => e(gv())
}), Bv = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
R(Bv, Nv)(Lv);
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
  } = A(w);
  return /* @__PURE__ */ s.createElement(E, {
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
  } = A(w), u = t.label ? t.label : `${o} (${t.doc_count.toLocaleString("en-US")})`, d = a(t);
  return /* @__PURE__ */ s.createElement(E, {
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
ni.defaultProps = {
  overridableId: ""
};
var Uv = E.component("BucketAggregationValues", Ft);
class ai extends L {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: a
      } = this.props;
      return /* @__PURE__ */ s.createElement(Uv, {
        buckets: r,
        selectedFilters: n,
        field: this.agg.field,
        aggName: this.agg.aggName,
        childAgg: this.agg.childAgg,
        onFilterClicked: this.onFilterClicked,
        overridableId: a
      });
    }, this._getSelectedFilters = (r) => r.filter((n) => n[0] === this.agg.aggName), this._getResultBuckets = (r) => {
      const n = Ue(r, this.agg.aggName, {});
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
  } = A(w);
  return a && /* @__PURE__ */ s.createElement(E, {
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
var zv = E.component("BucketAggregation", ai);
const Mv = (e) => ({
  updateQueryFilters: (t) => e(Ar(t))
}), jv = R((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), Mv)(zv);
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
var X = E.component("ShouldRender", si);
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
  } = A(w), a = n("Count.element", r);
  return /* @__PURE__ */ s.createElement(E, {
    id: a,
    totalResults: t
  }, /* @__PURE__ */ s.createElement(M, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
li.defaultProps = {
  overridableId: ""
};
var Qv = E.component("Count", oi);
R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(Qv);
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
  } = A(w);
  return /* @__PURE__ */ s.createElement(E, {
    id: o("EmptyResults.element", t),
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: i
  }, /* @__PURE__ */ s.createElement(q, {
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
var qv = E.component("EmptyResults", ci);
const Vv = (e) => ({
  resetQuery: () => e(uv())
}), Gv = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), Vv)(qv);
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
  } = A(w);
  return /* @__PURE__ */ s.createElement(E, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ s.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
pi.defaultProps = {
  overridableId: ""
};
var Hv = E.component("Error", di);
R((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(Hv);
function Rr(e) {
  const t = (a) => /* @__PURE__ */ s.createElement(e, a);
  return R((a) => ({
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
  } = A(w);
  return /* @__PURE__ */ s.createElement(E, {
    id: a("LayoutSwitcher.element", t),
    currentLayout: r,
    onLayoutChange: n
  }, /* @__PURE__ */ s.createElement(kt, {
    compact: !0,
    icon: !0
  }, /* @__PURE__ */ s.createElement(kt.Item, {
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
  })), /* @__PURE__ */ s.createElement(kt.Item, {
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
var Yv = E.component("LayoutSwitcher", fi);
const Wv = (e) => ({
  updateLayout: (t) => e(cv(t))
});
R((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), Wv)(Yv);
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
class mi extends L {
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
  const u = o.boundaryRangeCount, d = o.siblingRangeCount, p = o.showEllipsis, h = o.showFirst, f = o.showLast, g = o.showPrev, m = o.showNext, v = o.size, y = Math.floor(l / n), S = Math.ceil(a / n), x = Math.min(S, y), {
    buildUID: B
  } = A(w);
  return r > S && i(S), /* @__PURE__ */ s.createElement(E, {
    id: B("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: a,
    options: o,
    onPageChange: i
  }, /* @__PURE__ */ s.createElement(ro, Object.assign({
    activePage: r,
    totalPages: x,
    onPageChange: (te, O) => {
      let {
        activePage: fe
      } = O;
      return i(fe);
    },
    boundaryRange: u,
    siblingRange: d,
    ellipsisItem: p ? void 0 : null,
    firstItem: h ? void 0 : null,
    lastItem: f ? void 0 : null,
    prevItem: g ? void 0 : null,
    nextItem: m ? void 0 : null,
    size: v
  }, c)));
};
gi.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var Kv = E.component("Pagination", mi);
const Xv = (e) => ({
  updateQueryPage: (t) => e(ov(t))
}), Zv = R((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), Xv)(Kv);
function yi(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    resultsPerRow: a,
    overridableId: i,
    onResultsRendered: o
  } = e;
  return we(() => {
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
const Jv = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = A(w);
  return /* @__PURE__ */ s.createElement(E, {
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
  } = A(w), i = r.map((o, l) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ s.createElement(Jv, {
      key: l,
      result: o,
      overridableId: t
    })
  ));
  return /* @__PURE__ */ s.createElement(E, {
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
var eE = E.component("ResultsGrid", yi);
const tE = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(eE);
function vi(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: a,
    onResultsRendered: i
  } = e;
  return we(() => {
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
const rE = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = A(w);
  return /* @__PURE__ */ s.createElement(E, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ s.createElement(_e, {
    href: `#${t.id}`
  }, /* @__PURE__ */ s.createElement(_e.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ s.createElement(_e.Content, null, /* @__PURE__ */ s.createElement(_e.Header, null, t.title), /* @__PURE__ */ s.createElement(_e.Description, null, t.description))));
}, Ei = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = A(w), a = t.map((i, o) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ s.createElement(rE, {
      result: i,
      key: o,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ s.createElement(E, {
    id: n("ResultsList.container", r),
    results: a
  }, /* @__PURE__ */ s.createElement(_e.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, a));
};
Ei.defaultProps = {
  overridableId: ""
};
var nE = E.component("ResultsList", vi);
const Si = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(nE);
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
  } = A(w);
  return /* @__PURE__ */ s.createElement(E, {
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
var aE = E.component("ResultsLoader", _i);
const iE = R((e) => ({
  loading: e.results.loading
}))(aE);
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
  } = A(w);
  return /* @__PURE__ */ s.createElement(E, {
    id: a("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ s.createElement(Si, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ s.createElement(tE, {
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
var sE = E.component("ResultsMultiLayout", xi);
R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(sE);
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
  } = A(w), c = n.map((u, d) => ({
    key: d,
    text: u.text,
    value: u.value
  }));
  return /* @__PURE__ */ s.createElement(E, {
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
var oE = E.component("ResultsPerPage", wi);
const lE = (e) => ({
  updateQuerySize: (t) => e(lv(t))
}), cE = R((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), lE)(oE);
class Ii extends L {
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
Ii.defaultProps = {
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
const Fi = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ s.createElement(Ii, Object.assign({
    key: t
  }, e));
};
Fi.defaultProps = {
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
    return /* @__PURE__ */ s.createElement(E, {
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
          value: h
        } = p;
        n(h);
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
Pr.contextType = w;
var uE = E.component("SearchBar", Fi);
const dE = (e) => ({
  updateQueryString: (t) => e(Za(t))
}), pE = R((e) => ({
  queryString: e.query.queryString
}), dE)(uE);
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
  } = A(w), d = o(r, n), p = a.map((h, f) => ({
    key: f,
    text: h.text,
    value: h.value
  }));
  return /* @__PURE__ */ s.createElement(E, {
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
    onChange: (h, f) => {
      let {
        value: g
      } = f;
      return i(g);
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
var fE = E.component("Sort", Ai);
const hE = (e) => ({
  updateQuerySorting: (t, r) => e(av(t, r))
});
R((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), hE)(fE);
class ki extends L {
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
ki.defaultProps = {
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
  } = A(w), c = n.map((u, d) => ({
    key: d,
    text: u.text,
    value: u.value
  }));
  return /* @__PURE__ */ s.createElement(E, {
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
var mE = E.component("SortBy", ki);
const gE = (e) => ({
  updateQuerySortBy: (t) => e(iv(t))
}), yE = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), gE)(mE);
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
  } = A(w), c = n.map((u, d) => ({
    key: d,
    text: u.text,
    value: u.value
  }));
  return /* @__PURE__ */ s.createElement(E, {
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
var bE = E.component("SortOrder", Pi);
const vE = (e) => ({
  updateQuerySortOrder: (t) => e(sv(t))
});
R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), vE)(bE);
const Li = (e) => {
  let {
    overridableId: t,
    userSelectionFilters: r,
    title: n,
    label: a,
    filterValue: i,
    updateQueryFilters: o
  } = e;
  const l = (p) => p.filter((f) => f[0] === i[0]).length > 0, c = () => {
    o(i);
  }, {
    buildUID: u
  } = A(w), d = l(r);
  return /* @__PURE__ */ s.createElement(E, {
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
Li.defaultProps = {
  overridableId: ""
};
var EE = E.component("SearchFilters.Toggle", Li);
const SE = (e) => ({
  updateQueryFilters: (t) => e(Ar(t))
});
R((e) => ({
  userSelectionFilters: e.query.filters
}), SE)(EE);
function Wt(e) {
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
function Tn(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function wE(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = Tn(r % 52) + t;
  return Tn(r % 52) + t;
}
function TE(e, t) {
  let r = t.length;
  for (; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function IE(e) {
  return wE(TE(5381, e) >>> 0);
}
var Ni = /\s*!(important)?/i;
function FE(e) {
  return typeof e == "string" ? Ni.test(e) : !1;
}
function AE(e) {
  return typeof e == "string" ? e.replace(Ni, "").trim() : e;
}
function Bi(e) {
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
}, OE = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function Ui(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((n) => {
    if (OE.has(n))
      return;
    const a = t[n], i = r[n];
    Wt(a) && Wt(i) ? t[n] = Ui(a, i) : t[n] = i;
  }), t), {});
}
var kE = (e) => e != null;
function zi(e, t, r = {}) {
  const { stop: n, getKey: a } = r;
  function i(o, l = []) {
    if (_E(o)) {
      const c = {};
      for (const [u, d] of Object.entries(o)) {
        const p = (a == null ? void 0 : a(u, d)) ?? u, h = [...l, p];
        if (n != null && n(o, h))
          return t(o, l);
        const f = i(d, h);
        kE(f) && (c[p] = f);
      }
      return c;
    }
    return t(o, l);
  }
  return i(e);
}
function RE(e, t) {
  return e.reduce(
    (r, n, a) => {
      const i = t[a];
      return n != null && (r[i] = n), r;
    },
    {}
  );
}
function Mi(e, t, r = !0) {
  const { utility: n, conditions: a } = t, { hasShorthand: i, resolveShorthand: o } = n;
  return zi(
    e,
    (l) => Array.isArray(l) ? RE(l, a.breakpoints.keys) : l,
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
      c = a(t.toHash(u, IE));
    } else
      c = [...n.finalize(o), a(l)].join(":");
    return c;
  };
  return Dr(({ base: o, ...l } = {}) => {
    const c = Object.assign(l, o), u = Mi(c, e), d = /* @__PURE__ */ new Set();
    return zi(u, (p, h) => {
      if (p == null)
        return;
      const f = FE(p), [g, ...m] = n.shift(h), v = CE(m), y = t.transform(g, AE(DE(p)));
      let S = i(v, y.className);
      f && (S = `${S}!`), d.add(S);
    }), Array.from(d).join(" ");
  });
}
function NE(...e) {
  return e.flat().filter((t) => Wt(t) && Object.keys($E(t)).length > 0);
}
function BE(e) {
  function t(a) {
    const i = NE(...a);
    return i.length === 1 ? i : i.map((o) => Mi(o, e));
  }
  function r(...a) {
    return Ui(...t(a));
  }
  function n(...a) {
    return Object.assign({}, ...t(a));
  }
  return { mergeCss: Dr(r), assignCss: n };
}
var UE = /([A-Z])/g, zE = /^ms-/, ME = Dr((e) => e.startsWith("--") ? e : e.replace(UE, "-$1").replace(zE, "-ms-").toLowerCase()), jE = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${jE.split(",").join("|")}`;
const QE = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", ji = new Set(QE.split(",")), qE = /^@|&|&$/;
function In(e) {
  return ji.has(e) || qE.test(e);
}
const VE = /^_/, GE = /&|@/;
function HE(e) {
  return e.map((t) => ji.has(t) ? t.replace(VE, "") : GE.test(t) ? `[${Bi(t.trim())}]` : t);
}
function YE(e) {
  return e.sort((t, r) => {
    const n = In(t), a = In(r);
    return n && !a ? 1 : !n && a ? -1 : 0;
  });
}
const WE = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle", Qi = /* @__PURE__ */ new Map(), qi = /* @__PURE__ */ new Map();
WE.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [n, ...a] = r.split("/");
  Qi.set(t, n), a.length && a.forEach((i) => {
    qi.set(i === "1" ? n : i, t);
  });
});
const Fn = (e) => qi.get(e) || e, Vi = {
  conditions: {
    shift: YE,
    finalize: HE,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = Fn(e);
      return { className: `${Qi.get(r) || ME(r)}_${Bi(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: Fn
  }
}, KE = LE(Vi), b = (...e) => KE(Gi(...e));
b.raw = (...e) => Gi(...e);
const { mergeCss: Gi, assignCss: OC } = BE(Vi), An = {
  header: b({
    fontSize: "1.1rem !important"
  }),
  container: b({
    padding: "1rem"
  })
}, XE = ({
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
}, ZE = ({ bucket: e, label: t, onFilterClicked: r, isSelected: n, childAggCmps: a }) => /* @__PURE__ */ s.createElement("div", { className: On.checkboxContainer }, /* @__PURE__ */ s.createElement(
  lr,
  {
    checked: n,
    onChange: () => r(e.key),
    label: t
  }
), /* @__PURE__ */ s.createElement(M, { circular: !0, size: "mini" }, e.doc_count), a && a.length > 0 && /* @__PURE__ */ s.createElement("div", { className: On.childAggContainer }, a)), Hi = s.createContext(
  null
), JE = ({ config: e, children: t, updateQueryState: r, currentQueryState: n }) => {
  const a = k(() => {
    r({
      ...n,
      queryString: n.queryString
    });
  }, [r, n]);
  return /* @__PURE__ */ s.createElement(Hi.Provider, { value: { config: e, refreshSearch: a } }, t);
}, eS = Rr(JE), Ke = () => {
  const e = s.useContext(Hi);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
}, tS = {
  spinnerIcon: b({
    marginInlineEnd: "0.5rem"
  })
}, Yi = ({
  progress: e,
  showPercentage: t = !1
}) => /* @__PURE__ */ s.createElement(or, null, Object.entries(e).map(([r, n]) => /* @__PURE__ */ s.createElement(q.Inline, { basic: !0, key: r }, /* @__PURE__ */ s.createElement(_, { name: "spinner", loading: !0, className: tS.spinnerIcon }), /* @__PURE__ */ s.createElement("strong", null, r), " ", t ? `${n}%` : null))), Wi = () => /* @__PURE__ */ s.createElement(q, { basic: !0, padded: "very" }, /* @__PURE__ */ s.createElement(ao, { active: !0, inverted: !0 }, /* @__PURE__ */ s.createElement(ia, { inverted: !0 }, "Loading"))), rS = ({ status: e, ...t }) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ s.createElement(_, { name: "close", color: "red", ...t }) : e === "success" || e === "created" ? /* @__PURE__ */ s.createElement(_, { name: "check circle", color: "green", ...t }) : e === "importing" || e === "validating" ? /* @__PURE__ */ s.createElement(_, { name: "spinner", loading: !0, ...t }) : e === "validated" ? /* @__PURE__ */ s.createElement(_, { name: "check circle", color: "blue", ...t }) : /* @__PURE__ */ s.createElement(_, { ...t }), Ki = ({
  status: e,
  children: t,
  ...r
}) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ s.createElement(M, { color: "red", ...r }, /* @__PURE__ */ s.createElement(_, { name: "warning sign" }), t) : e === "success" || e === "validated" || e === "created" ? /* @__PURE__ */ s.createElement(M, { color: "green", ...r }, /* @__PURE__ */ s.createElement(_, { name: "check circle" }), t) : e === "importing" || e === "validating" ? /* @__PURE__ */ s.createElement(M, { color: "blue", ...r }, /* @__PURE__ */ s.createElement(_, { name: "spinner", loading: !0 }), t) : /* @__PURE__ */ s.createElement(M, { ...r }, t), Me = (e) => (e == null ? void 0 : e.charAt(0).toUpperCase()) + (e == null ? void 0 : e.slice(1)) || "";
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
var nS = Xi.exports;
const aS = /* @__PURE__ */ P(nS), Zi = (e) => e.reduce((t, r) => t + r.file.size, 0), Ji = (e) => Lr(Zi(e)), Lr = (e) => {
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
}), es = (e) => e.split("_").map((t, r) => t === "doi" ? "DOI" : r === 0 ? `${t.charAt(0).toUpperCase()}${t.slice(1)}` : t).join(" ");
var ts = { exports: {} };
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
            var h = JSON.stringify(d);
            /^[\{\[]/.test(h) && (d = h);
          } catch {
          }
          d = i.write ? i.write(d, u) : encodeURIComponent(String(d)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), u = encodeURIComponent(String(u)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var f = "";
          for (var g in p)
            p[g] && (f += "; " + g, p[g] !== !0 && (f += "=" + p[g].split(";")[0]));
          return document.cookie = u + "=" + d + f;
        }
      }
      function c(u, d) {
        if (!(typeof document > "u")) {
          for (var p = {}, h = document.cookie ? document.cookie.split("; ") : [], f = 0; f < h.length; f++) {
            var g = h[f].split("="), m = g.slice(1).join("=");
            !d && m.charAt(0) === '"' && (m = m.slice(1, -1));
            try {
              var v = n(g[0]);
              if (m = (i.read || i)(m, v) || n(m), d)
                try {
                  m = JSON.parse(m);
                } catch {
                }
              if (p[v] = m, u === v)
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
})(ts);
var iS = ts.exports;
const sS = /* @__PURE__ */ P(iS), oS = () => sS.get("csrftoken") || null, lS = (e) => {
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
}, kC = (e) => new Ua(e), RC = (e, t = {}, r = !0) => ({
  axios: {
    url: e,
    headers: {
      Accept: "application/vnd.inveniordm.v1+json",
      ...t
    },
    withCredentials: r
  }
}), G = nt.create({
  baseURL: "https://127.0.0.1:5000",
  timeout: 3e4,
  withCredentials: !0,
  // Include cookies in requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
G.interceptors.request.use(
  (e) => {
    const t = oS();
    return t && (e.headers["X-CSRFTOKEN"] = t), e;
  },
  (e) => Promise.reject(e)
);
const rs = async (e, t) => {
  try {
    const r = await G.put(
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
}, cS = async (e, t) => {
  try {
    const r = await G.post(
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
}, uS = async (e) => {
  const t = {
    title: e.title,
    description: e.description,
    mode: e.mode,
    status: e.status,
    record_type: e.recordType,
    serializer: e.serializer,
    options: e.options,
    start_time: e.startTime,
    end_time: e.endTime
  };
  try {
    const r = await G.post(
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
}, dS = async (e) => {
  try {
    const t = await G.delete(`/api/importer-tasks/${e}`);
    return t.status === 204 ? !0 : (console.error(`Failed to delete task: ${t.statusText}`), !1);
  } catch (t) {
    return console.error(
      `Error deleting task: ${t instanceof Error ? t.message : "Unknown error"}`
    ), !1;
  }
}, ns = async (e) => {
  try {
    const t = await G.post(
      `/api/importer-tasks/${e}/load`
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error executing bulk import:", t), new Error("Failed to execute bulk import");
  }
}, pS = async () => {
  try {
    const e = await G.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, fS = async (e) => {
  try {
    const t = await G.get(
      `/api/importer-tasks/config/${e}`
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error fetching serializers:", t), new Error("Failed to fetch serializers");
  }
}, je = async (e) => {
  try {
    const t = await G.put(
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
}, hS = async (e, t) => {
  const r = t.map((n) => ({
    key: n
  }));
  try {
    const n = await G.post(
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
}, mS = async (e, t, r) => {
  try {
    const n = await G.put(
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
}, as = async (e) => {
  try {
    const t = await G.post(
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
}, is = async (e, t = {}) => {
  const { autoExecute: r = !1, onProgress: n, onError: a } = t;
  try {
    n == null || n("Validating", 0), await as(e), n == null || n("Validating", 50);
    let i = await je(e);
    return n == null || n("Validating", 100), r && (i.status === "validated" || i.status === "validated with failures") && (n == null || n("Executing", 0), await ns(e), n == null || n("Executing", 50), i = await je(e), n == null || n("Executing", 100)), i;
  } catch (i) {
    const o = i instanceof Error ? i : new Error("Unknown error during workflow execution");
    throw a == null || a(o, "Executing"), o;
  }
}, ss = async (e, t, r) => {
  if (!t || t.length === 0)
    return;
  const n = t.map((a) => a.name);
  await hS(e, n);
  for (const a of t)
    try {
      r == null || r({
        fileName: a.name,
        loaded: 0,
        total: a.size,
        percentage: 0
      }), await mS(e, a.name, a), r == null || r({
        fileName: a.name,
        loaded: a.size,
        total: a.size,
        percentage: 90
      }), await cS(e, a.name), r == null || r({
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
}, gS = async (e, t, r, n = {}) => {
  const {
    autoValidate: a = !1,
    autoExecute: i = !1,
    onProgress: o,
    onError: l
  } = n;
  try {
    o == null || o("Creating Task", 0);
    const c = await uS(e);
    if (!c)
      throw new Error("Failed to create import task");
    return o == null || o("Creating Task", 100), t && (o == null || o("Uploading Metadata", 0), await rs(c.id, t), o == null || o("Uploading Metadata", 100)), r && r.length > 0 && await ss(c.id, r, (u) => {
      o == null || o("Uploading Files", u.percentage);
    }), a && t && await is(c.id, {
      autoExecute: i,
      onProgress: o,
      onError: l
    }), c;
  } catch (c) {
    const u = c instanceof Error ? c : new Error("Unknown error during task creation");
    throw l == null || l(u, "Creating Task"), u;
  }
}, yS = async (e, t, r, n = {}) => {
  const { onProgress: a, onError: i } = n;
  try {
    a == null || a("Updating", 0), t && (a == null || a("Updating Metadata", 0), await rs(e, t), a == null || a("Updating Metadata", 100)), r && r.length > 0 && await ss(e, r, (o) => {
      a == null || a("Updating Files", o.percentage);
    }), a == null || a("Updating", 100);
  } catch (o) {
    const l = o instanceof Error ? o : new Error("Unknown error during task update");
    throw i == null || i(l, "Updating"), l;
  }
}, bS = async (e) => {
  try {
    const t = await G.post(
      `/api/importer-records/${e}/run`,
      {}
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Failed to fetch import records: ${t.statusText}`);
  } catch (t) {
    throw console.error("Failed to fetch import records:", t), t;
  }
}, os = (e, t = {}) => {
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
  } = t, h = k(() => {
    n((y) => ({ ...y, error: null }));
  }, []), f = k(async () => {
    n((y) => ({ ...y, isDeleting: !0, error: null }));
    try {
      if (!await dS(e))
        throw new Error(`Failed to delete task ${e}`);
      a == null || a();
    } catch (y) {
      const S = y instanceof Error ? y : new Error("Unknown error");
      throw n((x) => ({ ...x, error: S })), i == null || i(S), S;
    } finally {
      n((y) => ({ ...y, isDeleting: !1 }));
    }
  }, [e, a, i]), g = k(async () => {
    n((y) => ({ ...y, isValidating: !0, error: null }));
    try {
      const y = await as(e);
      if (!y)
        throw new Error(`Validation failed for task ${e}`);
      return o == null || o(y), await je(e), y;
    } catch (y) {
      const S = y instanceof Error ? y : new Error("Unknown error");
      throw n((x) => ({ ...x, error: S })), l == null || l(S), S;
    } finally {
      n((y) => ({ ...y, isValidating: !1 }));
    }
  }, [e, o, l]), m = k(async () => {
    n((y) => ({ ...y, isBulkImporting: !0, error: null }));
    try {
      const y = await ns(e);
      if (!y)
        throw new Error(`Failed to execute bulk import for task ${e}`);
      return c == null || c(y), await je(e), y;
    } catch (y) {
      const S = y instanceof Error ? y : new Error("Unknown error");
      throw n((x) => ({ ...x, error: S })), u == null || u(S), S;
    } finally {
      n((y) => ({ ...y, isBulkImporting: !1 }));
    }
  }, [e, c, u]), v = k(async () => {
    n((y) => ({ ...y, isGettingStatus: !0, error: null }));
    try {
      const y = await je(e);
      if (!y)
        throw new Error(`Failed to retrieve status for task ${e}`);
      return n((S) => ({ ...S, error: null })), d == null || d(y), y;
    } catch (y) {
      const S = y instanceof Error ? y : new Error("Unknown error");
      throw n((x) => ({ ...x, error: S })), p == null || p(S), S;
    } finally {
      n((y) => ({ ...y, isGettingStatus: !1 }));
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
    deleteTask: f,
    validateTask: g,
    runBulkImport: m,
    getStatus: v,
    clearError: h
  };
}, Le = {
  actionsCell: b({
    inlineSize: "15rem",
    whiteSpace: "nowrap"
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
    gap: "0.8rem",
    flexWrap: "nowrap",
    minWidth: 0
  }),
  statusCell: b({
    whiteSpace: "nowrap"
  })
}, vS = ({ result: e, index: t }) => {
  var g;
  const { config: r, refreshSearch: n } = Ke(), {
    deleteTask: a,
    runBulkImport: i,
    getStatus: o,
    isDeleting: l,
    isValidating: c,
    isBulkImporting: u,
    isGettingStatus: d,
    error: p,
    clearError: h
  } = os(e.id, {
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
  const f = l || c || u || d;
  return /* @__PURE__ */ s.createElement(mt, { key: t }, /* @__PURE__ */ s.createElement(Y, null, /* @__PURE__ */ s.createElement("a", { href: `${r.resultPath}/${e.id}` }, e.title || "No title")), /* @__PURE__ */ s.createElement(Y, null, Kt(e.created)), /* @__PURE__ */ s.createElement(Y, { className: Le.statusCell }, /* @__PURE__ */ s.createElement(Ki, { status: e.status }, Me(e.status))), /* @__PURE__ */ s.createElement(Y, null, /* @__PURE__ */ s.createElement(M, null, Me(e.record_type))), /* @__PURE__ */ s.createElement(Y, null, ((g = e.records_status) == null ? void 0 : g.total_records) ?? 0), /* @__PURE__ */ s.createElement(Y, null, e.serializer), /* @__PURE__ */ s.createElement(Y, null, Me(e.mode)), /* @__PURE__ */ s.createElement(Y, { className: Le.actionsCell }, p && /* @__PURE__ */ s.createElement("div", { className: Le.errorContainer }, p.message, /* @__PURE__ */ s.createElement(
    z,
    {
      onClick: h,
      className: Le.clearErrorButton,
      size: "mini",
      basic: !0
    },
    "Clear"
  )), /* @__PURE__ */ s.createElement("div", { className: Le.actionsContainer }, /* @__PURE__ */ s.createElement(
    ce,
    {
      text: f ? "Processing..." : "Actions",
      floating: !0,
      labeled: !0,
      className: "icon",
      disabled: f,
      options: [
        {
          key: "load",
          text: "Run",
          value: "load",
          disabled: f,
          onClick: () => i()
        },
        {
          key: "status",
          text: "Refresh Status",
          value: "status",
          disabled: f,
          onClick: () => o()
        },
        {
          key: "delete",
          text: "Delete",
          value: "delete",
          disabled: f,
          onClick: () => a()
        }
      ]
    }
  ), /* @__PURE__ */ s.createElement(
    z,
    {
      basic: !0,
      size: "tiny",
      disabled: f,
      as: "a",
      href: `${r.resultPath}/${e.id}`
    },
    /* @__PURE__ */ s.createElement(_, { name: "eye" }),
    "View"
  ))));
}, ES = ({ children: e }) => /* @__PURE__ */ s.createElement(I, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ s.createElement(sa, null, /* @__PURE__ */ s.createElement(mt, null, /* @__PURE__ */ s.createElement(W, null, "Title"), /* @__PURE__ */ s.createElement(W, null, "Date Created"), /* @__PURE__ */ s.createElement(W, null, "Status"), /* @__PURE__ */ s.createElement(W, null, "Type"), /* @__PURE__ */ s.createElement(W, null, "Items"), /* @__PURE__ */ s.createElement(W, null, "Serializer"), /* @__PURE__ */ s.createElement(W, null, "Mode"), /* @__PURE__ */ s.createElement(W, null, "Actions"))), /* @__PURE__ */ s.createElement(oa, null, e)), SS = {
  container: b({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  })
}, _S = ({
  currentResultsState: e,
  currentQueryState: t
}) => {
  const r = e.data.total, n = t.size;
  return r ? n ? n > r ? /* @__PURE__ */ s.createElement(M, null, "Showing ", /* @__PURE__ */ s.createElement("strong", null, r), " result(s) found") : /* @__PURE__ */ s.createElement(M, { className: SS.container }, "Showing ", /* @__PURE__ */ s.createElement("strong", null, n), " of ", /* @__PURE__ */ s.createElement("strong", null, r), " ", "result(s) found") : null : /* @__PURE__ */ s.createElement(M, null, "No results found");
}, $S = Rr(_S), xS = [
  { text: "Newest", value: "newest" },
  { text: "Oldest", value: "oldest" }
], kn = {
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
}, CS = () => /* @__PURE__ */ s.createElement("div", { className: kn.container }, /* @__PURE__ */ s.createElement($S, null), /* @__PURE__ */ s.createElement("div", { className: kn.sortByContainer }, /* @__PURE__ */ s.createElement(yE, { values: xS }))), ie = {
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
}, Rn = {
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
}, Ee = {
  optionsSection: b({
    marginBlockEnd: "1rem"
  }),
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
}, wS = () => {
  const [e, t] = N(
    {}
  ), [r, n] = N(!0), a = ra(""), { values: i, submitForm: o, isSubmitting: l, isValid: c, setFieldValue: u } = vo(), d = k(async () => {
    try {
      const f = await pS(), g = {};
      for (const m of f) {
        const v = await fS(m);
        v && (g[m] = v);
      }
      t(g);
    } catch (f) {
      console.error("Error fetching record types:", f);
    } finally {
      n(!1);
    }
  }, []), p = (f) => {
    var m;
    const g = ((m = f.target.files) == null ? void 0 : m[0]) || null;
    u("metadata", g);
  }, h = (f) => {
    u("files", f);
  };
  return we(() => {
    d();
  }, [d]), we(() => {
    var g;
    const f = i.task.recordType;
    if (f !== a.current) {
      if (a.current = f, u("task.serializer", ""), !f) {
        u("task.options", {});
        return;
      }
      u("task.options", {
        ...((g = e[f]) == null ? void 0 : g.options) || {}
      });
    }
  }, [e, u, i.task.recordType]), {
    configs: e,
    isLoading: r,
    values: i,
    submitForm: o,
    setFieldValue: u,
    handleFileChange: p,
    handleFilesChange: h,
    isSubmitting: l,
    isValid: c
  };
}, TS = ({ progress: e }) => {
  var d;
  const {
    configs: t,
    isLoading: r,
    submitForm: n,
    handleFileChange: a,
    handleFilesChange: i,
    values: o,
    isSubmitting: l,
    isValid: c
  } = wS(), u = o.task.recordType ? ((d = t[o.task.recordType]) == null ? void 0 : d.options) || {} : {};
  return r ? /* @__PURE__ */ s.createElement(Wi, null) : !t || Object.keys(t).length === 0 ? /* @__PURE__ */ s.createElement("p", null, "No record types available.") : /* @__PURE__ */ s.createElement(or, null, /* @__PURE__ */ s.createElement(
    mo,
    {
      fieldPath: "task.title",
      label: "Title",
      placeholder: "Enter a title for the import task",
      required: !0
    }
  ), /* @__PURE__ */ s.createElement(ge.Group, { widths: "equal" }, /* @__PURE__ */ s.createElement(
    Pt,
    {
      fieldPath: "task.recordType",
      label: "Record Type",
      options: Object.keys(t).map((p) => ({
        key: p,
        value: p,
        text: p
      })),
      placeholder: "Select Record Type",
      required: !0
    }
  ), /* @__PURE__ */ s.createElement(
    Pt,
    {
      fieldPath: "task.serializer",
      label: "Serializer",
      options: o.task.recordType && t[o.task.recordType] ? t[o.task.recordType].serializers.map((p) => ({
        key: p,
        value: p,
        text: p
      })) : [],
      placeholder: "Select Serializer",
      disabled: !o.task.recordType,
      required: !0
    }
  ), /* @__PURE__ */ s.createElement(
    Pt,
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
  )), Object.keys(u).length > 0 && /* @__PURE__ */ s.createElement(ge.Field, { className: Ee.optionsSection }, /* @__PURE__ */ s.createElement("label", null, "Options"), Object.keys(u).map((p) => /* @__PURE__ */ s.createElement(
    go,
    {
      key: p,
      fieldPath: `task.options.${p}`,
      label: es(p)
    }
  ))), /* @__PURE__ */ s.createElement(ge.Field, null, /* @__PURE__ */ s.createElement("label", { htmlFor: "file-input" }, "Metadata File"), /* @__PURE__ */ s.createElement(
    "input",
    {
      id: "file-input",
      type: "file",
      accept: ".csv",
      onChange: a,
      className: Ee.fileInput
    }
  ), o.metadata && /* @__PURE__ */ s.createElement("p", { className: Ee.helpText }, "Selected: ", o.metadata.name), /* @__PURE__ */ s.createElement("p", { className: Ee.helpText }, "Upload a CSV file containing the records metadata to be imported or deleted.")), /* @__PURE__ */ s.createElement(ge.Field, null, /* @__PURE__ */ s.createElement(
    Ks,
    {
      value: o.files || [],
      onChange: i,
      accept: "*",
      skipEmptyFiles: !0,
      maxTotalSize: 10 * 1024 * 1024 * 1024,
      maxFiles: 100
    }
  ), /* @__PURE__ */ s.createElement("p", { className: Ee.helpText }, "Upload files related to the records. You can upload multiple files, and they will be associated with the import task.")), /* @__PURE__ */ s.createElement(
    yo,
    {
      fieldPath: "task.description",
      label: "Notes",
      placeholder: "Enter a description for the import task",
      rows: 3
    }
  ), /* @__PURE__ */ s.createElement("div", { className: Ee.buttonContainer }, e && /* @__PURE__ */ s.createElement(Yi, { progress: e }), /* @__PURE__ */ s.createElement(
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
function ls(e, t, r) {
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
      n[a] = i > -1 ? r[i] : ls(e[a], t, r);
    }
    return n;
  }
  return e;
}
function Jt(e) {
  return ls(e, [], []);
}
const IS = Object.prototype.toString, FS = Error.prototype.toString, AS = RegExp.prototype.toString, OS = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", kS = /^Symbol\((.*)\)(.*)$/;
function RS(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Pn(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return RS(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return OS.call(e).replace(kS, "Symbol($1)");
  const n = IS.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + FS.call(e) + "]" : n === "RegExp" ? AS.call(e) : null;
}
function Qe(e, t) {
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
    let a = n != null && n !== r, i = `${e} must be a \`${t}\` type, but the final value was: \`${Qe(r, !0)}\`` + (a ? ` (cast from the value \`${Qe(n, !0)}\`).` : ".");
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
}, PS = {
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
}, DS = {
  isValue: "${path} field must be ${value}"
}, tr = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, LS = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: me,
  string: Z,
  number: PS,
  date: er,
  object: tr,
  array: LS,
  boolean: DS
});
var NS = Object.prototype, BS = NS.hasOwnProperty;
function US(e, t) {
  return e != null && BS.call(e, t);
}
var zS = US, MS = zS, jS = Ea;
function QS(e, t) {
  return e != null && jS(e, t, MS);
}
var qS = QS;
const dt = /* @__PURE__ */ P(qS), cs = (e) => e && e.__isYupSchema__;
class VS {
  constructor(t, r) {
    if (this.fn = void 0, this.refs = t, this.refs = t, typeof r == "function") {
      this.fn = r;
      return;
    }
    if (!dt(r, "is"))
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
    if (!cs(a))
      throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
function us(e) {
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
let GS = /\$\{\s*(\w+)\s*\}/g;
class Q extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = rr({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(GS, (a, i) => Qe(r[i])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], us(t).forEach((i) => {
      Q.isError(i) ? (this.errors.push(...i.errors), this.inner = this.inner.concat(i.inner.length ? i.inner : i)) : this.errors.push(i);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, Q);
  }
}
const HS = (e) => {
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
  } = e, u = HS(t), d = n.length;
  const p = [];
  if (o = o || [], !d)
    return o.length ? u(new Q(o, i, c)) : u(null, i);
  for (let h = 0; h < n.length; h++) {
    const f = n[h];
    f(a, function(m) {
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
function YS(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), l = o.length; l--; ) {
      var c = o[e ? l : ++a];
      if (r(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var WS = YS, KS = WS, XS = KS(), ZS = XS, JS = ZS, e0 = Ye;
function t0(e, t) {
  return e && JS(e, t, e0);
}
var ds = t0, r0 = "__lodash_hash_undefined__";
function n0(e) {
  return this.__data__.set(e, r0), this;
}
var a0 = n0;
function i0(e) {
  return this.__data__.has(e);
}
var s0 = i0, o0 = gr, l0 = a0, c0 = s0;
function pt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new o0(); ++t < r; )
    this.add(e[t]);
}
pt.prototype.add = pt.prototype.push = l0;
pt.prototype.has = c0;
var u0 = pt;
function d0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var p0 = d0;
function f0(e, t) {
  return e.has(t);
}
var h0 = f0, m0 = u0, g0 = p0, y0 = h0, b0 = 1, v0 = 2;
function E0(e, t, r, n, a, i) {
  var o = r & b0, l = e.length, c = t.length;
  if (l != c && !(o && c > l))
    return !1;
  var u = i.get(e), d = i.get(t);
  if (u && d)
    return u == t && d == e;
  var p = -1, h = !0, f = r & v0 ? new m0() : void 0;
  for (i.set(e, t), i.set(t, e); ++p < l; ) {
    var g = e[p], m = t[p];
    if (n)
      var v = o ? n(m, g, p, t, e, i) : n(g, m, p, e, t, i);
    if (v !== void 0) {
      if (v)
        continue;
      h = !1;
      break;
    }
    if (f) {
      if (!g0(t, function(y, S) {
        if (!y0(f, S) && (g === y || a(g, y, r, n, i)))
          return f.push(S);
      })) {
        h = !1;
        break;
      }
    } else if (!(g === m || a(g, m, r, n, i))) {
      h = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), h;
}
var ps = E0;
function S0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var _0 = S0;
function $0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var x0 = $0, Dn = Ie, Ln = Oa, C0 = St, w0 = ps, T0 = _0, I0 = x0, F0 = 1, A0 = 2, O0 = "[object Boolean]", k0 = "[object Date]", R0 = "[object Error]", P0 = "[object Map]", D0 = "[object Number]", L0 = "[object RegExp]", N0 = "[object Set]", B0 = "[object String]", U0 = "[object Symbol]", z0 = "[object ArrayBuffer]", M0 = "[object DataView]", Nn = Dn ? Dn.prototype : void 0, Nt = Nn ? Nn.valueOf : void 0;
function j0(e, t, r, n, a, i, o) {
  switch (r) {
    case M0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case z0:
      return !(e.byteLength != t.byteLength || !i(new Ln(e), new Ln(t)));
    case O0:
    case k0:
    case D0:
      return C0(+e, +t);
    case R0:
      return e.name == t.name && e.message == t.message;
    case L0:
    case B0:
      return e == t + "";
    case P0:
      var l = T0;
    case N0:
      var c = n & F0;
      if (l || (l = I0), e.size != t.size && !c)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= A0, o.set(e, t);
      var d = w0(l(e), l(t), n, a, i, o);
      return o.delete(e), d;
    case U0:
      if (Nt)
        return Nt.call(e) == Nt.call(t);
  }
  return !1;
}
var Q0 = j0, Bn = Aa, q0 = 1, V0 = Object.prototype, G0 = V0.hasOwnProperty;
function H0(e, t, r, n, a, i) {
  var o = r & q0, l = Bn(e), c = l.length, u = Bn(t), d = u.length;
  if (c != d && !o)
    return !1;
  for (var p = c; p--; ) {
    var h = l[p];
    if (!(o ? h in t : G0.call(t, h)))
      return !1;
  }
  var f = i.get(e), g = i.get(t);
  if (f && g)
    return f == t && g == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var v = o; ++p < c; ) {
    h = l[p];
    var y = e[h], S = t[h];
    if (n)
      var x = o ? n(S, y, h, t, e, i) : n(y, S, h, e, t, i);
    if (!(x === void 0 ? y === S || a(y, S, r, n, i) : x)) {
      m = !1;
      break;
    }
    v || (v = h == "constructor");
  }
  if (m && !v) {
    var B = e.constructor, te = t.constructor;
    B != te && "constructor" in e && "constructor" in t && !(typeof B == "function" && B instanceof B && typeof te == "function" && te instanceof te) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var Y0 = H0, Bt = $r, W0 = ps, K0 = Q0, X0 = Y0, Un = qe, zn = V, Mn = vt, Z0 = fr, J0 = 1, jn = "[object Arguments]", Qn = "[object Array]", et = "[object Object]", e_ = Object.prototype, qn = e_.hasOwnProperty;
function t_(e, t, r, n, a, i) {
  var o = zn(e), l = zn(t), c = o ? Qn : Un(e), u = l ? Qn : Un(t);
  c = c == jn ? et : c, u = u == jn ? et : u;
  var d = c == et, p = u == et, h = c == u;
  if (h && Mn(e)) {
    if (!Mn(t))
      return !1;
    o = !0, d = !1;
  }
  if (h && !d)
    return i || (i = new Bt()), o || Z0(e) ? W0(e, t, r, n, a, i) : K0(e, t, c, r, n, a, i);
  if (!(r & J0)) {
    var f = d && qn.call(e, "__wrapped__"), g = p && qn.call(t, "__wrapped__");
    if (f || g) {
      var m = f ? e.value() : e, v = g ? t.value() : t;
      return i || (i = new Bt()), a(m, v, r, n, i);
    }
  }
  return h ? (i || (i = new Bt()), X0(e, t, r, n, a, i)) : !1;
}
var r_ = t_, n_ = r_, Vn = ne;
function fs(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Vn(e) && !Vn(t) ? e !== e && t !== t : n_(e, t, r, n, fs, a);
}
var hs = fs, a_ = $r, i_ = hs, s_ = 1, o_ = 2;
function l_(e, t, r, n) {
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
      var p = new a_();
      if (n)
        var h = n(u, d, c, e, t, p);
      if (!(h === void 0 ? i_(d, u, s_ | o_, n, p) : h))
        return !1;
    }
  }
  return !0;
}
var c_ = l_, u_ = se;
function d_(e) {
  return e === e && !u_(e);
}
var ms = d_, p_ = ms, f_ = Ye;
function h_(e) {
  for (var t = f_(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, p_(a)];
  }
  return t;
}
var m_ = h_;
function g_(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var gs = g_, y_ = c_, b_ = m_, v_ = gs;
function E_(e) {
  var t = b_(e);
  return t.length == 1 && t[0][2] ? v_(t[0][0], t[0][1]) : function(r) {
    return r === e || y_(r, e, t);
  };
}
var S_ = E_, __ = hs, $_ = va, x_ = vr, C_ = mr, w_ = ms, T_ = gs, I_ = Ge, F_ = 1, A_ = 2;
function O_(e, t) {
  return C_(e) && w_(t) ? T_(I_(e), t) : function(r) {
    var n = $_(r, e);
    return n === void 0 && n === t ? x_(r, e) : __(t, n, F_ | A_);
  };
}
var k_ = O_;
function R_(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var P_ = R_, D_ = br;
function L_(e) {
  return function(t) {
    return D_(t, e);
  };
}
var N_ = L_, B_ = P_, U_ = N_, z_ = mr, M_ = Ge;
function j_(e) {
  return z_(e) ? B_(M_(e)) : U_(e);
}
var Q_ = j_, q_ = S_, V_ = k_, G_ = Sr, H_ = V, Y_ = Q_;
function W_(e) {
  return typeof e == "function" ? e : e == null ? G_ : typeof e == "object" ? H_(e) ? V_(e[0], e[1]) : q_(e) : Y_(e);
}
var ys = W_, K_ = Tt, X_ = ds, Z_ = ys;
function J_(e, t) {
  var r = {};
  return t = Z_(t), X_(e, function(n, a, i) {
    K_(r, a, t(n, a, i));
  }), r;
}
var e$ = J_;
const bs = /* @__PURE__ */ P(e$);
function be(e) {
  this._maxSize = e, this.clear();
}
be.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
be.prototype.get = function(e) {
  return this._values[e];
};
be.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var t$ = /[^.^\]^[]+|(?=\[\]|\.\.)/g, vs = /^\d+$/, r$ = /^\d/, n$ = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, a$ = /^\s*(['"]?)(.*?)(\1)\s*$/, Nr = 512, Gn = new be(Nr), Hn = new be(Nr), Yn = new be(Nr), At = {
  Cache: be,
  split: ar,
  normalizePath: Ut,
  setter: function(e) {
    var t = Ut(e);
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
    var r = Ut(e);
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
      return t + (Br(r) || vs.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    i$(Array.isArray(e) ? e : ar(e), t, r);
  }
};
function Ut(e) {
  return Gn.get(e) || Gn.set(
    e,
    ar(e).map(function(t) {
      return t.replace(a$, "$2");
    })
  );
}
function ar(e) {
  return e.match(t$) || [""];
}
function i$(e, t, r) {
  var n = e.length, a, i, o, l;
  for (i = 0; i < n; i++)
    a = e[i], a && (l$(a) && (a = '"' + a + '"'), l = Br(a), o = !l && /^\d+$/.test(a), t.call(r, a, l, o, i, e));
}
function Br(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function s$(e) {
  return e.match(r$) && !e.match(vs);
}
function o$(e) {
  return n$.test(e);
}
function l$(e) {
  return !Br(e) && (s$(e) || o$(e));
}
const tt = {
  context: "$",
  value: "."
};
class ue {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
      throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === tt.context, this.isValue = this.key[0] === tt.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? tt.context : this.isValue ? tt.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && At.getter(this.path, !0), this.map = r.map;
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
function ft() {
  return ft = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ft.apply(this, arguments);
}
function c$(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function rt(e) {
  function t(r, n) {
    let {
      value: a,
      path: i = "",
      label: o,
      options: l,
      originalValue: c,
      sync: u
    } = r, d = c$(r, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name: p,
      test: h,
      params: f,
      message: g
    } = e;
    let {
      parent: m,
      context: v
    } = l;
    function y(O) {
      return ue.isRef(O) ? O.getValue(a, m, v) : O;
    }
    function S(O = {}) {
      const fe = bs(ft({
        value: a,
        originalValue: c,
        label: o,
        path: O.path || i
      }, f, O.params), y), Xe = new Q(Q.formatError(O.message || g, fe), a, fe.path, O.type || p);
      return Xe.params = fe, Xe;
    }
    let x = ft({
      path: i,
      parent: m,
      type: p,
      createError: S,
      resolve: y,
      options: l,
      originalValue: c
    }, d);
    if (!u) {
      try {
        Promise.resolve(h.call(x, a, x)).then((O) => {
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
      if (B = h.call(x, a, x), typeof ((te = B) == null ? void 0 : te.then) == "function")
        throw new Error(`Validation test of type: "${x.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (O) {
      n(O);
      return;
    }
    Q.isError(B) ? n(B) : B ? n(null, B) : n(S());
  }
  return t.OPTIONS = e, t;
}
let u$ = (e) => e.substr(0, e.length - 1).substr(1);
function d$(e, t, r, n = r) {
  let a, i, o;
  return t ? (At.forEach(t, (l, c, u) => {
    let d = c ? u$(l) : l;
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
class ht {
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
    const t = new ht();
    return t.list = new Set(this.list), t.refs = new Map(this.refs), t;
  }
  merge(t, r) {
    const n = this.clone();
    return t.list.forEach((a) => n.add(a)), t.refs.forEach((a) => n.add(a)), r.list.forEach((a) => n.delete(a)), r.refs.forEach((a) => n.delete(a)), n;
  }
}
function H() {
  return H = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, H.apply(this, arguments);
}
class j {
  constructor(t) {
    this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new ht(), this._blacklist = new ht(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(me.notType);
    }), this.type = (t == null ? void 0 : t.type) || "mixed", this.spec = H({
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
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = H({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Jt(H({}, this.spec, t)), r;
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
    const a = H({}, r.spec, n.spec);
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
    let n = this.resolve(H({
      value: t
    }, r)), a = n._cast(t, r);
    if (t !== void 0 && r.assert !== !1 && n.isType(a) !== !0) {
      let i = Qe(t), o = Qe(a);
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
    c || (d = this._cast(d, H({
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
    }, h = [];
    this._typeError && h.push(this._typeError);
    let f = [];
    this._whitelistError && f.push(this._whitelistError), this._blacklistError && f.push(this._blacklistError), nr({
      args: p,
      value: d,
      path: i,
      sync: a,
      tests: h,
      endEarly: u
    }, (g) => {
      if (g)
        return void n(g, d);
      nr({
        tests: this.tests.concat(f),
        args: p,
        path: i,
        sync: a,
        value: d,
        endEarly: u
      }, n);
    });
  }
  validate(t, r, n) {
    let a = this.resolve(H({}, r, {
      value: t
    }));
    return typeof n == "function" ? a._validate(t, r, n) : new Promise((i, o) => a._validate(t, r, (l, c) => {
      l ? o(l) : i(c);
    }));
  }
  validateSync(t, r) {
    let n = this.resolve(H({}, r, {
      value: t
    })), a;
    return n._validate(t, H({}, r, {
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
    let n = this.clone(), a = rt(r), i = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === r.name && (i || o.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = us(t).map((i) => new ue(i));
    return a.forEach((i) => {
      i.isSibling && n.deps.push(i.key);
    }), n.conditions.push(new VS(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r._typeError = rt({
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
    }), n._whitelistError = rt({
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
    }), n._blacklistError = rt({
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
j.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"])
  j.prototype[`${e}At`] = function(t, r, n = {}) {
    const {
      parent: a,
      parentPath: i,
      schema: o
    } = d$(this, t, r, n.context);
    return o[e](a && a[i], H({}, n, {
      parent: a,
      path: t
    }));
  };
for (const e of ["equals", "is"])
  j.prototype[e] = j.prototype.oneOf;
for (const e of ["not", "nope"])
  j.prototype[e] = j.prototype.notOneOf;
j.prototype.optional = j.prototype.notRequired;
const p$ = j;
p$.prototype;
const J = (e) => e == null;
let f$ = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, h$ = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, m$ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, g$ = (e) => J(e) || e === e.trim(), y$ = {}.toString();
function ze() {
  return new Es();
}
class Es extends j {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === y$ ? t : r;
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
    return this.matches(f$, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = Z.url) {
    return this.matches(h$, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = Z.uuid) {
    return this.matches(m$, {
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
      test: g$
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
ze.prototype = Es.prototype;
var b$ = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function v$(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, a;
  if (a = b$.exec(e)) {
    for (var i = 0, o; o = t[i]; ++i)
      a[o] = +a[o] || 0;
    a[2] = (+a[2] || 1) - 1, a[3] = +a[3] || 1, a[7] = a[7] ? String(a[7]).substr(0, 3) : 0, (a[8] === void 0 || a[8] === "") && (a[9] === void 0 || a[9] === "") ? n = +new Date(a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : (a[8] !== "Z" && a[9] !== void 0 && (r = a[10] * 60 + a[11], a[9] === "+" && (r = 0 - r)), n = Date.UTC(a[1], a[2], a[3], a[4], a[5] + r, a[6], a[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let Ss = /* @__PURE__ */ new Date(""), E$ = (e) => Object.prototype.toString.call(e) === "[object Date]";
class _s extends j {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = v$(t), isNaN(t) ? Ss : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return E$(t) && !isNaN(t.getTime());
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
_s.INVALID_DATE = Ss;
_s.prototype;
function S$(e, t, r, n) {
  var a = -1, i = e == null ? 0 : e.length;
  for (n && i && (r = e[++a]); ++a < i; )
    r = t(r, e[a], a, e);
  return r;
}
var _$ = S$;
function $$(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var x$ = $$, C$ = x$, w$ = {
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
}, T$ = C$(w$), I$ = T$, F$ = I$, A$ = Ve, O$ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, k$ = "\\u0300-\\u036f", R$ = "\\ufe20-\\ufe2f", P$ = "\\u20d0-\\u20ff", D$ = k$ + R$ + P$, L$ = "[" + D$ + "]", N$ = RegExp(L$, "g");
function B$(e) {
  return e = A$(e), e && e.replace(O$, F$).replace(N$, "");
}
var U$ = B$, z$ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function M$(e) {
  return e.match(z$) || [];
}
var j$ = M$, Q$ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function q$(e) {
  return Q$.test(e);
}
var V$ = q$, $s = "\\ud800-\\udfff", G$ = "\\u0300-\\u036f", H$ = "\\ufe20-\\ufe2f", Y$ = "\\u20d0-\\u20ff", W$ = G$ + H$ + Y$, xs = "\\u2700-\\u27bf", Cs = "a-z\\xdf-\\xf6\\xf8-\\xff", K$ = "\\xac\\xb1\\xd7\\xf7", X$ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Z$ = "\\u2000-\\u206f", J$ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ws = "A-Z\\xc0-\\xd6\\xd8-\\xde", e1 = "\\ufe0e\\ufe0f", Ts = K$ + X$ + Z$ + J$, Is = "['’]", Wn = "[" + Ts + "]", t1 = "[" + W$ + "]", Fs = "\\d+", r1 = "[" + xs + "]", As = "[" + Cs + "]", Os = "[^" + $s + Ts + Fs + xs + Cs + ws + "]", n1 = "\\ud83c[\\udffb-\\udfff]", a1 = "(?:" + t1 + "|" + n1 + ")", i1 = "[^" + $s + "]", ks = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rs = "[\\ud800-\\udbff][\\udc00-\\udfff]", $e = "[" + ws + "]", s1 = "\\u200d", Kn = "(?:" + As + "|" + Os + ")", o1 = "(?:" + $e + "|" + Os + ")", Xn = "(?:" + Is + "(?:d|ll|m|re|s|t|ve))?", Zn = "(?:" + Is + "(?:D|LL|M|RE|S|T|VE))?", Ps = a1 + "?", Ds = "[" + e1 + "]?", l1 = "(?:" + s1 + "(?:" + [i1, ks, Rs].join("|") + ")" + Ds + Ps + ")*", c1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", u1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", d1 = Ds + Ps + l1, p1 = "(?:" + [r1, ks, Rs].join("|") + ")" + d1, f1 = RegExp([
  $e + "?" + As + "+" + Xn + "(?=" + [Wn, $e, "$"].join("|") + ")",
  o1 + "+" + Zn + "(?=" + [Wn, $e + Kn, "$"].join("|") + ")",
  $e + "?" + Kn + "+" + Xn,
  $e + "+" + Zn,
  u1,
  c1,
  Fs,
  p1
].join("|"), "g");
function h1(e) {
  return e.match(f1) || [];
}
var m1 = h1, g1 = j$, y1 = V$, b1 = Ve, v1 = m1;
function E1(e, t, r) {
  return e = b1(e), t = r ? void 0 : t, t === void 0 ? y1(e) ? v1(e) : g1(e) : e.match(t) || [];
}
var S1 = E1, _1 = _$, $1 = U$, x1 = S1, C1 = "['’]", w1 = RegExp(C1, "g");
function T1(e) {
  return function(t) {
    return _1(x1($1(t).replace(w1, "")), e, "");
  };
}
var Ls = T1, I1 = Ls, F1 = I1(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), A1 = F1;
const Jn = /* @__PURE__ */ P(A1);
function O1(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + t];
  return i;
}
var k1 = O1, R1 = k1;
function P1(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : R1(e, t, r);
}
var D1 = P1, L1 = "\\ud800-\\udfff", N1 = "\\u0300-\\u036f", B1 = "\\ufe20-\\ufe2f", U1 = "\\u20d0-\\u20ff", z1 = N1 + B1 + U1, M1 = "\\ufe0e\\ufe0f", j1 = "\\u200d", Q1 = RegExp("[" + j1 + L1 + z1 + M1 + "]");
function q1(e) {
  return Q1.test(e);
}
var Ns = q1;
function V1(e) {
  return e.split("");
}
var G1 = V1, Bs = "\\ud800-\\udfff", H1 = "\\u0300-\\u036f", Y1 = "\\ufe20-\\ufe2f", W1 = "\\u20d0-\\u20ff", K1 = H1 + Y1 + W1, X1 = "\\ufe0e\\ufe0f", Z1 = "[" + Bs + "]", ir = "[" + K1 + "]", sr = "\\ud83c[\\udffb-\\udfff]", J1 = "(?:" + ir + "|" + sr + ")", Us = "[^" + Bs + "]", zs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ms = "[\\ud800-\\udbff][\\udc00-\\udfff]", ex = "\\u200d", js = J1 + "?", Qs = "[" + X1 + "]?", tx = "(?:" + ex + "(?:" + [Us, zs, Ms].join("|") + ")" + Qs + js + ")*", rx = Qs + js + tx, nx = "(?:" + [Us + ir + "?", ir, zs, Ms, Z1].join("|") + ")", ax = RegExp(sr + "(?=" + sr + ")|" + nx + rx, "g");
function ix(e) {
  return e.match(ax) || [];
}
var sx = ix, ox = G1, lx = Ns, cx = sx;
function ux(e) {
  return lx(e) ? cx(e) : ox(e);
}
var dx = ux, px = D1, fx = Ns, hx = dx, mx = Ve;
function gx(e) {
  return function(t) {
    t = mx(t);
    var r = fx(t) ? hx(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? px(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var yx = gx, bx = yx, vx = bx("toUpperCase"), Ex = vx, Sx = Ve, _x = Ex;
function $x(e) {
  return _x(Sx(e).toLowerCase());
}
var xx = $x, Cx = xx, wx = Ls, Tx = wx(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? Cx(t) : t);
}), Ix = Tx;
const Fx = /* @__PURE__ */ P(Ix);
var Ax = Tt, Ox = ds, kx = ys;
function Rx(e, t) {
  var r = {};
  return t = kx(t), Ox(e, function(n, a, i) {
    Ax(r, t(n, a, i), n);
  }), r;
}
var Px = Rx;
const Dx = /* @__PURE__ */ P(Px);
var Ur = { exports: {} };
Ur.exports = function(e) {
  return qs(Lx(e), e);
};
Ur.exports.array = qs;
function qs(e, t) {
  var r = e.length, n = new Array(r), a = {}, i = r, o = Nx(t), l = Bx(e);
  for (t.forEach(function(u) {
    if (!l.has(u[0]) || !l.has(u[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); i--; )
    a[i] || c(e[i], i, /* @__PURE__ */ new Set());
  return n;
  function c(u, d, p) {
    if (p.has(u)) {
      var h;
      try {
        h = ", node was:" + JSON.stringify(u);
      } catch {
        h = "";
      }
      throw new Error("Cyclic dependency" + h);
    }
    if (!l.has(u))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(u));
    if (!a[d]) {
      a[d] = !0;
      var f = o.get(u) || /* @__PURE__ */ new Set();
      if (f = Array.from(f), d = f.length) {
        p.add(u);
        do {
          var g = f[--d];
          c(g, l.get(g), p);
        } while (d);
        p.delete(u);
      }
      n[--r] = u;
    }
  }
}
function Lx(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.add(a[0]), t.add(a[1]);
  }
  return Array.from(t);
}
function Nx(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.has(a[0]) || t.set(a[0], /* @__PURE__ */ new Set()), t.has(a[1]) || t.set(a[1], /* @__PURE__ */ new Set()), t.get(a[0]).add(a[1]);
  }
  return t;
}
function Bx(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var Ux = Ur.exports;
const zx = /* @__PURE__ */ P(Ux);
function Mx(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([o, l]) => `${o}-${l}`));
  function i(o, l) {
    let c = At.split(o)[0];
    n.add(c), a.has(`${l}-${c}`) || r.push([l, c]);
  }
  for (const o in e)
    if (dt(e, o)) {
      let l = e[o];
      n.add(o), ue.isRef(l) && l.isSibling ? i(l.path, o) : cs(l) && "deps" in l && l.deps.forEach((c) => i(c, o));
    }
  return zx.array(Array.from(n), r).reverse();
}
function ea(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var i;
    if (((i = t.path) == null ? void 0 : i.indexOf(n)) !== -1)
      return r = a, !0;
  }), r;
}
function Vs(e) {
  return (t, r) => ea(e, t) - ea(e, r);
}
function xe() {
  return xe = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xe.apply(this, arguments);
}
let ta = (e) => Object.prototype.toString.call(e) === "[object Object]";
function jx(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const Qx = Vs([]);
class Gs extends j {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Qx, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
    let i = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, l = this._nodes.concat(Object.keys(a).filter((p) => this._nodes.indexOf(p) === -1)), c = {}, u = xe({}, r, {
      parent: c,
      __validating: r.__validating || !1
    }), d = !1;
    for (const p of l) {
      let h = i[p], f = dt(a, p);
      if (h) {
        let g, m = a[p];
        u.path = (r.path ? `${r.path}.` : "") + p, h = h.resolve({
          value: m,
          context: r.context,
          parent: c
        });
        let v = "spec" in h ? h.spec : void 0, y = v == null ? void 0 : v.strict;
        if (v != null && v.strip) {
          d = d || p in a;
          continue;
        }
        g = !r.__validating || !y ? (
          // TODO: use _cast, this is double resolving
          h.cast(a[p], u)
        ) : a[p], g !== void 0 && (c[p] = g);
      } else
        f && !o && (c[p] = a[p]);
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
      let h = this._nodes.map((f) => (g, m) => {
        let v = f.indexOf(".") === -1 ? (r.path ? `${r.path}.` : "") + f : `${r.path || ""}["${f}"]`, y = this.fields[f];
        if (y && "validate" in y) {
          y.validate(p[f], xe({}, r, {
            // @ts-ignore
            path: v,
            from: o,
            // inner fields are always strict:
            // 1. this isn't strict so the casting will also have cast inner values
            // 2. this is strict in which case the nested values weren't cast either
            strict: !0,
            parent: p,
            originalValue: l[f]
          }), m);
          return;
        }
        m(null);
      });
      nr({
        sync: i,
        tests: h,
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
    return r.fields = xe({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), n = r.fields;
    for (let [a, i] of Object.entries(this.fields)) {
      const o = n[a];
      o === void 0 ? n[a] = i : o instanceof j && i instanceof j && (n[a] = i.concat(o));
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
    return n.fields = a, n._sortErrors = Vs(Object.keys(a)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = Mx(a, n._excludedEdges), n;
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
    let a = At.getter(t, !0);
    return this.transform((i) => {
      if (i == null)
        return i;
      let o = i;
      return dt(i, t) && (o = xe({}, i), n || delete o[t], o[r] = a(i)), o;
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
        const i = jx(this.schema, a);
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
    return this.transform((r) => r && Dx(r, (n, a) => t(a)));
  }
  camelCase() {
    return this.transformKeys(Fx);
  }
  snakeCase() {
    return this.transformKeys(Jn);
  }
  constantCase() {
    return this.transformKeys((t) => Jn(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = bs(this.fields, (r) => r.describe()), t;
  }
}
function it(e) {
  return new Gs(e);
}
it.prototype = Gs.prototype;
const qx = {
  task: {
    title: "",
    description: "",
    mode: "import",
    status: "created",
    startTime: null,
    endTime: null,
    recordType: "",
    serializer: "",
    options: {}
  },
  metadata: null,
  files: []
}, Vx = it({
  task: it({
    title: ze().required("Title is required"),
    recordType: ze().required("Record type is required"),
    serializer: ze().required("Serializer is required"),
    mode: ze().required("Mode is required")
  }),
  metadata: it().nullable()
}), Gx = ({ onSubmit: e }) => {
  const [t, r] = N(void 0), n = async (a) => {
    try {
      await gS(a.task, a.metadata, a.files, {
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
    bo,
    {
      formik: {
        initialValues: qx,
        validationSchema: Vx,
        onSubmit: n
      }
    },
    /* @__PURE__ */ s.createElement(TS, { progress: t })
  );
}, Hx = () => {
  const [e, t] = N(!1), { refreshSearch: r } = Ke(), n = k(() => {
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
    /* @__PURE__ */ s.createElement(so, null, /* @__PURE__ */ s.createElement(Gx, { onSubmit: n }))
  );
}, zt = {
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
}, Yx = ({
  appId: e = "search"
}) => {
  const { showImportModal: t } = Ke().config;
  return /* @__PURE__ */ s.createElement(E, { id: `${e}.SearchBarRow` }, /* @__PURE__ */ s.createElement(
    "section",
    {
      className: zt.searchBarRow,
      "aria-label": "Records search and filters"
    },
    /* @__PURE__ */ s.createElement("div", { className: zt.search }, /* @__PURE__ */ s.createElement(
      pE,
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
    t && /* @__PURE__ */ s.createElement("div", { className: zt.facets }, /* @__PURE__ */ s.createElement(Hx, null))
  ));
}, Wx = ({ currentResultsState: e }) => {
  var a;
  const t = ((a = e == null ? void 0 : e.data) == null ? void 0 : a.aggregations) || {}, r = k((i) => i.replace(/_/g, " ").replace(/\b\w/g, (o) => o.toUpperCase()), []);
  return { availableAggregations: na(
    () => Object.keys(t).filter((i) => {
      var l;
      return (((l = t[i]) == null ? void 0 : l.buckets) || []).length > 0;
    }),
    [t]
  ), formatTitle: r };
}, Kx = {
  container: b({
    minInlineSize: "20rem",
    paddingInlineEnd: "1rem",
    paddingBlock: ".5rem",
    flex: 0
  })
}, Xx = (e) => {
  const { config: t } = Ke(), { availableAggregations: r, formatTitle: n } = Wx(e);
  return !t.showFacets || r.length === 0 ? null : /* @__PURE__ */ s.createElement("aside", { className: Kx.container, "aria-label": "Search Facets" }, r.map((a) => /* @__PURE__ */ s.createElement(
    jv,
    {
      key: a,
      title: n(a),
      agg: {
        field: a,
        aggName: a
      }
    }
  )));
}, Zx = Rr(Xx), Jx = () => {
  const { config: e } = Ke();
  return /* @__PURE__ */ s.createElement(K, null, /* @__PURE__ */ s.createElement(K.Row, { verticalAlign: "middle" }, /* @__PURE__ */ s.createElement(K.Column, { width: 14, textAlign: "center" }, /* @__PURE__ */ s.createElement(Zv, { options: { size: "mini" } })), /* @__PURE__ */ s.createElement(K.Column, { width: 2, textAlign: "right" }, /* @__PURE__ */ s.createElement(
    cE,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ s.createElement("p", null, t, " results per page")
    }
  ))));
}, Hs = ({
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
    [`${r.appId}.ResultsList.item`]: vS,
    [`${r.appId}.ResultsList.container`]: ES,
    [`${r.appId}.BucketAggregation.element`]: XE,
    [`${r.appId}.BucketAggregationValues.element`]: ZE,
    ...t
  };
  return /* @__PURE__ */ s.createElement(eo.Provider, { value: a }, /* @__PURE__ */ s.createElement(
    Iv,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ s.createElement(eS, { config: r }, /* @__PURE__ */ s.createElement("div", { className: Rn.searchLayout }, /* @__PURE__ */ s.createElement(Zx, null), /* @__PURE__ */ s.createElement("div", { className: Rn.searchContent }, /* @__PURE__ */ s.createElement(Yx, { appId: r.appId }), /* @__PURE__ */ s.createElement(CS, null), /* @__PURE__ */ s.createElement(iE, null, /* @__PURE__ */ s.createElement(Gv, null), /* @__PURE__ */ s.createElement(Si, null)), r.showSearchFooter && /* @__PURE__ */ s.createElement(Jx, null))))
  ));
}, eC = (e) => na(() => {
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
}, [e]), Mt = {
  statistic: b({
    marginBlock: "1rem"
  }),
  progressLabel: b({
    marginBlockEnd: "0.5rem"
  }),
  progress: b({
    marginBlockEnd: "0.5rem"
  })
}, tC = ({
  totalRecords: e = 0,
  validatedRecords: t = 0,
  errorRecords: r = 0,
  successRecords: n = 0,
  showWhenEmpty: a = !1,
  className: i = "",
  style: o = {}
}) => {
  const l = eC({
    totalRecords: e,
    validatedRecords: t,
    errorRecords: r,
    successRecords: n
  });
  return e === 0 && !a ? null : /* @__PURE__ */ s.createElement(q, { basic: !0, className: i, style: o }, /* @__PURE__ */ s.createElement(K, { columns: 3, stackable: !0 }, l.map((c) => /* @__PURE__ */ s.createElement(K.Column, { key: c.title }, /* @__PURE__ */ s.createElement(D, { fluid: !0 }, /* @__PURE__ */ s.createElement(D.Content, null, /* @__PURE__ */ s.createElement(D.Header, { textAlign: "center" }, c.title), /* @__PURE__ */ s.createElement(D.Description, { textAlign: "center" }, /* @__PURE__ */ s.createElement(
    Rt,
    {
      size: "large",
      color: c.color,
      className: Mt.statistic
    },
    /* @__PURE__ */ s.createElement(Rt.Value, null, c.value),
    /* @__PURE__ */ s.createElement(Rt.Label, null, c.label)
  ), /* @__PURE__ */ s.createElement(q, { basic: !0, textAlign: "center" }, /* @__PURE__ */ s.createElement(
    q.Inline,
    {
      basic: !0,
      size: "small",
      className: Mt.progressLabel
    },
    c.progressLabel
  ), /* @__PURE__ */ s.createElement(
    oo,
    {
      percent: c.progress,
      color: c.color,
      size: "small",
      className: Mt.progress
    }
  )))))))));
}, rC = {
  container: b({
    paddingBlockStart: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  })
}, Ys = Js(
  void 0
), nC = ({
  taskId: e,
  children: t
}) => /* @__PURE__ */ s.createElement(Ys.Provider, { value: { taskId: e } }, /* @__PURE__ */ s.createElement("div", { className: rC.container }, t)), Ws = () => {
  const e = A(Ys);
  if (!e)
    throw new Error("useTaskDetails must be used within a TaskDetailsProvider");
  return e;
}, Se = {
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
  }),
  optionsSummary: b({
    marginBlockStart: "0.875rem",
    borderRadius: "0.75rem",
    borderColor: "#d9e6d4 !important",
    background: "linear-gradient(180deg, #fbfdf9 0%, #f5faf2 100%) !important",
    boxShadow: "none !important"
  }),
  optionsHeading: b({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBlockEnd: "0.625rem",
    color: "#2f5d34",
    fontSize: "0.875rem",
    fontWeight: "600"
  }),
  optionsList: b({
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem"
  })
}, aC = ({ children: e }) => /* @__PURE__ */ s.createElement(I, { padded: !0, size: "small", compact: !0 }, /* @__PURE__ */ s.createElement(sa, null, /* @__PURE__ */ s.createElement(mt, null, /* @__PURE__ */ s.createElement(W, null, "ID"), /* @__PURE__ */ s.createElement(W, null, "Title"), /* @__PURE__ */ s.createElement(W, null, "Status"), /* @__PURE__ */ s.createElement(W, null))), /* @__PURE__ */ s.createElement(oa, null, e)), iC = {
  headerContainer: b({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  })
}, sC = ({ record: e }) => /* @__PURE__ */ s.createElement(q, { basic: !0 }, /* @__PURE__ */ s.createElement($, null, /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "tag" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Record ID"), /* @__PURE__ */ s.createElement($.Description, null, e.id))), /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "calendar" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Created"), /* @__PURE__ */ s.createElement($.Description, null, Kt(e.created)))), /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "edit" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Updated"), /* @__PURE__ */ s.createElement($.Description, null, Kt(e.updated)))), e.generated_record_id && /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "file alternate" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Generated Record ID"), /* @__PURE__ */ s.createElement($.Description, null, /* @__PURE__ */ s.createElement(
  "a",
  {
    href: `/records/${e.generated_record_id}`,
    target: "_blank",
    rel: "noopener noreferrer"
  },
  "/",
  e.generated_record_id
)))))), oC = ({ record: e }) => /* @__PURE__ */ s.createElement(q, { basic: !0 }, e.errors.map((t, r) => /* @__PURE__ */ s.createElement(U, { key: `error-${r}-${t.type}`, negative: !0 }, /* @__PURE__ */ s.createElement(U.Header, null, t.type), /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Location:"), " ", t.loc), /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Message:"), " ", t.msg)))), lC = {
  pathCell: b({
    wordBreak: "break-all"
  })
}, cC = ({ record: e }) => {
  var r, n;
  return (((r = e.record_files) == null ? void 0 : r.length) ?? 0) > 0 || (((n = e.validated_record_files) == null ? void 0 : n.length) ?? 0) > 0 ? /* @__PURE__ */ s.createElement(q, { basic: !0 }, e.record_files && e.record_files.length > 0 && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(de, { as: "h4" }, /* @__PURE__ */ s.createElement(_, { name: "file" }), "File List"), /* @__PURE__ */ s.createElement($, { bulleted: !0 }, e.record_files.map((a) => /* @__PURE__ */ s.createElement($.Item, { key: `file-${a}` }, /* @__PURE__ */ s.createElement($.Content, null, a))))), e.validated_record_files && e.validated_record_files.length > 0 && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(de, { as: "h4" }, /* @__PURE__ */ s.createElement(_, { name: "checkmark" }), "Validated Files"), /* @__PURE__ */ s.createElement(I, { celled: !0 }, /* @__PURE__ */ s.createElement(I.Header, null, /* @__PURE__ */ s.createElement(I.Row, null, /* @__PURE__ */ s.createElement(I.HeaderCell, null, "File"), /* @__PURE__ */ s.createElement(I.HeaderCell, null, "Size"), /* @__PURE__ */ s.createElement(I.HeaderCell, null, "Origin"), /* @__PURE__ */ s.createElement(I.HeaderCell, null, "Path"))), /* @__PURE__ */ s.createElement(I.Body, null, e.validated_record_files.map((a, i) => /* @__PURE__ */ s.createElement(I.Row, { key: `validated-${a.key}-${i}` }, /* @__PURE__ */ s.createElement(I.Cell, null, /* @__PURE__ */ s.createElement(_, { name: "file" }), a.key), /* @__PURE__ */ s.createElement(I.Cell, null, (a.size / 1024).toFixed(2), " KB"), /* @__PURE__ */ s.createElement(I.Cell, null, a.origin), /* @__PURE__ */ s.createElement(I.Cell, { className: lC.pathCell }, a.full_path))))))) : /* @__PURE__ */ s.createElement(U, { info: !0 }, /* @__PURE__ */ s.createElement(U.Header, null, "No Files"), /* @__PURE__ */ s.createElement("p", null, "No files are associated with this record."));
}, uC = {
  valueCell: b({
    wordBreak: "break-word"
  })
}, dC = ({ record: e }) => /* @__PURE__ */ s.createElement(I, { celled: !0, striped: !0 }, /* @__PURE__ */ s.createElement(I.Header, null, /* @__PURE__ */ s.createElement(I.Row, null, /* @__PURE__ */ s.createElement(I.HeaderCell, null, "Field"), /* @__PURE__ */ s.createElement(I.HeaderCell, null, "Value"))), /* @__PURE__ */ s.createElement(I.Body, null, Object.entries(e.src_data).filter(([t, r]) => r && r.trim() !== "").map(([t, r]) => /* @__PURE__ */ s.createElement(I.Row, { key: t }, /* @__PURE__ */ s.createElement(I.Cell, null, /* @__PURE__ */ s.createElement("strong", null, t)), /* @__PURE__ */ s.createElement(I.Cell, { className: uC.valueCell }, r))))), pC = ({
  record: e,
  open: t,
  onClose: r,
  initialTab: n = 0
}) => {
  const [a, i] = N(n);
  we(() => {
    t && i(n);
  }, [t, n]);
  const o = (u, d) => {
    const p = typeof d.activeIndex == "number" ? d.activeIndex : 0;
    i(p);
  }, l = [
    {
      menuItem: { key: "basic", icon: "info circle", content: "Basic Info" },
      render: () => /* @__PURE__ */ s.createElement(Pe.Pane, null, /* @__PURE__ */ s.createElement(sC, { record: e }))
    },
    {
      menuItem: { key: "source", icon: "database", content: "Source Data" },
      render: () => /* @__PURE__ */ s.createElement(Pe.Pane, null, /* @__PURE__ */ s.createElement(dC, { record: e }))
    },
    ...e.errors && e.errors.length > 0 ? [
      {
        menuItem: {
          key: "errors",
          icon: "exclamation triangle",
          content: `Errors (${e.errors.length})`
        },
        render: () => /* @__PURE__ */ s.createElement(Pe.Pane, null, /* @__PURE__ */ s.createElement(oC, { record: e }))
      }
    ] : [],
    {
      menuItem: { key: "files", icon: "file", content: "Files" },
      render: () => /* @__PURE__ */ s.createElement(Pe.Pane, null, /* @__PURE__ */ s.createElement(cC, { record: e }))
    }
  ], c = () => {
    var u, d, p, h, f;
    return ((d = (u = e.serializer_data) == null ? void 0 : u.metadata) == null ? void 0 : d.title) || ((h = (p = e.transformed_data) == null ? void 0 : p.metadata) == null ? void 0 : h.title) || ((f = e.src_data) == null ? void 0 : f.title) || `Record ${e.id}`;
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
    /* @__PURE__ */ s.createElement(le.Header, null, /* @__PURE__ */ s.createElement("div", { className: iC.headerContainer }, /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(_, { name: "file alternate outline" }), c()), /* @__PURE__ */ s.createElement(rS, { status: e.status }))),
    /* @__PURE__ */ s.createElement(le.Content, { scrolling: !0 }, /* @__PURE__ */ s.createElement(
      Pe,
      {
        panes: l,
        activeIndex: a,
        onTabChange: o
      }
    )),
    /* @__PURE__ */ s.createElement(le.Actions, null, /* @__PURE__ */ s.createElement(z, { onClick: r }, /* @__PURE__ */ s.createElement(_, { name: "close" }), "Close"))
  );
}, Ne = {
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
}, fC = ({
  result: e,
  index: t
}) => {
  var g;
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
  }, u = e.errors && e.errors.length > 0, d = lS(e.status), p = () => u ? 2 : -1, h = (m) => m === "red" ? "times" : m === "green" || m === "blue" ? "check" : "question", f = [
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
          await bS(e.id), console.log(`Record ${e.id} is being processed.`);
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
  return /* @__PURE__ */ s.createElement(mt, { key: t }, /* @__PURE__ */ s.createElement(Y, null, /* @__PURE__ */ s.createElement("div", { className: Ne.idContainer }, /* @__PURE__ */ s.createElement("code", { className: Ne.codeElement }, e.id.length > 20 ? `${e.id.substring(0, 20)}…` : e.id), /* @__PURE__ */ s.createElement(
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
  ))), /* @__PURE__ */ s.createElement(Y, null, /* @__PURE__ */ s.createElement("div", { className: Ne.titleContainer }, ((g = e.src_data) == null ? void 0 : g.title) || /* @__PURE__ */ s.createElement("em", { className: Ne.noTitle }, "No Title Available"))), /* @__PURE__ */ s.createElement(Y, null, /* @__PURE__ */ s.createElement(M, { color: d, size: "small" }, /* @__PURE__ */ s.createElement(_, { name: h(d) }), Me(e.status)), u && /* @__PURE__ */ s.createElement(
    zr,
    {
      content: `${e.errors.length} error${e.errors.length > 1 ? "s" : ""} found`,
      trigger: /* @__PURE__ */ s.createElement(
        _,
        {
          name: "exclamation triangle",
          color: "red",
          className: Ne.errorIcon
        }
      ),
      position: "top center",
      size: "mini"
    }
  )), /* @__PURE__ */ s.createElement(Y, { textAlign: "right" }, /* @__PURE__ */ s.createElement(
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
    /* @__PURE__ */ s.createElement(ce.Menu, null, f.map((m) => /* @__PURE__ */ s.createElement(
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
    pC,
    {
      record: e,
      open: a,
      onClose: () => i(!1),
      initialTab: o
    }
  )));
}, hC = () => {
  const { taskId: e } = Ws(), t = {
    "search.SearchBarRow": () => null,
    "search.ResultsList.container": aC,
    "search.ResultsList.item": fC
  };
  return /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(de, { as: "h3" }, "Task Records"), /* @__PURE__ */ s.createElement(
    Hs,
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
}, mC = ({
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
  q,
  {
    placeholder: !0,
    className: aS("file-drop-zone", oe.dropZone, {
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
  ), /* @__PURE__ */ s.createElement("div", { className: oe.textContainer }, /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Drop files here or click to select")), /* @__PURE__ */ s.createElement("p", { className: oe.smallText }, "Max files: ", r, " | Max total: ", Lr(n)), o.length > 0 && /* @__PURE__ */ s.createElement("p", { className: oe.selectedFilesText }, /* @__PURE__ */ s.createElement("strong", null, o.length, " files selected •", " ", Ji(o), " total"))))
)), gC = ({
  onUploadError: e
} = {}) => {
  const [t, r] = N([]), [n] = N(!1), a = k(
    (c, u, d) => d && c.size === 0 ? "Empty files are not allowed" : u && !u.split(",").map((f) => f.trim()).some((f) => f.startsWith(".") ? c.name.toLowerCase().endsWith(f.toLowerCase()) : c.type.match(new RegExp(f.replace("*", ".*")))) ? `File type not accepted. Accepted types: ${u}` : null,
    []
  ), i = k(
    (c, u, d, p, h) => {
      const f = [], g = [];
      for (const m of c) {
        if (d && t.length + f.length >= d) {
          g.push(`Maximum ${d} files allowed`);
          break;
        }
        const v = a(m, u, h);
        if (v) {
          g.push(`${m.name}: ${v}`);
          continue;
        }
        if (t.some(
          (S) => S.file.name === m.name && S.file.size === m.size
        )) {
          g.push(`${m.name}: File already selected`);
          continue;
        }
        if (p && Zi([
          ...t,
          ...f
        ]) + m.size > p) {
          g.push(
            `Total size would exceed maximum of ${(p / 1024 / 1024).toFixed(2)}MB`
          );
          break;
        }
        f.push({
          file: m,
          id: `${m.name}-${m.size}-${Date.now()}`
        });
      }
      return g.length > 0 && (e == null || e(g.join(", "))), r((m) => [...m, ...f]), f;
    },
    [t, a, e]
  ), o = k((c) => {
    r((u) => u.filter((d) => d.id !== c));
  }, []), l = k(() => {
    r([]);
  }, []);
  return {
    uploadFiles: t,
    isUploading: n,
    addFiles: i,
    removeFile: o,
    clearFiles: l
  };
}, Be = {
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
}, yC = ({
  uploadFiles: e,
  isUploading: t,
  handleRemoveFile: r,
  handleClearFiles: n
}) => /* @__PURE__ */ s.createElement(q, null, /* @__PURE__ */ s.createElement("div", { className: Be.headerContainer }, /* @__PURE__ */ s.createElement("strong", null, "Selected Files (", e.length, ") •", " ", Ji(e)), /* @__PURE__ */ s.createElement(
  z,
  {
    size: "mini",
    basic: !0,
    icon: "trash",
    content: "Clear All",
    onClick: n,
    disabled: t
  }
)), /* @__PURE__ */ s.createElement($, { divided: !0 }, e.map((a) => /* @__PURE__ */ s.createElement($.Item, { key: a.id }, /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement("div", { className: Be.listItemContainer }, /* @__PURE__ */ s.createElement("div", { className: Be.fileContentContainer }, /* @__PURE__ */ s.createElement("div", { className: Be.fileInfoContainer }, /* @__PURE__ */ s.createElement(_, { name: "file" }), /* @__PURE__ */ s.createElement("span", null, a.file.name), /* @__PURE__ */ s.createElement(M, { size: "mini", basic: !0 }, Lr(a.file.size))), a.error && /* @__PURE__ */ s.createElement(
  U,
  {
    negative: !0,
    size: "mini",
    className: Be.errorMessage
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
))))))), Ks = ({
  onChange: e,
  accept: t = ".csv,.json,.xlsx,.txt",
  maxFiles: r = 5,
  maxTotalSize: n = 50 * 1024 * 1024,
  // 50MB
  skipEmptyFiles: a = !0,
  disabled: i = !1,
  error: o
}) => {
  const l = ra(null), [c, u] = s.useState(!1), [d, p] = s.useState(
    null
  ), { uploadFiles: h, isUploading: f, addFiles: g, removeFile: m, clearFiles: v } = gC({
    onUploadComplete: (F) => {
      e(F);
    },
    onUploadError: (F) => {
      console.error("Upload error:", F), p(F);
    }
  }), y = k(
    (F) => {
      if (!F || F.length === 0)
        return;
      p(null);
      const Ot = Array.from(F), ve = g(
        Ot,
        t,
        r,
        n,
        a
      );
      if (ve.length > 0) {
        const Xs = [...h, ...ve].map((Zs) => Zs.file);
        e(Xs);
      }
    },
    [
      g,
      t,
      r,
      n,
      a,
      e,
      h
    ]
  ), S = k(
    (F) => {
      y(F.target.files), l.current && (l.current.value = "");
    },
    [y]
  ), x = k(
    (F) => {
      F.preventDefault(), i || u(!0);
    },
    [i]
  ), B = k((F) => {
    F.preventDefault(), u(!1);
  }, []), te = k(
    (F) => {
      F.preventDefault(), u(!1), !i && y(F.dataTransfer.files);
    },
    [i, y]
  ), O = k(() => {
    var F;
    i || (F = l.current) == null || F.click();
  }, [i]), fe = k(
    (F) => {
      m(F), p(null);
      const Ot = h.filter((ve) => ve.id !== F).map((ve) => ve.file);
      e(Ot);
    },
    [m, h, e]
  ), Xe = k(() => {
    v(), p(null), e([]);
  }, [v, e]);
  return /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(
    mC,
    {
      fileInputRef: l,
      accept: t,
      maxFiles: r,
      maxTotalSize: n,
      isDragOver: c,
      disabled: i,
      uploadFiles: h,
      onInputChange: S,
      onDragOver: x,
      onDragLeave: B,
      onDrop: te,
      onFileDialogOpen: O
    }
  ), (o || d) && /* @__PURE__ */ s.createElement(U, { negative: !0, size: "small" }, /* @__PURE__ */ s.createElement(_, { name: "exclamation triangle" }), o || d), h.length > 0 && /* @__PURE__ */ s.createElement(
    yC,
    {
      uploadFiles: h,
      isUploading: f,
      handleRemoveFile: fe,
      handleClearFiles: Xe
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
}, bC = () => {
  const { taskId: e } = Ws(), [t, r] = N(null), [n, a] = N([]), [i, o] = N(!1), [l, c] = N(null), u = (f) => {
    var m;
    const g = ((m = f.target.files) == null ? void 0 : m[0]) || null;
    r(g || null);
  }, d = (f) => {
    a(f);
  }, p = () => {
    o(!1), r(null), a([]), c(null);
  }, h = async () => {
    if (!(!t && n.length === 0))
      try {
        await yS(
          e,
          t,
          n.length > 0 ? n : void 0,
          {
            onProgress: (f, g) => c({
              [f]: g
            }),
            onError: (f, g) => {
              console.error(`Error during ${g}:`, f);
            }
          }
        ), t && await is(e, {
          autoExecute: !0,
          // Auto-execute import after validation
          onProgress: (f, g) => c({
            [f]: g
          }),
          onError: (f, g) => {
            console.error(`Error during ${g}:`, f);
          }
        }), o(!1), r(null), a([]);
      } catch (f) {
        console.error("Error uploading content:", f);
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
    /* @__PURE__ */ s.createElement(le.Content, null, /* @__PURE__ */ s.createElement(ge, { onSubmit: h }, /* @__PURE__ */ s.createElement(ge.Field, null, /* @__PURE__ */ s.createElement("label", { htmlFor: "fileInput" }, "Select Metadata File (Optional)"), /* @__PURE__ */ s.createElement(
      "input",
      {
        id: "fileInput",
        type: "file",
        onChange: u,
        accept: ".csv"
      }
    ), t && /* @__PURE__ */ s.createElement("div", { className: jt.selectedFileInfo }, "Selected: ", t.name)), /* @__PURE__ */ s.createElement(ge.Field, null, /* @__PURE__ */ s.createElement("div", { className: jt.fieldLabel }, "Additional Files (Optional)"), /* @__PURE__ */ s.createElement(
      Ks,
      {
        value: n,
        onChange: d,
        accept: "*",
        maxTotalSize: 10 * 1024 * 1024 * 1024,
        maxFiles: 100
      }
    )))),
    /* @__PURE__ */ s.createElement(le.Actions, null, /* @__PURE__ */ s.createElement("div", { className: jt.actionsContainer }, l && /* @__PURE__ */ s.createElement(Yi, { progress: l }), /* @__PURE__ */ s.createElement(z, { onClick: p, color: "grey", disabled: !!l }, /* @__PURE__ */ s.createElement(_, { name: "cancel" }), "Cancel"), /* @__PURE__ */ s.createElement(
      z,
      {
        onClick: h,
        color: "blue",
        loading: !!l,
        disabled: !t && n.length === 0
      },
      /* @__PURE__ */ s.createElement(_, { name: "upload" }),
      "Upload"
    )))
  );
}, vC = ({ taskId: e }) => {
  var f, g, m, v, y, S;
  const [t, r] = N(null), { getStatus: n, isGettingStatus: a, runBulkImport: i, isBulkImporting: o, error: l } = os(e, { onStatusChangeSuccess: r });
  if (we(() => {
    n();
  }, [n]), a || o)
    return /* @__PURE__ */ s.createElement(Wi, null);
  if (!t)
    return /* @__PURE__ */ s.createElement(U, { warning: !0, icon: !0 }, /* @__PURE__ */ s.createElement(_, { name: "search" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Task Not Found"), "The requested task could not be found."));
  const c = ((f = t.records_status) == null ? void 0 : f.total_records) || 0, u = ((g = t.records_status) == null ? void 0 : g.validated) || 0, d = ((m = t.records_status) == null ? void 0 : m.success) || 0, p = (((v = t.records_status) == null ? void 0 : v["import failed"]) || 0) + (((y = t.records_status) == null ? void 0 : y["validation failed"]) || 0) + (((S = t.records_status) == null ? void 0 : S["serializer validation failed"]) || 0), h = Object.entries(t.options || {}).filter(
    ([, x]) => x
  );
  return /* @__PURE__ */ s.createElement(nC, { taskId: e }, /* @__PURE__ */ s.createElement(lo, { fluid: !0, verticalAlign: "top" }, l && /* @__PURE__ */ s.createElement(U, { negative: !0, icon: !0 }, /* @__PURE__ */ s.createElement(_, { name: "exclamation triangle" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Error"), (l == null ? void 0 : l.message) || "An unknown error occurred")), /* @__PURE__ */ s.createElement(K, null, /* @__PURE__ */ s.createElement(K.Row, { verticalAlign: "top" }, /* @__PURE__ */ s.createElement(K.Column, { width: 8, verticalAlign: "middle" }, /* @__PURE__ */ s.createElement("div", { className: Se.headerContainer }, /* @__PURE__ */ s.createElement(_, { name: "tasks", circular: !0, size: "big" }), /* @__PURE__ */ s.createElement("div", { className: Se.headerContent }, /* @__PURE__ */ s.createElement(de, { as: "h2" }, /* @__PURE__ */ s.createElement(de.Content, null, t.title)), t.status && /* @__PURE__ */ s.createElement(Ki, { size: "large", status: t.status }, Me(t.status)), h.length > 0 && /* @__PURE__ */ s.createElement(q, { compact: !0, className: Se.optionsSummary }, /* @__PURE__ */ s.createElement("div", { className: Se.optionsHeading }, /* @__PURE__ */ s.createElement(_, { name: "setting" }), /* @__PURE__ */ s.createElement("span", null, "Enabled options")), /* @__PURE__ */ s.createElement("div", { className: Se.optionsList }, h.map(([x]) => /* @__PURE__ */ s.createElement(M, { key: x, basic: !0, color: "green", size: "small" }, es(x)))))))), /* @__PURE__ */ s.createElement(K.Column, { width: 8, textAlign: "right" }, /* @__PURE__ */ s.createElement("div", { className: Se.actionsContainer }, /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(
    z,
    {
      size: "tiny",
      color: "blue",
      icon: "refresh",
      content: "Refresh",
      onClick: () => n(),
      loading: a
    }
  ), /* @__PURE__ */ s.createElement(bC, null), /* @__PURE__ */ s.createElement(
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
  ))))), t.description && /* @__PURE__ */ s.createElement(K.Row, null, /* @__PURE__ */ s.createElement(K.Column, { width: 16 }, /* @__PURE__ */ s.createElement(U, { info: !0, icon: !0, size: "small" }, /* @__PURE__ */ s.createElement(_, { name: "info circle" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Notes"), t.description))))), c > 0 && /* @__PURE__ */ s.createElement(q, { basic: !0 }, /* @__PURE__ */ s.createElement(
    tC,
    {
      totalRecords: c,
      validatedRecords: u,
      errorRecords: p,
      successRecords: d
    }
  ))), /* @__PURE__ */ s.createElement(hC, null));
}, PC = {
  Search: Hs,
  TaskDetails: vC
}, DC = {
  CREATED: "created",
  VALIDATING: "validating",
  SERIALIZER_VALIDATION_FAILED: "serializer validation failed",
  VALIDATION_FAILED: "validation failed",
  VALIDATED: "validated",
  IMPORT_FAILED: "import failed",
  IMPORTED: "success"
}, LC = {
  CREATED: "created",
  VALIDATING: "validating",
  VALIDATION_FAILED: "validated with failures",
  VALIDATED: "validated",
  IMPORTING: "importing",
  IMPORT_FAILED: "imported with failures",
  SUCCESS: "success",
  DAMAGED: "damaged"
}, NC = {
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
  PC as BulkImporter,
  Ks as FileUploader,
  Hx as ImportModal,
  LC as ImporterTaskStates,
  DC as InvenioImporterRecordStatus,
  NC as OrchestrationStepsEnum,
  Yi as ProgressLoading,
  Hs as Search,
  Wi as Spinner,
  rS as StatusIcon,
  Ki as StatusLabel,
  vC as TaskDetails,
  fC as TaskRecordItem,
  Me as capitalizeFirstLetter,
  aS as cn,
  kC as createSearchApi,
  RC as createSearchApiConfig,
  Kt as formatDate,
  Lr as formatFileSize,
  es as formatOptionLabel,
  oS as getCsrfToken,
  lS as getStatusColor,
  Zi as getTotalSize,
  Ji as getTotalSizeFormatted,
  gC as useFileUploader
};
