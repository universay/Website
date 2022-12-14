(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888], {
      9361: function (e, t) {
        "use strict";
        t.Z = function (e, t, r) {
          t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r;
          return e
        }
      },
      6840: function (e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
          return r(3080)
        }])
      },
      8045: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = r(9361).Z,
          o = r(4941).Z,
          i = r(3929).Z;
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = function (e) {
          var t = e.src,
            r = e.sizes,
            l = e.unoptimized,
            u = void 0 !== l && l,
            g = e.priority,
            y = void 0 !== g && g,
            S = e.loading,
            z = e.lazyRoot,
            R = void 0 === z ? null : z,
            O = e.lazyBoundary,
            A = e.className,
            E = e.quality,
            B = e.width,
            F = e.height,
            I = e.style,
            P = e.objectFit,
            T = e.objectPosition,
            L = e.onLoadingComplete,
            M = e.placeholder,
            Z = void 0 === M ? "empty" : M,
            N = e.blurDataURL,
            D = c(e, ["src", "sizes", "unoptimized", "priority", "loading", "lazyRoot", "lazyBoundary", "className", "quality", "width", "height", "style", "objectFit", "objectPosition", "onLoadingComplete", "placeholder", "blurDataURL"]),
            q = s.useContext(h.ImageConfigContext),
            H = s.useMemo((function () {
              var e = m || q || f.imageConfigDefault,
                t = i(e.deviceSizes).concat(i(e.imageSizes)).sort((function (e, t) {
                  return e - t
                })),
                r = e.deviceSizes.sort((function (e, t) {
                  return e - t
                }));
              return a({}, e, {
                allSizes: t,
                deviceSizes: r
              })
            }), [q]),
            W = D,
            G = r ? "responsive" : "intrinsic";
          "layout" in W && (W.layout && (G = W.layout), delete W.layout);
          var U = j;
          if ("loader" in W) {
            if (W.loader) {
              var V = W.loader;
              U = function (e) {
                e.config;
                var t = c(e, ["config"]);
                return V(t)
              }
            }
            delete W.loader
          }
          var X = "";
          if (function (e) {
              return "object" === typeof e && (w(e) || function (e) {
                return void 0 !== e.src
              }(e))
            }(t)) {
            var Y = w(t) ? t.default : t;
            if (!Y.src) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Y)));
            if (N = N || Y.blurDataURL, X = Y.src, (!G || "fill" !== G) && (F = F || Y.height, B = B || Y.width, !Y.height || !Y.width)) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Y)))
          }
          var J = !y && ("lazy" === S || "undefined" === typeof S);
          ((t = "string" === typeof t ? t : X).startsWith("data:") || t.startsWith("blob:")) && (u = !0, J = !1);
          b.has(t) && (J = !1);
          v && (u = !0);
          var Q, $ = o(s.useState(!1), 2),
            K = $[0],
            ee = $[1],
            te = o(p.useIntersection({
              rootRef: R,
              rootMargin: O || "200px",
              disabled: !J
            }), 3),
            re = te[0],
            ne = te[1],
            oe = te[2],
            ie = !J || ne,
            ae = {
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0
            },
            le = {
              boxSizing: "border-box",
              display: "block",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0
            },
            ue = !1,
            ce = {
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: "border-box",
              padding: 0,
              border: "none",
              margin: "auto",
              display: "block",
              width: 0,
              height: 0,
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: P,
              objectPosition: T
            },
            se = k(B),
            de = k(F),
            fe = k(E);
          0;
          var pe = Object.assign({}, I, ce),
            he = "blur" !== Z || K ? {} : {
              backgroundSize: P || "cover",
              backgroundPosition: T || "0% 0%",
              filter: "blur(20px)",
              backgroundImage: 'url("'.concat(N, '")')
            };
          if ("fill" === G) ae.display = "block", ae.position = "absolute", ae.top = 0, ae.left = 0, ae.bottom = 0, ae.right = 0;
          else if ("undefined" !== typeof se && "undefined" !== typeof de) {
            var ge = de / se,
              ye = isNaN(ge) ? "100%" : "".concat(100 * ge, "%");
            "responsive" === G ? (ae.display = "block", ae.position = "relative", ue = !0, le.paddingTop = ye) : "intrinsic" === G ? (ae.display = "inline-block", ae.position = "relative", ae.maxWidth = "100%", ue = !0, le.maxWidth = "100%", Q = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(se, "%27%20height=%27").concat(de, "%27/%3e")) : "fixed" === G && (ae.display = "inline-block", ae.position = "relative", ae.width = se, ae.height = de)
          } else 0;
          var ve = {
            src: _,
            srcSet: void 0,
            sizes: void 0
          };
          ie && (ve = x({
            config: H,
            src: t,
            unoptimized: u,
            layout: G,
            width: se,
            quality: fe,
            sizes: r,
            loader: U
          }));
          var me = t;
          0;
          var be;
          0;
          var _e = (n(be = {}, "imagesrcset", ve.srcSet), n(be, "imagesizes", ve.sizes), be),
            Se = s.default.useLayoutEffect,
            we = s.useRef(L),
            xe = s.useRef(t);
          s.useEffect((function () {
            we.current = L
          }), [L]), Se((function () {
            xe.current !== t && (oe(), xe.current = t)
          }), [oe, t]);
          var ke = a({
            isLazy: J,
            imgAttributes: ve,
            heightInt: de,
            widthInt: se,
            qualityInt: fe,
            layout: G,
            className: A,
            imgStyle: pe,
            blurStyle: he,
            loading: S,
            config: H,
            unoptimized: u,
            placeholder: Z,
            loader: U,
            srcString: me,
            onLoadingCompleteRef: we,
            setBlurComplete: ee,
            setIntersection: re,
            isVisible: ie,
            noscriptSizes: r
          }, W);
          return s.default.createElement(s.default.Fragment, null, s.default.createElement("span", {
            style: ae
          }, ue ? s.default.createElement("span", {
            style: le
          }, Q ? s.default.createElement("img", {
            style: {
              display: "block",
              maxWidth: "100%",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0
            },
            alt: "",
            "aria-hidden": !0,
            src: Q
          }) : null) : null, s.default.createElement(C, Object.assign({}, ke))), y ? s.default.createElement(d.default, null, s.default.createElement("link", Object.assign({
            key: "__nimg-" + ve.src + ve.srcSet + ve.sizes,
            rel: "preload",
            as: "image",
            href: ve.srcSet ? void 0 : ve.src
          }, _e))) : null)
        };
        var a = r(6495).Z,
          l = r(2648).Z,
          u = r(1598).Z,
          c = r(7273).Z,
          s = u(r(7294)),
          d = l(r(5443)),
          f = r(9309),
          p = r(7190),
          h = r(9977),
          g = (r(3794), r(2392));
        var y = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1
          } || {},
          v = y.experimentalUnoptimized,
          m = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1
          },
          b = new Set,
          _ = (new Map, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
        var S = new Map([
          ["default", function (e) {
            var t = e.config,
              r = e.src,
              n = e.width,
              o = e.quality;
            0;
            if (r.endsWith(".svg") && !t.dangerouslyAllowSVG) return r;
            return "".concat(g.normalizePathTrailingSlash(t.path), "?url=").concat(encodeURIComponent(r), "&w=").concat(n, "&q=").concat(o || 75)
          }],
          ["imgix", function (e) {
            var t = e.config,
              r = e.src,
              n = e.width,
              o = e.quality,
              i = new URL("".concat(t.path).concat(R(r))),
              a = i.searchParams;
            a.set("auto", a.get("auto") || "format"), a.set("fit", a.get("fit") || "max"), a.set("w", a.get("w") || n.toString()), o && a.set("q", o.toString());
            return i.href
          }],
          ["cloudinary", function (e) {
            var t = e.config,
              r = e.src,
              n = e.width,
              o = e.quality,
              i = ["f_auto", "c_limit", "w_" + n, "q_" + (o || "auto")].join(",") + "/";
            return "".concat(t.path).concat(i).concat(R(r))
          }],
          ["akamai", function (e) {
            var t = e.config,
              r = e.src,
              n = e.width;
            return "".concat(t.path).concat(R(r), "?imwidth=").concat(n)
          }],
          ["custom", function (e) {
            var t = e.src;
            throw new Error('Image with src "'.concat(t, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
          }]
        ]);
  
        function w(e) {
          return void 0 !== e.default
        }
  
        function x(e) {
          var t = e.config,
            r = e.src,
            n = e.unoptimized,
            o = e.layout,
            a = e.width,
            l = e.quality,
            u = e.sizes,
            c = e.loader;
          if (n) return {
            src: r,
            srcSet: void 0,
            sizes: void 0
          };
          var s = function (e, t, r, n) {
              var o = e.deviceSizes,
                a = e.allSizes;
              if (n && ("fill" === r || "responsive" === r)) {
                for (var l, u = /(^|\s)(1?\d?\d)vw/g, c = []; l = u.exec(n); l) c.push(parseInt(l[2]));
                if (c.length) {
                  var s, d = .01 * (s = Math).min.apply(s, i(c));
                  return {
                    widths: a.filter((function (e) {
                      return e >= o[0] * d
                    })),
                    kind: "w"
                  }
                }
                return {
                  widths: a,
                  kind: "w"
                }
              }
              return "number" !== typeof t || "fill" === r || "responsive" === r ? {
                widths: o,
                kind: "w"
              } : {
                widths: i(new Set([t, 2 * t].map((function (e) {
                  return a.find((function (t) {
                    return t >= e
                  })) || a[a.length - 1]
                })))),
                kind: "x"
              }
            }(t, a, o, u),
            d = s.widths,
            f = s.kind,
            p = d.length - 1;
          return {
            sizes: u || "w" !== f ? u : "100vw",
            srcSet: d.map((function (e, n) {
              return "".concat(c({
                config: t,
                src: r,
                quality: l,
                width: e
              }), " ").concat("w" === f ? e : n + 1).concat(f)
            })).join(", "),
            src: c({
              config: t,
              src: r,
              quality: l,
              width: d[p]
            })
          }
        }
  
        function k(e) {
          return "number" === typeof e ? e : "string" === typeof e ? parseInt(e, 10) : void 0
        }
  
        function j(e) {
          var t, r = (null == (t = e.config) ? void 0 : t.loader) || "default",
            n = S.get(r);
          if (n) return n(e);
          throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "), ". Received: ").concat(r))
        }
  
        function z(e, t, r, n, o, i) {
          e && e.src !== _ && e["data-loaded-src"] !== t && (e["data-loaded-src"] = t, ("decode" in e ? e.decode() : Promise.resolve()).catch((function () {})).then((function () {
            if (e.parentNode && (b.add(t), "blur" === n && i(!0), null == o ? void 0 : o.current)) {
              var r = e.naturalWidth,
                a = e.naturalHeight;
              o.current({
                naturalWidth: r,
                naturalHeight: a
              })
            }
          })))
        }
        var C = function (e) {
          var t = e.imgAttributes,
            r = (e.heightInt, e.widthInt),
            n = e.qualityInt,
            o = e.layout,
            i = e.className,
            l = e.imgStyle,
            u = e.blurStyle,
            d = e.isLazy,
            f = e.placeholder,
            p = e.loading,
            h = e.srcString,
            g = e.config,
            y = e.unoptimized,
            v = e.loader,
            m = e.onLoadingCompleteRef,
            b = e.setBlurComplete,
            _ = e.setIntersection,
            S = e.onLoad,
            w = e.onError,
            k = (e.isVisible, e.noscriptSizes),
            j = c(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "layout", "className", "imgStyle", "blurStyle", "isLazy", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadingCompleteRef", "setBlurComplete", "setIntersection", "onLoad", "onError", "isVisible", "noscriptSizes"]);
          return p = d ? "lazy" : p, s.default.createElement(s.default.Fragment, null, s.default.createElement("img", Object.assign({}, j, t, {
            decoding: "async",
            "data-nimg": o,
            className: i,
            style: a({}, l, u),
            ref: s.useCallback((function (e) {
              _(e), (null == e ? void 0 : e.complete) && z(e, h, 0, f, m, b)
            }), [_, h, o, f, m, b]),
            onLoad: function (e) {
              z(e.currentTarget, h, 0, f, m, b), S && S(e)
            },
            onError: function (e) {
              "blur" === f && b(!0), w && w(e)
            }
          })), (d || "blur" === f) && s.default.createElement("noscript", null, s.default.createElement("img", Object.assign({}, j, x({
            config: g,
            src: h,
            unoptimized: y,
            layout: o,
            width: r,
            quality: n,
            sizes: k,
            loader: v
          }), {
            decoding: "async",
            "data-nimg": o,
            style: l,
            className: i,
            loading: p
          }))))
        };
  
        function R(e) {
          return "/" === e[0] ? e.slice(1) : e
        }("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
          value: !0
        }), Object.assign(t.default, t), e.exports = t.default)
      },
      7190: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = r(4941).Z;
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.useIntersection = function (e) {
          var t = e.rootRef,
            r = e.rootMargin,
            c = e.disabled || !a,
            s = o.useRef(),
            d = n(o.useState(!1), 2),
            f = d[0],
            p = d[1],
            h = n(o.useState(null), 2),
            g = h[0],
            y = h[1];
          o.useEffect((function () {
            if (a) {
              if (s.current && (s.current(), s.current = void 0), c || f) return;
              return g && g.tagName && (s.current = function (e, t, r) {
                  var n = function (e) {
                      var t, r = {
                          root: e.root || null,
                          margin: e.rootMargin || ""
                        },
                        n = u.find((function (e) {
                          return e.root === r.root && e.margin === r.margin
                        }));
                      if (n && (t = l.get(n))) return t;
                      var o = new Map,
                        i = new IntersectionObserver((function (e) {
                          e.forEach((function (e) {
                            var t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r)
                          }))
                        }), e);
                      return t = {
                        id: r,
                        observer: i,
                        elements: o
                      }, u.push(r), l.set(r, t), t
                    }(r),
                    o = n.id,
                    i = n.observer,
                    a = n.elements;
                  return a.set(e, t), i.observe(e),
                    function () {
                      if (a.delete(e), i.unobserve(e), 0 === a.size) {
                        i.disconnect(), l.delete(o);
                        var t = u.findIndex((function (e) {
                          return e.root === o.root && e.margin === o.margin
                        }));
                        t > -1 && u.splice(t, 1)
                      }
                    }
                }(g, (function (e) {
                  return e && p(e)
                }), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r
                })),
                function () {
                  null == s.current || s.current(), s.current = void 0
                }
            }
            if (!f) {
              var e = i.requestIdleCallback((function () {
                return p(!0)
              }));
              return function () {
                return i.cancelIdleCallback(e)
              }
            }
          }), [g, c, r, t, f]);
          var v = o.useCallback((function () {
            p(!1)
          }), []);
          return [y, f, v]
        };
        var o = r(7294),
          i = r(9311),
          a = "function" === typeof IntersectionObserver;
        var l = new Map,
          u = [];
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
          value: !0
        }), Object.assign(t.default, t), e.exports = t.default)
      },
      638: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = r(6856).Z;
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = function (e, t) {
          var r = a.default,
            i = {
              loading: function (e) {
                e.error, e.isLoading;
                return e.pastDelay, null
              }
            };
          n(e, Promise) ? i.loader = function () {
            return e
          } : "function" === typeof e ? i.loader = e : "object" === typeof e && (i = o({}, i, e));
          if ((i = o({}, i, t)).suspense) throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");
          i.loadableGenerated && delete(i = o({}, i, i.loadableGenerated)).loadableGenerated;
          if ("boolean" === typeof i.ssr && !i.suspense) {
            if (!i.ssr) return delete i.ssr, l(r, i);
            delete i.ssr
          }
          return r(i)
        }, t.noSSR = l;
        var o = r(6495).Z,
          i = r(2648).Z,
          a = (i(r(7294)), i(r(4302)));
  
        function l(e, t) {
          return delete t.webpack, delete t.modules, e(t)
        }("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
          value: !0
        }), Object.assign(t.default, t), e.exports = t.default)
      },
      6319: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.LoadableContext = void 0;
        var n = (0, r(2648).Z)(r(7294)).default.createContext(null);
        t.LoadableContext = n
      },
      4302: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = r(9658).Z,
          o = r(7222).Z;
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = r(6495).Z,
          a = (0, r(2648).Z)(r(7294)),
          l = r(6319),
          u = r(1688).useSyncExternalStore,
          c = [],
          s = [],
          d = !1;
  
        function f(e) {
          var t = e(),
            r = {
              loading: !0,
              loaded: null,
              error: null
            };
          return r.promise = t.then((function (e) {
            return r.loading = !1, r.loaded = e, e
          })).catch((function (e) {
            throw r.loading = !1, r.error = e, e
          })), r
        }
        var p = function () {
          function e(t, r) {
            n(this, e), this._loadFn = t, this._opts = r, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
          }
          return o(e, [{
            key: "promise",
            value: function () {
              return this._res.promise
            }
          }, {
            key: "retry",
            value: function () {
              var e = this;
              this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                pastDelay: !1,
                timedOut: !1
              };
              var t = this._res,
                r = this._opts;
              t.loading && ("number" === typeof r.delay && (0 === r.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function () {
                e._update({
                  pastDelay: !0
                })
              }), r.delay)), "number" === typeof r.timeout && (this._timeout = setTimeout((function () {
                e._update({
                  timedOut: !0
                })
              }), r.timeout))), this._res.promise.then((function () {
                e._update({}), e._clearTimeouts()
              })).catch((function (t) {
                e._update({}), e._clearTimeouts()
              })), this._update({})
            }
          }, {
            key: "_update",
            value: function (e) {
              this._state = i({}, this._state, {
                error: this._res.error,
                loaded: this._res.loaded,
                loading: this._res.loading
              }, e), this._callbacks.forEach((function (e) {
                return e()
              }))
            }
          }, {
            key: "_clearTimeouts",
            value: function () {
              clearTimeout(this._delay), clearTimeout(this._timeout)
            }
          }, {
            key: "getCurrentValue",
            value: function () {
              return this._state
            }
          }, {
            key: "subscribe",
            value: function (e) {
              var t = this;
              return this._callbacks.add(e),
                function () {
                  t._callbacks.delete(e)
                }
            }
          }]), e
        }();
  
        function h(e) {
          return function (e, t) {
            var r = function () {
                if (!c) {
                  var t = new p(e, o);
                  c = {
                    getCurrentValue: t.getCurrentValue.bind(t),
                    subscribe: t.subscribe.bind(t),
                    retry: t.retry.bind(t),
                    promise: t.promise.bind(t)
                  }
                }
                return c.promise()
              },
              n = function () {
                r();
                var e = a.default.useContext(l.LoadableContext);
                e && Array.isArray(o.modules) && o.modules.forEach((function (t) {
                  e(t)
                }))
              },
              o = Object.assign({
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
                suspense: !1
              }, t);
            o.suspense && (o.lazy = a.default.lazy(o.loader));
            var c = null;
            if (!d) {
              var f = o.webpack ? o.webpack() : o.modules;
              f && s.push((function (e) {
                var t = !0,
                  n = !1,
                  o = void 0;
                try {
                  for (var i, a = f[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                    var l = i.value;
                    if (-1 !== e.indexOf(l)) return r()
                  }
                } catch (u) {
                  n = !0, o = u
                } finally {
                  try {
                    t || null == a.return || a.return()
                  } finally {
                    if (n) throw o
                  }
                }
              }))
            }
            var h = o.suspense ? function (e, t) {
              return n(), a.default.createElement(o.lazy, i({}, e, {
                ref: t
              }))
            } : function (e, t) {
              n();
              var r = u(c.subscribe, c.getCurrentValue, c.getCurrentValue);
              return a.default.useImperativeHandle(t, (function () {
                return {
                  retry: c.retry
                }
              }), []), a.default.useMemo((function () {
                return r.loading || r.error ? a.default.createElement(o.loading, {
                  isLoading: r.loading,
                  pastDelay: r.pastDelay,
                  timedOut: r.timedOut,
                  error: r.error,
                  retry: c.retry
                }) : r.loaded ? a.default.createElement((t = r.loaded) && t.__esModule ? t.default : t, e) : null;
                var t
              }), [e, r])
            };
            return h.preload = function () {
              return r()
            }, h.displayName = "LoadableComponent", a.default.forwardRef(h)
          }(f, e)
        }
  
        function g(e, t) {
          for (var r = []; e.length;) {
            var n = e.pop();
            r.push(n(t))
          }
          return Promise.all(r).then((function () {
            if (e.length) return g(e, t)
          }))
        }
        h.preloadAll = function () {
          return new Promise((function (e, t) {
            g(c).then(e, t)
          }))
        }, h.preloadReady = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise((function (t) {
            var r = function () {
              return d = !0, t()
            };
            g(s, e).then(r, r)
          }))
        }, window.__NEXT_PRELOADREADY = h.preloadReady;
        var y = h;
        t.default = y
      },
      6089: function (e, t, r) {
        "use strict";
        e.exports = r(5988)
      },
      3080: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, {
          default: function () {
            return A
          }
        });
        var n, o = r(6042),
          i = r(9396),
          a = r(5893),
          l = r(7294),
          u = r(5152),
          c = r.n(u),
          s = r(9008),
          d = r.n(s),
          f = r(1163),
          p = function (e) {
            var t, r, n;
            return (0, a.jsx)(d(), {
              children: (null === e || void 0 === e || null === (t = e.favicon) || void 0 === t ? void 0 : t.startsWith("http://")) || (null === e || void 0 === e || null === (r = e.favicon) || void 0 === r ? void 0 : r.startsWith("https://")) ? (0, a.jsx)("link", {
                rel: "icon",
                href: e.favicon
              }) : (null === e || void 0 === e ? void 0 : e.favicon) && "string" === typeof e.favicon && 1 === (null === (n = e.favicon) || void 0 === n ? void 0 : n.length) ? (0, a.jsx)("link", {
                rel: "icon",
                href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>".concat(e.favicon, "</text></svg>")
              }) : null
            })
          },
          h = r(5675),
          g = r.n(h),
          y = function () {
            return (0, a.jsx)("a", {
              href: "https://s.super.so/badge",
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, a.jsxs)("div", {
                className: "super-badge",
                children: [(0, a.jsx)(g(), {
                  src: "/images/super-icon.svg",
                  width: 18,
                  height: 18,
                  priority: !0
                }), (0, a.jsx)("span", {
                  children: "Made with Super"
                })]
              })
            })
          },
          v = r(4924),
          m = r(6089),
          b = r.n(m),
          _ = r(8174),
          S = r(2055),
          w = {
            layout: {
              paddingLayout: .6,
              layoutMaxWidth: 900,
              columnSpacing: 46,
              borderThicknessLayout: 1,
              borderTypeLayout: "solid",
              borderRadiiLayout: 5,
              pageDisplay: "unset"
            },
            header: {
              coverHeight: 30,
              titleAlign: "left",
              iconAlign: "-112px auto auto auto",
              display: "block"
            },
            collectionCard: {
              gap: 16,
              shadow: "rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px",
              coverHeightLarge: 200,
              coverHeightMedium: 200,
              coverHeightSmall: 128,
              titleSize: .875,
              coverSizeSmall: 172,
              coverSizeMedium: 260,
              coverSizeLarge: 320,
              iconDisplay: "inline-flex"
            },
            callout: {
              iconDisplay: "block",
              shadow: "none"
            },
            typography: {
              primaryFont: "Inter",
              secondaryFont: "Inter",
              baseSize: 16,
              titleSize: 2.5,
              quoteSize: 1.2,
              headingSize: 1,
              textWeight: "normal",
              headingWeight: "600"
            },
            scrollbar: {
              width: 15
            },
            navbar: {
              height: 56,
              shadow: "rgba(0, 0, 0, 0.12) 0px 10px 20px -6px"
            },
            colors: {
              light: {
                text: "#37352F",
                textLight: "#7d7c78",
                background: "#ffffff",
                borderColor: "#E9E9E7",
                checkboxBackground: "#2EAADC",
                hoverBackground: "#efefef",
                scrollbar: {
                  background: "#FAFAFA",
                  handle: "#C1C1C1",
                  border: "#E8E8E8"
                },
                navbar: {
                  background: "#ffffff",
                  buttonBackground: "#37352F",
                  buttonText: "#ffffff",
                  text: "#37352F"
                },
                footer: {
                  background: "#ffffff",
                  buttonBackground: "#37352F",
                  buttonText: "#ffffff",
                  text: "#37352F"
                },
                database: {
                  cardBackground: "#ffffff",
                  cardHoverBackground: "#f9f9f8",
                  calendarWeekendBackground: "#f7f6f3"
                },
                default: [45, 8, 20],
                gray: [45, 2, 46],
                brown: [19, 31, 47],
                orange: [30, 87, 45],
                yellow: [38, 62, 49],
                green: [149, 31, 39],
                blue: [202, 53, 43],
                purple: [274, 32, 54],
                pink: [328, 48, 53],
                red: [2, 62, 55]
              },
              dark: {
                text: "#e1e1e1",
                textLight: "#9b9b9b",
                background: "#191919",
                borderColor: "#373737",
                checkboxBackground: "#2EAADC",
                hoverBackground: "#262626",
                scrollbar: {
                  background: "#FAFAFA",
                  handle: "#C1C1C1",
                  border: "#E8E8E8"
                },
                navbar: {
                  background: "#191919",
                  buttonBackground: "#e1e1e1",
                  buttonText: "#191919",
                  text: "#e1e1e1"
                },
                footer: {
                  background: "#191919",
                  buttonBackground: "#e1e1e1",
                  buttonText: "#191919",
                  text: "#e1e1e1"
                },
                database: {
                  cardBackground: "#262626",
                  cardHoverBackground: "#2f2f2f",
                  calendarWeekendBackground: "#202020"
                },
                default: [45, 8, 20],
                gray: [0, 0, 61],
                brown: [18, 35, 58],
                orange: [25, 54, 53],
                yellow: [38, 54, 54],
                green: [146, 32, 47],
                blue: [217, 50, 58],
                purple: [270, 55, 62],
                pink: [329, 57, 58],
                red: [1, 69, 60]
              }
            }
          },
          x = (n = {}, (0, v.Z)(n, _.Fe.None, ""), (0, v.Z)(n, _.Fe.Small, "0px 4px 8px -2px"), (0, v.Z)(n, _.Fe.Medium, "0px 10px 20px -6px"), (0, v.Z)(n, _.Fe.Large, "0px 20px 40px -10px"), n),
          k = function (e) {
            var t, r, n, o, i, l = e.records,
              u = e.settings,
              c = e.pageId,
              s = l && l.block ? l.block[c] : null,
              d = !!s && s.smallText,
              f = (null === u || void 0 === u ? void 0 : u.theme) && "string" !== typeof (null === u || void 0 === u ? void 0 : u.theme),
              p = !(null === u || void 0 === u ? void 0 : u.free) && (null === (t = e.settings) || void 0 === t || null === (r = t.code) || void 0 === r || null === (n = r.style) || void 0 === n ? void 0 : n.length) ? e.settings.code.style : null,
              h = f ? u.theme : w,
              g = f ? h.typography.primaryFont : (null === u || void 0 === u ? void 0 : u.fontFamily) || "Inter",
              y = f ? h.typography.secondaryFont : (null === u || void 0 === u ? void 0 : u.fontFamily) || "Inter",
              v = null === u || void 0 === u ? void 0 : u.navbar,
              m = f ? h.navbar.height : (null === v || void 0 === v || null === (o = v.style) || void 0 === o ? void 0 : o.height) || w.navbar.height,
              k = f ? h.navbar.shadow : function (e) {
                if (!e || e.type === _.Fe.None) return "";
                var t = x[e.type];
                return "".concat(t, " ").concat((0, S.ZX)((null === e || void 0 === e ? void 0 : e.color) || "#000", (null === e || void 0 === e ? void 0 : e.opacity) || 12))
              }(null === v || void 0 === v || null === (i = v.style) || void 0 === i ? void 0 : i.shadow);
            return (0, a.jsx)(b(), {
              id: "9af2db70de1bde10",
              dynamic: [h.layout.paddingLayout, h.layout.borderRadiiLayout, h.layout.borderThicknessLayout, h.layout.borderTypeLayout, h.layout.layoutMaxWidth, h.layout.columnSpacing, h.layout.pageDisplay, h.header.coverHeight, h.header.titleAlign, h.header.iconAlign, h.header.display, h.collectionCard.gap, h.collectionCard.shadow, h.collectionCard.titleSize, h.collectionCard.coverHeightSmall, h.collectionCard.coverSizeSmall, h.collectionCard.coverHeightMedium, h.collectionCard.coverSizeMedium, h.collectionCard.coverHeightLarge, h.collectionCard.coverSizeLarge, h.collectionCard.iconDisplay, h.callout.iconDisplay, h.callout.shadow, h.typography.titleSize, h.typography.quoteSize, h.typography.headingSize, g, g, y, y, h.typography.textWeight, h.typography.headingWeight, h.scrollbar.width, m, k, h.typography.baseSize || (d ? "14" : "16"), p ? p.map((function (e) {
                return e.content
              })).join("\n") : ""],
              children: ":root{--padding-layout:".concat(h.layout.paddingLayout, "rem;--border-radii-layout:").concat(h.layout.borderRadiiLayout, "px;--border-thickness-layout:").concat(h.layout.borderThicknessLayout, "px;--border-type-layout:").concat(h.layout.borderTypeLayout, ";--border-layout:var(--border-thickness-layout)\n          var(--border-type-layout) var(--color-border-default);--layout-max-width:").concat(h.layout.layoutMaxWidth, "px;--column-spacing:").concat(h.layout.columnSpacing, "px;--page-display:").concat(h.layout.pageDisplay, ";--padding-right:calc(env(safe-area-inset-right) + 96px);--padding-left:calc(env(safe-area-inset-left) + 96px);--padding-right-mobile:calc(env(safe-area-inset-right) + 24px);--padding-left-mobile:calc(env(safe-area-inset-left) + 24px);--header-cover-height:").concat(h.header.coverHeight, "vh;--header-title-align:").concat(h.header.titleAlign, ";--header-icon-align:").concat(h.header.iconAlign, ";--header-display:").concat(h.header.display, ";--collection-header-border:var(--border-layout);--collection-table-cell-padding:calc(var(--padding-layout) - 0.3rem)\n          calc(var(--padding-layout) - 0.1rem);--collection-list-item-padding:calc(var(--padding-layout) - 0.5rem);--collection-list-item-border-radii:calc(\n          var(--border-radii-layout) - 1px\n        );--collection-card-padding:0px;--collection-card-title-padding:0px;--collection-card-content-padding:var(--padding-layout);--collection-card-border-radii:var(--border-radii-layout);--collection-card-gap:").concat(h.collectionCard.gap, "px;--collection-card-shadow:").concat(h.collectionCard.shadow, ";--collection-card-title-size:").concat(h.collectionCard.titleSize, "rem;--collection-card-cover-height-small:").concat(h.collectionCard.coverHeightSmall, "px;--collection-card-cover-size-small:").concat(h.collectionCard.coverSizeSmall, "px;--collection-card-cover-height-medium:").concat(h.collectionCard.coverHeightMedium, "px;--collection-card-cover-size-medium:").concat(h.collectionCard.coverSizeMedium, "px;--collection-card-cover-height-large:").concat(h.collectionCard.coverHeightLarge, "px;--collection-card-cover-size-large:").concat(h.collectionCard.coverSizeLarge, "px;--collection-card-icon-display:").concat(h.collectionCard.iconDisplay, ";--callout-padding:calc(var(--padding-layout) + 0.4rem)\n          calc(var(--padding-layout) + 0.4rem)\n          calc(var(--padding-layout) + 0.4rem)\n          calc(var(--padding-layout) + 0.1em);--callout-border-radii:calc(var(--border-radii-layout) - 2px);--callout-border:var(--border-layout);--callout-icon-display:").concat(h.callout.iconDisplay, ";--callout-shadow:").concat(h.callout.shadow, ";--file-border-radii:calc(var(--border-radii-layout) - 2px);--equation-border-radii:calc(var(--border-radii-layout) - 2px);--divider-border:var(--border-layout);--quote-border:calc(var(--border-thickness-layout) + 2px) solid\n          currentcolor;--code-padding:calc(var(--padding-layout) + 1.4rem);--code-border-radii:var(--border-radii-layout);--tweet-padding:calc(var(--padding-layout) + 0.65rem)\n          calc(var(--padding-layout) + 0.65rem)\n          calc(var(--padding-layout) + 0.05rem)\n          calc(var(--padding-layout) + 0.65rem);--tweet-border-radii:var(--border-radii-layout);--tweet-border:var(--border-layout);--bookmark-padding:calc(var(--padding-layout) + 0.15rem) 0px\n          calc(var(--padding-layout) + 0.025rem)\n          calc(var(--padding-layout) + 0.275rem);--bookmark-border-radii:var(--border-radii-layout);--bookmark-border:var(--border-layout);--bookmark-image-border-radii:0px\n          calc(var(--border-radii-layout) - 1px)\n          calc(var(--border-radii-layout) - 1px) 0px;--embed-border-radii:calc(var(--border-radii-layout) - 5px);--image-border-radii:calc(var(--border-radii-layout) - 5px);--title-size:").concat(h.typography.titleSize, "rem;--quote-size:").concat(h.typography.quoteSize, "rem;--heading-size:").concat(h.typography.headingSize, "rem;--primary-font:").concat(g, ", ").concat(g, "-fallback, Helvetica,\n          Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Noto Color Emoji,\n          Segoe UI Symbol, Android Emoji, EmojiSymbols, -apple-system,\n          BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Noto Sans,\n          sans-serif;--secondary-font:").concat(y, ", ").concat(y, "-fallback, Helvetica,\n          Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Noto Color Emoji,\n          Segoe UI Symbol, Android Emoji, EmojiSymbols, -apple-system,\n          BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Noto Sans,\n          sans-serif;--text-weight:").concat(h.typography.textWeight, ";--heading-weight:").concat(h.typography.headingWeight, ";--heading1-size:calc(var(--heading-size) * 1.875);--heading2-size:calc(var(--heading-size) * 1.5);--heading3-size:calc(var(--heading-size) * 1.25);--heading4-size:calc(var(--heading-size) * 1);--heading5-size:calc(var(--heading-size) * 0.8125);--scrollbar-width:").concat(h.scrollbar.width, "px;--navbar-height:").concat(m, "px;--navbar-shadow:").concat(k, ";--navbar-button-border-radii:50px}html{font-size:").concat(h.typography.baseSize || (d ? "14" : "16"), "px}body{font-family:var(--secondary-font)}").concat(p ? p.map((function (e) {
                return e.content
              })).join("\n") : "", "\n    ")
            })
          },
          j = c()((function () {
            return r.e(1824).then(r.bind(r, 1824)).then((function (e) {
              return e.LegacyColorStyles
            }))
          }), {
            loadableGenerated: {
              webpack: function () {
                return [1824]
              }
            }
          }),
          z = c()((function () {
            return r.e(6779).then(r.bind(r, 6779)).then((function (e) {
              return e.LightColorStyles
            }))
          }), {
            loadableGenerated: {
              webpack: function () {
                return [6779]
              }
            }
          }),
          C = c()((function () {
            return r.e(7877).then(r.bind(r, 7877)).then((function (e) {
              return e.DarkColorStyles
            }))
          }), {
            loadableGenerated: {
              webpack: function () {
                return [7877]
              }
            }
          }),
          R = c()((function () {
            return r.e(4097).then(r.bind(r, 4097)).then((function (e) {
              return e.Snippets
            }))
          }), {
            loadableGenerated: {
              webpack: function () {
                return [4097]
              }
            }
          }),
          O = function (e) {
            var t, r, n, i, u, c, s, h, g, v, m, b, _, S, w, x, O, A, E, B, F = e.settings,
              I = e.head,
              P = e.pageReplacement,
              T = (0, f.useRouter)(),
              L = !(null === F || void 0 === F ? void 0 : F.free) && (null === (t = e.settings) || void 0 === t || null === (r = t.code) || void 0 === r || null === (n = r.head) || void 0 === n ? void 0 : n.length) ? e.settings.code.head : null,
              M = !(null === F || void 0 === F ? void 0 : F.free) && (null === (i = e.settings) || void 0 === i || null === (u = i.code) || void 0 === u || null === (c = u.body) || void 0 === c ? void 0 : c.length) ? e.settings.code.body : null,
              Z = null === e || void 0 === e || null === (s = e.settings) || void 0 === s || null === (h = s.theme) || void 0 === h ? void 0 : h.colorMode,
              N = (null === (g = e.settings) || void 0 === g ? void 0 : g.legacyTheme) || !(null === e || void 0 === e || null === (v = e.settings) || void 0 === v ? void 0 : v.theme) || "string" === typeof (null === e || void 0 === e || null === (m = e.settings) || void 0 === m ? void 0 : m.theme);
            return (0, l.useEffect)((function () {
              return P && T.replace(P),
                function () {}
            }), [T, P]), (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsxs)(d(), {
                children: [(0, a.jsx)("meta", {
                  charSet: "utf-8"
                }), (0, a.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1"
                })]
              }), (0, a.jsx)(p, (0, o.Z)({}, I || F)), L || M ? (0, a.jsx)(R, {
                headSnippets: L,
                bodySnippets: M
              }) : null, e.children, (null === F || void 0 === F ? void 0 : F.free) && !(null === (b = e.config) || void 0 === b ? void 0 : b.isPreview) ? (0, a.jsx)(y, {}) : null, N ? (0, a.jsx)(j, {
                theme: (null === (_ = e.settings) || void 0 === _ ? void 0 : _.legacyTheme) || (null === e || void 0 === e || null === (S = e.settings) || void 0 === S ? void 0 : S.theme),
                navbar: null === F || void 0 === F ? void 0 : F.navbar,
                footer: null === F || void 0 === F ? void 0 : F.footer
              }) : "dark" === Z ? (0, a.jsx)(C, {
                colors: null === e || void 0 === e || null === (w = e.settings) || void 0 === w || null === (x = w.theme) || void 0 === x || null === (O = x.colors) || void 0 === O ? void 0 : O.dark
              }) : (0, a.jsx)(z, {
                colors: null === e || void 0 === e || null === (A = e.settings) || void 0 === A || null === (E = A.theme) || void 0 === E || null === (B = E.colors) || void 0 === B ? void 0 : B.light
              }), (0, a.jsx)(k, (0, o.Z)({}, e))]
            })
          };
        r(2530), r(4955), r(7604), r(9323), r(3672), r(1321);
        var A = function (e) {
          var t = e.Component,
            r = e.pageProps,
            n = (null === r || void 0 === r ? void 0 : r.config) || {
              assetEndpoint: "https://super-static-assets.s3.amazonaws.com",
              isPreview: !1,
              routeTransform: function (e, t) {
                return {
                  href: e,
                  as: t
                }
              }
            },
            l = r;
          return (0, a.jsx)(O, (0, i.Z)((0, o.Z)({}, l), {
            config: n,
            children: (0, a.jsx)(t, (0, i.Z)((0, o.Z)({}, l), {
              config: n
            }))
          }))
        }
      },
      2055: function (e, t, r) {
        "use strict";
        r.d(t, {
          Of: function () {
            return k
          },
          ZX: function () {
            return j
          },
          iI: function () {
            return x
          },
          u1: function () {
            return C
          }
        });
        var n = r(828),
          o = "gray",
          i = "brown",
          a = "orange",
          l = "yellow",
          u = "green",
          c = "teal",
          s = "blue",
          d = "purple",
          f = "pink",
          p = "red",
          h = "gray_background",
          g = "brown_background",
          y = "orange_background",
          v = "yellow_background",
          m = "teal_background",
          b = "blue_background",
          _ = "purple_background",
          S = "pink_background",
          w = "red_background";
  
        function x(e) {
          switch (e) {
          case o:
            return "ColorGray";
          case i:
            return "ColorBrown";
          case a:
            return "ColorOrange";
          case l:
            return "ColorYellow";
          case u:
          case c:
            return "ColorGreen";
          case s:
            return "ColorBlue";
          case d:
            return "ColorPurple";
          case f:
            return "ColorPink";
          case p:
            return "ColorRed";
          case h:
            return "BgGray";
          case g:
            return "BgBrown";
          case y:
            return "BgOrange";
          case v:
            return "BgYellow";
          case m:
            return "BgGreen";
          case b:
            return "BgBlue";
          case _:
            return "BgPurple";
          case S:
            return "BgPink";
          case w:
            return "BgRed";
          default:
            return "ColorDefault"
          }
        }
        var k = function (e, t) {
            return function (e, t) {
              var r = t ? "-light" : "";
              switch (e) {
              case "ColorDefault":
                return "color-default" + r;
              case "ColorGray":
                return "color-gray" + r;
              case "ColorBrown":
                return "color-brown" + r;
              case "ColorOrange":
                return "color-orange" + r;
              case "ColorYellow":
                return "color-yellow" + r;
              case "ColorGreen":
                return "color-green" + r;
              case "ColorBlue":
                return "color-blue" + r;
              case "ColorPurple":
                return "color-purple" + r;
              case "ColorPink":
                return "color-pink" + r;
              case "ColorRed":
                return "color-red" + r;
              case "BgDefault":
                return "bg-default" + r;
              case "BgGray":
                return "bg-gray" + r;
              case "BgBrown":
                return "bg-brown" + r;
              case "BgOrange":
                return "bg-orange" + r;
              case "BgYellow":
                return "bg-yellow" + r;
              case "BgGreen":
                return "bg-green" + r;
              case "BgBlue":
                return "bg-blue" + r;
              case "BgPurple":
                return "bg-purple" + r;
              case "BgPink":
                return "bg-pink" + r;
              case "BgRed":
                return "bg-red" + r
              }
            }(e, t)
          },
          j = function (e, t) {
            var r = (0, n.Z)(z(e), 3),
              o = r[0],
              i = r[1],
              a = r[2],
              l = t / 100;
            return "rgba(".concat(o, ",").concat(i, ",").concat(a, ",").concat(l, ")")
          },
          z = function (e) {
            var t, r, n;
            return 4 == e.length ? (t = "0x" + e[1] + e[1], r = "0x" + e[2] + e[2], n = "0x" + e[3] + e[3]) : 7 == e.length && (t = "0x" + e[1] + e[2], r = "0x" + e[3] + e[4], n = "0x" + e[5] + e[6]), [+t, +r, +n]
          },
          C = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 90;
            return e > t ? t : e
          }
      },
      8174: function (e, t, r) {
        "use strict";
        var n, o, i, a, l, u, c;
        r.d(t, {
            Fe: function () {
              return a
            },
            Vj: function () {
              return o
            },
            ZX: function () {
              return u
            }
          }),
          function (e) {
            e.url = "url", e.page = "page"
          }(n || (n = {})),
          function (e) {
            e.Text = "text", e.Image = "image"
          }(o || (o = {})),
          function (e) {
            e.Notion = "notion", e.Simple = "simple", e.Balanced = "balanced", e.Minimal = "minimal"
          }(i || (i = {})),
          function (e) {
            e.None = "none", e.Small = "small", e.Medium = "medium", e.Large = "large"
          }(a || (a = {})),
          function (e) {
            e.Popover = "popover", e.Drawer = "drawer", e.Fullscreen = "fullscreen"
          }(l || (l = {})),
          function (e) {
            e.None = "none", e.Stack = "stack", e.Corners = "corners", e.Floating = "floating"
          }(u || (u = {})),
          function (e) {
            e.Left = "left", e.Center = "center", e.Right = "right"
          }(c || (c = {}))
      },
      7604: function () {},
      9323: function () {},
      2530: function () {},
      4955: function () {},
      3672: function () {},
      1321: function () {},
      5152: function (e, t, r) {
        e.exports = r(638)
      },
      9008: function (e, t, r) {
        e.exports = r(5443)
      },
      5675: function (e, t, r) {
        e.exports = r(8045)
      },
      1163: function (e, t, r) {
        e.exports = r(387)
      },
      4155: function (e) {
        var t, r, n = e.exports = {};
  
        function o() {
          throw new Error("setTimeout has not been defined")
        }
  
        function i() {
          throw new Error("clearTimeout has not been defined")
        }
  
        function a(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
          try {
            return t(e, 0)
          } catch (r) {
            try {
              return t.call(null, e, 0)
            } catch (r) {
              return t.call(this, e, 0)
            }
          }
        }! function () {
          try {
            t = "function" === typeof setTimeout ? setTimeout : o
          } catch (e) {
            t = o
          }
          try {
            r = "function" === typeof clearTimeout ? clearTimeout : i
          } catch (e) {
            r = i
          }
        }();
        var l, u = [],
          c = !1,
          s = -1;
  
        function d() {
          c && l && (c = !1, l.length ? u = l.concat(u) : s = -1, u.length && f())
        }
  
        function f() {
          if (!c) {
            var e = a(d);
            c = !0;
            for (var t = u.length; t;) {
              for (l = u, u = []; ++s < t;) l && l[s].run();
              s = -1, t = u.length
            }
            l = null, c = !1,
              function (e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                try {
                  r(e)
                } catch (t) {
                  try {
                    return r.call(null, e)
                  } catch (t) {
                    return r.call(this, e)
                  }
                }
              }(e)
          }
        }
  
        function p(e, t) {
          this.fun = e, this.array = t
        }
  
        function h() {}
        n.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
          u.push(new p(e, t)), 1 !== u.length || c || a(f)
        }, p.prototype.run = function () {
          this.fun.apply(null, this.array)
        }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = h, n.addListener = h, n.once = h, n.off = h, n.removeListener = h, n.removeAllListeners = h, n.emit = h, n.prependListener = h, n.prependOnceListener = h, n.listeners = function (e) {
          return []
        }, n.binding = function (e) {
          throw new Error("process.binding is not supported")
        }, n.cwd = function () {
          return "/"
        }, n.chdir = function (e) {
          throw new Error("process.chdir is not supported")
        }, n.umask = function () {
          return 0
        }
      },
      4207: function (e, t, r) {
        var n = r(4155);
        ! function () {
          "use strict";
          var t = {
              583: function (e) {
                e.exports = function (e) {
                  for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
                  return t >>> 0
                }
              },
              590: function (e, t, r) {
                t.__esModule = !0, t.computeId = function (e, t) {
                  if (!t) return "jsx-" + e;
                  var r = String(t),
                    n = e + r;
                  i[n] || (i[n] = "jsx-" + (0, o.default)(e + "-" + r));
                  return i[n]
                }, t.computeSelector = function (e, t) {
                  "undefined" === typeof window && (t = t.replace(/\/style/gi, "\\/style"));
                  var r = e + t;
                  i[r] || (i[r] = t.replace(/__jsx-style-dynamic-selector/g, e));
                  return i[r]
                };
                var n, o = (n = r(583)) && n.__esModule ? n : {
                  default: n
                };
                var i = {}
              },
              503: function (e, t) {
                function r(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                  }
                }
                t.__esModule = !0, t.default = void 0;
                var o = "undefined" !== typeof n && n.env && !0,
                  i = function (e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                  },
                  a = function () {
                    function e(e) {
                      var t = void 0 === e ? {} : e,
                        r = t.name,
                        n = void 0 === r ? "stylesheet" : r,
                        a = t.optimizeForSpeed,
                        u = void 0 === a ? o : a,
                        c = t.isBrowser,
                        s = void 0 === c ? "undefined" !== typeof window : c;
                      l(i(n), "`name` must be a string"), this._name = n, this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}", l("boolean" === typeof u, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = u, this._isBrowser = s, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                      var d = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
                      this._nonce = d ? d.getAttribute("content") : null
                    }
                    var t, n, a, u = e.prototype;
                    return u.setOptimizeForSpeed = function (e) {
                      l("boolean" === typeof e, "`setOptimizeForSpeed` accepts a boolean"), l(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                    }, u.isOptimizeForSpeed = function () {
                      return this._optimizeForSpeed
                    }, u.inject = function () {
                      var e = this;
                      if (l(!this._injected, "sheet already injected"), this._injected = !0, this._isBrowser && this._optimizeForSpeed) return this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), void(this._optimizeForSpeed || (o || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0));
                      this._serverSheet = {
                        cssRules: [],
                        insertRule: function (t, r) {
                          return "number" === typeof r ? e._serverSheet.cssRules[r] = {
                            cssText: t
                          } : e._serverSheet.cssRules.push({
                            cssText: t
                          }), r
                        },
                        deleteRule: function (t) {
                          e._serverSheet.cssRules[t] = null
                        }
                      }
                    }, u.getSheetForTag = function (e) {
                      if (e.sheet) return e.sheet;
                      for (var t = 0; t < document.styleSheets.length; t++)
                        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                    }, u.getSheet = function () {
                      return this.getSheetForTag(this._tags[this._tags.length - 1])
                    }, u.insertRule = function (e, t) {
                      if (l(i(e), "`insertRule` accepts only strings"), !this._isBrowser) return "number" !== typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                      if (this._optimizeForSpeed) {
                        var r = this.getSheet();
                        "number" !== typeof t && (t = r.cssRules.length);
                        try {
                          r.insertRule(e, t)
                        } catch (a) {
                          return o || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                        }
                      } else {
                        var n = this._tags[t];
                        this._tags.push(this.makeStyleTag(this._name, e, n))
                      }
                      return this._rulesCount++
                    }, u.replaceRule = function (e, t) {
                      if (this._optimizeForSpeed || !this._isBrowser) {
                        var r = this._isBrowser ? this.getSheet() : this._serverSheet;
                        if (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e]) return e;
                        r.deleteRule(e);
                        try {
                          r.insertRule(t, e)
                        } catch (i) {
                          o || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), r.insertRule(this._deletedRulePlaceholder, e)
                        }
                      } else {
                        var n = this._tags[e];
                        l(n, "old rule at index `" + e + "` not found"), n.textContent = t
                      }
                      return e
                    }, u.deleteRule = function (e) {
                      if (this._isBrowser)
                        if (this._optimizeForSpeed) this.replaceRule(e, "");
                        else {
                          var t = this._tags[e];
                          l(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                        }
                      else this._serverSheet.deleteRule(e)
                    }, u.flush = function () {
                      this._injected = !1, this._rulesCount = 0, this._isBrowser ? (this._tags.forEach((function (e) {
                        return e && e.parentNode.removeChild(e)
                      })), this._tags = []) : this._serverSheet.cssRules = []
                    }, u.cssRules = function () {
                      var e = this;
                      return this._isBrowser ? this._tags.reduce((function (t, r) {
                        return r ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules, (function (t) {
                          return t.cssText === e._deletedRulePlaceholder ? null : t
                        }))) : t.push(null), t
                      }), []) : this._serverSheet.cssRules
                    }, u.makeStyleTag = function (e, t, r) {
                      t && l(i(t), "makeStyleTag accepts only strings as second parameter");
                      var n = document.createElement("style");
                      this._nonce && n.setAttribute("nonce", this._nonce), n.type = "text/css", n.setAttribute("data-" + e, ""), t && n.appendChild(document.createTextNode(t));
                      var o = document.head || document.getElementsByTagName("head")[0];
                      return r ? o.insertBefore(n, r) : o.appendChild(n), n
                    }, t = e, (n = [{
                      key: "length",
                      get: function () {
                        return this._rulesCount
                      }
                    }]) && r(t.prototype, n), a && r(t, a), e
                  }();
  
                function l(e, t) {
                  if (!e) throw new Error("StyleSheet: " + t + ".")
                }
                t.default = a
              },
              449: function (e, t, r) {
                t.__esModule = !0, t.default = c;
                var n, o = (n = r(522)) && n.__esModule ? n : {
                    default: n
                  },
                  i = r(147),
                  a = r(590);
                var l = o.default.useInsertionEffect || o.default.useLayoutEffect,
                  u = "undefined" !== typeof window ? (0, i.createStyleRegistry)() : void 0;
  
                function c(e) {
                  var t = u || (0, i.useStyleRegistry)();
                  return t ? "undefined" === typeof window ? (t.add(e), null) : (l((function () {
                    return t.add(e),
                      function () {
                        t.remove(e)
                      }
                  }), [e.id, String(e.dynamic)]), null) : null
                }
                c.dynamic = function (e) {
                  return e.map((function (e) {
                    var t = e[0],
                      r = e[1];
                    return (0, a.computeId)(t, r)
                  })).join(" ")
                }
              },
              147: function (e, t, r) {
                t.__esModule = !0, t.createStyleRegistry = s, t.StyleRegistry = function (e) {
                  var t = e.registry,
                    r = e.children,
                    n = (0, o.useContext)(c),
                    i = (0, o.useState)((function () {
                      return n || t || s()
                    }))[0];
                  return o.default.createElement(c.Provider, {
                    value: i
                  }, r)
                }, t.useStyleRegistry = function () {
                  return (0, o.useContext)(c)
                }, t.StyleSheetContext = t.StyleSheetRegistry = void 0;
                var n, o = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                      default: e
                    };
                    var t = l();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : r[o] = e[o]
                      }
                    r.default = e, t && t.set(e, r);
                    return r
                  }(r(522)),
                  i = (n = r(503)) && n.__esModule ? n : {
                    default: n
                  },
                  a = r(590);
  
                function l() {
                  if ("function" !== typeof WeakMap) return null;
                  var e = new WeakMap;
                  return l = function () {
                    return e
                  }, e
                }
                var u = function () {
                  function e(e) {
                    var t = void 0 === e ? {} : e,
                      r = t.styleSheet,
                      n = void 0 === r ? null : r,
                      o = t.optimizeForSpeed,
                      a = void 0 !== o && o,
                      l = t.isBrowser,
                      u = void 0 === l ? "undefined" !== typeof window : l;
                    this._sheet = n || new i.default({
                      name: "styled-jsx",
                      optimizeForSpeed: a
                    }), this._sheet.inject(), n && "boolean" === typeof a && (this._sheet.setOptimizeForSpeed(a), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._isBrowser = u, this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                  }
                  var t = e.prototype;
                  return t.add = function (e) {
                    var t = this;
                    void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._isBrowser && !this._fromServer && (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce((function (e, t) {
                      return e[t] = 0, e
                    }), {}));
                    var r = this.getIdAndRules(e),
                      n = r.styleId,
                      o = r.rules;
                    if (n in this._instancesCounts) this._instancesCounts[n] += 1;
                    else {
                      var i = o.map((function (e) {
                        return t._sheet.insertRule(e)
                      })).filter((function (e) {
                        return -1 !== e
                      }));
                      this._indices[n] = i, this._instancesCounts[n] = 1
                    }
                  }, t.remove = function (e) {
                    var t = this,
                      r = this.getIdAndRules(e).styleId;
                    if (function (e, t) {
                        if (!e) throw new Error("StyleSheetRegistry: " + t + ".")
                      }(r in this._instancesCounts, "styleId: `" + r + "` not found"), this._instancesCounts[r] -= 1, this._instancesCounts[r] < 1) {
                      var n = this._fromServer && this._fromServer[r];
                      n ? (n.parentNode.removeChild(n), delete this._fromServer[r]) : (this._indices[r].forEach((function (e) {
                        return t._sheet.deleteRule(e)
                      })), delete this._indices[r]), delete this._instancesCounts[r]
                    }
                  }, t.update = function (e, t) {
                    this.add(t), this.remove(e)
                  }, t.flush = function () {
                    this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                  }, t.cssRules = function () {
                    var e = this,
                      t = this._fromServer ? Object.keys(this._fromServer).map((function (t) {
                        return [t, e._fromServer[t]]
                      })) : [],
                      r = this._sheet.cssRules();
                    return t.concat(Object.keys(this._indices).map((function (t) {
                      return [t, e._indices[t].map((function (e) {
                        return r[e].cssText
                      })).join(e._optimizeForSpeed ? "" : "\n")]
                    })).filter((function (e) {
                      return Boolean(e[1])
                    })))
                  }, t.styles = function (e) {
                    return function (e, t) {
                      return void 0 === t && (t = {}), e.map((function (e) {
                        var r = e[0],
                          n = e[1];
                        return o.default.createElement("style", {
                          id: "__" + r,
                          key: "__" + r,
                          nonce: t.nonce ? t.nonce : void 0,
                          dangerouslySetInnerHTML: {
                            __html: n
                          }
                        })
                      }))
                    }(this.cssRules(), e)
                  }, t.getIdAndRules = function (e) {
                    var t = e.children,
                      r = e.dynamic,
                      n = e.id;
                    if (r) {
                      var o = (0, a.computeId)(n, r);
                      return {
                        styleId: o,
                        rules: Array.isArray(t) ? t.map((function (e) {
                          return (0, a.computeSelector)(o, e)
                        })) : [(0, a.computeSelector)(o, t)]
                      }
                    }
                    return {
                      styleId: (0, a.computeId)(n),
                      rules: Array.isArray(t) ? t : [t]
                    }
                  }, t.selectFromServer = function () {
                    return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function (e, t) {
                      return e[t.id.slice(2)] = t, e
                    }), {})
                  }, e
                }();
                t.StyleSheetRegistry = u;
                var c = (0, o.createContext)(null);
  
                function s() {
                  return new u
                }
                t.StyleSheetContext = c
              },
              522: function (e) {
                e.exports = r(7294)
              }
            },
            o = {};
  
          function i(e) {
            var r = o[e];
            if (void 0 !== r) return r.exports;
            var n = o[e] = {
                exports: {}
              },
              a = !0;
            try {
              t[e](n, n.exports, i), a = !1
            } finally {
              a && delete o[e]
            }
            return n.exports
          }
          i.ab = "//";
          var a = {};
          ! function () {
            var e = a;
            e.__esModule = !0, e.style = e.useStyleRegistry = e.createStyleRegistry = e.StyleRegistry = void 0;
            var t = i(147);
            e.StyleRegistry = t.StyleRegistry, e.createStyleRegistry = t.createStyleRegistry, e.useStyleRegistry = t.useStyleRegistry;
            var r, n = (r = i(449)) && r.__esModule ? r : {
              default: r
            };
            e.style = n.default
          }(), e.exports = a
        }()
      },
      5988: function (e, t, r) {
        e.exports = r(4207).style
      },
      3250: function (e, t, r) {
        "use strict";
        var n = r(7294);
        var o = "function" === typeof Object.is ? Object.is : function (e, t) {
            return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
          },
          i = n.useState,
          a = n.useEffect,
          l = n.useLayoutEffect,
          u = n.useDebugValue;
  
        function c(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var r = t();
            return !o(e, r)
          } catch (n) {
            return !0
          }
        }
        var s = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? function (e, t) {
          return t()
        } : function (e, t) {
          var r = t(),
            n = i({
              inst: {
                value: r,
                getSnapshot: t
              }
            }),
            o = n[0].inst,
            s = n[1];
          return l((function () {
            o.value = r, o.getSnapshot = t, c(o) && s({
              inst: o
            })
          }), [e, r, t]), a((function () {
            return c(o) && s({
              inst: o
            }), e((function () {
              c(o) && s({
                inst: o
              })
            }))
          }), [e]), u(r), r
        };
        t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : s
      },
      1688: function (e, t, r) {
        "use strict";
        e.exports = r(3250)
      },
      943: function (e, t, r) {
        "use strict";
  
        function n(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n
        }
        r.d(t, {
          Z: function () {
            return n
          }
        })
      },
      4924: function (e, t, r) {
        "use strict";
  
        function n(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r, e
        }
        r.d(t, {
          Z: function () {
            return n
          }
        })
      },
      3375: function (e, t, r) {
        "use strict";
  
        function n(e) {
          if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }
        r.d(t, {
          Z: function () {
            return n
          }
        })
      },
      6042: function (e, t, r) {
        "use strict";
        r.d(t, {
          Z: function () {
            return o
          }
        });
        var n = r(4924);
  
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              o = Object.keys(r);
            "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter((function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            })))), o.forEach((function (t) {
              (0, n.Z)(e, t, r[t])
            }))
          }
          return e
        }
      },
      9396: function (e, t, r) {
        "use strict";
  
        function n(e, t) {
          return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function (e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              }))), r.push.apply(r, n)
            }
            return r
          }(Object(t)).forEach((function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })), e
        }
        r.d(t, {
          Z: function () {
            return n
          }
        })
      },
      828: function (e, t, r) {
        "use strict";
        r.d(t, {
          Z: function () {
            return i
          }
        });
        var n = r(3375);
        var o = r(1566);
  
        function i(e, t) {
          return function (e) {
            if (Array.isArray(e)) return e
          }(e) || (0, n.Z)(e, t) || (0, o.Z)(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }
      },
      1566: function (e, t, r) {
        "use strict";
        r.d(t, {
          Z: function () {
            return o
          }
        });
        var n = r(943);
  
        function o(e, t) {
          if (e) {
            if ("string" === typeof e) return (0, n.Z)(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? (0, n.Z)(e, t) : void 0
          }
        }
      }
    },
    function (e) {
      var t = function (t) {
        return e(e.s = t)
      };
      e.O(0, [9774, 179], (function () {
        return t(6840), t(387)
      }));
      var r = e.O();
      _N_E = r
    }
  ]);