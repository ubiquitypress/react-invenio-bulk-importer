import l, { Component as A, useContext as E, useEffect as It, useState as ht, useCallback as Js } from "react";
import { Label as vn, Icon as se, Input as Sn, Button as ie, List as _n, Checkbox as $n, Card as I, Segment as ei, Header as En, Menu as Se, Pagination as ti, Item as te, Loader as ri, Dropdown as $e, Image as ni, TableRow as xn, TableCell as V, Table as ai, TableHeader as si, TableHeaderCell as H, TableBody as ii, Form as oi, Modal as li, ModalHeader as ui, ModalContent as ci, ModalActions as di, Grid as ge } from "semantic-ui-react";
import g, { OverridableContext as pi } from "react-overridable";
import ke from "axios";
import oe from "qs";
import { connect as x, Provider as hi } from "react-redux";
import { combineReducers as fi, createStore as gi, applyMiddleware as mi } from "redux";
import yi from "redux-thunk";
import bi from "lodash";
import { TextField as vi, SelectField as ot, TextAreaField as Si, BaseForm as _i } from "react-invenio-forms";
import { useFormikContext as $i } from "formik";
var Fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function T(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ei = Object.prototype;
function xi(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ei;
  return e === r;
}
var Ge = xi;
function Ci(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Cn = Ci, wi = Cn, Ti = wi(Object.keys, Object), Ai = Ti, Fi = Ge, Oi = Ai, Ii = Object.prototype, Pi = Ii.hasOwnProperty;
function Ri(e) {
  if (!Fi(e))
    return Oi(e);
  var t = [];
  for (var r in Object(e))
    Pi.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var wn = Ri, ki = typeof Fe == "object" && Fe && Fe.Object === Object && Fe, Tn = ki, Di = Tn, Li = typeof self == "object" && self && self.Object === Object && self, Bi = Di || Li || Function("return this")(), Q = Bi, Ni = Q, Ui = Ni.Symbol, le = Ui, lr = le, An = Object.prototype, Qi = An.hasOwnProperty, ji = An.toString, me = lr ? lr.toStringTag : void 0;
function Mi(e) {
  var t = Qi.call(e, me), r = e[me];
  try {
    e[me] = void 0;
    var n = !0;
  } catch {
  }
  var a = ji.call(e);
  return n && (t ? e[me] = r : delete e[me]), a;
}
var zi = Mi, qi = Object.prototype, Gi = qi.toString;
function Vi(e) {
  return Gi.call(e);
}
var Hi = Vi, ur = le, Yi = zi, Wi = Hi, Ki = "[object Null]", Xi = "[object Undefined]", cr = ur ? ur.toStringTag : void 0;
function Zi(e) {
  return e == null ? e === void 0 ? Xi : Ki : cr && cr in Object(e) ? Yi(e) : Wi(e);
}
var W = Zi;
function Ji(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var q = Ji;
const eo = /* @__PURE__ */ T(q);
var to = W, ro = q, no = "[object AsyncFunction]", ao = "[object Function]", so = "[object GeneratorFunction]", io = "[object Proxy]";
function oo(e) {
  if (!ro(e))
    return !1;
  var t = to(e);
  return t == ao || t == so || t == no || t == io;
}
var Fn = oo, lo = Q, uo = lo["__core-js_shared__"], co = uo, lt = co, dr = function() {
  var e = /[^.]+$/.exec(lt && lt.keys && lt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function po(e) {
  return !!dr && dr in e;
}
var ho = po, fo = Function.prototype, go = fo.toString;
function mo(e) {
  if (e != null) {
    try {
      return go.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var On = mo, yo = Fn, bo = ho, vo = q, So = On, _o = /[\\^$.*+?()[\]{}|]/g, $o = /^\[object .+?Constructor\]$/, Eo = Function.prototype, xo = Object.prototype, Co = Eo.toString, wo = xo.hasOwnProperty, To = RegExp(
  "^" + Co.call(wo).replace(_o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ao(e) {
  if (!vo(e) || bo(e))
    return !1;
  var t = yo(e) ? To : $o;
  return t.test(So(e));
}
var Fo = Ao;
function Oo(e, t) {
  return e == null ? void 0 : e[t];
}
var Io = Oo, Po = Fo, Ro = Io;
function ko(e, t) {
  var r = Ro(e, t);
  return Po(r) ? r : void 0;
}
var J = ko, Do = J, Lo = Q, Bo = Do(Lo, "DataView"), No = Bo, Uo = J, Qo = Q, jo = Uo(Qo, "Map"), Pt = jo, Mo = J, zo = Q, qo = Mo(zo, "Promise"), Go = qo, Vo = J, Ho = Q, Yo = Vo(Ho, "Set"), Wo = Yo, Ko = J, Xo = Q, Zo = Ko(Xo, "WeakMap"), Jo = Zo, ft = No, gt = Pt, mt = Go, yt = Wo, bt = Jo, In = W, ue = On, pr = "[object Map]", el = "[object Object]", hr = "[object Promise]", fr = "[object Set]", gr = "[object WeakMap]", mr = "[object DataView]", tl = ue(ft), rl = ue(gt), nl = ue(mt), al = ue(yt), sl = ue(bt), K = In;
(ft && K(new ft(new ArrayBuffer(1))) != mr || gt && K(new gt()) != pr || mt && K(mt.resolve()) != hr || yt && K(new yt()) != fr || bt && K(new bt()) != gr) && (K = function(e) {
  var t = In(e), r = t == el ? e.constructor : void 0, n = r ? ue(r) : "";
  if (n)
    switch (n) {
      case tl:
        return mr;
      case rl:
        return pr;
      case nl:
        return hr;
      case al:
        return fr;
      case sl:
        return gr;
    }
  return t;
});
var Ee = K;
function il(e) {
  return e != null && typeof e == "object";
}
var j = il, ol = W, ll = j, ul = "[object Arguments]";
function cl(e) {
  return ll(e) && ol(e) == ul;
}
var dl = cl, yr = dl, pl = j, Pn = Object.prototype, hl = Pn.hasOwnProperty, fl = Pn.propertyIsEnumerable, gl = yr(function() {
  return arguments;
}()) ? yr : function(e) {
  return pl(e) && hl.call(e, "callee") && !fl.call(e, "callee");
}, Ve = gl, ml = Array.isArray, R = ml;
const Rn = /* @__PURE__ */ T(R);
var yl = 9007199254740991;
function bl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= yl;
}
var Rt = bl, vl = Fn, Sl = Rt;
function _l(e) {
  return e != null && Sl(e.length) && !vl(e);
}
var He = _l, Le = { exports: {} };
function $l() {
  return !1;
}
var El = $l;
Le.exports;
(function(e, t) {
  var r = Q, n = El, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, o = i ? r.Buffer : void 0, u = o ? o.isBuffer : void 0, c = u || n;
  e.exports = c;
})(Le, Le.exports);
var Ye = Le.exports, xl = W, Cl = Rt, wl = j, Tl = "[object Arguments]", Al = "[object Array]", Fl = "[object Boolean]", Ol = "[object Date]", Il = "[object Error]", Pl = "[object Function]", Rl = "[object Map]", kl = "[object Number]", Dl = "[object Object]", Ll = "[object RegExp]", Bl = "[object Set]", Nl = "[object String]", Ul = "[object WeakMap]", Ql = "[object ArrayBuffer]", jl = "[object DataView]", Ml = "[object Float32Array]", zl = "[object Float64Array]", ql = "[object Int8Array]", Gl = "[object Int16Array]", Vl = "[object Int32Array]", Hl = "[object Uint8Array]", Yl = "[object Uint8ClampedArray]", Wl = "[object Uint16Array]", Kl = "[object Uint32Array]", $ = {};
$[Ml] = $[zl] = $[ql] = $[Gl] = $[Vl] = $[Hl] = $[Yl] = $[Wl] = $[Kl] = !0;
$[Tl] = $[Al] = $[Ql] = $[Fl] = $[jl] = $[Ol] = $[Il] = $[Pl] = $[Rl] = $[kl] = $[Dl] = $[Ll] = $[Bl] = $[Nl] = $[Ul] = !1;
function Xl(e) {
  return wl(e) && Cl(e.length) && !!$[xl(e)];
}
var Zl = Xl;
function Jl(e) {
  return function(t) {
    return e(t);
  };
}
var kt = Jl, Be = { exports: {} };
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
var Dt = Be.exports, eu = Zl, tu = kt, br = Dt, vr = br && br.isTypedArray, ru = vr ? tu(vr) : eu, Lt = ru, nu = wn, au = Ee, su = Ve, iu = R, ou = He, lu = Ye, uu = Ge, cu = Lt, du = "[object Map]", pu = "[object Set]", hu = Object.prototype, fu = hu.hasOwnProperty;
function gu(e) {
  if (e == null)
    return !0;
  if (ou(e) && (iu(e) || typeof e == "string" || typeof e.splice == "function" || lu(e) || cu(e) || su(e)))
    return !e.length;
  var t = au(e);
  if (t == du || t == pu)
    return !e.size;
  if (uu(e))
    return !nu(e).length;
  for (var r in e)
    if (fu.call(e, r))
      return !1;
  return !0;
}
var mu = gu;
const M = /* @__PURE__ */ T(mu);
var yu = W, bu = j, vu = "[object Symbol]";
function Su(e) {
  return typeof e == "symbol" || bu(e) && yu(e) == vu;
}
var Bt = Su, _u = R, $u = Bt, Eu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xu = /^\w*$/;
function Cu(e, t) {
  if (_u(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || $u(e) ? !0 : xu.test(e) || !Eu.test(e) || t != null && e in Object(t);
}
var Nt = Cu, wu = J, Tu = wu(Object, "create"), We = Tu, Sr = We;
function Au() {
  this.__data__ = Sr ? Sr(null) : {}, this.size = 0;
}
var Fu = Au;
function Ou(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Iu = Ou, Pu = We, Ru = "__lodash_hash_undefined__", ku = Object.prototype, Du = ku.hasOwnProperty;
function Lu(e) {
  var t = this.__data__;
  if (Pu) {
    var r = t[e];
    return r === Ru ? void 0 : r;
  }
  return Du.call(t, e) ? t[e] : void 0;
}
var Bu = Lu, Nu = We, Uu = Object.prototype, Qu = Uu.hasOwnProperty;
function ju(e) {
  var t = this.__data__;
  return Nu ? t[e] !== void 0 : Qu.call(t, e);
}
var Mu = ju, zu = We, qu = "__lodash_hash_undefined__";
function Gu(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = zu && t === void 0 ? qu : t, this;
}
var Vu = Gu, Hu = Fu, Yu = Iu, Wu = Bu, Ku = Mu, Xu = Vu;
function ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ce.prototype.clear = Hu;
ce.prototype.delete = Yu;
ce.prototype.get = Wu;
ce.prototype.has = Ku;
ce.prototype.set = Xu;
var Zu = ce;
function Ju() {
  this.__data__ = [], this.size = 0;
}
var ec = Ju;
function tc(e, t) {
  return e === t || e !== e && t !== t;
}
var Ke = tc, rc = Ke;
function nc(e, t) {
  for (var r = e.length; r--; )
    if (rc(e[r][0], t))
      return r;
  return -1;
}
var Xe = nc, ac = Xe, sc = Array.prototype, ic = sc.splice;
function oc(e) {
  var t = this.__data__, r = ac(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : ic.call(t, r, 1), --this.size, !0;
}
var lc = oc, uc = Xe;
function cc(e) {
  var t = this.__data__, r = uc(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var dc = cc, pc = Xe;
function hc(e) {
  return pc(this.__data__, e) > -1;
}
var fc = hc, gc = Xe;
function mc(e, t) {
  var r = this.__data__, n = gc(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var yc = mc, bc = ec, vc = lc, Sc = dc, _c = fc, $c = yc;
function de(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
de.prototype.clear = bc;
de.prototype.delete = vc;
de.prototype.get = Sc;
de.prototype.has = _c;
de.prototype.set = $c;
var Ze = de, _r = Zu, Ec = Ze, xc = Pt;
function Cc() {
  this.size = 0, this.__data__ = {
    hash: new _r(),
    map: new (xc || Ec)(),
    string: new _r()
  };
}
var wc = Cc;
function Tc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Ac = Tc, Fc = Ac;
function Oc(e, t) {
  var r = e.__data__;
  return Fc(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Je = Oc, Ic = Je;
function Pc(e) {
  var t = Ic(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Rc = Pc, kc = Je;
function Dc(e) {
  return kc(this, e).get(e);
}
var Lc = Dc, Bc = Je;
function Nc(e) {
  return Bc(this, e).has(e);
}
var Uc = Nc, Qc = Je;
function jc(e, t) {
  var r = Qc(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Mc = jc, zc = wc, qc = Rc, Gc = Lc, Vc = Uc, Hc = Mc;
function pe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
pe.prototype.clear = zc;
pe.prototype.delete = qc;
pe.prototype.get = Gc;
pe.prototype.has = Vc;
pe.prototype.set = Hc;
var Ut = pe, kn = Ut, Yc = "Expected a function";
function Qt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Yc);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(a))
      return s.get(a);
    var i = e.apply(this, n);
    return r.cache = s.set(a, i) || s, i;
  };
  return r.cache = new (Qt.Cache || kn)(), r;
}
Qt.Cache = kn;
var Wc = Qt, Kc = Wc, Xc = 500;
function Zc(e) {
  var t = Kc(e, function(n) {
    return r.size === Xc && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Jc = Zc, ed = Jc, td = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, rd = /\\(\\)?/g, nd = ed(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(td, function(r, n, a, s) {
    t.push(a ? s.replace(rd, "$1") : n || r);
  }), t;
}), ad = nd;
function sd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var id = sd, $r = le, od = id, ld = R, ud = Bt, cd = 1 / 0, Er = $r ? $r.prototype : void 0, xr = Er ? Er.toString : void 0;
function Dn(e) {
  if (typeof e == "string")
    return e;
  if (ld(e))
    return od(e, Dn) + "";
  if (ud(e))
    return xr ? xr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -cd ? "-0" : t;
}
var dd = Dn, pd = dd;
function hd(e) {
  return e == null ? "" : pd(e);
}
var xe = hd, fd = R, gd = Nt, md = ad, yd = xe;
function bd(e, t) {
  return fd(e) ? e : gd(e, t) ? [e] : md(yd(e));
}
var et = bd, vd = Bt, Sd = 1 / 0;
function _d(e) {
  if (typeof e == "string" || vd(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Sd ? "-0" : t;
}
var Ce = _d, $d = et, Ed = Ce;
function xd(e, t) {
  t = $d(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Ed(t[r++])];
  return r && r == n ? e : void 0;
}
var jt = xd, Cd = jt;
function wd(e, t, r) {
  var n = e == null ? void 0 : Cd(e, t);
  return n === void 0 ? r : n;
}
var Ln = wd;
const be = /* @__PURE__ */ T(Ln);
function Td(e, t) {
  return e != null && t in Object(e);
}
var Ad = Td, Fd = 9007199254740991, Od = /^(?:0|[1-9]\d*)$/;
function Id(e, t) {
  var r = typeof e;
  return t = t ?? Fd, !!t && (r == "number" || r != "symbol" && Od.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var tt = Id, Pd = et, Rd = Ve, kd = R, Dd = tt, Ld = Rt, Bd = Ce;
function Nd(e, t, r) {
  t = Pd(t, e);
  for (var n = -1, a = t.length, s = !1; ++n < a; ) {
    var i = Bd(t[n]);
    if (!(s = e != null && r(e, i)))
      break;
    e = e[i];
  }
  return s || ++n != a ? s : (a = e == null ? 0 : e.length, !!a && Ld(a) && Dd(i, a) && (kd(e) || Rd(e)));
}
var Bn = Nd, Ud = Ad, Qd = Bn;
function jd(e, t) {
  return e != null && Qd(e, t, Ud);
}
var Mt = jd;
const Md = /* @__PURE__ */ T(Mt);
var zd = J, qd = function() {
  try {
    var e = zd(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Nn = qd, Cr = Nn;
function Gd(e, t, r) {
  t == "__proto__" && Cr ? Cr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var rt = Gd, Vd = rt, Hd = Ke, Yd = Object.prototype, Wd = Yd.hasOwnProperty;
function Kd(e, t, r) {
  var n = e[t];
  (!(Wd.call(e, t) && Hd(n, r)) || r === void 0 && !(t in e)) && Vd(e, t, r);
}
var zt = Kd, Xd = zt, Zd = rt;
function Jd(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var o = t[s], u = n ? n(r[o], e[o], o, r, e) : void 0;
    u === void 0 && (u = e[o]), a ? Zd(r, o, u) : Xd(r, o, u);
  }
  return r;
}
var we = Jd;
function ep(e) {
  return e;
}
var qt = ep;
function tp(e, t, r) {
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
var rp = tp, np = rp, wr = Math.max;
function ap(e, t, r) {
  return t = wr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, s = wr(n.length - t, 0), i = Array(s); ++a < s; )
      i[a] = n[t + a];
    a = -1;
    for (var o = Array(t + 1); ++a < t; )
      o[a] = n[a];
    return o[t] = r(i), np(e, this, o);
  };
}
var Un = ap;
function sp(e) {
  return function() {
    return e;
  };
}
var ip = sp, op = ip, Tr = Nn, lp = qt, up = Tr ? function(e, t) {
  return Tr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: op(t),
    writable: !0
  });
} : lp, cp = up, dp = 800, pp = 16, hp = Date.now;
function fp(e) {
  var t = 0, r = 0;
  return function() {
    var n = hp(), a = pp - (n - r);
    if (r = n, a > 0) {
      if (++t >= dp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var gp = fp, mp = cp, yp = gp, bp = yp(mp), Qn = bp, vp = qt, Sp = Un, _p = Qn;
function $p(e, t) {
  return _p(Sp(e, t, vp), e + "");
}
var Ep = $p, xp = Ke, Cp = He, wp = tt, Tp = q;
function Ap(e, t, r) {
  if (!Tp(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Cp(r) && wp(t, r.length) : n == "string" && t in r) ? xp(r[t], e) : !1;
}
var Fp = Ap, Op = Ep, Ip = Fp;
function Pp(e) {
  return Op(function(t, r) {
    var n = -1, a = r.length, s = a > 1 ? r[a - 1] : void 0, i = a > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, i && Ip(r[0], r[1], i) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++n < a; ) {
      var o = r[n];
      o && e(t, o, n, s);
    }
    return t;
  });
}
var Rp = Pp;
function kp(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Dp = kp, Lp = Dp, Bp = Ve, Np = R, Up = Ye, Qp = tt, jp = Lt, Mp = Object.prototype, zp = Mp.hasOwnProperty;
function qp(e, t) {
  var r = Np(e), n = !r && Bp(e), a = !r && !n && Up(e), s = !r && !n && !a && jp(e), i = r || n || a || s, o = i ? Lp(e.length, String) : [], u = o.length;
  for (var c in e)
    (t || zp.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Qp(c, u))) && o.push(c);
  return o;
}
var jn = qp;
function Gp(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Vp = Gp, Hp = q, Yp = Ge, Wp = Vp, Kp = Object.prototype, Xp = Kp.hasOwnProperty;
function Zp(e) {
  if (!Hp(e))
    return Wp(e);
  var t = Yp(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Xp.call(e, n)) || r.push(n);
  return r;
}
var Jp = Zp, eh = jn, th = Jp, rh = He;
function nh(e) {
  return rh(e) ? eh(e, !0) : th(e);
}
var nt = nh, ah = we, sh = Rp, ih = nt, oh = sh(function(e, t) {
  ah(t, ih(t), e);
}), lh = oh, uh = lh;
const Ne = /* @__PURE__ */ T(uh);
function ch(e) {
  return e && e.length ? e[0] : void 0;
}
var dh = ch;
const ph = /* @__PURE__ */ T(dh);
var hh = zt, fh = et, gh = tt, Ar = q, mh = Ce;
function yh(e, t, r, n) {
  if (!Ar(e))
    return e;
  t = fh(t, e);
  for (var a = -1, s = t.length, i = s - 1, o = e; o != null && ++a < s; ) {
    var u = mh(t[a]), c = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != i) {
      var d = o[u];
      c = n ? n(d, u, o) : void 0, c === void 0 && (c = Ar(d) ? d : gh(t[a + 1]) ? [] : {});
    }
    hh(o, u, c), o = o[u];
  }
  return e;
}
var bh = yh, vh = jt, Sh = bh, _h = et;
function $h(e, t, r) {
  for (var n = -1, a = t.length, s = {}; ++n < a; ) {
    var i = t[n], o = vh(e, i);
    r(o, i) && Sh(s, _h(i, e), o);
  }
  return s;
}
var Eh = $h, xh = Eh, Ch = Mt;
function wh(e, t) {
  return xh(e, t, function(r, n) {
    return Ch(e, n);
  });
}
var Th = wh;
function Ah(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Gt = Ah, Fr = le, Fh = Ve, Oh = R, Or = Fr ? Fr.isConcatSpreadable : void 0;
function Ih(e) {
  return Oh(e) || Fh(e) || !!(Or && e && e[Or]);
}
var Ph = Ih, Rh = Gt, kh = Ph;
function Mn(e, t, r, n, a) {
  var s = -1, i = e.length;
  for (r || (r = kh), a || (a = []); ++s < i; ) {
    var o = e[s];
    t > 0 && r(o) ? t > 1 ? Mn(o, t - 1, r, n, a) : Rh(a, o) : n || (a[a.length] = o);
  }
  return a;
}
var Dh = Mn, Lh = Dh;
function Bh(e) {
  var t = e == null ? 0 : e.length;
  return t ? Lh(e, 1) : [];
}
var Nh = Bh, Uh = Nh, Qh = Un, jh = Qn;
function Mh(e) {
  return jh(Qh(e, void 0, Uh), e + "");
}
var zh = Mh, qh = Th, Gh = zh, Vh = Gh(function(e, t) {
  return e == null ? {} : qh(e, t);
}), Hh = Vh;
const Yh = /* @__PURE__ */ T(Hh);
var Wh = Ze;
function Kh() {
  this.__data__ = new Wh(), this.size = 0;
}
var Xh = Kh;
function Zh(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Jh = Zh;
function ef(e) {
  return this.__data__.get(e);
}
var tf = ef;
function rf(e) {
  return this.__data__.has(e);
}
var nf = rf, af = Ze, sf = Pt, of = Ut, lf = 200;
function uf(e, t) {
  var r = this.__data__;
  if (r instanceof af) {
    var n = r.__data__;
    if (!sf || n.length < lf - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new of(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var cf = uf, df = Ze, pf = Xh, hf = Jh, ff = tf, gf = nf, mf = cf;
function he(e) {
  var t = this.__data__ = new df(e);
  this.size = t.size;
}
he.prototype.clear = pf;
he.prototype.delete = hf;
he.prototype.get = ff;
he.prototype.has = gf;
he.prototype.set = mf;
var Vt = he;
function yf(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var bf = yf, vf = jn, Sf = wn, _f = He;
function $f(e) {
  return _f(e) ? vf(e) : Sf(e);
}
var Te = $f, Ef = we, xf = Te;
function Cf(e, t) {
  return e && Ef(t, xf(t), e);
}
var wf = Cf, Tf = we, Af = nt;
function Ff(e, t) {
  return e && Tf(t, Af(t), e);
}
var Of = Ff, Ue = { exports: {} };
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
var If = Ue.exports;
function Pf(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Rf = Pf;
function kf(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[a++] = i);
  }
  return s;
}
var Df = kf;
function Lf() {
  return [];
}
var zn = Lf, Bf = Df, Nf = zn, Uf = Object.prototype, Qf = Uf.propertyIsEnumerable, Ir = Object.getOwnPropertySymbols, jf = Ir ? function(e) {
  return e == null ? [] : (e = Object(e), Bf(Ir(e), function(t) {
    return Qf.call(e, t);
  }));
} : Nf, Ht = jf, Mf = we, zf = Ht;
function qf(e, t) {
  return Mf(e, zf(e), t);
}
var Gf = qf, Vf = Cn, Hf = Vf(Object.getPrototypeOf, Object), qn = Hf, Yf = Gt, Wf = qn, Kf = Ht, Xf = zn, Zf = Object.getOwnPropertySymbols, Jf = Zf ? function(e) {
  for (var t = []; e; )
    Yf(t, Kf(e)), e = Wf(e);
  return t;
} : Xf, Gn = Jf, eg = we, tg = Gn;
function rg(e, t) {
  return eg(e, tg(e), t);
}
var ng = rg, ag = Gt, sg = R;
function ig(e, t, r) {
  var n = t(e);
  return sg(e) ? n : ag(n, r(e));
}
var Vn = ig, og = Vn, lg = Ht, ug = Te;
function cg(e) {
  return og(e, ug, lg);
}
var Hn = cg, dg = Vn, pg = Gn, hg = nt;
function fg(e) {
  return dg(e, hg, pg);
}
var gg = fg, mg = Object.prototype, yg = mg.hasOwnProperty;
function bg(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && yg.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var vg = bg, Sg = Q, _g = Sg.Uint8Array, Yn = _g, Pr = Yn;
function $g(e) {
  var t = new e.constructor(e.byteLength);
  return new Pr(t).set(new Pr(e)), t;
}
var Yt = $g, Eg = Yt;
function xg(e, t) {
  var r = t ? Eg(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Cg = xg, wg = /\w*$/;
function Tg(e) {
  var t = new e.constructor(e.source, wg.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Ag = Tg, Rr = le, kr = Rr ? Rr.prototype : void 0, Dr = kr ? kr.valueOf : void 0;
function Fg(e) {
  return Dr ? Object(Dr.call(e)) : {};
}
var Og = Fg, Ig = Yt;
function Pg(e, t) {
  var r = t ? Ig(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Rg = Pg, kg = Yt, Dg = Cg, Lg = Ag, Bg = Og, Ng = Rg, Ug = "[object Boolean]", Qg = "[object Date]", jg = "[object Map]", Mg = "[object Number]", zg = "[object RegExp]", qg = "[object Set]", Gg = "[object String]", Vg = "[object Symbol]", Hg = "[object ArrayBuffer]", Yg = "[object DataView]", Wg = "[object Float32Array]", Kg = "[object Float64Array]", Xg = "[object Int8Array]", Zg = "[object Int16Array]", Jg = "[object Int32Array]", em = "[object Uint8Array]", tm = "[object Uint8ClampedArray]", rm = "[object Uint16Array]", nm = "[object Uint32Array]";
function am(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Hg:
      return kg(e);
    case Ug:
    case Qg:
      return new n(+e);
    case Yg:
      return Dg(e, r);
    case Wg:
    case Kg:
    case Xg:
    case Zg:
    case Jg:
    case em:
    case tm:
    case rm:
    case nm:
      return Ng(e, r);
    case jg:
      return new n();
    case Mg:
    case Gg:
      return new n(e);
    case zg:
      return Lg(e);
    case qg:
      return new n();
    case Vg:
      return Bg(e);
  }
}
var sm = am, im = q, Lr = Object.create, om = function() {
  function e() {
  }
  return function(t) {
    if (!im(t))
      return {};
    if (Lr)
      return Lr(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), lm = om, um = lm, cm = qn, dm = Ge;
function pm(e) {
  return typeof e.constructor == "function" && !dm(e) ? um(cm(e)) : {};
}
var hm = pm, fm = Ee, gm = j, mm = "[object Map]";
function ym(e) {
  return gm(e) && fm(e) == mm;
}
var bm = ym, vm = bm, Sm = kt, Br = Dt, Nr = Br && Br.isMap, _m = Nr ? Sm(Nr) : vm, $m = _m, Em = Ee, xm = j, Cm = "[object Set]";
function wm(e) {
  return xm(e) && Em(e) == Cm;
}
var Tm = wm, Am = Tm, Fm = kt, Ur = Dt, Qr = Ur && Ur.isSet, Om = Qr ? Fm(Qr) : Am, Im = Om, Pm = Vt, Rm = bf, km = zt, Dm = wf, Lm = Of, Bm = If, Nm = Rf, Um = Gf, Qm = ng, jm = Hn, Mm = gg, zm = Ee, qm = vg, Gm = sm, Vm = hm, Hm = R, Ym = Ye, Wm = $m, Km = q, Xm = Im, Zm = Te, Jm = nt, ey = 1, ty = 2, ry = 4, Wn = "[object Arguments]", ny = "[object Array]", ay = "[object Boolean]", sy = "[object Date]", iy = "[object Error]", Kn = "[object Function]", oy = "[object GeneratorFunction]", ly = "[object Map]", uy = "[object Number]", Xn = "[object Object]", cy = "[object RegExp]", dy = "[object Set]", py = "[object String]", hy = "[object Symbol]", fy = "[object WeakMap]", gy = "[object ArrayBuffer]", my = "[object DataView]", yy = "[object Float32Array]", by = "[object Float64Array]", vy = "[object Int8Array]", Sy = "[object Int16Array]", _y = "[object Int32Array]", $y = "[object Uint8Array]", Ey = "[object Uint8ClampedArray]", xy = "[object Uint16Array]", Cy = "[object Uint32Array]", S = {};
S[Wn] = S[ny] = S[gy] = S[my] = S[ay] = S[sy] = S[yy] = S[by] = S[vy] = S[Sy] = S[_y] = S[ly] = S[uy] = S[Xn] = S[cy] = S[dy] = S[py] = S[hy] = S[$y] = S[Ey] = S[xy] = S[Cy] = !0;
S[iy] = S[Kn] = S[fy] = !1;
function De(e, t, r, n, a, s) {
  var i, o = t & ey, u = t & ty, c = t & ry;
  if (r && (i = a ? r(e, n, a, s) : r(e)), i !== void 0)
    return i;
  if (!Km(e))
    return e;
  var d = Hm(e);
  if (d) {
    if (i = qm(e), !o)
      return Nm(e, i);
  } else {
    var p = zm(e), h = p == Kn || p == oy;
    if (Ym(e))
      return Bm(e, o);
    if (p == Xn || p == Wn || h && !a) {
      if (i = u || h ? {} : Vm(e), !o)
        return u ? Qm(e, Lm(i, e)) : Um(e, Dm(i, e));
    } else {
      if (!S[p])
        return a ? e : {};
      i = Gm(e, p, o);
    }
  }
  s || (s = new Pm());
  var f = s.get(e);
  if (f)
    return f;
  s.set(e, i), Xm(e) ? e.forEach(function(b) {
    i.add(De(b, t, r, b, e, s));
  }) : Wm(e) && e.forEach(function(b, v) {
    i.set(v, De(b, t, r, v, e, s));
  });
  var y = c ? u ? Mm : jm : u ? Jm : Zm, m = d ? void 0 : y(e);
  return Rm(m || e, function(b, v) {
    m && (v = b, b = e[v]), km(i, v, De(b, t, r, v, e, s));
  }), i;
}
var wy = De, Ty = wy, Ay = 1, Fy = 4;
function Oy(e) {
  return Ty(e, Ay | Fy);
}
var Iy = Oy;
const ae = /* @__PURE__ */ T(Iy);
var Py = W, Ry = j, ky = "[object Boolean]";
function Dy(e) {
  return e === !0 || e === !1 || Ry(e) && Py(e) == ky;
}
var Ly = Dy;
const By = /* @__PURE__ */ T(Ly);
var Ny = W, Uy = R, Qy = j, jy = "[object String]";
function My(e) {
  return typeof e == "string" || !Uy(e) && Qy(e) && Ny(e) == jy;
}
var zy = My;
const qy = /* @__PURE__ */ T(zy);
var Gy = W, Vy = j, Hy = "[object Number]";
function Yy(e) {
  return typeof e == "number" || Vy(e) && Gy(e) == Hy;
}
var Wy = Yy;
const Ky = /* @__PURE__ */ T(Wy);
function Wt() {
}
Wt.prototype = new Error();
class jr {
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
class Xy {
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
function ut(e) {
  return oe.stringify({
    q: e
  });
}
function Zy(e) {
  return oe.parse(e).q;
}
function Zn(e) {
  if (e.length === 3) {
    const r = [e[0], e[1]], n = Zn(e[2]);
    return n.length && r.push(n), r;
  }
  return [];
}
function Mr(e, t) {
  const r = ut(e), n = t.map((i) => ut(i));
  let a = !1;
  const s = n.filter((i) => {
    const o = Oe(i, r), u = Oe(r, i);
    return o && !a && (a = !0), !o && !u;
  });
  if (!a)
    s.push(r);
  else if (e.length === 3) {
    const o = Zn(e), u = ut(o), c = s.some((d) => {
      const p = Oe(d, u), h = Oe(u, d);
      return p || h;
    });
    (M(s) || !c) && s.push(u);
  }
  return s.map((i) => Zy(i));
}
const Jn = (e, t) => {
  if (M(e))
    return;
  if (!Rn(ph(e)))
    return Mr(e, t);
  let r = t;
  for (const n of e)
    r = Mr(n, r);
  return r;
}, ea = (e, t, r) => {
  let n = Yh(t, r);
  return M(n.filters) || (n.filters = Jn(n.filters, e.filters)), n;
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
}, ta = Object.keys(Qe), Jy = {
  loading: !1,
  data: {
    hits: [],
    total: 0,
    aggregations: {}
  },
  error: {}
}, eb = {
  hasUserChangedSorting: !1,
  initialSortBy: null,
  initialSortOrder: null
};
class tb {
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
class ra {
  constructor(t) {
    this.axiosConfig = be(t, "axios", {}), this.validateAxiosConfig(), this.initSerializers(t), this.initInterceptors(t), this.initAxios(), this.search = this.search.bind(this), this.axiosCancelToken = ke.CancelToken;
  }
  validateAxiosConfig() {
    if (!Md(this.axiosConfig, "url"))
      throw new Error("InvenioSearchApi config: `url` field is required.");
  }
  initInterceptors(t) {
    this.requestInterceptor = be(t, "interceptors.request", void 0), this.responseInterceptor = be(t, "interceptors.response", void 0);
  }
  getSerializer(t) {
    const r = {
      InvenioRecordsResourcesRequestSerializer: tb,
      InvenioRequestSerializer: jr
    };
    return typeof t == "string" ? r[t] : t || jr;
  }
  initSerializers(t) {
    var r;
    const n = this.getSerializer((r = t.invenio) === null || r === void 0 ? void 0 : r.requestSerializer), a = be(t, "invenio.responseSerializer", Xy);
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
      const n = ea(t, r.extras, ta);
      return M(n) || (r.newQueryState = n), delete r.extras, r;
    } catch (r) {
      throw ke.isCancel(r) ? new Wt() : r;
    }
  }
}
class rb {
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
          return Ky(n) && n > 0;
        case "layout":
          return ["grid", "list"].includes(n);
        case "filters":
        case "hiddenParams": {
          const a = Rn(n) ? n : [n], s = ":", i = t.urlFilterSeparator, o = `[^\\${s}\\${i}]*`, u = `${o}\\${s}${o}`, c = `${u}(\\${i}${u})*`, d = new RegExp(`^${c}$`);
          return a.every((p) => String(p).match(d));
        }
        default:
          return !1;
      }
    };
  }
}
const nb = (e) => {
  window.history.pushState && window.history.pushState({
    path: e
  }, "", e);
}, zr = (e) => {
  window.history.replaceState && window.history.replaceState({
    path: e
  }, "", e);
};
class ab {
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
class sb {
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
    }, this.urlParamsMapping = eo(t.urlParamsMapping) ? t.urlParamsMapping : {
      queryString: "q",
      sortBy: "sort",
      sortOrder: "order",
      page: "p",
      size: "s",
      layout: "l",
      filters: "f",
      hiddenParams: "hp"
    }, this.keepHistory = t.keepHistory !== void 0 ? t.keepHistory : !0, !By(this.keepHistory))
      throw new Error(`"keepHistory configuration must be a boolean, ${this.keepHistory} provided.`);
    if (this.urlFilterSeparator = t.urlFilterSeparator !== void 0 ? t.urlFilterSeparator : "+", !qy(this.urlFilterSeparator))
      throw new Error(`"urlFilterSeparator configuration must be a string, ${this.urlFilterSeparator} provided.`);
    this.urlParamValidator = t.urlParamValidator || new rb(), this.urlParser = t.urlParser || new ab(), this.urlParser.urlParamsMapping = this.urlParamsMapping, this.fromUrlParamsMapping = {}, Object.keys(this.urlParamsMapping).forEach((r) => {
      this.fromUrlParamsMapping[this.urlParamsMapping[r]] = r;
    }), this.get = this.get.bind(this), this.set = this.set.bind(this), this.replace = this.replace.bind(this);
  }
  /**
   * Return a new version of the given `query` state with updated values parsed from the URL query string.
   * @param {object} queryState the `query` state
   */
  get(t) {
    const r = this.urlParser.parse(window.location.search), n = this._mapUrlParamsToQueryState(r), a = this._mergeParamsIntoState(n, t), s = this._mapQueryStateToUrlParams(a);
    return zr(s), a;
  }
  /**
   * Update the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  set(t) {
    if (this.keepHistory) {
      const r = this._mapQueryStateToUrlParams(t);
      nb(r);
    } else
      this.replace(t);
  }
  /**
   * Replace the URL query string parameters from the given `query` state
   * @param {object} stateQuery the `query` state
   */
  replace(t) {
    const r = this._mapQueryStateToUrlParams(t);
    zr(r);
  }
}
const ib = "SET_QUERY_COMPONENT_INITIAL_STATE", na = "SET_QUERY_STRING", Kt = "SET_QUERY_SORTING", Xt = "SET_QUERY_SORT_BY", Zt = "SET_QUERY_SORT_ORDER", Ae = "SET_QUERY_STATE", aa = "SET_QUERY_PAGINATION_PAGE", sa = "SET_QUERY_PAGINATION_SIZE", ia = "SET_QUERY_FILTERS", oa = "SET_QUERY_SUGGESTIONS", la = "SET_SUGGESTION_STRING", ua = "CLEAR_QUERY_SUGGESTIONS", ca = "RESULTS_LOADING", da = "RESULTS_FETCH_SUCCESS", pa = "RESULTS_FETCH_ERROR", vt = "RESULTS_UPDATE_LAYOUT", ha = "RESET_QUERY", ob = (e) => (t) => {
  e && t(N({
    shouldUpdateUrlQueryString: !1,
    shouldReplaceUrlQueryString: !0
  }));
}, fa = (e) => (t) => {
  t({
    type: Ae,
    payload: e
  }), t(N());
}, ga = (e) => (t) => {
  t({
    type: na,
    payload: e
  }), t(N());
}, lb = (e, t) => (r) => {
  r({
    type: Kt,
    payload: {
      sortBy: e,
      sortOrder: t
    }
  }), r(N());
}, ub = (e) => (t) => {
  t({
    type: Xt,
    payload: e
  }), t(N());
}, cb = (e) => (t) => {
  t({
    type: Zt,
    payload: e
  }), t(N());
}, db = (e) => (t) => {
  t({
    type: aa,
    payload: e
  }), t(N());
}, pb = (e) => (t) => {
  t({
    type: sa,
    payload: e
  }), t(N());
}, Jt = (e) => (t) => {
  t({
    type: ia,
    payload: e
  }), t(N());
}, hb = (e) => async (t, r, n) => {
  const a = n.urlHandlerApi;
  if (a) {
    await t({
      type: vt,
      payload: e
    });
    const s = r().query;
    a.set(s);
  } else
    t({
      type: vt,
      payload: e
    });
}, fb = () => (e, t, r) => {
  e({
    type: ha,
    payload: {
      queryString: "",
      page: 1,
      filters: [],
      ...r.initialQueryState
    }
  }), e(N());
}, gb = (e, t, r, n) => {
  const a = t.urlHandlerApi;
  a && (r ? a.replace(e) : n && a.set(e));
}, mb = (e, t, r, n) => {
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
}, yb = (e, t, r, n) => {
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
    yb(i, s, a, r), i = ae(n().query), gb(i, a, t, e), r({
      type: ca
    });
    try {
      let u = await a.searchApi.search(i);
      "newQueryState" in u && (u = mb(ae(u), r, n, a)), r({
        type: da,
        payload: {
          aggregations: u.aggregations,
          hits: u.hits,
          total: u.total
        }
      });
    } catch (o) {
      if (o instanceof Wt) {
        console.debug(o);
        return;
      } else
        console.error(o), r({
          type: pa,
          payload: {
            error: o
          }
        });
    }
  };
}, bb = (e) => (t) => {
  t({
    type: la,
    payload: e
  }), t(vb());
}, vb = () => async (e, t, r) => {
  const n = ae(t().query), a = r.suggestionApi;
  try {
    const s = await a.search(n);
    e({
      type: oa,
      payload: {
        suggestions: s.suggestions
      }
    });
  } catch (s) {
    console.error("Could not load suggestions due to: " + s);
  }
}, Sb = () => (e) => {
  e({
    type: ua,
    payload: {
      suggestions: []
    }
  });
}, _b = () => (e, t, r) => {
  if (r.urlHandlerApi) {
    const n = r.urlHandlerApi.get(r.initialQueryState);
    e({
      type: Ae,
      payload: n
    }), e(N({
      shouldReplaceUrlQueryString: !0
    }));
  }
}, _ = /* @__PURE__ */ l.createContext({}), $b = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
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
    case Zt:
      return {
        ...e,
        hasUserChangedSorting: !0
      };
    default:
      return e;
  }
}, Eb = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case na:
      return {
        ...e,
        queryString: t.payload,
        page: 1
      };
    case Kt:
      return {
        ...e,
        sortBy: t.payload.sortBy,
        sortOrder: t.payload.sortOrder,
        _sortUserChanged: !0,
        page: 1
      };
    case Xt:
      return {
        ...e,
        sortBy: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case Zt:
      return {
        ...e,
        sortOrder: t.payload,
        _sortUserChanged: !0,
        page: 1
      };
    case aa:
      return {
        ...e,
        page: t.payload
      };
    case sa:
      return {
        ...e,
        size: t.payload,
        page: 1
      };
    case ia:
      return {
        ...e,
        page: 1,
        filters: Jn(t.payload, e.filters)
      };
    case oa:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case ua:
      return {
        ...e,
        suggestions: t.payload.suggestions
      };
    case la:
      return {
        ...e,
        suggestionString: t.payload
      };
    case ib:
      return {
        ...e,
        ...t.payload
      };
    case Ae:
      return {
        ...e,
        ...Qe,
        ...ea(Qe, t.payload, ta)
      };
    case vt:
      return {
        ...e,
        layout: t.payload
      };
    case ha:
      return {
        ...e,
        ...t.payload
      };
    default:
      return e;
  }
}, xb = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case ca:
      return {
        ...e,
        loading: !0,
        data: {
          ...e.data
        }
      };
    case da:
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
    case pa:
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
var Cb = fi({
  app: $b,
  query: Eb,
  results: xb
});
function qr(e, t) {
  let {
    sortBy: r,
    sortOrder: n
  } = e, {
    sortBy: a,
    sortOrder: s
  } = t;
  return r !== a || n !== s;
}
function wb(e, t, r) {
  const n = qr(r, t), a = !M(e.defaultSortingOnEmptyQueryString);
  let s = !1;
  return a && (s = qr(r, e.defaultSortingOnEmptyQueryString)), n && s;
}
function Tb(e) {
  const t = {
    ...Qe,
    ...e.initialQueryState
  }, r = e.urlHandlerApi ? e.urlHandlerApi.get(t) : t, n = wb(e, t, r), a = {
    ...eb,
    hasUserChangedSorting: n,
    initialSortBy: t.sortBy,
    initialSortOrder: t.sortOrder
  }, s = {
    ...Jy,
    loading: e.searchOnInit
  };
  return {
    app: a,
    query: r,
    results: s
  };
}
function Ab(e) {
  const t = Tb(e);
  return gi(Cb, t, mi(yi.withExtraArgument(e)));
}
function Gr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const n = t ? `.${t}` : "";
  return `${r ? `${r}.` : ""}${e}${n}`;
}
class er extends A {
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
er.defaultProps = {
  searchOnInit: !0,
  eventListenerEnabled: !1
};
er.contextType = _;
var Fb = g.component("Bootstrap", er);
const Ob = (e) => ({
  onAppInitialized: (t) => e(ob(t)),
  updateQueryState: (t) => e(fa(t)),
  searchOnUrlQueryStringChanged: () => e(_b())
}), Ib = x(null, Ob)(Fb);
class tr extends A {
  constructor(t) {
    super(t);
    const r = {
      searchApi: t.searchApi,
      suggestionApi: t.suggestionApi,
      urlHandlerApi: t.urlHandlerApi.enabled ? t.urlHandlerApi.customHandler || new sb(t.urlHandlerApi.overrideConfig) : null,
      searchOnInit: t.searchOnInit,
      initialQueryState: t.initialQueryState,
      defaultSortingOnEmptyQueryString: t.defaultSortingOnEmptyQueryString
    };
    this.store = Ab(r), this.appName = t.appName, this.eventListenerEnabled = t.eventListenerEnabled, this.componentIndex = 0;
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
      buildUID: (u, c) => Gr(u, c, t),
      /* This is an internal function that will be used to create id for the checkboxes and labels, ensuring that
          they are unique */
      nextComponentIndex: () => `${this.appName}_${this.componentIndex++}`
    }, o = Gr("ReactSearchKit.children", a, t);
    return /* @__PURE__ */ l.createElement(_.Provider, {
      value: i
    }, /* @__PURE__ */ l.createElement(hi, {
      store: this.store
    }, /* @__PURE__ */ l.createElement(Ib, {
      searchOnInit: s,
      eventListenerEnabled: n
    }, /* @__PURE__ */ l.createElement(g, {
      id: o
    }, r))));
  }
}
tr.defaultProps = {
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
tr.contextType = _;
var Pb = g.component("ReactSearchKit", tr);
class ma extends A {
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
    return !!t.length && /* @__PURE__ */ l.createElement(ya, {
      filters: t,
      removeActiveFilter: this.updateQueryFilters,
      getLabel: this._getLabel,
      overridableId: r
    });
  }
}
ma.defaultProps = {
  overridableId: ""
};
const ya = (e) => {
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
      /* @__PURE__ */ l.createElement(vn, {
        image: !0,
        key: o,
        onClick: () => n(c)
      }, u, /* @__PURE__ */ l.createElement(se, {
        name: "delete"
      }))
    );
  })));
};
ya.defaultProps = {
  overridableId: ""
};
var Rb = g.component("ActiveFilters", ma);
const kb = (e) => ({
  updateQueryFilters: (t) => e(Jt(t))
});
x((e) => ({
  filters: e.query.filters
}), kb)(Rb);
function Db(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var Lb = `.AutoCompleteText{position:relative;z-index:100}.AutoCompleteText .input button,.AutoCompleteText .input input{border:none;border-radius:0}.AutoCompleteText ul{background-color:#fff;border:1px solid #e0e1e2;border-radius:0 0 .3rem .3rem;color:#000;list-style-type:none;margin:0;padding:0;position:absolute;text-align:left;width:100%}.AutoCompleteText ul:before{content:""}.AutoCompleteText li{cursor:pointer;padding:.3em 1em}.AutoCompleteText li:hover{background-color:#e0e1e2;border-radius:.3rem;text-decoration:underline}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9yZWFjdC1zZWFyY2hraXQvcmVhY3Qtc2VhcmNoa2l0L3NyYy9saWIvY29tcG9uZW50cy9BdXRvY29tcGxldGVTZWFyY2hCYXIvQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MiLCJBdXRvY29tcGxldGVTZWFyY2hCYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSxpQkFBQSxDQUNBLFdDQ0YsQ0RPQSwrREFDRSxXQUFBLENBQ0EsZUNDRixDREVBLHFCQU1FLHFCQUFBLENBR0Esd0JBQUEsQ0FDQSw2QkFBQSxDQUxBLFVBQUEsQ0FGQSxvQkFBQSxDQUlBLFFBQUEsQ0FDQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxlQUFBLENBSEEsVUNVRixDREVBLDRCQUNFLFVDQ0YsQ0RFQSxxQkFFRSxjQUFBLENBREEsZ0JDRUYsQ0RFQSwyQkFFRSx3QkFBQSxDQUNBLG1CQUFBLENBRkEseUJDR0YiLCJmaWxlIjoiQXV0b2NvbXBsZXRlU2VhcmNoQmFyLnNjc3MifQ== */`;
Db(Lb);
class ba extends A {
  constructor(t) {
    super(t), this._handleAutocompleteChange = (r) => {
      r.length >= this.minCharsToAutocomplete && this.updateSuggestions(r);
    }, this.onInputChange = async (r) => {
      await this.setState({
        currentValue: r
      }), this.handleAutocompleteChange(this.state.currentValue);
    }, this.executeSearch = () => {
      this.updateQueryString(this.state.currentValue);
    }, this.updateQueryString = this.props.updateQueryString, this.updateSuggestions = this.props.debounce ? bi.debounce(this.props.updateSuggestions, this.props.debounceTime, {
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
    return /* @__PURE__ */ l.createElement(Nb, {
      placeholder: t,
      queryString: this.state.currentValue,
      querySuggestions: r,
      onInputChange: this.onInputChange,
      executeSearch: this.executeSearch,
      overridableId: n
    });
  }
}
ba.defaultProps = {
  handleAutocompleteChange: null,
  placeholder: "Type something",
  minCharsToAutocomplete: 3,
  overridableId: ""
};
const Bb = (e) => /* @__PURE__ */ l.createElement(ba, Object.assign({
  key: e.queryString
}, e)), Nb = (e) => {
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
  }, /* @__PURE__ */ l.createElement(Sn, {
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
  }), /* @__PURE__ */ l.createElement(Ub, {
    querySuggestions: a,
    overridableId: t
  })));
}, Ub = (e) => {
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
var Qb = g.component("AutocompleteSearchBar", Bb);
const jb = (e) => ({
  updateQueryString: (t) => e(ga(t)),
  updateSuggestions: (t) => e(bb(t)),
  clearSuggestions: () => e(Sb())
}), Mb = (e) => ({
  queryString: e.query.queryString,
  suggestions: e.query.suggestions
});
x(Mb, jb)(Qb);
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
      return /* @__PURE__ */ l.createElement(Sa, {
        key: s.key,
        bucket: s,
        keyField: i,
        isSelected: o,
        onFilterClicked: u,
        getChildAggCmps: c,
        overridableId: n
      });
    });
    return /* @__PURE__ */ l.createElement(va, {
      valuesCmp: a,
      overridableId: n
    });
  }
}
at.defaultProps = {
  childAgg: null,
  overridableId: ""
};
const va = (e) => {
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
  }, /* @__PURE__ */ l.createElement(_n, null, t));
};
va.defaultProps = {
  overridableId: ""
};
const Sa = (e) => {
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
  }, /* @__PURE__ */ l.createElement(_n.Item, {
    key: t.key
  }, /* @__PURE__ */ l.createElement($n, {
    label: c,
    id: u(),
    value: t.key,
    onClick: () => n(t.key),
    checked: r
  }), d));
};
Sa.defaultProps = {
  overridableId: ""
};
var zb = g.component("BucketAggregationValues", at);
class _a extends A {
  constructor(t) {
    super(t), this.onFilterClicked = (r) => {
      this.updateQueryFilters(r);
    }, this._renderValues = (r, n) => {
      const {
        overridableId: a
      } = this.props;
      return /* @__PURE__ */ l.createElement(zb, {
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
    return /* @__PURE__ */ l.createElement($a, Object.assign({
      title: this.title,
      containerCmp: o,
      overridableId: n
    }, a));
  }
}
_a.defaultProps = {
  overridableId: ""
};
const $a = (e) => {
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
$a.defaultProps = {
  containerCmp: null,
  overridableId: ""
};
var qb = g.component("BucketAggregation", _a);
const Gb = (e) => ({
  updateQueryFilters: (t) => e(Jt(t))
});
x((e) => ({
  userSelectionFilters: e.query.filters,
  resultsAggregations: e.results.data.aggregations
}), Gb)(qb);
class Ea extends A {
  render() {
    const {
      children: t,
      condition: r
    } = this.props;
    return r ? t : null;
  }
}
Ea.defaultProps = {
  condition: !0
};
var D = g.component("ShouldRender", Ea);
class xa extends A {
  render() {
    const {
      loading: t,
      totalResults: r,
      label: n,
      overridableId: a
    } = this.props;
    return /* @__PURE__ */ l.createElement(D, {
      condition: !t && r > 0
    }, n(/* @__PURE__ */ l.createElement(Ca, {
      totalResults: r,
      overridableId: a
    })));
  }
}
xa.defaultProps = {
  label: (e) => e,
  overridableId: ""
};
const Ca = (e) => {
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
  }, /* @__PURE__ */ l.createElement(vn, {
    color: "blue"
  }, t.toLocaleString("en-US")));
};
Ca.defaultProps = {
  overridableId: ""
};
var Vb = g.component("Count", xa);
const Hb = x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total
}))(Vb);
class wa extends A {
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
wa.defaultProps = {
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
  }, /* @__PURE__ */ l.createElement(ei, {
    placeholder: !0,
    textAlign: "center"
  }, /* @__PURE__ */ l.createElement(En, {
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
var Yb = g.component("EmptyResults", wa);
const Wb = (e) => ({
  resetQuery: () => e(fb())
}), Kb = x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  error: e.results.error,
  queryString: e.query.queryString,
  userSelectionFilters: e.query.filters
}), Wb)(Yb);
function Aa(e) {
  let {
    loading: t,
    error: r,
    overridableId: n
  } = e;
  return /* @__PURE__ */ l.createElement(D, {
    condition: !t && !M(r)
  }, /* @__PURE__ */ l.createElement(Fa, {
    error: r,
    overridableId: n
  }));
}
Aa.defaultProps = {
  overridableId: ""
};
const Fa = (e) => {
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
Fa.defaultProps = {
  overridableId: ""
};
var Xb = g.component("Error", Aa);
x((e) => ({
  loading: e.results.loading,
  error: e.results.error
}))(Xb);
function Zb(e) {
  const t = (a) => /* @__PURE__ */ l.createElement(e, a);
  return x((a) => ({
    currentQueryState: a.query,
    currentResultsState: a.results
  }), (a) => ({
    updateQueryState: (s) => a(fa(s))
  }))(t);
}
class Oa extends A {
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
    }, /* @__PURE__ */ l.createElement(Ia, {
      currentLayout: t,
      onLayoutChange: this.onLayoutChange,
      overridableId: a
    }));
  }
}
Oa.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
const Ia = (e) => {
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
Ia.defaultProps = {
  currentLayout: null,
  overridableId: ""
};
var Jb = g.component("LayoutSwitcher", Oa);
const ev = (e) => ({
  updateLayout: (t) => e(hb(t))
});
x((e) => ({
  loading: e.results.loading,
  currentLayout: e.query.layout,
  totalResults: e.results.data.total
}), ev)(Jb);
const Vr = {
  boundaryRangeCount: 1,
  siblingRangeCount: 1,
  showEllipsis: !0,
  showFirst: !0,
  showLast: !0,
  showPrev: !0,
  showNext: !0,
  size: "large"
};
class Pa extends A {
  constructor(t) {
    super(t), this.onPageChange = (r) => {
      const {
        currentPage: n
      } = this.props;
      r !== n && this.updateQueryPage(r);
    }, this.updateQueryPage = t.updateQueryPage, this.options = t.options ? {
      ...Vr,
      ...t.options
    } : Vr;
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
    }, /* @__PURE__ */ l.createElement(Ra, {
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
Pa.defaultProps = {
  options: {},
  overridableId: "",
  showWhenOnlyOnePage: !0
};
const Ra = (e) => {
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
    buildUID: O
  } = E(_);
  return r > C && s(C), /* @__PURE__ */ l.createElement(g, {
    id: O("Pagination.element", t),
    currentPage: r,
    currentSize: n,
    totalResults: a,
    options: i,
    onPageChange: s
  }, /* @__PURE__ */ l.createElement(ti, Object.assign({
    activePage: r,
    totalPages: U,
    onPageChange: (G, w) => {
      let {
        activePage: fe
      } = w;
      return s(fe);
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
Ra.defaultProps = {
  options: {},
  overridableId: "",
  maxTotalResults: 1e4
};
var tv = g.component("Pagination", Pa);
const rv = (e) => ({
  updateQueryPage: (t) => e(db(t))
}), nv = x((e) => ({
  currentPage: e.query.page,
  currentSize: e.query.size,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), rv)(tv);
function ka(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    resultsPerRow: a,
    overridableId: s,
    onResultsRendered: i
  } = e;
  return It(() => {
    i && i();
  }, [i]), /* @__PURE__ */ l.createElement(D, {
    condition: !t && r > 0
  }, /* @__PURE__ */ l.createElement(Da, {
    results: n,
    resultsPerRow: a,
    overridableId: s
  }));
}
ka.defaultProps = {
  resultsPerRow: 3,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const av = (e) => {
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
  }, /* @__PURE__ */ l.createElement(ni, {
    src: t.imgSrc || "http://placehold.it/200"
  }), /* @__PURE__ */ l.createElement(I.Content, null, /* @__PURE__ */ l.createElement(I.Header, null, t.title), /* @__PURE__ */ l.createElement(I.Description, null, t.description))));
}, Da = (e) => {
  let {
    overridableId: t,
    results: r,
    resultsPerRow: n
  } = e;
  const {
    buildUID: a
  } = E(_), s = r.map((i, o) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ l.createElement(av, {
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
Da.defaultProps = {
  resultsPerRow: 3,
  overridableId: ""
};
var sv = g.component("ResultsGrid", ka);
const iv = x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(sv);
function La(e) {
  let {
    loading: t,
    totalResults: r,
    results: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return It(() => {
    s && s();
  }, [s]), /* @__PURE__ */ l.createElement(D, {
    condition: !t && r > 0
  }, /* @__PURE__ */ l.createElement(Ba, {
    results: n,
    overridableId: a
  }));
}
La.defaultProps = {
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
}, Ba = (e) => {
  let {
    results: t,
    overridableId: r
  } = e;
  const {
    buildUID: n
  } = E(_), a = t.map((s, i) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ l.createElement(ov, {
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
Ba.defaultProps = {
  overridableId: ""
};
var lv = g.component("ResultsList", La);
const Na = x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  results: e.results.data.hits
}))(lv);
function Ua(e) {
  let {
    children: t,
    loading: r,
    overridableId: n
  } = e;
  return r ? /* @__PURE__ */ l.createElement(Qa, {
    overridableId: n
  }) : t;
}
Ua.defaultProps = {
  overridableId: ""
};
const Qa = (e) => {
  let {
    overridableId: t
  } = e;
  const {
    buildUID: r
  } = E(_);
  return /* @__PURE__ */ l.createElement(g, {
    id: r("ResultsLoader.element", t)
  }, /* @__PURE__ */ l.createElement(ri, {
    active: !0,
    size: "huge",
    inline: "centered"
  }));
};
Qa.defaultProps = {
  overridableId: ""
};
var uv = g.component("ResultsLoader", Ua);
const cv = x((e) => ({
  loading: e.results.loading
}))(uv);
function ja(e) {
  let {
    loading: t,
    totalResults: r,
    currentLayout: n,
    overridableId: a,
    onResultsRendered: s
  } = e;
  return /* @__PURE__ */ l.createElement(D, {
    condition: n != null && !t && r > 0
  }, /* @__PURE__ */ l.createElement(Ma, {
    layout: n,
    overridableId: a,
    onResultsRendered: s
  }));
}
ja.defaultProps = {
  currentLayout: null,
  overridableId: "",
  onResultsRendered: () => {
  }
};
const Ma = (e) => {
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
  }, t === "list" ? /* @__PURE__ */ l.createElement(Na, {
    overridableId: r,
    onResultsRendered: n
  }) : /* @__PURE__ */ l.createElement(iv, {
    overridableId: r,
    onResultsRendered: n
  }));
};
Ma.defaultProps = {
  layout: "",
  overridableId: "",
  onResultsRendered: () => {
  }
};
var dv = g.component("ResultsMultiLayout", ja);
x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentLayout: e.query.layout
}))(dv);
class za extends A {
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
    }, a(/* @__PURE__ */ l.createElement(qa, {
      currentSize: r,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: o
    })));
  }
}
za.defaultProps = {
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  showWhenOnlyOnePage: !0
};
const qa = (e) => {
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
qa.defaultProps = {
  ariaLabel: "Results per page",
  selectOnNavigation: !1,
  overridableId: ""
};
var pv = g.component("ResultsPerPage", za);
const hv = (e) => ({
  updateQuerySize: (t) => e(pb(t))
}), fv = x((e) => ({
  loading: e.results.loading,
  currentSize: e.query.size,
  totalResults: e.results.data.total
}), hv)(pv);
class Ga extends A {
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
    return /* @__PURE__ */ l.createElement(rr, {
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
Ga.defaultProps = {
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
const Va = (e) => {
  const {
    queryString: t
  } = e;
  return /* @__PURE__ */ l.createElement(Ga, Object.assign({
    key: t
  }, e));
};
Va.defaultProps = {
  queryString: ""
};
class rr extends A {
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
    }, /* @__PURE__ */ l.createElement(Sn, Object.assign({
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
rr.defaultProps = {
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
rr.contextType = _;
var gv = g.component("SearchBar", Va);
const mv = (e) => ({
  updateQueryString: (t) => e(ga(t))
}), yv = x((e) => ({
  queryString: e.query.queryString
}), mv)(gv);
class Ha extends A {
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
    }, s(/* @__PURE__ */ l.createElement(Ya, {
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
Ha.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  sortOrderDisabled: !1,
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
const Ya = (e) => {
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
        value: y
      } = f;
      return s(y);
    },
    "aria-label": o,
    selectOnNavigation: u
  }));
};
Ya.defaultProps = {
  currentSortBy: null,
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort",
  selectOnNavigation: !1
};
var bv = g.component("Sort", Ha);
const vv = (e) => ({
  updateQuerySorting: (t, r) => e(lb(t, r))
});
x((e) => ({
  currentSortBy: e.query.sortBy,
  currentSortOrder: e.query.sortOrder,
  loading: e.results.loading,
  totalResults: e.results.data.total
}), vv)(bv);
class Wa extends A {
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
    }, a(/* @__PURE__ */ l.createElement(Ka, {
      currentSortBy: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: o
    })));
  }
}
Wa.defaultProps = {
  currentSortBy: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
const Ka = (e) => {
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
Ka.defaultProps = {
  currentSortBy: null,
  overridableId: "",
  ariaLabel: "Sort Results By",
  selectOnNavigation: !1
};
var Sv = g.component("SortBy", Wa);
const _v = (e) => ({
  updateQuerySortBy: (t) => e(ub(t))
});
x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortBy: e.query.sortBy
}), _v)(Sv);
class Xa extends A {
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
    }, a(/* @__PURE__ */ l.createElement(Za, {
      currentSortOrder: t,
      options: this.options,
      onValueChange: this.onChange,
      overridableId: s,
      ariaLabel: i,
      selectOnNavigation: o
    })));
  }
}
Xa.defaultProps = {
  currentSortOrder: null,
  label: (e) => e,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
const Za = (e) => {
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
Za.defaultProps = {
  currentSortOrder: null,
  overridableId: "",
  ariaLabel: "Sort Order",
  selectOnNavigation: !1
};
var $v = g.component("SortOrder", Xa);
const Ev = (e) => ({
  updateQuerySortOrder: (t) => e(cb(t))
});
x((e) => ({
  loading: e.results.loading,
  totalResults: e.results.data.total,
  currentSortOrder: e.query.sortOrder
}), Ev)($v);
const Ja = (e) => {
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
  }, /* @__PURE__ */ l.createElement(I, null, /* @__PURE__ */ l.createElement(I.Content, null, /* @__PURE__ */ l.createElement(I.Header, null, n)), /* @__PURE__ */ l.createElement(I.Content, null, /* @__PURE__ */ l.createElement($n, {
    toggle: !0,
    label: a,
    onClick: u,
    checked: d
  }))));
};
Ja.defaultProps = {
  overridableId: ""
};
var xv = g.component("SearchFilters.Toggle", Ja);
const Cv = (e) => ({
  updateQueryFilters: (t) => e(Jt(t))
});
x((e) => ({
  userSelectionFilters: e.query.filters
}), Cv)(xv);
const es = l.createContext(
  null
), wv = ({ config: e, children: t }) => /* @__PURE__ */ l.createElement(es.Provider, { value: { config: e } }, t), Tv = () => {
  const e = l.useContext(es);
  if (!e)
    throw new Error("useSearchConfig must be used within a SearchProvider");
  return e;
}, Av = ({
  result: e,
  index: t
}) => /* @__PURE__ */ l.createElement(xn, { key: t }, /* @__PURE__ */ l.createElement(V, null, e.title || "No title"), /* @__PURE__ */ l.createElement(V, null, e.created), /* @__PURE__ */ l.createElement(V, null, e.status), /* @__PURE__ */ l.createElement(V, null, "999"), /* @__PURE__ */ l.createElement(V, null, "999"), /* @__PURE__ */ l.createElement(V, null, e.serializer), /* @__PURE__ */ l.createElement(V, null, e.mode), /* @__PURE__ */ l.createElement(V, { style: { width: "220px" } }, /* @__PURE__ */ l.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ l.createElement(
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
), /* @__PURE__ */ l.createElement(ie, { basic: !0, size: "tiny" }, /* @__PURE__ */ l.createElement(se, { name: "eye" }), "View")))), Fv = ({ children: e }) => /* @__PURE__ */ l.createElement(ai, { celled: !0, size: "small", comp: !0 }, /* @__PURE__ */ l.createElement(si, null, /* @__PURE__ */ l.createElement(xn, null, /* @__PURE__ */ l.createElement(H, null, "ID"), /* @__PURE__ */ l.createElement(H, null, "Date"), /* @__PURE__ */ l.createElement(H, null, "Status"), /* @__PURE__ */ l.createElement(H, null, "Records"), /* @__PURE__ */ l.createElement(H, null, "Files"), /* @__PURE__ */ l.createElement(H, null, "Provider"), /* @__PURE__ */ l.createElement(H, null, "Mode"), /* @__PURE__ */ l.createElement(H, null, "Actions"))), /* @__PURE__ */ l.createElement(ii, null, e)), z = {
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
var St;
try {
  St = Map;
} catch {
}
var _t;
try {
  _t = Set;
} catch {
}
function ts(e, t, r) {
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
  if (St && e instanceof St)
    return new Map(Array.from(e.entries()));
  if (_t && e instanceof _t)
    return new Set(Array.from(e.values()));
  if (e instanceof Object) {
    t.push(e);
    var n = Object.create(e);
    r.push(n);
    for (var a in e) {
      var s = t.findIndex(function(i) {
        return i === e[a];
      });
      n[a] = s > -1 ? r[s] : ts(e[a], t, r);
    }
    return n;
  }
  return e;
}
function $t(e) {
  return ts(e, [], []);
}
const Ov = Object.prototype.toString, Iv = Error.prototype.toString, Pv = RegExp.prototype.toString, Rv = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", kv = /^Symbol\((.*)\)(.*)$/;
function Dv(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Hr(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const r = typeof e;
  if (r === "number")
    return Dv(e);
  if (r === "string")
    return t ? `"${e}"` : e;
  if (r === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol")
    return Rv.call(e).replace(kv, "Symbol($1)");
  const n = Ov.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + Iv.call(e) + "]" : n === "RegExp" ? Pv.call(e) : null;
}
function _e(e, t) {
  let r = Hr(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, a) {
    let s = Hr(this[n], t);
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
}, Lv = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Et = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Bv = {
  isValue: "${path} field must be ${value}"
}, xt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, Nv = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: X,
  string: L,
  number: Lv,
  date: Et,
  object: xt,
  array: Nv,
  boolean: Bv
});
var Uv = Object.prototype, Qv = Uv.hasOwnProperty;
function jv(e, t) {
  return e != null && Qv.call(e, t);
}
var Mv = jv, zv = Mv, qv = Bn;
function Gv(e, t) {
  return e != null && qv(e, t, zv);
}
var Vv = Gv;
const je = /* @__PURE__ */ T(Vv), rs = (e) => e && e.__isYupSchema__;
class Hv {
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
    if (!rs(a))
      throw new TypeError("conditions must return a schema object");
    return a.resolve(r);
  }
}
function ns(e) {
  return e == null ? [] : [].concat(e);
}
function Ct() {
  return Ct = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ct.apply(this, arguments);
}
let Yv = /\$\{\s*(\w+)\s*\}/g;
class P extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return n !== r.path && (r = Ct({}, r, {
      path: n
    })), typeof t == "string" ? t.replace(Yv, (a, s) => _e(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, a) {
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = r, this.path = n, this.type = a, this.errors = [], this.inner = [], ns(t).forEach((s) => {
      P.isError(s) ? (this.errors.push(...s.errors), this.inner = this.inner.concat(s.inner.length ? s.inner : s)) : this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, P);
  }
}
const Wv = (e) => {
  let t = !1;
  return (...r) => {
    t || (t = !0, e(...r));
  };
};
function wt(e, t) {
  let {
    endEarly: r,
    tests: n,
    args: a,
    value: s,
    errors: i,
    sort: o,
    path: u
  } = e, c = Wv(t), d = n.length;
  const p = [];
  if (i = i || [], !d)
    return i.length ? c(new P(i, s, u)) : c(null, s);
  for (let h = 0; h < n.length; h++) {
    const f = n[h];
    f(a, function(m) {
      if (m) {
        if (!P.isError(m))
          return c(m, s);
        if (r)
          return m.value = s, c(m, s);
        p.push(m);
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
function Kv(e) {
  return function(t, r, n) {
    for (var a = -1, s = Object(t), i = n(t), o = i.length; o--; ) {
      var u = i[e ? o : ++a];
      if (r(s[u], u, s) === !1)
        break;
    }
    return t;
  };
}
var Xv = Kv, Zv = Xv, Jv = Zv(), eS = Jv, tS = eS, rS = Te;
function nS(e, t) {
  return e && tS(e, t, rS);
}
var as = nS, aS = "__lodash_hash_undefined__";
function sS(e) {
  return this.__data__.set(e, aS), this;
}
var iS = sS;
function oS(e) {
  return this.__data__.has(e);
}
var lS = oS, uS = Ut, cS = iS, dS = lS;
function Me(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new uS(); ++t < r; )
    this.add(e[t]);
}
Me.prototype.add = Me.prototype.push = cS;
Me.prototype.has = dS;
var pS = Me;
function hS(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var fS = hS;
function gS(e, t) {
  return e.has(t);
}
var mS = gS, yS = pS, bS = fS, vS = mS, SS = 1, _S = 2;
function $S(e, t, r, n, a, s) {
  var i = r & SS, o = e.length, u = t.length;
  if (o != u && !(i && u > o))
    return !1;
  var c = s.get(e), d = s.get(t);
  if (c && d)
    return c == t && d == e;
  var p = -1, h = !0, f = r & _S ? new yS() : void 0;
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
      if (!bS(t, function(v, C) {
        if (!vS(f, C) && (y === v || a(y, v, r, n, s)))
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
var ss = $S;
function ES(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var xS = ES;
function CS(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var wS = CS, Yr = le, Wr = Yn, TS = Ke, AS = ss, FS = xS, OS = wS, IS = 1, PS = 2, RS = "[object Boolean]", kS = "[object Date]", DS = "[object Error]", LS = "[object Map]", BS = "[object Number]", NS = "[object RegExp]", US = "[object Set]", QS = "[object String]", jS = "[object Symbol]", MS = "[object ArrayBuffer]", zS = "[object DataView]", Kr = Yr ? Yr.prototype : void 0, ct = Kr ? Kr.valueOf : void 0;
function qS(e, t, r, n, a, s, i) {
  switch (r) {
    case zS:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case MS:
      return !(e.byteLength != t.byteLength || !s(new Wr(e), new Wr(t)));
    case RS:
    case kS:
    case BS:
      return TS(+e, +t);
    case DS:
      return e.name == t.name && e.message == t.message;
    case NS:
    case QS:
      return e == t + "";
    case LS:
      var o = FS;
    case US:
      var u = n & IS;
      if (o || (o = OS), e.size != t.size && !u)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      n |= PS, i.set(e, t);
      var d = AS(o(e), o(t), n, a, s, i);
      return i.delete(e), d;
    case jS:
      if (ct)
        return ct.call(e) == ct.call(t);
  }
  return !1;
}
var GS = qS, Xr = Hn, VS = 1, HS = Object.prototype, YS = HS.hasOwnProperty;
function WS(e, t, r, n, a, s) {
  var i = r & VS, o = Xr(e), u = o.length, c = Xr(t), d = c.length;
  if (u != d && !i)
    return !1;
  for (var p = u; p--; ) {
    var h = o[p];
    if (!(i ? h in t : YS.call(t, h)))
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
    var O = e.constructor, G = t.constructor;
    O != G && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof G == "function" && G instanceof G) && (m = !1);
  }
  return s.delete(e), s.delete(t), m;
}
var KS = WS, dt = Vt, XS = ss, ZS = GS, JS = KS, Zr = Ee, Jr = R, en = Ye, e_ = Lt, t_ = 1, tn = "[object Arguments]", rn = "[object Array]", Ie = "[object Object]", r_ = Object.prototype, nn = r_.hasOwnProperty;
function n_(e, t, r, n, a, s) {
  var i = Jr(e), o = Jr(t), u = i ? rn : Zr(e), c = o ? rn : Zr(t);
  u = u == tn ? Ie : u, c = c == tn ? Ie : c;
  var d = u == Ie, p = c == Ie, h = u == c;
  if (h && en(e)) {
    if (!en(t))
      return !1;
    i = !0, d = !1;
  }
  if (h && !d)
    return s || (s = new dt()), i || e_(e) ? XS(e, t, r, n, a, s) : ZS(e, t, u, r, n, a, s);
  if (!(r & t_)) {
    var f = d && nn.call(e, "__wrapped__"), y = p && nn.call(t, "__wrapped__");
    if (f || y) {
      var m = f ? e.value() : e, b = y ? t.value() : t;
      return s || (s = new dt()), a(m, b, r, n, s);
    }
  }
  return h ? (s || (s = new dt()), JS(e, t, r, n, a, s)) : !1;
}
var a_ = n_, s_ = a_, an = j;
function is(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !an(e) && !an(t) ? e !== e && t !== t : s_(e, t, r, n, is, a);
}
var os = is, i_ = Vt, o_ = os, l_ = 1, u_ = 2;
function c_(e, t, r, n) {
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
      var p = new i_();
      if (n)
        var h = n(c, d, u, e, t, p);
      if (!(h === void 0 ? o_(d, c, l_ | u_, n, p) : h))
        return !1;
    }
  }
  return !0;
}
var d_ = c_, p_ = q;
function h_(e) {
  return e === e && !p_(e);
}
var ls = h_, f_ = ls, g_ = Te;
function m_(e) {
  for (var t = g_(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, f_(a)];
  }
  return t;
}
var y_ = m_;
function b_(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var us = b_, v_ = d_, S_ = y_, __ = us;
function $_(e) {
  var t = S_(e);
  return t.length == 1 && t[0][2] ? __(t[0][0], t[0][1]) : function(r) {
    return r === e || v_(r, e, t);
  };
}
var E_ = $_, x_ = os, C_ = Ln, w_ = Mt, T_ = Nt, A_ = ls, F_ = us, O_ = Ce, I_ = 1, P_ = 2;
function R_(e, t) {
  return T_(e) && A_(t) ? F_(O_(e), t) : function(r) {
    var n = C_(r, e);
    return n === void 0 && n === t ? w_(r, e) : x_(t, n, I_ | P_);
  };
}
var k_ = R_;
function D_(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var L_ = D_, B_ = jt;
function N_(e) {
  return function(t) {
    return B_(t, e);
  };
}
var U_ = N_, Q_ = L_, j_ = U_, M_ = Nt, z_ = Ce;
function q_(e) {
  return M_(e) ? Q_(z_(e)) : j_(e);
}
var G_ = q_, V_ = E_, H_ = k_, Y_ = qt, W_ = R, K_ = G_;
function X_(e) {
  return typeof e == "function" ? e : e == null ? Y_ : typeof e == "object" ? W_(e) ? H_(e[0], e[1]) : V_(e) : K_(e);
}
var cs = X_, Z_ = rt, J_ = as, e0 = cs;
function t0(e, t) {
  var r = {};
  return t = e0(t), J_(e, function(n, a, s) {
    Z_(r, a, t(n, a, s));
  }), r;
}
var r0 = t0;
const ds = /* @__PURE__ */ T(r0);
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
var n0 = /[^.^\]^[]+|(?=\[\]|\.\.)/g, ps = /^\d+$/, a0 = /^\d/, s0 = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, i0 = /^\s*(['"]?)(.*?)(\1)\s*$/, nr = 512, sn = new ee(nr), on = new ee(nr), ln = new ee(nr), st = {
  Cache: ee,
  split: Tt,
  normalizePath: pt,
  setter: function(e) {
    var t = pt(e);
    return on.get(e) || on.set(e, function(n, a) {
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
    var r = pt(e);
    return ln.get(e) || ln.set(e, function(a) {
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
      return t + (ar(r) || ps.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    o0(Array.isArray(e) ? e : Tt(e), t, r);
  }
};
function pt(e) {
  return sn.get(e) || sn.set(
    e,
    Tt(e).map(function(t) {
      return t.replace(i0, "$2");
    })
  );
}
function Tt(e) {
  return e.match(n0) || [""];
}
function o0(e, t, r) {
  var n = e.length, a, s, i, o;
  for (s = 0; s < n; s++)
    a = e[s], a && (c0(a) && (a = '"' + a + '"'), o = ar(a), i = !o && /^\d+$/.test(a), t.call(r, a, o, i, s, e));
}
function ar(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function l0(e) {
  return e.match(a0) && !e.match(ps);
}
function u0(e) {
  return s0.test(e);
}
function c0(e) {
  return !ar(e) && (l0(e) || u0(e));
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
function d0(e, t) {
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
    } = r, d = d0(r, ["value", "path", "label", "options", "originalValue", "sync"]);
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
      const fe = ds(ze({
        value: a,
        originalValue: u,
        label: i,
        path: w.path || s
      }, f, w.params), v), or = new P(P.formatError(w.message || y, fe), a, fe.path, w.type || p);
      return or.params = fe, or;
    }
    let U = ze({
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
          P.isError(w) ? n(w) : w ? n(null, w) : n(C());
        }).catch(n);
      } catch (w) {
        n(w);
      }
      return;
    }
    let O;
    try {
      var G;
      if (O = h.call(U, a, U), typeof ((G = O) == null ? void 0 : G.then) == "function")
        throw new Error(`Validation test of type: "${U.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
    } catch (w) {
      n(w);
      return;
    }
    P.isError(O) ? n(O) : O ? n(null, O) : n(C());
  }
  return t.OPTIONS = e, t;
}
let p0 = (e) => e.substr(0, e.length - 1).substr(1);
function h0(e, t, r, n = r) {
  let a, s, i;
  return t ? (st.forEach(t, (o, u, c) => {
    let d = u ? p0(o) : o;
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
    this._whitelistError && f.push(this._whitelistError), this._blacklistError && f.push(this._blacklistError), wt({
      args: p,
      value: d,
      path: s,
      sync: a,
      tests: h,
      endEarly: c
    }, (y) => {
      if (y)
        return void n(y, d);
      wt({
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
    let n = this.clone(), a = Re(r), s = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((i) => !(i.OPTIONS.name === r.name && (s || i.OPTIONS.test === a.OPTIONS.test))), n.tests.push(a), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), a = ns(t).map((s) => new Y(s));
    return a.forEach((s) => {
      s.isSibling && n.deps.push(s.key);
    }), n.conditions.push(new Hv(a, r)), n;
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
    } = h0(this, t, r, n.context);
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
const f0 = F;
f0.prototype;
const B = (e) => e == null;
let g0 = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, m0 = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, y0 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, b0 = (e) => B(e) || e === e.trim(), v0 = {}.toString();
function ve() {
  return new hs();
}
class hs extends F {
  constructor() {
    super({
      type: "string"
    }), this.withMutation(() => {
      this.transform(function(t) {
        if (this.isType(t) || Array.isArray(t))
          return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === v0 ? t : r;
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
    return this.matches(g0, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = L.url) {
    return this.matches(m0, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = L.uuid) {
    return this.matches(y0, {
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
      test: b0
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
ve.prototype = hs.prototype;
var S0 = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function _0(e) {
  var t = [1, 4, 5, 6, 7, 10, 11], r = 0, n, a;
  if (a = S0.exec(e)) {
    for (var s = 0, i; i = t[s]; ++s)
      a[i] = +a[i] || 0;
    a[2] = (+a[2] || 1) - 1, a[3] = +a[3] || 1, a[7] = a[7] ? String(a[7]).substr(0, 3) : 0, (a[8] === void 0 || a[8] === "") && (a[9] === void 0 || a[9] === "") ? n = +new Date(a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : (a[8] !== "Z" && a[9] !== void 0 && (r = a[10] * 60 + a[11], a[9] === "+" && (r = 0 - r)), n = Date.UTC(a[1], a[2], a[3], a[4], a[5] + r, a[6], a[7]));
  } else
    n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let fs = /* @__PURE__ */ new Date(""), $0 = (e) => Object.prototype.toString.call(e) === "[object Date]";
class gs extends F {
  constructor() {
    super({
      type: "date"
    }), this.withMutation(() => {
      this.transform(function(t) {
        return this.isType(t) ? t : (t = _0(t), isNaN(t) ? fs : new Date(t));
      });
    });
  }
  _typeCheck(t) {
    return $0(t) && !isNaN(t.getTime());
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
  min(t, r = Et.min) {
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
  max(t, r = Et.max) {
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
gs.INVALID_DATE = fs;
gs.prototype;
function E0(e, t, r, n) {
  var a = -1, s = e == null ? 0 : e.length;
  for (n && s && (r = e[++a]); ++a < s; )
    r = t(r, e[a], a, e);
  return r;
}
var x0 = E0;
function C0(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var w0 = C0, T0 = w0, A0 = {
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
}, F0 = T0(A0), O0 = F0, I0 = O0, P0 = xe, R0 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, k0 = "\\u0300-\\u036f", D0 = "\\ufe20-\\ufe2f", L0 = "\\u20d0-\\u20ff", B0 = k0 + D0 + L0, N0 = "[" + B0 + "]", U0 = RegExp(N0, "g");
function Q0(e) {
  return e = P0(e), e && e.replace(R0, I0).replace(U0, "");
}
var j0 = Q0, M0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function z0(e) {
  return e.match(M0) || [];
}
var q0 = z0, G0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function V0(e) {
  return G0.test(e);
}
var H0 = V0, ms = "\\ud800-\\udfff", Y0 = "\\u0300-\\u036f", W0 = "\\ufe20-\\ufe2f", K0 = "\\u20d0-\\u20ff", X0 = Y0 + W0 + K0, ys = "\\u2700-\\u27bf", bs = "a-z\\xdf-\\xf6\\xf8-\\xff", Z0 = "\\xac\\xb1\\xd7\\xf7", J0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", e1 = "\\u2000-\\u206f", t1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", vs = "A-Z\\xc0-\\xd6\\xd8-\\xde", r1 = "\\ufe0e\\ufe0f", Ss = Z0 + J0 + e1 + t1, _s = "['’]", un = "[" + Ss + "]", n1 = "[" + X0 + "]", $s = "\\d+", a1 = "[" + ys + "]", Es = "[" + bs + "]", xs = "[^" + ms + Ss + $s + ys + bs + vs + "]", s1 = "\\ud83c[\\udffb-\\udfff]", i1 = "(?:" + n1 + "|" + s1 + ")", o1 = "[^" + ms + "]", Cs = "(?:\\ud83c[\\udde6-\\uddff]){2}", ws = "[\\ud800-\\udbff][\\udc00-\\udfff]", re = "[" + vs + "]", l1 = "\\u200d", cn = "(?:" + Es + "|" + xs + ")", u1 = "(?:" + re + "|" + xs + ")", dn = "(?:" + _s + "(?:d|ll|m|re|s|t|ve))?", pn = "(?:" + _s + "(?:D|LL|M|RE|S|T|VE))?", Ts = i1 + "?", As = "[" + r1 + "]?", c1 = "(?:" + l1 + "(?:" + [o1, Cs, ws].join("|") + ")" + As + Ts + ")*", d1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", p1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", h1 = As + Ts + c1, f1 = "(?:" + [a1, Cs, ws].join("|") + ")" + h1, g1 = RegExp([
  re + "?" + Es + "+" + dn + "(?=" + [un, re, "$"].join("|") + ")",
  u1 + "+" + pn + "(?=" + [un, re + cn, "$"].join("|") + ")",
  re + "?" + cn + "+" + dn,
  re + "+" + pn,
  p1,
  d1,
  $s,
  f1
].join("|"), "g");
function m1(e) {
  return e.match(g1) || [];
}
var y1 = m1, b1 = q0, v1 = H0, S1 = xe, _1 = y1;
function $1(e, t, r) {
  return e = S1(e), t = r ? void 0 : t, t === void 0 ? v1(e) ? _1(e) : b1(e) : e.match(t) || [];
}
var E1 = $1, x1 = x0, C1 = j0, w1 = E1, T1 = "['’]", A1 = RegExp(T1, "g");
function F1(e) {
  return function(t) {
    return x1(w1(C1(t).replace(A1, "")), e, "");
  };
}
var Fs = F1, O1 = Fs, I1 = O1(function(e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
}), P1 = I1;
const hn = /* @__PURE__ */ T(P1);
function R1(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++n < a; )
    s[n] = e[n + t];
  return s;
}
var k1 = R1, D1 = k1;
function L1(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : D1(e, t, r);
}
var B1 = L1, N1 = "\\ud800-\\udfff", U1 = "\\u0300-\\u036f", Q1 = "\\ufe20-\\ufe2f", j1 = "\\u20d0-\\u20ff", M1 = U1 + Q1 + j1, z1 = "\\ufe0e\\ufe0f", q1 = "\\u200d", G1 = RegExp("[" + q1 + N1 + M1 + z1 + "]");
function V1(e) {
  return G1.test(e);
}
var Os = V1;
function H1(e) {
  return e.split("");
}
var Y1 = H1, Is = "\\ud800-\\udfff", W1 = "\\u0300-\\u036f", K1 = "\\ufe20-\\ufe2f", X1 = "\\u20d0-\\u20ff", Z1 = W1 + K1 + X1, J1 = "\\ufe0e\\ufe0f", e$ = "[" + Is + "]", At = "[" + Z1 + "]", Ft = "\\ud83c[\\udffb-\\udfff]", t$ = "(?:" + At + "|" + Ft + ")", Ps = "[^" + Is + "]", Rs = "(?:\\ud83c[\\udde6-\\uddff]){2}", ks = "[\\ud800-\\udbff][\\udc00-\\udfff]", r$ = "\\u200d", Ds = t$ + "?", Ls = "[" + J1 + "]?", n$ = "(?:" + r$ + "(?:" + [Ps, Rs, ks].join("|") + ")" + Ls + Ds + ")*", a$ = Ls + Ds + n$, s$ = "(?:" + [Ps + At + "?", At, Rs, ks, e$].join("|") + ")", i$ = RegExp(Ft + "(?=" + Ft + ")|" + s$ + a$, "g");
function o$(e) {
  return e.match(i$) || [];
}
var l$ = o$, u$ = Y1, c$ = Os, d$ = l$;
function p$(e) {
  return c$(e) ? d$(e) : u$(e);
}
var h$ = p$, f$ = B1, g$ = Os, m$ = h$, y$ = xe;
function b$(e) {
  return function(t) {
    t = y$(t);
    var r = g$(t) ? m$(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? f$(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var v$ = b$, S$ = v$, _$ = S$("toUpperCase"), $$ = _$, E$ = xe, x$ = $$;
function C$(e) {
  return x$(E$(e).toLowerCase());
}
var w$ = C$, T$ = w$, A$ = Fs, F$ = A$(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? T$(t) : t);
}), O$ = F$;
const I$ = /* @__PURE__ */ T(O$);
var P$ = rt, R$ = as, k$ = cs;
function D$(e, t) {
  var r = {};
  return t = k$(t), R$(e, function(n, a, s) {
    P$(r, t(n, a, s), n);
  }), r;
}
var L$ = D$;
const B$ = /* @__PURE__ */ T(L$);
var sr = { exports: {} };
sr.exports = function(e) {
  return Bs(N$(e), e);
};
sr.exports.array = Bs;
function Bs(e, t) {
  var r = e.length, n = new Array(r), a = {}, s = r, i = U$(t), o = Q$(e);
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
function N$(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.add(a[0]), t.add(a[1]);
  }
  return Array.from(t);
}
function U$(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var a = e[r];
    t.has(a[0]) || t.set(a[0], /* @__PURE__ */ new Set()), t.has(a[1]) || t.set(a[1], /* @__PURE__ */ new Set()), t.get(a[0]).add(a[1]);
  }
  return t;
}
function Q$(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var j$ = sr.exports;
const M$ = /* @__PURE__ */ T(j$);
function z$(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), a = new Set(t.map(([i, o]) => `${i}-${o}`));
  function s(i, o) {
    let u = st.split(i)[0];
    n.add(u), a.has(`${o}-${u}`) || r.push([o, u]);
  }
  for (const i in e)
    if (je(e, i)) {
      let o = e[i];
      n.add(i), Y.isRef(o) && o.isSibling ? s(o.path, i) : rs(o) && "deps" in o && o.deps.forEach((u) => s(u, i));
    }
  return M$.array(Array.from(n), r).reverse();
}
function fn(e, t) {
  let r = 1 / 0;
  return e.some((n, a) => {
    var s;
    if (((s = t.path) == null ? void 0 : s.indexOf(n)) !== -1)
      return r = a, !0;
  }), r;
}
function Ns(e) {
  return (t, r) => fn(e, t) - fn(e, r);
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
let gn = (e) => Object.prototype.toString.call(e) === "[object Object]";
function q$(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const G$ = Ns([]);
class Us extends F {
  constructor(t) {
    super({
      type: "object"
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = G$, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
    return gn(t) || typeof t == "function";
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
        if (!P.isError(d) || u)
          return void n(d, p);
        a.push(d);
      }
      if (!c || !gn(p)) {
        n(a[0] || null, p);
        return;
      }
      o = o || p;
      let h = this._nodes.map((f) => (y, m) => {
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
          }), m);
          return;
        }
        m(null);
      });
      wt({
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
    return n.fields = a, n._sortErrors = Ns(Object.keys(a)), r.length && (Array.isArray(r[0]) || (r = [r]), n._excludedEdges = [...n._excludedEdges, ...r]), n._nodes = z$(a, n._excludedEdges), n;
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
  noUnknown(t = !0, r = xt.noUnknown) {
    typeof t == "string" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(a) {
        if (a == null)
          return !0;
        const s = q$(this.schema, a);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = xt.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => r && B$(r, (n, a) => t(a)));
  }
  camelCase() {
    return this.transformKeys(I$);
  }
  snakeCase() {
    return this.transformKeys(hn);
  }
  constantCase() {
    return this.transformKeys((t) => hn(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return t.fields = ds(this.fields, (r) => r.describe()), t;
  }
}
function Qs(e) {
  return new Us(e);
}
Qs.prototype = Us.prototype;
var js = { exports: {} };
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
})(js);
var V$ = js.exports;
const H$ = /* @__PURE__ */ T(V$), Y$ = () => {
  const e = H$.get("csrftoken");
  return e || null;
}, it = ke.create({
  baseURL: "",
  timeout: 3e4,
  withCredentials: !0,
  // Include cookies in requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
it.interceptors.request.use(
  (e) => {
    const t = Y$();
    return t && (e.headers["X-CSRFTOKEN"] = t), e;
  },
  (e) => Promise.reject(e)
);
const W$ = async () => {
  try {
    const e = await it.get(
      "/api/importer-tasks/config"
    );
    return e.status === 200 ? e.data : (console.error("Failed to fetch record types:", e.statusText), []);
  } catch (e) {
    return console.error("Error fetching record types:", e), [];
  }
}, K$ = async (e) => {
  try {
    const t = await it.get(
      `/api/importer-tasks/config/${e}`
    );
    if (t.status === 200)
      return t.data;
    throw new Error(`Unexpected response status: ${t.status}`);
  } catch (t) {
    throw console.error("Error fetching serializers:", t), new Error("Failed to fetch serializers");
  }
}, X$ = async (e) => {
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
    const r = await it.post("/api/importer-tasks", t);
    return r.status === 201 ? r.data : (console.error("Failed to fetch record types:", r.statusText), []);
  } catch (r) {
    return console.error("Error fetching record types:", r), [];
  }
}, Z$ = () => {
  const [e, t] = ht(
    {}
  ), [r, n] = ht(!0), { values: a, submitForm: s, isSubmitting: i, isValid: o } = $i(), u = Js(async () => {
    try {
      const c = await W$(), d = {};
      for (const p of c) {
        const h = await K$(p);
        h && (d[p] = h);
      }
      t(d);
    } catch (c) {
      console.error("Error fetching record types:", c);
    } finally {
      n(!1);
    }
  }, []);
  return It(() => {
    u();
  }, [u]), r ? /* @__PURE__ */ l.createElement("p", null, "Loading record types...") : !e || Object.keys(e).length === 0 ? /* @__PURE__ */ l.createElement("p", null, "No record types available.") : /* @__PURE__ */ l.createElement("div", null, /* @__PURE__ */ l.createElement(
    vi,
    {
      fieldPath: "title",
      label: "Title",
      placeholder: "Enter a title for the import task",
      required: !0
    }
  ), /* @__PURE__ */ l.createElement(oi.Group, { widths: "equal" }, /* @__PURE__ */ l.createElement(
    ot,
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
    ot,
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
    ot,
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
    Si,
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
}, J$ = {
  title: "",
  description: "",
  mode: "import",
  status: "created",
  startTime: null,
  endTime: null,
  recordType: "",
  serializer: ""
}, eE = Qs({
  title: ve().required("Title is required"),
  recordType: ve().required("Record type is required"),
  serializer: ve().required("Serializer is required"),
  mode: ve().required("Mode is required")
}), tE = ({ onSubmit: e }) => {
  const t = async (r) => {
    try {
      const n = await X$(r);
      e == null || e(), n ? console.log("Import task created successfully:", n) : console.error("Failed to create import task");
    } catch (n) {
      console.error("Error creating import task:", n);
    }
  };
  return /* @__PURE__ */ l.createElement(
    _i,
    {
      formik: {
        initialValues: J$,
        validationSchema: eE,
        onSubmit: t
      }
    },
    /* @__PURE__ */ l.createElement(Z$, null)
  );
}, rE = () => {
  const [e, t] = ht(!1);
  return /* @__PURE__ */ l.createElement(
    li,
    {
      closeIcon: !0,
      onClose: () => t(!1),
      onOpen: () => t(!0),
      open: e,
      trigger: /* @__PURE__ */ l.createElement(ie, { color: "green", icon: !0, labelPosition: "left" }, /* @__PURE__ */ l.createElement(se, { name: "add" }), "New Import")
    },
    /* @__PURE__ */ l.createElement(ui, null, "New Import Task"),
    /* @__PURE__ */ l.createElement(ci, null, /* @__PURE__ */ l.createElement(tE, { onSubmit: () => t(!1) })),
    /* @__PURE__ */ l.createElement(di, null, /* @__PURE__ */ l.createElement(ie, { onClick: () => t(!1) }, "Close"))
  );
}, nE = ({
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
}, Ms = Zb(nE);
function Ot(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var aE = (e) => typeof e == "object" && e !== null;
function sE(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var iE = (e) => e === "base";
function oE(e) {
  return e.slice().filter((t) => !iE(t));
}
function mn(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function lE(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = mn(r % 52) + t;
  return mn(r % 52) + t;
}
function uE(e, t) {
  let r = t.length;
  for (; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function cE(e) {
  return lE(uE(5381, e) >>> 0);
}
var zs = /\s*!(important)?/i;
function dE(e) {
  return typeof e == "string" ? zs.test(e) : !1;
}
function pE(e) {
  return typeof e == "string" ? e.replace(zs, "").trim() : e;
}
function qs(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var ir = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...n) => {
    const a = JSON.stringify(n);
    if (t.has(a))
      return t.get(a);
    const s = e(...n);
    return t.set(a, s), s;
  };
}, hE = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function Gs(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((n) => {
    if (hE.has(n))
      return;
    const a = t[n], s = r[n];
    Ot(a) && Ot(s) ? t[n] = Gs(a, s) : t[n] = s;
  }), t), {});
}
var fE = (e) => e != null;
function Vs(e, t, r = {}) {
  const { stop: n, getKey: a } = r;
  function s(i, o = []) {
    if (aE(i)) {
      const u = {};
      for (const [c, d] of Object.entries(i)) {
        const p = (a == null ? void 0 : a(c, d)) ?? c, h = [...o, p];
        if (n != null && n(i, h))
          return t(i, o);
        const f = s(d, h);
        fE(f) && (u[p] = f);
      }
      return u;
    }
    return t(i, o);
  }
  return s(e);
}
function gE(e, t) {
  return e.reduce(
    (r, n, a) => {
      const s = t[a];
      return n != null && (r[s] = n), r;
    },
    {}
  );
}
function Hs(e, t, r = !0) {
  const { utility: n, conditions: a } = t, { hasShorthand: s, resolveShorthand: i } = n;
  return Vs(
    e,
    (o) => Array.isArray(o) ? gE(o, a.breakpoints.keys) : o,
    {
      stop: (o) => Array.isArray(o),
      getKey: r ? (o) => s ? i(o) : o : void 0
    }
  );
}
var mE = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, yE = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function bE(e) {
  const { utility: t, hash: r, conditions: n = mE } = e, a = (i) => [t.prefix, i].filter(Boolean).join("-"), s = (i, o) => {
    let u;
    if (r) {
      const c = [...n.finalize(i), o];
      u = a(t.toHash(c, cE));
    } else
      u = [...n.finalize(i), a(o)].join(":");
    return u;
  };
  return ir(({ base: i, ...o } = {}) => {
    const u = Object.assign(o, i), c = Hs(u, e), d = /* @__PURE__ */ new Set();
    return Vs(c, (p, h) => {
      if (p == null)
        return;
      const f = dE(p), [y, ...m] = n.shift(h), b = oE(m), v = t.transform(y, pE(yE(p)));
      let C = s(b, v.className);
      f && (C = `${C}!`), d.add(C);
    }), Array.from(d).join(" ");
  });
}
function vE(...e) {
  return e.flat().filter((t) => Ot(t) && Object.keys(sE(t)).length > 0);
}
function SE(e) {
  function t(a) {
    const s = vE(...a);
    return s.length === 1 ? s : s.map((i) => Hs(i, e));
  }
  function r(...a) {
    return Gs(...t(a));
  }
  function n(...a) {
    return Object.assign({}, ...t(a));
  }
  return { mergeCss: ir(r), assignCss: n };
}
var _E = /([A-Z])/g, $E = /^ms-/, EE = ir((e) => e.startsWith("--") ? e : e.replace(_E, "-$1").replace($E, "-ms-").toLowerCase()), xE = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${xE.split(",").join("|")}`;
const CE = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", Ys = new Set(CE.split(",")), wE = /^@|&|&$/;
function yn(e) {
  return Ys.has(e) || wE.test(e);
}
const TE = /^_/, AE = /&|@/;
function FE(e) {
  return e.map((t) => Ys.has(t) ? t.replace(TE, "") : AE.test(t) ? `[${qs(t.trim())}]` : t);
}
function OE(e) {
  return e.sort((t, r) => {
    const n = yn(t), a = yn(r);
    return n && !a ? 1 : !n && a ? -1 : 0;
  });
}
const IE = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle", Ws = /* @__PURE__ */ new Map(), Ks = /* @__PURE__ */ new Map();
IE.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [n, ...a] = r.split("/");
  Ws.set(t, n), a.length && a.forEach((s) => {
    Ks.set(s === "1" ? n : s, t);
  });
});
const bn = (e) => Ks.get(e) || e, Xs = {
  conditions: {
    shift: OE,
    finalize: FE,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = bn(e);
      return { className: `${Ws.get(r) || EE(r)}_${qs(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: bn
  }
}, PE = bE(Xs), Z = (...e) => PE(Zs(...e));
Z.raw = (...e) => Zs(...e);
const { mergeCss: Zs, assignCss: YE } = SE(Xs), ye = {
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
}, RE = () => /* @__PURE__ */ l.createElement(
  "section",
  {
    className: ye.searchBarRow,
    "aria-label": "Records search and filters"
  },
  /* @__PURE__ */ l.createElement("div", { className: ye.facets }, /* @__PURE__ */ l.createElement(Ms, null)),
  /* @__PURE__ */ l.createElement("div", { className: ye.search }, /* @__PURE__ */ l.createElement(
    yv,
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
  /* @__PURE__ */ l.createElement("div", { className: ye.import }, /* @__PURE__ */ l.createElement(rE, null))
), kE = () => {
  const { config: e } = Tv();
  return /* @__PURE__ */ l.createElement(ge, null, /* @__PURE__ */ l.createElement(ge.Row, { verticalAlign: "middle" }, /* @__PURE__ */ l.createElement(ge.Column, { width: 4, textAlign: "left" }, /* @__PURE__ */ l.createElement(Hb, { label: (t) => /* @__PURE__ */ l.createElement("p", null, "Showing ", t, " task(s)") })), /* @__PURE__ */ l.createElement(ge.Column, { width: 8, textAlign: "center" }, /* @__PURE__ */ l.createElement(nv, { options: { size: "mini" } })), /* @__PURE__ */ l.createElement(ge.Column, { width: 4, textAlign: "right" }, /* @__PURE__ */ l.createElement(
    fv,
    {
      values: e.paginationOptions.resultsPerPage,
      label: (t) => /* @__PURE__ */ l.createElement("p", null, t, " results per page")
    }
  ))));
}, DE = ({
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
  }, n = new ra(r.searchApi), a = {
    [`${r.appId}.ResultsList.item`]: Av,
    [`${r.appId}.ResultsList.container`]: Fv,
    [`${r.appId}.SearchFacets`]: Ms,
    ...t
  };
  return /* @__PURE__ */ l.createElement(pi.Provider, { value: a }, /* @__PURE__ */ l.createElement(
    Pb,
    {
      appName: r.appId,
      searchApi: n,
      initialQueryState: r.initialQueryState
    },
    /* @__PURE__ */ l.createElement(wv, { config: r }, /* @__PURE__ */ l.createElement(RE, null), /* @__PURE__ */ l.createElement(cv, null, /* @__PURE__ */ l.createElement(Kb, null), /* @__PURE__ */ l.createElement(Na, null)), /* @__PURE__ */ l.createElement(kE, null))
  ));
}, LE = {
  bulkImporter: Z({
    padding: "2rem"
  })
}, WE = () => /* @__PURE__ */ l.createElement("div", { className: LE.bulkImporter }, /* @__PURE__ */ l.createElement(En, { as: "h1" }, "Bulk Importer"), /* @__PURE__ */ l.createElement("p", null, "A more modern approach for an invenio compatible bulk importer."), /* @__PURE__ */ l.createElement(DE, null));
function KE(e) {
  return new ra(e);
}
function XE(e, t = {}, r = !0) {
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
  WE as BulkImporter,
  rE as ImportModal,
  DE as Search,
  KE as createSearchApi,
  XE as createSearchApiConfig
};
