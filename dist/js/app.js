(() => {
  var t = {
      732: function (t) {
        t.exports = (function () {
          "use strict";
          function t() {
            return (
              (t =
                Object.assign ||
                function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (t[o] = n[o]);
                  }
                  return t;
                }),
              t.apply(this, arguments)
            );
          }
          var e = "undefined" != typeof window,
            n =
              (e && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            o = e && "IntersectionObserver" in window,
            i = e && "classList" in document.createElement("p"),
            r = e && window.devicePixelRatio > 1,
            s = {
              elements_selector: ".lazy",
              container: n || e ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            a = function (e) {
              return t({}, s, e);
            },
            l = function (t, e) {
              var n,
                o = "LazyLoad::Initialized",
                i = new t(e);
              try {
                n = new CustomEvent(o, { detail: { instance: i } });
              } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  o,
                  !1,
                  !1,
                  { instance: i }
                );
              }
              window.dispatchEvent(n);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            h = "poster",
            p = "llOriginalAttrs",
            f = "data",
            m = "loading",
            g = "loaded",
            v = "applied",
            y = "error",
            b = "native",
            _ = "data-",
            E = "ll-status",
            w = function (t, e) {
              return t.getAttribute(_ + e);
            },
            A = function (t) {
              return w(t, E);
            },
            L = function (t, e) {
              return (function (t, e, n) {
                var o = "data-ll-status";
                null !== n ? t.setAttribute(o, n) : t.removeAttribute(o);
              })(t, 0, e);
            },
            O = function (t) {
              return L(t, null);
            },
            S = function (t) {
              return null === A(t);
            },
            k = function (t) {
              return A(t) === b;
            },
            x = [m, g, v, y],
            C = function (t, e, n, o) {
              t &&
                (void 0 === o ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, o));
            },
            I = function (t, e) {
              i
                ? t.classList.add(e)
                : (t.className += (t.className ? " " : "") + e);
            },
            T = function (t, e) {
              i
                ? t.classList.remove(e)
                : (t.className = t.className
                    .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            q = function (t) {
              return t.llTempImage;
            },
            P = function (t, e) {
              if (e) {
                var n = e._observer;
                n && n.unobserve(t);
              }
            },
            $ = function (t, e) {
              t && (t.loadingCount += e);
            },
            W = function (t, e) {
              t && (t.toLoadCount = e);
            },
            B = function (t) {
              for (var e, n = [], o = 0; (e = t.children[o]); o += 1)
                "SOURCE" === e.tagName && n.push(e);
              return n;
            },
            M = function (t, e) {
              var n = t.parentNode;
              n && "PICTURE" === n.tagName && B(n).forEach(e);
            },
            R = function (t, e) {
              B(t).forEach(e);
            },
            H = [c],
            N = [c, h],
            j = [c, d, u],
            D = [f],
            z = function (t) {
              return !!t[p];
            },
            F = function (t) {
              return t[p];
            },
            V = function (t) {
              return delete t[p];
            },
            G = function (t, e) {
              if (!z(t)) {
                var n = {};
                e.forEach(function (e) {
                  n[e] = t.getAttribute(e);
                }),
                  (t[p] = n);
              }
            },
            U = function (t, e) {
              if (z(t)) {
                var n = F(t);
                e.forEach(function (e) {
                  !(function (t, e, n) {
                    n ? t.setAttribute(e, n) : t.removeAttribute(e);
                  })(t, e, n[e]);
                });
              }
            },
            Q = function (t, e, n) {
              I(t, e.class_applied),
                L(t, v),
                n &&
                  (e.unobserve_completed && P(t, e),
                  C(e.callback_applied, t, n));
            },
            X = function (t, e, n) {
              I(t, e.class_loading),
                L(t, m),
                n && ($(n, 1), C(e.callback_loading, t, n));
            },
            J = function (t, e, n) {
              n && t.setAttribute(e, n);
            },
            Y = function (t, e) {
              J(t, u, w(t, e.data_sizes)),
                J(t, d, w(t, e.data_srcset)),
                J(t, c, w(t, e.data_src));
            },
            Z = {
              IMG: function (t, e) {
                M(t, function (t) {
                  G(t, j), Y(t, e);
                }),
                  G(t, j),
                  Y(t, e);
              },
              IFRAME: function (t, e) {
                G(t, H), J(t, c, w(t, e.data_src));
              },
              VIDEO: function (t, e) {
                R(t, function (t) {
                  G(t, H), J(t, c, w(t, e.data_src));
                }),
                  G(t, N),
                  J(t, h, w(t, e.data_poster)),
                  J(t, c, w(t, e.data_src)),
                  t.load();
              },
              OBJECT: function (t, e) {
                G(t, D), J(t, f, w(t, e.data_src));
              },
            },
            K = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            tt = function (t, e) {
              !e ||
                (function (t) {
                  return t.loadingCount > 0;
                })(e) ||
                (function (t) {
                  return t.toLoadCount > 0;
                })(e) ||
                C(t.callback_finish, e);
            },
            et = function (t, e, n) {
              t.addEventListener(e, n), (t.llEvLisnrs[e] = n);
            },
            nt = function (t, e, n) {
              t.removeEventListener(e, n);
            },
            ot = function (t) {
              return !!t.llEvLisnrs;
            },
            it = function (t) {
              if (ot(t)) {
                var e = t.llEvLisnrs;
                for (var n in e) {
                  var o = e[n];
                  nt(t, n, o);
                }
                delete t.llEvLisnrs;
              }
            },
            rt = function (t, e, n) {
              !(function (t) {
                delete t.llTempImage;
              })(t),
                $(n, -1),
                (function (t) {
                  t && (t.toLoadCount -= 1);
                })(n),
                T(t, e.class_loading),
                e.unobserve_completed && P(t, n);
            },
            st = function (t, e, n) {
              var o = q(t) || t;
              ot(o) ||
                (function (t, e, n) {
                  ot(t) || (t.llEvLisnrs = {});
                  var o = "VIDEO" === t.tagName ? "loadeddata" : "load";
                  et(t, o, e), et(t, "error", n);
                })(
                  o,
                  function (i) {
                    !(function (t, e, n, o) {
                      var i = k(e);
                      rt(e, n, o),
                        I(e, n.class_loaded),
                        L(e, g),
                        C(n.callback_loaded, e, o),
                        i || tt(n, o);
                    })(0, t, e, n),
                      it(o);
                  },
                  function (i) {
                    !(function (t, e, n, o) {
                      var i = k(e);
                      rt(e, n, o),
                        I(e, n.class_error),
                        L(e, y),
                        C(n.callback_error, e, o),
                        n.restore_on_error && U(e, j),
                        i || tt(n, o);
                    })(0, t, e, n),
                      it(o);
                  }
                );
            },
            at = function (t, e, n) {
              !(function (t) {
                return K.indexOf(t.tagName) > -1;
              })(t)
                ? (function (t, e, n) {
                    !(function (t) {
                      t.llTempImage = document.createElement("IMG");
                    })(t),
                      st(t, e, n),
                      (function (t) {
                        z(t) ||
                          (t[p] = { backgroundImage: t.style.backgroundImage });
                      })(t),
                      (function (t, e, n) {
                        var o = w(t, e.data_bg),
                          i = w(t, e.data_bg_hidpi),
                          s = r && i ? i : o;
                        s &&
                          ((t.style.backgroundImage = 'url("'.concat(s, '")')),
                          q(t).setAttribute(c, s),
                          X(t, e, n));
                      })(t, e, n),
                      (function (t, e, n) {
                        var o = w(t, e.data_bg_multi),
                          i = w(t, e.data_bg_multi_hidpi),
                          s = r && i ? i : o;
                        s && ((t.style.backgroundImage = s), Q(t, e, n));
                      })(t, e, n),
                      (function (t, e, n) {
                        var o = w(t, e.data_bg_set);
                        if (o) {
                          var i = o.split("|"),
                            r = i.map(function (t) {
                              return "image-set(".concat(t, ")");
                            });
                          (t.style.backgroundImage = r.join()),
                            "" === t.style.backgroundImage &&
                              ((r = i.map(function (t) {
                                return "-webkit-image-set(".concat(t, ")");
                              })),
                              (t.style.backgroundImage = r.join())),
                            Q(t, e, n);
                        }
                      })(t, e, n);
                  })(t, e, n)
                : (function (t, e, n) {
                    st(t, e, n),
                      (function (t, e, n) {
                        var o = Z[t.tagName];
                        o && (o(t, e), X(t, e, n));
                      })(t, e, n);
                  })(t, e, n);
            },
            lt = function (t) {
              t.removeAttribute(c), t.removeAttribute(d), t.removeAttribute(u);
            },
            ct = function (t) {
              M(t, function (t) {
                U(t, j);
              }),
                U(t, j);
            },
            dt = {
              IMG: ct,
              IFRAME: function (t) {
                U(t, H);
              },
              VIDEO: function (t) {
                R(t, function (t) {
                  U(t, H);
                }),
                  U(t, N),
                  t.load();
              },
              OBJECT: function (t) {
                U(t, D);
              },
            },
            ut = function (t, e) {
              (function (t) {
                var e = dt[t.tagName];
                e
                  ? e(t)
                  : (function (t) {
                      if (z(t)) {
                        var e = F(t);
                        t.style.backgroundImage = e.backgroundImage;
                      }
                    })(t);
              })(t),
                (function (t, e) {
                  S(t) ||
                    k(t) ||
                    (T(t, e.class_entered),
                    T(t, e.class_exited),
                    T(t, e.class_applied),
                    T(t, e.class_loading),
                    T(t, e.class_loaded),
                    T(t, e.class_error));
                })(t, e),
                O(t),
                V(t);
            },
            ht = ["IMG", "IFRAME", "VIDEO"],
            pt = function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            },
            ft = function (t, e, n) {
              t.forEach(function (t) {
                return (function (t) {
                  return t.isIntersecting || t.intersectionRatio > 0;
                })(t)
                  ? (function (t, e, n, o) {
                      var i = (function (t) {
                        return x.indexOf(A(t)) >= 0;
                      })(t);
                      L(t, "entered"),
                        I(t, n.class_entered),
                        T(t, n.class_exited),
                        (function (t, e, n) {
                          e.unobserve_entered && P(t, n);
                        })(t, n, o),
                        C(n.callback_enter, t, e, o),
                        i || at(t, n, o);
                    })(t.target, t, e, n)
                  : (function (t, e, n, o) {
                      S(t) ||
                        (I(t, n.class_exited),
                        (function (t, e, n, o) {
                          n.cancel_on_exit &&
                            (function (t) {
                              return A(t) === m;
                            })(t) &&
                            "IMG" === t.tagName &&
                            (it(t),
                            (function (t) {
                              M(t, function (t) {
                                lt(t);
                              }),
                                lt(t);
                            })(t),
                            ct(t),
                            T(t, n.class_loading),
                            $(o, -1),
                            O(t),
                            C(n.callback_cancel, t, e, o));
                        })(t, e, n, o),
                        C(n.callback_exit, t, e, o));
                    })(t.target, t, e, n);
              });
            },
            mt = function (t) {
              return Array.prototype.slice.call(t);
            },
            gt = function (t) {
              return t.container.querySelectorAll(t.elements_selector);
            },
            vt = function (t) {
              return (function (t) {
                return A(t) === y;
              })(t);
            },
            yt = function (t, e) {
              return (function (t) {
                return mt(t).filter(S);
              })(t || gt(e));
            },
            bt = function (t, n) {
              var i = a(t);
              (this._settings = i),
                (this.loadingCount = 0),
                (function (t, e) {
                  o &&
                    !pt(t) &&
                    (e._observer = new IntersectionObserver(
                      function (n) {
                        ft(n, t, e);
                      },
                      (function (t) {
                        return {
                          root: t.container === document ? null : t.container,
                          rootMargin: t.thresholds || t.threshold + "px",
                        };
                      })(t)
                    ));
                })(i, this),
                (function (t, n) {
                  e &&
                    ((n._onlineHandler = function () {
                      !(function (t, e) {
                        var n;
                        ((n = gt(t)), mt(n).filter(vt)).forEach(function (e) {
                          T(e, t.class_error), O(e);
                        }),
                          e.update();
                      })(t, n);
                    }),
                    window.addEventListener("online", n._onlineHandler));
                })(i, this),
                this.update(n);
            };
          return (
            (bt.prototype = {
              update: function (t) {
                var e,
                  i,
                  r = this._settings,
                  s = yt(t, r);
                W(this, s.length),
                  !n && o
                    ? pt(r)
                      ? (function (t, e, n) {
                          t.forEach(function (t) {
                            -1 !== ht.indexOf(t.tagName) &&
                              (function (t, e, n) {
                                t.setAttribute("loading", "lazy"),
                                  st(t, e, n),
                                  (function (t, e) {
                                    var n = Z[t.tagName];
                                    n && n(t, e);
                                  })(t, e),
                                  L(t, b);
                              })(t, e, n);
                          }),
                            W(n, 0);
                        })(s, r, this)
                      : ((i = s),
                        (function (t) {
                          t.disconnect();
                        })((e = this._observer)),
                        (function (t, e) {
                          e.forEach(function (e) {
                            t.observe(e);
                          });
                        })(e, i))
                    : this.loadAll(s);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  e &&
                    window.removeEventListener("online", this._onlineHandler),
                  gt(this._settings).forEach(function (t) {
                    V(t);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (t) {
                var e = this,
                  n = this._settings;
                yt(t, n).forEach(function (t) {
                  P(t, e), at(t, n, e);
                });
              },
              restoreAll: function () {
                var t = this._settings;
                gt(t).forEach(function (e) {
                  ut(e, t);
                });
              },
            }),
            (bt.load = function (t, e) {
              var n = a(e);
              at(t, n);
            }),
            (bt.resetStatus = function (t) {
              O(t);
            }),
            e &&
              (function (t, e) {
                if (e)
                  if (e.length) for (var n, o = 0; (n = e[o]); o += 1) l(t, n);
                  else l(t, e);
              })(bt, window.lazyLoadOptions),
            bt
          );
        })();
      },
    },
    e = {};
  function n(o) {
    var i = e[o];
    if (void 0 !== i) return i.exports;
    var r = (e[o] = { exports: {} });
    return t[o].call(r.exports, r, r.exports, n), r.exports;
  }
  (() => {
    "use strict";
    const t = {};
    let e = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
        );
      },
    };
    let o = (t, e = 500, n = 0) => {
        t.classList.contains("_slide") ||
          (t.classList.add("_slide"),
          (t.style.transitionProperty = "height, margin, padding"),
          (t.style.transitionDuration = e + "ms"),
          (t.style.height = `${t.offsetHeight}px`),
          t.offsetHeight,
          (t.style.overflow = "hidden"),
          (t.style.height = n ? `${n}px` : "0px"),
          (t.style.paddingTop = 0),
          (t.style.paddingBottom = 0),
          (t.style.marginTop = 0),
          (t.style.marginBottom = 0),
          window.setTimeout(() => {
            (t.hidden = !n),
              !n && t.style.removeProperty("height"),
              t.style.removeProperty("padding-top"),
              t.style.removeProperty("padding-bottom"),
              t.style.removeProperty("margin-top"),
              t.style.removeProperty("margin-bottom"),
              !n && t.style.removeProperty("overflow"),
              t.style.removeProperty("transition-duration"),
              t.style.removeProperty("transition-property"),
              t.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: t } })
              );
          }, e));
      },
      i = (t, e = 500, n = 0) => {
        if (!t.classList.contains("_slide")) {
          t.classList.add("_slide"),
            (t.hidden = !t.hidden && null),
            n && t.style.removeProperty("height");
          let o = t.offsetHeight;
          (t.style.overflow = "hidden"),
            (t.style.height = n ? `${n}px` : "0px"),
            (t.style.paddingTop = 0),
            (t.style.paddingBottom = 0),
            (t.style.marginTop = 0),
            (t.style.marginBottom = 0),
            t.offsetHeight,
            (t.style.transitionProperty = "height, margin, padding"),
            (t.style.transitionDuration = e + "ms"),
            (t.style.height = o + "px"),
            t.style.removeProperty("padding-top"),
            t.style.removeProperty("padding-bottom"),
            t.style.removeProperty("margin-top"),
            t.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              t.style.removeProperty("height"),
                t.style.removeProperty("overflow"),
                t.style.removeProperty("transition-duration"),
                t.style.removeProperty("transition-property"),
                t.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: t } })
                );
            }, e);
        }
      },
      r = !0,
      s = (t = 500) => {
        document.documentElement.classList.contains("lock") ? a(t) : l(t);
      },
      a = (t = 500) => {
        let e = document.querySelector("body");
        if (r) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let t = 0; t < n.length; t++) {
              n[t].style.paddingRight = "0px";
            }
            (e.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, t),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, t);
        }
      },
      l = (t = 500) => {
        let e = document.querySelector("body");
        if (r) {
          let n = document.querySelectorAll("[data-lp]");
          for (let t = 0; t < n.length; t++) {
            n[t].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (e.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, t);
        }
      };
    function c(t) {
      setTimeout(() => {
        window.FLS && console.log(t);
      }, 0);
    }
    function d(t) {
      return t.filter(function (t, e, n) {
        return n.indexOf(t) === e;
      });
    }
    function u(t, e) {
      const n = Array.from(t).filter(function (t, n, o) {
        if (t.dataset[e]) return t.dataset[e].split(",")[0];
      });
      if (n.length) {
        const t = [];
        n.forEach((n) => {
          const o = {},
            i = n.dataset[e].split(",");
          (o.value = i[0]),
            (o.type = i[1] ? i[1].trim() : "max"),
            (o.item = n),
            t.push(o);
        });
        let o = t.map(function (t) {
          return (
            "(" +
            t.type +
            "-width: " +
            t.value +
            "px)," +
            t.value +
            "," +
            t.type
          );
        });
        o = d(o);
        const i = [];
        if (o.length)
          return (
            o.forEach((e) => {
              const n = e.split(","),
                o = n[1],
                r = n[2],
                s = window.matchMedia(n[0]),
                a = t.filter(function (t) {
                  if (t.value === o && t.type === r) return !0;
                });
              i.push({ itemsArray: a, matchMedia: s });
            }),
            i
          );
      }
    }
    t.popup = new (class {
      constructor(t) {
        let e = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...e,
            ...t,
            classes: { ...e.classes, ...t?.classes },
            hashSettings: { ...e.hashSettings, ...t?.hashSettings },
            on: { ...e.on, ...t?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (t) {
            const e = t.target.closest(`[${this.options.attributeOpenButton}]`);
            if (e)
              return (
                t.preventDefault(),
                (this._dataValue = e.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? e.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = e),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${e.classList}`
                    )
              );
            return t.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!t.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (t.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (t) {
              if (
                this.options.closeEsc &&
                27 == t.which &&
                "Escape" === t.code &&
                this.isOpen
              )
                return t.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == t.which &&
                this.isOpen &&
                this._focusCatch(t);
            }.bind(this)
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(t) {
        if (
          (t &&
            "string" == typeof t &&
            "" !== t.trim() &&
            ((this.targetOpen.selector = t), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const t = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              e = document.createElement("iframe");
            e.setAttribute("allowfullscreen", "");
            const n = this.options.setAutoplayYoutube ? "autoplay;" : "";
            e.setAttribute("allow", `${n}; encrypted-media`),
              e.setAttribute("src", t),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(e);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : s(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(t) {
        t &&
          "string" == typeof t &&
          "" !== t.trim() &&
          (this.previousOpen.selector = t),
          this.isOpen &&
            r &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              s(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let t = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${t}"]`
        ) &&
          t &&
          this.open(t);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(t) {
        const e = this.targetOpen.element.querySelectorAll(this._focusEl),
          n = Array.prototype.slice.call(e),
          o = n.indexOf(document.activeElement);
        t.shiftKey && 0 === o && (n[n.length - 1].focus(), t.preventDefault()),
          t.shiftKey ||
            o !== n.length - 1 ||
            (n[0].focus(), t.preventDefault());
      }
      _focusTrap() {
        const t = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : t[0].focus();
      }
      popupLogging(t) {
        this.options.logging && c(`[Попапос]: ${t}`);
      }
    })({});
    let h = (t, e = !1, n = 500, o = 0) => {
      const i = document.querySelector(t);
      if (i) {
        let r = "",
          s = 0;
        e &&
          ((r = "header.header"), (s = document.querySelector(r).offsetHeight));
        let l = {
          speedAsDuration: !0,
          speed: n,
          header: r,
          offset: o,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (a(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(i, "", l);
        else {
          let t = i.getBoundingClientRect().top + scrollY;
          (t = s ? t - s : t),
            (t = o ? t - o : t),
            window.scrollTo({ top: t, behavior: "smooth" });
        }
        c(`[gotoBlock]: Юхуу...едем к ${t}`);
      } else c(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${t}`);
    };
    let p = {
      getErrors(t) {
        let e = 0,
          n = t.querySelectorAll("*[data-required]");
        return (
          n.length &&
            n.forEach((t) => {
              (null === t.offsetParent && "SELECT" !== t.tagName) ||
                t.disabled ||
                (e += this.validateInput(t));
            }),
          e
        );
      },
      validateInput(t) {
        let e = 0;
        return (
          "email" === t.dataset.required
            ? ((t.value = t.value.replace(" ", "")),
              this.emailTest(t)
                ? (this.addError(t), this.removeField(t), e++)
                : (this.removeError(t), this.addField(t)))
            : "url" === t.dataset.required
            ? (console.log(t),
              this.urlTest(t)
                ? (this.addError(t), this.removeField(t), e++)
                : (this.removeError(t), this.addField(t)))
            : ("checkbox" !== t.type || t.checked) && t.value
            ? (this.removeError(t), this.addField(t))
            : (this.addError(t), this.removeField(t), e++),
          e
        );
      },
      addError(t) {
        t.classList.add("_form-error"),
          t.parentElement.classList.add("_form-error");
        let e = t.parentElement.querySelector(".form__error");
        e && t.parentElement.removeChild(e),
          t.dataset.error &&
            t.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${t.dataset.error}</div>`
            );
      },
      removeError(t) {
        t.classList.remove("_form-error"),
          t.parentElement.classList.remove("_form-error"),
          t.parentElement.querySelector(".form__error") &&
            t.parentElement.removeChild(
              t.parentElement.querySelector(".form__error")
            );
      },
      addField(t) {
        t.classList.add("_form-field"),
          t.parentElement.classList.add("_form-field");
        let e = t.parentElement.querySelector(".form__field");
        e && t.parentElement.removeChild(e);
      },
      removeField(t) {
        t.classList.remove("_form-error"),
          t.parentElement.classList.remove("_form-field");
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let n = e.querySelectorAll("input,textarea");
            for (let t = 0; t < n.length; t++) {
              const e = n[t];
              e.parentElement.classList.remove("_form-focus"),
                e.classList.remove("_form-focus"),
                p.removeError(e);
            }
            let o = e.querySelectorAll(".checkbox__input");
            if (o.length > 0)
              for (let t = 0; t < o.length; t++) {
                o[t].checked = !1;
              }
            if (t.select) {
              let n = e.querySelectorAll(".select");
              if (n.length)
                for (let e = 0; e < n.length; e++) {
                  const o = n[e].querySelector("select");
                  t.select.selectBuild(o);
                }
            }
          }, 0);
      },
      emailTest: (t) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(t.value),
      urlTest: (t) =>
        !/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(
          t.value
        ),
    };
    new (n(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    t.watcher = new (class {
      constructor(t) {
        (this.config = Object.assign({ logging: !0 }, t)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(t) {
        if (t.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${t.length})...`
          ),
            d(
              Array.from(t).map(function (t) {
                return `${
                  t.dataset.watchRoot ? t.dataset.watchRoot : null
                }|${t.dataset.watchMargin ? t.dataset.watchMargin : "0px"}|${t.dataset.watchThreshold ? t.dataset.watchThreshold : 0}`;
              })
            ).forEach((e) => {
              let n = e.split("|"),
                o = { root: n[0], margin: n[1], threshold: n[2] },
                i = Array.from(t).filter(function (t) {
                  let e = t.dataset.watchRoot ? t.dataset.watchRoot : null,
                    n = t.dataset.watchMargin ? t.dataset.watchMargin : "0px",
                    i = t.dataset.watchThreshold ? t.dataset.watchThreshold : 0;
                  if (
                    String(e) === o.root &&
                    String(n) === o.margin &&
                    String(i) === o.threshold
                  )
                    return t;
                }),
                r = this.getScrollWatcherConfig(o);
              this.scrollWatcherInit(i, r);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(t) {
        let e = {};
        if (
          (document.querySelector(t.root)
            ? (e.root = document.querySelector(t.root))
            : "null" !== t.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${t.root} нет на странице`
              ),
          (e.rootMargin = t.margin),
          !(t.margin.indexOf("px") < 0 && t.margin.indexOf("%") < 0))
        ) {
          if ("prx" === t.threshold) {
            t.threshold = [];
            for (let e = 0; e <= 1; e += 0.005) t.threshold.push(e);
          } else t.threshold = t.threshold.split(",");
          return (e.threshold = t.threshold), e;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(t) {
        this.observer = new IntersectionObserver((t, e) => {
          t.forEach((t) => {
            this.scrollWatcherCallback(t, e);
          });
        }, t);
      }
      scrollWatcherInit(t, e) {
        this.scrollWatcherCreate(e), t.forEach((t) => this.observer.observe(t));
      }
      scrollWatcherIntersecting(t, e) {
        t.isIntersecting
          ? (!e.classList.contains("_watcher-view") &&
              e.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${e.classList}, добавил класс _watcher-view`
            ))
          : (e.classList.contains("_watcher-view") &&
              e.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${e.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(t, e) {
        e.unobserve(t),
          this.scrollWatcherLogging(`Я перестал следить за ${t.classList}`);
      }
      scrollWatcherLogging(t) {
        this.config.logging && c(`[Наблюдатель]: ${t}`);
      }
      scrollWatcherCallback(t, e) {
        const n = t.target;
        this.scrollWatcherIntersecting(t, n),
          n.hasAttribute("data-watch-once") &&
            t.isIntersecting &&
            this.scrollWatcherOff(n, e),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: t } })
          );
      }
    })({});
    let f = !1;
    function m(t) {
      this.type = t;
    }
    setTimeout(() => {
      if (f) {
        let t = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
          document.dispatchEvent(t);
        });
      }
    }, 0),
      (m.prototype.init = function () {
        const t = this;
        (this.оbjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let t = 0; t < this.nodes.length; t++) {
          const e = this.nodes[t],
            n = e.dataset.da.trim().split(","),
            o = {};
          (o.element = e),
            (o.parent = e.parentNode),
            (o.destination = document.querySelector(n[0].trim())),
            (o.breakpoint = n[1] ? n[1].trim() : "767"),
            (o.place = n[2] ? n[2].trim() : "last"),
            (o.index = this.indexInParent(o.parent, o.element)),
            this.оbjects.push(o);
        }
        this.arraySort(this.оbjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.оbjects,
            function (t) {
              return (
                "(" +
                this.type +
                "-width: " +
                t.breakpoint +
                "px)," +
                t.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (t, e, n) {
              return Array.prototype.indexOf.call(n, t) === e;
            }
          ));
        for (let e = 0; e < this.mediaQueries.length; e++) {
          const n = this.mediaQueries[e],
            o = String.prototype.split.call(n, ","),
            i = window.matchMedia(o[0]),
            r = o[1],
            s = Array.prototype.filter.call(this.оbjects, function (t) {
              return t.breakpoint === r;
            });
          i.addListener(function () {
            t.mediaHandler(i, s);
          }),
            this.mediaHandler(i, s);
        }
      }),
      (m.prototype.mediaHandler = function (t, e) {
        if (t.matches)
          for (let t = 0; t < e.length; t++) {
            const n = e[t];
            (n.index = this.indexInParent(n.parent, n.element)),
              this.moveTo(n.place, n.element, n.destination);
          }
        else
          for (let t = e.length - 1; t >= 0; t--) {
            const n = e[t];
            n.element.classList.contains(this.daClassname) &&
              this.moveBack(n.parent, n.element, n.index);
          }
      }),
      (m.prototype.moveTo = function (t, e, n) {
        e.classList.add(this.daClassname),
          "last" === t || t >= n.children.length
            ? n.insertAdjacentElement("beforeend", e)
            : "first" !== t
            ? n.children[t].insertAdjacentElement("beforebegin", e)
            : n.insertAdjacentElement("afterbegin", e);
      }),
      (m.prototype.moveBack = function (t, e, n) {
        e.classList.remove(this.daClassname),
          void 0 !== t.children[n]
            ? t.children[n].insertAdjacentElement("beforebegin", e)
            : t.insertAdjacentElement("beforeend", e);
      }),
      (m.prototype.indexInParent = function (t, e) {
        const n = Array.prototype.slice.call(t.children);
        return Array.prototype.indexOf.call(n, e);
      }),
      (m.prototype.arraySort = function (t) {
        "min" === this.type
          ? Array.prototype.sort.call(t, function (t, e) {
              return t.breakpoint === e.breakpoint
                ? t.place === e.place
                  ? 0
                  : "first" === t.place || "last" === e.place
                  ? -1
                  : "last" === t.place || "first" === e.place
                  ? 1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            })
          : Array.prototype.sort.call(t, function (t, e) {
              return t.breakpoint === e.breakpoint
                ? t.place === e.place
                  ? 0
                  : "first" === t.place || "last" === e.place
                  ? 1
                  : "last" === t.place || "first" === e.place
                  ? -1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            });
      });
    new m("max").init();
    /Trident|MSIE/.test(window.navigator.userAgent) &&
      document.querySelector("body").classList.add("_is-ie");
    const g = document.querySelector("header");
    if (g) {
      const t = () => {
        const t = g.getBoundingClientRect().height;
        document.documentElement.setAttribute("style", `--header: ${t}px; `);
      };
      window.addEventListener("load", () => {
        t(), window.addEventListener("resize", t);
      });
    }
    const v = document.querySelectorAll(".js-clear");
    v[0] &&
      v.forEach((t) => {
        const e = t.querySelector(".js-clear-input");
        t.querySelector(".js-clear-btn").addEventListener("click", (t) => {
          (e.value = ""), t.preventDefault();
        });
      });
    const y = document.querySelector(".cookie");
    if (y) {
      const t = y.querySelectorAll("[data-cookie-close]");
      t[0] &&
        t.forEach((t) => {
          t.addEventListener("click", (t) => {
            y.classList.add("active");
          });
        });
    }
    /Firefox\//.test(window.navigator.userAgent) &&
      document.querySelector("body").classList.add("_is-firefox"),
      (window.FLS = !1),
      (function (t) {
        let e = new Image();
        (e.onload = e.onerror =
          function () {
            t(2 == e.height);
          }),
          (e.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (t) {
        let e = !0 === t ? "webp" : "no-webp";
        document.documentElement.classList.add(e);
      }),
      e.any() && document.documentElement.classList.add("touch"),
      window.addEventListener("load", function () {
        setTimeout(function () {
          document.documentElement.classList.add("loaded");
        }, 3e3);
      }),
      (function () {
        let t = document.querySelector(".icon-menu");
        t &&
          t.addEventListener("click", function (t) {
            r && (s(), document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        const t = document.querySelectorAll("[data-spollers]");
        if (t.length > 0) {
          const e = Array.from(t).filter(function (t, e, n) {
            return !t.dataset.spollers.split(",")[0];
          });
          e.length && r(e);
          let n = u(t, "spollers");
          function r(t, e = !1) {
            t.forEach((t) => {
              (t = e ? t.item : t),
                e.matches || !e
                  ? (t.classList.add("_spoller-init"),
                    s(t),
                    t.addEventListener("click", a))
                  : (t.classList.remove("_spoller-init"),
                    s(t, !1),
                    t.removeEventListener("click", a));
            });
          }
          function s(t, e = !0) {
            let n = t.querySelectorAll("[data-spoller]");
            n.length &&
              ((n = Array.from(n).filter(
                (e) => e.closest("[data-spollers]") === t
              )),
              n.forEach((t) => {
                e
                  ? (t.removeAttribute("tabindex"),
                    t.classList.contains("_spoller-active") ||
                      (t.nextElementSibling.hidden = !0))
                  : (t.setAttribute("tabindex", "-1"),
                    (t.nextElementSibling.hidden = !1));
              }));
          }
          function a(t) {
            const e = t.target;
            if (e.closest("[data-spoller]")) {
              const n = e.closest("[data-spoller]"),
                r = n.closest("[data-spollers]"),
                s = !!r.hasAttribute("data-one-spoller");
              r.querySelectorAll("._slide").length ||
                (s && !n.classList.contains("_spoller-active") && l(r),
                n.classList.toggle("_spoller-active"),
                ((t, e = 500) => {
                  t.hidden ? i(t, e) : o(t, e);
                })(n.nextElementSibling, 500)),
                t.preventDefault();
            }
          }
          function l(t) {
            const e = t.querySelector("[data-spoller]._spoller-active");
            e &&
              (e.classList.remove("_spoller-active"),
              o(e.nextElementSibling, 500));
          }
          n &&
            n.length &&
            n.forEach((t) => {
              t.matchMedia.addEventListener("change", function () {
                r(t.itemsArray, t.matchMedia);
              }),
                r(t.itemsArray, t.matchMedia);
            });
        }
      })(),
      (function () {
        const t = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        t.length &&
          t.forEach((t) => {
            t.dataset.placeholder = t.placeholder;
          }),
          document.body.addEventListener("focusin", function (t) {
            const e = t.target;
            ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
              (e.dataset.placeholder && (e.placeholder = ""),
              e.classList.add("_form-focus"),
              e.parentElement.classList.add("_form-focus"),
              p.removeError(e));
          }),
          document.body.addEventListener("focusout", function (t) {
            const e = t.target;
            ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
              (e.dataset.placeholder && (e.placeholder = e.dataset.placeholder),
              e.classList.remove("_form-focus"),
              e.parentElement.classList.remove("_form-focus"),
              e.hasAttribute("data-validate") && p.validateInput(e));
          }),
          document.body.addEventListener("blur", function (t) {
            const e = t.target;
            ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
              (e.dataset.placeholder && (e.placeholder = e.dataset.placeholder),
              e.classList.remove("_form-focus"),
              e.parentElement.classList.remove("_form-focus"),
              e.hasAttribute("data-validate") && p.validateInput(e));
          });
      })(),
      (function (e) {
        t.popup && t.popup.open("some");
        const n = document.forms;
        if (n.length)
          for (const t of n)
            t.addEventListener("submit", function (t) {
              o(t.target, t);
            }),
              t.addEventListener("reset", function (t) {
                const e = t.target;
                p.formClean(e);
              });
        async function o(t, n) {
          if (0 === (e ? p.getErrors(t) : 0)) {
            if (t.hasAttribute("data-ajax")) {
              n.preventDefault();
              const e = t.getAttribute("action")
                  ? t.getAttribute("action").trim()
                  : "#",
                o = t.getAttribute("method")
                  ? t.getAttribute("method").trim()
                  : "GET",
                r = new FormData(t);
              let s;
              if (
                (t.classList.add("_sending"),
                (s =
                  "GET" === o
                    ? await fetch(e, { method: o })
                    : await fetch(e, { method: o, body: r })),
                s.ok)
              ) {
                await s.json();
                t.classList.remove("_sending"), i(t);
              } else alert("Ошибка"), t.classList.remove("_sending");
            } else t.hasAttribute("data-dev") && (n.preventDefault(), i(t));
          } else {
            n.preventDefault();
            const e = t.querySelector("._form-error");
            e && t.hasAttribute("data-goto-error") && h(e, !0, 1e3);
          }
        }
        function i(e) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: e } })
          ),
            setTimeout(() => {
              if (t.popup) {
                const n = e.dataset.popupMessage;
                n && t.popup.open(n);
              }
            }, 0),
            p.formClean(e),
            c(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0);
  })();
})();
