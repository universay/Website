(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4097], {
      9804: function (e) {
        e.exports = {
          CASE_SENSITIVE_TAG_NAMES: ["animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussainBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "linearGradient", "radialGradient", "textPath"]
        }
      },
      6982: function (e, t, n) {
        var r = n(3412),
          i = "html",
          o = "head",
          a = "body",
          s = /<([a-zA-Z]+[0-9]?)/,
          l = /<head.*>/i,
          c = /<body.*>/i,
          u = /<(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)(.*?)\/?>/gi,
          p = r.isIE(9),
          d = p || r.isIE(),
          f = function () {
            throw new Error("This browser does not support `document.implementation.createHTMLDocument`")
          },
          m = function () {
            throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")
          };
        if ("function" === typeof window.DOMParser) {
          var h = new window.DOMParser,
            g = p ? "text/xml" : "text/html";
          f = m = function (e, t) {
            return t && (e = "<" + t + ">" + e + "</" + t + ">"), p && (e = e.replace(u, "<$1$2$3/>")), h.parseFromString(e, g)
          }
        }
        if (document.implementation) {
          var v = document.implementation.createHTMLDocument(d ? "html-dom-parser" : void 0);
          f = function (e, t) {
            if (t) return v.documentElement.getElementsByTagName(t)[0].innerHTML = e, v;
            try {
              return v.documentElement.innerHTML = e, v
            } catch (n) {
              if (m) return m(e)
            }
          }
        }
        var y, x = document.createElement("template");
        x.content && (y = function (e) {
          return x.innerHTML = e, x.content.childNodes
        }), e.exports = function (e) {
          var t, n, r, u, p = e.match(s);
          switch (p && p[1] && (t = p[1].toLowerCase()), t) {
          case i:
            return n = m(e), l.test(e) || (r = n.getElementsByTagName(o)[0]) && r.parentNode.removeChild(r), c.test(e) || (r = n.getElementsByTagName(a)[0]) && r.parentNode.removeChild(r), n.getElementsByTagName(i);
          case o:
          case a:
            return u = f(e).getElementsByTagName(t), c.test(e) && l.test(e) ? u[0].parentNode.childNodes : u;
          default:
            return y ? y(e) : f(e, a).getElementsByTagName(a)[0].childNodes
          }
        }
      },
      5057: function (e, t, n) {
        var r = n(6982),
          i = n(3412),
          o = i.formatDOM,
          a = i.isIE(9),
          s = /<(![a-zA-Z\s]+)>/;
        e.exports = function (e) {
          if ("string" !== typeof e) throw new TypeError("First argument must be a string");
          if (!e) return [];
          var t, n = e.match(s);
          return n && n[1] && (t = n[1], a && (e = e.replace(n[0], ""))), o(r(e), null, t)
        }
      },
      3412: function (e, t, n) {
        for (var r, i = n(9804).CASE_SENSITIVE_TAG_NAMES, o = {}, a = 0, s = i.length; a < s; a++) r = i[a], o[r.toLowerCase()] = r;
  
        function l(e) {
          for (var t, n = {}, r = 0, i = e.length; r < i; r++) n[(t = e[r]).name] = t.value;
          return n
        }
  
        function c(e) {
          var t = function (e) {
            return o[e]
          }(e = e.toLowerCase());
          return t || e
        }
        e.exports = {
          formatAttributes: l,
          formatDOM: function e(t, n, r) {
            n = n || null;
            for (var i, o, a, s = [], u = 0, p = t.length; u < p; u++) {
              switch (i = t[u], a = {
                next: null,
                prev: s[u - 1] || null,
                parent: n
              }, (o = s[u - 1]) && (o.next = a), "#" !== i.nodeName[0] && (a.name = c(i.nodeName), a.attribs = {}, i.attributes && i.attributes.length && (a.attribs = l(i.attributes))), i.nodeType) {
              case 1:
                "script" === a.name || "style" === a.name ? a.type = a.name : a.type = "tag", a.children = e(i.childNodes, a);
                break;
              case 3:
                a.type = "text", a.data = i.nodeValue;
                break;
              case 8:
                a.type = "comment", a.data = i.nodeValue
              }
              s.push(a)
            }
            return r && (s.unshift({
              name: r.substring(0, r.indexOf(" ")).toLowerCase(),
              data: r,
              type: "directive",
              next: s[0] ? s[0] : null,
              prev: null,
              parent: n
            }), s[1] && (s[1].prev = s[0])), s
          },
          isIE: function (e) {
            return e ? document.documentMode === e : /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent)
          }
        }
      },
      488: function (e, t, n) {
        var r = n(3670),
          i = n(5057),
          o = {
            decodeEntities: !0,
            lowerCaseAttributeNames: !1
          };
  
        function a(e, t) {
          if ("string" !== typeof e) throw new TypeError("First argument must be a string");
          return "" === e ? [] : r(i(e, (t = t || {}).htmlparser2 || o), t)
        }
        a.domToReact = r, a.htmlToDOM = i, e.exports = a, e.exports.default = a
      },
      484: function (e, t, n) {
        var r = n(2686),
          i = n(7848),
          o = n(4606),
          a = o.camelCase,
          s = r.html,
          l = r.svg,
          c = r.isCustomAttribute,
          u = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          var t, n, r, p;
          e = e || {};
          var d = {};
          for (t in e) r = e[t], c(t) ? d[t] = r : (n = t.toLowerCase(), u.call(s, n) ? d[(p = s[n]).propertyName] = !!(p.hasBooleanValue || p.hasOverloadedBooleanValue && !r) || r : u.call(l, t) ? d[(p = l[t]).propertyName] = r : o.PRESERVE_CUSTOM_ATTRIBUTES && (d[t] = r));
          return null != e.style && (d.style = function (e) {
            var t = {};
            e && i(e, (function (e, n) {
              e && n && (t[a(e)] = n)
            }));
            return t
          }(e.style)), d
        }
      },
      3670: function (e, t, n) {
        var r = n(484),
          i = n(4606);
  
        function o(e) {
          return i.PRESERVE_CUSTOM_ATTRIBUTES && "tag" === e.type && i.isCustomComponent(e.name, e.attribs)
        }
        e.exports = function e(t, i) {
          for (var a, s, l, c, u = (i = i || {}).library || n(7294), p = u.cloneElement, d = u.createElement, f = u.isValidElement, m = [], h = "function" === typeof i.replace, g = i.trim, v = 0, y = t.length; v < y; v++)
            if (a = t[v], h && f(s = i.replace(a))) y > 1 && (s = p(s, {
              key: s.key || v
            })), m.push(s);
            else if ("text" !== a.type) {
            switch (l = a.attribs, o(a) || (l = r(a.attribs)), c = null, a.type) {
            case "script":
            case "style":
              a.children[0] && (l.dangerouslySetInnerHTML = {
                __html: a.children[0].data
              });
              break;
            case "tag":
              "textarea" === a.name && a.children[0] ? l.defaultValue = a.children[0].data : a.children && a.children.length && (c = e(a.children, i));
              break;
            default:
              continue
            }
            y > 1 && (l.key = v), m.push(d(a.name, l, c))
          } else g ? a.data.trim() && m.push(a.data) : m.push(a.data);
          return 1 === m.length ? m[0] : m
        }
      },
      4606: function (e, t, n) {
        var r = n(7294),
          i = /-([a-z])/g,
          o = /^--[a-zA-Z0-9-]+$|^[^-]+$/;
        var a = r.version.split(".")[0] >= 16;
        e.exports = {
          PRESERVE_CUSTOM_ATTRIBUTES: a,
          camelCase: function (e) {
            if ("string" !== typeof e) throw new TypeError("First argument must be a string");
            return o.test(e) ? e : e.toLowerCase().replace(i, (function (e, t) {
              return t.toUpperCase()
            }))
          },
          invertObject: function (e, t) {
            if (!e || "object" !== typeof e) throw new TypeError("First argument must be an object");
            var n, r, i = "function" === typeof t,
              o = {},
              a = {};
            for (n in e) r = e[n], i && (o = t(n, r)) && 2 === o.length ? a[o[0]] = o[1] : "string" === typeof r && (a[r] = n);
            return a
          },
          isCustomComponent: function (e, t) {
            if (-1 === e.indexOf("-")) return t && "string" === typeof t.is;
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
              return !0
            }
          }
        }
      },
      8139: function (e) {
        var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
          n = /\n/g,
          r = /^\s*/,
          i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
          o = /^:\s*/,
          a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
          s = /^[;\s]*/,
          l = /^\s+|\s+$/g,
          c = "";
  
        function u(e) {
          return e ? e.replace(l, c) : c
        }
        e.exports = function (e, l) {
          if ("string" !== typeof e) throw new TypeError("First argument must be a string");
          if (!e) return [];
          l = l || {};
          var p = 1,
            d = 1;
  
          function f(e) {
            var t = e.match(n);
            t && (p += t.length);
            var r = e.lastIndexOf("\n");
            d = ~r ? e.length - r : d + e.length
          }
  
          function m() {
            var e = {
              line: p,
              column: d
            };
            return function (t) {
              return t.position = new h(e), x(), t
            }
          }
  
          function h(e) {
            this.start = e, this.end = {
              line: p,
              column: d
            }, this.source = l.source
          }
          h.prototype.content = e;
          var g = [];
  
          function v(t) {
            var n = new Error(l.source + ":" + p + ":" + d + ": " + t);
            if (n.reason = t, n.filename = l.source, n.line = p, n.column = d, n.source = e, !l.silent) throw n;
            g.push(n)
          }
  
          function y(t) {
            var n = t.exec(e);
            if (n) {
              var r = n[0];
              return f(r), e = e.slice(r.length), n
            }
          }
  
          function x() {
            y(r)
          }
  
          function k(e) {
            var t;
            for (e = e || []; t = b();) !1 !== t && e.push(t);
            return e
          }
  
          function b() {
            var t = m();
            if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
              for (var n = 2; c != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
              if (n += 2, c === e.charAt(n - 1)) return v("End of comment missing");
              var r = e.slice(2, n - 2);
              return d += 2, f(r), e = e.slice(n), d += 2, t({
                type: "comment",
                comment: r
              })
            }
          }
  
          function E() {
            var e = m(),
              n = y(i);
            if (n) {
              if (b(), !y(o)) return v("property missing ':'");
              var r = y(a),
                l = e({
                  type: "declaration",
                  property: u(n[0].replace(t, c)),
                  value: r ? u(r[0].replace(t, c)) : c
                });
              return y(s), l
            }
          }
          return x(),
            function () {
              var e, t = [];
              for (k(t); e = E();) !1 !== e && (t.push(e), k(t));
              return t
            }()
        }
      },
      4097: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, {
          Snippets: function () {
            return f
          }
        });
        var r = n(5893),
          i = (n(7294), n(9008)),
          o = n.n(i),
          a = n(488),
          s = n.n(a),
          l = function (e) {
            var t, n = s()(null === e || void 0 === e || null === (t = e.snippet) || void 0 === t ? void 0 : t.content);
            return (0, r.jsx)(o(), {
              children: n
            })
          },
          c = n(6042),
          u = n(4298),
          p = n.n(u),
          d = function (e) {
            var t = e.snippet,
              n = e.index,
              i = 0,
              o = s()(t.content, {
                replace: function (e) {
                  if (i += 1, "script" === e.type) {
                    var t, o, s;
                    if (null === (t = e.children) || void 0 === t ? void 0 : t.length) return (0, r.jsx)(p(), {
                      id: "body-script-".concat(n, "-").concat(i),
                      strategy: (null === (s = e.attribs) || void 0 === s ? void 0 : s.strategy) || "afterInteractive",
                      dangerouslySetInnerHTML: {
                        __html: (0, a.domToReact)(e.children).toString()
                      }
                    });
                    if (e.attribs && (null === (o = Object.keys(e.attribs)) || void 0 === o ? void 0 : o.length)) {
                      var l, u = Object.keys(e.attribs).reduce((function (t, n) {
                        return e.attribs[n] ? t[n] = e.attribs[n] : t[n] = !0, t
                      }), {});
                      return (0, r.jsx)(p(), (0, c.Z)({
                        id: "body-script-".concat(n, "-").concat(i),
                        strategy: (null === (l = e.attribs) || void 0 === l ? void 0 : l.strategy) || "afterInteractive"
                      }, u))
                    }
                  }
                }
              });
            return (0, r.jsx)(r.Fragment, {
              children: o
            })
          },
          f = function (e) {
            var t, n;
            return (0, r.jsxs)(r.Fragment, {
              children: [(null === (t = e.headSnippets) || void 0 === t ? void 0 : t.length) ? e.headSnippets.map((function (e) {
                return (0, r.jsx)(l, {
                  snippet: e
                }, e.id)
              })) : null, (null === (n = e.bodySnippets) || void 0 === n ? void 0 : n.length) ? e.bodySnippets.map((function (e, t) {
                return (0, r.jsx)(d, {
                  snippet: e,
                  index: t
                }, e.id)
              })) : null]
            })
          }
      },
      4298: function (e, t, n) {
        e.exports = n(699)
      },
      2686: function (e, t, n) {
        var r = n(339),
          i = n(3138),
          o = n(1855),
          a = o.MUST_USE_PROPERTY,
          s = o.HAS_BOOLEAN_VALUE,
          l = o.HAS_NUMERIC_VALUE,
          c = o.HAS_POSITIVE_NUMERIC_VALUE,
          u = o.HAS_OVERLOADED_BOOLEAN_VALUE;
  
        function p(e, t) {
          return (e & t) === t
        }
  
        function d(e, t, n) {
          var r, i, o, d = e.Properties,
            f = e.DOMAttributeNames;
          for (i in d) r = f[i] || (n ? i : i.toLowerCase()), o = d[i], t[r] = {
            attributeName: r,
            propertyName: i,
            mustUseProperty: p(o, a),
            hasBooleanValue: p(o, s),
            hasNumericValue: p(o, l),
            hasPositiveNumericValue: p(o, c),
            hasOverloadedBooleanValue: p(o, u)
          }
        }
        var f = {};
        d(r, f);
        var m = {};
        d(i, m, !0);
        var h = {};
        d(r, h), d(i, h, !0);
        e.exports = {
          html: f,
          svg: m,
          properties: h,
          isCustomAttribute: RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"))
        }
      },
      339: function (e) {
        e.exports = {
          Properties: {
            autoFocus: 4,
            accept: 0,
            acceptCharset: 0,
            accessKey: 0,
            action: 0,
            allowFullScreen: 4,
            allowTransparency: 0,
            alt: 0,
            as: 0,
            async: 4,
            autoComplete: 0,
            autoPlay: 4,
            capture: 4,
            cellPadding: 0,
            cellSpacing: 0,
            charSet: 0,
            challenge: 0,
            checked: 5,
            cite: 0,
            classID: 0,
            className: 0,
            cols: 24,
            colSpan: 0,
            content: 0,
            contentEditable: 0,
            contextMenu: 0,
            controls: 4,
            controlsList: 0,
            coords: 0,
            crossOrigin: 0,
            data: 0,
            dateTime: 0,
            default: 4,
            defer: 4,
            dir: 0,
            disabled: 4,
            download: 32,
            draggable: 0,
            encType: 0,
            form: 0,
            formAction: 0,
            formEncType: 0,
            formMethod: 0,
            formNoValidate: 4,
            formTarget: 0,
            frameBorder: 0,
            headers: 0,
            height: 0,
            hidden: 4,
            high: 0,
            href: 0,
            hrefLang: 0,
            htmlFor: 0,
            httpEquiv: 0,
            icon: 0,
            id: 0,
            inputMode: 0,
            integrity: 0,
            is: 0,
            keyParams: 0,
            keyType: 0,
            kind: 0,
            label: 0,
            lang: 0,
            list: 0,
            loop: 4,
            low: 0,
            manifest: 0,
            marginHeight: 0,
            marginWidth: 0,
            max: 0,
            maxLength: 0,
            media: 0,
            mediaGroup: 0,
            method: 0,
            min: 0,
            minLength: 0,
            multiple: 5,
            muted: 5,
            name: 0,
            nonce: 0,
            noValidate: 4,
            open: 4,
            optimum: 0,
            pattern: 0,
            placeholder: 0,
            playsInline: 4,
            poster: 0,
            preload: 0,
            profile: 0,
            radioGroup: 0,
            readOnly: 4,
            referrerPolicy: 0,
            rel: 0,
            required: 4,
            reversed: 4,
            role: 0,
            rows: 24,
            rowSpan: 8,
            sandbox: 0,
            scope: 0,
            scoped: 4,
            scrolling: 0,
            seamless: 4,
            selected: 5,
            shape: 0,
            size: 24,
            sizes: 0,
            span: 24,
            spellCheck: 0,
            src: 0,
            srcDoc: 0,
            srcLang: 0,
            srcSet: 0,
            start: 8,
            step: 0,
            style: 0,
            summary: 0,
            tabIndex: 0,
            target: 0,
            title: 0,
            type: 0,
            useMap: 0,
            value: 0,
            width: 0,
            wmode: 0,
            wrap: 0,
            about: 0,
            datatype: 0,
            inlist: 0,
            prefix: 0,
            property: 0,
            resource: 0,
            typeof: 0,
            vocab: 0,
            autoCapitalize: 0,
            autoCorrect: 0,
            autoSave: 0,
            color: 0,
            itemProp: 0,
            itemScope: 4,
            itemType: 0,
            itemID: 0,
            itemRef: 0,
            results: 0,
            security: 0,
            unselectable: 0
          },
          DOMAttributeNames: {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv"
          }
        }
      },
      3138: function (e) {
        e.exports = {
          Properties: {
            accentHeight: 0,
            accumulate: 0,
            additive: 0,
            alignmentBaseline: 0,
            allowReorder: 0,
            alphabetic: 0,
            amplitude: 0,
            arabicForm: 0,
            ascent: 0,
            attributeName: 0,
            attributeType: 0,
            autoReverse: 0,
            azimuth: 0,
            baseFrequency: 0,
            baseProfile: 0,
            baselineShift: 0,
            bbox: 0,
            begin: 0,
            bias: 0,
            by: 0,
            calcMode: 0,
            capHeight: 0,
            clip: 0,
            clipPath: 0,
            clipRule: 0,
            clipPathUnits: 0,
            colorInterpolation: 0,
            colorInterpolationFilters: 0,
            colorProfile: 0,
            colorRendering: 0,
            contentScriptType: 0,
            contentStyleType: 0,
            cursor: 0,
            cx: 0,
            cy: 0,
            d: 0,
            decelerate: 0,
            descent: 0,
            diffuseConstant: 0,
            direction: 0,
            display: 0,
            divisor: 0,
            dominantBaseline: 0,
            dur: 0,
            dx: 0,
            dy: 0,
            edgeMode: 0,
            elevation: 0,
            enableBackground: 0,
            end: 0,
            exponent: 0,
            externalResourcesRequired: 0,
            fill: 0,
            fillOpacity: 0,
            fillRule: 0,
            filter: 0,
            filterRes: 0,
            filterUnits: 0,
            floodColor: 0,
            floodOpacity: 0,
            focusable: 0,
            fontFamily: 0,
            fontSize: 0,
            fontSizeAdjust: 0,
            fontStretch: 0,
            fontStyle: 0,
            fontVariant: 0,
            fontWeight: 0,
            format: 0,
            from: 0,
            fx: 0,
            fy: 0,
            g1: 0,
            g2: 0,
            glyphName: 0,
            glyphOrientationHorizontal: 0,
            glyphOrientationVertical: 0,
            glyphRef: 0,
            gradientTransform: 0,
            gradientUnits: 0,
            hanging: 0,
            horizAdvX: 0,
            horizOriginX: 0,
            ideographic: 0,
            imageRendering: 0,
            in : 0,
            in2: 0,
            intercept: 0,
            k: 0,
            k1: 0,
            k2: 0,
            k3: 0,
            k4: 0,
            kernelMatrix: 0,
            kernelUnitLength: 0,
            kerning: 0,
            keyPoints: 0,
            keySplines: 0,
            keyTimes: 0,
            lengthAdjust: 0,
            letterSpacing: 0,
            lightingColor: 0,
            limitingConeAngle: 0,
            local: 0,
            markerEnd: 0,
            markerMid: 0,
            markerStart: 0,
            markerHeight: 0,
            markerUnits: 0,
            markerWidth: 0,
            mask: 0,
            maskContentUnits: 0,
            maskUnits: 0,
            mathematical: 0,
            mode: 0,
            numOctaves: 0,
            offset: 0,
            opacity: 0,
            operator: 0,
            order: 0,
            orient: 0,
            orientation: 0,
            origin: 0,
            overflow: 0,
            overlinePosition: 0,
            overlineThickness: 0,
            paintOrder: 0,
            panose1: 0,
            pathLength: 0,
            patternContentUnits: 0,
            patternTransform: 0,
            patternUnits: 0,
            pointerEvents: 0,
            points: 0,
            pointsAtX: 0,
            pointsAtY: 0,
            pointsAtZ: 0,
            preserveAlpha: 0,
            preserveAspectRatio: 0,
            primitiveUnits: 0,
            r: 0,
            radius: 0,
            refX: 0,
            refY: 0,
            renderingIntent: 0,
            repeatCount: 0,
            repeatDur: 0,
            requiredExtensions: 0,
            requiredFeatures: 0,
            restart: 0,
            result: 0,
            rotate: 0,
            rx: 0,
            ry: 0,
            scale: 0,
            seed: 0,
            shapeRendering: 0,
            slope: 0,
            spacing: 0,
            specularConstant: 0,
            specularExponent: 0,
            speed: 0,
            spreadMethod: 0,
            startOffset: 0,
            stdDeviation: 0,
            stemh: 0,
            stemv: 0,
            stitchTiles: 0,
            stopColor: 0,
            stopOpacity: 0,
            strikethroughPosition: 0,
            strikethroughThickness: 0,
            string: 0,
            stroke: 0,
            strokeDasharray: 0,
            strokeDashoffset: 0,
            strokeLinecap: 0,
            strokeLinejoin: 0,
            strokeMiterlimit: 0,
            strokeOpacity: 0,
            strokeWidth: 0,
            surfaceScale: 0,
            systemLanguage: 0,
            tableValues: 0,
            targetX: 0,
            targetY: 0,
            textAnchor: 0,
            textDecoration: 0,
            textRendering: 0,
            textLength: 0,
            to: 0,
            transform: 0,
            u1: 0,
            u2: 0,
            underlinePosition: 0,
            underlineThickness: 0,
            unicode: 0,
            unicodeBidi: 0,
            unicodeRange: 0,
            unitsPerEm: 0,
            vAlphabetic: 0,
            vHanging: 0,
            vIdeographic: 0,
            vMathematical: 0,
            values: 0,
            vectorEffect: 0,
            version: 0,
            vertAdvY: 0,
            vertOriginX: 0,
            vertOriginY: 0,
            viewBox: 0,
            viewTarget: 0,
            visibility: 0,
            widths: 0,
            wordSpacing: 0,
            writingMode: 0,
            x: 0,
            xHeight: 0,
            x1: 0,
            x2: 0,
            xChannelSelector: 0,
            xlinkActuate: 0,
            xlinkArcrole: 0,
            xlinkHref: 0,
            xlinkRole: 0,
            xlinkShow: 0,
            xlinkTitle: 0,
            xlinkType: 0,
            xmlBase: 0,
            xmlns: 0,
            xmlnsXlink: 0,
            xmlLang: 0,
            xmlSpace: 0,
            y: 0,
            y1: 0,
            y2: 0,
            yChannelSelector: 0,
            z: 0,
            zoomAndPan: 0
          },
          DOMAttributeNames: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDasharray: "stroke-dasharray",
            strokeDashoffset: "stroke-dashoffset",
            strokeLinecap: "stroke-linecap",
            strokeLinejoin: "stroke-linejoin",
            strokeMiterlimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            xlinkActuate: "xlink:actuate",
            xlinkArcrole: "xlink:arcrole",
            xlinkHref: "xlink:href",
            xlinkRole: "xlink:role",
            xlinkShow: "xlink:show",
            xlinkTitle: "xlink:title",
            xlinkType: "xlink:type",
            xmlBase: "xml:base",
            xmlnsXlink: "xmlns:xlink",
            xmlLang: "xml:lang",
            xmlSpace: "xml:space"
          }
        }
      },
      1855: function (e) {
        e.exports = {
          MUST_USE_PROPERTY: 1,
          HAS_BOOLEAN_VALUE: 4,
          HAS_NUMERIC_VALUE: 8,
          HAS_POSITIVE_NUMERIC_VALUE: 24,
          HAS_OVERLOADED_BOOLEAN_VALUE: 32
        }
      },
      7848: function (e, t, n) {
        var r = n(8139);
        e.exports = function (e, t) {
          var n, i = null;
          if (!e || "string" !== typeof e) return i;
          for (var o, a, s = r(e), l = "function" === typeof t, c = 0, u = s.length; c < u; c++) o = (n = s[c]).property, a = n.value, l ? t(o, a, n) : a && (i || (i = {}), i[o] = a);
          return i
        }
      }
    }
  ]);