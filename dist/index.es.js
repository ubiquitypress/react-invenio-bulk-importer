import s, { Component as L, useContext as I, useEffect as Me, useCallback as R, Fragment as or, useState as N, useMemo as Hs, createContext as Ys, useRef as Ws } from "react";
import b, { OverridableContext as Ks } from "react-overridable";
import tt from "axios";
import xe from "qs";
import { connect as k, Provider as Xs } from "react-redux";
import { Label as ie, Icon as _, Input as Zn, Button as z, List as $, Checkbox as lr, Card as D, Segment as W, Header as me, Menu as Ot, Pagination as Zs, Item as ve, Loader as Jn, Dropdown as ce, Image as Js, Dimmer as eo, TableRow as ft, TableCell as H, Table as T, TableHeader as ea, TableHeaderCell as Y, TableBody as ta, Form as _e, Modal as le, ModalHeader as to, ModalContent as ro, Grid as j, Statistic as Rt, Progress as no, Message as U, Tab as Oe, Popup as Ur, Container as ao } from "semantic-ui-react";
import { combineReducers as io, createStore as so, applyMiddleware as oo } from "redux";
import lo from "redux-thunk";
import co from "lodash";
import { TextField as uo, SelectField as kt, TextAreaField as po, BaseForm as fo } from "react-invenio-forms";
import { useFormikContext as ho } from "formik";
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function P(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mo = Object.prototype;
function go(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || mo;
  return e === r;
}
var ht = go;
function yo(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ra = yo, bo = ra, vo = bo(Object.keys, Object), Eo = vo, So = ht, _o = Eo, $o = Object.prototype, xo = $o.hasOwnProperty;
function Co(e) {
  if (!So(e))
    return _o(e);
  var t = [];
  for (var r in Object(e))
    xo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var na = Co, wo = typeof We == "object" && We && We.Object === Object && We, aa = wo, To = aa, Fo = typeof self == "object" && self && self.Object === Object && self, Io = To || Fo || Function("return this")(), te = Io, Ao = te, Oo = Ao.Symbol, Ce = Oo, zr = Ce, ia = Object.prototype, Ro = ia.hasOwnProperty, ko = ia.toString, Re = zr ? zr.toStringTag : void 0;
function Po(e) {
  var t = Ro.call(e, Re), r = e[Re];
  try {
    e[Re] = void 0;
    var n = !0;
  } catch {
  }
  var a = ko.call(e);
  return n && (t ? e[Re] = r : delete e[Re]), a;
}
var Do = Po, Lo = Object.prototype, No = Lo.toString;
function Bo(e) {
  return No.call(e);
}
var Uo = Bo, Mr = Ce, zo = Do, Mo = Uo, jo = "[object Null]", Qo = "[object Undefined]", jr = Mr ? Mr.toStringTag : void 0;
function qo(e) {
  return e == null ? e === void 0 ? Qo : jo : jr && jr in Object(e) ? zo(e) : Mo(e);
}
var de = qo;
function Vo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var se = Vo;
const Go = /* @__PURE__ */ P(se);
var Ho = de, Yo = se, Wo = "[object AsyncFunction]", Ko = "[object Function]", Xo = "[object GeneratorFunction]", Zo = "[object Proxy]";
function Jo(e) {
  if (!Yo(e))
    return !1;
  var t = Ho(e);
  return t == Ko || t == Xo || t == Wo || t == Zo;
}
var sa = Jo, el = te, tl = el["__core-js_shared__"], rl = tl, Pt = rl, Qr = function() {
  var e = /[^.]+$/.exec(Pt && Pt.keys && Pt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function nl(e) {
  return !!Qr && Qr in e;
}
var al = nl, il = Function.prototype, sl = il.toString;
function ol(e) {
  if (e != null) {
    try {
      return sl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var oa = ol, ll = sa, cl = al, ul = se, dl = oa, pl = /[\\^$.*+?()[\]{}|]/g, fl = /^\[object .+?Constructor\]$/, hl = Function.prototype, ml = Object.prototype, gl = hl.toString, yl = ml.hasOwnProperty, bl = RegExp(
  "^" + gl.call(yl).replace(pl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function vl(e) {
  if (!ul(e) || cl(e))
    return !1;
  var t = ll(e) ? bl : fl;
  return t.test(dl(e));
}
var El = vl;
function Sl(e, t) {
  return e == null ? void 0 : e[t];
}
var _l = Sl, $l = El, xl = _l;
function Cl(e, t) {
  var r = xl(e, t);
  return $l(r) ? r : void 0;
}
var ge = Cl, wl = ge, Tl = te, Fl = wl(Tl, "DataView"), Il = Fl, Al = ge, Ol = te, Rl = Al(Ol, "Map"), cr = Rl, kl = ge, Pl = te, Dl = kl(Pl, "Promise"), Ll = Dl, Nl = ge, Bl = te, Ul = Nl(Bl, "Set"), zl = Ul, Ml = ge, jl = te, Ql = Ml(jl, "WeakMap"), ql = Ql, Qt = Il, qt = cr, Vt = Ll, Gt = zl, Ht = ql, la = de, we = oa, qr = "[object Map]", Vl = "[object Object]", Vr = "[object Promise]", Gr = "[object Set]", Hr = "[object WeakMap]", Yr = "[object DataView]", Gl = we(Qt), Hl = we(qt), Yl = we(Vt), Wl = we(Gt), Kl = we(Ht), fe = la;
(Qt && fe(new Qt(new ArrayBuffer(1))) != Yr || qt && fe(new qt()) != qr || Vt && fe(Vt.resolve()) != Vr || Gt && fe(new Gt()) != Gr || Ht && fe(new Ht()) != Hr) && (fe = function(e) {
  var t = la(e), r = t == Vl ? e.constructor : void 0, n = r ? we(r) : "";
  if (n)
    switch (n) {
      case Gl:
        return Yr;
      case Hl:
        return qr;
      case Yl:
        return Vr;
      case Wl:
        return Gr;
      case Kl:
        return Hr;
    }
  return t;
});
var je = fe;
function Xl(e) {
  return e != null && typeof e == "object";
}
var re = Xl, Zl = de, Jl = re, ec = "[object Arguments]";
function tc(e) {
  return Jl(e) && Zl(e) == ec;
}
var rc = tc, Wr = rc, nc = re, ca = Object.prototype, ac = ca.hasOwnProperty, ic = ca.propertyIsEnumerable, sc = Wr(function() {
  return arguments;
}()) ? Wr : function(e) {
  return nc(e) && ac.call(e, "callee") && !ic.call(e, "callee");
}, mt = sc, oc = Array.isArray, q = oc;
const ua = /* @__PURE__ */ P(q);
var lc = 9007199254740991;
function cc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lc;
}
var ur = cc, uc = sa, dc = ur;
function pc(e) {
  return e != null && dc(e.length) && !uc(e);
}
var gt = pc, at = { exports: {} };
function fc() {
  return !1;
}
var hc = fc;
at.exports;
(function(e, t) {
  var r = te, n = hc, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, l = o ? r.Buffer : void 0, c = l ? l.isBuffer : void 0, u = c || n;
  e.exports = u;
})(at, at.exports);
var yt = at.exports, mc = de, gc = ur, yc = re, bc = "[object Arguments]", vc = "[object Array]", Ec = "[object Boolean]", Sc = "[object Date]", _c = "[object Error]", $c = "[object Function]", xc = "[object Map]", Cc = "[object Number]", wc = "[object Object]", Tc = "[object RegExp]", Fc = "[object Set]", Ic = "[object String]", Ac = "[object WeakMap]", Oc = "[object ArrayBuffer]", Rc = "[object DataView]", kc = "[object Float32Array]", Pc = "[object Float64Array]", Dc = "[object Int8Array]", Lc = "[object Int16Array]", Nc = "[object Int32Array]", Bc = "[object Uint8Array]", Uc = "[object Uint8ClampedArray]", zc = "[object Uint16Array]", Mc = "[object Uint32Array]", w = {};
w[kc] = w[Pc] = w[Dc] = w[Lc] = w[Nc] = w[Bc] = w[Uc] = w[zc] = w[Mc] = !0;
w[bc] = w[vc] = w[Oc] = w[Ec] = w[Rc] = w[Sc] = w[_c] = w[$c] = w[xc] = w[Cc] = w[wc] = w[Tc] = w[Fc] = w[Ic] = w[Ac] = !1;
function jc(e) {
  return yc(e) && gc(e.length) && !!w[mc(e)];
}
var Qc = jc;
function qc(e) {
  return function(t) {
    return e(t);
  };
}
var dr = qc, it = { exports: {} };
it.exports;
(function(e, t) {
  var r = aa, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, l = function() {
    try {
      var c = a && a.require && a.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(it, it.exports);
var pr = it.exports, Vc = Qc, Gc = dr, Kr = pr, Xr = Kr && Kr.isTypedArray, Hc = Xr ? Gc(Xr) : Vc, fr = Hc, Yc = na, Wc = je, Kc = mt, Xc = q, Zc = gt, Jc = yt, eu = ht, tu = fr, ru = "[object Map]", nu = "[object Set]", au = Object.prototype, iu = au.hasOwnProperty;
function su(e) {
  if (e == null)
    return !0;
  if (Zc(e) && (Xc(e) || typeof e == "string" || typeof e.splice == "function" || Jc(e) || tu(e) || Kc(e)))
    return !e.length;
  var t = Wc(e);
  if (t == ru || t == nu)
    return !e.size;
  if (eu(e))
    return !Yc(e).length;
  for (var r in e)
    if (iu.call(e, r))
      return !1;
  return !0;
}
var ou = su;
const ne = /* @__PURE__ */ P(ou);
var lu = de, cu = re, uu = "[object Symbol]";
function du(e) {
  return typeof e == "symbol" || cu(e) && lu(e) == uu;
}
var hr = du, pu = q, fu = hr, hu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, mu = /^\w*$/;
function gu(e, t) {
  if (pu(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || fu(e) ? !0 : mu.test(e) || !hu.test(e) || t != null && e in Object(t);
}
var mr = gu, yu = ge, bu = yu(Object, "create"), bt = bu, Zr = bt;
function vu() {
  this.__data__ = Zr ? Zr(null) : {}, this.size = 0;
}
var Eu = vu;
function Su(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var _u = Su, $u = bt, xu = "__lodash_hash_undefined__", Cu = Object.prototype, wu = Cu.hasOwnProperty;
function Tu(e) {
  var t = this.__data__;
  if ($u) {
    var r = t[e];
    return r === xu ? void 0 : r;
  }
  return wu.call(t, e) ? t[e] : void 0;
}
var Fu = Tu, Iu = bt, Au = Object.prototype, Ou = Au.hasOwnProperty;
function Ru(e) {
  var t = this.__data__;
  return Iu ? t[e] !== void 0 : Ou.call(t, e);
}
var ku = Ru, Pu = bt, Du = "__lodash_hash_undefined__";
function Lu(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Pu && t === void 0 ? Du : t, this;
}
var Nu = Lu, Bu = Eu, Uu = _u, zu = Fu, Mu = ku, ju = Nu;
function Te(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Te.prototype.clear = Bu;
Te.prototype.delete = Uu;
Te.prototype.get = zu;
Te.prototype.has = Mu;
Te.prototype.set = ju;
var Qu = Te;
function qu() {
  this.__data__ = [], this.size = 0;
}
var Vu = qu;
function Gu(e, t) {
  return e === t || e !== e && t !== t;
}
var vt = Gu, Hu = vt;
function Yu(e, t) {
  for (var r = e.length; r--; )
    if (Hu(e[r][0], t))
      return r;
  return -1;
}
var Et = Yu, Wu = Et, Ku = Array.prototype, Xu = Ku.splice;
function Zu(e) {
  var t = this.__data__, r = Wu(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Xu.call(t, r, 1), --this.size, !0;
}
var Ju = Zu, ed = Et;
function td(e) {
  var t = this.__data__, r = ed(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var rd = td, nd = Et;
function ad(e) {
  return nd(this.__data__, e) > -1;
}
var id = ad, sd = Et;
function od(e, t) {
  var r = this.__data__, n = sd(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var ld = od, cd = Vu, ud = Ju, dd = rd, pd = id, fd = ld;
function Fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Fe.prototype.clear = cd;
Fe.prototype.delete = ud;
Fe.prototype.get = dd;
Fe.prototype.has = pd;
Fe.prototype.set = fd;
var St = Fe, Jr = Qu, hd = St, md = cr;
function gd() {
  this.size = 0, this.__data__ = {
    hash: new Jr(),
    map: new (md || hd)(),
    string: new Jr()
  };
}
var yd = gd;
function bd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var vd = bd, Ed = vd;
function Sd(e, t) {
  var r = e.__data__;
  return Ed(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var _t = Sd, _d = _t;
function $d(e) {
  var t = _d(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var xd = $d, Cd = _t;
function wd(e) {
  return Cd(this, e).get(e);
}
var Td = wd, Fd = _t;
function Id(e) {
  return Fd(this, e).has(e);
}
var Ad = Id, Od = _t;
function Rd(e, t) {
  var r = Od(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var kd = Rd, Pd = yd, Dd = xd, Ld = Td, Nd = Ad, Bd = kd;
function Ie(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ie.prototype.clear = Pd;
Ie.prototype.delete = Dd;
Ie.prototype.get = Ld;
Ie.prototype.has = Nd;
Ie.prototype.set = Bd;
var gr = Ie, da = gr, Ud = "Expected a function";
function yr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ud);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (yr.Cache || da)(), r;
}
yr.Cache = da;
var zd = yr, Md = zd, jd = 500;
function Qd(e) {
  var t = Md(e, function(n) {
    return r.size === jd && r.clear(), n;
  }), r = t.cache;
  return t;
}
var qd = Qd, Vd = qd, Gd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Hd = /\\(\\)?/g, Yd = Vd(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Gd, function(r, n, a, i) {
    t.push(a ? i.replace(Hd, "$1") : n || r);
  }), t;
}), Wd = Yd;
function Kd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Xd = Kd, en = Ce, Zd = Xd, Jd = q, ep = hr, tp = 1 / 0, tn = en ? en.prototype : void 0, rn = tn ? tn.toString : void 0;
function pa(e) {
  if (typeof e == "string")
    return e;
  if (Jd(e))
    return Zd(e, pa) + "";
  if (ep(e))
    return rn ? rn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -tp ? "-0" : t;
}
var rp = pa, np = rp;
function ap(e) {
  return e == null ? "" : np(e);
}
var Qe = ap, ip = q, sp = mr, op = Wd, lp = Qe;
function cp(e, t) {
  return ip(e) ? e : sp(e, t) ? [e] : op(lp(e));
}
var $t = cp, up = hr, dp = 1 / 0;
function pp(e) {
  if (typeof e == "string" || up(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -dp ? "-0" : t;
}
var qe = pp, fp = $t, hp = qe;
function mp(e, t) {
  t = fp(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[hp(t[r++])];
  return r && r == n ? e : void 0;
}
var br = mp, gp = br;
function yp(e, t, r) {
  var n = e == null ? void 0 : gp(e, t);
  return n === void 0 ? r : n;
}
var fa = yp;
const Le = /* @__PURE__ */ P(fa);
function bp(e, t) {
  return e != null && t in Object(e);
}
var vp = bp, Ep = 9007199254740991, Sp = /^(?:0|[1-9]\d*)$/;
function _p(e, t) {
  var r = typeof e;
  return t = t ?? Ep, !!t && (r == "number" || r != "symbol" && Sp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var xt = _p, $p = $t, xp = mt, Cp = q, wp = xt, Tp = ur, Fp = qe;
function Ip(e, t, r) {
  t = $p(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = Fp(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && Tp(a) && wp(o, a) && (Cp(e) || xp(e)));
}
var ha = Ip, Ap = vp, Op = ha;
function Rp(e, t) {
  return e != null && Op(e, t, Ap);
}
var vr = Rp;
const kp = /* @__PURE__ */ P(vr);
var Pp = ge, Dp = function() {
  try {
    var e = Pp(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ma = Dp, nn = ma;
function Lp(e, t, r) {
  t == "__proto__" && nn ? nn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Ct = Lp, Np = Ct, Bp = vt, Up = Object.prototype, zp = Up.hasOwnProperty;
function Mp(e, t, r) {
  var n = e[t];
  (!(zp.call(e, t) && Bp(n, r)) || r === void 0 && !(t in e)) && Np(e, t, r);
}
var Er = Mp, jp = Er, Qp = Ct;
function qp(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var i = -1, o = t.length; ++i < o; ) {
    var l = t[i], c = n ? n(r[l], e[l], l, r, e) : void 0;
    c === void 0 && (c = e[l]), a ? Qp(r, l, c) : jp(r, l, c);
  }
  return r;
}
var Ve = qp;
function Vp(e) {
  return e;
}
var Sr = Vp;
function Gp(e, t, r) {
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
var Hp = Gp, Yp = Hp, an = Math.max;
function Wp(e, t, r) {
  return t = an(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = an(n.length - t, 0), o = Array(i); ++a < i; )
      o[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(o), Yp(e, this, l);
  };
}
var ga = Wp;
function Kp(e) {
  return function() {
    return e;
  };
}
var Xp = Kp, Zp = Xp, sn = ma, Jp = Sr, ef = sn ? function(e, t) {
  return sn(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Zp(t),
    writable: !0
  });
} : Jp, tf = ef, rf = 800, nf = 16, af = Date.now;
function sf(e) {
  var t = 0, r = 0;
  return function() {
    var n = af(), a = nf - (n - r);
    if (r = n, a > 0) {
      if (++t >= rf)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var of = sf, lf = tf, cf = of, uf = cf(lf), ya = uf, df = Sr, pf = ga, ff = ya;
function hf(e, t) {
  return ff(pf(e, t, df), e + "");
}
var mf = hf, gf = vt, yf = gt, bf = xt, vf = se;
function Ef(e, t, r) {
  if (!vf(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? yf(r) && bf(t, r.length) : n == "string" && t in r) ? gf(r[t], e) : !1;
}
var Sf = Ef, _f = mf, $f = Sf;
function xf(e) {
  return _f(function(t, r) {
    var n = -1, a = r.length, i = a > 1 ? r[a - 1] : void 0, o = a > 2 ? r[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0, o && $f(r[0], r[1], o) && (i = a < 3 ? void 0 : i, a = 1), t = Object(t); ++n < a; ) {
      var l = r[n];
      l && e(t, l, n, i);
    }
    return t;
  });
}
var Cf = xf;
function wf(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Tf = wf, Ff = Tf, If = mt, Af = q, Of = yt, Rf = xt, kf = fr, Pf = Object.prototype, Df = Pf.hasOwnProperty;
function Lf(e, t) {
  var r = Af(e), n = !r && If(e), a = !r && !n && Of(e), i = !r && !n && !a && kf(e), o = r || n || a || i, l = o ? Ff(e.length, String) : [], c = l.length;
  for (var u in e)
    (t || Df.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Rf(u, c))) && l.push(u);
  return l;
}
var ba = Lf;
function Nf(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Bf = Nf, Uf = se, zf = ht, Mf = Bf, jf = Object.prototype, Qf = jf.hasOwnProperty;
function qf(e) {
  if (!Uf(e))
    return Mf(e);
  var t = zf(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Qf.call(e, n)) || r.push(n);
  return r;
}
var Vf = qf, Gf = ba, Hf = Vf, Yf = gt;
function Wf(e) {
  return Yf(e) ? Gf(e, !0) : Hf(e);
}
var wt = Wf, Kf = Ve, Xf = Cf, Zf = wt, Jf = Xf(function(e, t) {
  Kf(t, Zf(t), e);
}), eh = Jf, th = eh;
const st = /* @__PURE__ */ P(th);
function rh(e) {
  return e && e.length ? e[0] : void 0;
}
var nh = rh;
const ah = /* @__PURE__ */ P(nh);
var ih = Er, sh = $t, oh = xt, on = se, lh = qe;
function ch(e, t, r, n) {
  if (!on(e))
    return e;
  t = sh(t, e);
  for (var a = -1, i = t.length, o = i - 1, l = e; l != null && ++a < i; ) {
    var c = lh(t[a]), u = r;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (a != o) {
      var d = l[c];
      u = n ? n(d, c, l) : void 0, u === void 0 && (u = on(d) ? d : oh(t[a + 1]) ? [] : {});
    }
    ih(l, c, u), l = l[c];
  }
  return e;
}
var uh = ch, dh = br, ph = uh, fh = $t;
function hh(e, t, r) {
  for (var n = -1, a = t.length, i = {}; ++n < a; ) {
    var o = t[n], l = dh(e, o);
    r(l, o) && ph(i, fh(o, e), l);
  }
  return i;
}
var mh = hh, gh = mh, yh = vr;
function bh(e, t) {
  return gh(e, t, function(r, n) {
    return yh(e, n);
  });
}
var vh = bh;
function Eh(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var _r = Eh, ln = Ce, Sh = mt, _h = q, cn = ln ? ln.isConcatSpreadable : void 0;
function $h(e) {
  return _h(e) || Sh(e) || !!(cn && e && e[cn]);
}
var xh = $h, Ch = _r, wh = xh;
function va(e, t, r, n, a) {
  var i = -1, o = e.length;
  for (r || (r = wh), a || (a = []); ++i < o; ) {
    var l = e[i];
    t > 0 && r(l) ? t > 1 ? va(l, t - 1, r, n, a) : Ch(a, l) : n || (a[a.length] = l);
  }
  return a;
}
var Th = va, Fh = Th;
function Ih(e) {
  var t = e == null ? 0 : e.length;
  return t ? Fh(e, 1) : [];
}
var Ah = Ih, Oh = Ah, Rh = ga, kh = ya;
function Ph(e) {
  return kh(Rh(e, void 0, Oh), e + "");
}
var Dh = Ph, Lh = vh, Nh = Dh, Bh = Nh(function(e, t) {
  return e == null ? {} : Lh(e, t);
}), Uh = Bh;
const zh = /* @__PURE__ */ P(Uh);
var Mh = St;
function jh() {
  this.__data__ = new Mh(), this.size = 0;
}
var Qh = jh;
function qh(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Vh = qh;
function Gh(e) {
  return this.__data__.get(e);
}
var Hh = Gh;
function Yh(e) {
  return this.__data__.has(e);
}
var Wh = Yh, Kh = St, Xh = cr, Zh = gr, Jh = 200;
function em(e, t) {
  var r = this.__data__;
  if (r instanceof Kh) {
    var n = r.__data__;
    if (!Xh || n.length < Jh - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Zh(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var tm = em, rm = St, nm = Qh, am = Vh, im = Hh, sm = Wh, om = tm;
function Ae(e) {
  var t = this.__data__ = new rm(e);
  this.size = t.size;
}
Ae.prototype.clear = nm;
Ae.prototype.delete = am;
Ae.prototype.get = im;
Ae.prototype.has = sm;
Ae.prototype.set = om;
var $r = Ae;
function lm(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var cm = lm, um = ba, dm = na, pm = gt;
function fm(e) {
  return pm(e) ? um(e) : dm(e);
}
var Ge = fm, hm = Ve, mm = Ge;
function gm(e, t) {
  return e && hm(t, mm(t), e);
}
var ym = gm, bm = Ve, vm = wt;
function Em(e, t) {
  return e && bm(t, vm(t), e);
}
var Sm = Em, ot = { exports: {} };
ot.exports;
(function(e, t) {
  var r = te, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i ? r.Buffer : void 0, l = o ? o.allocUnsafe : void 0;
  function c(u, d) {
    if (d)
      return u.slice();
    var p = u.length, f = l ? l(p) : new u.constructor(p);
    return u.copy(f), f;
  }
  e.exports = c;
})(ot, ot.exports);
var _m = ot.exports;
function $m(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var xm = $m;
function Cm(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
var wm = Cm;
function Tm() {
  return [];
}
var Ea = Tm, Fm = wm, Im = Ea, Am = Object.prototype, Om = Am.propertyIsEnumerable, un = Object.getOwnPropertySymbols, Rm = un ? function(e) {
  return e == null ? [] : (e = Object(e), Fm(un(e), function(t) {
    return Om.call(e, t);
  }));
} : Im, xr = Rm, km = Ve, Pm = xr;
function Dm(e, t) {
  return km(e, Pm(e), t);
}
var Lm = Dm, Nm = ra, Bm = Nm(Object.getPrototypeOf, Object), Sa = Bm, Um = _r, zm = Sa, Mm = xr, jm = Ea, Qm = Object.getOwnPropertySymbols, qm = Qm ? function(e) {
  for (var t = []; e; )
    Um(t, Mm(e)), e = zm(e);
  return t;
} : jm, _a = qm, Vm = Ve, Gm = _a;
function Hm(e, t) {
  return Vm(e, Gm(e), t);
}
var Ym = Hm, Wm = _r, Km = q;
function Xm(e, t, r) {
  var n = t(e);
  return Km(e) ? n : Wm(n, r(e));
}
var $a = Xm, Zm = $a, Jm = xr, eg = Ge;
function tg(e) {
  return Zm(e, eg, Jm);
}
var xa = tg, rg = $a, ng = _a, ag = wt;
function ig(e) {
  return rg(e, ag, ng);
}
var sg = ig, og = Object.prototype, lg = og.hasOwnProperty;
function cg(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && lg.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var ug = cg, dg = te, pg = dg.Uint8Array, Ca = pg, dn = Ca;
function fg(e) {
  var t = new e.constructor(e.byteLength);
  return new dn(t).set(new dn(e)), t;
}
var Cr = fg, hg = Cr;
function mg(e, t) {
  var r = t ? hg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var gg = mg, yg = /\w*$/;
function bg(e) {
  var t = new e.constructor(e.source, yg.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var vg = bg, pn = Ce, fn = pn ? pn.prototype : void 0, hn = fn ? fn.valueOf : void 0;
function Eg(e) {
  return hn ? Object(hn.call(e)) : {};
}
var Sg = Eg, _g = Cr;
function $g(e, t) {
  var r = t ? _g(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var xg = $g, Cg = Cr, wg = gg, Tg = vg, Fg = Sg, Ig = xg, Ag = "[object Boolean]", Og = "[object Date]", Rg = "[object Map]", kg = "[object Number]", Pg = "[object RegExp]", Dg = "[object Set]", Lg = "[object String]", Ng = "[object Symbol]", Bg = "[object ArrayBuffer]", Ug = "[object DataView]", zg = "[object Float32Array]", Mg = "[object Float64Array]", jg = "[object Int8Array]", Qg = "[object Int16Array]", qg = "[object Int32Array]", Vg = "[object Uint8Array]", Gg = "[object Uint8ClampedArray]", Hg = "[object Uint16Array]", Yg = "[object Uint32Array]";
function Wg(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Bg:
      return Cg(e);
    case Ag:
    case Og:
      return new n(+e);
    case Ug:
      return wg(e, r);
    case zg:
    case Mg:
    case jg:
    case Qg:
    case qg:
    case Vg:
    case Gg:
    case Hg:
    case Yg:
      return Ig(e, r);
    case Rg:
      return new n();
    case kg:
    case Lg:
      return new n(e);
    case Pg:
      return Tg(e);
    case Dg:
      return new n();
    case Ng:
      return Fg(e);
  }
}
var Kg = Wg, Xg = se, mn = Object.create, Zg = function() {
  function e() {
  }
  return function(t) {
    if (!Xg(t))
      return {};
    if (mn)
      return mn(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Jg = Zg, ey = Jg, ty = Sa, ry = ht;
function ny(e) {
  return typeof e.constructor == "function" && !ry(e) ? ey(ty(e)) : {};
}
var ay = ny, iy = je, sy = re, oy = "[object Map]";
function ly(e) {
  return sy(e) && iy(e) == oy;
}
var cy = ly, uy = cy, dy = dr, gn = pr, yn = gn && gn.isMap, py = yn ? dy(yn) : uy, fy = py, hy = je, my = re, gy = "[object Set]";
function yy(e) {
  return my(e) && hy(e) == gy;
}
var by = yy, vy = by, Ey = dr, bn = pr, vn = bn && bn.isSet, Sy = vn ? Ey(vn) : vy, _y = Sy, $y = $r, xy = cm, Cy = Er, wy = ym, Ty = Sm, Fy = _m, Iy = xm, Ay = Lm, Oy = Ym, Ry = xa, ky = sg, Py = je, Dy = ug, Ly = Kg, Ny = ay, By = q, Uy = yt, zy = fy, My = se, jy = _y, Qy = Ge, qy = wt, Vy = 1, Gy = 2, Hy = 4, wa = "[object Arguments]", Yy = "[object Array]", Wy = "[object Boolean]", Ky = "[object Date]", Xy = "[object Error]", Ta = "[object Function]", Zy = "[object GeneratorFunction]", Jy = "[object Map]", eb = "[object Number]", Fa = "[object Object]", tb = "[object RegExp]", rb = "[object Set]", nb = "[object String]", ab = "[object Symbol]", ib = "[object WeakMap]", sb = "[object ArrayBuffer]", ob = "[object DataView]", lb = "[object Float32Array]", cb = "[object Float64Array]", ub = "[object Int8Array]", db = "[object Int16Array]", pb = "[object Int32Array]", fb = "[object Uint8Array]", hb = "[object Uint8ClampedArray]", mb = "[object Uint16Array]", gb = "[object Uint32Array]", x = {};
x[wa] = x[Yy] = x[sb] = x[ob] = x[Wy] = x[Ky] = x[lb] = x[cb] = x[ub] = x[db] = x[pb] = x[Jy] = x[eb] = x[Fa] = x[tb] = x[rb] = x[nb] = x[ab] = x[fb] = x[hb] = x[mb] = x[gb] = !0;
x[Xy] = x[Ta] = x[ib] = !1;
function rt(e, t, r, n, a, i) {
  var o, l = t & Vy, c = t & Gy, u = t & Hy;
  if (r && (o = a ? r(e, n, a, i) : r(e)), o !== void 0)
    return o;
  if (!My(e))
    return e;
  var d = By(e);
  if (d) {
    if (o = Dy(e), !l)
      return Iy(e, o);
  } else {
    var p = Py(e), f = p == Ta || p == Zy;
    if (Uy(e))
      return Fy(e, l);
    if (p == Fa || p == wa || f && !a) {
      if (o = c || f ? {} : Ny(e), !l)
        return c ? Oy(e, Ty(o, e)) : Ay(e, wy(o, e));
    } else {
      if (!x[p])
        return a ? e : {};
      o = Ly(e, p, l);
    }
  }
  i || (i = new $y());
  var h = i.get(e);
  if (h)
    return h;
  i.set(e, o), jy(e) ? e.forEach(function(v) {
    o.add(rt(v, t, r, v, e, i));
  }) : zy(e) && e.forEach(function(v, g) {
    o.set(g, rt(v, t, r, g, e, i));
  });
  var y = u ? c ? ky : Ry : c ? qy : Qy, m = d ? void 0 : y(e);
  return xy(m || e, function(v, g) {
    m && (g = v, v = e[g]), Cy(o, g, rt(v, t, r, g, e, i));
  }), o;
}
var yb = rt, bb = yb, vb = 1, Eb = 4;
function Sb(e) {
  return bb(e, vb | Eb);
}
var _b = Sb;
const $e = /* @__PURE__ */ P(_b);
var $b = de, xb = re, Cb = "[object Boolean]";
function wb(e) {
  return e === !0 || e === !1 || xb(e) && $b(e) == Cb;
}
var Tb = wb;
const Fb = /* @__PURE__ */ P(Tb);
var Ib = de, Ab = q, Ob = re, Rb = "[object String]";
function kb(e) {
  return typeof e == "string" || !Ab(e) && Ob(e) && Ib(e) == Rb;
}
var Pb = kb;
const Db = /* @__PURE__ */ P(Pb);
var Lb = de, Nb = re, Bb = "[object Number]";
function Ub(e) {
  return typeof e == "number" || Nb(e) && Lb(e) == Bb;
}
var zb = Ub;
const Mb = /* @__PURE__ */ P(zb);
function wr() {
}
wr.prototype = new Error();
class En {
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
    r !== null && (u.q = r), n !== null && (u.sort = n, a !== null && (u.sort = a === "desc" ? `-${n}` : n)), i > 0 && (u.page = i), o > 0 && (u.size = o), ne(c) || st(u, this._addFilters(c));
    const d = this._addFilters(l);
    return st(u, d), xe.stringify(u, {
      arrayFormat: "repeat"
    });
  }
}
class jb {
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
function Ke(e, t) {
  return e.indexOf(t) === 0 && (e.length === t.length || e.indexOf(t + "&") === 0);
}
function Dt(e) {
  return xe.stringify({
    q: e
  });
}
function Qb(e) {
  return xe.parse(e).q;
}
function Ia(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = Ia(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function Sn(e, t) {
  const r = Dt(e), n = t.map((o) => Dt(o));
  let a = !1;
  const i = n.filter((o) => {
    const l = Ke(o, r), c = Ke(r, o);
    return l && !a && (a = !0), !l && !c;
  });
  if (!a)
    i.push(r);
  else if (e.length === 3) {
    const l = Ia(e), c = Dt(l), u = i.some((d) => {
      const p = Ke(d, c), f = Ke(c, d);
      return p || f;
    });
    (ne(i) || !u) && i.push(c);
  }
  return i.map((o) => Qb(o));
}
const Aa = (e, t) => {
  if (ne(e))
    return;
  if (!ua(ah(e)))
    return Sn(e, t);
  let r = t;
  for (const n of e)
    r = Sn(n, r);
  return r;
}, Oa = (e, t, r) => {
  let n = zh(t, r);
  return ne(n.filters) || (n.filters = Aa(n.filters, e.filters)), n;
}, lt = {
  queryString: "",
  suggestions: [],
  sortBy: null,
  sortOrder: null,
  page: -1,
  size: -1,
  filters: [],
  hiddenParams: [],
  layout: null
}, Ra = Object.keys(lt), qb = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, Vb = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class Gb {
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
    r !== null && (u.q = r), n !== null && (u.sort = n, a !== null && (u.sort = a === "desc" ? `-${n}` : n)), i > 0 && (u.page = i), o > 0 && (u.size = o), ne(c) || st(u, this._addFilters(c));
    const d = this._addFilters(l);
    return st(u, d), xe.stringify(u, {
      arrayFormat: "repeat"
    });
  }
}
class ka {
  constructor(t) {
    this.axiosConfig = Le(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = tt.CancelToken;
  }
  validateAxiosConfig() {
    if (!kp(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = Le(t, "interceptors.request", void 0), this.responseInterceptor = Le(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: Gb,
      InvenioRequestSerializer: En
    };
    return typeof t == "string" ? r[t] : t || En;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), a = Le(t, "invenio.responseSerializer", jb);
    this.requestSerializer = new n(), this.responseSerializer = new a();
  }
  initAxios() {
    const t = {
      paramsSerializer: this.requestSerializer.serialize,
      ...this.axiosConfig
    };
    this.http = tt.create(t), this.addInterceptors();
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
      const n = Oa(t, r.extras, Ra);
      return ne(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw tt.isCancel(r) ? new wr() : r;
    }
  }
}
class Hb {
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
          return Mb(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const a = ua(n) ? n : [n], i = ":", o = t.urlFilterSeparator, l = `[^\\${i}\\${o}]*`, c = `${l}\\${i}${l}`, u = `${c}(\\${o}${c})*`, d = new RegExp(`^${u}$`);
          return a.every((p) => String(p).match(d));
        }
        default:
          return !1;
      }
    };
  }
}
const Yb = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, _n = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class Wb {
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
class Kb {
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
    }, this.urlParamsMapping = Go(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !Fb(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !Db(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new Hb(), this.urlParser = t.urlParser || new Wb(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), a = this._mergeParamsIntoState(n, t), i = this._mapQueryStateToUrlParams(a);
    return _n(i), a;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      Yb(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    _n(r);
  }
}
const Xb = "SET_QUERY_COMPONENT_INITIAL_STATE", Pa = "SET_QUERY_STRING", Tr = "SET_QUERY_SORTING", Fr = "SET_QUERY_SORT_BY", Ir = "SET_QUERY_SORT_ORDER", He = "SET_QUERY_STATE", Da = "SET_QUERY_PAGINATION_PAGE", La = "SET_QUERY_PAGINATION_SIZE", Na = "SET_QUERY_FILTERS", Ba = "SET_QUERY_SUGGESTIONS", Ua = "SET_SUGGESTION_STRING", za = "CLEAR_QUERY_SUGGESTIONS", Ma = "RESULTS_LOADING", ja = "RESULTS_FETCH_SUCCESS", Qa = "RESULTS_FETCH_ERROR", Yt = "RESULTS_UPDATE_LAYOUT", qa = "RESET_QUERY", Zb = (e) => (t) => {
  e && t(J({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, Va = (e) => (t) => {
  t({
    type: He,
    payload: e
  }), t(J());
}, Ga = (e) => (t) => {
  t({
    type: Pa,
    payload: e
  }), t(J());
}, Jb = (e, t) => (r) => {
  r({
    type: Tr,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(J());
}, ev = (e) => (t) => {
  t({
    type: Fr,
    payload: e
  }), t(J());
}, tv = (e) => (t) => {
  t({
    type: Ir,
    payload: e
  }), t(J());
}, rv = (e) => (t) => {
  t({
    type: Da,
    payload: e
  }), t(J());
}, nv = (e) => (t) => {
  t({
    type: La,
    payload: e
  }), t(J());
}, Ar = (e) => (t) => {
  t({
    type: Na,
    payload: e
  }), t(J());
}, av = (e) => async (t, r, n) => {
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
}, iv = () => (e, t, r) => {
  e({
    type: qa,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(J());
}, sv = (e, t, r, n) => {
  const a = t.urlHandlerApi;
  a && (r ? a.replace(e) : n && a.set(e));
}, ov = (e, t, r, n) => {
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
}, lv = (e, t, r, n) => {
  function a(l, c, u, d) {
    l.queryString === "" ? (l.sortBy = u.defaultSortingOnEmptyQueryString.sortBy, l.sortOrder = u.defaultSortingOnEmptyQueryString.sortOrder) : (l.sortBy = c.initialSortBy, l.sortOrder = c.initialSortOrder), d({
      type: He,
      payload: l
    });
  }
  function i(l, c, u, d) {
    c.hasUserChangedSorting || a(l, c, u, d);
  }
  !ne(r.defaultSortingOnEmptyQueryString) && i(e, t, r, n);
}, J = function() {
  let {
    shouldUpdateUrlQueryString: e = !0,
    shouldReplaceUrlQueryString: t = !1
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return async (r, n, a) => {
    const i = n().app;
    let o = $e(n().query);
    lv(o, i, a, r), o = $e(n().query), sv(o, a, t, e), r({
      type: Ma
    });
    try {
      let c = await a.searchApi.search(o);
      "newQueryState" in c && (c = ov($e(c), r, n, a)), r({
        type: ja,
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
          type: Qa,
          payload: {
            error: l
          }
        });
    }
  };
}, cv = (e) => (t) => {
  t({
    type: Ua,
    payload: e
  }), t(uv());
}, uv = () => async (e, t, r) => {
  const n = $e(t().query), a = r.suggestionApi;
  try {
    const i = await a.search(n);
    e({
      type: Ba,
      payload: {
        suggestions: i.suggestions
      }
    });
  } catch (i) {
    console.error("Could not load suggestions due to: " + i);
  }
}, dv = () => (e) => {
  e({
    type: za,
    payload: {
      suggestions: []
    }
  });
}, pv = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: He,
      payload: n
    }), e(J({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, C = /* @__PURE__ */ s.createContext({}), fv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
    case Tr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Fr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Ir:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    default:
      return e;
  }
}, hv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Pa:
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
    case Fr:
      return {
        ...e,
        sortBy: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case Ir:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case Da:
      return {
        ...e,
        page: t.payload
      };
    case La:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case Na:
      return {
        ...e,
        page: 1,
        filters: Aa(t.payload, e.filters)
      };
    case Ba:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case za:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case Ua:
      return {
        ...e,
        suggestionString: t.payload
      };
    case Xb:
      return {
        ...e,
        ...t.payload
      };
    case He:
      return {
        ...e,
        ...lt,
        ...Oa(lt, t.payload, Ra)
      };
    case Yt:
      return {
        ...e,
        layout: t.payload
      };
    case qa:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, mv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Ma:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case ja:
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
    case Qa:
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
var gv = io({
  app: fv,
  query: hv,
  results: mv
});
function $n(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: a,
    sortOrder: i
  } = t;
  return r !== a || n !== i;
}
function yv(e, t, r) {
  const n = $n(r, t), a = !ne(e.defaultSortingOnEmptyQueryString);
  let i = !1;
  return a && (i = $n(r, e.defaultSortingOnEmptyQueryString)), n && i;
}
function bv(e) {
  const t = {
    ...lt,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = yv(e, t, r), a = {
    ...Vb,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, i = {
    ...qb,
    loading: e.searchOnInit
  };
  return {
    app: a,
    query: r,
    results: i
  };
}
function vv(e) {
  const t = bv(e);
  return so(gv, t, oo(lo.withExtraArgument(e)));
}
function xn(e) {
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
var Ev = b.component("Bootstrap", Or);
const Sv = (e) => ({
  onAppInitialized: (t) => e(Zb(t)),
  updateQueryState: (t) => e(Va(t)),
  searchOnUrlQueryStringChanged: () => e(pv())
}), _v = k(null, Sv)(Ev);
class Rr extends L {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new Kb(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = vv(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
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
      buildUID: (c, u) => xn(c, u, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, l = xn("ReactSearchKit.children", a, t);
    return /* @__PURE__ */ s.createElement(C.Provider, {
      value: o
    }, /* @__PURE__ */ s.createElement(Xs, {
      store: this.store
    }, /* @__PURE__ */ s.createElement(_v, {
      searchOnInit: i,
      eventListenerEnabled: n
    }, /* @__PURE__ */ s.createElement(b, {
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
var $v = b.component("ReactSearchKit", Rr);
class Ha extends L {
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
    return !!t.length && /* @__PURE__ */ s.createElement(Ya, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
Ha.defaultProps = {
  overridableId: ""
};
const Ya = (e) => {
  let {
    overridableId: t,
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  } = e;
  const {
    buildUID: i
  } = I(C);
  return /* @__PURE__ */ s.createElement(b, {
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
      /* @__PURE__ */ s.createElement(ie, {
        image: !0,
        key: l,
        onClick: () => n(u)
      }, c, /* @__PURE__ */ s.createElement(_, {
        name: "delete"
      }))
    );
  })));
};
Ya.defaultProps = {
  overridableId: ""
};
var xv = b.component("ActiveFilters", Ha);
const Cv = (e) => ({
  updateQueryFilters: (t) => e(Ar(t))
});
k((e) => ({
  filters: e.query.filters
}), Cv)(xv);
function wv(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var Tv = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
wv(Tv);
class Wa extends L {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? co.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ s.createElement(Iv, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
Wa.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const Fv = (e) => /* @__PURE__ */ s.createElement(Wa, Object.assign({
  key: e.queryString
}, e)), Iv = (e) => {
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
  return /* @__PURE__ */ s.createElement(b, Object.assign({
    id: c("AutocompleteSearchBar.element", t)
  }, l), /* @__PURE__ */ s.createElement("div", {
    className: "AutoCompleteText"
  }, /* @__PURE__ */ s.createElement(Zn, {
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
  }), /* @__PURE__ */ s.createElement(Av, {
    querySuggestions: a,
    overridableId: t
  })));
}, Av = (e) => {
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
  return n.length === 0 ? null : /* @__PURE__ */ s.createElement(b, Object.assign({
    id: a("AutocompleteSearchBar.suggestions", t)
  }, r), /* @__PURE__ */ s.createElement("ul", null, n.map((o) => /* @__PURE__ */ s.createElement(z, {
    as: "li",
    onClick: () => i(o),
    key: o
  }, o))));
};
var Ov = b.component("AutocompleteSearchBar", Fv);
const Rv = (e) => ({
  updateQueryString: (t) => e(Ga(t)),
  updateSuggestions: (t) => e(cv(t)),
  clearSuggestions: () => e(dv())
}), kv = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
k(kv, Rv)(Ov);
class Tt extends L {
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
        return /* @__PURE__ */ s.createElement(Tt, {
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
      return /* @__PURE__ */ s.createElement(Xa, {
        key: i.key,
        bucket: i,
        keyField: o,
        isSelected: l,
        onFilterClicked: c,
        getChildAggCmps: u,
        overridableId: n
      });
    });
    return /* @__PURE__ */ s.createElement(Ka, {
      valuesCmp: a,
      overridableId: n
    });
  }
}
Tt.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const Ka = (e) => {
  let {
    valuesCmp: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = I(C);
  return /* @__PURE__ */ s.createElement(b, {
    id: n("BucketAggregationContainer.element", r),
    valuesCmp: t
  }, /* @__PURE__ */ s.createElement($, null, t));
};
Ka.defaultProps = {
  overridableId: ""
};
const Xa = (e) => {
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
  return /* @__PURE__ */ s.createElement(b, {
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
Xa.defaultProps = {
  overridableId: ""
};
var Pv = b.component("BucketAggregationValues", Tt);
class Za extends L {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: a
      } = this.props;
      return /* @__PURE__ */ s.createElement(Pv, {
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
    return /* @__PURE__ */ s.createElement(Ja, Object.assign({
      title: this.title,
      containerCmp: l,
      overridableId: n
    }, a));
  }
}
Za.defaultProps = {
  overridableId: ""
};
const Ja = (e) => {
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
  return a && /* @__PURE__ */ s.createElement(b, {
    id: o("BucketAggregation.element", t),
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: i
  }, /* @__PURE__ */ s.createElement(D, null, /* @__PURE__ */ s.createElement(D.Content, null, /* @__PURE__ */ s.createElement(D.Header, null, n)), /* @__PURE__ */ s.createElement(D.Content, null, a)));
};
Ja.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var Dv = b.component("BucketAggregation", Za);
const Lv = (e) => ({
  updateQueryFilters: (t) => e(Ar(t))
});
k((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), Lv)(Dv);
class ei extends L {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
ei.defaultProps = {
  condition: !0
};
var K = b.component("ShouldRender", ei);
class ti extends L {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: a
    } = this.props;
    return /* @__PURE__ */ s.createElement(K, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ s.createElement(ri, {
      totalResults: r,
      overridableId: a
    })));
  }
}
ti.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const ri = (e) => {
  let {
    totalResults: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = I(C), a = n("Count.element", r);
  return /* @__PURE__ */ s.createElement(b, {
    id: a,
    totalResults: t
  }, /* @__PURE__ */ s.createElement(ie, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
ri.defaultProps = {
  overridableId: ""
};
var Nv = b.component("Count", ti);
const Bv = k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(Nv);
class ni extends L {
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
    return /* @__PURE__ */ s.createElement(K, {
      condition: !t && ne(n) && r === 0
    }, /* @__PURE__ */ s.createElement(ai, Object.assign({}, c, {
      queryString: a,
      resetQuery: this.resetQuery,
      extraContent: i,
      userSelectionFilters: l,
      overridableId: o
    })));
  }
}
ni.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const ai = (e) => {
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
  return /* @__PURE__ */ s.createElement(b, {
    id: o("EmptyResults.element", t),
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: i
  }, /* @__PURE__ */ s.createElement(W, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ s.createElement(me, {
    icon: !0
  }, /* @__PURE__ */ s.createElement(_, {
    name: "search"
  }), "No results found!"), r && /* @__PURE__ */ s.createElement("em", null, 'Current search "', r, '"'), /* @__PURE__ */ s.createElement("br", null), /* @__PURE__ */ s.createElement(z, {
    primary: !0,
    onClick: () => n()
  }, "Clear query"), a));
};
ai.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var Uv = b.component("EmptyResults", ni);
const zv = (e) => ({
  resetQuery: () => e(iv())
}), Mv = k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), zv)(Uv);
function ii(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ s.createElement(K, {
    condition: !t && !ne(r)
  }, /* @__PURE__ */ s.createElement(si, {
    error: r,
    overridableId: n
  }));
}
ii.defaultProps = {
  overridableId: ""
};
const si = (e) => {
  let {
    error: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = I(C);
  return /* @__PURE__ */ s.createElement(b, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ s.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
si.defaultProps = {
  overridableId: ""
};
var jv = b.component("Error", ii);
k((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(jv);
function oi(e) {
  const t = (a) => /* @__PURE__ */ s.createElement(e, a);
  return k((a) => ({
    currentQueryState: a.query,
    currentResultsState: a.results
  }), (a) => ({
    updateQueryState: (i) => a(Va(i))
  }))(t);
}
class li extends L {
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
    return /* @__PURE__ */ s.createElement(K, {
      condition: t !== null && !r && n > 0
    }, /* @__PURE__ */ s.createElement(ci, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: a
    }));
  }
}
li.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
const ci = (e) => {
  let {
    overridableId: t,
    currentLayout: r,
    onLayoutChange: n
  } = e;
  const {
    buildUID: a
  } = I(C);
  return /* @__PURE__ */ s.createElement(b, {
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
ci.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var Qv = b.component("LayoutSwitcher", li);
const qv = (e) => ({
  updateLayout: (t) => e(av(t))
});
k((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), qv)(Qv);
const Cn = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class ui extends L {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...Cn,
      ...t.options
    } : Cn;
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
    return /* @__PURE__ */ s.createElement(K, {
      condition: !t && n > -1 && a > -1 && o ? r > 0 : r > a
    }, /* @__PURE__ */ s.createElement(di, {
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
ui.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const di = (e) => {
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
  const u = o.boundaryRangeCount, d = o.siblingRangeCount, p = o.showEllipsis, f = o.showFirst, h = o.showLast, y = o.showPrev, m = o.showNext, v = o.size, g = Math.floor(l / n), S = Math.ceil(a / n), A = Math.min(S, g), {
    buildUID: B
  } = I(C);
  return r > S && i(S), /* @__PURE__ */ s.createElement(b, {
    id: B("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: a,
    options: o,
    onPageChange: i
  }, /* @__PURE__ */ s.createElement(Zs, Object.assign({
    activePage: r,
    totalPages: A,
    onPageChange: (ee, O) => {
      let {
        activePage: pe
      } = O;
      return i(pe);
    },
    boundaryRange: u,
    siblingRange: d,
    ellipsisItem: p ? void 0 : null,
    firstItem: f ? void 0 : null,
    lastItem: h ? void 0 : null,
    prevItem: y ? void 0 : null,
    nextItem: m ? void 0 : null,
    size: v
  }, c)));
};
di.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var Vv = b.component("Pagination", ui);
const Gv = (e) => ({
  updateQueryPage: (t) => e(rv(t))
}), Hv = k((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), Gv)(Vv);
function pi(e) {
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
  }, [o]), /* @__PURE__ */ s.createElement(K, {
    condition: !t && r > 0
  }, /* @__PURE__ */ s.createElement(fi, {
    results: n,
    resultsPerRow: a,
    overridableId: i
  }));
}
pi.defaultProps = {
  resultsPerRow: 3,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const Yv = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = I(C);
  return /* @__PURE__ */ s.createElement(b, {
    id: n("ResultsGrid.item", r),
    result: t
  }, /* @__PURE__ */ s.createElement(D, {
    fluid: !0,
    href: `#${t.id}`
  }, /* @__PURE__ */ s.createElement(Js, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ s.createElement(D.Content, null, /* @__PURE__ */ s.createElement(D.Header, null, t.title), /* @__PURE__ */ s.createElement(D.Description, null, t.description))));
}, fi = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: a
  } = I(C), i = r.map((o, l) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ s.createElement(Yv, {
      key: l,
      result: o,
      overridableId: t
    })
  ));
  return /* @__PURE__ */ s.createElement(b, {
    id: a("ResultsGrid.container", t),
    results: i,
    resultsPerRow: n
  }, /* @__PURE__ */ s.createElement(D.Group, {
    itemsPerRow: n
  }, i));
};
fi.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var Wv = b.component("ResultsGrid", pi);
const Kv = k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(Wv);
function hi(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: a,
    onResultsRendered: i
  } = e;
  return Me(() => {
    i && i();
  }, [i]), /* @__PURE__ */ s.createElement(K, {
    condition: !t && r > 0
  }, /* @__PURE__ */ s.createElement(mi, {
    results: n,
    overridableId: a
  }));
}
hi.defaultProps = {
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
  return /* @__PURE__ */ s.createElement(b, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ s.createElement(ve, {
    href: `#${t.id}`
  }, /* @__PURE__ */ s.createElement(ve.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ s.createElement(ve.Content, null, /* @__PURE__ */ s.createElement(ve.Header, null, t.title), /* @__PURE__ */ s.createElement(ve.Description, null, t.description))));
}, mi = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = I(C), a = t.map((i, o) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ s.createElement(Xv, {
      result: i,
      key: o,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ s.createElement(b, {
    id: n("ResultsList.container", r),
    results: a
  }, /* @__PURE__ */ s.createElement(ve.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, a));
};
mi.defaultProps = {
  overridableId: ""
};
var Zv = b.component("ResultsList", hi);
const gi = k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(Zv);
function yi(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ s.createElement(bi, {
    overridableId: n
  }) : t;
}
yi.defaultProps = {
  overridableId: ""
};
const bi = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = I(C);
  return /* @__PURE__ */ s.createElement(b, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ s.createElement(Jn, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
bi.defaultProps = {
  overridableId: ""
};
var Jv = b.component("ResultsLoader", yi);
const eE = k((e) => ({
  loading: e.results.loading
}))(Jv);
function vi(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: a,
    onResultsRendered: i
  } = e;
  return /* @__PURE__ */ s.createElement(K, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ s.createElement(Ei, {
    layout: n,
    overridableId: a,
    onResultsRendered: i
  }));
}
vi.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const Ei = (e) => {
  let {
    layout: t,
    overridableId: r,
    onResultsRendered: n
  } = e;
  const {
    buildUID: a
  } = I(C);
  return /* @__PURE__ */ s.createElement(b, {
    id: a("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ s.createElement(gi, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ s.createElement(Kv, {
    overridableId: r,
    onResultsRendered: n
  }));
};
Ei.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var tE = b.component("ResultsMultiLayout", vi);
k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(tE);
class Si extends L {
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
    return /* @__PURE__ */ s.createElement(K, {
      condition: !t && r !== -1 && c ? n > 0 : n > r
    }, a(/* @__PURE__ */ s.createElement(_i, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
Si.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const _i = (e) => {
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
  return /* @__PURE__ */ s.createElement(b, {
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
_i.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var rE = b.component("ResultsPerPage", Si);
const nE = (e) => ({
  updateQuerySize: (t) => e(nv(t))
}), aE = k((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), nE)(rE);
class $i extends L {
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
    return /* @__PURE__ */ s.createElement(kr, {
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
$i.defaultProps = {
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
const xi = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ s.createElement($i, Object.assign({
    key: t
  }, e));
};
xi.defaultProps = {
  queryString: ""
};
class kr extends L {
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
    return /* @__PURE__ */ s.createElement(b, {
      id: u("SearchBar.element", i),
      queryString: l,
      onBtnSearchClick: r,
      onInputChange: n,
      onKeyPress: a,
      placeholder: o,
      actionProps: t,
      uiProps: c
    }, /* @__PURE__ */ s.createElement(Zn, Object.assign({
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
kr.defaultProps = {
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
kr.contextType = C;
var iE = b.component("SearchBar", xi);
const sE = (e) => ({
  updateQueryString: (t) => e(Ga(t))
}), oE = k((e) => ({
  queryString: e.query.queryString
}), sE)(iE);
class Ci extends L {
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
    return /* @__PURE__ */ s.createElement(K, {
      condition: t !== null && (l || t !== null) && !n && a > 0
    }, i(/* @__PURE__ */ s.createElement(wi, {
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
Ci.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const wi = (e) => {
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
  return /* @__PURE__ */ s.createElement(b, {
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
wi.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var lE = b.component("Sort", Ci);
const cE = (e) => ({
  updateQuerySorting: (t, r) => e(Jb(t, r))
});
k((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), cE)(lE);
class Ti extends L {
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
    return /* @__PURE__ */ s.createElement(K, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ s.createElement(Fi, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
Ti.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const Fi = (e) => {
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
  return /* @__PURE__ */ s.createElement(b, {
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
Fi.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var uE = b.component("SortBy", Ti);
const dE = (e) => ({
  updateQuerySortBy: (t) => e(ev(t))
});
k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), dE)(uE);
class Ii extends L {
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
    return /* @__PURE__ */ s.createElement(K, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ s.createElement(Ai, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
Ii.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const Ai = (e) => {
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
  return /* @__PURE__ */ s.createElement(b, {
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
Ai.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var pE = b.component("SortOrder", Ii);
const fE = (e) => ({
  updateQuerySortOrder: (t) => e(tv(t))
});
k((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), fE)(pE);
const Oi = (e) => {
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
  return /* @__PURE__ */ s.createElement(b, {
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
Oi.defaultProps = {
  overridableId: ""
};
var hE = b.component("SearchFilters.Toggle", Oi);
const mE = (e) => ({
  updateQueryFilters: (t) => e(Ar(t))
});
k((e) => ({
  userSelectionFilters: e.query.filters
}), mE)(hE);
const Ri = s.createContext(
  null
), gE = ({ config: e, children: t, updateQueryState: r, currentQueryState: n }) => {
  const a = R(() => {
    r({
      ...n,
      queryString: n.queryString
    });
  }, [r, n]);
  return /* @__PURE__ */ s.createElement(Ri.Provider, { value: { config: e, refreshSearch: a } }, t);
}, yE = oi(gE), Ft = () => {
  const e = s.useContext(Ri);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
};
function Wt(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var bE = (e) => typeof e == "object" && e !== null;
function vE(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var EE = (e) => e === "base";
function SE(e) {
  return e.slice().filter((t) => !EE(t));
}
function wn(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function _E(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = wn(r % 52) + t;
  return wn(r % 52) + t;
}
function $E(e, t) {
  let r = t.length;
  for (; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function xE(e) {
  return _E($E(5381, e) >>> 0);
}
var ki = /\s*!(important)?/i;
function CE(e) {
  return typeof e == "string" ? ki.test(e) : !1;
}
function wE(e) {
  return typeof e == "string" ? e.replace(ki, "").trim() : e;
}
function Pi(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var Pr = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...n) => {
    const a = JSON.stringify(n);
    if (t.has(a))
      return t.get(a);
    const i = e(...n);
    return t.set(a, i), i;
  };
}, TE = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function Di(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((n) => {
    if (TE.has(n))
      return;
    const a = t[n], i = r[n];
    Wt(a) && Wt(i) ? t[n] = Di(a, i) : t[n] = i;
  }), t), {});
}
var FE = (e) => e != null;
function Li(e, t, r = {}) {
  const { stop: n, getKey: a } = r;
  function i(o, l = []) {
    if (bE(o)) {
      const c = {};
      for (const [u, d] of Object.entries(o)) {
        const p = (a == null ? void 0 : a(u, d)) ?? u, f = [...l, p];
        if (n != null && n(o, f))
          return t(o, l);
        const h = i(d, f);
        FE(h) && (c[p] = h);
      }
      return c;
    }
    return t(o, l);
  }
  return i(e);
}
function IE(e, t) {
  return e.reduce(
    (r, n, a) => {
      const i = t[a];
      return n != null && (r[i] = n), r;
    },
    {}
  );
}
function Ni(e, t, r = !0) {
  const { utility: n, conditions: a } = t, { hasShorthand: i, resolveShorthand: o } = n;
  return Li(
    e,
    (l) => Array.isArray(l) ? IE(l, a.breakpoints.keys) : l,
    {
      stop: (l) => Array.isArray(l),
      getKey: r ? (l) => i ? o(l) : l : void 0
    }
  );
}
var AE = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, OE = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function RE(e) {
  const { utility: t, hash: r, conditions: n = AE } = e, a = (o) => [t.prefix, o].filter(Boolean).join("-"), i = (o, l) => {
    let c;
    if (r) {
      const u = [...n.finalize(o), l];
      c = a(t.toHash(u, xE));
    } else
      c = [...n.finalize(o), a(l)].join(":");
    return c;
  };
  return Pr(({ base: o, ...l } = {}) => {
    const c = Object.assign(l, o), u = Ni(c, e), d = /* @__PURE__ */ new Set();
    return Li(u, (p, f) => {
      if (p == null)
        return;
      const h = CE(p), [y, ...m] = n.shift(f), v = SE(m), g = t.transform(y, wE(OE(p)));
      let S = i(v, g.className);
      h && (S = `${S}!`), d.add(S);
    }), Array.from(d).join(" ");
  });
}
function kE(...e) {
  return e.flat().filter((t) => Wt(t) && Object.keys(vE(t)).length > 0);
}
function PE(e) {
  function t(a) {
    const i = kE(...a);
    return i.length === 1 ? i : i.map((o) => Ni(o, e));
  }
  function r(...a) {
    return Di(...t(a));
  }
  function n(...a) {
    return Object.assign({}, ...t(a));
  }
  return { mergeCss: Pr(r), assignCss: n };
}
var DE = /([A-Z])/g, LE = /^ms-/, NE = Pr((e) => e.startsWith("--") ? e : e.replace(DE, "-$1").replace(LE, "-ms-").toLowerCase()), BE = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${BE.split(",").join("|")}`;
const UE = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", Bi = new Set(UE.split(",")), zE = /^@|&|&$/;
function Tn(e) {
  return Bi.has(e) || zE.test(e);
}
const ME = /^_/, jE = /&|@/;
function QE(e) {
  return e.map((t) => Bi.has(t) ? t.replace(ME, "") : jE.test(t) ? `[${Pi(t.trim())}]` : t);
}
function qE(e) {
  return e.sort((t, r) => {
    const n = Tn(t), a = Tn(r);
    return n && !a ? 1 : !n && a ? -1 : 0;
  });
}
const VE = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle", Ui = /* @__PURE__ */ new Map(), zi = /* @__PURE__ */ new Map();
VE.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [n, ...a] = r.split("/");
  Ui.set(t, n), a.length && a.forEach((i) => {
    zi.set(i === "1" ? n : i, t);
  });
});
const Fn = (e) => zi.get(e) || e, Mi = {
  conditions: {
    shift: qE,
    finalize: QE,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = Fn(e);
      return { className: `${Ui.get(r) || NE(r)}_${Pi(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: Fn
  }
}, GE = RE(Mi), E = (...e) => GE(ji(...e));
E.raw = (...e) => ji(...e);
const { mergeCss: ji, assignCss: gC } = PE(Mi), HE = {
  spinnerIcon: E({
    marginInlineEnd: "0.5rem"
  })
}, Qi = ({
  progress: e,
  showPercentage: t = !1
}) => /* @__PURE__ */ s.createElement(or, null, Object.entries(e).map(([r, n]) => /* @__PURE__ */ s.createElement(W.Inline, { basic: !0, key: r }, /* @__PURE__ */ s.createElement(_, { name: "spinner", loading: !0, className: HE.spinnerIcon }), /* @__PURE__ */ s.createElement("strong", null, r), " ", t ? `${n}%` : null))), qi = () => /* @__PURE__ */ s.createElement(W, { basic: !0, padded: "very" }, /* @__PURE__ */ s.createElement(eo, { active: !0, inverted: !0 }, /* @__PURE__ */ s.createElement(Jn, { inverted: !0 }, "Loading"))), YE = ({ status: e, ...t }) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ s.createElement(_, { name: "close", color: "red", ...t }) : e === "success" || e === "created" ? /* @__PURE__ */ s.createElement(_, { name: "check circle", color: "green", ...t }) : e === "importing" || e === "validating" ? /* @__PURE__ */ s.createElement(_, { name: "spinner", loading: !0, ...t }) : e === "validated" ? /* @__PURE__ */ s.createElement(_, { name: "check circle", color: "blue", ...t }) : /* @__PURE__ */ s.createElement(_, { ...t }), Vi = ({
  status: e,
  children: t,
  ...r
}) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ s.createElement(ie, { color: "red", ...r }, /* @__PURE__ */ s.createElement(_, { name: "warning sign" }), t) : e === "success" || e === "validated" || e === "created" ? /* @__PURE__ */ s.createElement(ie, { color: "green", ...r }, /* @__PURE__ */ s.createElement(_, { name: "check circle" }), t) : e === "importing" || e === "validating" ? /* @__PURE__ */ s.createElement(ie, { color: "blue", ...r }, /* @__PURE__ */ s.createElement(_, { name: "spinner", loading: !0 }), t) : /* @__PURE__ */ s.createElement(ie, { ...r }, t), Be = (e) => (e == null ? void 0 : e.charAt(0).toUpperCase()) + (e == null ? void 0 : e.slice(1)) || "";
var Gi = { exports: {} };
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
})(Gi);
var WE = Gi.exports;
const KE = /* @__PURE__ */ P(WE), Hi = (e) => e.reduce((t, r) => t + r.file.size, 0), Yi = (e) => Dr(Hi(e)), Dr = (e) => {
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
var Wi = { exports: {} };
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
              var v = n(y[0]);
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
})(Wi);
var XE = Wi.exports;
const ZE = /* @__PURE__ */ P(XE), JE = () => ZE.get("csrftoken") || null, eS = (e) => {
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
}, yC = (e) => new ka(e), bC = (e, t = {}, r = !0) => ({
  axios: {
    url: e,
    headers: {
      Accept: "application/vnd.inveniordm.v1+json",
      ...t
    },
    withCredentials: r
  }
}), V = tt.create({
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
    const t = JE();
    return t && (e.headers["X-CSRFTOKEN"] = t), e;
  },
  (e) => Promise.reject(e)
);
const Ki = async (e, t) => {
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
}, tS = async (e, t) => {
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
}, rS = async (e) => {
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
}, nS = async (e) => {
  try {
    const t = await V.delete(`/api/importer-tasks/${e}`);
    return t.status === 204 ? !0 : (console.error(`Failed to delete task: ${t.statusText}`), !1);
  } catch (t) {
    return console.error(
      `Error deleting task: ${t instanceof Error ? t.message : "Unknown error"}`
    ), !1;
  }
}, Xi = async (e) => {
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
}, aS = async () => {
  try {
    const e = await V.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, iS = async (e) => {
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
}, sS = async (e, t) => {
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
}, oS = async (e, t, r) => {
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
}, Zi = async (e) => {
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
}, Ji = async (e, t = {}) => {
  const { autoExecute: r = !1, onProgress: n, onError: a } = t;
  try {
    n == null || n("Validating", 0), await Zi(e), n == null || n("Validating", 50);
    let i = await Ue(e);
    return n == null || n("Validating", 100), r && (i.status === "validated" || i.status === "validated with failures") && (n == null || n("Executing", 0), await Xi(e), n == null || n("Executing", 50), i = await Ue(e), n == null || n("Executing", 100)), i;
  } catch (i) {
    const o = i instanceof Error ? i : new Error("Unknown error during workflow execution");
    throw a == null || a(o, "Executing"), o;
  }
}, es = async (e, t, r) => {
  if (!t || t.length === 0)
    return;
  const n = t.map((a) => a.name);
  await sS(e, n);
  for (const a of t)
    try {
      r == null || r({
        fileName: a.name,
        loaded: 0,
        total: a.size,
        percentage: 0
      }), await oS(e, a.name, a), r == null || r({
        fileName: a.name,
        loaded: a.size,
        total: a.size,
        percentage: 90
      }), await tS(e, a.name), r == null || r({
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
}, lS = async (e, t, r, n = {}) => {
  const {
    autoValidate: a = !1,
    autoExecute: i = !1,
    onProgress: o,
    onError: l
  } = n;
  try {
    o == null || o("Creating Task", 0);
    const c = await rS(e);
    if (!c)
      throw new Error("Failed to create import task");
    return o == null || o("Creating Task", 100), t && (o == null || o("Uploading Metadata", 0), await Ki(c.id, t), o == null || o("Uploading Metadata", 100)), r && r.length > 0 && await es(c.id, r, (u) => {
      o == null || o("Uploading Files", u.percentage);
    }), a && t && await Ji(c.id, {
      autoExecute: i,
      onProgress: o,
      onError: l
    }), c;
  } catch (c) {
    const u = c instanceof Error ? c : new Error("Unknown error during task creation");
    throw l == null || l(u, "Creating Task"), u;
  }
}, cS = async (e, t, r, n = {}) => {
  const { onProgress: a, onError: i } = n;
  try {
    a == null || a("Updating", 0), t && (a == null || a("Updating Metadata", 0), await Ki(e, t), a == null || a("Updating Metadata", 100)), r && r.length > 0 && await es(e, r, (o) => {
      a == null || a("Updating Files", o.percentage);
    }), a == null || a("Updating", 100);
  } catch (o) {
    const l = o instanceof Error ? o : new Error("Unknown error during task update");
    throw i == null || i(l, "Updating"), l;
  }
}, uS = async (e) => {
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
}, ts = (e, t = {}) => {
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
      if (!await nS(e))
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
      const g = await Zi(e);
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
      const g = await Xi(e);
      if (!g)
        throw new Error(`Failed to execute bulk import for task ${e}`);
      return c == null || c(g), await Ue(e), g;
    } catch (g) {
      const S = g instanceof Error ? g : new Error("Unknown error");
      throw n((A) => ({ ...A, error: S })), u == null || u(S), S;
    } finally {
      n((g) => ({ ...g, isBulkImporting: !1 }));
    }
  }, [e, c, u]), v = R(async () => {
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
    getStatus: v,
    clearError: f
  };
}, Xe = {
  actionsCell: E({
    inlineSize: "15rem"
  }),
  errorContainer: E({
    display: "flex",
    alignItems: "center",
    gap: "0.3125rem",
    color: "red",
    fontSize: "0.75rem",
    marginBlockEnd: "0.3125rem"
  }),
  clearErrorButton: E({
    marginInlineStart: "0.3125rem",
    fontSize: "0.625rem"
  }),
  actionsContainer: E({
    display: "flex",
    alignItems: "center",
    gap: "0.625rem"
  })
}, dS = ({ result: e, index: t }) => {
  var y;
  const { config: r, refreshSearch: n } = Ft(), {
    deleteTask: a,
    runBulkImport: i,
    getStatus: o,
    isDeleting: l,
    isValidating: c,
    isBulkImporting: u,
    isGettingStatus: d,
    error: p,
    clearError: f
  } = ts(e.id, {
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
  return /* @__PURE__ */ s.createElement(ft, { key: t }, /* @__PURE__ */ s.createElement(H, null, /* @__PURE__ */ s.createElement("a", { href: `${r.resultPath}/${e.id}` }, e.title || "No title")), /* @__PURE__ */ s.createElement(H, null, Kt(e.created)), /* @__PURE__ */ s.createElement(H, null, /* @__PURE__ */ s.createElement(Vi, { status: e.status }, Be(e.status))), /* @__PURE__ */ s.createElement(H, null, /* @__PURE__ */ s.createElement(ie, null, Be(e.record_type))), /* @__PURE__ */ s.createElement(H, null, ((y = e.records_status) == null ? void 0 : y.total_records) ?? 0), /* @__PURE__ */ s.createElement(H, null, e.serializer), /* @__PURE__ */ s.createElement(H, null, Be(e.mode)), /* @__PURE__ */ s.createElement(H, { className: Xe.actionsCell }, p && /* @__PURE__ */ s.createElement("div", { className: Xe.errorContainer }, p.message, /* @__PURE__ */ s.createElement(
    z,
    {
      onClick: f,
      className: Xe.clearErrorButton,
      size: "mini",
      basic: !0
    },
    "Clear"
  )), /* @__PURE__ */ s.createElement("div", { className: Xe.actionsContainer }, /* @__PURE__ */ s.createElement(
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
}, pS = ({ children: e }) => /* @__PURE__ */ s.createElement(T, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ s.createElement(ea, null, /* @__PURE__ */ s.createElement(ft, null, /* @__PURE__ */ s.createElement(Y, null, "Title"), /* @__PURE__ */ s.createElement(Y, null, "Date Created"), /* @__PURE__ */ s.createElement(Y, null, "Status"), /* @__PURE__ */ s.createElement(Y, null, "Type"), /* @__PURE__ */ s.createElement(Y, null, "Items"), /* @__PURE__ */ s.createElement(Y, null, "Serializer"), /* @__PURE__ */ s.createElement(Y, null, "Mode"), /* @__PURE__ */ s.createElement(Y, null, "Actions"))), /* @__PURE__ */ s.createElement(ta, null, e)), ae = {
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
}, ke = {
  fileInput: E({
    marginBlockStart: "0.5rem"
  }),
  helpText: E({
    marginBlockStart: "0.5rem",
    fontSize: "0.75rem",
    color: "#666"
  }),
  buttonContainer: E({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "0.5rem"
  })
}, fS = () => {
  const [e, t] = N(
    {}
  ), [r, n] = N(!0), { values: a, submitForm: i, isSubmitting: o, isValid: l, setFieldValue: c } = ho(), u = R(async () => {
    try {
      const f = await aS(), h = {};
      for (const y of f) {
        const m = await iS(y);
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
}, hS = ({ progress: e }) => {
  const {
    configs: t,
    isLoading: r,
    submitForm: n,
    handleFileChange: a,
    handleFilesChange: i,
    values: o,
    isSubmitting: l,
    isValid: c
  } = fS();
  return r ? /* @__PURE__ */ s.createElement(qi, null) : !t || Object.keys(t).length === 0 ? /* @__PURE__ */ s.createElement("p", null, "No record types available.") : /* @__PURE__ */ s.createElement(or, null, /* @__PURE__ */ s.createElement(
    uo,
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
    qs,
    {
      value: o.files || [],
      onChange: i,
      accept: "*",
      skipEmptyFiles: !0,
      maxTotalSize: 10 * 1024 * 1024 * 1024,
      maxFiles: 100
    }
  ), /* @__PURE__ */ s.createElement("p", { className: ke.helpText }, "Upload files related to the records. You can upload multiple files, and they will be associated with the import task.")), /* @__PURE__ */ s.createElement(
    po,
    {
      fieldPath: "task.description",
      label: "Notes",
      placeholder: "Enter a description for the import task",
      rows: 3
    }
  ), /* @__PURE__ */ s.createElement("div", { className: ke.buttonContainer }, e && /* @__PURE__ */ s.createElement(Qi, { progress: e }), /* @__PURE__ */ s.createElement(
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
function rs(e, t, r) {
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
      n[a] = i > -1 ? r[i] : rs(e[a], t, r);
    }
    return n;
  }
  return e;
}
function Jt(e) {
  return rs(e, [], []);
}
const mS = Object.prototype.toString, gS = Error.prototype.toString, yS = RegExp.prototype.toString, bS = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", vS = /^Symbol\((.*)\)(.*)$/;
function ES(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function In(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return ES(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return bS.call(e).replace(vS, "Symbol($1)");
  const n = mS.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + gS.call(e) + "]" : n === "RegExp" ? yS.call(e) : null;
}
function ze(e, t) {
  let r = In(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let i = In(this[n], t);
    return i !== null ? i : a;
  }, 2);
}
let he = {
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
}, X = {
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
}, SS = {
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
}, _S = {
  isValue: "${path} field must be ${value}"
}, tr = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, $S = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: he,
  string: X,
  number: SS,
  date: er,
  object: tr,
  array: $S,
  boolean: _S
});
var xS = Object.prototype, CS = xS.hasOwnProperty;
function wS(e, t) {
  return e != null && CS.call(e, t);
}
var TS = wS, FS = TS, IS = ha;
function AS(e, t) {
  return e != null && IS(e, t, FS);
}
var OS = AS;
const ct = /* @__PURE__ */ P(OS), ns = (e) => e && e.__isYupSchema__;
class RS {
  constructor(t, r) {
    if (this.fn = void 0, this.refs = t, this.refs = t, typeof r == "function") {
      this.fn = r;
      return;
    }
    if (!ct(r, "is"))
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
    if (!ns(a))
      throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
function as(e) {
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
let kS = /\$\{\s*(\w+)\s*\}/g;
class Q extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = rr({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(kS, (a, i) => ze(r[i])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], as(t).forEach((i) => {
      Q.isError(i) ? (this.errors.push(...i.errors), this.inner = this.inner.concat(i.inner.length ? i.inner : i)) : this.errors.push(i);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, Q);
  }
}
const PS = (e) => {
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
  } = e, u = PS(t), d = n.length;
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
function DS(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), l = o.length; l--; ) {
      var c = o[e ? l : ++a];
      if (r(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var LS = DS, NS = LS, BS = NS(), US = BS, zS = US, MS = Ge;
function jS(e, t) {
  return e && zS(e, t, MS);
}
var is = jS, QS = "__lodash_hash_undefined__";
function qS(e) {
  return this.__data__.set(e, QS), this;
}
var VS = qS;
function GS(e) {
  return this.__data__.has(e);
}
var HS = GS, YS = gr, WS = VS, KS = HS;
function ut(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new YS(); ++t < r; )
    this.add(e[t]);
}
ut.prototype.add = ut.prototype.push = WS;
ut.prototype.has = KS;
var XS = ut;
function ZS(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var JS = ZS;
function e0(e, t) {
  return e.has(t);
}
var t0 = e0, r0 = XS, n0 = JS, a0 = t0, i0 = 1, s0 = 2;
function o0(e, t, r, n, a, i) {
  var o = r & i0, l = e.length, c = t.length;
  if (l != c && !(o && c > l))
    return !1;
  var u = i.get(e), d = i.get(t);
  if (u && d)
    return u == t && d == e;
  var p = -1, f = !0, h = r & s0 ? new r0() : void 0;
  for (i.set(e, t), i.set(t, e); ++p < l; ) {
    var y = e[p], m = t[p];
    if (n)
      var v = o ? n(m, y, p, t, e, i) : n(y, m, p, e, t, i);
    if (v !== void 0) {
      if (v)
        continue;
      f = !1;
      break;
    }
    if (h) {
      if (!n0(t, function(g, S) {
        if (!a0(h, S) && (y === g || a(y, g, r, n, i)))
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
var ss = o0;
function l0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var c0 = l0;
function u0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var d0 = u0, An = Ce, On = Ca, p0 = vt, f0 = ss, h0 = c0, m0 = d0, g0 = 1, y0 = 2, b0 = "[object Boolean]", v0 = "[object Date]", E0 = "[object Error]", S0 = "[object Map]", _0 = "[object Number]", $0 = "[object RegExp]", x0 = "[object Set]", C0 = "[object String]", w0 = "[object Symbol]", T0 = "[object ArrayBuffer]", F0 = "[object DataView]", Rn = An ? An.prototype : void 0, Lt = Rn ? Rn.valueOf : void 0;
function I0(e, t, r, n, a, i, o) {
  switch (r) {
    case F0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case T0:
      return !(e.byteLength != t.byteLength || !i(new On(e), new On(t)));
    case b0:
    case v0:
    case _0:
      return p0(+e, +t);
    case E0:
      return e.name == t.name && e.message == t.message;
    case $0:
    case C0:
      return e == t + "";
    case S0:
      var l = h0;
    case x0:
      var c = n & g0;
      if (l || (l = m0), e.size != t.size && !c)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= y0, o.set(e, t);
      var d = f0(l(e), l(t), n, a, i, o);
      return o.delete(e), d;
    case w0:
      if (Lt)
        return Lt.call(e) == Lt.call(t);
  }
  return !1;
}
var A0 = I0, kn = xa, O0 = 1, R0 = Object.prototype, k0 = R0.hasOwnProperty;
function P0(e, t, r, n, a, i) {
  var o = r & O0, l = kn(e), c = l.length, u = kn(t), d = u.length;
  if (c != d && !o)
    return !1;
  for (var p = c; p--; ) {
    var f = l[p];
    if (!(o ? f in t : k0.call(t, f)))
      return !1;
  }
  var h = i.get(e), y = i.get(t);
  if (h && y)
    return h == t && y == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var v = o; ++p < c; ) {
    f = l[p];
    var g = e[f], S = t[f];
    if (n)
      var A = o ? n(S, g, f, t, e, i) : n(g, S, f, e, t, i);
    if (!(A === void 0 ? g === S || a(g, S, r, n, i) : A)) {
      m = !1;
      break;
    }
    v || (v = f == "constructor");
  }
  if (m && !v) {
    var B = e.constructor, ee = t.constructor;
    B != ee && "constructor" in e && "constructor" in t && !(typeof B == "function" && B instanceof B && typeof ee == "function" && ee instanceof ee) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var D0 = P0, Nt = $r, L0 = ss, N0 = A0, B0 = D0, Pn = je, Dn = q, Ln = yt, U0 = fr, z0 = 1, Nn = "[object Arguments]", Bn = "[object Array]", Ze = "[object Object]", M0 = Object.prototype, Un = M0.hasOwnProperty;
function j0(e, t, r, n, a, i) {
  var o = Dn(e), l = Dn(t), c = o ? Bn : Pn(e), u = l ? Bn : Pn(t);
  c = c == Nn ? Ze : c, u = u == Nn ? Ze : u;
  var d = c == Ze, p = u == Ze, f = c == u;
  if (f && Ln(e)) {
    if (!Ln(t))
      return !1;
    o = !0, d = !1;
  }
  if (f && !d)
    return i || (i = new Nt()), o || U0(e) ? L0(e, t, r, n, a, i) : N0(e, t, c, r, n, a, i);
  if (!(r & z0)) {
    var h = d && Un.call(e, "__wrapped__"), y = p && Un.call(t, "__wrapped__");
    if (h || y) {
      var m = h ? e.value() : e, v = y ? t.value() : t;
      return i || (i = new Nt()), a(m, v, r, n, i);
    }
  }
  return f ? (i || (i = new Nt()), B0(e, t, r, n, a, i)) : !1;
}
var Q0 = j0, q0 = Q0, zn = re;
function os(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !zn(e) && !zn(t) ? e !== e && t !== t : q0(e, t, r, n, os, a);
}
var ls = os, V0 = $r, G0 = ls, H0 = 1, Y0 = 2;
function W0(e, t, r, n) {
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
      var p = new V0();
      if (n)
        var f = n(u, d, c, e, t, p);
      if (!(f === void 0 ? G0(d, u, H0 | Y0, n, p) : f))
        return !1;
    }
  }
  return !0;
}
var K0 = W0, X0 = se;
function Z0(e) {
  return e === e && !X0(e);
}
var cs = Z0, J0 = cs, e_ = Ge;
function t_(e) {
  for (var t = e_(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, J0(a)];
  }
  return t;
}
var r_ = t_;
function n_(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var us = n_, a_ = K0, i_ = r_, s_ = us;
function o_(e) {
  var t = i_(e);
  return t.length == 1 && t[0][2] ? s_(t[0][0], t[0][1]) : function(r) {
    return r === e || a_(r, e, t);
  };
}
var l_ = o_, c_ = ls, u_ = fa, d_ = vr, p_ = mr, f_ = cs, h_ = us, m_ = qe, g_ = 1, y_ = 2;
function b_(e, t) {
  return p_(e) && f_(t) ? h_(m_(e), t) : function(r) {
    var n = u_(r, e);
    return n === void 0 && n === t ? d_(r, e) : c_(t, n, g_ | y_);
  };
}
var v_ = b_;
function E_(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var S_ = E_, __ = br;
function $_(e) {
  return function(t) {
    return __(t, e);
  };
}
var x_ = $_, C_ = S_, w_ = x_, T_ = mr, F_ = qe;
function I_(e) {
  return T_(e) ? C_(F_(e)) : w_(e);
}
var A_ = I_, O_ = l_, R_ = v_, k_ = Sr, P_ = q, D_ = A_;
function L_(e) {
  return typeof e == "function" ? e : e == null ? k_ : typeof e == "object" ? P_(e) ? R_(e[0], e[1]) : O_(e) : D_(e);
}
var ds = L_, N_ = Ct, B_ = is, U_ = ds;
function z_(e, t) {
  var r = {};
  return t = U_(t), B_(e, function(n, a, i) {
    N_(r, a, t(n, a, i));
  }), r;
}
var M_ = z_;
const ps = /* @__PURE__ */ P(M_);
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
var j_ = /[^.^\]^[]+|(?=\[\]|\.\.)/g, fs = /^\d+$/, Q_ = /^\d/, q_ = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, V_ = /^\s*(['"]?)(.*?)(\1)\s*$/, Lr = 512, Mn = new ye(Lr), jn = new ye(Lr), Qn = new ye(Lr), It = {
  Cache: ye,
  split: ar,
  normalizePath: Bt,
  setter: function(e) {
    var t = Bt(e);
    return jn.get(e) || jn.set(e, function(n, a) {
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
    return Qn.get(e) || Qn.set(e, function(a) {
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
      return t + (Nr(r) || fs.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    G_(Array.isArray(e) ? e : ar(e), t, r);
  }
};
function Bt(e) {
  return Mn.get(e) || Mn.set(
    e,
    ar(e).map(function(t) {
      return t.replace(V_, "$2");
    })
  );
}
function ar(e) {
  return e.match(j_) || [""];
}
function G_(e, t, r) {
  var n = e.length, a, i, o, l;
  for (i = 0; i < n; i++)
    a = e[i], a && (W_(a) && (a = '"' + a + '"'), l = Nr(a), o = !l && /^\d+$/.test(a), t.call(r, a, l, o, i, e));
}
function Nr(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function H_(e) {
  return e.match(Q_) && !e.match(fs);
}
function Y_(e) {
  return q_.test(e);
}
function W_(e) {
  return !Nr(e) && (H_(e) || Y_(e));
}
const Je = {
  context: "$",
  value: "."
};
class ue {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
      throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Je.context, this.isValue = this.key[0] === Je.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? Je.context : this.isValue ? Je.value : "";
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
function dt() {
  return dt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, dt.apply(this, arguments);
}
function K_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function et(e) {
  function t(r, n) {
    let {
      value: a,
      path: i = "",
      label: o,
      options: l,
      originalValue: c,
      sync: u
    } = r, d = K_(r, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name: p,
      test: f,
      params: h,
      message: y
    } = e;
    let {
      parent: m,
      context: v
    } = l;
    function g(O) {
      return ue.isRef(O) ? O.getValue(a, m, v) : O;
    }
    function S(O = {}) {
      const pe = ps(dt({
        value: a,
        originalValue: c,
        label: o,
        path: O.path || i
      }, h, O.params), g), Ye = new Q(Q.formatError(O.message || y, pe), a, pe.path, O.type || p);
      return Ye.params = pe, Ye;
    }
    let A = dt({
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
      var ee;
      if (B = f.call(A, a, A), typeof ((ee = B) == null ? void 0 : ee.then) == "function")
        throw new Error(`Validation test of type: "${A.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (O) {
      n(O);
      return;
    }
    Q.isError(B) ? n(B) : B ? n(null, B) : n(S());
  }
  return t.OPTIONS = e, t;
}
let X_ = (e) => e.substr(0, e.length - 1).substr(1);
function Z_(e, t, r, n = r) {
  let a, i, o;
  return t ? (It.forEach(t, (l, c, u) => {
    let d = c ? X_(l) : l;
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
class pt {
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
    const t = new pt();
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
    this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new pt(), this._blacklist = new pt(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(he.notType);
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
  defined(t = he.defined) {
    return this.test({
      message: t,
      name: "defined",
      exclusive: !0,
      test(r) {
        return r !== void 0;
      }
    });
  }
  required(t = he.required) {
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
    }, r.message === void 0 && (r.message = he.default), typeof r.test != "function")
      throw new TypeError("`test` is a required parameters");
    let n = this.clone(), a = et(r), i = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === r.name && (i || o.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = as(t).map((i) => new ue(i));
    return a.forEach((i) => {
      i.isSibling && n.deps.push(i.key);
    }), n.conditions.push(new RS(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r._typeError = et({
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
  oneOf(t, r = he.oneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._whitelist.add(a), n._blacklist.delete(a);
    }), n._whitelistError = et({
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
  notOneOf(t, r = he.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n._blacklistError = et({
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
    } = Z_(this, t, r, n.context);
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
const J_ = M;
J_.prototype;
const Z = (e) => e == null;
let e$ = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, t$ = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, r$ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, n$ = (e) => Z(e) || e === e.trim(), a$ = {}.toString();
function Ne() {
  return new hs();
}
class hs extends M {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === a$ ? t : r;
      });
    });
  }
  _typeCheck(t) {
    return t instanceof String && (t = t.valueOf()), typeof t == "string";
  }
  _isPresent(t) {
    return super._isPresent(t) && !!t.length;
  }
  length(t, r = X.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      test(n) {
        return Z(n) || n.length === this.resolve(t);
      }
    });
  }
  min(t, r = X.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(n) {
        return Z(n) || n.length >= this.resolve(t);
      }
    });
  }
  max(t, r = X.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: t
      },
      test(n) {
        return Z(n) || n.length <= this.resolve(t);
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
      message: a || X.matches,
      params: {
        regex: t
      },
      test: (o) => Z(o) || o === "" && n || o.search(t) !== -1
    });
  }
  email(t = X.email) {
    return this.matches(e$, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = X.url) {
    return this.matches(t$, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = X.uuid) {
    return this.matches(r$, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = X.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: n$
    });
  }
  lowercase(t = X.lowercase) {
    return this.transform((r) => Z(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => Z(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = X.uppercase) {
    return this.transform((r) => Z(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => Z(r) || r === r.toUpperCase()
    });
  }
}
Ne.prototype = hs.prototype;
var i$ = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function s$(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, a;
  if (a = i$.exec(e)) {
    for (var i = 0, o; o = t[i]; ++i)
      a[o] = +a[o] || 0;
    a[2] = (+a[2] || 1) - 1, a[3] = +a[3] || 1, a[7] = a[7] ? String(a[7]).substr(0, 3) : 0, (a[8] === void 0 || a[8] === "") && (a[9] === void 0 || a[9] === "") ? n = +new Date(a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : (a[8] !== "Z" && a[9] !== void 0 && (r = a[10] * 60 + a[11], a[9] === "+" && (r = 0 - r)), n = Date.UTC(a[1], a[2], a[3], a[4], a[5] + r, a[6], a[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let ms = /* @__PURE__ */ new Date(""), o$ = (e) => Object.prototype.toString.call(e) === "[object Date]";
class gs extends M {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = s$(t), isNaN(t) ? ms : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return o$(t) && !isNaN(t.getTime());
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
        return Z(a) || a >= this.resolve(n);
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
        return Z(a) || a <= this.resolve(n);
      }
    });
  }
}
gs.INVALID_DATE = ms;
gs.prototype;
function l$(e, t, r, n) {
  var a = -1, i = e == null ? 0 : e.length;
  for (n && i && (r = e[++a]); ++a < i; )
    r = t(r, e[a], a, e);
  return r;
}
var c$ = l$;
function u$(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var d$ = u$, p$ = d$, f$ = {
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
}, h$ = p$(f$), m$ = h$, g$ = m$, y$ = Qe, b$ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, v$ = "\\u0300-\\u036f", E$ = "\\ufe20-\\ufe2f", S$ = "\\u20d0-\\u20ff", _$ = v$ + E$ + S$, $$ = "[" + _$ + "]", x$ = RegExp($$, "g");
function C$(e) {
  return e = y$(e), e && e.replace(b$, g$).replace(x$, "");
}
var w$ = C$, T$ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function F$(e) {
  return e.match(T$) || [];
}
var I$ = F$, A$ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function O$(e) {
  return A$.test(e);
}
var R$ = O$, ys = "\\ud800-\\udfff", k$ = "\\u0300-\\u036f", P$ = "\\ufe20-\\ufe2f", D$ = "\\u20d0-\\u20ff", L$ = k$ + P$ + D$, bs = "\\u2700-\\u27bf", vs = "a-z\\xdf-\\xf6\\xf8-\\xff", N$ = "\\xac\\xb1\\xd7\\xf7", B$ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", U$ = "\\u2000-\\u206f", z$ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Es = "A-Z\\xc0-\\xd6\\xd8-\\xde", M$ = "\\ufe0e\\ufe0f", Ss = N$ + B$ + U$ + z$, _s = "['’]", qn = "[" + Ss + "]", j$ = "[" + L$ + "]", $s = "\\d+", Q$ = "[" + bs + "]", xs = "[" + vs + "]", Cs = "[^" + ys + Ss + $s + bs + vs + Es + "]", q$ = "\\ud83c[\\udffb-\\udfff]", V$ = "(?:" + j$ + "|" + q$ + ")", G$ = "[^" + ys + "]", ws = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ts = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ee = "[" + Es + "]", H$ = "\\u200d", Vn = "(?:" + xs + "|" + Cs + ")", Y$ = "(?:" + Ee + "|" + Cs + ")", Gn = "(?:" + _s + "(?:d|ll|m|re|s|t|ve))?", Hn = "(?:" + _s + "(?:D|LL|M|RE|S|T|VE))?", Fs = V$ + "?", Is = "[" + M$ + "]?", W$ = "(?:" + H$ + "(?:" + [G$, ws, Ts].join("|") + ")" + Is + Fs + ")*", K$ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", X$ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Z$ = Is + Fs + W$, J$ = "(?:" + [Q$, ws, Ts].join("|") + ")" + Z$, e1 = RegExp([
  Ee + "?" + xs + "+" + Gn + "(?=" + [qn, Ee, "$"].join("|") + ")",
  Y$ + "+" + Hn + "(?=" + [qn, Ee + Vn, "$"].join("|") + ")",
  Ee + "?" + Vn + "+" + Gn,
  Ee + "+" + Hn,
  X$,
  K$,
  $s,
  J$
].join("|"), "g");
function t1(e) {
  return e.match(e1) || [];
}
var r1 = t1, n1 = I$, a1 = R$, i1 = Qe, s1 = r1;
function o1(e, t, r) {
  return e = i1(e), t = r ? void 0 : t, t === void 0 ? a1(e) ? s1(e) : n1(e) : e.match(t) || [];
}
var l1 = o1, c1 = c$, u1 = w$, d1 = l1, p1 = "['’]", f1 = RegExp(p1, "g");
function h1(e) {
  return function(t) {
    return c1(d1(u1(t).replace(f1, "")), e, "");
  };
}
var As = h1, m1 = As, g1 = m1(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), y1 = g1;
const Yn = /* @__PURE__ */ P(y1);
function b1(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + t];
  return i;
}
var v1 = b1, E1 = v1;
function S1(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : E1(e, t, r);
}
var _1 = S1, $1 = "\\ud800-\\udfff", x1 = "\\u0300-\\u036f", C1 = "\\ufe20-\\ufe2f", w1 = "\\u20d0-\\u20ff", T1 = x1 + C1 + w1, F1 = "\\ufe0e\\ufe0f", I1 = "\\u200d", A1 = RegExp("[" + I1 + $1 + T1 + F1 + "]");
function O1(e) {
  return A1.test(e);
}
var Os = O1;
function R1(e) {
  return e.split("");
}
var k1 = R1, Rs = "\\ud800-\\udfff", P1 = "\\u0300-\\u036f", D1 = "\\ufe20-\\ufe2f", L1 = "\\u20d0-\\u20ff", N1 = P1 + D1 + L1, B1 = "\\ufe0e\\ufe0f", U1 = "[" + Rs + "]", ir = "[" + N1 + "]", sr = "\\ud83c[\\udffb-\\udfff]", z1 = "(?:" + ir + "|" + sr + ")", ks = "[^" + Rs + "]", Ps = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ds = "[\\ud800-\\udbff][\\udc00-\\udfff]", M1 = "\\u200d", Ls = z1 + "?", Ns = "[" + B1 + "]?", j1 = "(?:" + M1 + "(?:" + [ks, Ps, Ds].join("|") + ")" + Ns + Ls + ")*", Q1 = Ns + Ls + j1, q1 = "(?:" + [ks + ir + "?", ir, Ps, Ds, U1].join("|") + ")", V1 = RegExp(sr + "(?=" + sr + ")|" + q1 + Q1, "g");
function G1(e) {
  return e.match(V1) || [];
}
var H1 = G1, Y1 = k1, W1 = Os, K1 = H1;
function X1(e) {
  return W1(e) ? K1(e) : Y1(e);
}
var Z1 = X1, J1 = _1, ex = Os, tx = Z1, rx = Qe;
function nx(e) {
  return function(t) {
    t = rx(t);
    var r = ex(t) ? tx(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? J1(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var ax = nx, ix = ax, sx = ix("toUpperCase"), ox = sx, lx = Qe, cx = ox;
function ux(e) {
  return cx(lx(e).toLowerCase());
}
var dx = ux, px = dx, fx = As, hx = fx(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? px(t) : t);
}), mx = hx;
const gx = /* @__PURE__ */ P(mx);
var yx = Ct, bx = is, vx = ds;
function Ex(e, t) {
  var r = {};
  return t = vx(t), bx(e, function(n, a, i) {
    yx(r, t(n, a, i), n);
  }), r;
}
var Sx = Ex;
const _x = /* @__PURE__ */ P(Sx);
var Br = { exports: {} };
Br.exports = function(e) {
  return Bs($x(e), e);
};
Br.exports.array = Bs;
function Bs(e, t) {
  var r = e.length, n = new Array(r), a = {}, i = r, o = xx(t), l = Cx(e);
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
function $x(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.add(a[0]), t.add(a[1]);
  }
  return Array.from(t);
}
function xx(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.has(a[0]) || t.set(a[0], /* @__PURE__ */ new Set()), t.has(a[1]) || t.set(a[1], /* @__PURE__ */ new Set()), t.get(a[0]).add(a[1]);
  }
  return t;
}
function Cx(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var wx = Br.exports;
const Tx = /* @__PURE__ */ P(wx);
function Fx(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([o, l]) => `${o}-${l}`));
  function i(o, l) {
    let c = It.split(o)[0];
    n.add(c), a.has(`${l}-${c}`) || r.push([l, c]);
  }
  for (const o in e)
    if (ct(e, o)) {
      let l = e[o];
      n.add(o), ue.isRef(l) && l.isSibling ? i(l.path, o) : ns(l) && "deps" in l && l.deps.forEach((c) => i(c, o));
    }
  return Tx.array(Array.from(n), r).reverse();
}
function Wn(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var i;
    if (((i = t.path) == null ? void 0 : i.indexOf(n)) !== -1)
      return r = a, !0;
  }), r;
}
function Us(e) {
  return (t, r) => Wn(e, t) - Wn(e, r);
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
let Kn = (e) => Object.prototype.toString.call(e) === "[object Object]";
function Ix(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const Ax = Us([]);
class zs extends M {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Ax, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
    return Kn(t) || typeof t == "function";
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
      let f = i[p], h = ct(a, p);
      if (f) {
        let y, m = a[p];
        u.path = (r.path ? `${r.path}.` : "") + p, f = f.resolve({
          value: m,
          context: r.context,
          parent: c
        });
        let v = "spec" in f ? f.spec : void 0, g = v == null ? void 0 : v.strict;
        if (v != null && v.strip) {
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
      if (!u || !Kn(p)) {
        n(a[0] || null, p);
        return;
      }
      l = l || p;
      let f = this._nodes.map((h) => (y, m) => {
        let v = h.indexOf(".") === -1 ? (r.path ? `${r.path}.` : "") + h : `${r.path || ""}["${h}"]`, g = this.fields[h];
        if (g && "validate" in g) {
          g.validate(p[h], Se({}, r, {
            // @ts-ignore
            path: v,
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
    return n.fields = a, n._sortErrors = Us(Object.keys(a)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = Fx(a, n._excludedEdges), n;
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
      return ct(i, t) && (o = Se({}, i), n || delete o[t], o[r] = a(i)), o;
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
        const i = Ix(this.schema, a);
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
    return this.transform((r) => r && _x(r, (n, a) => t(a)));
  }
  camelCase() {
    return this.transformKeys(gx);
  }
  snakeCase() {
    return this.transformKeys(Yn);
  }
  constantCase() {
    return this.transformKeys((t) => Yn(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = ps(this.fields, (r) => r.describe()), t;
  }
}
function nt(e) {
  return new zs(e);
}
nt.prototype = zs.prototype;
const Ox = {
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
}, Rx = nt({
  task: nt({
    title: Ne().required("Title is required"),
    recordType: Ne().required("Record type is required"),
    serializer: Ne().required("Serializer is required"),
    mode: Ne().required("Mode is required")
  }),
  metadata: nt().nullable()
}), kx = ({ onSubmit: e }) => {
  const [t, r] = N(void 0), n = async (a) => {
    try {
      await lS(a.task, a.metadata, a.files, {
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
    fo,
    {
      formik: {
        initialValues: Ox,
        validationSchema: Rx,
        onSubmit: n
      }
    },
    /* @__PURE__ */ s.createElement(hS, { progress: t })
  );
}, Px = () => {
  const [e, t] = N(!1), { refreshSearch: r } = Ft(), n = R(() => {
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
    /* @__PURE__ */ s.createElement(to, null, "New Import Task"),
    /* @__PURE__ */ s.createElement(ro, null, /* @__PURE__ */ s.createElement(kx, { onSubmit: n }))
  );
}, Ut = {
  searchBarRow: E({
    display: "flex !important",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1rem",
    paddingBlock: "0.5rem",
    minBlockSize: "3rem"
  }),
  facets: E({
    flex: "0 0 auto"
  }),
  search: E({
    flex: "1 1 auto",
    minInlineSize: "15rem"
  }),
  visuallyHidden: E({
    srOnly: !0
  })
}, Dx = ({
  appId: e = "search"
}) => {
  const { showImportModal: t } = Ft().config;
  return /* @__PURE__ */ s.createElement(b, { id: `${e}.SearchBarRow` }, /* @__PURE__ */ s.createElement(
    "section",
    {
      className: Ut.searchBarRow,
      "aria-label": "Records search and filters"
    },
    /* @__PURE__ */ s.createElement("div", { className: Ut.search }, /* @__PURE__ */ s.createElement(
      oE,
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
    t && /* @__PURE__ */ s.createElement("div", { className: Ut.facets }, /* @__PURE__ */ s.createElement(Px, null))
  ));
}, Lx = [
  { key: "pending", label: "Pending", value: "pending" },
  { key: "success", label: "Success", value: "success" },
  { key: "failed", label: "Failed", value: "failed" }
], Nx = ({
  currentQueryState: e,
  updateQueryState: t,
  showFacets: r = !0
}) => {
  var i;
  if (!r)
    return null;
  const n = ((i = e.filters) == null ? void 0 : i.filter((o) => o[0] === "status").map((o) => o[1])) || [], a = (o, l) => {
    var d;
    const c = ((d = e.filters) == null ? void 0 : d.filter(
      (p) => p[0] !== "status"
    )) || [];
    let u = [];
    if (l) {
      const p = new Set(n);
      p.add(o), u = Array.from(p).map((f) => ["status", f]);
    } else
      u = n.filter((p) => p !== o).map((p) => ["status", p]);
    t({
      ...e,
      filters: [...c, ...u],
      page: 1
    });
  };
  return /* @__PURE__ */ s.createElement("div", null, Lx.map(({ key: o, label: l, value: c }) => c ? /* @__PURE__ */ s.createElement("div", { key: o, style: { marginBottom: "8px" } }, /* @__PURE__ */ s.createElement(
    lr,
    {
      label: l,
      checked: n.includes(c),
      onChange: (u, d) => a(c, d.checked ?? !1)
    }
  )) : null));
}, Xn = oi(Nx), Bx = () => {
  const { config: e } = Ft();
  return /* @__PURE__ */ s.createElement(j, null, /* @__PURE__ */ s.createElement(j.Row, { verticalAlign: "middle" }, /* @__PURE__ */ s.createElement(j.Column, { width: 4, textAlign: "left" }, /* @__PURE__ */ s.createElement(Bv, { label: (t) => /* @__PURE__ */ s.createElement("div", null, t, " item(s)") })), /* @__PURE__ */ s.createElement(j.Column, { width: 8, textAlign: "center" }, /* @__PURE__ */ s.createElement(Hv, { options: { size: "mini" } })), /* @__PURE__ */ s.createElement(j.Column, { width: 4, textAlign: "right" }, /* @__PURE__ */ s.createElement(
    aE,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ s.createElement("p", null, t, " results per page")
    }
  ))));
}, Ms = ({
  config: e = {},
  overriddenComponents: t = {}
}) => {
  var i, o, l, c, u;
  const r = {
    ...ae,
    ...e,
    initialQueryState: {
      ...ae.initialQueryState,
      ...e.initialQueryState
    },
    layoutOptions: {
      ...ae.layoutOptions,
      ...e.layoutOptions
    },
    paginationOptions: {
      ...ae.paginationOptions,
      ...e.paginationOptions,
      resultsPerPage: ((i = e.paginationOptions) == null ? void 0 : i.resultsPerPage) || ae.paginationOptions.resultsPerPage
    },
    searchApi: {
      ...ae.searchApi,
      ...e.searchApi,
      axios: {
        ...ae.searchApi.axios,
        ...(o = e.searchApi) == null ? void 0 : o.axios,
        headers: {
          ...ae.searchApi.axios.headers,
          ...(c = (l = e.searchApi) == null ? void 0 : l.axios) == null ? void 0 : c.headers
        }
      },
      invenio: {
        ...ae.searchApi.invenio,
        ...(u = e.searchApi) == null ? void 0 : u.invenio
      }
    },
    showFacets: e.showFacets ?? !0,
    showImportModal: e.showImportModal ?? !0,
    showSearchFooter: e.showSearchFooter ?? !0
  }, n = new ka(r.searchApi), a = {
    [`${r.appId}.ResultsList.item`]: dS,
    [`${r.appId}.ResultsList.container`]: pS,
    [`${r.appId}.SearchFacets`]: Xn,
    ...t
  };
  return /* @__PURE__ */ s.createElement(Ks.Provider, { value: a }, /* @__PURE__ */ s.createElement(
    $v,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ s.createElement(yE, { config: r }, /* @__PURE__ */ s.createElement(Dx, { appId: r.appId }), /* @__PURE__ */ s.createElement(eE, null, /* @__PURE__ */ s.createElement(Xn, { showFacets: r.showFacets }), /* @__PURE__ */ s.createElement(Mv, null), /* @__PURE__ */ s.createElement(gi, null)), r.showSearchFooter && /* @__PURE__ */ s.createElement(Bx, null))
  ));
}, Ux = (e) => Hs(() => {
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
  statistic: E({
    marginBlock: "1rem"
  }),
  progressLabel: E({
    marginBlockEnd: "0.5rem"
  }),
  progress: E({
    marginBlockEnd: "0.5rem"
  })
}, zx = ({
  totalRecords: e = 0,
  validatedRecords: t = 0,
  errorRecords: r = 0,
  successRecords: n = 0,
  showWhenEmpty: a = !1,
  className: i = "",
  style: o = {}
}) => {
  const l = Ux({
    totalRecords: e,
    validatedRecords: t,
    errorRecords: r,
    successRecords: n
  });
  return e === 0 && !a ? null : /* @__PURE__ */ s.createElement(W, { basic: !0, className: i, style: o }, /* @__PURE__ */ s.createElement(j, { columns: 3, stackable: !0 }, l.map((c) => /* @__PURE__ */ s.createElement(j.Column, { key: c.title }, /* @__PURE__ */ s.createElement(D, { fluid: !0 }, /* @__PURE__ */ s.createElement(D.Content, null, /* @__PURE__ */ s.createElement(D.Header, { textAlign: "center" }, c.title), /* @__PURE__ */ s.createElement(D.Description, { textAlign: "center" }, /* @__PURE__ */ s.createElement(
    Rt,
    {
      size: "large",
      color: c.color,
      className: zt.statistic
    },
    /* @__PURE__ */ s.createElement(Rt.Value, null, c.value),
    /* @__PURE__ */ s.createElement(Rt.Label, null, c.label)
  ), /* @__PURE__ */ s.createElement(W, { basic: !0, textAlign: "center" }, /* @__PURE__ */ s.createElement(
    W.Inline,
    {
      basic: !0,
      size: "small",
      className: zt.progressLabel
    },
    c.progressLabel
  ), /* @__PURE__ */ s.createElement(
    no,
    {
      percent: c.progress,
      color: c.color,
      size: "small",
      className: zt.progress
    }
  )))))))));
}, Mx = {
  container: E({
    paddingBlockStart: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  })
}, js = Ys(
  void 0
), jx = ({
  taskId: e,
  children: t
}) => /* @__PURE__ */ s.createElement(js.Provider, { value: { taskId: e } }, /* @__PURE__ */ s.createElement("div", { className: Mx.container }, t)), Qs = () => {
  const e = I(js);
  if (!e)
    throw new Error("useTaskDetails must be used within a TaskDetailsProvider");
  return e;
}, Mt = {
  headerContainer: E({
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem"
  }),
  headerContent: E({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  }),
  actionsContainer: E({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: "1rem"
  })
}, Qx = ({ children: e }) => /* @__PURE__ */ s.createElement(T, { padded: !0, size: "small", compact: !0 }, /* @__PURE__ */ s.createElement(ea, null, /* @__PURE__ */ s.createElement(ft, null, /* @__PURE__ */ s.createElement(Y, null, "ID"), /* @__PURE__ */ s.createElement(Y, null, "Title"), /* @__PURE__ */ s.createElement(Y, null, "Status"), /* @__PURE__ */ s.createElement(Y, null))), /* @__PURE__ */ s.createElement(ta, null, e)), qx = {
  headerContainer: E({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  })
}, Vx = ({ record: e }) => /* @__PURE__ */ s.createElement(W, { basic: !0 }, /* @__PURE__ */ s.createElement($, null, /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "tag" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Record ID"), /* @__PURE__ */ s.createElement($.Description, null, e.id))), /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "calendar" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Created"), /* @__PURE__ */ s.createElement($.Description, null, Kt(e.created)))), /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "edit" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Updated"), /* @__PURE__ */ s.createElement($.Description, null, Kt(e.updated)))), e.generated_record_id && /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "file alternate" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Generated Record ID"), /* @__PURE__ */ s.createElement($.Description, null, /* @__PURE__ */ s.createElement(
  "a",
  {
    href: `/records/${e.generated_record_id}`,
    target: "_blank",
    rel: "noopener noreferrer"
  },
  "/",
  e.generated_record_id
)))))), Gx = ({ record: e }) => /* @__PURE__ */ s.createElement(W, { basic: !0 }, e.errors.map((t, r) => /* @__PURE__ */ s.createElement(U, { key: `error-${r}-${t.type}`, negative: !0 }, /* @__PURE__ */ s.createElement(U.Header, null, t.type), /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Location:"), " ", t.loc), /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Message:"), " ", t.msg)))), Hx = {
  pathCell: E({
    wordBreak: "break-all"
  })
}, Yx = ({ record: e }) => {
  var r, n;
  return (((r = e.record_files) == null ? void 0 : r.length) ?? 0) > 0 || (((n = e.validated_record_files) == null ? void 0 : n.length) ?? 0) > 0 ? /* @__PURE__ */ s.createElement(W, { basic: !0 }, e.record_files && e.record_files.length > 0 && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(me, { as: "h4" }, /* @__PURE__ */ s.createElement(_, { name: "file" }), "File List"), /* @__PURE__ */ s.createElement($, { bulleted: !0 }, e.record_files.map((a) => /* @__PURE__ */ s.createElement($.Item, { key: `file-${a}` }, /* @__PURE__ */ s.createElement($.Content, null, a))))), e.validated_record_files && e.validated_record_files.length > 0 && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(me, { as: "h4" }, /* @__PURE__ */ s.createElement(_, { name: "checkmark" }), "Validated Files"), /* @__PURE__ */ s.createElement(T, { celled: !0 }, /* @__PURE__ */ s.createElement(T.Header, null, /* @__PURE__ */ s.createElement(T.Row, null, /* @__PURE__ */ s.createElement(T.HeaderCell, null, "File"), /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Size"), /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Origin"), /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Path"))), /* @__PURE__ */ s.createElement(T.Body, null, e.validated_record_files.map((a, i) => /* @__PURE__ */ s.createElement(T.Row, { key: `validated-${a.key}-${i}` }, /* @__PURE__ */ s.createElement(T.Cell, null, /* @__PURE__ */ s.createElement(_, { name: "file" }), a.key), /* @__PURE__ */ s.createElement(T.Cell, null, (a.size / 1024).toFixed(2), " KB"), /* @__PURE__ */ s.createElement(T.Cell, null, a.origin), /* @__PURE__ */ s.createElement(T.Cell, { className: Hx.pathCell }, a.full_path))))))) : /* @__PURE__ */ s.createElement(U, { info: !0 }, /* @__PURE__ */ s.createElement(U.Header, null, "No Files"), /* @__PURE__ */ s.createElement("p", null, "No files are associated with this record."));
}, Wx = {
  valueCell: E({
    wordBreak: "break-word"
  })
}, Kx = ({ record: e }) => /* @__PURE__ */ s.createElement(T, { celled: !0, striped: !0 }, /* @__PURE__ */ s.createElement(T.Header, null, /* @__PURE__ */ s.createElement(T.Row, null, /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Field"), /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Value"))), /* @__PURE__ */ s.createElement(T.Body, null, Object.entries(e.src_data).filter(([t, r]) => r && r.trim() !== "").map(([t, r]) => /* @__PURE__ */ s.createElement(T.Row, { key: t }, /* @__PURE__ */ s.createElement(T.Cell, null, /* @__PURE__ */ s.createElement("strong", null, t)), /* @__PURE__ */ s.createElement(T.Cell, { className: Wx.valueCell }, r))))), Xx = ({
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
      render: () => /* @__PURE__ */ s.createElement(Oe.Pane, null, /* @__PURE__ */ s.createElement(Vx, { record: e }))
    },
    {
      menuItem: { key: "source", icon: "database", content: "Source Data" },
      render: () => /* @__PURE__ */ s.createElement(Oe.Pane, null, /* @__PURE__ */ s.createElement(Kx, { record: e }))
    },
    ...e.errors && e.errors.length > 0 ? [
      {
        menuItem: {
          key: "errors",
          icon: "exclamation triangle",
          content: `Errors (${e.errors.length})`
        },
        render: () => /* @__PURE__ */ s.createElement(Oe.Pane, null, /* @__PURE__ */ s.createElement(Gx, { record: e }))
      }
    ] : [],
    {
      menuItem: { key: "files", icon: "file", content: "Files" },
      render: () => /* @__PURE__ */ s.createElement(Oe.Pane, null, /* @__PURE__ */ s.createElement(Yx, { record: e }))
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
    /* @__PURE__ */ s.createElement(le.Header, null, /* @__PURE__ */ s.createElement("div", { className: qx.headerContainer }, /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(_, { name: "file alternate outline" }), c()), /* @__PURE__ */ s.createElement(YE, { status: e.status }))),
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
  idContainer: E({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  }),
  codeElement: E({
    fontSize: "0.9em",
    color: "#666"
  }),
  titleContainer: E({
    maxInlineSize: "18.75rem"
  }),
  noTitle: E({
    color: "#999"
  }),
  errorIcon: E({
    marginInlineStart: "0.5rem !important",
    cursor: "help"
  })
}, Zx = ({
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
  }, u = e.errors && e.errors.length > 0, d = eS(e.status), p = () => u ? 2 : -1, f = (m) => m === "red" ? "times" : m === "green" || m === "blue" ? "check" : "question", h = [
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
          await uS(e.id), console.log(`Record ${e.id} is being processed.`);
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
  return /* @__PURE__ */ s.createElement(ft, { key: t }, /* @__PURE__ */ s.createElement(H, null, /* @__PURE__ */ s.createElement("div", { className: Pe.idContainer }, /* @__PURE__ */ s.createElement("code", { className: Pe.codeElement }, e.id.length > 20 ? `${e.id.substring(0, 20)}…` : e.id), /* @__PURE__ */ s.createElement(
    Ur,
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
  ))), /* @__PURE__ */ s.createElement(H, null, /* @__PURE__ */ s.createElement("div", { className: Pe.titleContainer }, ((y = e.src_data) == null ? void 0 : y.title) || /* @__PURE__ */ s.createElement("em", { className: Pe.noTitle }, "No Title Available"))), /* @__PURE__ */ s.createElement(H, null, /* @__PURE__ */ s.createElement(ie, { color: d, size: "small" }, /* @__PURE__ */ s.createElement(_, { name: f(d) }), Be(e.status)), u && /* @__PURE__ */ s.createElement(
    Ur,
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
    Xx,
    {
      record: e,
      open: a,
      onClose: () => i(!1),
      initialTab: o
    }
  )));
}, Jx = () => {
  const { taskId: e } = Qs(), t = {
    "search.SearchBarRow": () => null,
    "search.ResultsList.container": Qx,
    "search.ResultsList.item": Zx
  };
  return /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(me, { as: "h3" }, "Task Records"), /* @__PURE__ */ s.createElement(
    Ms,
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
  hiddenInput: E({
    display: "none"
  }),
  dropZone: E({
    minBlockSize: "7.5rem",
    border: "2px dashed #d4d4d5 !important",
    backgroundColor: "transparent !important",
    cursor: "pointer",
    opacity: 1
  }),
  dropZoneActive: E({
    border: "2px dashed #2185d0 !important",
    backgroundColor: "#f8f9fa !important"
  }),
  dropZoneDisabled: E({
    cursor: "not-allowed",
    opacity: 0.6
  }),
  contentContainer: E({
    textAlign: "center",
    paddingBlock: "1.25rem",
    paddingInline: "1.25rem"
  }),
  textContainer: E({
    marginBlockStart: "0.625rem"
  }),
  smallText: E({
    fontSize: "0.75rem",
    color: "#666"
  }),
  selectedFilesText: E({
    fontSize: "0.75rem",
    color: "#2185d0",
    marginBlockStart: "0.5rem"
  })
}, eC = ({
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
  W,
  {
    placeholder: !0,
    className: KE("file-drop-zone", oe.dropZone, {
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
  ), /* @__PURE__ */ s.createElement("div", { className: oe.textContainer }, /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Drop files here or click to select")), /* @__PURE__ */ s.createElement("p", { className: oe.smallText }, "Max files: ", r, " | Max total: ", Dr(n)), o.length > 0 && /* @__PURE__ */ s.createElement("p", { className: oe.selectedFilesText }, /* @__PURE__ */ s.createElement("strong", null, o.length, " files selected •", " ", Yi(o), " total"))))
)), tC = ({
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
        const v = a(m, u, f);
        if (v) {
          y.push(`${m.name}: ${v}`);
          continue;
        }
        if (t.some(
          (S) => S.file.name === m.name && S.file.size === m.size
        )) {
          y.push(`${m.name}: File already selected`);
          continue;
        }
        if (p && Hi([
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
  headerContainer: E({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBlockEnd: "0.625rem"
  }),
  listItemContainer: E({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }),
  fileContentContainer: E({
    flex: "1 1 auto"
  }),
  fileInfoContainer: E({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  }),
  errorMessage: E({
    marginBlockStart: "0.3125rem"
  })
}, rC = ({
  uploadFiles: e,
  isUploading: t,
  handleRemoveFile: r,
  handleClearFiles: n
}) => /* @__PURE__ */ s.createElement(W, null, /* @__PURE__ */ s.createElement("div", { className: De.headerContainer }, /* @__PURE__ */ s.createElement("strong", null, "Selected Files (", e.length, ") •", " ", Yi(e)), /* @__PURE__ */ s.createElement(
  z,
  {
    size: "mini",
    basic: !0,
    icon: "trash",
    content: "Clear All",
    onClick: n,
    disabled: t
  }
)), /* @__PURE__ */ s.createElement($, { divided: !0 }, e.map((a) => /* @__PURE__ */ s.createElement($.Item, { key: a.id }, /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement("div", { className: De.listItemContainer }, /* @__PURE__ */ s.createElement("div", { className: De.fileContentContainer }, /* @__PURE__ */ s.createElement("div", { className: De.fileInfoContainer }, /* @__PURE__ */ s.createElement(_, { name: "file" }), /* @__PURE__ */ s.createElement("span", null, a.file.name), /* @__PURE__ */ s.createElement(ie, { size: "mini", basic: !0 }, Dr(a.file.size))), a.error && /* @__PURE__ */ s.createElement(
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
))))))), qs = ({
  onChange: e,
  accept: t = ".csv,.json,.xlsx,.txt",
  maxFiles: r = 5,
  maxTotalSize: n = 50 * 1024 * 1024,
  // 50MB
  skipEmptyFiles: a = !0,
  disabled: i = !1,
  error: o
}) => {
  const l = Ws(null), [c, u] = s.useState(!1), [d, p] = s.useState(
    null
  ), { uploadFiles: f, isUploading: h, addFiles: y, removeFile: m, clearFiles: v } = tC({
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
        const Vs = [...f, ...be].map((Gs) => Gs.file);
        e(Vs);
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
  }, []), ee = R(
    (F) => {
      F.preventDefault(), u(!1), !i && g(F.dataTransfer.files);
    },
    [i, g]
  ), O = R(() => {
    var F;
    i || (F = l.current) == null || F.click();
  }, [i]), pe = R(
    (F) => {
      m(F), p(null);
      const At = f.filter((be) => be.id !== F).map((be) => be.file);
      e(At);
    },
    [m, f, e]
  ), Ye = R(() => {
    v(), p(null), e([]);
  }, [v, e]);
  return /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(
    eC,
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
      onDrop: ee,
      onFileDialogOpen: O
    }
  ), (o || d) && /* @__PURE__ */ s.createElement(U, { negative: !0, size: "small" }, /* @__PURE__ */ s.createElement(_, { name: "exclamation triangle" }), o || d), f.length > 0 && /* @__PURE__ */ s.createElement(
    rC,
    {
      uploadFiles: f,
      isUploading: h,
      handleRemoveFile: pe,
      handleClearFiles: Ye
    }
  ));
}, jt = {
  selectedFileInfo: E({
    marginBlockStart: "0.5rem",
    color: "#666"
  }),
  fieldLabel: E({
    marginBlockEnd: "0.5rem",
    fontSize: "0.875rem",
    fontWeight: "bold"
  }),
  actionsContainer: E({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "0.5rem"
  })
}, nC = () => {
  const { taskId: e } = Qs(), [t, r] = N(null), [n, a] = N([]), [i, o] = N(!1), [l, c] = N(null), u = (h) => {
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
        await cS(
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
        ), t && await Ji(e, {
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
    /* @__PURE__ */ s.createElement(me, { icon: !0 }, /* @__PURE__ */ s.createElement(_, { name: "upload" }), "Upload Metadata & Files"),
    /* @__PURE__ */ s.createElement(le.Content, null, /* @__PURE__ */ s.createElement(_e, { onSubmit: f }, /* @__PURE__ */ s.createElement(_e.Field, null, /* @__PURE__ */ s.createElement("label", { htmlFor: "fileInput" }, "Select Metadata File (Optional)"), /* @__PURE__ */ s.createElement(
      "input",
      {
        id: "fileInput",
        type: "file",
        onChange: u,
        accept: ".csv"
      }
    ), t && /* @__PURE__ */ s.createElement("div", { className: jt.selectedFileInfo }, "Selected: ", t.name)), /* @__PURE__ */ s.createElement(_e.Field, null, /* @__PURE__ */ s.createElement("div", { className: jt.fieldLabel }, "Additional Files (Optional)"), /* @__PURE__ */ s.createElement(
      qs,
      {
        value: n,
        onChange: d,
        accept: "*",
        maxTotalSize: 10 * 1024 * 1024 * 1024,
        maxFiles: 100
      }
    )))),
    /* @__PURE__ */ s.createElement(le.Actions, null, /* @__PURE__ */ s.createElement("div", { className: jt.actionsContainer }, l && /* @__PURE__ */ s.createElement(Qi, { progress: l }), /* @__PURE__ */ s.createElement(z, { onClick: p, color: "grey", disabled: !!l }, /* @__PURE__ */ s.createElement(_, { name: "cancel" }), "Cancel"), /* @__PURE__ */ s.createElement(
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
}, aC = ({ taskId: e }) => {
  var f, h, y, m, v, g;
  const [t, r] = N(null), { getStatus: n, isGettingStatus: a, runBulkImport: i, isBulkImporting: o, error: l } = ts(e, { onStatusChangeSuccess: r });
  if (Me(() => {
    n();
  }, [n]), a || o)
    return /* @__PURE__ */ s.createElement(qi, null);
  if (!t)
    return /* @__PURE__ */ s.createElement(U, { warning: !0, icon: !0 }, /* @__PURE__ */ s.createElement(_, { name: "search" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Task Not Found"), "The requested task could not be found."));
  const c = ((f = t.records_status) == null ? void 0 : f.total_records) || 0, u = ((h = t.records_status) == null ? void 0 : h.validated) || 0, d = ((y = t.records_status) == null ? void 0 : y.success) || 0, p = (((m = t.records_status) == null ? void 0 : m["import failed"]) || 0) + (((v = t.records_status) == null ? void 0 : v["validation failed"]) || 0) + (((g = t.records_status) == null ? void 0 : g["serializer validation failed"]) || 0);
  return /* @__PURE__ */ s.createElement(jx, { taskId: e }, /* @__PURE__ */ s.createElement(ao, { fluid: !0, verticalAlign: "top" }, l && /* @__PURE__ */ s.createElement(U, { negative: !0, icon: !0 }, /* @__PURE__ */ s.createElement(_, { name: "exclamation triangle" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Error"), (l == null ? void 0 : l.message) || "An unknown error occurred")), /* @__PURE__ */ s.createElement(j, null, /* @__PURE__ */ s.createElement(j.Row, { verticalAlign: "top" }, /* @__PURE__ */ s.createElement(j.Column, { width: 8, verticalAlign: "middle" }, /* @__PURE__ */ s.createElement("div", { className: Mt.headerContainer }, /* @__PURE__ */ s.createElement(_, { name: "tasks", circular: !0, size: "big" }), /* @__PURE__ */ s.createElement("div", { className: Mt.headerContent }, /* @__PURE__ */ s.createElement(me, { as: "h2" }, /* @__PURE__ */ s.createElement(me.Content, null, t.title)), t.status && /* @__PURE__ */ s.createElement(Vi, { size: "large", status: t.status }, Be(t.status))))), /* @__PURE__ */ s.createElement(j.Column, { width: 8, textAlign: "right" }, /* @__PURE__ */ s.createElement("div", { className: Mt.actionsContainer }, /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(
    z,
    {
      size: "tiny",
      color: "blue",
      icon: "refresh",
      content: "Refresh",
      onClick: () => n(),
      loading: a
    }
  ), /* @__PURE__ */ s.createElement(nC, null), /* @__PURE__ */ s.createElement(
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
  ))))), t.description && /* @__PURE__ */ s.createElement(j.Row, null, /* @__PURE__ */ s.createElement(j.Column, { width: 16 }, /* @__PURE__ */ s.createElement(U, { info: !0, icon: !0, size: "small" }, /* @__PURE__ */ s.createElement(_, { name: "info circle" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Notes"), t.description))))), c > 0 && /* @__PURE__ */ s.createElement(W, { basic: !0 }, /* @__PURE__ */ s.createElement(
    zx,
    {
      totalRecords: c,
      validatedRecords: u,
      errorRecords: p,
      successRecords: d
    }
  ))), /* @__PURE__ */ s.createElement(Jx, null));
}, vC = {
  Search: Ms,
  TaskDetails: aC
}, EC = {
  CREATED: "created",
  VALIDATING: "validating",
  SERIALIZER_VALIDATION_FAILED: "serializer validation failed",
  VALIDATION_FAILED: "validation failed",
  VALIDATED: "validated",
  IMPORT_FAILED: "import failed",
  IMPORTED: "success"
}, SC = {
  CREATED: "created",
  VALIDATING: "validating",
  VALIDATION_FAILED: "validated with failures",
  VALIDATED: "validated",
  IMPORTING: "importing",
  IMPORT_FAILED: "imported with failures",
  SUCCESS: "success",
  DAMAGED: "damaged"
}, _C = {
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
  vC as BulkImporter,
  qs as FileUploader,
  Px as ImportModal,
  SC as ImporterTaskStates,
  EC as InvenioImporterRecordStatus,
  _C as OrchestrationStepsEnum,
  Qi as ProgressLoading,
  Ms as Search,
  qi as Spinner,
  YE as StatusIcon,
  Vi as StatusLabel,
  aC as TaskDetails,
  Zx as TaskRecordItem,
  Be as capitalizeFirstLetter,
  KE as cn,
  yC as createSearchApi,
  bC as createSearchApiConfig,
  Kt as formatDate,
  Dr as formatFileSize,
  JE as getCsrfToken,
  eS as getStatusColor,
  Hi as getTotalSize,
  Yi as getTotalSizeFormatted,
  tC as useFileUploader
};
