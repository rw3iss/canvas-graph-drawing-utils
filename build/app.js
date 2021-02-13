var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module2) => () => {
  if (!module2) {
    module2 = {exports: {}};
    callback(module2.exports, module2);
  }
  return module2.exports;
};
var __exportStar = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", {value: module2, enumerable: true})), module2);
};
var __publicField = (obj, key, value) => {
  if (typeof key !== "symbol")
    key += "";
  if (key in obj)
    return __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value});
  return obj[key] = value;
};

// node_modules/preact/dist/preact.js
var require_preact = __commonJS((exports2) => {
  var n;
  var l;
  var u;
  var t;
  var i;
  var r;
  var o = {};
  var f = [];
  var e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function c(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function s(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function a(n2, l2, u2) {
    var t2, i2, r2, o2 = arguments, f2 = {};
    for (r2 in l2)
      r2 == "key" ? t2 = l2[r2] : r2 == "ref" ? i2 = l2[r2] : f2[r2] = l2[r2];
    if (arguments.length > 3)
      for (u2 = [u2], r2 = 3; r2 < arguments.length; r2++)
        u2.push(o2[r2]);
    if (u2 != null && (f2.children = u2), typeof n2 == "function" && n2.defaultProps != null)
      for (r2 in n2.defaultProps)
        f2[r2] === void 0 && (f2[r2] = n2.defaultProps[r2]);
    return v(n2, f2, t2, i2, null);
  }
  function v(l2, u2, t2, i2, r2) {
    var o2 = {type: l2, props: u2, key: t2, ref: i2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r2 == null ? ++n.__v : r2};
    return n.vnode != null && n.vnode(o2), o2;
  }
  function h7(n2) {
    return n2.children;
  }
  function p(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function y(n2, l2) {
    if (l2 == null)
      return n2.__ ? y(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null)
        return u2.__e;
    return typeof n2.type == "function" ? y(n2) : null;
  }
  function d(n2) {
    var l2, u2;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
          n2.__e = n2.__c.base = u2.__e;
          break;
        }
      return d(n2);
    }
  }
  function _(l2) {
    (!l2.__d && (l2.__d = true) && u.push(l2) && !k.__r++ || i !== n.debounceRendering) && ((i = n.debounceRendering) || t)(k);
  }
  function k() {
    for (var n2; k.__r = u.length; )
      n2 = u.sort(function(n3, l2) {
        return n3.__v.__b - l2.__v.__b;
      }), u = [], n2.some(function(n3) {
        var l2, u2, t2, i2, r2, o2;
        n3.__d && (r2 = (i2 = (l2 = n3).__v).__e, (o2 = l2.__P) && (u2 = [], (t2 = c({}, i2)).__v = i2.__v + 1, $(o2, i2, t2, l2.__n, o2.ownerSVGElement !== void 0, i2.__h != null ? [r2] : null, u2, r2 == null ? y(i2) : r2, i2.__h), H(u2, i2), i2.__e != r2 && d(i2)));
      });
  }
  function x(n2, l2, u2, t2, i2, r2, e2, c2, s2, a2) {
    var p2, d2, _2, k2, x2, g2, w2, A2 = t2 && t2.__k || f, P2 = A2.length;
    for (u2.__k = [], p2 = 0; p2 < l2.length; p2++)
      if ((k2 = u2.__k[p2] = (k2 = l2[p2]) == null || typeof k2 == "boolean" ? null : typeof k2 == "string" || typeof k2 == "number" ? v(null, k2, null, null, k2) : Array.isArray(k2) ? v(h7, {children: k2}, null, null, null) : k2.__b > 0 ? v(k2.type, k2.props, k2.key, null, k2.__v) : k2) != null) {
        if (k2.__ = u2, k2.__b = u2.__b + 1, (_2 = A2[p2]) === null || _2 && k2.key == _2.key && k2.type === _2.type)
          A2[p2] = void 0;
        else
          for (d2 = 0; d2 < P2; d2++) {
            if ((_2 = A2[d2]) && k2.key == _2.key && k2.type === _2.type) {
              A2[d2] = void 0;
              break;
            }
            _2 = null;
          }
        $(n2, k2, _2 = _2 || o, i2, r2, e2, c2, s2, a2), x2 = k2.__e, (d2 = k2.ref) && _2.ref != d2 && (w2 || (w2 = []), _2.ref && w2.push(_2.ref, null, k2), w2.push(d2, k2.__c || x2, k2)), x2 != null ? (g2 == null && (g2 = x2), typeof k2.type == "function" && k2.__k != null && k2.__k === _2.__k ? k2.__d = s2 = m(k2, s2, n2) : s2 = b(n2, k2, _2, A2, x2, s2), a2 || u2.type !== "option" ? typeof u2.type == "function" && (u2.__d = s2) : n2.value = "") : s2 && _2.__e == s2 && s2.parentNode != n2 && (s2 = y(_2));
      }
    for (u2.__e = g2, p2 = P2; p2--; )
      A2[p2] != null && (typeof u2.type == "function" && A2[p2].__e != null && A2[p2].__e == u2.__d && (u2.__d = y(t2, p2 + 1)), z(A2[p2], A2[p2]));
    if (w2)
      for (p2 = 0; p2 < w2.length; p2++)
        j(w2[p2], w2[++p2], w2[++p2]);
  }
  function m(n2, l2, u2) {
    var t2, i2;
    for (t2 = 0; t2 < n2.__k.length; t2++)
      (i2 = n2.__k[t2]) && (i2.__ = n2, l2 = typeof i2.type == "function" ? m(i2, l2, u2) : b(u2, i2, i2, n2.__k, i2.__e, l2));
    return l2;
  }
  function b(n2, l2, u2, t2, i2, r2) {
    var o2, f2, e2;
    if (l2.__d !== void 0)
      o2 = l2.__d, l2.__d = void 0;
    else if (u2 == null || i2 != r2 || i2.parentNode == null)
      n:
        if (r2 == null || r2.parentNode !== n2)
          n2.appendChild(i2), o2 = null;
        else {
          for (f2 = r2, e2 = 0; (f2 = f2.nextSibling) && e2 < t2.length; e2 += 2)
            if (f2 == i2)
              break n;
          n2.insertBefore(i2, r2), o2 = r2;
        }
    return o2 !== void 0 ? o2 : i2.nextSibling;
  }
  function g(n2, l2, u2, t2, i2) {
    var r2;
    for (r2 in u2)
      r2 === "children" || r2 === "key" || r2 in l2 || A(n2, r2, null, u2[r2], t2);
    for (r2 in l2)
      i2 && typeof l2[r2] != "function" || r2 === "children" || r2 === "key" || r2 === "value" || r2 === "checked" || u2[r2] === l2[r2] || A(n2, r2, l2[r2], u2[r2], t2);
  }
  function w(n2, l2, u2) {
    l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || e.test(l2) ? u2 : u2 + "px";
  }
  function A(n2, l2, u2, t2, i2) {
    var r2;
    n:
      if (l2 === "style")
        if (typeof u2 == "string")
          n2.style.cssText = u2;
        else {
          if (typeof t2 == "string" && (n2.style.cssText = t2 = ""), t2)
            for (l2 in t2)
              u2 && l2 in u2 || w(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              t2 && u2[l2] === t2[l2] || w(n2.style, l2, u2[l2]);
        }
      else if (l2[0] === "o" && l2[1] === "n")
        r2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? t2 || n2.addEventListener(l2, r2 ? C : P, r2) : n2.removeEventListener(l2, r2 ? C : P, r2);
      else if (l2 !== "dangerouslySetInnerHTML") {
        if (i2)
          l2 = l2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "download" && l2 in n2)
          try {
            n2[l2] = u2 == null ? "" : u2;
            break n;
          } catch (n3) {
          }
        typeof u2 == "function" || (u2 != null && (u2 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
      }
  }
  function P(l2) {
    this.l[l2.type + false](n.event ? n.event(l2) : l2);
  }
  function C(l2) {
    this.l[l2.type + true](n.event ? n.event(l2) : l2);
  }
  function $(l2, u2, t2, i2, r2, o2, f2, e2, s2) {
    var a2, v2, y2, d2, _2, k2, m2, b2, g2, w2, A2, P2 = u2.type;
    if (u2.constructor !== void 0)
      return null;
    t2.__h != null && (s2 = t2.__h, e2 = u2.__e = t2.__e, u2.__h = null, o2 = [e2]), (a2 = n.__b) && a2(u2);
    try {
      n:
        if (typeof P2 == "function") {
          if (b2 = u2.props, g2 = (a2 = P2.contextType) && i2[a2.__c], w2 = a2 ? g2 ? g2.props.value : a2.__ : i2, t2.__c ? m2 = (v2 = u2.__c = t2.__c).__ = v2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = v2 = new P2(b2, w2) : (u2.__c = v2 = new p(b2, w2), v2.constructor = P2, v2.render = I), g2 && g2.sub(v2), v2.props = b2, v2.state || (v2.state = {}), v2.context = w2, v2.__n = i2, y2 = v2.__d = true, v2.__h = []), v2.__s == null && (v2.__s = v2.state), P2.getDerivedStateFromProps != null && (v2.__s == v2.state && (v2.__s = c({}, v2.__s)), c(v2.__s, P2.getDerivedStateFromProps(b2, v2.__s))), d2 = v2.props, _2 = v2.state, y2)
            P2.getDerivedStateFromProps == null && v2.componentWillMount != null && v2.componentWillMount(), v2.componentDidMount != null && v2.__h.push(v2.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && b2 !== d2 && v2.componentWillReceiveProps != null && v2.componentWillReceiveProps(b2, w2), !v2.__e && v2.shouldComponentUpdate != null && v2.shouldComponentUpdate(b2, v2.__s, w2) === false || u2.__v === t2.__v) {
              v2.props = b2, v2.state = v2.__s, u2.__v !== t2.__v && (v2.__d = false), v2.__v = u2, u2.__e = t2.__e, u2.__k = t2.__k, v2.__h.length && f2.push(v2);
              break n;
            }
            v2.componentWillUpdate != null && v2.componentWillUpdate(b2, v2.__s, w2), v2.componentDidUpdate != null && v2.__h.push(function() {
              v2.componentDidUpdate(d2, _2, k2);
            });
          }
          v2.context = w2, v2.props = b2, v2.state = v2.__s, (a2 = n.__r) && a2(u2), v2.__d = false, v2.__v = u2, v2.__P = l2, a2 = v2.render(v2.props, v2.state, v2.context), v2.state = v2.__s, v2.getChildContext != null && (i2 = c(c({}, i2), v2.getChildContext())), y2 || v2.getSnapshotBeforeUpdate == null || (k2 = v2.getSnapshotBeforeUpdate(d2, _2)), A2 = a2 != null && a2.type === h7 && a2.key == null ? a2.props.children : a2, x(l2, Array.isArray(A2) ? A2 : [A2], u2, t2, i2, r2, o2, f2, e2, s2), v2.base = u2.__e, u2.__h = null, v2.__h.length && f2.push(v2), m2 && (v2.__E = v2.__ = null), v2.__e = false;
        } else
          o2 == null && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = T(t2.__e, u2, t2, i2, r2, o2, f2, s2);
      (a2 = n.diffed) && a2(u2);
    } catch (l3) {
      u2.__v = null, (s2 || o2 != null) && (u2.__e = e2, u2.__h = !!s2, o2[o2.indexOf(e2)] = null), n.__e(l3, u2, t2);
    }
  }
  function H(l2, u2) {
    n.__c && n.__c(u2, l2), l2.some(function(u3) {
      try {
        l2 = u3.__h, u3.__h = [], l2.some(function(n2) {
          n2.call(u3);
        });
      } catch (l3) {
        n.__e(l3, u3.__v);
      }
    });
  }
  function T(n2, l2, u2, t2, i2, r2, e2, c2) {
    var a2, v2, h8, p2, y2 = u2.props, d2 = l2.props, _2 = l2.type, k2 = 0;
    if (_2 === "svg" && (i2 = true), r2 != null) {
      for (; k2 < r2.length; k2++)
        if ((a2 = r2[k2]) && (a2 === n2 || (_2 ? a2.localName == _2 : a2.nodeType == 3))) {
          n2 = a2, r2[k2] = null;
          break;
        }
    }
    if (n2 == null) {
      if (_2 === null)
        return document.createTextNode(d2);
      n2 = i2 ? document.createElementNS("http://www.w3.org/2000/svg", _2) : document.createElement(_2, d2.is && d2), r2 = null, c2 = false;
    }
    if (_2 === null)
      y2 === d2 || c2 && n2.data === d2 || (n2.data = d2);
    else {
      if (r2 = r2 && f.slice.call(n2.childNodes), v2 = (y2 = u2.props || o).dangerouslySetInnerHTML, h8 = d2.dangerouslySetInnerHTML, !c2) {
        if (r2 != null)
          for (y2 = {}, p2 = 0; p2 < n2.attributes.length; p2++)
            y2[n2.attributes[p2].name] = n2.attributes[p2].value;
        (h8 || v2) && (h8 && (v2 && h8.__html == v2.__html || h8.__html === n2.innerHTML) || (n2.innerHTML = h8 && h8.__html || ""));
      }
      if (g(n2, d2, y2, i2, c2), h8)
        l2.__k = [];
      else if (k2 = l2.props.children, x(n2, Array.isArray(k2) ? k2 : [k2], l2, u2, t2, i2 && _2 !== "foreignObject", r2, e2, n2.firstChild, c2), r2 != null)
        for (k2 = r2.length; k2--; )
          r2[k2] != null && s(r2[k2]);
      c2 || ("value" in d2 && (k2 = d2.value) !== void 0 && (k2 !== n2.value || _2 === "progress" && !k2) && A(n2, "value", k2, y2.value, false), "checked" in d2 && (k2 = d2.checked) !== void 0 && k2 !== n2.checked && A(n2, "checked", k2, y2.checked, false));
    }
    return n2;
  }
  function j(l2, u2, t2) {
    try {
      typeof l2 == "function" ? l2(u2) : l2.current = u2;
    } catch (l3) {
      n.__e(l3, t2);
    }
  }
  function z(l2, u2, t2) {
    var i2, r2, o2;
    if (n.unmount && n.unmount(l2), (i2 = l2.ref) && (i2.current && i2.current !== l2.__e || j(i2, null, u2)), t2 || typeof l2.type == "function" || (t2 = (r2 = l2.__e) != null), l2.__e = l2.__d = void 0, (i2 = l2.__c) != null) {
      if (i2.componentWillUnmount)
        try {
          i2.componentWillUnmount();
        } catch (l3) {
          n.__e(l3, u2);
        }
      i2.base = i2.__P = null;
    }
    if (i2 = l2.__k)
      for (o2 = 0; o2 < i2.length; o2++)
        i2[o2] && z(i2[o2], u2, t2);
    r2 != null && s(r2);
  }
  function I(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function L(l2, u2, t2) {
    var i2, r2, e2;
    n.__ && n.__(l2, u2), r2 = (i2 = typeof t2 == "function") ? null : t2 && t2.__k || u2.__k, e2 = [], $(u2, l2 = (!i2 && t2 || u2).__k = a(h7, null, [l2]), r2 || o, o, u2.ownerSVGElement !== void 0, !i2 && t2 ? [t2] : r2 ? null : u2.firstChild ? f.slice.call(u2.childNodes) : null, e2, !i2 && t2 ? t2 : r2 ? r2.__e : u2.firstChild, i2), H(e2, l2);
  }
  n = {__e: function(n2, l2) {
    for (var u2, t2, i2; l2 = l2.__; )
      if ((u2 = l2.__c) && !u2.__)
        try {
          if ((t2 = u2.constructor) && t2.getDerivedStateFromError != null && (u2.setState(t2.getDerivedStateFromError(n2)), i2 = u2.__d), u2.componentDidCatch != null && (u2.componentDidCatch(n2), i2 = u2.__d), i2)
            return u2.__E = u2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  }, __v: 0}, l = function(n2) {
    return n2 != null && n2.constructor === void 0;
  }, p.prototype.setState = function(n2, l2) {
    var u2;
    u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), typeof n2 == "function" && (n2 = n2(c({}, u2), this.props)), n2 && c(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), _(this));
  }, p.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), _(this));
  }, p.prototype.render = h7, u = [], t = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, k.__r = 0, r = 0, exports2.render = L, exports2.hydrate = function n2(l2, u2) {
    L(l2, u2, n2);
  }, exports2.createElement = a, exports2.h = a, exports2.Fragment = h7, exports2.createRef = function() {
    return {current: null};
  }, exports2.isValidElement = l, exports2.Component = p, exports2.cloneElement = function(n2, l2, u2) {
    var t2, i2, r2, o2 = arguments, f2 = c({}, n2.props);
    for (r2 in l2)
      r2 == "key" ? t2 = l2[r2] : r2 == "ref" ? i2 = l2[r2] : f2[r2] = l2[r2];
    if (arguments.length > 3)
      for (u2 = [u2], r2 = 3; r2 < arguments.length; r2++)
        u2.push(o2[r2]);
    return u2 != null && (f2.children = u2), v(n2.type, f2, t2 || n2.key, i2 || n2.ref, null);
  }, exports2.createContext = function(n2, l2) {
    var u2 = {__c: l2 = "__cC" + r++, __: n2, Consumer: function(n3, l3) {
      return n3.children(l3);
    }, Provider: function(n3) {
      var u3, t2;
      return this.getChildContext || (u3 = [], (t2 = {})[l2] = this, this.getChildContext = function() {
        return t2;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u3.some(_);
      }, this.sub = function(n4) {
        u3.push(n4);
        var l3 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
        };
      }), n3.children;
    }};
    return u2.Provider.__ = u2.Consumer.contextType = u2;
  }, exports2.toChildArray = function n2(l2, u2) {
    return u2 = u2 || [], l2 == null || typeof l2 == "boolean" || (Array.isArray(l2) ? l2.some(function(l3) {
      n2(l3, u2);
    }) : u2.push(l2)), u2;
  }, exports2.options = n;
});

// node_modules/preact-router/dist/preact-router.js
var require_preact_router = __commonJS((exports2, module2) => {
  !function(t, e) {
    typeof exports2 == "object" && typeof module2 != "undefined" ? module2.exports = e(require_preact()) : typeof define == "function" && define.amd ? define(["preact"], e) : t.preactRouter = e(t.preact);
  }(exports2, function(t) {
    function e(t2, e2) {
      for (var n2 in e2)
        t2[n2] = e2[n2];
      return t2;
    }
    function n(t2, e2, n2) {
      var r2, o2 = /(?:\?([^#]*))?(#.*)?$/, u2 = t2.match(o2), a2 = {};
      if (u2 && u2[1])
        for (var p2 = u2[1].split("&"), c2 = 0; c2 < p2.length; c2++) {
          var f2 = p2[c2].split("=");
          a2[decodeURIComponent(f2[0])] = decodeURIComponent(f2.slice(1).join("="));
        }
      t2 = i(t2.replace(o2, "")), e2 = i(e2 || "");
      for (var l2 = Math.max(t2.length, e2.length), s2 = 0; s2 < l2; s2++)
        if (e2[s2] && e2[s2].charAt(0) === ":") {
          var h8 = e2[s2].replace(/(^:|[+*?]+$)/g, ""), d2 = (e2[s2].match(/[+*?]+$/) || C)[0] || "", g2 = ~d2.indexOf("+"), y2 = ~d2.indexOf("*"), m2 = t2[s2] || "";
          if (!m2 && !y2 && (d2.indexOf("?") < 0 || g2)) {
            r2 = false;
            break;
          }
          if (a2[h8] = decodeURIComponent(m2), g2 || y2) {
            a2[h8] = t2.slice(s2).map(decodeURIComponent).join("/");
            break;
          }
        } else if (e2[s2] !== t2[s2]) {
          r2 = false;
          break;
        }
      return (n2.default === true || r2 !== false) && a2;
    }
    function r(t2, e2) {
      return t2.rank < e2.rank ? 1 : t2.rank > e2.rank ? -1 : t2.index - e2.index;
    }
    function o(t2, e2) {
      return t2.index = e2, t2.rank = p(t2), t2.props;
    }
    function i(t2) {
      return t2.replace(/(^\/+|\/+$)/g, "").split("/");
    }
    function u(t2) {
      return t2.charAt(0) == ":" ? 1 + "*+?".indexOf(t2.charAt(t2.length - 1)) || 4 : 5;
    }
    function a(t2) {
      return i(t2).map(u).join("");
    }
    function p(t2) {
      return t2.props.default ? 0 : a(t2.props.path);
    }
    function c(t2, e2) {
      e2 === void 0 && (e2 = "push"), b && b[e2] ? b[e2](t2) : typeof history != "undefined" && history[e2 + "State"] && history[e2 + "State"](null, null, t2);
    }
    function f() {
      var t2;
      return t2 = b && b.location ? b.location : b && b.getCurrentLocation ? b.getCurrentLocation() : typeof location != "undefined" ? location : x, "" + (t2.pathname || "") + (t2.search || "");
    }
    function l(t2, e2) {
      return e2 === void 0 && (e2 = false), typeof t2 != "string" && t2.url && (e2 = t2.replace, t2 = t2.url), s(t2) && c(t2, e2 ? "replace" : "push"), h7(t2);
    }
    function s(t2) {
      for (var e2 = U.length; e2--; )
        if (U[e2].canRoute(t2))
          return true;
      return false;
    }
    function h7(t2) {
      for (var e2 = false, n2 = 0; n2 < U.length; n2++)
        U[n2].routeTo(t2) === true && (e2 = true);
      for (var r2 = k.length; r2--; )
        k[r2](t2);
      return e2;
    }
    function d(t2) {
      if (t2 && t2.getAttribute) {
        var e2 = t2.getAttribute("href"), n2 = t2.getAttribute("target");
        if (e2 && e2.match(/^\//g) && (!n2 || n2.match(/^_?self$/i)))
          return l(e2);
      }
    }
    function g(t2) {
      if (!(t2.ctrlKey || t2.metaKey || t2.altKey || t2.shiftKey || t2.button !== 0))
        return d(t2.currentTarget || t2.target || this), y(t2);
    }
    function y(t2) {
      return t2 && (t2.stopImmediatePropagation && t2.stopImmediatePropagation(), t2.stopPropagation && t2.stopPropagation(), t2.preventDefault()), false;
    }
    function m(t2) {
      if (!(t2.ctrlKey || t2.metaKey || t2.altKey || t2.shiftKey || t2.button !== 0)) {
        var e2 = t2.target;
        do {
          if ((e2.nodeName + "").toUpperCase() === "A" && e2.getAttribute("href")) {
            if (e2.hasAttribute("native"))
              return;
            if (d(e2))
              return y(t2);
          }
        } while (e2 = e2.parentNode);
      }
    }
    function v() {
      A || (typeof addEventListener == "function" && (b || addEventListener("popstate", function() {
        h7(f());
      }), addEventListener("click", m)), A = true);
    }
    var C = {}, b = null, U = [], k = [], x = {}, A = false, R = function(i2) {
      function u2(t2) {
        i2.call(this, t2), t2.history && (b = t2.history), this.state = {url: t2.url || f()}, v();
      }
      return i2 && (u2.__proto__ = i2), u2.prototype = Object.create(i2 && i2.prototype), u2.prototype.constructor = u2, u2.prototype.shouldComponentUpdate = function(t2) {
        return t2.static !== true || (t2.url !== this.props.url || t2.onChange !== this.props.onChange);
      }, u2.prototype.canRoute = function(e2) {
        return this.getMatchingChildren(t.toChildArray(this.props.children), e2, false).length > 0;
      }, u2.prototype.routeTo = function(t2) {
        this.setState({url: t2});
        var e2 = this.canRoute(t2);
        return this.updating || this.forceUpdate(), e2;
      }, u2.prototype.componentWillMount = function() {
        U.push(this), this.updating = true;
      }, u2.prototype.componentDidMount = function() {
        var t2 = this;
        b && (this.unlisten = b.listen(function(e2) {
          t2.routeTo("" + (e2.pathname || "") + (e2.search || ""));
        })), this.updating = false;
      }, u2.prototype.componentWillUnmount = function() {
        typeof this.unlisten == "function" && this.unlisten(), U.splice(U.indexOf(this), 1);
      }, u2.prototype.componentWillUpdate = function() {
        this.updating = true;
      }, u2.prototype.componentDidUpdate = function() {
        this.updating = false;
      }, u2.prototype.getMatchingChildren = function(i3, u3, a2) {
        return i3.filter(o).sort(r).map(function(r2) {
          var o2 = n(u3, r2.props.path, r2.props);
          if (o2) {
            if (a2 !== false) {
              var i4 = {url: u3, matches: o2};
              return e(i4, o2), delete i4.ref, delete i4.key, t.cloneElement(r2, i4);
            }
            return r2;
          }
        }).filter(Boolean);
      }, u2.prototype.render = function(e2, n2) {
        var r2 = e2.children, o2 = e2.onChange, i3 = n2.url, u3 = this.getMatchingChildren(t.toChildArray(r2), i3, true), a2 = u3[0] || null, p2 = this.previousUrl;
        return i3 !== p2 && (this.previousUrl = i3, typeof o2 == "function" && o2({router: this, url: i3, previous: p2, active: u3, current: a2})), a2;
      }, u2;
    }(t.Component), K = function(n2) {
      return t.createElement("a", e({onClick: g}, n2));
    }, E = function(e2) {
      return t.createElement(e2.component, e2);
    };
    return R.subscribers = k, R.getCurrentUrl = f, R.route = l, R.Router = R, R.Route = E, R.Link = K, R.exec = n, R;
  });
});

// node_modules/preact-router/match.js
var require_match = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  exports2.Link = exports2.Match = void 0;
  var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var _preact = require_preact();
  var _preactRouter = require_preact_router();
  function _objectWithoutProperties(obj, keys) {
    var target = {};
    for (var i in obj) {
      if (keys.indexOf(i) >= 0)
        continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i))
        continue;
      target[i] = obj[i];
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Match = exports2.Match = function(_Component) {
    _inherits(Match2, _Component);
    function Match2() {
      var _temp, _this, _ret;
      _classCallCheck(this, Match2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function(url) {
        _this.nextUrl = url;
        _this.setState({});
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    Match2.prototype.componentDidMount = function componentDidMount() {
      _preactRouter.subscribers.push(this.update);
    };
    Match2.prototype.componentWillUnmount = function componentWillUnmount() {
      _preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
    };
    Match2.prototype.render = function render2(props) {
      var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(), path = url.replace(/\?.+$/, "");
      this.nextUrl = null;
      return props.children({
        url,
        path,
        matches: (0, _preactRouter.exec)(path, props.path, {}) !== false
      });
    };
    return Match2;
  }(_preact.Component);
  var Link2 = function Link3(_ref) {
    var activeClassName = _ref.activeClassName, path = _ref.path, props = _objectWithoutProperties(_ref, ["activeClassName", "path"]);
    return (0, _preact.h)(Match, {path: path || props.href}, function(_ref2) {
      var matches = _ref2.matches;
      return (0, _preact.h)(_preactRouter.Link, _extends({}, props, {class: [props.class || props.className, matches && activeClassName].filter(Boolean).join(" ")}));
    });
  };
  exports2.Link = Link2;
  exports2.default = Match;
  Match.Link = Link2;
});

// src/index.tsx
var import_preact6 = __toModule(require_preact());

// src/components/App/index.tsx
var import_preact5 = __toModule(require_preact());

// src/components/shared/SiteHeader/index.tsx
var import_preact = __toModule(require_preact());
var import_match = __toModule(require_match());
var SiteHeader = class extends import_preact.Component {
  render() {
    return /* @__PURE__ */ import_preact.h("nav", {
      id: "site-header"
    }, /* @__PURE__ */ import_preact.h("div", {
      class: "inner"
    }, /* @__PURE__ */ import_preact.h(import_match.Link, {
      href: "/",
      class: "logo"
    }, "Bitcoin Bot"), /* @__PURE__ */ import_preact.h("div", {
      class: "nav-items flex-row flex-center"
    })));
  }
};
var SiteHeader_default = SiteHeader;

// src/components/Routes.tsx
var import_preact4 = __toModule(require_preact());
var import_preact_router = __toModule(require_preact_router());

// src/components/Dashboard/index.tsx
var import_preact3 = __toModule(require_preact());

// src/components/shared/Graph/index.tsx
var import_preact2 = __toModule(require_preact());

// src/components/shared/Graph/CanvasDrawingContext.js
var CanvasDrawingContext = class {
  constructor(context) {
    __publicField(this, "ctx");
    console.log("ctx", context);
    this.ctx = context;
  }
  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
  createGradient(x, y, w, h7, colors) {
    let gradient = this.ctx.createLinearGradient(x, y, x + w, y + h7);
    for (let i in colors) {
      gradient.addColorStop(i / colors.length, colors[i]);
    }
    return gradient;
  }
  drawLine(x, y, x2, y2, color, width) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x2, y2);
    if (width) {
      this.ctx.lineWidth = width;
    }
    if (color) {
      this.ctx.strokeStyle = color;
    }
    this.ctx.stroke();
  }
  drawRect(x, y, w, h7, color, gradient) {
    this.ctx.save();
    this.ctx.beginPath();
    if (gradient) {
      this.ctx.fillStyle = this.createGradient(x, y, w, h7, gradient);
    } else if (color) {
      this.ctx.fillStyle = color;
    }
    this.ctx.fillRect(x, y, w, h7);
    this.ctx.stroke();
    this.ctx.restore();
  }
  drawRectGradient(x, y, x2, y2) {
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
  }
  drawCircle(x, y, radius, border, color, gradient) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    if (gradient) {
      this.ctx.fillStyle = this.createGradient(x, y, radius * 2, radius * 2, gradient);
    } else if (color) {
      this.ctx.fillStyle = color;
    }
    this.ctx.fill();
    this.ctx.lineWidth = border;
    this.ctx.strokeStyle = "#123";
    this.ctx.stroke();
    this.ctx.restore();
  }
  drawText(text, x, y, angle, font, color) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.textAlign = "center";
    if (font)
      this.ctx.font = font;
    if (angle) {
      this.ctx.rotate(angle * (Math.PI / 180));
    }
    if (color) {
      this.ctx.fillStyle = color;
    }
    this.ctx.fillText(text, 0, 0);
    this.ctx.restore();
  }
};
var CanvasDrawingContext_default = CanvasDrawingContext;

// src/components/shared/Graph/Graph.js
var Graph = class extends CanvasDrawingContext_default {
  constructor(canvasContext, width, height) {
    super(canvasContext);
    __publicField(this, "data");
    __publicField(this, "zoomLevel", 1);
    __publicField(this, "xMin");
    __publicField(this, "xMax");
    __publicField(this, "yMin");
    __publicField(this, "yMax");
    __publicField(this, "widgets", []);
    __publicField(this, "chartStyle", "line");
    __publicField(this, "fontColor", "#ffffff");
    __publicField(this, "textXOffset", 0);
    __publicField(this, "textYOffset", -5);
    __publicField(this, "axesLineWidth", 4);
    __publicField(this, "axesPadding", 40);
    __publicField(this, "axesFont", "16px sans-serif");
    __publicField(this, "axesColor", "#228855");
    __publicField(this, "graphFont", "12px sans-serif");
    __publicField(this, "dataMargin", 10);
    __publicField(this, "barWidth");
    __publicField(this, "pointRadius", 7);
    __publicField(this, "pointColor", "#ffd452");
    __publicField(this, "pointBorder", 1);
    __publicField(this, "lineColor", "#898a6d");
    __publicField(this, "gradientColor", ["#ffd452", "#898a6d", "#544a7d"]);
    this.width = width;
    this.height = height;
  }
  setData(data) {
    this.data = data;
    this.xMin = 1;
    this.xMax = data.length;
  }
  getData() {
    return this.data;
  }
  setMinMax(min, max) {
    this.yMin = min;
    this.yMax = max;
  }
  setZoomLevel() {
  }
  addWidget(widget) {
    this.widgets.push(widget);
  }
  resize(width, height) {
    this.width = width;
    this.height = height;
    this.render();
  }
  render() {
    this.clear();
    this.renderAxes();
    this.renderData();
    this.renderWidgets();
  }
  renderAxes() {
    this.drawLine(0 + this.axesPadding + this.axesLineWidth / 2, 0 + this.axesPadding, 0 + this.axesPadding + this.axesLineWidth / 2, 0 + this.height - this.axesPadding, this.axesColor, this.axesLineWidth);
    this.drawText("Time", 0 + this.width / 2 - this.axesPadding / 2, 0 + this.height - this.axesPadding / 2, 0, this.axesFont, this.fontColor);
    this.drawText(this.xMin, 0 + this.axesPadding, 0 + this.height - this.axesPadding / 2, 0, this.graphFont, this.fontColor);
    this.drawText(this.xMax, 0 + this.width - this.axesPadding, 0 + this.height - this.axesPadding / 2, 0, this.graphFont, this.fontColor);
    this.drawLine(0 + this.axesPadding, 0 + this.height - this.axesPadding - this.axesLineWidth / 2, 0 + this.width - this.axesPadding, 0 + this.height - this.axesPadding - this.axesLineWidth / 2, this.axesColor, this.axesLineWidth);
    this.drawText("Value", 0 + this.axesPadding / 2, 0 + this.height / 2 - this.axesPadding / 2, 90, this.axesFont, this.fontColor);
    this.drawText(this.yMin, 0 + this.axesPadding / 2, 0 + this.height - this.axesPadding - 20, 90, this.graphFont, this.fontColor);
    this.drawText(this.yMax, 0 + this.axesPadding / 2, 0 + this.axesPadding + 20, 90, this.graphFont, this.fontColor);
  }
  renderData() {
    let xStart = 0 + this.axesPadding + this.axesLineWidth;
    let yStart = 0 + this.height - this.axesPadding - this.axesLineWidth;
    let drawData = (i, point, dataWidth, nextPt) => {
      let xPos = i * dataWidth;
      let yHeight = this.height * ((point.y - this.yMin) / (this.yMax - this.yMin)) - this.axesPadding * 2 - this.axesLineWidth / 2;
      let textXOffset = this.textXOffset;
      let textYOffset = this.textYOffset;
      let center = xStart + xPos + this.dataMargin + (dataWidth - this.dataMargin) / 2;
      switch (this.chartStyle) {
        case "bar":
          if (this.barWidth) {
            this.drawRect(center - this.barWidth / 2, yStart - yHeight, this.barWidth, yHeight, null, this.gradientColor);
          } else {
            this.drawRect(xStart + xPos + this.dataMargin, yStart - yHeight, dataWidth - this.dataMargin, yHeight, null, this.gradientColor);
          }
          break;
        case "point":
          this.drawCircle(center + this.pointRadius / 2, yStart - yHeight, this.pointRadius, this.pointBorder, this.pointColor, this.gradientColor);
          textYOffset = textYOffset - this.pointRadius;
          textXOffset = textXOffset + this.pointRadius / 2;
          break;
        case "line":
          let xEnd = center + dataWidth - this.pointRadius / 2;
          let yEnd = yStart - yHeight;
          textYOffset = textYOffset - this.pointRadius;
          textXOffset = textXOffset + this.pointRadius / 2;
          if (nextPt) {
            let nextYHeight = this.height * ((nextPt.y - this.yMin) / (this.yMax - this.yMin)) - this.axesPadding * 2 - this.axesLineWidth / 2;
            yEnd = yStart - nextYHeight;
            this.drawLine(center + this.pointRadius / 2, yStart - yHeight, xEnd, yEnd, this.lineColor);
          }
          this.drawCircle(center + this.pointRadius / 2, yStart - yHeight, this.pointRadius, this.pointBorder, this.pointColor, this.gradientColor);
          break;
        default:
          throw "chartStyle not supported.";
      }
      this.drawText(point.y.toString(), center + textXOffset, yStart - yHeight + textYOffset, 0, this.graphFont, this.fontColor);
    };
    if (this.data) {
      let dl = this.data.length;
      let dataWidth = (this.width - this.axesPadding * 2 - this.dataMargin - this.axesLineWidth) / dl;
      for (let i = 0; i < dl; i++) {
        let p = this.data[i];
        drawData(i, p, dataWidth, i < dl ? this.data[i + 1] : null);
      }
    }
  }
  renderWidgets() {
    for (let i in this.widgets) {
      this.widgets[i].update(this);
      this.widgets[i].render(this);
    }
  }
};
var Graph_default = Graph;

// src/components/shared/Graph/widgets/MinMaxAvgWidget.js
var MinMaxAvgWidget = class {
  constructor() {
    __publicField(this, "minimum", Number.MAX_VALUE);
    __publicField(this, "maximum", 0);
    __publicField(this, "average");
    __publicField(this, "minLineColor", "#aa2244");
    __publicField(this, "minLineWidth", 2);
    __publicField(this, "avgLineColor", "#5555cc");
    __publicField(this, "avgLineWidth", 2);
    __publicField(this, "maxLineColor", "#22aa44");
    __publicField(this, "maxLineWidth", 2);
  }
  update(g) {
    let data = g.getData();
    let total = 0;
    for (var i = 0; i < data.length; i++) {
      let d = data[i];
      if (d.y < this.minimum)
        this.minimum = d.y;
      if (d.y > this.maximum)
        this.maximum = d.y;
      total += d.y;
    }
    this.average = total / data.length;
  }
  render(g) {
    let xStart = g.axesPadding + g.axesLineWidth;
    let xEnd = g.width - g.axesPadding;
    let yStart = g.height - g.axesPadding - g.axesLineWidth / 2 + 1;
    let yDist = g.yMax - g.yMin;
    let minYPerc = (this.minimum - g.yMin) / yDist;
    let avgYPerc = (this.average - g.yMin) / yDist;
    let maxYPerc = (this.maximum - g.yMin) / yDist;
    let minYPos = g.height * minYPerc - g.axesPadding * 2 - g.axesLineWidth / 2;
    let avgYPos = g.height * avgYPerc - g.axesPadding * 2 - g.axesLineWidth / 2;
    let maxYPos = g.height * maxYPerc - g.axesPadding * 2 - g.axesLineWidth / 2;
    g.drawLine(xStart, yStart - maxYPos - g.axesLineWidth + this.minLineWidth / 2, xEnd, yStart - maxYPos - g.axesLineWidth + this.minLineWidth / 2, this.maxLineColor, this.maxLineWidth);
    g.drawText(this.maximum, xEnd, yStart - maxYPos - g.textOffset, null, g.graphFont, this.maxLineColor);
    g.drawLine(xStart, yStart - avgYPos - g.axesLineWidth + this.avgLineWidth / 2, xEnd, yStart - avgYPos - g.axesLineWidth + this.avgLineWidth / 2, this.avgLineColor, this.avgLineWidth);
    g.drawText(this.average, xEnd, yStart - avgYPos - g.textOffset, null, g.graphFont, this.avgLineColor);
    g.drawLine(xStart, yStart - minYPos - g.axesLineWidth + this.maxLineWidth / 2, xEnd, yStart - minYPos - g.axesLineWidth + this.maxLineWidth / 2, this.minLineColor, this.minLineWidth);
    g.drawText(this.minimum, xEnd, yStart - minYPos - g.textOffset, null, g.graphFont, this.minLineColor);
  }
};
var MinMaxAvgWidget_default = MinMaxAvgWidget;

// src/components/shared/Graph/index.tsx
var GraphPage = class extends import_preact2.Component {
  constructor() {
    super(...arguments);
    this.container = import_preact2.createRef();
    this.canvas = import_preact2.createRef();
    this.graph = void 0;
    this.state = {
      loading: true
    };
  }
  componentWillMount() {
    this.bindEvents();
  }
  setDimensions() {
    let w = this.container.current.offsetWidth;
    let h7 = this.container.current.offsetHeight;
    if (this.props.minWidth) {
      w = Math.max([w, this.props.minWidth]);
    }
    if (this.props.minHeight) {
      h7 = Math.max([h7, this.props.minHeight]);
    }
    this.canvas.current.setAttribute("width", w);
    this.canvas.current.setAttribute("height", h7);
    this.graph.resize(w, h7);
  }
  bindEvents() {
    window.onresize = (e) => this.setDimensions();
  }
  async componentDidMount() {
    this.graph = new Graph_default(this.canvas.current.getContext("2d"));
    this.setDimensions();
    let data = await this.props.getData();
    this.graph.setData(data);
    this.graph.setMinMax(35e3, 55e3);
    this.graph.addWidget(new MinMaxAvgWidget_default());
    this.setState({loading: false});
  }
  render() {
    if (this.graph)
      this.graph.render();
    return /* @__PURE__ */ import_preact2.h("div", {
      class: "graph",
      ref: this.container
    }, this.state.loading && /* @__PURE__ */ import_preact2.h("div", null, "Loading..."), /* @__PURE__ */ import_preact2.h("canvas", {
      ref: this.canvas,
      style: `opacity: ${this.state.loading ? 0 : 1}`
    }));
  }
};
var Graph_default2 = GraphPage;

// src/components/Dashboard/index.tsx
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var Dashboard = class extends import_preact3.Component {
  constructor() {
    super();
    this.state = {};
  }
  loadData() {
    return new Promise((resolve, reject) => {
      let pointCount = 20;
      let data = [];
      for (let i = 0; i < pointCount; i++) {
        data.push({x: i, y: getRandomInt(4e4, 5e4)});
      }
      return resolve(data);
    });
  }
  render() {
    return /* @__PURE__ */ import_preact3.h("div", {
      class: "page",
      id: "dashboard"
    }, /* @__PURE__ */ import_preact3.h("div", {
      class: "container"
    }, /* @__PURE__ */ import_preact3.h(Graph_default2, {
      getData: this.loadData
    })));
  }
};
var Dashboard_default = Dashboard;

// src/components/Routes.tsx
var Routes = class extends import_preact4.Component {
  render() {
    return /* @__PURE__ */ import_preact4.h(import_preact_router.default, null, /* @__PURE__ */ import_preact4.h(Dashboard_default, {
      path: "/"
    }));
  }
};
var Routes_default = Routes;

// src/components/App/index.tsx
var App = class extends import_preact5.Component {
  render() {
    return /* @__PURE__ */ import_preact5.h("div", {
      id: "app"
    }, /* @__PURE__ */ import_preact5.h("div", {
      class: "content-wrapper"
    }, /* @__PURE__ */ import_preact5.h(SiteHeader_default, null), /* @__PURE__ */ import_preact5.h("div", {
      class: "page-wrapper"
    }, /* @__PURE__ */ import_preact5.h(Routes_default, null))));
  }
};
var App_default = App;

// src/index.tsx
var app = document.getElementById("app");
if (app) {
  import_preact6.render(/* @__PURE__ */ import_preact6.h(App_default, null), app, app);
} else {
  alert("Couldn't find app mount point.");
}
