"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3443], {
    3443: function (n, e, r) {
      r.r(e), r.d(e, {
        NotionNavBar: function () {
          return l
        }
      });
      var t = r(5893),
        a = r(7294),
        i = r(5152),
        o = r.n(i),
        s = r(2520),
        u = r(1817),
        c = o()((function () {
          return r.e(1290).then(r.bind(r, 1290)).then((function (n) {
            return n.Search
          }))
        }), {
          loadableGenerated: {
            webpack: function () {
              return [1290]
            }
          }
        }),
        l = function (n) {
          var e, r = n.siteId,
            i = null === n || void 0 === n || null === (e = n.root) || void 0 === e ? void 0 : e.id,
            o = (0, a.useState)(!1),
            l = o[0],
            d = o[1],
            h = (0, a.useState)(!1),
            v = h[0],
            b = h[1];
          return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("div", {
              className: "notion-navbar",
              children: [(0, t.jsx)(s.a, {
                root: null === n || void 0 === n ? void 0 : n.root,
                breadcrumbs: n.breadcrumbs,
                isNavbar: !0
              }), n.siteSearch ? (0, t.jsx)("div", {
                className: "notion-navbar__search",
                onClick: function () {
                  d(!0), b(!v)
                },
                children: (0, t.jsx)(u.J, {
                  type: "search",
                  size: "1.25rem"
                })
              }) : null]
            }), n.siteSearch && l ? (0, t.jsx)(c, {
              siteId: r,
              rootPageId: i,
              open: v,
              close: function () {
                return b(!1)
              }
            }) : null]
          })
        }
    }
  }
]);