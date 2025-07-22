import i, { Component as L, useContext as P, useEffect as ut, useCallback as A, useState as M, useRef as Si, Fragment as $i, createContext as _i } from "react";
import b, { OverridableContext as xi } from "react-overridable";
import Ye from "axios";
import _e from "qs";
import { connect as R, Provider as Ci } from "react-redux";
import { Label as ae, Icon as I, Input as Nn, Button as k, List as me, Checkbox as Bn, Card as z, Segment as he, Header as ge, Menu as Re, Pagination as wi, Item as Ee, Loader as zn, Dropdown as le, Image as Fi, TableRow as ct, TableCell as Y, Table as Qn, TableHeader as Mn, TableHeaderCell as W, TableBody as jn, Message as U, Progress as We, Form as De, Modal as oe, ModalHeader as Ti, ModalContent as Ai, ModalActions as Ii, Grid as B, Popup as Ar, Statistic as X, Divider as Oi } from "semantic-ui-react";
import { combineReducers as Pi, createStore as Ri, applyMiddleware as Di } from "redux";
import ki from "redux-thunk";
import Li from "lodash";
import { TextField as Ui, SelectField as Tt, TextAreaField as Ni, BaseForm as Bi } from "react-invenio-forms";
import { useFormikContext as zi } from "formik";
var qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function D(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qi = Object.prototype;
function Mi(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Qi;
  return e === r;
}
var dt = Mi;
function ji(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var qn = ji, qi = qn, Gi = qi(Object.keys, Object), Vi = Gi, Hi = dt, Ki = Vi, Yi = Object.prototype, Wi = Yi.hasOwnProperty;
function Zi(e) {
  if (!Hi(e))
    return Ki(e);
  var t = [];
  for (var r in Object(e))
    Wi.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Gn = Zi, Ji = typeof qe == "object" && qe && qe.Object === Object && qe, Vn = Ji, Xi = Vn, eo = typeof self == "object" && self && self.Object === Object && self, to = Xi || eo || Function("return this")(), ee = to, ro = ee, no = ro.Symbol, xe = no, Ir = xe, Hn = Object.prototype, ao = Hn.hasOwnProperty, so = Hn.toString, Ie = Ir ? Ir.toStringTag : void 0;
function io(e) {
  var t = ao.call(e, Ie), r = e[Ie];
  try {
    e[Ie] = void 0;
    var n = !0;
  } catch {
  }
  var a = so.call(e);
  return n && (t ? e[Ie] = r : delete e[Ie]), a;
}
var oo = io, lo = Object.prototype, uo = lo.toString;
function co(e) {
  return uo.call(e);
}
var po = co, Or = xe, fo = oo, ho = po, go = "[object Null]", mo = "[object Undefined]", Pr = Or ? Or.toStringTag : void 0;
function yo(e) {
  return e == null ? e === void 0 ? mo : go : Pr && Pr in Object(e) ? fo(e) : ho(e);
}
var ce = yo;
function vo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var se = vo;
const Eo = /* @__PURE__ */ D(se);
var bo = ce, So = se, $o = "[object AsyncFunction]", _o = "[object Function]", xo = "[object GeneratorFunction]", Co = "[object Proxy]";
function wo(e) {
  if (!So(e))
    return !1;
  var t = bo(e);
  return t == _o || t == xo || t == $o || t == Co;
}
var Kn = wo, Fo = ee, To = Fo["__core-js_shared__"], Ao = To, At = Ao, Rr = function() {
  var e = /[^.]+$/.exec(At && At.keys && At.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Io(e) {
  return !!Rr && Rr in e;
}
var Oo = Io, Po = Function.prototype, Ro = Po.toString;
function Do(e) {
  if (e != null) {
    try {
      return Ro.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Yn = Do, ko = Kn, Lo = Oo, Uo = se, No = Yn, Bo = /[\\^$.*+?()[\]{}|]/g, zo = /^\[object .+?Constructor\]$/, Qo = Function.prototype, Mo = Object.prototype, jo = Qo.toString, qo = Mo.hasOwnProperty, Go = RegExp(
  "^" + jo.call(qo).replace(Bo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Vo(e) {
  if (!Uo(e) || Lo(e))
    return !1;
  var t = ko(e) ? Go : zo;
  return t.test(No(e));
}
var Ho = Vo;
function Ko(e, t) {
  return e == null ? void 0 : e[t];
}
var Yo = Ko, Wo = Ho, Zo = Yo;
function Jo(e, t) {
  var r = Zo(e, t);
  return Wo(r) ? r : void 0;
}
var ye = Jo, Xo = ye, el = ee, tl = Xo(el, "DataView"), rl = tl, nl = ye, al = ee, sl = nl(al, "Map"), Wt = sl, il = ye, ol = ee, ll = il(ol, "Promise"), ul = ll, cl = ye, dl = ee, pl = cl(dl, "Set"), fl = pl, hl = ye, gl = ee, ml = hl(gl, "WeakMap"), yl = ml, Dt = rl, kt = Wt, Lt = ul, Ut = fl, Nt = yl, Wn = ce, Ce = Yn, Dr = "[object Map]", vl = "[object Object]", kr = "[object Promise]", Lr = "[object Set]", Ur = "[object WeakMap]", Nr = "[object DataView]", El = Ce(Dt), bl = Ce(kt), Sl = Ce(Lt), $l = Ce(Ut), _l = Ce(Nt), pe = Wn;
(Dt && pe(new Dt(new ArrayBuffer(1))) != Nr || kt && pe(new kt()) != Dr || Lt && pe(Lt.resolve()) != kr || Ut && pe(new Ut()) != Lr || Nt && pe(new Nt()) != Ur) && (pe = function(e) {
  var t = Wn(e), r = t == vl ? e.constructor : void 0, n = r ? Ce(r) : "";
  if (n)
    switch (n) {
      case El:
        return Nr;
      case bl:
        return Dr;
      case Sl:
        return kr;
      case $l:
        return Lr;
      case _l:
        return Ur;
    }
  return t;
});
var Le = pe;
function xl(e) {
  return e != null && typeof e == "object";
}
var te = xl, Cl = ce, wl = te, Fl = "[object Arguments]";
function Tl(e) {
  return wl(e) && Cl(e) == Fl;
}
var Al = Tl, Br = Al, Il = te, Zn = Object.prototype, Ol = Zn.hasOwnProperty, Pl = Zn.propertyIsEnumerable, Rl = Br(function() {
  return arguments;
}()) ? Br : function(e) {
  return Il(e) && Ol.call(e, "callee") && !Pl.call(e, "callee");
}, pt = Rl, Dl = Array.isArray, j = Dl;
const Jn = /* @__PURE__ */ D(j);
var kl = 9007199254740991;
function Ll(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= kl;
}
var Zt = Ll, Ul = Kn, Nl = Zt;
function Bl(e) {
  return e != null && Nl(e.length) && !Ul(e);
}
var ft = Bl, Xe = { exports: {} };
function zl() {
  return !1;
}
var Ql = zl;
Xe.exports;
(function(e, t) {
  var r = ee, n = Ql, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, o = s && s.exports === a, l = o ? r.Buffer : void 0, u = l ? l.isBuffer : void 0, c = u || n;
  e.exports = c;
})(Xe, Xe.exports);
var ht = Xe.exports, Ml = ce, jl = Zt, ql = te, Gl = "[object Arguments]", Vl = "[object Array]", Hl = "[object Boolean]", Kl = "[object Date]", Yl = "[object Error]", Wl = "[object Function]", Zl = "[object Map]", Jl = "[object Number]", Xl = "[object Object]", eu = "[object RegExp]", tu = "[object Set]", ru = "[object String]", nu = "[object WeakMap]", au = "[object ArrayBuffer]", su = "[object DataView]", iu = "[object Float32Array]", ou = "[object Float64Array]", lu = "[object Int8Array]", uu = "[object Int16Array]", cu = "[object Int32Array]", du = "[object Uint8Array]", pu = "[object Uint8ClampedArray]", fu = "[object Uint16Array]", hu = "[object Uint32Array]", T = {};
T[iu] = T[ou] = T[lu] = T[uu] = T[cu] = T[du] = T[pu] = T[fu] = T[hu] = !0;
T[Gl] = T[Vl] = T[au] = T[Hl] = T[su] = T[Kl] = T[Yl] = T[Wl] = T[Zl] = T[Jl] = T[Xl] = T[eu] = T[tu] = T[ru] = T[nu] = !1;
function gu(e) {
  return ql(e) && jl(e.length) && !!T[Ml(e)];
}
var mu = gu;
function yu(e) {
  return function(t) {
    return e(t);
  };
}
var Jt = yu, et = { exports: {} };
et.exports;
(function(e, t) {
  var r = Vn, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, o = s && r.process, l = function() {
    try {
      var u = a && a.require && a.require("util").types;
      return u || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(et, et.exports);
var Xt = et.exports, vu = mu, Eu = Jt, zr = Xt, Qr = zr && zr.isTypedArray, bu = Qr ? Eu(Qr) : vu, er = bu, Su = Gn, $u = Le, _u = pt, xu = j, Cu = ft, wu = ht, Fu = dt, Tu = er, Au = "[object Map]", Iu = "[object Set]", Ou = Object.prototype, Pu = Ou.hasOwnProperty;
function Ru(e) {
  if (e == null)
    return !0;
  if (Cu(e) && (xu(e) || typeof e == "string" || typeof e.splice == "function" || wu(e) || Tu(e) || _u(e)))
    return !e.length;
  var t = $u(e);
  if (t == Au || t == Iu)
    return !e.size;
  if (Fu(e))
    return !Su(e).length;
  for (var r in e)
    if (Pu.call(e, r))
      return !1;
  return !0;
}
var Du = Ru;
const re = /* @__PURE__ */ D(Du);
var ku = ce, Lu = te, Uu = "[object Symbol]";
function Nu(e) {
  return typeof e == "symbol" || Lu(e) && ku(e) == Uu;
}
var tr = Nu, Bu = j, zu = tr, Qu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Mu = /^\w*$/;
function ju(e, t) {
  if (Bu(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || zu(e) ? !0 : Mu.test(e) || !Qu.test(e) || t != null && e in Object(t);
}
var rr = ju, qu = ye, Gu = qu(Object, "create"), gt = Gu, Mr = gt;
function Vu() {
  this.__data__ = Mr ? Mr(null) : {}, this.size = 0;
}
var Hu = Vu;
function Ku(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Yu = Ku, Wu = gt, Zu = "__lodash_hash_undefined__", Ju = Object.prototype, Xu = Ju.hasOwnProperty;
function ec(e) {
  var t = this.__data__;
  if (Wu) {
    var r = t[e];
    return r === Zu ? void 0 : r;
  }
  return Xu.call(t, e) ? t[e] : void 0;
}
var tc = ec, rc = gt, nc = Object.prototype, ac = nc.hasOwnProperty;
function sc(e) {
  var t = this.__data__;
  return rc ? t[e] !== void 0 : ac.call(t, e);
}
var ic = sc, oc = gt, lc = "__lodash_hash_undefined__";
function uc(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = oc && t === void 0 ? lc : t, this;
}
var cc = uc, dc = Hu, pc = Yu, fc = tc, hc = ic, gc = cc;
function we(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
we.prototype.clear = dc;
we.prototype.delete = pc;
we.prototype.get = fc;
we.prototype.has = hc;
we.prototype.set = gc;
var mc = we;
function yc() {
  this.__data__ = [], this.size = 0;
}
var vc = yc;
function Ec(e, t) {
  return e === t || e !== e && t !== t;
}
var mt = Ec, bc = mt;
function Sc(e, t) {
  for (var r = e.length; r--; )
    if (bc(e[r][0], t))
      return r;
  return -1;
}
var yt = Sc, $c = yt, _c = Array.prototype, xc = _c.splice;
function Cc(e) {
  var t = this.__data__, r = $c(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : xc.call(t, r, 1), --this.size, !0;
}
var wc = Cc, Fc = yt;
function Tc(e) {
  var t = this.__data__, r = Fc(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Ac = Tc, Ic = yt;
function Oc(e) {
  return Ic(this.__data__, e) > -1;
}
var Pc = Oc, Rc = yt;
function Dc(e, t) {
  var r = this.__data__, n = Rc(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var kc = Dc, Lc = vc, Uc = wc, Nc = Ac, Bc = Pc, zc = kc;
function Fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Fe.prototype.clear = Lc;
Fe.prototype.delete = Uc;
Fe.prototype.get = Nc;
Fe.prototype.has = Bc;
Fe.prototype.set = zc;
var vt = Fe, jr = mc, Qc = vt, Mc = Wt;
function jc() {
  this.size = 0, this.__data__ = {
    hash: new jr(),
    map: new (Mc || Qc)(),
    string: new jr()
  };
}
var qc = jc;
function Gc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Vc = Gc, Hc = Vc;
function Kc(e, t) {
  var r = e.__data__;
  return Hc(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Et = Kc, Yc = Et;
function Wc(e) {
  var t = Yc(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Zc = Wc, Jc = Et;
function Xc(e) {
  return Jc(this, e).get(e);
}
var ed = Xc, td = Et;
function rd(e) {
  return td(this, e).has(e);
}
var nd = rd, ad = Et;
function sd(e, t) {
  var r = ad(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var id = sd, od = qc, ld = Zc, ud = ed, cd = nd, dd = id;
function Te(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Te.prototype.clear = od;
Te.prototype.delete = ld;
Te.prototype.get = ud;
Te.prototype.has = cd;
Te.prototype.set = dd;
var nr = Te, Xn = nr, pd = "Expected a function";
function ar(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(pd);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(a))
      return s.get(a);
    var o = e.apply(this, n);
    return r.cache = s.set(a, o) || s, o;
  };
  return r.cache = new (ar.Cache || Xn)(), r;
}
ar.Cache = Xn;
var fd = ar, hd = fd, gd = 500;
function md(e) {
  var t = hd(e, function(n) {
    return r.size === gd && r.clear(), n;
  }), r = t.cache;
  return t;
}
var yd = md, vd = yd, Ed = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bd = /\\(\\)?/g, Sd = vd(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ed, function(r, n, a, s) {
    t.push(a ? s.replace(bd, "$1") : n || r);
  }), t;
}), $d = Sd;
function _d(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var xd = _d, qr = xe, Cd = xd, wd = j, Fd = tr, Td = 1 / 0, Gr = qr ? qr.prototype : void 0, Vr = Gr ? Gr.toString : void 0;
function ea(e) {
  if (typeof e == "string")
    return e;
  if (wd(e))
    return Cd(e, ea) + "";
  if (Fd(e))
    return Vr ? Vr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Td ? "-0" : t;
}
var Ad = ea, Id = Ad;
function Od(e) {
  return e == null ? "" : Id(e);
}
var Ue = Od, Pd = j, Rd = rr, Dd = $d, kd = Ue;
function Ld(e, t) {
  return Pd(e) ? e : Rd(e, t) ? [e] : Dd(kd(e));
}
var bt = Ld, Ud = tr, Nd = 1 / 0;
function Bd(e) {
  if (typeof e == "string" || Ud(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Nd ? "-0" : t;
}
var Ne = Bd, zd = bt, Qd = Ne;
function Md(e, t) {
  t = zd(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Qd(t[r++])];
  return r && r == n ? e : void 0;
}
var sr = Md, jd = sr;
function qd(e, t, r) {
  var n = e == null ? void 0 : jd(e, t);
  return n === void 0 ? r : n;
}
var ta = qd;
const Oe = /* @__PURE__ */ D(ta);
function Gd(e, t) {
  return e != null && t in Object(e);
}
var Vd = Gd, Hd = 9007199254740991, Kd = /^(?:0|[1-9]\d*)$/;
function Yd(e, t) {
  var r = typeof e;
  return t = t ?? Hd, !!t && (r == "number" || r != "symbol" && Kd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var St = Yd, Wd = bt, Zd = pt, Jd = j, Xd = St, ep = Zt, tp = Ne;
function rp(e, t, r) {
  t = Wd(t, e);
  for (var n = -1, a = t.length, s = !1; ++n < a; ) {
    var o = tp(t[n]);
    if (!(s = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return s || ++n != a ? s : (a = e == null ? 0 : e.length, !!a && ep(a) && Xd(o, a) && (Jd(e) || Zd(e)));
}
var ra = rp, np = Vd, ap = ra;
function sp(e, t) {
  return e != null && ap(e, t, np);
}
var ir = sp;
const ip = /* @__PURE__ */ D(ir);
var op = ye, lp = function() {
  try {
    var e = op(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), na = lp, Hr = na;
function up(e, t, r) {
  t == "__proto__" && Hr ? Hr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var $t = up, cp = $t, dp = mt, pp = Object.prototype, fp = pp.hasOwnProperty;
function hp(e, t, r) {
  var n = e[t];
  (!(fp.call(e, t) && dp(n, r)) || r === void 0 && !(t in e)) && cp(e, t, r);
}
var or = hp, gp = or, mp = $t;
function yp(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var l = t[s], u = n ? n(r[l], e[l], l, r, e) : void 0;
    u === void 0 && (u = e[l]), a ? mp(r, l, u) : gp(r, l, u);
  }
  return r;
}
var Be = yp;
function vp(e) {
  return e;
}
var lr = vp;
function Ep(e, t, r) {
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
var bp = Ep, Sp = bp, Kr = Math.max;
function $p(e, t, r) {
  return t = Kr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, s = Kr(n.length - t, 0), o = Array(s); ++a < s; )
      o[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(o), Sp(e, this, l);
  };
}
var aa = $p;
function _p(e) {
  return function() {
    return e;
  };
}
var xp = _p, Cp = xp, Yr = na, wp = lr, Fp = Yr ? function(e, t) {
  return Yr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Cp(t),
    writable: !0
  });
} : wp, Tp = Fp, Ap = 800, Ip = 16, Op = Date.now;
function Pp(e) {
  var t = 0, r = 0;
  return function() {
    var n = Op(), a = Ip - (n - r);
    if (r = n, a > 0) {
      if (++t >= Ap)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Rp = Pp, Dp = Tp, kp = Rp, Lp = kp(Dp), sa = Lp, Up = lr, Np = aa, Bp = sa;
function zp(e, t) {
  return Bp(Np(e, t, Up), e + "");
}
var Qp = zp, Mp = mt, jp = ft, qp = St, Gp = se;
function Vp(e, t, r) {
  if (!Gp(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? jp(r) && qp(t, r.length) : n == "string" && t in r) ? Mp(r[t], e) : !1;
}
var Hp = Vp, Kp = Qp, Yp = Hp;
function Wp(e) {
  return Kp(function(t, r) {
    var n = -1, a = r.length, s = a > 1 ? r[a - 1] : void 0, o = a > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, o && Yp(r[0], r[1], o) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++n < a; ) {
      var l = r[n];
      l && e(t, l, n, s);
    }
    return t;
  });
}
var Zp = Wp;
function Jp(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Xp = Jp, ef = Xp, tf = pt, rf = j, nf = ht, af = St, sf = er, of = Object.prototype, lf = of.hasOwnProperty;
function uf(e, t) {
  var r = rf(e), n = !r && tf(e), a = !r && !n && nf(e), s = !r && !n && !a && sf(e), o = r || n || a || s, l = o ? ef(e.length, String) : [], u = l.length;
  for (var c in e)
    (t || lf.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    af(c, u))) && l.push(c);
  return l;
}
var ia = uf;
function cf(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var df = cf, pf = se, ff = dt, hf = df, gf = Object.prototype, mf = gf.hasOwnProperty;
function yf(e) {
  if (!pf(e))
    return hf(e);
  var t = ff(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !mf.call(e, n)) || r.push(n);
  return r;
}
var vf = yf, Ef = ia, bf = vf, Sf = ft;
function $f(e) {
  return Sf(e) ? Ef(e, !0) : bf(e);
}
var _t = $f, _f = Be, xf = Zp, Cf = _t, wf = xf(function(e, t) {
  _f(t, Cf(t), e);
}), Ff = wf, Tf = Ff;
const tt = /* @__PURE__ */ D(Tf);
function Af(e) {
  return e && e.length ? e[0] : void 0;
}
var If = Af;
const Of = /* @__PURE__ */ D(If);
var Pf = or, Rf = bt, Df = St, Wr = se, kf = Ne;
function Lf(e, t, r, n) {
  if (!Wr(e))
    return e;
  t = Rf(t, e);
  for (var a = -1, s = t.length, o = s - 1, l = e; l != null && ++a < s; ) {
    var u = kf(t[a]), c = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != o) {
      var d = l[u];
      c = n ? n(d, u, l) : void 0, c === void 0 && (c = Wr(d) ? d : Df(t[a + 1]) ? [] : {});
    }
    Pf(l, u, c), l = l[u];
  }
  return e;
}
var Uf = Lf, Nf = sr, Bf = Uf, zf = bt;
function Qf(e, t, r) {
  for (var n = -1, a = t.length, s = {}; ++n < a; ) {
    var o = t[n], l = Nf(e, o);
    r(l, o) && Bf(s, zf(o, e), l);
  }
  return s;
}
var Mf = Qf, jf = Mf, qf = ir;
function Gf(e, t) {
  return jf(e, t, function(r, n) {
    return qf(e, n);
  });
}
var Vf = Gf;
function Hf(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var ur = Hf, Zr = xe, Kf = pt, Yf = j, Jr = Zr ? Zr.isConcatSpreadable : void 0;
function Wf(e) {
  return Yf(e) || Kf(e) || !!(Jr && e && e[Jr]);
}
var Zf = Wf, Jf = ur, Xf = Zf;
function oa(e, t, r, n, a) {
  var s = -1, o = e.length;
  for (r || (r = Xf), a || (a = []); ++s < o; ) {
    var l = e[s];
    t > 0 && r(l) ? t > 1 ? oa(l, t - 1, r, n, a) : Jf(a, l) : n || (a[a.length] = l);
  }
  return a;
}
var eh = oa, th = eh;
function rh(e) {
  var t = e == null ? 0 : e.length;
  return t ? th(e, 1) : [];
}
var nh = rh, ah = nh, sh = aa, ih = sa;
function oh(e) {
  return ih(sh(e, void 0, ah), e + "");
}
var lh = oh, uh = Vf, ch = lh, dh = ch(function(e, t) {
  return e == null ? {} : uh(e, t);
}), ph = dh;
const fh = /* @__PURE__ */ D(ph);
var hh = vt;
function gh() {
  this.__data__ = new hh(), this.size = 0;
}
var mh = gh;
function yh(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var vh = yh;
function Eh(e) {
  return this.__data__.get(e);
}
var bh = Eh;
function Sh(e) {
  return this.__data__.has(e);
}
var $h = Sh, _h = vt, xh = Wt, Ch = nr, wh = 200;
function Fh(e, t) {
  var r = this.__data__;
  if (r instanceof _h) {
    var n = r.__data__;
    if (!xh || n.length < wh - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ch(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Th = Fh, Ah = vt, Ih = mh, Oh = vh, Ph = bh, Rh = $h, Dh = Th;
function Ae(e) {
  var t = this.__data__ = new Ah(e);
  this.size = t.size;
}
Ae.prototype.clear = Ih;
Ae.prototype.delete = Oh;
Ae.prototype.get = Ph;
Ae.prototype.has = Rh;
Ae.prototype.set = Dh;
var cr = Ae;
function kh(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Lh = kh, Uh = ia, Nh = Gn, Bh = ft;
function zh(e) {
  return Bh(e) ? Uh(e) : Nh(e);
}
var ze = zh, Qh = Be, Mh = ze;
function jh(e, t) {
  return e && Qh(t, Mh(t), e);
}
var qh = jh, Gh = Be, Vh = _t;
function Hh(e, t) {
  return e && Gh(t, Vh(t), e);
}
var Kh = Hh, rt = { exports: {} };
rt.exports;
(function(e, t) {
  var r = ee, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, o = s ? r.Buffer : void 0, l = o ? o.allocUnsafe : void 0;
  function u(c, d) {
    if (d)
      return c.slice();
    var p = c.length, h = l ? l(p) : new c.constructor(p);
    return c.copy(h), h;
  }
  e.exports = u;
})(rt, rt.exports);
var Yh = rt.exports;
function Wh(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Zh = Wh;
function Jh(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (s[a++] = o);
  }
  return s;
}
var Xh = Jh;
function eg() {
  return [];
}
var la = eg, tg = Xh, rg = la, ng = Object.prototype, ag = ng.propertyIsEnumerable, Xr = Object.getOwnPropertySymbols, sg = Xr ? function(e) {
  return e == null ? [] : (e = Object(e), tg(Xr(e), function(t) {
    return ag.call(e, t);
  }));
} : rg, dr = sg, ig = Be, og = dr;
function lg(e, t) {
  return ig(e, og(e), t);
}
var ug = lg, cg = qn, dg = cg(Object.getPrototypeOf, Object), ua = dg, pg = ur, fg = ua, hg = dr, gg = la, mg = Object.getOwnPropertySymbols, yg = mg ? function(e) {
  for (var t = []; e; )
    pg(t, hg(e)), e = fg(e);
  return t;
} : gg, ca = yg, vg = Be, Eg = ca;
function bg(e, t) {
  return vg(e, Eg(e), t);
}
var Sg = bg, $g = ur, _g = j;
function xg(e, t, r) {
  var n = t(e);
  return _g(e) ? n : $g(n, r(e));
}
var da = xg, Cg = da, wg = dr, Fg = ze;
function Tg(e) {
  return Cg(e, Fg, wg);
}
var pa = Tg, Ag = da, Ig = ca, Og = _t;
function Pg(e) {
  return Ag(e, Og, Ig);
}
var Rg = Pg, Dg = Object.prototype, kg = Dg.hasOwnProperty;
function Lg(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && kg.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Ug = Lg, Ng = ee, Bg = Ng.Uint8Array, fa = Bg, en = fa;
function zg(e) {
  var t = new e.constructor(e.byteLength);
  return new en(t).set(new en(e)), t;
}
var pr = zg, Qg = pr;
function Mg(e, t) {
  var r = t ? Qg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var jg = Mg, qg = /\w*$/;
function Gg(e) {
  var t = new e.constructor(e.source, qg.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Vg = Gg, tn = xe, rn = tn ? tn.prototype : void 0, nn = rn ? rn.valueOf : void 0;
function Hg(e) {
  return nn ? Object(nn.call(e)) : {};
}
var Kg = Hg, Yg = pr;
function Wg(e, t) {
  var r = t ? Yg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Zg = Wg, Jg = pr, Xg = jg, em = Vg, tm = Kg, rm = Zg, nm = "[object Boolean]", am = "[object Date]", sm = "[object Map]", im = "[object Number]", om = "[object RegExp]", lm = "[object Set]", um = "[object String]", cm = "[object Symbol]", dm = "[object ArrayBuffer]", pm = "[object DataView]", fm = "[object Float32Array]", hm = "[object Float64Array]", gm = "[object Int8Array]", mm = "[object Int16Array]", ym = "[object Int32Array]", vm = "[object Uint8Array]", Em = "[object Uint8ClampedArray]", bm = "[object Uint16Array]", Sm = "[object Uint32Array]";
function $m(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case dm:
      return Jg(e);
    case nm:
    case am:
      return new n(+e);
    case pm:
      return Xg(e, r);
    case fm:
    case hm:
    case gm:
    case mm:
    case ym:
    case vm:
    case Em:
    case bm:
    case Sm:
      return rm(e, r);
    case sm:
      return new n();
    case im:
    case um:
      return new n(e);
    case om:
      return em(e);
    case lm:
      return new n();
    case cm:
      return tm(e);
  }
}
var _m = $m, xm = se, an = Object.create, Cm = function() {
  function e() {
  }
  return function(t) {
    if (!xm(t))
      return {};
    if (an)
      return an(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), wm = Cm, Fm = wm, Tm = ua, Am = dt;
function Im(e) {
  return typeof e.constructor == "function" && !Am(e) ? Fm(Tm(e)) : {};
}
var Om = Im, Pm = Le, Rm = te, Dm = "[object Map]";
function km(e) {
  return Rm(e) && Pm(e) == Dm;
}
var Lm = km, Um = Lm, Nm = Jt, sn = Xt, on = sn && sn.isMap, Bm = on ? Nm(on) : Um, zm = Bm, Qm = Le, Mm = te, jm = "[object Set]";
function qm(e) {
  return Mm(e) && Qm(e) == jm;
}
var Gm = qm, Vm = Gm, Hm = Jt, ln = Xt, un = ln && ln.isSet, Km = un ? Hm(un) : Vm, Ym = Km, Wm = cr, Zm = Lh, Jm = or, Xm = qh, ey = Kh, ty = Yh, ry = Zh, ny = ug, ay = Sg, sy = pa, iy = Rg, oy = Le, ly = Ug, uy = _m, cy = Om, dy = j, py = ht, fy = zm, hy = se, gy = Ym, my = ze, yy = _t, vy = 1, Ey = 2, by = 4, ha = "[object Arguments]", Sy = "[object Array]", $y = "[object Boolean]", _y = "[object Date]", xy = "[object Error]", ga = "[object Function]", Cy = "[object GeneratorFunction]", wy = "[object Map]", Fy = "[object Number]", ma = "[object Object]", Ty = "[object RegExp]", Ay = "[object Set]", Iy = "[object String]", Oy = "[object Symbol]", Py = "[object WeakMap]", Ry = "[object ArrayBuffer]", Dy = "[object DataView]", ky = "[object Float32Array]", Ly = "[object Float64Array]", Uy = "[object Int8Array]", Ny = "[object Int16Array]", By = "[object Int32Array]", zy = "[object Uint8Array]", Qy = "[object Uint8ClampedArray]", My = "[object Uint16Array]", jy = "[object Uint32Array]", C = {};
C[ha] = C[Sy] = C[Ry] = C[Dy] = C[$y] = C[_y] = C[ky] = C[Ly] = C[Uy] = C[Ny] = C[By] = C[wy] = C[Fy] = C[ma] = C[Ty] = C[Ay] = C[Iy] = C[Oy] = C[zy] = C[Qy] = C[My] = C[jy] = !0;
C[xy] = C[ga] = C[Py] = !1;
function Ze(e, t, r, n, a, s) {
  var o, l = t & vy, u = t & Ey, c = t & by;
  if (r && (o = a ? r(e, n, a, s) : r(e)), o !== void 0)
    return o;
  if (!hy(e))
    return e;
  var d = dy(e);
  if (d) {
    if (o = ly(e), !l)
      return ry(e, o);
  } else {
    var p = oy(e), h = p == ga || p == Cy;
    if (py(e))
      return ty(e, l);
    if (p == ma || p == ha || h && !a) {
      if (o = u || h ? {} : cy(e), !l)
        return u ? ay(e, ey(o, e)) : ny(e, Xm(o, e));
    } else {
      if (!C[p])
        return a ? e : {};
      o = uy(e, p, l);
    }
  }
  s || (s = new Wm());
  var g = s.get(e);
  if (g)
    return g;
  s.set(e, o), gy(e) ? e.forEach(function(S) {
    o.add(Ze(S, t, r, S, e, s));
  }) : fy(e) && e.forEach(function(S, f) {
    o.set(f, Ze(S, t, r, f, e, s));
  });
  var v = c ? u ? iy : sy : u ? yy : my, m = d ? void 0 : v(e);
  return Zm(m || e, function(S, f) {
    m && (f = S, S = e[f]), Jm(o, f, Ze(S, t, r, f, e, s));
  }), o;
}
var qy = Ze, Gy = qy, Vy = 1, Hy = 4;
function Ky(e) {
  return Gy(e, Vy | Hy);
}
var Yy = Ky;
const $e = /* @__PURE__ */ D(Yy);
var Wy = ce, Zy = te, Jy = "[object Boolean]";
function Xy(e) {
  return e === !0 || e === !1 || Zy(e) && Wy(e) == Jy;
}
var ev = Xy;
const tv = /* @__PURE__ */ D(ev);
var rv = ce, nv = j, av = te, sv = "[object String]";
function iv(e) {
  return typeof e == "string" || !nv(e) && av(e) && rv(e) == sv;
}
var ov = iv;
const lv = /* @__PURE__ */ D(ov);
var uv = ce, cv = te, dv = "[object Number]";
function pv(e) {
  return typeof e == "number" || cv(e) && uv(e) == dv;
}
var fv = pv;
const hv = /* @__PURE__ */ D(fv);
function fr() {
}
fr.prototype = new Error();
class cn {
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
    return tt(c, d), _e.stringify(c, {
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
function Ge(e, t) {
  return e.indexOf(t) === 0 && (e.length === t.length || e.indexOf(t + "&") === 0);
}
function It(e) {
  return _e.stringify({
    q: e
  });
}
function mv(e) {
  return _e.parse(e).q;
}
function ya(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = ya(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function dn(e, t) {
  const r = It(e), n = t.map((o) => It(o));
  let a = !1;
  const s = n.filter((o) => {
    const l = Ge(o, r), u = Ge(r, o);
    return l && !a && (a = !0), !l && !u;
  });
  if (!a)
    s.push(r);
  else if (e.length === 3) {
    const l = ya(e), u = It(l), c = s.some((d) => {
      const p = Ge(d, u), h = Ge(u, d);
      return p || h;
    });
    (re(s) || !c) && s.push(u);
  }
  return s.map((o) => mv(o));
}
const va = (e, t) => {
  if (re(e))
    return;
  if (!Jn(Of(e)))
    return dn(e, t);
  let r = t;
  for (const n of e)
    r = dn(n, r);
  return r;
}, Ea = (e, t, r) => {
  let n = fh(t, r);
  return re(n.filters) || (n.filters = va(n.filters, e.filters)), n;
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
}, ba = Object.keys(nt), yv = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, vv = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class Ev {
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
    return tt(c, d), _e.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class Sa {
  constructor(t) {
    this.axiosConfig = Oe(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = Ye.CancelToken;
  }
  validateAxiosConfig() {
    if (!ip(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = Oe(t, "interceptors.request", void 0), this.responseInterceptor = Oe(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: Ev,
      InvenioRequestSerializer: cn
    };
    return typeof t == "string" ? r[t] : t || cn;
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
    this.http = Ye.create(t), this.addInterceptors();
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
      const n = Ea(t, r.extras, ba);
      return re(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw Ye.isCancel(r) ? new fr() : r;
    }
  }
}
class bv {
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
          return hv(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const a = Jn(n) ? n : [n], s = ":", o = t.urlFilterSeparator, l = `[^\\${s}\\${o}]*`, u = `${l}\\${s}${l}`, c = `${u}(\\${o}${u})*`, d = new RegExp(`^${c}$`);
          return a.every((p) => String(p).match(d));
        }
        default:
          return !1;
      }
    };
  }
}
const Sv = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, pn = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class $v {
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
    const r = _e.parse(t, {
      ignoreQueryPrefix: !0
    }), n = {};
    return Object.entries(r).forEach((a) => {
      const s = a[0], o = a[1];
      n[s] = this._convertValue(s, o);
    }), n;
  }
}
class _v {
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
      return _e.stringify(n, {
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
      const a = $e(n);
      return Object.keys(r).forEach((s) => {
        a[s] = r[s];
      }), a;
    }, this.urlParamsMapping = Eo(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !tv(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !lv(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new bv(), this.urlParser = t.urlParser || new $v(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), a = this._mergeParamsIntoState(n, t), s = this._mapQueryStateToUrlParams(a);
    return pn(s), a;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      Sv(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    pn(r);
  }
}
const xv = "SET_QUERY_COMPONENT_INITIAL_STATE", $a = "SET_QUERY_STRING", hr = "SET_QUERY_SORTING", gr = "SET_QUERY_SORT_BY", mr = "SET_QUERY_SORT_ORDER", Qe = "SET_QUERY_STATE", _a = "SET_QUERY_PAGINATION_PAGE", xa = "SET_QUERY_PAGINATION_SIZE", Ca = "SET_QUERY_FILTERS", wa = "SET_QUERY_SUGGESTIONS", Fa = "SET_SUGGESTION_STRING", Ta = "CLEAR_QUERY_SUGGESTIONS", Aa = "RESULTS_LOADING", Ia = "RESULTS_FETCH_SUCCESS", Oa = "RESULTS_FETCH_ERROR", Bt = "RESULTS_UPDATE_LAYOUT", Pa = "RESET_QUERY", Cv = (e) => (t) => {
  e && t(Z({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, Ra = (e) => (t) => {
  t({
    type: Qe,
    payload: e
  }), t(Z());
}, Da = (e) => (t) => {
  t({
    type: $a,
    payload: e
  }), t(Z());
}, wv = (e, t) => (r) => {
  r({
    type: hr,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(Z());
}, Fv = (e) => (t) => {
  t({
    type: gr,
    payload: e
  }), t(Z());
}, Tv = (e) => (t) => {
  t({
    type: mr,
    payload: e
  }), t(Z());
}, Av = (e) => (t) => {
  t({
    type: _a,
    payload: e
  }), t(Z());
}, Iv = (e) => (t) => {
  t({
    type: xa,
    payload: e
  }), t(Z());
}, yr = (e) => (t) => {
  t({
    type: Ca,
    payload: e
  }), t(Z());
}, Ov = (e) => async (t, r, n) => {
  const a = n.urlHandlerApi;
  if (a) {
    await t({
      type: Bt,
      payload: e
    });
    const s = r().query;
    a.set(s);
  } else
    t({
      type: Bt,
      payload: e
    });
}, Pv = () => (e, t, r) => {
  e({
    type: Pa,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(Z());
}, Rv = (e, t, r, n) => {
  const a = t.urlHandlerApi;
  a && (r ? a.replace(e) : n && a.set(e));
}, Dv = (e, t, r, n) => {
  const a = r().query;
  t({
    type: Qe,
    payload: {
      ...a,
      ...e.newQueryState
    }
  });
  const s = $e(r().query), o = n.urlHandlerApi;
  return o && o.replace(s), delete e.newStateQuery, e;
}, kv = (e, t, r, n) => {
  function a(l, u, c, d) {
    l.queryString === "" ? (l.sortBy = c.defaultSortingOnEmptyQueryString.sortBy, l.sortOrder = c.defaultSortingOnEmptyQueryString.sortOrder) : (l.sortBy = u.initialSortBy, l.sortOrder = u.initialSortOrder), d({
      type: Qe,
      payload: l
    });
  }
  function s(l, u, c, d) {
    u.hasUserChangedSorting || a(l, u, c, d);
  }
  !re(r.defaultSortingOnEmptyQueryString) && s(e, t, r, n);
}, Z = function() {
  let {
    shouldUpdateUrlQueryString: e = !0,
    shouldReplaceUrlQueryString: t = !1
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return async (r, n, a) => {
    const s = n().app;
    let o = $e(n().query);
    kv(o, s, a, r), o = $e(n().query), Rv(o, a, t, e), r({
      type: Aa
    });
    try {
      let u = await a.searchApi.search(o);
      "newQueryState" in u && (u = Dv($e(u), r, n, a)), r({
        type: Ia,
        payload: {
          aggregations: u.aggregations,
          hits: u.hits,
          total: u.total
        }
      });
    } catch (l) {
      if (l instanceof fr) {
        console.debug(l);
        return;
      } else
        console.error(l), r({
          type: Oa,
          payload: {
            error: l
          }
        });
    }
  };
}, Lv = (e) => (t) => {
  t({
    type: Fa,
    payload: e
  }), t(Uv());
}, Uv = () => async (e, t, r) => {
  const n = $e(t().query), a = r.suggestionApi;
  try {
    const s = await a.search(n);
    e({
      type: wa,
      payload: {
        suggestions: s.suggestions
      }
    });
  } catch (s) {
    console.error("Could not load suggestions due to: " + s);
  }
}, Nv = () => (e) => {
  e({
    type: Ta,
    payload: {
      suggestions: []
    }
  });
}, Bv = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: Qe,
      payload: n
    }), e(Z({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, w = /* @__PURE__ */ i.createContext({}), zv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
    case hr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case gr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case mr:
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
    case $a:
      return {
        ...e,
        queryString: t.payload,
        page: 1
      };
    case hr:
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
    case mr:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case _a:
      return {
        ...e,
        page: t.payload
      };
    case xa:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case Ca:
      return {
        ...e,
        page: 1,
        filters: va(t.payload, e.filters)
      };
    case wa:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case Ta:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case Fa:
      return {
        ...e,
        suggestionString: t.payload
      };
    case xv:
      return {
        ...e,
        ...t.payload
      };
    case Qe:
      return {
        ...e,
        ...nt,
        ...Ea(nt, t.payload, ba)
      };
    case Bt:
      return {
        ...e,
        layout: t.payload
      };
    case Pa:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, Mv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Aa:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case Ia:
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
    case Oa:
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
var jv = Pi({
  app: zv,
  query: Qv,
  results: Mv
});
function fn(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: a,
    sortOrder: s
  } = t;
  return r !== a || n !== s;
}
function qv(e, t, r) {
  const n = fn(r, t), a = !re(e.defaultSortingOnEmptyQueryString);
  let s = !1;
  return a && (s = fn(r, e.defaultSortingOnEmptyQueryString)), n && s;
}
function Gv(e) {
  const t = {
    ...nt,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = qv(e, t, r), a = {
    ...vv,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, s = {
    ...yv,
    loading: e.searchOnInit
  };
  return {
    app: a,
    query: r,
    results: s
  };
}
function Vv(e) {
  const t = Gv(e);
  return Ri(jv, t, Di(ki.withExtraArgument(e)));
}
function hn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class vr extends L {
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
vr.defaultProps = {
  searchOnInit: !0,
  eventListenerEnabled: !1
};
vr.contextType = w;
var Hv = b.component("Bootstrap", vr);
const Kv = (e) => ({
  onAppInitialized: (t) => e(Cv(t)),
  updateQueryState: (t) => e(Ra(t)),
  searchOnUrlQueryStringChanged: () => e(Bv())
}), Yv = R(null, Kv)(Hv);
class Er extends L {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new _v(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = Vv(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
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
      buildUID: (u, c) => hn(u, c, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, l = hn("ReactSearchKit.children", a, t);
    return /* @__PURE__ */ i.createElement(w.Provider, {
      value: o
    }, /* @__PURE__ */ i.createElement(Ci, {
      store: this.store
    }, /* @__PURE__ */ i.createElement(Yv, {
      searchOnInit: s,
      eventListenerEnabled: n
    }, /* @__PURE__ */ i.createElement(b, {
      id: l
    }, r))));
  }
}
Er.defaultProps = {
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
Er.contextType = w;
var Wv = b.component("ReactSearchKit", Er);
class ka extends L {
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
    return !!t.length && /* @__PURE__ */ i.createElement(La, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
ka.defaultProps = {
  overridableId: ""
};
const La = (e) => {
  let {
    overridableId: t,
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  } = e;
  const {
    buildUID: s
  } = P(w);
  return /* @__PURE__ */ i.createElement(b, {
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
      }, u, /* @__PURE__ */ i.createElement(I, {
        name: "delete"
      }))
    );
  })));
};
La.defaultProps = {
  overridableId: ""
};
var Zv = b.component("ActiveFilters", ka);
const Jv = (e) => ({
  updateQueryFilters: (t) => e(yr(t))
});
R((e) => ({
  filters: e.query.filters
}), Jv)(Zv);
function Xv(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var eE = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
Xv(eE);
class Ua extends L {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? Li.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ i.createElement(rE, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
Ua.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const tE = (e) => /* @__PURE__ */ i.createElement(Ua, Object.assign({
  key: e.queryString
}, e)), rE = (e) => {
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
  } = P(w), c = (p, h) => {
    o();
  }, d = (p, h) => {
    p.key === "Enter" && o();
  };
  return /* @__PURE__ */ i.createElement(b, Object.assign({
    id: u("AutocompleteSearchBar.element", t)
  }, l), /* @__PURE__ */ i.createElement("div", {
    className: "AutoCompleteText"
  }, /* @__PURE__ */ i.createElement(Nn, {
    action: {
      content: "Search",
      onClick: c
    },
    fluid: !0,
    placeholder: r,
    onChange: (p, h) => {
      let {
        value: g
      } = h;
      s(g);
    },
    value: n,
    onKeyPress: d
  }), /* @__PURE__ */ i.createElement(nE, {
    querySuggestions: a,
    overridableId: t
  })));
}, nE = (e) => {
  let {
    overridableId: t,
    ...r
  } = e;
  const {
    querySuggestions: n
  } = r, {
    buildUID: a
  } = P(w), s = async (o) => {
    await (void 0).setState({
      currentValue: o
    }), (void 0).clearSuggestions(), (void 0).executeSearch();
  };
  return n.length === 0 ? null : /* @__PURE__ */ i.createElement(b, Object.assign({
    id: a("AutocompleteSearchBar.suggestions", t)
  }, r), /* @__PURE__ */ i.createElement("ul", null, n.map((o) => /* @__PURE__ */ i.createElement(k, {
    as: "li",
    onClick: () => s(o),
    key: o
  }, o))));
};
var aE = b.component("AutocompleteSearchBar", tE);
const sE = (e) => ({
  updateQueryString: (t) => e(Da(t)),
  updateSuggestions: (t) => e(Lv(t)),
  clearSuggestions: () => e(Nv())
}), iE = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
R(iE, sE)(aE);
class xt extends L {
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
        return /* @__PURE__ */ i.createElement(xt, {
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
      return /* @__PURE__ */ i.createElement(Ba, {
        key: s.key,
        bucket: s,
        keyField: o,
        isSelected: l,
        onFilterClicked: u,
        getChildAggCmps: c,
        overridableId: n
      });
    });
    return /* @__PURE__ */ i.createElement(Na, {
      valuesCmp: a,
      overridableId: n
    });
  }
}
xt.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const Na = (e) => {
  let {
    valuesCmp: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = P(w);
  return /* @__PURE__ */ i.createElement(b, {
    id: n("BucketAggregationContainer.element", r),
    valuesCmp: t
  }, /* @__PURE__ */ i.createElement(me, null, t));
};
Na.defaultProps = {
  overridableId: ""
};
const Ba = (e) => {
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
  } = P(w), c = t.label ? t.label : `${o} (${t.doc_count.toLocaleString("en-US")})`, d = a(t);
  return /* @__PURE__ */ i.createElement(b, {
    id: l("BucketAggregationValues.element", s),
    bucket: t,
    label: c,
    onFilterClicked: n,
    isSelected: r,
    childAggCmps: d
  }, /* @__PURE__ */ i.createElement(me.Item, {
    key: t.key
  }, /* @__PURE__ */ i.createElement(Bn, {
    label: c,
    id: u(),
    value: t.key,
    onClick: () => n(t.key),
    checked: r
  }), d));
};
Ba.defaultProps = {
  overridableId: ""
};
var oE = b.component("BucketAggregationValues", xt);
class za extends L {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: a
      } = this.props;
      return /* @__PURE__ */ i.createElement(oE, {
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
    return /* @__PURE__ */ i.createElement(Qa, Object.assign({
      title: this.title,
      containerCmp: l,
      overridableId: n
    }, a));
  }
}
za.defaultProps = {
  overridableId: ""
};
const Qa = (e) => {
  let {
    overridableId: t,
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: s
  } = e;
  const {
    buildUID: o
  } = P(w);
  return a && /* @__PURE__ */ i.createElement(b, {
    id: o("BucketAggregation.element", t),
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: s
  }, /* @__PURE__ */ i.createElement(z, null, /* @__PURE__ */ i.createElement(z.Content, null, /* @__PURE__ */ i.createElement(z.Header, null, n)), /* @__PURE__ */ i.createElement(z.Content, null, a)));
};
Qa.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var lE = b.component("BucketAggregation", za);
const uE = (e) => ({
  updateQueryFilters: (t) => e(yr(t))
});
R((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), uE)(lE);
class Ma extends L {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
Ma.defaultProps = {
  condition: !0
};
var V = b.component("ShouldRender", Ma);
class ja extends L {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: a
    } = this.props;
    return /* @__PURE__ */ i.createElement(V, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ i.createElement(qa, {
      totalResults: r,
      overridableId: a
    })));
  }
}
ja.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const qa = (e) => {
  let {
    totalResults: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = P(w), a = n("Count.element", r);
  return /* @__PURE__ */ i.createElement(b, {
    id: a,
    totalResults: t
  }, /* @__PURE__ */ i.createElement(ae, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
qa.defaultProps = {
  overridableId: ""
};
var cE = b.component("Count", ja);
const dE = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(cE);
class Ga extends L {
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
    return /* @__PURE__ */ i.createElement(V, {
      condition: !t && re(n) && r === 0
    }, /* @__PURE__ */ i.createElement(Va, Object.assign({}, u, {
      queryString: a,
      resetQuery: this.resetQuery,
      extraContent: s,
      userSelectionFilters: l,
      overridableId: o
    })));
  }
}
Ga.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const Va = (e) => {
  let {
    overridableId: t,
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: s
  } = e;
  const {
    buildUID: o
  } = P(w);
  return /* @__PURE__ */ i.createElement(b, {
    id: o("EmptyResults.element", t),
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: s
  }, /* @__PURE__ */ i.createElement(he, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ i.createElement(ge, {
    icon: !0
  }, /* @__PURE__ */ i.createElement(I, {
    name: "search"
  }), "No results found!"), r && /* @__PURE__ */ i.createElement("em", null, 'Current search "', r, '"'), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement(k, {
    primary: !0,
    onClick: () => n()
  }, "Clear query"), a));
};
Va.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var pE = b.component("EmptyResults", Ga);
const fE = (e) => ({
  resetQuery: () => e(Pv())
}), hE = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), fE)(pE);
function Ha(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ i.createElement(V, {
    condition: !t && !re(r)
  }, /* @__PURE__ */ i.createElement(Ka, {
    error: r,
    overridableId: n
  }));
}
Ha.defaultProps = {
  overridableId: ""
};
const Ka = (e) => {
  let {
    error: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = P(w);
  return /* @__PURE__ */ i.createElement(b, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ i.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
Ka.defaultProps = {
  overridableId: ""
};
var gE = b.component("Error", Ha);
R((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(gE);
function Ya(e) {
  const t = (a) => /* @__PURE__ */ i.createElement(e, a);
  return R((a) => ({
    currentQueryState: a.query,
    currentResultsState: a.results
  }), (a) => ({
    updateQueryState: (s) => a(Ra(s))
  }))(t);
}
class Wa extends L {
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
    return /* @__PURE__ */ i.createElement(V, {
      condition: t !== null && !r && n > 0
    }, /* @__PURE__ */ i.createElement(Za, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: a
    }));
  }
}
Wa.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
const Za = (e) => {
  let {
    overridableId: t,
    currentLayout: r,
    onLayoutChange: n
  } = e;
  const {
    buildUID: a
  } = P(w);
  return /* @__PURE__ */ i.createElement(b, {
    id: a("LayoutSwitcher.element", t),
    currentLayout: r,
    onLayoutChange: n
  }, /* @__PURE__ */ i.createElement(Re, {
    compact: !0,
    icon: !0
  }, /* @__PURE__ */ i.createElement(Re.Item, {
    name: "list",
    active: r === "list",
    onClick: (s, o) => {
      let {
        name: l
      } = o;
      return n(l);
    }
  }, /* @__PURE__ */ i.createElement(I, {
    name: "list layout"
  })), /* @__PURE__ */ i.createElement(Re.Item, {
    name: "grid",
    active: r === "grid",
    onClick: (s, o) => {
      let {
        name: l
      } = o;
      return n(l);
    }
  }, /* @__PURE__ */ i.createElement(I, {
    name: "grid layout"
  }))));
};
Za.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var mE = b.component("LayoutSwitcher", Wa);
const yE = (e) => ({
  updateLayout: (t) => e(Ov(t))
});
R((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), yE)(mE);
const gn = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class Ja extends L {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...gn,
      ...t.options
    } : gn;
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
    return /* @__PURE__ */ i.createElement(V, {
      condition: !t && n > -1 && a > -1 && o ? r > 0 : r > a
    }, /* @__PURE__ */ i.createElement(Xa, {
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
Ja.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const Xa = (e) => {
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
  const c = o.boundaryRangeCount, d = o.siblingRangeCount, p = o.showEllipsis, h = o.showFirst, g = o.showLast, v = o.showPrev, m = o.showNext, S = o.size, f = Math.floor(l / n), y = Math.ceil(a / n), x = Math.min(y, f), {
    buildUID: $
  } = P(w);
  return r > y && s(y), /* @__PURE__ */ i.createElement(b, {
    id: $("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: a,
    options: o,
    onPageChange: s
  }, /* @__PURE__ */ i.createElement(wi, Object.assign({
    activePage: r,
    totalPages: x,
    onPageChange: (F, _) => {
      let {
        activePage: O
      } = _;
      return s(O);
    },
    boundaryRange: c,
    siblingRange: d,
    ellipsisItem: p ? void 0 : null,
    firstItem: h ? void 0 : null,
    lastItem: g ? void 0 : null,
    prevItem: v ? void 0 : null,
    nextItem: m ? void 0 : null,
    size: S
  }, u)));
};
Xa.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var vE = b.component("Pagination", Ja);
const EE = (e) => ({
  updateQueryPage: (t) => e(Av(t))
}), bE = R((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), EE)(vE);
function es(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    resultsPerRow: a,
    overridableId: s,
    onResultsRendered: o
  } = e;
  return ut(() => {
    o && o();
  }, [o]), /* @__PURE__ */ i.createElement(V, {
    condition: !t && r > 0
  }, /* @__PURE__ */ i.createElement(ts, {
    results: n,
    resultsPerRow: a,
    overridableId: s
  }));
}
es.defaultProps = {
  resultsPerRow: 3,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const SE = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = P(w);
  return /* @__PURE__ */ i.createElement(b, {
    id: n("ResultsGrid.item", r),
    result: t
  }, /* @__PURE__ */ i.createElement(z, {
    fluid: !0,
    href: `#${t.id}`
  }, /* @__PURE__ */ i.createElement(Fi, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ i.createElement(z.Content, null, /* @__PURE__ */ i.createElement(z.Header, null, t.title), /* @__PURE__ */ i.createElement(z.Description, null, t.description))));
}, ts = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: a
  } = P(w), s = r.map((o, l) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ i.createElement(SE, {
      key: l,
      result: o,
      overridableId: t
    })
  ));
  return /* @__PURE__ */ i.createElement(b, {
    id: a("ResultsGrid.container", t),
    results: s,
    resultsPerRow: n
  }, /* @__PURE__ */ i.createElement(z.Group, {
    itemsPerRow: n
  }, s));
};
ts.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var $E = b.component("ResultsGrid", es);
const _E = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))($E);
function rs(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return ut(() => {
    s && s();
  }, [s]), /* @__PURE__ */ i.createElement(V, {
    condition: !t && r > 0
  }, /* @__PURE__ */ i.createElement(ns, {
    results: n,
    overridableId: a
  }));
}
rs.defaultProps = {
  overridableId: "",
  onResultsRendered: () => {
  }
};
const xE = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = P(w);
  return /* @__PURE__ */ i.createElement(b, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ i.createElement(Ee, {
    href: `#${t.id}`
  }, /* @__PURE__ */ i.createElement(Ee.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ i.createElement(Ee.Content, null, /* @__PURE__ */ i.createElement(Ee.Header, null, t.title), /* @__PURE__ */ i.createElement(Ee.Description, null, t.description))));
}, ns = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = P(w), a = t.map((s, o) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ i.createElement(xE, {
      result: s,
      key: o,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ i.createElement(b, {
    id: n("ResultsList.container", r),
    results: a
  }, /* @__PURE__ */ i.createElement(Ee.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, a));
};
ns.defaultProps = {
  overridableId: ""
};
var CE = b.component("ResultsList", rs);
const as = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(CE);
function ss(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ i.createElement(is, {
    overridableId: n
  }) : t;
}
ss.defaultProps = {
  overridableId: ""
};
const is = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = P(w);
  return /* @__PURE__ */ i.createElement(b, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ i.createElement(zn, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
is.defaultProps = {
  overridableId: ""
};
var wE = b.component("ResultsLoader", ss);
const FE = R((e) => ({
  loading: e.results.loading
}))(wE);
function os(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return /* @__PURE__ */ i.createElement(V, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ i.createElement(ls, {
    layout: n,
    overridableId: a,
    onResultsRendered: s
  }));
}
os.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const ls = (e) => {
  let {
    layout: t,
    overridableId: r,
    onResultsRendered: n
  } = e;
  const {
    buildUID: a
  } = P(w);
  return /* @__PURE__ */ i.createElement(b, {
    id: a("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ i.createElement(as, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ i.createElement(_E, {
    overridableId: r,
    onResultsRendered: n
  }));
};
ls.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var TE = b.component("ResultsMultiLayout", os);
R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(TE);
class us extends L {
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
    return /* @__PURE__ */ i.createElement(V, {
      condition: !t && r !== -1 && u ? n > 0 : n > r
    }, a(/* @__PURE__ */ i.createElement(cs, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
us.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const cs = (e) => {
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
  } = P(w), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ i.createElement(b, {
    id: l("ResultsPerPage.element", t),
    currentSize: r,
    options: n,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: o
  }, /* @__PURE__ */ i.createElement(le, {
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
cs.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var AE = b.component("ResultsPerPage", us);
const IE = (e) => ({
  updateQuerySize: (t) => e(Iv(t))
}), OE = R((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), IE)(AE);
class ds extends L {
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
    return /* @__PURE__ */ i.createElement(br, {
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
ds.defaultProps = {
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
const ps = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ i.createElement(ds, Object.assign({
    key: t
  }, e));
};
ps.defaultProps = {
  queryString: ""
};
class br extends L {
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
    return /* @__PURE__ */ i.createElement(b, {
      id: c("SearchBar.element", s),
      queryString: l,
      onBtnSearchClick: r,
      onInputChange: n,
      onKeyPress: a,
      placeholder: o,
      actionProps: t,
      uiProps: u
    }, /* @__PURE__ */ i.createElement(Nn, Object.assign({
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
br.defaultProps = {
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
br.contextType = w;
var PE = b.component("SearchBar", ps);
const RE = (e) => ({
  updateQueryString: (t) => e(Da(t))
}), DE = R((e) => ({
  queryString: e.query.queryString
}), RE)(PE);
class fs extends L {
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
    return /* @__PURE__ */ i.createElement(V, {
      condition: t !== null && (l || t !== null) && !n && a > 0
    }, s(/* @__PURE__ */ i.createElement(hs, {
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
fs.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const hs = (e) => {
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
  } = P(w), d = o(r, n), p = a.map((h, g) => ({
    key: g,
    text: h.text,
    value: h.value
  }));
  return /* @__PURE__ */ i.createElement(b, {
    id: c("Sort.element", t),
    options: a,
    currentSortBy: r,
    currentSortOrder: n,
    onValueChange: s,
    ariaLabel: l,
    selectOnNavigation: u
  }, /* @__PURE__ */ i.createElement(le, {
    selection: !0,
    options: p,
    value: d,
    onChange: (h, g) => {
      let {
        value: v
      } = g;
      return s(v);
    },
    "aria-label": l,
    selectOnNavigation: u
  }));
};
hs.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var kE = b.component("Sort", fs);
const LE = (e) => ({
  updateQuerySorting: (t, r) => e(wv(t, r))
});
R((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), LE)(kE);
class gs extends L {
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
    return /* @__PURE__ */ i.createElement(V, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ i.createElement(ms, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
gs.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const ms = (e) => {
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
  } = P(w), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ i.createElement(b, {
    id: l("SortBy.element", t),
    options: n,
    currentSortBy: r,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: o
  }, /* @__PURE__ */ i.createElement(le, {
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
ms.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var UE = b.component("SortBy", gs);
const NE = (e) => ({
  updateQuerySortBy: (t) => e(Fv(t))
});
R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), NE)(UE);
class ys extends L {
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
    return /* @__PURE__ */ i.createElement(V, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ i.createElement(vs, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
ys.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const vs = (e) => {
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
  } = P(w), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ i.createElement(b, {
    id: l("SortOrder.element", t),
    options: n,
    currentSortOrder: r,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: o
  }, /* @__PURE__ */ i.createElement(le, {
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
vs.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var BE = b.component("SortOrder", ys);
const zE = (e) => ({
  updateQuerySortOrder: (t) => e(Tv(t))
});
R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), zE)(BE);
const Es = (e) => {
  let {
    overridableId: t,
    userSelectionFilters: r,
    title: n,
    label: a,
    filterValue: s,
    updateQueryFilters: o
  } = e;
  const l = (p) => p.filter((g) => g[0] === s[0]).length > 0, u = () => {
    o(s);
  }, {
    buildUID: c
  } = P(w), d = l(r);
  return /* @__PURE__ */ i.createElement(b, {
    id: c("SearchFilters.Toggle.element", t),
    title: n,
    label: a,
    filterValue: s,
    userSelectionFilters: r,
    updateQueryFilters: o
  }, /* @__PURE__ */ i.createElement(z, null, /* @__PURE__ */ i.createElement(z.Content, null, /* @__PURE__ */ i.createElement(z.Header, null, n)), /* @__PURE__ */ i.createElement(z.Content, null, /* @__PURE__ */ i.createElement(Bn, {
    toggle: !0,
    label: a,
    onClick: u,
    checked: d
  }))));
};
Es.defaultProps = {
  overridableId: ""
};
var QE = b.component("SearchFilters.Toggle", Es);
const ME = (e) => ({
  updateQueryFilters: (t) => e(yr(t))
});
R((e) => ({
  userSelectionFilters: e.query.filters
}), ME)(QE);
const bs = i.createContext(
  null
), jE = ({ config: e, children: t, updateQueryState: r, currentQueryState: n }) => {
  const a = A(() => {
    r({
      ...n,
      queryString: n.queryString
    });
  }, [r, n]);
  return /* @__PURE__ */ i.createElement(bs.Provider, { value: { config: e, refreshSearch: a } }, t);
}, qE = Ya(jE), Ct = () => {
  const e = i.useContext(bs);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
}, Ss = ({
  status: e,
  children: t,
  ...r
}) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ i.createElement(ae, { color: "red", ...r }, /* @__PURE__ */ i.createElement(I, { name: "warning sign" }), t) : e === "success" || e === "validated" || e === "created" ? /* @__PURE__ */ i.createElement(ae, { color: "green", ...r }, /* @__PURE__ */ i.createElement(I, { name: "check circle" }), t) : e === "importing" || e === "validating" ? /* @__PURE__ */ i.createElement(ae, { color: "blue", ...r }, /* @__PURE__ */ i.createElement(I, { name: "spinner", loading: !0 }), t) : /* @__PURE__ */ i.createElement(ae, { ...r }, t), at = (e) => (e == null ? void 0 : e.charAt(0).toUpperCase()) + (e == null ? void 0 : e.slice(1)) || "", GE = (e) => new Date(e).toISOString().split("T")[0];
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
            var h = JSON.stringify(d);
            /^[\{\[]/.test(h) && (d = h);
          } catch {
          }
          d = s.write ? s.write(d, c) : encodeURIComponent(String(d)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), c = encodeURIComponent(String(c)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var g = "";
          for (var v in p)
            p[v] && (g += "; " + v, p[v] !== !0 && (g += "=" + p[v].split(";")[0]));
          return document.cookie = c + "=" + d + g;
        }
      }
      function u(c, d) {
        if (!(typeof document > "u")) {
          for (var p = {}, h = document.cookie ? document.cookie.split("; ") : [], g = 0; g < h.length; g++) {
            var v = h[g].split("="), m = v.slice(1).join("=");
            !d && m.charAt(0) === '"' && (m = m.slice(1, -1));
            try {
              var S = n(v[0]);
              if (m = (s.read || s)(m, S) || n(m), d)
                try {
                  m = JSON.parse(m);
                } catch {
                }
              if (p[S] = m, c === S)
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
var VE = $s.exports;
const HE = /* @__PURE__ */ D(VE), KE = () => HE.get("csrftoken") || null, YE = (e) => {
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
}, K_ = (e) => new Sa(e), Y_ = (e, t = {}, r = !0) => ({
  axios: {
    url: e,
    headers: {
      Accept: "application/vnd.inveniordm.v1+json",
      ...t
    },
    withCredentials: r
  }
}), q = Ye.create({
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
    const t = KE();
    return t && (e.headers["X-CSRFTOKEN"] = t), e;
  },
  (e) => Promise.reject(e)
);
const WE = async (e) => {
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
}, _s = async (e, t) => {
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
}, xs = async (e, t) => {
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
}, ZE = async (e) => {
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
}, JE = async (e) => {
  try {
    const t = await q.delete(`/api/importer-tasks/${e}`);
    return t.status === 204 ? !0 : (console.error(`Failed to delete task: ${t.statusText}`), !1);
  } catch (t) {
    return console.error(
      `Error deleting task: ${t instanceof Error ? t.message : "Unknown error"}`
    ), !1;
  }
}, Cs = async (e) => {
  try {
    const t = await q.post(`/api/importer-tasks/${e}/load`);
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error executing bulk import:", t), new Error("Failed to execute bulk import");
  }
}, XE = async () => {
  try {
    const e = await q.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, eb = async (e) => {
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
}, Sr = async (e) => {
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
}, ws = async (e, t) => {
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
}, Fs = async (e, t, r) => {
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
}, $r = async (e) => {
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
}, Ts = (e, t = {}) => {
  const [r, n] = M({
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
  } = t, h = A(() => {
    n((f) => ({ ...f, error: null }));
  }, []), g = A(async () => {
    n((f) => ({ ...f, isDeleting: !0, error: null }));
    try {
      if (!await JE(e))
        throw new Error(`Failed to delete task ${e}`);
      a == null || a();
    } catch (f) {
      const y = f instanceof Error ? f : new Error("Unknown error");
      throw n((x) => ({ ...x, error: y })), s == null || s(y), y;
    } finally {
      n((f) => ({ ...f, isDeleting: !1 }));
    }
  }, [e, a, s]), v = A(async () => {
    n((f) => ({ ...f, isValidating: !0, error: null }));
    try {
      const f = await $r(e);
      if (!f)
        throw new Error(`Validation failed for task ${e}`);
      return o == null || o(f), f;
    } catch (f) {
      const y = f instanceof Error ? f : new Error("Unknown error");
      throw n((x) => ({ ...x, error: y })), l == null || l(y), y;
    } finally {
      n((f) => ({ ...f, isValidating: !1 }));
    }
  }, [e, o, l]), m = A(async () => {
    n((f) => ({ ...f, isBulkImporting: !0, error: null }));
    try {
      const f = await Cs(e);
      if (!f)
        throw new Error(`Failed to execute bulk import for task ${e}`);
      return u == null || u(f), f;
    } catch (f) {
      const y = f instanceof Error ? f : new Error("Unknown error");
      throw n((x) => ({ ...x, error: y })), c == null || c(y), y;
    } finally {
      n((f) => ({ ...f, isBulkImporting: !1 }));
    }
  }, [e, u, c]), S = A(async () => {
    n((f) => ({ ...f, isGettingStatus: !0, error: null }));
    try {
      const f = await Sr(e);
      if (!f)
        throw new Error(`Failed to retrieve status for task ${e}`);
      return d == null || d(f), f;
    } catch (f) {
      const y = f instanceof Error ? f : new Error("Unknown error");
      throw n((x) => ({ ...x, error: y })), p == null || p(y), y;
    } finally {
      n((f) => ({ ...f, isGettingStatus: !1 }));
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
    deleteTask: g,
    validateTask: v,
    runBulkImport: m,
    getStatus: S,
    clearError: h
  };
}, tb = ({ result: e, index: t }) => {
  var S;
  const { refreshSearch: r, config: n } = Ct(), {
    deleteTask: a,
    validateTask: s,
    runBulkImport: o,
    getStatus: l,
    isDeleting: u,
    isValidating: c,
    isBulkImporting: d,
    isGettingStatus: p,
    error: h,
    clearError: g
  } = Ts(e.id, {
    onDeleteSuccess: () => {
      r();
    },
    onValidateSuccess: () => {
      r();
    },
    onBulkImportSuccess: () => {
      r();
    },
    onStatusChangeSuccess: () => {
      r();
    }
  });
  if (!e)
    return null;
  const v = (f, y) => y ? `${f}...` : f, m = u || c || d || p;
  return /* @__PURE__ */ i.createElement(ct, { key: t }, /* @__PURE__ */ i.createElement(Y, null, /* @__PURE__ */ i.createElement("a", { href: `${n.resultPath}/${e.id}` }, e.title || "No title")), /* @__PURE__ */ i.createElement(Y, null, GE(e.created)), /* @__PURE__ */ i.createElement(Y, null, /* @__PURE__ */ i.createElement(Ss, { status: e.status }, at(e.status))), /* @__PURE__ */ i.createElement(Y, null, ((S = e.records_status) == null ? void 0 : S.total_records) ?? 0), /* @__PURE__ */ i.createElement(Y, null, e.serializer), /* @__PURE__ */ i.createElement(Y, null, at(e.mode)), /* @__PURE__ */ i.createElement(Y, { style: { width: "220px" } }, h && /* @__PURE__ */ i.createElement("div", { style: { color: "red", fontSize: "12px", marginBottom: "5px" } }, h.message, /* @__PURE__ */ i.createElement(
    k,
    {
      onClick: g,
      style: { marginLeft: "5px", fontSize: "10px" }
    },
    "Clear"
  )), /* @__PURE__ */ i.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ i.createElement(
    le,
    {
      text: m ? "Processing..." : "Select Action",
      floating: !0,
      labeled: !0,
      className: "icon",
      disabled: m,
      options: [
        {
          key: "download",
          text: "Download",
          value: "download",
          disabled: !0
        },
        {
          key: "validate",
          text: v("Retry Validation", c),
          value: "validate",
          disabled: m,
          onClick: () => s()
        },
        {
          key: "load",
          text: v("Load Bulk Import", d),
          value: "load",
          disabled: m,
          onClick: () => o()
        },
        {
          key: "status",
          text: v("Get Status", p),
          value: "status",
          disabled: m,
          onClick: () => l()
        },
        {
          key: "delete",
          text: v("Delete", u),
          value: "delete",
          disabled: m,
          onClick: () => a()
        }
      ]
    }
  ), /* @__PURE__ */ i.createElement(
    k,
    {
      basic: !0,
      size: "tiny",
      disabled: m,
      as: "a",
      href: `${n.resultPath}/${e.id}`
    },
    /* @__PURE__ */ i.createElement(I, { name: "eye" }),
    "View"
  ))));
}, rb = ({ children: e }) => /* @__PURE__ */ i.createElement(Qn, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(W, null, "ID"), /* @__PURE__ */ i.createElement(W, null, "Date Created"), /* @__PURE__ */ i.createElement(W, null, "Status"), /* @__PURE__ */ i.createElement(W, null, "Records"), /* @__PURE__ */ i.createElement(W, null, "Serializer"), /* @__PURE__ */ i.createElement(W, null, "Mode"), /* @__PURE__ */ i.createElement(W, null, "Actions"))), /* @__PURE__ */ i.createElement(jn, null, e)), ne = {
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
}, nb = ({
  taskId: e,
  onUploadComplete: t,
  onUploadError: r
} = {}) => {
  const [n, a] = M([]), [s, o] = M(!1), l = A(
    (f, y, x, $) => {
      a(
        (F) => F.map((_) => _.id === f ? { ..._, status: y, error: x, progress: $ } : _)
      );
    },
    []
  ), u = A(
    (f, y, x) => y && !y.split(",").map((_) => _.trim()).some((_) => _.startsWith(".") ? f.name.toLowerCase().endsWith(_.toLowerCase()) : f.type.match(new RegExp(_.replace("*", ".*")))) ? `File type not accepted. Accepted types: ${y}` : x && f.size > x ? `File size exceeds maximum of ${(x / 1024 / 1024).toFixed(2)}MB` : null,
    []
  ), c = A(
    (f, y, x, $) => {
      const F = [], _ = [];
      for (const O of f) {
        if ($ && n.length + F.length >= $) {
          _.push(`Maximum ${$} files allowed`);
          break;
        }
        const de = u(O, y, x);
        if (de) {
          _.push(`${O.name}: ${de}`);
          continue;
        }
        if (n.some(
          (Me) => Me.file.name === O.name && Me.file.size === O.size
        )) {
          _.push(`${O.name}: File already selected`);
          continue;
        }
        F.push({
          file: O,
          id: `${O.name}-${O.size}-${Date.now()}`,
          status: "idle"
        });
      }
      return _.length > 0 && (r == null || r(_.join(", "))), a((O) => [...O, ...F]), F;
    },
    [n, u, r]
  ), d = A((f) => {
    a((y) => y.filter((x) => x.id !== f));
  }, []), p = A(() => {
    a([]);
  }, []), h = A(
    async (f) => {
      if (!e)
        throw new Error("Task ID is required for file upload");
      o(!0);
      try {
        const y = f.map(($) => $.file.name);
        f.forEach(($) => l($.id, "initializing")), await ws(e, y);
        for (const $ of f)
          try {
            l($.id, "uploading", void 0, {
              loaded: 0,
              total: $.file.size,
              percentage: 0
            }), await Fs(e, $.file.name, $.file), l($.id, "committing", void 0, {
              loaded: $.file.size,
              total: $.file.size,
              percentage: 100
            }), await xs(e, $.file.name), l($.id, "completed");
          } catch (F) {
            const _ = F instanceof Error ? F.message : "Upload failed";
            throw l($.id, "error", _), F;
          }
        const x = f.map(($) => $.file);
        t == null || t(x);
      } catch (y) {
        const x = y instanceof Error ? y.message : "Upload failed";
        throw r == null || r(x), y;
      } finally {
        o(!1);
      }
    },
    [e, l, t, r]
  ), g = A(() => n.filter((f) => f.status === "idle"), [n]), v = n.some((f) => f.status === "error"), m = n.some((f) => f.status === "completed"), S = n.length > 0 && n.every((f) => f.status === "completed");
  return {
    uploadFiles: n,
    isUploading: s,
    hasErrors: v,
    hasCompleted: m,
    allCompleted: S,
    addFiles: c,
    removeFile: d,
    clearFiles: p,
    uploadToServer: h,
    getUploadableFiles: g
  };
}, ab = ({
  taskId: e,
  onChange: t,
  accept: r = ".csv,.json,.xlsx,.txt",
  maxSize: n = 10 * 1024 * 1024,
  // 10MB
  maxFiles: a = 5,
  disabled: s = !1,
  error: o
}) => {
  const l = Si(null), [u, c] = i.useState(!1), {
    uploadFiles: d,
    isUploading: p,
    hasErrors: h,
    addFiles: g,
    removeFile: v,
    clearFiles: m,
    uploadToServer: S,
    getUploadableFiles: f
  } = nb({
    taskId: e,
    onUploadComplete: (E) => {
      t(E);
    },
    onUploadError: (E) => {
      console.error("Upload error:", E);
    }
  }), y = A(
    (E) => {
      if (!E || E.length === 0)
        return;
      const J = Array.from(E), ie = g(J, r, n, a);
      if (ie.length > 0) {
        const je = [...d, ...ie].map((bi) => bi.file);
        t(je);
      }
    },
    [g, r, n, a, t, d]
  ), x = A(
    (E) => {
      y(E.target.files), l.current && (l.current.value = "");
    },
    [y]
  ), $ = A(
    (E) => {
      E.preventDefault(), s || c(!0);
    },
    [s]
  ), F = A((E) => {
    E.preventDefault(), c(!1);
  }, []), _ = A(
    (E) => {
      E.preventDefault(), c(!1), !s && y(E.dataTransfer.files);
    },
    [s, y]
  ), O = A(async () => {
    const E = f();
    if (E.length !== 0)
      try {
        await S(E);
      } catch (J) {
        console.error("Upload failed:", J);
      }
  }, [f, S]), de = A(() => {
    var E;
    s || (E = l.current) == null || E.click();
  }, [s]), wr = A(
    (E) => {
      v(E);
      const J = d.filter((ie) => ie.id !== E).map((ie) => ie.file);
      t(J);
    },
    [v, d, t]
  ), Me = A(() => {
    m(), t([]);
  }, [m, t]), Fr = (E) => {
    switch (E) {
      case "completed":
        return "green";
      case "error":
        return "red";
      case "uploading":
      case "committing":
      case "initializing":
        return "blue";
      default:
        return "grey";
    }
  }, vi = (E) => {
    switch (E) {
      case "completed":
        return "check circle";
      case "error":
        return "exclamation triangle";
      case "uploading":
      case "committing":
      case "initializing":
        return "spinner";
      default:
        return "file";
    }
  }, Ft = (E) => {
    if (E === 0)
      return "0 Bytes";
    const J = 1024, ie = ["Bytes", "KB", "MB", "GB"], je = Math.floor(Math.log(E) / Math.log(J));
    return `${Number.parseFloat((E / J ** je).toFixed(2))} ${ie[je]}`;
  }, Ei = () => d.reduce((E, J) => E + J.file.size, 0), Tr = () => Ft(Ei());
  return /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement(
    "input",
    {
      ref: l,
      type: "file",
      multiple: !0,
      accept: r,
      onChange: x,
      style: { display: "none" },
      disabled: s
    }
  ), /* @__PURE__ */ i.createElement(
    he,
    {
      placeholder: !0,
      className: `file-drop-zone ${u ? "drag-over" : ""}`,
      onDragOver: $,
      onDragLeave: F,
      onDrop: _,
      style: {
        minHeight: "120px",
        border: u ? "2px dashed #2185d0" : "2px dashed #d4d4d5",
        backgroundColor: u ? "#f8f9fa" : "transparent",
        cursor: s ? "not-allowed" : "pointer",
        opacity: s ? 0.6 : 1
      },
      onClick: de
    },
    /* @__PURE__ */ i.createElement("div", { style: { textAlign: "center", padding: "20px" } }, /* @__PURE__ */ i.createElement(
      I,
      {
        name: "cloud upload",
        size: "huge",
        color: u ? "blue" : "grey"
      }
    ), /* @__PURE__ */ i.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement("strong", null, "Drop files here or click to select")), /* @__PURE__ */ i.createElement("p", { style: { fontSize: "12px", color: "#666" } }, "Max size: ", Ft(n), " | Max files: ", a), d.length > 0 && /* @__PURE__ */ i.createElement(
      "p",
      {
        style: { fontSize: "12px", color: "#2185d0", marginTop: "8px" }
      },
      /* @__PURE__ */ i.createElement("strong", null, d.length, " files selected •", " ", Tr(), " total")
    )))
  ), o && /* @__PURE__ */ i.createElement(U, { negative: !0, size: "small" }, /* @__PURE__ */ i.createElement(I, { name: "exclamation triangle" }), o), d.length > 0 && /* @__PURE__ */ i.createElement(he, null, /* @__PURE__ */ i.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px"
      }
    },
    /* @__PURE__ */ i.createElement("strong", null, "Selected Files (", d.length, ") • ", Tr()),
    /* @__PURE__ */ i.createElement(
      k,
      {
        size: "mini",
        basic: !0,
        icon: "trash",
        content: "Clear All",
        onClick: Me,
        disabled: p
      }
    )
  ), /* @__PURE__ */ i.createElement(me, { divided: !0 }, d.map((E) => /* @__PURE__ */ i.createElement(me.Item, { key: E.id }, /* @__PURE__ */ i.createElement(me.Content, null, /* @__PURE__ */ i.createElement(
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
      /* @__PURE__ */ i.createElement(
        I,
        {
          name: vi(E.status),
          color: Fr(E.status),
          loading: E.status === "uploading" || E.status === "committing" || E.status === "initializing"
        }
      ),
      /* @__PURE__ */ i.createElement("span", null, E.file.name),
      /* @__PURE__ */ i.createElement(ae, { size: "mini", basic: !0 }, Ft(E.file.size)),
      /* @__PURE__ */ i.createElement(
        ae,
        {
          size: "mini",
          color: Fr(E.status)
        },
        E.status
      )
    ), E.progress && E.status === "uploading" && /* @__PURE__ */ i.createElement(
      We,
      {
        percent: E.progress.percentage,
        size: "tiny",
        color: "blue",
        style: { marginTop: "5px" }
      }
    ), E.error && /* @__PURE__ */ i.createElement(
      U,
      {
        negative: !0,
        size: "mini",
        style: { marginTop: "5px" }
      },
      E.error
    )),
    /* @__PURE__ */ i.createElement(
      k,
      {
        size: "mini",
        basic: !0,
        icon: "close",
        onClick: () => wr(E.id),
        disabled: p
      }
    )
  ))))), e && f().length > 0 && /* @__PURE__ */ i.createElement("div", { style: { marginTop: "15px", textAlign: "center" } }, /* @__PURE__ */ i.createElement(
    k,
    {
      primary: !0,
      icon: "upload",
      content: `Upload ${f().length} file(s)`,
      onClick: O,
      loading: p,
      disabled: p || h
    }
  ))));
}, sb = () => {
  const [e, t] = M(
    {}
  ), [r, n] = M(!0), { values: a, submitForm: s, isSubmitting: o, isValid: l, setFieldValue: u } = zi(), c = A(async () => {
    try {
      const d = await XE(), p = {};
      for (const h of d) {
        const g = await eb(h);
        g && (p[h] = g);
      }
      t(p);
    } catch (d) {
      console.error("Error fetching record types:", d);
    } finally {
      n(!1);
    }
  }, []);
  return ut(() => {
    c();
  }, [c]), {
    configs: e,
    isLoading: r,
    values: a,
    submitForm: s,
    setFieldValue: u,
    isSubmitting: o,
    isValid: l
  };
}, ib = () => {
  const {
    configs: e,
    isLoading: t,
    submitForm: r,
    setFieldValue: n,
    values: a,
    isSubmitting: s,
    isValid: o
  } = sb(), l = (c) => {
    var p;
    const d = ((p = c.target.files) == null ? void 0 : p[0]) || null;
    n("metadata", d);
  }, u = (c) => {
    n("files", c);
  };
  return t ? /* @__PURE__ */ i.createElement("p", null, "Loading record types...") : !e || Object.keys(e).length === 0 ? /* @__PURE__ */ i.createElement("p", null, "No record types available.") : /* @__PURE__ */ i.createElement($i, null, /* @__PURE__ */ i.createElement(
    Ui,
    {
      fieldPath: "task.title",
      label: "Title",
      placeholder: "Enter a title for the import task",
      required: !0
    }
  ), /* @__PURE__ */ i.createElement(De.Group, { widths: "equal" }, /* @__PURE__ */ i.createElement(
    Tt,
    {
      fieldPath: "task.recordType",
      label: "Record Type",
      options: Object.keys(e).map((c) => ({
        key: c,
        value: c,
        text: c
      })),
      placeholder: "Select Record Type",
      required: !0
    }
  ), /* @__PURE__ */ i.createElement(
    Tt,
    {
      fieldPath: "task.serializer",
      label: "Serializer",
      options: a.task.recordType && e[a.task.recordType] ? e[a.task.recordType].serializers.map((c) => ({
        key: c,
        value: c,
        text: c
      })) : [],
      placeholder: "Select Serializer",
      disabled: !a.task.recordType,
      required: !0
    }
  ), /* @__PURE__ */ i.createElement(
    Tt,
    {
      fieldPath: "task.mode",
      label: "Mode",
      options: [
        { key: "import", value: "import", text: "Import" },
        { key: "delete", value: "delete", text: "Delete" }
      ],
      placeholder: "Select Mode",
      disabled: !a.task.recordType || !a.task.serializer,
      required: !0
    }
  )), /* @__PURE__ */ i.createElement(De.Field, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "file-input" }, "Metadata File"), /* @__PURE__ */ i.createElement(
    "input",
    {
      id: "file-input",
      type: "file",
      accept: ".csv",
      onChange: l,
      style: { marginTop: "8px" }
    }
  ), a.metadata && /* @__PURE__ */ i.createElement("p", { style: { marginTop: "8px", fontSize: "12px", color: "#666" } }, "Selected: ", a.metadata.name), /* @__PURE__ */ i.createElement("p", { style: { marginTop: "8px", fontSize: "12px", color: "#666" } }, "Upload a CSV or JSON file containing the record metadata to be imported.")), /* @__PURE__ */ i.createElement(De.Field, null, /* @__PURE__ */ i.createElement(
    ab,
    {
      value: a.files || [],
      onChange: u,
      accept: "*",
      maxSize: 10 * 1024 * 1024 * 1024,
      maxFiles: 100
    }
  ), /* @__PURE__ */ i.createElement("p", { style: { marginTop: "8px", fontSize: "12px", color: "#666" } }, /* @__PURE__ */ i.createElement("strong", null, "Attachment Files:"), " Upload files that will be attached to the imported records.")), /* @__PURE__ */ i.createElement(
    Ni,
    {
      fieldPath: "task.description",
      label: "Notes",
      placeholder: "Enter a description for the import task",
      rows: 3
    }
  ), /* @__PURE__ */ i.createElement(
    k,
    {
      type: "button",
      primary: !0,
      onClick: r,
      disabled: !o || s,
      loading: s
    },
    "Submit"
  ));
};
var zt;
try {
  zt = Map;
} catch {
}
var Qt;
try {
  Qt = Set;
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
    return e.map(Mt);
  if (zt && e instanceof zt)
    return new Map(Array.from(e.entries()));
  if (Qt && e instanceof Qt)
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
function Mt(e) {
  return As(e, [], []);
}
const ob = Object.prototype.toString, lb = Error.prototype.toString, ub = RegExp.prototype.toString, cb = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", db = /^Symbol\((.*)\)(.*)$/;
function pb(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function mn(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return pb(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return cb.call(e).replace(db, "Symbol($1)");
  const n = ob.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + lb.call(e) + "]" : n === "RegExp" ? ub.call(e) : null;
}
function ke(e, t) {
  let r = mn(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = mn(this[n], t);
    return s !== null ? s : a;
  }, 2);
}
let fe = {
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
    let a = n != null && n !== r, s = `${e} must be a \`${t}\` type, but the final value was: \`${ke(r, !0)}\`` + (a ? ` (cast from the value \`${ke(n, !0)}\`).` : ".");
    return r === null && (s += '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'), s;
  },
  defined: "${path} must be defined"
}, H = {
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
}, fb = {
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
}, hb = {
  isValue: "${path} field must be ${value}"
}, qt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, gb = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: fe,
  string: H,
  number: fb,
  date: jt,
  object: qt,
  array: gb,
  boolean: hb
});
var mb = Object.prototype, yb = mb.hasOwnProperty;
function vb(e, t) {
  return e != null && yb.call(e, t);
}
var Eb = vb, bb = Eb, Sb = ra;
function $b(e, t) {
  return e != null && Sb(e, t, bb);
}
var _b = $b;
const st = /* @__PURE__ */ D(_b), Is = (e) => e && e.__isYupSchema__;
class xb {
  constructor(t, r) {
    if (this.fn = void 0, this.refs = t, this.refs = t, typeof r == "function") {
      this.fn = r;
      return;
    }
    if (!st(r, "is"))
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
let Cb = /\$\{\s*(\w+)\s*\}/g;
class Q extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Gt({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(Cb, (a, s) => ke(r[s])) : typeof t == "function" ? t(r) : t;
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
const wb = (e) => {
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
  } = e, c = wb(t), d = n.length;
  const p = [];
  if (o = o || [], !d)
    return o.length ? c(new Q(o, s, u)) : c(null, s);
  for (let h = 0; h < n.length; h++) {
    const g = n[h];
    g(a, function(m) {
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
function Fb(e) {
  return function(t, r, n) {
    for (var a = -1, s = Object(t), o = n(t), l = o.length; l--; ) {
      var u = o[e ? l : ++a];
      if (r(s[u], u, s) === !1)
        break;
    }
    return t;
  };
}
var Tb = Fb, Ab = Tb, Ib = Ab(), Ob = Ib, Pb = Ob, Rb = ze;
function Db(e, t) {
  return e && Pb(e, t, Rb);
}
var Ps = Db, kb = "__lodash_hash_undefined__";
function Lb(e) {
  return this.__data__.set(e, kb), this;
}
var Ub = Lb;
function Nb(e) {
  return this.__data__.has(e);
}
var Bb = Nb, zb = nr, Qb = Ub, Mb = Bb;
function it(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new zb(); ++t < r; )
    this.add(e[t]);
}
it.prototype.add = it.prototype.push = Qb;
it.prototype.has = Mb;
var jb = it;
function qb(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Gb = qb;
function Vb(e, t) {
  return e.has(t);
}
var Hb = Vb, Kb = jb, Yb = Gb, Wb = Hb, Zb = 1, Jb = 2;
function Xb(e, t, r, n, a, s) {
  var o = r & Zb, l = e.length, u = t.length;
  if (l != u && !(o && u > l))
    return !1;
  var c = s.get(e), d = s.get(t);
  if (c && d)
    return c == t && d == e;
  var p = -1, h = !0, g = r & Jb ? new Kb() : void 0;
  for (s.set(e, t), s.set(t, e); ++p < l; ) {
    var v = e[p], m = t[p];
    if (n)
      var S = o ? n(m, v, p, t, e, s) : n(v, m, p, e, t, s);
    if (S !== void 0) {
      if (S)
        continue;
      h = !1;
      break;
    }
    if (g) {
      if (!Yb(t, function(f, y) {
        if (!Wb(g, y) && (v === f || a(v, f, r, n, s)))
          return g.push(y);
      })) {
        h = !1;
        break;
      }
    } else if (!(v === m || a(v, m, r, n, s))) {
      h = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), h;
}
var Rs = Xb;
function e0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var t0 = e0;
function r0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var n0 = r0, yn = xe, vn = fa, a0 = mt, s0 = Rs, i0 = t0, o0 = n0, l0 = 1, u0 = 2, c0 = "[object Boolean]", d0 = "[object Date]", p0 = "[object Error]", f0 = "[object Map]", h0 = "[object Number]", g0 = "[object RegExp]", m0 = "[object Set]", y0 = "[object String]", v0 = "[object Symbol]", E0 = "[object ArrayBuffer]", b0 = "[object DataView]", En = yn ? yn.prototype : void 0, Ot = En ? En.valueOf : void 0;
function S0(e, t, r, n, a, s, o) {
  switch (r) {
    case b0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case E0:
      return !(e.byteLength != t.byteLength || !s(new vn(e), new vn(t)));
    case c0:
    case d0:
    case h0:
      return a0(+e, +t);
    case p0:
      return e.name == t.name && e.message == t.message;
    case g0:
    case y0:
      return e == t + "";
    case f0:
      var l = i0;
    case m0:
      var u = n & l0;
      if (l || (l = o0), e.size != t.size && !u)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      n |= u0, o.set(e, t);
      var d = s0(l(e), l(t), n, a, s, o);
      return o.delete(e), d;
    case v0:
      if (Ot)
        return Ot.call(e) == Ot.call(t);
  }
  return !1;
}
var $0 = S0, bn = pa, _0 = 1, x0 = Object.prototype, C0 = x0.hasOwnProperty;
function w0(e, t, r, n, a, s) {
  var o = r & _0, l = bn(e), u = l.length, c = bn(t), d = c.length;
  if (u != d && !o)
    return !1;
  for (var p = u; p--; ) {
    var h = l[p];
    if (!(o ? h in t : C0.call(t, h)))
      return !1;
  }
  var g = s.get(e), v = s.get(t);
  if (g && v)
    return g == t && v == e;
  var m = !0;
  s.set(e, t), s.set(t, e);
  for (var S = o; ++p < u; ) {
    h = l[p];
    var f = e[h], y = t[h];
    if (n)
      var x = o ? n(y, f, h, t, e, s) : n(f, y, h, e, t, s);
    if (!(x === void 0 ? f === y || a(f, y, r, n, s) : x)) {
      m = !1;
      break;
    }
    S || (S = h == "constructor");
  }
  if (m && !S) {
    var $ = e.constructor, F = t.constructor;
    $ != F && "constructor" in e && "constructor" in t && !(typeof $ == "function" && $ instanceof $ && typeof F == "function" && F instanceof F) && (m = !1);
  }
  return s.delete(e), s.delete(t), m;
}
var F0 = w0, Pt = cr, T0 = Rs, A0 = $0, I0 = F0, Sn = Le, $n = j, _n = ht, O0 = er, P0 = 1, xn = "[object Arguments]", Cn = "[object Array]", Ve = "[object Object]", R0 = Object.prototype, wn = R0.hasOwnProperty;
function D0(e, t, r, n, a, s) {
  var o = $n(e), l = $n(t), u = o ? Cn : Sn(e), c = l ? Cn : Sn(t);
  u = u == xn ? Ve : u, c = c == xn ? Ve : c;
  var d = u == Ve, p = c == Ve, h = u == c;
  if (h && _n(e)) {
    if (!_n(t))
      return !1;
    o = !0, d = !1;
  }
  if (h && !d)
    return s || (s = new Pt()), o || O0(e) ? T0(e, t, r, n, a, s) : A0(e, t, u, r, n, a, s);
  if (!(r & P0)) {
    var g = d && wn.call(e, "__wrapped__"), v = p && wn.call(t, "__wrapped__");
    if (g || v) {
      var m = g ? e.value() : e, S = v ? t.value() : t;
      return s || (s = new Pt()), a(m, S, r, n, s);
    }
  }
  return h ? (s || (s = new Pt()), I0(e, t, r, n, a, s)) : !1;
}
var k0 = D0, L0 = k0, Fn = te;
function Ds(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Fn(e) && !Fn(t) ? e !== e && t !== t : L0(e, t, r, n, Ds, a);
}
var ks = Ds, U0 = cr, N0 = ks, B0 = 1, z0 = 2;
function Q0(e, t, r, n) {
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
      var p = new U0();
      if (n)
        var h = n(c, d, u, e, t, p);
      if (!(h === void 0 ? N0(d, c, B0 | z0, n, p) : h))
        return !1;
    }
  }
  return !0;
}
var M0 = Q0, j0 = se;
function q0(e) {
  return e === e && !j0(e);
}
var Ls = q0, G0 = Ls, V0 = ze;
function H0(e) {
  for (var t = V0(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, G0(a)];
  }
  return t;
}
var K0 = H0;
function Y0(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Us = Y0, W0 = M0, Z0 = K0, J0 = Us;
function X0(e) {
  var t = Z0(e);
  return t.length == 1 && t[0][2] ? J0(t[0][0], t[0][1]) : function(r) {
    return r === e || W0(r, e, t);
  };
}
var eS = X0, tS = ks, rS = ta, nS = ir, aS = rr, sS = Ls, iS = Us, oS = Ne, lS = 1, uS = 2;
function cS(e, t) {
  return aS(e) && sS(t) ? iS(oS(e), t) : function(r) {
    var n = rS(r, e);
    return n === void 0 && n === t ? nS(r, e) : tS(t, n, lS | uS);
  };
}
var dS = cS;
function pS(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var fS = pS, hS = sr;
function gS(e) {
  return function(t) {
    return hS(t, e);
  };
}
var mS = gS, yS = fS, vS = mS, ES = rr, bS = Ne;
function SS(e) {
  return ES(e) ? yS(bS(e)) : vS(e);
}
var $S = SS, _S = eS, xS = dS, CS = lr, wS = j, FS = $S;
function TS(e) {
  return typeof e == "function" ? e : e == null ? CS : typeof e == "object" ? wS(e) ? xS(e[0], e[1]) : _S(e) : FS(e);
}
var Ns = TS, AS = $t, IS = Ps, OS = Ns;
function PS(e, t) {
  var r = {};
  return t = OS(t), IS(e, function(n, a, s) {
    AS(r, a, t(n, a, s));
  }), r;
}
var RS = PS;
const Bs = /* @__PURE__ */ D(RS);
function ve(e) {
  this._maxSize = e, this.clear();
}
ve.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
ve.prototype.get = function(e) {
  return this._values[e];
};
ve.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var DS = /[^.^\]^[]+|(?=\[\]|\.\.)/g, zs = /^\d+$/, kS = /^\d/, LS = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, US = /^\s*(['"]?)(.*?)(\1)\s*$/, _r = 512, Tn = new ve(_r), An = new ve(_r), In = new ve(_r), wt = {
  Cache: ve,
  split: Ht,
  normalizePath: Rt,
  setter: function(e) {
    var t = Rt(e);
    return An.get(e) || An.set(e, function(n, a) {
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
    return In.get(e) || In.set(e, function(a) {
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
    NS(Array.isArray(e) ? e : Ht(e), t, r);
  }
};
function Rt(e) {
  return Tn.get(e) || Tn.set(
    e,
    Ht(e).map(function(t) {
      return t.replace(US, "$2");
    })
  );
}
function Ht(e) {
  return e.match(DS) || [""];
}
function NS(e, t, r) {
  var n = e.length, a, s, o, l;
  for (s = 0; s < n; s++)
    a = e[s], a && (QS(a) && (a = '"' + a + '"'), l = xr(a), o = !l && /^\d+$/.test(a), t.call(r, a, l, o, s, e));
}
function xr(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function BS(e) {
  return e.match(kS) && !e.match(zs);
}
function zS(e) {
  return LS.test(e);
}
function QS(e) {
  return !xr(e) && (BS(e) || zS(e));
}
const He = {
  context: "$",
  value: "."
};
class ue {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
      throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === He.context, this.isValue = this.key[0] === He.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? He.context : this.isValue ? He.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && wt.getter(this.path, !0), this.map = r.map;
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
function ot() {
  return ot = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ot.apply(this, arguments);
}
function MS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Ke(e) {
  function t(r, n) {
    let {
      value: a,
      path: s = "",
      label: o,
      options: l,
      originalValue: u,
      sync: c
    } = r, d = MS(r, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name: p,
      test: h,
      params: g,
      message: v
    } = e;
    let {
      parent: m,
      context: S
    } = l;
    function f(_) {
      return ue.isRef(_) ? _.getValue(a, m, S) : _;
    }
    function y(_ = {}) {
      const O = Bs(ot({
        value: a,
        originalValue: u,
        label: o,
        path: _.path || s
      }, g, _.params), f), de = new Q(Q.formatError(_.message || v, O), a, O.path, _.type || p);
      return de.params = O, de;
    }
    let x = ot({
      path: s,
      parent: m,
      type: p,
      createError: y,
      resolve: f,
      options: l,
      originalValue: u
    }, d);
    if (!c) {
      try {
        Promise.resolve(h.call(x, a, x)).then((_) => {
          Q.isError(_) ? n(_) : _ ? n(null, _) : n(y());
        }).catch(n);
      } catch (_) {
        n(_);
      }
      return;
    }
    let $;
    try {
      var F;
      if ($ = h.call(x, a, x), typeof ((F = $) == null ? void 0 : F.then) == "function")
        throw new Error(`Validation test of type: "${x.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (_) {
      n(_);
      return;
    }
    Q.isError($) ? n($) : $ ? n(null, $) : n(y());
  }
  return t.OPTIONS = e, t;
}
let jS = (e) => e.substr(0, e.length - 1).substr(1);
function qS(e, t, r, n = r) {
  let a, s, o;
  return t ? (wt.forEach(t, (l, u, c) => {
    let d = u ? jS(l) : l;
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
class lt {
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
    const t = new lt();
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
class N {
  constructor(t) {
    this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new lt(), this._blacklist = new lt(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(fe.notType);
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
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = G({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Mt(G({}, this.spec, t)), r;
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
      let s = ke(t), o = ke(a);
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
    }, h = [];
    this._typeError && h.push(this._typeError);
    let g = [];
    this._whitelistError && g.push(this._whitelistError), this._blacklistError && g.push(this._blacklistError), Vt({
      args: p,
      value: d,
      path: s,
      sync: a,
      tests: h,
      endEarly: c
    }, (v) => {
      if (v)
        return void n(v, d);
      Vt({
        tests: this.tests.concat(g),
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
    return t == null ? t : typeof t == "function" ? t.call(this) : Mt(t);
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
  defined(t = fe.defined) {
    return this.test({
      message: t,
      name: "defined",
      exclusive: !0,
      test(r) {
        return r !== void 0;
      }
    });
  }
  required(t = fe.required) {
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
    }, r.message === void 0 && (r.message = fe.default), typeof r.test != "function")
      throw new TypeError("`test` is a required parameters");
    let n = this.clone(), a = Ke(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === r.name && (s || o.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = Os(t).map((s) => new ue(s));
    return a.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(new xb(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r._typeError = Ke({
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
  oneOf(t, r = fe.oneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._whitelist.add(a), n._blacklist.delete(a);
    }), n._whitelistError = Ke({
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
  notOneOf(t, r = fe.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n._blacklistError = Ke({
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
N.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"])
  N.prototype[`${e}At`] = function(t, r, n = {}) {
    const {
      parent: a,
      parentPath: s,
      schema: o
    } = qS(this, t, r, n.context);
    return o[e](a && a[s], G({}, n, {
      parent: a,
      path: t
    }));
  };
for (const e of ["equals", "is"])
  N.prototype[e] = N.prototype.oneOf;
for (const e of ["not", "nope"])
  N.prototype[e] = N.prototype.notOneOf;
N.prototype.optional = N.prototype.notRequired;
const GS = N;
GS.prototype;
const K = (e) => e == null;
let VS = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, HS = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, KS = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, YS = (e) => K(e) || e === e.trim(), WS = {}.toString();
function Pe() {
  return new Qs();
}
class Qs extends N {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === WS ? t : r;
      });
    });
  }
  _typeCheck(t) {
    return t instanceof String && (t = t.valueOf()), typeof t == "string";
  }
  _isPresent(t) {
    return super._isPresent(t) && !!t.length;
  }
  length(t, r = H.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      test(n) {
        return K(n) || n.length === this.resolve(t);
      }
    });
  }
  min(t, r = H.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(n) {
        return K(n) || n.length >= this.resolve(t);
      }
    });
  }
  max(t, r = H.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: t
      },
      test(n) {
        return K(n) || n.length <= this.resolve(t);
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
      message: a || H.matches,
      params: {
        regex: t
      },
      test: (o) => K(o) || o === "" && n || o.search(t) !== -1
    });
  }
  email(t = H.email) {
    return this.matches(VS, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = H.url) {
    return this.matches(HS, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = H.uuid) {
    return this.matches(KS, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = H.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: YS
    });
  }
  lowercase(t = H.lowercase) {
    return this.transform((r) => K(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => K(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = H.uppercase) {
    return this.transform((r) => K(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => K(r) || r === r.toUpperCase()
    });
  }
}
Pe.prototype = Qs.prototype;
var ZS = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function JS(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, a;
  if (a = ZS.exec(e)) {
    for (var s = 0, o; o = t[s]; ++s)
      a[o] = +a[o] || 0;
    a[2] = (+a[2] || 1) - 1, a[3] = +a[3] || 1, a[7] = a[7] ? String(a[7]).substr(0, 3) : 0, (a[8] === void 0 || a[8] === "") && (a[9] === void 0 || a[9] === "") ? n = +new Date(a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : (a[8] !== "Z" && a[9] !== void 0 && (r = a[10] * 60 + a[11], a[9] === "+" && (r = 0 - r)), n = Date.UTC(a[1], a[2], a[3], a[4], a[5] + r, a[6], a[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let Ms = /* @__PURE__ */ new Date(""), XS = (e) => Object.prototype.toString.call(e) === "[object Date]";
class js extends N {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = JS(t), isNaN(t) ? Ms : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return XS(t) && !isNaN(t.getTime());
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
        return K(a) || a >= this.resolve(n);
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
        return K(a) || a <= this.resolve(n);
      }
    });
  }
}
js.INVALID_DATE = Ms;
js.prototype;
function e$(e, t, r, n) {
  var a = -1, s = e == null ? 0 : e.length;
  for (n && s && (r = e[++a]); ++a < s; )
    r = t(r, e[a], a, e);
  return r;
}
var t$ = e$;
function r$(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var n$ = r$, a$ = n$, s$ = {
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
}, i$ = a$(s$), o$ = i$, l$ = o$, u$ = Ue, c$ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, d$ = "\\u0300-\\u036f", p$ = "\\ufe20-\\ufe2f", f$ = "\\u20d0-\\u20ff", h$ = d$ + p$ + f$, g$ = "[" + h$ + "]", m$ = RegExp(g$, "g");
function y$(e) {
  return e = u$(e), e && e.replace(c$, l$).replace(m$, "");
}
var v$ = y$, E$ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function b$(e) {
  return e.match(E$) || [];
}
var S$ = b$, $$ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function _$(e) {
  return $$.test(e);
}
var x$ = _$, qs = "\\ud800-\\udfff", C$ = "\\u0300-\\u036f", w$ = "\\ufe20-\\ufe2f", F$ = "\\u20d0-\\u20ff", T$ = C$ + w$ + F$, Gs = "\\u2700-\\u27bf", Vs = "a-z\\xdf-\\xf6\\xf8-\\xff", A$ = "\\xac\\xb1\\xd7\\xf7", I$ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", O$ = "\\u2000-\\u206f", P$ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Hs = "A-Z\\xc0-\\xd6\\xd8-\\xde", R$ = "\\ufe0e\\ufe0f", Ks = A$ + I$ + O$ + P$, Ys = "['’]", On = "[" + Ks + "]", D$ = "[" + T$ + "]", Ws = "\\d+", k$ = "[" + Gs + "]", Zs = "[" + Vs + "]", Js = "[^" + qs + Ks + Ws + Gs + Vs + Hs + "]", L$ = "\\ud83c[\\udffb-\\udfff]", U$ = "(?:" + D$ + "|" + L$ + ")", N$ = "[^" + qs + "]", Xs = "(?:\\ud83c[\\udde6-\\uddff]){2}", ei = "[\\ud800-\\udbff][\\udc00-\\udfff]", be = "[" + Hs + "]", B$ = "\\u200d", Pn = "(?:" + Zs + "|" + Js + ")", z$ = "(?:" + be + "|" + Js + ")", Rn = "(?:" + Ys + "(?:d|ll|m|re|s|t|ve))?", Dn = "(?:" + Ys + "(?:D|LL|M|RE|S|T|VE))?", ti = U$ + "?", ri = "[" + R$ + "]?", Q$ = "(?:" + B$ + "(?:" + [N$, Xs, ei].join("|") + ")" + ri + ti + ")*", M$ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", j$ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", q$ = ri + ti + Q$, G$ = "(?:" + [k$, Xs, ei].join("|") + ")" + q$, V$ = RegExp([
  be + "?" + Zs + "+" + Rn + "(?=" + [On, be, "$"].join("|") + ")",
  z$ + "+" + Dn + "(?=" + [On, be + Pn, "$"].join("|") + ")",
  be + "?" + Pn + "+" + Rn,
  be + "+" + Dn,
  j$,
  M$,
  Ws,
  G$
].join("|"), "g");
function H$(e) {
  return e.match(V$) || [];
}
var K$ = H$, Y$ = S$, W$ = x$, Z$ = Ue, J$ = K$;
function X$(e, t, r) {
  return e = Z$(e), t = r ? void 0 : t, t === void 0 ? W$(e) ? J$(e) : Y$(e) : e.match(t) || [];
}
var e1 = X$, t1 = t$, r1 = v$, n1 = e1, a1 = "['’]", s1 = RegExp(a1, "g");
function i1(e) {
  return function(t) {
    return t1(n1(r1(t).replace(s1, "")), e, "");
  };
}
var ni = i1, o1 = ni, l1 = o1(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), u1 = l1;
const kn = /* @__PURE__ */ D(u1);
function c1(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++n < a; )
    s[n] = e[n + t];
  return s;
}
var d1 = c1, p1 = d1;
function f1(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : p1(e, t, r);
}
var h1 = f1, g1 = "\\ud800-\\udfff", m1 = "\\u0300-\\u036f", y1 = "\\ufe20-\\ufe2f", v1 = "\\u20d0-\\u20ff", E1 = m1 + y1 + v1, b1 = "\\ufe0e\\ufe0f", S1 = "\\u200d", $1 = RegExp("[" + S1 + g1 + E1 + b1 + "]");
function _1(e) {
  return $1.test(e);
}
var ai = _1;
function x1(e) {
  return e.split("");
}
var C1 = x1, si = "\\ud800-\\udfff", w1 = "\\u0300-\\u036f", F1 = "\\ufe20-\\ufe2f", T1 = "\\u20d0-\\u20ff", A1 = w1 + F1 + T1, I1 = "\\ufe0e\\ufe0f", O1 = "[" + si + "]", Kt = "[" + A1 + "]", Yt = "\\ud83c[\\udffb-\\udfff]", P1 = "(?:" + Kt + "|" + Yt + ")", ii = "[^" + si + "]", oi = "(?:\\ud83c[\\udde6-\\uddff]){2}", li = "[\\ud800-\\udbff][\\udc00-\\udfff]", R1 = "\\u200d", ui = P1 + "?", ci = "[" + I1 + "]?", D1 = "(?:" + R1 + "(?:" + [ii, oi, li].join("|") + ")" + ci + ui + ")*", k1 = ci + ui + D1, L1 = "(?:" + [ii + Kt + "?", Kt, oi, li, O1].join("|") + ")", U1 = RegExp(Yt + "(?=" + Yt + ")|" + L1 + k1, "g");
function N1(e) {
  return e.match(U1) || [];
}
var B1 = N1, z1 = C1, Q1 = ai, M1 = B1;
function j1(e) {
  return Q1(e) ? M1(e) : z1(e);
}
var q1 = j1, G1 = h1, V1 = ai, H1 = q1, K1 = Ue;
function Y1(e) {
  return function(t) {
    t = K1(t);
    var r = V1(t) ? H1(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? G1(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var W1 = Y1, Z1 = W1, J1 = Z1("toUpperCase"), X1 = J1, e_ = Ue, t_ = X1;
function r_(e) {
  return t_(e_(e).toLowerCase());
}
var n_ = r_, a_ = n_, s_ = ni, i_ = s_(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? a_(t) : t);
}), o_ = i_;
const l_ = /* @__PURE__ */ D(o_);
var u_ = $t, c_ = Ps, d_ = Ns;
function p_(e, t) {
  var r = {};
  return t = d_(t), c_(e, function(n, a, s) {
    u_(r, t(n, a, s), n);
  }), r;
}
var f_ = p_;
const h_ = /* @__PURE__ */ D(f_);
var Cr = { exports: {} };
Cr.exports = function(e) {
  return di(g_(e), e);
};
Cr.exports.array = di;
function di(e, t) {
  var r = e.length, n = new Array(r), a = {}, s = r, o = m_(t), l = y_(e);
  for (t.forEach(function(c) {
    if (!l.has(c[0]) || !l.has(c[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); s--; )
    a[s] || u(e[s], s, /* @__PURE__ */ new Set());
  return n;
  function u(c, d, p) {
    if (p.has(c)) {
      var h;
      try {
        h = ", node was:" + JSON.stringify(c);
      } catch {
        h = "";
      }
      throw new Error("Cyclic dependency" + h);
    }
    if (!l.has(c))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(c));
    if (!a[d]) {
      a[d] = !0;
      var g = o.get(c) || /* @__PURE__ */ new Set();
      if (g = Array.from(g), d = g.length) {
        p.add(c);
        do {
          var v = g[--d];
          u(v, l.get(v), p);
        } while (d);
        p.delete(c);
      }
      n[--r] = c;
    }
  }
}
function g_(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.add(a[0]), t.add(a[1]);
  }
  return Array.from(t);
}
function m_(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.has(a[0]) || t.set(a[0], /* @__PURE__ */ new Set()), t.has(a[1]) || t.set(a[1], /* @__PURE__ */ new Set()), t.get(a[0]).add(a[1]);
  }
  return t;
}
function y_(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var v_ = Cr.exports;
const E_ = /* @__PURE__ */ D(v_);
function b_(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([o, l]) => `${o}-${l}`));
  function s(o, l) {
    let u = wt.split(o)[0];
    n.add(u), a.has(`${l}-${u}`) || r.push([l, u]);
  }
  for (const o in e)
    if (st(e, o)) {
      let l = e[o];
      n.add(o), ue.isRef(l) && l.isSibling ? s(l.path, o) : Is(l) && "deps" in l && l.deps.forEach((u) => s(u, o));
    }
  return E_.array(Array.from(n), r).reverse();
}
function Ln(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if (((s = t.path) == null ? void 0 : s.indexOf(n)) !== -1)
      return r = a, !0;
  }), r;
}
function pi(e) {
  return (t, r) => Ln(e, t) - Ln(e, r);
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
let Un = (e) => Object.prototype.toString.call(e) === "[object Object]";
function S_(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const $_ = pi([]);
class fi extends N {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = $_, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
    return Un(t) || typeof t == "function";
  }
  _cast(t, r = {}) {
    var n;
    let a = super._cast(t, r);
    if (a === void 0)
      return this.getDefault();
    if (!this._typeCheck(a))
      return a;
    let s = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, l = this._nodes.concat(Object.keys(a).filter((p) => this._nodes.indexOf(p) === -1)), u = {}, c = Se({}, r, {
      parent: u,
      __validating: r.__validating || !1
    }), d = !1;
    for (const p of l) {
      let h = s[p], g = st(a, p);
      if (h) {
        let v, m = a[p];
        c.path = (r.path ? `${r.path}.` : "") + p, h = h.resolve({
          value: m,
          context: r.context,
          parent: u
        });
        let S = "spec" in h ? h.spec : void 0, f = S == null ? void 0 : S.strict;
        if (S != null && S.strip) {
          d = d || p in a;
          continue;
        }
        v = !r.__validating || !f ? (
          // TODO: use _cast, this is double resolving
          h.cast(a[p], c)
        ) : a[p], v !== void 0 && (u[p] = v);
      } else
        g && !o && (u[p] = a[p]);
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
      if (!c || !Un(p)) {
        n(a[0] || null, p);
        return;
      }
      l = l || p;
      let h = this._nodes.map((g) => (v, m) => {
        let S = g.indexOf(".") === -1 ? (r.path ? `${r.path}.` : "") + g : `${r.path || ""}["${g}"]`, f = this.fields[g];
        if (f && "validate" in f) {
          f.validate(p[g], Se({}, r, {
            // @ts-ignore
            path: S,
            from: o,
            // inner fields are always strict:
            // 1. this isn't strict so the casting will also have cast inner values
            // 2. this is strict in which case the nested values weren't cast either
            strict: !0,
            parent: p,
            originalValue: l[g]
          }), m);
          return;
        }
        m(null);
      });
      Vt({
        sync: s,
        tests: h,
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
    return r.fields = Se({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), n = r.fields;
    for (let [a, s] of Object.entries(this.fields)) {
      const o = n[a];
      o === void 0 ? n[a] = s : o instanceof N && s instanceof N && (n[a] = s.concat(o));
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
    return n.fields = a, n._sortErrors = pi(Object.keys(a)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = b_(a, n._excludedEdges), n;
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
    let a = wt.getter(t, !0);
    return this.transform((s) => {
      if (s == null)
        return s;
      let o = s;
      return st(s, t) && (o = Se({}, s), n || delete o[t], o[r] = a(s)), o;
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
        const s = S_(this.schema, a);
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
    return this.transform((r) => r && h_(r, (n, a) => t(a)));
  }
  camelCase() {
    return this.transformKeys(l_);
  }
  snakeCase() {
    return this.transformKeys(kn);
  }
  constantCase() {
    return this.transformKeys((t) => kn(t).toUpperCase());
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
const __ = {
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
}, x_ = Je({
  task: Je({
    title: Pe().required("Title is required"),
    recordType: Pe().required("Record type is required"),
    serializer: Pe().required("Serializer is required"),
    mode: Pe().required("Mode is required")
  }),
  metadata: Je().nullable()
}), C_ = ({ onSubmit: e }) => {
  const t = async (r) => {
    try {
      const n = await ZE(r.task);
      if (!n)
        throw new Error("Failed to create import task");
      if (r.metadata && (console.log("Uploading metadata file..."), await _s(n.id, r.metadata), console.log("Metadata file uploaded successfully")), r.files && r.files.length > 0) {
        console.log(`Uploading ${r.files.length} attachment files...`);
        const a = r.files.map((s) => s.name);
        await ws(n.id, a), console.log("Files initialized on server");
        for (const s of r.files)
          console.log(`Uploading file: ${s.name}`), await Fs(n.id, s.name, s), console.log(`File uploaded: ${s.name}`), console.log(`Committing file: ${s.name}`), await xs(n.id, s.name), console.log(`File committed: ${s.name}`);
        console.log("All attachment files uploaded and committed successfully");
      }
      if (r.metadata && (console.log("Starting task validation..."), await $r(n.id))) {
        console.log("Checking task status...");
        const s = await Sr(n.id);
        console.log("Task status:", s);
      }
      e == null || e();
    } catch (n) {
      throw console.error("Error creating import task:", n), n;
    }
  };
  return /* @__PURE__ */ i.createElement(
    Bi,
    {
      formik: {
        initialValues: __,
        validationSchema: x_,
        onSubmit: t
      }
    },
    /* @__PURE__ */ i.createElement(ib, null)
  );
}, w_ = () => {
  const [e, t] = M(!1), { refreshSearch: r } = Ct(), n = A(() => {
    t(!1), r();
  }, [r]);
  return /* @__PURE__ */ i.createElement(
    oe,
    {
      closeIcon: !0,
      onClose: () => t(!1),
      onOpen: () => t(!0),
      open: e,
      trigger: /* @__PURE__ */ i.createElement(k, { color: "green", icon: !0, labelPosition: "left" }, /* @__PURE__ */ i.createElement(I, { name: "add" }), "New Import")
    },
    /* @__PURE__ */ i.createElement(Ti, null, "New Import Task"),
    /* @__PURE__ */ i.createElement(Ai, null, /* @__PURE__ */ i.createElement(C_, { onSubmit: n })),
    /* @__PURE__ */ i.createElement(Ii, null, /* @__PURE__ */ i.createElement(k, { onClick: () => t(!1) }, "Close"))
  );
}, F_ = ({
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
  return /* @__PURE__ */ i.createElement(Re, { activeIndex: 0, compact: !0, size: "tiny" }, r.map(({ key: o, label: l, value: u }) => /* @__PURE__ */ i.createElement(
    Re.Item,
    {
      key: o,
      name: o,
      active: (n == null ? void 0 : n[1]) === u || u === null && !n,
      onClick: () => a(u)
    },
    l
  )));
}, hi = Ya(F_), T_ = ({
  appId: e = "search"
}) => {
  const { showFacets: t, showImportModal: r } = Ct().config;
  return /* @__PURE__ */ i.createElement(b, { id: `${e}.SearchBarRow` }, /* @__PURE__ */ i.createElement(
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
      DE,
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
    r && /* @__PURE__ */ i.createElement("div", { style: { flex: "0 0 auto" } }, /* @__PURE__ */ i.createElement(w_, null))
  ));
}, A_ = () => {
  const { config: e } = Ct();
  return /* @__PURE__ */ i.createElement(B, null, /* @__PURE__ */ i.createElement(B.Row, { verticalAlign: "middle" }, /* @__PURE__ */ i.createElement(B.Column, { width: 4, textAlign: "left" }, /* @__PURE__ */ i.createElement(dE, { label: (t) => /* @__PURE__ */ i.createElement("div", null, t, " item(s)") })), /* @__PURE__ */ i.createElement(B.Column, { width: 8, textAlign: "center" }, /* @__PURE__ */ i.createElement(bE, { options: { size: "mini" } })), /* @__PURE__ */ i.createElement(B.Column, { width: 4, textAlign: "right" }, /* @__PURE__ */ i.createElement(
    OE,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ i.createElement("p", null, t, " results per page")
    }
  ))));
}, gi = ({
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
  }, n = new Sa(r.searchApi), a = {
    [`${r.appId}.ResultsList.item`]: tb,
    [`${r.appId}.ResultsList.container`]: rb,
    [`${r.appId}.SearchFacets`]: hi,
    ...t
  };
  return /* @__PURE__ */ i.createElement(xi.Provider, { value: a }, /* @__PURE__ */ i.createElement(
    Wv,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ i.createElement(qE, { config: r }, /* @__PURE__ */ i.createElement(T_, { appId: r.appId }), /* @__PURE__ */ i.createElement(FE, null, /* @__PURE__ */ i.createElement(hE, null), /* @__PURE__ */ i.createElement(as, null)), r.showSearchFooter && /* @__PURE__ */ i.createElement(A_, null))
  ));
}, mi = _i(
  void 0
), I_ = ({
  taskId: e,
  children: t
}) => /* @__PURE__ */ i.createElement(mi.Provider, { value: { taskId: e } }, /* @__PURE__ */ i.createElement(
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
  const e = P(mi);
  if (!e)
    throw new Error("useTaskDetails must be used within a TaskDetailsProvider");
  return e;
}, O_ = ({ children: e }) => /* @__PURE__ */ i.createElement(Qn, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(W, null, "ID"), /* @__PURE__ */ i.createElement(W, null, "Title"), /* @__PURE__ */ i.createElement(W, null, "Status"), /* @__PURE__ */ i.createElement(W, null))), /* @__PURE__ */ i.createElement(jn, null, e)), P_ = ({
  openModal: e,
  setOpenModal: t,
  result: r
}) => /* @__PURE__ */ i.createElement(oe, { open: e, onClose: () => t(!1), closeIcon: !0 }, /* @__PURE__ */ i.createElement(oe.Header, null, "Record Errors"), /* @__PURE__ */ i.createElement(oe.Content, null, r.errors && r.errors.length > 0 ? /* @__PURE__ */ i.createElement(U, { negative: !0, icon: !0 }, /* @__PURE__ */ i.createElement(I, { name: "exclamation triangle" }), /* @__PURE__ */ i.createElement(U.Content, null, /* @__PURE__ */ i.createElement(U.Header, null, "Serializer validation failed"), /* @__PURE__ */ i.createElement(me, { bulleted: !0 }, r.errors.map((n) => /* @__PURE__ */ i.createElement(me.Item, { key: `${n.type}-${r.id}` }, n.msg))))) : /* @__PURE__ */ i.createElement(U, { positive: !0, icon: !0 }, /* @__PURE__ */ i.createElement(I, { name: "check circle" }), /* @__PURE__ */ i.createElement(U.Content, null, /* @__PURE__ */ i.createElement(U.Header, null, "Validation successful"), "No errors found for this record."))), /* @__PURE__ */ i.createElement(oe.Actions, null, /* @__PURE__ */ i.createElement(k, { onClick: () => t(!1), content: "Close", primary: !0 }))), R_ = ({
  result: e,
  index: t
}) => {
  var p;
  const [r, n] = M(
    "idle"
  ), [a, s] = M(!1);
  if (!e)
    return null;
  const o = async () => {
    try {
      n("copying"), await navigator.clipboard.writeText(e.id), n("copied"), setTimeout(() => {
        n("idle");
      }, 2e3);
    } catch {
      n("idle");
    }
  }, l = e.errors && e.errors.length > 0, u = YE(e.status), c = (h) => h === "red" ? "times" : h === "green" || h === "blue" ? "check" : "question", d = [
    ...l ? [
      {
        key: "view-errors",
        text: "View Errors",
        value: "view-errors",
        icon: "exclamation triangle",
        onClick: () => s(!0)
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
          await WE(e.id), console.log(`Record ${e.id} is being processed.`);
        } catch (h) {
          console.error("Error running record:", h);
        }
      }
    }
  ];
  return /* @__PURE__ */ i.createElement(ct, { key: t }, /* @__PURE__ */ i.createElement(Y, null, /* @__PURE__ */ i.createElement("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem" } }, /* @__PURE__ */ i.createElement("code", { style: { fontSize: "0.9em", color: "#666" } }, e.id.length > 20 ? `${e.id.substring(0, 20)}…` : e.id), /* @__PURE__ */ i.createElement(
    Ar,
    {
      content: r === "copied" ? "Copied!" : "Copy ID",
      trigger: /* @__PURE__ */ i.createElement(
        k,
        {
          size: "mini",
          circular: !0,
          icon: !0,
          loading: r === "copying",
          onClick: o,
          color: r === "copied" ? "green" : void 0
        },
        /* @__PURE__ */ i.createElement(I, { name: r === "copied" ? "check" : "copy" })
      ),
      position: "top center",
      size: "mini"
    }
  ))), /* @__PURE__ */ i.createElement(Y, null, /* @__PURE__ */ i.createElement("div", { style: { maxWidth: "300px" } }, ((p = e.src_data) == null ? void 0 : p.title) || /* @__PURE__ */ i.createElement("em", { style: { color: "#999" } }, "No Title Available"))), /* @__PURE__ */ i.createElement(Y, null, /* @__PURE__ */ i.createElement(ae, { color: u, size: "small" }, /* @__PURE__ */ i.createElement(I, { name: c(u) }), at(e.status)), l && /* @__PURE__ */ i.createElement(
    Ar,
    {
      content: `${e.errors.length} error${e.errors.length > 1 ? "s" : ""} found`,
      trigger: /* @__PURE__ */ i.createElement(
        I,
        {
          name: "exclamation triangle",
          color: "red",
          style: { marginLeft: "0.5rem", cursor: "help" }
        }
      ),
      position: "top center",
      size: "mini"
    }
  )), /* @__PURE__ */ i.createElement(Y, { textAlign: "right" }, /* @__PURE__ */ i.createElement(
    le,
    {
      button: !0,
      className: "icon",
      floating: !0,
      labeled: !0,
      icon: "ellipsis horizontal",
      text: "Actions",
      size: "mini"
    },
    /* @__PURE__ */ i.createElement(le.Menu, null, d.map((h) => /* @__PURE__ */ i.createElement(
      le.Item,
      {
        key: h.key,
        icon: h.icon,
        text: h.text,
        disabled: h.disabled,
        onClick: h.onClick
      }
    )))
  ), /* @__PURE__ */ i.createElement(
    P_,
    {
      setOpenModal: s,
      openModal: a,
      result: e
    }
  )));
}, D_ = () => {
  const { taskId: e } = yi(), t = {
    "search.SearchBarRow": () => null,
    "search.ResultsList.container": O_,
    "search.ResultsList.item": R_
  };
  return /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement(ge, { as: "h3" }, "Task Records"), /* @__PURE__ */ i.createElement(
    gi,
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
}, k_ = () => {
  const { taskId: e } = yi(), [t, r] = M(null), [n, a] = M(!1), s = (u) => {
    var d;
    const c = ((d = u.target.files) == null ? void 0 : d[0]) || null;
    r(c || null);
  }, o = () => {
    a(!1), r(null);
  }, l = async () => {
    if (t)
      try {
        await _s(e, t);
        const u = await $r(e);
        if (console.log("validate", u), u) {
          const c = await Cs(e);
          c && console.log("Task started successfully:", c);
          const d = await Sr(e);
          console.log("Task status:", d);
        }
        a(!1), r(null);
      } catch (u) {
        console.error("Error uploading metadata:", u);
      }
  };
  return /* @__PURE__ */ i.createElement(
    oe,
    {
      open: n,
      onOpen: () => a(!0),
      onClose: o,
      size: "small",
      closeIcon: !0,
      trigger: /* @__PURE__ */ i.createElement(k, { icon: "upload", size: "small", content: "Upload New Metadata" })
    },
    /* @__PURE__ */ i.createElement(ge, { icon: !0 }, /* @__PURE__ */ i.createElement(I, { name: "upload" }), "Upload Metadata"),
    /* @__PURE__ */ i.createElement(oe.Content, null, /* @__PURE__ */ i.createElement(De, { onSubmit: l }, /* @__PURE__ */ i.createElement(De.Field, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "fileInput" }, "Select Metadata File"), /* @__PURE__ */ i.createElement(
      "input",
      {
        id: "fileInput",
        type: "file",
        onChange: s,
        accept: ".csv"
      }
    ), t && /* @__PURE__ */ i.createElement("div", { style: { marginTop: "0.5rem", color: "#666" } }, "Selected: ", t.name)))),
    /* @__PURE__ */ i.createElement(oe.Actions, null, /* @__PURE__ */ i.createElement(k, { onClick: o, color: "grey" }, /* @__PURE__ */ i.createElement(I, { name: "cancel" }), "Cancel"), /* @__PURE__ */ i.createElement(k, { onClick: l, color: "blue", disabled: !t }, /* @__PURE__ */ i.createElement(I, { name: "upload" }), "Upload"))
  );
}, L_ = ({ taskId: e }) => {
  var f, y, x, $, F, _;
  const [t, r] = M(null), [n, a] = M(!0), [s, o] = M(null), { getStatus: l, isGettingStatus: u } = Ts(e, {
    onStatusChangeSuccess: r
  }), c = A(async () => {
    try {
      if (a(!0), o(null), !await l())
        throw new Error("Task not found");
    } catch (O) {
      console.error("Error fetching task details:", O), o(
        O instanceof Error ? O.message : "Failed to fetch task details"
      );
    } finally {
      a(!1);
    }
  }, [l]);
  if (ut(() => {
    e && c();
  }, [e, c]), n || u)
    return /* @__PURE__ */ i.createElement(he, null, /* @__PURE__ */ i.createElement(zn, { content: "Loading task details..." }));
  if (s)
    return /* @__PURE__ */ i.createElement(U, { negative: !0, icon: !0 }, /* @__PURE__ */ i.createElement(I, { name: "exclamation triangle" }), /* @__PURE__ */ i.createElement(U.Content, null, /* @__PURE__ */ i.createElement(U.Header, null, "Error Loading Task"), s));
  if (!t)
    return /* @__PURE__ */ i.createElement(U, { warning: !0, icon: !0 }, /* @__PURE__ */ i.createElement(I, { name: "search" }), /* @__PURE__ */ i.createElement(U.Content, null, /* @__PURE__ */ i.createElement(U.Header, null, "Task Not Found"), "The requested task could not be found."));
  const d = ((f = t.records_status) == null ? void 0 : f.total_records) || 0, p = ((y = t.records_status) == null ? void 0 : y.validated) || 0, h = ((x = t.records_status) == null ? void 0 : x.success) || 0, g = ((($ = t.records_status) == null ? void 0 : $["import failed"]) || 0) + (((F = t.records_status) == null ? void 0 : F["validation failed"]) || 0) + (((_ = t.records_status) == null ? void 0 : _["serializer validation failed"]) || 0), v = d > 0 ? p / d * 100 : 0, m = d > 0 ? h / d * 100 : 0, S = d > 0 ? g / d * 100 : 0;
  return /* @__PURE__ */ i.createElement(I_, { taskId: e }, /* @__PURE__ */ i.createElement(he.Group, { compact: !0 }, /* @__PURE__ */ i.createElement(he, null, /* @__PURE__ */ i.createElement(B, null, /* @__PURE__ */ i.createElement(B.Row, { verticalAlign: "middle" }, /* @__PURE__ */ i.createElement(B.Column, { width: 8, verticalAlign: "middle" }, /* @__PURE__ */ i.createElement(ge, { as: "h2" }, /* @__PURE__ */ i.createElement(I, { name: "tasks" }), /* @__PURE__ */ i.createElement(ge.Content, null, t.title, t.description && /* @__PURE__ */ i.createElement(ge.Subheader, null, t.description)))), /* @__PURE__ */ i.createElement(B.Column, { width: 8, textAlign: "right" }, /* @__PURE__ */ i.createElement(
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
    t.status && /* @__PURE__ */ i.createElement(Ss, { size: "large", status: t.status }, at(t.status)),
    /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement(
      k,
      {
        size: "small",
        color: "blue",
        icon: "refresh",
        content: "Refresh",
        onClick: () => l(),
        loading: n
      }
    ), /* @__PURE__ */ i.createElement(k_, null), /* @__PURE__ */ i.createElement(
      k,
      {
        size: "small",
        disabled: !0,
        color: "green",
        icon: "play",
        content: "Run Task"
      }
    ))
  ))))), d > 0 && /* @__PURE__ */ i.createElement(he, null, /* @__PURE__ */ i.createElement(ge, { as: "h4" }, /* @__PURE__ */ i.createElement(I, { name: "chart bar" }), "Progress Overview"), /* @__PURE__ */ i.createElement(X.Group, { widths: "three" }, /* @__PURE__ */ i.createElement(X, { color: "blue" }, /* @__PURE__ */ i.createElement(X.Value, null, p), /* @__PURE__ */ i.createElement(X.Label, null, "Validated")), /* @__PURE__ */ i.createElement(X, { color: "red" }, /* @__PURE__ */ i.createElement(X.Value, null, g), /* @__PURE__ */ i.createElement(X.Label, null, "With Errors")), /* @__PURE__ */ i.createElement(X, { color: "green" }, /* @__PURE__ */ i.createElement(X.Value, null, h), /* @__PURE__ */ i.createElement(X.Label, null, "Imported"))), /* @__PURE__ */ i.createElement(Oi, null), /* @__PURE__ */ i.createElement(B, { columns: 3, divided: !0 }, /* @__PURE__ */ i.createElement(B.Column, null, /* @__PURE__ */ i.createElement("div", { style: { textAlign: "center", marginBottom: "0.5rem" } }, /* @__PURE__ */ i.createElement("strong", null, "Validation Progress")), /* @__PURE__ */ i.createElement(We, { percent: v, color: "blue" }, p, " / ", d)), /* @__PURE__ */ i.createElement(B.Column, null, /* @__PURE__ */ i.createElement("div", { style: { textAlign: "center", marginBottom: "0.5rem" } }, /* @__PURE__ */ i.createElement("strong", null, "Error Records")), /* @__PURE__ */ i.createElement(We, { percent: S, color: "red" }, g, " / ", d)), /* @__PURE__ */ i.createElement(B.Column, null, /* @__PURE__ */ i.createElement("div", { style: { textAlign: "center", marginBottom: "0.5rem" } }, /* @__PURE__ */ i.createElement("strong", null, "Import Progress")), /* @__PURE__ */ i.createElement(We, { percent: m, color: "green" }, h, " / ", d))))), /* @__PURE__ */ i.createElement(D_, null));
}, W_ = {
  Search: gi,
  TaskDetails: L_
}, Z_ = {
  CREATED: "created",
  VALIDATING: "validating",
  SERIALIZER_VALIDATION_FAILED: "serializer validation failed",
  VALIDATION_FAILED: "validation failed",
  VALIDATED: "validated",
  IMPORT_FAILED: "import failed",
  IMPORTED: "success"
}, J_ = {
  CREATED: "created",
  VALIDATING: "validating",
  VALIDATION_FAILED: "validated with failures",
  VALIDATED: "validated",
  IMPORTING: "importing",
  IMPORT_FAILED: "imported with failures",
  SUCCESS: "success",
  DAMAGED: "damaged"
};
export {
  W_ as BulkImporter,
  w_ as ImportModal,
  J_ as ImporterTaskStates,
  Z_ as InvenioImporterRecordStatus,
  gi as Search,
  L_ as TaskDetails,
  R_ as TaskRecordItem,
  at as capitalizeFirstLetter,
  K_ as createSearchApi,
  Y_ as createSearchApiConfig,
  GE as formatDate,
  KE as getCsrfToken,
  YE as getStatusColor
};
