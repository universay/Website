self.__BUILD_MANIFEST = function (s, e, a) {
    return {
      __rewrites: {
        beforeFiles: [],
        afterFiles: [],
        fallback: []
      },
      "/": [e, s, a, "static/chunks/pages/index-62b675f5dde51872.js"],
      "/404": [s, "static/chunks/pages/404-d92963ae2ffbf1ff.js"],
      "/_error": ["static/chunks/pages/_error-7891c9bfcd7b3e53.js"],
      "/robots.txt": ["static/chunks/pages/robots.txt-51587059faa27e50.js"],
      "/sitemap.xml": ["static/chunks/pages/sitemap.xml-206277c5291b7bcd.js"],
      "/[...page]": [e, s, a, "static/chunks/pages/[...page]-d2e2efdb4d1d5b43.js"],
      sortedPages: ["/", "/404", "/_app", "/_error", "/robots.txt", "/sitemap.xml", "/[...page]"]
    }
  }("static/chunks/7628-86e9abdae0ae4ec3.js", "static/chunks/1855-d39a98e72e829539.js", "static/chunks/9503-be579e13bb7f2de7.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();