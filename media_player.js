(function () {
    'use strict';
    var k, aa = aa || {}
        , m = this
        , ba = function (a) {
            return void 0 !== a
        }
        , ca = function () {}
        , da = function (a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call &&
                        "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        }
        , ea = function (a) {
            var b = da(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        }
        , fa = function (a) {
            return "string" == typeof a
        }
        , ga = function (a, b, c) {
            return a.call.apply(a.bind, arguments)
        }
        , ha = function (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var c =
                        Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        }
        , ia = function (a, b, c) {
            ia = Function.prototype.bind && -1 != Function.prototype.bind.toString()
                .indexOf("native code") ? ga : ha;
            return ia.apply(null, arguments)
        }
        , q = Date.now || function () {
            return +new Date
        }
        , t = function (a, b) {
            var c = a.split(".")
                , d = m;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) !c.length && ba(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
        }
        , u =
        function (a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.B = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.fg = function (a, c, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                b.prototype[c].apply(a, g)
            }
        };
    var cast = m.cast || {};
    var ja = function (a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, ja);
        else {
            var b = Error()
                .stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    u(ja, Error);
    ja.prototype.name = "CustomError";
    var ka = function (a, b) {
            var c = String(b)
                .toLowerCase()
                , d = String(a.substr(0, b.length))
                .toLowerCase();
            return 0 == (c < d ? -1 : c == d ? 0 : 1)
        }
        , la = function (a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
            return d + c.join("%s")
        }
        , ma = String.prototype.trim ? function (a) {
            return a.trim()
        } : function (a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        }
        , v = function (a, b) {
            return -1 != a.indexOf(b)
        }
        , na = function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var oa = function (a, b) {
        b.unshift(a);
        ja.call(this, la.apply(null, b));
        b.shift()
    };
    u(oa, ja);
    oa.prototype.name = "AssertionError";
    var pa = function (a, b) {
        throw new oa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var qa = Array.prototype.indexOf ? function (a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function (a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (fa(a)) return fa(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        }
        , ra = Array.prototype.lastIndexOf ? function (a, b, c) {
            return Array.prototype.lastIndexOf.call(a, b, null == c ? a.length - 1 : c)
        } : function (a, b, c) {
            c = null == c ? a.length - 1 : c;
            0 > c && (c = Math.max(0, a.length + c));
            if (fa(a)) return fa(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
            for (; 0 <= c; c--)
                if (c in a && a[c] === b) return c;
            return -1
        }
        , sa = Array.prototype.forEach ? function (a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = fa(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        }
        , ua = function (a) {
            var b;
            a: {
                b = ta;
                for (var c = a.length, d = fa(a) ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a
                    }
                b = -1
            }
            return 0 > b ? null : fa(a) ? a.charAt(b) : a[b]
        }
        , va = function (a, b) {
            var c = qa(a, b)
                , d;
            (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
            return d
        }
        , wa = function (a) {
            return Array.prototype.concat.apply(Array.prototype
                , arguments)
        }
        , xa = function (a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        };
    var ya = function (a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        }
        , za = function (a) {
            var b = []
                , c = 0
                , d;
            for (d in a) b[c++] = a[d];
            return b
        }
        , Aa = function (a) {
            var b = []
                , c = 0
                , d;
            for (d in a) b[c++] = d;
            return b
        }
        , Ca = function (a) {
            return null !== a && "withCredentials" in a
        }
        , Da = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
        , Ea = function (a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Da.length; f++) c = Da[f], Object.prototype.hasOwnProperty.call(d
                    , c) && (a[c] = d[c])
            }
        };
    var Fa = "StopIteration" in m ? m.StopIteration : {
            message: "StopIteration"
            , stack: ""
        }
        , Ga = function () {};
    Ga.prototype.next = function () {
        throw Fa;
    };
    Ga.prototype.Bh = function () {
        return this
    };
    var Ha = function (a, b) {
        this.Ja = {};
        this.X = [];
        this.Ba = this.N = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.addAll(a)
    };
    k = Ha.prototype;
    k.ac = function () {
        return this.N
    };
    k.pa = function () {
        Ia(this);
        for (var a = [], b = 0; b < this.X.length; b++) a.push(this.Ja[this.X[b]]);
        return a
    };
    k.Ca = function () {
        Ia(this);
        return this.X.concat()
    };
    k.bd = function (a) {
        return Ja(this.Ja, a)
    };
    k.zb = function (a, b) {
        if (this === a) return !0;
        if (this.N != a.ac()) return !1;
        var c = b || Ka;
        Ia(this);
        for (var d, e = 0; d = this.X[e]; e++)
            if (!c(this.get(d), a.get(d))) return !1;
        return !0
    };
    var Ka = function (a, b) {
        return a === b
    };
    Ha.prototype.Ga = function () {
        return 0 == this.N
    };
    Ha.prototype.clear = function () {
        this.Ja = {};
        this.Ba = this.N = this.X.length = 0
    };
    Ha.prototype.remove = function (a) {
        return Ja(this.Ja, a) ? (delete this.Ja[a], this.N--, this.Ba++, this.X.length > 2 * this.N && Ia(this), !0) : !1
    };
    var Ia = function (a) {
        if (a.N != a.X.length) {
            for (var b = 0, c = 0; b < a.X.length;) {
                var d = a.X[b];
                Ja(a.Ja, d) && (a.X[c++] = d);
                b++
            }
            a.X.length = c
        }
        if (a.N != a.X.length) {
            for (var e = {}, c = b = 0; b < a.X.length;) d = a.X[b], Ja(e, d) || (a.X[c++] = d, e[d] = 1), b++;
            a.X.length = c
        }
    };
    k = Ha.prototype;
    k.get = function (a, b) {
        return Ja(this.Ja, a) ? this.Ja[a] : b
    };
    k.set = function (a, b) {
        Ja(this.Ja, a) || (this.N++, this.X.push(a), this.Ba++);
        this.Ja[a] = b
    };
    k.addAll = function (a) {
        var b;
        a instanceof Ha ? (b = a.Ca(), a = a.pa()) : (b = Aa(a), a = za(a));
        for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
    };
    k.forEach = function (a, b) {
        for (var c = this.Ca(), d = 0; d < c.length; d++) {
            var e = c[d]
                , f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    k.clone = function () {
        return new Ha(this)
    };
    k.Bh = function (a) {
        Ia(this);
        var b = 0
            , c = this.Ba
            , d = this
            , e = new Ga;
        e.next = function () {
            if (c != d.Ba) throw Error("The map has changed since the iterator was created");
            if (b >= d.X.length) throw Fa;
            var e = d.X[b++];
            return a ? e : d.Ja[e]
        };
        return e
    };
    var Ja = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var La = function (a) {
            if (a.pa && "function" == typeof a.pa) return a.pa();
            if (fa(a)) return a.split("");
            if (ea(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return za(a)
        }
        , Ma = function (a, b, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
            else if (ea(a) || fa(a)) sa(a, b, c);
            else {
                var d;
                if (a.Ca && "function" == typeof a.Ca) d = a.Ca();
                else if (a.pa && "function" == typeof a.pa) d = void 0;
                else if (ea(a) || fa(a)) {
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) d.push(f)
                } else d = Aa(a);
                for (var e = La(a), f = e.length, g = 0; g < f; g++) b.call(c
                    , e[g], d && d[g], a)
            }
        };
    var w;
    a: {
        var Na = m.navigator;
        if (Na) {
            var Oa = Na.userAgent;
            if (Oa) {
                w = Oa;
                break a
            }
        }
        w = ""
    };
    var Pa = v(w, "Opera") || v(w, "OPR")
        , Qa = v(w, "Trident") || v(w, "MSIE")
        , Ra = v(w, "Edge")
        , Sa = v(w, "Gecko") && !(v(w.toLowerCase(), "webkit") && !v(w, "Edge")) && !(v(w, "Trident") || v(w, "MSIE")) && !v(w, "Edge")
        , Ta = v(w.toLowerCase(), "webkit") && !v(w, "Edge")
        , Ua = function () {
            var a = w;
            if (Sa) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (Ra) return /Edge\/([\d\.]+)/.exec(a);
            if (Qa) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Ta) return /WebKit\/(\S+)/.exec(a)
        }
        , Va = function () {
            var a = m.document;
            return a ? a.documentMode : void 0
        }
        , Wa = function () {
            if (Pa &&
                m.opera) {
                var a;
                var b = m.opera.version;
                try {
                    a = b()
                } catch (c) {
                    a = b
                }
                return a
            }
            a = "";
            (b = Ua()) && (a = b ? b[1] : "");
            return Qa && (b = Va(), b > parseFloat(a)) ? String(b) : a
        }()
        , Xa = {}
        , Ya = function (a) {
            var b;
            if (!(b = Xa[a])) {
                b = 0;
                for (var c = ma(String(Wa))
                        .split("."), d = ma(String(a))
                        .split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || ""
                        , h = d[f] || ""
                        , l = /(\d*)(\D*)/g
                        , n = /(\d*)(\D*)/g;
                    do {
                        var p = l.exec(g) || ["", "", ""]
                            , r = n.exec(h) || ["", "", ""];
                        if (0 == p[0].length && 0 == r[0].length) break;
                        b = na(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 ==
                            r[1].length ? 0 : parseInt(r[1], 10)) || na(0 == p[2].length, 0 == r[2].length) || na(p[2], r[2])
                    } while (0 == b)
                }
                b = Xa[a] = 0 <= b
            }
            return b
        }
        , Za = m.document
        , $a = Za && Qa ? Va() || ("CSS1Compat" == Za.compatMode ? parseInt(Wa, 10) : 5) : void 0;
    var ab = function (a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    };
    ab.prototype.Nb = 0;
    ab.prototype.We = null;
    var bb = 0;
    ab.prototype.reset = function (a, b, c, d, e) {
        this.Nb = "number" == typeof e ? e : bb++;
        this.Uc = d || q();
        this.fc = a;
        this.Ng = b;
        this.Mg = c;
        delete this.We
    };
    ab.prototype.cf = function () {
        return this.fc
    };
    ab.prototype.Rf = function (a) {
        this.fc = a
    };
    var cb = function (a) {
            this.lc = a;
            this.fd = this.Oe = this.fc = this.qe = null
        }
        , db = function (a, b) {
            this.name = a;
            this.value = b
        };
    db.prototype.toString = function () {
        return this.name
    };
    var eb = new db("SHOUT", 1200)
        , fb = new db("SEVERE", 1E3)
        , gb = new db("WARNING", 900)
        , hb = new db("INFO", 800)
        , ib = new db("CONFIG", 700)
        , jb = new db("FINE", 500)
        , kb = [new db("OFF", Infinity), eb, fb, gb, hb, ib, jb, new db("FINER", 400), new db("FINEST", 300), new db("ALL", 0)]
        , lb = null
        , mb = function (a) {
            if (!lb) {
                lb = {};
                for (var b = 0, c; c = kb[b]; b++) lb[c.value] = c, lb[c.name] = c
            }
            if (a in lb) return lb[a];
            for (b = 0; b < kb.length; ++b)
                if (c = kb[b], c.value <= a) return c;
            return null
        };
    cb.prototype.getName = function () {
        return this.lc
    };
    cb.prototype.getParent = function () {
        return this.qe
    };
    cb.prototype.Rf = function (a) {
        this.fc = a
    };
    cb.prototype.cf = function () {
        return this.fc
    };
    var nb = function (a) {
        if (a.fc) return a.fc;
        if (a.qe) return nb(a.qe);
        pa("Root logger has no level set.");
        return null
    };
    cb.prototype.log = function (a, b, c) {
        if (a.value >= nb(this)
            .value)
            for ("function" == da(b) && (b = b()), a = new ab(a, String(b), this.lc), c && (a.We = c), c = "log:" + a.Ng, m.console && (m.console.timeStamp ? m.console.timeStamp(c) : m.console.markTimeline && m.console.markTimeline(c)), m.msWriteProfilerMark && m.msWriteProfilerMark(c), c = this; c;) {
                b = c;
                var d = a;
                if (b.fd)
                    for (var e = 0, f = void 0; f = b.fd[e]; e++) f(d);
                c = c.getParent()
            }
    };
    cb.prototype.info = function (a, b) {
        this.log(hb, a, b)
    };
    var ob = {}
        , pb = null
        , qb = function () {
            pb || (pb = new cb(""), ob[""] = pb, pb.Rf(ib))
        }
        , rb = function () {
            qb();
            return pb
        }
        , x = function (a) {
            qb();
            var b;
            if (!(b = ob[a])) {
                b = new cb(a);
                var c = a.lastIndexOf(".")
                    , d = a.substr(c + 1)
                    , c = x(a.substr(0, c));
                c.Oe || (c.Oe = {});
                c.Oe[d] = b;
                b.qe = c;
                ob[a] = b
            }
            return b
        };
    var sb = function () {
            this.mh = q()
        }
        , tb = new sb;
    sb.prototype.set = function (a) {
        this.mh = a
    };
    sb.prototype.reset = function () {
        this.set(q())
    };
    sb.prototype.get = function () {
        return this.mh
    };
    var ub = function (a) {
        this.ui = a || "";
        this.Ji = tb
    };
    k = ub.prototype;
    k.cg = !0;
    k.th = !0;
    k.Fi = !0;
    k.Ei = !0;
    k.uh = !1;
    k.Gi = !1;
    var vb = function (a) {
            return 10 > a ? "0" + a : String(a)
        }
        , wb = function (a, b) {
            var c = (a.Uc - b) / 1E3
                , d = c.toFixed(3)
                , e = 0;
            if (1 > c) e = 2;
            else
                for (; 100 > c;) e++, c *= 10;
            for (; 0 < e--;) d = " " + d;
            return d
        }
        , xb = function (a) {
            ub.call(this, a)
        };
    u(xb, ub);
    var yb = function () {
        this.xi = ia(this.Dh, this);
        this.Zd = new xb;
        this.Zd.th = !1;
        this.Zd.uh = !1;
        this.Cg = this.Zd.cg = !1;
        this.Lg = "";
        this.Yh = {}
    };
    yb.prototype.Dh = function (a) {
        if (!this.Yh[a.Mg]) {
            var b;
            b = this.Zd;
            var c = [];
            c.push(b.ui, " ");
            if (b.th) {
                var d = new Date(a.Uc);
                c.push("[", vb(d.getFullYear() - 2E3) + vb(d.getMonth() + 1) + vb(d.getDate()) + " " + vb(d.getHours()) + ":" + vb(d.getMinutes()) + ":" + vb(d.getSeconds()) + "." + vb(Math.floor(d.getMilliseconds() / 10)), "] ")
            }
            b.Fi && c.push("[", wb(a, b.Ji.get()), "s] ");
            b.Ei && c.push("[", a.Mg, "] ");
            b.Gi && c.push("[", a.cf()
                .name, "] ");
            c.push(a.Ng);
            b.uh && (d = a.We) && c.push("\n", d instanceof Error ? d.message : d.toString());
            b.cg && c.push("\n");
            b = c.join("");
            if (c = zb) switch (a.cf()) {
            case eb:
                Ab(c, "info", b);
                break;
            case fb:
                Ab(c, "error", b);
                break;
            case gb:
                Ab(c, "warn", b);
                break;
            default:
                Ab(c, "debug", b)
            } else this.Lg += b
        }
    };
    var Bb = null
        , zb = m.console
        , Ab = function (a, b, c) {
            if (a[b]) a[b](c);
            else a.log(c)
        };
    var Cb = /^(-)?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/
        , Db = function (a, b, c, d, e, f) {
            fa(a) ? (this.zc = "y" == a ? b : 0, this.kc = "m" == a ? b : 0, this.xb = "d" == a ? b : 0, this.Ab = "h" == a ? b : 0, this.Hb = "n" == a ? b : 0, this.Kb = "s" == a ? b : 0) : (this.zc = a || 0, this.kc = b || 0, this.xb = c || 0, this.Ab = d || 0, this.Hb = e || 0, this.Kb = f || 0)
        };
    Db.prototype.zb = function (a) {
        return a.zc == this.zc && a.kc == this.kc && a.xb == this.xb && a.Ab == this.Ab && a.Hb == this.Hb && a.Kb == this.Kb
    };
    Db.prototype.clone = function () {
        return new Db(this.zc, this.kc, this.xb, this.Ab, this.Hb, this.Kb)
    };
    Db.prototype.add = function (a) {
        this.zc += a.zc;
        this.kc += a.kc;
        this.xb += a.xb;
        this.Ab += a.Ab;
        this.Hb += a.Hb;
        this.Kb += a.Kb
    };
    var y = function () {
        this.dd = this.dd;
        this.ne = this.ne
    };
    y.prototype.dd = !1;
    y.prototype.I = function () {
        this.dd || (this.dd = !0, this.F())
    };
    y.prototype.F = function () {
        if (this.ne)
            for (; this.ne.length;) this.ne.shift()()
    };
    var z = function (a, b) {
            a && a.log(fb, b, void 0)
        }
        , A = function (a, b) {
            a && a.log(gb, b, void 0)
        }
        , B = function (a, b) {
            a && a.info(b, void 0)
        }
        , Eb = function (a, b) {
            a && a.log(jb, b, void 0)
        };
    var Fb = function (a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.pc = !1;
        this.nh = !0
    };
    Fb.prototype.stopPropagation = function () {
        this.pc = !0
    };
    Fb.prototype.preventDefault = function () {
        this.defaultPrevented = !0;
        this.nh = !1
    };
    var Gb = function (a) {
        Gb[" "](a);
        return a
    };
    Gb[" "] = ca;
    var Hb;
    (Hb = !Qa) || (Hb = 9 <= $a);
    var Ib = Hb
        , Jb = Qa && !Ya("9");
    !Ta || Ya("528");
    Sa && Ya("1.9b") || Qa && Ya("8") || Pa && Ya("9.5") || Ta && Ya("528");
    Sa && !Ya("8") || Qa && Ya("9");
    var Kb = function (a, b) {
        Fb.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.cb = this.state = null;
        a && this.Z(a, b)
    };
    u(Kb, Fb);
    Kb.prototype.Z = function (a, b) {
        var c = this.type = a.type
            , d = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var e = a.relatedTarget;
        if (e) {
            if (Sa) {
                var f;
                a: {
                    try {
                        Gb(e.nodeName);
                        f = !0;
                        break a
                    } catch (g) {}
                    f = !1
                }
                f || (e = null)
            }
        } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
        this.relatedTarget = e;
        null === d ? (this.offsetX = Ta || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = Ta || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX :
            a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.cb = a;
        a.defaultPrevented &&
            this.preventDefault()
    };
    Kb.prototype.stopPropagation = function () {
        Kb.B.stopPropagation.call(this);
        this.cb.stopPropagation ? this.cb.stopPropagation() : this.cb.cancelBubble = !0
    };
    Kb.prototype.preventDefault = function () {
        Kb.B.preventDefault.call(this);
        var a = this.cb;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Jb) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Lb = "closure_listenable_" + (1E6 * Math.random() | 0)
        , Mb = 0;
    var Nb = function (a, b, c, d, e) {
            this.listener = a;
            this.se = null;
            this.src = b;
            this.type = c;
            this.$c = !!d;
            this.be = e;
            this.key = ++Mb;
            this.Oc = this.Yd = !1
        }
        , Pb = function (a) {
            a.Oc = !0;
            a.listener = null;
            a.se = null;
            a.src = null;
            a.be = null
        };
    var Qb = function (a) {
        this.src = a;
        this.ea = {};
        this.Sd = 0
    };
    Qb.prototype.add = function (a, b, c, d, e) {
        var f = a.toString();
        a = this.ea[f];
        a || (a = this.ea[f] = [], this.Sd++);
        var g = Rb(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Yd = !1)) : (b = new Nb(b, this.src, f, !!d, e), b.Yd = c, a.push(b));
        return b
    };
    Qb.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.ea)) return !1;
        var e = this.ea[a];
        b = Rb(e, b, c, d);
        return -1 < b ? (Pb(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.ea[a], this.Sd--), !0) : !1
    };
    var Sb = function (a, b) {
        var c = b.type;
        c in a.ea && va(a.ea[c], b) && (Pb(b), 0 == a.ea[c].length && (delete a.ea[c], a.Sd--))
    };
    Qb.prototype.df = function (a, b, c, d) {
        a = this.ea[a.toString()];
        var e = -1;
        a && (e = Rb(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    Qb.prototype.hasListener = function (a, b) {
        var c = ba(a)
            , d = c ? a.toString() : ""
            , e = ba(b);
        return ya(this.ea, function (a) {
            for (var g = 0; g < a.length; ++g)
                if (!(c && a[g].type != d || e && a[g].$c != b)) return !0;
            return !1
        })
    };
    var Rb = function (a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Oc && f.listener == b && f.$c == !!c && f.be == d) return e
        }
        return -1
    };
    var Tb = "closure_lm_" + (1E6 * Math.random() | 0)
        , Ub = {}
        , Vb = 0
        , C = function (a, b, c, d, e) {
            if ("array" == da(b))
                for (var f = 0; f < b.length; f++) C(a, b[f], c, d, e);
            else c = Wb(c), a && a[Lb] ? a.Sa.add(String(b), c, !1, d, e) : Xb(a, b, c, !1, d, e)
        }
        , Xb = function (a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = !!e
                , h = Yb(a);
            h || (a[Tb] = h = new Qb(a));
            c = h.add(b, c, d, e, f);
            if (!c.se) {
                d = Zb();
                c.se = d;
                d.src = a;
                d.listener = c;
                if (a.addEventListener) a.addEventListener(b.toString(), d, g);
                else if (a.attachEvent) a.attachEvent($b(b.toString()), d);
                else throw Error("addEventListener and attachEvent are unavailable.");
                Vb++
            }
        }
        , Zb = function () {
            var a = ac
                , b = Ib ? function (c) {
                    return a.call(b.src, b.listener, c)
                } : function (c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        }
        , bc = function (a, b, c, d, e) {
            if ("array" == da(b))
                for (var f = 0; f < b.length; f++) bc(a, b[f], c, d, e);
            else c = Wb(c), a && a[Lb] ? a.Sa.add(String(b), c, !0, d, e) : Xb(a, b, c, !0, d, e)
        }
        , cc = function (a, b, c, d, e) {
            if ("array" == da(b))
                for (var f = 0; f < b.length; f++) cc(a, b[f], c, d, e);
            else c = Wb(c), a && a[Lb] ? a.Sa.remove(String(b), c, d, e) : a && (a = Yb(a)) && (b = a.df(b, c, !!d, e)) && dc(b)
        }
        , dc = function (a) {
            if ("number" !=
                typeof a && a && !a.Oc) {
                var b = a.src;
                if (b && b[Lb]) Sb(b.Sa, a);
                else {
                    var c = a.type
                        , d = a.se;
                    b.removeEventListener ? b.removeEventListener(c, d, a.$c) : b.detachEvent && b.detachEvent($b(c), d);
                    Vb--;
                    (c = Yb(b)) ? (Sb(c, a), 0 == c.Sd && (c.src = null, b[Tb] = null)) : Pb(a)
                }
            }
        }
        , $b = function (a) {
            return a in Ub ? Ub[a] : Ub[a] = "on" + a
        }
        , fc = function (a, b, c, d) {
            var e = !0;
            if (a = Yb(a))
                if (b = a.ea[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.$c == c && !f.Oc && (f = ec(f, d), e = e && !1 !== f)
                    }
                return e
        }
        , ec = function (a, b) {
            var c = a.listener
                , d = a.be || a.src;
            a.Yd && dc(a);
            return c.call(d, b)
        }
        , ac = function (a, b) {
            if (a.Oc) return !0;
            if (!Ib) {
                var c;
                if (!(c = b)) a: {
                    c = ["window", "event"];
                    for (var d = m, e; e = c.shift();)
                        if (null != d[e]) d = d[e];
                        else {
                            c = null;
                            break a
                        }
                    c = d
                }
                e = c;
                c = new Kb(e, this);
                d = !0;
                if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                    a: {
                        var f = !1;
                        if (0 == e.keyCode) try {
                            e.keyCode = -1;
                            break a
                        } catch (l) {
                            f = !0
                        }
                        if (f || void 0 == e.returnValue) e.returnValue = !0
                    }
                    e = [];
                    for (f = c.currentTarget; f; f = f.parentNode) e.push(f);
                    for (var f = a.type, g = e.length - 1; !c.pc && 0 <= g; g--) {
                        c.currentTarget = e[g];
                        var h = fc(e[g]
                                , f, !0, c)
                            , d = d && h
                    }
                    for (g = 0; !c.pc && g < e.length; g++) c.currentTarget = e[g]
                    , h = fc(e[g], f, !1, c)
                    , d = d && h
                }
                return d
            }
            return ec(a, new Kb(b, this))
        }
        , Yb = function (a) {
            a = a[Tb];
            return a instanceof Qb ? a : null
        }
        , gc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0)
        , Wb = function (a) {
            if ("function" == da(a)) return a;
            a[gc] || (a[gc] = function (b) {
                return a.handleEvent(b)
            });
            return a[gc]
        };
    var hc = function () {
        y.call(this);
        this.Sa = new Qb(this);
        this.Ch = this;
        this.Gf = null
    };
    u(hc, y);
    hc.prototype[Lb] = !0;
    hc.prototype.addEventListener = function (a, b, c, d) {
        C(this, a, b, c, d)
    };
    hc.prototype.removeEventListener = function (a, b, c, d) {
        cc(this, a, b, c, d)
    };
    hc.prototype.dispatchEvent = function (a) {
        var b, c = this.Gf;
        if (c)
            for (b = []; c; c = c.Gf) b.push(c);
        var c = this.Ch
            , d = a.type || a;
        if (fa(a)) a = new Fb(a, c);
        else if (a instanceof Fb) a.target = a.target || c;
        else {
            var e = a;
            a = new Fb(d, c);
            Ea(a, e)
        }
        var e = !0
            , f;
        if (b)
            for (var g = b.length - 1; !a.pc && 0 <= g; g--) f = a.currentTarget = b[g], e = ic(f, d, !0, a) && e;
        a.pc || (f = a.currentTarget = c, e = ic(f, d, !0, a) && e, a.pc || (e = ic(f, d, !1, a) && e));
        if (b)
            for (g = 0; !a.pc && g < b.length; g++) f = a.currentTarget = b[g], e = ic(f, d, !1, a) && e;
        return e
    };
    hc.prototype.F = function () {
        hc.B.F.call(this);
        if (this.Sa) {
            var a = this.Sa
                , b = 0
                , c;
            for (c in a.ea) {
                for (var d = a.ea[c], e = 0; e < d.length; e++) ++b, Pb(d[e]);
                delete a.ea[c];
                a.Sd--
            }
        }
        this.Gf = null
    };
    var ic = function (a, b, c, d) {
        b = a.Sa.ea[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Oc && g.$c == c) {
                var h = g.listener
                    , l = g.be || g.src;
                g.Yd && Sb(a.Sa, g);
                e = !1 !== h.call(l, d) && e
            }
        }
        return e && 0 != d.nh
    };
    hc.prototype.df = function (a, b, c, d) {
        return this.Sa.df(String(a), b, c, d)
    };
    hc.prototype.hasListener = function (a, b) {
        return this.Sa.hasListener(ba(a) ? String(a) : void 0, b)
    };
    var jc = function (a, b, c) {
        if ("function" == da(a)) c && (a = ia(a, c));
        else if (a && "function" == typeof a.handleEvent) a = ia(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : m.setTimeout(a, b || 0)
    };
    var kc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/
        , lc = function (a, b) {
            if (a)
                for (var c = a.split("&"), d = 0; d < c.length; d++) {
                    var e = c[d].indexOf("=")
                        , f = null
                        , g = null;
                    0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
                    b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
                }
        };
    var mc = function () {};
    mc.prototype.ig = null;
    var oc = function (a) {
        var b;
        (b = a.ig) || (b = {}, nc(a) && (b[0] = !0, b[1] = !0), b = a.ig = b);
        return b
    };
    var pc, qc = function () {};
    u(qc, mc);
    var rc = function (a) {
            return (a = nc(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        }
        , nc = function (a) {
            if (!a.Ag && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.Ag = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.Ag
        };
    pc = new qc;
    var D = function (a) {
        hc.call(this);
        this.headers = new Ha;
        this.He = a || null;
        this.ub = !1;
        this.Ge = this.u = null;
        this.Kg = this.td = "";
        this.gb = 0;
        this.sd = "";
        this.bc = this.hf = this.de = this.Ue = !1;
        this.sb = 0;
        this.$ = null;
        this.Ld = "";
        this.Fe = this.wi = this.Ud = !1
    };
    u(D, hc);
    D.prototype.a = x("goog.net.XhrIo");
    var sc = /^https?$/i
        , tc = ["POST", "PUT"]
        , uc = function (a) {
            a.Ld = "arraybuffer"
        };
    D.prototype.send = function (a, b, c, d) {
        if (this.u) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.td + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.td = a;
        this.sd = "";
        this.gb = 0;
        this.Kg = b;
        this.Ue = !1;
        this.ub = !0;
        this.u = this.Qe();
        this.Ge = this.He ? oc(this.He) : oc(pc);
        this.u.onreadystatechange = ia(this.$g, this);
        this.wi && "onprogress" in this.u && (this.u.onprogress = ia(function (a) {
            this.Zg(a, !0)
        }, this), this.u.upload && (this.u.upload.onprogress = ia(this.Zg, this)));
        try {
            Eb(this.a, vc(this, "Opening Xhr"))
                , this.hf = !0, this.u.open(b, String(a), !0), this.hf = !1
        } catch (f) {
            Eb(this.a, vc(this, "Error opening Xhr: " + f.message));
            wc(this, f);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && Ma(d, function (a, b) {
            e.set(b, a)
        });
        d = ua(e.Ca());
        c = m.FormData && a instanceof m.FormData;
        !(0 <= qa(tc, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function (a, b) {
            this.u.setRequestHeader(b, a)
        }, this);
        this.Ld && (this.u.responseType = this.Ld);
        Ca(this.u) && (this.u.withCredentials = this.Ud);
        try {
            xc(this)
                , 0 < this.sb && (this.Fe = yc(this.u), Eb(this.a, vc(this, "Will abort after " + this.sb + "ms if incomplete, xhr2 " + this.Fe)), this.Fe ? (this.u.timeout = this.sb, this.u.ontimeout = ia(this.yh, this)) : this.$ = jc(this.yh, this.sb, this)), Eb(this.a, vc(this, "Sending request")), this.de = !0, this.u.send(a), this.de = !1
        } catch (f) {
            Eb(this.a, vc(this, "Send error: " + f.message)), wc(this, f)
        }
    };
    var yc = function (a) {
            return Qa && Ya(9) && "number" == typeof a.timeout && ba(a.ontimeout)
        }
        , ta = function (a) {
            return "content-type" == a.toLowerCase()
        };
    D.prototype.Qe = function () {
        return this.He ? rc(this.He) : rc(pc)
    };
    D.prototype.yh = function () {
        "undefined" != typeof aa && this.u && (this.sd = "Timed out after " + this.sb + "ms, aborting", this.gb = 8, Eb(this.a, vc(this, this.sd)), this.dispatchEvent("timeout"), this.abort(8))
    };
    var wc = function (a, b) {
            a.ub = !1;
            a.u && (a.bc = !0, a.u.abort(), a.bc = !1);
            a.sd = b;
            a.gb = 5;
            Ac(a);
            Bc(a)
        }
        , Ac = function (a) {
            a.Ue || (a.Ue = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    D.prototype.abort = function (a) {
        this.u && this.ub && (Eb(this.a, vc(this, "Aborting")), this.ub = !1, this.bc = !0, this.u.abort(), this.bc = !1, this.gb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Bc(this))
    };
    D.prototype.F = function () {
        this.u && (this.ub && (this.ub = !1, this.bc = !0, this.u.abort(), this.bc = !1), Bc(this, !0));
        D.B.F.call(this)
    };
    D.prototype.$g = function () {
        this.dd || (this.hf || this.de || this.bc ? Cc(this) : this.oi())
    };
    D.prototype.oi = function () {
        Cc(this)
    };
    var Cc = function (a) {
        if (a.ub && "undefined" != typeof aa)
            if (a.Ge[1] && 4 == Dc(a) && 2 == Ec(a)) Eb(a.a, vc(a, "Local request error detected and ignored"));
            else if (a.de && 4 == Dc(a)) jc(a.$g, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == Dc(a)) {
            Eb(a.a, vc(a, "Request complete"));
            a.ub = !1;
            try {
                var b = Ec(a)
                    , c;
                a: switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    c = !0;
                    break a;
                default:
                    c = !1
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = String(a.td)
                            .match(kc)[1] || null;
                        if (!f && m.self && m.self.location) var g = m.self.location.protocol
                            , f = g.substr(0, g.length - 1);
                        e = !sc.test(f ? f.toLowerCase() : "")
                    }
                    d = e
                }
                if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
                else {
                    a.gb = 6;
                    var h;
                    try {
                        h = 2 < Dc(a) ? a.u.statusText : ""
                    } catch (l) {
                        Eb(a.a, "Can not get status: " + l.message), h = ""
                    }
                    a.sd = h + " [" + Ec(a) + "]";
                    Ac(a)
                }
            } finally {
                Bc(a)
            }
        }
    };
    D.prototype.Zg = function (a, b) {
        this.dispatchEvent(Fc(a, "progress"));
        this.dispatchEvent(Fc(a, b ? "downloadprogress" : "uploadprogress"))
    };
    var Fc = function (a, b) {
            return {
                type: b
                , lengthComputable: a.lengthComputable
                , loaded: a.loaded
                , total: a.total
            }
        }
        , Bc = function (a, b) {
            if (a.u) {
                xc(a);
                var c = a.u
                    , d = a.Ge[0] ? ca : null;
                a.u = null;
                a.Ge = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {
                    z(a.a, "Problem encountered resetting onreadystatechange: " + e.message)
                }
            }
        }
        , xc = function (a) {
            a.u && a.Fe && (a.u.ontimeout = null);
            "number" == typeof a.$ && (m.clearTimeout(a.$), a.$ = null)
        };
    D.prototype.ld = function () {
        return !!this.u
    };
    var Dc = function (a) {
            return a.u ? a.u.readyState : 0
        }
        , Ec = function (a) {
            try {
                return 2 < Dc(a) ? a.u.status : -1
            } catch (b) {
                return -1
            }
        }
        , Gc = function (a) {
            try {
                if (!a.u) return null;
                if ("response" in a.u) return a.u.response;
                switch (a.Ld) {
                case "":
                case "text":
                    return a.u.responseText;
                case "arraybuffer":
                    if ("mozResponseArrayBuffer" in a.u) return a.u.mozResponseArrayBuffer
                }
                z(a.a, "Response type " + a.Ld + " is not supported on this browser");
                return null
            } catch (b) {
                return Eb(a.a, "Can not get response: " + b.message), null
            }
        };
    D.prototype.getResponseHeader = function (a) {
        return this.u && 4 == Dc(this) ? this.u.getResponseHeader(a) : void 0
    };
    D.prototype.getAllResponseHeaders = function () {
        return this.u && 4 == Dc(this) ? this.u.getAllResponseHeaders() : ""
    };
    var vc = function (a, b) {
        return b + " [" + a.Kg + " " + a.td + " " + Ec(a) + "]"
    };
    var Hc = function () {
            this.oa = [];
            this.Na = []
        }
        , Ic = function (a) {
            0 == a.oa.length && (a.oa = a.Na, a.oa.reverse(), a.Na = [])
        };
    Hc.prototype.enqueue = function (a) {
        this.Na.push(a)
    };
    var Jc = function (a) {
            Ic(a);
            return a.oa.pop()
        }
        , Kc = function (a) {
            Ic(a);
            a = a.oa;
            return a[a.length - 1]
        };
    k = Hc.prototype;
    k.ac = function () {
        return this.oa.length + this.Na.length
    };
    k.Ga = function () {
        return 0 == this.oa.length && 0 == this.Na.length
    };
    k.clear = function () {
        this.oa = [];
        this.Na = []
    };
    k.contains = function (a) {
        return 0 <= qa(this.oa, a) || 0 <= qa(this.Na, a)
    };
    k.remove = function (a) {
        var b = ra(this.oa, a);
        if (0 > b) return va(this.Na, a);
        Array.prototype.splice.call(this.oa, b, 1);
        return !0
    };
    k.pa = function () {
        for (var a = [], b = this.oa.length - 1; 0 <= b; --b) a.push(this.oa[b]);
        for (var c = this.Na.length, b = 0; b < c; ++b) a.push(this.Na[b]);
        return a
    };
    var E = function (a, b) {
        this.bb = this.xc = this.mb = "";
        this.Lc = null;
        this.$b = this.Za = "";
        this.ta = this.hi = !1;
        var c;
        if (a instanceof E) this.ta = ba(b) ? b : a.ta, Lc(this, a.mb), c = a.xc, F(this), this.xc = c, c = a.bb, F(this), this.bb = c, Mc(this, a.Lc), c = a.Za, F(this), this.Za = c, Nc(this, a.lb.clone()), c = a.$b, F(this), this.$b = c;
        else if (a && (c = String(a)
                .match(kc))) {
            this.ta = !!b;
            Lc(this, c[1] || "", !0);
            var d = c[2] || "";
            F(this);
            this.xc = Oc(d);
            d = c[3] || "";
            F(this);
            this.bb = Oc(d, !0);
            Mc(this, c[4]);
            d = c[5] || "";
            F(this);
            this.Za = Oc(d, !0);
            Nc(this, c[6] || "", !0);
            c = c[7] || "";
            F(this);
            this.$b = Oc(c)
        } else this.ta = !!b, this.lb = new Pc(null, 0, this.ta)
    };
    E.prototype.toString = function () {
        var a = []
            , b = this.mb;
        b && a.push(Qc(b, Rc, !0), ":");
        var c = this.bb;
        if (c || "file" == b) a.push("//"), (b = this.xc) && a.push(Qc(b, Rc, !0), "@"), a.push(encodeURIComponent(String(c))
            .replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.Lc, null != c && a.push(":", String(c));
        if (c = this.Za) this.bb && "/" != c.charAt(0) && a.push("/"), a.push(Qc(c, "/" == c.charAt(0) ? Sc : Tc, !0));
        (c = this.lb.toString()) && a.push("?", c);
        (c = this.$b) && a.push("#", Qc(c, Uc));
        return a.join("")
    };
    E.prototype.resolve = function (a) {
        var b = this.clone()
            , c = !!a.mb;
        c ? Lc(b, a.mb) : c = !!a.xc;
        if (c) {
            var d = a.xc;
            F(b);
            b.xc = d
        } else c = !!a.bb;
        c ? (d = a.bb, F(b), b.bb = d) : c = null != a.Lc;
        d = a.Za;
        if (c) Mc(b, a.Lc);
        else if (c = !!a.Za) {
            if ("/" != d.charAt(0))
                if (this.bb && !this.Za) d = "/" + d;
                else {
                    var e = b.Za.lastIndexOf("/"); - 1 != e && (d = b.Za.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (v(e, "./") || v(e, "/.")) {
                for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 <
                        f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? (F(b), b.Za = d) : c = "" !== a.lb.toString();
        c ? Nc(b, Oc(a.lb.toString())) : c = !!a.$b;
        c && (a = a.$b, F(b), b.$b = a);
        return b
    };
    E.prototype.clone = function () {
        return new E(this)
    };
    var Lc = function (a, b, c) {
            F(a);
            a.mb = c ? Oc(b, !0) : b;
            a.mb && (a.mb = a.mb.replace(/:$/, ""))
        }
        , Mc = function (a, b) {
            F(a);
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.Lc = b
            } else a.Lc = null
        }
        , Nc = function (a, b, c) {
            F(a);
            b instanceof Pc ? (a.lb = b, a.lb.Qf(a.ta)) : (c || (b = Qc(b, Vc)), a.lb = new Pc(b, 0, a.ta))
        }
        , F = function (a) {
            if (a.hi) throw Error("Tried to modify a read-only Uri");
        };
    E.prototype.Qf = function (a) {
        this.ta = a;
        this.lb && this.lb.Qf(a);
        return this
    };
    var Oc = function (a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        }
        , Qc = function (a, b, c) {
            return fa(a) ? (a = encodeURI(a)
                .replace(b, Wc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        }
        , Wc = function (a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15)
                .toString(16) + (a & 15)
                .toString(16)
        }
        , Rc = /[#\/\?@]/g
        , Tc = /[\#\?:]/g
        , Sc = /[\#\?]/g
        , Vc = /[\#\?@]/g
        , Uc = /#/g
        , Pc = function (a, b, c) {
            this.N = this.P = null;
            this.ma = a || null;
            this.ta = !!c
        }
        , Xc = function (a) {
            a.P || (a.P = new Ha, a.N = 0, a.ma && lc(a.ma, function (b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g
                    , " ")), c)
            }))
        };
    k = Pc.prototype;
    k.ac = function () {
        Xc(this);
        return this.N
    };
    k.add = function (a, b) {
        Xc(this);
        this.ma = null;
        a = Yc(this, a);
        var c = this.P.get(a);
        c || this.P.set(a, c = []);
        c.push(b);
        this.N++;
        return this
    };
    k.remove = function (a) {
        Xc(this);
        a = Yc(this, a);
        return this.P.bd(a) ? (this.ma = null, this.N -= this.P.get(a)
            .length, this.P.remove(a)) : !1
    };
    k.clear = function () {
        this.P = this.ma = null;
        this.N = 0
    };
    k.Ga = function () {
        Xc(this);
        return 0 == this.N
    };
    k.bd = function (a) {
        Xc(this);
        a = Yc(this, a);
        return this.P.bd(a)
    };
    k.Ca = function () {
        Xc(this);
        for (var a = this.P.pa(), b = this.P.Ca(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    k.pa = function (a) {
        Xc(this);
        var b = [];
        if (fa(a)) this.bd(a) && (b = wa(b, this.P.get(Yc(this, a))));
        else {
            a = this.P.pa();
            for (var c = 0; c < a.length; c++) b = wa(b, a[c])
        }
        return b
    };
    k.set = function (a, b) {
        Xc(this);
        this.ma = null;
        a = Yc(this, a);
        this.bd(a) && (this.N -= this.P.get(a)
            .length);
        this.P.set(a, [b]);
        this.N++;
        return this
    };
    k.get = function (a, b) {
        var c = a ? this.pa(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    k.toString = function () {
        if (this.ma) return this.ma;
        if (!this.P) return "";
        for (var a = [], b = this.P.Ca(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.pa(d), f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        return this.ma = a.join("&")
    };
    k.clone = function () {
        var a = new Pc;
        a.ma = this.ma;
        this.P && (a.P = this.P.clone(), a.N = this.N);
        return a
    };
    var Yc = function (a, b) {
        var c = String(b);
        a.ta && (c = c.toLowerCase());
        return c
    };
    Pc.prototype.Qf = function (a) {
        a && !this.ta && (Xc(this), this.ma = null, this.P.forEach(function (a, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.ma = null, this.P.set(Yc(this, d), xa(a)), this.N += a.length))
        }, this));
        this.ta = a
    };
    Pc.prototype.extend = function (a) {
        for (var b = 0; b < arguments.length; b++) Ma(arguments[b], function (a, b) {
            this.add(b, a)
        }, this)
    };
    t("cast.player.api.VERSION", "1.0.0");
    t("cast.player.api.ErrorCode", {
        MANIFEST: 0
        , PLAYBACK: 1
        , MEDIAKEYS: 2
        , NETWORK: 3
    });
    var Zc = ["cast.player.api.ErrorCode.MANIFEST", "cast.player.api.ErrorCode.PLAYBACK", "cast.player.api.ErrorCode.MEDIAKEYS", "cast.player.api.ErrorCode.NETWORK"];
    t("cast.player.api.HlsSegmentFormat", {
        MPEG2_TS: 0
        , MPEG_AUDIO_ES: 1
    });
    t("cast.player.api.CaptionsType", {
        WEBVTT: "webvtt"
        , TTML: "ttml"
        , CEA608: "cea608"
        , UNKNOWN: "unknown"
    });
    t("cast.player.api.ContentProtection", {
        NONE: "none"
        , CLEARKEY: "clearkey"
        , PLAYREADY: "playready"
        , WIDEVINE: "widevine"
    });
    t("cast.player.api.LoggerLevel", {
        DEBUG: 0
        , INFO: 800
        , WARNING: 900
        , ERROR: 1E3
        , NONE: Infinity
    });
    var G = function () {
        this.timeoutInterval = 3E4;
        this.headers = this.url = null;
        this.withCredentials = !1;
        this.protectionSystem = this.content = null;
        this.skipRequest = !1;
        this.setResponse = null
    };
    t("cast.player.api.RequestInfo", G);
    G.prototype.timeoutInterval = G.prototype.timeoutInterval;
    G.prototype.url = G.prototype.url;
    G.prototype.headers = G.prototype.headers;
    G.prototype.withCredentials = G.prototype.withCredentials;
    G.prototype.content = G.prototype.content;
    G.prototype.protectionSystem = G.prototype.protectionSystem;
    G.prototype.skipRequest = G.prototype.skipRequest;
    G.prototype.setResponse = G.prototype.setResponse;
    var H = function (a, b, c, d, e) {
        this.url = a;
        this.errorCode = b;
        this.status = c;
        this.responseHeaders = d;
        this.response = e
    };
    t("cast.player.api.RequestStatus", H);
    H.prototype.url = H.prototype.url;
    H.prototype.errorCode = H.prototype.errorCode;
    H.prototype.status = H.prototype.status;
    H.prototype.responseHeaders = H.prototype.responseHeaders;
    H.prototype.response = H.prototype.response;
    var I = function (a, b, c, d, e, f) {
        this.codecs = a;
        this.mimeType = b;
        this.bitrates = c;
        this.language = d;
        this.name = e;
        this.role = f
    };
    t("cast.player.api.StreamInfo", I);
    I.prototype.codecs = I.prototype.codecs;
    I.prototype.mimeType = I.prototype.mimeType;
    I.prototype.bitrates = I.prototype.bitrates;
    I.prototype.language = I.prototype.language;
    I.prototype.name = I.prototype.name;
    I.prototype.role = I.prototype.role;
    window.VTTCue = window.VTTCue || window.TextTrackCue;
    var $c = function (a) {
        rb()
            .Rf(mb(a))
    };
    t("cast.player.api.setLoggerLevel", $c);
    var ad = Bb = new yb;
    if (1 != ad.Cg) {
        var bd = rb()
            , cd = ad.xi;
        bd.fd || (bd.fd = []);
        bd.fd.push(cd);
        ad.Cg = !0
    }
    var dd = cast.__platform__ && cast.__platform__.queryPlatformValue && parseInt(cast.__platform__.queryPlatformValue("log-level-mpl"), 10);
    $c(dd || 0);
    var fd = function (a) {
        ed.fg(this, "constructor");
        this.Ne = a;
        this.ob = 0;
        this.Ma = new Uint8Array(5120)
    };
    fd.prototype.clear = function () {
        this.ob = 0
    };
    fd.prototype.append = function (a) {
        this.Ma.set(a, this.ob);
        this.ob += a.length
    };
    var jd = function (a, b) {
        for (var c, d = c = 0, e = 0; d < a.ob;) 2 === c && 3 === a.Ma[d] ? c = 0 : (0 === a.Ma[d] ? c++ : c = 0, a.Ma[e] = a.Ma[d], e++), d++;
        c = d - e;
        for (d = 0; d + c < a.ob;) {
            for (var f = 0; 255 === a.Ma[d];) f += 255, d++;
            f += a.Ma[d++];
            if (45 < f) break;
            for (e = 0; 255 === a.Ma[d];) e += 255, d++;
            e += a.Ma[d++];
            if (4 === f) {
                var f = a.Ne.O
                    , g = b
                    , h = new gd(a.Ma.subarray(d, d + e));
                if (181 === hd(h) && 49 === id(h) && 1195456820 === J(h) && 3 === hd(h)) {
                    var l = hd(h);
                    if (0 !== (l & 64)) {
                        l &= 31;
                        K(h, 1);
                        for (var n = 0; n < l; n++) {
                            var p = hd(h)
                                , r = (p & 4) >> 2
                                , S = hd(h)
                                , Ba = hd(h);
                            r && f.Xb.push({
                                time: g
                                , type: p & 3
                                , jg: S
                                , kg: Ba
                                , gh: f.Xb.length
                            })
                        }
                    }
                }
            }
            d += e
        }
        a.ob = 0
    };
    var kd = !ba(navigator.requestMediaKeySystemAccess)
        , ld = kd ? {
            clearkey: "org.w3.clearkey"
            , playready: "com.microsoft.playready"
            , widevine: "com.widevine.alpha"
        } : {
            clearkey: "org.w3.clearkey"
            , playready: "com.chromecast.playready"
            , widevine: "com.widevine.alpha"
        }
        , md = x("cast.player.common")
        , nd = function (a) {
            return ka(a, "audio/")
        }
        , od = function (a) {
            return ka(a, "video/")
        }
        , pd = function (a, b) {
            return "caption" == a || ka(b, "text/")
        }
        , rd = function (a, b) {
            var c;
            b ? (c = new Uint8Array(new ArrayBuffer(16)), c.set(a), qd(c.subarray(0, 4)), qd(c.subarray(4
                , 6)), qd(c.subarray(6, 8))) : c = a;
            this.Td = c
        }
        , sd = new rd([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149])
        , td = new rd([237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237]);
    rd.prototype.zb = function (a) {
        if (null === a) return !1;
        var b = this.Td;
        a = a.Td;
        for (var c = 0; 16 > c; c++)
            if (b[c] !== a[c]) return !1;
        return !0
    };
    var qd = function (a) {
            for (var b = 0, c = a.length - 1; b < c; b++, c--) {
                var d = a[b];
                a[b] = a[c];
                a[c] = d
            }
        }
        , ud = function (a, b, c) {
            b = b || new Uint8Array(a.length);
            var d = 0;
            for (c = c || 0; d < a.length; d++) b[d + c] = a.charCodeAt(d);
            return b
        }
        , vd = function (a) {
            switch (a) {
            case "mp4a.a6":
            case "ec-3":
                return !0;
            default:
                return !1
            }
        }
        , wd = function (a, b, c) {
            for (a = a.toString(b); a.length < c;) a = "0" + a;
            return a
        };
    var xd = {
            "Cast.MPL.Bandwidth": {
                min: 0
                , max: 1E4
                , xf: 100
            }
            , "Cast.MPL.SegmentStats.Size": {
                min: 0
                , max: 1E6
                , xf: 100
            }
            , "Cast.MPL.SegmentStats.Time": {
                min: 0
                , max: 2E4
                , xf: 20
            }
        }
        , zd = function (a) {
            yd() && cast.__platform__.metrics.logEventToUma(a)
        }
        , Ad = function (a, b) {
            yd() && cast.__platform__.metrics.logHistogramValueToUma && (xd[a] ? cast.__platform__.metrics.logHistogramValueToUma(a, b, xd[a].min, xd[a].max, xd[a].xf) : A(md, "Invalid histogram name"))
        }
        , Bd = function (a, b) {
            yd() && cast.__platform__.metrics.logIntToUma(a, b)
        }
        , yd = function () {
            return cast.__platform__ &&
                cast.__platform__.metrics
        };
    var L = function (a) {
        this.initialBandwidth = 2097152;
        this.autoResumeDuration = 10;
        this.autoResumeNumberOfSegments = 3;
        this.autoPauseDuration = 1;
        this.segmentRequestRetryLimit = 3;
        this.useSingleKeySession = !1;
        this.mediaElement = a.mediaElement;
        this.url = a.url;
        this.licenseUrl = a.licenseUrl || null;
        this.licenseCustomData = a.licenseCustomData || null;
        this.Eh = !0 === a.aggressiveStallHandling;
        this.Wh = !0 === a.disableSourceBufferTimeAdjust;
        this.yg = !0 === a.hlsContentKeyProtection;
        this.Hi = !0 === a.skipSegmentOnNetworkFailure;
        this.onAutoPause =
            this.onMediaDownloadEnded = this.onManifestReady = this.processLicense = this.processSegment = this.processManifest = this.processMetadata = this.prepareLicenseRequest = this.getQualityLevel = this.trackBandwidth = this.updateCaptionsRequestInfo = this.updateSegmentRequestInfo = this.updateLicenseRequestInfo = this.updateManifestRequestInfo = this.onError = null
    };
    t("cast.player.api.Host", L);
    L.prototype.initialBandwidth = L.prototype.initialBandwidth;
    L.prototype.autoResumeDuration = L.prototype.autoResumeDuration;
    L.prototype.autoPauseDuration = L.prototype.autoPauseDuration;
    L.prototype.segmentRequestRetryLimit = L.prototype.segmentRequestRetryLimit;
    L.prototype.useSingleKeySession = L.prototype.useSingleKeySession;
    L.prototype.mediaElement = L.prototype.mediaElement;
    L.prototype.url = L.prototype.url;
    L.prototype.licenseUrl = L.prototype.licenseUrl;
    L.prototype.licenseCustomData = L.prototype.licenseCustomData;
    L.prototype.onError = L.prototype.onError;
    L.prototype.updateManifestRequestInfo = L.prototype.updateManifestRequestInfo;
    L.prototype.updateLicenseRequestInfo = L.prototype.updateLicenseRequestInfo;
    L.prototype.updateSegmentRequestInfo = L.prototype.updateSegmentRequestInfo;
    L.prototype.updateCaptionsRequestInfo = L.prototype.updateCaptionsRequestInfo;
    L.prototype.trackBandwidth = L.prototype.trackBandwidth;
    L.prototype.getQualityLevel = L.prototype.getQualityLevel;
    L.prototype.prepareLicenseRequest = L.prototype.prepareLicenseRequest;
    L.prototype.processMetadata = L.prototype.processMetadata;
    L.prototype.processManifest = L.prototype.processManifest;
    L.prototype.processSegment = L.prototype.processSegment;
    L.prototype.processLicense = L.prototype.processLicense;
    L.prototype.onManifestReady = L.prototype.onManifestReady;
    L.prototype.onMediaDownloadEnded = L.prototype.onMediaDownloadEnded;
    L.prototype.onAutoPause = L.prototype.onAutoPause;
    L.prototype.a = x("cast.player.api.Host");
    var M = function (a, b, c, d) {
        z(a.a, "error: " + Zc[b] + (d ? " (" + d + ")" : ""));
        Bd("Cast.MPL.Error", b);
        if (a.onError) a.onError(b, c)
    };
    var Dd = function (a) {
        this.U = Cd(a)
    };
    Dd.prototype.reset = function (a) {
        this.U = Cd(a)
    };
    var Cd = function (a) {
        for (var b = -1, c = 0; c < a.length; c++) {
            var d = parseInt(a.charAt(c), 10);
            if (isNaN(d)) throw Error("Invalid positive base 10 integer string");
            0 > b && d && (b = c)
        }
        return a.substr(b, a.length)
    };
    Dd.prototype.toString = function () {
        return this.U
    };
    Dd.prototype.add = function (a) {
        if (0 > a || Math.floor(a) != a) throw Error("Value must be a positive integer");
        var b = a + ""
            , c = Math.max(b.length, this.U.length);
        a = [];
        for (var d = 0, e = 0; e < c; e++) {
            var f = d + parseInt(e < b.length ? b.charAt(b.length - 1 - e) : "0", 10) + parseInt(e < this.U.length ? this.U.charAt(this.U.length - 1 - e) : "0", 10);
            10 <= f ? (d = 1, f -= 10) : d = 0;
            a.push(f)
        }
        b = 0 < d ? "1" : "";
        for (e = a.length - 1; 0 <= e; e--) b += a[e];
        this.U = b
    };
    var Ed = function (a, b) {
        if (b.U.length < a.U.length) return !0;
        if (b.U.length > a.U.length) return !1;
        for (var c = 0; c < b.U.length; c++) {
            var d = parseInt(a.U.charAt(c), 10)
                , e = parseInt(b.U.charAt(c), 10);
            if (d < e) return !1;
            if (d > e) break
        }
        return !0
    };
    var gd = function (a) {
            this.buffer = a;
            this.ng = new DataView(a.buffer, a.byteOffset);
            this.offset = 0
        }
        , hd = function (a) {
            return a.buffer[a.offset++]
        }
        , id = function (a) {
            var b = a.ng.getUint16(a.offset);
            a.offset += 2;
            return b
        }
        , J = function (a) {
            var b = a.ng.getUint32(a.offset);
            a.offset += 4;
            return b
        }
        , Fd = function (a) {
            var b = J(a);
            a = J(a);
            return 4294967296 * b + a
        }
        , Gd = function (a, b) {
            var c = a.buffer.subarray(a.offset, a.offset + b);
            a.offset += b;
            return c
        }
        , K = function (a, b) {
            a.offset += b
        };
    var Id = function (a) {
            this.og = a;
            this.Me = this.Y = this.Uc = this.mode = this.me = 0;
            this.Xe = new Hd(this);
            this.Ye = new Hd(this);
            this.Xb = [];
            this.reset()
        }
        , Jd = function (a) {
            return a.Uc + a.Y
        }
        , Kd = function () {
            this.Tb = 0
        };
    Kd.prototype.set = function (a) {
        this.Tb = a
    };
    Kd.prototype.get = function () {
        return this.Tb
    };
    var Ld = function () {
        this.Le = this.eg = this.s = 0
    };
    Ld.prototype.clear = function () {
        this.s = 0
    };
    Ld.prototype.update = function () {
        this.s = 2 === this.s ? 1 : 0
    };
    Ld.prototype.matches = function (a, b) {
        return 0 !== this.s && a === this.eg && b === this.Le
    };
    var Md = function () {
        this.timestamp = this.tb = 0;
        this.md = !1
    };
    Md.prototype.reset = function () {
        this.timestamp = this.tb = 0;
        this.md = !1
    };
    var Nd = function (a) {
            this.Oa = [];
            for (var b = 0; 15 >= b; b++) {
                this.Oa[b] = [];
                for (var c = 0; 32 >= c; c++) this.Oa[b][c] = new Md
            }
            this.K = this.aa = this.ca = 0;
            this.style = new Kd;
            this.O = a;
            this.vd = 0
        }
        , Pd = function (a) {
            for (var b = "", c = Jd(a.O), d = c, e = 1; 15 >= e; ++e) {
                for (var f = "", g = !1, h = 1; 32 >= h; ++h) {
                    var l = a.Oa[e][h];
                    if (0 !== l.tb) {
                        var n = String.fromCharCode(l.tb);
                        " " !== n && (g = !0);
                        var f = f + n
                            , p = l.timestamp;
                        p < c && (c = p);
                        p > d && (d = p);
                        3 === a.style.Tb ? (!l.md && " " === n && g && 32 > h && Od(a.O.og, c, c, b ? b + "\n" + f : f), l.md = !0) : l.reset()
                    }
                }
                f && (b = b ? b + "\n" + f : f)
            }
            b && Od(a.O.og
                , c, d, b)
        };
    Nd.prototype.reset = function (a) {
        for (var b = 0; 15 >= b; b++)
            for (var c = 0; 32 >= c; c++) this.Oa[b][c].reset();
        this.vd = a;
        this.K = 0;
        this.aa = this.ca = 1
    };
    var Qd = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632]
        , Rd = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251]
        , Sd = function (a) {
            return a.Oa[a.ca][a.aa]
        }
        , Td = function (a, b, c) {
            2 <= b && 1 < a.aa && (--a.aa, Sd(a)
                .tb = 0);
            var d = Sd(a);
            d.timestamp = Jd(a.O);
            a: {
                switch (b) {
                case 0:
                    b = Qd[(c & 127) - 32];
                    break a;
                case 1:
                    b = Rd[c & 15];
                    break a
                }
                b = 0
            }
            d.tb = b;
            32 > a.aa && a.aa++
        }
        , Ud = function (a, b, c, d) {
            for (var e = 0; e < d; e++)
                for (var f = 0; 32 >= f; f++) {
                    var g = a.Oa[b + e][f]
                        , h = a.Oa[c + e][f];
                    g.tb = h.tb;
                    g.timestamp = h.timestamp;
                    g.md = h.md
                }
        }
        , Vd = function (a, b, c) {
            for (var d = 0; d < c; d++)
                for (var e = 0; 32 >= e; e++) a.Oa[b + d][e].reset()
        }
        , Wd = function (a) {
            a.ca = 0 < a.K ? a.K : 1;
            a.aa = 1;
            Vd(a, 0, 15)
        }
        , Xd = function (a) {
            this.O = a;
            this.Pe = 0;
            this.style = new Kd;
            this.tf = new Nd(a);
            this.uf = new Nd(a);
            this.V = new Nd(a);
            this.Ra = this.tf;
            this.Jc = this.uf;
            this.H = this.Ra
        };
    Xd.prototype.reset = function (a, b) {
        this.Pe = b;
        this.style.set(2);
        this.Ra = this.tf;
        this.Jc = this.uf;
        this.H = this.Ra;
        var c = (a << 2) + (b << 1) + 0;
        this.tf.reset(c);
        this.uf.reset(c);
        this.V.reset((a << 2) + (b << 1) + 1)
    };
    var Yd = function (a, b) {
            var c = a.Ra;
            switch (a.style.get()) {
            case 4:
                if (0 < c.K) break;
            case 1:
            case 2:
                Pd(c), Wd(a.Ra), Wd(a.Jc), c.ca = 15, c.K = b
            }
            a.style.set(3);
            a.H = c;
            a.H.style = a.style;
            a.O.mode = 1 << c.vd;
            c.aa = 1;
            c.K !== b && (c.K > b ? (Pd(c), Vd(c, c.ca - c.K, b)) : c.ca < b && (b = c.K), c.K = b)
        }
        , Zd = function (a) {
            a.style.set(1);
            a.H = a.Jc;
            a.H.K = 0;
            a.H.style = a.style;
            a.O.mode = 1 << a.H.vd
        }
        , $d = function (a) {
            a.style.set(4);
            a.H = a.V;
            a.H.style = a.style;
            a.O.mode = 1 << a.H.vd
        }
        , Hd = function (a) {
            this.O = a;
            this.ec = new Ld;
            this.$e = 0;
            this.Xd = new Xd(a);
            this.hg = new Xd(a);
            this.Re = this.Xd
        };
    Hd.prototype.reset = function (a) {
        this.$e = a;
        this.ec.clear();
        this.Re = this.Xd;
        this.Xd.reset(a, 0);
        this.hg.reset(a, 1)
    };
    var be = function (a, b, c) {
        a.ec.update();
        b = ae(b, c, a.ec);
        switch (b.result) {
        case 0:
            return;
        case 1:
        case 2:
            return
        }
        var d = b.Vd;
        c = b.Wd;
        if (32 <= d || !d) a.O.mode & a.O.me && (b = d, b & 128 && (b = 127), c & 128 && (c = 127), a = a.Re.H, b & 96 && Td(a, 0, b), c & 96 && Td(a, 0, c));
        else if (d & 16) a: if (!a.ec.matches(d, c) && (b = a.ec, b.eg = d, b.Le = c, b.s = 2, b = d & 8 ? a.hg : a.Xd, a.Re = b, a.O.mode = 1 << (a.$e << 2) + (b.Pe << 1) + (4 === b.style.Tb ? 1 : 0), (a.O.mode | 1 << (a.$e << 2) + (b.Pe << 1) + (4 !== b.style.Tb ? 1 : 0)) & a.O.me))
            if (c & 64) {
                a = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(d & 7) << 1 | c >> 5 & 1];
                c = c & 16 ? 4 * ((c & 14) >> 1) : 0;
                d = b.H;
                switch (b.style.get()) {
                case 4:
                    a = d.ca;
                    break;
                case 3:
                    if (a !== d.ca) {
                        if (a < d.K && (a = d.K, a === d.ca)) break;
                        var e = 1 + d.ca - d.K
                            , f = 1 + a - d.K;
                        Ud(d, f, e, d.K);
                        b = e;
                        var g = d.K;
                        f < e ? (e = f + g - e, 0 < e && (b += e, g -= e)) : (e = e + g - f, 0 < e && (g -= e));
                        Vd(d, b, g)
                    }
                }
                d.ca = a;
                d.aa = c + 1
            } else switch (d & 7) {
            case 1:
                switch (c & 112) {
                case 32:
                    Td(b.H, 0, 32);
                    break a;
                case 48:
                    57 === c ? (b = b.H, Sd(b)
                        .tb = 0, 32 > b.aa && b.aa++) : Td(b.H, 1, c & 15);
                    break a
                }
                break;
            case 2:
                if (c & 32) {
                    Td(b.H, 2, c & 31);
                    break
                }
                break;
            case 3:
                if (c & 32) {
                    Td(b.H, 3, c & 31);
                    break
                }
                break;
            case 4:
            case 5:
                if (32 <=
                    c && 47 >= c) {
                    switch (c) {
                    case 32:
                        Zd(b);
                        break;
                    case 33:
                        b = b.H;
                        1 < b.aa && (--b.aa, Sd(b)
                            .tb = 0);
                        break;
                    case 36:
                        b = b.H;
                        a = Sd(b);
                        for (c = 0; 15 >= c; c++)
                            for (d = 0; 32 >= d; d++)
                                if (b.Oa[c][d] === a) {
                                    for (; 32 >= d; d++) b.Oa[c][d].reset();
                                    break
                                }
                        break;
                    case 37:
                        Yd(b, 2);
                        break;
                    case 38:
                        Yd(b, 3);
                        break;
                    case 39:
                        Yd(b, 4);
                        break;
                    case 40:
                        Td(b.H, 0, 32);
                        break;
                    case 41:
                        b.style.set(2);
                        b.H = b.Ra;
                        b.H.K = 0;
                        b.H.style = b.style;
                        b.O.mode = 1 << b.H.vd;
                        break;
                    case 42:
                        a = b.V;
                        a.K = 15;
                        a.style.set(4);
                        Wd(a);
                        $d(b);
                        break;
                    case 43:
                        $d(b);
                        break;
                    case 44:
                        a = b.Ra;
                        switch (b.style.get()) {
                        case 1:
                        case 2:
                        case 3:
                            Pd(a)
                        }
                        Vd(a
                            , 0, 15);
                        break;
                    case 45:
                        b: {
                            a = b.H;
                            switch (b.style.get()) {
                                default:
                                case 2:
                                case 1:
                                    break b;
                            case 4:
                                    if (15 > a.ca) {
                                    ++a.ca;
                                    a.aa = 1;
                                    break b
                                }
                            case 3:
                            }
                            2 > a.K && (a.K = 2, a.ca < a.K && (a.ca = a.K));
                            b = a.ca - a.K + 1;
                            Pd(a);
                            Ud(a, b, b + 1, a.K - 1);
                            Vd(a, a.ca, 1)
                        }
                        break;
                    case 46:
                        Vd(b.Jc, 0, 15);
                        break;
                    case 47:
                        Pd(b.Ra), a = b.Jc, b.Jc = b.Ra, b.Ra = a, Zd(b)
                    }
                    break
                }
                break;
            case 7:
                switch (c) {
                case 33:
                case 34:
                case 35:
                    b = b.H, 32 < (b.aa += c & 3) && (b.aa = 32)
                }
            }
    };
    Id.prototype.clear = function () {
        this.Me = this.Uc = this.mode = 0;
        this.Xb = [];
        this.reset()
    };
    Id.prototype.reset = function () {
        this.mode = 0;
        this.Xe.reset(0);
        this.Ye.reset(1)
    };
    var ce = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139
, 12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255]
        , ae = function (a, b, c) {
            if (255 === a && 255 === b || !a && !b) return {
                Vd: a
                , Wd: b
                , result: 0
            };
            a = ce[a];
            b = ce[b];
            if (a & 128) {
                if (!(b & 128) && 0 !== c.s && c.Le === b) return {
                    Vd: a
                    , Wd: b
                    , result: 1
                }
            } else if (b & 128 && 1 <= a && 31 >= a) return {
                Vd: a
                , Wd: b
                , result: 2
            };
            return {
                Vd: a
                , Wd: b
                , result: 3
            }
        }
        , de = function (a, b, c) {
            255 === b && 255 === c || !b && !c ? (45 === ++a.Me && a.reset(), a.Xe.ec.clear(), a.Ye.ec.clear()) : (a.Me = 0, be(a.Xe, b, c))
        };
    Id.prototype.decode = function () {
        this.Xb.sort(function (a, b) {
            var e = a.time - b.time;
            return 0 === e ? a.gh - b.gh : e
        });
        for (var a = 0; a < this.Xb.length; a++) {
            var b = this.Xb[a];
            this.Uc = b.time;
            0 === b.type ? de(this, b.jg, b.kg) : 1 === b.type && this.me & 496 && be(this.Ye, b.jg, b.kg)
        }
        this.Xb.length = 0
    };
    var ee = function (a) {
            this.buffer = new Uint8Array(new ArrayBuffer(a ? a : 2E4));
            this.offset = 0
        }
        , fe = function (a) {
            return a.buffer.subarray(0, a.offset)
        }
        , O = function (a, b) {
            N(a, [b >> 24, b >> 16, b >> 8, b])
        }
        , N = function (a, b) {
            var c = b.length;
            if (!(a.offset + c <= a.buffer.length)) {
                for (var d = a.buffer.length; d < a.offset + c;) d *= 2;
                d = new Uint8Array(new ArrayBuffer(d));
                d.set(a.buffer, 0);
                a.buffer = d
            }
            a.buffer.set(b, a.offset);
            a.offset += c
        };
    var ge = function (a) {
        this.name = a
    };
    ge.prototype.parse = function () {};
    var P = function (a) {
        this.name = a;
        this.value = null
    };
    u(P, ge);
    P.prototype.parse = function (a) {
        this.value = parseInt(a, 10)
    };
    var Q = function (a, b) {
        this.name = a;
        this.value = b || null
    };
    u(Q, ge);
    Q.prototype.parse = function (a) {
        this.value = a
    };
    var he = function (a) {
        this.name = a;
        this.value = null
    };
    u(he, ge);
    he.prototype.parse = function (a) {
        this.value = "true" === a.toLowerCase()
    };
    var ie = function (a) {
        P.call(this, a)
    };
    u(ie, P);
    ie.prototype.parse = function (a) {
        if (a = a.match(Cb)) {
            var b = !(a[6] || a[7] || a[8]);
            if (b && !(a[2] || a[3] || a[4]) || b && a[5]) a = null;
            else {
                var b = parseInt(a[2], 10) || 0
                    , c = parseInt(a[3], 10) || 0
                    , d = parseInt(a[4], 10) || 0
                    , e = parseInt(a[6], 10) || 0
                    , f = parseInt(a[7], 10) || 0
                    , g = parseFloat(a[8]) || 0;
                a = a[1] ? new Db(-b, -c, -d, -e, -f, -g) : new Db(b, c, d, e, f, g)
            }
        } else a = null;
        this.value = 60 * (60 * (24 * a.xb + a.Ab) + a.Hb) + a.Kb
    };
    var je = function (a) {
        this.name = a;
        this.value = null
    };
    u(je, ge);
    var ke = {
        PLAYREADY: "9A04F079-9840-4286-AB92-E65BE0885F95"
        , WIDEVINE: "EDEF8BA9-79D6-4ACE-A3C8-27DCD51D21ED"
        , Oi: "URN:MPEG:DASH:MP4PROTECTION:2011"
    };
    je.prototype.parse = function (a) {
        a = a.toUpperCase();
        for (var b in ke)
            if (ke.hasOwnProperty(b) && 0 <= a.indexOf(ke[b])) {
                this.value = ke[b];
                break
            }
    };
    var le = function (a) {
        this.name = a;
        this.value = null
    };
    u(le, ge);
    le.prototype.parse = function (a) {
        a = a.toUpperCase();
        0 <= a.indexOf("9A04F079-9840-4286-AB92-E65BE0885F95") ? this.value = sd : 0 <= a.indexOf("EDEF8BA9-79D6-4ACE-A3C8-27DCD51D21ED") && (this.value = td)
    };
    var me = function (a, b) {
        for (var c in b)
            if (b.hasOwnProperty(c) && b[c] instanceof ge) {
                var d = b[c]
                    , e = a.getNamedItem(d.name);
                e && d.parse(e.value)
            }
    };
    var ne = function (a) {
        y.call(this);
        this.Ki = a;
        this.gf = this.Wc = null;
        this.Aa = 0;
        this.f = new D;
        C(this.f, "success", this.wd, !1, this);
        C(this.f, "error", this.nc, !1, this);
        C(this.f, "timeout", this.fh, !1, this);
        C(this.f, "ready", this.Ef, !1, this)
    };
    u(ne, y);
    ne.prototype.F = function () {
        this.f.I();
        ne.B.F.call(this)
    };
    ne.prototype.load = function (a) {
        this.Wc = a.url;
        this.gf = a.headers;
        this.f.Ud = a.withCredentials;
        this.f.sb = Math.max(0, a.timeoutInterval);
        this.Aa = 0;
        this.f.send(this.Wc, void 0, void 0, this.gf)
    };
    ne.prototype.abort = function () {
        this.f.abort()
    };
    var oe = function (a) {
        return new H(a.Wc, a.f.gb, Ec(a.f), a.f.getAllResponseHeaders(), Gc(a.f))
    };
    k = ne.prototype;
    k.wd = function (a) {
        this.Pc(Gc(a.target))
    };
    k.nc = function () {
        408 === Ec(this.f) ? this.fh() : this.Pc(null)
    };
    k.fh = function () {
        this.Aa++;
        3 < this.Aa && this.Pc(null)
    };
    k.Ef = function () {
        0 < this.Aa && this.f.send(this.Wc, void 0, void 0, this.gf)
    };
    k.Pc = function (a) {
        this.Aa = 0;
        this.Ki.Ib(a)
    };
    var pe = function (a) {
        ne.call(this, a);
        this.b = null
    };
    u(pe, ne);
    pe.prototype.Hc = function (a, b) {
        this.b = a;
        var c = new G;
        c.url = this.Wc = b;
        c.setResponse = this.Pc.bind(this);
        a.updateManifestRequestInfo && a.updateManifestRequestInfo(c);
        c.skipRequest || this.load(c)
    };
    pe.prototype.Pc = function (a) {
        a && this.b && this.b.processManifest && (a = this.b.processManifest(a));
        pe.B.Pc.call(this, a)
    };
    var qe = function (a) {
            if (a[7] << 8 | 1 !== a[6]) return A(md, "PlayReady header object is not valid"), null;
            for (var b = a[9] << 8 | a[8], b = b + 10, c = "", d = 10; d < b; d += 2) c += String.fromCharCode(a[d + 1] << 8 | a[d]);
            d = b = null;
            for (c = (new DOMParser)
                .parseFromString(c.trim(), "text/xml")
                .childNodes[0].firstElementChild.firstElementChild; null != c; c = c.nextElementSibling) "LA_URL" === c.nodeName ? d = c.textContent : "KID" === c.nodeName && (b = ud(window.atob(c.textContent)));
            return b ? {
                systemId: sd
                , gd: a
                , rd: new rd(b, !0)
                , url: d
                , ke: 8
            } : (A(md, "PlayReady rights management header does not have KID")
                , null)
        }
        , re = function (a) {
            a = ud(window.atob(a.trim()));
            return qe(a)
        }
        , R = function (a) {
            this.host = a;
            this.Nc = this.hc = this.uri = null;
            this.ba = !1;
            this.duration = -1;
            this.g = [];
            this.jf = []
        };
    R.prototype.getStreamCount = function () {
        return this.g.length
    };
    R.prototype.getStreamCount = R.prototype.getStreamCount;
    R.prototype.enableStream = function (a, b) {
        var c = this.g[a];
        c.index = -1;
        c.L = -1;
        c.T = !0;
        c.enabled = b;
        c.xa = !1;
        this.jf[a] = []
    };
    R.prototype.enableStream = R.prototype.enableStream;
    R.prototype.isStreamEnabled = function (a) {
        return this.g[a].enabled
    };
    R.prototype.isStreamEnabled = R.prototype.isStreamEnabled;
    R.prototype.getQualityLevel = function (a) {
        return this.g[a].L
    };
    R.prototype.getQualityLevel = R.prototype.getQualityLevel;
    R.prototype.getStreamInfo = function (a) {
        a = this.g[a];
        for (var b = [], c = 0; c < a.A.length; c++) b.push(a.A[c].da);
        return new I(a.codecs, a.mimeType, b, a.language, a.name, a.role)
    };
    R.prototype.getStreamInfo = R.prototype.getStreamInfo;
    k = R.prototype;
    k.Ib = function () {
        for (var a = null, b = 0; b < this.g.length; b++) {
            var c = this.g[b];
            if (1 === c.type)
                if (MediaSource.isTypeSupported('audio/mp4; codecs="mp4a.a6"'))
                    if (vd(c.codecs)) {
                        a = c;
                        break
                    } else a || (a = c);
            else if (!vd(c.codecs)) {
                a = c;
                break
            }
        }
        a && (a.enabled = !0);
        for (b = 0; b < this.g.length; b++)
            if (c = this.g[b], 2 === c.type) {
                c.enabled = !0;
                break
            }
        if (this.host.onManifestReady) this.host.onManifestReady();
        this.Nc.onManifestReady()
    };
    k.load = function (a) {
        this.Nc = a;
        this.Hc()
    };
    k.Hc = function () {
        var a = this.host.url;
        this.uri = new E(a);
        this.hc = new pe(this);
        this.hc.Hc(this.host, a)
    };
    k.Ub = function () {
        this.hc && (this.hc.I(), this.hc = null)
    };
    k.xe = function (a, b, c) {
        a = this.g[a];
        a.L = b;
        se(a.A[a.L]) && (a.xa = !0);
        te(c)
    };
    k.updateLicenseRequestInfo = function () {};
    k.sg = function () {
        return this.ba ? -1 : this.duration
    };
    k.Da = function (a) {
        a = this.g[a];
        var b = a.L;
        if (0 > b) return null;
        a = a.A[b];
        var c = a.h;
        if (0 === c.length) return null;
        var b = c[0].time
            , d = c.length - 1
            , c = c[d].time + c[d].duration;
        this.ba && (c -= 20, c < b && (c = b));
        return {
            start: b - a.M
            , end: c - a.M
        }
    };
    k.seek = function (a, b) {
        var c = this.g[a]
            , d = c.A[c.L]
            , e = d.h
            , f = this.Da(a);
        if (!f) return !1;
        b < f.start && (b = f.start);
        b > f.end && (b = f.end);
        b += d.M;
        for (d = e.length - 1; 0 <= d; d--)
            if (b >= e[d].time) return c.index = d, !0;
        return !1
    };
    k.Db = function (a) {
        a = this.g[a];
        var b = a.index + 1;
        return b < a.A[a.L].h.length ? (a.index = b, !0) : !1
    };
    k.Cb = function (a) {
        var b = this.g[a];
        a = b.index;
        b = b.A[b.L].h;
        return !this.ba && a === b.length - 1
    };
    k.getSegmentInterval = function (a) {
        var b = this.g[a]
            , c = b.L;
        return 0 <= c && (a = b.index, 0 <= a && (b = b.A[c], c = b.h, a < c.length)) ? {
            time: c[a].time - b.M
            , duration: c[a].duration
        } : {
            time: 0
            , duration: 0
        }
    };
    k.reset = function (a) {
        this.g[a].index = -1
    };
    k.Og = function (a) {
        return this.g[a].xa
    };
    k.rh = function (a, b) {
        this.g[a].xa = !1;
        65536 < b.length || (this.jf[a][this.g[a].L] = b)
    };
    k.bf = function (a) {
        var b;
        b = this.g[a];
        var c = this.jf[a];
        return (b = b && c ? c[b.L] || null : null) ? (this.g[a].xa = !1, b) : null
    };
    k.updateSegmentRequestInfo = function () {};
    k.processSegment = function () {};
    var se = function (a) {
        return null !== a.Wa || null !== a.D && null !== a.D.Z
    };
    var ue = function () {
        this.j = null;
        this.Cc = this.qc = this.zg = this.Ie = this.ae = this.Cd = this.C = 0
    };
    ue.prototype.Ga = function () {
        return null === this.j
    };
    ue.prototype.ee = function () {
        return this.C >= this.j.length
    };
    ue.prototype.Z = function (a) {
        this.j = a;
        this.Cc = this.qc = this.Ie = this.ae = this.Cd = this.C = 0
    };
    ue.prototype.parse = function () {
        for (var a = this.C; this.C < this.j.length && !(524288 < this.C - a);) {
            for (; this.C < this.j.length && 71 !== this.j[this.C];) this.C++;
            if (this.C + 188 > this.j.length) break;
            var b = this.C + 188
                , c = b - 1;
            this.C++;
            var d = this.j[this.C] & 64
                , e = this.j[this.C] & 31;
            this.C++;
            e = e << 8 | this.j[this.C];
            this.C++;
            var f = (this.j[this.C] & 48) >> 4;
            this.C++;
            f & 2 && (this.C += this.j[this.C] + 1);
            if (0 === e || e === this.Cd)
                if (d && this.C++, c = this.j[this.C], this.C++, 0 == c)
                    for (c = this.C, d = this.j[c] & 15, c++, d = d << 8 | this.j[c], c++, d = c + d - 4, c += 5; c <
                        d;)
                        if (e = this.j[c], c++, e = (e << 8) + this.j[c], c++, 0 === e) c += 2;
                        else {
                            this.Cd = this.j[c] & 31;
                            c++;
                            this.Cd = (this.Cd << 8) + this.j[c];
                            break
                        } else {
                if (2 == c)
                    for (c = this.C, d = this.j[c] & 15, c++, d = d << 8 | this.j[c], c++, d = c + d - 4, c += 5, c += 2, e = this.j[c] & 15, c++, e = e << 8 | this.j[c], c += e + 1; c < d;) {
                        e = this.j[c];
                        c++;
                        f = this.j[c] & 31;
                        c++;
                        f = f << 8 | this.j[c];
                        c++;
                        switch (e) {
                        case 27:
                            this.ae = f;
                            break;
                        case 15:
                            this.Ie = f;
                            break;
                        case 21:
                            this.zg = f
                        }
                        e = this.j[c] & 15;
                        c++;
                        e = e << 8 | this.j[c];
                        c += e + 1
                    }
            } else if (e === this.zg) this.ih(this.C, c, !!d);
            else if (e === this.ae || e === this.Ie) d &&
                this.Hf(this.C), e === this.ae && this.hh(this.C, c);
            this.C = b
        }
    };
    var ve = function (a, b) {
        var c = ((a.j[b] & 14) << 13) / 1.373291015625
            , c = c + (a.j[b + 1] << 6) / 1.373291015625
            , c = c + (a.j[b + 2] & 254) / 5.4931640625
            , c = c + a.j[b + 3] / 703.125;
        return c += (a.j[b + 4] & 254) / 18E4
    };
    ue.prototype.Hf = function (a) {
        if (0 === this.j[a] && 0 === this.j[a + 1] && 1 === this.j[a + 2]) {
            a += 7;
            var b = this.j[a] >> 6 & 3;
            a++;
            var c = this.j[a];
            a++;
            this.C = a + c;
            2 === b ? this.Cc = this.qc = ve(this, a) : 3 === b && (this.qc = ve(this, a), this.Cc = ve(this, a + 5))
        }
    };
    ue.prototype.ih = function () {};
    ue.prototype.hh = function () {};
    var ed = function (a) {
        ue.call(this);
        this.pb = new fd(a)
    };
    u(ed, ue);
    ed.prototype.Z = function (a) {
        ed.B.Z.call(this, a);
        this.pb.clear()
    };
    ed.prototype.qh = function () {};
    ed.prototype.hh = function (a, b) {
        for (var c = 0;;) {
            var d;
            a: {
                d = a;
                for (var e = b, e = e - 3; d <= e;) {
                    if (0 === this.j[d] && 0 === this.j[d + 1]) {
                        if (0 === this.j[d + 2] && 1 === this.j[d + 3]) {
                            d += 4;
                            break a
                        }
                        if (1 === this.j[d + 2]) {
                            d += 3;
                            break a
                        }
                    }
                    d++
                }
                d = -1
            }
            e = 0 <= d;
            if (0 < this.pb.ob || 6 === c) {
                var c = e ? d - 1 : b
                    , f = this.pb;
                f.ob + (c - a + 1) <= f.Ma.length || jd(this.pb, this.qc);
                this.pb.append(this.j.subarray(a, c + 1))
            }
            if (!e) break;
            jd(this.pb, this.qc);
            a = d;
            c = this.j[a++] & 31
        }
    };
    var we = function () {};
    t("cast.player.core.CurrentTimeCallback", we);
    we.prototype.Ec = function () {};
    var ye = function () {};
    t("cast.player.core.PlayerCallbacks", ye);
    ye.prototype.mc = function () {};
    ye.prototype.dh = function () {};
    ye.prototype.Pg = function () {};
    var Ae = function (a, b, c, d) {
        this.b = a;
        this.l = b;
        this.ab = c;
        this.vb = this.b.initialBandwidth;
        this.Yb = ze(this, this.vb);
        B(this.a, this.l + ": initial " + this.ab[this.Yb]);
        this.Hd = 0;
        this.Ce = null;
        this.Jg = q();
        this.jc = d
    };
    Ae.prototype.a = x("cast.player.core.QualityManager");
    Ae.prototype.I = function () {
        Be(this, !0)
    };
    var ze = function (a, b) {
        for (var c = -1, d = Number.MAX_VALUE, e = 0, f = 0; f < a.ab.length; f++) {
            if (b >= a.ab[f]) {
                var g = b - a.ab[f];
                g < d && (c = f, d = g)
            }
            a.ab[e] > a.ab[f] && (e = f)
        }
        return 0 > c ? e : c
    };
    Ae.prototype.Zf = function (a, b) {
        var c = q();
        if (!a && null !== this.Ce && c - this.Ce < 2E3 * (b || 0)) return this.Yb;
        this.Ce = c;
        c = ze(this, .7 * this.vb);
        this.b.getQualityLevel && (c = this.b.getQualityLevel(this.l, c));
        c !== this.Yb && (B(this.a, this.l + ": from " + this.ab[this.Yb] + " to " + this.ab[c]), Be(this, !0), this.Yb = c);
        return this.Yb
    };
    var Be = function (a, b) {
        var c = q() - a.Jg;
        if (b || !(3E5 > c)) {
            a: {
                var d = a.jc
                    , e;
                if (nd(d)) d = "Audio", e = 2E5;
                else if (od(d)) d = "Video", e = 1E6;
                else break a;
                e = Math.floor(a.ab[a.Yb] / e);
                9 < e && (e = 9);
                Bd("Cast.MPL." + d + "Bitrate" + e, c)
            }
            a.Jg = q()
        }
    };
    var Ce = function () {};
    t("cast.player.core.ProcessSourceDataCallback", Ce);
    Ce.prototype.re = function () {};
    var De = function (a, b, c, d, e) {
        y.call(this);
        this.b = a;
        this.vi = e;
        this.vc = c;
        this.fa = d;
        this.l = b;
        this.Ee = !1;
        this.la = this.va = this.Jb = null;
        this.yb = new Hc;
        this.Bc = 0;
        this.createBuffer()
    };
    u(De, y);
    k = De.prototype;
    k.F = function () {
        this.yb.clear();
        cc(this.la, "updateend", this.eh, !1, this);
        "closed" !== this.fa.readyState && this.fa.removeSourceBuffer(this.la);
        De.B.F.call(this)
    };
    k.a = x("cast.player.core.SourceBufferManager");
    k.createBuffer = function () {
        null === this.la && "open" === this.fa.readyState && (this.la = this.fa.addSourceBuffer(this.vc.mimeType + '; codecs="' + this.vc.codecs + '"'), C(this.la, "updateend", this.eh, !1, this), Ee(this))
    };
    k.Ta = function (a) {
        var b = this.Bc + (this.Jb ? this.Jb.duration : 0);
        return this.va ? this.va.time + this.va.duration - a + b : b
    };
    k.reset = function () {
        this.Jb = this.va = null;
        this.yb.clear();
        this.Bc = 0;
        this.nd() ? Fe(this) : (B(this.a, this.l + ": queue abort"), this.yb.enqueue({
            Ff: 0
            , Je: null
        }));
        this.nd() ? Ge(this) : (B(this.a, this.l + ": queue remove"), this.yb.enqueue({
            Ff: 1
            , Je: null
        }))
    };
    k.nd = function () {
        return null !== this.la && !this.Ee && this.yb.Ga()
    };
    var Ee = function (a) {
        for (; !a.yb.Ga();) {
            var b = Jc(a.yb)
                , c = b.Je;
            switch (b.Ff) {
            case 2:
                B(a.a, a.l + ": dequeue append");
                a.Bc -= c.interval.duration;
                He(a, c.data, c.interval, c.M, c.T);
                return;
            case 1:
                B(a.a, a.l + ": dequeue remove");
                Ge(a);
                return;
            case 0:
                B(a.a, a.l + ": dequeue abort"), Fe(a)
            }
        }
    };
    De.prototype.eh = function () {
        for (var a = this.la.buffered, b = 0; b < a.length; b++) B(this.a, this.l + ": " + a.start(b) + " - " + a.end(b));
        B(this.a, this.l + ": updateend");
        null !== this.Jb && 0 !== this.Jb.duration && (this.va = this.Jb);
        this.Jb = null;
        this.Ee = !1;
        Ee(this)
    };
    var He = function (a, b, c, d, e) {
            e ? (Fe(a), e = Ie(a, c.time), a.la.timestampOffset = e - d, B(a.a, a.l + ": timestampOffset = " + a.la.timestampOffset)) : e = Ie(a, c.time);
            B(a.a, a.l + ": append");
            a.Ee = !0;
            a.la.appendBuffer(b);
            a.Jb = {
                time: e
                , duration: c.duration
            };
            a.vi.re(a.vc.mimeType, b, a.la.timestampOffset, e, c.duration)
        }
        , Fe = function (a) {
            "open" === a.fa.readyState ? (B(a.a, a.l + ": abort"), a.la.abort()) : A(a.a, a.l + ": unable to abort")
        }
        , Ge = function (a) {
            B(a.a, a.l + ": remove");
            a.Ee = !0;
            a.la.remove(0, a.fa.duration)
        };
    De.prototype.append = function (a, b, c, d) {
        this.nd() ? He(this, a, b, c, d) : (B(this.a, this.l + ": queue append"), this.Bc += b.duration, this.yb.enqueue({
            Ff: 2
            , Je: {
                data: a
                , interval: {
                    time: b.time
                    , duration: b.duration
                }
                , M: c
                , T: d
            }
        }))
    };
    var Ie = function (a, b) {
        if (!a.va || a.b.Wh) return b;
        for (var c = b, d = a.la.buffered, e = d.length - 1; 0 <= e; e--) {
            var f = d.end(e);
            if (b >= d.start(e) && b <= f) {
                b = f;
                break
            }
            if (f < b) {
                b = f;
                break
            }
        }
        B(a.a, "adjustTime: " + c + " : " + b);
        return b
    };
    var Je = function () {};
    Je.prototype.a = x("cast.player.core.WebvttParser");
    var Ke = /\n\s*\n/
        , Le = /MPEGTS:([\d]*)/
        , Me = /align:(start|middle|end)/
        , Ne = /position:(\d*)%/
        , Oe = /size:(\d*)%/
        , Pe = /LOCAL:((?:[\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3})/
        , Qe = /((?:[\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3})[\t ]+--\x3e[\t ]+((?:[\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3})/;
    Je.prototype.parse = function (a, b) {
        for (var c = a.trim()
                .split(Ke), d = b, e = 0, f = 0, g = c[0].split("\n"), h = 0; h < g.length; h++)
            if (0 === g[h].indexOf("X-TIMESTAMP-MAP")) {
                var l = g[h].match(Pe);
                l && (e = Re(this, l[1]));
                (l = g[h].match(Le)) && (f = parseInt(l[1], 10) / 9E4);
                break
            }
        b = d + (f - e);
        if (isNaN(b)) return A(this.a, "invalid time offset"), [];
        d = [];
        for (e = 1; e < c.length; e++)
            if (c[e]) {
                for (var n = c[e], l = b, p = null, h = g = f = null, r = n.split("\n"), S = void 0, S = 0; S < r.length; S++)
                    if (p = r[S].match(Qe)) {
                        f = r[S].match(Me);
                        g = r[S].match(Ne);
                        h = r[S].match(Oe);
                        break
                    }
                p ?
                    (n = Re(this, p[1]), p = Re(this, p[2]), r = r.slice(S + 1)
                        .join("\n"), isNaN(n) || isNaN(p) || !r ? (A(this.a, "skipped cue, begin=" + n + ", end=" + p + ", text=" + r), f = null) : (l = new VTTCue(n + l, p + l, r), f && (l.align = f[1]), g && (l.position = parseInt(g[1], 10)), h && (l.size = parseInt(h[1], 10)), f = l)) : (A(this.a, "no timestamps in cue=" + n), f = null);
                f && d.push(f)
            }
        return d
    };
    var Re = function (a, b) {
        var c = b.split(":");
        if (3 < c.length) return A(a.a, "unexpected time format=" + b), 0;
        for (var d = 0, e = 0; e < c.length; e++) d = 60 * d + parseFloat(c[e]);
        return d
    };
    var Se = function () {
        this.$d = 30
    };
    Se.prototype.a = x("cast.player.core.TtmlParser");
    var Te = /([0-9]*\.?[0-9]+)?(h|ms|m|s|f)/
        , Ue = function (a, b) {
            for (var c = 0; c < a.length; c++)
                if (a[c].localName === b) return a[c];
            return null
        }
        , Ve = function (a, b) {
            var c = b.split(":");
            if (1 === c.length) {
                var d = 0;
                if (c = c[0].match(Te)) {
                    var e = parseFloat(c[1]);
                    switch (c[2]) {
                    case "h":
                        d = 3600 * e;
                        break;
                    case "m":
                        d = 60 * e;
                        break;
                    case "s":
                        d = e;
                        break;
                    case "ms":
                        d = e / 1E3;
                        break;
                    case "f":
                        d = e / a.$d
                    }
                } else A(a.a, "unsupported time expression: " + b);
                return d
            }
            d = 3600 * parseInt(c[0], 10) + 60 * parseInt(c[1], 10) + parseFloat(c[2]);
            4 === c.length && (d += parseInt(c[3]
                , 10) / a.$d);
            return d
        }
        , We = function (a) {
            var b = "";
            a = a.childNodes;
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                d.nodeType === Node.TEXT_NODE ? (d = d.textContent.trim()) && (b += d) : "span" === d.localName ? (b += We(d), (d = d.attributes.getNamedItem("tts:fontStyle")) && "italic" === d.value && (b = "<i>" + b + "</i>")) : "br" === d.localName && (b += "\n")
            }
            return b
        };
    Se.prototype.parse = function (a, b) {
        var c = []
            , d = (new DOMParser)
            .parseFromString(a, "text/xml")
            , e = Ue(d.childNodes, "tt");
        if (!e) return A(this.a, "missing tt"), c;
        d = Ue(e.childNodes, "body");
        if (!d) return A(this.a, "missing body"), c;
        (e = e.attributes.getNamedItem("ttp:frameRate")) ? this.$d = parseInt(e.value, 10): (A(this.a, "defaulting frameRate to30"), this.$d = 30);
        d = Ue(d.childNodes, "div");
        if (!d) return A(this.a, "missing div"), c;
        for (e = 0; e < d.childNodes.length; e++) {
            var f = d.childNodes[e];
            if ("p" === f.localName) {
                for (var g = null
                        , h = null, l = We(f), n = 0; n < f.attributes.length; n++) {
                    var p = f.attributes[n];
                    "begin" === p.localName ? g = Ve(this, p.value) + b : "end" === p.localName && (h = Ve(this, p.value) + b)
                }
                l && null !== g && null !== h ? c.push(new VTTCue(g, h, l)) : A(this.a, "skipped cue, begin=" + g + ", end=" + h + ", text=" + a)
            }
        }
        return c
    };
    var Xe = function (a, b, c) {
        y.call(this);
        this.i = b;
        this.Rd = document.createElement("track");
        this.Rd.src = "";
        this.Rd.kind = "captions";
        this.i.appendChild(this.Rd);
        this.wc = this.Rd.track;
        this.wc.mode = "showing";
        this.Oh = a;
        this.Tb = c;
        switch (this.Tb) {
        case "webvtt":
            a = 1;
            break;
        case "ttml":
            a = 2;
            break;
        case "cea608":
            a = 3;
            break;
        default:
            a = 0
        }
        Bd("Cast.MPL.Captions", a);
        this.yd = null;
        "ttml" === c ? this.yd = new Se : "webvtt" === c && (this.yd = new Je);
        this.va = null;
        this.zh = 0
    };
    u(Xe, y);
    Xe.prototype.F = function () {
        Ye(this);
        this.wc.mode = "disabled";
        this.i.removeChild(this.Rd);
        Xe.B.F.call(this)
    };
    var Ye = function (a) {
        var b = a.wc.cues;
        if (b)
            for (; 0 < b.length;) a.wc.removeCue(b[0])
    };
    k = Xe.prototype;
    k.createBuffer = function () {};
    k.reset = function () {
        Ye(this);
        this.va = null
    };
    k.nd = function () {
        return !0
    };
    k.append = function (a, b, c, d) {
        d && (this.zh = b.time - c);
        if (this.yd) {
            var e = 0;
            switch (this.Tb) {
            case "ttml":
                e = b.time;
                break;
            case "webvtt":
                e = this.zh
            }
            c = Ze(this);
            d = 0 < c.length ? c[c.length - 1].startTime : -Infinity;
            for (a = this.yd.parse(decodeURIComponent(escape(String.fromCharCode.apply(null, a))), e); 0 < a.length;) {
                var e = a.pop()
                    , f = !1;
                if (e.startTime < d || .1 >= Math.abs(e.startTime - d))
                    for (var g = c.length - 1; 0 <= g; g--)
                        if (c[g].text === e.text && .1 >= Math.abs(c[g].startTime - e.startTime) && .1 >= Math.abs(c[g].endTime - e.endTime)) {
                            f = !0;
                            break
                        }
                f ||
                    this.addCue(e)
            }
        }
        this.va = b
    };
    k.Ta = function (a) {
        return this.va ? this.va.time + this.va.duration - a : 0
    };
    k.addCue = function (a) {
        this.wc.addCue(a)
    };
    var Ze = function (a) {
        for (var b = [], c = a.wc.cues, d = a.Oh.Ec(), e = 0; e < c.length;) {
            var f = c[e];
            f.endTime < d ? a.wc.removeCue(f) : (b.push(f), e++)
        }
        return b
    };
    Xe.prototype.parse = function (a, b) {
        for (var c = this.yd.parse(a, b); 0 < c.length;) this.addCue(c.pop())
    };
    var $e = function (a, b, c, d) {
        Xe.call(this, a, b.mediaElement, c);
        a = new G;
        a.url = d;
        b.updateCaptionsRequestInfo && b.updateCaptionsRequestInfo(a);
        this.xh = new ne(this);
        this.xh.load(a)
    };
    u($e, Xe);
    $e.prototype.F = function () {
        this.xh.I();
        $e.B.F.call(this)
    };
    $e.prototype.reset = function () {};
    $e.prototype.Ib = function (a) {
        a && this.parse(a, 0)
    };
    var af = function (a) {
        D.call(this);
        this.yc = null;
        this.Df = a
    };
    u(af, D);
    af.prototype.Qe = function () {
        this.yc && (this.yc.onprogress = null);
        this.yc = af.B.Qe.call(this);
        this.yc.onprogress = this.Df;
        return this.yc
    };
    af.prototype.F = function () {
        this.yc && (this.yc.onprogress = null);
        af.B.F.call(this)
    };
    var bf = function (a, b, c, d, e) {
        y.call(this);
        this.za = a;
        this.b = b;
        this.v = c;
        this.l = d;
        c = c.getStreamInfo(d);
        this.Vb = pd(c.role, c.mimeType) ? new Xe(a, b.mediaElement, c.codecs) : new De(b, d, c, e, a);
        switch (c.codecs) {
        case "mp4a.a6":
            a = 1;
            break;
        case "ec-3":
            a = 2;
            break;
        case "mp4a.40.2":
            a = 3;
            break;
        case "mp4a.40.5":
            a = 4;
            break;
        case "mp4a.67":
            a = 5;
            break;
        case "avc1.4d40":
            a = 6;
            break;
        case "avc1.4d401e":
            a = 7;
            break;
        default:
            a = 0
        }
        Bd("Cast.MPL.Codec", a);
        switch (c.mimeType) {
        case "application/ttml+xml":
            a = 1;
            break;
        case "text/vtt":
            a = 2;
            break;
        case "text/mp4":
            a =
                3;
            break;
        case "audio/mp4":
            a = 4;
            break;
        case "video/mp4":
            a = 5;
            break;
        case "video/mp2t":
            a = 6;
            break;
        default:
            a = 0
        }
        Bd("Cast.MPL.MimeType", a);
        Bd("Cast.MPL.StreamType", nd(c.mimeType) ? 1 : od(c.mimeType) ? 2 : pd(c.role, c.mimeType) ? 3 : 0);
        this.ge = !1;
        this.s = 1;
        this.ue = 0;
        this.Be = !1;
        this.ag = this.Aa = 0;
        this.Yc = 400;
        this.dc = this.Fc = this.Gc = this.he = !1;
        this.Ig = this.Ke = 0;
        this.ed = new Hc;
        this.R = new G;
        this.R.setResponse = this.yi.bind(this);
        this.f = new af(this.Df.bind(this));
        uc(this.f);
        C(this.f, "success", this.wd, !1, this);
        C(this.f, "error"
            , this.nc, !1, this);
        C(this.f, "timeout", this.nc, !1, this);
        C(this.f, "ready", this.Ef, !1, this);
        this.Kd = new Ae(b, d, this.v.getStreamInfo(this.l)
            .bitrates, c.mimeType)
    };
    u(bf, y);
    bf.prototype.a = x("cast.player.core.SegmentManager");
    bf.prototype.F = function () {
        this.Vb.I();
        this.Kd.I();
        this.f.I();
        bf.B.F.call(this)
    };
    bf.prototype.yi = function (a, b) {
        a ? cf(this, {
            od: this.dc
            , data: new Uint8Array(a)
        }, b) : this.nc();
        this.he = !1;
        this.Gc && (df(this), this.Gc = !1)
    };
    bf.prototype.Zf = function () {
        ef(this, !0)
    };
    var ef = function (a, b, c) {
            var d = a.v.getQualityLevel(a.l);
            b = a.Kd.Zf(b, c);
            if (b === d) return !1;
            a.ge = !0;
            a.v.xe(a.l, b, a);
            return !0
        }
        , ff = function (a, b, c, d, e) {
            a.Fc ? (B(a.a, a.l + ": segment processed"), a.Fc = !1, a.b.processSegment && a.b.processSegment(a.l, b), a.Vb.append(b, c, d, e)) : B(a.a, a.l + ": not processing");
            a.ed.Ga() || (B(a.a, a.l + ": dequeue segment"), a.Fd(Jc(a.ed)))
        }
        , gf = function (a, b) {
            a.Fc ? (B(a.a, a.l + ": queue segment"), a.ed.enqueue(b)) : a.Fd(b)
        };
    bf.prototype.Fd = function (a) {
        B(this.a, this.l + ": process segment");
        this.Fc = !0;
        this.v.processSegment(this.l, a, this)
    };
    bf.prototype.reset = function () {
        B(this.a, this.l + ": reset");
        this.s = 1;
        this.ue = 0;
        this.Be = !1;
        hf(this);
        this.Fc = this.Gc = !1;
        this.ed.clear();
        this.dc || this.f.abort();
        this.v.reset(this.l);
        this.Vb.reset();
        this.za.mc()
    };
    bf.prototype.wd = function (a) {
        cf(this, {
            od: this.dc
            , headers: this.f.getAllResponseHeaders()
            , data: new Uint8Array(Gc(a.target))
        })
    };
    var cf = function (a, b, c) {
        var d = ba(c) ? c : q() - a.ue;
        c = a.Kd;
        var e = b.data.length;
        0 >= d || (c.b.trackBandwidth && c.b.trackBandwidth(c.l, d, e), Ad("Cast.MPL.Bandwidth", e / d), Ad("Cast.MPL.SegmentStats.Size", e), Ad("Cast.MPL.SegmentStats.Time", d), d = 8E3 * e / d, c.vb = .8 * d + (1 - .8) * c.vb, B(c.a, c.l + ": current=" + d.toFixed(2) + ", average=" + c.vb.toFixed(2)), Be(c), c.Hd = 0);
        hf(a);
        gf(a, b);
        if (a.dc) a.dc = !1, a.v.rh(a.l, b.data);
        else if (a.Be = !1, b = a.Vb.Ta(a.za.Ec()), c = 10 > b, d = a.v.getSegmentInterval(a.l)
            .duration, ef(a, c, d), a.Ke = .8 * b + (1 - .8) * a.Ke
            , 3E5 < q() - a.Ig && (Bd("Cast.MPL.AverageBufferDuration", parseInt(a.Ke, 10)), a.Ig = q()), a.ge) return;
        a.za.mc()
    };
    k = bf.prototype;
    k.Ef = function () {
        this.Gc && (df(this), this.Gc = !1)
    };
    k.nc = function () {
        var a = this.Kd
            , b = q() - this.ue;
        a.b.trackBandwidth && a.b.trackBandwidth(a.l, b, a.Hd);
        0 >= b ? (A(a.a, "bad time on error"), a.vb = 0) : a.vb = 8E3 * a.Hd / b;
        a.Hd = 0;
        a.Ce = null;
        B(a.a, a.l + ": current=" + a.vb.toFixed(2));
        Be(a);
        !this.dc && 0 === this.Aa && ef(this, !0) ? (this.Be = !0, this.za.mc()) : (this.Aa++, this.Aa > this.b.segmentRequestRetryLimit ? (a = this.he ? void 0 : new H(this.R.url, this.f.gb, Ec(this.f), this.f.getAllResponseHeaders(), Gc(this.f)), this.b.Hi ? (hf(this), this.za.mc()) : (this.s = -1, M(this.b, 3, a))) : (this.ag = q(), this.za.mc(this.Yc)))
    };
    k.Df = function (a) {
        this.Kd.Hd = a.loaded
    };
    k.Ta = function (a) {
        return this.Vb.Ta(a)
    };
    k.createBuffer = function () {
        this.Vb.createBuffer()
    };
    var te = function (a) {
            a.ge = !1;
            a.za.Pg();
            if (a.v.Og(a.l)) {
                var b = a.v.bf(a.l);
                if (!b) {
                    a.dc = !0;
                    df(a);
                    return
                }
                gf(a, {
                    od: !0
                    , data: b
                })
            }
            a.za.mc()
        }
        , df = function (a) {
            if (jf(a)) a.Gc = !0;
            else {
                a.ue = q();
                a.v.updateSegmentRequestInfo(a.l, a.R);
                var b = a.v.getSegmentInterval(a.l)
                    .duration;
                a.R.timeoutInterval = Math.max(2E3 * b, 1E4);
                a.R.skipRequest = !1;
                if (a.b.updateSegmentRequestInfo && (a.b.updateSegmentRequestInfo(a.R, a.l), a.R.skipRequest)) {
                    a.he = !0;
                    return
                }
                a.f.Ud = a.R.withCredentials;
                a.f.sb = Math.max(0, a.R.timeoutInterval);
                a.f.send(a.R.url
                    , void 0, void 0, a.R.headers)
            }
        };
    bf.prototype.ld = function () {
        return 0 < this.s || this.Fc || jf(this) || !this.Vb.nd()
    };
    bf.prototype.nf = function () {
        return !this.ge && 2 > this.ed.ac() && !jf(this)
    };
    var jf = function (a) {
        return a.f.ld() || a.he
    };
    bf.prototype.Kf = function () {
        if (0 < this.Aa || this.Be) {
            if (0 < this.Aa) {
                if (q() - this.ag < this.Yc) return;
                this.Yc *= 2
            }
            df(this)
        } else if (1 === this.s) {
            var a = this.za.Ec();
            this.v.seek(this.l, a) ? (B(this.a, this.l + ": seek success " + a), this.s = 2, this.za.dh(this.l), df(this)) : B(this.a, this.l + ": seek failure " + a)
        } else this.v.Db(this.l) && df(this), this.v.Cb(this.l) && (this.s = 0)
    };
    var hf = function (a) {
        a.Aa = 0;
        a.ag = 0;
        a.Yc = 400
    };
    var kf = function (a, b) {
        this.b = a;
        this.kf = !1;
        this.Ne = b;
        this.Bf = this.pi.bind(this);
        this.yf = this.oe.bind(this)
    };
    kf.prototype.cancel = function () {
        this.kf = !0
    };
    kf.prototype.oe = function (a) {
        if (!this.kf) {
            var b = void 0;
            a && a.name && a.message && (b = a.name + ": " + a.message);
            M(this.b, 2, void 0, b)
        }
    };
    kf.prototype.pi = function (a) {
        this.kf || this.Ne(a)
    };
    var lf = function (a, b, c, d, e) {
        kf.call(this, a, b);
        window.crypto.subtle.decrypt({
                name: "AES-CBC"
                , iv: d
            }, c, e)
            .then(this.Bf, this.yf)
    };
    u(lf, kf);
    var mf = function (a) {
            this.Ic = a;
            this.hd = null;
            this.Wf = this.Wb = 0
        }
        , nf = function (a, b) {
            var c = b.length > a.Wb ? b.subarray(0, a.Wb) : b;
            N(a.hd, c);
            a.Wb -= c.length
        };
    mf.prototype.append = function (a, b, c, d) {
        b = (new Uint8Array(b))
            .subarray(c, d);
        if (this.hd) return nf(this, b), 0 === this.Wb && (this.Ic && this.Ic("ID3", fe(this.hd), this.Wf), this.Wb = this.Wf = this.hd = null), 0;
        c = 0;
        73 !== b[c++] || 68 !== b[c++] || 51 !== b[c++] ? c = null : (c += 3, d = b[c++] << 21 | b[c++] << 14 | b[c++] << 7 | b[c++], c += d);
        if (null === c) return 0;
        if (c <= b.length) return this.Ic && this.Ic("ID3", b.subarray(0, c), a), c;
        this.hd = new ee(c);
        this.Wf = a;
        this.Wb = c;
        nf(this, b);
        return 0
    };
    var of = function (a, b, c) {
        kf.call(this, a, b);
        window.crypto.subtle.importKey("raw", c, {
                name: "AES-CBC"
            }, !0, ["decrypt"])
            .then(this.Bf, this.yf)
    };
    u(of, kf);
    var pf = function (a, b) {
        this.Ih = new E(a);
        this.fb = !1 !== b;
        this.s = 0;
        this.le = this.Gb = this.vc = this.tc = null;
        this.Ve = this.Nb = 0;
        this.Se = !1;
        this.Gd = null;
        this.xg = this.wg = !1;
        this.J = {
            Eg: !1
            , ba: !0
            , ff: !1
            , Tf: 0
            , Xf: 0
            , h: []
            , Tc: []
            , sf: []
        }
    };
    pf.prototype.a = x("cast.player.hls.Parser");
    pf.prototype.parse = function (a) {
        var b = a.split("\n");
        for (a = 0; a < b.length; a++)
            if (!qf(this, b[a])) return A(this.a, "failed to parse HLS playlist"), this.J = null;
        if (this.wg && this.xg)
            for (a = 0; a < this.J.Tc.length;) b = this.J.Tc[a].codecs, 0 === b.indexOf("mp4a.") && 0 > b.indexOf(",") ? (A(this.a, "filtered out " + b + " stream"), this.J.Tc.splice(a, 1)) : a++;
        return this.J
    };
    var rf = function (a, b) {
            var c = new E(b);
            c.mb || (b = a.Ih.resolve(c)
                .toString());
            return b
        }
        , qf = function (a, b) {
            b = b.trim();
            if (!b) return !0;
            if ("#" !== b[0]) {
                var c;
                c = b;
                if (3 != a.s && 4 != a.s) sf(a, "URI"), c = !1;
                else {
                    c = rf(a, c);
                    if (3 == a.s) {
                        if (a.Gb) {
                            a.tc.Hg = a.Gb;
                            var d = a.tc
                                , e;
                            if (a.le) e = a.le;
                            else {
                                e = a.tc.Sc;
                                for (var f = new Uint8Array(16), g = 15; 0 <= g; g--) f[g] = e & 255, e >>= 8;
                                e = f
                            }
                            d.pf = e
                        }
                        a.tc.url = c;
                        a.J.h.push(a.tc)
                    } else 4 == a.s && (a.vc.url = c, a.J.Tc.push(a.vc));
                    a.s = 2;
                    c = !0
                }
                return c
            }
            c = "#EXTINF:";
            if (0 === b.indexOf(c)) return d = b.indexOf(","), c = b.substr(c.length, (0 <= d ? d : b.length) - c.length), 2 != a.s && 1 != a.s ? (sf(a, "EXTINF"), c = !1) : (c = parseFloat(c), a.tc = {
                Sc: a.Nb
                , url: ""
                , gg: null
                , na: a.Ve
                , duration: c
                , rg: a.Se
                , Jf: a.Gd
                , Hg: null
                , pf: null
                , T: !1
            }, a.J.Xf += c, a.Ve += c, null !== a.Gd && (a.Gd += 1E3 * c), a.Se = !1, a.Nb += 1, a.s = 3, c = !0), c;
            c = "#EXT-X-KEY:";
            if (0 === b.indexOf(c)) return tf(a, b.substr(c.length));
            if (0 === b.indexOf("#EXT-X-DISCONTINUITY")) return 2 != a.s && 1 != a.s ? (sf(a, "EXT-X-DISCONTINUITY"), c = !1) : (a.Se = !0, a.s = 2, c = !0), c;
            c = "#EXT-X-PROGRAM-DATE-TIME:";
            if (0 === b.indexOf(c)) return c = b.substr(c.length)
                , 2 != a.s && 3 != a.s && 1 != a.s ? (sf(a, "EXT-X-PROGRAM-DATE-TIME"), c = !1) : (d = Date.parse(c), isNaN(d) ? (A(a.a, "cannot parse #EXT-X-PROGRAM-DATE-TIME: " + c), c = !1) : (a.Gd = d, c = a.J.ff = !0)), c;
            c = "#EXT-X-BYTERANGE:";
            if (0 === b.indexOf(c)) return c = b.substr(c.length), 3 != a.s ? (sf(a, "EXT-X-BYTERANGE"), c = !1) : (c = c.split("@"), d = parseInt(c[1], 10), a.tc.gg = {
                start: d
                , end: d + parseInt(c[0], 10) - 1
            }, c = !0), c;
            if (0 === b.indexOf("#EXTM3U")) return 0 != a.s ? (sf(a, "EXTM3U"), c = !1) : (a.s = 1, c = !0), c;
            if (0 === b.indexOf("#EXT-X-ENDLIST")) return 2 != a.s && 1 != a.s ?
                (sf(a, "EXT-X-ENDLIST"), c = !1) : (a.J.ba = !1, c = !0), c;
            c = "#EXT-X-STREAM-INF:";
            if (0 === b.indexOf(c)) return e = b.substr(c.length), 1 != a.s && 2 != a.s ? (sf(a, "EXT-X-STREAM-INF"), c = !1) : (f = e.match("BANDWIDTH=([0-9]+)")) ? (c = parseInt(f[1], 10), d = a.fb ? "video/mp2t" : "audio/mp4", (f = e.match('CODECS="([^"]*)"')) ? (e = f[1], 0 === e.indexOf("mp4a.") && 0 > e.indexOf(",") ? a.wg = !0 : a.xg = !0) : e = "avc1.4d401e,mp4a.40.2", a.vc = {
                name: null
                , url: ""
                , da: c
                , mimeType: d
                , codecs: e
                , lf: !0
                , language: null
            }, a.J.Eg = !0, a.s = 4, c = !0) : (A(a.a, "no BANDWIDTH attribute")
                , c = !1), c;
            c = "#EXT-X-TARGETDURATION:";
            if (0 === b.indexOf(c)) return c = b.substr(c.length), 1 != a.s ? (sf(a, "EXT-X-TARGETDURATION"), c = !1) : (a.J.Tf = parseInt(c, 10), c = !0), c;
            c = "#EXT-X-MEDIA-SEQUENCE:";
            if (0 === b.indexOf(c)) return c = b.substr(c.length), 1 != a.s ? (sf(a, "EXT-X-MEDIA-SEQUENCE"), c = !1) : (a.Nb = parseInt(c, 10), a.s = 1, c = !0), c;
            c = "#EXT-X-MEDIA:";
            if (0 === b.indexOf(c)) a: if (c = b.substr(c.length), 2 != a.s && 1 != a.s) sf(a, "EXT-X-MEDIA"), c = !1;
                else {
                    var h = g = f = e = d = null
                        , l = !1
                        , n = c.match("TYPE=(AUDIO|VIDEO|SUBTITLES|CLOSED-CAPTIONS)");
                    if (null !== n) switch (n[1]) {
                    case "SUBTITLES":
                        d = "webvtt";
                        e = "text/vtt";
                        break;
                    case "AUDIO":
                        d = "mp4a.40.2";
                        e = "audio/mp4";
                        break;
                    default:
                        c = !0;
                        break a
                    }
                    n = c.match('URI="([^"]*)"');
                    null !== n && (f = rf(a, n[1]));
                    n = c.match('LANGUAGE="([^"]*)"');
                    null !== n && (g = n[1]);
                    n = c.match('NAME="([^"]*)"');
                    null !== n && (h = n[1]);
                    n = c.match("DEFAULT=(YES|NO)");
                    null !== n && (l = "YES" === n[1]);
                    f && a.J.sf.push({
                        name: h
                        , url: f
                        , da: 0
                        , mimeType: e
                        , codecs: d
                        , lf: l
                        , language: g
                    });
                    c = !0
                } else c = !0;
            return c
        }
        , sf = function (a, b) {
            A(a.a, "unexpected " + b + ": state " + a.s)
        }
        , tf =
        function (a, b) {
            if (2 != a.s && 3 != a.s && 1 != a.s) return sf(a, "EXT-X-KEY"), !1;
            a.Gb = null;
            a.le = null;
            if (0 <= b.indexOf("METHOD=NONE")) return !0;
            if (0 > b.indexOf("METHOD=AES-128")) return A(a.a, "unsupported KEY"), !1;
            var c = b.match('URI="([^"]*)"');
            c && (a.Gb = rf(a, c[1]));
            if (c = b.match("IV=0[x|X]([0-9a-fA-F]+)")) {
                for (var c = c[1], d = new Uint8Array(16), e = 15, f = c.length; 0 < f; f -= 2, e--) d[e] = parseInt(1 < f ? c.substr(f - 2, 2) : c.substr(0, 1), 16);
                a.le = d
            }
            return !0
        };
    var uf = function () {
        this.Va = -1;
        this.J = null
    };
    k = uf.prototype;
    k.a = x("cast.player.hls.Iterator");
    k.update = function (a) {
        if (!(0 > this.Va)) {
            var b = this.J.h[this.Va]
                , c = a.h
                , d = -1;
            if (this.J.ff && a.ff)
                if (d = b.Jf, null === d) A(this.a, "No program-date-time is found"), d = -1;
                else {
                    for (var e = -1, f = Infinity, g = 0; g < c.length; g++) {
                        var h = c[g];
                        null !== h.Jf && (h = Math.abs(h.Jf - d), h < f && (e = g, f = h))
                    }
                    1E3 < f ? (A(this.a, "Cannot find matching segment using program-date-time"), d = -1) : d = e
                }
            if (0 > d)
                for (var l = b.Sc, f = 0; f < c.length; f++)
                    if (c[f].Sc === l) {
                        d = f;
                        break
                    }
            f = e = 0;
            0 > d ? (A(this.a, "update: " + l + " not found"), 0 < c.length && (c[0].rg = !0, e = b.na + b.duration)
                , c.splice(0, 0, b), d = 0, f = 1) : e = b.na - c[d].na;
            for (; f < c.length; f++) c[f].na += e;
            this.Va = d
        }
        this.J = a
    };
    k.next = function () {
        var a = this.Va + 1;
        return a < this.J.h.length ? (this.Va = a, !0) : !1
    };
    k.Cb = function () {
        return !this.J.ba && this.Va === this.J.h.length - 1
    };
    k.Da = function () {
        var a = this.J.h
            , b = a[0].na
            , c = a.length - 1
            , a = a[c].na + a[c].duration;
        this.J.ba && (a -= 3 * this.J.Tf, a < b && (a = b));
        return {
            start: b
            , end: a
        }
    };
    k.seek = function (a) {
        var b = this.Da();
        if (!b) return !1;
        for (var c = this.J.h, d = 0; d < c.length; d++) c[d].T = !1;
        a < b.start && (a = b.start);
        a > b.end && (a = b.end);
        for (d = c.length - 1; 0 <= d; d--)
            if (a >= c[d].na) return this.Va = d, c[this.Va].T = !0;
        return !1
    };
    var vf = function (a) {
        return 0 > a.Va ? null : a.J.h[a.Va]
    };
    var wf = function (a, b, c) {
        y.call(this);
        this.b = a;
        this.Bd = b;
        this.hb = new pe(this);
        this.$ = null;
        this.Li = this.De.bind(this);
        this.qb = c;
        this.duration = -1;
        this.Ia = null
    };
    u(wf, y);
    k = wf.prototype;
    k.a = x("cast.player.hls.Playlist");
    k.F = function () {
        this.hb.I();
        null !== this.$ && (clearTimeout(this.$), this.$ = null);
        wf.B.F.call(this)
    };
    k.load = function () {
        this.De()
    };
    k.Ub = function () {
        this.duration = -1;
        this.Ia = null;
        this.hb.abort();
        null !== this.$ && (clearTimeout(this.$), this.$ = null)
    };
    k.De = function () {
        B(this.a, "update: " + this.qb.url);
        this.hb.Hc(this.b, this.qb.url)
    };
    k.Ib = function (a) {
        if (a)
            if (this.Ia = (new pf(this.qb.url))
                .parse(a)) this.Ia.ba ? (a = 1E3 * this.Ia.Tf, this.$ = setTimeout(this.Li, a), B(this.a, "update in: " + a)) : this.duration = this.Ia.Xf, this.Bd.Af(this);
            else this.b.onError(0);
        else this.b.onError(3, oe(this.hb))
    };
    var xf = function (a, b, c, d) {
        y.call(this);
        this.b = a;
        this.hb = new pe(this);
        this.ud = b;
        this.Bd = c;
        this.fb = d;
        this.Rb = [];
        this.Ya = []
    };
    u(xf, y);
    xf.prototype.F = function () {
        this.hb.I();
        for (var a = 0; a < this.Ya.length; a++) this.Ya[a].I();
        for (a = this.Ya.length = 0; a < this.Rb.length; a++) this.Rb[a].I();
        this.Rb.length = 0;
        xf.B.F.call(this)
    };
    xf.prototype.load = function () {
        this.hb.Hc(this.b, this.b.url)
    };
    xf.prototype.Ib = function (a) {
        if (a) {
            var b = this.hb.Wc;
            if (b)
                if (a = (new pf(b, this.fb))
                    .parse(a)) {
                    if (a.Eg)
                        for (b = 0; b < a.Tc.length; b++) {
                            var c = new wf(this.b, this.Bd, a.Tc[b]);
                            this.Rb.push(c)
                        } else {
                            var d;
                            this.fb ? (c = "avc1.4d401e,mp4a.40.2", d = "video/mp2t") : (c = "mp4a.40.2", d = "audio/mp4");
                            c = new wf(this.b, this.Bd, {
                                name: null
                                , url: b
                                , da: 0
                                , mimeType: d
                                , codecs: c
                                , lf: !0
                                , language: null
                            });
                            this.Rb.push(c)
                        }
                    for (b = 0; b < a.sf.length; b++) c = new wf(this.b, this.Bd, a.sf[b]), this.Ya.push(c);
                    this.ud.onManifestReady()
                } else M(this.b, 0)
        } else M(this.b
            , 3, oe(this.hb))
    };
    var yf = function (a, b, c) {
        ue.call(this);
        this.La = null;
        this.ce = b ? new mf(b) : null;
        this.vf = Infinity;
        this.Ii = c;
        for (this.Z(a); !this.ee();) this.parse()
    };
    u(yf, ue);
    yf.prototype.tg = function () {
        return this.vf
    };
    yf.prototype.Hf = function (a) {
        yf.B.Hf.call(this, a);
        null === this.La && (this.La = this.Cc);
        a = zf(this.La, this.Cc);
        a < this.vf && (this.vf = a)
    };
    yf.prototype.ih = function (a, b, c) {
        if (this.ce) {
            a = new gd(new Uint8Array(this.j.buffer, this.j.byteOffset + a, b + 1 - a));
            if (c) {
                if (445 !== J(a)) return;
                K(a, 2);
                K(a, 2);
                c = hd(a);
                K(a, c)
            }
            null === this.La && (this.La = this.Cc);
            this.ce.append(this.Ii + (zf(this.La, this.qc) - this.La), a.buffer.subarray(a.offset), 0)
        }
    };
    var zf = function (a, b) {
        var c = Math.floor(a / 95443.7176888889)
            , d = 95443.7176888889 * (c - 1) + b
            , e = 95443.7176888889 * (c + 0) + b
            , c = 95443.7176888889 * (c + 1) + b
            , f = Math.abs(d - a)
            , g = Math.abs(e - a)
            , h = Math.abs(c - a)
            , l = f;
        g < f && (d = e, l = g);
        h < l && (d = c);
        return d
    };
    var Af = function (a, b, c, d) {
        kf.call(this, a, b);
        cast.__platform__.crypto.unwrapKey("raw", c, d, {
                name: "RSA-OAEP"
                , hash: {
                    name: "SHA-256"
                }
            }, {
                name: "AES-CBC"
                , length: 128
            }, !1, ["decrypt"])
            .then(this.Bf, this.yf)
    };
    u(Af, kf);
    var Bf = [96E3, 88200, 64E3, 48E3, 44100, 32E3, 24E3, 22050, 16E3, 12E3, 11025, 8E3, 7350]
        , Cf = function (a) {
            z(x("cast.player.mp4.base"), a)
        }
        , Df = function (a, b, c) {
            if (0 > a || 32 <= a) return Cf("Invalid object type id: " + a), null;
            var d = Bf.indexOf(b);
            return 0 > d ? (Cf("Invalid sample rate: " + b), null) : 0 > c || 16 < c ? (Cf("Invalid channels: " + c), null) : new Uint8Array([a << 3 | d >> 1, d << 7 | c << 3])
        };
    var Ef = function (a) {
        gd.call(this, a)
    };
    u(Ef, gd);
    var Ff = function (a) {
        ee.call(this, a)
    };
    u(Ff, ee);
    var Gf = function (a, b, c) {
        (new DataView(a.buffer, a.byteOffset, a.byteLength))
        .setUint32(b, c)
    };
    var Hf = function (a) {
            this.G = new Ef(a);
            this.Pb = 0;
            this.Xc = this.lc = null;
            this.pe = a;
            this.Ua = 0;
            this.Pb = J(this.G);
            this.Ua = 4;
            this.lc = J(this.G);
            this.Ua += 4;
            1 === this.Pb && (this.Pb = Fd(this.G), this.Ua += 8);
            1970628964 === this.lc && (this.Xc = new rd(Gd(this.G, 16)), this.Ua += 16)
        }
        , If = function (a) {
            switch (a.lc) {
            case 1836019574:
            case 1836019558:
            case 1836475768:
            case 1953653099:
            case 1953653094:
            case 1701082227:
            case 1835297121:
            case 1835626086:
            case 1684631142:
            case 1937007212:
                return !0;
            default:
                return !1
            }
        };
    Hf.prototype.getName = function () {
        return this.lc
    };
    var Jf = function (a) {
            return a.pe.subarray(0, a.Pb)
        }
        , T = function (a) {
            return Jf(a)
                .subarray(a.Ua)
        };
    Hf.prototype.o = function (a) {
        N(a, this.pe.subarray(0, this.Pb))
    };
    var U = function (a) {
        Hf.call(this, a);
        this.Zb = this.Ba = 0;
        a = J(this.G);
        this.Ua += 4;
        this.Ba = a >>> 24;
        this.Zb = a & 16777215
    };
    u(U, Hf);
    var Kf = function (a) {
        U.call(this, a)
    };
    u(Kf, U);
    var Lf = new rd([212, 128, 126, 242, 202, 57, 70, 149, 142, 84, 38, 203, 158, 70, 167, 159]);
    Kf.prototype.ef = function (a) {
        for (var b = this.Ba, c = hd(this.G), d = Array(c), e = 0; e < c; e++) {
            var f, g, h;
            if (1 === b) {
                f = J(this.G);
                var l = J(this.G);
                g = J(this.G);
                var n = J(this.G);
                h = f;
                var p = l
                    , r = new Dd(Math.floor(4294967296 * h / 1E4)
                        .toString() + "0000");
                r.add(h % 1E4 * 7296 % 1E4);
                r.add(p);
                h = r;
                f = 4294967296 / a * f + l / a;
                g = 4294967296 / a * g + n / a
            } else n = J(this.G), g = J(this.G), h = new Dd(n.toString()), f = n / a, g /= a;
            d[e] = {
                time: f
                , duration: g
                , ib: h
                , offset: 0
                , size: 0
                , url: null
            }
        }
        return d
    };
    var Mf = function (a) {
        U.call(this, a)
    };
    u(Mf, U);
    Mf.prototype.ef = function (a) {
        var b = this.Ba;
        K(this.G, 4);
        var c = J(this.G)
            , d = 0 == b ? J(this.G) : Fd(this.G)
            , e = 0 == b ? J(this.G) : Fd(this.G)
            , f = a + Jf(this)
            .byteOffset
            , g = this.Pb;
        K(this.G, 2);
        a = id(this.G);
        for (var b = Array(a), e = f + g + e, h = g = f = 0; h < a; h++) f = J(this.G) & 2147483647, g = J(this.G), K(this.G, 4), b[h] = {
            time: d / c
            , duration: g / c
            , ib: null
            , offset: e
            , size: f
            , url: null
        }, d += g, e += f;
        return b
    };
    var Nf = function (a) {
        U.call(this, a);
        this.ve = new Uint8Array([]);
        this.Lf = null;
        this.of = !1;
        this.xd()
    };
    u(Nf, U);
    var Of = new rd([162, 57, 79, 82, 90, 155, 79, 20, 162, 68, 108, 66, 124, 100, 141, 244]);
    Nf.prototype.xd = function () {
        var a = new Ef(T(this))
            , b = this.Zb;
        b & 1 && K(a, 20);
        var c = J(a);
        this.Lf = a.buffer.subarray(a.offset);
        this.of = b & 2 ? !0 : !1;
        this.ve = new Uint8Array(new ArrayBuffer(c));
        for (b = 0; b < c; b++)
            if (this.of) {
                K(a, 8);
                var d = 6 * id(a);
                this.ve[b] = 10 + d;
                K(a, d)
            } else this.ve[b] = 8, K(a, 8)
    };
    var Pf = function (a) {
        U.call(this, a);
        this.Rc = 0;
        this.rc = [];
        this.Qc = [];
        this.xd()
    };
    u(Pf, U);
    Pf.prototype.xd = function () {
        var a = new Ef(T(this));
        this.Rc = J(a);
        var b = this.Zb;
        b & 1 && K(a, 4);
        b & 4 && K(a, 4);
        for (var c = !!(b & 256), d = !!(b & 512), e = !!(b & 1024), b = !!(b & 2048), f = 0; f < this.Rc; f++) c && K(a, 4), d && this.rc.push(J(a)), e && K(a, 4), b && this.Qc.push(J(a))
    };
    Pf.prototype.we = function (a) {
        Gf(T(this), 4, a)
    };
    var Rf = function (a) {
        Qf.fg(this, "constructor", a);
        this.Qd = 9E4;
        this.xd()
    };
    u(Rf, U);
    Rf.prototype.xd = function () {
        var a = new Ef(T(this));
        K(a, 4);
        K(a, 4);
        this.Qd = J(a)
    };
    var Qf = function (a) {
        U.call(this, a)
    };
    u(Qf, U);
    var Sf = function (a) {
        U.call(this, a);
        this.Sf = new rd(Gd(this.G, 16));
        a = J(this.G);
        this.Rh = Gd(this.G, a)
    };
    u(Sf, U);
    Sf.prototype.getData = function () {
        return this.Rh
    };
    var Tf = function (a) {
        U.call(this, a)
    };
    u(Tf, U);
    var Uf = function (a) {
        Hf.call(this, a)
    };
    u(Uf, Hf);
    Uf.prototype.we = function (a, b) {
        var c = Vf(T(this), 1953653094, void 0, void 0);
        if (c) {
            var d = Vf(T(c), 1953658222, void 0, void 0);
            d && d.we(a - this.pe.byteOffset);
            b && (c = Vf(T(c), 1935763823, void 0, void 0)) && Gf(T(c), 4, b - this.pe.byteOffset)
        }
    };
    var Wf = function (a, b) {
            var c = Vf(a, 1836019558)
                , d = T(Vf(a, 1835295092))
                .byteOffset;
            b ? c.we(d + b, d) : c.we(d)
        }
        , Xf = function (a) {
            switch (a.getName()) {
            case 1836019558:
                return new Uf(Jf(a));
            case 1835296868:
                return new Rf(Jf(a));
            case 1953658222:
                return new Pf(Jf(a));
            case 1935763823:
                return new Tf(Jf(a));
            case 1936286840:
                return new Mf(Jf(a));
            case 1952868452:
                return new Qf(Jf(a));
            case 1970628964:
                var b = a.Xc;
                return Of.zb(b) ? new Nf(Jf(a)) : Lf.zb(b) ? new Kf(Jf(a)) : a;
            case 1886614376:
                return new Sf(Jf(a));
            case 1702061171:
            case 1751411826:
            case 1835296868:
            case 1835427940:
            case 1836476516:
            case 1935763823:
            case 1935763834:
            case 1935894637:
            case 1937011571:
            case 1952804451:
            case 1952867444:
            case 1952868452:
            case 1953196132:
            case 1953654136:
            case 1953658222:
                return new U(Jf(a));
            default:
                return a
            }
        }
        , Vf = function (a, b, c, d) {
            for (var e = 0; e < a.length;) {
                var f = new Hf(a.subarray(e))
                    , e = e + f.Pb;
                if (f.getName() === b && (1970628964 !== b || c && c.zb(f.Xc))) return Xf(f);
                if (d && If(f) && (f = Vf(T(f), b, c, d))) return f
            }
            return null
        }
        , Yf = function (a, b) {
            for (var c = 0, d = []; c < a.length;) {
                var e = new Hf(a.subarray(c))
                    , c = c + e.Pb;
                d.push(Xf(e));
                b && If(e) && (d = d.concat(Yf(T(e), !0)))
            }
            return d
        };
    var Zf = function (a) {
        this.pb = new fd(a);
        this.Pa = null;
        this.Te = 0;
        this.Qd = 9E4;
        this.Rc = 0;
        this.rc = [];
        this.Qc = []
    };
    k = Zf.prototype;
    k.Z = function (a) {
        if (a) {
            var b = Vf(a, 1835296868, void 0, !0);
            b && (this.Qd = b.Qd);
            if (b = Vf(a, 1953658222, void 0, !0))
                if (this.rc = b.rc, 0 != this.rc.length && (this.Qc = b.Qc, this.Rc = b.Rc, a = Vf(a, 1835295092))) this.Pa = new gd(T(a))
        } else this.Te = 0, this.Pa = null
    };
    k.qh = function (a) {
        this.Te = a
    };
    k.Ga = function () {
        return null === this.Pa
    };
    k.ee = function () {
        var a;
        (a = null === this.Pa) || (a = this.Pa, a = !(a.offset < a.buffer.length));
        return a
    };
    k.parse = function () {
        if (this.Pa)
            for (var a = this.Te / this.Rc, b = 0, c = 0, d = this.rc[0]; !this.ee();) {
                var e = J(this.Pa);
                6 === (hd(this.Pa) & 31) ? (this.pb.append(Gd(this.Pa, e - 1)), jd(this.pb, 0 == this.Qc.length ? b : b + this.Qc[c] / this.Qd)) : K(this.Pa, e - 1);
                d -= e + 4;
                0 == d && (b += a, c++, d = this.rc[c])
            }
    };
    var $f = function (a, b) {
        Xe.call(this, a, b, "webvtt");
        this.a = x("cast.player.cea608.InbandCaptionsManager");
        this.O = new Id(this);
        this.O.me = 1;
        this.sa = null;
        this.Y = 0;
        this.Dc = null;
        this.Ac = [];
        this.Kc = this.Cf.bind(this);
        this.ra = null;
        this.ya = new Hc
    };
    u($f, Xe);
    $f.prototype.F = function () {
        this.reset();
        $f.B.F.call(this)
    };
    $f.prototype.Cf = function () {
        if (this.sa.Ga()) {
            var a = Jc(this.ya);
            this.Y !== a.M && (this.O.clear(), this.Dc = null);
            this.Y = a.M;
            this.O.Y = a.Nh;
            this.sa.Z(a.data);
            this.sa.qh(a.duration)
        }
        this.sa.parse();
        if (this.sa.ee()) {
            this.O.decode();
            if (0 < this.Ac.length) {
                for (Ze(this); 0 < this.Ac.length;) a = this.Ac.pop(), a = new VTTCue(a.start, a.end, a.text), a.position = 20, a.align = "start", this.addCue(a);
                this.Ac.length = 0
            }
            this.sa.Z(null)
        }
        this.ya.Ga() && this.sa.Ga() ? this.ra = null : this.ra = setTimeout(this.Kc, 20)
    };
    var Od = function (a, b, c, d) {
        null !== a.Dc && b < a.Dc && (b = a.Dc);.1 > c - b && (c = b + .1);
        a.Dc = c;
        a.Ac.push({
            start: b
            , end: c
            , text: d
        })
    };
    $f.prototype.re = function (a, b, c, d, e) {
        if (od(a)) {
            if (!this.sa) switch (a) {
            case "video/mp2t":
                this.sa = new ed(this);
                break;
            case "video/mp4":
                this.sa = new Zf(this);
                break;
            default:
                return
            }
            1 < this.ya.ac() ? A(this.a, "Dropped segment") : (this.ya.enqueue({
                data: b
                , duration: e
                , M: c
                , Nh: "video/mp4" == a ? d : c
            }), B(this.a, "Pending " + this.ya.ac()), null === this.ra && (this.ra = setTimeout(this.Kc, 20)))
        }
    };
    $f.prototype.reset = function () {
        $f.B.reset.call(this);
        this.Y = 0;
        this.Dc = null;
        this.Ac.length = 0;
        this.sa && this.sa.Z(null);
        this.O.clear();
        this.ya.clear();
        null !== this.ra && (clearTimeout(this.ra), this.ra = null)
    };
    var bg = function (a) {
            this.duration = new ie("mediaPresentationDuration");
            this.type = new Q("type");
            for (this.Mi = new ie("minimumUpdatePeriod"); a;) {
                if ("MPD" === a.nodeName) {
                    me(a.attributes, this);
                    break
                }
                a = a.nextElementSibling
            }
            this.Ad = [];
            if (a)
                for (a = a.firstElementChild; null !== a; a = a.nextElementSibling) "Period" === a.nodeName && this.Ad.push(new ag(a))
        }
        , cg = function (a) {
            this.name = a;
            this.end = this.start = null
        };
    u(cg, ge);
    cg.prototype.parse = function (a) {
        a = a.split("-");
        this.start = parseInt(a[0], 10);
        this.end = parseInt(a[1], 10)
    };
    var dg = function (a) {
            this.media = new Q("media");
            me(a.attributes, this)
        }
        , eg = function (a) {
            this.vh = new Q("sourceURL");
            this.ia = new cg("range");
            me(a.attributes, this)
        }
        , fg = function (a) {
            this.duration = new P("duration");
            this.Pd = new P("timescale");
            this.M = new Q("presentationTimeOffset");
            this.qa = new P("startNumber");
            this.cc = new cg("indexRange");
            me(a.attributes, this);
            this.sc = this.kd = null;
            for (a = a.firstElementChild; null !== a; a = a.nextElementSibling) switch (a.nodeName) {
            case "Initialization":
                this.kd = new eg(a);
                break;
            case "SegmentTimeline":
                this.sc = [];
                for (var b = a.firstElementChild; null !== b; b = b.nextElementSibling) {
                    var c = 0
                        , d = b.attributes.getNamedItem("r");
                    d && (c = parseInt(d.value, 10));
                    var d = (d = b.attributes.getNamedItem("t")) ? new Dd(d.value) : null
                        , e = b.attributes.getNamedItem("d");
                    if (e)
                        for (e = parseInt(e.value, 10), this.sc.push({
                                time: d
                                , duration: e
                            }), d = 0; d < c; d++) this.sc.push({
                            time: null
                            , duration: e
                        })
                }
            }
        };
    fg.prototype.wa = function (a) {
        null === a.duration.value && (a.duration = this.duration);
        null === a.Pd.value && (a.Pd = this.Pd);
        null === a.M.value && (a.M = this.M);
        null === a.qa.value && (a.qa = this.qa);
        null === a.cc.start && (a.cc = this.cc);
        null === a.kd && (a.kd = this.kd);
        null === a.sc && (a.sc = this.sc)
    };
    var gg = function (a) {
        fg.call(this, a);
        this.h = [];
        for (a = a.firstElementChild; null !== a; a = a.nextElementSibling) switch (a.nodeName) {
        case "SegmentURL":
            this.h.push(new dg(a))
        }
    };
    u(gg, fg);
    gg.prototype.wa = function (a) {
        gg.B.wa.call(this, a);
        0 === a.h.length && (a.h = this.h)
    };
    var hg = function (a) {
        this.media = new Q("media");
        this.Z = new Q("initialization");
        fg.call(this, a)
    };
    u(hg, fg);
    hg.prototype.wa = function (a) {
        hg.B.wa.call(this, a);
        null === a.media.value && (a.media = this.media);
        null === a.Z.value && (a.Z = this.Z)
    };
    var ig = function (a) {
            this.Bi = new je("schemeIdUri");
            me(a.attributes, this);
            this.kb = null;
            this.eb = !1;
            var b = this.Bi.value;
            if (b)
                if ("9A04F079-9840-4286-AB92-E65BE0885F95" === b) {
                    for (a = a.firstElementChild; null !== a; a = a.nextElementSibling) switch (a.nodeName) {
                    case "mspr:pro":
                        this.kb = re(a.childNodes[0].nodeValue);
                        return;
                    case "cenc:pssh":
                        a = ud(window.atob(a.childNodes[0].nodeValue));
                        a = new Sf(a);
                        this.kb = qe(a.getData());
                        return
                    }
                    this.kb = {
                        systemId: sd
                        , gd: null
                        , rd: null
                        , url: null
                        , ke: 0
                    }
                } else "EDEF8BA9-79D6-4ACE-A3C8-27DCD51D21ED" ===
                    b ? this.kb = {
                        systemId: td
                        , gd: null
                        , rd: null
                        , url: null
                        , ke: 0
                    } : "URN:MPEG:DASH:MP4PROTECTION:2011" === b && (this.eb = !0)
        }
        , jg = function (a) {
            this.Mc = [];
            this.eb = !1;
            this.Lb = this.D = this.Mb = this.url = null;
            for (a = a.firstElementChild; null !== a; a = a.nextElementSibling) switch (a.nodeName) {
            case "BaseURL":
                this.url = a.textContent;
                break;
            case "ContentProtection":
                var b = new ig(a);
                b.kb && this.Mc.push(b.kb);
                this.eb = this.eb || b.eb;
                break;
            case "SegmentBase":
                this.Lb = new fg(a);
                break;
            case "SegmentTemplate":
                this.D = new hg(a);
                break;
            case "SegmentList":
                this.Mb =
                    new gg(a)
            }
        };
    jg.prototype.wa = function (a) {
        a.D ? this.D && this.D.wa(a.D) : a.D = this.D;
        a.Lb ? this.Lb && this.Lb.wa(a.Lb) : a.Lb = this.Lb;
        a.Mb ? this.Mb && this.Mb.wa(a.Mb) : a.Mb = this.Mb;
        a.url = a.url || this.url;
        0 === a.Mc.length && (a.Mc = this.Mc);
        a.eb = a.eb || this.eb
    };
    var kg = function (a) {
        this.id = new Q("id");
        this.mimeType = new Q("mimeType");
        this.codecs = new Q("codecs");
        me(a.attributes, this);
        jg.call(this, a)
    };
    u(kg, jg);
    kg.prototype.wa = function (a) {
        kg.B.wa.call(this, a);
        a.mimeType.value = a.mimeType.value || this.mimeType.value;
        a.codecs.value = a.codecs.value || this.codecs.value
    };
    var lg = function (a, b) {
        this.Gh = new P("bandwidth");
        kg.call(this, a);
        b.wa(this);
        if (this.mimeType.value) switch (this.mimeType.value.toLowerCase()) {
        case "application/ttml+xml":
            this.codecs.value = "ttml";
            this.mimeType.value = "text/mp4";
            break;
        case "text/vtt":
            this.codecs.value = "webvtt"
        }
        "avc1" === this.codecs.value && (this.codecs.value = "avc1.4d401e")
    };
    u(lg, kg);
    var mg = function (a, b) {
        this.language = new Q("lang");
        kg.call(this, a);
        this.role = null;
        b.wa(this);
        this.A = [];
        for (var c = a.firstElementChild; null !== c; c = c.nextElementSibling) "Representation" === c.nodeName ? this.A.push(new lg(c, this)) : "Role" === c.nodeName && (this.role = c.getAttribute("value"))
    };
    u(mg, kg);
    var ag = function (a) {
        this.duration = new ie("duration");
        this.start = new ie("start");
        me(a.attributes, this);
        jg.call(this, a);
        this.g = [];
        for (a = a.firstElementChild; null !== a; a = a.nextElementSibling) switch (a.nodeName) {
        case "AdaptationSet":
            this.g.push(new mg(a, this))
        }
    };
    u(ag, jg);
    var V = function (a) {
        R.call(this, a);
        this.Jd = new Ha(5);
        this.ye = !1;
        this.Kc = this.Hc.bind(this);
        this.$ = null;
        this.oc = [];
        this.lg = []
    };
    u(V, R);
    V.prototype.a = x("cast.player.dash.Protocol");
    V.prototype.Ub = function () {
        V.B.Ub.call(this);
        null !== this.$ && (clearTimeout(this.$), this.$ = null)
    };
    var ng = function (a) {
        return sd.zb(a) ? "playready" : td.zb(a) ? "widevine" : null
    };
    V.prototype.updateLicenseRequestInfo = function (a) {
        var b = this.Jd.get(a.protectionSystem);
        b && (a.headers = {}, a.headers["content-type"] = "text/xml;charset=utf-8", a.url = b.url)
    };
    var og = function (a, b, c) {
            if (b) {
                null !== b.qa.value && (c.qa = b.qa.value);
                var d = b.Pd.value || 1
                    , e = new Dd(b.M.value || "0");
                c.M = parseInt(e.toString(), 10) / d;
                var e = new Dd(e.toString())
                    , f = b.h
                    , g = b.sc
                    , h = 0;
                g ? h = g.length : f && 0 < f.length && (h = f.length);
                for (var l = 0; l < h; l++) {
                    var n = g ? g[l].duration : b.duration.value || 0;
                    g && g[l].time && (e = new Dd(g[l].time.toString()));
                    var p = {
                        time: parseInt(e.toString(), 10) / d
                        , ib: new Dd(e.toString())
                        , duration: n / d
                        , url: f && 0 < f.length ? a.resolve(new E(f[l].media.value))
                            .toString() : null
                    };
                    c.h.push(p);
                    e.add(n)
                }(d =
                    c.Wa) || (f = e = d = null, g = !0, (h = b.kd) && h.vh.value ? (g = !1, d = h.vh.value, h.ia.start && h.ia.end && (e = h.ia.start, f = h.ia.end)) : (e = 0, h && h.ia.start && h.ia.end && (e = h.ia.start, f = h.ia.end, g = !1), b.cc.start && b.cc.end && (e = Math.min(e, b.cc.start), f = Math.max(f, b.cc.end), g = !1), null == f && (f = 2048)), d = g ? null : {
                    url: d ? a.resolve(new E(d))
                        .toString() : null
                    , ia: null !== e && null !== f ? {
                        start: e
                        , end: f
                    } : null
                    , data: null
                });
                c.Wa = d
            }
        }
        , pg = function (a, b) {
            return {
                duration: (b.duration.value || 0) / (b.Pd.value || 1)
                , url: a.resolve(new E(b.media.value))
                    .toString()
                , Z: b.Z.value ? a.resolve(new E(b.Z.value))
                    .toString() : null
            }
        };
    V.prototype.wf = function (a) {
        if (a.Ad && 0 !== a.Ad.length) {
            this.ba = "dynamic" === a.type.value;
            a.duration.value && (this.duration = a.duration.value);
            var b;
            a: {
                b = a.Ad;
                var c = b[0];
                if (c.g[0].D) {
                    for (var d = [], e = [], f = 0; f < b.length; f++) {
                        for (var g = b[f], h = g.duration.value, l = [], n = 0; n < g.g.length; n++) {
                            var p = g.g[n].D;
                            if (!p) {
                                A(this.a, "Multiple periods not using SegmentTemplate is not supported");
                                b = [{
                                    start: c.start.value
                                    , duration: c.duration.value
                                    , zd: null
                                }];
                                break a
                            }
                            var r = this.uri.resolve(new E(g.g[n].A[0].url))
                                .toString()
                                , r = new E(r);
                            e[n] = e[n] || 0;
                            var S = p
                                , p = e[n]
                                , Ba = {
                                    da: 0
                                    , M: 0
                                    , h: []
                                    , url: null
                                    , D: null
                                    , Wa: null
                                };
                            og(r, S, Ba);
                            r = pg(r, S);
                            r = {
                                qa: Ba.qa
                                , M: Ba.M
                                , Bg: p
                                , D: r
                            };
                            l.push(r);
                            e[n] += Math.round(h / r.D.duration)
                        }
                        d.push({
                            start: g.start.value
                            , duration: g.duration.value
                            , zd: l
                        })
                    }
                    b = d
                } else b = [{
                    start: c.start.value
                    , duration: c.duration.value
                    , zd: null
                }]
            }
            this.oc = b;
            a = a.Ad[0].g;
            for (b = 0; b < a.length; b++) {
                e = a[b];
                c = e.A;
                d = c[0];
                f = d.mimeType.value;
                if (null === f) {
                    z(this.a, "no mime type");
                    M(this.host, 0);
                    break
                }
                if (nd(f)) f = 1;
                else if (od(f)) f = 2;
                else if (pd(e.role, f)) f = 3;
                else continue;
                e = {
                    name: e.id.value
                    , type: f
                    , enabled: !1
                    , xa: !1
                    , T: !0
                    , index: -1
                    , L: -1
                    , A: []
                    , language: e.language.value
                    , mimeType: d.mimeType.value || ""
                    , codecs: d.codecs.value || ""
                    , role: e.role
                };
                for (f = 0; f < c.length; f++) {
                    d = c[f];
                    for (g = 0; g < d.Mc.length; g++) h = d.Mc[g], (l = ng(h.systemId)) && this.Jd.set(l, h);
                    d.eb && (this.ye = !0);
                    h = this.uri.resolve(new E(d.url))
                        .toString();
                    g = {
                        da: d.Gh.value || 0
                        , id: d.id.value
                        , M: 0
                        , h: []
                        , url: h
                        , qa: 0
                        , D: null
                        , Wa: null
                    };
                    d.url && "/" !== h[h.length - 1] && (h += "/");
                    h = new E(h);
                    og(h, d.Lb, g);
                    (l = d.Mb) && og(h, l, g);
                    d = d.D;
                    l = g;
                    d && (og(h, d
                        , l), l.D = pg(h, d));
                    e.A.push(g);
                    se(g) && (e.xa = !0)
                }
                this.g.push(e)
            }
        } else z(this.a, "No periods found in manifest"), M(this.host, 0)
    };
    V.prototype.Ib = function (a) {
        if (a) {
            var b = null !== this.$
                , c = this.g;
            this.g = [];
            var d = (new DOMParser)
                .parseFromString(a, "text/xml")
                , d = new bg(d.firstChild);
            this.wf(d);
            if (!this.ye) {
                var e = this.Nc
                    , f = this.Jd.Ca();
                e.pd = f;
                qg(e)
            }
            this.ba && (d = d.Mi.value, null !== d && (this.$ = setTimeout(this.Kc, 1E3 * d)));
            if (b)
                for (a = 0; a < c.length; a++) {
                    b = this.g[a];
                    d = c[a];
                    b.enabled = d.enabled;
                    b.L = d.L;
                    b.xa = d.xa;
                    for (e = 0; e < b.A.length; e++) b.A[e].M = d.A[e].M;
                    e = d.index;
                    0 > e || (e = e + d.A[0].qa - b.A[0].qa, 0 > e ? (b.index = 0, b.T = !0) : (b.index = e, b.T = d.T))
                } else V.B.Ib.call(this
                    , a)
        } else M(this.host, 3, oe(this.hc))
    };
    V.prototype.Da = function (a) {
        var b = this.g[a]
            , b = b.A[b.L];
        return 0 === b.h.length && b.D ? (a = this.duration, this.ba && (a -= 20), {
            start: 0
            , end: a
        }) : V.B.Da.call(this, a)
    };
    var sg = function (a, b, c) {
        c = rg(a, b, c);
        a.lg[b] !== c && (a.g[b].T = !0);
        a.lg[b] = c
    };
    V.prototype.seek = function (a, b) {
        var c = this.g[a]
            , d = c.A[c.L];
        if (0 === d.h.length && d.D) {
            var e = this.Da(a);
            b < e.start && (b = e.start);
            b > e.end && (b = e.end);
            e = Math.floor(b / d.D.duration);
            d = Math.ceil(this.duration / d.D.duration);
            c.index = e < d ? e : d - 1;
            sg(this, a, c.index);
            return !0
        }
        return V.B.seek.call(this, a, b)
    };
    V.prototype.Db = function (a) {
        var b = this.g[a]
            , c = b.A[b.L];
        if (0 === c.h.length && c.D) {
            var d = b.index + 1;
            return d < Math.ceil(this.duration / c.D.duration) ? (b.index = d, sg(this, a, b.index), !0) : !1
        }
        return V.B.Db.call(this, a)
    };
    var rg = function (a, b, c) {
        a = a.oc;
        for (var d = 0; d < a.length - 1 && !(c < a[d + 1].zd[b].Bg); d++);
        return d
    };
    V.prototype.Cb = function (a) {
        var b = this.g[a]
            , c = b.A[b.L];
        return 0 === c.h.length && c.D ? b.index === Math.ceil(this.duration / c.D.duration) - 1 : V.B.Cb.call(this, a)
    };
    V.prototype.getSegmentInterval = function (a) {
        var b = this.g[a];
        if (b.xa) return {
            time: 0
            , duration: 0
        };
        var c = b.A[b.L];
        if (c.D) {
            b = b.index;
            if (0 > b) return {
                time: 0
                , duration: 0
            };
            0 < c.h.length ? (a = c.h[b].duration, c = c.h[b].time - c.M) : (a = c.D.duration, c = b * a);
            return {
                time: c
                , duration: a
            }
        }
        return V.B.getSegmentInterval.call(this, a)
    };
    var tg = function (a, b) {
        return a.replace(/\$Number(%0\d*[diuxXo]){0,1}\$/g, function (a) {
            var d = a.indexOf("%0");
            if (0 > d) return b;
            d = parseInt(a.substring(d + 2, a.length - 2), 10);
            switch (a.substr(a.length - 2, 1)) {
            case "x":
                return wd(b, 16, d);
            case "X":
                return wd(b, 16, d)
                    .toUpperCase();
            case "o":
                return wd(b, 8, d);
            default:
                return wd(b, 10, d)
            }
        })
    };
    V.prototype.updateSegmentRequestInfo = function (a, b) {
        var c = this.g[a]
            , d = c.A[c.L]
            , e = c.index
            , f = c.xa;
        if (d.D) {
            var g = d.D
                , h = null;
            1 < this.oc.length && (h = this.oc[rg(this, a, e)].zd[a], g = h.D);
            c = f ? g.Z : g.url;
            c = c.replace("$RepresentationID$", d.id);
            c = c.replace("$Bandwidth$", d.da.toString());
            f || (f = e + d.qa, 1 < this.oc.length && (f = e + h.qa - h.Bg), c = tg(c, f), c = c.replace("$Time$", 0 < d.h.length ? d.h[e].ib.toString() : (e * g.duration)
                .toString()));
            b.url = c
        } else {
            h = g = null;
            if (f) e = d.Wa, c = e.url ? e.url : d.url, e.ia && (g = e.ia.start, h = e.ia.end);
            else if (e <
                d.h.length) e = d.h[e], e.url ? c = e.url : (c = d.url, g = e.offset, h = e.offset + e.size - 1);
            else {
                z(this.a, "invalid segment info");
                M(this.host, 0);
                return
            }
            b.url = c;
            b.headers = {};
            null !== g && null !== h && (b.headers.Range = "bytes=" + g + "-" + h)
        }
    };
    V.prototype.processSegment = function (a, b, c) {
        var d = this.g[a]
            , e = d.A[d.L]
            , f = b.data;
        if (this.ye && this.Nc) {
            var g;
            g = Vf(f, 1886614376, void 0, !0);
            if (g = null === g ? null : {
                    systemId: g.Sf
                    , url: null
                    , gd: null
                    , rd: null
                    , ke: 0
                }) {
                var h = ng(g.systemId);
                h && (this.Jd.set(h, g), g = this.Nc, h = this.Jd.Ca(), g.pd = h, qg(g), this.ye = !1)
            }
        }
        if (b.od)
            if (d = (d = Vf(f, 1836019574)) ? Jf(d) : null, null === d) z(this.a, "no init"), M(this.host, 1);
            else {
                if (!e.D && 0 === e.h.length) {
                    g = 0;
                    b.od && e.Wa && e.Wa.ia && (g = e.Wa.ia.start);
                    b = g;
                    f = (f = Vf(f, 1936286840)) ? f.ef(b) : null;
                    if (!f) {
                        A(this.a
                            , "no segments");
                        return
                    }
                    e.h = f
                }
                ff(c, d, {
                    time: this.getSegmentInterval(a)
                        .time
                    , duration: 0
                }, 0, !1)
            } else b = this.getSegmentInterval(a), e = e.M, 1 < this.oc.length && (e = this.oc[rg(this, a, d.index)], e = e.zd[a].M - e.start), ff(c, f, b, b.time + e, d.T), d.T = !1
    };
    var W = function (a, b) {
        this.Jh = a;
        this.Xc = b ? b : null;
        this.c = null
    };
    W.prototype.o = function (a) {
        var b = fe(a)
            .length;
        this.c = a;
        this.$f();
        this.w();
        a = fe(a)
            .length - b;
        this.c.buffer.set([a >> 24, a >> 16, a >> 8, a], b)
    };
    W.prototype.$f = function () {
        O(this.c, 0);
        O(this.c, this.Jh);
        this.Xc && N(this.c, this.Xc.Td)
    };
    W.prototype.w = function () {
        throw Error("writeBody() should be  overriden.");
    };
    var X = function (a, b, c) {
        W.call(this, a);
        this.Ba = b;
        this.Zb = c
    };
    u(X, W);
    X.prototype.$f = function () {
        X.B.$f.call(this);
        O(this.c, this.Ba << 24 | this.Zb & 16777215)
    };
    var ug = function (a) {
        X.call(this, 1935763823, 0, 0);
        this.C = a
    };
    u(ug, X);
    ug.prototype.w = function () {
        O(this.c, 1);
        O(this.c, this.C)
    };
    var vg = function (a) {
        X.call(this, 1952867444, 1, 0);
        this.Zc = a
    };
    u(vg, X);
    vg.prototype.w = function () {
        var a = this.c
            , b = this.Zc;
        O(a, b / 4294967296);
        O(a, b % 4294967296)
    };
    var wg = function (a, b) {
        X.call(this, 1935763834, 0, 0);
        this.qg = a;
        this.oh = b
    };
    u(wg, X);
    wg.prototype.w = function () {
        N(this.c, [this.qg]);
        O(this.c, this.oh.length);
        0 === this.qg && N(this.c, this.oh)
    };
    var xg = function (a, b) {
        X.call(this, 1702061171, 0, 0);
        this.ki = a;
        this.ad = b
    };
    u(xg, X);
    xg.prototype.w = function () {
        N(this.c, [3, 25, 0, 1, 0, 4, 17, this.ki, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, this.ad[0], this.ad[1]])
    };
    var yg = function (a, b) {
        W.call(this, 1635148611);
        this.wh = a;
        this.kh = b
    };
    u(yg, W);
    yg.prototype.w = function () {
        N(this.c, [1, 77, 64, 30, 255, 225]);
        var a = this.wh.length;
        N(this.c, [a >> 8, a]);
        N(this.c, this.wh);
        N(this.c, [1]);
        a = this.kh.length;
        N(this.c, [a >> 8, a]);
        N(this.c, this.kh)
    };
    var zg = function () {
        X.call(this, 1937011571, 0, 0)
    };
    u(zg, X);
    zg.prototype.w = function () {
        O(this.c, 0)
    };
    var Ag = function (a, b) {
        X.call(this, 1952804451, 0, 1);
        this.Th = a;
        this.Uh = b
    };
    u(Ag, X);
    Ag.prototype.w = function () {
        O(this.c, 256 | this.Th);
        N(this.c, this.Uh.Td)
    };
    var Bg = function (a, b) {
        X.call(this, 1935894637, 0, 0);
        this.Ci = a;
        this.Di = b
    };
    u(Bg, X);
    Bg.prototype.w = function () {
        O(this.c, this.Ci);
        O(this.c, this.Di)
    };
    var Cg = function (a) {
        W.call(this, 1718775137);
        this.Qh = a
    };
    u(Cg, W);
    Cg.prototype.w = function () {
        O(this.c, this.Qh)
    };
    var Dg = function (a) {
        X.call(this, 1751411826, 0, 0);
        this.ei = a
    };
    u(Dg, X);
    Dg.prototype.w = function () {
        O(this.c, 0);
        O(this.c, this.ei);
        N(this.c, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    };
    var Eg = function (a) {
        X.call(this, 1835296868, 0, 0);
        this.$a = a
    };
    u(Eg, X);
    Eg.prototype.w = function () {
        O(this.c, 0);
        O(this.c, 0);
        O(this.c, this.$a);
        O(this.c, 0);
        N(this.c, [85, 196, 0, 0])
    };
    var Fg = function (a, b) {
        X.call(this, 1953196132, 0, 3);
        this.Ni = a;
        this.fi = b
    };
    u(Fg, X);
    Fg.prototype.w = function () {
        O(this.c, 0);
        O(this.c, 0);
        N(this.c, [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0]);
        O(this.c, this.Ni << 16);
        O(this.c, this.fi << 16)
    };
    var Gg = function (a) {
        X.call(this, 1953654136, 0, 0);
        this.gi = a
    };
    u(Gg, X);
    Gg.prototype.w = function () {
        var a = 65536;
        this.gi && (a &= -65537);
        N(this.c, [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
        O(this.c, a)
    };
    var Hg = function (a, b) {
        X.call(this, 1886614376, 0, 0);
        this.Sf = a;
        this.Ea = b
    };
    u(Hg, X);
    Hg.prototype.w = function () {
        N(this.c, this.Sf.Td);
        O(this.c, this.Ea.length);
        N(this.c, this.Ea)
    };
    var Ig = function (a) {
        X.call(this, 1836476516, 0, 0);
        this.$a = a
    };
    u(Ig, X);
    Ig.prototype.w = function () {
        O(this.c, 0);
        O(this.c, 0);
        O(this.c, this.$a);
        N(this.c, [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2])
    };
    var Jg = function (a) {
        X.call(this, 1952868452, 0, 8);
        this.Vh = a
    };
    u(Jg, X);
    Jg.prototype.w = function () {
        O(this.c, 1);
        O(this.c, this.Vh)
    };
    var Kg = function (a) {
        X.call(this, 1953658222, 0, 513);
        this.Nf = a
    };
    u(Kg, X);
    Kg.prototype.w = function () {
        O(this.c, this.Nf.length);
        O(this.c, 0);
        for (var a = 0; a < this.Nf.length; a++) O(this.c, this.Nf[a].length)
    };
    var Lg = function (a) {
        X.call(this, 1835427940, 0, 0);
        this.Nb = a
    };
    u(Lg, X);
    Lg.prototype.w = function () {
        O(this.c, this.Nb)
    };
    var Mg = function (a) {
        W.call(this, 1835295092);
        this.mg = a
    };
    u(Mg, W);
    Mg.prototype.w = function () {
        for (var a = 0; a < this.mg.length; a++) N(this.c, this.mg[a])
    };
    var Og = function (a) {
        W.call(this, 1970628964, Ng);
        this.Ph = a
    };
    u(Og, W);
    var Ng = new rd([43, 248, 102, 128, 198, 229, 78, 36, 190, 35, 15, 129, 90, 96, 110, 178]);
    Og.prototype.w = function () {
        N(this.c, ud(this.Ph))
    };
    var Pg = function (a) {
        var b = new Uint8Array(2 + a.length);
        b[1] = 1;
        ud(a, b, 2);
        Hg.call(this, Ng, b)
    };
    u(Pg, Hg);
    var Qg = function (a, b, c, d) {
        y.call(this);
        this.b = a;
        this.v = b;
        this.ii = d;
        this.Ea = c;
        this.i = this.qf = null;
        this.ua = "none";
        this.Vf = this.Uf = this.ph = this.Fb = null;
        this.Rg = this.zf.bind(this);
        this.f = new D;
        uc(this.f);
        C(this.f, "success", this.wd, !1, this);
        C(this.f, "error", this.nc, !1, this)
    };
    u(Qg, y);
    Qg.prototype.a = x("cast.player.core.MediaKeySession");
    Qg.prototype.F = function () {
        Rg(this);
        this.Fb && (this.Fb.close(), this.Fb = null);
        this.f.I();
        Qg.B.F.call(this)
    };
    var Rg = function (a) {
            a.i && (kd ? (cc(a.i, "webkitkeymessage", a.Tg, !1, a), cc(a.i, "webkitkeyerror", a.zf, !1, a)) : a.Fb && cc(a.Fb, "message", a.Ug, !1, a), a.i = null)
        }
        , Sg = function (a, b) {
            if (b) {
                var c = a.ii;
                B(c.a, "key session ended: " + c.Ob);
                5 < c.ka.length ? c.ka.shift()
                    .I() : c.Ob++;
                c.Ob < c.ka.length && c.ka[c.Ob].createSession(c.ua)
            }
            kd && Rg(a)
        };
    Qg.prototype.createSession = function (a) {
        B(this.a, "create session");
        this.Vf = q();
        var b = this.b.licenseCustomData;
        if (b) {
            var c = new Ff(this.Ea.length + b.length + 34);
            N(c, this.Ea);
            (kd ? new Og(b) : new Pg(b))
            .o(c);
            b = fe(c)
        } else b = this.Ea;
        this.i = this.b.mediaElement;
        this.ua = a;
        kd ? (C(this.i, "webkitkeymessage", this.Tg, !1, this), C(this.i, "webkitkeyerror", this.zf, !1, this), this.i.webkitGenerateKeyRequest(ld[this.ua], b)) : (this.Fb = a = this.i.mediaKeys.createSession(), C(this.Fb, "message", this.Ug, !1, this), a.generateRequest("cenc"
                , b.buffer)
            .catch(this.Rg))
    };
    Qg.prototype.wd = function (a) {
        B(this.a, "xhr success");
        var b = this.Uf;
        null !== b && Bd("Cast.MPL.LicenseReq.ServerLatency", q() - b);
        this.Uf = null;
        this.vg(Gc(a.target))
    };
    Qg.prototype.vg = function (a) {
        a ? (a = new Uint8Array(a), this.b.processLicense && (a = this.b.processLicense(a)), kd ? this.i.webkitAddKey(ld[this.ua], a, this.Ea, this.ph) : this.Fb.update(a.buffer)
            .catch(this.Rg), Sg(this, !0)) : (Sg(this, !1), M(this.b, 2, void 0))
    };
    Qg.prototype.nc = function () {
        B(this.a, "xhr error");
        var a = new H(String(this.f.td), this.f.gb, Ec(this.f), this.f.getAllResponseHeaders(), Gc(this.f));
        Sg(this, !1);
        M(this.b, 2, a)
    };
    var Tg = function (a) {
        a.b.prepareLicenseRequest && !a.b.prepareLicenseRequest() || a.Qb()
    };
    Qg.prototype.Ug = function (a) {
        B(this.a, "message");
        this.qf = new Uint8Array(a.cb.message);
        Tg(this)
    };
    Qg.prototype.Tg = function (a) {
        B(this.a, "keymessage");
        a = a.cb;
        this.ph = a.sessionId;
        this.qf = a.message;
        Tg(this)
    };
    Qg.prototype.zf = function () {
        B(this.a, "keyerror");
        Sg(this, !1);
        M(this.b, 2)
    };
    Qg.prototype.Qb = function () {
        var a = new G;
        a.timeoutInterval = 18E4;
        a.protectionSystem = this.ua;
        a.content = this.qf;
        a.setResponse = this.vg.bind(this);
        this.v.updateLicenseRequestInfo(a);
        this.b.licenseUrl && (a.url = this.b.licenseUrl);
        if (!a.url && this.Ea && "playready" === this.ua) {
            var b = new Sf(this.Ea);
            if (b = qe(b.getData())) a.url = b.url
        }
        if (this.b.updateLicenseRequestInfo && (this.b.updateLicenseRequestInfo(a), a.skipRequest)) return;
        this.f.Ud = a.withCredentials;
        this.f.sb = Math.max(0, a.timeoutInterval);
        this.f.send(a.url, "POST"
            , a.content, a.headers);
        a = this.Vf;
        null !== a && Bd("Cast.MPL.LicenseReq.GenLatency", q() - a);
        this.Vf = null;
        this.Uf = q()
    };
    var Xg = function (a, b, c, d) {
        y.call(this);
        this.b = a;
        this.v = b;
        this.ka = [];
        this.Ob = 0;
        this.ua = null;
        a = this.b.mediaElement;
        if (kd) {
            if (C(a, "webkitneedkey", this.Vg, !1, this), 0 !== d.length) {
                for (a = 0; a < d.length; a++)
                    if (this.b.mediaElement.canPlayType(c, ld[d[a]])) {
                        Ug(this, d[a]);
                        break
                    }
                this.ua || Vg(this)
            }
        } else C(a, "encrypted", this.Qg, !1, this), d && 0 < d.length && Wg(this, {
            Gg: d
            , rf: 0
        })
    };
    u(Xg, y);
    Xg.prototype.a = x("cast.player.core.MediaKeysManager");
    Xg.prototype.F = function () {
        kd ? cc(this.b.mediaElement, "webkitneedkey", this.Vg, !1, this) : cc(this.b.mediaElement, "encrypted", this.Qg, !1, this);
        for (var a = 0; a < this.ka.length; a++) this.ka[a].I();
        this.ka.length = 0;
        Xg.B.F.call(this)
    };
    var Wg = function (a, b) {
            Yg(a, b)
                .catch(function (a) {
                    b.rf++;
                    b.rf < b.Gg.length ? Wg(this, b) : (z(this.a, a.toString()), Vg(this))
                }.bind(a))
        }
        , Yg = function (a, b) {
            var c = b.Gg[b.rf];
            return navigator.requestMediaKeySystemAccess(ld[c], [{}])
                .then(function (a) {
                    return a.createMediaKeys()
                })
                .then(function (a) {
                    return this.b.mediaElement.setMediaKeys(a)
                }.bind(a))
                .then(function () {
                    Ug(this, c);
                    0 < this.ka.length && this.ka[0].createSession(c);
                    return Promise.resolve()
                }.bind(a))
        }
        , Vg = function (a) {
            A(a.a, "unsupported protection system");
            M(a.b
                , 2)
        };
    Xg.prototype.Qg = function (a) {
        a = a.cb;
        B(this.a, "onencrypted: " + this.Ob);
        (a = a.initData) ? Zg(this, new Uint8Array(a)): B(this.a, "invalid init data")
    };
    Xg.prototype.Vg = function (a) {
        a = a.cb;
        B(this.a, "needkey: " + this.Ob);
        (a = a.initData) ? Zg(this, a): B(this.a, "invalid init data")
    };
    var Zg = function (a, b) {
            var c;
            a: {
                for (c = 0; c < a.ka.length; c++) {
                    var d;
                    b: if (d = a.ka[c], b.length !== d.Ea.length) d = !1;
                        else {
                            for (var e = b.length, f = 0; f < e; f++)
                                if (b[f] !== d.Ea[f]) {
                                    d = !1;
                                    break b
                                }
                            d = !0
                        }
                    if (d) {
                        c = !0;
                        break a
                    }
                }
                c = !1
            }
            c || (c = new Qg(a.b, a.v, b, a), a.ua && a.Ob === a.ka.length && c.createSession(a.ua), a.ka.push(c))
        }
        , Ug = function (a, b) {
            a.ua = b;
            var c;
            switch (a.ua) {
            case "none":
                c = 1;
                break;
            case "clearkey":
                c = 2;
                break;
            case "playready":
                c = 3;
                break;
            case "widevine":
                c = 4;
                break;
            default:
                c = 0
            }
            Bd("Cast.MPL.ContentProtection", c)
        };
    Xg.prototype.Qb = function () {
        this.ka[this.Ob].Qb()
    };
    var $g = function (a, b, c) {
        y.call(this);
        this.b = a;
        this.v = b;
        this.za = c;
        this.S = [];
        this.ic = null;
        this.fa = new MediaSource;
        this.Dg = this.Fg = this.fe = !1;
        this.pd = this.jc = null;
        C(this.fa, "sourceopen", this.bh, !1, this)
    };
    u($g, y);
    $g.prototype.a = x("cast.player.core.MediaSourceManager");
    $g.prototype.F = function () {
        this.v.Ub();
        ah(this);
        bh(this);
        cc(this.fa, "sourceopen", this.bh, !1, this);
        $g.B.F.call(this)
    };
    $g.prototype.bh = function () {
        B(this.a, "sourceopen");
        if (this.Dg) {
            this.update();
            ch(this);
            for (var a = 0; a < this.S.length; a++) this.S[a] && this.S[a].createBuffer()
        }
    };
    var qg = function (a) {
        !a.ic && a.jc && a.pd && a.Fg && (a.ic = new Xg(a.b, a.v, a.jc, a.pd))
    };
    $g.prototype.onManifestReady = function () {
        this.Dg = !0;
        this.update()
    };
    $g.prototype.endOfStream = function () {
        "open" === this.fa.readyState && this.fa.endOfStream()
    };
    $g.prototype.load = function () {
        ah(this);
        kd && bh(this);
        this.open()
    };
    $g.prototype.open = function () {
        this.fe || (this.v.load(this), this.fe = !0);
        this.b.mediaElement.src ? (bc(this.b.mediaElement, "emptied", function () {
            dh(this)
        }, !1, this), this.b.mediaElement.src = "") : dh(this)
    };
    var dh = function (a) {
        B(a.a, "open");
        kd || a.ic || a.b.mediaElement.setMediaKeys(null)
            .catch(function (a) {
                z(this.a, a.toString())
            });
        a.b.mediaElement.src = window.URL.createObjectURL(a.fa);
        a.Fg = !0;
        qg(a)
    };
    $g.prototype.If = function () {
        this.fe ? A(this.a, "protocol already loaded") : (this.v.load(this), this.fe = !0)
    };
    var bh = function (a) {
            a.jc = null;
            a.ic && (a.ic.I(), a.ic = null)
        }
        , ah = function (a) {
            for (var b = 0; b < a.S.length; b++) a.S[b] && (a.S[b].I(), a.S[b] = null);
            a.S.length = 0
        }
        , ch = function (a) {
            if ("open" === a.fa.readyState) {
                var b = a.v.sg();
                0 < b && !a.fa.duration && (a.fa.duration = parseFloat((b - 1E-4)
                    .toFixed(4)))
            }
        };
    k = $g.prototype;
    k.reset = function () {
        for (var a = 0; a < this.S.length; a++) this.S[a] && this.S[a].reset()
    };
    k.update = function () {
        for (var a = this.v.getStreamCount(), b = null, c = null, d = 0; d < a; d++)
            if (this.v.isStreamEnabled(d)) {
                var e = this.v.getStreamInfo(d)
                    .mimeType;
                nd(e) ? b ? A(this.a, "more than one audio stream enabled") : b = e : od(e) && (c ? A(this.a, "more than one video stream enabled") : c = e);
                this.S[d] || (this.S[d] = new bf(this.za, this.b, this.v, d, this.fa), this.v.enableStream(d, !0), this.S[d].Zf())
            } else this.S[d] && (this.S[d].I(), this.S[d] = null);
        e = c ? c : b;
        e ? this.jc || (this.jc = e, qg(this)) : A(this.a, "no enabled audio or video stream")
    };
    k.nf = function (a) {
        return this.S[a].nf()
    };
    k.Kf = function (a) {
        this.S[a].Kf()
    };
    k.ld = function (a) {
        return this.S[a].ld()
    };
    k.Ta = function (a, b) {
        return this.S[a].Ta(b)
    };
    k.Qb = function () {
        this.ic.Qb()
    };
    k.getStreamCount = function () {
        return this.S.length
    };
    var Y = function (a) {
        B(this.a, "Version: 1.0.0.25");
        yd() && cast.__platform__.metrics.setMplVersion("1.0.0.25");
        this.b = a;
        this.v = null;
        this.Of = this.Xa = 0;
        this.Md = null;
        this.dg = this.Fa = this.mf = this.Ha = !1;
        this.je = !0;
        this.ie = !1;
        this.wb = this.W = this.i = null;
        this.jd = !1;
        this.Od = null;
        this.Kc = this.Cf.bind(this);
        this.Ae = null
    };
    t("cast.player.api.Player", Y);
    Y.prototype.a = x("cast.player.api.Player");
    var fh = function (a, b) {
        eh(a);
        a.Od = setTimeout(a.Kc, b || 0)
    };
    k = Y.prototype;
    k.mc = function (a) {
        fh(this, a)
    };
    k.re = function (a, b, c, d, e) {
        this.mf && this.wb.re(a, b, c, d, e);
        fh(this)
    };
    k.dh = function (a) {
        this.Ha && (a = this.v.getSegmentInterval(a)
            .time, Infinity === this.Xa || this.Xa < a) && (this.Xa = a)
    };
    k.Pg = function () {
        ch(this.W)
    };
    k.Ec = function () {
        return this.Ha ? this.Xa : this.i.currentTime
    };
    var eh = function (a) {
        null !== a.Od && (clearTimeout(a.Od), a.Od = null)
    };
    k = Y.prototype;
    k.ah = function () {
        B(this.a, "seeking");
        this.jd ? this.jd = !1 : (this.ie = this.Ha = !1, this.wb && this.wb.reset(), this.W.reset())
    };
    k.oe = function () {
        z(this.a, "error");
        M(this.b, 1)
    };
    k.Xg = function () {
        this.Ae && (Bd("Cast.MPL.PauseTime", q() - this.Ae), this.Ae = null)
    };
    k.Wg = function () {
        this.Ae = q()
    };
    k.De = function () {
        if (this.Ha && this.i && !isNaN(this.i.duration) && 0 !== this.i.buffered.length)
            if (Bd("Cast.MPL.MediaDuration", this.i.duration), 0 === this.Xa || this.Xa === this.i.currentTime) this.Ha = !1;
            else {
                this.Ha = !1;
                var a = this.Xa;
                this.jd = !0;
                this.i.currentTime = a
            }
        this.je = !1;
        for (var b = 0, c = 0, d = !0, a = this.Ec(), e = this.W.getStreamCount(), f = 0; f < e; f++)
            if (this.v.isStreamEnabled(f) && (c++, this.W.ld(f))) {
                b++;
                var g = this.W.Ta(f, a);
                if (this.Fa && d) {
                    var h = this.v.getSegmentInterval(f)
                        .duration * this.b.autoResumeNumberOfSegments;
                    if (0 === h || h > this.b.autoResumeDuration) h = this.b.autoResumeDuration;
                    g < h && (d = !1)
                }
                h = f;
                20 <= g || (g < this.b.autoPauseDuration && (g = this.v.getStreamInfo(h), pd(g.role, g.mimeType) || (this.je = !0, zd("Cast.MPL.BufferUnderflow"))), this.W.nf(h) && this.W.Kf(h))
            }
        if (this.i && 0 !== c && !this.ie) {
            this.je ? !this.i.paused && this.i.duration - a > this.b.autoPauseDuration && (B(this.a, "auto pause " + a), zd("Cast.MPL.AutoPause"), this.Fa = !0, this.i.pause(), this.b.onAutoPause && this.b.onAutoPause(this.Fa)) : !this.Ha && this.Fa && d && (this.Fa = !1, this.i.paused &&
                (B(this.a, "auto resume " + a), this.i.play(), this.b.onAutoPause && this.b.onAutoPause(this.Fa)));
            if (0 === b) {
                B(this.a, "endOfStream " + a);
                this.W.endOfStream();
                if (this.b.onMediaDownloadEnded) this.b.onMediaDownloadEnded();
                this.ie = !0
            }
            if (this.Of !== a) Eb(this.a, f + ": time=" + a), this.Of = a, this.Md = null;
            else if (!this.Ha && !this.Fa && !this.i.paused) {
                a: {
                    b = this.i.currentTime;
                    c = this.i.buffered;
                    for (d = c.length - 1; 0 <= d; d--) {
                        e = c.start(d);
                        if (b >= e) break;
                        if (0 === d || b > c.end(d - 1) - .15) {
                            b = e;
                            break a
                        }
                    }
                    b = 0
                }
                this.b.Eh && 0 < b ? (A(this.a, "jumping from " +
                    a + " to " + b), this.jd = !0, this.i.currentTime = b) : (c = q(), null === this.Md ? this.Md = c : 2500 < c - this.Md && (A(this.a, "seeking due to stall"), zd("Cast.MPL.PlaybackStall"), 0 === b && (b = a + .5), this.jd = !0, this.i.currentTime = b))
            }
        }
        fh(this, 400)
    };
    k.Cf = function () {
        this.Od = null;
        this.De()
    };
    var gh = function (a, b, c) {
        a.v = b;
        a.Ha = !0;
        a.Xa = c || 0;
        a.W = new $g(a.b, a.v, a)
    };
    Y.prototype.load = function (a, b) {
        B(this.a, "load");
        this.i = this.b.mediaElement;
        C(this.i, "error", this.oe, !1, this);
        C(this.i, "seeking", this.ah, !1, this);
        C(this.i, "play", this.Xg, !1, this);
        C(this.i, "pause", this.Wg, !1, this);
        this.i.autoplay && (this.i.autoplay = !1, this.dg = !0, this.jh());
        this.Of = this.Xa;
        this.Md = null;
        this.W ? this.W.open() : a ? (gh(this, a, b), this.W.load()) : z(this.a, "no protocol")
    };
    Y.prototype.load = Y.prototype.load;
    Y.prototype.If = function (a, b) {
        B(this.a, "preload");
        gh(this, a, b);
        this.W.If()
    };
    Y.prototype.preload = Y.prototype.If;
    Y.prototype.Ub = function () {
        B(this.a, "unload");
        hh(this);
        this.i && (this.dg && (this.i.autoplay = !0), this.W.I(), this.W = null, eh(this), this.ie = this.Fa = !1, cc(this.i, "error", this.oe, !1, this), cc(this.i, "seeking", this.ah, !1, this), cc(this.i, "play", this.Xg, !1, this), cc(this.i, "pause", this.Wg, !1, this), this.i = null)
    };
    Y.prototype.unload = Y.prototype.Ub;
    Y.prototype.reload = function () {
        this.Ha || (this.Xa = this.i.currentTime);
        this.Ha = !0;
        this.i.paused || (this.Fa = !0);
        eh(this);
        this.W.load()
    };
    Y.prototype.reload = Y.prototype.reload;
    Y.prototype.jh = function () {
        this.Fa = !0
    };
    Y.prototype.playWhenHaveEnoughData = Y.prototype.jh;
    Y.State = {
        UNDERFLOW: 1
        , SEEKABLE: 2
    };
    Y.prototype.bi = function (a) {
        var b;
        a: {
            b = -Infinity;
            for (var c = Infinity, d = this.W.getStreamCount(), e = 0; e < d; e++)
                if (this.v.isStreamEnabled(e)) {
                    var f = this.v.Da(e);
                    if (!f) {
                        b = null;
                        break a
                    }
                    f.start > b && (b = f.start);
                    f.end < c && (c = f.end)
                }
            b > c && (b = c);
            b = {
                start: b
                , end: c
            }
        }
        void 0 === a && (a = 1);
        c = {};
        a & 1 && (c.underflow = this.je || this.Fa);
        a & 2 && (c.seekable = b ? {
            start: b.start
            , end: b.end
        } : null);
        return c
    };
    Y.prototype.getState = Y.prototype.bi;
    Y.prototype.Ta = function (a) {
        return this.W.Ta(a, this.Ec())
    };
    Y.prototype.getBufferDuration = Y.prototype.Ta;
    Y.prototype.ai = function () {
        return 20
    };
    Y.prototype.getMaxBufferDuration = Y.prototype.ai;
    Y.prototype.Qb = function () {
        this.W.Qb()
    };
    Y.prototype.startLicenseRequest = Y.prototype.Qb;
    var hh = function (a) {
        a.wb && (a.mf = !1, a.wb.I(), a.wb = null)
    };
    Y.prototype.Xh = function (a, b, c) {
        b ? a ? "cea608" === b ? (this.mf = !0, this.wb = new $f(this, this.b.mediaElement)) : c && (this.wb = new $e(this, this.b, b, c)) : hh(this) : this.W.update()
    };
    Y.prototype.enableCaptions = Y.prototype.Xh;
    Y.prototype.ci = function () {
        return this.v
    };
    Y.prototype.getStreamingProtocol = Y.prototype.ci;
    Y.prototype.$h = function () {
        return this.b
    };
    Y.prototype.getHost = Y.prototype.$h;
    var ih = function (a, b, c) {
        W.call(this, 1836019558);
        this.m = {
            zi: a
            , Hh: b
            , Ai: c
        }
    };
    u(ih, W);
    ih.prototype.w = function () {
        (new Lg(0))
        .o(this.c);
        (new jh(this.m))
        .o(this.c)
    };
    var jh = function (a) {
        W.call(this, 1953653094);
        this.m = a
    };
    u(jh, W);
    jh.prototype.w = function () {
        (new Jg(this.m.zi))
        .o(this.c);
        (new vg(this.m.Hh))
        .o(this.c);
        (new Kg(this.m.Ai))
        .o(this.c)
    };
    var kh = function (a, b, c) {
        W.call(this, 1836019558);
        this.Zc = b;
        this.ri = a;
        this.ze = c
    };
    u(kh, W);
    kh.prototype.w = function () {
        for (var a = Yf(T(this.ri), void 0); 0 < a.length;) {
            var b = a.shift();
            switch (b.getName()) {
            case 1953653094:
                (new lh(b, this.Zc, this.ze))
                .o(this.c);
                break;
            default:
                b.o(this.c)
            }
        }
    };
    var lh = function (a, b, c) {
        W.call(this, 1953653094);
        this.Zc = b;
        this.si = a;
        this.ze = c
    };
    u(lh, W);
    lh.prototype.w = function () {
        for (var a = Yf(T(this.si), void 0), b = null; 0 < a.length;) {
            var c = a.shift();
            switch (c.getName()) {
            case 1970628964:
                c instanceof Nf && (b = c);
                break;
            case 1952868452:
                var d = c;
                d.Zb & 32 && (this.ze = !1);
                Gf(T(d), 0, 1);
                c.o(this.c);
                break;
            case 1953658222:
                (new mh(c, this.ze))
                .o(this.c);
                break;
            default:
                c.o(this.c)
            }
        }(new vg(this.Zc))
        .o(this.c);
        b && ((new wg(b.of ? 0 : 8, b.ve))
            .o(this.c), (new ug(0))
            .o(this.c))
    };
    var mh = function (a, b) {
        this.sh = !1;
        this.Ze = null;
        var c = a.Zb;
        c & 1 || (this.sh = !0, c |= 1);
        !b || c & 1024 || c & 4 || (c |= 4, this.Ze = 0);
        X.call(this, 1953658222, a.Ba, c);
        this.ti = a
    };
    u(mh, X);
    mh.prototype.w = function () {
        var a = new Ef(T(this.ti));
        O(this.c, J(a));
        this.sh && O(this.c, 0);
        null !== this.Ze && O(this.c, this.Ze);
        N(this.c, a.buffer.subarray(a.offset))
    };
    var nh = function (a, b, c) {
            this.ji = a;
            this.sampleRate = b;
            this.Qa = c
        }
        , oh = function (a, b, c, d) {
            this.width = a;
            this.height = b;
            this.uc = c;
            this.Dd = d
        }
        , ph = function (a, b, c, d, e, f) {
            this.jb = a;
            this.Sb = b;
            this.Mh = c;
            this.di = d;
            this.audio = e;
            this.video = f
        }
        , qh = function (a) {
            W.call(this, 1836019574);
            this.m = a
        };
    u(qh, W);
    qh.prototype.w = function () {
        (new Ig(this.m.Sb))
        .o(this.c);
        var a = this.m.jb;
        a && a.gd && (new Hg(a.systemId, a.gd))
            .o(this.c);
        (new rh(this.m))
        .o(this.c);
        (new sh(this.m))
        .o(this.c)
    };
    var sh = function (a) {
        W.call(this, 1953653099);
        this.m = a
    };
    u(sh, W);
    sh.prototype.w = function () {
        var a = 0
            , b = 0
            , c = this.m.video;
        c && (a = c.width, b = c.height);
        (new Fg(a, b))
        .o(this.c);
        (new th(this.m))
        .o(this.c)
    };
    var th = function (a) {
        W.call(this, 1835297121);
        this.m = a
    };
    u(th, W);
    th.prototype.w = function () {
        (new Eg(this.m.Sb))
        .o(this.c);
        (new Dg(this.m.di))
        .o(this.c);
        (new uh(this.m))
        .o(this.c)
    };
    var uh = function (a) {
        W.call(this, 1835626086);
        this.m = a
    };
    u(uh, W);
    uh.prototype.w = function () {
        (new vh(this.m))
        .o(this.c)
    };
    var vh = function (a) {
        W.call(this, 1937007212);
        this.m = a
    };
    u(vh, W);
    vh.prototype.w = function () {
        (new wh(this.m))
        .o(this.c);
        this.m.video && (new zg)
            .o(this.c)
    };
    var wh = function (a) {
        X.call(this, 1937011556, 0, 0);
        this.m = a
    };
    u(wh, X);
    wh.prototype.w = function () {
        O(this.c, 1);
        (this.m.video ? new xh(this.m) : new yh(this.m))
        .o(this.c)
    };
    var yh = function (a) {
        W.call(this, a.jb ? 1701733217 : 1836069985);
        this.m = a
    };
    u(yh, W);
    yh.prototype.w = function () {
        N(this.c, [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0]);
        O(this.c, this.m.audio.sampleRate << 16);
        (new xg(this.m.audio.ji, this.m.audio.Qa))
        .o(this.c);
        this.m.jb && (new zh(this.m))
            .o(this.c)
    };
    var xh = function (a) {
        W.call(this, a.jb ? 1701733238 : 1635148593);
        this.m = a
    };
    u(xh, W);
    xh.prototype.w = function () {
        N(this.c, [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        var a = this.m.video.width;
        N(this.c, [a >> 8, a]);
        a = this.m.video.height;
        N(this.c, [a >> 8, a]);
        N(this.c, [0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
        (new yg(this.m.video.uc, this.m.video.Dd))
        .o(this.c);
        this.m.jb && (new zh(this.m))
            .o(this.c)
    };
    var rh = function (a) {
        W.call(this, 1836475768);
        this.m = a
    };
    u(rh, W);
    rh.prototype.w = function () {
        (new Gg(!this.m.video))
        .o(this.c)
    };
    var zh = function (a) {
        W.call(this, 1936289382);
        this.m = a
    };
    u(zh, W);
    zh.prototype.w = function () {
        (new Cg(this.m.Mh))
        .o(this.c);
        (new Bg(1667591779, 0))
        .o(this.c);
        (new Ah(this.m))
        .o(this.c)
    };
    var Ah = function (a) {
        W.call(this, 1935894633);
        this.m = a
    };
    u(Ah, W);
    Ah.prototype.w = function () {
        var a = this.m.jb;
        a && a.rd && (new Ag(a.ke, a.rd))
            .o(this.c)
    };
    var Bh = function (a, b, c, d, e) {
        qh.call(this, new ph(a, b, 1836069985, 1936684398, new nh(c, d, e), null))
    };
    u(Bh, qh);
    var Ch = function (a, b, c, d, e, f) {
        qh.call(this, new ph(a, b, 1635148593, 1986618469, null, new oh(c, d, e, f)))
    };
    u(Ch, qh);
    var Dh = function (a, b) {
        gd.call(this, a);
        this.ce = new mf(b)
    };
    u(Dh, gd);
    var Eh = function (a, b, c, d) {
        this.Fh = a.match("mp4a.67") ? 103 : 64;
        this.bg = b;
        this.La = c;
        this.Ic = d;
        this.af = null;
        this.Mf = 0;
        this.ad = null
    };
    Eh.prototype.a = x("cast.player.hls.AacParser");
    var Fh = function (a) {
        for (var b = new Dh(a.bg, a.Ic), c = [], d = null, e = a.La; b.offset < b.buffer.length;) {
            var d = b
                , f = d.ce.append(e, d.buffer, d.offset);
            d.offset += f;
            d = b.buffer.subarray(b.offset);
            if (255 != d[0] || 240 != (d[1] & 240)) d = null;
            else {
                var f = ((d[3] & 3) << 11) + (d[4] << 3) + ((d[5] & 224) >> 5)
                    , g = d[2] >> 2 & 15
                    , h = d[1] & 1 ? 7 : 9;
                b.offset += h;
                d = {
                    profile: (d[2] >> 6 & 3) + 1
                    , sampleRate: Bf[g]
                    , Kh: (d[2] << 2 & 4) + (d[3] >> 6 & 3)
                    , Zh: f - h
                }
            }
            if (d) c.push(Gd(b, d.Zh)), e += 1024 / d.sampleRate;
            else return z(a.a, "Neither ID3 nor ADTS header was found at " + b.buffer.subarray(b.offset)
                .byteOffset), !1
        }
        if (null === d) return z(a.a, "No ADTS header was found."), !1;
        b = Df(d.profile, d.sampleRate, d.Kh);
        if (null === b) return z(a.a, "Cannot generate audio codec private data."), !1;
        a.af = c;
        a.Mf = d.sampleRate;
        a.ad = b;
        return !0
    };
    Eh.prototype.tg = function () {
        return this.La
    };
    var Gh = function (a, b, c) {
        y.call(this);
        this.b = a;
        this.fb = c;
        this.Ah = b;
        this.ha = null;
        this.Eb = new uf;
        this.li = this.Fd.bind(this);
        this.Yg = this.ni.bind(this);
        this.pg = this.Sh.bind(this);
        this.Pf = this.te = null;
        this.lh = -1;
        this.nb = new Hc;
        this.ya = null;
        this.f = new D;
        uc(this.f);
        C(this.f, "success", this.mi, !1, this);
        C(this.f, "error", this.Sg, !1, this);
        C(this.f, "timeout", this.Sg, !1, this);
        this.R = new G;
        this.R.setResponse = this.ug.bind(this);
        this.qd = this.Ed = this.Gb = this.cd = this.Yf = null;
        this.Vc = !0;
        this.ra = this.Bb = this.Y = null
    };
    u(Gh, y);
    k = Gh.prototype;
    k.a = x("cast.player.hls.Adaptation");
    k.F = function () {
        this.reset();
        this.f.I()
    };
    k.reset = function () {
        this.Vc = !0;
        this.nb.clear();
        this.Bb = this.Y = this.ya = null;
        this.f.abort();
        this.Ed && (this.Ed.cancel(), this.Ed = null);
        this.cd && (this.cd.cancel(), this.cd = null);
        null !== this.ra && clearTimeout(this.ra)
    };
    k.ni = function (a) {
        this.Ed = null;
        this.qd = a;
        this.ra = setTimeout(this.pg, 0)
    };
    k.mi = function (a) {
        this.ug(Gc(a.target))
    };
    k.ug = function (a) {
        a ? (a = new Uint8Array(a), this.b.processLicense && (a = this.b.processLicense(a)), this.Ed = this.b.yg ? new Af(this.b, this.Yg, a, this.Yf) : new of(this.b, this.Yg, a)) : M(this.b, 3)
    };
    k.Sg = function () {
        M(this.b, 3, new H(this.R.url, this.f.gb, Ec(this.f), this.f.getAllResponseHeaders(), Gc(this.f)))
    };
    k.Sh = function () {
        var a = Kc(this.nb);
        a.pf && this.qd && this.ya && (B(this.a, "decrypt segment"), this.cd = new lf(this.b, this.li, this.qd, a.pf, this.ya), this.ra = this.ya = null)
    };
    k.Fd = function (a) {
        B(this.a, "process segment");
        this.cd = null;
        a = new Uint8Array(a);
        var b = Jc(this.nb)
            , c;
        if (this.fb) c = new yf(a, this.b.processMetadata, b.na);
        else {
            c = new Eh(this.ha.qb.codecs, a, b.na, this.b.processMetadata);
            a = c;
            if (Fh(a)) {
                var d = new Ff(2 * a.bg.length);
                (new Bh(null, 1E6, a.Fh, a.Mf, a.ad))
                .o(d);
                (new ih(1024E6 / a.Mf, 1E6 * a.La, a.af))
                .o(d);
                (new Mg(a.af))
                .o(d);
                a = fe(d);
                Wf(a)
            } else a = null;
            if (!a) {
                M(this.b, 1);
                return
            }
        }
        if (b.rg || b.T) this.Y = null, b.T = !1;
        b = {
            time: b.na
            , duration: b.duration
        };
        d = c.tg();
        if (c = null === this.Y &&
            Infinity !== d) B(this.a, "start: " + d), this.Y = d, this.Bb = b, this.Ah && (d = this.Ah, d.V && d.V.T(this.Y, b));
        d = this.Pf;
        this.Pf = null;
        ff(d, a, b, this.Y || 0, c)
    };
    var Ih = function (a) {
            a.b.yg && !a.Yf ? cast.__platform__.cryptokeys.getKeyByName("CKP")
                .then(function (a) {
                    this.Yf = a;
                    Hh(this)
                }.bind(a)) : Hh(a)
        }
        , Hh = function (a) {
            a.qd = null;
            a.R.url = a.Gb;
            a.R.skipRequest = !1;
            if (a.b.updateLicenseRequestInfo && (a.b.updateLicenseRequestInfo(a.R), a.R.skipRequest)) return;
            a.f.Ud = a.R.withCredentials;
            a.f.sb = Math.max(0, a.R.timeoutInterval);
            a.f.send(a.R.url, void 0, void 0, a.R.headers)
        };
    k = Gh.prototype;
    k.processSegment = function (a, b) {
        this.Pf = b;
        var c = Kc(this.nb)
            .Hg;
        c ? (this.ya = a, this.Gb === c && null !== this.qd ? this.ra = setTimeout(this.pg, 0) : (this.Gb = c, Ih(this))) : this.Fd(a.buffer)
    };
    k.updateSegmentRequestInfo = function (a) {
        var b = vf(this.Eb);
        if (b) {
            this.Vc && (b.T = !0, this.Vc = !1);
            if (!this.nb.Ga()) {
                var c = this.nb.pa()[this.nb.ac() - 1];
                c.Sc === b.Sc && (this.nb.remove(c), B(this.a, "removed segment " + b.Sc))
            }
            this.nb.enqueue(b);
            if (c = b.gg) a.headers = {}, a.headers.Range = "bytes=" + c.start + "-" + c.end;
            a.url = b.url
        }
    };
    k.getSegmentInterval = function () {
        var a = vf(this.Eb);
        return a ? {
            time: a.na
            , duration: a.duration
        } : {
            time: 0
            , duration: 0
        }
    };
    k.Da = function () {
        return this.Eb.Da()
    };
    k.Cb = function () {
        return this.Eb.Cb()
    };
    k.Db = function () {
        return this.Eb.next()
    };
    k.seek = function (a) {
        return this.Eb.seek(a)
    };
    k.Af = function () {
        Jh(this, this.ha.Ia)
    };
    var Jh = function (a, b) {
        a.Eb.update(b);
        a.te && (te(a.te), a.te = null)
    };
    Gh.prototype.xe = function (a, b, c) {
        this.lh = a;
        this.te = b;
        this.Vc = !0;
        this.ha && this.ha.Ia && this.ha.Ia.ba && this.ha.Ub();
        this.ha = c;
        c.Ia ? Jh(this, c.Ia) : c.load()
    };
    Gh.prototype.getQualityLevel = function () {
        return this.lh
    };
    Gh.prototype.T = function (a, b) {
        this.Vc = !0;
        this.Y = a;
        this.Bb = b
    };
    var Kh = function (a) {
        Gh.call(this, a, null, !1)
    };
    u(Kh, Gh);
    Kh.prototype.Db = function () {
        return null === this.Y || null === this.Bb ? !1 : Kh.B.Db.call(this)
    };
    Kh.prototype.seek = function (a) {
        return null === this.Y || null === this.Bb ? !1 : Kh.B.seek.call(this, a)
    };
    Kh.prototype.processSegment = function (a, b) {
        var c = vf(this.Eb)
            , d = {
                time: c.na
                , duration: c.duration
            }
            , e = !1;
        if (null === this.Y || null === this.Bb) a = new Uint8Array(0);
        else if (this.Vc || c.T) d = this.Bb, e = !0;
        ff(b, a, d, this.Y || 0, e)
    };
    var Z = function (a, b) {
        this.b = a;
        this.fb = 1 !== b;
        this.ja = this.ud = null;
        this.gc = new Gh(a, this, this.fb);
        this.V = this.ga = null
    };
    Z.prototype.load = function (a) {
        this.ud = a;
        this.ja = new xf(this.b, this, this, this.fb);
        this.ja.load()
    };
    Z.prototype.Ub = function () {
        this.gc.I();
        this.ga && (this.ga.I(), this.ga = null);
        this.V && (this.V.I(), this.V = null);
        this.ja && (this.ja.I(), this.ja = null)
    };
    Z.prototype.onManifestReady = function () {
        for (var a = this.ja.Ya, b = 0; b < a.length; b++) {
            var c = a[b].qb;
            if (c.lf && nd(c.mimeType)) {
                this.enableStream(b + 1, !0);
                break
            }
        }
        if (this.b.onManifestReady) this.b.onManifestReady();
        this.ud.onManifestReady();
        this.ud = null
    };
    Z.prototype.getStreamCount = function () {
        return this.ja.Ya.length + 1
    };
    Z.prototype.getStreamCount = Z.prototype.getStreamCount;
    Z.prototype.enableStream = function (a, b) {
        if (0 < a) {
            var c = this.ja.Ya[a - 1]
                , d = c.qb.mimeType;
            nd(d) ? (this.ga && (this.ga.I(), this.ga = null), b && (this.ga = new Gh(this.b, null, !1), this.ga.ha = c)) : ka(d, "text/") && (this.V && (this.V.I(), this.V = null), b && (this.V = new Kh(this.b), this.V.ha = c, this.V.T(this.gc.Y, this.gc.Bb)))
        }
    };
    Z.prototype.enableStream = Z.prototype.enableStream;
    Z.prototype.isStreamEnabled = function (a) {
        return null !== Lh(this, a)
    };
    Z.prototype.isStreamEnabled = Z.prototype.isStreamEnabled;
    var Lh = function (a, b) {
        var c;
        0 === b ? c = a.gc : (c = a.ja.Ya[b - 1], c = null !== a.ga && a.ga.ha === c ? a.ga : null !== a.V && a.V.ha === c ? a.V : null);
        return c
    };
    Z.prototype.getQualityLevel = function (a) {
        return Lh(this, a)
            .getQualityLevel()
    };
    Z.prototype.getQualityLevel = Z.prototype.getQualityLevel;
    Z.prototype.getStreamInfo = function (a) {
        var b = []
            , c, d;
        if (0 === a) {
            b = [];
            c = this.ja.Rb;
            for (a = 0; a < c.length; a++) b.push(c[a].qb.da);
            c = this.ja.Rb[0].qb;
            d = c.codecs;
            if (this.ga) {
                var e = c.codecs.split(",");
                for (a = 0; a < e.length; a++)
                    if (0 === e[a].indexOf("avc1.")) {
                        d = e[a];
                        break
                    }
            }
        } else c = this.ja.Ya[a - 1].qb, b.push(c.da), d = c.codecs;
        return new I(d, c.mimeType, b, c.language, c.name, null)
    };
    Z.prototype.getStreamInfo = Z.prototype.getStreamInfo;
    k = Z.prototype;
    k.xe = function (a, b, c) {
        Lh(this, a)
            .xe(b, c, 0 === a ? this.ja.Rb[b] : this.ja.Ya[a - 1])
    };
    k.reset = function (a) {
        Lh(this, a)
            .reset()
    };
    k.Da = function (a) {
        return Lh(this, a)
            .Da()
    };
    k.Af = function (a) {
        (this.gc.ha === a ? this.gc : null !== this.ga && this.ga.ha === a ? this.ga : null !== this.V && this.V.ha === a ? this.V : null)
        .Af()
    };
    k.updateLicenseRequestInfo = function () {};
    k.sg = function () {
        var a = this.gc.ha;
        return a ? a.duration : -1
    };
    k.seek = function (a, b) {
        return Lh(this, a)
            .seek(b)
    };
    k.Db = function (a) {
        return Lh(this, a)
            .Db()
    };
    k.Cb = function (a) {
        return Lh(this, a)
            .Cb()
    };
    k.getSegmentInterval = function (a) {
        return Lh(this, a)
            .getSegmentInterval()
    };
    k.Og = function () {
        return !1
    };
    k.rh = function () {};
    k.bf = function () {
        return null
    };
    k.updateSegmentRequestInfo = function (a, b) {
        Lh(this, a)
            .updateSegmentRequestInfo(b)
    };
    k.processSegment = function (a, b, c) {
        Lh(this, a)
            .processSegment(b.data, c)
    };
    x("cast.player.smooth");
    var Oh = function (a) {
            this.ba = new he("IsLive");
            this.Sb = new P("TimeScale");
            for (this.duration = new P("Duration"); a;) {
                if ("SmoothStreamingMedia" === a.nodeName) {
                    me(a.attributes, this);
                    break
                }
                a = a.nextElementSibling
            }
            this.Nd = [];
            this.jb = null;
            if (a)
                for (this.Sb.value || (this.Sb.value = 1E7), a = a.firstElementChild; null != a; a = a.nextElementSibling)
                    if ("StreamIndex" === a.nodeName) {
                        var b = new Mh(a, this.Sb.value);
                        0 < b.Ka.length && this.Nd.push(b)
                    } else "Protection" === a.nodeName && (this.jb = new Nh(a.firstElementChild))
        }
        , Ph = function (a) {
            for (var b =
                    a.length / 2, c = new Uint8Array(b), d = 0; d < b; d++) c[d] = parseInt(a.substr(2 * d, 2), 16);
            return c
        }
        , Qh = function (a, b) {
            Q.call(this, a, b)
        };
    u(Qh, Q);
    Qh.prototype.parse = function (a) {
        switch (a) {
        case "H264":
        case "AVC1":
            this.value = "avc1.4d40";
            break;
        case "AACL":
            this.value = "mp4a.40.2";
            break;
        case "EC-3":
            this.value = "mp4a.a6";
            break;
        case "AACH":
            this.value = "mp4a.40.5";
            break;
        case "TTML":
            this.value = "ttml";
            break;
        default:
            this.value = null
        }
    };
    var Rh = function () {
        this.name = "CodecPrivateData";
        this.Dd = this.uc = null
    };
    u(Rh, ge);
    Rh.prototype.parse = function (a) {
        a = a.split("00000001");
        3 === a.length && (this.uc = Ph(a[1]), this.Dd = Ph(a[2]))
    };
    var Sh = function () {
        this.name = "CodecPrivateData";
        this.value = null
    };
    u(Sh, ge);
    Sh.prototype.parse = function (a) {
        a && (this.value = Ph(a))
    };
    var Th = function (a) {
            this.da = new P("Bitrate");
            this.format = new Qh("FourCC", a)
        }
        , Uh = function (a) {
            Th.call(this, "ttml");
            me(a.attributes, this)
        };
    u(Uh, Th);
    var Vh = function (a) {
        Th.call(this, "avc1.4d401e");
        this.width = new P("MaxWidth");
        this.height = new P("MaxHeight");
        this.Qa = new Rh;
        me(a.attributes, this)
    };
    u(Vh, Th);
    var Wh = function (a) {
        Th.call(this, "mp4a.40.2");
        this.sampleRate = new P("SamplingRate");
        this.Lh = new P("Channels");
        this.Qa = new Sh;
        me(a.attributes, this)
    };
    u(Wh, Th);
    var Mh = function (a, b) {
            this.type = new Q("Type");
            this.url = new Q("Url");
            this.name = new Q("Name");
            this.language = new Q("Language");
            me(a.attributes, this);
            this.rb = 0;
            switch (this.type.value) {
            case "video":
                this.rb = 2;
                break;
            case "audio":
                this.rb = 1;
                break;
            case "text":
                this.rb = 3
            }
            this.h = [];
            this.Ka = [];
            for (var c = new Dd("0"), d = a.firstElementChild; null != d; d = d.nextElementSibling)
                if ("QualityLevel" === d.nodeName) {
                    var e = d
                        , f = void 0;
                    switch (this.rb) {
                    case 2:
                        f = new Vh(e);
                        break;
                    case 1:
                        f = new Wh(e);
                        break;
                    case 3:
                        f = new Uh(e);
                        break;
                    default:
                        f =
                            null
                    }
                    f && f.format.value && this.Ka.push(f)
                } else if ("c" === d.nodeName) {
                var g = d
                    , e = c
                    , f = b
                    , h = g.attributes.getNamedItem("t");
                h && e.reset(h.value);
                var h = null
                    , l = -1;
                g.attributes.getNamedItem("d") && (h = parseInt(g.attributes.d.value, 10), l = h / f);
                for (var g = (g = g.attributes.getNamedItem("r")) ? parseInt(g.value, 10) : 1, n = 0; n < g; n++) this.h.push({
                    time: parseInt(e.toString(), 10) / f
                    , duration: 0 <= l ? l : null
                    , ib: new Dd(e.toString())
                    , offset: 0
                    , size: 0
                    , url: null
                }), null !== h && e.add(h)
            }
            c = this.h.length - 1;
            for (d = 0; d < c; d++)
                if (h = this.h[d], f = this.h[d +
                        1], null === h.duration) {
                    e = h;
                    f = f.ib;
                    h = h.ib;
                    if (f.U == h.U) f = 0;
                    else {
                        if (!Ed(f, h)) throw Error("Value must be smaller than the current value");
                        for (var g = l = 0, n = 1, p = 0; p < f.U.length; p++) var r = parseInt(f.U.charAt(f.U.length - 1 - p), 10) - (p < h.U.length ? parseInt(h.U.charAt(h.U.length - 1 - p), 10) : 0) - g
                            , g = 0 > r ? 1 : 0
                            , l = l + (g ? 10 + r : r) * n
                            , n = 10 * n;
                        if (g) throw Error("Value must be smaller than the current value");
                        if (9007199254740992 < l) throw Error("Difference lost precision");
                        f = l
                    }
                    e.duration = f / b
                }
        }
        , Nh = function (a) {
            this.systemId = new le("SystemID");
            me(a.attributes, this);
            this.kb = null;
            this.systemId.value && sd.zb(this.systemId.value) && (this.kb = re(a.textContent))
        };
    var Xh = function (a) {
        R.call(this, a);
        this.Id = null;
        this.$a = 1E7
    };
    u(Xh, R);
    Xh.prototype.a = x("cast.player.smooth.Protocol");
    var Yh = /{bitrate}|{Bitrate}/
        , Zh = /{start time}|{start_time}/
        , $h = function (a, b, c, d, e, f) {
            return {
                name: e
                , type: a
                , enabled: !1
                , mimeType: b
                , T: !0
                , A: []
                , language: d
                , xa: void 0 === f ? !0 : !1
                , codecs: c
                , index: -1
                , L: -1
            }
        }
        , ai = function (a, b, c, d, e) {
            return {
                url: a || ""
                , da: b
                , M: c
                , h: d
                , D: null
                , Wa: e ? {
                    url: null
                    , ia: null
                    , data: e
                } : null
            }
        };
    Xh.prototype.wf = function (a) {
        var b = a.jb;
        if (b) {
            b = b.kb;
            if (null === b) {
                bi(this, "invalid protection info");
                return
            }
            this.Id = b
        }
        a.Sb.value && (this.$a = a.Sb.value);
        a.duration.value && (this.duration = a.duration.value / this.$a);
        a.ba.value && (this.ba = a.ba.value);
        for (var b = Infinity, c = 0; c < a.Nd.length; c++) {
            var d = a.Nd[c];
            (2 === d.rb || 1 === d.rb) && d.h[0].time < b && (b = d.h[0].time)
        }
        for (var e = [], c = 0; c < a.Nd.length; c++) {
            d = a.Nd[c];
            if (0 === d.Ka.length) {
                bi(this, "no quality levels");
                return
            }
            var f = d.Ka[0].format.value;
            if (null === f) {
                bi(this
                    , "unknown media format");
                return
            }
            var g = null;
            if (2 === d.rb) a: {
                var h = f
                    , g = b
                    , l = d.Ka[0];
                if (null === l.Qa.uc) bi(this, "no sps"), g = null;
                else {
                    l = l.Qa.uc[3].toString(16);
                    1 === l.length && (l = "0" + l);
                    for (var h = $h(2, "video/mp4", h + l.toLowerCase(), d.language.value, d.name.value), n = 0; n < d.Ka.length; n++) {
                        l = d.Ka[n];
                        if (null === l.da.value || null === l.width.value || null === l.height.value || null === l.Qa.uc || null === l.Qa.Dd) {
                            bi(this, "invalid video quality");
                            g = null;
                            break a
                        }
                        var p = this.Id
                            , r = this.$a
                            , S = l.width.value
                            , Ba = l.height.value
                            , zc = l.Qa.uc
                            , xe = l.Qa.Dd
                            , Ob = new Ff;
                        (new Ch(p, r, S, Ba, zc, xe))
                        .o(Ob);
                        h.A.push(ai(d.url.value, l.da.value, g, d.h, fe(Ob)))
                    }
                    g = h
                }
            } else if (1 === d.rb) a: {
                g = f;
                l = b;
                h = $h(1, "audio/mp4", g, d.language.value, d.name.value);
                for (n = 0; n < d.Ka.length; n++) {
                    p = d.Ka[n];
                    if (null === p.da.value || null === p.sampleRate.value) {
                        bi(this, "invalid audio quality");
                        g = null;
                        break a
                    }(r = p.Qa.value) || (r = p.Lh.value, r = Df(2, p.sampleRate.value, null !== r ? r : 2));
                    zc = r;
                    if (null === zc) {
                        bi(this, "invalid audio codec private data");
                        g = null;
                        break a
                    }
                    r = this.Id;
                    S = this.$a;
                    Ba = p.sampleRate.value;
                    xe = "mp4a.a6" === g ? 166 : 64;
                    Ob = new Ff;
                    (new Bh(r, S, xe, Ba, zc))
                    .o(Ob);
                    h.A.push(ai(d.url.value, p.da.value, l, d.h, fe(Ob)))
                }
                g = h
            } else if (3 === d.rb) {
                g = b;
                l = $h(3, "text/mp4", f, d.language.value, d.name.value, !1);
                for (h = 0; h < d.Ka.length; h++) l.A.push(ai(d.url.value, d.Ka[h].da.value || 0, g, d.h, null));
                g = l
            }
            g && ("mp4a.a6" === f ? e.push(g) : this.g.push(g))
        }
        Array.prototype.push.apply(this.g, e)
    };
    var ci = function (a) {
            var b = a.A[0].h
                , c = b.length - 1E4;
            0 < c && a.index >= c && (b.splice(0, c), a.index -= c)
        }
        , bi = function (a, b) {
            z(a.a, b);
            M(a.host, 0)
        };
    k = Xh.prototype;
    k.Ib = function (a) {
        if (a) {
            var b = (new DOMParser)
                .parseFromString(a, "text/xml")
                , b = new Oh(b.firstChild);
            this.wf(b);
            Xh.B.Ib.call(this, a);
            this.Id && (a = this.Nc, a.pd = ["playready"], qg(a))
        } else M(this.host, 3, oe(this.hc))
    };
    k.updateLicenseRequestInfo = function (a) {
        a.headers = {};
        a.headers["content-type"] = "text/xml;charset=utf-8";
        a.url = this.Id.url
    };
    k.bf = function (a) {
        a = this.g[a];
        a.xa = !1;
        return a.A[a.L].Wa.data
    };
    k.updateSegmentRequestInfo = function (a, b) {
        var c = this.g[a]
            , d = c.index
            , c = c.A[c.L]
            , e = c.url
            , e = e.replace(Yh, c.da.toString())
            , e = e.replace(Zh, c.h[d].ib.toString());
        b.url = this.uri.resolve(new E(e))
            .toString()
            .toString()
    };
    k.processSegment = function (a, b, c) {
        var d = this.g[a]
            , e = this.getSegmentInterval(a)
            , f = b.data;
        if (b.od) ff(c, f, {
            time: e.time
            , duration: 0
        }, 0, !1);
        else {
            if (this.ba) {
                a = this.g[a];
                var g = a.A[a.L].h
                    , h;
                h = this.$a;
                var l = Vf(f, 1970628964, Lf, !0);
                h = l ? l.ef(h) : null;
                if (null === h || 0 === h.length) A(this.a, "no new segments");
                else {
                    if (0 !== h.length) {
                        for (var l = h[0].time, n = 0; n < g.length; n++) {
                            var p = g[n].time;
                            if (p > l || .3 > Math.abs(p - l)) {
                                g.splice(n, g.length - n);
                                break
                            }
                        }
                        for (n = 0; n < h.length; n++) g.push(h[n])
                    }
                    ci(a)
                }
                if (b.headers && (b = b.headers.match('ChildTrack="([^"]*)"'))) {
                    b =
                        b[1].split(/,|;/);
                    for (a = 0; a < b.length; a++)
                        if (g = b[a].match("([^=]*)=([0-9]*)"))
                            for (h = g[1], l = 0; l < this.g.length; l++)
                                if (h === this.g[l].name) {
                                    h = this.g[l].A[0].h;
                                    g = g[2];
                                    l = parseInt(g, 10) / this.$a;
                                    (0 === h.length || h[h.length - 1].time < l) && h.push({
                                        time: l
                                        , duration: 0
                                        , ib: new Dd(g)
                                        , offset: 0
                                        , size: 0
                                        , url: null
                                    });
                                    break
                                }
                    for (a = 0; a < this.g.length; a++) ci(this.g[a])
                }
            }
            a = d.index;
            b = d.A[d.L];
            g = b.h;
            if (3 === d.type) f = (f = Vf(f, 1835295092)) ? T(f) : null;
            else {
                a = parseInt(g[a].ib.toString(), 10);
                g = 2 === d.type;
                h = Yf(f);
                l = new Ff(f.byteLength + 1024);
                n = null;
                for (f = 0; 0 < h.length;) switch (p = h.shift(), p.getName()) {
                case 1836019558:
                    n = Vf(T(p), 1970628964, Of, !0);
                    (new kh(p, a, g))
                    .o(l);
                    break;
                case 1835295092:
                    var r = null;
                    n && (r = n.Lf ? n.Lf : new Uint8Array([]));
                    f = r ? r.length : 0;
                    (new Mg(r ? [r, T(p)] : [T(p)]))
                    .o(l);
                    break;
                default:
                    p.o(l)
                }
                a = fe(l);
                Wf(a, f);
                f = a
            }
            null === f ? (z(this.a, "no media data"), M(this.host, 1)) : (ff(c, f, e, e.time + b.M, d.T), d.T = !1)
        }
    };
    t("cast.player.api.CreateDashStreamingProtocol", function (a) {
        return new V(a)
    });
    t("cast.player.api.CreateHlsStreamingProtocol", function (a, b) {
        return new Z(a, b)
    });
    t("cast.player.api.CreateSmoothStreamingProtocol", function (a) {
        return new Xh(a)
    });
})
.call(window);