import o, { Component as P, useContext as w, useEffect as rt, useCallback as T, useState as B, Fragment as Tn, createContext as fi, useRef as hi } from "react";
import v, { OverridableContext as gi } from "react-overridable";
import je from "axios";
import Ee from "qs";
import { connect as A, Provider as mi } from "react-redux";
import { Label as ae, Icon as C, Input as An, Button as D, List as de, Checkbox as In, Card as R, Segment as K, Header as Ie, Menu as Ae, Pagination as yi, Item as he, Loader as On, Dropdown as ie, Image as vi, TableRow as nt, TableCell as V, Table as Rn, TableHeader as Pn, TableHeaderCell as H, TableBody as Dn, Form as ye, Modal as se, ModalHeader as Ei, ModalContent as bi, ModalActions as Si, Grid as U, Statistic as bt, Progress as $i, Message as O, Popup as Er } from "semantic-ui-react";
import { combineReducers as _i, createStore as xi, applyMiddleware as Ci } from "redux";
import wi from "redux-thunk";
import Fi from "lodash";
import { TextField as Ti, SelectField as St, TextAreaField as Ai, BaseForm as Ii } from "react-invenio-forms";
import { useFormikContext as Oi } from "formik";
var Ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function I(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ri = Object.prototype;
function Pi(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ri;
  return e === r;
}
var at = Pi;
function Di(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var kn = Di, ki = kn, Li = ki(Object.keys, Object), Ui = Li, Ni = at, Bi = Ui, zi = Object.prototype, Mi = zi.hasOwnProperty;
function Qi(e) {
  if (!Ni(e))
    return Bi(e);
  var t = [];
  for (var r in Object(e))
    Mi.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Ln = Qi, ji = typeof Ne == "object" && Ne && Ne.Object === Object && Ne, Un = ji, qi = Un, Gi = typeof self == "object" && self && self.Object === Object && self, Vi = qi || Gi || Function("return this")(), Z = Vi, Hi = Z, Ki = Hi.Symbol, be = Ki, br = be, Nn = Object.prototype, Yi = Nn.hasOwnProperty, Wi = Nn.toString, we = br ? br.toStringTag : void 0;
function Zi(e) {
  var t = Yi.call(e, we), r = e[we];
  try {
    e[we] = void 0;
    var n = !0;
  } catch {
  }
  var a = Wi.call(e);
  return n && (t ? e[we] = r : delete e[we]), a;
}
var Ji = Zi, Xi = Object.prototype, eo = Xi.toString;
function to(e) {
  return eo.call(e);
}
var ro = to, Sr = be, no = Ji, ao = ro, so = "[object Null]", io = "[object Undefined]", $r = Sr ? Sr.toStringTag : void 0;
function oo(e) {
  return e == null ? e === void 0 ? io : so : $r && $r in Object(e) ? no(e) : ao(e);
}
var le = oo;
function lo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ne = lo;
const uo = /* @__PURE__ */ I(ne);
var co = le, po = ne, fo = "[object AsyncFunction]", ho = "[object Function]", go = "[object GeneratorFunction]", mo = "[object Proxy]";
function yo(e) {
  if (!po(e))
    return !1;
  var t = co(e);
  return t == ho || t == go || t == fo || t == mo;
}
var Bn = yo, vo = Z, Eo = vo["__core-js_shared__"], bo = Eo, $t = bo, _r = function() {
  var e = /[^.]+$/.exec($t && $t.keys && $t.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function So(e) {
  return !!_r && _r in e;
}
var $o = So, _o = Function.prototype, xo = _o.toString;
function Co(e) {
  if (e != null) {
    try {
      return xo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var zn = Co, wo = Bn, Fo = $o, To = ne, Ao = zn, Io = /[\\^$.*+?()[\]{}|]/g, Oo = /^\[object .+?Constructor\]$/, Ro = Function.prototype, Po = Object.prototype, Do = Ro.toString, ko = Po.hasOwnProperty, Lo = RegExp(
  "^" + Do.call(ko).replace(Io, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Uo(e) {
  if (!To(e) || Fo(e))
    return !1;
  var t = wo(e) ? Lo : Oo;
  return t.test(Ao(e));
}
var No = Uo;
function Bo(e, t) {
  return e == null ? void 0 : e[t];
}
var zo = Bo, Mo = No, Qo = zo;
function jo(e, t) {
  var r = Qo(e, t);
  return Mo(r) ? r : void 0;
}
var pe = jo, qo = pe, Go = Z, Vo = qo(Go, "DataView"), Ho = Vo, Ko = pe, Yo = Z, Wo = Ko(Yo, "Map"), qt = Wo, Zo = pe, Jo = Z, Xo = Zo(Jo, "Promise"), el = Xo, tl = pe, rl = Z, nl = tl(rl, "Set"), al = nl, sl = pe, il = Z, ol = sl(il, "WeakMap"), ll = ol, Ft = Ho, Tt = qt, At = el, It = al, Ot = ll, Mn = le, Se = zn, xr = "[object Map]", ul = "[object Object]", Cr = "[object Promise]", wr = "[object Set]", Fr = "[object WeakMap]", Tr = "[object DataView]", cl = Se(Ft), dl = Se(Tt), pl = Se(At), fl = Se(It), hl = Se(Ot), ue = Mn;
(Ft && ue(new Ft(new ArrayBuffer(1))) != Tr || Tt && ue(new Tt()) != xr || At && ue(At.resolve()) != Cr || It && ue(new It()) != wr || Ot && ue(new Ot()) != Fr) && (ue = function(e) {
  var t = Mn(e), r = t == ul ? e.constructor : void 0, n = r ? Se(r) : "";
  if (n)
    switch (n) {
      case cl:
        return Tr;
      case dl:
        return xr;
      case pl:
        return Cr;
      case fl:
        return wr;
      case hl:
        return Fr;
    }
  return t;
});
var Re = ue;
function gl(e) {
  return e != null && typeof e == "object";
}
var J = gl, ml = le, yl = J, vl = "[object Arguments]";
function El(e) {
  return yl(e) && ml(e) == vl;
}
var bl = El, Ar = bl, Sl = J, Qn = Object.prototype, $l = Qn.hasOwnProperty, _l = Qn.propertyIsEnumerable, xl = Ar(function() {
  return arguments;
}()) ? Ar : function(e) {
  return Sl(e) && $l.call(e, "callee") && !_l.call(e, "callee");
}, st = xl, Cl = Array.isArray, z = Cl;
const jn = /* @__PURE__ */ I(z);
var wl = 9007199254740991;
function Fl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wl;
}
var Gt = Fl, Tl = Bn, Al = Gt;
function Il(e) {
  return e != null && Al(e.length) && !Tl(e);
}
var it = Il, Ve = { exports: {} };
function Ol() {
  return !1;
}
var Rl = Ol;
Ve.exports;
(function(e, t) {
  var r = Z, n = Rl, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, l = i ? r.Buffer : void 0, u = l ? l.isBuffer : void 0, c = u || n;
  e.exports = c;
})(Ve, Ve.exports);
var ot = Ve.exports, Pl = le, Dl = Gt, kl = J, Ll = "[object Arguments]", Ul = "[object Array]", Nl = "[object Boolean]", Bl = "[object Date]", zl = "[object Error]", Ml = "[object Function]", Ql = "[object Map]", jl = "[object Number]", ql = "[object Object]", Gl = "[object RegExp]", Vl = "[object Set]", Hl = "[object String]", Kl = "[object WeakMap]", Yl = "[object ArrayBuffer]", Wl = "[object DataView]", Zl = "[object Float32Array]", Jl = "[object Float64Array]", Xl = "[object Int8Array]", eu = "[object Int16Array]", tu = "[object Int32Array]", ru = "[object Uint8Array]", nu = "[object Uint8ClampedArray]", au = "[object Uint16Array]", su = "[object Uint32Array]", x = {};
x[Zl] = x[Jl] = x[Xl] = x[eu] = x[tu] = x[ru] = x[nu] = x[au] = x[su] = !0;
x[Ll] = x[Ul] = x[Yl] = x[Nl] = x[Wl] = x[Bl] = x[zl] = x[Ml] = x[Ql] = x[jl] = x[ql] = x[Gl] = x[Vl] = x[Hl] = x[Kl] = !1;
function iu(e) {
  return kl(e) && Dl(e.length) && !!x[Pl(e)];
}
var ou = iu;
function lu(e) {
  return function(t) {
    return e(t);
  };
}
var Vt = lu, He = { exports: {} };
He.exports;
(function(e, t) {
  var r = Un, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, i = s && r.process, l = function() {
    try {
      var u = a && a.require && a.require("util").types;
      return u || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(He, He.exports);
var Ht = He.exports, uu = ou, cu = Vt, Ir = Ht, Or = Ir && Ir.isTypedArray, du = Or ? cu(Or) : uu, Kt = du, pu = Ln, fu = Re, hu = st, gu = z, mu = it, yu = ot, vu = at, Eu = Kt, bu = "[object Map]", Su = "[object Set]", $u = Object.prototype, _u = $u.hasOwnProperty;
function xu(e) {
  if (e == null)
    return !0;
  if (mu(e) && (gu(e) || typeof e == "string" || typeof e.splice == "function" || yu(e) || Eu(e) || hu(e)))
    return !e.length;
  var t = fu(e);
  if (t == bu || t == Su)
    return !e.size;
  if (vu(e))
    return !pu(e).length;
  for (var r in e)
    if (_u.call(e, r))
      return !1;
  return !0;
}
var Cu = xu;
const X = /* @__PURE__ */ I(Cu);
var wu = le, Fu = J, Tu = "[object Symbol]";
function Au(e) {
  return typeof e == "symbol" || Fu(e) && wu(e) == Tu;
}
var Yt = Au, Iu = z, Ou = Yt, Ru = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Pu = /^\w*$/;
function Du(e, t) {
  if (Iu(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ou(e) ? !0 : Pu.test(e) || !Ru.test(e) || t != null && e in Object(t);
}
var Wt = Du, ku = pe, Lu = ku(Object, "create"), lt = Lu, Rr = lt;
function Uu() {
  this.__data__ = Rr ? Rr(null) : {}, this.size = 0;
}
var Nu = Uu;
function Bu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var zu = Bu, Mu = lt, Qu = "__lodash_hash_undefined__", ju = Object.prototype, qu = ju.hasOwnProperty;
function Gu(e) {
  var t = this.__data__;
  if (Mu) {
    var r = t[e];
    return r === Qu ? void 0 : r;
  }
  return qu.call(t, e) ? t[e] : void 0;
}
var Vu = Gu, Hu = lt, Ku = Object.prototype, Yu = Ku.hasOwnProperty;
function Wu(e) {
  var t = this.__data__;
  return Hu ? t[e] !== void 0 : Yu.call(t, e);
}
var Zu = Wu, Ju = lt, Xu = "__lodash_hash_undefined__";
function ec(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ju && t === void 0 ? Xu : t, this;
}
var tc = ec, rc = Nu, nc = zu, ac = Vu, sc = Zu, ic = tc;
function $e(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
$e.prototype.clear = rc;
$e.prototype.delete = nc;
$e.prototype.get = ac;
$e.prototype.has = sc;
$e.prototype.set = ic;
var oc = $e;
function lc() {
  this.__data__ = [], this.size = 0;
}
var uc = lc;
function cc(e, t) {
  return e === t || e !== e && t !== t;
}
var ut = cc, dc = ut;
function pc(e, t) {
  for (var r = e.length; r--; )
    if (dc(e[r][0], t))
      return r;
  return -1;
}
var ct = pc, fc = ct, hc = Array.prototype, gc = hc.splice;
function mc(e) {
  var t = this.__data__, r = fc(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : gc.call(t, r, 1), --this.size, !0;
}
var yc = mc, vc = ct;
function Ec(e) {
  var t = this.__data__, r = vc(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var bc = Ec, Sc = ct;
function $c(e) {
  return Sc(this.__data__, e) > -1;
}
var _c = $c, xc = ct;
function Cc(e, t) {
  var r = this.__data__, n = xc(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var wc = Cc, Fc = uc, Tc = yc, Ac = bc, Ic = _c, Oc = wc;
function _e(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
_e.prototype.clear = Fc;
_e.prototype.delete = Tc;
_e.prototype.get = Ac;
_e.prototype.has = Ic;
_e.prototype.set = Oc;
var dt = _e, Pr = oc, Rc = dt, Pc = qt;
function Dc() {
  this.size = 0, this.__data__ = {
    hash: new Pr(),
    map: new (Pc || Rc)(),
    string: new Pr()
  };
}
var kc = Dc;
function Lc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Uc = Lc, Nc = Uc;
function Bc(e, t) {
  var r = e.__data__;
  return Nc(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var pt = Bc, zc = pt;
function Mc(e) {
  var t = zc(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Qc = Mc, jc = pt;
function qc(e) {
  return jc(this, e).get(e);
}
var Gc = qc, Vc = pt;
function Hc(e) {
  return Vc(this, e).has(e);
}
var Kc = Hc, Yc = pt;
function Wc(e, t) {
  var r = Yc(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Zc = Wc, Jc = kc, Xc = Qc, ed = Gc, td = Kc, rd = Zc;
function xe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
xe.prototype.clear = Jc;
xe.prototype.delete = Xc;
xe.prototype.get = ed;
xe.prototype.has = td;
xe.prototype.set = rd;
var Zt = xe, qn = Zt, nd = "Expected a function";
function Jt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(nd);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(a))
      return s.get(a);
    var i = e.apply(this, n);
    return r.cache = s.set(a, i) || s, i;
  };
  return r.cache = new (Jt.Cache || qn)(), r;
}
Jt.Cache = qn;
var ad = Jt, sd = ad, id = 500;
function od(e) {
  var t = sd(e, function(n) {
    return r.size === id && r.clear(), n;
  }), r = t.cache;
  return t;
}
var ld = od, ud = ld, cd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, dd = /\\(\\)?/g, pd = ud(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(cd, function(r, n, a, s) {
    t.push(a ? s.replace(dd, "$1") : n || r);
  }), t;
}), fd = pd;
function hd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var gd = hd, Dr = be, md = gd, yd = z, vd = Yt, Ed = 1 / 0, kr = Dr ? Dr.prototype : void 0, Lr = kr ? kr.toString : void 0;
function Gn(e) {
  if (typeof e == "string")
    return e;
  if (yd(e))
    return md(e, Gn) + "";
  if (vd(e))
    return Lr ? Lr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ed ? "-0" : t;
}
var bd = Gn, Sd = bd;
function $d(e) {
  return e == null ? "" : Sd(e);
}
var Pe = $d, _d = z, xd = Wt, Cd = fd, wd = Pe;
function Fd(e, t) {
  return _d(e) ? e : xd(e, t) ? [e] : Cd(wd(e));
}
var ft = Fd, Td = Yt, Ad = 1 / 0;
function Id(e) {
  if (typeof e == "string" || Td(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ad ? "-0" : t;
}
var De = Id, Od = ft, Rd = De;
function Pd(e, t) {
  t = Od(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Rd(t[r++])];
  return r && r == n ? e : void 0;
}
var Xt = Pd, Dd = Xt;
function kd(e, t, r) {
  var n = e == null ? void 0 : Dd(e, t);
  return n === void 0 ? r : n;
}
var Vn = kd;
const Fe = /* @__PURE__ */ I(Vn);
function Ld(e, t) {
  return e != null && t in Object(e);
}
var Ud = Ld, Nd = 9007199254740991, Bd = /^(?:0|[1-9]\d*)$/;
function zd(e, t) {
  var r = typeof e;
  return t = t ?? Nd, !!t && (r == "number" || r != "symbol" && Bd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ht = zd, Md = ft, Qd = st, jd = z, qd = ht, Gd = Gt, Vd = De;
function Hd(e, t, r) {
  t = Md(t, e);
  for (var n = -1, a = t.length, s = !1; ++n < a; ) {
    var i = Vd(t[n]);
    if (!(s = e != null && r(e, i)))
      break;
    e = e[i];
  }
  return s || ++n != a ? s : (a = e == null ? 0 : e.length, !!a && Gd(a) && qd(i, a) && (jd(e) || Qd(e)));
}
var Hn = Hd, Kd = Ud, Yd = Hn;
function Wd(e, t) {
  return e != null && Yd(e, t, Kd);
}
var er = Wd;
const Zd = /* @__PURE__ */ I(er);
var Jd = pe, Xd = function() {
  try {
    var e = Jd(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Kn = Xd, Ur = Kn;
function ep(e, t, r) {
  t == "__proto__" && Ur ? Ur(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var gt = ep, tp = gt, rp = ut, np = Object.prototype, ap = np.hasOwnProperty;
function sp(e, t, r) {
  var n = e[t];
  (!(ap.call(e, t) && rp(n, r)) || r === void 0 && !(t in e)) && tp(e, t, r);
}
var tr = sp, ip = tr, op = gt;
function lp(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var l = t[s], u = n ? n(r[l], e[l], l, r, e) : void 0;
    u === void 0 && (u = e[l]), a ? op(r, l, u) : ip(r, l, u);
  }
  return r;
}
var ke = lp;
function up(e) {
  return e;
}
var rr = up;
function cp(e, t, r) {
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
var dp = cp, pp = dp, Nr = Math.max;
function fp(e, t, r) {
  return t = Nr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, s = Nr(n.length - t, 0), i = Array(s); ++a < s; )
      i[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(i), pp(e, this, l);
  };
}
var Yn = fp;
function hp(e) {
  return function() {
    return e;
  };
}
var gp = hp, mp = gp, Br = Kn, yp = rr, vp = Br ? function(e, t) {
  return Br(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: mp(t),
    writable: !0
  });
} : yp, Ep = vp, bp = 800, Sp = 16, $p = Date.now;
function _p(e) {
  var t = 0, r = 0;
  return function() {
    var n = $p(), a = Sp - (n - r);
    if (r = n, a > 0) {
      if (++t >= bp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var xp = _p, Cp = Ep, wp = xp, Fp = wp(Cp), Wn = Fp, Tp = rr, Ap = Yn, Ip = Wn;
function Op(e, t) {
  return Ip(Ap(e, t, Tp), e + "");
}
var Rp = Op, Pp = ut, Dp = it, kp = ht, Lp = ne;
function Up(e, t, r) {
  if (!Lp(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Dp(r) && kp(t, r.length) : n == "string" && t in r) ? Pp(r[t], e) : !1;
}
var Np = Up, Bp = Rp, zp = Np;
function Mp(e) {
  return Bp(function(t, r) {
    var n = -1, a = r.length, s = a > 1 ? r[a - 1] : void 0, i = a > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, i && zp(r[0], r[1], i) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++n < a; ) {
      var l = r[n];
      l && e(t, l, n, s);
    }
    return t;
  });
}
var Qp = Mp;
function jp(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var qp = jp, Gp = qp, Vp = st, Hp = z, Kp = ot, Yp = ht, Wp = Kt, Zp = Object.prototype, Jp = Zp.hasOwnProperty;
function Xp(e, t) {
  var r = Hp(e), n = !r && Vp(e), a = !r && !n && Kp(e), s = !r && !n && !a && Wp(e), i = r || n || a || s, l = i ? Gp(e.length, String) : [], u = l.length;
  for (var c in e)
    (t || Jp.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Yp(c, u))) && l.push(c);
  return l;
}
var Zn = Xp;
function ef(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var tf = ef, rf = ne, nf = at, af = tf, sf = Object.prototype, of = sf.hasOwnProperty;
function lf(e) {
  if (!rf(e))
    return af(e);
  var t = nf(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !of.call(e, n)) || r.push(n);
  return r;
}
var uf = lf, cf = Zn, df = uf, pf = it;
function ff(e) {
  return pf(e) ? cf(e, !0) : df(e);
}
var mt = ff, hf = ke, gf = Qp, mf = mt, yf = gf(function(e, t) {
  hf(t, mf(t), e);
}), vf = yf, Ef = vf;
const Ke = /* @__PURE__ */ I(Ef);
function bf(e) {
  return e && e.length ? e[0] : void 0;
}
var Sf = bf;
const $f = /* @__PURE__ */ I(Sf);
var _f = tr, xf = ft, Cf = ht, zr = ne, wf = De;
function Ff(e, t, r, n) {
  if (!zr(e))
    return e;
  t = xf(t, e);
  for (var a = -1, s = t.length, i = s - 1, l = e; l != null && ++a < s; ) {
    var u = wf(t[a]), c = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != i) {
      var p = l[u];
      c = n ? n(p, u, l) : void 0, c === void 0 && (c = zr(p) ? p : Cf(t[a + 1]) ? [] : {});
    }
    _f(l, u, c), l = l[u];
  }
  return e;
}
var Tf = Ff, Af = Xt, If = Tf, Of = ft;
function Rf(e, t, r) {
  for (var n = -1, a = t.length, s = {}; ++n < a; ) {
    var i = t[n], l = Af(e, i);
    r(l, i) && If(s, Of(i, e), l);
  }
  return s;
}
var Pf = Rf, Df = Pf, kf = er;
function Lf(e, t) {
  return Df(e, t, function(r, n) {
    return kf(e, n);
  });
}
var Uf = Lf;
function Nf(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var nr = Nf, Mr = be, Bf = st, zf = z, Qr = Mr ? Mr.isConcatSpreadable : void 0;
function Mf(e) {
  return zf(e) || Bf(e) || !!(Qr && e && e[Qr]);
}
var Qf = Mf, jf = nr, qf = Qf;
function Jn(e, t, r, n, a) {
  var s = -1, i = e.length;
  for (r || (r = qf), a || (a = []); ++s < i; ) {
    var l = e[s];
    t > 0 && r(l) ? t > 1 ? Jn(l, t - 1, r, n, a) : jf(a, l) : n || (a[a.length] = l);
  }
  return a;
}
var Gf = Jn, Vf = Gf;
function Hf(e) {
  var t = e == null ? 0 : e.length;
  return t ? Vf(e, 1) : [];
}
var Kf = Hf, Yf = Kf, Wf = Yn, Zf = Wn;
function Jf(e) {
  return Zf(Wf(e, void 0, Yf), e + "");
}
var Xf = Jf, eh = Uf, th = Xf, rh = th(function(e, t) {
  return e == null ? {} : eh(e, t);
}), nh = rh;
const ah = /* @__PURE__ */ I(nh);
var sh = dt;
function ih() {
  this.__data__ = new sh(), this.size = 0;
}
var oh = ih;
function lh(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var uh = lh;
function ch(e) {
  return this.__data__.get(e);
}
var dh = ch;
function ph(e) {
  return this.__data__.has(e);
}
var fh = ph, hh = dt, gh = qt, mh = Zt, yh = 200;
function vh(e, t) {
  var r = this.__data__;
  if (r instanceof hh) {
    var n = r.__data__;
    if (!gh || n.length < yh - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new mh(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Eh = vh, bh = dt, Sh = oh, $h = uh, _h = dh, xh = fh, Ch = Eh;
function Ce(e) {
  var t = this.__data__ = new bh(e);
  this.size = t.size;
}
Ce.prototype.clear = Sh;
Ce.prototype.delete = $h;
Ce.prototype.get = _h;
Ce.prototype.has = xh;
Ce.prototype.set = Ch;
var ar = Ce;
function wh(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Fh = wh, Th = Zn, Ah = Ln, Ih = it;
function Oh(e) {
  return Ih(e) ? Th(e) : Ah(e);
}
var Le = Oh, Rh = ke, Ph = Le;
function Dh(e, t) {
  return e && Rh(t, Ph(t), e);
}
var kh = Dh, Lh = ke, Uh = mt;
function Nh(e, t) {
  return e && Lh(t, Uh(t), e);
}
var Bh = Nh, Ye = { exports: {} };
Ye.exports;
(function(e, t) {
  var r = Z, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, i = s ? r.Buffer : void 0, l = i ? i.allocUnsafe : void 0;
  function u(c, p) {
    if (p)
      return c.slice();
    var d = c.length, f = l ? l(d) : new c.constructor(d);
    return c.copy(f), f;
  }
  e.exports = u;
})(Ye, Ye.exports);
var zh = Ye.exports;
function Mh(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Qh = Mh;
function jh(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[a++] = i);
  }
  return s;
}
var qh = jh;
function Gh() {
  return [];
}
var Xn = Gh, Vh = qh, Hh = Xn, Kh = Object.prototype, Yh = Kh.propertyIsEnumerable, jr = Object.getOwnPropertySymbols, Wh = jr ? function(e) {
  return e == null ? [] : (e = Object(e), Vh(jr(e), function(t) {
    return Yh.call(e, t);
  }));
} : Hh, sr = Wh, Zh = ke, Jh = sr;
function Xh(e, t) {
  return Zh(e, Jh(e), t);
}
var eg = Xh, tg = kn, rg = tg(Object.getPrototypeOf, Object), ea = rg, ng = nr, ag = ea, sg = sr, ig = Xn, og = Object.getOwnPropertySymbols, lg = og ? function(e) {
  for (var t = []; e; )
    ng(t, sg(e)), e = ag(e);
  return t;
} : ig, ta = lg, ug = ke, cg = ta;
function dg(e, t) {
  return ug(e, cg(e), t);
}
var pg = dg, fg = nr, hg = z;
function gg(e, t, r) {
  var n = t(e);
  return hg(e) ? n : fg(n, r(e));
}
var ra = gg, mg = ra, yg = sr, vg = Le;
function Eg(e) {
  return mg(e, vg, yg);
}
var na = Eg, bg = ra, Sg = ta, $g = mt;
function _g(e) {
  return bg(e, $g, Sg);
}
var xg = _g, Cg = Object.prototype, wg = Cg.hasOwnProperty;
function Fg(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && wg.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Tg = Fg, Ag = Z, Ig = Ag.Uint8Array, aa = Ig, qr = aa;
function Og(e) {
  var t = new e.constructor(e.byteLength);
  return new qr(t).set(new qr(e)), t;
}
var ir = Og, Rg = ir;
function Pg(e, t) {
  var r = t ? Rg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Dg = Pg, kg = /\w*$/;
function Lg(e) {
  var t = new e.constructor(e.source, kg.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Ug = Lg, Gr = be, Vr = Gr ? Gr.prototype : void 0, Hr = Vr ? Vr.valueOf : void 0;
function Ng(e) {
  return Hr ? Object(Hr.call(e)) : {};
}
var Bg = Ng, zg = ir;
function Mg(e, t) {
  var r = t ? zg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Qg = Mg, jg = ir, qg = Dg, Gg = Ug, Vg = Bg, Hg = Qg, Kg = "[object Boolean]", Yg = "[object Date]", Wg = "[object Map]", Zg = "[object Number]", Jg = "[object RegExp]", Xg = "[object Set]", em = "[object String]", tm = "[object Symbol]", rm = "[object ArrayBuffer]", nm = "[object DataView]", am = "[object Float32Array]", sm = "[object Float64Array]", im = "[object Int8Array]", om = "[object Int16Array]", lm = "[object Int32Array]", um = "[object Uint8Array]", cm = "[object Uint8ClampedArray]", dm = "[object Uint16Array]", pm = "[object Uint32Array]";
function fm(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case rm:
      return jg(e);
    case Kg:
    case Yg:
      return new n(+e);
    case nm:
      return qg(e, r);
    case am:
    case sm:
    case im:
    case om:
    case lm:
    case um:
    case cm:
    case dm:
    case pm:
      return Hg(e, r);
    case Wg:
      return new n();
    case Zg:
    case em:
      return new n(e);
    case Jg:
      return Gg(e);
    case Xg:
      return new n();
    case tm:
      return Vg(e);
  }
}
var hm = fm, gm = ne, Kr = Object.create, mm = function() {
  function e() {
  }
  return function(t) {
    if (!gm(t))
      return {};
    if (Kr)
      return Kr(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), ym = mm, vm = ym, Em = ea, bm = at;
function Sm(e) {
  return typeof e.constructor == "function" && !bm(e) ? vm(Em(e)) : {};
}
var $m = Sm, _m = Re, xm = J, Cm = "[object Map]";
function wm(e) {
  return xm(e) && _m(e) == Cm;
}
var Fm = wm, Tm = Fm, Am = Vt, Yr = Ht, Wr = Yr && Yr.isMap, Im = Wr ? Am(Wr) : Tm, Om = Im, Rm = Re, Pm = J, Dm = "[object Set]";
function km(e) {
  return Pm(e) && Rm(e) == Dm;
}
var Lm = km, Um = Lm, Nm = Vt, Zr = Ht, Jr = Zr && Zr.isSet, Bm = Jr ? Nm(Jr) : Um, zm = Bm, Mm = ar, Qm = Fh, jm = tr, qm = kh, Gm = Bh, Vm = zh, Hm = Qh, Km = eg, Ym = pg, Wm = na, Zm = xg, Jm = Re, Xm = Tg, ey = hm, ty = $m, ry = z, ny = ot, ay = Om, sy = ne, iy = zm, oy = Le, ly = mt, uy = 1, cy = 2, dy = 4, sa = "[object Arguments]", py = "[object Array]", fy = "[object Boolean]", hy = "[object Date]", gy = "[object Error]", ia = "[object Function]", my = "[object GeneratorFunction]", yy = "[object Map]", vy = "[object Number]", oa = "[object Object]", Ey = "[object RegExp]", by = "[object Set]", Sy = "[object String]", $y = "[object Symbol]", _y = "[object WeakMap]", xy = "[object ArrayBuffer]", Cy = "[object DataView]", wy = "[object Float32Array]", Fy = "[object Float64Array]", Ty = "[object Int8Array]", Ay = "[object Int16Array]", Iy = "[object Int32Array]", Oy = "[object Uint8Array]", Ry = "[object Uint8ClampedArray]", Py = "[object Uint16Array]", Dy = "[object Uint32Array]", $ = {};
$[sa] = $[py] = $[xy] = $[Cy] = $[fy] = $[hy] = $[wy] = $[Fy] = $[Ty] = $[Ay] = $[Iy] = $[yy] = $[vy] = $[oa] = $[Ey] = $[by] = $[Sy] = $[$y] = $[Oy] = $[Ry] = $[Py] = $[Dy] = !0;
$[gy] = $[ia] = $[_y] = !1;
function qe(e, t, r, n, a, s) {
  var i, l = t & uy, u = t & cy, c = t & dy;
  if (r && (i = a ? r(e, n, a, s) : r(e)), i !== void 0)
    return i;
  if (!sy(e))
    return e;
  var p = ry(e);
  if (p) {
    if (i = Xm(e), !l)
      return Hm(e, i);
  } else {
    var d = Jm(e), f = d == ia || d == my;
    if (ny(e))
      return Vm(e, l);
    if (d == oa || d == sa || f && !a) {
      if (i = u || f ? {} : ty(e), !l)
        return u ? Ym(e, Gm(i, e)) : Km(e, qm(i, e));
    } else {
      if (!$[d])
        return a ? e : {};
      i = ey(e, d, l);
    }
  }
  s || (s = new Mm());
  var h = s.get(e);
  if (h)
    return h;
  s.set(e, i), iy(e) ? e.forEach(function(E) {
    i.add(qe(E, t, r, E, e, s));
  }) : ay(e) && e.forEach(function(E, g) {
    i.set(g, qe(E, t, r, g, e, s));
  });
  var m = c ? u ? Zm : Wm : u ? ly : oy, y = p ? void 0 : m(e);
  return Qm(y || e, function(E, g) {
    y && (g = E, E = e[g]), jm(i, g, qe(E, t, r, g, e, s));
  }), i;
}
var ky = qe, Ly = ky, Uy = 1, Ny = 4;
function By(e) {
  return Ly(e, Uy | Ny);
}
var zy = By;
const ve = /* @__PURE__ */ I(zy);
var My = le, Qy = J, jy = "[object Boolean]";
function qy(e) {
  return e === !0 || e === !1 || Qy(e) && My(e) == jy;
}
var Gy = qy;
const Vy = /* @__PURE__ */ I(Gy);
var Hy = le, Ky = z, Yy = J, Wy = "[object String]";
function Zy(e) {
  return typeof e == "string" || !Ky(e) && Yy(e) && Hy(e) == Wy;
}
var Jy = Zy;
const Xy = /* @__PURE__ */ I(Jy);
var ev = le, tv = J, rv = "[object Number]";
function nv(e) {
  return typeof e == "number" || tv(e) && ev(e) == rv;
}
var av = nv;
const sv = /* @__PURE__ */ I(av);
function or() {
}
or.prototype = new Error();
class Xr {
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
      filters: l,
      hiddenParams: u
    } = t;
    let c = {};
    r !== null && (c.q = r), n !== null && (c.sort = n, a !== null && (c.sort = a === "desc" ? `-${n}` : n)), s > 0 && (c.page = s), i > 0 && (c.size = i), X(u) || Ke(c, this._addFilters(u));
    const p = this._addFilters(l);
    return Ke(c, p), Ee.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class iv {
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
function Be(e, t) {
  return e.indexOf(t) === 0 && (e.length === t.length || e.indexOf(t + "&") === 0);
}
function _t(e) {
  return Ee.stringify({
    q: e
  });
}
function ov(e) {
  return Ee.parse(e).q;
}
function la(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = la(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function en(e, t) {
  const r = _t(e), n = t.map((i) => _t(i));
  let a = !1;
  const s = n.filter((i) => {
    const l = Be(i, r), u = Be(r, i);
    return l && !a && (a = !0), !l && !u;
  });
  if (!a)
    s.push(r);
  else if (e.length === 3) {
    const l = la(e), u = _t(l), c = s.some((p) => {
      const d = Be(p, u), f = Be(u, p);
      return d || f;
    });
    (X(s) || !c) && s.push(u);
  }
  return s.map((i) => ov(i));
}
const ua = (e, t) => {
  if (X(e))
    return;
  if (!jn($f(e)))
    return en(e, t);
  let r = t;
  for (const n of e)
    r = en(n, r);
  return r;
}, ca = (e, t, r) => {
  let n = ah(t, r);
  return X(n.filters) || (n.filters = ua(n.filters, e.filters)), n;
}, We = {
  queryString: "",
  suggestions: [],
  sortBy: null,
  sortOrder: null,
  page: -1,
  size: -1,
  filters: [],
  hiddenParams: [],
  layout: null
}, da = Object.keys(We), lv = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, uv = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class cv {
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
      filters: l,
      hiddenParams: u
    } = t;
    let c = {};
    r !== null && (c.q = r), n !== null && (c.sort = n, a !== null && (c.sort = a === "desc" ? `-${n}` : n)), s > 0 && (c.page = s), i > 0 && (c.size = i), X(u) || Ke(c, this._addFilters(u));
    const p = this._addFilters(l);
    return Ke(c, p), Ee.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class pa {
  constructor(t) {
    this.axiosConfig = Fe(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = je.CancelToken;
  }
  validateAxiosConfig() {
    if (!Zd(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = Fe(t, "interceptors.request", void 0), this.responseInterceptor = Fe(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: cv,
      InvenioRequestSerializer: Xr
    };
    return typeof t == "string" ? r[t] : t || Xr;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), a = Fe(t, "invenio.responseSerializer", iv);
    this.requestSerializer = new n(), this.responseSerializer = new a();
  }
  initAxios() {
    const t = {
      paramsSerializer: this.requestSerializer.serialize,
      ...this.axiosConfig
    };
    this.http = je.create(t), this.addInterceptors();
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
      const n = ca(t, r.extras, da);
      return X(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw je.isCancel(r) ? new or() : r;
    }
  }
}
class dv {
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
          return sv(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const a = jn(n) ? n : [n], s = ":", i = t.urlFilterSeparator, l = `[^\\${s}\\${i}]*`, u = `${l}\\${s}${l}`, c = `${u}(\\${i}${u})*`, p = new RegExp(`^${c}$`);
          return a.every((d) => String(d).match(p));
        }
        default:
          return !1;
      }
    };
  }
}
const pv = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, tn = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class fv {
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
    const r = Ee.parse(t, {
      ignoreQueryPrefix: !0
    }), n = {};
    return Object.entries(r).forEach((a) => {
      const s = a[0], i = a[1];
      n[s] = this._convertValue(s, i);
    }), n;
  }
}
class hv {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (this._filterListToString = (r) => {
      const n = r.length === 3 ? this.urlFilterSeparator.concat(this._filterListToString(r[2])) : "";
      return `${r[0]}:${r[1]}${n}`;
    }, this._mapQueryStateToUrlParams = (r) => {
      const n = {};
      Object.keys(r).filter((s) => s in this.urlParamsMapping).filter((s) => (s === "page" || s === "size") && r[s] <= 0 || s === "hiddenParams" ? !1 : r[s] !== null).forEach((s) => {
        const i = this.urlParamsMapping[s];
        s === "filters" ? n[i] = r[s].map((l) => this._filterListToString(l)) : n[i] = r[s];
      });
      const a = (s, i) => {
        const l = "q";
        return s === l ? -1 : i === l ? 1 : s.localeCompare(i);
      };
      return Ee.stringify(n, {
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
      const i = r.slice(0, s), l = a ? n : r.length, u = r.slice(s + 1, l);
      let c = [i, u];
      if (a) {
        const p = r.slice(n + 1, r.length);
        c.push(this._filterStringToList(p));
      }
      return c;
    }, this._mapUrlParamsToQueryState = (r) => {
      const n = {};
      return Object.keys(r).forEach((a) => {
        const s = this.fromUrlParamsMapping[a];
        this.urlParamValidator.isValid(this, s, r[a]) ? (n[s] = r[a], s === "filters" && (Array.isArray(r[a]) || (r[a] = [r[a]]), n[s] = r[a].map((i) => this._filterStringToList(i)))) : console.warn(`URL parameter '${a}' with value '${r[a]}' is incorrect and was ignored.`);
      }), n;
    }, this._mergeParamsIntoState = (r, n) => {
      const a = ve(n);
      return Object.keys(r).forEach((s) => {
        a[s] = r[s];
      }), a;
    }, this.urlParamsMapping = uo(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !Vy(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !Xy(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new dv(), this.urlParser = t.urlParser || new fv(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), a = this._mergeParamsIntoState(n, t), s = this._mapQueryStateToUrlParams(a);
    return tn(s), a;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      pv(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    tn(r);
  }
}
const gv = "SET_QUERY_COMPONENT_INITIAL_STATE", fa = "SET_QUERY_STRING", lr = "SET_QUERY_SORTING", ur = "SET_QUERY_SORT_BY", cr = "SET_QUERY_SORT_ORDER", Ue = "SET_QUERY_STATE", ha = "SET_QUERY_PAGINATION_PAGE", ga = "SET_QUERY_PAGINATION_SIZE", ma = "SET_QUERY_FILTERS", ya = "SET_QUERY_SUGGESTIONS", va = "SET_SUGGESTION_STRING", Ea = "CLEAR_QUERY_SUGGESTIONS", ba = "RESULTS_LOADING", Sa = "RESULTS_FETCH_SUCCESS", $a = "RESULTS_FETCH_ERROR", Rt = "RESULTS_UPDATE_LAYOUT", _a = "RESET_QUERY", mv = (e) => (t) => {
  e && t(Y({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, xa = (e) => (t) => {
  t({
    type: Ue,
    payload: e
  }), t(Y());
}, Ca = (e) => (t) => {
  t({
    type: fa,
    payload: e
  }), t(Y());
}, yv = (e, t) => (r) => {
  r({
    type: lr,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(Y());
}, vv = (e) => (t) => {
  t({
    type: ur,
    payload: e
  }), t(Y());
}, Ev = (e) => (t) => {
  t({
    type: cr,
    payload: e
  }), t(Y());
}, bv = (e) => (t) => {
  t({
    type: ha,
    payload: e
  }), t(Y());
}, Sv = (e) => (t) => {
  t({
    type: ga,
    payload: e
  }), t(Y());
}, dr = (e) => (t) => {
  t({
    type: ma,
    payload: e
  }), t(Y());
}, $v = (e) => async (t, r, n) => {
  const a = n.urlHandlerApi;
  if (a) {
    await t({
      type: Rt,
      payload: e
    });
    const s = r().query;
    a.set(s);
  } else
    t({
      type: Rt,
      payload: e
    });
}, _v = () => (e, t, r) => {
  e({
    type: _a,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(Y());
}, xv = (e, t, r, n) => {
  const a = t.urlHandlerApi;
  a && (r ? a.replace(e) : n && a.set(e));
}, Cv = (e, t, r, n) => {
  const a = r().query;
  t({
    type: Ue,
    payload: {
      ...a,
      ...e.newQueryState
    }
  });
  const s = ve(r().query), i = n.urlHandlerApi;
  return i && i.replace(s), delete e.newStateQuery, e;
}, wv = (e, t, r, n) => {
  function a(l, u, c, p) {
    l.queryString === "" ? (l.sortBy = c.defaultSortingOnEmptyQueryString.sortBy, l.sortOrder = c.defaultSortingOnEmptyQueryString.sortOrder) : (l.sortBy = u.initialSortBy, l.sortOrder = u.initialSortOrder), p({
      type: Ue,
      payload: l
    });
  }
  function s(l, u, c, p) {
    u.hasUserChangedSorting || a(l, u, c, p);
  }
  !X(r.defaultSortingOnEmptyQueryString) && s(e, t, r, n);
}, Y = function() {
  let {
    shouldUpdateUrlQueryString: e = !0,
    shouldReplaceUrlQueryString: t = !1
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return async (r, n, a) => {
    const s = n().app;
    let i = ve(n().query);
    wv(i, s, a, r), i = ve(n().query), xv(i, a, t, e), r({
      type: ba
    });
    try {
      let u = await a.searchApi.search(i);
      "newQueryState" in u && (u = Cv(ve(u), r, n, a)), r({
        type: Sa,
        payload: {
          aggregations: u.aggregations,
          hits: u.hits,
          total: u.total
        }
      });
    } catch (l) {
      if (l instanceof or) {
        console.debug(l);
        return;
      } else
        console.error(l), r({
          type: $a,
          payload: {
            error: l
          }
        });
    }
  };
}, Fv = (e) => (t) => {
  t({
    type: va,
    payload: e
  }), t(Tv());
}, Tv = () => async (e, t, r) => {
  const n = ve(t().query), a = r.suggestionApi;
  try {
    const s = await a.search(n);
    e({
      type: ya,
      payload: {
        suggestions: s.suggestions
      }
    });
  } catch (s) {
    console.error("Could not load suggestions due to: " + s);
  }
}, Av = () => (e) => {
  e({
    type: Ea,
    payload: {
      suggestions: []
    }
  });
}, Iv = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: Ue,
      payload: n
    }), e(Y({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, _ = /* @__PURE__ */ o.createContext({}), Ov = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
    case lr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case ur:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case cr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    default:
      return e;
  }
}, Rv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case fa:
      return {
        ...e,
        queryString: t.payload,
        page: 1
      };
    case lr:
      return {
        ...e,
        sortBy: t.payload.sortBy,
        sortOrder: t.payload.sortOrder,
        _sortUserChanged: !0,
        page: 1
      };
    case ur:
      return {
        ...e,
        sortBy: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case cr:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case ha:
      return {
        ...e,
        page: t.payload
      };
    case ga:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case ma:
      return {
        ...e,
        page: 1,
        filters: ua(t.payload, e.filters)
      };
    case ya:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case Ea:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case va:
      return {
        ...e,
        suggestionString: t.payload
      };
    case gv:
      return {
        ...e,
        ...t.payload
      };
    case Ue:
      return {
        ...e,
        ...We,
        ...ca(We, t.payload, da)
      };
    case Rt:
      return {
        ...e,
        layout: t.payload
      };
    case _a:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, Pv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case ba:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case Sa:
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
    case $a:
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
var Dv = _i({
  app: Ov,
  query: Rv,
  results: Pv
});
function rn(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: a,
    sortOrder: s
  } = t;
  return r !== a || n !== s;
}
function kv(e, t, r) {
  const n = rn(r, t), a = !X(e.defaultSortingOnEmptyQueryString);
  let s = !1;
  return a && (s = rn(r, e.defaultSortingOnEmptyQueryString)), n && s;
}
function Lv(e) {
  const t = {
    ...We,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = kv(e, t, r), a = {
    ...uv,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, s = {
    ...lv,
    loading: e.searchOnInit
  };
  return {
    app: a,
    query: r,
    results: s
  };
}
function Uv(e) {
  const t = Lv(e);
  return xi(Dv, t, Ci(wi.withExtraArgument(e)));
}
function nn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class pr extends P {
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
pr.defaultProps = {
  searchOnInit: !0,
  eventListenerEnabled: !1
};
pr.contextType = _;
var Nv = v.component("Bootstrap", pr);
const Bv = (e) => ({
  onAppInitialized: (t) => e(mv(t)),
  updateQueryState: (t) => e(xa(t)),
  searchOnUrlQueryStringChanged: () => e(Iv())
}), zv = A(null, Bv)(Nv);
class fr extends P {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new hv(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = Uv(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
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
      buildUID: (u, c) => nn(u, c, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, l = nn("ReactSearchKit.children", a, t);
    return /* @__PURE__ */ o.createElement(_.Provider, {
      value: i
    }, /* @__PURE__ */ o.createElement(mi, {
      store: this.store
    }, /* @__PURE__ */ o.createElement(zv, {
      searchOnInit: s,
      eventListenerEnabled: n
    }, /* @__PURE__ */ o.createElement(v, {
      id: l
    }, r))));
  }
}
fr.defaultProps = {
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
fr.contextType = _;
var Mv = v.component("ReactSearchKit", fr);
class wa extends P {
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
    return !!t.length && /* @__PURE__ */ o.createElement(Fa, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
wa.defaultProps = {
  overridableId: ""
};
const Fa = (e) => {
  let {
    overridableId: t,
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  } = e;
  const {
    buildUID: s
  } = w(_);
  return /* @__PURE__ */ o.createElement(v, {
    id: s("ActiveFilters.element", t),
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  }, /* @__PURE__ */ o.createElement(o.Fragment, null, r.map((i, l) => {
    const {
      label: u,
      activeFilter: c
    } = a(i);
    return (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ o.createElement(ae, {
        image: !0,
        key: l,
        onClick: () => n(c)
      }, u, /* @__PURE__ */ o.createElement(C, {
        name: "delete"
      }))
    );
  })));
};
Fa.defaultProps = {
  overridableId: ""
};
var Qv = v.component("ActiveFilters", wa);
const jv = (e) => ({
  updateQueryFilters: (t) => e(dr(t))
});
A((e) => ({
  filters: e.query.filters
}), jv)(Qv);
function qv(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var Gv = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
qv(Gv);
class Ta extends P {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? Fi.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ o.createElement(Hv, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
Ta.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const Vv = (e) => /* @__PURE__ */ o.createElement(Ta, Object.assign({
  key: e.queryString
}, e)), Hv = (e) => {
  let {
    overridableId: t,
    placeholder: r,
    queryString: n,
    querySuggestions: a,
    onInputChange: s,
    executeSearch: i,
    ...l
  } = e;
  const {
    buildUID: u
  } = w(_), c = (d, f) => {
    i();
  }, p = (d, f) => {
    d.key === "Enter" && i();
  };
  return /* @__PURE__ */ o.createElement(v, Object.assign({
    id: u("AutocompleteSearchBar.element", t)
  }, l), /* @__PURE__ */ o.createElement("div", {
    className: "AutoCompleteText"
  }, /* @__PURE__ */ o.createElement(An, {
    action: {
      content: "Search",
      onClick: c
    },
    fluid: !0,
    placeholder: r,
    onChange: (d, f) => {
      let {
        value: h
      } = f;
      s(h);
    },
    value: n,
    onKeyPress: p
  }), /* @__PURE__ */ o.createElement(Kv, {
    querySuggestions: a,
    overridableId: t
  })));
}, Kv = (e) => {
  let {
    overridableId: t,
    ...r
  } = e;
  const {
    querySuggestions: n
  } = r, {
    buildUID: a
  } = w(_), s = async (i) => {
    await (void 0).setState({
      currentValue: i
    }), (void 0).clearSuggestions(), (void 0).executeSearch();
  };
  return n.length === 0 ? null : /* @__PURE__ */ o.createElement(v, Object.assign({
    id: a("AutocompleteSearchBar.suggestions", t)
  }, r), /* @__PURE__ */ o.createElement("ul", null, n.map((i) => /* @__PURE__ */ o.createElement(D, {
    as: "li",
    onClick: () => s(i),
    key: i
  }, i))));
};
var Yv = v.component("AutocompleteSearchBar", Vv);
const Wv = (e) => ({
  updateQueryString: (t) => e(Ca(t)),
  updateSuggestions: (t) => e(Fv(t)),
  clearSuggestions: () => e(Av())
}), Zv = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
A(Zv, Wv)(Yv);
class yt extends P {
  constructor(t) {
    super(t), this._isSelected = (r, n, a) => a.filter((s) => s[0] === r && s[1] === n).length >= 1, this.getChildAggCmps = (r, n) => {
      const a = this.childAgg && this.childAgg.aggName in r;
      let s = [];
      if (a) {
        const i = r[this.childAgg.aggName].buckets;
        n.forEach((u) => {
          const c = u[0] === this.aggName, p = u[1] === r.key, d = u.length === 3;
          c && p && d && s.push(u[2]);
        });
        const l = (u) => {
          this.onFilterClicked([this.aggName, r.key, u]);
        };
        return /* @__PURE__ */ o.createElement(yt, {
          buckets: i,
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
      const i = s.key_as_string ? s.key_as_string : s.key, l = this._isSelected(this.aggName, i, r), u = (p) => {
        this.onFilterClicked([this.aggName, p]);
      }, c = (p) => this.getChildAggCmps(p, r);
      return /* @__PURE__ */ o.createElement(Ia, {
        key: s.key,
        bucket: s,
        keyField: i,
        isSelected: l,
        onFilterClicked: u,
        getChildAggCmps: c,
        overridableId: n
      });
    });
    return /* @__PURE__ */ o.createElement(Aa, {
      valuesCmp: a,
      overridableId: n
    });
  }
}
yt.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const Aa = (e) => {
  let {
    valuesCmp: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = w(_);
  return /* @__PURE__ */ o.createElement(v, {
    id: n("BucketAggregationContainer.element", r),
    valuesCmp: t
  }, /* @__PURE__ */ o.createElement(de, null, t));
};
Aa.defaultProps = {
  overridableId: ""
};
const Ia = (e) => {
  let {
    bucket: t,
    isSelected: r,
    onFilterClicked: n,
    getChildAggCmps: a,
    overridableId: s,
    keyField: i
  } = e;
  const {
    buildUID: l,
    nextComponentIndex: u
  } = w(_), c = t.label ? t.label : `${i} (${t.doc_count.toLocaleString("en-US")})`, p = a(t);
  return /* @__PURE__ */ o.createElement(v, {
    id: l("BucketAggregationValues.element", s),
    bucket: t,
    label: c,
    onFilterClicked: n,
    isSelected: r,
    childAggCmps: p
  }, /* @__PURE__ */ o.createElement(de.Item, {
    key: t.key
  }, /* @__PURE__ */ o.createElement(In, {
    label: c,
    id: u(),
    value: t.key,
    onClick: () => n(t.key),
    checked: r
  }), p));
};
Ia.defaultProps = {
  overridableId: ""
};
var Jv = v.component("BucketAggregationValues", yt);
class Oa extends P {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: a
      } = this.props;
      return /* @__PURE__ */ o.createElement(Jv, {
        buckets: r,
        selectedFilters: n,
        field: this.agg.field,
        aggName: this.agg.aggName,
        childAgg: this.agg.childAgg,
        onFilterClicked: this.onFilterClicked,
        overridableId: a
      });
    }, this._getSelectedFilters = (r) => r.filter((n) => n[0] === this.agg.aggName), this._getResultBuckets = (r) => {
      const n = Fe(r, this.agg.aggName, {});
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
    } = this.props, s = this._getSelectedFilters(t), i = this._getResultBuckets(r), l = i.length ? this._renderValues(i, s) : null;
    return /* @__PURE__ */ o.createElement(Ra, Object.assign({
      title: this.title,
      containerCmp: l,
      overridableId: n
    }, a));
  }
}
Oa.defaultProps = {
  overridableId: ""
};
const Ra = (e) => {
  let {
    overridableId: t,
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: s
  } = e;
  const {
    buildUID: i
  } = w(_);
  return a && /* @__PURE__ */ o.createElement(v, {
    id: i("BucketAggregation.element", t),
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: s
  }, /* @__PURE__ */ o.createElement(R, null, /* @__PURE__ */ o.createElement(R.Content, null, /* @__PURE__ */ o.createElement(R.Header, null, n)), /* @__PURE__ */ o.createElement(R.Content, null, a)));
};
Ra.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var Xv = v.component("BucketAggregation", Oa);
const eE = (e) => ({
  updateQueryFilters: (t) => e(dr(t))
});
A((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), eE)(Xv);
class Pa extends P {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
Pa.defaultProps = {
  condition: !0
};
var j = v.component("ShouldRender", Pa);
class Da extends P {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: a
    } = this.props;
    return /* @__PURE__ */ o.createElement(j, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ o.createElement(ka, {
      totalResults: r,
      overridableId: a
    })));
  }
}
Da.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const ka = (e) => {
  let {
    totalResults: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = w(_), a = n("Count.element", r);
  return /* @__PURE__ */ o.createElement(v, {
    id: a,
    totalResults: t
  }, /* @__PURE__ */ o.createElement(ae, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
ka.defaultProps = {
  overridableId: ""
};
var tE = v.component("Count", Da);
const rE = A((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(tE);
class La extends P {
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
      userSelectionFilters: l,
      ...u
    } = this.props;
    return /* @__PURE__ */ o.createElement(j, {
      condition: !t && X(n) && r === 0
    }, /* @__PURE__ */ o.createElement(Ua, Object.assign({}, u, {
      queryString: a,
      resetQuery: this.resetQuery,
      extraContent: s,
      userSelectionFilters: l,
      overridableId: i
    })));
  }
}
La.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const Ua = (e) => {
  let {
    overridableId: t,
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: s
  } = e;
  const {
    buildUID: i
  } = w(_);
  return /* @__PURE__ */ o.createElement(v, {
    id: i("EmptyResults.element", t),
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: s
  }, /* @__PURE__ */ o.createElement(K, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ o.createElement(Ie, {
    icon: !0
  }, /* @__PURE__ */ o.createElement(C, {
    name: "search"
  }), "No results found!"), r && /* @__PURE__ */ o.createElement("em", null, 'Current search "', r, '"'), /* @__PURE__ */ o.createElement("br", null), /* @__PURE__ */ o.createElement(D, {
    primary: !0,
    onClick: () => n()
  }, "Clear query"), a));
};
Ua.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var nE = v.component("EmptyResults", La);
const aE = (e) => ({
  resetQuery: () => e(_v())
}), sE = A((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), aE)(nE);
function Na(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ o.createElement(j, {
    condition: !t && !X(r)
  }, /* @__PURE__ */ o.createElement(Ba, {
    error: r,
    overridableId: n
  }));
}
Na.defaultProps = {
  overridableId: ""
};
const Ba = (e) => {
  let {
    error: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = w(_);
  return /* @__PURE__ */ o.createElement(v, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ o.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
Ba.defaultProps = {
  overridableId: ""
};
var iE = v.component("Error", Na);
A((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(iE);
function za(e) {
  const t = (a) => /* @__PURE__ */ o.createElement(e, a);
  return A((a) => ({
    currentQueryState: a.query,
    currentResultsState: a.results
  }), (a) => ({
    updateQueryState: (s) => a(xa(s))
  }))(t);
}
class Ma extends P {
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
    return /* @__PURE__ */ o.createElement(j, {
      condition: t !== null && !r && n > 0
    }, /* @__PURE__ */ o.createElement(Qa, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: a
    }));
  }
}
Ma.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
const Qa = (e) => {
  let {
    overridableId: t,
    currentLayout: r,
    onLayoutChange: n
  } = e;
  const {
    buildUID: a
  } = w(_);
  return /* @__PURE__ */ o.createElement(v, {
    id: a("LayoutSwitcher.element", t),
    currentLayout: r,
    onLayoutChange: n
  }, /* @__PURE__ */ o.createElement(Ae, {
    compact: !0,
    icon: !0
  }, /* @__PURE__ */ o.createElement(Ae.Item, {
    name: "list",
    active: r === "list",
    onClick: (s, i) => {
      let {
        name: l
      } = i;
      return n(l);
    }
  }, /* @__PURE__ */ o.createElement(C, {
    name: "list layout"
  })), /* @__PURE__ */ o.createElement(Ae.Item, {
    name: "grid",
    active: r === "grid",
    onClick: (s, i) => {
      let {
        name: l
      } = i;
      return n(l);
    }
  }, /* @__PURE__ */ o.createElement(C, {
    name: "grid layout"
  }))));
};
Qa.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var oE = v.component("LayoutSwitcher", Ma);
const lE = (e) => ({
  updateLayout: (t) => e($v(t))
});
A((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), lE)(oE);
const an = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class ja extends P {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...an,
      ...t.options
    } : an;
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
    return /* @__PURE__ */ o.createElement(j, {
      condition: !t && n > -1 && a > -1 && i ? r > 0 : r > a
    }, /* @__PURE__ */ o.createElement(qa, {
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
ja.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const qa = (e) => {
  let {
    overridableId: t,
    currentPage: r,
    currentSize: n,
    totalResults: a,
    onPageChange: s,
    options: i,
    maxTotalResults: l,
    ...u
  } = e;
  const c = i.boundaryRangeCount, p = i.siblingRangeCount, d = i.showEllipsis, f = i.showFirst, h = i.showLast, m = i.showPrev, y = i.showNext, E = i.size, g = Math.floor(l / n), S = Math.ceil(a / n), F = Math.min(S, g), {
    buildUID: k
  } = w(_);
  return r > S && s(S), /* @__PURE__ */ o.createElement(v, {
    id: k("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: a,
    options: i,
    onPageChange: s
  }, /* @__PURE__ */ o.createElement(yi, Object.assign({
    activePage: r,
    totalPages: F,
    onPageChange: (W, b) => {
      let {
        activePage: ee
      } = b;
      return s(ee);
    },
    boundaryRange: c,
    siblingRange: p,
    ellipsisItem: d ? void 0 : null,
    firstItem: f ? void 0 : null,
    lastItem: h ? void 0 : null,
    prevItem: m ? void 0 : null,
    nextItem: y ? void 0 : null,
    size: E
  }, u)));
};
qa.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var uE = v.component("Pagination", ja);
const cE = (e) => ({
  updateQueryPage: (t) => e(bv(t))
}), dE = A((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), cE)(uE);
function Ga(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    resultsPerRow: a,
    overridableId: s,
    onResultsRendered: i
  } = e;
  return rt(() => {
    i && i();
  }, [i]), /* @__PURE__ */ o.createElement(j, {
    condition: !t && r > 0
  }, /* @__PURE__ */ o.createElement(Va, {
    results: n,
    resultsPerRow: a,
    overridableId: s
  }));
}
Ga.defaultProps = {
  resultsPerRow: 3,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const pE = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = w(_);
  return /* @__PURE__ */ o.createElement(v, {
    id: n("ResultsGrid.item", r),
    result: t
  }, /* @__PURE__ */ o.createElement(R, {
    fluid: !0,
    href: `#${t.id}`
  }, /* @__PURE__ */ o.createElement(vi, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ o.createElement(R.Content, null, /* @__PURE__ */ o.createElement(R.Header, null, t.title), /* @__PURE__ */ o.createElement(R.Description, null, t.description))));
}, Va = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: a
  } = w(_), s = r.map((i, l) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ o.createElement(pE, {
      key: l,
      result: i,
      overridableId: t
    })
  ));
  return /* @__PURE__ */ o.createElement(v, {
    id: a("ResultsGrid.container", t),
    results: s,
    resultsPerRow: n
  }, /* @__PURE__ */ o.createElement(R.Group, {
    itemsPerRow: n
  }, s));
};
Va.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var fE = v.component("ResultsGrid", Ga);
const hE = A((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(fE);
function Ha(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return rt(() => {
    s && s();
  }, [s]), /* @__PURE__ */ o.createElement(j, {
    condition: !t && r > 0
  }, /* @__PURE__ */ o.createElement(Ka, {
    results: n,
    overridableId: a
  }));
}
Ha.defaultProps = {
  overridableId: "",
  onResultsRendered: () => {
  }
};
const gE = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = w(_);
  return /* @__PURE__ */ o.createElement(v, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ o.createElement(he, {
    href: `#${t.id}`
  }, /* @__PURE__ */ o.createElement(he.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ o.createElement(he.Content, null, /* @__PURE__ */ o.createElement(he.Header, null, t.title), /* @__PURE__ */ o.createElement(he.Description, null, t.description))));
}, Ka = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = w(_), a = t.map((s, i) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ o.createElement(gE, {
      result: s,
      key: i,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ o.createElement(v, {
    id: n("ResultsList.container", r),
    results: a
  }, /* @__PURE__ */ o.createElement(he.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, a));
};
Ka.defaultProps = {
  overridableId: ""
};
var mE = v.component("ResultsList", Ha);
const Ya = A((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(mE);
function Wa(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ o.createElement(Za, {
    overridableId: n
  }) : t;
}
Wa.defaultProps = {
  overridableId: ""
};
const Za = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = w(_);
  return /* @__PURE__ */ o.createElement(v, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ o.createElement(On, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
Za.defaultProps = {
  overridableId: ""
};
var yE = v.component("ResultsLoader", Wa);
const vE = A((e) => ({
  loading: e.results.loading
}))(yE);
function Ja(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return /* @__PURE__ */ o.createElement(j, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ o.createElement(Xa, {
    layout: n,
    overridableId: a,
    onResultsRendered: s
  }));
}
Ja.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const Xa = (e) => {
  let {
    layout: t,
    overridableId: r,
    onResultsRendered: n
  } = e;
  const {
    buildUID: a
  } = w(_);
  return /* @__PURE__ */ o.createElement(v, {
    id: a("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ o.createElement(Ya, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ o.createElement(hE, {
    overridableId: r,
    onResultsRendered: n
  }));
};
Xa.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var EE = v.component("ResultsMultiLayout", Ja);
A((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(EE);
class es extends P {
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
      selectOnNavigation: l,
      showWhenOnlyOnePage: u
    } = this.props;
    return /* @__PURE__ */ o.createElement(j, {
      condition: !t && r !== -1 && u ? n > 0 : n > r
    }, a(/* @__PURE__ */ o.createElement(ts, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: l
    })));
  }
}
es.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const ts = (e) => {
  let {
    overridableId: t,
    currentSize: r,
    options: n,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  } = e;
  const {
    buildUID: l
  } = w(_), u = n.map((c, p) => ({
    key: p,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ o.createElement(v, {
    id: l("ResultsPerPage.element", t),
    currentSize: r,
    options: n,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  }, /* @__PURE__ */ o.createElement(ie, {
    inline: !0,
    compact: !0,
    options: u,
    value: r,
    onChange: (c, p) => {
      let {
        value: d
      } = p;
      return a(d);
    },
    "aria-label": s,
    selectOnNavigation: i
  }));
};
ts.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var bE = v.component("ResultsPerPage", es);
const SE = (e) => ({
  updateQuerySize: (t) => e(Sv(t))
}), $E = A((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), SE)(bE);
class rs extends P {
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
      overridableId: l,
      placeholder: u,
      uiProps: c
    } = this.props, {
      currentValue: p
    } = this.state;
    return /* @__PURE__ */ o.createElement(hr, {
      actionProps: t,
      autofocus: r,
      executeSearch: n || this.executeSearch,
      onBtnSearchClick: a || this.onBtnSearchClick,
      onInputChange: s || this.onInputChange,
      onKeyPress: i || this.onKeyPress,
      overridableId: l,
      placeholder: u,
      queryString: p,
      uiProps: c
    });
  }
}
rs.defaultProps = {
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
const ns = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ o.createElement(rs, Object.assign({
    key: t
  }, e));
};
ns.defaultProps = {
  queryString: ""
};
class hr extends P {
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
      queryString: l,
      uiProps: u
    } = this.props, {
      buildUID: c
    } = this.context;
    return /* @__PURE__ */ o.createElement(v, {
      id: c("SearchBar.element", s),
      queryString: l,
      onBtnSearchClick: r,
      onInputChange: n,
      onKeyPress: a,
      placeholder: i,
      actionProps: t,
      uiProps: u
    }, /* @__PURE__ */ o.createElement(An, Object.assign({
      action: {
        content: "Search",
        onClick: r,
        ...t
      },
      fluid: !0
    }, u, {
      placeholder: i || "Type something",
      onChange: (p, d) => {
        let {
          value: f
        } = d;
        n(f);
      },
      value: l,
      onKeyPress: a,
      ref: (p) => {
        this.focusInput = p;
      }
    })));
  }
}
hr.defaultProps = {
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
hr.contextType = _;
var _E = v.component("SearchBar", ns);
const xE = (e) => ({
  updateQueryString: (t) => e(Ca(t))
}), CE = A((e) => ({
  queryString: e.query.queryString
}), xE)(_E);
class as extends P {
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
      sortOrderDisabled: l,
      ariaLabel: u,
      selectOnNavigation: c
    } = this.props;
    return /* @__PURE__ */ o.createElement(j, {
      condition: t !== null && (l || t !== null) && !n && a > 0
    }, s(/* @__PURE__ */ o.createElement(ss, {
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
as.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const ss = (e) => {
  let {
    overridableId: t,
    currentSortBy: r,
    currentSortOrder: n,
    options: a,
    onValueChange: s,
    computeValue: i,
    ariaLabel: l,
    selectOnNavigation: u
  } = e;
  const {
    buildUID: c
  } = w(_), p = i(r, n), d = a.map((f, h) => ({
    key: h,
    text: f.text,
    value: f.value
  }));
  return /* @__PURE__ */ o.createElement(v, {
    id: c("Sort.element", t),
    options: a,
    currentSortBy: r,
    currentSortOrder: n,
    onValueChange: s,
    ariaLabel: l,
    selectOnNavigation: u
  }, /* @__PURE__ */ o.createElement(ie, {
    selection: !0,
    options: d,
    value: p,
    onChange: (f, h) => {
      let {
        value: m
      } = h;
      return s(m);
    },
    "aria-label": l,
    selectOnNavigation: u
  }));
};
ss.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var wE = v.component("Sort", as);
const FE = (e) => ({
  updateQuerySorting: (t, r) => e(yv(t, r))
});
A((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), FE)(wE);
class is extends P {
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
      selectOnNavigation: l
    } = this.props;
    return /* @__PURE__ */ o.createElement(j, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ o.createElement(os, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: l
    })));
  }
}
is.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const os = (e) => {
  let {
    overridableId: t,
    currentSortBy: r,
    options: n,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  } = e;
  const {
    buildUID: l
  } = w(_), u = n.map((c, p) => ({
    key: p,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ o.createElement(v, {
    id: l("SortBy.element", t),
    options: n,
    currentSortBy: r,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  }, /* @__PURE__ */ o.createElement(ie, {
    selection: !0,
    compact: !0,
    options: u,
    value: r,
    onChange: (c, p) => {
      let {
        value: d
      } = p;
      return a(d);
    },
    "aria-label": s,
    selectOnNavigation: i
  }));
};
os.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var TE = v.component("SortBy", is);
const AE = (e) => ({
  updateQuerySortBy: (t) => e(vv(t))
});
A((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), AE)(TE);
class ls extends P {
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
      selectOnNavigation: l
    } = this.props;
    return /* @__PURE__ */ o.createElement(j, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ o.createElement(us, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: l
    })));
  }
}
ls.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const us = (e) => {
  let {
    overridableId: t,
    currentSortOrder: r,
    options: n,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  } = e;
  const {
    buildUID: l
  } = w(_), u = n.map((c, p) => ({
    key: p,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ o.createElement(v, {
    id: l("SortOrder.element", t),
    options: n,
    currentSortOrder: r,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  }, /* @__PURE__ */ o.createElement(ie, {
    selection: !0,
    compact: !0,
    options: u,
    value: r,
    onChange: (c, p) => {
      let {
        value: d
      } = p;
      return a(d);
    },
    "aria-label": s,
    selectOnNavigation: i
  }));
};
us.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var IE = v.component("SortOrder", ls);
const OE = (e) => ({
  updateQuerySortOrder: (t) => e(Ev(t))
});
A((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), OE)(IE);
const cs = (e) => {
  let {
    overridableId: t,
    userSelectionFilters: r,
    title: n,
    label: a,
    filterValue: s,
    updateQueryFilters: i
  } = e;
  const l = (d) => d.filter((h) => h[0] === s[0]).length > 0, u = () => {
    i(s);
  }, {
    buildUID: c
  } = w(_), p = l(r);
  return /* @__PURE__ */ o.createElement(v, {
    id: c("SearchFilters.Toggle.element", t),
    title: n,
    label: a,
    filterValue: s,
    userSelectionFilters: r,
    updateQueryFilters: i
  }, /* @__PURE__ */ o.createElement(R, null, /* @__PURE__ */ o.createElement(R.Content, null, /* @__PURE__ */ o.createElement(R.Header, null, n)), /* @__PURE__ */ o.createElement(R.Content, null, /* @__PURE__ */ o.createElement(In, {
    toggle: !0,
    label: a,
    onClick: u,
    checked: p
  }))));
};
cs.defaultProps = {
  overridableId: ""
};
var RE = v.component("SearchFilters.Toggle", cs);
const PE = (e) => ({
  updateQueryFilters: (t) => e(dr(t))
});
A((e) => ({
  userSelectionFilters: e.query.filters
}), PE)(RE);
const ds = o.createContext(
  null
), DE = ({ config: e, children: t, updateQueryState: r, currentQueryState: n }) => {
  const a = T(() => {
    r({
      ...n,
      queryString: n.queryString
    });
  }, [r, n]);
  return /* @__PURE__ */ o.createElement(ds.Provider, { value: { config: e, refreshSearch: a } }, t);
}, kE = za(DE), vt = () => {
  const e = o.useContext(ds);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
}, ps = ({
  status: e,
  children: t,
  ...r
}) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ o.createElement(ae, { color: "red", ...r }, /* @__PURE__ */ o.createElement(C, { name: "warning sign" }), t) : e === "success" || e === "validated" || e === "created" ? /* @__PURE__ */ o.createElement(ae, { color: "green", ...r }, /* @__PURE__ */ o.createElement(C, { name: "check circle" }), t) : e === "importing" || e === "validating" ? /* @__PURE__ */ o.createElement(ae, { color: "blue", ...r }, /* @__PURE__ */ o.createElement(C, { name: "spinner", loading: !0 }), t) : /* @__PURE__ */ o.createElement(ae, { ...r }, t), Ze = (e) => (e == null ? void 0 : e.charAt(0).toUpperCase()) + (e == null ? void 0 : e.slice(1)) || "", LE = (e) => e.reduce((t, r) => t + r.file.size, 0), fs = (e) => gr(LE(e)), gr = (e) => {
  if (e === 0)
    return "0 Bytes";
  const t = 1024, r = ["Bytes", "KB", "MB", "GB"], n = Math.floor(Math.log(e) / Math.log(t));
  return `${Number.parseFloat((e / t ** n).toFixed(2))} ${r[n]}`;
}, UE = (e) => new Date(e).toLocaleString(void 0, {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit"
});
var hs = { exports: {} };
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
        var l = arguments[s];
        for (var u in l)
          i[u] = l[u];
      }
      return i;
    }
    function n(s) {
      return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    function a(s) {
      function i() {
      }
      function l(c, p, d) {
        if (!(typeof document > "u")) {
          d = r({
            path: "/"
          }, i.defaults, d), typeof d.expires == "number" && (d.expires = new Date(/* @__PURE__ */ new Date() * 1 + d.expires * 864e5)), d.expires = d.expires ? d.expires.toUTCString() : "";
          try {
            var f = JSON.stringify(p);
            /^[\{\[]/.test(f) && (p = f);
          } catch {
          }
          p = s.write ? s.write(p, c) : encodeURIComponent(String(p)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), c = encodeURIComponent(String(c)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var h = "";
          for (var m in d)
            d[m] && (h += "; " + m, d[m] !== !0 && (h += "=" + d[m].split(";")[0]));
          return document.cookie = c + "=" + p + h;
        }
      }
      function u(c, p) {
        if (!(typeof document > "u")) {
          for (var d = {}, f = document.cookie ? document.cookie.split("; ") : [], h = 0; h < f.length; h++) {
            var m = f[h].split("="), y = m.slice(1).join("=");
            !p && y.charAt(0) === '"' && (y = y.slice(1, -1));
            try {
              var E = n(m[0]);
              if (y = (s.read || s)(y, E) || n(y), p)
                try {
                  y = JSON.parse(y);
                } catch {
                }
              if (d[E] = y, c === E)
                break;
            } catch {
            }
          }
          return c ? d[c] : d;
        }
      }
      return i.set = l, i.get = function(c) {
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
      }, i.remove = function(c, p) {
        l(c, "", r(p, {
          expires: -1
        }));
      }, i.defaults = {}, i.withConverter = a, i;
    }
    return a(function() {
    });
  });
})(hs);
var NE = hs.exports;
const BE = /* @__PURE__ */ I(NE), zE = () => BE.get("csrftoken") || null, ME = (e) => {
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
}, H_ = (e) => new pa(e), K_ = (e, t = {}, r = !0) => ({
  axios: {
    url: e,
    headers: {
      Accept: "application/vnd.inveniordm.v1+json",
      ...t
    },
    withCredentials: r
  }
}), M = je.create({
  baseURL: "",
  timeout: 3e4,
  withCredentials: !0,
  // Include cookies in requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
M.interceptors.request.use(
  (e) => {
    const t = zE();
    return t && (e.headers["X-CSRFTOKEN"] = t), e;
  },
  (e) => Promise.reject(e)
);
const gs = async (e, t) => {
  try {
    const r = await M.put(
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
}, QE = async (e, t) => {
  try {
    const r = await M.post(
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
}, jE = async (e) => {
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
    const r = await M.post(
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
}, qE = async (e) => {
  try {
    const t = await M.delete(`/api/importer-tasks/${e}`);
    return t.status === 204 ? !0 : (console.error(`Failed to delete task: ${t.statusText}`), !1);
  } catch (t) {
    return console.error(
      `Error deleting task: ${t instanceof Error ? t.message : "Unknown error"}`
    ), !1;
  }
}, ms = async (e) => {
  try {
    const t = await M.post(`/api/importer-tasks/${e}/load`);
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error executing bulk import:", t), new Error("Failed to execute bulk import");
  }
}, GE = async () => {
  try {
    const e = await M.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, VE = async (e) => {
  try {
    const t = await M.get(
      `/api/importer-tasks/config/${e}`
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error fetching serializers:", t), new Error("Failed to fetch serializers");
  }
}, Pt = async (e) => {
  try {
    const t = await M.put(
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
}, HE = async (e, t) => {
  const r = t.map((n) => ({
    key: n
  }));
  try {
    const n = await M.post(
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
}, KE = async (e, t, r) => {
  try {
    const n = await M.put(
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
}, ys = async (e) => {
  try {
    const t = await M.post(
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
}, vs = async (e, t = {}) => {
  const { autoExecute: r = !1, onProgress: n, onError: a } = t;
  try {
    n == null || n("Validating", 0), await ys(e), n == null || n("Validating", 50);
    let s = await Pt(e);
    return n == null || n("Validating", 100), r && (s.status === "validated" || s.status === "validated with failures") && (n == null || n("Executing", 0), await ms(e), n == null || n("Executing", 50), s = await Pt(e), n == null || n("Executing", 100)), s;
  } catch (s) {
    const i = s instanceof Error ? s : new Error("Unknown error during workflow execution");
    throw a == null || a(i, "Executing"), i;
  }
}, Es = async (e, t, r) => {
  if (!t || t.length === 0)
    return;
  const n = t.map((a) => a.name);
  await HE(e, n);
  for (const a of t)
    try {
      r == null || r({
        fileName: a.name,
        loaded: 0,
        total: a.size,
        percentage: 0
      }), await KE(e, a.name, a), r == null || r({
        fileName: a.name,
        loaded: a.size,
        total: a.size,
        percentage: 90
      }), await QE(e, a.name), r == null || r({
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
}, YE = async (e, t, r, n = {}) => {
  const {
    autoValidate: a = !1,
    autoExecute: s = !1,
    onProgress: i,
    onError: l
  } = n;
  try {
    i == null || i("Creating Task", 0);
    const u = await jE(e);
    if (!u)
      throw new Error("Failed to create import task");
    return i == null || i("Creating Task", 100), t && (i == null || i("Uploading Metadata", 0), await gs(u.id, t), i == null || i("Uploading Metadata", 100)), r && r.length > 0 && await Es(u.id, r, (c) => {
      i == null || i("Uploading Files", c.percentage);
    }), a && t && await vs(u.id, {
      autoExecute: s,
      onProgress: i,
      onError: l
    }), u;
  } catch (u) {
    const c = u instanceof Error ? u : new Error("Unknown error during task creation");
    throw l == null || l(c, "Creating Task"), c;
  }
}, WE = async (e, t, r, n = {}) => {
  const { onProgress: a, onError: s } = n;
  try {
    a == null || a("Updating", 0), t && (a == null || a("Updating Metadata", 0), await gs(e, t), a == null || a("Updating Metadata", 100)), r && r.length > 0 && await Es(e, r, (i) => {
      a == null || a("Updating Files", i.percentage);
    }), a == null || a("Updating", 100);
  } catch (i) {
    const l = i instanceof Error ? i : new Error("Unknown error during task update");
    throw s == null || s(l, "Updating"), l;
  }
}, ZE = async (e) => {
  try {
    const t = await M.post(
      `/api/importer-records/${e}/run`,
      {}
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Failed to fetch import records: ${t.statusText}`);
  } catch (t) {
    throw console.error("Failed to fetch import records:", t), t;
  }
}, bs = (e, t = {}) => {
  const [r, n] = B({
    isDeleting: !1,
    isValidating: !1,
    isBulkImporting: !1,
    isGettingStatus: !1,
    error: null
  }), {
    onDeleteSuccess: a,
    onDeleteError: s,
    onValidateSuccess: i,
    onValidateError: l,
    onBulkImportSuccess: u,
    onBulkImportError: c,
    onStatusChangeSuccess: p,
    onStatusChangeError: d
  } = t, f = T(() => {
    n((g) => ({ ...g, error: null }));
  }, []), h = T(async () => {
    n((g) => ({ ...g, isDeleting: !0, error: null }));
    try {
      if (!await qE(e))
        throw new Error(`Failed to delete task ${e}`);
      a == null || a();
    } catch (g) {
      const S = g instanceof Error ? g : new Error("Unknown error");
      throw n((F) => ({ ...F, error: S })), s == null || s(S), S;
    } finally {
      n((g) => ({ ...g, isDeleting: !1 }));
    }
  }, [e, a, s]), m = T(async () => {
    n((g) => ({ ...g, isValidating: !0, error: null }));
    try {
      const g = await ys(e);
      if (!g)
        throw new Error(`Validation failed for task ${e}`);
      return i == null || i(g), g;
    } catch (g) {
      const S = g instanceof Error ? g : new Error("Unknown error");
      throw n((F) => ({ ...F, error: S })), l == null || l(S), S;
    } finally {
      n((g) => ({ ...g, isValidating: !1 }));
    }
  }, [e, i, l]), y = T(async () => {
    n((g) => ({ ...g, isBulkImporting: !0, error: null }));
    try {
      const g = await ms(e);
      if (!g)
        throw new Error(`Failed to execute bulk import for task ${e}`);
      return u == null || u(g), g;
    } catch (g) {
      const S = g instanceof Error ? g : new Error("Unknown error");
      throw n((F) => ({ ...F, error: S })), c == null || c(S), S;
    } finally {
      n((g) => ({ ...g, isBulkImporting: !1 }));
    }
  }, [e, u, c]), E = T(async () => {
    n((g) => ({ ...g, isGettingStatus: !0, error: null }));
    try {
      const g = await Pt(e);
      if (!g)
        throw new Error(`Failed to retrieve status for task ${e}`);
      return p == null || p(g), g;
    } catch (g) {
      const S = g instanceof Error ? g : new Error("Unknown error");
      throw n((F) => ({ ...F, error: S })), d == null || d(S), S;
    } finally {
      n((g) => ({ ...g, isGettingStatus: !1 }));
    }
  }, [e, p, d]);
  return {
    // State
    isDeleting: r.isDeleting,
    isValidating: r.isValidating,
    isBulkImporting: r.isBulkImporting,
    isGettingStatus: r.isGettingStatus,
    error: r.error,
    // Actions
    deleteTask: h,
    validateTask: m,
    runBulkImport: y,
    getStatus: E,
    clearError: f
  };
}, JE = ({ result: e, index: t }) => {
  var E;
  const { refreshSearch: r, config: n } = vt(), {
    deleteTask: a,
    validateTask: s,
    runBulkImport: i,
    getStatus: l,
    isDeleting: u,
    isValidating: c,
    isBulkImporting: p,
    isGettingStatus: d,
    error: f,
    clearError: h
  } = bs(e.id, {
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
  const m = (g, S) => S ? `${g}...` : g, y = u || c || p || d;
  return /* @__PURE__ */ o.createElement(nt, { key: t }, /* @__PURE__ */ o.createElement(V, null, /* @__PURE__ */ o.createElement("a", { href: `${n.resultPath}/${e.id}` }, e.title || "No title")), /* @__PURE__ */ o.createElement(V, null, UE(e.created)), /* @__PURE__ */ o.createElement(V, null, /* @__PURE__ */ o.createElement(ps, { status: e.status }, Ze(e.status))), /* @__PURE__ */ o.createElement(V, null, ((E = e.records_status) == null ? void 0 : E.total_records) ?? 0), /* @__PURE__ */ o.createElement(V, null, e.serializer), /* @__PURE__ */ o.createElement(V, null, Ze(e.mode)), /* @__PURE__ */ o.createElement(V, { style: { width: "220px" } }, f && /* @__PURE__ */ o.createElement("div", { style: { color: "red", fontSize: "12px", marginBottom: "5px" } }, f.message, /* @__PURE__ */ o.createElement(
    D,
    {
      onClick: h,
      style: { marginLeft: "5px", fontSize: "10px" }
    },
    "Clear"
  )), /* @__PURE__ */ o.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ o.createElement(
    ie,
    {
      text: y ? "Processing..." : "Select Action",
      floating: !0,
      labeled: !0,
      className: "icon",
      disabled: y,
      options: [
        {
          key: "download",
          text: "Download",
          value: "download",
          disabled: !0
        },
        {
          key: "validate",
          text: m("Retry Validation", c),
          value: "validate",
          disabled: y,
          onClick: () => s()
        },
        {
          key: "load",
          text: m("Load Bulk Import", p),
          value: "load",
          disabled: y,
          onClick: () => i()
        },
        {
          key: "status",
          text: m("Get Status", d),
          value: "status",
          disabled: y,
          onClick: () => l()
        },
        {
          key: "delete",
          text: m("Delete", u),
          value: "delete",
          disabled: y,
          onClick: () => a()
        }
      ]
    }
  ), /* @__PURE__ */ o.createElement(
    D,
    {
      basic: !0,
      size: "tiny",
      disabled: y,
      as: "a",
      href: `${n.resultPath}/${e.id}`
    },
    /* @__PURE__ */ o.createElement(C, { name: "eye" }),
    "View"
  ))));
}, XE = ({ children: e }) => /* @__PURE__ */ o.createElement(Rn, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ o.createElement(Pn, null, /* @__PURE__ */ o.createElement(nt, null, /* @__PURE__ */ o.createElement(H, null, "ID"), /* @__PURE__ */ o.createElement(H, null, "Date Created"), /* @__PURE__ */ o.createElement(H, null, "Status"), /* @__PURE__ */ o.createElement(H, null, "Records"), /* @__PURE__ */ o.createElement(H, null, "Serializer"), /* @__PURE__ */ o.createElement(H, null, "Mode"), /* @__PURE__ */ o.createElement(H, null, "Actions"))), /* @__PURE__ */ o.createElement(Dn, null, e)), re = {
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
}, eb = () => {
  const [e, t] = B(
    {}
  ), [r, n] = B(!0), { values: a, submitForm: s, isSubmitting: i, isValid: l, setFieldValue: u } = Oi(), c = T(async () => {
    try {
      const f = await GE(), h = {};
      for (const m of f) {
        const y = await VE(m);
        y && (h[m] = y);
      }
      t(h);
    } catch (f) {
      console.error("Error fetching record types:", f);
    } finally {
      n(!1);
    }
  }, []), p = (f) => {
    var m;
    const h = ((m = f.target.files) == null ? void 0 : m[0]) || null;
    u("metadata", h);
  }, d = (f) => {
    u("files", f);
  };
  return rt(() => {
    c();
  }, [c]), {
    configs: e,
    isLoading: r,
    values: a,
    submitForm: s,
    setFieldValue: u,
    handleFileChange: p,
    handleFilesChange: d,
    isSubmitting: i,
    isValid: l
  };
}, tb = ({ progress: e }) => {
  const {
    configs: t,
    isLoading: r,
    submitForm: n,
    handleFileChange: a,
    handleFilesChange: s,
    values: i,
    isSubmitting: l,
    isValid: u
  } = eb();
  return r ? /* @__PURE__ */ o.createElement("p", null, "Loading record types...") : !t || Object.keys(t).length === 0 ? /* @__PURE__ */ o.createElement("p", null, "No record types available.") : /* @__PURE__ */ o.createElement(Tn, null, /* @__PURE__ */ o.createElement(
    Ti,
    {
      fieldPath: "task.title",
      label: "Title",
      placeholder: "Enter a title for the import task",
      required: !0
    }
  ), /* @__PURE__ */ o.createElement(ye.Group, { widths: "equal" }, /* @__PURE__ */ o.createElement(
    St,
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
  ), /* @__PURE__ */ o.createElement(
    St,
    {
      fieldPath: "task.serializer",
      label: "Serializer",
      options: i.task.recordType && t[i.task.recordType] ? t[i.task.recordType].serializers.map((c) => ({
        key: c,
        value: c,
        text: c
      })) : [],
      placeholder: "Select Serializer",
      disabled: !i.task.recordType,
      required: !0
    }
  ), /* @__PURE__ */ o.createElement(
    St,
    {
      fieldPath: "task.mode",
      label: "Mode",
      options: [
        { key: "import", value: "import", text: "Import" },
        { key: "delete", value: "delete", text: "Delete" }
      ],
      placeholder: "Select Mode",
      disabled: !i.task.recordType || !i.task.serializer,
      required: !0
    }
  )), /* @__PURE__ */ o.createElement(ye.Field, null, /* @__PURE__ */ o.createElement("label", { htmlFor: "file-input" }, "Metadata File"), /* @__PURE__ */ o.createElement(
    "input",
    {
      id: "file-input",
      type: "file",
      accept: ".csv",
      onChange: a,
      style: { marginTop: "8px" }
    }
  ), i.metadata && /* @__PURE__ */ o.createElement("p", { style: { marginTop: "8px", fontSize: "12px", color: "#666" } }, "Selected: ", i.metadata.name), /* @__PURE__ */ o.createElement("p", { style: { marginTop: "8px", fontSize: "12px", color: "#666" } }, "Upload a CSV file containing the records metadata to be imported or deleted.")), /* @__PURE__ */ o.createElement(ye.Field, null, /* @__PURE__ */ o.createElement(
    ci,
    {
      value: i.files || [],
      onChange: s,
      accept: "*",
      maxSize: 10 * 1024 * 1024 * 1024,
      maxFiles: 100
    }
  ), /* @__PURE__ */ o.createElement("p", { style: { marginTop: "8px", fontSize: "12px", color: "#666" } }, "Upload files related to the records. You can upload multiple files, and they will be associated with the import task.")), /* @__PURE__ */ o.createElement(
    Ai,
    {
      fieldPath: "task.description",
      label: "Notes",
      placeholder: "Enter a description for the import task",
      rows: 3
    }
  ), /* @__PURE__ */ o.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1rem"
      }
    },
    /* @__PURE__ */ o.createElement(
      D,
      {
        type: "button",
        primary: !0,
        onClick: n,
        disabled: !u || l,
        loading: l
      },
      "Submit"
    ),
    e && Object.entries(e).map(([c, p]) => /* @__PURE__ */ o.createElement(K.Inline, { basic: !0, key: c }, /* @__PURE__ */ o.createElement(
      C,
      {
        name: "spinner",
        loading: !0,
        style: {
          marginInlineEnd: "0.5rem"
        }
      }
    ), /* @__PURE__ */ o.createElement("strong", null, c, ":"), " ", p, "%"))
  ));
};
var Dt;
try {
  Dt = Map;
} catch {
}
var kt;
try {
  kt = Set;
} catch {
}
function Ss(e, t, r) {
  if (!e || typeof e != "object" || typeof e == "function")
    return e;
  if (e.nodeType && "cloneNode" in e)
    return e.cloneNode(!0);
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof RegExp)
    return new RegExp(e);
  if (Array.isArray(e))
    return e.map(Lt);
  if (Dt && e instanceof Dt)
    return new Map(Array.from(e.entries()));
  if (kt && e instanceof kt)
    return new Set(Array.from(e.values()));
  if (e instanceof Object) {
    t.push(e);
    var n = Object.create(e);
    r.push(n);
    for (var a in e) {
      var s = t.findIndex(function(i) {
        return i === e[a];
      });
      n[a] = s > -1 ? r[s] : Ss(e[a], t, r);
    }
    return n;
  }
  return e;
}
function Lt(e) {
  return Ss(e, [], []);
}
const rb = Object.prototype.toString, nb = Error.prototype.toString, ab = RegExp.prototype.toString, sb = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", ib = /^Symbol\((.*)\)(.*)$/;
function ob(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function sn(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return ob(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return sb.call(e).replace(ib, "Symbol($1)");
  const n = rb.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + nb.call(e) + "]" : n === "RegExp" ? ab.call(e) : null;
}
function Oe(e, t) {
  let r = sn(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = sn(this[n], t);
    return s !== null ? s : a;
  }, 2);
}
let ce = {
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
    let a = n != null && n !== r, s = `${e} must be a \`${t}\` type, but the final value was: \`${Oe(r, !0)}\`` + (a ? ` (cast from the value \`${Oe(n, !0)}\`).` : ".");
    return r === null && (s += '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'), s;
  },
  defined: "${path} must be defined"
}, q = {
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
}, lb = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Ut = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, ub = {
  isValue: "${path} field must be ${value}"
}, Nt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, cb = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: ce,
  string: q,
  number: lb,
  date: Ut,
  object: Nt,
  array: cb,
  boolean: ub
});
var db = Object.prototype, pb = db.hasOwnProperty;
function fb(e, t) {
  return e != null && pb.call(e, t);
}
var hb = fb, gb = hb, mb = Hn;
function yb(e, t) {
  return e != null && mb(e, t, gb);
}
var vb = yb;
const Je = /* @__PURE__ */ I(vb), $s = (e) => e && e.__isYupSchema__;
class Eb {
  constructor(t, r) {
    if (this.fn = void 0, this.refs = t, this.refs = t, typeof r == "function") {
      this.fn = r;
      return;
    }
    if (!Je(r, "is"))
      throw new TypeError("`is:` is required for `when()` conditions");
    if (!r.then && !r.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: a,
      otherwise: s
    } = r, i = typeof n == "function" ? n : (...l) => l.every((u) => u === n);
    this.fn = function(...l) {
      let u = l.pop(), c = l.pop(), p = i(...l) ? a : s;
      if (p)
        return typeof p == "function" ? p(c) : c.concat(p.resolve(u));
    };
  }
  resolve(t, r) {
    let n = this.refs.map((s) => s.getValue(r == null ? void 0 : r.value, r == null ? void 0 : r.parent, r == null ? void 0 : r.context)), a = this.fn.apply(t, n.concat(t, r));
    if (a === void 0 || a === t)
      return t;
    if (!$s(a))
      throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
function _s(e) {
  return e == null ? [] : [].concat(e);
}
function Bt() {
  return Bt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bt.apply(this, arguments);
}
let bb = /\$\{\s*(\w+)\s*\}/g;
class N extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Bt({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(bb, (a, s) => Oe(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], _s(t).forEach((s) => {
      N.isError(s) ? (this.errors.push(...s.errors), this.inner = this.inner.concat(s.inner.length ? s.inner : s)) : this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, N);
  }
}
const Sb = (e) => {
  let t = !1;
  return (...r) => {
    t || (t = !0, e(...r));
  };
};
function zt(e, t) {
  let {
    endEarly: r,
    tests: n,
    args: a,
    value: s,
    errors: i,
    sort: l,
    path: u
  } = e, c = Sb(t), p = n.length;
  const d = [];
  if (i = i || [], !p)
    return i.length ? c(new N(i, s, u)) : c(null, s);
  for (let f = 0; f < n.length; f++) {
    const h = n[f];
    h(a, function(y) {
      if (y) {
        if (!N.isError(y))
          return c(y, s);
        if (r)
          return y.value = s, c(y, s);
        d.push(y);
      }
      if (--p <= 0) {
        if (d.length && (l && d.sort(l), i.length && d.push(...i), i = d), i.length) {
          c(new N(i, s, u), s);
          return;
        }
        c(null, s);
      }
    });
  }
}
function $b(e) {
  return function(t, r, n) {
    for (var a = -1, s = Object(t), i = n(t), l = i.length; l--; ) {
      var u = i[e ? l : ++a];
      if (r(s[u], u, s) === !1)
        break;
    }
    return t;
  };
}
var _b = $b, xb = _b, Cb = xb(), wb = Cb, Fb = wb, Tb = Le;
function Ab(e, t) {
  return e && Fb(e, t, Tb);
}
var xs = Ab, Ib = "__lodash_hash_undefined__";
function Ob(e) {
  return this.__data__.set(e, Ib), this;
}
var Rb = Ob;
function Pb(e) {
  return this.__data__.has(e);
}
var Db = Pb, kb = Zt, Lb = Rb, Ub = Db;
function Xe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new kb(); ++t < r; )
    this.add(e[t]);
}
Xe.prototype.add = Xe.prototype.push = Lb;
Xe.prototype.has = Ub;
var Nb = Xe;
function Bb(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var zb = Bb;
function Mb(e, t) {
  return e.has(t);
}
var Qb = Mb, jb = Nb, qb = zb, Gb = Qb, Vb = 1, Hb = 2;
function Kb(e, t, r, n, a, s) {
  var i = r & Vb, l = e.length, u = t.length;
  if (l != u && !(i && u > l))
    return !1;
  var c = s.get(e), p = s.get(t);
  if (c && p)
    return c == t && p == e;
  var d = -1, f = !0, h = r & Hb ? new jb() : void 0;
  for (s.set(e, t), s.set(t, e); ++d < l; ) {
    var m = e[d], y = t[d];
    if (n)
      var E = i ? n(y, m, d, t, e, s) : n(m, y, d, e, t, s);
    if (E !== void 0) {
      if (E)
        continue;
      f = !1;
      break;
    }
    if (h) {
      if (!qb(t, function(g, S) {
        if (!Gb(h, S) && (m === g || a(m, g, r, n, s)))
          return h.push(S);
      })) {
        f = !1;
        break;
      }
    } else if (!(m === y || a(m, y, r, n, s))) {
      f = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), f;
}
var Cs = Kb;
function Yb(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var Wb = Yb;
function Zb(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Jb = Zb, on = be, ln = aa, Xb = ut, e0 = Cs, t0 = Wb, r0 = Jb, n0 = 1, a0 = 2, s0 = "[object Boolean]", i0 = "[object Date]", o0 = "[object Error]", l0 = "[object Map]", u0 = "[object Number]", c0 = "[object RegExp]", d0 = "[object Set]", p0 = "[object String]", f0 = "[object Symbol]", h0 = "[object ArrayBuffer]", g0 = "[object DataView]", un = on ? on.prototype : void 0, xt = un ? un.valueOf : void 0;
function m0(e, t, r, n, a, s, i) {
  switch (r) {
    case g0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case h0:
      return !(e.byteLength != t.byteLength || !s(new ln(e), new ln(t)));
    case s0:
    case i0:
    case u0:
      return Xb(+e, +t);
    case o0:
      return e.name == t.name && e.message == t.message;
    case c0:
    case p0:
      return e == t + "";
    case l0:
      var l = t0;
    case d0:
      var u = n & n0;
      if (l || (l = r0), e.size != t.size && !u)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      n |= a0, i.set(e, t);
      var p = e0(l(e), l(t), n, a, s, i);
      return i.delete(e), p;
    case f0:
      if (xt)
        return xt.call(e) == xt.call(t);
  }
  return !1;
}
var y0 = m0, cn = na, v0 = 1, E0 = Object.prototype, b0 = E0.hasOwnProperty;
function S0(e, t, r, n, a, s) {
  var i = r & v0, l = cn(e), u = l.length, c = cn(t), p = c.length;
  if (u != p && !i)
    return !1;
  for (var d = u; d--; ) {
    var f = l[d];
    if (!(i ? f in t : b0.call(t, f)))
      return !1;
  }
  var h = s.get(e), m = s.get(t);
  if (h && m)
    return h == t && m == e;
  var y = !0;
  s.set(e, t), s.set(t, e);
  for (var E = i; ++d < u; ) {
    f = l[d];
    var g = e[f], S = t[f];
    if (n)
      var F = i ? n(S, g, f, t, e, s) : n(g, S, f, e, t, s);
    if (!(F === void 0 ? g === S || a(g, S, r, n, s) : F)) {
      y = !1;
      break;
    }
    E || (E = f == "constructor");
  }
  if (y && !E) {
    var k = e.constructor, W = t.constructor;
    k != W && "constructor" in e && "constructor" in t && !(typeof k == "function" && k instanceof k && typeof W == "function" && W instanceof W) && (y = !1);
  }
  return s.delete(e), s.delete(t), y;
}
var $0 = S0, Ct = ar, _0 = Cs, x0 = y0, C0 = $0, dn = Re, pn = z, fn = ot, w0 = Kt, F0 = 1, hn = "[object Arguments]", gn = "[object Array]", ze = "[object Object]", T0 = Object.prototype, mn = T0.hasOwnProperty;
function A0(e, t, r, n, a, s) {
  var i = pn(e), l = pn(t), u = i ? gn : dn(e), c = l ? gn : dn(t);
  u = u == hn ? ze : u, c = c == hn ? ze : c;
  var p = u == ze, d = c == ze, f = u == c;
  if (f && fn(e)) {
    if (!fn(t))
      return !1;
    i = !0, p = !1;
  }
  if (f && !p)
    return s || (s = new Ct()), i || w0(e) ? _0(e, t, r, n, a, s) : x0(e, t, u, r, n, a, s);
  if (!(r & F0)) {
    var h = p && mn.call(e, "__wrapped__"), m = d && mn.call(t, "__wrapped__");
    if (h || m) {
      var y = h ? e.value() : e, E = m ? t.value() : t;
      return s || (s = new Ct()), a(y, E, r, n, s);
    }
  }
  return f ? (s || (s = new Ct()), C0(e, t, r, n, a, s)) : !1;
}
var I0 = A0, O0 = I0, yn = J;
function ws(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !yn(e) && !yn(t) ? e !== e && t !== t : O0(e, t, r, n, ws, a);
}
var Fs = ws, R0 = ar, P0 = Fs, D0 = 1, k0 = 2;
function L0(e, t, r, n) {
  var a = r.length, s = a, i = !n;
  if (e == null)
    return !s;
  for (e = Object(e); a--; ) {
    var l = r[a];
    if (i && l[2] ? l[1] !== e[l[0]] : !(l[0] in e))
      return !1;
  }
  for (; ++a < s; ) {
    l = r[a];
    var u = l[0], c = e[u], p = l[1];
    if (i && l[2]) {
      if (c === void 0 && !(u in e))
        return !1;
    } else {
      var d = new R0();
      if (n)
        var f = n(c, p, u, e, t, d);
      if (!(f === void 0 ? P0(p, c, D0 | k0, n, d) : f))
        return !1;
    }
  }
  return !0;
}
var U0 = L0, N0 = ne;
function B0(e) {
  return e === e && !N0(e);
}
var Ts = B0, z0 = Ts, M0 = Le;
function Q0(e) {
  for (var t = M0(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, z0(a)];
  }
  return t;
}
var j0 = Q0;
function q0(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var As = q0, G0 = U0, V0 = j0, H0 = As;
function K0(e) {
  var t = V0(e);
  return t.length == 1 && t[0][2] ? H0(t[0][0], t[0][1]) : function(r) {
    return r === e || G0(r, e, t);
  };
}
var Y0 = K0, W0 = Fs, Z0 = Vn, J0 = er, X0 = Wt, eS = Ts, tS = As, rS = De, nS = 1, aS = 2;
function sS(e, t) {
  return X0(e) && eS(t) ? tS(rS(e), t) : function(r) {
    var n = Z0(r, e);
    return n === void 0 && n === t ? J0(r, e) : W0(t, n, nS | aS);
  };
}
var iS = sS;
function oS(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var lS = oS, uS = Xt;
function cS(e) {
  return function(t) {
    return uS(t, e);
  };
}
var dS = cS, pS = lS, fS = dS, hS = Wt, gS = De;
function mS(e) {
  return hS(e) ? pS(gS(e)) : fS(e);
}
var yS = mS, vS = Y0, ES = iS, bS = rr, SS = z, $S = yS;
function _S(e) {
  return typeof e == "function" ? e : e == null ? bS : typeof e == "object" ? SS(e) ? ES(e[0], e[1]) : vS(e) : $S(e);
}
var Is = _S, xS = gt, CS = xs, wS = Is;
function FS(e, t) {
  var r = {};
  return t = wS(t), CS(e, function(n, a, s) {
    xS(r, a, t(n, a, s));
  }), r;
}
var TS = FS;
const Os = /* @__PURE__ */ I(TS);
function fe(e) {
  this._maxSize = e, this.clear();
}
fe.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
fe.prototype.get = function(e) {
  return this._values[e];
};
fe.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var AS = /[^.^\]^[]+|(?=\[\]|\.\.)/g, Rs = /^\d+$/, IS = /^\d/, OS = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, RS = /^\s*(['"]?)(.*?)(\1)\s*$/, mr = 512, vn = new fe(mr), En = new fe(mr), bn = new fe(mr), Et = {
  Cache: fe,
  split: Mt,
  normalizePath: wt,
  setter: function(e) {
    var t = wt(e);
    return En.get(e) || En.set(e, function(n, a) {
      for (var s = 0, i = t.length, l = n; s < i - 1; ) {
        var u = t[s];
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return n;
        l = l[t[s++]];
      }
      l[t[s]] = a;
    });
  },
  getter: function(e, t) {
    var r = wt(e);
    return bn.get(e) || bn.set(e, function(a) {
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
      return t + (yr(r) || Rs.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    PS(Array.isArray(e) ? e : Mt(e), t, r);
  }
};
function wt(e) {
  return vn.get(e) || vn.set(
    e,
    Mt(e).map(function(t) {
      return t.replace(RS, "$2");
    })
  );
}
function Mt(e) {
  return e.match(AS) || [""];
}
function PS(e, t, r) {
  var n = e.length, a, s, i, l;
  for (s = 0; s < n; s++)
    a = e[s], a && (LS(a) && (a = '"' + a + '"'), l = yr(a), i = !l && /^\d+$/.test(a), t.call(r, a, l, i, s, e));
}
function yr(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function DS(e) {
  return e.match(IS) && !e.match(Rs);
}
function kS(e) {
  return OS.test(e);
}
function LS(e) {
  return !yr(e) && (DS(e) || kS(e));
}
const Me = {
  context: "$",
  value: "."
};
class oe {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
      throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Me.context, this.isValue = this.key[0] === Me.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? Me.context : this.isValue ? Me.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && Et.getter(this.path, !0), this.map = r.map;
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
oe.prototype.__isYupRef = !0;
function et() {
  return et = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, et.apply(this, arguments);
}
function US(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Qe(e) {
  function t(r, n) {
    let {
      value: a,
      path: s = "",
      label: i,
      options: l,
      originalValue: u,
      sync: c
    } = r, p = US(r, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name: d,
      test: f,
      params: h,
      message: m
    } = e;
    let {
      parent: y,
      context: E
    } = l;
    function g(b) {
      return oe.isRef(b) ? b.getValue(a, y, E) : b;
    }
    function S(b = {}) {
      const ee = Os(et({
        value: a,
        originalValue: u,
        label: i,
        path: b.path || s
      }, h, b.params), g), te = new N(N.formatError(b.message || m, ee), a, ee.path, b.type || d);
      return te.params = ee, te;
    }
    let F = et({
      path: s,
      parent: y,
      type: d,
      createError: S,
      resolve: g,
      options: l,
      originalValue: u
    }, p);
    if (!c) {
      try {
        Promise.resolve(f.call(F, a, F)).then((b) => {
          N.isError(b) ? n(b) : b ? n(null, b) : n(S());
        }).catch(n);
      } catch (b) {
        n(b);
      }
      return;
    }
    let k;
    try {
      var W;
      if (k = f.call(F, a, F), typeof ((W = k) == null ? void 0 : W.then) == "function")
        throw new Error(`Validation test of type: "${F.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (b) {
      n(b);
      return;
    }
    N.isError(k) ? n(k) : k ? n(null, k) : n(S());
  }
  return t.OPTIONS = e, t;
}
let NS = (e) => e.substr(0, e.length - 1).substr(1);
function BS(e, t, r, n = r) {
  let a, s, i;
  return t ? (Et.forEach(t, (l, u, c) => {
    let p = u ? NS(l) : l;
    if (e = e.resolve({
      context: n,
      parent: a,
      value: r
    }), e.innerType) {
      let d = c ? parseInt(p, 10) : 0;
      if (r && d >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);
      a = r, r = r && r[d], e = e.innerType;
    }
    if (!c) {
      if (!e.fields || !e.fields[p])
        throw new Error(`The schema does not contain the path: ${t}. (failed at: ${i} which is a type: "${e._type}")`);
      a = r, r = r && r[p], e = e.fields[p];
    }
    s = p, i = u ? "[" + l + "]" : "." + l;
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
class tt {
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
    return this.toArray().reduce((r, n) => r.concat(oe.isRef(n) ? t(n) : n), []);
  }
  add(t) {
    oe.isRef(t) ? this.refs.set(t.key, t) : this.list.add(t);
  }
  delete(t) {
    oe.isRef(t) ? this.refs.delete(t.key) : this.list.delete(t);
  }
  clone() {
    const t = new tt();
    return t.list = new Set(this.list), t.refs = new Map(this.refs), t;
  }
  merge(t, r) {
    const n = this.clone();
    return t.list.forEach((a) => n.add(a)), t.refs.forEach((a) => n.add(a)), r.list.forEach((a) => n.delete(a)), r.refs.forEach((a) => n.delete(a)), n;
  }
}
function Q() {
  return Q = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Q.apply(this, arguments);
}
class L {
  constructor(t) {
    this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new tt(), this._blacklist = new tt(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(ce.notType);
    }), this.type = (t == null ? void 0 : t.type) || "mixed", this.spec = Q({
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
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = Q({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Lt(Q({}, this.spec, t)), r;
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
    const a = Q({}, r.spec, n.spec);
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
    let n = this.resolve(Q({
      value: t
    }, r)), a = n._cast(t, r);
    if (t !== void 0 && r.assert !== !1 && n.isType(a) !== !0) {
      let s = Oe(t), i = Oe(a);
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
      originalValue: l = t,
      strict: u = this.spec.strict,
      abortEarly: c = this.spec.abortEarly
    } = r, p = t;
    u || (p = this._cast(p, Q({
      assert: !1
    }, r)));
    let d = {
      value: p,
      path: s,
      options: r,
      originalValue: l,
      schema: this,
      label: this.spec.label,
      sync: a,
      from: i
    }, f = [];
    this._typeError && f.push(this._typeError);
    let h = [];
    this._whitelistError && h.push(this._whitelistError), this._blacklistError && h.push(this._blacklistError), zt({
      args: d,
      value: p,
      path: s,
      sync: a,
      tests: f,
      endEarly: c
    }, (m) => {
      if (m)
        return void n(m, p);
      zt({
        tests: this.tests.concat(h),
        args: d,
        path: s,
        sync: a,
        value: p,
        endEarly: c
      }, n);
    });
  }
  validate(t, r, n) {
    let a = this.resolve(Q({}, r, {
      value: t
    }));
    return typeof n == "function" ? a._validate(t, r, n) : new Promise((s, i) => a._validate(t, r, (l, u) => {
      l ? i(l) : s(u);
    }));
  }
  validateSync(t, r) {
    let n = this.resolve(Q({}, r, {
      value: t
    })), a;
    return n._validate(t, Q({}, r, {
      sync: !0
    }), (s, i) => {
      if (s)
        throw s;
      a = i;
    }), a;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (N.isError(n))
        return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (N.isError(n))
        return !1;
      throw n;
    }
  }
  _getDefault() {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this) : Lt(t);
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
  defined(t = ce.defined) {
    return this.test({
      message: t,
      name: "defined",
      exclusive: !0,
      test(r) {
        return r !== void 0;
      }
    });
  }
  required(t = ce.required) {
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
    }, r.message === void 0 && (r.message = ce.default), typeof r.test != "function")
      throw new TypeError("`test` is a required parameters");
    let n = this.clone(), a = Qe(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((i) => !(i.OPTIONS.name === r.name && (s || i.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = _s(t).map((s) => new oe(s));
    return a.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(new Eb(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r._typeError = Qe({
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
  oneOf(t, r = ce.oneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._whitelist.add(a), n._blacklist.delete(a);
    }), n._whitelistError = Qe({
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
  notOneOf(t, r = ce.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n._blacklistError = Qe({
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
      })).filter((s, i, l) => l.findIndex((u) => u.name === s.name) === i)
    };
  }
}
L.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"])
  L.prototype[`${e}At`] = function(t, r, n = {}) {
    const {
      parent: a,
      parentPath: s,
      schema: i
    } = BS(this, t, r, n.context);
    return i[e](a && a[s], Q({}, n, {
      parent: a,
      path: t
    }));
  };
for (const e of ["equals", "is"])
  L.prototype[e] = L.prototype.oneOf;
for (const e of ["not", "nope"])
  L.prototype[e] = L.prototype.notOneOf;
L.prototype.optional = L.prototype.notRequired;
const zS = L;
zS.prototype;
const G = (e) => e == null;
let MS = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, QS = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, jS = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, qS = (e) => G(e) || e === e.trim(), GS = {}.toString();
function Te() {
  return new Ps();
}
class Ps extends L {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === GS ? t : r;
      });
    });
  }
  _typeCheck(t) {
    return t instanceof String && (t = t.valueOf()), typeof t == "string";
  }
  _isPresent(t) {
    return super._isPresent(t) && !!t.length;
  }
  length(t, r = q.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      test(n) {
        return G(n) || n.length === this.resolve(t);
      }
    });
  }
  min(t, r = q.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(n) {
        return G(n) || n.length >= this.resolve(t);
      }
    });
  }
  max(t, r = q.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: t
      },
      test(n) {
        return G(n) || n.length <= this.resolve(t);
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
      message: a || q.matches,
      params: {
        regex: t
      },
      test: (i) => G(i) || i === "" && n || i.search(t) !== -1
    });
  }
  email(t = q.email) {
    return this.matches(MS, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = q.url) {
    return this.matches(QS, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = q.uuid) {
    return this.matches(jS, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = q.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: qS
    });
  }
  lowercase(t = q.lowercase) {
    return this.transform((r) => G(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => G(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = q.uppercase) {
    return this.transform((r) => G(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => G(r) || r === r.toUpperCase()
    });
  }
}
Te.prototype = Ps.prototype;
var VS = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function HS(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, a;
  if (a = VS.exec(e)) {
    for (var s = 0, i; i = t[s]; ++s)
      a[i] = +a[i] || 0;
    a[2] = (+a[2] || 1) - 1, a[3] = +a[3] || 1, a[7] = a[7] ? String(a[7]).substr(0, 3) : 0, (a[8] === void 0 || a[8] === "") && (a[9] === void 0 || a[9] === "") ? n = +new Date(a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : (a[8] !== "Z" && a[9] !== void 0 && (r = a[10] * 60 + a[11], a[9] === "+" && (r = 0 - r)), n = Date.UTC(a[1], a[2], a[3], a[4], a[5] + r, a[6], a[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let Ds = /* @__PURE__ */ new Date(""), KS = (e) => Object.prototype.toString.call(e) === "[object Date]";
class ks extends L {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = HS(t), isNaN(t) ? Ds : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return KS(t) && !isNaN(t.getTime());
  }
  prepareParam(t, r) {
    let n;
    if (oe.isRef(t))
      n = t;
    else {
      let a = this.cast(t);
      if (!this._typeCheck(a))
        throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = a;
    }
    return n;
  }
  min(t, r = Ut.min) {
    let n = this.prepareParam(t, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(a) {
        return G(a) || a >= this.resolve(n);
      }
    });
  }
  max(t, r = Ut.max) {
    let n = this.prepareParam(t, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      test(a) {
        return G(a) || a <= this.resolve(n);
      }
    });
  }
}
ks.INVALID_DATE = Ds;
ks.prototype;
function YS(e, t, r, n) {
  var a = -1, s = e == null ? 0 : e.length;
  for (n && s && (r = e[++a]); ++a < s; )
    r = t(r, e[a], a, e);
  return r;
}
var WS = YS;
function ZS(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var JS = ZS, XS = JS, e$ = {
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
}, t$ = XS(e$), r$ = t$, n$ = r$, a$ = Pe, s$ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, i$ = "\\u0300-\\u036f", o$ = "\\ufe20-\\ufe2f", l$ = "\\u20d0-\\u20ff", u$ = i$ + o$ + l$, c$ = "[" + u$ + "]", d$ = RegExp(c$, "g");
function p$(e) {
  return e = a$(e), e && e.replace(s$, n$).replace(d$, "");
}
var f$ = p$, h$ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function g$(e) {
  return e.match(h$) || [];
}
var m$ = g$, y$ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function v$(e) {
  return y$.test(e);
}
var E$ = v$, Ls = "\\ud800-\\udfff", b$ = "\\u0300-\\u036f", S$ = "\\ufe20-\\ufe2f", $$ = "\\u20d0-\\u20ff", _$ = b$ + S$ + $$, Us = "\\u2700-\\u27bf", Ns = "a-z\\xdf-\\xf6\\xf8-\\xff", x$ = "\\xac\\xb1\\xd7\\xf7", C$ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", w$ = "\\u2000-\\u206f", F$ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Bs = "A-Z\\xc0-\\xd6\\xd8-\\xde", T$ = "\\ufe0e\\ufe0f", zs = x$ + C$ + w$ + F$, Ms = "['’]", Sn = "[" + zs + "]", A$ = "[" + _$ + "]", Qs = "\\d+", I$ = "[" + Us + "]", js = "[" + Ns + "]", qs = "[^" + Ls + zs + Qs + Us + Ns + Bs + "]", O$ = "\\ud83c[\\udffb-\\udfff]", R$ = "(?:" + A$ + "|" + O$ + ")", P$ = "[^" + Ls + "]", Gs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Vs = "[\\ud800-\\udbff][\\udc00-\\udfff]", ge = "[" + Bs + "]", D$ = "\\u200d", $n = "(?:" + js + "|" + qs + ")", k$ = "(?:" + ge + "|" + qs + ")", _n = "(?:" + Ms + "(?:d|ll|m|re|s|t|ve))?", xn = "(?:" + Ms + "(?:D|LL|M|RE|S|T|VE))?", Hs = R$ + "?", Ks = "[" + T$ + "]?", L$ = "(?:" + D$ + "(?:" + [P$, Gs, Vs].join("|") + ")" + Ks + Hs + ")*", U$ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", N$ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", B$ = Ks + Hs + L$, z$ = "(?:" + [I$, Gs, Vs].join("|") + ")" + B$, M$ = RegExp([
  ge + "?" + js + "+" + _n + "(?=" + [Sn, ge, "$"].join("|") + ")",
  k$ + "+" + xn + "(?=" + [Sn, ge + $n, "$"].join("|") + ")",
  ge + "?" + $n + "+" + _n,
  ge + "+" + xn,
  N$,
  U$,
  Qs,
  z$
].join("|"), "g");
function Q$(e) {
  return e.match(M$) || [];
}
var j$ = Q$, q$ = m$, G$ = E$, V$ = Pe, H$ = j$;
function K$(e, t, r) {
  return e = V$(e), t = r ? void 0 : t, t === void 0 ? G$(e) ? H$(e) : q$(e) : e.match(t) || [];
}
var Y$ = K$, W$ = WS, Z$ = f$, J$ = Y$, X$ = "['’]", e1 = RegExp(X$, "g");
function t1(e) {
  return function(t) {
    return W$(J$(Z$(t).replace(e1, "")), e, "");
  };
}
var Ys = t1, r1 = Ys, n1 = r1(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), a1 = n1;
const Cn = /* @__PURE__ */ I(a1);
function s1(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++n < a; )
    s[n] = e[n + t];
  return s;
}
var i1 = s1, o1 = i1;
function l1(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : o1(e, t, r);
}
var u1 = l1, c1 = "\\ud800-\\udfff", d1 = "\\u0300-\\u036f", p1 = "\\ufe20-\\ufe2f", f1 = "\\u20d0-\\u20ff", h1 = d1 + p1 + f1, g1 = "\\ufe0e\\ufe0f", m1 = "\\u200d", y1 = RegExp("[" + m1 + c1 + h1 + g1 + "]");
function v1(e) {
  return y1.test(e);
}
var Ws = v1;
function E1(e) {
  return e.split("");
}
var b1 = E1, Zs = "\\ud800-\\udfff", S1 = "\\u0300-\\u036f", $1 = "\\ufe20-\\ufe2f", _1 = "\\u20d0-\\u20ff", x1 = S1 + $1 + _1, C1 = "\\ufe0e\\ufe0f", w1 = "[" + Zs + "]", Qt = "[" + x1 + "]", jt = "\\ud83c[\\udffb-\\udfff]", F1 = "(?:" + Qt + "|" + jt + ")", Js = "[^" + Zs + "]", Xs = "(?:\\ud83c[\\udde6-\\uddff]){2}", ei = "[\\ud800-\\udbff][\\udc00-\\udfff]", T1 = "\\u200d", ti = F1 + "?", ri = "[" + C1 + "]?", A1 = "(?:" + T1 + "(?:" + [Js, Xs, ei].join("|") + ")" + ri + ti + ")*", I1 = ri + ti + A1, O1 = "(?:" + [Js + Qt + "?", Qt, Xs, ei, w1].join("|") + ")", R1 = RegExp(jt + "(?=" + jt + ")|" + O1 + I1, "g");
function P1(e) {
  return e.match(R1) || [];
}
var D1 = P1, k1 = b1, L1 = Ws, U1 = D1;
function N1(e) {
  return L1(e) ? U1(e) : k1(e);
}
var B1 = N1, z1 = u1, M1 = Ws, Q1 = B1, j1 = Pe;
function q1(e) {
  return function(t) {
    t = j1(t);
    var r = M1(t) ? Q1(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? z1(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var G1 = q1, V1 = G1, H1 = V1("toUpperCase"), K1 = H1, Y1 = Pe, W1 = K1;
function Z1(e) {
  return W1(Y1(e).toLowerCase());
}
var J1 = Z1, X1 = J1, e_ = Ys, t_ = e_(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? X1(t) : t);
}), r_ = t_;
const n_ = /* @__PURE__ */ I(r_);
var a_ = gt, s_ = xs, i_ = Is;
function o_(e, t) {
  var r = {};
  return t = i_(t), s_(e, function(n, a, s) {
    a_(r, t(n, a, s), n);
  }), r;
}
var l_ = o_;
const u_ = /* @__PURE__ */ I(l_);
var vr = { exports: {} };
vr.exports = function(e) {
  return ni(c_(e), e);
};
vr.exports.array = ni;
function ni(e, t) {
  var r = e.length, n = new Array(r), a = {}, s = r, i = d_(t), l = p_(e);
  for (t.forEach(function(c) {
    if (!l.has(c[0]) || !l.has(c[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); s--; )
    a[s] || u(e[s], s, /* @__PURE__ */ new Set());
  return n;
  function u(c, p, d) {
    if (d.has(c)) {
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
    if (!a[p]) {
      a[p] = !0;
      var h = i.get(c) || /* @__PURE__ */ new Set();
      if (h = Array.from(h), p = h.length) {
        d.add(c);
        do {
          var m = h[--p];
          u(m, l.get(m), d);
        } while (p);
        d.delete(c);
      }
      n[--r] = c;
    }
  }
}
function c_(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.add(a[0]), t.add(a[1]);
  }
  return Array.from(t);
}
function d_(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.has(a[0]) || t.set(a[0], /* @__PURE__ */ new Set()), t.has(a[1]) || t.set(a[1], /* @__PURE__ */ new Set()), t.get(a[0]).add(a[1]);
  }
  return t;
}
function p_(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var f_ = vr.exports;
const h_ = /* @__PURE__ */ I(f_);
function g_(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([i, l]) => `${i}-${l}`));
  function s(i, l) {
    let u = Et.split(i)[0];
    n.add(u), a.has(`${l}-${u}`) || r.push([l, u]);
  }
  for (const i in e)
    if (Je(e, i)) {
      let l = e[i];
      n.add(i), oe.isRef(l) && l.isSibling ? s(l.path, i) : $s(l) && "deps" in l && l.deps.forEach((u) => s(u, i));
    }
  return h_.array(Array.from(n), r).reverse();
}
function wn(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if (((s = t.path) == null ? void 0 : s.indexOf(n)) !== -1)
      return r = a, !0;
  }), r;
}
function ai(e) {
  return (t, r) => wn(e, t) - wn(e, r);
}
function me() {
  return me = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, me.apply(this, arguments);
}
let Fn = (e) => Object.prototype.toString.call(e) === "[object Object]";
function m_(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const y_ = ai([]);
class si extends L {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = y_, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
    return Fn(t) || typeof t == "function";
  }
  _cast(t, r = {}) {
    var n;
    let a = super._cast(t, r);
    if (a === void 0)
      return this.getDefault();
    if (!this._typeCheck(a))
      return a;
    let s = this.fields, i = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, l = this._nodes.concat(Object.keys(a).filter((d) => this._nodes.indexOf(d) === -1)), u = {}, c = me({}, r, {
      parent: u,
      __validating: r.__validating || !1
    }), p = !1;
    for (const d of l) {
      let f = s[d], h = Je(a, d);
      if (f) {
        let m, y = a[d];
        c.path = (r.path ? `${r.path}.` : "") + d, f = f.resolve({
          value: y,
          context: r.context,
          parent: u
        });
        let E = "spec" in f ? f.spec : void 0, g = E == null ? void 0 : E.strict;
        if (E != null && E.strip) {
          p = p || d in a;
          continue;
        }
        m = !r.__validating || !g ? (
          // TODO: use _cast, this is double resolving
          f.cast(a[d], c)
        ) : a[d], m !== void 0 && (u[d] = m);
      } else
        h && !i && (u[d] = a[d]);
      u[d] !== a[d] && (p = !0);
    }
    return p ? u : a;
  }
  _validate(t, r = {}, n) {
    let a = [], {
      sync: s,
      from: i = [],
      originalValue: l = t,
      abortEarly: u = this.spec.abortEarly,
      recursive: c = this.spec.recursive
    } = r;
    i = [{
      schema: this,
      value: l
    }, ...i], r.__validating = !0, r.originalValue = l, r.from = i, super._validate(t, r, (p, d) => {
      if (p) {
        if (!N.isError(p) || u)
          return void n(p, d);
        a.push(p);
      }
      if (!c || !Fn(d)) {
        n(a[0] || null, d);
        return;
      }
      l = l || d;
      let f = this._nodes.map((h) => (m, y) => {
        let E = h.indexOf(".") === -1 ? (r.path ? `${r.path}.` : "") + h : `${r.path || ""}["${h}"]`, g = this.fields[h];
        if (g && "validate" in g) {
          g.validate(d[h], me({}, r, {
            // @ts-ignore
            path: E,
            from: i,
            // inner fields are always strict:
            // 1. this isn't strict so the casting will also have cast inner values
            // 2. this is strict in which case the nested values weren't cast either
            strict: !0,
            parent: d,
            originalValue: l[h]
          }), y);
          return;
        }
        y(null);
      });
      zt({
        sync: s,
        tests: f,
        value: d,
        errors: a,
        endEarly: u,
        sort: this._sortErrors,
        path: r.path
      }, n);
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.fields = me({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), n = r.fields;
    for (let [a, s] of Object.entries(this.fields)) {
      const i = n[a];
      i === void 0 ? n[a] = s : i instanceof L && s instanceof L && (n[a] = s.concat(i));
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
    return n.fields = a, n._sortErrors = ai(Object.keys(a)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = g_(a, n._excludedEdges), n;
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
    let a = Et.getter(t, !0);
    return this.transform((s) => {
      if (s == null)
        return s;
      let i = s;
      return Je(s, t) && (i = me({}, s), n || delete i[t], i[r] = a(s)), i;
    });
  }
  noUnknown(t = !0, r = Nt.noUnknown) {
    typeof t == "string" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(a) {
        if (a == null)
          return !0;
        const s = m_(this.schema, a);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = Nt.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => r && u_(r, (n, a) => t(a)));
  }
  camelCase() {
    return this.transformKeys(n_);
  }
  snakeCase() {
    return this.transformKeys(Cn);
  }
  constantCase() {
    return this.transformKeys((t) => Cn(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = Os(this.fields, (r) => r.describe()), t;
  }
}
function Ge(e) {
  return new si(e);
}
Ge.prototype = si.prototype;
const v_ = {
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
}, E_ = Ge({
  task: Ge({
    title: Te().required("Title is required"),
    recordType: Te().required("Record type is required"),
    serializer: Te().required("Serializer is required"),
    mode: Te().required("Mode is required")
  }),
  metadata: Ge().nullable()
}), b_ = ({ onSubmit: e }) => {
  const [t, r] = B(void 0), n = async (a) => {
    try {
      await YE(a.task, a.metadata, a.files, {
        autoValidate: !!a.metadata,
        onProgress(s, i) {
          r({
            [s]: i
          });
        }
      }), e == null || e();
    } catch (s) {
      throw console.error("Error creating import task:", s), s;
    }
  };
  return /* @__PURE__ */ o.createElement(
    Ii,
    {
      formik: {
        initialValues: v_,
        validationSchema: E_,
        onSubmit: n
      }
    },
    /* @__PURE__ */ o.createElement(tb, { progress: t })
  );
}, S_ = () => {
  const [e, t] = B(!1), { refreshSearch: r } = vt(), n = T(() => {
    t(!1), r();
  }, [r]);
  return /* @__PURE__ */ o.createElement(
    se,
    {
      closeIcon: !0,
      onClose: () => t(!1),
      onOpen: () => t(!0),
      open: e,
      trigger: /* @__PURE__ */ o.createElement(D, { color: "green", icon: !0, labelPosition: "left" }, /* @__PURE__ */ o.createElement(C, { name: "add" }), "New Import")
    },
    /* @__PURE__ */ o.createElement(Ei, null, "New Import Task"),
    /* @__PURE__ */ o.createElement(bi, null, /* @__PURE__ */ o.createElement(b_, { onSubmit: n })),
    /* @__PURE__ */ o.createElement(Si, null, /* @__PURE__ */ o.createElement(D, { onClick: () => t(!1) }, "Close"))
  );
}, $_ = ({
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
    const l = ((u = e.filters) == null ? void 0 : u.filter(
      (c) => c[0] !== "status"
    )) || [];
    i && l.push(["status", i]), t({
      ...e,
      filters: l,
      page: 1
    });
  };
  return /* @__PURE__ */ o.createElement(Ae, { activeIndex: 0, compact: !0, size: "tiny" }, r.map(({ key: i, label: l, value: u }) => /* @__PURE__ */ o.createElement(
    Ae.Item,
    {
      key: i,
      name: i,
      active: (n == null ? void 0 : n[1]) === u || u === null && !n,
      onClick: () => a(u)
    },
    l
  )));
}, ii = za($_), __ = ({
  appId: e = "search"
}) => {
  const { showFacets: t, showImportModal: r } = vt().config;
  return /* @__PURE__ */ o.createElement(v, { id: `${e}.SearchBarRow` }, /* @__PURE__ */ o.createElement(
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
    t && /* @__PURE__ */ o.createElement("div", { style: { flex: "0 0 auto" } }, /* @__PURE__ */ o.createElement(ii, null)),
    /* @__PURE__ */ o.createElement("div", { style: { flex: "1 1 auto", minInlineSize: "15rem" } }, /* @__PURE__ */ o.createElement(
      CE,
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
    r && /* @__PURE__ */ o.createElement("div", { style: { flex: "0 0 auto" } }, /* @__PURE__ */ o.createElement(S_, null))
  ));
}, x_ = () => {
  const { config: e } = vt();
  return /* @__PURE__ */ o.createElement(U, null, /* @__PURE__ */ o.createElement(U.Row, { verticalAlign: "middle" }, /* @__PURE__ */ o.createElement(U.Column, { width: 4, textAlign: "left" }, /* @__PURE__ */ o.createElement(rE, { label: (t) => /* @__PURE__ */ o.createElement("div", null, t, " item(s)") })), /* @__PURE__ */ o.createElement(U.Column, { width: 8, textAlign: "center" }, /* @__PURE__ */ o.createElement(dE, { options: { size: "mini" } })), /* @__PURE__ */ o.createElement(U.Column, { width: 4, textAlign: "right" }, /* @__PURE__ */ o.createElement(
    $E,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ o.createElement("p", null, t, " results per page")
    }
  ))));
}, oi = ({
  config: e = {},
  overriddenComponents: t = {}
}) => {
  var s, i, l, u, c;
  const r = {
    ...re,
    ...e,
    initialQueryState: {
      ...re.initialQueryState,
      ...e.initialQueryState
    },
    layoutOptions: {
      ...re.layoutOptions,
      ...e.layoutOptions
    },
    paginationOptions: {
      ...re.paginationOptions,
      ...e.paginationOptions,
      resultsPerPage: ((s = e.paginationOptions) == null ? void 0 : s.resultsPerPage) || re.paginationOptions.resultsPerPage
    },
    searchApi: {
      ...re.searchApi,
      ...e.searchApi,
      axios: {
        ...re.searchApi.axios,
        ...(i = e.searchApi) == null ? void 0 : i.axios,
        headers: {
          ...re.searchApi.axios.headers,
          ...(u = (l = e.searchApi) == null ? void 0 : l.axios) == null ? void 0 : u.headers
        }
      },
      invenio: {
        ...re.searchApi.invenio,
        ...(c = e.searchApi) == null ? void 0 : c.invenio
      }
    },
    showFacets: e.showFacets ?? !0,
    showImportModal: e.showImportModal ?? !0,
    showSearchFooter: e.showSearchFooter ?? !0
  }, n = new pa(r.searchApi), a = {
    [`${r.appId}.ResultsList.item`]: JE,
    [`${r.appId}.ResultsList.container`]: XE,
    [`${r.appId}.SearchFacets`]: ii,
    ...t
  };
  return /* @__PURE__ */ o.createElement(gi.Provider, { value: a }, /* @__PURE__ */ o.createElement(
    Mv,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ o.createElement(kE, { config: r }, /* @__PURE__ */ o.createElement(__, { appId: r.appId }), /* @__PURE__ */ o.createElement(vE, null, /* @__PURE__ */ o.createElement(sE, null), /* @__PURE__ */ o.createElement(Ya, null)), r.showSearchFooter && /* @__PURE__ */ o.createElement(x_, null))
  ));
}, C_ = ({
  totalRecords: e = 0,
  validatedRecords: t = 0,
  errorRecords: r = 0,
  successRecords: n = 0,
  showWhenEmpty: a = !1,
  className: s = "",
  style: i = {}
}) => {
  const l = e > 0 ? t / e * 100 : 0, u = e > 0 ? r / e * 100 : 0, c = e > 0 ? n / e * 100 : 0;
  if (e === 0 && !a)
    return null;
  const p = [
    {
      color: "blue",
      icon: "check circle",
      title: "Validation",
      value: t,
      label: `of ${e} Validated`,
      progress: l,
      progressLabel: `${l.toFixed(1)}% Complete`
    },
    {
      color: "red",
      icon: "exclamation triangle",
      title: "Errors",
      value: r,
      label: "Records with Issues",
      progress: u,
      progressLabel: `${u.toFixed(1)}% of Total`
    },
    {
      color: "green",
      icon: "upload",
      title: "Import",
      value: n,
      label: "Successfully Imported",
      progress: c,
      progressLabel: `${c.toFixed(1)}% Complete`
    }
  ];
  return /* @__PURE__ */ o.createElement(K, { basic: !0, className: s, style: i }, /* @__PURE__ */ o.createElement(U, { columns: 3, stackable: !0 }, p.map((d) => /* @__PURE__ */ o.createElement(U.Column, { key: d.title }, /* @__PURE__ */ o.createElement(R, { fluid: !0 }, /* @__PURE__ */ o.createElement(R.Content, null, /* @__PURE__ */ o.createElement(R.Header, { textAlign: "center" }, d.title), /* @__PURE__ */ o.createElement(R.Description, { textAlign: "center" }, /* @__PURE__ */ o.createElement(
    bt,
    {
      size: "large",
      color: d.color,
      style: { margin: "1rem 0" }
    },
    /* @__PURE__ */ o.createElement(bt.Value, null, d.value),
    /* @__PURE__ */ o.createElement(bt.Label, null, d.label)
  ), /* @__PURE__ */ o.createElement(K, { basic: !0, textAlign: "center" }, /* @__PURE__ */ o.createElement(
    K.Inline,
    {
      basic: !0,
      size: "small",
      style: { marginBottom: "0.5rem" }
    },
    d.progressLabel
  ), /* @__PURE__ */ o.createElement(
    $i,
    {
      percent: d.progress,
      color: d.color,
      size: "small",
      style: { marginBottom: "0.5rem" }
    }
  )))))))));
}, li = fi(
  void 0
), w_ = ({
  taskId: e,
  children: t
}) => /* @__PURE__ */ o.createElement(li.Provider, { value: { taskId: e } }, /* @__PURE__ */ o.createElement(
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
)), ui = () => {
  const e = w(li);
  if (!e)
    throw new Error("useTaskDetails must be used within a TaskDetailsProvider");
  return e;
}, F_ = ({ children: e }) => /* @__PURE__ */ o.createElement(Rn, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ o.createElement(Pn, null, /* @__PURE__ */ o.createElement(nt, null, /* @__PURE__ */ o.createElement(H, null, "ID"), /* @__PURE__ */ o.createElement(H, null, "Title"), /* @__PURE__ */ o.createElement(H, null, "Status"), /* @__PURE__ */ o.createElement(H, null))), /* @__PURE__ */ o.createElement(Dn, null, e)), T_ = ({
  openModal: e,
  setOpenModal: t,
  result: r
}) => /* @__PURE__ */ o.createElement(se, { open: e, onClose: () => t(!1), closeIcon: !0 }, /* @__PURE__ */ o.createElement(se.Header, null, "Record Errors"), /* @__PURE__ */ o.createElement(se.Content, null, r.errors && r.errors.length > 0 ? /* @__PURE__ */ o.createElement(O, { negative: !0, icon: !0 }, /* @__PURE__ */ o.createElement(C, { name: "exclamation triangle" }), /* @__PURE__ */ o.createElement(O.Content, null, /* @__PURE__ */ o.createElement(O.Header, null, "Serializer validation failed"), /* @__PURE__ */ o.createElement(de, { bulleted: !0 }, r.errors.map((n) => /* @__PURE__ */ o.createElement(de.Item, { key: `${n.type}-${r.id}` }, n.msg))))) : /* @__PURE__ */ o.createElement(O, { positive: !0, icon: !0 }, /* @__PURE__ */ o.createElement(C, { name: "check circle" }), /* @__PURE__ */ o.createElement(O.Content, null, /* @__PURE__ */ o.createElement(O.Header, null, "Validation successful"), "No errors found for this record."))), /* @__PURE__ */ o.createElement(se.Actions, null, /* @__PURE__ */ o.createElement(D, { onClick: () => t(!1), content: "Close", primary: !0 }))), A_ = ({
  result: e,
  index: t
}) => {
  var d;
  const [r, n] = B(
    "idle"
  ), [a, s] = B(!1);
  if (!e)
    return null;
  const i = async () => {
    try {
      n("copying"), await navigator.clipboard.writeText(e.id), n("copied"), setTimeout(() => {
        n("idle");
      }, 2e3);
    } catch {
      n("idle");
    }
  }, l = e.errors && e.errors.length > 0, u = ME(e.status), c = (f) => f === "red" ? "times" : f === "green" || f === "blue" ? "check" : "question", p = [
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
          await ZE(e.id), console.log(`Record ${e.id} is being processed.`);
        } catch (f) {
          console.error("Error running record:", f);
        }
      }
    },
    {
      key: "view-details",
      text: "View Details",
      value: "view-details",
      icon: "info circle",
      onClick: () => {
        console.log(`Viewing details for record ${e.id}`);
      }
    }
  ];
  return /* @__PURE__ */ o.createElement(nt, { key: t }, /* @__PURE__ */ o.createElement(V, null, /* @__PURE__ */ o.createElement("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem" } }, /* @__PURE__ */ o.createElement("code", { style: { fontSize: "0.9em", color: "#666" } }, e.id.length > 20 ? `${e.id.substring(0, 20)}…` : e.id), /* @__PURE__ */ o.createElement(
    Er,
    {
      content: r === "copied" ? "Copied!" : "Copy ID",
      trigger: /* @__PURE__ */ o.createElement(
        D,
        {
          size: "mini",
          circular: !0,
          icon: !0,
          loading: r === "copying",
          onClick: i,
          color: r === "copied" ? "green" : void 0
        },
        /* @__PURE__ */ o.createElement(C, { name: r === "copied" ? "check" : "copy" })
      ),
      position: "top center",
      size: "mini"
    }
  ))), /* @__PURE__ */ o.createElement(V, null, /* @__PURE__ */ o.createElement("div", { style: { maxWidth: "300px" } }, ((d = e.src_data) == null ? void 0 : d.title) || /* @__PURE__ */ o.createElement("em", { style: { color: "#999" } }, "No Title Available"))), /* @__PURE__ */ o.createElement(V, null, /* @__PURE__ */ o.createElement(ae, { color: u, size: "small" }, /* @__PURE__ */ o.createElement(C, { name: c(u) }), Ze(e.status)), l && /* @__PURE__ */ o.createElement(
    Er,
    {
      content: `${e.errors.length} error${e.errors.length > 1 ? "s" : ""} found`,
      trigger: /* @__PURE__ */ o.createElement(
        C,
        {
          name: "exclamation triangle",
          color: "red",
          style: { marginLeft: "0.5rem", cursor: "help" }
        }
      ),
      position: "top center",
      size: "mini"
    }
  )), /* @__PURE__ */ o.createElement(V, { textAlign: "right" }, /* @__PURE__ */ o.createElement(
    ie,
    {
      button: !0,
      className: "icon",
      floating: !0,
      labeled: !0,
      icon: "ellipsis horizontal",
      text: "Actions",
      size: "mini"
    },
    /* @__PURE__ */ o.createElement(ie.Menu, null, p.map((f) => /* @__PURE__ */ o.createElement(
      ie.Item,
      {
        key: f.key,
        icon: f.icon,
        text: f.text,
        disabled: f.disabled,
        onClick: f.onClick
      }
    )))
  ), /* @__PURE__ */ o.createElement(
    T_,
    {
      setOpenModal: s,
      openModal: a,
      result: e
    }
  )));
}, I_ = () => {
  const { taskId: e } = ui(), t = {
    "search.SearchBarRow": () => null,
    "search.ResultsList.container": F_,
    "search.ResultsList.item": A_
  };
  return /* @__PURE__ */ o.createElement("div", null, /* @__PURE__ */ o.createElement(Ie, { as: "h3" }, "Task Records"), /* @__PURE__ */ o.createElement(
    oi,
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
}, O_ = ({
  fileInputRef: e,
  accept: t,
  maxSize: r,
  maxFiles: n,
  disabled: a = !1,
  isDragOver: s,
  uploadFiles: i,
  onInputChange: l,
  onDragOver: u,
  onDragLeave: c,
  onDrop: p,
  onFileDialogOpen: d
}) => /* @__PURE__ */ o.createElement(Tn, null, /* @__PURE__ */ o.createElement(
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
), /* @__PURE__ */ o.createElement(
  K,
  {
    placeholder: !0,
    className: `file-drop-zone ${s ? "drag-over" : ""}`,
    onDragOver: u,
    onDragLeave: c,
    onDrop: p,
    style: {
      minHeight: "120px",
      border: s ? "2px dashed #2185d0" : "2px dashed #d4d4d5",
      backgroundColor: s ? "#f8f9fa" : "transparent",
      cursor: a ? "not-allowed" : "pointer",
      opacity: a ? 0.6 : 1
    },
    onClick: d
  },
  /* @__PURE__ */ o.createElement("div", { style: { textAlign: "center", padding: "20px" } }, /* @__PURE__ */ o.createElement(
    C,
    {
      name: "cloud upload",
      size: "huge",
      color: s ? "blue" : "grey"
    }
  ), /* @__PURE__ */ o.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ o.createElement("p", null, /* @__PURE__ */ o.createElement("strong", null, "Drop files here or click to select")), /* @__PURE__ */ o.createElement("p", { style: { fontSize: "12px", color: "#666" } }, "Max size: ", gr(r), " | Max files: ", n), i.length > 0 && /* @__PURE__ */ o.createElement(
    "p",
    {
      style: { fontSize: "12px", color: "#2185d0", marginTop: "8px" }
    },
    /* @__PURE__ */ o.createElement("strong", null, i.length, " files selected •", " ", fs(i), " total")
  )))
)), R_ = ({
  onUploadError: e
} = {}) => {
  const [t, r] = B([]), [n] = B(!1), a = T(
    (u, c, p) => c && !c.split(",").map((h) => h.trim()).some((h) => h.startsWith(".") ? u.name.toLowerCase().endsWith(h.toLowerCase()) : u.type.match(new RegExp(h.replace("*", ".*")))) ? `File type not accepted. Accepted types: ${c}` : p && u.size > p ? `File size exceeds maximum of ${(p / 1024 / 1024).toFixed(2)}MB` : null,
    []
  ), s = T(
    (u, c, p, d) => {
      const f = [], h = [];
      for (const m of u) {
        if (d && t.length + f.length >= d) {
          h.push(`Maximum ${d} files allowed`);
          break;
        }
        const y = a(m, c, p);
        if (y) {
          h.push(`${m.name}: ${y}`);
          continue;
        }
        if (t.some(
          (g) => g.file.name === m.name && g.file.size === m.size
        )) {
          h.push(`${m.name}: File already selected`);
          continue;
        }
        f.push({
          file: m,
          id: `${m.name}-${m.size}-${Date.now()}`
        });
      }
      return h.length > 0 && (e == null || e(h.join(", "))), r((m) => [...m, ...f]), f;
    },
    [t, a, e]
  ), i = T((u) => {
    r((c) => c.filter((p) => p.id !== u));
  }, []), l = T(() => {
    r([]);
  }, []);
  return {
    uploadFiles: t,
    isUploading: n,
    addFiles: s,
    removeFile: i,
    clearFiles: l
  };
}, P_ = ({
  uploadFiles: e,
  isUploading: t,
  handleRemoveFile: r,
  handleClearFiles: n
}) => /* @__PURE__ */ o.createElement(K, null, /* @__PURE__ */ o.createElement(
  "div",
  {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px"
    }
  },
  /* @__PURE__ */ o.createElement("strong", null, "Selected Files (", e.length, ") •", " ", fs(e)),
  /* @__PURE__ */ o.createElement(
    D,
    {
      size: "mini",
      basic: !0,
      icon: "trash",
      content: "Clear All",
      onClick: n,
      disabled: t
    }
  )
), /* @__PURE__ */ o.createElement(de, { divided: !0 }, e.map((a) => /* @__PURE__ */ o.createElement(de.Item, { key: a.id }, /* @__PURE__ */ o.createElement(de.Content, null, /* @__PURE__ */ o.createElement(
  "div",
  {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  },
  /* @__PURE__ */ o.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ o.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }
    },
    /* @__PURE__ */ o.createElement(C, { name: "file" }),
    /* @__PURE__ */ o.createElement("span", null, a.file.name),
    /* @__PURE__ */ o.createElement(ae, { size: "mini", basic: !0 }, gr(a.file.size))
  ), a.error && /* @__PURE__ */ o.createElement(O, { negative: !0, size: "mini", style: { marginTop: "5px" } }, a.error)),
  /* @__PURE__ */ o.createElement(
    D,
    {
      size: "mini",
      basic: !0,
      icon: "close",
      onClick: () => r(a.id),
      disabled: t
    }
  )
)))))), ci = ({
  onChange: e,
  accept: t = ".csv,.json,.xlsx,.txt",
  maxSize: r = 10 * 1024 * 1024,
  // 10MB
  maxFiles: n = 5,
  disabled: a = !1,
  error: s
}) => {
  const i = hi(null), [l, u] = o.useState(!1), { uploadFiles: c, isUploading: p, addFiles: d, removeFile: f, clearFiles: h } = R_({
    onUploadComplete: (b) => {
      e(b);
    },
    onUploadError: (b) => {
      console.error("Upload error:", b);
    }
  }), m = T(
    (b) => {
      if (!b || b.length === 0)
        return;
      const ee = Array.from(b), te = d(ee, t, r, n);
      if (te.length > 0) {
        const di = [...c, ...te].map((pi) => pi.file);
        e(di);
      }
    },
    [d, t, r, n, e, c]
  ), y = T(
    (b) => {
      m(b.target.files), i.current && (i.current.value = "");
    },
    [m]
  ), E = T(
    (b) => {
      b.preventDefault(), a || u(!0);
    },
    [a]
  ), g = T((b) => {
    b.preventDefault(), u(!1);
  }, []), S = T(
    (b) => {
      b.preventDefault(), u(!1), !a && m(b.dataTransfer.files);
    },
    [a, m]
  ), F = T(() => {
    var b;
    a || (b = i.current) == null || b.click();
  }, [a]), k = T(
    (b) => {
      f(b);
      const ee = c.filter((te) => te.id !== b).map((te) => te.file);
      e(ee);
    },
    [f, c, e]
  ), W = T(() => {
    h(), e([]);
  }, [h, e]);
  return /* @__PURE__ */ o.createElement("div", null, /* @__PURE__ */ o.createElement(
    O_,
    {
      fileInputRef: i,
      accept: t,
      maxSize: r,
      maxFiles: n,
      isDragOver: l,
      disabled: a,
      uploadFiles: c,
      onInputChange: y,
      onDragOver: E,
      onDragLeave: g,
      onDrop: S,
      onFileDialogOpen: F
    }
  ), s && /* @__PURE__ */ o.createElement(O, { negative: !0, size: "small" }, /* @__PURE__ */ o.createElement(C, { name: "exclamation triangle" }), s), c.length > 0 && /* @__PURE__ */ o.createElement(
    P_,
    {
      uploadFiles: c,
      isUploading: p,
      handleRemoveFile: k,
      handleClearFiles: W
    }
  ));
}, D_ = () => {
  const { taskId: e } = ui(), [t, r] = B(null), [n, a] = B([]), [s, i] = B(!1), l = (d) => {
    var h;
    const f = ((h = d.target.files) == null ? void 0 : h[0]) || null;
    r(f || null);
  }, u = (d) => {
    a(d);
  }, c = () => {
    i(!1), r(null), a([]);
  }, p = async () => {
    if (!(!t && n.length === 0))
      try {
        await WE(
          e,
          t,
          n.length > 0 ? n : void 0,
          {
            onProgress: (d, f, h) => {
              console.log(`${d}: ${f}% ${h || ""}`);
            },
            onError: (d, f) => {
              console.error(`Error during ${f}:`, d);
            }
          }
        ), t && await vs(e, {
          autoExecute: !0,
          // Auto-execute import after validation
          onProgress: (d, f, h) => {
            console.log(`${d}: ${f}% ${h || ""}`);
          },
          onError: (d, f) => {
            console.error(`Error during ${f}:`, d);
          }
        }), i(!1), r(null), a([]);
      } catch (d) {
        console.error("Error uploading content:", d);
      }
  };
  return /* @__PURE__ */ o.createElement(
    se,
    {
      open: s,
      onOpen: () => i(!0),
      onClose: c,
      size: "small",
      closeIcon: !0,
      trigger: /* @__PURE__ */ o.createElement(D, { icon: "upload", size: "small", content: "Upload Content" })
    },
    /* @__PURE__ */ o.createElement(Ie, { icon: !0 }, /* @__PURE__ */ o.createElement(C, { name: "upload" }), "Upload Metadata & Files"),
    /* @__PURE__ */ o.createElement(se.Content, null, /* @__PURE__ */ o.createElement(ye, { onSubmit: p }, /* @__PURE__ */ o.createElement(ye.Field, null, /* @__PURE__ */ o.createElement("label", { htmlFor: "fileInput" }, "Select Metadata File (Optional)"), /* @__PURE__ */ o.createElement(
      "input",
      {
        id: "fileInput",
        type: "file",
        onChange: l,
        accept: ".csv"
      }
    ), t && /* @__PURE__ */ o.createElement("div", { style: { marginTop: "0.5rem", color: "#666" } }, "Selected: ", t.name)), /* @__PURE__ */ o.createElement(ye.Field, null, /* @__PURE__ */ o.createElement(
      "div",
      {
        style: {
          marginBottom: "8px",
          fontSize: "14px",
          fontWeight: "bold"
        }
      },
      "Additional Files (Optional)"
    ), /* @__PURE__ */ o.createElement(
      ci,
      {
        value: n,
        onChange: u,
        accept: "*",
        maxSize: 10 * 1024 * 1024 * 1024,
        maxFiles: 100
      }
    )))),
    /* @__PURE__ */ o.createElement(se.Actions, null, /* @__PURE__ */ o.createElement(D, { onClick: c, color: "grey" }, /* @__PURE__ */ o.createElement(C, { name: "cancel" }), "Cancel"), /* @__PURE__ */ o.createElement(
      D,
      {
        onClick: p,
        color: "blue",
        disabled: !t && n.length === 0
      },
      /* @__PURE__ */ o.createElement(C, { name: "upload" }),
      "Upload"
    ))
  );
}, k_ = ({ taskId: e }) => {
  var f, h, m, y, E, g;
  const [t, r] = B(null), { getStatus: n, isGettingStatus: a, runBulkImport: s, isBulkImporting: i, error: l } = bs(e, { onStatusChangeSuccess: r });
  if (rt(() => {
    n();
  }, [n]), a || i)
    return /* @__PURE__ */ o.createElement(K, null, /* @__PURE__ */ o.createElement(On, { content: "Loading task details..." }));
  if (l)
    return /* @__PURE__ */ o.createElement(O, { negative: !0, icon: !0 }, /* @__PURE__ */ o.createElement(C, { name: "exclamation triangle" }), /* @__PURE__ */ o.createElement(O.Content, null, /* @__PURE__ */ o.createElement(O.Header, null, "Error Loading Task"), l));
  if (!t)
    return /* @__PURE__ */ o.createElement(O, { warning: !0, icon: !0 }, /* @__PURE__ */ o.createElement(C, { name: "search" }), /* @__PURE__ */ o.createElement(O.Content, null, /* @__PURE__ */ o.createElement(O.Header, null, "Task Not Found"), "The requested task could not be found."));
  const u = ((f = t.records_status) == null ? void 0 : f.total_records) || 0, c = ((h = t.records_status) == null ? void 0 : h.validated) || 0, p = ((m = t.records_status) == null ? void 0 : m.success) || 0, d = (((y = t.records_status) == null ? void 0 : y["import failed"]) || 0) + (((E = t.records_status) == null ? void 0 : E["validation failed"]) || 0) + (((g = t.records_status) == null ? void 0 : g["serializer validation failed"]) || 0);
  return /* @__PURE__ */ o.createElement(w_, { taskId: e }, /* @__PURE__ */ o.createElement(K.Group, { compact: !0, style: { border: "none", boxShadow: "none" } }, /* @__PURE__ */ o.createElement(K, null, /* @__PURE__ */ o.createElement(U, null, /* @__PURE__ */ o.createElement(U.Row, { verticalAlign: "middle" }, /* @__PURE__ */ o.createElement(U.Column, { width: 8, verticalAlign: "middle" }, /* @__PURE__ */ o.createElement(Ie, { as: "h2" }, /* @__PURE__ */ o.createElement(C, { name: "tasks", circular: !0 }), /* @__PURE__ */ o.createElement(Ie.Content, null, t.title)), t.status && /* @__PURE__ */ o.createElement(ps, { size: "large", status: t.status }, Ze(t.status))), /* @__PURE__ */ o.createElement(U.Column, { width: 8, textAlign: "right" }, /* @__PURE__ */ o.createElement(
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
    /* @__PURE__ */ o.createElement("div", null, /* @__PURE__ */ o.createElement(
      D,
      {
        size: "small",
        color: "blue",
        icon: "refresh",
        content: "Refresh",
        onClick: () => n(),
        loading: a
      }
    ), /* @__PURE__ */ o.createElement(D_, null), /* @__PURE__ */ o.createElement(
      D,
      {
        size: "small",
        color: "green",
        icon: "play",
        onClick: async () => {
          await s(), await n();
        },
        loading: i,
        disabled: !(t.status === "created" || t.status === "validated"),
        content: "Run Task"
      }
    ))
  ))), t.description && /* @__PURE__ */ o.createElement(U.Row, null, /* @__PURE__ */ o.createElement(U.Column, { width: 16 }, /* @__PURE__ */ o.createElement(O, { info: !0, icon: !0, size: "small" }, /* @__PURE__ */ o.createElement(C, { name: "info circle" }), /* @__PURE__ */ o.createElement(O.Content, null, /* @__PURE__ */ o.createElement(O.Header, null, "Notes"), t.description)))))), u > 0 && /* @__PURE__ */ o.createElement(K, { basic: !0 }, /* @__PURE__ */ o.createElement(
    C_,
    {
      totalRecords: u,
      validatedRecords: c,
      errorRecords: d,
      successRecords: p
    }
  ))), /* @__PURE__ */ o.createElement(I_, null));
}, Y_ = {
  Search: oi,
  TaskDetails: k_
}, W_ = {
  CREATED: "created",
  VALIDATING: "validating",
  SERIALIZER_VALIDATION_FAILED: "serializer validation failed",
  VALIDATION_FAILED: "validation failed",
  VALIDATED: "validated",
  IMPORT_FAILED: "import failed",
  IMPORTED: "success"
}, Z_ = {
  CREATED: "created",
  VALIDATING: "validating",
  VALIDATION_FAILED: "validated with failures",
  VALIDATED: "validated",
  IMPORTING: "importing",
  IMPORT_FAILED: "imported with failures",
  SUCCESS: "success",
  DAMAGED: "damaged"
}, J_ = {
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
  Y_ as BulkImporter,
  ci as FileUploader,
  S_ as ImportModal,
  Z_ as ImporterTaskStates,
  W_ as InvenioImporterRecordStatus,
  J_ as OrchestrationStepsEnum,
  oi as Search,
  k_ as TaskDetails,
  A_ as TaskRecordItem,
  Ze as capitalizeFirstLetter,
  H_ as createSearchApi,
  K_ as createSearchApiConfig,
  UE as formatDate,
  gr as formatFileSize,
  zE as getCsrfToken,
  ME as getStatusColor,
  LE as getTotalSize,
  fs as getTotalSizeFormatted,
  R_ as useFileUploader
};
