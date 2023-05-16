/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */ !(function (e, t) {
  'use strict';
  typeof module === 'object' && typeof module.exports === 'object' ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error('jQuery requires a window with a document');
    return t(e)
  } : t(e)
}(typeof window !== 'undefined' ? window : this, function (C, e) {
  'use strict';
  var t = [];
  var E = C.document;
  var r = Object.getPrototypeOf;
  var s = t.slice;
  var g = t.concat;
  var u = t.push;
  var i = t.indexOf;
  var n = {};
  var o = n.toString;
  var v = n.hasOwnProperty;
  var a = v.toString;
  var l = a.call(Object);
  var y = {};
  var m = function (e) {
    return typeof e === 'function' && typeof e.nodeType !== 'number'
  };
  var x = function (e) {
    return e != null && e === e.window
  };
  var c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r;
    var i;
    var o = (n = n || E).createElement('script');
    if (o.text = e, t)
      for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o)
  }

  function w(e) {
    return e == null ? e + '' : typeof e === 'object' || typeof e === 'function' ? n[o.call(e)] || 'object' : typeof e
  }
  var f = '3.4.1';
  var k = function (e, t) {
    return new k.fn.init(e, t)
  };
  var p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function d(e) {
    var t = !!e && 'length' in e && e.length;
    var n = w(e);
    return !m(e) && !x(e) && (n === 'array' || t === 0 || typeof t === 'number' && t > 0 && t - 1 in e)
  }
  k.fn = k.prototype = {
    jquery: f,
    constructor: k,
    length: 0,
    toArray: function () {
      return s.call(this)
    },
    get: function (e) {
      return e == null ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function (e) {
      var t = k.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each: function (e) {
      return k.each(this, e)
    },
    map: function (n) {
      return this.pushStack(k.map(this, function (e, t) {
        return n.call(e, t, e)
      }))
    },
    slice: function () {
      return this.pushStack(s.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    eq: function (e) {
      var t = this.length;
      var n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, k.extend = k.fn.extend = function () {
    var e;
    var t;
    var n;
    var r;
    var i;
    var o;
    var a = arguments[0] || {};
    var s = 1;
    var u = arguments.length;
    var l = !1;
    for (typeof a === 'boolean' && (l = a, a = arguments[s] || {}, s++), typeof a === 'object' || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
      if ((e = arguments[s]) != null)
        for (t in e) r = e[t], t !== '__proto__' && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a
  }, k.extend({
    expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
    isReady: !0,
    error: function (e) {
      throw new Error(e)
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || o.call(e) !== '[object Object]') && (!(t = r(e)) || typeof (n = v.call(t, 'constructor') && t.constructor) === 'function' && a.call(n) === l)
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    globalEval: function (e, t) {
      b(e, {
        nonce: t && t.nonce
      })
    },
    each: function (e, t) {
      var n;
      var r = 0;
      if (d(e)) {
        for (n = e.length; r < n; r++)
          if (!1 === t.call(e[r], r, e[r])) break
      } else
        for (r in e)
          if (!1 === t.call(e[r], r, e[r])) break;
      return e
    },
    trim: function (e) {
      return e == null ? '' : (e + '').replace(p, '')
    },
    makeArray: function (e, t) {
      var n = t || [];
      return e != null && (d(Object(e)) ? k.merge(n, typeof e === 'string' ? [e] : e) : u.call(n, e)), n
    },
    inArray: function (e, t, n) {
      return t == null ? -1 : i.call(t, e, n)
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e
    },
    grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r
    },
    map: function (e, t, n) {
      var r;
      var i;
      var o = 0;
      var a = [];
      if (d(e))
        for (r = e.length; o < r; o++)(i = t(e[o], o, n)) != null && a.push(i);
      else
        for (o in e)(i = t(e[o], o, n)) != null && a.push(i);
      return g.apply([], a)
    },
    guid: 1,
    support: y
  }), typeof Symbol === 'function' && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
    n['[object ' + t + ']'] = t.toLowerCase()
  });
  var h = (function (n) {
    var e;
    var d;
    var b;
    var o;
    var i;
    var h;
    var f;
    var g;
    var w;
    var u;
    var l;
    var T;
    var C;
    var a;
    var E;
    var v;
    var s;
    var c;
    var y;
    var k = 'sizzle' + 1 * new Date();
    var m = n.document;
    var S = 0;
    var r = 0;
    var p = ue();
    var x = ue();
    var N = ue();
    var A = ue();
    var D = function (e, t) {
      return e === t && (l = !0), 0
    };
    var j = {}.hasOwnProperty;
    var t = [];
    var q = t.pop;
    var L = t.push;
    var H = t.push;
    var O = t.slice;
    var P = function (e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        if (e[n] === t) return n;
      return -1
    };
    var R = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped';
    var M = '[\\x20\\t\\r\\n\\f]';
    var I = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+';
    var W = '\\[' + M + '*(' + I + ')(?:' + M + '*([*^$|!~]?=)' + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + '))|)' + M + '*\\]';
    var $ = ':(' + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ')*)|.*)\\)|)';
    var F = new RegExp(M + '+', 'g');
    var B = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g');
    var _ = new RegExp('^' + M + '*,' + M + '*');
    var z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*');
    var U = new RegExp(M + '|>');
    var X = new RegExp($);
    var V = new RegExp('^' + I + '$');
    var G = {
      ID: new RegExp('^#(' + I + ')'),
      CLASS: new RegExp('^\\.(' + I + ')'),
      TAG: new RegExp('^(' + I + '|[*])'),
      ATTR: new RegExp('^' + W),
      PSEUDO: new RegExp('^' + $),
      CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M + '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)', 'i'),
      bool: new RegExp('^(?:' + R + ')$', 'i'),
      needsContext: new RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' + M + '*\\)|)(?=[^-]|$)', 'i')
    };
    var Y = /HTML$/i;
    var Q = /^(?:input|select|textarea|button)$/i;
    var J = /^h\d$/i;
    var K = /^[^{]+\{\s*\[native \w/;
    var Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
    var ee = /[+~]/;
    var te = new RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig');
    var ne = function (e, t, n) {
      var r = '0x' + t - 65536;
      return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
    };
    var re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
    var ie = function (e, t) {
      return t ? e === '\0' ? '\ufffd' : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ' : '\\' + e
    };
    var oe = function () {
      T()
    };
    var ae = be(function (e) {
      return !0 === e.disabled && e.nodeName.toLowerCase() === 'fieldset'
    }, {
      dir: 'parentNode',
      next: 'legend'
    });
    try {
      H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t))
        } : function (e, t) {
          var n = e.length;
          var r = 0;
          while (e[n++] = t[r++]);
          e.length = n - 1
        }
      }
    }

    function se(t, e, n, r) {
      var i;
      var o;
      var a;
      var s;
      var u;
      var l;
      var c;
      var f = e && e.ownerDocument;
      var p = e ? e.nodeType : 9;
      if (n = n || [], typeof t !== 'string' || !t || p !== 1 && p !== 9 && p !== 11) return n;
      if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
        if (p !== 11 && (u = Z.exec(t)))
          if (i = u[1]) {
            if (p === 9) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
          } if (d.qsa && !A[t + ' '] && (!v || !v.test(t)) && (p !== 1 || e.nodeName.toLowerCase() !== 'object')) {
          if (c = t, f = e, p === 1 && U.test(t)) {
            (s = e.getAttribute('id')) ? s = s.replace(re, ie): e.setAttribute('id', s = k), o = (l = h(t)).length;
            while (o--) l[o] = '#' + s + ' ' + xe(l[o]);
            c = l.join(','), f = ee.test(t) && ye(e.parentNode) || e
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n
          } catch (e) {
            A(t, !0)
          } finally {
            s === k && e.removeAttribute('id')
          }
        }
      }
      return g(t.replace(B, '$1'), e, n, r)
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + ' ') > b.cacheLength && delete e[r.shift()], e[t + ' '] = n
      }
    }

    function le(e) {
      return e[k] = !0, e
    }

    function ce(e) {
      var t = C.createElement('fieldset');
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function fe(e, t) {
      var n = e.split('|');
      var r = n.length;
      while (r--) b.attrHandle[n[r]] = t
    }

    function pe(e, t) {
      var n = t && e;
      var r = n && e.nodeType === 1 && t.nodeType === 1 && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n)
        while (n = n.nextSibling)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function de(t) {
      return function (e) {
        return e.nodeName.toLowerCase() === 'input' && e.type === t
      }
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return (t === 'input' || t === 'button') && e.type === n
      }
    }

    function ge(t) {
      return function (e) {
        return 'form' in e ? e.parentNode && !1 === e.disabled ? 'label' in e ? 'label' in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : 'label' in e && e.disabled === t
      }
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n;
          var r = a([], e.length, o);
          var i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
        })
      })
    }

    function ye(e) {
      return e && typeof e.getElementsByTagName !== 'undefined' && e
    }
    for (e in d = se.support = {}, i = se.isXML = function (e) {
        var t = e.namespaceURI;
        var n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || n && n.nodeName || 'HTML')
      }, T = se.setDocument = function (e) {
        var t;
        var n;
        var r = e ? e.ownerDocument || e : m;
        return r !== C && r.nodeType === 9 && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener('unload', oe, !1) : n.attachEvent && n.attachEvent('onunload', oe)), d.attributes = ce(function (e) {
          return e.className = 'i', !e.getAttribute('className')
        }), d.getElementsByTagName = ce(function (e) {
          return e.appendChild(C.createComment('')), !e.getElementsByTagName('*').length
        }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
          return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length
        }), d.getById ? (b.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            return e.getAttribute('id') === t
          }
        }, b.find.ID = function (e, t) {
          if (typeof t.getElementById !== 'undefined' && E) {
            var n = t.getElementById(e);
            return n ? [n] : []
          }
        }) : (b.filter.ID = function (e) {
          var n = e.replace(te, ne);
          return function (e) {
            var t = typeof e.getAttributeNode !== 'undefined' && e.getAttributeNode('id');
            return t && t.value === n
          }
        }, b.find.ID = function (e, t) {
          if (typeof t.getElementById !== 'undefined' && E) {
            var n;
            var r;
            var i;
            var o = t.getElementById(e);
            if (o) {
              if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
              i = t.getElementsByName(e), r = 0;
              while (o = i[r++])
                if ((n = o.getAttributeNode('id')) && n.value === e) return [o]
            }
            return []
          }
        }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
          return typeof t.getElementsByTagName !== 'undefined' ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
        } : function (e, t) {
          var n;
          var r = [];
          var i = 0;
          var o = t.getElementsByTagName(e);
          if (e === '*') {
            while (n = o[i++]) n.nodeType === 1 && r.push(n);
            return r
          }
          return o
        }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
          if (typeof t.getElementsByClassName !== 'undefined' && E) return t.getElementsByClassName(e)
        }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
          a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push('[*^$]=' + M + "*(?:''|\"\")"), e.querySelectorAll('[selected]').length || v.push('\\[' + M + '*(?:value|' + R + ')'), e.querySelectorAll('[id~=' + k + '-]').length || v.push('~='), e.querySelectorAll(':checked').length || v.push(':checked'), e.querySelectorAll('a#' + k + '+*').length || v.push('.#.+[+~]')
        }), ce(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = C.createElement('input');
          t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && v.push('name' + M + '*[*^$|!~]?='), e.querySelectorAll(':enabled').length !== 2 && v.push(':enabled', ':disabled'), a.appendChild(e).disabled = !0, e.querySelectorAll(':disabled').length !== 2 && v.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), v.push(',.*:')
        })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
          d.disconnectedMatch = c.call(e, '*'), c.call(e, "[s!='']:x"), s.push('!=', $)
        }), v = v.length && new RegExp(v.join('|')), s = s.length && new RegExp(s.join('|')), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
          var n = e.nodeType === 9 ? e.documentElement : e;
          var r = t && t.parentNode;
          return e === r || !(!r || r.nodeType !== 1 || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
        } : function (e, t) {
          if (t)
            while (t = t.parentNode)
              if (t === e) return !0;
          return !1
        }, D = t ? function (e, t) {
          if (e === t) return l = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
        } : function (e, t) {
          if (e === t) return l = !0, 0;
          var n;
          var r = 0;
          var i = e.parentNode;
          var o = t.parentNode;
          var a = [e];
          var s = [t];
          if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
          if (i === o) return pe(e, t);
          n = e;
          while (n = n.parentNode) a.unshift(n);
          n = t;
          while (n = n.parentNode) s.unshift(n);
          while (a[r] === s[r]) r++;
          return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
        }), C
      }, se.matches = function (e, t) {
        return se(e, null, null, t)
      }, se.matchesSelector = function (e, t) {
        if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + ' '] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
          var n = c.call(e, t);
          if (n || d.disconnectedMatch || e.document && e.document.nodeType !== 11) return n
        } catch (e) {
          A(t, !0)
        }
        return se(t, C, null, [e]).length > 0
      }, se.contains = function (e, t) {
        return (e.ownerDocument || e) !== C && T(e), y(e, t)
      }, se.attr = function (e, t) {
        (e.ownerDocument || e) !== C && T(e);
        var n = b.attrHandle[t.toLowerCase()];
        var r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
        return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }, se.escape = function (e) {
        return (e + '').replace(re, ie)
      }, se.error = function (e) {
        throw new Error('Syntax error, unrecognized expression: ' + e)
      }, se.uniqueSort = function (e) {
        var t;
        var n = [];
        var r = 0;
        var i = 0;
        if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
          while (t = e[i++]) t === e[i] && (r = n.push(i));
          while (r--) e.splice(n[r], 1)
        }
        return u = null, e
      }, o = se.getText = function (e) {
        var t;
        var n = '';
        var r = 0;
        var i = e.nodeType;
        if (i) {
          if (i === 1 || i === 9 || i === 11) {
            if (typeof e.textContent === 'string') return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
          } else if (i === 3 || i === 4) return e.nodeValue
        } else
          while (t = e[r++]) n += o(t);
        return n
      }, (b = se.selectors = {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          '>': {
            dir: 'parentNode',
            first: !0
          },
          ' ': {
            dir: 'parentNode'
          },
          '+': {
            dir: 'previousSibling',
            first: !0
          },
          '~': {
            dir: 'previousSibling'
          }
        },
        preFilter: {
          ATTR: function (e) {
            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne), e[2] === '~=' && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4)
          },
          CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === 'nth' ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === 'even' || e[3] === 'odd')), e[5] = +(e[7] + e[8] || e[3] === 'odd')) : e[3] && se.error(e[0]), e
          },
          PSEUDO: function (e) {
            var t;
            var n = !e[6] && e[2];
            return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return e === '*' ? function () {
              return !0
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function (e) {
            var t = p[e + ' '];
            return t || (t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) && p(e, function (e) {
              return t.test(typeof e.className === 'string' && e.className || typeof e.getAttribute !== 'undefined' && e.getAttribute('class') || '')
            })
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return t == null ? r === '!=' : !r || (t += '', r === '=' ? t === i : r === '!=' ? t !== i : r === '^=' ? i && t.indexOf(i) === 0 : r === '*=' ? i && t.indexOf(i) > -1 : r === '$=' ? i && t.slice(-i.length) === i : r === '~=' ? (' ' + t.replace(F, ' ') + ' ').indexOf(i) > -1 : r === '|=' && (t === i || t.slice(0, i.length + 1) === i + '-'))
            }
          },
          CHILD: function (h, e, t, g, v) {
            var y = h.slice(0, 3) !== 'nth';
            var m = h.slice(-4) !== 'last';
            var x = e === 'of-type';
            return g === 1 && v === 0 ? function (e) {
              return !!e.parentNode
            } : function (e, t, n) {
              var r;
              var i;
              var o;
              var a;
              var s;
              var u;
              var l = y !== m ? 'nextSibling' : 'previousSibling';
              var c = e.parentNode;
              var f = x && e.nodeName.toLowerCase();
              var p = !n && !x;
              var d = !1;
              if (c) {
                if (y) {
                  while (l) {
                    a = e;
                    while (a = a[l])
                      if (x ? a.nodeName.toLowerCase() === f : a.nodeType === 1) return !1;
                    u = l = h === 'only' && !u && 'nextSibling'
                  }
                  return !0
                }
                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                  d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];
                  while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                    if (a.nodeType === 1 && ++d && a === e) {
                      i[h] = [S, s, d];
                      break
                    }
                } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d)
                  while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                    if ((x ? a.nodeName.toLowerCase() === f : a.nodeType === 1) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
                return (d -= v) === g || d % g == 0 && d / g >= 0
              }
            }
          },
          PSEUDO: function (e, o) {
            var t;
            var a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error('unsupported pseudo: ' + e);
            return a[k] ? a(o) : a.length > 1 ? (t = [e, e, '', o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
              var n;
              var r = a(e, o);
              var i = r.length;
              while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
            }) : function (e) {
              return a(e, 0, t)
            }) : a
          }
        },
        pseudos: {
          not: le(function (e) {
            var r = [];
            var i = [];
            var s = f(e.replace(B, '$1'));
            return s[k] ? le(function (e, t, n, r) {
              var i;
              var o = s(e, null, r, []);
              var a = e.length;
              while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
            }) : function (e, t, n) {
              return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
            }
          }),
          has: le(function (t) {
            return function (e) {
              return se(t, e).length > 0
            }
          }),
          contains: le(function (t) {
            return t = t.replace(te, ne),
              function (e) {
                return (e.textContent || o(e)).indexOf(t) > -1
              }
          }),
          lang: le(function (n) {
            return V.test(n || '') || se.error('unsupported lang: ' + n), n = n.replace(te, ne).toLowerCase(),
              function (e) {
                var t;
                do {
                  if (t = E ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang')) return (t = t.toLowerCase()) === n || t.indexOf(n + '-') === 0
                } while ((e = e.parentNode) && e.nodeType === 1);
                return !1
              }
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id
          },
          root: function (e) {
            return e === a
          },
          focus: function (e) {
            return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return t === 'input' && !!e.checked || t === 'option' && !!e.selected
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function (e) {
            return !b.pseudos.empty(e)
          },
          header: function (e) {
            return J.test(e.nodeName)
          },
          input: function (e) {
            return Q.test(e.nodeName)
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return t === 'input' && e.type === 'button' || t === 'button'
          },
          text: function (e) {
            var t;
            return e.nodeName.toLowerCase() === 'input' && e.type === 'text' && ((t = e.getAttribute('type')) == null || t.toLowerCase() === 'text')
          },
          first: ve(function () {
            return [0]
          }),
          last: ve(function (e, t) {
            return [t - 1]
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; --r >= 0;) e.push(r);
            return e
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
            return e
          })
        }
      }).pseudos.nth = b.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) b.pseudos[e] = de(e);
    for (e in {
        submit: !0,
        reset: !0
      }) b.pseudos[e] = he(e);

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
      return r
    }

    function be(s, e, t) {
      var u = e.dir;
      var l = e.next;
      var c = l || u;
      var f = t && c === 'parentNode';
      var p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u])
          if (e.nodeType === 1 || f) return s(e, t, n);
        return !1
      } : function (e, t, n) {
        var r;
        var i;
        var o;
        var a = [S, p];
        if (n) {
          while (e = e[u])
            if ((e.nodeType === 1 || f) && s(e, t, n)) return !0
        } else
          while (e = e[u])
            if (e.nodeType === 1 || f)
              if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
              else {
                if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
                if ((i[c] = a)[2] = s(e, t, n)) return !0
              } return !1
      }
    }

    function we(i) {
      return i.length > 1 ? function (e, t, n) {
        var r = i.length;
        while (r--)
          if (!i[r](e, t, n)) return !1;
        return !0
      } : i[0]
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = t != null; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i;
        var o;
        var a;
        var s = [];
        var u = [];
        var l = t.length;
        var c = e || (function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
          return n
        }(h || '*', n.nodeType ? [n] : n, []));
        var f = !d || !e && h ? c : Te(c, s, d, n, r);
        var p = g ? y || (e ? d : l || v) ? [] : t : f;
        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;
          while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;
              while (o--)(a = p[o]) && i.push(f[o] = a);
              y(null, p = [], i, r)
            }
            o = p.length;
            while (o--)(a = p[o]) && (i = y ? P(e, a) : s[o]) > -1 && (e[i] = !(t[i] = a))
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
      })
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[' '], s = o ? 1 : 0, u = be(function (e) {
          return e === i
        }, a, !0), l = be(function (e) {
          return P(i, e) > -1
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r
        }]; s < r; s++)
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++)
              if (b.relative[e[n].type]) break;
            return Ce(s > 1 && we(c), s > 1 && xe(e.slice(0, s - 1).concat({
              value: e[s - 2].type === ' ' ? '*' : ''
            })).replace(B, '$1'), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
          }
          c.push(t)
        } return we(c)
    }
    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n;
      var r;
      var i;
      var o;
      var a;
      var s;
      var u;
      var l = x[e + ' '];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
            value: n,
            type: r[0].replace(B, ' ')
          }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break
      }
      return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
    }, f = se.compile = function (e, t) {
      var n;
      var v;
      var y;
      var m;
      var x;
      var r;
      var i = [];
      var o = [];
      var a = N[e + ' '];
      if (!a) {
        t || (t = h(e)), n = t.length;
        while (n--)(a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
        (a = N(e, (v = o, m = (y = i).length > 0, x = v.length > 0, r = function (e, t, n, r, i) {
          var o;
          var a;
          var s;
          var u = 0;
          var l = '0';
          var c = e && [];
          var f = [];
          var p = w;
          var d = e || x && b.find.TAG('*', i);
          var h = S += p == null ? 1 : Math.random() || 0.1;
          var g = d.length;
          for (i && (w = t === C || t || i); l !== g && (o = d[l]) != null; l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument === C || (T(o), n = !E);
              while (s = v[a++])
                if (s(o, t || C, n)) {
                  r.push(o);
                  break
                } i && (S = h)
            }
            m && ((o = !s && o) && u--, e && c.push(o))
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) s(c, f, t, n);
            if (e) {
              if (u > 0)
                while (l--) c[l] || f[l] || (f[l] = q.call(r));
              f = Te(f)
            }
            H.apply(r, f), i && !e && f.length > 0 && u + y.length > 1 && se.uniqueSort(r)
          }
          return i && (S = h, w = p), c
        }, m ? le(r) : r))).selector = e
      }
      return a
    }, g = se.select = function (e, t, n, r) {
      var i;
      var o;
      var a;
      var s;
      var u;
      var l = typeof e === 'function' && e;
      var c = !r && h(e = l.selector || e);
      if (n = n || [], c.length === 1) {
        if ((o = c[0] = c[0].slice(0)).length > 2 && (a = o[0]).type === 'ID' && t.nodeType === 9 && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        i = G.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break
          }
        }
      }
      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
    }, d.sortStable = k.split('').sort(D).join('') === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement('fieldset'))
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute('href') === '#'
    }) || fe('type|href|height|width', function (e, t, n) {
      if (!n) return e.getAttribute(t, t.toLowerCase() === 'type' ? 1 : 2)
    }), d.attributes && ce(function (e) {
      return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), e.firstChild.getAttribute('value') === ''
    }) || fe('value', function (e, t, n) {
      if (!n && e.nodeName.toLowerCase() === 'input') return e.defaultValue
    }), ce(function (e) {
      return e.getAttribute('disabled') == null
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), se
  }(C));
  k.find = h, k.expr = h.selectors, k.expr[':'] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
  var T = function (e, t, n) {
    var r = [];
    var i = void 0 !== n;
    while ((e = e[t]) && e.nodeType !== 9)
      if (e.nodeType === 1) {
        if (i && k(e).is(n)) break;
        r.push(e)
      } return r
  };
  var S = function (e, t) {
    for (var n = []; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
    return n
  };
  var N = k.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? k.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r
    }) : n.nodeType ? k.grep(e, function (e) {
      return e === n !== r
    }) : typeof n !== 'string' ? k.grep(e, function (e) {
      return i.call(n, e) > -1 !== r
    }) : k.filter(n, e, r)
  }
  k.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ':not(' + e + ')'), t.length === 1 && r.nodeType === 1 ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
      return e.nodeType === 1
    }))
  }, k.fn.extend({
    find: function (e) {
      var t;
      var n;
      var r = this.length;
      var i = this;
      if (typeof e !== 'string') return this.pushStack(k(e).filter(function () {
        for (t = 0; t < r; t++)
          if (k.contains(i[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
      return r > 1 ? k.uniqueSort(n) : n
    },
    filter: function (e) {
      return this.pushStack(j(this, e || [], !1))
    },
    not: function (e) {
      return this.pushStack(j(this, e || [], !0))
    },
    is: function (e) {
      return !!j(this, typeof e === 'string' && N.test(e) ? k(e) : e || [], !1).length
    }
  });
  var q;
  var L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || q, typeof e === 'string') {
      if (!(r = e[0] === '<' && e[e.length - 1] === '>' && e.length >= 3 ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t))
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this
      }
      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
  }).prototype = k.fn, q = k(E);
  var H = /^(?:parents|prev(?:Until|All))/;
  var O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function P(e, t) {
    while ((e = e[t]) && e.nodeType !== 1);
    return e
  }
  k.fn.extend({
    has: function (e) {
      var t = k(e, this);
      var n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++)
          if (k.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      var n;
      var r = 0;
      var i = this.length;
      var o = [];
      var a = typeof e !== 'string' && k(e);
      if (!N.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? a.index(n) > -1 : n.nodeType === 1 && k.find.matchesSelector(n, e))) {
              o.push(n);
              break
            } return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o)
    },
    index: function (e) {
      return e ? typeof e === 'string' ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
    },
    addBack: function (e) {
      return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    }
  }), k.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && t.nodeType !== 11 ? t : null
    },
    parents: function (e) {
      return T(e, 'parentNode')
    },
    parentsUntil: function (e, t, n) {
      return T(e, 'parentNode', n)
    },
    next: function (e) {
      return P(e, 'nextSibling')
    },
    prev: function (e) {
      return P(e, 'previousSibling')
    },
    nextAll: function (e) {
      return T(e, 'nextSibling')
    },
    prevAll: function (e) {
      return T(e, 'previousSibling')
    },
    nextUntil: function (e, t, n) {
      return T(e, 'nextSibling', n)
    },
    prevUntil: function (e, t, n) {
      return T(e, 'previousSibling', n)
    },
    siblings: function (e) {
      return S((e.parentNode || {}).firstChild, e)
    },
    children: function (e) {
      return S(e.firstChild)
    },
    contents: function (e) {
      return typeof e.contentDocument !== 'undefined' ? e.contentDocument : (A(e, 'template') && (e = e.content || e), k.merge([], e.childNodes))
    }
  }, function (r, i) {
    k.fn[r] = function (e, t) {
      var n = k.map(this, i, e);
      return r.slice(-5) !== 'Until' && (t = e), t && typeof t === 'string' && (n = k.filter(t, n)), this.length > 1 && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n)
    }
  });
  var R = /[^\x20\t\r\n\f]+/g;

  function M(e) {
    return e
  }

  function I(e) {
    throw e
  }

  function W(e, t, n, r) {
    var i;
    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  k.Callbacks = function (r) {
    var e, n;
    r = typeof r === 'string' ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
      n[t] = !0
    }), n) : k.extend({}, r);
    var i;
    var t;
    var o;
    var a;
    var s = [];
    var u = [];
    var l = -1;
    var c = function () {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();
        while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
      }
      r.memory || (t = !1), i = !1, a && (s = t ? [] : '')
    };
    var f = {
      add: function () {
        return s && (t && !i && (l = s.length - 1, u.push(t)), (function n(e) {
          k.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && w(t) !== 'string' && n(t)
          })
        }(arguments)), t && !i && c()), this
      },
      remove: function () {
        return k.each(arguments, function (e, t) {
          var n;
          while ((n = k.inArray(t, s, n)) > -1) s.splice(n, 1), n <= l && l--
        }), this
      },
      has: function (e) {
        return e ? k.inArray(e, s) > -1 : s.length > 0
      },
      empty: function () {
        return s && (s = []), this
      },
      disable: function () {
        return a = u = [], s = t = '', this
      },
      disabled: function () {
        return !s
      },
      lock: function () {
        return a = u = [], t || i || (s = t = ''), this
      },
      locked: function () {
        return !!a
      },
      fireWith: function (e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
      },
      fire: function () {
        return f.fireWith(this, arguments), this
      },
      fired: function () {
        return !!o
      }
    };
    return f
  }, k.extend({
    Deferred: function (e) {
      var o = [
        ['notify', 'progress', k.Callbacks('memory'), k.Callbacks('memory'), 2],
        ['resolve', 'done', k.Callbacks('once memory'), k.Callbacks('once memory'), 0, 'resolved'],
        ['reject', 'fail', k.Callbacks('once memory'), k.Callbacks('once memory'), 1, 'rejected']
      ];
      var i = 'pending';
      var a = {
        state: function () {
          return i
        },
        always: function () {
          return s.done(arguments).fail(arguments), this
        },
        catch: function (e) {
          return a.then(null, e)
        },
        pipe: function () {
          var i = arguments;
          return k.Deferred(function (r) {
            k.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + 'With'](this, n ? [e] : arguments)
              })
            }), i = null
          }).promise()
        },
        then: function (t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this;
              var r = arguments;
              var e = function () {
                var e, t;
                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError('Thenable self-resolution');
                  t = e && (typeof e === 'object' || typeof e === 'function') && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                }
              };
              var t = s ? e : function () {
                try {
                  e()
                } catch (e) {
                  k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r))
                }
              };
              i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
            }
          }
          return k.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I))
          }).promise()
        },
        promise: function (e) {
          return e != null ? k.extend(e, a) : a
        }
      };
      var s = {};
      return k.each(o, function (e, t) {
        var n = t[2];
        var r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + 'With'](this === s ? void 0 : this, arguments), this
        }, s[t[0] + 'With'] = n.fireWith
      }), a.promise(s), e && e.call(s, s), s
    },
    when: function (e) {
      var n = arguments.length;
      var t = n;
      var r = Array(t);
      var i = s.call(arguments);
      var o = k.Deferred();
      var a = function (t) {
        return function (e) {
          r[t] = this, i[t] = arguments.length > 1 ? s.call(arguments) : e, --n || o.resolveWith(r, i)
        }
      };
      if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), o.state() === 'pending' || m(i[t] && i[t].then))) return o.then();
      while (t--) W(i[t], a(t), o.reject);
      return o.promise()
    }
  });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  k.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && $.test(e.name) && C.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t)
  }, k.readyException = function (e) {
    C.setTimeout(function () {
      throw e
    })
  };
  var F = k.Deferred();

  function B() {
    E.removeEventListener('DOMContentLoaded', B), C.removeEventListener('load', B), k.ready()
  }
  k.fn.ready = function (e) {
    return F.then(e).catch(function (e) {
      k.readyException(e)
    }), this
  }, k.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && --k.readyWait > 0 || F.resolveWith(E, [k])
    }
  }), k.ready.then = F.then, E.readyState === 'complete' || E.readyState !== 'loading' && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener('DOMContentLoaded', B), C.addEventListener('load', B));
  var _ = function (e, t, n, r, i, o, a) {
    var s = 0;
    var u = e.length;
    var l = n == null;
    if (w(n) === 'object')
      for (s in i = !0, n) _(e, t, s, n[s], !0, o, a);
    else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
        return l.call(k(e), n)
      })), t))
      for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
  };
  var z = /^-ms-/;
  var U = /-([a-z])/g;

  function X(e, t) {
    return t.toUpperCase()
  }

  function V(e) {
    return e.replace(z, 'ms-').replace(U, X)
  }
  var G = function (e) {
    return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
  };

  function Y() {
    this.expando = k.expando + Y.uid++
  }
  Y.uid = 1, Y.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function (e, t, n) {
      var r;
      var i = this.cache(e);
      if (typeof t === 'string') i[V(t)] = n;
      else
        for (r in t) i[V(r)] = t[r];
      return i
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
    },
    access: function (e, t, n) {
      return void 0 === t || t && typeof t === 'string' && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function (e, t) {
      var n;
      var r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
          while (n--) delete r[t[n]]
        }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !k.isEmptyObject(t)
    }
  };
  var Q = new Y();
  var J = new Y();
  var K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
  var Z = /[A-Z]/g;

  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && e.nodeType === 1)
      if (r = 'data-' + t.replace(Z, '-$&').toLowerCase(), typeof (n = e.getAttribute(r)) === 'string') {
        try {
          n = (i = n) === 'true' || i !== 'false' && (i === 'null' ? null : i === +i + '' ? +i : K.test(i) ? JSON.parse(i) : i)
        } catch (e) {}
        J.set(e, t, n)
      } else n = void 0;
    return n
  }
  k.extend({
    hasData: function (e) {
      return J.hasData(e) || Q.hasData(e)
    },
    data: function (e, t, n) {
      return J.access(e, t, n)
    },
    removeData: function (e, t) {
      J.remove(e, t)
    },
    _data: function (e, t, n) {
      return Q.access(e, t, n)
    },
    _removeData: function (e, t) {
      Q.remove(e, t)
    }
  }), k.fn.extend({
    data: function (n, e) {
      var t;
      var r;
      var i;
      var o = this[0];
      var a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = J.get(o), o.nodeType === 1 && !Q.get(o, 'hasDataAttrs'))) {
          t = a.length;
          while (t--) a[t] && (r = a[t].name).indexOf('data-') === 0 && (r = V(r.slice(5)), ee(o, r, i[r]));
          Q.set(o, 'hasDataAttrs', !0)
        }
        return i
      }
      return typeof n === 'object' ? this.each(function () {
        J.set(this, n)
      }) : _(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
        this.each(function () {
          J.set(this, n, e)
        })
      }, null, e, arguments.length > 1, null, !0)
    },
    removeData: function (e) {
      return this.each(function () {
        J.remove(this, e)
      })
    }
  }), k.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = (t || 'fx') + 'queue', r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || []
    },
    dequeue: function (e, t) {
      t = t || 'fx';
      var n = k.queue(e, t);
      var r = n.length;
      var i = n.shift();
      var o = k._queueHooks(e, t);
      i === 'inprogress' && (i = n.shift(), r--), i && (t === 'fx' && n.unshift('inprogress'), delete o.stop, i.call(e, function () {
        k.dequeue(e, t)
      }, o)), !r && o && o.empty.fire()
    },
    _queueHooks: function (e, t) {
      var n = t + 'queueHooks';
      return Q.get(e, n) || Q.access(e, n, {
        empty: k.Callbacks('once memory').add(function () {
          Q.remove(e, [t + 'queue', n])
        })
      })
    }
  }), k.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return typeof t !== 'string' && (n = t, t = 'fx', e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = k.queue(this, t, n);
        k._queueHooks(this, t), t === 'fx' && e[0] !== 'inprogress' && k.dequeue(this, t)
      })
    },
    dequeue: function (e) {
      return this.each(function () {
        k.dequeue(this, e)
      })
    },
    clearQueue: function (e) {
      return this.queue(e || 'fx', [])
    },
    promise: function (e, t) {
      var n;
      var r = 1;
      var i = k.Deferred();
      var o = this;
      var a = this.length;
      var s = function () {
        --r || i.resolveWith(o, [o])
      };
      typeof e !== 'string' && (t = e, e = void 0), e = e || 'fx';
      while (a--)(n = Q.get(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t)
    }
  });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var ne = new RegExp('^(?:([+-])=|)(' + te + ')([a-z%]*)$', 'i');
  var re = ['Top', 'Right', 'Bottom', 'Left'];
  var ie = E.documentElement;
  var oe = function (e) {
    return k.contains(e.ownerDocument, e)
  };
  var ae = {
    composed: !0
  };
  ie.getRootNode && (oe = function (e) {
    return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
  });
  var se = function (e, t) {
    return (e = t || e).style.display === 'none' || e.style.display === '' && oe(e) && k.css(e, 'display') === 'none'
  };
  var ue = function (e, t, n, r) {
    var i;
    var o;
    var a = {};
    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
    for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
    return i
  };

  function le(e, t, n, r) {
    var i;
    var o;
    var a = 20;
    var s = r ? function () {
      return r.cur()
    } : function () {
      return k.css(e, t, '')
    };
    var u = s();
    var l = n && n[3] || (k.cssNumber[t] ? '' : 'px');
    var c = e.nodeType && (k.cssNumber[t] || l !== 'px' && +u) && ne.exec(k.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), c /= o;
      c *= 2, k.style(e, t, c + l), n = n || []
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
  }
  var ce = {};

  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? (n === 'none' && (l[c] = Q.get(r, 'display') || null, l[c] || (r.style.display = '')), r.style.display === '' && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, 'display'), o.parentNode.removeChild(o), u === 'none' && (u = 'block'), ce[s] = u)))) : n !== 'none' && (l[c] = 'none', Q.set(r, 'display', n)));
    for (c = 0; c < f; c++) l[c] != null && (e[c].style.display = l[c]);
    return e
  }
  k.fn.extend({
    show: function () {
      return fe(this, !0)
    },
    hide: function () {
      return fe(this)
    },
    toggle: function (e) {
      return typeof e === 'boolean' ? e ? this.show() : this.hide() : this.each(function () {
        se(this) ? k(this).show() : k(this).hide()
      })
    }
  });
  var pe = /^(?:checkbox|radio)$/i;
  var de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var he = /^$|^module$|\/(?:java|ecma)script/i;
  var ge = {
    option: [1, "<select multiple='multiple'>", '</select>'],
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', '']
  };

  function ve(e, t) {
    var n;
    return n = typeof e.getElementsByTagName !== 'undefined' ? e.getElementsByTagName(t || '*') : typeof e.querySelectorAll !== 'undefined' ? e.querySelectorAll(t || '*') : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], 'globalEval', !t || Q.get(t[n], 'globalEval'))
  }
  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
  var me;
  var xe;
  var be = /<|&#?\w+;/;

  function we(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
      if ((o = e[d]) || o === 0)
        if (w(o) === 'object') k.merge(p, o.nodeType ? [o] : o);
        else if (be.test(o)) {
      a = a || f.appendChild(t.createElement('div')), s = (de.exec(o) || ['', ''])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      k.merge(p, a.childNodes), (a = f.firstChild).textContent = ''
    } else p.push(t.createTextNode(o));
    f.textContent = '', d = 0;
    while (o = p[d++])
      if (r && k.inArray(o, r) > -1) i && i.push(o);
      else if (l = oe(o), a = ve(f.appendChild(o), 'script'), l && ye(a), n) {
      c = 0;
      while (o = a[c++]) he.test(o.type || '') && n.push(o)
    }
    return f
  }
  me = E.createDocumentFragment().appendChild(E.createElement('div')), (xe = E.createElement('input')).setAttribute('type', 'radio'), xe.setAttribute('checked', 'checked'), xe.setAttribute('name', 't'), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = '<textarea>x</textarea>', y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
  var Te = /^key/;
  var Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
  var Ee = /^([^.]*)(?:\.(.+)|)/;

  function ke() {
    return !0
  }

  function Se() {
    return !1
  }

  function Ne(e, t) {
    return e === (function () {
      try {
        return E.activeElement
      } catch (e) {}
    }()) == (t === 'focus')
  }

  function Ae(e, t, n, r, i, o) {
    var a, s;
    if (typeof t === 'object') {
      for (s in typeof n !== 'string' && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);
      return e
    }
    if (r == null && i == null ? (i = n, r = n = void 0) : i == null && (typeof n === 'string' ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
    else if (!i) return e;
    return o === 1 && (a = i, (i = function (e) {
      return k().off(e), a.apply(this, arguments)
    }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
      k.event.add(this, t, i, r, n)
    })
  }

  function De(e, i, o) {
    o ? (Q.set(e, i, !1), k.event.add(e, i, {
      namespace: !1,
      handler: function (e) {
        var t;
        var n;
        var r = Q.get(this, i);
        if (1 & e.isTrigger && this[i]) {
          if (r.length)(k.event.special[i] || {}).delegateType && e.stopPropagation();
          else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
        } else r.length && (Q.set(this, i, {
          value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation())
      }
    })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
  }
  k.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o;
      var a;
      var s;
      var u;
      var l;
      var c;
      var f;
      var p;
      var d;
      var h;
      var g;
      var v = Q.get(t);
      if (v) {
        n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
          return typeof k !== 'undefined' && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
        }), l = (e = (e || '').match(R) || ['']).length;
        while (l--) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || '').split('.').sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && k.expr.match.needsContext.test(i),
          namespace: h.join('.')
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0)
      }
    },
    remove: function (e, t, n, r, i) {
      var o;
      var a;
      var s;
      var u;
      var l;
      var c;
      var f;
      var p;
      var d;
      var h;
      var g;
      var v = Q.hasData(e) && Q.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || '').match(R) || ['']).length;
        while (l--)
          if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || '').split('.').sort(), d) {
            f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), a = o = p.length;
            while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && (r !== '**' || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
          } else
            for (d in u) k.event.remove(e, d + t[l], n, r, !0);
        k.isEmptyObject(u) && Q.remove(e, 'handle events')
      }
    },
    dispatch: function (e) {
      var t;
      var n;
      var r;
      var i;
      var o;
      var a;
      var s = k.event.fix(e);
      var u = new Array(arguments.length);
      var l = (Q.get(this, 'events') || {})[s.type] || [];
      var c = k.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        a = k.event.handlers.call(this, s, l), t = 0;
        while ((i = a[t++]) && !s.isPropagationStopped()) {
          s.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()))
        }
        return c.postDispatch && c.postDispatch.call(this, s), s.result
      }
    },
    handlers: function (e, t) {
      var n;
      var r;
      var i;
      var o;
      var a;
      var s = [];
      var u = t.delegateCount;
      var l = e.target;
      if (u && l.nodeType && !(e.type === 'click' && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (l.nodeType === 1 && (e.type !== 'click' || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + ' '] && (a[i] = r.needsContext ? k(i, this).index(l) > -1 : k.find(i, this, null, [l]).length), a[i] && o.push(r);
            o.length && s.push({
              elem: l,
              handlers: o
            })
          } return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s
    },
    addProp: function (t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent)
        } : function () {
          if (this.originalEvent) return this.originalEvent[t]
        },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          })
        }
      })
    },
    fix: function (e) {
      return e[k.expando] ? e : new k.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, 'input') && De(t, 'click', ke), !1
        },
        trigger: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, 'input') && De(t, 'click'), !0
        },
        _default: function (e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, 'input') && Q.get(t, 'click') || A(t, 'a')
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, k.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, k.Event = function (e, t) {
    if (!(this instanceof k.Event)) return new k.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
  }, k.Event.prototype = {
    constructor: k.Event,
    isDefaultPrevented: Se,
    isPropagationStopped: Se,
    isImmediatePropagationStopped: Se,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, k.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function (e) {
      var t = e.button;
      return e.which == null && Te.test(e.type) ? e.charCode != null ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, k.event.addProp), k.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (e, t) {
    k.event.special[e] = {
      setup: function () {
        return De(this, e, Ne), !1
      },
      trigger: function () {
        return De(this, e), !0
      },
      delegateType: t
    }
  }), k.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    pointerenter: 'pointerover',
    pointerleave: 'pointerout'
  }, function (e, i) {
    k.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function (e) {
        var t;
        var n = e.relatedTarget;
        var r = e.handleObj;
        return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
      }
    }
  }), k.fn.extend({
    on: function (e, t, n, r) {
      return Ae(this, e, t, n, r)
    },
    one: function (e, t, n, r) {
      return Ae(this, e, t, n, r, 1)
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler), this;
      if (typeof e === 'object') {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return !1 !== t && typeof t !== 'function' || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
        k.event.remove(this, e, n, t)
      })
    }
  });
  var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
  var qe = /<script|<style|<link/i;
  var Le = /checked\s*(?:[^=]|=\s*.checked.)/i;
  var He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Oe(e, t) {
    return A(e, 'table') && A(t.nodeType !== 11 ? t : t.firstChild, 'tr') && k(e).children('tbody')[0] || e
  }

  function Pe(e) {
    return e.type = (e.getAttribute('type') !== null) + '/' + e.type, e
  }

  function Re(e) {
    return (e.type || '').slice(0, 5) === 'true/' ? e.type = e.type.slice(5) : e.removeAttribute('type'), e
  }

  function Me(e, t) {
    var n, r, i, o, a, s, u, l;
    if (t.nodeType === 1) {
      if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events))
        for (i in delete a.handle, a.events = {}, l)
          for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
      J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u))
    }
  }

  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e;
    var t;
    var a;
    var s;
    var u;
    var l;
    var c = 0;
    var f = n.length;
    var p = f - 1;
    var d = r[0];
    var h = m(d);
    if (h || f > 1 && typeof d === 'string' && !y.checkClone && Le.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o)
    });
    if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, e.childNodes.length === 1 && (e = t), t || o)) {
      for (s = (a = k.map(ve(e, 'script'), Pe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, 'script'))), i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) u = a[c], he.test(u.type || '') && !Q.access(u, 'globalEval') && k.contains(l, u) && (u.src && (u.type || '').toLowerCase() !== 'module' ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute('nonce')
        }) : b(u.textContent.replace(He, ''), u, l))
    }
    return n
  }

  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0;
      (r = i[o]) != null; o++) n || r.nodeType !== 1 || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, 'script')), r.parentNode.removeChild(r));
    return e
  }
  k.extend({
    htmlPrefilter: function (e) {
      return e.replace(je, '<$1></$2>')
    },
    clone: function (e, t, n) {
      var r;
      var i;
      var o;
      var a;
      var s;
      var u;
      var l;
      var c = e.cloneNode(!0);
      var f = oe(e);
      if (!(y.noCloneChecked || e.nodeType !== 1 && e.nodeType !== 11 || k.isXMLDoc(e)))
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, (l = u.nodeName.toLowerCase()) === 'input' && pe.test(s.type) ? u.checked = s.checked : l !== 'input' && l !== 'textarea' || (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]);
        else Me(e, c);
      return (a = ve(c, 'script')).length > 0 && ye(a, !f && ve(e, 'script')), c
    },
    cleanData: function (e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (G(n)) {
          if (t = n[Q.expando]) {
            if (t.events)
              for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            n[Q.expando] = void 0
          }
          n[J.expando] && (n[J.expando] = void 0)
        }
    }
  }), k.fn.extend({
    detach: function (e) {
      return We(this, e, !0)
    },
    remove: function (e) {
      return We(this, e)
    },
    text: function (e) {
      return _(this, function (e) {
        return void 0 === e ? k.text(this) : this.empty().each(function () {
          this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9 || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function () {
      return Ie(this, arguments, function (e) {
        this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9 || Oe(this, e).appendChild(e)
      })
    },
    prepend: function () {
      return Ie(this, arguments, function (e) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var t = Oe(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function () {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function () {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function () {
      for (var e, t = 0;
        (e = this[t]) != null; t++) e.nodeType === 1 && (k.cleanData(ve(e, !1)), e.textContent = '');
      return this
    },
    clone: function (e, t) {
      return e = e != null && e, t = t == null ? e : t, this.map(function () {
        return k.clone(this, e, t)
      })
    },
    html: function (e) {
      return _(this, function (e) {
        var t = this[0] || {};
        var n = 0;
        var r = this.length;
        if (void 0 === e && t.nodeType === 1) return t.innerHTML;
        if (typeof e === 'string' && !qe.test(e) && !ge[(de.exec(e) || ['', ''])[1].toLowerCase()]) {
          e = k.htmlPrefilter(e);
          try {
            for (; n < r; n++)(t = this[n] || {}).nodeType === 1 && (k.cleanData(ve(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function () {
      var n = [];
      return Ie(this, arguments, function (e) {
        var t = this.parentNode;
        k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this))
      }, n)
    }
  }), k.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (e, a) {
    k.fn[e] = function (e) {
      for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
      return this.pushStack(n)
    }
  });
  var $e = new RegExp('^(' + te + ')(?!px)[a-z%]+$', 'i');
  var Fe = function (e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e)
  };
  var Be = new RegExp(re.join('|'), 'i');

  function _e(e, t, n) {
    var r;
    var i;
    var o;
    var a;
    var s = e.style;
    return (n = n || Fe(e)) && ((a = n.getPropertyValue(t) || n[t]) !== '' || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + '' : a
  }

  function ze(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }!(function () {
    function e() {
      if (u) {
        s.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0', u.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%', ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        n = e.top !== '1%', a = t(e.marginLeft) === 12, u.style.right = '60%', o = t(e.right) === 36, r = t(e.width) === 36, u.style.position = 'absolute', i = t(u.offsetWidth / 3) === 12, ie.removeChild(s), u = null
      }
    }

    function t(e) {
      return Math.round(parseFloat(e))
    }
    var n;
    var r;
    var i;
    var o;
    var a;
    var s = E.createElement('div');
    var u = E.createElement('div');
    u.style && (u.style.backgroundClip = 'content-box', u.cloneNode(!0).style.backgroundClip = '', y.clearCloneStyle = u.style.backgroundClip === 'content-box', k.extend(y, {
      boxSizingReliable: function () {
        return e(), r
      },
      pixelBoxStyles: function () {
        return e(), o
      },
      pixelPosition: function () {
        return e(), n
      },
      reliableMarginLeft: function () {
        return e(), a
      },
      scrollboxSize: function () {
        return e(), i
      }
    }))
  }());
  var Ue = ['Webkit', 'Moz', 'ms'];
  var Xe = E.createElement('div').style;
  var Ve = {};

  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return t || (e in Xe ? e : Ve[e] = (function (e) {
      var t = e[0].toUpperCase() + e.slice(1);
      var n = Ue.length;
      while (n--)
        if ((e = Ue[n] + t) in Xe) return e
    }(e)) || e)
  }
  var Ye = /^(none|table(?!-c[ea]).+)/;
  var Qe = /^--/;
  var Je = {
    position: 'absolute',
    visibility: 'hidden',
    display: 'block'
  };
  var Ke = {
    letterSpacing: '0',
    fontWeight: '400'
  };

  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t
  }

  function et(e, t, n, r, i, o) {
    var a = t === 'width' ? 1 : 0;
    var s = 0;
    var u = 0;
    if (n === (r ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2) n === 'margin' && (u += k.css(e, n + re[a], !0, i)), r ? (n === 'content' && (u -= k.css(e, 'padding' + re[a], !0, i)), n !== 'margin' && (u -= k.css(e, 'border' + re[a] + 'Width', !0, i))) : (u += k.css(e, 'padding' + re[a], !0, i), n !== 'padding' ? u += k.css(e, 'border' + re[a] + 'Width', !0, i) : s += k.css(e, 'border' + re[a] + 'Width', !0, i));
    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u
  }

  function tt(e, t, n) {
    var r = Fe(e);
    var i = (!y.boxSizingReliable() || n) && k.css(e, 'boxSizing', !1, r) === 'border-box';
    var o = i;
    var a = _e(e, t, r);
    var s = 'offset' + t[0].toUpperCase() + t.slice(1);
    if ($e.test(a)) {
      if (!n) return a;
      a = 'auto'
    }
    return (!y.boxSizingReliable() && i || a === 'auto' || !parseFloat(a) && k.css(e, 'display', !1, r) === 'inline') && e.getClientRects().length && (i = k.css(e, 'boxSizing', !1, r) === 'border-box', (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? 'border' : 'content'), o, r, a) + 'px'
  }

  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i)
  }
  k.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = _e(e, 'opacity');
            return n === '' ? '1' : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
        var i;
        var o;
        var a;
        var s = V(t);
        var u = Qe.test(t);
        var l = e.style;
        if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        (o = typeof n) === 'string' && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = 'number'), n != null && n == n && (o !== 'number' || u || (n += i && i[3] || (k.cssNumber[s] ? '' : 'px')), y.clearCloneStyle || n !== '' || t.indexOf('background') !== 0 || (l[t] = 'inherit'), a && 'set' in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
      }
    },
    css: function (e, t, n, r) {
      var i;
      var o;
      var a;
      var s = V(t);
      return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && 'get' in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), i === 'normal' && t in Ke && (i = Ke[t]), n === '' || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
    }
  }), k.each(['height', 'width'], function (e, u) {
    k.cssHooks[u] = {
      get: function (e, t, n) {
        if (t) return !Ye.test(k.css(e, 'display')) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
          return tt(e, u, n)
        })
      },
      set: function (e, t, n) {
        var r;
        var i = Fe(e);
        var o = !y.scrollboxSize() && i.position === 'absolute';
        var a = (o || n) && k.css(e, 'boxSizing', !1, i) === 'border-box';
        var s = n ? et(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e['offset' + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, 'border', !1, i) - 0.5)), s && (r = ne.exec(t)) && (r[3] || 'px') !== 'px' && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s)
      }
    }
  }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(_e(e, 'marginLeft')) || e.getBoundingClientRect().left - ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left
    })) + 'px'
  }), k.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (i, o) {
    k.cssHooks[i + o] = {
      expand: function (e) {
        for (var t = 0, n = {}, r = typeof e === 'string' ? e.split(' ') : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
        return n
      }
    }, i !== 'margin' && (k.cssHooks[i + o].set = Ze)
  }), k.fn.extend({
    css: function (e, t) {
      return _(this, function (e, t, n) {
        var r;
        var i;
        var o = {};
        var a = 0;
        if (Array.isArray(t)) {
          for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
          return o
        }
        return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
      }, e, t, arguments.length > 1)
    }
  }), ((k.Tween = nt).prototype = {
    constructor: nt,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? '' : 'px')
    },
    cur: function () {
      var e = nt.propHooks[this.prop];
      return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
    },
    run: function (e) {
      var t;
      var n = nt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
    }
  }).init.prototype = nt.prototype, (nt.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, '')) && t !== 'auto' ? t : 0
      },
      set: function (e) {
        k.fx.step[e.prop] ? k.fx.step[e.prop](e) : e.elem.nodeType !== 1 || !k.cssHooks[e.prop] && e.elem.style[Ge(e.prop)] == null ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }).scrollTop = nt.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, k.easing = {
    linear: function (e) {
      return e
    },
    swing: function (e) {
      return 0.5 - Math.cos(e * Math.PI) / 2
    },
    _default: 'swing'
  }, k.fx = nt.prototype.init, k.fx.step = {};
  var rt;
  var it;
  var ot;
  var at;
  var st = /^(?:toggle|show|hide)$/;
  var ut = /queueHooks$/;

  function lt() {
    it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick())
  }

  function ct() {
    return C.setTimeout(function () {
      rt = void 0
    }), rt = Date.now()
  }

  function ft(e, t) {
    var n;
    var r = 0;
    var i = {
      height: e
    };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i['margin' + (n = re[r])] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function pt(e, t, n) {
    for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners['*']), o = 0, a = i.length; o < a; o++)
      if (r = i[o].call(n, t, e)) return r
  }

  function dt(o, e, t) {
    var n;
    var a;
    var r = 0;
    var i = dt.prefilters.length;
    var s = k.Deferred().always(function () {
      delete u.elem
    });
    var u = function () {
      if (a) return !1;
      for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
    };
    var l = s.promise({
      elem: o,
      props: k.extend({}, e),
      opts: k.extend(!0, {
        specialEasing: {},
        easing: k.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: rt || ct(),
      duration: t.duration,
      tweens: [],
      createTween: function (e, t) {
        var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n
      },
      stop: function (e) {
        var t = 0;
        var n = e ? l.tweens.length : 0;
        if (a) return this;
        for (a = !0; t < n; t++) l.tweens[t].run(1);
        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
      }
    });
    var c = l.props;
    for (!(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && 'expand' in a)
            for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
          else t[r] = i
      }(c, l.opts.specialEasing)); r < i; r++)
      if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l
  }
  k.Animation = k.extend(dt, {
    tweeners: {
      '*': [function (e, t) {
        var n = this.createTween(e, t);
        return le(n.elem, e, ne.exec(t), n), n
      }]
    },
    tweener: function (e, t) {
      m(e) ? (t = e, e = ['*']) : e = e.match(R);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
    },
    prefilters: [function (e, t, n) {
      var r;
      var i;
      var o;
      var a;
      var s;
      var u;
      var l;
      var c;
      var f = 'width' in t || 'height' in t;
      var p = this;
      var d = {};
      var h = e.style;
      var g = e.nodeType && se(e);
      var v = Q.get(e, 'fxshow');
      for (r in n.queue || ((a = k._queueHooks(e, 'fx')).unqueued == null && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
          a.unqueued || s()
        }), a.unqueued++, p.always(function () {
          p.always(function () {
            a.unqueued--, k.queue(e, 'fx').length || a.empty.fire()
          })
        })), t)
        if (i = t[r], st.test(i)) {
          if (delete t[r], o = o || i === 'toggle', i === (g ? 'hide' : 'show')) {
            if (i !== 'show' || !v || void 0 === v[r]) continue;
            g = !0
          }
          d[r] = v && v[r] || k.style(e, r)
        } if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
        for (r in f && e.nodeType === 1 && (n.overflow = [h.overflow, h.overflowX, h.overflowY], (l = v && v.display) == null && (l = Q.get(e, 'display')), (c = k.css(e, 'display')) === 'none' && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, 'display'), fe([e]))), (c === 'inline' || c === 'inline-block' && l != null) && k.css(e, 'float') === 'none' && (u || (p.done(function () {
            h.display = l
          }), l == null && (c = h.display, l = c === 'none' ? '' : c)), h.display = 'inline-block')), n.overflow && (h.overflow = 'hidden', p.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
          })), u = !1, d) u || (v ? 'hidden' in v && (g = v.hidden) : v = Q.access(e, 'fxshow', {
          display: l
        }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
          for (r in g || fe([e]), Q.remove(e, 'fxshow'), d) k.style(e, r, d[r])
        })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
    }],
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
    }
  }), k.speed = function (e, t, n) {
    var r = e && typeof e === 'object' ? k.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return k.fx.off ? r.duration = 0 : typeof r.duration !== 'number' && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), r.queue != null && !0 !== r.queue || (r.queue = 'fx'), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
    }, r
  }, k.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(se).css('opacity', 0).show().end().animate({
        opacity: t
      }, e, n, r)
    },
    animate: function (t, e, n, r) {
      var i = k.isEmptyObject(t);
      var o = k.speed(e, n, r);
      var a = function () {
        var e = dt(this, k.extend({}, t), o);
        (i || Q.get(this, 'finish')) && e.stop(!0)
      };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
    },
    stop: function (i, e, o) {
      var a = function (e) {
        var t = e.stop;
        delete e.stop, t(o)
      };
      return typeof i !== 'string' && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || 'fx', []), this.each(function () {
        var e = !0;
        var t = i != null && i + 'queueHooks';
        var n = k.timers;
        var r = Q.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);
        else
          for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
        for (t = n.length; t--;) n[t].elem !== this || i != null && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || k.dequeue(this, i)
      })
    },
    finish: function (a) {
      return !1 !== a && (a = a || 'fx'), this.each(function () {
        var e;
        var t = Q.get(this);
        var n = t[a + 'queue'];
        var r = t[a + 'queueHooks'];
        var i = k.timers;
        var o = n ? n.length : 0;
        for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish
      })
    }
  }), k.each(['toggle', 'show', 'hide'], function (e, r) {
    var i = k.fn[r];
    k.fn[r] = function (e, t, n) {
      return e == null || typeof e === 'boolean' ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
    }
  }), k.each({
    slideDown: ft('show'),
    slideUp: ft('hide'),
    slideToggle: ft('toggle'),
    fadeIn: {
      opacity: 'show'
    },
    fadeOut: {
      opacity: 'hide'
    },
    fadeToggle: {
      opacity: 'toggle'
    }
  }, function (e, r) {
    k.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n)
    }
  }), k.timers = [], k.fx.tick = function () {
    var e;
    var t = 0;
    var n = k.timers;
    for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || k.fx.stop(), rt = void 0
  }, k.fx.timer = function (e) {
    k.timers.push(e), k.fx.start()
  }, k.fx.interval = 13, k.fx.start = function () {
    it || (it = !0, lt())
  }, k.fx.stop = function () {
    it = null
  }, k.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, k.fn.delay = function (r, e) {
    return r = k.fx && k.fx.speeds[r] || r, e = e || 'fx', this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);
      t.stop = function () {
        C.clearTimeout(n)
      }
    })
  }, ot = E.createElement('input'), at = E.createElement('select').appendChild(E.createElement('option')), ot.type = 'checkbox', y.checkOn = ot.value !== '', y.optSelected = at.selected, (ot = E.createElement('input')).value = 't', ot.type = 'radio', y.radioValue = ot.value === 't';
  var ht;
  var gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function (e, t) {
      return _(this, k.attr, e, t, arguments.length > 1)
    },
    removeAttr: function (e) {
      return this.each(function () {
        k.removeAttr(this, e)
      })
    }
  }), k.extend({
    attr: function (e, t, n) {
      var r;
      var i;
      var o = e.nodeType;
      if (o !== 3 && o !== 8 && o !== 2) return typeof e.getAttribute === 'undefined' ? k.prop(e, t, n) : (o === 1 && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? n === null ? void k.removeAttr(e, t) : i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ''), n) : i && 'get' in i && (r = i.get(e, t)) !== null ? r : (r = k.find.attr(e, t)) == null ? void 0 : r)
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!y.radioValue && t === 'radio' && A(e, 'input')) {
            var n = e.value;
            return e.setAttribute('type', t), n && (e.value = n), t
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n;
      var r = 0;
      var i = t && t.match(R);
      if (i && e.nodeType === 1)
        while (n = i[r++]) e.removeAttribute(n)
    }
  }), ht = {
    set: function (e, t, n) {
      return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = gt[t] || k.find.attr;
    gt[t] = function (e, t, n) {
      var r;
      var i;
      var o = t.toLowerCase();
      return n || (i = gt[o], gt[o] = r, r = a(e, t, n) != null ? o : null, gt[o] = i), r
    }
  });
  var vt = /^(?:input|select|textarea|button)$/i;
  var yt = /^(?:a|area)$/i;

  function mt(e) {
    return (e.match(R) || []).join(' ')
  }

  function xt(e) {
    return e.getAttribute && e.getAttribute('class') || ''
  }

  function bt(e) {
    return Array.isArray(e) ? e : typeof e === 'string' && e.match(R) || []
  }
  k.fn.extend({
    prop: function (e, t) {
      return _(this, k.prop, e, t, arguments.length > 1)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[k.propFix[e] || e]
      })
    }
  }), k.extend({
    prop: function (e, t, n) {
      var r;
      var i;
      var o = e.nodeType;
      if (o !== 3 && o !== 8 && o !== 2) return o === 1 && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && 'get' in i && (r = i.get(e, t)) !== null ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = k.find.attr(e, 'tabindex');
          return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      for: 'htmlFor',
      class: 'className'
    }
  }), y.optSelected || (k.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), k.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () {
    k.propFix[this.toLowerCase()] = this
  }), k.fn.extend({
    addClass: function (t) {
      var e;
      var n;
      var r;
      var i;
      var o;
      var a;
      var s;
      var u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).addClass(t.call(this, e, xt(this)))
      });
      if ((e = bt(t)).length)
        while (n = this[u++])
          if (i = xt(n), r = n.nodeType === 1 && ' ' + mt(i) + ' ') {
            a = 0;
            while (o = e[a++]) r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
            i !== (s = mt(r)) && n.setAttribute('class', s)
          } return this
    },
    removeClass: function (t) {
      var e;
      var n;
      var r;
      var i;
      var o;
      var a;
      var s;
      var u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).removeClass(t.call(this, e, xt(this)))
      });
      if (!arguments.length) return this.attr('class', '');
      if ((e = bt(t)).length)
        while (n = this[u++])
          if (i = xt(n), r = n.nodeType === 1 && ' ' + mt(i) + ' ') {
            a = 0;
            while (o = e[a++])
              while (r.indexOf(' ' + o + ' ') > -1) r = r.replace(' ' + o + ' ', ' ');
            i !== (s = mt(r)) && n.setAttribute('class', s)
          } return this
    },
    toggleClass: function (i, t) {
      var o = typeof i;
      var a = o === 'string' || Array.isArray(i);
      return typeof t === 'boolean' && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        k(this).toggleClass(i.call(this, e, xt(this), t), t)
      }) : this.each(function () {
        var e, t, n, r;
        if (a) {
          t = 0, n = k(this), r = bt(i);
          while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
        } else void 0 !== i && o !== 'boolean' || ((e = xt(this)) && Q.set(this, '__className__', e), this.setAttribute && this.setAttribute('class', e || !1 === i ? '' : Q.get(this, '__className__') || ''))
      })
    },
    hasClass: function (e) {
      var t;
      var n;
      var r = 0;
      t = ' ' + e + ' ';
      while (n = this[r++])
        if (n.nodeType === 1 && (' ' + mt(xt(n)) + ' ').indexOf(t) > -1) return !0;
      return !1
    }
  });
  var wt = /\r/g;
  k.fn.extend({
    val: function (n) {
      var r;
      var e;
      var i;
      var t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        this.nodeType === 1 && ((t = i ? n.call(this, e, k(this).val()) : n) == null ? t = '' : typeof t === 'number' ? t += '' : Array.isArray(t) && (t = k.map(t, function (e) {
          return e == null ? '' : e + ''
        })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && 'set' in r && void 0 !== r.set(this, t, 'value') || (this.value = t))
      })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && 'get' in r && void 0 !== (e = r.get(t, 'value')) ? e : typeof (e = t.value) === 'string' ? e.replace(wt, '') : e == null ? '' : e : void 0
    }
  }), k.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = k.find.attr(e, 'value');
          return t != null ? t : mt(k.text(e))
        }
      },
      select: {
        get: function (e) {
          var t;
          var n;
          var r;
          var i = e.options;
          var o = e.selectedIndex;
          var a = e.type === 'select-one';
          var s = a ? null : [];
          var u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++)
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))) {
              if (t = k(n).val(), a) return t;
              s.push(t)
            } return s
        },
        set: function (e, t) {
          var n;
          var r;
          var i = e.options;
          var o = k.makeArray(t);
          var a = i.length;
          while (a--)((r = i[a]).selected = k.inArray(k.valHooks.option.get(r), o) > -1) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), k.each(['radio', 'checkbox'], function () {
    k.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = k.inArray(k(e).val(), t) > -1
      }
    }, y.checkOn || (k.valHooks[this].get = function (e) {
      return e.getAttribute('value') === null ? 'on' : e.value
    })
  }), y.focusin = 'onfocusin' in C;
  var Tt = /^(?:focusinfocus|focusoutblur)$/;
  var Ct = function (e) {
    e.stopPropagation()
  };
  k.extend(k.event, {
    trigger: function (e, t, n, r) {
      var i;
      var o;
      var a;
      var s;
      var u;
      var l;
      var c;
      var f;
      var p = [n || E];
      var d = v.call(e, 'type') ? e.type : e;
      var h = v.call(e, 'namespace') ? e.namespace.split('.') : [];
      if (o = f = a = n = n || E, n.nodeType !== 3 && n.nodeType !== 8 && !Tt.test(d + k.event.triggered) && (d.indexOf('.') > -1 && (d = (h = d.split('.')).shift(), h.sort()), u = d.indexOf(':') < 0 && 'on' + d, (e = e[k.expando] ? e : new k.Event(d, typeof e === 'object' && e)).isTrigger = r ? 2 : 3, e.namespace = h.join('.'), e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, e.result = void 0, e.target || (e.target = n), t = t == null ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = i > 1 ? s : c.bindType || d, (l = (Q.get(o, 'events') || {})[e.type] && Q.get(o, 'handle')) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result
      }
    },
    simulate: function (e, t, n) {
      var r = k.extend(new k.Event(), n, {
        type: e,
        isSimulated: !0
      });
      k.event.trigger(r, null, t)
    }
  }), k.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        k.event.trigger(e, t, this)
      })
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return k.event.trigger(e, t, n, !0)
    }
  }), y.focusin || k.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (n, r) {
    var i = function (e) {
      k.event.simulate(r, e.target, k.event.fix(e))
    };
    k.event.special[r] = {
      setup: function () {
        var e = this.ownerDocument || this;
        var t = Q.access(e, r);
        t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1)
      },
      teardown: function () {
        var e = this.ownerDocument || this;
        var t = Q.access(e, r) - 1;
        t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r))
      }
    }
  });
  var Et = C.location;
  var kt = Date.now();
  var St = /\?/;
  k.parseXML = function (e) {
    var t;
    if (!e || typeof e !== 'string') return null;
    try {
      t = (new C.DOMParser()).parseFromString(e, 'text/xml')
    } catch (e) {
      t = void 0
    }
    return t && !t.getElementsByTagName('parsererror').length || k.error('Invalid XML: ' + e), t
  };
  var Nt = /\[\]$/;
  var At = /\r?\n/g;
  var Dt = /^(?:submit|button|image|reset|file)$/i;
  var jt = /^(?:input|select|textarea|keygen)/i;

  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) k.each(e, function (e, t) {
      r || Nt.test(n) ? i(n, t) : qt(n + '[' + (typeof t === 'object' && t != null ? e : '') + ']', t, r, i)
    });
    else if (r || w(e) !== 'object') i(n, e);
    else
      for (t in e) qt(n + '[' + t + ']', e[t], r, i)
  }
  k.param = function (e, t) {
    var n;
    var r = [];
    var i = function (e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(n == null ? '' : n)
    };
    if (e == null) return '';
    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
      i(this.name, this.value)
    });
    else
      for (n in e) qt(n, e[n], t, i);
    return r.join('&')
  }, k.fn.extend({
    serialize: function () {
      return k.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var e = k.prop(this, 'elements');
        return e ? k.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !k(this).is(':disabled') && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
      }).map(function (e, t) {
        var n = k(this).val();
        return n == null ? null : Array.isArray(n) ? k.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(At, '\r\n')
          }
        }) : {
          name: t.name,
          value: n.replace(At, '\r\n')
        }
      }).get()
    }
  });
  var Lt = /%20/g;
  var Ht = /#.*$/;
  var Ot = /([?&])_=[^&]*/;
  var Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm;
  var Rt = /^(?:GET|HEAD)$/;
  var Mt = /^\/\//;
  var It = {};
  var Wt = {};
  var $t = '*/'.concat('*');
  var Ft = E.createElement('a');

  function Bt(o) {
    return function (e, t) {
      typeof e !== 'string' && (t = e, e = '*');
      var n;
      var r = 0;
      var i = e.toLowerCase().match(R) || [];
      if (m(t))
        while (n = i[r++]) n[0] === '+' ? (n = n.slice(1) || '*', (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
    }
  }

  function _t(t, i, o, a) {
    var s = {};
    var u = t === Wt;

    function l(e) {
      var r;
      return s[e] = !0, k.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return typeof n !== 'string' || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
      }), r
    }
    return l(i.dataTypes[0]) || !s['*'] && l('*')
  }

  function zt(e, t) {
    var n;
    var r;
    var i = k.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && k.extend(!0, e, r), e
  }
  Ft.href = Et.href, k.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: 'GET',
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': $t,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': JSON.parse,
        'text xml': k.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
    },
    ajaxPrefilter: Bt(It),
    ajaxTransport: Bt(Wt),
    ajax: function (e, t) {
      typeof e === 'object' && (t = e, e = void 0), t = t || {};
      var c;
      var f;
      var p;
      var n;
      var d;
      var r;
      var h;
      var g;
      var i;
      var o;
      var v = k.ajaxSetup({}, t);
      var y = v.context || v;
      var m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event;
      var x = k.Deferred();
      var b = k.Callbacks('once memory');
      var w = v.statusCode || {};
      var a = {};
      var s = {};
      var u = 'canceled';
      var T = {
        readyState: 0,
        getResponseHeader: function (e) {
          var t;
          if (h) {
            if (!n) {
              n = {};
              while (t = Pt.exec(p)) n[t[1].toLowerCase() + ' '] = (n[t[1].toLowerCase() + ' '] || []).concat(t[2])
            }
            t = n[e.toLowerCase() + ' ']
          }
          return t == null ? null : t.join(', ')
        },
        getAllResponseHeaders: function () {
          return h ? p : null
        },
        setRequestHeader: function (e, t) {
          return h == null && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
        },
        overrideMimeType: function (e) {
          return h == null && (v.mimeType = e), this
        },
        statusCode: function (e) {
          var t;
          if (e)
            if (h) T.always(e[T.status]);
            else
              for (t in e) w[t] = [w[t], e[t]];
          return this
        },
        abort: function (e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this
        }
      };
      if (x.promise(T), v.url = ((e || v.url || Et.href) + '').replace(Mt, Et.protocol + '//'), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || '*').toLowerCase().match(R) || [''], v.crossDomain == null) {
        r = E.createElement('a');
        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + '//' + Ft.host != r.protocol + '//' + r.host
        } catch (e) {
          v.crossDomain = !0
        }
      }
      if (v.data && v.processData && typeof v.data !== 'string' && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;
      for (i in (g = k.event && v.global) && k.active++ == 0 && k.event.trigger('ajaxStart'), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ''), v.hasContent ? v.data && v.processData && (v.contentType || '').indexOf('application/x-www-form-urlencoded') === 0 && (v.data = v.data.replace(Lt, '+')) : (o = v.url.slice(f.length), v.data && (v.processData || typeof v.data === 'string') && (f += (St.test(f) ? '&' : '?') + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, '$1'), o = (St.test(f) ? '&' : '?') + '_=' + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader('If-Modified-Since', k.lastModified[f]), k.etag[f] && T.setRequestHeader('If-None-Match', k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader('Content-Type', v.contentType), T.setRequestHeader('Accept', v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + (v.dataTypes[0] !== '*' ? ', ' + $t + '; q=0.01' : '') : v.accepts['*']), v.headers) T.setRequestHeader(i, v.headers[i]);
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = 'abort', b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger('ajaxSend', [T, v]), h) return T;
        v.async && v.timeout > 0 && (d = C.setTimeout(function () {
          T.abort('timeout')
        }, v.timeout));
        try {
          h = !1, c.send(a, l)
        } catch (e) {
          if (h) throw e;
          l(-1, e)
        }
      } else l(-1, 'No Transport');

      function l(e, t, n, r) {
        var i;
        var o;
        var a;
        var s;
        var u;
        var l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || '', T.readyState = e > 0 ? 4 : 0, i = e >= 200 && e < 300 || e === 304, n && (s = (function (e, t, n) {
          var r;
          var i;
          var o;
          var a;
          var s = e.contents;
          var u = e.dataTypes;
          while (u[0] === '*') u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
          if (r)
            for (i in s)
              if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break
              } if (u[0] in n) o = u[0];
          else {
            for (i in n) {
              if (!u[0] || e.converters[i + ' ' + u[0]]) {
                o = i;
                break
              }
              a || (a = i)
            }
            o = o || a
          }
          if (o) return o !== u[0] && u.unshift(o), n[o]
        }(v, T, n))), s = (function (e, t, n, r) {
          var i;
          var o;
          var a;
          var s;
          var u;
          var l = {};
          var c = e.dataTypes.slice();
          if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
              if (o === '*') o = u;
              else if (u !== '*' && u !== o) {
            if (!(a = l[u + ' ' + o] || l['* ' + o]))
              for (i in l)
                if ((s = i.split(' '))[1] === o && (a = l[u + ' ' + s[0]] || l['* ' + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break
                } if (!0 !== a)
              if (a && e.throws) t = a(t);
              else try {
                t = a(t)
              } catch (e) {
                return {
                  state: 'parsererror',
                  error: a ? e : 'No conversion from ' + u + ' to ' + o
                }
              }
          }
          return {
            state: 'success',
            data: t
          }
        }(v, s, T, i)), i ? (v.ifModified && ((u = T.getResponseHeader('Last-Modified')) && (k.lastModified[f] = u), (u = T.getResponseHeader('etag')) && (k.etag[f] = u)), e === 204 || v.type === 'HEAD' ? l = 'nocontent' : e === 304 ? l = 'notmodified' : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = 'error', e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + '', i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger('ajaxComplete', [T, v]), --k.active || k.event.trigger('ajaxStop')))
      }
      return T
    },
    getJSON: function (e, t, n) {
      return k.get(e, t, n, 'json')
    },
    getScript: function (e, t) {
      return k.get(e, void 0, t, 'script')
    }
  }), k.each(['get', 'post'], function (e, i) {
    k[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, k.isPlainObject(e) && e))
    }
  }), k._evalUrl = function (e, t) {
    return k.ajax({
      url: e,
      type: 'GET',
      dataType: 'script',
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        'text script': function () {}
      },
      dataFilter: function (e) {
        k.globalEval(e, t)
      }
    })
  }, k.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e
      }).append(this)), this
    },
    wrapInner: function (n) {
      return m(n) ? this.each(function (e) {
        k(this).wrapInner(n.call(this, e))
      }) : this.each(function () {
        var e = k(this);
        var t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n)
      })
    },
    wrap: function (t) {
      var n = m(t);
      return this.each(function (e) {
        k(this).wrapAll(n ? t.call(this, e) : t)
      })
    },
    unwrap: function (e) {
      return this.parent(e).not('body').each(function () {
        k(this).replaceWith(this.childNodes)
      }), this
    }
  }), k.expr.pseudos.hidden = function (e) {
    return !k.expr.pseudos.visible(e)
  }, k.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, k.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest()
    } catch (e) {}
  };
  var Ut = {
    0: 200,
    1223: 204
  };
  var Xt = k.ajaxSettings.xhr();
  y.cors = !!Xt && 'withCredentials' in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) {
    var o, a;
    if (y.cors || Xt && !i.crossDomain) return {
      send: function (e, t) {
        var n;
        var r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
          for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e['X-Requested-With'] || (e['X-Requested-With'] = 'XMLHttpRequest'), e) r.setRequestHeader(n, e[n]);
        o = function (e) {
          return function () {
            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, e === 'abort' ? r.abort() : e === 'error' ? typeof r.status !== 'number' ? t(0, 'error') : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, (r.responseType || 'text') !== 'text' || typeof r.responseText !== 'string' ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()))
          }
        }, r.onload = o(), a = r.onerror = r.ontimeout = o('error'), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          r.readyState === 4 && C.setTimeout(function () {
            o && a()
          })
        }, o = o('abort');
        try {
          r.send(i.hasContent && i.data || null)
        } catch (e) {
          if (o) throw e
        }
      },
      abort: function () {
        o && o()
      }
    }
  }), k.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
  }), k.ajaxSetup({
    accepts: {
      script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      'text script': function (e) {
        return k.globalEval(e), e
      }
    }
  }), k.ajaxPrefilter('script', function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET')
  }), k.ajaxTransport('script', function (n) {
    var r, i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function (e, t) {
        r = k('<script>').attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on('load error', i = function (e) {
          r.remove(), i = null, e && t(e.type === 'error' ? 404 : 200, e.type)
        }), E.head.appendChild(r[0])
      },
      abort: function () {
        i && i()
      }
    }
  });
  var Vt;
  var Gt = [];
  var Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Gt.pop() || k.expando + '_' + kt++;
      return this[e] = !0, e
    }
  }), k.ajaxPrefilter('json jsonp', function (e, t, n) {
    var r;
    var i;
    var o;
    var a = !1 !== e.jsonp && (Yt.test(e.url) ? 'url' : typeof e.data === 'string' && (e.contentType || '').indexOf('application/x-www-form-urlencoded') === 0 && Yt.test(e.data) && 'data');
    if (a || e.dataTypes[0] === 'jsonp') return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, '$1' + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? '&' : '?') + e.jsonp + '=' + r), e.converters['script json'] = function () {
      return o || k.error(r + ' was not called'), o[0]
    }, e.dataTypes[0] = 'json', i = C[r], C[r] = function () {
      o = arguments
    }, n.always(function () {
      void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0
    }), 'script'
  }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>', Vt.childNodes.length === 2), k.parseHTML = function (e, t, n) {
    return typeof e !== 'string' ? [] : (typeof t === 'boolean' && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument('')).createElement('base')).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
    var r, i, o
  }, k.fn.load = function (e, t, n) {
    var r;
    var i;
    var o;
    var a = this;
    var s = e.indexOf(' ');
    return s > -1 && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && typeof t === 'object' && (i = 'POST'), a.length > 0 && k.ajax({
      url: e,
      type: i || 'GET',
      dataType: 'html',
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? k('<div>').append(k.parseHTML(e)).find(r) : e)
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e])
      })
    }), this
  }, k.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
    k.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), k.expr.pseudos.animated = function (t) {
    return k.grep(k.timers, function (e) {
      return t === e.elem
    }).length
  }, k.offset = {
    setOffset: function (e, t, n) {
      var r;
      var i;
      var o;
      var a;
      var s;
      var u;
      var l = k.css(e, 'position');
      var c = k(e);
      var f = {};
      l === 'static' && (e.style.position = 'relative'), s = c.offset(), o = k.css(e, 'top'), u = k.css(e, 'left'), (l === 'absolute' || l === 'fixed') && (o + u).indexOf('auto') > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), t.top != null && (f.top = t.top - s.top + a), t.left != null && (f.left = t.left - s.left + i), 'using' in t ? t.using.call(e, f) : c.css(f)
    }
  }, k.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        k.offset.setOffset(this, t, e)
      });
      var e;
      var n;
      var r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0
    },
    position: function () {
      if (this[0]) {
        var e;
        var t;
        var n;
        var r = this[0];
        var i = {
          top: 0,
          left: 0
        };
        if (k.css(r, 'position') === 'fixed') t = r.getBoundingClientRect();
        else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && k.css(e, 'position') === 'static') e = e.parentNode;
          e && e !== r && e.nodeType === 1 && ((i = k(e).offset()).top += k.css(e, 'borderTopWidth', !0), i.left += k.css(e, 'borderLeftWidth', !0))
        }
        return {
          top: t.top - i.top - k.css(r, 'marginTop', !0),
          left: t.left - i.left - k.css(r, 'marginLeft', !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && k.css(e, 'position') === 'static') e = e.offsetParent;
        return e || ie
      })
    }
  }), k.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (t, i) {
    var o = i === 'pageYOffset';
    k.fn[t] = function (e) {
      return _(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : e.nodeType === 9 && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
      }, t, e, arguments.length)
    }
  }), k.each(['top', 'left'], function (e, n) {
    k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
      if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + 'px' : t
    })
  }), k.each({
    Height: 'height',
    Width: 'width'
  }, function (a, s) {
    k.each({
      padding: 'inner' + a,
      content: s,
      '': 'outer' + a
    }, function (r, o) {
      k.fn[o] = function (e, t) {
        var n = arguments.length && (r || typeof e !== 'boolean');
        var i = r || (!0 === e || !0 === t ? 'margin' : 'border');
        return _(this, function (e, t, n) {
          var r;
          return x(e) ? o.indexOf('outer') === 0 ? e['inner' + a] : e.document.documentElement['client' + a] : e.nodeType === 9 ? (r = e.documentElement, Math.max(e.body['scroll' + a], r['scroll' + a], e.body['offset' + a], r['offset' + a], r['client' + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
        }, s, n ? e : void 0, n)
      }
    })
  }), k.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '), function (e, n) {
    k.fn[n] = function (e, t) {
      return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
    }
  }), k.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), k.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
      return this.off(e, null, t)
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function (e, t, n) {
      return arguments.length === 1 ? this.off(e, '**') : this.off(t, e || '**', n)
    }
  }), k.proxy = function (e, t) {
    var n, r, i;
    if (typeof t === 'string' && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
      return e.apply(t || this, r.concat(s.call(arguments)))
    }).guid = e.guid = e.guid || k.guid++, i
  }, k.holdReady = function (e) {
    e ? k.readyWait++ : k.ready(!0)
  }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
    var t = k.type(e);
    return (t === 'number' || t === 'string') && !isNaN(e - parseFloat(e))
  }, typeof define === 'function' && define.amd && define('jquery', [], function () {
    return k
  });
  var Qt = C.jQuery;
  var Jt = C.$;
  return k.noConflict = function (e) {
    return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k
  }, e || (C.jQuery = C.$ = k), k
}))

/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!(function (t, e) {
  typeof exports === 'object' && typeof module !== 'undefined' ? e(exports, require('jquery'), require('popper.js')) : typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, function (t, g, u) {
  'use strict';

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
  }

  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t
  }

  function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      var e = Object.keys(r);
      typeof Object.getOwnPropertySymbols === 'function' && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable
      }))), e.forEach(function (t) {
        var e, n, i;
        e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i
      })
    }
    return o
  }
  g = g && g.hasOwnProperty('default') ? g.default : g, u = u && u.hasOwnProperty('default') ? u.default : u;
  var e = 'transitionend';

  function n(t) {
    var e = this;
    var n = !1;
    return g(this).one(_.TRANSITION_END, function () {
      n = !0
    }), setTimeout(function () {
      n || _.triggerTransitionEnd(e)
    }, t), this
  }
  var _ = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function (t) {
      for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
      return t
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute('data-target');
      if (!e || e === '#') {
        var n = t.getAttribute('href');
        e = n && n !== '#' ? n.trim() : ''
      }
      try {
        return document.querySelector(e) ? e : null
      } catch (t) {
        return null
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var e = g(t).css('transition-duration');
      var n = g(t).css('transition-delay');
      var i = parseFloat(e);
      var o = parseFloat(n);
      return i || o ? (e = e.split(',')[0], n = n.split(',')[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
    },
    reflow: function (t) {
      return t.offsetHeight
    },
    triggerTransitionEnd: function (t) {
      g(t).trigger(e)
    },
    supportsTransitionEnd: function () {
      return Boolean(e)
    },
    isElement: function (t) {
      return (t[0] || t).nodeType
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i];
          var r = e[i];
          var s = r && _.isElement(r) ? 'element' : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
          if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
        } var a
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if (typeof t.getRootNode !== 'function') return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null
    }
  };
  g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = {
    bindType: e,
    delegateType: e,
    handle: function (t) {
      if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
    }
  };
  var o = 'alert';
  var r = 'bs.alert';
  var a = '.' + r;
  var c = g.fn[o];
  var h = {
    CLOSE: 'close' + a,
    CLOSED: 'closed' + a,
    CLICK_DATA_API: 'click' + a + '.data-api'
  };
  var f = 'alert';
  var d = 'fade';
  var m = 'show';
  var p = (function () {
    function i(t) {
      this._element = t
    }
    var t = i.prototype;
    return t.close = function (t) {
      var e = this._element;
      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
    }, t.dispose = function () {
      g.removeData(this._element, r), this._element = null
    }, t._getRootElement = function (t) {
      var e = _.getSelectorFromElement(t);
      var n = !1;
      return e && (n = document.querySelector(e)), n || (n = g(t).closest('.' + f)[0]), n
    }, t._triggerCloseEvent = function (t) {
      var e = g.Event(h.CLOSE);
      return g(t).trigger(e), e
    }, t._removeElement = function (e) {
      var n = this;
      if (g(e).removeClass(m), g(e).hasClass(d)) {
        var t = _.getTransitionDurationFromElement(e);
        g(e).one(_.TRANSITION_END, function (t) {
          return n._destroyElement(e, t)
        }).emulateTransitionEnd(t)
      } else this._destroyElement(e)
    }, t._destroyElement = function (t) {
      g(t).detach().trigger(h.CLOSED).remove()
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this);
        var e = t.data(r);
        e || (e = new i(this), t.data(r, e)), n === 'close' && e[n](this)
      })
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this)
      }
    }, s(i, null, [{
      key: 'VERSION',
      get: function () {
        return '4.3.1'
      }
    }]), i
  }());
  g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function () {
    return g.fn[o] = c, p._jQueryInterface
  };
  var v = 'button';
  var y = 'bs.button';
  var E = '.' + y;
  var C = '.data-api';
  var T = g.fn[v];
  var S = 'active';
  var b = 'btn';
  var I = 'focus';
  var D = '[data-toggle^="button"]';
  var w = '[data-toggle="buttons"]';
  var A = 'input:not([type="hidden"])';
  var N = '.active';
  var O = '.btn';
  var k = {
    CLICK_DATA_API: 'click' + E + C,
    FOCUS_BLUR_DATA_API: 'focus' + E + C + ' blur' + E + C
  };
  var P = (function () {
    function n(t) {
      this._element = t
    }
    var t = n.prototype;
    return t.toggle = function () {
      var t = !0;
      var e = !0;
      var n = g(this._element).closest(w)[0];
      if (n) {
        var i = this._element.querySelector(A);
        if (i) {
          if (i.type === 'radio')
            if (i.checked && this._element.classList.contains(S)) t = !1;
            else {
              var o = n.querySelector(N);
              o && g(o).removeClass(S)
            } if (t) {
            if (i.hasAttribute('disabled') || n.hasAttribute('disabled') || i.classList.contains('disabled') || n.classList.contains('disabled')) return;
            i.checked = !this._element.classList.contains(S), g(i).trigger('change')
          }
          i.focus(), e = !1
        }
      }
      e && this._element.setAttribute('aria-pressed', !this._element.classList.contains(S)), t && g(this._element).toggleClass(S)
    }, t.dispose = function () {
      g.removeData(this._element, y), this._element = null
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(y);
        t || (t = new n(this), g(this).data(y, t)), e === 'toggle' && t[e]()
      })
    }, s(n, null, [{
      key: 'VERSION',
      get: function () {
        return '4.3.1'
      }
    }]), n
  }());
  g(document).on(k.CLICK_DATA_API, D, function (t) {
    t.preventDefault();
    var e = t.target;
    g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), 'toggle')
  }).on(k.FOCUS_BLUR_DATA_API, D, function (t) {
    var e = g(t.target).closest(O)[0];
    g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
  }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function () {
    return g.fn[v] = T, P._jQueryInterface
  };
  var L = 'carousel';
  var j = 'bs.carousel';
  var H = '.' + j;
  var R = '.data-api';
  var x = g.fn[L];
  var F = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: 'hover',
    wrap: !0,
    touch: !0
  };
  var U = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var W = 'next';
  var q = 'prev';
  var M = 'left';
  var K = 'right';
  var Q = {
    SLIDE: 'slide' + H,
    SLID: 'slid' + H,
    KEYDOWN: 'keydown' + H,
    MOUSEENTER: 'mouseenter' + H,
    MOUSELEAVE: 'mouseleave' + H,
    TOUCHSTART: 'touchstart' + H,
    TOUCHMOVE: 'touchmove' + H,
    TOUCHEND: 'touchend' + H,
    POINTERDOWN: 'pointerdown' + H,
    POINTERUP: 'pointerup' + H,
    DRAG_START: 'dragstart' + H,
    LOAD_DATA_API: 'load' + H + R,
    CLICK_DATA_API: 'click' + H + R
  };
  var B = 'carousel';
  var V = 'active';
  var Y = 'slide';
  var z = 'carousel-item-right';
  var X = 'carousel-item-left';
  var $ = 'carousel-item-next';
  var G = 'carousel-item-prev';
  var J = 'pointer-event';
  var Z = '.active';
  var tt = '.active.carousel-item';
  var et = '.carousel-item';
  var nt = '.carousel-item img';
  var it = '.carousel-item-next, .carousel-item-prev';
  var ot = '.carousel-indicators';
  var rt = '[data-slide], [data-slide-to]';
  var st = '[data-ride="carousel"]';
  var at = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  var lt = (function () {
    function r(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
    }
    var t = r.prototype;
    return t.next = function () {
      this._isSliding || this._slide(W)
    }, t.nextWhenVisible = function () {
      !document.hidden && g(this._element).is(':visible') && g(this._element).css('visibility') !== 'hidden' && this.next()
    }, t.prev = function () {
      this._isSliding || this._slide(q)
    }, t.pause = function (t) {
      t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
    }, t.to = function (t) {
      var e = this;
      this._activeElement = this._element.querySelector(tt);
      var n = this._getItemIndex(this._activeElement);
      if (!(t > this._items.length - 1 || t < 0))
        if (this._isSliding) g(this._element).one(Q.SLID, function () {
          return e.to(t)
        });
        else {
          if (n === t) return this.pause(), void this.cycle();
          var i = n < t ? W : q;
          this._slide(i, this._items[t])
        }
    }, t.dispose = function () {
      g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
    }, t._getConfig = function (t) {
      return t = l({}, F, t), _.typeCheckConfig(L, t, U), t
    }, t._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);
      if (!(t <= 40)) {
        var e = t / this.touchDeltaX;
        e > 0 && this.prev(), e < 0 && this.next()
      }
    }, t._addEventListeners = function () {
      var e = this;
      this._config.keyboard && g(this._element).on(Q.KEYDOWN, function (t) {
        return e._keydown(t)
      }), this._config.pause === 'hover' && g(this._element).on(Q.MOUSEENTER, function (t) {
        return e.pause(t)
      }).on(Q.MOUSELEAVE, function (t) {
        return e.cycle(t)
      }), this._config.touch && this._addTouchEventListeners()
    }, t._addTouchEventListeners = function () {
      var n = this;
      if (this._touchSupported) {
        var e = function (t) {
          n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
        };
        var i = function (t) {
          n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), n._config.pause === 'hover' && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) {
            return n.cycle(t)
          }, 500 + n._config.interval))
        };
        g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) {
          return t.preventDefault()
        }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function (t) {
          return e(t)
        }), g(this._element).on(Q.POINTERUP, function (t) {
          return i(t)
        }), this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function (t) {
          return e(t)
        }), g(this._element).on(Q.TOUCHMOVE, function (t) {
          var e;
          (e = t).originalEvent.touches && e.originalEvent.touches.length > 1 ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
        }), g(this._element).on(Q.TOUCHEND, function (t) {
          return i(t)
        }))
      }
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;
        case 39:
          t.preventDefault(), this.next()
      }
    }, t._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], this._items.indexOf(t)
    }, t._getItemByDirection = function (t, e) {
      var n = t === W;
      var i = t === q;
      var o = this._getItemIndex(e);
      var r = this._items.length - 1;
      if ((i && o === 0 || n && o === r) && !this._config.wrap) return e;
      var s = (o + (t === q ? -1 : 1)) % this._items.length;
      return s === -1 ? this._items[this._items.length - 1] : this._items[s]
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t);
      var i = this._getItemIndex(this._element.querySelector(tt));
      var o = g.Event(Q.SLIDE, {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });
      return g(this._element).trigger(o), o
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
        g(e).removeClass(V);
        var n = this._indicatorsElement.children[this._getItemIndex(t)];
        n && g(n).addClass(V)
      }
    }, t._slide = function (t, e) {
      var n;
      var i;
      var o;
      var r = this;
      var s = this._element.querySelector(tt);
      var a = this._getItemIndex(s);
      var l = e || s && this._getItemByDirection(t, s);
      var c = this._getItemIndex(l);
      var h = Boolean(this._interval);
      if (o = t === W ? (n = X, i = $, M) : (n = z, i = G, K), l && g(l).hasClass(V)) this._isSliding = !1;
      else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
        var u = g.Event(Q.SLID, {
          relatedTarget: l,
          direction: o,
          from: a,
          to: c
        });
        if (g(this._element).hasClass(Y)) {
          g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
          var f = parseInt(l.getAttribute('data-interval'), 10);
          this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;
          var d = _.getTransitionDurationFromElement(s);
          g(s).one(_.TRANSITION_END, function () {
            g(l).removeClass(n + ' ' + i).addClass(V), g(s).removeClass(V + ' ' + i + ' ' + n), r._isSliding = !1, setTimeout(function () {
              return g(r._element).trigger(u)
            }, 0)
          }).emulateTransitionEnd(d)
        } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u);
        h && this.cycle()
      }
    }, r._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this).data(j);
        var e = l({}, F, g(this).data());
        typeof i === 'object' && (e = l({}, e, i));
        var n = typeof i === 'string' ? i : e.slide;
        if (t || (t = new r(this, e), g(this).data(j, t)), typeof i === 'number') t.to(i);
        else if (typeof n === 'string') {
          if (typeof t[n] === 'undefined') throw new TypeError('No method named "' + n + '"');
          t[n]()
        } else e.interval && e.ride && (t.pause(), t.cycle())
      })
    }, r._dataApiClickHandler = function (t) {
      var e = _.getSelectorFromElement(this);
      if (e) {
        var n = g(e)[0];
        if (n && g(n).hasClass(B)) {
          var i = l({}, g(n).data(), g(this).data());
          var o = this.getAttribute('data-slide-to');
          o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault()
        }
      }
    }, s(r, null, [{
      key: 'VERSION',
      get: function () {
        return '4.3.1'
      }
    }, {
      key: 'Default',
      get: function () {
        return F
      }
    }]), r
  }());
  g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
      var i = g(t[e]);
      lt._jQueryInterface.call(i, i.data())
    }
  }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function () {
    return g.fn[L] = x, lt._jQueryInterface
  };
  var ct = 'collapse';
  var ht = 'bs.collapse';
  var ut = '.' + ht;
  var ft = g.fn[ct];
  var dt = {
    toggle: !0,
    parent: ''
  };
  var gt = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var _t = {
    SHOW: 'show' + ut,
    SHOWN: 'shown' + ut,
    HIDE: 'hide' + ut,
    HIDDEN: 'hidden' + ut,
    CLICK_DATA_API: 'click' + ut + '.data-api'
  };
  var mt = 'show';
  var pt = 'collapse';
  var vt = 'collapsing';
  var yt = 'collapsed';
  var Et = 'width';
  var Ct = 'height';
  var Tt = '.show, .collapsing';
  var St = '[data-toggle="collapse"]';
  var bt = (function () {
    function a(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
      for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
        var r = n[i];
        var s = _.getSelectorFromElement(r);
        var a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
          return t === e
        });
        s !== null && a.length > 0 && (this._selector = s, this._triggerArray.push(r))
      }
      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
    }
    var t = a.prototype;
    return t.toggle = function () {
      g(this._element).hasClass(mt) ? this.hide() : this.show()
    }, t.show = function () {
      var t;
      var e;
      var n = this;
      if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) {
          return typeof n._config.parent === 'string' ? t.getAttribute('data-parent') === n._config.parent : t.classList.contains(pt)
        })).length === 0 && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
        var i = g.Event(_t.SHOW);
        if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call(g(t).not(this._selector), 'hide'), e || g(t).data(ht, null));
          var o = this._getDimension();
          g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr('aria-expanded', !0), this.setTransitioning(!0);
          var r = 'scroll' + (o[0].toUpperCase() + o.slice(1));
          var s = _.getTransitionDurationFromElement(this._element);
          g(this._element).one(_.TRANSITION_END, function () {
            g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = '', n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN)
          }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + 'px'
        }
      }
    }, t.hide = function () {
      var t = this;
      if (!this._isTransitioning && g(this._element).hasClass(mt)) {
        var e = g.Event(_t.HIDE);
        if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();
          this._element.style[n] = this._element.getBoundingClientRect()[n] + 'px', _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
          var i = this._triggerArray.length;
          if (i > 0)
            for (var o = 0; o < i; o++) {
              var r = this._triggerArray[o];
              var s = _.getSelectorFromElement(r);
              if (s !== null) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr('aria-expanded', !1)
            }
          this.setTransitioning(!0);
          this._element.style[n] = '';
          var a = _.getTransitionDurationFromElement(this._element);
          g(this._element).one(_.TRANSITION_END, function () {
            t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)
          }).emulateTransitionEnd(a)
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t
    }, t.dispose = function () {
      g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
    }, t._getConfig = function (t) {
      return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), t
    }, t._getDimension = function () {
      return g(this._element).hasClass(Et) ? Et : Ct
    }, t._getParent = function () {
      var t;
      var n = this;
      _.isElement(this._config.parent) ? (t = this._config.parent, typeof this._config.parent.jquery !== 'undefined' && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
      var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
      var i = [].slice.call(t.querySelectorAll(e));
      return g(i).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
      }), t
    }, t._addAriaAndCollapsedClass = function (t, e) {
      var n = g(t).hasClass(mt);
      e.length && g(e).toggleClass(yt, !n).attr('aria-expanded', n)
    }, a._getTargetFromElement = function (t) {
      var e = _.getSelectorFromElement(t);
      return e ? document.querySelector(e) : null
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this);
        var e = t.data(ht);
        var n = l({}, dt, t.data(), typeof i === 'object' && i ? i : {});
        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ht, e)), typeof i === 'string') {
          if (typeof e[i] === 'undefined') throw new TypeError('No method named "' + i + '"');
          e[i]()
        }
      })
    }, s(a, null, [{
      key: 'VERSION',
      get: function () {
        return '4.3.1'
      }
    }, {
      key: 'Default',
      get: function () {
        return dt
      }
    }]), a
  }());
  g(document).on(_t.CLICK_DATA_API, St, function (t) {
    t.currentTarget.tagName === 'A' && t.preventDefault();
    var n = g(this);
    var e = _.getSelectorFromElement(this);
    var i = [].slice.call(document.querySelectorAll(e));
    g(i).each(function () {
      var t = g(this);
      var e = t.data(ht) ? 'toggle' : n.data();
      bt._jQueryInterface.call(t, e)
    })
  }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function () {
    return g.fn[ct] = ft, bt._jQueryInterface
  };
  var It = 'dropdown';
  var Dt = 'bs.dropdown';
  var wt = '.' + Dt;
  var At = '.data-api';
  var Nt = g.fn[It];
  var Ot = new RegExp('38|40|27');
  var kt = {
    HIDE: 'hide' + wt,
    HIDDEN: 'hidden' + wt,
    SHOW: 'show' + wt,
    SHOWN: 'shown' + wt,
    CLICK: 'click' + wt,
    CLICK_DATA_API: 'click' + wt + At,
    KEYDOWN_DATA_API: 'keydown' + wt + At,
    KEYUP_DATA_API: 'keyup' + wt + At
  };
  var Pt = 'disabled';
  var Lt = 'show';
  var jt = 'dropup';
  var Ht = 'dropright';
  var Rt = 'dropleft';
  var xt = 'dropdown-menu-right';
  var Ft = 'position-static';
  var Ut = '[data-toggle="dropdown"]';
  var Wt = '.dropdown form';
  var qt = '.dropdown-menu';
  var Mt = '.navbar-nav';
  var Kt = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var Qt = 'top-start';
  var Bt = 'top-end';
  var Vt = 'bottom-start';
  var Yt = 'bottom-end';
  var zt = 'right-start';
  var Xt = 'left-start';
  var $t = {
    offset: 0,
    flip: !0,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic'
  };
  var Gt = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string'
  };
  var Jt = (function () {
    function c(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
    }
    var t = c.prototype;
    return t.toggle = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
        var t = c._getParentFromElement(this._element);
        var e = g(this._menu).hasClass(Lt);
        if (c._clearMenus(), !e) {
          var n = {
            relatedTarget: this._element
          };
          var i = g.Event(kt.SHOW, n);
          if (g(t).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if (typeof u === 'undefined') throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
              var o = this._element;
              this._config.reference === 'parent' ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, typeof this._config.reference.jquery !== 'undefined' && (o = this._config.reference[0])), this._config.boundary !== 'scrollParent' && g(t).addClass(Ft), this._popper = new u(o, this._menu, this._getPopperConfig())
            }
            'ontouchstart' in document.documentElement && g(t).closest(Mt).length === 0 && g(document.body).children().on('mouseover', null, g.noop), this._element.focus(), this._element.setAttribute('aria-expanded', !0), g(this._menu).toggleClass(Lt), g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n))
          }
        }
      }
    }, t.show = function () {
      if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
        var t = {
          relatedTarget: this._element
        };
        var e = g.Event(kt.SHOW, t);
        var n = c._getParentFromElement(this._element);
        g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)))
      }
    }, t.hide = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
        var t = {
          relatedTarget: this._element
        };
        var e = g.Event(kt.HIDE, t);
        var n = c._getParentFromElement(this._element);
        g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)))
      }
    }, t.dispose = function () {
      g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), this._popper !== null && this._popper.scheduleUpdate()
    }, t._addEventListeners = function () {
      var e = this;
      g(this._element).on(kt.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle()
      })
    }, t._getConfig = function (t) {
      return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), t
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = c._getParentFromElement(this._element);
        t && (this._menu = t.querySelector(qt))
      }
      return this._menu
    }, t._getPlacement = function () {
      var t = g(this._element.parentNode);
      var e = Vt;
      return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt), e
    }, t._detectNavbar = function () {
      return g(this._element).closest('.navbar').length > 0
    }, t._getOffset = function () {
      var e = this;
      var t = {};
      return typeof this._config.offset === 'function' ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
      } : t.offset = this._config.offset, t
    }, t._getPopperConfig = function () {
      var t = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return this._config.display === 'static' && (t.modifiers.applyStyle = {
        enabled: !1
      }), t
    }, c._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(Dt);
        if (t || (t = new c(this, typeof e === 'object' ? e : null), g(this).data(Dt, t)), typeof e === 'string') {
          if (typeof t[e] === 'undefined') throw new TypeError('No method named "' + e + '"');
          t[e]()
        }
      })
    }, c._clearMenus = function (t) {
      if (!t || t.which !== 3 && (t.type !== 'keyup' || t.which === 9))
        for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
          var o = c._getParentFromElement(e[n]);
          var r = g(e[n]).data(Dt);
          var s = {
            relatedTarget: e[n]
          };
          if (t && t.type === 'click' && (s.clickEvent = t), r) {
            var a = r._menu;
            if (g(o).hasClass(Lt) && !(t && (t.type === 'click' && /input|textarea/i.test(t.target.tagName) || t.type === 'keyup' && t.which === 9) && g.contains(o, t.target))) {
              var l = g.Event(kt.HIDE, s);
              g(o).trigger(l), l.isDefaultPrevented() || ('ontouchstart' in document.documentElement && g(document.body).children().off('mouseover', null, g.noop), e[n].setAttribute('aria-expanded', 'false'), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)))
            }
          }
        }
    }, c._getParentFromElement = function (t) {
      var e;
      var n = _.getSelectorFromElement(t);
      return n && (e = document.querySelector(n)), e || t.parentNode
    }, c._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(t.which === 32 || t.which !== 27 && (t.which !== 40 && t.which !== 38 || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) {
        var e = c._getParentFromElement(this);
        var n = g(e).hasClass(Lt);
        if (n && (!n || t.which !== 27 && t.which !== 32)) {
          var i = [].slice.call(e.querySelectorAll(Kt));
          if (i.length !== 0) {
            var o = i.indexOf(t.target);
            t.which === 38 && o > 0 && o--, t.which === 40 && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
          }
        } else {
          if (t.which === 27) {
            var r = e.querySelector(Ut);
            g(r).trigger('focus')
          }
          g(this).trigger('click')
        }
      }
    }, s(c, null, [{
      key: 'VERSION',
      get: function () {
        return '4.3.1'
      }
    }, {
      key: 'Default',
      get: function () {
        return $t
      }
    }, {
      key: 'DefaultType',
      get: function () {
        return Gt
      }
    }]), c
  }());
  g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + ' ' + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function (t) {
    t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), 'toggle')
  }).on(kt.CLICK_DATA_API, Wt, function (t) {
    t.stopPropagation()
  }), g.fn[It] = Jt._jQueryInterface, g.fn[It].Constructor = Jt, g.fn[It].noConflict = function () {
    return g.fn[It] = Nt, Jt._jQueryInterface
  };
  var Zt = 'modal';
  var te = 'bs.modal';
  var ee = '.' + te;
  var ne = g.fn[Zt];
  var ie = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  };
  var oe = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var re = {
    HIDE: 'hide' + ee,
    HIDDEN: 'hidden' + ee,
    SHOW: 'show' + ee,
    SHOWN: 'shown' + ee,
    FOCUSIN: 'focusin' + ee,
    RESIZE: 'resize' + ee,
    CLICK_DISMISS: 'click.dismiss' + ee,
    KEYDOWN_DISMISS: 'keydown.dismiss' + ee,
    MOUSEUP_DISMISS: 'mouseup.dismiss' + ee,
    MOUSEDOWN_DISMISS: 'mousedown.dismiss' + ee,
    CLICK_DATA_API: 'click' + ee + '.data-api'
  };
  var se = 'modal-dialog-scrollable';
  var ae = 'modal-scrollbar-measure';
  var le = 'modal-backdrop';
  var ce = 'modal-open';
  var he = 'fade';
  var ue = 'show';
  var fe = '.modal-dialog';
  var de = '.modal-body';
  var ge = '[data-toggle="modal"]';
  var _e = '[data-dismiss="modal"]';
  var me = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var pe = '.sticky-top';
  var ve = (function () {
    function o(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(fe), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
    }
    var t = o.prototype;
    return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t)
    }, t.show = function (t) {
      var e = this;
      if (!this._isShown && !this._isTransitioning) {
        g(this._element).hasClass(he) && (this._isTransitioning = !0);
        var n = g.Event(re.SHOW, {
          relatedTarget: t
        });
        g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, _e, function (t) {
          return e.hide(t)
        }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () {
          g(e._element).one(re.MOUSEUP_DISMISS, function (t) {
            g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
          })
        }), this._showBackdrop(function () {
          return e._showElement(t)
        }))
      }
    }, t.hide = function (t) {
      var e = this;
      if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
        var n = g.Event(re.HIDE);
        if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = g(this._element).hasClass(he);
          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(re.FOCUSIN), g(this._element).removeClass(ue), g(this._element).off(re.CLICK_DISMISS), g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) {
            var o = _.getTransitionDurationFromElement(this._element);
            g(this._element).one(_.TRANSITION_END, function (t) {
              return e._hideModal(t)
            }).emulateTransitionEnd(o)
          } else this._hideModal()
        }
      }
    }, t.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return g(t).off(ee)
      }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
    }, t.handleUpdate = function () {
      this._adjustDialog()
    }, t._getConfig = function (t) {
      return t = l({}, ie, t), _.typeCheckConfig(Zt, t, oe), t
    }, t._showElement = function (t) {
      var e = this;
      var n = g(this._element).hasClass(he);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = 'block', this._element.removeAttribute('aria-hidden'), this._element.setAttribute('aria-modal', !0), g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ue), this._config.focus && this._enforceFocus();
      var i = g.Event(re.SHOWN, {
        relatedTarget: t
      });
      var o = function () {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i)
      };
      if (n) {
        var r = _.getTransitionDurationFromElement(this._dialog);
        g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
      } else o()
    }, t._enforceFocus = function () {
      var e = this;
      g(document).off(re.FOCUSIN).on(re.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && g(e._element).has(t.target).length === 0 && e._element.focus()
      })
    }, t._setEscapeEvent = function () {
      var e = this;
      this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) {
        t.which === 27 && (t.preventDefault(), e.hide())
      }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS)
    }, t._setResizeEvent = function () {
      var e = this;
      this._isShown ? g(window).on(re.RESIZE, function (t) {
        return e.handleUpdate(t)
      }) : g(window).off(re.RESIZE)
    }, t._hideModal = function () {
      var t = this;
      this._element.style.display = 'none', this._element.setAttribute('aria-hidden', !0), this._element.removeAttribute('aria-modal'), this._isTransitioning = !1, this._showBackdrop(function () {
        g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN)
      })
    }, t._removeBackdrop = function () {
      this._backdrop && (g(this._backdrop).remove(), this._backdrop = null)
    }, t._showBackdrop = function (t) {
      var e = this;
      var n = g(this._element).hasClass(he) ? he : '';
      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement('div'), this._backdrop.className = le, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(re.CLICK_DISMISS, function (t) {
            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && (e._config.backdrop === 'static' ? e._element.focus() : e.hide())
          }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ue), !t) return;
        if (!n) return void t();
        var i = _.getTransitionDurationFromElement(this._backdrop);
        g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
      } else if (!this._isShown && this._backdrop) {
        g(this._backdrop).removeClass(ue);
        var o = function () {
          e._removeBackdrop(), t && t()
        };
        if (g(this._element).hasClass(he)) {
          var r = _.getTransitionDurationFromElement(this._backdrop);
          g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
        } else o()
      } else t && t()
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + 'px'), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + 'px')
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = '', this._element.style.paddingRight = ''
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
    }, t._setScrollbar = function () {
      var o = this;
      if (this._isBodyOverflowing) {
        var t = [].slice.call(document.querySelectorAll(me));
        var e = [].slice.call(document.querySelectorAll(pe));
        g(t).each(function (t, e) {
          var n = e.style.paddingRight;
          var i = g(e).css('padding-right');
          g(e).data('padding-right', n).css('padding-right', parseFloat(i) + o._scrollbarWidth + 'px')
        }), g(e).each(function (t, e) {
          var n = e.style.marginRight;
          var i = g(e).css('margin-right');
          g(e).data('margin-right', n).css('margin-right', parseFloat(i) - o._scrollbarWidth + 'px')
        });
        var n = document.body.style.paddingRight;
        var i = g(document.body).css('padding-right');
        g(document.body).data('padding-right', n).css('padding-right', parseFloat(i) + this._scrollbarWidth + 'px')
      }
      g(document.body).addClass(ce)
    }, t._resetScrollbar = function () {
      var t = [].slice.call(document.querySelectorAll(me));
      g(t).each(function (t, e) {
        var n = g(e).data('padding-right');
        g(e).removeData('padding-right'), e.style.paddingRight = n || ''
      });
      var e = [].slice.call(document.querySelectorAll('' + pe));
      g(e).each(function (t, e) {
        var n = g(e).data('margin-right');
        typeof n !== 'undefined' && g(e).css('margin-right', n).removeData('margin-right')
      });
      var n = g(document.body).data('padding-right');
      g(document.body).removeData('padding-right'), document.body.style.paddingRight = n || ''
    }, t._getScrollbarWidth = function () {
      var t = document.createElement('div');
      t.className = ae, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e
    }, o._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = g(this).data(te);
        var e = l({}, ie, g(this).data(), typeof n === 'object' && n ? n : {});
        if (t || (t = new o(this, e), g(this).data(te, t)), typeof n === 'string') {
          if (typeof t[n] === 'undefined') throw new TypeError('No method named "' + n + '"');
          t[n](i)
        } else e.show && t.show(i)
      })
    }, s(o, null, [{
      key: 'VERSION',
      get: function () {
        return '4.3.1'
      }
    }, {
      key: 'Default',
      get: function () {
        return ie
      }
    }]), o
  }());
  g(document).on(re.CLICK_DATA_API, ge, function (t) {
    var e;
    var n = this;
    var i = _.getSelectorFromElement(this);
    i && (e = document.querySelector(i));
    var o = g(e).data(te) ? 'toggle' : l({}, g(e).data(), g(this).data());
    this.tagName !== 'A' && this.tagName !== 'AREA' || t.preventDefault();
    var r = g(e).one(re.SHOW, function (t) {
      t.isDefaultPrevented() || r.one(re.HIDDEN, function () {
        g(n).is(':visible') && n.focus()
      })
    });
    ve._jQueryInterface.call(g(e), o, this)
  }), g.fn[Zt] = ve._jQueryInterface, g.fn[Zt].Constructor = ve, g.fn[Zt].noConflict = function () {
    return g.fn[Zt] = ne, ve._jQueryInterface
  };
  var ye = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var Ee = {
    '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  var Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  var Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function Se(t, s, e) {
    if (t.length === 0) return t;
    if (e && typeof e === 'function') return e(t);
    for (var n = (new window.DOMParser()).parseFromString(t, 'text/html'), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll('*')), i = function (t, e) {
        var n = l[t];
        var i = n.nodeName.toLowerCase();
        if (a.indexOf(n.nodeName.toLowerCase()) === -1) return n.parentNode.removeChild(n), 'continue';
        var o = [].slice.call(n.attributes);
        var r = [].concat(s['*'] || [], s[i] || []);
        o.forEach(function (t) {
          (function (t, e) {
            var n = t.nodeName.toLowerCase();
            if (e.indexOf(n) !== -1) return ye.indexOf(n) === -1 || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));
            for (var i = e.filter(function (t) {
                return t instanceof RegExp
              }), o = 0, r = i.length; o < r; o++)
              if (n.match(i[o])) return !0;
            return !1
          })(t, r) || n.removeAttribute(t.nodeName)
        })
      }, o = 0, r = l.length; o < r; o++) i(o);
    return n.body.innerHTML
  }
  var be = 'tooltip';
  var Ie = 'bs.tooltip';
  var De = '.' + Ie;
  var we = g.fn[be];
  var Ae = 'bs-tooltip';
  var Ne = new RegExp('(^|\\s)' + Ae + '\\S+', 'g');
  var Oe = ['sanitize', 'whiteList', 'sanitizeFn'];
  var ke = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object'
  };
  var Pe = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Le = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: !1,
    selector: !1,
    placement: 'top',
    offset: 0,
    container: !1,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: !0,
    sanitizeFn: null,
    whiteList: Ee
  };
  var je = 'show';
  var He = 'out';
  var Re = {
    HIDE: 'hide' + De,
    HIDDEN: 'hidden' + De,
    SHOW: 'show' + De,
    SHOWN: 'shown' + De,
    INSERTED: 'inserted' + De,
    CLICK: 'click' + De,
    FOCUSIN: 'focusin' + De,
    FOCUSOUT: 'focusout' + De,
    MOUSEENTER: 'mouseenter' + De,
    MOUSELEAVE: 'mouseleave' + De
  };
  var xe = 'fade';
  var Fe = 'show';
  var Ue = '.tooltip-inner';
  var We = '.arrow';
  var qe = 'hover';
  var Me = 'focus';
  var Ke = 'click';
  var Qe = 'manual';
  var Be = (function () {
    function i(t, e) {
      if (typeof u === 'undefined') throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = '', this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
    }
    var t = i.prototype;
    return t.enable = function () {
      this._isEnabled = !0
    }, t.disable = function () {
      this._isEnabled = !1
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled
    }, t.toggle = function (t) {
      if (this._isEnabled)
        if (t) {
          var e = this.constructor.DATA_KEY;
          var n = g(t.currentTarget).data(e);
          n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
        } else {
          if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);
          this._enter(null, this)
        }
    }, t.dispose = function () {
      clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest('.modal').off('hide.bs.modal'), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
    }, t.show = function () {
      var e = this;
      if (g(this.element).css('display') === 'none') throw new Error('Please use show on visible elements');
      var t = g.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        g(this.element).trigger(t);
        var n = _.findShadowRoot(this.element);
        var i = g.contains(n !== null ? n : this.element.ownerDocument.documentElement, this.element);
        if (t.isDefaultPrevented() || !i) return;
        var o = this.getTipElement();
        var r = _.getUID(this.constructor.NAME);
        o.setAttribute('id', r), this.element.setAttribute('aria-describedby', r), this.setContent(), this.config.animation && g(o).addClass(xe);
        var s = typeof this.config.placement === 'function' ? this.config.placement.call(this, o, this.element) : this.config.placement;
        var a = this._getAttachment(s);
        this.addAttachmentClass(a);
        var l = this._getContainer();
        g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, {
          placement: a,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: We
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function (t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
          },
          onUpdate: function (t) {
            return e._handlePopperPlacementChange(t)
          }
        }), g(o).addClass(Fe), 'ontouchstart' in document.documentElement && g(document.body).children().on('mouseover', null, g.noop);
        var c = function () {
          e.config.animation && e._fixTransition();
          var t = e._hoverState;
          e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e)
        };
        if (g(this.tip).hasClass(xe)) {
          var h = _.getTransitionDurationFromElement(this.tip);
          g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
        } else c()
      }
    }, t.hide = function (t) {
      var e = this;
      var n = this.getTipElement();
      var i = g.Event(this.constructor.Event.HIDE);
      var o = function () {
        e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute('aria-describedby'), g(e.element).trigger(e.constructor.Event.HIDDEN), e._popper !== null && e._popper.destroy(), t && t()
      };
      if (g(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (g(n).removeClass(Fe), 'ontouchstart' in document.documentElement && g(document.body).children().off('mouseover', null, g.noop), this._activeTrigger[Ke] = !1, this._activeTrigger[Me] = !1, this._activeTrigger[qe] = !1, g(this.tip).hasClass(xe)) {
          var r = _.getTransitionDurationFromElement(n);
          g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
        } else o();
        this._hoverState = ''
      }
    }, t.update = function () {
      this._popper !== null && this._popper.scheduleUpdate()
    }, t.isWithContent = function () {
      return Boolean(this.getTitle())
    }, t.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass(Ae + '-' + t)
    }, t.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip
    }, t.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + ' ' + Fe)
    }, t.setElementContent = function (t, e) {
      typeof e !== 'object' || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text())
    }, t.getTitle = function () {
      var t = this.element.getAttribute('data-original-title');
      return t || (t = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title), t
    }, t._getOffset = function () {
      var e = this;
      var t = {};
      return typeof this.config.offset === 'function' ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
      } : t.offset = this.config.offset, t
    }, t._getContainer = function () {
      return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
    }, t._getAttachment = function (t) {
      return Pe[t.toUpperCase()]
    }, t._setListeners = function () {
      var i = this;
      this.config.trigger.split(' ').forEach(function (t) {
        if (t === 'click') g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t)
        });
        else if (t !== Qe) {
          var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN;
          var n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          g(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t)
          }).on(n, i.config.selector, function (t) {
            return i._leave(t)
          })
        }
      }), g(this.element).closest('.modal').on('hide.bs.modal', function () {
        i.element && i.hide()
      }), this.config.selector ? this.config = l({}, this.config, {
        trigger: 'manual',
        selector: ''
      }) : this._fixTitle()
    }, t._fixTitle = function () {
      var t = typeof this.element.getAttribute('data-original-title');
      (this.element.getAttribute('title') || t !== 'string') && (this.element.setAttribute('data-original-title', this.element.getAttribute('title') || ''), this.element.setAttribute('title', ''))
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger[t.type === 'focusin' ? Me : qe] = !0), g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout), e._hoverState = je, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === je && e.show()
      }, e.config.delay.show) : e.show())
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger[t.type === 'focusout' ? Me : qe] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = He, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === He && e.hide()
      }, e.config.delay.hide) : e.hide())
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1
    }, t._getConfig = function (t) {
      var e = g(this.element).data();
      return Object.keys(e).forEach(function (t) {
        Oe.indexOf(t) !== -1 && delete e[t]
      }), typeof (t = l({}, this.constructor.Default, e, typeof t === 'object' && t ? t : {})).delay === 'number' && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), typeof t.title === 'number' && (t.title = t.title.toString()), typeof t.content === 'number' && (t.content = t.content.toString()), _.typeCheckConfig(be, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)), t
    }, t._getDelegateConfig = function () {
      var t = {};
      if (this.config)
        for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      return t
    }, t._cleanTipClass = function () {
      var t = g(this.getTipElement());
      var e = t.attr('class').match(Ne);
      e !== null && e.length && t.removeClass(e.join(''))
    }, t._handlePopperPlacementChange = function (t) {
      var e = t.instance;
      this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
    }, t._fixTransition = function () {
      var t = this.getTipElement();
      var e = this.config.animation;
      t.getAttribute('x-placement') === null && (g(t).removeClass(xe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ie);
        var e = typeof n === 'object' && n;
        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ie, t)), typeof n === 'string')) {
          if (typeof t[n] === 'undefined') throw new TypeError('No method named "' + n + '"');
          t[n]()
        }
      })
    }, s(i, null, [{
      key: 'VERSION',
      get: function () {
        return '4.3.1'
      }
    }, {
      key: 'Default',
      get: function () {
        return Le
      }
    }, {
      key: 'NAME',
      get: function () {
        return be
      }
    }, {
      key: 'DATA_KEY',
      get: function () {
        return Ie
      }
    }, {
      key: 'Event',
      get: function () {
        return Re
      }
    }, {
      key: 'EVENT_KEY',
      get: function () {
        return De
      }
    }, {
      key: 'DefaultType',
      get: function () {
        return ke
      }
    }]), i
  }());
  g.fn[be] = Be._jQueryInterface, g.fn[be].Constructor = Be, g.fn[be].noConflict = function () {
    return g.fn[be] = we, Be._jQueryInterface
  };
  var Ve = 'popover';
  var Ye = 'bs.popover';
  var ze = '.' + Ye;
  var Xe = g.fn[Ve];
  var $e = 'bs-popover';
  var Ge = new RegExp('(^|\\s)' + $e + '\\S+', 'g');
  var Je = l({}, Be.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  });
  var Ze = l({}, Be.DefaultType, {
    content: '(string|element|function)'
  });
  var tn = 'fade';
  var en = 'show';
  var nn = '.popover-header';
  var on = '.popover-body';
  var rn = {
    HIDE: 'hide' + ze,
    HIDDEN: 'hidden' + ze,
    SHOW: 'show' + ze,
    SHOWN: 'shown' + ze,
    INSERTED: 'inserted' + ze,
    CLICK: 'click' + ze,
    FOCUSIN: 'focusin' + ze,
    FOCUSOUT: 'focusout' + ze,
    MOUSEENTER: 'mouseenter' + ze,
    MOUSELEAVE: 'mouseleave' + ze
  };
  var sn = (function (t) {
    var e, n;

    function i() {
      return t.apply(this, arguments) || this
    }
    n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
    var o = i.prototype;
    return o.isWithContent = function () {
      return this.getTitle() || this._getContent()
    }, o.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass($e + '-' + t)
    }, o.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip
    }, o.setContent = function () {
      var t = g(this.getTipElement());
      this.setElementContent(t.find(nn), this.getTitle());
      var e = this._getContent();
      typeof e === 'function' && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + ' ' + en)
    }, o._getContent = function () {
      return this.element.getAttribute('data-content') || this.config.content
    }, o._cleanTipClass = function () {
      var t = g(this.getTipElement());
      var e = t.attr('class').match(Ge);
      e !== null && e.length > 0 && t.removeClass(e.join(''))
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ye);
        var e = typeof n === 'object' ? n : null;
        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ye, t)), typeof n === 'string')) {
          if (typeof t[n] === 'undefined') throw new TypeError('No method named "' + n + '"');
          t[n]()
        }
      })
    }, s(i, null, [{
      key: 'VERSION',
      get: function () {
        return '4.3.1'
      }
    }, {
      key: 'Default',
      get: function () {
        return Je
      }
    }, {
      key: 'NAME',
      get: function () {
        return Ve
      }
    }, {
      key: 'DATA_KEY',
      get: function () {
        return Ye
      }
    }, {
      key: 'Event',
      get: function () {
        return rn
      }
    }, {
      key: 'EVENT_KEY',
      get: function () {
        return ze
      }
    }, {
      key: 'DefaultType',
      get: function () {
        return Ze
      }
    }]), i
  }(Be));
  g.fn[Ve] = sn._jQueryInterface, g.fn[Ve].Constructor = sn, g.fn[Ve].noConflict = function () {
    return g.fn[Ve] = Xe, sn._jQueryInterface
  };
  var an = 'scrollspy';
  var ln = 'bs.scrollspy';
  var cn = '.' + ln;
  var hn = g.fn[an];
  var un = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var fn = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var dn = {
    ACTIVATE: 'activate' + cn,
    SCROLL: 'scroll' + cn,
    LOAD_DATA_API: 'load' + cn + '.data-api'
  };
  var gn = 'dropdown-item';
  var _n = 'active';
  var mn = '[data-spy="scroll"]';
  var pn = '.nav, .list-group';
  var vn = '.nav-link';
  var yn = '.nav-item';
  var En = '.list-group-item';
  var Cn = '.dropdown';
  var Tn = '.dropdown-item';
  var Sn = '.dropdown-toggle';
  var bn = 'offset';
  var In = 'position';
  var Dn = (function () {
    function n(t, e) {
      var n = this;
      this._element = t, this._scrollElement = t.tagName === 'BODY' ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + ' ' + vn + ',' + this._config.target + ' ' + En + ',' + this._config.target + ' ' + Tn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(dn.SCROLL, function (t) {
        return n._process(t)
      }), this.refresh(), this._process()
    }
    var t = n.prototype;
    return t.refresh = function () {
      var e = this;
      var t = this._scrollElement === this._scrollElement.window ? bn : In;
      var o = this._config.method === 'auto' ? t : this._config.method;
      var r = o === In ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
        var e;
        var n = _.getSelectorFromElement(t);
        if (n && (e = document.querySelector(n)), e) {
          var i = e.getBoundingClientRect();
          if (i.width || i.height) return [g(e)[o]().top + r, n]
        }
        return null
      }).filter(function (t) {
        return t
      }).sort(function (t, e) {
        return t[0] - e[0]
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1])
      })
    }, t.dispose = function () {
      g.removeData(this._element, ln), g(this._scrollElement).off(cn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
    }, t._getConfig = function (t) {
      if (typeof (t = l({}, un, typeof t === 'object' && t ? t : {})).target !== 'string') {
        var e = g(t.target).attr('id');
        e || (e = _.getUID(an), g(t.target).attr('id', e)), t.target = '#' + e
      }
      return _.typeCheckConfig(an, t, fn), t
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset;
      var e = this._getScrollHeight();
      var n = this._config.offset + e - this._getOffsetHeight();
      if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i)
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
        for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (typeof this._offsets[o + 1] === 'undefined' || t < this._offsets[o + 1]) && this._activate(this._targets[o])
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();
      var t = this._selector.split(',').map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
      });
      var n = g([].slice.call(document.querySelectorAll(t.join(','))));
      n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n)) : (n.addClass(_n), n.parents(pn).prev(vn + ', ' + En).addClass(_n), n.parents(pn).prev(yn).children(vn).addClass(_n)), g(this._scrollElement).trigger(dn.ACTIVATE, {
        relatedTarget: e
      })
    }, t._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
        return t.classList.contains(_n)
      }).forEach(function (t) {
        return t.classList.remove(_n)
      })
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(ln);
        if (t || (t = new n(this, typeof e === 'object' && e), g(this).data(ln, t)), typeof e === 'string') {
          if (typeof t[e] === 'undefined') throw new TypeError('No method named "' + e + '"');
          t[e]()
        }
      })
    }, s(n, null, [{
      key: 'VERSION',
      get: function () {
        return '4.3.1'
      }
    }, {
      key: 'Default',
      get: function () {
        return un
      }
    }]), n
  }());
  g(window).on(dn.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--;) {
      var n = g(t[e]);
      Dn._jQueryInterface.call(n, n.data())
    }
  }), g.fn[an] = Dn._jQueryInterface, g.fn[an].Constructor = Dn, g.fn[an].noConflict = function () {
    return g.fn[an] = hn, Dn._jQueryInterface
  };
  var wn = 'bs.tab';
  var An = '.' + wn;
  var Nn = g.fn.tab;
  var On = {
    HIDE: 'hide' + An,
    HIDDEN: 'hidden' + An,
    SHOW: 'show' + An,
    SHOWN: 'shown' + An,
    CLICK_DATA_API: 'click' + An + '.data-api'
  };
  var kn = 'dropdown-menu';
  var Pn = 'active';
  var Ln = 'disabled';
  var jn = 'fade';
  var Hn = 'show';
  var Rn = '.dropdown';
  var xn = '.nav, .list-group';
  var Fn = '.active';
  var Un = '> li > .active';
  var Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var qn = '.dropdown-toggle';
  var Mn = '> .dropdown-menu .active';
  var Kn = (function () {
    function i(t) {
      this._element = t
    }
    var t = i.prototype;
    return t.show = function () {
      var n = this;
      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) {
        var t;
        var i;
        var e = g(this._element).closest(xn)[0];
        var o = _.getSelectorFromElement(this._element);
        if (e) {
          var r = e.nodeName === 'UL' || e.nodeName === 'OL' ? Un : Fn;
          i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
        }
        var s = g.Event(On.HIDE, {
          relatedTarget: this._element
        });
        var a = g.Event(On.SHOW, {
          relatedTarget: i
        });
        if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          o && (t = document.querySelector(o)), this._activate(this._element, e);
          var l = function () {
            var t = g.Event(On.HIDDEN, {
              relatedTarget: n._element
            });
            var e = g.Event(On.SHOWN, {
              relatedTarget: i
            });
            g(i).trigger(t), g(n._element).trigger(e)
          };
          t ? this._activate(t, t.parentNode, l) : l()
        }
      }
    }, t.dispose = function () {
      g.removeData(this._element, wn), this._element = null
    }, t._activate = function (t, e, n) {
      var i = this;
      var o = (!e || e.nodeName !== 'UL' && e.nodeName !== 'OL' ? g(e).children(Fn) : g(e).find(Un))[0];
      var r = n && o && g(o).hasClass(jn);
      var s = function () {
        return i._transitionComplete(t, o, n)
      };
      if (o && r) {
        var a = _.getTransitionDurationFromElement(o);
        g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a)
      } else s()
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        g(e).removeClass(Pn);
        var i = g(e.parentNode).find(Mn)[0];
        i && g(i).removeClass(Pn), e.getAttribute('role') === 'tab' && e.setAttribute('aria-selected', !1)
      }
      if (g(t).addClass(Pn), t.getAttribute('role') === 'tab' && t.setAttribute('aria-selected', !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn)) {
        var o = g(t).closest(Rn)[0];
        if (o) {
          var r = [].slice.call(o.querySelectorAll(qn));
          g(r).addClass(Pn)
        }
        t.setAttribute('aria-expanded', !0)
      }
      n && n()
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this);
        var e = t.data(wn);
        if (e || (e = new i(this), t.data(wn, e)), typeof n === 'string') {
          if (typeof e[n] === 'undefined') throw new TypeError('No method named "' + n + '"');
          e[n]()
        }
      })
    }, s(i, null, [{
      key: 'VERSION',
      get: function () {
        return '4.3.1'
      }
    }]), i
  }());
  g(document).on(On.CLICK_DATA_API, Wn, function (t) {
    t.preventDefault(), Kn._jQueryInterface.call(g(this), 'show')
  }), g.fn.tab = Kn._jQueryInterface, g.fn.tab.Constructor = Kn, g.fn.tab.noConflict = function () {
    return g.fn.tab = Nn, Kn._jQueryInterface
  };
  var Qn = 'toast';
  var Bn = 'bs.toast';
  var Vn = '.' + Bn;
  var Yn = g.fn[Qn];
  var zn = {
    CLICK_DISMISS: 'click.dismiss' + Vn,
    HIDE: 'hide' + Vn,
    HIDDEN: 'hidden' + Vn,
    SHOW: 'show' + Vn,
    SHOWN: 'shown' + Vn
  };
  var Xn = 'fade';
  var $n = 'hide';
  var Gn = 'show';
  var Jn = 'showing';
  var Zn = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var ti = {
    animation: !0,
    autohide: !0,
    delay: 500
  };
  var ei = '[data-dismiss="toast"]';
  var ni = (function () {
    function i(t, e) {
      this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
    }
    var t = i.prototype;
    return t.show = function () {
      var t = this;
      g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn);
      var e = function () {
        t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide()
      };
      if (this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation) {
        var n = _.getTransitionDurationFromElement(this._element);
        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
      } else e()
    }, t.hide = function (t) {
      var e = this;
      this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE), t ? this._close() : this._timeout = setTimeout(function () {
        e._close()
      }, this._config.delay))
    }, t.dispose = function () {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Gn) && this._element.classList.remove(Gn), g(this._element).off(zn.CLICK_DISMISS), g.removeData(this._element, Bn), this._element = null, this._config = null
    }, t._getConfig = function (t) {
      return t = l({}, ti, g(this._element).data(), typeof t === 'object' && t ? t : {}), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t
    }, t._setListeners = function () {
      var t = this;
      g(this._element).on(zn.CLICK_DISMISS, ei, function () {
        return t.hide(!0)
      })
    }, t._close = function () {
      var t = this;
      var e = function () {
        t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN)
      };
      if (this._element.classList.remove(Gn), this._config.animation) {
        var n = _.getTransitionDurationFromElement(this._element);
        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
      } else e()
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this);
        var e = t.data(Bn);
        if (e || (e = new i(this, typeof n === 'object' && n), t.data(Bn, e)), typeof n === 'string') {
          if (typeof e[n] === 'undefined') throw new TypeError('No method named "' + n + '"');
          e[n](this)
        }
      })
    }, s(i, null, [{
      key: 'VERSION',
      get: function () {
        return '4.3.1'
      }
    }, {
      key: 'DefaultType',
      get: function () {
        return Zn
      }
    }, {
      key: 'Default',
      get: function () {
        return ti
      }
    }]), i
  }());
  g.fn[Qn] = ni._jQueryInterface, g.fn[Qn].Constructor = ni, g.fn[Qn].noConflict = function () {
    return g.fn[Qn] = Yn, ni._jQueryInterface
  }, (function () {
    if (typeof g === 'undefined') throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var t = g.fn.jquery.split(' ')[0].split('.');
    if (t[0] < 2 && t[1] < 9 || t[0] === 1 && t[1] === 9 && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
  }()), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Jt, t.Modal = ve, t.Popover = sn, t.Scrollspy = Dn, t.Tab = Kn, t.Toast = ni, t.Tooltip = Be, Object.defineProperty(t, '__esModule', {
    value: !0
  })
}))
// # sourceMappingURL=bootstrap.min.js.map
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */