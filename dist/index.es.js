import s, { Component as D, useContext as T, useEffect as De, useCallback as A, Fragment as Ht, useState as k, createContext as ms, useRef as ys } from "react";
import v, { OverridableContext as vs } from "react-overridable";
import Ve from "axios";
import Se from "qs";
import { connect as O, Provider as Es } from "react-redux";
import { Label as se, Icon as $, Input as Rn, Button as N, List as _, Checkbox as Pn, Card as P, Segment as G, Header as fe, Menu as Re, Pagination as bs, Item as me, Loader as Dn, Dropdown as le, Image as Ss, TableRow as it, TableCell as Y, Table as F, TableHeader as kn, TableHeaderCell as W, TableBody as Ln, Form as Ee, Modal as oe, ModalHeader as $s, ModalContent as _s, Grid as z, Statistic as $t, Progress as xs, Message as U, Tab as Te, Popup as _r, Container as Cs } from "semantic-ui-react";
import { combineReducers as ws, createStore as Fs, applyMiddleware as Ts } from "redux";
import Is from "redux-thunk";
import As from "lodash";
import { TextField as Os, SelectField as _t, TextAreaField as Rs, BaseForm as Ps } from "react-invenio-forms";
import { useFormikContext as Ds } from "formik";
var Me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function R(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ks = Object.prototype;
function Ls(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ks;
  return e === r;
}
var st = Ls;
function Us(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Un = Us, Ns = Un, Bs = Ns(Object.keys, Object), zs = Bs, Ms = st, Qs = zs, js = Object.prototype, qs = js.hasOwnProperty;
function Gs(e) {
  if (!Ms(e))
    return Qs(e);
  var t = [];
  for (var r in Object(e))
    qs.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Nn = Gs, Vs = typeof Me == "object" && Me && Me.Object === Object && Me, Bn = Vs, Hs = Bn, Ks = typeof self == "object" && self && self.Object === Object && self, Ys = Hs || Ks || Function("return this")(), X = Ys, Ws = X, Zs = Ws.Symbol, $e = Zs, xr = $e, zn = Object.prototype, Js = zn.hasOwnProperty, Xs = zn.toString, Ie = xr ? xr.toStringTag : void 0;
function eo(e) {
  var t = Js.call(e, Ie), r = e[Ie];
  try {
    e[Ie] = void 0;
    var n = !0;
  } catch {
  }
  var a = Xs.call(e);
  return n && (t ? e[Ie] = r : delete e[Ie]), a;
}
var to = eo, ro = Object.prototype, no = ro.toString;
function ao(e) {
  return no.call(e);
}
var io = ao, Cr = $e, so = to, oo = io, lo = "[object Null]", uo = "[object Undefined]", wr = Cr ? Cr.toStringTag : void 0;
function co(e) {
  return e == null ? e === void 0 ? uo : lo : wr && wr in Object(e) ? so(e) : oo(e);
}
var ce = co;
function po(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ie = po;
const fo = /* @__PURE__ */ R(ie);
var ho = ce, go = ie, mo = "[object AsyncFunction]", yo = "[object Function]", vo = "[object GeneratorFunction]", Eo = "[object Proxy]";
function bo(e) {
  if (!go(e))
    return !1;
  var t = ho(e);
  return t == yo || t == vo || t == mo || t == Eo;
}
var Mn = bo, So = X, $o = So["__core-js_shared__"], _o = $o, xt = _o, Fr = function() {
  var e = /[^.]+$/.exec(xt && xt.keys && xt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function xo(e) {
  return !!Fr && Fr in e;
}
var Co = xo, wo = Function.prototype, Fo = wo.toString;
function To(e) {
  if (e != null) {
    try {
      return Fo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Qn = To, Io = Mn, Ao = Co, Oo = ie, Ro = Qn, Po = /[\\^$.*+?()[\]{}|]/g, Do = /^\[object .+?Constructor\]$/, ko = Function.prototype, Lo = Object.prototype, Uo = ko.toString, No = Lo.hasOwnProperty, Bo = RegExp(
  "^" + Uo.call(No).replace(Po, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function zo(e) {
  if (!Oo(e) || Ao(e))
    return !1;
  var t = Io(e) ? Bo : Do;
  return t.test(Ro(e));
}
var Mo = zo;
function Qo(e, t) {
  return e == null ? void 0 : e[t];
}
var jo = Qo, qo = Mo, Go = jo;
function Vo(e, t) {
  var r = Go(e, t);
  return qo(r) ? r : void 0;
}
var he = Vo, Ho = he, Ko = X, Yo = Ho(Ko, "DataView"), Wo = Yo, Zo = he, Jo = X, Xo = Zo(Jo, "Map"), Kt = Xo, el = he, tl = X, rl = el(tl, "Promise"), nl = rl, al = he, il = X, sl = al(il, "Set"), ol = sl, ll = he, ul = X, cl = ll(ul, "WeakMap"), dl = cl, It = Wo, At = Kt, Ot = nl, Rt = ol, Pt = dl, jn = ce, _e = Qn, Tr = "[object Map]", pl = "[object Object]", Ir = "[object Promise]", Ar = "[object Set]", Or = "[object WeakMap]", Rr = "[object DataView]", fl = _e(It), hl = _e(At), gl = _e(Ot), ml = _e(Rt), yl = _e(Pt), de = jn;
(It && de(new It(new ArrayBuffer(1))) != Rr || At && de(new At()) != Tr || Ot && de(Ot.resolve()) != Ir || Rt && de(new Rt()) != Ar || Pt && de(new Pt()) != Or) && (de = function(e) {
  var t = jn(e), r = t == pl ? e.constructor : void 0, n = r ? _e(r) : "";
  if (n)
    switch (n) {
      case fl:
        return Rr;
      case hl:
        return Tr;
      case gl:
        return Ir;
      case ml:
        return Ar;
      case yl:
        return Or;
    }
  return t;
});
var ke = de;
function vl(e) {
  return e != null && typeof e == "object";
}
var ee = vl, El = ce, bl = ee, Sl = "[object Arguments]";
function $l(e) {
  return bl(e) && El(e) == Sl;
}
var _l = $l, Pr = _l, xl = ee, qn = Object.prototype, Cl = qn.hasOwnProperty, wl = qn.propertyIsEnumerable, Fl = Pr(function() {
  return arguments;
}()) ? Pr : function(e) {
  return xl(e) && Cl.call(e, "callee") && !wl.call(e, "callee");
}, ot = Fl, Tl = Array.isArray, Q = Tl;
const Gn = /* @__PURE__ */ R(Q);
var Il = 9007199254740991;
function Al(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Il;
}
var Yt = Al, Ol = Mn, Rl = Yt;
function Pl(e) {
  return e != null && Rl(e.length) && !Ol(e);
}
var lt = Pl, Ye = { exports: {} };
function Dl() {
  return !1;
}
var kl = Dl;
Ye.exports;
(function(e, t) {
  var r = X, n = kl, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, l = o ? r.Buffer : void 0, u = l ? l.isBuffer : void 0, c = u || n;
  e.exports = c;
})(Ye, Ye.exports);
var ut = Ye.exports, Ll = ce, Ul = Yt, Nl = ee, Bl = "[object Arguments]", zl = "[object Array]", Ml = "[object Boolean]", Ql = "[object Date]", jl = "[object Error]", ql = "[object Function]", Gl = "[object Map]", Vl = "[object Number]", Hl = "[object Object]", Kl = "[object RegExp]", Yl = "[object Set]", Wl = "[object String]", Zl = "[object WeakMap]", Jl = "[object ArrayBuffer]", Xl = "[object DataView]", eu = "[object Float32Array]", tu = "[object Float64Array]", ru = "[object Int8Array]", nu = "[object Int16Array]", au = "[object Int32Array]", iu = "[object Uint8Array]", su = "[object Uint8ClampedArray]", ou = "[object Uint16Array]", lu = "[object Uint32Array]", w = {};
w[eu] = w[tu] = w[ru] = w[nu] = w[au] = w[iu] = w[su] = w[ou] = w[lu] = !0;
w[Bl] = w[zl] = w[Jl] = w[Ml] = w[Xl] = w[Ql] = w[jl] = w[ql] = w[Gl] = w[Vl] = w[Hl] = w[Kl] = w[Yl] = w[Wl] = w[Zl] = !1;
function uu(e) {
  return Nl(e) && Ul(e.length) && !!w[Ll(e)];
}
var cu = uu;
function du(e) {
  return function(t) {
    return e(t);
  };
}
var Wt = du, We = { exports: {} };
We.exports;
(function(e, t) {
  var r = Bn, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, l = function() {
    try {
      var u = a && a.require && a.require("util").types;
      return u || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(We, We.exports);
var Zt = We.exports, pu = cu, fu = Wt, Dr = Zt, kr = Dr && Dr.isTypedArray, hu = kr ? fu(kr) : pu, Jt = hu, gu = Nn, mu = ke, yu = ot, vu = Q, Eu = lt, bu = ut, Su = st, $u = Jt, _u = "[object Map]", xu = "[object Set]", Cu = Object.prototype, wu = Cu.hasOwnProperty;
function Fu(e) {
  if (e == null)
    return !0;
  if (Eu(e) && (vu(e) || typeof e == "string" || typeof e.splice == "function" || bu(e) || $u(e) || yu(e)))
    return !e.length;
  var t = mu(e);
  if (t == _u || t == xu)
    return !e.size;
  if (Su(e))
    return !gu(e).length;
  for (var r in e)
    if (wu.call(e, r))
      return !1;
  return !0;
}
var Tu = Fu;
const te = /* @__PURE__ */ R(Tu);
var Iu = ce, Au = ee, Ou = "[object Symbol]";
function Ru(e) {
  return typeof e == "symbol" || Au(e) && Iu(e) == Ou;
}
var Xt = Ru, Pu = Q, Du = Xt, ku = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Lu = /^\w*$/;
function Uu(e, t) {
  if (Pu(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Du(e) ? !0 : Lu.test(e) || !ku.test(e) || t != null && e in Object(t);
}
var er = Uu, Nu = he, Bu = Nu(Object, "create"), ct = Bu, Lr = ct;
function zu() {
  this.__data__ = Lr ? Lr(null) : {}, this.size = 0;
}
var Mu = zu;
function Qu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ju = Qu, qu = ct, Gu = "__lodash_hash_undefined__", Vu = Object.prototype, Hu = Vu.hasOwnProperty;
function Ku(e) {
  var t = this.__data__;
  if (qu) {
    var r = t[e];
    return r === Gu ? void 0 : r;
  }
  return Hu.call(t, e) ? t[e] : void 0;
}
var Yu = Ku, Wu = ct, Zu = Object.prototype, Ju = Zu.hasOwnProperty;
function Xu(e) {
  var t = this.__data__;
  return Wu ? t[e] !== void 0 : Ju.call(t, e);
}
var ec = Xu, tc = ct, rc = "__lodash_hash_undefined__";
function nc(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = tc && t === void 0 ? rc : t, this;
}
var ac = nc, ic = Mu, sc = ju, oc = Yu, lc = ec, uc = ac;
function xe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
xe.prototype.clear = ic;
xe.prototype.delete = sc;
xe.prototype.get = oc;
xe.prototype.has = lc;
xe.prototype.set = uc;
var cc = xe;
function dc() {
  this.__data__ = [], this.size = 0;
}
var pc = dc;
function fc(e, t) {
  return e === t || e !== e && t !== t;
}
var dt = fc, hc = dt;
function gc(e, t) {
  for (var r = e.length; r--; )
    if (hc(e[r][0], t))
      return r;
  return -1;
}
var pt = gc, mc = pt, yc = Array.prototype, vc = yc.splice;
function Ec(e) {
  var t = this.__data__, r = mc(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : vc.call(t, r, 1), --this.size, !0;
}
var bc = Ec, Sc = pt;
function $c(e) {
  var t = this.__data__, r = Sc(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var _c = $c, xc = pt;
function Cc(e) {
  return xc(this.__data__, e) > -1;
}
var wc = Cc, Fc = pt;
function Tc(e, t) {
  var r = this.__data__, n = Fc(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Ic = Tc, Ac = pc, Oc = bc, Rc = _c, Pc = wc, Dc = Ic;
function Ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ce.prototype.clear = Ac;
Ce.prototype.delete = Oc;
Ce.prototype.get = Rc;
Ce.prototype.has = Pc;
Ce.prototype.set = Dc;
var ft = Ce, Ur = cc, kc = ft, Lc = Kt;
function Uc() {
  this.size = 0, this.__data__ = {
    hash: new Ur(),
    map: new (Lc || kc)(),
    string: new Ur()
  };
}
var Nc = Uc;
function Bc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var zc = Bc, Mc = zc;
function Qc(e, t) {
  var r = e.__data__;
  return Mc(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ht = Qc, jc = ht;
function qc(e) {
  var t = jc(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Gc = qc, Vc = ht;
function Hc(e) {
  return Vc(this, e).get(e);
}
var Kc = Hc, Yc = ht;
function Wc(e) {
  return Yc(this, e).has(e);
}
var Zc = Wc, Jc = ht;
function Xc(e, t) {
  var r = Jc(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var ed = Xc, td = Nc, rd = Gc, nd = Kc, ad = Zc, id = ed;
function we(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
we.prototype.clear = td;
we.prototype.delete = rd;
we.prototype.get = nd;
we.prototype.has = ad;
we.prototype.set = id;
var tr = we, Vn = tr, sd = "Expected a function";
function rr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(sd);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (rr.Cache || Vn)(), r;
}
rr.Cache = Vn;
var od = rr, ld = od, ud = 500;
function cd(e) {
  var t = ld(e, function(n) {
    return r.size === ud && r.clear(), n;
  }), r = t.cache;
  return t;
}
var dd = cd, pd = dd, fd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, hd = /\\(\\)?/g, gd = pd(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(fd, function(r, n, a, i) {
    t.push(a ? i.replace(hd, "$1") : n || r);
  }), t;
}), md = gd;
function yd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var vd = yd, Nr = $e, Ed = vd, bd = Q, Sd = Xt, $d = 1 / 0, Br = Nr ? Nr.prototype : void 0, zr = Br ? Br.toString : void 0;
function Hn(e) {
  if (typeof e == "string")
    return e;
  if (bd(e))
    return Ed(e, Hn) + "";
  if (Sd(e))
    return zr ? zr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -$d ? "-0" : t;
}
var _d = Hn, xd = _d;
function Cd(e) {
  return e == null ? "" : xd(e);
}
var Le = Cd, wd = Q, Fd = er, Td = md, Id = Le;
function Ad(e, t) {
  return wd(e) ? e : Fd(e, t) ? [e] : Td(Id(e));
}
var gt = Ad, Od = Xt, Rd = 1 / 0;
function Pd(e) {
  if (typeof e == "string" || Od(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Rd ? "-0" : t;
}
var Ue = Pd, Dd = gt, kd = Ue;
function Ld(e, t) {
  t = Dd(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[kd(t[r++])];
  return r && r == n ? e : void 0;
}
var nr = Ld, Ud = nr;
function Nd(e, t, r) {
  var n = e == null ? void 0 : Ud(e, t);
  return n === void 0 ? r : n;
}
var Kn = Nd;
const Ae = /* @__PURE__ */ R(Kn);
function Bd(e, t) {
  return e != null && t in Object(e);
}
var zd = Bd, Md = 9007199254740991, Qd = /^(?:0|[1-9]\d*)$/;
function jd(e, t) {
  var r = typeof e;
  return t = t ?? Md, !!t && (r == "number" || r != "symbol" && Qd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var mt = jd, qd = gt, Gd = ot, Vd = Q, Hd = mt, Kd = Yt, Yd = Ue;
function Wd(e, t, r) {
  t = qd(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = Yd(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && Kd(a) && Hd(o, a) && (Vd(e) || Gd(e)));
}
var Yn = Wd, Zd = zd, Jd = Yn;
function Xd(e, t) {
  return e != null && Jd(e, t, Zd);
}
var ar = Xd;
const ep = /* @__PURE__ */ R(ar);
var tp = he, rp = function() {
  try {
    var e = tp(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Wn = rp, Mr = Wn;
function np(e, t, r) {
  t == "__proto__" && Mr ? Mr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var yt = np, ap = yt, ip = dt, sp = Object.prototype, op = sp.hasOwnProperty;
function lp(e, t, r) {
  var n = e[t];
  (!(op.call(e, t) && ip(n, r)) || r === void 0 && !(t in e)) && ap(e, t, r);
}
var ir = lp, up = ir, cp = yt;
function dp(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var i = -1, o = t.length; ++i < o; ) {
    var l = t[i], u = n ? n(r[l], e[l], l, r, e) : void 0;
    u === void 0 && (u = e[l]), a ? cp(r, l, u) : up(r, l, u);
  }
  return r;
}
var Ne = dp;
function pp(e) {
  return e;
}
var sr = pp;
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
var hp = fp, gp = hp, Qr = Math.max;
function mp(e, t, r) {
  return t = Qr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = Qr(n.length - t, 0), o = Array(i); ++a < i; )
      o[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(o), gp(e, this, l);
  };
}
var Zn = mp;
function yp(e) {
  return function() {
    return e;
  };
}
var vp = yp, Ep = vp, jr = Wn, bp = sr, Sp = jr ? function(e, t) {
  return jr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ep(t),
    writable: !0
  });
} : bp, $p = Sp, _p = 800, xp = 16, Cp = Date.now;
function wp(e) {
  var t = 0, r = 0;
  return function() {
    var n = Cp(), a = xp - (n - r);
    if (r = n, a > 0) {
      if (++t >= _p)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Fp = wp, Tp = $p, Ip = Fp, Ap = Ip(Tp), Jn = Ap, Op = sr, Rp = Zn, Pp = Jn;
function Dp(e, t) {
  return Pp(Rp(e, t, Op), e + "");
}
var kp = Dp, Lp = dt, Up = lt, Np = mt, Bp = ie;
function zp(e, t, r) {
  if (!Bp(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Up(r) && Np(t, r.length) : n == "string" && t in r) ? Lp(r[t], e) : !1;
}
var Mp = zp, Qp = kp, jp = Mp;
function qp(e) {
  return Qp(function(t, r) {
    var n = -1, a = r.length, i = a > 1 ? r[a - 1] : void 0, o = a > 2 ? r[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0, o && jp(r[0], r[1], o) && (i = a < 3 ? void 0 : i, a = 1), t = Object(t); ++n < a; ) {
      var l = r[n];
      l && e(t, l, n, i);
    }
    return t;
  });
}
var Gp = qp;
function Vp(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Hp = Vp, Kp = Hp, Yp = ot, Wp = Q, Zp = ut, Jp = mt, Xp = Jt, ef = Object.prototype, tf = ef.hasOwnProperty;
function rf(e, t) {
  var r = Wp(e), n = !r && Yp(e), a = !r && !n && Zp(e), i = !r && !n && !a && Xp(e), o = r || n || a || i, l = o ? Kp(e.length, String) : [], u = l.length;
  for (var c in e)
    (t || tf.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Jp(c, u))) && l.push(c);
  return l;
}
var Xn = rf;
function nf(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var af = nf, sf = ie, of = st, lf = af, uf = Object.prototype, cf = uf.hasOwnProperty;
function df(e) {
  if (!sf(e))
    return lf(e);
  var t = of(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !cf.call(e, n)) || r.push(n);
  return r;
}
var pf = df, ff = Xn, hf = pf, gf = lt;
function mf(e) {
  return gf(e) ? ff(e, !0) : hf(e);
}
var vt = mf, yf = Ne, vf = Gp, Ef = vt, bf = vf(function(e, t) {
  yf(t, Ef(t), e);
}), Sf = bf, $f = Sf;
const Ze = /* @__PURE__ */ R($f);
function _f(e) {
  return e && e.length ? e[0] : void 0;
}
var xf = _f;
const Cf = /* @__PURE__ */ R(xf);
var wf = ir, Ff = gt, Tf = mt, qr = ie, If = Ue;
function Af(e, t, r, n) {
  if (!qr(e))
    return e;
  t = Ff(t, e);
  for (var a = -1, i = t.length, o = i - 1, l = e; l != null && ++a < i; ) {
    var u = If(t[a]), c = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != o) {
      var d = l[u];
      c = n ? n(d, u, l) : void 0, c === void 0 && (c = qr(d) ? d : Tf(t[a + 1]) ? [] : {});
    }
    wf(l, u, c), l = l[u];
  }
  return e;
}
var Of = Af, Rf = nr, Pf = Of, Df = gt;
function kf(e, t, r) {
  for (var n = -1, a = t.length, i = {}; ++n < a; ) {
    var o = t[n], l = Rf(e, o);
    r(l, o) && Pf(i, Df(o, e), l);
  }
  return i;
}
var Lf = kf, Uf = Lf, Nf = ar;
function Bf(e, t) {
  return Uf(e, t, function(r, n) {
    return Nf(e, n);
  });
}
var zf = Bf;
function Mf(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var or = Mf, Gr = $e, Qf = ot, jf = Q, Vr = Gr ? Gr.isConcatSpreadable : void 0;
function qf(e) {
  return jf(e) || Qf(e) || !!(Vr && e && e[Vr]);
}
var Gf = qf, Vf = or, Hf = Gf;
function ea(e, t, r, n, a) {
  var i = -1, o = e.length;
  for (r || (r = Hf), a || (a = []); ++i < o; ) {
    var l = e[i];
    t > 0 && r(l) ? t > 1 ? ea(l, t - 1, r, n, a) : Vf(a, l) : n || (a[a.length] = l);
  }
  return a;
}
var Kf = ea, Yf = Kf;
function Wf(e) {
  var t = e == null ? 0 : e.length;
  return t ? Yf(e, 1) : [];
}
var Zf = Wf, Jf = Zf, Xf = Zn, eh = Jn;
function th(e) {
  return eh(Xf(e, void 0, Jf), e + "");
}
var rh = th, nh = zf, ah = rh, ih = ah(function(e, t) {
  return e == null ? {} : nh(e, t);
}), sh = ih;
const oh = /* @__PURE__ */ R(sh);
var lh = ft;
function uh() {
  this.__data__ = new lh(), this.size = 0;
}
var ch = uh;
function dh(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var ph = dh;
function fh(e) {
  return this.__data__.get(e);
}
var hh = fh;
function gh(e) {
  return this.__data__.has(e);
}
var mh = gh, yh = ft, vh = Kt, Eh = tr, bh = 200;
function Sh(e, t) {
  var r = this.__data__;
  if (r instanceof yh) {
    var n = r.__data__;
    if (!vh || n.length < bh - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Eh(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var $h = Sh, _h = ft, xh = ch, Ch = ph, wh = hh, Fh = mh, Th = $h;
function Fe(e) {
  var t = this.__data__ = new _h(e);
  this.size = t.size;
}
Fe.prototype.clear = xh;
Fe.prototype.delete = Ch;
Fe.prototype.get = wh;
Fe.prototype.has = Fh;
Fe.prototype.set = Th;
var lr = Fe;
function Ih(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Ah = Ih, Oh = Xn, Rh = Nn, Ph = lt;
function Dh(e) {
  return Ph(e) ? Oh(e) : Rh(e);
}
var Be = Dh, kh = Ne, Lh = Be;
function Uh(e, t) {
  return e && kh(t, Lh(t), e);
}
var Nh = Uh, Bh = Ne, zh = vt;
function Mh(e, t) {
  return e && Bh(t, zh(t), e);
}
var Qh = Mh, Je = { exports: {} };
Je.exports;
(function(e, t) {
  var r = X, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i ? r.Buffer : void 0, l = o ? o.allocUnsafe : void 0;
  function u(c, d) {
    if (d)
      return c.slice();
    var p = c.length, f = l ? l(p) : new c.constructor(p);
    return c.copy(f), f;
  }
  e.exports = u;
})(Je, Je.exports);
var jh = Je.exports;
function qh(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Gh = qh;
function Vh(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
var Hh = Vh;
function Kh() {
  return [];
}
var ta = Kh, Yh = Hh, Wh = ta, Zh = Object.prototype, Jh = Zh.propertyIsEnumerable, Hr = Object.getOwnPropertySymbols, Xh = Hr ? function(e) {
  return e == null ? [] : (e = Object(e), Yh(Hr(e), function(t) {
    return Jh.call(e, t);
  }));
} : Wh, ur = Xh, eg = Ne, tg = ur;
function rg(e, t) {
  return eg(e, tg(e), t);
}
var ng = rg, ag = Un, ig = ag(Object.getPrototypeOf, Object), ra = ig, sg = or, og = ra, lg = ur, ug = ta, cg = Object.getOwnPropertySymbols, dg = cg ? function(e) {
  for (var t = []; e; )
    sg(t, lg(e)), e = og(e);
  return t;
} : ug, na = dg, pg = Ne, fg = na;
function hg(e, t) {
  return pg(e, fg(e), t);
}
var gg = hg, mg = or, yg = Q;
function vg(e, t, r) {
  var n = t(e);
  return yg(e) ? n : mg(n, r(e));
}
var aa = vg, Eg = aa, bg = ur, Sg = Be;
function $g(e) {
  return Eg(e, Sg, bg);
}
var ia = $g, _g = aa, xg = na, Cg = vt;
function wg(e) {
  return _g(e, Cg, xg);
}
var Fg = wg, Tg = Object.prototype, Ig = Tg.hasOwnProperty;
function Ag(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Ig.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Og = Ag, Rg = X, Pg = Rg.Uint8Array, sa = Pg, Kr = sa;
function Dg(e) {
  var t = new e.constructor(e.byteLength);
  return new Kr(t).set(new Kr(e)), t;
}
var cr = Dg, kg = cr;
function Lg(e, t) {
  var r = t ? kg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Ug = Lg, Ng = /\w*$/;
function Bg(e) {
  var t = new e.constructor(e.source, Ng.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var zg = Bg, Yr = $e, Wr = Yr ? Yr.prototype : void 0, Zr = Wr ? Wr.valueOf : void 0;
function Mg(e) {
  return Zr ? Object(Zr.call(e)) : {};
}
var Qg = Mg, jg = cr;
function qg(e, t) {
  var r = t ? jg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Gg = qg, Vg = cr, Hg = Ug, Kg = zg, Yg = Qg, Wg = Gg, Zg = "[object Boolean]", Jg = "[object Date]", Xg = "[object Map]", em = "[object Number]", tm = "[object RegExp]", rm = "[object Set]", nm = "[object String]", am = "[object Symbol]", im = "[object ArrayBuffer]", sm = "[object DataView]", om = "[object Float32Array]", lm = "[object Float64Array]", um = "[object Int8Array]", cm = "[object Int16Array]", dm = "[object Int32Array]", pm = "[object Uint8Array]", fm = "[object Uint8ClampedArray]", hm = "[object Uint16Array]", gm = "[object Uint32Array]";
function mm(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case im:
      return Vg(e);
    case Zg:
    case Jg:
      return new n(+e);
    case sm:
      return Hg(e, r);
    case om:
    case lm:
    case um:
    case cm:
    case dm:
    case pm:
    case fm:
    case hm:
    case gm:
      return Wg(e, r);
    case Xg:
      return new n();
    case em:
    case nm:
      return new n(e);
    case tm:
      return Kg(e);
    case rm:
      return new n();
    case am:
      return Yg(e);
  }
}
var ym = mm, vm = ie, Jr = Object.create, Em = function() {
  function e() {
  }
  return function(t) {
    if (!vm(t))
      return {};
    if (Jr)
      return Jr(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), bm = Em, Sm = bm, $m = ra, _m = st;
function xm(e) {
  return typeof e.constructor == "function" && !_m(e) ? Sm($m(e)) : {};
}
var Cm = xm, wm = ke, Fm = ee, Tm = "[object Map]";
function Im(e) {
  return Fm(e) && wm(e) == Tm;
}
var Am = Im, Om = Am, Rm = Wt, Xr = Zt, en = Xr && Xr.isMap, Pm = en ? Rm(en) : Om, Dm = Pm, km = ke, Lm = ee, Um = "[object Set]";
function Nm(e) {
  return Lm(e) && km(e) == Um;
}
var Bm = Nm, zm = Bm, Mm = Wt, tn = Zt, rn = tn && tn.isSet, Qm = rn ? Mm(rn) : zm, jm = Qm, qm = lr, Gm = Ah, Vm = ir, Hm = Nh, Km = Qh, Ym = jh, Wm = Gh, Zm = ng, Jm = gg, Xm = ia, ey = Fg, ty = ke, ry = Og, ny = ym, ay = Cm, iy = Q, sy = ut, oy = Dm, ly = ie, uy = jm, cy = Be, dy = vt, py = 1, fy = 2, hy = 4, oa = "[object Arguments]", gy = "[object Array]", my = "[object Boolean]", yy = "[object Date]", vy = "[object Error]", la = "[object Function]", Ey = "[object GeneratorFunction]", by = "[object Map]", Sy = "[object Number]", ua = "[object Object]", $y = "[object RegExp]", _y = "[object Set]", xy = "[object String]", Cy = "[object Symbol]", wy = "[object WeakMap]", Fy = "[object ArrayBuffer]", Ty = "[object DataView]", Iy = "[object Float32Array]", Ay = "[object Float64Array]", Oy = "[object Int8Array]", Ry = "[object Int16Array]", Py = "[object Int32Array]", Dy = "[object Uint8Array]", ky = "[object Uint8ClampedArray]", Ly = "[object Uint16Array]", Uy = "[object Uint32Array]", x = {};
x[oa] = x[gy] = x[Fy] = x[Ty] = x[my] = x[yy] = x[Iy] = x[Ay] = x[Oy] = x[Ry] = x[Py] = x[by] = x[Sy] = x[ua] = x[$y] = x[_y] = x[xy] = x[Cy] = x[Dy] = x[ky] = x[Ly] = x[Uy] = !0;
x[vy] = x[la] = x[wy] = !1;
function He(e, t, r, n, a, i) {
  var o, l = t & py, u = t & fy, c = t & hy;
  if (r && (o = a ? r(e, n, a, i) : r(e)), o !== void 0)
    return o;
  if (!ly(e))
    return e;
  var d = iy(e);
  if (d) {
    if (o = ry(e), !l)
      return Wm(e, o);
  } else {
    var p = ty(e), f = p == la || p == Ey;
    if (sy(e))
      return Ym(e, l);
    if (p == ua || p == oa || f && !a) {
      if (o = u || f ? {} : ay(e), !l)
        return u ? Jm(e, Km(o, e)) : Zm(e, Hm(o, e));
    } else {
      if (!x[p])
        return a ? e : {};
      o = ny(e, p, l);
    }
  }
  i || (i = new qm());
  var h = i.get(e);
  if (h)
    return h;
  i.set(e, o), uy(e) ? e.forEach(function(E) {
    o.add(He(E, t, r, E, e, i));
  }) : oy(e) && e.forEach(function(E, m) {
    o.set(m, He(E, t, r, m, e, i));
  });
  var g = c ? u ? ey : Xm : u ? dy : cy, y = d ? void 0 : g(e);
  return Gm(y || e, function(E, m) {
    y && (m = E, E = e[m]), Vm(o, m, He(E, t, r, m, e, i));
  }), o;
}
var Ny = He, By = Ny, zy = 1, My = 4;
function Qy(e) {
  return By(e, zy | My);
}
var jy = Qy;
const be = /* @__PURE__ */ R(jy);
var qy = ce, Gy = ee, Vy = "[object Boolean]";
function Hy(e) {
  return e === !0 || e === !1 || Gy(e) && qy(e) == Vy;
}
var Ky = Hy;
const Yy = /* @__PURE__ */ R(Ky);
var Wy = ce, Zy = Q, Jy = ee, Xy = "[object String]";
function ev(e) {
  return typeof e == "string" || !Zy(e) && Jy(e) && Wy(e) == Xy;
}
var tv = ev;
const rv = /* @__PURE__ */ R(tv);
var nv = ce, av = ee, iv = "[object Number]";
function sv(e) {
  return typeof e == "number" || av(e) && nv(e) == iv;
}
var ov = sv;
const lv = /* @__PURE__ */ R(ov);
function dr() {
}
dr.prototype = new Error();
class nn {
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
      hiddenParams: u
    } = t;
    let c = {};
    r !== null && (c.q = r), n !== null && (c.sort = n, a !== null && (c.sort = a === "desc" ? `-${n}` : n)), i > 0 && (c.page = i), o > 0 && (c.size = o), te(u) || Ze(c, this._addFilters(u));
    const d = this._addFilters(l);
    return Ze(c, d), Se.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class uv {
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
function Qe(e, t) {
  return e.indexOf(t) === 0 && (e.length === t.length || e.indexOf(t + "&") === 0);
}
function Ct(e) {
  return Se.stringify({
    q: e
  });
}
function cv(e) {
  return Se.parse(e).q;
}
function ca(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = ca(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function an(e, t) {
  const r = Ct(e), n = t.map((o) => Ct(o));
  let a = !1;
  const i = n.filter((o) => {
    const l = Qe(o, r), u = Qe(r, o);
    return l && !a && (a = !0), !l && !u;
  });
  if (!a)
    i.push(r);
  else if (e.length === 3) {
    const l = ca(e), u = Ct(l), c = i.some((d) => {
      const p = Qe(d, u), f = Qe(u, d);
      return p || f;
    });
    (te(i) || !c) && i.push(u);
  }
  return i.map((o) => cv(o));
}
const da = (e, t) => {
  if (te(e))
    return;
  if (!Gn(Cf(e)))
    return an(e, t);
  let r = t;
  for (const n of e)
    r = an(n, r);
  return r;
}, pa = (e, t, r) => {
  let n = oh(t, r);
  return te(n.filters) || (n.filters = da(n.filters, e.filters)), n;
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
}, fa = Object.keys(Xe), dv = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, pv = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class fv {
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
      hiddenParams: u
    } = t;
    let c = {};
    r !== null && (c.q = r), n !== null && (c.sort = n, a !== null && (c.sort = a === "desc" ? `-${n}` : n)), i > 0 && (c.page = i), o > 0 && (c.size = o), te(u) || Ze(c, this._addFilters(u));
    const d = this._addFilters(l);
    return Ze(c, d), Se.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class ha {
  constructor(t) {
    this.axiosConfig = Ae(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = Ve.CancelToken;
  }
  validateAxiosConfig() {
    if (!ep(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = Ae(t, "interceptors.request", void 0), this.responseInterceptor = Ae(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: fv,
      InvenioRequestSerializer: nn
    };
    return typeof t == "string" ? r[t] : t || nn;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), a = Ae(t, "invenio.responseSerializer", uv);
    this.requestSerializer = new n(), this.responseSerializer = new a();
  }
  initAxios() {
    const t = {
      paramsSerializer: this.requestSerializer.serialize,
      ...this.axiosConfig
    };
    this.http = Ve.create(t), this.addInterceptors();
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
      const n = pa(t, r.extras, fa);
      return te(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw Ve.isCancel(r) ? new dr() : r;
    }
  }
}
class hv {
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
          return lv(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const a = Gn(n) ? n : [n], i = ":", o = t.urlFilterSeparator, l = `[^\\${i}\\${o}]*`, u = `${l}\\${i}${l}`, c = `${u}(\\${o}${u})*`, d = new RegExp(`^${c}$`);
          return a.every((p) => String(p).match(d));
        }
        default:
          return !1;
      }
    };
  }
}
const gv = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, sn = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class mv {
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
    const r = Se.parse(t, {
      ignoreQueryPrefix: !0
    }), n = {};
    return Object.entries(r).forEach((a) => {
      const i = a[0], o = a[1];
      n[i] = this._convertValue(i, o);
    }), n;
  }
}
class yv {
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
      return Se.stringify(n, {
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
      const o = r.slice(0, i), l = a ? n : r.length, u = r.slice(i + 1, l);
      let c = [o, u];
      if (a) {
        const d = r.slice(n + 1, r.length);
        c.push(this._filterStringToList(d));
      }
      return c;
    }, this._mapUrlParamsToQueryState = (r) => {
      const n = {};
      return Object.keys(r).forEach((a) => {
        const i = this.fromUrlParamsMapping[a];
        this.urlParamValidator.isValid(this, i, r[a]) ? (n[i] = r[a], i === "filters" && (Array.isArray(r[a]) || (r[a] = [r[a]]), n[i] = r[a].map((o) => this._filterStringToList(o)))) : console.warn(`URL parameter '${a}' with value '${r[a]}' is incorrect and was ignored.`);
      }), n;
    }, this._mergeParamsIntoState = (r, n) => {
      const a = be(n);
      return Object.keys(r).forEach((i) => {
        a[i] = r[i];
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
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !Yy(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !rv(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new hv(), this.urlParser = t.urlParser || new mv(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), a = this._mergeParamsIntoState(n, t), i = this._mapQueryStateToUrlParams(a);
    return sn(i), a;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      gv(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    sn(r);
  }
}
const vv = "SET_QUERY_COMPONENT_INITIAL_STATE", ga = "SET_QUERY_STRING", pr = "SET_QUERY_SORTING", fr = "SET_QUERY_SORT_BY", hr = "SET_QUERY_SORT_ORDER", ze = "SET_QUERY_STATE", ma = "SET_QUERY_PAGINATION_PAGE", ya = "SET_QUERY_PAGINATION_SIZE", va = "SET_QUERY_FILTERS", Ea = "SET_QUERY_SUGGESTIONS", ba = "SET_SUGGESTION_STRING", Sa = "CLEAR_QUERY_SUGGESTIONS", $a = "RESULTS_LOADING", _a = "RESULTS_FETCH_SUCCESS", xa = "RESULTS_FETCH_ERROR", Dt = "RESULTS_UPDATE_LAYOUT", Ca = "RESET_QUERY", Ev = (e) => (t) => {
  e && t(Z({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, wa = (e) => (t) => {
  t({
    type: ze,
    payload: e
  }), t(Z());
}, Fa = (e) => (t) => {
  t({
    type: ga,
    payload: e
  }), t(Z());
}, bv = (e, t) => (r) => {
  r({
    type: pr,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(Z());
}, Sv = (e) => (t) => {
  t({
    type: fr,
    payload: e
  }), t(Z());
}, $v = (e) => (t) => {
  t({
    type: hr,
    payload: e
  }), t(Z());
}, _v = (e) => (t) => {
  t({
    type: ma,
    payload: e
  }), t(Z());
}, xv = (e) => (t) => {
  t({
    type: ya,
    payload: e
  }), t(Z());
}, gr = (e) => (t) => {
  t({
    type: va,
    payload: e
  }), t(Z());
}, Cv = (e) => async (t, r, n) => {
  const a = n.urlHandlerApi;
  if (a) {
    await t({
      type: Dt,
      payload: e
    });
    const i = r().query;
    a.set(i);
  } else
    t({
      type: Dt,
      payload: e
    });
}, wv = () => (e, t, r) => {
  e({
    type: Ca,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(Z());
}, Fv = (e, t, r, n) => {
  const a = t.urlHandlerApi;
  a && (r ? a.replace(e) : n && a.set(e));
}, Tv = (e, t, r, n) => {
  const a = r().query;
  t({
    type: ze,
    payload: {
      ...a,
      ...e.newQueryState
    }
  });
  const i = be(r().query), o = n.urlHandlerApi;
  return o && o.replace(i), delete e.newStateQuery, e;
}, Iv = (e, t, r, n) => {
  function a(l, u, c, d) {
    l.queryString === "" ? (l.sortBy = c.defaultSortingOnEmptyQueryString.sortBy, l.sortOrder = c.defaultSortingOnEmptyQueryString.sortOrder) : (l.sortBy = u.initialSortBy, l.sortOrder = u.initialSortOrder), d({
      type: ze,
      payload: l
    });
  }
  function i(l, u, c, d) {
    u.hasUserChangedSorting || a(l, u, c, d);
  }
  !te(r.defaultSortingOnEmptyQueryString) && i(e, t, r, n);
}, Z = function() {
  let {
    shouldUpdateUrlQueryString: e = !0,
    shouldReplaceUrlQueryString: t = !1
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return async (r, n, a) => {
    const i = n().app;
    let o = be(n().query);
    Iv(o, i, a, r), o = be(n().query), Fv(o, a, t, e), r({
      type: $a
    });
    try {
      let u = await a.searchApi.search(o);
      "newQueryState" in u && (u = Tv(be(u), r, n, a)), r({
        type: _a,
        payload: {
          aggregations: u.aggregations,
          hits: u.hits,
          total: u.total
        }
      });
    } catch (l) {
      if (l instanceof dr) {
        console.debug(l);
        return;
      } else
        console.error(l), r({
          type: xa,
          payload: {
            error: l
          }
        });
    }
  };
}, Av = (e) => (t) => {
  t({
    type: ba,
    payload: e
  }), t(Ov());
}, Ov = () => async (e, t, r) => {
  const n = be(t().query), a = r.suggestionApi;
  try {
    const i = await a.search(n);
    e({
      type: Ea,
      payload: {
        suggestions: i.suggestions
      }
    });
  } catch (i) {
    console.error("Could not load suggestions due to: " + i);
  }
}, Rv = () => (e) => {
  e({
    type: Sa,
    payload: {
      suggestions: []
    }
  });
}, Pv = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: ze,
      payload: n
    }), e(Z({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, C = /* @__PURE__ */ s.createContext({}), Dv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
    case pr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case fr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case hr:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    default:
      return e;
  }
}, kv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case ga:
      return {
        ...e,
        queryString: t.payload,
        page: 1
      };
    case pr:
      return {
        ...e,
        sortBy: t.payload.sortBy,
        sortOrder: t.payload.sortOrder,
        _sortUserChanged: !0,
        page: 1
      };
    case fr:
      return {
        ...e,
        sortBy: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case hr:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case ma:
      return {
        ...e,
        page: t.payload
      };
    case ya:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case va:
      return {
        ...e,
        page: 1,
        filters: da(t.payload, e.filters)
      };
    case Ea:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case Sa:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case ba:
      return {
        ...e,
        suggestionString: t.payload
      };
    case vv:
      return {
        ...e,
        ...t.payload
      };
    case ze:
      return {
        ...e,
        ...Xe,
        ...pa(Xe, t.payload, fa)
      };
    case Dt:
      return {
        ...e,
        layout: t.payload
      };
    case Ca:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, Lv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case $a:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case _a:
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
    case xa:
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
var Uv = ws({
  app: Dv,
  query: kv,
  results: Lv
});
function on(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: a,
    sortOrder: i
  } = t;
  return r !== a || n !== i;
}
function Nv(e, t, r) {
  const n = on(r, t), a = !te(e.defaultSortingOnEmptyQueryString);
  let i = !1;
  return a && (i = on(r, e.defaultSortingOnEmptyQueryString)), n && i;
}
function Bv(e) {
  const t = {
    ...Xe,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = Nv(e, t, r), a = {
    ...pv,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, i = {
    ...dv,
    loading: e.searchOnInit
  };
  return {
    app: a,
    query: r,
    results: i
  };
}
function zv(e) {
  const t = Bv(e);
  return Fs(Uv, t, Ts(Is.withExtraArgument(e)));
}
function ln(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class mr extends D {
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
mr.defaultProps = {
  searchOnInit: !0,
  eventListenerEnabled: !1
};
mr.contextType = C;
var Mv = v.component("Bootstrap", mr);
const Qv = (e) => ({
  onAppInitialized: (t) => e(Ev(t)),
  updateQueryState: (t) => e(wa(t)),
  searchOnUrlQueryStringChanged: () => e(Pv())
}), jv = O(null, Qv)(Mv);
class yr extends D {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new yv(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = zv(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
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
      buildUID: (u, c) => ln(u, c, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, l = ln("ReactSearchKit.children", a, t);
    return /* @__PURE__ */ s.createElement(C.Provider, {
      value: o
    }, /* @__PURE__ */ s.createElement(Es, {
      store: this.store
    }, /* @__PURE__ */ s.createElement(jv, {
      searchOnInit: i,
      eventListenerEnabled: n
    }, /* @__PURE__ */ s.createElement(v, {
      id: l
    }, r))));
  }
}
yr.defaultProps = {
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
yr.contextType = C;
var qv = v.component("ReactSearchKit", yr);
class Ta extends D {
  constructor(t) {
    super(t), this._getLabel = (r) => {
      const n = r[0];
      let a = r[1], i = [n, a];
      if (r.length === 3) {
        const {
          label: l,
          activeFilter: u
        } = this._getLabel(r[2]);
        a = `${a}.${l}`, i.push(u);
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
    return !!t.length && /* @__PURE__ */ s.createElement(Ia, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
Ta.defaultProps = {
  overridableId: ""
};
const Ia = (e) => {
  let {
    overridableId: t,
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  } = e;
  const {
    buildUID: i
  } = T(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: i("ActiveFilters.element", t),
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  }, /* @__PURE__ */ s.createElement(s.Fragment, null, r.map((o, l) => {
    const {
      label: u,
      activeFilter: c
    } = a(o);
    return (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ s.createElement(se, {
        image: !0,
        key: l,
        onClick: () => n(c)
      }, u, /* @__PURE__ */ s.createElement($, {
        name: "delete"
      }))
    );
  })));
};
Ia.defaultProps = {
  overridableId: ""
};
var Gv = v.component("ActiveFilters", Ta);
const Vv = (e) => ({
  updateQueryFilters: (t) => e(gr(t))
});
O((e) => ({
  filters: e.query.filters
}), Vv)(Gv);
function Hv(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var Kv = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
Hv(Kv);
class Aa extends D {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? As.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ s.createElement(Wv, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
Aa.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const Yv = (e) => /* @__PURE__ */ s.createElement(Aa, Object.assign({
  key: e.queryString
}, e)), Wv = (e) => {
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
    buildUID: u
  } = T(C), c = (p, f) => {
    o();
  }, d = (p, f) => {
    p.key === "Enter" && o();
  };
  return /* @__PURE__ */ s.createElement(v, Object.assign({
    id: u("AutocompleteSearchBar.element", t)
  }, l), /* @__PURE__ */ s.createElement("div", {
    className: "AutoCompleteText"
  }, /* @__PURE__ */ s.createElement(Rn, {
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
      i(h);
    },
    value: n,
    onKeyPress: d
  }), /* @__PURE__ */ s.createElement(Zv, {
    querySuggestions: a,
    overridableId: t
  })));
}, Zv = (e) => {
  let {
    overridableId: t,
    ...r
  } = e;
  const {
    querySuggestions: n
  } = r, {
    buildUID: a
  } = T(C), i = async (o) => {
    await (void 0).setState({
      currentValue: o
    }), (void 0).clearSuggestions(), (void 0).executeSearch();
  };
  return n.length === 0 ? null : /* @__PURE__ */ s.createElement(v, Object.assign({
    id: a("AutocompleteSearchBar.suggestions", t)
  }, r), /* @__PURE__ */ s.createElement("ul", null, n.map((o) => /* @__PURE__ */ s.createElement(N, {
    as: "li",
    onClick: () => i(o),
    key: o
  }, o))));
};
var Jv = v.component("AutocompleteSearchBar", Yv);
const Xv = (e) => ({
  updateQueryString: (t) => e(Fa(t)),
  updateSuggestions: (t) => e(Av(t)),
  clearSuggestions: () => e(Rv())
}), eE = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
O(eE, Xv)(Jv);
class Et extends D {
  constructor(t) {
    super(t), this._isSelected = (r, n, a) => a.filter((i) => i[0] === r && i[1] === n).length >= 1, this.getChildAggCmps = (r, n) => {
      const a = this.childAgg && this.childAgg.aggName in r;
      let i = [];
      if (a) {
        const o = r[this.childAgg.aggName].buckets;
        n.forEach((u) => {
          const c = u[0] === this.aggName, d = u[1] === r.key, p = u.length === 3;
          c && d && p && i.push(u[2]);
        });
        const l = (u) => {
          this.onFilterClicked([this.aggName, r.key, u]);
        };
        return /* @__PURE__ */ s.createElement(Et, {
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
      const o = i.key_as_string ? i.key_as_string : i.key, l = this._isSelected(this.aggName, o, r), u = (d) => {
        this.onFilterClicked([this.aggName, d]);
      }, c = (d) => this.getChildAggCmps(d, r);
      return /* @__PURE__ */ s.createElement(Ra, {
        key: i.key,
        bucket: i,
        keyField: o,
        isSelected: l,
        onFilterClicked: u,
        getChildAggCmps: c,
        overridableId: n
      });
    });
    return /* @__PURE__ */ s.createElement(Oa, {
      valuesCmp: a,
      overridableId: n
    });
  }
}
Et.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const Oa = (e) => {
  let {
    valuesCmp: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = T(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: n("BucketAggregationContainer.element", r),
    valuesCmp: t
  }, /* @__PURE__ */ s.createElement(_, null, t));
};
Oa.defaultProps = {
  overridableId: ""
};
const Ra = (e) => {
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
    nextComponentIndex: u
  } = T(C), c = t.label ? t.label : `${o} (${t.doc_count.toLocaleString("en-US")})`, d = a(t);
  return /* @__PURE__ */ s.createElement(v, {
    id: l("BucketAggregationValues.element", i),
    bucket: t,
    label: c,
    onFilterClicked: n,
    isSelected: r,
    childAggCmps: d
  }, /* @__PURE__ */ s.createElement(_.Item, {
    key: t.key
  }, /* @__PURE__ */ s.createElement(Pn, {
    label: c,
    id: u(),
    value: t.key,
    onClick: () => n(t.key),
    checked: r
  }), d));
};
Ra.defaultProps = {
  overridableId: ""
};
var tE = v.component("BucketAggregationValues", Et);
class Pa extends D {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: a
      } = this.props;
      return /* @__PURE__ */ s.createElement(tE, {
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
    return /* @__PURE__ */ s.createElement(Da, Object.assign({
      title: this.title,
      containerCmp: l,
      overridableId: n
    }, a));
  }
}
Pa.defaultProps = {
  overridableId: ""
};
const Da = (e) => {
  let {
    overridableId: t,
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: i
  } = e;
  const {
    buildUID: o
  } = T(C);
  return a && /* @__PURE__ */ s.createElement(v, {
    id: o("BucketAggregation.element", t),
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: i
  }, /* @__PURE__ */ s.createElement(P, null, /* @__PURE__ */ s.createElement(P.Content, null, /* @__PURE__ */ s.createElement(P.Header, null, n)), /* @__PURE__ */ s.createElement(P.Content, null, a)));
};
Da.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var rE = v.component("BucketAggregation", Pa);
const nE = (e) => ({
  updateQueryFilters: (t) => e(gr(t))
});
O((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), nE)(rE);
class ka extends D {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
ka.defaultProps = {
  condition: !0
};
var V = v.component("ShouldRender", ka);
class La extends D {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: a
    } = this.props;
    return /* @__PURE__ */ s.createElement(V, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ s.createElement(Ua, {
      totalResults: r,
      overridableId: a
    })));
  }
}
La.defaultProps = {
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
  } = T(C), a = n("Count.element", r);
  return /* @__PURE__ */ s.createElement(v, {
    id: a,
    totalResults: t
  }, /* @__PURE__ */ s.createElement(se, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
Ua.defaultProps = {
  overridableId: ""
};
var aE = v.component("Count", La);
const iE = O((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(aE);
class Na extends D {
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
      ...u
    } = this.props;
    return /* @__PURE__ */ s.createElement(V, {
      condition: !t && te(n) && r === 0
    }, /* @__PURE__ */ s.createElement(Ba, Object.assign({}, u, {
      queryString: a,
      resetQuery: this.resetQuery,
      extraContent: i,
      userSelectionFilters: l,
      overridableId: o
    })));
  }
}
Na.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const Ba = (e) => {
  let {
    overridableId: t,
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: i
  } = e;
  const {
    buildUID: o
  } = T(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: o("EmptyResults.element", t),
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: i
  }, /* @__PURE__ */ s.createElement(G, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ s.createElement(fe, {
    icon: !0
  }, /* @__PURE__ */ s.createElement($, {
    name: "search"
  }), "No results found!"), r && /* @__PURE__ */ s.createElement("em", null, 'Current search "', r, '"'), /* @__PURE__ */ s.createElement("br", null), /* @__PURE__ */ s.createElement(N, {
    primary: !0,
    onClick: () => n()
  }, "Clear query"), a));
};
Ba.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var sE = v.component("EmptyResults", Na);
const oE = (e) => ({
  resetQuery: () => e(wv())
}), lE = O((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), oE)(sE);
function za(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ s.createElement(V, {
    condition: !t && !te(r)
  }, /* @__PURE__ */ s.createElement(Ma, {
    error: r,
    overridableId: n
  }));
}
za.defaultProps = {
  overridableId: ""
};
const Ma = (e) => {
  let {
    error: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = T(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ s.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
Ma.defaultProps = {
  overridableId: ""
};
var uE = v.component("Error", za);
O((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(uE);
function Qa(e) {
  const t = (a) => /* @__PURE__ */ s.createElement(e, a);
  return O((a) => ({
    currentQueryState: a.query,
    currentResultsState: a.results
  }), (a) => ({
    updateQueryState: (i) => a(wa(i))
  }))(t);
}
class ja extends D {
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
    return /* @__PURE__ */ s.createElement(V, {
      condition: t !== null && !r && n > 0
    }, /* @__PURE__ */ s.createElement(qa, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: a
    }));
  }
}
ja.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
const qa = (e) => {
  let {
    overridableId: t,
    currentLayout: r,
    onLayoutChange: n
  } = e;
  const {
    buildUID: a
  } = T(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: a("LayoutSwitcher.element", t),
    currentLayout: r,
    onLayoutChange: n
  }, /* @__PURE__ */ s.createElement(Re, {
    compact: !0,
    icon: !0
  }, /* @__PURE__ */ s.createElement(Re.Item, {
    name: "list",
    active: r === "list",
    onClick: (i, o) => {
      let {
        name: l
      } = o;
      return n(l);
    }
  }, /* @__PURE__ */ s.createElement($, {
    name: "list layout"
  })), /* @__PURE__ */ s.createElement(Re.Item, {
    name: "grid",
    active: r === "grid",
    onClick: (i, o) => {
      let {
        name: l
      } = o;
      return n(l);
    }
  }, /* @__PURE__ */ s.createElement($, {
    name: "grid layout"
  }))));
};
qa.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var cE = v.component("LayoutSwitcher", ja);
const dE = (e) => ({
  updateLayout: (t) => e(Cv(t))
});
O((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), dE)(cE);
const un = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class Ga extends D {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...un,
      ...t.options
    } : un;
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
    return /* @__PURE__ */ s.createElement(V, {
      condition: !t && n > -1 && a > -1 && o ? r > 0 : r > a
    }, /* @__PURE__ */ s.createElement(Va, {
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
Ga.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const Va = (e) => {
  let {
    overridableId: t,
    currentPage: r,
    currentSize: n,
    totalResults: a,
    onPageChange: i,
    options: o,
    maxTotalResults: l,
    ...u
  } = e;
  const c = o.boundaryRangeCount, d = o.siblingRangeCount, p = o.showEllipsis, f = o.showFirst, h = o.showLast, g = o.showPrev, y = o.showNext, E = o.size, m = Math.floor(l / n), S = Math.ceil(a / n), I = Math.min(S, m), {
    buildUID: L
  } = T(C);
  return r > S && i(S), /* @__PURE__ */ s.createElement(v, {
    id: L("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: a,
    options: o,
    onPageChange: i
  }, /* @__PURE__ */ s.createElement(bs, Object.assign({
    activePage: r,
    totalPages: I,
    onPageChange: (J, b) => {
      let {
        activePage: re
      } = b;
      return i(re);
    },
    boundaryRange: c,
    siblingRange: d,
    ellipsisItem: p ? void 0 : null,
    firstItem: f ? void 0 : null,
    lastItem: h ? void 0 : null,
    prevItem: g ? void 0 : null,
    nextItem: y ? void 0 : null,
    size: E
  }, u)));
};
Va.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var pE = v.component("Pagination", Ga);
const fE = (e) => ({
  updateQueryPage: (t) => e(_v(t))
}), hE = O((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), fE)(pE);
function Ha(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    resultsPerRow: a,
    overridableId: i,
    onResultsRendered: o
  } = e;
  return De(() => {
    o && o();
  }, [o]), /* @__PURE__ */ s.createElement(V, {
    condition: !t && r > 0
  }, /* @__PURE__ */ s.createElement(Ka, {
    results: n,
    resultsPerRow: a,
    overridableId: i
  }));
}
Ha.defaultProps = {
  resultsPerRow: 3,
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
  } = T(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: n("ResultsGrid.item", r),
    result: t
  }, /* @__PURE__ */ s.createElement(P, {
    fluid: !0,
    href: `#${t.id}`
  }, /* @__PURE__ */ s.createElement(Ss, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ s.createElement(P.Content, null, /* @__PURE__ */ s.createElement(P.Header, null, t.title), /* @__PURE__ */ s.createElement(P.Description, null, t.description))));
}, Ka = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: a
  } = T(C), i = r.map((o, l) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ s.createElement(gE, {
      key: l,
      result: o,
      overridableId: t
    })
  ));
  return /* @__PURE__ */ s.createElement(v, {
    id: a("ResultsGrid.container", t),
    results: i,
    resultsPerRow: n
  }, /* @__PURE__ */ s.createElement(P.Group, {
    itemsPerRow: n
  }, i));
};
Ka.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var mE = v.component("ResultsGrid", Ha);
const yE = O((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(mE);
function Ya(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: a,
    onResultsRendered: i
  } = e;
  return De(() => {
    i && i();
  }, [i]), /* @__PURE__ */ s.createElement(V, {
    condition: !t && r > 0
  }, /* @__PURE__ */ s.createElement(Wa, {
    results: n,
    overridableId: a
  }));
}
Ya.defaultProps = {
  overridableId: "",
  onResultsRendered: () => {
  }
};
const vE = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = T(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ s.createElement(me, {
    href: `#${t.id}`
  }, /* @__PURE__ */ s.createElement(me.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ s.createElement(me.Content, null, /* @__PURE__ */ s.createElement(me.Header, null, t.title), /* @__PURE__ */ s.createElement(me.Description, null, t.description))));
}, Wa = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = T(C), a = t.map((i, o) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ s.createElement(vE, {
      result: i,
      key: o,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ s.createElement(v, {
    id: n("ResultsList.container", r),
    results: a
  }, /* @__PURE__ */ s.createElement(me.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, a));
};
Wa.defaultProps = {
  overridableId: ""
};
var EE = v.component("ResultsList", Ya);
const Za = O((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(EE);
function Ja(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ s.createElement(Xa, {
    overridableId: n
  }) : t;
}
Ja.defaultProps = {
  overridableId: ""
};
const Xa = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = T(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ s.createElement(Dn, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
Xa.defaultProps = {
  overridableId: ""
};
var bE = v.component("ResultsLoader", Ja);
const SE = O((e) => ({
  loading: e.results.loading
}))(bE);
function ei(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: a,
    onResultsRendered: i
  } = e;
  return /* @__PURE__ */ s.createElement(V, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ s.createElement(ti, {
    layout: n,
    overridableId: a,
    onResultsRendered: i
  }));
}
ei.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const ti = (e) => {
  let {
    layout: t,
    overridableId: r,
    onResultsRendered: n
  } = e;
  const {
    buildUID: a
  } = T(C);
  return /* @__PURE__ */ s.createElement(v, {
    id: a("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ s.createElement(Za, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ s.createElement(yE, {
    overridableId: r,
    onResultsRendered: n
  }));
};
ti.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var $E = v.component("ResultsMultiLayout", ei);
O((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))($E);
class ri extends D {
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
      showWhenOnlyOnePage: u
    } = this.props;
    return /* @__PURE__ */ s.createElement(V, {
      condition: !t && r !== -1 && u ? n > 0 : n > r
    }, a(/* @__PURE__ */ s.createElement(ni, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
ri.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const ni = (e) => {
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
  } = T(C), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ s.createElement(v, {
    id: l("ResultsPerPage.element", t),
    currentSize: r,
    options: n,
    onValueChange: a,
    ariaLabel: i,
    selectOnNavigation: o
  }, /* @__PURE__ */ s.createElement(le, {
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
    "aria-label": i,
    selectOnNavigation: o
  }));
};
ni.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var _E = v.component("ResultsPerPage", ri);
const xE = (e) => ({
  updateQuerySize: (t) => e(xv(t))
}), CE = O((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), xE)(_E);
class ai extends D {
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
      placeholder: u,
      uiProps: c
    } = this.props, {
      currentValue: d
    } = this.state;
    return /* @__PURE__ */ s.createElement(vr, {
      actionProps: t,
      autofocus: r,
      executeSearch: n || this.executeSearch,
      onBtnSearchClick: a || this.onBtnSearchClick,
      onInputChange: i || this.onInputChange,
      onKeyPress: o || this.onKeyPress,
      overridableId: l,
      placeholder: u,
      queryString: d,
      uiProps: c
    });
  }
}
ai.defaultProps = {
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
const ii = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ s.createElement(ai, Object.assign({
    key: t
  }, e));
};
ii.defaultProps = {
  queryString: ""
};
class vr extends D {
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
      uiProps: u
    } = this.props, {
      buildUID: c
    } = this.context;
    return /* @__PURE__ */ s.createElement(v, {
      id: c("SearchBar.element", i),
      queryString: l,
      onBtnSearchClick: r,
      onInputChange: n,
      onKeyPress: a,
      placeholder: o,
      actionProps: t,
      uiProps: u
    }, /* @__PURE__ */ s.createElement(Rn, Object.assign({
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
vr.defaultProps = {
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
vr.contextType = C;
var wE = v.component("SearchBar", ii);
const FE = (e) => ({
  updateQueryString: (t) => e(Fa(t))
}), TE = O((e) => ({
  queryString: e.query.queryString
}), FE)(wE);
class si extends D {
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
      ariaLabel: u,
      selectOnNavigation: c
    } = this.props;
    return /* @__PURE__ */ s.createElement(V, {
      condition: t !== null && (l || t !== null) && !n && a > 0
    }, i(/* @__PURE__ */ s.createElement(oi, {
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
si.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const oi = (e) => {
  let {
    overridableId: t,
    currentSortBy: r,
    currentSortOrder: n,
    options: a,
    onValueChange: i,
    computeValue: o,
    ariaLabel: l,
    selectOnNavigation: u
  } = e;
  const {
    buildUID: c
  } = T(C), d = o(r, n), p = a.map((f, h) => ({
    key: h,
    text: f.text,
    value: f.value
  }));
  return /* @__PURE__ */ s.createElement(v, {
    id: c("Sort.element", t),
    options: a,
    currentSortBy: r,
    currentSortOrder: n,
    onValueChange: i,
    ariaLabel: l,
    selectOnNavigation: u
  }, /* @__PURE__ */ s.createElement(le, {
    selection: !0,
    options: p,
    value: d,
    onChange: (f, h) => {
      let {
        value: g
      } = h;
      return i(g);
    },
    "aria-label": l,
    selectOnNavigation: u
  }));
};
oi.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var IE = v.component("Sort", si);
const AE = (e) => ({
  updateQuerySorting: (t, r) => e(bv(t, r))
});
O((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), AE)(IE);
class li extends D {
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
    return /* @__PURE__ */ s.createElement(V, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ s.createElement(ui, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
li.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const ui = (e) => {
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
  } = T(C), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ s.createElement(v, {
    id: l("SortBy.element", t),
    options: n,
    currentSortBy: r,
    onValueChange: a,
    ariaLabel: i,
    selectOnNavigation: o
  }, /* @__PURE__ */ s.createElement(le, {
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
    "aria-label": i,
    selectOnNavigation: o
  }));
};
ui.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var OE = v.component("SortBy", li);
const RE = (e) => ({
  updateQuerySortBy: (t) => e(Sv(t))
});
O((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), RE)(OE);
class ci extends D {
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
    return /* @__PURE__ */ s.createElement(V, {
      condition: t !== null && !r && n > 0
    }, a(/* @__PURE__ */ s.createElement(di, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: i,
      ariaLabel: o,
      selectOnNavigation: l
    })));
  }
}
ci.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const di = (e) => {
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
  } = T(C), u = n.map((c, d) => ({
    key: d,
    text: c.text,
    value: c.value
  }));
  return /* @__PURE__ */ s.createElement(v, {
    id: l("SortOrder.element", t),
    options: n,
    currentSortOrder: r,
    onValueChange: a,
    ariaLabel: i,
    selectOnNavigation: o
  }, /* @__PURE__ */ s.createElement(le, {
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
    "aria-label": i,
    selectOnNavigation: o
  }));
};
di.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var PE = v.component("SortOrder", ci);
const DE = (e) => ({
  updateQuerySortOrder: (t) => e($v(t))
});
O((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), DE)(PE);
const pi = (e) => {
  let {
    overridableId: t,
    userSelectionFilters: r,
    title: n,
    label: a,
    filterValue: i,
    updateQueryFilters: o
  } = e;
  const l = (p) => p.filter((h) => h[0] === i[0]).length > 0, u = () => {
    o(i);
  }, {
    buildUID: c
  } = T(C), d = l(r);
  return /* @__PURE__ */ s.createElement(v, {
    id: c("SearchFilters.Toggle.element", t),
    title: n,
    label: a,
    filterValue: i,
    userSelectionFilters: r,
    updateQueryFilters: o
  }, /* @__PURE__ */ s.createElement(P, null, /* @__PURE__ */ s.createElement(P.Content, null, /* @__PURE__ */ s.createElement(P.Header, null, n)), /* @__PURE__ */ s.createElement(P.Content, null, /* @__PURE__ */ s.createElement(Pn, {
    toggle: !0,
    label: a,
    onClick: u,
    checked: d
  }))));
};
pi.defaultProps = {
  overridableId: ""
};
var kE = v.component("SearchFilters.Toggle", pi);
const LE = (e) => ({
  updateQueryFilters: (t) => e(gr(t))
});
O((e) => ({
  userSelectionFilters: e.query.filters
}), LE)(kE);
const fi = s.createContext(
  null
), UE = ({ config: e, children: t, updateQueryState: r, currentQueryState: n }) => {
  const a = A(() => {
    r({
      ...n,
      queryString: n.queryString
    });
  }, [r, n]);
  return /* @__PURE__ */ s.createElement(fi.Provider, { value: { config: e, refreshSearch: a } }, t);
}, NE = Qa(UE), bt = () => {
  const e = s.useContext(fi);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
}, hi = ({ progress: e }) => /* @__PURE__ */ s.createElement(Ht, null, Object.entries(e).map(([t, r]) => /* @__PURE__ */ s.createElement(G.Inline, { basic: !0, key: t }, /* @__PURE__ */ s.createElement(
  $,
  {
    name: "spinner",
    loading: !0,
    style: {
      marginInlineEnd: "0.5rem"
    }
  }
), /* @__PURE__ */ s.createElement("strong", null, t, ":"), " ", r, "%"))), BE = ({ status: e, ...t }) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ s.createElement($, { name: "close", color: "red", ...t }) : e === "success" || e === "validated" || e === "created" ? /* @__PURE__ */ s.createElement($, { name: "check circle", color: "green", ...t }) : e === "importing" || e === "validating" ? /* @__PURE__ */ s.createElement($, { name: "spinner", loading: !0, ...t }) : /* @__PURE__ */ s.createElement($, { ...t }), gi = ({
  status: e,
  children: t,
  ...r
}) => e === "damaged" || e === "imported with failures" || e === "validated with failures" || e === "serializer validation failed" || e === "validation failed" || e === "import failed" ? /* @__PURE__ */ s.createElement(se, { color: "red", ...r }, /* @__PURE__ */ s.createElement($, { name: "warning sign" }), t) : e === "success" || e === "validated" || e === "created" ? /* @__PURE__ */ s.createElement(se, { color: "green", ...r }, /* @__PURE__ */ s.createElement($, { name: "check circle" }), t) : e === "importing" || e === "validating" ? /* @__PURE__ */ s.createElement(se, { color: "blue", ...r }, /* @__PURE__ */ s.createElement($, { name: "spinner", loading: !0 }), t) : /* @__PURE__ */ s.createElement(se, { ...r }, t), et = (e) => (e == null ? void 0 : e.charAt(0).toUpperCase()) + (e == null ? void 0 : e.slice(1)) || "", zE = (e) => e.reduce((t, r) => t + r.file.size, 0), mi = (e) => Er(zE(e)), Er = (e) => {
  if (e === 0)
    return "0 Bytes";
  const t = 1024, r = ["Bytes", "KB", "MB", "GB"], n = Math.floor(Math.log(e) / Math.log(t));
  return `${Number.parseFloat((e / t ** n).toFixed(2))} ${r[n]}`;
}, kt = (e) => new Date(e).toLocaleString(void 0, {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit"
});
var yi = { exports: {} };
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
        for (var u in l)
          o[u] = l[u];
      }
      return o;
    }
    function n(i) {
      return i.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    function a(i) {
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
          d = i.write ? i.write(d, c) : encodeURIComponent(String(d)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), c = encodeURIComponent(String(c)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var h = "";
          for (var g in p)
            p[g] && (h += "; " + g, p[g] !== !0 && (h += "=" + p[g].split(";")[0]));
          return document.cookie = c + "=" + d + h;
        }
      }
      function u(c, d) {
        if (!(typeof document > "u")) {
          for (var p = {}, f = document.cookie ? document.cookie.split("; ") : [], h = 0; h < f.length; h++) {
            var g = f[h].split("="), y = g.slice(1).join("=");
            !d && y.charAt(0) === '"' && (y = y.slice(1, -1));
            try {
              var E = n(g[0]);
              if (y = (i.read || i)(y, E) || n(y), d)
                try {
                  y = JSON.parse(y);
                } catch {
                }
              if (p[E] = y, c === E)
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
})(yi);
var ME = yi.exports;
const QE = /* @__PURE__ */ R(ME), jE = () => QE.get("csrftoken") || null, qE = (e) => {
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
}, ex = (e) => new ha(e), tx = (e, t = {}, r = !0) => ({
  axios: {
    url: e,
    headers: {
      Accept: "application/vnd.inveniordm.v1+json",
      ...t
    },
    withCredentials: r
  }
}), j = Ve.create({
  baseURL: "",
  timeout: 3e4,
  withCredentials: !0,
  // Include cookies in requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
j.interceptors.request.use(
  (e) => {
    const t = jE();
    return t && (e.headers["X-CSRFTOKEN"] = t), e;
  },
  (e) => Promise.reject(e)
);
const vi = async (e, t) => {
  try {
    const r = await j.put(
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
}, GE = async (e, t) => {
  try {
    const r = await j.post(
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
}, VE = async (e) => {
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
    const r = await j.post(
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
}, HE = async (e) => {
  try {
    const t = await j.delete(`/api/importer-tasks/${e}`);
    return t.status === 204 ? !0 : (console.error(`Failed to delete task: ${t.statusText}`), !1);
  } catch (t) {
    return console.error(
      `Error deleting task: ${t instanceof Error ? t.message : "Unknown error"}`
    ), !1;
  }
}, Ei = async (e) => {
  try {
    const t = await j.post(`/api/importer-tasks/${e}/load`);
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error executing bulk import:", t), new Error("Failed to execute bulk import");
  }
}, KE = async () => {
  try {
    const e = await j.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, YE = async (e) => {
  try {
    const t = await j.get(
      `/api/importer-tasks/config/${e}`
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error fetching serializers:", t), new Error("Failed to fetch serializers");
  }
}, Lt = async (e) => {
  try {
    const t = await j.put(
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
}, WE = async (e, t) => {
  const r = t.map((n) => ({
    key: n
  }));
  try {
    const n = await j.post(
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
}, ZE = async (e, t, r) => {
  try {
    const n = await j.put(
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
}, bi = async (e) => {
  try {
    const t = await j.post(
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
}, Si = async (e, t = {}) => {
  const { autoExecute: r = !1, onProgress: n, onError: a } = t;
  try {
    n == null || n("Validating", 0), await bi(e), n == null || n("Validating", 50);
    let i = await Lt(e);
    return n == null || n("Validating", 100), r && (i.status === "validated" || i.status === "validated with failures") && (n == null || n("Executing", 0), await Ei(e), n == null || n("Executing", 50), i = await Lt(e), n == null || n("Executing", 100)), i;
  } catch (i) {
    const o = i instanceof Error ? i : new Error("Unknown error during workflow execution");
    throw a == null || a(o, "Executing"), o;
  }
}, $i = async (e, t, r) => {
  if (!t || t.length === 0)
    return;
  const n = t.map((a) => a.name);
  await WE(e, n);
  for (const a of t)
    try {
      r == null || r({
        fileName: a.name,
        loaded: 0,
        total: a.size,
        percentage: 0
      }), await ZE(e, a.name, a), r == null || r({
        fileName: a.name,
        loaded: a.size,
        total: a.size,
        percentage: 90
      }), await GE(e, a.name), r == null || r({
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
}, JE = async (e, t, r, n = {}) => {
  const {
    autoValidate: a = !1,
    autoExecute: i = !1,
    onProgress: o,
    onError: l
  } = n;
  try {
    o == null || o("Creating Task", 0);
    const u = await VE(e);
    if (!u)
      throw new Error("Failed to create import task");
    return o == null || o("Creating Task", 100), t && (o == null || o("Uploading Metadata", 0), await vi(u.id, t), o == null || o("Uploading Metadata", 100)), r && r.length > 0 && await $i(u.id, r, (c) => {
      o == null || o("Uploading Files", c.percentage);
    }), a && t && await Si(u.id, {
      autoExecute: i,
      onProgress: o,
      onError: l
    }), u;
  } catch (u) {
    const c = u instanceof Error ? u : new Error("Unknown error during task creation");
    throw l == null || l(c, "Creating Task"), c;
  }
}, XE = async (e, t, r, n = {}) => {
  const { onProgress: a, onError: i } = n;
  try {
    a == null || a("Updating", 0), t && (a == null || a("Updating Metadata", 0), await vi(e, t), a == null || a("Updating Metadata", 100)), r && r.length > 0 && await $i(e, r, (o) => {
      a == null || a("Updating Files", o.percentage);
    }), a == null || a("Updating", 100);
  } catch (o) {
    const l = o instanceof Error ? o : new Error("Unknown error during task update");
    throw i == null || i(l, "Updating"), l;
  }
}, eb = async (e) => {
  try {
    const t = await j.post(
      `/api/importer-records/${e}/run`,
      {}
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Failed to fetch import records: ${t.statusText}`);
  } catch (t) {
    throw console.error("Failed to fetch import records:", t), t;
  }
}, _i = (e, t = {}) => {
  const [r, n] = k({
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
    onBulkImportSuccess: u,
    onBulkImportError: c,
    onStatusChangeSuccess: d,
    onStatusChangeError: p
  } = t, f = A(() => {
    n((m) => ({ ...m, error: null }));
  }, []), h = A(async () => {
    n((m) => ({ ...m, isDeleting: !0, error: null }));
    try {
      if (!await HE(e))
        throw new Error(`Failed to delete task ${e}`);
      a == null || a();
    } catch (m) {
      const S = m instanceof Error ? m : new Error("Unknown error");
      throw n((I) => ({ ...I, error: S })), i == null || i(S), S;
    } finally {
      n((m) => ({ ...m, isDeleting: !1 }));
    }
  }, [e, a, i]), g = A(async () => {
    n((m) => ({ ...m, isValidating: !0, error: null }));
    try {
      const m = await bi(e);
      if (!m)
        throw new Error(`Validation failed for task ${e}`);
      return o == null || o(m), m;
    } catch (m) {
      const S = m instanceof Error ? m : new Error("Unknown error");
      throw n((I) => ({ ...I, error: S })), l == null || l(S), S;
    } finally {
      n((m) => ({ ...m, isValidating: !1 }));
    }
  }, [e, o, l]), y = A(async () => {
    n((m) => ({ ...m, isBulkImporting: !0, error: null }));
    try {
      const m = await Ei(e);
      if (!m)
        throw new Error(`Failed to execute bulk import for task ${e}`);
      return u == null || u(m), m;
    } catch (m) {
      const S = m instanceof Error ? m : new Error("Unknown error");
      throw n((I) => ({ ...I, error: S })), c == null || c(S), S;
    } finally {
      n((m) => ({ ...m, isBulkImporting: !1 }));
    }
  }, [e, u, c]), E = A(async () => {
    n((m) => ({ ...m, isGettingStatus: !0, error: null }));
    try {
      const m = await Lt(e);
      if (!m)
        throw new Error(`Failed to retrieve status for task ${e}`);
      return d == null || d(m), m;
    } catch (m) {
      const S = m instanceof Error ? m : new Error("Unknown error");
      throw n((I) => ({ ...I, error: S })), p == null || p(S), S;
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
    validateTask: g,
    runBulkImport: y,
    getStatus: E,
    clearError: f
  };
}, tb = ({ result: e, index: t }) => {
  var E;
  const { refreshSearch: r, config: n } = bt(), {
    deleteTask: a,
    validateTask: i,
    runBulkImport: o,
    getStatus: l,
    isDeleting: u,
    isValidating: c,
    isBulkImporting: d,
    isGettingStatus: p,
    error: f,
    clearError: h
  } = _i(e.id, {
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
  const g = (m, S) => S ? `${m}...` : m, y = u || c || d || p;
  return /* @__PURE__ */ s.createElement(it, { key: t }, /* @__PURE__ */ s.createElement(Y, null, /* @__PURE__ */ s.createElement("a", { href: `${n.resultPath}/${e.id}` }, e.title || "No title")), /* @__PURE__ */ s.createElement(Y, null, kt(e.created)), /* @__PURE__ */ s.createElement(Y, null, /* @__PURE__ */ s.createElement(gi, { status: e.status }, et(e.status))), /* @__PURE__ */ s.createElement(Y, null, ((E = e.records_status) == null ? void 0 : E.total_records) ?? 0), /* @__PURE__ */ s.createElement(Y, null, e.serializer), /* @__PURE__ */ s.createElement(Y, null, et(e.mode)), /* @__PURE__ */ s.createElement(Y, { style: { width: "220px" } }, f && /* @__PURE__ */ s.createElement("div", { style: { color: "red", fontSize: "12px", marginBottom: "5px" } }, f.message, /* @__PURE__ */ s.createElement(
    N,
    {
      onClick: h,
      style: { marginLeft: "5px", fontSize: "10px" }
    },
    "Clear"
  )), /* @__PURE__ */ s.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ s.createElement(
    le,
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
          text: g("Retry Validation", c),
          value: "validate",
          disabled: y,
          onClick: () => i()
        },
        {
          key: "load",
          text: g("Load Bulk Import", d),
          value: "load",
          disabled: y,
          onClick: () => o()
        },
        {
          key: "status",
          text: g("Get Status", p),
          value: "status",
          disabled: y,
          onClick: () => l()
        },
        {
          key: "delete",
          text: g("Delete", u),
          value: "delete",
          disabled: y,
          onClick: () => a()
        }
      ]
    }
  ), /* @__PURE__ */ s.createElement(
    N,
    {
      basic: !0,
      size: "tiny",
      disabled: y,
      as: "a",
      href: `${n.resultPath}/${e.id}`
    },
    /* @__PURE__ */ s.createElement($, { name: "eye" }),
    "View"
  ))));
}, rb = ({ children: e }) => /* @__PURE__ */ s.createElement(F, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ s.createElement(kn, null, /* @__PURE__ */ s.createElement(it, null, /* @__PURE__ */ s.createElement(W, null, "ID"), /* @__PURE__ */ s.createElement(W, null, "Date Created"), /* @__PURE__ */ s.createElement(W, null, "Status"), /* @__PURE__ */ s.createElement(W, null, "Records"), /* @__PURE__ */ s.createElement(W, null, "Serializer"), /* @__PURE__ */ s.createElement(W, null, "Mode"), /* @__PURE__ */ s.createElement(W, null, "Actions"))), /* @__PURE__ */ s.createElement(Ln, null, e)), ae = {
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
}, nb = () => {
  const [e, t] = k(
    {}
  ), [r, n] = k(!0), { values: a, submitForm: i, isSubmitting: o, isValid: l, setFieldValue: u } = Ds(), c = A(async () => {
    try {
      const f = await KE(), h = {};
      for (const g of f) {
        const y = await YE(g);
        y && (h[g] = y);
      }
      t(h);
    } catch (f) {
      console.error("Error fetching record types:", f);
    } finally {
      n(!1);
    }
  }, []), d = (f) => {
    var g;
    const h = ((g = f.target.files) == null ? void 0 : g[0]) || null;
    u("metadata", h);
  }, p = (f) => {
    u("files", f);
  };
  return De(() => {
    c();
  }, [c]), {
    configs: e,
    isLoading: r,
    values: a,
    submitForm: i,
    setFieldValue: u,
    handleFileChange: d,
    handleFilesChange: p,
    isSubmitting: o,
    isValid: l
  };
}, ab = ({ progress: e }) => {
  const {
    configs: t,
    isLoading: r,
    submitForm: n,
    handleFileChange: a,
    handleFilesChange: i,
    values: o,
    isSubmitting: l,
    isValid: u
  } = nb();
  return r ? /* @__PURE__ */ s.createElement("p", null, "Loading record types...") : !t || Object.keys(t).length === 0 ? /* @__PURE__ */ s.createElement("p", null, "No record types available.") : /* @__PURE__ */ s.createElement(Ht, null, /* @__PURE__ */ s.createElement(
    Os,
    {
      fieldPath: "task.title",
      label: "Title",
      placeholder: "Enter a title for the import task",
      required: !0
    }
  ), /* @__PURE__ */ s.createElement(Ee.Group, { widths: "equal" }, /* @__PURE__ */ s.createElement(
    _t,
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
  ), /* @__PURE__ */ s.createElement(
    _t,
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
  ), /* @__PURE__ */ s.createElement(
    _t,
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
    fs,
    {
      value: o.files || [],
      onChange: i,
      accept: "*",
      maxSize: 10 * 1024 * 1024 * 1024,
      maxFiles: 100
    }
  ), /* @__PURE__ */ s.createElement("p", { style: { marginTop: "8px", fontSize: "12px", color: "#666" } }, "Upload files related to the records. You can upload multiple files, and they will be associated with the import task.")), /* @__PURE__ */ s.createElement(
    Rs,
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
    e && /* @__PURE__ */ s.createElement(hi, { progress: e }),
    /* @__PURE__ */ s.createElement(
      N,
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
var Ut;
try {
  Ut = Map;
} catch {
}
var Nt;
try {
  Nt = Set;
} catch {
}
function xi(e, t, r) {
  if (!e || typeof e != "object" || typeof e == "function")
    return e;
  if (e.nodeType && "cloneNode" in e)
    return e.cloneNode(!0);
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof RegExp)
    return new RegExp(e);
  if (Array.isArray(e))
    return e.map(Bt);
  if (Ut && e instanceof Ut)
    return new Map(Array.from(e.entries()));
  if (Nt && e instanceof Nt)
    return new Set(Array.from(e.values()));
  if (e instanceof Object) {
    t.push(e);
    var n = Object.create(e);
    r.push(n);
    for (var a in e) {
      var i = t.findIndex(function(o) {
        return o === e[a];
      });
      n[a] = i > -1 ? r[i] : xi(e[a], t, r);
    }
    return n;
  }
  return e;
}
function Bt(e) {
  return xi(e, [], []);
}
const ib = Object.prototype.toString, sb = Error.prototype.toString, ob = RegExp.prototype.toString, lb = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", ub = /^Symbol\((.*)\)(.*)$/;
function cb(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function cn(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return cb(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return lb.call(e).replace(ub, "Symbol($1)");
  const n = ib.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + sb.call(e) + "]" : n === "RegExp" ? ob.call(e) : null;
}
function Pe(e, t) {
  let r = cn(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let i = cn(this[n], t);
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
    let a = n != null && n !== r, i = `${e} must be a \`${t}\` type, but the final value was: \`${Pe(r, !0)}\`` + (a ? ` (cast from the value \`${Pe(n, !0)}\`).` : ".");
    return r === null && (i += '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'), i;
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
}, db = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, zt = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, pb = {
  isValue: "${path} field must be ${value}"
}, Mt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, fb = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: pe,
  string: H,
  number: db,
  date: zt,
  object: Mt,
  array: fb,
  boolean: pb
});
var hb = Object.prototype, gb = hb.hasOwnProperty;
function mb(e, t) {
  return e != null && gb.call(e, t);
}
var yb = mb, vb = yb, Eb = Yn;
function bb(e, t) {
  return e != null && Eb(e, t, vb);
}
var Sb = bb;
const tt = /* @__PURE__ */ R(Sb), Ci = (e) => e && e.__isYupSchema__;
class $b {
  constructor(t, r) {
    if (this.fn = void 0, this.refs = t, this.refs = t, typeof r == "function") {
      this.fn = r;
      return;
    }
    if (!tt(r, "is"))
      throw new TypeError("`is:` is required for `when()` conditions");
    if (!r.then && !r.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: a,
      otherwise: i
    } = r, o = typeof n == "function" ? n : (...l) => l.every((u) => u === n);
    this.fn = function(...l) {
      let u = l.pop(), c = l.pop(), d = o(...l) ? a : i;
      if (d)
        return typeof d == "function" ? d(c) : c.concat(d.resolve(u));
    };
  }
  resolve(t, r) {
    let n = this.refs.map((i) => i.getValue(r == null ? void 0 : r.value, r == null ? void 0 : r.parent, r == null ? void 0 : r.context)), a = this.fn.apply(t, n.concat(t, r));
    if (a === void 0 || a === t)
      return t;
    if (!Ci(a))
      throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
function wi(e) {
  return e == null ? [] : [].concat(e);
}
function Qt() {
  return Qt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qt.apply(this, arguments);
}
let _b = /\$\{\s*(\w+)\s*\}/g;
class M extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Qt({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(_b, (a, i) => Pe(r[i])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], wi(t).forEach((i) => {
      M.isError(i) ? (this.errors.push(...i.errors), this.inner = this.inner.concat(i.inner.length ? i.inner : i)) : this.errors.push(i);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, M);
  }
}
const xb = (e) => {
  let t = !1;
  return (...r) => {
    t || (t = !0, e(...r));
  };
};
function jt(e, t) {
  let {
    endEarly: r,
    tests: n,
    args: a,
    value: i,
    errors: o,
    sort: l,
    path: u
  } = e, c = xb(t), d = n.length;
  const p = [];
  if (o = o || [], !d)
    return o.length ? c(new M(o, i, u)) : c(null, i);
  for (let f = 0; f < n.length; f++) {
    const h = n[f];
    h(a, function(y) {
      if (y) {
        if (!M.isError(y))
          return c(y, i);
        if (r)
          return y.value = i, c(y, i);
        p.push(y);
      }
      if (--d <= 0) {
        if (p.length && (l && p.sort(l), o.length && p.push(...o), o = p), o.length) {
          c(new M(o, i, u), i);
          return;
        }
        c(null, i);
      }
    });
  }
}
function Cb(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), l = o.length; l--; ) {
      var u = o[e ? l : ++a];
      if (r(i[u], u, i) === !1)
        break;
    }
    return t;
  };
}
var wb = Cb, Fb = wb, Tb = Fb(), Ib = Tb, Ab = Ib, Ob = Be;
function Rb(e, t) {
  return e && Ab(e, t, Ob);
}
var Fi = Rb, Pb = "__lodash_hash_undefined__";
function Db(e) {
  return this.__data__.set(e, Pb), this;
}
var kb = Db;
function Lb(e) {
  return this.__data__.has(e);
}
var Ub = Lb, Nb = tr, Bb = kb, zb = Ub;
function rt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Nb(); ++t < r; )
    this.add(e[t]);
}
rt.prototype.add = rt.prototype.push = Bb;
rt.prototype.has = zb;
var Mb = rt;
function Qb(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var jb = Qb;
function qb(e, t) {
  return e.has(t);
}
var Gb = qb, Vb = Mb, Hb = jb, Kb = Gb, Yb = 1, Wb = 2;
function Zb(e, t, r, n, a, i) {
  var o = r & Yb, l = e.length, u = t.length;
  if (l != u && !(o && u > l))
    return !1;
  var c = i.get(e), d = i.get(t);
  if (c && d)
    return c == t && d == e;
  var p = -1, f = !0, h = r & Wb ? new Vb() : void 0;
  for (i.set(e, t), i.set(t, e); ++p < l; ) {
    var g = e[p], y = t[p];
    if (n)
      var E = o ? n(y, g, p, t, e, i) : n(g, y, p, e, t, i);
    if (E !== void 0) {
      if (E)
        continue;
      f = !1;
      break;
    }
    if (h) {
      if (!Hb(t, function(m, S) {
        if (!Kb(h, S) && (g === m || a(g, m, r, n, i)))
          return h.push(S);
      })) {
        f = !1;
        break;
      }
    } else if (!(g === y || a(g, y, r, n, i))) {
      f = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), f;
}
var Ti = Zb;
function Jb(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var Xb = Jb;
function e0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var t0 = e0, dn = $e, pn = sa, r0 = dt, n0 = Ti, a0 = Xb, i0 = t0, s0 = 1, o0 = 2, l0 = "[object Boolean]", u0 = "[object Date]", c0 = "[object Error]", d0 = "[object Map]", p0 = "[object Number]", f0 = "[object RegExp]", h0 = "[object Set]", g0 = "[object String]", m0 = "[object Symbol]", y0 = "[object ArrayBuffer]", v0 = "[object DataView]", fn = dn ? dn.prototype : void 0, wt = fn ? fn.valueOf : void 0;
function E0(e, t, r, n, a, i, o) {
  switch (r) {
    case v0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case y0:
      return !(e.byteLength != t.byteLength || !i(new pn(e), new pn(t)));
    case l0:
    case u0:
    case p0:
      return r0(+e, +t);
    case c0:
      return e.name == t.name && e.message == t.message;
    case f0:
    case g0:
      return e == t + "";
    case d0:
      var l = a0;
    case h0:
      var u = n & s0;
      if (l || (l = i0), e.size != t.size && !u)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      n |= o0, o.set(e, t);
      var d = n0(l(e), l(t), n, a, i, o);
      return o.delete(e), d;
    case m0:
      if (wt)
        return wt.call(e) == wt.call(t);
  }
  return !1;
}
var b0 = E0, hn = ia, S0 = 1, $0 = Object.prototype, _0 = $0.hasOwnProperty;
function x0(e, t, r, n, a, i) {
  var o = r & S0, l = hn(e), u = l.length, c = hn(t), d = c.length;
  if (u != d && !o)
    return !1;
  for (var p = u; p--; ) {
    var f = l[p];
    if (!(o ? f in t : _0.call(t, f)))
      return !1;
  }
  var h = i.get(e), g = i.get(t);
  if (h && g)
    return h == t && g == e;
  var y = !0;
  i.set(e, t), i.set(t, e);
  for (var E = o; ++p < u; ) {
    f = l[p];
    var m = e[f], S = t[f];
    if (n)
      var I = o ? n(S, m, f, t, e, i) : n(m, S, f, e, t, i);
    if (!(I === void 0 ? m === S || a(m, S, r, n, i) : I)) {
      y = !1;
      break;
    }
    E || (E = f == "constructor");
  }
  if (y && !E) {
    var L = e.constructor, J = t.constructor;
    L != J && "constructor" in e && "constructor" in t && !(typeof L == "function" && L instanceof L && typeof J == "function" && J instanceof J) && (y = !1);
  }
  return i.delete(e), i.delete(t), y;
}
var C0 = x0, Ft = lr, w0 = Ti, F0 = b0, T0 = C0, gn = ke, mn = Q, yn = ut, I0 = Jt, A0 = 1, vn = "[object Arguments]", En = "[object Array]", je = "[object Object]", O0 = Object.prototype, bn = O0.hasOwnProperty;
function R0(e, t, r, n, a, i) {
  var o = mn(e), l = mn(t), u = o ? En : gn(e), c = l ? En : gn(t);
  u = u == vn ? je : u, c = c == vn ? je : c;
  var d = u == je, p = c == je, f = u == c;
  if (f && yn(e)) {
    if (!yn(t))
      return !1;
    o = !0, d = !1;
  }
  if (f && !d)
    return i || (i = new Ft()), o || I0(e) ? w0(e, t, r, n, a, i) : F0(e, t, u, r, n, a, i);
  if (!(r & A0)) {
    var h = d && bn.call(e, "__wrapped__"), g = p && bn.call(t, "__wrapped__");
    if (h || g) {
      var y = h ? e.value() : e, E = g ? t.value() : t;
      return i || (i = new Ft()), a(y, E, r, n, i);
    }
  }
  return f ? (i || (i = new Ft()), T0(e, t, r, n, a, i)) : !1;
}
var P0 = R0, D0 = P0, Sn = ee;
function Ii(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Sn(e) && !Sn(t) ? e !== e && t !== t : D0(e, t, r, n, Ii, a);
}
var Ai = Ii, k0 = lr, L0 = Ai, U0 = 1, N0 = 2;
function B0(e, t, r, n) {
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
    var u = l[0], c = e[u], d = l[1];
    if (o && l[2]) {
      if (c === void 0 && !(u in e))
        return !1;
    } else {
      var p = new k0();
      if (n)
        var f = n(c, d, u, e, t, p);
      if (!(f === void 0 ? L0(d, c, U0 | N0, n, p) : f))
        return !1;
    }
  }
  return !0;
}
var z0 = B0, M0 = ie;
function Q0(e) {
  return e === e && !M0(e);
}
var Oi = Q0, j0 = Oi, q0 = Be;
function G0(e) {
  for (var t = q0(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, j0(a)];
  }
  return t;
}
var V0 = G0;
function H0(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Ri = H0, K0 = z0, Y0 = V0, W0 = Ri;
function Z0(e) {
  var t = Y0(e);
  return t.length == 1 && t[0][2] ? W0(t[0][0], t[0][1]) : function(r) {
    return r === e || K0(r, e, t);
  };
}
var J0 = Z0, X0 = Ai, eS = Kn, tS = ar, rS = er, nS = Oi, aS = Ri, iS = Ue, sS = 1, oS = 2;
function lS(e, t) {
  return rS(e) && nS(t) ? aS(iS(e), t) : function(r) {
    var n = eS(r, e);
    return n === void 0 && n === t ? tS(r, e) : X0(t, n, sS | oS);
  };
}
var uS = lS;
function cS(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var dS = cS, pS = nr;
function fS(e) {
  return function(t) {
    return pS(t, e);
  };
}
var hS = fS, gS = dS, mS = hS, yS = er, vS = Ue;
function ES(e) {
  return yS(e) ? gS(vS(e)) : mS(e);
}
var bS = ES, SS = J0, $S = uS, _S = sr, xS = Q, CS = bS;
function wS(e) {
  return typeof e == "function" ? e : e == null ? _S : typeof e == "object" ? xS(e) ? $S(e[0], e[1]) : SS(e) : CS(e);
}
var Pi = wS, FS = yt, TS = Fi, IS = Pi;
function AS(e, t) {
  var r = {};
  return t = IS(t), TS(e, function(n, a, i) {
    FS(r, a, t(n, a, i));
  }), r;
}
var OS = AS;
const Di = /* @__PURE__ */ R(OS);
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
var RS = /[^.^\]^[]+|(?=\[\]|\.\.)/g, ki = /^\d+$/, PS = /^\d/, DS = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, kS = /^\s*(['"]?)(.*?)(\1)\s*$/, br = 512, $n = new ge(br), _n = new ge(br), xn = new ge(br), St = {
  Cache: ge,
  split: qt,
  normalizePath: Tt,
  setter: function(e) {
    var t = Tt(e);
    return _n.get(e) || _n.set(e, function(n, a) {
      for (var i = 0, o = t.length, l = n; i < o - 1; ) {
        var u = t[i];
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return n;
        l = l[t[i++]];
      }
      l[t[i]] = a;
    });
  },
  getter: function(e, t) {
    var r = Tt(e);
    return xn.get(e) || xn.set(e, function(a) {
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
      return t + (Sr(r) || ki.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    LS(Array.isArray(e) ? e : qt(e), t, r);
  }
};
function Tt(e) {
  return $n.get(e) || $n.set(
    e,
    qt(e).map(function(t) {
      return t.replace(kS, "$2");
    })
  );
}
function qt(e) {
  return e.match(RS) || [""];
}
function LS(e, t, r) {
  var n = e.length, a, i, o, l;
  for (i = 0; i < n; i++)
    a = e[i], a && (BS(a) && (a = '"' + a + '"'), l = Sr(a), o = !l && /^\d+$/.test(a), t.call(r, a, l, o, i, e));
}
function Sr(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function US(e) {
  return e.match(PS) && !e.match(ki);
}
function NS(e) {
  return DS.test(e);
}
function BS(e) {
  return !Sr(e) && (US(e) || NS(e));
}
const qe = {
  context: "$",
  value: "."
};
class ue {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
      throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === qe.context, this.isValue = this.key[0] === qe.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? qe.context : this.isValue ? qe.value : "";
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
ue.prototype.__isYupRef = !0;
function nt() {
  return nt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, nt.apply(this, arguments);
}
function zS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Ge(e) {
  function t(r, n) {
    let {
      value: a,
      path: i = "",
      label: o,
      options: l,
      originalValue: u,
      sync: c
    } = r, d = zS(r, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name: p,
      test: f,
      params: h,
      message: g
    } = e;
    let {
      parent: y,
      context: E
    } = l;
    function m(b) {
      return ue.isRef(b) ? b.getValue(a, y, E) : b;
    }
    function S(b = {}) {
      const re = Di(nt({
        value: a,
        originalValue: u,
        label: o,
        path: b.path || i
      }, h, b.params), m), ne = new M(M.formatError(b.message || g, re), a, re.path, b.type || p);
      return ne.params = re, ne;
    }
    let I = nt({
      path: i,
      parent: y,
      type: p,
      createError: S,
      resolve: m,
      options: l,
      originalValue: u
    }, d);
    if (!c) {
      try {
        Promise.resolve(f.call(I, a, I)).then((b) => {
          M.isError(b) ? n(b) : b ? n(null, b) : n(S());
        }).catch(n);
      } catch (b) {
        n(b);
      }
      return;
    }
    let L;
    try {
      var J;
      if (L = f.call(I, a, I), typeof ((J = L) == null ? void 0 : J.then) == "function")
        throw new Error(`Validation test of type: "${I.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (b) {
      n(b);
      return;
    }
    M.isError(L) ? n(L) : L ? n(null, L) : n(S());
  }
  return t.OPTIONS = e, t;
}
let MS = (e) => e.substr(0, e.length - 1).substr(1);
function QS(e, t, r, n = r) {
  let a, i, o;
  return t ? (St.forEach(t, (l, u, c) => {
    let d = u ? MS(l) : l;
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
    i = d, o = u ? "[" + l + "]" : "." + l;
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
class at {
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
    const t = new at();
    return t.list = new Set(this.list), t.refs = new Map(this.refs), t;
  }
  merge(t, r) {
    const n = this.clone();
    return t.list.forEach((a) => n.add(a)), t.refs.forEach((a) => n.add(a)), r.list.forEach((a) => n.delete(a)), r.refs.forEach((a) => n.delete(a)), n;
  }
}
function q() {
  return q = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, q.apply(this, arguments);
}
class B {
  constructor(t) {
    this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new at(), this._blacklist = new at(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(pe.notType);
    }), this.type = (t == null ? void 0 : t.type) || "mixed", this.spec = q({
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
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = q({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Bt(q({}, this.spec, t)), r;
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
    const a = q({}, r.spec, n.spec);
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
    let n = this.resolve(q({
      value: t
    }, r)), a = n._cast(t, r);
    if (t !== void 0 && r.assert !== !1 && n.isType(a) !== !0) {
      let i = Pe(t), o = Pe(a);
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
      strict: u = this.spec.strict,
      abortEarly: c = this.spec.abortEarly
    } = r, d = t;
    u || (d = this._cast(d, q({
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
    this._whitelistError && h.push(this._whitelistError), this._blacklistError && h.push(this._blacklistError), jt({
      args: p,
      value: d,
      path: i,
      sync: a,
      tests: f,
      endEarly: c
    }, (g) => {
      if (g)
        return void n(g, d);
      jt({
        tests: this.tests.concat(h),
        args: p,
        path: i,
        sync: a,
        value: d,
        endEarly: c
      }, n);
    });
  }
  validate(t, r, n) {
    let a = this.resolve(q({}, r, {
      value: t
    }));
    return typeof n == "function" ? a._validate(t, r, n) : new Promise((i, o) => a._validate(t, r, (l, u) => {
      l ? o(l) : i(u);
    }));
  }
  validateSync(t, r) {
    let n = this.resolve(q({}, r, {
      value: t
    })), a;
    return n._validate(t, q({}, r, {
      sync: !0
    }), (i, o) => {
      if (i)
        throw i;
      a = o;
    }), a;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (M.isError(n))
        return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (M.isError(n))
        return !1;
      throw n;
    }
  }
  _getDefault() {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this) : Bt(t);
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
    let n = this.clone(), a = Ge(r), i = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((o) => !(o.OPTIONS.name === r.name && (i || o.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = wi(t).map((i) => new ue(i));
    return a.forEach((i) => {
      i.isSibling && n.deps.push(i.key);
    }), n.conditions.push(new $b(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r._typeError = Ge({
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
    }), n._whitelistError = Ge({
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
    }), n._blacklistError = Ge({
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
      })).filter((i, o, l) => l.findIndex((u) => u.name === i.name) === o)
    };
  }
}
B.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"])
  B.prototype[`${e}At`] = function(t, r, n = {}) {
    const {
      parent: a,
      parentPath: i,
      schema: o
    } = QS(this, t, r, n.context);
    return o[e](a && a[i], q({}, n, {
      parent: a,
      path: t
    }));
  };
for (const e of ["equals", "is"])
  B.prototype[e] = B.prototype.oneOf;
for (const e of ["not", "nope"])
  B.prototype[e] = B.prototype.notOneOf;
B.prototype.optional = B.prototype.notRequired;
const jS = B;
jS.prototype;
const K = (e) => e == null;
let qS = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, GS = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, VS = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, HS = (e) => K(e) || e === e.trim(), KS = {}.toString();
function Oe() {
  return new Li();
}
class Li extends B {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === KS ? t : r;
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
    let n = !1, a, i;
    return r && (typeof r == "object" ? {
      excludeEmptyString: n = !1,
      message: a,
      name: i
    } = r : a = r), this.test({
      name: i || "matches",
      message: a || H.matches,
      params: {
        regex: t
      },
      test: (o) => K(o) || o === "" && n || o.search(t) !== -1
    });
  }
  email(t = H.email) {
    return this.matches(qS, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = H.url) {
    return this.matches(GS, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = H.uuid) {
    return this.matches(VS, {
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
      test: HS
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
Oe.prototype = Li.prototype;
var YS = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function WS(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, a;
  if (a = YS.exec(e)) {
    for (var i = 0, o; o = t[i]; ++i)
      a[o] = +a[o] || 0;
    a[2] = (+a[2] || 1) - 1, a[3] = +a[3] || 1, a[7] = a[7] ? String(a[7]).substr(0, 3) : 0, (a[8] === void 0 || a[8] === "") && (a[9] === void 0 || a[9] === "") ? n = +new Date(a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : (a[8] !== "Z" && a[9] !== void 0 && (r = a[10] * 60 + a[11], a[9] === "+" && (r = 0 - r)), n = Date.UTC(a[1], a[2], a[3], a[4], a[5] + r, a[6], a[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let Ui = /* @__PURE__ */ new Date(""), ZS = (e) => Object.prototype.toString.call(e) === "[object Date]";
class Ni extends B {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = WS(t), isNaN(t) ? Ui : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return ZS(t) && !isNaN(t.getTime());
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
  min(t, r = zt.min) {
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
  max(t, r = zt.max) {
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
Ni.INVALID_DATE = Ui;
Ni.prototype;
function JS(e, t, r, n) {
  var a = -1, i = e == null ? 0 : e.length;
  for (n && i && (r = e[++a]); ++a < i; )
    r = t(r, e[a], a, e);
  return r;
}
var XS = JS;
function e$(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var t$ = e$, r$ = t$, n$ = {
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
}, a$ = r$(n$), i$ = a$, s$ = i$, o$ = Le, l$ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, u$ = "\\u0300-\\u036f", c$ = "\\ufe20-\\ufe2f", d$ = "\\u20d0-\\u20ff", p$ = u$ + c$ + d$, f$ = "[" + p$ + "]", h$ = RegExp(f$, "g");
function g$(e) {
  return e = o$(e), e && e.replace(l$, s$).replace(h$, "");
}
var m$ = g$, y$ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function v$(e) {
  return e.match(y$) || [];
}
var E$ = v$, b$ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function S$(e) {
  return b$.test(e);
}
var $$ = S$, Bi = "\\ud800-\\udfff", _$ = "\\u0300-\\u036f", x$ = "\\ufe20-\\ufe2f", C$ = "\\u20d0-\\u20ff", w$ = _$ + x$ + C$, zi = "\\u2700-\\u27bf", Mi = "a-z\\xdf-\\xf6\\xf8-\\xff", F$ = "\\xac\\xb1\\xd7\\xf7", T$ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", I$ = "\\u2000-\\u206f", A$ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Qi = "A-Z\\xc0-\\xd6\\xd8-\\xde", O$ = "\\ufe0e\\ufe0f", ji = F$ + T$ + I$ + A$, qi = "['’]", Cn = "[" + ji + "]", R$ = "[" + w$ + "]", Gi = "\\d+", P$ = "[" + zi + "]", Vi = "[" + Mi + "]", Hi = "[^" + Bi + ji + Gi + zi + Mi + Qi + "]", D$ = "\\ud83c[\\udffb-\\udfff]", k$ = "(?:" + R$ + "|" + D$ + ")", L$ = "[^" + Bi + "]", Ki = "(?:\\ud83c[\\udde6-\\uddff]){2}", Yi = "[\\ud800-\\udbff][\\udc00-\\udfff]", ye = "[" + Qi + "]", U$ = "\\u200d", wn = "(?:" + Vi + "|" + Hi + ")", N$ = "(?:" + ye + "|" + Hi + ")", Fn = "(?:" + qi + "(?:d|ll|m|re|s|t|ve))?", Tn = "(?:" + qi + "(?:D|LL|M|RE|S|T|VE))?", Wi = k$ + "?", Zi = "[" + O$ + "]?", B$ = "(?:" + U$ + "(?:" + [L$, Ki, Yi].join("|") + ")" + Zi + Wi + ")*", z$ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", M$ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Q$ = Zi + Wi + B$, j$ = "(?:" + [P$, Ki, Yi].join("|") + ")" + Q$, q$ = RegExp([
  ye + "?" + Vi + "+" + Fn + "(?=" + [Cn, ye, "$"].join("|") + ")",
  N$ + "+" + Tn + "(?=" + [Cn, ye + wn, "$"].join("|") + ")",
  ye + "?" + wn + "+" + Fn,
  ye + "+" + Tn,
  M$,
  z$,
  Gi,
  j$
].join("|"), "g");
function G$(e) {
  return e.match(q$) || [];
}
var V$ = G$, H$ = E$, K$ = $$, Y$ = Le, W$ = V$;
function Z$(e, t, r) {
  return e = Y$(e), t = r ? void 0 : t, t === void 0 ? K$(e) ? W$(e) : H$(e) : e.match(t) || [];
}
var J$ = Z$, X$ = XS, e_ = m$, t_ = J$, r_ = "['’]", n_ = RegExp(r_, "g");
function a_(e) {
  return function(t) {
    return X$(t_(e_(t).replace(n_, "")), e, "");
  };
}
var Ji = a_, i_ = Ji, s_ = i_(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), o_ = s_;
const In = /* @__PURE__ */ R(o_);
function l_(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + t];
  return i;
}
var u_ = l_, c_ = u_;
function d_(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : c_(e, t, r);
}
var p_ = d_, f_ = "\\ud800-\\udfff", h_ = "\\u0300-\\u036f", g_ = "\\ufe20-\\ufe2f", m_ = "\\u20d0-\\u20ff", y_ = h_ + g_ + m_, v_ = "\\ufe0e\\ufe0f", E_ = "\\u200d", b_ = RegExp("[" + E_ + f_ + y_ + v_ + "]");
function S_(e) {
  return b_.test(e);
}
var Xi = S_;
function $_(e) {
  return e.split("");
}
var __ = $_, es = "\\ud800-\\udfff", x_ = "\\u0300-\\u036f", C_ = "\\ufe20-\\ufe2f", w_ = "\\u20d0-\\u20ff", F_ = x_ + C_ + w_, T_ = "\\ufe0e\\ufe0f", I_ = "[" + es + "]", Gt = "[" + F_ + "]", Vt = "\\ud83c[\\udffb-\\udfff]", A_ = "(?:" + Gt + "|" + Vt + ")", ts = "[^" + es + "]", rs = "(?:\\ud83c[\\udde6-\\uddff]){2}", ns = "[\\ud800-\\udbff][\\udc00-\\udfff]", O_ = "\\u200d", as = A_ + "?", is = "[" + T_ + "]?", R_ = "(?:" + O_ + "(?:" + [ts, rs, ns].join("|") + ")" + is + as + ")*", P_ = is + as + R_, D_ = "(?:" + [ts + Gt + "?", Gt, rs, ns, I_].join("|") + ")", k_ = RegExp(Vt + "(?=" + Vt + ")|" + D_ + P_, "g");
function L_(e) {
  return e.match(k_) || [];
}
var U_ = L_, N_ = __, B_ = Xi, z_ = U_;
function M_(e) {
  return B_(e) ? z_(e) : N_(e);
}
var Q_ = M_, j_ = p_, q_ = Xi, G_ = Q_, V_ = Le;
function H_(e) {
  return function(t) {
    t = V_(t);
    var r = q_(t) ? G_(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? j_(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var K_ = H_, Y_ = K_, W_ = Y_("toUpperCase"), Z_ = W_, J_ = Le, X_ = Z_;
function e1(e) {
  return X_(J_(e).toLowerCase());
}
var t1 = e1, r1 = t1, n1 = Ji, a1 = n1(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? r1(t) : t);
}), i1 = a1;
const s1 = /* @__PURE__ */ R(i1);
var o1 = yt, l1 = Fi, u1 = Pi;
function c1(e, t) {
  var r = {};
  return t = u1(t), l1(e, function(n, a, i) {
    o1(r, t(n, a, i), n);
  }), r;
}
var d1 = c1;
const p1 = /* @__PURE__ */ R(d1);
var $r = { exports: {} };
$r.exports = function(e) {
  return ss(f1(e), e);
};
$r.exports.array = ss;
function ss(e, t) {
  var r = e.length, n = new Array(r), a = {}, i = r, o = h1(t), l = g1(e);
  for (t.forEach(function(c) {
    if (!l.has(c[0]) || !l.has(c[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); i--; )
    a[i] || u(e[i], i, /* @__PURE__ */ new Set());
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
          var g = h[--d];
          u(g, l.get(g), p);
        } while (d);
        p.delete(c);
      }
      n[--r] = c;
    }
  }
}
function f1(e) {
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
function g1(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var m1 = $r.exports;
const y1 = /* @__PURE__ */ R(m1);
function v1(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([o, l]) => `${o}-${l}`));
  function i(o, l) {
    let u = St.split(o)[0];
    n.add(u), a.has(`${l}-${u}`) || r.push([l, u]);
  }
  for (const o in e)
    if (tt(e, o)) {
      let l = e[o];
      n.add(o), ue.isRef(l) && l.isSibling ? i(l.path, o) : Ci(l) && "deps" in l && l.deps.forEach((u) => i(u, o));
    }
  return y1.array(Array.from(n), r).reverse();
}
function An(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var i;
    if (((i = t.path) == null ? void 0 : i.indexOf(n)) !== -1)
      return r = a, !0;
  }), r;
}
function os(e) {
  return (t, r) => An(e, t) - An(e, r);
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
let On = (e) => Object.prototype.toString.call(e) === "[object Object]";
function E1(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const b1 = os([]);
class ls extends B {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = b1, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
    return On(t) || typeof t == "function";
  }
  _cast(t, r = {}) {
    var n;
    let a = super._cast(t, r);
    if (a === void 0)
      return this.getDefault();
    if (!this._typeCheck(a))
      return a;
    let i = this.fields, o = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, l = this._nodes.concat(Object.keys(a).filter((p) => this._nodes.indexOf(p) === -1)), u = {}, c = ve({}, r, {
      parent: u,
      __validating: r.__validating || !1
    }), d = !1;
    for (const p of l) {
      let f = i[p], h = tt(a, p);
      if (f) {
        let g, y = a[p];
        c.path = (r.path ? `${r.path}.` : "") + p, f = f.resolve({
          value: y,
          context: r.context,
          parent: u
        });
        let E = "spec" in f ? f.spec : void 0, m = E == null ? void 0 : E.strict;
        if (E != null && E.strip) {
          d = d || p in a;
          continue;
        }
        g = !r.__validating || !m ? (
          // TODO: use _cast, this is double resolving
          f.cast(a[p], c)
        ) : a[p], g !== void 0 && (u[p] = g);
      } else
        h && !o && (u[p] = a[p]);
      u[p] !== a[p] && (d = !0);
    }
    return d ? u : a;
  }
  _validate(t, r = {}, n) {
    let a = [], {
      sync: i,
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
        if (!M.isError(d) || u)
          return void n(d, p);
        a.push(d);
      }
      if (!c || !On(p)) {
        n(a[0] || null, p);
        return;
      }
      l = l || p;
      let f = this._nodes.map((h) => (g, y) => {
        let E = h.indexOf(".") === -1 ? (r.path ? `${r.path}.` : "") + h : `${r.path || ""}["${h}"]`, m = this.fields[h];
        if (m && "validate" in m) {
          m.validate(p[h], ve({}, r, {
            // @ts-ignore
            path: E,
            from: o,
            // inner fields are always strict:
            // 1. this isn't strict so the casting will also have cast inner values
            // 2. this is strict in which case the nested values weren't cast either
            strict: !0,
            parent: p,
            originalValue: l[h]
          }), y);
          return;
        }
        y(null);
      });
      jt({
        sync: i,
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
    return r.fields = ve({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), n = r.fields;
    for (let [a, i] of Object.entries(this.fields)) {
      const o = n[a];
      o === void 0 ? n[a] = i : o instanceof B && i instanceof B && (n[a] = i.concat(o));
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
    return n.fields = a, n._sortErrors = os(Object.keys(a)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = v1(a, n._excludedEdges), n;
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
    return this.transform((i) => {
      if (i == null)
        return i;
      let o = i;
      return tt(i, t) && (o = ve({}, i), n || delete o[t], o[r] = a(i)), o;
    });
  }
  noUnknown(t = !0, r = Mt.noUnknown) {
    typeof t == "string" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(a) {
        if (a == null)
          return !0;
        const i = E1(this.schema, a);
        return !t || i.length === 0 || this.createError({
          params: {
            unknown: i.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = Mt.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => r && p1(r, (n, a) => t(a)));
  }
  camelCase() {
    return this.transformKeys(s1);
  }
  snakeCase() {
    return this.transformKeys(In);
  }
  constantCase() {
    return this.transformKeys((t) => In(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = Di(this.fields, (r) => r.describe()), t;
  }
}
function Ke(e) {
  return new ls(e);
}
Ke.prototype = ls.prototype;
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
  metadata: null,
  files: []
}, $1 = Ke({
  task: Ke({
    title: Oe().required("Title is required"),
    recordType: Oe().required("Record type is required"),
    serializer: Oe().required("Serializer is required"),
    mode: Oe().required("Mode is required")
  }),
  metadata: Ke().nullable()
}), _1 = ({ onSubmit: e }) => {
  const [t, r] = k(void 0), n = async (a) => {
    try {
      await JE(a.task, a.metadata, a.files, {
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
    Ps,
    {
      formik: {
        initialValues: S1,
        validationSchema: $1,
        onSubmit: n
      }
    },
    /* @__PURE__ */ s.createElement(ab, { progress: t })
  );
}, x1 = () => {
  const [e, t] = k(!1), { refreshSearch: r } = bt(), n = A(() => {
    t(!1), r();
  }, [r]);
  return /* @__PURE__ */ s.createElement(
    oe,
    {
      closeIcon: !0,
      onClose: () => t(!1),
      onOpen: () => t(!0),
      open: e,
      trigger: /* @__PURE__ */ s.createElement(N, { color: "green", icon: !0, labelPosition: "left" }, /* @__PURE__ */ s.createElement($, { name: "add" }), "New Import")
    },
    /* @__PURE__ */ s.createElement($s, null, "New Import Task"),
    /* @__PURE__ */ s.createElement(_s, null, /* @__PURE__ */ s.createElement(_1, { onSubmit: n }))
  );
}, C1 = ({
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
  return /* @__PURE__ */ s.createElement(Re, { activeIndex: 0, compact: !0, size: "tiny" }, r.map(({ key: o, label: l, value: u }) => /* @__PURE__ */ s.createElement(
    Re.Item,
    {
      key: o,
      name: o,
      active: (n == null ? void 0 : n[1]) === u || u === null && !n,
      onClick: () => a(u)
    },
    l
  )));
}, us = Qa(C1), w1 = ({
  appId: e = "search"
}) => {
  const { showFacets: t, showImportModal: r } = bt().config;
  return /* @__PURE__ */ s.createElement(v, { id: `${e}.SearchBarRow` }, /* @__PURE__ */ s.createElement(
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
    t && /* @__PURE__ */ s.createElement("div", { style: { flex: "0 0 auto" } }, /* @__PURE__ */ s.createElement(us, null)),
    /* @__PURE__ */ s.createElement("div", { style: { flex: "1 1 auto", minInlineSize: "15rem" } }, /* @__PURE__ */ s.createElement(
      TE,
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
    r && /* @__PURE__ */ s.createElement("div", { style: { flex: "0 0 auto" } }, /* @__PURE__ */ s.createElement(x1, null))
  ));
}, F1 = () => {
  const { config: e } = bt();
  return /* @__PURE__ */ s.createElement(z, null, /* @__PURE__ */ s.createElement(z.Row, { verticalAlign: "middle" }, /* @__PURE__ */ s.createElement(z.Column, { width: 4, textAlign: "left" }, /* @__PURE__ */ s.createElement(iE, { label: (t) => /* @__PURE__ */ s.createElement("div", null, t, " item(s)") })), /* @__PURE__ */ s.createElement(z.Column, { width: 8, textAlign: "center" }, /* @__PURE__ */ s.createElement(hE, { options: { size: "mini" } })), /* @__PURE__ */ s.createElement(z.Column, { width: 4, textAlign: "right" }, /* @__PURE__ */ s.createElement(
    CE,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ s.createElement("p", null, t, " results per page")
    }
  ))));
}, cs = ({
  config: e = {},
  overriddenComponents: t = {}
}) => {
  var i, o, l, u, c;
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
          ...(u = (l = e.searchApi) == null ? void 0 : l.axios) == null ? void 0 : u.headers
        }
      },
      invenio: {
        ...ae.searchApi.invenio,
        ...(c = e.searchApi) == null ? void 0 : c.invenio
      }
    },
    showFacets: e.showFacets ?? !0,
    showImportModal: e.showImportModal ?? !0,
    showSearchFooter: e.showSearchFooter ?? !0
  }, n = new ha(r.searchApi), a = {
    [`${r.appId}.ResultsList.item`]: tb,
    [`${r.appId}.ResultsList.container`]: rb,
    [`${r.appId}.SearchFacets`]: us,
    ...t
  };
  return /* @__PURE__ */ s.createElement(vs.Provider, { value: a }, /* @__PURE__ */ s.createElement(
    qv,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ s.createElement(NE, { config: r }, /* @__PURE__ */ s.createElement(w1, { appId: r.appId }), /* @__PURE__ */ s.createElement(SE, null, /* @__PURE__ */ s.createElement(lE, null), /* @__PURE__ */ s.createElement(Za, null)), r.showSearchFooter && /* @__PURE__ */ s.createElement(F1, null))
  ));
}, T1 = ({
  totalRecords: e = 0,
  validatedRecords: t = 0,
  errorRecords: r = 0,
  successRecords: n = 0,
  showWhenEmpty: a = !1,
  className: i = "",
  style: o = {}
}) => {
  const l = e > 0 ? t / e * 100 : 0, u = e > 0 ? r / e * 100 : 0, c = e > 0 ? n / e * 100 : 0;
  if (e === 0 && !a)
    return null;
  const d = [
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
      label: "with Errors",
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
  return /* @__PURE__ */ s.createElement(G, { basic: !0, className: i, style: o }, /* @__PURE__ */ s.createElement(z, { columns: 3, stackable: !0 }, d.map((p) => /* @__PURE__ */ s.createElement(z.Column, { key: p.title }, /* @__PURE__ */ s.createElement(P, { fluid: !0 }, /* @__PURE__ */ s.createElement(P.Content, null, /* @__PURE__ */ s.createElement(P.Header, { textAlign: "center" }, p.title), /* @__PURE__ */ s.createElement(P.Description, { textAlign: "center" }, /* @__PURE__ */ s.createElement(
    $t,
    {
      size: "large",
      color: p.color,
      style: { margin: "1rem 0" }
    },
    /* @__PURE__ */ s.createElement($t.Value, null, p.value),
    /* @__PURE__ */ s.createElement($t.Label, null, p.label)
  ), /* @__PURE__ */ s.createElement(G, { basic: !0, textAlign: "center" }, /* @__PURE__ */ s.createElement(
    G.Inline,
    {
      basic: !0,
      size: "small",
      style: { marginBottom: "0.5rem" }
    },
    p.progressLabel
  ), /* @__PURE__ */ s.createElement(
    xs,
    {
      percent: p.progress,
      color: p.color,
      size: "small",
      style: { marginBottom: "0.5rem" }
    }
  )))))))));
}, ds = ms(
  void 0
), I1 = ({
  taskId: e,
  children: t
}) => /* @__PURE__ */ s.createElement(ds.Provider, { value: { taskId: e } }, /* @__PURE__ */ s.createElement(
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
)), ps = () => {
  const e = T(ds);
  if (!e)
    throw new Error("useTaskDetails must be used within a TaskDetailsProvider");
  return e;
}, A1 = ({ children: e }) => /* @__PURE__ */ s.createElement(F, { padded: !0, size: "small", comp: !0 }, /* @__PURE__ */ s.createElement(kn, null, /* @__PURE__ */ s.createElement(it, null, /* @__PURE__ */ s.createElement(W, null, "ID"), /* @__PURE__ */ s.createElement(W, null, "Title"), /* @__PURE__ */ s.createElement(W, null, "Status"), /* @__PURE__ */ s.createElement(W, null))), /* @__PURE__ */ s.createElement(Ln, null, e)), O1 = ({ record: e }) => /* @__PURE__ */ s.createElement(G, null, /* @__PURE__ */ s.createElement(_, null, /* @__PURE__ */ s.createElement(_.Item, null, /* @__PURE__ */ s.createElement(_.Icon, { name: "tag" }), /* @__PURE__ */ s.createElement(_.Content, null, /* @__PURE__ */ s.createElement(_.Header, null, "Record ID"), /* @__PURE__ */ s.createElement(_.Description, null, e.id))), /* @__PURE__ */ s.createElement(_.Item, null, /* @__PURE__ */ s.createElement(_.Icon, { name: "calendar" }), /* @__PURE__ */ s.createElement(_.Content, null, /* @__PURE__ */ s.createElement(_.Header, null, "Created"), /* @__PURE__ */ s.createElement(_.Description, null, kt(e.created)))), /* @__PURE__ */ s.createElement(_.Item, null, /* @__PURE__ */ s.createElement(_.Icon, { name: "edit" }), /* @__PURE__ */ s.createElement(_.Content, null, /* @__PURE__ */ s.createElement(_.Header, null, "Updated"), /* @__PURE__ */ s.createElement(_.Description, null, kt(e.updated)))), e.generated_record_id && /* @__PURE__ */ s.createElement(_.Item, null, /* @__PURE__ */ s.createElement(_.Icon, { name: "file alternate" }), /* @__PURE__ */ s.createElement(_.Content, null, /* @__PURE__ */ s.createElement(_.Header, null, "Generated Record ID"), /* @__PURE__ */ s.createElement(_.Description, null, /* @__PURE__ */ s.createElement(
  "a",
  {
    href: `/records/${e.generated_record_id}`,
    target: "_blank",
    rel: "noopener noreferrer"
  },
  "/",
  e.generated_record_id
)))))), R1 = ({ record: e }) => /* @__PURE__ */ s.createElement(G, null, e.errors.map((t, r) => /* @__PURE__ */ s.createElement(U, { key: `error-${r}-${t.type}`, negative: !0 }, /* @__PURE__ */ s.createElement(U.Header, null, t.type), /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Location:"), " ", t.loc), /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Message:"), " ", t.msg)))), P1 = ({ record: e }) => {
  var r, n;
  return (((r = e.record_files) == null ? void 0 : r.length) ?? 0) > 0 || (((n = e.validated_record_files) == null ? void 0 : n.length) ?? 0) > 0 ? /* @__PURE__ */ s.createElement(G, null, e.record_files && e.record_files.length > 0 && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(fe, { as: "h4" }, /* @__PURE__ */ s.createElement($, { name: "file" }), "File List"), /* @__PURE__ */ s.createElement(_, { bulleted: !0 }, e.record_files.map((a) => /* @__PURE__ */ s.createElement(_.Item, { key: `file-${a}` }, /* @__PURE__ */ s.createElement(_.Content, null, a))))), e.validated_record_files && e.validated_record_files.length > 0 && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(fe, { as: "h4" }, /* @__PURE__ */ s.createElement($, { name: "checkmark" }), "Validated Files"), /* @__PURE__ */ s.createElement(F, { celled: !0 }, /* @__PURE__ */ s.createElement(F.Header, null, /* @__PURE__ */ s.createElement(F.Row, null, /* @__PURE__ */ s.createElement(F.HeaderCell, null, "File"), /* @__PURE__ */ s.createElement(F.HeaderCell, null, "Size"), /* @__PURE__ */ s.createElement(F.HeaderCell, null, "Origin"), /* @__PURE__ */ s.createElement(F.HeaderCell, null, "Path"))), /* @__PURE__ */ s.createElement(F.Body, null, e.validated_record_files.map((a, i) => /* @__PURE__ */ s.createElement(F.Row, { key: `validated-${a.key}-${i}` }, /* @__PURE__ */ s.createElement(F.Cell, null, /* @__PURE__ */ s.createElement($, { name: "file" }), a.key), /* @__PURE__ */ s.createElement(F.Cell, null, (a.size / 1024).toFixed(2), " KB"), /* @__PURE__ */ s.createElement(F.Cell, null, a.origin), /* @__PURE__ */ s.createElement(F.Cell, { style: { wordBreak: "break-all" } }, a.full_path))))))) : /* @__PURE__ */ s.createElement(U, { info: !0 }, /* @__PURE__ */ s.createElement(U.Header, null, "No Files"), /* @__PURE__ */ s.createElement("p", null, "No files are associated with this record."));
}, D1 = ({ record: e }) => /* @__PURE__ */ s.createElement(F, { celled: !0, striped: !0 }, /* @__PURE__ */ s.createElement(F.Header, null, /* @__PURE__ */ s.createElement(F.Row, null, /* @__PURE__ */ s.createElement(F.HeaderCell, null, "Field"), /* @__PURE__ */ s.createElement(F.HeaderCell, null, "Value"))), /* @__PURE__ */ s.createElement(F.Body, null, Object.entries(e.src_data).filter(([t, r]) => r && r.trim() !== "").map(([t, r]) => /* @__PURE__ */ s.createElement(F.Row, { key: t }, /* @__PURE__ */ s.createElement(F.Cell, null, /* @__PURE__ */ s.createElement("strong", null, t)), /* @__PURE__ */ s.createElement(F.Cell, { style: { wordBreak: "break-word" } }, r))))), k1 = ({
  record: e,
  open: t,
  onClose: r,
  initialTab: n = 0
}) => {
  const [a, i] = k(n);
  De(() => {
    t && i(n);
  }, [t, n]);
  const o = (c, d) => {
    const p = typeof d.activeIndex == "number" ? d.activeIndex : 0;
    i(p);
  }, l = [
    {
      menuItem: { key: "basic", icon: "info circle", content: "Basic Info" },
      render: () => /* @__PURE__ */ s.createElement(Te.Pane, null, /* @__PURE__ */ s.createElement(O1, { record: e }))
    },
    {
      menuItem: { key: "source", icon: "database", content: "Source Data" },
      render: () => /* @__PURE__ */ s.createElement(Te.Pane, null, /* @__PURE__ */ s.createElement(D1, { record: e }))
    },
    ...e.errors && e.errors.length > 0 ? [
      {
        menuItem: {
          key: "errors",
          icon: "exclamation triangle",
          content: `Errors (${e.errors.length})`
        },
        render: () => /* @__PURE__ */ s.createElement(Te.Pane, null, /* @__PURE__ */ s.createElement(R1, { record: e }))
      }
    ] : [],
    {
      menuItem: { key: "files", icon: "file", content: "Files" },
      render: () => /* @__PURE__ */ s.createElement(Te.Pane, null, /* @__PURE__ */ s.createElement(P1, { record: e }))
    }
  ], u = () => {
    var c, d, p, f, h;
    return ((d = (c = e.serializer_data) == null ? void 0 : c.metadata) == null ? void 0 : d.title) || ((f = (p = e.transformed_data) == null ? void 0 : p.metadata) == null ? void 0 : f.title) || ((h = e.src_data) == null ? void 0 : h.title) || `Record ${e.id}`;
  };
  return /* @__PURE__ */ s.createElement(oe, { open: t, onClose: r, size: "large", closeIcon: !0 }, /* @__PURE__ */ s.createElement(oe.Header, null, /* @__PURE__ */ s.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    },
    /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement($, { name: "file alternate outline" }), u()),
    /* @__PURE__ */ s.createElement(BE, { status: e.status })
  )), /* @__PURE__ */ s.createElement(oe.Content, { scrolling: !0 }, /* @__PURE__ */ s.createElement(
    Te,
    {
      panes: l,
      activeIndex: a,
      onTabChange: o
    }
  )), /* @__PURE__ */ s.createElement(oe.Actions, null, /* @__PURE__ */ s.createElement(N, { onClick: r }, /* @__PURE__ */ s.createElement($, { name: "close" }), "Close")));
}, L1 = ({
  result: e,
  index: t
}) => {
  var g;
  const [r, n] = k(
    "idle"
  ), [a, i] = k(!1), [o, l] = k(0);
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
  }, c = e.errors && e.errors.length > 0, d = qE(e.status), p = () => c ? 2 : -1, f = (y) => y === "red" ? "times" : y === "green" || y === "blue" ? "check" : "question", h = [
    ...c ? [
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
          await eb(e.id), console.log(`Record ${e.id} is being processed.`);
        } catch (y) {
          console.error("Error running record:", y);
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
  return /* @__PURE__ */ s.createElement(it, { key: t }, /* @__PURE__ */ s.createElement(Y, null, /* @__PURE__ */ s.createElement("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem" } }, /* @__PURE__ */ s.createElement("code", { style: { fontSize: "0.9em", color: "#666" } }, e.id.length > 20 ? `${e.id.substring(0, 20)}…` : e.id), /* @__PURE__ */ s.createElement(
    _r,
    {
      content: r === "copied" ? "Copied!" : "Copy ID",
      trigger: /* @__PURE__ */ s.createElement(
        N,
        {
          size: "mini",
          circular: !0,
          icon: !0,
          loading: r === "copying",
          onClick: u,
          color: r === "copied" ? "green" : void 0
        },
        /* @__PURE__ */ s.createElement($, { name: r === "copied" ? "check" : "copy" })
      ),
      position: "top center",
      size: "mini"
    }
  ))), /* @__PURE__ */ s.createElement(Y, null, /* @__PURE__ */ s.createElement("div", { style: { maxWidth: "300px" } }, ((g = e.src_data) == null ? void 0 : g.title) || /* @__PURE__ */ s.createElement("em", { style: { color: "#999" } }, "No Title Available"))), /* @__PURE__ */ s.createElement(Y, null, /* @__PURE__ */ s.createElement(se, { color: d, size: "small" }, /* @__PURE__ */ s.createElement($, { name: f(d) }), et(e.status)), c && /* @__PURE__ */ s.createElement(
    _r,
    {
      content: `${e.errors.length} error${e.errors.length > 1 ? "s" : ""} found`,
      trigger: /* @__PURE__ */ s.createElement(
        $,
        {
          name: "exclamation triangle",
          color: "red",
          style: { marginLeft: "0.5rem", cursor: "help" }
        }
      ),
      position: "top center",
      size: "mini"
    }
  )), /* @__PURE__ */ s.createElement(Y, { textAlign: "right" }, /* @__PURE__ */ s.createElement(
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
    /* @__PURE__ */ s.createElement(le.Menu, null, h.map((y) => /* @__PURE__ */ s.createElement(
      le.Item,
      {
        key: y.key,
        icon: y.icon,
        text: y.text,
        disabled: y.disabled,
        onClick: y.onClick
      }
    )))
  ), /* @__PURE__ */ s.createElement(
    k1,
    {
      record: e,
      open: a,
      onClose: () => i(!1),
      initialTab: o
    }
  )));
}, U1 = () => {
  const { taskId: e } = ps(), t = {
    "search.SearchBarRow": () => null,
    "search.ResultsList.container": A1,
    "search.ResultsList.item": L1
  };
  return /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(fe, { as: "h3" }, "Task Records"), /* @__PURE__ */ s.createElement(
    cs,
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
}, N1 = ({
  fileInputRef: e,
  accept: t,
  maxSize: r,
  maxFiles: n,
  disabled: a = !1,
  isDragOver: i,
  uploadFiles: o,
  onInputChange: l,
  onDragOver: u,
  onDragLeave: c,
  onDrop: d,
  onFileDialogOpen: p
}) => /* @__PURE__ */ s.createElement(Ht, null, /* @__PURE__ */ s.createElement(
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
  G,
  {
    placeholder: !0,
    className: `file-drop-zone ${i ? "drag-over" : ""}`,
    onDragOver: u,
    onDragLeave: c,
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
    $,
    {
      name: "cloud upload",
      size: "huge",
      color: i ? "blue" : "grey"
    }
  ), /* @__PURE__ */ s.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ s.createElement("p", null, /* @__PURE__ */ s.createElement("strong", null, "Drop files here or click to select")), /* @__PURE__ */ s.createElement("p", { style: { fontSize: "12px", color: "#666" } }, "Max size: ", Er(r), " | Max files: ", n), o.length > 0 && /* @__PURE__ */ s.createElement(
    "p",
    {
      style: { fontSize: "12px", color: "#2185d0", marginTop: "8px" }
    },
    /* @__PURE__ */ s.createElement("strong", null, o.length, " files selected •", " ", mi(o), " total")
  )))
)), B1 = ({
  onUploadError: e
} = {}) => {
  const [t, r] = k([]), [n] = k(!1), a = A(
    (u, c, d) => c && !c.split(",").map((h) => h.trim()).some((h) => h.startsWith(".") ? u.name.toLowerCase().endsWith(h.toLowerCase()) : u.type.match(new RegExp(h.replace("*", ".*")))) ? `File type not accepted. Accepted types: ${c}` : d && u.size > d ? `File size exceeds maximum of ${(d / 1024 / 1024).toFixed(2)}MB` : null,
    []
  ), i = A(
    (u, c, d, p) => {
      const f = [], h = [];
      for (const g of u) {
        if (p && t.length + f.length >= p) {
          h.push(`Maximum ${p} files allowed`);
          break;
        }
        const y = a(g, c, d);
        if (y) {
          h.push(`${g.name}: ${y}`);
          continue;
        }
        if (t.some(
          (m) => m.file.name === g.name && m.file.size === g.size
        )) {
          h.push(`${g.name}: File already selected`);
          continue;
        }
        f.push({
          file: g,
          id: `${g.name}-${g.size}-${Date.now()}`
        });
      }
      return h.length > 0 && (e == null || e(h.join(", "))), r((g) => [...g, ...f]), f;
    },
    [t, a, e]
  ), o = A((u) => {
    r((c) => c.filter((d) => d.id !== u));
  }, []), l = A(() => {
    r([]);
  }, []);
  return {
    uploadFiles: t,
    isUploading: n,
    addFiles: i,
    removeFile: o,
    clearFiles: l
  };
}, z1 = ({
  uploadFiles: e,
  isUploading: t,
  handleRemoveFile: r,
  handleClearFiles: n
}) => /* @__PURE__ */ s.createElement(G, null, /* @__PURE__ */ s.createElement(
  "div",
  {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px"
    }
  },
  /* @__PURE__ */ s.createElement("strong", null, "Selected Files (", e.length, ") •", " ", mi(e)),
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
    /* @__PURE__ */ s.createElement($, { name: "file" }),
    /* @__PURE__ */ s.createElement("span", null, a.file.name),
    /* @__PURE__ */ s.createElement(se, { size: "mini", basic: !0 }, Er(a.file.size))
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
)))))), fs = ({
  onChange: e,
  accept: t = ".csv,.json,.xlsx,.txt",
  maxSize: r = 10 * 1024 * 1024,
  // 10MB
  maxFiles: n = 5,
  disabled: a = !1,
  error: i
}) => {
  const o = ys(null), [l, u] = s.useState(!1), { uploadFiles: c, isUploading: d, addFiles: p, removeFile: f, clearFiles: h } = B1({
    onUploadComplete: (b) => {
      e(b);
    },
    onUploadError: (b) => {
      console.error("Upload error:", b);
    }
  }), g = A(
    (b) => {
      if (!b || b.length === 0)
        return;
      const re = Array.from(b), ne = p(re, t, r, n);
      if (ne.length > 0) {
        const hs = [...c, ...ne].map((gs) => gs.file);
        e(hs);
      }
    },
    [p, t, r, n, e, c]
  ), y = A(
    (b) => {
      g(b.target.files), o.current && (o.current.value = "");
    },
    [g]
  ), E = A(
    (b) => {
      b.preventDefault(), a || u(!0);
    },
    [a]
  ), m = A((b) => {
    b.preventDefault(), u(!1);
  }, []), S = A(
    (b) => {
      b.preventDefault(), u(!1), !a && g(b.dataTransfer.files);
    },
    [a, g]
  ), I = A(() => {
    var b;
    a || (b = o.current) == null || b.click();
  }, [a]), L = A(
    (b) => {
      f(b);
      const re = c.filter((ne) => ne.id !== b).map((ne) => ne.file);
      e(re);
    },
    [f, c, e]
  ), J = A(() => {
    h(), e([]);
  }, [h, e]);
  return /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(
    N1,
    {
      fileInputRef: o,
      accept: t,
      maxSize: r,
      maxFiles: n,
      isDragOver: l,
      disabled: a,
      uploadFiles: c,
      onInputChange: y,
      onDragOver: E,
      onDragLeave: m,
      onDrop: S,
      onFileDialogOpen: I
    }
  ), i && /* @__PURE__ */ s.createElement(U, { negative: !0, size: "small" }, /* @__PURE__ */ s.createElement($, { name: "exclamation triangle" }), i), c.length > 0 && /* @__PURE__ */ s.createElement(
    z1,
    {
      uploadFiles: c,
      isUploading: d,
      handleRemoveFile: L,
      handleClearFiles: J
    }
  ));
}, M1 = () => {
  const { taskId: e } = ps(), [t, r] = k(null), [n, a] = k([]), [i, o] = k(!1), [l, u] = k(null), c = (h) => {
    var y;
    const g = ((y = h.target.files) == null ? void 0 : y[0]) || null;
    r(g || null);
  }, d = (h) => {
    a(h);
  }, p = () => {
    o(!1), r(null), a([]), u(null);
  }, f = async () => {
    if (!(!t && n.length === 0))
      try {
        await XE(
          e,
          t,
          n.length > 0 ? n : void 0,
          {
            onProgress: (h, g) => u({
              [h]: g
            }),
            onError: (h, g) => {
              console.error(`Error during ${g}:`, h);
            }
          }
        ), t && await Si(e, {
          autoExecute: !0,
          // Auto-execute import after validation
          onProgress: (h, g) => u({
            [h]: g
          }),
          onError: (h, g) => {
            console.error(`Error during ${g}:`, h);
          }
        }), o(!1), r(null), a([]);
      } catch (h) {
        console.error("Error uploading content:", h);
      }
  };
  return /* @__PURE__ */ s.createElement(
    oe,
    {
      open: i,
      onOpen: () => o(!0),
      onClose: p,
      size: "small",
      closeIcon: !0,
      trigger: /* @__PURE__ */ s.createElement(N, { icon: "upload", size: "tiny", content: "Upload Content" })
    },
    /* @__PURE__ */ s.createElement(fe, { icon: !0 }, /* @__PURE__ */ s.createElement($, { name: "upload" }), "Upload Metadata & Files"),
    /* @__PURE__ */ s.createElement(oe.Content, null, /* @__PURE__ */ s.createElement(Ee, { onSubmit: f }, /* @__PURE__ */ s.createElement(Ee.Field, null, /* @__PURE__ */ s.createElement("label", { htmlFor: "fileInput" }, "Select Metadata File (Optional)"), /* @__PURE__ */ s.createElement(
      "input",
      {
        id: "fileInput",
        type: "file",
        onChange: c,
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
      fs,
      {
        value: n,
        onChange: d,
        accept: "*",
        maxSize: 10 * 1024 * 1024 * 1024,
        maxFiles: 100
      }
    )))),
    /* @__PURE__ */ s.createElement(oe.Actions, null, /* @__PURE__ */ s.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: ".5rem"
        }
      },
      l && /* @__PURE__ */ s.createElement(hi, { progress: l }),
      /* @__PURE__ */ s.createElement(N, { onClick: p, color: "grey" }, /* @__PURE__ */ s.createElement($, { name: "cancel" }), "Cancel"),
      /* @__PURE__ */ s.createElement(
        N,
        {
          onClick: f,
          color: "blue",
          disabled: !t && n.length === 0
        },
        /* @__PURE__ */ s.createElement($, { name: "upload" }),
        "Upload"
      )
    ))
  );
}, Q1 = ({ taskId: e }) => {
  var f, h, g, y, E, m;
  const [t, r] = k(null), { getStatus: n, isGettingStatus: a, runBulkImport: i, isBulkImporting: o, error: l } = _i(e, { onStatusChangeSuccess: r });
  if (De(() => {
    n();
  }, [n]), a || o)
    return /* @__PURE__ */ s.createElement(G, null, /* @__PURE__ */ s.createElement(Dn, { content: "Loading task details..." }));
  if (l)
    return /* @__PURE__ */ s.createElement(U, { negative: !0, icon: !0 }, /* @__PURE__ */ s.createElement($, { name: "exclamation triangle" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Error Loading Task"), l));
  if (!t)
    return /* @__PURE__ */ s.createElement(U, { warning: !0, icon: !0 }, /* @__PURE__ */ s.createElement($, { name: "search" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Task Not Found"), "The requested task could not be found."));
  const u = ((f = t.records_status) == null ? void 0 : f.total_records) || 0, c = ((h = t.records_status) == null ? void 0 : h.validated) || 0, d = ((g = t.records_status) == null ? void 0 : g.success) || 0, p = (((y = t.records_status) == null ? void 0 : y["import failed"]) || 0) + (((E = t.records_status) == null ? void 0 : E["validation failed"]) || 0) + (((m = t.records_status) == null ? void 0 : m["serializer validation failed"]) || 0);
  return /* @__PURE__ */ s.createElement(I1, { taskId: e }, /* @__PURE__ */ s.createElement(Cs, { fluid: !0, verticalAlign: "top" }, /* @__PURE__ */ s.createElement(z, null, /* @__PURE__ */ s.createElement(z.Row, { verticalAlign: "top" }, /* @__PURE__ */ s.createElement(z.Column, { width: 8, verticalAlign: "middle" }, /* @__PURE__ */ s.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: ".5rem"
      }
    },
    /* @__PURE__ */ s.createElement($, { name: "tasks", circular: !0, size: "big" }),
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
      t.status && /* @__PURE__ */ s.createElement(gi, { size: "large", status: t.status }, et(t.status))
    )
  )), /* @__PURE__ */ s.createElement(z.Column, { width: 8, textAlign: "right" }, /* @__PURE__ */ s.createElement(
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
    ), /* @__PURE__ */ s.createElement(M1, null), /* @__PURE__ */ s.createElement(
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
  ))), t.description && /* @__PURE__ */ s.createElement(z.Row, null, /* @__PURE__ */ s.createElement(z.Column, { width: 16 }, /* @__PURE__ */ s.createElement(U, { info: !0, icon: !0, size: "small" }, /* @__PURE__ */ s.createElement($, { name: "info circle" }), /* @__PURE__ */ s.createElement(U.Content, null, /* @__PURE__ */ s.createElement(U.Header, null, "Notes"), t.description))))), u > 0 && /* @__PURE__ */ s.createElement(G, { basic: !0 }, /* @__PURE__ */ s.createElement(
    T1,
    {
      totalRecords: u,
      validatedRecords: c,
      errorRecords: p,
      successRecords: d
    }
  ))), /* @__PURE__ */ s.createElement(U1, null));
}, rx = {
  Search: cs,
  TaskDetails: Q1
}, nx = {
  CREATED: "created",
  VALIDATING: "validating",
  SERIALIZER_VALIDATION_FAILED: "serializer validation failed",
  VALIDATION_FAILED: "validation failed",
  VALIDATED: "validated",
  IMPORT_FAILED: "import failed",
  IMPORTED: "success"
}, ax = {
  CREATED: "created",
  VALIDATING: "validating",
  VALIDATION_FAILED: "validated with failures",
  VALIDATED: "validated",
  IMPORTING: "importing",
  IMPORT_FAILED: "imported with failures",
  SUCCESS: "success",
  DAMAGED: "damaged"
}, ix = {
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
  rx as BulkImporter,
  fs as FileUploader,
  x1 as ImportModal,
  ax as ImporterTaskStates,
  nx as InvenioImporterRecordStatus,
  ix as OrchestrationStepsEnum,
  cs as Search,
  Q1 as TaskDetails,
  L1 as TaskRecordItem,
  et as capitalizeFirstLetter,
  ex as createSearchApi,
  tx as createSearchApiConfig,
  kt as formatDate,
  Er as formatFileSize,
  jE as getCsrfToken,
  qE as getStatusColor,
  zE as getTotalSize,
  mi as getTotalSizeFormatted,
  B1 as useFileUploader
};
