"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7628], {
    1098: function (t, e, n) {
      n.d(e, {
        p: function () {
          return m
        }
      });
      var o = n(6042),
        i = n(5893),
        a = n(7294),
        r = n(1438),
        l = n(8029),
        p = n(6567),
        u = n(9008),
        c = n.n(u),
        s = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0
        },
        d = function (t) {
          var e = [];
          t.titleTemplate && (s.templateTitle = t.titleTemplate);
          var n = "";
          t.title && (n = t.title, s.templateTitle && (n = s.templateTitle.replace(/%s/g, (function () {
            return n
          }))), e.push((0, i.jsx)("title", {
            children: n
          }, "title")));
          var a = t.noindex || s.noindex || t.dangerouslySetAllPagesToNoIndex,
            r = t.nofollow || s.nofollow || t.dangerouslySetAllPagesToNoFollow;
          if (a || r ? (t.dangerouslySetAllPagesToNoIndex && (s.noindex = !0), t.dangerouslySetAllPagesToNoFollow && (s.nofollow = !0), e.push((0, i.jsx)("meta", {
              name: "robots",
              content: "".concat(a ? "noindex" : "index", ",").concat(r ? "nofollow" : "follow")
            }, "robots")), e.push((0, i.jsx)("meta", {
              name: "googlebot",
              content: "".concat(a ? "noindex" : "index", ",").concat(r ? "nofollow" : "follow")
            }, "googlebot"))) : (e.push((0, i.jsx)("meta", {
              name: "robots",
              content: "index,follow"
            }, "robots")), e.push((0, i.jsx)("meta", {
              name: "googlebot",
              content: "index,follow"
            }, "googlebot"))), t.description && e.push((0, i.jsx)("meta", {
              name: "description",
              content: t.description
            }, "description")), t.twitter && (t.twitter.cardType && e.push((0, i.jsx)("meta", {
              name: "twitter:card",
              content: t.twitter.cardType
            }, "twitter:card")), t.twitter.site && e.push((0, i.jsx)("meta", {
              name: "twitter:site",
              content: t.twitter.site
            }, "twitter:site")), t.twitter.handle && e.push((0, i.jsx)("meta", {
              name: "twitter:creator",
              content: t.twitter.handle
            }, "twitter:creator"))), t.openGraph) {
            if ((t.openGraph.url || t.canonical) && e.push((0, i.jsx)("meta", {
                property: "og:url",
                content: t.openGraph.url || t.canonical
              }, "og:url")), t.openGraph.type) {
              var l = t.openGraph.type.toLowerCase();
              e.push((0, i.jsx)("meta", {
                property: "og:type",
                content: l
              }, "og:type"))
            }(t.openGraph.title || t.title) && e.push((0, i.jsx)("meta", {
              property: "og:title",
              content: t.openGraph.title || n
            }, "og:title")), (t.openGraph.description || t.description) && e.push((0, i.jsx)("meta", {
              property: "og:description",
              content: t.openGraph.description || t.description
            }, "og:description")), t.defaultOpenGraphImageWidth && (s.defaultOpenGraphImageWidth = t.defaultOpenGraphImageWidth), t.defaultOpenGraphImageHeight && (s.defaultOpenGraphImageHeight = t.defaultOpenGraphImageHeight), t.openGraph.images && t.openGraph.images.length && t.openGraph.images.forEach((function (t, n) {
              e.push((0, i.jsx)("meta", {
                property: "og:image",
                content: t.url
              }, "og:image:0".concat(n))), t.alt && e.push((0, i.jsx)("meta", {
                property: "og:image:alt",
                content: t.alt
              }, "og:image:alt0".concat(n))), t.width ? e.push((0, i.jsx)("meta", {
                property: "og:image:width",
                content: t.width.toString()
              }, "og:image:width0".concat(n))) : s.defaultOpenGraphImageWidth && e.push((0, i.jsx)("meta", {
                property: "og:image:width",
                content: s.defaultOpenGraphImageWidth.toString()
              }, "og:image:width0".concat(n))), t.height ? e.push((0, i.jsx)("meta", {
                property: "og:image:height",
                content: t.height.toString()
              }, "og:image:height".concat(n))) : s.defaultOpenGraphImageHeight && e.push((0, i.jsx)("meta", {
                property: "og:image:height",
                content: s.defaultOpenGraphImageHeight.toString()
              }, "og:image:height".concat(n)))
            })), t.openGraph.locale && e.push((0, i.jsx)("meta", {
              property: "og:locale",
              content: t.openGraph.locale
            }, "og:locale")), t.openGraph.site_name && e.push((0, i.jsx)("meta", {
              property: "og:site_name",
              content: t.openGraph.site_name
            }, "og:site_name"))
          }
          return t.canonical && e.push((0, i.jsx)("link", {
            rel: "canonical",
            href: t.canonical
          }, "canonical")), t.additionalMetaTags && t.additionalMetaTags.length > 0 && t.additionalMetaTags.forEach((function (t) {
            e.push((0, i.jsx)("meta", (0, o.Z)({}, t), t.name ? t.name : t.property))
          })), e
        },
        g = function (t) {
          (0, l.Z)(n, t);
          var e = (0, p.Z)(n);

          function n() {
            return (0, r.Z)(this, n), e.apply(this, arguments)
          }
          return n.prototype.render = function () {
            var t = this.props,
              e = t.title,
              n = t.noindex,
              o = void 0 !== n && n,
              a = t.nofollow,
              r = t.description,
              l = t.canonical,
              p = t.openGraph,
              u = t.facebook,
              s = t.twitter,
              g = t.additionalMetaTags,
              h = t.titleTemplate,
              m = t.mobileAlternate,
              f = t.languageAlternates;
            return (0, i.jsx)(c(), {
              children: d({
                title: e,
                noindex: o,
                nofollow: a,
                description: r,
                canonical: l,
                facebook: u,
                openGraph: p,
                additionalMetaTags: g,
                twitter: s,
                titleTemplate: h,
                mobileAlternate: m,
                languageAlternates: f
              })
            })
          }, n
        }(a.Component),
        h = n(7397),
        m = function (t) {
          var e, n, a, r, l = (null === t || void 0 === t ? void 0 : t.head) || {},
            p = l.title,
            u = l.description,
            c = l.url,
            s = l.image,
            d = (null === t || void 0 === t || null === (e = t.settings) || void 0 === e ? void 0 : e.name) || "",
            m = s || (null === t || void 0 === t || null === (n = t.page) || void 0 === n ? void 0 : n.cover) || "",
            f = p || (0, h.S$)(null === t || void 0 === t || null === (a = t.page) || void 0 === a ? void 0 : a.title) || "",
            v = {
              title: f,
              description: u,
              openGraph: {
                type: "website",
                locale: "en_US",
                url: c,
                site_name: p || d,
                description: u,
                images: [{
                  url: m,
                  alt: f
                }]
              },
              twitter: {
                cardType: "summary_large_image"
              }
            };
          return (null === t || void 0 === t || null === (r = t.settings) || void 0 === r ? void 0 : r.noIndex) && (v.noindex = !0, v.nofollow = !0), (0, i.jsx)(g, (0, o.Z)({}, v))
        }
    },
    195: function (t, e, n) {
      n.d(e, {
        cn: function () {
          return o
        }
      });
      var o = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return e.filter((function (t) {
          return !!t
        })).join(" ")
      }
    },
    7397: function (t, e, n) {
      n.d(e, {
        Fk: function () {
          return i
        },
        HU: function () {
          return r
        },
        OP: function () {
          return c
        },
        S$: function () {
          return p
        },
        mg: function () {
          return u
        },
        q6: function () {
          return l
        },
        wj: function () {
          return a
        }
      });
      var o, i = function (t) {
          return /^data:image/.test(t)
        },
        a = function (t) {
          return t ? "block-" + t.split("/").join("-") : ""
        },
        r = function (t, e) {
          return null === t || void 0 === t ? void 0 : t.startsWith(e.assetEndpoint)
        },
        l = function (t) {
          return null === t || void 0 === t ? void 0 : t.startsWith("https://images.unsplash.com")
        },
        p = function (t) {
          return null !== (o = null === t || void 0 === t ? void 0 : t.reduce((function (t, e) {
            return t + e[0]
          }), "")) && void 0 !== o ? o : ""
        };

      function u(t) {
        var e;
        return (null === t || void 0 === t || null === (e = t.view) || void 0 === e ? void 0 : e.superProperties) || (null === t || void 0 === t ? void 0 : t.superProperties) || {}
      }

      function c(t) {
        var e;
        return !!(null === n.g || void 0 === n.g || null === (e = n.g.document) || void 0 === e ? void 0 : e.querySelector('script[src="' + t + '"]'))
      }
    }
  }
]);