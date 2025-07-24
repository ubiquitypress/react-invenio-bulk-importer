import s, { Component as D, useContext as F, useEffect as Ue, useCallback as O, Fragment as Jt, useState as L, useMemo as Us, createContext as Ns, useRef as zs } from "react";
import b, { OverridableContext as Ms } from "react-overridable";
import Ze from "axios";
import _e from "qs";
import { connect as R, Provider as js } from "react-redux";
import { Label as ae, Icon as S, Input as jn, Button as N, List as _, Checkbox as Qn, Card as P, Segment as Y, Header as fe, Menu as Pe, Pagination as Qs, Item as ye, Loader as qn, Dropdown as oe, Image as qs, Dimmer as Vs, TableRow as ut, TableCell as G, Table as w, TableHeader as Vn, TableHeaderCell as H, TableBody as Gn, Form as Ee, Modal as se, ModalHeader as Gs, ModalContent as Hs, Grid as M, Statistic as Ft, Progress as Ys, Message as U, Tab as Ie, Popup as Ar, Container as Ws } from "semantic-ui-react";
import { combineReducers as Ks, createStore as Xs, applyMiddleware as Zs } from "redux";
import Js from "redux-thunk";
import eo from "lodash";
import { TextField as to, SelectField as It, TextAreaField as ro, BaseForm as no } from "react-invenio-forms";
import { useFormikContext as ao } from "formik";
var Ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function k(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var io = Object.prototype;
function so(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || io;
  return e === r;
}
var dt = so;
function oo(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Hn = oo, lo = Hn, co = lo(Object.keys, Object), uo = co, po = dt, fo = uo, ho = Object.prototype, go = ho.hasOwnProperty;
function mo(e) {
  if (!po(e))
    return fo(e);
  var t = [];
  for (var r in Object(e))
    go.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Yn = mo, yo = typeof Ge == "object" && Ge && Ge.Object === Object && Ge, Wn = yo, bo = Wn, vo = typeof self == "object" && self && self.Object === Object && self, Eo = bo || vo || Function("return this")(), ee = Eo, So = ee, _o = So.Symbol, $e = _o, Or = $e, Kn = Object.prototype, $o = Kn.hasOwnProperty, xo = Kn.toString, Ae = Or ? Or.toStringTag : void 0;
function Co(e) {
  var t = $o.call(e, Ae), r = e[Ae];
  try {
    e[Ae] = void 0;
    var n = !0;
  } catch {
  }
  var a = xo.call(e);
  return n && (t ? e[Ae] = r : delete e[Ae]), a;
}
var wo = Co, To = Object.prototype, Fo = To.toString;
function Io(e) {
  return Fo.call(e);
}
var Ao = Io, Rr = $e, Oo = wo, Ro = Ao, ko = "[object Null]", Po = "[object Undefined]", kr = Rr ? Rr.toStringTag : void 0;
function Do(e) {
  return e == null ? e === void 0 ? Po : ko : kr && kr in Object(e) ? Oo(e) : Ro(e);
}
var ce = Do;
function Lo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ie = Lo;
const Bo = /* @__PURE__ */ k(ie);
var Uo = ce, No = ie, zo = "[object AsyncFunction]", Mo = "[object Function]", jo = "[object GeneratorFunction]", Qo = "[object Proxy]";
function qo(e) {
  if (!No(e))
    return !1;
  var t = Uo(e);
  return t == Mo || t == jo || t == zo || t == Qo;
}
var Xn = qo, Vo = ee, Go = Vo["__core-js_shared__"], Ho = Go, At = Ho, Pr = function() {
  var e = /[^.]+$/.exec(At && At.keys && At.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Yo(e) {
  return !!Pr && Pr in e;
}
var Wo = Yo, Ko = Function.prototype, Xo = Ko.toString;
function Zo(e) {
  if (e != null) {
    try {
      return Xo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Zn = Zo, Jo = Xn, el = Wo, tl = ie, rl = Zn, nl = /[\\^$.*+?()[\]{}|]/g, al = /^\[object .+?Constructor\]$/, il = Function.prototype, sl = Object.prototype, ol = il.toString, ll = sl.hasOwnProperty, cl = RegExp(
  "^" + ol.call(ll).replace(nl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ul(e) {
  if (!tl(e) || el(e))
    return !1;
  var t = Jo(e) ? cl : al;
  return t.test(rl(e));
}
var dl = ul;
function pl(e, t) {
  return e == null ? void 0 : e[t];
}
var fl = pl, hl = dl, gl = fl;
function ml(e, t) {
  var r = gl(e, t);
  return hl(r) ? r : void 0;
}
var he = ml, yl = he, bl = ee, vl = yl(bl, "DataView"), El = vl, Sl = he, _l = ee, $l = Sl(_l, "Map"), er = $l, xl = he, Cl = ee, wl = xl(Cl, "Promise"), Tl = wl, Fl = he, Il = ee, Al = Fl(Il, "Set"), Ol = Al, Rl = he, kl = ee, Pl = Rl(kl, "WeakMap"), Dl = Pl, Dt = El, Lt = er, Bt = Tl, Ut = Ol, Nt = Dl, Jn = ce, xe = Zn, Dr = "[object Map]", Ll = "[object Object]", Lr = "[object Promise]", Br = "[object Set]", Ur = "[object WeakMap]", Nr = "[object DataView]", Bl = xe(Dt), Ul = xe(Lt), Nl = xe(Bt), zl = xe(Ut), Ml = xe(Nt), de = Jn;
(Dt && de(new Dt(new ArrayBuffer(1))) != Nr || Lt && de(new Lt()) != Dr || Bt && de(Bt.resolve()) != Lr || Ut && de(new Ut()) != Br || Nt && de(new Nt()) != Ur) && (de = function(e) {
  var t = Jn(e), r = t == Ll ? e.constructor : void 0, n = r ? xe(r) : "";
  if (n)
    switch (n) {
      case Bl:
        return Nr;
      case Ul:
        return Dr;
      case Nl:
        return Lr;
      case zl:
        return Br;
      case Ml:
        return Ur;
    }
  return t;
});
var Ne = de;
function jl(e) {
  return e != null && typeof e == "object";
}
var te = jl, Ql = ce, ql = te, Vl = "[object Arguments]";
function Gl(e) {
  return ql(e) && Ql(e) == Vl;
}
var Hl = Gl, zr = Hl, Yl = te, ea = Object.prototype, Wl = ea.hasOwnProperty, Kl = ea.propertyIsEnumerable, Xl = zr(function() {
  return arguments;
}()) ? zr : function(e) {
  return Yl(e) && Wl.call(e, "callee") && !Kl.call(e, "callee");
}, pt = Xl, Zl = Array.isArray, Q = Zl;
const ta = /* @__PURE__ */ k(Q);
var Jl = 9007199254740991;
function ec(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Jl;
}
var tr = ec, tc = Xn, rc = tr;
function nc(e) {
  return e != null && rc(e.length) && !tc(e);
}
var ft = nc, tt = { exports: {} };
function ac() {
  return !1;
}
var ic = ac;
tt.exports;
(function(e, t) {
  var r = ee, n = ic, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, l = o ? r.Buffer : void 0, c = l ? l.isBuffer : void 0, u = c || n;
  e.exports = u;
})(tt, tt.exports);
var ht = tt.exports, sc = ce, oc = tr, lc = te, cc = "[object Arguments]", uc = "[object Array]", dc = "[object Boolean]", pc = "[object Date]", fc = "[object Error]", hc = "[object Function]", gc = "[object Map]", mc = "[object Number]", yc = "[object Object]", bc = "[object RegExp]", vc = "[object Set]", Ec = "[object String]", Sc = "[object WeakMap]", _c = "[object ArrayBuffer]", $c = "[object DataView]", xc = "[object Float32Array]", Cc = "[object Float64Array]", wc = "[object Int8Array]", Tc = "[object Int16Array]", Fc = "[object Int32Array]", Ic = "[object Uint8Array]", Ac = "[object Uint8ClampedArray]", Oc = "[object Uint16Array]", Rc = "[object Uint32Array]", C = {};
C[xc] = C[Cc] = C[wc] = C[Tc] = C[Fc] = C[Ic] = C[Ac] = C[Oc] = C[Rc] = !0;
C[cc] = C[uc] = C[_c] = C[dc] = C[$c] = C[pc] = C[fc] = C[hc] = C[gc] = C[mc] = C[yc] = C[bc] = C[vc] = C[Ec] = C[Sc] = !1;
function kc(e) {
  return lc(e) && oc(e.length) && !!C[sc(e)];
}
var Pc = kc;
function Dc(e) {
  return function(t) {
    return e(t);
  };
}
var rr = Dc, rt = { exports: {} };
rt.exports;
(function(e, t) {
  var r = Wn, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, l = function() {
    try {
      var c = a && a.require && a.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(rt, rt.exports);
var nr = rt.exports, Lc = Pc, Bc = rr, Mr = nr, jr = Mr && Mr.isTypedArray, Uc = jr ? Bc(jr) : Lc, ar = Uc, Nc = Yn, zc = Ne, Mc = pt, jc = Q, Qc = ft, qc = ht, Vc = dt, Gc = ar, Hc = "[object Map]", Yc = "[object Set]", Wc = Object.prototype, Kc = Wc.hasOwnProperty;
function Xc(e) {
  if (e == null)
    return !0;
  if (Qc(e) && (jc(e) || typeof e == "string" || typeof e.splice == "function" || qc(e) || Gc(e) || Mc(e)))
    return !e.length;
  var t = zc(e);
  if (t == Hc || t == Yc)
    return !e.size;
  if (Vc(e))
    return !Nc(e).length;
  for (var r in e)
    if (Kc.call(e, r))
      return !1;
  return !0;
}
var Zc = Xc;
const re = /* @__PURE__ */ k(Zc);
var Jc = ce, eu = te, tu = "[object Symbol]";
function ru(e) {
  return typeof e == "symbol" || eu(e) && Jc(e) == tu;
}
var ir = ru, nu = Q, au = ir, iu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, su = /^\w*$/;
function ou(e, t) {
  if (nu(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || au(e) ? !0 : su.test(e) || !iu.test(e) || t != null && e in Object(t);
}
var sr = ou, lu = he, cu = lu(Object, "create"), gt = cu, Qr = gt;
function uu() {
  this.__data__ = Qr ? Qr(null) : {}, this.size = 0;
}
var du = uu;
function pu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var fu = pu, hu = gt, gu = "__lodash_hash_undefined__", mu = Object.prototype, yu = mu.hasOwnProperty;
function bu(e) {
  var t = this.__data__;
  if (hu) {
    var r = t[e];
    return r === gu ? void 0 : r;
  }
  return yu.call(t, e) ? t[e] : void 0;
}
var vu = bu, Eu = gt, Su = Object.prototype, _u = Su.hasOwnProperty;
function $u(e) {
  var t = this.__data__;
  return Eu ? t[e] !== void 0 : _u.call(t, e);
}
var xu = $u, Cu = gt, wu = "__lodash_hash_undefined__";
function Tu(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Cu && t === void 0 ? wu : t, this;
}
var Fu = Tu, Iu = du, Au = fu, Ou = vu, Ru = xu, ku = Fu;
function Ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ce.prototype.clear = Iu;
Ce.prototype.delete = Au;
Ce.prototype.get = Ou;
Ce.prototype.has = Ru;
Ce.prototype.set = ku;
var Pu = Ce;
function Du() {
  this.__data__ = [], this.size = 0;
}
var Lu = Du;
function Bu(e, t) {
  return e === t || e !== e && t !== t;
}
var mt = Bu, Uu = mt;
function Nu(e, t) {
  for (var r = e.length; r--; )
    if (Uu(e[r][0], t))
      return r;
  return -1;
}
var yt = Nu, zu = yt, Mu = Array.prototype, ju = Mu.splice;
function Qu(e) {
  var t = this.__data__, r = zu(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : ju.call(t, r, 1), --this.size, !0;
}
var qu = Qu, Vu = yt;
function Gu(e) {
  var t = this.__data__, r = Vu(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Hu = Gu, Yu = yt;
function Wu(e) {
  return Yu(this.__data__, e) > -1;
}
var Ku = Wu, Xu = yt;
function Zu(e, t) {
  var r = this.__data__, n = Xu(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Ju = Zu, ed = Lu, td = qu, rd = Hu, nd = Ku, ad = Ju;
function we(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
we.prototype.clear = ed;
we.prototype.delete = td;
we.prototype.get = rd;
we.prototype.has = nd;
we.prototype.set = ad;
var bt = we, qr = Pu, id = bt, sd = er;
function od() {
  this.size = 0, this.__data__ = {
    hash: new qr(),
    map: new (sd || id)(),
    string: new qr()
  };
}
var ld = od;
function cd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var ud = cd, dd = ud;
function pd(e, t) {
  var r = e.__data__;
  return dd(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var vt = pd, fd = vt;
function hd(e) {
  var t = fd(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var gd = hd, md = vt;
function yd(e) {
  return md(this, e).get(e);
}
var bd = yd, vd = vt;
function Ed(e) {
  return vd(this, e).has(e);
}
var Sd = Ed, _d = vt;
function $d(e, t) {
  var r = _d(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var xd = $d, Cd = ld, wd = gd, Td = bd, Fd = Sd, Id = xd;
function Te(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Te.prototype.clear = Cd;
Te.prototype.delete = wd;
Te.prototype.get = Td;
Te.prototype.has = Fd;
Te.prototype.set = Id;
var or = Te, ra = or, Ad = "Expected a function";
function lr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ad);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (lr.Cache || ra)(), r;
}
lr.Cache = ra;
var Od = lr, Rd = Od, kd = 500;
function Pd(e) {
  var t = Rd(e, function(n) {
    return r.size === kd && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Dd = Pd, Ld = Dd, Bd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ud = /\\(\\)?/g, Nd = Ld(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Bd, function(r, n, a, i) {
    t.push(a ? i.replace(Ud, "$1") : n || r);
  }), t;
}), zd = Nd;
function Md(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var jd = Md, Vr = $e, Qd = jd, qd = Q, Vd = ir, Gd = 1 / 0, Gr = Vr ? Vr.prototype : void 0, Hr = Gr ? Gr.toString : void 0;
function na(e) {
  if (typeof e == "string")
    return e;
  if (qd(e))
    return Qd(e, na) + "";
  if (Vd(e))
    return Hr ? Hr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Gd ? "-0" : t;
}
var Hd = na, Yd = Hd;
function Wd(e) {
  return e == null ? "" : Yd(e);
}
var ze = Wd, Kd = Q, Xd = sr, Zd = zd, Jd = ze;
function ep(e, t) {
  return Kd(e) ? e : Xd(e, t) ? [e] : Zd(Jd(e));
}
var Et = ep, tp = ir, rp = 1 / 0;
function np(e) {
  if (typeof e == "string" || tp(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -rp ? "-0" : t;
}
var Me = np, ap = Et, ip = Me;
function sp(e, t) {
  t = ap(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[ip(t[r++])];
  return r && r == n ? e : void 0;
}
var cr = sp, op = cr;
function lp(e, t, r) {
  var n = e == null ? void 0 : op(e, t);
  return n === void 0 ? r : n;
}
var aa = lp;
const Oe = /* @__PURE__ */ k(aa);
function cp(e, t) {
  return e != null && t in Object(e);
}
var up = cp, dp = 9007199254740991, pp = /^(?:0|[1-9]\d*)$/;
function fp(e, t) {
  var r = typeof e;
  return t = t ?? dp, !!t && (r == "number" || r != "symbol" && pp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var St = fp, hp = Et, gp = pt, mp = Q, yp = St, bp = tr, vp = Me;
function Ep(e, t, r) {
  t = hp(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = vp(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && bp(a) && yp(o, a) && (mp(e) || gp(e)));
}
var ia = Ep, Sp = up, _p = ia;
function $p(e, t) {
  return e != null && _p(e, t, Sp);
}
var ur = $p;
const xp = /* @__PURE__ */ k(ur);
var Cp = he, wp = function() {
  try {
    var e = Cp(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), sa = wp, Yr = sa;
function Tp(e, t, r) {
  t == "__proto__" && Yr ? Yr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var _t = Tp, Fp = _t, Ip = mt, Ap = Object.prototype, Op = Ap.hasOwnProperty;
function Rp(e, t, r) {
  var n = e[t];
  (!(Op.call(e, t) && Ip(n, r)) || r === void 0 && !(t in e)) && Fp(e, t, r);
}
var dr = Rp, kp = dr, Pp = _t;
function Dp(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var i = -1, o = t.length; ++i < o; ) {
    var l = t[i], c = n ? n(r[l], e[l], l, r, e) : void 0;
    c === void 0 && (c = e[l]), a ? Pp(r, l, c) : kp(r, l, c);
  }
  return r;
}
var je = Dp;
function Lp(e) {
  return e;
}
var pr = Lp;
function Bp(e, t, r) {
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
var Up = Bp, Np = Up, Wr = Math.max;
function zp(e, t, r) {
  return t = Wr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = Wr(n.length - t, 0), o = Array(i); ++a < i; )
      o[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(o), Np(e, this, l);
  };
}
var oa = zp;
function Mp(e) {
  return function() {
    return e;
  };
}
var jp = Mp, Qp = jp, Kr = sa, qp = pr, Vp = Kr ? function(e, t) {
  return Kr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Qp(t),
    writable: !0
  });
} : qp, Gp = Vp, Hp = 800, Yp = 16, Wp = Date.now;
function Kp(e) {
  var t = 0, r = 0;
  return function() {
    var n = Wp(), a = Yp - (n - r);
    if (r = n, a > 0) {
      if (++t >= Hp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Xp = Kp, Zp = Gp, Jp = Xp, ef = Jp(Zp), la = ef, tf = pr, rf = oa, nf = la;
function af(e, t) {
  return nf(rf(e, t, tf), e + "");
}
var sf = af, of = mt, lf = ft, cf = St, uf = ie;
function df(e, t, r) {
  if (!uf(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? lf(r) && cf(t, r.length) : n == "string" && t in r) ? of(r[t], e) : !1;
}
var pf = df, ff = sf, hf = pf;
function gf(e) {
  return ff(function(t, r) {
    var n = -1, a = r.length, i = a > 1 ? r[a - 1] : void 0, o = a > 2 ? r[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0, o && hf(r[0], r[1], o) && (i = a < 3 ? void 0 : i, a = 1), t = Object(t); ++n < a; ) {
      var l = r[n];
      l && e(t, l, n, i);
    }
    return t;
  });
}
var mf = gf;
function yf(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var bf = yf, vf = bf, Ef = pt, Sf = Q, _f = ht, $f = St, xf = ar, Cf = Object.prototype, wf = Cf.hasOwnProperty;
function Tf(e, t) {
  var r = Sf(e), n = !r && Ef(e), a = !r && !n && _f(e), i = !r && !n && !a && xf(e), o = r || n || a || i, l = o ? vf(e.length, String) : [], c = l.length;
  for (var u in e)
    (t || wf.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    $f(u, c))) && l.push(u);
  return l;
}
var ca = Tf;
function Ff(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var If = Ff, Af = ie, Of = dt, Rf = If, kf = Object.prototype, Pf = kf.hasOwnProperty;
function Df(e) {
  if (!Af(e))
    return Rf(e);
  var t = Of(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Pf.call(e, n)) || r.push(n);
  return r;
}
var Lf = Df, Bf = ca, Uf = Lf, Nf = ft;
function zf(e) {
  return Nf(e) ? Bf(e, !0) : Uf(e);
}
var $t = zf, Mf = je, jf = mf, Qf = $t, qf = jf(function(e, t) {
  Mf(t, Qf(t), e);
}), Vf = qf, Gf = Vf;
const nt = /* @__PURE__ */ k(Gf);
function Hf(e) {
  return e && e.length ? e[0] : void 0;
}
var Yf = Hf;
const Wf = /* @__PURE__ */ k(Yf);
var Kf = dr, Xf = Et, Zf = St, Xr = ie, Jf = Me;
function eh(e, t, r, n) {
  if (!Xr(e))
    return e;
  t = Xf(t, e);
  for (var a = -1, i = t.length, o = i - 1, l = e; l != null && ++a < i; ) {
    var c = Jf(t[a]), u = r;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (a != o) {
      var d = l[c];
      u = n ? n(d, c, l) : void 0, u === void 0 && (u = Xr(d) ? d : Zf(t[a + 1]) ? [] : {});
    }
    Kf(l, c, u), l = l[c];
  }
  return e;
}
var th = eh, rh = cr, nh = th, ah = Et;
function ih(e, t, r) {
  for (var n = -1, a = t.length, i = {}; ++n < a; ) {
    var o = t[n], l = rh(e, o);
    r(l, o) && nh(i, ah(o, e), l);
  }
  return i;
}
var sh = ih, oh = sh, lh = ur;
function ch(e, t) {
  return oh(e, t, function(r, n) {
    return lh(e, n);
  });
}
var uh = ch;
function dh(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var fr = dh, Zr = $e, ph = pt, fh = Q, Jr = Zr ? Zr.isConcatSpreadable : void 0;
function hh(e) {
  return fh(e) || ph(e) || !!(Jr && e && e[Jr]);
}
var gh = hh, mh = fr, yh = gh;
function ua(e, t, r, n, a) {
  var i = -1, o = e.length;
  for (r || (r = yh), a || (a = []); ++i < o; ) {
    var l = e[i];
    t > 0 && r(l) ? t > 1 ? ua(l, t - 1, r, n, a) : mh(a, l) : n || (a[a.length] = l);
  }
  return a;
}
var bh = ua, vh = bh;
function Eh(e) {
  var t = e == null ? 0 : e.length;
  return t ? vh(e, 1) : [];
}
var Sh = Eh, _h = Sh, $h = oa, xh = la;
function Ch(e) {
  return xh($h(e, void 0, _h), e + "");
}
var wh = Ch, Th = uh, Fh = wh, Ih = Fh(function(e, t) {
  return e == null ? {} : Th(e, t);
}), Ah = Ih;
const Oh = /* @__PURE__ */ k(Ah);
var Rh = bt;
function kh() {
  this.__data__ = new Rh(), this.size = 0;
}
var Ph = kh;
function Dh(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Lh = Dh;
function Bh(e) {
  return this.__data__.get(e);
}
var Uh = Bh;
function Nh(e) {
  return this.__data__.has(e);
}
var zh = Nh, Mh = bt, jh = er, Qh = or, qh = 200;
function Vh(e, t) {
  var r = this.__data__;
  if (r instanceof Mh) {
    var n = r.__data__;
    if (!jh || n.length < qh - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Qh(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Gh = Vh, Hh = bt, Yh = Ph, Wh = Lh, Kh = Uh, Xh = zh, Zh = Gh;
function Fe(e) {
  var t = this.__data__ = new Hh(e);
  this.size = t.size;
}
Fe.prototype.clear = Yh;
Fe.prototype.delete = Wh;
Fe.prototype.get = Kh;
Fe.prototype.has = Xh;
Fe.prototype.set = Zh;
var hr = Fe;
function Jh(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var eg = Jh, tg = ca, rg = Yn, ng = ft;
function ag(e) {
  return ng(e) ? tg(e) : rg(e);
}
var Qe = ag, ig = je, sg = Qe;
function og(e, t) {
  return e && ig(t, sg(t), e);
}
var lg = og, cg = je, ug = $t;
function dg(e, t) {
  return e && cg(t, ug(t), e);
}
var pg = dg, at = { exports: {} };
at.exports;
(function(e, t) {
  var r = ee, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i ? r.Buffer : void 0, l = o ? o.allocUnsafe : void 0;
  function c(u, d) {
    if (d)
      return u.slice();
    var p = u.length, f = l ? l(p) : new u.constructor(p);
    return u.copy(f), f;
  }
  e.exports = c;
})(at, at.exports);
var fg = at.exports;
function hg(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var gg = hg;
function mg(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
var yg = mg;
function bg() {
  return [];
}
var da = bg, vg = yg, Eg = da, Sg = Object.prototype, _g = Sg.propertyIsEnumerable, en = Object.getOwnPropertySymbols, $g = en ? function(e) {
  return e == null ? [] : (e = Object(e), vg(en(e), function(t) {
    return _g.call(e, t);
  }));
} : Eg, gr = $g, xg = je, Cg = gr;
function wg(e, t) {
  return xg(e, Cg(e), t);
}
var Tg = wg, Fg = Hn, Ig = Fg(Object.getPrototypeOf, Object), pa = Ig, Ag = fr, Og = pa, Rg = gr, kg = da, Pg = Object.getOwnPropertySymbols, Dg = Pg ? function(e) {
  for (var t = []; e; )
    Ag(t, Rg(e)), e = Og(e);
  return t;
} : kg, fa = Dg, Lg = je, Bg = fa;
function Ug(e, t) {
  return Lg(e, Bg(e), t);
}
var Ng = Ug, zg = fr, Mg = Q;
function jg(e, t, r) {
  var n = t(e);
  return Mg(e) ? n : zg(n, r(e));
}
var ha = jg, Qg = ha, qg = gr, Vg = Qe;
function Gg(e) {
  return Qg(e, Vg, qg);
}
var ga = Gg, Hg = ha, Yg = fa, Wg = $t;
function Kg(e) {
  return Hg(e, Wg, Yg);
}
var Xg = Kg, Zg = Object.prototype, Jg = Zg.hasOwnProperty;
function em(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Jg.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var tm = em, rm = ee, nm = rm.Uint8Array, ma = nm, tn = ma;
function am(e) {
  var t = new e.constructor(e.byteLength);
  return new tn(t).set(new tn(e)), t;
}
var mr = am, im = mr;
function sm(e, t) {
  var r = t ? im(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var om = sm, lm = /\w*$/;
function cm(e) {
  var t = new e.constructor(e.source, lm.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var um = cm, rn = $e, nn = rn ? rn.prototype : void 0, an = nn ? nn.valueOf : void 0;
function dm(e) {
  return an ? Object(an.call(e)) : {};
}
var pm = dm, fm = mr;
function hm(e, t) {
  var r = t ? fm(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var gm = hm, mm = mr, ym = om, bm = um, vm = pm, Em = gm, Sm = "[object Boolean]", _m = "[object Date]", $m = "[object Map]", xm = "[object Number]", Cm = "[object RegExp]", wm = "[object Set]", Tm = "[object String]", Fm = "[object Symbol]", Im = "[object ArrayBuffer]", Am = "[object DataView]", Om = "[object Float32Array]", Rm = "[object Float64Array]", km = "[object Int8Array]", Pm = "[object Int16Array]", Dm = "[object Int32Array]", Lm = "[object Uint8Array]", Bm = "[object Uint8ClampedArray]", Um = "[object Uint16Array]", Nm = "[object Uint32Array]";
function zm(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Im:
      return mm(e);
    case Sm:
    case _m:
      return new n(+e);
    case Am:
      return ym(e, r);
    case Om:
    case Rm:
    case km:
    case Pm:
    case Dm:
    case Lm:
    case Bm:
    case Um:
    case Nm:
      return Em(e, r);
    case $m:
      return new n();
    case xm:
    case Tm:
      return new n(e);
    case Cm:
      return bm(e);
    case wm:
      return new n();
    case Fm:
      return vm(e);
  }
}
var Mm = zm, jm = ie, sn = Object.create, Qm = function() {
  function e() {
  }
  return function(t) {
    if (!jm(t))
      return {};
    if (sn)
      return sn(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), qm = Qm, Vm = qm, Gm = pa, Hm = dt;
function Ym(e) {
  return typeof e.constructor == "function" && !Hm(e) ? Vm(Gm(e)) : {};
}
var Wm = Ym, Km = Ne, Xm = te, Zm = "[object Map]";
function Jm(e) {
  return Xm(e) && Km(e) == Zm;
}
var ey = Jm, ty = ey, ry = rr, on = nr, ln = on && on.isMap, ny = ln ? ry(ln) : ty, ay = ny, iy = Ne, sy = te, oy = "[object Set]";
function ly(e) {
  return sy(e) && iy(e) == oy;
}
var cy = ly, uy = cy, dy = rr, cn = nr, un = cn && cn.isSet, py = un ? dy(un) : uy, fy = py, hy = hr, gy = eg, my = dr, yy = lg, by = pg, vy = fg, Ey = gg, Sy = Tg, _y = Ng, $y = ga, xy = Xg, Cy = Ne, wy = tm, Ty = Mm, Fy = Wm, Iy = Q, Ay = ht, Oy = ay, Ry = ie, ky = fy, Py = Qe, Dy = $t, Ly = 1, By = 2, Uy = 4, ya = "[object Arguments]", Ny = "[object Array]", zy = "[object Boolean]", My = "[object Date]", jy = "[object Error]", ba = "[object Function]", Qy = "[object GeneratorFunction]", qy = "[object Map]", Vy = "[object Number]", va = "[object Object]", Gy = "[object RegExp]", Hy = "[object Set]", Yy = "[object String]", Wy = "[object Symbol]", Ky = "[object WeakMap]", Xy = "[object ArrayBuffer]", Zy = "[object DataView]", Jy = "[object Float32Array]", eb = "[object Float64Array]", tb = "[object Int8Array]", rb = "[object Int16Array]", nb = "[object Int32Array]", ab = "[object Uint8Array]", ib = "[object Uint8ClampedArray]", sb = "[object Uint16Array]", ob = "[object Uint32Array]", $ = {};
$[ya] = $[Ny] = $[Xy] = $[Zy] = $[zy] = $[My] = $[Jy] = $[eb] = $[tb] = $[rb] = $[nb] = $[qy] = $[Vy] = $[va] = $[Gy] = $[Hy] = $[Yy] = $[Wy] = $[ab] = $[ib] = $[sb] = $[ob] = !0;
$[jy] = $[ba] = $[Ky] = !1;
function Je(e, t, r, n, a, i) {
  var o, l = t & Ly, c = t & By, u = t & Uy;
  if (r && (o = a ? r(e, n, a, i) : r(e)), o !== void 0)
    return o;
  if (!Ry(e))
    return e;
  var d = Iy(e);
  if (d) {
    if (o = wy(e), !l)
      return Ey(e, o);
  } else {
    var p = Cy(e), f = p == ba || p == Qy;
    if (Ay(e))
      return vy(e, l);
    if (p == va || p == ya || f && !a) {
      if (o = c || f ? {} : Fy(e), !l)
        return c ? _y(e, by(o, e)) : Sy(e, yy(o, e));
    } else {
      if (!$[p])
        return a ? e : {};
      o = Ty(e, p, l);
    }
  }
  i || (i = new hy());
  var h = i.get(e);
  if (h)
    return h;
  i.set(e, o), ky(e) ? e.forEach(function(v) {
    o.add(Je(v, t, r, v, e, i));
  }) : Oy(e) && e.forEach(function(v, m) {
    o.set(m, Je(v, t, r, m, e, i));
  });
  var y = u ? c ? xy : $y : c ? Dy : Py, g = d ? void 0 : y(e);
  return gy(g || e, function(v, m) {
    g && (m = v, v = e[m]), my(o, m, Je(v, t, r, m, e, i));
  }), o;
}
var lb = Je, cb = lb, ub = 1, db = 4;
function pb(e) {
  return cb(e, ub | db);
}
var fb = pb;
const Se = /* @__PURE__ */ k(fb);
var hb = ce, gb = te, mb = "[object Boolean]";
function yb(e) {
  return e === !0 || e === !1 || gb(e) && hb(e) == mb;
}
var bb = yb;
const vb = /* @__PURE__ */ k(bb);
var Eb = ce, Sb = Q, _b = te, $b = "[object String]";
function xb(e) {
  return typeof e == "string" || !Sb(e) && _b(e) && Eb(e) == $b;
}
var Cb = xb;
const wb = /* @__PURE__ */ k(Cb);
var Tb = ce, Fb = te, Ib = "[object Number]";
function Ab(e) {
  return typeof e == "number" || Fb(e) && Tb(e) == Ib;
}
var Ob = Ab;
const Rb = /* @__PURE__ */ k(Ob);
function yr() {
}
yr.prototype = new Error();
class dn {
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
    r !== null && (u.q = r), n !== null && (u.sort = n, a !== null && (u.sort = a === "desc" ? `-${n}` : n)), i > 0 && (u.page = i), o > 0 && (u.size = o), re(c) || nt(u, this._addFilters(c));
    const d = this._addFilters(l);
    return nt(u, d), _e.stringify(u, {
      arrayFormat: "repeat"
    });
  }
}
class kb {
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
function He(e, t) {
  return e.indexOf(t) === 0 && (e.length === t.length || e.indexOf(t + "&") === 0);
}
function Ot(e) {
  return _e.stringify({
    q: e
  });
}
function Pb(e) {
  return _e.parse(e).q;
}
function Ea(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = Ea(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function pn(e, t) {
  const r = Ot(e), n = t.map((o) => Ot(o));
  let a = !1;
  const i = n.filter((o) => {
    const l = He(o, r), c = He(r, o);
    return l && !a && (a = !0), !l && !c;
  });
  if (!a)
    i.push(r);
  else if (e.length === 3) {
    const l = Ea(e), c = Ot(l), u = i.some((d) => {
      const p = He(d, c), f = He(c, d);
      return p || f;
    });
    (re(i) || !u) && i.push(c);
  }
  return i.map((o) => Pb(o));
}
const Sa = (e, t) => {
  if (re(e))
    return;
  if (!ta(Wf(e)))
    return pn(e, t);
  let r = t;
  for (const n of e)
    r = pn(n, r);
  return r;
}, _a = (e, t, r) => {
  let n = Oh(t, r);
  return re(n.filters) || (n.filters = Sa(n.filters, e.filters)), n;
}, it = {
  queryString: "",
  suggestions: [],
  sortBy: null,
  sortOrder: null,
  page: -1,
  size: -1,
  filters: [],
  hiddenParams: [],
  layout: null
}, $a = Object.keys(it), Db = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, Lb = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class Bb {
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
    r !== null && (u.q = r), n !== null && (u.sort = n, a !== null && (u.sort = a === "desc" ? `-${n}` : n)), i > 0 && (u.page = i), o > 0 && (u.size = o), re(c) || nt(u, this._addFilters(c));
    const d = this._addFilters(l);
    return nt(u, d), _e.stringify(u, {
      arrayFormat: "repeat"
    });
  }
}
class xa {
  constructor(t) {
    this.axiosConfig = Oe(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = Ze.CancelToken;
  }
  validateAxiosConfig() {
    if (!xp(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = Oe(t, "interceptors.request", void 0), this.responseInterceptor = Oe(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: Bb,
      InvenioRequestSerializer: dn
    };
    return typeof t == "string" ? r[t] : t || dn;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), a = Oe(t, "invenio.responseSerializer", kb);
    this.requestSerializer = new n(), this.responseSerializer = new a();
  }
  initAxios() {
    const t = {
      paramsSerializer: this.requestSerializer.serialize,
      ...this.axiosConfig
    };
    this.http = Ze.create(t), this.addInterceptors();
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
      const n = _a(t, r.extras, $a);
      return re(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw Ze.isCancel(r) ? new yr() : r;
    }
  }
}
class Ub {
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
          return Rb(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const a = ta(n) ? n : [n], i = ":", o = t.urlFilterSeparator, l = `[^\\${i}\\${o}]*`, c = `${l}\\${i}${l}`, u = `${c}(\\${o}${c})*`, d = new RegExp(`^${u}$`);
          return a.every((p) => String(p).match(d));
        }
        default:
          return !1;
      }
    };
  }
}
const Nb = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, fn = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class zb {
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
      const i = a[0], o = a[1];
      n[i] = this._convertValue(i, o);
    }), n;
  }
}
class Mb {
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
      return _e.stringify(n, {
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
      const a = Se(n);
      return Object.keys(r).forEach((i) => {
        a[i] = r[i];
      }), a;
    }, this.urlParamsMapping = Bo(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !vb(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !wb(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new Ub(), this.urlParser = t.urlParser || new zb(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), a = this._mergeParamsIntoState(n, t), i = this._mapQueryStateToUrlParams(a);
    return fn(i), a;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      Nb(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    fn(r);
  }
}
const jb = "SET_QUERY_COMPONENT_INITIAL_STATE", Ca = "SET_QUERY_STRING", br = "SET_QUERY_SORTING", vr = "SET_QUERY_SORT_BY", Er = "SET_QUERY_SORT_ORDER", qe = "SET_QUERY_STATE", wa = "SET_QUERY_PAGINATION_PAGE", Ta = "SET_QUERY_PAGINATION_SIZE", Fa = "SET_QUERY_FILTERS", Ia = "SET_QUERY_SUGGESTIONS", Aa = "SET_SUGGESTION_STRING", Oa = "CLEAR_QUERY_SUGGESTIONS", Ra = "RESULTS_LOADING", ka = "RESULTS_FETCH_SUCCESS", Pa = "RESULTS_FETCH_ERROR", zt = "RESULTS_UPDATE_LAYOUT", Da = "RESET_QUERY", Qb = (e) => (t) => {
  e && t(Z({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, La = (e) => (t) => {
  t({
    type: qe,
    payload: e
  }), t(Z());
}, Ba = (e) => (t) => {
  t({
    type: Ca,
    payload: e
  }), t(Z());
}, qb = (e, t) => (r) => {
  r({
    type: br,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(Z());
}, Vb = (e) => (t) => {
  t({
    type: vr,
    payload: e
  }), t(Z());
}, Gb = (e) => (t) => {
  t({
    type: Er,
    payload: e
  }), t(Z());
}, Hb = (e) => (t) => {
  t({
    type: wa,
    payload: e
  }), t(Z());
}, Yb = (e) => (t) => {
  t({
    type: Ta,
    payload: e
  }), t(Z());
}, Sr = (e) => (t) => {
  t({
    type: Fa,
    payload: e
  }), t(Z());
}, Wb = (e) => async (t, r, n) => {
  const a = n.urlHandlerApi;
  if (a) {
    await t({
      type: zt,
      payload: e
    });
    const i = r().query;
    a.set(i);
  } else
    t({
      type: zt,
      payload: e
    });
}, Kb = () => (e, t, r) => {
  e({
    type: Da,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(Z());
}, Xb = (e, t, r, n) => {
  const a = t.urlHandlerApi;
  a && (r ? a.replace(e) : n && a.set(e));
}, Zb = (e, t, r, n) => {
  const a = r().query;
  t({
    type: qe,
    payload: {
      ...a,
      ...e.newQueryState
    }
  });
  const i = Se(r().query), o = n.urlHandlerApi;
  return o && o.replace(i), delete e.newStateQuery, e;
}, Jb = (e, t, r, n) => {
  function a(l, c, u, d) {
    l.queryString === "" ? (l.sortBy = u.defaultSortingOnEmptyQueryString.sortBy, l.sortOrder = u.defaultSortingOnEmptyQueryString.sortOrder) : (l.sortBy = c.initialSortBy, l.sortOrder = c.initialSortOrder), d({
      type: qe,
      payload: l
    });
  }
  function i(l, c, u, d) {
    c.hasUserChangedSorting || a(l, c, u, d);
  }
  !re(r.defaultSortingOnEmptyQueryString) && i(e, t, r, n);
}, Z = function() {
  let {
    shouldUpdateUrlQueryString: e = !0,
    shouldReplaceUrlQueryString: t = !1
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return async (r, n, a) => {
    const i = n().app;
    let o = Se(n().query);
    Jb(o, i, a, r), o = Se(n().query), Xb(o, a, t, e), r({
      type: Ra
    });
    try {
      let c = await a.searchApi.search(o);
      "newQueryState" in c && (c = Zb(Se(c), r, n, a)), r({
        type: ka,
        payload: {
          aggregations: c.aggregations,
          hits: c.hits,
          total: c.total
        }
      });
    } catch (l) {
      if (l instanceof yr) {
        console.debug(l);
        return;
      } else
        console.error(l), r({
          type: Pa,
          payload: {
            error: l
          }
        });
    }
  };
}, ev = (e) => (t) => {
  t({
    type: Aa,
    payload: e
  }), t(tv());
}, tv = () => async (e, t, r) => {
  const n = Se(t().query), a = r.suggestionApi;
  try {
    const i = await a.search(n);
    e({
      type: Ia,
      payload: {
        suggestions: i.suggestions
      }
    });
  } catch (i) {
    console.error("Could not load suggestions due to: " + i);
  }
}, rv = () => (e) => {
  e({
    type: Oa,
    payload: {
      suggestions: []
    }
  });
}, nv = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: qe,
      payload: n
    }), e(Z({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, x = /* @__PURE__ */ s.createContext({}), av = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
    case br:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case vr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Er:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    default:
      return e;
  }
}, iv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Ca:
      return {
        ...e,
        queryString: t.payload,
        page: 1
      };
    case br:
      return {
        ...e,
        sortBy: t.payload.sortBy,
        sortOrder: t.payload.sortOrder,
        _sortUserChanged: !0,
        page: 1
      };
    case vr:
      return {
        ...e,
        sortBy: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case Er:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case wa:
      return {
        ...e,
        page: t.payload
      };
    case Ta:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case Fa:
      return {
        ...e,
        page: 1,
        filters: Sa(t.payload, e.filters)
      };
    case Ia:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case Oa:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case Aa:
      return {
        ...e,
        suggestionString: t.payload
      };
    case jb:
      return {
        ...e,
        ...t.payload
      };
    case qe:
      return {
        ...e,
        ...it,
        ..._a(it, t.payload, $a)
      };
    case zt:
      return {
        ...e,
        layout: t.payload
      };
    case Da:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, sv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Ra:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case ka:
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
    case Pa:
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
var ov = Ks({
  app: av,
  query: iv,
  results: sv
});
function hn(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: a,
    sortOrder: i
  } = t;
  return r !== a || n !== i;
}
function lv(e, t, r) {
  const n = hn(r, t), a = !re(e.defaultSortingOnEmptyQueryString);
  let i = !1;
  return a && (i = hn(r, e.defaultSortingOnEmptyQueryString)), n && i;
}
function cv(e) {
  const t = {
    ...it,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = lv(e, t, r), a = {
    ...Lb,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, i = {
    ...Db,
    loading: e.searchOnInit
  };
  return {
    app: a,
    query: r,
    results: i
  };
}
function uv(e) {
  const t = cv(e);
  return Xs(ov, t, Zs(Js.withExtraArgument(e)));
}
function gn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class _r extends D {
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
_r.defaultProps = {
  searchOnInit: !0,
  eventListenerEnabled: !1
};
_r.contextType = x;
var dv = b.component("Bootstrap", _r);
const pv = (e) => ({
  onAppInitialized: (t) => e(Qb(t)),
  updateQueryState: (t) => e(La(t)),
  searchOnUrlQueryStringChanged: () => e(nv())
}), fv = R(null, pv)(dv);
class $r extends D {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new Mb(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = uv(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
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
      buildUID: (c, u) => gn(c, u, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, l = gn("ReactSearchKit.children", a, t);
    return /* @__PURE__ */ s.createElement(x.Provider, {
      value: o
    }, /* @__PURE__ */ s.createElement(js, {
      store: this.store
    }, /* @__PURE__ */ s.createElement(fv, {
      searchOnInit: i,
      eventListenerEnabled: n
    }, /* @__PURE__ */ s.createElement(b, {
      id: l
    }, r))));
  }
}
$r.defaultProps = {
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
$r.contextType = x;
var hv = b.component("ReactSearchKit", $r);
class Ua extends D {
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
    return !!t.length && /* @__PURE__ */ s.createElement(Na, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
Ua.defaultProps = {
  overridableId: ""
};
const Na = (e) => {
  let {
    overridableId: t,
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  } = e;
  const {
    buildUID: i
  } = F(x);
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
      /* @__PURE__ */ s.createElement(ae, {
        image: !0,
        key: l,
        onClick: () => n(u)
      }, c, /* @__PURE__ */ s.createElement(S, {
        name: "delete"
      }))
    );
  })));
};
Na.defaultProps = {
  overridableId: ""
};
var gv = b.component("ActiveFilters", Ua);
const mv = (e) => ({
  updateQueryFilters: (t) => e(Sr(t))
});
R((e) => ({
  filters: e.query.filters
}), mv)(gv);
function yv(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var bv = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
yv(bv);
class za extends D {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? eo.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ s.createElement(Ev, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
za.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const vv = (e) => /* @__PURE__ */ s.createElement(za, Object.assign({
  key: e.queryString
}, e)), Ev = (e) => {
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
  } = F(x), u = (p, f) => {
    o();
  }, d = (p, f) => {
    p.key === "Enter" && o();
  };
  return /* @__PURE__ */ s.createElement(b, Object.assign({
    id: c("AutocompleteSearchBar.element", t)
  }, l), /* @__PURE__ */ s.createElement("div", {
    className: "AutoCompleteText"
  }, /* @__PURE__ */ s.createElement(jn, {
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
  }), /* @__PURE__ */ s.createElement(Sv, {
    querySuggestions: a,
    overridableId: t
  })));
}, Sv = (e) => {
  let {
    overridableId: t,
    ...r
  } = e;
  const {
    querySuggestions: n
  } = r, {
    buildUID: a
  } = F(x), i = async (o) => {
    await (void 0).setState({
      currentValue: o
    }), (void 0).clearSuggestions(), (void 0).executeSearch();
  };
  return n.length === 0 ? null : /* @__PURE__ */ s.createElement(b, Object.assign({
    id: a("AutocompleteSearchBar.suggestions", t)
  }, r), /* @__PURE__ */ s.createElement("ul", null, n.map((o) => /* @__PURE__ */ s.createElement(N, {
    as: "li",
    onClick: () => i(o),
    key: o
  }, o))));
};
var _v = b.component("AutocompleteSearchBar", vv);
const $v = (e) => ({
  updateQueryString: (t) => e(Ba(t)),
  updateSuggestions: (t) => e(ev(t)),
  clearSuggestions: () => e(rv())
}), xv = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
R(xv, $v)(_v);
class xt extends D {
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
        return /* @__PURE__ */ s.createElement(xt, {
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
      return /* @__PURE__ */ s.createElement(ja, {
        key: i.key,
        bucket: i,
        keyField: o,
        isSelected: l,
        onFilterClicked: c,
        getChildAggCmps: u,
        overridableId: n
      });
    });
    return /* @__PURE__ */ s.createElement(Ma, {
      valuesCmp: a,
      overridableId: n
    });
  }
}
xt.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const Ma = (e) => {
  let {
    valuesCmp: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(x);
  return /* @__PURE__ */ s.createElement(b, {
    id: n("BucketAggregationContainer.element", r),
    valuesCmp: t
  }, /* @__PURE__ */ s.createElement(_, null, t));
};
Ma.defaultProps = {
  overridableId: ""
};
const ja = (e) => {
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
  } = F(x), u = t.label ? t.label : `${o} (${t.doc_count.toLocaleString("en-US")})`, d = a(t);
  return /* @__PURE__ */ s.createElement(b, {
    id: l("BucketAggregationValues.element", i),
    bucket: t,
    label: u,
    onFilterClicked: n,
    isSelected: r,
    childAggCmps: d
  }, /* @__PURE__ */ s.createElement(_.Item, {
    key: t.key
  }, /* @__PURE__ */ s.createElement(Qn, {
    label: u,
    id: c(),
    value: t.key,
    onClick: () => n(t.key),
    checked: r
  }), d));
};
ja.defaultProps = {
  overridableId: ""
};
var Cv = b.component("BucketAggregationValues", xt);
class Qa extends D {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: a
      } = this.props;
      return /* @__PURE__ */ s.createElement(Cv, {
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
    return /* @__PURE__ */ s.createElement(qa, Object.assign({
      title: this.title,
      containerCmp: l,
      overridableId: n
    }, a));
  }
}
Qa.defaultProps = {
  overridableId: ""
};
const qa = (e) => {
  let {
    overridableId: t,
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: i
  } = e;
  const {
    buildUID: o
  } = F(x);
  return a && /* @__PURE__ */ s.createElement(b, {
    id: o("BucketAggregation.element", t),
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: i
  }, /* @__PURE__ */ s.createElement(P, null, /* @__PURE__ */ s.createElement(P.Content, null, /* @__PURE__ */ s.createElement(P.Header, null, n)), /* @__PURE__ */ s.createElement(P.Content, null, a)));
};
qa.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var wv = b.component("BucketAggregation", Qa);
const Tv = (e) => ({
  updateQueryFilters: (t) => e(Sr(t))
});
R((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), Tv)(wv);
class Va extends D {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
Va.defaultProps = {
  condition: !0
};
var W = b.component("ShouldRender", Va);
class Ga extends D {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: a
    } = this.props;
    return /* @__PURE__ */ s.createElement(W, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ s.createElement(Ha, {
      totalResults: r,
      overridableId: a
    })));
  }
}
Ga.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const Ha = (e) => {
  let {
    totalResults: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(x), a = n("Count.element", r);
  return /* @__PURE__ */ s.createElement(b, {
    id: a,
    totalResults: t
  }, /* @__PURE__ */ s.createElement(ae, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
Ha.defaultProps = {
  overridableId: ""
};
var Fv = b.component("Count", Ga);
const Iv = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(Fv);
class Ya extends D {
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
    return /* @__PURE__ */ s.createElement(W, {
      condition: !t && re(n) && r === 0
    }, /* @__PURE__ */ s.createElement(Wa, Object.assign({}, c, {
      queryString: a,
      resetQuery: this.resetQuery,
      extraContent: i,
      userSelectionFilters: l,
      overridableId: o
    })));
  }
}
Ya.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const Wa = (e) => {
  let {
    overridableId: t,
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: i
  } = e;
  const {
    buildUID: o
  } = F(x);
  return /* @__PURE__ */ s.createElement(b, {
    id: o("EmptyResults.element", t),
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: i
  }, /* @__PURE__ */ s.createElement(Y, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ s.createElement(fe, {
    icon: !0
  }, /* @__PURE__ */ s.createElement(S, {
    name: "search"
  }), "No results found!"), r && /* @__PURE__ */ s.createElement("em", null, 'Current search "', r, '"'), /* @__PURE__ */ s.createElement("br", null), /* @__PURE__ */ s.createElement(N, {
    primary: !0,
    onClick: () => n()
  }, "Clear query"), a));
};
Wa.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var Av = b.component("EmptyResults", Ya);
const Ov = (e) => ({
  resetQuery: () => e(Kb())
}), Rv = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), Ov)(Av);
function Ka(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ s.createElement(W, {
    condition: !t && !re(r)
  }, /* @__PURE__ */ s.createElement(Xa, {
    error: r,
    overridableId: n
  }));
}
Ka.defaultProps = {
  overridableId: ""
};
const Xa = (e) => {
  let {
    error: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(x);
  return /* @__PURE__ */ s.createElement(b, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ s.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
Xa.defaultProps = {
  overridableId: ""
};
var kv = b.component("Error", Ka);
R((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(kv);
function Za(e) {
  const t = (a) => /* @__PURE__ */ s.createElement(e, a);
  return R((a) => ({
    currentQueryState: a.query,
    currentResultsState: a.results
  }), (a) => ({
    updateQueryState: (i) => a(La(i))
  }))(t);
}
class Ja extends D {
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
    return /* @__PURE__ */ s.createElement(W, {
      condition: t !== null && !r && n > 0
    }, /* @__PURE__ */ s.createElement(ei, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: a
    }));
  }
}
Ja.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
const ei = (e) => {
  let {
    overridableId: t,
    currentLayout: r,
    onLayoutChange: n
  } = e;
  const {
    buildUID: a
  } = F(x);
  return /* @__PURE__ */ s.createElement(b, {
    id: a("LayoutSwitcher.element", t),
    currentLayout: r,
    onLayoutChange: n
  }, /* @__PURE__ */ s.createElement(Pe, {
    compact: !0,
    icon: !0
  }, /* @__PURE__ */ s.createElement(Pe.Item, {
    name: "list",
    active: r === "list",
    onClick: (i, o) => {
      let {
        name: l
      } = o;
      return n(l);
    }
  }, /* @__PURE__ */ s.createElement(S, {
    name: "list layout"
  })), /* @__PURE__ */ s.createElement(Pe.Item, {
    name: "grid",
    active: r === "grid",
    onClick: (i, o) => {
      let {
        name: l
      } = o;
      return n(l);
    }
  }, /* @__PURE__ */ s.createElement(S, {
    name: "grid layout"
  }))));
};
ei.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var Pv = b.component("LayoutSwitcher", Ja);
const Dv = (e) => ({
  updateLayout: (t) => e(Wb(t))
});
R((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), Dv)(Pv);
const mn = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class ti extends D {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...mn,
      ...t.options
    } : mn;
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
    return /* @__PURE__ */ s.createElement(W, {
      condition: !t && n > -1 && a > -1 && o ? r > 0 : r > a
    }, /* @__PURE__ */ s.createElement(ri, {
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
ti.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const ri = (e) => {
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
  const u = o.boundaryRangeCount, d = o.siblingRangeCount, p = o.showEllipsis, f = o.showFirst, h = o.showLast, y = o.showPrev, g = o.showNext, v = o.size, m = Math.floor(l / n), E = Math.ceil(a / n), I = Math.min(E, m), {
    buildUID: B
  } = F(x);
  return r > E && i(E), /* @__PURE__ */ s.createElement(b, {
    id: B("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: a,
    options: o,
    onPageChange: i
  }, /* @__PURE__ */ s.createElement(Qs, Object.assign({
    activePage: r,
    totalPages: I,
    onPageChange: (J, A) => {
      let {
        activePage: ue
      } = A;
      return i(ue);
    },
    boundaryRange: u,
    siblingRange: d,
    ellipsisItem: p ? void 0 : null,
    firstItem: f ? void 0 : null,
    lastItem: h ? void 0 : null,
    prevItem: y ? void 0 : null,
    nextItem: g ? void 0 : null,
    size: v
  }, c)));
};
ri.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var Lv = b.component("Pagination", ti);
const Bv = (e) => ({
  updateQueryPage: (t) => e(Hb(t))
}), Uv = R((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), Bv)(Lv);
function ni(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    resultsPerRow: a,
    overridableId: i,
    onResultsRendered: o
  } = e;
  return Ue(() => {
    o && o();
  }, [o]), /* @__PURE__ */ s.createElement(W, {
    condition: !t && r > 0
  }, /* @__PURE__ */ s.createElement(ai, {
    results: n,
    resultsPerRow: a,
    overridableId: i
  }));
}
ni.defaultProps = {
  resultsPerRow: 3,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const Nv = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(x);
  return /* @__PURE__ */ s.createElement(b, {
    id: n("ResultsGrid.item", r),
    result: t
  }, /* @__PURE__ */ s.createElement(P, {
    fluid: !0,
    href: `#${t.id}`
  }, /* @__PURE__ */ s.createElement(qs, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ s.createElement(P.Content, null, /* @__PURE__ */ s.createElement(P.Header, null, t.title), /* @__PURE__ */ s.createElement(P.Description, null, t.description))));
}, ai = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: a
  } = F(x), i = r.map((o, l) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ s.createElement(Nv, {
      key: l,
      result: o,
      overridableId: t
    })
  ));
  return /* @__PURE__ */ s.createElement(b, {
    id: a("ResultsGrid.container", t),
    results: i,
    resultsPerRow: n
  }, /* @__PURE__ */ s.createElement(P.Group, {
    itemsPerRow: n
  }, i));
};
ai.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var zv = b.component("ResultsGrid", ni);
const Mv = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(zv);
function ii(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: a,
    onResultsRendered: i
  } = e;
  return Ue(() => {
    i && i();
  }, [i]), /* @__PURE__ */ s.createElement(W, {
    condition: !t && r > 0
  }, /* @__PURE__ */ s.createElement(si, {
    results: n,
    overridableId: a
  }));
}
ii.defaultProps = {
  overridableId: "",
  onResultsRendered: () => {
  }
};
const jv = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(x);
  return /* @__PURE__ */ s.createElement(b, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ s.createElement(ye, {
    href: `#${t.id}`
  }, /* @__PURE__ */ s.createElement(ye.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ s.createElement(ye.Content, null, /* @__PURE__ */ s.createElement(ye.Header, null, t.title), /* @__PURE__ */ s.createElement(ye.Description, null, t.description))));
}, si = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(x), a = t.map((i, o) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ s.createElement(jv, {
      result: i,
      key: o,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ s.createElement(b, {
    id: n("ResultsList.container", r),
    results: a
  }, /* @__PURE__ */ s.createElement(ye.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, a));
};
si.defaultProps = {
  overridableId: ""
};
var Qv = b.component("ResultsList", ii);
const oi = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(Qv);
function li(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ s.createElement(ci, {
    overridableId: n
  }) : t;
}
li.defaultProps = {
  overridableId: ""
};
const ci = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = F(x);
  return /* @__PURE__ */ s.createElement(b, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ s.createElement(qn, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
ci.defaultProps = {
  overridableId: ""
};
var qv = b.component("ResultsLoader", li);
const Vv = R((e) => ({
  loading: e.results.loading
}))(qv);
function ui(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: a,
    onResultsRendered: i
  } = e;
  return /* @__PURE__ */ s.createElement(W, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ s.createElement(di, {
    layout: n,
    overridableId: a,
    onResultsRendered: i
  }));
}
ui.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const di = (e) => {
  let {
    layout: t,
    overridableId: r,
    onResultsRendered: n
  } = e;
  const {
    buildUID: a
  } = F(x);
  return /* @__PURE__ */ s.createElement(b, {
    id: a("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ s.createElement(oi, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ s.createElement(Mv, {
    overridableId: r,
    onResultsRendered: n
  }));
};
di.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var Gv = b.component("ResultsMultiLayout", ui);
R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(Gv);
class pi extends D {
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
    return /* @__PURE__ */ s.createElement(W, {
      condition: !t && r !== -1 && c ? n > 0 : n > r
    }, a(/* @__PURE__ */ s.createElement(fi, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
pi.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const fi = (e) => {
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
  } = F(x), c = n.map((u, d) => ({
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
  }, /* @__PURE__ */ s.createElement(oe, {
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
fi.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var Hv = b.component("ResultsPerPage", pi);
const Yv = (e) => ({
  updateQuerySize: (t) => e(Yb(t))
}), Wv = R((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), Yv)(Hv);
class hi extends D {
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
    return /* @__PURE__ */ s.createElement(xr, {
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
hi.defaultProps = {
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
const gi = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ s.createElement(hi, Object.assign({
    key: t
  }, e));
};
gi.defaultProps = {
  queryString: ""
};
class xr extends D {
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
    }, /* @__PURE__ */ s.createElement(jn, Object.assign({
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
xr.defaultProps = {
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
xr.contextType = x;
var Kv = b.component("SearchBar", gi);
const Xv = (e) => ({
  updateQueryString: (t) => e(Ba(t))
}), Zv = R((e) => ({
  queryString: e.query.queryString
}), Xv)(Kv);
class mi extends D {
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
    return /* @__PURE__ */ s.createElement(W, {
      condition: t !== null && (l || t !== null) && !n && a > 0
    }, i(/* @__PURE__ */ s.createElement(yi, {
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
mi.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const yi = (e) => {
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
  } = F(x), d = o(r, n), p = a.map((f, h) => ({
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
  }, /* @__PURE__ */ s.createElement(oe, {
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
yi.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var Jv = b.component("Sort", mi);
const eE = (e) => ({
  updateQuerySorting: (t, r) => e(qb(t, r))
});
R((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), eE)(Jv);
class bi extends D {
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
    return /* @__PURE__ */ s.createElement(W, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ s.createElement(vi, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
bi.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const vi = (e) => {
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
  } = F(x), c = n.map((u, d) => ({
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
  }, /* @__PURE__ */ s.createElement(oe, {
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
vi.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var tE = b.component("SortBy", bi);
const rE = (e) => ({
  updateQuerySortBy: (t) => e(Vb(t))
});
R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), rE)(tE);
class Ei extends D {
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
    return /* @__PURE__ */ s.createElement(W, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ s.createElement(Si, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
Ei.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const Si = (e) => {
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
  } = F(x), c = n.map((u, d) => ({
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
  }, /* @__PURE__ */ s.createElement(oe, {
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
Si.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var nE = b.component("SortOrder", Ei);
const aE = (e) => ({
  updateQuerySortOrder: (t) => e(Gb(t))
});
R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), aE)(nE);
const _i = (e) => {
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
  } = F(x), d = l(r);
  return /* @__PURE__ */ s.createElement(b, {
    id: u("SearchFilters.Toggle.element", t),
    title: n,
    label: a,
    filterValue: i,
    userSelectionFilters: r,
    updateQueryFilters: o
  }, /* @__PURE__ */ s.createElement(P, null, /* @__PURE__ */ s.createElement(P.Content, null, /* @__PURE__ */ s.createElement(P.Header, null, n)), /* @__PURE__ */ s.createElement(P.Content, null, /* @__PURE__ */ s.createElement(Qn, {
    toggle: !0,
    label: a,
    onClick: c,
    checked: d
  }))));
};
_i.defaultProps = {
  overridableId: ""
};
var iE = b.component("SearchFilters.Toggle", _i);
const sE = (e) => ({
  updateQueryFilters: (t) => e(Sr(t))
});
R((e) => ({
  userSelectionFilters: e.query.filters
}), sE)(iE);
const $i = s.createContext(
  null
), oE = ({ config: e, children: t, updateQueryState: r, currentQueryState: n }) => {
  const a = O(() => {
    r({
      ...n,
      queryString: n.queryString
    });
  }, [r, n]);
  return /* @__PURE__ */ s.createElement($i.Provider, { value: { config: e, refreshSearch: a } }, t);
}, lE = Za(oE), Ct = () => {
  const e = s.useContext($i);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
}, xi = ({
  progress: e,
  showPercentage: t = !1
}) => /* @__PURE__ */ s.createElement(Jt, null, Object.entries(e).map(([r, n]) => /* @__PURE__ */ s.createElement(Y.Inline, { basic: !0, key: r }, /* @__PURE__ */ s.createElement(
  S,
  {
    name: "spinner",
    loading: !0,
    style: {
      marginInlineEnd: "0.5rem"
    }
  }
), /* @__PURE__ */ s.createElement("strong", null, r), " ", t ? `${n}%` : null))), Ci = () => /* @__PURE__ */ s.createElement(Y, { basic: !0, padded: "very" }, /* @__PURE__ */ s.createElement(Vs, { active: !0, inverted: !0 }, /* @__PURE__ */ s.createElement(qn, { inverted: !0 }, "Loading"))), cE = ({ status: e, ...t }) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ s.createElement(S, { name: "close", color: "red", ...t }) : e === "success" || e === "created" ? /* @__PURE__ */ s.createElement(S, { name: "check circle", color: "green", ...t }) : e === "importing" || e === "validating" ? /* @__PURE__ */ s.createElement(S, { name: "spinner", loading: !0, ...t }) : e === "validated" ? /* @__PURE__ */ s.createElement(S, { name: "check circle", color: "blue", ...t }) : /* @__PURE__ */ s.createElement(S, { ...t }), wi = ({
  status: e,
  children: t,
  ...r
}) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ s.createElement(ae, { color: "red", ...r }, /* @__PURE__ */ s.createElement(S, { name: "warning sign" }), t) : e === "success" || e === "validated" || e === "created" ? /* @__PURE__ */ s.createElement(ae, { color: "green", ...r }, /* @__PURE__ */ s.createElement(S, { name: "check circle" }), t) : e === "importing" || e === "validating" ? /* @__PURE__ */ s.createElement(ae, { color: "blue", ...r }, /* @__PURE__ */ s.createElement(S, { name: "spinner", loading: !0 }), t) : /* @__PURE__ */ s.createElement(ae, { ...r }, t), De = (e) => (e == null ? void 0 : e.charAt(0).toUpperCase()) + (e == null ? void 0 : e.slice(1)) || "", Ti = (e) => e.reduce((t, r) => t + r.file.size, 0), Fi = (e) => Cr(Ti(e)), Cr = (e) => {
  if (e === 0)
    return "0 Bytes";
  const t = 1024, r = ["Bytes", "KB", "MB", "GB"], n = Math.floor(Math.log(e) / Math.log(t));
  return `${Number.parseFloat((e / t ** n).toFixed(2))} ${r[n]}`;
}, Mt = (e) => new Date(e).toLocaleString(void 0, {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit"
});
var Ii = { exports: {} };
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
            var y = f[h].split("="), g = y.slice(1).join("=");
            !d && g.charAt(0) === '"' && (g = g.slice(1, -1));
            try {
              var v = n(y[0]);
              if (g = (i.read || i)(g, v) || n(g), d)
                try {
                  g = JSON.parse(g);
                } catch {
                }
              if (p[v] = g, u === v)
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
})(Ii);
var uE = Ii.exports;
const dE = /* @__PURE__ */ k(uE), pE = () => dE.get("csrftoken") || null, fE = (e) => {
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
}, Jx = (e) => new xa(e), eC = (e, t = {}, r = !0) => ({
  axios: {
    url: e,
    headers: {
      Accept: "application/vnd.inveniordm.v1+json",
      ...t
    },
    withCredentials: r
  }
}), q = Ze.create({
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
    const t = pE();
    return t && (e.headers["X-CSRFTOKEN"] = t), e;
  },
  (e) => Promise.reject(e)
);
const Ai = async (e, t) => {
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
}, hE = async (e, t) => {
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
}, gE = async (e) => {
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
}, mE = async (e) => {
  try {
    const t = await q.delete(`/api/importer-tasks/${e}`);
    return t.status === 204 ? !0 : (console.error(`Failed to delete task: ${t.statusText}`), !1);
  } catch (t) {
    return console.error(
      `Error deleting task: ${t instanceof Error ? t.message : "Unknown error"}`
    ), !1;
  }
}, Oi = async (e) => {
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
}, yE = async () => {
  try {
    const e = await q.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, bE = async (e) => {
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
}, Le = async (e) => {
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
}, vE = async (e, t) => {
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
}, EE = async (e, t, r) => {
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
}, Ri = async (e) => {
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
}, ki = async (e, t = {}) => {
  const { autoExecute: r = !1, onProgress: n, onError: a } = t;
  try {
    n == null || n("Validating", 0), await Ri(e), n == null || n("Validating", 50);
    let i = await Le(e);
    return n == null || n("Validating", 100), r && (i.status === "validated" || i.status === "validated with failures") && (n == null || n("Executing", 0), await Oi(e), n == null || n("Executing", 50), i = await Le(e), n == null || n("Executing", 100)), i;
  } catch (i) {
    const o = i instanceof Error ? i : new Error("Unknown error during workflow execution");
    throw a == null || a(o, "Executing"), o;
  }
}, Pi = async (e, t, r) => {
  if (!t || t.length === 0)
    return;
  const n = t.map((a) => a.name);
  await vE(e, n);
  for (const a of t)
    try {
      r == null || r({
        fileName: a.name,
        loaded: 0,
        total: a.size,
        percentage: 0
      }), await EE(e, a.name, a), r == null || r({
        fileName: a.name,
        loaded: a.size,
        total: a.size,
        percentage: 90
      }), await hE(e, a.name), r == null || r({
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
}, SE = async (e, t, r, n = {}) => {
  const {
    autoValidate: a = !1,
    autoExecute: i = !1,
    onProgress: o,
    onError: l
  } = n;
  try {
    o == null || o("Creating Task", 0);
    const c = await gE(e);
    if (!c)
      throw new Error("Failed to create import task");
    return o == null || o("Creating Task", 100), t && (o == null || o("Uploading Metadata", 0), await Ai(c.id, t), o == null || o("Uploading Metadata", 100)), r && r.length > 0 && await Pi(c.id, r, (u) => {
      o == null || o("Uploading Files", u.percentage);
    }), a && t && await ki(c.id, {
      autoExecute: i,
      onProgress: o,
      onError: l
    }), c;
  } catch (c) {
    const u = c instanceof Error ? c : new Error("Unknown error during task creation");
    throw l == null || l(u, "Creating Task"), u;
  }
}, _E = async (e, t, r, n = {}) => {
  const { onProgress: a, onError: i } = n;
  try {
    a == null || a("Updating", 0), t && (a == null || a("Updating Metadata", 0), await Ai(e, t), a == null || a("Updating Metadata", 100)), r && r.length > 0 && await Pi(e, r, (o) => {
      a == null || a("Updating Files", o.percentage);
    }), a == null || a("Updating", 100);
  } catch (o) {
    const l = o instanceof Error ? o : new Error("Unknown error during task update");
    throw i == null || i(l, "Updating"), l;
  }
}, $E = async (e) => {
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
}, Di = (e, t = {}) => {
  const [r, n] = L({
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
  } = t, f = O(() => {
    n((m) => ({ ...m, error: null }));
  }, []), h = O(async () => {
    n((m) => ({ ...m, isDeleting: !0, error: null }));
    try {
      if (!await mE(e))
        throw new Error(`Failed to delete task ${e}`);
      a == null || a();
    } catch (m) {
      const E = m instanceof Error ? m : new Error("Unknown error");
      throw n((I) => ({ ...I, error: E })), i == null || i(E), E;
    } finally {
      n((m) => ({ ...m, isDeleting: !1 }));
    }
  }, [e, a, i]), y = O(async () => {
    n((m) => ({ ...m, isValidating: !0, error: null }));
    try {
      const m = await Ri(e);
      if (!m)
        throw new Error(`Validation failed for task ${e}`);
      return o == null || o(m), await Le(e), m;
    } catch (m) {
      const E = m instanceof Error ? m : new Error("Unknown error");
      throw n((I) => ({ ...I, error: E })), l == null || l(E), E;
    } finally {
      n((m) => ({ ...m, isValidating: !1 }));
    }
  }, [e, o, l]), g = O(async () => {
    n((m) => ({ ...m, isBulkImporting: !0, error: null }));
    try {
      const m = await Oi(e);
      if (!m)
        throw new Error(`Failed to execute bulk import for task ${e}`);
      return c == null || c(m), await Le(e), m;
    } catch (m) {
      const E = m instanceof Error ? m : new Error("Unknown error");
      throw n((I) => ({ ...I, error: E })), u == null || u(E), E;
    } finally {
      n((m) => ({ ...m, isBulkImporting: !1 }));
    }
  }, [e, c, u]), v = O(async () => {
    n((m) => ({ ...m, isGettingStatus: !0, error: null }));
    try {
      const m = await Le(e);
      if (!m)
        throw new Error(`Failed to retrieve status for task ${e}`);
      return n((E) => ({ ...E, error: null })), d == null || d(m), m;
    } catch (m) {
      const E = m instanceof Error ? m : new Error("Unknown error");
      throw n((I) => ({ ...I, error: E })), p == null || p(E), E;
    } finally {
      n((m) => ({ ...m, isGettingStatus: !1 }));
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
    runBulkImport: g,
    getStatus: v,
    clearError: f
  };
}, xE = ({ result: e, index: t }) => {
  var y;
  const { config: r, refreshSearch: n } = Ct(), {
    deleteTask: a,
    runBulkImport: i,
    getStatus: o,
    isDeleting: l,
    isValidating: c,
    isBulkImporting: u,
    isGettingStatus: d,
    error: p,
    clearError: f
  } = Di(e.id, {
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
  return /* @__PURE__ */ s.createElement(ut, { key: t }, /* @__PURE__ */ s.createElement(G, null, /* @__PURE__ */ s.createElement("a", { href: `${r.resultPath}/${e.id}` }, e.title || "No title")), /* @__PURE__ */ s.createElement(G, null, Mt(e.created)), /* @__PURE__ */ s.createElement(G, null, /* @__PURE__ */ s.createElement(wi, { status: e.status }, De(e.status))), /* @__PURE__ */ s.createElement(G, null, /* @__PURE__ */ s.createElement(ae, null, De(e.record_type))), /* @__PURE__ */ s.createElement(G, null, ((y = e.records_status) == null ? void 0 : y.total_records) ?? 0), /* @__PURE__ */ s.createElement(G, null, e.serializer), /* @__PURE__ */ s.createElement(G, null, De(e.mode)), /* @__PURE__ */ s.createElement(G, { style: { width: "220px" } }, p && /* @__PURE__ */ s.createElement("div", { style: { color: "red", fontSize: "12px", marginBottom: "5px" } }, p.message, /* @__PURE__ */ s.createElement(
    N,
    {
      onClick: f,
      style: { marginLeft: "5px", fontSize: "10px" }
    },
    "Clear"
  )), /* @__PURE__ */ s.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ s.createElement(
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
    N,
    {
      basic: !0,
      size: "tiny",
      disabled: h,
      as: "a",
      href: `${r.resultPath}/${e.id}`
    },
    /* @__PURE__ */ s.createElement(S, { name: "eye" }),
    "View"
  ))));
}, CE = ({ children: e }) => /* @__PURE__ */ s.createElement(w, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ s.createElement(Vn, null, /* @__PURE__ */ s.createElement(ut, null, /* @__PURE__ */ s.createElement(H, null, "Title"), /* @__PURE__ */ s.createElement(H, null, "Date Created"), /* @__PURE__ */ s.createElement(H, null, "Status"), /* @__PURE__ */ s.createElement(H, null, "Type"), /* @__PURE__ */ s.createElement(H, null, "Items"), /* @__PURE__ */ s.createElement(H, null, "Serializer"), /* @__PURE__ */ s.createElement(H, null, "Mode"), /* @__PURE__ */ s.createElement(H, null, "Actions"))), /* @__PURE__ */ s.createElement(Gn, null, e)), ne = {
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
}, wE = () => {
  const [e, t] = L(
    {}
  ), [r, n] = L(!0), { values: a, submitForm: i, isSubmitting: o, isValid: l, setFieldValue: c } = ao(), u = O(async () => {
    try {
      const f = await yE(), h = {};
      for (const y of f) {
        const g = await bE(y);
        g && (h[y] = g);
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
  return Ue(() => {
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
}, TE = ({ progress: e }) => {
  const {
    configs: t,
    isLoading: r,
    submitForm: n,
    handleFileChange: a,
    handleFilesChange: i,
    values: o,
    isSubmitting: l,
    isValid: c
  } = wE();
  return r ? /* @__PURE__ */ s.createElement(Ci, null) : !t || Object.keys(t).length === 0 ? /* @__PURE__ */ s.createElement("p", null, "No record types available.") : /* @__PURE__ */ s.createElement(Jt, null, /* @__PURE__ */ s.createElement(
    to,
    {
      fieldPath: "task.title",
      label: "Title",
      placeholder: "Enter a title for the import task",
      required: !0
    }
  ), /* @__PURE__ */ s.createElement(Ee.Group, { widths: "equal" }, /* @__PURE__ */ s.createElement(
    It,
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
    It,
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
    It,
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
  )), /* @__PURE__ */ s.createElement(Ee.Field, null, /* @__PURE__ */ s.createElement("label", { htmlFor: "file-input" }, "Metadata File"), /* @__PURE__ */ s.createElement(
    "input",
    {
      id: "file-input",
      type: "file",
      accept: ".csv",
      onChange: a,
      style: { marginTop: "8px" }
    }
  ), o.metadata && /* @__PURE__ */ s.createElement("p", { style: { marginTop: "8px", fontSize: "12px", color: "#666" } }, "Selected: ", o.metadata.name), /* @__PURE__ */ s.createElement("p", { style: { marginTop: "8px", fontSize: "12px", color: "#666" } }, "Upload a CSV file containing the records metadata to be imported or deleted.")), /* @__PURE__ */ s.createElement(Ee.Field, null, /* @__PURE__ */ s.createElement(
    Ds,
    {
      value: o.files || [],
      onChange: i,
      accept: "*",
      skipEmptyFiles: !0,
      maxTotalSize: 10 * 1024 * 1024 * 1024,
      maxFiles: 100
    }
  ), /* @__PURE__ */ s.createElement("p", { style: { marginTop: "8px", fontSize: "12px", color: "#666" } }, "Upload files related to the records. You can upload multiple files, and they will be associated with the import task.")), /* @__PURE__ */ s.createElement(
    ro,
    {
      fieldPath: "task.description",
      label: "Notes",
      placeholder: "Enter a description for the import task",
      rows: 3
    }
  ), /* @__PURE__ */ s.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: ".5rem"
      }
    },
    e && /* @__PURE__ */ s.createElement(xi, { progress: e }),
    /* @__PURE__ */ s.createElement(
      N,
      {
        type: "button",
        primary: !0,
        onClick: n,
        disabled: !c || l,
        loading: l
      },
      "Submit"
    )
  ));
};
var jt;
try {
  jt = Map;
} catch {
}
var Qt;
try {
  Qt = Set;
} catch {
}
function Li(e, t, r) {
  if (!e || typeof e != "object" || typeof e == "function")
    return e;
  if (e.nodeType && "cloneNode" in e)
    return e.cloneNode(!0);
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof RegExp)
    return new RegExp(e);
  if (Array.isArray(e))
    return e.map(qt);
  if (jt && e instanceof jt)
    return new Map(Array.from(e.entries()));
  if (Qt && e instanceof Qt)
    return new Set(Array.from(e.values()));
  if (e instanceof Object) {
    t.push(e);
    var n = Object.create(e);
    r.push(n);
    for (var a in e) {
      var i = t.findIndex(function(o) {
        return o === e[a];
      });
      n[a] = i > -1 ? r[i] : Li(e[a], t, r);
    }
    return n;
  }
  return e;
}
function qt(e) {
  return Li(e, [], []);
}
const FE = Object.prototype.toString, IE = Error.prototype.toString, AE = RegExp.prototype.toString, OE = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", RE = /^Symbol\((.*)\)(.*)$/;
function kE(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function yn(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return kE(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return OE.call(e).replace(RE, "Symbol($1)");
  const n = FE.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + IE.call(e) + "]" : n === "RegExp" ? AE.call(e) : null;
}
function Be(e, t) {
  let r = yn(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let i = yn(this[n], t);
    return i !== null ? i : a;
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
    let a = n != null && n !== r, i = `${e} must be a \`${t}\` type, but the final value was: \`${Be(r, !0)}\`` + (a ? ` (cast from the value \`${Be(n, !0)}\`).` : ".");
    return r === null && (i += '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'), i;
  },
  defined: "${path} must be defined"
}, K = {
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
}, PE = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Vt = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, DE = {
  isValue: "${path} field must be ${value}"
}, Gt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, LE = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: pe,
  string: K,
  number: PE,
  date: Vt,
  object: Gt,
  array: LE,
  boolean: DE
});
var BE = Object.prototype, UE = BE.hasOwnProperty;
function NE(e, t) {
  return e != null && UE.call(e, t);
}
var zE = NE, ME = zE, jE = ia;
function QE(e, t) {
  return e != null && jE(e, t, ME);
}
var qE = QE;
const st = /* @__PURE__ */ k(qE), Bi = (e) => e && e.__isYupSchema__;
class VE {
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
    if (!Bi(a))
      throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
function Ui(e) {
  return e == null ? [] : [].concat(e);
}
function Ht() {
  return Ht = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ht.apply(this, arguments);
}
let GE = /\$\{\s*(\w+)\s*\}/g;
class j extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Ht({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(GE, (a, i) => Be(r[i])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], Ui(t).forEach((i) => {
      j.isError(i) ? (this.errors.push(...i.errors), this.inner = this.inner.concat(i.inner.length ? i.inner : i)) : this.errors.push(i);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, j);
  }
}
const HE = (e) => {
  let t = !1;
  return (...r) => {
    t || (t = !0, e(...r));
  };
};
function Yt(e, t) {
  let {
    endEarly: r,
    tests: n,
    args: a,
    value: i,
    errors: o,
    sort: l,
    path: c
  } = e, u = HE(t), d = n.length;
  const p = [];
  if (o = o || [], !d)
    return o.length ? u(new j(o, i, c)) : u(null, i);
  for (let f = 0; f < n.length; f++) {
    const h = n[f];
    h(a, function(g) {
      if (g) {
        if (!j.isError(g))
          return u(g, i);
        if (r)
          return g.value = i, u(g, i);
        p.push(g);
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
function YE(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), l = o.length; l--; ) {
      var c = o[e ? l : ++a];
      if (r(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var WE = YE, KE = WE, XE = KE(), ZE = XE, JE = ZE, eS = Qe;
function tS(e, t) {
  return e && JE(e, t, eS);
}
var Ni = tS, rS = "__lodash_hash_undefined__";
function nS(e) {
  return this.__data__.set(e, rS), this;
}
var aS = nS;
function iS(e) {
  return this.__data__.has(e);
}
var sS = iS, oS = or, lS = aS, cS = sS;
function ot(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new oS(); ++t < r; )
    this.add(e[t]);
}
ot.prototype.add = ot.prototype.push = lS;
ot.prototype.has = cS;
var uS = ot;
function dS(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var pS = dS;
function fS(e, t) {
  return e.has(t);
}
var hS = fS, gS = uS, mS = pS, yS = hS, bS = 1, vS = 2;
function ES(e, t, r, n, a, i) {
  var o = r & bS, l = e.length, c = t.length;
  if (l != c && !(o && c > l))
    return !1;
  var u = i.get(e), d = i.get(t);
  if (u && d)
    return u == t && d == e;
  var p = -1, f = !0, h = r & vS ? new gS() : void 0;
  for (i.set(e, t), i.set(t, e); ++p < l; ) {
    var y = e[p], g = t[p];
    if (n)
      var v = o ? n(g, y, p, t, e, i) : n(y, g, p, e, t, i);
    if (v !== void 0) {
      if (v)
        continue;
      f = !1;
      break;
    }
    if (h) {
      if (!mS(t, function(m, E) {
        if (!yS(h, E) && (y === m || a(y, m, r, n, i)))
          return h.push(E);
      })) {
        f = !1;
        break;
      }
    } else if (!(y === g || a(y, g, r, n, i))) {
      f = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), f;
}
var zi = ES;
function SS(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var _S = SS;
function $S(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var xS = $S, bn = $e, vn = ma, CS = mt, wS = zi, TS = _S, FS = xS, IS = 1, AS = 2, OS = "[object Boolean]", RS = "[object Date]", kS = "[object Error]", PS = "[object Map]", DS = "[object Number]", LS = "[object RegExp]", BS = "[object Set]", US = "[object String]", NS = "[object Symbol]", zS = "[object ArrayBuffer]", MS = "[object DataView]", En = bn ? bn.prototype : void 0, Rt = En ? En.valueOf : void 0;
function jS(e, t, r, n, a, i, o) {
  switch (r) {
    case MS:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case zS:
      return !(e.byteLength != t.byteLength || !i(new vn(e), new vn(t)));
    case OS:
    case RS:
    case DS:
      return CS(+e, +t);
    case kS:
      return e.name == t.name && e.message == t.message;
    case LS:
    case US:
      return e == t + "";
    case PS:
      var l = TS;
    case BS:
      var c = n & IS;
      if (l || (l = FS), e.size != t.size && !c)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= AS, o.set(e, t);
      var d = wS(l(e), l(t), n, a, i, o);
      return o.delete(e), d;
    case NS:
      if (Rt)
        return Rt.call(e) == Rt.call(t);
  }
  return !1;
}
var QS = jS, Sn = ga, qS = 1, VS = Object.prototype, GS = VS.hasOwnProperty;
function HS(e, t, r, n, a, i) {
  var o = r & qS, l = Sn(e), c = l.length, u = Sn(t), d = u.length;
  if (c != d && !o)
    return !1;
  for (var p = c; p--; ) {
    var f = l[p];
    if (!(o ? f in t : GS.call(t, f)))
      return !1;
  }
  var h = i.get(e), y = i.get(t);
  if (h && y)
    return h == t && y == e;
  var g = !0;
  i.set(e, t), i.set(t, e);
  for (var v = o; ++p < c; ) {
    f = l[p];
    var m = e[f], E = t[f];
    if (n)
      var I = o ? n(E, m, f, t, e, i) : n(m, E, f, e, t, i);
    if (!(I === void 0 ? m === E || a(m, E, r, n, i) : I)) {
      g = !1;
      break;
    }
    v || (v = f == "constructor");
  }
  if (g && !v) {
    var B = e.constructor, J = t.constructor;
    B != J && "constructor" in e && "constructor" in t && !(typeof B == "function" && B instanceof B && typeof J == "function" && J instanceof J) && (g = !1);
  }
  return i.delete(e), i.delete(t), g;
}
var YS = HS, kt = hr, WS = zi, KS = QS, XS = YS, _n = Ne, $n = Q, xn = ht, ZS = ar, JS = 1, Cn = "[object Arguments]", wn = "[object Array]", Ye = "[object Object]", e0 = Object.prototype, Tn = e0.hasOwnProperty;
function t0(e, t, r, n, a, i) {
  var o = $n(e), l = $n(t), c = o ? wn : _n(e), u = l ? wn : _n(t);
  c = c == Cn ? Ye : c, u = u == Cn ? Ye : u;
  var d = c == Ye, p = u == Ye, f = c == u;
  if (f && xn(e)) {
    if (!xn(t))
      return !1;
    o = !0, d = !1;
  }
  if (f && !d)
    return i || (i = new kt()), o || ZS(e) ? WS(e, t, r, n, a, i) : KS(e, t, c, r, n, a, i);
  if (!(r & JS)) {
    var h = d && Tn.call(e, "__wrapped__"), y = p && Tn.call(t, "__wrapped__");
    if (h || y) {
      var g = h ? e.value() : e, v = y ? t.value() : t;
      return i || (i = new kt()), a(g, v, r, n, i);
    }
  }
  return f ? (i || (i = new kt()), XS(e, t, r, n, a, i)) : !1;
}
var r0 = t0, n0 = r0, Fn = te;
function Mi(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Fn(e) && !Fn(t) ? e !== e && t !== t : n0(e, t, r, n, Mi, a);
}
var ji = Mi, a0 = hr, i0 = ji, s0 = 1, o0 = 2;
function l0(e, t, r, n) {
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
      var p = new a0();
      if (n)
        var f = n(u, d, c, e, t, p);
      if (!(f === void 0 ? i0(d, u, s0 | o0, n, p) : f))
        return !1;
    }
  }
  return !0;
}
var c0 = l0, u0 = ie;
function d0(e) {
  return e === e && !u0(e);
}
var Qi = d0, p0 = Qi, f0 = Qe;
function h0(e) {
  for (var t = f0(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, p0(a)];
  }
  return t;
}
var g0 = h0;
function m0(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var qi = m0, y0 = c0, b0 = g0, v0 = qi;
function E0(e) {
  var t = b0(e);
  return t.length == 1 && t[0][2] ? v0(t[0][0], t[0][1]) : function(r) {
    return r === e || y0(r, e, t);
  };
}
var S0 = E0, _0 = ji, $0 = aa, x0 = ur, C0 = sr, w0 = Qi, T0 = qi, F0 = Me, I0 = 1, A0 = 2;
function O0(e, t) {
  return C0(e) && w0(t) ? T0(F0(e), t) : function(r) {
    var n = $0(r, e);
    return n === void 0 && n === t ? x0(r, e) : _0(t, n, I0 | A0);
  };
}
var R0 = O0;
function k0(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var P0 = k0, D0 = cr;
function L0(e) {
  return function(t) {
    return D0(t, e);
  };
}
var B0 = L0, U0 = P0, N0 = B0, z0 = sr, M0 = Me;
function j0(e) {
  return z0(e) ? U0(M0(e)) : N0(e);
}
var Q0 = j0, q0 = S0, V0 = R0, G0 = pr, H0 = Q, Y0 = Q0;
function W0(e) {
  return typeof e == "function" ? e : e == null ? G0 : typeof e == "object" ? H0(e) ? V0(e[0], e[1]) : q0(e) : Y0(e);
}
var Vi = W0, K0 = _t, X0 = Ni, Z0 = Vi;
function J0(e, t) {
  var r = {};
  return t = Z0(t), X0(e, function(n, a, i) {
    K0(r, a, t(n, a, i));
  }), r;
}
var e_ = J0;
const Gi = /* @__PURE__ */ k(e_);
function ge(e) {
  this._maxSize = e, this.clear();
}
ge.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
ge.prototype.get = function(e) {
  return this._values[e];
};
ge.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var t_ = /[^.^\]^[]+|(?=\[\]|\.\.)/g, Hi = /^\d+$/, r_ = /^\d/, n_ = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, a_ = /^\s*(['"]?)(.*?)(\1)\s*$/, wr = 512, In = new ge(wr), An = new ge(wr), On = new ge(wr), wt = {
  Cache: ge,
  split: Wt,
  normalizePath: Pt,
  setter: function(e) {
    var t = Pt(e);
    return An.get(e) || An.set(e, function(n, a) {
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
    var r = Pt(e);
    return On.get(e) || On.set(e, function(a) {
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
      return t + (Tr(r) || Hi.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    i_(Array.isArray(e) ? e : Wt(e), t, r);
  }
};
function Pt(e) {
  return In.get(e) || In.set(
    e,
    Wt(e).map(function(t) {
      return t.replace(a_, "$2");
    })
  );
}
function Wt(e) {
  return e.match(t_) || [""];
}
function i_(e, t, r) {
  var n = e.length, a, i, o, l;
  for (i = 0; i < n; i++)
    a = e[i], a && (l_(a) && (a = '"' + a + '"'), l = Tr(a), o = !l && /^\d+$/.test(a), t.call(r, a, l, o, i, e));
}
function Tr(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function s_(e) {
  return e.match(r_) && !e.match(Hi);
}
function o_(e) {
  return n_.test(e);
}
function l_(e) {
  return !Tr(e) && (s_(e) || o_(e));
}
const We = {
  context: "$",
  value: "."
};
class le {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
      throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === We.context, this.isValue = this.key[0] === We.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? We.context : this.isValue ? We.value : "";
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
le.prototype.__isYupRef = !0;
function lt() {
  return lt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lt.apply(this, arguments);
}
function c_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Ke(e) {
  function t(r, n) {
    let {
      value: a,
      path: i = "",
      label: o,
      options: l,
      originalValue: c,
      sync: u
    } = r, d = c_(r, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name: p,
      test: f,
      params: h,
      message: y
    } = e;
    let {
      parent: g,
      context: v
    } = l;
    function m(A) {
      return le.isRef(A) ? A.getValue(a, g, v) : A;
    }
    function E(A = {}) {
      const ue = Gi(lt({
        value: a,
        originalValue: c,
        label: o,
        path: A.path || i
      }, h, A.params), m), Ve = new j(j.formatError(A.message || y, ue), a, ue.path, A.type || p);
      return Ve.params = ue, Ve;
    }
    let I = lt({
      path: i,
      parent: g,
      type: p,
      createError: E,
      resolve: m,
      options: l,
      originalValue: c
    }, d);
    if (!u) {
      try {
        Promise.resolve(f.call(I, a, I)).then((A) => {
          j.isError(A) ? n(A) : A ? n(null, A) : n(E());
        }).catch(n);
      } catch (A) {
        n(A);
      }
      return;
    }
    let B;
    try {
      var J;
      if (B = f.call(I, a, I), typeof ((J = B) == null ? void 0 : J.then) == "function")
        throw new Error(`Validation test of type: "${I.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (A) {
      n(A);
      return;
    }
    j.isError(B) ? n(B) : B ? n(null, B) : n(E());
  }
  return t.OPTIONS = e, t;
}
let u_ = (e) => e.substr(0, e.length - 1).substr(1);
function d_(e, t, r, n = r) {
  let a, i, o;
  return t ? (wt.forEach(t, (l, c, u) => {
    let d = c ? u_(l) : l;
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
class ct {
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
    const t = new ct();
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
class z {
  constructor(t) {
    this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new ct(), this._blacklist = new ct(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(pe.notType);
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
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = V({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = qt(V({}, this.spec, t)), r;
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
      let i = Be(t), o = Be(a);
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
    this._whitelistError && h.push(this._whitelistError), this._blacklistError && h.push(this._blacklistError), Yt({
      args: p,
      value: d,
      path: i,
      sync: a,
      tests: f,
      endEarly: u
    }, (y) => {
      if (y)
        return void n(y, d);
      Yt({
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
    return t == null ? t : typeof t == "function" ? t.call(this) : qt(t);
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
    let n = this.clone(), a = Ke(r), i = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === r.name && (i || o.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = Ui(t).map((i) => new le(i));
    return a.forEach((i) => {
      i.isSibling && n.deps.push(i.key);
    }), n.conditions.push(new VE(a, r)), n;
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
  oneOf(t, r = pe.oneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._whitelist.add(a), n._blacklist.delete(a);
    }), n._whitelistError = Ke({
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
  notOneOf(t, r = pe.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n._blacklistError = Ke({
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
z.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"])
  z.prototype[`${e}At`] = function(t, r, n = {}) {
    const {
      parent: a,
      parentPath: i,
      schema: o
    } = d_(this, t, r, n.context);
    return o[e](a && a[i], V({}, n, {
      parent: a,
      path: t
    }));
  };
for (const e of ["equals", "is"])
  z.prototype[e] = z.prototype.oneOf;
for (const e of ["not", "nope"])
  z.prototype[e] = z.prototype.notOneOf;
z.prototype.optional = z.prototype.notRequired;
const p_ = z;
p_.prototype;
const X = (e) => e == null;
let f_ = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, h_ = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, g_ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, m_ = (e) => X(e) || e === e.trim(), y_ = {}.toString();
function Re() {
  return new Yi();
}
class Yi extends z {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === y_ ? t : r;
      });
    });
  }
  _typeCheck(t) {
    return t instanceof String && (t = t.valueOf()), typeof t == "string";
  }
  _isPresent(t) {
    return super._isPresent(t) && !!t.length;
  }
  length(t, r = K.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      test(n) {
        return X(n) || n.length === this.resolve(t);
      }
    });
  }
  min(t, r = K.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(n) {
        return X(n) || n.length >= this.resolve(t);
      }
    });
  }
  max(t, r = K.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: t
      },
      test(n) {
        return X(n) || n.length <= this.resolve(t);
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
      message: a || K.matches,
      params: {
        regex: t
      },
      test: (o) => X(o) || o === "" && n || o.search(t) !== -1
    });
  }
  email(t = K.email) {
    return this.matches(f_, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = K.url) {
    return this.matches(h_, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = K.uuid) {
    return this.matches(g_, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = K.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: m_
    });
  }
  lowercase(t = K.lowercase) {
    return this.transform((r) => X(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => X(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = K.uppercase) {
    return this.transform((r) => X(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => X(r) || r === r.toUpperCase()
    });
  }
}
Re.prototype = Yi.prototype;
var b_ = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function v_(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, a;
  if (a = b_.exec(e)) {
    for (var i = 0, o; o = t[i]; ++i)
      a[o] = +a[o] || 0;
    a[2] = (+a[2] || 1) - 1, a[3] = +a[3] || 1, a[7] = a[7] ? String(a[7]).substr(0, 3) : 0, (a[8] === void 0 || a[8] === "") && (a[9] === void 0 || a[9] === "") ? n = +new Date(a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : (a[8] !== "Z" && a[9] !== void 0 && (r = a[10] * 60 + a[11], a[9] === "+" && (r = 0 - r)), n = Date.UTC(a[1], a[2], a[3], a[4], a[5] + r, a[6], a[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let Wi = /* @__PURE__ */ new Date(""), E_ = (e) => Object.prototype.toString.call(e) === "[object Date]";
class Ki extends z {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = v_(t), isNaN(t) ? Wi : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return E_(t) && !isNaN(t.getTime());
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
  min(t, r = Vt.min) {
    let n = this.prepareParam(t, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      test(a) {
        return X(a) || a >= this.resolve(n);
      }
    });
  }
  max(t, r = Vt.max) {
    let n = this.prepareParam(t, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      test(a) {
        return X(a) || a <= this.resolve(n);
      }
    });
  }
}
Ki.INVALID_DATE = Wi;
Ki.prototype;
function S_(e, t, r, n) {
  var a = -1, i = e == null ? 0 : e.length;
  for (n && i && (r = e[++a]); ++a < i; )
    r = t(r, e[a], a, e);
  return r;
}
var __ = S_;
function $_(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var x_ = $_, C_ = x_, w_ = {
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
}, T_ = C_(w_), F_ = T_, I_ = F_, A_ = ze, O_ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, R_ = "\\u0300-\\u036f", k_ = "\\ufe20-\\ufe2f", P_ = "\\u20d0-\\u20ff", D_ = R_ + k_ + P_, L_ = "[" + D_ + "]", B_ = RegExp(L_, "g");
function U_(e) {
  return e = A_(e), e && e.replace(O_, I_).replace(B_, "");
}
var N_ = U_, z_ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function M_(e) {
  return e.match(z_) || [];
}
var j_ = M_, Q_ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function q_(e) {
  return Q_.test(e);
}
var V_ = q_, Xi = "\\ud800-\\udfff", G_ = "\\u0300-\\u036f", H_ = "\\ufe20-\\ufe2f", Y_ = "\\u20d0-\\u20ff", W_ = G_ + H_ + Y_, Zi = "\\u2700-\\u27bf", Ji = "a-z\\xdf-\\xf6\\xf8-\\xff", K_ = "\\xac\\xb1\\xd7\\xf7", X_ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Z_ = "\\u2000-\\u206f", J_ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", es = "A-Z\\xc0-\\xd6\\xd8-\\xde", e$ = "\\ufe0e\\ufe0f", ts = K_ + X_ + Z_ + J_, rs = "['’]", Rn = "[" + ts + "]", t$ = "[" + W_ + "]", ns = "\\d+", r$ = "[" + Zi + "]", as = "[" + Ji + "]", is = "[^" + Xi + ts + ns + Zi + Ji + es + "]", n$ = "\\ud83c[\\udffb-\\udfff]", a$ = "(?:" + t$ + "|" + n$ + ")", i$ = "[^" + Xi + "]", ss = "(?:\\ud83c[\\udde6-\\uddff]){2}", os = "[\\ud800-\\udbff][\\udc00-\\udfff]", be = "[" + es + "]", s$ = "\\u200d", kn = "(?:" + as + "|" + is + ")", o$ = "(?:" + be + "|" + is + ")", Pn = "(?:" + rs + "(?:d|ll|m|re|s|t|ve))?", Dn = "(?:" + rs + "(?:D|LL|M|RE|S|T|VE))?", ls = a$ + "?", cs = "[" + e$ + "]?", l$ = "(?:" + s$ + "(?:" + [i$, ss, os].join("|") + ")" + cs + ls + ")*", c$ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", u$ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", d$ = cs + ls + l$, p$ = "(?:" + [r$, ss, os].join("|") + ")" + d$, f$ = RegExp([
  be + "?" + as + "+" + Pn + "(?=" + [Rn, be, "$"].join("|") + ")",
  o$ + "+" + Dn + "(?=" + [Rn, be + kn, "$"].join("|") + ")",
  be + "?" + kn + "+" + Pn,
  be + "+" + Dn,
  u$,
  c$,
  ns,
  p$
].join("|"), "g");
function h$(e) {
  return e.match(f$) || [];
}
var g$ = h$, m$ = j_, y$ = V_, b$ = ze, v$ = g$;
function E$(e, t, r) {
  return e = b$(e), t = r ? void 0 : t, t === void 0 ? y$(e) ? v$(e) : m$(e) : e.match(t) || [];
}
var S$ = E$, _$ = __, $$ = N_, x$ = S$, C$ = "['’]", w$ = RegExp(C$, "g");
function T$(e) {
  return function(t) {
    return _$(x$($$(t).replace(w$, "")), e, "");
  };
}
var us = T$, F$ = us, I$ = F$(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), A$ = I$;
const Ln = /* @__PURE__ */ k(A$);
function O$(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + t];
  return i;
}
var R$ = O$, k$ = R$;
function P$(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : k$(e, t, r);
}
var D$ = P$, L$ = "\\ud800-\\udfff", B$ = "\\u0300-\\u036f", U$ = "\\ufe20-\\ufe2f", N$ = "\\u20d0-\\u20ff", z$ = B$ + U$ + N$, M$ = "\\ufe0e\\ufe0f", j$ = "\\u200d", Q$ = RegExp("[" + j$ + L$ + z$ + M$ + "]");
function q$(e) {
  return Q$.test(e);
}
var ds = q$;
function V$(e) {
  return e.split("");
}
var G$ = V$, ps = "\\ud800-\\udfff", H$ = "\\u0300-\\u036f", Y$ = "\\ufe20-\\ufe2f", W$ = "\\u20d0-\\u20ff", K$ = H$ + Y$ + W$, X$ = "\\ufe0e\\ufe0f", Z$ = "[" + ps + "]", Kt = "[" + K$ + "]", Xt = "\\ud83c[\\udffb-\\udfff]", J$ = "(?:" + Kt + "|" + Xt + ")", fs = "[^" + ps + "]", hs = "(?:\\ud83c[\\udde6-\\uddff]){2}", gs = "[\\ud800-\\udbff][\\udc00-\\udfff]", e1 = "\\u200d", ms = J$ + "?", ys = "[" + X$ + "]?", t1 = "(?:" + e1 + "(?:" + [fs, hs, gs].join("|") + ")" + ys + ms + ")*", r1 = ys + ms + t1, n1 = "(?:" + [fs + Kt + "?", Kt, hs, gs, Z$].join("|") + ")", a1 = RegExp(Xt + "(?=" + Xt + ")|" + n1 + r1, "g");
function i1(e) {
  return e.match(a1) || [];
}
var s1 = i1, o1 = G$, l1 = ds, c1 = s1;
function u1(e) {
  return l1(e) ? c1(e) : o1(e);
}
var d1 = u1, p1 = D$, f1 = ds, h1 = d1, g1 = ze;
function m1(e) {
  return function(t) {
    t = g1(t);
    var r = f1(t) ? h1(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? p1(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var y1 = m1, b1 = y1, v1 = b1("toUpperCase"), E1 = v1, S1 = ze, _1 = E1;
function $1(e) {
  return _1(S1(e).toLowerCase());
}
var x1 = $1, C1 = x1, w1 = us, T1 = w1(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? C1(t) : t);
}), F1 = T1;
const I1 = /* @__PURE__ */ k(F1);
var A1 = _t, O1 = Ni, R1 = Vi;
function k1(e, t) {
  var r = {};
  return t = R1(t), O1(e, function(n, a, i) {
    A1(r, t(n, a, i), n);
  }), r;
}
var P1 = k1;
const D1 = /* @__PURE__ */ k(P1);
var Fr = { exports: {} };
Fr.exports = function(e) {
  return bs(L1(e), e);
};
Fr.exports.array = bs;
function bs(e, t) {
  var r = e.length, n = new Array(r), a = {}, i = r, o = B1(t), l = U1(e);
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
function L1(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.add(a[0]), t.add(a[1]);
  }
  return Array.from(t);
}
function B1(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.has(a[0]) || t.set(a[0], /* @__PURE__ */ new Set()), t.has(a[1]) || t.set(a[1], /* @__PURE__ */ new Set()), t.get(a[0]).add(a[1]);
  }
  return t;
}
function U1(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var N1 = Fr.exports;
const z1 = /* @__PURE__ */ k(N1);
function M1(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([o, l]) => `${o}-${l}`));
  function i(o, l) {
    let c = wt.split(o)[0];
    n.add(c), a.has(`${l}-${c}`) || r.push([l, c]);
  }
  for (const o in e)
    if (st(e, o)) {
      let l = e[o];
      n.add(o), le.isRef(l) && l.isSibling ? i(l.path, o) : Bi(l) && "deps" in l && l.deps.forEach((c) => i(c, o));
    }
  return z1.array(Array.from(n), r).reverse();
}
function Bn(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var i;
    if (((i = t.path) == null ? void 0 : i.indexOf(n)) !== -1)
      return r = a, !0;
  }), r;
}
function vs(e) {
  return (t, r) => Bn(e, t) - Bn(e, r);
}
function ve() {
  return ve = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ve.apply(this, arguments);
}
let Un = (e) => Object.prototype.toString.call(e) === "[object Object]";
function j1(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const Q1 = vs([]);
class Es extends z {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Q1, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
    let i = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, l = this._nodes.concat(Object.keys(a).filter((p) => this._nodes.indexOf(p) === -1)), c = {}, u = ve({}, r, {
      parent: c,
      __validating: r.__validating || !1
    }), d = !1;
    for (const p of l) {
      let f = i[p], h = st(a, p);
      if (f) {
        let y, g = a[p];
        u.path = (r.path ? `${r.path}.` : "") + p, f = f.resolve({
          value: g,
          context: r.context,
          parent: c
        });
        let v = "spec" in f ? f.spec : void 0, m = v == null ? void 0 : v.strict;
        if (v != null && v.strip) {
          d = d || p in a;
          continue;
        }
        y = !r.__validating || !m ? (
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
      if (!u || !Un(p)) {
        n(a[0] || null, p);
        return;
      }
      l = l || p;
      let f = this._nodes.map((h) => (y, g) => {
        let v = h.indexOf(".") === -1 ? (r.path ? `${r.path}.` : "") + h : `${r.path || ""}["${h}"]`, m = this.fields[h];
        if (m && "validate" in m) {
          m.validate(p[h], ve({}, r, {
            // @ts-ignore
            path: v,
            from: o,
            // inner fields are always strict:
            // 1. this isn't strict so the casting will also have cast inner values
            // 2. this is strict in which case the nested values weren't cast either
            strict: !0,
            parent: p,
            originalValue: l[h]
          }), g);
          return;
        }
        g(null);
      });
      Yt({
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
    return r.fields = ve({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), n = r.fields;
    for (let [a, i] of Object.entries(this.fields)) {
      const o = n[a];
      o === void 0 ? n[a] = i : o instanceof z && i instanceof z && (n[a] = i.concat(o));
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
    return n.fields = a, n._sortErrors = vs(Object.keys(a)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = M1(a, n._excludedEdges), n;
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
    return this.transform((i) => {
      if (i == null)
        return i;
      let o = i;
      return st(i, t) && (o = ve({}, i), n || delete o[t], o[r] = a(i)), o;
    });
  }
  noUnknown(t = !0, r = Gt.noUnknown) {
    typeof t == "string" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(a) {
        if (a == null)
          return !0;
        const i = j1(this.schema, a);
        return !t || i.length === 0 || this.createError({
          params: {
            unknown: i.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = Gt.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => r && D1(r, (n, a) => t(a)));
  }
  camelCase() {
    return this.transformKeys(I1);
  }
  snakeCase() {
    return this.transformKeys(Ln);
  }
  constantCase() {
    return this.transformKeys((t) => Ln(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = Gi(this.fields, (r) => r.describe()), t;
  }
}
function et(e) {
  return new Es(e);
}
et.prototype = Es.prototype;
const q1 = {
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
}, V1 = et({
  task: et({
    title: Re().required("Title is required"),
    recordType: Re().required("Record type is required"),
    serializer: Re().required("Serializer is required"),
    mode: Re().required("Mode is required")
  }),
  metadata: et().nullable()
}), G1 = ({ onSubmit: e }) => {
  const [t, r] = L(void 0), n = async (a) => {
    try {
      await SE(a.task, a.metadata, a.files, {
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
    no,
    {
      formik: {
        initialValues: q1,
        validationSchema: V1,
        onSubmit: n
      }
    },
    /* @__PURE__ */ s.createElement(TE, { progress: t })
  );
}, H1 = () => {
  const [e, t] = L(!1), { refreshSearch: r } = Ct(), n = O(() => {
    r(), t(!1);
  }, [r]);
  return /* @__PURE__ */ s.createElement(
    se,
    {
      closeIcon: !0,
      onClose: () => t(!1),
      onOpen: () => t(!0),
      open: e,
      trigger: /* @__PURE__ */ s.createElement(N, { color: "green", icon: !0, labelPosition: "left" }, /* @__PURE__ */ s.createElement(S, { name: "add" }), "New Import")
    },
    /* @__PURE__ */ s.createElement(Gs, null, "New Import Task"),
    /* @__PURE__ */ s.createElement(Hs, null, /* @__PURE__ */ s.createElement(G1, { onSubmit: n }))
  );
}, Y1 = ({
  currentQueryState: e,
  updateQueryState: t
}) => {
  var i;
  const r = [
    { key: "all", label: "All", value: null },
    { key: "pending", label: "Pending", value: "pending" },
    { key: "success", label: "Success", value: "success" },
    { key: "failed", label: "Failed", value: "failed" }
  ], n = (i = e.filters) == null ? void 0 : i.find(
    (o) => o[0] === "status"
  ), a = (o) => {
    var c;
    const l = ((c = e.filters) == null ? void 0 : c.filter(
      (u) => u[0] !== "status"
    )) || [];
    o && l.push(["status", o]), t({
      ...e,
      filters: l,
      page: 1
    });
  };
  return /* @__PURE__ */ s.createElement(Pe, { activeIndex: 0, compact: !0, size: "tiny" }, r.map(({ key: o, label: l, value: c }) => /* @__PURE__ */ s.createElement(
    Pe.Item,
    {
      key: o,
      name: o,
      active: (n == null ? void 0 : n[1]) === c || c === null && !n,
      onClick: () => a(c)
    },
    l
  )));
}, Ss = Za(Y1);
function Zt(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var W1 = (e) => typeof e == "object" && e !== null;
function K1(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var X1 = (e) => e === "base";
function Z1(e) {
  return e.slice().filter((t) => !X1(t));
}
function Nn(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function J1(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = Nn(r % 52) + t;
  return Nn(r % 52) + t;
}
function ex(e, t) {
  let r = t.length;
  for (; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function tx(e) {
  return J1(ex(5381, e) >>> 0);
}
var _s = /\s*!(important)?/i;
function rx(e) {
  return typeof e == "string" ? _s.test(e) : !1;
}
function nx(e) {
  return typeof e == "string" ? e.replace(_s, "").trim() : e;
}
function $s(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var Ir = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...n) => {
    const a = JSON.stringify(n);
    if (t.has(a))
      return t.get(a);
    const i = e(...n);
    return t.set(a, i), i;
  };
}, ax = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function xs(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((n) => {
    if (ax.has(n))
      return;
    const a = t[n], i = r[n];
    Zt(a) && Zt(i) ? t[n] = xs(a, i) : t[n] = i;
  }), t), {});
}
var ix = (e) => e != null;
function Cs(e, t, r = {}) {
  const { stop: n, getKey: a } = r;
  function i(o, l = []) {
    if (W1(o)) {
      const c = {};
      for (const [u, d] of Object.entries(o)) {
        const p = (a == null ? void 0 : a(u, d)) ?? u, f = [...l, p];
        if (n != null && n(o, f))
          return t(o, l);
        const h = i(d, f);
        ix(h) && (c[p] = h);
      }
      return c;
    }
    return t(o, l);
  }
  return i(e);
}
function sx(e, t) {
  return e.reduce(
    (r, n, a) => {
      const i = t[a];
      return n != null && (r[i] = n), r;
    },
    {}
  );
}
function ws(e, t, r = !0) {
  const { utility: n, conditions: a } = t, { hasShorthand: i, resolveShorthand: o } = n;
  return Cs(
    e,
    (l) => Array.isArray(l) ? sx(l, a.breakpoints.keys) : l,
    {
      stop: (l) => Array.isArray(l),
      getKey: r ? (l) => i ? o(l) : l : void 0
    }
  );
}
var ox = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, lx = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function cx(e) {
  const { utility: t, hash: r, conditions: n = ox } = e, a = (o) => [t.prefix, o].filter(Boolean).join("-"), i = (o, l) => {
    let c;
    if (r) {
      const u = [...n.finalize(o), l];
      c = a(t.toHash(u, tx));
    } else
      c = [...n.finalize(o), a(l)].join(":");
    return c;
  };
  return Ir(({ base: o, ...l } = {}) => {
    const c = Object.assign(l, o), u = ws(c, e), d = /* @__PURE__ */ new Set();
    return Cs(u, (p, f) => {
      if (p == null)
        return;
      const h = rx(p), [y, ...g] = n.shift(f), v = Z1(g), m = t.transform(y, nx(lx(p)));
      let E = i(v, m.className);
      h && (E = `${E}!`), d.add(E);
    }), Array.from(d).join(" ");
  });
}
function ux(...e) {
  return e.flat().filter((t) => Zt(t) && Object.keys(K1(t)).length > 0);
}
function dx(e) {
  function t(a) {
    const i = ux(...a);
    return i.length === 1 ? i : i.map((o) => ws(o, e));
  }
  function r(...a) {
    return xs(...t(a));
  }
  function n(...a) {
    return Object.assign({}, ...t(a));
  }
  return { mergeCss: Ir(r), assignCss: n };
}
var px = /([A-Z])/g, fx = /^ms-/, hx = Ir((e) => e.startsWith("--") ? e : e.replace(px, "-$1").replace(fx, "-ms-").toLowerCase()), gx = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${gx.split(",").join("|")}`;
const mx = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", Ts = new Set(mx.split(",")), yx = /^@|&|&$/;
function zn(e) {
  return Ts.has(e) || yx.test(e);
}
const bx = /^_/, vx = /&|@/;
function Ex(e) {
  return e.map((t) => Ts.has(t) ? t.replace(bx, "") : vx.test(t) ? `[${$s(t.trim())}]` : t);
}
function Sx(e) {
  return e.sort((t, r) => {
    const n = zn(t), a = zn(r);
    return n && !a ? 1 : !n && a ? -1 : 0;
  });
}
const _x = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle", Fs = /* @__PURE__ */ new Map(), Is = /* @__PURE__ */ new Map();
_x.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [n, ...a] = r.split("/");
  Fs.set(t, n), a.length && a.forEach((i) => {
    Is.set(i === "1" ? n : i, t);
  });
});
const Mn = (e) => Is.get(e) || e, As = {
  conditions: {
    shift: Sx,
    finalize: Ex,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = Mn(e);
      return { className: `${Fs.get(r) || hx(r)}_${$s(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: Mn
  }
}, $x = cx(As), ke = (...e) => $x(Os(...e));
ke.raw = (...e) => Os(...e);
const { mergeCss: Os, assignCss: tC } = dx(As), Xe = {
  searchBarRow: ke({
    display: "flex !important",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1rem",
    paddingBlock: "0.5rem",
    minBlockSize: "3rem"
  }),
  facets: ke({
    flex: "0 0 auto"
  }),
  search: ke({
    flex: "1 1 auto",
    minInlineSize: "15rem"
  }),
  visuallyHidden: ke({
    srOnly: !0
  })
}, xx = ({
  appId: e = "search"
}) => {
  const { showFacets: t, showImportModal: r } = Ct().config;
  return /* @__PURE__ */ s.createElement(b, { id: `${e}.SearchBarRow` }, /* @__PURE__ */ s.createElement(
    "section",
    {
      className: Xe.searchBarRow,
      "aria-label": "Records search and filters"
    },
    t && /* @__PURE__ */ s.createElement("div", { className: Xe.facets }, /* @__PURE__ */ s.createElement(Ss, null)),
    /* @__PURE__ */ s.createElement("div", { className: Xe.search }, /* @__PURE__ */ s.createElement(
      Zv,
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
    r && /* @__PURE__ */ s.createElement("div", { className: Xe.facets }, /* @__PURE__ */ s.createElement(H1, null))
  ));
}, Cx = () => {
  const { config: e } = Ct();
  return /* @__PURE__ */ s.createElement(M, null, /* @__PURE__ */ s.createElement(M.Row, { verticalAlign: "middle" }, /* @__PURE__ */ s.createElement(M.Column, { width: 4, textAlign: "left" }, /* @__PURE__ */ s.createElement(Iv, { label: (t) => /* @__PURE__ */ s.createElement("div", null, t, " item(s)") })), /* @__PURE__ */ s.createElement(M.Column, { width: 8, textAlign: "center" }, /* @__PURE__ */ s.createElement(Uv, { options: { size: "mini" } })), /* @__PURE__ */ s.createElement(M.Column, { width: 4, textAlign: "right" }, /* @__PURE__ */ s.createElement(
    Wv,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ s.createElement("p", null, t, " results per page")
    }
  ))));
}, Rs = ({
  config: e = {},
  overriddenComponents: t = {}
}) => {
  var i, o, l, c, u;
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
      resultsPerPage: ((i = e.paginationOptions) == null ? void 0 : i.resultsPerPage) || ne.paginationOptions.resultsPerPage
    },
    searchApi: {
      ...ne.searchApi,
      ...e.searchApi,
      axios: {
        ...ne.searchApi.axios,
        ...(o = e.searchApi) == null ? void 0 : o.axios,
        headers: {
          ...ne.searchApi.axios.headers,
          ...(c = (l = e.searchApi) == null ? void 0 : l.axios) == null ? void 0 : c.headers
        }
      },
      invenio: {
        ...ne.searchApi.invenio,
        ...(u = e.searchApi) == null ? void 0 : u.invenio
      }
    },
    showFacets: e.showFacets ?? !0,
    showImportModal: e.showImportModal ?? !0,
    showSearchFooter: e.showSearchFooter ?? !0
  }, n = new xa(r.searchApi), a = {
    [`${r.appId}.ResultsList.item`]: xE,
    [`${r.appId}.ResultsList.container`]: CE,
    [`${r.appId}.SearchFacets`]: Ss,
    ...t
  };
  return /* @__PURE__ */ s.createElement(Ms.Provider, { value: a }, /* @__PURE__ */ s.createElement(
    hv,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ s.createElement(lE, { config: r }, /* @__PURE__ */ s.createElement(xx, { appId: r.appId }), /* @__PURE__ */ s.createElement(Vv, null, /* @__PURE__ */ s.createElement(Rv, null), /* @__PURE__ */ s.createElement(oi, null)), r.showSearchFooter && /* @__PURE__ */ s.createElement(Cx, null))
  ));
}, wx = (e) => Us(() => {
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
}, [e]), Tx = ({
  totalRecords: e = 0,
  validatedRecords: t = 0,
  errorRecords: r = 0,
  successRecords: n = 0,
  showWhenEmpty: a = !1,
  className: i = "",
  style: o = {}
}) => {
  const l = wx({
    totalRecords: e,
    validatedRecords: t,
    errorRecords: r,
    successRecords: n
  });
  return e === 0 && !a ? null : /* @__PURE__ */ s.createElement(Y, { basic: !0, className: i, style: o }, /* @__PURE__ */ s.createElement(M, { columns: 3, stackable: !0 }, l.map((c) => /* @__PURE__ */ s.createElement(M.Column, { key: c.title }, /* @__PURE__ */ s.createElement(P, { fluid: !0 }, /* @__PURE__ */ s.createElement(P.Content, null, /* @__PURE__ */ s.createElement(P.Header, { textAlign: "center" }, c.title), /* @__PURE__ */ s.createElement(P.Description, { textAlign: "center" }, /* @__PURE__ */ s.createElement(
    Ft,
    {
      size: "large",
      color: c.color,
      style: { margin: "1rem 0" }
    },
    /* @__PURE__ */ s.createElement(Ft.Value, null, c.value),
    /* @__PURE__ */ s.createElement(Ft.Label, null, c.label)
  ), /* @__PURE__ */ s.createElement(Y, { basic: !0, textAlign: "center" }, /* @__PURE__ */ s.createElement(
    Y.Inline,
    {
      basic: !0,
      size: "small",
      style: { marginBottom: "0.5rem" }
    },
    c.progressLabel
  ), /* @__PURE__ */ s.createElement(
    Ys,
    {
      percent: c.progress,
      color: c.color,
      size: "small",
      style: { marginBottom: "0.5rem" }
    }
  )))))))));
}, ks = Ns(
  void 0
), Fx = ({
  taskId: e,
  children: t
}) => /* @__PURE__ */ s.createElement(ks.Provider, { value: { taskId: e } }, /* @__PURE__ */ s.createElement(
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
)), Ps = () => {
  const e = F(ks);
  if (!e)
    throw new Error("useTaskDetails must be used within a TaskDetailsProvider");
  return e;
}, Ix = ({ children: e }) => /* @__PURE__ */ s.createElement(w, { padded: !0, size: "small", compact: !0 }, /* @__PURE__ */ s.createElement(Vn, null, /* @__PURE__ */ s.createElement(ut, null, /* @__PURE__ */ s.createElement(H, null, "ID"), /* @__PURE__ */ s.createElement(H, null, "Title"), /* @__PURE__ */ s.createElement(H, null, "Status"), /* @__PURE__ */ s.createElement(H, null))), /* @__PURE__ */ s.createElement(Gn, null, e)), Ax = ({ record: e }) => /* @__PURE__ */ s.createElement(Y, { basic: !0 }, /* @__PURE__ */ s.createElement(_, null, /* @__PURE__ */ s.createElement(_.Item, null, /* @__PURE__ */ s.createElement(_.Icon, { name: "tag" }), /* @__PURE__ */ s.createElement(_.Content, null, /* @__PURE__ */ s.createElement(_.Header, null, "Record ID"), /* @__PURE__ */ s.createElement(_.Description, null, e.id))), /* @__PURE__ */ s.createElement(_.Item, null, /* @__PURE__ */ s.createElement(_.Icon, { name: "calendar" }), /* @__PURE__ */ s.createElement(_.Content, null, /* @__PURE__ */ s.createElement(_.Header, null, "Created"), /* @__PURE__ */ s.createElement(_.Description, null, Mt(e.created)))), /* @__PURE__ */ s.createElement(_.Item, null, /* @__PURE__ */ s.createElement(_.Icon, { name: "edit" }), /* @__PURE__ */ s.createElement(_.Content, null, /* @__PURE__ */ s.createElement(_.Header, null, "Updated"), /* @__PURE__ */ s.createElement(_.Description, null, Mt(e.updated)))), e.generated_record_id && /* @__PURE__ */ s.createElement(_.Item, null, /* @__PURE__ */ s.createElement(_.Icon, { name: "file alternate" }), /* @__PURE__ */ s.createElement(_.Content, null, /* @__PURE__ */ s.createElement(_.Header, null, "Generated Record ID"), /* @__PURE__ */ s.createElement(_.Description, null, /* @__PURE__ */ s.createElement(
  "a",
  {
    href: `/records/${e.generated_record_id}`,
    target: "_blank",
    rel: "noopener noreferrer"
  },
  "/",
  e.generated_record_id
)))))), Ox = ({ record: e }) => /* @__PURE__ */ s.createElement(Y, { basic: !0 }, e.errors.map((t, r) => /* @__PURE__ */ s.createElement(U, { key: `error-${r}-${t.type}`, negative: !0 }, /* @__PURE__ */ s.createElement(U.Header, null, t.type), /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Location:"), " ", t.loc), /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Message:"), " ", t.msg)))), Rx = ({ record: e }) => {
  var r, n;
  return (((r = e.record_files) == null ? void 0 : r.length) ?? 0) > 0 || (((n = e.validated_record_files) == null ? void 0 : n.length) ?? 0) > 0 ? /* @__PURE__ */ s.createElement(Y, { basic: !0 }, e.record_files && e.record_files.length > 0 && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(fe, { as: "h4" }, /* @__PURE__ */ s.createElement(S, { name: "file" }), "File List"), /* @__PURE__ */ s.createElement(_, { bulleted: !0 }, e.record_files.map((a) => /* @__PURE__ */ s.createElement(_.Item, { key: `file-${a}` }, /* @__PURE__ */ s.createElement(_.Content, null, a))))), e.validated_record_files && e.validated_record_files.length > 0 && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(fe, { as: "h4" }, /* @__PURE__ */ s.createElement(S, { name: "checkmark" }), "Validated Files"), /* @__PURE__ */ s.createElement(w, { celled: !0 }, /* @__PURE__ */ s.createElement(w.Header, null, /* @__PURE__ */ s.createElement(w.Row, null, /* @__PURE__ */ s.createElement(w.HeaderCell, null, "File"), /* @__PURE__ */ s.createElement(w.HeaderCell, null, "Size"), /* @__PURE__ */ s.createElement(w.HeaderCell, null, "Origin"), /* @__PURE__ */ s.createElement(w.HeaderCell, null, "Path"))), /* @__PURE__ */ s.createElement(w.Body, null, e.validated_record_files.map((a, i) => /* @__PURE__ */ s.createElement(w.Row, { key: `validated-${a.key}-${i}` }, /* @__PURE__ */ s.createElement(w.Cell, null, /* @__PURE__ */ s.createElement(S, { name: "file" }), a.key), /* @__PURE__ */ s.createElement(w.Cell, null, (a.size / 1024).toFixed(2), " KB"), /* @__PURE__ */ s.createElement(w.Cell, null, a.origin), /* @__PURE__ */ s.createElement(w.Cell, { style: { wordBreak: "break-all" } }, a.full_path))))))) : /* @__PURE__ */ s.createElement(U, { info: !0 }, /* @__PURE__ */ s.createElement(U.Header, null, "No Files"), /* @__PURE__ */ s.createElement("p", null, "No files are associated with this record."));
}, kx = ({ record: e }) => /* @__PURE__ */ s.createElement(w, { celled: !0, striped: !0 }, /* @__PURE__ */ s.createElement(w.Header, null, /* @__PURE__ */ s.createElement(w.Row, null, /* @__PURE__ */ s.createElement(w.HeaderCell, null, "Field"), /* @__PURE__ */ s.createElement(w.HeaderCell, null, "Value"))), /* @__PURE__ */ s.createElement(w.Body, null, Object.entries(e.src_data).filter(([t, r]) => r && r.trim() !== "").map(([t, r]) => /* @__PURE__ */ s.createElement(w.Row, { key: t }, /* @__PURE__ */ s.createElement(w.Cell, null, /* @__PURE__ */ s.createElement("strong", null, t)), /* @__PURE__ */ s.createElement(w.Cell, { style: { wordBreak: "break-word" } }, r))))), Px = ({
  record: e,
  open: t,
  onClose: r,
  initialTab: n = 0
}) => {
  const [a, i] = L(n);
  Ue(() => {
    t && i(n);
  }, [t, n]);
  const o = (u, d) => {
    const p = typeof d.activeIndex == "number" ? d.activeIndex : 0;
    i(p);
  }, l = [
    {
      menuItem: { key: "basic", icon: "info circle", content: "Basic Info" },
      render: () => /* @__PURE__ */ s.createElement(Ie.Pane, null, /* @__PURE__ */ s.createElement(Ax, { record: e }))
    },
    {
      menuItem: { key: "source", icon: "database", content: "Source Data" },
      render: () => /* @__PURE__ */ s.createElement(Ie.Pane, null, /* @__PURE__ */ s.createElement(kx, { record: e }))
    },
    ...e.errors && e.errors.length > 0 ? [
      {
        menuItem: {
          key: "errors",
          icon: "exclamation triangle",
          content: `Errors (${e.errors.length})`
        },
        render: () => /* @__PURE__ */ s.createElement(Ie.Pane, null, /* @__PURE__ */ s.createElement(Ox, { record: e }))
      }
    ] : [],
    {
      menuItem: { key: "files", icon: "file", content: "Files" },
      render: () => /* @__PURE__ */ s.createElement(Ie.Pane, null, /* @__PURE__ */ s.createElement(Rx, { record: e }))
    }
  ], c = () => {
    var u, d, p, f, h;
    return ((d = (u = e.serializer_data) == null ? void 0 : u.metadata) == null ? void 0 : d.title) || ((f = (p = e.transformed_data) == null ? void 0 : p.metadata) == null ? void 0 : f.title) || ((h = e.src_data) == null ? void 0 : h.title) || `Record ${e.id}`;
  };
  return /* @__PURE__ */ s.createElement(
    se,
    {
      centered: !1,
      open: t,
      onClose: r,
      size: "large",
      closeIcon: !0
    },
    /* @__PURE__ */ s.createElement(se.Header, null, /* @__PURE__ */ s.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }
      },
      /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(S, { name: "file alternate outline" }), c()),
      /* @__PURE__ */ s.createElement(cE, { status: e.status })
    )),
    /* @__PURE__ */ s.createElement(se.Content, { scrolling: !0 }, /* @__PURE__ */ s.createElement(
      Ie,
      {
        panes: l,
        activeIndex: a,
        onTabChange: o
      }
    )),
    /* @__PURE__ */ s.createElement(se.Actions, null, /* @__PURE__ */ s.createElement(N, { onClick: r }, /* @__PURE__ */ s.createElement(S, { name: "close" }), "Close"))
  );
}, Dx = ({
  result: e,
  index: t
}) => {
  var y;
  const [r, n] = L(
    "idle"
  ), [a, i] = L(!1), [o, l] = L(0);
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
  }, u = e.errors && e.errors.length > 0, d = fE(e.status), p = () => u ? 2 : -1, f = (g) => g === "red" ? "times" : g === "green" || g === "blue" ? "check" : "question", h = [
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
          await $E(e.id), console.log(`Record ${e.id} is being processed.`);
        } catch (g) {
          console.error("Error running record:", g);
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
  return /* @__PURE__ */ s.createElement(ut, { key: t }, /* @__PURE__ */ s.createElement(G, null, /* @__PURE__ */ s.createElement("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem" } }, /* @__PURE__ */ s.createElement("code", { style: { fontSize: "0.9em", color: "#666" } }, e.id.length > 20 ? `${e.id.substring(0, 20)}…` : e.id), /* @__PURE__ */ s.createElement(
    Ar,
    {
      content: r === "copied" ? "Copied!" : "Copy ID",
      trigger: /* @__PURE__ */ s.createElement(
        N,
        {
          size: "mini",
          circular: !0,
          icon: !0,
          loading: r === "copying",
          onClick: c,
          color: r === "copied" ? "green" : void 0
        },
        /* @__PURE__ */ s.createElement(S, { name: r === "copied" ? "check" : "copy" })
      ),
      position: "top center",
      size: "mini"
    }
  ))), /* @__PURE__ */ s.createElement(G, null, /* @__PURE__ */ s.createElement("div", { style: { maxWidth: "300px" } }, ((y = e.src_data) == null ? void 0 : y.title) || /* @__PURE__ */ s.createElement("em", { style: { color: "#999" } }, "No Title Available"))), /* @__PURE__ */ s.createElement(G, null, /* @__PURE__ */ s.createElement(ae, { color: d, size: "small" }, /* @__PURE__ */ s.createElement(S, { name: f(d) }), De(e.status)), u && /* @__PURE__ */ s.createElement(
    Ar,
    {
      content: `${e.errors.length} error${e.errors.length > 1 ? "s" : ""} found`,
      trigger: /* @__PURE__ */ s.createElement(
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
  )), /* @__PURE__ */ s.createElement(G, { textAlign: "right" }, /* @__PURE__ */ s.createElement(
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
    /* @__PURE__ */ s.createElement(oe.Menu, null, h.map((g) => /* @__PURE__ */ s.createElement(
      oe.Item,
      {
        key: g.key,
        icon: g.icon,
        text: g.text,
        disabled: g.disabled,
        onClick: g.onClick
      }
    )))
  ), /* @__PURE__ */ s.createElement(
    Px,
    {
      record: e,
      open: a,
      onClose: () => i(!1),
      initialTab: o
    }
  )));
}, Lx = () => {
  const { taskId: e } = Ps(), t = {
    "search.SearchBarRow": () => null,
    "search.ResultsList.container": Ix,
    "search.ResultsList.item": Dx
  };
  return /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(fe, { as: "h3" }, "Task Records"), /* @__PURE__ */ s.createElement(
    Rs,
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
}, Bx = ({
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
}) => /* @__PURE__ */ s.createElement(Jt, null, /* @__PURE__ */ s.createElement(
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
), /* @__PURE__ */ s.createElement(
  Y,
  {
    placeholder: !0,
    className: `file-drop-zone ${i ? "drag-over" : ""}`,
    onDragOver: c,
    onDragLeave: u,
    onDrop: d,
    style: {
      minHeight: "120px",
      border: i ? "2px dashed #2185d0" : "2px dashed #d4d4d5",
      backgroundColor: i ? "#f8f9fa" : "transparent",
      cursor: a ? "not-allowed" : "pointer",
      opacity: a ? 0.6 : 1
    },
    onClick: p
  },
  /* @__PURE__ */ s.createElement("div", { style: { textAlign: "center", padding: "20px" } }, /* @__PURE__ */ s.createElement(
    S,
    {
      name: "cloud upload",
      size: "huge",
      color: i ? "blue" : "grey"
    }
  ), /* @__PURE__ */ s.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Drop files here or click to select")), /* @__PURE__ */ s.createElement("p", { style: { fontSize: "12px", color: "#666" } }, "Max files: ", r, " | Max total: ", Cr(n)), o.length > 0 && /* @__PURE__ */ s.createElement(
    "p",
    {
      style: { fontSize: "12px", color: "#2185d0", marginTop: "8px" }
    },
    /* @__PURE__ */ s.createElement("strong", null, o.length, " files selected •", " ", Fi(o), " total")
  )))
)), Ux = ({
  onUploadError: e
} = {}) => {
  const [t, r] = L([]), [n] = L(!1), a = O(
    (c, u, d) => d && c.size === 0 ? "Empty files are not allowed" : u && !u.split(",").map((h) => h.trim()).some((h) => h.startsWith(".") ? c.name.toLowerCase().endsWith(h.toLowerCase()) : c.type.match(new RegExp(h.replace("*", ".*")))) ? `File type not accepted. Accepted types: ${u}` : null,
    []
  ), i = O(
    (c, u, d, p, f) => {
      const h = [], y = [];
      for (const g of c) {
        if (d && t.length + h.length >= d) {
          y.push(`Maximum ${d} files allowed`);
          break;
        }
        const v = a(g, u, f);
        if (v) {
          y.push(`${g.name}: ${v}`);
          continue;
        }
        if (t.some(
          (E) => E.file.name === g.name && E.file.size === g.size
        )) {
          y.push(`${g.name}: File already selected`);
          continue;
        }
        if (p && Ti([
          ...t,
          ...h
        ]) + g.size > p) {
          y.push(
            `Total size would exceed maximum of ${(p / 1024 / 1024).toFixed(2)}MB`
          );
          break;
        }
        h.push({
          file: g,
          id: `${g.name}-${g.size}-${Date.now()}`
        });
      }
      return y.length > 0 && (e == null || e(y.join(", "))), r((g) => [...g, ...h]), h;
    },
    [t, a, e]
  ), o = O((c) => {
    r((u) => u.filter((d) => d.id !== c));
  }, []), l = O(() => {
    r([]);
  }, []);
  return {
    uploadFiles: t,
    isUploading: n,
    addFiles: i,
    removeFile: o,
    clearFiles: l
  };
}, Nx = ({
  uploadFiles: e,
  isUploading: t,
  handleRemoveFile: r,
  handleClearFiles: n
}) => /* @__PURE__ */ s.createElement(Y, null, /* @__PURE__ */ s.createElement(
  "div",
  {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px"
    }
  },
  /* @__PURE__ */ s.createElement("strong", null, "Selected Files (", e.length, ") •", " ", Fi(e)),
  /* @__PURE__ */ s.createElement(
    N,
    {
      size: "mini",
      basic: !0,
      icon: "trash",
      content: "Clear All",
      onClick: n,
      disabled: t
    }
  )
), /* @__PURE__ */ s.createElement(_, { divided: !0 }, e.map((a) => /* @__PURE__ */ s.createElement(_.Item, { key: a.id }, /* @__PURE__ */ s.createElement(_.Content, null, /* @__PURE__ */ s.createElement(
  "div",
  {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  },
  /* @__PURE__ */ s.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ s.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }
    },
    /* @__PURE__ */ s.createElement(S, { name: "file" }),
    /* @__PURE__ */ s.createElement("span", null, a.file.name),
    /* @__PURE__ */ s.createElement(ae, { size: "mini", basic: !0 }, Cr(a.file.size))
  ), a.error && /* @__PURE__ */ s.createElement(U, { negative: !0, size: "mini", style: { marginTop: "5px" } }, a.error)),
  /* @__PURE__ */ s.createElement(
    N,
    {
      size: "mini",
      basic: !0,
      icon: "close",
      onClick: () => r(a.id),
      disabled: t
    }
  )
)))))), Ds = ({
  onChange: e,
  accept: t = ".csv,.json,.xlsx,.txt",
  maxFiles: r = 5,
  maxTotalSize: n = 50 * 1024 * 1024,
  // 50MB
  skipEmptyFiles: a = !0,
  disabled: i = !1,
  error: o
}) => {
  const l = zs(null), [c, u] = s.useState(!1), [d, p] = s.useState(
    null
  ), { uploadFiles: f, isUploading: h, addFiles: y, removeFile: g, clearFiles: v } = Ux({
    onUploadComplete: (T) => {
      e(T);
    },
    onUploadError: (T) => {
      console.error("Upload error:", T), p(T);
    }
  }), m = O(
    (T) => {
      if (!T || T.length === 0)
        return;
      p(null);
      const Tt = Array.from(T), me = y(
        Tt,
        t,
        r,
        n,
        a
      );
      if (me.length > 0) {
        const Ls = [...f, ...me].map((Bs) => Bs.file);
        e(Ls);
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
  ), E = O(
    (T) => {
      m(T.target.files), l.current && (l.current.value = "");
    },
    [m]
  ), I = O(
    (T) => {
      T.preventDefault(), i || u(!0);
    },
    [i]
  ), B = O((T) => {
    T.preventDefault(), u(!1);
  }, []), J = O(
    (T) => {
      T.preventDefault(), u(!1), !i && m(T.dataTransfer.files);
    },
    [i, m]
  ), A = O(() => {
    var T;
    i || (T = l.current) == null || T.click();
  }, [i]), ue = O(
    (T) => {
      g(T), p(null);
      const Tt = f.filter((me) => me.id !== T).map((me) => me.file);
      e(Tt);
    },
    [g, f, e]
  ), Ve = O(() => {
    v(), p(null), e([]);
  }, [v, e]);
  return /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(
    Bx,
    {
      fileInputRef: l,
      accept: t,
      maxFiles: r,
      maxTotalSize: n,
      isDragOver: c,
      disabled: i,
      uploadFiles: f,
      onInputChange: E,
      onDragOver: I,
      onDragLeave: B,
      onDrop: J,
      onFileDialogOpen: A
    }
  ), (o || d) && /* @__PURE__ */ s.createElement(U, { negative: !0, size: "small" }, /* @__PURE__ */ s.createElement(S, { name: "exclamation triangle" }), o || d), f.length > 0 && /* @__PURE__ */ s.createElement(
    Nx,
    {
      uploadFiles: f,
      isUploading: h,
      handleRemoveFile: ue,
      handleClearFiles: Ve
    }
  ));
}, zx = () => {
  const { taskId: e } = Ps(), [t, r] = L(null), [n, a] = L([]), [i, o] = L(!1), [l, c] = L(null), u = (h) => {
    var g;
    const y = ((g = h.target.files) == null ? void 0 : g[0]) || null;
    r(y || null);
  }, d = (h) => {
    a(h);
  }, p = () => {
    o(!1), r(null), a([]), c(null);
  }, f = async () => {
    if (!(!t && n.length === 0))
      try {
        await _E(
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
        ), t && await ki(e, {
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
    se,
    {
      open: i,
      onOpen: () => o(!0),
      onClose: p,
      size: "small",
      closeIcon: !0,
      trigger: /* @__PURE__ */ s.createElement(N, { icon: "upload", size: "tiny", content: "Upload Content" })
    },
    /* @__PURE__ */ s.createElement(fe, { icon: !0 }, /* @__PURE__ */ s.createElement(S, { name: "upload" }), "Upload Metadata & Files"),
    /* @__PURE__ */ s.createElement(se.Content, null, /* @__PURE__ */ s.createElement(Ee, { onSubmit: f }, /* @__PURE__ */ s.createElement(Ee.Field, null, /* @__PURE__ */ s.createElement("label", { htmlFor: "fileInput" }, "Select Metadata File (Optional)"), /* @__PURE__ */ s.createElement(
      "input",
      {
        id: "fileInput",
        type: "file",
        onChange: u,
        accept: ".csv"
      }
    ), t && /* @__PURE__ */ s.createElement("div", { style: { marginTop: "0.5rem", color: "#666" } }, "Selected: ", t.name)), /* @__PURE__ */ s.createElement(Ee.Field, null, /* @__PURE__ */ s.createElement(
      "div",
      {
        style: {
          marginBottom: "8px",
          fontSize: "14px",
          fontWeight: "bold"
        }
      },
      "Additional Files (Optional)"
    ), /* @__PURE__ */ s.createElement(
      Ds,
      {
        value: n,
        onChange: d,
        accept: "*",
        maxTotalSize: 10 * 1024 * 1024 * 1024,
        maxFiles: 100
      }
    )))),
    /* @__PURE__ */ s.createElement(se.Actions, null, /* @__PURE__ */ s.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: ".5rem"
        }
      },
      l && /* @__PURE__ */ s.createElement(xi, { progress: l }),
      /* @__PURE__ */ s.createElement(N, { onClick: p, color: "grey" }, /* @__PURE__ */ s.createElement(S, { name: "cancel" }), "Cancel"),
      /* @__PURE__ */ s.createElement(
        N,
        {
          onClick: f,
          color: "blue",
          disabled: !t && n.length === 0
        },
        /* @__PURE__ */ s.createElement(S, { name: "upload" }),
        "Upload"
      )
    ))
  );
}, Mx = ({ taskId: e }) => {
  var f, h, y, g, v, m;
  const [t, r] = L(null), { getStatus: n, isGettingStatus: a, runBulkImport: i, isBulkImporting: o, error: l } = Di(e, { onStatusChangeSuccess: r });
  if (Ue(() => {
    n();
  }, [n]), a || o)
    return /* @__PURE__ */ s.createElement(Ci, null);
  if (!t)
    return /* @__PURE__ */ s.createElement(U, { warning: !0, icon: !0 }, /* @__PURE__ */ s.createElement(S, { name: "search" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Task Not Found"), "The requested task could not be found."));
  const c = ((f = t.records_status) == null ? void 0 : f.total_records) || 0, u = ((h = t.records_status) == null ? void 0 : h.validated) || 0, d = ((y = t.records_status) == null ? void 0 : y.success) || 0, p = (((g = t.records_status) == null ? void 0 : g["import failed"]) || 0) + (((v = t.records_status) == null ? void 0 : v["validation failed"]) || 0) + (((m = t.records_status) == null ? void 0 : m["serializer validation failed"]) || 0);
  return /* @__PURE__ */ s.createElement(Fx, { taskId: e }, /* @__PURE__ */ s.createElement(Ws, { fluid: !0, verticalAlign: "top" }, l && /* @__PURE__ */ s.createElement(U, { negative: !0, icon: !0 }, /* @__PURE__ */ s.createElement(S, { name: "exclamation triangle" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Error"), (l == null ? void 0 : l.message) || "An unknown error occurred")), /* @__PURE__ */ s.createElement(M, null, /* @__PURE__ */ s.createElement(M.Row, { verticalAlign: "top" }, /* @__PURE__ */ s.createElement(M.Column, { width: 8, verticalAlign: "middle" }, /* @__PURE__ */ s.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: ".5rem"
      }
    },
    /* @__PURE__ */ s.createElement(S, { name: "tasks", circular: !0, size: "big" }),
    /* @__PURE__ */ s.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }
      },
      /* @__PURE__ */ s.createElement(fe, { as: "h2" }, /* @__PURE__ */ s.createElement(fe.Content, null, t.title)),
      t.status && /* @__PURE__ */ s.createElement(wi, { size: "large", status: t.status }, De(t.status))
    )
  )), /* @__PURE__ */ s.createElement(M.Column, { width: 8, textAlign: "right" }, /* @__PURE__ */ s.createElement(
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
    /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(
      N,
      {
        size: "tiny",
        color: "blue",
        icon: "refresh",
        content: "Refresh",
        onClick: () => n(),
        loading: a
      }
    ), /* @__PURE__ */ s.createElement(zx, null), /* @__PURE__ */ s.createElement(
      N,
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
    ))
  ))), t.description && /* @__PURE__ */ s.createElement(M.Row, null, /* @__PURE__ */ s.createElement(M.Column, { width: 16 }, /* @__PURE__ */ s.createElement(U, { info: !0, icon: !0, size: "small" }, /* @__PURE__ */ s.createElement(S, { name: "info circle" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Notes"), t.description))))), c > 0 && /* @__PURE__ */ s.createElement(Y, { basic: !0 }, /* @__PURE__ */ s.createElement(
    Tx,
    {
      totalRecords: c,
      validatedRecords: u,
      errorRecords: p,
      successRecords: d
    }
  ))), /* @__PURE__ */ s.createElement(Lx, null));
}, rC = {
  Search: Rs,
  TaskDetails: Mx
}, nC = {
  CREATED: "created",
  VALIDATING: "validating",
  SERIALIZER_VALIDATION_FAILED: "serializer validation failed",
  VALIDATION_FAILED: "validation failed",
  VALIDATED: "validated",
  IMPORT_FAILED: "import failed",
  IMPORTED: "success"
}, aC = {
  CREATED: "created",
  VALIDATING: "validating",
  VALIDATION_FAILED: "validated with failures",
  VALIDATED: "validated",
  IMPORTING: "importing",
  IMPORT_FAILED: "imported with failures",
  SUCCESS: "success",
  DAMAGED: "damaged"
}, iC = {
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
  rC as BulkImporter,
  Ds as FileUploader,
  H1 as ImportModal,
  aC as ImporterTaskStates,
  nC as InvenioImporterRecordStatus,
  iC as OrchestrationStepsEnum,
  Rs as Search,
  Mx as TaskDetails,
  Dx as TaskRecordItem,
  De as capitalizeFirstLetter,
  Jx as createSearchApi,
  eC as createSearchApiConfig,
  Mt as formatDate,
  Cr as formatFileSize,
  pE as getCsrfToken,
  fE as getStatusColor,
  Ti as getTotalSize,
  Fi as getTotalSizeFormatted,
  Ux as useFileUploader
};
