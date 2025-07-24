import i, { Component as k, useContext as T, useEffect as Ue, useCallback as O, Fragment as Wt, useState as L, useMemo as Si, createContext as $i, useRef as _i } from "react";
import v, { OverridableContext as xi } from "react-overridable";
import We from "axios";
import $e from "qs";
import { connect as R, Provider as Ci } from "react-redux";
import { Label as ae, Icon as S, Input as kn, Button as B, List as $, Checkbox as Ln, Card as D, Segment as K, Header as fe, Menu as Pe, Pagination as wi, Item as ye, Loader as Un, Dropdown as oe, Image as Fi, Dimmer as Ti, TableRow as lt, TableCell as V, Table as w, TableHeader as Nn, TableHeaderCell as H, TableBody as Bn, Form as be, Modal as ie, ModalHeader as Ai, ModalContent as Ii, Grid as M, Statistic as wt, Progress as Oi, Message as N, Tab as Ae, Popup as wr, Container as Ri } from "semantic-ui-react";
import { combineReducers as Pi, createStore as Di, applyMiddleware as ki } from "redux";
import Li from "redux-thunk";
import Ui from "lodash";
import { TextField as Ni, SelectField as Ft, TextAreaField as Bi, BaseForm as zi } from "react-invenio-forms";
import { useFormikContext as Mi } from "formik";
var Ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function P(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qi = Object.prototype;
function ji(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Qi;
  return e === r;
}
var ut = ji;
function qi(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var zn = qi, Gi = zn, Vi = Gi(Object.keys, Object), Hi = Vi, Ki = ut, Yi = Hi, Wi = Object.prototype, Zi = Wi.hasOwnProperty;
function Ji(e) {
  if (!Ki(e))
    return Yi(e);
  var t = [];
  for (var r in Object(e))
    Zi.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Mn = Ji, Xi = typeof Ge == "object" && Ge && Ge.Object === Object && Ge, Qn = Xi, eo = Qn, to = typeof self == "object" && self && self.Object === Object && self, ro = eo || to || Function("return this")(), ee = ro, no = ee, ao = no.Symbol, _e = ao, Fr = _e, jn = Object.prototype, so = jn.hasOwnProperty, io = jn.toString, Ie = Fr ? Fr.toStringTag : void 0;
function oo(e) {
  var t = so.call(e, Ie), r = e[Ie];
  try {
    e[Ie] = void 0;
    var n = !0;
  } catch {
  }
  var a = io.call(e);
  return n && (t ? e[Ie] = r : delete e[Ie]), a;
}
var lo = oo, uo = Object.prototype, co = uo.toString;
function po(e) {
  return co.call(e);
}
var fo = po, Tr = _e, ho = lo, mo = fo, go = "[object Null]", yo = "[object Undefined]", Ar = Tr ? Tr.toStringTag : void 0;
function vo(e) {
  return e == null ? e === void 0 ? yo : go : Ar && Ar in Object(e) ? ho(e) : mo(e);
}
var ue = vo;
function Eo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var se = Eo;
const bo = /* @__PURE__ */ P(se);
var So = ue, $o = se, _o = "[object AsyncFunction]", xo = "[object Function]", Co = "[object GeneratorFunction]", wo = "[object Proxy]";
function Fo(e) {
  if (!$o(e))
    return !1;
  var t = So(e);
  return t == xo || t == Co || t == _o || t == wo;
}
var qn = Fo, To = ee, Ao = To["__core-js_shared__"], Io = Ao, Tt = Io, Ir = function() {
  var e = /[^.]+$/.exec(Tt && Tt.keys && Tt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Oo(e) {
  return !!Ir && Ir in e;
}
var Ro = Oo, Po = Function.prototype, Do = Po.toString;
function ko(e) {
  if (e != null) {
    try {
      return Do.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Gn = ko, Lo = qn, Uo = Ro, No = se, Bo = Gn, zo = /[\\^$.*+?()[\]{}|]/g, Mo = /^\[object .+?Constructor\]$/, Qo = Function.prototype, jo = Object.prototype, qo = Qo.toString, Go = jo.hasOwnProperty, Vo = RegExp(
  "^" + qo.call(Go).replace(zo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ho(e) {
  if (!No(e) || Uo(e))
    return !1;
  var t = Lo(e) ? Vo : Mo;
  return t.test(Bo(e));
}
var Ko = Ho;
function Yo(e, t) {
  return e == null ? void 0 : e[t];
}
var Wo = Yo, Zo = Ko, Jo = Wo;
function Xo(e, t) {
  var r = Jo(e, t);
  return Zo(r) ? r : void 0;
}
var he = Xo, el = he, tl = ee, rl = el(tl, "DataView"), nl = rl, al = he, sl = ee, il = al(sl, "Map"), Zt = il, ol = he, ll = ee, ul = ol(ll, "Promise"), cl = ul, dl = he, pl = ee, fl = dl(pl, "Set"), hl = fl, ml = he, gl = ee, yl = ml(gl, "WeakMap"), vl = yl, Pt = nl, Dt = Zt, kt = cl, Lt = hl, Ut = vl, Vn = ue, xe = Gn, Or = "[object Map]", El = "[object Object]", Rr = "[object Promise]", Pr = "[object Set]", Dr = "[object WeakMap]", kr = "[object DataView]", bl = xe(Pt), Sl = xe(Dt), $l = xe(kt), _l = xe(Lt), xl = xe(Ut), de = Vn;
(Pt && de(new Pt(new ArrayBuffer(1))) != kr || Dt && de(new Dt()) != Or || kt && de(kt.resolve()) != Rr || Lt && de(new Lt()) != Pr || Ut && de(new Ut()) != Dr) && (de = function(e) {
  var t = Vn(e), r = t == El ? e.constructor : void 0, n = r ? xe(r) : "";
  if (n)
    switch (n) {
      case bl:
        return kr;
      case Sl:
        return Or;
      case $l:
        return Rr;
      case _l:
        return Pr;
      case xl:
        return Dr;
    }
  return t;
});
var Ne = de;
function Cl(e) {
  return e != null && typeof e == "object";
}
var te = Cl, wl = ue, Fl = te, Tl = "[object Arguments]";
function Al(e) {
  return Fl(e) && wl(e) == Tl;
}
var Il = Al, Lr = Il, Ol = te, Hn = Object.prototype, Rl = Hn.hasOwnProperty, Pl = Hn.propertyIsEnumerable, Dl = Lr(function() {
  return arguments;
}()) ? Lr : function(e) {
  return Ol(e) && Rl.call(e, "callee") && !Pl.call(e, "callee");
}, ct = Dl, kl = Array.isArray, j = kl;
const Kn = /* @__PURE__ */ P(j);
var Ll = 9007199254740991;
function Ul(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ll;
}
var Jt = Ul, Nl = qn, Bl = Jt;
function zl(e) {
  return e != null && Bl(e.length) && !Nl(e);
}
var dt = zl, Xe = { exports: {} };
function Ml() {
  return !1;
}
var Ql = Ml;
Xe.exports;
(function(e, t) {
  var r = ee, n = Ql, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, o = s && s.exports === a, l = o ? r.Buffer : void 0, u = l ? l.isBuffer : void 0, c = u || n;
  e.exports = c;
})(Xe, Xe.exports);
var pt = Xe.exports, jl = ue, ql = Jt, Gl = te, Vl = "[object Arguments]", Hl = "[object Array]", Kl = "[object Boolean]", Yl = "[object Date]", Wl = "[object Error]", Zl = "[object Function]", Jl = "[object Map]", Xl = "[object Number]", eu = "[object Object]", tu = "[object RegExp]", ru = "[object Set]", nu = "[object String]", au = "[object WeakMap]", su = "[object ArrayBuffer]", iu = "[object DataView]", ou = "[object Float32Array]", lu = "[object Float64Array]", uu = "[object Int8Array]", cu = "[object Int16Array]", du = "[object Int32Array]", pu = "[object Uint8Array]", fu = "[object Uint8ClampedArray]", hu = "[object Uint16Array]", mu = "[object Uint32Array]", C = {};
C[ou] = C[lu] = C[uu] = C[cu] = C[du] = C[pu] = C[fu] = C[hu] = C[mu] = !0;
C[Vl] = C[Hl] = C[su] = C[Kl] = C[iu] = C[Yl] = C[Wl] = C[Zl] = C[Jl] = C[Xl] = C[eu] = C[tu] = C[ru] = C[nu] = C[au] = !1;
function gu(e) {
  return Gl(e) && ql(e.length) && !!C[jl(e)];
}
var yu = gu;
function vu(e) {
  return function(t) {
    return e(t);
  };
}
var Xt = vu, et = { exports: {} };
et.exports;
(function(e, t) {
  var r = Qn, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, o = s && r.process, l = function() {
    try {
      var u = a && a.require && a.require("util").types;
      return u || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(et, et.exports);
var er = et.exports, Eu = yu, bu = Xt, Ur = er, Nr = Ur && Ur.isTypedArray, Su = Nr ? bu(Nr) : Eu, tr = Su, $u = Mn, _u = Ne, xu = ct, Cu = j, wu = dt, Fu = pt, Tu = ut, Au = tr, Iu = "[object Map]", Ou = "[object Set]", Ru = Object.prototype, Pu = Ru.hasOwnProperty;
function Du(e) {
  if (e == null)
    return !0;
  if (wu(e) && (Cu(e) || typeof e == "string" || typeof e.splice == "function" || Fu(e) || Au(e) || xu(e)))
    return !e.length;
  var t = _u(e);
  if (t == Iu || t == Ou)
    return !e.size;
  if (Tu(e))
    return !$u(e).length;
  for (var r in e)
    if (Pu.call(e, r))
      return !1;
  return !0;
}
var ku = Du;
const re = /* @__PURE__ */ P(ku);
var Lu = ue, Uu = te, Nu = "[object Symbol]";
function Bu(e) {
  return typeof e == "symbol" || Uu(e) && Lu(e) == Nu;
}
var rr = Bu, zu = j, Mu = rr, Qu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ju = /^\w*$/;
function qu(e, t) {
  if (zu(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Mu(e) ? !0 : ju.test(e) || !Qu.test(e) || t != null && e in Object(t);
}
var nr = qu, Gu = he, Vu = Gu(Object, "create"), ft = Vu, Br = ft;
function Hu() {
  this.__data__ = Br ? Br(null) : {}, this.size = 0;
}
var Ku = Hu;
function Yu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Wu = Yu, Zu = ft, Ju = "__lodash_hash_undefined__", Xu = Object.prototype, ec = Xu.hasOwnProperty;
function tc(e) {
  var t = this.__data__;
  if (Zu) {
    var r = t[e];
    return r === Ju ? void 0 : r;
  }
  return ec.call(t, e) ? t[e] : void 0;
}
var rc = tc, nc = ft, ac = Object.prototype, sc = ac.hasOwnProperty;
function ic(e) {
  var t = this.__data__;
  return nc ? t[e] !== void 0 : sc.call(t, e);
}
var oc = ic, lc = ft, uc = "__lodash_hash_undefined__";
function cc(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = lc && t === void 0 ? uc : t, this;
}
var dc = cc, pc = Ku, fc = Wu, hc = rc, mc = oc, gc = dc;
function Ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ce.prototype.clear = pc;
Ce.prototype.delete = fc;
Ce.prototype.get = hc;
Ce.prototype.has = mc;
Ce.prototype.set = gc;
var yc = Ce;
function vc() {
  this.__data__ = [], this.size = 0;
}
var Ec = vc;
function bc(e, t) {
  return e === t || e !== e && t !== t;
}
var ht = bc, Sc = ht;
function $c(e, t) {
  for (var r = e.length; r--; )
    if (Sc(e[r][0], t))
      return r;
  return -1;
}
var mt = $c, _c = mt, xc = Array.prototype, Cc = xc.splice;
function wc(e) {
  var t = this.__data__, r = _c(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Cc.call(t, r, 1), --this.size, !0;
}
var Fc = wc, Tc = mt;
function Ac(e) {
  var t = this.__data__, r = Tc(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Ic = Ac, Oc = mt;
function Rc(e) {
  return Oc(this.__data__, e) > -1;
}
var Pc = Rc, Dc = mt;
function kc(e, t) {
  var r = this.__data__, n = Dc(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Lc = kc, Uc = Ec, Nc = Fc, Bc = Ic, zc = Pc, Mc = Lc;
function we(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
we.prototype.clear = Uc;
we.prototype.delete = Nc;
we.prototype.get = Bc;
we.prototype.has = zc;
we.prototype.set = Mc;
var gt = we, zr = yc, Qc = gt, jc = Zt;
function qc() {
  this.size = 0, this.__data__ = {
    hash: new zr(),
    map: new (jc || Qc)(),
    string: new zr()
  };
}
var Gc = qc;
function Vc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Hc = Vc, Kc = Hc;
function Yc(e, t) {
  var r = e.__data__;
  return Kc(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var yt = Yc, Wc = yt;
function Zc(e) {
  var t = Wc(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Jc = Zc, Xc = yt;
function ed(e) {
  return Xc(this, e).get(e);
}
var td = ed, rd = yt;
function nd(e) {
  return rd(this, e).has(e);
}
var ad = nd, sd = yt;
function id(e, t) {
  var r = sd(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var od = id, ld = Gc, ud = Jc, cd = td, dd = ad, pd = od;
function Fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Fe.prototype.clear = ld;
Fe.prototype.delete = ud;
Fe.prototype.get = cd;
Fe.prototype.has = dd;
Fe.prototype.set = pd;
var ar = Fe, Yn = ar, fd = "Expected a function";
function sr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(fd);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(a))
      return s.get(a);
    var o = e.apply(this, n);
    return r.cache = s.set(a, o) || s, o;
  };
  return r.cache = new (sr.Cache || Yn)(), r;
}
sr.Cache = Yn;
var hd = sr, md = hd, gd = 500;
function yd(e) {
  var t = md(e, function(n) {
    return r.size === gd && r.clear(), n;
  }), r = t.cache;
  return t;
}
var vd = yd, Ed = vd, bd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Sd = /\\(\\)?/g, $d = Ed(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(bd, function(r, n, a, s) {
    t.push(a ? s.replace(Sd, "$1") : n || r);
  }), t;
}), _d = $d;
function xd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Cd = xd, Mr = _e, wd = Cd, Fd = j, Td = rr, Ad = 1 / 0, Qr = Mr ? Mr.prototype : void 0, jr = Qr ? Qr.toString : void 0;
function Wn(e) {
  if (typeof e == "string")
    return e;
  if (Fd(e))
    return wd(e, Wn) + "";
  if (Td(e))
    return jr ? jr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ad ? "-0" : t;
}
var Id = Wn, Od = Id;
function Rd(e) {
  return e == null ? "" : Od(e);
}
var Be = Rd, Pd = j, Dd = nr, kd = _d, Ld = Be;
function Ud(e, t) {
  return Pd(e) ? e : Dd(e, t) ? [e] : kd(Ld(e));
}
var vt = Ud, Nd = rr, Bd = 1 / 0;
function zd(e) {
  if (typeof e == "string" || Nd(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Bd ? "-0" : t;
}
var ze = zd, Md = vt, Qd = ze;
function jd(e, t) {
  t = Md(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Qd(t[r++])];
  return r && r == n ? e : void 0;
}
var ir = jd, qd = ir;
function Gd(e, t, r) {
  var n = e == null ? void 0 : qd(e, t);
  return n === void 0 ? r : n;
}
var Zn = Gd;
const Oe = /* @__PURE__ */ P(Zn);
function Vd(e, t) {
  return e != null && t in Object(e);
}
var Hd = Vd, Kd = 9007199254740991, Yd = /^(?:0|[1-9]\d*)$/;
function Wd(e, t) {
  var r = typeof e;
  return t = t ?? Kd, !!t && (r == "number" || r != "symbol" && Yd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Et = Wd, Zd = vt, Jd = ct, Xd = j, ep = Et, tp = Jt, rp = ze;
function np(e, t, r) {
  t = Zd(t, e);
  for (var n = -1, a = t.length, s = !1; ++n < a; ) {
    var o = rp(t[n]);
    if (!(s = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return s || ++n != a ? s : (a = e == null ? 0 : e.length, !!a && tp(a) && ep(o, a) && (Xd(e) || Jd(e)));
}
var Jn = np, ap = Hd, sp = Jn;
function ip(e, t) {
  return e != null && sp(e, t, ap);
}
var or = ip;
const op = /* @__PURE__ */ P(or);
var lp = he, up = function() {
  try {
    var e = lp(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Xn = up, qr = Xn;
function cp(e, t, r) {
  t == "__proto__" && qr ? qr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var bt = cp, dp = bt, pp = ht, fp = Object.prototype, hp = fp.hasOwnProperty;
function mp(e, t, r) {
  var n = e[t];
  (!(hp.call(e, t) && pp(n, r)) || r === void 0 && !(t in e)) && dp(e, t, r);
}
var lr = mp, gp = lr, yp = bt;
function vp(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var l = t[s], u = n ? n(r[l], e[l], l, r, e) : void 0;
    u === void 0 && (u = e[l]), a ? yp(r, l, u) : gp(r, l, u);
  }
  return r;
}
var Me = vp;
function Ep(e) {
  return e;
}
var ur = Ep;
function bp(e, t, r) {
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
var Sp = bp, $p = Sp, Gr = Math.max;
function _p(e, t, r) {
  return t = Gr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, s = Gr(n.length - t, 0), o = Array(s); ++a < s; )
      o[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(o), $p(e, this, l);
  };
}
var ea = _p;
function xp(e) {
  return function() {
    return e;
  };
}
var Cp = xp, wp = Cp, Vr = Xn, Fp = ur, Tp = Vr ? function(e, t) {
  return Vr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: wp(t),
    writable: !0
  });
} : Fp, Ap = Tp, Ip = 800, Op = 16, Rp = Date.now;
function Pp(e) {
  var t = 0, r = 0;
  return function() {
    var n = Rp(), a = Op - (n - r);
    if (r = n, a > 0) {
      if (++t >= Ip)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Dp = Pp, kp = Ap, Lp = Dp, Up = Lp(kp), ta = Up, Np = ur, Bp = ea, zp = ta;
function Mp(e, t) {
  return zp(Bp(e, t, Np), e + "");
}
var Qp = Mp, jp = ht, qp = dt, Gp = Et, Vp = se;
function Hp(e, t, r) {
  if (!Vp(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? qp(r) && Gp(t, r.length) : n == "string" && t in r) ? jp(r[t], e) : !1;
}
var Kp = Hp, Yp = Qp, Wp = Kp;
function Zp(e) {
  return Yp(function(t, r) {
    var n = -1, a = r.length, s = a > 1 ? r[a - 1] : void 0, o = a > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, o && Wp(r[0], r[1], o) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++n < a; ) {
      var l = r[n];
      l && e(t, l, n, s);
    }
    return t;
  });
}
var Jp = Zp;
function Xp(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var ef = Xp, tf = ef, rf = ct, nf = j, af = pt, sf = Et, of = tr, lf = Object.prototype, uf = lf.hasOwnProperty;
function cf(e, t) {
  var r = nf(e), n = !r && rf(e), a = !r && !n && af(e), s = !r && !n && !a && of(e), o = r || n || a || s, l = o ? tf(e.length, String) : [], u = l.length;
  for (var c in e)
    (t || uf.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    sf(c, u))) && l.push(c);
  return l;
}
var ra = cf;
function df(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var pf = df, ff = se, hf = ut, mf = pf, gf = Object.prototype, yf = gf.hasOwnProperty;
function vf(e) {
  if (!ff(e))
    return mf(e);
  var t = hf(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !yf.call(e, n)) || r.push(n);
  return r;
}
var Ef = vf, bf = ra, Sf = Ef, $f = dt;
function _f(e) {
  return $f(e) ? bf(e, !0) : Sf(e);
}
var St = _f, xf = Me, Cf = Jp, wf = St, Ff = Cf(function(e, t) {
  xf(t, wf(t), e);
}), Tf = Ff, Af = Tf;
const tt = /* @__PURE__ */ P(Af);
function If(e) {
  return e && e.length ? e[0] : void 0;
}
var Of = If;
const Rf = /* @__PURE__ */ P(Of);
var Pf = lr, Df = vt, kf = Et, Hr = se, Lf = ze;
function Uf(e, t, r, n) {
  if (!Hr(e))
    return e;
  t = Df(t, e);
  for (var a = -1, s = t.length, o = s - 1, l = e; l != null && ++a < s; ) {
    var u = Lf(t[a]), c = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != o) {
      var d = l[u];
      c = n ? n(d, u, l) : void 0, c === void 0 && (c = Hr(d) ? d : kf(t[a + 1]) ? [] : {});
    }
    Pf(l, u, c), l = l[u];
  }
  return e;
}
var Nf = Uf, Bf = ir, zf = Nf, Mf = vt;
function Qf(e, t, r) {
  for (var n = -1, a = t.length, s = {}; ++n < a; ) {
    var o = t[n], l = Bf(e, o);
    r(l, o) && zf(s, Mf(o, e), l);
  }
  return s;
}
var jf = Qf, qf = jf, Gf = or;
function Vf(e, t) {
  return qf(e, t, function(r, n) {
    return Gf(e, n);
  });
}
var Hf = Vf;
function Kf(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var cr = Kf, Kr = _e, Yf = ct, Wf = j, Yr = Kr ? Kr.isConcatSpreadable : void 0;
function Zf(e) {
  return Wf(e) || Yf(e) || !!(Yr && e && e[Yr]);
}
var Jf = Zf, Xf = cr, eh = Jf;
function na(e, t, r, n, a) {
  var s = -1, o = e.length;
  for (r || (r = eh), a || (a = []); ++s < o; ) {
    var l = e[s];
    t > 0 && r(l) ? t > 1 ? na(l, t - 1, r, n, a) : Xf(a, l) : n || (a[a.length] = l);
  }
  return a;
}
var th = na, rh = th;
function nh(e) {
  var t = e == null ? 0 : e.length;
  return t ? rh(e, 1) : [];
}
var ah = nh, sh = ah, ih = ea, oh = ta;
function lh(e) {
  return oh(ih(e, void 0, sh), e + "");
}
var uh = lh, ch = Hf, dh = uh, ph = dh(function(e, t) {
  return e == null ? {} : ch(e, t);
}), fh = ph;
const hh = /* @__PURE__ */ P(fh);
var mh = gt;
function gh() {
  this.__data__ = new mh(), this.size = 0;
}
var yh = gh;
function vh(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Eh = vh;
function bh(e) {
  return this.__data__.get(e);
}
var Sh = bh;
function $h(e) {
  return this.__data__.has(e);
}
var _h = $h, xh = gt, Ch = Zt, wh = ar, Fh = 200;
function Th(e, t) {
  var r = this.__data__;
  if (r instanceof xh) {
    var n = r.__data__;
    if (!Ch || n.length < Fh - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new wh(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Ah = Th, Ih = gt, Oh = yh, Rh = Eh, Ph = Sh, Dh = _h, kh = Ah;
function Te(e) {
  var t = this.__data__ = new Ih(e);
  this.size = t.size;
}
Te.prototype.clear = Oh;
Te.prototype.delete = Rh;
Te.prototype.get = Ph;
Te.prototype.has = Dh;
Te.prototype.set = kh;
var dr = Te;
function Lh(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Uh = Lh, Nh = ra, Bh = Mn, zh = dt;
function Mh(e) {
  return zh(e) ? Nh(e) : Bh(e);
}
var Qe = Mh, Qh = Me, jh = Qe;
function qh(e, t) {
  return e && Qh(t, jh(t), e);
}
var Gh = qh, Vh = Me, Hh = St;
function Kh(e, t) {
  return e && Vh(t, Hh(t), e);
}
var Yh = Kh, rt = { exports: {} };
rt.exports;
(function(e, t) {
  var r = ee, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, o = s ? r.Buffer : void 0, l = o ? o.allocUnsafe : void 0;
  function u(c, d) {
    if (d)
      return c.slice();
    var p = c.length, f = l ? l(p) : new c.constructor(p);
    return c.copy(f), f;
  }
  e.exports = u;
})(rt, rt.exports);
var Wh = rt.exports;
function Zh(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Jh = Zh;
function Xh(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (s[a++] = o);
  }
  return s;
}
var em = Xh;
function tm() {
  return [];
}
var aa = tm, rm = em, nm = aa, am = Object.prototype, sm = am.propertyIsEnumerable, Wr = Object.getOwnPropertySymbols, im = Wr ? function(e) {
  return e == null ? [] : (e = Object(e), rm(Wr(e), function(t) {
    return sm.call(e, t);
  }));
} : nm, pr = im, om = Me, lm = pr;
function um(e, t) {
  return om(e, lm(e), t);
}
var cm = um, dm = zn, pm = dm(Object.getPrototypeOf, Object), sa = pm, fm = cr, hm = sa, mm = pr, gm = aa, ym = Object.getOwnPropertySymbols, vm = ym ? function(e) {
  for (var t = []; e; )
    fm(t, mm(e)), e = hm(e);
  return t;
} : gm, ia = vm, Em = Me, bm = ia;
function Sm(e, t) {
  return Em(e, bm(e), t);
}
var $m = Sm, _m = cr, xm = j;
function Cm(e, t, r) {
  var n = t(e);
  return xm(e) ? n : _m(n, r(e));
}
var oa = Cm, wm = oa, Fm = pr, Tm = Qe;
function Am(e) {
  return wm(e, Tm, Fm);
}
var la = Am, Im = oa, Om = ia, Rm = St;
function Pm(e) {
  return Im(e, Rm, Om);
}
var Dm = Pm, km = Object.prototype, Lm = km.hasOwnProperty;
function Um(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Lm.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Nm = Um, Bm = ee, zm = Bm.Uint8Array, ua = zm, Zr = ua;
function Mm(e) {
  var t = new e.constructor(e.byteLength);
  return new Zr(t).set(new Zr(e)), t;
}
var fr = Mm, Qm = fr;
function jm(e, t) {
  var r = t ? Qm(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var qm = jm, Gm = /\w*$/;
function Vm(e) {
  var t = new e.constructor(e.source, Gm.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Hm = Vm, Jr = _e, Xr = Jr ? Jr.prototype : void 0, en = Xr ? Xr.valueOf : void 0;
function Km(e) {
  return en ? Object(en.call(e)) : {};
}
var Ym = Km, Wm = fr;
function Zm(e, t) {
  var r = t ? Wm(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Jm = Zm, Xm = fr, eg = qm, tg = Hm, rg = Ym, ng = Jm, ag = "[object Boolean]", sg = "[object Date]", ig = "[object Map]", og = "[object Number]", lg = "[object RegExp]", ug = "[object Set]", cg = "[object String]", dg = "[object Symbol]", pg = "[object ArrayBuffer]", fg = "[object DataView]", hg = "[object Float32Array]", mg = "[object Float64Array]", gg = "[object Int8Array]", yg = "[object Int16Array]", vg = "[object Int32Array]", Eg = "[object Uint8Array]", bg = "[object Uint8ClampedArray]", Sg = "[object Uint16Array]", $g = "[object Uint32Array]";
function _g(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case pg:
      return Xm(e);
    case ag:
    case sg:
      return new n(+e);
    case fg:
      return eg(e, r);
    case hg:
    case mg:
    case gg:
    case yg:
    case vg:
    case Eg:
    case bg:
    case Sg:
    case $g:
      return ng(e, r);
    case ig:
      return new n();
    case og:
    case cg:
      return new n(e);
    case lg:
      return tg(e);
    case ug:
      return new n();
    case dg:
      return rg(e);
  }
}
var xg = _g, Cg = se, tn = Object.create, wg = function() {
  function e() {
  }
  return function(t) {
    if (!Cg(t))
      return {};
    if (tn)
      return tn(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Fg = wg, Tg = Fg, Ag = sa, Ig = ut;
function Og(e) {
  return typeof e.constructor == "function" && !Ig(e) ? Tg(Ag(e)) : {};
}
var Rg = Og, Pg = Ne, Dg = te, kg = "[object Map]";
function Lg(e) {
  return Dg(e) && Pg(e) == kg;
}
var Ug = Lg, Ng = Ug, Bg = Xt, rn = er, nn = rn && rn.isMap, zg = nn ? Bg(nn) : Ng, Mg = zg, Qg = Ne, jg = te, qg = "[object Set]";
function Gg(e) {
  return jg(e) && Qg(e) == qg;
}
var Vg = Gg, Hg = Vg, Kg = Xt, an = er, sn = an && an.isSet, Yg = sn ? Kg(sn) : Hg, Wg = Yg, Zg = dr, Jg = Uh, Xg = lr, ey = Gh, ty = Yh, ry = Wh, ny = Jh, ay = cm, sy = $m, iy = la, oy = Dm, ly = Ne, uy = Nm, cy = xg, dy = Rg, py = j, fy = pt, hy = Mg, my = se, gy = Wg, yy = Qe, vy = St, Ey = 1, by = 2, Sy = 4, ca = "[object Arguments]", $y = "[object Array]", _y = "[object Boolean]", xy = "[object Date]", Cy = "[object Error]", da = "[object Function]", wy = "[object GeneratorFunction]", Fy = "[object Map]", Ty = "[object Number]", pa = "[object Object]", Ay = "[object RegExp]", Iy = "[object Set]", Oy = "[object String]", Ry = "[object Symbol]", Py = "[object WeakMap]", Dy = "[object ArrayBuffer]", ky = "[object DataView]", Ly = "[object Float32Array]", Uy = "[object Float64Array]", Ny = "[object Int8Array]", By = "[object Int16Array]", zy = "[object Int32Array]", My = "[object Uint8Array]", Qy = "[object Uint8ClampedArray]", jy = "[object Uint16Array]", qy = "[object Uint32Array]", _ = {};
_[ca] = _[$y] = _[Dy] = _[ky] = _[_y] = _[xy] = _[Ly] = _[Uy] = _[Ny] = _[By] = _[zy] = _[Fy] = _[Ty] = _[pa] = _[Ay] = _[Iy] = _[Oy] = _[Ry] = _[My] = _[Qy] = _[jy] = _[qy] = !0;
_[Cy] = _[da] = _[Py] = !1;
function Ze(e, t, r, n, a, s) {
  var o, l = t & Ey, u = t & by, c = t & Sy;
  if (r && (o = a ? r(e, n, a, s) : r(e)), o !== void 0)
    return o;
  if (!my(e))
    return e;
  var d = py(e);
  if (d) {
    if (o = uy(e), !l)
      return ny(e, o);
  } else {
    var p = ly(e), f = p == da || p == wy;
    if (fy(e))
      return ry(e, l);
    if (p == pa || p == ca || f && !a) {
      if (o = u || f ? {} : dy(e), !l)
        return u ? sy(e, ty(o, e)) : ay(e, ey(o, e));
    } else {
      if (!_[p])
        return a ? e : {};
      o = cy(e, p, l);
    }
  }
  s || (s = new Zg());
  var h = s.get(e);
  if (h)
    return h;
  s.set(e, o), gy(e) ? e.forEach(function(E) {
    o.add(Ze(E, t, r, E, e, s));
  }) : hy(e) && e.forEach(function(E, g) {
    o.set(g, Ze(E, t, r, g, e, s));
  });
  var y = c ? u ? oy : iy : u ? vy : yy, m = d ? void 0 : y(e);
  return Jg(m || e, function(E, g) {
    m && (g = E, E = e[g]), Xg(o, g, Ze(E, t, r, g, e, s));
  }), o;
}
var Gy = Ze, Vy = Gy, Hy = 1, Ky = 4;
function Yy(e) {
  return Vy(e, Hy | Ky);
}
var Wy = Yy;
const Se = /* @__PURE__ */ P(Wy);
var Zy = ue, Jy = te, Xy = "[object Boolean]";
function ev(e) {
  return e === !0 || e === !1 || Jy(e) && Zy(e) == Xy;
}
var tv = ev;
const rv = /* @__PURE__ */ P(tv);
var nv = ue, av = j, sv = te, iv = "[object String]";
function ov(e) {
  return typeof e == "string" || !av(e) && sv(e) && nv(e) == iv;
}
var lv = ov;
const uv = /* @__PURE__ */ P(lv);
var cv = ue, dv = te, pv = "[object Number]";
function fv(e) {
  return typeof e == "number" || dv(e) && cv(e) == pv;
}
var hv = fv;
const mv = /* @__PURE__ */ P(hv);
function hr() {
}
hr.prototype = new Error();
class on {
  constructor() {
    this._addFilter = (t, r) => {
      if (!Array.isArray(t))
        throw new Error(`Filter value "${t}" in query state must be an array.`);
      if (!(t.length === 2 || t.length === 3))
        throw new Error(`Filter value "${t}" in query state must be an array of 2 or 3 elements`);
      const n = t.length === 3;
      var a = t[0], s = t[1];
      if (n) {
        if (!Array.isArray(t[2]))
          throw new Error(`Filter value "${t[2]}" in query state must be an array.`);
        s = s + "::" + t[2][1];
      }
      a in r ? r[a].push(s) : r[a] = [s];
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
      page: s,
      size: o,
      filters: l,
      hiddenParams: u
    } = t;
    let c = {};
    r !== null && (c.q = r), n !== null && (c.sort = n, a !== null && (c.sort = a === "desc" ? `-${n}` : n)), s > 0 && (c.page = s), o > 0 && (c.size = o), re(u) || tt(c, this._addFilters(u));
    const d = this._addFilters(l);
    return tt(c, d), $e.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class gv {
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
function Ve(e, t) {
  return e.indexOf(t) === 0 && (e.length === t.length || e.indexOf(t + "&") === 0);
}
function At(e) {
  return $e.stringify({
    q: e
  });
}
function yv(e) {
  return $e.parse(e).q;
}
function fa(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = fa(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function ln(e, t) {
  const r = At(e), n = t.map((o) => At(o));
  let a = !1;
  const s = n.filter((o) => {
    const l = Ve(o, r), u = Ve(r, o);
    return l && !a && (a = !0), !l && !u;
  });
  if (!a)
    s.push(r);
  else if (e.length === 3) {
    const l = fa(e), u = At(l), c = s.some((d) => {
      const p = Ve(d, u), f = Ve(u, d);
      return p || f;
    });
    (re(s) || !c) && s.push(u);
  }
  return s.map((o) => yv(o));
}
const ha = (e, t) => {
  if (re(e))
    return;
  if (!Kn(Rf(e)))
    return ln(e, t);
  let r = t;
  for (const n of e)
    r = ln(n, r);
  return r;
}, ma = (e, t, r) => {
  let n = hh(t, r);
  return re(n.filters) || (n.filters = ha(n.filters, e.filters)), n;
}, nt = {
  queryString: "",
  suggestions: [],
  sortBy: null,
  sortOrder: null,
  page: -1,
  size: -1,
  filters: [],
  hiddenParams: [],
  layout: null
}, ga = Object.keys(nt), vv = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, Ev = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class bv {
  constructor() {
    this._checkFilter = (t) => {
      if (!Array.isArray(t))
        throw new Error(`Filter value "${t}" in query state must be an array.`);
      if (!(t.length === 2 || t.length === 3))
        throw new Error(`Filter value "${t}" in query state must be an array of 2 or 3 elements`);
    }, this._addFilter = (t, r) => {
      this._checkFilter(t);
      const n = t[0], a = t[1], s = t.length === 3;
      s && this._checkFilter(t[2]), n in r ? s ? r[n].push(a + "::" + t[2][1]) : r[n].push(a) : s ? r[n] = [a + "::" + t[2][1]] : r[n] = [a];
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
      page: s,
      size: o,
      filters: l,
      hiddenParams: u
    } = t;
    let c = {};
    r !== null && (c.q = r), n !== null && (c.sort = n, a !== null && (c.sort = a === "desc" ? `-${n}` : n)), s > 0 && (c.page = s), o > 0 && (c.size = o), re(u) || tt(c, this._addFilters(u));
    const d = this._addFilters(l);
    return tt(c, d), $e.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class ya {
  constructor(t) {
    this.axiosConfig = Oe(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = We.CancelToken;
  }
  validateAxiosConfig() {
    if (!op(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = Oe(t, "interceptors.request", void 0), this.responseInterceptor = Oe(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: bv,
      InvenioRequestSerializer: on
    };
    return typeof t == "string" ? r[t] : t || on;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), a = Oe(t, "invenio.responseSerializer", gv);
    this.requestSerializer = new n(), this.responseSerializer = new a();
  }
  initAxios() {
    const t = {
      paramsSerializer: this.requestSerializer.serialize,
      ...this.axiosConfig
    };
    this.http = We.create(t), this.addInterceptors();
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
      const n = ma(t, r.extras, ga);
      return re(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw We.isCancel(r) ? new hr() : r;
    }
  }
}
class Sv {
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
          return mv(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const a = Kn(n) ? n : [n], s = ":", o = t.urlFilterSeparator, l = `[^\\${s}\\${o}]*`, u = `${l}\\${s}${l}`, c = `${u}(\\${o}${u})*`, d = new RegExp(`^${c}$`);
          return a.every((p) => String(p).match(d));
        }
        default:
          return !1;
      }
    };
  }
}
const $v = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, un = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class _v {
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
    const r = $e.parse(t, {
      ignoreQueryPrefix: !0
    }), n = {};
    return Object.entries(r).forEach((a) => {
      const s = a[0], o = a[1];
      n[s] = this._convertValue(s, o);
    }), n;
  }
}
class xv {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (this._filterListToString = (r) => {
      const n = r.length === 3 ? this.urlFilterSeparator.concat(this._filterListToString(r[2])) : "";
      return `${r[0]}:${r[1]}${n}`;
    }, this._mapQueryStateToUrlParams = (r) => {
      const n = {};
      Object.keys(r).filter((s) => s in this.urlParamsMapping).filter((s) => (s === "page" || s === "size") && r[s] <= 0 || s === "hiddenParams" ? !1 : r[s] !== null).forEach((s) => {
        const o = this.urlParamsMapping[s];
        s === "filters" ? n[o] = r[s].map((l) => this._filterListToString(l)) : n[o] = r[s];
      });
      const a = (s, o) => {
        const l = "q";
        return s === l ? -1 : o === l ? 1 : s.localeCompare(o);
      };
      return $e.stringify(n, {
        addQueryPrefix: !0,
        skipNulls: !0,
        indices: !1,
        // order for filters params is not important, remove indices
        sort: a
      });
    }, this._filterStringToList = (r) => {
      const n = r.indexOf(this.urlFilterSeparator), a = n > -1, s = r.indexOf(":");
      if (s === -1)
        throw new Error(`Filter "${r}" not parsable. Format expected: "<agg name>:<value>"`);
      const o = r.slice(0, s), l = a ? n : r.length, u = r.slice(s + 1, l);
      let c = [o, u];
      if (a) {
        const d = r.slice(n + 1, r.length);
        c.push(this._filterStringToList(d));
      }
      return c;
    }, this._mapUrlParamsToQueryState = (r) => {
      const n = {};
      return Object.keys(r).forEach((a) => {
        const s = this.fromUrlParamsMapping[a];
        this.urlParamValidator.isValid(this, s, r[a]) ? (n[s] = r[a], s === "filters" && (Array.isArray(r[a]) || (r[a] = [r[a]]), n[s] = r[a].map((o) => this._filterStringToList(o)))) : console.warn(`URL parameter '${a}' with value '${r[a]}' is incorrect and was ignored.`);
      }), n;
    }, this._mergeParamsIntoState = (r, n) => {
      const a = Se(n);
      return Object.keys(r).forEach((s) => {
        a[s] = r[s];
      }), a;
    }, this.urlParamsMapping = bo(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !rv(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !uv(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new Sv(), this.urlParser = t.urlParser || new _v(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), a = this._mergeParamsIntoState(n, t), s = this._mapQueryStateToUrlParams(a);
    return un(s), a;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      $v(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    un(r);
  }
}
const Cv = "SET_QUERY_COMPONENT_INITIAL_STATE", va = "SET_QUERY_STRING", mr = "SET_QUERY_SORTING", gr = "SET_QUERY_SORT_BY", yr = "SET_QUERY_SORT_ORDER", je = "SET_QUERY_STATE", Ea = "SET_QUERY_PAGINATION_PAGE", ba = "SET_QUERY_PAGINATION_SIZE", Sa = "SET_QUERY_FILTERS", $a = "SET_QUERY_SUGGESTIONS", _a = "SET_SUGGESTION_STRING", xa = "CLEAR_QUERY_SUGGESTIONS", Ca = "RESULTS_LOADING", wa = "RESULTS_FETCH_SUCCESS", Fa = "RESULTS_FETCH_ERROR", Nt = "RESULTS_UPDATE_LAYOUT", Ta = "RESET_QUERY", wv = (e) => (t) => {
  e && t(J({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, Aa = (e) => (t) => {
  t({
    type: je,
    payload: e
  }), t(J());
}, Ia = (e) => (t) => {
  t({
    type: va,
    payload: e
  }), t(J());
}, Fv = (e, t) => (r) => {
  r({
    type: mr,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(J());
}, Tv = (e) => (t) => {
  t({
    type: gr,
    payload: e
  }), t(J());
}, Av = (e) => (t) => {
  t({
    type: yr,
    payload: e
  }), t(J());
}, Iv = (e) => (t) => {
  t({
    type: Ea,
    payload: e
  }), t(J());
}, Ov = (e) => (t) => {
  t({
    type: ba,
    payload: e
  }), t(J());
}, vr = (e) => (t) => {
  t({
    type: Sa,
    payload: e
  }), t(J());
}, Rv = (e) => async (t, r, n) => {
  const a = n.urlHandlerApi;
  if (a) {
    await t({
      type: Nt,
      payload: e
    });
    const s = r().query;
    a.set(s);
  } else
    t({
      type: Nt,
      payload: e
    });
}, Pv = () => (e, t, r) => {
  e({
    type: Ta,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(J());
}, Dv = (e, t, r, n) => {
  const a = t.urlHandlerApi;
  a && (r ? a.replace(e) : n && a.set(e));
}, kv = (e, t, r, n) => {
  const a = r().query;
  t({
    type: je,
    payload: {
      ...a,
      ...e.newQueryState
    }
  });
  const s = Se(r().query), o = n.urlHandlerApi;
  return o && o.replace(s), delete e.newStateQuery, e;
}, Lv = (e, t, r, n) => {
  function a(l, u, c, d) {
    l.queryString === "" ? (l.sortBy = c.defaultSortingOnEmptyQueryString.sortBy, l.sortOrder = c.defaultSortingOnEmptyQueryString.sortOrder) : (l.sortBy = u.initialSortBy, l.sortOrder = u.initialSortOrder), d({
      type: je,
      payload: l
    });
  }
  function s(l, u, c, d) {
    u.hasUserChangedSorting || a(l, u, c, d);
  }
  !re(r.defaultSortingOnEmptyQueryString) && s(e, t, r, n);
}, J = function() {
  let {
    shouldUpdateUrlQueryString: e = !0,
    shouldReplaceUrlQueryString: t = !1
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return async (r, n, a) => {
    const s = n().app;
    let o = Se(n().query);
    Lv(o, s, a, r), o = Se(n().query), Dv(o, a, t, e), r({
      type: Ca
    });
    try {
      let u = await a.searchApi.search(o);
      "newQueryState" in u && (u = kv(Se(u), r, n, a)), r({
        type: wa,
        payload: {
          aggregations: u.aggregations,
          hits: u.hits,
          total: u.total
        }
      });
    } catch (l) {
      if (l instanceof hr) {
        console.debug(l);
        return;
      } else
        console.error(l), r({
          type: Fa,
          payload: {
            error: l
          }
        });
    }
  };
}, Uv = (e) => (t) => {
  t({
    type: _a,
    payload: e
  }), t(Nv());
}, Nv = () => async (e, t, r) => {
  const n = Se(t().query), a = r.suggestionApi;
  try {
    const s = await a.search(n);
    e({
      type: $a,
      payload: {
        suggestions: s.suggestions
      }
    });
  } catch (s) {
    console.error("Could not load suggestions due to: " + s);
  }
}, Bv = () => (e) => {
  e({
    type: xa,
    payload: {
      suggestions: []
    }
  });
}, zv = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: je,
      payload: n
    }), e(J({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, x = /* @__PURE__ */ i.createContext({}), Mv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
    case mr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case gr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case yr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    default:
      return e;
  }
}, Qv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case va:
      return {
        ...e,
        queryString: t.payload,
        page: 1
      };
    case mr:
      return {
        ...e,
        sortBy: t.payload.sortBy,
        sortOrder: t.payload.sortOrder,
        _sortUserChanged: !0,
        page: 1
      };
    case gr:
      return {
        ...e,
        sortBy: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case yr:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case Ea:
      return {
        ...e,
        page: t.payload
      };
    case ba:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case Sa:
      return {
        ...e,
        page: 1,
        filters: ha(t.payload, e.filters)
      };
    case $a:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case xa:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case _a:
      return {
        ...e,
        suggestionString: t.payload
      };
    case Cv:
      return {
        ...e,
        ...t.payload
      };
    case je:
      return {
        ...e,
        ...nt,
        ...ma(nt, t.payload, ga)
      };
    case Nt:
      return {
        ...e,
        layout: t.payload
      };
    case Ta:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, jv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Ca:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case wa:
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
    case Fa:
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
var qv = Pi({
  app: Mv,
  query: Qv,
  results: jv
});
function cn(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: a,
    sortOrder: s
  } = t;
  return r !== a || n !== s;
}
function Gv(e, t, r) {
  const n = cn(r, t), a = !re(e.defaultSortingOnEmptyQueryString);
  let s = !1;
  return a && (s = cn(r, e.defaultSortingOnEmptyQueryString)), n && s;
}
function Vv(e) {
  const t = {
    ...nt,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = Gv(e, t, r), a = {
    ...Ev,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, s = {
    ...vv,
    loading: e.searchOnInit
  };
  return {
    app: a,
    query: r,
    results: s
  };
}
function Hv(e) {
  const t = Vv(e);
  return Di(qv, t, ki(Li.withExtraArgument(e)));
}
function dn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class Er extends k {
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
Er.defaultProps = {
  searchOnInit: !0,
  eventListenerEnabled: !1
};
Er.contextType = x;
var Kv = v.component("Bootstrap", Er);
const Yv = (e) => ({
  onAppInitialized: (t) => e(wv(t)),
  updateQueryState: (t) => e(Aa(t)),
  searchOnUrlQueryStringChanged: () => e(zv())
}), Wv = R(null, Yv)(Kv);
class br extends k {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new xv(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = Hv(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
  }
  render() {
    const {
      appName: t,
      children: r,
      eventListenerEnabled: n,
      overridableId: a,
      searchOnInit: s
    } = this.props, o = {
      appName: t,
      buildUID: (u, c) => dn(u, c, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, l = dn("ReactSearchKit.children", a, t);
    return /* @__PURE__ */ i.createElement(x.Provider, {
      value: o
    }, /* @__PURE__ */ i.createElement(Ci, {
      store: this.store
    }, /* @__PURE__ */ i.createElement(Wv, {
      searchOnInit: s,
      eventListenerEnabled: n
    }, /* @__PURE__ */ i.createElement(v, {
      id: l
    }, r))));
  }
}
br.defaultProps = {
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
br.contextType = x;
var Zv = v.component("ReactSearchKit", br);
class Oa extends k {
  constructor(t) {
    super(t), this._getLabel = (r) => {
      const n = r[0];
      let a = r[1], s = [n, a];
      if (r.length === 3) {
        const {
          label: l,
          activeFilter: u
        } = this._getLabel(r[2]);
        a = `${a}.${l}`, s.push(u);
      }
      return {
        label: a,
        activeFilter: s
      };
    }, this.updateQueryFilters = t.updateQueryFilters;
  }
  render() {
    const {
      filters: t,
      overridableId: r
    } = this.props;
    return !!t.length && /* @__PURE__ */ i.createElement(Ra, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
Oa.defaultProps = {
  overridableId: ""
};
const Ra = (e) => {
  let {
    overridableId: t,
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  } = e;
  const {
    buildUID: s
  } = T(x);
  return /* @__PURE__ */ i.createElement(v, {
    id: s("ActiveFilters.element", t),
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  }, /* @__PURE__ */ i.createElement(i.Fragment, null, r.map((o, l) => {
    const {
      label: u,
      activeFilter: c
    } = a(o);
    return (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ i.createElement(ae, {
        image: !0,
        key: l,
        onClick: () => n(c)
      }, u, /* @__PURE__ */ i.createElement(S, {
        name: "delete"
      }))
    );
  })));
};
Ra.defaultProps = {
  overridableId: ""
};
var Jv = v.component("ActiveFilters", Oa);
const Xv = (e) => ({
  updateQueryFilters: (t) => e(vr(t))
});
R((e) => ({
  filters: e.query.filters
}), Xv)(Jv);
function eE(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var tE = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
eE(tE);
class Pa extends k {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? Ui.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ i.createElement(nE, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
Pa.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const rE = (e) => /* @__PURE__ */ i.createElement(Pa, Object.assign({
  key: e.queryString
}, e)), nE = (e) => {
  let {
    overridableId: t,
    placeholder: r,
    queryString: n,
    querySuggestions: a,
    onInputChange: s,
    executeSearch: o,
    ...l
  } = e;
  const {
    buildUID: u
  } = T(x), c = (p, f) => {
    o();
  }, d = (p, f) => {
    p.key === "Enter" && o();
  };
  return /* @__PURE__ */ i.createElement(v, Object.assign({
    id: u("AutocompleteSearchBar.element", t)
  }, l), /* @__PURE__ */ i.createElement("div", {
    className: "AutoCompleteText"
  }, /* @__PURE__ */ i.createElement(kn, {
    action: {
      content: "Search",
      onClick: c
    },
    fluid: !0,
    placeholder: r,
    onChange: (p, f) => {
      let {
        value: h
      } = f;
      s(h);
    },
    value: n,
    onKeyPress: d
  }), /* @__PURE__ */ i.createElement(aE, {
    querySuggestions: a,
    overridableId: t
  })));
}, aE = (e) => {
  let {
    overridableId: t,
    ...r
  } = e;
  const {
    querySuggestions: n
  } = r, {
    buildUID: a
  } = T(x), s = async (o) => {
    await (void 0).setState({
      currentValue: o
    }), (void 0).clearSuggestions(), (void 0).executeSearch();
  };
  return n.length === 0 ? null : /* @__PURE__ */ i.createElement(v, Object.assign({
    id: a("AutocompleteSearchBar.suggestions", t)
  }, r), /* @__PURE__ */ i.createElement("ul", null, n.map((o) => /* @__PURE__ */ i.createElement(B, {
    as: "li",
    onClick: () => s(o),
    key: o
  }, o))));
};
var sE = v.component("AutocompleteSearchBar", rE);
const iE = (e) => ({
  updateQueryString: (t) => e(Ia(t)),
  updateSuggestions: (t) => e(Uv(t)),
  clearSuggestions: () => e(Bv())
}), oE = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
R(oE, iE)(sE);
class $t extends k {
  constructor(t) {
    super(t), this._isSelected = (r, n, a) => a.filter((s) => s[0] === r && s[1] === n).length >= 1, this.getChildAggCmps = (r, n) => {
      const a = this.childAgg && this.childAgg.aggName in r;
      let s = [];
      if (a) {
        const o = r[this.childAgg.aggName].buckets;
        n.forEach((u) => {
          const c = u[0] === this.aggName, d = u[1] === r.key, p = u.length === 3;
          c && d && p && s.push(u[2]);
        });
        const l = (u) => {
          this.onFilterClicked([this.aggName, r.key, u]);
        };
        return /* @__PURE__ */ i.createElement($t, {
          buckets: o,
          selectedFilters: s,
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
    } = this.props, a = t.map((s) => {
      const o = s.key_as_string ? s.key_as_string : s.key, l = this._isSelected(this.aggName, o, r), u = (d) => {
        this.onFilterClicked([this.aggName, d]);
      }, c = (d) => this.getChildAggCmps(d, r);
      return /* @__PURE__ */ i.createElement(ka, {
        key: s.key,
        bucket: s,
        keyField: o,
        isSelected: l,
        onFilterClicked: u,
        getChildAggCmps: c,
        overridableId: n
      });
    });
    return /* @__PURE__ */ i.createElement(Da, {
      valuesCmp: a,
      overridableId: n
    });
  }
}
$t.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const Da = (e) => {
  let {
    valuesCmp: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = T(x);
  return /* @__PURE__ */ i.createElement(v, {
    id: n("BucketAggregationContainer.element", r),
    valuesCmp: t
  }, /* @__PURE__ */ i.createElement($, null, t));
};
Da.defaultProps = {
  overridableId: ""
};
const ka = (e) => {
  let {
    bucket: t,
    isSelected: r,
    onFilterClicked: n,
    getChildAggCmps: a,
    overridableId: s,
    keyField: o
  } = e;
  const {
    buildUID: l,
    nextComponentIndex: u
  } = T(x), c = t.label ? t.label : `${o} (${t.doc_count.toLocaleString("en-US")})`, d = a(t);
  return /* @__PURE__ */ i.createElement(v, {
    id: l("BucketAggregationValues.element", s),
    bucket: t,
    label: c,
    onFilterClicked: n,
    isSelected: r,
    childAggCmps: d
  }, /* @__PURE__ */ i.createElement($.Item, {
    key: t.key
  }, /* @__PURE__ */ i.createElement(Ln, {
    label: c,
    id: u(),
    value: t.key,
    onClick: () => n(t.key),
    checked: r
  }), d));
};
ka.defaultProps = {
  overridableId: ""
};
var lE = v.component("BucketAggregationValues", $t);
class La extends k {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: a
      } = this.props;
      return /* @__PURE__ */ i.createElement(lE, {
        buckets: r,
        selectedFilters: n,
        field: this.agg.field,
        aggName: this.agg.aggName,
        childAgg: this.agg.childAgg,
        onFilterClicked: this.onFilterClicked,
        overridableId: a
      });
    }, this._getSelectedFilters = (r) => r.filter((n) => n[0] === this.agg.aggName), this._getResultBuckets = (r) => {
      const n = Oe(r, this.agg.aggName, {});
      return "buckets" in n ? (Array.isArray(n.buckets) || (n.buckets = Object.entries(n.buckets).map((a) => {
        let [s, o] = a;
        return {
          ...o,
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
      ...a
    } = this.props, s = this._getSelectedFilters(t), o = this._getResultBuckets(r), l = o.length ? this._renderValues(o, s) : null;
    return /* @__PURE__ */ i.createElement(Ua, Object.assign({
      title: this.title,
      containerCmp: l,
      overridableId: n
    }, a));
  }
}
La.defaultProps = {
  overridableId: ""
};
const Ua = (e) => {
  let {
    overridableId: t,
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: s
  } = e;
  const {
    buildUID: o
  } = T(x);
  return a && /* @__PURE__ */ i.createElement(v, {
    id: o("BucketAggregation.element", t),
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: s
  }, /* @__PURE__ */ i.createElement(D, null, /* @__PURE__ */ i.createElement(D.Content, null, /* @__PURE__ */ i.createElement(D.Header, null, n)), /* @__PURE__ */ i.createElement(D.Content, null, a)));
};
Ua.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var uE = v.component("BucketAggregation", La);
const cE = (e) => ({
  updateQueryFilters: (t) => e(vr(t))
});
R((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), cE)(uE);
class Na extends k {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
Na.defaultProps = {
  condition: !0
};
var Y = v.component("ShouldRender", Na);
class Ba extends k {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: a
    } = this.props;
    return /* @__PURE__ */ i.createElement(Y, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ i.createElement(za, {
      totalResults: r,
      overridableId: a
    })));
  }
}
Ba.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const za = (e) => {
  let {
    totalResults: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = T(x), a = n("Count.element", r);
  return /* @__PURE__ */ i.createElement(v, {
    id: a,
    totalResults: t
  }, /* @__PURE__ */ i.createElement(ae, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
za.defaultProps = {
  overridableId: ""
};
var dE = v.component("Count", Ba);
const pE = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(dE);
class Ma extends k {
  constructor(t) {
    super(t), this.resetQuery = t.resetQuery;
  }
  render() {
    const {
      loading: t,
      totalResults: r,
      error: n,
      queryString: a,
      extraContent: s,
      overridableId: o,
      userSelectionFilters: l,
      ...u
    } = this.props;
    return /* @__PURE__ */ i.createElement(Y, {
      condition: !t && re(n) && r === 0
    }, /* @__PURE__ */ i.createElement(Qa, Object.assign({}, u, {
      queryString: a,
      resetQuery: this.resetQuery,
      extraContent: s,
      userSelectionFilters: l,
      overridableId: o
    })));
  }
}
Ma.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const Qa = (e) => {
  let {
    overridableId: t,
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: s
  } = e;
  const {
    buildUID: o
  } = T(x);
  return /* @__PURE__ */ i.createElement(v, {
    id: o("EmptyResults.element", t),
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: s
  }, /* @__PURE__ */ i.createElement(K, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ i.createElement(fe, {
    icon: !0
  }, /* @__PURE__ */ i.createElement(S, {
    name: "search"
  }), "No results found!"), r && /* @__PURE__ */ i.createElement("em", null, 'Current search "', r, '"'), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement(B, {
    primary: !0,
    onClick: () => n()
  }, "Clear query"), a));
};
Qa.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var fE = v.component("EmptyResults", Ma);
const hE = (e) => ({
  resetQuery: () => e(Pv())
}), mE = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), hE)(fE);
function ja(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ i.createElement(Y, {
    condition: !t && !re(r)
  }, /* @__PURE__ */ i.createElement(qa, {
    error: r,
    overridableId: n
  }));
}
ja.defaultProps = {
  overridableId: ""
};
const qa = (e) => {
  let {
    error: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = T(x);
  return /* @__PURE__ */ i.createElement(v, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ i.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
qa.defaultProps = {
  overridableId: ""
};
var gE = v.component("Error", ja);
R((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(gE);
function Ga(e) {
  const t = (a) => /* @__PURE__ */ i.createElement(e, a);
  return R((a) => ({
    currentQueryState: a.query,
    currentResultsState: a.results
  }), (a) => ({
    updateQueryState: (s) => a(Aa(s))
  }))(t);
}
class Va extends k {
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
    return /* @__PURE__ */ i.createElement(Y, {
      condition: t !== null && !r && n > 0
    }, /* @__PURE__ */ i.createElement(Ha, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: a
    }));
  }
}
Va.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
const Ha = (e) => {
  let {
    overridableId: t,
    currentLayout: r,
    onLayoutChange: n
  } = e;
  const {
    buildUID: a
  } = T(x);
  return /* @__PURE__ */ i.createElement(v, {
    id: a("LayoutSwitcher.element", t),
    currentLayout: r,
    onLayoutChange: n
  }, /* @__PURE__ */ i.createElement(Pe, {
    compact: !0,
    icon: !0
  }, /* @__PURE__ */ i.createElement(Pe.Item, {
    name: "list",
    active: r === "list",
    onClick: (s, o) => {
      let {
        name: l
      } = o;
      return n(l);
    }
  }, /* @__PURE__ */ i.createElement(S, {
    name: "list layout"
  })), /* @__PURE__ */ i.createElement(Pe.Item, {
    name: "grid",
    active: r === "grid",
    onClick: (s, o) => {
      let {
        name: l
      } = o;
      return n(l);
    }
  }, /* @__PURE__ */ i.createElement(S, {
    name: "grid layout"
  }))));
};
Ha.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var yE = v.component("LayoutSwitcher", Va);
const vE = (e) => ({
  updateLayout: (t) => e(Rv(t))
});
R((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), vE)(yE);
const pn = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class Ka extends k {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...pn,
      ...t.options
    } : pn;
  }
  render() {
    const {
      loading: t,
      totalResults: r,
      currentPage: n,
      currentSize: a,
      overridableId: s,
      showWhenOnlyOnePage: o
    } = this.props;
    return /* @__PURE__ */ i.createElement(Y, {
      condition: !t && n > -1 && a > -1 && o ? r > 0 : r > a
    }, /* @__PURE__ */ i.createElement(Ya, {
      currentPage: n,
      currentSize: a,
      totalResults: r,
      onPageChange: this.onPageChange,
      options: this.options,
      overridableId: s,
      maxTotalResults: this.options.maxTotalResults
    }));
  }
}
Ka.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const Ya = (e) => {
  let {
    overridableId: t,
    currentPage: r,
    currentSize: n,
    totalResults: a,
    onPageChange: s,
    options: o,
    maxTotalResults: l,
    ...u
  } = e;
  const c = o.boundaryRangeCount, d = o.siblingRangeCount, p = o.showEllipsis, f = o.showFirst, h = o.showLast, y = o.showPrev, m = o.showNext, E = o.size, g = Math.floor(l / n), b = Math.ceil(a / n), A = Math.min(b, g), {
    buildUID: U
  } = T(x);
  return r > b && s(b), /* @__PURE__ */ i.createElement(v, {
    id: U("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: a,
    options: o,
    onPageChange: s
  }, /* @__PURE__ */ i.createElement(wi, Object.assign({
    activePage: r,
    totalPages: A,
    onPageChange: (X, I) => {
      let {
        activePage: ce
      } = I;
      return s(ce);
    },
    boundaryRange: c,
    siblingRange: d,
    ellipsisItem: p ? void 0 : null,
    firstItem: f ? void 0 : null,
    lastItem: h ? void 0 : null,
    prevItem: y ? void 0 : null,
    nextItem: m ? void 0 : null,
    size: E
  }, u)));
};
Ya.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var EE = v.component("Pagination", Ka);
const bE = (e) => ({
  updateQueryPage: (t) => e(Iv(t))
}), SE = R((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), bE)(EE);
function Wa(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    resultsPerRow: a,
    overridableId: s,
    onResultsRendered: o
  } = e;
  return Ue(() => {
    o && o();
  }, [o]), /* @__PURE__ */ i.createElement(Y, {
    condition: !t && r > 0
  }, /* @__PURE__ */ i.createElement(Za, {
    results: n,
    resultsPerRow: a,
    overridableId: s
  }));
}
Wa.defaultProps = {
  resultsPerRow: 3,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const $E = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = T(x);
  return /* @__PURE__ */ i.createElement(v, {
    id: n("ResultsGrid.item", r),
    result: t
  }, /* @__PURE__ */ i.createElement(D, {
    fluid: !0,
    href: `#${t.id}`
  }, /* @__PURE__ */ i.createElement(Fi, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ i.createElement(D.Content, null, /* @__PURE__ */ i.createElement(D.Header, null, t.title), /* @__PURE__ */ i.createElement(D.Description, null, t.description))));
}, Za = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: a
  } = T(x), s = r.map((o, l) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ i.createElement($E, {
      key: l,
      result: o,
      overridableId: t
    })
  ));
  return /* @__PURE__ */ i.createElement(v, {
    id: a("ResultsGrid.container", t),
    results: s,
    resultsPerRow: n
  }, /* @__PURE__ */ i.createElement(D.Group, {
    itemsPerRow: n
  }, s));
};
Za.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var _E = v.component("ResultsGrid", Wa);
const xE = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(_E);
function Ja(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return Ue(() => {
    s && s();
  }, [s]), /* @__PURE__ */ i.createElement(Y, {
    condition: !t && r > 0
  }, /* @__PURE__ */ i.createElement(Xa, {
    results: n,
    overridableId: a
  }));
}
Ja.defaultProps = {
  overridableId: "",
  onResultsRendered: () => {
  }
};
const CE = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = T(x);
  return /* @__PURE__ */ i.createElement(v, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ i.createElement(ye, {
    href: `#${t.id}`
  }, /* @__PURE__ */ i.createElement(ye.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ i.createElement(ye.Content, null, /* @__PURE__ */ i.createElement(ye.Header, null, t.title), /* @__PURE__ */ i.createElement(ye.Description, null, t.description))));
}, Xa = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = T(x), a = t.map((s, o) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ i.createElement(CE, {
      result: s,
      key: o,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ i.createElement(v, {
    id: n("ResultsList.container", r),
    results: a
  }, /* @__PURE__ */ i.createElement(ye.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, a));
};
Xa.defaultProps = {
  overridableId: ""
};
var wE = v.component("ResultsList", Ja);
const es = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(wE);
function ts(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ i.createElement(rs, {
    overridableId: n
  }) : t;
}
ts.defaultProps = {
  overridableId: ""
};
const rs = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = T(x);
  return /* @__PURE__ */ i.createElement(v, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ i.createElement(Un, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
rs.defaultProps = {
  overridableId: ""
};
var FE = v.component("ResultsLoader", ts);
const TE = R((e) => ({
  loading: e.results.loading
}))(FE);
function ns(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return /* @__PURE__ */ i.createElement(Y, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ i.createElement(as, {
    layout: n,
    overridableId: a,
    onResultsRendered: s
  }));
}
ns.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const as = (e) => {
  let {
    layout: t,
    overridableId: r,
    onResultsRendered: n
  } = e;
  const {
    buildUID: a
  } = T(x);
  return /* @__PURE__ */ i.createElement(v, {
    id: a("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ i.createElement(es, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ i.createElement(xE, {
    overridableId: r,
    onResultsRendered: n
  }));
};
as.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var AE = v.component("ResultsMultiLayout", ns);
R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(AE);
class ss extends k {
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
      overridableId: s,
      ariaLabel: o,
      selectOnNavigation: l,
      showWhenOnlyOnePage: u
    } = this.props;
    return /* @__PURE__ */ i.createElement(Y, {
      condition: !t && r !== -1 && u ? n > 0 : n > r
    }, a(/* @__PURE__ */ i.createElement(is, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
ss.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const is = (e) => {
  let {
    overridableId: t,
    currentSize: r,
    options: n,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: o
  } = e;
  const {
    buildUID: l
  } = T(x), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ i.createElement(v, {
    id: l("ResultsPerPage.element", t),
    currentSize: r,
    options: n,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: o
  }, /* @__PURE__ */ i.createElement(oe, {
    inline: !0,
    compact: !0,
    options: u,
    value: r,
    onChange: (c, d) => {
      let {
        value: p
      } = d;
      return a(p);
    },
    "aria-label": s,
    selectOnNavigation: o
  }));
};
is.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var IE = v.component("ResultsPerPage", ss);
const OE = (e) => ({
  updateQuerySize: (t) => e(Ov(t))
}), RE = R((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), OE)(IE);
class os extends k {
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
      onInputChange: s,
      onKeyPress: o,
      overridableId: l,
      placeholder: u,
      uiProps: c
    } = this.props, {
      currentValue: d
    } = this.state;
    return /* @__PURE__ */ i.createElement(Sr, {
      actionProps: t,
      autofocus: r,
      executeSearch: n || this.executeSearch,
      onBtnSearchClick: a || this.onBtnSearchClick,
      onInputChange: s || this.onInputChange,
      onKeyPress: o || this.onKeyPress,
      overridableId: l,
      placeholder: u,
      queryString: d,
      uiProps: c
    });
  }
}
os.defaultProps = {
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
const ls = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ i.createElement(os, Object.assign({
    key: t
  }, e));
};
ls.defaultProps = {
  queryString: ""
};
class Sr extends k {
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
      overridableId: s,
      placeholder: o,
      queryString: l,
      uiProps: u
    } = this.props, {
      buildUID: c
    } = this.context;
    return /* @__PURE__ */ i.createElement(v, {
      id: c("SearchBar.element", s),
      queryString: l,
      onBtnSearchClick: r,
      onInputChange: n,
      onKeyPress: a,
      placeholder: o,
      actionProps: t,
      uiProps: u
    }, /* @__PURE__ */ i.createElement(kn, Object.assign({
      action: {
        content: "Search",
        onClick: r,
        ...t
      },
      fluid: !0
    }, u, {
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
Sr.defaultProps = {
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
Sr.contextType = x;
var PE = v.component("SearchBar", ls);
const DE = (e) => ({
  updateQueryString: (t) => e(Ia(t))
}), kE = R((e) => ({
  queryString: e.query.queryString
}), DE)(PE);
class us extends k {
  constructor(t) {
    super(t), this._computeValue = (r, n) => n ? `${r}-${n}` : r, this.onChange = (r) => {
      const {
        currentSortBy: n,
        currentSortOrder: a
      } = this.props;
      if (r === this._computeValue(n, a))
        return;
      const s = this.options.find((o) => o.value === r);
      this.updateQuerySorting(s.sortBy, s.sortOrder);
    }, this.options = t.values, this.updateQuerySorting = t.updateQuerySorting, this.options.forEach((r) => r.value = this._computeValue(r.sortBy, r.sortOrder));
  }
  render() {
    const {
      currentSortBy: t,
      currentSortOrder: r,
      loading: n,
      totalResults: a,
      label: s,
      overridableId: o,
      sortOrderDisabled: l,
      ariaLabel: u,
      selectOnNavigation: c
    } = this.props;
    return /* @__PURE__ */ i.createElement(Y, {
      condition: t !== null && (l || t !== null) && !n && a > 0
    }, s(/* @__PURE__ */ i.createElement(cs, {
      currentSortBy: t,
      currentSortOrder: r,
      options: this.options,
      onValueChange: this.onChange,
      computeValue: this._computeValue,
      overridableId: o,
      ariaLabel: u,
      selectOnNavigation: c
    })));
  }
}
us.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const cs = (e) => {
  let {
    overridableId: t,
    currentSortBy: r,
    currentSortOrder: n,
    options: a,
    onValueChange: s,
    computeValue: o,
    ariaLabel: l,
    selectOnNavigation: u
  } = e;
  const {
    buildUID: c
  } = T(x), d = o(r, n), p = a.map((f, h) => ({
    key: h,
    text: f.text,
    value: f.value
  }));
  return /* @__PURE__ */ i.createElement(v, {
    id: c("Sort.element", t),
    options: a,
    currentSortBy: r,
    currentSortOrder: n,
    onValueChange: s,
    ariaLabel: l,
    selectOnNavigation: u
  }, /* @__PURE__ */ i.createElement(oe, {
    selection: !0,
    options: p,
    value: d,
    onChange: (f, h) => {
      let {
        value: y
      } = h;
      return s(y);
    },
    "aria-label": l,
    selectOnNavigation: u
  }));
};
cs.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var LE = v.component("Sort", us);
const UE = (e) => ({
  updateQuerySorting: (t, r) => e(Fv(t, r))
});
R((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), UE)(LE);
class ds extends k {
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
      overridableId: s,
      ariaLabel: o,
      selectOnNavigation: l
    } = this.props;
    return /* @__PURE__ */ i.createElement(Y, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ i.createElement(ps, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
ds.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const ps = (e) => {
  let {
    overridableId: t,
    currentSortBy: r,
    options: n,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: o
  } = e;
  const {
    buildUID: l
  } = T(x), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ i.createElement(v, {
    id: l("SortBy.element", t),
    options: n,
    currentSortBy: r,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: o
  }, /* @__PURE__ */ i.createElement(oe, {
    selection: !0,
    compact: !0,
    options: u,
    value: r,
    onChange: (c, d) => {
      let {
        value: p
      } = d;
      return a(p);
    },
    "aria-label": s,
    selectOnNavigation: o
  }));
};
ps.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var NE = v.component("SortBy", ds);
const BE = (e) => ({
  updateQuerySortBy: (t) => e(Tv(t))
});
R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), BE)(NE);
class fs extends k {
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
      overridableId: s,
      ariaLabel: o,
      selectOnNavigation: l
    } = this.props;
    return /* @__PURE__ */ i.createElement(Y, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ i.createElement(hs, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
fs.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const hs = (e) => {
  let {
    overridableId: t,
    currentSortOrder: r,
    options: n,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: o
  } = e;
  const {
    buildUID: l
  } = T(x), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ i.createElement(v, {
    id: l("SortOrder.element", t),
    options: n,
    currentSortOrder: r,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: o
  }, /* @__PURE__ */ i.createElement(oe, {
    selection: !0,
    compact: !0,
    options: u,
    value: r,
    onChange: (c, d) => {
      let {
        value: p
      } = d;
      return a(p);
    },
    "aria-label": s,
    selectOnNavigation: o
  }));
};
hs.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var zE = v.component("SortOrder", fs);
const ME = (e) => ({
  updateQuerySortOrder: (t) => e(Av(t))
});
R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), ME)(zE);
const ms = (e) => {
  let {
    overridableId: t,
    userSelectionFilters: r,
    title: n,
    label: a,
    filterValue: s,
    updateQueryFilters: o
  } = e;
  const l = (p) => p.filter((h) => h[0] === s[0]).length > 0, u = () => {
    o(s);
  }, {
    buildUID: c
  } = T(x), d = l(r);
  return /* @__PURE__ */ i.createElement(v, {
    id: c("SearchFilters.Toggle.element", t),
    title: n,
    label: a,
    filterValue: s,
    userSelectionFilters: r,
    updateQueryFilters: o
  }, /* @__PURE__ */ i.createElement(D, null, /* @__PURE__ */ i.createElement(D.Content, null, /* @__PURE__ */ i.createElement(D.Header, null, n)), /* @__PURE__ */ i.createElement(D.Content, null, /* @__PURE__ */ i.createElement(Ln, {
    toggle: !0,
    label: a,
    onClick: u,
    checked: d
  }))));
};
ms.defaultProps = {
  overridableId: ""
};
var QE = v.component("SearchFilters.Toggle", ms);
const jE = (e) => ({
  updateQueryFilters: (t) => e(vr(t))
});
R((e) => ({
  userSelectionFilters: e.query.filters
}), jE)(QE);
const gs = i.createContext(
  null
), qE = ({ config: e, children: t, updateQueryState: r, currentQueryState: n }) => {
  const a = O(() => {
    r({
      ...n,
      queryString: n.queryString
    });
  }, [r, n]);
  return /* @__PURE__ */ i.createElement(gs.Provider, { value: { config: e, refreshSearch: a } }, t);
}, GE = Ga(qE), _t = () => {
  const e = i.useContext(gs);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
}, ys = ({ progress: e }) => /* @__PURE__ */ i.createElement(Wt, null, Object.entries(e).map(([t, r]) => /* @__PURE__ */ i.createElement(K.Inline, { basic: !0, key: t }, /* @__PURE__ */ i.createElement(
  S,
  {
    name: "spinner",
    loading: !0,
    style: {
      marginInlineEnd: "0.5rem"
    }
  }
), /* @__PURE__ */ i.createElement("strong", null, t, ":"), " ", r, "%"))), vs = () => /* @__PURE__ */ i.createElement(K, { basic: !0, padded: "very" }, /* @__PURE__ */ i.createElement(Ti, { active: !0, inverted: !0 }, /* @__PURE__ */ i.createElement(Un, { inverted: !0 }, "Loading"))), VE = ({ status: e, ...t }) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ i.createElement(S, { name: "close", color: "red", ...t }) : e === "success" || e === "created" ? /* @__PURE__ */ i.createElement(S, { name: "check circle", color: "green", ...t }) : e === "importing" || e === "validating" ? /* @__PURE__ */ i.createElement(S, { name: "spinner", loading: !0, ...t }) : e === "validated" ? /* @__PURE__ */ i.createElement(S, { name: "check circle", color: "blue", ...t }) : /* @__PURE__ */ i.createElement(S, { ...t }), Es = ({
  status: e,
  children: t,
  ...r
}) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ i.createElement(ae, { color: "red", ...r }, /* @__PURE__ */ i.createElement(S, { name: "warning sign" }), t) : e === "success" || e === "validated" || e === "created" ? /* @__PURE__ */ i.createElement(ae, { color: "green", ...r }, /* @__PURE__ */ i.createElement(S, { name: "check circle" }), t) : e === "importing" || e === "validating" ? /* @__PURE__ */ i.createElement(ae, { color: "blue", ...r }, /* @__PURE__ */ i.createElement(S, { name: "spinner", loading: !0 }), t) : /* @__PURE__ */ i.createElement(ae, { ...r }, t), De = (e) => (e == null ? void 0 : e.charAt(0).toUpperCase()) + (e == null ? void 0 : e.slice(1)) || "", bs = (e) => e.reduce((t, r) => t + r.file.size, 0), Ss = (e) => $r(bs(e)), $r = (e) => {
  if (e === 0)
    return "0 Bytes";
  const t = 1024, r = ["Bytes", "KB", "MB", "GB"], n = Math.floor(Math.log(e) / Math.log(t));
  return `${Number.parseFloat((e / t ** n).toFixed(2))} ${r[n]}`;
}, Bt = (e) => new Date(e).toLocaleString(void 0, {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit"
});
var $s = { exports: {} };
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
      var a = window.Cookies, s = window.Cookies = r();
      s.noConflict = function() {
        return window.Cookies = a, s;
      };
    }
  })(function() {
    function r() {
      for (var s = 0, o = {}; s < arguments.length; s++) {
        var l = arguments[s];
        for (var u in l)
          o[u] = l[u];
      }
      return o;
    }
    function n(s) {
      return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    function a(s) {
      function o() {
      }
      function l(c, d, p) {
        if (!(typeof document > "u")) {
          p = r({
            path: "/"
          }, o.defaults, p), typeof p.expires == "number" && (p.expires = new Date(/* @__PURE__ */ new Date() * 1 + p.expires * 864e5)), p.expires = p.expires ? p.expires.toUTCString() : "";
          try {
            var f = JSON.stringify(d);
            /^[\{\[]/.test(f) && (d = f);
          } catch {
          }
          d = s.write ? s.write(d, c) : encodeURIComponent(String(d)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), c = encodeURIComponent(String(c)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var h = "";
          for (var y in p)
            p[y] && (h += "; " + y, p[y] !== !0 && (h += "=" + p[y].split(";")[0]));
          return document.cookie = c + "=" + d + h;
        }
      }
      function u(c, d) {
        if (!(typeof document > "u")) {
          for (var p = {}, f = document.cookie ? document.cookie.split("; ") : [], h = 0; h < f.length; h++) {
            var y = f[h].split("="), m = y.slice(1).join("=");
            !d && m.charAt(0) === '"' && (m = m.slice(1, -1));
            try {
              var E = n(y[0]);
              if (m = (s.read || s)(m, E) || n(m), d)
                try {
                  m = JSON.parse(m);
                } catch {
                }
              if (p[E] = m, c === E)
                break;
            } catch {
            }
          }
          return c ? p[c] : p;
        }
      }
      return o.set = l, o.get = function(c) {
        return u(
          c,
          !1
          /* read as raw */
        );
      }, o.getJSON = function(c) {
        return u(
          c,
          !0
          /* read as json */
        );
      }, o.remove = function(c, d) {
        l(c, "", r(d, {
          expires: -1
        }));
      }, o.defaults = {}, o.withConverter = a, o;
    }
    return a(function() {
    });
  });
})($s);
var HE = $s.exports;
const KE = /* @__PURE__ */ P(HE), YE = () => KE.get("csrftoken") || null, WE = (e) => {
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
}, ox = (e) => new ya(e), lx = (e, t = {}, r = !0) => ({
  axios: {
    url: e,
    headers: {
      Accept: "application/vnd.inveniordm.v1+json",
      ...t
    },
    withCredentials: r
  }
}), q = We.create({
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
    const t = YE();
    return t && (e.headers["X-CSRFTOKEN"] = t), e;
  },
  (e) => Promise.reject(e)
);
const _s = async (e, t) => {
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
}, ZE = async (e, t) => {
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
}, JE = async (e) => {
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
}, XE = async (e) => {
  try {
    const t = await q.delete(`/api/importer-tasks/${e}`);
    return t.status === 204 ? !0 : (console.error(`Failed to delete task: ${t.statusText}`), !1);
  } catch (t) {
    return console.error(
      `Error deleting task: ${t instanceof Error ? t.message : "Unknown error"}`
    ), !1;
  }
}, xs = async (e) => {
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
}, eb = async () => {
  try {
    const e = await q.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, tb = async (e) => {
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
}, ke = async (e) => {
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
}, rb = async (e, t) => {
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
}, nb = async (e, t, r) => {
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
}, Cs = async (e) => {
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
}, ws = async (e, t = {}) => {
  const { autoExecute: r = !1, onProgress: n, onError: a } = t;
  try {
    n == null || n("Validating", 0), await Cs(e), n == null || n("Validating", 50);
    let s = await ke(e);
    return n == null || n("Validating", 100), r && (s.status === "validated" || s.status === "validated with failures") && (n == null || n("Executing", 0), await xs(e), n == null || n("Executing", 50), s = await ke(e), n == null || n("Executing", 100)), s;
  } catch (s) {
    const o = s instanceof Error ? s : new Error("Unknown error during workflow execution");
    throw a == null || a(o, "Executing"), o;
  }
}, Fs = async (e, t, r) => {
  if (!t || t.length === 0)
    return;
  const n = t.map((a) => a.name);
  await rb(e, n);
  for (const a of t)
    try {
      r == null || r({
        fileName: a.name,
        loaded: 0,
        total: a.size,
        percentage: 0
      }), await nb(e, a.name, a), r == null || r({
        fileName: a.name,
        loaded: a.size,
        total: a.size,
        percentage: 90
      }), await ZE(e, a.name), r == null || r({
        fileName: a.name,
        loaded: a.size,
        total: a.size,
        percentage: 100
      });
    } catch (s) {
      throw new Error(
        `Failed to upload file ${a.name}: ${s instanceof Error ? s.message : "Unknown error"}`
      );
    }
}, ab = async (e, t, r, n = {}) => {
  const {
    autoValidate: a = !1,
    autoExecute: s = !1,
    onProgress: o,
    onError: l
  } = n;
  try {
    o == null || o("Creating Task", 0);
    const u = await JE(e);
    if (!u)
      throw new Error("Failed to create import task");
    return o == null || o("Creating Task", 100), t && (o == null || o("Uploading Metadata", 0), await _s(u.id, t), o == null || o("Uploading Metadata", 100)), r && r.length > 0 && await Fs(u.id, r, (c) => {
      o == null || o("Uploading Files", c.percentage);
    }), a && t && await ws(u.id, {
      autoExecute: s,
      onProgress: o,
      onError: l
    }), u;
  } catch (u) {
    const c = u instanceof Error ? u : new Error("Unknown error during task creation");
    throw l == null || l(c, "Creating Task"), c;
  }
}, sb = async (e, t, r, n = {}) => {
  const { onProgress: a, onError: s } = n;
  try {
    a == null || a("Updating", 0), t && (a == null || a("Updating Metadata", 0), await _s(e, t), a == null || a("Updating Metadata", 100)), r && r.length > 0 && await Fs(e, r, (o) => {
      a == null || a("Updating Files", o.percentage);
    }), a == null || a("Updating", 100);
  } catch (o) {
    const l = o instanceof Error ? o : new Error("Unknown error during task update");
    throw s == null || s(l, "Updating"), l;
  }
}, ib = async (e) => {
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
}, Ts = (e, t = {}) => {
  const [r, n] = L({
    isDeleting: !1,
    isValidating: !1,
    isBulkImporting: !1,
    isGettingStatus: !1,
    error: null
  }), {
    onDeleteSuccess: a,
    onDeleteError: s,
    onValidateSuccess: o,
    onValidateError: l,
    onBulkImportSuccess: u,
    onBulkImportError: c,
    onStatusChangeSuccess: d,
    onStatusChangeError: p
  } = t, f = O(() => {
    n((g) => ({ ...g, error: null }));
  }, []), h = O(async () => {
    n((g) => ({ ...g, isDeleting: !0, error: null }));
    try {
      if (!await XE(e))
        throw new Error(`Failed to delete task ${e}`);
      a == null || a();
    } catch (g) {
      const b = g instanceof Error ? g : new Error("Unknown error");
      throw n((A) => ({ ...A, error: b })), s == null || s(b), b;
    } finally {
      n((g) => ({ ...g, isDeleting: !1 }));
    }
  }, [e, a, s]), y = O(async () => {
    n((g) => ({ ...g, isValidating: !0, error: null }));
    try {
      const g = await Cs(e);
      if (!g)
        throw new Error(`Validation failed for task ${e}`);
      return o == null || o(g), await ke(e), g;
    } catch (g) {
      const b = g instanceof Error ? g : new Error("Unknown error");
      throw n((A) => ({ ...A, error: b })), l == null || l(b), b;
    } finally {
      n((g) => ({ ...g, isValidating: !1 }));
    }
  }, [e, o, l]), m = O(async () => {
    n((g) => ({ ...g, isBulkImporting: !0, error: null }));
    try {
      const g = await xs(e);
      if (!g)
        throw new Error(`Failed to execute bulk import for task ${e}`);
      return u == null || u(g), await ke(e), g;
    } catch (g) {
      const b = g instanceof Error ? g : new Error("Unknown error");
      throw n((A) => ({ ...A, error: b })), c == null || c(b), b;
    } finally {
      n((g) => ({ ...g, isBulkImporting: !1 }));
    }
  }, [e, u, c]), E = O(async () => {
    n((g) => ({ ...g, isGettingStatus: !0, error: null }));
    try {
      const g = await ke(e);
      if (!g)
        throw new Error(`Failed to retrieve status for task ${e}`);
      return n((b) => ({ ...b, error: null })), d == null || d(g), g;
    } catch (g) {
      const b = g instanceof Error ? g : new Error("Unknown error");
      throw n((A) => ({ ...A, error: b })), p == null || p(b), b;
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
}, ob = ({ result: e, index: t }) => {
  var y;
  const { config: r, refreshSearch: n } = _t(), {
    deleteTask: a,
    runBulkImport: s,
    getStatus: o,
    isDeleting: l,
    isValidating: u,
    isBulkImporting: c,
    isGettingStatus: d,
    error: p,
    clearError: f
  } = Ts(e.id, {
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
  const h = l || u || c || d;
  return /* @__PURE__ */ i.createElement(lt, { key: t }, /* @__PURE__ */ i.createElement(V, null, /* @__PURE__ */ i.createElement("a", { href: `${r.resultPath}/${e.id}` }, e.title || "No title")), /* @__PURE__ */ i.createElement(V, null, Bt(e.created)), /* @__PURE__ */ i.createElement(V, null, /* @__PURE__ */ i.createElement(Es, { status: e.status }, De(e.status))), /* @__PURE__ */ i.createElement(V, null, /* @__PURE__ */ i.createElement(ae, null, De(e.record_type))), /* @__PURE__ */ i.createElement(V, null, ((y = e.records_status) == null ? void 0 : y.total_records) ?? 0), /* @__PURE__ */ i.createElement(V, null, e.serializer), /* @__PURE__ */ i.createElement(V, null, De(e.mode)), /* @__PURE__ */ i.createElement(V, { style: { width: "220px" } }, p && /* @__PURE__ */ i.createElement("div", { style: { color: "red", fontSize: "12px", marginBottom: "5px" } }, p.message, /* @__PURE__ */ i.createElement(
    B,
    {
      onClick: f,
      style: { marginLeft: "5px", fontSize: "10px" }
    },
    "Clear"
  )), /* @__PURE__ */ i.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ i.createElement(
    oe,
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
          onClick: () => s()
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
  ), /* @__PURE__ */ i.createElement(
    B,
    {
      basic: !0,
      size: "tiny",
      disabled: h,
      as: "a",
      href: `${r.resultPath}/${e.id}`
    },
    /* @__PURE__ */ i.createElement(S, { name: "eye" }),
    "View"
  ))));
}, lb = ({ children: e }) => /* @__PURE__ */ i.createElement(w, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(H, null, "Title"), /* @__PURE__ */ i.createElement(H, null, "Date Created"), /* @__PURE__ */ i.createElement(H, null, "Status"), /* @__PURE__ */ i.createElement(H, null, "Type"), /* @__PURE__ */ i.createElement(H, null, "Items"), /* @__PURE__ */ i.createElement(H, null, "Serializer"), /* @__PURE__ */ i.createElement(H, null, "Mode"), /* @__PURE__ */ i.createElement(H, null, "Actions"))), /* @__PURE__ */ i.createElement(Bn, null, e)), ne = {
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
}, ub = () => {
  const [e, t] = L(
    {}
  ), [r, n] = L(!0), { values: a, submitForm: s, isSubmitting: o, isValid: l, setFieldValue: u } = Mi(), c = O(async () => {
    try {
      const f = await eb(), h = {};
      for (const y of f) {
        const m = await tb(y);
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
    u("metadata", h);
  }, p = (f) => {
    u("files", f);
  };
  return Ue(() => {
    c();
  }, [c]), {
    configs: e,
    isLoading: r,
    values: a,
    submitForm: s,
    setFieldValue: u,
    handleFileChange: d,
    handleFilesChange: p,
    isSubmitting: o,
    isValid: l
  };
}, cb = ({ progress: e }) => {
  const {
    configs: t,
    isLoading: r,
    submitForm: n,
    handleFileChange: a,
    handleFilesChange: s,
    values: o,
    isSubmitting: l,
    isValid: u
  } = ub();
  return r ? /* @__PURE__ */ i.createElement(vs, null) : !t || Object.keys(t).length === 0 ? /* @__PURE__ */ i.createElement("p", null, "No record types available.") : /* @__PURE__ */ i.createElement(Wt, null, /* @__PURE__ */ i.createElement(
    Ni,
    {
      fieldPath: "task.title",
      label: "Title",
      placeholder: "Enter a title for the import task",
      required: !0
    }
  ), /* @__PURE__ */ i.createElement(be.Group, { widths: "equal" }, /* @__PURE__ */ i.createElement(
    Ft,
    {
      fieldPath: "task.recordType",
      label: "Record Type",
      options: Object.keys(t).map((c) => ({
        key: c,
        value: c,
        text: c
      })),
      placeholder: "Select Record Type",
      required: !0
    }
  ), /* @__PURE__ */ i.createElement(
    Ft,
    {
      fieldPath: "task.serializer",
      label: "Serializer",
      options: o.task.recordType && t[o.task.recordType] ? t[o.task.recordType].serializers.map((c) => ({
        key: c,
        value: c,
        text: c
      })) : [],
      placeholder: "Select Serializer",
      disabled: !o.task.recordType,
      required: !0
    }
  ), /* @__PURE__ */ i.createElement(
    Ft,
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
  )), /* @__PURE__ */ i.createElement(be.Field, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "file-input" }, "Metadata File"), /* @__PURE__ */ i.createElement(
    "input",
    {
      id: "file-input",
      type: "file",
      accept: ".csv",
      onChange: a,
      style: { marginTop: "8px" }
    }
  ), o.metadata && /* @__PURE__ */ i.createElement("p", { style: { marginTop: "8px", fontSize: "12px", color: "#666" } }, "Selected: ", o.metadata.name), /* @__PURE__ */ i.createElement("p", { style: { marginTop: "8px", fontSize: "12px", color: "#666" } }, "Upload a CSV file containing the records metadata to be imported or deleted.")), /* @__PURE__ */ i.createElement(be.Field, null, /* @__PURE__ */ i.createElement(
    vi,
    {
      value: o.files || [],
      onChange: s,
      accept: "*",
      skipEmptyFiles: !0,
      maxTotalSize: 10 * 1024 * 1024 * 1024,
      maxFiles: 100
    }
  ), /* @__PURE__ */ i.createElement("p", { style: { marginTop: "8px", fontSize: "12px", color: "#666" } }, "Upload files related to the records. You can upload multiple files, and they will be associated with the import task.")), /* @__PURE__ */ i.createElement(
    Bi,
    {
      fieldPath: "task.description",
      label: "Notes",
      placeholder: "Enter a description for the import task",
      rows: 3
    }
  ), /* @__PURE__ */ i.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: ".5rem"
      }
    },
    e && /* @__PURE__ */ i.createElement(ys, { progress: e }),
    /* @__PURE__ */ i.createElement(
      B,
      {
        type: "button",
        primary: !0,
        onClick: n,
        disabled: !u || l,
        loading: l
      },
      "Submit"
    )
  ));
};
var zt;
try {
  zt = Map;
} catch {
}
var Mt;
try {
  Mt = Set;
} catch {
}
function As(e, t, r) {
  if (!e || typeof e != "object" || typeof e == "function")
    return e;
  if (e.nodeType && "cloneNode" in e)
    return e.cloneNode(!0);
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof RegExp)
    return new RegExp(e);
  if (Array.isArray(e))
    return e.map(Qt);
  if (zt && e instanceof zt)
    return new Map(Array.from(e.entries()));
  if (Mt && e instanceof Mt)
    return new Set(Array.from(e.values()));
  if (e instanceof Object) {
    t.push(e);
    var n = Object.create(e);
    r.push(n);
    for (var a in e) {
      var s = t.findIndex(function(o) {
        return o === e[a];
      });
      n[a] = s > -1 ? r[s] : As(e[a], t, r);
    }
    return n;
  }
  return e;
}
function Qt(e) {
  return As(e, [], []);
}
const db = Object.prototype.toString, pb = Error.prototype.toString, fb = RegExp.prototype.toString, hb = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", mb = /^Symbol\((.*)\)(.*)$/;
function gb(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function fn(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return gb(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return hb.call(e).replace(mb, "Symbol($1)");
  const n = db.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + pb.call(e) + "]" : n === "RegExp" ? fb.call(e) : null;
}
function Le(e, t) {
  let r = fn(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = fn(this[n], t);
    return s !== null ? s : a;
  }, 2);
}
let pe = {
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
    let a = n != null && n !== r, s = `${e} must be a \`${t}\` type, but the final value was: \`${Le(r, !0)}\`` + (a ? ` (cast from the value \`${Le(n, !0)}\`).` : ".");
    return r === null && (s += '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'), s;
  },
  defined: "${path} must be defined"
}, W = {
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
}, yb = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, jt = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, vb = {
  isValue: "${path} field must be ${value}"
}, qt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, Eb = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: pe,
  string: W,
  number: yb,
  date: jt,
  object: qt,
  array: Eb,
  boolean: vb
});
var bb = Object.prototype, Sb = bb.hasOwnProperty;
function $b(e, t) {
  return e != null && Sb.call(e, t);
}
var _b = $b, xb = _b, Cb = Jn;
function wb(e, t) {
  return e != null && Cb(e, t, xb);
}
var Fb = wb;
const at = /* @__PURE__ */ P(Fb), Is = (e) => e && e.__isYupSchema__;
class Tb {
  constructor(t, r) {
    if (this.fn = void 0, this.refs = t, this.refs = t, typeof r == "function") {
      this.fn = r;
      return;
    }
    if (!at(r, "is"))
      throw new TypeError("`is:` is required for `when()` conditions");
    if (!r.then && !r.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: a,
      otherwise: s
    } = r, o = typeof n == "function" ? n : (...l) => l.every((u) => u === n);
    this.fn = function(...l) {
      let u = l.pop(), c = l.pop(), d = o(...l) ? a : s;
      if (d)
        return typeof d == "function" ? d(c) : c.concat(d.resolve(u));
    };
  }
  resolve(t, r) {
    let n = this.refs.map((s) => s.getValue(r == null ? void 0 : r.value, r == null ? void 0 : r.parent, r == null ? void 0 : r.context)), a = this.fn.apply(t, n.concat(t, r));
    if (a === void 0 || a === t)
      return t;
    if (!Is(a))
      throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
function Os(e) {
  return e == null ? [] : [].concat(e);
}
function Gt() {
  return Gt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gt.apply(this, arguments);
}
let Ab = /\$\{\s*(\w+)\s*\}/g;
class Q extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Gt({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(Ab, (a, s) => Le(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], Os(t).forEach((s) => {
      Q.isError(s) ? (this.errors.push(...s.errors), this.inner = this.inner.concat(s.inner.length ? s.inner : s)) : this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, Q);
  }
}
const Ib = (e) => {
  let t = !1;
  return (...r) => {
    t || (t = !0, e(...r));
  };
};
function Vt(e, t) {
  let {
    endEarly: r,
    tests: n,
    args: a,
    value: s,
    errors: o,
    sort: l,
    path: u
  } = e, c = Ib(t), d = n.length;
  const p = [];
  if (o = o || [], !d)
    return o.length ? c(new Q(o, s, u)) : c(null, s);
  for (let f = 0; f < n.length; f++) {
    const h = n[f];
    h(a, function(m) {
      if (m) {
        if (!Q.isError(m))
          return c(m, s);
        if (r)
          return m.value = s, c(m, s);
        p.push(m);
      }
      if (--d <= 0) {
        if (p.length && (l && p.sort(l), o.length && p.push(...o), o = p), o.length) {
          c(new Q(o, s, u), s);
          return;
        }
        c(null, s);
      }
    });
  }
}
function Ob(e) {
  return function(t, r, n) {
    for (var a = -1, s = Object(t), o = n(t), l = o.length; l--; ) {
      var u = o[e ? l : ++a];
      if (r(s[u], u, s) === !1)
        break;
    }
    return t;
  };
}
var Rb = Ob, Pb = Rb, Db = Pb(), kb = Db, Lb = kb, Ub = Qe;
function Nb(e, t) {
  return e && Lb(e, t, Ub);
}
var Rs = Nb, Bb = "__lodash_hash_undefined__";
function zb(e) {
  return this.__data__.set(e, Bb), this;
}
var Mb = zb;
function Qb(e) {
  return this.__data__.has(e);
}
var jb = Qb, qb = ar, Gb = Mb, Vb = jb;
function st(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new qb(); ++t < r; )
    this.add(e[t]);
}
st.prototype.add = st.prototype.push = Gb;
st.prototype.has = Vb;
var Hb = st;
function Kb(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Yb = Kb;
function Wb(e, t) {
  return e.has(t);
}
var Zb = Wb, Jb = Hb, Xb = Yb, e0 = Zb, t0 = 1, r0 = 2;
function n0(e, t, r, n, a, s) {
  var o = r & t0, l = e.length, u = t.length;
  if (l != u && !(o && u > l))
    return !1;
  var c = s.get(e), d = s.get(t);
  if (c && d)
    return c == t && d == e;
  var p = -1, f = !0, h = r & r0 ? new Jb() : void 0;
  for (s.set(e, t), s.set(t, e); ++p < l; ) {
    var y = e[p], m = t[p];
    if (n)
      var E = o ? n(m, y, p, t, e, s) : n(y, m, p, e, t, s);
    if (E !== void 0) {
      if (E)
        continue;
      f = !1;
      break;
    }
    if (h) {
      if (!Xb(t, function(g, b) {
        if (!e0(h, b) && (y === g || a(y, g, r, n, s)))
          return h.push(b);
      })) {
        f = !1;
        break;
      }
    } else if (!(y === m || a(y, m, r, n, s))) {
      f = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), f;
}
var Ps = n0;
function a0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var s0 = a0;
function i0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var o0 = i0, hn = _e, mn = ua, l0 = ht, u0 = Ps, c0 = s0, d0 = o0, p0 = 1, f0 = 2, h0 = "[object Boolean]", m0 = "[object Date]", g0 = "[object Error]", y0 = "[object Map]", v0 = "[object Number]", E0 = "[object RegExp]", b0 = "[object Set]", S0 = "[object String]", $0 = "[object Symbol]", _0 = "[object ArrayBuffer]", x0 = "[object DataView]", gn = hn ? hn.prototype : void 0, It = gn ? gn.valueOf : void 0;
function C0(e, t, r, n, a, s, o) {
  switch (r) {
    case x0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case _0:
      return !(e.byteLength != t.byteLength || !s(new mn(e), new mn(t)));
    case h0:
    case m0:
    case v0:
      return l0(+e, +t);
    case g0:
      return e.name == t.name && e.message == t.message;
    case E0:
    case S0:
      return e == t + "";
    case y0:
      var l = c0;
    case b0:
      var u = n & p0;
      if (l || (l = d0), e.size != t.size && !u)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      n |= f0, o.set(e, t);
      var d = u0(l(e), l(t), n, a, s, o);
      return o.delete(e), d;
    case $0:
      if (It)
        return It.call(e) == It.call(t);
  }
  return !1;
}
var w0 = C0, yn = la, F0 = 1, T0 = Object.prototype, A0 = T0.hasOwnProperty;
function I0(e, t, r, n, a, s) {
  var o = r & F0, l = yn(e), u = l.length, c = yn(t), d = c.length;
  if (u != d && !o)
    return !1;
  for (var p = u; p--; ) {
    var f = l[p];
    if (!(o ? f in t : A0.call(t, f)))
      return !1;
  }
  var h = s.get(e), y = s.get(t);
  if (h && y)
    return h == t && y == e;
  var m = !0;
  s.set(e, t), s.set(t, e);
  for (var E = o; ++p < u; ) {
    f = l[p];
    var g = e[f], b = t[f];
    if (n)
      var A = o ? n(b, g, f, t, e, s) : n(g, b, f, e, t, s);
    if (!(A === void 0 ? g === b || a(g, b, r, n, s) : A)) {
      m = !1;
      break;
    }
    E || (E = f == "constructor");
  }
  if (m && !E) {
    var U = e.constructor, X = t.constructor;
    U != X && "constructor" in e && "constructor" in t && !(typeof U == "function" && U instanceof U && typeof X == "function" && X instanceof X) && (m = !1);
  }
  return s.delete(e), s.delete(t), m;
}
var O0 = I0, Ot = dr, R0 = Ps, P0 = w0, D0 = O0, vn = Ne, En = j, bn = pt, k0 = tr, L0 = 1, Sn = "[object Arguments]", $n = "[object Array]", He = "[object Object]", U0 = Object.prototype, _n = U0.hasOwnProperty;
function N0(e, t, r, n, a, s) {
  var o = En(e), l = En(t), u = o ? $n : vn(e), c = l ? $n : vn(t);
  u = u == Sn ? He : u, c = c == Sn ? He : c;
  var d = u == He, p = c == He, f = u == c;
  if (f && bn(e)) {
    if (!bn(t))
      return !1;
    o = !0, d = !1;
  }
  if (f && !d)
    return s || (s = new Ot()), o || k0(e) ? R0(e, t, r, n, a, s) : P0(e, t, u, r, n, a, s);
  if (!(r & L0)) {
    var h = d && _n.call(e, "__wrapped__"), y = p && _n.call(t, "__wrapped__");
    if (h || y) {
      var m = h ? e.value() : e, E = y ? t.value() : t;
      return s || (s = new Ot()), a(m, E, r, n, s);
    }
  }
  return f ? (s || (s = new Ot()), D0(e, t, r, n, a, s)) : !1;
}
var B0 = N0, z0 = B0, xn = te;
function Ds(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !xn(e) && !xn(t) ? e !== e && t !== t : z0(e, t, r, n, Ds, a);
}
var ks = Ds, M0 = dr, Q0 = ks, j0 = 1, q0 = 2;
function G0(e, t, r, n) {
  var a = r.length, s = a, o = !n;
  if (e == null)
    return !s;
  for (e = Object(e); a--; ) {
    var l = r[a];
    if (o && l[2] ? l[1] !== e[l[0]] : !(l[0] in e))
      return !1;
  }
  for (; ++a < s; ) {
    l = r[a];
    var u = l[0], c = e[u], d = l[1];
    if (o && l[2]) {
      if (c === void 0 && !(u in e))
        return !1;
    } else {
      var p = new M0();
      if (n)
        var f = n(c, d, u, e, t, p);
      if (!(f === void 0 ? Q0(d, c, j0 | q0, n, p) : f))
        return !1;
    }
  }
  return !0;
}
var V0 = G0, H0 = se;
function K0(e) {
  return e === e && !H0(e);
}
var Ls = K0, Y0 = Ls, W0 = Qe;
function Z0(e) {
  for (var t = W0(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, Y0(a)];
  }
  return t;
}
var J0 = Z0;
function X0(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Us = X0, eS = V0, tS = J0, rS = Us;
function nS(e) {
  var t = tS(e);
  return t.length == 1 && t[0][2] ? rS(t[0][0], t[0][1]) : function(r) {
    return r === e || eS(r, e, t);
  };
}
var aS = nS, sS = ks, iS = Zn, oS = or, lS = nr, uS = Ls, cS = Us, dS = ze, pS = 1, fS = 2;
function hS(e, t) {
  return lS(e) && uS(t) ? cS(dS(e), t) : function(r) {
    var n = iS(r, e);
    return n === void 0 && n === t ? oS(r, e) : sS(t, n, pS | fS);
  };
}
var mS = hS;
function gS(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var yS = gS, vS = ir;
function ES(e) {
  return function(t) {
    return vS(t, e);
  };
}
var bS = ES, SS = yS, $S = bS, _S = nr, xS = ze;
function CS(e) {
  return _S(e) ? SS(xS(e)) : $S(e);
}
var wS = CS, FS = aS, TS = mS, AS = ur, IS = j, OS = wS;
function RS(e) {
  return typeof e == "function" ? e : e == null ? AS : typeof e == "object" ? IS(e) ? TS(e[0], e[1]) : FS(e) : OS(e);
}
var Ns = RS, PS = bt, DS = Rs, kS = Ns;
function LS(e, t) {
  var r = {};
  return t = kS(t), DS(e, function(n, a, s) {
    PS(r, a, t(n, a, s));
  }), r;
}
var US = LS;
const Bs = /* @__PURE__ */ P(US);
function me(e) {
  this._maxSize = e, this.clear();
}
me.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
me.prototype.get = function(e) {
  return this._values[e];
};
me.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var NS = /[^.^\]^[]+|(?=\[\]|\.\.)/g, zs = /^\d+$/, BS = /^\d/, zS = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, MS = /^\s*(['"]?)(.*?)(\1)\s*$/, _r = 512, Cn = new me(_r), wn = new me(_r), Fn = new me(_r), xt = {
  Cache: me,
  split: Ht,
  normalizePath: Rt,
  setter: function(e) {
    var t = Rt(e);
    return wn.get(e) || wn.set(e, function(n, a) {
      for (var s = 0, o = t.length, l = n; s < o - 1; ) {
        var u = t[s];
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return n;
        l = l[t[s++]];
      }
      l[t[s]] = a;
    });
  },
  getter: function(e, t) {
    var r = Rt(e);
    return Fn.get(e) || Fn.set(e, function(a) {
      for (var s = 0, o = r.length; s < o; )
        if (a != null || !t)
          a = a[r[s++]];
        else
          return;
      return a;
    });
  },
  join: function(e) {
    return e.reduce(function(t, r) {
      return t + (xr(r) || zs.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    QS(Array.isArray(e) ? e : Ht(e), t, r);
  }
};
function Rt(e) {
  return Cn.get(e) || Cn.set(
    e,
    Ht(e).map(function(t) {
      return t.replace(MS, "$2");
    })
  );
}
function Ht(e) {
  return e.match(NS) || [""];
}
function QS(e, t, r) {
  var n = e.length, a, s, o, l;
  for (s = 0; s < n; s++)
    a = e[s], a && (GS(a) && (a = '"' + a + '"'), l = xr(a), o = !l && /^\d+$/.test(a), t.call(r, a, l, o, s, e));
}
function xr(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function jS(e) {
  return e.match(BS) && !e.match(zs);
}
function qS(e) {
  return zS.test(e);
}
function GS(e) {
  return !xr(e) && (jS(e) || qS(e));
}
const Ke = {
  context: "$",
  value: "."
};
class le {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
      throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Ke.context, this.isValue = this.key[0] === Ke.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? Ke.context : this.isValue ? Ke.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && xt.getter(this.path, !0), this.map = r.map;
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
le.prototype.__isYupRef = !0;
function it() {
  return it = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, it.apply(this, arguments);
}
function VS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Ye(e) {
  function t(r, n) {
    let {
      value: a,
      path: s = "",
      label: o,
      options: l,
      originalValue: u,
      sync: c
    } = r, d = VS(r, ["value", "path", "label", "options", "originalValue", "sync"]);
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
    function g(I) {
      return le.isRef(I) ? I.getValue(a, m, E) : I;
    }
    function b(I = {}) {
      const ce = Bs(it({
        value: a,
        originalValue: u,
        label: o,
        path: I.path || s
      }, h, I.params), g), qe = new Q(Q.formatError(I.message || y, ce), a, ce.path, I.type || p);
      return qe.params = ce, qe;
    }
    let A = it({
      path: s,
      parent: m,
      type: p,
      createError: b,
      resolve: g,
      options: l,
      originalValue: u
    }, d);
    if (!c) {
      try {
        Promise.resolve(f.call(A, a, A)).then((I) => {
          Q.isError(I) ? n(I) : I ? n(null, I) : n(b());
        }).catch(n);
      } catch (I) {
        n(I);
      }
      return;
    }
    let U;
    try {
      var X;
      if (U = f.call(A, a, A), typeof ((X = U) == null ? void 0 : X.then) == "function")
        throw new Error(`Validation test of type: "${A.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (I) {
      n(I);
      return;
    }
    Q.isError(U) ? n(U) : U ? n(null, U) : n(b());
  }
  return t.OPTIONS = e, t;
}
let HS = (e) => e.substr(0, e.length - 1).substr(1);
function KS(e, t, r, n = r) {
  let a, s, o;
  return t ? (xt.forEach(t, (l, u, c) => {
    let d = u ? HS(l) : l;
    if (e = e.resolve({
      context: n,
      parent: a,
      value: r
    }), e.innerType) {
      let p = c ? parseInt(d, 10) : 0;
      if (r && p >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);
      a = r, r = r && r[p], e = e.innerType;
    }
    if (!c) {
      if (!e.fields || !e.fields[d])
        throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e._type}")`);
      a = r, r = r && r[d], e = e.fields[d];
    }
    s = d, o = u ? "[" + l + "]" : "." + l;
  }), {
    schema: e,
    parent: a,
    parentPath: s
  }) : {
    parent: a,
    parentPath: t,
    schema: e
  };
}
class ot {
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
    return this.toArray().reduce((r, n) => r.concat(le.isRef(n) ? t(n) : n), []);
  }
  add(t) {
    le.isRef(t) ? this.refs.set(t.key, t) : this.list.add(t);
  }
  delete(t) {
    le.isRef(t) ? this.refs.delete(t.key) : this.list.delete(t);
  }
  clone() {
    const t = new ot();
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
class z {
  constructor(t) {
    this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new ot(), this._blacklist = new ot(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(pe.notType);
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
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = G({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Qt(G({}, this.spec, t)), r;
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
    return n.spec = a, n._typeError || (n._typeError = r._typeError), n._whitelistError || (n._whitelistError = r._whitelistError), n._blacklistError || (n._blacklistError = r._blacklistError), n._whitelist = r._whitelist.merge(t._whitelist, t._blacklist), n._blacklist = r._blacklist.merge(t._blacklist, t._whitelist), n.tests = r.tests, n.exclusiveTests = r.exclusiveTests, n.withMutation((s) => {
      t.tests.forEach((o) => {
        s.test(o.OPTIONS);
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
      r = r.clone(), r.conditions = [], r = n.reduce((a, s) => s.resolve(a, t), r), r = r.resolve(t);
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
      let s = Le(t), o = Le(a);
      throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${n._type}". 

attempted value: ${s} 
` + (o !== s ? `result of cast: ${o}` : ""));
    }
    return a;
  }
  _cast(t, r) {
    let n = t === void 0 ? t : this.transforms.reduce((a, s) => s.call(this, a, t, this), t);
    return n === void 0 && (n = this.getDefault()), n;
  }
  _validate(t, r = {}, n) {
    let {
      sync: a,
      path: s,
      from: o = [],
      originalValue: l = t,
      strict: u = this.spec.strict,
      abortEarly: c = this.spec.abortEarly
    } = r, d = t;
    u || (d = this._cast(d, G({
      assert: !1
    }, r)));
    let p = {
      value: d,
      path: s,
      options: r,
      originalValue: l,
      schema: this,
      label: this.spec.label,
      sync: a,
      from: o
    }, f = [];
    this._typeError && f.push(this._typeError);
    let h = [];
    this._whitelistError && h.push(this._whitelistError), this._blacklistError && h.push(this._blacklistError), Vt({
      args: p,
      value: d,
      path: s,
      sync: a,
      tests: f,
      endEarly: c
    }, (y) => {
      if (y)
        return void n(y, d);
      Vt({
        tests: this.tests.concat(h),
        args: p,
        path: s,
        sync: a,
        value: d,
        endEarly: c
      }, n);
    });
  }
  validate(t, r, n) {
    let a = this.resolve(G({}, r, {
      value: t
    }));
    return typeof n == "function" ? a._validate(t, r, n) : new Promise((s, o) => a._validate(t, r, (l, u) => {
      l ? o(l) : s(u);
    }));
  }
  validateSync(t, r) {
    let n = this.resolve(G({}, r, {
      value: t
    })), a;
    return n._validate(t, G({}, r, {
      sync: !0
    }), (s, o) => {
      if (s)
        throw s;
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
    return t == null ? t : typeof t == "function" ? t.call(this) : Qt(t);
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
  defined(t = pe.defined) {
    return this.test({
      message: t,
      name: "defined",
      exclusive: !0,
      test(r) {
        return r !== void 0;
      }
    });
  }
  required(t = pe.required) {
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
    }, r.message === void 0 && (r.message = pe.default), typeof r.test != "function")
      throw new TypeError("`test` is a required parameters");
    let n = this.clone(), a = Ye(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === r.name && (s || o.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = Os(t).map((s) => new le(s));
    return a.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(new Tb(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r._typeError = Ye({
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
  oneOf(t, r = pe.oneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._whitelist.add(a), n._blacklist.delete(a);
    }), n._whitelistError = Ye({
      message: r,
      name: "oneOf",
      test(a) {
        if (a === void 0)
          return !0;
        let s = this.schema._whitelist, o = s.resolveAll(this.resolve);
        return o.includes(a) ? !0 : this.createError({
          params: {
            values: s.toArray().join(", "),
            resolved: o
          }
        });
      }
    }), n;
  }
  notOneOf(t, r = pe.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n._blacklistError = Ye({
      message: r,
      name: "notOneOf",
      test(a) {
        let s = this.schema._blacklist, o = s.resolveAll(this.resolve);
        return o.includes(a) ? this.createError({
          params: {
            values: s.toArray().join(", "),
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
      tests: t.tests.map((s) => ({
        name: s.OPTIONS.name,
        params: s.OPTIONS.params
      })).filter((s, o, l) => l.findIndex((u) => u.name === s.name) === o)
    };
  }
}
z.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"])
  z.prototype[`${e}At`] = function(t, r, n = {}) {
    const {
      parent: a,
      parentPath: s,
      schema: o
    } = KS(this, t, r, n.context);
    return o[e](a && a[s], G({}, n, {
      parent: a,
      path: t
    }));
  };
for (const e of ["equals", "is"])
  z.prototype[e] = z.prototype.oneOf;
for (const e of ["not", "nope"])
  z.prototype[e] = z.prototype.notOneOf;
z.prototype.optional = z.prototype.notRequired;
const YS = z;
YS.prototype;
const Z = (e) => e == null;
let WS = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, ZS = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, JS = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, XS = (e) => Z(e) || e === e.trim(), e$ = {}.toString();
function Re() {
  return new Ms();
}
class Ms extends z {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === e$ ? t : r;
      });
    });
  }
  _typeCheck(t) {
    return t instanceof String && (t = t.valueOf()), typeof t == "string";
  }
  _isPresent(t) {
    return super._isPresent(t) && !!t.length;
  }
  length(t, r = W.length) {
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
  min(t, r = W.min) {
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
  max(t, r = W.max) {
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
    let n = !1, a, s;
    return r && (typeof r == "object" ? {
      excludeEmptyString: n = !1,
      message: a,
      name: s
    } = r : a = r), this.test({
      name: s || "matches",
      message: a || W.matches,
      params: {
        regex: t
      },
      test: (o) => Z(o) || o === "" && n || o.search(t) !== -1
    });
  }
  email(t = W.email) {
    return this.matches(WS, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = W.url) {
    return this.matches(ZS, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = W.uuid) {
    return this.matches(JS, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = W.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: XS
    });
  }
  lowercase(t = W.lowercase) {
    return this.transform((r) => Z(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => Z(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = W.uppercase) {
    return this.transform((r) => Z(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => Z(r) || r === r.toUpperCase()
    });
  }
}
Re.prototype = Ms.prototype;
var t$ = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function r$(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, a;
  if (a = t$.exec(e)) {
    for (var s = 0, o; o = t[s]; ++s)
      a[o] = +a[o] || 0;
    a[2] = (+a[2] || 1) - 1, a[3] = +a[3] || 1, a[7] = a[7] ? String(a[7]).substr(0, 3) : 0, (a[8] === void 0 || a[8] === "") && (a[9] === void 0 || a[9] === "") ? n = +new Date(a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : (a[8] !== "Z" && a[9] !== void 0 && (r = a[10] * 60 + a[11], a[9] === "+" && (r = 0 - r)), n = Date.UTC(a[1], a[2], a[3], a[4], a[5] + r, a[6], a[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let Qs = /* @__PURE__ */ new Date(""), n$ = (e) => Object.prototype.toString.call(e) === "[object Date]";
class js extends z {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = r$(t), isNaN(t) ? Qs : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return n$(t) && !isNaN(t.getTime());
  }
  prepareParam(t, r) {
    let n;
    if (le.isRef(t))
      n = t;
    else {
      let a = this.cast(t);
      if (!this._typeCheck(a))
        throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = a;
    }
    return n;
  }
  min(t, r = jt.min) {
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
  max(t, r = jt.max) {
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
js.INVALID_DATE = Qs;
js.prototype;
function a$(e, t, r, n) {
  var a = -1, s = e == null ? 0 : e.length;
  for (n && s && (r = e[++a]); ++a < s; )
    r = t(r, e[a], a, e);
  return r;
}
var s$ = a$;
function i$(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var o$ = i$, l$ = o$, u$ = {
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
}, c$ = l$(u$), d$ = c$, p$ = d$, f$ = Be, h$ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, m$ = "\\u0300-\\u036f", g$ = "\\ufe20-\\ufe2f", y$ = "\\u20d0-\\u20ff", v$ = m$ + g$ + y$, E$ = "[" + v$ + "]", b$ = RegExp(E$, "g");
function S$(e) {
  return e = f$(e), e && e.replace(h$, p$).replace(b$, "");
}
var $$ = S$, _$ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function x$(e) {
  return e.match(_$) || [];
}
var C$ = x$, w$ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function F$(e) {
  return w$.test(e);
}
var T$ = F$, qs = "\\ud800-\\udfff", A$ = "\\u0300-\\u036f", I$ = "\\ufe20-\\ufe2f", O$ = "\\u20d0-\\u20ff", R$ = A$ + I$ + O$, Gs = "\\u2700-\\u27bf", Vs = "a-z\\xdf-\\xf6\\xf8-\\xff", P$ = "\\xac\\xb1\\xd7\\xf7", D$ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", k$ = "\\u2000-\\u206f", L$ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Hs = "A-Z\\xc0-\\xd6\\xd8-\\xde", U$ = "\\ufe0e\\ufe0f", Ks = P$ + D$ + k$ + L$, Ys = "['’]", Tn = "[" + Ks + "]", N$ = "[" + R$ + "]", Ws = "\\d+", B$ = "[" + Gs + "]", Zs = "[" + Vs + "]", Js = "[^" + qs + Ks + Ws + Gs + Vs + Hs + "]", z$ = "\\ud83c[\\udffb-\\udfff]", M$ = "(?:" + N$ + "|" + z$ + ")", Q$ = "[^" + qs + "]", Xs = "(?:\\ud83c[\\udde6-\\uddff]){2}", ei = "[\\ud800-\\udbff][\\udc00-\\udfff]", ve = "[" + Hs + "]", j$ = "\\u200d", An = "(?:" + Zs + "|" + Js + ")", q$ = "(?:" + ve + "|" + Js + ")", In = "(?:" + Ys + "(?:d|ll|m|re|s|t|ve))?", On = "(?:" + Ys + "(?:D|LL|M|RE|S|T|VE))?", ti = M$ + "?", ri = "[" + U$ + "]?", G$ = "(?:" + j$ + "(?:" + [Q$, Xs, ei].join("|") + ")" + ri + ti + ")*", V$ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", H$ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", K$ = ri + ti + G$, Y$ = "(?:" + [B$, Xs, ei].join("|") + ")" + K$, W$ = RegExp([
  ve + "?" + Zs + "+" + In + "(?=" + [Tn, ve, "$"].join("|") + ")",
  q$ + "+" + On + "(?=" + [Tn, ve + An, "$"].join("|") + ")",
  ve + "?" + An + "+" + In,
  ve + "+" + On,
  H$,
  V$,
  Ws,
  Y$
].join("|"), "g");
function Z$(e) {
  return e.match(W$) || [];
}
var J$ = Z$, X$ = C$, e_ = T$, t_ = Be, r_ = J$;
function n_(e, t, r) {
  return e = t_(e), t = r ? void 0 : t, t === void 0 ? e_(e) ? r_(e) : X$(e) : e.match(t) || [];
}
var a_ = n_, s_ = s$, i_ = $$, o_ = a_, l_ = "['’]", u_ = RegExp(l_, "g");
function c_(e) {
  return function(t) {
    return s_(o_(i_(t).replace(u_, "")), e, "");
  };
}
var ni = c_, d_ = ni, p_ = d_(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), f_ = p_;
const Rn = /* @__PURE__ */ P(f_);
function h_(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++n < a; )
    s[n] = e[n + t];
  return s;
}
var m_ = h_, g_ = m_;
function y_(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : g_(e, t, r);
}
var v_ = y_, E_ = "\\ud800-\\udfff", b_ = "\\u0300-\\u036f", S_ = "\\ufe20-\\ufe2f", $_ = "\\u20d0-\\u20ff", __ = b_ + S_ + $_, x_ = "\\ufe0e\\ufe0f", C_ = "\\u200d", w_ = RegExp("[" + C_ + E_ + __ + x_ + "]");
function F_(e) {
  return w_.test(e);
}
var ai = F_;
function T_(e) {
  return e.split("");
}
var A_ = T_, si = "\\ud800-\\udfff", I_ = "\\u0300-\\u036f", O_ = "\\ufe20-\\ufe2f", R_ = "\\u20d0-\\u20ff", P_ = I_ + O_ + R_, D_ = "\\ufe0e\\ufe0f", k_ = "[" + si + "]", Kt = "[" + P_ + "]", Yt = "\\ud83c[\\udffb-\\udfff]", L_ = "(?:" + Kt + "|" + Yt + ")", ii = "[^" + si + "]", oi = "(?:\\ud83c[\\udde6-\\uddff]){2}", li = "[\\ud800-\\udbff][\\udc00-\\udfff]", U_ = "\\u200d", ui = L_ + "?", ci = "[" + D_ + "]?", N_ = "(?:" + U_ + "(?:" + [ii, oi, li].join("|") + ")" + ci + ui + ")*", B_ = ci + ui + N_, z_ = "(?:" + [ii + Kt + "?", Kt, oi, li, k_].join("|") + ")", M_ = RegExp(Yt + "(?=" + Yt + ")|" + z_ + B_, "g");
function Q_(e) {
  return e.match(M_) || [];
}
var j_ = Q_, q_ = A_, G_ = ai, V_ = j_;
function H_(e) {
  return G_(e) ? V_(e) : q_(e);
}
var K_ = H_, Y_ = v_, W_ = ai, Z_ = K_, J_ = Be;
function X_(e) {
  return function(t) {
    t = J_(t);
    var r = W_(t) ? Z_(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? Y_(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var e1 = X_, t1 = e1, r1 = t1("toUpperCase"), n1 = r1, a1 = Be, s1 = n1;
function i1(e) {
  return s1(a1(e).toLowerCase());
}
var o1 = i1, l1 = o1, u1 = ni, c1 = u1(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? l1(t) : t);
}), d1 = c1;
const p1 = /* @__PURE__ */ P(d1);
var f1 = bt, h1 = Rs, m1 = Ns;
function g1(e, t) {
  var r = {};
  return t = m1(t), h1(e, function(n, a, s) {
    f1(r, t(n, a, s), n);
  }), r;
}
var y1 = g1;
const v1 = /* @__PURE__ */ P(y1);
var Cr = { exports: {} };
Cr.exports = function(e) {
  return di(E1(e), e);
};
Cr.exports.array = di;
function di(e, t) {
  var r = e.length, n = new Array(r), a = {}, s = r, o = b1(t), l = S1(e);
  for (t.forEach(function(c) {
    if (!l.has(c[0]) || !l.has(c[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); s--; )
    a[s] || u(e[s], s, /* @__PURE__ */ new Set());
  return n;
  function u(c, d, p) {
    if (p.has(c)) {
      var f;
      try {
        f = ", node was:" + JSON.stringify(c);
      } catch {
        f = "";
      }
      throw new Error("Cyclic dependency" + f);
    }
    if (!l.has(c))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(c));
    if (!a[d]) {
      a[d] = !0;
      var h = o.get(c) || /* @__PURE__ */ new Set();
      if (h = Array.from(h), d = h.length) {
        p.add(c);
        do {
          var y = h[--d];
          u(y, l.get(y), p);
        } while (d);
        p.delete(c);
      }
      n[--r] = c;
    }
  }
}
function E1(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.add(a[0]), t.add(a[1]);
  }
  return Array.from(t);
}
function b1(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.has(a[0]) || t.set(a[0], /* @__PURE__ */ new Set()), t.has(a[1]) || t.set(a[1], /* @__PURE__ */ new Set()), t.get(a[0]).add(a[1]);
  }
  return t;
}
function S1(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var $1 = Cr.exports;
const _1 = /* @__PURE__ */ P($1);
function x1(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([o, l]) => `${o}-${l}`));
  function s(o, l) {
    let u = xt.split(o)[0];
    n.add(u), a.has(`${l}-${u}`) || r.push([l, u]);
  }
  for (const o in e)
    if (at(e, o)) {
      let l = e[o];
      n.add(o), le.isRef(l) && l.isSibling ? s(l.path, o) : Is(l) && "deps" in l && l.deps.forEach((u) => s(u, o));
    }
  return _1.array(Array.from(n), r).reverse();
}
function Pn(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if (((s = t.path) == null ? void 0 : s.indexOf(n)) !== -1)
      return r = a, !0;
  }), r;
}
function pi(e) {
  return (t, r) => Pn(e, t) - Pn(e, r);
}
function Ee() {
  return Ee = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ee.apply(this, arguments);
}
let Dn = (e) => Object.prototype.toString.call(e) === "[object Object]";
function C1(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const w1 = pi([]);
class fi extends z {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = w1, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
    return Dn(t) || typeof t == "function";
  }
  _cast(t, r = {}) {
    var n;
    let a = super._cast(t, r);
    if (a === void 0)
      return this.getDefault();
    if (!this._typeCheck(a))
      return a;
    let s = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, l = this._nodes.concat(Object.keys(a).filter((p) => this._nodes.indexOf(p) === -1)), u = {}, c = Ee({}, r, {
      parent: u,
      __validating: r.__validating || !1
    }), d = !1;
    for (const p of l) {
      let f = s[p], h = at(a, p);
      if (f) {
        let y, m = a[p];
        c.path = (r.path ? `${r.path}.` : "") + p, f = f.resolve({
          value: m,
          context: r.context,
          parent: u
        });
        let E = "spec" in f ? f.spec : void 0, g = E == null ? void 0 : E.strict;
        if (E != null && E.strip) {
          d = d || p in a;
          continue;
        }
        y = !r.__validating || !g ? (
          // TODO: use _cast, this is double resolving
          f.cast(a[p], c)
        ) : a[p], y !== void 0 && (u[p] = y);
      } else
        h && !o && (u[p] = a[p]);
      u[p] !== a[p] && (d = !0);
    }
    return d ? u : a;
  }
  _validate(t, r = {}, n) {
    let a = [], {
      sync: s,
      from: o = [],
      originalValue: l = t,
      abortEarly: u = this.spec.abortEarly,
      recursive: c = this.spec.recursive
    } = r;
    o = [{
      schema: this,
      value: l
    }, ...o], r.__validating = !0, r.originalValue = l, r.from = o, super._validate(t, r, (d, p) => {
      if (d) {
        if (!Q.isError(d) || u)
          return void n(d, p);
        a.push(d);
      }
      if (!c || !Dn(p)) {
        n(a[0] || null, p);
        return;
      }
      l = l || p;
      let f = this._nodes.map((h) => (y, m) => {
        let E = h.indexOf(".") === -1 ? (r.path ? `${r.path}.` : "") + h : `${r.path || ""}["${h}"]`, g = this.fields[h];
        if (g && "validate" in g) {
          g.validate(p[h], Ee({}, r, {
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
      Vt({
        sync: s,
        tests: f,
        value: p,
        errors: a,
        endEarly: u,
        sort: this._sortErrors,
        path: r.path
      }, n);
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.fields = Ee({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), n = r.fields;
    for (let [a, s] of Object.entries(this.fields)) {
      const o = n[a];
      o === void 0 ? n[a] = s : o instanceof z && s instanceof z && (n[a] = s.concat(o));
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
    return n.fields = a, n._sortErrors = pi(Object.keys(a)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = x1(a, n._excludedEdges), n;
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
    let a = xt.getter(t, !0);
    return this.transform((s) => {
      if (s == null)
        return s;
      let o = s;
      return at(s, t) && (o = Ee({}, s), n || delete o[t], o[r] = a(s)), o;
    });
  }
  noUnknown(t = !0, r = qt.noUnknown) {
    typeof t == "string" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(a) {
        if (a == null)
          return !0;
        const s = C1(this.schema, a);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = qt.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => r && v1(r, (n, a) => t(a)));
  }
  camelCase() {
    return this.transformKeys(p1);
  }
  snakeCase() {
    return this.transformKeys(Rn);
  }
  constantCase() {
    return this.transformKeys((t) => Rn(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = Bs(this.fields, (r) => r.describe()), t;
  }
}
function Je(e) {
  return new fi(e);
}
Je.prototype = fi.prototype;
const F1 = {
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
}, T1 = Je({
  task: Je({
    title: Re().required("Title is required"),
    recordType: Re().required("Record type is required"),
    serializer: Re().required("Serializer is required"),
    mode: Re().required("Mode is required")
  }),
  metadata: Je().nullable()
}), A1 = ({ onSubmit: e }) => {
  const [t, r] = L(void 0), n = async (a) => {
    try {
      await ab(a.task, a.metadata, a.files, {
        autoValidate: !!a.metadata,
        onProgress(s, o) {
          r({
            [s]: o
          });
        }
      }), e == null || e();
    } catch (s) {
      throw console.error("Error creating import task:", s), s;
    }
  };
  return /* @__PURE__ */ i.createElement(
    zi,
    {
      formik: {
        initialValues: F1,
        validationSchema: T1,
        onSubmit: n
      }
    },
    /* @__PURE__ */ i.createElement(cb, { progress: t })
  );
}, I1 = () => {
  const [e, t] = L(!1), { refreshSearch: r } = _t(), n = O(() => {
    r(), t(!1);
  }, [r]);
  return /* @__PURE__ */ i.createElement(
    ie,
    {
      closeIcon: !0,
      onClose: () => t(!1),
      onOpen: () => t(!0),
      open: e,
      trigger: /* @__PURE__ */ i.createElement(B, { color: "green", icon: !0, labelPosition: "left" }, /* @__PURE__ */ i.createElement(S, { name: "add" }), "New Import")
    },
    /* @__PURE__ */ i.createElement(Ai, null, "New Import Task"),
    /* @__PURE__ */ i.createElement(Ii, null, /* @__PURE__ */ i.createElement(A1, { onSubmit: n }))
  );
}, O1 = ({
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
    (o) => o[0] === "status"
  ), a = (o) => {
    var u;
    const l = ((u = e.filters) == null ? void 0 : u.filter(
      (c) => c[0] !== "status"
    )) || [];
    o && l.push(["status", o]), t({
      ...e,
      filters: l,
      page: 1
    });
  };
  return /* @__PURE__ */ i.createElement(Pe, { activeIndex: 0, compact: !0, size: "tiny" }, r.map(({ key: o, label: l, value: u }) => /* @__PURE__ */ i.createElement(
    Pe.Item,
    {
      key: o,
      name: o,
      active: (n == null ? void 0 : n[1]) === u || u === null && !n,
      onClick: () => a(u)
    },
    l
  )));
}, hi = Ga(O1), R1 = ({
  appId: e = "search"
}) => {
  const { showFacets: t, showImportModal: r } = _t().config;
  return /* @__PURE__ */ i.createElement(v, { id: `${e}.SearchBarRow` }, /* @__PURE__ */ i.createElement(
    "section",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "1rem",
        paddingBlock: "0.5rem",
        minBlockSize: "3rem"
      },
      "aria-label": "Records search and filters"
    },
    t && /* @__PURE__ */ i.createElement("div", { style: { flex: "0 0 auto" } }, /* @__PURE__ */ i.createElement(hi, null)),
    /* @__PURE__ */ i.createElement("div", { style: { flex: "1 1 auto", minInlineSize: "15rem" } }, /* @__PURE__ */ i.createElement(
      kE,
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
    r && /* @__PURE__ */ i.createElement("div", { style: { flex: "0 0 auto" } }, /* @__PURE__ */ i.createElement(I1, null))
  ));
}, P1 = () => {
  const { config: e } = _t();
  return /* @__PURE__ */ i.createElement(M, null, /* @__PURE__ */ i.createElement(M.Row, { verticalAlign: "middle" }, /* @__PURE__ */ i.createElement(M.Column, { width: 4, textAlign: "left" }, /* @__PURE__ */ i.createElement(pE, { label: (t) => /* @__PURE__ */ i.createElement("div", null, t, " item(s)") })), /* @__PURE__ */ i.createElement(M.Column, { width: 8, textAlign: "center" }, /* @__PURE__ */ i.createElement(SE, { options: { size: "mini" } })), /* @__PURE__ */ i.createElement(M.Column, { width: 4, textAlign: "right" }, /* @__PURE__ */ i.createElement(
    RE,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ i.createElement("p", null, t, " results per page")
    }
  ))));
}, mi = ({
  config: e = {},
  overriddenComponents: t = {}
}) => {
  var s, o, l, u, c;
  const r = {
    ...ne,
    ...e,
    initialQueryState: {
      ...ne.initialQueryState,
      ...e.initialQueryState
    },
    layoutOptions: {
      ...ne.layoutOptions,
      ...e.layoutOptions
    },
    paginationOptions: {
      ...ne.paginationOptions,
      ...e.paginationOptions,
      resultsPerPage: ((s = e.paginationOptions) == null ? void 0 : s.resultsPerPage) || ne.paginationOptions.resultsPerPage
    },
    searchApi: {
      ...ne.searchApi,
      ...e.searchApi,
      axios: {
        ...ne.searchApi.axios,
        ...(o = e.searchApi) == null ? void 0 : o.axios,
        headers: {
          ...ne.searchApi.axios.headers,
          ...(u = (l = e.searchApi) == null ? void 0 : l.axios) == null ? void 0 : u.headers
        }
      },
      invenio: {
        ...ne.searchApi.invenio,
        ...(c = e.searchApi) == null ? void 0 : c.invenio
      }
    },
    showFacets: e.showFacets ?? !0,
    showImportModal: e.showImportModal ?? !0,
    showSearchFooter: e.showSearchFooter ?? !0
  }, n = new ya(r.searchApi), a = {
    [`${r.appId}.ResultsList.item`]: ob,
    [`${r.appId}.ResultsList.container`]: lb,
    [`${r.appId}.SearchFacets`]: hi,
    ...t
  };
  return /* @__PURE__ */ i.createElement(xi.Provider, { value: a }, /* @__PURE__ */ i.createElement(
    Zv,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ i.createElement(GE, { config: r }, /* @__PURE__ */ i.createElement(R1, { appId: r.appId }), /* @__PURE__ */ i.createElement(TE, null, /* @__PURE__ */ i.createElement(mE, null), /* @__PURE__ */ i.createElement(es, null)), r.showSearchFooter && /* @__PURE__ */ i.createElement(P1, null))
  ));
}, D1 = (e) => Si(() => {
  const { totalRecords: t, validatedRecords: r, errorRecords: n, successRecords: a } = e, s = t > 0 ? r / t * 100 : 0, o = t > 0 ? n / t * 100 : 0, l = t > 0 ? a / t * 100 : 0;
  return [
    {
      color: "blue",
      icon: "check circle",
      title: "Validation",
      value: r,
      label: `of ${t} Validated`,
      progress: s,
      progressLabel: `${s.toFixed(1)}% Complete`
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
}, [e]), k1 = ({
  totalRecords: e = 0,
  validatedRecords: t = 0,
  errorRecords: r = 0,
  successRecords: n = 0,
  showWhenEmpty: a = !1,
  className: s = "",
  style: o = {}
}) => {
  const l = D1({
    totalRecords: e,
    validatedRecords: t,
    errorRecords: r,
    successRecords: n
  });
  return e === 0 && !a ? null : /* @__PURE__ */ i.createElement(K, { basic: !0, className: s, style: o }, /* @__PURE__ */ i.createElement(M, { columns: 3, stackable: !0 }, l.map((u) => /* @__PURE__ */ i.createElement(M.Column, { key: u.title }, /* @__PURE__ */ i.createElement(D, { fluid: !0 }, /* @__PURE__ */ i.createElement(D.Content, null, /* @__PURE__ */ i.createElement(D.Header, { textAlign: "center" }, u.title), /* @__PURE__ */ i.createElement(D.Description, { textAlign: "center" }, /* @__PURE__ */ i.createElement(
    wt,
    {
      size: "large",
      color: u.color,
      style: { margin: "1rem 0" }
    },
    /* @__PURE__ */ i.createElement(wt.Value, null, u.value),
    /* @__PURE__ */ i.createElement(wt.Label, null, u.label)
  ), /* @__PURE__ */ i.createElement(K, { basic: !0, textAlign: "center" }, /* @__PURE__ */ i.createElement(
    K.Inline,
    {
      basic: !0,
      size: "small",
      style: { marginBottom: "0.5rem" }
    },
    u.progressLabel
  ), /* @__PURE__ */ i.createElement(
    Oi,
    {
      percent: u.progress,
      color: u.color,
      size: "small",
      style: { marginBottom: "0.5rem" }
    }
  )))))))));
}, gi = $i(
  void 0
), L1 = ({
  taskId: e,
  children: t
}) => /* @__PURE__ */ i.createElement(gi.Provider, { value: { taskId: e } }, /* @__PURE__ */ i.createElement(
  "div",
  {
    style: {
      paddingBlockStart: "1rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }
  },
  t
)), yi = () => {
  const e = T(gi);
  if (!e)
    throw new Error("useTaskDetails must be used within a TaskDetailsProvider");
  return e;
}, U1 = ({ children: e }) => /* @__PURE__ */ i.createElement(w, { padded: !0, size: "small", compact: !0 }, /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(H, null, "ID"), /* @__PURE__ */ i.createElement(H, null, "Title"), /* @__PURE__ */ i.createElement(H, null, "Status"), /* @__PURE__ */ i.createElement(H, null))), /* @__PURE__ */ i.createElement(Bn, null, e)), N1 = ({ record: e }) => /* @__PURE__ */ i.createElement(K, { basic: !0 }, /* @__PURE__ */ i.createElement($, null, /* @__PURE__ */ i.createElement($.Item, null, /* @__PURE__ */ i.createElement($.Icon, { name: "tag" }), /* @__PURE__ */ i.createElement($.Content, null, /* @__PURE__ */ i.createElement($.Header, null, "Record ID"), /* @__PURE__ */ i.createElement($.Description, null, e.id))), /* @__PURE__ */ i.createElement($.Item, null, /* @__PURE__ */ i.createElement($.Icon, { name: "calendar" }), /* @__PURE__ */ i.createElement($.Content, null, /* @__PURE__ */ i.createElement($.Header, null, "Created"), /* @__PURE__ */ i.createElement($.Description, null, Bt(e.created)))), /* @__PURE__ */ i.createElement($.Item, null, /* @__PURE__ */ i.createElement($.Icon, { name: "edit" }), /* @__PURE__ */ i.createElement($.Content, null, /* @__PURE__ */ i.createElement($.Header, null, "Updated"), /* @__PURE__ */ i.createElement($.Description, null, Bt(e.updated)))), e.generated_record_id && /* @__PURE__ */ i.createElement($.Item, null, /* @__PURE__ */ i.createElement($.Icon, { name: "file alternate" }), /* @__PURE__ */ i.createElement($.Content, null, /* @__PURE__ */ i.createElement($.Header, null, "Generated Record ID"), /* @__PURE__ */ i.createElement($.Description, null, /* @__PURE__ */ i.createElement(
  "a",
  {
    href: `/records/${e.generated_record_id}`,
    target: "_blank",
    rel: "noopener noreferrer"
  },
  "/",
  e.generated_record_id
)))))), B1 = ({ record: e }) => /* @__PURE__ */ i.createElement(K, { basic: !0 }, e.errors.map((t, r) => /* @__PURE__ */ i.createElement(N, { key: `error-${r}-${t.type}`, negative: !0 }, /* @__PURE__ */ i.createElement(N.Header, null, t.type), /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement("strong", null, "Location:"), " ", t.loc), /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement("strong", null, "Message:"), " ", t.msg)))), z1 = ({ record: e }) => {
  var r, n;
  return (((r = e.record_files) == null ? void 0 : r.length) ?? 0) > 0 || (((n = e.validated_record_files) == null ? void 0 : n.length) ?? 0) > 0 ? /* @__PURE__ */ i.createElement(K, { basic: !0 }, e.record_files && e.record_files.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(fe, { as: "h4" }, /* @__PURE__ */ i.createElement(S, { name: "file" }), "File List"), /* @__PURE__ */ i.createElement($, { bulleted: !0 }, e.record_files.map((a) => /* @__PURE__ */ i.createElement($.Item, { key: `file-${a}` }, /* @__PURE__ */ i.createElement($.Content, null, a))))), e.validated_record_files && e.validated_record_files.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(fe, { as: "h4" }, /* @__PURE__ */ i.createElement(S, { name: "checkmark" }), "Validated Files"), /* @__PURE__ */ i.createElement(w, { celled: !0 }, /* @__PURE__ */ i.createElement(w.Header, null, /* @__PURE__ */ i.createElement(w.Row, null, /* @__PURE__ */ i.createElement(w.HeaderCell, null, "File"), /* @__PURE__ */ i.createElement(w.HeaderCell, null, "Size"), /* @__PURE__ */ i.createElement(w.HeaderCell, null, "Origin"), /* @__PURE__ */ i.createElement(w.HeaderCell, null, "Path"))), /* @__PURE__ */ i.createElement(w.Body, null, e.validated_record_files.map((a, s) => /* @__PURE__ */ i.createElement(w.Row, { key: `validated-${a.key}-${s}` }, /* @__PURE__ */ i.createElement(w.Cell, null, /* @__PURE__ */ i.createElement(S, { name: "file" }), a.key), /* @__PURE__ */ i.createElement(w.Cell, null, (a.size / 1024).toFixed(2), " KB"), /* @__PURE__ */ i.createElement(w.Cell, null, a.origin), /* @__PURE__ */ i.createElement(w.Cell, { style: { wordBreak: "break-all" } }, a.full_path))))))) : /* @__PURE__ */ i.createElement(N, { info: !0 }, /* @__PURE__ */ i.createElement(N.Header, null, "No Files"), /* @__PURE__ */ i.createElement("p", null, "No files are associated with this record."));
}, M1 = ({ record: e }) => /* @__PURE__ */ i.createElement(w, { celled: !0, striped: !0 }, /* @__PURE__ */ i.createElement(w.Header, null, /* @__PURE__ */ i.createElement(w.Row, null, /* @__PURE__ */ i.createElement(w.HeaderCell, null, "Field"), /* @__PURE__ */ i.createElement(w.HeaderCell, null, "Value"))), /* @__PURE__ */ i.createElement(w.Body, null, Object.entries(e.src_data).filter(([t, r]) => r && r.trim() !== "").map(([t, r]) => /* @__PURE__ */ i.createElement(w.Row, { key: t }, /* @__PURE__ */ i.createElement(w.Cell, null, /* @__PURE__ */ i.createElement("strong", null, t)), /* @__PURE__ */ i.createElement(w.Cell, { style: { wordBreak: "break-word" } }, r))))), Q1 = ({
  record: e,
  open: t,
  onClose: r,
  initialTab: n = 0
}) => {
  const [a, s] = L(n);
  Ue(() => {
    t && s(n);
  }, [t, n]);
  const o = (c, d) => {
    const p = typeof d.activeIndex == "number" ? d.activeIndex : 0;
    s(p);
  }, l = [
    {
      menuItem: { key: "basic", icon: "info circle", content: "Basic Info" },
      render: () => /* @__PURE__ */ i.createElement(Ae.Pane, null, /* @__PURE__ */ i.createElement(N1, { record: e }))
    },
    {
      menuItem: { key: "source", icon: "database", content: "Source Data" },
      render: () => /* @__PURE__ */ i.createElement(Ae.Pane, null, /* @__PURE__ */ i.createElement(M1, { record: e }))
    },
    ...e.errors && e.errors.length > 0 ? [
      {
        menuItem: {
          key: "errors",
          icon: "exclamation triangle",
          content: `Errors (${e.errors.length})`
        },
        render: () => /* @__PURE__ */ i.createElement(Ae.Pane, null, /* @__PURE__ */ i.createElement(B1, { record: e }))
      }
    ] : [],
    {
      menuItem: { key: "files", icon: "file", content: "Files" },
      render: () => /* @__PURE__ */ i.createElement(Ae.Pane, null, /* @__PURE__ */ i.createElement(z1, { record: e }))
    }
  ], u = () => {
    var c, d, p, f, h;
    return ((d = (c = e.serializer_data) == null ? void 0 : c.metadata) == null ? void 0 : d.title) || ((f = (p = e.transformed_data) == null ? void 0 : p.metadata) == null ? void 0 : f.title) || ((h = e.src_data) == null ? void 0 : h.title) || `Record ${e.id}`;
  };
  return /* @__PURE__ */ i.createElement(
    ie,
    {
      centered: !1,
      open: t,
      onClose: r,
      size: "large",
      closeIcon: !0
    },
    /* @__PURE__ */ i.createElement(ie.Header, null, /* @__PURE__ */ i.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }
      },
      /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement(S, { name: "file alternate outline" }), u()),
      /* @__PURE__ */ i.createElement(VE, { status: e.status })
    )),
    /* @__PURE__ */ i.createElement(ie.Content, { scrolling: !0 }, /* @__PURE__ */ i.createElement(
      Ae,
      {
        panes: l,
        activeIndex: a,
        onTabChange: o
      }
    )),
    /* @__PURE__ */ i.createElement(ie.Actions, null, /* @__PURE__ */ i.createElement(B, { onClick: r }, /* @__PURE__ */ i.createElement(S, { name: "close" }), "Close"))
  );
}, j1 = ({
  result: e,
  index: t
}) => {
  var y;
  const [r, n] = L(
    "idle"
  ), [a, s] = L(!1), [o, l] = L(0);
  if (!e)
    return null;
  const u = async () => {
    try {
      n("copying"), await navigator.clipboard.writeText(e.id), n("copied"), setTimeout(() => {
        n("idle");
      }, 2e3);
    } catch {
      n("idle");
    }
  }, c = e.errors && e.errors.length > 0, d = WE(e.status), p = () => c ? 2 : -1, f = (m) => m === "red" ? "times" : m === "green" || m === "blue" ? "check" : "question", h = [
    ...c ? [
      {
        key: "view-errors",
        text: "View Errors",
        value: "view-errors",
        icon: "exclamation triangle",
        onClick: () => {
          l(p()), s(!0);
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
          await ib(e.id), console.log(`Record ${e.id} is being processed.`);
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
        l(0), s(!0);
      }
    }
  ];
  return /* @__PURE__ */ i.createElement(lt, { key: t }, /* @__PURE__ */ i.createElement(V, null, /* @__PURE__ */ i.createElement("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem" } }, /* @__PURE__ */ i.createElement("code", { style: { fontSize: "0.9em", color: "#666" } }, e.id.length > 20 ? `${e.id.substring(0, 20)}…` : e.id), /* @__PURE__ */ i.createElement(
    wr,
    {
      content: r === "copied" ? "Copied!" : "Copy ID",
      trigger: /* @__PURE__ */ i.createElement(
        B,
        {
          size: "mini",
          circular: !0,
          icon: !0,
          loading: r === "copying",
          onClick: u,
          color: r === "copied" ? "green" : void 0
        },
        /* @__PURE__ */ i.createElement(S, { name: r === "copied" ? "check" : "copy" })
      ),
      position: "top center",
      size: "mini"
    }
  ))), /* @__PURE__ */ i.createElement(V, null, /* @__PURE__ */ i.createElement("div", { style: { maxWidth: "300px" } }, ((y = e.src_data) == null ? void 0 : y.title) || /* @__PURE__ */ i.createElement("em", { style: { color: "#999" } }, "No Title Available"))), /* @__PURE__ */ i.createElement(V, null, /* @__PURE__ */ i.createElement(ae, { color: d, size: "small" }, /* @__PURE__ */ i.createElement(S, { name: f(d) }), De(e.status)), c && /* @__PURE__ */ i.createElement(
    wr,
    {
      content: `${e.errors.length} error${e.errors.length > 1 ? "s" : ""} found`,
      trigger: /* @__PURE__ */ i.createElement(
        S,
        {
          name: "exclamation triangle",
          color: "red",
          style: { marginLeft: "0.5rem", cursor: "help" }
        }
      ),
      position: "top center",
      size: "mini"
    }
  )), /* @__PURE__ */ i.createElement(V, { textAlign: "right" }, /* @__PURE__ */ i.createElement(
    oe,
    {
      button: !0,
      className: "icon",
      floating: !0,
      labeled: !0,
      icon: "ellipsis horizontal",
      text: "Actions",
      size: "mini"
    },
    /* @__PURE__ */ i.createElement(oe.Menu, null, h.map((m) => /* @__PURE__ */ i.createElement(
      oe.Item,
      {
        key: m.key,
        icon: m.icon,
        text: m.text,
        disabled: m.disabled,
        onClick: m.onClick
      }
    )))
  ), /* @__PURE__ */ i.createElement(
    Q1,
    {
      record: e,
      open: a,
      onClose: () => s(!1),
      initialTab: o
    }
  )));
}, q1 = () => {
  const { taskId: e } = yi(), t = {
    "search.SearchBarRow": () => null,
    "search.ResultsList.container": U1,
    "search.ResultsList.item": j1
  };
  return /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement(fe, { as: "h3" }, "Task Records"), /* @__PURE__ */ i.createElement(
    mi,
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
}, G1 = ({
  fileInputRef: e,
  accept: t,
  maxFiles: r,
  maxTotalSize: n,
  disabled: a = !1,
  isDragOver: s,
  uploadFiles: o,
  onInputChange: l,
  onDragOver: u,
  onDragLeave: c,
  onDrop: d,
  onFileDialogOpen: p
}) => /* @__PURE__ */ i.createElement(Wt, null, /* @__PURE__ */ i.createElement(
  "input",
  {
    ref: e,
    type: "file",
    multiple: !0,
    accept: t,
    onChange: l,
    style: { display: "none" },
    disabled: a
  }
), /* @__PURE__ */ i.createElement(
  K,
  {
    placeholder: !0,
    className: `file-drop-zone ${s ? "drag-over" : ""}`,
    onDragOver: u,
    onDragLeave: c,
    onDrop: d,
    style: {
      minHeight: "120px",
      border: s ? "2px dashed #2185d0" : "2px dashed #d4d4d5",
      backgroundColor: s ? "#f8f9fa" : "transparent",
      cursor: a ? "not-allowed" : "pointer",
      opacity: a ? 0.6 : 1
    },
    onClick: p
  },
  /* @__PURE__ */ i.createElement("div", { style: { textAlign: "center", padding: "20px" } }, /* @__PURE__ */ i.createElement(
    S,
    {
      name: "cloud upload",
      size: "huge",
      color: s ? "blue" : "grey"
    }
  ), /* @__PURE__ */ i.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement("strong", null, "Drop files here or click to select")), /* @__PURE__ */ i.createElement("p", { style: { fontSize: "12px", color: "#666" } }, "Max files: ", r, " | Max total: ", $r(n)), o.length > 0 && /* @__PURE__ */ i.createElement(
    "p",
    {
      style: { fontSize: "12px", color: "#2185d0", marginTop: "8px" }
    },
    /* @__PURE__ */ i.createElement("strong", null, o.length, " files selected •", " ", Ss(o), " total")
  )))
)), V1 = ({
  onUploadError: e
} = {}) => {
  const [t, r] = L([]), [n] = L(!1), a = O(
    (u, c, d) => d && u.size === 0 ? "Empty files are not allowed" : c && !c.split(",").map((h) => h.trim()).some((h) => h.startsWith(".") ? u.name.toLowerCase().endsWith(h.toLowerCase()) : u.type.match(new RegExp(h.replace("*", ".*")))) ? `File type not accepted. Accepted types: ${c}` : null,
    []
  ), s = O(
    (u, c, d, p, f) => {
      const h = [], y = [];
      for (const m of u) {
        if (d && t.length + h.length >= d) {
          y.push(`Maximum ${d} files allowed`);
          break;
        }
        const E = a(m, c, f);
        if (E) {
          y.push(`${m.name}: ${E}`);
          continue;
        }
        if (t.some(
          (b) => b.file.name === m.name && b.file.size === m.size
        )) {
          y.push(`${m.name}: File already selected`);
          continue;
        }
        if (p && bs([
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
  ), o = O((u) => {
    r((c) => c.filter((d) => d.id !== u));
  }, []), l = O(() => {
    r([]);
  }, []);
  return {
    uploadFiles: t,
    isUploading: n,
    addFiles: s,
    removeFile: o,
    clearFiles: l
  };
}, H1 = ({
  uploadFiles: e,
  isUploading: t,
  handleRemoveFile: r,
  handleClearFiles: n
}) => /* @__PURE__ */ i.createElement(K, null, /* @__PURE__ */ i.createElement(
  "div",
  {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px"
    }
  },
  /* @__PURE__ */ i.createElement("strong", null, "Selected Files (", e.length, ") •", " ", Ss(e)),
  /* @__PURE__ */ i.createElement(
    B,
    {
      size: "mini",
      basic: !0,
      icon: "trash",
      content: "Clear All",
      onClick: n,
      disabled: t
    }
  )
), /* @__PURE__ */ i.createElement($, { divided: !0 }, e.map((a) => /* @__PURE__ */ i.createElement($.Item, { key: a.id }, /* @__PURE__ */ i.createElement($.Content, null, /* @__PURE__ */ i.createElement(
  "div",
  {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  },
  /* @__PURE__ */ i.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ i.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }
    },
    /* @__PURE__ */ i.createElement(S, { name: "file" }),
    /* @__PURE__ */ i.createElement("span", null, a.file.name),
    /* @__PURE__ */ i.createElement(ae, { size: "mini", basic: !0 }, $r(a.file.size))
  ), a.error && /* @__PURE__ */ i.createElement(N, { negative: !0, size: "mini", style: { marginTop: "5px" } }, a.error)),
  /* @__PURE__ */ i.createElement(
    B,
    {
      size: "mini",
      basic: !0,
      icon: "close",
      onClick: () => r(a.id),
      disabled: t
    }
  )
)))))), vi = ({
  onChange: e,
  accept: t = ".csv,.json,.xlsx,.txt",
  maxFiles: r = 5,
  maxTotalSize: n = 50 * 1024 * 1024,
  // 50MB
  skipEmptyFiles: a = !0,
  disabled: s = !1,
  error: o
}) => {
  const l = _i(null), [u, c] = i.useState(!1), [d, p] = i.useState(
    null
  ), { uploadFiles: f, isUploading: h, addFiles: y, removeFile: m, clearFiles: E } = V1({
    onUploadComplete: (F) => {
      e(F);
    },
    onUploadError: (F) => {
      console.error("Upload error:", F), p(F);
    }
  }), g = O(
    (F) => {
      if (!F || F.length === 0)
        return;
      p(null);
      const Ct = Array.from(F), ge = y(
        Ct,
        t,
        r,
        n,
        a
      );
      if (ge.length > 0) {
        const Ei = [...f, ...ge].map((bi) => bi.file);
        e(Ei);
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
  ), b = O(
    (F) => {
      g(F.target.files), l.current && (l.current.value = "");
    },
    [g]
  ), A = O(
    (F) => {
      F.preventDefault(), s || c(!0);
    },
    [s]
  ), U = O((F) => {
    F.preventDefault(), c(!1);
  }, []), X = O(
    (F) => {
      F.preventDefault(), c(!1), !s && g(F.dataTransfer.files);
    },
    [s, g]
  ), I = O(() => {
    var F;
    s || (F = l.current) == null || F.click();
  }, [s]), ce = O(
    (F) => {
      m(F), p(null);
      const Ct = f.filter((ge) => ge.id !== F).map((ge) => ge.file);
      e(Ct);
    },
    [m, f, e]
  ), qe = O(() => {
    E(), p(null), e([]);
  }, [E, e]);
  return /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement(
    G1,
    {
      fileInputRef: l,
      accept: t,
      maxFiles: r,
      maxTotalSize: n,
      isDragOver: u,
      disabled: s,
      uploadFiles: f,
      onInputChange: b,
      onDragOver: A,
      onDragLeave: U,
      onDrop: X,
      onFileDialogOpen: I
    }
  ), (o || d) && /* @__PURE__ */ i.createElement(N, { negative: !0, size: "small" }, /* @__PURE__ */ i.createElement(S, { name: "exclamation triangle" }), o || d), f.length > 0 && /* @__PURE__ */ i.createElement(
    H1,
    {
      uploadFiles: f,
      isUploading: h,
      handleRemoveFile: ce,
      handleClearFiles: qe
    }
  ));
}, K1 = () => {
  const { taskId: e } = yi(), [t, r] = L(null), [n, a] = L([]), [s, o] = L(!1), [l, u] = L(null), c = (h) => {
    var m;
    const y = ((m = h.target.files) == null ? void 0 : m[0]) || null;
    r(y || null);
  }, d = (h) => {
    a(h);
  }, p = () => {
    o(!1), r(null), a([]), u(null);
  }, f = async () => {
    if (!(!t && n.length === 0))
      try {
        await sb(
          e,
          t,
          n.length > 0 ? n : void 0,
          {
            onProgress: (h, y) => u({
              [h]: y
            }),
            onError: (h, y) => {
              console.error(`Error during ${y}:`, h);
            }
          }
        ), t && await ws(e, {
          autoExecute: !0,
          // Auto-execute import after validation
          onProgress: (h, y) => u({
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
  return /* @__PURE__ */ i.createElement(
    ie,
    {
      open: s,
      onOpen: () => o(!0),
      onClose: p,
      size: "small",
      closeIcon: !0,
      trigger: /* @__PURE__ */ i.createElement(B, { icon: "upload", size: "tiny", content: "Upload Content" })
    },
    /* @__PURE__ */ i.createElement(fe, { icon: !0 }, /* @__PURE__ */ i.createElement(S, { name: "upload" }), "Upload Metadata & Files"),
    /* @__PURE__ */ i.createElement(ie.Content, null, /* @__PURE__ */ i.createElement(be, { onSubmit: f }, /* @__PURE__ */ i.createElement(be.Field, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "fileInput" }, "Select Metadata File (Optional)"), /* @__PURE__ */ i.createElement(
      "input",
      {
        id: "fileInput",
        type: "file",
        onChange: c,
        accept: ".csv"
      }
    ), t && /* @__PURE__ */ i.createElement("div", { style: { marginTop: "0.5rem", color: "#666" } }, "Selected: ", t.name)), /* @__PURE__ */ i.createElement(be.Field, null, /* @__PURE__ */ i.createElement(
      "div",
      {
        style: {
          marginBottom: "8px",
          fontSize: "14px",
          fontWeight: "bold"
        }
      },
      "Additional Files (Optional)"
    ), /* @__PURE__ */ i.createElement(
      vi,
      {
        value: n,
        onChange: d,
        accept: "*",
        maxTotalSize: 10 * 1024 * 1024 * 1024,
        maxFiles: 100
      }
    )))),
    /* @__PURE__ */ i.createElement(ie.Actions, null, /* @__PURE__ */ i.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: ".5rem"
        }
      },
      l && /* @__PURE__ */ i.createElement(ys, { progress: l }),
      /* @__PURE__ */ i.createElement(B, { onClick: p, color: "grey" }, /* @__PURE__ */ i.createElement(S, { name: "cancel" }), "Cancel"),
      /* @__PURE__ */ i.createElement(
        B,
        {
          onClick: f,
          color: "blue",
          disabled: !t && n.length === 0
        },
        /* @__PURE__ */ i.createElement(S, { name: "upload" }),
        "Upload"
      )
    ))
  );
}, Y1 = ({ taskId: e }) => {
  var f, h, y, m, E, g;
  const [t, r] = L(null), { getStatus: n, isGettingStatus: a, runBulkImport: s, isBulkImporting: o, error: l } = Ts(e, { onStatusChangeSuccess: r });
  if (Ue(() => {
    n();
  }, [n]), a || o)
    return /* @__PURE__ */ i.createElement(vs, null);
  if (!t)
    return /* @__PURE__ */ i.createElement(N, { warning: !0, icon: !0 }, /* @__PURE__ */ i.createElement(S, { name: "search" }), /* @__PURE__ */ i.createElement(N.Content, null, /* @__PURE__ */ i.createElement(N.Header, null, "Task Not Found"), "The requested task could not be found."));
  const u = ((f = t.records_status) == null ? void 0 : f.total_records) || 0, c = ((h = t.records_status) == null ? void 0 : h.validated) || 0, d = ((y = t.records_status) == null ? void 0 : y.success) || 0, p = (((m = t.records_status) == null ? void 0 : m["import failed"]) || 0) + (((E = t.records_status) == null ? void 0 : E["validation failed"]) || 0) + (((g = t.records_status) == null ? void 0 : g["serializer validation failed"]) || 0);
  return /* @__PURE__ */ i.createElement(L1, { taskId: e }, /* @__PURE__ */ i.createElement(Ri, { fluid: !0, verticalAlign: "top" }, l && /* @__PURE__ */ i.createElement(N, { negative: !0, icon: !0 }, /* @__PURE__ */ i.createElement(S, { name: "exclamation triangle" }), /* @__PURE__ */ i.createElement(N.Content, null, /* @__PURE__ */ i.createElement(N.Header, null, "Error"), (l == null ? void 0 : l.message) || "An unknown error occurred")), /* @__PURE__ */ i.createElement(M, null, /* @__PURE__ */ i.createElement(M.Row, { verticalAlign: "top" }, /* @__PURE__ */ i.createElement(M.Column, { width: 8, verticalAlign: "middle" }, /* @__PURE__ */ i.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: ".5rem"
      }
    },
    /* @__PURE__ */ i.createElement(S, { name: "tasks", circular: !0, size: "big" }),
    /* @__PURE__ */ i.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }
      },
      /* @__PURE__ */ i.createElement(fe, { as: "h2" }, /* @__PURE__ */ i.createElement(fe.Content, null, t.title)),
      t.status && /* @__PURE__ */ i.createElement(Es, { size: "large", status: t.status }, De(t.status))
    )
  )), /* @__PURE__ */ i.createElement(M.Column, { width: 8, textAlign: "right" }, /* @__PURE__ */ i.createElement(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: "1rem"
      }
    },
    /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement(
      B,
      {
        size: "tiny",
        color: "blue",
        icon: "refresh",
        content: "Refresh",
        onClick: () => n(),
        loading: a
      }
    ), /* @__PURE__ */ i.createElement(K1, null), /* @__PURE__ */ i.createElement(
      B,
      {
        size: "tiny",
        color: "green",
        icon: "play",
        onClick: async () => {
          await s(), await n();
        },
        loading: o,
        content: "Run Task"
      }
    ))
  ))), t.description && /* @__PURE__ */ i.createElement(M.Row, null, /* @__PURE__ */ i.createElement(M.Column, { width: 16 }, /* @__PURE__ */ i.createElement(N, { info: !0, icon: !0, size: "small" }, /* @__PURE__ */ i.createElement(S, { name: "info circle" }), /* @__PURE__ */ i.createElement(N.Content, null, /* @__PURE__ */ i.createElement(N.Header, null, "Notes"), t.description))))), u > 0 && /* @__PURE__ */ i.createElement(K, { basic: !0 }, /* @__PURE__ */ i.createElement(
    k1,
    {
      totalRecords: u,
      validatedRecords: c,
      errorRecords: p,
      successRecords: d
    }
  ))), /* @__PURE__ */ i.createElement(q1, null));
}, ux = {
  Search: mi,
  TaskDetails: Y1
}, cx = {
  CREATED: "created",
  VALIDATING: "validating",
  SERIALIZER_VALIDATION_FAILED: "serializer validation failed",
  VALIDATION_FAILED: "validation failed",
  VALIDATED: "validated",
  IMPORT_FAILED: "import failed",
  IMPORTED: "success"
}, dx = {
  CREATED: "created",
  VALIDATING: "validating",
  VALIDATION_FAILED: "validated with failures",
  VALIDATED: "validated",
  IMPORTING: "importing",
  IMPORT_FAILED: "imported with failures",
  SUCCESS: "success",
  DAMAGED: "damaged"
}, px = {
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
  ux as BulkImporter,
  vi as FileUploader,
  I1 as ImportModal,
  dx as ImporterTaskStates,
  cx as InvenioImporterRecordStatus,
  px as OrchestrationStepsEnum,
  mi as Search,
  Y1 as TaskDetails,
  j1 as TaskRecordItem,
  De as capitalizeFirstLetter,
  ox as createSearchApi,
  lx as createSearchApiConfig,
  Bt as formatDate,
  $r as formatFileSize,
  YE as getCsrfToken,
  WE as getStatusColor,
  bs as getTotalSize,
  Ss as getTotalSizeFormatted,
  V1 as useFileUploader
};
