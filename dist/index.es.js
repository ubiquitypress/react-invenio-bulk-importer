import l, { Component as A, useContext as $, useEffect as Rt, useCallback as Pt, useState as ft, Fragment as ai } from "react";
import { Label as xn, Icon as ie, Input as Cn, Button as oe, List as wn, Checkbox as Tn, Card as O, Segment as si, Header as An, Menu as _e, Pagination as ii, Item as re, Loader as oi, Dropdown as $e, Image as li, TableRow as Fn, TableCell as V, Table as ui, TableHeader as ci, TableHeaderCell as H, TableBody as di, Form as dr, Modal as pi, ModalHeader as hi, ModalContent as fi, ModalActions as gi, Grid as me } from "semantic-ui-react";
import g, { OverridableContext as mi } from "react-overridable";
import De from "axios";
import le from "qs";
import { connect as x, Provider as yi } from "react-redux";
import { combineReducers as bi, createStore as vi, applyMiddleware as Si } from "redux";
import _i from "redux-thunk";
import Ei from "lodash";
import { TextField as $i, SelectField as lt, TextAreaField as xi, BaseForm as Ci } from "react-invenio-forms";
import { useFormikContext as wi } from "formik";
var Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function T(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ti = Object.prototype;
function Ai(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ti;
  return e === r;
}
var He = Ai;
function Fi(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var In = Fi, Ii = In, Oi = Ii(Object.keys, Object), Ri = Oi, Pi = He, ki = Ri, Di = Object.prototype, Li = Di.hasOwnProperty;
function Bi(e) {
  if (!Pi(e))
    return ki(e);
  var t = [];
  for (var r in Object(e))
    Li.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var On = Bi, Ni = typeof Ie == "object" && Ie && Ie.Object === Object && Ie, Rn = Ni, Ui = Rn, Mi = typeof self == "object" && self && self.Object === Object && self, ji = Ui || Mi || Function("return this")(), M = ji, Qi = M, zi = Qi.Symbol, ue = zi, pr = ue, Pn = Object.prototype, qi = Pn.hasOwnProperty, Gi = Pn.toString, ye = pr ? pr.toStringTag : void 0;
function Vi(e) {
  var t = qi.call(e, ye), r = e[ye];
  try {
    e[ye] = void 0;
    var n = !0;
  } catch {
  }
  var a = Gi.call(e);
  return n && (t ? e[ye] = r : delete e[ye]), a;
}
var Hi = Vi, Yi = Object.prototype, Wi = Yi.toString;
function Ki(e) {
  return Wi.call(e);
}
var Xi = Ki, hr = ue, Zi = Hi, Ji = Xi, eo = "[object Null]", to = "[object Undefined]", fr = hr ? hr.toStringTag : void 0;
function ro(e) {
  return e == null ? e === void 0 ? to : eo : fr && fr in Object(e) ? Zi(e) : Ji(e);
}
var W = ro;
function no(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var q = no;
const ao = /* @__PURE__ */ T(q);
var so = W, io = q, oo = "[object AsyncFunction]", lo = "[object Function]", uo = "[object GeneratorFunction]", co = "[object Proxy]";
function po(e) {
  if (!io(e))
    return !1;
  var t = so(e);
  return t == lo || t == uo || t == oo || t == co;
}
var kn = po, ho = M, fo = ho["__core-js_shared__"], go = fo, ut = go, gr = function() {
  var e = /[^.]+$/.exec(ut && ut.keys && ut.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function mo(e) {
  return !!gr && gr in e;
}
var yo = mo, bo = Function.prototype, vo = bo.toString;
function So(e) {
  if (e != null) {
    try {
      return vo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Dn = So, _o = kn, Eo = yo, $o = q, xo = Dn, Co = /[\\^$.*+?()[\]{}|]/g, wo = /^\[object .+?Constructor\]$/, To = Function.prototype, Ao = Object.prototype, Fo = To.toString, Io = Ao.hasOwnProperty, Oo = RegExp(
  "^" + Fo.call(Io).replace(Co, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ro(e) {
  if (!$o(e) || Eo(e))
    return !1;
  var t = _o(e) ? Oo : wo;
  return t.test(xo(e));
}
var Po = Ro;
function ko(e, t) {
  return e == null ? void 0 : e[t];
}
var Do = ko, Lo = Po, Bo = Do;
function No(e, t) {
  var r = Bo(e, t);
  return Lo(r) ? r : void 0;
}
var J = No, Uo = J, Mo = M, jo = Uo(Mo, "DataView"), Qo = jo, zo = J, qo = M, Go = zo(qo, "Map"), kt = Go, Vo = J, Ho = M, Yo = Vo(Ho, "Promise"), Wo = Yo, Ko = J, Xo = M, Zo = Ko(Xo, "Set"), Jo = Zo, el = J, tl = M, rl = el(tl, "WeakMap"), nl = rl, gt = Qo, mt = kt, yt = Wo, bt = Jo, vt = nl, Ln = W, ce = Dn, mr = "[object Map]", al = "[object Object]", yr = "[object Promise]", br = "[object Set]", vr = "[object WeakMap]", Sr = "[object DataView]", sl = ce(gt), il = ce(mt), ol = ce(yt), ll = ce(bt), ul = ce(vt), K = Ln;
(gt && K(new gt(new ArrayBuffer(1))) != Sr || mt && K(new mt()) != mr || yt && K(yt.resolve()) != yr || bt && K(new bt()) != br || vt && K(new vt()) != vr) && (K = function(e) {
  var t = Ln(e), r = t == al ? e.constructor : void 0, n = r ? ce(r) : "";
  if (n)
    switch (n) {
      case sl:
        return Sr;
      case il:
        return mr;
      case ol:
        return yr;
      case ll:
        return br;
      case ul:
        return vr;
    }
  return t;
});
var xe = K;
function cl(e) {
  return e != null && typeof e == "object";
}
var j = cl, dl = W, pl = j, hl = "[object Arguments]";
function fl(e) {
  return pl(e) && dl(e) == hl;
}
var gl = fl, _r = gl, ml = j, Bn = Object.prototype, yl = Bn.hasOwnProperty, bl = Bn.propertyIsEnumerable, vl = _r(function() {
  return arguments;
}()) ? _r : function(e) {
  return ml(e) && yl.call(e, "callee") && !bl.call(e, "callee");
}, Ye = vl, Sl = Array.isArray, P = Sl;
const Nn = /* @__PURE__ */ T(P);
var _l = 9007199254740991;
function El(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= _l;
}
var Dt = El, $l = kn, xl = Dt;
function Cl(e) {
  return e != null && xl(e.length) && !$l(e);
}
var We = Cl, Ne = { exports: {} };
function wl() {
  return !1;
}
var Tl = wl;
Ne.exports;
(function(e, t) {
  var r = M, n = Tl, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, o = i ? r.Buffer : void 0, u = o ? o.isBuffer : void 0, c = u || n;
  e.exports = c;
})(Ne, Ne.exports);
var Ke = Ne.exports, Al = W, Fl = Dt, Il = j, Ol = "[object Arguments]", Rl = "[object Array]", Pl = "[object Boolean]", kl = "[object Date]", Dl = "[object Error]", Ll = "[object Function]", Bl = "[object Map]", Nl = "[object Number]", Ul = "[object Object]", Ml = "[object RegExp]", jl = "[object Set]", Ql = "[object String]", zl = "[object WeakMap]", ql = "[object ArrayBuffer]", Gl = "[object DataView]", Vl = "[object Float32Array]", Hl = "[object Float64Array]", Yl = "[object Int8Array]", Wl = "[object Int16Array]", Kl = "[object Int32Array]", Xl = "[object Uint8Array]", Zl = "[object Uint8ClampedArray]", Jl = "[object Uint16Array]", eu = "[object Uint32Array]", E = {};
E[Vl] = E[Hl] = E[Yl] = E[Wl] = E[Kl] = E[Xl] = E[Zl] = E[Jl] = E[eu] = !0;
E[Ol] = E[Rl] = E[ql] = E[Pl] = E[Gl] = E[kl] = E[Dl] = E[Ll] = E[Bl] = E[Nl] = E[Ul] = E[Ml] = E[jl] = E[Ql] = E[zl] = !1;
function tu(e) {
  return Il(e) && Fl(e.length) && !!E[Al(e)];
}
var ru = tu;
function nu(e) {
  return function(t) {
    return e(t);
  };
}
var Lt = nu, Ue = { exports: {} };
Ue.exports;
(function(e, t) {
  var r = Rn, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, i = s && r.process, o = function() {
    try {
      var u = a && a.require && a.require("util").types;
      return u || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(Ue, Ue.exports);
var Bt = Ue.exports, au = ru, su = Lt, Er = Bt, $r = Er && Er.isTypedArray, iu = $r ? su($r) : au, Nt = iu, ou = On, lu = xe, uu = Ye, cu = P, du = We, pu = Ke, hu = He, fu = Nt, gu = "[object Map]", mu = "[object Set]", yu = Object.prototype, bu = yu.hasOwnProperty;
function vu(e) {
  if (e == null)
    return !0;
  if (du(e) && (cu(e) || typeof e == "string" || typeof e.splice == "function" || pu(e) || fu(e) || uu(e)))
    return !e.length;
  var t = lu(e);
  if (t == gu || t == mu)
    return !e.size;
  if (hu(e))
    return !ou(e).length;
  for (var r in e)
    if (bu.call(e, r))
      return !1;
  return !0;
}
var Su = vu;
const Q = /* @__PURE__ */ T(Su);
var _u = W, Eu = j, $u = "[object Symbol]";
function xu(e) {
  return typeof e == "symbol" || Eu(e) && _u(e) == $u;
}
var Ut = xu, Cu = P, wu = Ut, Tu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Au = /^\w*$/;
function Fu(e, t) {
  if (Cu(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || wu(e) ? !0 : Au.test(e) || !Tu.test(e) || t != null && e in Object(t);
}
var Mt = Fu, Iu = J, Ou = Iu(Object, "create"), Xe = Ou, xr = Xe;
function Ru() {
  this.__data__ = xr ? xr(null) : {}, this.size = 0;
}
var Pu = Ru;
function ku(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Du = ku, Lu = Xe, Bu = "__lodash_hash_undefined__", Nu = Object.prototype, Uu = Nu.hasOwnProperty;
function Mu(e) {
  var t = this.__data__;
  if (Lu) {
    var r = t[e];
    return r === Bu ? void 0 : r;
  }
  return Uu.call(t, e) ? t[e] : void 0;
}
var ju = Mu, Qu = Xe, zu = Object.prototype, qu = zu.hasOwnProperty;
function Gu(e) {
  var t = this.__data__;
  return Qu ? t[e] !== void 0 : qu.call(t, e);
}
var Vu = Gu, Hu = Xe, Yu = "__lodash_hash_undefined__";
function Wu(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Hu && t === void 0 ? Yu : t, this;
}
var Ku = Wu, Xu = Pu, Zu = Du, Ju = ju, ec = Vu, tc = Ku;
function de(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
de.prototype.clear = Xu;
de.prototype.delete = Zu;
de.prototype.get = Ju;
de.prototype.has = ec;
de.prototype.set = tc;
var rc = de;
function nc() {
  this.__data__ = [], this.size = 0;
}
var ac = nc;
function sc(e, t) {
  return e === t || e !== e && t !== t;
}
var Ze = sc, ic = Ze;
function oc(e, t) {
  for (var r = e.length; r--; )
    if (ic(e[r][0], t))
      return r;
  return -1;
}
var Je = oc, lc = Je, uc = Array.prototype, cc = uc.splice;
function dc(e) {
  var t = this.__data__, r = lc(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : cc.call(t, r, 1), --this.size, !0;
}
var pc = dc, hc = Je;
function fc(e) {
  var t = this.__data__, r = hc(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var gc = fc, mc = Je;
function yc(e) {
  return mc(this.__data__, e) > -1;
}
var bc = yc, vc = Je;
function Sc(e, t) {
  var r = this.__data__, n = vc(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var _c = Sc, Ec = ac, $c = pc, xc = gc, Cc = bc, wc = _c;
function pe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
pe.prototype.clear = Ec;
pe.prototype.delete = $c;
pe.prototype.get = xc;
pe.prototype.has = Cc;
pe.prototype.set = wc;
var et = pe, Cr = rc, Tc = et, Ac = kt;
function Fc() {
  this.size = 0, this.__data__ = {
    hash: new Cr(),
    map: new (Ac || Tc)(),
    string: new Cr()
  };
}
var Ic = Fc;
function Oc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Rc = Oc, Pc = Rc;
function kc(e, t) {
  var r = e.__data__;
  return Pc(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var tt = kc, Dc = tt;
function Lc(e) {
  var t = Dc(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Bc = Lc, Nc = tt;
function Uc(e) {
  return Nc(this, e).get(e);
}
var Mc = Uc, jc = tt;
function Qc(e) {
  return jc(this, e).has(e);
}
var zc = Qc, qc = tt;
function Gc(e, t) {
  var r = qc(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Vc = Gc, Hc = Ic, Yc = Bc, Wc = Mc, Kc = zc, Xc = Vc;
function he(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
he.prototype.clear = Hc;
he.prototype.delete = Yc;
he.prototype.get = Wc;
he.prototype.has = Kc;
he.prototype.set = Xc;
var jt = he, Un = jt, Zc = "Expected a function";
function Qt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Zc);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(a))
      return s.get(a);
    var i = e.apply(this, n);
    return r.cache = s.set(a, i) || s, i;
  };
  return r.cache = new (Qt.Cache || Un)(), r;
}
Qt.Cache = Un;
var Jc = Qt, ed = Jc, td = 500;
function rd(e) {
  var t = ed(e, function(n) {
    return r.size === td && r.clear(), n;
  }), r = t.cache;
  return t;
}
var nd = rd, ad = nd, sd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, id = /\\(\\)?/g, od = ad(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(sd, function(r, n, a, s) {
    t.push(a ? s.replace(id, "$1") : n || r);
  }), t;
}), ld = od;
function ud(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var cd = ud, wr = ue, dd = cd, pd = P, hd = Ut, fd = 1 / 0, Tr = wr ? wr.prototype : void 0, Ar = Tr ? Tr.toString : void 0;
function Mn(e) {
  if (typeof e == "string")
    return e;
  if (pd(e))
    return dd(e, Mn) + "";
  if (hd(e))
    return Ar ? Ar.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -fd ? "-0" : t;
}
var gd = Mn, md = gd;
function yd(e) {
  return e == null ? "" : md(e);
}
var Ce = yd, bd = P, vd = Mt, Sd = ld, _d = Ce;
function Ed(e, t) {
  return bd(e) ? e : vd(e, t) ? [e] : Sd(_d(e));
}
var rt = Ed, $d = Ut, xd = 1 / 0;
function Cd(e) {
  if (typeof e == "string" || $d(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -xd ? "-0" : t;
}
var we = Cd, wd = rt, Td = we;
function Ad(e, t) {
  t = wd(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Td(t[r++])];
  return r && r == n ? e : void 0;
}
var zt = Ad, Fd = zt;
function Id(e, t, r) {
  var n = e == null ? void 0 : Fd(e, t);
  return n === void 0 ? r : n;
}
var jn = Id;
const ve = /* @__PURE__ */ T(jn);
function Od(e, t) {
  return e != null && t in Object(e);
}
var Rd = Od, Pd = 9007199254740991, kd = /^(?:0|[1-9]\d*)$/;
function Dd(e, t) {
  var r = typeof e;
  return t = t ?? Pd, !!t && (r == "number" || r != "symbol" && kd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var nt = Dd, Ld = rt, Bd = Ye, Nd = P, Ud = nt, Md = Dt, jd = we;
function Qd(e, t, r) {
  t = Ld(t, e);
  for (var n = -1, a = t.length, s = !1; ++n < a; ) {
    var i = jd(t[n]);
    if (!(s = e != null && r(e, i)))
      break;
    e = e[i];
  }
  return s || ++n != a ? s : (a = e == null ? 0 : e.length, !!a && Md(a) && Ud(i, a) && (Nd(e) || Bd(e)));
}
var Qn = Qd, zd = Rd, qd = Qn;
function Gd(e, t) {
  return e != null && qd(e, t, zd);
}
var qt = Gd;
const Vd = /* @__PURE__ */ T(qt);
var Hd = J, Yd = function() {
  try {
    var e = Hd(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), zn = Yd, Fr = zn;
function Wd(e, t, r) {
  t == "__proto__" && Fr ? Fr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var at = Wd, Kd = at, Xd = Ze, Zd = Object.prototype, Jd = Zd.hasOwnProperty;
function ep(e, t, r) {
  var n = e[t];
  (!(Jd.call(e, t) && Xd(n, r)) || r === void 0 && !(t in e)) && Kd(e, t, r);
}
var Gt = ep, tp = Gt, rp = at;
function np(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var o = t[s], u = n ? n(r[o], e[o], o, r, e) : void 0;
    u === void 0 && (u = e[o]), a ? rp(r, o, u) : tp(r, o, u);
  }
  return r;
}
var Te = np;
function ap(e) {
  return e;
}
var Vt = ap;
function sp(e, t, r) {
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
var ip = sp, op = ip, Ir = Math.max;
function lp(e, t, r) {
  return t = Ir(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, s = Ir(n.length - t, 0), i = Array(s); ++a < s; )
      i[a] = n[t + a];
    a = -1;
    for (var o = Array(t + 1); ++a < t; )
      o[a] = n[a];
    return o[t] = r(i), op(e, this, o);
  };
}
var qn = lp;
function up(e) {
  return function() {
    return e;
  };
}
var cp = up, dp = cp, Or = zn, pp = Vt, hp = Or ? function(e, t) {
  return Or(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: dp(t),
    writable: !0
  });
} : pp, fp = hp, gp = 800, mp = 16, yp = Date.now;
function bp(e) {
  var t = 0, r = 0;
  return function() {
    var n = yp(), a = mp - (n - r);
    if (r = n, a > 0) {
      if (++t >= gp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var vp = bp, Sp = fp, _p = vp, Ep = _p(Sp), Gn = Ep, $p = Vt, xp = qn, Cp = Gn;
function wp(e, t) {
  return Cp(xp(e, t, $p), e + "");
}
var Tp = wp, Ap = Ze, Fp = We, Ip = nt, Op = q;
function Rp(e, t, r) {
  if (!Op(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Fp(r) && Ip(t, r.length) : n == "string" && t in r) ? Ap(r[t], e) : !1;
}
var Pp = Rp, kp = Tp, Dp = Pp;
function Lp(e) {
  return kp(function(t, r) {
    var n = -1, a = r.length, s = a > 1 ? r[a - 1] : void 0, i = a > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, i && Dp(r[0], r[1], i) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++n < a; ) {
      var o = r[n];
      o && e(t, o, n, s);
    }
    return t;
  });
}
var Bp = Lp;
function Np(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Up = Np, Mp = Up, jp = Ye, Qp = P, zp = Ke, qp = nt, Gp = Nt, Vp = Object.prototype, Hp = Vp.hasOwnProperty;
function Yp(e, t) {
  var r = Qp(e), n = !r && jp(e), a = !r && !n && zp(e), s = !r && !n && !a && Gp(e), i = r || n || a || s, o = i ? Mp(e.length, String) : [], u = o.length;
  for (var c in e)
    (t || Hp.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    qp(c, u))) && o.push(c);
  return o;
}
var Vn = Yp;
function Wp(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Kp = Wp, Xp = q, Zp = He, Jp = Kp, eh = Object.prototype, th = eh.hasOwnProperty;
function rh(e) {
  if (!Xp(e))
    return Jp(e);
  var t = Zp(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !th.call(e, n)) || r.push(n);
  return r;
}
var nh = rh, ah = Vn, sh = nh, ih = We;
function oh(e) {
  return ih(e) ? ah(e, !0) : sh(e);
}
var st = oh, lh = Te, uh = Bp, ch = st, dh = uh(function(e, t) {
  lh(t, ch(t), e);
}), ph = dh, hh = ph;
const Me = /* @__PURE__ */ T(hh);
function fh(e) {
  return e && e.length ? e[0] : void 0;
}
var gh = fh;
const mh = /* @__PURE__ */ T(gh);
var yh = Gt, bh = rt, vh = nt, Rr = q, Sh = we;
function _h(e, t, r, n) {
  if (!Rr(e))
    return e;
  t = bh(t, e);
  for (var a = -1, s = t.length, i = s - 1, o = e; o != null && ++a < s; ) {
    var u = Sh(t[a]), c = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != i) {
      var d = o[u];
      c = n ? n(d, u, o) : void 0, c === void 0 && (c = Rr(d) ? d : vh(t[a + 1]) ? [] : {});
    }
    yh(o, u, c), o = o[u];
  }
  return e;
}
var Eh = _h, $h = zt, xh = Eh, Ch = rt;
function wh(e, t, r) {
  for (var n = -1, a = t.length, s = {}; ++n < a; ) {
    var i = t[n], o = $h(e, i);
    r(o, i) && xh(s, Ch(i, e), o);
  }
  return s;
}
var Th = wh, Ah = Th, Fh = qt;
function Ih(e, t) {
  return Ah(e, t, function(r, n) {
    return Fh(e, n);
  });
}
var Oh = Ih;
function Rh(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Ht = Rh, Pr = ue, Ph = Ye, kh = P, kr = Pr ? Pr.isConcatSpreadable : void 0;
function Dh(e) {
  return kh(e) || Ph(e) || !!(kr && e && e[kr]);
}
var Lh = Dh, Bh = Ht, Nh = Lh;
function Hn(e, t, r, n, a) {
  var s = -1, i = e.length;
  for (r || (r = Nh), a || (a = []); ++s < i; ) {
    var o = e[s];
    t > 0 && r(o) ? t > 1 ? Hn(o, t - 1, r, n, a) : Bh(a, o) : n || (a[a.length] = o);
  }
  return a;
}
var Uh = Hn, Mh = Uh;
function jh(e) {
  var t = e == null ? 0 : e.length;
  return t ? Mh(e, 1) : [];
}
var Qh = jh, zh = Qh, qh = qn, Gh = Gn;
function Vh(e) {
  return Gh(qh(e, void 0, zh), e + "");
}
var Hh = Vh, Yh = Oh, Wh = Hh, Kh = Wh(function(e, t) {
  return e == null ? {} : Yh(e, t);
}), Xh = Kh;
const Zh = /* @__PURE__ */ T(Xh);
var Jh = et;
function ef() {
  this.__data__ = new Jh(), this.size = 0;
}
var tf = ef;
function rf(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var nf = rf;
function af(e) {
  return this.__data__.get(e);
}
var sf = af;
function of(e) {
  return this.__data__.has(e);
}
var lf = of, uf = et, cf = kt, df = jt, pf = 200;
function hf(e, t) {
  var r = this.__data__;
  if (r instanceof uf) {
    var n = r.__data__;
    if (!cf || n.length < pf - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new df(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var ff = hf, gf = et, mf = tf, yf = nf, bf = sf, vf = lf, Sf = ff;
function fe(e) {
  var t = this.__data__ = new gf(e);
  this.size = t.size;
}
fe.prototype.clear = mf;
fe.prototype.delete = yf;
fe.prototype.get = bf;
fe.prototype.has = vf;
fe.prototype.set = Sf;
var Yt = fe;
function _f(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Ef = _f, $f = Vn, xf = On, Cf = We;
function wf(e) {
  return Cf(e) ? $f(e) : xf(e);
}
var Ae = wf, Tf = Te, Af = Ae;
function Ff(e, t) {
  return e && Tf(t, Af(t), e);
}
var If = Ff, Of = Te, Rf = st;
function Pf(e, t) {
  return e && Of(t, Rf(t), e);
}
var kf = Pf, je = { exports: {} };
je.exports;
(function(e, t) {
  var r = M, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, i = s ? r.Buffer : void 0, o = i ? i.allocUnsafe : void 0;
  function u(c, d) {
    if (d)
      return c.slice();
    var p = c.length, h = o ? o(p) : new c.constructor(p);
    return c.copy(h), h;
  }
  e.exports = u;
})(je, je.exports);
var Df = je.exports;
function Lf(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Bf = Lf;
function Nf(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[a++] = i);
  }
  return s;
}
var Uf = Nf;
function Mf() {
  return [];
}
var Yn = Mf, jf = Uf, Qf = Yn, zf = Object.prototype, qf = zf.propertyIsEnumerable, Dr = Object.getOwnPropertySymbols, Gf = Dr ? function(e) {
  return e == null ? [] : (e = Object(e), jf(Dr(e), function(t) {
    return qf.call(e, t);
  }));
} : Qf, Wt = Gf, Vf = Te, Hf = Wt;
function Yf(e, t) {
  return Vf(e, Hf(e), t);
}
var Wf = Yf, Kf = In, Xf = Kf(Object.getPrototypeOf, Object), Wn = Xf, Zf = Ht, Jf = Wn, eg = Wt, tg = Yn, rg = Object.getOwnPropertySymbols, ng = rg ? function(e) {
  for (var t = []; e; )
    Zf(t, eg(e)), e = Jf(e);
  return t;
} : tg, Kn = ng, ag = Te, sg = Kn;
function ig(e, t) {
  return ag(e, sg(e), t);
}
var og = ig, lg = Ht, ug = P;
function cg(e, t, r) {
  var n = t(e);
  return ug(e) ? n : lg(n, r(e));
}
var Xn = cg, dg = Xn, pg = Wt, hg = Ae;
function fg(e) {
  return dg(e, hg, pg);
}
var Zn = fg, gg = Xn, mg = Kn, yg = st;
function bg(e) {
  return gg(e, yg, mg);
}
var vg = bg, Sg = Object.prototype, _g = Sg.hasOwnProperty;
function Eg(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && _g.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var $g = Eg, xg = M, Cg = xg.Uint8Array, Jn = Cg, Lr = Jn;
function wg(e) {
  var t = new e.constructor(e.byteLength);
  return new Lr(t).set(new Lr(e)), t;
}
var Kt = wg, Tg = Kt;
function Ag(e, t) {
  var r = t ? Tg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Fg = Ag, Ig = /\w*$/;
function Og(e) {
  var t = new e.constructor(e.source, Ig.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Rg = Og, Br = ue, Nr = Br ? Br.prototype : void 0, Ur = Nr ? Nr.valueOf : void 0;
function Pg(e) {
  return Ur ? Object(Ur.call(e)) : {};
}
var kg = Pg, Dg = Kt;
function Lg(e, t) {
  var r = t ? Dg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Bg = Lg, Ng = Kt, Ug = Fg, Mg = Rg, jg = kg, Qg = Bg, zg = "[object Boolean]", qg = "[object Date]", Gg = "[object Map]", Vg = "[object Number]", Hg = "[object RegExp]", Yg = "[object Set]", Wg = "[object String]", Kg = "[object Symbol]", Xg = "[object ArrayBuffer]", Zg = "[object DataView]", Jg = "[object Float32Array]", em = "[object Float64Array]", tm = "[object Int8Array]", rm = "[object Int16Array]", nm = "[object Int32Array]", am = "[object Uint8Array]", sm = "[object Uint8ClampedArray]", im = "[object Uint16Array]", om = "[object Uint32Array]";
function lm(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Xg:
      return Ng(e);
    case zg:
    case qg:
      return new n(+e);
    case Zg:
      return Ug(e, r);
    case Jg:
    case em:
    case tm:
    case rm:
    case nm:
    case am:
    case sm:
    case im:
    case om:
      return Qg(e, r);
    case Gg:
      return new n();
    case Vg:
    case Wg:
      return new n(e);
    case Hg:
      return Mg(e);
    case Yg:
      return new n();
    case Kg:
      return jg(e);
  }
}
var um = lm, cm = q, Mr = Object.create, dm = function() {
  function e() {
  }
  return function(t) {
    if (!cm(t))
      return {};
    if (Mr)
      return Mr(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), pm = dm, hm = pm, fm = Wn, gm = He;
function mm(e) {
  return typeof e.constructor == "function" && !gm(e) ? hm(fm(e)) : {};
}
var ym = mm, bm = xe, vm = j, Sm = "[object Map]";
function _m(e) {
  return vm(e) && bm(e) == Sm;
}
var Em = _m, $m = Em, xm = Lt, jr = Bt, Qr = jr && jr.isMap, Cm = Qr ? xm(Qr) : $m, wm = Cm, Tm = xe, Am = j, Fm = "[object Set]";
function Im(e) {
  return Am(e) && Tm(e) == Fm;
}
var Om = Im, Rm = Om, Pm = Lt, zr = Bt, qr = zr && zr.isSet, km = qr ? Pm(qr) : Rm, Dm = km, Lm = Yt, Bm = Ef, Nm = Gt, Um = If, Mm = kf, jm = Df, Qm = Bf, zm = Wf, qm = og, Gm = Zn, Vm = vg, Hm = xe, Ym = $g, Wm = um, Km = ym, Xm = P, Zm = Ke, Jm = wm, ey = q, ty = Dm, ry = Ae, ny = st, ay = 1, sy = 2, iy = 4, ea = "[object Arguments]", oy = "[object Array]", ly = "[object Boolean]", uy = "[object Date]", cy = "[object Error]", ta = "[object Function]", dy = "[object GeneratorFunction]", py = "[object Map]", hy = "[object Number]", ra = "[object Object]", fy = "[object RegExp]", gy = "[object Set]", my = "[object String]", yy = "[object Symbol]", by = "[object WeakMap]", vy = "[object ArrayBuffer]", Sy = "[object DataView]", _y = "[object Float32Array]", Ey = "[object Float64Array]", $y = "[object Int8Array]", xy = "[object Int16Array]", Cy = "[object Int32Array]", wy = "[object Uint8Array]", Ty = "[object Uint8ClampedArray]", Ay = "[object Uint16Array]", Fy = "[object Uint32Array]", S = {};
S[ea] = S[oy] = S[vy] = S[Sy] = S[ly] = S[uy] = S[_y] = S[Ey] = S[$y] = S[xy] = S[Cy] = S[py] = S[hy] = S[ra] = S[fy] = S[gy] = S[my] = S[yy] = S[wy] = S[Ty] = S[Ay] = S[Fy] = !0;
S[cy] = S[ta] = S[by] = !1;
function Le(e, t, r, n, a, s) {
  var i, o = t & ay, u = t & sy, c = t & iy;
  if (r && (i = a ? r(e, n, a, s) : r(e)), i !== void 0)
    return i;
  if (!ey(e))
    return e;
  var d = Xm(e);
  if (d) {
    if (i = Ym(e), !o)
      return Qm(e, i);
  } else {
    var p = Hm(e), h = p == ta || p == dy;
    if (Zm(e))
      return jm(e, o);
    if (p == ra || p == ea || h && !a) {
      if (i = u || h ? {} : Km(e), !o)
        return u ? qm(e, Mm(i, e)) : zm(e, Um(i, e));
    } else {
      if (!S[p])
        return a ? e : {};
      i = Wm(e, p, o);
    }
  }
  s || (s = new Lm());
  var f = s.get(e);
  if (f)
    return f;
  s.set(e, i), ty(e) ? e.forEach(function(b) {
    i.add(Le(b, t, r, b, e, s));
  }) : Jm(e) && e.forEach(function(b, v) {
    i.set(v, Le(b, t, r, v, e, s));
  });
  var y = c ? u ? Vm : Gm : u ? ny : ry, m = d ? void 0 : y(e);
  return Bm(m || e, function(b, v) {
    m && (v = b, b = e[v]), Nm(i, v, Le(b, t, r, v, e, s));
  }), i;
}
var Iy = Le, Oy = Iy, Ry = 1, Py = 4;
function ky(e) {
  return Oy(e, Ry | Py);
}
var Dy = ky;
const se = /* @__PURE__ */ T(Dy);
var Ly = W, By = j, Ny = "[object Boolean]";
function Uy(e) {
  return e === !0 || e === !1 || By(e) && Ly(e) == Ny;
}
var My = Uy;
const jy = /* @__PURE__ */ T(My);
var Qy = W, zy = P, qy = j, Gy = "[object String]";
function Vy(e) {
  return typeof e == "string" || !zy(e) && qy(e) && Qy(e) == Gy;
}
var Hy = Vy;
const Yy = /* @__PURE__ */ T(Hy);
var Wy = W, Ky = j, Xy = "[object Number]";
function Zy(e) {
  return typeof e == "number" || Ky(e) && Wy(e) == Xy;
}
var Jy = Zy;
const eb = /* @__PURE__ */ T(Jy);
function Xt() {
}
Xt.prototype = new Error();
class Gr {
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
      size: i,
      filters: o,
      hiddenParams: u
    } = t;
    let c = {};
    r !== null && (c.q = r), n !== null && (c.sort = n, a !== null && (c.sort = a === "desc" ? `-${n}` : n)), s > 0 && (c.page = s), i > 0 && (c.size = i), Q(u) || Me(c, this._addFilters(u));
    const d = this._addFilters(o);
    return Me(c, d), le.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class tb {
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
function Oe(e, t) {
  return e.indexOf(t) === 0 && (e.length === t.length || e.indexOf(t + "&") === 0);
}
function ct(e) {
  return le.stringify({
    q: e
  });
}
function rb(e) {
  return le.parse(e).q;
}
function na(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = na(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function Vr(e, t) {
  const r = ct(e), n = t.map((i) => ct(i));
  let a = !1;
  const s = n.filter((i) => {
    const o = Oe(i, r), u = Oe(r, i);
    return o && !a && (a = !0), !o && !u;
  });
  if (!a)
    s.push(r);
  else if (e.length === 3) {
    const o = na(e), u = ct(o), c = s.some((d) => {
      const p = Oe(d, u), h = Oe(u, d);
      return p || h;
    });
    (Q(s) || !c) && s.push(u);
  }
  return s.map((i) => rb(i));
}
const aa = (e, t) => {
  if (Q(e))
    return;
  if (!Nn(mh(e)))
    return Vr(e, t);
  let r = t;
  for (const n of e)
    r = Vr(n, r);
  return r;
}, sa = (e, t, r) => {
  let n = Zh(t, r);
  return Q(n.filters) || (n.filters = aa(n.filters, e.filters)), n;
}, Qe = {
  queryString: "",
  suggestions: [],
  sortBy: null,
  sortOrder: null,
  page: -1,
  size: -1,
  filters: [],
  hiddenParams: [],
  layout: null
}, ia = Object.keys(Qe), nb = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, ab = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class sb {
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
      size: i,
      filters: o,
      hiddenParams: u
    } = t;
    let c = {};
    r !== null && (c.q = r), n !== null && (c.sort = n, a !== null && (c.sort = a === "desc" ? `-${n}` : n)), s > 0 && (c.page = s), i > 0 && (c.size = i), Q(u) || Me(c, this._addFilters(u));
    const d = this._addFilters(o);
    return Me(c, d), le.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class oa {
  constructor(t) {
    this.axiosConfig = ve(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = De.CancelToken;
  }
  validateAxiosConfig() {
    if (!Vd(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = ve(t, "interceptors.request", void 0), this.responseInterceptor = ve(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: sb,
      InvenioRequestSerializer: Gr
    };
    return typeof t == "string" ? r[t] : t || Gr;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), a = ve(t, "invenio.responseSerializer", tb);
    this.requestSerializer = new n(), this.responseSerializer = new a();
  }
  initAxios() {
    const t = {
      paramsSerializer: this.requestSerializer.serialize,
      ...this.axiosConfig
    };
    this.http = De.create(t), this.addInterceptors();
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
      const n = sa(t, r.extras, ia);
      return Q(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw De.isCancel(r) ? new Xt() : r;
    }
  }
}
class ib {
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
          return eb(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const a = Nn(n) ? n : [n], s = ":", i = t.urlFilterSeparator, o = `[^\\${s}\\${i}]*`, u = `${o}\\${s}${o}`, c = `${u}(\\${i}${u})*`, d = new RegExp(`^${c}$`);
          return a.every((p) => String(p).match(d));
        }
        default:
          return !1;
      }
    };
  }
}
const ob = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, Hr = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class lb {
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
    const r = le.parse(t, {
      ignoreQueryPrefix: !0
    }), n = {};
    return Object.entries(r).forEach((a) => {
      const s = a[0], i = a[1];
      n[s] = this._convertValue(s, i);
    }), n;
  }
}
class ub {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (this._filterListToString = (r) => {
      const n = r.length === 3 ? this.urlFilterSeparator.concat(this._filterListToString(r[2])) : "";
      return `${r[0]}:${r[1]}${n}`;
    }, this._mapQueryStateToUrlParams = (r) => {
      const n = {};
      Object.keys(r).filter((s) => s in this.urlParamsMapping).filter((s) => (s === "page" || s === "size") && r[s] <= 0 || s === "hiddenParams" ? !1 : r[s] !== null).forEach((s) => {
        const i = this.urlParamsMapping[s];
        s === "filters" ? n[i] = r[s].map((o) => this._filterListToString(o)) : n[i] = r[s];
      });
      const a = (s, i) => {
        const o = "q";
        return s === o ? -1 : i === o ? 1 : s.localeCompare(i);
      };
      return le.stringify(n, {
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
      const i = r.slice(0, s), o = a ? n : r.length, u = r.slice(s + 1, o);
      let c = [i, u];
      if (a) {
        const d = r.slice(n + 1, r.length);
        c.push(this._filterStringToList(d));
      }
      return c;
    }, this._mapUrlParamsToQueryState = (r) => {
      const n = {};
      return Object.keys(r).forEach((a) => {
        const s = this.fromUrlParamsMapping[a];
        this.urlParamValidator.isValid(this, s, r[a]) ? (n[s] = r[a], s === "filters" && (Array.isArray(r[a]) || (r[a] = [r[a]]), n[s] = r[a].map((i) => this._filterStringToList(i)))) : console.warn(`URL parameter '${a}' with value '${r[a]}' is incorrect and was ignored.`);
      }), n;
    }, this._mergeParamsIntoState = (r, n) => {
      const a = se(n);
      return Object.keys(r).forEach((s) => {
        a[s] = r[s];
      }), a;
    }, this.urlParamsMapping = ao(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !jy(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !Yy(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new ib(), this.urlParser = t.urlParser || new lb(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), a = this._mergeParamsIntoState(n, t), s = this._mapQueryStateToUrlParams(a);
    return Hr(s), a;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      ob(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    Hr(r);
  }
}
const cb = "SET_QUERY_COMPONENT_INITIAL_STATE", la = "SET_QUERY_STRING", Zt = "SET_QUERY_SORTING", Jt = "SET_QUERY_SORT_BY", er = "SET_QUERY_SORT_ORDER", Fe = "SET_QUERY_STATE", ua = "SET_QUERY_PAGINATION_PAGE", ca = "SET_QUERY_PAGINATION_SIZE", da = "SET_QUERY_FILTERS", pa = "SET_QUERY_SUGGESTIONS", ha = "SET_SUGGESTION_STRING", fa = "CLEAR_QUERY_SUGGESTIONS", ga = "RESULTS_LOADING", ma = "RESULTS_FETCH_SUCCESS", ya = "RESULTS_FETCH_ERROR", St = "RESULTS_UPDATE_LAYOUT", ba = "RESET_QUERY", db = (e) => (t) => {
  e && t(N({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, va = (e) => (t) => {
  t({
    type: Fe,
    payload: e
  }), t(N());
}, Sa = (e) => (t) => {
  t({
    type: la,
    payload: e
  }), t(N());
}, pb = (e, t) => (r) => {
  r({
    type: Zt,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(N());
}, hb = (e) => (t) => {
  t({
    type: Jt,
    payload: e
  }), t(N());
}, fb = (e) => (t) => {
  t({
    type: er,
    payload: e
  }), t(N());
}, gb = (e) => (t) => {
  t({
    type: ua,
    payload: e
  }), t(N());
}, mb = (e) => (t) => {
  t({
    type: ca,
    payload: e
  }), t(N());
}, tr = (e) => (t) => {
  t({
    type: da,
    payload: e
  }), t(N());
}, yb = (e) => async (t, r, n) => {
  const a = n.urlHandlerApi;
  if (a) {
    await t({
      type: St,
      payload: e
    });
    const s = r().query;
    a.set(s);
  } else
    t({
      type: St,
      payload: e
    });
}, bb = () => (e, t, r) => {
  e({
    type: ba,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(N());
}, vb = (e, t, r, n) => {
  const a = t.urlHandlerApi;
  a && (r ? a.replace(e) : n && a.set(e));
}, Sb = (e, t, r, n) => {
  const a = r().query;
  t({
    type: Fe,
    payload: {
      ...a,
      ...e.newQueryState
    }
  });
  const s = se(r().query), i = n.urlHandlerApi;
  return i && i.replace(s), delete e.newStateQuery, e;
}, _b = (e, t, r, n) => {
  function a(o, u, c, d) {
    o.queryString === "" ? (o.sortBy = c.defaultSortingOnEmptyQueryString.sortBy, o.sortOrder = c.defaultSortingOnEmptyQueryString.sortOrder) : (o.sortBy = u.initialSortBy, o.sortOrder = u.initialSortOrder), d({
      type: Fe,
      payload: o
    });
  }
  function s(o, u, c, d) {
    u.hasUserChangedSorting || a(o, u, c, d);
  }
  !Q(r.defaultSortingOnEmptyQueryString) && s(e, t, r, n);
}, N = function() {
  let {
    shouldUpdateUrlQueryString: e = !0,
    shouldReplaceUrlQueryString: t = !1
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return async (r, n, a) => {
    const s = n().app;
    let i = se(n().query);
    _b(i, s, a, r), i = se(n().query), vb(i, a, t, e), r({
      type: ga
    });
    try {
      let u = await a.searchApi.search(i);
      "newQueryState" in u && (u = Sb(se(u), r, n, a)), r({
        type: ma,
        payload: {
          aggregations: u.aggregations,
          hits: u.hits,
          total: u.total
        }
      });
    } catch (o) {
      if (o instanceof Xt) {
        console.debug(o);
        return;
      } else
        console.error(o), r({
          type: ya,
          payload: {
            error: o
          }
        });
    }
  };
}, Eb = (e) => (t) => {
  t({
    type: ha,
    payload: e
  }), t($b());
}, $b = () => async (e, t, r) => {
  const n = se(t().query), a = r.suggestionApi;
  try {
    const s = await a.search(n);
    e({
      type: pa,
      payload: {
        suggestions: s.suggestions
      }
    });
  } catch (s) {
    console.error("Could not load suggestions due to: " + s);
  }
}, xb = () => (e) => {
  e({
    type: fa,
    payload: {
      suggestions: []
    }
  });
}, Cb = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: Fe,
      payload: n
    }), e(N({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, _ = /* @__PURE__ */ l.createContext({}), wb = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
    case Zt:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Jt:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case er:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    default:
      return e;
  }
}, Tb = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case la:
      return {
        ...e,
        queryString: t.payload,
        page: 1
      };
    case Zt:
      return {
        ...e,
        sortBy: t.payload.sortBy,
        sortOrder: t.payload.sortOrder,
        _sortUserChanged: !0,
        page: 1
      };
    case Jt:
      return {
        ...e,
        sortBy: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case er:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case ua:
      return {
        ...e,
        page: t.payload
      };
    case ca:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case da:
      return {
        ...e,
        page: 1,
        filters: aa(t.payload, e.filters)
      };
    case pa:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case fa:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case ha:
      return {
        ...e,
        suggestionString: t.payload
      };
    case cb:
      return {
        ...e,
        ...t.payload
      };
    case Fe:
      return {
        ...e,
        ...Qe,
        ...sa(Qe, t.payload, ia)
      };
    case St:
      return {
        ...e,
        layout: t.payload
      };
    case ba:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, Ab = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case ga:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case ma:
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
    case ya:
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
var Fb = bi({
  app: wb,
  query: Tb,
  results: Ab
});
function Yr(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: a,
    sortOrder: s
  } = t;
  return r !== a || n !== s;
}
function Ib(e, t, r) {
  const n = Yr(r, t), a = !Q(e.defaultSortingOnEmptyQueryString);
  let s = !1;
  return a && (s = Yr(r, e.defaultSortingOnEmptyQueryString)), n && s;
}
function Ob(e) {
  const t = {
    ...Qe,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = Ib(e, t, r), a = {
    ...ab,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, s = {
    ...nb,
    loading: e.searchOnInit
  };
  return {
    app: a,
    query: r,
    results: s
  };
}
function Rb(e) {
  const t = Ob(e);
  return vi(Fb, t, Si(_i.withExtraArgument(e)));
}
function Wr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class rr extends A {
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
        const i = n.appName;
        i === a ? this.updateQueryState(n.searchQuery) : console.debug(`React-SearchKit '${a}': ignoring event sent for app '${i}'`);
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
rr.defaultProps = {
  searchOnInit: !0,
  eventListenerEnabled: !1
};
rr.contextType = _;
var Pb = g.component("Bootstrap", rr);
const kb = (e) => ({
  onAppInitialized: (t) => e(db(t)),
  updateQueryState: (t) => e(va(t)),
  searchOnUrlQueryStringChanged: () => e(Cb())
}), Db = x(null, kb)(Pb);
class nr extends A {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new ub(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = Rb(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
  }
  render() {
    const {
      appName: t,
      children: r,
      eventListenerEnabled: n,
      overridableId: a,
      searchOnInit: s
    } = this.props, i = {
      appName: t,
      buildUID: (u, c) => Wr(u, c, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, o = Wr("ReactSearchKit.children", a, t);
    return /* @__PURE__ */ l.createElement(_.Provider, {
      value: i
    }, /* @__PURE__ */ l.createElement(yi, {
      store: this.store
    }, /* @__PURE__ */ l.createElement(Db, {
      searchOnInit: s,
      eventListenerEnabled: n
    }, /* @__PURE__ */ l.createElement(g, {
      id: o
    }, r))));
  }
}
nr.defaultProps = {
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
nr.contextType = _;
var Lb = g.component("ReactSearchKit", nr);
class _a extends A {
  constructor(t) {
    super(t), this._getLabel = (r) => {
      const n = r[0];
      let a = r[1], s = [n, a];
      if (r.length === 3) {
        const {
          label: o,
          activeFilter: u
        } = this._getLabel(r[2]);
        a = `${a}.${o}`, s.push(u);
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
    return !!t.length && /* @__PURE__ */ l.createElement(Ea, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
_a.defaultProps = {
  overridableId: ""
};
const Ea = (e) => {
  let {
    overridableId: t,
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  } = e;
  const {
    buildUID: s
  } = $(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: s("ActiveFilters.element", t),
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  }, /* @__PURE__ */ l.createElement(l.Fragment, null, r.map((i, o) => {
    const {
      label: u,
      activeFilter: c
    } = a(i);
    return (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ l.createElement(xn, {
        image: !0,
        key: o,
        onClick: () => n(c)
      }, u, /* @__PURE__ */ l.createElement(ie, {
        name: "delete"
      }))
    );
  })));
};
Ea.defaultProps = {
  overridableId: ""
};
var Bb = g.component("ActiveFilters", _a);
const Nb = (e) => ({
  updateQueryFilters: (t) => e(tr(t))
});
x((e) => ({
  filters: e.query.filters
}), Nb)(Bb);
function Ub(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var Mb = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
Ub(Mb);
class $a extends A {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? Ei.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ l.createElement(Qb, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
$a.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const jb = (e) => /* @__PURE__ */ l.createElement($a, Object.assign({
  key: e.queryString
}, e)), Qb = (e) => {
  let {
    overridableId: t,
    placeholder: r,
    queryString: n,
    querySuggestions: a,
    onInputChange: s,
    executeSearch: i,
    ...o
  } = e;
  const {
    buildUID: u
  } = $(_), c = (p, h) => {
    i();
  }, d = (p, h) => {
    p.key === "Enter" && i();
  };
  return /* @__PURE__ */ l.createElement(g, Object.assign({
    id: u("AutocompleteSearchBar.element", t)
  }, o), /* @__PURE__ */ l.createElement("div", {
    className: "AutoCompleteText"
  }, /* @__PURE__ */ l.createElement(Cn, {
    action: {
      content: "Search",
      onClick: c
    },
    fluid: !0,
    placeholder: r,
    onChange: (p, h) => {
      let {
        value: f
      } = h;
      s(f);
    },
    value: n,
    onKeyPress: d
  }), /* @__PURE__ */ l.createElement(zb, {
    querySuggestions: a,
    overridableId: t
  })));
}, zb = (e) => {
  let {
    overridableId: t,
    ...r
  } = e;
  const {
    querySuggestions: n
  } = r, {
    buildUID: a
  } = $(_), s = async (i) => {
    await (void 0).setState({
      currentValue: i
    }), (void 0).clearSuggestions(), (void 0).executeSearch();
  };
  return n.length === 0 ? null : /* @__PURE__ */ l.createElement(g, Object.assign({
    id: a("AutocompleteSearchBar.suggestions", t)
  }, r), /* @__PURE__ */ l.createElement("ul", null, n.map((i) => /* @__PURE__ */ l.createElement(oe, {
    as: "li",
    onClick: () => s(i),
    key: i
  }, i))));
};
var qb = g.component("AutocompleteSearchBar", jb);
const Gb = (e) => ({
  updateQueryString: (t) => e(Sa(t)),
  updateSuggestions: (t) => e(Eb(t)),
  clearSuggestions: () => e(xb())
}), Vb = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
x(Vb, Gb)(qb);
class it extends A {
  constructor(t) {
    super(t), this._isSelected = (r, n, a) => a.filter((s) => s[0] === r && s[1] === n).length >= 1, this.getChildAggCmps = (r, n) => {
      const a = this.childAgg && this.childAgg.aggName in r;
      let s = [];
      if (a) {
        const i = r[this.childAgg.aggName].buckets;
        n.forEach((u) => {
          const c = u[0] === this.aggName, d = u[1] === r.key, p = u.length === 3;
          c && d && p && s.push(u[2]);
        });
        const o = (u) => {
          this.onFilterClicked([this.aggName, r.key, u]);
        };
        return /* @__PURE__ */ l.createElement(it, {
          buckets: i,
          selectedFilters: s,
          field: this.childAgg.field,
          aggName: this.childAgg.aggName,
          childAgg: this.childAgg.childAgg,
          onFilterClicked: o
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
      const i = s.key_as_string ? s.key_as_string : s.key, o = this._isSelected(this.aggName, i, r), u = (d) => {
        this.onFilterClicked([this.aggName, d]);
      }, c = (d) => this.getChildAggCmps(d, r);
      return /* @__PURE__ */ l.createElement(Ca, {
        key: s.key,
        bucket: s,
        keyField: i,
        isSelected: o,
        onFilterClicked: u,
        getChildAggCmps: c,
        overridableId: n
      });
    });
    return /* @__PURE__ */ l.createElement(xa, {
      valuesCmp: a,
      overridableId: n
    });
  }
}
it.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const xa = (e) => {
  let {
    valuesCmp: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = $(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: n("BucketAggregationContainer.element", r),
    valuesCmp: t
  }, /* @__PURE__ */ l.createElement(wn, null, t));
};
xa.defaultProps = {
  overridableId: ""
};
const Ca = (e) => {
  let {
    bucket: t,
    isSelected: r,
    onFilterClicked: n,
    getChildAggCmps: a,
    overridableId: s,
    keyField: i
  } = e;
  const {
    buildUID: o,
    nextComponentIndex: u
  } = $(_), c = t.label ? t.label : `${i} (${t.doc_count.toLocaleString("en-US")})`, d = a(t);
  return /* @__PURE__ */ l.createElement(g, {
    id: o("BucketAggregationValues.element", s),
    bucket: t,
    label: c,
    onFilterClicked: n,
    isSelected: r,
    childAggCmps: d
  }, /* @__PURE__ */ l.createElement(wn.Item, {
    key: t.key
  }, /* @__PURE__ */ l.createElement(Tn, {
    label: c,
    id: u(),
    value: t.key,
    onClick: () => n(t.key),
    checked: r
  }), d));
};
Ca.defaultProps = {
  overridableId: ""
};
var Hb = g.component("BucketAggregationValues", it);
class wa extends A {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: a
      } = this.props;
      return /* @__PURE__ */ l.createElement(Hb, {
        buckets: r,
        selectedFilters: n,
        field: this.agg.field,
        aggName: this.agg.aggName,
        childAgg: this.agg.childAgg,
        onFilterClicked: this.onFilterClicked,
        overridableId: a
      });
    }, this._getSelectedFilters = (r) => r.filter((n) => n[0] === this.agg.aggName), this._getResultBuckets = (r) => {
      const n = ve(r, this.agg.aggName, {});
      return "buckets" in n ? (Array.isArray(n.buckets) || (n.buckets = Object.entries(n.buckets).map((a) => {
        let [s, i] = a;
        return {
          ...i,
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
    } = this.props, s = this._getSelectedFilters(t), i = this._getResultBuckets(r), o = i.length ? this._renderValues(i, s) : null;
    return /* @__PURE__ */ l.createElement(Ta, Object.assign({
      title: this.title,
      containerCmp: o,
      overridableId: n
    }, a));
  }
}
wa.defaultProps = {
  overridableId: ""
};
const Ta = (e) => {
  let {
    overridableId: t,
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: s
  } = e;
  const {
    buildUID: i
  } = $(_);
  return a && /* @__PURE__ */ l.createElement(g, {
    id: i("BucketAggregation.element", t),
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: s
  }, /* @__PURE__ */ l.createElement(O, null, /* @__PURE__ */ l.createElement(O.Content, null, /* @__PURE__ */ l.createElement(O.Header, null, n)), /* @__PURE__ */ l.createElement(O.Content, null, a)));
};
Ta.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var Yb = g.component("BucketAggregation", wa);
const Wb = (e) => ({
  updateQueryFilters: (t) => e(tr(t))
});
x((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), Wb)(Yb);
class Aa extends A {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
Aa.defaultProps = {
  condition: !0
};
var D = g.component("ShouldRender", Aa);
class Fa extends A {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: a
    } = this.props;
    return /* @__PURE__ */ l.createElement(D, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ l.createElement(Ia, {
      totalResults: r,
      overridableId: a
    })));
  }
}
Fa.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const Ia = (e) => {
  let {
    totalResults: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = $(_), a = n("Count.element", r);
  return /* @__PURE__ */ l.createElement(g, {
    id: a,
    totalResults: t
  }, /* @__PURE__ */ l.createElement(xn, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
Ia.defaultProps = {
  overridableId: ""
};
var Kb = g.component("Count", Fa);
const Xb = x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(Kb);
class Oa extends A {
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
      overridableId: i,
      userSelectionFilters: o,
      ...u
    } = this.props;
    return /* @__PURE__ */ l.createElement(D, {
      condition: !t && Q(n) && r === 0
    }, /* @__PURE__ */ l.createElement(Ra, Object.assign({}, u, {
      queryString: a,
      resetQuery: this.resetQuery,
      extraContent: s,
      userSelectionFilters: o,
      overridableId: i
    })));
  }
}
Oa.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const Ra = (e) => {
  let {
    overridableId: t,
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: s
  } = e;
  const {
    buildUID: i
  } = $(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: i("EmptyResults.element", t),
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: s
  }, /* @__PURE__ */ l.createElement(si, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ l.createElement(An, {
    icon: !0
  }, /* @__PURE__ */ l.createElement(ie, {
    name: "search"
  }), "No results found!"), r && /* @__PURE__ */ l.createElement("em", null, 'Current search "', r, '"'), /* @__PURE__ */ l.createElement("br", null), /* @__PURE__ */ l.createElement(oe, {
    primary: !0,
    onClick: () => n()
  }, "Clear query"), a));
};
Ra.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var Zb = g.component("EmptyResults", Oa);
const Jb = (e) => ({
  resetQuery: () => e(bb())
}), ev = x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), Jb)(Zb);
function Pa(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ l.createElement(D, {
    condition: !t && !Q(r)
  }, /* @__PURE__ */ l.createElement(ka, {
    error: r,
    overridableId: n
  }));
}
Pa.defaultProps = {
  overridableId: ""
};
const ka = (e) => {
  let {
    error: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = $(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ l.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
ka.defaultProps = {
  overridableId: ""
};
var tv = g.component("Error", Pa);
x((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(tv);
function Da(e) {
  const t = (a) => /* @__PURE__ */ l.createElement(e, a);
  return x((a) => ({
    currentQueryState: a.query,
    currentResultsState: a.results
  }), (a) => ({
    updateQueryState: (s) => a(va(s))
  }))(t);
}
class La extends A {
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
    return /* @__PURE__ */ l.createElement(D, {
      condition: t !== null && !r && n > 0
    }, /* @__PURE__ */ l.createElement(Ba, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: a
    }));
  }
}
La.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
const Ba = (e) => {
  let {
    overridableId: t,
    currentLayout: r,
    onLayoutChange: n
  } = e;
  const {
    buildUID: a
  } = $(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: a("LayoutSwitcher.element", t),
    currentLayout: r,
    onLayoutChange: n
  }, /* @__PURE__ */ l.createElement(_e, {
    compact: !0,
    icon: !0
  }, /* @__PURE__ */ l.createElement(_e.Item, {
    name: "list",
    active: r === "list",
    onClick: (s, i) => {
      let {
        name: o
      } = i;
      return n(o);
    }
  }, /* @__PURE__ */ l.createElement(ie, {
    name: "list layout"
  })), /* @__PURE__ */ l.createElement(_e.Item, {
    name: "grid",
    active: r === "grid",
    onClick: (s, i) => {
      let {
        name: o
      } = i;
      return n(o);
    }
  }, /* @__PURE__ */ l.createElement(ie, {
    name: "grid layout"
  }))));
};
Ba.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var rv = g.component("LayoutSwitcher", La);
const nv = (e) => ({
  updateLayout: (t) => e(yb(t))
});
x((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), nv)(rv);
const Kr = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class Na extends A {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...Kr,
      ...t.options
    } : Kr;
  }
  render() {
    const {
      loading: t,
      totalResults: r,
      currentPage: n,
      currentSize: a,
      overridableId: s,
      showWhenOnlyOnePage: i
    } = this.props;
    return /* @__PURE__ */ l.createElement(D, {
      condition: !t && n > -1 && a > -1 && i ? r > 0 : r > a
    }, /* @__PURE__ */ l.createElement(Ua, {
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
Na.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const Ua = (e) => {
  let {
    overridableId: t,
    currentPage: r,
    currentSize: n,
    totalResults: a,
    onPageChange: s,
    options: i,
    maxTotalResults: o,
    ...u
  } = e;
  const c = i.boundaryRangeCount, d = i.siblingRangeCount, p = i.showEllipsis, h = i.showFirst, f = i.showLast, y = i.showPrev, m = i.showNext, b = i.size, v = Math.floor(o / n), C = Math.ceil(a / n), U = Math.min(C, v), {
    buildUID: I
  } = $(_);
  return r > C && s(C), /* @__PURE__ */ l.createElement(g, {
    id: I("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: a,
    options: i,
    onPageChange: s
  }, /* @__PURE__ */ l.createElement(ii, Object.assign({
    activePage: r,
    totalPages: U,
    onPageChange: (G, w) => {
      let {
        activePage: ge
      } = w;
      return s(ge);
    },
    boundaryRange: c,
    siblingRange: d,
    ellipsisItem: p ? void 0 : null,
    firstItem: h ? void 0 : null,
    lastItem: f ? void 0 : null,
    prevItem: y ? void 0 : null,
    nextItem: m ? void 0 : null,
    size: b
  }, u)));
};
Ua.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var av = g.component("Pagination", Na);
const sv = (e) => ({
  updateQueryPage: (t) => e(gb(t))
}), iv = x((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), sv)(av);
function Ma(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    resultsPerRow: a,
    overridableId: s,
    onResultsRendered: i
  } = e;
  return Rt(() => {
    i && i();
  }, [i]), /* @__PURE__ */ l.createElement(D, {
    condition: !t && r > 0
  }, /* @__PURE__ */ l.createElement(ja, {
    results: n,
    resultsPerRow: a,
    overridableId: s
  }));
}
Ma.defaultProps = {
  resultsPerRow: 3,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const ov = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = $(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: n("ResultsGrid.item", r),
    result: t
  }, /* @__PURE__ */ l.createElement(O, {
    fluid: !0,
    href: `#${t.id}`
  }, /* @__PURE__ */ l.createElement(li, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ l.createElement(O.Content, null, /* @__PURE__ */ l.createElement(O.Header, null, t.title), /* @__PURE__ */ l.createElement(O.Description, null, t.description))));
}, ja = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: a
  } = $(_), s = r.map((i, o) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ l.createElement(ov, {
      key: o,
      result: i,
      overridableId: t
    })
  ));
  return /* @__PURE__ */ l.createElement(g, {
    id: a("ResultsGrid.container", t),
    results: s,
    resultsPerRow: n
  }, /* @__PURE__ */ l.createElement(O.Group, {
    itemsPerRow: n
  }, s));
};
ja.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var lv = g.component("ResultsGrid", Ma);
const uv = x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(lv);
function Qa(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return Rt(() => {
    s && s();
  }, [s]), /* @__PURE__ */ l.createElement(D, {
    condition: !t && r > 0
  }, /* @__PURE__ */ l.createElement(za, {
    results: n,
    overridableId: a
  }));
}
Qa.defaultProps = {
  overridableId: "",
  onResultsRendered: () => {
  }
};
const cv = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = $(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ l.createElement(re, {
    href: `#${t.id}`
  }, /* @__PURE__ */ l.createElement(re.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ l.createElement(re.Content, null, /* @__PURE__ */ l.createElement(re.Header, null, t.title), /* @__PURE__ */ l.createElement(re.Description, null, t.description))));
}, za = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = $(_), a = t.map((s, i) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ l.createElement(cv, {
      result: s,
      key: i,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ l.createElement(g, {
    id: n("ResultsList.container", r),
    results: a
  }, /* @__PURE__ */ l.createElement(re.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, a));
};
za.defaultProps = {
  overridableId: ""
};
var dv = g.component("ResultsList", Qa);
const qa = x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(dv);
function Ga(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ l.createElement(Va, {
    overridableId: n
  }) : t;
}
Ga.defaultProps = {
  overridableId: ""
};
const Va = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = $(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ l.createElement(oi, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
Va.defaultProps = {
  overridableId: ""
};
var pv = g.component("ResultsLoader", Ga);
const hv = x((e) => ({
  loading: e.results.loading
}))(pv);
function Ha(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return /* @__PURE__ */ l.createElement(D, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ l.createElement(Ya, {
    layout: n,
    overridableId: a,
    onResultsRendered: s
  }));
}
Ha.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const Ya = (e) => {
  let {
    layout: t,
    overridableId: r,
    onResultsRendered: n
  } = e;
  const {
    buildUID: a
  } = $(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: a("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ l.createElement(qa, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ l.createElement(uv, {
    overridableId: r,
    onResultsRendered: n
  }));
};
Ya.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var fv = g.component("ResultsMultiLayout", Ha);
x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(fv);
class Wa extends A {
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
      ariaLabel: i,
      selectOnNavigation: o,
      showWhenOnlyOnePage: u
    } = this.props;
    return /* @__PURE__ */ l.createElement(D, {
      condition: !t && r !== -1 && u ? n > 0 : n > r
    }, a(/* @__PURE__ */ l.createElement(Ka, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: o
    })));
  }
}
Wa.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const Ka = (e) => {
  let {
    overridableId: t,
    currentSize: r,
    options: n,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  } = e;
  const {
    buildUID: o
  } = $(_), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ l.createElement(g, {
    id: o("ResultsPerPage.element", t),
    currentSize: r,
    options: n,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  }, /* @__PURE__ */ l.createElement($e, {
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
    selectOnNavigation: i
  }));
};
Ka.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var gv = g.component("ResultsPerPage", Wa);
const mv = (e) => ({
  updateQuerySize: (t) => e(mb(t))
}), yv = x((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), mv)(gv);
class Xa extends A {
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
      onKeyPress: i,
      overridableId: o,
      placeholder: u,
      uiProps: c
    } = this.props, {
      currentValue: d
    } = this.state;
    return /* @__PURE__ */ l.createElement(ar, {
      actionProps: t,
      autofocus: r,
      executeSearch: n || this.executeSearch,
      onBtnSearchClick: a || this.onBtnSearchClick,
      onInputChange: s || this.onInputChange,
      onKeyPress: i || this.onKeyPress,
      overridableId: o,
      placeholder: u,
      queryString: d,
      uiProps: c
    });
  }
}
Xa.defaultProps = {
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
const Za = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ l.createElement(Xa, Object.assign({
    key: t
  }, e));
};
Za.defaultProps = {
  queryString: ""
};
class ar extends A {
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
      placeholder: i,
      queryString: o,
      uiProps: u
    } = this.props, {
      buildUID: c
    } = this.context;
    return /* @__PURE__ */ l.createElement(g, {
      id: c("SearchBar.element", s),
      queryString: o,
      onBtnSearchClick: r,
      onInputChange: n,
      onKeyPress: a,
      placeholder: i,
      actionProps: t,
      uiProps: u
    }, /* @__PURE__ */ l.createElement(Cn, Object.assign({
      action: {
        content: "Search",
        onClick: r,
        ...t
      },
      fluid: !0
    }, u, {
      placeholder: i || "Type something",
      onChange: (d, p) => {
        let {
          value: h
        } = p;
        n(h);
      },
      value: o,
      onKeyPress: a,
      ref: (d) => {
        this.focusInput = d;
      }
    })));
  }
}
ar.defaultProps = {
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
ar.contextType = _;
var bv = g.component("SearchBar", Za);
const vv = (e) => ({
  updateQueryString: (t) => e(Sa(t))
}), Sv = x((e) => ({
  queryString: e.query.queryString
}), vv)(bv);
class Ja extends A {
  constructor(t) {
    super(t), this._computeValue = (r, n) => n ? `${r}-${n}` : r, this.onChange = (r) => {
      const {
        currentSortBy: n,
        currentSortOrder: a
      } = this.props;
      if (r === this._computeValue(n, a))
        return;
      const s = this.options.find((i) => i.value === r);
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
      overridableId: i,
      sortOrderDisabled: o,
      ariaLabel: u,
      selectOnNavigation: c
    } = this.props;
    return /* @__PURE__ */ l.createElement(D, {
      condition: t !== null && (o || t !== null) && !n && a > 0
    }, s(/* @__PURE__ */ l.createElement(es, {
      currentSortBy: t,
      currentSortOrder: r,
      options: this.options,
      onValueChange: this.onChange,
      computeValue: this._computeValue,
      overridableId: i,
      ariaLabel: u,
      selectOnNavigation: c
    })));
  }
}
Ja.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const es = (e) => {
  let {
    overridableId: t,
    currentSortBy: r,
    currentSortOrder: n,
    options: a,
    onValueChange: s,
    computeValue: i,
    ariaLabel: o,
    selectOnNavigation: u
  } = e;
  const {
    buildUID: c
  } = $(_), d = i(r, n), p = a.map((h, f) => ({
    key: f,
    text: h.text,
    value: h.value
  }));
  return /* @__PURE__ */ l.createElement(g, {
    id: c("Sort.element", t),
    options: a,
    currentSortBy: r,
    currentSortOrder: n,
    onValueChange: s,
    ariaLabel: o,
    selectOnNavigation: u
  }, /* @__PURE__ */ l.createElement($e, {
    selection: !0,
    options: p,
    value: d,
    onChange: (h, f) => {
      let {
        value: y
      } = f;
      return s(y);
    },
    "aria-label": o,
    selectOnNavigation: u
  }));
};
es.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var _v = g.component("Sort", Ja);
const Ev = (e) => ({
  updateQuerySorting: (t, r) => e(pb(t, r))
});
x((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), Ev)(_v);
class ts extends A {
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
      ariaLabel: i,
      selectOnNavigation: o
    } = this.props;
    return /* @__PURE__ */ l.createElement(D, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ l.createElement(rs, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: o
    })));
  }
}
ts.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const rs = (e) => {
  let {
    overridableId: t,
    currentSortBy: r,
    options: n,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  } = e;
  const {
    buildUID: o
  } = $(_), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ l.createElement(g, {
    id: o("SortBy.element", t),
    options: n,
    currentSortBy: r,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  }, /* @__PURE__ */ l.createElement($e, {
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
    selectOnNavigation: i
  }));
};
rs.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var $v = g.component("SortBy", ts);
const xv = (e) => ({
  updateQuerySortBy: (t) => e(hb(t))
});
x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), xv)($v);
class ns extends A {
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
      ariaLabel: i,
      selectOnNavigation: o
    } = this.props;
    return /* @__PURE__ */ l.createElement(D, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ l.createElement(as, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: o
    })));
  }
}
ns.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const as = (e) => {
  let {
    overridableId: t,
    currentSortOrder: r,
    options: n,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  } = e;
  const {
    buildUID: o
  } = $(_), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ l.createElement(g, {
    id: o("SortOrder.element", t),
    options: n,
    currentSortOrder: r,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  }, /* @__PURE__ */ l.createElement($e, {
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
    selectOnNavigation: i
  }));
};
as.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var Cv = g.component("SortOrder", ns);
const wv = (e) => ({
  updateQuerySortOrder: (t) => e(fb(t))
});
x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), wv)(Cv);
const ss = (e) => {
  let {
    overridableId: t,
    userSelectionFilters: r,
    title: n,
    label: a,
    filterValue: s,
    updateQueryFilters: i
  } = e;
  const o = (p) => p.filter((f) => f[0] === s[0]).length > 0, u = () => {
    i(s);
  }, {
    buildUID: c
  } = $(_), d = o(r);
  return /* @__PURE__ */ l.createElement(g, {
    id: c("SearchFilters.Toggle.element", t),
    title: n,
    label: a,
    filterValue: s,
    userSelectionFilters: r,
    updateQueryFilters: i
  }, /* @__PURE__ */ l.createElement(O, null, /* @__PURE__ */ l.createElement(O.Content, null, /* @__PURE__ */ l.createElement(O.Header, null, n)), /* @__PURE__ */ l.createElement(O.Content, null, /* @__PURE__ */ l.createElement(Tn, {
    toggle: !0,
    label: a,
    onClick: u,
    checked: d
  }))));
};
ss.defaultProps = {
  overridableId: ""
};
var Tv = g.component("SearchFilters.Toggle", ss);
const Av = (e) => ({
  updateQueryFilters: (t) => e(tr(t))
});
x((e) => ({
  userSelectionFilters: e.query.filters
}), Av)(Tv);
const is = l.createContext(
  null
), Fv = ({ config: e, children: t, updateQueryState: r, currentQueryState: n }) => {
  const a = Pt(() => {
    r({
      ...n,
      queryString: n.queryString
    });
  }, [r, n]);
  return /* @__PURE__ */ l.createElement(is.Provider, { value: { config: e, refreshSearch: a } }, t);
}, Iv = Da(Fv), sr = () => {
  const e = l.useContext(is);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
}, Xr = (e) => (e == null ? void 0 : e.charAt(0).toUpperCase()) + (e == null ? void 0 : e.slice(1)) || "", Ov = (e) => new Date(e).toISOString().split("T")[0];
var os = { exports: {} };
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
      for (var s = 0, i = {}; s < arguments.length; s++) {
        var o = arguments[s];
        for (var u in o)
          i[u] = o[u];
      }
      return i;
    }
    function n(s) {
      return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    function a(s) {
      function i() {
      }
      function o(c, d, p) {
        if (!(typeof document > "u")) {
          p = r({
            path: "/"
          }, i.defaults, p), typeof p.expires == "number" && (p.expires = new Date(/* @__PURE__ */ new Date() * 1 + p.expires * 864e5)), p.expires = p.expires ? p.expires.toUTCString() : "";
          try {
            var h = JSON.stringify(d);
            /^[\{\[]/.test(h) && (d = h);
          } catch {
          }
          d = s.write ? s.write(d, c) : encodeURIComponent(String(d)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), c = encodeURIComponent(String(c)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var f = "";
          for (var y in p)
            p[y] && (f += "; " + y, p[y] !== !0 && (f += "=" + p[y].split(";")[0]));
          return document.cookie = c + "=" + d + f;
        }
      }
      function u(c, d) {
        if (!(typeof document > "u")) {
          for (var p = {}, h = document.cookie ? document.cookie.split("; ") : [], f = 0; f < h.length; f++) {
            var y = h[f].split("="), m = y.slice(1).join("=");
            !d && m.charAt(0) === '"' && (m = m.slice(1, -1));
            try {
              var b = n(y[0]);
              if (m = (s.read || s)(m, b) || n(m), d)
                try {
                  m = JSON.parse(m);
                } catch {
                }
              if (p[b] = m, c === b)
                break;
            } catch {
            }
          }
          return c ? p[c] : p;
        }
      }
      return i.set = o, i.get = function(c) {
        return u(
          c,
          !1
          /* read as raw */
        );
      }, i.getJSON = function(c) {
        return u(
          c,
          !0
          /* read as json */
        );
      }, i.remove = function(c, d) {
        o(c, "", r(d, {
          expires: -1
        }));
      }, i.defaults = {}, i.withConverter = a, i;
    }
    return a(function() {
    });
  });
})(os);
var Rv = os.exports;
const Pv = /* @__PURE__ */ T(Rv), kv = () => Pv.get("csrftoken") || null, rx = (e) => new oa(e), nx = (e, t = {}, r = !0) => ({
  axios: {
    url: e,
    headers: {
      Accept: "application/vnd.inveniordm.v1+json",
      ...t
    },
    withCredentials: r
  }
}), ee = De.create({
  baseURL: "",
  timeout: 3e4,
  withCredentials: !0,
  // Include cookies in requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
ee.interceptors.request.use(
  (e) => {
    const t = kv();
    return t && (e.headers["X-CSRFTOKEN"] = t), e;
  },
  (e) => Promise.reject(e)
);
const Dv = async (e, t) => {
  try {
    const r = await ee.put(
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
}, Lv = async (e) => {
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
    const r = await ee.post(
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
}, Bv = async (e) => {
  try {
    const t = await ee.delete(`/api/importer-tasks/${e}`);
    return t.status === 204 ? !0 : (console.error(`Failed to delete task: ${t.statusText}`), !1);
  } catch (t) {
    return console.error(
      `Error deleting task: ${t instanceof Error ? t.message : "Unknown error"}`
    ), !1;
  }
}, Nv = async () => {
  try {
    const e = await ee.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, Uv = async (e) => {
  try {
    const t = await ee.get(
      `/api/importer-tasks/config/${e}`
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error fetching serializers:", t), new Error("Failed to fetch serializers");
  }
}, Mv = async (e) => {
  try {
    const t = await ee.post(
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
}, jv = ({
  result: e,
  index: t
}) => {
  var a;
  const { refreshSearch: r } = sr();
  if (!e)
    return null;
  const n = async (s) => {
    try {
      await Bv(s) ? r() : console.error(`Failed to delete task ${s}.`);
    } catch (i) {
      console.error(`Error deleting task ${s}:`, i);
    }
  };
  return /* @__PURE__ */ l.createElement(Fn, { key: t }, /* @__PURE__ */ l.createElement(V, null, e.title || "No title"), /* @__PURE__ */ l.createElement(V, null, Ov(e.created)), /* @__PURE__ */ l.createElement(V, null, Xr(e.status)), /* @__PURE__ */ l.createElement(V, null, ((a = e.records_status) == null ? void 0 : a.total_records) ?? 0), /* @__PURE__ */ l.createElement(V, null, 0), /* @__PURE__ */ l.createElement(V, null, e.serializer), /* @__PURE__ */ l.createElement(V, null, Xr(e.mode)), /* @__PURE__ */ l.createElement(V, { style: { width: "220px" } }, /* @__PURE__ */ l.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ l.createElement(
    $e,
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
          onClick: () => n(e.id)
        }
      ]
    }
  ), /* @__PURE__ */ l.createElement(oe, { basic: !0, size: "tiny" }, /* @__PURE__ */ l.createElement(ie, { name: "eye" }), "View"))));
}, Qv = ({ children: e }) => /* @__PURE__ */ l.createElement(ui, { celled: !0, size: "small", comp: !0 }, /* @__PURE__ */ l.createElement(ci, null, /* @__PURE__ */ l.createElement(Fn, null, /* @__PURE__ */ l.createElement(H, null, "ID"), /* @__PURE__ */ l.createElement(H, null, "Date Created"), /* @__PURE__ */ l.createElement(H, null, "Status"), /* @__PURE__ */ l.createElement(H, null, "Records"), /* @__PURE__ */ l.createElement(H, null, "Files"), /* @__PURE__ */ l.createElement(H, null, "Serializer"), /* @__PURE__ */ l.createElement(H, null, "Mode"), /* @__PURE__ */ l.createElement(H, null, "Actions"))), /* @__PURE__ */ l.createElement(di, null, e)), z = {
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
  sortOrderDisabled: !0
}, zv = () => {
  const [e, t] = ft(
    {}
  ), [r, n] = ft(!0), { values: a, submitForm: s, isSubmitting: i, isValid: o, setFieldValue: u } = wi(), c = Pt(async () => {
    try {
      const d = await Nv(), p = {};
      for (const h of d) {
        const f = await Uv(h);
        f && (p[h] = f);
      }
      t(p);
    } catch (d) {
      console.error("Error fetching record types:", d);
    } finally {
      n(!1);
    }
  }, []);
  return Rt(() => {
    c();
  }, [c]), {
    configs: e,
    isLoading: r,
    values: a,
    submitForm: s,
    setFieldValue: u,
    isSubmitting: i,
    isValid: o
  };
}, qv = () => {
  const {
    configs: e,
    isLoading: t,
    submitForm: r,
    setFieldValue: n,
    values: a,
    isSubmitting: s,
    isValid: i
  } = zv(), o = (u) => {
    var d;
    const c = ((d = u.target.files) == null ? void 0 : d[0]) || null;
    n("metadata", c);
  };
  return t ? /* @__PURE__ */ l.createElement("p", null, "Loading record types...") : !e || Object.keys(e).length === 0 ? /* @__PURE__ */ l.createElement("p", null, "No record types available.") : /* @__PURE__ */ l.createElement(ai, null, /* @__PURE__ */ l.createElement(
    $i,
    {
      fieldPath: "task.title",
      label: "Title",
      placeholder: "Enter a title for the import task",
      required: !0
    }
  ), /* @__PURE__ */ l.createElement(dr.Group, { widths: "equal" }, /* @__PURE__ */ l.createElement(
    lt,
    {
      fieldPath: "task.recordType",
      label: "Record Type",
      options: Object.keys(e).map((u) => ({
        key: u,
        value: u,
        text: u
      })),
      placeholder: "Select Record Type",
      required: !0
    }
  ), /* @__PURE__ */ l.createElement(
    lt,
    {
      fieldPath: "task.serializer",
      label: "Serializer",
      options: a.task.recordType && e[a.task.recordType] ? e[a.task.recordType].serializers.map((u) => ({
        key: u,
        value: u,
        text: u
      })) : [],
      placeholder: "Select Serializer",
      disabled: !a.task.recordType,
      required: !0
    }
  ), /* @__PURE__ */ l.createElement(
    lt,
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
  )), /* @__PURE__ */ l.createElement(dr.Field, null, /* @__PURE__ */ l.createElement("label", { htmlFor: "file-input" }, "Metadata File"), /* @__PURE__ */ l.createElement(
    "input",
    {
      id: "file-input",
      type: "file",
      accept: ".csv",
      onChange: o,
      style: { marginTop: "8px" }
    }
  ), a.metadata && /* @__PURE__ */ l.createElement("p", { style: { marginTop: "8px", fontSize: "12px", color: "#666" } }, "Selected: ", a.metadata.name)), /* @__PURE__ */ l.createElement(
    xi,
    {
      fieldPath: "task.description",
      label: "Notes",
      placeholder: "Enter a description for the import task",
      rows: 3
    }
  ), /* @__PURE__ */ l.createElement(
    oe,
    {
      type: "button",
      primary: !0,
      onClick: r,
      disabled: !i || s,
      loading: s
    },
    "Submit"
  ));
};
var _t;
try {
  _t = Map;
} catch {
}
var Et;
try {
  Et = Set;
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
    return e.map($t);
  if (_t && e instanceof _t)
    return new Map(Array.from(e.entries()));
  if (Et && e instanceof Et)
    return new Set(Array.from(e.values()));
  if (e instanceof Object) {
    t.push(e);
    var n = Object.create(e);
    r.push(n);
    for (var a in e) {
      var s = t.findIndex(function(i) {
        return i === e[a];
      });
      n[a] = s > -1 ? r[s] : ls(e[a], t, r);
    }
    return n;
  }
  return e;
}
function $t(e) {
  return ls(e, [], []);
}
const Gv = Object.prototype.toString, Vv = Error.prototype.toString, Hv = RegExp.prototype.toString, Yv = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Wv = /^Symbol\((.*)\)(.*)$/;
function Kv(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Zr(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return Kv(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return Yv.call(e).replace(Wv, "Symbol($1)");
  const n = Gv.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + Vv.call(e) + "]" : n === "RegExp" ? Hv.call(e) : null;
}
function Ee(e, t) {
  let r = Zr(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = Zr(this[n], t);
    return s !== null ? s : a;
  }, 2);
}
let X = {
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
    let a = n != null && n !== r, s = `${e} must be a \`${t}\` type, but the final value was: \`${Ee(r, !0)}\`` + (a ? ` (cast from the value \`${Ee(n, !0)}\`).` : ".");
    return r === null && (s += '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'), s;
  },
  defined: "${path} must be defined"
}, L = {
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
}, Xv = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, xt = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Zv = {
  isValue: "${path} field must be ${value}"
}, Ct = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, Jv = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: X,
  string: L,
  number: Xv,
  date: xt,
  object: Ct,
  array: Jv,
  boolean: Zv
});
var eS = Object.prototype, tS = eS.hasOwnProperty;
function rS(e, t) {
  return e != null && tS.call(e, t);
}
var nS = rS, aS = nS, sS = Qn;
function iS(e, t) {
  return e != null && sS(e, t, aS);
}
var oS = iS;
const ze = /* @__PURE__ */ T(oS), us = (e) => e && e.__isYupSchema__;
class lS {
  constructor(t, r) {
    if (this.fn = void 0, this.refs = t, this.refs = t, typeof r == "function") {
      this.fn = r;
      return;
    }
    if (!ze(r, "is"))
      throw new TypeError("`is:` is required for `when()` conditions");
    if (!r.then && !r.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: a,
      otherwise: s
    } = r, i = typeof n == "function" ? n : (...o) => o.every((u) => u === n);
    this.fn = function(...o) {
      let u = o.pop(), c = o.pop(), d = i(...o) ? a : s;
      if (d)
        return typeof d == "function" ? d(c) : c.concat(d.resolve(u));
    };
  }
  resolve(t, r) {
    let n = this.refs.map((s) => s.getValue(r == null ? void 0 : r.value, r == null ? void 0 : r.parent, r == null ? void 0 : r.context)), a = this.fn.apply(t, n.concat(t, r));
    if (a === void 0 || a === t)
      return t;
    if (!us(a))
      throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
function cs(e) {
  return e == null ? [] : [].concat(e);
}
function wt() {
  return wt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wt.apply(this, arguments);
}
let uS = /\$\{\s*(\w+)\s*\}/g;
class R extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = wt({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(uS, (a, s) => Ee(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], cs(t).forEach((s) => {
      R.isError(s) ? (this.errors.push(...s.errors), this.inner = this.inner.concat(s.inner.length ? s.inner : s)) : this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, R);
  }
}
const cS = (e) => {
  let t = !1;
  return (...r) => {
    t || (t = !0, e(...r));
  };
};
function Tt(e, t) {
  let {
    endEarly: r,
    tests: n,
    args: a,
    value: s,
    errors: i,
    sort: o,
    path: u
  } = e, c = cS(t), d = n.length;
  const p = [];
  if (i = i || [], !d)
    return i.length ? c(new R(i, s, u)) : c(null, s);
  for (let h = 0; h < n.length; h++) {
    const f = n[h];
    f(a, function(m) {
      if (m) {
        if (!R.isError(m))
          return c(m, s);
        if (r)
          return m.value = s, c(m, s);
        p.push(m);
      }
      if (--d <= 0) {
        if (p.length && (o && p.sort(o), i.length && p.push(...i), i = p), i.length) {
          c(new R(i, s, u), s);
          return;
        }
        c(null, s);
      }
    });
  }
}
function dS(e) {
  return function(t, r, n) {
    for (var a = -1, s = Object(t), i = n(t), o = i.length; o--; ) {
      var u = i[e ? o : ++a];
      if (r(s[u], u, s) === !1)
        break;
    }
    return t;
  };
}
var pS = dS, hS = pS, fS = hS(), gS = fS, mS = gS, yS = Ae;
function bS(e, t) {
  return e && mS(e, t, yS);
}
var ds = bS, vS = "__lodash_hash_undefined__";
function SS(e) {
  return this.__data__.set(e, vS), this;
}
var _S = SS;
function ES(e) {
  return this.__data__.has(e);
}
var $S = ES, xS = jt, CS = _S, wS = $S;
function qe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new xS(); ++t < r; )
    this.add(e[t]);
}
qe.prototype.add = qe.prototype.push = CS;
qe.prototype.has = wS;
var TS = qe;
function AS(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var FS = AS;
function IS(e, t) {
  return e.has(t);
}
var OS = IS, RS = TS, PS = FS, kS = OS, DS = 1, LS = 2;
function BS(e, t, r, n, a, s) {
  var i = r & DS, o = e.length, u = t.length;
  if (o != u && !(i && u > o))
    return !1;
  var c = s.get(e), d = s.get(t);
  if (c && d)
    return c == t && d == e;
  var p = -1, h = !0, f = r & LS ? new RS() : void 0;
  for (s.set(e, t), s.set(t, e); ++p < o; ) {
    var y = e[p], m = t[p];
    if (n)
      var b = i ? n(m, y, p, t, e, s) : n(y, m, p, e, t, s);
    if (b !== void 0) {
      if (b)
        continue;
      h = !1;
      break;
    }
    if (f) {
      if (!PS(t, function(v, C) {
        if (!kS(f, C) && (y === v || a(y, v, r, n, s)))
          return f.push(C);
      })) {
        h = !1;
        break;
      }
    } else if (!(y === m || a(y, m, r, n, s))) {
      h = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), h;
}
var ps = BS;
function NS(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var US = NS;
function MS(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var jS = MS, Jr = ue, en = Jn, QS = Ze, zS = ps, qS = US, GS = jS, VS = 1, HS = 2, YS = "[object Boolean]", WS = "[object Date]", KS = "[object Error]", XS = "[object Map]", ZS = "[object Number]", JS = "[object RegExp]", e_ = "[object Set]", t_ = "[object String]", r_ = "[object Symbol]", n_ = "[object ArrayBuffer]", a_ = "[object DataView]", tn = Jr ? Jr.prototype : void 0, dt = tn ? tn.valueOf : void 0;
function s_(e, t, r, n, a, s, i) {
  switch (r) {
    case a_:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case n_:
      return !(e.byteLength != t.byteLength || !s(new en(e), new en(t)));
    case YS:
    case WS:
    case ZS:
      return QS(+e, +t);
    case KS:
      return e.name == t.name && e.message == t.message;
    case JS:
    case t_:
      return e == t + "";
    case XS:
      var o = qS;
    case e_:
      var u = n & VS;
      if (o || (o = GS), e.size != t.size && !u)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      n |= HS, i.set(e, t);
      var d = zS(o(e), o(t), n, a, s, i);
      return i.delete(e), d;
    case r_:
      if (dt)
        return dt.call(e) == dt.call(t);
  }
  return !1;
}
var i_ = s_, rn = Zn, o_ = 1, l_ = Object.prototype, u_ = l_.hasOwnProperty;
function c_(e, t, r, n, a, s) {
  var i = r & o_, o = rn(e), u = o.length, c = rn(t), d = c.length;
  if (u != d && !i)
    return !1;
  for (var p = u; p--; ) {
    var h = o[p];
    if (!(i ? h in t : u_.call(t, h)))
      return !1;
  }
  var f = s.get(e), y = s.get(t);
  if (f && y)
    return f == t && y == e;
  var m = !0;
  s.set(e, t), s.set(t, e);
  for (var b = i; ++p < u; ) {
    h = o[p];
    var v = e[h], C = t[h];
    if (n)
      var U = i ? n(C, v, h, t, e, s) : n(v, C, h, e, t, s);
    if (!(U === void 0 ? v === C || a(v, C, r, n, s) : U)) {
      m = !1;
      break;
    }
    b || (b = h == "constructor");
  }
  if (m && !b) {
    var I = e.constructor, G = t.constructor;
    I != G && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof G == "function" && G instanceof G) && (m = !1);
  }
  return s.delete(e), s.delete(t), m;
}
var d_ = c_, pt = Yt, p_ = ps, h_ = i_, f_ = d_, nn = xe, an = P, sn = Ke, g_ = Nt, m_ = 1, on = "[object Arguments]", ln = "[object Array]", Re = "[object Object]", y_ = Object.prototype, un = y_.hasOwnProperty;
function b_(e, t, r, n, a, s) {
  var i = an(e), o = an(t), u = i ? ln : nn(e), c = o ? ln : nn(t);
  u = u == on ? Re : u, c = c == on ? Re : c;
  var d = u == Re, p = c == Re, h = u == c;
  if (h && sn(e)) {
    if (!sn(t))
      return !1;
    i = !0, d = !1;
  }
  if (h && !d)
    return s || (s = new pt()), i || g_(e) ? p_(e, t, r, n, a, s) : h_(e, t, u, r, n, a, s);
  if (!(r & m_)) {
    var f = d && un.call(e, "__wrapped__"), y = p && un.call(t, "__wrapped__");
    if (f || y) {
      var m = f ? e.value() : e, b = y ? t.value() : t;
      return s || (s = new pt()), a(m, b, r, n, s);
    }
  }
  return h ? (s || (s = new pt()), f_(e, t, r, n, a, s)) : !1;
}
var v_ = b_, S_ = v_, cn = j;
function hs(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !cn(e) && !cn(t) ? e !== e && t !== t : S_(e, t, r, n, hs, a);
}
var fs = hs, __ = Yt, E_ = fs, $_ = 1, x_ = 2;
function C_(e, t, r, n) {
  var a = r.length, s = a, i = !n;
  if (e == null)
    return !s;
  for (e = Object(e); a--; ) {
    var o = r[a];
    if (i && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return !1;
  }
  for (; ++a < s; ) {
    o = r[a];
    var u = o[0], c = e[u], d = o[1];
    if (i && o[2]) {
      if (c === void 0 && !(u in e))
        return !1;
    } else {
      var p = new __();
      if (n)
        var h = n(c, d, u, e, t, p);
      if (!(h === void 0 ? E_(d, c, $_ | x_, n, p) : h))
        return !1;
    }
  }
  return !0;
}
var w_ = C_, T_ = q;
function A_(e) {
  return e === e && !T_(e);
}
var gs = A_, F_ = gs, I_ = Ae;
function O_(e) {
  for (var t = I_(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, F_(a)];
  }
  return t;
}
var R_ = O_;
function P_(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var ms = P_, k_ = w_, D_ = R_, L_ = ms;
function B_(e) {
  var t = D_(e);
  return t.length == 1 && t[0][2] ? L_(t[0][0], t[0][1]) : function(r) {
    return r === e || k_(r, e, t);
  };
}
var N_ = B_, U_ = fs, M_ = jn, j_ = qt, Q_ = Mt, z_ = gs, q_ = ms, G_ = we, V_ = 1, H_ = 2;
function Y_(e, t) {
  return Q_(e) && z_(t) ? q_(G_(e), t) : function(r) {
    var n = M_(r, e);
    return n === void 0 && n === t ? j_(r, e) : U_(t, n, V_ | H_);
  };
}
var W_ = Y_;
function K_(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var X_ = K_, Z_ = zt;
function J_(e) {
  return function(t) {
    return Z_(t, e);
  };
}
var e0 = J_, t0 = X_, r0 = e0, n0 = Mt, a0 = we;
function s0(e) {
  return n0(e) ? t0(a0(e)) : r0(e);
}
var i0 = s0, o0 = N_, l0 = W_, u0 = Vt, c0 = P, d0 = i0;
function p0(e) {
  return typeof e == "function" ? e : e == null ? u0 : typeof e == "object" ? c0(e) ? l0(e[0], e[1]) : o0(e) : d0(e);
}
var ys = p0, h0 = at, f0 = ds, g0 = ys;
function m0(e, t) {
  var r = {};
  return t = g0(t), f0(e, function(n, a, s) {
    h0(r, a, t(n, a, s));
  }), r;
}
var y0 = m0;
const bs = /* @__PURE__ */ T(y0);
function te(e) {
  this._maxSize = e, this.clear();
}
te.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
te.prototype.get = function(e) {
  return this._values[e];
};
te.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var b0 = /[^.^\]^[]+|(?=\[\]|\.\.)/g, vs = /^\d+$/, v0 = /^\d/, S0 = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, _0 = /^\s*(['"]?)(.*?)(\1)\s*$/, ir = 512, dn = new te(ir), pn = new te(ir), hn = new te(ir), ot = {
  Cache: te,
  split: At,
  normalizePath: ht,
  setter: function(e) {
    var t = ht(e);
    return pn.get(e) || pn.set(e, function(n, a) {
      for (var s = 0, i = t.length, o = n; s < i - 1; ) {
        var u = t[s];
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return n;
        o = o[t[s++]];
      }
      o[t[s]] = a;
    });
  },
  getter: function(e, t) {
    var r = ht(e);
    return hn.get(e) || hn.set(e, function(a) {
      for (var s = 0, i = r.length; s < i; )
        if (a != null || !t)
          a = a[r[s++]];
        else
          return;
      return a;
    });
  },
  join: function(e) {
    return e.reduce(function(t, r) {
      return t + (or(r) || vs.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    E0(Array.isArray(e) ? e : At(e), t, r);
  }
};
function ht(e) {
  return dn.get(e) || dn.set(
    e,
    At(e).map(function(t) {
      return t.replace(_0, "$2");
    })
  );
}
function At(e) {
  return e.match(b0) || [""];
}
function E0(e, t, r) {
  var n = e.length, a, s, i, o;
  for (s = 0; s < n; s++)
    a = e[s], a && (C0(a) && (a = '"' + a + '"'), o = or(a), i = !o && /^\d+$/.test(a), t.call(r, a, o, i, s, e));
}
function or(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function $0(e) {
  return e.match(v0) && !e.match(vs);
}
function x0(e) {
  return S0.test(e);
}
function C0(e) {
  return !or(e) && ($0(e) || x0(e));
}
const Pe = {
  context: "$",
  value: "."
};
class Y {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
      throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Pe.context, this.isValue = this.key[0] === Pe.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? Pe.context : this.isValue ? Pe.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && ot.getter(this.path, !0), this.map = r.map;
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
Y.prototype.__isYupRef = !0;
function Ge() {
  return Ge = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ge.apply(this, arguments);
}
function w0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function ke(e) {
  function t(r, n) {
    let {
      value: a,
      path: s = "",
      label: i,
      options: o,
      originalValue: u,
      sync: c
    } = r, d = w0(r, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name: p,
      test: h,
      params: f,
      message: y
    } = e;
    let {
      parent: m,
      context: b
    } = o;
    function v(w) {
      return Y.isRef(w) ? w.getValue(a, m, b) : w;
    }
    function C(w = {}) {
      const ge = bs(Ge({
        value: a,
        originalValue: u,
        label: i,
        path: w.path || s
      }, f, w.params), v), cr = new R(R.formatError(w.message || y, ge), a, ge.path, w.type || p);
      return cr.params = ge, cr;
    }
    let U = Ge({
      path: s,
      parent: m,
      type: p,
      createError: C,
      resolve: v,
      options: o,
      originalValue: u
    }, d);
    if (!c) {
      try {
        Promise.resolve(h.call(U, a, U)).then((w) => {
          R.isError(w) ? n(w) : w ? n(null, w) : n(C());
        }).catch(n);
      } catch (w) {
        n(w);
      }
      return;
    }
    let I;
    try {
      var G;
      if (I = h.call(U, a, U), typeof ((G = I) == null ? void 0 : G.then) == "function")
        throw new Error(`Validation test of type: "${U.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (w) {
      n(w);
      return;
    }
    R.isError(I) ? n(I) : I ? n(null, I) : n(C());
  }
  return t.OPTIONS = e, t;
}
let T0 = (e) => e.substr(0, e.length - 1).substr(1);
function A0(e, t, r, n = r) {
  let a, s, i;
  return t ? (ot.forEach(t, (o, u, c) => {
    let d = u ? T0(o) : o;
    if (e = e.resolve({
      context: n,
      parent: a,
      value: r
    }), e.innerType) {
      let p = c ? parseInt(d, 10) : 0;
      if (r && p >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${t}. because there is no value at that index. `);
      a = r, r = r && r[p], e = e.innerType;
    }
    if (!c) {
      if (!e.fields || !e.fields[d])
        throw new Error(`The schema does not contain the path: ${t}. (failed at: ${i} which is a type: "${e._type}")`);
      a = r, r = r && r[d], e = e.fields[d];
    }
    s = d, i = u ? "[" + o + "]" : "." + o;
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
class Ve {
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
    return this.toArray().reduce((r, n) => r.concat(Y.isRef(n) ? t(n) : n), []);
  }
  add(t) {
    Y.isRef(t) ? this.refs.set(t.key, t) : this.list.add(t);
  }
  delete(t) {
    Y.isRef(t) ? this.refs.delete(t.key) : this.list.delete(t);
  }
  clone() {
    const t = new Ve();
    return t.list = new Set(this.list), t.refs = new Map(this.refs), t;
  }
  merge(t, r) {
    const n = this.clone();
    return t.list.forEach((a) => n.add(a)), t.refs.forEach((a) => n.add(a)), r.list.forEach((a) => n.delete(a)), r.refs.forEach((a) => n.delete(a)), n;
  }
}
function k() {
  return k = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, k.apply(this, arguments);
}
class F {
  constructor(t) {
    this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new Ve(), this._blacklist = new Ve(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(X.notType);
    }), this.type = (t == null ? void 0 : t.type) || "mixed", this.spec = k({
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
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = k({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = $t(k({}, this.spec, t)), r;
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
    const a = k({}, r.spec, n.spec);
    return n.spec = a, n._typeError || (n._typeError = r._typeError), n._whitelistError || (n._whitelistError = r._whitelistError), n._blacklistError || (n._blacklistError = r._blacklistError), n._whitelist = r._whitelist.merge(t._whitelist, t._blacklist), n._blacklist = r._blacklist.merge(t._blacklist, t._whitelist), n.tests = r.tests, n.exclusiveTests = r.exclusiveTests, n.withMutation((s) => {
      t.tests.forEach((i) => {
        s.test(i.OPTIONS);
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
    let n = this.resolve(k({
      value: t
    }, r)), a = n._cast(t, r);
    if (t !== void 0 && r.assert !== !1 && n.isType(a) !== !0) {
      let s = Ee(t), i = Ee(a);
      throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${n._type}". 

attempted value: ${s} 
` + (i !== s ? `result of cast: ${i}` : ""));
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
      from: i = [],
      originalValue: o = t,
      strict: u = this.spec.strict,
      abortEarly: c = this.spec.abortEarly
    } = r, d = t;
    u || (d = this._cast(d, k({
      assert: !1
    }, r)));
    let p = {
      value: d,
      path: s,
      options: r,
      originalValue: o,
      schema: this,
      label: this.spec.label,
      sync: a,
      from: i
    }, h = [];
    this._typeError && h.push(this._typeError);
    let f = [];
    this._whitelistError && f.push(this._whitelistError), this._blacklistError && f.push(this._blacklistError), Tt({
      args: p,
      value: d,
      path: s,
      sync: a,
      tests: h,
      endEarly: c
    }, (y) => {
      if (y)
        return void n(y, d);
      Tt({
        tests: this.tests.concat(f),
        args: p,
        path: s,
        sync: a,
        value: d,
        endEarly: c
      }, n);
    });
  }
  validate(t, r, n) {
    let a = this.resolve(k({}, r, {
      value: t
    }));
    return typeof n == "function" ? a._validate(t, r, n) : new Promise((s, i) => a._validate(t, r, (o, u) => {
      o ? i(o) : s(u);
    }));
  }
  validateSync(t, r) {
    let n = this.resolve(k({}, r, {
      value: t
    })), a;
    return n._validate(t, k({}, r, {
      sync: !0
    }), (s, i) => {
      if (s)
        throw s;
      a = i;
    }), a;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (R.isError(n))
        return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (R.isError(n))
        return !1;
      throw n;
    }
  }
  _getDefault() {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this) : $t(t);
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
  defined(t = X.defined) {
    return this.test({
      message: t,
      name: "defined",
      exclusive: !0,
      test(r) {
        return r !== void 0;
      }
    });
  }
  required(t = X.required) {
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
    }, r.message === void 0 && (r.message = X.default), typeof r.test != "function")
      throw new TypeError("`test` is a required parameters");
    let n = this.clone(), a = ke(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((i) => !(i.OPTIONS.name === r.name && (s || i.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = cs(t).map((s) => new Y(s));
    return a.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(new lS(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r._typeError = ke({
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
  oneOf(t, r = X.oneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._whitelist.add(a), n._blacklist.delete(a);
    }), n._whitelistError = ke({
      message: r,
      name: "oneOf",
      test(a) {
        if (a === void 0)
          return !0;
        let s = this.schema._whitelist, i = s.resolveAll(this.resolve);
        return i.includes(a) ? !0 : this.createError({
          params: {
            values: s.toArray().join(", "),
            resolved: i
          }
        });
      }
    }), n;
  }
  notOneOf(t, r = X.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n._blacklistError = ke({
      message: r,
      name: "notOneOf",
      test(a) {
        let s = this.schema._blacklist, i = s.resolveAll(this.resolve);
        return i.includes(a) ? this.createError({
          params: {
            values: s.toArray().join(", "),
            resolved: i
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
      })).filter((s, i, o) => o.findIndex((u) => u.name === s.name) === i)
    };
  }
}
F.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"])
  F.prototype[`${e}At`] = function(t, r, n = {}) {
    const {
      parent: a,
      parentPath: s,
      schema: i
    } = A0(this, t, r, n.context);
    return i[e](a && a[s], k({}, n, {
      parent: a,
      path: t
    }));
  };
for (const e of ["equals", "is"])
  F.prototype[e] = F.prototype.oneOf;
for (const e of ["not", "nope"])
  F.prototype[e] = F.prototype.notOneOf;
F.prototype.optional = F.prototype.notRequired;
const F0 = F;
F0.prototype;
const B = (e) => e == null;
let I0 = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, O0 = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, R0 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, P0 = (e) => B(e) || e === e.trim(), k0 = {}.toString();
function Se() {
  return new Ss();
}
class Ss extends F {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === k0 ? t : r;
      });
    });
  }
  _typeCheck(t) {
    return t instanceof String && (t = t.valueOf()), typeof t == "string";
  }
  _isPresent(t) {
    return super._isPresent(t) && !!t.length;
  }
  length(t, r = L.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      test(n) {
        return B(n) || n.length === this.resolve(t);
      }
    });
  }
  min(t, r = L.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(n) {
        return B(n) || n.length >= this.resolve(t);
      }
    });
  }
  max(t, r = L.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: t
      },
      test(n) {
        return B(n) || n.length <= this.resolve(t);
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
      message: a || L.matches,
      params: {
        regex: t
      },
      test: (i) => B(i) || i === "" && n || i.search(t) !== -1
    });
  }
  email(t = L.email) {
    return this.matches(I0, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = L.url) {
    return this.matches(O0, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = L.uuid) {
    return this.matches(R0, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = L.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: P0
    });
  }
  lowercase(t = L.lowercase) {
    return this.transform((r) => B(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => B(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = L.uppercase) {
    return this.transform((r) => B(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => B(r) || r === r.toUpperCase()
    });
  }
}
Se.prototype = Ss.prototype;
var D0 = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function L0(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, a;
  if (a = D0.exec(e)) {
    for (var s = 0, i; i = t[s]; ++s)
      a[i] = +a[i] || 0;
    a[2] = (+a[2] || 1) - 1, a[3] = +a[3] || 1, a[7] = a[7] ? String(a[7]).substr(0, 3) : 0, (a[8] === void 0 || a[8] === "") && (a[9] === void 0 || a[9] === "") ? n = +new Date(a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : (a[8] !== "Z" && a[9] !== void 0 && (r = a[10] * 60 + a[11], a[9] === "+" && (r = 0 - r)), n = Date.UTC(a[1], a[2], a[3], a[4], a[5] + r, a[6], a[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let _s = /* @__PURE__ */ new Date(""), B0 = (e) => Object.prototype.toString.call(e) === "[object Date]";
class Es extends F {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = L0(t), isNaN(t) ? _s : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return B0(t) && !isNaN(t.getTime());
  }
  prepareParam(t, r) {
    let n;
    if (Y.isRef(t))
      n = t;
    else {
      let a = this.cast(t);
      if (!this._typeCheck(a))
        throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = a;
    }
    return n;
  }
  min(t, r = xt.min) {
    let n = this.prepareParam(t, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(a) {
        return B(a) || a >= this.resolve(n);
      }
    });
  }
  max(t, r = xt.max) {
    let n = this.prepareParam(t, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      test(a) {
        return B(a) || a <= this.resolve(n);
      }
    });
  }
}
Es.INVALID_DATE = _s;
Es.prototype;
function N0(e, t, r, n) {
  var a = -1, s = e == null ? 0 : e.length;
  for (n && s && (r = e[++a]); ++a < s; )
    r = t(r, e[a], a, e);
  return r;
}
var U0 = N0;
function M0(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var j0 = M0, Q0 = j0, z0 = {
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
}, q0 = Q0(z0), G0 = q0, V0 = G0, H0 = Ce, Y0 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, W0 = "\\u0300-\\u036f", K0 = "\\ufe20-\\ufe2f", X0 = "\\u20d0-\\u20ff", Z0 = W0 + K0 + X0, J0 = "[" + Z0 + "]", eE = RegExp(J0, "g");
function tE(e) {
  return e = H0(e), e && e.replace(Y0, V0).replace(eE, "");
}
var rE = tE, nE = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function aE(e) {
  return e.match(nE) || [];
}
var sE = aE, iE = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function oE(e) {
  return iE.test(e);
}
var lE = oE, $s = "\\ud800-\\udfff", uE = "\\u0300-\\u036f", cE = "\\ufe20-\\ufe2f", dE = "\\u20d0-\\u20ff", pE = uE + cE + dE, xs = "\\u2700-\\u27bf", Cs = "a-z\\xdf-\\xf6\\xf8-\\xff", hE = "\\xac\\xb1\\xd7\\xf7", fE = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", gE = "\\u2000-\\u206f", mE = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ws = "A-Z\\xc0-\\xd6\\xd8-\\xde", yE = "\\ufe0e\\ufe0f", Ts = hE + fE + gE + mE, As = "['’]", fn = "[" + Ts + "]", bE = "[" + pE + "]", Fs = "\\d+", vE = "[" + xs + "]", Is = "[" + Cs + "]", Os = "[^" + $s + Ts + Fs + xs + Cs + ws + "]", SE = "\\ud83c[\\udffb-\\udfff]", _E = "(?:" + bE + "|" + SE + ")", EE = "[^" + $s + "]", Rs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ps = "[\\ud800-\\udbff][\\udc00-\\udfff]", ne = "[" + ws + "]", $E = "\\u200d", gn = "(?:" + Is + "|" + Os + ")", xE = "(?:" + ne + "|" + Os + ")", mn = "(?:" + As + "(?:d|ll|m|re|s|t|ve))?", yn = "(?:" + As + "(?:D|LL|M|RE|S|T|VE))?", ks = _E + "?", Ds = "[" + yE + "]?", CE = "(?:" + $E + "(?:" + [EE, Rs, Ps].join("|") + ")" + Ds + ks + ")*", wE = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", TE = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", AE = Ds + ks + CE, FE = "(?:" + [vE, Rs, Ps].join("|") + ")" + AE, IE = RegExp([
  ne + "?" + Is + "+" + mn + "(?=" + [fn, ne, "$"].join("|") + ")",
  xE + "+" + yn + "(?=" + [fn, ne + gn, "$"].join("|") + ")",
  ne + "?" + gn + "+" + mn,
  ne + "+" + yn,
  TE,
  wE,
  Fs,
  FE
].join("|"), "g");
function OE(e) {
  return e.match(IE) || [];
}
var RE = OE, PE = sE, kE = lE, DE = Ce, LE = RE;
function BE(e, t, r) {
  return e = DE(e), t = r ? void 0 : t, t === void 0 ? kE(e) ? LE(e) : PE(e) : e.match(t) || [];
}
var NE = BE, UE = U0, ME = rE, jE = NE, QE = "['’]", zE = RegExp(QE, "g");
function qE(e) {
  return function(t) {
    return UE(jE(ME(t).replace(zE, "")), e, "");
  };
}
var Ls = qE, GE = Ls, VE = GE(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), HE = VE;
const bn = /* @__PURE__ */ T(HE);
function YE(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++n < a; )
    s[n] = e[n + t];
  return s;
}
var WE = YE, KE = WE;
function XE(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : KE(e, t, r);
}
var ZE = XE, JE = "\\ud800-\\udfff", e$ = "\\u0300-\\u036f", t$ = "\\ufe20-\\ufe2f", r$ = "\\u20d0-\\u20ff", n$ = e$ + t$ + r$, a$ = "\\ufe0e\\ufe0f", s$ = "\\u200d", i$ = RegExp("[" + s$ + JE + n$ + a$ + "]");
function o$(e) {
  return i$.test(e);
}
var Bs = o$;
function l$(e) {
  return e.split("");
}
var u$ = l$, Ns = "\\ud800-\\udfff", c$ = "\\u0300-\\u036f", d$ = "\\ufe20-\\ufe2f", p$ = "\\u20d0-\\u20ff", h$ = c$ + d$ + p$, f$ = "\\ufe0e\\ufe0f", g$ = "[" + Ns + "]", Ft = "[" + h$ + "]", It = "\\ud83c[\\udffb-\\udfff]", m$ = "(?:" + Ft + "|" + It + ")", Us = "[^" + Ns + "]", Ms = "(?:\\ud83c[\\udde6-\\uddff]){2}", js = "[\\ud800-\\udbff][\\udc00-\\udfff]", y$ = "\\u200d", Qs = m$ + "?", zs = "[" + f$ + "]?", b$ = "(?:" + y$ + "(?:" + [Us, Ms, js].join("|") + ")" + zs + Qs + ")*", v$ = zs + Qs + b$, S$ = "(?:" + [Us + Ft + "?", Ft, Ms, js, g$].join("|") + ")", _$ = RegExp(It + "(?=" + It + ")|" + S$ + v$, "g");
function E$(e) {
  return e.match(_$) || [];
}
var $$ = E$, x$ = u$, C$ = Bs, w$ = $$;
function T$(e) {
  return C$(e) ? w$(e) : x$(e);
}
var A$ = T$, F$ = ZE, I$ = Bs, O$ = A$, R$ = Ce;
function P$(e) {
  return function(t) {
    t = R$(t);
    var r = I$(t) ? O$(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? F$(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var k$ = P$, D$ = k$, L$ = D$("toUpperCase"), B$ = L$, N$ = Ce, U$ = B$;
function M$(e) {
  return U$(N$(e).toLowerCase());
}
var j$ = M$, Q$ = j$, z$ = Ls, q$ = z$(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? Q$(t) : t);
}), G$ = q$;
const V$ = /* @__PURE__ */ T(G$);
var H$ = at, Y$ = ds, W$ = ys;
function K$(e, t) {
  var r = {};
  return t = W$(t), Y$(e, function(n, a, s) {
    H$(r, t(n, a, s), n);
  }), r;
}
var X$ = K$;
const Z$ = /* @__PURE__ */ T(X$);
var lr = { exports: {} };
lr.exports = function(e) {
  return qs(J$(e), e);
};
lr.exports.array = qs;
function qs(e, t) {
  var r = e.length, n = new Array(r), a = {}, s = r, i = e1(t), o = t1(e);
  for (t.forEach(function(c) {
    if (!o.has(c[0]) || !o.has(c[1]))
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
    if (!o.has(c))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(c));
    if (!a[d]) {
      a[d] = !0;
      var f = i.get(c) || /* @__PURE__ */ new Set();
      if (f = Array.from(f), d = f.length) {
        p.add(c);
        do {
          var y = f[--d];
          u(y, o.get(y), p);
        } while (d);
        p.delete(c);
      }
      n[--r] = c;
    }
  }
}
function J$(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.add(a[0]), t.add(a[1]);
  }
  return Array.from(t);
}
function e1(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.has(a[0]) || t.set(a[0], /* @__PURE__ */ new Set()), t.has(a[1]) || t.set(a[1], /* @__PURE__ */ new Set()), t.get(a[0]).add(a[1]);
  }
  return t;
}
function t1(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var r1 = lr.exports;
const n1 = /* @__PURE__ */ T(r1);
function a1(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([i, o]) => `${i}-${o}`));
  function s(i, o) {
    let u = ot.split(i)[0];
    n.add(u), a.has(`${o}-${u}`) || r.push([o, u]);
  }
  for (const i in e)
    if (ze(e, i)) {
      let o = e[i];
      n.add(i), Y.isRef(o) && o.isSibling ? s(o.path, i) : us(o) && "deps" in o && o.deps.forEach((u) => s(u, i));
    }
  return n1.array(Array.from(n), r).reverse();
}
function vn(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if (((s = t.path) == null ? void 0 : s.indexOf(n)) !== -1)
      return r = a, !0;
  }), r;
}
function Gs(e) {
  return (t, r) => vn(e, t) - vn(e, r);
}
function ae() {
  return ae = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ae.apply(this, arguments);
}
let Sn = (e) => Object.prototype.toString.call(e) === "[object Object]";
function s1(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const i1 = Gs([]);
class Vs extends F {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = i1, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
    return Sn(t) || typeof t == "function";
  }
  _cast(t, r = {}) {
    var n;
    let a = super._cast(t, r);
    if (a === void 0)
      return this.getDefault();
    if (!this._typeCheck(a))
      return a;
    let s = this.fields, i = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, o = this._nodes.concat(Object.keys(a).filter((p) => this._nodes.indexOf(p) === -1)), u = {}, c = ae({}, r, {
      parent: u,
      __validating: r.__validating || !1
    }), d = !1;
    for (const p of o) {
      let h = s[p], f = ze(a, p);
      if (h) {
        let y, m = a[p];
        c.path = (r.path ? `${r.path}.` : "") + p, h = h.resolve({
          value: m,
          context: r.context,
          parent: u
        });
        let b = "spec" in h ? h.spec : void 0, v = b == null ? void 0 : b.strict;
        if (b != null && b.strip) {
          d = d || p in a;
          continue;
        }
        y = !r.__validating || !v ? (
          // TODO: use _cast, this is double resolving
          h.cast(a[p], c)
        ) : a[p], y !== void 0 && (u[p] = y);
      } else
        f && !i && (u[p] = a[p]);
      u[p] !== a[p] && (d = !0);
    }
    return d ? u : a;
  }
  _validate(t, r = {}, n) {
    let a = [], {
      sync: s,
      from: i = [],
      originalValue: o = t,
      abortEarly: u = this.spec.abortEarly,
      recursive: c = this.spec.recursive
    } = r;
    i = [{
      schema: this,
      value: o
    }, ...i], r.__validating = !0, r.originalValue = o, r.from = i, super._validate(t, r, (d, p) => {
      if (d) {
        if (!R.isError(d) || u)
          return void n(d, p);
        a.push(d);
      }
      if (!c || !Sn(p)) {
        n(a[0] || null, p);
        return;
      }
      o = o || p;
      let h = this._nodes.map((f) => (y, m) => {
        let b = f.indexOf(".") === -1 ? (r.path ? `${r.path}.` : "") + f : `${r.path || ""}["${f}"]`, v = this.fields[f];
        if (v && "validate" in v) {
          v.validate(p[f], ae({}, r, {
            // @ts-ignore
            path: b,
            from: i,
            // inner fields are always strict:
            // 1. this isn't strict so the casting will also have cast inner values
            // 2. this is strict in which case the nested values weren't cast either
            strict: !0,
            parent: p,
            originalValue: o[f]
          }), m);
          return;
        }
        m(null);
      });
      Tt({
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
    return r.fields = ae({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), n = r.fields;
    for (let [a, s] of Object.entries(this.fields)) {
      const i = n[a];
      i === void 0 ? n[a] = s : i instanceof F && s instanceof F && (n[a] = s.concat(i));
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
    return n.fields = a, n._sortErrors = Gs(Object.keys(a)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = a1(a, n._excludedEdges), n;
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
    let a = ot.getter(t, !0);
    return this.transform((s) => {
      if (s == null)
        return s;
      let i = s;
      return ze(s, t) && (i = ae({}, s), n || delete i[t], i[r] = a(s)), i;
    });
  }
  noUnknown(t = !0, r = Ct.noUnknown) {
    typeof t == "string" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(a) {
        if (a == null)
          return !0;
        const s = s1(this.schema, a);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = Ct.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => r && Z$(r, (n, a) => t(a)));
  }
  camelCase() {
    return this.transformKeys(V$);
  }
  snakeCase() {
    return this.transformKeys(bn);
  }
  constantCase() {
    return this.transformKeys((t) => bn(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = bs(this.fields, (r) => r.describe()), t;
  }
}
function Be(e) {
  return new Vs(e);
}
Be.prototype = Vs.prototype;
const o1 = {
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
  metadata: null
}, l1 = Be({
  task: Be({
    title: Se().required("Title is required"),
    recordType: Se().required("Record type is required"),
    serializer: Se().required("Serializer is required"),
    mode: Se().required("Mode is required")
  }),
  metadata: Be().nullable()
}), u1 = ({ onSubmit: e }) => {
  const t = async (r) => {
    try {
      const n = await Lv(r.task);
      if (!n)
        throw new Error("Failed to create import task");
      if (r.metadata) {
        const a = await Dv(n.id, r.metadata);
        console.log("Metadata added:", a);
        const s = await Mv(n.id);
        console.log("Task validation result:", s);
      }
      e == null || e();
    } catch (n) {
      console.error("Error creating import task:", n);
    }
  };
  return /* @__PURE__ */ l.createElement(
    Ci,
    {
      formik: {
        initialValues: o1,
        validationSchema: l1,
        onSubmit: t
      }
    },
    /* @__PURE__ */ l.createElement(qv, null)
  );
}, c1 = () => {
  const [e, t] = ft(!1), { refreshSearch: r } = sr(), n = Pt(() => {
    t(!1), r();
  }, [r]);
  return /* @__PURE__ */ l.createElement(
    pi,
    {
      closeIcon: !0,
      onClose: () => t(!1),
      onOpen: () => t(!0),
      open: e,
      trigger: /* @__PURE__ */ l.createElement(oe, { color: "green", icon: !0, labelPosition: "left" }, /* @__PURE__ */ l.createElement(ie, { name: "add" }), "New Import")
    },
    /* @__PURE__ */ l.createElement(hi, null, "New Import Task"),
    /* @__PURE__ */ l.createElement(fi, null, /* @__PURE__ */ l.createElement(u1, { onSubmit: n })),
    /* @__PURE__ */ l.createElement(gi, null, /* @__PURE__ */ l.createElement(oe, { onClick: () => t(!1) }, "Close"))
  );
}, d1 = ({
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
    (i) => i[0] === "status"
  ), a = (i) => {
    var u;
    const o = ((u = e.filters) == null ? void 0 : u.filter(
      (c) => c[0] !== "status"
    )) || [];
    i && o.push(["status", i]), t({
      ...e,
      filters: o,
      page: 1
    });
  };
  return /* @__PURE__ */ l.createElement(_e, { activeIndex: 0, compact: !0, size: "tiny" }, r.map(({ key: i, label: o, value: u }) => /* @__PURE__ */ l.createElement(
    _e.Item,
    {
      key: i,
      name: i,
      active: (n == null ? void 0 : n[1]) === u || u === null && !n,
      onClick: () => a(u)
    },
    o
  )));
}, Hs = Da(d1);
function Ot(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var p1 = (e) => typeof e == "object" && e !== null;
function h1(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var f1 = (e) => e === "base";
function g1(e) {
  return e.slice().filter((t) => !f1(t));
}
function _n(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function m1(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = _n(r % 52) + t;
  return _n(r % 52) + t;
}
function y1(e, t) {
  let r = t.length;
  for (; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function b1(e) {
  return m1(y1(5381, e) >>> 0);
}
var Ys = /\s*!(important)?/i;
function v1(e) {
  return typeof e == "string" ? Ys.test(e) : !1;
}
function S1(e) {
  return typeof e == "string" ? e.replace(Ys, "").trim() : e;
}
function Ws(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var ur = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...n) => {
    const a = JSON.stringify(n);
    if (t.has(a))
      return t.get(a);
    const s = e(...n);
    return t.set(a, s), s;
  };
}, _1 = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function Ks(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((n) => {
    if (_1.has(n))
      return;
    const a = t[n], s = r[n];
    Ot(a) && Ot(s) ? t[n] = Ks(a, s) : t[n] = s;
  }), t), {});
}
var E1 = (e) => e != null;
function Xs(e, t, r = {}) {
  const { stop: n, getKey: a } = r;
  function s(i, o = []) {
    if (p1(i)) {
      const u = {};
      for (const [c, d] of Object.entries(i)) {
        const p = (a == null ? void 0 : a(c, d)) ?? c, h = [...o, p];
        if (n != null && n(i, h))
          return t(i, o);
        const f = s(d, h);
        E1(f) && (u[p] = f);
      }
      return u;
    }
    return t(i, o);
  }
  return s(e);
}
function $1(e, t) {
  return e.reduce(
    (r, n, a) => {
      const s = t[a];
      return n != null && (r[s] = n), r;
    },
    {}
  );
}
function Zs(e, t, r = !0) {
  const { utility: n, conditions: a } = t, { hasShorthand: s, resolveShorthand: i } = n;
  return Xs(
    e,
    (o) => Array.isArray(o) ? $1(o, a.breakpoints.keys) : o,
    {
      stop: (o) => Array.isArray(o),
      getKey: r ? (o) => s ? i(o) : o : void 0
    }
  );
}
var x1 = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, C1 = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function w1(e) {
  const { utility: t, hash: r, conditions: n = x1 } = e, a = (i) => [t.prefix, i].filter(Boolean).join("-"), s = (i, o) => {
    let u;
    if (r) {
      const c = [...n.finalize(i), o];
      u = a(t.toHash(c, b1));
    } else
      u = [...n.finalize(i), a(o)].join(":");
    return u;
  };
  return ur(({ base: i, ...o } = {}) => {
    const u = Object.assign(o, i), c = Zs(u, e), d = /* @__PURE__ */ new Set();
    return Xs(c, (p, h) => {
      if (p == null)
        return;
      const f = v1(p), [y, ...m] = n.shift(h), b = g1(m), v = t.transform(y, S1(C1(p)));
      let C = s(b, v.className);
      f && (C = `${C}!`), d.add(C);
    }), Array.from(d).join(" ");
  });
}
function T1(...e) {
  return e.flat().filter((t) => Ot(t) && Object.keys(h1(t)).length > 0);
}
function A1(e) {
  function t(a) {
    const s = T1(...a);
    return s.length === 1 ? s : s.map((i) => Zs(i, e));
  }
  function r(...a) {
    return Ks(...t(a));
  }
  function n(...a) {
    return Object.assign({}, ...t(a));
  }
  return { mergeCss: ur(r), assignCss: n };
}
var F1 = /([A-Z])/g, I1 = /^ms-/, O1 = ur((e) => e.startsWith("--") ? e : e.replace(F1, "-$1").replace(I1, "-ms-").toLowerCase()), R1 = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${R1.split(",").join("|")}`;
const P1 = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", Js = new Set(P1.split(",")), k1 = /^@|&|&$/;
function En(e) {
  return Js.has(e) || k1.test(e);
}
const D1 = /^_/, L1 = /&|@/;
function B1(e) {
  return e.map((t) => Js.has(t) ? t.replace(D1, "") : L1.test(t) ? `[${Ws(t.trim())}]` : t);
}
function N1(e) {
  return e.sort((t, r) => {
    const n = En(t), a = En(r);
    return n && !a ? 1 : !n && a ? -1 : 0;
  });
}
const U1 = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle", ei = /* @__PURE__ */ new Map(), ti = /* @__PURE__ */ new Map();
U1.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [n, ...a] = r.split("/");
  ei.set(t, n), a.length && a.forEach((s) => {
    ti.set(s === "1" ? n : s, t);
  });
});
const $n = (e) => ti.get(e) || e, ri = {
  conditions: {
    shift: N1,
    finalize: B1,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = $n(e);
      return { className: `${ei.get(r) || O1(r)}_${Ws(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: $n
  }
}, M1 = w1(ri), Z = (...e) => M1(ni(...e));
Z.raw = (...e) => ni(...e);
const { mergeCss: ni, assignCss: ax } = A1(ri), be = {
  searchBarRow: Z({
    display: "flex !important",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1rem",
    paddingBlock: "0.5rem",
    minBlockSize: "3rem"
  }),
  facets: Z({
    flex: "0 0 auto"
  }),
  search: Z({
    flex: "1 1 auto",
    minInlineSize: "15rem"
  }),
  import: Z({
    flex: "0 0 auto"
  }),
  visuallyHidden: Z({
    srOnly: !0
  })
}, j1 = () => /* @__PURE__ */ l.createElement(
  "section",
  {
    className: be.searchBarRow,
    "aria-label": "Records search and filters"
  },
  /* @__PURE__ */ l.createElement("div", { className: be.facets }, /* @__PURE__ */ l.createElement(Hs, null)),
  /* @__PURE__ */ l.createElement("div", { className: be.search }, /* @__PURE__ */ l.createElement(
    Sv,
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
  ), /* @__PURE__ */ l.createElement("span", { className: be.visuallyHidden }, "Type keywords to search through records. Press Enter to submit.")),
  /* @__PURE__ */ l.createElement("div", { className: be.import }, /* @__PURE__ */ l.createElement(c1, null))
), Q1 = () => {
  const { config: e } = sr();
  return /* @__PURE__ */ l.createElement(me, null, /* @__PURE__ */ l.createElement(me.Row, { verticalAlign: "middle" }, /* @__PURE__ */ l.createElement(me.Column, { width: 4, textAlign: "left" }, /* @__PURE__ */ l.createElement(Xb, { label: (t) => /* @__PURE__ */ l.createElement("div", null, t, " total task(s)") })), /* @__PURE__ */ l.createElement(me.Column, { width: 8, textAlign: "center" }, /* @__PURE__ */ l.createElement(iv, { options: { size: "mini" } })), /* @__PURE__ */ l.createElement(me.Column, { width: 4, textAlign: "right" }, /* @__PURE__ */ l.createElement(
    yv,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ l.createElement("p", null, t, " results per page")
    }
  ))));
}, z1 = ({
  config: e = {},
  overriddenComponents: t = {}
}) => {
  var s, i, o, u, c;
  const r = {
    ...z,
    ...e,
    initialQueryState: {
      ...z.initialQueryState,
      ...e.initialQueryState
    },
    layoutOptions: {
      ...z.layoutOptions,
      ...e.layoutOptions
    },
    paginationOptions: {
      ...z.paginationOptions,
      ...e.paginationOptions,
      resultsPerPage: ((s = e.paginationOptions) == null ? void 0 : s.resultsPerPage) || z.paginationOptions.resultsPerPage
    },
    searchApi: {
      ...z.searchApi,
      ...e.searchApi,
      axios: {
        ...z.searchApi.axios,
        ...(i = e.searchApi) == null ? void 0 : i.axios,
        headers: {
          ...z.searchApi.axios.headers,
          ...(u = (o = e.searchApi) == null ? void 0 : o.axios) == null ? void 0 : u.headers
        }
      },
      invenio: {
        ...z.searchApi.invenio,
        ...(c = e.searchApi) == null ? void 0 : c.invenio
      }
    }
  }, n = new oa(r.searchApi), a = {
    [`${r.appId}.ResultsList.item`]: jv,
    [`${r.appId}.ResultsList.container`]: Qv,
    [`${r.appId}.SearchFacets`]: Hs,
    ...t
  };
  return /* @__PURE__ */ l.createElement(mi.Provider, { value: a }, /* @__PURE__ */ l.createElement(
    Lb,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ l.createElement(Iv, { config: r }, /* @__PURE__ */ l.createElement(j1, null), /* @__PURE__ */ l.createElement(hv, null, /* @__PURE__ */ l.createElement(ev, null), /* @__PURE__ */ l.createElement(qa, null)), /* @__PURE__ */ l.createElement(Q1, null))
  ));
}, q1 = {
  bulkImporter: Z({
    padding: "2rem"
  })
}, sx = () => /* @__PURE__ */ l.createElement("div", { className: q1.bulkImporter }, /* @__PURE__ */ l.createElement(An, { as: "h1" }, "Bulk Importer"), /* @__PURE__ */ l.createElement("p", null, "A more modern approach for an invenio compatible bulk importer."), /* @__PURE__ */ l.createElement(z1, null)), ix = {
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
  sx as BulkImporter,
  c1 as ImportModal,
  ix as ImporterTaskStates,
  z1 as Search,
  Xr as capitalizeFirstLetter,
  rx as createSearchApi,
  nx as createSearchApiConfig,
  Ov as formatDate,
  kv as getCsrfToken
};
