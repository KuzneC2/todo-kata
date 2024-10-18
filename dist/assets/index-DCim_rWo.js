var Cc = Object.defineProperty;
var xc = (e, t, n) =>
  t in e
    ? Cc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var ne = (e, t, n) => xc(e, typeof t != "symbol" ? t + "" : t, n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function _c(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var os = { exports: {} },
  ll = {},
  us = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qn = Symbol.for("react.element"),
  Tc = Symbol.for("react.portal"),
  Pc = Symbol.for("react.fragment"),
  Nc = Symbol.for("react.strict_mode"),
  Dc = Symbol.for("react.profiler"),
  zc = Symbol.for("react.provider"),
  Lc = Symbol.for("react.context"),
  Mc = Symbol.for("react.forward_ref"),
  jc = Symbol.for("react.suspense"),
  Oc = Symbol.for("react.memo"),
  Rc = Symbol.for("react.lazy"),
  Qo = Symbol.iterator;
function Ic(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qo && e[Qo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ss = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  as = Object.assign,
  cs = {};
function un(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = cs),
    (this.updater = n || ss);
}
un.prototype.isReactComponent = {};
un.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
un.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fs() {}
fs.prototype = un.prototype;
function Bi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = cs),
    (this.updater = n || ss);
}
var Hi = (Bi.prototype = new fs());
Hi.constructor = Bi;
as(Hi, un.prototype);
Hi.isPureReactComponent = !0;
var Ko = Array.isArray,
  ds = Object.prototype.hasOwnProperty,
  Qi = { current: null },
  ps = { key: !0, ref: !0, __self: !0, __source: !0 };
function ms(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ds.call(t, r) && !ps.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: qn,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Qi.current,
  };
}
function Fc(e, t) {
  return {
    $$typeof: qn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ki(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qn;
}
function Ac(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Yo = /\/+/g;
function Cl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ac("" + e.key)
    : t.toString(36);
}
function Er(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case qn:
          case Tc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Cl(o, 0) : r),
      Ko(l)
        ? ((n = ""),
          e != null && (n = e.replace(Yo, "$&/") + "/"),
          Er(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Ki(l) &&
            (l = Fc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Yo, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ko(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Cl(i, u);
      o += Er(i, t, n, s, l);
    }
  else if (((s = Ic(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Cl(i, u++)), (o += Er(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function ir(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Er(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Uc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  Cr = { transition: null },
  Wc = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Cr,
    ReactCurrentOwner: Qi,
  };
function hs() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = {
  map: ir,
  forEach: function (e, t, n) {
    ir(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ir(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ir(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ki(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
L.Component = un;
L.Fragment = Pc;
L.Profiler = Dc;
L.PureComponent = Bi;
L.StrictMode = Nc;
L.Suspense = jc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wc;
L.act = hs;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = as({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Qi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ds.call(t, s) &&
        !ps.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: qn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: Lc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: zc, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = ms;
L.createFactory = function (e) {
  var t = ms.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: Mc, render: e };
};
L.isValidElement = Ki;
L.lazy = function (e) {
  return { $$typeof: Rc, _payload: { _status: -1, _result: e }, _init: Uc };
};
L.memo = function (e, t) {
  return { $$typeof: Oc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = Cr.transition;
  Cr.transition = {};
  try {
    e();
  } finally {
    Cr.transition = t;
  }
};
L.unstable_act = hs;
L.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
L.useContext = function (e) {
  return ae.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
L.useId = function () {
  return ae.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return ae.current.useRef(e);
};
L.useState = function (e) {
  return ae.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return ae.current.useTransition();
};
L.version = "18.3.1";
us.exports = L;
var mt = us.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $c = mt,
  Vc = Symbol.for("react.element"),
  Bc = Symbol.for("react.fragment"),
  Hc = Object.prototype.hasOwnProperty,
  Qc = $c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Kc = { key: !0, ref: !0, __self: !0, __source: !0 };
function vs(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Hc.call(t, r) && !Kc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Vc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Qc.current,
  };
}
ll.Fragment = Bc;
ll.jsx = vs;
ll.jsxs = vs;
os.exports = ll;
var P = os.exports,
  ys = { exports: {} },
  Se = {},
  gs = { exports: {} },
  ws = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, N) {
    var D = C.length;
    C.push(N);
    e: for (; 0 < D; ) {
      var Q = (D - 1) >>> 1,
        Z = C[Q];
      if (0 < l(Z, N)) (C[Q] = N), (C[D] = Z), (D = Q);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var N = C[0],
      D = C.pop();
    if (D !== N) {
      C[0] = D;
      e: for (var Q = 0, Z = C.length, rr = Z >>> 1; Q < rr; ) {
        var gt = 2 * (Q + 1) - 1,
          El = C[gt],
          wt = gt + 1,
          lr = C[wt];
        if (0 > l(El, D))
          wt < Z && 0 > l(lr, El)
            ? ((C[Q] = lr), (C[wt] = D), (Q = wt))
            : ((C[Q] = El), (C[gt] = D), (Q = gt));
        else if (wt < Z && 0 > l(lr, D)) (C[Q] = lr), (C[wt] = D), (Q = wt);
        else break e;
      }
    }
    return N;
  }
  function l(C, N) {
    var D = C.sortIndex - N.sortIndex;
    return D !== 0 ? D : C.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    g = !1,
    S = !1,
    w = !1,
    z = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var N = n(c); N !== null; ) {
      if (N.callback === null) r(c);
      else if (N.startTime <= C)
        r(c), (N.sortIndex = N.expirationTime), t(s, N);
      else break;
      N = n(c);
    }
  }
  function v(C) {
    if (((w = !1), d(C), !S))
      if (n(s) !== null) (S = !0), Sl(E);
      else {
        var N = n(c);
        N !== null && kl(v, N.startTime - C);
      }
  }
  function E(C, N) {
    (S = !1), w && ((w = !1), f(T), (T = -1)), (g = !0);
    var D = p;
    try {
      for (
        d(N), m = n(s);
        m !== null && (!(m.expirationTime > N) || (C && !Ne()));

      ) {
        var Q = m.callback;
        if (typeof Q == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var Z = Q(m.expirationTime <= N);
          (N = e.unstable_now()),
            typeof Z == "function" ? (m.callback = Z) : m === n(s) && r(s),
            d(N);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var rr = !0;
      else {
        var gt = n(c);
        gt !== null && kl(v, gt.startTime - N), (rr = !1);
      }
      return rr;
    } finally {
      (m = null), (p = D), (g = !1);
    }
  }
  var x = !1,
    _ = null,
    T = -1,
    H = 5,
    M = -1;
  function Ne() {
    return !(e.unstable_now() - M < H);
  }
  function cn() {
    if (_ !== null) {
      var C = e.unstable_now();
      M = C;
      var N = !0;
      try {
        N = _(!0, C);
      } finally {
        N ? fn() : ((x = !1), (_ = null));
      }
    } else x = !1;
  }
  var fn;
  if (typeof a == "function")
    fn = function () {
      a(cn);
    };
  else if (typeof MessageChannel < "u") {
    var Ho = new MessageChannel(),
      Ec = Ho.port2;
    (Ho.port1.onmessage = cn),
      (fn = function () {
        Ec.postMessage(null);
      });
  } else
    fn = function () {
      z(cn, 0);
    };
  function Sl(C) {
    (_ = C), x || ((x = !0), fn());
  }
  function kl(C, N) {
    T = z(function () {
      C(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || g || ((S = !0), Sl(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (H = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = p;
      }
      var D = p;
      p = N;
      try {
        return C();
      } finally {
        p = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, N) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var D = p;
      p = C;
      try {
        return N();
      } finally {
        p = D;
      }
    }),
    (e.unstable_scheduleCallback = function (C, N, D) {
      var Q = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? Q + D : Q))
          : (D = Q),
        C)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = D + Z),
        (C = {
          id: h++,
          callback: N,
          priorityLevel: C,
          startTime: D,
          expirationTime: Z,
          sortIndex: -1,
        }),
        D > Q
          ? ((C.sortIndex = D),
            t(c, C),
            n(s) === null &&
              C === n(c) &&
              (w ? (f(T), (T = -1)) : (w = !0), kl(v, D - Q)))
          : ((C.sortIndex = Z), t(s, C), S || g || ((S = !0), Sl(E))),
        C
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (C) {
      var N = p;
      return function () {
        var D = p;
        p = N;
        try {
          return C.apply(this, arguments);
        } finally {
          p = D;
        }
      };
    });
})(ws);
gs.exports = ws;
var Yc = gs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xc = mt,
  we = Yc;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ss = new Set(),
  Rn = {};
function Mt(e, t) {
  bt(e, t), bt(e + "Capture", t);
}
function bt(e, t) {
  for (Rn[e] = t, e = 0; e < t.length; e++) Ss.add(t[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Zl = Object.prototype.hasOwnProperty,
  Gc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Xo = {},
  Go = {};
function Zc(e) {
  return Zl.call(Go, e)
    ? !0
    : Zl.call(Xo, e)
      ? !1
      : Gc.test(e)
        ? (Go[e] = !0)
        : ((Xo[e] = !0), !1);
}
function Jc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function qc(e, t, n, r) {
  if (t === null || typeof t > "u" || Jc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yi = /[\-:]([a-z])/g;
function Xi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yi, Xi);
    te[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yi, Xi);
    te[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yi, Xi);
  te[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gi(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (qc(t, n, l, r) && (n = null),
    r || l === null
      ? Zc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  or = Symbol.for("react.element"),
  Rt = Symbol.for("react.portal"),
  It = Symbol.for("react.fragment"),
  Zi = Symbol.for("react.strict_mode"),
  Jl = Symbol.for("react.profiler"),
  ks = Symbol.for("react.provider"),
  Es = Symbol.for("react.context"),
  Ji = Symbol.for("react.forward_ref"),
  ql = Symbol.for("react.suspense"),
  bl = Symbol.for("react.suspense_list"),
  qi = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  Cs = Symbol.for("react.offscreen"),
  Zo = Symbol.iterator;
function dn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Zo && e[Zo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  xl;
function En(e) {
  if (xl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xl = (t && t[1]) || "";
    }
  return (
    `
` +
    xl +
    e
  );
}
var _l = !1;
function Tl(e, t) {
  if (!e || _l) return "";
  _l = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (_l = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? En(e) : "";
}
function bc(e) {
  switch (e.tag) {
    case 5:
      return En(e.type);
    case 16:
      return En("Lazy");
    case 13:
      return En("Suspense");
    case 19:
      return En("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Tl(e.type, !1)), e;
    case 11:
      return (e = Tl(e.type.render, !1)), e;
    case 1:
      return (e = Tl(e.type, !0)), e;
    default:
      return "";
  }
}
function ei(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case It:
      return "Fragment";
    case Rt:
      return "Portal";
    case Jl:
      return "Profiler";
    case Zi:
      return "StrictMode";
    case ql:
      return "Suspense";
    case bl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Es:
        return (e.displayName || "Context") + ".Consumer";
      case ks:
        return (e._context.displayName || "Context") + ".Provider";
      case Ji:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case qi:
        return (
          (t = e.displayName || null), t !== null ? t : ei(e.type) || "Memo"
        );
      case qe:
        (t = e._payload), (e = e._init);
        try {
          return ei(e(t));
        } catch {}
    }
  return null;
}
function ef(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ei(t);
    case 8:
      return t === Zi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function dt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function xs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function tf(e) {
  var t = xs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ur(e) {
  e._valueTracker || (e._valueTracker = tf(e));
}
function _s(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = xs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Or(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ti(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Jo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ts(e, t) {
  (t = t.checked), t != null && Gi(e, "checked", t, !1);
}
function ni(e, t) {
  Ts(e, t);
  var n = dt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ri(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ri(e, t.type, dt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function qo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ri(e, t, n) {
  (t !== "number" || Or(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Cn = Array.isArray;
function Yt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function li(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function bo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (Cn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: dt(n) };
}
function Ps(e, t) {
  var n = dt(t.value),
    r = dt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function eu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ns(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ii(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ns(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var sr,
  Ds = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        sr = sr || document.createElement("div"),
          sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = sr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function In(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  nf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tn).forEach(function (e) {
  nf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tn[t] = Tn[e]);
  });
});
function zs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Tn.hasOwnProperty(e) && Tn[e])
      ? ("" + t).trim()
      : t + "px";
}
function Ls(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = zs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var rf = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function oi(e, t) {
  if (t) {
    if (rf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ui(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var si = null;
function bi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ai = null,
  Xt = null,
  Gt = null;
function tu(e) {
  if ((e = tr(e))) {
    if (typeof ai != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = al(t)), ai(e.stateNode, e.type, t));
  }
}
function Ms(e) {
  Xt ? (Gt ? Gt.push(e) : (Gt = [e])) : (Xt = e);
}
function js() {
  if (Xt) {
    var e = Xt,
      t = Gt;
    if (((Gt = Xt = null), tu(e), t)) for (e = 0; e < t.length; e++) tu(t[e]);
  }
}
function Os(e, t) {
  return e(t);
}
function Rs() {}
var Pl = !1;
function Is(e, t, n) {
  if (Pl) return e(t, n);
  Pl = !0;
  try {
    return Os(e, t, n);
  } finally {
    (Pl = !1), (Xt !== null || Gt !== null) && (Rs(), js());
  }
}
function Fn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = al(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var ci = !1;
if (Ke)
  try {
    var pn = {};
    Object.defineProperty(pn, "passive", {
      get: function () {
        ci = !0;
      },
    }),
      window.addEventListener("test", pn, pn),
      window.removeEventListener("test", pn, pn);
  } catch {
    ci = !1;
  }
function lf(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Pn = !1,
  Rr = null,
  Ir = !1,
  fi = null,
  of = {
    onError: function (e) {
      (Pn = !0), (Rr = e);
    },
  };
function uf(e, t, n, r, l, i, o, u, s) {
  (Pn = !1), (Rr = null), lf.apply(of, arguments);
}
function sf(e, t, n, r, l, i, o, u, s) {
  if ((uf.apply(this, arguments), Pn)) {
    if (Pn) {
      var c = Rr;
      (Pn = !1), (Rr = null);
    } else throw Error(y(198));
    Ir || ((Ir = !0), (fi = c));
  }
}
function jt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Fs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function nu(e) {
  if (jt(e) !== e) throw Error(y(188));
}
function af(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return nu(l), e;
        if (i === r) return nu(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function As(e) {
  return (e = af(e)), e !== null ? Us(e) : null;
}
function Us(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Us(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ws = we.unstable_scheduleCallback,
  ru = we.unstable_cancelCallback,
  cf = we.unstable_shouldYield,
  ff = we.unstable_requestPaint,
  K = we.unstable_now,
  df = we.unstable_getCurrentPriorityLevel,
  eo = we.unstable_ImmediatePriority,
  $s = we.unstable_UserBlockingPriority,
  Fr = we.unstable_NormalPriority,
  pf = we.unstable_LowPriority,
  Vs = we.unstable_IdlePriority,
  il = null,
  Ue = null;
function mf(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var je = Math.clz32 ? Math.clz32 : yf,
  hf = Math.log,
  vf = Math.LN2;
function yf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((hf(e) / vf) | 0)) | 0;
}
var ar = 64,
  cr = 4194304;
function xn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ar(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = xn(u)) : ((i &= o), i !== 0 && (r = xn(i)));
  } else (o = n & ~l), o !== 0 ? (r = xn(o)) : i !== 0 && (r = xn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - je(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function gf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - je(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = gf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function di(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Bs() {
  var e = ar;
  return (ar <<= 1), !(ar & 4194240) && (ar = 64), e;
}
function Nl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function bn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - je(t)),
    (e[t] = n);
}
function Sf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - je(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function to(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - je(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var O = 0;
function Hs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Qs,
  no,
  Ks,
  Ys,
  Xs,
  pi = !1,
  fr = [],
  lt = null,
  it = null,
  ot = null,
  An = new Map(),
  Un = new Map(),
  et = [],
  kf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function lu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lt = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ot = null;
      break;
    case "pointerover":
    case "pointerout":
      An.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Un.delete(t.pointerId);
  }
}
function mn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = tr(t)), t !== null && no(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Ef(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (lt = mn(lt, e, t, n, r, l)), !0;
    case "dragenter":
      return (it = mn(it, e, t, n, r, l)), !0;
    case "mouseover":
      return (ot = mn(ot, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return An.set(i, mn(An.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Un.set(i, mn(Un.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Gs(e) {
  var t = Et(e.target);
  if (t !== null) {
    var n = jt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Fs(n)), t !== null)) {
          (e.blockedOn = t),
            Xs(e.priority, function () {
              Ks(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (si = r), n.target.dispatchEvent(r), (si = null);
    } else return (t = tr(n)), t !== null && no(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function iu(e, t, n) {
  xr(e) && n.delete(t);
}
function Cf() {
  (pi = !1),
    lt !== null && xr(lt) && (lt = null),
    it !== null && xr(it) && (it = null),
    ot !== null && xr(ot) && (ot = null),
    An.forEach(iu),
    Un.forEach(iu);
}
function hn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pi ||
      ((pi = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, Cf)));
}
function Wn(e) {
  function t(l) {
    return hn(l, e);
  }
  if (0 < fr.length) {
    hn(fr[0], e);
    for (var n = 1; n < fr.length; n++) {
      var r = fr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    lt !== null && hn(lt, e),
      it !== null && hn(it, e),
      ot !== null && hn(ot, e),
      An.forEach(t),
      Un.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    Gs(n), n.blockedOn === null && et.shift();
}
var Zt = Ze.ReactCurrentBatchConfig,
  Ur = !0;
function xf(e, t, n, r) {
  var l = O,
    i = Zt.transition;
  Zt.transition = null;
  try {
    (O = 1), ro(e, t, n, r);
  } finally {
    (O = l), (Zt.transition = i);
  }
}
function _f(e, t, n, r) {
  var l = O,
    i = Zt.transition;
  Zt.transition = null;
  try {
    (O = 4), ro(e, t, n, r);
  } finally {
    (O = l), (Zt.transition = i);
  }
}
function ro(e, t, n, r) {
  if (Ur) {
    var l = mi(e, t, n, r);
    if (l === null) Al(e, t, r, Wr, n), lu(e, r);
    else if (Ef(l, e, t, n, r)) r.stopPropagation();
    else if ((lu(e, r), t & 4 && -1 < kf.indexOf(e))) {
      for (; l !== null; ) {
        var i = tr(l);
        if (
          (i !== null && Qs(i),
          (i = mi(e, t, n, r)),
          i === null && Al(e, t, r, Wr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Al(e, t, r, null, n);
  }
}
var Wr = null;
function mi(e, t, n, r) {
  if (((Wr = null), (e = bi(r)), (e = Et(e)), e !== null))
    if (((t = jt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Fs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Wr = e), null;
}
function Zs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (df()) {
        case eo:
          return 1;
        case $s:
          return 4;
        case Fr:
        case pf:
          return 16;
        case Vs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  lo = null,
  _r = null;
function Js() {
  if (_r) return _r;
  var e,
    t = lo,
    n = t.length,
    r,
    l = "value" in nt ? nt.value : nt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (_r = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Tr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function dr() {
  return !0;
}
function ou() {
  return !1;
}
function ke(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? dr
        : ou),
      (this.isPropagationStopped = ou),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = dr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = dr));
      },
      persist: function () {},
      isPersistent: dr,
    }),
    t
  );
}
var sn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  io = ke(sn),
  er = V({}, sn, { view: 0, detail: 0 }),
  Tf = ke(er),
  Dl,
  zl,
  vn,
  ol = V({}, er, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: oo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vn &&
            (vn && e.type === "mousemove"
              ? ((Dl = e.screenX - vn.screenX), (zl = e.screenY - vn.screenY))
              : (zl = Dl = 0),
            (vn = e)),
          Dl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : zl;
    },
  }),
  uu = ke(ol),
  Pf = V({}, ol, { dataTransfer: 0 }),
  Nf = ke(Pf),
  Df = V({}, er, { relatedTarget: 0 }),
  Ll = ke(Df),
  zf = V({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lf = ke(zf),
  Mf = V({}, sn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  jf = ke(Mf),
  Of = V({}, sn, { data: 0 }),
  su = ke(Of),
  Rf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  If = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ff = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Af(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ff[e]) ? !!t[e] : !1;
}
function oo() {
  return Af;
}
var Uf = V({}, er, {
    key: function (e) {
      if (e.key) {
        var t = Rf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Tr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? If[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: oo,
    charCode: function (e) {
      return e.type === "keypress" ? Tr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Tr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Wf = ke(Uf),
  $f = V({}, ol, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  au = ke($f),
  Vf = V({}, er, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oo,
  }),
  Bf = ke(Vf),
  Hf = V({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qf = ke(Hf),
  Kf = V({}, ol, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Yf = ke(Kf),
  Xf = [9, 13, 27, 32],
  uo = Ke && "CompositionEvent" in window,
  Nn = null;
Ke && "documentMode" in document && (Nn = document.documentMode);
var Gf = Ke && "TextEvent" in window && !Nn,
  qs = Ke && (!uo || (Nn && 8 < Nn && 11 >= Nn)),
  cu = " ",
  fu = !1;
function bs(e, t) {
  switch (e) {
    case "keyup":
      return Xf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ea(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ft = !1;
function Zf(e, t) {
  switch (e) {
    case "compositionend":
      return ea(t);
    case "keypress":
      return t.which !== 32 ? null : ((fu = !0), cu);
    case "textInput":
      return (e = t.data), e === cu && fu ? null : e;
    default:
      return null;
  }
}
function Jf(e, t) {
  if (Ft)
    return e === "compositionend" || (!uo && bs(e, t))
      ? ((e = Js()), (_r = lo = nt = null), (Ft = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return qs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var qf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function du(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!qf[e.type] : t === "textarea";
}
function ta(e, t, n, r) {
  Ms(r),
    (t = $r(t, "onChange")),
    0 < t.length &&
      ((n = new io("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Dn = null,
  $n = null;
function bf(e) {
  da(e, 0);
}
function ul(e) {
  var t = Wt(e);
  if (_s(t)) return e;
}
function ed(e, t) {
  if (e === "change") return t;
}
var na = !1;
if (Ke) {
  var Ml;
  if (Ke) {
    var jl = "oninput" in document;
    if (!jl) {
      var pu = document.createElement("div");
      pu.setAttribute("oninput", "return;"),
        (jl = typeof pu.oninput == "function");
    }
    Ml = jl;
  } else Ml = !1;
  na = Ml && (!document.documentMode || 9 < document.documentMode);
}
function mu() {
  Dn && (Dn.detachEvent("onpropertychange", ra), ($n = Dn = null));
}
function ra(e) {
  if (e.propertyName === "value" && ul($n)) {
    var t = [];
    ta(t, $n, e, bi(e)), Is(bf, t);
  }
}
function td(e, t, n) {
  e === "focusin"
    ? (mu(), (Dn = t), ($n = n), Dn.attachEvent("onpropertychange", ra))
    : e === "focusout" && mu();
}
function nd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ul($n);
}
function rd(e, t) {
  if (e === "click") return ul(t);
}
function ld(e, t) {
  if (e === "input" || e === "change") return ul(t);
}
function id(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Re = typeof Object.is == "function" ? Object.is : id;
function Vn(e, t) {
  if (Re(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Zl.call(t, l) || !Re(e[l], t[l])) return !1;
  }
  return !0;
}
function hu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function vu(e, t) {
  var n = hu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = hu(n);
  }
}
function la(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? la(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function ia() {
  for (var e = window, t = Or(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Or(e.document);
  }
  return t;
}
function so(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function od(e) {
  var t = ia(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    la(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && so(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = vu(n, i));
        var o = vu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ud = Ke && "documentMode" in document && 11 >= document.documentMode,
  At = null,
  hi = null,
  zn = null,
  vi = !1;
function yu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vi ||
    At == null ||
    At !== Or(r) ||
    ((r = At),
    "selectionStart" in r && so(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (zn && Vn(zn, r)) ||
      ((zn = r),
      (r = $r(hi, "onSelect")),
      0 < r.length &&
        ((t = new io("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = At))));
}
function pr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ut = {
    animationend: pr("Animation", "AnimationEnd"),
    animationiteration: pr("Animation", "AnimationIteration"),
    animationstart: pr("Animation", "AnimationStart"),
    transitionend: pr("Transition", "TransitionEnd"),
  },
  Ol = {},
  oa = {};
Ke &&
  ((oa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ut.animationend.animation,
    delete Ut.animationiteration.animation,
    delete Ut.animationstart.animation),
  "TransitionEvent" in window || delete Ut.transitionend.transition);
function sl(e) {
  if (Ol[e]) return Ol[e];
  if (!Ut[e]) return e;
  var t = Ut[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in oa) return (Ol[e] = t[n]);
  return e;
}
var ua = sl("animationend"),
  sa = sl("animationiteration"),
  aa = sl("animationstart"),
  ca = sl("transitionend"),
  fa = new Map(),
  gu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function ht(e, t) {
  fa.set(e, t), Mt(t, [e]);
}
for (var Rl = 0; Rl < gu.length; Rl++) {
  var Il = gu[Rl],
    sd = Il.toLowerCase(),
    ad = Il[0].toUpperCase() + Il.slice(1);
  ht(sd, "on" + ad);
}
ht(ua, "onAnimationEnd");
ht(sa, "onAnimationIteration");
ht(aa, "onAnimationStart");
ht("dblclick", "onDoubleClick");
ht("focusin", "onFocus");
ht("focusout", "onBlur");
ht(ca, "onTransitionEnd");
bt("onMouseEnter", ["mouseout", "mouseover"]);
bt("onMouseLeave", ["mouseout", "mouseover"]);
bt("onPointerEnter", ["pointerout", "pointerover"]);
bt("onPointerLeave", ["pointerout", "pointerover"]);
Mt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Mt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Mt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Mt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var _n =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  cd = new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));
function wu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), sf(r, t, void 0, e), (e.currentTarget = null);
}
function da(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          wu(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          wu(l, u, c), (i = s);
        }
    }
  }
  if (Ir) throw ((e = fi), (Ir = !1), (fi = null), e);
}
function I(e, t) {
  var n = t[ki];
  n === void 0 && (n = t[ki] = new Set());
  var r = e + "__bubble";
  n.has(r) || (pa(t, e, 2, !1), n.add(r));
}
function Fl(e, t, n) {
  var r = 0;
  t && (r |= 4), pa(n, e, r, t);
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);
function Bn(e) {
  if (!e[mr]) {
    (e[mr] = !0),
      Ss.forEach(function (n) {
        n !== "selectionchange" && (cd.has(n) || Fl(n, !1, e), Fl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mr] || ((t[mr] = !0), Fl("selectionchange", !1, t));
  }
}
function pa(e, t, n, r) {
  switch (Zs(t)) {
    case 1:
      var l = xf;
      break;
    case 4:
      l = _f;
      break;
    default:
      l = ro;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ci ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function Al(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Et(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Is(function () {
    var c = i,
      h = bi(n),
      m = [];
    e: {
      var p = fa.get(e);
      if (p !== void 0) {
        var g = io,
          S = e;
        switch (e) {
          case "keypress":
            if (Tr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Wf;
            break;
          case "focusin":
            (S = "focus"), (g = Ll);
            break;
          case "focusout":
            (S = "blur"), (g = Ll);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ll;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = uu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Nf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Bf;
            break;
          case ua:
          case sa:
          case aa:
            g = Lf;
            break;
          case ca:
            g = Qf;
            break;
          case "scroll":
            g = Tf;
            break;
          case "wheel":
            g = Yf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = jf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = au;
        }
        var w = (t & 4) !== 0,
          z = !w && e === "scroll",
          f = w ? (p !== null ? p + "Capture" : null) : p;
        w = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Fn(a, f)), v != null && w.push(Hn(a, v, d)))),
            z)
          )
            break;
          a = a.return;
        }
        0 < w.length &&
          ((p = new g(p, S, null, n, h)), m.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== si &&
            (S = n.relatedTarget || n.fromElement) &&
            (Et(S) || S[Ye]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          g
            ? ((S = n.relatedTarget || n.toElement),
              (g = c),
              (S = S ? Et(S) : null),
              S !== null &&
                ((z = jt(S)), S !== z || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((g = null), (S = c)),
          g !== S)
        ) {
          if (
            ((w = uu),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = au),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (z = g == null ? p : Wt(g)),
            (d = S == null ? p : Wt(S)),
            (p = new w(v, a + "leave", g, n, h)),
            (p.target = z),
            (p.relatedTarget = d),
            (v = null),
            Et(h) === c &&
              ((w = new w(f, a + "enter", S, n, h)),
              (w.target = d),
              (w.relatedTarget = z),
              (v = w)),
            (z = v),
            g && S)
          )
            t: {
              for (w = g, f = S, a = 0, d = w; d; d = Ot(d)) a++;
              for (d = 0, v = f; v; v = Ot(v)) d++;
              for (; 0 < a - d; ) (w = Ot(w)), a--;
              for (; 0 < d - a; ) (f = Ot(f)), d--;
              for (; a--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = Ot(w)), (f = Ot(f));
              }
              w = null;
            }
          else w = null;
          g !== null && Su(m, p, g, w, !1),
            S !== null && z !== null && Su(m, z, S, w, !0);
        }
      }
      e: {
        if (
          ((p = c ? Wt(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var E = ed;
        else if (du(p))
          if (na) E = ld;
          else {
            E = nd;
            var x = td;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = rd);
        if (E && (E = E(e, c))) {
          ta(m, E, n, h);
          break e;
        }
        x && x(e, p, c),
          e === "focusout" &&
            (x = p._wrapperState) &&
            x.controlled &&
            p.type === "number" &&
            ri(p, "number", p.value);
      }
      switch (((x = c ? Wt(c) : window), e)) {
        case "focusin":
          (du(x) || x.contentEditable === "true") &&
            ((At = x), (hi = c), (zn = null));
          break;
        case "focusout":
          zn = hi = At = null;
          break;
        case "mousedown":
          vi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (vi = !1), yu(m, n, h);
          break;
        case "selectionchange":
          if (ud) break;
        case "keydown":
        case "keyup":
          yu(m, n, h);
      }
      var _;
      if (uo)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Ft
          ? bs(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (qs &&
          n.locale !== "ko" &&
          (Ft || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Ft && (_ = Js())
            : ((nt = h),
              (lo = "value" in nt ? nt.value : nt.textContent),
              (Ft = !0))),
        (x = $r(c, T)),
        0 < x.length &&
          ((T = new su(T, e, null, n, h)),
          m.push({ event: T, listeners: x }),
          _ ? (T.data = _) : ((_ = ea(n)), _ !== null && (T.data = _)))),
        (_ = Gf ? Zf(e, n) : Jf(e, n)) &&
          ((c = $r(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new su("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = _)));
    }
    da(m, t);
  });
}
function Hn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $r(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Fn(e, n)),
      i != null && r.unshift(Hn(e, i, l)),
      (i = Fn(e, t)),
      i != null && r.push(Hn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ot(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Su(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Fn(n, i)), s != null && o.unshift(Hn(n, s, u)))
        : l || ((s = Fn(n, i)), s != null && o.push(Hn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var fd = /\r\n?/g,
  dd = /\u0000|\uFFFD/g;
function ku(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      fd,
      `
`,
    )
    .replace(dd, "");
}
function hr(e, t, n) {
  if (((t = ku(t)), ku(e) !== t && n)) throw Error(y(425));
}
function Vr() {}
var yi = null,
  gi = null;
function wi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Si = typeof setTimeout == "function" ? setTimeout : void 0,
  pd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Eu = typeof Promise == "function" ? Promise : void 0,
  md =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Eu < "u"
        ? function (e) {
            return Eu.resolve(null).then(e).catch(hd);
          }
        : Si;
function hd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ul(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Wn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Wn(t);
}
function ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Cu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var an = Math.random().toString(36).slice(2),
  Ae = "__reactFiber$" + an,
  Qn = "__reactProps$" + an,
  Ye = "__reactContainer$" + an,
  ki = "__reactEvents$" + an,
  vd = "__reactListeners$" + an,
  yd = "__reactHandles$" + an;
function Et(e) {
  var t = e[Ae];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Ae])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Cu(e); e !== null; ) {
          if ((n = e[Ae])) return n;
          e = Cu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function tr(e) {
  return (
    (e = e[Ae] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Wt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function al(e) {
  return e[Qn] || null;
}
var Ei = [],
  $t = -1;
function vt(e) {
  return { current: e };
}
function F(e) {
  0 > $t || ((e.current = Ei[$t]), (Ei[$t] = null), $t--);
}
function R(e, t) {
  $t++, (Ei[$t] = e.current), (e.current = t);
}
var pt = {},
  oe = vt(pt),
  pe = vt(!1),
  Pt = pt;
function en(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function me(e) {
  return (e = e.childContextTypes), e != null;
}
function Br() {
  F(pe), F(oe);
}
function xu(e, t, n) {
  if (oe.current !== pt) throw Error(y(168));
  R(oe, t), R(pe, n);
}
function ma(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, ef(e) || "Unknown", l));
  return V({}, n, r);
}
function Hr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pt),
    (Pt = oe.current),
    R(oe, e),
    R(pe, pe.current),
    !0
  );
}
function _u(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = ma(e, t, Pt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(pe),
      F(oe),
      R(oe, e))
    : F(pe),
    R(pe, n);
}
var Ve = null,
  cl = !1,
  Wl = !1;
function ha(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function gd(e) {
  (cl = !0), ha(e);
}
function yt() {
  if (!Wl && Ve !== null) {
    Wl = !0;
    var e = 0,
      t = O;
    try {
      var n = Ve;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (cl = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Ws(eo, yt), l);
    } finally {
      (O = t), (Wl = !1);
    }
  }
  return null;
}
var Vt = [],
  Bt = 0,
  Qr = null,
  Kr = 0,
  Ee = [],
  Ce = 0,
  Nt = null,
  Be = 1,
  He = "";
function St(e, t) {
  (Vt[Bt++] = Kr), (Vt[Bt++] = Qr), (Qr = e), (Kr = t);
}
function va(e, t, n) {
  (Ee[Ce++] = Be), (Ee[Ce++] = He), (Ee[Ce++] = Nt), (Nt = e);
  var r = Be;
  e = He;
  var l = 32 - je(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - je(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Be = (1 << (32 - je(t) + l)) | (n << l) | r),
      (He = i + e);
  } else (Be = (1 << i) | (n << l) | r), (He = e);
}
function ao(e) {
  e.return !== null && (St(e, 1), va(e, 1, 0));
}
function co(e) {
  for (; e === Qr; )
    (Qr = Vt[--Bt]), (Vt[Bt] = null), (Kr = Vt[--Bt]), (Vt[Bt] = null);
  for (; e === Nt; )
    (Nt = Ee[--Ce]),
      (Ee[Ce] = null),
      (He = Ee[--Ce]),
      (Ee[Ce] = null),
      (Be = Ee[--Ce]),
      (Ee[Ce] = null);
}
var ge = null,
  ye = null,
  U = !1,
  Me = null;
function ya(e, t) {
  var n = xe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Tu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ge = e), (ye = ut(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ge = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Nt !== null ? { id: Be, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = xe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ge = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ci(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xi(e) {
  if (U) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Tu(e, t)) {
        if (Ci(e)) throw Error(y(418));
        t = ut(n.nextSibling);
        var r = ge;
        t && Tu(e, t)
          ? ya(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ge = e));
      }
    } else {
      if (Ci(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ge = e);
    }
  }
}
function Pu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function vr(e) {
  if (e !== ge) return !1;
  if (!U) return Pu(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !wi(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Ci(e)) throw (ga(), Error(y(418)));
    for (; t; ) ya(e, t), (t = ut(t.nextSibling));
  }
  if ((Pu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = ge ? ut(e.stateNode.nextSibling) : null;
  return !0;
}
function ga() {
  for (var e = ye; e; ) e = ut(e.nextSibling);
}
function tn() {
  (ye = ge = null), (U = !1);
}
function fo(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
var wd = Ze.ReactCurrentBatchConfig;
function yn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function yr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Nu(e) {
  var t = e._init;
  return t(e._payload);
}
function wa(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = ft(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = Yl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === It
      ? h(f, a, d.props.children, v, d.key)
      : a !== null &&
          (a.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === qe &&
              Nu(E) === a.type))
        ? ((v = l(a, d.props)), (v.ref = yn(f, a, d)), (v.return = f), v)
        : ((v = jr(d.type, d.key, d.props, null, f.mode, v)),
          (v.ref = yn(f, a, d)),
          (v.return = f),
          v);
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Xl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function h(f, a, d, v, E) {
    return a === null || a.tag !== 7
      ? ((a = Tt(d, f.mode, v, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Yl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case or:
          return (
            (d = jr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = yn(f, null, a)),
            (d.return = f),
            d
          );
        case Rt:
          return (a = Xl(a, f.mode, d)), (a.return = f), a;
        case qe:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (Cn(a) || dn(a))
        return (a = Tt(a, f.mode, d, null)), (a.return = f), a;
      yr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case or:
          return d.key === E ? s(f, a, d, v) : null;
        case Rt:
          return d.key === E ? c(f, a, d, v) : null;
        case qe:
          return (E = d._init), p(f, a, E(d._payload), v);
      }
      if (Cn(d) || dn(d)) return E !== null ? null : h(f, a, d, v, null);
      yr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(d) || null), u(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case or:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, E);
        case Rt:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, E);
        case qe:
          var x = v._init;
          return g(f, a, d, x(v._payload), E);
      }
      if (Cn(v) || dn(v)) return (f = f.get(d) || null), h(a, f, v, E, null);
      yr(a, v);
    }
    return null;
  }
  function S(f, a, d, v) {
    for (
      var E = null, x = null, _ = a, T = (a = 0), H = null;
      _ !== null && T < d.length;
      T++
    ) {
      _.index > T ? ((H = _), (_ = null)) : (H = _.sibling);
      var M = p(f, _, d[T], v);
      if (M === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && M.alternate === null && t(f, _),
        (a = i(M, a, T)),
        x === null ? (E = M) : (x.sibling = M),
        (x = M),
        (_ = H);
    }
    if (T === d.length) return n(f, _), U && St(f, T), E;
    if (_ === null) {
      for (; T < d.length; T++)
        (_ = m(f, d[T], v)),
          _ !== null &&
            ((a = i(_, a, T)), x === null ? (E = _) : (x.sibling = _), (x = _));
      return U && St(f, T), E;
    }
    for (_ = r(f, _); T < d.length; T++)
      (H = g(_, f, T, d[T], v)),
        H !== null &&
          (e && H.alternate !== null && _.delete(H.key === null ? T : H.key),
          (a = i(H, a, T)),
          x === null ? (E = H) : (x.sibling = H),
          (x = H));
    return (
      e &&
        _.forEach(function (Ne) {
          return t(f, Ne);
        }),
      U && St(f, T),
      E
    );
  }
  function w(f, a, d, v) {
    var E = dn(d);
    if (typeof E != "function") throw Error(y(150));
    if (((d = E.call(d)), d == null)) throw Error(y(151));
    for (
      var x = (E = null), _ = a, T = (a = 0), H = null, M = d.next();
      _ !== null && !M.done;
      T++, M = d.next()
    ) {
      _.index > T ? ((H = _), (_ = null)) : (H = _.sibling);
      var Ne = p(f, _, M.value, v);
      if (Ne === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && Ne.alternate === null && t(f, _),
        (a = i(Ne, a, T)),
        x === null ? (E = Ne) : (x.sibling = Ne),
        (x = Ne),
        (_ = H);
    }
    if (M.done) return n(f, _), U && St(f, T), E;
    if (_ === null) {
      for (; !M.done; T++, M = d.next())
        (M = m(f, M.value, v)),
          M !== null &&
            ((a = i(M, a, T)), x === null ? (E = M) : (x.sibling = M), (x = M));
      return U && St(f, T), E;
    }
    for (_ = r(f, _); !M.done; T++, M = d.next())
      (M = g(_, f, T, M.value, v)),
        M !== null &&
          (e && M.alternate !== null && _.delete(M.key === null ? T : M.key),
          (a = i(M, a, T)),
          x === null ? (E = M) : (x.sibling = M),
          (x = M));
    return (
      e &&
        _.forEach(function (cn) {
          return t(f, cn);
        }),
      U && St(f, T),
      E
    );
  }
  function z(f, a, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === It &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case or:
          e: {
            for (var E = d.key, x = a; x !== null; ) {
              if (x.key === E) {
                if (((E = d.type), E === It)) {
                  if (x.tag === 7) {
                    n(f, x.sibling),
                      (a = l(x, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  x.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === qe &&
                    Nu(E) === x.type)
                ) {
                  n(f, x.sibling),
                    (a = l(x, d.props)),
                    (a.ref = yn(f, x, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, x);
                break;
              } else t(f, x);
              x = x.sibling;
            }
            d.type === It
              ? ((a = Tt(d.props.children, f.mode, v, d.key)),
                (a.return = f),
                (f = a))
              : ((v = jr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = yn(f, a, d)),
                (v.return = f),
                (f = v));
          }
          return o(f);
        case Rt:
          e: {
            for (x = d.key; a !== null; ) {
              if (a.key === x)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Xl(d, f.mode, v)), (a.return = f), (f = a);
          }
          return o(f);
        case qe:
          return (x = d._init), z(f, a, x(d._payload), v);
      }
      if (Cn(d)) return S(f, a, d, v);
      if (dn(d)) return w(f, a, d, v);
      yr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Yl(d, f.mode, v)), (a.return = f), (f = a)),
        o(f))
      : n(f, a);
  }
  return z;
}
var nn = wa(!0),
  Sa = wa(!1),
  Yr = vt(null),
  Xr = null,
  Ht = null,
  po = null;
function mo() {
  po = Ht = Xr = null;
}
function ho(e) {
  var t = Yr.current;
  F(Yr), (e._currentValue = t);
}
function _i(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jt(e, t) {
  (Xr = e),
    (po = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function Te(e) {
  var t = e._currentValue;
  if (po !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (Xr === null) throw Error(y(308));
      (Ht = e), (Xr.dependencies = { lanes: 0, firstContext: e });
    } else Ht = Ht.next = e;
  return t;
}
var Ct = null;
function vo(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function ka(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), vo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function yo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ea(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function st(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), j & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), vo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Pr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), to(e, n);
  }
}
function Du(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Gr(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (h = c = s = null), (u = i);
    do {
      var p = u.lane,
        g = u.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            w = u;
          switch (((p = t), (g = n), w.tag)) {
            case 1:
              if (((S = w.payload), typeof S == "function")) {
                m = S.call(g, m, p);
                break e;
              }
              m = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = w.payload),
                (p = typeof S == "function" ? S.call(g, m, p) : S),
                p == null)
              )
                break e;
              m = V({}, m, p);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = g), (s = m)) : (h = h.next = g),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (zt |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function zu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var nr = {},
  We = vt(nr),
  Kn = vt(nr),
  Yn = vt(nr);
function xt(e) {
  if (e === nr) throw Error(y(174));
  return e;
}
function go(e, t) {
  switch ((R(Yn, t), R(Kn, e), R(We, nr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ii(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ii(t, e));
  }
  F(We), R(We, t);
}
function rn() {
  F(We), F(Kn), F(Yn);
}
function Ca(e) {
  xt(Yn.current);
  var t = xt(We.current),
    n = ii(t, e.type);
  t !== n && (R(Kn, e), R(We, n));
}
function wo(e) {
  Kn.current === e && (F(We), F(Kn));
}
var W = vt(0);
function Zr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var $l = [];
function So() {
  for (var e = 0; e < $l.length; e++)
    $l[e]._workInProgressVersionPrimary = null;
  $l.length = 0;
}
var Nr = Ze.ReactCurrentDispatcher,
  Vl = Ze.ReactCurrentBatchConfig,
  Dt = 0,
  $ = null,
  X = null,
  J = null,
  Jr = !1,
  Ln = !1,
  Xn = 0,
  Sd = 0;
function re() {
  throw Error(y(321));
}
function ko(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Re(e[n], t[n])) return !1;
  return !0;
}
function Eo(e, t, n, r, l, i) {
  if (
    ((Dt = i),
    ($ = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Nr.current = e === null || e.memoizedState === null ? xd : _d),
    (e = n(r, l)),
    Ln)
  ) {
    i = 0;
    do {
      if (((Ln = !1), (Xn = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (J = X = null),
        (t.updateQueue = null),
        (Nr.current = Td),
        (e = n(r, l));
    } while (Ln);
  }
  if (
    ((Nr.current = qr),
    (t = X !== null && X.next !== null),
    (Dt = 0),
    (J = X = $ = null),
    (Jr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Co() {
  var e = Xn !== 0;
  return (Xn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? ($.memoizedState = J = e) : (J = J.next = e), J;
}
function Pe() {
  if (X === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? $.memoizedState : J.next;
  if (t !== null) (J = t), (X = e);
  else {
    if (e === null) throw Error(y(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      J === null ? ($.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Gn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bl(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var h = c.lane;
      if ((Dt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (o = r)) : (s = s.next = m),
          ($.lanes |= h),
          (zt |= h);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      Re(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), ($.lanes |= i), (zt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Hl(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Re(i, t.memoizedState) || (de = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function xa() {}
function _a(e, t) {
  var n = $,
    r = Pe(),
    l = t(),
    i = !Re(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    xo(Na.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Zn(9, Pa.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(y(349));
    Dt & 30 || Ta(n, t, l);
  }
  return l;
}
function Ta(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Pa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Da(t) && za(e);
}
function Na(e, t, n) {
  return n(function () {
    Da(t) && za(e);
  });
}
function Da(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Re(e, n);
  } catch {
    return !0;
  }
}
function za(e) {
  var t = Xe(e, 1);
  t !== null && Oe(t, e, 1, -1);
}
function Lu(e) {
  var t = Fe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Cd.bind(null, $, e)),
    [t.memoizedState, e]
  );
}
function Zn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function La() {
  return Pe().memoizedState;
}
function Dr(e, t, n, r) {
  var l = Fe();
  ($.flags |= e),
    (l.memoizedState = Zn(1 | t, n, void 0, r === void 0 ? null : r));
}
function fl(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && ko(r, o.deps))) {
      l.memoizedState = Zn(t, n, i, r);
      return;
    }
  }
  ($.flags |= e), (l.memoizedState = Zn(1 | t, n, i, r));
}
function Mu(e, t) {
  return Dr(8390656, 8, e, t);
}
function xo(e, t) {
  return fl(2048, 8, e, t);
}
function Ma(e, t) {
  return fl(4, 2, e, t);
}
function ja(e, t) {
  return fl(4, 4, e, t);
}
function Oa(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ra(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), fl(4, 4, Oa.bind(null, t, e), n)
  );
}
function _o() {}
function Ia(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ko(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Fa(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ko(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Aa(e, t, n) {
  return Dt & 21
    ? (Re(n, t) || ((n = Bs()), ($.lanes |= n), (zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function kd(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Vl.transition;
  Vl.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (Vl.transition = r);
  }
}
function Ua() {
  return Pe().memoizedState;
}
function Ed(e, t, n) {
  var r = ct(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Wa(e))
  )
    $a(t, n);
  else if (((n = ka(e, t, n, r)), n !== null)) {
    var l = se();
    Oe(n, e, r, l), Va(n, t, r);
  }
}
function Cd(e, t, n) {
  var r = ct(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wa(e)) $a(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Re(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), vo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ka(e, t, l, r)),
      n !== null && ((l = se()), Oe(n, e, r, l), Va(n, t, r));
  }
}
function Wa(e) {
  var t = e.alternate;
  return e === $ || (t !== null && t === $);
}
function $a(e, t) {
  Ln = Jr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Va(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), to(e, n);
  }
}
var qr = {
    readContext: Te,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  xd = {
    readContext: Te,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Te,
    useEffect: Mu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Dr(4194308, 4, Oa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Dr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Dr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ed.bind(null, $, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Lu,
    useDebugValue: _o,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = Lu(!1),
        t = e[0];
      return (e = kd.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = $,
        l = Fe();
      if (U) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(y(349));
        Dt & 30 || Ta(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Mu(Na.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Zn(9, Pa.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = q.identifierPrefix;
      if (U) {
        var n = He,
          r = Be;
        (n = (r & ~(1 << (32 - je(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Sd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _d = {
    readContext: Te,
    useCallback: Ia,
    useContext: Te,
    useEffect: xo,
    useImperativeHandle: Ra,
    useInsertionEffect: Ma,
    useLayoutEffect: ja,
    useMemo: Fa,
    useReducer: Bl,
    useRef: La,
    useState: function () {
      return Bl(Gn);
    },
    useDebugValue: _o,
    useDeferredValue: function (e) {
      var t = Pe();
      return Aa(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Gn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: xa,
    useSyncExternalStore: _a,
    useId: Ua,
    unstable_isNewReconciler: !1,
  },
  Td = {
    readContext: Te,
    useCallback: Ia,
    useContext: Te,
    useEffect: xo,
    useImperativeHandle: Ra,
    useInsertionEffect: Ma,
    useLayoutEffect: ja,
    useMemo: Fa,
    useReducer: Hl,
    useRef: La,
    useState: function () {
      return Hl(Gn);
    },
    useDebugValue: _o,
    useDeferredValue: function (e) {
      var t = Pe();
      return X === null ? (t.memoizedState = e) : Aa(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl(Gn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: xa,
    useSyncExternalStore: _a,
    useId: Ua,
    unstable_isNewReconciler: !1,
  };
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ti(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var dl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ct(e),
      i = Qe(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = st(e, i, l)),
      t !== null && (Oe(t, e, l, r), Pr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ct(e),
      i = Qe(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = st(e, i, l)),
      t !== null && (Oe(t, e, l, r), Pr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = ct(e),
      l = Qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = st(e, l, r)),
      t !== null && (Oe(t, e, r, n), Pr(t, e, r));
  },
};
function ju(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Vn(n, r) || !Vn(l, i)
        : !0
  );
}
function Ba(e, t, n) {
  var r = !1,
    l = pt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Te(i))
      : ((l = me(t) ? Pt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? en(e, l) : pt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = dl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ou(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && dl.enqueueReplaceState(t, t.state, null);
}
function Pi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), yo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Te(i))
    : ((i = me(t) ? Pt : oe.current), (l.context = en(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ti(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && dl.enqueueReplaceState(l, l.state, null),
      Gr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ln(e, t) {
  try {
    var n = "",
      r = t;
    do (n += bc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ni(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Pd = typeof WeakMap == "function" ? WeakMap : Map;
function Ha(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      el || ((el = !0), (Ai = r)), Ni(e, t);
    }),
    n
  );
}
function Qa(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ni(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ni(e, t),
          typeof r != "function" &&
            (at === null ? (at = new Set([this])) : at.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Ru(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Pd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = $d.bind(null, e, t, n)), t.then(e, e));
}
function Iu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Fu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), st(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Nd = Ze.ReactCurrentOwner,
  de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Sa(t, null, n, r) : nn(t, e.child, n, r);
}
function Au(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Jt(t, l),
    (r = Eo(e, t, n, r, i, l)),
    (n = Co()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (U && n && ao(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function Uu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !jo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ka(e, t, i, r, l))
      : ((e = jr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Vn), n(o, r) && e.ref === t.ref)
    )
      return Ge(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ft(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ka(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Vn(i, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), Ge(e, t, l);
  }
  return Di(e, t, n, r, l);
}
function Ya(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        R(Kt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          R(Kt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        R(Kt, ve),
        (ve |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      R(Kt, ve),
      (ve |= r);
  return ue(e, t, l, n), t.child;
}
function Xa(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Di(e, t, n, r, l) {
  var i = me(n) ? Pt : oe.current;
  return (
    (i = en(t, i)),
    Jt(t, l),
    (n = Eo(e, t, n, r, i, l)),
    (r = Co()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (U && r && ao(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function Wu(e, t, n, r, l) {
  if (me(n)) {
    var i = !0;
    Hr(t);
  } else i = !1;
  if ((Jt(t, l), t.stateNode === null))
    zr(e, t), Ba(t, n, r), Pi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Te(c))
      : ((c = me(n) ? Pt : oe.current), (c = en(t, c)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Ou(t, o, r, c)),
      (be = !1);
    var p = t.memoizedState;
    (o.state = p),
      Gr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || p !== s || pe.current || be
        ? (typeof h == "function" && (Ti(t, n, h, r), (s = t.memoizedState)),
          (u = be || ju(t, n, u, r, p, s, c))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Ea(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : ze(t.type, u)),
      (o.props = c),
      (m = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Te(s))
        : ((s = me(n) ? Pt : oe.current), (s = en(t, s)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== m || p !== s) && Ou(t, o, r, s)),
      (be = !1),
      (p = t.memoizedState),
      (o.state = p),
      Gr(t, r, o, l);
    var S = t.memoizedState;
    u !== m || p !== S || pe.current || be
      ? (typeof g == "function" && (Ti(t, n, g, r), (S = t.memoizedState)),
        (c = be || ju(t, n, c, r, p, S, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, S, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, S, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (o.props = r),
        (o.state = S),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return zi(e, t, n, r, i, l);
}
function zi(e, t, n, r, l, i) {
  Xa(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && _u(t, n, !1), Ge(e, t, i);
  (r = t.stateNode), (Nd.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = nn(t, e.child, null, i)), (t.child = nn(t, null, u, i)))
      : ue(e, t, u, i),
    (t.memoizedState = r.state),
    l && _u(t, n, !0),
    t.child
  );
}
function Ga(e) {
  var t = e.stateNode;
  t.pendingContext
    ? xu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && xu(e, t.context, !1),
    go(e, t.containerInfo);
}
function $u(e, t, n, r, l) {
  return tn(), fo(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Li = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Za(e, t, n) {
  var r = t.pendingProps,
    l = W.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    R(W, l & 1),
    e === null)
  )
    return (
      xi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = hl(o, r, 0, null)),
              (e = Tt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Mi(n)),
              (t.memoizedState = Li),
              e)
            : To(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Dd(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ft(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = ft(u, i)) : ((i = Tt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Mi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Li),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ft(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function To(e, t) {
  return (
    (t = hl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gr(e, t, n, r) {
  return (
    r !== null && fo(r),
    nn(t, e.child, null, n),
    (e = To(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Dd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ql(Error(y(422)))), gr(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = hl({ mode: "visible", children: r.children }, l, 0, null)),
          (i = Tt(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && nn(t, e.child, null, o),
          (t.child.memoizedState = Mi(o)),
          (t.memoizedState = Li),
          i);
  if (!(t.mode & 1)) return gr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Ql(i, r, void 0)), gr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), de || u)) {
    if (((r = q), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Xe(e, l), Oe(r, e, l, -1));
    }
    return Mo(), (r = Ql(Error(y(421)))), gr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Vd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ye = ut(l.nextSibling)),
      (ge = t),
      (U = !0),
      (Me = null),
      e !== null &&
        ((Ee[Ce++] = Be),
        (Ee[Ce++] = He),
        (Ee[Ce++] = Nt),
        (Be = e.id),
        (He = e.overflow),
        (Nt = t)),
      (t = To(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Vu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _i(e.return, t, n);
}
function Kl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Ja(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ue(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vu(e, n, t);
        else if (e.tag === 19) Vu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((R(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Zr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Kl(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Zr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Kl(t, !0, n, null, i);
        break;
      case "together":
        Kl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ft(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ft(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function zd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ga(t), tn();
      break;
    case 5:
      Ca(t);
      break;
    case 1:
      me(t.type) && Hr(t);
      break;
    case 4:
      go(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      R(Yr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (R(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Za(e, t, n)
            : (R(W, W.current & 1),
              (e = Ge(e, t, n)),
              e !== null ? e.sibling : null);
      R(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ja(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        R(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ya(e, t, n);
  }
  return Ge(e, t, n);
}
var qa, ji, ba, ec;
qa = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ji = function () {};
ba = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), xt(We.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ti(e, l)), (r = ti(e, r)), (i = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = li(e, l)), (r = li(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Vr);
    }
    oi(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Rn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (i = i || []).push(c, "" + s)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Rn.hasOwnProperty(c)
                  ? (s != null && c === "onScroll" && I("scroll", e),
                    i || u === s || (i = []))
                  : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ec = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ld(e, t, n) {
  var r = t.pendingProps;
  switch ((co(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return me(t.type) && Br(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        rn(),
        F(pe),
        F(oe),
        So(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Me !== null && ($i(Me), (Me = null)))),
        ji(e, t),
        le(t),
        null
      );
    case 5:
      wo(t);
      var l = xt(Yn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ba(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return le(t), null;
        }
        if (((e = xt(We.current)), vr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ae] = t), (r[Qn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              I("cancel", r), I("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < _n.length; l++) I(_n[l], r);
              break;
            case "source":
              I("error", r);
              break;
            case "img":
            case "image":
            case "link":
              I("error", r), I("load", r);
              break;
            case "details":
              I("toggle", r);
              break;
            case "input":
              Jo(r, i), I("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                I("invalid", r);
              break;
            case "textarea":
              bo(r, i), I("invalid", r);
          }
          oi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      hr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      hr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Rn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  I("scroll", r);
            }
          switch (n) {
            case "input":
              ur(r), qo(r, i, !0);
              break;
            case "textarea":
              ur(r), eu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Vr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ns(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ae] = t),
            (e[Qn] = r),
            qa(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ui(n, r)), n)) {
              case "dialog":
                I("cancel", e), I("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                I("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < _n.length; l++) I(_n[l], e);
                l = r;
                break;
              case "source":
                I("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                I("error", e), I("load", e), (l = r);
                break;
              case "details":
                I("toggle", e), (l = r);
                break;
              case "input":
                Jo(e, r), (l = ti(e, r)), I("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  I("invalid", e);
                break;
              case "textarea":
                bo(e, r), (l = li(e, r)), I("invalid", e);
                break;
              default:
                l = r;
            }
            oi(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Ls(e, s)
                  : i === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Ds(e, s))
                    : i === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && In(e, s)
                        : typeof s == "number" && In(e, "" + s)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Rn.hasOwnProperty(i)
                          ? s != null && i === "onScroll" && I("scroll", e)
                          : s != null && Gi(e, i, s, o));
              }
            switch (n) {
              case "input":
                ur(e), qo(e, r, !1);
                break;
              case "textarea":
                ur(e), eu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Yt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Yt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Vr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) ec(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = xt(Yn.current)), xt(We.current), vr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ae] = t),
            (i = r.nodeValue !== n) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ae] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (F(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ye !== null && t.mode & 1 && !(t.flags & 128))
          ga(), tn(), (t.flags |= 98560), (i = !1);
        else if (((i = vr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Ae] = t;
          } else
            tn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else Me !== null && ($i(Me), (Me = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? G === 0 && (G = 3) : Mo())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        rn(), ji(e, t), e === null && Bn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return ho(t.type._context), le(t), null;
    case 17:
      return me(t.type) && Br(), le(t), null;
    case 19:
      if ((F(W), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) gn(i, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Zr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    gn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return R(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > on &&
            ((t.flags |= 128), (r = !0), gn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Zr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
            )
              return le(t), null;
          } else
            2 * K() - i.renderingStartTime > on &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = W.current),
          R(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Lo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Md(e, t) {
  switch ((co(t), t.tag)) {
    case 1:
      return (
        me(t.type) && Br(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        rn(),
        F(pe),
        F(oe),
        So(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return wo(t), null;
    case 13:
      if ((F(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        tn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F(W), null;
    case 4:
      return rn(), null;
    case 10:
      return ho(t.type._context), null;
    case 22:
    case 23:
      return Lo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wr = !1,
  ie = !1,
  jd = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function Qt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        B(e, t, r);
      }
    else n.current = null;
}
function Oi(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var Bu = !1;
function Od(e, t) {
  if (((yi = Ur), (e = ia()), so(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (g = m.firstChild) !== null;

            )
              (p = m), (m = g);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++c === l && (u = o),
                p === i && ++h === r && (s = o),
                (g = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (gi = { focusedElem: e, selectionRange: n }, Ur = !1, k = t; k !== null; )
    if (((t = k), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (k = e);
    else
      for (; k !== null; ) {
        t = k;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var w = S.memoizedProps,
                    z = S.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : ze(t.type, w),
                      z,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          B(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (k = e);
          break;
        }
        k = t.return;
      }
  return (S = Bu), (Bu = !1), S;
}
function Mn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Oi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function pl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ri(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function tc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), tc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ae], delete t[Qn], delete t[ki], delete t[vd], delete t[yd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function nc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || nc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ii(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Vr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ii(e, t, n), e = e.sibling; e !== null; ) Ii(e, t, n), (e = e.sibling);
}
function Fi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fi(e, t, n), e = e.sibling; e !== null; ) Fi(e, t, n), (e = e.sibling);
}
var b = null,
  Le = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) rc(e, t, n), (n = n.sibling);
}
function rc(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(il, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Qt(n, t);
    case 6:
      var r = b,
        l = Le;
      (b = null),
        Je(e, t, n),
        (b = r),
        (Le = l),
        b !== null &&
          (Le
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (Le
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ul(e.parentNode, n)
              : e.nodeType === 1 && Ul(e, n),
            Wn(e))
          : Ul(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = Le),
        (b = n.stateNode.containerInfo),
        (Le = !0),
        Je(e, t, n),
        (b = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Oi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Qt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          B(n, t, u);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), Je(e, t, n), (ie = r))
        : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function Qu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jd()),
      t.forEach(function (r) {
        var l = Bd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function De(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (Le = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (Le = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(y(160));
        rc(i, o, l), (b = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        B(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) lc(t, e), (t = t.sibling);
}
function lc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((De(t, e), Ie(e), r & 4)) {
        try {
          Mn(3, e, e.return), pl(3, e);
        } catch (w) {
          B(e, e.return, w);
        }
        try {
          Mn(5, e, e.return);
        } catch (w) {
          B(e, e.return, w);
        }
      }
      break;
    case 1:
      De(t, e), Ie(e), r & 512 && n !== null && Qt(n, n.return);
      break;
    case 5:
      if (
        (De(t, e),
        Ie(e),
        r & 512 && n !== null && Qt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          In(l, "");
        } catch (w) {
          B(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && Ts(l, i),
              ui(u, o);
            var c = ui(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                m = s[o + 1];
              h === "style"
                ? Ls(l, m)
                : h === "dangerouslySetInnerHTML"
                  ? Ds(l, m)
                  : h === "children"
                    ? In(l, m)
                    : Gi(l, h, m, c);
            }
            switch (u) {
              case "input":
                ni(l, i);
                break;
              case "textarea":
                Ps(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Yt(l, !!i.multiple, g, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Yt(l, !!i.multiple, i.defaultValue, !0)
                      : Yt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Qn] = i;
          } catch (w) {
            B(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((De(t, e), Ie(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          B(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (De(t, e), Ie(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wn(t.containerInfo);
        } catch (w) {
          B(e, e.return, w);
        }
      break;
    case 4:
      De(t, e), Ie(e);
      break;
    case 13:
      De(t, e),
        Ie(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Do = K())),
        r & 4 && Qu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (c = ie) || h), De(t, e), (ie = c)) : De(t, e),
        Ie(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (k = e, h = e.child; h !== null; ) {
            for (m = k = h; k !== null; ) {
              switch (((p = k), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mn(4, p, p.return);
                  break;
                case 1:
                  Qt(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (w) {
                      B(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Qt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Yu(m);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (k = g)) : Yu(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = zs("display", o)));
              } catch (w) {
                B(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (w) {
                B(e, e.return, w);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      De(t, e), Ie(e), r & 4 && Qu(e);
      break;
    case 21:
      break;
    default:
      De(t, e), Ie(e);
  }
}
function Ie(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (nc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (In(l, ""), (r.flags &= -33));
          var i = Hu(e);
          Fi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Hu(e);
          Ii(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Rd(e, t, n) {
  (k = e), ic(e);
}
function ic(e, t, n) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || wr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = wr;
        var c = ie;
        if (((wr = o), (ie = s) && !c))
          for (k = l; k !== null; )
            (o = k),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Xu(l)
                : s !== null
                  ? ((s.return = o), (k = s))
                  : Xu(l);
        for (; i !== null; ) (k = i), ic(i), (i = i.sibling);
        (k = l), (wr = u), (ie = c);
      }
      Ku(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (k = i)) : Ku(e);
  }
}
function Ku(e) {
  for (; k !== null; ) {
    var t = k;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && zu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                zu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Wn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        ie || (t.flags & 512 && Ri(t));
      } catch (p) {
        B(t, t.return, p);
      }
    }
    if (t === e) {
      k = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function Yu(e) {
  for (; k !== null; ) {
    var t = k;
    if (t === e) {
      k = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function Xu(e) {
  for (; k !== null; ) {
    var t = k;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            pl(4, t);
          } catch (s) {
            B(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(t, l, s);
            }
          }
          var i = t.return;
          try {
            Ri(t);
          } catch (s) {
            B(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ri(t);
          } catch (s) {
            B(t, o, s);
          }
      }
    } catch (s) {
      B(t, t.return, s);
    }
    if (t === e) {
      k = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (k = u);
      break;
    }
    k = t.return;
  }
}
var Id = Math.ceil,
  br = Ze.ReactCurrentDispatcher,
  Po = Ze.ReactCurrentOwner,
  _e = Ze.ReactCurrentBatchConfig,
  j = 0,
  q = null,
  Y = null,
  ee = 0,
  ve = 0,
  Kt = vt(0),
  G = 0,
  Jn = null,
  zt = 0,
  ml = 0,
  No = 0,
  jn = null,
  fe = null,
  Do = 0,
  on = 1 / 0,
  $e = null,
  el = !1,
  Ai = null,
  at = null,
  Sr = !1,
  rt = null,
  tl = 0,
  On = 0,
  Ui = null,
  Lr = -1,
  Mr = 0;
function se() {
  return j & 6 ? K() : Lr !== -1 ? Lr : (Lr = K());
}
function ct(e) {
  return e.mode & 1
    ? j & 2 && ee !== 0
      ? ee & -ee
      : wd.transition !== null
        ? (Mr === 0 && (Mr = Bs()), Mr)
        : ((e = O),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Zs(e.type))),
          e)
    : 1;
}
function Oe(e, t, n, r) {
  if (50 < On) throw ((On = 0), (Ui = null), Error(y(185)));
  bn(e, n, r),
    (!(j & 2) || e !== q) &&
      (e === q && (!(j & 2) && (ml |= n), G === 4 && tt(e, ee)),
      he(e, r),
      n === 1 && j === 0 && !(t.mode & 1) && ((on = K() + 500), cl && yt()));
}
function he(e, t) {
  var n = e.callbackNode;
  wf(e, t);
  var r = Ar(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && ru(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ru(n), t === 1))
      e.tag === 0 ? gd(Gu.bind(null, e)) : ha(Gu.bind(null, e)),
        md(function () {
          !(j & 6) && yt();
        }),
        (n = null);
    else {
      switch (Hs(r)) {
        case 1:
          n = eo;
          break;
        case 4:
          n = $s;
          break;
        case 16:
          n = Fr;
          break;
        case 536870912:
          n = Vs;
          break;
        default:
          n = Fr;
      }
      n = pc(n, oc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function oc(e, t) {
  if (((Lr = -1), (Mr = 0), j & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (qt() && e.callbackNode !== n) return null;
  var r = Ar(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = nl(e, r);
  else {
    t = r;
    var l = j;
    j |= 2;
    var i = sc();
    (q !== e || ee !== t) && (($e = null), (on = K() + 500), _t(e, t));
    do
      try {
        Ud();
        break;
      } catch (u) {
        uc(e, u);
      }
    while (!0);
    mo(),
      (br.current = i),
      (j = l),
      Y !== null ? (t = 0) : ((q = null), (ee = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = di(e)), l !== 0 && ((r = l), (t = Wi(e, l)))), t === 1)
    )
      throw ((n = Jn), _t(e, 0), tt(e, r), he(e, K()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Fd(l) &&
          ((t = nl(e, r)),
          t === 2 && ((i = di(e)), i !== 0 && ((r = i), (t = Wi(e, i)))),
          t === 1))
      )
        throw ((n = Jn), _t(e, 0), tt(e, r), he(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          kt(e, fe, $e);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = Do + 500 - K()), 10 < t))
          ) {
            if (Ar(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Si(kt.bind(null, e, fe, $e), t);
            break;
          }
          kt(e, fe, $e);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - je(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Id(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Si(kt.bind(null, e, fe, $e), r);
            break;
          }
          kt(e, fe, $e);
          break;
        case 5:
          kt(e, fe, $e);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return he(e, K()), e.callbackNode === n ? oc.bind(null, e) : null;
}
function Wi(e, t) {
  var n = jn;
  return (
    e.current.memoizedState.isDehydrated && (_t(e, t).flags |= 256),
    (e = nl(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && $i(t)),
    e
  );
}
function $i(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function Fd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Re(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tt(e, t) {
  for (
    t &= ~No,
      t &= ~ml,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - je(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Gu(e) {
  if (j & 6) throw Error(y(327));
  qt();
  var t = Ar(e, 0);
  if (!(t & 1)) return he(e, K()), null;
  var n = nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = di(e);
    r !== 0 && ((t = r), (n = Wi(e, r)));
  }
  if (n === 1) throw ((n = Jn), _t(e, 0), tt(e, t), he(e, K()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kt(e, fe, $e),
    he(e, K()),
    null
  );
}
function zo(e, t) {
  var n = j;
  j |= 1;
  try {
    return e(t);
  } finally {
    (j = n), j === 0 && ((on = K() + 500), cl && yt());
  }
}
function Lt(e) {
  rt !== null && rt.tag === 0 && !(j & 6) && qt();
  var t = j;
  j |= 1;
  var n = _e.transition,
    r = O;
  try {
    if (((_e.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (_e.transition = n), (j = t), !(j & 6) && yt();
  }
}
function Lo() {
  (ve = Kt.current), F(Kt);
}
function _t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), pd(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((co(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Br();
          break;
        case 3:
          rn(), F(pe), F(oe), So();
          break;
        case 5:
          wo(r);
          break;
        case 4:
          rn();
          break;
        case 13:
          F(W);
          break;
        case 19:
          F(W);
          break;
        case 10:
          ho(r.type._context);
          break;
        case 22:
        case 23:
          Lo();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (Y = e = ft(e.current, null)),
    (ee = ve = t),
    (G = 0),
    (Jn = null),
    (No = ml = zt = 0),
    (fe = jn = null),
    Ct !== null)
  ) {
    for (t = 0; t < Ct.length; t++)
      if (((n = Ct[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Ct = null;
  }
  return e;
}
function uc(e, t) {
  do {
    var n = Y;
    try {
      if ((mo(), (Nr.current = qr), Jr)) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Jr = !1;
      }
      if (
        ((Dt = 0),
        (J = X = $ = null),
        (Ln = !1),
        (Xn = 0),
        (Po.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (Jn = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = Iu(o);
          if (g !== null) {
            (g.flags &= -257),
              Fu(g, o, u, i, t),
              g.mode & 1 && Ru(i, c, t),
              (t = g),
              (s = c);
            var S = t.updateQueue;
            if (S === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ru(i, c, t), Mo();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var z = Iu(o);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256),
              Fu(z, o, u, i, t),
              fo(ln(s, u));
            break e;
          }
        }
        (i = s = ln(s, u)),
          G !== 4 && (G = 2),
          jn === null ? (jn = [i]) : jn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Ha(i, s, t);
              Du(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (at === null || !at.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = Qa(i, u, t);
                Du(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      cc(n);
    } catch (E) {
      (t = E), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function sc() {
  var e = br.current;
  return (br.current = qr), e === null ? qr : e;
}
function Mo() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    q === null || (!(zt & 268435455) && !(ml & 268435455)) || tt(q, ee);
}
function nl(e, t) {
  var n = j;
  j |= 2;
  var r = sc();
  (q !== e || ee !== t) && (($e = null), _t(e, t));
  do
    try {
      Ad();
      break;
    } catch (l) {
      uc(e, l);
    }
  while (!0);
  if ((mo(), (j = n), (br.current = r), Y !== null)) throw Error(y(261));
  return (q = null), (ee = 0), G;
}
function Ad() {
  for (; Y !== null; ) ac(Y);
}
function Ud() {
  for (; Y !== null && !cf(); ) ac(Y);
}
function ac(e) {
  var t = dc(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? cc(e) : (Y = t),
    (Po.current = null);
}
function cc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Md(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (Y = null);
        return;
      }
    } else if (((n = Ld(n, t, ve)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function kt(e, t, n) {
  var r = O,
    l = _e.transition;
  try {
    (_e.transition = null), (O = 1), Wd(e, t, n, r);
  } finally {
    (_e.transition = l), (O = r);
  }
  return null;
}
function Wd(e, t, n, r) {
  do qt();
  while (rt !== null);
  if (j & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Sf(e, i),
    e === q && ((Y = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Sr ||
      ((Sr = !0),
      pc(Fr, function () {
        return qt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = _e.transition), (_e.transition = null);
    var o = O;
    O = 1;
    var u = j;
    (j |= 4),
      (Po.current = null),
      Od(e, n),
      lc(n, e),
      od(gi),
      (Ur = !!yi),
      (gi = yi = null),
      (e.current = n),
      Rd(n),
      ff(),
      (j = u),
      (O = o),
      (_e.transition = i);
  } else e.current = n;
  if (
    (Sr && ((Sr = !1), (rt = e), (tl = l)),
    (i = e.pendingLanes),
    i === 0 && (at = null),
    mf(n.stateNode),
    he(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (el) throw ((el = !1), (e = Ai), (Ai = null), e);
  return (
    tl & 1 && e.tag !== 0 && qt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ui ? On++ : ((On = 0), (Ui = e))) : (On = 0),
    yt(),
    null
  );
}
function qt() {
  if (rt !== null) {
    var e = Hs(tl),
      t = _e.transition,
      n = O;
    try {
      if (((_e.transition = null), (O = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (tl = 0), j & 6)) throw Error(y(331));
        var l = j;
        for (j |= 4, k = e.current; k !== null; ) {
          var i = k,
            o = i.child;
          if (k.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (k = c; k !== null; ) {
                  var h = k;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mn(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (k = m);
                  else
                    for (; k !== null; ) {
                      h = k;
                      var p = h.sibling,
                        g = h.return;
                      if ((tc(h), h === c)) {
                        k = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (k = p);
                        break;
                      }
                      k = g;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var w = S.child;
                if (w !== null) {
                  S.child = null;
                  do {
                    var z = w.sibling;
                    (w.sibling = null), (w = z);
                  } while (w !== null);
                }
              }
              k = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (k = o);
          else
            e: for (; k !== null; ) {
              if (((i = k), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (k = f);
                break e;
              }
              k = i.return;
            }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          o = k;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (k = d);
          else
            e: for (o = a; k !== null; ) {
              if (((u = k), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pl(9, u);
                  }
                } catch (E) {
                  B(u, u.return, E);
                }
              if (u === o) {
                k = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (k = v);
                break e;
              }
              k = u.return;
            }
        }
        if (
          ((j = l), yt(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(il, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), (_e.transition = t);
    }
  }
  return !1;
}
function Zu(e, t, n) {
  (t = ln(n, t)),
    (t = Ha(e, t, 1)),
    (e = st(e, t, 1)),
    (t = se()),
    e !== null && (bn(e, 1, t), he(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) Zu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Zu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (at === null || !at.has(r)))
        ) {
          (e = ln(n, e)),
            (e = Qa(t, e, 1)),
            (t = st(t, e, 1)),
            (e = se()),
            t !== null && (bn(t, 1, e), he(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $d(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (G === 4 || (G === 3 && (ee & 130023424) === ee && 500 > K() - Do)
        ? _t(e, 0)
        : (No |= n)),
    he(e, t);
}
function fc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = cr), (cr <<= 1), !(cr & 130023424) && (cr = 4194304))
      : (t = 1));
  var n = se();
  (e = Xe(e, t)), e !== null && (bn(e, t, n), he(e, n));
}
function Vd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), fc(e, n);
}
function Bd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), fc(e, n);
}
var dc;
dc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), zd(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), U && t.flags & 1048576 && va(t, Kr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      zr(e, t), (e = t.pendingProps);
      var l = en(t, oe.current);
      Jt(t, n), (l = Eo(null, t, r, e, l, n));
      var i = Co();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((i = !0), Hr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            yo(t),
            (l.updater = dl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Pi(t, r, e, n),
            (t = zi(null, t, r, !0, i, n)))
          : ((t.tag = 0), U && i && ao(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (zr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Qd(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = Di(null, t, r, e, n);
            break e;
          case 1:
            t = Wu(null, t, r, e, n);
            break e;
          case 11:
            t = Au(null, t, r, e, n);
            break e;
          case 14:
            t = Uu(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Di(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Wu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ga(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Ea(e, t),
          Gr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = ln(Error(y(423)), t)), (t = $u(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = ln(Error(y(424)), t)), (t = $u(e, t, r, n, l));
            break e;
          } else
            for (
              ye = ut(t.stateNode.containerInfo.firstChild),
                ge = t,
                U = !0,
                Me = null,
                n = Sa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((tn(), r === l)) {
            t = Ge(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ca(t),
        e === null && xi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        wi(r, l) ? (o = null) : i !== null && wi(r, i) && (t.flags |= 32),
        Xa(e, t),
        ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && xi(t), null;
    case 13:
      return Za(e, t, n);
    case 4:
      return (
        go(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = nn(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Au(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          R(Yr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Re(i.value, o)) {
            if (i.children === l.children && !pe.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Qe(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      _i(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  _i(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jt(t, n),
        (l = Te(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ze(r, t.pendingProps)),
        (l = ze(r.type, l)),
        Uu(e, t, r, l, n)
      );
    case 15:
      return Ka(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        zr(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), Hr(t)) : (e = !1),
        Jt(t, n),
        Ba(t, r, l),
        Pi(t, r, l, n),
        zi(null, t, r, !0, e, n)
      );
    case 19:
      return Ja(e, t, n);
    case 22:
      return Ya(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function pc(e, t) {
  return Ws(e, t);
}
function Hd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function xe(e, t, n, r) {
  return new Hd(e, t, n, r);
}
function jo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Qd(e) {
  if (typeof e == "function") return jo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ji)) return 11;
    if (e === qi) return 14;
  }
  return 2;
}
function ft(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = xe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function jr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) jo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case It:
        return Tt(n.children, l, i, t);
      case Zi:
        (o = 8), (l |= 8);
        break;
      case Jl:
        return (
          (e = xe(12, n, t, l | 2)), (e.elementType = Jl), (e.lanes = i), e
        );
      case ql:
        return (e = xe(13, n, t, l)), (e.elementType = ql), (e.lanes = i), e;
      case bl:
        return (e = xe(19, n, t, l)), (e.elementType = bl), (e.lanes = i), e;
      case Cs:
        return hl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ks:
              o = 10;
              break e;
            case Es:
              o = 9;
              break e;
            case Ji:
              o = 11;
              break e;
            case qi:
              o = 14;
              break e;
            case qe:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = xe(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Tt(e, t, n, r) {
  return (e = xe(7, e, r, t)), (e.lanes = n), e;
}
function hl(e, t, n, r) {
  return (
    (e = xe(22, e, r, t)),
    (e.elementType = Cs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Yl(e, t, n) {
  return (e = xe(6, e, null, t)), (e.lanes = n), e;
}
function Xl(e, t, n) {
  return (
    (t = xe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Kd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Nl(0)),
    (this.expirationTimes = Nl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Nl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Oo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Kd(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = xe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yo(i),
    e
  );
}
function Yd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function mc(e) {
  if (!e) return pt;
  e = e._reactInternals;
  e: {
    if (jt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return ma(e, n, t);
  }
  return t;
}
function hc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Oo(n, r, !0, e, l, i, o, u, s)),
    (e.context = mc(null)),
    (n = e.current),
    (r = se()),
    (l = ct(n)),
    (i = Qe(r, l)),
    (i.callback = t ?? null),
    st(n, i, l),
    (e.current.lanes = l),
    bn(e, l, r),
    he(e, r),
    e
  );
}
function vl(e, t, n, r) {
  var l = t.current,
    i = se(),
    o = ct(l);
  return (
    (n = mc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = st(l, t, o)),
    e !== null && (Oe(e, l, o, i), Pr(e, l, o)),
    o
  );
}
function rl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ju(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ro(e, t) {
  Ju(e, t), (e = e.alternate) && Ju(e, t);
}
function Xd() {
  return null;
}
var vc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Io(e) {
  this._internalRoot = e;
}
yl.prototype.render = Io.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  vl(e, t, null, null);
};
yl.prototype.unmount = Io.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Lt(function () {
      vl(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function yl(e) {
  this._internalRoot = e;
}
yl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ys();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && Gs(e);
  }
};
function Fo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function gl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function qu() {}
function Gd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = rl(o);
        i.call(c);
      };
    }
    var o = hc(t, r, e, 0, null, !1, !1, "", qu);
    return (
      (e._reactRootContainer = o),
      (e[Ye] = o.current),
      Bn(e.nodeType === 8 ? e.parentNode : e),
      Lt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = rl(s);
      u.call(c);
    };
  }
  var s = Oo(e, 0, !1, null, null, !1, !1, "", qu);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    Bn(e.nodeType === 8 ? e.parentNode : e),
    Lt(function () {
      vl(t, s, n, r);
    }),
    s
  );
}
function wl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = rl(o);
        u.call(s);
      };
    }
    vl(t, o, e, l);
  } else o = Gd(n, t, e, l, r);
  return rl(o);
}
Qs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xn(t.pendingLanes);
        n !== 0 &&
          (to(t, n | 1), he(t, K()), !(j & 6) && ((on = K() + 500), yt()));
      }
      break;
    case 13:
      Lt(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = se();
          Oe(r, e, 1, l);
        }
      }),
        Ro(e, 1);
  }
};
no = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = se();
      Oe(t, e, 134217728, n);
    }
    Ro(e, 134217728);
  }
};
Ks = function (e) {
  if (e.tag === 13) {
    var t = ct(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = se();
      Oe(n, e, t, r);
    }
    Ro(e, t);
  }
};
Ys = function () {
  return O;
};
Xs = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
ai = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ni(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = al(r);
            if (!l) throw Error(y(90));
            _s(r), ni(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ps(e, n);
      break;
    case "select":
      (t = n.value), t != null && Yt(e, !!n.multiple, t, !1);
  }
};
Os = zo;
Rs = Lt;
var Zd = { usingClientEntryPoint: !1, Events: [tr, Wt, al, Ms, js, zo] },
  wn = {
    findFiberByHostInstance: Et,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Jd = {
    bundleType: wn.bundleType,
    version: wn.version,
    rendererPackageName: wn.rendererPackageName,
    rendererConfig: wn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = As(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wn.findFiberByHostInstance || Xd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!kr.isDisabled && kr.supportsFiber)
    try {
      (il = kr.inject(Jd)), (Ue = kr);
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zd;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fo(t)) throw Error(y(200));
  return Yd(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!Fo(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = vc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Oo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Bn(e.nodeType === 8 ? e.parentNode : e),
    new Io(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = As(t)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
  return Lt(e);
};
Se.hydrate = function (e, t, n) {
  if (!gl(t)) throw Error(y(200));
  return wl(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!Fo(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = vc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = hc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ye] = t.current),
    Bn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new yl(t);
};
Se.render = function (e, t, n) {
  if (!gl(t)) throw Error(y(200));
  return wl(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!gl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Lt(function () {
        wl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = zo;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!gl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return wl(e, t, n, !1, r);
};
Se.version = "18.3.1-next-f1338f8080-20240426";
function yc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yc);
    } catch (e) {
      console.error(e);
    }
}
yc(), (ys.exports = Se);
var qd = ys.exports,
  gc,
  bu = qd;
(gc = bu.createRoot), bu.hydrateRoot;
var wc = { exports: {} },
  bd = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  ep = bd,
  tp = ep;
function Sc() {}
function kc() {}
kc.resetWarningCache = Sc;
var np = function () {
  function e(r, l, i, o, u, s) {
    if (s !== tp) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: kc,
    resetWarningCache: Sc,
  };
  return (n.PropTypes = n), n;
};
wc.exports = np();
var rp = wc.exports;
const A = _c(rp);
class Ao extends mt.Component {
  constructor() {
    super(), (this.state = { filterDirectory: "all" });
  }
  changeDirectory(t) {
    this.setState({ filterDirectory: t }),
      t === "all"
        ? this.props.changeDirectoryAll()
        : t === "active"
          ? this.props.changeDirectoryActive()
          : t === "completed" && this.props.changeDirectoryComplete();
  }
  render() {
    const { filterDirectory: t } = this.state;
    return P.jsxs("ul", {
      className: "filters",
      children: [
        P.jsx("li", {
          children: P.jsx("button", {
            className: t === "all" ? "selected" : "",
            onClick: () => this.changeDirectory("all"),
            children: "All",
          }),
        }),
        P.jsx("li", {
          children: P.jsx("button", {
            className: t === "active" ? "selected" : "",
            onClick: () => this.changeDirectory("active"),
            children: "Active",
          }),
        }),
        P.jsx("li", {
          children: P.jsx("button", {
            className: t === "completed" ? "selected" : "",
            onClick: () => this.changeDirectory("completed"),
            children: "Completed",
          }),
        }),
      ],
    });
  }
}
Ao.propTypes = {
  changeDirectoryAll: A.func,
  changeDirectoryActive: A.func,
  changeDirectoryComplete: A.func,
};
Ao.defaultProps = {
  changeDirectoryAll: () => {},
  changeDirectoryActive: () => {},
  changeDirectoryComplete: () => {},
};
class Uo extends mt.Component {
  render() {
    const {
      itemsLeft: t,
      changeDirectoryAll: n,
      changeDirectoryActive: r,
      changeDirectoryComplete: l,
      clearCompleateItems: i,
    } = this.props;
    return P.jsxs("footer", {
      className: "footer",
      children: [
        P.jsxs("span", {
          className: "todo-count",
          children: [t, " items left"],
        }),
        P.jsx(Ao, {
          changeDirectoryAll: () => n(),
          changeDirectoryActive: () => r(),
          changeDirectoryComplete: () => l(),
        }),
        P.jsx("button", {
          className: "clear-completed",
          onClick: () => i(),
          children: "Clear completed",
        }),
      ],
    });
  }
}
Uo.propTypes = {
  itemsLeft: A.node,
  changeDirectoryAll: A.func,
  changeDirectoryActive: A.func,
  changeDirectoryComplete: A.func,
  clearCompleateItems: A.func,
};
Uo.defaultProps = {
  itemsLeft: "",
  changeDirectoryAll: () => {},
  changeDirectoryActive: () => {},
  changeDirectoryComplete: () => {},
  clearCompleateItems: () => {},
};
class Wo extends mt.Component {
  constructor() {
    super();
    ne(this, "submitForm", (n) => {
      n.preventDefault(),
        this.props.addItem(this.state.label),
        this.setState({ label: "" });
    });
    ne(this, "onLabelChange", (n) => {
      this.setState({ label: n.target.value });
    });
    this.state = { label: "" };
  }
  render() {
    return P.jsxs("form", {
      className: "form-todo",
      onSubmit: this.submitForm,
      children: [
        P.jsx("input", {
          className: "new-todo",
          placeholder: "What needs to be done?",
          autoFocus: !0,
          onChange: this.onLabelChange,
          value: this.state.label,
        }),
        P.jsx("button", {
          className: "accept-todo",
          type: "submit",
          children: "Добавить",
        }),
      ],
    });
  }
}
Wo.propTypes = { addItem: A.func };
Wo.defaultProps = { addItem: () => {} };
class $o extends mt.Component {
  render() {
    const {
        status: t,
        description: n,
        timeCreated: r,
        toggleStatusTodo: l,
        onDeleted: i,
        onEdit: o,
        editSubmit: u,
        changeLabel: s,
        defaulDescription: c,
      } = this.props,
      h = t === "completed";
    return t === "editing"
      ? P.jsxs("li", {
          className: t,
          children: [
            P.jsxs("div", {
              className: "view",
              children: [
                P.jsx("input", { className: "toggle", type: "checkbox" }),
                P.jsxs("label", {
                  children: [
                    P.jsx("span", { className: "description", children: n }),
                    P.jsx("span", { className: "created", children: r }),
                  ],
                }),
                P.jsx("button", { className: "icon icon-edit" }),
                P.jsx("button", { className: "icon icon-destroy", onClick: i }),
              ],
            }),
            P.jsx("form", {
              action: "",
              onSubmit: u,
              children: P.jsx("input", {
                type: "text",
                className: "edit",
                defaultValue: c,
                onChange: s,
              }),
            }),
          ],
        })
      : P.jsx("li", {
          className: t,
          children: P.jsxs("div", {
            className: "view",
            children: [
              P.jsx("input", {
                className: "toggle",
                type: "checkbox",
                onClick: l,
                defaultChecked: h,
              }),
              P.jsxs("label", {
                children: [
                  P.jsx("span", { className: "description", children: n }),
                  P.jsx("span", { className: "created", children: r }),
                ],
              }),
              P.jsx("button", { className: "icon icon-edit", onClick: o }),
              P.jsx("button", { className: "icon icon-destroy", onClick: i }),
            ],
          }),
        });
  }
}
$o.propTypes = {
  status: A.node,
  description: A.node,
  timeCreated: A.node,
  toggleStatusTodo: A.func,
  onDeleted: A.func,
  onEdit: A.func,
  editSubmit: A.func,
  changeLabel: A.func,
  defaulDescription: A.node,
};
$o.defaultProps = {
  status: "",
  description: "",
  timeCreated: "recently",
  toggleStatusTodo: () => {},
  onDeleted: () => {},
  onEdit: () => {},
  editSubmit: () => {},
  changeLabel: () => {},
  defaulDescription: "Edit task",
};
class Vo extends mt.Component {
  render() {
    const {
      filteredDataTasks: t,
      toggleStatusTodo: n,
      onDeleted: r,
      onEdit: l,
      editSubmit: i,
      changeLabel: o,
    } = this.props;
    return P.jsx("ul", {
      className: "todo-list",
      children: t.map((u) =>
        P.jsx(
          $o,
          {
            status: u.status,
            description: u.description,
            timeCreated: u.timeCreated,
            toggleStatusTodo: () => n(u.id),
            onDeleted: () => r(u.id),
            onEdit: () => l(u.id),
            editSubmit: (s) => i(s, u.id),
            changeLabel: (s) => o(s, u.id),
            defaulDescription: u.defaulDescription,
          },
          u.id,
        ),
      ),
    });
  }
}
Vo.propTypes = {
  filteredDataTasks: A.array,
  toggleStatusTodo: A.func,
  onDeleted: A.func,
  onEdit: A.func,
  editSubmit: A.func,
  changeLabel: A.func,
};
Vo.defaultProps = {
  filteredDataTasks: [],
  toggleStatusTodo: () => {},
  onDeleted: () => {},
  onEdit: () => {},
  editSubmit: () => {},
  changeLabel: () => {},
};
const es = 6e4,
  ts = 525600,
  ns = 43200,
  rs = 1440,
  ls = Symbol.for("constructDateFrom");
function Bo(e, t) {
  return typeof e == "function"
    ? e(t)
    : e && typeof e == "object" && ls in e
      ? e[ls](t)
      : e instanceof Date
        ? new e.constructor(t)
        : new Date(t);
}
function Vi(e, t) {
  return Bo(e, e);
}
let lp = {};
function ip() {
  return lp;
}
function is(e) {
  const t = Vi(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds(),
      ),
    );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function op(e, ...t) {
  const n = Bo.bind(null, e || t.find((r) => typeof r == "object"));
  return t.map(n);
}
function up(e, t) {
  const n = +Vi(e) - +Vi(t);
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function sp(e) {
  return Bo(e, Date.now());
}
function ap(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
const cp = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  fp = (e, t, n) => {
    let r;
    const l = cp[e];
    return (
      typeof l == "string"
        ? (r = l)
        : t === 1
          ? (r = l.one)
          : (r = l.other.replace("{{count}}", t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  };
function Gl(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const dp = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  pp = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  mp = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  hp = {
    date: Gl({ formats: dp, defaultWidth: "full" }),
    time: Gl({ formats: pp, defaultWidth: "full" }),
    dateTime: Gl({ formats: mp, defaultWidth: "full" }),
  },
  vp = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  yp = (e, t, n, r) => vp[e];
function Sn(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let l;
    if (r === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth,
        u = n != null && n.width ? String(n.width) : o;
      l = e.formattingValues[u] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth,
        u = n != null && n.width ? String(n.width) : e.defaultWidth;
      l = e.values[u] || e.values[o];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return l[i];
  };
}
const gp = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  wp = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  Sp = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  kp = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  Ep = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  Cp = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  xp = (e, t) => {
    const n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  _p = {
    ordinalNumber: xp,
    era: Sn({ values: gp, defaultWidth: "wide" }),
    quarter: Sn({
      values: wp,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: Sn({ values: Sp, defaultWidth: "wide" }),
    day: Sn({ values: kp, defaultWidth: "wide" }),
    dayPeriod: Sn({
      values: Ep,
      defaultWidth: "wide",
      formattingValues: Cp,
      defaultFormattingWidth: "wide",
    }),
  };
function kn(e) {
  return (t, n = {}) => {
    const r = n.width,
      l = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      i = t.match(l);
    if (!i) return null;
    const o = i[0],
      u = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      s = Array.isArray(u) ? Pp(u, (m) => m.test(o)) : Tp(u, (m) => m.test(o));
    let c;
    (c = e.valueCallback ? e.valueCallback(s) : s),
      (c = n.valueCallback ? n.valueCallback(c) : c);
    const h = t.slice(o.length);
    return { value: c, rest: h };
  };
}
function Tp(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Pp(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function Np(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const l = r[0],
      i = t.match(e.parsePattern);
    if (!i) return null;
    let o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    const u = t.slice(l.length);
    return { value: o, rest: u };
  };
}
const Dp = /^(\d+)(th|st|nd|rd)?/i,
  zp = /\d+/i,
  Lp = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Mp = { any: [/^b/i, /^(a|c)/i] },
  jp = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  Op = { any: [/1/i, /2/i, /3/i, /4/i] },
  Rp = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Ip = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  Fp = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Ap = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  Up = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  Wp = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  $p = {
    ordinalNumber: Np({
      matchPattern: Dp,
      parsePattern: zp,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: kn({
      matchPatterns: Lp,
      defaultMatchWidth: "wide",
      parsePatterns: Mp,
      defaultParseWidth: "any",
    }),
    quarter: kn({
      matchPatterns: jp,
      defaultMatchWidth: "wide",
      parsePatterns: Op,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: kn({
      matchPatterns: Rp,
      defaultMatchWidth: "wide",
      parsePatterns: Ip,
      defaultParseWidth: "any",
    }),
    day: kn({
      matchPatterns: Fp,
      defaultMatchWidth: "wide",
      parsePatterns: Ap,
      defaultParseWidth: "any",
    }),
    dayPeriod: kn({
      matchPatterns: Up,
      defaultMatchWidth: "any",
      parsePatterns: Wp,
      defaultParseWidth: "any",
    }),
  },
  Vp = {
    code: "en-US",
    formatDistance: fp,
    formatLong: hp,
    formatRelative: yp,
    localize: _p,
    match: $p,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function Bp(e, t, n) {
  const r = ip(),
    l = (n == null ? void 0 : n.locale) ?? r.locale ?? Vp,
    i = up(e, t);
  if (isNaN(i)) throw new RangeError("Invalid time value");
  const o = Object.assign({}, n, {
      addSuffix: n == null ? void 0 : n.addSuffix,
      comparison: i,
    }),
    [u, s] = op(n == null ? void 0 : n.in, ...(i > 0 ? [t, e] : [e, t])),
    c = ap((n == null ? void 0 : n.roundingMethod) ?? "round"),
    h = s.getTime() - u.getTime(),
    m = h / es,
    p = is(s) - is(u),
    g = (h - p) / es,
    S = n == null ? void 0 : n.unit;
  let w;
  if (
    (S
      ? (w = S)
      : m < 1
        ? (w = "second")
        : m < 60
          ? (w = "minute")
          : m < rs
            ? (w = "hour")
            : g < ns
              ? (w = "day")
              : g < ts
                ? (w = "month")
                : (w = "year"),
    w === "second")
  ) {
    const z = c(h / 1e3);
    return l.formatDistance("xSeconds", z, o);
  } else if (w === "minute") {
    const z = c(m);
    return l.formatDistance("xMinutes", z, o);
  } else if (w === "hour") {
    const z = c(m / 60);
    return l.formatDistance("xHours", z, o);
  } else if (w === "day") {
    const z = c(g / rs);
    return l.formatDistance("xDays", z, o);
  } else if (w === "month") {
    const z = c(g / ns);
    return z === 12 && S !== "month"
      ? l.formatDistance("xYears", 1, o)
      : l.formatDistance("xMonths", z, o);
  } else {
    const z = c(g / ts);
    return l.formatDistance("xYears", z, o);
  }
}
function Hp(e, t) {
  return Bp(e, sp(e), t);
}
class Qp extends mt.Component {
  constructor() {
    super();
    ne(this, "updateTimer", () => {
      setInterval(() => {
        this.setState((n) => ({
          dataTasks: n.dataTasks.map((r) => ({
            ...r,
            timeCreated: `created ${this.timeCreate(r.timer)}`,
          })),
          filteredDataTasks: n.filteredDataTasks.map((r) => ({
            ...r,
            timeCreated: `created ${this.timeCreate(r.timer)}`,
          })),
        }));
      }, 15e3);
    });
    ne(this, "createTodoItem", (n, r, l = "") => ({
      id: this.maxId++,
      description: n,
      timeCreated: `created ${this.timeCreate(r)}`,
      timer: r,
      status: l,
      defaulDescription: n,
    }));
    ne(this, "timeCreate", (n) => Hp(new Date(n), { addSuffix: !0 }));
    ne(this, "addItem", (n) => {
      const r = this.createTodoItem(n, new Date() - 1);
      this.setState(({ dataTasks: l, filteredDataTasks: i, filterName: o }) => {
        const u = [r, ...l],
          s = [r, ...i];
        return o !== "completed"
          ? { dataTasks: u, filteredDataTasks: s }
          : { dataTasks: u };
      });
    });
    ne(this, "editTask", (n) => {
      const r = this.state.dataTasks.find((l) => l.id == n);
      this.setState({
        filteredDataTasks: this.state.filteredDataTasks.map((l) => {
          if (l.id == n) return { ...l, status: "editing" };
          if (l.status == "editing") {
            const i = this.state.dataTasks.find((o) => o.id == l.id);
            return { ...l, status: i.status };
          } else return l;
        }),
        editTaskDescription: r.description,
      });
    });
    ne(this, "editSubmit", (n, r) => {
      n.preventDefault();
      const l = this.state.dataTasks.find((i) => i.id === r);
      this.setState((i) => ({
        dataTasks: i.dataTasks.map((o) =>
          o.id === r
            ? {
                ...o,
                description: this.state.editTaskDescription,
                defaulDescription: this.state.editTaskDescription,
              }
            : o,
        ),
        filteredDataTasks: i.filteredDataTasks.map((o) =>
          o.id === r
            ? {
                ...o,
                description: this.state.editTaskDescription,
                status: l.status,
                defaulDescription: this.state.editTaskDescription,
              }
            : o,
        ),
      }));
    });
    ne(this, "changeLabel", (n) => {
      this.setState({ editTaskDescription: n.target.value });
    });
    ne(this, "changeStatus", (n) => {
      this.setState((r) => ({
        dataTasks: r.dataTasks.map((l) => {
          if (l.id == n) {
            if (l.status == "") return { ...l, status: "completed" };
            if (l.status == "completed") return { ...l, status: "" };
          } else return l;
        }),
        filteredDataTasks: r.filteredDataTasks.map((l) => {
          if (l.id == n) {
            if (l.status == "") return { ...l, status: "completed" };
            if (l.status == "completed") return { ...l, status: "" };
          } else return l;
        }),
      }));
    });
    ne(this, "deleteTask", (n) => {
      this.setState(({ dataTasks: r, filteredDataTasks: l }) => {
        const i = r.findIndex((u) => u.id === n),
          o = l.findIndex((u) => u.id === n);
        return {
          dataTasks: [...r.slice(0, i), ...r.slice(i + 1)],
          filteredDataTasks: [...l.slice(0, o), ...l.slice(o + 1)],
        };
      });
    });
    ne(this, "changeListAll", () => {
      this.setState(() => ({
        filteredDataTasks: this.state.dataTasks,
        filterName: "all",
      }));
    });
    ne(this, "changeListActive", () => {
      this.setState(() => ({
        filteredDataTasks: this.state.dataTasks.filter((n) => n.status === ""),
        filterName: "active",
      }));
    });
    ne(this, "changeListComplete", () => {
      this.setState(() => ({
        filteredDataTasks: this.state.dataTasks.filter(
          (n) => n.status === "completed",
        ),
        filterName: "completed",
      }));
    });
    ne(this, "clearCompleateItems", () => {
      this.setState(() => ({
        dataTasks: this.state.dataTasks.filter((n) => n.status !== "completed"),
        filteredDataTasks: this.state.filteredDataTasks.filter(
          (n) => n.status !== "completed",
        ),
      }));
    });
    (this.maxId = 100),
      (this.state = {
        dataTasks: [
          this.createTodoItem("обезуметь", "2024-10-14T15:05:10", "completed"),
          this.createTodoItem("поспать 8 часов", "2024-10-14T14:59:10", ""),
          this.createTodoItem("сделать проект", "2024-10-14T14:59:00"),
        ],
        filteredDataTasks: [],
        filterName: "all",
        editTaskId: null,
        editTaskDescription: "",
      });
  }
  componentDidMount() {
    this.setState({ filteredDataTasks: this.state.dataTasks }),
      this.updateTimer();
  }
  render() {
    const { filteredDataTasks: n } = this.state,
      r = this.state.dataTasks.filter((i) => i.status === "completed").length,
      l = this.state.dataTasks.length - r;
    return P.jsx(P.Fragment, {
      children: P.jsxs("section", {
        className: "todoapp",
        children: [
          P.jsxs("header", {
            className: "header",
            children: [
              P.jsx("h1", { children: "todos" }),
              P.jsx(Wo, { addItem: this.addItem }),
            ],
          }),
          P.jsxs("section", {
            className: "main",
            children: [
              P.jsx(Vo, {
                filteredDataTasks: n,
                toggleStatusTodo: this.changeStatus,
                onDeleted: this.deleteTask,
                onEdit: this.editTask,
                editSubmit: this.editSubmit,
                changeLabel: this.changeLabel,
              }),
              P.jsx(Uo, {
                itemsLeft: l,
                changeDirectoryAll: this.changeListAll,
                changeDirectoryActive: this.changeListActive,
                changeDirectoryComplete: this.changeListComplete,
                clearCompleateItems: this.clearCompleateItems,
              }),
            ],
          }),
        ],
      }),
    });
  }
}
gc(document.getElementById("root")).render(P.jsx(Qp, {}));
