import l, { Component as A, useContext as E, useEffect as Ot, useState as pt, useCallback as Zs } from "react";
import { Label as bn, Icon as se, Input as vn, Button as ie, List as Sn, Checkbox as _n, Card as I, Segment as Js, Header as $n, Menu as Se, Pagination as ei, Item as te, Loader as ti, Dropdown as $e, Image as ri, TableRow as En, TableCell as V, Table as ni, TableHeader as ai, TableHeaderCell as H, TableBody as si, Form as ii, Modal as oi, ModalHeader as li, ModalContent as ui, ModalActions as ci, Grid as ge } from "semantic-ui-react";
import g, { OverridableContext as di } from "react-overridable";
import ke from "axios";
import oe from "qs";
import { connect as x, Provider as pi } from "react-redux";
import { combineReducers as hi, createStore as fi, applyMiddleware as gi } from "redux";
import mi from "redux-thunk";
import yi from "lodash";
import { TextField as bi, SelectField as it, TextAreaField as vi, BaseForm as Si } from "react-invenio-forms";
import { useFormikContext as _i } from "formik";
var Fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function w(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $i = Object.prototype;
function Ei(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || $i;
  return e === r;
}
var Ge = Ei;
function xi(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var xn = xi, Ci = xn, Ti = Ci(Object.keys, Object), wi = Ti, Ai = Ge, Fi = wi, Oi = Object.prototype, Ii = Oi.hasOwnProperty;
function Pi(e) {
  if (!Ai(e))
    return Fi(e);
  var t = [];
  for (var r in Object(e))
    Ii.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Cn = Pi, Ri = typeof Fe == "object" && Fe && Fe.Object === Object && Fe, Tn = Ri, ki = Tn, Di = typeof self == "object" && self && self.Object === Object && self, Li = ki || Di || Function("return this")(), Q = Li, Bi = Q, Ni = Bi.Symbol, le = Ni, or = le, wn = Object.prototype, Ui = wn.hasOwnProperty, Qi = wn.toString, me = or ? or.toStringTag : void 0;
function ji(e) {
  var t = Ui.call(e, me), r = e[me];
  try {
    e[me] = void 0;
    var n = !0;
  } catch {
  }
  var a = Qi.call(e);
  return n && (t ? e[me] = r : delete e[me]), a;
}
var Mi = ji, zi = Object.prototype, qi = zi.toString;
function Gi(e) {
  return qi.call(e);
}
var Vi = Gi, lr = le, Hi = Mi, Yi = Vi, Wi = "[object Null]", Ki = "[object Undefined]", ur = lr ? lr.toStringTag : void 0;
function Xi(e) {
  return e == null ? e === void 0 ? Ki : Wi : ur && ur in Object(e) ? Hi(e) : Yi(e);
}
var W = Xi;
function Zi(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var q = Zi;
const Ji = /* @__PURE__ */ w(q);
var eo = W, to = q, ro = "[object AsyncFunction]", no = "[object Function]", ao = "[object GeneratorFunction]", so = "[object Proxy]";
function io(e) {
  if (!to(e))
    return !1;
  var t = eo(e);
  return t == no || t == ao || t == ro || t == so;
}
var An = io, oo = Q, lo = oo["__core-js_shared__"], uo = lo, ot = uo, cr = function() {
  var e = /[^.]+$/.exec(ot && ot.keys && ot.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function co(e) {
  return !!cr && cr in e;
}
var po = co, ho = Function.prototype, fo = ho.toString;
function go(e) {
  if (e != null) {
    try {
      return fo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Fn = go, mo = An, yo = po, bo = q, vo = Fn, So = /[\\^$.*+?()[\]{}|]/g, _o = /^\[object .+?Constructor\]$/, $o = Function.prototype, Eo = Object.prototype, xo = $o.toString, Co = Eo.hasOwnProperty, To = RegExp(
  "^" + xo.call(Co).replace(So, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wo(e) {
  if (!bo(e) || yo(e))
    return !1;
  var t = mo(e) ? To : _o;
  return t.test(vo(e));
}
var Ao = wo;
function Fo(e, t) {
  return e == null ? void 0 : e[t];
}
var Oo = Fo, Io = Ao, Po = Oo;
function Ro(e, t) {
  var r = Po(e, t);
  return Io(r) ? r : void 0;
}
var J = Ro, ko = J, Do = Q, Lo = ko(Do, "DataView"), Bo = Lo, No = J, Uo = Q, Qo = No(Uo, "Map"), It = Qo, jo = J, Mo = Q, zo = jo(Mo, "Promise"), qo = zo, Go = J, Vo = Q, Ho = Go(Vo, "Set"), Yo = Ho, Wo = J, Ko = Q, Xo = Wo(Ko, "WeakMap"), Zo = Xo, ht = Bo, ft = It, gt = qo, mt = Yo, yt = Zo, On = W, ue = Fn, dr = "[object Map]", Jo = "[object Object]", pr = "[object Promise]", hr = "[object Set]", fr = "[object WeakMap]", gr = "[object DataView]", el = ue(ht), tl = ue(ft), rl = ue(gt), nl = ue(mt), al = ue(yt), K = On;
(ht && K(new ht(new ArrayBuffer(1))) != gr || ft && K(new ft()) != dr || gt && K(gt.resolve()) != pr || mt && K(new mt()) != hr || yt && K(new yt()) != fr) && (K = function(e) {
  var t = On(e), r = t == Jo ? e.constructor : void 0, n = r ? ue(r) : "";
  if (n)
    switch (n) {
      case el:
        return gr;
      case tl:
        return dr;
      case rl:
        return pr;
      case nl:
        return hr;
      case al:
        return fr;
    }
  return t;
});
var Ee = K;
function sl(e) {
  return e != null && typeof e == "object";
}
var j = sl, il = W, ol = j, ll = "[object Arguments]";
function ul(e) {
  return ol(e) && il(e) == ll;
}
var cl = ul, mr = cl, dl = j, In = Object.prototype, pl = In.hasOwnProperty, hl = In.propertyIsEnumerable, fl = mr(function() {
  return arguments;
}()) ? mr : function(e) {
  return dl(e) && pl.call(e, "callee") && !hl.call(e, "callee");
}, Ve = fl, gl = Array.isArray, R = gl;
const Pn = /* @__PURE__ */ w(R);
var ml = 9007199254740991;
function yl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ml;
}
var Pt = yl, bl = An, vl = Pt;
function Sl(e) {
  return e != null && vl(e.length) && !bl(e);
}
var He = Sl, Le = { exports: {} };
function _l() {
  return !1;
}
var $l = _l;
Le.exports;
(function(e, t) {
  var r = Q, n = $l, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, o = i ? r.Buffer : void 0, u = o ? o.isBuffer : void 0, c = u || n;
  e.exports = c;
})(Le, Le.exports);
var Ye = Le.exports, El = W, xl = Pt, Cl = j, Tl = "[object Arguments]", wl = "[object Array]", Al = "[object Boolean]", Fl = "[object Date]", Ol = "[object Error]", Il = "[object Function]", Pl = "[object Map]", Rl = "[object Number]", kl = "[object Object]", Dl = "[object RegExp]", Ll = "[object Set]", Bl = "[object String]", Nl = "[object WeakMap]", Ul = "[object ArrayBuffer]", Ql = "[object DataView]", jl = "[object Float32Array]", Ml = "[object Float64Array]", zl = "[object Int8Array]", ql = "[object Int16Array]", Gl = "[object Int32Array]", Vl = "[object Uint8Array]", Hl = "[object Uint8ClampedArray]", Yl = "[object Uint16Array]", Wl = "[object Uint32Array]", $ = {};
$[jl] = $[Ml] = $[zl] = $[ql] = $[Gl] = $[Vl] = $[Hl] = $[Yl] = $[Wl] = !0;
$[Tl] = $[wl] = $[Ul] = $[Al] = $[Ql] = $[Fl] = $[Ol] = $[Il] = $[Pl] = $[Rl] = $[kl] = $[Dl] = $[Ll] = $[Bl] = $[Nl] = !1;
function Kl(e) {
  return Cl(e) && xl(e.length) && !!$[El(e)];
}
var Xl = Kl;
function Zl(e) {
  return function(t) {
    return e(t);
  };
}
var Rt = Zl, Be = { exports: {} };
Be.exports;
(function(e, t) {
  var r = Tn, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, i = s && r.process, o = function() {
    try {
      var u = a && a.require && a.require("util").types;
      return u || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(Be, Be.exports);
var kt = Be.exports, Jl = Xl, eu = Rt, yr = kt, br = yr && yr.isTypedArray, tu = br ? eu(br) : Jl, Dt = tu, ru = Cn, nu = Ee, au = Ve, su = R, iu = He, ou = Ye, lu = Ge, uu = Dt, cu = "[object Map]", du = "[object Set]", pu = Object.prototype, hu = pu.hasOwnProperty;
function fu(e) {
  if (e == null)
    return !0;
  if (iu(e) && (su(e) || typeof e == "string" || typeof e.splice == "function" || ou(e) || uu(e) || au(e)))
    return !e.length;
  var t = nu(e);
  if (t == cu || t == du)
    return !e.size;
  if (lu(e))
    return !ru(e).length;
  for (var r in e)
    if (hu.call(e, r))
      return !1;
  return !0;
}
var gu = fu;
const M = /* @__PURE__ */ w(gu);
var mu = W, yu = j, bu = "[object Symbol]";
function vu(e) {
  return typeof e == "symbol" || yu(e) && mu(e) == bu;
}
var Lt = vu, Su = R, _u = Lt, $u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Eu = /^\w*$/;
function xu(e, t) {
  if (Su(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || _u(e) ? !0 : Eu.test(e) || !$u.test(e) || t != null && e in Object(t);
}
var Bt = xu, Cu = J, Tu = Cu(Object, "create"), We = Tu, vr = We;
function wu() {
  this.__data__ = vr ? vr(null) : {}, this.size = 0;
}
var Au = wu;
function Fu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ou = Fu, Iu = We, Pu = "__lodash_hash_undefined__", Ru = Object.prototype, ku = Ru.hasOwnProperty;
function Du(e) {
  var t = this.__data__;
  if (Iu) {
    var r = t[e];
    return r === Pu ? void 0 : r;
  }
  return ku.call(t, e) ? t[e] : void 0;
}
var Lu = Du, Bu = We, Nu = Object.prototype, Uu = Nu.hasOwnProperty;
function Qu(e) {
  var t = this.__data__;
  return Bu ? t[e] !== void 0 : Uu.call(t, e);
}
var ju = Qu, Mu = We, zu = "__lodash_hash_undefined__";
function qu(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Mu && t === void 0 ? zu : t, this;
}
var Gu = qu, Vu = Au, Hu = Ou, Yu = Lu, Wu = ju, Ku = Gu;
function ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ce.prototype.clear = Vu;
ce.prototype.delete = Hu;
ce.prototype.get = Yu;
ce.prototype.has = Wu;
ce.prototype.set = Ku;
var Xu = ce;
function Zu() {
  this.__data__ = [], this.size = 0;
}
var Ju = Zu;
function ec(e, t) {
  return e === t || e !== e && t !== t;
}
var Ke = ec, tc = Ke;
function rc(e, t) {
  for (var r = e.length; r--; )
    if (tc(e[r][0], t))
      return r;
  return -1;
}
var Xe = rc, nc = Xe, ac = Array.prototype, sc = ac.splice;
function ic(e) {
  var t = this.__data__, r = nc(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : sc.call(t, r, 1), --this.size, !0;
}
var oc = ic, lc = Xe;
function uc(e) {
  var t = this.__data__, r = lc(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var cc = uc, dc = Xe;
function pc(e) {
  return dc(this.__data__, e) > -1;
}
var hc = pc, fc = Xe;
function gc(e, t) {
  var r = this.__data__, n = fc(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var mc = gc, yc = Ju, bc = oc, vc = cc, Sc = hc, _c = mc;
function de(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
de.prototype.clear = yc;
de.prototype.delete = bc;
de.prototype.get = vc;
de.prototype.has = Sc;
de.prototype.set = _c;
var Ze = de, Sr = Xu, $c = Ze, Ec = It;
function xc() {
  this.size = 0, this.__data__ = {
    hash: new Sr(),
    map: new (Ec || $c)(),
    string: new Sr()
  };
}
var Cc = xc;
function Tc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var wc = Tc, Ac = wc;
function Fc(e, t) {
  var r = e.__data__;
  return Ac(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Je = Fc, Oc = Je;
function Ic(e) {
  var t = Oc(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Pc = Ic, Rc = Je;
function kc(e) {
  return Rc(this, e).get(e);
}
var Dc = kc, Lc = Je;
function Bc(e) {
  return Lc(this, e).has(e);
}
var Nc = Bc, Uc = Je;
function Qc(e, t) {
  var r = Uc(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var jc = Qc, Mc = Cc, zc = Pc, qc = Dc, Gc = Nc, Vc = jc;
function pe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
pe.prototype.clear = Mc;
pe.prototype.delete = zc;
pe.prototype.get = qc;
pe.prototype.has = Gc;
pe.prototype.set = Vc;
var Nt = pe, Rn = Nt, Hc = "Expected a function";
function Ut(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Hc);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(a))
      return s.get(a);
    var i = e.apply(this, n);
    return r.cache = s.set(a, i) || s, i;
  };
  return r.cache = new (Ut.Cache || Rn)(), r;
}
Ut.Cache = Rn;
var Yc = Ut, Wc = Yc, Kc = 500;
function Xc(e) {
  var t = Wc(e, function(n) {
    return r.size === Kc && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Zc = Xc, Jc = Zc, ed = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, td = /\\(\\)?/g, rd = Jc(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ed, function(r, n, a, s) {
    t.push(a ? s.replace(td, "$1") : n || r);
  }), t;
}), nd = rd;
function ad(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var sd = ad, _r = le, id = sd, od = R, ld = Lt, ud = 1 / 0, $r = _r ? _r.prototype : void 0, Er = $r ? $r.toString : void 0;
function kn(e) {
  if (typeof e == "string")
    return e;
  if (od(e))
    return id(e, kn) + "";
  if (ld(e))
    return Er ? Er.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ud ? "-0" : t;
}
var cd = kn, dd = cd;
function pd(e) {
  return e == null ? "" : dd(e);
}
var xe = pd, hd = R, fd = Bt, gd = nd, md = xe;
function yd(e, t) {
  return hd(e) ? e : fd(e, t) ? [e] : gd(md(e));
}
var et = yd, bd = Lt, vd = 1 / 0;
function Sd(e) {
  if (typeof e == "string" || bd(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -vd ? "-0" : t;
}
var Ce = Sd, _d = et, $d = Ce;
function Ed(e, t) {
  t = _d(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[$d(t[r++])];
  return r && r == n ? e : void 0;
}
var Qt = Ed, xd = Qt;
function Cd(e, t, r) {
  var n = e == null ? void 0 : xd(e, t);
  return n === void 0 ? r : n;
}
var Dn = Cd;
const be = /* @__PURE__ */ w(Dn);
function Td(e, t) {
  return e != null && t in Object(e);
}
var wd = Td, Ad = 9007199254740991, Fd = /^(?:0|[1-9]\d*)$/;
function Od(e, t) {
  var r = typeof e;
  return t = t ?? Ad, !!t && (r == "number" || r != "symbol" && Fd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var tt = Od, Id = et, Pd = Ve, Rd = R, kd = tt, Dd = Pt, Ld = Ce;
function Bd(e, t, r) {
  t = Id(t, e);
  for (var n = -1, a = t.length, s = !1; ++n < a; ) {
    var i = Ld(t[n]);
    if (!(s = e != null && r(e, i)))
      break;
    e = e[i];
  }
  return s || ++n != a ? s : (a = e == null ? 0 : e.length, !!a && Dd(a) && kd(i, a) && (Rd(e) || Pd(e)));
}
var Ln = Bd, Nd = wd, Ud = Ln;
function Qd(e, t) {
  return e != null && Ud(e, t, Nd);
}
var jt = Qd;
const jd = /* @__PURE__ */ w(jt);
var Md = J, zd = function() {
  try {
    var e = Md(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Bn = zd, xr = Bn;
function qd(e, t, r) {
  t == "__proto__" && xr ? xr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var rt = qd, Gd = rt, Vd = Ke, Hd = Object.prototype, Yd = Hd.hasOwnProperty;
function Wd(e, t, r) {
  var n = e[t];
  (!(Yd.call(e, t) && Vd(n, r)) || r === void 0 && !(t in e)) && Gd(e, t, r);
}
var Mt = Wd, Kd = Mt, Xd = rt;
function Zd(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var o = t[s], u = n ? n(r[o], e[o], o, r, e) : void 0;
    u === void 0 && (u = e[o]), a ? Xd(r, o, u) : Kd(r, o, u);
  }
  return r;
}
var Te = Zd;
function Jd(e) {
  return e;
}
var zt = Jd;
function ep(e, t, r) {
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
var tp = ep, rp = tp, Cr = Math.max;
function np(e, t, r) {
  return t = Cr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, s = Cr(n.length - t, 0), i = Array(s); ++a < s; )
      i[a] = n[t + a];
    a = -1;
    for (var o = Array(t + 1); ++a < t; )
      o[a] = n[a];
    return o[t] = r(i), rp(e, this, o);
  };
}
var Nn = np;
function ap(e) {
  return function() {
    return e;
  };
}
var sp = ap, ip = sp, Tr = Bn, op = zt, lp = Tr ? function(e, t) {
  return Tr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ip(t),
    writable: !0
  });
} : op, up = lp, cp = 800, dp = 16, pp = Date.now;
function hp(e) {
  var t = 0, r = 0;
  return function() {
    var n = pp(), a = dp - (n - r);
    if (r = n, a > 0) {
      if (++t >= cp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var fp = hp, gp = up, mp = fp, yp = mp(gp), Un = yp, bp = zt, vp = Nn, Sp = Un;
function _p(e, t) {
  return Sp(vp(e, t, bp), e + "");
}
var $p = _p, Ep = Ke, xp = He, Cp = tt, Tp = q;
function wp(e, t, r) {
  if (!Tp(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? xp(r) && Cp(t, r.length) : n == "string" && t in r) ? Ep(r[t], e) : !1;
}
var Ap = wp, Fp = $p, Op = Ap;
function Ip(e) {
  return Fp(function(t, r) {
    var n = -1, a = r.length, s = a > 1 ? r[a - 1] : void 0, i = a > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, i && Op(r[0], r[1], i) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++n < a; ) {
      var o = r[n];
      o && e(t, o, n, s);
    }
    return t;
  });
}
var Pp = Ip;
function Rp(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var kp = Rp, Dp = kp, Lp = Ve, Bp = R, Np = Ye, Up = tt, Qp = Dt, jp = Object.prototype, Mp = jp.hasOwnProperty;
function zp(e, t) {
  var r = Bp(e), n = !r && Lp(e), a = !r && !n && Np(e), s = !r && !n && !a && Qp(e), i = r || n || a || s, o = i ? Dp(e.length, String) : [], u = o.length;
  for (var c in e)
    (t || Mp.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Up(c, u))) && o.push(c);
  return o;
}
var Qn = zp;
function qp(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Gp = qp, Vp = q, Hp = Ge, Yp = Gp, Wp = Object.prototype, Kp = Wp.hasOwnProperty;
function Xp(e) {
  if (!Vp(e))
    return Yp(e);
  var t = Hp(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Kp.call(e, n)) || r.push(n);
  return r;
}
var Zp = Xp, Jp = Qn, eh = Zp, th = He;
function rh(e) {
  return th(e) ? Jp(e, !0) : eh(e);
}
var nt = rh, nh = Te, ah = Pp, sh = nt, ih = ah(function(e, t) {
  nh(t, sh(t), e);
}), oh = ih, lh = oh;
const Ne = /* @__PURE__ */ w(lh);
function uh(e) {
  return e && e.length ? e[0] : void 0;
}
var ch = uh;
const dh = /* @__PURE__ */ w(ch);
var ph = Mt, hh = et, fh = tt, wr = q, gh = Ce;
function mh(e, t, r, n) {
  if (!wr(e))
    return e;
  t = hh(t, e);
  for (var a = -1, s = t.length, i = s - 1, o = e; o != null && ++a < s; ) {
    var u = gh(t[a]), c = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != i) {
      var d = o[u];
      c = n ? n(d, u, o) : void 0, c === void 0 && (c = wr(d) ? d : fh(t[a + 1]) ? [] : {});
    }
    ph(o, u, c), o = o[u];
  }
  return e;
}
var yh = mh, bh = Qt, vh = yh, Sh = et;
function _h(e, t, r) {
  for (var n = -1, a = t.length, s = {}; ++n < a; ) {
    var i = t[n], o = bh(e, i);
    r(o, i) && vh(s, Sh(i, e), o);
  }
  return s;
}
var $h = _h, Eh = $h, xh = jt;
function Ch(e, t) {
  return Eh(e, t, function(r, n) {
    return xh(e, n);
  });
}
var Th = Ch;
function wh(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var qt = wh, Ar = le, Ah = Ve, Fh = R, Fr = Ar ? Ar.isConcatSpreadable : void 0;
function Oh(e) {
  return Fh(e) || Ah(e) || !!(Fr && e && e[Fr]);
}
var Ih = Oh, Ph = qt, Rh = Ih;
function jn(e, t, r, n, a) {
  var s = -1, i = e.length;
  for (r || (r = Rh), a || (a = []); ++s < i; ) {
    var o = e[s];
    t > 0 && r(o) ? t > 1 ? jn(o, t - 1, r, n, a) : Ph(a, o) : n || (a[a.length] = o);
  }
  return a;
}
var kh = jn, Dh = kh;
function Lh(e) {
  var t = e == null ? 0 : e.length;
  return t ? Dh(e, 1) : [];
}
var Bh = Lh, Nh = Bh, Uh = Nn, Qh = Un;
function jh(e) {
  return Qh(Uh(e, void 0, Nh), e + "");
}
var Mh = jh, zh = Th, qh = Mh, Gh = qh(function(e, t) {
  return e == null ? {} : zh(e, t);
}), Vh = Gh;
const Hh = /* @__PURE__ */ w(Vh);
var Yh = Ze;
function Wh() {
  this.__data__ = new Yh(), this.size = 0;
}
var Kh = Wh;
function Xh(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Zh = Xh;
function Jh(e) {
  return this.__data__.get(e);
}
var ef = Jh;
function tf(e) {
  return this.__data__.has(e);
}
var rf = tf, nf = Ze, af = It, sf = Nt, of = 200;
function lf(e, t) {
  var r = this.__data__;
  if (r instanceof nf) {
    var n = r.__data__;
    if (!af || n.length < of - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new sf(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var uf = lf, cf = Ze, df = Kh, pf = Zh, hf = ef, ff = rf, gf = uf;
function he(e) {
  var t = this.__data__ = new cf(e);
  this.size = t.size;
}
he.prototype.clear = df;
he.prototype.delete = pf;
he.prototype.get = hf;
he.prototype.has = ff;
he.prototype.set = gf;
var Gt = he;
function mf(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var yf = mf, bf = Qn, vf = Cn, Sf = He;
function _f(e) {
  return Sf(e) ? bf(e) : vf(e);
}
var we = _f, $f = Te, Ef = we;
function xf(e, t) {
  return e && $f(t, Ef(t), e);
}
var Cf = xf, Tf = Te, wf = nt;
function Af(e, t) {
  return e && Tf(t, wf(t), e);
}
var Ff = Af, Ue = { exports: {} };
Ue.exports;
(function(e, t) {
  var r = Q, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, i = s ? r.Buffer : void 0, o = i ? i.allocUnsafe : void 0;
  function u(c, d) {
    if (d)
      return c.slice();
    var p = c.length, h = o ? o(p) : new c.constructor(p);
    return c.copy(h), h;
  }
  e.exports = u;
})(Ue, Ue.exports);
var Of = Ue.exports;
function If(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Pf = If;
function Rf(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[a++] = i);
  }
  return s;
}
var kf = Rf;
function Df() {
  return [];
}
var Mn = Df, Lf = kf, Bf = Mn, Nf = Object.prototype, Uf = Nf.propertyIsEnumerable, Or = Object.getOwnPropertySymbols, Qf = Or ? function(e) {
  return e == null ? [] : (e = Object(e), Lf(Or(e), function(t) {
    return Uf.call(e, t);
  }));
} : Bf, Vt = Qf, jf = Te, Mf = Vt;
function zf(e, t) {
  return jf(e, Mf(e), t);
}
var qf = zf, Gf = xn, Vf = Gf(Object.getPrototypeOf, Object), zn = Vf, Hf = qt, Yf = zn, Wf = Vt, Kf = Mn, Xf = Object.getOwnPropertySymbols, Zf = Xf ? function(e) {
  for (var t = []; e; )
    Hf(t, Wf(e)), e = Yf(e);
  return t;
} : Kf, qn = Zf, Jf = Te, eg = qn;
function tg(e, t) {
  return Jf(e, eg(e), t);
}
var rg = tg, ng = qt, ag = R;
function sg(e, t, r) {
  var n = t(e);
  return ag(e) ? n : ng(n, r(e));
}
var Gn = sg, ig = Gn, og = Vt, lg = we;
function ug(e) {
  return ig(e, lg, og);
}
var Vn = ug, cg = Gn, dg = qn, pg = nt;
function hg(e) {
  return cg(e, pg, dg);
}
var fg = hg, gg = Object.prototype, mg = gg.hasOwnProperty;
function yg(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && mg.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var bg = yg, vg = Q, Sg = vg.Uint8Array, Hn = Sg, Ir = Hn;
function _g(e) {
  var t = new e.constructor(e.byteLength);
  return new Ir(t).set(new Ir(e)), t;
}
var Ht = _g, $g = Ht;
function Eg(e, t) {
  var r = t ? $g(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var xg = Eg, Cg = /\w*$/;
function Tg(e) {
  var t = new e.constructor(e.source, Cg.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var wg = Tg, Pr = le, Rr = Pr ? Pr.prototype : void 0, kr = Rr ? Rr.valueOf : void 0;
function Ag(e) {
  return kr ? Object(kr.call(e)) : {};
}
var Fg = Ag, Og = Ht;
function Ig(e, t) {
  var r = t ? Og(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Pg = Ig, Rg = Ht, kg = xg, Dg = wg, Lg = Fg, Bg = Pg, Ng = "[object Boolean]", Ug = "[object Date]", Qg = "[object Map]", jg = "[object Number]", Mg = "[object RegExp]", zg = "[object Set]", qg = "[object String]", Gg = "[object Symbol]", Vg = "[object ArrayBuffer]", Hg = "[object DataView]", Yg = "[object Float32Array]", Wg = "[object Float64Array]", Kg = "[object Int8Array]", Xg = "[object Int16Array]", Zg = "[object Int32Array]", Jg = "[object Uint8Array]", em = "[object Uint8ClampedArray]", tm = "[object Uint16Array]", rm = "[object Uint32Array]";
function nm(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Vg:
      return Rg(e);
    case Ng:
    case Ug:
      return new n(+e);
    case Hg:
      return kg(e, r);
    case Yg:
    case Wg:
    case Kg:
    case Xg:
    case Zg:
    case Jg:
    case em:
    case tm:
    case rm:
      return Bg(e, r);
    case Qg:
      return new n();
    case jg:
    case qg:
      return new n(e);
    case Mg:
      return Dg(e);
    case zg:
      return new n();
    case Gg:
      return Lg(e);
  }
}
var am = nm, sm = q, Dr = Object.create, im = function() {
  function e() {
  }
  return function(t) {
    if (!sm(t))
      return {};
    if (Dr)
      return Dr(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), om = im, lm = om, um = zn, cm = Ge;
function dm(e) {
  return typeof e.constructor == "function" && !cm(e) ? lm(um(e)) : {};
}
var pm = dm, hm = Ee, fm = j, gm = "[object Map]";
function mm(e) {
  return fm(e) && hm(e) == gm;
}
var ym = mm, bm = ym, vm = Rt, Lr = kt, Br = Lr && Lr.isMap, Sm = Br ? vm(Br) : bm, _m = Sm, $m = Ee, Em = j, xm = "[object Set]";
function Cm(e) {
  return Em(e) && $m(e) == xm;
}
var Tm = Cm, wm = Tm, Am = Rt, Nr = kt, Ur = Nr && Nr.isSet, Fm = Ur ? Am(Ur) : wm, Om = Fm, Im = Gt, Pm = yf, Rm = Mt, km = Cf, Dm = Ff, Lm = Of, Bm = Pf, Nm = qf, Um = rg, Qm = Vn, jm = fg, Mm = Ee, zm = bg, qm = am, Gm = pm, Vm = R, Hm = Ye, Ym = _m, Wm = q, Km = Om, Xm = we, Zm = nt, Jm = 1, ey = 2, ty = 4, Yn = "[object Arguments]", ry = "[object Array]", ny = "[object Boolean]", ay = "[object Date]", sy = "[object Error]", Wn = "[object Function]", iy = "[object GeneratorFunction]", oy = "[object Map]", ly = "[object Number]", Kn = "[object Object]", uy = "[object RegExp]", cy = "[object Set]", dy = "[object String]", py = "[object Symbol]", hy = "[object WeakMap]", fy = "[object ArrayBuffer]", gy = "[object DataView]", my = "[object Float32Array]", yy = "[object Float64Array]", by = "[object Int8Array]", vy = "[object Int16Array]", Sy = "[object Int32Array]", _y = "[object Uint8Array]", $y = "[object Uint8ClampedArray]", Ey = "[object Uint16Array]", xy = "[object Uint32Array]", S = {};
S[Yn] = S[ry] = S[fy] = S[gy] = S[ny] = S[ay] = S[my] = S[yy] = S[by] = S[vy] = S[Sy] = S[oy] = S[ly] = S[Kn] = S[uy] = S[cy] = S[dy] = S[py] = S[_y] = S[$y] = S[Ey] = S[xy] = !0;
S[sy] = S[Wn] = S[hy] = !1;
function De(e, t, r, n, a, s) {
  var i, o = t & Jm, u = t & ey, c = t & ty;
  if (r && (i = a ? r(e, n, a, s) : r(e)), i !== void 0)
    return i;
  if (!Wm(e))
    return e;
  var d = Vm(e);
  if (d) {
    if (i = zm(e), !o)
      return Bm(e, i);
  } else {
    var p = Mm(e), h = p == Wn || p == iy;
    if (Hm(e))
      return Lm(e, o);
    if (p == Kn || p == Yn || h && !a) {
      if (i = u || h ? {} : Gm(e), !o)
        return u ? Um(e, Dm(i, e)) : Nm(e, km(i, e));
    } else {
      if (!S[p])
        return a ? e : {};
      i = qm(e, p, o);
    }
  }
  s || (s = new Im());
  var f = s.get(e);
  if (f)
    return f;
  s.set(e, i), Km(e) ? e.forEach(function(b) {
    i.add(De(b, t, r, b, e, s));
  }) : Ym(e) && e.forEach(function(b, v) {
    i.set(v, De(b, t, r, v, e, s));
  });
  var m = c ? u ? jm : Qm : u ? Zm : Xm, y = d ? void 0 : m(e);
  return Pm(y || e, function(b, v) {
    y && (v = b, b = e[v]), Rm(i, v, De(b, t, r, v, e, s));
  }), i;
}
var Cy = De, Ty = Cy, wy = 1, Ay = 4;
function Fy(e) {
  return Ty(e, wy | Ay);
}
var Oy = Fy;
const ae = /* @__PURE__ */ w(Oy);
var Iy = W, Py = j, Ry = "[object Boolean]";
function ky(e) {
  return e === !0 || e === !1 || Py(e) && Iy(e) == Ry;
}
var Dy = ky;
const Ly = /* @__PURE__ */ w(Dy);
var By = W, Ny = R, Uy = j, Qy = "[object String]";
function jy(e) {
  return typeof e == "string" || !Ny(e) && Uy(e) && By(e) == Qy;
}
var My = jy;
const zy = /* @__PURE__ */ w(My);
var qy = W, Gy = j, Vy = "[object Number]";
function Hy(e) {
  return typeof e == "number" || Gy(e) && qy(e) == Vy;
}
var Yy = Hy;
const Wy = /* @__PURE__ */ w(Yy);
function Yt() {
}
Yt.prototype = new Error();
class Qr {
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
    r !== null && (c.q = r), n !== null && (c.sort = n, a !== null && (c.sort = a === "desc" ? `-${n}` : n)), s > 0 && (c.page = s), i > 0 && (c.size = i), M(u) || Ne(c, this._addFilters(u));
    const d = this._addFilters(o);
    return Ne(c, d), oe.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class Ky {
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
function lt(e) {
  return oe.stringify({
    q: e
  });
}
function Xy(e) {
  return oe.parse(e).q;
}
function Xn(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = Xn(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function jr(e, t) {
  const r = lt(e), n = t.map((i) => lt(i));
  let a = !1;
  const s = n.filter((i) => {
    const o = Oe(i, r), u = Oe(r, i);
    return o && !a && (a = !0), !o && !u;
  });
  if (!a)
    s.push(r);
  else if (e.length === 3) {
    const o = Xn(e), u = lt(o), c = s.some((d) => {
      const p = Oe(d, u), h = Oe(u, d);
      return p || h;
    });
    (M(s) || !c) && s.push(u);
  }
  return s.map((i) => Xy(i));
}
const Zn = (e, t) => {
  if (M(e))
    return;
  if (!Pn(dh(e)))
    return jr(e, t);
  let r = t;
  for (const n of e)
    r = jr(n, r);
  return r;
}, Jn = (e, t, r) => {
  let n = Hh(t, r);
  return M(n.filters) || (n.filters = Zn(n.filters, e.filters)), n;
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
}, ea = Object.keys(Qe), Zy = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, Jy = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class eb {
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
    r !== null && (c.q = r), n !== null && (c.sort = n, a !== null && (c.sort = a === "desc" ? `-${n}` : n)), s > 0 && (c.page = s), i > 0 && (c.size = i), M(u) || Ne(c, this._addFilters(u));
    const d = this._addFilters(o);
    return Ne(c, d), oe.stringify(c, {
      arrayFormat: "repeat"
    });
  }
}
class ta {
  constructor(t) {
    this.axiosConfig = be(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = ke.CancelToken;
  }
  validateAxiosConfig() {
    if (!jd(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = be(t, "interceptors.request", void 0), this.responseInterceptor = be(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: eb,
      InvenioRequestSerializer: Qr
    };
    return typeof t == "string" ? r[t] : t || Qr;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), a = be(t, "invenio.responseSerializer", Ky);
    this.requestSerializer = new n(), this.responseSerializer = new a();
  }
  initAxios() {
    const t = {
      paramsSerializer: this.requestSerializer.serialize,
      ...this.axiosConfig
    };
    this.http = ke.create(t), this.addInterceptors();
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
      const n = Jn(t, r.extras, ea);
      return M(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw ke.isCancel(r) ? new Yt() : r;
    }
  }
}
class tb {
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
          return Wy(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const a = Pn(n) ? n : [n], s = ":", i = t.urlFilterSeparator, o = `[^\\${s}\\${i}]*`, u = `${o}\\${s}${o}`, c = `${u}(\\${i}${u})*`, d = new RegExp(`^${c}$`);
          return a.every((p) => String(p).match(d));
        }
        default:
          return !1;
      }
    };
  }
}
const rb = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, Mr = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class nb {
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
    const r = oe.parse(t, {
      ignoreQueryPrefix: !0
    }), n = {};
    return Object.entries(r).forEach((a) => {
      const s = a[0], i = a[1];
      n[s] = this._convertValue(s, i);
    }), n;
  }
}
class ab {
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
      return oe.stringify(n, {
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
      const a = ae(n);
      return Object.keys(r).forEach((s) => {
        a[s] = r[s];
      }), a;
    }, this.urlParamsMapping = Ji(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !Ly(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !zy(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new tb(), this.urlParser = t.urlParser || new nb(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), a = this._mergeParamsIntoState(n, t), s = this._mapQueryStateToUrlParams(a);
    return Mr(s), a;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      rb(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    Mr(r);
  }
}
const sb = "SET_QUERY_COMPONENT_INITIAL_STATE", ra = "SET_QUERY_STRING", Wt = "SET_QUERY_SORTING", Kt = "SET_QUERY_SORT_BY", Xt = "SET_QUERY_SORT_ORDER", Ae = "SET_QUERY_STATE", na = "SET_QUERY_PAGINATION_PAGE", aa = "SET_QUERY_PAGINATION_SIZE", sa = "SET_QUERY_FILTERS", ia = "SET_QUERY_SUGGESTIONS", oa = "SET_SUGGESTION_STRING", la = "CLEAR_QUERY_SUGGESTIONS", ua = "RESULTS_LOADING", ca = "RESULTS_FETCH_SUCCESS", da = "RESULTS_FETCH_ERROR", bt = "RESULTS_UPDATE_LAYOUT", pa = "RESET_QUERY", ib = (e) => (t) => {
  e && t(N({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, ha = (e) => (t) => {
  t({
    type: Ae,
    payload: e
  }), t(N());
}, fa = (e) => (t) => {
  t({
    type: ra,
    payload: e
  }), t(N());
}, ob = (e, t) => (r) => {
  r({
    type: Wt,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(N());
}, lb = (e) => (t) => {
  t({
    type: Kt,
    payload: e
  }), t(N());
}, ub = (e) => (t) => {
  t({
    type: Xt,
    payload: e
  }), t(N());
}, cb = (e) => (t) => {
  t({
    type: na,
    payload: e
  }), t(N());
}, db = (e) => (t) => {
  t({
    type: aa,
    payload: e
  }), t(N());
}, Zt = (e) => (t) => {
  t({
    type: sa,
    payload: e
  }), t(N());
}, pb = (e) => async (t, r, n) => {
  const a = n.urlHandlerApi;
  if (a) {
    await t({
      type: bt,
      payload: e
    });
    const s = r().query;
    a.set(s);
  } else
    t({
      type: bt,
      payload: e
    });
}, hb = () => (e, t, r) => {
  e({
    type: pa,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(N());
}, fb = (e, t, r, n) => {
  const a = t.urlHandlerApi;
  a && (r ? a.replace(e) : n && a.set(e));
}, gb = (e, t, r, n) => {
  const a = r().query;
  t({
    type: Ae,
    payload: {
      ...a,
      ...e.newQueryState
    }
  });
  const s = ae(r().query), i = n.urlHandlerApi;
  return i && i.replace(s), delete e.newStateQuery, e;
}, mb = (e, t, r, n) => {
  function a(o, u, c, d) {
    o.queryString === "" ? (o.sortBy = c.defaultSortingOnEmptyQueryString.sortBy, o.sortOrder = c.defaultSortingOnEmptyQueryString.sortOrder) : (o.sortBy = u.initialSortBy, o.sortOrder = u.initialSortOrder), d({
      type: Ae,
      payload: o
    });
  }
  function s(o, u, c, d) {
    u.hasUserChangedSorting || a(o, u, c, d);
  }
  !M(r.defaultSortingOnEmptyQueryString) && s(e, t, r, n);
}, N = function() {
  let {
    shouldUpdateUrlQueryString: e = !0,
    shouldReplaceUrlQueryString: t = !1
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return async (r, n, a) => {
    const s = n().app;
    let i = ae(n().query);
    mb(i, s, a, r), i = ae(n().query), fb(i, a, t, e), r({
      type: ua
    });
    try {
      let u = await a.searchApi.search(i);
      "newQueryState" in u && (u = gb(ae(u), r, n, a)), r({
        type: ca,
        payload: {
          aggregations: u.aggregations,
          hits: u.hits,
          total: u.total
        }
      });
    } catch (o) {
      if (o instanceof Yt) {
        console.debug(o);
        return;
      } else
        console.error(o), r({
          type: da,
          payload: {
            error: o
          }
        });
    }
  };
}, yb = (e) => (t) => {
  t({
    type: oa,
    payload: e
  }), t(bb());
}, bb = () => async (e, t, r) => {
  const n = ae(t().query), a = r.suggestionApi;
  try {
    const s = await a.search(n);
    e({
      type: ia,
      payload: {
        suggestions: s.suggestions
      }
    });
  } catch (s) {
    console.error("Could not load suggestions due to: " + s);
  }
}, vb = () => (e) => {
  e({
    type: la,
    payload: {
      suggestions: []
    }
  });
}, Sb = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: Ae,
      payload: n
    }), e(N({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, _ = /* @__PURE__ */ l.createContext({}), _b = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
    case Wt:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Kt:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    case Xt:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    default:
      return e;
  }
}, $b = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case ra:
      return {
        ...e,
        queryString: t.payload,
        page: 1
      };
    case Wt:
      return {
        ...e,
        sortBy: t.payload.sortBy,
        sortOrder: t.payload.sortOrder,
        _sortUserChanged: !0,
        page: 1
      };
    case Kt:
      return {
        ...e,
        sortBy: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case Xt:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case na:
      return {
        ...e,
        page: t.payload
      };
    case aa:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case sa:
      return {
        ...e,
        page: 1,
        filters: Zn(t.payload, e.filters)
      };
    case ia:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case la:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case oa:
      return {
        ...e,
        suggestionString: t.payload
      };
    case sb:
      return {
        ...e,
        ...t.payload
      };
    case Ae:
      return {
        ...e,
        ...Qe,
        ...Jn(Qe, t.payload, ea)
      };
    case bt:
      return {
        ...e,
        layout: t.payload
      };
    case pa:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, Eb = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case ua:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case ca:
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
    case da:
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
var xb = hi({
  app: _b,
  query: $b,
  results: Eb
});
function zr(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: a,
    sortOrder: s
  } = t;
  return r !== a || n !== s;
}
function Cb(e, t, r) {
  const n = zr(r, t), a = !M(e.defaultSortingOnEmptyQueryString);
  let s = !1;
  return a && (s = zr(r, e.defaultSortingOnEmptyQueryString)), n && s;
}
function Tb(e) {
  const t = {
    ...Qe,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = Cb(e, t, r), a = {
    ...Jy,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, s = {
    ...Zy,
    loading: e.searchOnInit
  };
  return {
    app: a,
    query: r,
    results: s
  };
}
function wb(e) {
  const t = Tb(e);
  return fi(xb, t, gi(mi.withExtraArgument(e)));
}
function qr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class Jt extends A {
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
Jt.defaultProps = {
  searchOnInit: !0,
  eventListenerEnabled: !1
};
Jt.contextType = _;
var Ab = g.component("Bootstrap", Jt);
const Fb = (e) => ({
  onAppInitialized: (t) => e(ib(t)),
  updateQueryState: (t) => e(ha(t)),
  searchOnUrlQueryStringChanged: () => e(Sb())
}), Ob = x(null, Fb)(Ab);
class er extends A {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new ab(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = wb(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
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
      buildUID: (u, c) => qr(u, c, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, o = qr("ReactSearchKit.children", a, t);
    return /* @__PURE__ */ l.createElement(_.Provider, {
      value: i
    }, /* @__PURE__ */ l.createElement(pi, {
      store: this.store
    }, /* @__PURE__ */ l.createElement(Ob, {
      searchOnInit: s,
      eventListenerEnabled: n
    }, /* @__PURE__ */ l.createElement(g, {
      id: o
    }, r))));
  }
}
er.defaultProps = {
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
er.contextType = _;
var Ib = g.component("ReactSearchKit", er);
class ga extends A {
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
    return !!t.length && /* @__PURE__ */ l.createElement(ma, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
ga.defaultProps = {
  overridableId: ""
};
const ma = (e) => {
  let {
    overridableId: t,
    filters: r,
    removeActiveFilter: n,
    getLabel: a
  } = e;
  const {
    buildUID: s
  } = E(_);
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
      /* @__PURE__ */ l.createElement(bn, {
        image: !0,
        key: o,
        onClick: () => n(c)
      }, u, /* @__PURE__ */ l.createElement(se, {
        name: "delete"
      }))
    );
  })));
};
ma.defaultProps = {
  overridableId: ""
};
var Pb = g.component("ActiveFilters", ga);
const Rb = (e) => ({
  updateQueryFilters: (t) => e(Zt(t))
});
x((e) => ({
  filters: e.query.filters
}), Rb)(Pb);
function kb(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var Db = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
kb(Db);
class ya extends A {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? yi.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ l.createElement(Bb, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
ya.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const Lb = (e) => /* @__PURE__ */ l.createElement(ya, Object.assign({
  key: e.queryString
}, e)), Bb = (e) => {
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
  } = E(_), c = (p, h) => {
    i();
  }, d = (p, h) => {
    p.key === "Enter" && i();
  };
  return /* @__PURE__ */ l.createElement(g, Object.assign({
    id: u("AutocompleteSearchBar.element", t)
  }, o), /* @__PURE__ */ l.createElement("div", {
    className: "AutoCompleteText"
  }, /* @__PURE__ */ l.createElement(vn, {
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
  }), /* @__PURE__ */ l.createElement(Nb, {
    querySuggestions: a,
    overridableId: t
  })));
}, Nb = (e) => {
  let {
    overridableId: t,
    ...r
  } = e;
  const {
    querySuggestions: n
  } = r, {
    buildUID: a
  } = E(_), s = async (i) => {
    await (void 0).setState({
      currentValue: i
    }), (void 0).clearSuggestions(), (void 0).executeSearch();
  };
  return n.length === 0 ? null : /* @__PURE__ */ l.createElement(g, Object.assign({
    id: a("AutocompleteSearchBar.suggestions", t)
  }, r), /* @__PURE__ */ l.createElement("ul", null, n.map((i) => /* @__PURE__ */ l.createElement(ie, {
    as: "li",
    onClick: () => s(i),
    key: i
  }, i))));
};
var Ub = g.component("AutocompleteSearchBar", Lb);
const Qb = (e) => ({
  updateQueryString: (t) => e(fa(t)),
  updateSuggestions: (t) => e(yb(t)),
  clearSuggestions: () => e(vb())
}), jb = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
x(jb, Qb)(Ub);
class at extends A {
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
        return /* @__PURE__ */ l.createElement(at, {
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
      return /* @__PURE__ */ l.createElement(va, {
        key: s.key,
        bucket: s,
        keyField: i,
        isSelected: o,
        onFilterClicked: u,
        getChildAggCmps: c,
        overridableId: n
      });
    });
    return /* @__PURE__ */ l.createElement(ba, {
      valuesCmp: a,
      overridableId: n
    });
  }
}
at.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const ba = (e) => {
  let {
    valuesCmp: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = E(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: n("BucketAggregationContainer.element", r),
    valuesCmp: t
  }, /* @__PURE__ */ l.createElement(Sn, null, t));
};
ba.defaultProps = {
  overridableId: ""
};
const va = (e) => {
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
  } = E(_), c = t.label ? t.label : `${i} (${t.doc_count.toLocaleString("en-US")})`, d = a(t);
  return /* @__PURE__ */ l.createElement(g, {
    id: o("BucketAggregationValues.element", s),
    bucket: t,
    label: c,
    onFilterClicked: n,
    isSelected: r,
    childAggCmps: d
  }, /* @__PURE__ */ l.createElement(Sn.Item, {
    key: t.key
  }, /* @__PURE__ */ l.createElement(_n, {
    label: c,
    id: u(),
    value: t.key,
    onClick: () => n(t.key),
    checked: r
  }), d));
};
va.defaultProps = {
  overridableId: ""
};
var Mb = g.component("BucketAggregationValues", at);
class Sa extends A {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: a
      } = this.props;
      return /* @__PURE__ */ l.createElement(Mb, {
        buckets: r,
        selectedFilters: n,
        field: this.agg.field,
        aggName: this.agg.aggName,
        childAgg: this.agg.childAgg,
        onFilterClicked: this.onFilterClicked,
        overridableId: a
      });
    }, this._getSelectedFilters = (r) => r.filter((n) => n[0] === this.agg.aggName), this._getResultBuckets = (r) => {
      const n = be(r, this.agg.aggName, {});
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
    return /* @__PURE__ */ l.createElement(_a, Object.assign({
      title: this.title,
      containerCmp: o,
      overridableId: n
    }, a));
  }
}
Sa.defaultProps = {
  overridableId: ""
};
const _a = (e) => {
  let {
    overridableId: t,
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: s
  } = e;
  const {
    buildUID: i
  } = E(_);
  return a && /* @__PURE__ */ l.createElement(g, {
    id: i("BucketAggregation.element", t),
    agg: r,
    title: n,
    containerCmp: a,
    updateQueryFilters: s
  }, /* @__PURE__ */ l.createElement(I, null, /* @__PURE__ */ l.createElement(I.Content, null, /* @__PURE__ */ l.createElement(I.Header, null, n)), /* @__PURE__ */ l.createElement(I.Content, null, a)));
};
_a.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var zb = g.component("BucketAggregation", Sa);
const qb = (e) => ({
  updateQueryFilters: (t) => e(Zt(t))
});
x((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), qb)(zb);
class $a extends A {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
$a.defaultProps = {
  condition: !0
};
var D = g.component("ShouldRender", $a);
class Ea extends A {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: a
    } = this.props;
    return /* @__PURE__ */ l.createElement(D, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ l.createElement(xa, {
      totalResults: r,
      overridableId: a
    })));
  }
}
Ea.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const xa = (e) => {
  let {
    totalResults: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = E(_), a = n("Count.element", r);
  return /* @__PURE__ */ l.createElement(g, {
    id: a,
    totalResults: t
  }, /* @__PURE__ */ l.createElement(bn, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
xa.defaultProps = {
  overridableId: ""
};
var Gb = g.component("Count", Ea);
const Vb = x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(Gb);
class Ca extends A {
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
      condition: !t && M(n) && r === 0
    }, /* @__PURE__ */ l.createElement(Ta, Object.assign({}, u, {
      queryString: a,
      resetQuery: this.resetQuery,
      extraContent: s,
      userSelectionFilters: o,
      overridableId: i
    })));
  }
}
Ca.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
const Ta = (e) => {
  let {
    overridableId: t,
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: s
  } = e;
  const {
    buildUID: i
  } = E(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: i("EmptyResults.element", t),
    queryString: r,
    resetQuery: n,
    extraContent: a,
    userSelectionFilters: s
  }, /* @__PURE__ */ l.createElement(Js, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ l.createElement($n, {
    icon: !0
  }, /* @__PURE__ */ l.createElement(se, {
    name: "search"
  }), "No results found!"), r && /* @__PURE__ */ l.createElement("em", null, 'Current search "', r, '"'), /* @__PURE__ */ l.createElement("br", null), /* @__PURE__ */ l.createElement(ie, {
    primary: !0,
    onClick: () => n()
  }, "Clear query"), a));
};
Ta.defaultProps = {
  queryString: "",
  extraContent: null,
  overridableId: ""
};
var Hb = g.component("EmptyResults", Ca);
const Yb = (e) => ({
  resetQuery: () => e(hb())
}), Wb = x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), Yb)(Hb);
function wa(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ l.createElement(D, {
    condition: !t && !M(r)
  }, /* @__PURE__ */ l.createElement(Aa, {
    error: r,
    overridableId: n
  }));
}
wa.defaultProps = {
  overridableId: ""
};
const Aa = (e) => {
  let {
    error: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = E(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: n("Error.element", r),
    error: t
  }, /* @__PURE__ */ l.createElement("div", null, "Oops! Something went wrong while fetching results."));
};
Aa.defaultProps = {
  overridableId: ""
};
var Kb = g.component("Error", wa);
x((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(Kb);
function Xb(e) {
  const t = (a) => /* @__PURE__ */ l.createElement(e, a);
  return x((a) => ({
    currentQueryState: a.query,
    currentResultsState: a.results
  }), (a) => ({
    updateQueryState: (s) => a(ha(s))
  }))(t);
}
class Fa extends A {
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
    }, /* @__PURE__ */ l.createElement(Oa, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: a
    }));
  }
}
Fa.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
const Oa = (e) => {
  let {
    overridableId: t,
    currentLayout: r,
    onLayoutChange: n
  } = e;
  const {
    buildUID: a
  } = E(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: a("LayoutSwitcher.element", t),
    currentLayout: r,
    onLayoutChange: n
  }, /* @__PURE__ */ l.createElement(Se, {
    compact: !0,
    icon: !0
  }, /* @__PURE__ */ l.createElement(Se.Item, {
    name: "list",
    active: r === "list",
    onClick: (s, i) => {
      let {
        name: o
      } = i;
      return n(o);
    }
  }, /* @__PURE__ */ l.createElement(se, {
    name: "list layout"
  })), /* @__PURE__ */ l.createElement(Se.Item, {
    name: "grid",
    active: r === "grid",
    onClick: (s, i) => {
      let {
        name: o
      } = i;
      return n(o);
    }
  }, /* @__PURE__ */ l.createElement(se, {
    name: "grid layout"
  }))));
};
Oa.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var Zb = g.component("LayoutSwitcher", Fa);
const Jb = (e) => ({
  updateLayout: (t) => e(pb(t))
});
x((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), Jb)(Zb);
const Gr = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class Ia extends A {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...Gr,
      ...t.options
    } : Gr;
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
    }, /* @__PURE__ */ l.createElement(Pa, {
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
Ia.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const Pa = (e) => {
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
  const c = i.boundaryRangeCount, d = i.siblingRangeCount, p = i.showEllipsis, h = i.showFirst, f = i.showLast, m = i.showPrev, y = i.showNext, b = i.size, v = Math.floor(o / n), C = Math.ceil(a / n), U = Math.min(C, v), {
    buildUID: O
  } = E(_);
  return r > C && s(C), /* @__PURE__ */ l.createElement(g, {
    id: O("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: a,
    options: i,
    onPageChange: s
  }, /* @__PURE__ */ l.createElement(ei, Object.assign({
    activePage: r,
    totalPages: U,
    onPageChange: (G, T) => {
      let {
        activePage: fe
      } = T;
      return s(fe);
    },
    boundaryRange: c,
    siblingRange: d,
    ellipsisItem: p ? void 0 : null,
    firstItem: h ? void 0 : null,
    lastItem: f ? void 0 : null,
    prevItem: m ? void 0 : null,
    nextItem: y ? void 0 : null,
    size: b
  }, u)));
};
Pa.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var ev = g.component("Pagination", Ia);
const tv = (e) => ({
  updateQueryPage: (t) => e(cb(t))
}), rv = x((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), tv)(ev);
function Ra(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    resultsPerRow: a,
    overridableId: s,
    onResultsRendered: i
  } = e;
  return Ot(() => {
    i && i();
  }, [i]), /* @__PURE__ */ l.createElement(D, {
    condition: !t && r > 0
  }, /* @__PURE__ */ l.createElement(ka, {
    results: n,
    resultsPerRow: a,
    overridableId: s
  }));
}
Ra.defaultProps = {
  resultsPerRow: 3,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const nv = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = E(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: n("ResultsGrid.item", r),
    result: t
  }, /* @__PURE__ */ l.createElement(I, {
    fluid: !0,
    href: `#${t.id}`
  }, /* @__PURE__ */ l.createElement(ri, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ l.createElement(I.Content, null, /* @__PURE__ */ l.createElement(I.Header, null, t.title), /* @__PURE__ */ l.createElement(I.Description, null, t.description))));
}, ka = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: a
  } = E(_), s = r.map((i, o) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ l.createElement(nv, {
      key: o,
      result: i,
      overridableId: t
    })
  ));
  return /* @__PURE__ */ l.createElement(g, {
    id: a("ResultsGrid.container", t),
    results: s,
    resultsPerRow: n
  }, /* @__PURE__ */ l.createElement(I.Group, {
    itemsPerRow: n
  }, s));
};
ka.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var av = g.component("ResultsGrid", Ra);
const sv = x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(av);
function Da(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return Ot(() => {
    s && s();
  }, [s]), /* @__PURE__ */ l.createElement(D, {
    condition: !t && r > 0
  }, /* @__PURE__ */ l.createElement(La, {
    results: n,
    overridableId: a
  }));
}
Da.defaultProps = {
  overridableId: "",
  onResultsRendered: () => {
  }
};
const iv = (e) => {
  let {
    result: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = E(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: n("ResultsList.item", r),
    result: t
  }, /* @__PURE__ */ l.createElement(te, {
    href: `#${t.id}`
  }, /* @__PURE__ */ l.createElement(te.Image, {
    size: "small",
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ l.createElement(te.Content, null, /* @__PURE__ */ l.createElement(te.Header, null, t.title), /* @__PURE__ */ l.createElement(te.Description, null, t.description))));
}, La = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = E(_), a = t.map((s, i) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ l.createElement(iv, {
      result: s,
      key: i,
      overridableId: r
    })
  ));
  return /* @__PURE__ */ l.createElement(g, {
    id: n("ResultsList.container", r),
    results: a
  }, /* @__PURE__ */ l.createElement(te.Group, {
    divided: !0,
    relaxed: !0,
    link: !0
  }, a));
};
La.defaultProps = {
  overridableId: ""
};
var ov = g.component("ResultsList", Da);
const Ba = x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(ov);
function Na(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ l.createElement(Ua, {
    overridableId: n
  }) : t;
}
Na.defaultProps = {
  overridableId: ""
};
const Ua = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = E(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ l.createElement(ti, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
Ua.defaultProps = {
  overridableId: ""
};
var lv = g.component("ResultsLoader", Na);
const uv = x((e) => ({
  loading: e.results.loading
}))(lv);
function Qa(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return /* @__PURE__ */ l.createElement(D, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ l.createElement(ja, {
    layout: n,
    overridableId: a,
    onResultsRendered: s
  }));
}
Qa.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const ja = (e) => {
  let {
    layout: t,
    overridableId: r,
    onResultsRendered: n
  } = e;
  const {
    buildUID: a
  } = E(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: a("ResultsMultiLayout.element", r),
    layout: t,
    onResultsRendered: n
  }, t === "list" ? /* @__PURE__ */ l.createElement(Ba, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ l.createElement(sv, {
    overridableId: r,
    onResultsRendered: n
  }));
};
ja.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var cv = g.component("ResultsMultiLayout", Qa);
x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(cv);
class Ma extends A {
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
    }, a(/* @__PURE__ */ l.createElement(za, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: o
    })));
  }
}
Ma.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const za = (e) => {
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
  } = E(_), u = n.map((c, d) => ({
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
za.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var dv = g.component("ResultsPerPage", Ma);
const pv = (e) => ({
  updateQuerySize: (t) => e(db(t))
}), hv = x((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), pv)(dv);
class qa extends A {
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
    return /* @__PURE__ */ l.createElement(tr, {
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
qa.defaultProps = {
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
const Ga = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ l.createElement(qa, Object.assign({
    key: t
  }, e));
};
Ga.defaultProps = {
  queryString: ""
};
class tr extends A {
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
    }, /* @__PURE__ */ l.createElement(vn, Object.assign({
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
tr.defaultProps = {
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
tr.contextType = _;
var fv = g.component("SearchBar", Ga);
const gv = (e) => ({
  updateQueryString: (t) => e(fa(t))
}), mv = x((e) => ({
  queryString: e.query.queryString
}), gv)(fv);
class Va extends A {
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
    }, s(/* @__PURE__ */ l.createElement(Ha, {
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
Va.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const Ha = (e) => {
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
  } = E(_), d = i(r, n), p = a.map((h, f) => ({
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
        value: m
      } = f;
      return s(m);
    },
    "aria-label": o,
    selectOnNavigation: u
  }));
};
Ha.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var yv = g.component("Sort", Va);
const bv = (e) => ({
  updateQuerySorting: (t, r) => e(ob(t, r))
});
x((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), bv)(yv);
class Ya extends A {
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
    }, a(/* @__PURE__ */ l.createElement(Wa, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: o
    })));
  }
}
Ya.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const Wa = (e) => {
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
  } = E(_), u = n.map((c, d) => ({
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
Wa.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var vv = g.component("SortBy", Ya);
const Sv = (e) => ({
  updateQuerySortBy: (t) => e(lb(t))
});
x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), Sv)(vv);
class Ka extends A {
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
    }, a(/* @__PURE__ */ l.createElement(Xa, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: o
    })));
  }
}
Ka.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const Xa = (e) => {
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
  } = E(_), u = n.map((c, d) => ({
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
Xa.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var _v = g.component("SortOrder", Ka);
const $v = (e) => ({
  updateQuerySortOrder: (t) => e(ub(t))
});
x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), $v)(_v);
const Za = (e) => {
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
  } = E(_), d = o(r);
  return /* @__PURE__ */ l.createElement(g, {
    id: c("SearchFilters.Toggle.element", t),
    title: n,
    label: a,
    filterValue: s,
    userSelectionFilters: r,
    updateQueryFilters: i
  }, /* @__PURE__ */ l.createElement(I, null, /* @__PURE__ */ l.createElement(I.Content, null, /* @__PURE__ */ l.createElement(I.Header, null, n)), /* @__PURE__ */ l.createElement(I.Content, null, /* @__PURE__ */ l.createElement(_n, {
    toggle: !0,
    label: a,
    onClick: u,
    checked: d
  }))));
};
Za.defaultProps = {
  overridableId: ""
};
var Ev = g.component("SearchFilters.Toggle", Za);
const xv = (e) => ({
  updateQueryFilters: (t) => e(Zt(t))
});
x((e) => ({
  userSelectionFilters: e.query.filters
}), xv)(Ev);
const Ja = l.createContext(
  null
), Cv = ({ config: e, children: t }) => /* @__PURE__ */ l.createElement(Ja.Provider, { value: { config: e } }, t), Tv = () => {
  const e = l.useContext(Ja);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
}, wv = ({
  result: e,
  index: t
}) => /* @__PURE__ */ l.createElement(En, { key: t }, /* @__PURE__ */ l.createElement(V, null, e.title || "No title"), /* @__PURE__ */ l.createElement(V, null, e.created), /* @__PURE__ */ l.createElement(V, null, e.status), /* @__PURE__ */ l.createElement(V, null, "999"), /* @__PURE__ */ l.createElement(V, null, "999"), /* @__PURE__ */ l.createElement(V, null, e.serializer), /* @__PURE__ */ l.createElement(V, null, e.mode), /* @__PURE__ */ l.createElement(V, { style: { width: "220px" } }, /* @__PURE__ */ l.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ l.createElement(
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
        disabled: !0
      }
    ]
  }
), /* @__PURE__ */ l.createElement(ie, { basic: !0, size: "tiny" }, /* @__PURE__ */ l.createElement(se, { name: "eye" }), "View")))), Av = ({ children: e }) => /* @__PURE__ */ l.createElement(ni, { celled: !0, size: "small", comp: !0 }, /* @__PURE__ */ l.createElement(ai, null, /* @__PURE__ */ l.createElement(En, null, /* @__PURE__ */ l.createElement(H, null, "ID"), /* @__PURE__ */ l.createElement(H, null, "Date"), /* @__PURE__ */ l.createElement(H, null, "Status"), /* @__PURE__ */ l.createElement(H, null, "Records"), /* @__PURE__ */ l.createElement(H, null, "Files"), /* @__PURE__ */ l.createElement(H, null, "Provider"), /* @__PURE__ */ l.createElement(H, null, "Mode"), /* @__PURE__ */ l.createElement(H, null, "Actions"))), /* @__PURE__ */ l.createElement(si, null, e)), z = {
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
    size: 20,
    sortBy: "newest"
  },
  layoutOptions: {
    gridView: !1,
    listView: !0
  },
  paginationOptions: {
    defaultValue: 20,
    maxTotalResults: 1e4,
    resultsPerPage: [
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
};
var vt;
try {
  vt = Map;
} catch {
}
var St;
try {
  St = Set;
} catch {
}
function es(e, t, r) {
  if (!e || typeof e != "object" || typeof e == "function")
    return e;
  if (e.nodeType && "cloneNode" in e)
    return e.cloneNode(!0);
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof RegExp)
    return new RegExp(e);
  if (Array.isArray(e))
    return e.map(_t);
  if (vt && e instanceof vt)
    return new Map(Array.from(e.entries()));
  if (St && e instanceof St)
    return new Set(Array.from(e.values()));
  if (e instanceof Object) {
    t.push(e);
    var n = Object.create(e);
    r.push(n);
    for (var a in e) {
      var s = t.findIndex(function(i) {
        return i === e[a];
      });
      n[a] = s > -1 ? r[s] : es(e[a], t, r);
    }
    return n;
  }
  return e;
}
function _t(e) {
  return es(e, [], []);
}
const Fv = Object.prototype.toString, Ov = Error.prototype.toString, Iv = RegExp.prototype.toString, Pv = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Rv = /^Symbol\((.*)\)(.*)$/;
function kv(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Vr(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return kv(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return Pv.call(e).replace(Rv, "Symbol($1)");
  const n = Fv.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + Ov.call(e) + "]" : n === "RegExp" ? Iv.call(e) : null;
}
function _e(e, t) {
  let r = Vr(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = Vr(this[n], t);
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
    let a = n != null && n !== r, s = `${e} must be a \`${t}\` type, but the final value was: \`${_e(r, !0)}\`` + (a ? ` (cast from the value \`${_e(n, !0)}\`).` : ".");
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
}, Dv = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, $t = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Lv = {
  isValue: "${path} field must be ${value}"
}, Et = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, Bv = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: X,
  string: L,
  number: Dv,
  date: $t,
  object: Et,
  array: Bv,
  boolean: Lv
});
var Nv = Object.prototype, Uv = Nv.hasOwnProperty;
function Qv(e, t) {
  return e != null && Uv.call(e, t);
}
var jv = Qv, Mv = jv, zv = Ln;
function qv(e, t) {
  return e != null && zv(e, t, Mv);
}
var Gv = qv;
const je = /* @__PURE__ */ w(Gv), ts = (e) => e && e.__isYupSchema__;
class Vv {
  constructor(t, r) {
    if (this.fn = void 0, this.refs = t, this.refs = t, typeof r == "function") {
      this.fn = r;
      return;
    }
    if (!je(r, "is"))
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
    if (!ts(a))
      throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
function rs(e) {
  return e == null ? [] : [].concat(e);
}
function xt() {
  return xt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xt.apply(this, arguments);
}
let Hv = /\$\{\s*(\w+)\s*\}/g;
class P extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = xt({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(Hv, (a, s) => _e(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], rs(t).forEach((s) => {
      P.isError(s) ? (this.errors.push(...s.errors), this.inner = this.inner.concat(s.inner.length ? s.inner : s)) : this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, P);
  }
}
const Yv = (e) => {
  let t = !1;
  return (...r) => {
    t || (t = !0, e(...r));
  };
};
function Ct(e, t) {
  let {
    endEarly: r,
    tests: n,
    args: a,
    value: s,
    errors: i,
    sort: o,
    path: u
  } = e, c = Yv(t), d = n.length;
  const p = [];
  if (i = i || [], !d)
    return i.length ? c(new P(i, s, u)) : c(null, s);
  for (let h = 0; h < n.length; h++) {
    const f = n[h];
    f(a, function(y) {
      if (y) {
        if (!P.isError(y))
          return c(y, s);
        if (r)
          return y.value = s, c(y, s);
        p.push(y);
      }
      if (--d <= 0) {
        if (p.length && (o && p.sort(o), i.length && p.push(...i), i = p), i.length) {
          c(new P(i, s, u), s);
          return;
        }
        c(null, s);
      }
    });
  }
}
function Wv(e) {
  return function(t, r, n) {
    for (var a = -1, s = Object(t), i = n(t), o = i.length; o--; ) {
      var u = i[e ? o : ++a];
      if (r(s[u], u, s) === !1)
        break;
    }
    return t;
  };
}
var Kv = Wv, Xv = Kv, Zv = Xv(), Jv = Zv, eS = Jv, tS = we;
function rS(e, t) {
  return e && eS(e, t, tS);
}
var ns = rS, nS = "__lodash_hash_undefined__";
function aS(e) {
  return this.__data__.set(e, nS), this;
}
var sS = aS;
function iS(e) {
  return this.__data__.has(e);
}
var oS = iS, lS = Nt, uS = sS, cS = oS;
function Me(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new lS(); ++t < r; )
    this.add(e[t]);
}
Me.prototype.add = Me.prototype.push = uS;
Me.prototype.has = cS;
var dS = Me;
function pS(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var hS = pS;
function fS(e, t) {
  return e.has(t);
}
var gS = fS, mS = dS, yS = hS, bS = gS, vS = 1, SS = 2;
function _S(e, t, r, n, a, s) {
  var i = r & vS, o = e.length, u = t.length;
  if (o != u && !(i && u > o))
    return !1;
  var c = s.get(e), d = s.get(t);
  if (c && d)
    return c == t && d == e;
  var p = -1, h = !0, f = r & SS ? new mS() : void 0;
  for (s.set(e, t), s.set(t, e); ++p < o; ) {
    var m = e[p], y = t[p];
    if (n)
      var b = i ? n(y, m, p, t, e, s) : n(m, y, p, e, t, s);
    if (b !== void 0) {
      if (b)
        continue;
      h = !1;
      break;
    }
    if (f) {
      if (!yS(t, function(v, C) {
        if (!bS(f, C) && (m === v || a(m, v, r, n, s)))
          return f.push(C);
      })) {
        h = !1;
        break;
      }
    } else if (!(m === y || a(m, y, r, n, s))) {
      h = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), h;
}
var as = _S;
function $S(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var ES = $S;
function xS(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var CS = xS, Hr = le, Yr = Hn, TS = Ke, wS = as, AS = ES, FS = CS, OS = 1, IS = 2, PS = "[object Boolean]", RS = "[object Date]", kS = "[object Error]", DS = "[object Map]", LS = "[object Number]", BS = "[object RegExp]", NS = "[object Set]", US = "[object String]", QS = "[object Symbol]", jS = "[object ArrayBuffer]", MS = "[object DataView]", Wr = Hr ? Hr.prototype : void 0, ut = Wr ? Wr.valueOf : void 0;
function zS(e, t, r, n, a, s, i) {
  switch (r) {
    case MS:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case jS:
      return !(e.byteLength != t.byteLength || !s(new Yr(e), new Yr(t)));
    case PS:
    case RS:
    case LS:
      return TS(+e, +t);
    case kS:
      return e.name == t.name && e.message == t.message;
    case BS:
    case US:
      return e == t + "";
    case DS:
      var o = AS;
    case NS:
      var u = n & OS;
      if (o || (o = FS), e.size != t.size && !u)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      n |= IS, i.set(e, t);
      var d = wS(o(e), o(t), n, a, s, i);
      return i.delete(e), d;
    case QS:
      if (ut)
        return ut.call(e) == ut.call(t);
  }
  return !1;
}
var qS = zS, Kr = Vn, GS = 1, VS = Object.prototype, HS = VS.hasOwnProperty;
function YS(e, t, r, n, a, s) {
  var i = r & GS, o = Kr(e), u = o.length, c = Kr(t), d = c.length;
  if (u != d && !i)
    return !1;
  for (var p = u; p--; ) {
    var h = o[p];
    if (!(i ? h in t : HS.call(t, h)))
      return !1;
  }
  var f = s.get(e), m = s.get(t);
  if (f && m)
    return f == t && m == e;
  var y = !0;
  s.set(e, t), s.set(t, e);
  for (var b = i; ++p < u; ) {
    h = o[p];
    var v = e[h], C = t[h];
    if (n)
      var U = i ? n(C, v, h, t, e, s) : n(v, C, h, e, t, s);
    if (!(U === void 0 ? v === C || a(v, C, r, n, s) : U)) {
      y = !1;
      break;
    }
    b || (b = h == "constructor");
  }
  if (y && !b) {
    var O = e.constructor, G = t.constructor;
    O != G && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof G == "function" && G instanceof G) && (y = !1);
  }
  return s.delete(e), s.delete(t), y;
}
var WS = YS, ct = Gt, KS = as, XS = qS, ZS = WS, Xr = Ee, Zr = R, Jr = Ye, JS = Dt, e_ = 1, en = "[object Arguments]", tn = "[object Array]", Ie = "[object Object]", t_ = Object.prototype, rn = t_.hasOwnProperty;
function r_(e, t, r, n, a, s) {
  var i = Zr(e), o = Zr(t), u = i ? tn : Xr(e), c = o ? tn : Xr(t);
  u = u == en ? Ie : u, c = c == en ? Ie : c;
  var d = u == Ie, p = c == Ie, h = u == c;
  if (h && Jr(e)) {
    if (!Jr(t))
      return !1;
    i = !0, d = !1;
  }
  if (h && !d)
    return s || (s = new ct()), i || JS(e) ? KS(e, t, r, n, a, s) : XS(e, t, u, r, n, a, s);
  if (!(r & e_)) {
    var f = d && rn.call(e, "__wrapped__"), m = p && rn.call(t, "__wrapped__");
    if (f || m) {
      var y = f ? e.value() : e, b = m ? t.value() : t;
      return s || (s = new ct()), a(y, b, r, n, s);
    }
  }
  return h ? (s || (s = new ct()), ZS(e, t, r, n, a, s)) : !1;
}
var n_ = r_, a_ = n_, nn = j;
function ss(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !nn(e) && !nn(t) ? e !== e && t !== t : a_(e, t, r, n, ss, a);
}
var is = ss, s_ = Gt, i_ = is, o_ = 1, l_ = 2;
function u_(e, t, r, n) {
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
      var p = new s_();
      if (n)
        var h = n(c, d, u, e, t, p);
      if (!(h === void 0 ? i_(d, c, o_ | l_, n, p) : h))
        return !1;
    }
  }
  return !0;
}
var c_ = u_, d_ = q;
function p_(e) {
  return e === e && !d_(e);
}
var os = p_, h_ = os, f_ = we;
function g_(e) {
  for (var t = f_(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, h_(a)];
  }
  return t;
}
var m_ = g_;
function y_(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var ls = y_, b_ = c_, v_ = m_, S_ = ls;
function __(e) {
  var t = v_(e);
  return t.length == 1 && t[0][2] ? S_(t[0][0], t[0][1]) : function(r) {
    return r === e || b_(r, e, t);
  };
}
var $_ = __, E_ = is, x_ = Dn, C_ = jt, T_ = Bt, w_ = os, A_ = ls, F_ = Ce, O_ = 1, I_ = 2;
function P_(e, t) {
  return T_(e) && w_(t) ? A_(F_(e), t) : function(r) {
    var n = x_(r, e);
    return n === void 0 && n === t ? C_(r, e) : E_(t, n, O_ | I_);
  };
}
var R_ = P_;
function k_(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var D_ = k_, L_ = Qt;
function B_(e) {
  return function(t) {
    return L_(t, e);
  };
}
var N_ = B_, U_ = D_, Q_ = N_, j_ = Bt, M_ = Ce;
function z_(e) {
  return j_(e) ? U_(M_(e)) : Q_(e);
}
var q_ = z_, G_ = $_, V_ = R_, H_ = zt, Y_ = R, W_ = q_;
function K_(e) {
  return typeof e == "function" ? e : e == null ? H_ : typeof e == "object" ? Y_(e) ? V_(e[0], e[1]) : G_(e) : W_(e);
}
var us = K_, X_ = rt, Z_ = ns, J_ = us;
function e0(e, t) {
  var r = {};
  return t = J_(t), Z_(e, function(n, a, s) {
    X_(r, a, t(n, a, s));
  }), r;
}
var t0 = e0;
const cs = /* @__PURE__ */ w(t0);
function ee(e) {
  this._maxSize = e, this.clear();
}
ee.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
ee.prototype.get = function(e) {
  return this._values[e];
};
ee.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var r0 = /[^.^\]^[]+|(?=\[\]|\.\.)/g, ds = /^\d+$/, n0 = /^\d/, a0 = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s0 = /^\s*(['"]?)(.*?)(\1)\s*$/, rr = 512, an = new ee(rr), sn = new ee(rr), on = new ee(rr), st = {
  Cache: ee,
  split: Tt,
  normalizePath: dt,
  setter: function(e) {
    var t = dt(e);
    return sn.get(e) || sn.set(e, function(n, a) {
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
    var r = dt(e);
    return on.get(e) || on.set(e, function(a) {
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
      return t + (nr(r) || ds.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    i0(Array.isArray(e) ? e : Tt(e), t, r);
  }
};
function dt(e) {
  return an.get(e) || an.set(
    e,
    Tt(e).map(function(t) {
      return t.replace(s0, "$2");
    })
  );
}
function Tt(e) {
  return e.match(r0) || [""];
}
function i0(e, t, r) {
  var n = e.length, a, s, i, o;
  for (s = 0; s < n; s++)
    a = e[s], a && (u0(a) && (a = '"' + a + '"'), o = nr(a), i = !o && /^\d+$/.test(a), t.call(r, a, o, i, s, e));
}
function nr(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function o0(e) {
  return e.match(n0) && !e.match(ds);
}
function l0(e) {
  return a0.test(e);
}
function u0(e) {
  return !nr(e) && (o0(e) || l0(e));
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
    this.path = this.key.slice(n.length), this.getter = this.path && st.getter(this.path, !0), this.map = r.map;
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
function ze() {
  return ze = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ze.apply(this, arguments);
}
function c0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Re(e) {
  function t(r, n) {
    let {
      value: a,
      path: s = "",
      label: i,
      options: o,
      originalValue: u,
      sync: c
    } = r, d = c0(r, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name: p,
      test: h,
      params: f,
      message: m
    } = e;
    let {
      parent: y,
      context: b
    } = o;
    function v(T) {
      return Y.isRef(T) ? T.getValue(a, y, b) : T;
    }
    function C(T = {}) {
      const fe = cs(ze({
        value: a,
        originalValue: u,
        label: i,
        path: T.path || s
      }, f, T.params), v), ir = new P(P.formatError(T.message || m, fe), a, fe.path, T.type || p);
      return ir.params = fe, ir;
    }
    let U = ze({
      path: s,
      parent: y,
      type: p,
      createError: C,
      resolve: v,
      options: o,
      originalValue: u
    }, d);
    if (!c) {
      try {
        Promise.resolve(h.call(U, a, U)).then((T) => {
          P.isError(T) ? n(T) : T ? n(null, T) : n(C());
        }).catch(n);
      } catch (T) {
        n(T);
      }
      return;
    }
    let O;
    try {
      var G;
      if (O = h.call(U, a, U), typeof ((G = O) == null ? void 0 : G.then) == "function")
        throw new Error(`Validation test of type: "${U.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (T) {
      n(T);
      return;
    }
    P.isError(O) ? n(O) : O ? n(null, O) : n(C());
  }
  return t.OPTIONS = e, t;
}
let d0 = (e) => e.substr(0, e.length - 1).substr(1);
function p0(e, t, r, n = r) {
  let a, s, i;
  return t ? (st.forEach(t, (o, u, c) => {
    let d = u ? d0(o) : o;
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
class qe {
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
    const t = new qe();
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
    this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this._typeError = void 0, this._whitelist = new qe(), this._blacklist = new qe(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
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
    return r.type = this.type, r._typeError = this._typeError, r._whitelistError = this._whitelistError, r._blacklistError = this._blacklistError, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.exclusiveTests = k({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = _t(k({}, this.spec, t)), r;
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
      let s = _e(t), i = _e(a);
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
    this._whitelistError && f.push(this._whitelistError), this._blacklistError && f.push(this._blacklistError), Ct({
      args: p,
      value: d,
      path: s,
      sync: a,
      tests: h,
      endEarly: c
    }, (m) => {
      if (m)
        return void n(m, d);
      Ct({
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
      if (P.isError(n))
        return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (P.isError(n))
        return !1;
      throw n;
    }
  }
  _getDefault() {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this) : _t(t);
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
    let n = this.clone(), a = Re(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((i) => !(i.OPTIONS.name === r.name && (s || i.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = rs(t).map((s) => new Y(s));
    return a.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(new Vv(a, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r._typeError = Re({
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
    }), n._whitelistError = Re({
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
    }), n._blacklistError = Re({
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
    } = p0(this, t, r, n.context);
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
const h0 = F;
h0.prototype;
const B = (e) => e == null;
let f0 = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, g0 = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, m0 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, y0 = (e) => B(e) || e === e.trim(), b0 = {}.toString();
function ve() {
  return new ps();
}
class ps extends F {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === b0 ? t : r;
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
    return this.matches(f0, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = L.url) {
    return this.matches(g0, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = L.uuid) {
    return this.matches(m0, {
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
      test: y0
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
ve.prototype = ps.prototype;
var v0 = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function S0(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, a;
  if (a = v0.exec(e)) {
    for (var s = 0, i; i = t[s]; ++s)
      a[i] = +a[i] || 0;
    a[2] = (+a[2] || 1) - 1, a[3] = +a[3] || 1, a[7] = a[7] ? String(a[7]).substr(0, 3) : 0, (a[8] === void 0 || a[8] === "") && (a[9] === void 0 || a[9] === "") ? n = +new Date(a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : (a[8] !== "Z" && a[9] !== void 0 && (r = a[10] * 60 + a[11], a[9] === "+" && (r = 0 - r)), n = Date.UTC(a[1], a[2], a[3], a[4], a[5] + r, a[6], a[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let hs = /* @__PURE__ */ new Date(""), _0 = (e) => Object.prototype.toString.call(e) === "[object Date]";
class fs extends F {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = S0(t), isNaN(t) ? hs : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return _0(t) && !isNaN(t.getTime());
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
  min(t, r = $t.min) {
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
  max(t, r = $t.max) {
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
fs.INVALID_DATE = hs;
fs.prototype;
function $0(e, t, r, n) {
  var a = -1, s = e == null ? 0 : e.length;
  for (n && s && (r = e[++a]); ++a < s; )
    r = t(r, e[a], a, e);
  return r;
}
var E0 = $0;
function x0(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var C0 = x0, T0 = C0, w0 = {
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
}, A0 = T0(w0), F0 = A0, O0 = F0, I0 = xe, P0 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, R0 = "\\u0300-\\u036f", k0 = "\\ufe20-\\ufe2f", D0 = "\\u20d0-\\u20ff", L0 = R0 + k0 + D0, B0 = "[" + L0 + "]", N0 = RegExp(B0, "g");
function U0(e) {
  return e = I0(e), e && e.replace(P0, O0).replace(N0, "");
}
var Q0 = U0, j0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function M0(e) {
  return e.match(j0) || [];
}
var z0 = M0, q0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function G0(e) {
  return q0.test(e);
}
var V0 = G0, gs = "\\ud800-\\udfff", H0 = "\\u0300-\\u036f", Y0 = "\\ufe20-\\ufe2f", W0 = "\\u20d0-\\u20ff", K0 = H0 + Y0 + W0, ms = "\\u2700-\\u27bf", ys = "a-z\\xdf-\\xf6\\xf8-\\xff", X0 = "\\xac\\xb1\\xd7\\xf7", Z0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", J0 = "\\u2000-\\u206f", e$ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", bs = "A-Z\\xc0-\\xd6\\xd8-\\xde", t$ = "\\ufe0e\\ufe0f", vs = X0 + Z0 + J0 + e$, Ss = "['’]", ln = "[" + vs + "]", r$ = "[" + K0 + "]", _s = "\\d+", n$ = "[" + ms + "]", $s = "[" + ys + "]", Es = "[^" + gs + vs + _s + ms + ys + bs + "]", a$ = "\\ud83c[\\udffb-\\udfff]", s$ = "(?:" + r$ + "|" + a$ + ")", i$ = "[^" + gs + "]", xs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Cs = "[\\ud800-\\udbff][\\udc00-\\udfff]", re = "[" + bs + "]", o$ = "\\u200d", un = "(?:" + $s + "|" + Es + ")", l$ = "(?:" + re + "|" + Es + ")", cn = "(?:" + Ss + "(?:d|ll|m|re|s|t|ve))?", dn = "(?:" + Ss + "(?:D|LL|M|RE|S|T|VE))?", Ts = s$ + "?", ws = "[" + t$ + "]?", u$ = "(?:" + o$ + "(?:" + [i$, xs, Cs].join("|") + ")" + ws + Ts + ")*", c$ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", d$ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", p$ = ws + Ts + u$, h$ = "(?:" + [n$, xs, Cs].join("|") + ")" + p$, f$ = RegExp([
  re + "?" + $s + "+" + cn + "(?=" + [ln, re, "$"].join("|") + ")",
  l$ + "+" + dn + "(?=" + [ln, re + un, "$"].join("|") + ")",
  re + "?" + un + "+" + cn,
  re + "+" + dn,
  d$,
  c$,
  _s,
  h$
].join("|"), "g");
function g$(e) {
  return e.match(f$) || [];
}
var m$ = g$, y$ = z0, b$ = V0, v$ = xe, S$ = m$;
function _$(e, t, r) {
  return e = v$(e), t = r ? void 0 : t, t === void 0 ? b$(e) ? S$(e) : y$(e) : e.match(t) || [];
}
var $$ = _$, E$ = E0, x$ = Q0, C$ = $$, T$ = "['’]", w$ = RegExp(T$, "g");
function A$(e) {
  return function(t) {
    return E$(C$(x$(t).replace(w$, "")), e, "");
  };
}
var As = A$, F$ = As, O$ = F$(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), I$ = O$;
const pn = /* @__PURE__ */ w(I$);
function P$(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++n < a; )
    s[n] = e[n + t];
  return s;
}
var R$ = P$, k$ = R$;
function D$(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : k$(e, t, r);
}
var L$ = D$, B$ = "\\ud800-\\udfff", N$ = "\\u0300-\\u036f", U$ = "\\ufe20-\\ufe2f", Q$ = "\\u20d0-\\u20ff", j$ = N$ + U$ + Q$, M$ = "\\ufe0e\\ufe0f", z$ = "\\u200d", q$ = RegExp("[" + z$ + B$ + j$ + M$ + "]");
function G$(e) {
  return q$.test(e);
}
var Fs = G$;
function V$(e) {
  return e.split("");
}
var H$ = V$, Os = "\\ud800-\\udfff", Y$ = "\\u0300-\\u036f", W$ = "\\ufe20-\\ufe2f", K$ = "\\u20d0-\\u20ff", X$ = Y$ + W$ + K$, Z$ = "\\ufe0e\\ufe0f", J$ = "[" + Os + "]", wt = "[" + X$ + "]", At = "\\ud83c[\\udffb-\\udfff]", e1 = "(?:" + wt + "|" + At + ")", Is = "[^" + Os + "]", Ps = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rs = "[\\ud800-\\udbff][\\udc00-\\udfff]", t1 = "\\u200d", ks = e1 + "?", Ds = "[" + Z$ + "]?", r1 = "(?:" + t1 + "(?:" + [Is, Ps, Rs].join("|") + ")" + Ds + ks + ")*", n1 = Ds + ks + r1, a1 = "(?:" + [Is + wt + "?", wt, Ps, Rs, J$].join("|") + ")", s1 = RegExp(At + "(?=" + At + ")|" + a1 + n1, "g");
function i1(e) {
  return e.match(s1) || [];
}
var o1 = i1, l1 = H$, u1 = Fs, c1 = o1;
function d1(e) {
  return u1(e) ? c1(e) : l1(e);
}
var p1 = d1, h1 = L$, f1 = Fs, g1 = p1, m1 = xe;
function y1(e) {
  return function(t) {
    t = m1(t);
    var r = f1(t) ? g1(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? h1(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var b1 = y1, v1 = b1, S1 = v1("toUpperCase"), _1 = S1, $1 = xe, E1 = _1;
function x1(e) {
  return E1($1(e).toLowerCase());
}
var C1 = x1, T1 = C1, w1 = As, A1 = w1(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? T1(t) : t);
}), F1 = A1;
const O1 = /* @__PURE__ */ w(F1);
var I1 = rt, P1 = ns, R1 = us;
function k1(e, t) {
  var r = {};
  return t = R1(t), P1(e, function(n, a, s) {
    I1(r, t(n, a, s), n);
  }), r;
}
var D1 = k1;
const L1 = /* @__PURE__ */ w(D1);
var ar = { exports: {} };
ar.exports = function(e) {
  return Ls(B1(e), e);
};
ar.exports.array = Ls;
function Ls(e, t) {
  var r = e.length, n = new Array(r), a = {}, s = r, i = N1(t), o = U1(e);
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
          var m = f[--d];
          u(m, o.get(m), p);
        } while (d);
        p.delete(c);
      }
      n[--r] = c;
    }
  }
}
function B1(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.add(a[0]), t.add(a[1]);
  }
  return Array.from(t);
}
function N1(e) {
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
var Q1 = ar.exports;
const j1 = /* @__PURE__ */ w(Q1);
function M1(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([i, o]) => `${i}-${o}`));
  function s(i, o) {
    let u = st.split(i)[0];
    n.add(u), a.has(`${o}-${u}`) || r.push([o, u]);
  }
  for (const i in e)
    if (je(e, i)) {
      let o = e[i];
      n.add(i), Y.isRef(o) && o.isSibling ? s(o.path, i) : ts(o) && "deps" in o && o.deps.forEach((u) => s(u, i));
    }
  return j1.array(Array.from(n), r).reverse();
}
function hn(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if (((s = t.path) == null ? void 0 : s.indexOf(n)) !== -1)
      return r = a, !0;
  }), r;
}
function Bs(e) {
  return (t, r) => hn(e, t) - hn(e, r);
}
function ne() {
  return ne = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ne.apply(this, arguments);
}
let fn = (e) => Object.prototype.toString.call(e) === "[object Object]";
function z1(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const q1 = Bs([]);
class Ns extends F {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = q1, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
    return fn(t) || typeof t == "function";
  }
  _cast(t, r = {}) {
    var n;
    let a = super._cast(t, r);
    if (a === void 0)
      return this.getDefault();
    if (!this._typeCheck(a))
      return a;
    let s = this.fields, i = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, o = this._nodes.concat(Object.keys(a).filter((p) => this._nodes.indexOf(p) === -1)), u = {}, c = ne({}, r, {
      parent: u,
      __validating: r.__validating || !1
    }), d = !1;
    for (const p of o) {
      let h = s[p], f = je(a, p);
      if (h) {
        let m, y = a[p];
        c.path = (r.path ? `${r.path}.` : "") + p, h = h.resolve({
          value: y,
          context: r.context,
          parent: u
        });
        let b = "spec" in h ? h.spec : void 0, v = b == null ? void 0 : b.strict;
        if (b != null && b.strip) {
          d = d || p in a;
          continue;
        }
        m = !r.__validating || !v ? (
          // TODO: use _cast, this is double resolving
          h.cast(a[p], c)
        ) : a[p], m !== void 0 && (u[p] = m);
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
        if (!P.isError(d) || u)
          return void n(d, p);
        a.push(d);
      }
      if (!c || !fn(p)) {
        n(a[0] || null, p);
        return;
      }
      o = o || p;
      let h = this._nodes.map((f) => (m, y) => {
        let b = f.indexOf(".") === -1 ? (r.path ? `${r.path}.` : "") + f : `${r.path || ""}["${f}"]`, v = this.fields[f];
        if (v && "validate" in v) {
          v.validate(p[f], ne({}, r, {
            // @ts-ignore
            path: b,
            from: i,
            // inner fields are always strict:
            // 1. this isn't strict so the casting will also have cast inner values
            // 2. this is strict in which case the nested values weren't cast either
            strict: !0,
            parent: p,
            originalValue: o[f]
          }), y);
          return;
        }
        y(null);
      });
      Ct({
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
    return r.fields = ne({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
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
    return n.fields = a, n._sortErrors = Bs(Object.keys(a)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = M1(a, n._excludedEdges), n;
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
    let a = st.getter(t, !0);
    return this.transform((s) => {
      if (s == null)
        return s;
      let i = s;
      return je(s, t) && (i = ne({}, s), n || delete i[t], i[r] = a(s)), i;
    });
  }
  noUnknown(t = !0, r = Et.noUnknown) {
    typeof t == "string" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(a) {
        if (a == null)
          return !0;
        const s = z1(this.schema, a);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = Et.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => r && L1(r, (n, a) => t(a)));
  }
  camelCase() {
    return this.transformKeys(O1);
  }
  snakeCase() {
    return this.transformKeys(pn);
  }
  constantCase() {
    return this.transformKeys((t) => pn(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = cs(this.fields, (r) => r.describe()), t;
  }
}
function Us(e) {
  return new Ns(e);
}
Us.prototype = Ns.prototype;
const Qs = ke.create({
  baseURL: "",
  timeout: 3e4,
  withCredentials: !0,
  // Include cookies in requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
}), G1 = async () => {
  try {
    const e = await Qs.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, V1 = async (e) => {
  try {
    const t = await Qs.get(
      `/api/importer-tasks/config/${e}`
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error fetching serializers:", t), new Error("Failed to fetch serializers");
  }
}, H1 = () => {
  const [e, t] = pt(
    {}
  ), [r, n] = pt(!0), { values: a, submitForm: s, isSubmitting: i, isValid: o } = _i(), u = Zs(async () => {
    try {
      const c = await G1(), d = {};
      for (const p of c) {
        const h = await V1(p);
        h && (d[p] = h);
      }
      t(d);
    } catch (c) {
      console.error("Error fetching record types:", c);
    } finally {
      n(!1);
    }
  }, []);
  return Ot(() => {
    u();
  }, [u]), r ? /* @__PURE__ */ l.createElement("p", null, "Loading record types...") : !e || Object.keys(e).length === 0 ? /* @__PURE__ */ l.createElement("p", null, "No record types available.") : /* @__PURE__ */ l.createElement("div", null, /* @__PURE__ */ l.createElement(
    bi,
    {
      fieldPath: "title",
      label: "Title",
      placeholder: "Enter a title for the import task",
      required: !0
    }
  ), /* @__PURE__ */ l.createElement(ii.Group, { widths: "equal" }, /* @__PURE__ */ l.createElement(
    it,
    {
      fieldPath: "recordType",
      label: "Record Type",
      options: Object.keys(e).map((c) => ({
        key: c,
        value: c,
        text: c
      })),
      placeholder: "Select Record Type",
      required: !0
    }
  ), /* @__PURE__ */ l.createElement(
    it,
    {
      fieldPath: "serializer",
      label: "Serializer",
      options: a.recordType && e[a.recordType] ? e[a.recordType].serializers.map((c) => ({
        key: c,
        value: c,
        text: `${c} (${a.recordType})`
      })) : [],
      placeholder: "Select Serializer",
      disabled: !a.recordType,
      required: !0
    }
  )), /* @__PURE__ */ l.createElement(
    it,
    {
      fieldPath: "mode",
      label: "Mode",
      options: [
        { key: "import", value: "import", text: "Import" },
        { key: "delete", value: "delete", text: "Delete" }
      ],
      placeholder: "Select Mode",
      disabled: !a.recordType || !a.serializer,
      required: !0
    }
  ), /* @__PURE__ */ l.createElement(
    vi,
    {
      fieldPath: "description",
      label: "Notes",
      placeholder: "Enter a description for the import task",
      rows: 3
    }
  ), /* @__PURE__ */ l.createElement(
    ie,
    {
      type: "button",
      primary: !0,
      onClick: s,
      disabled: !o || i,
      loading: i
    },
    "Submit"
  ));
}, Y1 = {
  title: "",
  description: "",
  mode: "import",
  status: "",
  startTime: null,
  endTime: null,
  recordType: "",
  serializer: ""
}, W1 = Us({
  title: ve().required("Title is required"),
  recordType: ve().required("Record type is required"),
  serializer: ve().required("Serializer is required"),
  mode: ve().required("Mode is required")
}), K1 = () => {
  const e = (t) => {
    console.log("Form submitted with values:", t);
  };
  return /* @__PURE__ */ l.createElement(
    Si,
    {
      formik: {
        initialValues: Y1,
        validationSchema: W1,
        onSubmit: e
      }
    },
    /* @__PURE__ */ l.createElement(H1, null)
  );
}, X1 = () => {
  const [e, t] = pt(!1);
  return /* @__PURE__ */ l.createElement(
    oi,
    {
      closeIcon: !0,
      onClose: () => t(!1),
      onOpen: () => t(!0),
      open: e,
      trigger: /* @__PURE__ */ l.createElement(ie, { color: "green", icon: !0, labelPosition: "left" }, /* @__PURE__ */ l.createElement(se, { name: "add" }), "New Import")
    },
    /* @__PURE__ */ l.createElement(li, null, "New Import Task"),
    /* @__PURE__ */ l.createElement(ui, null, /* @__PURE__ */ l.createElement(K1, null)),
    /* @__PURE__ */ l.createElement(ci, null, /* @__PURE__ */ l.createElement(ie, { onClick: () => t(!1) }, "Close"))
  );
}, Z1 = ({
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
  return /* @__PURE__ */ l.createElement(Se, { activeIndex: 0, compact: !0, size: "tiny" }, r.map(({ key: i, label: o, value: u }) => /* @__PURE__ */ l.createElement(
    Se.Item,
    {
      key: i,
      name: i,
      active: (n == null ? void 0 : n[1]) === u || u === null && !n,
      onClick: () => a(u)
    },
    o
  )));
}, js = Xb(Z1);
function Ft(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var J1 = (e) => typeof e == "object" && e !== null;
function eE(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var tE = (e) => e === "base";
function rE(e) {
  return e.slice().filter((t) => !tE(t));
}
function gn(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function nE(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = gn(r % 52) + t;
  return gn(r % 52) + t;
}
function aE(e, t) {
  let r = t.length;
  for (; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function sE(e) {
  return nE(aE(5381, e) >>> 0);
}
var Ms = /\s*!(important)?/i;
function iE(e) {
  return typeof e == "string" ? Ms.test(e) : !1;
}
function oE(e) {
  return typeof e == "string" ? e.replace(Ms, "").trim() : e;
}
function zs(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var sr = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...n) => {
    const a = JSON.stringify(n);
    if (t.has(a))
      return t.get(a);
    const s = e(...n);
    return t.set(a, s), s;
  };
}, lE = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function qs(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((n) => {
    if (lE.has(n))
      return;
    const a = t[n], s = r[n];
    Ft(a) && Ft(s) ? t[n] = qs(a, s) : t[n] = s;
  }), t), {});
}
var uE = (e) => e != null;
function Gs(e, t, r = {}) {
  const { stop: n, getKey: a } = r;
  function s(i, o = []) {
    if (J1(i)) {
      const u = {};
      for (const [c, d] of Object.entries(i)) {
        const p = (a == null ? void 0 : a(c, d)) ?? c, h = [...o, p];
        if (n != null && n(i, h))
          return t(i, o);
        const f = s(d, h);
        uE(f) && (u[p] = f);
      }
      return u;
    }
    return t(i, o);
  }
  return s(e);
}
function cE(e, t) {
  return e.reduce(
    (r, n, a) => {
      const s = t[a];
      return n != null && (r[s] = n), r;
    },
    {}
  );
}
function Vs(e, t, r = !0) {
  const { utility: n, conditions: a } = t, { hasShorthand: s, resolveShorthand: i } = n;
  return Gs(
    e,
    (o) => Array.isArray(o) ? cE(o, a.breakpoints.keys) : o,
    {
      stop: (o) => Array.isArray(o),
      getKey: r ? (o) => s ? i(o) : o : void 0
    }
  );
}
var dE = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, pE = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function hE(e) {
  const { utility: t, hash: r, conditions: n = dE } = e, a = (i) => [t.prefix, i].filter(Boolean).join("-"), s = (i, o) => {
    let u;
    if (r) {
      const c = [...n.finalize(i), o];
      u = a(t.toHash(c, sE));
    } else
      u = [...n.finalize(i), a(o)].join(":");
    return u;
  };
  return sr(({ base: i, ...o } = {}) => {
    const u = Object.assign(o, i), c = Vs(u, e), d = /* @__PURE__ */ new Set();
    return Gs(c, (p, h) => {
      if (p == null)
        return;
      const f = iE(p), [m, ...y] = n.shift(h), b = rE(y), v = t.transform(m, oE(pE(p)));
      let C = s(b, v.className);
      f && (C = `${C}!`), d.add(C);
    }), Array.from(d).join(" ");
  });
}
function fE(...e) {
  return e.flat().filter((t) => Ft(t) && Object.keys(eE(t)).length > 0);
}
function gE(e) {
  function t(a) {
    const s = fE(...a);
    return s.length === 1 ? s : s.map((i) => Vs(i, e));
  }
  function r(...a) {
    return qs(...t(a));
  }
  function n(...a) {
    return Object.assign({}, ...t(a));
  }
  return { mergeCss: sr(r), assignCss: n };
}
var mE = /([A-Z])/g, yE = /^ms-/, bE = sr((e) => e.startsWith("--") ? e : e.replace(mE, "-$1").replace(yE, "-ms-").toLowerCase()), vE = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${vE.split(",").join("|")}`;
const SE = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", Hs = new Set(SE.split(",")), _E = /^@|&|&$/;
function mn(e) {
  return Hs.has(e) || _E.test(e);
}
const $E = /^_/, EE = /&|@/;
function xE(e) {
  return e.map((t) => Hs.has(t) ? t.replace($E, "") : EE.test(t) ? `[${zs(t.trim())}]` : t);
}
function CE(e) {
  return e.sort((t, r) => {
    const n = mn(t), a = mn(r);
    return n && !a ? 1 : !n && a ? -1 : 0;
  });
}
const TE = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle", Ys = /* @__PURE__ */ new Map(), Ws = /* @__PURE__ */ new Map();
TE.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [n, ...a] = r.split("/");
  Ys.set(t, n), a.length && a.forEach((s) => {
    Ws.set(s === "1" ? n : s, t);
  });
});
const yn = (e) => Ws.get(e) || e, Ks = {
  conditions: {
    shift: CE,
    finalize: xE,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = yn(e);
      return { className: `${Ys.get(r) || bE(r)}_${zs(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: yn
  }
}, wE = hE(Ks), Z = (...e) => wE(Xs(...e));
Z.raw = (...e) => Xs(...e);
const { mergeCss: Xs, assignCss: zE } = gE(Ks), ye = {
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
}, AE = () => /* @__PURE__ */ l.createElement(
  "section",
  {
    className: ye.searchBarRow,
    "aria-label": "Records search and filters"
  },
  /* @__PURE__ */ l.createElement("div", { className: ye.facets }, /* @__PURE__ */ l.createElement(js, null)),
  /* @__PURE__ */ l.createElement("div", { className: ye.search }, /* @__PURE__ */ l.createElement(
    mv,
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
  ), /* @__PURE__ */ l.createElement("span", { className: ye.visuallyHidden }, "Type keywords to search through records. Press Enter to submit.")),
  /* @__PURE__ */ l.createElement("div", { className: ye.import }, /* @__PURE__ */ l.createElement(X1, null))
), FE = () => {
  const { config: e } = Tv();
  return /* @__PURE__ */ l.createElement(ge, null, /* @__PURE__ */ l.createElement(ge.Row, { verticalAlign: "middle" }, /* @__PURE__ */ l.createElement(ge.Column, { width: 4, textAlign: "left" }, /* @__PURE__ */ l.createElement(Vb, { label: (t) => /* @__PURE__ */ l.createElement("p", null, "Showing ", t, " task(s)") })), /* @__PURE__ */ l.createElement(ge.Column, { width: 8, textAlign: "center" }, /* @__PURE__ */ l.createElement(rv, { options: { size: "mini" } })), /* @__PURE__ */ l.createElement(ge.Column, { width: 4, textAlign: "right" }, /* @__PURE__ */ l.createElement(
    hv,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ l.createElement("p", null, t, " results per page")
    }
  ))));
}, OE = ({
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
  }, n = new ta(r.searchApi), a = {
    [`${r.appId}.ResultsList.item`]: wv,
    [`${r.appId}.ResultsList.container`]: Av,
    [`${r.appId}.SearchFacets`]: js,
    ...t
  };
  return /* @__PURE__ */ l.createElement(di.Provider, { value: a }, /* @__PURE__ */ l.createElement(
    Ib,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ l.createElement(Cv, { config: r }, /* @__PURE__ */ l.createElement(AE, null), /* @__PURE__ */ l.createElement(uv, null, /* @__PURE__ */ l.createElement(Wb, null), /* @__PURE__ */ l.createElement(Ba, null)), /* @__PURE__ */ l.createElement(FE, null))
  ));
}, IE = {
  bulkImporter: Z({
    padding: "2rem"
  })
}, qE = () => /* @__PURE__ */ l.createElement("div", { className: IE.bulkImporter }, /* @__PURE__ */ l.createElement($n, { as: "h1" }, "Bulk Importer"), /* @__PURE__ */ l.createElement("p", null, "A more modern approach for an invenio compatible bulk importer."), /* @__PURE__ */ l.createElement(OE, null));
function GE(e) {
  return new ta(e);
}
function VE(e, t = {}, r = !0) {
  return {
    axios: {
      url: e,
      headers: {
        Accept: "application/vnd.inveniordm.v1+json",
        ...t
      },
      withCredentials: r
    }
  };
}
export {
  qE as BulkImporter,
  X1 as ImportModal,
  OE as Search,
  GE as createSearchApi,
  VE as createSearchApiConfig
};
