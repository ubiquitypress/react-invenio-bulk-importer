import o, { Component as I, useContext as x, useEffect as nt, useCallback as ee, useState as te, Fragment as vi, createContext as Si } from "react";
import b, { OverridableContext as Ei } from "react-overridable";
import Qe from "axios";
import be from "qs";
import { connect as T, Provider as _i } from "react-redux";
import { Label as le, Icon as F, Input as kn, Button as j, List as Ge, Checkbox as Dn, Card as k, Segment as de, Header as ge, Menu as Ie, Pagination as $i, Item as pe, Loader as Ln, Dropdown as ne, Image as xi, TableRow as at, TableCell as U, Table as Bn, TableHeader as Nn, TableHeaderCell as M, TableBody as Un, Form as Er, Modal as Te, ModalHeader as Ci, ModalContent as wi, ModalActions as Ti, Grid as P, Message as z, Popup as _r, Statistic as Y, Divider as Ai, Progress as Et } from "semantic-ui-react";
import { combineReducers as Fi, createStore as Ii, applyMiddleware as Oi } from "redux";
import Ri from "redux-thunk";
import Pi from "lodash";
import { TextField as ki, SelectField as _t, TextAreaField as Di, BaseForm as Li } from "react-invenio-forms";
import { useFormikContext as Bi } from "formik";
var Ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function A(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ni = Object.prototype;
function Ui(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ni;
  return e === r;
}
var st = Ui;
function Mi(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Mn = Mi, zi = Mn, ji = zi(Object.keys, Object), Qi = ji, qi = st, Vi = Qi, Gi = Object.prototype, Hi = Gi.hasOwnProperty;
function Yi(e) {
  if (!qi(e))
    return Vi(e);
  var t = [];
  for (var r in Object(e))
    Hi.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var zn = Yi, Wi = typeof Ne == "object" && Ne && Ne.Object === Object && Ne, jn = Wi, Ki = jn, Xi = typeof self == "object" && self && self.Object === Object && self, Zi = Ki || Xi || Function("return this")(), W = Zi, Ji = W, eo = Ji.Symbol, ve = eo, $r = ve, Qn = Object.prototype, to = Qn.hasOwnProperty, ro = Qn.toString, Ce = $r ? $r.toStringTag : void 0;
function no(e) {
  var t = to.call(e, Ce), r = e[Ce];
  try {
    e[Ce] = void 0;
    var n = !0;
  } catch {
  }
  var a = ro.call(e);
  return n && (t ? e[Ce] = r : delete e[Ce]), a;
}
var ao = no, so = Object.prototype, io = so.toString;
function oo(e) {
  return io.call(e);
}
var lo = oo, xr = ve, uo = ao, co = lo, po = "[object Null]", ho = "[object Undefined]", Cr = xr ? xr.toStringTag : void 0;
function fo(e) {
  return e == null ? e === void 0 ? ho : po : Cr && Cr in Object(e) ? uo(e) : co(e);
}
var se = fo;
function go(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var re = go;
const mo = /* @__PURE__ */ A(re);
var yo = se, bo = re, vo = "[object AsyncFunction]", So = "[object Function]", Eo = "[object GeneratorFunction]", _o = "[object Proxy]";
function $o(e) {
  if (!bo(e))
    return !1;
  var t = yo(e);
  return t == So || t == Eo || t == vo || t == _o;
}
var qn = $o, xo = W, Co = xo["__core-js_shared__"], wo = Co, $t = wo, wr = function() {
  var e = /[^.]+$/.exec($t && $t.keys && $t.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function To(e) {
  return !!wr && wr in e;
}
var Ao = To, Fo = Function.prototype, Io = Fo.toString;
function Oo(e) {
  if (e != null) {
    try {
      return Io.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Vn = Oo, Ro = qn, Po = Ao, ko = re, Do = Vn, Lo = /[\\^$.*+?()[\]{}|]/g, Bo = /^\[object .+?Constructor\]$/, No = Function.prototype, Uo = Object.prototype, Mo = No.toString, zo = Uo.hasOwnProperty, jo = RegExp(
  "^" + Mo.call(zo).replace(Lo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Qo(e) {
  if (!ko(e) || Po(e))
    return !1;
  var t = Ro(e) ? jo : Bo;
  return t.test(Do(e));
}
var qo = Qo;
function Vo(e, t) {
  return e == null ? void 0 : e[t];
}
var Go = Vo, Ho = qo, Yo = Go;
function Wo(e, t) {
  var r = Yo(e, t);
  return Ho(r) ? r : void 0;
}
var ue = Wo, Ko = ue, Xo = W, Zo = Ko(Xo, "DataView"), Jo = Zo, el = ue, tl = W, rl = el(tl, "Map"), Vt = rl, nl = ue, al = W, sl = nl(al, "Promise"), il = sl, ol = ue, ll = W, ul = ol(ll, "Set"), cl = ul, dl = ue, pl = W, hl = dl(pl, "WeakMap"), fl = hl, At = Jo, Ft = Vt, It = il, Ot = cl, Rt = fl, Gn = se, Se = Vn, Tr = "[object Map]", gl = "[object Object]", Ar = "[object Promise]", Fr = "[object Set]", Ir = "[object WeakMap]", Or = "[object DataView]", ml = Se(At), yl = Se(Ft), bl = Se(It), vl = Se(Ot), Sl = Se(Rt), ie = Gn;
(At && ie(new At(new ArrayBuffer(1))) != Or || Ft && ie(new Ft()) != Tr || It && ie(It.resolve()) != Ar || Ot && ie(new Ot()) != Fr || Rt && ie(new Rt()) != Ir) && (ie = function(e) {
  var t = Gn(e), r = t == gl ? e.constructor : void 0, n = r ? Se(r) : "";
  if (n)
    switch (n) {
      case ml:
        return Or;
      case yl:
        return Tr;
      case bl:
        return Ar;
      case vl:
        return Fr;
      case Sl:
        return Ir;
    }
  return t;
});
var Re = ie;
function El(e) {
  return e != null && typeof e == "object";
}
var K = El, _l = se, $l = K, xl = "[object Arguments]";
function Cl(e) {
  return $l(e) && _l(e) == xl;
}
var wl = Cl, Rr = wl, Tl = K, Hn = Object.prototype, Al = Hn.hasOwnProperty, Fl = Hn.propertyIsEnumerable, Il = Rr(function() {
  return arguments;
}()) ? Rr : function(e) {
  return Tl(e) && Al.call(e, "callee") && !Fl.call(e, "callee");
}, it = Il, Ol = Array.isArray, L = Ol;
const Yn = /* @__PURE__ */ A(L);
var Rl = 9007199254740991;
function Pl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Rl;
}
var Gt = Pl, kl = qn, Dl = Gt;
function Ll(e) {
  return e != null && Dl(e.length) && !kl(e);
}
var ot = Ll, He = { exports: {} };
function Bl() {
  return !1;
}
var Nl = Bl;
He.exports;
(function(e, t) {
  var r = W, n = Nl, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, l = i ? r.Buffer : void 0, u = l ? l.isBuffer : void 0, c = u || n;
  e.exports = c;
})(He, He.exports);
var lt = He.exports, Ul = se, Ml = Gt, zl = K, jl = "[object Arguments]", Ql = "[object Array]", ql = "[object Boolean]", Vl = "[object Date]", Gl = "[object Error]", Hl = "[object Function]", Yl = "[object Map]", Wl = "[object Number]", Kl = "[object Object]", Xl = "[object RegExp]", Zl = "[object Set]", Jl = "[object String]", eu = "[object WeakMap]", tu = "[object ArrayBuffer]", ru = "[object DataView]", nu = "[object Float32Array]", au = "[object Float64Array]", su = "[object Int8Array]", iu = "[object Int16Array]", ou = "[object Int32Array]", lu = "[object Uint8Array]", uu = "[object Uint8ClampedArray]", cu = "[object Uint16Array]", du = "[object Uint32Array]", $ = {};
$[nu] = $[au] = $[su] = $[iu] = $[ou] = $[lu] = $[uu] = $[cu] = $[du] = !0;
$[jl] = $[Ql] = $[tu] = $[ql] = $[ru] = $[Vl] = $[Gl] = $[Hl] = $[Yl] = $[Wl] = $[Kl] = $[Xl] = $[Zl] = $[Jl] = $[eu] = !1;
function pu(e) {
  return zl(e) && Ml(e.length) && !!$[Ul(e)];
}
var hu = pu;
function fu(e) {
  return function(t) {
    return e(t);
  };
}
var Ht = fu, Ye = { exports: {} };
Ye.exports;
(function(e, t) {
  var r = jn, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, i = s && r.process, l = function() {
    try {
      var u = a && a.require && a.require("util").types;
      return u || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(Ye, Ye.exports);
var Yt = Ye.exports, gu = hu, mu = Ht, Pr = Yt, kr = Pr && Pr.isTypedArray, yu = kr ? mu(kr) : gu, Wt = yu, bu = zn, vu = Re, Su = it, Eu = L, _u = ot, $u = lt, xu = st, Cu = Wt, wu = "[object Map]", Tu = "[object Set]", Au = Object.prototype, Fu = Au.hasOwnProperty;
function Iu(e) {
  if (e == null)
    return !0;
  if (_u(e) && (Eu(e) || typeof e == "string" || typeof e.splice == "function" || $u(e) || Cu(e) || Su(e)))
    return !e.length;
  var t = vu(e);
  if (t == wu || t == Tu)
    return !e.size;
  if (xu(e))
    return !bu(e).length;
  for (var r in e)
    if (Fu.call(e, r))
      return !1;
  return !0;
}
var Ou = Iu;
const X = /* @__PURE__ */ A(Ou);
var Ru = se, Pu = K, ku = "[object Symbol]";
function Du(e) {
  return typeof e == "symbol" || Pu(e) && Ru(e) == ku;
}
var Kt = Du, Lu = L, Bu = Kt, Nu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Uu = /^\w*$/;
function Mu(e, t) {
  if (Lu(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Bu(e) ? !0 : Uu.test(e) || !Nu.test(e) || t != null && e in Object(t);
}
var Xt = Mu, zu = ue, ju = zu(Object, "create"), ut = ju, Dr = ut;
function Qu() {
  this.__data__ = Dr ? Dr(null) : {}, this.size = 0;
}
var qu = Qu;
function Vu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Gu = Vu, Hu = ut, Yu = "__lodash_hash_undefined__", Wu = Object.prototype, Ku = Wu.hasOwnProperty;
function Xu(e) {
  var t = this.__data__;
  if (Hu) {
    var r = t[e];
    return r === Yu ? void 0 : r;
  }
  return Ku.call(t, e) ? t[e] : void 0;
}
var Zu = Xu, Ju = ut, ec = Object.prototype, tc = ec.hasOwnProperty;
function rc(e) {
  var t = this.__data__;
  return Ju ? t[e] !== void 0 : tc.call(t, e);
}
var nc = rc, ac = ut, sc = "__lodash_hash_undefined__";
function ic(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ac && t === void 0 ? sc : t, this;
}
var oc = ic, lc = qu, uc = Gu, cc = Zu, dc = nc, pc = oc;
function Ee(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ee.prototype.clear = lc;
Ee.prototype.delete = uc;
Ee.prototype.get = cc;
Ee.prototype.has = dc;
Ee.prototype.set = pc;
var hc = Ee;
function fc() {
  this.__data__ = [], this.size = 0;
}
var gc = fc;
function mc(e, t) {
  return e === t || e !== e && t !== t;
}
var ct = mc, yc = ct;
function bc(e, t) {
  for (var r = e.length; r--; )
    if (yc(e[r][0], t))
      return r;
  return -1;
}
var dt = bc, vc = dt, Sc = Array.prototype, Ec = Sc.splice;
function _c(e) {
  var t = this.__data__, r = vc(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ec.call(t, r, 1), --this.size, !0;
}
var $c = _c, xc = dt;
function Cc(e) {
  var t = this.__data__, r = xc(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var wc = Cc, Tc = dt;
function Ac(e) {
  return Tc(this.__data__, e) > -1;
}
var Fc = Ac, Ic = dt;
function Oc(e, t) {
  var r = this.__data__, n = Ic(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Rc = Oc, Pc = gc, kc = $c, Dc = wc, Lc = Fc, Bc = Rc;
function _e(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
_e.prototype.clear = Pc;
_e.prototype.delete = kc;
_e.prototype.get = Dc;
_e.prototype.has = Lc;
_e.prototype.set = Bc;
var pt = _e, Lr = hc, Nc = pt, Uc = Vt;
function Mc() {
  this.size = 0, this.__data__ = {
    hash: new Lr(),
    map: new (Uc || Nc)(),
    string: new Lr()
  };
}
var zc = Mc;
function jc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Qc = jc, qc = Qc;
function Vc(e, t) {
  var r = e.__data__;
  return qc(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ht = Vc, Gc = ht;
function Hc(e) {
  var t = Gc(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Yc = Hc, Wc = ht;
function Kc(e) {
  return Wc(this, e).get(e);
}
var Xc = Kc, Zc = ht;
function Jc(e) {
  return Zc(this, e).has(e);
}
var ed = Jc, td = ht;
function rd(e, t) {
  var r = td(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var nd = rd, ad = zc, sd = Yc, id = Xc, od = ed, ld = nd;
function $e(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
$e.prototype.clear = ad;
$e.prototype.delete = sd;
$e.prototype.get = id;
$e.prototype.has = od;
$e.prototype.set = ld;
var Zt = $e, Wn = Zt, ud = "Expected a function";
function Jt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ud);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(a))
      return s.get(a);
    var i = e.apply(this, n);
    return r.cache = s.set(a, i) || s, i;
  };
  return r.cache = new (Jt.Cache || Wn)(), r;
}
Jt.Cache = Wn;
var cd = Jt, dd = cd, pd = 500;
function hd(e) {
  var t = dd(e, function(n) {
    return r.size === pd && r.clear(), n;
  }), r = t.cache;
  return t;
}
var fd = hd, gd = fd, md = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, yd = /\\(\\)?/g, bd = gd(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(md, function(r, n, a, s) {
    t.push(a ? s.replace(yd, "$1") : n || r);
  }), t;
}), vd = bd;
function Sd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Ed = Sd, Br = ve, _d = Ed, $d = L, xd = Kt, Cd = 1 / 0, Nr = Br ? Br.prototype : void 0, Ur = Nr ? Nr.toString : void 0;
function Kn(e) {
  if (typeof e == "string")
    return e;
  if ($d(e))
    return _d(e, Kn) + "";
  if (xd(e))
    return Ur ? Ur.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Cd ? "-0" : t;
}
var wd = Kn, Td = wd;
function Ad(e) {
  return e == null ? "" : Td(e);
}
var Pe = Ad, Fd = L, Id = Xt, Od = vd, Rd = Pe;
function Pd(e, t) {
  return Fd(e) ? e : Id(e, t) ? [e] : Od(Rd(e));
}
var ft = Pd, kd = Kt, Dd = 1 / 0;
function Ld(e) {
  if (typeof e == "string" || kd(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Dd ? "-0" : t;
}
var ke = Ld, Bd = ft, Nd = ke;
function Ud(e, t) {
  t = Bd(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Nd(t[r++])];
  return r && r == n ? e : void 0;
}
var er = Ud, Md = er;
function zd(e, t, r) {
  var n = e == null ? void 0 : Md(e, t);
  return n === void 0 ? r : n;
}
var Xn = zd;
const Ae = /* @__PURE__ */ A(Xn);
function jd(e, t) {
  return e != null && t in Object(e);
}
var Qd = jd, qd = 9007199254740991, Vd = /^(?:0|[1-9]\d*)$/;
function Gd(e, t) {
  var r = typeof e;
  return t = t ?? qd, !!t && (r == "number" || r != "symbol" && Vd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var gt = Gd, Hd = ft, Yd = it, Wd = L, Kd = gt, Xd = Gt, Zd = ke;
function Jd(e, t, r) {
  t = Hd(t, e);
  for (var n = -1, a = t.length, s = !1; ++n < a; ) {
    var i = Zd(t[n]);
    if (!(s = e != null && r(e, i)))
      break;
    e = e[i];
  }
  return s || ++n != a ? s : (a = e == null ? 0 : e.length, !!a && Xd(a) && Kd(i, a) && (Wd(e) || Yd(e)));
}
var Zn = Jd, ep = Qd, tp = Zn;
function rp(e, t) {
  return e != null && tp(e, t, ep);
}
var tr = rp;
const np = /* @__PURE__ */ A(tr);
var ap = ue, sp = function() {
  try {
    var e = ap(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Jn = sp, Mr = Jn;
function ip(e, t, r) {
  t == "__proto__" && Mr ? Mr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var mt = ip, op = mt, lp = ct, up = Object.prototype, cp = up.hasOwnProperty;
function dp(e, t, r) {
  var n = e[t];
  (!(cp.call(e, t) && lp(n, r)) || r === void 0 && !(t in e)) && op(e, t, r);
}
var rr = dp, pp = rr, hp = mt;
function fp(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var l = t[s], u = n ? n(r[l], e[l], l, r, e) : void 0;
    u === void 0 && (u = e[l]), a ? hp(r, l, u) : pp(r, l, u);
  }
  return r;
}
var De = fp;
function gp(e) {
  return e;
}
var nr = gp;
function mp(e, t, r) {
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
var yp = mp, bp = yp, zr = Math.max;
function vp(e, t, r) {
  return t = zr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, s = zr(n.length - t, 0), i = Array(s); ++a < s; )
      i[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(i), bp(e, this, l);
  };
}
var ea = vp;
function Sp(e) {
  return function() {
    return e;
  };
}
var Ep = Sp, _p = Ep, jr = Jn, $p = nr, xp = jr ? function(e, t) {
  return jr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: _p(t),
    writable: !0
  });
} : $p, Cp = xp, wp = 800, Tp = 16, Ap = Date.now;
function Fp(e) {
  var t = 0, r = 0;
  return function() {
    var n = Ap(), a = Tp - (n - r);
    if (r = n, a > 0) {
      if (++t >= wp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Ip = Fp, Op = Cp, Rp = Ip, Pp = Rp(Op), ta = Pp, kp = nr, Dp = ea, Lp = ta;
function Bp(e, t) {
  return Lp(Dp(e, t, kp), e + "");
}
var Np = Bp, Up = ct, Mp = ot, zp = gt, jp = re;
function Qp(e, t, r) {
  if (!jp(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Mp(r) && zp(t, r.length) : n == "string" && t in r) ? Up(r[t], e) : !1;
}
var qp = Qp, Vp = Np, Gp = qp;
function Hp(e) {
  return Vp(function(t, r) {
    var n = -1, a = r.length, s = a > 1 ? r[a - 1] : void 0, i = a > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, i && Gp(r[0], r[1], i) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++n < a; ) {
      var l = r[n];
      l && e(t, l, n, s);
    }
    return t;
  });
}
var Yp = Hp;
function Wp(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Kp = Wp, Xp = Kp, Zp = it, Jp = L, eh = lt, th = gt, rh = Wt, nh = Object.prototype, ah = nh.hasOwnProperty;
function sh(e, t) {
  var r = Jp(e), n = !r && Zp(e), a = !r && !n && eh(e), s = !r && !n && !a && rh(e), i = r || n || a || s, l = i ? Xp(e.length, String) : [], u = l.length;
  for (var c in e)
    (t || ah.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    th(c, u))) && l.push(c);
  return l;
}
var ra = sh;
function ih(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var oh = ih, lh = re, uh = st, ch = oh, dh = Object.prototype, ph = dh.hasOwnProperty;
function hh(e) {
  if (!lh(e))
    return ch(e);
  var t = uh(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !ph.call(e, n)) || r.push(n);
  return r;
}
var fh = hh, gh = ra, mh = fh, yh = ot;
function bh(e) {
  return yh(e) ? gh(e, !0) : mh(e);
}
var yt = bh, vh = De, Sh = Yp, Eh = yt, _h = Sh(function(e, t) {
  vh(t, Eh(t), e);
}), $h = _h, xh = $h;
const We = /* @__PURE__ */ A(xh);
function Ch(e) {
  return e && e.length ? e[0] : void 0;
}
var wh = Ch;
const Th = /* @__PURE__ */ A(wh);
var Ah = rr, Fh = ft, Ih = gt, Qr = re, Oh = ke;
function Rh(e, t, r, n) {
  if (!Qr(e))
    return e;
  t = Fh(t, e);
  for (var a = -1, s = t.length, i = s - 1, l = e; l != null && ++a < s; ) {
    var u = Oh(t[a]), c = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != i) {
      var d = l[u];
      c = n ? n(d, u, l) : void 0, c === void 0 && (c = Qr(d) ? d : Ih(t[a + 1]) ? [] : {});
    }
    Ah(l, u, c), l = l[u];
  }
  return e;
}
var Ph = Rh, kh = er, Dh = Ph, Lh = ft;
function Bh(e, t, r) {
  for (var n = -1, a = t.length, s = {}; ++n < a; ) {
    var i = t[n], l = kh(e, i);
    r(l, i) && Dh(s, Lh(i, e), l);
  }
  return s;
}
var Nh = Bh, Uh = Nh, Mh = tr;
function zh(e, t) {
  return Uh(e, t, function(r, n) {
    return Mh(e, n);
  });
}
var jh = zh;
function Qh(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var ar = Qh, qr = ve, qh = it, Vh = L, Vr = qr ? qr.isConcatSpreadable : void 0;
function Gh(e) {
  return Vh(e) || qh(e) || !!(Vr && e && e[Vr]);
}
var Hh = Gh, Yh = ar, Wh = Hh;
function na(e, t, r, n, a) {
  var s = -1, i = e.length;
  for (r || (r = Wh), a || (a = []); ++s < i; ) {
    var l = e[s];
    t > 0 && r(l) ? t > 1 ? na(l, t - 1, r, n, a) : Yh(a, l) : n || (a[a.length] = l);
  }
  return a;
}
var Kh = na, Xh = Kh;
function Zh(e) {
  var t = e == null ? 0 : e.length;
  return t ? Xh(e, 1) : [];
}
var Jh = Zh, ef = Jh, tf = ea, rf = ta;
function nf(e) {
  return rf(tf(e, void 0, ef), e + "");
}
var af = nf, sf = jh, of = af, lf = of(function(e, t) {
  return e == null ? {} : sf(e, t);
}), uf = lf;
const cf = /* @__PURE__ */ A(uf);
var df = pt;
function pf() {
  this.__data__ = new df(), this.size = 0;
}
var hf = pf;
function ff(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var gf = ff;
function mf(e) {
  return this.__data__.get(e);
}
var yf = mf;
function bf(e) {
  return this.__data__.has(e);
}
var vf = bf, Sf = pt, Ef = Vt, _f = Zt, $f = 200;
function xf(e, t) {
  var r = this.__data__;
  if (r instanceof Sf) {
    var n = r.__data__;
    if (!Ef || n.length < $f - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new _f(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Cf = xf, wf = pt, Tf = hf, Af = gf, Ff = yf, If = vf, Of = Cf;
function xe(e) {
  var t = this.__data__ = new wf(e);
  this.size = t.size;
}
xe.prototype.clear = Tf;
xe.prototype.delete = Af;
xe.prototype.get = Ff;
xe.prototype.has = If;
xe.prototype.set = Of;
var sr = xe;
function Rf(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Pf = Rf, kf = ra, Df = zn, Lf = ot;
function Bf(e) {
  return Lf(e) ? kf(e) : Df(e);
}
var Le = Bf, Nf = De, Uf = Le;
function Mf(e, t) {
  return e && Nf(t, Uf(t), e);
}
var zf = Mf, jf = De, Qf = yt;
function qf(e, t) {
  return e && jf(t, Qf(t), e);
}
var Vf = qf, Ke = { exports: {} };
Ke.exports;
(function(e, t) {
  var r = W, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, i = s ? r.Buffer : void 0, l = i ? i.allocUnsafe : void 0;
  function u(c, d) {
    if (d)
      return c.slice();
    var p = c.length, h = l ? l(p) : new c.constructor(p);
    return c.copy(h), h;
  }
  e.exports = u;
})(Ke, Ke.exports);
var Gf = Ke.exports;
function Hf(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Yf = Hf;
function Wf(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[a++] = i);
  }
  return s;
}
var Kf = Wf;
function Xf() {
  return [];
}
var aa = Xf, Zf = Kf, Jf = aa, eg = Object.prototype, tg = eg.propertyIsEnumerable, Gr = Object.getOwnPropertySymbols, rg = Gr ? function(e) {
  return e == null ? [] : (e = Object(e), Zf(Gr(e), function(t) {
    return tg.call(e, t);
  }));
} : Jf, ir = rg, ng = De, ag = ir;
function sg(e, t) {
  return ng(e, ag(e), t);
}
var ig = sg, og = Mn, lg = og(Object.getPrototypeOf, Object), sa = lg, ug = ar, cg = sa, dg = ir, pg = aa, hg = Object.getOwnPropertySymbols, fg = hg ? function(e) {
  for (var t = []; e; )
    ug(t, dg(e)), e = cg(e);
  return t;
} : pg, ia = fg, gg = De, mg = ia;
function yg(e, t) {
  return gg(e, mg(e), t);
}
var bg = yg, vg = ar, Sg = L;
function Eg(e, t, r) {
  var n = t(e);
  return Sg(e) ? n : vg(n, r(e));
}
var oa = Eg, _g = oa, $g = ir, xg = Le;
function Cg(e) {
  return _g(e, xg, $g);
}
var la = Cg, wg = oa, Tg = ia, Ag = yt;
function Fg(e) {
  return wg(e, Ag, Tg);
}
var Ig = Fg, Og = Object.prototype, Rg = Og.hasOwnProperty;
function Pg(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Rg.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var kg = Pg, Dg = W, Lg = Dg.Uint8Array, ua = Lg, Hr = ua;
function Bg(e) {
  var t = new e.constructor(e.byteLength);
  return new Hr(t).set(new Hr(e)), t;
}
var or = Bg, Ng = or;
function Ug(e, t) {
  var r = t ? Ng(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Mg = Ug, zg = /\w*$/;
function jg(e) {
  var t = new e.constructor(e.source, zg.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Qg = jg, Yr = ve, Wr = Yr ? Yr.prototype : void 0, Kr = Wr ? Wr.valueOf : void 0;
function qg(e) {
  return Kr ? Object(Kr.call(e)) : {};
}
var Vg = qg, Gg = or;
function Hg(e, t) {
  var r = t ? Gg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Yg = Hg, Wg = or, Kg = Mg, Xg = Qg, Zg = Vg, Jg = Yg, em = "[object Boolean]", tm = "[object Date]", rm = "[object Map]", nm = "[object Number]", am = "[object RegExp]", sm = "[object Set]", im = "[object String]", om = "[object Symbol]", lm = "[object ArrayBuffer]", um = "[object DataView]", cm = "[object Float32Array]", dm = "[object Float64Array]", pm = "[object Int8Array]", hm = "[object Int16Array]", fm = "[object Int32Array]", gm = "[object Uint8Array]", mm = "[object Uint8ClampedArray]", ym = "[object Uint16Array]", bm = "[object Uint32Array]";
function vm(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case lm:
      return Wg(e);
    case em:
    case tm:
      return new n(+e);
    case um:
      return Kg(e, r);
    case cm:
    case dm:
    case pm:
    case hm:
    case fm:
    case gm:
    case mm:
    case ym:
    case bm:
      return Jg(e, r);
    case rm:
      return new n();
    case nm:
    case im:
      return new n(e);
    case am:
      return Xg(e);
    case sm:
      return new n();
    case om:
      return Zg(e);
  }
}
var Sm = vm, Em = re, Xr = Object.create, _m = function() {
  function e() {
  }
  return function(t) {
    if (!Em(t))
      return {};
    if (Xr)
      return Xr(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), $m = _m, xm = $m, Cm = sa, wm = st;
function Tm(e) {
  return typeof e.constructor == "function" && !wm(e) ? xm(Cm(e)) : {};
}
var Am = Tm, Fm = Re, Im = K, Om = "[object Map]";
function Rm(e) {
  return Im(e) && Fm(e) == Om;
}
var Pm = Rm, km = Pm, Dm = Ht, Zr = Yt, Jr = Zr && Zr.isMap, Lm = Jr ? Dm(Jr) : km, Bm = Lm, Nm = Re, Um = K, Mm = "[object Set]";
function zm(e) {
  return Um(e) && Nm(e) == Mm;
}
var jm = zm, Qm = jm, qm = Ht, en = Yt, tn = en && en.isSet, Vm = tn ? qm(tn) : Qm, Gm = Vm, Hm = sr, Ym = Pf, Wm = rr, Km = zf, Xm = Vf, Zm = Gf, Jm = Yf, ey = ig, ty = bg, ry = la, ny = Ig, ay = Re, sy = kg, iy = Sm, oy = Am, ly = L, uy = lt, cy = Bm, dy = re, py = Gm, hy = Le, fy = yt, gy = 1, my = 2, yy = 4, ca = "[object Arguments]", by = "[object Array]", vy = "[object Boolean]", Sy = "[object Date]", Ey = "[object Error]", da = "[object Function]", _y = "[object GeneratorFunction]", $y = "[object Map]", xy = "[object Number]", pa = "[object Object]", Cy = "[object RegExp]", wy = "[object Set]", Ty = "[object String]", Ay = "[object Symbol]", Fy = "[object WeakMap]", Iy = "[object ArrayBuffer]", Oy = "[object DataView]", Ry = "[object Float32Array]", Py = "[object Float64Array]", ky = "[object Int8Array]", Dy = "[object Int16Array]", Ly = "[object Int32Array]", By = "[object Uint8Array]", Ny = "[object Uint8ClampedArray]", Uy = "[object Uint16Array]", My = "[object Uint32Array]", E = {};
E[ca] = E[by] = E[Iy] = E[Oy] = E[vy] = E[Sy] = E[Ry] = E[Py] = E[ky] = E[Dy] = E[Ly] = E[$y] = E[xy] = E[pa] = E[Cy] = E[wy] = E[Ty] = E[Ay] = E[By] = E[Ny] = E[Uy] = E[My] = !0;
E[Ey] = E[da] = E[Fy] = !1;
function qe(e, t, r, n, a, s) {
  var i, l = t & gy, u = t & my, c = t & yy;
  if (r && (i = a ? r(e, n, a, s) : r(e)), i !== void 0)
    return i;
  if (!dy(e))
    return e;
  var d = ly(e);
  if (d) {
    if (i = sy(e), !l)
      return Jm(e, i);
  } else {
    var p = ay(e), h = p == da || p == _y;
    if (uy(e))
      return Zm(e, l);
    if (p == pa || p == ca || h && !a) {
      if (i = u || h ? {} : oy(e), !l)
        return u ? ty(e, Xm(i, e)) : ey(e, Km(i, e));
    } else {
      if (!E[p])
        return a ? e : {};
      i = iy(e, p, l);
    }
  }
  s || (s = new Hm());
  var g = s.get(e);
  if (g)
    return g;
  s.set(e, i), py(e) ? e.forEach(function(v) {
    i.add(qe(v, t, r, v, e, s));
  }) : cy(e) && e.forEach(function(v, f) {
    i.set(f, qe(v, t, r, f, e, s));
  });
  var y = c ? u ? ny : ry : u ? fy : hy, m = d ? void 0 : y(e);
  return Ym(m || e, function(v, f) {
    m && (f = v, v = e[f]), Wm(i, f, qe(v, t, r, f, e, s));
  }), i;
}
var zy = qe, jy = zy, Qy = 1, qy = 4;
function Vy(e) {
  return jy(e, Qy | qy);
}
var Gy = Vy;
const ye = /* @__PURE__ */ A(Gy);
var Hy = se, Yy = K, Wy = "[object Boolean]";
function Ky(e) {
  return e === !0 || e === !1 || Yy(e) && Hy(e) == Wy;
}
var Xy = Ky;
const Zy = /* @__PURE__ */ A(Xy);
var Jy = se, eb = L, tb = K, rb = "[object String]";
function nb(e) {
  return typeof e == "string" || !eb(e) && tb(e) && Jy(e) == rb;
}
var ab = nb;
const sb = /* @__PURE__ */ A(ab);
var ib = se, ob = K, lb = "[object Number]";
function ub(e) {
  return typeof e == "number" || ob(e) && ib(e) == lb;
}
var cb = ub;
const db = /* @__PURE__ */ A(cb);
function lr() {
}
lr.prototype = new Error();
class rn {
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
    r !== null && (c.q = r), n !== null && (c.sort = n, a !== null && (c.sort = a === "desc" ? `-${n}` : n)), s > 0 && (c.page = s), i > 0 && (c.size = i), X(u) || We(c, this._addFilters(u));
    const d = this._addFilters(l);
    return We(c, d), be.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class pb {
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
function Ue(e, t) {
  return e.indexOf(t) === 0 && (e.length === t.length || e.indexOf(t + "&") === 0);
}
function xt(e) {
  return be.stringify({
    q: e
  });
}
function hb(e) {
  return be.parse(e).q;
}
function ha(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = ha(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function nn(e, t) {
  const r = xt(e), n = t.map((i) => xt(i));
  let a = !1;
  const s = n.filter((i) => {
    const l = Ue(i, r), u = Ue(r, i);
    return l && !a && (a = !0), !l && !u;
  });
  if (!a)
    s.push(r);
  else if (e.length === 3) {
    const l = ha(e), u = xt(l), c = s.some((d) => {
      const p = Ue(d, u), h = Ue(u, d);
      return p || h;
    });
    (X(s) || !c) && s.push(u);
  }
  return s.map((i) => hb(i));
}
const fa = (e, t) => {
  if (X(e))
    return;
  if (!Yn(Th(e)))
    return nn(e, t);
  let r = t;
  for (const n of e)
    r = nn(n, r);
  return r;
}, ga = (e, t, r) => {
  let n = cf(t, r);
  return X(n.filters) || (n.filters = fa(n.filters, e.filters)), n;
}, Xe = {
  queryString: "",
  suggestions: [],
  sortBy: null,
  sortOrder: null,
  page: -1,
  size: -1,
  filters: [],
  hiddenParams: [],
  layout: null
}, ma = Object.keys(Xe), fb = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, gb = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class mb {
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
    r !== null && (c.q = r), n !== null && (c.sort = n, a !== null && (c.sort = a === "desc" ? `-${n}` : n)), s > 0 && (c.page = s), i > 0 && (c.size = i), X(u) || We(c, this._addFilters(u));
    const d = this._addFilters(l);
    return We(c, d), be.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class ya {
  constructor(t) {
    this.axiosConfig = Ae(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = Qe.CancelToken;
  }
  validateAxiosConfig() {
    if (!np(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = Ae(t, "interceptors.request", void 0), this.responseInterceptor = Ae(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: mb,
      InvenioRequestSerializer: rn
    };
    return typeof t == "string" ? r[t] : t || rn;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), a = Ae(t, "invenio.responseSerializer", pb);
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
      const n = ga(t, r.extras, ma);
      return X(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw Qe.isCancel(r) ? new lr() : r;
    }
  }
}
class yb {
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
          return db(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const a = Yn(n) ? n : [n], s = ":", i = t.urlFilterSeparator, l = `[^\\${s}\\${i}]*`, u = `${l}\\${s}${l}`, c = `${u}(\\${i}${u})*`, d = new RegExp(`^${c}$`);
          return a.every((p) => String(p).match(d));
        }
        default:
          return !1;
      }
    };
  }
}
const bb = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, an = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class vb {
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
    const r = be.parse(t, {
      ignoreQueryPrefix: !0
    }), n = {};
    return Object.entries(r).forEach((a) => {
      const s = a[0], i = a[1];
      n[s] = this._convertValue(s, i);
    }), n;
  }
}
class Sb {
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
      return be.stringify(n, {
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
      const a = ye(n);
      return Object.keys(r).forEach((s) => {
        a[s] = r[s];
      }), a;
    }, this.urlParamsMapping = mo(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !Zy(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !sb(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new yb(), this.urlParser = t.urlParser || new vb(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), a = this._mergeParamsIntoState(n, t), s = this._mapQueryStateToUrlParams(a);
    return an(s), a;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      bb(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    an(r);
  }
}
const Eb = "SET_QUERY_COMPONENT_INITIAL_STATE", ba = "SET_QUERY_STRING", ur = "SET_QUERY_SORTING", cr = "SET_QUERY_SORT_BY", dr = "SET_QUERY_SORT_ORDER", Be = "SET_QUERY_STATE", va = "SET_QUERY_PAGINATION_PAGE", Sa = "SET_QUERY_PAGINATION_SIZE", Ea = "SET_QUERY_FILTERS", _a = "SET_QUERY_SUGGESTIONS", $a = "SET_SUGGESTION_STRING", xa = "CLEAR_QUERY_SUGGESTIONS", Ca = "RESULTS_LOADING", wa = "RESULTS_FETCH_SUCCESS", Ta = "RESULTS_FETCH_ERROR", Pt = "RESULTS_UPDATE_LAYOUT", Aa = "RESET_QUERY", _b = (e) => (t) => {
  e && t(H({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, Fa = (e) => (t) => {
  t({
    type: Be,
    payload: e
  }), t(H());
}, Ia = (e) => (t) => {
  t({
    type: ba,
    payload: e
  }), t(H());
}, $b = (e, t) => (r) => {
  r({
    type: ur,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(H());
}, xb = (e) => (t) => {
  t({
    type: cr,
    payload: e
  }), t(H());
}, Cb = (e) => (t) => {
  t({
    type: dr,
    payload: e
  }), t(H());
}, wb = (e) => (t) => {
  t({
    type: va,
    payload: e
  }), t(H());
}, Tb = (e) => (t) => {
  t({
    type: Sa,
    payload: e
  }), t(H());
}, pr = (e) => (t) => {
  t({
    type: Ea,
    payload: e
  }), t(H());
}, Ab = (e) => async (t, r, n) => {
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
}, Fb = () => (e, t, r) => {
  e({
    type: Aa,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(H());
}, Ib = (e, t, r, n) => {
  const a = t.urlHandlerApi;
  a && (r ? a.replace(e) : n && a.set(e));
}, Ob = (e, t, r, n) => {
  const a = r().query;
  t({
    type: Be,
    payload: {
      ...a,
      ...e.newQueryState
    }
  });
  const s = ye(r().query), i = n.urlHandlerApi;
  return i && i.replace(s), delete e.newStateQuery, e;
}, Rb = (e, t, r, n) => {
  function a(l, u, c, d) {
    l.queryString === "" ? (l.sortBy = c.defaultSortingOnEmptyQueryString.sortBy, l.sortOrder = c.defaultSortingOnEmptyQueryString.sortOrder) : (l.sortBy = u.initialSortBy, l.sortOrder = u.initialSortOrder), d({
      type: Be,
      payload: l
    });
  }
  function s(l, u, c, d) {
    u.hasUserChangedSorting || a(l, u, c, d);
  }
  !X(r.defaultSortingOnEmptyQueryString) && s(e, t, r, n);
}, H = function() {
  let {
    shouldUpdateUrlQueryString: e = !0,
    shouldReplaceUrlQueryString: t = !1
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return async (r, n, a) => {
    const s = n().app;
    let i = ye(n().query);
    Rb(i, s, a, r), i = ye(n().query), Ib(i, a, t, e), r({
      type: Ca
    });
    try {
      let u = await a.searchApi.search(i);
      "newQueryState" in u && (u = Ob(ye(u), r, n, a)), r({
        type: wa,
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
          type: Ta,
          payload: {
            error: l
          }
        });
    }
  };
}, Pb = (e) => (t) => {
  t({
    type: $a,
    payload: e
  }), t(kb());
}, kb = () => async (e, t, r) => {
  const n = ye(t().query), a = r.suggestionApi;
  try {
    const s = await a.search(n);
    e({
      type: _a,
      payload: {
        suggestions: s.suggestions
      }
    });
  } catch (s) {
    console.error("Could not load suggestions due to: " + s);
  }
}, Db = () => (e) => {
  e({
    type: xa,
    payload: {
      suggestions: []
    }
  });
}, Lb = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: Be,
      payload: n
    }), e(H({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, _ = /* @__PURE__ */ o.createContext({}), Bb = function() {
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
}, Nb = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case ba:
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
    case va:
      return {
        ...e,
        page: t.payload
      };
    case Sa:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case Ea:
      return {
        ...e,
        page: 1,
        filters: fa(t.payload, e.filters)
      };
    case _a:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case xa:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case $a:
      return {
        ...e,
        suggestionString: t.payload
      };
    case Eb:
      return {
        ...e,
        ...t.payload
      };
    case Be:
      return {
        ...e,
        ...Xe,
        ...ga(Xe, t.payload, ma)
      };
    case Pt:
      return {
        ...e,
        layout: t.payload
      };
    case Aa:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, Ub = function() {
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
    case Ta:
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
var Mb = Fi({
  app: Bb,
  query: Nb,
  results: Ub
});
function sn(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: a,
    sortOrder: s
  } = t;
  return r !== a || n !== s;
}
function zb(e, t, r) {
  const n = sn(r, t), a = !X(e.defaultSortingOnEmptyQueryString);
  let s = !1;
  return a && (s = sn(r, e.defaultSortingOnEmptyQueryString)), n && s;
}
function jb(e) {
  const t = {
    ...Xe,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = zb(e, t, r), a = {
    ...gb,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, s = {
    ...fb,
    loading: e.searchOnInit
  };
  return {
    app: a,
    query: r,
    results: s
  };
}
function Qb(e) {
  const t = jb(e);
  return Ii(Mb, t, Oi(Ri.withExtraArgument(e)));
}
function on(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class hr extends I {
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
hr.contextType = _;
var qb = b.component("Bootstrap", hr);
const Vb = (e) => ({
  onAppInitialized: (t) => e(_b(t)),
  updateQueryState: (t) => e(Fa(t)),
  searchOnUrlQueryStringChanged: () => e(Lb())
}), Gb = T(null, Vb)(qb);
class fr extends I {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new Sb(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = Qb(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
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
      buildUID: (u, c) => on(u, c, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, l = on("ReactSearchKit.children", a, t);
    return /* @__PURE__ */ o.createElement(_.Provider, {
      value: i
    }, /* @__PURE__ */ o.createElement(_i, {
      store: this.store
    }, /* @__PURE__ */ o.createElement(Gb, {
      searchOnInit: s,
      eventListenerEnabled: n
    }, /* @__PURE__ */ o.createElement(b, {
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
var Hb = b.component("ReactSearchKit", fr);
class Oa extends I {
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
    return !!t.length && /* @__PURE__ */ o.createElement(Ra, {
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
  } = x(_);
  return /* @__PURE__ */ o.createElement(b, {
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
      /* @__PURE__ */ o.createElement(le, {
        image: !0,
        key: l,
        onClick: () => n(c)
      }, u, /* @__PURE__ */ o.createElement(F, {
        name: "delete"
      }))
    );
  })));
};
Ra.defaultProps = {
  overridableId: ""
};
var Yb = b.component("ActiveFilters", Oa);
const Wb = (e) => ({
  updateQueryFilters: (t) => e(pr(t))
});
T((e) => ({
  filters: e.query.filters
}), Wb)(Yb);
function Kb(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var Xb = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
Kb(Xb);
class Pa extends I {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? Pi.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ o.createElement(Jb, {
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
const Zb = (e) => /* @__PURE__ */ o.createElement(Pa, Object.assign({
  key: e.queryString
}, e)), Jb = (e) => {
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
  } = x(_), c = (p, h) => {
    i();
  }, d = (p, h) => {
    p.key === "Enter" && i();
  };
  return /* @__PURE__ */ o.createElement(b, Object.assign({
    id: u("AutocompleteSearchBar.element", t)
  }, l), /* @__PURE__ */ o.createElement("div", {
    className: "AutoCompleteText"
  }, /* @__PURE__ */ o.createElement(kn, {
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
  }), /* @__PURE__ */ o.createElement(ev, {
    querySuggestions: a,
    overridableId: t
  })));
}, ev = (e) => {
  let {
    overridableId: t,
    ...r
  } = e;
  const {
    querySuggestions: n
  } = r, {
    buildUID: a
  } = x(_), s = async (i) => {
    await (void 0).setState({
      currentValue: i
    }), (void 0).clearSuggestions(), (void 0).executeSearch();
  };
  return n.length === 0 ? null : /* @__PURE__ */ o.createElement(b, Object.assign({
    id: a("AutocompleteSearchBar.suggestions", t)
  }, r), /* @__PURE__ */ o.createElement("ul", null, n.map((i) => /* @__PURE__ */ o.createElement(j, {
    as: "li",
    onClick: () => s(i),
    key: i
  }, i))));
};
var tv = b.component("AutocompleteSearchBar", Zb);
const rv = (e) => ({
  updateQueryString: (t) => e(Ia(t)),
  updateSuggestions: (t) => e(Pb(t)),
  clearSuggestions: () => e(Db())
}), nv = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
T(nv, rv)(tv);
class bt extends I {
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
      return /* @__PURE__ */ o.createElement(Da, {
        key: s.key,
        bucket: s,
        keyField: i,
        isSelected: l,
        onFilterClicked: u,
        getChildAggCmps: c,
        overridableId: n
      });
    });
    return /* @__PURE__ */ o.createElement(ka, {
      valuesCmp: a,
      overridableId: n
    });
  }
}
bt.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const ka = (e) => {
  let {
    valuesCmp: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = x(_);
  return /* @__PURE__ */ o.createElement(b, {
    id: n("BucketAggregationContainer.element", r),
    valuesCmp: t
  }, /* @__PURE__ */ o.createElement(Ge, null, t));
};
ka.defaultProps = {
  overridableId: ""
};
const Da = (e) => {
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
  } = x(_), c = t.label ? t.label : `${i} (${t.doc_count.toLocaleString("en-US")})`, d = a(t);
  return /* @__PURE__ */ o.createElement(b, {
    id: l("BucketAggregationValues.element", s),
    bucket: t,
    label: c,
    onFilterClicked: n,
    isSelected: r,
    childAggCmps: d
  }, /* @__PURE__ */ o.createElement(Ge.Item, {
    key: t.key
  }, /* @__PURE__ */ o.createElement(Dn, {
    label: c,
    id: u(),
    value: t.key,
    onClick: () => n(t.key),
    checked: r
  }), d));
};
Da.defaultProps = {
  overridableId: ""
};
var av = b.component("BucketAggregationValues", bt);
class La extends I {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: a
      } = this.props;
      return /* @__PURE__ */ o.createElement(av, {
        buckets: r,
        selectedFilters: n,
        field: this.agg.field,
        aggName: this.agg.aggName,
        childAgg: this.agg.childAgg,
        onFilterClicked: this.onFilterClicked,
        overridableId: a
      });
    }, this._getSelectedFilters = (r) => r.filter((n) => n[0] === this.agg.aggName), this._getResultBuckets = (r) => {
      const n = Ae(r, this.agg.aggName, {});
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
    return /* @__PURE__ */ o.createElement(Ba, Object.assign({
      title: this.title,
      containerCmp: l,
      overridableId: n
    }, a));
  }
}
La.defaultProps = {
  overridableId: ""
};
const Ba = (e) => {
  let {
    overridableId: t,
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: s
  } = e;
  const {
    buildUID: i
  } = x(_);
  return a && /* @__PURE__ */ o.createElement(b, {
    id: i("BucketAggregation.element", t),
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: s
  }, /* @__PURE__ */ o.createElement(k, null, /* @__PURE__ */ o.createElement(k.Content, null, /* @__PURE__ */ o.createElement(k.Header, null, n)), /* @__PURE__ */ o.createElement(k.Content, null, a)));
};
Ba.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var sv = b.component("BucketAggregation", La);
const iv = (e) => ({
  updateQueryFilters: (t) => e(pr(t))
});
T((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), iv)(sv);
class Na extends I {
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
var Q = b.component("ShouldRender", Na);
class Ua extends I {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: a
    } = this.props;
    return /* @__PURE__ */ o.createElement(Q, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ o.createElement(Ma, {
      totalResults: r,
      overridableId: a
    })));
  }
}
Ua.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const Ma = (e) => {
  let {
    totalResults: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = x(_), a = n("Count.element", r);
  return /* @__PURE__ */ o.createElement(b, {
    id: a,
    totalResults: t
  }, /* @__PURE__ */ o.createElement(le, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
Ma.defaultProps = {
  overridableId: ""
};
var ov = b.component("Count", Ua);
const lv = T((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(ov);
class za extends I {
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
    return /* @__PURE__ */ o.createElement(Q, {
      condition: !t && X(n) && r === 0
    }, /* @__PURE__ */ o.createElement(ja, Object.assign({}, u, {
      queryString: a,
      resetQuery: this.resetQuery,
      extraContent: s,
      userSelectionFilters: l,
      overridableId: i
    })));
  }
}
za.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const ja = (e) => {
  let {
    overridableId: t,
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: s
  } = e;
  const {
    buildUID: i
  } = x(_);
  return /* @__PURE__ */ o.createElement(b, {
    id: i("EmptyResults.element", t),
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: s
  }, /* @__PURE__ */ o.createElement(de, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ o.createElement(ge, {
    icon: !0
  }, /* @__PURE__ */ o.createElement(F, {
    name: "search"
  }), "No results found!"), r && /* @__PURE__ */ o.createElement("em", null, 'Current search "', r, '"'), /* @__PURE__ */ o.createElement("br", null), /* @__PURE__ */ o.createElement(j, {
    primary: !0,
    onClick: () => n()
  }, "Clear query"), a));
};
ja.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var uv = b.component("EmptyResults", za);
const cv = (e) => ({
  resetQuery: () => e(Fb())
}), dv = T((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), cv)(uv);
function Qa(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ o.createElement(Q, {
    condition: !t && !X(r)
  }, /* @__PURE__ */ o.createElement(qa, {
    error: r,
    overridableId: n
  }));
}
Qa.defaultProps = {
  overridableId: ""
};
const qa = (e) => {
  let {
    error: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = x(_);
  return /* @__PURE__ */ o.createElement(b, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ o.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
qa.defaultProps = {
  overridableId: ""
};
var pv = b.component("Error", Qa);
T((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(pv);
function Va(e) {
  const t = (a) => /* @__PURE__ */ o.createElement(e, a);
  return T((a) => ({
    currentQueryState: a.query,
    currentResultsState: a.results
  }), (a) => ({
    updateQueryState: (s) => a(Fa(s))
  }))(t);
}
class Ga extends I {
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
    return /* @__PURE__ */ o.createElement(Q, {
      condition: t !== null && !r && n > 0
    }, /* @__PURE__ */ o.createElement(Ha, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: a
    }));
  }
}
Ga.defaultProps = {
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
  } = x(_);
  return /* @__PURE__ */ o.createElement(b, {
    id: a("LayoutSwitcher.element", t),
    currentLayout: r,
    onLayoutChange: n
  }, /* @__PURE__ */ o.createElement(Ie, {
    compact: !0,
    icon: !0
  }, /* @__PURE__ */ o.createElement(Ie.Item, {
    name: "list",
    active: r === "list",
    onClick: (s, i) => {
      let {
        name: l
      } = i;
      return n(l);
    }
  }, /* @__PURE__ */ o.createElement(F, {
    name: "list layout"
  })), /* @__PURE__ */ o.createElement(Ie.Item, {
    name: "grid",
    active: r === "grid",
    onClick: (s, i) => {
      let {
        name: l
      } = i;
      return n(l);
    }
  }, /* @__PURE__ */ o.createElement(F, {
    name: "grid layout"
  }))));
};
Ha.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var hv = b.component("LayoutSwitcher", Ga);
const fv = (e) => ({
  updateLayout: (t) => e(Ab(t))
});
T((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), fv)(hv);
const ln = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class Ya extends I {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...ln,
      ...t.options
    } : ln;
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
    return /* @__PURE__ */ o.createElement(Q, {
      condition: !t && n > -1 && a > -1 && i ? r > 0 : r > a
    }, /* @__PURE__ */ o.createElement(Wa, {
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
Ya.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const Wa = (e) => {
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
  const c = i.boundaryRangeCount, d = i.siblingRangeCount, p = i.showEllipsis, h = i.showFirst, g = i.showLast, y = i.showPrev, m = i.showNext, v = i.size, f = Math.floor(l / n), S = Math.ceil(a / n), w = Math.min(S, f), {
    buildUID: O
  } = x(_);
  return r > S && s(S), /* @__PURE__ */ o.createElement(b, {
    id: O("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: a,
    options: i,
    onPageChange: s
  }, /* @__PURE__ */ o.createElement($i, Object.assign({
    activePage: r,
    totalPages: w,
    onPageChange: (q, C) => {
      let {
        activePage: B
      } = C;
      return s(B);
    },
    boundaryRange: c,
    siblingRange: d,
    ellipsisItem: p ? void 0 : null,
    firstItem: h ? void 0 : null,
    lastItem: g ? void 0 : null,
    prevItem: y ? void 0 : null,
    nextItem: m ? void 0 : null,
    size: v
  }, u)));
};
Wa.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var gv = b.component("Pagination", Ya);
const mv = (e) => ({
  updateQueryPage: (t) => e(wb(t))
}), yv = T((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), mv)(gv);
function Ka(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    resultsPerRow: a,
    overridableId: s,
    onResultsRendered: i
  } = e;
  return nt(() => {
    i && i();
  }, [i]), /* @__PURE__ */ o.createElement(Q, {
    condition: !t && r > 0
  }, /* @__PURE__ */ o.createElement(Xa, {
    results: n,
    resultsPerRow: a,
    overridableId: s
  }));
}
Ka.defaultProps = {
  resultsPerRow: 3,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const bv = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = x(_);
  return /* @__PURE__ */ o.createElement(b, {
    id: n("ResultsGrid.item", r),
    result: t
  }, /* @__PURE__ */ o.createElement(k, {
    fluid: !0,
    href: `#${t.id}`
  }, /* @__PURE__ */ o.createElement(xi, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ o.createElement(k.Content, null, /* @__PURE__ */ o.createElement(k.Header, null, t.title), /* @__PURE__ */ o.createElement(k.Description, null, t.description))));
}, Xa = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: a
  } = x(_), s = r.map((i, l) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ o.createElement(bv, {
      key: l,
      result: i,
      overridableId: t
    })
  ));
  return /* @__PURE__ */ o.createElement(b, {
    id: a("ResultsGrid.container", t),
    results: s,
    resultsPerRow: n
  }, /* @__PURE__ */ o.createElement(k.Group, {
    itemsPerRow: n
  }, s));
};
Xa.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var vv = b.component("ResultsGrid", Ka);
const Sv = T((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(vv);
function Za(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return nt(() => {
    s && s();
  }, [s]), /* @__PURE__ */ o.createElement(Q, {
    condition: !t && r > 0
  }, /* @__PURE__ */ o.createElement(Ja, {
    results: n,
    overridableId: a
  }));
}
Za.defaultProps = {
  overridableId: "",
  onResultsRendered: () => {
  }
};
const Ev = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = x(_);
  return /* @__PURE__ */ o.createElement(b, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ o.createElement(pe, {
    href: `#${t.id}`
  }, /* @__PURE__ */ o.createElement(pe.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ o.createElement(pe.Content, null, /* @__PURE__ */ o.createElement(pe.Header, null, t.title), /* @__PURE__ */ o.createElement(pe.Description, null, t.description))));
}, Ja = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = x(_), a = t.map((s, i) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ o.createElement(Ev, {
      result: s,
      key: i,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ o.createElement(b, {
    id: n("ResultsList.container", r),
    results: a
  }, /* @__PURE__ */ o.createElement(pe.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, a));
};
Ja.defaultProps = {
  overridableId: ""
};
var _v = b.component("ResultsList", Za);
const es = T((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(_v);
function ts(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ o.createElement(rs, {
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
  } = x(_);
  return /* @__PURE__ */ o.createElement(b, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ o.createElement(Ln, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
rs.defaultProps = {
  overridableId: ""
};
var $v = b.component("ResultsLoader", ts);
const xv = T((e) => ({
  loading: e.results.loading
}))($v);
function ns(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return /* @__PURE__ */ o.createElement(Q, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ o.createElement(as, {
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
  } = x(_);
  return /* @__PURE__ */ o.createElement(b, {
    id: a("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ o.createElement(es, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ o.createElement(Sv, {
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
var Cv = b.component("ResultsMultiLayout", ns);
T((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(Cv);
class ss extends I {
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
    return /* @__PURE__ */ o.createElement(Q, {
      condition: !t && r !== -1 && u ? n > 0 : n > r
    }, a(/* @__PURE__ */ o.createElement(is, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
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
    selectOnNavigation: i
  } = e;
  const {
    buildUID: l
  } = x(_), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ o.createElement(b, {
    id: l("ResultsPerPage.element", t),
    currentSize: r,
    options: n,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  }, /* @__PURE__ */ o.createElement(ne, {
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
is.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var wv = b.component("ResultsPerPage", ss);
const Tv = (e) => ({
  updateQuerySize: (t) => e(Tb(t))
}), Av = T((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), Tv)(wv);
class os extends I {
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
  return /* @__PURE__ */ o.createElement(os, Object.assign({
    key: t
  }, e));
};
ls.defaultProps = {
  queryString: ""
};
class gr extends I {
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
    return /* @__PURE__ */ o.createElement(b, {
      id: c("SearchBar.element", s),
      queryString: l,
      onBtnSearchClick: r,
      onInputChange: n,
      onKeyPress: a,
      placeholder: i,
      actionProps: t,
      uiProps: u
    }, /* @__PURE__ */ o.createElement(kn, Object.assign({
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
gr.contextType = _;
var Fv = b.component("SearchBar", ls);
const Iv = (e) => ({
  updateQueryString: (t) => e(Ia(t))
}), Ov = T((e) => ({
  queryString: e.query.queryString
}), Iv)(Fv);
class us extends I {
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
    return /* @__PURE__ */ o.createElement(Q, {
      condition: t !== null && (l || t !== null) && !n && a > 0
    }, s(/* @__PURE__ */ o.createElement(cs, {
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
    computeValue: i,
    ariaLabel: l,
    selectOnNavigation: u
  } = e;
  const {
    buildUID: c
  } = x(_), d = i(r, n), p = a.map((h, g) => ({
    key: g,
    text: h.text,
    value: h.value
  }));
  return /* @__PURE__ */ o.createElement(b, {
    id: c("Sort.element", t),
    options: a,
    currentSortBy: r,
    currentSortOrder: n,
    onValueChange: s,
    ariaLabel: l,
    selectOnNavigation: u
  }, /* @__PURE__ */ o.createElement(ne, {
    selection: !0,
    options: p,
    value: d,
    onChange: (h, g) => {
      let {
        value: y
      } = g;
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
var Rv = b.component("Sort", us);
const Pv = (e) => ({
  updateQuerySorting: (t, r) => e($b(t, r))
});
T((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), Pv)(Rv);
class ds extends I {
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
    return /* @__PURE__ */ o.createElement(Q, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ o.createElement(ps, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
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
    selectOnNavigation: i
  } = e;
  const {
    buildUID: l
  } = x(_), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ o.createElement(b, {
    id: l("SortBy.element", t),
    options: n,
    currentSortBy: r,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  }, /* @__PURE__ */ o.createElement(ne, {
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
ps.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var kv = b.component("SortBy", ds);
const Dv = (e) => ({
  updateQuerySortBy: (t) => e(xb(t))
});
T((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), Dv)(kv);
class hs extends I {
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
    return /* @__PURE__ */ o.createElement(Q, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ o.createElement(fs, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: l
    })));
  }
}
hs.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const fs = (e) => {
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
  } = x(_), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ o.createElement(b, {
    id: l("SortOrder.element", t),
    options: n,
    currentSortOrder: r,
    onValueChange: a,
    ariaLabel: s,
    selectOnNavigation: i
  }, /* @__PURE__ */ o.createElement(ne, {
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
fs.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var Lv = b.component("SortOrder", hs);
const Bv = (e) => ({
  updateQuerySortOrder: (t) => e(Cb(t))
});
T((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), Bv)(Lv);
const gs = (e) => {
  let {
    overridableId: t,
    userSelectionFilters: r,
    title: n,
    label: a,
    filterValue: s,
    updateQueryFilters: i
  } = e;
  const l = (p) => p.filter((g) => g[0] === s[0]).length > 0, u = () => {
    i(s);
  }, {
    buildUID: c
  } = x(_), d = l(r);
  return /* @__PURE__ */ o.createElement(b, {
    id: c("SearchFilters.Toggle.element", t),
    title: n,
    label: a,
    filterValue: s,
    userSelectionFilters: r,
    updateQueryFilters: i
  }, /* @__PURE__ */ o.createElement(k, null, /* @__PURE__ */ o.createElement(k.Content, null, /* @__PURE__ */ o.createElement(k.Header, null, n)), /* @__PURE__ */ o.createElement(k.Content, null, /* @__PURE__ */ o.createElement(Dn, {
    toggle: !0,
    label: a,
    onClick: u,
    checked: d
  }))));
};
gs.defaultProps = {
  overridableId: ""
};
var Nv = b.component("SearchFilters.Toggle", gs);
const Uv = (e) => ({
  updateQueryFilters: (t) => e(pr(t))
});
T((e) => ({
  userSelectionFilters: e.query.filters
}), Uv)(Nv);
const ms = o.createContext(
  null
), Mv = ({ config: e, children: t, updateQueryState: r, currentQueryState: n }) => {
  const a = ee(() => {
    r({
      ...n,
      queryString: n.queryString
    });
  }, [r, n]);
  return /* @__PURE__ */ o.createElement(ms.Provider, { value: { config: e, refreshSearch: a } }, t);
}, zv = Va(Mv), vt = () => {
  const e = o.useContext(ms);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
}, Ze = (e) => (e == null ? void 0 : e.charAt(0).toUpperCase()) + (e == null ? void 0 : e.slice(1)) || "", jv = (e) => new Date(e).toISOString().split("T")[0];
var ys = { exports: {} };
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
          var g = "";
          for (var y in p)
            p[y] && (g += "; " + y, p[y] !== !0 && (g += "=" + p[y].split(";")[0]));
          return document.cookie = c + "=" + d + g;
        }
      }
      function u(c, d) {
        if (!(typeof document > "u")) {
          for (var p = {}, h = document.cookie ? document.cookie.split("; ") : [], g = 0; g < h.length; g++) {
            var y = h[g].split("="), m = y.slice(1).join("=");
            !d && m.charAt(0) === '"' && (m = m.slice(1, -1));
            try {
              var v = n(y[0]);
              if (m = (s.read || s)(m, v) || n(m), d)
                try {
                  m = JSON.parse(m);
                } catch {
                }
              if (p[v] = m, c === v)
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
})(ys);
var Qv = ys.exports;
const qv = /* @__PURE__ */ A(Qv), Vv = () => qv.get("csrftoken") || null, Gv = (e) => {
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
}, Ex = (e) => new ya(e), _x = (e, t = {}, r = !0) => ({
  axios: {
    url: e,
    headers: {
      Accept: "application/vnd.inveniordm.v1+json",
      ...t
    },
    withCredentials: r
  }
}), Z = Qe.create({
  baseURL: "",
  timeout: 3e4,
  withCredentials: !0,
  // Include cookies in requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
Z.interceptors.request.use(
  (e) => {
    const t = Vv();
    return t && (e.headers["X-CSRFTOKEN"] = t), e;
  },
  (e) => Promise.reject(e)
);
const Hv = async (e, t) => {
  try {
    const r = await Z.put(
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
}, Yv = async (e) => {
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
    const r = await Z.post(
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
}, Wv = async (e) => {
  try {
    const t = await Z.delete(`/api/importer-tasks/${e}`);
    return t.status === 204 ? !0 : (console.error(`Failed to delete task: ${t.statusText}`), !1);
  } catch (t) {
    return console.error(
      `Error deleting task: ${t instanceof Error ? t.message : "Unknown error"}`
    ), !1;
  }
}, Kv = async (e) => {
  try {
    const t = await Z.post(`/api/importer-tasks/${e}/load`);
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error executing bulk import:", t), new Error("Failed to execute bulk import");
  }
}, Xv = async (e) => {
  try {
    const t = await Z.get(
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
}, Zv = async () => {
  try {
    const e = await Z.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, Jv = async (e) => {
  try {
    const t = await Z.get(
      `/api/importer-tasks/config/${e}`
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error fetching serializers:", t), new Error("Failed to fetch serializers");
  }
}, bs = async (e) => {
  try {
    const t = await Z.put(
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
}, vs = async (e) => {
  try {
    const t = await Z.post(
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
}, Ss = (e, t = {}) => {
  const [r, n] = te({
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
    onStatusChangeSuccess: d,
    onStatusChangeError: p
  } = t, h = ee(() => {
    n((f) => ({ ...f, error: null }));
  }, []), g = ee(async () => {
    n((f) => ({ ...f, isDeleting: !0, error: null }));
    try {
      if (!await Wv(e))
        throw new Error(`Failed to delete task ${e}`);
      a == null || a();
    } catch (f) {
      const S = f instanceof Error ? f : new Error("Unknown error");
      throw n((w) => ({ ...w, error: S })), s == null || s(S), S;
    } finally {
      n((f) => ({ ...f, isDeleting: !1 }));
    }
  }, [e, a, s]), y = ee(async () => {
    n((f) => ({ ...f, isValidating: !0, error: null }));
    try {
      const f = await vs(e);
      if (!f)
        throw new Error(`Validation failed for task ${e}`);
      return i == null || i(f), f;
    } catch (f) {
      const S = f instanceof Error ? f : new Error("Unknown error");
      throw n((w) => ({ ...w, error: S })), l == null || l(S), S;
    } finally {
      n((f) => ({ ...f, isValidating: !1 }));
    }
  }, [e, i, l]), m = ee(async () => {
    n((f) => ({ ...f, isBulkImporting: !0, error: null }));
    try {
      const f = await Kv(e);
      if (!f)
        throw new Error(`Failed to execute bulk import for task ${e}`);
      return u == null || u(f), f;
    } catch (f) {
      const S = f instanceof Error ? f : new Error("Unknown error");
      throw n((w) => ({ ...w, error: S })), c == null || c(S), S;
    } finally {
      n((f) => ({ ...f, isBulkImporting: !1 }));
    }
  }, [e, u, c]), v = ee(async () => {
    n((f) => ({ ...f, isGettingStatus: !0, error: null }));
    try {
      const f = await bs(e);
      if (!f)
        throw new Error(`Failed to retrieve status for task ${e}`);
      return d == null || d(f), f;
    } catch (f) {
      const S = f instanceof Error ? f : new Error("Unknown error");
      throw n((w) => ({ ...w, error: S })), p == null || p(S), S;
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
    validateTask: y,
    runBulkImport: m,
    getStatus: v,
    clearError: h
  };
}, eS = ({ result: e, index: t }) => {
  var v;
  const { refreshSearch: r, config: n } = vt(), {
    deleteTask: a,
    validateTask: s,
    runBulkImport: i,
    getStatus: l,
    isDeleting: u,
    isValidating: c,
    isBulkImporting: d,
    isGettingStatus: p,
    error: h,
    clearError: g
  } = Ss(e.id, {
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
  const y = (f, S) => S ? `${f}...` : f, m = u || c || d || p;
  return /* @__PURE__ */ o.createElement(at, { key: t }, /* @__PURE__ */ o.createElement(U, null, /* @__PURE__ */ o.createElement("a", { href: `${n.resultPath}/${e.id}` }, e.title || "No title")), /* @__PURE__ */ o.createElement(U, null, jv(e.created)), /* @__PURE__ */ o.createElement(U, null, Ze(e.status)), /* @__PURE__ */ o.createElement(U, null, ((v = e.records_status) == null ? void 0 : v.total_records) ?? 0), /* @__PURE__ */ o.createElement(U, null, 0), /* @__PURE__ */ o.createElement(U, null, e.serializer), /* @__PURE__ */ o.createElement(U, null, Ze(e.mode)), /* @__PURE__ */ o.createElement(U, { style: { width: "220px" } }, h && /* @__PURE__ */ o.createElement("div", { style: { color: "red", fontSize: "12px", marginBottom: "5px" } }, h.message, /* @__PURE__ */ o.createElement(
    j,
    {
      onClick: g,
      style: { marginLeft: "5px", fontSize: "10px" }
    },
    "Clear"
  )), /* @__PURE__ */ o.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ o.createElement(
    ne,
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
          text: y("Retry Validation", c),
          value: "validate",
          disabled: m,
          onClick: () => s()
        },
        {
          key: "load",
          text: y("Load Bulk Import", d),
          value: "load",
          disabled: m,
          onClick: () => i()
        },
        {
          key: "status",
          text: y("Get Status", p),
          value: "status",
          disabled: m,
          onClick: () => l()
        },
        {
          key: "delete",
          text: y("Delete", u),
          value: "delete",
          disabled: m,
          onClick: () => a()
        }
      ]
    }
  ), /* @__PURE__ */ o.createElement(
    j,
    {
      basic: !0,
      size: "tiny",
      disabled: m,
      as: "a",
      href: `${n.resultPath}/${e.id}`
    },
    /* @__PURE__ */ o.createElement(F, { name: "eye" }),
    "View"
  ))));
}, tS = ({ children: e }) => /* @__PURE__ */ o.createElement(Bn, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ o.createElement(Nn, null, /* @__PURE__ */ o.createElement(at, null, /* @__PURE__ */ o.createElement(M, null, "ID"), /* @__PURE__ */ o.createElement(M, null, "Date Created"), /* @__PURE__ */ o.createElement(M, null, "Status"), /* @__PURE__ */ o.createElement(M, null, "Records"), /* @__PURE__ */ o.createElement(M, null, "Files"), /* @__PURE__ */ o.createElement(M, null, "Serializer"), /* @__PURE__ */ o.createElement(M, null, "Mode"), /* @__PURE__ */ o.createElement(M, null, "Actions"))), /* @__PURE__ */ o.createElement(Un, null, e)), J = {
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
}, rS = () => {
  const [e, t] = te(
    {}
  ), [r, n] = te(!0), { values: a, submitForm: s, isSubmitting: i, isValid: l, setFieldValue: u } = Bi(), c = ee(async () => {
    try {
      const d = await Zv(), p = {};
      for (const h of d) {
        const g = await Jv(h);
        g && (p[h] = g);
      }
      t(p);
    } catch (d) {
      console.error("Error fetching record types:", d);
    } finally {
      n(!1);
    }
  }, []);
  return nt(() => {
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
}, nS = () => {
  const {
    configs: e,
    isLoading: t,
    submitForm: r,
    setFieldValue: n,
    values: a,
    isSubmitting: s,
    isValid: i
  } = rS(), l = (u) => {
    var d;
    const c = ((d = u.target.files) == null ? void 0 : d[0]) || null;
    n("metadata", c);
  };
  return t ? /* @__PURE__ */ o.createElement("p", null, "Loading record types...") : !e || Object.keys(e).length === 0 ? /* @__PURE__ */ o.createElement("p", null, "No record types available.") : /* @__PURE__ */ o.createElement(vi, null, /* @__PURE__ */ o.createElement(
    ki,
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
    Di,
    {
      fieldPath: "task.description",
      label: "Notes",
      placeholder: "Enter a description for the import task",
      rows: 3
    }
  ), /* @__PURE__ */ o.createElement(
    j,
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
function Es(e, t, r) {
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
      n[a] = s > -1 ? r[s] : Es(e[a], t, r);
    }
    return n;
  }
  return e;
}
function Lt(e) {
  return Es(e, [], []);
}
const aS = Object.prototype.toString, sS = Error.prototype.toString, iS = RegExp.prototype.toString, oS = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", lS = /^Symbol\((.*)\)(.*)$/;
function uS(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function un(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return uS(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return oS.call(e).replace(lS, "Symbol($1)");
  const n = aS.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + sS.call(e) + "]" : n === "RegExp" ? iS.call(e) : null;
}
function Oe(e, t) {
  let r = un(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = un(this[n], t);
    return s !== null ? s : a;
  }, 2);
}
let oe = {
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
}, V = {
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
}, cS = {
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
}, dS = {
  isValue: "${path} field must be ${value}"
}, Nt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, pS = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: oe,
  string: V,
  number: cS,
  date: Bt,
  object: Nt,
  array: pS,
  boolean: dS
});
var hS = Object.prototype, fS = hS.hasOwnProperty;
function gS(e, t) {
  return e != null && fS.call(e, t);
}
var mS = gS, yS = mS, bS = Zn;
function vS(e, t) {
  return e != null && bS(e, t, yS);
}
var SS = vS;
const Je = /* @__PURE__ */ A(SS), _s = (e) => e && e.__isYupSchema__;
class ES {
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
      let u = l.pop(), c = l.pop(), d = i(...l) ? a : s;
      if (d)
        return typeof d == "function" ? d(c) : c.concat(d.resolve(u));
    };
  }
  resolve(t, r) {
    let n = this.refs.map((s) => s.getValue(r == null ? void 0 : r.value, r == null ? void 0 : r.parent, r == null ? void 0 : r.context)), a = this.fn.apply(t, n.concat(t, r));
    if (a === void 0 || a === t)
      return t;
    if (!_s(a))
      throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
function $s(e) {
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
let _S = /\$\{\s*(\w+)\s*\}/g;
class D extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Ut({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(_S, (a, s) => Oe(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], $s(t).forEach((s) => {
      D.isError(s) ? (this.errors.push(...s.errors), this.inner = this.inner.concat(s.inner.length ? s.inner : s)) : this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, D);
  }
}
const $S = (e) => {
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
  } = e, c = $S(t), d = n.length;
  const p = [];
  if (i = i || [], !d)
    return i.length ? c(new D(i, s, u)) : c(null, s);
  for (let h = 0; h < n.length; h++) {
    const g = n[h];
    g(a, function(m) {
      if (m) {
        if (!D.isError(m))
          return c(m, s);
        if (r)
          return m.value = s, c(m, s);
        p.push(m);
      }
      if (--d <= 0) {
        if (p.length && (l && p.sort(l), i.length && p.push(...i), i = p), i.length) {
          c(new D(i, s, u), s);
          return;
        }
        c(null, s);
      }
    });
  }
}
function xS(e) {
  return function(t, r, n) {
    for (var a = -1, s = Object(t), i = n(t), l = i.length; l--; ) {
      var u = i[e ? l : ++a];
      if (r(s[u], u, s) === !1)
        break;
    }
    return t;
  };
}
var CS = xS, wS = CS, TS = wS(), AS = TS, FS = AS, IS = Le;
function OS(e, t) {
  return e && FS(e, t, IS);
}
var xs = OS, RS = "__lodash_hash_undefined__";
function PS(e) {
  return this.__data__.set(e, RS), this;
}
var kS = PS;
function DS(e) {
  return this.__data__.has(e);
}
var LS = DS, BS = Zt, NS = kS, US = LS;
function et(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new BS(); ++t < r; )
    this.add(e[t]);
}
et.prototype.add = et.prototype.push = NS;
et.prototype.has = US;
var MS = et;
function zS(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var jS = zS;
function QS(e, t) {
  return e.has(t);
}
var qS = QS, VS = MS, GS = jS, HS = qS, YS = 1, WS = 2;
function KS(e, t, r, n, a, s) {
  var i = r & YS, l = e.length, u = t.length;
  if (l != u && !(i && u > l))
    return !1;
  var c = s.get(e), d = s.get(t);
  if (c && d)
    return c == t && d == e;
  var p = -1, h = !0, g = r & WS ? new VS() : void 0;
  for (s.set(e, t), s.set(t, e); ++p < l; ) {
    var y = e[p], m = t[p];
    if (n)
      var v = i ? n(m, y, p, t, e, s) : n(y, m, p, e, t, s);
    if (v !== void 0) {
      if (v)
        continue;
      h = !1;
      break;
    }
    if (g) {
      if (!GS(t, function(f, S) {
        if (!HS(g, S) && (y === f || a(y, f, r, n, s)))
          return g.push(S);
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
var Cs = KS;
function XS(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var ZS = XS;
function JS(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var eE = JS, cn = ve, dn = ua, tE = ct, rE = Cs, nE = ZS, aE = eE, sE = 1, iE = 2, oE = "[object Boolean]", lE = "[object Date]", uE = "[object Error]", cE = "[object Map]", dE = "[object Number]", pE = "[object RegExp]", hE = "[object Set]", fE = "[object String]", gE = "[object Symbol]", mE = "[object ArrayBuffer]", yE = "[object DataView]", pn = cn ? cn.prototype : void 0, Ct = pn ? pn.valueOf : void 0;
function bE(e, t, r, n, a, s, i) {
  switch (r) {
    case yE:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case mE:
      return !(e.byteLength != t.byteLength || !s(new dn(e), new dn(t)));
    case oE:
    case lE:
    case dE:
      return tE(+e, +t);
    case uE:
      return e.name == t.name && e.message == t.message;
    case pE:
    case fE:
      return e == t + "";
    case cE:
      var l = nE;
    case hE:
      var u = n & sE;
      if (l || (l = aE), e.size != t.size && !u)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      n |= iE, i.set(e, t);
      var d = rE(l(e), l(t), n, a, s, i);
      return i.delete(e), d;
    case gE:
      if (Ct)
        return Ct.call(e) == Ct.call(t);
  }
  return !1;
}
var vE = bE, hn = la, SE = 1, EE = Object.prototype, _E = EE.hasOwnProperty;
function $E(e, t, r, n, a, s) {
  var i = r & SE, l = hn(e), u = l.length, c = hn(t), d = c.length;
  if (u != d && !i)
    return !1;
  for (var p = u; p--; ) {
    var h = l[p];
    if (!(i ? h in t : _E.call(t, h)))
      return !1;
  }
  var g = s.get(e), y = s.get(t);
  if (g && y)
    return g == t && y == e;
  var m = !0;
  s.set(e, t), s.set(t, e);
  for (var v = i; ++p < u; ) {
    h = l[p];
    var f = e[h], S = t[h];
    if (n)
      var w = i ? n(S, f, h, t, e, s) : n(f, S, h, e, t, s);
    if (!(w === void 0 ? f === S || a(f, S, r, n, s) : w)) {
      m = !1;
      break;
    }
    v || (v = h == "constructor");
  }
  if (m && !v) {
    var O = e.constructor, q = t.constructor;
    O != q && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof q == "function" && q instanceof q) && (m = !1);
  }
  return s.delete(e), s.delete(t), m;
}
var xE = $E, wt = sr, CE = Cs, wE = vE, TE = xE, fn = Re, gn = L, mn = lt, AE = Wt, FE = 1, yn = "[object Arguments]", bn = "[object Array]", Me = "[object Object]", IE = Object.prototype, vn = IE.hasOwnProperty;
function OE(e, t, r, n, a, s) {
  var i = gn(e), l = gn(t), u = i ? bn : fn(e), c = l ? bn : fn(t);
  u = u == yn ? Me : u, c = c == yn ? Me : c;
  var d = u == Me, p = c == Me, h = u == c;
  if (h && mn(e)) {
    if (!mn(t))
      return !1;
    i = !0, d = !1;
  }
  if (h && !d)
    return s || (s = new wt()), i || AE(e) ? CE(e, t, r, n, a, s) : wE(e, t, u, r, n, a, s);
  if (!(r & FE)) {
    var g = d && vn.call(e, "__wrapped__"), y = p && vn.call(t, "__wrapped__");
    if (g || y) {
      var m = g ? e.value() : e, v = y ? t.value() : t;
      return s || (s = new wt()), a(m, v, r, n, s);
    }
  }
  return h ? (s || (s = new wt()), TE(e, t, r, n, a, s)) : !1;
}
var RE = OE, PE = RE, Sn = K;
function ws(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Sn(e) && !Sn(t) ? e !== e && t !== t : PE(e, t, r, n, ws, a);
}
var Ts = ws, kE = sr, DE = Ts, LE = 1, BE = 2;
function NE(e, t, r, n) {
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
      var p = new kE();
      if (n)
        var h = n(c, d, u, e, t, p);
      if (!(h === void 0 ? DE(d, c, LE | BE, n, p) : h))
        return !1;
    }
  }
  return !0;
}
var UE = NE, ME = re;
function zE(e) {
  return e === e && !ME(e);
}
var As = zE, jE = As, QE = Le;
function qE(e) {
  for (var t = QE(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, jE(a)];
  }
  return t;
}
var VE = qE;
function GE(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Fs = GE, HE = UE, YE = VE, WE = Fs;
function KE(e) {
  var t = YE(e);
  return t.length == 1 && t[0][2] ? WE(t[0][0], t[0][1]) : function(r) {
    return r === e || HE(r, e, t);
  };
}
var XE = KE, ZE = Ts, JE = Xn, e_ = tr, t_ = Xt, r_ = As, n_ = Fs, a_ = ke, s_ = 1, i_ = 2;
function o_(e, t) {
  return t_(e) && r_(t) ? n_(a_(e), t) : function(r) {
    var n = JE(r, e);
    return n === void 0 && n === t ? e_(r, e) : ZE(t, n, s_ | i_);
  };
}
var l_ = o_;
function u_(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var c_ = u_, d_ = er;
function p_(e) {
  return function(t) {
    return d_(t, e);
  };
}
var h_ = p_, f_ = c_, g_ = h_, m_ = Xt, y_ = ke;
function b_(e) {
  return m_(e) ? f_(y_(e)) : g_(e);
}
var v_ = b_, S_ = XE, E_ = l_, __ = nr, $_ = L, x_ = v_;
function C_(e) {
  return typeof e == "function" ? e : e == null ? __ : typeof e == "object" ? $_(e) ? E_(e[0], e[1]) : S_(e) : x_(e);
}
var Is = C_, w_ = mt, T_ = xs, A_ = Is;
function F_(e, t) {
  var r = {};
  return t = A_(t), T_(e, function(n, a, s) {
    w_(r, a, t(n, a, s));
  }), r;
}
var I_ = F_;
const Os = /* @__PURE__ */ A(I_);
function ce(e) {
  this._maxSize = e, this.clear();
}
ce.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
ce.prototype.get = function(e) {
  return this._values[e];
};
ce.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var O_ = /[^.^\]^[]+|(?=\[\]|\.\.)/g, Rs = /^\d+$/, R_ = /^\d/, P_ = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, k_ = /^\s*(['"]?)(.*?)(\1)\s*$/, mr = 512, En = new ce(mr), _n = new ce(mr), $n = new ce(mr), St = {
  Cache: ce,
  split: zt,
  normalizePath: Tt,
  setter: function(e) {
    var t = Tt(e);
    return _n.get(e) || _n.set(e, function(n, a) {
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
    return $n.get(e) || $n.set(e, function(a) {
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
    D_(Array.isArray(e) ? e : zt(e), t, r);
  }
};
function Tt(e) {
  return En.get(e) || En.set(
    e,
    zt(e).map(function(t) {
      return t.replace(k_, "$2");
    })
  );
}
function zt(e) {
  return e.match(O_) || [""];
}
function D_(e, t, r) {
  var n = e.length, a, s, i, l;
  for (s = 0; s < n; s++)
    a = e[s], a && (N_(a) && (a = '"' + a + '"'), l = yr(a), i = !l && /^\d+$/.test(a), t.call(r, a, l, i, s, e));
}
function yr(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function L_(e) {
  return e.match(R_) && !e.match(Rs);
}
function B_(e) {
  return P_.test(e);
}
function N_(e) {
  return !yr(e) && (L_(e) || B_(e));
}
const ze = {
  context: "$",
  value: "."
};
class ae {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
      throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === ze.context, this.isValue = this.key[0] === ze.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? ze.context : this.isValue ? ze.value : "";
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
ae.prototype.__isYupRef = !0;
function tt() {
  return tt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tt.apply(this, arguments);
}
function U_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function je(e) {
  function t(r, n) {
    let {
      value: a,
      path: s = "",
      label: i,
      options: l,
      originalValue: u,
      sync: c
    } = r, d = U_(r, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name: p,
      test: h,
      params: g,
      message: y
    } = e;
    let {
      parent: m,
      context: v
    } = l;
    function f(C) {
      return ae.isRef(C) ? C.getValue(a, m, v) : C;
    }
    function S(C = {}) {
      const B = Os(tt({
        value: a,
        originalValue: u,
        label: i,
        path: C.path || s
      }, g, C.params), f), Sr = new D(D.formatError(C.message || y, B), a, B.path, C.type || p);
      return Sr.params = B, Sr;
    }
    let w = tt({
      path: s,
      parent: m,
      type: p,
      createError: S,
      resolve: f,
      options: l,
      originalValue: u
    }, d);
    if (!c) {
      try {
        Promise.resolve(h.call(w, a, w)).then((C) => {
          D.isError(C) ? n(C) : C ? n(null, C) : n(S());
        }).catch(n);
      } catch (C) {
        n(C);
      }
      return;
    }
    let O;
    try {
      var q;
      if (O = h.call(w, a, w), typeof ((q = O) == null ? void 0 : q.then) == "function")
        throw new Error(`Validation test of type: "${w.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (C) {
      n(C);
      return;
    }
    D.isError(O) ? n(O) : O ? n(null, O) : n(S());
  }
  return t.OPTIONS = e, t;
}
let M_ = (e) => e.substr(0, e.length - 1).substr(1);
function z_(e, t, r, n = r) {
  let a, s, i;
  return t ? (St.forEach(t, (l, u, c) => {
    let d = u ? M_(l) : l;
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
class rt {
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
    return this.toArray().reduce((r, n) => r.concat(ae.isRef(n) ? t(n) : n), []);
  }
  add(t) {
    ae.isRef(t) ? this.refs.set(t.key, t) : this.list.add(t);
  }
  delete(t) {
    ae.isRef(t) ? this.refs.delete(t.key) : this.list.delete(t);
  }
  clone() {
    const t = new rt();
    return t.list = new Set(this.list), t.refs = new Map(this.refs), t;
  }
  merge(t, r) {
    const n = this.clone();
    return t.list.forEach((a) => n.add(a)), t.refs.forEach((a) => n.add(a)), r.list.forEach((a) => n.delete(a)), r.refs.forEach((a) => n.delete(a)), n;
  }
}
function N() {
  return N = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, N.apply(this, arguments);
}
class R {
  constructor(t) {
    this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new rt(), this._blacklist = new rt(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(oe.notType);
    }), this.type = (t == null ? void 0 : t.type) || "mixed", this.spec = N({
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
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = N({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Lt(N({}, this.spec, t)), r;
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
    const a = N({}, r.spec, n.spec);
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
    let n = this.resolve(N({
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
    } = r, d = t;
    u || (d = this._cast(d, N({
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
    let g = [];
    this._whitelistError && g.push(this._whitelistError), this._blacklistError && g.push(this._blacklistError), Mt({
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
    let a = this.resolve(N({}, r, {
      value: t
    }));
    return typeof n == "function" ? a._validate(t, r, n) : new Promise((s, i) => a._validate(t, r, (l, u) => {
      l ? i(l) : s(u);
    }));
  }
  validateSync(t, r) {
    let n = this.resolve(N({}, r, {
      value: t
    })), a;
    return n._validate(t, N({}, r, {
      sync: !0
    }), (s, i) => {
      if (s)
        throw s;
      a = i;
    }), a;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (D.isError(n))
        return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (D.isError(n))
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
  defined(t = oe.defined) {
    return this.test({
      message: t,
      name: "defined",
      exclusive: !0,
      test(r) {
        return r !== void 0;
      }
    });
  }
  required(t = oe.required) {
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
    }, r.message === void 0 && (r.message = oe.default), typeof r.test != "function")
      throw new TypeError("`test` is a required parameters");
    let n = this.clone(), a = je(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((i) => !(i.OPTIONS.name === r.name && (s || i.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = $s(t).map((s) => new ae(s));
    return a.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(new ES(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r._typeError = je({
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
  oneOf(t, r = oe.oneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._whitelist.add(a), n._blacklist.delete(a);
    }), n._whitelistError = je({
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
  notOneOf(t, r = oe.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n._blacklistError = je({
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
    } = z_(this, t, r, n.context);
    return i[e](a && a[s], N({}, n, {
      parent: a,
      path: t
    }));
  };
for (const e of ["equals", "is"])
  R.prototype[e] = R.prototype.oneOf;
for (const e of ["not", "nope"])
  R.prototype[e] = R.prototype.notOneOf;
R.prototype.optional = R.prototype.notRequired;
const j_ = R;
j_.prototype;
const G = (e) => e == null;
let Q_ = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, q_ = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, V_ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, G_ = (e) => G(e) || e === e.trim(), H_ = {}.toString();
function Fe() {
  return new Ps();
}
class Ps extends R {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === H_ ? t : r;
      });
    });
  }
  _typeCheck(t) {
    return t instanceof String && (t = t.valueOf()), typeof t == "string";
  }
  _isPresent(t) {
    return super._isPresent(t) && !!t.length;
  }
  length(t, r = V.length) {
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
  min(t, r = V.min) {
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
  max(t, r = V.max) {
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
      message: a || V.matches,
      params: {
        regex: t
      },
      test: (i) => G(i) || i === "" && n || i.search(t) !== -1
    });
  }
  email(t = V.email) {
    return this.matches(Q_, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = V.url) {
    return this.matches(q_, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = V.uuid) {
    return this.matches(V_, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = V.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: G_
    });
  }
  lowercase(t = V.lowercase) {
    return this.transform((r) => G(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => G(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = V.uppercase) {
    return this.transform((r) => G(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => G(r) || r === r.toUpperCase()
    });
  }
}
Fe.prototype = Ps.prototype;
var Y_ = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function W_(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, a;
  if (a = Y_.exec(e)) {
    for (var s = 0, i; i = t[s]; ++s)
      a[i] = +a[i] || 0;
    a[2] = (+a[2] || 1) - 1, a[3] = +a[3] || 1, a[7] = a[7] ? String(a[7]).substr(0, 3) : 0, (a[8] === void 0 || a[8] === "") && (a[9] === void 0 || a[9] === "") ? n = +new Date(a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : (a[8] !== "Z" && a[9] !== void 0 && (r = a[10] * 60 + a[11], a[9] === "+" && (r = 0 - r)), n = Date.UTC(a[1], a[2], a[3], a[4], a[5] + r, a[6], a[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let ks = /* @__PURE__ */ new Date(""), K_ = (e) => Object.prototype.toString.call(e) === "[object Date]";
class Ds extends R {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = W_(t), isNaN(t) ? ks : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return K_(t) && !isNaN(t.getTime());
  }
  prepareParam(t, r) {
    let n;
    if (ae.isRef(t))
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
        return G(a) || a >= this.resolve(n);
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
        return G(a) || a <= this.resolve(n);
      }
    });
  }
}
Ds.INVALID_DATE = ks;
Ds.prototype;
function X_(e, t, r, n) {
  var a = -1, s = e == null ? 0 : e.length;
  for (n && s && (r = e[++a]); ++a < s; )
    r = t(r, e[a], a, e);
  return r;
}
var Z_ = X_;
function J_(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var e0 = J_, t0 = e0, r0 = {
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
}, n0 = t0(r0), a0 = n0, s0 = a0, i0 = Pe, o0 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, l0 = "\\u0300-\\u036f", u0 = "\\ufe20-\\ufe2f", c0 = "\\u20d0-\\u20ff", d0 = l0 + u0 + c0, p0 = "[" + d0 + "]", h0 = RegExp(p0, "g");
function f0(e) {
  return e = i0(e), e && e.replace(o0, s0).replace(h0, "");
}
var g0 = f0, m0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function y0(e) {
  return e.match(m0) || [];
}
var b0 = y0, v0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function S0(e) {
  return v0.test(e);
}
var E0 = S0, Ls = "\\ud800-\\udfff", _0 = "\\u0300-\\u036f", $0 = "\\ufe20-\\ufe2f", x0 = "\\u20d0-\\u20ff", C0 = _0 + $0 + x0, Bs = "\\u2700-\\u27bf", Ns = "a-z\\xdf-\\xf6\\xf8-\\xff", w0 = "\\xac\\xb1\\xd7\\xf7", T0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", A0 = "\\u2000-\\u206f", F0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Us = "A-Z\\xc0-\\xd6\\xd8-\\xde", I0 = "\\ufe0e\\ufe0f", Ms = w0 + T0 + A0 + F0, zs = "['’]", xn = "[" + Ms + "]", O0 = "[" + C0 + "]", js = "\\d+", R0 = "[" + Bs + "]", Qs = "[" + Ns + "]", qs = "[^" + Ls + Ms + js + Bs + Ns + Us + "]", P0 = "\\ud83c[\\udffb-\\udfff]", k0 = "(?:" + O0 + "|" + P0 + ")", D0 = "[^" + Ls + "]", Vs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Gs = "[\\ud800-\\udbff][\\udc00-\\udfff]", he = "[" + Us + "]", L0 = "\\u200d", Cn = "(?:" + Qs + "|" + qs + ")", B0 = "(?:" + he + "|" + qs + ")", wn = "(?:" + zs + "(?:d|ll|m|re|s|t|ve))?", Tn = "(?:" + zs + "(?:D|LL|M|RE|S|T|VE))?", Hs = k0 + "?", Ys = "[" + I0 + "]?", N0 = "(?:" + L0 + "(?:" + [D0, Vs, Gs].join("|") + ")" + Ys + Hs + ")*", U0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", M0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", z0 = Ys + Hs + N0, j0 = "(?:" + [R0, Vs, Gs].join("|") + ")" + z0, Q0 = RegExp([
  he + "?" + Qs + "+" + wn + "(?=" + [xn, he, "$"].join("|") + ")",
  B0 + "+" + Tn + "(?=" + [xn, he + Cn, "$"].join("|") + ")",
  he + "?" + Cn + "+" + wn,
  he + "+" + Tn,
  M0,
  U0,
  js,
  j0
].join("|"), "g");
function q0(e) {
  return e.match(Q0) || [];
}
var V0 = q0, G0 = b0, H0 = E0, Y0 = Pe, W0 = V0;
function K0(e, t, r) {
  return e = Y0(e), t = r ? void 0 : t, t === void 0 ? H0(e) ? W0(e) : G0(e) : e.match(t) || [];
}
var X0 = K0, Z0 = Z_, J0 = g0, e$ = X0, t$ = "['’]", r$ = RegExp(t$, "g");
function n$(e) {
  return function(t) {
    return Z0(e$(J0(t).replace(r$, "")), e, "");
  };
}
var Ws = n$, a$ = Ws, s$ = a$(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), i$ = s$;
const An = /* @__PURE__ */ A(i$);
function o$(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++n < a; )
    s[n] = e[n + t];
  return s;
}
var l$ = o$, u$ = l$;
function c$(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : u$(e, t, r);
}
var d$ = c$, p$ = "\\ud800-\\udfff", h$ = "\\u0300-\\u036f", f$ = "\\ufe20-\\ufe2f", g$ = "\\u20d0-\\u20ff", m$ = h$ + f$ + g$, y$ = "\\ufe0e\\ufe0f", b$ = "\\u200d", v$ = RegExp("[" + b$ + p$ + m$ + y$ + "]");
function S$(e) {
  return v$.test(e);
}
var Ks = S$;
function E$(e) {
  return e.split("");
}
var _$ = E$, Xs = "\\ud800-\\udfff", $$ = "\\u0300-\\u036f", x$ = "\\ufe20-\\ufe2f", C$ = "\\u20d0-\\u20ff", w$ = $$ + x$ + C$, T$ = "\\ufe0e\\ufe0f", A$ = "[" + Xs + "]", jt = "[" + w$ + "]", Qt = "\\ud83c[\\udffb-\\udfff]", F$ = "(?:" + jt + "|" + Qt + ")", Zs = "[^" + Xs + "]", Js = "(?:\\ud83c[\\udde6-\\uddff]){2}", ei = "[\\ud800-\\udbff][\\udc00-\\udfff]", I$ = "\\u200d", ti = F$ + "?", ri = "[" + T$ + "]?", O$ = "(?:" + I$ + "(?:" + [Zs, Js, ei].join("|") + ")" + ri + ti + ")*", R$ = ri + ti + O$, P$ = "(?:" + [Zs + jt + "?", jt, Js, ei, A$].join("|") + ")", k$ = RegExp(Qt + "(?=" + Qt + ")|" + P$ + R$, "g");
function D$(e) {
  return e.match(k$) || [];
}
var L$ = D$, B$ = _$, N$ = Ks, U$ = L$;
function M$(e) {
  return N$(e) ? U$(e) : B$(e);
}
var z$ = M$, j$ = d$, Q$ = Ks, q$ = z$, V$ = Pe;
function G$(e) {
  return function(t) {
    t = V$(t);
    var r = Q$(t) ? q$(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? j$(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var H$ = G$, Y$ = H$, W$ = Y$("toUpperCase"), K$ = W$, X$ = Pe, Z$ = K$;
function J$(e) {
  return Z$(X$(e).toLowerCase());
}
var e1 = J$, t1 = e1, r1 = Ws, n1 = r1(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? t1(t) : t);
}), a1 = n1;
const s1 = /* @__PURE__ */ A(a1);
var i1 = mt, o1 = xs, l1 = Is;
function u1(e, t) {
  var r = {};
  return t = l1(t), o1(e, function(n, a, s) {
    i1(r, t(n, a, s), n);
  }), r;
}
var c1 = u1;
const d1 = /* @__PURE__ */ A(c1);
var br = { exports: {} };
br.exports = function(e) {
  return ni(p1(e), e);
};
br.exports.array = ni;
function ni(e, t) {
  var r = e.length, n = new Array(r), a = {}, s = r, i = h1(t), l = f1(e);
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
      var g = i.get(c) || /* @__PURE__ */ new Set();
      if (g = Array.from(g), d = g.length) {
        p.add(c);
        do {
          var y = g[--d];
          u(y, l.get(y), p);
        } while (d);
        p.delete(c);
      }
      n[--r] = c;
    }
  }
}
function p1(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.add(a[0]), t.add(a[1]);
  }
  return Array.from(t);
}
function h1(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.has(a[0]) || t.set(a[0], /* @__PURE__ */ new Set()), t.has(a[1]) || t.set(a[1], /* @__PURE__ */ new Set()), t.get(a[0]).add(a[1]);
  }
  return t;
}
function f1(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var g1 = br.exports;
const m1 = /* @__PURE__ */ A(g1);
function y1(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([i, l]) => `${i}-${l}`));
  function s(i, l) {
    let u = St.split(i)[0];
    n.add(u), a.has(`${l}-${u}`) || r.push([l, u]);
  }
  for (const i in e)
    if (Je(e, i)) {
      let l = e[i];
      n.add(i), ae.isRef(l) && l.isSibling ? s(l.path, i) : _s(l) && "deps" in l && l.deps.forEach((u) => s(u, i));
    }
  return m1.array(Array.from(n), r).reverse();
}
function Fn(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if (((s = t.path) == null ? void 0 : s.indexOf(n)) !== -1)
      return r = a, !0;
  }), r;
}
function ai(e) {
  return (t, r) => Fn(e, t) - Fn(e, r);
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
let In = (e) => Object.prototype.toString.call(e) === "[object Object]";
function b1(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const v1 = ai([]);
class si extends R {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = v1, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
    return In(t) || typeof t == "function";
  }
  _cast(t, r = {}) {
    var n;
    let a = super._cast(t, r);
    if (a === void 0)
      return this.getDefault();
    if (!this._typeCheck(a))
      return a;
    let s = this.fields, i = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, l = this._nodes.concat(Object.keys(a).filter((p) => this._nodes.indexOf(p) === -1)), u = {}, c = me({}, r, {
      parent: u,
      __validating: r.__validating || !1
    }), d = !1;
    for (const p of l) {
      let h = s[p], g = Je(a, p);
      if (h) {
        let y, m = a[p];
        c.path = (r.path ? `${r.path}.` : "") + p, h = h.resolve({
          value: m,
          context: r.context,
          parent: u
        });
        let v = "spec" in h ? h.spec : void 0, f = v == null ? void 0 : v.strict;
        if (v != null && v.strip) {
          d = d || p in a;
          continue;
        }
        y = !r.__validating || !f ? (
          // TODO: use _cast, this is double resolving
          h.cast(a[p], c)
        ) : a[p], y !== void 0 && (u[p] = y);
      } else
        g && !i && (u[p] = a[p]);
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
        if (!D.isError(d) || u)
          return void n(d, p);
        a.push(d);
      }
      if (!c || !In(p)) {
        n(a[0] || null, p);
        return;
      }
      l = l || p;
      let h = this._nodes.map((g) => (y, m) => {
        let v = g.indexOf(".") === -1 ? (r.path ? `${r.path}.` : "") + g : `${r.path || ""}["${g}"]`, f = this.fields[g];
        if (f && "validate" in f) {
          f.validate(p[g], me({}, r, {
            // @ts-ignore
            path: v,
            from: i,
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
    return r.fields = me({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
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
    return n.fields = a, n._sortErrors = ai(Object.keys(a)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = y1(a, n._excludedEdges), n;
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
        const s = b1(this.schema, a);
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
    return this.transform((r) => r && d1(r, (n, a) => t(a)));
  }
  camelCase() {
    return this.transformKeys(s1);
  }
  snakeCase() {
    return this.transformKeys(An);
  }
  constantCase() {
    return this.transformKeys((t) => An(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = Os(this.fields, (r) => r.describe()), t;
  }
}
function Ve(e) {
  return new si(e);
}
Ve.prototype = si.prototype;
const S1 = {
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
}, E1 = Ve({
  task: Ve({
    title: Fe().required("Title is required"),
    recordType: Fe().required("Record type is required"),
    serializer: Fe().required("Serializer is required"),
    mode: Fe().required("Mode is required")
  }),
  metadata: Ve().nullable()
}), _1 = ({ onSubmit: e }) => {
  const t = async (r) => {
    try {
      const n = await Yv(r.task);
      if (!n)
        throw new Error("Failed to create import task");
      if (r.metadata) {
        const a = await Hv(n.id, r.metadata);
        console.log("Metadata added:", a);
        const s = await vs(n.id);
        if (console.log("Task validation result:", s), s) {
          const i = await bs(n.id);
          console.log("Task status:", i);
        }
      }
      e == null || e();
    } catch (n) {
      console.error("Error creating import task:", n);
    }
  };
  return /* @__PURE__ */ o.createElement(
    Li,
    {
      formik: {
        initialValues: S1,
        validationSchema: E1,
        onSubmit: t
      }
    },
    /* @__PURE__ */ o.createElement(nS, null)
  );
}, $1 = () => {
  const [e, t] = te(!1), { refreshSearch: r } = vt(), n = ee(() => {
    t(!1), r();
  }, [r]);
  return /* @__PURE__ */ o.createElement(
    Te,
    {
      closeIcon: !0,
      onClose: () => t(!1),
      onOpen: () => t(!0),
      open: e,
      trigger: /* @__PURE__ */ o.createElement(j, { color: "green", icon: !0, labelPosition: "left" }, /* @__PURE__ */ o.createElement(F, { name: "add" }), "New Import")
    },
    /* @__PURE__ */ o.createElement(Ci, null, "New Import Task"),
    /* @__PURE__ */ o.createElement(wi, null, /* @__PURE__ */ o.createElement(_1, { onSubmit: n })),
    /* @__PURE__ */ o.createElement(Ti, null, /* @__PURE__ */ o.createElement(j, { onClick: () => t(!1) }, "Close"))
  );
}, x1 = ({
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
  return /* @__PURE__ */ o.createElement(Ie, { activeIndex: 0, compact: !0, size: "tiny" }, r.map(({ key: i, label: l, value: u }) => /* @__PURE__ */ o.createElement(
    Ie.Item,
    {
      key: i,
      name: i,
      active: (n == null ? void 0 : n[1]) === u || u === null && !n,
      onClick: () => a(u)
    },
    l
  )));
}, ii = Va(x1);
function qt(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var C1 = (e) => typeof e == "object" && e !== null;
function w1(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var T1 = (e) => e === "base";
function A1(e) {
  return e.slice().filter((t) => !T1(t));
}
function On(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function F1(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = On(r % 52) + t;
  return On(r % 52) + t;
}
function I1(e, t) {
  let r = t.length;
  for (; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function O1(e) {
  return F1(I1(5381, e) >>> 0);
}
var oi = /\s*!(important)?/i;
function R1(e) {
  return typeof e == "string" ? oi.test(e) : !1;
}
function P1(e) {
  return typeof e == "string" ? e.replace(oi, "").trim() : e;
}
function li(e) {
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
}, k1 = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function ui(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((n) => {
    if (k1.has(n))
      return;
    const a = t[n], s = r[n];
    qt(a) && qt(s) ? t[n] = ui(a, s) : t[n] = s;
  }), t), {});
}
var D1 = (e) => e != null;
function ci(e, t, r = {}) {
  const { stop: n, getKey: a } = r;
  function s(i, l = []) {
    if (C1(i)) {
      const u = {};
      for (const [c, d] of Object.entries(i)) {
        const p = (a == null ? void 0 : a(c, d)) ?? c, h = [...l, p];
        if (n != null && n(i, h))
          return t(i, l);
        const g = s(d, h);
        D1(g) && (u[p] = g);
      }
      return u;
    }
    return t(i, l);
  }
  return s(e);
}
function L1(e, t) {
  return e.reduce(
    (r, n, a) => {
      const s = t[a];
      return n != null && (r[s] = n), r;
    },
    {}
  );
}
function di(e, t, r = !0) {
  const { utility: n, conditions: a } = t, { hasShorthand: s, resolveShorthand: i } = n;
  return ci(
    e,
    (l) => Array.isArray(l) ? L1(l, a.breakpoints.keys) : l,
    {
      stop: (l) => Array.isArray(l),
      getKey: r ? (l) => s ? i(l) : l : void 0
    }
  );
}
var B1 = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, N1 = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function U1(e) {
  const { utility: t, hash: r, conditions: n = B1 } = e, a = (i) => [t.prefix, i].filter(Boolean).join("-"), s = (i, l) => {
    let u;
    if (r) {
      const c = [...n.finalize(i), l];
      u = a(t.toHash(c, O1));
    } else
      u = [...n.finalize(i), a(l)].join(":");
    return u;
  };
  return vr(({ base: i, ...l } = {}) => {
    const u = Object.assign(l, i), c = di(u, e), d = /* @__PURE__ */ new Set();
    return ci(c, (p, h) => {
      if (p == null)
        return;
      const g = R1(p), [y, ...m] = n.shift(h), v = A1(m), f = t.transform(y, P1(N1(p)));
      let S = s(v, f.className);
      g && (S = `${S}!`), d.add(S);
    }), Array.from(d).join(" ");
  });
}
function M1(...e) {
  return e.flat().filter((t) => qt(t) && Object.keys(w1(t)).length > 0);
}
function z1(e) {
  function t(a) {
    const s = M1(...a);
    return s.length === 1 ? s : s.map((i) => di(i, e));
  }
  function r(...a) {
    return ui(...t(a));
  }
  function n(...a) {
    return Object.assign({}, ...t(a));
  }
  return { mergeCss: vr(r), assignCss: n };
}
var j1 = /([A-Z])/g, Q1 = /^ms-/, q1 = vr((e) => e.startsWith("--") ? e : e.replace(j1, "-$1").replace(Q1, "-ms-").toLowerCase()), V1 = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${V1.split(",").join("|")}`;
const G1 = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", pi = new Set(G1.split(",")), H1 = /^@|&|&$/;
function Rn(e) {
  return pi.has(e) || H1.test(e);
}
const Y1 = /^_/, W1 = /&|@/;
function K1(e) {
  return e.map((t) => pi.has(t) ? t.replace(Y1, "") : W1.test(t) ? `[${li(t.trim())}]` : t);
}
function X1(e) {
  return e.sort((t, r) => {
    const n = Rn(t), a = Rn(r);
    return n && !a ? 1 : !n && a ? -1 : 0;
  });
}
const Z1 = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle", hi = /* @__PURE__ */ new Map(), fi = /* @__PURE__ */ new Map();
Z1.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [n, ...a] = r.split("/");
  hi.set(t, n), a.length && a.forEach((s) => {
    fi.set(s === "1" ? n : s, t);
  });
});
const Pn = (e) => fi.get(e) || e, gi = {
  conditions: {
    shift: X1,
    finalize: K1,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = Pn(e);
      return { className: `${hi.get(r) || q1(r)}_${li(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: Pn
  }
}, J1 = U1(gi), fe = (...e) => J1(mi(...e));
fe.raw = (...e) => mi(...e);
const { mergeCss: mi, assignCss: $x } = z1(gi), we = {
  searchBarRow: fe({
    display: "flex !important",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1rem",
    paddingBlock: "0.5rem",
    minBlockSize: "3rem"
  }),
  facets: fe({
    flex: "0 0 auto"
  }),
  search: fe({
    flex: "1 1 auto",
    minInlineSize: "15rem"
  }),
  import: fe({
    flex: "0 0 auto"
  }),
  visuallyHidden: fe({
    srOnly: !0
  })
}, ex = ({
  appId: e = "search"
}) => {
  const { showFacets: t, showImportModal: r } = vt().config;
  return /* @__PURE__ */ o.createElement(b, { id: `${e}.SearchBarRow` }, /* @__PURE__ */ o.createElement(
    "section",
    {
      className: we.searchBarRow,
      "aria-label": "Records search and filters"
    },
    t && /* @__PURE__ */ o.createElement("div", { className: we.facets }, /* @__PURE__ */ o.createElement(ii, null)),
    /* @__PURE__ */ o.createElement("div", { className: we.search }, /* @__PURE__ */ o.createElement(
      Ov,
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
    ), /* @__PURE__ */ o.createElement("span", { className: we.visuallyHidden }, "Type keywords to search through records. Press Enter to submit.")),
    r && /* @__PURE__ */ o.createElement("div", { className: we.import }, /* @__PURE__ */ o.createElement($1, null))
  ));
}, tx = () => {
  const { config: e } = vt();
  return /* @__PURE__ */ o.createElement(P, null, /* @__PURE__ */ o.createElement(P.Row, { verticalAlign: "middle" }, /* @__PURE__ */ o.createElement(P.Column, { width: 4, textAlign: "left" }, /* @__PURE__ */ o.createElement(lv, { label: (t) => /* @__PURE__ */ o.createElement("div", null, t, " item(s)") })), /* @__PURE__ */ o.createElement(P.Column, { width: 8, textAlign: "center" }, /* @__PURE__ */ o.createElement(yv, { options: { size: "mini" } })), /* @__PURE__ */ o.createElement(P.Column, { width: 4, textAlign: "right" }, /* @__PURE__ */ o.createElement(
    Av,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ o.createElement("p", null, t, " results per page")
    }
  ))));
}, yi = ({
  config: e = {},
  overriddenComponents: t = {}
}) => {
  var s, i, l, u, c;
  const r = {
    ...J,
    ...e,
    initialQueryState: {
      ...J.initialQueryState,
      ...e.initialQueryState
    },
    layoutOptions: {
      ...J.layoutOptions,
      ...e.layoutOptions
    },
    paginationOptions: {
      ...J.paginationOptions,
      ...e.paginationOptions,
      resultsPerPage: ((s = e.paginationOptions) == null ? void 0 : s.resultsPerPage) || J.paginationOptions.resultsPerPage
    },
    searchApi: {
      ...J.searchApi,
      ...e.searchApi,
      axios: {
        ...J.searchApi.axios,
        ...(i = e.searchApi) == null ? void 0 : i.axios,
        headers: {
          ...J.searchApi.axios.headers,
          ...(u = (l = e.searchApi) == null ? void 0 : l.axios) == null ? void 0 : u.headers
        }
      },
      invenio: {
        ...J.searchApi.invenio,
        ...(c = e.searchApi) == null ? void 0 : c.invenio
      }
    },
    showFacets: e.showFacets ?? !0,
    showImportModal: e.showImportModal ?? !0,
    showSearchFooter: e.showSearchFooter ?? !0
  }, n = new ya(r.searchApi), a = {
    [`${r.appId}.ResultsList.item`]: eS,
    [`${r.appId}.ResultsList.container`]: tS,
    [`${r.appId}.SearchFacets`]: ii,
    ...t
  };
  return /* @__PURE__ */ o.createElement(Ei.Provider, { value: a }, /* @__PURE__ */ o.createElement(
    Hb,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ o.createElement(zv, { config: r }, /* @__PURE__ */ o.createElement(ex, { appId: r.appId }), /* @__PURE__ */ o.createElement(xv, null, /* @__PURE__ */ o.createElement(dv, null), /* @__PURE__ */ o.createElement(es, null)), r.showSearchFooter && /* @__PURE__ */ o.createElement(tx, null))
  ));
}, rx = ({
  status: e,
  children: t,
  ...r
}) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ o.createElement(le, { color: "red", ...r }, /* @__PURE__ */ o.createElement(F, { name: "warning sign" }), t) : e === "success" || e === "validated" || e === "created" ? /* @__PURE__ */ o.createElement(le, { color: "green", ...r }, /* @__PURE__ */ o.createElement(F, { name: "check circle" }), t) : e === "importing" || e === "validating" ? /* @__PURE__ */ o.createElement(le, { color: "blue", ...r }, /* @__PURE__ */ o.createElement(F, { name: "spinner", loading: !0 }), t) : /* @__PURE__ */ o.createElement(le, { ...r }, t), bi = Si(
  void 0
), nx = ({
  taskId: e,
  children: t
}) => /* @__PURE__ */ o.createElement(bi.Provider, { value: { taskId: e } }, /* @__PURE__ */ o.createElement(
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
)), ax = () => {
  const e = x(bi);
  if (!e)
    throw new Error("useTaskDetails must be used within a TaskDetailsProvider");
  return e;
}, sx = ({ children: e }) => /* @__PURE__ */ o.createElement(Bn, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ o.createElement(Nn, null, /* @__PURE__ */ o.createElement(at, null, /* @__PURE__ */ o.createElement(M, null, "ID"), /* @__PURE__ */ o.createElement(M, null, "Title"), /* @__PURE__ */ o.createElement(M, null, "Status"), /* @__PURE__ */ o.createElement(M, null))), /* @__PURE__ */ o.createElement(Un, null, e)), ix = ({
  openModal: e,
  setOpenModal: t,
  result: r
}) => /* @__PURE__ */ o.createElement(Te, { open: e, onClose: () => t(!1), closeIcon: !0 }, /* @__PURE__ */ o.createElement(Te.Header, null, "Record Errors"), /* @__PURE__ */ o.createElement(Te.Content, null, r.errors && r.errors.length > 0 ? /* @__PURE__ */ o.createElement(z, { negative: !0, icon: !0 }, /* @__PURE__ */ o.createElement(F, { name: "exclamation triangle" }), /* @__PURE__ */ o.createElement(z.Content, null, /* @__PURE__ */ o.createElement(z.Header, null, "Serializer validation failed"), /* @__PURE__ */ o.createElement(Ge, { bulleted: !0 }, r.errors.map((n) => /* @__PURE__ */ o.createElement(Ge.Item, { key: `${n.type}-${r.id}` }, n.msg))))) : /* @__PURE__ */ o.createElement(z, { positive: !0, icon: !0 }, /* @__PURE__ */ o.createElement(F, { name: "check circle" }), /* @__PURE__ */ o.createElement(z.Content, null, /* @__PURE__ */ o.createElement(z.Header, null, "Validation successful"), "No errors found for this record."))), /* @__PURE__ */ o.createElement(Te.Actions, null, /* @__PURE__ */ o.createElement(j, { onClick: () => t(!1), content: "Close", primary: !0 }))), ox = ({
  result: e,
  index: t
}) => {
  var p;
  const [r, n] = te(
    "idle"
  ), [a, s] = te(!1);
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
  }, l = e.errors && e.errors.length > 0, u = Gv(e.status), c = (h) => {
    if (h === "red")
      return "times";
    if (h === "green")
      return "check";
  }, d = [
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
      key: "details",
      text: "View Details",
      value: "details",
      icon: "eye",
      disabled: !0,
      onClick: () => {
        console.log("View details for:", e.id);
      }
    }
  ];
  return /* @__PURE__ */ o.createElement(at, { key: t }, /* @__PURE__ */ o.createElement(U, null, /* @__PURE__ */ o.createElement("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem" } }, /* @__PURE__ */ o.createElement("code", { style: { fontSize: "0.9em", color: "#666" } }, e.id.length > 20 ? `${e.id.substring(0, 20)}…` : e.id), /* @__PURE__ */ o.createElement(
    _r,
    {
      content: r === "copied" ? "Copied!" : "Copy ID",
      trigger: /* @__PURE__ */ o.createElement(
        j,
        {
          size: "mini",
          circular: !0,
          icon: !0,
          loading: r === "copying",
          onClick: i,
          color: r === "copied" ? "green" : void 0
        },
        /* @__PURE__ */ o.createElement(F, { name: r === "copied" ? "check" : "copy" })
      ),
      position: "top center",
      size: "mini"
    }
  ))), /* @__PURE__ */ o.createElement(U, null, /* @__PURE__ */ o.createElement("div", { style: { maxWidth: "300px" } }, ((p = e.src_data) == null ? void 0 : p.title) || /* @__PURE__ */ o.createElement("em", { style: { color: "#999" } }, "No Title Available"))), /* @__PURE__ */ o.createElement(U, null, /* @__PURE__ */ o.createElement(le, { color: u, size: "small" }, /* @__PURE__ */ o.createElement(F, { name: c(u) || "circle notched" }), Ze(e.status)), l && /* @__PURE__ */ o.createElement(
    _r,
    {
      content: `${e.errors.length} error${e.errors.length > 1 ? "s" : ""} found`,
      trigger: /* @__PURE__ */ o.createElement(
        F,
        {
          name: "exclamation triangle",
          color: "red",
          style: { marginLeft: "0.5rem", cursor: "help" }
        }
      ),
      position: "top center",
      size: "mini"
    }
  )), /* @__PURE__ */ o.createElement(U, { textAlign: "right" }, /* @__PURE__ */ o.createElement(
    ne,
    {
      button: !0,
      className: "icon",
      floating: !0,
      labeled: !0,
      icon: "ellipsis horizontal",
      text: "Actions",
      size: "mini"
    },
    /* @__PURE__ */ o.createElement(ne.Menu, null, d.map((h) => /* @__PURE__ */ o.createElement(
      ne.Item,
      {
        key: h.key,
        icon: h.icon,
        text: h.text,
        disabled: h.disabled,
        onClick: h.onClick
      }
    )))
  ), /* @__PURE__ */ o.createElement(
    ix,
    {
      setOpenModal: s,
      openModal: a,
      result: e
    }
  )));
}, lx = () => {
  const { taskId: e } = ax(), t = {
    "search.SearchBarRow": () => null,
    "search.ResultsList.container": sx,
    "search.ResultsList.item": ox
  };
  return /* @__PURE__ */ o.createElement("div", null, /* @__PURE__ */ o.createElement(ge, { as: "h3" }, "Task Records"), /* @__PURE__ */ o.createElement(
    yi,
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
}, ux = ({ taskId: e }) => {
  var f, S, w, O, q, C;
  const [t, r] = te(null), [n, a] = te(!0), [s, i] = te(null), { getStatus: l, isGettingStatus: u } = Ss(e, {
    onStatusChangeSuccess: r
  }), c = ee(async () => {
    try {
      a(!0), i(null);
      const B = await Xv(e);
      if (!B)
        throw new Error("Task not found");
      r(B);
    } catch (B) {
      console.error("Error fetching task details:", B), i(
        B instanceof Error ? B.message : "Failed to fetch task details"
      );
    } finally {
      a(!1);
    }
  }, [e]);
  if (nt(() => {
    e && c();
  }, [e, c]), n || u)
    return /* @__PURE__ */ o.createElement(de, null, /* @__PURE__ */ o.createElement(Ln, { content: "Loading task details..." }));
  if (s)
    return /* @__PURE__ */ o.createElement(z, { negative: !0, icon: !0 }, /* @__PURE__ */ o.createElement(F, { name: "exclamation triangle" }), /* @__PURE__ */ o.createElement(z.Content, null, /* @__PURE__ */ o.createElement(z.Header, null, "Error Loading Task"), s));
  if (!t)
    return /* @__PURE__ */ o.createElement(z, { warning: !0, icon: !0 }, /* @__PURE__ */ o.createElement(F, { name: "search" }), /* @__PURE__ */ o.createElement(z.Content, null, /* @__PURE__ */ o.createElement(z.Header, null, "Task Not Found"), "The requested task could not be found."));
  const d = ((f = t.records_status) == null ? void 0 : f.total_records) || 0, p = ((S = t.records_status) == null ? void 0 : S.validated) || 0, h = ((w = t.records_status) == null ? void 0 : w.success) || 0, g = (((O = t.records_status) == null ? void 0 : O["import failed"]) || 0) + (((q = t.records_status) == null ? void 0 : q["validation failed"]) || 0) + (((C = t.records_status) == null ? void 0 : C["serializer validation failed"]) || 0), y = d > 0 ? p / d * 100 : 0, m = d > 0 ? h / d * 100 : 0, v = d > 0 ? g / d * 100 : 0;
  return /* @__PURE__ */ o.createElement(nx, { taskId: e }, /* @__PURE__ */ o.createElement(de.Group, { compact: !0 }, /* @__PURE__ */ o.createElement(de, null, /* @__PURE__ */ o.createElement(P, null, /* @__PURE__ */ o.createElement(P.Row, { verticalAlign: "middle" }, /* @__PURE__ */ o.createElement(P.Column, { width: 8, verticalAlign: "middle" }, /* @__PURE__ */ o.createElement(ge, { as: "h2" }, /* @__PURE__ */ o.createElement(F, { name: "tasks", size: "huge" }), /* @__PURE__ */ o.createElement(ge.Content, null, t.title, t.description && /* @__PURE__ */ o.createElement(ge.Subheader, null, t.description)))), /* @__PURE__ */ o.createElement(P.Column, { width: 8, textAlign: "right" }, /* @__PURE__ */ o.createElement(de, { basic: !0, size: "small", horizontal: !0 }, t.status && /* @__PURE__ */ o.createElement(rx, { size: "large", status: t.status }, Ze(t.status)), /* @__PURE__ */ o.createElement(j.Group, { size: "small" }, /* @__PURE__ */ o.createElement(
    j,
    {
      color: "blue",
      icon: "refresh",
      content: "Check Status",
      onClick: () => l(),
      loading: n
    }
  ), /* @__PURE__ */ o.createElement(
    j,
    {
      disabled: !0,
      color: "green",
      icon: "play",
      content: "Run Task"
    }
  ))))))), d > 0 && /* @__PURE__ */ o.createElement(de, null, /* @__PURE__ */ o.createElement(ge, { as: "h4" }, /* @__PURE__ */ o.createElement(F, { name: "chart bar" }), "Progress Overview"), /* @__PURE__ */ o.createElement(Y.Group, { widths: "three", size: "small" }, /* @__PURE__ */ o.createElement(Y, { color: "blue" }, /* @__PURE__ */ o.createElement(Y.Value, null, p), /* @__PURE__ */ o.createElement(Y.Label, null, "Validated")), /* @__PURE__ */ o.createElement(Y, { color: "red" }, /* @__PURE__ */ o.createElement(Y.Value, null, g), /* @__PURE__ */ o.createElement(Y.Label, null, "With Errors")), /* @__PURE__ */ o.createElement(Y, { color: "green" }, /* @__PURE__ */ o.createElement(Y.Value, null, h), /* @__PURE__ */ o.createElement(Y.Label, null, "Imported"))), /* @__PURE__ */ o.createElement(Ai, null), /* @__PURE__ */ o.createElement(P, { columns: 3, divided: !0 }, /* @__PURE__ */ o.createElement(P.Column, null, /* @__PURE__ */ o.createElement("div", { style: { textAlign: "center", marginBottom: "0.5rem" } }, /* @__PURE__ */ o.createElement("strong", null, "Validation Progress")), /* @__PURE__ */ o.createElement(
    Et,
    {
      percent: y,
      color: "blue",
      size: "small"
    },
    p,
    " / ",
    d
  )), /* @__PURE__ */ o.createElement(P.Column, null, /* @__PURE__ */ o.createElement("div", { style: { textAlign: "center", marginBottom: "0.5rem" } }, /* @__PURE__ */ o.createElement("strong", null, "Error Records")), /* @__PURE__ */ o.createElement(Et, { percent: v, color: "red", size: "small" }, g, " / ", d)), /* @__PURE__ */ o.createElement(P.Column, null, /* @__PURE__ */ o.createElement("div", { style: { textAlign: "center", marginBottom: "0.5rem" } }, /* @__PURE__ */ o.createElement("strong", null, "Import Progress")), /* @__PURE__ */ o.createElement(Et, { percent: m, color: "green", size: "small" }, h, " / ", d))))), /* @__PURE__ */ o.createElement(lx, null));
}, xx = {
  Search: yi,
  TaskDetails: ux
}, Cx = {
  CREATED: "created",
  VALIDATING: "validating",
  SERIALIZER_VALIDATION_FAILED: "serializer validation failed",
  VALIDATION_FAILED: "validation failed",
  VALIDATED: "validated",
  IMPORT_FAILED: "import failed",
  IMPORTED: "success"
}, wx = {
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
  xx as BulkImporter,
  $1 as ImportModal,
  wx as ImporterTaskStates,
  Cx as InvenioImporterRecordStatus,
  yi as Search,
  ux as TaskDetails,
  ox as TaskRecordItem,
  Ze as capitalizeFirstLetter,
  Ex as createSearchApi,
  _x as createSearchApiConfig,
  jv as formatDate,
  Vv as getCsrfToken,
  Gv as getStatusColor
};
