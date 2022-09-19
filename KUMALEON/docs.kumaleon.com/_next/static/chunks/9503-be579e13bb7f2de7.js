"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9503], {
    3046: function (e, n, t) {
      t.d(n, {
        r: function () {
          return u
        }
      });
      var i = t(5893),
        o = t(7294),
        r = t(1664),
        l = t.n(r),
        a = t(1163),
        c = t(195),
        s = t(7397),
        d = t(2860),
        u = function (e) {
          var n = e.uri,
            t = (0, a.useRouter)(),
            r = (0, d.l)(),
            u = r.settings,
            h = r.pageId,
            v = r.config,
            p = u.domainName,
            m = function (e) {
              var n = e.domainName,
                t = e.uri,
                i = e.pageId,
                o = e.isRoot;
              return t ? t.startsWith("/") ? o && t.includes(i) ? t.replace(i, "") : t : t.startsWith("http://".concat(n)) || t.startsWith("https://".concat(n)) ? t.split("://".concat(n))[1] || "/" : t.startsWith("mailto:") || t.startsWith("tel:") || t.startsWith("/") || t.startsWith("http://") || t.startsWith("https://") ? o && t.includes(i) ? t.replace(i, "") : t : o && t.includes(i) ? "https://".concat(t).replace(i, "") : "https://".concat(t) : void 0
            }({
              domainName: p,
              uri: n,
              pageId: h,
              isRoot: "/" === (null === t || void 0 === t ? void 0 : t.pathname)
            }),
            f = m ? "/" === m || m.startsWith("/#") ? "/" : "/[...page]" : "#",
            x = m ? "/" === m ? "/" : m : "#",
            j = e.id ? (0, s.wj)(e.id) : void 0,
            g = (0, c.cn)("notion-link", e.className),
            y = (0, o.useMemo)((function () {
              return n && (n.startsWith("/") || n.startsWith("http://".concat(p)) || n.startsWith("https://".concat(p)))
            }), [n]),
            _ = (0, o.useCallback)((function (e, n) {
              var t = n;
              return n.startsWith("/#") && !n.startsWith("/#block-") && (t = "/#block-".concat(n.substring(2, n.length))), v.routeTransform ? v.routeTransform(e, t) : {
                href: e,
                as: t
              }
            }), [v.routeTransform]),
            b = _(f, x),
            w = b.as.includes("#") && (b.as.split("#")[0] === (null === t || void 0 === t ? void 0 : t.pathname) || "/" === (null === t || void 0 === t ? void 0 : t.pathname) && b.as.split("#")[0] === "/".concat(u.notionPage));
          return y ? (0, i.jsx)(l(), {
            href: b.href,
            as: b.as,
            passHref: !0,
            shallow: w,
            children: (0, i.jsx)("a", {
              id: j,
              className: g,
              onClick: e.onClick,
              children: e.children
            })
          }) : (0, i.jsx)("a", {
            id: j,
            href: m,
            className: g,
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: e.onClick,
            children: e.children
          })
        }
    },
    2812: function (e, n, t) {
      t.r(n), t.d(n, {
        Loader: function () {
          return o
        },
        PageLoader: function () {
          return r
        }
      });
      var i = t(5893),
        o = (t(7294), function () {
          return (0, i.jsxs)("svg", {
            className: "super-loader__spinner",
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("defs", {
              children: (0, i.jsxs)("linearGradient", {
                x1: "28.1542969%",
                y1: "63.7402344%",
                x2: "74.6289062%",
                y2: "17.7832031%",
                id: "linearGradient-1",
                children: [(0, i.jsx)("stop", {
                  stopColor: "rgba(164, 164, 164, 1)",
                  offset: "0%"
                }), (0, i.jsx)("stop", {
                  stopColor: "rgba(164, 164, 164, 0)",
                  stopOpacity: "0",
                  offset: "100%"
                })]
              })
            }), (0, i.jsx)("g", {
              id: "Page-1",
              stroke: "none",
              strokeWidth: "1",
              fill: "none",
              children: (0, i.jsx)("g", {
                transform: "translate(-236.000000, -286.000000)",
                children: (0, i.jsxs)("g", {
                  transform: "translate(238.000000, 286.000000)",
                  children: [(0, i.jsx)("circle", {
                    id: "Oval-2",
                    stroke: "url(#linearGradient-1)",
                    strokeWidth: "4",
                    cx: "10",
                    cy: "12",
                    r: "10"
                  }), (0, i.jsx)("path", {
                    d: "M10,2 C4.4771525,2 0,6.4771525 0,12",
                    id: "Oval-2",
                    stroke: "rgba(164, 164, 164, 1)",
                    strokeWidth: "4"
                  }), (0, i.jsx)("rect", {
                    id: "Rectangle-1",
                    fill: "rgba(164, 164, 164, 1)",
                    x: "8",
                    y: "0",
                    width: "4",
                    height: "4",
                    rx: "8"
                  })]
                })
              })
            })]
          })
        }),
        r = function () {
          return (0, i.jsx)("div", {
            className: "super-loader",
            children: (0, i.jsx)(o, {})
          })
        }
    },
    2520: function (e, n, t) {
      t.d(n, {
        a: function () {
          return f
        }
      });
      var i = t(6042),
        o = t(9396),
        r = t(9815),
        l = t(5893),
        a = t(7294),
        c = t(3046),
        s = t(195),
        d = t(734),
        u = t(9828),
        h = t(4324),
        v = t(4570),
        p = function (e) {
          var n, t = null === (n = e.icon) || void 0 === n ? void 0 : n.startsWith("/icons/");
          return e.icon && e.icon.indexOf ? e.icon.startsWith("http") || e.icon.startsWith("data") || t ? (0, l.jsx)(v.t, {
            src: t ? "https://notion.so".concat(e.icon) : e.icon,
            alt: e.title,
            size: {
              width: 16,
              height: 16
            },
            width: 16,
            height: 16,
            layout: "fixed",
            priority: !0,
            className: "notion-breadcrumb__icon"
          }) : (0, l.jsx)("div", {
            style: {
              fontSize: 18,
              lineHeight: 1
            },
            children: e.icon
          }) : null
        },
        m = function (e) {
          var n = (0, u.O)(),
            t = n.containerRef,
            i = n.isShown,
            o = n.onOpen,
            r = n.onClose;
          return (0, l.jsx)(h.L, {
            containerRef: t,
            isShown: i,
            onOpen: o,
            onClose: r,
            trigger: (0, l.jsx)("p", {
              className: "notion-breadcrumb__item notion-breadcrumb__ellipsis",
              children: "..."
            }),
            children: (0, l.jsx)("div", {
              className: "notion-breadcrumb__dropdown",
              children: (0, l.jsx)("div", {
                className: "notion-dropdown__option-list",
                children: e.options.map((function (e, n) {
                  var t = e.icon,
                    i = e.id,
                    o = e.title,
                    a = e.uri;
                  return (0, l.jsx)(c.r, {
                    uri: a,
                    children: (0, l.jsxs)("div", {
                      onClick: r,
                      className: "notion-dropdown__option",
                      children: [0 === n ? null : (0, l.jsx)("p", {
                        className: "notion-breadcrumb__dropdown-option-arrow",
                        children: "↳"
                      }), (0, l.jsx)(p, {
                        icon: t,
                        title: o
                      }), (0, l.jsx)("p", {
                        className: "notion-breadcrumb__dropdown-option-title",
                        children: o
                      })]
                    }, i)
                  })
                }))
              })
            })
          })
        },
        f = function (e) {
          var n = (0, a.useState)([null === e || void 0 === e ? void 0 : e.root]),
            t = n[0],
            u = n[1],
            h = (0, d.Z)(),
            v = {
              uri: "",
              icon: "",
              title: ""
            };
          return (0, a.useEffect)((function () {
            var n = [null === e || void 0 === e ? void 0 : e.root].concat((0, r.Z)((null === e || void 0 === e ? void 0 : e.breadcrumbs) || [])),
              t = function (e) {
                var t = n.slice(1, n.length + e);
                u([n[0], (0, o.Z)((0, i.Z)({}, v), {
                  options: t
                })].concat((0, r.Z)(n.slice(e))))
              };
            return window.innerWidth <= 546 && n.length > 2 ? t(-1) : window.innerWidth <= 768 && n.length > 3 ? t(-2) : n.length > 4 ? t(-3) : u(n),
              function () {}
          }), [null === e || void 0 === e ? void 0 : e.root, null === e || void 0 === e ? void 0 : e.breadcrumbs, h.width]), (0, l.jsx)("div", {
            className: "notion-breadcrumb",
            children: null === t || void 0 === t ? void 0 : t.map((function (n, i) {
              var o = n.uri,
                r = n.icon,
                d = n.title,
                u = n.options;
              return (0, l.jsxs)(a.Fragment, {
                children: [i > 0 ? (0, l.jsx)("span", {
                  className: "notion-breadcrumb__divider",
                  children: "/"
                }) : null, (null === u || void 0 === u ? void 0 : u.length) ? (0, l.jsx)(m, {
                  options: u,
                  isNavbar: e.isNavbar
                }) : (0, l.jsxs)(c.r, {
                  uri: o,
                  className: (0, s.cn)("notion-breadcrumb__item", 1 === t.length ? "single" : "", r ? "has-icon" : ""),
                  children: [(0, l.jsx)(p, {
                    icon: r,
                    title: d
                  }), (0, l.jsx)("div", {
                    className: "notion-navbar__title notion-breadcrumb__title",
                    children: d || ""
                  })]
                })]
              }, o)
            }))
          })
        }
    },
    2723: function (e, n, t) {
      t.d(n, {
        X: function () {
          return o
        }
      });
      var i = t(5893),
        o = (t(7294), function (e) {
          return "checked" === e.type ? (0, i.jsx)("div", {
            className: "notion-checkbox checked",
            children: (0, i.jsx)("svg", {
              viewBox: "0 0 14 14",
              children: (0, i.jsx)("polygon", {
                points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
              })
            })
          }) : "partial" === e.type ? (0, i.jsx)("div", {
            className: "notion-checkbox checked",
            children: (0, i.jsx)("svg", {
              viewBox: "0 0 14 14",
              children: (0, i.jsx)("rect", {
                x: "1.75",
                y: "6.125",
                width: "10.5",
                height: "1.75"
              })
            })
          }) : (0, i.jsx)("div", {
            className: "notion-checkbox",
            children: (0, i.jsx)("svg", {
              viewBox: "0 0 16 16",
              children: (0, i.jsx)("path", {
                d: "M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z"
              })
            })
          })
        })
    },
    7847: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return y
        }
      });
      var i, o, r = t(6042),
        l = t(9396),
        a = t(5893),
        c = (t(7294), t(4570)),
        s = t(195),
        d = t(7397),
        u = t(4924),
        h = t(2055);
      ! function (e) {
        e.Default = "ColorDefault", e.Gray = "ColorGray", e.Brown = "ColorBrown", e.Orange = "ColorOrange", e.Yellow = "ColorYellow", e.Green = "ColorGreen", e.Blue = "ColorBlue", e.Purple = "ColorPurple", e.Pink = "ColorPink", e.Red = "ColorRed"
      }(i || (i = {}));
      var v = (o = {}, (0, u.Z)(o, i.Default, "pill-default"), (0, u.Z)(o, i.Gray, "pill-gray"), (0, u.Z)(o, i.Brown, "pill-brown"), (0, u.Z)(o, i.Orange, "pill-orange"), (0, u.Z)(o, i.Yellow, "pill-yellow"), (0, u.Z)(o, i.Green, "pill-green"), (0, u.Z)(o, i.Blue, "pill-blue"), (0, u.Z)(o, i.Purple, "pill-purple"), (0, u.Z)(o, i.Pink, "pill-pink"), (0, u.Z)(o, i.Red, "pill-red"), o),
        p = function (e) {
          var n = (0, h.iI)(e.color);
          return (0, a.jsx)("span", {
            className: (0, s.cn)("notion-pill", n ? v[n] : void 0, "large" === e.size ? "large" : void 0, e.first ? "first" : void 0),
            children: e.content
          })
        },
        m = t(1817),
        f = t(2723),
        x = t(3046),
        j = t(6886),
        g = function (e) {
          var n = e.percent || 0,
            t = 20,
            i = 17 * Math.PI,
            o = i - Math.min(n / 100, 1) * i;
          return (0, a.jsxs)("svg", {
            viewBox: "0 0 ".concat(t, " ").concat(t),
            color: "transparent",
            className: "notion-property__number__progress-ring",
            children: [(0, a.jsx)("circle", {
              r: 8.5,
              cx: 10,
              cy: 10,
              "stroke-width": 3,
              stroke: "var(--color-bg-gray)",
              "stroke-linecap": "round",
              fill: "transparent"
            }), (0, a.jsx)("circle", {
              r: 8.5,
              cx: 10,
              cy: 10,
              "stroke-width": 3,
              stroke: "var(--color-text-".concat(e.color || "gray", ")"),
              "stroke-linecap": "round",
              "stroke-dasharray": i,
              "stroke-dashoffset": o,
              fill: "transparent"
            })]
          })
        },
        y = function (e) {
          var n = e.id,
            t = e.type,
            i = e.value,
            o = e.icon,
            u = e.iconSize,
            h = e.pageProperty,
            v = e.statusShowAs,
            _ = "title" === t ? null : function (e) {
              if (e && e.length) {
                for (var n = [], t = 0, i = e.length; t < i; t++) {
                  var o = Number(e.charCodeAt(t)).toString(16);
                  n.push(o)
                }
                return n.join("")
              }
              return e
            }(n);
          if ((!t || !i) && !1 !== i) return null;
          switch (t) {
          case "title":
            return (0, a.jsx)("div", {
              className: "notion-property notion-property__title",
              children: (0, a.jsx)(j.m, {
                isPage: !0,
                pre: "page" === o ? (0, a.jsx)("div", {
                  className: "notion-property__title__icon-wrapper",
                  children: (0, a.jsx)(m.J, {
                    type: "page",
                    width: u || 18,
                    height: u || 18,
                    objectFit: "contain",
                    style: {
                      objectFit: "contain",
                      lineHeight: "1.5rem"
                    }
                  })
                }) : o ? (0, a.jsx)("div", {
                  className: "notion-property__title__icon-wrapper",
                  children: (0, a.jsx)(m.J, {
                    src: o,
                    width: u || 18,
                    height: u || 18,
                    objectFit: "contain",
                    style: {
                      objectFit: "contain",
                      lineHeight: "1.5rem"
                    }
                  })
                }) : null,
                children: i
              })
            });
          case "checkbox":
            var b = "true" === i ? "checked" : "false" === i ? "unchecked" : i,
              w = e.name || e.title;
            return (0, a.jsxs)("div", {
              className: (0, s.cn)("notion-property", "notion-property__checkbox", "property-".concat(_)),
              children: [(0, a.jsx)(f.X, {
                type: b
              }), w && "collection-card" === e.componentType ? (0, a.jsx)(j.m, {
                children: w
              }) : null]
            });
          case "select":
          case "multi_select":
            var N = i;
            return (0, a.jsx)("div", {
              className: (0, s.cn)("notion-property", "notion-property__select", "property-".concat(_)),
              children: N.map((function (e, n) {
                return (0, a.jsx)(p, {
                  content: e.value,
                  color: e.color,
                  first: 0 === n
                }, e.value)
              }))
            });
          case "status":
            if ("checkbox" === v) {
              var Z = e.value[0].value,
                k = "Done" === Z || "Complete" === Z ? "true" : "In progress" === Z ? "partial" : "false";
              return (0, a.jsx)(y, {
                value: k,
                type: "checkbox",
                title: [
                  [e.name]
                ],
                componentType: e.componentType
              })
            }
            return (0, a.jsx)(y, (0, l.Z)((0, r.Z)({}, e), {
              type: "select"
            }));
          case "date":
          case "created_time":
          case "last_edited_time":
            return (0, a.jsx)("div", {
              className: (0, s.cn)("notion-property", "notion-property__date", "property-".concat(_)),
              children: (0, a.jsx)(j.m, {
                isProperty: !0,
                children: "date" === t ? i : [
                  [i]
                ]
              })
            });
          case "relation":
            return i && i.length ? (0, a.jsx)("div", {
              className: (0, s.cn)("notion-property", "notion-property__relation", "property-".concat(_)),
              children: (0, a.jsx)(j.m, {
                isProperty: !0,
                children: i
              })
            }) : null;
          case "url":
            return 1 === i.length && 1 === i[0].length && i[0].push([
              ["a", i[0][0]]
            ]), (0, a.jsx)("div", {
              className: (0, s.cn)("notion-property", "notion-property__url", "property-".concat(_)),
              children: (0, a.jsx)(j.m, {
                shortenLink: !h,
                children: i
              })
            });
          case "file":
            return i && i.length ? (0, a.jsx)("div", {
              className: (0, s.cn)("notion-property", "notion-property__file", "property-".concat(_)),
              children: i.map((function (e, n) {
                var t = e.type,
                  i = e.imgSrc,
                  o = e.fileName,
                  r = e.file;
                return "img" === t ? (0, a.jsx)(x.r, {
                  uri: i,
                  children: (0, a.jsx)("div", {
                    style: {
                      position: "relative",
                      width: 30,
                      height: 24,
                      marginInlineEnd: 6
                    },
                    children: (0, a.jsx)(c.t, {
                      src: i,
                      layout: "fill",
                      objectFit: "contain",
                      style: {
                        maxHeight: 24,
                        width: "auto"
                      }
                    })
                  })
                }, o + n) : (0, a.jsx)(p, {
                  content: (0, a.jsx)(j.m, {
                    children: [r]
                  }, o + n)
                }, o + n)
              }))
            }) : null;
          case "rollup":
            return i.type ? (0, a.jsx)("div", {
              className: (0, s.cn)("notion-property", "notion-property__rollup", "property-".concat(_)),
              children: (0, a.jsx)(y, (0, r.Z)({}, i))
            }) : i && i.map ? (0, a.jsx)("div", {
              className: (0, s.cn)("notion-property", "notion-property__rollup", "property-".concat(_)),
              children: i.map((function (e, n) {
                return e ? (0, a.jsxs)("div", {
                  children: [(0, a.jsx)(y, (0, r.Z)({}, e)), e.addon ? "," : ""]
                }) : null
              }))
            }) : null;
          case "person":
          case "created_by":
          case "last_edited_by":
            return (0, a.jsx)("div", {
              className: (0, s.cn)("notion-property", "notion-property__person", "property-".concat(_)),
              children: (0, a.jsx)(j.m, {
                isProperty: !0,
                children: i
              })
            });
          case "text":
            return (0, a.jsx)("div", {
              className: (0, s.cn)("notion-property", "notion-property__text", "property-".concat(_)),
              children: (0, a.jsx)(j.m, {
                children: i
              })
            });
          case "number":
            if (e.show_as) {
              var S = Number((0, d.S$)(i)) / e.show_as.maxValue * 100;
              return "ring" === e.show_as.type ? (0, a.jsxs)("div", {
                className: "notion-property notion-property__number property-".concat(_, " notion-property__number__progress-ring-wrapper"),
                children: [e.show_as.showValue ? (0, a.jsx)("p", {
                  className: "notion-property__number__progress-value",
                  children: i[0]
                }) : null, (0, a.jsx)(g, {
                  percent: S,
                  color: e.show_as.color
                })]
              }) : (0, a.jsxs)("div", {
                className: "notion-property notion-property__number property-".concat(_, " notion-property__number__progress-bar-wrapper"),
                children: [e.show_as.showValue ? (0, a.jsx)("p", {
                  className: "notion-property__number__progress-value",
                  children: i[0]
                }) : null, (0, a.jsx)("div", {
                  className: (0, s.cn)("notion-property__number__progress-bar", e.show_as.showValue ? "show-value" : ""),
                  children: (0, a.jsx)("div", {
                    style: {
                      width: "".concat(S, "%"),
                      background: "var(--color-text-".concat(e.show_as.color, ")")
                    }
                  })
                })]
              })
            }
            return (0, a.jsx)("div", {
              className: (0, s.cn)("notion-property", "notion-property__number", "property-".concat(_)),
              children: (0, a.jsx)(j.m, {
                children: i
              })
            });
          case "email":
            return (0, a.jsx)("div", {
              className: (0, s.cn)("notion-property", "notion-property__email", "property-".concat(_)),
              children: (0, a.jsx)(j.m, {
                isEmail: !0,
                children: i
              })
            });
          case "phone_number":
            return (0, a.jsx)("div", {
              className: (0, s.cn)("notion-property", "notion-property__phone", "property-".concat(_)),
              children: (0, a.jsx)(j.m, {
                isPhone: !0,
                children: i
              })
            });
          default:
            return (0, a.jsx)("div", {
              className: (0, s.cn)("notion-property", "notion-property__default", "property-".concat(_)),
              children: (0, a.jsx)(j.m, {
                children: i
              })
            })
          }
        }
    },
    4671: function (e, n, t) {
      t.d(n, {
        i: function () {
          return r
        }
      });
      var i = t(5893),
        o = (t(7294), t(7397)),
        r = function (e) {
          return (0, i.jsx)("div", {
            id: (0, o.wj)(e.id),
            className: "notion-divider"
          })
        }
    },
    4324: function (e, n, t) {
      t.d(n, {
        L: function () {
          return a
        }
      });
      var i = t(5893),
        o = t(7294),
        r = t(195),
        l = t(1817),
        a = function (e) {
          var n, t = (0, o.useState)(0),
            a = t[0],
            c = t[1];
          return (0, o.useEffect)((function () {
            var n = function () {
              var e = document.querySelector(".notion-dropdown__menu.open").getBoundingClientRect();
              e.x - a < 20 && c(e.x - 30)
            };
            return e.isShown ? (n(), addEventListener("resize", n)) : setTimeout((function () {
                c(0), removeEventListener("resize", n)
              }), 120),
              function () {
                removeEventListener("resize", n)
              }
          }), [e.isShown]), (0, i.jsxs)("div", {
            ref: e.containerRef,
            className: "notion-dropdown",
            id: e.id,
            children: [(0, i.jsx)("div", {
              onClick: e.isShown ? e.onClose : e.onOpen,
              children: e.trigger || (0, i.jsxs)("div", {
                className: "notion-dropdown__button",
                children: [(null === (n = e.selectedOption) || void 0 === n ? void 0 : n.icon) ? (0, i.jsx)(l.J, {
                  type: e.selectedOption.icon
                }) : null, (0, i.jsx)("p", {
                  className: "notion-dropdown__button-title",
                  children: e.selectedOption.label
                }), (0, i.jsx)(l.J, {
                  type: "chevronDown"
                })]
              })
            }), (0, i.jsx)("div", {
              className: "notion-dropdown__menu-wrapper",
              children: (0, i.jsx)("div", {
                style: a ? {
                  left: "calc(".concat(-1 * a, "px)")
                } : null,
                className: (0, r.cn)("notion-dropdown__menu", e.isShown ? "animate-in open" : !1 === e.isShown ? "animate-out close" : "initial-state close"),
                children: e.children
              })
            })]
          })
        }
    },
    2384: function (e, n, t) {
      t.d(n, {
        C: function () {
          return d
        }
      });
      var i = t(5893),
        o = (t(7294), t(5152)),
        r = t.n(o),
        l = t(195),
        a = t(7397),
        c = r()((function () {
          return Promise.all([t.e(1265), t.e(456)]).then(t.bind(t, 456))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [456]
            }
          }
        }),
        s = {
          throwOnError: !1,
          strict: !1
        },
        d = function (e) {
          return (0, i.jsx)("span", {
            id: (0, a.wj)(e.id),
            className: (0, l.cn)("notion-equation", e.inline ? "notion-equation__inline" : "notion-equation__block"),
            children: (0, i.jsx)(c, {
              math: e.latex.trim(),
              block: !e.inline,
              settings: s
            })
          })
        }
    },
    1817: function (e, n, t) {
      t.d(n, {
        J: function () {
          return Z
        }
      });
      var i = t(6042),
        o = t(5893),
        r = (t(7294), t(5152)),
        l = t.n(r),
        a = t(7397),
        c = t(4570),
        s = l()((function () {
          return t.e(9232).then(t.bind(t, 9232)).then((function (e) {
            return e.ChevronLeft
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [9232]
            }
          }
        }),
        d = l()((function () {
          return t.e(2037).then(t.bind(t, 2037)).then((function (e) {
            return e.ChevronRight
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [2037]
            }
          }
        }),
        u = l()((function () {
          return t.e(4131).then(t.bind(t, 4131)).then((function (e) {
            return e.ChevronDown
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [4131]
            }
          }
        }),
        h = l()((function () {
          return t.e(9373).then(t.bind(t, 9373)).then((function (e) {
            return e.BoardCollection
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [9373]
            }
          }
        }),
        v = l()((function () {
          return t.e(4714).then(t.bind(t, 4714)).then((function (e) {
            return e.CalendarCollection
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [4714]
            }
          }
        }),
        p = l()((function () {
          return t.e(8333).then(t.bind(t, 8333)).then((function (e) {
            return e.GalleryCollection
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [8333]
            }
          }
        }),
        m = l()((function () {
          return t.e(4275).then(t.bind(t, 4275)).then((function (e) {
            return e.ListCollection
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [4275]
            }
          }
        }),
        f = l()((function () {
          return t.e(7006).then(t.bind(t, 7006)).then((function (e) {
            return e.TableCollection
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [7006]
            }
          }
        }),
        x = l()((function () {
          return t.e(1222).then(t.bind(t, 1222)).then((function (e) {
            return e.TimelineCollection
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [1222]
            }
          }
        }),
        j = l()((function () {
          return t.e(8774).then(t.bind(t, 8774)).then((function (e) {
            return e.DotsHorizontal
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [8774]
            }
          }
        }),
        g = l()((function () {
          return t.e(1127).then(t.bind(t, 1127)).then((function (e) {
            return e.CloseMenu
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [1127]
            }
          }
        }),
        y = l()((function () {
          return t.e(2344).then(t.bind(t, 2344)).then((function (e) {
            return e.Menu
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [2344]
            }
          }
        }),
        _ = l()((function () {
          return t.e(7004).then(t.bind(t, 7004)).then((function (e) {
            return e.Page
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [7004]
            }
          }
        }),
        b = l()((function () {
          return t.e(6852).then(t.bind(t, 6852)).then((function (e) {
            return e.Copy
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [6852]
            }
          }
        }),
        w = l()((function () {
          return t.e(3869).then(t.bind(t, 3869)).then((function (e) {
            return e.Search
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [3869]
            }
          }
        }),
        N = l()((function () {
          return t.e(2349).then(t.bind(t, 2349)).then((function (e) {
            return e.Close
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [2349]
            }
          }
        }),
        Z = function (e) {
          var n, t = !/^(\/api\/image|http)/.test(e.src),
            r = null === (n = e.src) || void 0 === n ? void 0 : n.startsWith("/icons/"),
            l = (0, i.Z)({
              width: e.size || "1em",
              height: e.size || "1em",
              fill: e.color || "var(--color-text-default-light)"
            }, e.style);
          if (e.type) switch (e.type) {
          case "chevronLeft":
            return (0, o.jsx)(s, {
              style: l
            });
          case "chevronRight":
            return (0, o.jsx)(d, {
              style: l
            });
          case "chevronDown":
            return (0, o.jsx)(u, {});
          case "boardCollection":
            return (0, o.jsx)(h, {});
          case "calendarCollection":
            return (0, o.jsx)(v, {});
          case "galleryCollection":
            return (0, o.jsx)(p, {});
          case "listCollection":
            return (0, o.jsx)(m, {});
          case "tableCollection":
            return (0, o.jsx)(f, {});
          case "timelineCollection":
            return (0, o.jsx)(x, {});
          case "dotsHorizontal":
            return (0, o.jsx)(j, {
              color: e.color
            });
          case "closeMenu":
            return (0, o.jsx)(g, {
              style: l,
              color: e.color
            });
          case "menu":
            return (0, o.jsx)(y, {
              style: l,
              color: e.color
            });
          case "page":
            return (0, o.jsx)(_, {
              style: l
            });
          case "copy":
            return (0, o.jsx)(b, {
              style: l
            });
          case "search":
            return (0, o.jsx)(w, {
              style: l,
              color: e.color
            });
          case "close":
            return (0, o.jsx)(N, {
              style: l
            })
          }
          return !t || (0, a.Fk)(e.src) || r ? (0, o.jsx)(c.t, {
            src: r ? "https://notion.so".concat(e.src) : e.src,
            alt: e.alt,
            size: {
              width: 60
            },
            width: e.width,
            height: e.height,
            className: "notion-icon",
            layout: e.width && e.height ? "fixed" : "fill",
            objectFit: e.objectFit || "contain",
            objectPosition: e.objectPosition || "center",
            style: l
          }) : (0, o.jsx)("span", {
            className: "notion-icon text",
            style: l,
            children: e.src
          })
        }
    },
    6182: function (e, n, t) {
      t.d(n, {
        T: function () {
          return j
        },
        H: function () {
          return f
        }
      });
      var i = t(6042),
        o = t(5893),
        r = (t(7294), t(2055)),
        l = t(195),
        a = t(7397),
        c = t(1817),
        s = t(6886),
        d = t(3046),
        u = t(9396),
        h = t(4671),
        v = t(7847),
        p = function (e) {
          var n;
          if (e.pageProperties) {
            var t = e.propertySort ? e.propertySort.map((function (n) {
              var t;
              return null === (t = e.pageProperties) || void 0 === t ? void 0 : t.find((function (e) {
                return e.id === n
              }))
            })).filter((function (e) {
              return !!e
            })) : e.pageProperties;
            return (null === t || void 0 === t ? void 0 : t.length) ? (0, o.jsxs)("div", {
              className: "notion-page__properties",
              children: [t.map((function (e) {
                return (0, o.jsxs)("div", {
                  className: "notion-page__property",
                  style: {
                    display: "grid",
                    gridTemplateColumns: "160px 1fr",
                    gap: 8,
                    minHeight: 36
                  },
                  children: [(0, o.jsx)("div", {
                    className: "notion-page__property-name",
                    children: (0, o.jsx)("span", {
                      children: e.name
                    })
                  }), (0, o.jsx)(v.Z, (0, u.Z)((0, i.Z)({}, e), {
                    pageProperty: !0
                  }))]
                }, e.id)
              })), (0, o.jsx)(h.i, (0, i.Z)({}, {
                id: "root-divider"
              }))]
            }) : null
          }
          return (null === (n = e.propertySort) || void 0 === n ? void 0 : n.length) ? (0, o.jsxs)("div", {
            className: "notion-page__properties",
            children: [e.propertySort.map((function (n) {
              var t, r = (0, u.Z)((0, i.Z)({}, n), {
                value: null === e || void 0 === e || null === (t = e.propertyValues) || void 0 === t ? void 0 : t[n.property]
              });
              return "hide_if_empty" !== r.visibility || r.value ? (0, o.jsxs)("div", {
                className: "notion-page__property",
                style: {
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: 8,
                  minHeight: 36
                },
                children: [(0, o.jsx)("div", {
                  className: "notion-page__property-name",
                  children: (0, o.jsx)("span", {
                    children: r.name
                  })
                }), (0, o.jsx)(v.Z, (0, u.Z)((0, i.Z)({}, r), {
                  pageProperty: !0
                }))]
              }, r.id) : null
            })), (0, o.jsx)(h.i, (0, i.Z)({}, {
              id: "root-divider"
            }))]
          }) : null
        },
        m = t(2860),
        f = function (e) {
          var n, t = (null === e || void 0 === e || null === (n = e.title) || void 0 === n ? void 0 : n.filter((function (e) {
              return /\S/g.test(e[0])
            }))) || [
              ["Untitled"]
            ],
            i = e.small ? 16 : 22,
            u = !!e.icon && !/^(\/api\/image|http)/.test(e.icon);
          return (0, o.jsx)(d.r, {
            id: e.id,
            uri: e.uri,
            className: (0, l.cn)("notion-page", u ? "emoji" : "", e.small ? "small" : "", (0, r.Of)(e.color)),
            children: (0, o.jsxs)("div", {
              children: [(0, o.jsx)("div", {
                className: (0, l.cn)("notion-page__icon", e.small ? "small" : ""),
                children: e.icon ? (0, o.jsx)(c.J, {
                  src: e.icon,
                  size: "1.25em",
                  width: i,
                  height: i,
                  alt: (0, a.S$)(t)
                }) : (0, o.jsx)(c.J, {
                  type: "page",
                  size: "1.25em",
                  width: i,
                  height: i,
                  alt: (0, a.S$)(t)
                })
              }), (0, o.jsx)("div", {
                className: "notion-page__title",
                children: (0, o.jsx)(s.m, {
                  isPage: !0,
                  noColor: !!e.color,
                  children: t
                })
              })]
            })
          }, e.id)
        },
        x = function (e) {
          var n = (0, m.l)().settings;
          return (0, o.jsxs)("article", {
            id: (0, a.wj)(e.id),
            className: (0, l.cn)("notion-root", e.fullWidth ? "full-width" : ""),
            children: [n.pageProperties ? (0, o.jsx)(p, (0, i.Z)({}, e)) : null, e.children]
          }, e.id)
        },
        j = function (e) {
          return e.isRoot ? (0, o.jsx)(x, (0, i.Z)({}, e)) : (0, o.jsx)(f, (0, i.Z)({}, e))
        }
    },
    6886: function (e, n, t) {
      t.d(n, {
        m: function () {
          return O
        }
      });
      var i = t(6042),
        o = t(9396),
        r = t(9815),
        l = t(5893),
        a = (t(7294), t(7484)),
        c = t.n(a),
        s = t(178),
        d = t.n(s),
        u = t(9387),
        h = t.n(u),
        v = t(7124),
        p = t.n(v),
        m = t(356),
        f = t.n(m),
        x = t(9133),
        j = t.n(x),
        g = t(8734),
        y = t.n(g),
        _ = t(3046),
        b = t(2055),
        w = t(195),
        N = t(6182),
        Z = t(2384),
        k = t(2860),
        S = t(5183),
        C = t.n(S);
      c().extend(C());
      var P = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        z = function (e) {
          switch (c()(e).startOf("day").diff(c()().startOf("day"), "days")) {
          case -1:
            return "Yesterday";
          case 0:
            return "Today";
          case 1:
            return "Tomorrow";
          default:
            return function (e) {
              return c()(e).startOf("day").diff(c()().startOf("day"), "day") > 0 ? "".concat(e.week() > c()().week() ? "Next " : "").concat(P[e.day()]) : "".concat(e.week() < c()().week() ? "Last " : "").concat(P[e.day()])
            }(e)
          }
        },
        T = function (e) {
          var n, t, i = e.date,
            o = e.time,
            r = e.timezone,
            l = e.isRelative,
            a = e.dateFormat,
            s = void 0 === a ? "MMMM D, YYYY" : a,
            d = e.timeFormat,
            u = void 0 === d ? "h:mm A" : d;
          "ll" === s && (s = "MMMM D, YYYY"), n = o ? c()("".concat(i, " ").concat(o), "YYYY-MM-DD HH:mm") : c()(i, "YYYY-MM-DD");
          var h = c()(n).startOf("day").diff(c()().startOf("day"), "day");
          if (t = l && h <= 7 && h >= -7 ? z(n) : n.format(s), o) {
            t += c()("".concat(i, " ").concat(o), "YYYY-MM-DD HH:mm").format(" ".concat(u));
            try {
              t += c()().tz(r).format(r ? " (z)" : "")
            } catch (v) {
              console.error(v)
            }
          }
          return i.startsWith("00") && (t = function (e, n) {
            return e.substring(0, e.length - 4) + +n.split("-")[0]
          }(t, i)), t
        },
        W = t(1817);
      c().extend(d()), c().extend(h()), c().extend(y()), c().extend(p()), c().extend(f()), c().extend(j());
      var O = function (e) {
        return (0, l.jsxs)("span", {
          className: (0, w.cn)("notion-semantic-string", e.noBorder ? "no-border" : ""),
          children: [e.pre, e.children && e.children.length && Array.isArray(e.children) ? e.children.filter((function (e) {
            return !!e
          })).map((function (n, t) {
            var a, c = n[0],
              s = n[1];
            if (!e.shortenLink || 0 !== c.indexOf("http://") && 0 !== c.indexOf("https://")) a = (0, l.jsx)(l.Fragment, {
              children: c
            });
            else try {
              var d = new URL(c).hostname;
              a = (0, l.jsx)(l.Fragment, {
                children: d
              })
            } catch (h) {
              a = (0, l.jsx)(l.Fragment, {})
            }
            if (s && s.length)
              if (e.isPage) a = (0, r.Z)(s).reduce((function (n, t, o) {
                var r = t[0],
                  a = t[1];
                switch (r) {
                case "h":
                  return e.noColor ? n : (0, l.jsx)("span", {
                    className: (0, w.cn)("highlighted-".concat(a.startsWith("Bg") ? "background" : "color"), (0, b.Of)(a)),
                    children: n
                  }, o);
                case "d":
                  return (0, l.jsx)(L, {
                    data: a,
                    isProperty: e.isProperty
                  });
                case "u":
                  return (0, l.jsx)(R, (0, i.Z)({
                    isProperty: e.isProperty
                  }, {
                    id: a
                  }), a);
                case "p":
                  return (0, l.jsx)(I, {
                    data: a,
                    noInteractive: e.noInteractive,
                    isProperty: e.isProperty
                  });
                default:
                  return (0, l.jsx)("span", {
                    children: n
                  }, o)
                }
              }), a);
              else if (e.noStyling) a = (0, r.Z)(s).reduce((function (n, t, o) {
              var r = t[0],
                a = t[1];
              switch (r) {
              case "d":
                return (0, l.jsx)(L, {
                  data: a,
                  isProperty: e.isProperty
                });
              case "u":
                return (0, l.jsx)(R, (0, i.Z)({
                  isProperty: e.isProperty
                }, {
                  id: a
                }), a);
              case "p":
                return (0, l.jsx)(I, {
                  data: a,
                  noInteractive: e.noInteractive,
                  isProperty: e.isProperty
                });
              default:
                return (0, l.jsx)("span", {
                  children: n
                }, o)
              }
            }), a);
            else {
              var u = function (n) {
                return (0, r.Z)(n).reduce((function (n, t, r) {
                  var a = t[0],
                    c = t[1];
                  switch (a) {
                  case "b":
                    return (0, l.jsx)("strong", {
                      children: n
                    }, r);
                  case "i":
                    return (0, l.jsx)("em", {
                      children: n
                    }, r);
                  case "s":
                    return (0, l.jsx)("del", {
                      children: n
                    }, r);
                  case "_":
                    return (0, l.jsx)("u", {
                      children: n
                    }, r);
                  case "c":
                    return (0, l.jsx)("code", {
                      className: "code",
                      children: n
                    }, r);
                  case "e":
                    return (0, l.jsx)(Z.C, (0, o.Z)((0, i.Z)({}, {
                      latex: c.trim()
                    }), {
                      inline: !0
                    }), r);
                  case "u":
                    var s;
                    return "string" === typeof c ? (0, l.jsx)(R, (0, i.Z)({
                      isProperty: e.isProperty
                    }, {
                      id: c
                    }), c) : (0, l.jsx)(R, (0, i.Z)({
                      isProperty: e.isProperty
                    }, c), (null === (s = c) || void 0 === s ? void 0 : s.id) || r);
                  case "p":
                    return (0, l.jsx)("span", {
                      className: "resource",
                      children: (0, l.jsx)(I, {
                        data: c,
                        noInteractive: e.noInteractive,
                        isProperty: e.isProperty
                      })
                    }, r);
                  case "d":
                    return (0, l.jsx)("span", {
                      className: "date",
                      children: (0, l.jsx)(L, {
                        data: c,
                        isProperty: e.isProperty
                      })
                    }, r);
                  case "a":
                    return e.noInteractive ? n : (0, l.jsx)(_.r, {
                      className: "link",
                      uri: e.isEmail ? "mailto:".concat(c) : e.isPhone ? "tel:".concat(c) : c,
                      children: n
                    }, r);
                  case "h":
                    return e.noColor ? n : (0, l.jsx)("span", {
                      className: (0, w.cn)("highlighted-".concat(c.startsWith("Bg") ? "background" : "color"), (0, b.Of)(c)),
                      children: n
                    }, r);
                  case "‣":
                    return u(c);
                  default:
                    return console.log("Unsupported formatting: ".concat(a)), (0, l.jsx)("span", {
                      children: n
                    }, r)
                  }
                }), a)
              };
              a = u(s)
            } else a = "," === c ? (0, l.jsx)(l.Fragment, {}) : (0, l.jsx)(l.Fragment, {
              children: c
            });
            return (0, l.jsx)("span", {
              children: a
            }, t)
          })) : e.children]
        })
      };

      function R(e) {
        var n = (0, k.l)().records,
          t = e.name ? e : n.entity[e.id];
        return t ? (0, l.jsxs)("span", {
          className: e.isProperty && t.image ? "individual-with-image" : "individual",
          children: [e.isProperty && t.image ? (0, l.jsx)(W.J, {
            style: {
              borderRadius: "50%"
            },
            src: t.image,
            size: 18,
            width: 18,
            height: 18,
            objectFit: "cover"
          }) : null, (0, l.jsxs)("span", {
            children: [e.isProperty ? null : (0, l.jsx)("span", {
              className: "notion-at",
              children: "@"
            }), t.name]
          })]
        }) : null
      }

      function I(e) {
        if (e.noInteractive) return (0, l.jsxs)("span", {
          children: [e.isProperty ? null : (0, l.jsx)("span", {
            className: "notion-at",
            children: "@"
          }), (0, l.jsx)("span", {
            className: "resource",
            children: (0, l.jsx)(O, {
              noInteractive: !0,
              noBorder: !0,
              children: e.data.title
            })
          })]
        });
        var n, t, r = "string" === typeof e.data ? e.data : (null === (n = e.data) || void 0 === n ? void 0 : n.uri) ? null === (t = e.data) || void 0 === t ? void 0 : t.uri.slice(1) : "";
        return (0, l.jsx)(N.H, (0, o.Z)((0, i.Z)({
          id: r
        }, e.data), {
          small: e.isProperty
        }))
      }

      function L(e) {
        var n, t = "relative" === e.data.date_format;
        t || (n = e.data.date_format);
        var i = "LT" === e.data.time_format ? "h:mm A" : e.data.time_format,
          o = T({
            date: e.data.start_date,
            time: e.data.start_time,
            timezone: e.data.time_zone,
            isRelative: t,
            dateFormat: n,
            timeFormat: i
          }),
          r = e.data.end_date ? T({
            date: e.data.end_date,
            time: e.data.end_time,
            timezone: e.data.time_zone,
            isRelative: t,
            dateFormat: n,
            timeFormat: i
          }) : null;
        try {
          return (0, l.jsxs)("span", {
            children: [e.isProperty ? null : (0, l.jsx)("span", {
              className: "notion-at",
              children: "@"
            }), e.data.end_date ? "".concat(o, " → ").concat(r) : o]
          })
        } catch (a) {
          return console.log("InlineDate Error:", a), (0, l.jsx)(l.Fragment, {
            children: ""
          })
        }
      }
    },
    2860: function (e, n, t) {
      t.d(n, {
        T: function () {
          return a
        },
        l: function () {
          return l
        }
      });
      var i = t(5893),
        o = t(7294),
        r = (0, o.createContext)({
          records: {},
          pageId: "",
          rootPageId: "",
          pageLocation: "",
          passwords: null,
          settings: {},
          config: {}
        }),
        l = function () {
          return (0, o.useContext)(r)
        },
        a = function (e) {
          return (0, i.jsx)(r.Provider, {
            value: e.value,
            children: e.children
          })
        }
    },
    4570: function (e, n, t) {
      t.d(n, {
        t: function () {
          return v
        }
      });
      var i = t(6042),
        o = t(9396),
        r = t(828),
        l = t(5893),
        a = t(7294),
        c = t(5675),
        s = t.n(c),
        d = t(7397),
        u = t(2860),
        h = function (e) {
          var n, t, r, c = e.src,
            s = e.lazy ? "lazy" : void 0,
            h = (0, u.l)().config,
            v = (0, a.useState)(!1),
            p = v[0],
            m = (v[1], (0, a.useState)(null)),
            f = m[0],
            x = m[1],
            j = (0, a.useMemo)((function () {
              var n, t, i, o, r, l, a, s, u, v, p, m, f, x = (0, d.HU)(c, h),
                j = x && (null === e || void 0 === e || null === (n = e.size) || void 0 === n ? void 0 : n.width) ? "".concat(c, "?").concat((null === (t = e.size) || void 0 === t ? void 0 : t.width) ? "w=".concat(e.size.width) : "") : c,
                g = x && (null === e || void 0 === e || null === (i = e.size) || void 0 === i || null === (o = i.mobile) || void 0 === o ? void 0 : o.width) ? "".concat(c, "?").concat((null === (r = e.size) || void 0 === r ? void 0 : r.width) ? "w=".concat(e.size.mobile.width) : "") : void 0;
              return {
                newSrc: j,
                webpSrc: x && ((null === e || void 0 === e || null === (l = e.size) || void 0 === l ? void 0 : l.width) || (null === e || void 0 === e || null === (a = e.size) || void 0 === a ? void 0 : a.height)) ? j + ((null === (s = e.size) || void 0 === s ? void 0 : s.width) || (null === (u = e.size) || void 0 === u ? void 0 : u.height) ? "&f=webp" : "f=webp") : x ? j + "?f=webp" : void 0,
                mobileSrc: g,
                mobileWebpSrc: g && x && (null === e || void 0 === e || null === (v = e.size) || void 0 === v || null === (p = v.mobile) || void 0 === p ? void 0 : p.width) ? g + ((null === e || void 0 === e || null === (m = e.size) || void 0 === m || null === (f = m.mobile) || void 0 === f ? void 0 : f.width) ? "&f=webp" : "f=webp") : g && x ? g + "?f=webp" : void 0
              }
            }), [c]),
            g = j.newSrc,
            y = j.webpSrc,
            _ = j.mobileSrc,
            b = j.mobileWebpSrc;
          return p || f ? (0, l.jsx)("div", {
            style: e.style,
            className: e.className,
            children: " "
          }) : (0, l.jsxs)("picture", {
            children: [b ? (0, l.jsx)("source", {
              srcSet: b,
              media: "(max-width: 546px)",
              type: "image/webp"
            }) : null, _ ? (0, l.jsx)("source", {
              src: _,
              media: "(max-width: 546px)"
            }) : null, y ? (0, l.jsx)("source", {
              srcSet: y,
              type: "image/webp"
            }) : null, (0, l.jsx)("img", (0, o.Z)((0, i.Z)({}, e), {
              style: (0, o.Z)((0, i.Z)({}, e.style || {}), {
                objectFit: e.objectFit,
                objectPosition: e.objectPosition
              }),
              width: (null === (n = e.size) || void 0 === n ? void 0 : n.width) || e.width || "100%",
              height: (null === (t = e.size) || void 0 === t ? void 0 : t.height) || e.height || (null === (r = e.style) || void 0 === r ? void 0 : r.height),
              src: g,
              loading: s,
              onError: function () {
                return x(!0)
              }
            }))]
          })
        },
        v = function (e) {
          var n, t, c = (0, r.Z)((null === (n = e.src) || void 0 === n ? void 0 : n.split("?b=")) || [], 2),
            v = c[0],
            p = (c[1], e.lazy ? "lazy" : void 0),
            m = (0, u.l)().config,
            f = (0, d.Fk)(v) || (0, d.q6)(v),
            x = (0, a.useState)(!1),
            j = x[0],
            g = (x[1], (0, a.useState)(null)),
            y = g[0],
            _ = g[1];
          if (f) return j || y ? (0, l.jsx)("div", {
            style: e.style,
            className: e.className
          }) : (0, l.jsx)("div", {
            style: {
              maxWidth: e.width,
              height: "100%"
            },
            children: (0, l.jsx)("img", (0, o.Z)((0, i.Z)({}, e), {
              width: "100%",
              height: e.height || (null === (t = e.style) || void 0 === t ? void 0 : t.height) || "100%",
              src: v,
              loading: p,
              onError: function () {
                return _(!0)
              },
              style: {
                objectPosition: e.objectPosition
              }
            }))
          });
          if ((0, d.HU)(v, m) && (e.width && "number" === typeof e.width && e.height && "number" === typeof e.height || e.unsized || e.layout)) {
            var b = "fill" === e.layout;
            return (0, l.jsx)(s(), {
              src: v,
              alt: e.alt,
              width: b ? void 0 : e.width,
              height: b ? void 0 : e.height,
              quality: e.quality || 80,
              className: e.className,
              priority: e.priority,
              layout: e.layout,
              objectFit: e.objectFit,
              objectPosition: e.objectPosition,
              loading: e.priority ? void 0 : p
            })
          }
          return (0, l.jsx)(h, (0, o.Z)((0, i.Z)({}, e), {
            lazy: !e.priority
          }))
        }
    },
    9503: function (e, n, t) {
      t.d(n, {
        f: function () {
          return un
        }
      });
      var i = t(5893),
        o = t(7294),
        r = t(5152),
        l = t.n(r),
        a = t(9008),
        c = t.n(a),
        s = t(1163),
        d = t(2918),
        u = t(1098),
        h = t(6042),
        v = t(9396),
        p = t(195),
        m = t(8174),
        f = t(7397),
        x = t(4570),
        j = t(6886),
        g = function (e) {
          var n, t = (0, f.S$)(null === e || void 0 === e ? void 0 : e.title),
            o = (null === e || void 0 === e || null === (n = e.icon) || void 0 === n ? void 0 : n.startsWith("/icons/")) ? "https://notion.so".concat(null === e || void 0 === e ? void 0 : e.icon) : (null === e || void 0 === e ? void 0 : e.icon) || "",
            r = e.noCover ? "" : (null === e || void 0 === e ? void 0 : e.cover) || "",
            l = "number" === typeof (null === e || void 0 === e ? void 0 : e.coverPosition) ? 100 * (1 - e.coverPosition) : 0,
            a = "collection_page" === e.type || "collection_inline" === e.type,
            c = !e || "page" !== e.type || null == e.fullWidth || e.fullWidth,
            s = !!r;
          return t || r || o ? (0, i.jsxs)("div", {
            className: (0, p.cn)("notion-header", a ? "collection" : "page"),
            children: [(0, i.jsx)("div", {
              className: (0, p.cn)("notion-header__cover", r ? "has-cover" : "no-cover"),
              children: r ? (0, i.jsx)(x.t, {
                src: r,
                alt: t,
                className: "notion-header__cover-image",
                priority: !0,
                layout: "fill",
                objectFit: "cover",
                objectPosition: "center ".concat(l, "%"),
                style: {
                  height: "100%"
                }
              }, "cover-".concat(e.id)) : null
            }), (0, i.jsx)("div", {
              className: (0, p.cn)("notion-header__content", r ? "has-cover" : "no-cover", o && o.startsWith ? o.startsWith("http") || o.startsWith("data") ? "has-icon-image" : "has-icon" : "no-icon", c ? void 0 : "max-width"),
              children: a ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)("div", {
                  className: "notion-header__title-wrapper",
                  style: {
                    marginTop: o && o.startsWith || !r ? void 0 : 48
                  },
                  children: [o && o.startsWith ? (0, i.jsx)("div", {
                    style: {
                      margin: "3px 18px 3px 3px"
                    },
                    children: o.startsWith("http") || o.startsWith("data") ? (0, i.jsx)(x.t, {
                      src: o,
                      alt: t,
                      priority: !0,
                      width: 35,
                      height: 35,
                      layout: "fixed",
                      objectFit: "cover",
                      objectPosition: "center",
                      className: "notion-header__icon"
                    }, "icon-".concat(e.id)) : (0, i.jsx)("div", {
                      style: {
                        fontSize: 36,
                        lineHeight: 1
                      },
                      children: o
                    })
                  }) : null, t ? (0, i.jsx)("h1", {
                    className: "notion-header__title",
                    children: t
                  }) : null]
                }), e.description ? (0, i.jsx)("div", {
                  className: "notion-header__description",
                  children: (0, i.jsx)(j.m, {
                    children: e.description
                  })
                }) : null]
              }) : (0, i.jsxs)("div", {
                className: "notion-header__title-wrapper",
                children: [o && o.startsWith ? (0, i.jsx)("div", {
                  className: (0, p.cn)("notion-header__icon-wrapper", s ? "has-cover" : "no-cover", o && o.startsWith ? o.startsWith("http") || o.startsWith("data") ? "has-icon-image" : "has-icon" : "no-icon"),
                  children: o.startsWith("http") || o.startsWith("data") ? (0, i.jsx)(x.t, {
                    src: o,
                    alt: t,
                    priority: !0,
                    layout: "fill",
                    objectFit: "cover",
                    objectPosition: "center",
                    className: "notion-header__icon"
                  }, "icon-".concat(e.id)) : (0, i.jsx)("div", {
                    children: o
                  })
                }) : null, t ? (0, i.jsx)("h1", {
                  className: "notion-header__title",
                  children: t
                }) : null]
              })
            })]
          }) : null
        },
        y = l()((function () {
          return t.e(3443).then(t.bind(t, 3443)).then((function (e) {
            return e.NotionNavBar
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [3443]
            }
          }
        }),
        _ = l()((function () {
          return t.e(903).then(t.bind(t, 903)).then((function (e) {
            return e.SuperNavBar
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [903]
            }
          }
        }),
        b = function (e) {
          var n, t;
          return (null === e || void 0 === e || null === (n = e.navbar) || void 0 === n ? void 0 : n.type) && "notion" !== (null === e || void 0 === e || null === (t = e.navbar) || void 0 === t ? void 0 : t.type) ? (0, i.jsx)(_, (0, h.Z)({}, e)) : (0, i.jsx)(y, (0, h.Z)({}, e))
        },
        w = t(2860),
        N = function (e) {
          return (0, i.jsx)("figcaption", {
            className: "notion-caption",
            children: (0, i.jsx)(j.m, {
              children: e.children
            })
          })
        },
        Z = function (e) {
          return (0, i.jsxs)("div", {
            id: (0, f.wj)(e.id),
            className: "notion-audio",
            children: [(0, i.jsx)("audio", {
              controls: !0,
              src: e.source
            }), e.caption ? (0, i.jsx)(N, {
              children: e.caption
            }) : ""]
          })
        },
        k = t(2055),
        S = function (e) {
          return (0, i.jsxs)("div", {
            id: (0, f.wj)(e.id),
            className: (0, p.cn)("notion-text", (0, k.Of)(e.color)),
            children: [(0, i.jsx)("p", {
              className: "notion-text__content",
              children: (0, i.jsx)(j.m, {
                children: e.title
              })
            }), e.children && e.children.length ? (0, i.jsx)("div", {
              className: "notion-text__children",
              children: e.children
            }) : ""]
          })
        },
        C = function (e) {
          var n, t = (0, w.l)().records;
          if (!t) return null;
          var o = function (e) {
            var n, t, o, r, l = null === e || void 0 === e || null === (n = e[0]) || void 0 === n || null === (t = n.props) || void 0 === t ? void 0 : t.type,
              a = null === e || void 0 === e || null === (o = e[0]) || void 0 === o || null === (r = o.props) || void 0 === r ? void 0 : r.subType;
            return "bulleted_list" === l ? (0, i.jsx)("ul", {
              className: (0, p.cn)("notion-bulleted-list", a),
              children: e
            }) : (0, i.jsx)("ol", {
              type: "letters" === a ? "a" : "roman" === a ? "i" : "1",
              className: "notion-numbered-list",
              children: e
            })
          };
          if (null === (n = e.type) || void 0 === n ? void 0 : n.includes("wrapper")) return o(e.children.map((function (n) {
            var o, r = t.block[n],
              l = r.children.map((function (e) {
                var n;
                return null === t || void 0 === t || null === (n = t.block) || void 0 === n ? void 0 : n[e]
              })),
              a = l.length && l.every((function (e) {
                return "bulleted_list" === (null === e || void 0 === e ? void 0 : e.type)
              }));
            return (0, i.jsx)(C, (0, v.Z)((0, h.Z)({}, r), {
              subType: r.subType || e.subType,
              bulleted: e.bulleted || a || (null === e || void 0 === e || null === (o = e.type) || void 0 === o ? void 0 : o.includes("bulleted_list"))
            }), n)
          })));
          var r = null,
            l = e.color ? (0, k.Of)(e.color) : "";
          if (e.children && e.children.length) {
            var a = !1,
              c = e.children.map((function (n) {
                var o = t.block[n];
                return o ? "numbered_list" === o.type || "bulleted_list" === o.type ? (a = !0, (0, i.jsx)(C, (0, v.Z)((0, h.Z)({}, o), {
                  subType: o.subType || e.subType,
                  bulleted: e.bulleted
                }), n)) : (0, i.jsx)(en, (0, h.Z)({}, o), n) : null
              }));
            r = (0, i.jsxs)(i.Fragment, {
              children: [e.title && e.title.length ? (0, i.jsx)("li", {
                id: (0, f.wj)(e.id),
                className: (0, p.cn)("notion-list-item", l),
                children: (0, i.jsx)(j.m, {
                  children: e.title
                })
              }, e.id) : (0, i.jsx)(S, (0, h.Z)({}, e), e.id), a ? o(c) : c]
            })
          } else r = e.title && e.title.length ? (0, i.jsx)("li", {
            id: (0, f.wj)(e.id),
            className: (0, p.cn)("notion-list-item", l),
            children: (0, i.jsx)(j.m, {
              children: e.title
            })
          }, e.id) : (0, i.jsx)(S, (0, h.Z)({}, e), e.id);
          return r
        },
        P = t(3046),
        z = t(1817),
        T = function (e) {
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              id: (0, f.wj)(e.id),
              className: (0, p.cn)("notion-bookmark", e.color ? (0, k.Of)(e.color) : void 0),
              style: e.caption ? {
                marginBottom: 0
              } : void 0,
              children: (0, i.jsxs)(P.r, {
                uri: e.link,
                children: [(0, i.jsx)(W, (0, h.Z)({}, e)), e.cover ? (0, i.jsx)("div", {
                  className: "notion-bookmark__cover",
                  children: (0, i.jsx)(x.t, {
                    src: e.cover,
                    alt: e.title,
                    size: {
                      width: 500,
                      mobile: {
                        width: 300
                      }
                    },
                    layout: "fill",
                    lazy: !0
                  })
                }) : ""]
              })
            }), e.caption ? (0, i.jsx)(N, {
              children: e.caption
            }) : ""]
          })
        },
        W = function (e) {
          var n;
          try {
            n = new URL(e.link).hostname
          } catch (t) {
            n = ""
          }
          return (0, i.jsxs)("div", {
            className: "notion-bookmark__content",
            children: [(0, i.jsx)("h5", {
              className: "notion-bookmark__title",
              children: e.title || n
            }), e.description ? (0, i.jsx)("p", {
              className: "notion-bookmark__description",
              children: e.description
            }) : "", (0, i.jsxs)("div", {
              className: "notion-bookmark__link",
              children: [e.icon ? (0, i.jsx)("div", {
                style: {
                  marginInlineEnd: 6,
                  display: "flex"
                },
                children: (0, i.jsx)(z.J, {
                  src: e.icon,
                  size: "1.1em",
                  width: 16,
                  height: 16
                })
              }) : null, (0, i.jsx)("p", {
                children: n
              })]
            })]
          })
        },
        O = function (e) {
          return (0, i.jsxs)("div", {
            id: (0, f.wj)(e.id),
            className: (0, p.cn)("notion-callout", (0, k.Of)(e.color, !0), e.color && -1 !== e.color.indexOf("background") ? void 0 : "border"),
            children: [(0, i.jsx)("div", {
              className: "notion-callout__icon",
              children: e.icon ? (0, i.jsx)(z.J, {
                src: e.icon,
                size: "1.5rem",
                alt: "icon",
                width: 24,
                height: 24
              }) : ""
            }), (0, i.jsxs)("div", {
              className: "notion-callout__content",
              children: [(0, i.jsx)(j.m, {
                children: e.title
              }), e.children]
            })]
          })
        },
        R = l()((function () {
          return Promise.all([t.e(815), t.e(9815)]).then(t.bind(t, 9350)).then((function (e) {
            return e.SyntaxHighlighter
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [9350]
            }
          }
        }),
        I = function (e) {
          return (0, i.jsxs)("div", {
            id: (0, f.wj)(e.id),
            className: (0, p.cn)("notion-code", e.wrap ? "" : "no-wrap"),
            children: [(0, i.jsx)(R, {
              language: null === e || void 0 === e ? void 0 : e.language,
              children: (0, f.S$)(e.title)
            }), (0, i.jsx)(N, {
              children: e.caption
            })]
          })
        },
        L = function (e) {
          return (0, i.jsx)("a", {
            className: "notion-anchor",
            href: "#".concat(e.href)
          })
        },
        M = function (e, n, t) {
          var i, o, r, l, a = n.find((function (n) {
            return t[e] && n.id === t[e]
          }));
          if (!a) return null;
          var c, s, d, u, h = (0, f.S$)(a.value);
          return h.trim().length || "link" !== e || "a" !== (null === (i = a.value) || void 0 === i || null === (o = i[0]) || void 0 === o || null === (r = o[1]) || void 0 === r || null === (l = r[0]) || void 0 === l ? void 0 : l[0]) ? h : null === (c = a.value) || void 0 === c || null === (s = c[0]) || void 0 === s || null === (d = s[1]) || void 0 === d || null === (u = d[0]) || void 0 === u ? void 0 : u[1]
        },
        F = t(7847),
        E = function (e) {
          var n, t = (null === (n = e.view) || void 0 === n ? void 0 : n.format) || {};
          return (0, i.jsx)("div", {
            className: "notion-collection-table__wrapper",
            children: (0, i.jsxs)("table", {
              className: (0, p.cn)("notion-collection-table", (null === t || void 0 === t ? void 0 : t.table_wrap) ? "wrap-cells" : void 0),
              children: [(0, i.jsx)("thead", {
                className: "notion-collection-table__head",
                children: (0, i.jsx)(B, (0, h.Z)({}, e))
              }), (0, i.jsx)("tbody", {
                className: "notion-collection-table__body",
                children: e.children.filter((function (e) {
                  return e.values
                })).map((function (n) {
                  return (0, i.jsx)(Y, (0, v.Z)((0, h.Z)({}, n), {
                    superProperties: (0, f.mg)(e)
                  }), n.id)
                }))
              })]
            })
          })
        },
        B = function (e) {
          var n = e.view.visibleColumns.filter((function (n) {
            return !Object.values((0, f.mg)(e)).includes(n.id)
          }));
          return (0, i.jsx)("tr", {
            children: n.map((function (e) {
              return (0, i.jsx)("th", {
                className: (0, p.cn)("notion-collection-table__head-cell", e.type),
                style: e.width ? {
                  width: "".concat(e.width + 2, "px")
                } : {},
                children: e.name
              }, e.id)
            }))
          })
        },
        Y = function (e) {
          return (0, i.jsx)("tr", {
            children: e.values && e.values.length ? e.values.filter((function (n) {
              return !Object.values((0, f.mg)(e)).includes(n.id)
            })).map((function (n) {
              return (0, i.jsx)(H, {
                row: e,
                col: n
              }, n.id)
            })) : null
          }, e.id)
        },
        H = function (e) {
          return "title" === e.col.type ? (0, i.jsx)(D, (0, h.Z)({}, e)) : (0, i.jsx)("td", {
            className: (0, p.cn)("notion-collection-table__cell", e.col.type),
            children: (0, i.jsx)(F.Z, (0, h.Z)({}, e.col))
          }, e.col.id)
        },
        D = function (e) {
          var n, t, o, r, l = (0, w.l)().settings,
            a = M("link", null === (n = e.row) || void 0 === n ? void 0 : n.values, null === (t = e.row) || void 0 === t ? void 0 : t.superProperties),
            c = (0, i.jsx)(F.Z, {
              type: "title",
              value: e.row.title,
              icon: (null === (o = e.row) || void 0 === o || null === (r = o.title) || void 0 === r ? void 0 : r.length) ? e.row.icon || (e.row.hasContent ? "page" : null) : null
            }),
            s = l.pageProperties || e.row.hasContent || a ? a || e.row.uri : null;
          return (0, i.jsx)("td", {
            className: (0, p.cn)("notion-collection-table__cell", e.col.type, s ? void 0 : "no-click"),
            children: s ? (0, i.jsx)(P.r, {
              uri: s,
              id: e.row.id,
              children: c
            }) : c
          }, e.col.id)
        },
        G = {
          small: 180,
          medium: 260,
          large: 320
        },
        q = function (e) {
          var n, t, o, r = (0, w.l)().settings,
            l = "number" === typeof (null === e || void 0 === e ? void 0 : e.coverPosition) ? 100 * (1 - (e.cardCoverPosition || .5)) : 50,
            a = M("link", null === e || void 0 === e ? void 0 : e.values, null === e || void 0 === e ? void 0 : e.superProperties),
            c = e.values && e.values.length ? e.values.filter((function (n) {
              return !Object.values((0, f.mg)(e)).includes(n.id)
            })).filter((function (e) {
              var n;
              return !!e.value && 0 !== (null === (n = e.value) || void 0 === n ? void 0 : n.length) && "title" !== e.type
            })) : [],
            s = (0, i.jsxs)(i.Fragment, {
              children: [e.hasCover ? (0, i.jsx)("div", {
                className: (0, p.cn)("notion-collection-card__cover", e.coverSize, e.containImage ? "contain" : void 0, !e.hideTitle || c && c.length ? void 0 : "only-cover"),
                children: e.cover ? (0, i.jsx)(x.t, {
                  src: e.cover,
                  alt: (null === (n = e.title) || void 0 === n || null === (t = n[0]) || void 0 === t ? void 0 : t[0]) || "item",
                  size: {
                    width: 3 * G[e.coverSize || "medium"]
                  },
                  layout: "fill",
                  objectFit: e.containImage ? "contain" : "cover",
                  objectPosition: "center ".concat(l, "%"),
                  lazy: !0
                }) : null
              }) : null, (null === c || void 0 === c ? void 0 : c.length) || !e.hideTitle ? (0, i.jsxs)("div", {
                className: (0, p.cn)("notion-collection-card__content", e.hideTitle ? "no-title" : void 0),
                children: [e.hideTitle ? null : (0, i.jsx)(F.Z, {
                  type: "title",
                  value: e.title,
                  icon: (null === e || void 0 === e || null === (o = e.title) || void 0 === o ? void 0 : o.length) ? e.icon || (e.hasContent ? "page" : null) : null,
                  iconSize: 16
                }), (null === c || void 0 === c ? void 0 : c.length) ? (0, i.jsx)("div", {
                  className: "notion-collection-card__property-list",
                  children: c.map((function (e) {
                    return (0, i.jsx)("div", {
                      className: "notion-collection-card__property",
                      children: (0, i.jsx)(F.Z, (0, v.Z)((0, h.Z)({}, e), {
                        componentType: "collection-card"
                      }))
                    }, e.id)
                  }))
                }) : null]
              }) : null]
            }),
            d = r.pageProperties || e.hasContent || a ? a || e.uri : null;
          return (0, i.jsxs)("div", {
            id: (0, f.wj)(e.id),
            className: (0, p.cn)("notion-collection-card", e.viewType, e.hasContent || a ? void 0 : "no-click"),
            style: e.style,
            children: [d ? (0, i.jsx)(P.r, {
              uri: d,
              className: "notion-collection-card__anchor",
              children: (0, f.S$)(e.title)
            }) : null, s]
          }, (0, f.wj)(e.id))
        },
        V = function (e) {
          var n = !e.hideCover && e.children.some((function (e) {
              return e.cover
            })),
            t = e.children.map((function (t) {
              var o;
              return (0, i.jsx)(q, (0, v.Z)((0, h.Z)({}, t), {
                superProperties: (0, f.mg)(e),
                hasCover: n,
                hideTitle: !!(null === (o = e.view) || void 0 === o ? void 0 : o.hideTitle),
                containImage: e.containImage,
                coverSize: e.coverSize,
                viewType: "gallery"
              }), t.id)
            }));
          return (0, i.jsx)("div", {
            className: (0, p.cn)("notion-collection-gallery", e.hideBorderTop ? "no-border-top" : "", e.grouped ? "grouped" : "", e.coverSize),
            children: t
          })
        },
        J = function (e) {
          var n = e.children.filter((function (e) {
            return e.values
          })).map((function (n) {
            return (0, i.jsx)(A, (0, v.Z)((0, h.Z)({}, n), {
              superProperties: (0, f.mg)(e)
            }), n.id)
          }));
          return (0, i.jsx)("div", {
            className: (0, p.cn)("notion-collection-list", e.hideBorderTop ? "no-border-top" : ""),
            children: n
          })
        },
        A = function (e) {
          var n, t = (0, w.l)().settings,
            o = M("link", null === e || void 0 === e ? void 0 : e.values, null === e || void 0 === e ? void 0 : e.superProperties),
            r = t.pageProperties || e.hasContent || o ? o || e.uri : null;
          return (0, i.jsxs)("div", {
            id: (0, f.wj)(e.id),
            className: "notion-collection-list__item",
            children: [r ? (0, i.jsx)(P.r, {
              uri: r,
              className: "notion-collection-list__item-anchor"
            }) : null, (0, i.jsx)(F.Z, {
              type: "title",
              value: e.title,
              icon: (null === e || void 0 === e || null === (n = e.title) || void 0 === n ? void 0 : n.length) ? e.icon || (e.hasContent ? "page" : null) : null
            }), (0, i.jsx)("div", {
              className: "notion-collection-list__item-content",
              children: e.values.filter((function (n) {
                return !Object.values((0, f.mg)(e)).includes(n.id)
              })).map((function (n) {
                return n.value ? (0, i.jsx)("div", {
                  className: "notion-collection-list__item-property",
                  children: (0, i.jsx)(F.Z, (0, v.Z)((0, h.Z)({}, n), {
                    icon: e.icon
                  }))
                }, n.id) : null
              }))
            })]
          }, (0, f.wj)(e.id))
        },
        $ = function (e) {
          var n = e.children.map((function (n) {
              return (0, i.jsx)(X, (0, v.Z)((0, h.Z)({}, n), {
                coverSize: e.coverSize,
                superProperties: (0, f.mg)(e),
                hideCover: e.hideCover,
                containImage: e.containImage,
                group: !!e.grouped
              }), n.column.id)
            })),
            t = n.map((function () {
              return "var(--collection-card-cover-size-".concat(e.coverSize, ")")
            })).join(" ");
          return (0, i.jsx)("div", {
            className: (0, p.cn)("notion-collection-board", e.hideBorderTop ? "no-border-top" : "", e.grouped ? "grouped" : "", e.coverSize),
            style: {
              gridTemplateColumns: t
            },
            children: n
          })
        },
        U = function (e) {
          var n, t, o;
          return (0, i.jsx)("div", {
            className: "notion-collection-board__column-header",
            children: (0, i.jsx)(F.Z, {
              type: null === (n = e.column.title) || void 0 === n ? void 0 : n.type,
              value: null === (t = e.column.title) || void 0 === t ? void 0 : t.value,
              icon: null === (o = e.column.title) || void 0 === o ? void 0 : o.icon
            })
          })
        },
        X = function (e) {
          return (0, i.jsxs)("div", {
            className: "notion-collection-board__column",
            children: [e.group ? null : (0, i.jsx)(U, {
              column: e.column
            }), e.items.map((function (n) {
              return (0, i.jsx)("div", {
                className: "notion-collection-board__item",
                children: (0, i.jsx)(q, (0, v.Z)((0, h.Z)({}, n), {
                  superProperties: e.superProperties,
                  hasCover: !e.hideCover && !!n.cover,
                  containImage: e.containImage,
                  coverSize: e.coverSize,
                  viewType: "board"
                }))
              }, n.id)
            }))]
          }, e.column.value)
        },
        K = t(9815),
        Q = t(7484),
        ee = t.n(Q),
        ne = t(734),
        te = t(6607),
        ie = t.n(te),
        oe = ["ar", "arc", "dv", "fa", "ha", "he", "khw", "ks", "ku", "ps", "ur", "yi"];
      ee().extend(ie());
      var re = function (e) {
          var n = 0 === ee()(e.date).day() || 6 === ee()(e.date).day();
          return (0, i.jsxs)("div", {
            className: (0, p.cn)("notion-collection-calendar__date", e.bottomBorder ? "" : "no-border", n ? "weekend" : "", 0 === e.index ? "first" : null),
            children: [(0, i.jsxs)("div", {
              className: (0, p.cn)("notion-collection-calendar__date-number", ee()().isSame(e.date, "day") ? "today" : e.isCurrentMonth ? "" : "inactive"),
              children: [e.isMobile || 1 !== e.date.date() ? null : e.date.format("MMM"), " ", e.date.format("D")]
            }), e.hasEvents ? (0, i.jsx)("div", {
              className: "notion-collection-calendar__event-dot-wrapper",
              children: (0, i.jsx)("div", {
                className: "notion-collection-calendar__event-dot"
              })
            }) : null]
          })
        },
        le = function (e) {
          var n, t = e.event,
            o = t.end_date,
            r = t.start_date,
            l = ee()(r).diff(ee()(e.dayRange.start), "day"),
            a = !1,
            c = !1;
          l < 0 ? (a = !0, n = 0) : n = l;
          var s = 1;
          o && (ee()(o).diff(ee()(e.dayRange.start), "day") > e.daysInMonth ? (c = !0, s = 7 - n) : s = ee()(o).diff(ee()(a ? e.dayRange.start : r), "day") + 1);
          return (0, i.jsx)("div", {
            className: "notion-collection-calendar__item-wrapper",
            style: {
              left: e.isRTL ? "" : "".concat(100 / 7 * n, "%"),
              right: e.isRTL ? "".concat(100 / 7 * n, "%") : "",
              width: "".concat(100 / 7 * s, "%"),
              top: "".concat(e.eventHeight * e.event.top, "px")
            },
            children: (0, i.jsx)("div", {
              className: (0, p.cn)("notion-collection-calendar__item", a ? "overflowLeft" : "", c ? "overflowRight" : ""),
              children: (0, i.jsx)(q, (0, v.Z)((0, h.Z)({
                style: {
                  height: "".concat(e.eventHeight - 6, "px")
                }
              }, e.event), {
                superProperties: (0, f.mg)(e),
                viewType: "calendar"
              }))
            })
          })
        },
        ae = function (e) {
          var n, t, o, r, l = e.isMobile ? 0 : e.events.map((function (e) {
              return e.top
            })),
            a = 24 * (e.isMobile ? 0 : (null === (t = e.events[0]) || void 0 === t || null === (o = t.values) || void 0 === o ? void 0 : o.length) || 0) + 30;
          return (0, i.jsxs)("div", {
            className: "notion-collection-calendar__row",
            style: {
              height: "".concat(30 + a * (l.length > 0 ? (n = Math).max.apply(n, (0, K.Z)(l)) + 1 : 1), "px")
            },
            children: [(0, K.Z)(Array(7)).map((function (n, t) {
              var o = 7 * e.index + t - e.firstDayOfMonth,
                r = ee()().date(1).month(e.month).year(e.year).add(o, "day"),
                l = ee()().month(e.month).isSame(r, "month"),
                a = !1;
              return e.isMobile && (a = e.events.some((function (e) {
                return ee()(r).startOf("day").isBetween(e.start_date, (null === e || void 0 === e ? void 0 : e.end_date) || e.start_date, null, "[]")
              }))), (0, i.jsx)(re, {
                bottomBorder: e.bottomBorder,
                hasEvents: a,
                isMobile: e.isMobile,
                date: r,
                isCurrentMonth: l,
                index: e.index
              }, "".concat(e.index, "-").concat(t))
            })), !e.isMobile && !!(null === (r = e.events) || void 0 === r ? void 0 : r.length) && e.events.map((function (n) {
              return (0, i.jsx)(le, {
                isRTL: e.isRTL,
                dayRange: e.dayRange,
                daysInMonth: e.daysInMonth,
                event: n,
                superProperties: (0, f.mg)(e),
                eventHeight: a
              }, n.id)
            }))]
          }, e.index)
        },
        ce = function (e) {
          var n = (0, w.l)().settings,
            t = oe.includes(n.language),
            r = (0, ne.Z)().isMobile,
            l = (0, o.useState)(ee()().subtract(0, "month").month()),
            a = l[0],
            c = l[1],
            s = (0, o.useState)(ee()().year()),
            d = s[0],
            u = s[1],
            p = ee()().month(a).year(d).daysInMonth(),
            m = ee()().year(d).month(a).date(0).day(),
            x = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          (0, w.l)().settings.mondayFirst ? x.push(x.shift()) : m++;
          var j = Math.ceil((p + m) / 7),
            g = function (n) {
              var t, i, o, r, l, a, c, s = (null === n || void 0 === n || null === (o = n.propertyValues) || void 0 === o || null === (r = o[null === (t = e.view) || void 0 === t || null === (i = t.format) || void 0 === i ? void 0 : i.calendar_by.property]) || void 0 === r || null === (l = r[0]) || void 0 === l || null === (a = l[1]) || void 0 === a || null === (c = a[0]) || void 0 === c ? void 0 : c[1]) || {};
              return {
                end_date: s.end_date,
                start_date: s.start_date
              }
            },
            y = function (e, n, t) {
              var i = null === e || void 0 === e ? void 0 : e.filter((function (e) {
                var i = g(e),
                  o = i.end_date,
                  r = i.start_date,
                  l = o ? +ee()(o) : null,
                  a = +ee()(r);
                return t = +ee()(t), !!(a <= (n = +ee()(n)) && l >= t || l <= t && l >= n || a <= t && a >= n)
              }));
              return i
            };
          return (0, i.jsxs)("div", {
            className: "notion-collection-calendar",
            children: [(0, i.jsxs)("div", {
              className: "notion-collection-calendar__header",
              children: [(0, i.jsx)("div", {
                className: "notion-collection-calendar__header-date",
                children: ee()().month(a).year(d).format("MMMM YYYY")
              }), (0, i.jsxs)("div", {
                className: "notion-collection-calendar__header-date-controls",
                children: [(0, i.jsx)("div", {
                  className: "notion-collection-calendar__header-date-back",
                  onClick: function () {
                    var e = ee()().month(a).year(d).subtract(1, "month");
                    c(e.month()), u(e.year())
                  },
                  children: (0, i.jsx)(z.J, {
                    type: t ? "chevronRight" : "chevronLeft"
                  })
                }), (0, i.jsx)("div", {
                  className: "notion-collection-calendar__header-date-today",
                  onClick: function () {
                    c(ee()().month()), u(ee()().year())
                  },
                  children: "Today"
                }), (0, i.jsx)("div", {
                  className: "notion-collection-calendar__header-date-forward",
                  onClick: function () {
                    var e = ee()().month(a).year(d).add(1, "month");
                    c(e.month()), u(e.year())
                  },
                  children: (0, i.jsx)(z.J, {
                    type: t ? "chevronLeft" : "chevronRight"
                  })
                })]
              })]
            }), (0, i.jsx)("div", {
              className: "notion-collection-calendar__week-days",
              children: x.map((function (e) {
                return (0, i.jsx)("div", {
                  className: "notion-collection-calendar__week-day-item",
                  children: e
                }, e)
              }))
            }), (0, K.Z)(Array(j)).map((function (n, o) {
              var l = ee()().date(1).month(a).year(d).subtract(m, "days").add(o, "week").startOf("day"),
                c = {
                  start: l,
                  end: l.add(6, "days").endOf("day")
                },
                s = function (e) {
                  var n = [],
                    t = [],
                    i = null === e || void 0 === e ? void 0 : e.sort((function (e, n) {
                      var t = ee()(n.created_time).diff(e.created_time, "second");
                      return t || (t = e.id < n.id ? -1 : 1), t
                    }));
                  return null === i || void 0 === i || i.forEach((function (e) {
                    var n = g(e),
                      i = n.end_date,
                      o = n.start_date,
                      r = (0, v.Z)((0, h.Z)({}, e), {
                        start_date: o
                      });
                    i && (r.end_date = i), t.push(r)
                  })), t.forEach((function (e, i) {
                    var o = e.end_date,
                      r = e.start_date,
                      l = o ? ee()(o).diff(r, "day") + 1 : 1,
                      a = function () {
                        for (var e, a = t.filter((function (e, n) {
                            return n < i
                          })), c = y((0, K.Z)(a), r, o || r), s = (null === (e = c[c.length - 1]) || void 0 === e ? void 0 : e.top) + 1 || 0, d = s, u = 0; u < s; u++) {
                          for (var h = !0, v = 0; v < l; v++) {
                            var p, m = ee()(r).add(v, "day").format("YYYY-MM-DD");
                            if (n[m] && (null === (p = n[m]) || void 0 === p ? void 0 : p[u])) {
                              h = !1;
                              break
                            }
                          }
                          if (h) {
                            d = u, n[r] || (n[r] = []), n[r][d] = 1;
                            break
                          }
                        }
                        return d
                      }();
                    e.top = a;
                    for (var c = 0; c < l; c++) {
                      var s = ee()(r).add(c, "day").format("YYYY-MM-DD");
                      n[s] || (n[s] = []), n[s][a] = 1
                    }
                  })), t
                }(y(e.children, c.start, c.end)).filter((function (e) {
                  return !!e.start_date
                }));
              return (0, i.jsx)(ae, {
                isRTL: t,
                isMobile: r,
                events: s,
                index: o,
                month: a,
                year: d,
                firstDayOfMonth: m,
                dayRange: c,
                daysInMonth: p,
                superProperties: (0, f.mg)(e),
                bottomBorder: o !== j - 1
              }, o)
            }))]
          })
        },
        se = function (e) {
          var n = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("span", {
              className: "notion-heading__anchor",
              id: e.id
            }), (0, i.jsx)(j.m, {
              children: e.title
            })]
          });
          switch (e.subType) {
          case "header":
            return (0, i.jsx)("h1", {
              id: (0, f.wj)(e.id),
              className: (0, p.cn)("notion-heading", (0, k.Of)(e.color), e.isToggle ? "toggle" : ""),
              children: n
            }, e.id);
          case "sub_header":
            return (0, i.jsx)("h2", {
              id: (0, f.wj)(e.id),
              className: (0, p.cn)("notion-heading", (0, k.Of)(e.color), e.isToggle ? "toggle" : ""),
              children: n
            }, e.id);
          default:
            return (0, i.jsx)("h3", {
              id: (0, f.wj)(e.id),
              className: (0, p.cn)("notion-heading", (0, k.Of)(e.color), e.isToggle ? "toggle" : ""),
              children: n
            }, e.id)
          }
        },
        de = function (e) {
          var n = e.className;
          return (0, i.jsx)("div", {
            className: (0, p.cn)("notion-toggle__trigger", n),
            children: (0, i.jsx)("div", {
              className: "notion-toggle__trigger_icon",
              children: (0, i.jsx)("span", {
                children: "‣"
              })
            })
          })
        },
        ue = function (e) {
          var n = (0, o.useState)(!1),
            t = n[0],
            r = n[1],
            l = "header" === e.subType ? "notion-toggle-heading-1" : "sub_header" === e.subType ? "notion-toggle-heading-2" : e.subType ? "notion-toggle-heading-3" : "";
          return (0, i.jsxs)("div", {
            id: (0, f.wj)(e.id),
            className: (0, p.cn)("notion-toggle", t ? "open" : "closed", l, (0, k.Of)(null === e || void 0 === e ? void 0 : e.color)),
            children: [(0, i.jsxs)("div", {
              className: "notion-toggle__summary",
              onClick: function () {
                return r(!t)
              },
              children: [(0, i.jsx)(de, {}), e.subType ? (0, i.jsx)(se, (0, v.Z)((0, h.Z)({}, e), {
                type: "heading",
                subType: e.subType,
                depth: e.depth,
                title: e.title,
                isToggle: !0
              })) : (0, i.jsx)(j.m, {
                children: e.title
              })]
            }), (0, i.jsx)("div", {
              className: "notion-toggle__content",
              children: e.children
            })]
          })
        },
        he = function (e) {
          var n = e.group,
            t = e.collectionComponent,
            r = e.viewProps,
            l = e.index,
            a = (0, o.useState)(!0),
            c = a[0],
            s = a[1],
            d = "board" === r.view.type,
            u = r.view.format.collection_group_by,
            m = [];
          return m = d && u ? r.children.map((function (e) {
            return (0, v.Z)((0, h.Z)({}, e), {
              items: e.items.filter((function (n, t) {
                var i = e.items.findIndex((function (e) {
                  return e.id === n.id
                }));
                return i === t
              })).filter((function (e) {
                return Object.values(n.blocks).some((function (n) {
                  return n.blockIds.includes(e.id)
                }))
              }))
            })
          })) : r.children.filter((function (e) {
            return n.blockIds.includes(e.id)
          })), (0, i.jsxs)("div", {
            className: (0, p.cn)("notion-collection-group__section", c ? "open" : "", d ? "board" : ""),
            children: [(0, i.jsxs)("div", {
              onClick: function () {
                return s(!c)
              },
              className: (0, p.cn)("notion-collection-group__section-header", d ? "no-border" : "", l > 0 ? "not-first" : ""),
              children: [(0, i.jsx)(de, {
                className: "notion-collection-group__section-toggle"
              }), (0, i.jsx)(F.Z, {
                type: n.title.type,
                value: n.title.value
              })]
            }), c ? (0, i.jsx)(t, (0, v.Z)((0, h.Z)({
              groupTitle: n.title.value,
              grouped: !0
            }, r), {
              children: m
            })) : null]
          })
        },
        ve = function (e) {
          var n = e.viewProps,
            t = e.collectionComponent;
          return n.view.groups.map((function (e, o) {
            return e.hidden ? null : (0, i.jsx)(he, {
              group: e,
              collectionComponent: t,
              viewProps: n,
              index: o
            }, o)
          }))
        },
        pe = function (e) {
          var n, t, o = (0, w.l)().records,
            r = e.view.type,
            l = function (e, n, t) {
              return (n || []).map((function (n) {
                if ("string" === typeof n) {
                  var i, r = (null === (i = o.block) || void 0 === i ? void 0 : i[n]) || {};
                  return r.values = t.map((function (n) {
                    var t, i, o = (null === r || void 0 === r || null === (t = r.propertyValues) || void 0 === t ? void 0 : t[n.id]) || (null === r || void 0 === r || null === (i = r.properties) || void 0 === i ? void 0 : i[n.id]);
                    return "board" !== e || (null === o || void 0 === o ? void 0 : o.length) ? (0, v.Z)((0, h.Z)({}, n), {
                      value: o,
                      options: null
                    }) : null
                  })).filter((function (e) {
                    return !!e
                  })), r
                }
                var l, a = null === (l = o.block) || void 0 === l ? void 0 : l[n.id];
                return a ? (0, h.Z)({}, n, a) : null
              })).filter((function (e) {
                return !!e
              }))
            },
            a = (0, v.Z)((0, h.Z)({}, e), {
              hideBorderTop: !1
            }),
            c = e.view.format || {},
            s = e.view.visibleColumns || [];
          switch (e.view.type) {
          case "board":
            var d;
            a.coverSize = (null === c || void 0 === c ? void 0 : c.board_cover_size) || "medium", a.containImage = "contain" === (null === c || void 0 === c ? void 0 : c.board_cover_aspect), a.hideCover = !(null === c || void 0 === c || null === (d = c.board_cover) || void 0 === d ? void 0 : d.type), a.children = e.view.boardItems.map((function (n) {
              return (0, v.Z)((0, h.Z)({}, n), {
                items: l(e.view.type, n.items, s)
              })
            }));
            break;
          case "calendar":
          case "table":
          case "list":
            a.children = l(e.view.type, e.view.items, s);
            break;
          case "gallery":
            var u;
            a.coverSize = c.gallery_cover_size || "medium", a.containImage = "contain" === (null === c || void 0 === c ? void 0 : c.gallery_cover_aspect), a.hideCover = !(null === c || void 0 === c || null === (u = c.gallery_cover) || void 0 === u ? void 0 : u.type), a.children = l(e.view.type, e.view.items, s)
          }
          if ((null === (n = a.view.format) || void 0 === n ? void 0 : n.collection_groups) && (null === (t = a.view.groups) || void 0 === t ? void 0 : t.length) > 0) {
            var p, m = "";
            return "board" === a.view.type && (m = e.view.boardItems.map((function () {
              return "var(--collection-card-cover-size-".concat(a.coverSize, ")")
            })).join(" ")), (null === a || void 0 === a || null === (p = a.children) || void 0 === p ? void 0 : p.length) ? (0, i.jsxs)("div", {
              className: "notion-collection-group__".concat(r),
              children: [(0, i.jsx)("div", {
                className: "notion-collection-group__header",
                style: {
                  gridTemplateColumns: m
                },
                children: a.children.map((function (e, n) {
                  return "board" === a.view.type ? (0, i.jsx)(U, (0, h.Z)({}, e), e.id) : null
                }))
              }), (0, i.jsx)(ve, {
                viewProps: a,
                collectionComponent: "table" === r ? E : "gallery" === r ? V : "list" === r ? J : "board" === r ? $ : null
              })]
            }) : null
          }
          var f, x, j = null === e || void 0 === e || null === (f = e.view) || void 0 === f || null === (x = f.format) || void 0 === x ? void 0 : x.hide_linked_collection_name,
            g = e.views.length > 1;
          switch (a.hideBorderTop = !!(e.grouped || j && !g), r) {
          case "table":
            return (0, i.jsx)(E, (0, h.Z)({}, a));
          case "gallery":
            return (0, i.jsx)(V, (0, h.Z)({}, a));
          case "list":
            return (0, i.jsx)(J, (0, h.Z)({}, a));
          case "board":
            return (0, i.jsx)($, (0, h.Z)({}, a));
          case "calendar":
            return (0, i.jsx)(ce, (0, h.Z)({}, a));
          default:
            return console.log('Collection view type "'.concat(r, '" is unsupported')), (0, i.jsx)(i.Fragment, {})
          }
        },
        me = t(9828),
        fe = t(4324),
        xe = function (e) {
          var n = (0, me.O)(),
            t = n.containerRef,
            r = n.isShown,
            l = n.onOpen,
            a = n.onClose,
            c = (0, o.useState)(e.views[0]),
            s = c[0],
            d = c[1],
            u = e.views.filter((function (e) {
              return "timeline" !== (null === e || void 0 === e ? void 0 : e.type)
            }));
          return (0, i.jsx)(fe.L, {
            selectedOption: {
              label: s.name,
              value: s.id,
              icon: "".concat(s.type, "Collection")
            },
            containerRef: t,
            isShown: r,
            onOpen: l,
            onClose: a,
            children: (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("div", {
                className: "notion-dropdown__menu-header",
                children: (0, i.jsxs)("p", {
                  children: [u.length, " views"]
                })
              }), (0, i.jsx)("div", {
                className: "notion-dropdown__option-list",
                children: u.map((function (n) {
                  return (0, i.jsxs)("div", {
                    className: "notion-dropdown__option ".concat(n.id === s.id ? "active" : ""),
                    onClick: function () {
                      d(n), e.onClick(n), a()
                    },
                    children: [(0, i.jsx)("div", {
                      className: "notion-dropdown__option-icon",
                      children: (0, i.jsx)(z.J, {
                        type: "".concat(n.type, "Collection")
                      })
                    }), (0, i.jsx)("p", {
                      children: n.name
                    })]
                  }, n.id)
                }))
              })]
            })
          })
        },
        je = function (e) {
          var n, t, r, l = e.views,
            a = e.superProperties,
            c = (0, w.l)().settings,
            s = null === (n = e.collectionId) || void 0 === n ? void 0 : n.split("-").join(""),
            d = (0, o.useState)(null === l || void 0 === l ? void 0 : l[0]),
            u = d[0],
            h = d[1];
          return (null === l || void 0 === l ? void 0 : l.length) ? "collection_page" === e.type ? (0, i.jsxs)("main", {
            id: (0, f.wj)(e.id),
            className: (0, p.cn)("notion-collection", "notion-collection-page", s ? "collection-".concat(s) : ""),
            children: [c.viewSwitcher && l.length > 1 ? (0, i.jsx)("div", {
              className: "notion-collection__header-wrapper",
              children: (0, i.jsx)(xe, {
                collectionName: (0, f.S$)(e.title),
                views: l,
                onClick: function (e) {
                  return h(e)
                }
              })
            }) : null, (0, i.jsx)(pe, {
              view: u,
              views: l,
              superProperties: a
            })]
          }) : (0, i.jsxs)("div", {
            id: (0, f.wj)(e.id),
            className: (0, p.cn)("notion-collection", "inline", s ? "collection-".concat(s) : ""),
            children: [e.isRoot && c.viewSwitcher && l.length > 1 ? (0, i.jsx)("div", {
              className: "notion-collection__header-wrapper",
              children: (0, i.jsx)(xe, {
                collectionName: (0, f.S$)(e.title),
                views: l,
                onClick: function (e) {
                  return h(e)
                }
              })
            }) : e.isRoot || (null === u || void 0 === u || null === (t = u.format) || void 0 === t ? void 0 : t.hide_linked_collection_name) && !(c.viewSwitcher && l.length > 1) ? null : (0, i.jsxs)("div", {
              className: "notion-collection__header-wrapper",
              children: [(null === u || void 0 === u || null === (r = u.format) || void 0 === r ? void 0 : r.hide_linked_collection_name) ? null : (0, i.jsxs)("h3", {
                className: "notion-collection__header",
                children: [(0, i.jsx)(L, {
                  href: e.id
                }), (null === u || void 0 === u ? void 0 : u.icon) && u.icon.startsWith ? (0, i.jsx)("div", {
                  className: "notion-collection__header-icon",
                  children: u.icon.startsWith("http") || u.icon.startsWith("data") ? (0, i.jsx)(x.t, {
                    src: e.icon,
                    priority: e.isRoot,
                    width: 21,
                    height: 21,
                    layout: "fixed",
                    objectFit: "cover",
                    objectPosition: "center"
                  }, "icon-".concat(e.id)) : (0, i.jsx)("div", {
                    style: {
                      fontSize: 21,
                      lineHeight: 1
                    },
                    children: null === u || void 0 === u ? void 0 : u.icon
                  })
                }) : null, (0, i.jsx)(j.m, {
                  children: (null === u || void 0 === u ? void 0 : u.title) || e.title
                })]
              }), c.viewSwitcher && l.length > 1 ? (0, i.jsx)(xe, {
                collectionName: (0, f.S$)(e.title),
                views: l,
                onClick: function (e) {
                  return h(e)
                }
              }) : null]
            }), (0, i.jsx)(pe, {
              view: u,
              views: l,
              superProperties: a
            })]
          }) : (console.log('Cannot find any views in collection "'.concat(e.collectionId, '".')), (0, i.jsx)(i.Fragment, {}))
        },
        ge = t(6182),
        ye = function (e) {
          return e.isRoot ? (0, i.jsx)(je, (0, h.Z)({}, e)) : (0, i.jsx)(ge.H, (0, h.Z)({}, e))
        },
        _e = function (e) {
          return (0, i.jsx)("div", {
            id: (0, f.wj)(e.id),
            className: "notion-column-list",
            children: e.children
          }, e.id)
        };

      function be(e) {
        var n = (0, w.l)().records.block[e.parentId],
          t = (null === n || void 0 === n ? void 0 : n.multiplyer) || 1,
          o = {
            width: "calc((100% - var(--column-spacing) * ".concat(e.listLength - 1, ") * ").concat(e.ratio * t, ")")
          };
        return 0 !== e.listOrder && (o.marginInlineStart = "var(--column-spacing)"), (0, i.jsx)("div", {
          id: (0, f.wj)(e.id),
          className: "notion-column",
          style: o,
          children: e.children
        }, e.id)
      }
      var we = t(4671),
        Ne = t(6229),
        Ze = t(2812),
        ke = t(4110),
        Se = t.n(ke);
      ee().extend(Se());
      var Ce = function (e) {
          var n, t = null === (n = e.attributes) || void 0 === n ? void 0 : n.reduce((function (e, n) {
            switch (n.id) {
            case "avatar_url":
              e.avatarURL = null === n || void 0 === n ? void 0 : n.values[0];
              break;
            case "title":
              e.title = null === n || void 0 === n ? void 0 : n.values[0];
              break;
            case "thumbnail_url":
              e.thumbnail = null === n || void 0 === n ? void 0 : n.values[0];
              break;
            case "username":
              e.username = null === n || void 0 === n ? void 0 : n.values[0];
              break;
            case "updated_at":
              var t;
              e.updatedAt = null === (t = null === n || void 0 === n ? void 0 : n.values[0]) || void 0 === t ? void 0 : t.start_date
            }
            return e
          }), {
            title: "Untitled",
            avatarURL: void 0,
            thumbnail: void 0,
            username: void 0,
            updatedAt: void 0
          });
          return t ? (0, i.jsxs)("div", {
            className: "notion-external-object",
            children: [t.thumbnail ? (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("div", {
                className: "notion-external-object__thumnail-wrapper",
                children: (0, i.jsx)(x.t, {
                  src: t.thumbnail,
                  className: "notion-external-object__thumbnail"
                })
              }), (0, i.jsx)("div", {
                className: "notion-external-object__divider"
              })]
            }) : null, (0, i.jsx)("a", {
              href: e.uri,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "notion-external-object__attributes-wrapper",
              children: (0, i.jsxs)("div", {
                className: "notion-external-object__attributes",
                children: [(0, i.jsx)(x.t, {
                  src: t.avatarURL,
                  className: "notion-external-object__avatar"
                }), (0, i.jsxs)("div", {
                  className: "notion-external-object__details",
                  children: [(0, i.jsx)("p", {
                    children: t.title
                  }), t.username || t.updatedAt ? (0, i.jsxs)("p", {
                    className: "notion-external-object__last-modified",
                    children: [t.updatedAt ? "Last modified " : "", t.username ? "by ".concat(t.username).concat(t.updatedAt ? " • " : "") : "", t.updatedAt ? ee()(t.updatedAt).fromNow() : ""]
                  }) : null]
                })]
              })
            })]
          }) : (0, i.jsx)(i.Fragment, {})
        },
        Pe = t(1438),
        ze = t(8029),
        Te = t(6567),
        We = function (e) {
          (0, ze.Z)(t, e);
          var n = (0, Te.Z)(t);

          function t() {
            return (0, Pe.Z)(this, t), n.apply(this, arguments)
          }
          var o = t.prototype;
          return o.componentDidMount = function () {
            this._updateIframeContent()
          }, o.componentDidUpdate = function (e, n) {
            this._updateIframeContent()
          }, o._defineUrl = function () {
            var e = this.props,
              n = e.id,
              t = e.file,
              i = t ? "?file=".concat(t) : "";
            return "https://gist.github.com/".concat(n, ".js").concat(i)
          }, o._updateIframeContent = function () {
            var e = this.props,
              n = e.id,
              t = e.file,
              i = this.iframeNode,
              o = i.document;
            i.contentDocument ? o = i.contentDocument : i.contentWindow && (o = i.contentWindow.document);
            var r = this._defineUrl(),
              l = '<script type="text/javascript" src="'.concat(r, '"><\/script>'),
              a = t ? "gist-".concat(n, "-").concat(t) : "gist-".concat(n),
              c = "onload=\"parent.document.getElementById('".concat(a, "').style.height=document.body.scrollHeight + 'px'\""),
              s = '<html><head><base target="_parent">'.concat("<style>*{font-size:12px;}</style>", "</head><body ").concat(c, ">").concat(l, "</body></html>");
            o.open(), o.writeln(s), o.close()
          }, o.render = function () {
            var e = this,
              n = this.props,
              t = n.id,
              o = n.file;
            return (0, i.jsx)("iframe", {
              ref: function (n) {
                e.iframeNode = n
              },
              width: "100%",
              frameBorder: 0,
              id: o ? "gist-".concat(t, "-").concat(o) : "gist-".concat(t)
            })
          }, t
        }(o.PureComponent),
        Oe = function (e) {
          var n = (0, o.useState)(!1),
            t = n[0],
            r = n[1],
            l = e.fullWidth || e.pageWidth || -1 === e.width ? "100%" : "".concat(e.width, "px"),
            a = e.height;
          return (0, o.useEffect)((function () {
            return r(!0)
          }), []), (0, i.jsx)("div", {
            style: -1 === e.aspectRatio ? {
              width: l,
              height: a
            } : {
              width: l,
              paddingBottom: "".concat(100 * e.aspectRatio, "%")
            },
            children: (0, i.jsx)(Ne.Z, {
              className: e.externalObject ? "notion-embed__container__external_object" : "notion-embed__container",
              width: "100%",
              height: "100%",
              onContentVisible: e.onContentVisible,
              offsetVertical: 800,
              debounce: !e.loading,
              children: t ? e.children : ""
            })
          })
        },
        Re = function (e) {
          var n, t, o, r, l, a = null === (n = e.source) || void 0 === n ? void 0 : n.startsWith("https://tally.so/embed"),
            c = "allow-scripts allow-popups allow-forms allow-same-origin ".concat(a ? "allow-top-navigation" : "allow-top-navigation-by-user-activation");
          return (0, i.jsx)(Oe, (0, v.Z)((0, h.Z)({}, e), {
            onContentVisible: function () {
              return e.setLoading(!1)
            },
            children: (0, i.jsx)("iframe", {
              src: e.source,
              title: (null === (l = null === (o = null === (t = e.source) || void 0 === t ? void 0 : t.split("://")) || void 0 === o || null === (r = o[1]) || void 0 === r ? void 0 : r.split("/")) || void 0 === l ? void 0 : l[0]) || "",
              sandbox: c,
              allowFullScreen: !0,
              loading: "lazy",
              frameBorder: "0"
            })
          }))
        },
        Ie = function (e) {
          return (0, i.jsx)(Oe, (0, v.Z)((0, h.Z)({}, e), {
            externalObject: !0,
            onContentVisible: function () {
              return e.setLoading(!1)
            },
            children: (0, i.jsx)(Ce, {
              uri: e.uri,
              attributes: e.attributes
            })
          }))
        },
        Le = function (e) {
          var n = e.source.split("/").slice(-1)[0].split("#")[0];
          return (0, i.jsx)(Oe, (0, v.Z)((0, h.Z)({}, e), {
            onContentVisible: function () {
              e.setLoading(!1);
              var t = document.getElementById("gist-".concat(n));
              t && t.addEventListener("load", (function () {
                return e.setHeight(t.style.height)
              }))
            },
            children: (0, i.jsx)(We, {
              id: n
            })
          }))
        },
        Me = function (e) {
          var n = "embed" === e.type ? "notion-embed" : "notion-embed notion-".concat(e.type),
            t = (0, o.useState)(!0),
            r = t[0],
            l = t[1],
            a = (0, o.useState)(null),
            c = a[0],
            s = a[1];
          return (0, i.jsxs)("div", {
            id: (0, f.wj)(e.id),
            className: n,
            style: c ? {
              height: c
            } : void 0,
            children: [(0, i.jsxs)("div", {
              className: "notion-embed__content",
              children: [r ? (0, i.jsx)("div", {
                className: "notion-embed__loader",
                children: (0, i.jsx)(Ze.Loader, {})
              }) : null, "embed" === e.type || "maps" === e.type || "typeform" === e.type ? (0, i.jsx)(Re, (0, v.Z)((0, h.Z)({}, e), {
                loading: r,
                setLoading: l
              })) : "external_object_instance" === e.type ? (0, i.jsx)(Ie, (0, v.Z)((0, h.Z)({}, e), {
                loading: r,
                setLoading: l
              })) : "gist" === e.type ? (0, i.jsx)(Le, (0, v.Z)((0, h.Z)({}, e), {
                loading: r,
                setLoading: l,
                setHeight: s
              })) : null]
            }), e.caption ? (0, i.jsx)(N, {
              children: e.caption
            }) : ""]
          })
        },
        Fe = t(2384),
        Ee = function (e) {
          return (0, i.jsx)(P.r, {
            id: e.id,
            className: "notion-file",
            uri: e.source,
            children: (0, i.jsxs)("div", {
              children: [(0, i.jsx)("div", {
                className: "notion-file__icon",
                children: (0, i.jsx)("svg", {
                  viewBox: "0 0 30 30",
                  style: {
                    width: "1.35em",
                    height: "1.35em",
                    fill: "inherit"
                  },
                  children: (0, i.jsx)("g", {
                    children: (0, i.jsx)("path", {
                      d: "M22,8v12c0,3.866-3.134,7-7,7s-7-3.134-7-7V8c0-2.762,2.238-5,5-5s5,2.238,5,5v12c0,1.657-1.343,3-3,3s-3-1.343-3-3V8h-2v12c0,2.762,2.238,5,5,5s5-2.238,5-5V8c0-3.866-3.134-7-7-7S6,4.134,6,8v12c0,4.971,4.029,9,9,9s9-4.029,9-9V8H22z"
                    })
                  })
                })
              }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)("span", {
                  className: "notion-file__title",
                  children: e.title
                }), e.size ? (0, i.jsx)("span", {
                  className: "notion-file__size",
                  children: e.size
                }) : ""]
              })]
            })
          })
        },
        Be = function (e) {
          return (0, i.jsx)("div", {
            id: (0, f.wj)(e.id),
            className: (0, p.cn)("notion-google-drive", "notion-bookmark", e.color ? (0, k.Of)(e.color) : void 0),
            children: (0, i.jsxs)(P.r, {
              uri: e.link,
              children: [e.cover ? (0, i.jsx)("div", {
                className: "notion-google-drive__cover",
                children: (0, i.jsx)(x.t, {
                  src: e.cover,
                  alt: e.title,
                  layout: "fill",
                  objectFit: "cover",
                  objectPosition: "center top"
                })
              }) : "", (0, i.jsx)(W, (0, h.Z)({}, e))]
            })
          })
        },
        Ye = function (e) {
          var n, t, o, r, l, a, c, s, d, u, h = e.fullWidth ? "calc(100vw - var(--scrollbar-width))" : e.pageWidth ? "100%" : "".concat(e.width, "px"),
            v = e.fullWidth ? "full-width" : e.pageWidth ? "page-width" : "normal",
            m = -1 === e.height ? "100%" : e.height + "px",
            j = {
              width: h.endsWith("px") ? e.width : 1500,
              mobile: {
                width: h.endsWith("px") ? e.width : 750
              }
            },
            g = (0, i.jsxs)(i.Fragment, {
              children: ["page-width" === v && e.width && -1 !== e.width && e.aspectRatio && -1 !== e.aspectRatio && e.preserveScale ? (0, i.jsx)(x.t, {
                src: e.source,
                alt: (null === e || void 0 === e || null === (n = e.caption) || void 0 === n || null === (t = n[0]) || void 0 === t ? void 0 : t[0]) || "image",
                size: j,
                width: e.width,
                height: e.width * e.aspectRatio,
                layout: "responsive",
                objectFit: "contain",
                objectPosition: "center",
                lazy: !0,
                style: {
                  width: "100%",
                  height: "100%"
                }
              }) : "normal" === v && e.width && e.height && -1 !== e.width && (-1 !== e.height || e.preserveScale && e.aspectRatio && -1 !== e.aspectRatio) ? (0, i.jsx)(x.t, {
                src: e.source,
                alt: (null === e || void 0 === e || null === (o = e.caption) || void 0 === o || null === (r = o[0]) || void 0 === r ? void 0 : r[0]) || "image",
                size: j,
                width: e.width,
                height: e.preserveScale && e.aspectRatio ? e.width * e.aspectRatio : m,
                lazy: !0
              }) : "full-width" === v && (null === e || void 0 === e ? void 0 : e.aspectRatio) > 0 ? (0, i.jsx)("div", {
                style: {
                  position: "relative",
                  width: "100vw",
                  height: "calc(100vw * ".concat(e.aspectRatio, ")")
                },
                children: (0, i.jsx)(x.t, {
                  src: e.source,
                  alt: (null === e || void 0 === e || null === (l = e.caption) || void 0 === l || null === (a = l[0]) || void 0 === a ? void 0 : a[0]) || "image",
                  size: j,
                  width: "100%",
                  height: "100%",
                  style: {
                    height: m,
                    display: "block"
                  },
                  layout: "fill",
                  lazy: !0
                })
              }) : "full-width" === v && e.width && e.height && -1 !== e.width && -1 !== e.height ? (0, i.jsx)(x.t, {
                src: e.source,
                alt: (null === e || void 0 === e || null === (c = e.caption) || void 0 === c || null === (s = c[0]) || void 0 === s ? void 0 : s[0]) || "image",
                size: j,
                width: h,
                height: m,
                style: {
                  height: m,
                  display: "block"
                },
                lazy: !0
              }) : (0, i.jsx)(x.t, {
                src: e.source,
                alt: (null === e || void 0 === e || null === (d = e.caption) || void 0 === d || null === (u = d[0]) || void 0 === u ? void 0 : u[0]) || "image",
                size: j,
                style: e.fullWidth ? {
                  height: m,
                  display: "block"
                } : {
                  width: "100%",
                  maxWidth: h,
                  display: "block"
                },
                lazy: !0
              }), !e.link && e.caption && e.caption.length ? (0, i.jsx)(N, {
                children: e.caption
              }) : ""]
            });
          return (0, i.jsx)("div", {
            id: (0, f.wj)(e.id),
            className: (0, p.cn)("notion-image", v),
            children: e.link ? (0, i.jsx)(P.r, {
              uri: e.link,
              children: g
            }) : g
          })
        },
        He = function (e) {
          var n = e.source.startsWith("https://docs.google.com/presentation");
          return (0, i.jsxs)("div", {
            id: (0, f.wj)(e.id),
            className: "notion-pdf",
            children: [(0, i.jsx)("div", {
              className: "notion-pdf__content",
              children: (0, i.jsx)("embed", {
                width: e.fullWidth ? "100%" : e.width,
                height: e.height,
                src: e.source,
                type: n ? void 0 : "application/pdf"
              })
            }), e.caption ? (0, i.jsx)(N, {
              children: e.caption
            }) : ""]
          })
        },
        De = function (e) {
          return (0, i.jsxs)("blockquote", {
            id: (0, f.wj)(e.id),
            className: (0, p.cn)("notion-quote", (0, k.Of)(e.color)),
            children: [(0, i.jsx)(j.m, {
              children: e.title
            }), e.children]
          })
        },
        Ge = function (e) {
          var n = JSON.parse(JSON.stringify(e));
          return (null === n || void 0 === n ? void 0 : n[0]) && (n[0][0] = n[0][0].trimStart(), n[n.length - 1][0] = n[n.length - 1][0].trimEnd(), "" === n[n.length - 1][0] && n.pop()), n
        },
        qe = function (e) {
          for (var n, t = (0, w.l)(), o = t.records, r = t.pageId, l = function (e, n) {
              var t, i = function (e) {
                  var t;
                  null === e || void 0 === e || null === (t = e.children) || void 0 === t || t.forEach((function (e) {
                    var t = n.block[e];
                    ("heading" === (null === t || void 0 === t ? void 0 : t.type) || Ve(t)) && o.push(t)
                  }))
                },
                o = [];

              function r(e) {
                switch (null === e || void 0 === e ? void 0 : e.type) {
                case "heading":
                  o.push(e);
                  break;
                case "toggle":
                  Ve(e) && o.push(e);
                  break;
                case "column_list":
                  e.children.forEach((function (e) {
                    n.block[e].children.forEach((function (e) {
                      r(n.block[e])
                    }))
                  }));
                  break;
                case "transclusion_container":
                  i(e);
                  break;
                case "transclusion_reference":
                  var t, l = null === (t = n.block) || void 0 === t ? void 0 : t[e.container];
                  i(l)
                }
              }
              for (var l = 0; l < (null === e || void 0 === e || null === (t = e.children) || void 0 === t ? void 0 : t.length); l++) {
                r((0, h.Z)({}, n.block[e.children[l]]))
              }
              var a = [{
                  actual: -1,
                  effective: -1
                }],
                c = !0,
                s = !1,
                d = void 0;
              try {
                for (var u, v = o[Symbol.iterator](); !(c = (u = v.next()).done); c = !0)
                  for (var p = u.value, m = p.depth;;) {
                    var f = a[a.length - 1],
                      x = f.actual,
                      j = f.effective;
                    if (m > x) p.depth = j + 1, a.push({
                      actual: m,
                      effective: p.depth
                    });
                    else {
                      if (m === x) {
                        p.depth = j;
                        break
                      }
                      a.pop()
                    }
                  }
              } catch (g) {
                s = !0, d = g
              } finally {
                try {
                  c || null == v.return || v.return()
                } finally {
                  if (s) throw d
                }
              }
              return o
            }(null === o || void 0 === o || null === (n = o.block) || void 0 === n ? void 0 : n[r], o), a = [], c = 0; c < l.length; c++) {
            var s = l[c];
            a.push((0, i.jsx)("li", {
              className: "notion-table-of-contents__item",
              children: (0, i.jsx)("a", {
                href: "#".concat(s.id),
                children: (0, i.jsx)("div", {
                  style: {
                    marginInlineStart: "".concat(24 * s.depth).concat("px")
                  },
                  children: (0, i.jsx)(j.m, {
                    noInteractive: !0,
                    noStyling: !0,
                    children: Ge(s.title)
                  })
                })
              })
            }, s.id))
          }
          return (0, i.jsx)("ul", {
            id: (0, f.wj)(e.id),
            className: (0, p.cn)("notion-table-of-contents", (0, k.Of)(e.color)),
            children: a
          })
        };

      function Ve(e) {
        var n;
        return !("toggle" !== (null === e || void 0 === e ? void 0 : e.type) || !(null === e || void 0 === e || null === (n = e.subType) || void 0 === n ? void 0 : n.includes("header")))
      }
      var Je = t(2723),
        Ae = function (e) {
          return (0, i.jsxs)("div", {
            id: (0, f.wj)(e.id),
            className: (0, p.cn)("notion-to-do", (0, k.Of)(e.color)),
            children: [(0, i.jsxs)("div", {
              className: "notion-to-do__content",
              children: [(0, i.jsx)("div", {
                className: "notion-to-do__icon",
                children: (0, i.jsx)(Je.X, {
                  type: e.checked ? "checked" : "unchecked"
                })
              }), (0, i.jsx)("div", {
                className: (0, p.cn)("notion-to-do__title", e.checked ? "checked" : void 0),
                children: e.checked ? (0, i.jsx)("del", {
                  children: (0, i.jsx)(j.m, {
                    children: e.title
                  })
                }) : (0, i.jsx)(j.m, {
                  children: e.title
                })
              })]
            }), e.children && e.children.length ? (0, i.jsx)("div", {
              className: "notion-to-do__children",
              children: e.children
            }) : ""]
          })
        },
        $e = t(7678),
        Ue = function (e) {
          return (0, i.jsxs)("div", {
            id: (0, f.wj)(e.id),
            className: "notion-tweet",
            children: [(0, i.jsx)($e.tP, {
              id: e.tweetId,
              ast: e.tweetAst
            }), e.caption ? (0, i.jsx)(N, {
              children: e.caption
            }) : ""]
          }, e.id)
        },
        Xe = function (e) {
          var n = e.fullWidth || e.pageWidth || -1 === e.width ? "100%" : "".concat(e.width, "px");
          return (0, i.jsxs)("div", {
            id: (0, f.wj)(e.id),
            className: "notion-video",
            children: [(0, i.jsx)("div", {
              className: "notion-video__content",
              children: (0, i.jsx)("video", {
                width: n,
                controls: !0,
                children: (0, i.jsx)("source", {
                  src: e.source
                })
              })
            }), e.caption ? (0, i.jsx)(N, {
              children: e.caption
            }) : ""]
          })
        },
        Ke = function (e) {
          return (0, i.jsx)("div", {
            className: "notion-table__wrapper",
            children: (0, i.jsx)("table", {
              className: (0, p.cn)("notion-table", (null === e || void 0 === e ? void 0 : e.colHeader) ? "col-header" : "", (null === e || void 0 === e ? void 0 : e.rowHeader) ? "row-header" : ""),
              children: (0, i.jsx)("tbody", {
                children: e.items.map((function (n, t) {
                  var o, r = n.id,
                    l = n.properties,
                    a = n.color;
                  return (0, i.jsx)("tr", {
                    style: a ? {
                      background: a.startsWith("color-") ? "" : "var(--color-".concat(a, ")"),
                      color: a.startsWith("color-") ? "var(--color-text-".concat(a.split("color-")[1], ")") : ""
                    } : null,
                    children: null === e || void 0 === e || null === (o = e.colOrder) || void 0 === o ? void 0 : o.map((function (n) {
                      var o, r, a, c, s, d, u = null === e || void 0 === e || null === (o = e.columns) || void 0 === o || null === (r = o[n]) || void 0 === r ? void 0 : r.width,
                        h = null === e || void 0 === e || null === (a = e.columns) || void 0 === a || null === (c = a[n]) || void 0 === c ? void 0 : c.color;
                      return (0, i.jsx)("td", {
                        style: {
                          minWidth: u || "120px",
                          maxWidth: u || "240px",
                          color: h && "color-default" !== h && h.startsWith("color-") ? "var(--color-text-".concat(h.split("color-")[1], ")") : "",
                          background: 0 === t && (null === e || void 0 === e ? void 0 : e.colHeader) || h && !h.startsWith("color-") ? "var(--color-".concat(null === e || void 0 === e || null === (s = e.columns) || void 0 === s || null === (d = s[n]) || void 0 === d ? void 0 : d.color, ")") : null
                        },
                        children: (0, i.jsx)("div", {
                          className: (null === l || void 0 === l ? void 0 : l[n]) ? "notion-table__cell" : "notion-table__empty-cell",
                          children: (null === l || void 0 === l ? void 0 : l[n]) ? (0, i.jsx)(j.m, {
                            children: l[n]
                          }) : null
                        })
                      }, n)
                    }))
                  }, r)
                }))
              })
            })
          })
        },
        Qe = t(2520),
        en = function (e) {
          var n = (0, w.l)().records,
            t = e.children && e.children.length ? function (n) {
              return "column_list" === e.type ? n.map((function (t, o) {
                return (0, i.jsx)(en, (0, v.Z)((0, h.Z)({}, t), {
                  listLength: n.length,
                  listOrder: o,
                  head: e.head
                }), t.id)
              })) : n.reduce((function (e, n) {
                if ("bulleted_list" === n.type || "numbered_list" === n.type) {
                  var t = e[e.length - 1];
                  t && t.type === n.type + "_wrapper" ? e[e.length - 1].children.push(n.id) : e.push({
                    id: n.id,
                    type: "".concat(n.type, "_wrapper"),
                    subType: null === n || void 0 === n ? void 0 : n.subType,
                    children: [n.id]
                  })
                } else e.push(n);
                return e
              }), []).map((function (n) {
                return (0, i.jsx)(en, (0, v.Z)((0, h.Z)({}, n), {
                  head: e.head
                }), n.id)
              }))
            }(e.children.map((function (e) {
              return n.block[e]
            })).filter((function (e) {
              return !!e
            }))) : null;
          switch (e.type) {
          case "abstract":
          case "embed":
          case "external_object_instance":
          case "gist":
          case "maps":
          case "typeform":
            return (0, i.jsx)(Me, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "alias":
            var o = n.block[e.reference];
            return o ? (0, i.jsx)(en, (0, h.Z)({}, e, o)) : null;
          case "audio":
            return (0, i.jsx)(Z, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "bookmark":
            return (0, i.jsx)(T, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "breadcrumb":
            return (0, i.jsx)(Qe.a, {
              root: e.head.root,
              breadcrumbs: e.head.breadcrumbs
            }, e.id);
          case "bulleted_list_wrapper":
          case "numbered_list_wrapper":
            return (0, i.jsx)(C, (0, h.Z)({}, e), e.id);
          case "callout":
            return (0, i.jsx)(O, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "code":
            return (0, i.jsx)(I, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "collection_inline":
            return (0, i.jsx)(je, (0, v.Z)((0, h.Z)({}, e), {
              isRoot: e.isRoot,
              children: t
            }), e.id);
          case "collection_page":
            return (0, i.jsx)(ye, (0, v.Z)((0, h.Z)({}, e), {
              isRoot: e.isRoot,
              children: t
            }), e.id);
          case "column":
            return (0, i.jsx)(be, (0, v.Z)((0, h.Z)({}, e), {
              listLength: e.listLength || 0,
              listOrder: e.listOrder || 0,
              children: t
            }), e.id);
          case "column_list":
            return (0, i.jsx)(_e, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "divider":
            return (0, i.jsx)(we.i, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "drive":
            return (0, i.jsx)(Be, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "equation":
            return (0, i.jsx)(Fe.C, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "file":
            return (0, i.jsx)(Ee, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "heading":
            return (0, i.jsx)(se, (0, h.Z)({}, e), e.id);
          case "image":
            return (0, i.jsx)(Ye, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "page":
            return (0, i.jsx)(ge.T, (0, v.Z)((0, h.Z)({}, e), {
              isRoot: e.isRoot,
              children: t
            }), e.id);
          case "pdf":
            return (0, i.jsx)(He, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "quote":
            return (0, i.jsx)(De, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "tweet":
            return (0, i.jsx)(Ue, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "table":
            return (0, i.jsx)(Ke, (0, h.Z)({}, e), e.id);
          case "table_of_contents":
            return (0, i.jsx)(qe, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "text":
            return (0, i.jsx)(S, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "to_do":
            return (0, i.jsx)(Ae, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "toggle":
            return (0, i.jsx)(ue, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          case "transclusion_container":
            return t;
          case "transclusion_reference":
            var r, l = n.block[e.container];
            return l ? (l.children = (null === l || void 0 === l || null === (r = l.children) || void 0 === r ? void 0 : r.filter((function (n) {
              return n !== e.id
            }))) || [], (0, i.jsx)(en, (0, h.Z)({}, e, l))) : null;
          case "video":
            return (0, i.jsx)(Xe, (0, v.Z)((0, h.Z)({}, e), {
              children: t
            }), e.id);
          default:
            return (0, i.jsx)("div", {
              children: t
            }, e.id)
          }
        },
        nn = l()((function () {
          return t.e(7027).then(t.bind(t, 7027)).then((function (e) {
            return e.Footer
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [7027]
            }
          }
        }),
        tn = function (e) {
          var n, t, o = e.page,
            r = e.head,
            l = e.settings,
            a = !o || null == o.fullWidth || o.fullWidth,
            c = (null === l || void 0 === l ? void 0 : l.footer) && l.footer.type !== m.ZX.None,
            s = o.id === l.notionPage ? "index" : o.id,
            d = (null === (n = r.breadcrumbs) || void 0 === n ? void 0 : n.length) > 1 ? "parent-page__".concat(r.breadcrumbs[r.breadcrumbs.length - 2].id) : 1 === (null === (t = r.breadcrumbs) || void 0 === t ? void 0 : t.length) ? "parent-page__index" : "";
          return (0, i.jsxs)("div", {
            id: "page-".concat(s),
            className: (0, p.cn)("super-root page__".concat(s), d),
            children: [(0, i.jsx)(b, (0, h.Z)({}, r, l)), (0, i.jsxs)("div", {
              className: "super-content-wrapper",
              children: [(0, i.jsx)(g, (0, h.Z)({}, o)), (0, i.jsx)("div", {
                className: (0, p.cn)("super-content", a ? void 0 : "max-width", c ? "has-footer" : ""),
                children: (0, i.jsx)(en, (0, v.Z)((0, h.Z)({}, o), {
                  isRoot: !0,
                  head: r
                }))
              })]
            }), c ? (0, i.jsx)(nn, (0, h.Z)({}, l.footer)) : null]
          })
        },
        on = t(7568),
        rn = t(4051),
        ln = t.n(rn),
        an = t(1784),
        cn = function (e) {
          var n = (0, o.useState)(""),
            t = n[0],
            r = n[1],
            l = (0, o.useState)(!1),
            a = l[0],
            c = l[1],
            s = (0, o.useState)(""),
            d = s[0],
            u = s[1],
            h = function () {
              var n = (0, on.Z)(ln().mark((function n(i) {
                var o, r;
                return ln().wrap((function (n) {
                  for (;;) switch (n.prev = n.next) {
                  case 0:
                    return i.preventDefault(), c(!0), n.prev = 2, n.next = 6, (0, an.uo)({
                      domainName: e.domainName,
                      page: e.page,
                      password: t
                    });
                  case 6:
                    if (r = n.sent, !(null === (o = r.validatePagePassword) || void 0 === o ? void 0 : o.isValid)) {
                      n.next = 13;
                      break
                    }
                    return n.next = 10, fetch("/api/password", {
                      method: "POST",
                      body: JSON.stringify({
                        password: r.validatePagePassword.password
                      })
                    });
                  case 10:
                    location.reload(), n.next = 14;
                    break;
                  case 13:
                    u("Incorrect password"), c(!1);
                  case 14:
                    n.next = 19;
                    break;
                  case 16:
                    n.prev = 16, n.t0 = n.catch(2), c(!1);
                  case 19:
                  case "end":
                    return n.stop()
                  }
                }), n, null, [
                  [2, 16]
                ])
              })));
              return function (e) {
                return n.apply(this, arguments)
              }
            }();
          return (0, i.jsx)("div", {
            className: "super-password-protection",
            children: (0, i.jsxs)("div", {
              className: "super-password-protection__wrapper",
              children: [(0, i.jsx)("h1", {
                className: "super-password-protection__title",
                children: "This page is password protected"
              }), (0, i.jsx)("form", {
                onSubmit: h,
                children: (0, i.jsxs)("div", {
                  className: "super-password-protection__input",
                  children: [(0, i.jsx)("div", {
                    className: "super-password-protection__input-lock",
                    children: (0, i.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "var(--color-text-default-light)",
                      children: (0, i.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      })
                    })
                  }), (0, i.jsx)("input", {
                    value: t,
                    onChange: function (e) {
                      d && u(""), r(e.target.value)
                    },
                    type: "password",
                    placeholder: "Enter password"
                  }), a ? (0, i.jsx)(Ze.Loader, {}) : (0, i.jsx)("div", {
                    onClick: h,
                    className: "super-password-protection__input-arrow",
                    children: (0, i.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                      })
                    })
                  })]
                })
              }), (0, i.jsx)("p", {
                className: "super-password-protection__error",
                children: d
              })]
            })
          })
        },
        sn = l()((function () {
          return t.e(513).then(t.bind(t, 513)).then((function (e) {
            return e.ErrorPage
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [513]
            }
          }
        }),
        dn = l()((function () {
          return Promise.resolve().then(t.bind(t, 2812)).then((function (e) {
            return e.PageLoader
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [2812]
            }
          }
        }),
        un = function (e) {
          var n = e.records,
            t = e.settings,
            r = e.head,
            l = e.pageId,
            a = e.pageReplacement,
            h = e.hasBlocks,
            v = e.isValidPage,
            p = e.config,
            m = e.passwords,
            f = e.passwordRequired,
            x = e.pageLocation,
            j = (0, s.useRouter)(),
            g = n && n.block ? n.block[l] : null;
          return (0, o.useEffect)((function () {
            return a && j.replace(a),
              function () {}
          }), [j, a]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(c(), {
              children: (null === t || void 0 === t ? void 0 : t.keywords) ? (0, i.jsx)("meta", {
                name: "keywords",
                content: null === t || void 0 === t ? void 0 : t.keywords
              }) : null
            }), f ? (0, i.jsx)(cn, {
              domainName: e.settings.domainName,
              page: e.pageLocation,
              passwords: m
            }) : (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(u.p, {
                head: r,
                settings: t,
                page: g
              }), void 0 === v ? (0, i.jsx)(dn, {}) : !0 === v ? h && g ? (0, i.jsx)(w.T, {
                value: {
                  pageId: l,
                  records: n,
                  settings: t,
                  pageLocation: x,
                  passwords: m,
                  config: p
                },
                children: (0, i.jsx)(tn, {
                  page: g,
                  head: r,
                  settings: t
                })
              }) : (0, i.jsx)(sn, {
                type: "notpublic"
              }) : (0, i.jsx)(d.default, {
                statusCode: 404
              })]
            })]
          })
        }
    },
    1784: function (e, n, t) {
      t.d(n, {
        Rx: function () {
          return d
        },
        uo: function () {
          return u
        }
      });
      var i = t(7568),
        o = t(6042),
        r = t(9396),
        l = t(4051),
        a = t.n(l),
        c = t(7294),
        s = t(4155),
        d = function (e) {
          var n = (0, c.useState)(""),
            t = n[0],
            o = n[1],
            r = function (e, n) {
              var t = (0, c.useState)(e),
                i = t[0],
                o = t[1];
              return (0, c.useEffect)((function () {
                var t = setTimeout((function () {
                  o(e)
                }), n);
                return function () {
                  clearTimeout(t)
                }
              }), [e, n]), i
            }(t, 300),
            l = function (e, n) {
              var t = (0, c.useState)({}),
                o = t[0],
                r = t[1],
                l = (0, c.useState)(""),
                s = l[0],
                d = l[1],
                u = (0, c.useState)(!1),
                h = u[0],
                v = u[1],
                p = function () {
                  var t = (0, i.Z)(a().mark((function t(i) {
                    var o, l, c, s;
                    return a().wrap((function (t) {
                      for (;;) switch (t.prev = t.next) {
                      case 0:
                        return v(!0), d(""), t.prev = 2, t.next = 6, fetch("https://api-v2.super.so/graphql", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json"
                          },
                          body: JSON.stringify({
                            query: "query SiteSearch($input: SiteSearchInput!) {\n  siteSearch(input: $input)\n}",
                            variables: {
                              input: {
                                siteId: e,
                                roodPageId: n,
                                query: i
                              }
                            }
                          })
                        });
                      case 6:
                        return l = t.sent, t.next = 9, l.json();
                      case 9:
                        (null === (c = t.sent) || void 0 === c || null === (o = c.data) || void 0 === o ? void 0 : o.siteSearch) ? r(JSON.parse(null === c || void 0 === c || null === (s = c.data) || void 0 === s ? void 0 : s.siteSearch)): r({}), t.next = 16;
                        break;
                      case 13:
                        t.prev = 13, t.t0 = t.catch(2), d(t.t0.message);
                      case 16:
                        v(!1);
                      case 17:
                      case "end":
                        return t.stop()
                      }
                    }), t, null, [
                      [2, 13]
                    ])
                  })));
                  return function (e) {
                    return t.apply(this, arguments)
                  }
                }();
              return {
                data: o,
                error: s,
                loading: h,
                onSearch: p
              }
            }(e.siteId, e.rootPageId),
            s = l.data,
            d = l.error,
            u = l.loading,
            h = l.onSearch;
          return (0, c.useEffect)((function () {
            return r && h(r),
              function () {}
          }), [!!h, r]), {
            data: s,
            error: d,
            loading: u,
            query: t,
            onSearch: function (e) {
              return o(e)
            },
            clear: function () {
              return o("")
            }
          }
        },
        u = function () {
          var e = (0, i.Z)(a().mark((function e(n) {
            var t, i;
            return a().wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, fetch("https://api-v2.super.so/graphql", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    query: "query ValidatePagePassword($input: ValidatePagePasswordInput!) {\n  validatePagePassword(input: $input) {\n    isValid\n    password\n  }\n}",
                    variables: {
                      input: n
                    }
                  })
                });
              case 2:
                return t = e.sent, e.next = 5, t.json();
              case 5:
                return i = e.sent.data, e.abrupt("return", i);
              case 7:
              case "end":
                return e.stop()
              }
            }), e)
          })));
          return function (n) {
            return e.apply(this, arguments)
          }
        }(),
        h = function () {
          var e = (0, i.Z)(a().mark((function e(n, t, i) {
            var o, r, l;
            return a().wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
              case 0:
                return o = {
                  domainName: n,
                  page: t
                }, (null === i || void 0 === i ? void 0 : i.length) && (o.passwords = i), e.next = 4, fetch("https://api-v2.super.so/graphql" + "?secret=".concat(s.env.WEBSITE_SECRET), {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    query: "query SiteData($input: SiteDataInput!) {\n  siteData(input: $input) {\n    props\n    notFound\n    hasPassword\n    redirect {\n      destination\n      permanent\n    }\n  }\n}",
                    variables: {
                      input: o
                    }
                  })
                });
              case 4:
                return r = e.sent, e.next = 7, r.json();
              case 7:
                return l = e.sent.data, e.abrupt("return", l);
              case 9:
              case "end":
                return e.stop()
              }
            }), e)
          })));
          return function (n, t, i) {
            return e.apply(this, arguments)
          }
        }();
      ! function () {
        var e = (0, i.Z)(a().mark((function e(n, t, i) {
          var l, c;
          return a().wrap((function (e) {
            for (;;) switch (e.prev = e.next) {
            case 0:
              return e.next = 2, h(n, t, i);
            case 2:
              if (l = e.sent, !(c = (null === l || void 0 === l ? void 0 : l.siteData) || {}).notFound && !c.redirect) {
                e.next = 6;
                break
              }
              return e.abrupt("return", null);
            case 6:
              return e.abrupt("return", (0, r.Z)((0, o.Z)({}, JSON.parse((null === c || void 0 === c ? void 0 : c.props) || "{}")), {
                passwords: i
              }));
            case 7:
            case "end":
              return e.stop()
            }
          }), e)
        })))
      }()
    },
    9828: function (e, n, t) {
      t.d(n, {
        O: function () {
          return o
        }
      });
      var i = t(7294),
        o = function (e) {
          var n = (0, i.useState)(null),
            t = n[0],
            o = n[1],
            r = (0, i.useRef)(null),
            l = (0, i.useCallback)((function () {
              return o(!0)
            }), []),
            a = (0, i.useCallback)((function () {
              return o(!1)
            }), []);
          return (0, i.useEffect)((function () {
            var n, i = function (n) {
                var t = n.closeType;
                a(), (null === e || void 0 === e ? void 0 : e.onClose) && e.onClose(t)
              },
              o = function (e) {
                var n = e.target;
                r.current && !r.current.contains(n) && i({
                  closeType: "click"
                })
              },
              l = (n = function () {
                return i({
                  closeType: "esc"
                })
              }, function (e) {
                "Escape" === e.key && n()
              });
            return t && (document.addEventListener("mouseup", o), document.addEventListener("keydown", l)),
              function () {
                document.removeEventListener("mouseup", o), document.removeEventListener("keydown", l)
              }
          }), [t, a, e]), {
            containerRef: r,
            isShown: t,
            onOpen: l,
            onClose: a
          }
        }
    },
    734: function (e, n, t) {
      var i = t(6042),
        o = t(9396),
        r = t(7294);
      n.Z = function () {
        var e = (0, r.useState)({
            width: void 0,
            height: void 0
          }),
          n = e[0],
          t = e[1];
        return (0, r.useEffect)((function () {
          var e = function () {
            t({
              width: window.innerWidth,
              height: window.innerHeight
            })
          };
          return window.addEventListener("resize", e), e(),
            function () {
              return window.removeEventListener("resize", e)
            }
        }), []), (0, o.Z)((0, i.Z)({}, n), {
          isMobile: n.width < 547
        })
      }
    }
  }
]);