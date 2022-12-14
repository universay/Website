"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [149], {
    35149: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return te
        }
      });
      var r = n(35944),
        i = n(67294),
        o = n(11163),
        a = n(70917),
        c = n(57592),
        s = n(95577),
        l = n(2804),
        u = n(1880),
        d = n(6668),
        f = n(41664),
        p = n.n(f),
        h = n(20386),
        m = n(27577),
        v = n(79808),
        g = {
          container: [h.Fp, (0, a.iv)("position:relative;width:50%;height:calc(100% / 3);border-top-style:solid;border-top-width:1px;&:nth-of-type(-n + 3){border-right-style:solid;border-right-width:1px;}&:nth-of-type(3n + 1){border-top:none;}", m.fO.LG, "{width:auto;border:none !important;&:nth-of-type(-n + 3){margin-right:18px;}}")],
          inner: (0, a.iv)("display:flex;flex-wrap:nowrap;align-items:center;justify-content:flex-start;width:100%;height:100%;padding-left:10px;font-size:12px;font-weight:700;text-transform:uppercase;white-space:nowrap;transition:color 0.2s linear;&::before{", h._M, "      position:absolute;top:0;left:0;width:100%;height:100%;content:'';transition:transform 0.8s ", v.Y.EaseOutExpo, ",background-color 0.2s linear,color 0.2s linear;transform:scaleX(0);transform-origin:top left;}/* stylelint-disable no-descending-specificity */\n    ", m.Zh.LG, "{padding:0 28px 0 4px;font-size:12px;&::before{display:none;}[data-whatintent='mouse'] &:not([data-is-disabled='true']):hover,[data-whatintent='pointer'] &:not([data-is-disabled='true']):hover{span::before{transform:scaleX(1);}}}", m.Zh.XL2, "{font-size:14px;}[data-whatintent='mouse'] &:not([data-is-disabled='true']):hover,[data-whatintent='pointer'] &:not([data-is-disabled='true']):hover{transition:color 0.1s linear;&::before{transform:scaleX(1);}}[data-color-type='dark'][data-whatintent='mouse'] &,[data-color-type='dark'][data-whatintent='pointer'] &{&:not([data-is-disabled='true']):hover{color:", m.cB.DARK_BASE_COLOR, ";}}[data-color-type='light'][data-whatintent='mouse'] &,[data-color-type='light'][data-whatintent='pointer'] &{&:not([data-is-disabled='true']):hover{color:", m.cB.LIGHT_BASE_COLOR, ";}}/* stylelint-enable no-descending-specificity */"),
          label: (0, a.iv)("position:relative;z-index:1;display:block;white-space:nowrap;", m.Zh.LG, "{&::before{", h._M, "        position:absolute;top:-5px;left:-5px;z-index:-1;width:calc(100% + 10px);height:calc(100% + 10px);content:'';transition:transform 0.8s ", v.Y.EaseOutExpo, ",background-color 0.2s linear,color 0.2s linear;transform:scaleX(0);transform-origin:top left;}}"),
          labelDisabled: (0, a.iv)("&::after{", h.DZ, "      position:absolute;top:0;right:-4px;bottom:0;left:-4px;height:2px;margin:auto;content:'';border-style:solid;border-width:0.5px;}")
        },
        x = function (e) {
          var t = e.label,
            n = e.href,
            i = e.isCurrent,
            o = void 0 !== i && i,
            a = e.containerCSS,
            c = e.disabled,
            d = void 0 !== c && c,
            f = (0, l.Zl)(s.c.cursorType);
          return (0, r.tZ)("li", {
            css: [g.container, a],
            children: d ? (0, r.tZ)("div", {
              css: g.inner,
              "data-is-disabled": "true",
              children: (0, r.tZ)("span", {
                css: [g.label, g.labelDisabled],
                children: t
              })
            }) : (0, r.tZ)(p(), {
              passHref: !0,
              href: n,
              scroll: !1,
              children: (0, r.tZ)("a", {
                css: g.inner,
                "aria-current": o ? "page" : "false",
                onMouseEnter: function () {
                  f(u.E.HOVER)
                },
                onMouseLeave: function () {
                  f(u.E.DEFAULT)
                },
                target: t === u.Bg.FOUNDERS.navigationLabel || t === u.Bg.HISTORY.navigationLabel ? "_blank" : void 0,
                children: (0, r.tZ)("span", {
                  css: g.label,
                  children: t
                })
              })
            })
          })
        },
        b = (0, i.memo)(x),
        w = n(45454),
        y = {
          container: [h.DZ, (0, a.iv)("position:relative;width:100%;border-top-style:solid;border-top-width:1px;")],
          topBlock: (0, a.iv)("position:relative;", m.fO.LG, "{display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between;width:100%;height:130px;}"),
          leadBlock: (0, a.iv)("position:relative;padding:14px 8px 12px 100px;", m.Zh.LG, "{width:calc(100% - 324px);max-width:900px;padding:30px 46px 30px 135px;}", m.Zh.XL2, "{width:calc(100% - 366px);}"),
          logo: (0, a.iv)("position:absolute;top:50%;left:14px;width:73px;transform:translateY(-50%);", m.fO.LG, "{left:30px;width:84px;}"),
          leadTextBlock: (0, a.iv)("position:relative;"),
          leadTextBlockTitle: (0, a.iv)("position:relative;width:125px;margin-bottom:8px;background:url('/img/tagline.png') no-repeat center;background-size:contain;transition:color 0.2s linear;&::before{display:block;width:100%;padding-top:", 12.5, "%;content:'';}[data-color-type='dark'] &{background-image:url('/img/taglineDark.png');}", m.fO.LG, "{width:170px;}span{", m.Al, "      position:absolute;top:0;left:0;width:100%;}"),
          leadTextBlockDescription: (0, a.iv)("font-size:10px;line-height:1.2;text-transform:uppercase;letter-spacing:0em;white-space:nowrap;transition:color 0.2s linear;", m.fO.LG, "{font-size:14px;line-height:1.5;}"),
          nav: [h.Fp, (0, a.iv)("border-top-style:solid;border-top-width:1px;ul{display:flex;flex-direction:column;flex-wrap:wrap;height:105px;}", m.Zh.LG, "{width:324px;border:none;ul{height:78px;}}", m.Zh.XL2, "{width:366px;}")],
          bottomBlock: [h.Fp, (0, a.iv)("position:relative;border-top-style:solid;border-top-width:1px;", m.fO.LG, "{display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;height:78px;}")],
          sns: [h.Fp, (0, a.iv)("position:relative;display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;height:35px;border-bottom-style:solid;border-bottom-width:1px;", m.fO.LG, "{position:absolute;left:30px;border:none;}")],
          snsLink: (0, a.iv)("position:relative;height:100%;font-size:12px;text-transform:uppercase;/* \n    &:not(:first-of-type){margin-left:0.6em;}*/\n\n    a{display:flex;flex-direction:column;flex-wrap:nowrap;align-items:center;justify-content:center;height:100%;padding:0 0.4em;transition:color 0.2s linear;}", m.fO.SM, "{&:not(:first-of-type){margin-left:0.6em;}}", m.fO.LG, "{font-size:14px;}"),
          copyright: (0, a.iv)("height:35px;padding-left:10px;font-size:10px;line-height:35px;text-transform:uppercase;letter-spacing:-0.02em;transition:color 0.2s linear;", m.fO.LG, "{font-size:14px;}"),
          scrollTopButton: (0, a.iv)("position:absolute;right:0;bottom:0;display:flex;flex-direction:column;flex-wrap:nowrap;align-items:center;justify-content:center;height:35px;padding:10px;font-size:10px;text-transform:uppercase;letter-spacing:-0.02em;transition:color 0.2s linear;", m.fO.LG, "{top:0;right:20px;height:50px;margin:auto;font-size:14px;}")
        },
        k = function () {
          var e = (0, o.useRouter)(),
            t = (0, l.Zl)(s.c.cursorType),
            n = function () {
              t(u.E.HOVER)
            },
            i = function () {
              t(u.E.DEFAULT)
            };
          return (0, r.BX)("footer", {
            id: "footer",
            css: y.container,
            children: [(0, r.BX)("div", {
              css: y.topBlock,
              children: [(0, r.BX)("div", {
                css: y.leadBlock,
                children: [(0, r.tZ)(w.Z, {
                  containerCSS: y.logo
                }), (0, r.BX)("div", {
                  css: y.leadTextBlock,
                  children: [(0, r.tZ)("p", {
                    css: y.leadTextBlockTitle,
                    children: (0, r.tZ)("span", {
                      children: "???????????????????????????"
                    })
                  }), (0, r.tZ)("div", {
                    css: y.leadTextBlockDescription,
                    children: (0, r.BX)("p", {
                      children: ["You needn't limit yourself. Even at this moment, ", (0, r.tZ)("br", {}), "you can evolve into whatever you desire."]
                    })
                  })]
                })]
              }), (0, r.tZ)("nav", {
                css: y.nav,
                children: (0, r.tZ)("ul", {
                  children: u.wY.map((function (t, n) {
                    return (0, r.tZ)(b, {
                      label: t.navigationLabel,
                      href: t.href,
                      isCurrent: e.pathname === t.href,
                      disabled: t.disabled
                    }, n)
                  }))
                })
              })]
            }), (0, r.BX)("div", {
              css: y.bottomBlock,
              children: [(0, r.BX)("div", {
                css: y.sns,
                children: [(0, r.tZ)("div", {
                  css: y.snsLink,
                  children: (0, r.tZ)("a", {
                    href: u.PD.DISCORD,
                    target: "_blank",
                    rel: "noreferrer",
                    onMouseEnter: n,
                    onMouseLeave: i,
                    children: "Discord"
                  })
                }), (0, r.tZ)("div", {
                  css: y.snsLink,
                  children: (0, r.tZ)("a", {
                    href: u.PD.TWITTER,
                    target: "_blank",
                    rel: "noreferrer",
                    onMouseEnter: n,
                    onMouseLeave: i,
                    children: "Twitter"
                  })
                }), (0, r.tZ)("div", {
                  css: y.snsLink,
                  children: (0, r.tZ)("a", {
                    href: u.PD.INSTAGRAM,
                    target: "_blank",
                    rel: "noreferrer",
                    onMouseEnter: n,
                    onMouseLeave: i,
                    children: "Instagram"
                  })
                }), (0, r.tZ)("div", {
                  css: y.snsLink,
                  children: (0, r.tZ)("a", {
                    href: u.PD.DOCS,
                    target: "_blank",
                    rel: "noreferrer",
                    onMouseEnter: n,
                    onMouseLeave: i,
                    children: "Docs"
                  })
                }), (0, r.tZ)("div", {
                  css: y.snsLink,
                  children: (0, r.tZ)("a", {
                    href: u.PD.OPEN_PROCESSING,
                    target: "_blank",
                    rel: "noreferrer",
                    onMouseEnter: n,
                    onMouseLeave: i,
                    children: "OpenProcessing"
                  })
                })]
              }), (0, r.tZ)("p", {
                css: y.copyright,
                children: "\xa92022 Kumaleon"
              }), (0, r.tZ)("button", {
                type: "button",
                "aria-label": "scroll to page top",
                css: y.scrollTopButton,
                onClick: function () {
                  (0, d.X5)(0)
                },
                onMouseEnter: n,
                onMouseLeave: i,
                children: "Top"
              })]
            })]
          })
        },
        O = (0, i.memo)(k),
        Z = n(70131),
        L = n(34061),
        M = n(72753);

      function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function A(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }

      function B(e) {
        return function (e) {
          if (Array.isArray(e)) return S(e)
        }(e) || function (e) {
          if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function (e, t) {
          if (!e) return;
          if ("string" === typeof e) return S(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(n);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
        }(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function I() {
        var e = A(["\n        height: ", "px;\n        font-size: ", "px;\n      "]);
        return I = function () {
          return e
        }, e
      }

      function R() {
        var e = A(["\n            flex-direction: row;\n          "]);
        return R = function () {
          return e
        }, e
      }

      function D() {
        var e = A(["\n            flex-direction: row-reverse;\n          "]);
        return D = function () {
          return e
        }, e
      }
      var _ = "/img/footerTickerGenArt.png",
        j = Math.ceil(5),
        T = B(new Array(25)).map((function (e, t) {
          return t
        })),
        X = {
          container: (0, a.iv)("position:relative;display:flex;flex-direction:inherit;flex-wrap:nowrap;align-items:center;justify-content:flex-start;font-weight:900;text-transform:uppercase;"),
          text: (0, a.iv)("position:relative;display:block;height:100%;padding:0.1em 0.14em 0;&:nth-of-type(1){color:", m.cB.DARK_BASE_COLOR, ";}&:nth-of-type(3){color:", m.cB.LIGHT_BASE_COLOR, ";-webkit-text-stroke:1px ", m.cB.DARK_BASE_COLOR, ";}"),
          logoMark: (0, a.iv)("position:relative;display:block;height:100%;svg{display:block;width:1.0625em;height:100%;fill:", m.cB.DARK_BASE_COLOR, ";}")
        },
        G = 172,
        P = (0, i.forwardRef)((function (e, t) {
          var n = e.genArtIndices,
            o = (0, l.sJ)(s.c.simpleLayoutMode),
            c = (0, l.sJ)(s.c.detectWebpSupportedPromise),
            d = (0, i.useState)(""),
            f = d[0],
            p = d[1],
            h = o === u._d.SM ? 32 : 80,
            m = (0, i.useMemo)((function () {
              return (0, a.iv)(I(), 1.2 * h, h)
            }), [h]),
            v = function (e) {
              var t = e % 5,
                n = Math.floor(e / 5);
              return {
                x: -t * G,
                y: -n * G - 16
              }
            },
            g = (0, i.useMemo)((function () {
              return {
                imageWidth: 860,
                imageHeight: G * j,
                offset0: v(n[0]),
                offset1: v(n[1])
              }
            }), [n]);
          return (0, i.useEffect)((function () {
            c && c.then((function (e) {
              p(e ? _.replace(".png", ".webp") : _)
            }))
          }), [c]), (0, r.BX)("div", {
            css: [X.container, m],
            ref: t,
            children: [(0, r.tZ)("span", {
              css: X.text,
              children: "Kumaleon"
            }), (0, r.tZ)("span", {
              css: X.logoMark,
              children: (0, r.BX)("svg", {
                viewBox: "0 0 202 140",
                children: [(0, r.tZ)("use", {
                  xlinkHref: "#logoMarkOutline"
                }), (0, r.tZ)("image", {
                  mask: "url(#commonLogoMarkMask)",
                  x: g.offset0.x,
                  y: g.offset0.y,
                  width: g.imageWidth,
                  height: g.imageHeight,
                  href: f
                })]
              })
            }), (0, r.tZ)("span", {
              css: X.text,
              children: "Kumaleon"
            }), (0, r.tZ)("span", {
              css: X.logoMark,
              children: (0, r.BX)("svg", {
                viewBox: "0 0 202 140",
                children: [(0, r.tZ)("use", {
                  xlinkHref: "#logoMarkOutline"
                }), (0, r.tZ)("image", {
                  mask: "url(#commonLogoMarkMask)",
                  x: g.offset1.x,
                  y: g.offset1.y,
                  width: g.imageWidth,
                  height: g.imageHeight,
                  href: f
                })]
              })
            })]
          })
        })),
        C = (0, i.memo)(P),
        z = {
          container: (0, a.iv)("display:flex;flex-wrap:nowrap;align-items:center;justify-content:flex-start;width:100%;[data-is-ticker-playing='true'] &{will-change:transform;}")
        },
        H = (0, i.forwardRef)((function (e, t) {
          var n = e.numInnerItems,
            o = e.itemIndex,
            c = e.posX,
            s = e.dir,
            l = e.getGenArtIndices,
            u = (0, i.useRef)(null),
            d = (0, i.useState)([]),
            f = d[0],
            p = d[1],
            h = (0, i.useMemo)((function () {
              return 1 === s ? (0, a.iv)(R()) : (0, a.iv)(D())
            }), [s]),
            m = (0, i.useMemo)((function () {
              return {
                transform: "translateX(".concat(-1 * s * c, "px)")
              }
            }), [s, c]),
            v = (0, i.useMemo)((function () {
              for (var e = [], t = 0; t < n; t++) {
                var r = 2 * t;
                if (void 0 === f[r]) break;
                e.push({
                  id: t,
                  index0: f[r],
                  index1: f[r + 1]
                })
              }
              return e
            }), [f]);
          return (0, i.useEffect)((function () {
            var e = f.length;
            p(B(f.slice(2)).concat(B(l(2, 0 === e ? void 0 : f[e - 1]))))
          }), [o]), (0, i.useEffect)((function () {
            var e = f.length,
              t = Math.max(0, 2 * n - e);
            if (0 !== t) {
              var r = B(f).concat(B(l(t, 0 === e ? void 0 : f[e - 1])));
              r.length = 2 * n, p(r)
            }
            f.length > 2 * n && p(f.slice(0, 2 * n))
          }), [n]), (0, r.tZ)("div", {
            css: [z.container, h],
            ref: u,
            style: m,
            children: v.map((function (e, n) {
              var i = {};
              return 0 === n && (i.ref = t), (0, r.tZ)(C, function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                  "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  })))), r.forEach((function (t) {
                    E(e, t, n[t])
                  }))
                }
                return e
              }({
                genArtIndices: [e.index0, e.index1]
              }, i), "indices_".concat(e.id))
            }))
          })
        })),
        F = (0, i.memo)(H),
        Y = {
          container: (0, a.iv)("position:relative;width:100%;padding:100px 0 44px;", m.fO.LG, "{padding:200px 0 64px;}")
        },
        J = function () {
          var e = (0, i.useRef)(T.shuffle()),
            t = (0, i.useRef)([]),
            n = (0, l.sJ)(s.c.simpleLayoutMode),
            o = (0, l.sJ)(s.c.isPageStarted),
            a = (0, i.useState)(0),
            c = a[0],
            d = a[1],
            f = (0, i.useRef)(0),
            p = (0, Z.YD)({
              skip: !o,
              rootMargin: u._o
            }),
            h = p.inView,
            m = p.ref,
            v = function () {
              for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2, r = arguments.length > 1 ? arguments[1] : void 0; t.current.length < n;) t.current = B(t.current).concat(B(e.current));
              return r === t.current[0] && (t.current = B(t.current.slice(1)).concat([t.current[0]])), t.current.splice(0, n)
            },
            g = n === u._d.SM ? .04 : .1;
          return (0, i.useEffect)((function () {
            var e = window.scrollY,
              t = function () {
                var t = window.scrollY,
                  n = t - e,
                  r = Math.min(10, .5 * Math.abs(n));
                d(r), new M.yA(f, {
                  current: .9 * r,
                  ease: M.Au.easeOut,
                  duration: .4,
                  onUpdate: function () {
                    d(f.current)
                  }
                }), e = t
              };
            return window.addEventListener("scroll", t),
              function () {
                window.removeEventListener("scroll", t)
              }
          }), []), (0, r.tZ)(L.Z, {
            containerCSS: Y.container,
            ariaHidden: !0,
            speed: g,
            isPlaying: h,
            ref: m,
            additonalDelta: c,
            onUpdate: function () {
              f.current *= .9, d(f.current)
            },
            children: function (e, t, n, i, o) {
              return (0, r.BX)(r.HY, {
                children: [(0, r.tZ)(F, {
                  numInnerItems: e,
                  itemIndex: t,
                  dir: 1,
                  posX: n,
                  ref: o,
                  getGenArtIndices: v
                }), (0, r.tZ)(F, {
                  numInnerItems: e,
                  itemIndex: t,
                  dir: -1,
                  posX: n,
                  getGenArtIndices: v
                }), (0, r.tZ)(F, {
                  numInnerItems: e,
                  itemIndex: t,
                  dir: 1,
                  posX: n,
                  getGenArtIndices: v
                }), (0, r.tZ)(F, {
                  numInnerItems: e,
                  itemIndex: t,
                  dir: -1,
                  posX: n,
                  getGenArtIndices: v
                }), (0, r.tZ)(F, {
                  numInnerItems: e,
                  itemIndex: t,
                  dir: 1,
                  posX: n,
                  getGenArtIndices: v
                })]
              })
            }
          })
        },
        U = (0, i.memo)(J);

      function W(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function K(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function N(e, t) {
        return function (e) {
          if (Array.isArray(e)) return e
        }(e) || function (e, t) {
          var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != n) {
            var r, i, o = [],
              a = !0,
              c = !1;
            try {
              for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0);
            } catch (s) {
              c = !0, i = s
            } finally {
              try {
                a || null == n.return || n.return()
              } finally {
                if (c) throw i
              }
            }
            return o
          }
        }(e, t) || function (e, t) {
          if (!e) return;
          if ("string" === typeof e) return W(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(n);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return W(e, t)
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var V = {
          type: "tween",
          delay: 1,
          duration: 0,
          ease: "linear"
        },
        q = {
          initial: {
            opacity: 1,
            transition: V
          },
          enter: function (e) {
            return {
              opacity: e,
              transition: V
            }
          },
          leave: {
            opacity: 0,
            transition: V
          }
        },
        $ = (0, a.iv)("position:relative;display:flex;flex-direction:column;flex-grow:1;flex-wrap:nowrap;width:100%;"),
        Q = (0, a.iv)("position:relative;flex-grow:1;width:100%;"),
        ee = function (e) {
          var t = e.children,
            n = e.hasFooter,
            a = void 0 === n || n,
            u = e.hasFooterTicker,
            d = void 0 === u || u,
            f = ((0, o.useRouter)(), (0, l.sJ)(s.c.isRootLoaded)),
            p = (0, l.sJ)(s.c.isModalOpened),
            h = (0, l.sJ)(s.c.isMenuOpened),
            m = N((0, l.FV)(s.c.isPageComponentLoaded), 2),
            v = m[0],
            g = m[1],
            x = (0, l.Zl)(s.c.isPageStarted),
            b = (0, i.useCallback)((function (e) {
              "leave" === e && (g(!1), x(!1))
            }), []),
            w = (0, i.useCallback)((function (e) {
              var t = document.querySelector("#main");
              null === t || void 0 === t || t.focus()
            }), []),
            y = (0, i.useMemo)((function () {
              return !f || v ? 1 : 0
            }), [f, v]),
            k = (0, i.useMemo)((function () {
              var e = {};
              return f && v && !h && !p || (e.inert = "inert"), e
            }), [f, v, h, p]);
          return (0, r.BX)(c.E.div, function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              })))), r.forEach((function (t) {
                K(e, t, n[t])
              }))
            }
            return e
          }({
            variants: q,
            animate: "enter",
            exit: "leave",
            initial: "initial",
            custom: y,
            onAnimationStart: b,
            onAnimationComplete: w,
            css: $
          }, k, {
            children: [(0, r.tZ)("div", {
              css: Q,
              children: t
            }), d && (0, r.tZ)(U, {}), a && (0, r.tZ)(O, {})]
          }))
        },
        te = (0, i.memo)(ee)
    },
    34061: function (e, t, n) {
      var r = n(34051),
        i = n.n(r),
        o = n(35944),
        a = n(67294),
        c = n(70917),
        s = n(95577),
        l = n(2804),
        u = n(12358);

      function d(e, t, n, r, i, o, a) {
        try {
          var c = e[o](a),
            s = c.value
        } catch (l) {
          return void n(l)
        }
        c.done ? t(s) : Promise.resolve(s).then(r, i)
      }
      var f = {
          container: (0, c.iv)("position:relative;width:100%;overflow:hidden;"),
          inner: (0, c.iv)("position:relative;width:100%;overflow:hidden;")
        },
        p = (0, a.forwardRef)((function (e, t) {
          var n = e.containerCSS,
            r = e.children,
            c = e.ariaHidden,
            p = void 0 === c || c,
            h = e.speed,
            m = void 0 === h ? .04 : h,
            v = e.additonalDelta,
            g = void 0 === v ? 0 : v,
            x = e.isPlaying,
            b = e.onUpdate,
            w = void 0 === b ? function () {} : b,
            y = (0, l.sJ)(s.c.windowWidth),
            k = (0, a.useRef)(null),
            O = (0, a.useRef)(null),
            Z = (0, a.useRef)(-1),
            L = (0, a.useRef)(0),
            M = (0, a.useRef)(1),
            S = (0, a.useRef)(1),
            E = (0, a.useRef)(0),
            A = (0, a.useRef)(0),
            B = (0, a.useRef)(0),
            I = (0, a.useState)(1),
            R = I[0],
            D = I[1],
            _ = (0, a.useState)(0),
            j = _[0],
            T = _[1],
            X = (0, a.useState)(0),
            G = X[0],
            P = X[1],
            C = function () {
              k.current && O.current && (M.current = k.current.offsetWidth, S.current = Math.ceil(O.current.offsetWidth / M.current) + 1, D(S.current))
            },
            z = function () {
              var e, t = (e = i().mark((function e() {
                var t;
                return i().wrap((function (e) {
                  for (;;) switch (e.prev = e.next) {
                  case 0:
                    Z.current = requestAnimationFrame(z), t = Date.now(), E.current += (t - L.current) * m + B.current, E.current >= M.current ? (A.current += Math.floor(E.current / M.current), E.current = E.current % M.current, P(A.current)) : T(E.current), L.current = t, w();
                  case 6:
                  case "end":
                    return e.stop()
                  }
                }), e)
              })), function () {
                var t = this,
                  n = arguments;
                return new Promise((function (r, i) {
                  var o = e.apply(t, n);

                  function a(e) {
                    d(o, r, i, a, c, "next", e)
                  }

                  function c(e) {
                    d(o, r, i, a, c, "throw", e)
                  }
                  a(void 0)
                }))
              });
              return function () {
                return t.apply(this, arguments)
              }
            }();
          return (0, a.useEffect)((function () {
            E.current = E.current % M.current, T(E.current)
          }), [G]), (0, a.useEffect)((function () {
            B.current = g
          }), [g]), (0, a.useEffect)((function () {
            return C()
          }), [y]), (0, a.useEffect)((function () {
            return (0, u.D)(.1).then((function () {
                C()
              })),
              function () {
                Z.current && cancelAnimationFrame(Z.current)
              }
          }), []), (0, a.useEffect)((function () {
            Z.current && cancelAnimationFrame(Z.current), x && (L.current = Date.now(), z())
          }), [x]), (0, o.tZ)("div", {
            css: [f.container, n],
            "aria-hidden": p,
            ref: t,
            "data-is-ticker-playing": x,
            children: (0, o.tZ)("div", {
              ref: O,
              css: f.inner,
              children: r(R, G, j, x, k)
            })
          })
        }));
      t.Z = (0, a.memo)(p)
    }
  }
]);