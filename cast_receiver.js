(function() {
    'use strict';
    var g, h = this,
        k = function(a) {
            return void 0 !== a
        },
        aa = function() {},
        m = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" !=
                        typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        ba = function(a) {
            return "string" == typeof a
        },
        n = function(a) {
            return "number" == typeof a
        },
        ca = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        da = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c,
                        d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        p = function(a, b, c) {
            p = Function.prototype.bind && -1 != Function.prototype.bind.toString()
                .indexOf("native code") ? ca : da;
            return p.apply(null, arguments)
        },
        ea = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        fa = Date.now || function() {
            return +new Date
        },
        r = function(a, b) {
            var c = a.split("."),
                d = h;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length &&
                (e = c.shift());) !c.length && k(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
        },
        t = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.D = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.vd = function(a, c, f) {
                for (var l = Array(arguments.length - 2), q = 2; q < arguments.length; q++) l[q - 2] = arguments[q];
                return b.prototype[c].apply(a, l)
            }
        };
    var cast = h.cast || {};
    r("cast.receiver.VERSION", "2.0.0");
    var ga = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, ga);
        else {
            var b = Error()
                .stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    t(ga, Error);
    ga.prototype.name = "CustomError";
    var ha = function(a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
            return d + c.join("%s")
        },
        ia = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        ja = function(a, b) {
            var c = String(a)
                .toLowerCase(),
                d = String(b)
                .toLowerCase();
            return c < d ? -1 : c == d ? 0 : 1
        },
        v = function(a, b) {
            return -1 != a.indexOf(b)
        },
        ka = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var la = function(a, b) {
        b.unshift(a);
        ga.call(this, ha.apply(null, b));
        b.shift()
    };
    t(la, ga);
    la.prototype.name = "AssertionError";
    var w = function(a, b, c) {
            if (!a) {
                var d = "Assertion failed";
                if (b) var d = d + (": " + b),
                    e = Array.prototype.slice.call(arguments, 2);
                throw new la("" + d, e || []);
            }
        },
        ma = function(a, b) {
            throw new la("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        };
    var x = Array.prototype,
        y = x.indexOf ? function(a, b, c) {
            w(null != a.length);
            return x.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (ba(a)) return ba(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        pa = x.lastIndexOf ? function(a, b, c) {
            w(null != a.length);
            return x.lastIndexOf.call(a, b, null == c ? a.length - 1 : c)
        } : function(a, b, c) {
            c = null == c ? a.length - 1 : c;
            0 > c && (c = Math.max(0, a.length + c));
            if (ba(a)) return ba(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
            for (; 0 <=
                c; c--)
                if (c in a && a[c] === b) return c;
            return -1
        },
        ra = function(a, b) {
            var c = y(a, b),
                d;
            (d = 0 <= c) && qa(a, c);
            return d
        },
        qa = function(a, b) {
            w(null != a.length);
            x.splice.call(a, b, 1)
        },
        ta = function(a, b, c, d) {
            w(null != a.length);
            return x.splice.apply(a, sa(arguments, 1))
        },
        sa = function(a, b, c) {
            w(null != a.length);
            return 2 >= arguments.length ? x.slice.call(a, b) : x.slice.call(a, b, c)
        };
    var ua = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        va = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        },
        wa = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        xa = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        za = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < ya.length; f++) c = ya[f], Object.prototype.hasOwnProperty.call(d,
                    c) && (a[c] = d[c])
            }
        };
    var z;
    a: {
        var Aa = h.navigator;
        if (Aa) {
            var Ba = Aa.userAgent;
            if (Ba) {
                z = Ba;
                break a
            }
        }
        z = ""
    };
    var Ca = v(z, "Opera") || v(z, "OPR"),
        A = v(z, "Trident") || v(z, "MSIE"),
        Da = v(z, "Edge"),
        Ea = v(z, "Gecko") && !(v(z.toLowerCase(), "webkit") && !v(z, "Edge")) && !(v(z, "Trident") || v(z, "MSIE")) && !v(z, "Edge"),
        Fa = v(z.toLowerCase(), "webkit") && !v(z, "Edge"),
        Ga = function() {
            var a = z;
            if (Ea) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (Da) return /Edge\/([\d\.]+)/.exec(a);
            if (A) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Fa) return /WebKit\/(\S+)/.exec(a)
        },
        Ha = function() {
            var a = h.document;
            return a ? a.documentMode : void 0
        },
        Ia = function() {
            if (Ca &&
                h.opera) {
                var a;
                var b = h.opera.version;
                try {
                    a = b()
                } catch (c) {
                    a = b
                }
                return a
            }
            a = "";
            (b = Ga()) && (a = b ? b[1] : "");
            return A && (b = Ha(), b > parseFloat(a)) ? String(b) : a
        }(),
        Ja = {},
        B = function(a) {
            var b;
            if (!(b = Ja[a])) {
                b = 0;
                for (var c = ia(String(Ia))
                        .split("."), d = ia(String(a))
                        .split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var l = c[f] || "",
                        q = d[f] || "",
                        u = /(\d*)(\D*)/g,
                        H = /(\d*)(\D*)/g;
                    do {
                        var na = u.exec(l) || ["", "", ""],
                            oa = H.exec(q) || ["", "", ""];
                        if (0 == na[0].length && 0 == oa[0].length) break;
                        b = ka(0 == na[1].length ? 0 : parseInt(na[1], 10),
                            0 == oa[1].length ? 0 : parseInt(oa[1], 10)) || ka(0 == na[2].length, 0 == oa[2].length) || ka(na[2], oa[2])
                    } while (0 == b)
                }
                b = Ja[a] = 0 <= b
            }
            return b
        },
        Ka = h.document,
        La = Ka && A ? Ha() || ("CSS1Compat" == Ka.compatMode ? parseInt(Ia, 10) : 5) : void 0;
    var Ma = function(a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    };
    Ma.prototype.fb = null;
    var Na = 0;
    Ma.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || Na++;
        this.hc = d || fa();
        this.W = a;
        this.Rb = b;
        this.Pb = c;
        delete this.fb
    };
    Ma.prototype.hb = function() {
        return this.W
    };
    Ma.prototype.Bb = function(a) {
        this.W = a
    };
    var C = function(a) {
            this.Sb = a;
            this.ua = this.Za = this.W = this.Qa = null
        },
        D = function(a, b) {
            this.name = a;
            this.value = b
        };
    D.prototype.toString = function() {
        return this.name
    };
    var Oa = new D("SHOUT", 1200),
        Pa = new D("SEVERE", 1E3),
        Qa = new D("WARNING", 900),
        Ra = new D("INFO", 800),
        Sa = new D("CONFIG", 700),
        Ta = new D("FINE", 500),
        E = new D("FINER", 400),
        Ua = [new D("OFF", Infinity), Oa, Pa, Qa, Ra, Sa, Ta, E, new D("FINEST", 300), new D("ALL", 0)],
        Va = null,
        Wa = function(a) {
            if (!Va) {
                Va = {};
                for (var b = 0, c; c = Ua[b]; b++) Va[c.value] = c, Va[c.name] = c
            }
            if (a in Va) return Va[a];
            for (b = 0; b < Ua.length; ++b)
                if (c = Ua[b], c.value <= a) return c;
            return null
        };
    C.prototype.getName = function() {
        return this.Sb
    };
    C.prototype.getParent = function() {
        return this.Qa
    };
    C.prototype.Bb = function(a) {
        this.W = a
    };
    C.prototype.hb = function() {
        return this.W
    };
    var Xa = function(a) {
        if (a.W) return a.W;
        if (a.Qa) return Xa(a.Qa);
        ma("Root logger has no level set.");
        return null
    };
    C.prototype.log = function(a, b, c) {
        if (a.value >= Xa(this)
            .value)
            for ("function" == m(b) && (b = b()), a = new Ma(a, String(b), this.Sb), c && (a.fb = c), c = "log:" + a.Rb, h.console && (h.console.timeStamp ? h.console.timeStamp(c) : h.console.markTimeline && h.console.markTimeline(c)), h.msWriteProfilerMark && h.msWriteProfilerMark(c), c = this; c;) {
                b = c;
                var d = a;
                if (b.ua)
                    for (var e = 0, f = void 0; f = b.ua[e]; e++) f(d);
                c = c.getParent()
            }
    };
    C.prototype.info = function(a, b) {
        this.log(Ra, a, b)
    };
    var Ya = {},
        Za = null,
        $a = function() {
            Za || (Za = new C(""), Ya[""] = Za, Za.Bb(Sa))
        },
        F = function(a) {
            $a();
            var b;
            if (!(b = Ya[a])) {
                b = new C(a);
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1),
                    c = F(a.substr(0, c));
                c.Za || (c.Za = {});
                c.Za[d] = b;
                b.Qa = c;
                Ya[a] = b
            }
            return b
        };
    var G = function() {
        this.ra = this.ra;
        this.X = this.X
    };
    G.prototype.ra = !1;
    G.prototype.S = function() {
        this.ra || (this.ra = !0, this.l())
    };
    var ab = function(a, b) {
        a.ra ? b.call(void 0) : (a.X || (a.X = []), a.X.push(k(void 0) ? p(b, void 0) : b))
    };
    G.prototype.l = function() {
        if (this.X)
            for (; this.X.length;) this.X.shift()()
    };
    var bb = function(a) {
        a && "function" == typeof a.S && a.S()
    };
    var I = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Z = !1;
        this.Zb = !0
    };
    I.prototype.stopPropagation = function() {
        this.Z = !0
    };
    I.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Zb = !1
    };
    var cb = function(a) {
        cb[" "](a);
        return a
    };
    cb[" "] = aa;
    var db = !A || 9 <= La,
        eb = A && !B("9");
    !Fa || B("528");
    Ea && B("1.9b") || A && B("8") || Ca && B("9.5") || Fa && B("528");
    Ea && !B("8") || A && B("9");
    var fb = function(a, b) {
        I.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.ha = this.state = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            var e = a.relatedTarget;
            if (e) {
                if (Ea) {
                    var f;
                    a: {
                        try {
                            cb(e.nodeName);
                            f = !0;
                            break a
                        } catch (l) {}
                        f = !1
                    }
                    f || (e = null)
                }
            } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
            this.relatedTarget = e;
            null === d ? (this.offsetX = Fa || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = Fa || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX ||
                0, this.screenY = d.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.state = a.state;
            this.ha = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    t(fb, I);
    fb.prototype.stopPropagation = function() {
        fb.D.stopPropagation.call(this);
        this.ha.stopPropagation ? this.ha.stopPropagation() : this.ha.cancelBubble = !0
    };
    fb.prototype.preventDefault = function() {
        fb.D.preventDefault.call(this);
        var a = this.ha;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, eb) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var gb = "closure_listenable_" + (1E6 * Math.random() | 0),
        hb = 0;
    var ib = function(a, b, c, d, e) {
            this.listener = a;
            this.Ra = null;
            this.src = b;
            this.type = c;
            this.qa = !!d;
            this.Ja = e;
            this.key = ++hb;
            this.oa = this.Ha = !1
        },
        jb = function(a) {
            a.oa = !0;
            a.listener = null;
            a.Ra = null;
            a.src = null;
            a.Ja = null
        };
    var J = function(a) {
        this.src = a;
        this.s = {};
        this.Fa = 0
    };
    J.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.s[f];
        a || (a = this.s[f] = [], this.Fa++);
        var l = kb(a, b, d, e); - 1 < l ? (b = a[l], c || (b.Ha = !1)) : (b = new ib(b, this.src, f, !!d, e), b.Ha = c, a.push(b));
        return b
    };
    J.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.s)) return !1;
        var e = this.s[a];
        b = kb(e, b, c, d);
        return -1 < b ? (jb(e[b]), qa(e, b), 0 == e.length && (delete this.s[a], this.Fa--), !0) : !1
    };
    var lb = function(a, b) {
        var c = b.type;
        c in a.s && ra(a.s[c], b) && (jb(b), 0 == a.s[c].length && (delete a.s[c], a.Fa--))
    };
    J.prototype.zb = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.s)
            if (!a || c == a) {
                for (var d = this.s[c], e = 0; e < d.length; e++) ++b, jb(d[e]);
                delete this.s[c];
                this.Fa--
            }
        return b
    };
    J.prototype.sa = function(a, b, c, d) {
        a = this.s[a.toString()];
        var e = -1;
        a && (e = kb(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    J.prototype.hasListener = function(a, b) {
        var c = k(a),
            d = c ? a.toString() : "",
            e = k(b);
        return va(this.s, function(a) {
            for (var l = 0; l < a.length; ++l)
                if (!(c && a[l].type != d || e && a[l].qa != b)) return !0;
            return !1
        })
    };
    var kb = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.oa && f.listener == b && f.qa == !!c && f.Ja == d) return e
        }
        return -1
    };
    var mb = "closure_lm_" + (1E6 * Math.random() | 0),
        nb = {},
        ob = 0,
        K = function(a, b, c, d, e) {
            if ("array" == m(b)) {
                for (var f = 0; f < b.length; f++) K(a, b[f], c, d, e);
                return null
            }
            c = pb(c);
            if (a && a[gb]) a = a.ma(b, c, d, e);
            else {
                if (!b) throw Error("Invalid event type");
                var f = !!d,
                    l = qb(a);
                l || (a[mb] = l = new J(a));
                c = l.add(b, c, !1, d, e);
                if (!c.Ra) {
                    d = rb();
                    c.Ra = d;
                    d.src = a;
                    d.listener = c;
                    if (a.addEventListener) a.addEventListener(b.toString(), d, f);
                    else if (a.attachEvent) a.attachEvent(sb(b.toString()), d);
                    else throw Error("addEventListener and attachEvent are unavailable.");
                    ob++
                }
                a = c
            }
            return a
        },
        rb = function() {
            var a = tb,
                b = db ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        ub = function(a, b, c, d, e) {
            if ("array" == m(b))
                for (var f = 0; f < b.length; f++) ub(a, b[f], c, d, e);
            else c = pb(c), a && a[gb] ? a.Cb(b, c, d, e) : a && (a = qb(a)) && (b = a.sa(b, c, !!d, e)) && vb(b)
        },
        vb = function(a) {
            if (!n(a) && a && !a.oa) {
                var b = a.src;
                if (b && b[gb]) lb(b.G, a);
                else {
                    var c = a.type,
                        d = a.Ra;
                    b.removeEventListener ? b.removeEventListener(c, d, a.qa) : b.detachEvent && b.detachEvent(sb(c),
                        d);
                    ob--;
                    (c = qb(b)) ? (lb(c, a), 0 == c.Fa && (c.src = null, b[mb] = null)) : jb(a)
                }
            }
        },
        sb = function(a) {
            return a in nb ? nb[a] : nb[a] = "on" + a
        },
        xb = function(a, b, c, d) {
            var e = !0;
            if (a = qb(a))
                if (b = a.s[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.qa == c && !f.oa && (f = wb(f, d), e = e && !1 !== f)
                    }
                return e
        },
        wb = function(a, b) {
            var c = a.listener,
                d = a.Ja || a.src;
            a.Ha && vb(a);
            return c.call(d, b)
        },
        tb = function(a, b) {
            if (a.oa) return !0;
            if (!db) {
                var c;
                if (!(c = b)) a: {
                    c = ["window", "event"];
                    for (var d = h, e; e = c.shift();)
                        if (null != d[e]) d = d[e];
                        else {
                            c =
                                null;
                            break a
                        }
                    c = d
                }
                e = c;
                c = new fb(e, this);
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
                    for (var f = a.type, q = e.length - 1; !c.Z && 0 <= q; q--) {
                        c.currentTarget = e[q];
                        var u = xb(e[q], f, !0, c),
                            d = d && u
                    }
                    for (q = 0; !c.Z && q < e.length; q++) c.currentTarget = e[q],
                    u = xb(e[q], f, !1, c),
                    d = d && u
                }
                return d
            }
            return wb(a, new fb(b, this))
        },
        qb = function(a) {
            a = a[mb];
            return a instanceof
            J ? a : null
        },
        yb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        pb = function(a) {
            w(a, "Listener can not be null.");
            if ("function" == m(a)) return a;
            w(a.handleEvent, "An object listener must have handleEvent method.");
            a[yb] || (a[yb] = function(b) {
                return a.handleEvent(b)
            });
            return a[yb]
        };
    var L = function() {
        G.call(this);
        this.G = new J(this);
        this.ic = this;
        this.yb = null
    };
    t(L, G);
    L.prototype[gb] = !0;
    g = L.prototype;
    g.addEventListener = function(a, b, c, d) {
        K(this, a, b, c, d)
    };
    g.removeEventListener = function(a, b, c, d) {
        ub(this, a, b, c, d)
    };
    g.dispatchEvent = function(a) {
        zb(this);
        var b, c = this.yb;
        if (c) {
            b = [];
            for (var d = 1; c; c = c.yb) b.push(c), w(1E3 > ++d, "infinite loop")
        }
        c = this.ic;
        d = a.type || a;
        if (ba(a)) a = new I(a, c);
        else if (a instanceof I) a.target = a.target || c;
        else {
            var e = a;
            a = new I(d, c);
            za(a, e)
        }
        var e = !0,
            f;
        if (b)
            for (var l = b.length - 1; !a.Z && 0 <= l; l--) f = a.currentTarget = b[l], e = Ab(f, d, !0, a) && e;
        a.Z || (f = a.currentTarget = c, e = Ab(f, d, !0, a) && e, a.Z || (e = Ab(f, d, !1, a) && e));
        if (b)
            for (l = 0; !a.Z && l < b.length; l++) f = a.currentTarget = b[l], e = Ab(f, d, !1, a) && e;
        return e
    };
    g.l = function() {
        L.D.l.call(this);
        this.G && this.G.zb(void 0);
        this.yb = null
    };
    g.ma = function(a, b, c, d) {
        zb(this);
        return this.G.add(String(a), b, !1, c, d)
    };
    g.Cb = function(a, b, c, d) {
        return this.G.remove(String(a), b, c, d)
    };
    var Ab = function(a, b, c, d) {
        b = a.G.s[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var l = b[f];
            if (l && !l.oa && l.qa == c) {
                var q = l.listener,
                    u = l.Ja || l.src;
                l.Ha && lb(a.G, l);
                e = !1 !== q.call(u, d) && e
            }
        }
        return e && 0 != d.Zb
    };
    L.prototype.sa = function(a, b, c, d) {
        return this.G.sa(String(a), b, c, d)
    };
    L.prototype.hasListener = function(a, b) {
        return this.G.hasListener(k(a) ? String(a) : void 0, b)
    };
    var zb = function(a) {
        w(a.G, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var M = function(a, b, c) {
            a && a.log(b, c, void 0)
        },
        N = function(a, b) {
            a && a.log(Pa, b, void 0)
        },
        Bb = function(a, b) {
            a && a.log(Qa, b, void 0)
        },
        O = function(a, b) {
            a && a.info(b, void 0)
        },
        Cb = function(a, b) {
            a && a.log(Ta, b, void 0)
        };
    var P = function(a, b) {
        L.call(this);
        this.ca = b;
        this.lb = !0;
        this.fa = a;
        this.onClose = this.onMessage = null;
        this.fa.ma(this.ca, this.ub, !1, this)
    };
    t(P, L);
    r("cast.receiver.CastChannel", P);
    P.EventType = {
        MESSAGE: "message",
        CLOSE: "close"
    };
    var Db = function(a, b) {
        I.call(this, a);
        this.message = b
    };
    t(Db, I);
    P.Event = Db;
    P.prototype.a = F("cast.receiver.CastChannel");
    P.prototype.J = function() {
        return "CastChannel[" + this.ca + " " + this.fa.T() + "]"
    };
    P.prototype.T = function() {
        return this.fa.T()
    };
    P.prototype.getNamespace = P.prototype.T;
    P.prototype.Sc = function() {
        return this.ca
    };
    P.prototype.getSenderId = P.prototype.Sc;
    P.prototype.ub = function(a) {
        M(this.a, E, "Dispatching CastChannel message [" + this.fa.T() + ", " + this.ca + "]: " + a.data);
        a = new Db("message", a.data);
        if (this.onMessage) this.onMessage(a);
        this.dispatchEvent(a)
    };
    P.prototype.close = function() {
        if (this.lb) {
            this.lb = !1;
            O(this.a, "Closing CastChannel [" + this.fa.T() + ", " + this.ca + "]");
            var a = new Db("close", this.ca);
            if (this.onClose) this.onClose(a);
            this.dispatchEvent(a);
            this.S()
        }
    };
    P.prototype.send = function(a) {
        if (!this.lb) throw Error("Invalid state, socket not open");
        this.fa.send(this.ca, a)
    };
    P.prototype.send = P.prototype.send;
    P.prototype.l = function() {
        P.D.l.call(this);
        M(this.a, E, "Disposed " + this.J())
    };
    var Eb = function(a, b, c) {
        if ("function" == m(a)) c && (a = p(a, c));
        else if (a && "function" == typeof a.handleEvent) a = p(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : h.setTimeout(a, b || 0)
    };
    var Gb = function(a, b) {
        L.call(this);
        this.kc = k(a) ? a : !0;
        this.ib = b || Fb;
        this.Oa = this.ib(this.Da)
    };
    t(Gb, L);
    g = Gb.prototype;
    g.w = null;
    g.M = null;
    g.na = void 0;
    g.$a = !1;
    g.Da = 0;
    g.$ = null;
    var Hb = Gb.prototype,
        Ib = F("goog.net.WebSocket");
    Hb.a = Ib;
    var Fb = function(a) {
        return Math.min(1E3 * Math.pow(2, a), 6E4)
    };
    g = Gb.prototype;
    g.open = function(a, b) {
        w(h.WebSocket, "This browser does not support WebSocket");
        w(!this.wa(), "The WebSocket is already open");
        null != this.$ && h.clearTimeout(this.$);
        this.$ = null;
        this.M = a;
        (this.na = b) ? (O(this.a, "Opening the WebSocket on " + this.M + " with protocol " + this.na), this.w = new WebSocket(this.M, this.na)) : (O(this.a, "Opening the WebSocket on " + this.M), this.w = new WebSocket(this.M));
        this.w.onopen = p(this.bd, this);
        this.w.onclose = p(this.$c, this);
        this.w.onmessage = p(this.vb, this);
        this.w.onerror = p(this.sb, this)
    };
    g.close = function() {
        null != this.$ && h.clearTimeout(this.$);
        this.$ = null;
        this.w && (O(this.a, "Closing the WebSocket."), this.$a = !0, this.w.close(), this.w = null)
    };
    g.send = function(a) {
        w(this.wa(), "Cannot send without an open socket");
        this.w.send(a)
    };
    g.wa = function() {
        return !!this.w && 1 == this.w.readyState
    };
    g.bd = function() {
        O(this.a, "WebSocket opened on " + this.M);
        this.dispatchEvent("d");
        this.Da = 0;
        this.Oa = this.ib(this.Da)
    };
    g.$c = function(a) {
        O(this.a, "The WebSocket on " + this.M + " closed.");
        this.dispatchEvent("a");
        this.w = null;
        this.$a ? (O(this.a, "The WebSocket closed normally."), this.M = null, this.na = void 0) : (N(this.a, "The WebSocket disconnected unexpectedly: " + a.data), this.kc && (O(this.a, "Seconds until next reconnect attempt: " + Math.floor(this.Oa / 1E3)), this.$ = Eb(p(this.open, this, this.M, this.na), this.Oa, this), this.Da++, this.Oa = this.ib(this.Da)));
        this.$a = !1
    };
    g.vb = function(a) {
        this.dispatchEvent(new Jb(a.data))
    };
    g.sb = function(a) {
        a = a.data;
        N(this.a, "An error occurred: " + a);
        this.dispatchEvent(new Kb(a))
    };
    g.l = function() {
        Gb.D.l.call(this);
        this.close()
    };
    var Jb = function(a) {
        I.call(this, "c");
        this.message = a
    };
    t(Jb, I);
    var Kb = function(a) {
        I.call(this, "b");
        this.data = a
    };
    t(Kb, I);
    var Lb = {
            "port-for-web-server": "8008"
        },
        Mb = cast.__platform__ && cast.__platform__.queryPlatformValue || function(a) {
            if (a in Lb) return Lb[a]
        };
    F("cast.receiver.platform.WebSocket");
    r("cast.receiver.system.NAMESPACE_PREFIX", "urn:x-cast:");
    r("cast.receiver.system.ApplicationData", function() {
        this.name = this.id = "";
        this.sessionId = 0;
        this.namespaces = [];
        this.launchingSenderId = ""
    });
    r("cast.receiver.system.SystemVolumeData", function() {
        this.level = 1;
        this.muted = !1
    });
    r("cast.receiver.system.Sender", function() {
        this.userAgent = this.id = ""
    });
    r("cast.receiver.system.VisibilityState", {
        VISIBLE: "visible",
        NOT_VISIBLE: "notvisible",
        UNKNOWN: "unknown"
    });
    r("cast.receiver.system.StandbyState", {
        STANDBY: "standby",
        NOT_STANDBY: "notstandby",
        UNKNOWN: "unknown"
    });
    r("cast.receiver.system.SystemState", {
        NOT_STARTED: "notstarted",
        STARTING_IN_BACKGROUND: "startinginbackground",
        STARTING: "starting",
        READY: "ready",
        STOPPING_IN_BACKGROUND: "stoppinginbackground",
        STOPPING: "stopping"
    });
    var Nb = function() {
        L.call(this);
        this.A = null;
        O(this.a, "Opening net websocket");
        var a = new Gb(!0);
        this.A && this.A.S();
        this.A = a;
        ab(this, ea(bb, this.A));
        K(this.A, "d", this.cd, !1, this);
        K(this.A, "a", this.ad, !1, this);
        K(this.A, "b", this.sb, !1, this);
        K(this.A, "c", this.vb, !1, this)
    };
    t(Nb, L);
    var Ob = function(a, b, c) {
        I.call(this, a);
        this.senderId = b;
        this.data = c
    };
    t(Ob, I);
    Nb.prototype.a = F("cast.receiver.IpcChannel");
    Nb.prototype.gb = function() {
        return "IpcChannel"
    };
    var Pb = function(a, b) {
        Cb(a.a, a.gb() + " " + b);
        a.dispatchEvent(new Ob("urn:x-cast:com.google.cast.system", "SystemSender", JSON.stringify({
            type: b
        })))
    };
    g = Nb.prototype;
    g.cd = function() {
        Pb(this, "opened")
    };
    g.ad = function() {
        Pb(this, "closed")
    };
    g.sb = function() {
        Pb(this, "error")
    };
    g.vb = function(a) {
        Cb(this.a, "Received message: " + a.message);
        var b = (a = JSON.parse(a.message)) && a.namespace;
        a && b && a.senderId && a.data ? this.dispatchEvent(new Ob(b, a.senderId, a.data)) : N(this.a, this.gb() + " Message received is invalid")
    };
    g.open = function() {
        O(this.a, "Opening message bus websocket");
        this.A.open("ws://localhost:" + Mb("port-for-web-server") + "/v2/ipc")
    };
    g.close = function() {
        O(this.a, "Closing message bus websocket");
        this.A.close()
    };
    g.wa = function() {
        return this.A.wa()
    };
    g.send = function(a, b, c) {
        if (!this.wa) throw Error("Underlying websocket is not open");
        a = JSON.stringify({
            namespace: a,
            senderId: b,
            data: c
        });
        Cb(this.a, "IPC message sent: " + a);
        this.A.send(a)
    };
    g.l = function() {
        Nb.D.l.call(this);
        M(this.a, E, "Disposed " + this.gb())
    };
    var Q = function(a, b, c, d) {
        L.call(this);
        this.K = a;
        this.V = b;
        this.nb = !1;
        this.Ba = d || "STRING";
        this.onMessage = null;
        this.serializeMessage = this.Ic;
        this.deserializeMessage = this.pc;
        this.u = {};
        for (a = 0; a < c.length; a++) this.u[c[a]] = null;
        this.V.ma(this.K, this.ub, !1, this)
    };
    t(Q, L);
    r("cast.receiver.CastMessageBus", Q);
    Q.MessageType = {
        STRING: "STRING",
        JSON: "JSON",
        CUSTOM: "CUSTOM"
    };
    Q.EventType = {
        MESSAGE: "message"
    };
    var Qb = function(a, b, c) {
        I.call(this, a);
        this.senderId = b;
        this.data = c
    };
    t(Qb, I);
    Q.Event = Qb;
    Q.prototype.a = F("cast.receiver.CastMessageBus");
    Q.prototype.J = function() {
        return "CastMessageBus[" + this.K + "]"
    };
    Q.prototype.T = function() {
        return this.K
    };
    Q.prototype.getNamespace = Q.prototype.T;
    Q.prototype.Kb = function() {
        return this.Ba
    };
    Q.prototype.getMessageType = Q.prototype.Kb;
    Q.prototype.ub = function(a) {
        M(this.a, E, "Dispatching CastMessageBus message");
        var b = "STRING" == this.Ba ? a.data : this.deserializeMessage(a.data);
        this.dispatchEvent(new Qb(a.senderId, a.senderId, b));
        a = new Qb("message", a.senderId, b);
        if (this.onMessage) this.onMessage(a);
        this.dispatchEvent(a)
    };
    Q.prototype.send = function(a, b) {
        this.nb || "urn:x-cast:com.google.cast.system" == this.K || Bb(this.a, "Application should not send requests before the system is ready (they will be ignored)");
        if ("STRING" == this.Ba) {
            if (!ba(b)) throw Error("Wrong argument, CastMessageBus type is STRING");
            this.V.send(this.K, a, b)
        } else this.V.send(this.K, a, this.serializeMessage(b))
    };
    Q.prototype.send = Q.prototype.send;
    Q.prototype.Eb = function(a) {
        this.send("*:*", a)
    };
    Q.prototype.broadcast = Q.prototype.Eb;
    Q.prototype.Lc = function(a) {
        if (a in this.u) return this.u[a] || (this.u[a] = new P(this, a)), this.u[a];
        throw Error("Requested a socket for a disconnected sender: " + a);
    };
    Q.prototype.getCastChannel = Q.prototype.Lc;
    Q.prototype.Ic = function(a) {
        if ("JSON" != this.Ba) throw Error("Unexpected message type for JSON serialization");
        return JSON.stringify(a)
    };
    Q.prototype.pc = function(a) {
        if ("JSON" != this.Ba) throw Error("Unexpected message type for JSON serialization");
        return JSON.parse(a)
    };
    Q.prototype.l = function() {
        Q.D.l.call(this);
        for (var a in this.u) this.u[a] && this.u[a].close();
        this.u = {};
        M(this.a, E, "Disposed " + this.J())
    };
    var Rb = function() {
            this.Xb = fa()
        },
        Sb = new Rb;
    Rb.prototype.set = function(a) {
        this.Xb = a
    };
    Rb.prototype.reset = function() {
        this.set(fa())
    };
    Rb.prototype.get = function() {
        return this.Xb
    };
    var Tb = function(a) {
        this.fd = a || "";
        this.sd = Sb
    };
    g = Tb.prototype;
    g.Db = !0;
    g.ec = !0;
    g.qd = !0;
    g.pd = !0;
    g.fc = !1;
    g.rd = !1;
    var Ub = function(a) {
            return 10 > a ? "0" + a : String(a)
        },
        Vb = function(a, b) {
            var c = (a.hc - b) / 1E3,
                d = c.toFixed(3),
                e = 0;
            if (1 > c) e = 2;
            else
                for (; 100 > c;) e++, c *= 10;
            for (; 0 < e--;) d = " " + d;
            return d
        },
        Wb = function(a) {
            Tb.call(this, a)
        };
    t(Wb, Tb);
    var Xb = function() {
        this.gd = p(this.jc, this);
        this.Ia = new Wb;
        this.Ia.ec = !1;
        this.Ia.fc = !1;
        this.Nb = this.Ia.Db = !1;
        this.Ob = "";
        this.Jc = {}
    };
    Xb.prototype.jc = function(a) {
        if (!this.Jc[a.Pb]) {
            var b;
            b = this.Ia;
            var c = [];
            c.push(b.fd, " ");
            if (b.ec) {
                var d = new Date(a.hc);
                c.push("[", Ub(d.getFullYear() - 2E3) + Ub(d.getMonth() + 1) + Ub(d.getDate()) + " " + Ub(d.getHours()) + ":" + Ub(d.getMinutes()) + ":" + Ub(d.getSeconds()) + "." + Ub(Math.floor(d.getMilliseconds() / 10)), "] ")
            }
            b.qd && c.push("[", Vb(a, b.sd.get()), "s] ");
            b.pd && c.push("[", a.Pb, "] ");
            b.rd && c.push("[", a.hb()
                .name, "] ");
            c.push(a.Rb);
            b.fc && (d = a.fb) && c.push("\n", d instanceof Error ? d.message : d.toString());
            b.Db && c.push("\n");
            b = c.join("");
            if (c = Yb) switch (a.hb()) {
                case Oa:
                    Zb(c, "info", b);
                    break;
                case Pa:
                    Zb(c, "error", b);
                    break;
                case Qa:
                    Zb(c, "warn", b);
                    break;
                default:
                    Zb(c, "debug", b)
            } else this.Ob += b
        }
    };
    var Yb = h.console,
        Zb = function(a, b, c) {
            if (a[b]) a[b](c);
            else a.log(c)
        };
    var R = function() {
        L.call(this);
        if (this.Fb = new Xb) {
            var a = this.Fb;
            if (1 != a.Nb) {
                $a();
                var b = Za,
                    c = a.gd;
                b.ua || (b.ua = []);
                b.ua.push(c);
                a.Nb = !0
            }
        }
        this.o = xa($b);
        this.Ca = !1;
        this.V = new Nb;
        this.H = {};
        this.da = new Q("urn:x-cast:com.google.cast.system", this.V, wa(this.H), "JSON");
        ab(this, ea(bb, this.da));
        this.Gb = this.Ga = null;
        this.Mb = !1;
        this.ya = this.za = null;
        this.Sa = !0;
        this.Yc = "1.11";
        this.ea = "notstarted";
        this.v = {};
        this.onStandbyChanged = this.onVisibilityChanged = this.onSystemVolumeChanged = this.onSenderDisconnected = this.onSenderConnected =
            this.onShutdown = this.onReady = null;
        K(this.da, "SystemSender", this.dd, !1, this);
        K(window, "unload", this.xb, !1, this);
        K(document, "visibilitychange", this.Tb, !1, this);
        M(this.a, Oa, "Version: 2.0.0.0040")
    };
    t(R, L);
    r("cast.receiver.CastReceiverManager", R);
    R.Ib = function() {
        return R.kb ? R.kb : R.kb = new R
    };
    R.getInstance = R.Ib;
    var ac = ["A59513CE", "67FE9D30", "B03290DF", "E8C28D3C"];
    R.EventType = {
        READY: "ready",
        SHUTDOWN: "shutdown",
        SENDER_CONNECTED: "senderconnected",
        SENDER_DISCONNECTED: "senderdisconnected",
        ERROR: "error",
        SYSTEM_VOLUME_CHANGED: "systemvolumechanged",
        VISIBILITY_CHANGED: "visibilitychanged",
        STANDBY_CHANGED: "standbychanged"
    };
    var S = function(a, b) {
        I.call(this, a);
        this.data = b
    };
    t(S, I);
    R.Event = S;
    r("cast.receiver.system.DisconnectReason", {
        REQUESTED_BY_SENDER: "requested_by_sender",
        ERROR: "error",
        UNKNOWN: "unknown"
    });
    var bc = function(a, b, c) {
        S.call(this, "senderdisconnected", a);
        this.senderId = a;
        this.userAgent = b;
        this.reason = c
    };
    t(bc, S);
    R.SenderDisconnectedEvent = bc;
    var cc = function(a, b) {
        S.call(this, "senderconnected", a);
        this.senderId = a;
        this.userAgent = b
    };
    t(cc, S);
    R.SenderConnectedEvent = cc;
    var dc = function(a) {
        S.call(this, "visibilitychanged", a);
        this.isVisible = a
    };
    t(dc, S);
    R.VisibilityChangedEvent = dc;
    var ec = function(a) {
        S.call(this, "standbychanged", null);
        this.isStandby = a
    };
    t(ec, S);
    R.StandbyChangedEvent = ec;
    var fc = function(a) {
        S.call(this, "systemvolumechanged", a);
        this.data = a
    };
    t(fc, S);
    R.SystemVolumeChangedEvent = fc;
    var gc = function(a) {
        S.call(this, "ready", a);
        this.data = a
    };
    t(gc, S);
    R.ReadyEvent = gc;
    var hc = function() {
        S.call(this, "shutdown", null)
    };
    t(hc, S);
    R.ShutdownEvent = hc;
    R.Config = function() {
        this.disableChromecastAppFiltering = this.dialData = this.maxInactivity = this.statusText = void 0
    };
    var $b = {
        maxInactivity: 10
    };
    R.prototype.a = F("cast.receiver.CastReceiverManager");
    R.prototype.J = function() {
        return "CastReceiverManager"
    };
    R.prototype.start = function(a) {
        if (a) {
            if (!a) throw Error("Cannot validate undefined config.");
            if (void 0 != a.maxInactivity && 5 > a.maxInactivity) throw Error("config.maxInactivity must be greater than or equal to 5 seconds.");
            za(this.o, a || {})
        }
        this.Mb = !0;
        this.V.open()
    };
    R.prototype.start = R.prototype.start;
    R.prototype.stop = function() {
        this.S();
        window.close()
    };
    R.prototype.stop = R.prototype.stop;
    R.prototype.mb = function() {
        return "ready" == this.ea
    };
    R.prototype.isSystemReady = R.prototype.mb;
    R.prototype.Tc = function() {
        return wa(this.H)
    };
    R.prototype.getSenders = R.prototype.Tc;
    R.prototype.Rc = function(a) {
        return this.H[a] ? xa(this.H[a]) : null
    };
    R.prototype.getSender = R.prototype.Rc;
    R.prototype.Vc = function() {
        return null == this.za ? this.ya ? "notvisible" : "unknown" : this.za ? "visible" : "notvisible"
    };
    R.prototype.getVisibilityState = R.prototype.Vc;
    R.prototype.Uc = function() {
        return null == this.ya ? this.za ? "notstandby" : "unknown" : this.ya ? "standby" : "notstandby"
    };
    R.prototype.getStandbyState = R.prototype.Uc;
    R.prototype.Lb = function() {
        "notstarted" == this.ea && (this.ea = /[&?]google_cast_bg=true(&|$)/.test(window.location.search) ? "startinginbackground" : "starting");
        return this.ea
    };
    R.prototype.getSystemState = R.prototype.Lb;
    R.prototype.Kc = function() {
        return this.Ga
    };
    R.prototype.getApplicationData = R.prototype.Kc;
    R.prototype.Nc = function() {
        return this.Gb
    };
    R.prototype.getDeviceCapabilities = R.prototype.Nc;
    R.prototype.jd = function(a) {
        this.mb() ? ic(this, a) : this.o.statusText != a && (this.o.statusText = a, this.Ca = !0)
    };
    R.prototype.setApplicationState = R.prototype.jd;
    R.prototype.ld = function(a, b) {
        this.mb() ? ic(this, a, b) : (void 0 != a && a != this.o.statusText && (this.o.statusText = a, this.Ca = !0), void 0 != b && b != this.o.dialData && (this.o.dialData = b, this.Ca = !0))
    };
    R.prototype.setLegacyApplicationState = R.prototype.ld;
    R.prototype.nd = function(a) {
        if (0 > a || 1 < a) throw Error("Invalid level value");
        this.da.send("SystemSender", {
            type: "setvolume",
            level: a
        })
    };
    R.prototype.setSystemVolumeLevel = R.prototype.nd;
    R.prototype.od = function(a) {
        this.da.send("SystemSender", {
            type: "setvolume",
            muted: a
        })
    };
    R.prototype.setSystemVolumeMuted = R.prototype.od;
    var ic = function(a, b, c) {
        var d = {
            type: "setappstate"
        };
        void 0 != b && (d.statusText = b);
        void 0 != c && (d.dialData = c);
        a.da.send("SystemSender", d)
    };
    R.prototype.bc = function(a) {
        this.da.send("SystemSender", {
            type: "startheartbeat",
            maxInactivity: a
        })
    };
    R.prototype.setInactivityTimeout = R.prototype.bc;
    R.prototype.Hb = function(a, b) {
        if ("urn:x-cast:com.google.cast.system" == a) throw Error("Protected namespace");
        if (0 != a.lastIndexOf("urn:x-cast:", 0)) throw Error("Invalid namespace prefix");
        if (!this.v[a]) {
            if (this.Mb) throw Error("New namespaces can not be requested after start has been called");
            this.v[a] = new Q(a, this.V, wa(this.H), b);
            ab(this, ea(bb, this.v[a]))
        }
        if (b && this.v[a].Kb() != b) throw Error("Invalid messageType for the namespace");
        return this.v[a]
    };
    R.prototype.getCastMessageBus = R.prototype.Hb;
    R.prototype.dd = function(a) {
        a = a.data;
        switch (a.type) {
            case "opened":
                O(this.a, "Underlying message bus is open");
                var b = wa(this.v),
                    c = this.o.statusText;
                a = this.o.dialData;
                var d = {
                    type: "ready"
                };
                c && (d.statusText = c);
                a && (d.dialData = a);
                d.activeNamespaces = b;
                d.version = "2.0.0";
                d.messagesVersion = "1.0";
                this.da.send("SystemSender", d);
                this.o.maxInactivity && this.bc(this.o.maxInactivity);
                break;
            case "closed":
                this.xb();
                break;
            case "error":
                this.dispatchEvent("error");
                break;
            case "ready":
                b = a.launchingSenderId;
                c = wa(this.v);
                this.Va =
                    a.version;
                this.Sa = !jc(this, this.Yc);
                var e = a.deviceCapabilities;
                this.Gb = e ? xa(e) : {};
                this.Ga = {
                    id: a.applicationId,
                    name: a.applicationName,
                    sessionId: a.sessionId,
                    namespaces: c,
                    launchingSenderId: b
                };
                0 <= y(ac, this.Ga.id) && (this.o.disableChromecastAppFiltering = !0);
                this.ea = "ready";
                for (d in this.v) this.v[d].nb = !0;
                this.Ca && (this.Ca = !1, ic(this, this.o.statusText, this.o.dialData));
                O(this.a, "Dispatching CastReceiverManager system ready event");
                b = new gc(this.Ga);
                if (this.onReady) this.onReady(b);
                this.dispatchEvent(b);
                break;
            case "senderconnected":
                b = {
                    id: a.senderId,
                    userAgent: a.userAgent
                };
                if (this.o.disableChromecastAppFiltering || !v(b.id.toLowerCase(), "com.google.android.apps.chromecast.app")) {
                    O(this.a, "Dispatching CastReceiverManager sender connected event [" + b.id + "]");
                    b.id in this.H && N(this.a, "Unexpected connected message for already connected sender: " + b.id);
                    this.H[b.id] = b;
                    a = new cc(b.id, b.userAgent);
                    for (c in this.v) d = this.v[c], e = b.id, e in d.u ? N(d.a, "Unexpected sender already registered [" + d.K + ", " + e + "]") : (O(d.a, "Registering sender [" +
                        d.K + ", " + e + "]"), d.u[e] = null);
                    if (this.onSenderConnected) this.onSenderConnected(a);
                    this.dispatchEvent(a)
                }
                break;
            case "senderdisconnected":
                c = a.senderId;
                if (this.o.disableChromecastAppFiltering || !v(c.toLowerCase(), "com.google.android.apps.chromecast.app")) {
                    switch (a.reason) {
                        case "closed_by_peer":
                            a = "requested_by_sender";
                            break;
                        case "transport_invalid_message":
                            a = "error";
                            break;
                        default:
                            a = "unknown"
                    }
                    O(this.a, "Dispatching sender disconnected event [" + c + "] Reason: " + a);
                    if (c in this.H) {
                        d = this.H[c].userAgent;
                        delete this.H[c];
                        a = new bc(c, d, a);
                        for (b in this.v) d = this.v[b], e = c, e in d.u && (O(d.a, "Unregistering sender [" + d.K + ", " + e + "]"), d.u[e] && d.u[e].close(), delete d.u[e]);
                        if (this.onSenderDisconnected) this.onSenderDisconnected(a);
                        this.dispatchEvent(a)
                    } else N(this.a, "Unknown sender disconnected: " + c)
                }
                break;
            case "volumechanged":
                b = {
                    level: a.level,
                    muted: a.muted
                };
                O(this.a, "Dispatching system volume changed event [" + b.level + ", " + b.muted + "]");
                b = new fc(b);
                if (this.onSystemVolumeChanged) this.onSystemVolumeChanged(b);
                this.dispatchEvent(b);
                break;
            case "visibilitychanged":
                this.Sa || (b = a.visible, kc(this, k(b) ? b : null));
                break;
            case "standbychanged":
                if (!this.Sa && (b = a.standby, b = k(b) ? b : null, b != this.ya)) {
                    O(this.a, "Dispatching standby changed event " + b);
                    this.ya = b;
                    b = new ec(!0 === b);
                    if (this.onStandbyChanged) this.onStandbyChanged(b);
                    this.dispatchEvent(b)
                }
                break;
            default:
                throw Error("Unexpected message type: " + a.type);
        }
    };
    var kc = function(a, b) {
        if (b == a.za) O(a.a, "Ignoring visibility changed event, state is already " + b);
        else {
            O(a.a, "Dispatching visibility changed event " + b);
            a.za = b;
            var c = new dc(!1 !== b);
            if (a.onVisibilityChanged) a.onVisibilityChanged(c);
            a.dispatchEvent(c)
        }
    };
    R.prototype.Tb = function() {
        this.Sa && kc(this, "visible" == document.visibilityState)
    };
    R.prototype.xb = function() {
        O(this.a, "Dispatching shutdown event");
        this.Lb();
        this.ea = "startinginbackground" == this.ea ? "stoppinginbackground" : "stopping";
        for (var a in this.v) this.v[a].nb = !1;
        a = new hc;
        if (this.onShutdown) this.onShutdown(a);
        this.dispatchEvent(a)
    };
    var jc = function(a, b) {
        if (!b) return N(a.a, "Version not provided"), !1;
        if (!a.Va) return N(a.a, "No System Version"), !1;
        var c = b.split(".");
        if (!c.length) return N(a.a, "Version provided is not valid: " + b), !1;
        var d = a.Va.split(".");
        if (!d.length) return N(a.a, "System Version format is not valid " + a.Va), !1;
        for (var e = 0; e < c.length; e++) {
            var f = parseInt(c[e], 10);
            if (isNaN(f)) return N(a.a, "Version is not numeric: " + b), !1;
            var l = d.length > e ? parseInt(d[e], 10) : 0;
            if (isNaN(l)) return N(a.a, "System Version is not numeric: " + a.Va), !1;
            if (f > l) return !1
        }
        return !0
    };
    R.prototype.l = function() {
        R.D.l.call(this);
        window && ub(window, "unload", this.xb, !1, this);
        document && ub(document, "visibilitychange", this.Tb, !1, this);
        delete R.kb;
        Cb(this.a, "Disposed " + this.J())
    };
    var lc = Boolean(cast.__platform__ && cast.__platform__.crypto);
    r("cast.receiver.cryptokeys.getKeyByName", Boolean(cast.__platform__ && cast.__platform__.cryptokeys) ? cast.__platform__.cryptokeys.getKeyByName : window.cryptokeys && window.cryptokeys.getKeyByName);
    r("cast.receiver.crypto.decrypt", lc ? cast.__platform__.crypto.decrypt : window.crypto.subtle.decrypt);
    r("cast.receiver.crypto.encrypt", lc ? cast.__platform__.crypto.encrypt : window.crypto.subtle.encrypt);
    r("cast.receiver.crypto.sign", lc ? cast.__platform__.crypto.sign : window.crypto.subtle.sign);
    r("cast.receiver.crypto.unwrapKey", lc ? cast.__platform__.crypto.unwrapKey : window.crypto.subtle.unwrapKey);
    r("cast.receiver.crypto.verify", lc ? cast.__platform__.crypto.verify : window.crypto.subtle.verify);
    r("cast.receiver.crypto.wrapKey", lc ? cast.__platform__.crypto.wrapKey : window.crypto.subtle.wrapKey);
    var mc = function(a, b) {
        this.a = a;
        this.c = b;
        this.eb = function() {};
        this.cb = function() {};
        this.ob = function() {};
        this.ja = 0;
        this.L = this.ga = null;
        this.Wb = 0;
        this.B = this.F = null;
        this.xa = !1;
        this.Ka = !0;
        K(this.c, "error", this.rb, !1, this);
        K(this.c, "ended", this.Pa, !1, this);
        K(this.c, "loadedmetadata", this.wb, !1, this);
        O(this.a, "Using default Player")
    };
    g = mc.prototype;
    g.Vb = function(a, b, c, d) {
        nc(this);
        this.Ka = a;
        this.ja = b;
        this.Wb = d || 0;
        this.L = c || null
    };
    g.rb = function(a) {
        nc(this);
        this.eb(a)
    };
    g.Pa = function() {
        nc(this);
        this.cb()
    };
    g.wb = function() {
        this.F && this.B && oc(this.F, this.B);
        this.ob()
    };
    g.registerErrorCallback = function(a) {
        this.eb = a
    };
    g.registerEndedCallback = function(a) {
        this.cb = a
    };
    g.registerLoadCallback = function(a) {
        this.ob = a
    };
    g.unregisterErrorCallback = function() {
        this.eb = function() {}
    };
    g.unregisterEndedCallback = function() {
        this.cb = function() {}
    };
    g.unregisterLoadCallback = function() {
        this.ob = function() {}
    };
    var pc = function(a) {
            var b = a.c.duration;
            if (isNaN(b) || null == a.L) return b;
            if (null != a.ga) return a.ga;
            if (0 <= a.L) {
                var c = a.Wb + a.L;
                a.ga = Math.min(c, b)
            } else c = b + a.L, a.ga = Math.max(c, a.ja);
            return a.ga
        },
        nc = function(a) {
            null != a.L && (ub(a.c, "timeupdate", a.Ub, !1, a), a.ga = null, a.L = null)
        };
    mc.prototype.Ub = function() {
        qc(this)
    };
    var qc = function(a) {
        if (null == a.L) return !1;
        var b = pc(a);
        return isNaN(b) ? !1 : a.c.currentTime >= b ? (a.Pa(), !0) : !1
    };
    g = mc.prototype;
    g.load = function(a, b, c, d, e) {
        this.xa = !1;
        d && d.tracks && this.c && (this.F && this.F.S(), this.F = new rc(this.c, d.tracks, d.activeTrackIds || [], d.textTrackStyle || null));
        null != this.L && K(this.c, "timeupdate", this.Ub, !1, this);
        e || (this.ja = c && 0 < c ? c : 0, O(this.a, "Load - contentId: " + a + " autoplay: " + b + " time: " + this.ja), this.c.autoplay = !1, a && (this.c.src = a), this.c.autoplay = b, this.c.load())
    };
    g.reset = function() {
        this.xa = !1;
        this.F && (this.F.S(), this.F = null);
        this.activeTrackIds = null;
        this.c.removeAttribute("src");
        this.ja = 0;
        this.c.load();
        nc(this)
    };
    g.play = function() {
        this.xa = !1;
        this.c.play()
    };
    g.seek = function(a, b) {
        this.c.currentTime != a && (this.c.currentTime = a);
        qc(this) || ("PLAYBACK_START" == b && this.c.paused ? this.c.play() : "PLAYBACK_PAUSE" != b || this.c.paused || this.c.pause())
    };
    g.pause = function() {
        this.xa = !0;
        this.c.pause()
    };
    g.getState = function() {
        null == this.Ka && (this.Ka = this.c.autoplay);
        return this.c.paused || isNaN(this.c.duration) ? this.c.duration && (this.c.currentTime || 0 == this.c.currentTime) && this.c.currentTime < pc(this) ? this.c.currentTime == this.ja && this.Ka && !this.xa ? "BUFFERING" : "PAUSED" : "IDLE" : "PLAYING"
    };
    g.getCurrentTimeSec = function() {
        var a = pc(this);
        return isNaN(a) ? this.c.currentTime : this.c.currentTime < a ? this.c.currentTime : a
    };
    g.getDurationSec = function() {
        return pc(this)
    };
    g.getVolume = function() {
        return {
            level: this.c.volume,
            muted: this.c.muted
        }
    };
    g.setVolume = function(a) {
        void 0 != a.level && (this.c.volume = a.level);
        void 0 != a.muted && (this.c.muted = a.muted)
    };
    g.editTracksInfo = function(a) {
        if (this.F) {
            if (a.textTrackStyle) {
                var b = this.F,
                    c = a.textTrackStyle;
                sc(b);
                tc(b, c)
            }
            a.activeTrackIds && oc(this.F, a.activeTrackIds);
            this.B = a.activeTrackIds || []
        }
    };
    var uc = function(a) {
        G.call(this);
        this.ta = a;
        this.Aa = {}
    };
    t(uc, G);
    var vc = [];
    g = uc.prototype;
    g.ma = function(a, b, c, d) {
        "array" != m(b) && (b && (vc[0] = b.toString()), b = vc);
        for (var e = 0; e < b.length; e++) {
            var f = K(a, b[e], c || this.handleEvent, d || !1, this.ta || this);
            if (!f) break;
            this.Aa[f.key] = f
        }
        return this
    };
    g.Cb = function(a, b, c, d, e) {
        if ("array" == m(b))
            for (var f = 0; f < b.length; f++) this.Cb(a, b[f], c, d, e);
        else c = c || this.handleEvent, e = e || this.ta || this, c = pb(c), d = !!d, b = a && a[gb] ? a.sa(b, c, d, e) : a ? (a = qb(a)) ? a.sa(b, c, d, e) : null : null, b && (vb(b), delete this.Aa[b.key]);
        return this
    };
    g.zb = function() {
        ua(this.Aa, function(a, b) {
            this.Aa.hasOwnProperty(b) && vb(a)
        }, this);
        this.Aa = {}
    };
    g.l = function() {
        uc.D.l.call(this);
        this.zb()
    };
    g.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var wc = {
            ud: "persistent-release-message"
        },
        xc = new Uint8Array([43, 248, 102, 128, 198, 229, 78, 36, 190, 35, 15, 129, 90, 96, 110, 178]),
        T = function(a, b) {
            L.call(this);
            this.Xc = b;
            this.C = a.createSession("persistent-license");
            this.sessionId = "";
            this.expiration = this.C.expiration;
            this.closed = this.C.closed;
            this.keyStatuses = this.C.keyStatuses;
            this.ta = new uc(this);
            ab(this, ea(bb, this.ta))
        };
    t(T, L);
    r("cast.receiver.eme.KeySession.createSession", function(a, b) {
        a: {
            for (var c in wc)
                if (wc[c] === b) break a;
            throw Error("Unknown key session type: " + b);
        }
        c = new T(a, b);c.ta.ma(c.C, "message", c.Yb)
        .ma(c.C, "keystatuseschange", c.Yb);
        return c
    });
    T.prototype.generateRequest = function(a, b) {
        if ("persistent-release-message" == this.Xc) {
            if ("cenc" != a) throw Error("Only cenc initDataType is supported for persistent-release-message session type.");
            var c = new Uint8Array([0, 0, 0, 0, 112, 115, 115, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2]);
            c.set(xc, 12);
            (new DataView(c.buffer))
            .setUint32(0, c.length);
            var d = new Uint8Array(b.byteLength + c.byteLength);
            d.set(new Uint8Array(b), 0);
            d.set(c, b.byteLength);
            b = d
        }
        return this.C.generateRequest(a, b)
            .then(p(function() {
                this.sessionId =
                    this.C.sessionId
            }, this))
    };
    T.prototype.generateRequest = T.prototype.generateRequest;
    T.prototype.load = function(a) {
        return this.C.load(a)
    };
    T.prototype.load = T.prototype.load;
    T.prototype.update = function(a) {
        return this.C.update(a)
    };
    T.prototype.update = T.prototype.update;
    T.prototype.close = function() {
        return this.C.close()
    };
    T.prototype.close = T.prototype.close;
    T.prototype.remove = function() {
        return this.C.remove()
    };
    T.prototype.remove = T.prototype.remove;
    T.prototype.Yb = function(a) {
        var b = new I(a.type);
        za(b, a.ha);
        b.target = this;
        this.dispatchEvent(b)
    };
    var U = F("cast");
    r("cast.receiver.logger", U);
    r("cast.receiver.LoggerLevel", {
        DEBUG: 0,
        VERBOSE: 500,
        INFO: 800,
        WARNING: 900,
        ERROR: 1E3,
        NONE: 1500
    });
    U.cc = function(a) {
        U && U.Bb(Wa(a))
    };
    U.setLevelValue = U.cc;
    if (U) {
        var yc = parseInt(Mb("log-level-cast-receiver"), 10);
        U.cc(yc || 1E3)
    };
    var zc = function() {
        this.I = [];
        this.R = []
    };
    zc.prototype.enqueue = function(a) {
        this.R.push(a)
    };
    var Ac = function(a) {
            0 == a.I.length && (a.I = a.R, a.I.reverse(), a.R = []);
            return a.I.pop()
        },
        Bc = function(a) {
            return 0 == a.I.length && 0 == a.R.length
        };
    zc.prototype.clear = function() {
        this.I = [];
        this.R = []
    };
    zc.prototype.contains = function(a) {
        return 0 <= y(this.I, a) || 0 <= y(this.R, a)
    };
    zc.prototype.remove = function(a) {
        var b = pa(this.I, a);
        if (0 > b) return ra(this.R, a);
        qa(this.I, b);
        return !0
    };
    r("cast.receiver.media.MEDIA_NAMESPACE", "urn:x-cast:com.google.cast.media");
    r("cast.receiver.media.StreamType", {
        BUFFERED: "BUFFERED",
        LIVE: "LIVE",
        NONE: "NONE"
    });
    r("cast.receiver.media.ErrorType", {
        INVALID_PLAYER_STATE: "INVALID_PLAYER_STATE",
        LOAD_FAILED: "LOAD_FAILED",
        LOAD_CANCELLED: "LOAD_CANCELLED",
        INVALID_REQUEST: "INVALID_REQUEST"
    });
    r("cast.receiver.media.ErrorReason", {
        INVALID_COMMAND: "INVALID_COMMAND",
        INVALID_PARAMS: "INVALID_PARAMS",
        INVALID_MEDIA_SESSION_ID: "INVALID_MEDIA_SESSION_ID",
        DUPLICATE_REQUEST_ID: "DUPLICATE_REQUEST_ID"
    });
    r("cast.receiver.media.IdleReason", {
        CANCELLED: "CANCELLED",
        INTERRUPTED: "INTERRUPTED",
        FINISHED: "FINISHED",
        ERROR: "ERROR"
    });
    r("cast.receiver.media.SeekResumeState", {
        PLAYBACK_START: "PLAYBACK_START",
        PLAYBACK_PAUSE: "PLAYBACK_PAUSE"
    });
    r("cast.receiver.media.PlayerState", {
        IDLE: "IDLE",
        PLAYING: "PLAYING",
        PAUSED: "PAUSED",
        BUFFERING: "BUFFERING"
    });
    var Cc = function() {
        this.contentId = "";
        this.streamType = "NONE";
        this.contentType = "";
        this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = void 0
    };
    r("cast.receiver.media.MediaInformation", Cc);
    var Dc = function() {
        this.muted = this.level = void 0
    };
    r("cast.receiver.media.Volume", Dc);
    r("cast.receiver.media.MediaStatus", function() {
        this.mediaSessionId = 0;
        this.media = void 0;
        this.playbackRate = 1;
        this.playerState = "IDLE";
        this.idleReason = void 0;
        this.supportedMediaCommands = this.currentTime = 0;
        this.volume = {
            level: 0,
            muted: !1
        };
        this.activeTrackIds = null;
        this.customData = this.preloadedItemId = this.loadingItemId = this.currentItemId = void 0
    });
    r("cast.receiver.media.Command", {
        PAUSE: 1,
        SEEK: 2,
        STREAM_VOLUME: 4,
        STREAM_MUTE: 8,
        ALL_BASIC_MEDIA: 15,
        QUEUE_NEXT: 64,
        QUEUE_PREV: 128
    });
    r("cast.receiver.media.TrackType", {
        TEXT: "TEXT",
        AUDIO: "AUDIO",
        VIDEO: "VIDEO"
    });
    r("cast.receiver.media.TextTrackType", {
        SUBTITLES: "SUBTITLES",
        CAPTIONS: "CAPTIONS",
        DESCRIPTIONS: "DESCRIPTIONS",
        CHAPTERS: "CHAPTERS",
        METADATA: "METADATA"
    });
    r("cast.receiver.media.TextTrackEdgeType", {
        NONE: "NONE",
        OUTLINE: "OUTLINE",
        DROP_SHADOW: "DROP_SHADOW",
        RAISED: "RAISED",
        DEPRESSED: "DEPRESSED"
    });
    r("cast.receiver.media.TextTrackWindowType", {
        NONE: "NONE",
        NORMAL: "NORMAL",
        ROUNDED_CORNERS: "ROUNDED_CORNERS"
    });
    r("cast.receiver.media.TextTrackFontGenericFamily", {
        SANS_SERIF: "SANS_SERIF",
        MONOSPACED_SANS_SERIF: "MONOSPACED_SANS_SERIF",
        SERIF: "SERIF",
        MONOSPACED_SERIF: "MONOSPACED_SERIF",
        CASUAL: "CASUAL",
        CURSIVE: "CURSIVE",
        SMALL_CAPITALS: "SMALL_CAPITALS"
    });
    r("cast.receiver.media.TextTrackFontStyle", {
        NORMAL: "NORMAL",
        BOLD: "BOLD",
        BOLD_ITALIC: "BOLD_ITALIC",
        ITALIC: "ITALIC"
    });
    r("cast.receiver.media.Track", function(a, b) {
        this.trackId = a;
        this.trackContentType = this.trackContentId = void 0;
        this.type = b;
        this.customData = this.subtype = this.language = this.name = void 0
    });
    r("cast.receiver.media.TextTrackStyle", function() {
        this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = this.fontScale = void 0
    });
    r("cast.receiver.media.TracksInfo", function() {
        this.textTrackStyle = this.activeTrackIds = this.tracks = void 0
    });
    r("cast.receiver.media.repeatMode", {
        REPEAT_OFF: "REPEAT_OFF",
        REPEAT_ALL: "REPEAT_ALL",
        REPEAT_SINGLE: "REPEAT_SINGLE",
        REPEAT_ALL_AND_SHUFFLE: "REPEAT_ALL_AND_SHUFFLE"
    });
    var Ec = function(a) {
        return "REPEAT_OFF" == a || "REPEAT_ALL" == a || "REPEAT_SINGLE" == a || "REPEAT_ALL_AND_SHUFFLE" == a
    };
    r("cast.receiver.media.GetStatusOptions", {
        NO_METADATA: 1,
        NO_QUEUE_ITEMS: 2
    });
    var Fc = function(a) {
        this.itemId = a;
        this.customData = this.activeTrackIds = this.preloadTime = this.playbackDuration = this.startTime = this.autoplay = this.media = void 0
    };
    r("cast.receiver.media.QueueItem", Fc);
    Fc.prototype.clone = function(a) {
        var b = new Fc(this.itemId);
        b.autoplay = this.autoplay;
        b.startTime = this.startTime;
        b.playbackDuration = this.playbackDuration;
        b.preloadTime = this.preloadTime;
        b.activeTrackIds = this.activeTrackIds;
        b.customData = this.customData;
        if (!k(a) || a) b.media = this.media;
        return b
    };
    var V = function(a, b, c) {
        this.b = a;
        this.aa = b;
        this.i = c
    };
    r("cast.receiver.MediaQueue", V);
    V.prototype.a = F("cast.receiver.MediaQueue");
    V.prototype.Jb = function(a) {
        if (!k(a) || a) return this.b;
        for (var b = [], c = 0; c < this.b.length; c++) b.push(this.b[c].clone(a));
        return b
    };
    V.prototype.getItems = V.prototype.Jb;
    V.prototype.Oc = function() {
        return this.b.length
    };
    V.prototype.getLength = V.prototype.Oc;
    V.prototype.jb = function() {
        return this.aa
    };
    V.prototype.getRepeatMode = V.prototype.jb;
    V.prototype.Mc = function() {
        return 0 > this.i ? null : this.b[this.i].itemId
    };
    V.prototype.getCurrentItemId = V.prototype.Mc;
    V.prototype.ia = function() {
        return 0 > this.i ? null : this.b[this.i]
    };
    V.prototype.getCurrentItem = V.prototype.ia;
    var Gc = function(a, b) {
            for (var c = [], d = 0; d < b.length; d++)
                for (var e = 0; e < a.b.length; e++)
                    if (b[d] == a.b[e].itemId) {
                        c.push(b[d]);
                        break
                    }
            return c
        },
        Hc = function(a) {
            return "REPEAT_ALL_AND_SHUFFLE" == a.aa
        },
        Ic = function(a, b) {
            for (var c = 0; c < a.b.length; c++)
                if (b == a.b[c].itemId) return c;
            return -1
        },
        Jc = function(a) {
            return "REPEAT_ALL_AND_SHUFFLE" == a.aa || "REPEAT_ALL" == a.aa
        };
    V.prototype.reset = function() {
        this.i = -1
    };
    var Kc = function(a, b) {
            var c = Ic(a, b);
            if (-1 == c || a.i == c) return !1;
            a.i = c;
            return !0
        },
        Mc = function(a, b, c) {
            if (0 > a.i) return "QUEUE_ENDED";
            b = a.i + b;
            var d = !1;
            b >= a.b.length ? (b = Jc(a) ? b % a.b.length : -1, d = !0) : 0 > b && (b = Jc(a) ? a.b.length + (b + 1) % a.b.length - 1 : 0, d = !0);
            c && (a.i = b);
            return -1 == b ? "QUEUE_ENDED" : d ? Hc(a) ? (Lc(a), "QUEUE_SHUFFLED") : "QUEUE_LOOP" : "QUEUE_ACTIVE"
        },
        Lc = function(a) {
            var b = a.b.length,
                c, d;
            if (!(3 > a.b.length))
                for (; 0 < b;) d = Math.floor(Math.random() * b), --b, c = a.b[d], a.b[d] = a.b[b], a.b[b] = c
        };
    var Nc = /#(.)(.)(.)(.)/,
        Pc = function(a) {
            if (!Oc.test(a)) throw Error("'" + a + "' is not a valid alpha hex color");
            5 == a.length && (a = a.replace(Nc, "#$1$1$2$2$3$3$4$4"));
            a = a.toLowerCase();
            return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16), parseInt(a.substr(7, 2), 16) / 255]
        },
        Oc = /^#(?:[0-9a-f]{4}){1,2}$/i,
        Qc = function(a) {
            var b = a.slice(0);
            b[3] = Math.round(1E3 * a[3]) / 1E3;
            return "rgba(" + b.join(",") + ")"
        };
    !Ea && !A || A && 9 <= La || Ea && B("1.9.1");
    A && B("9");
    var rc = function(a, b, c, d) {
        G.call(this);
        this.c = a;
        this.bb = this.Ua = null;
        this.P = [];
        this.ab = !1;
        this.Ya = "cast-captions-" + Math.floor(1E6 * Math.random())
            .toString();
        this.mc = "[" + this.Ya + '="true"]::cue ';
        this.nc = new RegExp(/^[\.'":%,;\s\-0-9a-z]+$/i);
        for (a = 0; a < b.length; a++) {
            var e = b[a].trackContentId;
            if ("TEXT" === b[a].type && e) {
                var f = b[a].trackContentType;
                if (0 == ja("vtt", e.substr(e.length - 3, 3)) || void 0 != f && 0 == ja(f, "text/vtt")) e = document.createElement("track"), e.src = b[a].trackContentId, e.id = b[a].trackId, e.label = b[a].name,
                    e.srclang = b[a].language, e.kind = (b[a].subtype || "")
                    .toLowerCase(), this.P.push(e), this.c.appendChild(e)
            }
        }
        sc(this);
        d && tc(this, d);
        oc(this, c)
    };
    t(rc, G);
    rc.prototype.a = F("cast.receiver.TextTracksManager");
    rc.prototype.J = function() {
        return "TextTracksManager"
    };
    var oc = function(a, b) {
            for (var c = 0; c < a.P.length; c++) {
                var d = a.P[c].track;
                0 <= y(b, parseInt(a.P[c].id, 10)) ? d.mode = "showing" : (d.mode = "showing", d.mode = "disabled")
            }
        },
        Rc = function(a) {
            a.bb && (a.c.removeAttribute(a.Ya), document.head.removeChild(a.bb), a.Ua = null)
        },
        Sc = function(a) {
            a.ab && (a.c.removeAttribute("crossorigin"), a.ab = !1)
        },
        W = function(a, b, c) {
            !0 === c || a.nc.test(b) ? a.Ua.insertRule(a.mc + "{ " + b + " }", a.Ua.cssRules.length) : Bb(a.a, "Invalid css cue: " + b)
        },
        sc = function(a) {
            Rc(a);
            Sc(a);
            var b = document,
                c = b.createElement("STYLE");
            c.type = "text/css";
            b.getElementsByTagName("HEAD")[0].appendChild(c);
            c.styleSheet ? c.styleSheet.cssText = "" : c.appendChild(b.createTextNode(""));
            a.bb = c;
            a.Ua = document.styleSheets[document.styleSheets.length - 1];
            W(a, "font-size: 4.1vh;");
            W(a, "font-family: monospace;");
            W(a, "font-style: normal;");
            W(a, "font-weight: normal;");
            W(a, "background-color: black;");
            W(a, "color: white;");
            a.c.setAttribute(a.Ya, !0);
            0 < a.P.length && !a.c.getAttribute("crossorigin") && (a.c.setAttribute("crossorigin", "anonymous"), a.ab = !0)
        },
        Tc = function(a,
            b, c) {
            var d;
            try {
                d = Qc(Pc(b))
            } catch (e) {
                Bb(a.a, "Invalid color: " + b)
            }
            if (d) switch (a = "rgba(204, 204, 204, " + parseInt(b.substring(7, 9), 16) + ")", c) {
                case "OUTLINE":
                    return "text-shadow: 0 0 4px " + d + ", 0 0 4px " + d + ", 0 0 4px " + d + ", 0 0 4px " + d + ";";
                case "DROP_SHADOW":
                    return "text-shadow: 0px 2px 3px " + d + ", 0px 2px 4px " + d + ", 0px 2px 5px " + d + ";";
                case "RAISED":
                    return "text-shadow: 1px 1px " + d + ", 2px 2px " + d + ", 3px 3px " + d + ";";
                case "DEPRESSED":
                    return "text-shadow: 1px 1px " + a + ", 0 1px " + a + ", -1px -1px " + d + ", 0 -1px " +
                        d + ";"
            }
            return ""
        },
        Uc = function(a) {
            switch (a) {
                case "BOLD":
                    return "font-weight: bold;";
                case "BOLD_ITALIC":
                    return "font-style: italic; font-weight: bold;";
                case "ITALIC":
                    return "font-style: italic;"
            }
            return "font-style: normal;"
        },
        tc = function(a, b) {
            if (k(b.foregroundColor)) try {
                var c = Qc(Pc(b.foregroundColor));
                W(a, "color: " + c + ";", !0)
            } catch (d) {
                Bb(a.a, "Invalid color: " + b.foregroundColor)
            }
            if (k(b.backgroundColor)) try {
                var e = Qc(Pc(b.backgroundColor));
                W(a, "background-color: " + e + ";", !0)
            } catch (f) {
                Bb(a.a, "Invalid color: " + b.backgroundColor)
            }
            k(b.fontScale) &&
                W(a, "font-size: " + 100 * b.fontScale + "%;");
            if (k(b.fontFamily) || k(b.fontGenericFamily)) {
                var c = b.fontFamily,
                    e = b.fontGenericFamily,
                    l = "font-family: ",
                    q = "";
                k(c) && (l += '"' + c + '"', q = ", ");
                if (k(e)) {
                    var u;
                    switch (e) {
                        case "SANS_SERIF":
                            u = '"Droid Sans", sans-serif';
                            break;
                        case "MONOSPACED_SANS_SERIF":
                            u = '"Droid Sans Mono", monospace';
                            break;
                        case "SERIF":
                            u = '"Droid Serif", serif';
                            break;
                        case "MONOSPACED_SERIF":
                            u = '"Cutive Mono"';
                            break;
                        case "CASUAL":
                            u = '"Short Stack"';
                            break;
                        case "CURSIVE":
                            u = "Quintessential";
                            break;
                        case "SMALL_CAPITALS":
                            u =
                                '"Alegreya Sans SC"'
                    }
                    l += q + u
                }
                W(a, l + ";")
            }
            k(b.fontStyle) && W(a, Uc(b.fontStyle));
            k(b.edgeType) && (u = k(b.foregroundColor) ? b.foregroundColor : "#FFFFFFFF", u = k(b.edgeColor) ? Tc(a, b.edgeColor, b.edgeType) : Tc(a, u, b.edgeType), W(a, u, !0))
        };
    rc.prototype.l = function() {
        rc.D.l.call(this);
        for (var a = 0; a < this.P.length; a++) this.c.removeChild(this.P[a]);
        this.P = [];
        Rc(this);
        Sc(this);
        M(this.a, E, "Disposed " + this.J())
    };
    var X = function(a, b, c) {
        L.call(this);
        var d = R.Ib();
        this.pb = c || "local";
        this.Na = d.Hb("urn:x-cast:com.google.cast.media", "JSON");
        this.O = 0;
        this.ed = 1;
        this.td = b || 15;
        this.gc = this.Qb = this.la = this.ka = this.h = this.g = null;
        this.N = !1;
        this.B = this.U = this.m = null;
        this.La = !0;
        this.pa = null;
        this.Xa = this.lc.bind(this);
        this.f = null;
        this.Wa = !1;
        this.Y = null;
        this.qb = 1;
        this.Ta = -1;
        this.Ma = new zc;
        this.va = !1;
        this.customizedStatusCallback = this.oc;
        this.onLoad = this.vc;
        this.onPlay = this.yc;
        this.onSeek = this.Fc;
        this.onPause = this.xc;
        this.onStop =
            this.Hc;
        this.onSetVolume = this.Gc;
        this.onEditTracksInfo = this.qc;
        this.onQueueLoad = this.Bc;
        this.onQueueInsert = this.Ac;
        this.onQueueUpdate = this.Ec;
        this.onQueueRemove = this.Cc;
        this.onQueueReorder = this.Dc;
        this.onMetadataLoaded = this.wc;
        this.onLoadMetadataError = this.uc;
        this.onEnded = this.rc;
        this.onQueueEnded = this.zc;
        this.onAbort = aa;
        this.onError = this.sc;
        this.onMediaStatus = this.onLocalRequestError = aa;
        this.onCancelPreload = this.onPreload = null;
        this.onGetStatus = this.tc;
        this.dc(a);
        this.Na.onMessage = this.tb.bind(this);
        this.pa = Eb(this.Xa, 1E3)
    };
    t(X, L);
    r("cast.receiver.MediaManager", X);
    X.EventType = {
        LOAD: "load",
        STOP: "stop",
        PAUSE: "pause",
        PLAY: "play",
        SEEK: "seek",
        SET_VOLUME: "setvolume",
        GET_STATUS: "getstatus",
        EDIT_TRACKS_INFO: "edittracksinfo",
        QUEUE_LOAD: "queueload",
        QUEUE_INSERT: "queueinsert",
        QUEUE_UPDATE: "queueupdate",
        QUEUE_REMOVE: "queueremove",
        QUEUE_REORDER: "queuereorder",
        PRELOAD: "preload",
        CANCEL_PRELOAD: "cancelpreload"
    };
    var Y = function(a, b, c) {
        I.call(this, a);
        this.data = b;
        this.senderId = c
    };
    t(Y, I);
    X.Event = Y;
    var Z = function() {
        this.requestId = 0;
        this.mediaSessionId = void 0;
        this.customData = null
    };
    X.RequestData = Z;
    var Vc = function() {
        Z.call(this);
        this.media = new Cc;
        this.autoplay = !1;
        this.currentTime = 0;
        this.activeTrackIds = void 0
    };
    t(Vc, Z);
    X.LoadRequestData = Vc;
    var Wc = function(a) {
        Vc.call(this);
        this.itemId = a
    };
    t(Wc, Vc);
    X.PreloadRequestData = Wc;
    var Xc = function() {
        Z.call(this);
        this.volume = new Dc
    };
    t(Xc, Z);
    X.VolumeRequestData = Xc;
    var Yc = function() {
        Z.call(this);
        this.textTrackStyle = this.activeTrackIds = void 0
    };
    t(Yc, Z);
    X.EditTracksInfoData = Yc;
    var Zc = function() {
        Z.call(this);
        this.resumeState = void 0;
        this.currentTime = 0
    };
    t(Zc, Z);
    X.SeekRequestData = Zc;
    var $c = function() {
        Z.call(this);
        this.options = void 0
    };
    t($c, Z);
    X.GetStatusRequestData = $c;
    var ad = function(a) {
        Z.call(this);
        this.repeatMode = void 0;
        this.items = a;
        this.currentTime = this.startIndex = void 0
    };
    t(ad, Z);
    X.QueueLoadRequestData = ad;
    var bd = function(a) {
        Z.call(this);
        this.currentTime = this.currentItemId = this.currentItemIndex = this.insertBefore = void 0;
        this.items = a
    };
    t(bd, Z);
    X.QueueInsertRequestData = bd;
    var cd = function() {
        Z.call(this);
        this.repeatMode = this.items = this.jump = this.currentTime = this.currentItemId = void 0
    };
    t(cd, Z);
    X.QueueUpdateRequestData = cd;
    var dd = function(a) {
        Z.call(this);
        this.currentTime = this.currentItemId = void 0;
        this.itemIds = a
    };
    t(dd, Z);
    X.QueueRemoveRequestData = dd;
    var ed = function(a) {
        Z.call(this);
        this.insertBefore = this.currentTime = this.currentItemId = void 0;
        this.itemIds = a
    };
    t(ed, Z);
    X.QueueReorderRequestData = ed;
    X.LoadInfo = function(a, b) {
        this.message = a;
        this.senderId = b
    };
    X.prototype.a = F("cast.receiver.MediaManager");
    X.prototype.J = function() {
        return "MediaManager"
    };
    X.prototype.Pc = function() {
        return this.h ? this.h.media || null : null
    };
    X.prototype.getMediaInformation = X.prototype.Pc;
    X.prototype.Qc = function() {
        return this.f
    };
    X.prototype.getMediaQueue = X.prototype.Qc;
    X.prototype.Wc = function(a, b, c, d, e) {
        a = new bd(a);
        a.insertBefore = b;
        a.currentItemIndex = c;
        a.currentItemId = d;
        a.currentTime = e;
        a.type = "QUEUE_INSERT";
        fd(this, this.pb, a)
    };
    X.prototype.insertQueueItems = X.prototype.Wc;
    X.prototype.hd = function(a, b, c) {
        a = new dd(a);
        a.currentItemId = b;
        a.currentTime = c;
        a.type = "QUEUE_REMOVE";
        fd(this, this.pb, a)
    };
    X.prototype.removeQueueItems = X.prototype.hd;
    X.prototype.md = function(a, b, c) {
        b = void 0 == b || b;
        if (c && !b) throw Error("No broadcast call but status customData has been provided");
        this.h && (this.h.media = a);
        b && this.j(!0, null, c)
    };
    X.prototype.setMediaInformation = X.prototype.md;
    var gd = function(a) {
            for (var b = 0; b < a.length; b++)
                if (!k(a[b].trackId) || !k(a[b].type)) return !1;
            return !0
        },
        hd = function(a, b, c) {
            if (!c || 0 === c.length) return !0;
            if (!b || c.length > b.length) return N(a.a, "Too many track IDs"), !1;
            for (var d = 0, e = 0, f = 0; f < c.length; f++) {
                for (var l = !1, q = 0; q < b.length; q++)
                    if (c[f] === b[q].trackId) {
                        l = !0;
                        break
                    }
                if (!l) return N(a.a, "Track ID does not exist: " + c[f]), !1;
                "AUDIO" === b[q].type ? e++ : "VIDEO" === b[q].type && d++;
                if (1 < e || 1 < d) return N(a.a, "Maximum one active video and one active audio track supported"), !1
            }
            return !0
        },
        fd = function(a, b, c) {
            c.mediaSessionId = a.O;
            a.tb(new Qb("message", b, c))
        };
    X.prototype.tb = function(a) {
        var b = a.data,
            c = b.type;
        if (!this.va || Bc(this.Ma) && "LOAD" == c) {
            a = a.senderId;
            var d;
            d = b.type;
            var e = b.requestId;
            if (n(e) && e == Math.floor(e)) {
                var f = !1;
                void 0 != b.mediaSessionId && b.mediaSessionId != this.O ? (N(this.a, "Invalid media session ID: " + b.mediaSessionId + "  does not match the expected ID: " + this.O), f = !0) : "LOAD" != d && "GET_STATUS" != d && "QUEUE_LOAD" != d && (void 0 == b.mediaSessionId ? (N(this.a, "Invalid media session ID, it is undefined"), f = !0) : "IDLE" == id(this) && (N(this.a, "Unexpected command, player is in IDLE state so the media session ID is not valid yet"),
                    f = !0));
                f ? (this.Ea(a, e, "INVALID_REQUEST", "INVALID_MEDIA_SESSION_ID"), d = !1) : (M(this.a, E, "MediaManager message received"), d = !0)
            } else N(this.a, "Ignoring request, requestId is not an integer: " + e), d = !1;
            if (d) {
                d = b.requestId;
                delete b.type;
                e = null;
                switch (c) {
                    case "LOAD":
                        this.Wa = !1;
                        e = jd(this, a, b, !0);
                        break;
                    case "GET_STATUS":
                        O(this.a, "Dispatching MediaManager getStatus event");
                        b = new Y("getstatus", b, a);
                        if (this.onGetStatus) this.onGetStatus(b);
                        this.dispatchEvent(b);
                        e = null;
                        break;
                    case "PLAY":
                        O(this.a, "Dispatching MediaManager play event");
                        b = new Y("play", b, a);
                        if (this.onPlay) this.onPlay(b);
                        this.dispatchEvent(b);
                        e = null;
                        break;
                    case "SEEK":
                        if (void 0 == b.currentTime) N(this.a, "currentTime is mandatory"), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        };
                        else {
                            O(this.a, "Dispatching MediaManager seek event");
                            b = new Y("seek", b, a);
                            if (this.onSeek) this.onSeek(b);
                            this.dispatchEvent(b);
                            e = null
                        }
                        break;
                    case "STOP":
                        O(this.a, "Dispatching MediaManager stop event");
                        b = new Y("stop", b, a);
                        if (this.onStop) this.onStop(b);
                        this.dispatchEvent(b);
                        e = null;
                        break;
                    case "PAUSE":
                        O(this.a,
                            "Dispatching MediaManager pause event");
                        b = new Y("pause", b, a);
                        if (this.onPause) this.onPause(b);
                        this.dispatchEvent(b);
                        e = null;
                        break;
                    case "SET_VOLUME":
                        if (!b.volume || void 0 == b.volume.level && void 0 == b.volume.muted) N(this.a, "volume is invalid"), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        };
                        else if (void 0 != b.volume.level && 0 > b.volume.level || 1 < b.volume.level) N(this.a, "volume level is invalid"), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        };
                        else {
                            O(this.a, "Dispatching MediaManager setvolume event");
                            b =
                                new Y("setvolume", b, a);
                            if (this.onSetVolume) this.onSetVolume(b);
                            this.dispatchEvent(b);
                            e = null
                        }
                        break;
                    case "EDIT_TRACKS_INFO":
                        O(this.a, "Dispatching MediaManager ediTracksInfo event");
                        if (hd(this, this.h.media.tracks, b.activeTrackIds)) {
                            c = new Y("edittracksinfo", b, a);
                            b.textTrackStyle && (this.h.media.textTrackStyle = b.textTrackStyle);
                            b.activeTrackIds && (this.B = b.activeTrackIds);
                            if (this.onEditTracksInfo) this.onEditTracksInfo(c);
                            this.dispatchEvent(c);
                            e = null
                        } else N(this.a, "Invalid track IDs"), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        };
                        break;
                    case "QUEUE_LOAD":
                        this.Wa = !0;
                        O(this.a, "Dispatching MediaManager queueLoad event");
                        c = !1;
                        if (k(b.startIndex) && (!n(b.startIndex) || 0 > b.startIndex)) N(this.a, "Invalid startIndex"), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        };
                        else {
                            e = (b.startIndex || 0) + 1;
                            if (!b.items || b.items.length < e) N(this.a, "Invalid number of items"), c = !0;
                            else if (b.repeatMode && !Ec(b.repeatMode)) N(this.a, "Invalid repeatMode"), c = !0;
                            else
                                for (e = 0; e < b.items.length; e++) b.items[e].media ? k(b.items[e].itemId) ?
                                    (N(this.a, "ItemId is not undefined, element at index: " + e), c = !0) : b.items[e].itemId = this.qb++ : (N(this.a, "Media is mandatory, missing in element at index: " + e), c = !0);
                            if (c) e = {
                                type: "INVALID_REQUEST",
                                reason: "INVALID_PARAMS"
                            };
                            else {
                                b.items = kd(b.items);
                                b = new Y("queueload", b, a);
                                if (this.onQueueLoad) this.onQueueLoad(b);
                                this.dispatchEvent(b);
                                e = null
                            }
                        }
                        break;
                    case "QUEUE_INSERT":
                        this.Wa = !0;
                        O(this.a, "Dispatching MediaManager queueInsert event");
                        c = !1;
                        if (this.f)
                            if (b.items && 0 != b.items.length)
                                if (k(b.currentItemId) && k(b.currentItemIndex)) N(this.a,
                                    "Maximum one currentItem must be provided"), c = !0;
                                else if (k(b.currentItemIndex) && (!n(b.currentItemIndex) || 0 > b.currentItemIndex || b.currentItemIndex >= b.items.length)) N(this.a, "Invalid currentItemIndex"), c = !0;
                        else if (k(b.currentItemId) && (!n(b.currentItemId) || 0 > b.currentItemId)) N(this.a, "Invalid currentItemId"), c = !0;
                        else
                            for (e = this.qb++, f = 0; f < b.items.length; f++)
                                if (n(b.items[f].itemId)) {
                                    N(this.a, "Item contains an itemId at index: " + f);
                                    c = !0;
                                    break
                                } else b.items[f].itemId = e, e++;
                        else N(this.a, "No items to insert"),
                            c = !0;
                        else N(this.a, "Queue does not exist"), c = !0;
                        if (c) e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        };
                        else {
                            b.items = kd(b.items);
                            b = new Y("queueinsert", b, a);
                            if (this.onQueueInsert) this.onQueueInsert(b);
                            this.dispatchEvent(b);
                            e = null
                        }
                        break;
                    case "QUEUE_UPDATE":
                        O(this.a, "Dispatching MediaManager queueUpdate event");
                        c = !1;
                        this.f ? b.items && !ld(this, b.items) ? c = !0 : b.repeatMode && !Ec(b.repeatMode) && (N(this.a, "Invalid repeatMode"), c = !0) : (N(this.a, "Queue does not exist"), c = !0);
                        if (c) e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        };
                        else {
                            if (b.items && 0 < b.items.length) {
                                for (var c = this.f, e = b.items, f = [], l = 0; l < e.length; l++)
                                    for (var q = 0; q < c.b.length; q++)
                                        if (e[l].itemId == c.b[q].itemId) {
                                            f.push(e[l]);
                                            break
                                        }
                                b.items = kd(f)
                            }
                            b = new Y("queueupdate", b, a);
                            if (this.onQueueUpdate) this.onQueueUpdate(b);
                            this.dispatchEvent(b);
                            e = null
                        }
                        break;
                    case "QUEUE_REMOVE":
                        O(this.a, "Dispatching MediaManager queueRemove event");
                        c = !1;
                        this.f ? b.itemIds && 0 != b.itemIds.length ? md(this, b.itemIds) || (c = !0) : (N(this.a, "No itemIds to remove"), c = !0) : (N(this.a, "Queue does not exist"),
                            c = !0);
                        if (c) e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        };
                        else {
                            b.itemIds && (b.itemIds = Gc(this.f, b.itemIds));
                            b = new Y("queueremove", b, a);
                            if (this.onQueueRemove) this.onQueueRemove(b);
                            this.dispatchEvent(b);
                            e = null
                        }
                        break;
                    case "QUEUE_REORDER":
                        O(this.a, "Dispatching MediaManager queueReorder event");
                        c = !1;
                        this.f ? b.itemIds && 0 != b.itemIds.length ? md(this, b.itemIds) ? k(b.insertBefore) && 0 <= y(b.itemIds, b.insertBefore) && (N(this.a, "insertBefore can not be one of the reordered items"), c = !0) : c = !0 : (N(this.a, "No itemIds to reorder"),
                            c = !0) : (N(this.a, "Queue does not exist"), c = !0);
                        if (c) e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        };
                        else {
                            b.itemIds && (b.itemIds = Gc(this.f, b.itemIds));
                            b = new Y("queuereorder", b, a);
                            if (this.onQueueReorder) this.onQueueReorder(b);
                            this.dispatchEvent(b);
                            e = null
                        }
                        break;
                    default:
                        N(this.a, "Unexpected message type: " + c), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_COMMAND"
                        }
                }
                e && (N(this.a, "Sending error: " + e.type + " " + e.reason), this.onLocalRequestError && a == this.pb ? (e.requestId = d, this.onLocalRequestError(e)) : this.Ea(a,
                    d, e.type, e.reason))
            }
        } else this.Ma.enqueue(a)
    };
    var id = function(a) {
            if (!a.h) return "IDLE";
            var b = a.g.getState();
            return "PLAYING" == b && a.N ? "BUFFERING" : b
        },
        nd = function(a, b, c, d) {
            var e = {
                type: "MEDIA_STATUS"
            };
            if (!a.h && !a.ka) return e.status = [], e;
            var f = {
                mediaSessionId: a.O,
                playbackRate: a.ed,
                playerState: id(a),
                currentTime: a.g.getCurrentTimeSec(),
                supportedMediaCommands: a.td,
                volume: a.g.getVolume()
            };
            a.B && (f.activeTrackIds = a.B);
            a.Y && (f.preloadedItemId = a.Y);
            if (a.h) b && (f.media = a.h.media || void 0), f.currentItemId = a.h.itemId;
            else if (b && (f.media = a.ka.media || void 0), f.currentItemId =
                a.ka.itemId, a.ka = null, a.f) {
                var l = a.f.ia();
                l && (f.loadingItemId = l.itemId)
            }
            "IDLE" == f.playerState ? a.U && (f.idleReason = a.U) : a.U = null;
            void 0 != c && (f.customData = c);
            a.f && (d && (f.items = a.f.Jb(b)), f.repeatMode = a.f.jb());
            a.customizedStatusCallback ? (a = a.customizedStatusCallback(f), null == a ? e = null : e.status = [a]) : e.status = [f];
            return e
        },
        od = function(a) {
            var b = a.g.getCurrentTimeSec();
            a.la = b;
            a.Qb = b;
            a.gc = Date.now();
            null != a.pa && h.clearTimeout(a.pa);
            a.pa = Eb(a.Xa, 1E3)
        };
    X.prototype.lc = function() {
        this.pa = Eb(this.Xa, 1E3);
        var a = id(this);
        if ("IDLE" != a && "PAUSED" != a) {
            a = this.la;
            this.la = this.g.getCurrentTimeSec();
            var b = this.N;
            this.N = 100 > 1E3 * (this.la - a);
            if (b != this.N) M(this.a, E, "Buffering state changed, isPlayerBuffering: " + this.N + " old time: " + a + " current time: " + this.la), this.j(!1);
            else if (!this.N)
                if (a = 1E3 * (this.la - this.Qb) - (Date.now() - this.gc), 1E3 < a || -1E3 > a) M(this.a, E, "Time drifted: " + a), this.j(!1);
                else if (this.h && this.f && (a = this.f, (a = 0 > a.i ? null : "REPEAT_SINGLE" == a.aa ? a.b[a.i] :
                    a.i + 1 >= a.b.length && (Hc(a) || "REPEAT_OFF" == a.aa) ? null : a.b[(a.i + 1) % a.b.length]) && n(a.preloadTime) && this.h.media && !this.m && pd(this, a.preloadTime) && this.Y != a.itemId))
                if (this.onPreload) {
                    var c;
                    c = new Wc(a.itemId);
                    c.requestId = 0;
                    c.mediaSessionId = this.O;
                    c.autoplay = a.autoplay;
                    c.currentTime = a.startTime;
                    c.customData = a.customData || null;
                    c.activeTrackIds = a.activeTrackIds;
                    c.media = a.media;
                    c = new Y("preload", c, "");
                    this.Y = a.itemId;
                    O(this.a, "Sending preload event: " + JSON.stringify(c));
                    this.onPreload(c) && this.j(!1)
                } else O(this.a,
                    "Not sending preload event: " + JSON.stringify(c))
        }
    };
    X.prototype.j = function(a, b, c, d) {
        if (this.g) {
            if (M(this.a, E, "Sending broadcast status message"), a = nd(this, a, c, d), null != a) {
                if (this.onMediaStatus && a.status) this.onMediaStatus(a.status[0] || null);
                a.requestId = b || 0;
                this.Na.Eb(a);
                od(this)
            }
        } else N(this.a, "Not sending broadcast status message, state is invalid")
    };
    X.prototype.broadcastStatus = X.prototype.j;
    X.prototype.kd = function(a) {
        M(this.a, E, "Setting IDLE reason: " + a);
        this.U = a
    };
    X.prototype.setIdleReason = X.prototype.kd;
    X.prototype.Ea = function(a, b, c, d, e) {
        O(this.a, "Sending error message to " + a);
        var f = {};
        f.requestId = b;
        f.type = c;
        d && (f.reason = d);
        e && (f.customData = e);
        this.Na.send(a, f)
    };
    X.prototype.sendError = X.prototype.Ea;
    X.prototype.ac = function(a, b, c, d, e) {
        if (this.g) {
            if (M(this.a, E, "Sending status message to " + a), c = nd(this, c, d, e), null != c) {
                if (this.onMediaStatus && c.status) this.onMediaStatus(c.status[0] || null);
                c.requestId = b;
                this.Na.send(a, c);
                od(this)
            }
        } else N(this.a, "State is invalid"), this.Ea(a, b, "INVALID_PLAYER_STATE", null, d)
    };
    X.prototype.sendStatus = X.prototype.ac;
    X.prototype.oc = function(a) {
        return a
    };
    var qd = function(a) {
            a.m = null;
            if (a.va)
                for (a.va = !1; !Bc(a.Ma) && !a.va;) a.tb(Ac(a.Ma))
        },
        jd = function(a, b, c, d, e) {
            O(a.a, "Dispatching MediaManager load event");
            O(a.a, "Load message received:" + JSON.stringify(c));
            var f = !1;
            c.media ? c.media.tracks && !gd(c.media.tracks) ? (N(a.a, "Invalid tracks information"), f = !0) : c.activeTrackIds && !hd(a, c.media.tracks, c.activeTrackIds) && (f = !0) : (N(a.a, "Media is mandatory"), f = !0);
            if (f) return {
                type: "INVALID_REQUEST",
                reason: "INVALID_PARAMS"
            };
            a.m ? a.Ab("LOAD_CANCELLED") : a.h && a.ba("INTERRUPTED");
            a.m = {
                senderId: b,
                message: c
            };
            a.B = c.activeTrackIds || null;
            a.va = !0;
            d && (a.O++, e ? a.f = e : (d = new Fc(a.qb++), d.media = c.media, d.autoplay = c.autoplay, d.activeTrackIds = c.activeTrackIds, d.customData = c.customData, a.f = new V([d], "REPEAT_OFF", 0)));
            a.h = a.f && a.f.ia();
            a.La && a.g.Vb && a.g.Vb(k(c.autoplay) ? c.autoplay : !0, 0 < c.currentTime ? c.currentTime : 0, a.h.playbackDuration, a.h.startTime);
            b = new Y("load", c, b);
            if (a.onLoad) a.onLoad(b);
            a.dispatchEvent(b);
            return a.Y = null
        };
    X.prototype.vc = function(a) {
        a = a.data;
        if (a.media && a.media.contentId) {
            var b = void 0 === a.autoplay ? !0 : a.autoplay;
            a.media.tracks ? this.g.load(a.media.contentId, b, a.currentTime, {
                tracks: a.media.tracks,
                activeTrackIds: a.activeTrackIds,
                textTrackStyle: a.media.textTrackStyle
            }) : this.g.load(a.media.contentId, b, a.currentTime)
        }
    };
    X.prototype.Zc = function(a) {
        if (!this.m) return !1;
        a.tracks = a.tracks || void 0;
        if (a.tracks && !gd(a.tracks)) return N(this.a, "Invalid tracks information"), !1;
        if (a.activeTrackIds && !hd(this, a.tracks, a.activeTrackIds)) return N(this.a, "Invalid active tracks"), !1;
        this.B = a.activeTrackIds || null;
        if (this.f) {
            var b = this.f.ia();
            b && b.media && (b.media.tracks = a.tracks, b.media.textTrackStyle = a.textTrackStyle || void 0)
        }
        this.g.load("", !1, void 0, a, !0);
        return !0
    };
    X.prototype.loadTracksInfo = X.prototype.Zc;
    X.prototype.dc = function(a) {
        a !== this.g && (this.g && (this.g.unregisterErrorCallback(), this.g.unregisterEndedCallback(), this.g.unregisterLoadCallback()), this.g = (this.La = a.getState ? !1 : !0) ? new mc(this.a, a) : a, this.g.registerErrorCallback(this.rb.bind(this)), this.g.registerEndedCallback(this.Pa.bind(this)), this.g.registerLoadCallback(this.wb.bind(this)))
    };
    X.prototype.setMediaElement = X.prototype.dc;
    X.prototype.wb = function() {
        if (this.m)
            if (O(this.a, "Metadata loaded"), this.h && this.h.media && (this.h.media.duration = this.g.getDurationSec()), this.N = !0, this.onMetadataLoaded) this.onMetadataLoaded(this.m);
            else qd(this)
    };
    X.prototype.wc = function(a) {
        this.La && a.message && void 0 != a.message.currentTime && a.message.currentTime != this.g.getCurrentTimeSec() && this.g.seek(a.message.currentTime);
        this.$b()
    };
    X.prototype.rb = function(a) {
        if (this.m)
            if (N(this.a, "Load metadata error: " + a), this.onLoadMetadataError) this.onLoadMetadataError(this.m);
            else qd(this);
        else if (this.onError) this.onError(a)
    };
    X.prototype.Ab = function(a, b) {
        this.m ? (this.Ea(this.m.senderId, this.m.message.requestId, a || "LOAD_FAILED", null, b), qd(this)) : N(this.a, "Not sending LOAD error as there is no on going LOAD request")
    };
    X.prototype.sendLoadError = X.prototype.Ab;
    X.prototype.$b = function(a) {
        if (this.m) {
            var b = this.m.message.requestId;
            this.j(!0, b, a, 0 != b);
            qd(this)
        } else N(this.a, "Not sending status as there is no on going LOAD request")
    };
    X.prototype.sendLoadComplete = X.prototype.$b;
    g = X.prototype;
    g.sc = function() {
        this.ba("ERROR")
    };
    g.uc = function() {
        this.m && "" == this.m.senderId && this.m.message && 0 == this.m.message.requestId ? this.ba("ERROR", !0) : (this.ba("ERROR", !1), this.Ab("LOAD_FAILED"))
    };
    g.Pa = function() {
        if (this.onEnded) this.onEnded()
    };
    g.rc = function() {
        if (this.f) {
            var a = -1 != this.Ta ? this.Ta : void 0;
            this.Ta = -1;
            rd(this, "REPEAT_SINGLE" == this.f.jb() ? 0 : 1, !1, a, void 0, void 0, void 0, "FINISHED")
        }
    };
    g.zc = function(a, b) {
        this.ba(a, !0, b)
    };
    var rd = function(a, b, c, d, e, f, l, q) {
        q = q || "INTERRUPTED";
        if (a.f && "QUEUE_ENDED" != Mc(a.f, b, !1)) {
            var u = Mc(a.f, b, !0);
            O(a.a, "After " + b + " jump, transition is: " + u);
            if (b = sd(a, a.f.ia(), void 0, l)) {
                if (a.h && (a.B = null, a.U = q, a.ka = a.h, a.h = null, "QUEUE_SHUFFLED" == u && (f = !0), a.j(c, d, e, f), "INTERRUPTED" == a.U)) a.onAbort();
                jd(a, "", b, !1)
            } else if (a.onQueueEnded) a.onQueueEnded(q, d)
        } else if (a.onQueueEnded) a.onQueueEnded(q, d)
    };
    g = X.prototype;
    g.tc = function(a) {
        M(this.a, E, "onGetStatus");
        var b = a.data;
        M(this.a, E, "onGetStatus: " + JSON.stringify(b));
        var c = !0,
            d = !0;
        b.options && (b.options & 1 && (c = !1), b.options & 1 && (d = !1));
        this.ac(a.senderId, a.data.requestId, c, null, d)
    };
    g.yc = function(a) {
        M(this.a, E, "onPlay");
        this.g.play();
        this.j(!1, a.data.requestId)
    };
    g.Fc = function(a) {
        a = a.data;
        M(this.a, E, "onSeek: " + JSON.stringify(a));
        this.g.seek(a.currentTime, a.resumeState);
        "PAUSED" != this.g.getState() && (this.N = !0);
        this.g.getCurrentTimeSec() < this.g.getDurationSec() ? this.j(!1, a.requestId) : this.Ta = a.requestId
    };
    g.Hc = function(a) {
        this.ba("CANCELLED", !0, a.data.requestId)
    };
    g.ba = function(a, b, c, d) {
        b = void 0 == b || b;
        if ((d || c) && !b) throw Error("customData and requestId should only be provided in broadcast mode");
        this.h ? (this.f = null, this.g.reset(), this.B = null, a && (this.U = a), this.ka = this.h, this.h = null, b && this.j(!1, c, d, void 0)) : O(this.a, "Nothing to reset, Media is already null");
        if (a && "INTERRUPTED" == a) this.onAbort()
    };
    X.prototype.resetMediaElement = X.prototype.ba;
    X.prototype.xc = function(a) {
        this.g.pause();
        this.j(!1, a.data.requestId)
    };
    X.prototype.Gc = function(a) {
        a = a.data;
        this.g.setVolume(a.volume);
        this.j(!1, a.requestId)
    };
    X.prototype.qc = function(a) {
        a = a.data;
        var b = {
            activeTrackIds: a.activeTrackIds,
            textTrackStyle: a.textTrackStyle
        };
        this.g.editTracksInfo && this.g.editTracksInfo(b);
        this.j(a.textTrackStyle ? !0 : !1, a.requestId)
    };
    var md = function(a, b) {
            if (2 > b.length) return !0;
            for (var c = 0; c < b.length; c++)
                for (var d = c + 1; d < b.length; d++)
                    if (b[c] == b[d]) return N(a.a, "Duplicate itemId: " + b[c] + "at positions:" + c + " " + d), !1;
            return !0
        },
        ld = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                if (!n(b[c].itemId)) return N(a.a, "Invalid itemId at position: " + c), !1;
                for (var d = c + 1; d < b.length; d++) {
                    if (!n(b[d].itemId)) return N(a.a, "Invalid itemId at position: " + d), !1;
                    if (b[c].itemId == b[d].itemId) return N(a.a, "Duplicate itemId: " + b[c].itemId + "at positions:" + c + " " + d), !1
                }
            }
            return !0
        },
        kd = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = new Fc(a[c].itemId);
                d.media = a[c].media;
                d.autoplay = a[c].autoplay;
                d.startTime = a[c].startTime;
                d.playbackDuration = a[c].playbackDuration;
                d.preloadTime = a[c].preloadTime;
                d.activeTrackIds = a[c].activeTrackIds;
                d.customData = a[c].customData;
                b.push(d)
            }
            return b
        },
        sd = function(a, b, c, d) {
            if (!b) return null;
            var e = new Vc;
            e.requestId = c || 0;
            e.mediaSessionId = a.O;
            e.type = "LOAD";
            e.autoplay = b.autoplay;
            e.currentTime = k(d) ? d : b.startTime;
            e.activeTrackIds = b.activeTrackIds;
            e.customData = b.customData || null;
            e.media = b.media;
            return e
        },
        pd = function(a, b) {
            if (a.h.media.duration - a.g.getCurrentTimeSec() <= b) return !0;
            if (null == a.Y) return !1;
            a.Y = null;
            if (!a.onCancelPreload) return !1;
            var c;
            c = new Z;
            c.requestId = 0;
            c.mediaSessionId = a.O;
            c = new Y("cancelpreload", c, "");
            O(a.a, "Sending cancel preload event: " + JSON.stringify(c));
            a.onCancelPreload(c) && a.j(!1);
            return !1
        };
    g = X.prototype;
    g.Bc = function(a) {
        var b = a.data,
            c = new V(b.items, b.repeatMode || "REPEAT_OFF", b.startIndex || 0);
        (b = sd(this, c.ia(), b.requestId, b.currentTime)) ? jd(this, a.senderId, b, !0, c): N(this.a, "Queue Load request is invalid")
    };
    g.Ac = function(a) {
        a = a.data;
        O(this.a, "Queue insert data: " + JSON.stringify(a));
        var b = !1;
        k(a.currentItemId) && (b = Kc(this.f, a.currentItemId));
        k(a.currentItemIndex) && (b = !0);
        var c = this.f,
            d = a.items,
            e = a.insertBefore,
            f = a.currentItemIndex,
            e = n(e) ? Ic(c, e) : c.b.length,
            e = -1 == e ? c.b.length : e;
        ea(ta, c.b, e, 0)
            .apply(null, d);
        k(f) ? c.i = e + f : c.i >= e && (c.i += d.length);
        b ? rd(this, 0, !0, a.requestId, a.customData, !0, a.currentTime) : this.j(!0, a.requestId, a.customData, !0)
    };
    g.Ec = function(a) {
        a = a.data;
        if (this.Wa) {
            O(this.a, "Queue update data: " + JSON.stringify(a));
            var b = !1,
                c = !1;
            n(a.currentItemId) && (c = Kc(this.f, a.currentItemId));
            n(a.jump) && (c = !0);
            a.repeatMode && (this.f.aa = a.repeatMode);
            if (a.items && 0 < a.items.length) {
                for (var b = this.f, d = a.items, e = 0; e < d.length; e++)
                    for (var f = 0; f < b.b.length; f++) d[e].itemId == b.b[f].itemId && (b.b[f] = d[e]);
                b = !0
            }
            c ? rd(this, a.jump || 0, b, a.requestId, a.customData, b, a.currentTime) : this.j(b, a.requestId, a.customData, b)
        } else O(this.a, "QUEUE_UPDATE request ignored"),
            this.j(!1, a.requestId)
    };
    g.Cc = function(a) {
        a = a.data;
        O(this.a, "Queue remove data: " + JSON.stringify(a));
        var b = !1;
        n(a.currentItemId) && (b = Kc(this.f, a.currentItemId));
        if (a.itemIds && 0 != a.itemIds.length) {
            if (!b) {
                for (var b = this.f, c = a.itemIds, d = !1, e = 0; e < c.length; e++)
                    for (var f = 0; f < b.b.length; f++)
                        if (c[e] == b.b[f].itemId) {
                            b.b.splice(f, 1);
                            b.i == f ? d = !0 : b.i > f && b.i--;
                            break
                        }
                b.i >= b.b.length && (b.i = Jc(b) ? 0 : -1, Hc(b) && 0 == b.i && Lc(b));
                b = d
            }
            b ? rd(this, 0, !1, a.requestId, a.customData, !0, a.currentTime) : this.j(!1, a.requestId, a.customData, !0)
        } else N(this.a,
            "No itemIds to remove")
    };
    g.Dc = function(a) {
        a = a.data;
        O(this.a, "Queue reorder data: " + JSON.stringify(a));
        var b = !1,
            c = !1;
        n(a.currentItemId) && (c = Kc(this.f, a.currentItemId));
        if (a.itemIds && 0 < a.itemIds.length) {
            var b = this.f,
                d = a.itemIds,
                e = a.insertBefore;
            if (d && 0 != d.length) {
                for (var f = b.b[b.i].itemId, l = k(e) ? e : -1, e = b.b.length - d.length, q = [], u = -1 == l ? !0 : !1, H = 0; H < b.b.length; H++) 0 <= y(d, b.b[H].itemId) ? u || b.b[H].itemId != d[0] || (e = q.length) : (q.push(b.b[H]), l == b.b[H].itemId && (e = q.length - 1, u = !0));
                l = [];
                for (u = 0; u < d.length; u++) {
                    a: {
                        for (H = 0; H < b.b.length; H++)
                            if (d[u] ==
                                b.b[H].itemId) {
                                H = b.b[H];
                                break a
                            }
                        H = null
                    }
                    l.push(H)
                }
                ea(ta, q, e, 0)
                    .apply(null, l);
                b.b = q;
                k(f) && Kc(b, f)
            }
            b = !0
        }
        c ? rd(this, 0, !1, a.requestId, a.customData, b, a.currentTime) : this.j(!1, a.requestId, a.customData, b)
    };
    g.l = function() {
        X.D.l.call(this);
        M(this.a, E, "Disposed " + this.J())
    };
})
.call(window);