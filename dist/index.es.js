import o, { Component as F, useContext as $, useEffect as rt, useCallback as nt, useState as ee, Fragment as yi, createContext as bi } from "react";
import m, { OverridableContext as vi } from "react-overridable";
import Qe from "axios";
import ge from "qs";
import { connect as w, Provider as Si } from "react-redux";
import { Label as de, Icon as C, Input as Pn, Button as Q, List as Ve, Checkbox as kn, Card as B, Segment as oe, Header as pe, Menu as Fe, Pagination as Ei, Item as le, Loader as Dn, Dropdown as me, Image as _i, TableRow as at, TableCell as k, Table as Ln, TableHeader as Bn, TableHeaderCell as D, TableBody as Nn, Form as Er, Modal as we, ModalHeader as $i, ModalContent as xi, ModalActions as Ci, Grid as L, Message as z, Statistic as H, Divider as wi, Progress as Et } from "semantic-ui-react";
import { combineReducers as Ti, createStore as Ai, applyMiddleware as Fi } from "redux";
import Ii from "redux-thunk";
import Oi from "lodash";
import { TextField as Ri, SelectField as _t, TextAreaField as Pi, BaseForm as ki } from "react-invenio-forms";
import { useFormikContext as Di } from "formik";
var Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function A(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Li = Object.prototype;
function Bi(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Li;
  return e === r;
}
var st = Bi;
function Ni(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Un = Ni, Ui = Un, Mi = Ui(Object.keys, Object), zi = Mi, Qi = st, ji = zi, qi = Object.prototype, Vi = qi.hasOwnProperty;
function Gi(e) {
  if (!Qi(e))
    return ji(e);
  var t = [];
  for (var r in Object(e))
    Vi.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Mn = Gi, Hi = typeof Be == "object" && Be && Be.Object === Object && Be, zn = Hi, Yi = zn, Wi = typeof self == "object" && self && self.Object === Object && self, Ki = Yi || Wi || Function("return this")(), Y = Ki, Xi = Y, Zi = Xi.Symbol, ye = Zi, _r = ye, Qn = Object.prototype, Ji = Qn.hasOwnProperty, eo = Qn.toString, xe = _r ? _r.toStringTag : void 0;
function to(e) {
  var t = Ji.call(e, xe), r = e[xe];
  try {
    e[xe] = void 0;
    var n = !0;
  } catch {
  }
  var a = eo.call(e);
  return n && (t ? e[xe] = r : delete e[xe]), a;
}
var ro = to, no = Object.prototype, ao = no.toString;
function so(e) {
  return ao.call(e);
}
var io = so, $r = ye, oo = ro, lo = io, uo = "[object Null]", co = "[object Undefined]", xr = $r ? $r.toStringTag : void 0;
function po(e) {
  return e == null ? e === void 0 ? co : uo : xr && xr in Object(e) ? oo(e) : lo(e);
}
var re = po;
function ho(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var J = ho;
const fo = /* @__PURE__ */ A(J);
var go = re, mo = J, yo = "[object AsyncFunction]", bo = "[object Function]", vo = "[object GeneratorFunction]", So = "[object Proxy]";
function Eo(e) {
  if (!mo(e))
    return !1;
  var t = go(e);
  return t == bo || t == vo || t == yo || t == So;
}
var jn = Eo, _o = Y, $o = _o["__core-js_shared__"], xo = $o, $t = xo, Cr = function() {
  var e = /[^.]+$/.exec($t && $t.keys && $t.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Co(e) {
  return !!Cr && Cr in e;
}
var wo = Co, To = Function.prototype, Ao = To.toString;
function Fo(e) {
  if (e != null) {
    try {
      return Ao.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var qn = Fo, Io = jn, Oo = wo, Ro = J, Po = qn, ko = /[\\^$.*+?()[\]{}|]/g, Do = /^\[object .+?Constructor\]$/, Lo = Function.prototype, Bo = Object.prototype, No = Lo.toString, Uo = Bo.hasOwnProperty, Mo = RegExp(
  "^" + No.call(Uo).replace(ko, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function zo(e) {
  if (!Ro(e) || Oo(e))
    return !1;
  var t = Io(e) ? Mo : Do;
  return t.test(Po(e));
}
var Qo = zo;
function jo(e, t) {
  return e == null ? void 0 : e[t];
}
var qo = jo, Vo = Qo, Go = qo;
function Ho(e, t) {
  var r = Go(e, t);
  return Vo(r) ? r : void 0;
}
var se = Ho, Yo = se, Wo = Y, Ko = Yo(Wo, "DataView"), Xo = Ko, Zo = se, Jo = Y, el = Zo(Jo, "Map"), Vt = el, tl = se, rl = Y, nl = tl(rl, "Promise"), al = nl, sl = se, il = Y, ol = sl(il, "Set"), ll = ol, ul = se, cl = Y, dl = ul(cl, "WeakMap"), pl = dl, At = Xo, Ft = Vt, It = al, Ot = ll, Rt = pl, Vn = re, be = qn, wr = "[object Map]", hl = "[object Object]", Tr = "[object Promise]", Ar = "[object Set]", Fr = "[object WeakMap]", Ir = "[object DataView]", fl = be(At), gl = be(Ft), ml = be(It), yl = be(Ot), bl = be(Rt), ne = Vn;
(At && ne(new At(new ArrayBuffer(1))) != Ir || Ft && ne(new Ft()) != wr || It && ne(It.resolve()) != Tr || Ot && ne(new Ot()) != Ar || Rt && ne(new Rt()) != Fr) && (ne = function(e) {
  var t = Vn(e), r = t == hl ? e.constructor : void 0, n = r ? be(r) : "";
  if (n)
    switch (n) {
      case fl:
        return Ir;
      case gl:
        return wr;
      case ml:
        return Tr;
      case yl:
        return Ar;
      case bl:
        return Fr;
    }
  return t;
});
var Oe = ne;
function vl(e) {
  return e != null && typeof e == "object";
}
var W = vl, Sl = re, El = W, _l = "[object Arguments]";
function $l(e) {
  return El(e) && Sl(e) == _l;
}
var xl = $l, Or = xl, Cl = W, Gn = Object.prototype, wl = Gn.hasOwnProperty, Tl = Gn.propertyIsEnumerable, Al = Or(function() {
  return arguments;
}()) ? Or : function(e) {
  return Cl(e) && wl.call(e, "callee") && !Tl.call(e, "callee");
}, it = Al, Fl = Array.isArray, U = Fl;
const Hn = /* @__PURE__ */ A(U);
var Il = 9007199254740991;
function Ol(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Il;
}
var Gt = Ol, Rl = jn, Pl = Gt;
function kl(e) {
  return e != null && Pl(e.length) && !Rl(e);
}
var ot = kl, Ge = { exports: {} };
function Dl() {
  return !1;
}
var Ll = Dl;
Ge.exports;
(function(e, t) {
  var r = Y, n = Ll, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, l = i ? r.Buffer : void 0, u = l ? l.isBuffer : void 0, c = u || n;
  e.exports = c;
})(Ge, Ge.exports);
var lt = Ge.exports, Bl = re, Nl = Gt, Ul = W, Ml = "[object Arguments]", zl = "[object Array]", Ql = "[object Boolean]", jl = "[object Date]", ql = "[object Error]", Vl = "[object Function]", Gl = "[object Map]", Hl = "[object Number]", Yl = "[object Object]", Wl = "[object RegExp]", Kl = "[object Set]", Xl = "[object String]", Zl = "[object WeakMap]", Jl = "[object ArrayBuffer]", eu = "[object DataView]", tu = "[object Float32Array]", ru = "[object Float64Array]", nu = "[object Int8Array]", au = "[object Int16Array]", su = "[object Int32Array]", iu = "[object Uint8Array]", ou = "[object Uint8ClampedArray]", lu = "[object Uint16Array]", uu = "[object Uint32Array]", _ = {};
_[tu] = _[ru] = _[nu] = _[au] = _[su] = _[iu] = _[ou] = _[lu] = _[uu] = !0;
_[Ml] = _[zl] = _[Jl] = _[Ql] = _[eu] = _[jl] = _[ql] = _[Vl] = _[Gl] = _[Hl] = _[Yl] = _[Wl] = _[Kl] = _[Xl] = _[Zl] = !1;
function cu(e) {
  return Ul(e) && Nl(e.length) && !!_[Bl(e)];
}
var du = cu;
function pu(e) {
  return function(t) {
    return e(t);
  };
}
var Ht = pu, He = { exports: {} };
He.exports;
(function(e, t) {
  var r = zn, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, i = s && r.process, l = function() {
    try {
      var u = a && a.require && a.require("util").types;
      return u || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(He, He.exports);
var Yt = He.exports, hu = du, fu = Ht, Rr = Yt, Pr = Rr && Rr.isTypedArray, gu = Pr ? fu(Pr) : hu, Wt = gu, mu = Mn, yu = Oe, bu = it, vu = U, Su = ot, Eu = lt, _u = st, $u = Wt, xu = "[object Map]", Cu = "[object Set]", wu = Object.prototype, Tu = wu.hasOwnProperty;
function Au(e) {
  if (e == null)
    return !0;
  if (Su(e) && (vu(e) || typeof e == "string" || typeof e.splice == "function" || Eu(e) || $u(e) || bu(e)))
    return !e.length;
  var t = yu(e);
  if (t == xu || t == Cu)
    return !e.size;
  if (_u(e))
    return !mu(e).length;
  for (var r in e)
    if (Tu.call(e, r))
      return !1;
  return !0;
}
var Fu = Au;
const K = /* @__PURE__ */ A(Fu);
var Iu = re, Ou = W, Ru = "[object Symbol]";
function Pu(e) {
  return typeof e == "symbol" || Ou(e) && Iu(e) == Ru;
}
var Kt = Pu, ku = U, Du = Kt, Lu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bu = /^\w*$/;
function Nu(e, t) {
  if (ku(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Du(e) ? !0 : Bu.test(e) || !Lu.test(e) || t != null && e in Object(t);
}
var Xt = Nu, Uu = se, Mu = Uu(Object, "create"), ut = Mu, kr = ut;
function zu() {
  this.__data__ = kr ? kr(null) : {}, this.size = 0;
}
var Qu = zu;
function ju(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var qu = ju, Vu = ut, Gu = "__lodash_hash_undefined__", Hu = Object.prototype, Yu = Hu.hasOwnProperty;
function Wu(e) {
  var t = this.__data__;
  if (Vu) {
    var r = t[e];
    return r === Gu ? void 0 : r;
  }
  return Yu.call(t, e) ? t[e] : void 0;
}
var Ku = Wu, Xu = ut, Zu = Object.prototype, Ju = Zu.hasOwnProperty;
function ec(e) {
  var t = this.__data__;
  return Xu ? t[e] !== void 0 : Ju.call(t, e);
}
var tc = ec, rc = ut, nc = "__lodash_hash_undefined__";
function ac(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = rc && t === void 0 ? nc : t, this;
}
var sc = ac, ic = Qu, oc = qu, lc = Ku, uc = tc, cc = sc;
function ve(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ve.prototype.clear = ic;
ve.prototype.delete = oc;
ve.prototype.get = lc;
ve.prototype.has = uc;
ve.prototype.set = cc;
var dc = ve;
function pc() {
  this.__data__ = [], this.size = 0;
}
var hc = pc;
function fc(e, t) {
  return e === t || e !== e && t !== t;
}
var ct = fc, gc = ct;
function mc(e, t) {
  for (var r = e.length; r--; )
    if (gc(e[r][0], t))
      return r;
  return -1;
}
var dt = mc, yc = dt, bc = Array.prototype, vc = bc.splice;
function Sc(e) {
  var t = this.__data__, r = yc(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : vc.call(t, r, 1), --this.size, !0;
}
var Ec = Sc, _c = dt;
function $c(e) {
  var t = this.__data__, r = _c(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var xc = $c, Cc = dt;
function wc(e) {
  return Cc(this.__data__, e) > -1;
}
var Tc = wc, Ac = dt;
function Fc(e, t) {
  var r = this.__data__, n = Ac(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Ic = Fc, Oc = hc, Rc = Ec, Pc = xc, kc = Tc, Dc = Ic;
function Se(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Se.prototype.clear = Oc;
Se.prototype.delete = Rc;
Se.prototype.get = Pc;
Se.prototype.has = kc;
Se.prototype.set = Dc;
var pt = Se, Dr = dc, Lc = pt, Bc = Vt;
function Nc() {
  this.size = 0, this.__data__ = {
    hash: new Dr(),
    map: new (Bc || Lc)(),
    string: new Dr()
  };
}
var Uc = Nc;
function Mc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var zc = Mc, Qc = zc;
function jc(e, t) {
  var r = e.__data__;
  return Qc(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ht = jc, qc = ht;
function Vc(e) {
  var t = qc(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Gc = Vc, Hc = ht;
function Yc(e) {
  return Hc(this, e).get(e);
}
var Wc = Yc, Kc = ht;
function Xc(e) {
  return Kc(this, e).has(e);
}
var Zc = Xc, Jc = ht;
function ed(e, t) {
  var r = Jc(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var td = ed, rd = Uc, nd = Gc, ad = Wc, sd = Zc, id = td;
function Ee(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ee.prototype.clear = rd;
Ee.prototype.delete = nd;
Ee.prototype.get = ad;
Ee.prototype.has = sd;
Ee.prototype.set = id;
var Zt = Ee, Yn = Zt, od = "Expected a function";
function Jt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(od);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(a))
      return s.get(a);
    var i = e.apply(this, n);
    return r.cache = s.set(a, i) || s, i;
  };
  return r.cache = new (Jt.Cache || Yn)(), r;
}
Jt.Cache = Yn;
var ld = Jt, ud = ld, cd = 500;
function dd(e) {
  var t = ud(e, function(n) {
    return r.size === cd && r.clear(), n;
  }), r = t.cache;
  return t;
}
var pd = dd, hd = pd, fd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gd = /\\(\\)?/g, md = hd(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(fd, function(r, n, a, s) {
    t.push(a ? s.replace(gd, "$1") : n || r);
  }), t;
}), yd = md;
function bd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var vd = bd, Lr = ye, Sd = vd, Ed = U, _d = Kt, $d = 1 / 0, Br = Lr ? Lr.prototype : void 0, Nr = Br ? Br.toString : void 0;
function Wn(e) {
  if (typeof e == "string")
    return e;
  if (Ed(e))
    return Sd(e, Wn) + "";
  if (_d(e))
    return Nr ? Nr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -$d ? "-0" : t;
}
var xd = Wn, Cd = xd;
function wd(e) {
  return e == null ? "" : Cd(e);
}
var Re = wd, Td = U, Ad = Xt, Fd = yd, Id = Re;
function Od(e, t) {
  return Td(e) ? e : Ad(e, t) ? [e] : Fd(Id(e));
}
var ft = Od, Rd = Kt, Pd = 1 / 0;
function kd(e) {
  if (typeof e == "string" || Rd(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Pd ? "-0" : t;
}
var Pe = kd, Dd = ft, Ld = Pe;
function Bd(e, t) {
  t = Dd(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Ld(t[r++])];
  return r && r == n ? e : void 0;
}
var er = Bd, Nd = er;
function Ud(e, t, r) {
  var n = e == null ? void 0 : Nd(e, t);
  return n === void 0 ? r : n;
}
var Kn = Ud;
const Te = /* @__PURE__ */ A(Kn);
function Md(e, t) {
  return e != null && t in Object(e);
}
var zd = Md, Qd = 9007199254740991, jd = /^(?:0|[1-9]\d*)$/;
function qd(e, t) {
  var r = typeof e;
  return t = t ?? Qd, !!t && (r == "number" || r != "symbol" && jd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var gt = qd, Vd = ft, Gd = it, Hd = U, Yd = gt, Wd = Gt, Kd = Pe;
function Xd(e, t, r) {
  t = Vd(t, e);
  for (var n = -1, a = t.length, s = !1; ++n < a; ) {
    var i = Kd(t[n]);
    if (!(s = e != null && r(e, i)))
      break;
    e = e[i];
  }
  return s || ++n != a ? s : (a = e == null ? 0 : e.length, !!a && Wd(a) && Yd(i, a) && (Hd(e) || Gd(e)));
}
var Xn = Xd, Zd = zd, Jd = Xn;
function ep(e, t) {
  return e != null && Jd(e, t, Zd);
}
var tr = ep;
const tp = /* @__PURE__ */ A(tr);
var rp = se, np = function() {
  try {
    var e = rp(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Zn = np, Ur = Zn;
function ap(e, t, r) {
  t == "__proto__" && Ur ? Ur(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var mt = ap, sp = mt, ip = ct, op = Object.prototype, lp = op.hasOwnProperty;
function up(e, t, r) {
  var n = e[t];
  (!(lp.call(e, t) && ip(n, r)) || r === void 0 && !(t in e)) && sp(e, t, r);
}
var rr = up, cp = rr, dp = mt;
function pp(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var l = t[s], u = n ? n(r[l], e[l], l, r, e) : void 0;
    u === void 0 && (u = e[l]), a ? dp(r, l, u) : cp(r, l, u);
  }
  return r;
}
var ke = pp;
function hp(e) {
  return e;
}
var nr = hp;
function fp(e, t, r) {
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
var gp = fp, mp = gp, Mr = Math.max;
function yp(e, t, r) {
  return t = Mr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, s = Mr(n.length - t, 0), i = Array(s); ++a < s; )
      i[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(i), mp(e, this, l);
  };
}
var Jn = yp;
function bp(e) {
  return function() {
    return e;
  };
}
var vp = bp, Sp = vp, zr = Zn, Ep = nr, _p = zr ? function(e, t) {
  return zr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Sp(t),
    writable: !0
  });
} : Ep, $p = _p, xp = 800, Cp = 16, wp = Date.now;
function Tp(e) {
  var t = 0, r = 0;
  return function() {
    var n = wp(), a = Cp - (n - r);
    if (r = n, a > 0) {
      if (++t >= xp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Ap = Tp, Fp = $p, Ip = Ap, Op = Ip(Fp), ea = Op, Rp = nr, Pp = Jn, kp = ea;
function Dp(e, t) {
  return kp(Pp(e, t, Rp), e + "");
}
var Lp = Dp, Bp = ct, Np = ot, Up = gt, Mp = J;
function zp(e, t, r) {
  if (!Mp(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Np(r) && Up(t, r.length) : n == "string" && t in r) ? Bp(r[t], e) : !1;
}
var Qp = zp, jp = Lp, qp = Qp;
function Vp(e) {
  return jp(function(t, r) {
    var n = -1, a = r.length, s = a > 1 ? r[a - 1] : void 0, i = a > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, i && qp(r[0], r[1], i) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++n < a; ) {
      var l = r[n];
      l && e(t, l, n, s);
    }
    return t;
  });
}
var Gp = Vp;
function Hp(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Yp = Hp, Wp = Yp, Kp = it, Xp = U, Zp = lt, Jp = gt, eh = Wt, th = Object.prototype, rh = th.hasOwnProperty;
function nh(e, t) {
  var r = Xp(e), n = !r && Kp(e), a = !r && !n && Zp(e), s = !r && !n && !a && eh(e), i = r || n || a || s, l = i ? Wp(e.length, String) : [], u = l.length;
  for (var c in e)
    (t || rh.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Jp(c, u))) && l.push(c);
  return l;
}
var ta = nh;
function ah(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var sh = ah, ih = J, oh = st, lh = sh, uh = Object.prototype, ch = uh.hasOwnProperty;
function dh(e) {
  if (!ih(e))
    return lh(e);
  var t = oh(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !ch.call(e, n)) || r.push(n);
  return r;
}
var ph = dh, hh = ta, fh = ph, gh = ot;
function mh(e) {
  return gh(e) ? hh(e, !0) : fh(e);
}
var yt = mh, yh = ke, bh = Gp, vh = yt, Sh = bh(function(e, t) {
  yh(t, vh(t), e);
}), Eh = Sh, _h = Eh;
const Ye = /* @__PURE__ */ A(_h);
function $h(e) {
  return e && e.length ? e[0] : void 0;
}
var xh = $h;
const Ch = /* @__PURE__ */ A(xh);
var wh = rr, Th = ft, Ah = gt, Qr = J, Fh = Pe;
function Ih(e, t, r, n) {
  if (!Qr(e))
    return e;
  t = Th(t, e);
  for (var a = -1, s = t.length, i = s - 1, l = e; l != null && ++a < s; ) {
    var u = Fh(t[a]), c = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != i) {
      var d = l[u];
      c = n ? n(d, u, l) : void 0, c === void 0 && (c = Qr(d) ? d : Ah(t[a + 1]) ? [] : {});
    }
    wh(l, u, c), l = l[u];
  }
  return e;
}
var Oh = Ih, Rh = er, Ph = Oh, kh = ft;
function Dh(e, t, r) {
  for (var n = -1, a = t.length, s = {}; ++n < a; ) {
    var i = t[n], l = Rh(e, i);
    r(l, i) && Ph(s, kh(i, e), l);
  }
  return s;
}
var Lh = Dh, Bh = Lh, Nh = tr;
function Uh(e, t) {
  return Bh(e, t, function(r, n) {
    return Nh(e, n);
  });
}
var Mh = Uh;
function zh(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var ar = zh, jr = ye, Qh = it, jh = U, qr = jr ? jr.isConcatSpreadable : void 0;
function qh(e) {
  return jh(e) || Qh(e) || !!(qr && e && e[qr]);
}
var Vh = qh, Gh = ar, Hh = Vh;
function ra(e, t, r, n, a) {
  var s = -1, i = e.length;
  for (r || (r = Hh), a || (a = []); ++s < i; ) {
    var l = e[s];
    t > 0 && r(l) ? t > 1 ? ra(l, t - 1, r, n, a) : Gh(a, l) : n || (a[a.length] = l);
  }
  return a;
}
var Yh = ra, Wh = Yh;
function Kh(e) {
  var t = e == null ? 0 : e.length;
  return t ? Wh(e, 1) : [];
}
var Xh = Kh, Zh = Xh, Jh = Jn, ef = ea;
function tf(e) {
  return ef(Jh(e, void 0, Zh), e + "");
}
var rf = tf, nf = Mh, af = rf, sf = af(function(e, t) {
  return e == null ? {} : nf(e, t);
}), of = sf;
const lf = /* @__PURE__ */ A(of);
var uf = pt;
function cf() {
  this.__data__ = new uf(), this.size = 0;
}
var df = cf;
function pf(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var hf = pf;
function ff(e) {
  return this.__data__.get(e);
}
var gf = ff;
function mf(e) {
  return this.__data__.has(e);
}
var yf = mf, bf = pt, vf = Vt, Sf = Zt, Ef = 200;
function _f(e, t) {
  var r = this.__data__;
  if (r instanceof bf) {
    var n = r.__data__;
    if (!vf || n.length < Ef - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Sf(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var $f = _f, xf = pt, Cf = df, wf = hf, Tf = gf, Af = yf, Ff = $f;
function _e(e) {
  var t = this.__data__ = new xf(e);
  this.size = t.size;
}
_e.prototype.clear = Cf;
_e.prototype.delete = wf;
_e.prototype.get = Tf;
_e.prototype.has = Af;
_e.prototype.set = Ff;
var sr = _e;
function If(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Of = If, Rf = ta, Pf = Mn, kf = ot;
function Df(e) {
  return kf(e) ? Rf(e) : Pf(e);
}
var De = Df, Lf = ke, Bf = De;
function Nf(e, t) {
  return e && Lf(t, Bf(t), e);
}
var Uf = Nf, Mf = ke, zf = yt;
function Qf(e, t) {
  return e && Mf(t, zf(t), e);
}
var jf = Qf, We = { exports: {} };
We.exports;
(function(e, t) {
  var r = Y, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, i = s ? r.Buffer : void 0, l = i ? i.allocUnsafe : void 0;
  function u(c, d) {
    if (d)
      return c.slice();
    var p = c.length, h = l ? l(p) : new c.constructor(p);
    return c.copy(h), h;
  }
  e.exports = u;
})(We, We.exports);
var qf = We.exports;
function Vf(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Gf = Vf;
function Hf(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[a++] = i);
  }
  return s;
}
var Yf = Hf;
function Wf() {
  return [];
}
var na = Wf, Kf = Yf, Xf = na, Zf = Object.prototype, Jf = Zf.propertyIsEnumerable, Vr = Object.getOwnPropertySymbols, eg = Vr ? function(e) {
  return e == null ? [] : (e = Object(e), Kf(Vr(e), function(t) {
    return Jf.call(e, t);
  }));
} : Xf, ir = eg, tg = ke, rg = ir;
function ng(e, t) {
  return tg(e, rg(e), t);
}
var ag = ng, sg = Un, ig = sg(Object.getPrototypeOf, Object), aa = ig, og = ar, lg = aa, ug = ir, cg = na, dg = Object.getOwnPropertySymbols, pg = dg ? function(e) {
  for (var t = []; e; )
    og(t, ug(e)), e = lg(e);
  return t;
} : cg, sa = pg, hg = ke, fg = sa;
function gg(e, t) {
  return hg(e, fg(e), t);
}
var mg = gg, yg = ar, bg = U;
function vg(e, t, r) {
  var n = t(e);
  return bg(e) ? n : yg(n, r(e));
}
var ia = vg, Sg = ia, Eg = ir, _g = De;
function $g(e) {
  return Sg(e, _g, Eg);
}
var oa = $g, xg = ia, Cg = sa, wg = yt;
function Tg(e) {
  return xg(e, wg, Cg);
}
var Ag = Tg, Fg = Object.prototype, Ig = Fg.hasOwnProperty;
function Og(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Ig.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Rg = Og, Pg = Y, kg = Pg.Uint8Array, la = kg, Gr = la;
function Dg(e) {
  var t = new e.constructor(e.byteLength);
  return new Gr(t).set(new Gr(e)), t;
}
var or = Dg, Lg = or;
function Bg(e, t) {
  var r = t ? Lg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Ng = Bg, Ug = /\w*$/;
function Mg(e) {
  var t = new e.constructor(e.source, Ug.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var zg = Mg, Hr = ye, Yr = Hr ? Hr.prototype : void 0, Wr = Yr ? Yr.valueOf : void 0;
function Qg(e) {
  return Wr ? Object(Wr.call(e)) : {};
}
var jg = Qg, qg = or;
function Vg(e, t) {
  var r = t ? qg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Gg = Vg, Hg = or, Yg = Ng, Wg = zg, Kg = jg, Xg = Gg, Zg = "[object Boolean]", Jg = "[object Date]", em = "[object Map]", tm = "[object Number]", rm = "[object RegExp]", nm = "[object Set]", am = "[object String]", sm = "[object Symbol]", im = "[object ArrayBuffer]", om = "[object DataView]", lm = "[object Float32Array]", um = "[object Float64Array]", cm = "[object Int8Array]", dm = "[object Int16Array]", pm = "[object Int32Array]", hm = "[object Uint8Array]", fm = "[object Uint8ClampedArray]", gm = "[object Uint16Array]", mm = "[object Uint32Array]";
function ym(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case im:
      return Hg(e);
    case Zg:
    case Jg:
      return new n(+e);
    case om:
      return Yg(e, r);
    case lm:
    case um:
    case cm:
    case dm:
    case pm:
    case hm:
    case fm:
    case gm:
    case mm:
      return Xg(e, r);
    case em:
      return new n();
    case tm:
    case am:
      return new n(e);
    case rm:
      return Wg(e);
    case nm:
      return new n();
    case sm:
      return Kg(e);
  }
}
var bm = ym, vm = J, Kr = Object.create, Sm = function() {
  function e() {
  }
  return function(t) {
    if (!vm(t))
      return {};
    if (Kr)
      return Kr(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Em = Sm, _m = Em, $m = aa, xm = st;
function Cm(e) {
  return typeof e.constructor == "function" && !xm(e) ? _m($m(e)) : {};
}
var wm = Cm, Tm = Oe, Am = W, Fm = "[object Map]";
function Im(e) {
  return Am(e) && Tm(e) == Fm;
}
var Om = Im, Rm = Om, Pm = Ht, Xr = Yt, Zr = Xr && Xr.isMap, km = Zr ? Pm(Zr) : Rm, Dm = km, Lm = Oe, Bm = W, Nm = "[object Set]";
function Um(e) {
  return Bm(e) && Lm(e) == Nm;
}
var Mm = Um, zm = Mm, Qm = Ht, Jr = Yt, en = Jr && Jr.isSet, jm = en ? Qm(en) : zm, qm = jm, Vm = sr, Gm = Of, Hm = rr, Ym = Uf, Wm = jf, Km = qf, Xm = Gf, Zm = ag, Jm = mg, ey = oa, ty = Ag, ry = Oe, ny = Rg, ay = bm, sy = wm, iy = U, oy = lt, ly = Dm, uy = J, cy = qm, dy = De, py = yt, hy = 1, fy = 2, gy = 4, ua = "[object Arguments]", my = "[object Array]", yy = "[object Boolean]", by = "[object Date]", vy = "[object Error]", ca = "[object Function]", Sy = "[object GeneratorFunction]", Ey = "[object Map]", _y = "[object Number]", da = "[object Object]", $y = "[object RegExp]", xy = "[object Set]", Cy = "[object String]", wy = "[object Symbol]", Ty = "[object WeakMap]", Ay = "[object ArrayBuffer]", Fy = "[object DataView]", Iy = "[object Float32Array]", Oy = "[object Float64Array]", Ry = "[object Int8Array]", Py = "[object Int16Array]", ky = "[object Int32Array]", Dy = "[object Uint8Array]", Ly = "[object Uint8ClampedArray]", By = "[object Uint16Array]", Ny = "[object Uint32Array]", S = {};
S[ua] = S[my] = S[Ay] = S[Fy] = S[yy] = S[by] = S[Iy] = S[Oy] = S[Ry] = S[Py] = S[ky] = S[Ey] = S[_y] = S[da] = S[$y] = S[xy] = S[Cy] = S[wy] = S[Dy] = S[Ly] = S[By] = S[Ny] = !0;
S[vy] = S[ca] = S[Ty] = !1;
function je(e, t, r, n, a, s) {
  var i, l = t & hy, u = t & fy, c = t & gy;
  if (r && (i = a ? r(e, n, a, s) : r(e)), i !== void 0)
    return i;
  if (!uy(e))
    return e;
  var d = iy(e);
  if (d) {
    if (i = ny(e), !l)
      return Xm(e, i);
  } else {
    var p = ry(e), h = p == ca || p == Sy;
    if (oy(e))
      return Km(e, l);
    if (p == da || p == ua || h && !a) {
      if (i = u || h ? {} : sy(e), !l)
        return u ? Jm(e, Wm(i, e)) : Zm(e, Ym(i, e));
    } else {
      if (!S[p])
        return a ? e : {};
      i = ay(e, p, l);
    }
  }
  s || (s = new Vm());
  var f = s.get(e);
  if (f)
    return f;
  s.set(e, i), cy(e) ? e.forEach(function(b) {
    i.add(je(b, t, r, b, e, s));
  }) : ly(e) && e.forEach(function(b, v) {
    i.set(v, je(b, t, r, v, e, s));
  });
  var y = c ? u ? ty : ey : u ? py : dy, g = d ? void 0 : y(e);
  return Gm(g || e, function(b, v) {
    g && (v = b, b = e[v]), Hm(i, v, je(b, t, r, v, e, s));
  }), i;
}
var Uy = je, My = Uy, zy = 1, Qy = 4;
function jy(e) {
  return My(e, zy | Qy);
}
var qy = jy;
const fe = /* @__PURE__ */ A(qy);
var Vy = re, Gy = W, Hy = "[object Boolean]";
function Yy(e) {
  return e === !0 || e === !1 || Gy(e) && Vy(e) == Hy;
}
var Wy = Yy;
const Ky = /* @__PURE__ */ A(Wy);
var Xy = re, Zy = U, Jy = W, eb = "[object String]";
function tb(e) {
  return typeof e == "string" || !Zy(e) && Jy(e) && Xy(e) == eb;
}
var rb = tb;
const nb = /* @__PURE__ */ A(rb);
var ab = re, sb = W, ib = "[object Number]";
function ob(e) {
  return typeof e == "number" || sb(e) && ab(e) == ib;
}
var lb = ob;
const ub = /* @__PURE__ */ A(lb);
function lr() {
}
lr.prototype = new Error();
class tn {
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
    r !== null && (c.q = r), n !== null && (c.sort = n, a !== null && (c.sort = a === "desc" ? `-${n}` : n)), s > 0 && (c.page = s), i > 0 && (c.size = i), K(u) || Ye(c, this._addFilters(u));
    const d = this._addFilters(l);
    return Ye(c, d), ge.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class cb {
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
function Ne(e, t) {
  return e.indexOf(t) === 0 && (e.length === t.length || e.indexOf(t + "&") === 0);
}
function xt(e) {
  return ge.stringify({
    q: e
  });
}
function db(e) {
  return ge.parse(e).q;
}
function pa(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = pa(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function rn(e, t) {
  const r = xt(e), n = t.map((i) => xt(i));
  let a = !1;
  const s = n.filter((i) => {
    const l = Ne(i, r), u = Ne(r, i);
    return l && !a && (a = !0), !l && !u;
  });
  if (!a)
    s.push(r);
  else if (e.length === 3) {
    const l = pa(e), u = xt(l), c = s.some((d) => {
      const p = Ne(d, u), h = Ne(u, d);
      return p || h;
    });
    (K(s) || !c) && s.push(u);
  }
  return s.map((i) => db(i));
}
const ha = (e, t) => {
  if (K(e))
    return;
  if (!Hn(Ch(e)))
    return rn(e, t);
  let r = t;
  for (const n of e)
    r = rn(n, r);
  return r;
}, fa = (e, t, r) => {
  let n = lf(t, r);
  return K(n.filters) || (n.filters = ha(n.filters, e.filters)), n;
}, Ke = {
  queryString: "",
  suggestions: [],
  sortBy: null,
  sortOrder: null,
  page: -1,
  size: -1,
  filters: [],
  hiddenParams: [],
  layout: null
}, ga = Object.keys(Ke), pb = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, hb = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class fb {
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
    r !== null && (c.q = r), n !== null && (c.sort = n, a !== null && (c.sort = a === "desc" ? `-${n}` : n)), s > 0 && (c.page = s), i > 0 && (c.size = i), K(u) || Ye(c, this._addFilters(u));
    const d = this._addFilters(l);
    return Ye(c, d), ge.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class ma {
  constructor(t) {
    this.axiosConfig = Te(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = Qe.CancelToken;
  }
  validateAxiosConfig() {
    if (!tp(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = Te(t, "interceptors.request", void 0), this.responseInterceptor = Te(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: fb,
      InvenioRequestSerializer: tn
    };
    return typeof t == "string" ? r[t] : t || tn;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), a = Te(t, "invenio.responseSerializer", cb);
    this.requestSerializer = new n(), this.responseSerializer = new a();
  }
  initAxios() {
    const t = {
      paramsSerializer: this.requestSerializer.serialize,
      ...this.axiosConfig
    };
    this.http = Qe.create(t), this.addInterceptors();
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
      const n = fa(t, r.extras, ga);
      return K(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw Qe.isCancel(r) ? new lr() : r;
    }
  }
}
class gb {
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
          return ub(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const a = Hn(n) ? n : [n], s = ":", i = t.urlFilterSeparator, l = `[^\\${s}\\${i}]*`, u = `${l}\\${s}${l}`, c = `${u}(\\${i}${u})*`, d = new RegExp(`^${c}$`);
          return a.every((p) => String(p).match(d));
        }
        default:
          return !1;
      }
    };
  }
}
const mb = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, nn = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class yb {
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
    const r = ge.parse(t, {
      ignoreQueryPrefix: !0
    }), n = {};
    return Object.entries(r).forEach((a) => {
      const s = a[0], i = a[1];
      n[s] = this._convertValue(s, i);
    }), n;
  }
}
class bb {
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
      return ge.stringify(n, {
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
      const a = fe(n);
      return Object.keys(r).forEach((s) => {
        a[s] = r[s];
      }), a;
    }, this.urlParamsMapping = fo(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !Ky(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !nb(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new gb(), this.urlParser = t.urlParser || new yb(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), a = this._mergeParamsIntoState(n, t), s = this._mapQueryStateToUrlParams(a);
    return nn(s), a;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      mb(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    nn(r);
  }
}
const vb = "SET_QUERY_COMPONENT_INITIAL_STATE", ya = "SET_QUERY_STRING", ur = "SET_QUERY_SORTING", cr = "SET_QUERY_SORT_BY", dr = "SET_QUERY_SORT_ORDER", Le = "SET_QUERY_STATE", ba = "SET_QUERY_PAGINATION_PAGE", va = "SET_QUERY_PAGINATION_SIZE", Sa = "SET_QUERY_FILTERS", Ea = "SET_QUERY_SUGGESTIONS", _a = "SET_SUGGESTION_STRING", $a = "CLEAR_QUERY_SUGGESTIONS", xa = "RESULTS_LOADING", Ca = "RESULTS_FETCH_SUCCESS", wa = "RESULTS_FETCH_ERROR", Pt = "RESULTS_UPDATE_LAYOUT", Ta = "RESET_QUERY", Sb = (e) => (t) => {
  e && t(G({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, Aa = (e) => (t) => {
  t({
    type: Le,
    payload: e
  }), t(G());
}, Fa = (e) => (t) => {
  t({
    type: ya,
    payload: e
  }), t(G());
}, Eb = (e, t) => (r) => {
  r({
    type: ur,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(G());
}, _b = (e) => (t) => {
  t({
    type: cr,
    payload: e
  }), t(G());
}, $b = (e) => (t) => {
  t({
    type: dr,
    payload: e
  }), t(G());
}, xb = (e) => (t) => {
  t({
    type: ba,
    payload: e
  }), t(G());
}, Cb = (e) => (t) => {
  t({
    type: va,
    payload: e
  }), t(G());
}, pr = (e) => (t) => {
  t({
    type: Sa,
    payload: e
  }), t(G());
}, wb = (e) => async (t, r, n) => {
  const a = n.urlHandlerApi;
  if (a) {
    await t({
      type: Pt,
      payload: e
    });
    const s = r().query;
    a.set(s);
  } else
    t({
      type: Pt,
      payload: e
    });
}, Tb = () => (e, t, r) => {
  e({
    type: Ta,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(G());
}, Ab = (e, t, r, n) => {
  const a = t.urlHandlerApi;
  a && (r ? a.replace(e) : n && a.set(e));
}, Fb = (e, t, r, n) => {
  const a = r().query;
  t({
    type: Le,
    payload: {
      ...a,
      ...e.newQueryState
    }
  });
  const s = fe(r().query), i = n.urlHandlerApi;
  return i && i.replace(s), delete e.newStateQuery, e;
}, Ib = (e, t, r, n) => {
  function a(l, u, c, d) {
    l.queryString === "" ? (l.sortBy = c.defaultSortingOnEmptyQueryString.sortBy, l.sortOrder = c.defaultSortingOnEmptyQueryString.sortOrder) : (l.sortBy = u.initialSortBy, l.sortOrder = u.initialSortOrder), d({
      type: Le,
      payload: l
    });
  }
  function s(l, u, c, d) {
    u.hasUserChangedSorting || a(l, u, c, d);
  }
  !K(r.defaultSortingOnEmptyQueryString) && s(e, t, r, n);
}, G = function() {
  let {
    shouldUpdateUrlQueryString: e = !0,
    shouldReplaceUrlQueryString: t = !1
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return async (r, n, a) => {
    const s = n().app;
    let i = fe(n().query);
    Ib(i, s, a, r), i = fe(n().query), Ab(i, a, t, e), r({
      type: xa
    });
    try {
      let u = await a.searchApi.search(i);
      "newQueryState" in u && (u = Fb(fe(u), r, n, a)), r({
        type: Ca,
        payload: {
          aggregations: u.aggregations,
          hits: u.hits,
          total: u.total
        }
      });
    } catch (l) {
      if (l instanceof lr) {
        console.debug(l);
        return;
      } else
        console.error(l), r({
          type: wa,
          payload: {
            error: l
          }
        });
    }
  };
}, Ob = (e) => (t) => {
  t({
    type: _a,
    payload: e
  }), t(Rb());
}, Rb = () => async (e, t, r) => {
  const n = fe(t().query), a = r.suggestionApi;
  try {
    const s = await a.search(n);
    e({
      type: Ea,
      payload: {
        suggestions: s.suggestions
      }
    });
  } catch (s) {
    console.error("Could not load suggestions due to: " + s);
  }
}, Pb = () => (e) => {
  e({
    type: $a,
    payload: {
      suggestions: []
    }
  });
}, kb = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: Le,
      payload: n
    }), e(G({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, E = /* @__PURE__ */ o.createContext({}), Db = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
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
    case dr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    default:
      return e;
  }
}, Lb = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case ya:
      return {
        ...e,
        queryString: t.payload,
        page: 1
      };
    case ur:
      return {
        ...e,
        sortBy: t.payload.sortBy,
        sortOrder: t.payload.sortOrder,
        _sortUserChanged: !0,
        page: 1
      };
    case cr:
      return {
        ...e,
        sortBy: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case dr:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case ba:
      return {
        ...e,
        page: t.payload
      };
    case va:
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
    case Ea:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case $a:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case _a:
      return {
        ...e,
        suggestionString: t.payload
      };
    case vb:
      return {
        ...e,
        ...t.payload
      };
    case Le:
      return {
        ...e,
        ...Ke,
        ...fa(Ke, t.payload, ga)
      };
    case Pt:
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
}, Bb = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case xa:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case Ca:
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
    case wa:
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
var Nb = Ti({
  app: Db,
  query: Lb,
  results: Bb
});
function an(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: a,
    sortOrder: s
  } = t;
  return r !== a || n !== s;
}
function Ub(e, t, r) {
  const n = an(r, t), a = !K(e.defaultSortingOnEmptyQueryString);
  let s = !1;
  return a && (s = an(r, e.defaultSortingOnEmptyQueryString)), n && s;
}
function Mb(e) {
  const t = {
    ...Ke,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = Ub(e, t, r), a = {
    ...hb,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, s = {
    ...pb,
    loading: e.searchOnInit
  };
  return {
    app: a,
    query: r,
    results: s
  };
}
function zb(e) {
  const t = Mb(e);
  return Ai(Nb, t, Fi(Ii.withExtraArgument(e)));
}
function sn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class hr extends F {
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
hr.defaultProps = {
  searchOnInit: !0,
  eventListenerEnabled: !1
};
hr.contextType = E;
var Qb = m.component("Bootstrap", hr);
const jb = (e) => ({
  onAppInitialized: (t) => e(Sb(t)),
  updateQueryState: (t) => e(Aa(t)),
  searchOnUrlQueryStringChanged: () => e(kb())
}), qb = w(null, jb)(Qb);
class fr extends F {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new bb(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = zb(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
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
      buildUID: (u, c) => sn(u, c, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, l = sn("ReactSearchKit.children", a, t);
    return /* @__PURE__ */ o.createElement(E.Provider, {
      value: i
    }, /* @__PURE__ */ o.createElement(Si, {
      store: this.store
    }, /* @__PURE__ */ o.createElement(qb, {
      searchOnInit: s,
      eventListenerEnabled: n
    }, /* @__PURE__ */ o.createElement(m, {
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
fr.contextType = E;
var Vb = m.component("ReactSearchKit", fr);
class Ia extends F {
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
    return !!t.length && /* @__PURE__ */ o.createElement(Oa, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
Ia.defaultProps = {
  overridableId: ""
};
const Oa = (e) => {
  let {
    overridableId: t,
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  } = e;
  const {
    buildUID: s
  } = $(E);
  return /* @__PURE__ */ o.createElement(m, {
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
      /* @__PURE__ */ o.createElement(de, {
        image: !0,
        key: l,
        onClick: () => n(c)
      }, u, /* @__PURE__ */ o.createElement(C, {
        name: "delete"
      }))
    );
  })));
};
Oa.defaultProps = {
  overridableId: ""
};
var Gb = m.component("ActiveFilters", Ia);
const Hb = (e) => ({
  updateQueryFilters: (t) => e(pr(t))
});
w((e) => ({
  filters: e.query.filters
}), Hb)(Gb);
function Yb(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var Wb = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
Yb(Wb);
class Ra extends F {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? Oi.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ o.createElement(Xb, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
Ra.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const Kb = (e) => /* @__PURE__ */ o.createElement(Ra, Object.assign({
  key: e.queryString
}, e)), Xb = (e) => {
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
  } = $(E), c = (p, h) => {
    i();
  }, d = (p, h) => {
    p.key === "Enter" && i();
  };
  return /* @__PURE__ */ o.createElement(m, Object.assign({
    id: u("AutocompleteSearchBar.element", t)
  }, l), /* @__PURE__ */ o.createElement("div", {
    className: "AutoCompleteText"
  }, /* @__PURE__ */ o.createElement(Pn, {
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
  }), /* @__PURE__ */ o.createElement(Zb, {
    querySuggestions: a,
    overridableId: t
  })));
}, Zb = (e) => {
  let {
    overridableId: t,
    ...r
  } = e;
  const {
    querySuggestions: n
  } = r, {
    buildUID: a
  } = $(E), s = async (i) => {
    await (void 0).setState({
      currentValue: i
    }), (void 0).clearSuggestions(), (void 0).executeSearch();
  };
  return n.length === 0 ? null : /* @__PURE__ */ o.createElement(m, Object.assign({
    id: a("AutocompleteSearchBar.suggestions", t)
  }, r), /* @__PURE__ */ o.createElement("ul", null, n.map((i) => /* @__PURE__ */ o.createElement(Q, {
    as: "li",
    onClick: () => s(i),
    key: i
  }, i))));
};
var Jb = m.component("AutocompleteSearchBar", Kb);
const ev = (e) => ({
  updateQueryString: (t) => e(Fa(t)),
  updateSuggestions: (t) => e(Ob(t)),
  clearSuggestions: () => e(Pb())
}), tv = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
w(tv, ev)(Jb);
class bt extends F {
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
        const l = (u) => {
          this.onFilterClicked([this.aggName, r.key, u]);
        };
        return /* @__PURE__ */ o.createElement(bt, {
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
      const i = s.key_as_string ? s.key_as_string : s.key, l = this._isSelected(this.aggName, i, r), u = (d) => {
        this.onFilterClicked([this.aggName, d]);
      }, c = (d) => this.getChildAggCmps(d, r);
      return /* @__PURE__ */ o.createElement(ka, {
        key: s.key,
        bucket: s,
        keyField: i,
        isSelected: l,
        onFilterClicked: u,
        getChildAggCmps: c,
        overridableId: n
      });
    });
    return /* @__PURE__ */ o.createElement(Pa, {
      valuesCmp: a,
      overridableId: n
    });
  }
}
bt.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const Pa = (e) => {
  let {
    valuesCmp: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = $(E);
  return /* @__PURE__ */ o.createElement(m, {
    id: n("BucketAggregationContainer.element", r),
    valuesCmp: t
  }, /* @__PURE__ */ o.createElement(Ve, null, t));
};
Pa.defaultProps = {
  overridableId: ""
};
const ka = (e) => {
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
  } = $(E), c = t.label ? t.label : `${i} (${t.doc_count.toLocaleString("en-US")})`, d = a(t);
  return /* @__PURE__ */ o.createElement(m, {
    id: l("BucketAggregationValues.element", s),
    bucket: t,
    label: c,
    onFilterClicked: n,
    isSelected: r,
    childAggCmps: d
  }, /* @__PURE__ */ o.createElement(Ve.Item, {
    key: t.key
  }, /* @__PURE__ */ o.createElement(kn, {
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
var rv = m.component("BucketAggregationValues", bt);
class Da extends F {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: a
      } = this.props;
      return /* @__PURE__ */ o.createElement(rv, {
        buckets: r,
        selectedFilters: n,
        field: this.agg.field,
        aggName: this.agg.aggName,
        childAgg: this.agg.childAgg,
        onFilterClicked: this.onFilterClicked,
        overridableId: a
      });
    }, this._getSelectedFilters = (r) => r.filter((n) => n[0] === this.agg.aggName), this._getResultBuckets = (r) => {
      const n = Te(r, this.agg.aggName, {});
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
    return /* @__PURE__ */ o.createElement(La, Object.assign({
      title: this.title,
      containerCmp: l,
      overridableId: n
    }, a));
  }
}
Da.defaultProps = {
  overridableId: ""
};
const La = (e) => {
  let {
    overridableId: t,
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: s
  } = e;
  const {
    buildUID: i
  } = $(E);
  return a && /* @__PURE__ */ o.createElement(m, {
    id: i("BucketAggregation.element", t),
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: s
  }, /* @__PURE__ */ o.createElement(B, null, /* @__PURE__ */ o.createElement(B.Content, null, /* @__PURE__ */ o.createElement(B.Header, null, n)), /* @__PURE__ */ o.createElement(B.Content, null, a)));
};
La.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var nv = m.component("BucketAggregation", Da);
const av = (e) => ({
  updateQueryFilters: (t) => e(pr(t))
});
w((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), av)(nv);
class Ba extends F {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
Ba.defaultProps = {
  condition: !0
};
var j = m.component("ShouldRender", Ba);
class Na extends F {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: a
    } = this.props;
    return /* @__PURE__ */ o.createElement(j, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ o.createElement(Ua, {
      totalResults: r,
      overridableId: a
    })));
  }
}
Na.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const Ua = (e) => {
  let {
    totalResults: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = $(E), a = n("Count.element", r);
  return /* @__PURE__ */ o.createElement(m, {
    id: a,
    totalResults: t
  }, /* @__PURE__ */ o.createElement(de, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
Ua.defaultProps = {
  overridableId: ""
};
var sv = m.component("Count", Na);
const iv = w((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(sv);
class Ma extends F {
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
      condition: !t && K(n) && r === 0
    }, /* @__PURE__ */ o.createElement(za, Object.assign({}, u, {
      queryString: a,
      resetQuery: this.resetQuery,
      extraContent: s,
      userSelectionFilters: l,
      overridableId: i
    })));
  }
}
Ma.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const za = (e) => {
  let {
    overridableId: t,
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: s
  } = e;
  const {
    buildUID: i
  } = $(E);
  return /* @__PURE__ */ o.createElement(m, {
    id: i("EmptyResults.element", t),
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: s
  }, /* @__PURE__ */ o.createElement(oe, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ o.createElement(pe, {
    icon: !0
  }, /* @__PURE__ */ o.createElement(C, {
    name: "search"
  }), "No results found!"), r && /* @__PURE__ */ o.createElement("em", null, 'Current search "', r, '"'), /* @__PURE__ */ o.createElement("br", null), /* @__PURE__ */ o.createElement(Q, {
    primary: !0,
    onClick: () => n()
  }, "Clear query"), a));
};
za.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var ov = m.component("EmptyResults", Ma);
const lv = (e) => ({
  resetQuery: () => e(Tb())
}), uv = w((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), lv)(ov);
function Qa(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ o.createElement(j, {
    condition: !t && !K(r)
  }, /* @__PURE__ */ o.createElement(ja, {
    error: r,
    overridableId: n
  }));
}
Qa.defaultProps = {
  overridableId: ""
};
const ja = (e) => {
  let {
    error: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = $(E);
  return /* @__PURE__ */ o.createElement(m, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ o.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
ja.defaultProps = {
  overridableId: ""
};
var cv = m.component("Error", Qa);
w((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(cv);
function qa(e) {
  const t = (a) => /* @__PURE__ */ o.createElement(e, a);
  return w((a) => ({
    currentQueryState: a.query,
    currentResultsState: a.results
  }), (a) => ({
    updateQueryState: (s) => a(Aa(s))
  }))(t);
}
class Va extends F {
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
    }, /* @__PURE__ */ o.createElement(Ga, {
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
const Ga = (e) => {
  let {
    overridableId: t,
    currentLayout: r,
    onLayoutChange: n
  } = e;
  const {
    buildUID: a
  } = $(E);
  return /* @__PURE__ */ o.createElement(m, {
    id: a("LayoutSwitcher.element", t),
    currentLayout: r,
    onLayoutChange: n
  }, /* @__PURE__ */ o.createElement(Fe, {
    compact: !0,
    icon: !0
  }, /* @__PURE__ */ o.createElement(Fe.Item, {
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
  })), /* @__PURE__ */ o.createElement(Fe.Item, {
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
Ga.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var dv = m.component("LayoutSwitcher", Va);
const pv = (e) => ({
  updateLayout: (t) => e(wb(t))
});
w((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), pv)(dv);
const on = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class Ha extends F {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...on,
      ...t.options
    } : on;
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
    }, /* @__PURE__ */ o.createElement(Ya, {
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
Ha.defaultProps = {
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
    options: i,
    maxTotalResults: l,
    ...u
  } = e;
  const c = i.boundaryRangeCount, d = i.siblingRangeCount, p = i.showEllipsis, h = i.showFirst, f = i.showLast, y = i.showPrev, g = i.showNext, b = i.size, v = Math.floor(l / n), x = Math.ceil(a / n), P = Math.min(x, v), {
    buildUID: I
  } = $(E);
  return r > x && s(x), /* @__PURE__ */ o.createElement(m, {
    id: I("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: a,
    options: i,
    onPageChange: s
  }, /* @__PURE__ */ o.createElement(Ei, Object.assign({
    activePage: r,
    totalPages: P,
    onPageChange: (O, T) => {
      let {
        activePage: $e
      } = T;
      return s($e);
    },
    boundaryRange: c,
    siblingRange: d,
    ellipsisItem: p ? void 0 : null,
    firstItem: h ? void 0 : null,
    lastItem: f ? void 0 : null,
    prevItem: y ? void 0 : null,
    nextItem: g ? void 0 : null,
    size: b
  }, u)));
};
Ya.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var hv = m.component("Pagination", Ha);
const fv = (e) => ({
  updateQueryPage: (t) => e(xb(t))
}), gv = w((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), fv)(hv);
function Wa(e) {
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
  }, /* @__PURE__ */ o.createElement(Ka, {
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
const mv = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = $(E);
  return /* @__PURE__ */ o.createElement(m, {
    id: n("ResultsGrid.item", r),
    result: t
  }, /* @__PURE__ */ o.createElement(B, {
    fluid: !0,
    href: `#${t.id}`
  }, /* @__PURE__ */ o.createElement(_i, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ o.createElement(B.Content, null, /* @__PURE__ */ o.createElement(B.Header, null, t.title), /* @__PURE__ */ o.createElement(B.Description, null, t.description))));
}, Ka = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: a
  } = $(E), s = r.map((i, l) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ o.createElement(mv, {
      key: l,
      result: i,
      overridableId: t
    })
  ));
  return /* @__PURE__ */ o.createElement(m, {
    id: a("ResultsGrid.container", t),
    results: s,
    resultsPerRow: n
  }, /* @__PURE__ */ o.createElement(B.Group, {
    itemsPerRow: n
  }, s));
};
Ka.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var yv = m.component("ResultsGrid", Wa);
const bv = w((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(yv);
function Xa(e) {
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
  }, /* @__PURE__ */ o.createElement(Za, {
    results: n,
    overridableId: a
  }));
}
Xa.defaultProps = {
  overridableId: "",
  onResultsRendered: () => {
  }
};
const vv = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = $(E);
  return /* @__PURE__ */ o.createElement(m, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ o.createElement(le, {
    href: `#${t.id}`
  }, /* @__PURE__ */ o.createElement(le.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ o.createElement(le.Content, null, /* @__PURE__ */ o.createElement(le.Header, null, t.title), /* @__PURE__ */ o.createElement(le.Description, null, t.description))));
}, Za = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = $(E), a = t.map((s, i) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ o.createElement(vv, {
      result: s,
      key: i,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ o.createElement(m, {
    id: n("ResultsList.container", r),
    results: a
  }, /* @__PURE__ */ o.createElement(le.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, a));
};
Za.defaultProps = {
  overridableId: ""
};
var Sv = m.component("ResultsList", Xa);
const Ja = w((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(Sv);
function es(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ o.createElement(ts, {
    overridableId: n
  }) : t;
}
es.defaultProps = {
  overridableId: ""
};
const ts = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = $(E);
  return /* @__PURE__ */ o.createElement(m, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ o.createElement(Dn, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
ts.defaultProps = {
  overridableId: ""
};
var Ev = m.component("ResultsLoader", es);
const _v = w((e) => ({
  loading: e.results.loading
}))(Ev);
function rs(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return /* @__PURE__ */ o.createElement(j, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ o.createElement(ns, {
    layout: n,
    overridableId: a,
    onResultsRendered: s
  }));
}
rs.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const ns = (e) => {
  let {
    layout: t,
    overridableId: r,
    onResultsRendered: n
  } = e;
  const {
    buildUID: a
  } = $(E);
  return /* @__PURE__ */ o.createElement(m, {
    id: a("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ o.createElement(Ja, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ o.createElement(bv, {
    overridableId: r,
    onResultsRendered: n
  }));
};
ns.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var $v = m.component("ResultsMultiLayout", rs);
w((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))($v);
class as extends F {
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
    }, a(/* @__PURE__ */ o.createElement(ss, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: l
    })));
  }
}
as.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const ss = (e) => {
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
  } = $(E), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ o.createElement(m, {
    id: l("ResultsPerPage.element", t),
    currentSize: r,
    options: n,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  }, /* @__PURE__ */ o.createElement(me, {
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
ss.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var xv = m.component("ResultsPerPage", as);
const Cv = (e) => ({
  updateQuerySize: (t) => e(Cb(t))
}), wv = w((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), Cv)(xv);
class is extends F {
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
      currentValue: d
    } = this.state;
    return /* @__PURE__ */ o.createElement(gr, {
      actionProps: t,
      autofocus: r,
      executeSearch: n || this.executeSearch,
      onBtnSearchClick: a || this.onBtnSearchClick,
      onInputChange: s || this.onInputChange,
      onKeyPress: i || this.onKeyPress,
      overridableId: l,
      placeholder: u,
      queryString: d,
      uiProps: c
    });
  }
}
is.defaultProps = {
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
const os = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ o.createElement(is, Object.assign({
    key: t
  }, e));
};
os.defaultProps = {
  queryString: ""
};
class gr extends F {
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
    return /* @__PURE__ */ o.createElement(m, {
      id: c("SearchBar.element", s),
      queryString: l,
      onBtnSearchClick: r,
      onInputChange: n,
      onKeyPress: a,
      placeholder: i,
      actionProps: t,
      uiProps: u
    }, /* @__PURE__ */ o.createElement(Pn, Object.assign({
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
      value: l,
      onKeyPress: a,
      ref: (d) => {
        this.focusInput = d;
      }
    })));
  }
}
gr.defaultProps = {
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
gr.contextType = E;
var Tv = m.component("SearchBar", os);
const Av = (e) => ({
  updateQueryString: (t) => e(Fa(t))
}), Fv = w((e) => ({
  queryString: e.query.queryString
}), Av)(Tv);
class ls extends F {
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
    }, s(/* @__PURE__ */ o.createElement(us, {
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
ls.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const us = (e) => {
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
  } = $(E), d = i(r, n), p = a.map((h, f) => ({
    key: f,
    text: h.text,
    value: h.value
  }));
  return /* @__PURE__ */ o.createElement(m, {
    id: c("Sort.element", t),
    options: a,
    currentSortBy: r,
    currentSortOrder: n,
    onValueChange: s,
    ariaLabel: l,
    selectOnNavigation: u
  }, /* @__PURE__ */ o.createElement(me, {
    selection: !0,
    options: p,
    value: d,
    onChange: (h, f) => {
      let {
        value: y
      } = f;
      return s(y);
    },
    "aria-label": l,
    selectOnNavigation: u
  }));
};
us.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var Iv = m.component("Sort", ls);
const Ov = (e) => ({
  updateQuerySorting: (t, r) => e(Eb(t, r))
});
w((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), Ov)(Iv);
class cs extends F {
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
    }, a(/* @__PURE__ */ o.createElement(ds, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: l
    })));
  }
}
cs.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const ds = (e) => {
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
  } = $(E), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ o.createElement(m, {
    id: l("SortBy.element", t),
    options: n,
    currentSortBy: r,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  }, /* @__PURE__ */ o.createElement(me, {
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
ds.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var Rv = m.component("SortBy", cs);
const Pv = (e) => ({
  updateQuerySortBy: (t) => e(_b(t))
});
w((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), Pv)(Rv);
class ps extends F {
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
    }, a(/* @__PURE__ */ o.createElement(hs, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: l
    })));
  }
}
ps.defaultProps = {
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
    selectOnNavigation: i
  } = e;
  const {
    buildUID: l
  } = $(E), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ o.createElement(m, {
    id: l("SortOrder.element", t),
    options: n,
    currentSortOrder: r,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  }, /* @__PURE__ */ o.createElement(me, {
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
hs.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var kv = m.component("SortOrder", ps);
const Dv = (e) => ({
  updateQuerySortOrder: (t) => e($b(t))
});
w((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), Dv)(kv);
const fs = (e) => {
  let {
    overridableId: t,
    userSelectionFilters: r,
    title: n,
    label: a,
    filterValue: s,
    updateQueryFilters: i
  } = e;
  const l = (p) => p.filter((f) => f[0] === s[0]).length > 0, u = () => {
    i(s);
  }, {
    buildUID: c
  } = $(E), d = l(r);
  return /* @__PURE__ */ o.createElement(m, {
    id: c("SearchFilters.Toggle.element", t),
    title: n,
    label: a,
    filterValue: s,
    userSelectionFilters: r,
    updateQueryFilters: i
  }, /* @__PURE__ */ o.createElement(B, null, /* @__PURE__ */ o.createElement(B.Content, null, /* @__PURE__ */ o.createElement(B.Header, null, n)), /* @__PURE__ */ o.createElement(B.Content, null, /* @__PURE__ */ o.createElement(kn, {
    toggle: !0,
    label: a,
    onClick: u,
    checked: d
  }))));
};
fs.defaultProps = {
  overridableId: ""
};
var Lv = m.component("SearchFilters.Toggle", fs);
const Bv = (e) => ({
  updateQueryFilters: (t) => e(pr(t))
});
w((e) => ({
  userSelectionFilters: e.query.filters
}), Bv)(Lv);
const gs = o.createContext(
  null
), Nv = ({ config: e, children: t, updateQueryState: r, currentQueryState: n }) => {
  const a = nt(() => {
    r({
      ...n,
      queryString: n.queryString
    });
  }, [r, n]);
  return /* @__PURE__ */ o.createElement(gs.Provider, { value: { config: e, refreshSearch: a } }, t);
}, Uv = qa(Nv), vt = () => {
  const e = o.useContext(gs);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
}, Xe = (e) => (e == null ? void 0 : e.charAt(0).toUpperCase()) + (e == null ? void 0 : e.slice(1)) || "", Mv = (e) => new Date(e).toISOString().split("T")[0];
var ms = { exports: {} };
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
      function l(c, d, p) {
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
            var y = h[f].split("="), g = y.slice(1).join("=");
            !d && g.charAt(0) === '"' && (g = g.slice(1, -1));
            try {
              var b = n(y[0]);
              if (g = (s.read || s)(g, b) || n(g), d)
                try {
                  g = JSON.parse(g);
                } catch {
                }
              if (p[b] = g, c === b)
                break;
            } catch {
            }
          }
          return c ? p[c] : p;
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
      }, i.remove = function(c, d) {
        l(c, "", r(d, {
          expires: -1
        }));
      }, i.defaults = {}, i.withConverter = a, i;
    }
    return a(function() {
    });
  });
})(ms);
var zv = ms.exports;
const Qv = /* @__PURE__ */ A(zv), jv = () => Qv.get("csrftoken") || null, vx = (e) => new ma(e), Sx = (e, t = {}, r = !0) => ({
  axios: {
    url: e,
    headers: {
      Accept: "application/vnd.inveniordm.v1+json",
      ...t
    },
    withCredentials: r
  }
}), X = Qe.create({
  baseURL: "",
  timeout: 3e4,
  withCredentials: !0,
  // Include cookies in requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
X.interceptors.request.use(
  (e) => {
    const t = jv();
    return t && (e.headers["X-CSRFTOKEN"] = t), e;
  },
  (e) => Promise.reject(e)
);
const qv = async (e, t) => {
  try {
    const r = await X.put(
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
}, Vv = async (e) => {
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
    const r = await X.post(
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
}, Gv = async (e) => {
  try {
    const t = await X.delete(`/api/importer-tasks/${e}`);
    return t.status === 204 ? !0 : (console.error(`Failed to delete task: ${t.statusText}`), !1);
  } catch (t) {
    return console.error(
      `Error deleting task: ${t instanceof Error ? t.message : "Unknown error"}`
    ), !1;
  }
}, Hv = async (e) => {
  try {
    const t = await X.post(`/api/importer-tasks/${e}/load`);
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error executing bulk import:", t), new Error("Failed to execute bulk import");
  }
}, Yv = async (e) => {
  try {
    const t = await X.get(
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
}, Wv = async () => {
  try {
    const e = await X.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, Kv = async (e) => {
  try {
    const t = await X.get(
      `/api/importer-tasks/config/${e}`
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error fetching serializers:", t), new Error("Failed to fetch serializers");
  }
}, ys = async (e) => {
  try {
    const t = await X.put(
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
}, bs = async (e) => {
  try {
    const t = await X.post(
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
}, Xv = ({ result: e, index: t }) => {
  var u;
  const { refreshSearch: r, config: n } = vt();
  if (!e)
    return null;
  const a = async (c) => {
    try {
      await Gv(c) ? r() : console.error(`Failed to delete task ${c}.`);
    } catch (d) {
      console.error(`Error deleting task ${c}:`, d);
    }
  }, s = async (c) => {
    try {
      const d = await bs(c);
      console.log("Validation result:", d), r();
    } catch (d) {
      console.error(`Error validating task ${c}:`, d);
    }
  }, i = async (c) => {
    try {
      const d = await Hv(c);
      console.log("Bulk import executed:", d), r();
    } catch (d) {
      console.error(`Error executing bulk import for task ${c}:`, d);
    }
  }, l = async () => {
    try {
      const c = await ys(e.id);
      c ? (r(), console.log(`Current status for task ${e.id}:`, c)) : console.error(`Failed to retrieve status for task ${e.id}.`);
    } catch (c) {
      console.error(`Error changing status for task ${e.id}:`, c);
    }
  };
  return /* @__PURE__ */ o.createElement(at, { key: t }, /* @__PURE__ */ o.createElement(k, null, /* @__PURE__ */ o.createElement("a", { href: `${n.resultPath}/${e.id}` }, e.title || "No title")), /* @__PURE__ */ o.createElement(k, null, Mv(e.created)), /* @__PURE__ */ o.createElement(k, null, Xe(e.status)), /* @__PURE__ */ o.createElement(k, null, ((u = e.records_status) == null ? void 0 : u.total_records) ?? 0), /* @__PURE__ */ o.createElement(k, null, 0), /* @__PURE__ */ o.createElement(k, null, e.serializer), /* @__PURE__ */ o.createElement(k, null, Xe(e.mode)), /* @__PURE__ */ o.createElement(k, { style: { width: "220px" } }, /* @__PURE__ */ o.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ o.createElement(
    me,
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
          onClick: l
        },
        {
          key: "delete",
          text: "Delete",
          value: "delete",
          onClick: () => a(e.id)
        }
      ]
    }
  ), /* @__PURE__ */ o.createElement(Q, { basic: !0, size: "tiny" }, /* @__PURE__ */ o.createElement(C, { name: "eye" }), "View"))));
}, Zv = ({ children: e }) => /* @__PURE__ */ o.createElement(Ln, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ o.createElement(Bn, null, /* @__PURE__ */ o.createElement(at, null, /* @__PURE__ */ o.createElement(D, null, "ID"), /* @__PURE__ */ o.createElement(D, null, "Date Created"), /* @__PURE__ */ o.createElement(D, null, "Status"), /* @__PURE__ */ o.createElement(D, null, "Records"), /* @__PURE__ */ o.createElement(D, null, "Files"), /* @__PURE__ */ o.createElement(D, null, "Serializer"), /* @__PURE__ */ o.createElement(D, null, "Mode"), /* @__PURE__ */ o.createElement(D, null, "Actions"))), /* @__PURE__ */ o.createElement(Nn, null, e)), Z = {
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
}, Jv = () => {
  const [e, t] = ee(
    {}
  ), [r, n] = ee(!0), { values: a, submitForm: s, isSubmitting: i, isValid: l, setFieldValue: u } = Di(), c = nt(async () => {
    try {
      const d = await Wv(), p = {};
      for (const h of d) {
        const f = await Kv(h);
        f && (p[h] = f);
      }
      t(p);
    } catch (d) {
      console.error("Error fetching record types:", d);
    } finally {
      n(!1);
    }
  }, []);
  return rt(() => {
    c();
  }, [c]), {
    configs: e,
    isLoading: r,
    values: a,
    submitForm: s,
    setFieldValue: u,
    isSubmitting: i,
    isValid: l
  };
}, eS = () => {
  const {
    configs: e,
    isLoading: t,
    submitForm: r,
    setFieldValue: n,
    values: a,
    isSubmitting: s,
    isValid: i
  } = Jv(), l = (u) => {
    var d;
    const c = ((d = u.target.files) == null ? void 0 : d[0]) || null;
    n("metadata", c);
  };
  return t ? /* @__PURE__ */ o.createElement("p", null, "Loading record types...") : !e || Object.keys(e).length === 0 ? /* @__PURE__ */ o.createElement("p", null, "No record types available.") : /* @__PURE__ */ o.createElement(yi, null, /* @__PURE__ */ o.createElement(
    Ri,
    {
      fieldPath: "task.title",
      label: "Title",
      placeholder: "Enter a title for the import task",
      required: !0
    }
  ), /* @__PURE__ */ o.createElement(Er.Group, { widths: "equal" }, /* @__PURE__ */ o.createElement(
    _t,
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
  ), /* @__PURE__ */ o.createElement(
    _t,
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
  ), /* @__PURE__ */ o.createElement(
    _t,
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
  )), /* @__PURE__ */ o.createElement(Er.Field, null, /* @__PURE__ */ o.createElement("label", { htmlFor: "file-input" }, "Metadata File"), /* @__PURE__ */ o.createElement(
    "input",
    {
      id: "file-input",
      type: "file",
      accept: ".csv",
      onChange: l,
      style: { marginTop: "8px" }
    }
  ), a.metadata && /* @__PURE__ */ o.createElement("p", { style: { marginTop: "8px", fontSize: "12px", color: "#666" } }, "Selected: ", a.metadata.name)), /* @__PURE__ */ o.createElement(
    Pi,
    {
      fieldPath: "task.description",
      label: "Notes",
      placeholder: "Enter a description for the import task",
      rows: 3
    }
  ), /* @__PURE__ */ o.createElement(
    Q,
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
var kt;
try {
  kt = Map;
} catch {
}
var Dt;
try {
  Dt = Set;
} catch {
}
function vs(e, t, r) {
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
  if (kt && e instanceof kt)
    return new Map(Array.from(e.entries()));
  if (Dt && e instanceof Dt)
    return new Set(Array.from(e.values()));
  if (e instanceof Object) {
    t.push(e);
    var n = Object.create(e);
    r.push(n);
    for (var a in e) {
      var s = t.findIndex(function(i) {
        return i === e[a];
      });
      n[a] = s > -1 ? r[s] : vs(e[a], t, r);
    }
    return n;
  }
  return e;
}
function Lt(e) {
  return vs(e, [], []);
}
const tS = Object.prototype.toString, rS = Error.prototype.toString, nS = RegExp.prototype.toString, aS = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", sS = /^Symbol\((.*)\)(.*)$/;
function iS(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function ln(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return iS(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return aS.call(e).replace(sS, "Symbol($1)");
  const n = tS.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + rS.call(e) + "]" : n === "RegExp" ? nS.call(e) : null;
}
function Ie(e, t) {
  let r = ln(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = ln(this[n], t);
    return s !== null ? s : a;
  }, 2);
}
let ae = {
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
    let a = n != null && n !== r, s = `${e} must be a \`${t}\` type, but the final value was: \`${Ie(r, !0)}\`` + (a ? ` (cast from the value \`${Ie(n, !0)}\`).` : ".");
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
}, oS = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Bt = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, lS = {
  isValue: "${path} field must be ${value}"
}, Nt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, uS = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: ae,
  string: q,
  number: oS,
  date: Bt,
  object: Nt,
  array: uS,
  boolean: lS
});
var cS = Object.prototype, dS = cS.hasOwnProperty;
function pS(e, t) {
  return e != null && dS.call(e, t);
}
var hS = pS, fS = hS, gS = Xn;
function mS(e, t) {
  return e != null && gS(e, t, fS);
}
var yS = mS;
const Ze = /* @__PURE__ */ A(yS), Ss = (e) => e && e.__isYupSchema__;
class bS {
  constructor(t, r) {
    if (this.fn = void 0, this.refs = t, this.refs = t, typeof r == "function") {
      this.fn = r;
      return;
    }
    if (!Ze(r, "is"))
      throw new TypeError("`is:` is required for `when()` conditions");
    if (!r.then && !r.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: a,
      otherwise: s
    } = r, i = typeof n == "function" ? n : (...l) => l.every((u) => u === n);
    this.fn = function(...l) {
      let u = l.pop(), c = l.pop(), d = i(...l) ? a : s;
      if (d)
        return typeof d == "function" ? d(c) : c.concat(d.resolve(u));
    };
  }
  resolve(t, r) {
    let n = this.refs.map((s) => s.getValue(r == null ? void 0 : r.value, r == null ? void 0 : r.parent, r == null ? void 0 : r.context)), a = this.fn.apply(t, n.concat(t, r));
    if (a === void 0 || a === t)
      return t;
    if (!Ss(a))
      throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
function Es(e) {
  return e == null ? [] : [].concat(e);
}
function Ut() {
  return Ut = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ut.apply(this, arguments);
}
let vS = /\$\{\s*(\w+)\s*\}/g;
class N extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Ut({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(vS, (a, s) => Ie(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], Es(t).forEach((s) => {
      N.isError(s) ? (this.errors.push(...s.errors), this.inner = this.inner.concat(s.inner.length ? s.inner : s)) : this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, N);
  }
}
const SS = (e) => {
  let t = !1;
  return (...r) => {
    t || (t = !0, e(...r));
  };
};
function Mt(e, t) {
  let {
    endEarly: r,
    tests: n,
    args: a,
    value: s,
    errors: i,
    sort: l,
    path: u
  } = e, c = SS(t), d = n.length;
  const p = [];
  if (i = i || [], !d)
    return i.length ? c(new N(i, s, u)) : c(null, s);
  for (let h = 0; h < n.length; h++) {
    const f = n[h];
    f(a, function(g) {
      if (g) {
        if (!N.isError(g))
          return c(g, s);
        if (r)
          return g.value = s, c(g, s);
        p.push(g);
      }
      if (--d <= 0) {
        if (p.length && (l && p.sort(l), i.length && p.push(...i), i = p), i.length) {
          c(new N(i, s, u), s);
          return;
        }
        c(null, s);
      }
    });
  }
}
function ES(e) {
  return function(t, r, n) {
    for (var a = -1, s = Object(t), i = n(t), l = i.length; l--; ) {
      var u = i[e ? l : ++a];
      if (r(s[u], u, s) === !1)
        break;
    }
    return t;
  };
}
var _S = ES, $S = _S, xS = $S(), CS = xS, wS = CS, TS = De;
function AS(e, t) {
  return e && wS(e, t, TS);
}
var _s = AS, FS = "__lodash_hash_undefined__";
function IS(e) {
  return this.__data__.set(e, FS), this;
}
var OS = IS;
function RS(e) {
  return this.__data__.has(e);
}
var PS = RS, kS = Zt, DS = OS, LS = PS;
function Je(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new kS(); ++t < r; )
    this.add(e[t]);
}
Je.prototype.add = Je.prototype.push = DS;
Je.prototype.has = LS;
var BS = Je;
function NS(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var US = NS;
function MS(e, t) {
  return e.has(t);
}
var zS = MS, QS = BS, jS = US, qS = zS, VS = 1, GS = 2;
function HS(e, t, r, n, a, s) {
  var i = r & VS, l = e.length, u = t.length;
  if (l != u && !(i && u > l))
    return !1;
  var c = s.get(e), d = s.get(t);
  if (c && d)
    return c == t && d == e;
  var p = -1, h = !0, f = r & GS ? new QS() : void 0;
  for (s.set(e, t), s.set(t, e); ++p < l; ) {
    var y = e[p], g = t[p];
    if (n)
      var b = i ? n(g, y, p, t, e, s) : n(y, g, p, e, t, s);
    if (b !== void 0) {
      if (b)
        continue;
      h = !1;
      break;
    }
    if (f) {
      if (!jS(t, function(v, x) {
        if (!qS(f, x) && (y === v || a(y, v, r, n, s)))
          return f.push(x);
      })) {
        h = !1;
        break;
      }
    } else if (!(y === g || a(y, g, r, n, s))) {
      h = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), h;
}
var $s = HS;
function YS(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var WS = YS;
function KS(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var XS = KS, un = ye, cn = la, ZS = ct, JS = $s, eE = WS, tE = XS, rE = 1, nE = 2, aE = "[object Boolean]", sE = "[object Date]", iE = "[object Error]", oE = "[object Map]", lE = "[object Number]", uE = "[object RegExp]", cE = "[object Set]", dE = "[object String]", pE = "[object Symbol]", hE = "[object ArrayBuffer]", fE = "[object DataView]", dn = un ? un.prototype : void 0, Ct = dn ? dn.valueOf : void 0;
function gE(e, t, r, n, a, s, i) {
  switch (r) {
    case fE:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case hE:
      return !(e.byteLength != t.byteLength || !s(new cn(e), new cn(t)));
    case aE:
    case sE:
    case lE:
      return ZS(+e, +t);
    case iE:
      return e.name == t.name && e.message == t.message;
    case uE:
    case dE:
      return e == t + "";
    case oE:
      var l = eE;
    case cE:
      var u = n & rE;
      if (l || (l = tE), e.size != t.size && !u)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      n |= nE, i.set(e, t);
      var d = JS(l(e), l(t), n, a, s, i);
      return i.delete(e), d;
    case pE:
      if (Ct)
        return Ct.call(e) == Ct.call(t);
  }
  return !1;
}
var mE = gE, pn = oa, yE = 1, bE = Object.prototype, vE = bE.hasOwnProperty;
function SE(e, t, r, n, a, s) {
  var i = r & yE, l = pn(e), u = l.length, c = pn(t), d = c.length;
  if (u != d && !i)
    return !1;
  for (var p = u; p--; ) {
    var h = l[p];
    if (!(i ? h in t : vE.call(t, h)))
      return !1;
  }
  var f = s.get(e), y = s.get(t);
  if (f && y)
    return f == t && y == e;
  var g = !0;
  s.set(e, t), s.set(t, e);
  for (var b = i; ++p < u; ) {
    h = l[p];
    var v = e[h], x = t[h];
    if (n)
      var P = i ? n(x, v, h, t, e, s) : n(v, x, h, e, t, s);
    if (!(P === void 0 ? v === x || a(v, x, r, n, s) : P)) {
      g = !1;
      break;
    }
    b || (b = h == "constructor");
  }
  if (g && !b) {
    var I = e.constructor, O = t.constructor;
    I != O && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof O == "function" && O instanceof O) && (g = !1);
  }
  return s.delete(e), s.delete(t), g;
}
var EE = SE, wt = sr, _E = $s, $E = mE, xE = EE, hn = Oe, fn = U, gn = lt, CE = Wt, wE = 1, mn = "[object Arguments]", yn = "[object Array]", Ue = "[object Object]", TE = Object.prototype, bn = TE.hasOwnProperty;
function AE(e, t, r, n, a, s) {
  var i = fn(e), l = fn(t), u = i ? yn : hn(e), c = l ? yn : hn(t);
  u = u == mn ? Ue : u, c = c == mn ? Ue : c;
  var d = u == Ue, p = c == Ue, h = u == c;
  if (h && gn(e)) {
    if (!gn(t))
      return !1;
    i = !0, d = !1;
  }
  if (h && !d)
    return s || (s = new wt()), i || CE(e) ? _E(e, t, r, n, a, s) : $E(e, t, u, r, n, a, s);
  if (!(r & wE)) {
    var f = d && bn.call(e, "__wrapped__"), y = p && bn.call(t, "__wrapped__");
    if (f || y) {
      var g = f ? e.value() : e, b = y ? t.value() : t;
      return s || (s = new wt()), a(g, b, r, n, s);
    }
  }
  return h ? (s || (s = new wt()), xE(e, t, r, n, a, s)) : !1;
}
var FE = AE, IE = FE, vn = W;
function xs(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !vn(e) && !vn(t) ? e !== e && t !== t : IE(e, t, r, n, xs, a);
}
var Cs = xs, OE = sr, RE = Cs, PE = 1, kE = 2;
function DE(e, t, r, n) {
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
    var u = l[0], c = e[u], d = l[1];
    if (i && l[2]) {
      if (c === void 0 && !(u in e))
        return !1;
    } else {
      var p = new OE();
      if (n)
        var h = n(c, d, u, e, t, p);
      if (!(h === void 0 ? RE(d, c, PE | kE, n, p) : h))
        return !1;
    }
  }
  return !0;
}
var LE = DE, BE = J;
function NE(e) {
  return e === e && !BE(e);
}
var ws = NE, UE = ws, ME = De;
function zE(e) {
  for (var t = ME(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, UE(a)];
  }
  return t;
}
var QE = zE;
function jE(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Ts = jE, qE = LE, VE = QE, GE = Ts;
function HE(e) {
  var t = VE(e);
  return t.length == 1 && t[0][2] ? GE(t[0][0], t[0][1]) : function(r) {
    return r === e || qE(r, e, t);
  };
}
var YE = HE, WE = Cs, KE = Kn, XE = tr, ZE = Xt, JE = ws, e_ = Ts, t_ = Pe, r_ = 1, n_ = 2;
function a_(e, t) {
  return ZE(e) && JE(t) ? e_(t_(e), t) : function(r) {
    var n = KE(r, e);
    return n === void 0 && n === t ? XE(r, e) : WE(t, n, r_ | n_);
  };
}
var s_ = a_;
function i_(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var o_ = i_, l_ = er;
function u_(e) {
  return function(t) {
    return l_(t, e);
  };
}
var c_ = u_, d_ = o_, p_ = c_, h_ = Xt, f_ = Pe;
function g_(e) {
  return h_(e) ? d_(f_(e)) : p_(e);
}
var m_ = g_, y_ = YE, b_ = s_, v_ = nr, S_ = U, E_ = m_;
function __(e) {
  return typeof e == "function" ? e : e == null ? v_ : typeof e == "object" ? S_(e) ? b_(e[0], e[1]) : y_(e) : E_(e);
}
var As = __, $_ = mt, x_ = _s, C_ = As;
function w_(e, t) {
  var r = {};
  return t = C_(t), x_(e, function(n, a, s) {
    $_(r, a, t(n, a, s));
  }), r;
}
var T_ = w_;
const Fs = /* @__PURE__ */ A(T_);
function ie(e) {
  this._maxSize = e, this.clear();
}
ie.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
ie.prototype.get = function(e) {
  return this._values[e];
};
ie.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var A_ = /[^.^\]^[]+|(?=\[\]|\.\.)/g, Is = /^\d+$/, F_ = /^\d/, I_ = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, O_ = /^\s*(['"]?)(.*?)(\1)\s*$/, mr = 512, Sn = new ie(mr), En = new ie(mr), _n = new ie(mr), St = {
  Cache: ie,
  split: zt,
  normalizePath: Tt,
  setter: function(e) {
    var t = Tt(e);
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
    var r = Tt(e);
    return _n.get(e) || _n.set(e, function(a) {
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
      return t + (yr(r) || Is.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    R_(Array.isArray(e) ? e : zt(e), t, r);
  }
};
function Tt(e) {
  return Sn.get(e) || Sn.set(
    e,
    zt(e).map(function(t) {
      return t.replace(O_, "$2");
    })
  );
}
function zt(e) {
  return e.match(A_) || [""];
}
function R_(e, t, r) {
  var n = e.length, a, s, i, l;
  for (s = 0; s < n; s++)
    a = e[s], a && (D_(a) && (a = '"' + a + '"'), l = yr(a), i = !l && /^\d+$/.test(a), t.call(r, a, l, i, s, e));
}
function yr(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function P_(e) {
  return e.match(F_) && !e.match(Is);
}
function k_(e) {
  return I_.test(e);
}
function D_(e) {
  return !yr(e) && (P_(e) || k_(e));
}
const Me = {
  context: "$",
  value: "."
};
class te {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
      throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Me.context, this.isValue = this.key[0] === Me.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? Me.context : this.isValue ? Me.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && St.getter(this.path, !0), this.map = r.map;
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
te.prototype.__isYupRef = !0;
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
function L_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function ze(e) {
  function t(r, n) {
    let {
      value: a,
      path: s = "",
      label: i,
      options: l,
      originalValue: u,
      sync: c
    } = r, d = L_(r, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name: p,
      test: h,
      params: f,
      message: y
    } = e;
    let {
      parent: g,
      context: b
    } = l;
    function v(T) {
      return te.isRef(T) ? T.getValue(a, g, b) : T;
    }
    function x(T = {}) {
      const $e = Fs(et({
        value: a,
        originalValue: u,
        label: i,
        path: T.path || s
      }, f, T.params), v), Sr = new N(N.formatError(T.message || y, $e), a, $e.path, T.type || p);
      return Sr.params = $e, Sr;
    }
    let P = et({
      path: s,
      parent: g,
      type: p,
      createError: x,
      resolve: v,
      options: l,
      originalValue: u
    }, d);
    if (!c) {
      try {
        Promise.resolve(h.call(P, a, P)).then((T) => {
          N.isError(T) ? n(T) : T ? n(null, T) : n(x());
        }).catch(n);
      } catch (T) {
        n(T);
      }
      return;
    }
    let I;
    try {
      var O;
      if (I = h.call(P, a, P), typeof ((O = I) == null ? void 0 : O.then) == "function")
        throw new Error(`Validation test of type: "${P.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (T) {
      n(T);
      return;
    }
    N.isError(I) ? n(I) : I ? n(null, I) : n(x());
  }
  return t.OPTIONS = e, t;
}
let B_ = (e) => e.substr(0, e.length - 1).substr(1);
function N_(e, t, r, n = r) {
  let a, s, i;
  return t ? (St.forEach(t, (l, u, c) => {
    let d = u ? B_(l) : l;
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
        throw new Error(`The schema does not contain the path: ${t}. (failed at: ${i} which is a type: "${e._type}")`);
      a = r, r = r && r[d], e = e.fields[d];
    }
    s = d, i = u ? "[" + l + "]" : "." + l;
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
    return this.toArray().reduce((r, n) => r.concat(te.isRef(n) ? t(n) : n), []);
  }
  add(t) {
    te.isRef(t) ? this.refs.set(t.key, t) : this.list.add(t);
  }
  delete(t) {
    te.isRef(t) ? this.refs.delete(t.key) : this.list.delete(t);
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
function M() {
  return M = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, M.apply(this, arguments);
}
class R {
  constructor(t) {
    this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new tt(), this._blacklist = new tt(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(ae.notType);
    }), this.type = (t == null ? void 0 : t.type) || "mixed", this.spec = M({
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
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = M({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Lt(M({}, this.spec, t)), r;
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
    const a = M({}, r.spec, n.spec);
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
    let n = this.resolve(M({
      value: t
    }, r)), a = n._cast(t, r);
    if (t !== void 0 && r.assert !== !1 && n.isType(a) !== !0) {
      let s = Ie(t), i = Ie(a);
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
    } = r, d = t;
    u || (d = this._cast(d, M({
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
      from: i
    }, h = [];
    this._typeError && h.push(this._typeError);
    let f = [];
    this._whitelistError && f.push(this._whitelistError), this._blacklistError && f.push(this._blacklistError), Mt({
      args: p,
      value: d,
      path: s,
      sync: a,
      tests: h,
      endEarly: c
    }, (y) => {
      if (y)
        return void n(y, d);
      Mt({
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
    let a = this.resolve(M({}, r, {
      value: t
    }));
    return typeof n == "function" ? a._validate(t, r, n) : new Promise((s, i) => a._validate(t, r, (l, u) => {
      l ? i(l) : s(u);
    }));
  }
  validateSync(t, r) {
    let n = this.resolve(M({}, r, {
      value: t
    })), a;
    return n._validate(t, M({}, r, {
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
  defined(t = ae.defined) {
    return this.test({
      message: t,
      name: "defined",
      exclusive: !0,
      test(r) {
        return r !== void 0;
      }
    });
  }
  required(t = ae.required) {
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
    }, r.message === void 0 && (r.message = ae.default), typeof r.test != "function")
      throw new TypeError("`test` is a required parameters");
    let n = this.clone(), a = ze(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((i) => !(i.OPTIONS.name === r.name && (s || i.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = Es(t).map((s) => new te(s));
    return a.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(new bS(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r._typeError = ze({
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
  oneOf(t, r = ae.oneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._whitelist.add(a), n._blacklist.delete(a);
    }), n._whitelistError = ze({
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
  notOneOf(t, r = ae.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n._blacklistError = ze({
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
R.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"])
  R.prototype[`${e}At`] = function(t, r, n = {}) {
    const {
      parent: a,
      parentPath: s,
      schema: i
    } = N_(this, t, r, n.context);
    return i[e](a && a[s], M({}, n, {
      parent: a,
      path: t
    }));
  };
for (const e of ["equals", "is"])
  R.prototype[e] = R.prototype.oneOf;
for (const e of ["not", "nope"])
  R.prototype[e] = R.prototype.notOneOf;
R.prototype.optional = R.prototype.notRequired;
const U_ = R;
U_.prototype;
const V = (e) => e == null;
let M_ = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, z_ = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, Q_ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, j_ = (e) => V(e) || e === e.trim(), q_ = {}.toString();
function Ae() {
  return new Os();
}
class Os extends R {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === q_ ? t : r;
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
        return V(n) || n.length === this.resolve(t);
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
        return V(n) || n.length >= this.resolve(t);
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
        return V(n) || n.length <= this.resolve(t);
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
      test: (i) => V(i) || i === "" && n || i.search(t) !== -1
    });
  }
  email(t = q.email) {
    return this.matches(M_, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = q.url) {
    return this.matches(z_, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = q.uuid) {
    return this.matches(Q_, {
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
      test: j_
    });
  }
  lowercase(t = q.lowercase) {
    return this.transform((r) => V(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => V(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = q.uppercase) {
    return this.transform((r) => V(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => V(r) || r === r.toUpperCase()
    });
  }
}
Ae.prototype = Os.prototype;
var V_ = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function G_(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, a;
  if (a = V_.exec(e)) {
    for (var s = 0, i; i = t[s]; ++s)
      a[i] = +a[i] || 0;
    a[2] = (+a[2] || 1) - 1, a[3] = +a[3] || 1, a[7] = a[7] ? String(a[7]).substr(0, 3) : 0, (a[8] === void 0 || a[8] === "") && (a[9] === void 0 || a[9] === "") ? n = +new Date(a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : (a[8] !== "Z" && a[9] !== void 0 && (r = a[10] * 60 + a[11], a[9] === "+" && (r = 0 - r)), n = Date.UTC(a[1], a[2], a[3], a[4], a[5] + r, a[6], a[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let Rs = /* @__PURE__ */ new Date(""), H_ = (e) => Object.prototype.toString.call(e) === "[object Date]";
class Ps extends R {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = G_(t), isNaN(t) ? Rs : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return H_(t) && !isNaN(t.getTime());
  }
  prepareParam(t, r) {
    let n;
    if (te.isRef(t))
      n = t;
    else {
      let a = this.cast(t);
      if (!this._typeCheck(a))
        throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = a;
    }
    return n;
  }
  min(t, r = Bt.min) {
    let n = this.prepareParam(t, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(a) {
        return V(a) || a >= this.resolve(n);
      }
    });
  }
  max(t, r = Bt.max) {
    let n = this.prepareParam(t, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      test(a) {
        return V(a) || a <= this.resolve(n);
      }
    });
  }
}
Ps.INVALID_DATE = Rs;
Ps.prototype;
function Y_(e, t, r, n) {
  var a = -1, s = e == null ? 0 : e.length;
  for (n && s && (r = e[++a]); ++a < s; )
    r = t(r, e[a], a, e);
  return r;
}
var W_ = Y_;
function K_(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var X_ = K_, Z_ = X_, J_ = {
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
}, e0 = Z_(J_), t0 = e0, r0 = t0, n0 = Re, a0 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, s0 = "\\u0300-\\u036f", i0 = "\\ufe20-\\ufe2f", o0 = "\\u20d0-\\u20ff", l0 = s0 + i0 + o0, u0 = "[" + l0 + "]", c0 = RegExp(u0, "g");
function d0(e) {
  return e = n0(e), e && e.replace(a0, r0).replace(c0, "");
}
var p0 = d0, h0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function f0(e) {
  return e.match(h0) || [];
}
var g0 = f0, m0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function y0(e) {
  return m0.test(e);
}
var b0 = y0, ks = "\\ud800-\\udfff", v0 = "\\u0300-\\u036f", S0 = "\\ufe20-\\ufe2f", E0 = "\\u20d0-\\u20ff", _0 = v0 + S0 + E0, Ds = "\\u2700-\\u27bf", Ls = "a-z\\xdf-\\xf6\\xf8-\\xff", $0 = "\\xac\\xb1\\xd7\\xf7", x0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", C0 = "\\u2000-\\u206f", w0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Bs = "A-Z\\xc0-\\xd6\\xd8-\\xde", T0 = "\\ufe0e\\ufe0f", Ns = $0 + x0 + C0 + w0, Us = "['’]", $n = "[" + Ns + "]", A0 = "[" + _0 + "]", Ms = "\\d+", F0 = "[" + Ds + "]", zs = "[" + Ls + "]", Qs = "[^" + ks + Ns + Ms + Ds + Ls + Bs + "]", I0 = "\\ud83c[\\udffb-\\udfff]", O0 = "(?:" + A0 + "|" + I0 + ")", R0 = "[^" + ks + "]", js = "(?:\\ud83c[\\udde6-\\uddff]){2}", qs = "[\\ud800-\\udbff][\\udc00-\\udfff]", ue = "[" + Bs + "]", P0 = "\\u200d", xn = "(?:" + zs + "|" + Qs + ")", k0 = "(?:" + ue + "|" + Qs + ")", Cn = "(?:" + Us + "(?:d|ll|m|re|s|t|ve))?", wn = "(?:" + Us + "(?:D|LL|M|RE|S|T|VE))?", Vs = O0 + "?", Gs = "[" + T0 + "]?", D0 = "(?:" + P0 + "(?:" + [R0, js, qs].join("|") + ")" + Gs + Vs + ")*", L0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", B0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", N0 = Gs + Vs + D0, U0 = "(?:" + [F0, js, qs].join("|") + ")" + N0, M0 = RegExp([
  ue + "?" + zs + "+" + Cn + "(?=" + [$n, ue, "$"].join("|") + ")",
  k0 + "+" + wn + "(?=" + [$n, ue + xn, "$"].join("|") + ")",
  ue + "?" + xn + "+" + Cn,
  ue + "+" + wn,
  B0,
  L0,
  Ms,
  U0
].join("|"), "g");
function z0(e) {
  return e.match(M0) || [];
}
var Q0 = z0, j0 = g0, q0 = b0, V0 = Re, G0 = Q0;
function H0(e, t, r) {
  return e = V0(e), t = r ? void 0 : t, t === void 0 ? q0(e) ? G0(e) : j0(e) : e.match(t) || [];
}
var Y0 = H0, W0 = W_, K0 = p0, X0 = Y0, Z0 = "['’]", J0 = RegExp(Z0, "g");
function e$(e) {
  return function(t) {
    return W0(X0(K0(t).replace(J0, "")), e, "");
  };
}
var Hs = e$, t$ = Hs, r$ = t$(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), n$ = r$;
const Tn = /* @__PURE__ */ A(n$);
function a$(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++n < a; )
    s[n] = e[n + t];
  return s;
}
var s$ = a$, i$ = s$;
function o$(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : i$(e, t, r);
}
var l$ = o$, u$ = "\\ud800-\\udfff", c$ = "\\u0300-\\u036f", d$ = "\\ufe20-\\ufe2f", p$ = "\\u20d0-\\u20ff", h$ = c$ + d$ + p$, f$ = "\\ufe0e\\ufe0f", g$ = "\\u200d", m$ = RegExp("[" + g$ + u$ + h$ + f$ + "]");
function y$(e) {
  return m$.test(e);
}
var Ys = y$;
function b$(e) {
  return e.split("");
}
var v$ = b$, Ws = "\\ud800-\\udfff", S$ = "\\u0300-\\u036f", E$ = "\\ufe20-\\ufe2f", _$ = "\\u20d0-\\u20ff", $$ = S$ + E$ + _$, x$ = "\\ufe0e\\ufe0f", C$ = "[" + Ws + "]", Qt = "[" + $$ + "]", jt = "\\ud83c[\\udffb-\\udfff]", w$ = "(?:" + Qt + "|" + jt + ")", Ks = "[^" + Ws + "]", Xs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Zs = "[\\ud800-\\udbff][\\udc00-\\udfff]", T$ = "\\u200d", Js = w$ + "?", ei = "[" + x$ + "]?", A$ = "(?:" + T$ + "(?:" + [Ks, Xs, Zs].join("|") + ")" + ei + Js + ")*", F$ = ei + Js + A$, I$ = "(?:" + [Ks + Qt + "?", Qt, Xs, Zs, C$].join("|") + ")", O$ = RegExp(jt + "(?=" + jt + ")|" + I$ + F$, "g");
function R$(e) {
  return e.match(O$) || [];
}
var P$ = R$, k$ = v$, D$ = Ys, L$ = P$;
function B$(e) {
  return D$(e) ? L$(e) : k$(e);
}
var N$ = B$, U$ = l$, M$ = Ys, z$ = N$, Q$ = Re;
function j$(e) {
  return function(t) {
    t = Q$(t);
    var r = M$(t) ? z$(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? U$(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var q$ = j$, V$ = q$, G$ = V$("toUpperCase"), H$ = G$, Y$ = Re, W$ = H$;
function K$(e) {
  return W$(Y$(e).toLowerCase());
}
var X$ = K$, Z$ = X$, J$ = Hs, e1 = J$(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? Z$(t) : t);
}), t1 = e1;
const r1 = /* @__PURE__ */ A(t1);
var n1 = mt, a1 = _s, s1 = As;
function i1(e, t) {
  var r = {};
  return t = s1(t), a1(e, function(n, a, s) {
    n1(r, t(n, a, s), n);
  }), r;
}
var o1 = i1;
const l1 = /* @__PURE__ */ A(o1);
var br = { exports: {} };
br.exports = function(e) {
  return ti(u1(e), e);
};
br.exports.array = ti;
function ti(e, t) {
  var r = e.length, n = new Array(r), a = {}, s = r, i = c1(t), l = d1(e);
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
      var f = i.get(c) || /* @__PURE__ */ new Set();
      if (f = Array.from(f), d = f.length) {
        p.add(c);
        do {
          var y = f[--d];
          u(y, l.get(y), p);
        } while (d);
        p.delete(c);
      }
      n[--r] = c;
    }
  }
}
function u1(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.add(a[0]), t.add(a[1]);
  }
  return Array.from(t);
}
function c1(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.has(a[0]) || t.set(a[0], /* @__PURE__ */ new Set()), t.has(a[1]) || t.set(a[1], /* @__PURE__ */ new Set()), t.get(a[0]).add(a[1]);
  }
  return t;
}
function d1(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var p1 = br.exports;
const h1 = /* @__PURE__ */ A(p1);
function f1(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([i, l]) => `${i}-${l}`));
  function s(i, l) {
    let u = St.split(i)[0];
    n.add(u), a.has(`${l}-${u}`) || r.push([l, u]);
  }
  for (const i in e)
    if (Ze(e, i)) {
      let l = e[i];
      n.add(i), te.isRef(l) && l.isSibling ? s(l.path, i) : Ss(l) && "deps" in l && l.deps.forEach((u) => s(u, i));
    }
  return h1.array(Array.from(n), r).reverse();
}
function An(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if (((s = t.path) == null ? void 0 : s.indexOf(n)) !== -1)
      return r = a, !0;
  }), r;
}
function ri(e) {
  return (t, r) => An(e, t) - An(e, r);
}
function he() {
  return he = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, he.apply(this, arguments);
}
let Fn = (e) => Object.prototype.toString.call(e) === "[object Object]";
function g1(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const m1 = ri([]);
class ni extends R {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = m1, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
    let s = this.fields, i = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, l = this._nodes.concat(Object.keys(a).filter((p) => this._nodes.indexOf(p) === -1)), u = {}, c = he({}, r, {
      parent: u,
      __validating: r.__validating || !1
    }), d = !1;
    for (const p of l) {
      let h = s[p], f = Ze(a, p);
      if (h) {
        let y, g = a[p];
        c.path = (r.path ? `${r.path}.` : "") + p, h = h.resolve({
          value: g,
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
      originalValue: l = t,
      abortEarly: u = this.spec.abortEarly,
      recursive: c = this.spec.recursive
    } = r;
    i = [{
      schema: this,
      value: l
    }, ...i], r.__validating = !0, r.originalValue = l, r.from = i, super._validate(t, r, (d, p) => {
      if (d) {
        if (!N.isError(d) || u)
          return void n(d, p);
        a.push(d);
      }
      if (!c || !Fn(p)) {
        n(a[0] || null, p);
        return;
      }
      l = l || p;
      let h = this._nodes.map((f) => (y, g) => {
        let b = f.indexOf(".") === -1 ? (r.path ? `${r.path}.` : "") + f : `${r.path || ""}["${f}"]`, v = this.fields[f];
        if (v && "validate" in v) {
          v.validate(p[f], he({}, r, {
            // @ts-ignore
            path: b,
            from: i,
            // inner fields are always strict:
            // 1. this isn't strict so the casting will also have cast inner values
            // 2. this is strict in which case the nested values weren't cast either
            strict: !0,
            parent: p,
            originalValue: l[f]
          }), g);
          return;
        }
        g(null);
      });
      Mt({
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
    return r.fields = he({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), n = r.fields;
    for (let [a, s] of Object.entries(this.fields)) {
      const i = n[a];
      i === void 0 ? n[a] = s : i instanceof R && s instanceof R && (n[a] = s.concat(i));
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
    return n.fields = a, n._sortErrors = ri(Object.keys(a)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = f1(a, n._excludedEdges), n;
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
    let a = St.getter(t, !0);
    return this.transform((s) => {
      if (s == null)
        return s;
      let i = s;
      return Ze(s, t) && (i = he({}, s), n || delete i[t], i[r] = a(s)), i;
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
        const s = g1(this.schema, a);
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
    return this.transform((r) => r && l1(r, (n, a) => t(a)));
  }
  camelCase() {
    return this.transformKeys(r1);
  }
  snakeCase() {
    return this.transformKeys(Tn);
  }
  constantCase() {
    return this.transformKeys((t) => Tn(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = Fs(this.fields, (r) => r.describe()), t;
  }
}
function qe(e) {
  return new ni(e);
}
qe.prototype = ni.prototype;
const y1 = {
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
}, b1 = qe({
  task: qe({
    title: Ae().required("Title is required"),
    recordType: Ae().required("Record type is required"),
    serializer: Ae().required("Serializer is required"),
    mode: Ae().required("Mode is required")
  }),
  metadata: qe().nullable()
}), v1 = ({ onSubmit: e }) => {
  const t = async (r) => {
    try {
      const n = await Vv(r.task);
      if (!n)
        throw new Error("Failed to create import task");
      if (r.metadata) {
        const a = await qv(n.id, r.metadata);
        console.log("Metadata added:", a);
        const s = await bs(n.id);
        if (console.log("Task validation result:", s), s) {
          const i = await ys(n.id);
          console.log("Task status:", i);
        }
      }
      e == null || e();
    } catch (n) {
      console.error("Error creating import task:", n);
    }
  };
  return /* @__PURE__ */ o.createElement(
    ki,
    {
      formik: {
        initialValues: y1,
        validationSchema: b1,
        onSubmit: t
      }
    },
    /* @__PURE__ */ o.createElement(eS, null)
  );
}, S1 = () => {
  const [e, t] = ee(!1), { refreshSearch: r } = vt(), n = nt(() => {
    t(!1), r();
  }, [r]);
  return /* @__PURE__ */ o.createElement(
    we,
    {
      closeIcon: !0,
      onClose: () => t(!1),
      onOpen: () => t(!0),
      open: e,
      trigger: /* @__PURE__ */ o.createElement(Q, { color: "green", icon: !0, labelPosition: "left" }, /* @__PURE__ */ o.createElement(C, { name: "add" }), "New Import")
    },
    /* @__PURE__ */ o.createElement($i, null, "New Import Task"),
    /* @__PURE__ */ o.createElement(xi, null, /* @__PURE__ */ o.createElement(v1, { onSubmit: n })),
    /* @__PURE__ */ o.createElement(Ci, null, /* @__PURE__ */ o.createElement(Q, { onClick: () => t(!1) }, "Close"))
  );
}, E1 = ({
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
  return /* @__PURE__ */ o.createElement(Fe, { activeIndex: 0, compact: !0, size: "tiny" }, r.map(({ key: i, label: l, value: u }) => /* @__PURE__ */ o.createElement(
    Fe.Item,
    {
      key: i,
      name: i,
      active: (n == null ? void 0 : n[1]) === u || u === null && !n,
      onClick: () => a(u)
    },
    l
  )));
}, ai = qa(E1);
function qt(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var _1 = (e) => typeof e == "object" && e !== null;
function $1(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var x1 = (e) => e === "base";
function C1(e) {
  return e.slice().filter((t) => !x1(t));
}
function In(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function w1(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = In(r % 52) + t;
  return In(r % 52) + t;
}
function T1(e, t) {
  let r = t.length;
  for (; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function A1(e) {
  return w1(T1(5381, e) >>> 0);
}
var si = /\s*!(important)?/i;
function F1(e) {
  return typeof e == "string" ? si.test(e) : !1;
}
function I1(e) {
  return typeof e == "string" ? e.replace(si, "").trim() : e;
}
function ii(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var vr = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...n) => {
    const a = JSON.stringify(n);
    if (t.has(a))
      return t.get(a);
    const s = e(...n);
    return t.set(a, s), s;
  };
}, O1 = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function oi(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((n) => {
    if (O1.has(n))
      return;
    const a = t[n], s = r[n];
    qt(a) && qt(s) ? t[n] = oi(a, s) : t[n] = s;
  }), t), {});
}
var R1 = (e) => e != null;
function li(e, t, r = {}) {
  const { stop: n, getKey: a } = r;
  function s(i, l = []) {
    if (_1(i)) {
      const u = {};
      for (const [c, d] of Object.entries(i)) {
        const p = (a == null ? void 0 : a(c, d)) ?? c, h = [...l, p];
        if (n != null && n(i, h))
          return t(i, l);
        const f = s(d, h);
        R1(f) && (u[p] = f);
      }
      return u;
    }
    return t(i, l);
  }
  return s(e);
}
function P1(e, t) {
  return e.reduce(
    (r, n, a) => {
      const s = t[a];
      return n != null && (r[s] = n), r;
    },
    {}
  );
}
function ui(e, t, r = !0) {
  const { utility: n, conditions: a } = t, { hasShorthand: s, resolveShorthand: i } = n;
  return li(
    e,
    (l) => Array.isArray(l) ? P1(l, a.breakpoints.keys) : l,
    {
      stop: (l) => Array.isArray(l),
      getKey: r ? (l) => s ? i(l) : l : void 0
    }
  );
}
var k1 = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, D1 = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function L1(e) {
  const { utility: t, hash: r, conditions: n = k1 } = e, a = (i) => [t.prefix, i].filter(Boolean).join("-"), s = (i, l) => {
    let u;
    if (r) {
      const c = [...n.finalize(i), l];
      u = a(t.toHash(c, A1));
    } else
      u = [...n.finalize(i), a(l)].join(":");
    return u;
  };
  return vr(({ base: i, ...l } = {}) => {
    const u = Object.assign(l, i), c = ui(u, e), d = /* @__PURE__ */ new Set();
    return li(c, (p, h) => {
      if (p == null)
        return;
      const f = F1(p), [y, ...g] = n.shift(h), b = C1(g), v = t.transform(y, I1(D1(p)));
      let x = s(b, v.className);
      f && (x = `${x}!`), d.add(x);
    }), Array.from(d).join(" ");
  });
}
function B1(...e) {
  return e.flat().filter((t) => qt(t) && Object.keys($1(t)).length > 0);
}
function N1(e) {
  function t(a) {
    const s = B1(...a);
    return s.length === 1 ? s : s.map((i) => ui(i, e));
  }
  function r(...a) {
    return oi(...t(a));
  }
  function n(...a) {
    return Object.assign({}, ...t(a));
  }
  return { mergeCss: vr(r), assignCss: n };
}
var U1 = /([A-Z])/g, M1 = /^ms-/, z1 = vr((e) => e.startsWith("--") ? e : e.replace(U1, "-$1").replace(M1, "-ms-").toLowerCase()), Q1 = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${Q1.split(",").join("|")}`;
const j1 = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", ci = new Set(j1.split(",")), q1 = /^@|&|&$/;
function On(e) {
  return ci.has(e) || q1.test(e);
}
const V1 = /^_/, G1 = /&|@/;
function H1(e) {
  return e.map((t) => ci.has(t) ? t.replace(V1, "") : G1.test(t) ? `[${ii(t.trim())}]` : t);
}
function Y1(e) {
  return e.sort((t, r) => {
    const n = On(t), a = On(r);
    return n && !a ? 1 : !n && a ? -1 : 0;
  });
}
const W1 = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle", di = /* @__PURE__ */ new Map(), pi = /* @__PURE__ */ new Map();
W1.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [n, ...a] = r.split("/");
  di.set(t, n), a.length && a.forEach((s) => {
    pi.set(s === "1" ? n : s, t);
  });
});
const Rn = (e) => pi.get(e) || e, hi = {
  conditions: {
    shift: Y1,
    finalize: H1,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = Rn(e);
      return { className: `${di.get(r) || z1(r)}_${ii(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: Rn
  }
}, K1 = L1(hi), ce = (...e) => K1(fi(...e));
ce.raw = (...e) => fi(...e);
const { mergeCss: fi, assignCss: Ex } = N1(hi), Ce = {
  searchBarRow: ce({
    display: "flex !important",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1rem",
    paddingBlock: "0.5rem",
    minBlockSize: "3rem"
  }),
  facets: ce({
    flex: "0 0 auto"
  }),
  search: ce({
    flex: "1 1 auto",
    minInlineSize: "15rem"
  }),
  import: ce({
    flex: "0 0 auto"
  }),
  visuallyHidden: ce({
    srOnly: !0
  })
}, X1 = ({
  appId: e = "search"
}) => {
  const { showFacets: t, showImportModal: r } = vt().config;
  return /* @__PURE__ */ o.createElement(m, { id: `${e}.SearchBarRow` }, /* @__PURE__ */ o.createElement(
    "section",
    {
      className: Ce.searchBarRow,
      "aria-label": "Records search and filters"
    },
    t && /* @__PURE__ */ o.createElement("div", { className: Ce.facets }, /* @__PURE__ */ o.createElement(ai, null)),
    /* @__PURE__ */ o.createElement("div", { className: Ce.search }, /* @__PURE__ */ o.createElement(
      Fv,
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
    ), /* @__PURE__ */ o.createElement("span", { className: Ce.visuallyHidden }, "Type keywords to search through records. Press Enter to submit.")),
    r && /* @__PURE__ */ o.createElement("div", { className: Ce.import }, /* @__PURE__ */ o.createElement(S1, null))
  ));
}, Z1 = () => {
  const { config: e } = vt();
  return /* @__PURE__ */ o.createElement(L, null, /* @__PURE__ */ o.createElement(L.Row, { verticalAlign: "middle" }, /* @__PURE__ */ o.createElement(L.Column, { width: 4, textAlign: "left" }, /* @__PURE__ */ o.createElement(iv, { label: (t) => /* @__PURE__ */ o.createElement("div", null, t, " item(s)") })), /* @__PURE__ */ o.createElement(L.Column, { width: 8, textAlign: "center" }, /* @__PURE__ */ o.createElement(gv, { options: { size: "mini" } })), /* @__PURE__ */ o.createElement(L.Column, { width: 4, textAlign: "right" }, /* @__PURE__ */ o.createElement(
    wv,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ o.createElement("p", null, t, " results per page")
    }
  ))));
}, gi = ({
  config: e = {},
  overriddenComponents: t = {}
}) => {
  var s, i, l, u, c;
  const r = {
    ...Z,
    ...e,
    initialQueryState: {
      ...Z.initialQueryState,
      ...e.initialQueryState
    },
    layoutOptions: {
      ...Z.layoutOptions,
      ...e.layoutOptions
    },
    paginationOptions: {
      ...Z.paginationOptions,
      ...e.paginationOptions,
      resultsPerPage: ((s = e.paginationOptions) == null ? void 0 : s.resultsPerPage) || Z.paginationOptions.resultsPerPage
    },
    searchApi: {
      ...Z.searchApi,
      ...e.searchApi,
      axios: {
        ...Z.searchApi.axios,
        ...(i = e.searchApi) == null ? void 0 : i.axios,
        headers: {
          ...Z.searchApi.axios.headers,
          ...(u = (l = e.searchApi) == null ? void 0 : l.axios) == null ? void 0 : u.headers
        }
      },
      invenio: {
        ...Z.searchApi.invenio,
        ...(c = e.searchApi) == null ? void 0 : c.invenio
      }
    },
    showFacets: e.showFacets ?? !0,
    showImportModal: e.showImportModal ?? !0,
    showSearchFooter: e.showSearchFooter ?? !0
  }, n = new ma(r.searchApi), a = {
    [`${r.appId}.ResultsList.item`]: Xv,
    [`${r.appId}.ResultsList.container`]: Zv,
    [`${r.appId}.SearchFacets`]: ai,
    ...t
  };
  return /* @__PURE__ */ o.createElement(vi.Provider, { value: a }, /* @__PURE__ */ o.createElement(
    Vb,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ o.createElement(Uv, { config: r }, /* @__PURE__ */ o.createElement(X1, { appId: r.appId }), /* @__PURE__ */ o.createElement(_v, null, /* @__PURE__ */ o.createElement(uv, null), /* @__PURE__ */ o.createElement(Ja, null)), r.showSearchFooter && /* @__PURE__ */ o.createElement(Z1, null))
  ));
}, J1 = ({ status: e, ...t }) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ o.createElement(C, { name: "close", color: "red", ...t }) : e === "success" || e === "validated" || e === "created" ? /* @__PURE__ */ o.createElement(C, { name: "check circle", ...t }) : e === "importing" || e === "validating" ? /* @__PURE__ */ o.createElement(C, { name: "spinner", loading: !0, ...t }) : /* @__PURE__ */ o.createElement(C, { ...t }), ex = ({
  status: e,
  children: t,
  ...r
}) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ o.createElement(de, { color: "red", ...r }, /* @__PURE__ */ o.createElement(C, { name: "warning sign" }), t) : e === "success" || e === "validated" || e === "created" ? /* @__PURE__ */ o.createElement(de, { color: "green", ...r }, /* @__PURE__ */ o.createElement(C, { name: "check circle" }), t) : e === "importing" || e === "validating" ? /* @__PURE__ */ o.createElement(de, { color: "blue", ...r }, /* @__PURE__ */ o.createElement(C, { name: "spinner", loading: !0 }), t) : /* @__PURE__ */ o.createElement(de, { ...r }, t), mi = bi(
  void 0
), tx = ({
  taskId: e,
  children: t
}) => /* @__PURE__ */ o.createElement(mi.Provider, { value: { taskId: e } }, /* @__PURE__ */ o.createElement(
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
)), rx = () => {
  const e = $(mi);
  if (!e)
    throw new Error("useTaskDetails must be used within a TaskDetailsProvider");
  return e;
}, nx = ({ children: e }) => /* @__PURE__ */ o.createElement(Ln, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ o.createElement(Bn, null, /* @__PURE__ */ o.createElement(at, null, /* @__PURE__ */ o.createElement(D, null, "ID"), /* @__PURE__ */ o.createElement(D, null, "Title"), /* @__PURE__ */ o.createElement(D, null, "Status"), /* @__PURE__ */ o.createElement(D, null, "Action"), /* @__PURE__ */ o.createElement(D, null, "Options"))), /* @__PURE__ */ o.createElement(Nn, null, e)), ax = ({
  openModal: e,
  setOpenModal: t,
  result: r
}) => /* @__PURE__ */ o.createElement(we, { open: e, onClose: () => t(!1), closeIcon: !0 }, /* @__PURE__ */ o.createElement(we.Header, null, "Record Errors"), /* @__PURE__ */ o.createElement(we.Content, null, r.errors && r.errors.length > 0 ? /* @__PURE__ */ o.createElement(z, { negative: !0, icon: !0 }, /* @__PURE__ */ o.createElement(C, { name: "exclamation triangle" }), /* @__PURE__ */ o.createElement(z.Content, null, /* @__PURE__ */ o.createElement(z.Header, null, "Serializer validation failed"), /* @__PURE__ */ o.createElement(Ve, { bulleted: !0 }, r.errors.map((n) => /* @__PURE__ */ o.createElement(Ve.Item, { key: `${n.type}-${r.id}` }, n.msg))))) : /* @__PURE__ */ o.createElement(z, { positive: !0, icon: !0 }, /* @__PURE__ */ o.createElement(C, { name: "check circle" }), /* @__PURE__ */ o.createElement(z.Content, null, /* @__PURE__ */ o.createElement(z.Header, null, "Validation successful"), "No errors found for this record."))), /* @__PURE__ */ o.createElement(we.Actions, null, /* @__PURE__ */ o.createElement(Q, { onClick: () => t(!1), content: "Close", primary: !0 }))), sx = ({
  result: e,
  index: t
}) => {
  const [r, n] = ee("idle"), [a, s] = ee(!1);
  if (!e)
    return null;
  const i = () => {
    navigator.clipboard.writeText(e.id), n("copied"), setTimeout(() => {
      n("idle");
    }, 2e3);
  }, l = [
    {
      key: "modal",
      text: /* @__PURE__ */ o.createElement(
        Q,
        {
          size: "mini",
          content: "View error(s)",
          onClick: (u) => {
            u.stopPropagation(), s(!0);
          }
        }
      ),
      value: "modal"
    }
  ];
  return /* @__PURE__ */ o.createElement(at, { key: t }, /* @__PURE__ */ o.createElement(k, null, /* @__PURE__ */ o.createElement("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem" } }, e.id, /* @__PURE__ */ o.createElement(Q, { size: "mini", circular: !0, icon: !0 }, /* @__PURE__ */ o.createElement(
    C,
    {
      onClick: i,
      name: r === "copied" ? "check" : "copy"
    }
  )))), /* @__PURE__ */ o.createElement(k, null, e.src_data.title || "No Title"), /* @__PURE__ */ o.createElement(k, null, Xe(e.status)), /* @__PURE__ */ o.createElement(k, null, /* @__PURE__ */ o.createElement(J1, { status: e.status, size: "large" })), /* @__PURE__ */ o.createElement(k, { style: { width: "220px" } }, /* @__PURE__ */ o.createElement(
    me,
    {
      text: "Select Option",
      floating: !0,
      labeled: !0,
      className: "icon",
      options: l
    }
  ), /* @__PURE__ */ o.createElement(
    ax,
    {
      setOpenModal: s,
      openModal: a,
      result: e
    }
  )));
}, ix = () => {
  const { taskId: e } = rx(), t = {
    "search.SearchBarRow": () => null,
    "search.ResultsList.container": nx,
    "search.ResultsList.item": sx
  };
  return /* @__PURE__ */ o.createElement("div", null, /* @__PURE__ */ o.createElement(pe, { as: "h3" }, "Task Records"), /* @__PURE__ */ o.createElement(
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
}, ox = ({ taskId: e }) => {
  var g, b, v, x, P, I;
  const [t, r] = ee(null), [n, a] = ee(!0), [s, i] = ee(null), l = nt(async () => {
    try {
      a(!0), i(null);
      const O = await Yv(e);
      if (!O)
        throw new Error("Task not found");
      r(O);
    } catch (O) {
      console.error("Error fetching task details:", O), i(
        O instanceof Error ? O.message : "Failed to fetch task details"
      );
    } finally {
      a(!1);
    }
  }, [e]);
  if (rt(() => {
    e && l();
  }, [e, l]), n)
    return /* @__PURE__ */ o.createElement(oe, null, /* @__PURE__ */ o.createElement(Dn, { content: "Loading task details..." }));
  if (s)
    return /* @__PURE__ */ o.createElement(z, { negative: !0, icon: !0 }, /* @__PURE__ */ o.createElement(C, { name: "exclamation triangle" }), /* @__PURE__ */ o.createElement(z.Content, null, /* @__PURE__ */ o.createElement(z.Header, null, "Error Loading Task"), s));
  if (!t)
    return /* @__PURE__ */ o.createElement(z, { warning: !0, icon: !0 }, /* @__PURE__ */ o.createElement(C, { name: "search" }), /* @__PURE__ */ o.createElement(z.Content, null, /* @__PURE__ */ o.createElement(z.Header, null, "Task Not Found"), "The requested task could not be found."));
  const u = ((g = t.records_status) == null ? void 0 : g.total_records) || 0, c = ((b = t.records_status) == null ? void 0 : b.validated) || 0, d = ((v = t.records_status) == null ? void 0 : v.success) || 0, p = (((x = t.records_status) == null ? void 0 : x["import failed"]) || 0) + (((P = t.records_status) == null ? void 0 : P["validation failed"]) || 0) + (((I = t.records_status) == null ? void 0 : I["serializer validation failed"]) || 0), h = u > 0 ? c / u * 100 : 0, f = u > 0 ? d / u * 100 : 0, y = u > 0 ? p / u * 100 : 0;
  return /* @__PURE__ */ o.createElement(tx, { taskId: e }, /* @__PURE__ */ o.createElement(oe.Group, { compact: !0 }, /* @__PURE__ */ o.createElement(oe, null, /* @__PURE__ */ o.createElement(L, null, /* @__PURE__ */ o.createElement(L.Row, { verticalAlign: "middle" }, /* @__PURE__ */ o.createElement(L.Column, { width: 8, verticalAlign: "middle" }, /* @__PURE__ */ o.createElement(pe, { as: "h2" }, /* @__PURE__ */ o.createElement(C, { name: "tasks", size: "huge" }), /* @__PURE__ */ o.createElement(pe.Content, null, t.title, t.description && /* @__PURE__ */ o.createElement(pe.Subheader, null, t.description)))), /* @__PURE__ */ o.createElement(L.Column, { width: 8, textAlign: "right" }, /* @__PURE__ */ o.createElement(oe, { basic: !0, size: "small", horizontal: !0 }, t.status && /* @__PURE__ */ o.createElement(ex, { size: "large", status: t.status }, Xe(t.status)), /* @__PURE__ */ o.createElement(Q.Group, { size: "small" }, /* @__PURE__ */ o.createElement(
    Q,
    {
      disabled: !0,
      color: "blue",
      icon: "refresh",
      content: "Check Status",
      onClick: l,
      loading: n
    }
  ), /* @__PURE__ */ o.createElement(
    Q,
    {
      disabled: !0,
      color: "green",
      icon: "play",
      content: "Run Task"
    }
  ))))))), u > 0 && /* @__PURE__ */ o.createElement(oe, null, /* @__PURE__ */ o.createElement(pe, { as: "h4" }, /* @__PURE__ */ o.createElement(C, { name: "chart bar" }), "Progress Overview"), /* @__PURE__ */ o.createElement(H.Group, { widths: "three", size: "small" }, /* @__PURE__ */ o.createElement(H, { color: "blue" }, /* @__PURE__ */ o.createElement(H.Value, null, c), /* @__PURE__ */ o.createElement(H.Label, null, "Validated")), /* @__PURE__ */ o.createElement(H, { color: "red" }, /* @__PURE__ */ o.createElement(H.Value, null, p), /* @__PURE__ */ o.createElement(H.Label, null, "With Errors")), /* @__PURE__ */ o.createElement(H, { color: "green" }, /* @__PURE__ */ o.createElement(H.Value, null, d), /* @__PURE__ */ o.createElement(H.Label, null, "Imported"))), /* @__PURE__ */ o.createElement(wi, null), /* @__PURE__ */ o.createElement(L, { columns: 3, divided: !0 }, /* @__PURE__ */ o.createElement(L.Column, null, /* @__PURE__ */ o.createElement("div", { style: { textAlign: "center", marginBottom: "0.5rem" } }, /* @__PURE__ */ o.createElement("strong", null, "Validation Progress")), /* @__PURE__ */ o.createElement(
    Et,
    {
      percent: h,
      color: "blue",
      size: "small"
    },
    c,
    " / ",
    u
  )), /* @__PURE__ */ o.createElement(L.Column, null, /* @__PURE__ */ o.createElement("div", { style: { textAlign: "center", marginBottom: "0.5rem" } }, /* @__PURE__ */ o.createElement("strong", null, "Error Records")), /* @__PURE__ */ o.createElement(Et, { percent: y, color: "red", size: "small" }, p, " / ", u)), /* @__PURE__ */ o.createElement(L.Column, null, /* @__PURE__ */ o.createElement("div", { style: { textAlign: "center", marginBottom: "0.5rem" } }, /* @__PURE__ */ o.createElement("strong", null, "Import Progress")), /* @__PURE__ */ o.createElement(Et, { percent: f, color: "green", size: "small" }, d, " / ", u))))), /* @__PURE__ */ o.createElement(ix, null));
}, _x = {
  Search: gi,
  TaskDetails: ox
}, $x = {
  CREATED: "created",
  VALIDATING: "validating",
  SERIALIZER_VALIDATION_FAILED: "serializer validation failed",
  VALIDATION_FAILED: "validation failed",
  VALIDATED: "validated",
  IMPORT_FAILED: "import failed",
  IMPORTED: "success"
}, xx = {
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
  _x as BulkImporter,
  S1 as ImportModal,
  xx as ImporterTaskStates,
  $x as InvenioImporterRecordStatus,
  gi as Search,
  ox as TaskDetails,
  sx as TaskRecordItem,
  Xe as capitalizeFirstLetter,
  vx as createSearchApi,
  Sx as createSearchApiConfig,
  Mv as formatDate,
  jv as getCsrfToken
};
