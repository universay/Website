"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974], {
    88279: function (e, r, t) {
      var n = t(35944),
        i = t(67294),
        a = t(70917),
        o = t(79808),
        c = t(70131),
        s = t(95577),
        l = t(2804),
        u = t(1880);

      function d(e, r, t) {
        return r in e ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[r] = t, e
      }

      function f(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })))), n.forEach((function (r) {
            d(e, r, t[r])
          }))
        }
        return e
      }

      function h(e, r) {
        return r || (r = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(r)
          }
        }))
      }

      function v() {
        var e = h(["\n          text-transform: ", ";\n        "]);
        return v = function () {
          return e
        }, e
      }

      function p() {
        var e = h(["\n              text-transform: uppercase;\n            "]);
        return p = function () {
          return e
        }, e
      }
      var y = {
          container: (0, a.iv)("position:relative;display:flex;flex-wrap:wrap;justify-content:flex-start;backface-visibility:hidden;transform:translateZ(0);"),
          word: (0, a.iv)("position:relative;display:inline-flex;justify-content:flex-start;white-space:nowrap;backface-visibility:hidden;transform:translateZ(0);"),
          char: (0, a.iv)("position:relative;display:block;padding:0 0.1em;margin-right:-0.1em;margin-left:-0.1em;overflow:hidden;transform:translateZ(0);backface-visibility:hidden;"),
          charInner: (0, a.iv)("display:block;white-space:pre;opacity:0;transition:transform 1.8s ", o.Y.EaseOutExpo, ",opacity 0.1s linear;transform:translateY(50%) translateZ(0);backface-visibility:hidden;[data-is-text-animating='true'] &{opacity:1;transform:translateZ(0);}")
        },
        b = function (e) {
          var r = e.containerCSS,
            t = e.charInterval,
            o = void 0 === t ? .01 : t,
            c = e.delay,
            s = void 0 === c ? 0 : c,
            l = e.isPlaying,
            u = void 0 !== l && l,
            d = e.textTransform,
            h = e.children,
            b = e.elementType,
            m = void 0 === b ? "p" : b,
            g = e.isWordMode,
            w = void 0 !== g && g,
            x = e.hasAriaLabel,
            O = void 0 === x || x,
            I = (0, i.useState)([]),
            k = I[0],
            S = I[1];
          (0, i.useEffect)((function () {
            var e = [],
              r = s,
              t = h.split(" "),
              n = 0;
            if (w)
              for (var i = 0, c = t.length; i < c; i++) {
                var l = {
                  type: "char",
                  char: t[i],
                  delay: r,
                  charIndex: n++
                };
                l.charCSS = (0, a.iv)(v(), d), e.push(l), r += o, i !== c - 1 && (e.push({
                  type: "char",
                  char: " ",
                  delay: r,
                  charIndex: n++
                }), r += o)
              } else
                for (var u = 0, f = t.length; u < f; u++) {
                  for (var y = t[u], b = {
                      type: "word",
                      chars: []
                    }, m = 0, g = y.length; m < g; m++) {
                    var x = {
                      type: "char",
                      char: y.charAt(m),
                      delay: r,
                      charIndex: n++
                    };
                    "capitalize" === d && 0 === m && (x.charCSS = (0, a.iv)(p())), b.chars.push(x), r += o
                  }
                  u !== f - 1 && (b.chars.push({
                    type: "char",
                    char: " ",
                    delay: r,
                    charIndex: n++
                  }), r += o), e.push(b)
                }
            S(e)
          }), [h, o, s, d]);
          var j = d && "capitalize" !== d ? (0, a.iv)("text-transform:", d, ";") : null,
            C = {};
          return O && (C["aria-label"] = h), (0, n.tZ)(m, f({
            css: [y.container, r, j],
            "aria-label": h,
            "data-is-text-animating": u
          }, C, {
            children: k.map((function (e, r) {
              return "word" === e.type ? (0, n.tZ)("span", {
                css: y.word,
                "data-animation-text-word": !0,
                children: e.chars.map((function (e) {
                  return (0, n.tZ)("span", {
                    "aria-hidden": !0,
                    css: [y.char, e.charCSS],
                    "data-animation-text-char": !0,
                    children: (0, n.tZ)("span", {
                      css: y.charInner,
                      style: {
                        transitionDelay: "".concat(e.delay, "s")
                      },
                      children: e.char
                    })
                  }, "char".concat(e.charIndex))
                }))
              }, "word".concat(r)) : (0, n.tZ)("span", {
                "aria-hidden": !0,
                css: [y.char, e.charCSS],
                "data-animation-text-char-spacle": !0,
                children: (0, n.tZ)("span", {
                  css: y.charInner,
                  style: {
                    transitionDelay: "".concat(e.delay, "s")
                  },
                  children: e.char
                })
              }, "char".concat(e.charIndex))
            }))
          }))
        },
        m = (0, i.memo)(b),
        g = function (e) {
          var r = e.containerCSS,
            t = e.charInterval,
            a = void 0 === t ? .02 : t,
            o = e.lineInterval,
            d = void 0 === o ? .1 : o,
            h = e.delay,
            v = void 0 === h ? 0 : h,
            p = e.textTransform,
            y = e.textLines,
            b = e.textLineElementType,
            g = void 0 === b ? "p" : b,
            w = e.elementType,
            x = void 0 === w ? "div" : w,
            O = e.hasAriaLabel,
            I = void 0 !== O && O,
            k = e.isAriaLabelOnContainer,
            S = void 0 !== k && k,
            j = e.isLinesIntervalFixedMode,
            C = void 0 !== j && j,
            V = e.withIntersectionObserver,
            Z = void 0 === V || V,
            E = e.isPlaying,
            M = void 0 !== E && E,
            P = (0, l.sJ)(s.c.isInTransition),
            _ = (0, c.YD)({
              skip: !Z || P,
              triggerOnce: !0,
              rootMargin: u._o
            }),
            A = _.ref,
            T = _.inView,
            L = Z ? T : M,
            R = (0, i.useMemo)((function () {
              var e = [],
                r = v;
              if (C) {
                var t = !0,
                  n = !1,
                  i = void 0;
                try {
                  for (var o, c = y[Symbol.iterator](); !(t = (o = c.next()).done); t = !0) {
                    o.value;
                    e.push(r), r += d
                  }
                } catch (b) {
                  n = !0, i = b
                } finally {
                  try {
                    t || null == c.return || c.return()
                  } finally {
                    if (n) throw i
                  }
                }
              } else {
                var s = !0,
                  l = !1,
                  u = void 0;
                try {
                  for (var f, h = y[Symbol.iterator](); !(s = (f = h.next()).done); s = !0) {
                    var p = f.value;
                    e.push(r), r += a * p.str.length + d
                  }
                } catch (b) {
                  l = !0, u = b
                } finally {
                  try {
                    s || null == h.return || h.return()
                  } finally {
                    if (l) throw u
                  }
                }
              }
              return e
            }), [y, v, a, C]),
            z = {};
          return I && S && (z["aria-label"] = y.map((function (e) {
            return e.str
          })).join(" ")), (0, n.tZ)(x, f({
            ref: A,
            css: r
          }, z, {
            children: y.map((function (e, r) {
              return (0, n.tZ)(m, {
                isPlaying: L,
                textTransform: p,
                charInterval: a,
                delay: R[r],
                elementType: g,
                isWordMode: e.isWordMode,
                hasAriaLabel: I && !S,
                children: e.str
              }, r)
            }))
          }))
        };
      r.Z = (0, i.memo)(g)
    },
    96832: function (e, r, t) {
      var n = t(35944),
        i = t(67294),
        a = t(70917),
        o = t(79808),
        c = t(27577);

      function s() {
        var e, r, t = (e = ["\n        opacity: 1 !important;\n        transition-delay: ", "s;\n        transform: none !important;\n      "], r || (r = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(r)
          }
        })));
        return s = function () {
          return t
        }, t
      }
      var l = {
          container: (0, a.iv)("position:relative;opacity:0;transition:transform 1.2s ", o.Y.EaseOutExpo, ",opacity 0.4s linear;transform:translateY(10px);", c.fO.LG, "{transform:translateY(20px);}")
        },
        u = (0, i.forwardRef)((function (e, r) {
          var t = e.containerCSS,
            i = e.delay,
            o = void 0 === i ? 0 : i,
            c = e.isPlaying,
            u = void 0 !== c && c,
            d = e.children,
            f = e.elementType,
            h = void 0 === f ? "div" : f,
            v = u ? (0, a.iv)(s(), o) : null;
          return (0, n.tZ)(h, {
            css: [l.container, v, t],
            ref: r,
            children: d
          })
        }));
      r.Z = (0, i.memo)(u)
    },
    70131: function (e, r, t) {
      t.d(r, {
        YD: function () {
          return v
        }
      });
      var n = t(67294);

      function i() {
        return i = Object.assign || function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }, i.apply(this, arguments)
      }

      function a(e, r) {
        return a = Object.setPrototypeOf || function (e, r) {
          return e.__proto__ = r, e
        }, a(e, r)
      }
      var o = new Map,
        c = new WeakMap,
        s = 0,
        l = void 0;

      function u(e) {
        return Object.keys(e).sort().filter((function (r) {
          return void 0 !== e[r]
        })).map((function (r) {
          return r + "_" + ("root" === r ? (t = e.root) ? (c.has(t) || (s += 1, c.set(t, s.toString())), c.get(t)) : "0" : e[r]);
          var t
        })).toString()
      }

      function d(e, r, t, n) {
        if (void 0 === t && (t = {}), void 0 === n && (n = l), "undefined" === typeof window.IntersectionObserver && void 0 !== n) {
          var i = e.getBoundingClientRect();
          return r(n, {
              isIntersecting: n,
              target: e,
              intersectionRatio: "number" === typeof t.threshold ? t.threshold : 0,
              time: 0,
              boundingClientRect: i,
              intersectionRect: i,
              rootBounds: i
            }),
            function () {}
        }
        var a = function (e) {
            var r = u(e),
              t = o.get(r);
            if (!t) {
              var n, i = new Map,
                a = new IntersectionObserver((function (r) {
                  r.forEach((function (r) {
                    var t, a = r.isIntersecting && n.some((function (e) {
                      return r.intersectionRatio >= e
                    }));
                    e.trackVisibility && "undefined" === typeof r.isVisible && (r.isVisible = a), null == (t = i.get(r.target)) || t.forEach((function (e) {
                      e(a, r)
                    }))
                  }))
                }), e);
              n = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), t = {
                id: r,
                observer: a,
                elements: i
              }, o.set(r, t)
            }
            return t
          }(t),
          c = a.id,
          s = a.observer,
          d = a.elements,
          f = d.get(e) || [];
        return d.has(e) || d.set(e, f), f.push(r), s.observe(e),
          function () {
            f.splice(f.indexOf(r), 1), 0 === f.length && (d.delete(e), s.unobserve(e)), 0 === d.size && (s.disconnect(), o.delete(c))
          }
      }
      var f = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

      function h(e) {
        return "function" !== typeof e.children
      }
      n.Component;

      function v(e) {
        var r = void 0 === e ? {} : e,
          t = r.threshold,
          i = r.delay,
          a = r.trackVisibility,
          o = r.rootMargin,
          c = r.root,
          s = r.triggerOnce,
          l = r.skip,
          u = r.initialInView,
          f = r.fallbackInView,
          h = r.onChange,
          v = n.useRef(),
          p = n.useRef(),
          y = n.useState({
            inView: !!u
          }),
          b = y[0],
          m = y[1];
        p.current = h;
        var g = n.useCallback((function (e) {
          void 0 !== v.current && (v.current(), v.current = void 0), l || e && (v.current = d(e, (function (e, r) {
            m({
              inView: e,
              entry: r
            }), p.current && p.current(e, r), r.isIntersecting && s && v.current && (v.current(), v.current = void 0)
          }), {
            root: c,
            rootMargin: o,
            threshold: t,
            trackVisibility: a,
            delay: i
          }, f))
        }), [Array.isArray(t) ? t.toString() : t, c, o, s, l, a, f, i]);
        n.useEffect((function () {
          v.current || !b.entry || s || l || m({
            inView: !!u
          })
        }));
        var w = [g, b.inView, b.entry];
        return w.ref = w[0], w.inView = w[1], w.entry = w[2], w
      }
    }
  }
]);