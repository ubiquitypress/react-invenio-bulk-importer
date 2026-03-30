import s, { Component as N, useContext as F, useEffect as Ae, useCallback as k, Fragment as pr, useState as D, useRef as oa, useMemo as la, createContext as no } from "react";
import E, { OverridableContext as ao } from "react-overridable";
import lt from "axios";
import Oe from "qs";
import { connect as R, Provider as io } from "react-redux";
import { Label as z, Icon as _, Input as ca, Button as M, List as $, Checkbox as fr, Card as Q, Segment as fe, Header as Ee, Menu as Bt, Pagination as so, Item as xe, Loader as ua, Dropdown as de, Image as oo, Dimmer as lo, TableRow as Et, TableCell as W, Table as T, TableHeader as da, TableHeaderCell as Y, TableBody as pa, Form as ve, Modal as ue, ModalHeader as co, ModalContent as uo, Grid as rt, Accordion as Ut, Message as K, Tab as Be, Popup as Te, Progress as po, Container as fo } from "semantic-ui-react";
import { combineReducers as mo, createStore as ho, applyMiddleware as go } from "redux";
import yo from "redux-thunk";
import bo from "lodash";
import { TextField as vo, SelectField as zt, BooleanField as Eo, TextAreaField as So, BaseForm as _o } from "react-invenio-forms";
import { useFormikContext as $o } from "formik";
var nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function P(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xo = Object.prototype;
function Co(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || xo;
  return e === r;
}
var St = Co;
function wo(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var fa = wo, To = fa, Io = To(Object.keys, Object), Fo = Io, Ao = St, Oo = Fo, ko = Object.prototype, Ro = ko.hasOwnProperty;
function Po(e) {
  if (!Ao(e))
    return Oo(e);
  var t = [];
  for (var r in Object(e))
    Ro.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var ma = Po, Do = typeof nt == "object" && nt && nt.Object === Object && nt, ha = Do, No = ha, Lo = typeof self == "object" && self && self.Object === Object && self, Bo = No || Lo || Function("return this")(), ne = Bo, Uo = ne, zo = Uo.Symbol, ke = zo, qr = ke, ga = Object.prototype, Mo = ga.hasOwnProperty, jo = ga.toString, Ue = qr ? qr.toStringTag : void 0;
function Qo(e) {
  var t = Mo.call(e, Ue), r = e[Ue];
  try {
    e[Ue] = void 0;
    var n = !0;
  } catch {
  }
  var a = jo.call(e);
  return n && (t ? e[Ue] = r : delete e[Ue]), a;
}
var Vo = Qo, qo = Object.prototype, Go = qo.toString;
function Ho(e) {
  return Go.call(e);
}
var Wo = Ho, Gr = ke, Yo = Vo, Ko = Wo, Xo = "[object Null]", Zo = "[object Undefined]", Hr = Gr ? Gr.toStringTag : void 0;
function Jo(e) {
  return e == null ? e === void 0 ? Zo : Xo : Hr && Hr in Object(e) ? Yo(e) : Ko(e);
}
var me = Jo;
function el(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var oe = el;
const tl = /* @__PURE__ */ P(oe);
var rl = me, nl = oe, al = "[object AsyncFunction]", il = "[object Function]", sl = "[object GeneratorFunction]", ol = "[object Proxy]";
function ll(e) {
  if (!nl(e))
    return !1;
  var t = rl(e);
  return t == il || t == sl || t == al || t == ol;
}
var ya = ll, cl = ne, ul = cl["__core-js_shared__"], dl = ul, Mt = dl, Wr = function() {
  var e = /[^.]+$/.exec(Mt && Mt.keys && Mt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function pl(e) {
  return !!Wr && Wr in e;
}
var fl = pl, ml = Function.prototype, hl = ml.toString;
function gl(e) {
  if (e != null) {
    try {
      return hl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ba = gl, yl = ya, bl = fl, vl = oe, El = ba, Sl = /[\\^$.*+?()[\]{}|]/g, _l = /^\[object .+?Constructor\]$/, $l = Function.prototype, xl = Object.prototype, Cl = $l.toString, wl = xl.hasOwnProperty, Tl = RegExp(
  "^" + Cl.call(wl).replace(Sl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Il(e) {
  if (!vl(e) || bl(e))
    return !1;
  var t = yl(e) ? Tl : _l;
  return t.test(El(e));
}
var Fl = Il;
function Al(e, t) {
  return e == null ? void 0 : e[t];
}
var Ol = Al, kl = Fl, Rl = Ol;
function Pl(e, t) {
  var r = Rl(e, t);
  return kl(r) ? r : void 0;
}
var Se = Pl, Dl = Se, Nl = ne, Ll = Dl(Nl, "DataView"), Bl = Ll, Ul = Se, zl = ne, Ml = Ul(zl, "Map"), mr = Ml, jl = Se, Ql = ne, Vl = jl(Ql, "Promise"), ql = Vl, Gl = Se, Hl = ne, Wl = Gl(Hl, "Set"), Yl = Wl, Kl = Se, Xl = ne, Zl = Kl(Xl, "WeakMap"), Jl = Zl, Wt = Bl, Yt = mr, Kt = ql, Xt = Yl, Zt = Jl, va = me, Re = ba, Yr = "[object Map]", ec = "[object Object]", Kr = "[object Promise]", Xr = "[object Set]", Zr = "[object WeakMap]", Jr = "[object DataView]", tc = Re(Wt), rc = Re(Yt), nc = Re(Kt), ac = Re(Xt), ic = Re(Zt), ye = va;
(Wt && ye(new Wt(new ArrayBuffer(1))) != Jr || Yt && ye(new Yt()) != Yr || Kt && ye(Kt.resolve()) != Kr || Xt && ye(new Xt()) != Xr || Zt && ye(new Zt()) != Zr) && (ye = function(e) {
  var t = va(e), r = t == ec ? e.constructor : void 0, n = r ? Re(r) : "";
  if (n)
    switch (n) {
      case tc:
        return Jr;
      case rc:
        return Yr;
      case nc:
        return Kr;
      case ac:
        return Xr;
      case ic:
        return Zr;
    }
  return t;
});
var We = ye;
function sc(e) {
  return e != null && typeof e == "object";
}
var ae = sc, oc = me, lc = ae, cc = "[object Arguments]";
function uc(e) {
  return lc(e) && oc(e) == cc;
}
var dc = uc, en = dc, pc = ae, Ea = Object.prototype, fc = Ea.hasOwnProperty, mc = Ea.propertyIsEnumerable, hc = en(function() {
  return arguments;
}()) ? en : function(e) {
  return pc(e) && fc.call(e, "callee") && !mc.call(e, "callee");
}, _t = hc, gc = Array.isArray, q = gc;
const Sa = /* @__PURE__ */ P(q);
var yc = 9007199254740991;
function bc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= yc;
}
var hr = bc, vc = ya, Ec = hr;
function Sc(e) {
  return e != null && Ec(e.length) && !vc(e);
}
var $t = Sc, dt = { exports: {} };
function _c() {
  return !1;
}
var $c = _c;
dt.exports;
(function(e, t) {
  var r = ne, n = $c, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, l = o ? r.Buffer : void 0, c = l ? l.isBuffer : void 0, u = c || n;
  e.exports = u;
})(dt, dt.exports);
var xt = dt.exports, xc = me, Cc = hr, wc = ae, Tc = "[object Arguments]", Ic = "[object Array]", Fc = "[object Boolean]", Ac = "[object Date]", Oc = "[object Error]", kc = "[object Function]", Rc = "[object Map]", Pc = "[object Number]", Dc = "[object Object]", Nc = "[object RegExp]", Lc = "[object Set]", Bc = "[object String]", Uc = "[object WeakMap]", zc = "[object ArrayBuffer]", Mc = "[object DataView]", jc = "[object Float32Array]", Qc = "[object Float64Array]", Vc = "[object Int8Array]", qc = "[object Int16Array]", Gc = "[object Int32Array]", Hc = "[object Uint8Array]", Wc = "[object Uint8ClampedArray]", Yc = "[object Uint16Array]", Kc = "[object Uint32Array]", w = {};
w[jc] = w[Qc] = w[Vc] = w[qc] = w[Gc] = w[Hc] = w[Wc] = w[Yc] = w[Kc] = !0;
w[Tc] = w[Ic] = w[zc] = w[Fc] = w[Mc] = w[Ac] = w[Oc] = w[kc] = w[Rc] = w[Pc] = w[Dc] = w[Nc] = w[Lc] = w[Bc] = w[Uc] = !1;
function Xc(e) {
  return wc(e) && Cc(e.length) && !!w[xc(e)];
}
var Zc = Xc;
function Jc(e) {
  return function(t) {
    return e(t);
  };
}
var gr = Jc, pt = { exports: {} };
pt.exports;
(function(e, t) {
  var r = ha, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, l = function() {
    try {
      var c = a && a.require && a.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(pt, pt.exports);
var yr = pt.exports, eu = Zc, tu = gr, tn = yr, rn = tn && tn.isTypedArray, ru = rn ? tu(rn) : eu, br = ru, nu = ma, au = We, iu = _t, su = q, ou = $t, lu = xt, cu = St, uu = br, du = "[object Map]", pu = "[object Set]", fu = Object.prototype, mu = fu.hasOwnProperty;
function hu(e) {
  if (e == null)
    return !0;
  if (ou(e) && (su(e) || typeof e == "string" || typeof e.splice == "function" || lu(e) || uu(e) || iu(e)))
    return !e.length;
  var t = au(e);
  if (t == du || t == pu)
    return !e.size;
  if (cu(e))
    return !nu(e).length;
  for (var r in e)
    if (mu.call(e, r))
      return !1;
  return !0;
}
var gu = hu;
const ie = /* @__PURE__ */ P(gu);
var yu = me, bu = ae, vu = "[object Symbol]";
function Eu(e) {
  return typeof e == "symbol" || bu(e) && yu(e) == vu;
}
var vr = Eu, Su = q, _u = vr, $u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xu = /^\w*$/;
function Cu(e, t) {
  if (Su(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || _u(e) ? !0 : xu.test(e) || !$u.test(e) || t != null && e in Object(t);
}
var Er = Cu, wu = Se, Tu = wu(Object, "create"), Ct = Tu, nn = Ct;
function Iu() {
  this.__data__ = nn ? nn(null) : {}, this.size = 0;
}
var Fu = Iu;
function Au(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ou = Au, ku = Ct, Ru = "__lodash_hash_undefined__", Pu = Object.prototype, Du = Pu.hasOwnProperty;
function Nu(e) {
  var t = this.__data__;
  if (ku) {
    var r = t[e];
    return r === Ru ? void 0 : r;
  }
  return Du.call(t, e) ? t[e] : void 0;
}
var Lu = Nu, Bu = Ct, Uu = Object.prototype, zu = Uu.hasOwnProperty;
function Mu(e) {
  var t = this.__data__;
  return Bu ? t[e] !== void 0 : zu.call(t, e);
}
var ju = Mu, Qu = Ct, Vu = "__lodash_hash_undefined__";
function qu(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Qu && t === void 0 ? Vu : t, this;
}
var Gu = qu, Hu = Fu, Wu = Ou, Yu = Lu, Ku = ju, Xu = Gu;
function Pe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Pe.prototype.clear = Hu;
Pe.prototype.delete = Wu;
Pe.prototype.get = Yu;
Pe.prototype.has = Ku;
Pe.prototype.set = Xu;
var Zu = Pe;
function Ju() {
  this.__data__ = [], this.size = 0;
}
var ed = Ju;
function td(e, t) {
  return e === t || e !== e && t !== t;
}
var wt = td, rd = wt;
function nd(e, t) {
  for (var r = e.length; r--; )
    if (rd(e[r][0], t))
      return r;
  return -1;
}
var Tt = nd, ad = Tt, id = Array.prototype, sd = id.splice;
function od(e) {
  var t = this.__data__, r = ad(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : sd.call(t, r, 1), --this.size, !0;
}
var ld = od, cd = Tt;
function ud(e) {
  var t = this.__data__, r = cd(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var dd = ud, pd = Tt;
function fd(e) {
  return pd(this.__data__, e) > -1;
}
var md = fd, hd = Tt;
function gd(e, t) {
  var r = this.__data__, n = hd(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var yd = gd, bd = ed, vd = ld, Ed = dd, Sd = md, _d = yd;
function De(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
De.prototype.clear = bd;
De.prototype.delete = vd;
De.prototype.get = Ed;
De.prototype.has = Sd;
De.prototype.set = _d;
var It = De, an = Zu, $d = It, xd = mr;
function Cd() {
  this.size = 0, this.__data__ = {
    hash: new an(),
    map: new (xd || $d)(),
    string: new an()
  };
}
var wd = Cd;
function Td(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Id = Td, Fd = Id;
function Ad(e, t) {
  var r = e.__data__;
  return Fd(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Ft = Ad, Od = Ft;
function kd(e) {
  var t = Od(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Rd = kd, Pd = Ft;
function Dd(e) {
  return Pd(this, e).get(e);
}
var Nd = Dd, Ld = Ft;
function Bd(e) {
  return Ld(this, e).has(e);
}
var Ud = Bd, zd = Ft;
function Md(e, t) {
  var r = zd(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var jd = Md, Qd = wd, Vd = Rd, qd = Nd, Gd = Ud, Hd = jd;
function Ne(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ne.prototype.clear = Qd;
Ne.prototype.delete = Vd;
Ne.prototype.get = qd;
Ne.prototype.has = Gd;
Ne.prototype.set = Hd;
var Sr = Ne, _a = Sr, Wd = "Expected a function";
function _r(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Wd);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (_r.Cache || _a)(), r;
}
_r.Cache = _a;
var Yd = _r, Kd = Yd, Xd = 500;
function Zd(e) {
  var t = Kd(e, function(n) {
    return r.size === Xd && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Jd = Zd, ep = Jd, tp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, rp = /\\(\\)?/g, np = ep(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(tp, function(r, n, a, i) {
    t.push(a ? i.replace(rp, "$1") : n || r);
  }), t;
}), ap = np;
function ip(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var sp = ip, sn = ke, op = sp, lp = q, cp = vr, up = 1 / 0, on = sn ? sn.prototype : void 0, ln = on ? on.toString : void 0;
function $a(e) {
  if (typeof e == "string")
    return e;
  if (lp(e))
    return op(e, $a) + "";
  if (cp(e))
    return ln ? ln.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -up ? "-0" : t;
}
var dp = $a, pp = dp;
function fp(e) {
  return e == null ? "" : pp(e);
}
var Ye = fp, mp = q, hp = Er, gp = ap, yp = Ye;
function bp(e, t) {
  return mp(e) ? e : hp(e, t) ? [e] : gp(yp(e));
}
var At = bp, vp = vr, Ep = 1 / 0;
function Sp(e) {
  if (typeof e == "string" || vp(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ep ? "-0" : t;
}
var Ke = Sp, _p = At, $p = Ke;
function xp(e, t) {
  t = _p(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[$p(t[r++])];
  return r && r == n ? e : void 0;
}
var $r = xp, Cp = $r;
function wp(e, t, r) {
  var n = e == null ? void 0 : Cp(e, t);
  return n === void 0 ? r : n;
}
var xa = wp;
const Qe = /* @__PURE__ */ P(xa);
function Tp(e, t) {
  return e != null && t in Object(e);
}
var Ip = Tp, Fp = 9007199254740991, Ap = /^(?:0|[1-9]\d*)$/;
function Op(e, t) {
  var r = typeof e;
  return t = t ?? Fp, !!t && (r == "number" || r != "symbol" && Ap.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ot = Op, kp = At, Rp = _t, Pp = q, Dp = Ot, Np = hr, Lp = Ke;
function Bp(e, t, r) {
  t = kp(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = Lp(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && Np(a) && Dp(o, a) && (Pp(e) || Rp(e)));
}
var Ca = Bp, Up = Ip, zp = Ca;
function Mp(e, t) {
  return e != null && zp(e, t, Up);
}
var xr = Mp;
const jp = /* @__PURE__ */ P(xr);
var Qp = Se, Vp = function() {
  try {
    var e = Qp(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), wa = Vp, cn = wa;
function qp(e, t, r) {
  t == "__proto__" && cn ? cn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var kt = qp, Gp = kt, Hp = wt, Wp = Object.prototype, Yp = Wp.hasOwnProperty;
function Kp(e, t, r) {
  var n = e[t];
  (!(Yp.call(e, t) && Hp(n, r)) || r === void 0 && !(t in e)) && Gp(e, t, r);
}
var Cr = Kp, Xp = Cr, Zp = kt;
function Jp(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var i = -1, o = t.length; ++i < o; ) {
    var l = t[i], c = n ? n(r[l], e[l], l, r, e) : void 0;
    c === void 0 && (c = e[l]), a ? Zp(r, l, c) : Xp(r, l, c);
  }
  return r;
}
var Xe = Jp;
function ef(e) {
  return e;
}
var wr = ef;
function tf(e, t, r) {
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
var rf = tf, nf = rf, un = Math.max;
function af(e, t, r) {
  return t = un(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = un(n.length - t, 0), o = Array(i); ++a < i; )
      o[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(o), nf(e, this, l);
  };
}
var Ta = af;
function sf(e) {
  return function() {
    return e;
  };
}
var of = sf, lf = of, dn = wa, cf = wr, uf = dn ? function(e, t) {
  return dn(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: lf(t),
    writable: !0
  });
} : cf, df = uf, pf = 800, ff = 16, mf = Date.now;
function hf(e) {
  var t = 0, r = 0;
  return function() {
    var n = mf(), a = ff - (n - r);
    if (r = n, a > 0) {
      if (++t >= pf)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var gf = hf, yf = df, bf = gf, vf = bf(yf), Ia = vf, Ef = wr, Sf = Ta, _f = Ia;
function $f(e, t) {
  return _f(Sf(e, t, Ef), e + "");
}
var xf = $f, Cf = wt, wf = $t, Tf = Ot, If = oe;
function Ff(e, t, r) {
  if (!If(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? wf(r) && Tf(t, r.length) : n == "string" && t in r) ? Cf(r[t], e) : !1;
}
var Af = Ff, Of = xf, kf = Af;
function Rf(e) {
  return Of(function(t, r) {
    var n = -1, a = r.length, i = a > 1 ? r[a - 1] : void 0, o = a > 2 ? r[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0, o && kf(r[0], r[1], o) && (i = a < 3 ? void 0 : i, a = 1), t = Object(t); ++n < a; ) {
      var l = r[n];
      l && e(t, l, n, i);
    }
    return t;
  });
}
var Pf = Rf;
function Df(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Nf = Df, Lf = Nf, Bf = _t, Uf = q, zf = xt, Mf = Ot, jf = br, Qf = Object.prototype, Vf = Qf.hasOwnProperty;
function qf(e, t) {
  var r = Uf(e), n = !r && Bf(e), a = !r && !n && zf(e), i = !r && !n && !a && jf(e), o = r || n || a || i, l = o ? Lf(e.length, String) : [], c = l.length;
  for (var u in e)
    (t || Vf.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Mf(u, c))) && l.push(u);
  return l;
}
var Fa = qf;
function Gf(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Hf = Gf, Wf = oe, Yf = St, Kf = Hf, Xf = Object.prototype, Zf = Xf.hasOwnProperty;
function Jf(e) {
  if (!Wf(e))
    return Kf(e);
  var t = Yf(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Zf.call(e, n)) || r.push(n);
  return r;
}
var em = Jf, tm = Fa, rm = em, nm = $t;
function am(e) {
  return nm(e) ? tm(e, !0) : rm(e);
}
var Rt = am, im = Xe, sm = Pf, om = Rt, lm = sm(function(e, t) {
  im(t, om(t), e);
}), cm = lm, um = cm;
const ft = /* @__PURE__ */ P(um);
function dm(e) {
  return e && e.length ? e[0] : void 0;
}
var pm = dm;
const fm = /* @__PURE__ */ P(pm);
var mm = Cr, hm = At, gm = Ot, pn = oe, ym = Ke;
function bm(e, t, r, n) {
  if (!pn(e))
    return e;
  t = hm(t, e);
  for (var a = -1, i = t.length, o = i - 1, l = e; l != null && ++a < i; ) {
    var c = ym(t[a]), u = r;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (a != o) {
      var d = l[c];
      u = n ? n(d, c, l) : void 0, u === void 0 && (u = pn(d) ? d : gm(t[a + 1]) ? [] : {});
    }
    mm(l, c, u), l = l[c];
  }
  return e;
}
var vm = bm, Em = $r, Sm = vm, _m = At;
function $m(e, t, r) {
  for (var n = -1, a = t.length, i = {}; ++n < a; ) {
    var o = t[n], l = Em(e, o);
    r(l, o) && Sm(i, _m(o, e), l);
  }
  return i;
}
var xm = $m, Cm = xm, wm = xr;
function Tm(e, t) {
  return Cm(e, t, function(r, n) {
    return wm(e, n);
  });
}
var Im = Tm;
function Fm(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Tr = Fm, fn = ke, Am = _t, Om = q, mn = fn ? fn.isConcatSpreadable : void 0;
function km(e) {
  return Om(e) || Am(e) || !!(mn && e && e[mn]);
}
var Rm = km, Pm = Tr, Dm = Rm;
function Aa(e, t, r, n, a) {
  var i = -1, o = e.length;
  for (r || (r = Dm), a || (a = []); ++i < o; ) {
    var l = e[i];
    t > 0 && r(l) ? t > 1 ? Aa(l, t - 1, r, n, a) : Pm(a, l) : n || (a[a.length] = l);
  }
  return a;
}
var Nm = Aa, Lm = Nm;
function Bm(e) {
  var t = e == null ? 0 : e.length;
  return t ? Lm(e, 1) : [];
}
var Um = Bm, zm = Um, Mm = Ta, jm = Ia;
function Qm(e) {
  return jm(Mm(e, void 0, zm), e + "");
}
var Vm = Qm, qm = Im, Gm = Vm, Hm = Gm(function(e, t) {
  return e == null ? {} : qm(e, t);
}), Wm = Hm;
const Ym = /* @__PURE__ */ P(Wm);
var Km = It;
function Xm() {
  this.__data__ = new Km(), this.size = 0;
}
var Zm = Xm;
function Jm(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var eh = Jm;
function th(e) {
  return this.__data__.get(e);
}
var rh = th;
function nh(e) {
  return this.__data__.has(e);
}
var ah = nh, ih = It, sh = mr, oh = Sr, lh = 200;
function ch(e, t) {
  var r = this.__data__;
  if (r instanceof ih) {
    var n = r.__data__;
    if (!sh || n.length < lh - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new oh(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var uh = ch, dh = It, ph = Zm, fh = eh, mh = rh, hh = ah, gh = uh;
function Le(e) {
  var t = this.__data__ = new dh(e);
  this.size = t.size;
}
Le.prototype.clear = ph;
Le.prototype.delete = fh;
Le.prototype.get = mh;
Le.prototype.has = hh;
Le.prototype.set = gh;
var Ir = Le;
function yh(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var bh = yh, vh = Fa, Eh = ma, Sh = $t;
function _h(e) {
  return Sh(e) ? vh(e) : Eh(e);
}
var Ze = _h, $h = Xe, xh = Ze;
function Ch(e, t) {
  return e && $h(t, xh(t), e);
}
var wh = Ch, Th = Xe, Ih = Rt;
function Fh(e, t) {
  return e && Th(t, Ih(t), e);
}
var Ah = Fh, mt = { exports: {} };
mt.exports;
(function(e, t) {
  var r = ne, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i ? r.Buffer : void 0, l = o ? o.allocUnsafe : void 0;
  function c(u, d) {
    if (d)
      return u.slice();
    var p = u.length, m = l ? l(p) : new u.constructor(p);
    return u.copy(m), m;
  }
  e.exports = c;
})(mt, mt.exports);
var Oh = mt.exports;
function kh(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Rh = kh;
function Ph(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
var Dh = Ph;
function Nh() {
  return [];
}
var Oa = Nh, Lh = Dh, Bh = Oa, Uh = Object.prototype, zh = Uh.propertyIsEnumerable, hn = Object.getOwnPropertySymbols, Mh = hn ? function(e) {
  return e == null ? [] : (e = Object(e), Lh(hn(e), function(t) {
    return zh.call(e, t);
  }));
} : Bh, Fr = Mh, jh = Xe, Qh = Fr;
function Vh(e, t) {
  return jh(e, Qh(e), t);
}
var qh = Vh, Gh = fa, Hh = Gh(Object.getPrototypeOf, Object), ka = Hh, Wh = Tr, Yh = ka, Kh = Fr, Xh = Oa, Zh = Object.getOwnPropertySymbols, Jh = Zh ? function(e) {
  for (var t = []; e; )
    Wh(t, Kh(e)), e = Yh(e);
  return t;
} : Xh, Ra = Jh, eg = Xe, tg = Ra;
function rg(e, t) {
  return eg(e, tg(e), t);
}
var ng = rg, ag = Tr, ig = q;
function sg(e, t, r) {
  var n = t(e);
  return ig(e) ? n : ag(n, r(e));
}
var Pa = sg, og = Pa, lg = Fr, cg = Ze;
function ug(e) {
  return og(e, cg, lg);
}
var Da = ug, dg = Pa, pg = Ra, fg = Rt;
function mg(e) {
  return dg(e, fg, pg);
}
var hg = mg, gg = Object.prototype, yg = gg.hasOwnProperty;
function bg(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && yg.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var vg = bg, Eg = ne, Sg = Eg.Uint8Array, Na = Sg, gn = Na;
function _g(e) {
  var t = new e.constructor(e.byteLength);
  return new gn(t).set(new gn(e)), t;
}
var Ar = _g, $g = Ar;
function xg(e, t) {
  var r = t ? $g(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Cg = xg, wg = /\w*$/;
function Tg(e) {
  var t = new e.constructor(e.source, wg.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Ig = Tg, yn = ke, bn = yn ? yn.prototype : void 0, vn = bn ? bn.valueOf : void 0;
function Fg(e) {
  return vn ? Object(vn.call(e)) : {};
}
var Ag = Fg, Og = Ar;
function kg(e, t) {
  var r = t ? Og(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Rg = kg, Pg = Ar, Dg = Cg, Ng = Ig, Lg = Ag, Bg = Rg, Ug = "[object Boolean]", zg = "[object Date]", Mg = "[object Map]", jg = "[object Number]", Qg = "[object RegExp]", Vg = "[object Set]", qg = "[object String]", Gg = "[object Symbol]", Hg = "[object ArrayBuffer]", Wg = "[object DataView]", Yg = "[object Float32Array]", Kg = "[object Float64Array]", Xg = "[object Int8Array]", Zg = "[object Int16Array]", Jg = "[object Int32Array]", ey = "[object Uint8Array]", ty = "[object Uint8ClampedArray]", ry = "[object Uint16Array]", ny = "[object Uint32Array]";
function ay(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Hg:
      return Pg(e);
    case Ug:
    case zg:
      return new n(+e);
    case Wg:
      return Dg(e, r);
    case Yg:
    case Kg:
    case Xg:
    case Zg:
    case Jg:
    case ey:
    case ty:
    case ry:
    case ny:
      return Bg(e, r);
    case Mg:
      return new n();
    case jg:
    case qg:
      return new n(e);
    case Qg:
      return Ng(e);
    case Vg:
      return new n();
    case Gg:
      return Lg(e);
  }
}
var iy = ay, sy = oe, En = Object.create, oy = function() {
  function e() {
  }
  return function(t) {
    if (!sy(t))
      return {};
    if (En)
      return En(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), ly = oy, cy = ly, uy = ka, dy = St;
function py(e) {
  return typeof e.constructor == "function" && !dy(e) ? cy(uy(e)) : {};
}
var fy = py, my = We, hy = ae, gy = "[object Map]";
function yy(e) {
  return hy(e) && my(e) == gy;
}
var by = yy, vy = by, Ey = gr, Sn = yr, _n = Sn && Sn.isMap, Sy = _n ? Ey(_n) : vy, _y = Sy, $y = We, xy = ae, Cy = "[object Set]";
function wy(e) {
  return xy(e) && $y(e) == Cy;
}
var Ty = wy, Iy = Ty, Fy = gr, $n = yr, xn = $n && $n.isSet, Ay = xn ? Fy(xn) : Iy, Oy = Ay, ky = Ir, Ry = bh, Py = Cr, Dy = wh, Ny = Ah, Ly = Oh, By = Rh, Uy = qh, zy = ng, My = Da, jy = hg, Qy = We, Vy = vg, qy = iy, Gy = fy, Hy = q, Wy = xt, Yy = _y, Ky = oe, Xy = Oy, Zy = Ze, Jy = Rt, eb = 1, tb = 2, rb = 4, La = "[object Arguments]", nb = "[object Array]", ab = "[object Boolean]", ib = "[object Date]", sb = "[object Error]", Ba = "[object Function]", ob = "[object GeneratorFunction]", lb = "[object Map]", cb = "[object Number]", Ua = "[object Object]", ub = "[object RegExp]", db = "[object Set]", pb = "[object String]", fb = "[object Symbol]", mb = "[object WeakMap]", hb = "[object ArrayBuffer]", gb = "[object DataView]", yb = "[object Float32Array]", bb = "[object Float64Array]", vb = "[object Int8Array]", Eb = "[object Int16Array]", Sb = "[object Int32Array]", _b = "[object Uint8Array]", $b = "[object Uint8ClampedArray]", xb = "[object Uint16Array]", Cb = "[object Uint32Array]", x = {};
x[La] = x[nb] = x[hb] = x[gb] = x[ab] = x[ib] = x[yb] = x[bb] = x[vb] = x[Eb] = x[Sb] = x[lb] = x[cb] = x[Ua] = x[ub] = x[db] = x[pb] = x[fb] = x[_b] = x[$b] = x[xb] = x[Cb] = !0;
x[sb] = x[Ba] = x[mb] = !1;
function ct(e, t, r, n, a, i) {
  var o, l = t & eb, c = t & tb, u = t & rb;
  if (r && (o = a ? r(e, n, a, i) : r(e)), o !== void 0)
    return o;
  if (!Ky(e))
    return e;
  var d = Hy(e);
  if (d) {
    if (o = Vy(e), !l)
      return By(e, o);
  } else {
    var p = Qy(e), m = p == Ba || p == ob;
    if (Wy(e))
      return Ly(e, l);
    if (p == Ua || p == La || m && !a) {
      if (o = c || m ? {} : Gy(e), !l)
        return c ? zy(e, Ny(o, e)) : Uy(e, Dy(o, e));
    } else {
      if (!x[p])
        return a ? e : {};
      o = qy(e, p, l);
    }
  }
  i || (i = new ky());
  var f = i.get(e);
  if (f)
    return f;
  i.set(e, o), Xy(e) ? e.forEach(function(v) {
    o.add(ct(v, t, r, v, e, i));
  }) : Yy(e) && e.forEach(function(v, b) {
    o.set(b, ct(v, t, r, b, e, i));
  });
  var y = u ? c ? jy : My : c ? Jy : Zy, g = d ? void 0 : y(e);
  return Ry(g || e, function(v, b) {
    g && (b = v, v = e[b]), Py(o, b, ct(v, t, r, b, e, i));
  }), o;
}
var wb = ct, Tb = wb, Ib = 1, Fb = 4;
function Ab(e) {
  return Tb(e, Ib | Fb);
}
var Ob = Ab;
const Ie = /* @__PURE__ */ P(Ob);
var kb = me, Rb = ae, Pb = "[object Boolean]";
function Db(e) {
  return e === !0 || e === !1 || Rb(e) && kb(e) == Pb;
}
var Nb = Db;
const Lb = /* @__PURE__ */ P(Nb);
var Bb = me, Ub = q, zb = ae, Mb = "[object String]";
function jb(e) {
  return typeof e == "string" || !Ub(e) && zb(e) && Bb(e) == Mb;
}
var Qb = jb;
const Vb = /* @__PURE__ */ P(Qb);
var qb = me, Gb = ae, Hb = "[object Number]";
function Wb(e) {
  return typeof e == "number" || Gb(e) && qb(e) == Hb;
}
var Yb = Wb;
const Kb = /* @__PURE__ */ P(Yb);
function Or() {
}
Or.prototype = new Error();
class Cn {
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
    r !== null && (u.q = r), n !== null && (u.sort = n, a !== null && (u.sort = a === "desc" ? `-${n}` : n)), i > 0 && (u.page = i), o > 0 && (u.size = o), ie(c) || ft(u, this._addFilters(c));
    const d = this._addFilters(l);
    return ft(u, d), Oe.stringify(u, {
      arrayFormat: "repeat"
    });
  }
}
class Xb {
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
function at(e, t) {
  return e.indexOf(t) === 0 && (e.length === t.length || e.indexOf(t + "&") === 0);
}
function jt(e) {
  return Oe.stringify({
    q: e
  });
}
function Zb(e) {
  return Oe.parse(e).q;
}
function za(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = za(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function wn(e, t) {
  const r = jt(e), n = t.map((o) => jt(o));
  let a = !1;
  const i = n.filter((o) => {
    const l = at(o, r), c = at(r, o);
    return l && !a && (a = !0), !l && !c;
  });
  if (!a)
    i.push(r);
  else if (e.length === 3) {
    const l = za(e), c = jt(l), u = i.some((d) => {
      const p = at(d, c), m = at(c, d);
      return p || m;
    });
    (ie(i) || !u) && i.push(c);
  }
  return i.map((o) => Zb(o));
}
const Ma = (e, t) => {
  if (ie(e))
    return;
  if (!Sa(fm(e)))
    return wn(e, t);
  let r = t;
  for (const n of e)
    r = wn(n, r);
  return r;
}, ja = (e, t, r) => {
  let n = Ym(t, r);
  return ie(n.filters) || (n.filters = Ma(n.filters, e.filters)), n;
}, ht = {
  queryString: "",
  suggestions: [],
  sortBy: null,
  sortOrder: null,
  page: -1,
  size: -1,
  filters: [],
  hiddenParams: [],
  layout: null
}, Qa = Object.keys(ht), Jb = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, ev = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class tv {
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
    r !== null && (u.q = r), n !== null && (u.sort = n, a !== null && (u.sort = a === "desc" ? `-${n}` : n)), i > 0 && (u.page = i), o > 0 && (u.size = o), ie(c) || ft(u, this._addFilters(c));
    const d = this._addFilters(l);
    return ft(u, d), Oe.stringify(u, {
      arrayFormat: "repeat"
    });
  }
}
class Va {
  constructor(t) {
    this.axiosConfig = Qe(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = lt.CancelToken;
  }
  validateAxiosConfig() {
    if (!jp(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = Qe(t, "interceptors.request", void 0), this.responseInterceptor = Qe(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: tv,
      InvenioRequestSerializer: Cn
    };
    return typeof t == "string" ? r[t] : t || Cn;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), a = Qe(t, "invenio.responseSerializer", Xb);
    this.requestSerializer = new n(), this.responseSerializer = new a();
  }
  initAxios() {
    const t = {
      paramsSerializer: this.requestSerializer.serialize,
      ...this.axiosConfig
    };
    this.http = lt.create(t), this.addInterceptors();
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
      const n = ja(t, r.extras, Qa);
      return ie(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw lt.isCancel(r) ? new Or() : r;
    }
  }
}
class rv {
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
          return Kb(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const a = Sa(n) ? n : [n], i = ":", o = t.urlFilterSeparator, l = `[^\\${i}\\${o}]*`, c = `${l}\\${i}${l}`, u = `${c}(\\${o}${c})*`, d = new RegExp(`^${u}$`);
          return a.every((p) => String(p).match(d));
        }
        default:
          return !1;
      }
    };
  }
}
const nv = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, Tn = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class av {
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
    const r = Oe.parse(t, {
      ignoreQueryPrefix: !0
    }), n = {};
    return Object.entries(r).forEach((a) => {
      const i = a[0], o = a[1];
      n[i] = this._convertValue(i, o);
    }), n;
  }
}
class iv {
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
      return Oe.stringify(n, {
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
      const a = Ie(n);
      return Object.keys(r).forEach((i) => {
        a[i] = r[i];
      }), a;
    }, this.urlParamsMapping = tl(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !Lb(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !Vb(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new rv(), this.urlParser = t.urlParser || new av(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), a = this._mergeParamsIntoState(n, t), i = this._mapQueryStateToUrlParams(a);
    return Tn(i), a;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      nv(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    Tn(r);
  }
}
const sv = "SET_QUERY_COMPONENT_INITIAL_STATE", qa = "SET_QUERY_STRING", kr = "SET_QUERY_SORTING", Rr = "SET_QUERY_SORT_BY", Pr = "SET_QUERY_SORT_ORDER", Je = "SET_QUERY_STATE", Ga = "SET_QUERY_PAGINATION_PAGE", Ha = "SET_QUERY_PAGINATION_SIZE", Wa = "SET_QUERY_FILTERS", Ya = "SET_QUERY_SUGGESTIONS", Ka = "SET_SUGGESTION_STRING", Xa = "CLEAR_QUERY_SUGGESTIONS", Za = "RESULTS_LOADING", Ja = "RESULTS_FETCH_SUCCESS", ei = "RESULTS_FETCH_ERROR", Jt = "RESULTS_UPDATE_LAYOUT", ti = "RESET_QUERY", ov = (e) => (t) => {
  e && t(ee({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, ri = (e) => (t) => {
  t({
    type: Je,
    payload: e
  }), t(ee());
}, ni = (e) => (t) => {
  t({
    type: qa,
    payload: e
  }), t(ee());
}, lv = (e, t) => (r) => {
  r({
    type: kr,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(ee());
}, cv = (e) => (t) => {
  t({
    type: Rr,
    payload: e
  }), t(ee());
}, uv = (e) => (t) => {
  t({
    type: Pr,
    payload: e
  }), t(ee());
}, dv = (e) => (t) => {
  t({
    type: Ga,
    payload: e
  }), t(ee());
}, pv = (e) => (t) => {
  t({
    type: Ha,
    payload: e
  }), t(ee());
}, Dr = (e) => (t) => {
  t({
    type: Wa,
    payload: e
  }), t(ee());
}, fv = (e) => async (t, r, n) => {
  const a = n.urlHandlerApi;
  if (a) {
    await t({
      type: Jt,
      payload: e
    });
    const i = r().query;
    a.set(i);
  } else
    t({
      type: Jt,
      payload: e
    });
}, mv = () => (e, t, r) => {
  e({
    type: ti,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(ee());
}, hv = (e, t, r, n) => {
  const a = t.urlHandlerApi;
  a && (r ? a.replace(e) : n && a.set(e));
}, gv = (e, t, r, n) => {
  const a = r().query;
  t({
    type: Je,
    payload: {
      ...a,
      ...e.newQueryState
    }
  });
  const i = Ie(r().query), o = n.urlHandlerApi;
  return o && o.replace(i), delete e.newStateQuery, e;
}, yv = (e, t, r, n) => {
  function a(l, c, u, d) {
    l.queryString === "" ? (l.sortBy = u.defaultSortingOnEmptyQueryString.sortBy, l.sortOrder = u.defaultSortingOnEmptyQueryString.sortOrder) : (l.sortBy = c.initialSortBy, l.sortOrder = c.initialSortOrder), d({
      type: Je,
      payload: l
    });
  }
  function i(l, c, u, d) {
    c.hasUserChangedSorting || a(l, c, u, d);
  }
  !ie(r.defaultSortingOnEmptyQueryString) && i(e, t, r, n);
}, ee = function() {
  let {
    shouldUpdateUrlQueryString: e = !0,
    shouldReplaceUrlQueryString: t = !1
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return async (r, n, a) => {
    const i = n().app;
    let o = Ie(n().query);
    yv(o, i, a, r), o = Ie(n().query), hv(o, a, t, e), r({
      type: Za
    });
    try {
      let c = await a.searchApi.search(o);
      "newQueryState" in c && (c = gv(Ie(c), r, n, a)), r({
        type: Ja,
        payload: {
          aggregations: c.aggregations,
          hits: c.hits,
          total: c.total
        }
      });
    } catch (l) {
      if (l instanceof Or) {
        console.debug(l);
        return;
      } else
        console.error(l), r({
          type: ei,
          payload: {
            error: l
          }
        });
    }
  };
}, bv = (e) => (t) => {
  t({
    type: Ka,
    payload: e
  }), t(vv());
}, vv = () => async (e, t, r) => {
  const n = Ie(t().query), a = r.suggestionApi;
  try {
    const i = await a.search(n);
    e({
      type: Ya,
      payload: {
        suggestions: i.suggestions
      }
    });
  } catch (i) {
    console.error("Could not load suggestions due to: " + i);
  }
}, Ev = () => (e) => {
  e({
    type: Xa,
    payload: {
      suggestions: []
    }
  });
}, Sv = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: Je,
      payload: n
    }), e(ee({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, C = /* @__PURE__ */ s.createContext({}), _v = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
    case kr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Rr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Pr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    default:
      return e;
  }
}, $v = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case qa:
      return {
        ...e,
        queryString: t.payload,
        page: 1
      };
    case kr:
      return {
        ...e,
        sortBy: t.payload.sortBy,
        sortOrder: t.payload.sortOrder,
        _sortUserChanged: !0,
        page: 1
      };
    case Rr:
      return {
        ...e,
        sortBy: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case Pr:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case Ga:
      return {
        ...e,
        page: t.payload
      };
    case Ha:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case Wa:
      return {
        ...e,
        page: 1,
        filters: Ma(t.payload, e.filters)
      };
    case Ya:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case Xa:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case Ka:
      return {
        ...e,
        suggestionString: t.payload
      };
    case sv:
      return {
        ...e,
        ...t.payload
      };
    case Je:
      return {
        ...e,
        ...ht,
        ...ja(ht, t.payload, Qa)
      };
    case Jt:
      return {
        ...e,
        layout: t.payload
      };
    case ti:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, xv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Za:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case Ja:
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
    case ei:
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
var Cv = mo({
  app: _v,
  query: $v,
  results: xv
});
function In(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: a,
    sortOrder: i
  } = t;
  return r !== a || n !== i;
}
function wv(e, t, r) {
  const n = In(r, t), a = !ie(e.defaultSortingOnEmptyQueryString);
  let i = !1;
  return a && (i = In(r, e.defaultSortingOnEmptyQueryString)), n && i;
}
function Tv(e) {
  const t = {
    ...ht,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = wv(e, t, r), a = {
    ...ev,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, i = {
    ...Jb,
    loading: e.searchOnInit
  };
  return {
    app: a,
    query: r,
    results: i
  };
}
function Iv(e) {
  const t = Tv(e);
  return ho(Cv, t, go(yo.withExtraArgument(e)));
}
function Fn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class Nr extends N {
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
Nr.defaultProps = {
  searchOnInit: !0,
  eventListenerEnabled: !1
};
Nr.contextType = C;
var Fv = E.component("Bootstrap", Nr);
const Av = (e) => ({
  onAppInitialized: (t) => e(ov(t)),
  updateQueryState: (t) => e(ri(t)),
  searchOnUrlQueryStringChanged: () => e(Sv())
}), Ov = R(null, Av)(Fv);
class Lr extends N {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new iv(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = Iv(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
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
      buildUID: (c, u) => Fn(c, u, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, l = Fn("ReactSearchKit.children", a, t);
    return /* @__PURE__ */ s.createElement(C.Provider, {
      value: o
    }, /* @__PURE__ */ s.createElement(io, {
      store: this.store
    }, /* @__PURE__ */ s.createElement(Ov, {
      searchOnInit: i,
      eventListenerEnabled: n
    }, /* @__PURE__ */ s.createElement(E, {
      id: l
    }, r))));
  }
}
Lr.defaultProps = {
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
Lr.contextType = C;
var kv = E.component("ReactSearchKit", Lr);
class ai extends N {
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
    return !!t.length && /* @__PURE__ */ s.createElement(ii, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
ai.defaultProps = {
  overridableId: ""
};
const ii = (e) => {
  let {
    overridableId: t,
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  } = e;
  const {
    buildUID: i
  } = F(C);
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
      /* @__PURE__ */ s.createElement(z, {
        image: !0,
        key: l,
        onClick: () => n(u)
      }, c, /* @__PURE__ */ s.createElement(_, {
        name: "delete"
      }))
    );
  })));
};
ii.defaultProps = {
  overridableId: ""
};
var Rv = E.component("ActiveFilters", ai);
const Pv = (e) => ({
  updateQueryFilters: (t) => e(Dr(t))
});
R((e) => ({
  filters: e.query.filters
}), Pv)(Rv);
function Dv(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var Nv = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
Dv(Nv);
class si extends N {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? bo.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ s.createElement(Bv, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
si.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const Lv = (e) => /* @__PURE__ */ s.createElement(si, Object.assign({
  key: e.queryString
}, e)), Bv = (e) => {
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
  } = F(C), u = (p, m) => {
    o();
  }, d = (p, m) => {
    p.key === "Enter" && o();
  };
  return /* @__PURE__ */ s.createElement(E, Object.assign({
    id: c("AutocompleteSearchBar.element", t)
  }, l), /* @__PURE__ */ s.createElement("div", {
    className: "AutoCompleteText"
  }, /* @__PURE__ */ s.createElement(ca, {
    action: {
      content: "Search",
      onClick: u
    },
    fluid: !0,
    placeholder: r,
    onChange: (p, m) => {
      let {
        value: f
      } = m;
      i(f);
    },
    value: n,
    onKeyPress: d
  }), /* @__PURE__ */ s.createElement(Uv, {
    querySuggestions: a,
    overridableId: t
  })));
}, Uv = (e) => {
  let {
    overridableId: t,
    ...r
  } = e;
  const {
    querySuggestions: n
  } = r, {
    buildUID: a
  } = F(C), i = async (o) => {
    await (void 0).setState({
      currentValue: o
    }), (void 0).clearSuggestions(), (void 0).executeSearch();
  };
  return n.length === 0 ? null : /* @__PURE__ */ s.createElement(E, Object.assign({
    id: a("AutocompleteSearchBar.suggestions", t)
  }, r), /* @__PURE__ */ s.createElement("ul", null, n.map((o) => /* @__PURE__ */ s.createElement(M, {
    as: "li",
    onClick: () => i(o),
    key: o
  }, o))));
};
var zv = E.component("AutocompleteSearchBar", Lv);
const Mv = (e) => ({
  updateQueryString: (t) => e(ni(t)),
  updateSuggestions: (t) => e(bv(t)),
  clearSuggestions: () => e(Ev())
}), jv = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
R(jv, Mv)(zv);
class Pt extends N {
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
        return /* @__PURE__ */ s.createElement(Pt, {
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
      return /* @__PURE__ */ s.createElement(li, {
        key: i.key,
        bucket: i,
        keyField: o,
        isSelected: l,
        onFilterClicked: c,
        getChildAggCmps: u,
        overridableId: n
      });
    });
    return /* @__PURE__ */ s.createElement(oi, {
      valuesCmp: a,
      overridableId: n
    });
  }
}
Pt.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const oi = (e) => {
  let {
    valuesCmp: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(C);
  return /* @__PURE__ */ s.createElement(E, {
    id: n("BucketAggregationContainer.element", r),
    valuesCmp: t
  }, /* @__PURE__ */ s.createElement($, null, t));
};
oi.defaultProps = {
  overridableId: ""
};
const li = (e) => {
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
  } = F(C), u = t.label ? t.label : `${o} (${t.doc_count.toLocaleString("en-US")})`, d = a(t);
  return /* @__PURE__ */ s.createElement(E, {
    id: l("BucketAggregationValues.element", i),
    bucket: t,
    label: u,
    onFilterClicked: n,
    isSelected: r,
    childAggCmps: d
  }, /* @__PURE__ */ s.createElement($.Item, {
    key: t.key
  }, /* @__PURE__ */ s.createElement(fr, {
    label: u,
    id: c(),
    value: t.key,
    onClick: () => n(t.key),
    checked: r
  }), d));
};
li.defaultProps = {
  overridableId: ""
};
var Qv = E.component("BucketAggregationValues", Pt);
class ci extends N {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: a
      } = this.props;
      return /* @__PURE__ */ s.createElement(Qv, {
        buckets: r,
        selectedFilters: n,
        field: this.agg.field,
        aggName: this.agg.aggName,
        childAgg: this.agg.childAgg,
        onFilterClicked: this.onFilterClicked,
        overridableId: a
      });
    }, this._getSelectedFilters = (r) => r.filter((n) => n[0] === this.agg.aggName), this._getResultBuckets = (r) => {
      const n = Qe(r, this.agg.aggName, {});
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
    return /* @__PURE__ */ s.createElement(ui, Object.assign({
      title: this.title,
      containerCmp: l,
      overridableId: n
    }, a));
  }
}
ci.defaultProps = {
  overridableId: ""
};
const ui = (e) => {
  let {
    overridableId: t,
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: i
  } = e;
  const {
    buildUID: o
  } = F(C);
  return a && /* @__PURE__ */ s.createElement(E, {
    id: o("BucketAggregation.element", t),
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: i
  }, /* @__PURE__ */ s.createElement(Q, null, /* @__PURE__ */ s.createElement(Q.Content, null, /* @__PURE__ */ s.createElement(Q.Header, null, n)), /* @__PURE__ */ s.createElement(Q.Content, null, a)));
};
ui.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var Vv = E.component("BucketAggregation", ci);
const qv = (e) => ({
  updateQueryFilters: (t) => e(Dr(t))
}), Gv = R((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), qv)(Vv);
class di extends N {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
di.defaultProps = {
  condition: !0
};
var X = E.component("ShouldRender", di);
class pi extends N {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: a
    } = this.props;
    return /* @__PURE__ */ s.createElement(X, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ s.createElement(fi, {
      totalResults: r,
      overridableId: a
    })));
  }
}
pi.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const fi = (e) => {
  let {
    totalResults: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(C), a = n("Count.element", r);
  return /* @__PURE__ */ s.createElement(E, {
    id: a,
    totalResults: t
  }, /* @__PURE__ */ s.createElement(z, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
fi.defaultProps = {
  overridableId: ""
};
var Hv = E.component("Count", pi);
R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(Hv);
class mi extends N {
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
      condition: !t && ie(n) && r === 0
    }, /* @__PURE__ */ s.createElement(hi, Object.assign({}, c, {
      queryString: a,
      resetQuery: this.resetQuery,
      extraContent: i,
      userSelectionFilters: l,
      overridableId: o
    })));
  }
}
mi.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const hi = (e) => {
  let {
    overridableId: t,
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: i
  } = e;
  const {
    buildUID: o
  } = F(C);
  return /* @__PURE__ */ s.createElement(E, {
    id: o("EmptyResults.element", t),
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: i
  }, /* @__PURE__ */ s.createElement(fe, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ s.createElement(Ee, {
    icon: !0
  }, /* @__PURE__ */ s.createElement(_, {
    name: "search"
  }), "No results found!"), r && /* @__PURE__ */ s.createElement("em", null, 'Current search "', r, '"'), /* @__PURE__ */ s.createElement("br", null), /* @__PURE__ */ s.createElement(M, {
    primary: !0,
    onClick: () => n()
  }, "Clear query"), a));
};
hi.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var Wv = E.component("EmptyResults", mi);
const Yv = (e) => ({
  resetQuery: () => e(mv())
}), Kv = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), Yv)(Wv);
function gi(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ s.createElement(X, {
    condition: !t && !ie(r)
  }, /* @__PURE__ */ s.createElement(yi, {
    error: r,
    overridableId: n
  }));
}
gi.defaultProps = {
  overridableId: ""
};
const yi = (e) => {
  let {
    error: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(C);
  return /* @__PURE__ */ s.createElement(E, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ s.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
yi.defaultProps = {
  overridableId: ""
};
var Xv = E.component("Error", gi);
R((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(Xv);
function Br(e) {
  const t = (a) => /* @__PURE__ */ s.createElement(e, a);
  return R((a) => ({
    currentQueryState: a.query,
    currentResultsState: a.results
  }), (a) => ({
    updateQueryState: (i) => a(ri(i))
  }))(t);
}
class bi extends N {
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
    }, /* @__PURE__ */ s.createElement(vi, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: a
    }));
  }
}
bi.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
const vi = (e) => {
  let {
    overridableId: t,
    currentLayout: r,
    onLayoutChange: n
  } = e;
  const {
    buildUID: a
  } = F(C);
  return /* @__PURE__ */ s.createElement(E, {
    id: a("LayoutSwitcher.element", t),
    currentLayout: r,
    onLayoutChange: n
  }, /* @__PURE__ */ s.createElement(Bt, {
    compact: !0,
    icon: !0
  }, /* @__PURE__ */ s.createElement(Bt.Item, {
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
  })), /* @__PURE__ */ s.createElement(Bt.Item, {
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
vi.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var Zv = E.component("LayoutSwitcher", bi);
const Jv = (e) => ({
  updateLayout: (t) => e(fv(t))
});
R((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), Jv)(Zv);
const An = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class Ei extends N {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...An,
      ...t.options
    } : An;
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
    }, /* @__PURE__ */ s.createElement(Si, {
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
Ei.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const Si = (e) => {
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
  const u = o.boundaryRangeCount, d = o.siblingRangeCount, p = o.showEllipsis, m = o.showFirst, f = o.showLast, y = o.showPrev, g = o.showNext, v = o.size, b = Math.floor(l / n), S = Math.ceil(a / n), A = Math.min(S, b), {
    buildUID: B
  } = F(C);
  return r > S && i(S), /* @__PURE__ */ s.createElement(E, {
    id: B("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: a,
    options: o,
    onPageChange: i
  }, /* @__PURE__ */ s.createElement(so, Object.assign({
    activePage: r,
    totalPages: A,
    onPageChange: (te, O) => {
      let {
        activePage: he
      } = O;
      return i(he);
    },
    boundaryRange: u,
    siblingRange: d,
    ellipsisItem: p ? void 0 : null,
    firstItem: m ? void 0 : null,
    lastItem: f ? void 0 : null,
    prevItem: y ? void 0 : null,
    nextItem: g ? void 0 : null,
    size: v
  }, c)));
};
Si.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var eE = E.component("Pagination", Ei);
const tE = (e) => ({
  updateQueryPage: (t) => e(dv(t))
}), rE = R((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), tE)(eE);
function _i(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    resultsPerRow: a,
    overridableId: i,
    onResultsRendered: o
  } = e;
  return Ae(() => {
    o && o();
  }, [o]), /* @__PURE__ */ s.createElement(X, {
    condition: !t && r > 0
  }, /* @__PURE__ */ s.createElement($i, {
    results: n,
    resultsPerRow: a,
    overridableId: i
  }));
}
_i.defaultProps = {
  resultsPerRow: 3,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const nE = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(C);
  return /* @__PURE__ */ s.createElement(E, {
    id: n("ResultsGrid.item", r),
    result: t
  }, /* @__PURE__ */ s.createElement(Q, {
    fluid: !0,
    href: `#${t.id}`
  }, /* @__PURE__ */ s.createElement(oo, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ s.createElement(Q.Content, null, /* @__PURE__ */ s.createElement(Q.Header, null, t.title), /* @__PURE__ */ s.createElement(Q.Description, null, t.description))));
}, $i = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: a
  } = F(C), i = r.map((o, l) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ s.createElement(nE, {
      key: l,
      result: o,
      overridableId: t
    })
  ));
  return /* @__PURE__ */ s.createElement(E, {
    id: a("ResultsGrid.container", t),
    results: i,
    resultsPerRow: n
  }, /* @__PURE__ */ s.createElement(Q.Group, {
    itemsPerRow: n
  }, i));
};
$i.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var aE = E.component("ResultsGrid", _i);
const iE = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(aE);
function xi(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: a,
    onResultsRendered: i
  } = e;
  return Ae(() => {
    i && i();
  }, [i]), /* @__PURE__ */ s.createElement(X, {
    condition: !t && r > 0
  }, /* @__PURE__ */ s.createElement(Ci, {
    results: n,
    overridableId: a
  }));
}
xi.defaultProps = {
  overridableId: "",
  onResultsRendered: () => {
  }
};
const sE = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(C);
  return /* @__PURE__ */ s.createElement(E, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ s.createElement(xe, {
    href: `#${t.id}`
  }, /* @__PURE__ */ s.createElement(xe.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ s.createElement(xe.Content, null, /* @__PURE__ */ s.createElement(xe.Header, null, t.title), /* @__PURE__ */ s.createElement(xe.Description, null, t.description))));
}, Ci = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = F(C), a = t.map((i, o) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ s.createElement(sE, {
      result: i,
      key: o,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ s.createElement(E, {
    id: n("ResultsList.container", r),
    results: a
  }, /* @__PURE__ */ s.createElement(xe.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, a));
};
Ci.defaultProps = {
  overridableId: ""
};
var oE = E.component("ResultsList", xi);
const wi = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(oE);
function Ti(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ s.createElement(Ii, {
    overridableId: n
  }) : t;
}
Ti.defaultProps = {
  overridableId: ""
};
const Ii = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = F(C);
  return /* @__PURE__ */ s.createElement(E, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ s.createElement(ua, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
Ii.defaultProps = {
  overridableId: ""
};
var lE = E.component("ResultsLoader", Ti);
const cE = R((e) => ({
  loading: e.results.loading
}))(lE);
function Fi(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: a,
    onResultsRendered: i
  } = e;
  return /* @__PURE__ */ s.createElement(X, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ s.createElement(Ai, {
    layout: n,
    overridableId: a,
    onResultsRendered: i
  }));
}
Fi.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const Ai = (e) => {
  let {
    layout: t,
    overridableId: r,
    onResultsRendered: n
  } = e;
  const {
    buildUID: a
  } = F(C);
  return /* @__PURE__ */ s.createElement(E, {
    id: a("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ s.createElement(wi, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ s.createElement(iE, {
    overridableId: r,
    onResultsRendered: n
  }));
};
Ai.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var uE = E.component("ResultsMultiLayout", Fi);
R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(uE);
class Oi extends N {
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
    }, a(/* @__PURE__ */ s.createElement(ki, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
Oi.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const ki = (e) => {
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
  } = F(C), c = n.map((u, d) => ({
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
  }, /* @__PURE__ */ s.createElement(de, {
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
ki.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var dE = E.component("ResultsPerPage", Oi);
const pE = (e) => ({
  updateQuerySize: (t) => e(pv(t))
}), fE = R((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), pE)(dE);
class Ri extends N {
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
    return /* @__PURE__ */ s.createElement(Ur, {
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
Ri.defaultProps = {
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
const Pi = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ s.createElement(Ri, Object.assign({
    key: t
  }, e));
};
Pi.defaultProps = {
  queryString: ""
};
class Ur extends N {
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
    }, /* @__PURE__ */ s.createElement(ca, Object.assign({
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
          value: m
        } = p;
        n(m);
      },
      value: l,
      onKeyPress: a,
      ref: (d) => {
        this.focusInput = d;
      }
    })));
  }
}
Ur.defaultProps = {
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
Ur.contextType = C;
var mE = E.component("SearchBar", Pi);
const hE = (e) => ({
  updateQueryString: (t) => e(ni(t))
}), gE = R((e) => ({
  queryString: e.query.queryString
}), hE)(mE);
class Di extends N {
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
    }, i(/* @__PURE__ */ s.createElement(Ni, {
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
Di.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const Ni = (e) => {
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
  } = F(C), d = o(r, n), p = a.map((m, f) => ({
    key: f,
    text: m.text,
    value: m.value
  }));
  return /* @__PURE__ */ s.createElement(E, {
    id: u("Sort.element", t),
    options: a,
    currentSortBy: r,
    currentSortOrder: n,
    onValueChange: i,
    ariaLabel: l,
    selectOnNavigation: c
  }, /* @__PURE__ */ s.createElement(de, {
    selection: !0,
    options: p,
    value: d,
    onChange: (m, f) => {
      let {
        value: y
      } = f;
      return i(y);
    },
    "aria-label": l,
    selectOnNavigation: c
  }));
};
Ni.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var yE = E.component("Sort", Di);
const bE = (e) => ({
  updateQuerySorting: (t, r) => e(lv(t, r))
});
R((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), bE)(yE);
class Li extends N {
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
    }, a(/* @__PURE__ */ s.createElement(Bi, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
Li.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const Bi = (e) => {
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
  } = F(C), c = n.map((u, d) => ({
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
  }, /* @__PURE__ */ s.createElement(de, {
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
Bi.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var vE = E.component("SortBy", Li);
const EE = (e) => ({
  updateQuerySortBy: (t) => e(cv(t))
}), SE = R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), EE)(vE);
class Ui extends N {
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
    }, a(/* @__PURE__ */ s.createElement(zi, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
Ui.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const zi = (e) => {
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
  } = F(C), c = n.map((u, d) => ({
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
  }, /* @__PURE__ */ s.createElement(de, {
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
zi.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var _E = E.component("SortOrder", Ui);
const $E = (e) => ({
  updateQuerySortOrder: (t) => e(uv(t))
});
R((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), $E)(_E);
const Mi = (e) => {
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
  } = F(C), d = l(r);
  return /* @__PURE__ */ s.createElement(E, {
    id: u("SearchFilters.Toggle.element", t),
    title: n,
    label: a,
    filterValue: i,
    userSelectionFilters: r,
    updateQueryFilters: o
  }, /* @__PURE__ */ s.createElement(Q, null, /* @__PURE__ */ s.createElement(Q.Content, null, /* @__PURE__ */ s.createElement(Q.Header, null, n)), /* @__PURE__ */ s.createElement(Q.Content, null, /* @__PURE__ */ s.createElement(fr, {
    toggle: !0,
    label: a,
    onClick: c,
    checked: d
  }))));
};
Mi.defaultProps = {
  overridableId: ""
};
var xE = E.component("SearchFilters.Toggle", Mi);
const CE = (e) => ({
  updateQueryFilters: (t) => e(Dr(t))
});
R((e) => ({
  userSelectionFilters: e.query.filters
}), CE)(xE);
function er(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var wE = (e) => typeof e == "object" && e !== null;
function TE(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var IE = (e) => e === "base";
function FE(e) {
  return e.slice().filter((t) => !IE(t));
}
function On(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function AE(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = On(r % 52) + t;
  return On(r % 52) + t;
}
function OE(e, t) {
  let r = t.length;
  for (; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function kE(e) {
  return AE(OE(5381, e) >>> 0);
}
var ji = /\s*!(important)?/i;
function RE(e) {
  return typeof e == "string" ? ji.test(e) : !1;
}
function PE(e) {
  return typeof e == "string" ? e.replace(ji, "").trim() : e;
}
function Qi(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var zr = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...n) => {
    const a = JSON.stringify(n);
    if (t.has(a))
      return t.get(a);
    const i = e(...n);
    return t.set(a, i), i;
  };
}, DE = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function Vi(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((n) => {
    if (DE.has(n))
      return;
    const a = t[n], i = r[n];
    er(a) && er(i) ? t[n] = Vi(a, i) : t[n] = i;
  }), t), {});
}
var NE = (e) => e != null;
function qi(e, t, r = {}) {
  const { stop: n, getKey: a } = r;
  function i(o, l = []) {
    if (wE(o)) {
      const c = {};
      for (const [u, d] of Object.entries(o)) {
        const p = (a == null ? void 0 : a(u, d)) ?? u, m = [...l, p];
        if (n != null && n(o, m))
          return t(o, l);
        const f = i(d, m);
        NE(f) && (c[p] = f);
      }
      return c;
    }
    return t(o, l);
  }
  return i(e);
}
function LE(e, t) {
  return e.reduce(
    (r, n, a) => {
      const i = t[a];
      return n != null && (r[i] = n), r;
    },
    {}
  );
}
function Gi(e, t, r = !0) {
  const { utility: n, conditions: a } = t, { hasShorthand: i, resolveShorthand: o } = n;
  return qi(
    e,
    (l) => Array.isArray(l) ? LE(l, a.breakpoints.keys) : l,
    {
      stop: (l) => Array.isArray(l),
      getKey: r ? (l) => i ? o(l) : l : void 0
    }
  );
}
var BE = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, UE = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function zE(e) {
  const { utility: t, hash: r, conditions: n = BE } = e, a = (o) => [t.prefix, o].filter(Boolean).join("-"), i = (o, l) => {
    let c;
    if (r) {
      const u = [...n.finalize(o), l];
      c = a(t.toHash(u, kE));
    } else
      c = [...n.finalize(o), a(l)].join(":");
    return c;
  };
  return zr(({ base: o, ...l } = {}) => {
    const c = Object.assign(l, o), u = Gi(c, e), d = /* @__PURE__ */ new Set();
    return qi(u, (p, m) => {
      if (p == null)
        return;
      const f = RE(p), [y, ...g] = n.shift(m), v = FE(g), b = t.transform(y, PE(UE(p)));
      let S = i(v, b.className);
      f && (S = `${S}!`), d.add(S);
    }), Array.from(d).join(" ");
  });
}
function ME(...e) {
  return e.flat().filter((t) => er(t) && Object.keys(TE(t)).length > 0);
}
function jE(e) {
  function t(a) {
    const i = ME(...a);
    return i.length === 1 ? i : i.map((o) => Gi(o, e));
  }
  function r(...a) {
    return Vi(...t(a));
  }
  function n(...a) {
    return Object.assign({}, ...t(a));
  }
  return { mergeCss: zr(r), assignCss: n };
}
var QE = /([A-Z])/g, VE = /^ms-/, qE = zr((e) => e.startsWith("--") ? e : e.replace(QE, "-$1").replace(VE, "-ms-").toLowerCase()), GE = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${GE.split(",").join("|")}`;
const HE = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", Hi = new Set(HE.split(",")), WE = /^@|&|&$/;
function kn(e) {
  return Hi.has(e) || WE.test(e);
}
const YE = /^_/, KE = /&|@/;
function XE(e) {
  return e.map((t) => Hi.has(t) ? t.replace(YE, "") : KE.test(t) ? `[${Qi(t.trim())}]` : t);
}
function ZE(e) {
  return e.sort((t, r) => {
    const n = kn(t), a = kn(r);
    return n && !a ? 1 : !n && a ? -1 : 0;
  });
}
const JE = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle", Wi = /* @__PURE__ */ new Map(), Yi = /* @__PURE__ */ new Map();
JE.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [n, ...a] = r.split("/");
  Wi.set(t, n), a.length && a.forEach((i) => {
    Yi.set(i === "1" ? n : i, t);
  });
});
const Rn = (e) => Yi.get(e) || e, Ki = {
  conditions: {
    shift: ZE,
    finalize: XE,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = Rn(e);
      return { className: `${Wi.get(r) || qE(r)}_${Qi(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: Rn
  }
}, eS = zE(Ki), h = (...e) => eS(Xi(...e));
h.raw = (...e) => Xi(...e);
const { mergeCss: Xi, assignCss: BC } = jE(Ki), Pn = {
  header: h({
    fontSize: "1.1rem !important"
  }),
  container: h({
    padding: "1rem"
  })
}, tS = ({
  title: e,
  containerCmp: t
}) => /* @__PURE__ */ s.createElement("div", { className: Pn.container }, /* @__PURE__ */ s.createElement(Ee, { as: "h2", className: Pn.header }, e), /* @__PURE__ */ s.createElement("div", null, t)), Dn = {
  checkboxContainer: h({
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
  childAggContainer: h({
    marginInlineStart: "1.5rem",
    marginBlockStart: "0.5rem"
  })
}, rS = ({ bucket: e, label: t, onFilterClicked: r, isSelected: n, childAggCmps: a }) => /* @__PURE__ */ s.createElement("div", { className: Dn.checkboxContainer }, /* @__PURE__ */ s.createElement(
  fr,
  {
    checked: n,
    onChange: () => r(e.key),
    label: t
  }
), /* @__PURE__ */ s.createElement(z, { circular: !0, size: "mini" }, e.doc_count), a && a.length > 0 && /* @__PURE__ */ s.createElement("div", { className: Dn.childAggContainer }, a)), Zi = s.createContext(
  null
), nS = ({ config: e, children: t, updateQueryState: r, currentQueryState: n }) => {
  const a = k(() => {
    r({
      ...n,
      queryString: n.queryString
    });
  }, [r, n]);
  return /* @__PURE__ */ s.createElement(Zi.Provider, { value: { config: e, refreshSearch: a } }, t);
}, aS = Br(nS), et = () => {
  const e = s.useContext(Zi);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
}, iS = {
  spinnerIcon: h({
    marginInlineEnd: "0.5rem"
  })
}, Ji = ({
  progress: e,
  showPercentage: t = !1
}) => /* @__PURE__ */ s.createElement(pr, null, Object.entries(e).map(([r, n]) => /* @__PURE__ */ s.createElement(fe.Inline, { basic: !0, key: r }, /* @__PURE__ */ s.createElement(_, { name: "spinner", loading: !0, className: iS.spinnerIcon }), /* @__PURE__ */ s.createElement("strong", null, r), " ", t ? `${n}%` : null))), es = () => /* @__PURE__ */ s.createElement(fe, { basic: !0, padded: "very" }, /* @__PURE__ */ s.createElement(lo, { active: !0, inverted: !0 }, /* @__PURE__ */ s.createElement(ua, { inverted: !0 }, "Loading"))), sS = ({ status: e, ...t }) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ s.createElement(_, { name: "close", color: "red", ...t }) : e === "success" || e === "created" ? /* @__PURE__ */ s.createElement(_, { name: "check circle", color: "green", ...t }) : e === "importing" || e === "validating" ? /* @__PURE__ */ s.createElement(_, { name: "spinner", loading: !0, ...t }) : e === "validated" ? /* @__PURE__ */ s.createElement(_, { name: "check circle", color: "blue", ...t }) : /* @__PURE__ */ s.createElement(_, { ...t }), ts = ({
  status: e,
  children: t,
  ...r
}) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ s.createElement(z, { color: "red", ...r }, /* @__PURE__ */ s.createElement(_, { name: "warning sign" }), t) : e === "success" || e === "validated" || e === "created" ? /* @__PURE__ */ s.createElement(z, { color: "green", ...r }, /* @__PURE__ */ s.createElement(_, { name: "check circle" }), t) : e === "importing" || e === "validating" ? /* @__PURE__ */ s.createElement(z, { color: "blue", ...r }, /* @__PURE__ */ s.createElement(_, { name: "spinner", loading: !0 }), t) : /* @__PURE__ */ s.createElement(z, { ...r }, t), Fe = (e) => (e == null ? void 0 : e.charAt(0).toUpperCase()) + (e == null ? void 0 : e.slice(1)) || "";
var rs = { exports: {} };
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
})(rs);
var oS = rs.exports;
const tr = /* @__PURE__ */ P(oS), ns = (e) => e.reduce((t, r) => t + r.file.size, 0), as = (e) => Mr(ns(e)), Mr = (e) => {
  if (e === 0)
    return "0 Bytes";
  const t = 1024, r = ["Bytes", "KB", "MB", "GB"], n = Math.floor(Math.log(e) / Math.log(t));
  return `${Number.parseFloat((e / t ** n).toFixed(2))} ${r[n]}`;
}, Ge = (e) => new Date(e).toLocaleString(void 0, {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit"
}), Dt = (e) => e.split("_").map((t, r) => t === "doi" ? "DOI" : r === 0 ? `${t.charAt(0).toUpperCase()}${t.slice(1)}` : t).join(" ");
var is = { exports: {} };
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
            var m = JSON.stringify(d);
            /^[\{\[]/.test(m) && (d = m);
          } catch {
          }
          d = i.write ? i.write(d, u) : encodeURIComponent(String(d)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), u = encodeURIComponent(String(u)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var f = "";
          for (var y in p)
            p[y] && (f += "; " + y, p[y] !== !0 && (f += "=" + p[y].split(";")[0]));
          return document.cookie = u + "=" + d + f;
        }
      }
      function c(u, d) {
        if (!(typeof document > "u")) {
          for (var p = {}, m = document.cookie ? document.cookie.split("; ") : [], f = 0; f < m.length; f++) {
            var y = m[f].split("="), g = y.slice(1).join("=");
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
})(is);
var lS = is.exports;
const cS = /* @__PURE__ */ P(lS), uS = () => cS.get("csrftoken") || null, dS = (e) => {
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
}, UC = (e) => new Va(e), zC = (e, t = {}, r = !0) => ({
  axios: {
    url: e,
    headers: {
      Accept: "application/vnd.inveniordm.v1+json",
      ...t
    },
    withCredentials: r
  }
}), G = lt.create({
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
    const t = uS();
    return t && (e.headers["X-CSRFTOKEN"] = t), e;
  },
  (e) => Promise.reject(e)
);
const ss = async (e, t) => {
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
}, pS = async (e, t) => {
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
}, fS = async (e) => {
  const t = {
    title: e.title,
    description: e.description,
    mode: e.mode,
    status: e.status,
    record_type: e.recordType,
    serializer: e.serializer,
    options: e.options ?? {},
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
}, mS = async (e) => {
  try {
    const t = await G.delete(`/api/importer-tasks/${e}`);
    return t.status === 204 ? !0 : (console.error(`Failed to delete task: ${t.statusText}`), !1);
  } catch (t) {
    return console.error(
      `Error deleting task: ${t instanceof Error ? t.message : "Unknown error"}`
    ), !1;
  }
}, os = async (e) => {
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
}, hS = async () => {
  try {
    const e = await G.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, gS = async (e) => {
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
}, qe = async (e) => {
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
}, yS = async (e, t) => {
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
}, bS = async (e, t, r) => {
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
}, ls = async (e) => {
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
}, cs = async (e, t = {}) => {
  const { autoExecute: r = !1, onProgress: n, onError: a } = t;
  try {
    n == null || n("Validating", 0), await ls(e), n == null || n("Validating", 50);
    let i = await qe(e);
    return n == null || n("Validating", 100), r && (i.status === "validated" || i.status === "validated with failures") && (n == null || n("Executing", 0), await os(e), n == null || n("Executing", 50), i = await qe(e), n == null || n("Executing", 100)), i;
  } catch (i) {
    const o = i instanceof Error ? i : new Error("Unknown error during workflow execution");
    throw a == null || a(o, "Executing"), o;
  }
}, us = async (e, t, r) => {
  if (!t || t.length === 0)
    return;
  const n = t.map((a) => a.name);
  await yS(e, n);
  for (const a of t)
    try {
      r == null || r({
        fileName: a.name,
        loaded: 0,
        total: a.size,
        percentage: 0
      }), await bS(e, a.name, a), r == null || r({
        fileName: a.name,
        loaded: a.size,
        total: a.size,
        percentage: 90
      }), await pS(e, a.name), r == null || r({
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
}, vS = async (e, t, r, n = {}) => {
  const {
    autoValidate: a = !1,
    autoExecute: i = !1,
    onProgress: o,
    onError: l
  } = n;
  try {
    o == null || o("Creating Task", 0);
    const c = await fS(e);
    if (!c)
      throw new Error("Failed to create import task");
    return o == null || o("Creating Task", 100), t && (o == null || o("Uploading Metadata", 0), await ss(c.id, t), o == null || o("Uploading Metadata", 100)), r && r.length > 0 && await us(c.id, r, (u) => {
      o == null || o("Uploading Files", u.percentage);
    }), a && t && await cs(c.id, {
      autoExecute: i,
      onProgress: o,
      onError: l
    }), c;
  } catch (c) {
    const u = c instanceof Error ? c : new Error("Unknown error during task creation");
    throw l == null || l(u, "Creating Task"), u;
  }
}, ES = async (e, t, r, n = {}) => {
  const { onProgress: a, onError: i } = n;
  try {
    a == null || a("Updating", 0), t && (a == null || a("Updating Metadata", 0), await ss(e, t), a == null || a("Updating Metadata", 100)), r && r.length > 0 && await us(e, r, (o) => {
      a == null || a("Updating Files", o.percentage);
    }), a == null || a("Updating", 100);
  } catch (o) {
    const l = o instanceof Error ? o : new Error("Unknown error during task update");
    throw i == null || i(l, "Updating"), l;
  }
}, SS = async (e) => {
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
}, ds = (e, t = {}) => {
  const [r, n] = D({
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
  } = t, m = k(() => {
    n((b) => ({ ...b, error: null }));
  }, []), f = k(async () => {
    n((b) => ({ ...b, isDeleting: !0, error: null }));
    try {
      if (!await mS(e))
        throw new Error(`Failed to delete task ${e}`);
      a == null || a();
    } catch (b) {
      const S = b instanceof Error ? b : new Error("Unknown error");
      throw n((A) => ({ ...A, error: S })), i == null || i(S), S;
    } finally {
      n((b) => ({ ...b, isDeleting: !1 }));
    }
  }, [e, a, i]), y = k(async () => {
    n((b) => ({ ...b, isValidating: !0, error: null }));
    try {
      const b = await ls(e);
      if (!b)
        throw new Error(`Validation failed for task ${e}`);
      return o == null || o(b), await qe(e), b;
    } catch (b) {
      const S = b instanceof Error ? b : new Error("Unknown error");
      throw n((A) => ({ ...A, error: S })), l == null || l(S), S;
    } finally {
      n((b) => ({ ...b, isValidating: !1 }));
    }
  }, [e, o, l]), g = k(async () => {
    n((b) => ({ ...b, isBulkImporting: !0, error: null }));
    try {
      const b = await os(e);
      if (!b)
        throw new Error(`Failed to execute bulk import for task ${e}`);
      return c == null || c(b), await qe(e), b;
    } catch (b) {
      const S = b instanceof Error ? b : new Error("Unknown error");
      throw n((A) => ({ ...A, error: S })), u == null || u(S), S;
    } finally {
      n((b) => ({ ...b, isBulkImporting: !1 }));
    }
  }, [e, c, u]), v = k(async () => {
    n((b) => ({ ...b, isGettingStatus: !0, error: null }));
    try {
      const b = await qe(e);
      if (!b)
        throw new Error(`Failed to retrieve status for task ${e}`);
      return n((S) => ({ ...S, error: null })), d == null || d(b), b;
    } catch (b) {
      const S = b instanceof Error ? b : new Error("Unknown error");
      throw n((A) => ({ ...A, error: S })), p == null || p(S), S;
    } finally {
      n((b) => ({ ...b, isGettingStatus: !1 }));
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
    validateTask: y,
    runBulkImport: g,
    getStatus: v,
    clearError: m
  };
}, ze = {
  actionsCell: h({
    inlineSize: "15rem",
    whiteSpace: "nowrap"
  }),
  errorContainer: h({
    display: "flex",
    alignItems: "center",
    gap: "0.3125rem",
    color: "red",
    fontSize: "0.75rem",
    marginBlockEnd: "0.3125rem"
  }),
  clearErrorButton: h({
    marginInlineStart: "0.3125rem",
    fontSize: "0.625rem"
  }),
  actionsContainer: h({
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    flexWrap: "nowrap",
    minWidth: 0
  }),
  statusCell: h({
    whiteSpace: "nowrap"
  })
}, _S = ({ result: e, index: t }) => {
  var y;
  const { config: r, refreshSearch: n } = et(), {
    deleteTask: a,
    runBulkImport: i,
    getStatus: o,
    isDeleting: l,
    isValidating: c,
    isBulkImporting: u,
    isGettingStatus: d,
    error: p,
    clearError: m
  } = ds(e.id, {
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
  return /* @__PURE__ */ s.createElement(Et, { key: t }, /* @__PURE__ */ s.createElement(W, null, /* @__PURE__ */ s.createElement("a", { href: `${r.resultPath}/${e.id}` }, e.title || "No title")), /* @__PURE__ */ s.createElement(W, null, Ge(e.created)), /* @__PURE__ */ s.createElement(W, { className: ze.statusCell }, /* @__PURE__ */ s.createElement(ts, { status: e.status }, Fe(e.status))), /* @__PURE__ */ s.createElement(W, null, /* @__PURE__ */ s.createElement(z, null, Fe(e.record_type))), /* @__PURE__ */ s.createElement(W, null, ((y = e.records_status) == null ? void 0 : y.total_records) ?? 0), /* @__PURE__ */ s.createElement(W, null, e.serializer), /* @__PURE__ */ s.createElement(W, null, Fe(e.mode)), /* @__PURE__ */ s.createElement(W, { className: ze.actionsCell }, p && /* @__PURE__ */ s.createElement("div", { className: ze.errorContainer }, p.message, /* @__PURE__ */ s.createElement(
    M,
    {
      onClick: m,
      className: ze.clearErrorButton,
      size: "mini",
      basic: !0
    },
    "Clear"
  )), /* @__PURE__ */ s.createElement("div", { className: ze.actionsContainer }, /* @__PURE__ */ s.createElement(
    de,
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
    M,
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
}, $S = ({ children: e }) => /* @__PURE__ */ s.createElement(T, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ s.createElement(da, null, /* @__PURE__ */ s.createElement(Et, null, /* @__PURE__ */ s.createElement(Y, null, "Title"), /* @__PURE__ */ s.createElement(Y, null, "Date Created"), /* @__PURE__ */ s.createElement(Y, null, "Status"), /* @__PURE__ */ s.createElement(Y, null, "Type"), /* @__PURE__ */ s.createElement(Y, null, "Items"), /* @__PURE__ */ s.createElement(Y, null, "Serializer"), /* @__PURE__ */ s.createElement(Y, null, "Mode"), /* @__PURE__ */ s.createElement(Y, null, "Actions"))), /* @__PURE__ */ s.createElement(pa, null, e)), xS = {
  container: h({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  })
}, CS = ({
  currentResultsState: e,
  currentQueryState: t
}) => {
  const r = e.data.total, n = t.size;
  return r ? n ? n > r ? /* @__PURE__ */ s.createElement(z, null, "Showing ", /* @__PURE__ */ s.createElement("strong", null, r), " result(s) found") : /* @__PURE__ */ s.createElement(z, { className: xS.container }, "Showing ", /* @__PURE__ */ s.createElement("strong", null, n), " of ", /* @__PURE__ */ s.createElement("strong", null, r), " ", "result(s) found") : null : /* @__PURE__ */ s.createElement(z, null, "No results found");
}, wS = Br(CS), TS = [
  { text: "Newest", value: "newest" },
  { text: "Oldest", value: "oldest" }
], Nn = {
  container: h({
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
    flexWrap: "wrap",
    alignItems: "center"
  }),
  sortByContainer: h({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  })
}, IS = () => /* @__PURE__ */ s.createElement("div", { className: Nn.container }, /* @__PURE__ */ s.createElement(wS, null), /* @__PURE__ */ s.createElement("div", { className: Nn.sortByContainer }, /* @__PURE__ */ s.createElement(SE, { values: TS }))), se = {
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
}, Ln = {
  searchLayout: h({
    display: "flex",
    flexDirection: ["column", "row"],
    // Responsive layout: column on mobile, row on tablet+
    gap: "1rem"
  }),
  searchContent: h({
    flex: 1,
    minInlineSize: 0
  })
}, ge = {
  optionsSection: h({
    marginBlockEnd: "1rem",
    border: "none",
    padding: 0,
    minInlineSize: 0
  }),
  optionsLegend: h({
    marginBlockEnd: "0.5rem",
    padding: 0,
    fontWeight: "600"
  }),
  fileInput: h({
    marginBlockStart: "0.5rem"
  }),
  helpText: h({
    marginBlockStart: "0.5rem",
    fontSize: "0.75rem",
    color: "#666"
  }),
  buttonContainer: h({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "0.5rem"
  })
}, FS = () => {
  const [e, t] = D(
    {}
  ), [r, n] = D(!0), a = oa(""), { values: i, submitForm: o, isSubmitting: l, isValid: c, setFieldValue: u } = $o(), d = k(async () => {
    try {
      const f = await hS(), y = {};
      for (const g of f) {
        const v = await gS(g);
        v && (y[g] = v);
      }
      t(y);
    } catch (f) {
      console.error("Error fetching record types:", f);
    } finally {
      n(!1);
    }
  }, []), p = (f) => {
    var g;
    const y = ((g = f.target.files) == null ? void 0 : g[0]) || null;
    u("metadata", y);
  }, m = (f) => {
    u("files", f);
  };
  return Ae(() => {
    d();
  }, [d]), Ae(() => {
    var y;
    const f = i.task.recordType;
    if (f !== a.current) {
      if (a.current = f, u("task.serializer", ""), !f) {
        u("task.options", {});
        return;
      }
      u("task.options", {
        ...((y = e[f]) == null ? void 0 : y.options) || {}
      });
    }
  }, [e, u, i.task.recordType]), {
    configs: e,
    isLoading: r,
    values: i,
    submitForm: o,
    setFieldValue: u,
    handleFileChange: p,
    handleFilesChange: m,
    isSubmitting: l,
    isValid: c
  };
}, AS = ({ progress: e }) => {
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
  } = FS(), u = o.task.recordType ? ((d = t[o.task.recordType]) == null ? void 0 : d.options) || {} : {};
  return r ? /* @__PURE__ */ s.createElement(es, null) : !t || Object.keys(t).length === 0 ? /* @__PURE__ */ s.createElement("p", null, "No record types available.") : /* @__PURE__ */ s.createElement(pr, null, /* @__PURE__ */ s.createElement(
    vo,
    {
      fieldPath: "task.title",
      label: "Title",
      placeholder: "Enter a title for the import task",
      required: !0
    }
  ), /* @__PURE__ */ s.createElement(ve.Group, { widths: "equal" }, /* @__PURE__ */ s.createElement(
    zt,
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
    zt,
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
    zt,
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
  )), Object.keys(u).length > 0 && /* @__PURE__ */ s.createElement(ve.Field, { as: "fieldset", className: ge.optionsSection }, /* @__PURE__ */ s.createElement("legend", { className: ge.optionsLegend }, "Options"), Object.keys(u).map((p) => /* @__PURE__ */ s.createElement(
    Eo,
    {
      key: p,
      fieldPath: `task.options.${p}`,
      label: Dt(p)
    }
  ))), /* @__PURE__ */ s.createElement(ve.Field, null, /* @__PURE__ */ s.createElement("label", { htmlFor: "file-input" }, "Metadata File"), /* @__PURE__ */ s.createElement(
    "input",
    {
      id: "file-input",
      type: "file",
      accept: ".csv",
      onChange: a,
      className: ge.fileInput
    }
  ), o.metadata && /* @__PURE__ */ s.createElement("p", { className: ge.helpText }, "Selected: ", o.metadata.name), /* @__PURE__ */ s.createElement("p", { className: ge.helpText }, "Upload a CSV file containing the records metadata to be imported or deleted.")), /* @__PURE__ */ s.createElement(ve.Field, null, /* @__PURE__ */ s.createElement(
    eo,
    {
      value: o.files || [],
      onChange: i,
      accept: "*",
      skipEmptyFiles: !0,
      maxTotalSize: 10 * 1024 * 1024 * 1024,
      maxFiles: 100
    }
  ), /* @__PURE__ */ s.createElement("p", { className: ge.helpText }, "Upload files related to the records. You can upload multiple files, and they will be associated with the import task.")), /* @__PURE__ */ s.createElement(
    So,
    {
      fieldPath: "task.description",
      label: "Notes",
      placeholder: "Enter a description for the import task",
      rows: 3
    }
  ), /* @__PURE__ */ s.createElement("div", { className: ge.buttonContainer }, e && /* @__PURE__ */ s.createElement(Ji, { progress: e }), /* @__PURE__ */ s.createElement(
    M,
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
var rr;
try {
  rr = Map;
} catch {
}
var nr;
try {
  nr = Set;
} catch {
}
function ps(e, t, r) {
  if (!e || typeof e != "object" || typeof e == "function")
    return e;
  if (e.nodeType && "cloneNode" in e)
    return e.cloneNode(!0);
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof RegExp)
    return new RegExp(e);
  if (Array.isArray(e))
    return e.map(ar);
  if (rr && e instanceof rr)
    return new Map(Array.from(e.entries()));
  if (nr && e instanceof nr)
    return new Set(Array.from(e.values()));
  if (e instanceof Object) {
    t.push(e);
    var n = Object.create(e);
    r.push(n);
    for (var a in e) {
      var i = t.findIndex(function(o) {
        return o === e[a];
      });
      n[a] = i > -1 ? r[i] : ps(e[a], t, r);
    }
    return n;
  }
  return e;
}
function ar(e) {
  return ps(e, [], []);
}
const OS = Object.prototype.toString, kS = Error.prototype.toString, RS = RegExp.prototype.toString, PS = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", DS = /^Symbol\((.*)\)(.*)$/;
function NS(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Bn(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return NS(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return PS.call(e).replace(DS, "Symbol($1)");
  const n = OS.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + kS.call(e) + "]" : n === "RegExp" ? RS.call(e) : null;
}
function He(e, t) {
  let r = Bn(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let i = Bn(this[n], t);
    return i !== null ? i : a;
  }, 2);
}
let be = {
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
    let a = n != null && n !== r, i = `${e} must be a \`${t}\` type, but the final value was: \`${He(r, !0)}\`` + (a ? ` (cast from the value \`${He(n, !0)}\`).` : ".");
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
}, LS = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, ir = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, BS = {
  isValue: "${path} field must be ${value}"
}, sr = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, US = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: be,
  string: Z,
  number: LS,
  date: ir,
  object: sr,
  array: US,
  boolean: BS
});
var zS = Object.prototype, MS = zS.hasOwnProperty;
function jS(e, t) {
  return e != null && MS.call(e, t);
}
var QS = jS, VS = QS, qS = Ca;
function GS(e, t) {
  return e != null && qS(e, t, VS);
}
var HS = GS;
const gt = /* @__PURE__ */ P(HS), fs = (e) => e && e.__isYupSchema__;
class WS {
  constructor(t, r) {
    if (this.fn = void 0, this.refs = t, this.refs = t, typeof r == "function") {
      this.fn = r;
      return;
    }
    if (!gt(r, "is"))
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
    if (!fs(a))
      throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
function ms(e) {
  return e == null ? [] : [].concat(e);
}
function or() {
  return or = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, or.apply(this, arguments);
}
let YS = /\$\{\s*(\w+)\s*\}/g;
class V extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = or({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(YS, (a, i) => He(r[i])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], ms(t).forEach((i) => {
      V.isError(i) ? (this.errors.push(...i.errors), this.inner = this.inner.concat(i.inner.length ? i.inner : i)) : this.errors.push(i);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, V);
  }
}
const KS = (e) => {
  let t = !1;
  return (...r) => {
    t || (t = !0, e(...r));
  };
};
function lr(e, t) {
  let {
    endEarly: r,
    tests: n,
    args: a,
    value: i,
    errors: o,
    sort: l,
    path: c
  } = e, u = KS(t), d = n.length;
  const p = [];
  if (o = o || [], !d)
    return o.length ? u(new V(o, i, c)) : u(null, i);
  for (let m = 0; m < n.length; m++) {
    const f = n[m];
    f(a, function(g) {
      if (g) {
        if (!V.isError(g))
          return u(g, i);
        if (r)
          return g.value = i, u(g, i);
        p.push(g);
      }
      if (--d <= 0) {
        if (p.length && (l && p.sort(l), o.length && p.push(...o), o = p), o.length) {
          u(new V(o, i, c), i);
          return;
        }
        u(null, i);
      }
    });
  }
}
function XS(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), l = o.length; l--; ) {
      var c = o[e ? l : ++a];
      if (r(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var ZS = XS, JS = ZS, e0 = JS(), t0 = e0, r0 = t0, n0 = Ze;
function a0(e, t) {
  return e && r0(e, t, n0);
}
var hs = a0, i0 = "__lodash_hash_undefined__";
function s0(e) {
  return this.__data__.set(e, i0), this;
}
var o0 = s0;
function l0(e) {
  return this.__data__.has(e);
}
var c0 = l0, u0 = Sr, d0 = o0, p0 = c0;
function yt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new u0(); ++t < r; )
    this.add(e[t]);
}
yt.prototype.add = yt.prototype.push = d0;
yt.prototype.has = p0;
var f0 = yt;
function m0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var h0 = m0;
function g0(e, t) {
  return e.has(t);
}
var y0 = g0, b0 = f0, v0 = h0, E0 = y0, S0 = 1, _0 = 2;
function $0(e, t, r, n, a, i) {
  var o = r & S0, l = e.length, c = t.length;
  if (l != c && !(o && c > l))
    return !1;
  var u = i.get(e), d = i.get(t);
  if (u && d)
    return u == t && d == e;
  var p = -1, m = !0, f = r & _0 ? new b0() : void 0;
  for (i.set(e, t), i.set(t, e); ++p < l; ) {
    var y = e[p], g = t[p];
    if (n)
      var v = o ? n(g, y, p, t, e, i) : n(y, g, p, e, t, i);
    if (v !== void 0) {
      if (v)
        continue;
      m = !1;
      break;
    }
    if (f) {
      if (!v0(t, function(b, S) {
        if (!E0(f, S) && (y === b || a(y, b, r, n, i)))
          return f.push(S);
      })) {
        m = !1;
        break;
      }
    } else if (!(y === g || a(y, g, r, n, i))) {
      m = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), m;
}
var gs = $0;
function x0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var C0 = x0;
function w0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var T0 = w0, Un = ke, zn = Na, I0 = wt, F0 = gs, A0 = C0, O0 = T0, k0 = 1, R0 = 2, P0 = "[object Boolean]", D0 = "[object Date]", N0 = "[object Error]", L0 = "[object Map]", B0 = "[object Number]", U0 = "[object RegExp]", z0 = "[object Set]", M0 = "[object String]", j0 = "[object Symbol]", Q0 = "[object ArrayBuffer]", V0 = "[object DataView]", Mn = Un ? Un.prototype : void 0, Qt = Mn ? Mn.valueOf : void 0;
function q0(e, t, r, n, a, i, o) {
  switch (r) {
    case V0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Q0:
      return !(e.byteLength != t.byteLength || !i(new zn(e), new zn(t)));
    case P0:
    case D0:
    case B0:
      return I0(+e, +t);
    case N0:
      return e.name == t.name && e.message == t.message;
    case U0:
    case M0:
      return e == t + "";
    case L0:
      var l = A0;
    case z0:
      var c = n & k0;
      if (l || (l = O0), e.size != t.size && !c)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= R0, o.set(e, t);
      var d = F0(l(e), l(t), n, a, i, o);
      return o.delete(e), d;
    case j0:
      if (Qt)
        return Qt.call(e) == Qt.call(t);
  }
  return !1;
}
var G0 = q0, jn = Da, H0 = 1, W0 = Object.prototype, Y0 = W0.hasOwnProperty;
function K0(e, t, r, n, a, i) {
  var o = r & H0, l = jn(e), c = l.length, u = jn(t), d = u.length;
  if (c != d && !o)
    return !1;
  for (var p = c; p--; ) {
    var m = l[p];
    if (!(o ? m in t : Y0.call(t, m)))
      return !1;
  }
  var f = i.get(e), y = i.get(t);
  if (f && y)
    return f == t && y == e;
  var g = !0;
  i.set(e, t), i.set(t, e);
  for (var v = o; ++p < c; ) {
    m = l[p];
    var b = e[m], S = t[m];
    if (n)
      var A = o ? n(S, b, m, t, e, i) : n(b, S, m, e, t, i);
    if (!(A === void 0 ? b === S || a(b, S, r, n, i) : A)) {
      g = !1;
      break;
    }
    v || (v = m == "constructor");
  }
  if (g && !v) {
    var B = e.constructor, te = t.constructor;
    B != te && "constructor" in e && "constructor" in t && !(typeof B == "function" && B instanceof B && typeof te == "function" && te instanceof te) && (g = !1);
  }
  return i.delete(e), i.delete(t), g;
}
var X0 = K0, Vt = Ir, Z0 = gs, J0 = G0, e_ = X0, Qn = We, Vn = q, qn = xt, t_ = br, r_ = 1, Gn = "[object Arguments]", Hn = "[object Array]", it = "[object Object]", n_ = Object.prototype, Wn = n_.hasOwnProperty;
function a_(e, t, r, n, a, i) {
  var o = Vn(e), l = Vn(t), c = o ? Hn : Qn(e), u = l ? Hn : Qn(t);
  c = c == Gn ? it : c, u = u == Gn ? it : u;
  var d = c == it, p = u == it, m = c == u;
  if (m && qn(e)) {
    if (!qn(t))
      return !1;
    o = !0, d = !1;
  }
  if (m && !d)
    return i || (i = new Vt()), o || t_(e) ? Z0(e, t, r, n, a, i) : J0(e, t, c, r, n, a, i);
  if (!(r & r_)) {
    var f = d && Wn.call(e, "__wrapped__"), y = p && Wn.call(t, "__wrapped__");
    if (f || y) {
      var g = f ? e.value() : e, v = y ? t.value() : t;
      return i || (i = new Vt()), a(g, v, r, n, i);
    }
  }
  return m ? (i || (i = new Vt()), e_(e, t, r, n, a, i)) : !1;
}
var i_ = a_, s_ = i_, Yn = ae;
function ys(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Yn(e) && !Yn(t) ? e !== e && t !== t : s_(e, t, r, n, ys, a);
}
var bs = ys, o_ = Ir, l_ = bs, c_ = 1, u_ = 2;
function d_(e, t, r, n) {
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
      var p = new o_();
      if (n)
        var m = n(u, d, c, e, t, p);
      if (!(m === void 0 ? l_(d, u, c_ | u_, n, p) : m))
        return !1;
    }
  }
  return !0;
}
var p_ = d_, f_ = oe;
function m_(e) {
  return e === e && !f_(e);
}
var vs = m_, h_ = vs, g_ = Ze;
function y_(e) {
  for (var t = g_(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, h_(a)];
  }
  return t;
}
var b_ = y_;
function v_(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Es = v_, E_ = p_, S_ = b_, __ = Es;
function $_(e) {
  var t = S_(e);
  return t.length == 1 && t[0][2] ? __(t[0][0], t[0][1]) : function(r) {
    return r === e || E_(r, e, t);
  };
}
var x_ = $_, C_ = bs, w_ = xa, T_ = xr, I_ = Er, F_ = vs, A_ = Es, O_ = Ke, k_ = 1, R_ = 2;
function P_(e, t) {
  return I_(e) && F_(t) ? A_(O_(e), t) : function(r) {
    var n = w_(r, e);
    return n === void 0 && n === t ? T_(r, e) : C_(t, n, k_ | R_);
  };
}
var D_ = P_;
function N_(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var L_ = N_, B_ = $r;
function U_(e) {
  return function(t) {
    return B_(t, e);
  };
}
var z_ = U_, M_ = L_, j_ = z_, Q_ = Er, V_ = Ke;
function q_(e) {
  return Q_(e) ? M_(V_(e)) : j_(e);
}
var G_ = q_, H_ = x_, W_ = D_, Y_ = wr, K_ = q, X_ = G_;
function Z_(e) {
  return typeof e == "function" ? e : e == null ? Y_ : typeof e == "object" ? K_(e) ? W_(e[0], e[1]) : H_(e) : X_(e);
}
var Ss = Z_, J_ = kt, e1 = hs, t1 = Ss;
function r1(e, t) {
  var r = {};
  return t = t1(t), e1(e, function(n, a, i) {
    J_(r, a, t(n, a, i));
  }), r;
}
var n1 = r1;
const _s = /* @__PURE__ */ P(n1);
function _e(e) {
  this._maxSize = e, this.clear();
}
_e.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
_e.prototype.get = function(e) {
  return this._values[e];
};
_e.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var a1 = /[^.^\]^[]+|(?=\[\]|\.\.)/g, $s = /^\d+$/, i1 = /^\d/, s1 = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, o1 = /^\s*(['"]?)(.*?)(\1)\s*$/, jr = 512, Kn = new _e(jr), Xn = new _e(jr), Zn = new _e(jr), Nt = {
  Cache: _e,
  split: cr,
  normalizePath: qt,
  setter: function(e) {
    var t = qt(e);
    return Xn.get(e) || Xn.set(e, function(n, a) {
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
    var r = qt(e);
    return Zn.get(e) || Zn.set(e, function(a) {
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
      return t + (Qr(r) || $s.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    l1(Array.isArray(e) ? e : cr(e), t, r);
  }
};
function qt(e) {
  return Kn.get(e) || Kn.set(
    e,
    cr(e).map(function(t) {
      return t.replace(o1, "$2");
    })
  );
}
function cr(e) {
  return e.match(a1) || [""];
}
function l1(e, t, r) {
  var n = e.length, a, i, o, l;
  for (i = 0; i < n; i++)
    a = e[i], a && (d1(a) && (a = '"' + a + '"'), l = Qr(a), o = !l && /^\d+$/.test(a), t.call(r, a, l, o, i, e));
}
function Qr(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function c1(e) {
  return e.match(i1) && !e.match($s);
}
function u1(e) {
  return s1.test(e);
}
function d1(e) {
  return !Qr(e) && (c1(e) || u1(e));
}
const st = {
  context: "$",
  value: "."
};
class pe {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
      throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === st.context, this.isValue = this.key[0] === st.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? st.context : this.isValue ? st.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && Nt.getter(this.path, !0), this.map = r.map;
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
pe.prototype.__isYupRef = !0;
function bt() {
  return bt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bt.apply(this, arguments);
}
function p1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function ot(e) {
  function t(r, n) {
    let {
      value: a,
      path: i = "",
      label: o,
      options: l,
      originalValue: c,
      sync: u
    } = r, d = p1(r, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name: p,
      test: m,
      params: f,
      message: y
    } = e;
    let {
      parent: g,
      context: v
    } = l;
    function b(O) {
      return pe.isRef(O) ? O.getValue(a, g, v) : O;
    }
    function S(O = {}) {
      const he = _s(bt({
        value: a,
        originalValue: c,
        label: o,
        path: O.path || i
      }, f, O.params), b), tt = new V(V.formatError(O.message || y, he), a, he.path, O.type || p);
      return tt.params = he, tt;
    }
    let A = bt({
      path: i,
      parent: g,
      type: p,
      createError: S,
      resolve: b,
      options: l,
      originalValue: c
    }, d);
    if (!u) {
      try {
        Promise.resolve(m.call(A, a, A)).then((O) => {
          V.isError(O) ? n(O) : O ? n(null, O) : n(S());
        }).catch(n);
      } catch (O) {
        n(O);
      }
      return;
    }
    let B;
    try {
      var te;
      if (B = m.call(A, a, A), typeof ((te = B) == null ? void 0 : te.then) == "function")
        throw new Error(`Validation test of type: "${A.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (O) {
      n(O);
      return;
    }
    V.isError(B) ? n(B) : B ? n(null, B) : n(S());
  }
  return t.OPTIONS = e, t;
}
let f1 = (e) => e.substr(0, e.length - 1).substr(1);
function m1(e, t, r, n = r) {
  let a, i, o;
  return t ? (Nt.forEach(t, (l, c, u) => {
    let d = c ? f1(l) : l;
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
class vt {
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
    return this.toArray().reduce((r, n) => r.concat(pe.isRef(n) ? t(n) : n), []);
  }
  add(t) {
    pe.isRef(t) ? this.refs.set(t.key, t) : this.list.add(t);
  }
  delete(t) {
    pe.isRef(t) ? this.refs.delete(t.key) : this.list.delete(t);
  }
  clone() {
    const t = new vt();
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
    this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new vt(), this._blacklist = new vt(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(be.notType);
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
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = H({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = ar(H({}, this.spec, t)), r;
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
      let i = He(t), o = He(a);
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
    }, m = [];
    this._typeError && m.push(this._typeError);
    let f = [];
    this._whitelistError && f.push(this._whitelistError), this._blacklistError && f.push(this._blacklistError), lr({
      args: p,
      value: d,
      path: i,
      sync: a,
      tests: m,
      endEarly: u
    }, (y) => {
      if (y)
        return void n(y, d);
      lr({
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
      if (V.isError(n))
        return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (V.isError(n))
        return !1;
      throw n;
    }
  }
  _getDefault() {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this) : ar(t);
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
  defined(t = be.defined) {
    return this.test({
      message: t,
      name: "defined",
      exclusive: !0,
      test(r) {
        return r !== void 0;
      }
    });
  }
  required(t = be.required) {
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
    }, r.message === void 0 && (r.message = be.default), typeof r.test != "function")
      throw new TypeError("`test` is a required parameters");
    let n = this.clone(), a = ot(r), i = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === r.name && (i || o.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = ms(t).map((i) => new pe(i));
    return a.forEach((i) => {
      i.isSibling && n.deps.push(i.key);
    }), n.conditions.push(new WS(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r._typeError = ot({
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
  oneOf(t, r = be.oneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._whitelist.add(a), n._blacklist.delete(a);
    }), n._whitelistError = ot({
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
  notOneOf(t, r = be.notOneOf) {
    let n = this.clone();
    return t.forEach((a) => {
      n._blacklist.add(a), n._whitelist.delete(a);
    }), n._blacklistError = ot({
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
    } = m1(this, t, r, n.context);
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
const h1 = j;
h1.prototype;
const J = (e) => e == null;
let g1 = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, y1 = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, b1 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, v1 = (e) => J(e) || e === e.trim(), E1 = {}.toString();
function Ve() {
  return new xs();
}
class xs extends j {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === E1 ? t : r;
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
    return this.matches(g1, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = Z.url) {
    return this.matches(y1, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = Z.uuid) {
    return this.matches(b1, {
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
      test: v1
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
Ve.prototype = xs.prototype;
var S1 = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function _1(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, a;
  if (a = S1.exec(e)) {
    for (var i = 0, o; o = t[i]; ++i)
      a[o] = +a[o] || 0;
    a[2] = (+a[2] || 1) - 1, a[3] = +a[3] || 1, a[7] = a[7] ? String(a[7]).substr(0, 3) : 0, (a[8] === void 0 || a[8] === "") && (a[9] === void 0 || a[9] === "") ? n = +new Date(a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : (a[8] !== "Z" && a[9] !== void 0 && (r = a[10] * 60 + a[11], a[9] === "+" && (r = 0 - r)), n = Date.UTC(a[1], a[2], a[3], a[4], a[5] + r, a[6], a[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let Cs = /* @__PURE__ */ new Date(""), $1 = (e) => Object.prototype.toString.call(e) === "[object Date]";
class ws extends j {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = _1(t), isNaN(t) ? Cs : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return $1(t) && !isNaN(t.getTime());
  }
  prepareParam(t, r) {
    let n;
    if (pe.isRef(t))
      n = t;
    else {
      let a = this.cast(t);
      if (!this._typeCheck(a))
        throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = a;
    }
    return n;
  }
  min(t, r = ir.min) {
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
  max(t, r = ir.max) {
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
ws.INVALID_DATE = Cs;
ws.prototype;
function x1(e, t, r, n) {
  var a = -1, i = e == null ? 0 : e.length;
  for (n && i && (r = e[++a]); ++a < i; )
    r = t(r, e[a], a, e);
  return r;
}
var C1 = x1;
function w1(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var T1 = w1, I1 = T1, F1 = {
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
}, A1 = I1(F1), O1 = A1, k1 = O1, R1 = Ye, P1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, D1 = "\\u0300-\\u036f", N1 = "\\ufe20-\\ufe2f", L1 = "\\u20d0-\\u20ff", B1 = D1 + N1 + L1, U1 = "[" + B1 + "]", z1 = RegExp(U1, "g");
function M1(e) {
  return e = R1(e), e && e.replace(P1, k1).replace(z1, "");
}
var j1 = M1, Q1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function V1(e) {
  return e.match(Q1) || [];
}
var q1 = V1, G1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function H1(e) {
  return G1.test(e);
}
var W1 = H1, Ts = "\\ud800-\\udfff", Y1 = "\\u0300-\\u036f", K1 = "\\ufe20-\\ufe2f", X1 = "\\u20d0-\\u20ff", Z1 = Y1 + K1 + X1, Is = "\\u2700-\\u27bf", Fs = "a-z\\xdf-\\xf6\\xf8-\\xff", J1 = "\\xac\\xb1\\xd7\\xf7", e$ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", t$ = "\\u2000-\\u206f", r$ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", As = "A-Z\\xc0-\\xd6\\xd8-\\xde", n$ = "\\ufe0e\\ufe0f", Os = J1 + e$ + t$ + r$, ks = "['’]", Jn = "[" + Os + "]", a$ = "[" + Z1 + "]", Rs = "\\d+", i$ = "[" + Is + "]", Ps = "[" + Fs + "]", Ds = "[^" + Ts + Os + Rs + Is + Fs + As + "]", s$ = "\\ud83c[\\udffb-\\udfff]", o$ = "(?:" + a$ + "|" + s$ + ")", l$ = "[^" + Ts + "]", Ns = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ls = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ce = "[" + As + "]", c$ = "\\u200d", ea = "(?:" + Ps + "|" + Ds + ")", u$ = "(?:" + Ce + "|" + Ds + ")", ta = "(?:" + ks + "(?:d|ll|m|re|s|t|ve))?", ra = "(?:" + ks + "(?:D|LL|M|RE|S|T|VE))?", Bs = o$ + "?", Us = "[" + n$ + "]?", d$ = "(?:" + c$ + "(?:" + [l$, Ns, Ls].join("|") + ")" + Us + Bs + ")*", p$ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", f$ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", m$ = Us + Bs + d$, h$ = "(?:" + [i$, Ns, Ls].join("|") + ")" + m$, g$ = RegExp([
  Ce + "?" + Ps + "+" + ta + "(?=" + [Jn, Ce, "$"].join("|") + ")",
  u$ + "+" + ra + "(?=" + [Jn, Ce + ea, "$"].join("|") + ")",
  Ce + "?" + ea + "+" + ta,
  Ce + "+" + ra,
  f$,
  p$,
  Rs,
  h$
].join("|"), "g");
function y$(e) {
  return e.match(g$) || [];
}
var b$ = y$, v$ = q1, E$ = W1, S$ = Ye, _$ = b$;
function $$(e, t, r) {
  return e = S$(e), t = r ? void 0 : t, t === void 0 ? E$(e) ? _$(e) : v$(e) : e.match(t) || [];
}
var x$ = $$, C$ = C1, w$ = j1, T$ = x$, I$ = "['’]", F$ = RegExp(I$, "g");
function A$(e) {
  return function(t) {
    return C$(T$(w$(t).replace(F$, "")), e, "");
  };
}
var zs = A$, O$ = zs, k$ = O$(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), R$ = k$;
const na = /* @__PURE__ */ P(R$);
function P$(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + t];
  return i;
}
var D$ = P$, N$ = D$;
function L$(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : N$(e, t, r);
}
var B$ = L$, U$ = "\\ud800-\\udfff", z$ = "\\u0300-\\u036f", M$ = "\\ufe20-\\ufe2f", j$ = "\\u20d0-\\u20ff", Q$ = z$ + M$ + j$, V$ = "\\ufe0e\\ufe0f", q$ = "\\u200d", G$ = RegExp("[" + q$ + U$ + Q$ + V$ + "]");
function H$(e) {
  return G$.test(e);
}
var Ms = H$;
function W$(e) {
  return e.split("");
}
var Y$ = W$, js = "\\ud800-\\udfff", K$ = "\\u0300-\\u036f", X$ = "\\ufe20-\\ufe2f", Z$ = "\\u20d0-\\u20ff", J$ = K$ + X$ + Z$, ex = "\\ufe0e\\ufe0f", tx = "[" + js + "]", ur = "[" + J$ + "]", dr = "\\ud83c[\\udffb-\\udfff]", rx = "(?:" + ur + "|" + dr + ")", Qs = "[^" + js + "]", Vs = "(?:\\ud83c[\\udde6-\\uddff]){2}", qs = "[\\ud800-\\udbff][\\udc00-\\udfff]", nx = "\\u200d", Gs = rx + "?", Hs = "[" + ex + "]?", ax = "(?:" + nx + "(?:" + [Qs, Vs, qs].join("|") + ")" + Hs + Gs + ")*", ix = Hs + Gs + ax, sx = "(?:" + [Qs + ur + "?", ur, Vs, qs, tx].join("|") + ")", ox = RegExp(dr + "(?=" + dr + ")|" + sx + ix, "g");
function lx(e) {
  return e.match(ox) || [];
}
var cx = lx, ux = Y$, dx = Ms, px = cx;
function fx(e) {
  return dx(e) ? px(e) : ux(e);
}
var mx = fx, hx = B$, gx = Ms, yx = mx, bx = Ye;
function vx(e) {
  return function(t) {
    t = bx(t);
    var r = gx(t) ? yx(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? hx(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var Ex = vx, Sx = Ex, _x = Sx("toUpperCase"), $x = _x, xx = Ye, Cx = $x;
function wx(e) {
  return Cx(xx(e).toLowerCase());
}
var Tx = wx, Ix = Tx, Fx = zs, Ax = Fx(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? Ix(t) : t);
}), Ox = Ax;
const kx = /* @__PURE__ */ P(Ox);
var Rx = kt, Px = hs, Dx = Ss;
function Nx(e, t) {
  var r = {};
  return t = Dx(t), Px(e, function(n, a, i) {
    Rx(r, t(n, a, i), n);
  }), r;
}
var Lx = Nx;
const Bx = /* @__PURE__ */ P(Lx);
var Vr = { exports: {} };
Vr.exports = function(e) {
  return Ws(Ux(e), e);
};
Vr.exports.array = Ws;
function Ws(e, t) {
  var r = e.length, n = new Array(r), a = {}, i = r, o = zx(t), l = Mx(e);
  for (t.forEach(function(u) {
    if (!l.has(u[0]) || !l.has(u[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); i--; )
    a[i] || c(e[i], i, /* @__PURE__ */ new Set());
  return n;
  function c(u, d, p) {
    if (p.has(u)) {
      var m;
      try {
        m = ", node was:" + JSON.stringify(u);
      } catch {
        m = "";
      }
      throw new Error("Cyclic dependency" + m);
    }
    if (!l.has(u))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(u));
    if (!a[d]) {
      a[d] = !0;
      var f = o.get(u) || /* @__PURE__ */ new Set();
      if (f = Array.from(f), d = f.length) {
        p.add(u);
        do {
          var y = f[--d];
          c(y, l.get(y), p);
        } while (d);
        p.delete(u);
      }
      n[--r] = u;
    }
  }
}
function Ux(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.add(a[0]), t.add(a[1]);
  }
  return Array.from(t);
}
function zx(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.has(a[0]) || t.set(a[0], /* @__PURE__ */ new Set()), t.has(a[1]) || t.set(a[1], /* @__PURE__ */ new Set()), t.get(a[0]).add(a[1]);
  }
  return t;
}
function Mx(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var jx = Vr.exports;
const Qx = /* @__PURE__ */ P(jx);
function Vx(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([o, l]) => `${o}-${l}`));
  function i(o, l) {
    let c = Nt.split(o)[0];
    n.add(c), a.has(`${l}-${c}`) || r.push([l, c]);
  }
  for (const o in e)
    if (gt(e, o)) {
      let l = e[o];
      n.add(o), pe.isRef(l) && l.isSibling ? i(l.path, o) : fs(l) && "deps" in l && l.deps.forEach((c) => i(c, o));
    }
  return Qx.array(Array.from(n), r).reverse();
}
function aa(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var i;
    if (((i = t.path) == null ? void 0 : i.indexOf(n)) !== -1)
      return r = a, !0;
  }), r;
}
function Ys(e) {
  return (t, r) => aa(e, t) - aa(e, r);
}
function we() {
  return we = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, we.apply(this, arguments);
}
let ia = (e) => Object.prototype.toString.call(e) === "[object Object]";
function qx(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const Gx = Ys([]);
class Ks extends j {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Gx, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
    return ia(t) || typeof t == "function";
  }
  _cast(t, r = {}) {
    var n;
    let a = super._cast(t, r);
    if (a === void 0)
      return this.getDefault();
    if (!this._typeCheck(a))
      return a;
    let i = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, l = this._nodes.concat(Object.keys(a).filter((p) => this._nodes.indexOf(p) === -1)), c = {}, u = we({}, r, {
      parent: c,
      __validating: r.__validating || !1
    }), d = !1;
    for (const p of l) {
      let m = i[p], f = gt(a, p);
      if (m) {
        let y, g = a[p];
        u.path = (r.path ? `${r.path}.` : "") + p, m = m.resolve({
          value: g,
          context: r.context,
          parent: c
        });
        let v = "spec" in m ? m.spec : void 0, b = v == null ? void 0 : v.strict;
        if (v != null && v.strip) {
          d = d || p in a;
          continue;
        }
        y = !r.__validating || !b ? (
          // TODO: use _cast, this is double resolving
          m.cast(a[p], u)
        ) : a[p], y !== void 0 && (c[p] = y);
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
        if (!V.isError(d) || c)
          return void n(d, p);
        a.push(d);
      }
      if (!u || !ia(p)) {
        n(a[0] || null, p);
        return;
      }
      l = l || p;
      let m = this._nodes.map((f) => (y, g) => {
        let v = f.indexOf(".") === -1 ? (r.path ? `${r.path}.` : "") + f : `${r.path || ""}["${f}"]`, b = this.fields[f];
        if (b && "validate" in b) {
          b.validate(p[f], we({}, r, {
            // @ts-ignore
            path: v,
            from: o,
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
      lr({
        sync: i,
        tests: m,
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
    return r.fields = we({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
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
    return n.fields = a, n._sortErrors = Ys(Object.keys(a)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = Vx(a, n._excludedEdges), n;
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
    let a = Nt.getter(t, !0);
    return this.transform((i) => {
      if (i == null)
        return i;
      let o = i;
      return gt(i, t) && (o = we({}, i), n || delete o[t], o[r] = a(i)), o;
    });
  }
  noUnknown(t = !0, r = sr.noUnknown) {
    typeof t == "string" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(a) {
        if (a == null)
          return !0;
        const i = qx(this.schema, a);
        return !t || i.length === 0 || this.createError({
          params: {
            unknown: i.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = sr.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => r && Bx(r, (n, a) => t(a)));
  }
  camelCase() {
    return this.transformKeys(kx);
  }
  snakeCase() {
    return this.transformKeys(na);
  }
  constantCase() {
    return this.transformKeys((t) => na(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = _s(this.fields, (r) => r.describe()), t;
  }
}
function ut(e) {
  return new Ks(e);
}
ut.prototype = Ks.prototype;
const Hx = {
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
}, Wx = ut({
  task: ut({
    title: Ve().required("Title is required"),
    recordType: Ve().required("Record type is required"),
    serializer: Ve().required("Serializer is required"),
    mode: Ve().required("Mode is required")
  }),
  metadata: ut().nullable()
}), Yx = ({ onSubmit: e }) => {
  const [t, r] = D(void 0), n = async (a) => {
    try {
      await vS(a.task, a.metadata, a.files, {
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
    _o,
    {
      formik: {
        initialValues: Hx,
        validationSchema: Wx,
        onSubmit: n
      }
    },
    /* @__PURE__ */ s.createElement(AS, { progress: t })
  );
}, Kx = () => {
  const [e, t] = D(!1), { refreshSearch: r } = et(), n = k(() => {
    r(), t(!1);
  }, [r]);
  return /* @__PURE__ */ s.createElement(
    ue,
    {
      closeIcon: !0,
      onClose: () => t(!1),
      onOpen: () => t(!0),
      open: e,
      trigger: /* @__PURE__ */ s.createElement(M, { color: "green", icon: !0, labelPosition: "left" }, /* @__PURE__ */ s.createElement(_, { name: "add" }), "New Import")
    },
    /* @__PURE__ */ s.createElement(co, null, "New Import Task"),
    /* @__PURE__ */ s.createElement(uo, null, /* @__PURE__ */ s.createElement(Yx, { onSubmit: n }))
  );
}, Gt = {
  searchBarRow: h({
    display: "flex !important",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1rem",
    paddingBlock: "0.5rem",
    minBlockSize: "3rem"
  }),
  facets: h({
    flex: "0 0 auto"
  }),
  search: h({
    flex: "1 1 auto",
    minInlineSize: "15rem"
  }),
  visuallyHidden: h({
    srOnly: !0
  })
}, Xx = ({
  appId: e = "search"
}) => {
  const { showImportModal: t } = et().config;
  return /* @__PURE__ */ s.createElement(E, { id: `${e}.SearchBarRow` }, /* @__PURE__ */ s.createElement(
    "section",
    {
      className: Gt.searchBarRow,
      "aria-label": "Records search and filters"
    },
    /* @__PURE__ */ s.createElement("div", { className: Gt.search }, /* @__PURE__ */ s.createElement(
      gE,
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
    t && /* @__PURE__ */ s.createElement("div", { className: Gt.facets }, /* @__PURE__ */ s.createElement(Kx, null))
  ));
}, Zx = ({ currentResultsState: e }) => {
  var a;
  const t = ((a = e == null ? void 0 : e.data) == null ? void 0 : a.aggregations) || {}, r = k((i) => i.replace(/_/g, " ").replace(/\b\w/g, (o) => o.toUpperCase()), []);
  return { availableAggregations: la(
    () => Object.keys(t).filter((i) => {
      var l;
      return (((l = t[i]) == null ? void 0 : l.buckets) || []).length > 0;
    }),
    [t]
  ), formatTitle: r };
}, Jx = {
  container: h({
    minInlineSize: "20rem",
    paddingInlineEnd: "1rem",
    paddingBlock: ".5rem",
    flex: 0
  })
}, eC = (e) => {
  const { config: t } = et(), { availableAggregations: r, formatTitle: n } = Zx(e);
  return !t.showFacets || r.length === 0 ? null : /* @__PURE__ */ s.createElement("aside", { className: Jx.container, "aria-label": "Search Facets" }, r.map((a) => /* @__PURE__ */ s.createElement(
    Gv,
    {
      key: a,
      title: n(a),
      agg: {
        field: a,
        aggName: a
      }
    }
  )));
}, tC = Br(eC), rC = () => {
  const { config: e } = et();
  return /* @__PURE__ */ s.createElement(rt, null, /* @__PURE__ */ s.createElement(rt.Row, { verticalAlign: "middle" }, /* @__PURE__ */ s.createElement(rt.Column, { width: 14, textAlign: "center" }, /* @__PURE__ */ s.createElement(rE, { options: { size: "mini" } })), /* @__PURE__ */ s.createElement(rt.Column, { width: 2, textAlign: "right" }, /* @__PURE__ */ s.createElement(
    fE,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ s.createElement("p", null, t, " results per page")
    }
  ))));
}, Xs = ({
  config: e = {},
  overriddenComponents: t = {}
}) => {
  var i, o, l, c, u;
  const r = {
    ...se,
    ...e,
    initialQueryState: {
      ...se.initialQueryState,
      ...e.initialQueryState
    },
    layoutOptions: {
      ...se.layoutOptions,
      ...e.layoutOptions
    },
    paginationOptions: {
      ...se.paginationOptions,
      ...e.paginationOptions,
      resultsPerPage: ((i = e.paginationOptions) == null ? void 0 : i.resultsPerPage) || se.paginationOptions.resultsPerPage
    },
    searchApi: {
      ...se.searchApi,
      ...e.searchApi,
      axios: {
        ...se.searchApi.axios,
        ...(o = e.searchApi) == null ? void 0 : o.axios,
        headers: {
          ...se.searchApi.axios.headers,
          ...(c = (l = e.searchApi) == null ? void 0 : l.axios) == null ? void 0 : c.headers
        }
      },
      invenio: {
        ...se.searchApi.invenio,
        ...(u = e.searchApi) == null ? void 0 : u.invenio
      }
    },
    showFacets: e.showFacets ?? !0,
    showImportModal: e.showImportModal ?? !0,
    showSearchFooter: e.showSearchFooter ?? !0
  }, n = new Va(r.searchApi), a = {
    [`${r.appId}.ResultsList.item`]: _S,
    [`${r.appId}.ResultsList.container`]: $S,
    [`${r.appId}.BucketAggregation.element`]: tS,
    [`${r.appId}.BucketAggregationValues.element`]: rS,
    ...t
  };
  return /* @__PURE__ */ s.createElement(ao.Provider, { value: a }, /* @__PURE__ */ s.createElement(
    kv,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ s.createElement(aS, { config: r }, /* @__PURE__ */ s.createElement("div", { className: Ln.searchLayout }, /* @__PURE__ */ s.createElement(tC, null), /* @__PURE__ */ s.createElement("div", { className: Ln.searchContent }, /* @__PURE__ */ s.createElement(Xx, { appId: r.appId }), /* @__PURE__ */ s.createElement(IS, null), /* @__PURE__ */ s.createElement(cE, null, /* @__PURE__ */ s.createElement(Kv, null), /* @__PURE__ */ s.createElement(wi, null)), r.showSearchFooter && /* @__PURE__ */ s.createElement(rC, null))))
  ));
}, re = {
  detailCard: h({
    paddingInline: "1rem",
    borderEndEndRadius: "1.25rem !important",
    borderEndStartRadius: "1.25rem !important",
    border: "1px solid #e4e9f2"
  }),
  accordionTrigger: h({
    cursor: "pointer",
    padding: 0
  }),
  accordionHeading: h({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem"
  }),
  sectionTitle: h({
    display: "flex",
    alignItems: "flex-start",
    gap: "0.625rem",
    color: "#1f3656",
    fontSize: "1rem",
    fontWeight: "700"
  }),
  accordionChevron: h({
    color: "#6c7f99"
  }),
  accordionContent: h({
    paddingBlockStart: "1rem"
  }),
  detailList: h({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
    marginBlockEnd: "1rem",
    gap: "0.75rem"
  }),
  detailItem: h({
    padding: "0.9rem",
    borderRadius: "1rem",
    background: "#f8fafd",
    border: "1px solid #e7edf5"
  }),
  detailLabel: h({
    marginBlockEnd: "0.35rem",
    color: "#6c7f99",
    fontSize: "0.76rem",
    fontWeight: "700",
    letterSpacing: "0.05em",
    textTransform: "uppercase"
  }),
  detailValue: h({
    color: "#16283f",
    fontSize: "0.96rem",
    fontWeight: "600",
    lineHeight: "1.5",
    wordBreak: "break-word"
  })
}, le = (e, t) => typeof e == "boolean" ? e ? "Enabled" : "Disabled" : e == null || e === "" ? "Not available" : t ? t(String(e)) : String(e), nC = ({
  task: e
}) => {
  var a, i, o, l, c;
  const [t, r] = D(!1), n = [
    {
      label: "Mode",
      value: le(e.mode, Fe)
    },
    {
      label: "Record type",
      value: le(e.record_type, Dt)
    },
    {
      label: "Serializer",
      value: le(e.serializer)
    },
    {
      label: "Files",
      value: le((a = e.files) == null ? void 0 : a.enabled)
    },
    {
      label: "Revision",
      value: le(e.revision_id)
    },
    {
      label: "Created",
      value: le(e.created, Ge)
    },
    {
      label: "Updated",
      value: le(e.updated, Ge)
    },
    {
      label: "Started by",
      value: (i = e.started_by) != null && i.username && ((o = e.started_by) != null && o.email) ? `${e.started_by.username} (${e.started_by.email})` : le(
        ((l = e.started_by) == null ? void 0 : l.username) || ((c = e.started_by) == null ? void 0 : c.email) || null
      )
    }
  ];
  return /* @__PURE__ */ s.createElement("div", { className: re.detailCard }, /* @__PURE__ */ s.createElement(Ut, { fluid: !0, styled: !1 }, /* @__PURE__ */ s.createElement(
    Ut.Title,
    {
      active: t,
      onClick: () => r((u) => !u),
      className: re.accordionTrigger
    },
    /* @__PURE__ */ s.createElement("div", { className: re.accordionHeading }, /* @__PURE__ */ s.createElement("div", { className: re.sectionTitle }, /* @__PURE__ */ s.createElement(_, { name: "sliders horizontal" }), /* @__PURE__ */ s.createElement("span", null, "Task Information")), /* @__PURE__ */ s.createElement(
      _,
      {
        name: t ? "chevron up" : "chevron down",
        className: re.accordionChevron
      }
    ))
  ), /* @__PURE__ */ s.createElement(Ut.Content, { active: t, className: re.accordionContent }, /* @__PURE__ */ s.createElement("div", { className: re.detailList }, n.map((u) => /* @__PURE__ */ s.createElement("div", { key: u.label, className: re.detailItem }, /* @__PURE__ */ s.createElement("div", { className: re.detailLabel }, u.label), /* @__PURE__ */ s.createElement("div", { className: re.detailValue }, u.value)))))));
}, aC = {
  container: h({
    paddingBlockStart: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem"
  })
}, Zs = no(
  void 0
), iC = ({
  taskId: e,
  children: t
}) => /* @__PURE__ */ s.createElement(Zs.Provider, { value: { taskId: e } }, /* @__PURE__ */ s.createElement("div", { className: aC.container }, t)), Js = () => {
  const e = F(Zs);
  if (!e)
    throw new Error("useTaskDetails must be used within a TaskDetailsProvider");
  return e;
}, sa = {
  page: h({
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem"
  }),
  detailsGrid: h({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
    gap: "1rem"
  })
}, sC = ({ children: e }) => /* @__PURE__ */ s.createElement(T, { padded: !0, size: "small", compact: !0 }, /* @__PURE__ */ s.createElement(da, null, /* @__PURE__ */ s.createElement(Et, null, /* @__PURE__ */ s.createElement(Y, null, "ID"), /* @__PURE__ */ s.createElement(Y, null, "Title"), /* @__PURE__ */ s.createElement(Y, null, "Status"), /* @__PURE__ */ s.createElement(Y, null))), /* @__PURE__ */ s.createElement(pa, null, e)), oC = {
  headerContainer: h({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  })
}, lC = ({ record: e }) => /* @__PURE__ */ s.createElement(fe, { basic: !0 }, /* @__PURE__ */ s.createElement($, null, /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "tag" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Record ID"), /* @__PURE__ */ s.createElement($.Description, null, e.id))), /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "calendar" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Created"), /* @__PURE__ */ s.createElement($.Description, null, Ge(e.created)))), /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "edit" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Updated"), /* @__PURE__ */ s.createElement($.Description, null, Ge(e.updated)))), e.generated_record_id && /* @__PURE__ */ s.createElement($.Item, null, /* @__PURE__ */ s.createElement($.Icon, { name: "file alternate" }), /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement($.Header, null, "Generated Record ID"), /* @__PURE__ */ s.createElement($.Description, null, /* @__PURE__ */ s.createElement(
  "a",
  {
    href: `/records/${e.generated_record_id}`,
    target: "_blank",
    rel: "noopener noreferrer"
  },
  "/",
  e.generated_record_id
)))))), cC = ({ record: e }) => /* @__PURE__ */ s.createElement(fe, { basic: !0 }, e.errors.map((t, r) => /* @__PURE__ */ s.createElement(K, { key: `error-${r}-${t.type}`, negative: !0 }, /* @__PURE__ */ s.createElement(K.Header, null, t.type), /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Location:"), " ", t.loc), /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Message:"), " ", t.msg)))), uC = {
  pathCell: h({
    wordBreak: "break-all"
  })
}, dC = ({ record: e }) => {
  var r, n;
  return (((r = e.record_files) == null ? void 0 : r.length) ?? 0) > 0 || (((n = e.validated_record_files) == null ? void 0 : n.length) ?? 0) > 0 ? /* @__PURE__ */ s.createElement(fe, { basic: !0 }, e.record_files && e.record_files.length > 0 && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Ee, { as: "h4" }, /* @__PURE__ */ s.createElement(_, { name: "file" }), "File List"), /* @__PURE__ */ s.createElement($, { bulleted: !0 }, e.record_files.map((a) => /* @__PURE__ */ s.createElement($.Item, { key: `file-${a}` }, /* @__PURE__ */ s.createElement($.Content, null, a))))), e.validated_record_files && e.validated_record_files.length > 0 && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Ee, { as: "h4" }, /* @__PURE__ */ s.createElement(_, { name: "checkmark" }), "Validated Files"), /* @__PURE__ */ s.createElement(T, { celled: !0 }, /* @__PURE__ */ s.createElement(T.Header, null, /* @__PURE__ */ s.createElement(T.Row, null, /* @__PURE__ */ s.createElement(T.HeaderCell, null, "File"), /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Size"), /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Origin"), /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Path"))), /* @__PURE__ */ s.createElement(T.Body, null, e.validated_record_files.map((a, i) => /* @__PURE__ */ s.createElement(T.Row, { key: `validated-${a.key}-${i}` }, /* @__PURE__ */ s.createElement(T.Cell, null, /* @__PURE__ */ s.createElement(_, { name: "file" }), a.key), /* @__PURE__ */ s.createElement(T.Cell, null, (a.size / 1024).toFixed(2), " KB"), /* @__PURE__ */ s.createElement(T.Cell, null, a.origin), /* @__PURE__ */ s.createElement(T.Cell, { className: uC.pathCell }, a.full_path))))))) : /* @__PURE__ */ s.createElement(K, { info: !0 }, /* @__PURE__ */ s.createElement(K.Header, null, "No Files"), /* @__PURE__ */ s.createElement("p", null, "No files are associated with this record."));
}, pC = {
  valueCell: h({
    wordBreak: "break-word"
  })
}, fC = ({ record: e }) => /* @__PURE__ */ s.createElement(T, { celled: !0, striped: !0 }, /* @__PURE__ */ s.createElement(T.Header, null, /* @__PURE__ */ s.createElement(T.Row, null, /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Field"), /* @__PURE__ */ s.createElement(T.HeaderCell, null, "Value"))), /* @__PURE__ */ s.createElement(T.Body, null, Object.entries(e.src_data).filter(([t, r]) => r && r.trim() !== "").map(([t, r]) => /* @__PURE__ */ s.createElement(T.Row, { key: t }, /* @__PURE__ */ s.createElement(T.Cell, null, /* @__PURE__ */ s.createElement("strong", null, t)), /* @__PURE__ */ s.createElement(T.Cell, { className: pC.valueCell }, r))))), mC = ({
  record: e,
  open: t,
  onClose: r,
  initialTab: n = 0
}) => {
  const [a, i] = D(n);
  Ae(() => {
    t && i(n);
  }, [t, n]);
  const o = (u, d) => {
    const p = typeof d.activeIndex == "number" ? d.activeIndex : 0;
    i(p);
  }, l = [
    {
      menuItem: { key: "basic", icon: "info circle", content: "Basic Info" },
      render: () => /* @__PURE__ */ s.createElement(Be.Pane, null, /* @__PURE__ */ s.createElement(lC, { record: e }))
    },
    {
      menuItem: { key: "source", icon: "database", content: "Source Data" },
      render: () => /* @__PURE__ */ s.createElement(Be.Pane, null, /* @__PURE__ */ s.createElement(fC, { record: e }))
    },
    ...e.errors && e.errors.length > 0 ? [
      {
        menuItem: {
          key: "errors",
          icon: "exclamation triangle",
          content: `Errors (${e.errors.length})`
        },
        render: () => /* @__PURE__ */ s.createElement(Be.Pane, null, /* @__PURE__ */ s.createElement(cC, { record: e }))
      }
    ] : [],
    {
      menuItem: { key: "files", icon: "file", content: "Files" },
      render: () => /* @__PURE__ */ s.createElement(Be.Pane, null, /* @__PURE__ */ s.createElement(dC, { record: e }))
    }
  ], c = () => {
    var u, d, p, m, f;
    return ((d = (u = e.serializer_data) == null ? void 0 : u.metadata) == null ? void 0 : d.title) || ((m = (p = e.transformed_data) == null ? void 0 : p.metadata) == null ? void 0 : m.title) || ((f = e.src_data) == null ? void 0 : f.title) || `Record ${e.id}`;
  };
  return /* @__PURE__ */ s.createElement(
    ue,
    {
      centered: !1,
      open: t,
      onClose: r,
      size: "large",
      closeIcon: !0
    },
    /* @__PURE__ */ s.createElement(ue.Header, null, /* @__PURE__ */ s.createElement("div", { className: oC.headerContainer }, /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(_, { name: "file alternate outline" }), c()), /* @__PURE__ */ s.createElement(sS, { status: e.status }))),
    /* @__PURE__ */ s.createElement(ue.Content, { scrolling: !0 }, /* @__PURE__ */ s.createElement(
      Be,
      {
        panes: l,
        activeIndex: a,
        onTabChange: o
      }
    )),
    /* @__PURE__ */ s.createElement(ue.Actions, null, /* @__PURE__ */ s.createElement(M, { onClick: r }, /* @__PURE__ */ s.createElement(_, { name: "close" }), "Close"))
  );
}, Me = {
  idContainer: h({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  }),
  codeElement: h({
    fontSize: "0.9em",
    color: "#666"
  }),
  titleContainer: h({
    maxInlineSize: "18.75rem"
  }),
  noTitle: h({
    color: "#999"
  }),
  errorIcon: h({
    marginInlineStart: "0.5rem !important",
    cursor: "help"
  })
}, hC = ({
  result: e,
  index: t
}) => {
  var y;
  const [r, n] = D(
    "idle"
  ), [a, i] = D(!1), [o, l] = D(0);
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
  }, u = e.errors && e.errors.length > 0, d = dS(e.status), p = () => u ? 2 : -1, m = (g) => g === "red" ? "times" : g === "green" || g === "blue" ? "check" : "question", f = [
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
          await SS(e.id), console.log(`Record ${e.id} is being processed.`);
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
  return /* @__PURE__ */ s.createElement(Et, { key: t }, /* @__PURE__ */ s.createElement(W, null, /* @__PURE__ */ s.createElement("div", { className: Me.idContainer }, /* @__PURE__ */ s.createElement("code", { className: Me.codeElement }, e.id.length > 20 ? `${e.id.substring(0, 20)}…` : e.id), /* @__PURE__ */ s.createElement(
    Te,
    {
      content: r === "copied" ? "Copied!" : "Copy ID",
      trigger: /* @__PURE__ */ s.createElement(
        M,
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
  ))), /* @__PURE__ */ s.createElement(W, null, /* @__PURE__ */ s.createElement("div", { className: Me.titleContainer }, ((y = e.src_data) == null ? void 0 : y.title) || /* @__PURE__ */ s.createElement("em", { className: Me.noTitle }, "No Title Available"))), /* @__PURE__ */ s.createElement(W, null, /* @__PURE__ */ s.createElement(z, { color: d, size: "small" }, /* @__PURE__ */ s.createElement(_, { name: m(d) }), Fe(e.status)), u && /* @__PURE__ */ s.createElement(
    Te,
    {
      content: `${e.errors.length} error${e.errors.length > 1 ? "s" : ""} found`,
      trigger: /* @__PURE__ */ s.createElement(
        _,
        {
          name: "exclamation triangle",
          color: "red",
          className: Me.errorIcon
        }
      ),
      position: "top center",
      size: "mini"
    }
  )), /* @__PURE__ */ s.createElement(W, { textAlign: "right" }, /* @__PURE__ */ s.createElement(
    de,
    {
      button: !0,
      className: "icon",
      floating: !0,
      labeled: !0,
      icon: "ellipsis horizontal",
      text: "Actions",
      size: "mini"
    },
    /* @__PURE__ */ s.createElement(de.Menu, null, f.map((g) => /* @__PURE__ */ s.createElement(
      de.Item,
      {
        key: g.key,
        icon: g.icon,
        text: g.text,
        disabled: g.disabled,
        onClick: g.onClick
      }
    )))
  ), /* @__PURE__ */ s.createElement(
    mC,
    {
      record: e,
      open: a,
      onClose: () => i(!1),
      initialTab: o
    }
  )));
}, gC = () => {
  const { taskId: e } = Js(), t = {
    "search.SearchBarRow": () => null,
    "search.ResultsList.container": sC,
    "search.ResultsList.item": hC
  };
  return /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Ee, { as: "h3" }, "Task Records"), /* @__PURE__ */ s.createElement(
    Xs,
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
}, yC = (e) => la(() => {
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
}, [e]), U = {
  wrapper: h({
    width: "100%"
  }),
  grid: h({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(13rem, 1fr))",
    gap: "0.9rem"
  }),
  card: h({
    padding: "1rem",
    borderRadius: "1.15rem",
    background: "rgba(255, 255, 255, 0.82)",
    border: "1px solid rgba(221, 228, 239, 0.95)",
    boxShadow: "0 10px 22px rgba(15, 23, 42, 0.05)"
  }),
  cardHeader: h({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "0.875rem",
    marginBlockEnd: "0.9rem"
  }),
  cardTitleGroup: h({
    display: "flex",
    alignItems: "center",
    gap: "0.75rem"
  }),
  cardIcon: h({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    inlineSize: "2.5rem",
    blockSize: "2.5rem",
    borderRadius: "0.9rem",
    fontSize: "1rem",
    "& > i.icon": {
      margin: "0",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: "1"
    }
  }),
  accentBlue: h({
    background: "#e8f1ff",
    color: "#295db3"
  }),
  accentRed: h({
    background: "#fff0f0",
    color: "#c73f4f"
  }),
  accentGreen: h({
    background: "#ebf8ee",
    color: "#218a45"
  }),
  cardTitle: h({
    color: "#1d3554",
    fontSize: "0.95rem",
    fontWeight: "700"
  }),
  cardLabel: h({
    color: "#6b7f98",
    fontSize: "0.8rem",
    marginBlockStart: "0.15rem"
  }),
  cardValue: h({
    color: "#12253d",
    fontSize: "2rem",
    lineHeight: "1",
    fontWeight: "700",
    letterSpacing: "-0.04em"
  }),
  progressLabel: h({
    marginBlockEnd: "0.45rem",
    color: "#5c718d",
    fontSize: "0.82rem",
    fontWeight: "600"
  }),
  progress: h({
    margin: "0 !important"
  })
}, bC = {
  blue: U.accentBlue,
  red: U.accentRed,
  green: U.accentGreen
}, vC = ({
  totalRecords: e = 0,
  validatedRecords: t = 0,
  errorRecords: r = 0,
  successRecords: n = 0,
  showWhenEmpty: a = !1,
  className: i = "",
  style: o = {}
}) => {
  const l = yC({
    totalRecords: e,
    validatedRecords: t,
    errorRecords: r,
    successRecords: n
  });
  return e === 0 && !a ? null : /* @__PURE__ */ s.createElement("div", { className: tr(U.wrapper, i), style: o }, /* @__PURE__ */ s.createElement("div", { className: U.grid }, l.map((c) => /* @__PURE__ */ s.createElement("div", { key: c.title, className: U.card }, /* @__PURE__ */ s.createElement("div", { className: U.cardHeader }, /* @__PURE__ */ s.createElement("div", { className: U.cardTitleGroup }, /* @__PURE__ */ s.createElement(
    "div",
    {
      className: tr(
        U.cardIcon,
        bC[c.color] || U.accentBlue
      )
    },
    /* @__PURE__ */ s.createElement(_, { name: c.icon, fitted: !0 })
  ), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement("div", { className: U.cardTitle }, c.title), /* @__PURE__ */ s.createElement("div", { className: U.cardLabel }, c.label))), /* @__PURE__ */ s.createElement("div", { className: U.cardValue }, c.value)), /* @__PURE__ */ s.createElement("div", { className: U.progressLabel }, c.progressLabel), /* @__PURE__ */ s.createElement(
    po,
    {
      percent: c.progress,
      color: c.color,
      size: "small",
      className: U.progress
    }
  )))));
}, ce = {
  hiddenInput: h({
    display: "none"
  }),
  dropZone: h({
    minBlockSize: "7.5rem",
    border: "2px dashed #d4d4d5 !important",
    backgroundColor: "transparent !important",
    cursor: "pointer",
    opacity: 1
  }),
  dropZoneActive: h({
    border: "2px dashed #2185d0 !important",
    backgroundColor: "#f8f9fa !important"
  }),
  dropZoneDisabled: h({
    cursor: "not-allowed",
    opacity: 0.6
  }),
  contentContainer: h({
    textAlign: "center",
    paddingBlock: "1.25rem",
    paddingInline: "1.25rem"
  }),
  textContainer: h({
    marginBlockStart: "0.625rem"
  }),
  smallText: h({
    fontSize: "0.75rem",
    color: "#666"
  }),
  selectedFilesText: h({
    fontSize: "0.75rem",
    color: "#2185d0",
    marginBlockStart: "0.5rem"
  })
}, EC = ({
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
}) => /* @__PURE__ */ s.createElement(pr, null, /* @__PURE__ */ s.createElement(
  "input",
  {
    ref: e,
    type: "file",
    multiple: !0,
    accept: t,
    onChange: l,
    className: ce.hiddenInput,
    disabled: a
  }
), /* @__PURE__ */ s.createElement(
  fe,
  {
    placeholder: !0,
    className: tr("file-drop-zone", ce.dropZone, {
      [ce.dropZoneActive]: i,
      [ce.dropZoneDisabled]: a
    }),
    onDragOver: c,
    onDragLeave: u,
    onDrop: d,
    onClick: p
  },
  /* @__PURE__ */ s.createElement("div", { className: ce.contentContainer }, /* @__PURE__ */ s.createElement(
    _,
    {
      name: "cloud upload",
      size: "huge",
      color: i ? "blue" : "grey"
    }
  ), /* @__PURE__ */ s.createElement("div", { className: ce.textContainer }, /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Drop files here or click to select")), /* @__PURE__ */ s.createElement("p", { className: ce.smallText }, "Max files: ", r, " | Max total: ", Mr(n)), o.length > 0 && /* @__PURE__ */ s.createElement("p", { className: ce.selectedFilesText }, /* @__PURE__ */ s.createElement("strong", null, o.length, " files selected •", " ", as(o), " total"))))
)), SC = ({
  onUploadError: e
} = {}) => {
  const [t, r] = D([]), [n] = D(!1), a = k(
    (c, u, d) => d && c.size === 0 ? "Empty files are not allowed" : u && !u.split(",").map((f) => f.trim()).some((f) => f.startsWith(".") ? c.name.toLowerCase().endsWith(f.toLowerCase()) : c.type.match(new RegExp(f.replace("*", ".*")))) ? `File type not accepted. Accepted types: ${u}` : null,
    []
  ), i = k(
    (c, u, d, p, m) => {
      const f = [], y = [];
      for (const g of c) {
        if (d && t.length + f.length >= d) {
          y.push(`Maximum ${d} files allowed`);
          break;
        }
        const v = a(g, u, m);
        if (v) {
          y.push(`${g.name}: ${v}`);
          continue;
        }
        if (t.some(
          (S) => S.file.name === g.name && S.file.size === g.size
        )) {
          y.push(`${g.name}: File already selected`);
          continue;
        }
        if (p && ns([
          ...t,
          ...f
        ]) + g.size > p) {
          y.push(
            `Total size would exceed maximum of ${(p / 1024 / 1024).toFixed(2)}MB`
          );
          break;
        }
        f.push({
          file: g,
          id: `${g.name}-${g.size}-${Date.now()}`
        });
      }
      return y.length > 0 && (e == null || e(y.join(", "))), r((g) => [...g, ...f]), f;
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
}, je = {
  headerContainer: h({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBlockEnd: "0.625rem"
  }),
  listItemContainer: h({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }),
  fileContentContainer: h({
    flex: "1 1 auto"
  }),
  fileInfoContainer: h({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  }),
  errorMessage: h({
    marginBlockStart: "0.3125rem"
  })
}, _C = ({
  uploadFiles: e,
  isUploading: t,
  handleRemoveFile: r,
  handleClearFiles: n
}) => /* @__PURE__ */ s.createElement(fe, null, /* @__PURE__ */ s.createElement("div", { className: je.headerContainer }, /* @__PURE__ */ s.createElement("strong", null, "Selected Files (", e.length, ") •", " ", as(e)), /* @__PURE__ */ s.createElement(
  M,
  {
    size: "mini",
    basic: !0,
    icon: "trash",
    content: "Clear All",
    onClick: n,
    disabled: t
  }
)), /* @__PURE__ */ s.createElement($, { divided: !0 }, e.map((a) => /* @__PURE__ */ s.createElement($.Item, { key: a.id }, /* @__PURE__ */ s.createElement($.Content, null, /* @__PURE__ */ s.createElement("div", { className: je.listItemContainer }, /* @__PURE__ */ s.createElement("div", { className: je.fileContentContainer }, /* @__PURE__ */ s.createElement("div", { className: je.fileInfoContainer }, /* @__PURE__ */ s.createElement(_, { name: "file" }), /* @__PURE__ */ s.createElement("span", null, a.file.name), /* @__PURE__ */ s.createElement(z, { size: "mini", basic: !0 }, Mr(a.file.size))), a.error && /* @__PURE__ */ s.createElement(
  K,
  {
    negative: !0,
    size: "mini",
    className: je.errorMessage
  },
  a.error
)), /* @__PURE__ */ s.createElement(
  M,
  {
    size: "mini",
    basic: !0,
    icon: "close",
    onClick: () => r(a.id),
    disabled: t
  }
))))))), eo = ({
  onChange: e,
  accept: t = ".csv,.json,.xlsx,.txt",
  maxFiles: r = 5,
  maxTotalSize: n = 50 * 1024 * 1024,
  // 50MB
  skipEmptyFiles: a = !0,
  disabled: i = !1,
  error: o
}) => {
  const l = oa(null), [c, u] = s.useState(!1), [d, p] = s.useState(
    null
  ), { uploadFiles: m, isUploading: f, addFiles: y, removeFile: g, clearFiles: v } = SC({
    onUploadComplete: (I) => {
      e(I);
    },
    onUploadError: (I) => {
      console.error("Upload error:", I), p(I);
    }
  }), b = k(
    (I) => {
      if (!I || I.length === 0)
        return;
      p(null);
      const Lt = Array.from(I), $e = y(
        Lt,
        t,
        r,
        n,
        a
      );
      if ($e.length > 0) {
        const to = [...m, ...$e].map((ro) => ro.file);
        e(to);
      }
    },
    [
      y,
      t,
      r,
      n,
      a,
      e,
      m
    ]
  ), S = k(
    (I) => {
      b(I.target.files), l.current && (l.current.value = "");
    },
    [b]
  ), A = k(
    (I) => {
      I.preventDefault(), i || u(!0);
    },
    [i]
  ), B = k((I) => {
    I.preventDefault(), u(!1);
  }, []), te = k(
    (I) => {
      I.preventDefault(), u(!1), !i && b(I.dataTransfer.files);
    },
    [i, b]
  ), O = k(() => {
    var I;
    i || (I = l.current) == null || I.click();
  }, [i]), he = k(
    (I) => {
      g(I), p(null);
      const Lt = m.filter(($e) => $e.id !== I).map(($e) => $e.file);
      e(Lt);
    },
    [g, m, e]
  ), tt = k(() => {
    v(), p(null), e([]);
  }, [v, e]);
  return /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(
    EC,
    {
      fileInputRef: l,
      accept: t,
      maxFiles: r,
      maxTotalSize: n,
      isDragOver: c,
      disabled: i,
      uploadFiles: m,
      onInputChange: S,
      onDragOver: A,
      onDragLeave: B,
      onDrop: te,
      onFileDialogOpen: O
    }
  ), (o || d) && /* @__PURE__ */ s.createElement(K, { negative: !0, size: "small" }, /* @__PURE__ */ s.createElement(_, { name: "exclamation triangle" }), o || d), m.length > 0 && /* @__PURE__ */ s.createElement(
    _C,
    {
      uploadFiles: m,
      isUploading: f,
      handleRemoveFile: he,
      handleClearFiles: tt
    }
  ));
}, Ht = {
  selectedFileInfo: h({
    marginBlockStart: "0.5rem",
    color: "#666"
  }),
  fieldLabel: h({
    marginBlockEnd: "0.5rem",
    fontSize: "0.875rem",
    fontWeight: "bold"
  }),
  actionsContainer: h({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "0.5rem"
  })
}, $C = () => {
  const { taskId: e } = Js(), [t, r] = D(null), [n, a] = D([]), [i, o] = D(!1), [l, c] = D(null), u = (f) => {
    var g;
    const y = ((g = f.target.files) == null ? void 0 : g[0]) || null;
    r(y || null);
  }, d = (f) => {
    a(f);
  }, p = () => {
    o(!1), r(null), a([]), c(null);
  }, m = async () => {
    if (!(!t && n.length === 0))
      try {
        await ES(
          e,
          t,
          n.length > 0 ? n : void 0,
          {
            onProgress: (f, y) => c({
              [f]: y
            }),
            onError: (f, y) => {
              console.error(`Error during ${y}:`, f);
            }
          }
        ), t && await cs(e, {
          autoExecute: !0,
          // Auto-execute import after validation
          onProgress: (f, y) => c({
            [f]: y
          }),
          onError: (f, y) => {
            console.error(`Error during ${y}:`, f);
          }
        }), o(!1), r(null), a([]);
      } catch (f) {
        console.error("Error uploading content:", f);
      }
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    Te,
    {
      content: "Upload metadata or supporting files for this task.",
      position: "left center",
      size: "small",
      trigger: /* @__PURE__ */ s.createElement(
        M,
        {
          icon: "upload",
          size: "tiny",
          content: "Upload Content",
          onClick: () => o(!0)
        }
      )
    }
  ), /* @__PURE__ */ s.createElement(
    ue,
    {
      open: i,
      onClose: p,
      size: "small",
      closeIcon: !0
    },
    /* @__PURE__ */ s.createElement(Ee, { icon: !0 }, /* @__PURE__ */ s.createElement(_, { name: "upload" }), "Upload Metadata & Files"),
    /* @__PURE__ */ s.createElement(ue.Content, null, /* @__PURE__ */ s.createElement(ve, { onSubmit: m }, /* @__PURE__ */ s.createElement(ve.Field, null, /* @__PURE__ */ s.createElement("label", { htmlFor: "fileInput" }, "Select Metadata File (Optional)"), /* @__PURE__ */ s.createElement(
      "input",
      {
        id: "fileInput",
        type: "file",
        onChange: u,
        accept: ".csv"
      }
    ), t && /* @__PURE__ */ s.createElement("div", { className: Ht.selectedFileInfo }, "Selected: ", t.name)), /* @__PURE__ */ s.createElement(ve.Field, null, /* @__PURE__ */ s.createElement("div", { className: Ht.fieldLabel }, "Additional Files (Optional)"), /* @__PURE__ */ s.createElement(
      eo,
      {
        value: n,
        onChange: d,
        accept: "*",
        maxTotalSize: 10 * 1024 * 1024 * 1024,
        maxFiles: 100
      }
    )))),
    /* @__PURE__ */ s.createElement(ue.Actions, null, /* @__PURE__ */ s.createElement("div", { className: Ht.actionsContainer }, l && /* @__PURE__ */ s.createElement(Ji, { progress: l }), /* @__PURE__ */ s.createElement(M, { onClick: p, color: "grey", disabled: !!l }, /* @__PURE__ */ s.createElement(_, { name: "cancel" }), "Cancel"), /* @__PURE__ */ s.createElement(
      M,
      {
        onClick: m,
        color: "blue",
        loading: !!l,
        disabled: !t && n.length === 0
      },
      /* @__PURE__ */ s.createElement(_, { name: "upload" }),
      "Upload"
    )))
  ));
}, L = {
  heroSection: h({
    borderStartStartRadius: "1.25rem",
    borderStartEndRadius: "1.25rem",
    padding: "1rem",
    border: "1px solid #d9e2f2",
    borderBlockEnd: "none",
    background: "#f7faff",
    boxShadow: "none",
    margin: 0,
    overflow: "hidden"
  }),
  heroLayout: h({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: "1.25rem"
  }),
  heroIntro: h({
    display: "flex",
    flex: "1 1 32rem",
    minInlineSize: "18rem",
    gap: "1rem",
    alignItems: "flex-start"
  }),
  headerContent: h({
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    minInlineSize: 0
  }),
  kicker: h({
    color: "#4a6894",
    fontSize: "0.75rem",
    letterSpacing: "widest",
    textTransform: "uppercase",
    fontWeight: "700"
  }),
  heroTitle: h({
    margin: "0 !important",
    color: "#14233c !important",
    fontSize: "clamp(1.85rem, 3vw, 2.5rem) !important",
    lineHeight: "1.1 !important"
  }),
  statusRow: h({
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    alignItems: "center"
  }),
  metaPill: h({
    margin: "0 !important",
    borderRadius: "999px !important",
    background: "rgba(255, 255, 255, 0.82) !important",
    color: "#24415f !important",
    border: "1px solid rgba(36, 65, 95, 0.12) !important",
    boxShadow: "none !important"
  }),
  heroDescription: h({
    margin: 0,
    maxInlineSize: "52rem",
    color: "#41556f",
    fontSize: "1rem",
    lineHeight: "1.65"
  }),
  optionPills: h({
    display: "flex",
    flexWrap: "wrap",
    gap: "0.6rem"
  }),
  optionPillActive: h({
    margin: "0 !important",
    borderRadius: "999px !important",
    background: "#edf7ee !important",
    color: "#266338 !important",
    border: "1px solid #cfe6d5 !important",
    boxShadow: "none !important"
  }),
  optionPillInactive: h({
    margin: "0 !important",
    borderRadius: "999px !important",
    background: "#fff1f1 !important",
    color: "#a13c47 !important",
    border: "1px solid #f1cacf !important",
    boxShadow: "none !important"
  }),
  actionsContainer: h({
    display: "flex",
    flexDirection: "column",
    gap: "0.875rem",
    flex: "0 1 17rem",
    minInlineSize: "15rem",
    padding: "1rem",
    borderRadius: "1.25rem",
    background: "rgba(255, 255, 255, 0.72)",
    border: "1px solid rgba(74, 104, 148, 0.28)"
  }),
  actionsHeader: h({
    color: "#4a6894",
    fontSize: "0.75rem",
    letterSpacing: "widest",
    textTransform: "uppercase",
    fontWeight: "700"
  }),
  actionButtons: h({
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    "& > *": {
      width: "100%"
    }
  }),
  statusCardsSection: h({
    marginBlockStart: "1.25rem"
  })
}, xC = (e, t) => {
  switch (e) {
    case "doi_minting":
      return `DOI minting is ${t ? "active" : "not active"}.`;
    case "publishing":
      return `Publishing is ${t ? "active" : "not active"}.`;
    default:
      return `${Dt(e)} is ${t ? "active" : "not active"}.`;
  }
}, CC = ({
  task: e,
  totalRecords: t,
  validatedRecords: r,
  errorRecords: n,
  successRecords: a,
  isRefreshing: i,
  isRunningTask: o,
  onRefresh: l,
  onRunTask: c
}) => {
  const u = Object.entries(e.options || {});
  return /* @__PURE__ */ s.createElement("div", { className: L.heroSection }, /* @__PURE__ */ s.createElement("div", { className: L.heroLayout }, /* @__PURE__ */ s.createElement("div", { className: L.heroIntro }, /* @__PURE__ */ s.createElement("div", { className: L.headerContent }, /* @__PURE__ */ s.createElement("div", { className: L.kicker }, "Importer task"), /* @__PURE__ */ s.createElement(Ee, { as: "h1", className: L.heroTitle }, e.title), /* @__PURE__ */ s.createElement("div", { className: L.statusRow }, e.status && /* @__PURE__ */ s.createElement(ts, { size: "large", status: e.status }, Fe(e.status)), /* @__PURE__ */ s.createElement(z, { className: L.metaPill }, /* @__PURE__ */ s.createElement(_, { name: "database" }), t, " records")), e.description && /* @__PURE__ */ s.createElement("p", { className: L.heroDescription }, e.description), u.length > 0 && /* @__PURE__ */ s.createElement("div", { className: L.optionPills }, u.map(([d, p]) => /* @__PURE__ */ s.createElement(
    Te,
    {
      key: d,
      content: xC(d, p),
      position: "left center",
      size: "small",
      trigger: /* @__PURE__ */ s.createElement(
        z,
        {
          className: p ? L.optionPillActive : L.optionPillInactive
        },
        /* @__PURE__ */ s.createElement(_, { name: p ? "check circle" : "ban" }),
        Dt(d)
      )
    }
  ))))), /* @__PURE__ */ s.createElement("div", { className: L.actionsContainer }, /* @__PURE__ */ s.createElement("div", { className: L.actionsHeader }, "Actions"), /* @__PURE__ */ s.createElement("div", { className: L.actionButtons }, /* @__PURE__ */ s.createElement(
    Te,
    {
      content: "Fetch the latest task status and record counts.",
      position: "left center",
      size: "small",
      trigger: /* @__PURE__ */ s.createElement(
        M,
        {
          size: "small",
          color: "blue",
          icon: "refresh",
          content: "Refresh",
          onClick: l,
          loading: i
        }
      )
    }
  ), /* @__PURE__ */ s.createElement($C, null), /* @__PURE__ */ s.createElement(
    Te,
    {
      content: "Start the import workflow for this task.",
      position: "left center",
      size: "small",
      trigger: /* @__PURE__ */ s.createElement(
        M,
        {
          size: "small",
          color: "green",
          icon: "play",
          onClick: c,
          loading: o,
          content: "Run Task"
        }
      )
    }
  )))), /* @__PURE__ */ s.createElement(
    vC,
    {
      totalRecords: t,
      validatedRecords: r,
      errorRecords: n,
      successRecords: a,
      showWhenEmpty: !0,
      className: L.statusCardsSection
    }
  ));
}, wC = ({ taskId: e }) => {
  var m, f, y, g, v, b;
  const [t, r] = D(null), { getStatus: n, isGettingStatus: a, runBulkImport: i, isBulkImporting: o, error: l } = ds(e, { onStatusChangeSuccess: r });
  if (Ae(() => {
    n();
  }, [n]), a || o)
    return /* @__PURE__ */ s.createElement(es, null);
  if (!t)
    return /* @__PURE__ */ s.createElement(K, { warning: !0, icon: !0 }, /* @__PURE__ */ s.createElement(_, { name: "search" }), /* @__PURE__ */ s.createElement(K.Content, null, /* @__PURE__ */ s.createElement(K.Header, null, "Task Not Found"), "The requested task could not be found."));
  const c = ((m = t.records_status) == null ? void 0 : m.total_records) || 0, u = ((f = t.records_status) == null ? void 0 : f.validated) || 0, d = ((y = t.records_status) == null ? void 0 : y.success) || 0, p = (((g = t.records_status) == null ? void 0 : g["import failed"]) || 0) + (((v = t.records_status) == null ? void 0 : v["validation failed"]) || 0) + (((b = t.records_status) == null ? void 0 : b["serializer validation failed"]) || 0);
  return /* @__PURE__ */ s.createElement(iC, { taskId: e }, /* @__PURE__ */ s.createElement(fo, { fluid: !0, className: sa.page }, l && /* @__PURE__ */ s.createElement(K, { negative: !0, icon: !0 }, /* @__PURE__ */ s.createElement(_, { name: "exclamation triangle" }), /* @__PURE__ */ s.createElement(K.Content, null, /* @__PURE__ */ s.createElement(K.Header, null, "Error"), (l == null ? void 0 : l.message) || "An unknown error occurred")), /* @__PURE__ */ s.createElement(
    CC,
    {
      task: t,
      totalRecords: c,
      validatedRecords: u,
      errorRecords: p,
      successRecords: d,
      isRefreshing: a,
      isRunningTask: o,
      onRefresh: () => n(),
      onRunTask: async () => {
        await i(), await n();
      }
    }
  ), /* @__PURE__ */ s.createElement("div", { className: sa.detailsGrid }, /* @__PURE__ */ s.createElement(nC, { task: t }))), /* @__PURE__ */ s.createElement(gC, null));
}, MC = {
  Search: Xs,
  TaskDetails: wC
}, jC = {
  CREATED: "created",
  VALIDATING: "validating",
  SERIALIZER_VALIDATION_FAILED: "serializer validation failed",
  VALIDATION_FAILED: "validation failed",
  VALIDATED: "validated",
  IMPORT_FAILED: "import failed",
  IMPORTED: "success"
}, QC = {
  CREATED: "created",
  VALIDATING: "validating",
  VALIDATION_FAILED: "validated with failures",
  VALIDATED: "validated",
  IMPORTING: "importing",
  IMPORT_FAILED: "imported with failures",
  SUCCESS: "success",
  DAMAGED: "damaged"
}, VC = {
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
  MC as BulkImporter,
  eo as FileUploader,
  Kx as ImportModal,
  QC as ImporterTaskStates,
  jC as InvenioImporterRecordStatus,
  VC as OrchestrationStepsEnum,
  Ji as ProgressLoading,
  Xs as Search,
  es as Spinner,
  sS as StatusIcon,
  ts as StatusLabel,
  nC as TaskConfiguration,
  wC as TaskDetails,
  CC as TaskHeader,
  hC as TaskRecordItem,
  Fe as capitalizeFirstLetter,
  tr as cn,
  UC as createSearchApi,
  zC as createSearchApiConfig,
  Ge as formatDate,
  Mr as formatFileSize,
  Dt as formatOptionLabel,
  uS as getCsrfToken,
  dS as getStatusColor,
  ns as getTotalSize,
  as as getTotalSizeFormatted,
  SC as useFileUploader
};
