import l, { Component as A, useContext as $, useEffect as Xe, useCallback as Ze, useState as je, Fragment as ui } from "react";
import g, { OverridableContext as ci } from "react-overridable";
import Ne from "axios";
import ce from "qs";
import { connect as x, Provider as di } from "react-redux";
import { Label as N, Icon as j, Input as wn, Button as ue, List as Tn, Checkbox as An, Card as O, Segment as Fn, Header as _e, Menu as xe, Pagination as pi, Item as ae, Loader as hi, Dropdown as de, Image as fi, TableRow as In, TableCell as K, Table as gi, TableHeader as mi, TableHeaderCell as X, TableBody as yi, Form as fr, Modal as bi, ModalHeader as vi, ModalContent as Si, ModalActions as _i, Grid as H } from "semantic-ui-react";
import { combineReducers as Ei, createStore as $i, applyMiddleware as xi } from "redux";
import Ci from "redux-thunk";
import wi from "lodash";
import { TextField as Ti, SelectField as gt, TextAreaField as Ai, BaseForm as Fi } from "react-invenio-forms";
import { useFormikContext as Ii } from "formik";
var Pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function T(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oi = Object.prototype;
function Ri(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Oi;
  return e === r;
}
var Je = Ri;
function Pi(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var On = Pi, ki = On, Di = ki(Object.keys, Object), Li = Di, Bi = Je, Ni = Li, Ui = Object.prototype, Mi = Ui.hasOwnProperty;
function ji(e) {
  if (!Bi(e))
    return Ni(e);
  var t = [];
  for (var r in Object(e))
    Mi.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Rn = ji, Qi = typeof Pe == "object" && Pe && Pe.Object === Object && Pe, Pn = Qi, zi = Pn, qi = typeof self == "object" && self && self.Object === Object && self, Gi = zi || qi || Function("return this")(), Q = Gi, Vi = Q, Hi = Vi.Symbol, pe = Hi, gr = pe, kn = Object.prototype, Yi = kn.hasOwnProperty, Wi = kn.toString, ve = gr ? gr.toStringTag : void 0;
function Ki(e) {
  var t = Yi.call(e, ve), r = e[ve];
  try {
    e[ve] = void 0;
    var n = !0;
  } catch {
  }
  var a = Wi.call(e);
  return n && (t ? e[ve] = r : delete e[ve]), a;
}
var Xi = Ki, Zi = Object.prototype, Ji = Zi.toString;
function eo(e) {
  return Ji.call(e);
}
var to = eo, mr = pe, ro = Xi, no = to, ao = "[object Null]", so = "[object Undefined]", yr = mr ? mr.toStringTag : void 0;
function io(e) {
  return e == null ? e === void 0 ? so : ao : yr && yr in Object(e) ? ro(e) : no(e);
}
var J = io;
function oo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Y = oo;
const lo = /* @__PURE__ */ T(Y);
var uo = J, co = Y, po = "[object AsyncFunction]", ho = "[object Function]", fo = "[object GeneratorFunction]", go = "[object Proxy]";
function mo(e) {
  if (!co(e))
    return !1;
  var t = uo(e);
  return t == ho || t == fo || t == po || t == go;
}
var Dn = mo, yo = Q, bo = yo["__core-js_shared__"], vo = bo, mt = vo, br = function() {
  var e = /[^.]+$/.exec(mt && mt.keys && mt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function So(e) {
  return !!br && br in e;
}
var _o = So, Eo = Function.prototype, $o = Eo.toString;
function xo(e) {
  if (e != null) {
    try {
      return $o.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ln = xo, Co = Dn, wo = _o, To = Y, Ao = Ln, Fo = /[\\^$.*+?()[\]{}|]/g, Io = /^\[object .+?Constructor\]$/, Oo = Function.prototype, Ro = Object.prototype, Po = Oo.toString, ko = Ro.hasOwnProperty, Do = RegExp(
  "^" + Po.call(ko).replace(Fo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Lo(e) {
  if (!To(e) || wo(e))
    return !1;
  var t = Co(e) ? Do : Io;
  return t.test(Ao(e));
}
var Bo = Lo;
function No(e, t) {
  return e == null ? void 0 : e[t];
}
var Uo = No, Mo = Bo, jo = Uo;
function Qo(e, t) {
  var r = jo(e, t);
  return Mo(r) ? r : void 0;
}
var re = Qo, zo = re, qo = Q, Go = zo(qo, "DataView"), Vo = Go, Ho = re, Yo = Q, Wo = Ho(Yo, "Map"), Nt = Wo, Ko = re, Xo = Q, Zo = Ko(Xo, "Promise"), Jo = Zo, el = re, tl = Q, rl = el(tl, "Set"), nl = rl, al = re, sl = Q, il = al(sl, "WeakMap"), ol = il, _t = Vo, Et = Nt, $t = Jo, xt = nl, Ct = ol, Bn = J, he = Ln, vr = "[object Map]", ll = "[object Object]", Sr = "[object Promise]", _r = "[object Set]", Er = "[object WeakMap]", $r = "[object DataView]", ul = he(_t), cl = he(Et), dl = he($t), pl = he(xt), hl = he(Ct), ee = Bn;
(_t && ee(new _t(new ArrayBuffer(1))) != $r || Et && ee(new Et()) != vr || $t && ee($t.resolve()) != Sr || xt && ee(new xt()) != _r || Ct && ee(new Ct()) != Er) && (ee = function(e) {
  var t = Bn(e), r = t == ll ? e.constructor : void 0, n = r ? he(r) : "";
  if (n)
    switch (n) {
      case ul:
        return $r;
      case cl:
        return vr;
      case dl:
        return Sr;
      case pl:
        return _r;
      case hl:
        return Er;
    }
  return t;
});
var Te = ee;
function fl(e) {
  return e != null && typeof e == "object";
}
var z = fl, gl = J, ml = z, yl = "[object Arguments]";
function bl(e) {
  return ml(e) && gl(e) == yl;
}
var vl = bl, xr = vl, Sl = z, Nn = Object.prototype, _l = Nn.hasOwnProperty, El = Nn.propertyIsEnumerable, $l = xr(function() {
  return arguments;
}()) ? xr : function(e) {
  return Sl(e) && _l.call(e, "callee") && !El.call(e, "callee");
}, et = $l, xl = Array.isArray, P = xl;
const Un = /* @__PURE__ */ T(P);
var Cl = 9007199254740991;
function wl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Cl;
}
var Ut = wl, Tl = Dn, Al = Ut;
function Fl(e) {
  return e != null && Al(e.length) && !Tl(e);
}
var tt = Fl, Qe = { exports: {} };
function Il() {
  return !1;
}
var Ol = Il;
Qe.exports;
(function(e, t) {
  var r = Q, n = Ol, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, o = i ? r.Buffer : void 0, u = o ? o.isBuffer : void 0, c = u || n;
  e.exports = c;
})(Qe, Qe.exports);
var rt = Qe.exports, Rl = J, Pl = Ut, kl = z, Dl = "[object Arguments]", Ll = "[object Array]", Bl = "[object Boolean]", Nl = "[object Date]", Ul = "[object Error]", Ml = "[object Function]", jl = "[object Map]", Ql = "[object Number]", zl = "[object Object]", ql = "[object RegExp]", Gl = "[object Set]", Vl = "[object String]", Hl = "[object WeakMap]", Yl = "[object ArrayBuffer]", Wl = "[object DataView]", Kl = "[object Float32Array]", Xl = "[object Float64Array]", Zl = "[object Int8Array]", Jl = "[object Int16Array]", eu = "[object Int32Array]", tu = "[object Uint8Array]", ru = "[object Uint8ClampedArray]", nu = "[object Uint16Array]", au = "[object Uint32Array]", E = {};
E[Kl] = E[Xl] = E[Zl] = E[Jl] = E[eu] = E[tu] = E[ru] = E[nu] = E[au] = !0;
E[Dl] = E[Ll] = E[Yl] = E[Bl] = E[Wl] = E[Nl] = E[Ul] = E[Ml] = E[jl] = E[Ql] = E[zl] = E[ql] = E[Gl] = E[Vl] = E[Hl] = !1;
function su(e) {
  return kl(e) && Pl(e.length) && !!E[Rl(e)];
}
var iu = su;
function ou(e) {
  return function(t) {
    return e(t);
  };
}
var Mt = ou, ze = { exports: {} };
ze.exports;
(function(e, t) {
  var r = Pn, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, i = s && r.process, o = function() {
    try {
      var u = a && a.require && a.require("util").types;
      return u || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(ze, ze.exports);
var jt = ze.exports, lu = iu, uu = Mt, Cr = jt, wr = Cr && Cr.isTypedArray, cu = wr ? uu(wr) : lu, Qt = cu, du = Rn, pu = Te, hu = et, fu = P, gu = tt, mu = rt, yu = Je, bu = Qt, vu = "[object Map]", Su = "[object Set]", _u = Object.prototype, Eu = _u.hasOwnProperty;
function $u(e) {
  if (e == null)
    return !0;
  if (gu(e) && (fu(e) || typeof e == "string" || typeof e.splice == "function" || mu(e) || bu(e) || hu(e)))
    return !e.length;
  var t = pu(e);
  if (t == vu || t == Su)
    return !e.size;
  if (yu(e))
    return !du(e).length;
  for (var r in e)
    if (Eu.call(e, r))
      return !1;
  return !0;
}
var xu = $u;
const q = /* @__PURE__ */ T(xu);
var Cu = J, wu = z, Tu = "[object Symbol]";
function Au(e) {
  return typeof e == "symbol" || wu(e) && Cu(e) == Tu;
}
var zt = Au, Fu = P, Iu = zt, Ou = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ru = /^\w*$/;
function Pu(e, t) {
  if (Fu(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Iu(e) ? !0 : Ru.test(e) || !Ou.test(e) || t != null && e in Object(t);
}
var qt = Pu, ku = re, Du = ku(Object, "create"), nt = Du, Tr = nt;
function Lu() {
  this.__data__ = Tr ? Tr(null) : {}, this.size = 0;
}
var Bu = Lu;
function Nu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Uu = Nu, Mu = nt, ju = "__lodash_hash_undefined__", Qu = Object.prototype, zu = Qu.hasOwnProperty;
function qu(e) {
  var t = this.__data__;
  if (Mu) {
    var r = t[e];
    return r === ju ? void 0 : r;
  }
  return zu.call(t, e) ? t[e] : void 0;
}
var Gu = qu, Vu = nt, Hu = Object.prototype, Yu = Hu.hasOwnProperty;
function Wu(e) {
  var t = this.__data__;
  return Vu ? t[e] !== void 0 : Yu.call(t, e);
}
var Ku = Wu, Xu = nt, Zu = "__lodash_hash_undefined__";
function Ju(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Xu && t === void 0 ? Zu : t, this;
}
var ec = Ju, tc = Bu, rc = Uu, nc = Gu, ac = Ku, sc = ec;
function fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
fe.prototype.clear = tc;
fe.prototype.delete = rc;
fe.prototype.get = nc;
fe.prototype.has = ac;
fe.prototype.set = sc;
var ic = fe;
function oc() {
  this.__data__ = [], this.size = 0;
}
var lc = oc;
function uc(e, t) {
  return e === t || e !== e && t !== t;
}
var at = uc, cc = at;
function dc(e, t) {
  for (var r = e.length; r--; )
    if (cc(e[r][0], t))
      return r;
  return -1;
}
var st = dc, pc = st, hc = Array.prototype, fc = hc.splice;
function gc(e) {
  var t = this.__data__, r = pc(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : fc.call(t, r, 1), --this.size, !0;
}
var mc = gc, yc = st;
function bc(e) {
  var t = this.__data__, r = yc(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var vc = bc, Sc = st;
function _c(e) {
  return Sc(this.__data__, e) > -1;
}
var Ec = _c, $c = st;
function xc(e, t) {
  var r = this.__data__, n = $c(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Cc = xc, wc = lc, Tc = mc, Ac = vc, Fc = Ec, Ic = Cc;
function ge(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ge.prototype.clear = wc;
ge.prototype.delete = Tc;
ge.prototype.get = Ac;
ge.prototype.has = Fc;
ge.prototype.set = Ic;
var it = ge, Ar = ic, Oc = it, Rc = Nt;
function Pc() {
  this.size = 0, this.__data__ = {
    hash: new Ar(),
    map: new (Rc || Oc)(),
    string: new Ar()
  };
}
var kc = Pc;
function Dc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Lc = Dc, Bc = Lc;
function Nc(e, t) {
  var r = e.__data__;
  return Bc(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ot = Nc, Uc = ot;
function Mc(e) {
  var t = Uc(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var jc = Mc, Qc = ot;
function zc(e) {
  return Qc(this, e).get(e);
}
var qc = zc, Gc = ot;
function Vc(e) {
  return Gc(this, e).has(e);
}
var Hc = Vc, Yc = ot;
function Wc(e, t) {
  var r = Yc(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Kc = Wc, Xc = kc, Zc = jc, Jc = qc, ed = Hc, td = Kc;
function me(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
me.prototype.clear = Xc;
me.prototype.delete = Zc;
me.prototype.get = Jc;
me.prototype.has = ed;
me.prototype.set = td;
var Gt = me, Mn = Gt, rd = "Expected a function";
function Vt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(rd);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(a))
      return s.get(a);
    var i = e.apply(this, n);
    return r.cache = s.set(a, i) || s, i;
  };
  return r.cache = new (Vt.Cache || Mn)(), r;
}
Vt.Cache = Mn;
var nd = Vt, ad = nd, sd = 500;
function id(e) {
  var t = ad(e, function(n) {
    return r.size === sd && r.clear(), n;
  }), r = t.cache;
  return t;
}
var od = id, ld = od, ud = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, cd = /\\(\\)?/g, dd = ld(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ud, function(r, n, a, s) {
    t.push(a ? s.replace(cd, "$1") : n || r);
  }), t;
}), pd = dd;
function hd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var fd = hd, Fr = pe, gd = fd, md = P, yd = zt, bd = 1 / 0, Ir = Fr ? Fr.prototype : void 0, Or = Ir ? Ir.toString : void 0;
function jn(e) {
  if (typeof e == "string")
    return e;
  if (md(e))
    return gd(e, jn) + "";
  if (yd(e))
    return Or ? Or.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -bd ? "-0" : t;
}
var vd = jn, Sd = vd;
function _d(e) {
  return e == null ? "" : Sd(e);
}
var Ae = _d, Ed = P, $d = qt, xd = pd, Cd = Ae;
function wd(e, t) {
  return Ed(e) ? e : $d(e, t) ? [e] : xd(Cd(e));
}
var lt = wd, Td = zt, Ad = 1 / 0;
function Fd(e) {
  if (typeof e == "string" || Td(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ad ? "-0" : t;
}
var Fe = Fd, Id = lt, Od = Fe;
function Rd(e, t) {
  t = Id(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Od(t[r++])];
  return r && r == n ? e : void 0;
}
var Ht = Rd, Pd = Ht;
function kd(e, t, r) {
  var n = e == null ? void 0 : Pd(e, t);
  return n === void 0 ? r : n;
}
var Qn = kd;
const Ee = /* @__PURE__ */ T(Qn);
function Dd(e, t) {
  return e != null && t in Object(e);
}
var Ld = Dd, Bd = 9007199254740991, Nd = /^(?:0|[1-9]\d*)$/;
function Ud(e, t) {
  var r = typeof e;
  return t = t ?? Bd, !!t && (r == "number" || r != "symbol" && Nd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ut = Ud, Md = lt, jd = et, Qd = P, zd = ut, qd = Ut, Gd = Fe;
function Vd(e, t, r) {
  t = Md(t, e);
  for (var n = -1, a = t.length, s = !1; ++n < a; ) {
    var i = Gd(t[n]);
    if (!(s = e != null && r(e, i)))
      break;
    e = e[i];
  }
  return s || ++n != a ? s : (a = e == null ? 0 : e.length, !!a && qd(a) && zd(i, a) && (Qd(e) || jd(e)));
}
var zn = Vd, Hd = Ld, Yd = zn;
function Wd(e, t) {
  return e != null && Yd(e, t, Hd);
}
var Yt = Wd;
const Kd = /* @__PURE__ */ T(Yt);
var Xd = re, Zd = function() {
  try {
    var e = Xd(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), qn = Zd, Rr = qn;
function Jd(e, t, r) {
  t == "__proto__" && Rr ? Rr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var ct = Jd, ep = ct, tp = at, rp = Object.prototype, np = rp.hasOwnProperty;
function ap(e, t, r) {
  var n = e[t];
  (!(np.call(e, t) && tp(n, r)) || r === void 0 && !(t in e)) && ep(e, t, r);
}
var Wt = ap, sp = Wt, ip = ct;
function op(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var o = t[s], u = n ? n(r[o], e[o], o, r, e) : void 0;
    u === void 0 && (u = e[o]), a ? ip(r, o, u) : sp(r, o, u);
  }
  return r;
}
var Ie = op;
function lp(e) {
  return e;
}
var Kt = lp;
function up(e, t, r) {
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
var cp = up, dp = cp, Pr = Math.max;
function pp(e, t, r) {
  return t = Pr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, s = Pr(n.length - t, 0), i = Array(s); ++a < s; )
      i[a] = n[t + a];
    a = -1;
    for (var o = Array(t + 1); ++a < t; )
      o[a] = n[a];
    return o[t] = r(i), dp(e, this, o);
  };
}
var Gn = pp;
function hp(e) {
  return function() {
    return e;
  };
}
var fp = hp, gp = fp, kr = qn, mp = Kt, yp = kr ? function(e, t) {
  return kr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: gp(t),
    writable: !0
  });
} : mp, bp = yp, vp = 800, Sp = 16, _p = Date.now;
function Ep(e) {
  var t = 0, r = 0;
  return function() {
    var n = _p(), a = Sp - (n - r);
    if (r = n, a > 0) {
      if (++t >= vp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var $p = Ep, xp = bp, Cp = $p, wp = Cp(xp), Vn = wp, Tp = Kt, Ap = Gn, Fp = Vn;
function Ip(e, t) {
  return Fp(Ap(e, t, Tp), e + "");
}
var Op = Ip, Rp = at, Pp = tt, kp = ut, Dp = Y;
function Lp(e, t, r) {
  if (!Dp(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Pp(r) && kp(t, r.length) : n == "string" && t in r) ? Rp(r[t], e) : !1;
}
var Bp = Lp, Np = Op, Up = Bp;
function Mp(e) {
  return Np(function(t, r) {
    var n = -1, a = r.length, s = a > 1 ? r[a - 1] : void 0, i = a > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, i && Up(r[0], r[1], i) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++n < a; ) {
      var o = r[n];
      o && e(t, o, n, s);
    }
    return t;
  });
}
var jp = Mp;
function Qp(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var zp = Qp, qp = zp, Gp = et, Vp = P, Hp = rt, Yp = ut, Wp = Qt, Kp = Object.prototype, Xp = Kp.hasOwnProperty;
function Zp(e, t) {
  var r = Vp(e), n = !r && Gp(e), a = !r && !n && Hp(e), s = !r && !n && !a && Wp(e), i = r || n || a || s, o = i ? qp(e.length, String) : [], u = o.length;
  for (var c in e)
    (t || Xp.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Yp(c, u))) && o.push(c);
  return o;
}
var Hn = Zp;
function Jp(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var eh = Jp, th = Y, rh = Je, nh = eh, ah = Object.prototype, sh = ah.hasOwnProperty;
function ih(e) {
  if (!th(e))
    return nh(e);
  var t = rh(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !sh.call(e, n)) || r.push(n);
  return r;
}
var oh = ih, lh = Hn, uh = oh, ch = tt;
function dh(e) {
  return ch(e) ? lh(e, !0) : uh(e);
}
var dt = dh, ph = Ie, hh = jp, fh = dt, gh = hh(function(e, t) {
  ph(t, fh(t), e);
}), mh = gh, yh = mh;
const qe = /* @__PURE__ */ T(yh);
function bh(e) {
  return e && e.length ? e[0] : void 0;
}
var vh = bh;
const Sh = /* @__PURE__ */ T(vh);
var _h = Wt, Eh = lt, $h = ut, Dr = Y, xh = Fe;
function Ch(e, t, r, n) {
  if (!Dr(e))
    return e;
  t = Eh(t, e);
  for (var a = -1, s = t.length, i = s - 1, o = e; o != null && ++a < s; ) {
    var u = xh(t[a]), c = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != i) {
      var d = o[u];
      c = n ? n(d, u, o) : void 0, c === void 0 && (c = Dr(d) ? d : $h(t[a + 1]) ? [] : {});
    }
    _h(o, u, c), o = o[u];
  }
  return e;
}
var wh = Ch, Th = Ht, Ah = wh, Fh = lt;
function Ih(e, t, r) {
  for (var n = -1, a = t.length, s = {}; ++n < a; ) {
    var i = t[n], o = Th(e, i);
    r(o, i) && Ah(s, Fh(i, e), o);
  }
  return s;
}
var Oh = Ih, Rh = Oh, Ph = Yt;
function kh(e, t) {
  return Rh(e, t, function(r, n) {
    return Ph(e, n);
  });
}
var Dh = kh;
function Lh(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Xt = Lh, Lr = pe, Bh = et, Nh = P, Br = Lr ? Lr.isConcatSpreadable : void 0;
function Uh(e) {
  return Nh(e) || Bh(e) || !!(Br && e && e[Br]);
}
var Mh = Uh, jh = Xt, Qh = Mh;
function Yn(e, t, r, n, a) {
  var s = -1, i = e.length;
  for (r || (r = Qh), a || (a = []); ++s < i; ) {
    var o = e[s];
    t > 0 && r(o) ? t > 1 ? Yn(o, t - 1, r, n, a) : jh(a, o) : n || (a[a.length] = o);
  }
  return a;
}
var zh = Yn, qh = zh;
function Gh(e) {
  var t = e == null ? 0 : e.length;
  return t ? qh(e, 1) : [];
}
var Vh = Gh, Hh = Vh, Yh = Gn, Wh = Vn;
function Kh(e) {
  return Wh(Yh(e, void 0, Hh), e + "");
}
var Xh = Kh, Zh = Dh, Jh = Xh, ef = Jh(function(e, t) {
  return e == null ? {} : Zh(e, t);
}), tf = ef;
const rf = /* @__PURE__ */ T(tf);
var nf = it;
function af() {
  this.__data__ = new nf(), this.size = 0;
}
var sf = af;
function of(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var lf = of;
function uf(e) {
  return this.__data__.get(e);
}
var cf = uf;
function df(e) {
  return this.__data__.has(e);
}
var pf = df, hf = it, ff = Nt, gf = Gt, mf = 200;
function yf(e, t) {
  var r = this.__data__;
  if (r instanceof hf) {
    var n = r.__data__;
    if (!ff || n.length < mf - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new gf(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var bf = yf, vf = it, Sf = sf, _f = lf, Ef = cf, $f = pf, xf = bf;
function ye(e) {
  var t = this.__data__ = new vf(e);
  this.size = t.size;
}
ye.prototype.clear = Sf;
ye.prototype.delete = _f;
ye.prototype.get = Ef;
ye.prototype.has = $f;
ye.prototype.set = xf;
var Zt = ye;
function Cf(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var wf = Cf, Tf = Hn, Af = Rn, Ff = tt;
function If(e) {
  return Ff(e) ? Tf(e) : Af(e);
}
var Oe = If, Of = Ie, Rf = Oe;
function Pf(e, t) {
  return e && Of(t, Rf(t), e);
}
var kf = Pf, Df = Ie, Lf = dt;
function Bf(e, t) {
  return e && Df(t, Lf(t), e);
}
var Nf = Bf, Ge = { exports: {} };
Ge.exports;
(function(e, t) {
  var r = Q, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, i = s ? r.Buffer : void 0, o = i ? i.allocUnsafe : void 0;
  function u(c, d) {
    if (d)
      return c.slice();
    var p = c.length, h = o ? o(p) : new c.constructor(p);
    return c.copy(h), h;
  }
  e.exports = u;
})(Ge, Ge.exports);
var Uf = Ge.exports;
function Mf(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var jf = Mf;
function Qf(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[a++] = i);
  }
  return s;
}
var zf = Qf;
function qf() {
  return [];
}
var Wn = qf, Gf = zf, Vf = Wn, Hf = Object.prototype, Yf = Hf.propertyIsEnumerable, Nr = Object.getOwnPropertySymbols, Wf = Nr ? function(e) {
  return e == null ? [] : (e = Object(e), Gf(Nr(e), function(t) {
    return Yf.call(e, t);
  }));
} : Vf, Jt = Wf, Kf = Ie, Xf = Jt;
function Zf(e, t) {
  return Kf(e, Xf(e), t);
}
var Jf = Zf, eg = On, tg = eg(Object.getPrototypeOf, Object), Kn = tg, rg = Xt, ng = Kn, ag = Jt, sg = Wn, ig = Object.getOwnPropertySymbols, og = ig ? function(e) {
  for (var t = []; e; )
    rg(t, ag(e)), e = ng(e);
  return t;
} : sg, Xn = og, lg = Ie, ug = Xn;
function cg(e, t) {
  return lg(e, ug(e), t);
}
var dg = cg, pg = Xt, hg = P;
function fg(e, t, r) {
  var n = t(e);
  return hg(e) ? n : pg(n, r(e));
}
var Zn = fg, gg = Zn, mg = Jt, yg = Oe;
function bg(e) {
  return gg(e, yg, mg);
}
var Jn = bg, vg = Zn, Sg = Xn, _g = dt;
function Eg(e) {
  return vg(e, _g, Sg);
}
var $g = Eg, xg = Object.prototype, Cg = xg.hasOwnProperty;
function wg(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Cg.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Tg = wg, Ag = Q, Fg = Ag.Uint8Array, ea = Fg, Ur = ea;
function Ig(e) {
  var t = new e.constructor(e.byteLength);
  return new Ur(t).set(new Ur(e)), t;
}
var er = Ig, Og = er;
function Rg(e, t) {
  var r = t ? Og(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Pg = Rg, kg = /\w*$/;
function Dg(e) {
  var t = new e.constructor(e.source, kg.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Lg = Dg, Mr = pe, jr = Mr ? Mr.prototype : void 0, Qr = jr ? jr.valueOf : void 0;
function Bg(e) {
  return Qr ? Object(Qr.call(e)) : {};
}
var Ng = Bg, Ug = er;
function Mg(e, t) {
  var r = t ? Ug(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var jg = Mg, Qg = er, zg = Pg, qg = Lg, Gg = Ng, Vg = jg, Hg = "[object Boolean]", Yg = "[object Date]", Wg = "[object Map]", Kg = "[object Number]", Xg = "[object RegExp]", Zg = "[object Set]", Jg = "[object String]", em = "[object Symbol]", tm = "[object ArrayBuffer]", rm = "[object DataView]", nm = "[object Float32Array]", am = "[object Float64Array]", sm = "[object Int8Array]", im = "[object Int16Array]", om = "[object Int32Array]", lm = "[object Uint8Array]", um = "[object Uint8ClampedArray]", cm = "[object Uint16Array]", dm = "[object Uint32Array]";
function pm(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case tm:
      return Qg(e);
    case Hg:
    case Yg:
      return new n(+e);
    case rm:
      return zg(e, r);
    case nm:
    case am:
    case sm:
    case im:
    case om:
    case lm:
    case um:
    case cm:
    case dm:
      return Vg(e, r);
    case Wg:
      return new n();
    case Kg:
    case Jg:
      return new n(e);
    case Xg:
      return qg(e);
    case Zg:
      return new n();
    case em:
      return Gg(e);
  }
}
var hm = pm, fm = Y, zr = Object.create, gm = function() {
  function e() {
  }
  return function(t) {
    if (!fm(t))
      return {};
    if (zr)
      return zr(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), mm = gm, ym = mm, bm = Kn, vm = Je;
function Sm(e) {
  return typeof e.constructor == "function" && !vm(e) ? ym(bm(e)) : {};
}
var _m = Sm, Em = Te, $m = z, xm = "[object Map]";
function Cm(e) {
  return $m(e) && Em(e) == xm;
}
var wm = Cm, Tm = wm, Am = Mt, qr = jt, Gr = qr && qr.isMap, Fm = Gr ? Am(Gr) : Tm, Im = Fm, Om = Te, Rm = z, Pm = "[object Set]";
function km(e) {
  return Rm(e) && Om(e) == Pm;
}
var Dm = km, Lm = Dm, Bm = Mt, Vr = jt, Hr = Vr && Vr.isSet, Nm = Hr ? Bm(Hr) : Lm, Um = Nm, Mm = Zt, jm = wf, Qm = Wt, zm = kf, qm = Nf, Gm = Uf, Vm = jf, Hm = Jf, Ym = dg, Wm = Jn, Km = $g, Xm = Te, Zm = Tg, Jm = hm, ey = _m, ty = P, ry = rt, ny = Im, ay = Y, sy = Um, iy = Oe, oy = dt, ly = 1, uy = 2, cy = 4, ta = "[object Arguments]", dy = "[object Array]", py = "[object Boolean]", hy = "[object Date]", fy = "[object Error]", ra = "[object Function]", gy = "[object GeneratorFunction]", my = "[object Map]", yy = "[object Number]", na = "[object Object]", by = "[object RegExp]", vy = "[object Set]", Sy = "[object String]", _y = "[object Symbol]", Ey = "[object WeakMap]", $y = "[object ArrayBuffer]", xy = "[object DataView]", Cy = "[object Float32Array]", wy = "[object Float64Array]", Ty = "[object Int8Array]", Ay = "[object Int16Array]", Fy = "[object Int32Array]", Iy = "[object Uint8Array]", Oy = "[object Uint8ClampedArray]", Ry = "[object Uint16Array]", Py = "[object Uint32Array]", S = {};
S[ta] = S[dy] = S[$y] = S[xy] = S[py] = S[hy] = S[Cy] = S[wy] = S[Ty] = S[Ay] = S[Fy] = S[my] = S[yy] = S[na] = S[by] = S[vy] = S[Sy] = S[_y] = S[Iy] = S[Oy] = S[Ry] = S[Py] = !0;
S[fy] = S[ra] = S[Ey] = !1;
function Ue(e, t, r, n, a, s) {
  var i, o = t & ly, u = t & uy, c = t & cy;
  if (r && (i = a ? r(e, n, a, s) : r(e)), i !== void 0)
    return i;
  if (!ay(e))
    return e;
  var d = ty(e);
  if (d) {
    if (i = Zm(e), !o)
      return Vm(e, i);
  } else {
    var p = Xm(e), h = p == ra || p == gy;
    if (ry(e))
      return Gm(e, o);
    if (p == na || p == ta || h && !a) {
      if (i = u || h ? {} : ey(e), !o)
        return u ? Ym(e, qm(i, e)) : Hm(e, zm(i, e));
    } else {
      if (!S[p])
        return a ? e : {};
      i = Jm(e, p, o);
    }
  }
  s || (s = new Mm());
  var f = s.get(e);
  if (f)
    return f;
  s.set(e, i), sy(e) ? e.forEach(function(b) {
    i.add(Ue(b, t, r, b, e, s));
  }) : ny(e) && e.forEach(function(b, v) {
    i.set(v, Ue(b, t, r, v, e, s));
  });
  var y = c ? u ? Km : Wm : u ? oy : iy, m = d ? void 0 : y(e);
  return jm(m || e, function(b, v) {
    m && (v = b, b = e[v]), Qm(i, v, Ue(b, t, r, v, e, s));
  }), i;
}
var ky = Ue, Dy = ky, Ly = 1, By = 4;
function Ny(e) {
  return Dy(e, Ly | By);
}
var Uy = Ny;
const le = /* @__PURE__ */ T(Uy);
var My = J, jy = z, Qy = "[object Boolean]";
function zy(e) {
  return e === !0 || e === !1 || jy(e) && My(e) == Qy;
}
var qy = zy;
const Gy = /* @__PURE__ */ T(qy);
var Vy = J, Hy = P, Yy = z, Wy = "[object String]";
function Ky(e) {
  return typeof e == "string" || !Hy(e) && Yy(e) && Vy(e) == Wy;
}
var Xy = Ky;
const Zy = /* @__PURE__ */ T(Xy);
var Jy = J, eb = z, tb = "[object Number]";
function rb(e) {
  return typeof e == "number" || eb(e) && Jy(e) == tb;
}
var nb = rb;
const ab = /* @__PURE__ */ T(nb);
function tr() {
}
tr.prototype = new Error();
class Yr {
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
    r !== null && (c.q = r), n !== null && (c.sort = n, a !== null && (c.sort = a === "desc" ? `-${n}` : n)), s > 0 && (c.page = s), i > 0 && (c.size = i), q(u) || qe(c, this._addFilters(u));
    const d = this._addFilters(o);
    return qe(c, d), ce.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class sb {
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
function ke(e, t) {
  return e.indexOf(t) === 0 && (e.length === t.length || e.indexOf(t + "&") === 0);
}
function yt(e) {
  return ce.stringify({
    q: e
  });
}
function ib(e) {
  return ce.parse(e).q;
}
function aa(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = aa(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function Wr(e, t) {
  const r = yt(e), n = t.map((i) => yt(i));
  let a = !1;
  const s = n.filter((i) => {
    const o = ke(i, r), u = ke(r, i);
    return o && !a && (a = !0), !o && !u;
  });
  if (!a)
    s.push(r);
  else if (e.length === 3) {
    const o = aa(e), u = yt(o), c = s.some((d) => {
      const p = ke(d, u), h = ke(u, d);
      return p || h;
    });
    (q(s) || !c) && s.push(u);
  }
  return s.map((i) => ib(i));
}
const sa = (e, t) => {
  if (q(e))
    return;
  if (!Un(Sh(e)))
    return Wr(e, t);
  let r = t;
  for (const n of e)
    r = Wr(n, r);
  return r;
}, ia = (e, t, r) => {
  let n = rf(t, r);
  return q(n.filters) || (n.filters = sa(n.filters, e.filters)), n;
}, Ve = {
  queryString: "",
  suggestions: [],
  sortBy: null,
  sortOrder: null,
  page: -1,
  size: -1,
  filters: [],
  hiddenParams: [],
  layout: null
}, oa = Object.keys(Ve), ob = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, lb = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class ub {
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
    r !== null && (c.q = r), n !== null && (c.sort = n, a !== null && (c.sort = a === "desc" ? `-${n}` : n)), s > 0 && (c.page = s), i > 0 && (c.size = i), q(u) || qe(c, this._addFilters(u));
    const d = this._addFilters(o);
    return qe(c, d), ce.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class la {
  constructor(t) {
    this.axiosConfig = Ee(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = Ne.CancelToken;
  }
  validateAxiosConfig() {
    if (!Kd(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = Ee(t, "interceptors.request", void 0), this.responseInterceptor = Ee(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: ub,
      InvenioRequestSerializer: Yr
    };
    return typeof t == "string" ? r[t] : t || Yr;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), a = Ee(t, "invenio.responseSerializer", sb);
    this.requestSerializer = new n(), this.responseSerializer = new a();
  }
  initAxios() {
    const t = {
      paramsSerializer: this.requestSerializer.serialize,
      ...this.axiosConfig
    };
    this.http = Ne.create(t), this.addInterceptors();
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
      const n = ia(t, r.extras, oa);
      return q(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw Ne.isCancel(r) ? new tr() : r;
    }
  }
}
class cb {
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
          return ab(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const a = Un(n) ? n : [n], s = ":", i = t.urlFilterSeparator, o = `[^\\${s}\\${i}]*`, u = `${o}\\${s}${o}`, c = `${u}(\\${i}${u})*`, d = new RegExp(`^${c}$`);
          return a.every((p) => String(p).match(d));
        }
        default:
          return !1;
      }
    };
  }
}
const db = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, Kr = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class pb {
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
    const r = ce.parse(t, {
      ignoreQueryPrefix: !0
    }), n = {};
    return Object.entries(r).forEach((a) => {
      const s = a[0], i = a[1];
      n[s] = this._convertValue(s, i);
    }), n;
  }
}
class hb {
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
      return ce.stringify(n, {
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
      const a = le(n);
      return Object.keys(r).forEach((s) => {
        a[s] = r[s];
      }), a;
    }, this.urlParamsMapping = lo(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !Gy(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !Zy(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new cb(), this.urlParser = t.urlParser || new pb(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), a = this._mergeParamsIntoState(n, t), s = this._mapQueryStateToUrlParams(a);
    return Kr(s), a;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      db(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    Kr(r);
  }
}
const fb = "SET_QUERY_COMPONENT_INITIAL_STATE", ua = "SET_QUERY_STRING", rr = "SET_QUERY_SORTING", nr = "SET_QUERY_SORT_BY", ar = "SET_QUERY_SORT_ORDER", Re = "SET_QUERY_STATE", ca = "SET_QUERY_PAGINATION_PAGE", da = "SET_QUERY_PAGINATION_SIZE", pa = "SET_QUERY_FILTERS", ha = "SET_QUERY_SUGGESTIONS", fa = "SET_SUGGESTION_STRING", ga = "CLEAR_QUERY_SUGGESTIONS", ma = "RESULTS_LOADING", ya = "RESULTS_FETCH_SUCCESS", ba = "RESULTS_FETCH_ERROR", wt = "RESULTS_UPDATE_LAYOUT", va = "RESET_QUERY", gb = (e) => (t) => {
  e && t(U({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, Sa = (e) => (t) => {
  t({
    type: Re,
    payload: e
  }), t(U());
}, _a = (e) => (t) => {
  t({
    type: ua,
    payload: e
  }), t(U());
}, mb = (e, t) => (r) => {
  r({
    type: rr,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(U());
}, yb = (e) => (t) => {
  t({
    type: nr,
    payload: e
  }), t(U());
}, bb = (e) => (t) => {
  t({
    type: ar,
    payload: e
  }), t(U());
}, vb = (e) => (t) => {
  t({
    type: ca,
    payload: e
  }), t(U());
}, Sb = (e) => (t) => {
  t({
    type: da,
    payload: e
  }), t(U());
}, sr = (e) => (t) => {
  t({
    type: pa,
    payload: e
  }), t(U());
}, _b = (e) => async (t, r, n) => {
  const a = n.urlHandlerApi;
  if (a) {
    await t({
      type: wt,
      payload: e
    });
    const s = r().query;
    a.set(s);
  } else
    t({
      type: wt,
      payload: e
    });
}, Eb = () => (e, t, r) => {
  e({
    type: va,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(U());
}, $b = (e, t, r, n) => {
  const a = t.urlHandlerApi;
  a && (r ? a.replace(e) : n && a.set(e));
}, xb = (e, t, r, n) => {
  const a = r().query;
  t({
    type: Re,
    payload: {
      ...a,
      ...e.newQueryState
    }
  });
  const s = le(r().query), i = n.urlHandlerApi;
  return i && i.replace(s), delete e.newStateQuery, e;
}, Cb = (e, t, r, n) => {
  function a(o, u, c, d) {
    o.queryString === "" ? (o.sortBy = c.defaultSortingOnEmptyQueryString.sortBy, o.sortOrder = c.defaultSortingOnEmptyQueryString.sortOrder) : (o.sortBy = u.initialSortBy, o.sortOrder = u.initialSortOrder), d({
      type: Re,
      payload: o
    });
  }
  function s(o, u, c, d) {
    u.hasUserChangedSorting || a(o, u, c, d);
  }
  !q(r.defaultSortingOnEmptyQueryString) && s(e, t, r, n);
}, U = function() {
  let {
    shouldUpdateUrlQueryString: e = !0,
    shouldReplaceUrlQueryString: t = !1
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return async (r, n, a) => {
    const s = n().app;
    let i = le(n().query);
    Cb(i, s, a, r), i = le(n().query), $b(i, a, t, e), r({
      type: ma
    });
    try {
      let u = await a.searchApi.search(i);
      "newQueryState" in u && (u = xb(le(u), r, n, a)), r({
        type: ya,
        payload: {
          aggregations: u.aggregations,
          hits: u.hits,
          total: u.total
        }
      });
    } catch (o) {
      if (o instanceof tr) {
        console.debug(o);
        return;
      } else
        console.error(o), r({
          type: ba,
          payload: {
            error: o
          }
        });
    }
  };
}, wb = (e) => (t) => {
  t({
    type: fa,
    payload: e
  }), t(Tb());
}, Tb = () => async (e, t, r) => {
  const n = le(t().query), a = r.suggestionApi;
  try {
    const s = await a.search(n);
    e({
      type: ha,
      payload: {
        suggestions: s.suggestions
      }
    });
  } catch (s) {
    console.error("Could not load suggestions due to: " + s);
  }
}, Ab = () => (e) => {
  e({
    type: ga,
    payload: {
      suggestions: []
    }
  });
}, Fb = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: Re,
      payload: n
    }), e(U({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, _ = /* @__PURE__ */ l.createContext({}), Ib = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
    case rr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case nr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case ar:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    default:
      return e;
  }
}, Ob = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case ua:
      return {
        ...e,
        queryString: t.payload,
        page: 1
      };
    case rr:
      return {
        ...e,
        sortBy: t.payload.sortBy,
        sortOrder: t.payload.sortOrder,
        _sortUserChanged: !0,
        page: 1
      };
    case nr:
      return {
        ...e,
        sortBy: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case ar:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case ca:
      return {
        ...e,
        page: t.payload
      };
    case da:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case pa:
      return {
        ...e,
        page: 1,
        filters: sa(t.payload, e.filters)
      };
    case ha:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case ga:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case fa:
      return {
        ...e,
        suggestionString: t.payload
      };
    case fb:
      return {
        ...e,
        ...t.payload
      };
    case Re:
      return {
        ...e,
        ...Ve,
        ...ia(Ve, t.payload, oa)
      };
    case wt:
      return {
        ...e,
        layout: t.payload
      };
    case va:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, Rb = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case ma:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case ya:
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
    case ba:
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
var Pb = Ei({
  app: Ib,
  query: Ob,
  results: Rb
});
function Xr(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: a,
    sortOrder: s
  } = t;
  return r !== a || n !== s;
}
function kb(e, t, r) {
  const n = Xr(r, t), a = !q(e.defaultSortingOnEmptyQueryString);
  let s = !1;
  return a && (s = Xr(r, e.defaultSortingOnEmptyQueryString)), n && s;
}
function Db(e) {
  const t = {
    ...Ve,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = kb(e, t, r), a = {
    ...lb,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, s = {
    ...ob,
    loading: e.searchOnInit
  };
  return {
    app: a,
    query: r,
    results: s
  };
}
function Lb(e) {
  const t = Db(e);
  return $i(Pb, t, xi(Ci.withExtraArgument(e)));
}
function Zr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class ir extends A {
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
ir.defaultProps = {
  searchOnInit: !0,
  eventListenerEnabled: !1
};
ir.contextType = _;
var Bb = g.component("Bootstrap", ir);
const Nb = (e) => ({
  onAppInitialized: (t) => e(gb(t)),
  updateQueryState: (t) => e(Sa(t)),
  searchOnUrlQueryStringChanged: () => e(Fb())
}), Ub = x(null, Nb)(Bb);
class or extends A {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new hb(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = Lb(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
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
      buildUID: (u, c) => Zr(u, c, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, o = Zr("ReactSearchKit.children", a, t);
    return /* @__PURE__ */ l.createElement(_.Provider, {
      value: i
    }, /* @__PURE__ */ l.createElement(di, {
      store: this.store
    }, /* @__PURE__ */ l.createElement(Ub, {
      searchOnInit: s,
      eventListenerEnabled: n
    }, /* @__PURE__ */ l.createElement(g, {
      id: o
    }, r))));
  }
}
or.defaultProps = {
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
or.contextType = _;
var Mb = g.component("ReactSearchKit", or);
class Ea extends A {
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
    return !!t.length && /* @__PURE__ */ l.createElement($a, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
Ea.defaultProps = {
  overridableId: ""
};
const $a = (e) => {
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
      /* @__PURE__ */ l.createElement(N, {
        image: !0,
        key: o,
        onClick: () => n(c)
      }, u, /* @__PURE__ */ l.createElement(j, {
        name: "delete"
      }))
    );
  })));
};
$a.defaultProps = {
  overridableId: ""
};
var jb = g.component("ActiveFilters", Ea);
const Qb = (e) => ({
  updateQueryFilters: (t) => e(sr(t))
});
x((e) => ({
  filters: e.query.filters
}), Qb)(jb);
function zb(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var qb = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
zb(qb);
class xa extends A {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? wi.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ l.createElement(Vb, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
xa.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const Gb = (e) => /* @__PURE__ */ l.createElement(xa, Object.assign({
  key: e.queryString
}, e)), Vb = (e) => {
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
  }, /* @__PURE__ */ l.createElement(wn, {
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
  }), /* @__PURE__ */ l.createElement(Hb, {
    querySuggestions: a,
    overridableId: t
  })));
}, Hb = (e) => {
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
  }, r), /* @__PURE__ */ l.createElement("ul", null, n.map((i) => /* @__PURE__ */ l.createElement(ue, {
    as: "li",
    onClick: () => s(i),
    key: i
  }, i))));
};
var Yb = g.component("AutocompleteSearchBar", Gb);
const Wb = (e) => ({
  updateQueryString: (t) => e(_a(t)),
  updateSuggestions: (t) => e(wb(t)),
  clearSuggestions: () => e(Ab())
}), Kb = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
x(Kb, Wb)(Yb);
class pt extends A {
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
        return /* @__PURE__ */ l.createElement(pt, {
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
      return /* @__PURE__ */ l.createElement(wa, {
        key: s.key,
        bucket: s,
        keyField: i,
        isSelected: o,
        onFilterClicked: u,
        getChildAggCmps: c,
        overridableId: n
      });
    });
    return /* @__PURE__ */ l.createElement(Ca, {
      valuesCmp: a,
      overridableId: n
    });
  }
}
pt.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const Ca = (e) => {
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
  }, /* @__PURE__ */ l.createElement(Tn, null, t));
};
Ca.defaultProps = {
  overridableId: ""
};
const wa = (e) => {
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
  }, /* @__PURE__ */ l.createElement(Tn.Item, {
    key: t.key
  }, /* @__PURE__ */ l.createElement(An, {
    label: c,
    id: u(),
    value: t.key,
    onClick: () => n(t.key),
    checked: r
  }), d));
};
wa.defaultProps = {
  overridableId: ""
};
var Xb = g.component("BucketAggregationValues", pt);
class Ta extends A {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: a
      } = this.props;
      return /* @__PURE__ */ l.createElement(Xb, {
        buckets: r,
        selectedFilters: n,
        field: this.agg.field,
        aggName: this.agg.aggName,
        childAgg: this.agg.childAgg,
        onFilterClicked: this.onFilterClicked,
        overridableId: a
      });
    }, this._getSelectedFilters = (r) => r.filter((n) => n[0] === this.agg.aggName), this._getResultBuckets = (r) => {
      const n = Ee(r, this.agg.aggName, {});
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
    return /* @__PURE__ */ l.createElement(Aa, Object.assign({
      title: this.title,
      containerCmp: o,
      overridableId: n
    }, a));
  }
}
Ta.defaultProps = {
  overridableId: ""
};
const Aa = (e) => {
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
Aa.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var Zb = g.component("BucketAggregation", Ta);
const Jb = (e) => ({
  updateQueryFilters: (t) => e(sr(t))
});
x((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), Jb)(Zb);
class Fa extends A {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
Fa.defaultProps = {
  condition: !0
};
var D = g.component("ShouldRender", Fa);
class Ia extends A {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: a
    } = this.props;
    return /* @__PURE__ */ l.createElement(D, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ l.createElement(Oa, {
      totalResults: r,
      overridableId: a
    })));
  }
}
Ia.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const Oa = (e) => {
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
  }, /* @__PURE__ */ l.createElement(N, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
Oa.defaultProps = {
  overridableId: ""
};
var ev = g.component("Count", Ia);
const tv = x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(ev);
class Ra extends A {
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
      condition: !t && q(n) && r === 0
    }, /* @__PURE__ */ l.createElement(Pa, Object.assign({}, u, {
      queryString: a,
      resetQuery: this.resetQuery,
      extraContent: s,
      userSelectionFilters: o,
      overridableId: i
    })));
  }
}
Ra.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const Pa = (e) => {
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
  }, /* @__PURE__ */ l.createElement(Fn, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ l.createElement(_e, {
    icon: !0
  }, /* @__PURE__ */ l.createElement(j, {
    name: "search"
  }), "No results found!"), r && /* @__PURE__ */ l.createElement("em", null, 'Current search "', r, '"'), /* @__PURE__ */ l.createElement("br", null), /* @__PURE__ */ l.createElement(ue, {
    primary: !0,
    onClick: () => n()
  }, "Clear query"), a));
};
Pa.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var rv = g.component("EmptyResults", Ra);
const nv = (e) => ({
  resetQuery: () => e(Eb())
}), av = x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), nv)(rv);
function ka(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ l.createElement(D, {
    condition: !t && !q(r)
  }, /* @__PURE__ */ l.createElement(Da, {
    error: r,
    overridableId: n
  }));
}
ka.defaultProps = {
  overridableId: ""
};
const Da = (e) => {
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
Da.defaultProps = {
  overridableId: ""
};
var sv = g.component("Error", ka);
x((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(sv);
function La(e) {
  const t = (a) => /* @__PURE__ */ l.createElement(e, a);
  return x((a) => ({
    currentQueryState: a.query,
    currentResultsState: a.results
  }), (a) => ({
    updateQueryState: (s) => a(Sa(s))
  }))(t);
}
class Ba extends A {
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
    }, /* @__PURE__ */ l.createElement(Na, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: a
    }));
  }
}
Ba.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
const Na = (e) => {
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
  }, /* @__PURE__ */ l.createElement(xe, {
    compact: !0,
    icon: !0
  }, /* @__PURE__ */ l.createElement(xe.Item, {
    name: "list",
    active: r === "list",
    onClick: (s, i) => {
      let {
        name: o
      } = i;
      return n(o);
    }
  }, /* @__PURE__ */ l.createElement(j, {
    name: "list layout"
  })), /* @__PURE__ */ l.createElement(xe.Item, {
    name: "grid",
    active: r === "grid",
    onClick: (s, i) => {
      let {
        name: o
      } = i;
      return n(o);
    }
  }, /* @__PURE__ */ l.createElement(j, {
    name: "grid layout"
  }))));
};
Na.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var iv = g.component("LayoutSwitcher", Ba);
const ov = (e) => ({
  updateLayout: (t) => e(_b(t))
});
x((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), ov)(iv);
const Jr = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class Ua extends A {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...Jr,
      ...t.options
    } : Jr;
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
    }, /* @__PURE__ */ l.createElement(Ma, {
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
Ua.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const Ma = (e) => {
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
  const c = i.boundaryRangeCount, d = i.siblingRangeCount, p = i.showEllipsis, h = i.showFirst, f = i.showLast, y = i.showPrev, m = i.showNext, b = i.size, v = Math.floor(o / n), C = Math.ceil(a / n), M = Math.min(C, v), {
    buildUID: I
  } = $(_);
  return r > C && s(C), /* @__PURE__ */ l.createElement(g, {
    id: I("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: a,
    options: i,
    onPageChange: s
  }, /* @__PURE__ */ l.createElement(pi, Object.assign({
    activePage: r,
    totalPages: M,
    onPageChange: (W, w) => {
      let {
        activePage: be
      } = w;
      return s(be);
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
Ma.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var lv = g.component("Pagination", Ua);
const uv = (e) => ({
  updateQueryPage: (t) => e(vb(t))
}), cv = x((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), uv)(lv);
function ja(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    resultsPerRow: a,
    overridableId: s,
    onResultsRendered: i
  } = e;
  return Xe(() => {
    i && i();
  }, [i]), /* @__PURE__ */ l.createElement(D, {
    condition: !t && r > 0
  }, /* @__PURE__ */ l.createElement(Qa, {
    results: n,
    resultsPerRow: a,
    overridableId: s
  }));
}
ja.defaultProps = {
  resultsPerRow: 3,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const dv = (e) => {
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
  }, /* @__PURE__ */ l.createElement(fi, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ l.createElement(O.Content, null, /* @__PURE__ */ l.createElement(O.Header, null, t.title), /* @__PURE__ */ l.createElement(O.Description, null, t.description))));
}, Qa = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: a
  } = $(_), s = r.map((i, o) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ l.createElement(dv, {
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
Qa.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var pv = g.component("ResultsGrid", ja);
const hv = x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(pv);
function za(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return Xe(() => {
    s && s();
  }, [s]), /* @__PURE__ */ l.createElement(D, {
    condition: !t && r > 0
  }, /* @__PURE__ */ l.createElement(qa, {
    results: n,
    overridableId: a
  }));
}
za.defaultProps = {
  overridableId: "",
  onResultsRendered: () => {
  }
};
const fv = (e) => {
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
  }, /* @__PURE__ */ l.createElement(ae, {
    href: `#${t.id}`
  }, /* @__PURE__ */ l.createElement(ae.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ l.createElement(ae.Content, null, /* @__PURE__ */ l.createElement(ae.Header, null, t.title), /* @__PURE__ */ l.createElement(ae.Description, null, t.description))));
}, qa = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = $(_), a = t.map((s, i) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ l.createElement(fv, {
      result: s,
      key: i,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ l.createElement(g, {
    id: n("ResultsList.container", r),
    results: a
  }, /* @__PURE__ */ l.createElement(ae.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, a));
};
qa.defaultProps = {
  overridableId: ""
};
var gv = g.component("ResultsList", za);
const Ga = x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(gv);
function Va(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ l.createElement(Ha, {
    overridableId: n
  }) : t;
}
Va.defaultProps = {
  overridableId: ""
};
const Ha = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = $(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ l.createElement(hi, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
Ha.defaultProps = {
  overridableId: ""
};
var mv = g.component("ResultsLoader", Va);
const yv = x((e) => ({
  loading: e.results.loading
}))(mv);
function Ya(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return /* @__PURE__ */ l.createElement(D, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ l.createElement(Wa, {
    layout: n,
    overridableId: a,
    onResultsRendered: s
  }));
}
Ya.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const Wa = (e) => {
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
  }, t === "list" ? /* @__PURE__ */ l.createElement(Ga, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ l.createElement(hv, {
    overridableId: r,
    onResultsRendered: n
  }));
};
Wa.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var bv = g.component("ResultsMultiLayout", Ya);
x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(bv);
class Ka extends A {
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
    }, a(/* @__PURE__ */ l.createElement(Xa, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: o
    })));
  }
}
Ka.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const Xa = (e) => {
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
  }, /* @__PURE__ */ l.createElement(de, {
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
Xa.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var vv = g.component("ResultsPerPage", Ka);
const Sv = (e) => ({
  updateQuerySize: (t) => e(Sb(t))
}), _v = x((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), Sv)(vv);
class Za extends A {
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
    return /* @__PURE__ */ l.createElement(lr, {
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
Za.defaultProps = {
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
const Ja = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ l.createElement(Za, Object.assign({
    key: t
  }, e));
};
Ja.defaultProps = {
  queryString: ""
};
class lr extends A {
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
    }, /* @__PURE__ */ l.createElement(wn, Object.assign({
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
lr.defaultProps = {
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
lr.contextType = _;
var Ev = g.component("SearchBar", Ja);
const $v = (e) => ({
  updateQueryString: (t) => e(_a(t))
}), xv = x((e) => ({
  queryString: e.query.queryString
}), $v)(Ev);
class es extends A {
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
    }, s(/* @__PURE__ */ l.createElement(ts, {
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
es.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const ts = (e) => {
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
  }, /* @__PURE__ */ l.createElement(de, {
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
ts.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var Cv = g.component("Sort", es);
const wv = (e) => ({
  updateQuerySorting: (t, r) => e(mb(t, r))
});
x((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), wv)(Cv);
class rs extends A {
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
    }, a(/* @__PURE__ */ l.createElement(ns, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: o
    })));
  }
}
rs.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const ns = (e) => {
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
  }, /* @__PURE__ */ l.createElement(de, {
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
ns.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var Tv = g.component("SortBy", rs);
const Av = (e) => ({
  updateQuerySortBy: (t) => e(yb(t))
});
x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), Av)(Tv);
class as extends A {
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
    }, a(/* @__PURE__ */ l.createElement(ss, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: o
    })));
  }
}
as.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const ss = (e) => {
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
  }, /* @__PURE__ */ l.createElement(de, {
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
ss.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var Fv = g.component("SortOrder", as);
const Iv = (e) => ({
  updateQuerySortOrder: (t) => e(bb(t))
});
x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), Iv)(Fv);
const is = (e) => {
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
  }, /* @__PURE__ */ l.createElement(O, null, /* @__PURE__ */ l.createElement(O.Content, null, /* @__PURE__ */ l.createElement(O.Header, null, n)), /* @__PURE__ */ l.createElement(O.Content, null, /* @__PURE__ */ l.createElement(An, {
    toggle: !0,
    label: a,
    onClick: u,
    checked: d
  }))));
};
is.defaultProps = {
  overridableId: ""
};
var Ov = g.component("SearchFilters.Toggle", is);
const Rv = (e) => ({
  updateQueryFilters: (t) => e(sr(t))
});
x((e) => ({
  userSelectionFilters: e.query.filters
}), Rv)(Ov);
const os = l.createContext(
  null
), Pv = ({ config: e, children: t, updateQueryState: r, currentQueryState: n }) => {
  const a = Ze(() => {
    r({
      ...n,
      queryString: n.queryString
    });
  }, [r, n]);
  return /* @__PURE__ */ l.createElement(os.Provider, { value: { config: e, refreshSearch: a } }, t);
}, kv = La(Pv), ht = () => {
  const e = l.useContext(os);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
}, Ce = (e) => (e == null ? void 0 : e.charAt(0).toUpperCase()) + (e == null ? void 0 : e.slice(1)) || "", Dv = (e) => new Date(e).toISOString().split("T")[0];
var ls = { exports: {} };
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
})(ls);
var Lv = ls.exports;
const Bv = /* @__PURE__ */ T(Lv), Nv = () => Bv.get("csrftoken") || null, ox = (e) => new la(e), lx = (e, t = {}, r = !0) => ({
  axios: {
    url: e,
    headers: {
      Accept: "application/vnd.inveniordm.v1+json",
      ...t
    },
    withCredentials: r
  }
}), G = Ne.create({
  baseURL: "",
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
    const t = Nv();
    return t && (e.headers["X-CSRFTOKEN"] = t), e;
  },
  (e) => Promise.reject(e)
);
const Uv = async (e, t) => {
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
}, Mv = async (e) => {
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
}, jv = async (e) => {
  try {
    const t = await G.delete(`/api/importer-tasks/${e}`);
    return t.status === 204 ? !0 : (console.error(`Failed to delete task: ${t.statusText}`), !1);
  } catch (t) {
    return console.error(
      `Error deleting task: ${t instanceof Error ? t.message : "Unknown error"}`
    ), !1;
  }
}, Qv = async (e) => {
  try {
    const t = await G.post(`/api/importer-tasks/${e}/load`);
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error executing bulk import:", t), new Error("Failed to execute bulk import");
  }
}, zv = async (e) => {
  try {
    const t = await G.get(
      `/api/importer-tasks/${e}`
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Failed to get importer task: ${t.statusText}`);
  } catch (t) {
    throw new Error(
      `Error getting importer task: ${t instanceof Error ? t.message : "Unknown error"}`
    );
  }
}, qv = async () => {
  try {
    const e = await G.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, Gv = async (e) => {
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
}, us = async (e) => {
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
}, cs = async (e) => {
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
}, Vv = ({ result: e, index: t }) => {
  var u;
  const { refreshSearch: r, config: n } = ht();
  if (!e)
    return null;
  const a = async (c) => {
    try {
      await jv(c) ? r() : console.error(`Failed to delete task ${c}.`);
    } catch (d) {
      console.error(`Error deleting task ${c}:`, d);
    }
  }, s = async (c) => {
    try {
      const d = await cs(c);
      console.log("Validation result:", d), r();
    } catch (d) {
      console.error(`Error validating task ${c}:`, d);
    }
  }, i = async (c) => {
    try {
      const d = await Qv(c);
      console.log("Bulk import executed:", d), r();
    } catch (d) {
      console.error(`Error executing bulk import for task ${c}:`, d);
    }
  }, o = async () => {
    try {
      const c = await us(e.id);
      c ? (r(), console.log(`Current status for task ${e.id}:`, c)) : console.error(`Failed to retrieve status for task ${e.id}.`);
    } catch (c) {
      console.error(`Error changing status for task ${e.id}:`, c);
    }
  };
  return /* @__PURE__ */ l.createElement(In, { key: t }, /* @__PURE__ */ l.createElement(K, null, /* @__PURE__ */ l.createElement("a", { href: `${n.resultPath}/${e.id}` }, e.title || "No title")), /* @__PURE__ */ l.createElement(K, null, Dv(e.created)), /* @__PURE__ */ l.createElement(K, null, Ce(e.status)), /* @__PURE__ */ l.createElement(K, null, ((u = e.records_status) == null ? void 0 : u.total_records) ?? 0), /* @__PURE__ */ l.createElement(K, null, 0), /* @__PURE__ */ l.createElement(K, null, e.serializer), /* @__PURE__ */ l.createElement(K, null, Ce(e.mode)), /* @__PURE__ */ l.createElement(K, { style: { width: "220px" } }, /* @__PURE__ */ l.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ l.createElement(
    de,
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
          key: "validate",
          text: "Retry Validation",
          value: "validate",
          onClick: () => s(e.id)
        },
        {
          key: "load",
          text: "Load Bulk Import",
          value: "load",
          onClick: () => i(e.id)
        },
        {
          key: "status",
          text: "Get Status",
          value: "status",
          onClick: o
        },
        {
          key: "delete",
          text: "Delete",
          value: "delete",
          onClick: () => a(e.id)
        }
      ]
    }
  ), /* @__PURE__ */ l.createElement(ue, { basic: !0, size: "tiny" }, /* @__PURE__ */ l.createElement(j, { name: "eye" }), "View"))));
}, Hv = ({ children: e }) => /* @__PURE__ */ l.createElement(gi, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ l.createElement(mi, null, /* @__PURE__ */ l.createElement(In, null, /* @__PURE__ */ l.createElement(X, null, "ID"), /* @__PURE__ */ l.createElement(X, null, "Date Created"), /* @__PURE__ */ l.createElement(X, null, "Status"), /* @__PURE__ */ l.createElement(X, null, "Records"), /* @__PURE__ */ l.createElement(X, null, "Files"), /* @__PURE__ */ l.createElement(X, null, "Serializer"), /* @__PURE__ */ l.createElement(X, null, "Mode"), /* @__PURE__ */ l.createElement(X, null, "Actions"))), /* @__PURE__ */ l.createElement(yi, null, e)), V = {
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
}, Yv = () => {
  const [e, t] = je(
    {}
  ), [r, n] = je(!0), { values: a, submitForm: s, isSubmitting: i, isValid: o, setFieldValue: u } = Ii(), c = Ze(async () => {
    try {
      const d = await qv(), p = {};
      for (const h of d) {
        const f = await Gv(h);
        f && (p[h] = f);
      }
      t(p);
    } catch (d) {
      console.error("Error fetching record types:", d);
    } finally {
      n(!1);
    }
  }, []);
  return Xe(() => {
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
}, Wv = () => {
  const {
    configs: e,
    isLoading: t,
    submitForm: r,
    setFieldValue: n,
    values: a,
    isSubmitting: s,
    isValid: i
  } = Yv(), o = (u) => {
    var d;
    const c = ((d = u.target.files) == null ? void 0 : d[0]) || null;
    n("metadata", c);
  };
  return t ? /* @__PURE__ */ l.createElement("p", null, "Loading record types...") : !e || Object.keys(e).length === 0 ? /* @__PURE__ */ l.createElement("p", null, "No record types available.") : /* @__PURE__ */ l.createElement(ui, null, /* @__PURE__ */ l.createElement(
    Ti,
    {
      fieldPath: "task.title",
      label: "Title",
      placeholder: "Enter a title for the import task",
      required: !0
    }
  ), /* @__PURE__ */ l.createElement(fr.Group, { widths: "equal" }, /* @__PURE__ */ l.createElement(
    gt,
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
    gt,
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
    gt,
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
  )), /* @__PURE__ */ l.createElement(fr.Field, null, /* @__PURE__ */ l.createElement("label", { htmlFor: "file-input" }, "Metadata File"), /* @__PURE__ */ l.createElement(
    "input",
    {
      id: "file-input",
      type: "file",
      accept: ".csv",
      onChange: o,
      style: { marginTop: "8px" }
    }
  ), a.metadata && /* @__PURE__ */ l.createElement("p", { style: { marginTop: "8px", fontSize: "12px", color: "#666" } }, "Selected: ", a.metadata.name)), /* @__PURE__ */ l.createElement(
    Ai,
    {
      fieldPath: "task.description",
      label: "Notes",
      placeholder: "Enter a description for the import task",
      rows: 3
    }
  ), /* @__PURE__ */ l.createElement(
    ue,
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
var Tt;
try {
  Tt = Map;
} catch {
}
var At;
try {
  At = Set;
} catch {
}
function ds(e, t, r) {
  if (!e || typeof e != "object" || typeof e == "function")
    return e;
  if (e.nodeType && "cloneNode" in e)
    return e.cloneNode(!0);
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof RegExp)
    return new RegExp(e);
  if (Array.isArray(e))
    return e.map(Ft);
  if (Tt && e instanceof Tt)
    return new Map(Array.from(e.entries()));
  if (At && e instanceof At)
    return new Set(Array.from(e.values()));
  if (e instanceof Object) {
    t.push(e);
    var n = Object.create(e);
    r.push(n);
    for (var a in e) {
      var s = t.findIndex(function(i) {
        return i === e[a];
      });
      n[a] = s > -1 ? r[s] : ds(e[a], t, r);
    }
    return n;
  }
  return e;
}
function Ft(e) {
  return ds(e, [], []);
}
const Kv = Object.prototype.toString, Xv = Error.prototype.toString, Zv = RegExp.prototype.toString, Jv = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", eS = /^Symbol\((.*)\)(.*)$/;
function tS(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function en(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return tS(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return Jv.call(e).replace(eS, "Symbol($1)");
  const n = Kv.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + Xv.call(e) + "]" : n === "RegExp" ? Zv.call(e) : null;
}
function we(e, t) {
  let r = en(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = en(this[n], t);
    return s !== null ? s : a;
  }, 2);
}
let te = {
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
    let a = n != null && n !== r, s = `${e} must be a \`${t}\` type, but the final value was: \`${we(r, !0)}\`` + (a ? ` (cast from the value \`${we(n, !0)}\`).` : ".");
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
}, rS = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, It = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, nS = {
  isValue: "${path} field must be ${value}"
}, Ot = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, aS = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: te,
  string: L,
  number: rS,
  date: It,
  object: Ot,
  array: aS,
  boolean: nS
});
var sS = Object.prototype, iS = sS.hasOwnProperty;
function oS(e, t) {
  return e != null && iS.call(e, t);
}
var lS = oS, uS = lS, cS = zn;
function dS(e, t) {
  return e != null && cS(e, t, uS);
}
var pS = dS;
const He = /* @__PURE__ */ T(pS), ps = (e) => e && e.__isYupSchema__;
class hS {
  constructor(t, r) {
    if (this.fn = void 0, this.refs = t, this.refs = t, typeof r == "function") {
      this.fn = r;
      return;
    }
    if (!He(r, "is"))
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
    if (!ps(a))
      throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
function hs(e) {
  return e == null ? [] : [].concat(e);
}
function Rt() {
  return Rt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rt.apply(this, arguments);
}
let fS = /\$\{\s*(\w+)\s*\}/g;
class R extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Rt({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(fS, (a, s) => we(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], hs(t).forEach((s) => {
      R.isError(s) ? (this.errors.push(...s.errors), this.inner = this.inner.concat(s.inner.length ? s.inner : s)) : this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, R);
  }
}
const gS = (e) => {
  let t = !1;
  return (...r) => {
    t || (t = !0, e(...r));
  };
};
function Pt(e, t) {
  let {
    endEarly: r,
    tests: n,
    args: a,
    value: s,
    errors: i,
    sort: o,
    path: u
  } = e, c = gS(t), d = n.length;
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
function mS(e) {
  return function(t, r, n) {
    for (var a = -1, s = Object(t), i = n(t), o = i.length; o--; ) {
      var u = i[e ? o : ++a];
      if (r(s[u], u, s) === !1)
        break;
    }
    return t;
  };
}
var yS = mS, bS = yS, vS = bS(), SS = vS, _S = SS, ES = Oe;
function $S(e, t) {
  return e && _S(e, t, ES);
}
var fs = $S, xS = "__lodash_hash_undefined__";
function CS(e) {
  return this.__data__.set(e, xS), this;
}
var wS = CS;
function TS(e) {
  return this.__data__.has(e);
}
var AS = TS, FS = Gt, IS = wS, OS = AS;
function Ye(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new FS(); ++t < r; )
    this.add(e[t]);
}
Ye.prototype.add = Ye.prototype.push = IS;
Ye.prototype.has = OS;
var RS = Ye;
function PS(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var kS = PS;
function DS(e, t) {
  return e.has(t);
}
var LS = DS, BS = RS, NS = kS, US = LS, MS = 1, jS = 2;
function QS(e, t, r, n, a, s) {
  var i = r & MS, o = e.length, u = t.length;
  if (o != u && !(i && u > o))
    return !1;
  var c = s.get(e), d = s.get(t);
  if (c && d)
    return c == t && d == e;
  var p = -1, h = !0, f = r & jS ? new BS() : void 0;
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
      if (!NS(t, function(v, C) {
        if (!US(f, C) && (y === v || a(y, v, r, n, s)))
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
var gs = QS;
function zS(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var qS = zS;
function GS(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var VS = GS, tn = pe, rn = ea, HS = at, YS = gs, WS = qS, KS = VS, XS = 1, ZS = 2, JS = "[object Boolean]", e_ = "[object Date]", t_ = "[object Error]", r_ = "[object Map]", n_ = "[object Number]", a_ = "[object RegExp]", s_ = "[object Set]", i_ = "[object String]", o_ = "[object Symbol]", l_ = "[object ArrayBuffer]", u_ = "[object DataView]", nn = tn ? tn.prototype : void 0, bt = nn ? nn.valueOf : void 0;
function c_(e, t, r, n, a, s, i) {
  switch (r) {
    case u_:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case l_:
      return !(e.byteLength != t.byteLength || !s(new rn(e), new rn(t)));
    case JS:
    case e_:
    case n_:
      return HS(+e, +t);
    case t_:
      return e.name == t.name && e.message == t.message;
    case a_:
    case i_:
      return e == t + "";
    case r_:
      var o = WS;
    case s_:
      var u = n & XS;
      if (o || (o = KS), e.size != t.size && !u)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      n |= ZS, i.set(e, t);
      var d = YS(o(e), o(t), n, a, s, i);
      return i.delete(e), d;
    case o_:
      if (bt)
        return bt.call(e) == bt.call(t);
  }
  return !1;
}
var d_ = c_, an = Jn, p_ = 1, h_ = Object.prototype, f_ = h_.hasOwnProperty;
function g_(e, t, r, n, a, s) {
  var i = r & p_, o = an(e), u = o.length, c = an(t), d = c.length;
  if (u != d && !i)
    return !1;
  for (var p = u; p--; ) {
    var h = o[p];
    if (!(i ? h in t : f_.call(t, h)))
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
      var M = i ? n(C, v, h, t, e, s) : n(v, C, h, e, t, s);
    if (!(M === void 0 ? v === C || a(v, C, r, n, s) : M)) {
      m = !1;
      break;
    }
    b || (b = h == "constructor");
  }
  if (m && !b) {
    var I = e.constructor, W = t.constructor;
    I != W && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof W == "function" && W instanceof W) && (m = !1);
  }
  return s.delete(e), s.delete(t), m;
}
var m_ = g_, vt = Zt, y_ = gs, b_ = d_, v_ = m_, sn = Te, on = P, ln = rt, S_ = Qt, __ = 1, un = "[object Arguments]", cn = "[object Array]", De = "[object Object]", E_ = Object.prototype, dn = E_.hasOwnProperty;
function $_(e, t, r, n, a, s) {
  var i = on(e), o = on(t), u = i ? cn : sn(e), c = o ? cn : sn(t);
  u = u == un ? De : u, c = c == un ? De : c;
  var d = u == De, p = c == De, h = u == c;
  if (h && ln(e)) {
    if (!ln(t))
      return !1;
    i = !0, d = !1;
  }
  if (h && !d)
    return s || (s = new vt()), i || S_(e) ? y_(e, t, r, n, a, s) : b_(e, t, u, r, n, a, s);
  if (!(r & __)) {
    var f = d && dn.call(e, "__wrapped__"), y = p && dn.call(t, "__wrapped__");
    if (f || y) {
      var m = f ? e.value() : e, b = y ? t.value() : t;
      return s || (s = new vt()), a(m, b, r, n, s);
    }
  }
  return h ? (s || (s = new vt()), v_(e, t, r, n, a, s)) : !1;
}
var x_ = $_, C_ = x_, pn = z;
function ms(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !pn(e) && !pn(t) ? e !== e && t !== t : C_(e, t, r, n, ms, a);
}
var ys = ms, w_ = Zt, T_ = ys, A_ = 1, F_ = 2;
function I_(e, t, r, n) {
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
      var p = new w_();
      if (n)
        var h = n(c, d, u, e, t, p);
      if (!(h === void 0 ? T_(d, c, A_ | F_, n, p) : h))
        return !1;
    }
  }
  return !0;
}
var O_ = I_, R_ = Y;
function P_(e) {
  return e === e && !R_(e);
}
var bs = P_, k_ = bs, D_ = Oe;
function L_(e) {
  for (var t = D_(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, k_(a)];
  }
  return t;
}
var B_ = L_;
function N_(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var vs = N_, U_ = O_, M_ = B_, j_ = vs;
function Q_(e) {
  var t = M_(e);
  return t.length == 1 && t[0][2] ? j_(t[0][0], t[0][1]) : function(r) {
    return r === e || U_(r, e, t);
  };
}
var z_ = Q_, q_ = ys, G_ = Qn, V_ = Yt, H_ = qt, Y_ = bs, W_ = vs, K_ = Fe, X_ = 1, Z_ = 2;
function J_(e, t) {
  return H_(e) && Y_(t) ? W_(K_(e), t) : function(r) {
    var n = G_(r, e);
    return n === void 0 && n === t ? V_(r, e) : q_(t, n, X_ | Z_);
  };
}
var eE = J_;
function tE(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var rE = tE, nE = Ht;
function aE(e) {
  return function(t) {
    return nE(t, e);
  };
}
var sE = aE, iE = rE, oE = sE, lE = qt, uE = Fe;
function cE(e) {
  return lE(e) ? iE(uE(e)) : oE(e);
}
var dE = cE, pE = z_, hE = eE, fE = Kt, gE = P, mE = dE;
function yE(e) {
  return typeof e == "function" ? e : e == null ? fE : typeof e == "object" ? gE(e) ? hE(e[0], e[1]) : pE(e) : mE(e);
}
var Ss = yE, bE = ct, vE = fs, SE = Ss;
function _E(e, t) {
  var r = {};
  return t = SE(t), vE(e, function(n, a, s) {
    bE(r, a, t(n, a, s));
  }), r;
}
var EE = _E;
const _s = /* @__PURE__ */ T(EE);
function ne(e) {
  this._maxSize = e, this.clear();
}
ne.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
ne.prototype.get = function(e) {
  return this._values[e];
};
ne.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var $E = /[^.^\]^[]+|(?=\[\]|\.\.)/g, Es = /^\d+$/, xE = /^\d/, CE = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, wE = /^\s*(['"]?)(.*?)(\1)\s*$/, ur = 512, hn = new ne(ur), fn = new ne(ur), gn = new ne(ur), ft = {
  Cache: ne,
  split: kt,
  normalizePath: St,
  setter: function(e) {
    var t = St(e);
    return fn.get(e) || fn.set(e, function(n, a) {
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
    var r = St(e);
    return gn.get(e) || gn.set(e, function(a) {
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
      return t + (cr(r) || Es.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    TE(Array.isArray(e) ? e : kt(e), t, r);
  }
};
function St(e) {
  return hn.get(e) || hn.set(
    e,
    kt(e).map(function(t) {
      return t.replace(wE, "$2");
    })
  );
}
function kt(e) {
  return e.match($E) || [""];
}
function TE(e, t, r) {
  var n = e.length, a, s, i, o;
  for (s = 0; s < n; s++)
    a = e[s], a && (IE(a) && (a = '"' + a + '"'), o = cr(a), i = !o && /^\d+$/.test(a), t.call(r, a, o, i, s, e));
}
function cr(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function AE(e) {
  return e.match(xE) && !e.match(Es);
}
function FE(e) {
  return CE.test(e);
}
function IE(e) {
  return !cr(e) && (AE(e) || FE(e));
}
const Le = {
  context: "$",
  value: "."
};
class Z {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
      throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Le.context, this.isValue = this.key[0] === Le.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? Le.context : this.isValue ? Le.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && ft.getter(this.path, !0), this.map = r.map;
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
Z.prototype.__isYupRef = !0;
function We() {
  return We = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, We.apply(this, arguments);
}
function OE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Be(e) {
  function t(r, n) {
    let {
      value: a,
      path: s = "",
      label: i,
      options: o,
      originalValue: u,
      sync: c
    } = r, d = OE(r, ["value", "path", "label", "options", "originalValue", "sync"]);
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
      return Z.isRef(w) ? w.getValue(a, m, b) : w;
    }
    function C(w = {}) {
      const be = _s(We({
        value: a,
        originalValue: u,
        label: i,
        path: w.path || s
      }, f, w.params), v), hr = new R(R.formatError(w.message || y, be), a, be.path, w.type || p);
      return hr.params = be, hr;
    }
    let M = We({
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
        Promise.resolve(h.call(M, a, M)).then((w) => {
          R.isError(w) ? n(w) : w ? n(null, w) : n(C());
        }).catch(n);
      } catch (w) {
        n(w);
      }
      return;
    }
    let I;
    try {
      var W;
      if (I = h.call(M, a, M), typeof ((W = I) == null ? void 0 : W.then) == "function")
        throw new Error(`Validation test of type: "${M.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (w) {
      n(w);
      return;
    }
    R.isError(I) ? n(I) : I ? n(null, I) : n(C());
  }
  return t.OPTIONS = e, t;
}
let RE = (e) => e.substr(0, e.length - 1).substr(1);
function PE(e, t, r, n = r) {
  let a, s, i;
  return t ? (ft.forEach(t, (o, u, c) => {
    let d = u ? RE(o) : o;
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
class Ke {
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
    return this.toArray().reduce((r, n) => r.concat(Z.isRef(n) ? t(n) : n), []);
  }
  add(t) {
    Z.isRef(t) ? this.refs.set(t.key, t) : this.list.add(t);
  }
  delete(t) {
    Z.isRef(t) ? this.refs.delete(t.key) : this.list.delete(t);
  }
  clone() {
    const t = new Ke();
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
    this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new Ke(), this._blacklist = new Ke(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(te.notType);
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
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = k({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Ft(k({}, this.spec, t)), r;
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
      let s = we(t), i = we(a);
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
    this._whitelistError && f.push(this._whitelistError), this._blacklistError && f.push(this._blacklistError), Pt({
      args: p,
      value: d,
      path: s,
      sync: a,
      tests: h,
      endEarly: c
    }, (y) => {
      if (y)
        return void n(y, d);
      Pt({
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
    return t == null ? t : typeof t == "function" ? t.call(this) : Ft(t);
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
  defined(t = te.defined) {
    return this.test({
      message: t,
      name: "defined",
      exclusive: !0,
      test(r) {
        return r !== void 0;
      }
    });
  }
  required(t = te.required) {
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
    }, r.message === void 0 && (r.message = te.default), typeof r.test != "function")
      throw new TypeError("`test` is a required parameters");
    let n = this.clone(), a = Be(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((i) => !(i.OPTIONS.name === r.name && (s || i.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = hs(t).map((s) => new Z(s));
    return a.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(new hS(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r._typeError = Be({
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
  oneOf(t, r = te.oneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._whitelist.add(a), n._blacklist.delete(a);
    }), n._whitelistError = Be({
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
  notOneOf(t, r = te.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n._blacklistError = Be({
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
    } = PE(this, t, r, n.context);
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
const kE = F;
kE.prototype;
const B = (e) => e == null;
let DE = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, LE = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, BE = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, NE = (e) => B(e) || e === e.trim(), UE = {}.toString();
function $e() {
  return new $s();
}
class $s extends F {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === UE ? t : r;
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
    return this.matches(DE, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = L.url) {
    return this.matches(LE, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = L.uuid) {
    return this.matches(BE, {
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
      test: NE
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
$e.prototype = $s.prototype;
var ME = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function jE(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, a;
  if (a = ME.exec(e)) {
    for (var s = 0, i; i = t[s]; ++s)
      a[i] = +a[i] || 0;
    a[2] = (+a[2] || 1) - 1, a[3] = +a[3] || 1, a[7] = a[7] ? String(a[7]).substr(0, 3) : 0, (a[8] === void 0 || a[8] === "") && (a[9] === void 0 || a[9] === "") ? n = +new Date(a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : (a[8] !== "Z" && a[9] !== void 0 && (r = a[10] * 60 + a[11], a[9] === "+" && (r = 0 - r)), n = Date.UTC(a[1], a[2], a[3], a[4], a[5] + r, a[6], a[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let xs = /* @__PURE__ */ new Date(""), QE = (e) => Object.prototype.toString.call(e) === "[object Date]";
class Cs extends F {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = jE(t), isNaN(t) ? xs : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return QE(t) && !isNaN(t.getTime());
  }
  prepareParam(t, r) {
    let n;
    if (Z.isRef(t))
      n = t;
    else {
      let a = this.cast(t);
      if (!this._typeCheck(a))
        throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = a;
    }
    return n;
  }
  min(t, r = It.min) {
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
  max(t, r = It.max) {
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
Cs.INVALID_DATE = xs;
Cs.prototype;
function zE(e, t, r, n) {
  var a = -1, s = e == null ? 0 : e.length;
  for (n && s && (r = e[++a]); ++a < s; )
    r = t(r, e[a], a, e);
  return r;
}
var qE = zE;
function GE(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var VE = GE, HE = VE, YE = {
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
}, WE = HE(YE), KE = WE, XE = KE, ZE = Ae, JE = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, e0 = "\\u0300-\\u036f", t0 = "\\ufe20-\\ufe2f", r0 = "\\u20d0-\\u20ff", n0 = e0 + t0 + r0, a0 = "[" + n0 + "]", s0 = RegExp(a0, "g");
function i0(e) {
  return e = ZE(e), e && e.replace(JE, XE).replace(s0, "");
}
var o0 = i0, l0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function u0(e) {
  return e.match(l0) || [];
}
var c0 = u0, d0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function p0(e) {
  return d0.test(e);
}
var h0 = p0, ws = "\\ud800-\\udfff", f0 = "\\u0300-\\u036f", g0 = "\\ufe20-\\ufe2f", m0 = "\\u20d0-\\u20ff", y0 = f0 + g0 + m0, Ts = "\\u2700-\\u27bf", As = "a-z\\xdf-\\xf6\\xf8-\\xff", b0 = "\\xac\\xb1\\xd7\\xf7", v0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", S0 = "\\u2000-\\u206f", _0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Fs = "A-Z\\xc0-\\xd6\\xd8-\\xde", E0 = "\\ufe0e\\ufe0f", Is = b0 + v0 + S0 + _0, Os = "['’]", mn = "[" + Is + "]", $0 = "[" + y0 + "]", Rs = "\\d+", x0 = "[" + Ts + "]", Ps = "[" + As + "]", ks = "[^" + ws + Is + Rs + Ts + As + Fs + "]", C0 = "\\ud83c[\\udffb-\\udfff]", w0 = "(?:" + $0 + "|" + C0 + ")", T0 = "[^" + ws + "]", Ds = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ls = "[\\ud800-\\udbff][\\udc00-\\udfff]", se = "[" + Fs + "]", A0 = "\\u200d", yn = "(?:" + Ps + "|" + ks + ")", F0 = "(?:" + se + "|" + ks + ")", bn = "(?:" + Os + "(?:d|ll|m|re|s|t|ve))?", vn = "(?:" + Os + "(?:D|LL|M|RE|S|T|VE))?", Bs = w0 + "?", Ns = "[" + E0 + "]?", I0 = "(?:" + A0 + "(?:" + [T0, Ds, Ls].join("|") + ")" + Ns + Bs + ")*", O0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", R0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", P0 = Ns + Bs + I0, k0 = "(?:" + [x0, Ds, Ls].join("|") + ")" + P0, D0 = RegExp([
  se + "?" + Ps + "+" + bn + "(?=" + [mn, se, "$"].join("|") + ")",
  F0 + "+" + vn + "(?=" + [mn, se + yn, "$"].join("|") + ")",
  se + "?" + yn + "+" + bn,
  se + "+" + vn,
  R0,
  O0,
  Rs,
  k0
].join("|"), "g");
function L0(e) {
  return e.match(D0) || [];
}
var B0 = L0, N0 = c0, U0 = h0, M0 = Ae, j0 = B0;
function Q0(e, t, r) {
  return e = M0(e), t = r ? void 0 : t, t === void 0 ? U0(e) ? j0(e) : N0(e) : e.match(t) || [];
}
var z0 = Q0, q0 = qE, G0 = o0, V0 = z0, H0 = "['’]", Y0 = RegExp(H0, "g");
function W0(e) {
  return function(t) {
    return q0(V0(G0(t).replace(Y0, "")), e, "");
  };
}
var Us = W0, K0 = Us, X0 = K0(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), Z0 = X0;
const Sn = /* @__PURE__ */ T(Z0);
function J0(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++n < a; )
    s[n] = e[n + t];
  return s;
}
var e$ = J0, t$ = e$;
function r$(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : t$(e, t, r);
}
var n$ = r$, a$ = "\\ud800-\\udfff", s$ = "\\u0300-\\u036f", i$ = "\\ufe20-\\ufe2f", o$ = "\\u20d0-\\u20ff", l$ = s$ + i$ + o$, u$ = "\\ufe0e\\ufe0f", c$ = "\\u200d", d$ = RegExp("[" + c$ + a$ + l$ + u$ + "]");
function p$(e) {
  return d$.test(e);
}
var Ms = p$;
function h$(e) {
  return e.split("");
}
var f$ = h$, js = "\\ud800-\\udfff", g$ = "\\u0300-\\u036f", m$ = "\\ufe20-\\ufe2f", y$ = "\\u20d0-\\u20ff", b$ = g$ + m$ + y$, v$ = "\\ufe0e\\ufe0f", S$ = "[" + js + "]", Dt = "[" + b$ + "]", Lt = "\\ud83c[\\udffb-\\udfff]", _$ = "(?:" + Dt + "|" + Lt + ")", Qs = "[^" + js + "]", zs = "(?:\\ud83c[\\udde6-\\uddff]){2}", qs = "[\\ud800-\\udbff][\\udc00-\\udfff]", E$ = "\\u200d", Gs = _$ + "?", Vs = "[" + v$ + "]?", $$ = "(?:" + E$ + "(?:" + [Qs, zs, qs].join("|") + ")" + Vs + Gs + ")*", x$ = Vs + Gs + $$, C$ = "(?:" + [Qs + Dt + "?", Dt, zs, qs, S$].join("|") + ")", w$ = RegExp(Lt + "(?=" + Lt + ")|" + C$ + x$, "g");
function T$(e) {
  return e.match(w$) || [];
}
var A$ = T$, F$ = f$, I$ = Ms, O$ = A$;
function R$(e) {
  return I$(e) ? O$(e) : F$(e);
}
var P$ = R$, k$ = n$, D$ = Ms, L$ = P$, B$ = Ae;
function N$(e) {
  return function(t) {
    t = B$(t);
    var r = D$(t) ? L$(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? k$(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var U$ = N$, M$ = U$, j$ = M$("toUpperCase"), Q$ = j$, z$ = Ae, q$ = Q$;
function G$(e) {
  return q$(z$(e).toLowerCase());
}
var V$ = G$, H$ = V$, Y$ = Us, W$ = Y$(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? H$(t) : t);
}), K$ = W$;
const X$ = /* @__PURE__ */ T(K$);
var Z$ = ct, J$ = fs, e1 = Ss;
function t1(e, t) {
  var r = {};
  return t = e1(t), J$(e, function(n, a, s) {
    Z$(r, t(n, a, s), n);
  }), r;
}
var r1 = t1;
const n1 = /* @__PURE__ */ T(r1);
var dr = { exports: {} };
dr.exports = function(e) {
  return Hs(a1(e), e);
};
dr.exports.array = Hs;
function Hs(e, t) {
  var r = e.length, n = new Array(r), a = {}, s = r, i = s1(t), o = i1(e);
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
function a1(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.add(a[0]), t.add(a[1]);
  }
  return Array.from(t);
}
function s1(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.has(a[0]) || t.set(a[0], /* @__PURE__ */ new Set()), t.has(a[1]) || t.set(a[1], /* @__PURE__ */ new Set()), t.get(a[0]).add(a[1]);
  }
  return t;
}
function i1(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var o1 = dr.exports;
const l1 = /* @__PURE__ */ T(o1);
function u1(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([i, o]) => `${i}-${o}`));
  function s(i, o) {
    let u = ft.split(i)[0];
    n.add(u), a.has(`${o}-${u}`) || r.push([o, u]);
  }
  for (const i in e)
    if (He(e, i)) {
      let o = e[i];
      n.add(i), Z.isRef(o) && o.isSibling ? s(o.path, i) : ps(o) && "deps" in o && o.deps.forEach((u) => s(u, i));
    }
  return l1.array(Array.from(n), r).reverse();
}
function _n(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if (((s = t.path) == null ? void 0 : s.indexOf(n)) !== -1)
      return r = a, !0;
  }), r;
}
function Ys(e) {
  return (t, r) => _n(e, t) - _n(e, r);
}
function oe() {
  return oe = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, oe.apply(this, arguments);
}
let En = (e) => Object.prototype.toString.call(e) === "[object Object]";
function c1(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const d1 = Ys([]);
class Ws extends F {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = d1, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
    return En(t) || typeof t == "function";
  }
  _cast(t, r = {}) {
    var n;
    let a = super._cast(t, r);
    if (a === void 0)
      return this.getDefault();
    if (!this._typeCheck(a))
      return a;
    let s = this.fields, i = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, o = this._nodes.concat(Object.keys(a).filter((p) => this._nodes.indexOf(p) === -1)), u = {}, c = oe({}, r, {
      parent: u,
      __validating: r.__validating || !1
    }), d = !1;
    for (const p of o) {
      let h = s[p], f = He(a, p);
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
      if (!c || !En(p)) {
        n(a[0] || null, p);
        return;
      }
      o = o || p;
      let h = this._nodes.map((f) => (y, m) => {
        let b = f.indexOf(".") === -1 ? (r.path ? `${r.path}.` : "") + f : `${r.path || ""}["${f}"]`, v = this.fields[f];
        if (v && "validate" in v) {
          v.validate(p[f], oe({}, r, {
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
      Pt({
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
    return r.fields = oe({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
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
    return n.fields = a, n._sortErrors = Ys(Object.keys(a)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = u1(a, n._excludedEdges), n;
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
    let a = ft.getter(t, !0);
    return this.transform((s) => {
      if (s == null)
        return s;
      let i = s;
      return He(s, t) && (i = oe({}, s), n || delete i[t], i[r] = a(s)), i;
    });
  }
  noUnknown(t = !0, r = Ot.noUnknown) {
    typeof t == "string" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(a) {
        if (a == null)
          return !0;
        const s = c1(this.schema, a);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = Ot.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => r && n1(r, (n, a) => t(a)));
  }
  camelCase() {
    return this.transformKeys(X$);
  }
  snakeCase() {
    return this.transformKeys(Sn);
  }
  constantCase() {
    return this.transformKeys((t) => Sn(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = _s(this.fields, (r) => r.describe()), t;
  }
}
function Me(e) {
  return new Ws(e);
}
Me.prototype = Ws.prototype;
const p1 = {
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
}, h1 = Me({
  task: Me({
    title: $e().required("Title is required"),
    recordType: $e().required("Record type is required"),
    serializer: $e().required("Serializer is required"),
    mode: $e().required("Mode is required")
  }),
  metadata: Me().nullable()
}), f1 = ({ onSubmit: e }) => {
  const t = async (r) => {
    try {
      const n = await Mv(r.task);
      if (!n)
        throw new Error("Failed to create import task");
      if (r.metadata) {
        const a = await Uv(n.id, r.metadata);
        console.log("Metadata added:", a);
        const s = await cs(n.id);
        if (console.log("Task validation result:", s), s) {
          const i = await us(n.id);
          console.log("Task status:", i);
        }
      }
      e == null || e();
    } catch (n) {
      console.error("Error creating import task:", n);
    }
  };
  return /* @__PURE__ */ l.createElement(
    Fi,
    {
      formik: {
        initialValues: p1,
        validationSchema: h1,
        onSubmit: t
      }
    },
    /* @__PURE__ */ l.createElement(Wv, null)
  );
}, g1 = () => {
  const [e, t] = je(!1), { refreshSearch: r } = ht(), n = Ze(() => {
    t(!1), r();
  }, [r]);
  return /* @__PURE__ */ l.createElement(
    bi,
    {
      closeIcon: !0,
      onClose: () => t(!1),
      onOpen: () => t(!0),
      open: e,
      trigger: /* @__PURE__ */ l.createElement(ue, { color: "green", icon: !0, labelPosition: "left" }, /* @__PURE__ */ l.createElement(j, { name: "add" }), "New Import")
    },
    /* @__PURE__ */ l.createElement(vi, null, "New Import Task"),
    /* @__PURE__ */ l.createElement(Si, null, /* @__PURE__ */ l.createElement(f1, { onSubmit: n })),
    /* @__PURE__ */ l.createElement(_i, null, /* @__PURE__ */ l.createElement(ue, { onClick: () => t(!1) }, "Close"))
  );
}, m1 = ({
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
  return /* @__PURE__ */ l.createElement(xe, { activeIndex: 0, compact: !0, size: "tiny" }, r.map(({ key: i, label: o, value: u }) => /* @__PURE__ */ l.createElement(
    xe.Item,
    {
      key: i,
      name: i,
      active: (n == null ? void 0 : n[1]) === u || u === null && !n,
      onClick: () => a(u)
    },
    o
  )));
}, Ks = La(m1);
function Bt(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var y1 = (e) => typeof e == "object" && e !== null;
function b1(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var v1 = (e) => e === "base";
function S1(e) {
  return e.slice().filter((t) => !v1(t));
}
function $n(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function _1(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = $n(r % 52) + t;
  return $n(r % 52) + t;
}
function E1(e, t) {
  let r = t.length;
  for (; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function $1(e) {
  return _1(E1(5381, e) >>> 0);
}
var Xs = /\s*!(important)?/i;
function x1(e) {
  return typeof e == "string" ? Xs.test(e) : !1;
}
function C1(e) {
  return typeof e == "string" ? e.replace(Xs, "").trim() : e;
}
function Zs(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var pr = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...n) => {
    const a = JSON.stringify(n);
    if (t.has(a))
      return t.get(a);
    const s = e(...n);
    return t.set(a, s), s;
  };
}, w1 = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function Js(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((n) => {
    if (w1.has(n))
      return;
    const a = t[n], s = r[n];
    Bt(a) && Bt(s) ? t[n] = Js(a, s) : t[n] = s;
  }), t), {});
}
var T1 = (e) => e != null;
function ei(e, t, r = {}) {
  const { stop: n, getKey: a } = r;
  function s(i, o = []) {
    if (y1(i)) {
      const u = {};
      for (const [c, d] of Object.entries(i)) {
        const p = (a == null ? void 0 : a(c, d)) ?? c, h = [...o, p];
        if (n != null && n(i, h))
          return t(i, o);
        const f = s(d, h);
        T1(f) && (u[p] = f);
      }
      return u;
    }
    return t(i, o);
  }
  return s(e);
}
function A1(e, t) {
  return e.reduce(
    (r, n, a) => {
      const s = t[a];
      return n != null && (r[s] = n), r;
    },
    {}
  );
}
function ti(e, t, r = !0) {
  const { utility: n, conditions: a } = t, { hasShorthand: s, resolveShorthand: i } = n;
  return ei(
    e,
    (o) => Array.isArray(o) ? A1(o, a.breakpoints.keys) : o,
    {
      stop: (o) => Array.isArray(o),
      getKey: r ? (o) => s ? i(o) : o : void 0
    }
  );
}
var F1 = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, I1 = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function O1(e) {
  const { utility: t, hash: r, conditions: n = F1 } = e, a = (i) => [t.prefix, i].filter(Boolean).join("-"), s = (i, o) => {
    let u;
    if (r) {
      const c = [...n.finalize(i), o];
      u = a(t.toHash(c, $1));
    } else
      u = [...n.finalize(i), a(o)].join(":");
    return u;
  };
  return pr(({ base: i, ...o } = {}) => {
    const u = Object.assign(o, i), c = ti(u, e), d = /* @__PURE__ */ new Set();
    return ei(c, (p, h) => {
      if (p == null)
        return;
      const f = x1(p), [y, ...m] = n.shift(h), b = S1(m), v = t.transform(y, C1(I1(p)));
      let C = s(b, v.className);
      f && (C = `${C}!`), d.add(C);
    }), Array.from(d).join(" ");
  });
}
function R1(...e) {
  return e.flat().filter((t) => Bt(t) && Object.keys(b1(t)).length > 0);
}
function P1(e) {
  function t(a) {
    const s = R1(...a);
    return s.length === 1 ? s : s.map((i) => ti(i, e));
  }
  function r(...a) {
    return Js(...t(a));
  }
  function n(...a) {
    return Object.assign({}, ...t(a));
  }
  return { mergeCss: pr(r), assignCss: n };
}
var k1 = /([A-Z])/g, D1 = /^ms-/, L1 = pr((e) => e.startsWith("--") ? e : e.replace(k1, "-$1").replace(D1, "-ms-").toLowerCase()), B1 = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${B1.split(",").join("|")}`;
const N1 = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", ri = new Set(N1.split(",")), U1 = /^@|&|&$/;
function xn(e) {
  return ri.has(e) || U1.test(e);
}
const M1 = /^_/, j1 = /&|@/;
function Q1(e) {
  return e.map((t) => ri.has(t) ? t.replace(M1, "") : j1.test(t) ? `[${Zs(t.trim())}]` : t);
}
function z1(e) {
  return e.sort((t, r) => {
    const n = xn(t), a = xn(r);
    return n && !a ? 1 : !n && a ? -1 : 0;
  });
}
const q1 = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle", ni = /* @__PURE__ */ new Map(), ai = /* @__PURE__ */ new Map();
q1.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [n, ...a] = r.split("/");
  ni.set(t, n), a.length && a.forEach((s) => {
    ai.set(s === "1" ? n : s, t);
  });
});
const Cn = (e) => ai.get(e) || e, si = {
  conditions: {
    shift: z1,
    finalize: Q1,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = Cn(e);
      return { className: `${ni.get(r) || L1(r)}_${Zs(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: Cn
  }
}, G1 = O1(si), ie = (...e) => G1(ii(...e));
ie.raw = (...e) => ii(...e);
const { mergeCss: ii, assignCss: ux } = P1(si), Se = {
  searchBarRow: ie({
    display: "flex !important",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1rem",
    paddingBlock: "0.5rem",
    minBlockSize: "3rem"
  }),
  facets: ie({
    flex: "0 0 auto"
  }),
  search: ie({
    flex: "1 1 auto",
    minInlineSize: "15rem"
  }),
  import: ie({
    flex: "0 0 auto"
  }),
  visuallyHidden: ie({
    srOnly: !0
  })
}, V1 = ({
  appId: e = "search"
}) => {
  const { showFacets: t, showImportModal: r } = ht().config;
  return /* @__PURE__ */ l.createElement(g, { id: `${e}.SearchBarRow` }, /* @__PURE__ */ l.createElement(
    "section",
    {
      className: Se.searchBarRow,
      "aria-label": "Records search and filters"
    },
    t && /* @__PURE__ */ l.createElement("div", { className: Se.facets }, /* @__PURE__ */ l.createElement(Ks, null)),
    /* @__PURE__ */ l.createElement("div", { className: Se.search }, /* @__PURE__ */ l.createElement(
      xv,
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
    ), /* @__PURE__ */ l.createElement("span", { className: Se.visuallyHidden }, "Type keywords to search through records. Press Enter to submit.")),
    r && /* @__PURE__ */ l.createElement("div", { className: Se.import }, /* @__PURE__ */ l.createElement(g1, null))
  ));
}, H1 = () => {
  const { config: e } = ht();
  return /* @__PURE__ */ l.createElement(H, null, /* @__PURE__ */ l.createElement(H.Row, { verticalAlign: "middle" }, /* @__PURE__ */ l.createElement(H.Column, { width: 4, textAlign: "left" }, /* @__PURE__ */ l.createElement(tv, { label: (t) => /* @__PURE__ */ l.createElement("div", null, t, " item(s)") })), /* @__PURE__ */ l.createElement(H.Column, { width: 8, textAlign: "center" }, /* @__PURE__ */ l.createElement(cv, { options: { size: "mini" } })), /* @__PURE__ */ l.createElement(H.Column, { width: 4, textAlign: "right" }, /* @__PURE__ */ l.createElement(
    _v,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ l.createElement("p", null, t, " results per page")
    }
  ))));
}, oi = ({
  config: e = {},
  overriddenComponents: t = {}
}) => {
  var s, i, o, u, c;
  const r = {
    ...V,
    ...e,
    initialQueryState: {
      ...V.initialQueryState,
      ...e.initialQueryState
    },
    layoutOptions: {
      ...V.layoutOptions,
      ...e.layoutOptions
    },
    paginationOptions: {
      ...V.paginationOptions,
      ...e.paginationOptions,
      resultsPerPage: ((s = e.paginationOptions) == null ? void 0 : s.resultsPerPage) || V.paginationOptions.resultsPerPage
    },
    searchApi: {
      ...V.searchApi,
      ...e.searchApi,
      axios: {
        ...V.searchApi.axios,
        ...(i = e.searchApi) == null ? void 0 : i.axios,
        headers: {
          ...V.searchApi.axios.headers,
          ...(u = (o = e.searchApi) == null ? void 0 : o.axios) == null ? void 0 : u.headers
        }
      },
      invenio: {
        ...V.searchApi.invenio,
        ...(c = e.searchApi) == null ? void 0 : c.invenio
      }
    },
    showFacets: e.showFacets ?? !0,
    showImportModal: e.showImportModal ?? !0,
    showSearchFooter: e.showSearchFooter ?? !0
  }, n = new la(r.searchApi), a = {
    [`${r.appId}.ResultsList.item`]: Vv,
    [`${r.appId}.ResultsList.container`]: Hv,
    [`${r.appId}.SearchFacets`]: Ks,
    ...t
  };
  return /* @__PURE__ */ l.createElement(ci.Provider, { value: a }, /* @__PURE__ */ l.createElement(
    Mb,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ l.createElement(kv, { config: r }, /* @__PURE__ */ l.createElement(V1, { appId: r.appId }), /* @__PURE__ */ l.createElement(yv, null, /* @__PURE__ */ l.createElement(av, null), /* @__PURE__ */ l.createElement(Ga, null)), r.showSearchFooter && /* @__PURE__ */ l.createElement(H1, null))
  ));
}, li = ({
  status: e,
  children: t,
  ...r
}) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ l.createElement(N, { color: "red", ...r }, /* @__PURE__ */ l.createElement(j, { name: "warning sign" }), t) : e === "success" || e === "validated" || e === "created" ? /* @__PURE__ */ l.createElement(N, { color: "green", ...r }, /* @__PURE__ */ l.createElement(j, { name: "check circle" }), t) : e === "importing" || e === "validating" ? /* @__PURE__ */ l.createElement(N, { color: "blue", ...r }, /* @__PURE__ */ l.createElement(j, { name: "spinner", loading: !0 }), t) : /* @__PURE__ */ l.createElement(N, { ...r }, t), Y1 = ({
  result: e,
  index: t
}) => e ? /* @__PURE__ */ l.createElement(Fn, { key: t }, /* @__PURE__ */ l.createElement(
  "div",
  {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "1rem"
    }
  },
  /* @__PURE__ */ l.createElement(
    "div",
    {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }
    },
    /* @__PURE__ */ l.createElement("div", null, /* @__PURE__ */ l.createElement(j, { name: "file alternate outline" }), e.src_data.title || "No title"),
    /* @__PURE__ */ l.createElement("div", { style: { display: "flex", gap: "0.5rem" } }, /* @__PURE__ */ l.createElement(N, { size: "mini" }, Ce(e.src_data["resource_type.id"])), new Date(e.created).toLocaleDateString())
  ),
  /* @__PURE__ */ l.createElement(li, { status: e.status }, Ce(e.status)),
  e.errors && e.errors.length > 0 ? /* @__PURE__ */ l.createElement("span", { style: { color: "red" } }, e.errors.length, " errors") : "No errors",
  /* @__PURE__ */ l.createElement(
    de,
    {
      text: "Actions",
      floating: !0,
      labeled: !0,
      className: "icon",
      options: [
        {
          key: "download",
          text: "Download",
          value: "download",
          disabled: !0
        }
      ]
    }
  )
)) : null, W1 = ({ taskId: e }) => {
  var a, s, i;
  const [t, r] = je(null), n = Ze(async () => {
    try {
      const o = await zv(e);
      r(o);
    } catch (o) {
      console.error("Error fetching task details:", o);
    }
  }, [e]);
  return Xe(() => {
    e && n();
  }, [e, n]), t ? /* @__PURE__ */ l.createElement(
    "div",
    {
      style: {
        paddingBlockStart: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }
    },
    /* @__PURE__ */ l.createElement(H, null, /* @__PURE__ */ l.createElement(H.Row, null, /* @__PURE__ */ l.createElement(H.Column, { width: 12 }, /* @__PURE__ */ l.createElement(_e, null, /* @__PURE__ */ l.createElement(_e, { as: "h2" }, t.title), t.description && /* @__PURE__ */ l.createElement(_e.Subheader, null, t.description))), /* @__PURE__ */ l.createElement(H.Column, { width: 4, textAlign: "right" }, t.status && /* @__PURE__ */ l.createElement(li, { size: "large", status: t.status }, Ce(t.status))))),
    /* @__PURE__ */ l.createElement(N.Group, null, ((a = t.records_status) == null ? void 0 : a.total_records) && /* @__PURE__ */ l.createElement(N, null, `${t.records_status.validated ?? 0}/${t.records_status.total_records} records validated`), ((s = t.records_status) == null ? void 0 : s.total_records) && /* @__PURE__ */ l.createElement(N, null, `${t.records_status.created ?? 0}/${t.records_status.total_records} records created`), ((i = t.records_status) == null ? void 0 : i.total_records) && /* @__PURE__ */ l.createElement(N, null, `${t.records_status.success ?? 0}/${t.records_status.total_records} records imported`)),
    /* @__PURE__ */ l.createElement("div", null, /* @__PURE__ */ l.createElement(_e, { as: "h3" }, "Task Records"), /* @__PURE__ */ l.createElement(
      oi,
      {
        config: {
          searchApi: {
            axios: {
              url: "/api/importer-records",
              withCredentials: !0
            }
          },
          showFacets: !1,
          showImportModal: !1
        },
        overriddenComponents: {
          "search.ResultsList.container": ({
            children: o
          }) => /* @__PURE__ */ l.createElement("div", { style: { paddingBlock: "1rem" } }, o),
          "search.ResultsList.item": Y1
        }
      }
    ))
  ) : /* @__PURE__ */ l.createElement("div", null, "Loading task details...");
}, cx = {
  Search: oi,
  TaskDetails: W1
}, dx = {
  CREATED: "created",
  VALIDATING: "validating",
  SERIALIZER_VALIDATION_FAILED: "serializer validation failed",
  VALIDATION_FAILED: "validation failed",
  VALIDATED: "validated",
  IMPORT_FAILED: "import failed",
  IMPORTED: "success"
}, px = {
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
  cx as BulkImporter,
  g1 as ImportModal,
  px as ImporterTaskStates,
  dx as InvenioImporterRecordStatus,
  oi as Search,
  W1 as TaskDetails,
  Y1 as TaskRecordItem,
  Ce as capitalizeFirstLetter,
  ox as createSearchApi,
  lx as createSearchApiConfig,
  Dv as formatDate,
  Nv as getCsrfToken
};
