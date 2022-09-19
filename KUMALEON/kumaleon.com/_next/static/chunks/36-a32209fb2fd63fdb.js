"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [36], {
    52e3: function (t, e, n) {
      var i = n(35944),
        r = n(67294),
        a = n(70917),
        o = n(79808),
        s = n(27577);

      function c(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t
      }
      var d = {
          container: (0, a.iv)("position:relative;z-index:2;display:flex;flex-direction:column;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;font-size:12px;font-weight:900;line-height:1;text-transform:uppercase;letter-spacing:-0.01em;", s.fO.LG, "{font-size:22px;}"),
          inner: (0, a.iv)("position:relative;display:flex;flex-direction:column;flex-wrap:wrap;align-items:inherit;justify-content:flex-start;"),
          bg: (0, a.iv)("position:absolute;top:0;left:0;z-index:-1;display:flex;flex-direction:column;flex-wrap:wrap;align-items:inherit;justify-content:flex-start;pointer-events:none;"),
          word: (0, a.iv)("position:relative;z-index:1;display:block;background-color:", s.cB.DARK_BASE_COLOR, ";transition:transform 0.8s ", o.Y.EaseOutExpo, ";transform:scaleX(0);transform-origin:top left;&::after{position:absolute;top:0;left:0;z-index:0;width:100%;height:100%;content:'';background-color:", s.cB.LIGHT_BASE_COLOR, ";transition:transform 0.8s ", o.Y.EaseOutExpo, ";transform:scale(0);}&:not(:first-of-type) > span{padding-top:0;}&:not(:last-of-type) > span{padding-bottom:0;}[data-is-frame-animating='true'] &{transform:scaleX(1);&::after{transform:scale(1);}}"),
          wordInner: (0, a.iv)("position:relative;z-index:1;display:block;padding:0.2em;transition:transform 1s ", o.Y.EaseOutExpo, ";transform:scale(0.9) translateZ(0);backface-visibility:hidden;[data-is-frame-animating='true'] &{transform:scale(1) translateZ(0);}"),
          wordBg: (0, a.iv)("&::before{position:absolute;top:-1px;right:-1px;bottom:-1px;left:-1px;display:block;content:'';background-color:", s.cB.DARK_BASE_COLOR, ";}"),
          wordInnerBg: (0, a.iv)("transform:none !important;")
        },
        h = function (t) {
          var e = t.containerCSS,
            n = t.wordCSS,
            r = t.wordInnerCSS,
            o = t.delay,
            s = void 0 === o ? 0 : o,
            h = t.isPlaying,
            l = void 0 !== h && h,
            f = t.wordBreak,
            u = void 0 !== f && f,
            p = t.hasAriaLabel,
            g = void 0 === p || p,
            m = t.children,
            z = t.elementType,
            v = void 0 === z ? "p" : z,
            w = u ? m.split(" ") : [m],
            x = {};
          g && (x["aria-label"] = m);
          var k = (0, a.iv)("transition-delay:", s, "s;&::after{transition-delay:", s + .4, "s;}"),
            O = (0, a.iv)("transition-delay:", s + .4, "s;");
          return (0, i.BX)(v, function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                i = Object.keys(n);
              "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
              })))), i.forEach((function (e) {
                c(t, e, n[e])
              }))
            }
            return t
          }({
            css: [d.container, e],
            "aria-label": m,
            "data-is-frame-animating": l
          }, x, {
            children: [(0, i.tZ)("span", {
              css: d.bg,
              "aria-hidden": !0,
              children: w.map((function (t, e) {
                return (0, i.tZ)("span", {
                  css: [d.word, k, d.wordBg, n],
                  children: (0, i.tZ)("span", {
                    css: [d.wordInner, d.wordInnerBg, r],
                    children: t
                  })
                }, "text".concat(e))
              }))
            }), (0, i.tZ)("span", {
              css: [d.inner],
              children: w.map((function (t, e) {
                return (0, i.tZ)("span", {
                  "aria-hidden": !0,
                  css: [d.word, k, n],
                  children: (0, i.tZ)("span", {
                    css: [d.wordInner, O, r],
                    children: t
                  })
                }, "text".concat(e))
              }))
            })]
          }))
        };
      e.Z = (0, r.memo)(h)
    },
    80262: function (t, e, n) {
      var i = n(35944),
        r = n(67294),
        a = n(70917),
        o = n(70131),
        s = n(95577),
        c = n(2804),
        d = n(27577),
        h = n(52e3),
        l = n(20386),
        f = n(1880),
        u = {
          container: (0, a.iv)("position:relative;display:block;"),
          inner: (0, a.iv)("position:absolute;top:0;left:0;display:block;width:100%;height:100%;"),
          title: (0, a.iv)("position:absolute;top:85px;left:10px;z-index:2;", d.fO.LG, "{top:152px;left:20px;}"),
          titleEn: (0, a.iv)("font-size:30px;", d.fO.LG, "{font-size:50px;}"),
          titleEnWordInner: (0, a.iv)("padding:0.16em 0.2em;"),
          titleJa: (0, a.iv)("margin-top:1px;font-size:16px;font-weight:400;letter-spacing:-0.05em;", d.fO.LG, "{font-size:28px;}"),
          titleJaWordInner: (0, a.iv)("padding:0.2em 0.3em 0.3em;")
        },
        p = function (t) {
          var e = t.containerCSS,
            n = t.children,
            a = t.titleEn,
            d = t.titleJa,
            p = t.titleWordBreak,
            g = void 0 !== p && p,
            m = t.elementType,
            z = void 0 === m ? "div" : m,
            v = t.minHeight,
            w = void 0 === v ? "windowHeight" : v,
            x = t.maxHeight,
            k = void 0 === x ? "none" : x,
            O = t.renderInner,
            y = t.onChangeInView,
            b = (0, c.sJ)(s.c.isInTransition),
            L = (0, c.sJ)(s.c.windowWidth),
            S = (0, c.sJ)(s.c.windowHeight),
            C = (0, o.YD)({
              skip: b,
              triggerOnce: !0,
              rootMargin: f._o
            }),
            Z = C.inView,
            B = C.ref,
            E = (0, r.useState)({}),
            A = E[0],
            I = E[1],
            P = (0, r.useState)({}),
            _ = P[0],
            R = P[1];
          return (0, r.useEffect)((function () {
            y && y(Z)
          }), [Z]), (0, r.useEffect)((function () {
            var t = {};
            "windowHeight" === w ? ("none" === k || k > S) && (t.minHeight = "".concat(S, "px")) : "none" !== w && (t.minHeight = "".concat(w, "px")), "none" !== k && k < S && (t.height = "".concat(k, "px")), I(t), R({
              height: "".concat(S, "px")
            })
          }), [L, S, w, k]), (0, i.BX)(z, {
            css: [u.container, e],
            ref: B,
            style: A,
            "data-is-mv-playing": Z,
            children: [(0, i.BX)("header", {
              css: u.title,
              children: [(0, i.tZ)(h.Z, {
                wordBreak: g,
                containerCSS: u.titleEn,
                wordInnerCSS: u.titleEnWordInner,
                elementType: "h1",
                isPlaying: Z,
                children: a
              }), (0, i.tZ)(h.Z, {
                wordBreak: g,
                containerCSS: [u.titleJa, l.Qw],
                wordInnerCSS: u.titleJaWordInner,
                delay: .16,
                isPlaying: Z,
                children: d
              })]
            }), (0, i.tZ)("div", {
              css: u.inner,
              style: _,
              children: O && O(Z)
            }), n]
          })
        };
      e.Z = (0, r.memo)(p)
    },
    87036: function (t, e, n) {
      n.d(e, {
        h: function () {
          return C
        }
      });
      var i = n(34051),
        r = n.n(i),
        a = n(35944),
        o = n(70917),
        s = n(67294),
        c = n(2804),
        d = n(52e3),
        h = n(80262),
        l = n(1880),
        f = n(72753),
        u = n(95577),
        p = n(20386),
        g = n(79808),
        m = n(27577);

      function z(t, e, n, i, r, a, o) {
        try {
          var s = t[a](o),
            c = s.value
        } catch (d) {
          return void n(d)
        }
        s.done ? e(c) : Promise.resolve(c).then(i, r)
      }

      function v(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise((function (i, r) {
            var a = t.apply(e, n);

            function o(t) {
              z(a, i, r, o, s, "next", t)
            }

            function s(t) {
              z(a, i, r, o, s, "throw", t)
            }
            o(void 0)
          }))
        }
      }
      var w = Math.ceil(5 / 3),
        x = 272,
        k = 816,
        O = x * w,
        y = {
          width: 1230,
          height: x,
          charSize: {
            o: {
              width: 266,
              height: 256
            },
            k: {
              width: 232,
              height: 256
            },
            a: {
              width: 272,
              height: 256
            },
            z: {
              width: 193,
              height: 256
            }
          },
          charPos: {
            o: {
              x: 3,
              y: 0
            },
            k: {
              x: 289,
              y: 0
            },
            a: {
              x: 529,
              y: 0
            },
            z1: {
              x: 816,
              y: 0
            },
            z2: {
              x: 1033,
              y: 0
            }
          }
        },
        b = function (t, e) {
          var n = t % 3,
            i = Math.floor(t / 3),
            r = x;
          return {
            x: -272 * n - .5 * (r - y.charSize[e].width),
            y: -272 * i - .5 * (r - y.charSize[e].height)
          }
        },
        L = {
          o: b(0, "o"),
          k: b(1, "k"),
          a: b(2, "a"),
          z1: b(3, "z"),
          z2: b(4, "z")
        },
        S = {
          o: "1258857",
          k: "1044009",
          a: "1585800",
          z1: "1527151",
          z2: "1297418"
        },
        C = {
          container: (0, o.iv)("position:relative;height:22px;overflow:hidden;background-color:", m.cB.DARK_BASE_COLOR, ";border-radius:11px;transition:transform 0.6s ", g.Y.EaseOutExpo, ";transform:scale(0);transform-origin:center left;&::before{position:absolute;top:0;left:0;z-index:1;display:block;width:100%;height:100%;pointer-events:none;content:'';border:1px solid ", m.cB.DARK_BASE_COLOR, ";border-radius:inherit;}&::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;content:'';background-color:", m.cB.LIGHT_BASE_COLOR, ";border-radius:inherit;transition:transform 0.6s ", g.Y.EaseOutExpo, ";transform:scale(0);}", m.fO.LG, "{height:40px;border-radius:20px;}"),
          inner: (0, o.iv)("position:relative;z-index:2;display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;height:100%;padding:0 0.6em;overflow:hidden;font-size:12px;font-weight:900;text-transform:uppercase;border-radius:inherit;& > svg{position:relative;z-index:2;display:block;margin-right:0.3em;fill:", m.cB.DARK_BASE_COLOR, ";transition:fill 0.2s linear;}& > span{position:relative;z-index:2;display:block;transition:color 0.2s linear;}&::before{position:absolute;top:0;left:0;z-index:1;display:block;width:100%;height:100%;pointer-events:none;content:'';background-color:", m.cB.DARK_BASE_COLOR, ";border-radius:inherit;transition:transform 0.8s ", g.Y.EaseOutExpo, ";transform:translateX(-100%);transform-origin:top left;}[data-whatintent='mouse'] &:hover,[data-whatintent='pointer'] &:hover{& > svg{fill:", m.cB.LIGHT_BASE_COLOR, ";transition:color 0.1s linear;}& > span{color:", m.cB.LIGHT_BASE_COLOR, ";transition:color 0.1s linear;}&::before{transform:translateX(0);}}", m.fO.LG, "{padding:0 0.8em;font-size:20px;& > svg{margin-right:0.4em;}}"),
          snsLinkIconTwitter: (0, o.iv)("width:10px;height:8px;", m.fO.LG, "{width:15px;height:13px;}"),
          snsLinkIconOpenProcessing: (0, o.iv)("width:11px;height:9px;", m.fO.LG, "{width:17px;height:14px;}"),
          snsLinkIconFoundation: (0, o.iv)("width:19px;height:7px;", m.fO.LG, "{width:29px;height:10px;}")
        },
        Z = function (t) {
          var e = t.href,
            n = t.isPlaying,
            i = t.children,
            r = t.delay,
            s = t.containerCSS,
            d = (0, c.Zl)(u.c.cursorType),
            h = n ? (0, o.iv)("transition-delay:", r, "s;transform:scale(1);&::after{transition-delay:", r + .3, "s;transform:scale(1);}") : null;
          return (0, a.tZ)("div", {
            css: [C.container, h, s],
            children: (0, a.tZ)("a", {
              css: C.inner,
              href: e,
              target: "_blank",
              rel: "noreferrer",
              onMouseEnter: function () {
                d(l.E.HOVER)
              },
              onMouseLeave: function () {
                d(l.E.DEFAULT)
              },
              children: i
            })
          })
        },
        B = {
          mvOkazzLogoChar: (0, o.iv)("position:absolute;top:0;height:100%;user-select:none;backface-visibility:hidden;transform:translateZ(0);&::before{display:block;width:100%;content:'';}svg{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden;transform:translateZ(0);}image{transition:opacity 0.2s linear;}"),
          mvOkazzLogoCharZ: (0, o.iv)("width:", y.charSize.z.width / y.width * 100, "%;&::before{/* stylelint-disable-next-line scss/operator-no-newline-after */\n      padding-top:", y.charSize.z.height / y.charSize.z.width * 100, "%;}")
        },
        E = {
          mvGenArtContainer: (0, o.iv)("position:absolute;top:15px;bottom:15px;left:0;width:100%;pointer-events:none;", m.fO.LG, "{top:30px;bottom:30px;}"),
          mvLogoWrapper: (0, o.iv)("position:absolute;top:50%;right:0;left:0;z-index:2;width:94.5%;max-width:1222px;margin-right:auto;margin-left:auto;transform:translateY(-50%) translateZ(0);backface-visibility:hidden;", m.fO.SM, "{width:90%;}", m.fO.MD, "{width:86%;}", m.fO.LG, "{width:80;}", m.fO.XL, "{width:76.375%;}"),
          mvDescription: (0, o.iv)("position:absolute;top:calc(100% + 58px);left:1%;width:23.2em;font-size:10px;font-weight:700;line-height:1.2;text-transform:uppercase;transition:opacity 0.2s linear;[data-focused-char='o'] &,[data-focused-char='k'] &,[data-focused-char='a'] &,[data-focused-char='z1'] &,[data-focused-char='z2'] &{opacity:0;}", m.fO.SM, "{top:calc(100% + 10px);right:0;left:auto;margin-top:-0.25em;font-size:10px;line-height:1.5;transform:scale(0.8);transform-origin:top right;}", m.fO.MD, "{transform:none;}", m.fO.LG, "{font-size:12px;}"),
          mvCopy: (0, o.iv)("position:absolute;top:calc(100% + 10px);left:1%;font-size:14px;font-weight:900;line-height:1.29;text-transform:uppercase;white-space:nowrap;transition:opacity 0.2s linear;[data-focused-char='o'] &,[data-focused-char='k'] &,[data-focused-char='a'] &,[data-focused-char='z1'] &,[data-focused-char='z2'] &{opacity:0;}", m.fO.SM, "{top:calc(100% + 10px);left:0;margin-top:-0.135em;font-size:14px;line-height:1.27;transform:none;}", m.fO.MD, "{font-size:16px;}", m.fO.LG, "{font-size:18px;}", m.fO.XL, "{font-size:22px;}"),
          mvOkazzLogo: (0, o.iv)("position:relative;width:100%;height:100%;&::before{display:block;width:100%;padding-top:", y.height / y.width * 100, "%;content:'';}"),
          mvOkazzLogoInner: (0, o.iv)("position:absolute;top:0;left:0;display:flex;flex-wrap:nowrap;width:100%;height:100%;"),
          mvOkazzLogoCharO: [B.mvOkazzLogoChar, (0, o.iv)("left:", y.charPos.o.x / y.width * 100, "%;width:", y.charSize.o.width / y.width * 100, "%;&::before{/* stylelint-disable-next-line scss/operator-no-newline-after */\n        padding-top:", y.charSize.o.height / y.charSize.o.width * 100, "%;}[data-focused-char='k'] & image,[data-focused-char='a'] & image,[data-focused-char='z1'] & image,[data-focused-char='z2'] & image{opacity:0;}[data-focused-char='k'] & use{stroke:#000;}")],
          mvOkazzLogoCharK: [B.mvOkazzLogoChar, (0, o.iv)("left:", y.charPos.k.x / y.width * 100, "%;width:", y.charSize.k.width / y.width * 100, "%;&::before{/* stylelint-disable-next-line scss/operator-no-newline-after */\n        padding-top:", y.charSize.k.height / y.charSize.k.width * 100, "%;}[data-focused-char='o'] & image,[data-focused-char='a'] & image,[data-focused-char='z1'] & image,[data-focused-char='z2'] & image{opacity:0;}[data-focused-char='k'] & use{stroke:#000;}")],
          mvOkazzLogoCharA: [B.mvOkazzLogoChar, (0, o.iv)("left:", y.charPos.a.x / y.width * 100, "%;width:", y.charSize.a.width / y.width * 100, "%;&::before{/* stylelint-disable-next-line scss/operator-no-newline-after */\n        padding-top:", y.charSize.a.height / y.charSize.a.width * 100, "%;}[data-focused-char='o'] & image,[data-focused-char='k'] & image,[data-focused-char='z1'] & image,[data-focused-char='z2'] & image{opacity:0;}[data-focused-char='k'] & use{stroke:#000;}")],
          mvOkazzLogoCharZ1: [B.mvOkazzLogoChar, B.mvOkazzLogoCharZ, (0, o.iv)("left:", y.charPos.z1.x / y.width * 100, "%;[data-focused-char='o'] & image,[data-focused-char='k'] & image,[data-focused-char='a'] & image,[data-focused-char='z2'] & image{opacity:0;}[data-focused-char='k'] & use{stroke:#000;}")],
          mvOkazzLogoCharZ2: [B.mvOkazzLogoChar, B.mvOkazzLogoCharZ, (0, o.iv)("left:", y.charPos.z2.x / y.width * 100, "%;[data-focused-char='o'] & image,[data-focused-char='k'] & image,[data-focused-char='a'] & image,[data-focused-char='z1'] & image{opacity:0;}[data-focused-char='k'] & use{stroke:#000;}")],
          mvOkazzLogoCharOutline: (0, o.iv)("fill:transparent;stroke:", m.cB.DARK_BASE_COLOR, ";stroke-width:10px;transition:stroke 0.2s linear;[data-focused-char='o'] &,[data-focused-char='k'] &,[data-focused-char='a'] &,[data-focused-char='z1'] &,[data-focused-char='z2'] &{stroke:#fff;}", m.fO.LG, "{stroke-width:2px;}"),
          bottomLeftLinks: [p.AS.bottomLeftText, (0, o.iv)("z-index:2;display:flex;flex-direction:column;flex-wrap:nowrap;align-items:flex-start;", m.fO.LG, "{flex-direction:row;}")],
          bottomLeftTextItem: (0, o.iv)("position:relative;&:not(:first-of-type){margin-top:8px;}", m.fO.LG, "{margin-top:0 !important;&:not(:first-of-type){margin-left:10px;}}")
        },
        A = function (t) {
          var e = t.genArtImage,
            n = (0, c.sJ)(u.c.simpleLayoutMode),
            i = (0, s.useState)(""),
            o = i[0],
            g = i[1],
            m = (0, s.useRef)(""),
            z = (0, s.useRef)(null),
            w = (0, s.useRef)(0),
            x = (0, s.useRef)(null),
            b = (0, s.useRef)(null),
            B = n === l._d.SM;
          (0, s.useEffect)((function () {
            var t = document.querySelector(".js-genart2 iframe");
            return z.current = t,
              function () {
                t.setAttribute("src", "")
              }
          }), []);
          var A = function () {
              var t = v(r().mark((function t(e) {
                var n;
                return r().wrap((function (t) {
                  for (;;) switch (t.prev = t.next) {
                  case 0:
                    return n = z.current, x.current && window.removeEventListener("message", x.current), t.abrupt("return", new Promise((function (t) {
                      var i = function (n) {
                        "kumaleonGenArtFirstDrawing" === n.data && (window.removeEventListener("message", i), x.current = null, e === m.current ? t(!0) : t(!1))
                      };
                      window.addEventListener("message", i), n.setAttribute("src", "".concat(l.Ld, "/artist/").concat(S[m.current]).concat(l.qr)), x.current = i
                    })));
                  case 3:
                  case "end":
                    return t.stop()
                  }
                }), t)
              })));
              return function (e) {
                return t.apply(this, arguments)
              }
            }(),
            I = function () {
              var t = v(r().mark((function t(e) {
                var n;
                return r().wrap((function (t) {
                  for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (n = z.current, !b.current) {
                      t.next = 4;
                      break
                    }
                    return t.next = 4, b.current;
                  case 4:
                    return b.current = new Promise((function (t) {
                      m.current = e, A(e).then((function (i) {
                        if (!i) return t();
                        g(e), new f.yA(w, {
                          current: 1,
                          ease: f.bJ.easeNone,
                          duration: .2,
                          onUpdate: function () {
                            n && (n.style.opacity = w.current.toString())
                          },
                          onComplete: function () {
                            b.current = null, t()
                          }
                        })
                      }))
                    })), t.abrupt("return", b.current);
                  case 6:
                  case "end":
                    return t.stop()
                  }
                }), t)
              })));
              return function (e) {
                return t.apply(this, arguments)
              }
            }(),
            P = function () {
              var t = v(r().mark((function t() {
                var e;
                return r().wrap((function (t) {
                  for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (e = z.current, m.current = "", g(""), 0 !== w.current) {
                      t.next = 7;
                      break
                    }
                    return b.current = null, e && e.setAttribute("src", ""), t.abrupt("return");
                  case 7:
                    b.current = new Promise((function (t) {
                      new f.yA(w, {
                        current: 0,
                        ease: f.bJ.easeNone,
                        duration: .2,
                        onUpdate: function () {
                          e && (e.style.opacity = w.current.toString())
                        },
                        onComplete: function () {
                          b.current = null, z.current && z.current.setAttribute("src", ""), t()
                        }
                      })
                    }));
                  case 8:
                  case "end":
                    return t.stop()
                  }
                }), t)
              })));
              return function () {
                return t.apply(this, arguments)
              }
            }();
          return (0, a.tZ)(h.Z, {
            titleEn: "Artist Story",
            titleJa: "アーティストストーリー",
            titleWordBreak: B,
            renderInner: function (t) {
              return (0, a.BX)(a.HY, {
                children: [(0, a.tZ)(d.Z, {
                  wordBreak: !0,
                  containerCSS: p.AS.topRightText,
                  wordCSS: p.AS.topRightTextWord,
                  wordInnerCSS: p.AS.wordInner,
                  elementType: "p",
                  isPlaying: t,
                  delay: .4,
                  children: "Generative\xa0artist Creative\xa0Coder"
                }), (0, a.BX)("div", {
                  css: E.bottomLeftLinks,
                  children: [(0, a.BX)(Z, {
                    containerCSS: E.bottomLeftTextItem,
                    isPlaying: t,
                    delay: .4,
                    href: l.lH.TWITTER,
                    children: [(0, a.tZ)("svg", {
                      "aria-hidden": "true",
                      css: C.snsLinkIconTwitter,
                      children: (0, a.tZ)("use", {
                        xlinkHref: "#iconTwitter"
                      })
                    }), (0, a.tZ)("span", {
                      children: "Twitter"
                    })]
                  }), (0, a.BX)(Z, {
                    containerCSS: E.bottomLeftTextItem,
                    isPlaying: t,
                    delay: .4,
                    href: l.lH.OPEN_PROCCESSING,
                    children: [(0, a.tZ)("svg", {
                      "aria-hidden": "true",
                      css: C.snsLinkIconOpenProcessing,
                      children: (0, a.tZ)("use", {
                        xlinkHref: "#iconOpenProcessing"
                      })
                    }), (0, a.tZ)("span", {
                      children: "OpenProcessing"
                    })]
                  }), (0, a.BX)(Z, {
                    containerCSS: E.bottomLeftTextItem,
                    isPlaying: t,
                    delay: .4,
                    href: l.lH.FOUNDATION,
                    children: [(0, a.tZ)("svg", {
                      "aria-hidden": "true",
                      css: C.snsLinkIconFoundation,
                      children: (0, a.tZ)("use", {
                        xlinkHref: "#iconFoundation"
                      })
                    }), (0, a.tZ)("span", {
                      children: "Foundation"
                    })]
                  })]
                })]
              })
            },
            children: (0, a.tZ)("div", {
              "data-focused-char": o,
              children: (0, a.BX)("div", {
                css: E.mvLogoWrapper,
                children: [(0, a.tZ)("p", {
                  css: E.mvOkazzLogo,
                  "aria-label": "OKAZZ",
                  children: (0, a.BX)("span", {
                    css: E.mvOkazzLogoInner,
                    children: [(0, a.tZ)("span", {
                      css: E.mvOkazzLogoCharO,
                      "aria-hidden": "true",
                      onPointerEnter: function () {
                        return I("o")
                      },
                      onPointerLeave: function () {
                        return P()
                      },
                      children: (0, a.BX)("svg", {
                        viewBox: "0 0 ".concat(y.charSize.o.width, " ").concat(y.charSize.o.height),
                        children: [(0, a.tZ)("image", {
                          x: L.o.x,
                          y: L.o.y,
                          width: k,
                          height: O,
                          href: e,
                          mask: "url(#artistOkazzCharOMask)"
                        }), (0, a.tZ)("use", {
                          xlinkHref: "#artistOkazzCharO",
                          css: E.mvOkazzLogoCharOutline,
                          mask: "url(#artistOkazzCharOMask)"
                        })]
                      })
                    }), (0, a.tZ)("span", {
                      css: E.mvOkazzLogoCharK,
                      "aria-hidden": "true",
                      onPointerEnter: function () {
                        return I("k")
                      },
                      onPointerLeave: function () {
                        return P()
                      },
                      children: (0, a.BX)("svg", {
                        viewBox: "0 0 ".concat(y.charSize.k.width, " ").concat(y.charSize.k.height),
                        children: [(0, a.tZ)("image", {
                          x: L.k.x,
                          y: L.k.y,
                          width: k,
                          height: O,
                          href: e,
                          mask: "url(#artistOkazzCharKMask)"
                        }), (0, a.tZ)("use", {
                          xlinkHref: "#artistOkazzCharK",
                          css: E.mvOkazzLogoCharOutline,
                          mask: "url(#artistOkazzCharKMask)"
                        })]
                      })
                    }), (0, a.tZ)("span", {
                      css: E.mvOkazzLogoCharA,
                      "aria-hidden": "true",
                      onPointerEnter: function () {
                        return I("a")
                      },
                      onPointerLeave: function () {
                        return P()
                      },
                      children: (0, a.BX)("svg", {
                        viewBox: "0 0 ".concat(y.charSize.a.width, " ").concat(y.charSize.a.height),
                        children: [(0, a.tZ)("image", {
                          x: L.a.x,
                          y: L.a.y,
                          width: k,
                          height: O,
                          href: e,
                          mask: "url(#artistOkazzCharAMask)"
                        }), (0, a.tZ)("use", {
                          xlinkHref: "#artistOkazzCharA",
                          css: E.mvOkazzLogoCharOutline,
                          mask: "url(#artistOkazzCharAMask)"
                        })]
                      })
                    }), (0, a.tZ)("span", {
                      css: E.mvOkazzLogoCharZ1,
                      "aria-hidden": "true",
                      onPointerEnter: function () {
                        return I("z1")
                      },
                      onPointerLeave: function () {
                        return P()
                      },
                      children: (0, a.BX)("svg", {
                        viewBox: "0 0 ".concat(y.charSize.z.width, " ").concat(y.charSize.z.height),
                        children: [(0, a.tZ)("image", {
                          x: L.z1.x,
                          y: L.z1.y,
                          width: k,
                          height: O,
                          href: e,
                          mask: "url(#artistOkazzCharZMask)"
                        }), (0, a.tZ)("use", {
                          xlinkHref: "#artistOkazzCharZ",
                          css: E.mvOkazzLogoCharOutline,
                          mask: "url(#artistOkazzCharZMask)"
                        })]
                      })
                    }), (0, a.tZ)("span", {
                      css: E.mvOkazzLogoCharZ2,
                      "aria-hidden": "true",
                      onPointerEnter: function () {
                        return I("z2")
                      },
                      onPointerLeave: function () {
                        return P()
                      },
                      children: (0, a.BX)("svg", {
                        viewBox: "0 0 ".concat(y.charSize.z.width, " ").concat(y.charSize.z.height),
                        children: [(0, a.tZ)("image", {
                          x: L.z2.x,
                          y: L.z2.y,
                          width: k,
                          height: O,
                          href: e,
                          mask: "url(#artistOkazzCharZMask)"
                        }), (0, a.tZ)("use", {
                          xlinkHref: "#artistOkazzCharZ",
                          css: E.mvOkazzLogoCharOutline,
                          mask: "url(#artistOkazzCharZMask)"
                        })]
                      })
                    })]
                  })
                }), (0, a.BX)("p", {
                  css: E.mvCopy,
                  children: ["In perpetual search of ", (0, a.tZ)("br", {}), "the cool and the cute."]
                }), (0, a.tZ)("p", {
                  css: E.mvDescription,
                  children: "Using Generative Art to connect with the world, having fun while doing so is more important than anything else."
                })]
              })
            })
          })
        };
      e.Z = (0, s.memo)(A)
    }
  }
]);