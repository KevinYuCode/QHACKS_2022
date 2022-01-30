/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tfjsCore = require('@tensorflow/tfjs-core');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */
var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
        return m.call(o);
    if (o && typeof o.length === "number")
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (a) { var b = 0; return function () { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }; }; };
$jscomp.arrayIterator = function (a) { return { next: $jscomp.arrayIteratorImpl(a) }; };
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) { if (a == Array.prototype || a == Object.prototype)
    return a; a[b] = c.value; return a; };
$jscomp.getGlobal = function (a) { a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof commonjsGlobal && commonjsGlobal]; for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math)
        return c;
} throw Error("Cannot find global object"); };
$jscomp.global = $jscomp.getGlobal(commonjsGlobal);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
$jscomp.polyfill = function (a, b, c, d) { b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, d) : $jscomp.polyfillUnisolated(a, b, c, d)); };
$jscomp.polyfillUnisolated = function (a, b) { var c = $jscomp.global; a = a.split("."); for (var d = 0; d < a.length - 1; d++) {
    var e = a[d];
    if (!(e in c))
        return;
    c = c[e];
} a = a[a.length - 1]; d = c[a]; b = b(d); b != d && null != b && $jscomp.defineProperty(c, a, { configurable: !0, writable: !0, value: b }); };
$jscomp.polyfillIsolated = function (a, b, c) {
    var d = a.split(".");
    a = 1 === d.length;
    var e = d[0];
    e = !a && e in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var f = 0; f < d.length - 1; f++) {
        var g = d[f];
        if (!(g in e))
            return;
        e = e[g];
    }
    d = d[d.length - 1];
    c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? e[d] : null;
    b = b(c);
    null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, d, { configurable: !0, writable: !0, value: b }) : b !== c && (void 0 === $jscomp.propertyToPolyfillSymbol[d] && (a = 1E9 * Math.random() >>> 0, $jscomp.propertyToPolyfillSymbol[d] = $jscomp.IS_SYMBOL_NATIVE ?
        $jscomp.global.Symbol(d) : $jscomp.POLYFILL_PREFIX + a + "$" + d), $jscomp.defineProperty(e, $jscomp.propertyToPolyfillSymbol[d], { configurable: !0, writable: !0, value: b })));
};
$jscomp.initSymbol = function () { };
$jscomp.polyfill("Symbol", function (a) { if (a)
    return a; var b = function (f, g) { this.$jscomp$symbol$id_ = f; $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: g }); }; b.prototype.toString = function () { return this.$jscomp$symbol$id_; }; var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_", d = 0, e = function (f) { if (this instanceof e)
    throw new TypeError("Symbol is not a constructor"); return new b(c + (f || "") + "_" + d++, f); }; return e; }, "es6", "es3");
$jscomp.polyfill("Symbol.iterator", function (a) { if (a)
    return a; a = Symbol("Symbol.iterator"); for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
    var d = $jscomp.global[b[c]];
    "function" === typeof d && "function" != typeof d.prototype[a] && $jscomp.defineProperty(d.prototype, a, { configurable: !0, writable: !0, value: function () { return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this)); } });
} return a; }, "es6", "es3");
$jscomp.iteratorPrototype = function (a) { a = { next: a }; a[Symbol.iterator] = function () { return this; }; return a; };
$jscomp.createTemplateTagFirstArg = function (a) { return a.raw = a; };
$jscomp.createTemplateTagFirstArgWithRaw = function (a, b) { a.raw = b; return a; };
$jscomp.makeIterator = function (a) { var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; return b ? b.call(a) : $jscomp.arrayIterator(a); };
$jscomp.arrayFromIterator = function (a) { for (var b, c = []; !(b = a.next()).done;)
    c.push(b.value); return c; };
$jscomp.arrayFromIterable = function (a) { return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a)); };
$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function (a) { var b = function () { }; b.prototype = a; return new b; };
$jscomp.getConstructImplementation = function () {
    function a() { function c() { } Reflect.construct(c, [], function () { }); return new c instanceof c; }
    if ($jscomp.TRUST_ES6_POLYFILLS && "undefined" != typeof Reflect && Reflect.construct) {
        if (a())
            return Reflect.construct;
        var b = Reflect.construct;
        return function (c, d, e) { c = b(c, d); e && Reflect.setPrototypeOf(c, e.prototype); return c; };
    }
    return function (c, d, e) {
        void 0 === e && (e = c);
        e = $jscomp.objectCreate(e.prototype || Object.prototype);
        return Function.prototype.apply.call(c, e, d) ||
            e;
    };
};
$jscomp.construct = { valueOf: $jscomp.getConstructImplementation }.valueOf();
$jscomp.underscoreProtoCanBeSet = function () { var a = { a: !0 }, b = {}; try {
    return b.__proto__ = a, b.a;
}
catch (c) { } return !1; };
$jscomp.setPrototypeOf = $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function (a, b) { a.__proto__ = b; if (a.__proto__ !== b)
    throw new TypeError(a + " is not extensible"); return a; } : null;
$jscomp.inherits = function (a, b) { a.prototype = $jscomp.objectCreate(b.prototype); a.prototype.constructor = a; if ($jscomp.setPrototypeOf) {
    var c = $jscomp.setPrototypeOf;
    c(a, b);
}
else
    for (c in b)
        if ("prototype" != c)
            if (Object.defineProperties) {
                var d = Object.getOwnPropertyDescriptor(b, c);
                d && Object.defineProperty(a, c, d);
            }
            else
                a[c] = b[c]; a.superClass_ = b.prototype; };
$jscomp.generator = {};
$jscomp.generator.ensureIteratorResultIsObject_ = function (a) { if (!(a instanceof Object))
    throw new TypeError("Iterator result " + a + " is not an object"); };
$jscomp.generator.Context = function () { this.isRunning_ = !1; this.yieldAllIterator_ = null; this.yieldResult = void 0; this.nextAddress = 1; this.finallyAddress_ = this.catchAddress_ = 0; this.finallyContexts_ = this.abruptCompletion_ = null; };
$jscomp.generator.Context.prototype.start_ = function () { if (this.isRunning_)
    throw new TypeError("Generator is already running"); this.isRunning_ = !0; };
$jscomp.generator.Context.prototype.stop_ = function () { this.isRunning_ = !1; };
$jscomp.generator.Context.prototype.jumpToErrorHandler_ = function () { this.nextAddress = this.catchAddress_ || this.finallyAddress_; };
$jscomp.generator.Context.prototype.next_ = function (a) { this.yieldResult = a; };
$jscomp.generator.Context.prototype.throw_ = function (a) { this.abruptCompletion_ = { exception: a, isException: !0 }; this.jumpToErrorHandler_(); };
$jscomp.generator.Context.prototype.return = function (a) { this.abruptCompletion_ = { return: a }; this.nextAddress = this.finallyAddress_; };
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function (a) { this.abruptCompletion_ = { jumpTo: a }; this.nextAddress = this.finallyAddress_; };
$jscomp.generator.Context.prototype.yield = function (a, b) { this.nextAddress = b; return { value: a }; };
$jscomp.generator.Context.prototype.yieldAll = function (a, b) { a = $jscomp.makeIterator(a); var c = a.next(); $jscomp.generator.ensureIteratorResultIsObject_(c); if (c.done)
    this.yieldResult = c.value, this.nextAddress = b;
else
    return this.yieldAllIterator_ = a, this.yield(c.value, b); };
$jscomp.generator.Context.prototype.jumpTo = function (a) { this.nextAddress = a; };
$jscomp.generator.Context.prototype.jumpToEnd = function () { this.nextAddress = 0; };
$jscomp.generator.Context.prototype.setCatchFinallyBlocks = function (a, b) { this.catchAddress_ = a; void 0 != b && (this.finallyAddress_ = b); };
$jscomp.generator.Context.prototype.setFinallyBlock = function (a) { this.catchAddress_ = 0; this.finallyAddress_ = a || 0; };
$jscomp.generator.Context.prototype.leaveTryBlock = function (a, b) { this.nextAddress = a; this.catchAddress_ = b || 0; };
$jscomp.generator.Context.prototype.enterCatchBlock = function (a) { this.catchAddress_ = a || 0; a = this.abruptCompletion_.exception; this.abruptCompletion_ = null; return a; };
$jscomp.generator.Context.prototype.enterFinallyBlock = function (a, b, c) { c ? this.finallyContexts_[c] = this.abruptCompletion_ : this.finallyContexts_ = [this.abruptCompletion_]; this.catchAddress_ = a || 0; this.finallyAddress_ = b || 0; };
$jscomp.generator.Context.prototype.leaveFinallyBlock = function (a, b) { b = this.finallyContexts_.splice(b || 0)[0]; if (b = this.abruptCompletion_ = this.abruptCompletion_ || b) {
    if (b.isException)
        return this.jumpToErrorHandler_();
    void 0 != b.jumpTo && this.finallyAddress_ < b.jumpTo ? (this.nextAddress = b.jumpTo, this.abruptCompletion_ = null) : this.nextAddress = this.finallyAddress_;
}
else
    this.nextAddress = a; };
$jscomp.generator.Context.prototype.forIn = function (a) { return new $jscomp.generator.Context.PropertyIterator(a); };
$jscomp.generator.Context.PropertyIterator = function (a) { this.object_ = a; this.properties_ = []; for (var b in a)
    this.properties_.push(b); this.properties_.reverse(); };
$jscomp.generator.Context.PropertyIterator.prototype.getNext = function () { for (; 0 < this.properties_.length;) {
    var a = this.properties_.pop();
    if (a in this.object_)
        return a;
} return null; };
$jscomp.generator.Engine_ = function (a) { this.context_ = new $jscomp.generator.Context; this.program_ = a; };
$jscomp.generator.Engine_.prototype.next_ = function (a) { this.context_.start_(); if (this.context_.yieldAllIterator_)
    return this.yieldAllStep_(this.context_.yieldAllIterator_.next, a, this.context_.next_); this.context_.next_(a); return this.nextStep_(); };
$jscomp.generator.Engine_.prototype.return_ = function (a) { this.context_.start_(); var b = this.context_.yieldAllIterator_; if (b)
    return this.yieldAllStep_("return" in b ? b["return"] : function (c) { return { value: c, done: !0 }; }, a, this.context_.return); this.context_.return(a); return this.nextStep_(); };
$jscomp.generator.Engine_.prototype.throw_ = function (a) { this.context_.start_(); if (this.context_.yieldAllIterator_)
    return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], a, this.context_.next_); this.context_.throw_(a); return this.nextStep_(); };
$jscomp.generator.Engine_.prototype.yieldAllStep_ = function (a, b, c) { try {
    var d = a.call(this.context_.yieldAllIterator_, b);
    $jscomp.generator.ensureIteratorResultIsObject_(d);
    if (!d.done)
        return this.context_.stop_(), d;
    var e = d.value;
}
catch (f) {
    return this.context_.yieldAllIterator_ = null, this.context_.throw_(f), this.nextStep_();
} this.context_.yieldAllIterator_ = null; c.call(this.context_, e); return this.nextStep_(); };
$jscomp.generator.Engine_.prototype.nextStep_ = function () { for (; this.context_.nextAddress;)
    try {
        var a = this.program_(this.context_);
        if (a)
            return this.context_.stop_(), { value: a.value, done: !1 };
    }
    catch (b) {
        this.context_.yieldResult = void 0, this.context_.throw_(b);
    } this.context_.stop_(); if (this.context_.abruptCompletion_) {
    a = this.context_.abruptCompletion_;
    this.context_.abruptCompletion_ = null;
    if (a.isException)
        throw a.exception;
    return { value: a.return, done: !0 };
} return { value: void 0, done: !0 }; };
$jscomp.generator.Generator_ = function (a) { this.next = function (b) { return a.next_(b); }; this.throw = function (b) { return a.throw_(b); }; this.return = function (b) { return a.return_(b); }; this[Symbol.iterator] = function () { return this; }; };
$jscomp.generator.createGenerator = function (a, b) { b = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b)); $jscomp.setPrototypeOf && a.prototype && $jscomp.setPrototypeOf(b, a.prototype); return b; };
$jscomp.asyncExecutePromiseGenerator = function (a) { function b(d) { return a.next(d); } function c(d) { return a.throw(d); } return new Promise(function (d, e) { function f(g) { g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e); } f(a.next()); }); };
$jscomp.asyncExecutePromiseGeneratorFunction = function (a) { return $jscomp.asyncExecutePromiseGenerator(a()); };
$jscomp.asyncExecutePromiseGeneratorProgram = function (a) { return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a))); };
$jscomp.polyfill("Reflect", function (a) { return a ? a : {}; }, "es6", "es3");
$jscomp.polyfill("Reflect.construct", function () { return $jscomp.construct; }, "es6", "es3");
$jscomp.polyfill("Reflect.setPrototypeOf", function (a) { if (a)
    return a; if ($jscomp.setPrototypeOf) {
    var b = $jscomp.setPrototypeOf;
    return function (c, d) { try {
        return b(c, d), !0;
    }
    catch (e) {
        return !1;
    } };
} return null; }, "es6", "es5");
$jscomp.polyfill("Promise", function (a) {
    function b() { this.batch_ = null; }
    function c(k) { return k instanceof f ? k : new f(function (h) { h(k); }); }
    if (a && (!($jscomp.FORCE_POLYFILL_PROMISE || $jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION && "undefined" === typeof $jscomp.global.PromiseRejectionEvent) || !$jscomp.global.Promise || -1 === $jscomp.global.Promise.toString().indexOf("[native code]")))
        return a;
    b.prototype.asyncExecute = function (k) { if (null == this.batch_) {
        this.batch_ = [];
        var h = this;
        this.asyncExecuteFunction(function () { h.executeBatch_(); });
    } this.batch_.push(k); };
    var d = $jscomp.global.setTimeout;
    b.prototype.asyncExecuteFunction = function (k) { d(k, 0); };
    b.prototype.executeBatch_ = function () { for (; this.batch_ && this.batch_.length;) {
        var k = this.batch_;
        this.batch_ = [];
        for (var h = 0; h < k.length; ++h) {
            var l = k[h];
            k[h] = null;
            try {
                l();
            }
            catch (m) {
                this.asyncThrow_(m);
            }
        }
    } this.batch_ = null; };
    b.prototype.asyncThrow_ = function (k) { this.asyncExecuteFunction(function () { throw k; }); };
    var e = { PENDING: 0, FULFILLED: 1, REJECTED: 2 }, f = function (k) {
        this.state_ = e.PENDING;
        this.result_ = void 0;
        this.onSettledCallbacks_ =
            [];
        this.isRejectionHandled_ = !1;
        var h = this.createResolveAndReject_();
        try {
            k(h.resolve, h.reject);
        }
        catch (l) {
            h.reject(l);
        }
    };
    f.prototype.createResolveAndReject_ = function () { function k(m) { return function (n) { l || (l = !0, m.call(h, n)); }; } var h = this, l = !1; return { resolve: k(this.resolveTo_), reject: k(this.reject_) }; };
    f.prototype.resolveTo_ = function (k) {
        if (k === this)
            this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (k instanceof f)
            this.settleSameAsPromise_(k);
        else {
            a: switch (typeof k) {
                case "object":
                    var h = null != k;
                    break a;
                case "function":
                    h = !0;
                    break a;
                default: h = !1;
            }
            h ? this.resolveToNonPromiseObj_(k) : this.fulfill_(k);
        }
    };
    f.prototype.resolveToNonPromiseObj_ = function (k) { var h = void 0; try {
        h = k.then;
    }
    catch (l) {
        this.reject_(l);
        return;
    } "function" == typeof h ? this.settleSameAsThenable_(h, k) : this.fulfill_(k); };
    f.prototype.reject_ = function (k) { this.settle_(e.REJECTED, k); };
    f.prototype.fulfill_ = function (k) { this.settle_(e.FULFILLED, k); };
    f.prototype.settle_ = function (k, h) {
        if (this.state_ != e.PENDING)
            throw Error("Cannot settle(" + k +
                ", " + h + "): Promise already settled in state" + this.state_);
        this.state_ = k;
        this.result_ = h;
        this.state_ === e.REJECTED && this.scheduleUnhandledRejectionCheck_();
        this.executeOnSettledCallbacks_();
    };
    f.prototype.scheduleUnhandledRejectionCheck_ = function () { var k = this; d(function () { if (k.notifyUnhandledRejection_()) {
        var h = $jscomp.global.console;
        "undefined" !== typeof h && h.error(k.result_);
    } }, 1); };
    f.prototype.notifyUnhandledRejection_ = function () {
        if (this.isRejectionHandled_)
            return !1;
        var k = $jscomp.global.CustomEvent, h = $jscomp.global.Event, l = $jscomp.global.dispatchEvent;
        if ("undefined" === typeof l)
            return !0;
        "function" === typeof k ? k = new k("unhandledrejection", { cancelable: !0 }) : "function" === typeof h ? k = new h("unhandledrejection", { cancelable: !0 }) : (k = $jscomp.global.document.createEvent("CustomEvent"), k.initCustomEvent("unhandledrejection", !1, !0, k));
        k.promise = this;
        k.reason = this.result_;
        return l(k);
    };
    f.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
            for (var k = 0; k < this.onSettledCallbacks_.length; ++k)
                g.asyncExecute(this.onSettledCallbacks_[k]);
            this.onSettledCallbacks_ = null;
        }
    };
    var g = new b;
    f.prototype.settleSameAsPromise_ = function (k) { var h = this.createResolveAndReject_(); k.callWhenSettled_(h.resolve, h.reject); };
    f.prototype.settleSameAsThenable_ = function (k, h) { var l = this.createResolveAndReject_(); try {
        k.call(h, l.resolve, l.reject);
    }
    catch (m) {
        l.reject(m);
    } };
    f.prototype.then = function (k, h) { function l(q, r) { return "function" == typeof q ? function (t) { try {
        m(q(t));
    }
    catch (v) {
        n(v);
    } } : r; } var m, n, p = new f(function (q, r) { m = q; n = r; }); this.callWhenSettled_(l(k, m), l(h, n)); return p; };
    f.prototype.catch = function (k) { return this.then(void 0, k); };
    f.prototype.callWhenSettled_ = function (k, h) { function l() { switch (m.state_) {
        case e.FULFILLED:
            k(m.result_);
            break;
        case e.REJECTED:
            h(m.result_);
            break;
        default: throw Error("Unexpected state: " + m.state_);
    } } var m = this; null == this.onSettledCallbacks_ ? g.asyncExecute(l) : this.onSettledCallbacks_.push(l); this.isRejectionHandled_ = !0; };
    f.resolve = c;
    f.reject = function (k) { return new f(function (h, l) { l(k); }); };
    f.race = function (k) {
        return new f(function (h, l) {
            for (var m = $jscomp.makeIterator(k), n = m.next(); !n.done; n = m.next())
                c(n.value).callWhenSettled_(h, l);
        });
    };
    f.all = function (k) { var h = $jscomp.makeIterator(k), l = h.next(); return l.done ? c([]) : new f(function (m, n) { function p(t) { return function (v) { q[t] = v; r--; 0 == r && m(q); }; } var q = [], r = 0; do
        q.push(void 0), r++, c(l.value).callWhenSettled_(p(q.length - 1), n), l = h.next();
    while (!l.done); }); };
    return f;
}, "es6", "es3");
$jscomp.findInternal = function (a, b, c) { a instanceof String && (a = String(a)); for (var d = a.length, e = 0; e < d; e++) {
    var f = a[e];
    if (b.call(c, f, e, a))
        return { i: e, v: f };
} return { i: -1, v: void 0 }; };
$jscomp.polyfill("Array.prototype.find", function (a) { return a ? a : function (b, c) { return $jscomp.findInternal(this, b, c).v; }; }, "es6", "es3");
$jscomp.checkEs6ConformanceViaProxy = function () { try {
    var a = {}, b = Object.create(new $jscomp.global.Proxy(a, { get: function (c, d, e) { return c == a && "q" == d && e == b; } }));
    return !0 === b.q;
}
catch (c) {
    return !1;
} };
$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
$jscomp.ES6_CONFORMANCE = $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $jscomp.checkEs6ConformanceViaProxy();
$jscomp.owns = function (a, b) { return Object.prototype.hasOwnProperty.call(a, b); };
$jscomp.polyfill("WeakMap", function (a) {
    function b() { if (!a || !Object.seal)
        return !1; try {
        var l = Object.seal({}), m = Object.seal({}), n = new a([[l, 2], [m, 3]]);
        if (2 != n.get(l) || 3 != n.get(m))
            return !1;
        n.delete(l);
        n.set(m, 4);
        return !n.has(l) && 4 == n.get(m);
    }
    catch (p) {
        return !1;
    } }
    function c() { }
    function d(l) { var m = typeof l; return "object" === m && null !== l || "function" === m; }
    function e(l) { if (!$jscomp.owns(l, g)) {
        var m = new c;
        $jscomp.defineProperty(l, g, { value: m });
    } }
    function f(l) {
        if (!$jscomp.ISOLATE_POLYFILLS) {
            var m = Object[l];
            m && (Object[l] =
                function (n) { if (n instanceof c)
                    return n; Object.isExtensible(n) && e(n); return m(n); });
        }
    }
    if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (a && $jscomp.ES6_CONFORMANCE)
            return a;
    }
    else if (b())
        return a;
    var g = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var k = 0, h = function (l) { this.id_ = (k += Math.random() + 1).toString(); if (l) {
        l = $jscomp.makeIterator(l);
        for (var m; !(m = l.next()).done;)
            m = m.value, this.set(m[0], m[1]);
    } };
    h.prototype.set = function (l, m) {
        if (!d(l))
            throw Error("Invalid WeakMap key");
        e(l);
        if (!$jscomp.owns(l, g))
            throw Error("WeakMap key fail: " + l);
        l[g][this.id_] = m;
        return this;
    };
    h.prototype.get = function (l) { return d(l) && $jscomp.owns(l, g) ? l[g][this.id_] : void 0; };
    h.prototype.has = function (l) { return d(l) && $jscomp.owns(l, g) && $jscomp.owns(l[g], this.id_); };
    h.prototype.delete = function (l) { return d(l) && $jscomp.owns(l, g) && $jscomp.owns(l[g], this.id_) ? delete l[g][this.id_] : !1; };
    return h;
}, "es6", "es3");
$jscomp.MapEntry = function () { };
$jscomp.polyfill("Map", function (a) {
    function b() { if ($jscomp.ASSUME_NO_NATIVE_MAP || !a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
        return !1; try {
        var h = Object.seal({ x: 4 }), l = new a($jscomp.makeIterator([[h, "s"]]));
        if ("s" != l.get(h) || 1 != l.size || l.get({ x: 4 }) || l.set({ x: 4 }, "t") != l || 2 != l.size)
            return !1;
        var m = l.entries(), n = m.next();
        if (n.done || n.value[0] != h || "s" != n.value[1])
            return !1;
        n = m.next();
        return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0;
    }
    catch (p) {
        return !1;
    } }
    if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (a && $jscomp.ES6_CONFORMANCE)
            return a;
    }
    else if (b())
        return a;
    var c = new WeakMap, d = function (h) { this.data_ = {}; this.head_ = g(); this.size = 0; if (h) {
        h = $jscomp.makeIterator(h);
        for (var l; !(l = h.next()).done;)
            l = l.value, this.set(l[0], l[1]);
    } };
    d.prototype.set = function (h, l) {
        h = 0 === h ? 0 : h;
        var m = e(this, h);
        m.list || (m.list = this.data_[m.id] = []);
        m.entry ? m.entry.value = l : (m.entry = { next: this.head_, previous: this.head_.previous, head: this.head_, key: h, value: l }, m.list.push(m.entry),
            this.head_.previous.next = m.entry, this.head_.previous = m.entry, this.size++);
        return this;
    };
    d.prototype.delete = function (h) { h = e(this, h); return h.entry && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.data_[h.id], h.entry.previous.next = h.entry.next, h.entry.next.previous = h.entry.previous, h.entry.head = null, this.size--, !0) : !1; };
    d.prototype.clear = function () { this.data_ = {}; this.head_ = this.head_.previous = g(); this.size = 0; };
    d.prototype.has = function (h) { return !!e(this, h).entry; };
    d.prototype.get = function (h) {
        return (h =
            e(this, h).entry) && h.value;
    };
    d.prototype.entries = function () { return f(this, function (h) { return [h.key, h.value]; }); };
    d.prototype.keys = function () { return f(this, function (h) { return h.key; }); };
    d.prototype.values = function () { return f(this, function (h) { return h.value; }); };
    d.prototype.forEach = function (h, l) { for (var m = this.entries(), n; !(n = m.next()).done;)
        n = n.value, h.call(l, n[1], n[0], this); };
    d.prototype[Symbol.iterator] = d.prototype.entries;
    var e = function (h, l) {
        var m = l && typeof l;
        "object" == m || "function" == m ? c.has(l) ? m = c.get(l) :
            (m = "" + ++k, c.set(l, m)) : m = "p_" + l;
        var n = h.data_[m];
        if (n && $jscomp.owns(h.data_, m))
            for (h = 0; h < n.length; h++) {
                var p = n[h];
                if (l !== l && p.key !== p.key || l === p.key)
                    return { id: m, list: n, index: h, entry: p };
            }
        return { id: m, list: n, index: -1, entry: void 0 };
    }, f = function (h, l) { var m = h.head_; return $jscomp.iteratorPrototype(function () { if (m) {
        for (; m.head != h.head_;)
            m = m.previous;
        for (; m.next != m.head;)
            return m = m.next, { done: !1, value: l(m) };
        m = null;
    } return { done: !0, value: void 0 }; }); }, g = function () { var h = {}; return h.previous = h.next = h.head = h; }, k = 0;
    return d;
}, "es6", "es3");
$jscomp.iteratorFromArray = function (a, b) { a instanceof String && (a += ""); var c = 0, d = !1, e = { next: function () { if (!d && c < a.length) {
        var f = c++;
        return { value: b(f, a[f]), done: !1 };
    } d = !0; return { done: !0, value: void 0 }; } }; e[Symbol.iterator] = function () { return e; }; return e; };
$jscomp.polyfill("Array.prototype.entries", function (a) { return a ? a : function () { return $jscomp.iteratorFromArray(this, function (b, c) { return [b, c]; }); }; }, "es6", "es3");
$jscomp.checkStringArgs = function (a, b, c) { if (null == a)
    throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined"); if (b instanceof RegExp)
    throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression"); return a + ""; };
$jscomp.polyfill("String.prototype.endsWith", function (a) { return a ? a : function (b, c) { var d = $jscomp.checkStringArgs(this, b, "endsWith"); b += ""; void 0 === c && (c = d.length); c = Math.max(0, Math.min(c | 0, d.length)); for (var e = b.length; 0 < e && 0 < c;)
    if (d[--c] != b[--e])
        return !1; return 0 >= e; }; }, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function (a) { return a ? a : function (b, c) { var d = $jscomp.checkStringArgs(this, b, "startsWith"); b += ""; var e = d.length, f = b.length; c = Math.max(0, Math.min(c | 0, d.length)); for (var g = 0; g < f && c < e;)
    if (d[c++] != b[g++])
        return !1; return g >= f; }; }, "es6", "es3");
$jscomp.polyfill("Number.isFinite", function (a) { return a ? a : function (b) { return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b; }; }, "es6", "es3");
$jscomp.polyfill("String.prototype.repeat", function (a) { return a ? a : function (b) { var c = $jscomp.checkStringArgs(this, null, "repeat"); if (0 > b || 1342177279 < b)
    throw new RangeError("Invalid count value"); b |= 0; for (var d = ""; b;)
    if (b & 1 && (d += c), b >>>= 1)
        c += c; return d; }; }, "es6", "es3");
$jscomp.polyfill("Object.setPrototypeOf", function (a) { return a || $jscomp.setPrototypeOf; }, "es6", "es5");
$jscomp.assign = $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.assign ? Object.assign : function (a, b) { for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (d)
        for (var e in d)
            $jscomp.owns(d, e) && (a[e] = d[e]);
} return a; };
$jscomp.polyfill("Object.assign", function (a) { return a || $jscomp.assign; }, "es6", "es3");
var goog = goog || {};
goog.global = commonjsGlobal || self;
goog.exportPath_ = function (a, b, c, d) { a = a.split("."); d = d || goog.global; a[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + a[0]); for (var e; a.length && (e = a.shift());)
    if (a.length || void 0 === b)
        d = d[e] && d[e] !== Object.prototype[e] ? d[e] : d[e] = {};
    else if (!c && goog.isObject(b) && goog.isObject(d[e]))
        for (var f in b)
            b.hasOwnProperty(f) && (d[e][f] = b[f]);
    else
        d[e] = b; };
goog.define = function (a, b) { return b; };
goog.FEATURESET_YEAR = 2012;
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.getLocale = function () { return goog.LOCALE; };
goog.TRUSTED_SITE = !0;
goog.DISALLOW_TEST_ONLY_CODE = !goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
goog.provide = function (a) { if (goog.isInModuleLoader_())
    throw Error("goog.provide cannot be used within a module."); goog.constructNamespace_(a); };
goog.constructNamespace_ = function (a, b, c) { goog.exportPath_(a, b, c); };
goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
goog.getScriptNonce_ = function (a) { a = (a || goog.global).document; return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(a) ? a : ""; };
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function (a) {
    if ("string" !== typeof a || !a || -1 == a.search(goog.VALID_MODULE_RE_))
        throw Error("Invalid module identifier");
    if (!goog.isInGoogModuleLoader_())
        throw Error("Module " + a + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
    if (goog.moduleLoaderState_.moduleName)
        throw Error("goog.module may only be called once per module.");
    goog.moduleLoaderState_.moduleName = a;
};
goog.module.get = function (a) { return goog.module.getInternal_(a); };
goog.module.getInternal_ = function () { return null; };
goog.ModuleType = { ES6: "es6", GOOG: "goog" };
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function () { return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_(); };
goog.isInGoogModuleLoader_ = function () { return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG; };
goog.isInEs6ModuleLoader_ = function () { if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6)
    return !0; var a = goog.global.$jscomp; return a ? "function" != typeof a.getCurrentModulePath ? !1 : !!a.getCurrentModulePath() : !1; };
goog.module.declareLegacyNamespace = function () { goog.moduleLoaderState_.declareLegacyNamespace = !0; };
goog.declareModuleId = function (a) { if (goog.moduleLoaderState_)
    goog.moduleLoaderState_.moduleName = a;
else {
    var b = goog.global.$jscomp;
    if (!b || "function" != typeof b.getCurrentModulePath)
        throw Error('Module with namespace "' + a + '" has been loaded incorrectly.');
    b = b.require(b.getCurrentModulePath());
    goog.loadedModules_[a] = { exports: b, type: goog.ModuleType.ES6, moduleId: a };
} };
goog.setTestOnly = function (a) { if (goog.DISALLOW_TEST_ONLY_CODE)
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : ".")); };
goog.forwardDeclare = function () { };
goog.getObjectByName = function (a, b) { a = a.split("."); b = b || goog.global; for (var c = 0; c < a.length; c++)
    if (b = b[a[c]], null == b)
        return null; return b; };
goog.addDependency = function () { };
goog.ENABLE_DEBUG_LOADER = !0;
goog.logToConsole_ = function (a) { goog.global.console && goog.global.console.error(a); };
goog.require = function () { };
goog.requireType = function () { return {}; };
goog.basePath = "";
goog.nullFunction = function () { };
goog.abstractMethod = function () { throw Error("unimplemented abstract method"); };
goog.addSingletonGetter = function (a) { a.instance_ = void 0; a.getInstance = function () { if (a.instance_)
    return a.instance_; goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a); return a.instance_ = new a; }; };
goog.instantiatedSingletons_ = [];
goog.LOAD_MODULE_USING_EVAL = !0;
goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
goog.loadedModules_ = {};
goog.DEPENDENCIES_ENABLED = !1;
goog.TRANSPILE = "detect";
goog.ASSUME_ES_MODULES_TRANSPILED = !1;
goog.TRANSPILE_TO_LANGUAGE = "";
goog.TRANSPILER = "transpile.js";
goog.TRUSTED_TYPES_POLICY_NAME = "goog";
goog.hasBadLetScoping = null;
goog.loadModule = function (a) {
    var b = goog.moduleLoaderState_;
    try {
        goog.moduleLoaderState_ = { moduleName: "", declareLegacyNamespace: !1, type: goog.ModuleType.GOOG };
        var c = {}, d = c;
        if ("function" === typeof a)
            d = a.call(void 0, d);
        else if ("string" === typeof a)
            d = goog.loadModuleFromSource_.call(void 0, d, a);
        else
            throw Error("Invalid module definition");
        var e = goog.moduleLoaderState_.moduleName;
        if ("string" === typeof e && e)
            goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(e, d, c !== d) : goog.SEAL_MODULE_EXPORTS &&
                Object.seal && "object" == typeof d && null != d && Object.seal(d), goog.loadedModules_[e] = { exports: d, type: goog.ModuleType.GOOG, moduleId: goog.moduleLoaderState_.moduleName };
        else
            throw Error('Invalid module name "' + e + '"');
    }
    finally {
        goog.moduleLoaderState_ = b;
    }
};
goog.loadModuleFromSource_ = function (a, b) { eval(goog.CLOSURE_EVAL_PREFILTER_.createScript(b)); return a; };
goog.normalizePath_ = function (a) { a = a.split("/"); for (var b = 0; b < a.length;)
    "." == a[b] ? a.splice(b, 1) : b && ".." == a[b] && a[b - 1] && ".." != a[b - 1] ? a.splice(--b, 2) : b++; return a.join("/"); };
goog.loadFileSync_ = function (a) { if (goog.global.CLOSURE_LOAD_FILE_SYNC)
    return goog.global.CLOSURE_LOAD_FILE_SYNC(a); try {
    var b = new goog.global.XMLHttpRequest;
    b.open("get", a, !1);
    b.send();
    return 0 == b.status || 200 == b.status ? b.responseText : null;
}
catch (c) {
    return null;
} };
goog.transpile_ = function (a, b, c) {
    var d = goog.global.$jscomp;
    d || (goog.global.$jscomp = d = {});
    var e = d.transpile;
    if (!e) {
        var f = goog.basePath + goog.TRANSPILER, g = goog.loadFileSync_(f);
        if (g) {
            (function () { (0, eval)(g + "\n//# sourceURL=" + f); }).call(goog.global);
            if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile)
                throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
            goog.global.$jscomp.transpile =
                goog.global.$gwtExport.$jscomp.transpile;
            d = goog.global.$jscomp;
            e = d.transpile;
        }
    }
    if (!e) {
        var k = " requires transpilation but no transpiler was found.";
        k += ' Please add "//javascript/closure:transpiler" as a data dependency to ensure it is included.';
        e = d.transpile = function (h, l) { goog.logToConsole_(l + k); return h; };
    }
    return e(a, b, c);
};
goog.typeOf = function (a) { var b = typeof a; return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"; };
goog.isArrayLike = function (a) { var b = goog.typeOf(a); return "array" == b || "object" == b && "number" == typeof a.length; };
goog.isDateLike = function (a) { return goog.isObject(a) && "function" == typeof a.getFullYear; };
goog.isObject = function (a) { var b = typeof a; return "object" == b && null != a || "function" == b; };
goog.getUid = function (a) { return Object.prototype.hasOwnProperty.call(a, goog.UID_PROPERTY_) && a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_); };
goog.hasUid = function (a) { return !!a[goog.UID_PROPERTY_]; };
goog.removeUid = function (a) { null !== a && "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_); try {
    delete a[goog.UID_PROPERTY_];
}
catch (b) { } };
goog.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);
goog.uidCounter_ = 0;
goog.cloneObject = function (a) { var b = goog.typeOf(a); if ("object" == b || "array" == b) {
    if ("function" === typeof a.clone)
        return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map)
        return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set)
        return new Set(a);
    b = "array" == b ? [] : {};
    for (var c in a)
        b[c] = goog.cloneObject(a[c]);
    return b;
} return a; };
goog.bindNative_ = function (a, b, c) { return a.call.apply(a.bind, arguments); };
goog.bindJs_ = function (a, b, c) { if (!a)
    throw Error(); if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () { var e = Array.prototype.slice.call(arguments); Array.prototype.unshift.apply(e, d); return a.apply(b, e); };
} return function () { return a.apply(b, arguments); }; };
goog.bind = function (a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_; return goog.bind.apply(null, arguments); };
goog.partial = function (a, b) { var c = Array.prototype.slice.call(arguments, 1); return function () { var d = c.slice(); d.push.apply(d, arguments); return a.apply(this, d); }; };
goog.mixin = function (a, b) { for (var c in b)
    a[c] = b[c]; };
goog.now = function () { return Date.now(); };
goog.globalEval = function (a) { (0, eval)(a); };
goog.getCssName = function (a, b) { if ("." == String(a).charAt(0))
    throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a); var c = function (e) { return goog.cssNameMapping_[e] || e; }, d = function (e) { e = e.split("-"); for (var f = [], g = 0; g < e.length; g++)
    f.push(c(e[g])); return f.join("-"); }; d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d : function (e) { return e; }; a = b ? a + "-" + d(b) : d(a); return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(a) : a; };
goog.setCssNameMapping = function (a, b) { goog.cssNameMapping_ = a; goog.cssNameMappingStyle_ = b; };
goog.getMsg = function (a, b, c) { c && c.html && (a = a.replace(/</g, "&lt;")); c && c.unescapeHtmlEntities && (a = a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&")); b && (a = a.replace(/\{\$([^}]+)}/g, function (d, e) { return null != b && e in b ? b[e] : d; })); return a; };
goog.getMsgWithFallback = function (a) { return a; };
goog.exportSymbol = function (a, b, c) { goog.exportPath_(a, b, !0, c); };
goog.exportProperty = function (a, b, c) { a[b] = c; };
goog.inherits = function (a, b) { function c() { } c.prototype = b.prototype; a.superClass_ = b.prototype; a.prototype = new c; a.prototype.constructor = a; a.base = function (d, e, f) { for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++)
    g[k - 2] = arguments[k]; return b.prototype[e].apply(d, g); }; };
goog.scope = function (a) { if (goog.isInModuleLoader_())
    throw Error("goog.scope is not supported within a module."); a.call(goog.global); };
goog.defineClass = function (a, b) { var c = b.constructor, d = b.statics; c && c != Object.prototype.constructor || (c = function () { throw Error("cannot instantiate an interface (no constructor defined)."); }); c = goog.defineClass.createSealingConstructor_(c, a); a && goog.inherits(c, a); delete b.constructor; delete b.statics; goog.defineClass.applyProperties_(c.prototype, b); null != d && (d instanceof Function ? d(c) : goog.defineClass.applyProperties_(c, d)); return c; };
goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
goog.defineClass.createSealingConstructor_ = function (a) { return goog.defineClass.SEAL_CLASS_INSTANCES ? function () { var b = a.apply(this, arguments) || this; b[goog.UID_PROPERTY_] = b[goog.UID_PROPERTY_]; return b; } : a; };
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_ = function (a, b) { for (var c in b)
    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]); for (var d = 0; d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d++)
    c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d], Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]); };
goog.identity_ = function (a) { return a; };
goog.createTrustedTypesPolicy = function (a) { var b = null, c = goog.global.trustedTypes; if (!c || !c.createPolicy)
    return b; try {
    b = c.createPolicy(a, { createHTML: goog.identity_, createScript: goog.identity_, createScriptURL: goog.identity_ });
}
catch (d) {
    goog.logToConsole_(d.message);
} return b; };
var module$exports$jspb$BinaryConstants = { FieldType: { INVALID: -1, DOUBLE: 1, FLOAT: 2, INT64: 3, UINT64: 4, INT32: 5, FIXED64: 6, FIXED32: 7, BOOL: 8, STRING: 9, GROUP: 10, MESSAGE: 11, BYTES: 12, UINT32: 13, ENUM: 14, SFIXED32: 15, SFIXED64: 16, SINT32: 17, SINT64: 18 }, WireType: { INVALID: -1, VARINT: 0, FIXED64: 1, DELIMITED: 2, START_GROUP: 3, END_GROUP: 4, FIXED32: 5 } };
function module$contents$jspb$BinaryConstants_isValidWireType(a) { return 0 <= a && 5 >= a; }
function module$contents$jspb$BinaryConstants_FieldTypeToWireType(a) {
    switch (a) {
        case module$exports$jspb$BinaryConstants.FieldType.INT32:
        case module$exports$jspb$BinaryConstants.FieldType.INT64:
        case module$exports$jspb$BinaryConstants.FieldType.UINT32:
        case module$exports$jspb$BinaryConstants.FieldType.UINT64:
        case module$exports$jspb$BinaryConstants.FieldType.SINT32:
        case module$exports$jspb$BinaryConstants.FieldType.SINT64:
        case module$exports$jspb$BinaryConstants.FieldType.BOOL:
        case module$exports$jspb$BinaryConstants.FieldType.ENUM: return module$exports$jspb$BinaryConstants.WireType.VARINT;
        case module$exports$jspb$BinaryConstants.FieldType.DOUBLE:
        case module$exports$jspb$BinaryConstants.FieldType.FIXED64:
        case module$exports$jspb$BinaryConstants.FieldType.SFIXED64: return module$exports$jspb$BinaryConstants.WireType.FIXED64;
        case module$exports$jspb$BinaryConstants.FieldType.STRING:
        case module$exports$jspb$BinaryConstants.FieldType.MESSAGE:
        case module$exports$jspb$BinaryConstants.FieldType.BYTES: return module$exports$jspb$BinaryConstants.WireType.DELIMITED;
        case module$exports$jspb$BinaryConstants.FieldType.FLOAT:
        case module$exports$jspb$BinaryConstants.FieldType.FIXED32:
        case module$exports$jspb$BinaryConstants.FieldType.SFIXED32: return module$exports$jspb$BinaryConstants.WireType.FIXED32;
        default: return module$exports$jspb$BinaryConstants.WireType.INVALID;
    }
}
module$exports$jspb$BinaryConstants.INVALID_FIELD_NUMBER = -1;
module$exports$jspb$BinaryConstants.INVALID_TAG = -1;
module$exports$jspb$BinaryConstants.FLOAT32_EPS = 1.401298464324817E-45;
module$exports$jspb$BinaryConstants.FLOAT32_MIN = 1.1754943508222875E-38;
module$exports$jspb$BinaryConstants.FLOAT32_MAX = 3.4028234663852886E38;
module$exports$jspb$BinaryConstants.FLOAT64_EPS = 4.9E-324;
module$exports$jspb$BinaryConstants.FLOAT64_MIN = 2.2250738585072014E-308;
module$exports$jspb$BinaryConstants.FLOAT64_MAX = 1.7976931348623157E308;
module$exports$jspb$BinaryConstants.TWO_TO_20 = 1048576;
module$exports$jspb$BinaryConstants.TWO_TO_23 = 8388608;
module$exports$jspb$BinaryConstants.TWO_TO_31 = 2147483648;
module$exports$jspb$BinaryConstants.TWO_TO_32 = 4294967296;
module$exports$jspb$BinaryConstants.TWO_TO_52 = 4503599627370496;
module$exports$jspb$BinaryConstants.TWO_TO_63 = 0x7fffffffffffffff;
module$exports$jspb$BinaryConstants.TWO_TO_64 = 1.8446744073709552E19;
module$exports$jspb$BinaryConstants.ZERO_HASH = "\x00\x00\x00\x00\x00\x00\x00\x00";
module$exports$jspb$BinaryConstants.FieldTypeToWireType = module$contents$jspb$BinaryConstants_FieldTypeToWireType;
module$exports$jspb$BinaryConstants.isValidWireType = module$contents$jspb$BinaryConstants_isValidWireType;
var jspb = {};
jspb.ByteSource = {}.ByteSource;
function module$contents$jspb$binary$errors_invalidWireTypeError(a, b) { return Error("Invalid wire type: " + a + " (at position " + b + ")"); }
function module$contents$jspb$binary$errors_invalidVarintError() { return Error("Failed to read varint, encoding is invalid."); }
function module$contents$jspb$binary$errors_readTooFarError(a, b) { return Error("Tried to read past the end of the data " + b + " > " + a); }
goog.debug = {};
function module$contents$goog$debug$Error_DebugError(a, b) { if (Error.captureStackTrace)
    Error.captureStackTrace(this, module$contents$goog$debug$Error_DebugError);
else {
    var c = Error().stack;
    c && (this.stack = c);
} a && (this.message = String(a)); void 0 !== b && (this.cause = b); this.reportErrorToServer = !0; }
goog.inherits(module$contents$goog$debug$Error_DebugError, Error);
module$contents$goog$debug$Error_DebugError.prototype.name = "CustomError";
goog.debug.Error = module$contents$goog$debug$Error_DebugError;
goog.dom = {};
goog.dom.NodeType = { ELEMENT: 1, ATTRIBUTE: 2, TEXT: 3, CDATA_SECTION: 4, ENTITY_REFERENCE: 5, ENTITY: 6, PROCESSING_INSTRUCTION: 7, COMMENT: 8, DOCUMENT: 9, DOCUMENT_TYPE: 10, DOCUMENT_FRAGMENT: 11, NOTATION: 12 };
goog.asserts = {};
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function (a, b) { module$contents$goog$debug$Error_DebugError.call(this, goog.asserts.subs_(a, b)); this.messagePattern = a; };
goog.inherits(goog.asserts.AssertionError, module$contents$goog$debug$Error_DebugError);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.DEFAULT_ERROR_HANDLER = function (a) { throw a; };
goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.subs_ = function (a, b) { a = a.split("%s"); for (var c = "", d = a.length - 1, e = 0; e < d; e++)
    c += a[e] + (e < b.length ? b[e] : "%s"); return c + a[d]; };
goog.asserts.doAssertFailure_ = function (a, b, c, d) { var e = "Assertion failed"; if (c) {
    e += ": " + c;
    var f = d;
}
else
    a && (e += ": " + a, f = b); a = new goog.asserts.AssertionError("" + e, f || []); goog.asserts.errorHandler_(a); };
goog.asserts.setErrorHandler = function (a) { goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = a); };
goog.asserts.assert = function (a, b, c) { goog.asserts.ENABLE_ASSERTS && !a && goog.asserts.doAssertFailure_("", null, b, Array.prototype.slice.call(arguments, 2)); return a; };
goog.asserts.assertExists = function (a, b, c) { goog.asserts.ENABLE_ASSERTS && null == a && goog.asserts.doAssertFailure_("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2)); return a; };
goog.asserts.fail = function (a, b) { goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1))); };
goog.asserts.assertNumber = function (a, b, c) { goog.asserts.ENABLE_ASSERTS && "number" !== typeof a && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2)); return a; };
goog.asserts.assertString = function (a, b, c) { goog.asserts.ENABLE_ASSERTS && "string" !== typeof a && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2)); return a; };
goog.asserts.assertFunction = function (a, b, c) { goog.asserts.ENABLE_ASSERTS && "function" !== typeof a && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2)); return a; };
goog.asserts.assertObject = function (a, b, c) { goog.asserts.ENABLE_ASSERTS && !goog.isObject(a) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2)); return a; };
goog.asserts.assertArray = function (a, b, c) { goog.asserts.ENABLE_ASSERTS && !Array.isArray(a) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2)); return a; };
goog.asserts.assertBoolean = function (a, b, c) { goog.asserts.ENABLE_ASSERTS && "boolean" !== typeof a && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2)); return a; };
goog.asserts.assertElement = function (a, b, c) { !goog.asserts.ENABLE_ASSERTS || goog.isObject(a) && a.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2)); return a; };
goog.asserts.assertInstanceof = function (a, b, c, d) { !goog.asserts.ENABLE_ASSERTS || a instanceof b || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(b), goog.asserts.getType_(a)], c, Array.prototype.slice.call(arguments, 3)); return a; };
goog.asserts.assertFinite = function (a, b, c) { !goog.asserts.ENABLE_ASSERTS || "number" == typeof a && isFinite(a) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [a], b, Array.prototype.slice.call(arguments, 2)); return a; };
goog.asserts.getType_ = function (a) { return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a; };
var module$contents$jspb$binary$utf8_ENFORCE_UTF8 = goog.DEBUG ? "ALWAYS" : "DEFAULT";
(0, goog.asserts.assert)("NEVER" === module$contents$jspb$binary$utf8_ENFORCE_UTF8 || "DEFAULT" === module$contents$jspb$binary$utf8_ENFORCE_UTF8 || "ALWAYS" === module$contents$jspb$binary$utf8_ENFORCE_UTF8);
var module$contents$jspb$binary$utf8_REJECT_UNPAIRED_SURROGATES = goog.DEBUG, module$contents$jspb$binary$utf8_USE_TEXT_ENCODING = 2020 <= goog.FEATURESET_YEAR;
function module$contents$jspb$binary$utf8_utf8ErrorsAreFatal(a) { return "ALWAYS" === module$contents$jspb$binary$utf8_ENFORCE_UTF8 ? !0 : "NEVER" === module$contents$jspb$binary$utf8_ENFORCE_UTF8 ? !1 : a; }
function module$contents$jspb$binary$utf8_invalid(a, b) { if (module$contents$jspb$binary$utf8_utf8ErrorsAreFatal(a))
    throw Error("Invalid UTF8"); b.push(65533); }
function module$contents$jspb$binary$utf8_codeUnitsToString(a, b) { b = String.fromCharCode.apply(null, b); return null == a ? b : a + b; }
function module$contents$jspb$binary$utf8_polyfillDecodeUtf8(a, b, c, d) {
    c = b + c;
    for (var e = [], f = null, g, k, h, l; b < c;)
        g = a[b++], 128 > g ? e.push(g) : 224 > g ? b >= c ? module$contents$jspb$binary$utf8_invalid(d, e) : (k = a[b++], 194 > g || 128 !== (k & 192) ? (b--, module$contents$jspb$binary$utf8_invalid(d, e)) : (g = (g & 31) << 6 | k & 63, (0, goog.asserts.assert)(128 <= g && 2047 >= g), e.push(g))) : 240 > g ? b >= c - 1 ? module$contents$jspb$binary$utf8_invalid(d, e) : (k = a[b++], 128 !== (k & 192) || 224 === g && 160 > k || 237 === g && 160 <= k || 128 !== ((h = a[b++]) & 192) ? (b--, module$contents$jspb$binary$utf8_invalid(d, e)) : (g = (g & 15) << 12 | (k & 63) << 6 | h & 63, (0, goog.asserts.assert)(2048 <= g && 65535 >= g), (0, goog.asserts.assert)(55296 > g || 57343 < g), e.push(g))) : 244 >= g ? b >= c - 2 ? module$contents$jspb$binary$utf8_invalid(d, e) : (k = a[b++], 128 !== (k & 192) || 0 !== (g << 28) + (k - 144) >> 30 || 128 !== ((h = a[b++]) & 192) || 128 !== ((l = a[b++]) & 192) ? (b--, module$contents$jspb$binary$utf8_invalid(d, e)) : (g = (g & 7) << 18 | (k & 63) << 12 | (h & 63) << 6 | l & 63, (0, goog.asserts.assert)(65536 <= g && 1114111 >= g), g -= 65536, e.push((g >> 10 & 1023) + 55296, (g & 1023) + 56320))) : module$contents$jspb$binary$utf8_invalid(d, e), 8192 <= e.length && (f = module$contents$jspb$binary$utf8_codeUnitsToString(f, e), e.length = 0);
    (0, goog.asserts.assert)(b === c, "expected " + b + " === " + c);
    return module$contents$jspb$binary$utf8_codeUnitsToString(f, e);
}
var module$contents$jspb$binary$utf8_fatalDecoderInstance;
function module$contents$jspb$binary$utf8_getFatalDecoderInstance() { var a = module$contents$jspb$binary$utf8_fatalDecoderInstance; a || (a = module$contents$jspb$binary$utf8_fatalDecoderInstance = new TextDecoder("utf-8", { fatal: !0 })); return a; }
var module$contents$jspb$binary$utf8_nonFatalDecoderInstance;
function module$contents$jspb$binary$utf8_getNonFatalDecoderInstance() { var a = module$contents$jspb$binary$utf8_nonFatalDecoderInstance; a || (a = module$contents$jspb$binary$utf8_nonFatalDecoderInstance = new TextDecoder("utf-8", { fatal: !1 })); return a; }
var module$contents$jspb$binary$utf8_useTextDecoderDecode = module$contents$jspb$binary$utf8_USE_TEXT_ENCODING || "undefined" !== typeof TextDecoder, module$contents$jspb$binary$utf8_textEncoderInstance, module$contents$jspb$binary$utf8_useTextEncoderEncode = module$contents$jspb$binary$utf8_USE_TEXT_ENCODING || "undefined" !== typeof TextEncoder;
function module$contents$jspb$binary$utf8_encodeUtf8(a, b) {
    (0, goog.asserts.assertString)(a);
    if (module$contents$jspb$binary$utf8_useTextEncoderEncode) {
        if (((void 0 === b ? 0 : b) || module$contents$jspb$binary$utf8_REJECT_UNPAIRED_SURROGATES) && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a))
            throw Error("Found an unpaired surrogate");
        a = (module$contents$jspb$binary$utf8_textEncoderInstance || (module$contents$jspb$binary$utf8_textEncoderInstance = new TextEncoder)).encode(a);
    }
    else {
        b =
            void 0 === b ? !1 : b;
        for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
            var f = a.charCodeAt(e);
            if (128 > f)
                d[c++] = f;
            else {
                if (2048 > f)
                    d[c++] = f >> 6 | 192;
                else {
                    (0, goog.asserts.assert)(65536 > f);
                    if (55296 <= f && 57343 >= f) {
                        if (56319 >= f && e < a.length) {
                            var g = a.charCodeAt(++e);
                            if (56320 <= g && 57343 >= g) {
                                f = 1024 * (f - 55296) + g - 56320 + 65536;
                                d[c++] = f >> 18 | 240;
                                d[c++] = f >> 12 & 63 | 128;
                                d[c++] = f >> 6 & 63 | 128;
                                d[c++] = f & 63 | 128;
                                continue;
                            }
                            else
                                e--;
                        }
                        if (b || module$contents$jspb$binary$utf8_REJECT_UNPAIRED_SURROGATES)
                            throw Error("Found an unpaired surrogate");
                        f = 65533;
                    }
                    d[c++] = f >> 12 | 224;
                    d[c++] = f >> 6 & 63 | 128;
                }
                d[c++] = f & 63 | 128;
            }
        }
        a = d.subarray(0, c);
    }
    return a;
}
goog.crypt = {};
goog.crypt.stringToByteArray = function (a) { for (var b = [], c = 0, d = 0; d < a.length; d++) {
    var e = a.charCodeAt(d);
    255 < e && (b[c++] = e & 255, e >>= 8);
    b[c++] = e;
} return b; };
goog.crypt.byteArrayToString = function (a) { if (8192 >= a.length)
    return String.fromCharCode.apply(null, a); for (var b = "", c = 0; c < a.length; c += 8192) {
    var d = Array.prototype.slice.call(a, c, c + 8192);
    b += String.fromCharCode.apply(null, d);
} return b; };
goog.crypt.byteArrayToHex = function (a, b) { return Array.prototype.map.call(a, function (c) { c = c.toString(16); return 1 < c.length ? c : "0" + c; }).join(b || ""); };
goog.crypt.hexToByteArray = function (a) { goog.asserts.assert(0 == a.length % 2, "Key string length must be multiple of 2"); for (var b = [], c = 0; c < a.length; c += 2)
    b.push(parseInt(a.substring(c, c + 2), 16)); return b; };
goog.crypt.stringToUtf8ByteArray = function (a) { for (var b = [], c = 0, d = 0; d < a.length; d++) {
    var e = a.charCodeAt(d);
    128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128);
} return b; };
goog.crypt.utf8ByteArrayToString = function (a) { for (var b = [], c = 0, d = 0; c < a.length;) {
    var e = a[c++];
    if (128 > e)
        b[d++] = String.fromCharCode(e);
    else if (191 < e && 224 > e) {
        var f = a[c++];
        b[d++] = String.fromCharCode((e & 31) << 6 | f & 63);
    }
    else if (239 < e && 365 > e) {
        f = a[c++];
        var g = a[c++], k = a[c++];
        e = ((e & 7) << 18 | (f & 63) << 12 | (g & 63) << 6 | k & 63) - 65536;
        b[d++] = String.fromCharCode(55296 + (e >> 10));
        b[d++] = String.fromCharCode(56320 + (e & 1023));
    }
    else
        f = a[c++], g = a[c++], b[d++] = String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | g & 63);
} return b.join(""); };
goog.crypt.xorByteArray = function (a, b) { goog.asserts.assert(a.length == b.length, "XOR array lengths must match"); for (var c = [], d = 0; d < a.length; d++)
    c.push(a[d] ^ b[d]); return c; };
goog.string = {};
goog.string.internal = {};
goog.string.internal.startsWith = function (a, b) { return 0 == a.lastIndexOf(b, 0); };
goog.string.internal.endsWith = function (a, b) { var c = a.length - b.length; return 0 <= c && a.indexOf(b, c) == c; };
goog.string.internal.caseInsensitiveStartsWith = function (a, b) { return 0 == goog.string.internal.caseInsensitiveCompare(b, a.substr(0, b.length)); };
goog.string.internal.caseInsensitiveEndsWith = function (a, b) { return 0 == goog.string.internal.caseInsensitiveCompare(b, a.substr(a.length - b.length, b.length)); };
goog.string.internal.caseInsensitiveEquals = function (a, b) { return a.toLowerCase() == b.toLowerCase(); };
goog.string.internal.isEmptyOrWhitespace = function (a) { return /^[\s\xa0]*$/.test(a); };
goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function (a) { return a.trim(); } : function (a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]; };
goog.string.internal.caseInsensitiveCompare = function (a, b) { a = String(a).toLowerCase(); b = String(b).toLowerCase(); return a < b ? -1 : a == b ? 0 : 1; };
goog.string.internal.newLineToBr = function (a, b) { return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>"); };
goog.string.internal.htmlEscape = function (a, b) {
    if (b)
        a = a.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;");
    else {
        if (!goog.string.internal.ALL_RE_.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(goog.string.internal.AMP_RE_, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(goog.string.internal.LT_RE_, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(goog.string.internal.GT_RE_, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(goog.string.internal.QUOT_RE_, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(goog.string.internal.NULL_RE_, "&#0;"));
    }
    return a;
};
goog.string.internal.AMP_RE_ = /&/g;
goog.string.internal.LT_RE_ = /</g;
goog.string.internal.GT_RE_ = />/g;
goog.string.internal.QUOT_RE_ = /"/g;
goog.string.internal.SINGLE_QUOTE_RE_ = /'/g;
goog.string.internal.NULL_RE_ = /\x00/g;
goog.string.internal.ALL_RE_ = /[\x00&<>"']/;
goog.string.internal.whitespaceEscape = function (a, b) { return goog.string.internal.newLineToBr(a.replace(/  /g, " &#160;"), b); };
goog.string.internal.contains = function (a, b) { return -1 != a.indexOf(b); };
goog.string.internal.caseInsensitiveContains = function (a, b) { return goog.string.internal.contains(a.toLowerCase(), b.toLowerCase()); };
goog.string.internal.compareVersions = function (a, b) {
    var c = 0;
    a = goog.string.internal.trim(String(a)).split(".");
    b = goog.string.internal.trim(String(b)).split(".");
    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || "", g = b[e] || "";
        do {
            f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            if (0 == f[0].length && 0 == g[0].length)
                break;
            c = goog.string.internal.compareElements_(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || goog.string.internal.compareElements_(0 ==
                f[2].length, 0 == g[2].length) || goog.string.internal.compareElements_(f[2], g[2]);
            f = f[3];
            g = g[3];
        } while (0 == c);
    }
    return c;
};
goog.string.internal.compareElements_ = function (a, b) { return a < b ? -1 : a > b ? 1 : 0; };
goog.labs = {};
goog.labs.userAgent = {};
goog.labs.userAgent.util = {};
function module$contents$goog$labs$userAgent$util_getNativeUserAgentString() { var a = goog.global.navigator; return a && (a = a.userAgent) ? a : ""; }
function module$contents$goog$labs$userAgent$util_getNativeUserAgentData() { return null; }
var module$contents$goog$labs$userAgent$util_userAgentInternal = null, module$contents$goog$labs$userAgent$util_userAgentDataInternal = module$contents$goog$labs$userAgent$util_getNativeUserAgentData();
function module$contents$goog$labs$userAgent$util_getUserAgent() { return null == module$contents$goog$labs$userAgent$util_userAgentInternal ? module$contents$goog$labs$userAgent$util_getNativeUserAgentString() : module$contents$goog$labs$userAgent$util_userAgentInternal; }
function module$contents$goog$labs$userAgent$util_matchUserAgentDataBrand(a) { var b = module$contents$goog$labs$userAgent$util_userAgentDataInternal; return b ? b.brands.some(function (c) { return (c = c.brand) && (0, goog.string.internal.contains)(c, a); }) : !1; }
function module$contents$goog$labs$userAgent$util_matchUserAgent(a) { return (0, goog.string.internal.contains)(module$contents$goog$labs$userAgent$util_getUserAgent(), a); }
function module$contents$goog$labs$userAgent$util_matchUserAgentIgnoreCase(a) { return (0, goog.string.internal.caseInsensitiveContains)(module$contents$goog$labs$userAgent$util_getUserAgent(), a); }
function module$contents$goog$labs$userAgent$util_extractVersionTuples(a) { for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a);)
    c.push([d[1], d[2], d[3] || void 0]); return c; }
goog.labs.userAgent.util.ASSUME_CLIENT_HINTS_SUPPORT = !1;
goog.labs.userAgent.util.extractVersionTuples = module$contents$goog$labs$userAgent$util_extractVersionTuples;
goog.labs.userAgent.util.getNativeUserAgentString = module$contents$goog$labs$userAgent$util_getNativeUserAgentString;
goog.labs.userAgent.util.getUserAgent = module$contents$goog$labs$userAgent$util_getUserAgent;
goog.labs.userAgent.util.getUserAgentData = function () { return module$contents$goog$labs$userAgent$util_userAgentDataInternal; };
goog.labs.userAgent.util.matchUserAgent = module$contents$goog$labs$userAgent$util_matchUserAgent;
goog.labs.userAgent.util.matchUserAgentDataBrand = module$contents$goog$labs$userAgent$util_matchUserAgentDataBrand;
goog.labs.userAgent.util.matchUserAgentIgnoreCase = module$contents$goog$labs$userAgent$util_matchUserAgentIgnoreCase;
goog.labs.userAgent.util.resetUserAgentData = function () { module$contents$goog$labs$userAgent$util_userAgentDataInternal = module$contents$goog$labs$userAgent$util_getNativeUserAgentData(); };
goog.labs.userAgent.util.setUserAgent = function (a) { module$contents$goog$labs$userAgent$util_userAgentInternal = "string" === typeof a ? a : module$contents$goog$labs$userAgent$util_getNativeUserAgentString(); };
goog.labs.userAgent.util.setUserAgentData = function (a) { module$contents$goog$labs$userAgent$util_userAgentDataInternal = a; };
var module$exports$goog$labs$userAgent$highEntropy$highEntropyValue = { AsyncValue: function () { } };
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.AsyncValue.prototype.getIfLoaded = function () { };
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.AsyncValue.prototype.load = function () { };
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.HighEntropyValue = function (a) { this.key_ = a; this.promise_ = this.value_ = void 0; this.pending_ = !1; };
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.HighEntropyValue.prototype.getIfLoaded = function () { if (module$contents$goog$labs$userAgent$util_userAgentDataInternal)
    return this.value_; };
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.HighEntropyValue.prototype.load = function () {
    var a = this, b;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
        if (1 == c.nextAddress) {
            b = module$contents$goog$labs$userAgent$util_userAgentDataInternal;
            if (!b)
                return c.return(void 0);
            a.promise_ || (a.pending_ = !0, a.promise_ = function () {
                var d;
                return $jscomp.asyncExecutePromiseGeneratorProgram(function (e) {
                    if (1 == e.nextAddress)
                        return e.setFinallyBlock(2), e.yield(b.getHighEntropyValues([a.key_]), 4);
                    if (2 != e.nextAddress)
                        return d = e.yieldResult, a.value_ = d[a.key_], e.return(a.value_);
                    e.enterFinallyBlock();
                    a.pending_ = !1;
                    return e.leaveFinallyBlock(0);
                });
            }());
            return c.yield(a.promise_, 2);
        }
        return c.return(c.yieldResult);
    });
};
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.HighEntropyValue.prototype.resetForTesting = function () { if (this.pending_)
    throw Error("Unsafe call to resetForTesting"); this.value_ = this.promise_ = void 0; this.pending_ = !1; };
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version = function (a) { this.versionString_ = a; };
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version.prototype.toVersionStringForLogging = function () { return this.versionString_; };
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version.prototype.isAtLeast = function (a) { return 0 <= (0, goog.string.internal.compareVersions)(this.versionString_, a); };
var module$exports$goog$labs$userAgent$highEntropy$highEntropyData = {}, module$contents$goog$labs$userAgent$highEntropy$highEntropyData_fullVersionListAvailable = !1;
module$exports$goog$labs$userAgent$highEntropy$highEntropyData.hasFullVersionList = function () { return module$contents$goog$labs$userAgent$highEntropy$highEntropyData_fullVersionListAvailable; };
module$exports$goog$labs$userAgent$highEntropy$highEntropyData.setHasFullVersionListForTesting = function (a) { module$contents$goog$labs$userAgent$highEntropy$highEntropyData_fullVersionListAvailable = a; };
module$exports$goog$labs$userAgent$highEntropy$highEntropyData.fullVersionList = new module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.HighEntropyValue("fullVersionList");
module$exports$goog$labs$userAgent$highEntropy$highEntropyData.platformVersion = new module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.HighEntropyValue("platformVersion");
module$exports$goog$labs$userAgent$highEntropy$highEntropyData.resetAllForTesting = function () { module$exports$goog$labs$userAgent$highEntropy$highEntropyData.fullVersionList.resetForTesting(); module$exports$goog$labs$userAgent$highEntropy$highEntropyData.platformVersion.resetForTesting(); };
goog.labs.userAgent.browser = {};
var module$contents$goog$labs$userAgent$browser_Brand = { ANDROID_BROWSER: "Android Browser", CHROMIUM: "Chromium", EDGE: "Microsoft Edge", FIREFOX: "Firefox", IE: "Internet Explorer", OPERA: "Opera", SAFARI: "Safari", SILK: "Silk" };
goog.labs.userAgent.browser.Brand = module$contents$goog$labs$userAgent$browser_Brand;
function module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() { var a = module$contents$goog$labs$userAgent$util_userAgentDataInternal; return !!a && 0 < a.brands.length; }
function module$contents$goog$labs$userAgent$browser_matchOpera() { return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() ? !1 : module$contents$goog$labs$userAgent$util_matchUserAgent("Opera"); }
function module$contents$goog$labs$userAgent$browser_matchIE() { return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() ? !1 : module$contents$goog$labs$userAgent$util_matchUserAgent("Trident") || module$contents$goog$labs$userAgent$util_matchUserAgent("MSIE"); }
function module$contents$goog$labs$userAgent$browser_matchEdgeHtml() { return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() ? !1 : module$contents$goog$labs$userAgent$util_matchUserAgent("Edge"); }
function module$contents$goog$labs$userAgent$browser_matchEdgeChromium() { return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() ? module$contents$goog$labs$userAgent$util_matchUserAgentDataBrand(module$contents$goog$labs$userAgent$browser_Brand.EDGE) : module$contents$goog$labs$userAgent$util_matchUserAgent("Edg/"); }
function module$contents$goog$labs$userAgent$browser_matchOperaChromium() { return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() ? module$contents$goog$labs$userAgent$util_matchUserAgentDataBrand(module$contents$goog$labs$userAgent$browser_Brand.OPERA) : module$contents$goog$labs$userAgent$util_matchUserAgent("OPR"); }
function module$contents$goog$labs$userAgent$browser_matchFirefox() { return module$contents$goog$labs$userAgent$util_matchUserAgent("Firefox") || module$contents$goog$labs$userAgent$util_matchUserAgent("FxiOS"); }
function module$contents$goog$labs$userAgent$browser_matchSafari() {
    return module$contents$goog$labs$userAgent$util_matchUserAgent("Safari") && !(module$contents$goog$labs$userAgent$browser_matchChrome() || module$contents$goog$labs$userAgent$browser_matchCoast() || module$contents$goog$labs$userAgent$browser_matchOpera() || module$contents$goog$labs$userAgent$browser_matchEdgeHtml() || module$contents$goog$labs$userAgent$browser_matchEdgeChromium() || module$contents$goog$labs$userAgent$browser_matchOperaChromium() ||
        module$contents$goog$labs$userAgent$browser_matchFirefox() || module$contents$goog$labs$userAgent$browser_isSilk() || module$contents$goog$labs$userAgent$util_matchUserAgent("Android"));
}
function module$contents$goog$labs$userAgent$browser_matchCoast() { return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() ? !1 : module$contents$goog$labs$userAgent$util_matchUserAgent("Coast"); }
function module$contents$goog$labs$userAgent$browser_matchChrome() { return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() ? module$contents$goog$labs$userAgent$util_matchUserAgentDataBrand(module$contents$goog$labs$userAgent$browser_Brand.CHROMIUM) : (module$contents$goog$labs$userAgent$util_matchUserAgent("Chrome") || module$contents$goog$labs$userAgent$util_matchUserAgent("CriOS")) && !module$contents$goog$labs$userAgent$browser_matchEdgeHtml() || module$contents$goog$labs$userAgent$browser_isSilk(); }
function module$contents$goog$labs$userAgent$browser_matchAndroidBrowser() { return module$contents$goog$labs$userAgent$util_matchUserAgent("Android") && !(module$contents$goog$labs$userAgent$browser_matchChrome() || module$contents$goog$labs$userAgent$browser_matchFirefox() || module$contents$goog$labs$userAgent$browser_matchOpera() || module$contents$goog$labs$userAgent$browser_isSilk()); }
goog.labs.userAgent.browser.isOpera = module$contents$goog$labs$userAgent$browser_matchOpera;
goog.labs.userAgent.browser.isIE = module$contents$goog$labs$userAgent$browser_matchIE;
goog.labs.userAgent.browser.isEdge = module$contents$goog$labs$userAgent$browser_matchEdgeHtml;
goog.labs.userAgent.browser.isEdgeChromium = module$contents$goog$labs$userAgent$browser_matchEdgeChromium;
goog.labs.userAgent.browser.isOperaChromium = module$contents$goog$labs$userAgent$browser_matchOperaChromium;
goog.labs.userAgent.browser.isFirefox = module$contents$goog$labs$userAgent$browser_matchFirefox;
goog.labs.userAgent.browser.isSafari = module$contents$goog$labs$userAgent$browser_matchSafari;
goog.labs.userAgent.browser.isCoast = module$contents$goog$labs$userAgent$browser_matchCoast;
goog.labs.userAgent.browser.isIosWebview = function () { return (module$contents$goog$labs$userAgent$util_matchUserAgent("iPad") || module$contents$goog$labs$userAgent$util_matchUserAgent("iPhone")) && !module$contents$goog$labs$userAgent$browser_matchSafari() && !module$contents$goog$labs$userAgent$browser_matchChrome() && !module$contents$goog$labs$userAgent$browser_matchCoast() && !module$contents$goog$labs$userAgent$browser_matchFirefox() && module$contents$goog$labs$userAgent$util_matchUserAgent("AppleWebKit"); };
goog.labs.userAgent.browser.isChrome = module$contents$goog$labs$userAgent$browser_matchChrome;
goog.labs.userAgent.browser.isAndroidBrowser = module$contents$goog$labs$userAgent$browser_matchAndroidBrowser;
function module$contents$goog$labs$userAgent$browser_isSilk() { return module$contents$goog$labs$userAgent$util_matchUserAgent("Silk"); }
goog.labs.userAgent.browser.isSilk = module$contents$goog$labs$userAgent$browser_isSilk;
function module$contents$goog$labs$userAgent$browser_createVersionMap(a) { var b = {}; a.forEach(function (c) { b[c[0]] = c[1]; }); return function (c) { return b[c.find(function (d) { return d in b; })] || ""; }; }
function module$contents$goog$labs$userAgent$browser_getVersion() {
    var a = module$contents$goog$labs$userAgent$util_getUserAgent();
    if (module$contents$goog$labs$userAgent$browser_matchIE())
        return module$contents$goog$labs$userAgent$browser_getIEVersion(a);
    a = module$contents$goog$labs$userAgent$util_extractVersionTuples(a);
    var b = module$contents$goog$labs$userAgent$browser_createVersionMap(a);
    return module$contents$goog$labs$userAgent$browser_matchOpera() ? b(["Version", "Opera"]) : module$contents$goog$labs$userAgent$browser_matchEdgeHtml() ?
        b(["Edge"]) : module$contents$goog$labs$userAgent$browser_matchEdgeChromium() ? b(["Edg"]) : module$contents$goog$labs$userAgent$browser_isSilk() ? b(["Silk"]) : module$contents$goog$labs$userAgent$browser_matchChrome() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || "";
}
goog.labs.userAgent.browser.getVersion = module$contents$goog$labs$userAgent$browser_getVersion;
goog.labs.userAgent.browser.isVersionOrHigher = function (a) { return 0 <= (0, goog.string.internal.compareVersions)(module$contents$goog$labs$userAgent$browser_getVersion(), a); };
function module$contents$goog$labs$userAgent$browser_getIEVersion(a) { var b = /rv: *([\d\.]*)/.exec(a); if (b && b[1])
    return b[1]; b = ""; var c = /MSIE +([\d\.]+)/.exec(a); if (c && c[1])
    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
        if (a && a[1])
            switch (a[1]) {
                case "4.0":
                    b = "8.0";
                    break;
                case "5.0":
                    b = "9.0";
                    break;
                case "6.0":
                    b = "10.0";
                    break;
                case "7.0": b = "11.0";
            }
        else
            b = "7.0";
    else
        b = c[1]; return b; }
function module$contents$goog$labs$userAgent$browser_getFullVersionFromUserAgentString(a) {
    var b = module$contents$goog$labs$userAgent$util_getUserAgent();
    if (a === module$contents$goog$labs$userAgent$browser_Brand.IE)
        return module$contents$goog$labs$userAgent$browser_matchIE() ? module$contents$goog$labs$userAgent$browser_getIEVersion(b) : "";
    b = module$contents$goog$labs$userAgent$util_extractVersionTuples(b);
    var c = module$contents$goog$labs$userAgent$browser_createVersionMap(b);
    switch (a) {
        case module$contents$goog$labs$userAgent$browser_Brand.OPERA:
            if (module$contents$goog$labs$userAgent$browser_matchOpera())
                return c(["Version",
                    "Opera"]);
            if (module$contents$goog$labs$userAgent$browser_matchOperaChromium())
                return c(["OPR"]);
            break;
        case module$contents$goog$labs$userAgent$browser_Brand.EDGE:
            if (module$contents$goog$labs$userAgent$browser_matchEdgeHtml())
                return c(["Edge"]);
            if (module$contents$goog$labs$userAgent$browser_matchEdgeChromium())
                return c(["Edg"]);
            break;
        case module$contents$goog$labs$userAgent$browser_Brand.CHROMIUM: if (module$contents$goog$labs$userAgent$browser_matchChrome())
            return c(["Chrome", "CriOS", "HeadlessChrome"]);
    }
    return a ===
        module$contents$goog$labs$userAgent$browser_Brand.FIREFOX && module$contents$goog$labs$userAgent$browser_matchFirefox() || a === module$contents$goog$labs$userAgent$browser_Brand.SAFARI && module$contents$goog$labs$userAgent$browser_matchSafari() || a === module$contents$goog$labs$userAgent$browser_Brand.ANDROID_BROWSER && module$contents$goog$labs$userAgent$browser_matchAndroidBrowser() || a === module$contents$goog$labs$userAgent$browser_Brand.SILK && module$contents$goog$labs$userAgent$browser_isSilk() ? (a = b[2]) &&
        a[1] || "" : "";
}
function module$contents$goog$labs$userAgent$browser_versionOf(a) {
    if (module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() && a !== module$contents$goog$labs$userAgent$browser_Brand.SILK) {
        var b = module$contents$goog$labs$userAgent$util_userAgentDataInternal.brands.find(function (c) { return c.brand === a; });
        if (!b || !b.version)
            return NaN;
        b = b.version.split(".");
    }
    else {
        b = module$contents$goog$labs$userAgent$browser_getFullVersionFromUserAgentString(a);
        if ("" === b)
            return NaN;
        b = b.split(".");
    }
    return 0 === b.length ?
        NaN : Number(b[0]);
}
goog.labs.userAgent.browser.versionOf = module$contents$goog$labs$userAgent$browser_versionOf;
goog.labs.userAgent.browser.isAtLeast = function (a, b) { goog.asserts.assert(Math.floor(b) === b, "Major version must be an integer"); return module$contents$goog$labs$userAgent$browser_versionOf(a) >= b; };
goog.labs.userAgent.browser.isAtMost = function (a, b) { goog.asserts.assert(Math.floor(b) === b, "Major version must be an integer"); return module$contents$goog$labs$userAgent$browser_versionOf(a) <= b; };
var module$contents$goog$labs$userAgent$browser_HighEntropyBrandVersion = function (a) { this.brand_ = a; };
module$contents$goog$labs$userAgent$browser_HighEntropyBrandVersion.prototype.getIfLoaded = function () { var a = this, b = module$exports$goog$labs$userAgent$highEntropy$highEntropyData.fullVersionList.getIfLoaded(); if (void 0 !== b)
    return b = b.find(function (c) { return a.brand_ === c.brand; }), goog.asserts.assertExists(b), new module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version(b.version); };
module$contents$goog$labs$userAgent$browser_HighEntropyBrandVersion.prototype.load = function () { var a = this, b, c; return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) { if (1 == d.nextAddress)
    return d.yield(module$exports$goog$labs$userAgent$highEntropy$highEntropyData.fullVersionList.load(), 2); b = d.yieldResult; c = b.find(function (e) { return a.brand_ === e.brand; }); goog.asserts.assertExists(c); return d.return(new module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version(c.version)); }); };
var module$contents$goog$labs$userAgent$browser_UserAgentStringFallbackBrandVersion = function (a) { this.version_ = new module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version(a); };
module$contents$goog$labs$userAgent$browser_UserAgentStringFallbackBrandVersion.prototype.getIfLoaded = function () { return this.version_; };
module$contents$goog$labs$userAgent$browser_UserAgentStringFallbackBrandVersion.prototype.load = function () { var a = this; return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) { return b.return(a.version_); }); };
goog.labs.userAgent.browser.loadFullVersions = function () { return $jscomp.asyncExecutePromiseGeneratorProgram(function (a) { return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() && module$contents$goog$labs$userAgent$highEntropy$highEntropyData_fullVersionListAvailable ? a.yield(module$exports$goog$labs$userAgent$highEntropy$highEntropyData.fullVersionList.load(), 0) : a.jumpTo(0); }); };
function module$contents$goog$labs$userAgent$browser_fullVersionOf(a) {
    if (module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() && module$contents$goog$labs$userAgent$highEntropy$highEntropyData_fullVersionListAvailable)
        return module$contents$goog$labs$userAgent$util_userAgentDataInternal.brands.find(function (c) { return c.brand === a; }) ? new module$contents$goog$labs$userAgent$browser_HighEntropyBrandVersion(a) : void 0;
    var b = module$contents$goog$labs$userAgent$browser_getFullVersionFromUserAgentString(a);
    return "" === b ? void 0 : new module$contents$goog$labs$userAgent$browser_UserAgentStringFallbackBrandVersion(b);
}
goog.labs.userAgent.browser.fullVersionOf = module$contents$goog$labs$userAgent$browser_fullVersionOf;
goog.labs.userAgent.browser.getVersionStringForLogging = function (a) { if (module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand()) {
    var b = module$contents$goog$labs$userAgent$browser_fullVersionOf(a);
    if (b) {
        if (b = b.getIfLoaded())
            return b.toVersionStringForLogging();
        b = module$contents$goog$labs$userAgent$util_userAgentDataInternal.brands.find(function (c) { return c.brand === a; });
        goog.asserts.assertExists(b);
        return b.version;
    }
    return "";
} return module$contents$goog$labs$userAgent$browser_getFullVersionFromUserAgentString(a); };
goog.labs.userAgent.platform = {};
function module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform() { var a = module$contents$goog$labs$userAgent$util_userAgentDataInternal; return !!a && !!a.platform; }
function module$contents$goog$labs$userAgent$platform_isAndroid() { return module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform() ? "Android" === module$contents$goog$labs$userAgent$util_userAgentDataInternal.platform : module$contents$goog$labs$userAgent$util_matchUserAgent("Android"); }
function module$contents$goog$labs$userAgent$platform_isIpod() { return module$contents$goog$labs$userAgent$util_matchUserAgent("iPod"); }
function module$contents$goog$labs$userAgent$platform_isIphone() { return module$contents$goog$labs$userAgent$util_matchUserAgent("iPhone") && !module$contents$goog$labs$userAgent$util_matchUserAgent("iPod") && !module$contents$goog$labs$userAgent$util_matchUserAgent("iPad"); }
function module$contents$goog$labs$userAgent$platform_isIpad() { return module$contents$goog$labs$userAgent$util_matchUserAgent("iPad"); }
function module$contents$goog$labs$userAgent$platform_isIos() { return module$contents$goog$labs$userAgent$platform_isIphone() || module$contents$goog$labs$userAgent$platform_isIpad() || module$contents$goog$labs$userAgent$platform_isIpod(); }
function module$contents$goog$labs$userAgent$platform_isMacintosh() { return module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform() ? "macOS" === module$contents$goog$labs$userAgent$util_userAgentDataInternal.platform : module$contents$goog$labs$userAgent$util_matchUserAgent("Macintosh"); }
function module$contents$goog$labs$userAgent$platform_isLinux() { return module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform() ? "Linux" === module$contents$goog$labs$userAgent$util_userAgentDataInternal.platform : module$contents$goog$labs$userAgent$util_matchUserAgent("Linux"); }
function module$contents$goog$labs$userAgent$platform_isWindows() { return module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform() ? "Windows" === module$contents$goog$labs$userAgent$util_userAgentDataInternal.platform : module$contents$goog$labs$userAgent$util_matchUserAgent("Windows"); }
function module$contents$goog$labs$userAgent$platform_isChromeOS() { return module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform() ? "Chrome OS" === module$contents$goog$labs$userAgent$util_userAgentDataInternal.platform : module$contents$goog$labs$userAgent$util_matchUserAgent("CrOS"); }
function module$contents$goog$labs$userAgent$platform_isKaiOS() { return module$contents$goog$labs$userAgent$util_matchUserAgentIgnoreCase("KaiOS"); }
function module$contents$goog$labs$userAgent$platform_getVersion() {
    var a = module$contents$goog$labs$userAgent$util_getUserAgent(), b = "";
    module$contents$goog$labs$userAgent$platform_isWindows() ? (b = /Windows (?:NT|Phone) ([0-9.]+)/, b = (a = b.exec(a)) ? a[1] : "0.0") : module$contents$goog$labs$userAgent$platform_isIos() ? (b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, b = (a = b.exec(a)) && a[1].replace(/_/g, ".")) : module$contents$goog$labs$userAgent$platform_isMacintosh() ? (b = /Mac OS X ([0-9_.]+)/, b = (a = b.exec(a)) ? a[1].replace(/_/g, ".") : "10") : module$contents$goog$labs$userAgent$platform_isKaiOS() ? (b = /(?:KaiOS)\/(\S+)/i, b = (a = b.exec(a)) && a[1]) : module$contents$goog$labs$userAgent$platform_isAndroid() ? (b = /Android\s+([^\);]+)(\)|;)/, b = (a = b.exec(a)) && a[1]) : module$contents$goog$labs$userAgent$platform_isChromeOS() && (b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, b = (a = b.exec(a)) && a[1]);
    return b || "";
}
var module$contents$goog$labs$userAgent$platform_PlatformVersion = function () { };
module$contents$goog$labs$userAgent$platform_PlatformVersion.prototype.getIfLoaded = function () { if (module$contents$goog$labs$userAgent$util_userAgentDataInternal) {
    var a = module$exports$goog$labs$userAgent$highEntropy$highEntropyData.platformVersion.getIfLoaded();
    if (void 0 !== a)
        return new module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version(a);
}
else
    return new module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version(module$contents$goog$labs$userAgent$platform_getVersion()); };
module$contents$goog$labs$userAgent$platform_PlatformVersion.prototype.load = function () {
    var a;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
        if (1 == b.nextAddress) {
            if (!module$contents$goog$labs$userAgent$util_userAgentDataInternal)
                return b.return(new module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version(module$contents$goog$labs$userAgent$platform_getVersion()));
            a = module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version;
            return b.yield(module$exports$goog$labs$userAgent$highEntropy$highEntropyData.platformVersion.load(), 3);
        }
        return b.return(new a(b.yieldResult));
    });
};
var module$contents$goog$labs$userAgent$platform_version = new module$contents$goog$labs$userAgent$platform_PlatformVersion;
goog.labs.userAgent.platform.getVersion = module$contents$goog$labs$userAgent$platform_getVersion;
goog.labs.userAgent.platform.isAndroid = module$contents$goog$labs$userAgent$platform_isAndroid;
goog.labs.userAgent.platform.isChromeOS = module$contents$goog$labs$userAgent$platform_isChromeOS;
goog.labs.userAgent.platform.isChromecast = function () { return module$contents$goog$labs$userAgent$util_matchUserAgent("CrKey"); };
goog.labs.userAgent.platform.isIos = module$contents$goog$labs$userAgent$platform_isIos;
goog.labs.userAgent.platform.isIpad = module$contents$goog$labs$userAgent$platform_isIpad;
goog.labs.userAgent.platform.isIphone = module$contents$goog$labs$userAgent$platform_isIphone;
goog.labs.userAgent.platform.isIpod = module$contents$goog$labs$userAgent$platform_isIpod;
goog.labs.userAgent.platform.isKaiOS = module$contents$goog$labs$userAgent$platform_isKaiOS;
goog.labs.userAgent.platform.isLinux = module$contents$goog$labs$userAgent$platform_isLinux;
goog.labs.userAgent.platform.isMacintosh = module$contents$goog$labs$userAgent$platform_isMacintosh;
goog.labs.userAgent.platform.isVersionOrHigher = function (a) { return 0 <= goog.string.internal.compareVersions(module$contents$goog$labs$userAgent$platform_getVersion(), a); };
goog.labs.userAgent.platform.isWindows = module$contents$goog$labs$userAgent$platform_isWindows;
goog.labs.userAgent.platform.version = module$contents$goog$labs$userAgent$platform_version;
goog.array = {};
goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
var module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR;
goog.array.ASSUME_NATIVE_FUNCTIONS = module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS;
function module$contents$goog$array_peek(a) { return a[a.length - 1]; }
goog.array.peek = module$contents$goog$array_peek;
goog.array.last = module$contents$goog$array_peek;
var module$contents$goog$array_indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function (a, b, c) { goog.asserts.assert(null != a.length); return Array.prototype.indexOf.call(a, b, c); } : function (a, b, c) { c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c; if ("string" === typeof a)
    return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, c); for (; c < a.length; c++)
    if (c in a && a[c] === b)
        return c; return -1; };
goog.array.indexOf = module$contents$goog$array_indexOf;
var module$contents$goog$array_lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function (a, b, c) { goog.asserts.assert(null != a.length); return Array.prototype.lastIndexOf.call(a, b, null == c ? a.length - 1 : c); } : function (a, b, c) { c = null == c ? a.length - 1 : c; 0 > c && (c = Math.max(0, a.length + c)); if ("string" === typeof a)
    return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c); for (; 0 <= c; c--)
    if (c in a && a[c] === b)
        return c; return -1; };
goog.array.lastIndexOf = module$contents$goog$array_lastIndexOf;
var module$contents$goog$array_forEach = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function (a, b, c) { goog.asserts.assert(null != a.length); Array.prototype.forEach.call(a, b, c); } : function (a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
    f in e && b.call(c, e[f], f, a); };
goog.array.forEach = module$contents$goog$array_forEach;
function module$contents$goog$array_forEachRight(a, b, c) { var d = a.length, e = "string" === typeof a ? a.split("") : a; for (--d; 0 <= d; --d)
    d in e && b.call(c, e[d], d, a); }
goog.array.forEachRight = module$contents$goog$array_forEachRight;
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function (a, b, c) { goog.asserts.assert(null != a.length); return Array.prototype.filter.call(a, b, c); } : function (a, b, c) { for (var d = a.length, e = [], f = 0, g = "string" === typeof a ? a.split("") : a, k = 0; k < d; k++)
    if (k in g) {
        var h = g[k];
        b.call(c, h, k, a) && (e[f++] = h);
    } return e; };
var module$contents$goog$array_map = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function (a, b, c) { goog.asserts.assert(null != a.length); return Array.prototype.map.call(a, b, c); } : function (a, b, c) { for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++)
    g in f && (e[g] = b.call(c, f[g], g, a)); return e; };
goog.array.map = module$contents$goog$array_map;
goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function (a, b, c, d) { goog.asserts.assert(null != a.length); d && (b = goog.bind(b, d)); return Array.prototype.reduce.call(a, b, c); } : function (a, b, c, d) { var e = c; module$contents$goog$array_forEach(a, function (f, g) { e = b.call(d, e, f, g, a); }); return e; };
goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function (a, b, c, d) { goog.asserts.assert(null != a.length); goog.asserts.assert(null != b); d && (b = goog.bind(b, d)); return Array.prototype.reduceRight.call(a, b, c); } : function (a, b, c, d) { var e = c; module$contents$goog$array_forEachRight(a, function (f, g) { e = b.call(d, e, f, g, a); }); return e; };
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function (a, b, c) { goog.asserts.assert(null != a.length); return Array.prototype.some.call(a, b, c); } : function (a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
    if (f in e && b.call(c, e[f], f, a))
        return !0; return !1; };
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function (a, b, c) { goog.asserts.assert(null != a.length); return Array.prototype.every.call(a, b, c); } : function (a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
    if (f in e && !b.call(c, e[f], f, a))
        return !1; return !0; };
goog.array.count = function (a, b, c) { var d = 0; module$contents$goog$array_forEach(a, function (e, f, g) { b.call(c, e, f, g) && ++d; }, c); return d; };
function module$contents$goog$array_find(a, b, c) { b = module$contents$goog$array_findIndex(a, b, c); return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]; }
goog.array.find = module$contents$goog$array_find;
function module$contents$goog$array_findIndex(a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
    if (f in e && b.call(c, e[f], f, a))
        return f; return -1; }
goog.array.findIndex = module$contents$goog$array_findIndex;
goog.array.findRight = function (a, b, c) { b = module$contents$goog$array_findIndexRight(a, b, c); return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]; };
function module$contents$goog$array_findIndexRight(a, b, c) { var d = a.length, e = "string" === typeof a ? a.split("") : a; for (--d; 0 <= d; d--)
    if (d in e && b.call(c, e[d], d, a))
        return d; return -1; }
goog.array.findIndexRight = module$contents$goog$array_findIndexRight;
function module$contents$goog$array_contains(a, b) { return 0 <= module$contents$goog$array_indexOf(a, b); }
goog.array.contains = module$contents$goog$array_contains;
goog.array.isEmpty = function (a) { return 0 == a.length; };
goog.array.clear = function (a) { if (!Array.isArray(a))
    for (var b = a.length - 1; 0 <= b; b--)
        delete a[b]; a.length = 0; };
goog.array.insert = function (a, b) { module$contents$goog$array_contains(a, b) || a.push(b); };
function module$contents$goog$array_insertAt(a, b, c) { module$contents$goog$array_splice(a, c, 0, b); }
goog.array.insertAt = module$contents$goog$array_insertAt;
goog.array.insertArrayAt = function (a, b, c) { goog.partial(module$contents$goog$array_splice, a, c, 0).apply(null, b); };
goog.array.insertBefore = function (a, b, c) { var d; 2 == arguments.length || 0 > (d = module$contents$goog$array_indexOf(a, c)) ? a.push(b) : module$contents$goog$array_insertAt(a, b, d); };
goog.array.remove = function (a, b) { b = module$contents$goog$array_indexOf(a, b); var c; (c = 0 <= b) && module$contents$goog$array_removeAt(a, b); return c; };
goog.array.removeLast = function (a, b) { b = module$contents$goog$array_lastIndexOf(a, b); return 0 <= b ? (module$contents$goog$array_removeAt(a, b), !0) : !1; };
function module$contents$goog$array_removeAt(a, b) { goog.asserts.assert(null != a.length); return 1 == Array.prototype.splice.call(a, b, 1).length; }
goog.array.removeAt = module$contents$goog$array_removeAt;
goog.array.removeIf = function (a, b, c) { b = module$contents$goog$array_findIndex(a, b, c); return 0 <= b ? (module$contents$goog$array_removeAt(a, b), !0) : !1; };
goog.array.removeAllIf = function (a, b, c) { var d = 0; module$contents$goog$array_forEachRight(a, function (e, f) { b.call(c, e, f, a) && module$contents$goog$array_removeAt(a, f) && d++; }); return d; };
function module$contents$goog$array_concat(a) { return Array.prototype.concat.apply([], arguments); }
goog.array.concat = module$contents$goog$array_concat;
goog.array.join = function (a) { return Array.prototype.concat.apply([], arguments); };
function module$contents$goog$array_toArray(a) { var b = a.length; if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++)
        c[d] = a[d];
    return c;
} return []; }
goog.array.toArray = module$contents$goog$array_toArray;
goog.array.clone = module$contents$goog$array_toArray;
goog.array.extend = function (a, b) { for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (goog.isArrayLike(d)) {
        var e = a.length || 0, f = d.length || 0;
        a.length = e + f;
        for (var g = 0; g < f; g++)
            a[e + g] = d[g];
    }
    else
        a.push(d);
} };
function module$contents$goog$array_splice(a, b, c, d) { goog.asserts.assert(null != a.length); return Array.prototype.splice.apply(a, module$contents$goog$array_slice(arguments, 1)); }
goog.array.splice = module$contents$goog$array_splice;
function module$contents$goog$array_slice(a, b, c) { goog.asserts.assert(null != a.length); return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c); }
goog.array.slice = module$contents$goog$array_slice;
goog.array.removeDuplicates = function (a, b, c) { b = b || a; var d = function (h) { return goog.isObject(h) ? "o" + goog.getUid(h) : (typeof h).charAt(0) + h; }; c = c || d; for (var e = d = 0, f = {}; e < a.length;) {
    var g = a[e++], k = c(g);
    Object.prototype.hasOwnProperty.call(f, k) || (f[k] = !0, b[d++] = g);
} b.length = d; };
function module$contents$goog$array_binarySearch(a, b, c) { return module$contents$goog$array_binarySearch_(a, c || module$contents$goog$array_defaultCompare, !1, b); }
goog.array.binarySearch = module$contents$goog$array_binarySearch;
goog.array.binarySelect = function (a, b, c) { return module$contents$goog$array_binarySearch_(a, b, !0, void 0, c); };
function module$contents$goog$array_binarySearch_(a, b, c, d, e) { for (var f = 0, g = a.length, k; f < g;) {
    var h = f + (g - f >>> 1);
    var l = c ? b.call(e, a[h], h, a) : b(d, a[h]);
    0 < l ? f = h + 1 : (g = h, k = !l);
} return k ? f : -f - 1; }
function module$contents$goog$array_sort(a, b) { a.sort(b || module$contents$goog$array_defaultCompare); }
goog.array.sort = module$contents$goog$array_sort;
goog.array.stableSort = function (a, b) { for (var c = Array(a.length), d = 0; d < a.length; d++)
    c[d] = { index: d, value: a[d] }; var e = b || module$contents$goog$array_defaultCompare; module$contents$goog$array_sort(c, function (f, g) { return e(f.value, g.value) || f.index - g.index; }); for (b = 0; b < a.length; b++)
    a[b] = c[b].value; };
function module$contents$goog$array_sortByKey(a, b, c) { var d = c || module$contents$goog$array_defaultCompare; module$contents$goog$array_sort(a, function (e, f) { return d(b(e), b(f)); }); }
goog.array.sortByKey = module$contents$goog$array_sortByKey;
goog.array.sortObjectsByKey = function (a, b, c) { module$contents$goog$array_sortByKey(a, function (d) { return d[b]; }, c); };
goog.array.isSorted = function (a, b, c) { b = b || module$contents$goog$array_defaultCompare; for (var d = 1; d < a.length; d++) {
    var e = b(a[d - 1], a[d]);
    if (0 < e || 0 == e && c)
        return !1;
} return !0; };
goog.array.equals = function (a, b, c) { if (!goog.isArrayLike(a) || !goog.isArrayLike(b) || a.length != b.length)
    return !1; var d = a.length; c = c || module$contents$goog$array_defaultCompareEquality; for (var e = 0; e < d; e++)
    if (!c(a[e], b[e]))
        return !1; return !0; };
goog.array.compare3 = function (a, b, c) { c = c || module$contents$goog$array_defaultCompare; for (var d = Math.min(a.length, b.length), e = 0; e < d; e++) {
    var f = c(a[e], b[e]);
    if (0 != f)
        return f;
} return module$contents$goog$array_defaultCompare(a.length, b.length); };
function module$contents$goog$array_defaultCompare(a, b) { return a > b ? 1 : a < b ? -1 : 0; }
goog.array.defaultCompare = module$contents$goog$array_defaultCompare;
goog.array.inverseDefaultCompare = function (a, b) { return -module$contents$goog$array_defaultCompare(a, b); };
function module$contents$goog$array_defaultCompareEquality(a, b) { return a === b; }
goog.array.defaultCompareEquality = module$contents$goog$array_defaultCompareEquality;
goog.array.binaryInsert = function (a, b, c) { c = module$contents$goog$array_binarySearch(a, b, c); return 0 > c ? (module$contents$goog$array_insertAt(a, b, -(c + 1)), !0) : !1; };
goog.array.binaryRemove = function (a, b, c) { b = module$contents$goog$array_binarySearch(a, b, c); return 0 <= b ? module$contents$goog$array_removeAt(a, b) : !1; };
goog.array.bucket = function (a, b, c) { for (var d = {}, e = 0; e < a.length; e++) {
    var f = a[e], g = b.call(c, f, e, a);
    void 0 !== g && (d[g] || (d[g] = [])).push(f);
} return d; };
goog.array.bucketToMap = function (a, b) { for (var c = new Map, d = 0; d < a.length; d++) {
    var e = a[d], f = b(e, d, a);
    if (void 0 !== f) {
        var g = c.get(f);
        g || (g = [], c.set(f, g));
        g.push(e);
    }
} return c; };
goog.array.toObject = function (a, b, c) { var d = {}; module$contents$goog$array_forEach(a, function (e, f) { d[b.call(c, e, f, a)] = e; }); return d; };
goog.array.toMap = function (a, b) { for (var c = new Map, d = 0; d < a.length; d++) {
    var e = a[d];
    c.set(b(e, d, a), e);
} return c; };
goog.array.range = function (a, b, c) { var d = [], e = 0, f = a; c = c || 1; void 0 !== b && (e = a, f = b); if (0 > c * (f - e))
    return []; if (0 < c)
    for (a = e; a < f; a += c)
        d.push(a);
else
    for (a = e; a > f; a += c)
        d.push(a); return d; };
goog.array.repeat = function (a, b) { for (var c = [], d = 0; d < b; d++)
    c[d] = a; return c; };
function module$contents$goog$array_flatten(a) { for (var b = [], c = 0; c < arguments.length; c++) {
    var d = arguments[c];
    if (Array.isArray(d))
        for (var e = 0; e < d.length; e += 8192) {
            var f = module$contents$goog$array_slice(d, e, e + 8192);
            f = module$contents$goog$array_flatten.apply(null, f);
            for (var g = 0; g < f.length; g++)
                b.push(f[g]);
        }
    else
        b.push(d);
} return b; }
goog.array.flatten = module$contents$goog$array_flatten;
goog.array.rotate = function (a, b) { goog.asserts.assert(null != a.length); a.length && (b %= a.length, 0 < b ? Array.prototype.unshift.apply(a, a.splice(-b, b)) : 0 > b && Array.prototype.push.apply(a, a.splice(0, -b))); return a; };
goog.array.moveItem = function (a, b, c) { goog.asserts.assert(0 <= b && b < a.length); goog.asserts.assert(0 <= c && c < a.length); b = Array.prototype.splice.call(a, b, 1); Array.prototype.splice.call(a, c, 0, b[0]); };
goog.array.zip = function (a) { if (!arguments.length)
    return []; for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++)
    arguments[d].length < c && (c = arguments[d].length); for (d = 0; d < c; d++) {
    for (var e = [], f = 0; f < arguments.length; f++)
        e.push(arguments[f][d]);
    b.push(e);
} return b; };
goog.array.shuffle = function (a, b) { b = b || Math.random; for (var c = a.length - 1; 0 < c; c--) {
    var d = Math.floor(b() * (c + 1)), e = a[c];
    a[c] = a[d];
    a[d] = e;
} };
goog.array.copyByIndex = function (a, b) { var c = []; module$contents$goog$array_forEach(b, function (d) { c.push(a[d]); }); return c; };
goog.array.concatMap = function (a, b, c) { return module$contents$goog$array_concat.apply([], module$contents$goog$array_map(a, b, c)); };
goog.labs.userAgent.engine = {};
function module$contents$goog$labs$userAgent$engine_isTrident() { return module$contents$goog$labs$userAgent$util_matchUserAgent("Trident") || module$contents$goog$labs$userAgent$util_matchUserAgent("MSIE"); }
function module$contents$goog$labs$userAgent$engine_isEdge() { return module$contents$goog$labs$userAgent$util_matchUserAgent("Edge"); }
function module$contents$goog$labs$userAgent$engine_isWebKit() { return module$contents$goog$labs$userAgent$util_matchUserAgentIgnoreCase("WebKit") && !module$contents$goog$labs$userAgent$engine_isEdge(); }
function module$contents$goog$labs$userAgent$engine_isGecko() { return module$contents$goog$labs$userAgent$util_matchUserAgent("Gecko") && !module$contents$goog$labs$userAgent$engine_isWebKit() && !module$contents$goog$labs$userAgent$engine_isTrident() && !module$contents$goog$labs$userAgent$engine_isEdge(); }
function module$contents$goog$labs$userAgent$engine_getVersion() { var a = module$contents$goog$labs$userAgent$util_getUserAgent(); if (a) {
    a = module$contents$goog$labs$userAgent$util_extractVersionTuples(a);
    var b;
    a: if (module$contents$goog$labs$userAgent$engine_isEdge()) {
        for (b = 0; b < a.length; b++) {
            var c = a[b];
            if ("Edge" == c[0]) {
                b = c;
                break a;
            }
        }
        b = void 0;
    }
    else
        b = a[1];
    if (b)
        return "Gecko" == b[0] ? module$contents$goog$labs$userAgent$engine_getVersionForKey(a, "Firefox") : b[1];
    a = a[0];
    var d;
    if (a && (d = a[2]) && (d = /Trident\/([^\s;]+)/.exec(d)))
        return d[1];
} return ""; }
function module$contents$goog$labs$userAgent$engine_getVersionForKey(a, b) { return (a = module$contents$goog$array_find(a, function (c) { return b == c[0]; })) && a[1] || ""; }
goog.labs.userAgent.engine.getVersion = module$contents$goog$labs$userAgent$engine_getVersion;
goog.labs.userAgent.engine.isEdge = module$contents$goog$labs$userAgent$engine_isEdge;
goog.labs.userAgent.engine.isGecko = module$contents$goog$labs$userAgent$engine_isGecko;
goog.labs.userAgent.engine.isPresto = function () { return module$contents$goog$labs$userAgent$util_matchUserAgent("Presto"); };
goog.labs.userAgent.engine.isTrident = module$contents$goog$labs$userAgent$engine_isTrident;
goog.labs.userAgent.engine.isVersionOrHigher = function (a) { return 0 <= goog.string.internal.compareVersions(module$contents$goog$labs$userAgent$engine_getVersion(), a); };
goog.labs.userAgent.engine.isWebKit = module$contents$goog$labs$userAgent$engine_isWebKit;
goog.reflect = {};
goog.reflect.object = function (a, b) { return b; };
goog.reflect.objectProperty = function (a) { return a; };
goog.reflect.sinkValue = function (a) { goog.reflect.sinkValue[" "](a); return a; };
goog.reflect.sinkValue[" "] = goog.nullFunction;
goog.reflect.canAccessProperty = function (a, b) { try {
    return goog.reflect.sinkValue(a[b]), !0;
}
catch (c) { } return !1; };
goog.reflect.cache = function (a, b, c, d) { d = d ? d(b) : b; return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b); };
goog.userAgent = {};
goog.userAgent.ASSUME_IE = !1;
goog.userAgent.ASSUME_EDGE = !1;
goog.userAgent.ASSUME_GECKO = !1;
goog.userAgent.ASSUME_WEBKIT = !1;
goog.userAgent.ASSUME_MOBILE_WEBKIT = !1;
goog.userAgent.ASSUME_OPERA = !1;
goog.userAgent.ASSUME_ANY_VERSION = !1;
goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function () { return module$contents$goog$labs$userAgent$util_getUserAgent(); };
goog.userAgent.getNavigatorTyped = function () { return goog.global.navigator || null; };
goog.userAgent.getNavigator = function () { return goog.userAgent.getNavigatorTyped(); };
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : module$contents$goog$labs$userAgent$browser_matchOpera();
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : module$contents$goog$labs$userAgent$browser_matchIE();
goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : module$contents$goog$labs$userAgent$engine_isEdge();
goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : module$contents$goog$labs$userAgent$engine_isGecko();
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : module$contents$goog$labs$userAgent$engine_isWebKit();
goog.userAgent.isMobile_ = function () { return goog.userAgent.WEBKIT && module$contents$goog$labs$userAgent$util_matchUserAgent("Mobile"); };
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function () { var a = goog.userAgent.getNavigatorTyped(); return a && a.platform || ""; };
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.userAgent.ASSUME_MAC = !1;
goog.userAgent.ASSUME_WINDOWS = !1;
goog.userAgent.ASSUME_LINUX = !1;
goog.userAgent.ASSUME_X11 = !1;
goog.userAgent.ASSUME_ANDROID = !1;
goog.userAgent.ASSUME_IPHONE = !1;
goog.userAgent.ASSUME_IPAD = !1;
goog.userAgent.ASSUME_IPOD = !1;
goog.userAgent.ASSUME_KAIOS = !1;
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD;
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : module$contents$goog$labs$userAgent$platform_isMacintosh();
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : module$contents$goog$labs$userAgent$platform_isWindows();
goog.userAgent.isLegacyLinux_ = function () { return module$contents$goog$labs$userAgent$platform_isLinux() || module$contents$goog$labs$userAgent$platform_isChromeOS(); };
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
goog.userAgent.isX11_ = function () { var a = goog.userAgent.getNavigatorTyped(); return !!a && goog.string.internal.contains(a.appVersion || "", "X11"); };
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : module$contents$goog$labs$userAgent$platform_isAndroid();
goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : module$contents$goog$labs$userAgent$platform_isIphone();
goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : module$contents$goog$labs$userAgent$platform_isIpad();
goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : module$contents$goog$labs$userAgent$platform_isIpod();
goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : module$contents$goog$labs$userAgent$platform_isIos();
goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : module$contents$goog$labs$userAgent$platform_isKaiOS();
goog.userAgent.determineVersion_ = function () { var a = "", b = goog.userAgent.getVersionRegexResult_(); b && (a = b ? b[1] : ""); return goog.userAgent.IE && (b = goog.userAgent.getDocumentMode_(), null != b && b > parseFloat(a)) ? String(b) : a; };
goog.userAgent.getVersionRegexResult_ = function () { var a = goog.userAgent.getUserAgentString(); if (goog.userAgent.GECKO)
    return /rv:([^\);]+)(\)|;)/.exec(a); if (goog.userAgent.EDGE)
    return /Edge\/([\d\.]+)/.exec(a); if (goog.userAgent.IE)
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (goog.userAgent.WEBKIT)
    return /WebKit\/(\S+)/.exec(a); if (goog.userAgent.OPERA)
    return /(?:Version)[ \/]?(\S+)/.exec(a); };
goog.userAgent.getDocumentMode_ = function () { var a = goog.global.document; return a ? a.documentMode : void 0; };
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function (a, b) { return goog.string.internal.compareVersions(a, b); };
goog.userAgent.isVersionOrHigherCache_ = {};
goog.userAgent.isVersionOrHigher = function (a) { return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, a, function () { return 0 <= goog.string.internal.compareVersions(goog.userAgent.VERSION, a); }); };
goog.userAgent.isDocumentModeOrHigher = function (a) { return Number(goog.userAgent.DOCUMENT_MODE) >= a; };
goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
var JSCompiler_inline_result$jscomp$82;
if (goog.global.document && goog.userAgent.IE) {
    var documentMode$jscomp$inline_116 = goog.userAgent.getDocumentMode_();
    JSCompiler_inline_result$jscomp$82 = documentMode$jscomp$inline_116 ? documentMode$jscomp$inline_116 : parseInt(goog.userAgent.VERSION, 10) || void 0;
}
else
    JSCompiler_inline_result$jscomp$82 = void 0;
goog.userAgent.DOCUMENT_MODE = JSCompiler_inline_result$jscomp$82;
goog.userAgent.product = {};
goog.userAgent.product.ASSUME_FIREFOX = !1;
goog.userAgent.product.ASSUME_IPHONE = !1;
goog.userAgent.product.ASSUME_IPAD = !1;
goog.userAgent.product.ASSUME_ANDROID = !1;
goog.userAgent.product.ASSUME_CHROME = !1;
goog.userAgent.product.ASSUME_SAFARI = !1;
goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;
goog.userAgent.product.OPERA = goog.userAgent.OPERA;
goog.userAgent.product.IE = goog.userAgent.IE;
goog.userAgent.product.EDGE = goog.userAgent.EDGE;
goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : module$contents$goog$labs$userAgent$browser_matchFirefox();
goog.userAgent.product.isIphoneOrIpod_ = function () { return module$contents$goog$labs$userAgent$platform_isIphone() || module$contents$goog$labs$userAgent$platform_isIpod(); };
goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();
goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : module$contents$goog$labs$userAgent$platform_isIpad();
goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : module$contents$goog$labs$userAgent$browser_matchAndroidBrowser();
goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : module$contents$goog$labs$userAgent$browser_matchChrome();
goog.userAgent.product.isSafariDesktop_ = function () { return module$contents$goog$labs$userAgent$browser_matchSafari() && !module$contents$goog$labs$userAgent$platform_isIos(); };
goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();
goog.crypt.base64 = {};
goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/=";
goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.";
goog.crypt.base64.Alphabet = { DEFAULT: 0, NO_PADDING: 1, WEBSAFE: 2, WEBSAFE_DOT_PADDING: 3, WEBSAFE_NO_PADDING: 4 };
goog.crypt.base64.paddingChars_ = "=.";
goog.crypt.base64.isPadding_ = function (a) { return goog.string.internal.contains(goog.crypt.base64.paddingChars_, a); };
goog.crypt.base64.byteToCharMaps_ = {};
goog.crypt.base64.charToByteMap_ = null;
goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT;
goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || "function" == typeof goog.global.btoa;
goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && "function" == typeof goog.global.atob;
goog.crypt.base64.encodeByteArray = function (a, b) {
    goog.asserts.assert(goog.isArrayLike(a), "encodeByteArray takes an array as a parameter");
    void 0 === b && (b = goog.crypt.base64.Alphabet.DEFAULT);
    goog.crypt.base64.init_();
    b = goog.crypt.base64.byteToCharMaps_[b];
    for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
        var g = a[e], k = a[e + 1], h = a[e + 2], l = b[g >> 2];
        g = b[(g & 3) << 4 | k >> 4];
        k = b[(k & 15) << 2 | h >> 6];
        h = b[h & 63];
        c[f++] = "" + l + g + k + h;
    }
    l = 0;
    h = d;
    switch (a.length - e) {
        case 2: l = a[e + 1], h = b[(l & 15) << 2] || d;
        case 1: a =
            a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + h + d;
    }
    return c.join("");
};
goog.crypt.base64.encodeString = function (a, b) { return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !b ? goog.global.btoa(a) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(a), b); };
goog.crypt.base64.decodeString = function (a, b) { if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !b)
    return goog.global.atob(a); var c = ""; goog.crypt.base64.decodeStringInternal_(a, function (d) { c += String.fromCharCode(d); }); return c; };
goog.crypt.base64.decodeStringToByteArray = function (a) { var b = []; goog.crypt.base64.decodeStringInternal_(a, function (c) { b.push(c); }); return b; };
goog.crypt.base64.decodeStringToUint8Array = function (a) { goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays"); var b = a.length, c = 3 * b / 4; c % 3 ? c = Math.floor(c) : goog.crypt.base64.isPadding_(a[b - 1]) && (c = goog.crypt.base64.isPadding_(a[b - 2]) ? c - 2 : c - 1); var d = new Uint8Array(c), e = 0; goog.crypt.base64.decodeStringInternal_(a, function (f) { d[e++] = f; }); return d.subarray(0, e); };
goog.crypt.base64.decodeStringInternal_ = function (a, b) { function c(h) { for (; d < a.length;) {
    var l = a.charAt(d++), m = goog.crypt.base64.charToByteMap_[l];
    if (null != m)
        return m;
    if (!goog.string.internal.isEmptyOrWhitespace(l))
        throw Error("Unknown base64 encoding at char: " + l);
} return h; } goog.crypt.base64.init_(); for (var d = 0;;) {
    var e = c(-1), f = c(0), g = c(64), k = c(64);
    if (64 === k && -1 === e)
        break;
    b(e << 2 | f >> 4);
    64 != g && (b(f << 4 & 240 | g >> 2), 64 != k && b(g << 6 & 192 | k));
} };
goog.crypt.base64.init_ = function () { if (!goog.crypt.base64.charToByteMap_) {
    goog.crypt.base64.charToByteMap_ = {};
    for (var a = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
        var d = a.concat(b[c].split(""));
        goog.crypt.base64.byteToCharMaps_[c] = d;
        for (var e = 0; e < d.length; e++) {
            var f = d[e], g = goog.crypt.base64.charToByteMap_[f];
            void 0 === g ? goog.crypt.base64.charToByteMap_[f] = e : goog.asserts.assert(g === e);
        }
    }
} };
var module$exports$jspb$internal_bytes = {};
module$exports$jspb$internal_bytes.SUPPORTS_UINT8ARRAY = "function" === typeof Uint8Array;
function module$contents$jspb$internal_bytes_dataAsB64(a) { if (null == a || "string" === typeof a)
    return a; if (module$exports$jspb$internal_bytes.SUPPORTS_UINT8ARRAY && a instanceof Uint8Array)
    return goog.crypt.base64.encodeByteArray(a); (0, goog.asserts.fail)("Cannot coerce to b64 string: " + goog.typeOf(a)); return null; }
function module$contents$jspb$internal_bytes_dataAsU8(a) { if (null == a || module$contents$jspb$internal_bytes_isU8(a))
    return a; if ("string" === typeof a)
    return goog.crypt.base64.decodeStringToUint8Array(a); (0, goog.asserts.fail)("Cannot coerce to Uint8Array: " + goog.typeOf(a)); return null; }
function module$contents$jspb$internal_bytes_isU8(a) { return module$exports$jspb$internal_bytes.SUPPORTS_UINT8ARRAY && null != a && a instanceof Uint8Array; }
var module$contents$jspb$internal_bytes_emptyUint8Array_;
function module$contents$jspb$internal_bytes_emptyUint8Array() { return module$contents$jspb$internal_bytes_emptyUint8Array_ || (module$contents$jspb$internal_bytes_emptyUint8Array_ = new Uint8Array(0)); }
module$exports$jspb$internal_bytes.dataAsB64 = module$contents$jspb$internal_bytes_dataAsB64;
module$exports$jspb$internal_bytes.dataAsU8 = module$contents$jspb$internal_bytes_dataAsU8;
module$exports$jspb$internal_bytes.emptyUint8Array = module$contents$jspb$internal_bytes_emptyUint8Array;
module$exports$jspb$internal_bytes.isU8 = module$contents$jspb$internal_bytes_isU8;
var module$exports$jspb$bytestring = {}, module$contents$jspb$bytestring_emptyByteString;
module$exports$jspb$bytestring.ByteString = function (a) { this.value_ = a; if (null !== a && 0 === a.length)
    throw Error("ByteString should be constructed with non-empty values"); };
module$exports$jspb$bytestring.ByteString.fromBase64 = function (a) { return a ? new module$exports$jspb$bytestring.ByteString(a) : module$exports$jspb$bytestring.ByteString.empty(); };
module$exports$jspb$bytestring.ByteString.fromUint8Array = function (a) { return a.length ? new module$exports$jspb$bytestring.ByteString(new Uint8Array(a)) : module$exports$jspb$bytestring.ByteString.empty(); };
module$exports$jspb$bytestring.ByteString.fromStringUtf8 = function (a) { return a.length ? new module$exports$jspb$bytestring.ByteString(module$contents$jspb$binary$utf8_encodeUtf8(a, !0)) : module$exports$jspb$bytestring.ByteString.empty(); };
module$exports$jspb$bytestring.ByteString.empty = function () { return module$contents$jspb$bytestring_emptyByteString || (module$contents$jspb$bytestring_emptyByteString = new module$exports$jspb$bytestring.ByteString(null)); };
module$exports$jspb$bytestring.ByteString.prototype.asBase64 = function () { return this.isEmpty() ? "" : this.ensureBase64String_(); };
module$exports$jspb$bytestring.ByteString.prototype.asUint8Array = function () { return this.isEmpty() ? module$contents$jspb$internal_bytes_emptyUint8Array() : new Uint8Array(this.ensureUint8Array_()); };
module$exports$jspb$bytestring.ByteString.prototype.isEmpty = function () { return null == this.value_; };
module$exports$jspb$bytestring.ByteString.prototype.asStringUtf8 = function () { var a = this.ensureUint8Array_(); if (a) {
    var b = a.length;
    a = module$contents$jspb$binary$utf8_useTextDecoderDecode ? (module$contents$jspb$binary$utf8_utf8ErrorsAreFatal(!0) ? module$contents$jspb$binary$utf8_getFatalDecoderInstance() : module$contents$jspb$binary$utf8_getNonFatalDecoderInstance()).decode(a.subarray(0, 0 + b)) : module$contents$jspb$binary$utf8_polyfillDecodeUtf8(a, 0, b, !0);
}
else
    a = ""; return a; };
module$exports$jspb$bytestring.ByteString.prototype.ensureBase64String_ = function () { return this.value_ = module$contents$jspb$internal_bytes_dataAsB64(this.value_); };
module$exports$jspb$bytestring.ByteString.prototype.ensureUint8Array_ = function () { return this.value_ = module$contents$jspb$internal_bytes_dataAsU8(this.value_); };
var module$contents$jspb$utils_SUPPORTS_UINT8ARRAY_SLICING = "function" === typeof Uint8Array.prototype.slice;
function module$contents$jspb$utils_sliceUint8Array(a, b, c) { return b === c ? module$contents$jspb$internal_bytes_emptyUint8Array() : module$contents$jspb$utils_SUPPORTS_UINT8ARRAY_SLICING ? a.slice(b, c) : new Uint8Array(a.subarray(b, c)); }
var module$contents$jspb$utils_split64Low = 0, module$contents$jspb$utils_split64High = 0;
function module$contents$jspb$utils_splitUint64(a) { var b = a >>> 0; a = Math.floor((a - b) / module$exports$jspb$BinaryConstants.TWO_TO_32) >>> 0; module$contents$jspb$utils_split64Low = b; module$contents$jspb$utils_split64High = a; }
function module$contents$jspb$utils_splitInt64(a) { var b = 0 > a; a = Math.abs(a); var c = a >>> 0; a = Math.floor((a - c) / module$exports$jspb$BinaryConstants.TWO_TO_32); a >>>= 0; b && (a = ~a >>> 0, c = (~c >>> 0) + 1, 4294967295 < c && (c = 0, a++, 4294967295 < a && (a = 0))); module$contents$jspb$utils_split64Low = c; module$contents$jspb$utils_split64High = a; }
function module$contents$jspb$utils_splitBytes64(a) { var b = $jscomp.makeIterator(a); a = b.next().value; var c = b.next().value, d = b.next().value, e = b.next().value, f = b.next().value, g = b.next().value, k = b.next().value; b = b.next().value; module$contents$jspb$utils_split64Low = a + (c << 8) + (d << 16) + (e << 24) >>> 0; module$contents$jspb$utils_split64High = f + (g << 8) + (k << 16) + (b << 24) >>> 0; }
function module$contents$jspb$utils_joinUint64(a, b) { return b * module$exports$jspb$BinaryConstants.TWO_TO_32 + (a >>> 0); }
function module$contents$jspb$utils_joinInt64(a, b) { var c = b & 2147483648; c && (a = ~a + 1 >>> 0, b = ~b >>> 0, 0 == a && (b = b + 1 >>> 0)); a = module$contents$jspb$utils_joinUint64(a, b); return c ? -a : a; }
function module$contents$jspb$utils_toZigzag64(a, b, c) { var d = b >> 31; return c(a << 1 ^ d, (b << 1 | a >>> 31) ^ d); }
function module$contents$jspb$utils_joinZigzag64(a, b) { return module$contents$jspb$utils_fromZigzag64(a, b, module$contents$jspb$utils_joinInt64); }
function module$contents$jspb$utils_fromZigzag64(a, b, c) { var d = -(a & 1); return c((a >>> 1 | b << 31) ^ d, b >>> 1 ^ d); }
function module$contents$jspb$utils_joinUnsignedDecimalString(a, b) { function c(e, f) { e = e ? String(e) : ""; return f ? "0000000".slice(e.length) + e : e; } if (2097151 >= b)
    return "" + (module$exports$jspb$BinaryConstants.TWO_TO_32 * b + a); var d = (a >>> 24 | b << 8) >>> 0 & 16777215; b = b >> 16 & 65535; a = (a & 16777215) + 6777216 * d + 6710656 * b; d += 8147497 * b; b *= 2; 1E7 <= a && (d += Math.floor(a / 1E7), a %= 1E7); 1E7 <= d && (b += Math.floor(d / 1E7), d %= 1E7); return c(b, 0) + c(d, b) + c(a, 1); }
function module$contents$jspb$utils_joinSignedDecimalString(a, b) { var c = b & 2147483648; c && (a = ~a + 1 >>> 0, b = ~b + (0 == a ? 1 : 0) >>> 0); a = module$contents$jspb$utils_joinUnsignedDecimalString(a, b); return c ? "-" + a : a; }
function module$contents$jspb$utils_decimalStringToBytes64(a) { function b(g, k) { for (var h = 0; 8 > h && (1 !== g || 0 < k); h++)
    k = g * e[h] + k, e[h] = k & 255, k >>>= 8; } function c() { for (var g = 0; 8 > g; g++)
    e[g] = ~e[g] & 255; } (0, goog.asserts.assert)(0 < a.length); var d = !1; "-" === a[0] && (d = !0, a = a.slice(1)); for (var e = [0, 0, 0, 0, 0, 0, 0, 0], f = 0; f < a.length; f++)
    b(10, a.charCodeAt(f) - 48); d && (c(), b(1, 1)); return e; }
function module$contents$jspb$utils_byteSourceToUint8Array(a) {
    if (a.constructor === Uint8Array)
        return a;
    if (a.constructor === ArrayBuffer)
        return new Uint8Array(a);
    if (a.constructor === Array)
        return new Uint8Array(a);
    if (a.constructor === String)
        return goog.crypt.base64.decodeStringToUint8Array(a);
    if (a.constructor === module$exports$jspb$bytestring.ByteString)
        return a.asUint8Array();
    if (a instanceof Uint8Array)
        return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers");
}
var module$exports$jspb$binary$decoder = { BinaryDecoderOptions: function () { }, BinaryDecoder: function (a, b, c, d) { d = void 0 === d ? {} : d; d = void 0 === d.bytesFieldsAsMutableViews ? !1 : d.bytesFieldsAsMutableViews; this.dataView_ = this.bytes_ = null; this.cursor_ = this.end_ = this.start_ = 0; this.bytesFieldsAsMutableViews = d; a && this.setBlock(a, b, c); } };
module$exports$jspb$binary$decoder.BinaryDecoder.alloc = function (a, b, c, d) { if (module$exports$jspb$binary$decoder.BinaryDecoder.instanceCache_.length) {
    var e = module$exports$jspb$binary$decoder.BinaryDecoder.instanceCache_.pop();
    d && (e.bytesFieldsAsMutableViews = d.bytesFieldsAsMutableViews);
    a && e.setBlock(a, b, c);
    return e;
} return new module$exports$jspb$binary$decoder.BinaryDecoder(a, b, c, d); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.free = function () { this.clear(); 100 > module$exports$jspb$binary$decoder.BinaryDecoder.instanceCache_.length && module$exports$jspb$binary$decoder.BinaryDecoder.instanceCache_.push(this); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.clear = function () { this.dataView_ = this.bytes_ = null; this.cursor_ = this.end_ = this.start_ = 0; this.bytesFieldsAsMutableViews = !1; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.getBuffer = function () { return this.bytes_; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.setBlock = function (a, b, c) { this.bytes_ = module$contents$jspb$utils_byteSourceToUint8Array(a); module$contents$jspb$binary$decoder_ASSUME_DATAVIEW_IS_FAST && (this.dataView_ = new DataView(this.bytes_.buffer, this.bytes_.byteOffset, this.bytes_.byteLength)); this.start_ = void 0 !== b ? b : 0; this.end_ = void 0 !== c ? this.start_ + c : this.bytes_.length; this.cursor_ = this.start_; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.getEnd = function () { return this.end_; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.setEnd = function (a) { this.end_ = a; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.reset = function () { this.cursor_ = this.start_; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.getCursor = function () { return this.cursor_; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.setCursor = function (a) { this.cursor_ = a; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.advance = function (a) { this.cursor_ += a; this.checkCursor(); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.atEnd = function () { return this.cursor_ == this.end_; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.pastEnd = function () { return this.cursor_ > this.end_; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readSplitVarint64 = function (a) { for (var b = 128, c = 0, d = 0, e = 0; 4 > e && 128 <= b; e++)
    b = this.bytes_[this.cursor_++], c |= (b & 127) << 7 * e; 128 <= b && (b = this.bytes_[this.cursor_++], c |= (b & 127) << 28, d |= (b & 127) >> 4); if (128 <= b)
    for (e = 0; 5 > e && 128 <= b; e++)
        b = this.bytes_[this.cursor_++], d |= (b & 127) << 7 * e + 3; if (128 > b)
    return a(c >>> 0, d >>> 0); throw module$contents$jspb$binary$errors_invalidVarintError(); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readSplitZigzagVarint64 = function (a) { return this.readSplitVarint64(function (b, c) { return module$contents$jspb$utils_fromZigzag64(b, c, a); }); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readSplitFixed64 = function (a) { var b = this.bytes_, c = this.cursor_; this.cursor_ += 8; this.checkCursor(); for (var d = 0, e = 0, f = c + 7; f >= c; f--)
    d = d << 8 | b[f], e = e << 8 | b[f + 4]; return a(d, e); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.skipVarint = function () { for (var a = this.cursor_, b = 0; 10 > b; b++) {
    if (0 === (this.bytes_[a] & 128)) {
        this.cursor_ = a + 1;
        this.checkCursor();
        return;
    }
    a++;
} throw module$contents$jspb$binary$errors_invalidVarintError(); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.checkCursor = function () { if (this.cursor_ > this.end_)
    throw module$contents$jspb$binary$errors_readTooFarError(this.end_, this.cursor_); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readUnsignedVarint32 = function () {
    var a = this.bytes_, b = a[this.cursor_ + 0], c = b & 127;
    if (128 > b)
        return this.cursor_ += 1, this.checkCursor(), c;
    b = a[this.cursor_ + 1];
    c |= (b & 127) << 7;
    if (128 > b)
        return this.cursor_ += 2, this.checkCursor(), c;
    b = a[this.cursor_ + 2];
    c |= (b & 127) << 14;
    if (128 > b)
        return this.cursor_ += 3, this.checkCursor(), c;
    b = a[this.cursor_ + 3];
    c |= (b & 127) << 21;
    if (128 > b)
        return this.cursor_ += 4, this.checkCursor(), c;
    b = a[this.cursor_ + 4];
    c |= (b & 15) << 28;
    if (128 > b)
        return this.cursor_ +=
            5, this.checkCursor(), c >>> 0;
    this.cursor_ += 5;
    if (128 <= a[this.cursor_++] && 128 <= a[this.cursor_++] && 128 <= a[this.cursor_++] && 128 <= a[this.cursor_++] && 128 <= a[this.cursor_++])
        throw module$contents$jspb$binary$errors_invalidVarintError();
    this.checkCursor();
    return c;
};
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readSignedVarint32 = function () { return this.readUnsignedVarint32(); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readZigzagVarint32 = function () { var a = this.readUnsignedVarint32(); return a >>> 1 ^ -(a & 1); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readUnsignedVarint64 = function () { return this.readSplitVarint64(module$contents$jspb$utils_joinUint64); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readUnsignedVarint64String = function () { return this.readSplitVarint64(module$contents$jspb$utils_joinUnsignedDecimalString); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readSignedVarint64 = function () { return this.readSplitVarint64(module$contents$jspb$utils_joinInt64); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readSignedVarint64String = function () { return this.readSplitVarint64(module$contents$jspb$utils_joinSignedDecimalString); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readZigzagVarint64 = function () { return this.readSplitVarint64(module$contents$jspb$utils_joinZigzag64); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readZigzagVarint64String = function () { return this.readSplitZigzagVarint64(module$contents$jspb$utils_joinSignedDecimalString); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readUint8 = function () { var a = this.bytes_[this.cursor_ + 0]; this.cursor_ += 1; this.checkCursor(); return a; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readUint16 = function () { var a = this.bytes_[this.cursor_ + 0], b = this.bytes_[this.cursor_ + 1]; this.cursor_ += 2; this.checkCursor(); return a << 0 | b << 8; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readUint32 = function () { var a = this.bytes_[this.cursor_ + 0], b = this.bytes_[this.cursor_ + 1], c = this.bytes_[this.cursor_ + 2], d = this.bytes_[this.cursor_ + 3]; this.cursor_ += 4; this.checkCursor(); return (a << 0 | b << 8 | c << 16 | d << 24) >>> 0; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readUint64 = function () { var a = this.readUint32(), b = this.readUint32(); return module$contents$jspb$utils_joinUint64(a, b); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readUint64String = function () { var a = this.readUint32(), b = this.readUint32(); return module$contents$jspb$utils_joinUnsignedDecimalString(a, b); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readInt8 = function () { var a = this.bytes_[this.cursor_ + 0]; this.cursor_ += 1; this.checkCursor(); return a << 24 >> 24; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readInt16 = function () { var a = this.bytes_[this.cursor_ + 0], b = this.bytes_[this.cursor_ + 1]; this.cursor_ += 2; this.checkCursor(); return (a << 0 | b << 8) << 16 >> 16; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readInt32 = function () { var a = this.bytes_[this.cursor_ + 0], b = this.bytes_[this.cursor_ + 1], c = this.bytes_[this.cursor_ + 2], d = this.bytes_[this.cursor_ + 3]; this.cursor_ += 4; this.checkCursor(); return a << 0 | b << 8 | c << 16 | d << 24; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readInt64 = function () { var a = this.readUint32(), b = this.readUint32(); return module$contents$jspb$utils_joinInt64(a, b); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readInt64String = function () { var a = this.readUint32(), b = this.readUint32(); return module$contents$jspb$utils_joinSignedDecimalString(a, b); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readFloat = function () { var a = this.readUint32(), b = 2 * (a >> 31) + 1, c = a >>> 23 & 255; a &= 8388607; return 255 == c ? a ? NaN : Infinity * b : 0 == c ? b * Math.pow(2, -149) * a : b * Math.pow(2, c - 150) * (a + Math.pow(2, 23)); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readDouble = function () { if (module$contents$jspb$binary$decoder_ASSUME_DATAVIEW_IS_FAST) {
    var a = this.dataView_.getFloat64(this.cursor_, !0);
    this.cursor_ += 8;
    this.checkCursor();
    return a;
} var b = this.readUint32(), c = this.readUint32(); a = 2 * (c >> 31) + 1; var d = c >>> 20 & 2047; b = module$exports$jspb$BinaryConstants.TWO_TO_32 * (c & 1048575) + b; return 2047 == d ? b ? NaN : Infinity * a : 0 == d ? a * Math.pow(2, -1074) * b : a * Math.pow(2, d - 1075) * (b + module$exports$jspb$BinaryConstants.TWO_TO_52); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readDoubleArrayInto = function (a, b) {
    var c = this.cursor_, d = 8 * a;
    if (c + d > this.end_)
        throw module$contents$jspb$binary$errors_readTooFarError(d, this.end_ - c);
    c += this.bytes_.byteOffset;
    if (module$contents$jspb$binary$decoder_ASSUME_DATAVIEW_IS_FAST)
        for (this.cursor_ += d, a = new DataView(this.bytes_.buffer, c, d), d = 0;;) {
            c = d + 8;
            if (c > a.byteLength)
                break;
            b.push(a.getFloat64(d, !0));
            d = c;
        }
    else if (void 0 === module$contents$jspb$binary$decoder_isLittleEndianCache && (module$contents$jspb$binary$decoder_isLittleEndianCache =
        513 == (new Uint16Array((new Uint8Array([1, 2])).buffer))[0]), goog.asserts.assertBoolean(module$contents$jspb$binary$decoder_isLittleEndianCache))
        for (this.cursor_ += d, a = new Float64Array(this.bytes_.buffer.slice(c, c + d)), d = 0; d < a.length; d++)
            b.push(a[d]);
    else
        for (d = 0; d < a; d++)
            b.push(this.readDouble());
};
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readBool = function () { var a = !!this.bytes_[this.cursor_++]; this.checkCursor(); return a; };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readEnum = function () { return this.readSignedVarint32(); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readString = function (a, b) { var c = this.cursor_; this.cursor_ += a; this.checkCursor(); var d = goog.asserts.assert(this.bytes_); return module$contents$jspb$binary$utf8_useTextDecoderDecode ? (module$contents$jspb$binary$utf8_utf8ErrorsAreFatal(b) ? module$contents$jspb$binary$utf8_getFatalDecoderInstance() : module$contents$jspb$binary$utf8_getNonFatalDecoderInstance()).decode(d.subarray(c, c + a)) : module$contents$jspb$binary$utf8_polyfillDecodeUtf8(d, c, a, b); };
module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readBytes = function (a) { if (0 > a || this.cursor_ + a > this.bytes_.length) {
    if (0 > a)
        throw Error("Tried to read a negative byte length: " + a);
    throw module$contents$jspb$binary$errors_readTooFarError(a, this.bytes_.length - this.cursor_);
} var b = this.bytesFieldsAsMutableViews ? this.bytes_.subarray(this.cursor_, this.cursor_ + a) : module$contents$jspb$utils_sliceUint8Array(this.bytes_, this.cursor_, this.cursor_ + a); this.cursor_ += a; return b; };
module$exports$jspb$binary$decoder.BinaryDecoder.resetInstanceCache = function () { module$exports$jspb$binary$decoder.BinaryDecoder.instanceCache_ = []; };
module$exports$jspb$binary$decoder.BinaryDecoder.getInstanceCache = function () { return module$exports$jspb$binary$decoder.BinaryDecoder.instanceCache_; };
module$exports$jspb$binary$decoder.BinaryDecoder.instanceCache_ = [];
var module$contents$jspb$binary$decoder_isLittleEndianCache = void 0, module$contents$jspb$binary$decoder_ASSUME_DATAVIEW_IS_FAST = 2019 <= goog.FEATURESET_YEAR;
var module$exports$jspb$binary$reader = { BinaryReader: function (a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = void 0 === d.discardUnknownFields ? !1 : d.discardUnknownFields;
        this.decoderOptions = { bytesFieldsAsMutableViews: void 0 === d.bytesFieldsAsMutableViews ? !1 : d.bytesFieldsAsMutableViews };
        this.discardUnknownFields = e;
        this.decoder_ = module$exports$jspb$binary$decoder.BinaryDecoder.alloc(a, b, c, this.decoderOptions);
        this.fieldCursor_ = this.decoder_.getCursor();
        this.nextField_ = module$exports$jspb$BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextTag_ = module$exports$jspb$BinaryConstants.INVALID_TAG;
        this.nextWireType_ = module$exports$jspb$BinaryConstants.WireType.INVALID;
    } };
module$exports$jspb$binary$reader.BinaryReader.alloc = function (a, b, c) { if (module$exports$jspb$binary$reader.BinaryReader.instanceCache_.length) {
    var d = module$exports$jspb$binary$reader.BinaryReader.instanceCache_.pop();
    a && d.setBlock(a, b, c);
    return d;
} return new module$exports$jspb$binary$reader.BinaryReader(a, b, c); };
module$exports$jspb$binary$reader.BinaryReader.prototype.free = function () { this.decoder_.clear(); this.nextTag_ = module$exports$jspb$BinaryConstants.INVALID_TAG; this.nextField_ = module$exports$jspb$BinaryConstants.INVALID_FIELD_NUMBER; this.nextWireType_ = module$exports$jspb$BinaryConstants.WireType.INVALID; 100 > module$exports$jspb$binary$reader.BinaryReader.instanceCache_.length && module$exports$jspb$binary$reader.BinaryReader.instanceCache_.push(this); };
module$exports$jspb$binary$reader.BinaryReader.prototype.getFieldCursor = function () { return this.fieldCursor_; };
module$exports$jspb$binary$reader.BinaryReader.prototype.getCursor = function () { return this.decoder_.getCursor(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.getBuffer = function () { return this.decoder_.getBuffer(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.getTag = function () { return this.nextTag_; };
module$exports$jspb$binary$reader.BinaryReader.prototype.getFieldNumber = function () { return this.nextField_; };
module$exports$jspb$binary$reader.BinaryReader.prototype.getWireType = function () { return this.nextWireType_; };
module$exports$jspb$binary$reader.BinaryReader.prototype.isEndGroup = function () { return this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.END_GROUP; };
module$exports$jspb$binary$reader.BinaryReader.prototype.isDelimited = function () { return this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.DELIMITED; };
module$exports$jspb$binary$reader.BinaryReader.prototype.setBlock = function (a, b, c) { this.decoder_.setBlock(a, b, c); this.nextField_ = module$exports$jspb$BinaryConstants.INVALID_FIELD_NUMBER; this.nextWireType_ = module$exports$jspb$BinaryConstants.WireType.INVALID; };
module$exports$jspb$binary$reader.BinaryReader.prototype.reset = function () { this.decoder_.reset(); this.nextField_ = module$exports$jspb$BinaryConstants.INVALID_FIELD_NUMBER; this.nextWireType_ = module$exports$jspb$BinaryConstants.WireType.INVALID; };
module$exports$jspb$binary$reader.BinaryReader.prototype.advance = function (a) { this.decoder_.advance(a); };
module$exports$jspb$binary$reader.BinaryReader.prototype.nextField = function () { if (this.decoder_.atEnd())
    return !1; this.fieldCursor_ = this.decoder_.getCursor(); var a = this.decoder_.readUnsignedVarint32(), b = a & 7; if (!module$contents$jspb$BinaryConstants_isValidWireType(b))
    throw module$contents$jspb$binary$errors_invalidWireTypeError(b, this.fieldCursor_); this.nextTag_ = a; this.nextField_ = a >>> 3; this.nextWireType_ = b; return !0; };
module$exports$jspb$binary$reader.BinaryReader.prototype.skipVarintField = function () { this.nextWireType_ != module$exports$jspb$BinaryConstants.WireType.VARINT ? (goog.asserts.fail("Invalid wire type for skipVarintField"), this.skipField()) : this.decoder_.skipVarint(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.skipDelimitedField = function () { if (this.nextWireType_ != module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    goog.asserts.fail("Invalid wire type for skipDelimitedField"), this.skipField();
else {
    var a = this.decoder_.readUnsignedVarint32();
    this.decoder_.advance(a);
} };
module$exports$jspb$binary$reader.BinaryReader.prototype.skipFixed32Field = function () { goog.asserts.assert(this.nextWireType_ === module$exports$jspb$BinaryConstants.WireType.FIXED32); this.decoder_.advance(4); };
module$exports$jspb$binary$reader.BinaryReader.prototype.skipFixed64Field = function () { goog.asserts.assert(this.nextWireType_ === module$exports$jspb$BinaryConstants.WireType.FIXED64); this.decoder_.advance(8); };
module$exports$jspb$binary$reader.BinaryReader.prototype.skipGroup = function () { var a = this.nextField_; do {
    if (!this.nextField())
        throw Error("Unmatched start-group tag: stream EOF");
    if (this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.END_GROUP) {
        if (this.nextField_ != a)
            throw Error("Unmatched end-group tag");
        break;
    }
    this.skipField();
} while (1); };
module$exports$jspb$binary$reader.BinaryReader.prototype.skipField = function () {
    switch (this.nextWireType_) {
        case module$exports$jspb$BinaryConstants.WireType.VARINT:
            this.skipVarintField();
            break;
        case module$exports$jspb$BinaryConstants.WireType.FIXED64:
            this.skipFixed64Field();
            break;
        case module$exports$jspb$BinaryConstants.WireType.DELIMITED:
            this.skipDelimitedField();
            break;
        case module$exports$jspb$BinaryConstants.WireType.FIXED32:
            this.skipFixed32Field();
            break;
        case module$exports$jspb$BinaryConstants.WireType.START_GROUP:
            this.skipGroup();
            break;
        default: throw module$contents$jspb$binary$errors_invalidWireTypeError(this.nextWireType_, this.fieldCursor_);
    }
};
module$exports$jspb$binary$reader.BinaryReader.prototype.handleUnknownField = function (a) { var b = this.getFieldCursor(); this.skipField(); this.addUnknownFieldsStartingFrom(a, b); };
module$exports$jspb$binary$reader.BinaryReader.prototype.addUnknownFieldsStartingFrom = function (a, b) { if (!this.discardUnknownFields) {
    b = module$contents$jspb$utils_sliceUint8Array(goog.asserts.assert(this.decoder_.getBuffer()), b, this.decoder_.getCursor());
    var c = a.internalUnknownFields_;
    c ? c.push(b) : a.internalUnknownFields_ = [b];
} };
module$exports$jspb$binary$reader.BinaryReader.prototype.readAny = function (a) {
    if (module$contents$jspb$BinaryConstants_FieldTypeToWireType(a) !== this.nextWireType_)
        return null;
    var b = module$exports$jspb$BinaryConstants.FieldType;
    switch (a) {
        case b.DOUBLE: return this.readDouble();
        case b.FLOAT: return this.readFloat();
        case b.INT64: return this.readInt64();
        case b.UINT64: return this.readUint64();
        case b.INT32: return this.readInt32();
        case b.FIXED64: return this.readFixed64();
        case b.FIXED32: return this.readFixed32();
        case b.BOOL: return this.readBool();
        case b.STRING: return this.readString();
        case b.GROUP: goog.asserts.fail("Group field type not supported in readAny()");
        case b.MESSAGE: goog.asserts.fail("Message field type not supported in readAny()");
        case b.BYTES: return this.readBytes();
        case b.UINT32: return this.readUint32();
        case b.ENUM: return this.readEnum();
        case b.SFIXED32: return this.readSfixed32();
        case b.SFIXED64: return this.readSfixed64();
        case b.SINT32: return this.readSint32();
        case b.SINT64: return this.readSint64();
        default: goog.asserts.fail("Invalid field type in readAny()");
    }
    return null;
};
module$exports$jspb$binary$reader.BinaryReader.prototype.readMessage = function (a, b) {
    goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.DELIMITED);
    var c = this.decoder_.getEnd(), d = this.decoder_.readUnsignedVarint32(), e = this.decoder_.getCursor() + d;
    this.decoder_.setEnd(e);
    b(a, this);
    b = e - this.decoder_.getCursor();
    if (0 !== b)
        throw Error("Message parsing ended unexpectedly. Expected to read " + (d + " bytes, instead read " + (d - b) + " bytes, either the data ended unexpectedly or the message misreported its own length"));
    this.decoder_.setCursor(e);
    this.decoder_.setEnd(c);
    return a;
};
module$exports$jspb$binary$reader.BinaryReader.prototype.readGroup = function (a, b, c) { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.START_GROUP); goog.asserts.assert(this.nextField_ == a); c(b, this); if (this.nextWireType_ !== module$exports$jspb$BinaryConstants.WireType.END_GROUP)
    throw Error("Group submessage did not end with an END_GROUP tag"); if (this.nextField_ !== a)
    throw Error("Unmatched end-group tag"); return b; };
module$exports$jspb$binary$reader.BinaryReader.prototype.readInt32 = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.VARINT); return this.decoder_.readSignedVarint32(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readInt64 = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.VARINT); return this.decoder_.readSignedVarint64(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readInt64String = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.VARINT); return this.decoder_.readSignedVarint64String(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readUint32 = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.VARINT); return this.decoder_.readUnsignedVarint32(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readUint64 = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.VARINT); return this.decoder_.readUnsignedVarint64(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readUint64String = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.VARINT); return this.decoder_.readUnsignedVarint64String(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readSint32 = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.VARINT); return this.decoder_.readZigzagVarint32(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readSint64 = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.VARINT); return this.decoder_.readZigzagVarint64(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readSint64String = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.VARINT); return this.decoder_.readZigzagVarint64String(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readFixed32 = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.FIXED32); return this.decoder_.readUint32(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readFixed64 = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.FIXED64); return this.decoder_.readUint64(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readFixed64String = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.FIXED64); return this.decoder_.readUint64String(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readSfixed32 = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.FIXED32); return this.decoder_.readInt32(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readSfixed32String = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.FIXED32); return this.decoder_.readInt32().toString(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readSfixed64 = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.FIXED64); return this.decoder_.readInt64(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readSfixed64String = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.FIXED64); return this.decoder_.readInt64String(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readFloat = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.FIXED32); return this.decoder_.readFloat(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readDouble = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.FIXED64); return this.decoder_.readDouble(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readBool = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.VARINT); return !!this.decoder_.readUnsignedVarint32(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readEnum = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.VARINT); return this.decoder_.readSignedVarint64(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readString = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.DELIMITED); var a = this.decoder_.readUnsignedVarint32(); return this.decoder_.readString(a, !1); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readStringRequireUtf8 = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.DELIMITED); var a = this.decoder_.readUnsignedVarint32(); return this.decoder_.readString(a, !0); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readBytes = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.DELIMITED); var a = this.decoder_.readUnsignedVarint32(); return this.decoder_.readBytes(a); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readSplitVarint64 = function (a) { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.VARINT); return this.decoder_.readSplitVarint64(a); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readSplitZigzagVarint64 = function (a) { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.VARINT); return this.decoder_.readSplitVarint64(function (b, c) { return module$contents$jspb$utils_fromZigzag64(b, c, a); }); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readSplitFixed64 = function (a) { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.FIXED64); return this.decoder_.readSplitFixed64(a); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackedFieldInto_ = function (a, b) { var c = this.readPackedFieldLength_(); for (c = this.decoder_.getCursor() + c; this.decoder_.getCursor() < c;)
    b.push(a.call(this.decoder_)); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackedFieldLength_ = function () { goog.asserts.assert(this.nextWireType_ == module$exports$jspb$BinaryConstants.WireType.DELIMITED); return this.decoder_.readUnsignedVarint32(); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableInt32Into = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readSignedVarint32, a) : a.push(this.readInt32()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableInt64Into = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readSignedVarint64, a) : a.push(this.readInt64()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableInt64StringInto = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readSignedVarint64String, a) : a.push(this.readInt64String()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableUint32Into = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readUnsignedVarint32, a) : a.push(this.readUint32()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableUint64Into = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readUnsignedVarint64, a) : a.push(this.readUint64()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableUint64StringInto = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readUnsignedVarint64String, a) : a.push(this.readUint64String()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableSint32Into = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readZigzagVarint32, a) : a.push(this.readSint32()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableSint64Into = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readZigzagVarint64, a) : a.push(this.readSint64()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableSint64StringInto = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readZigzagVarint64String, a) : a.push(this.readSint64String()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableFixed32Into = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readUint32, a) : a.push(this.readFixed32()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableFixed64Into = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readUint64, a) : a.push(this.readFixed64()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableFixed64StringInto = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readUint64String, a) : a.push(this.readFixed64String()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableSfixed32Into = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readInt32, a) : a.push(this.readSfixed32()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableSfixed64Into = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readInt64, a) : a.push(this.readSfixed64()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableSfixed64StringInto = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readInt64String, a) : a.push(this.readSfixed64String()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableFloatInto = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readFloat, a) : a.push(this.readFloat()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableDoubleInto = function (a) { this.isDelimited() ? this.decoder_.readDoubleArrayInto(this.readPackedFieldLength_() / 8, a) : a.push(this.readDouble()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableBoolInto = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readBool, a) : a.push(this.readBool()); };
module$exports$jspb$binary$reader.BinaryReader.prototype.readPackableEnumInto = function (a) { this.isDelimited() ? this.readPackedFieldInto_(module$exports$jspb$binary$decoder.BinaryDecoder.prototype.readEnum, a) : a.push(this.readEnum()); };
module$exports$jspb$binary$reader.BinaryReader.resetInstanceCache = function () { module$exports$jspb$binary$reader.BinaryReader.instanceCache_ = []; };
module$exports$jspb$binary$reader.BinaryReader.getInstanceCache = function () { return module$exports$jspb$binary$reader.BinaryReader.instanceCache_; };
module$exports$jspb$binary$reader.BinaryReader.instanceCache_ = [];
var module$exports$jspb$arith = { UInt64: function (a, b) { this.lo = a; this.hi = b; } };
module$exports$jspb$arith.UInt64.prototype.cmp = function (a) { return this.hi < a.hi || this.hi == a.hi && this.lo < a.lo ? -1 : this.hi == a.hi && this.lo == a.lo ? 0 : 1; };
module$exports$jspb$arith.UInt64.prototype.rightShift = function () { return new module$exports$jspb$arith.UInt64((this.lo >>> 1 | (this.hi & 1) << 31) >>> 0, this.hi >>> 1 >>> 0); };
module$exports$jspb$arith.UInt64.prototype.leftShift = function () { return new module$exports$jspb$arith.UInt64(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0); };
module$exports$jspb$arith.UInt64.prototype.msb = function () { return !!(this.hi & 2147483648); };
module$exports$jspb$arith.UInt64.prototype.lsb = function () { return !!(this.lo & 1); };
module$exports$jspb$arith.UInt64.prototype.zero = function () { return 0 == this.lo && 0 == this.hi; };
module$exports$jspb$arith.UInt64.prototype.add = function (a) { return new module$exports$jspb$arith.UInt64((this.lo + a.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a.lo ? 1 : 0) >>> 0); };
module$exports$jspb$arith.UInt64.prototype.sub = function (a) { return new module$exports$jspb$arith.UInt64((this.lo - a.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a.hi & 4294967295) >>> 0) - (0 > this.lo - a.lo ? 1 : 0) >>> 0); };
module$exports$jspb$arith.UInt64.mul32x32 = function (a, b) { var c = a & 65535; a >>>= 16; var d = b & 65535, e = b >>> 16; b = c * d + 65536 * (c * e & 65535) + 65536 * (a * d & 65535); for (c = a * e + (c * e >>> 16) + (a * d >>> 16); 4294967296 <= b;)
    b -= 4294967296, c += 1; return new module$exports$jspb$arith.UInt64(b >>> 0, c >>> 0); };
module$exports$jspb$arith.UInt64.prototype.mul = function (a) { var b = module$exports$jspb$arith.UInt64.mul32x32(this.lo, a); a = module$exports$jspb$arith.UInt64.mul32x32(this.hi, a); a.hi = a.lo; a.lo = 0; return b.add(a); };
module$exports$jspb$arith.UInt64.prototype.div = function (a) { if (0 == a)
    return []; for (var b = new module$exports$jspb$arith.UInt64(0, 0), c = new module$exports$jspb$arith.UInt64(this.lo, this.hi), d = new module$exports$jspb$arith.UInt64(a, 0), e = new module$exports$jspb$arith.UInt64(1, 0); !d.msb();)
    d = d.leftShift(), e = e.leftShift(); for (; !e.zero();)
    0 >= d.cmp(c) && (b = b.add(e), c = c.sub(d)), d = d.rightShift(), e = e.rightShift(); return [b, c]; };
module$exports$jspb$arith.UInt64.prototype.toString = function () { for (var a = "", b = this; !b.zero();) {
    b = b.div(10);
    var c = b[0];
    a = b[1].lo + a;
    b = c;
} "" == a && (a = "0"); return a; };
module$exports$jspb$arith.UInt64.fromString = function (a) { for (var b = new module$exports$jspb$arith.UInt64(0, 0), c = new module$exports$jspb$arith.UInt64(0, 0), d = 0; d < a.length; d++) {
    if ("0" > a[d] || "9" < a[d])
        return null;
    c.lo = parseInt(a[d], 10);
    b = b.mul(10).add(c);
} return b; };
module$exports$jspb$arith.UInt64.prototype.clone = function () { return new module$exports$jspb$arith.UInt64(this.lo, this.hi); };
module$exports$jspb$arith.Int64 = function (a, b) { this.lo = a; this.hi = b; };
module$exports$jspb$arith.Int64.prototype.add = function (a) { return new module$exports$jspb$arith.Int64((this.lo + a.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a.lo ? 1 : 0) >>> 0); };
module$exports$jspb$arith.Int64.prototype.sub = function (a) { return new module$exports$jspb$arith.Int64((this.lo - a.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a.hi & 4294967295) >>> 0) - (0 > this.lo - a.lo ? 1 : 0) >>> 0); };
module$exports$jspb$arith.Int64.prototype.clone = function () { return new module$exports$jspb$arith.Int64(this.lo, this.hi); };
module$exports$jspb$arith.Int64.prototype.toString = function () { var a = 0 != (this.hi & 2147483648), b = new module$exports$jspb$arith.UInt64(this.lo, this.hi); a && (b = (new module$exports$jspb$arith.UInt64(0, 0)).sub(b)); return (a ? "-" : "") + b.toString(); };
module$exports$jspb$arith.Int64.fromString = function (a) { var b = 0 < a.length && "-" == a[0]; b && (a = a.substring(1)); a = module$exports$jspb$arith.UInt64.fromString(a); if (null === a)
    return null; b && (a = (new module$exports$jspb$arith.UInt64(0, 0)).sub(a)); return new module$exports$jspb$arith.Int64(a.lo, a.hi); };
var module$exports$jspb$binary$encoder = { BinaryEncoder: function () { this.buffer_ = new Uint8Array(64); this.length_ = 0; } };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.ensureSpace_ = function (a) { if (!(this.length_ + a < this.buffer_.length)) {
    var b = this.buffer_;
    this.buffer_ = new Uint8Array(Math.ceil(a + 2 * this.buffer_.length));
    this.buffer_.set(b);
} };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.push = function (a) { this.ensureSpace_(1); this.buffer_[this.length_++] = a; };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeBytes = function (a) { this.ensureSpace_(a.length); this.buffer_.set(a, this.length_); this.length_ += a.length; };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.length = function () { return this.length_; };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.end = function () { var a = this.buffer_, b = this.length_; this.length_ = 0; return module$contents$jspb$utils_sliceUint8Array(a, 0, b); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeAndEnd = function (a, b) { var c = this.length_; if (0 === c)
    return 0; a.set(this.buffer_.subarray(0, c), b); this.length_ = 0; return c; };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeSplitVarint64 = function (a, b) { goog.asserts.assert(a == Math.floor(a)); goog.asserts.assert(b == Math.floor(b)); goog.asserts.assert(0 <= a && a < module$exports$jspb$BinaryConstants.TWO_TO_32); for (goog.asserts.assert(0 <= b && b < module$exports$jspb$BinaryConstants.TWO_TO_32); 0 < b || 127 < a;)
    this.push(a & 127 | 128), a = (a >>> 7 | b << 25) >>> 0, b >>>= 7; this.push(a); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeSplitFixed64 = function (a, b) { goog.asserts.assert(a == Math.floor(a)); goog.asserts.assert(b == Math.floor(b)); goog.asserts.assert(0 <= a && a < module$exports$jspb$BinaryConstants.TWO_TO_32); goog.asserts.assert(0 <= b && b < module$exports$jspb$BinaryConstants.TWO_TO_32); this.writeUint32(a); this.writeUint32(b); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeSplitZigzagVarint64 = function (a, b) { var c = this; module$contents$jspb$utils_toZigzag64(a, b, function (d, e) { c.writeSplitVarint64(d >>> 0, e >>> 0); }); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeUnsignedVarint32 = function (a) { goog.asserts.assert(a == Math.floor(a)); for (goog.asserts.assert(0 <= a && a < module$exports$jspb$BinaryConstants.TWO_TO_32); 127 < a;)
    this.push(a & 127 | 128), a >>>= 7; this.push(a); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeSignedVarint32 = function (a) { goog.asserts.assert(a == Math.floor(a)); goog.asserts.assert(a >= -module$exports$jspb$BinaryConstants.TWO_TO_31 && a < module$exports$jspb$BinaryConstants.TWO_TO_31); if (0 <= a)
    this.writeUnsignedVarint32(a);
else {
    for (var b = 0; 9 > b; b++)
        this.push(a & 127 | 128), a >>= 7;
    this.push(1);
} };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeUnsignedVarint64 = function (a) { goog.asserts.assert(a == Math.floor(a)); goog.asserts.assert(0 <= a && a < module$exports$jspb$BinaryConstants.TWO_TO_64); module$contents$jspb$utils_splitInt64(a); this.writeSplitVarint64(module$contents$jspb$utils_split64Low, module$contents$jspb$utils_split64High); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeSignedVarint64 = function (a) { goog.asserts.assert(a == Math.floor(a)); goog.asserts.assert(a >= -module$exports$jspb$BinaryConstants.TWO_TO_63 && a < module$exports$jspb$BinaryConstants.TWO_TO_63); module$contents$jspb$utils_splitInt64(a); this.writeSplitVarint64(module$contents$jspb$utils_split64Low, module$contents$jspb$utils_split64High); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeZigzagVarint32 = function (a) { goog.asserts.assert(a == Math.floor(a)); goog.asserts.assert(a >= -module$exports$jspb$BinaryConstants.TWO_TO_31 && a < module$exports$jspb$BinaryConstants.TWO_TO_31); this.writeUnsignedVarint32((a << 1 ^ a >> 31) >>> 0); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeZigzagVarint64 = function (a) {
    goog.asserts.assert(a == Math.floor(a));
    goog.asserts.assert(a >= -module$exports$jspb$BinaryConstants.TWO_TO_63 && a < module$exports$jspb$BinaryConstants.TWO_TO_63);
    var b = a;
    a = 0 > b;
    b = 2 * Math.abs(b);
    module$contents$jspb$utils_splitUint64(b);
    b = module$contents$jspb$utils_split64Low;
    var c = module$contents$jspb$utils_split64High;
    a && (0 == b ? 0 == c ? c = b = 4294967295 : (c--, b = 4294967295) : b--);
    module$contents$jspb$utils_split64Low = b;
    module$contents$jspb$utils_split64High =
        c;
    this.writeSplitVarint64(module$contents$jspb$utils_split64Low, module$contents$jspb$utils_split64High);
};
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeZigzagVarint64String = function (a) { var b = this; module$contents$jspb$utils_splitBytes64(module$contents$jspb$utils_decimalStringToBytes64(a)); module$contents$jspb$utils_toZigzag64(module$contents$jspb$utils_split64Low, module$contents$jspb$utils_split64High, function (c, d) { b.writeSplitVarint64(c >>> 0, d >>> 0); }); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeUint8 = function (a) { goog.asserts.assert(a == Math.floor(a)); goog.asserts.assert(0 <= a && 256 > a); this.push(a >>> 0 & 255); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeUint16 = function (a) { goog.asserts.assert(a == Math.floor(a)); goog.asserts.assert(0 <= a && 65536 > a); this.push(a >>> 0 & 255); this.push(a >>> 8 & 255); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeUint32 = function (a) { goog.asserts.assert(a == Math.floor(a)); goog.asserts.assert(0 <= a && a < module$exports$jspb$BinaryConstants.TWO_TO_32); this.push(a >>> 0 & 255); this.push(a >>> 8 & 255); this.push(a >>> 16 & 255); this.push(a >>> 24 & 255); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeUint64 = function (a) { goog.asserts.assert(a == Math.floor(a)); goog.asserts.assert(0 <= a && a < module$exports$jspb$BinaryConstants.TWO_TO_64); module$contents$jspb$utils_splitUint64(a); this.writeUint32(module$contents$jspb$utils_split64Low); this.writeUint32(module$contents$jspb$utils_split64High); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeInt8 = function (a) { goog.asserts.assert(a == Math.floor(a)); goog.asserts.assert(-128 <= a && 128 > a); this.push(a >>> 0 & 255); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeInt16 = function (a) { goog.asserts.assert(a == Math.floor(a)); goog.asserts.assert(-32768 <= a && 32768 > a); this.push(a >>> 0 & 255); this.push(a >>> 8 & 255); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeInt32 = function (a) { goog.asserts.assert(a == Math.floor(a)); goog.asserts.assert(a >= -module$exports$jspb$BinaryConstants.TWO_TO_31 && a < module$exports$jspb$BinaryConstants.TWO_TO_31); this.push(a >>> 0 & 255); this.push(a >>> 8 & 255); this.push(a >>> 16 & 255); this.push(a >>> 24 & 255); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeInt64 = function (a) { goog.asserts.assert(a == Math.floor(a)); goog.asserts.assert(a >= -module$exports$jspb$BinaryConstants.TWO_TO_63 && a < module$exports$jspb$BinaryConstants.TWO_TO_63); module$contents$jspb$utils_splitInt64(a); this.writeSplitFixed64(module$contents$jspb$utils_split64Low, module$contents$jspb$utils_split64High); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeFloat = function (a) {
    goog.asserts.assert(Infinity === a || -Infinity === a || isNaN(a) || a >= -module$exports$jspb$BinaryConstants.FLOAT32_MAX && a <= module$exports$jspb$BinaryConstants.FLOAT32_MAX);
    var b = a;
    b = (a = 0 > b ? 1 : 0) ? -b : b;
    if (0 === b)
        0 < 1 / b ? module$contents$jspb$utils_split64Low = module$contents$jspb$utils_split64High = 0 : (module$contents$jspb$utils_split64High = 0, module$contents$jspb$utils_split64Low = 2147483648);
    else if (isNaN(b))
        module$contents$jspb$utils_split64High =
            0, module$contents$jspb$utils_split64Low = 2147483647;
    else if (b > module$exports$jspb$BinaryConstants.FLOAT32_MAX)
        module$contents$jspb$utils_split64High = 0, module$contents$jspb$utils_split64Low = (a << 31 | 2139095040) >>> 0;
    else if (b < module$exports$jspb$BinaryConstants.FLOAT32_MIN)
        b = Math.round(b / Math.pow(2, -149)), module$contents$jspb$utils_split64High = 0, module$contents$jspb$utils_split64Low = (a << 31 | b) >>> 0;
    else {
        var c = Math.floor(Math.log(b) / Math.LN2);
        b *= Math.pow(2, -c);
        b = Math.round(b * module$exports$jspb$BinaryConstants.TWO_TO_23);
        16777216 <= b && ++c;
        module$contents$jspb$utils_split64High = 0;
        module$contents$jspb$utils_split64Low = (a << 31 | c + 127 << 23 | b & 8388607) >>> 0;
    }
    this.writeUint32(module$contents$jspb$utils_split64Low);
};
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeDouble = function (a) {
    goog.asserts.assert(Infinity === a || -Infinity === a || isNaN(a) || a >= -module$exports$jspb$BinaryConstants.FLOAT64_MAX && a <= module$exports$jspb$BinaryConstants.FLOAT64_MAX);
    var b = a;
    b = (a = 0 > b ? 1 : 0) ? -b : b;
    if (0 === b)
        module$contents$jspb$utils_split64High = 0 < 1 / b ? 0 : 2147483648, module$contents$jspb$utils_split64Low = 0;
    else if (isNaN(b))
        module$contents$jspb$utils_split64High = 2147483647, module$contents$jspb$utils_split64Low = 4294967295;
    else if (b >
        module$exports$jspb$BinaryConstants.FLOAT64_MAX)
        module$contents$jspb$utils_split64High = (a << 31 | 2146435072) >>> 0, module$contents$jspb$utils_split64Low = 0;
    else if (b < module$exports$jspb$BinaryConstants.FLOAT64_MIN) {
        var c = b / Math.pow(2, -1074);
        module$contents$jspb$utils_split64High = (a << 31 | c / module$exports$jspb$BinaryConstants.TWO_TO_32) >>> 0;
        module$contents$jspb$utils_split64Low = c >>> 0;
    }
    else {
        var d = b;
        c = 0;
        if (2 <= d)
            for (; 2 <= d && 1023 > c;)
                c++, d /= 2;
        else
            for (; 1 > d && -1022 < c;)
                d *= 2, c--;
        b *= Math.pow(2, -c);
        d = b * module$exports$jspb$BinaryConstants.TWO_TO_52 >>>
            0;
        module$contents$jspb$utils_split64High = (a << 31 | c + 1023 << 20 | b * module$exports$jspb$BinaryConstants.TWO_TO_20 & 1048575) >>> 0;
        module$contents$jspb$utils_split64Low = d;
    }
    this.writeUint32(module$contents$jspb$utils_split64Low);
    this.writeUint32(module$contents$jspb$utils_split64High);
};
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeBool = function (a) { goog.asserts.assert("boolean" === typeof a || "number" === typeof a); this.push(a ? 1 : 0); };
module$exports$jspb$binary$encoder.BinaryEncoder.prototype.writeEnum = function (a) { goog.asserts.assert(a == Math.floor(a)); goog.asserts.assert(a >= -module$exports$jspb$BinaryConstants.TWO_TO_31 && a < module$exports$jspb$BinaryConstants.TWO_TO_31); this.writeSignedVarint32(a); };
var module$exports$jspb$binary$writer = { BinaryWriter: function () { this.blocks_ = []; this.totalLength_ = 0; this.encoder_ = new module$exports$jspb$binary$encoder.BinaryEncoder; } };
module$exports$jspb$binary$writer.BinaryWriter.prototype.pushBlock = function (a) { 0 !== a.length && (this.blocks_.push(a), this.totalLength_ += a.length); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.endAndAccumulate = function () { this.pushBlock(this.encoder_.end()); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.appendUint8Array_ = function (a) { this.endAndAccumulate(); this.pushBlock(a); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.beginDelimited_ = function (a) { this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.DELIMITED); this.endAndAccumulate(); return { lengthAtStart: this.totalLength_, blockIndex: this.blocks_.length - 1 }; };
module$exports$jspb$binary$writer.BinaryWriter.prototype.endDelimited_ = function (a) { this.endAndAccumulate(); this.encoder_.writeUnsignedVarint32(this.totalLength_ + this.encoder_.length() - a.lengthAtStart); var b = this.encoder_.end(); this.totalLength_ += b.length; this.blocks_.splice(1 + a.blockIndex, 0, b); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUnknownFields = function (a) { if (a = a.internalUnknownFields_) {
    this.endAndAccumulate();
    for (var b = 0; b < a.length; b++)
        this.pushBlock(a[b]);
} };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSerializedMessage = function (a, b, c) { this.appendUint8Array_(a.subarray(b, c)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.maybeWriteSerializedMessage = function (a, b, c) { null != a && null != b && null != c && this.writeSerializedMessage(a, b, c); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.getResultBuffer = function () { var a = this.totalLength_ + this.encoder_.length(); if (0 === a)
    return new Uint8Array(0); a = new Uint8Array(a); for (var b = this.blocks_, c = b.length, d = 0, e = 0; e < c; e++) {
    var f = b[e];
    0 !== f.length && (a.set(f, d), d += f.length);
} d += this.encoder_.writeAndEnd(a, d); (0, goog.asserts.assert)(d == a.length); this.blocks_ = [a]; return a; };
module$exports$jspb$binary$writer.BinaryWriter.prototype.getResultBase64String = function (a) { return (0, goog.crypt.base64.encodeByteArray)(this.getResultBuffer(), a); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFieldHeader_ = function (a, b) { (0, goog.asserts.assert)(1 <= a && a == Math.floor(a)); this.encoder_.writeUnsignedVarint32(8 * a + b); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeAny = function (a, b, c) {
    switch (a) {
        case module$exports$jspb$BinaryConstants.FieldType.DOUBLE:
            this.writeDouble(b, c);
            break;
        case module$exports$jspb$BinaryConstants.FieldType.FLOAT:
            this.writeFloat(b, c);
            break;
        case module$exports$jspb$BinaryConstants.FieldType.INT64:
            this.writeInt64(b, c);
            break;
        case module$exports$jspb$BinaryConstants.FieldType.UINT64:
            this.writeUint64(b, c);
            break;
        case module$exports$jspb$BinaryConstants.FieldType.INT32:
            this.writeInt32(b, c);
            break;
        case module$exports$jspb$BinaryConstants.FieldType.FIXED64:
            this.writeFixed64(b, c);
            break;
        case module$exports$jspb$BinaryConstants.FieldType.FIXED32:
            this.writeFixed32(b, c);
            break;
        case module$exports$jspb$BinaryConstants.FieldType.BOOL:
            this.writeBool(b, c);
            break;
        case module$exports$jspb$BinaryConstants.FieldType.STRING:
            this.writeString(b, c);
            break;
        case module$exports$jspb$BinaryConstants.FieldType.GROUP:
            (0, goog.asserts.fail)("Group field type not supported in writeAny()");
            break;
        case module$exports$jspb$BinaryConstants.FieldType.MESSAGE:
            (0, goog.asserts.fail)("Message field type not supported in writeAny()");
            break;
        case module$exports$jspb$BinaryConstants.FieldType.BYTES:
            this.writeBytes(b, c);
            break;
        case module$exports$jspb$BinaryConstants.FieldType.UINT32:
            this.writeUint32(b, c);
            break;
        case module$exports$jspb$BinaryConstants.FieldType.ENUM:
            this.writeEnum(b, c);
            break;
        case module$exports$jspb$BinaryConstants.FieldType.SFIXED32:
            this.writeSfixed32(b, c);
            break;
        case module$exports$jspb$BinaryConstants.FieldType.SFIXED64:
            this.writeSfixed64(b, c);
            break;
        case module$exports$jspb$BinaryConstants.FieldType.SINT32:
            this.writeSint32(b, c);
            break;
        case module$exports$jspb$BinaryConstants.FieldType.SINT64:
            this.writeSint64(b, c);
            break;
        default: (0, goog.asserts.fail)("Invalid field type in writeAny()");
    }
};
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUnsignedVarint32_ = function (a, b) { null != b && (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint32(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSignedVarint32_ = function (a, b) { null != b && (module$contents$jspb$binary$writer_assertSignedInteger(a, b), this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUnsignedVarint64_ = function (a, b) { null != b && (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint64(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSignedVarint64_ = function (a, b) { null != b && (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint64(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeZigzagVarint32_ = function (a, b) { null != b && (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint32(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeZigzagVarint64_ = function (a, b) { null != b && (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeZigzagVarint64String_ = function (a, b) { null != b && (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64String(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32 = function (a, b) { null != b && (module$contents$jspb$binary$writer_assertThat(a, b, b >= -module$exports$jspb$BinaryConstants.TWO_TO_31 && b < module$exports$jspb$BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a, b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64 = function (a, b) { null != b && (module$contents$jspb$binary$writer_assertThat(a, b, b >= -module$exports$jspb$BinaryConstants.TWO_TO_63 && b < module$exports$jspb$BinaryConstants.TWO_TO_63), this.writeSignedVarint64_(a, b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64String = function (a, b) { null != b && (b = module$exports$jspb$arith.Int64.fromString(b), this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b.lo, b.hi)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32 = function (a, b) { null != b && (module$contents$jspb$binary$writer_assertThat(a, b, 0 <= b && b < module$exports$jspb$BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a, b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64 = function (a, b) { null != b && (module$contents$jspb$binary$writer_assertThat(a, b, 0 <= b && b < module$exports$jspb$BinaryConstants.TWO_TO_64), this.writeUnsignedVarint64_(a, b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64String = function (a, b) { null != b && (b = module$exports$jspb$arith.UInt64.fromString(b), this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b.lo, b.hi)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32 = function (a, b) { null != b && (module$contents$jspb$binary$writer_assertThat(a, b, b >= -module$exports$jspb$BinaryConstants.TWO_TO_31 && b < module$exports$jspb$BinaryConstants.TWO_TO_31), this.writeZigzagVarint32_(a, b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64 = function (a, b) { null != b && (module$contents$jspb$binary$writer_assertThat(a, b, b >= -module$exports$jspb$BinaryConstants.TWO_TO_63 && b < module$exports$jspb$BinaryConstants.TWO_TO_63), this.writeZigzagVarint64_(a, b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64String = function (a, b) { null != b && this.writeZigzagVarint64String_(a, b); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32 = function (a, b) { null != b && (module$contents$jspb$binary$writer_assertThat(a, b, 0 <= b && b < module$exports$jspb$BinaryConstants.TWO_TO_32), this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.FIXED32), this.encoder_.writeUint32(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64 = function (a, b) { null != b && (module$contents$jspb$binary$writer_assertThat(a, b, 0 <= b && b < module$exports$jspb$BinaryConstants.TWO_TO_64), this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.FIXED64), this.encoder_.writeUint64(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64String = function (a, b) { null != b && (b = module$exports$jspb$arith.UInt64.fromString(b), this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b.lo, b.hi)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32 = function (a, b) { null != b && (module$contents$jspb$binary$writer_assertThat(a, b, b >= -module$exports$jspb$BinaryConstants.TWO_TO_31 && b < module$exports$jspb$BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.FIXED32), this.encoder_.writeInt32(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64 = function (a, b) { null != b && (module$contents$jspb$binary$writer_assertThat(a, b, b >= -module$exports$jspb$BinaryConstants.TWO_TO_63 && b < module$exports$jspb$BinaryConstants.TWO_TO_63), this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.FIXED64), this.encoder_.writeInt64(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64String = function (a, b) { null != b && (b = module$exports$jspb$arith.Int64.fromString(b), this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b.lo, b.hi)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFloat = function (a, b) { null != b && (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.FIXED32), this.encoder_.writeFloat(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeDouble = function (a, b) { null != b && (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.FIXED64), this.encoder_.writeDouble(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool = function (a, b) { null != b && (module$contents$jspb$binary$writer_assertThat(a, b, "boolean" === typeof b || "number" === typeof b), this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.VARINT), this.encoder_.writeBool(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeEnum = function (a, b) { null != b && (b = parseInt(b, 10), module$contents$jspb$binary$writer_assertSignedInteger(a, b), this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString = function (a, b) { null != b && this.writeUint8Array(a, module$contents$jspb$binary$utf8_encodeUtf8(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBytes = function (a, b) { null != b && this.writeUint8Array(a, module$contents$jspb$utils_byteSourceToUint8Array(b)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint8Array = function (a, b) { this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.DELIMITED); this.encoder_.writeUnsignedVarint32(b.length); this.appendUint8Array_(b); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeMessage = function (a, b, c) { null != b && (a = this.beginDelimited_(a), c(b, this), this.endDelimited_(a)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeMessageSet = function (a, b, c) { null != b && (this.writeFieldHeader_(1, module$exports$jspb$BinaryConstants.WireType.START_GROUP), this.writeFieldHeader_(2, module$exports$jspb$BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(a), a = this.beginDelimited_(3), c(b, this), this.endDelimited_(a), this.writeFieldHeader_(1, module$exports$jspb$BinaryConstants.WireType.END_GROUP)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeGroup = function (a, b, c) { null != b && (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.START_GROUP), c(b, this), this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.END_GROUP)); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSplitFixed64 = function (a, b, c) { this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.FIXED64); this.encoder_.writeSplitFixed64(b, c); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSplitVarint64 = function (a, b, c) { this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.VARINT); this.encoder_.writeSplitVarint64(b, c); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSplitZigzagVarint64 = function (a, b, c) { this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.VARINT); this.encoder_.writeSplitZigzagVarint64(b >>> 0, c >>> 0); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedInt32 = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeSignedVarint32_(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedInt64 = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeSignedVarint64_(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function (a, b, c, d) { if (null != b)
    for (var e = 0; e < b.length; e++)
        this.writeSplitFixed64(a, c(b[e]), d(b[e])); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function (a, b, c, d) { if (null != b)
    for (var e = 0; e < b.length; e++)
        this.writeSplitVarint64(a, c(b[e]), d(b[e])); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function (a, b, c, d) { if (null != b)
    for (var e = 0; e < b.length; e++)
        this.writeSplitZigzagVarint64(a, c(b[e]), d(b[e])); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedInt64String = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeInt64String(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedUint32 = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeUnsignedVarint32_(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedUint64 = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeUnsignedVarint64_(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedUint64String = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeUint64String(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedSint32 = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeZigzagVarint32_(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedSint64 = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeZigzagVarint64_(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedSint64String = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeZigzagVarint64String_(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedFixed32 = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeFixed32(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedFixed64 = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeFixed64(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedFixed64String = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeFixed64String(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedSfixed32 = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeSfixed32(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedSfixed64 = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeSfixed64(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedSfixed64String = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeSfixed64String(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedFloat = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeFloat(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedDouble = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeDouble(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedBool = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeBool(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedEnum = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeEnum(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedString = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeString(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedBytes = function (a, b) { if (null != b)
    for (var c = 0; c < b.length; c++)
        this.writeBytes(a, b[c]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedMessage = function (a, b, c) { if (null != b)
    for (var d = 0; d < b.length; d++) {
        var e = this.beginDelimited_(a);
        c(b[d], this);
        this.endDelimited_(e);
    } };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writeRepeatedGroup = function (a, b, c) { if (null != b)
    for (var d = 0; d < b.length; d++)
        this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.START_GROUP), c(b[d], this), this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.END_GROUP); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedInt32 = function (a, b) { if (null != b && b.length) {
    for (var c = this.beginDelimited_(a), d = 0; d < b.length; d++)
        module$contents$jspb$binary$writer_assertSignedInteger(a, b[d]), this.encoder_.writeSignedVarint32(b[d]);
    this.endDelimited_(c);
} };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedInt32String = function (a, b) { if (null != b && b.length) {
    for (var c = this.beginDelimited_(a), d = 0; d < b.length; d++) {
        var e = parseInt(b[d], 10);
        module$contents$jspb$binary$writer_assertSignedInteger(a, e);
        this.encoder_.writeSignedVarint32(e);
    }
    this.endDelimited_(c);
} };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedInt64 = function (a, b) { if (null != b && b.length) {
    a = this.beginDelimited_(a);
    for (var c = 0; c < b.length; c++)
        this.encoder_.writeSignedVarint64(b[c]);
    this.endDelimited_(a);
} };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedSplitFixed64 = function (a, b, c, d) { if (null != b) {
    a = this.beginDelimited_(a);
    for (var e = 0; e < b.length; e++)
        this.encoder_.writeSplitFixed64(c(b[e]), d(b[e]));
    this.endDelimited_(a);
} };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedSplitVarint64 = function (a, b, c, d) { if (null != b) {
    a = this.beginDelimited_(a);
    for (var e = 0; e < b.length; e++)
        this.encoder_.writeSplitVarint64(c(b[e]), d(b[e]));
    this.endDelimited_(a);
} };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function (a, b, c, d) { if (null != b) {
    a = this.beginDelimited_(a);
    for (var e = this.encoder_, f = 0; f < b.length; f++)
        e.writeSplitZigzagVarint64(c(b[f]), d(b[f]));
    this.endDelimited_(a);
} };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedInt64String = function (a, b) { if (null != b && b.length) {
    a = this.beginDelimited_(a);
    for (var c = 0; c < b.length; c++) {
        var d = module$exports$jspb$arith.Int64.fromString(b[c]);
        this.encoder_.writeSplitVarint64(d.lo, d.hi);
    }
    this.endDelimited_(a);
} };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedUint32 = function (a, b) { if (null != b && b.length) {
    a = this.beginDelimited_(a);
    for (var c = 0; c < b.length; c++)
        this.encoder_.writeUnsignedVarint32(b[c]);
    this.endDelimited_(a);
} };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedUint64 = function (a, b) { if (null != b && b.length) {
    a = this.beginDelimited_(a);
    for (var c = 0; c < b.length; c++)
        this.encoder_.writeUnsignedVarint64(b[c]);
    this.endDelimited_(a);
} };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedUint64String = function (a, b) { if (null != b && b.length) {
    a = this.beginDelimited_(a);
    for (var c = 0; c < b.length; c++) {
        var d = module$exports$jspb$arith.UInt64.fromString(b[c]);
        this.encoder_.writeSplitVarint64(d.lo, d.hi);
    }
    this.endDelimited_(a);
} };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedSint32 = function (a, b) { if (null != b && b.length) {
    a = this.beginDelimited_(a);
    for (var c = 0; c < b.length; c++)
        this.encoder_.writeZigzagVarint32(b[c]);
    this.endDelimited_(a);
} };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedSint64 = function (a, b) { if (null != b && b.length) {
    a = this.beginDelimited_(a);
    for (var c = 0; c < b.length; c++)
        this.encoder_.writeZigzagVarint64(b[c]);
    this.endDelimited_(a);
} };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedSint64String = function (a, b) { if (null != b && b.length) {
    a = this.beginDelimited_(a);
    for (var c = 0; c < b.length; c++)
        this.encoder_.writeZigzagVarint64String(b[c]);
    this.endDelimited_(a);
} };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedFixed32 = function (a, b) { if (null != b && b.length)
    for (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b.length), a = 0; a < b.length; a++)
        this.encoder_.writeUint32(b[a]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedFixed64 = function (a, b) { if (null != b && b.length)
    for (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++)
        this.encoder_.writeUint64(b[a]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedFixed64String = function (a, b) { if (null != b && b.length)
    for (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++) {
        var c = module$exports$jspb$arith.UInt64.fromString(b[a]);
        this.encoder_.writeSplitFixed64(c.lo, c.hi);
    } };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedSfixed32 = function (a, b) { if (null != b && b.length)
    for (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b.length), a = 0; a < b.length; a++)
        this.encoder_.writeInt32(b[a]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedSfixed64 = function (a, b) { if (null != b && b.length)
    for (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++)
        this.encoder_.writeInt64(b[a]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedSfixed64String = function (a, b) { if (null != b && b.length)
    for (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++) {
        var c = module$exports$jspb$arith.Int64.fromString(b[a]);
        this.encoder_.writeSplitFixed64(c.lo, c.hi);
    } };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedFloat = function (a, b) { if (null != b && b.length)
    for (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b.length), a = 0; a < b.length; a++)
        this.encoder_.writeFloat(b[a]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedDouble = function (a, b) { if (null != b && b.length)
    for (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a = 0; a < b.length; a++)
        this.encoder_.writeDouble(b[a]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedBool = function (a, b) { if (null != b && b.length)
    for (this.writeFieldHeader_(a, module$exports$jspb$BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b.length), a = 0; a < b.length; a++)
        this.encoder_.writeBool(b[a]); };
module$exports$jspb$binary$writer.BinaryWriter.prototype.writePackedEnum = function (a, b) { if (null != b && b.length) {
    a = this.beginDelimited_(a);
    for (var c = 0; c < b.length; c++)
        this.encoder_.writeEnum(b[c]);
    this.endDelimited_(a);
} };
function module$contents$jspb$binary$writer_assertSignedInteger(a, b) { module$contents$jspb$binary$writer_assertThat(a, b, b === Math.floor(b)); module$contents$jspb$binary$writer_assertThat(a, b, b >= -module$exports$jspb$BinaryConstants.TWO_TO_31 && b < module$exports$jspb$BinaryConstants.TWO_TO_31); }
function module$contents$jspb$binary$writer_assertThat(a, b, c) { c || (0, goog.asserts.fail)("for [" + b + "] at [" + a + "]"); }
var module$exports$jspb$internal_options = {}, module$contents$jspb$internal_options_freezerLoaded = !1, module$contents$jspb$internal_options_skipMessageIdValidation = !0, module$contents$jspb$internal_options_skipMessageArgumentTypeValidation = !1;
module$exports$jspb$internal_options.SERIALIZE_EMPTY_TRAILING_FIELDS = !0;
module$exports$jspb$internal_options.isFreezerLoaded = function () { return module$contents$jspb$internal_options_freezerLoaded; };
module$exports$jspb$internal_options.markFreezerLoaded = function () { module$contents$jspb$internal_options_freezerLoaded = !0; };
module$exports$jspb$internal_options.skipMessageIdValidation = function () { return module$contents$jspb$internal_options_skipMessageIdValidation; };
module$exports$jspb$internal_options.skipMessageArgumentTypeValidation = function () { return module$contents$jspb$internal_options_skipMessageArgumentTypeValidation; };
module$exports$jspb$internal_options.setMessageArgumentTypeValidation = function (a) { module$contents$jspb$internal_options_skipMessageArgumentTypeValidation = !a; };
module$exports$jspb$internal_options.setValidateMessageIds = function (a) { module$contents$jspb$internal_options_skipMessageIdValidation = !a; };
var module$contents$jspb$internal_array_state_ARRAY_STATE_SYMBOL = 2018 <= goog.FEATURESET_YEAR || "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(goog.DEBUG ? "INTERNAL_ARRAY_STATE" : void 0) : void 0, module$contents$jspb$internal_array_state_ARRAY_STATE_BIT_MASKS = { IS_REPEATED_FIELD: 1, IS_IMMUTABLE_ARRAY: 2 };
function module$contents$jspb$internal_array_state_addMask(a, b) { Object.isFrozen(a) || (module$contents$jspb$internal_array_state_ARRAY_STATE_SYMBOL ? a[module$contents$jspb$internal_array_state_ARRAY_STATE_SYMBOL] |= b : void 0 !== a.internalArrayState ? a.internalArrayState |= b : Object.defineProperties(a, { internalArrayState: { value: b, configurable: !0, writable: !0, enumerable: !1 } })); }
function module$contents$jspb$internal_array_state_getState(a) { goog.asserts.assertArray(a, "state is only maintained on arrays."); a = module$contents$jspb$internal_array_state_ARRAY_STATE_SYMBOL ? a[module$contents$jspb$internal_array_state_ARRAY_STATE_SYMBOL] : a.internalArrayState; return null == a ? 0 : a; }
function module$contents$jspb$internal_array_state_isRepeatedField(a) { return Array.isArray(a) ? !!(module$contents$jspb$internal_array_state_getState(a) & module$contents$jspb$internal_array_state_ARRAY_STATE_BIT_MASKS.IS_REPEATED_FIELD) : !1; }
function module$contents$jspb$internal_array_state_markRepeatedField(a) { goog.asserts.assertArray(a, "state is only maintained on arrays."); module$contents$jspb$internal_array_state_addMask(a, module$contents$jspb$internal_array_state_ARRAY_STATE_BIT_MASKS.IS_REPEATED_FIELD); return a; }
function module$contents$jspb$internal_array_state_isImmutableArray(a) { return module$contents$jspb$internal_options_freezerLoaded && Array.isArray(a) ? !!(module$contents$jspb$internal_array_state_getState(a) & module$contents$jspb$internal_array_state_ARRAY_STATE_BIT_MASKS.IS_IMMUTABLE_ARRAY) : !1; }
function module$contents$jspb$internal_array_state_markArrayImmutable(a) { if (!Array.isArray(a))
    throw Error("cannot mark non-array as immutable"); module$contents$jspb$internal_array_state_addMask(a, module$contents$jspb$internal_array_state_ARRAY_STATE_BIT_MASKS.IS_IMMUTABLE_ARRAY); return a; }
var module$exports$jspb$internal = { InternalMessage: function () { } };
function module$contents$jspb$internal_isImmutableMessage(a) { return module$contents$jspb$internal_options_freezerLoaded ? module$contents$jspb$internal_array_state_isImmutableArray(a.internalArray_) : !1; }
function module$contents$jspb$internal_internalMarkMessageImmutable(a) { (0, goog.asserts.assert)(module$contents$jspb$internal_options_freezerLoaded); module$contents$jspb$internal_array_state_markArrayImmutable(a.internalArray_); }
function module$contents$jspb$internal_isExtensionObject(a) { return null !== a && "object" === typeof a && a.constructor === Object; }
function module$contents$jspb$internal_hasOwnPropertyIfNotTrusted(a, b) { return goog.TRUSTED_SITE || Object.prototype.hasOwnProperty.call(a, b); }
function module$contents$jspb$internal_newRepeatedField() { return module$contents$jspb$internal_array_state_markRepeatedField([]); }
var module$contents$jspb$internal_inSerialize;
module$exports$jspb$internal.EXEMPTED_SUBCLASS_MARKER = goog.asserts.ENABLE_ASSERTS ? Symbol(goog.DEBUG ? "exempted jspb subclass" : void 0) : void 0;
module$exports$jspb$internal.GENERATED_SUBCLASS_MARKER = goog.asserts.ENABLE_ASSERTS ? Symbol(goog.DEBUG ? "generated by jspb" : void 0) : void 0;
function module$contents$jspb$internal_bytesAsB64(a) { return module$contents$jspb$internal_bytes_dataAsB64(module$contents$jspb$internal_maybeUnwrapByteString(a)); }
function module$contents$jspb$internal_bytesAsU8(a) { return module$contents$jspb$internal_bytes_dataAsU8(module$contents$jspb$internal_maybeUnwrapByteString(a)); }
function module$contents$jspb$internal_bytesAsByteString(a) { if (null == a)
    return module$exports$jspb$bytestring.ByteString.empty(); if (a.constructor === module$exports$jspb$bytestring.ByteString)
    return a; if ("string" === typeof a)
    return module$exports$jspb$bytestring.ByteString.fromBase64(a); if (module$contents$jspb$internal_bytes_isU8(a))
    return module$exports$jspb$bytestring.ByteString.fromUint8Array(a); (0, goog.asserts.fail)("Cannot coerce to ByteString: " + goog.typeOf(a)); return module$exports$jspb$bytestring.ByteString.empty(); }
function module$contents$jspb$internal_maybeUnwrapByteString(a) { return a instanceof module$exports$jspb$bytestring.ByteString ? a.value_ || "" : a; }
function module$contents$jspb$internal_isEmptyRepeatedField(a) { return Array.isArray(a) && module$contents$jspb$internal_array_state_isRepeatedField(a) && !a.length; }
module$exports$jspb$internal.bytesAsB64 = module$contents$jspb$internal_bytesAsB64;
module$exports$jspb$internal.bytesAsByteString = module$contents$jspb$internal_bytesAsByteString;
module$exports$jspb$internal.bytesAsU8 = module$contents$jspb$internal_bytesAsU8;
module$exports$jspb$internal.fieldNumberFromIndex = function (a, b) { return b - a.arrayIndexOffset; };
module$exports$jspb$internal.getInSerialize = function () { return module$contents$jspb$internal_inSerialize; };
module$exports$jspb$internal.hasOwnPropertyIfNotTrusted = module$contents$jspb$internal_hasOwnPropertyIfNotTrusted;
module$exports$jspb$internal.indexFromFieldNumber = function (a, b) { return b + a.arrayIndexOffset; };
module$exports$jspb$internal.internalMarkMessageImmutable = module$contents$jspb$internal_internalMarkMessageImmutable;
module$exports$jspb$internal.isEmptyRepeatedField = module$contents$jspb$internal_isEmptyRepeatedField;
module$exports$jspb$internal.isExtensionObject = module$contents$jspb$internal_isExtensionObject;
module$exports$jspb$internal.isImmutableMessage = module$contents$jspb$internal_isImmutableMessage;
module$exports$jspb$internal.newRepeatedField = module$contents$jspb$internal_newRepeatedField;
module$exports$jspb$internal.setInSerialize = function (a) { module$contents$jspb$internal_inSerialize = a; };
module$exports$jspb$internal.maybeUnwrapByteString = module$contents$jspb$internal_maybeUnwrapByteString;
jspb.extension_field_info = {};
var module$contents$jspb$extension_field_info_ExtensionFieldInfo = function (a, b, c, d, e) { this.fieldIndex = a; this.fieldName = b; this.ctor = c; this.toObjectFn = d; this.isRepeated = e; };
module$contents$jspb$extension_field_info_ExtensionFieldInfo.prototype.isMessageType = function () { return !!this.ctor; };
jspb.extension_field_info.ExtensionFieldInfo = module$contents$jspb$extension_field_info_ExtensionFieldInfo;
var module$exports$jspb$map = { Map: function (a, b) { this.arr_ = a; this.valueCtor = b; this.map = {}; this.arrClean = !0; this.isImmutable_ = !1; 0 < this.arr_.length && this.loadFromArray_(); } };
module$exports$jspb$map.Map.prototype.internalMarkImmutable = function () { goog.asserts.assert(module$contents$jspb$internal_options_freezerLoaded); this.isImmutable_ = !0; };
module$exports$jspb$map.Map.prototype.checkNotImmutable_ = function () { if (module$contents$jspb$internal_options_freezerLoaded && this.isImmutable_)
    throw Error("Cannot mutate an immutable Map"); };
module$exports$jspb$map.Map.prototype.loadFromArray_ = function () { for (var a = 0; a < this.arr_.length; a++) {
    var b = this.arr_[a], c = b[0];
    this.map[c.toString()] = new module$contents$jspb$map_Entry_(c, b[1]);
} this.arrClean = !0; };
module$exports$jspb$map.Map.prototype.toArrayInternal = function () { if (!this.arrClean) {
    this.arr_.length = 0;
    var a = this.stringKeys_();
    a.sort();
    for (var b = 0; b < a.length; b++) {
        var c = this.map[a[b]];
        this.arr_.push([c.key, c.value]);
    }
    this.arrClean = !0;
} return this.arr_; };
module$exports$jspb$map.Map.prototype.internalClone = function (a, b) { var c = this.valueCtor, d = new module$exports$jspb$map.Map(module$contents$jspb$internal_newRepeatedField(), c), e; for (e in this.map) {
    var f = this.map[e];
    c ? d.set(f.key, b(this.wrapEntry_(f))) : d.set(f.key, a(f.value));
} return d; };
module$exports$jspb$map.Map.prototype.getLength = function () { return this.size; };
module$exports$jspb$map.Map.prototype.clear = function () { this.checkNotImmutable_(); this.map = {}; this.arrClean = !1; };
module$exports$jspb$map.Map.prototype.delete = function (a) { this.checkNotImmutable_(); a = a.toString(); var b = this.map.hasOwnProperty(a); delete this.map[a]; this.arrClean = !1; return b; };
module$exports$jspb$map.Map.prototype.del = function (a) { return this.delete(a); };
module$exports$jspb$map.Map.prototype.getEntryList = function () { var a = [], b = this.stringKeys_(); b.sort(); for (var c = 0; c < b.length; c++) {
    var d = this.map[b[c]];
    a.push([d.key, d.value]);
} return a; };
module$exports$jspb$map.Map.prototype.entries = function () { var a = [], b = this.stringKeys_(); b.sort(); for (var c = 0; c < b.length; c++) {
    var d = this.map[b[c]];
    a.push([d.key, this.wrapEntry_(d)]);
} return new module$contents$jspb$map_ArrayIteratorIterable(a); };
module$exports$jspb$map.Map.prototype.keys = function () { var a = [], b = this.stringKeys_(); b.sort(); for (var c = 0; c < b.length; c++)
    a.push(this.map[b[c]].key); return new module$contents$jspb$map_ArrayIteratorIterable(a); };
module$exports$jspb$map.Map.prototype.values = function () { var a = [], b = this.stringKeys_(); b.sort(); for (var c = 0; c < b.length; c++)
    a.push(this.wrapEntry_(this.map[b[c]])); return new module$contents$jspb$map_ArrayIteratorIterable(a); };
module$exports$jspb$map.Map.prototype.forEach = function (a, b) { var c = this.stringKeys_(); c.sort(); for (var d = 0; d < c.length; d++) {
    var e = this.map[c[d]];
    a.call(b, this.wrapEntry_(e), e.key, this);
} };
module$exports$jspb$map.Map.prototype.set = function (a, b) { this.checkNotImmutable_(); var c = new module$contents$jspb$map_Entry_(a); this.valueCtor ? (c.valueWrapper = b, c.value = b.toArrayInternal()) : c.value = b; this.map[a.toString()] = c; this.arrClean = !1; return this; };
module$exports$jspb$map.Map.prototype.wrapEntry_ = function (a) { return this.valueCtor ? (a.valueWrapper || (a.valueWrapper = new this.valueCtor(a.value), this.isImmutable_ && module$contents$jspb$internal_internalMarkMessageImmutable(a.valueWrapper)), a.valueWrapper) : a.value; };
module$exports$jspb$map.Map.prototype.get = function (a) { if (a = this.map[a.toString()])
    return this.wrapEntry_(a); };
module$exports$jspb$map.Map.prototype.has = function (a) { return a.toString() in this.map; };
module$exports$jspb$map.Map.prototype.stringKeys_ = function () { var a = this.map, b = [], c; for (c in a)
    Object.prototype.hasOwnProperty.call(a, c) && b.push(c); return b; };
module$exports$jspb$map.Map.prototype[Symbol.iterator] = function () { return this.entries(); };
$jscomp.global.Object.defineProperties(module$exports$jspb$map.Map.prototype, { size: { configurable: !0, enumerable: !0, get: function () { return this.stringKeys_().length; } } });
var module$contents$jspb$map_Entry_ = function (a, b) { this.key = a; this.value = b; this.valueWrapper = void 0; }, module$contents$jspb$map_ArrayIteratorIterable = function (a) { this.idx_ = 0; this.arr_ = a; };
module$contents$jspb$map_ArrayIteratorIterable.prototype.next = function () { return this.idx_ < this.arr_.length ? { done: !1, value: this.arr_[this.idx_++] } : { done: !0, value: void 0 }; };
module$contents$jspb$map_ArrayIteratorIterable.prototype[Symbol.iterator] = function () { return this; };
function module$contents$jspb$internal_compare_compareExtensions(a, b) { a = a || {}; b = b || {}; var c = {}, d; for (d in a)
    module$contents$jspb$internal_hasOwnPropertyIfNotTrusted(a, d) && (c[d] = 0); for (var e in b)
    module$contents$jspb$internal_hasOwnPropertyIfNotTrusted(b, e) && (c[e] = 0); for (var f in c)
    if (module$contents$jspb$internal_hasOwnPropertyIfNotTrusted(c, f) && !module$contents$jspb$internal_compare_compareFields(a[f], b[f]))
        return !1; return !0; }
function module$contents$jspb$internal_compare_maybeUnwrapMap(a) { return a instanceof module$exports$jspb$map.Map ? a.toArrayInternal() : a; }
function module$contents$jspb$internal_compare_compareFields(a, b) {
    a = module$contents$jspb$internal_maybeUnwrapByteString(a);
    b = module$contents$jspb$internal_maybeUnwrapByteString(b);
    a = module$contents$jspb$internal_compare_maybeUnwrapMap(a);
    b = module$contents$jspb$internal_compare_maybeUnwrapMap(b);
    if (a == b)
        return !0;
    if (module$exports$jspb$internal_bytes.SUPPORTS_UINT8ARRAY) {
        var c = module$contents$jspb$internal_bytes_isU8(a), d = module$contents$jspb$internal_bytes_isU8(b);
        if (c || d) {
            if (!c)
                if ("string" === typeof a)
                    a =
                        module$contents$jspb$internal_bytes_dataAsU8(a);
                else
                    return !1;
            if (d)
                d = b;
            else if ("string" === typeof b)
                d = module$contents$jspb$internal_bytes_dataAsU8(b);
            else
                return !1;
            if (a.length !== d.length)
                return !1;
            for (b = 0; b < a.length; b++)
                if (a[b] !== d[b])
                    return !1;
            return !0;
        }
    }
    if (null == a && module$contents$jspb$internal_isEmptyRepeatedField(b) || null == b && module$contents$jspb$internal_isEmptyRepeatedField(a))
        return !0;
    if (!goog.isObject(a) || !goog.isObject(b))
        return "number" === typeof a && isNaN(a) || "number" === typeof b && isNaN(b) ? String(a) ==
            String(b) : !1;
    if (a.constructor != b.constructor)
        return !1;
    if (a.constructor === Array) {
        d = a;
        c = a = void 0;
        for (var e = Math.max(d.length, b.length), f = 0; f < e; f++) {
            var g = d[f], k = b[f];
            g && g.constructor == Object && ((0, goog.asserts.assert)(void 0 === a), (0, goog.asserts.assert)(f === d.length - 1), a = g, g = void 0);
            k && k.constructor == Object && ((0, goog.asserts.assert)(void 0 === c), (0, goog.asserts.assert)(f === b.length - 1), c = k, k = void 0);
            if (!module$contents$jspb$internal_compare_compareFields(g, k))
                return !1;
        }
        return a || c ? (a = a || {}, c = c || {}, module$contents$jspb$internal_compare_compareExtensions(a, c)) : !0;
    }
    if (a.constructor === Object)
        return module$contents$jspb$internal_compare_compareExtensions(a, b);
    throw Error("Invalid type in JSPB array");
}
function module$contents$jspb$internal_json_convertToJsonFormat(a) { switch (typeof a) {
    case "number": return isFinite(a) ? a : String(a);
    case "object":
        if (module$contents$jspb$internal_bytes_isU8(a))
            return (0, goog.crypt.base64.encodeByteArray)(a);
        if (a instanceof module$exports$jspb$bytestring.ByteString)
            return a.asBase64();
        if (a instanceof module$exports$jspb$map.Map)
            return a = a.toArrayInternal(), module$exports$jspb$internal_options.SERIALIZE_EMPTY_TRAILING_FIELDS || 0 !== a.length ? a : void 0;
} return a; }
function module$contents$jspb$internal_copy_cloneJspbField(a) { return module$contents$jspb$internal_copy_cloneJspbFieldInternal(a, module$contents$jspb$internal_copy_convertToJspbFormat); }
function module$contents$jspb$internal_copy_cloneJspbFieldInternal(a, b) { if (null != a)
    return Array.isArray(a) || module$contents$jspb$internal_isExtensionObject(a) ? module$contents$jspb$internal_copy_cloneJspbObjectInternal(a, b) : b(a); }
function module$contents$jspb$internal_copy_cloneJspbObjectInternal(a, b) { if (Array.isArray(a)) {
    for (var c = Array(a.length), d = 0; d < a.length; d++)
        c[d] = module$contents$jspb$internal_copy_cloneJspbFieldInternal(a[d], b);
    module$contents$jspb$internal_array_state_isRepeatedField(a) && module$contents$jspb$internal_array_state_markRepeatedField(c);
    return c;
} c = {}; for (d in a)
    module$contents$jspb$internal_hasOwnPropertyIfNotTrusted(a, d) && (c[d] = module$contents$jspb$internal_copy_cloneJspbFieldInternal(a[d], b)); return c; }
function module$contents$jspb$internal_copy_convertToStructuredCloneableFormat(a) { a = module$contents$jspb$internal_maybeUnwrapByteString(a); return module$contents$jspb$internal_bytes_isU8(a) ? new Uint8Array(a) : a instanceof module$exports$jspb$map.Map ? module$contents$jspb$internal_copy_cloneJspbObjectInternal(a.toArrayInternal(), module$contents$jspb$internal_copy_convertToStructuredCloneableFormat) : a; }
function module$contents$jspb$internal_copy_convertToJsonFormat(a) { a = module$contents$jspb$internal_json_convertToJsonFormat(a); return Array.isArray(a) ? module$contents$jspb$internal_copy_cloneJspbObjectInternal(a, module$contents$jspb$internal_copy_convertToJsonFormat) : a; }
function module$contents$jspb$internal_copy_messageCloner(a) { return a.clone(); }
function module$contents$jspb$internal_copy_convertToJspbFormat(a) { return module$contents$jspb$internal_bytes_isU8(a) ? new Uint8Array(a) : a instanceof module$exports$jspb$map.Map ? a.internalClone(module$contents$jspb$internal_copy_cloneJspbField, module$contents$jspb$internal_copy_messageCloner) : a; }
var module$contents$jspb$message_ctor_alternateDataPayload;
function module$contents$jspb$message_ctor_newMessage(a, b) { module$contents$jspb$message_ctor_alternateDataPayload = b; a = new a(b); module$contents$jspb$message_ctor_alternateDataPayload = null; return a; }
var module$exports$jspb = { Message: function (a, b, c) {
        goog.asserts.assertInstanceof(this, module$exports$jspb.Message, "The message constructor should only be used by subclasses");
        goog.asserts.assert(this.constructor !== module$exports$jspb.Message, "Message is an abstract class and cannot be directly constructed");
        if (goog.asserts.ENABLE_ASSERTS && !0 !== this[module$exports$jspb$internal.EXEMPTED_SUBCLASS_MARKER]) {
            goog.asserts.assert(!0 === this[module$exports$jspb$internal.GENERATED_SUBCLASS_MARKER], "Message can only be subclassed by proto gencode.");
            var d = Object.getPrototypeOf(goog.asserts.assert(Object.getPrototypeOf(this)));
            goog.asserts.assert(d.hasOwnProperty(module$exports$jspb$internal.GENERATED_SUBCLASS_MARKER), "Generated jspb classes should not be extended");
        }
        d = module$contents$jspb$message_ctor_alternateDataPayload;
        module$contents$jspb$message_ctor_alternateDataPayload = null;
        a || (a = d);
        d = this.getJsPbMessageId();
        if (!a)
            a = d ? [d] : [];
        else if (!module$contents$jspb$internal_options_skipMessageIdValidation && d && "_" !== d && d !== a[0])
            throw Error('Expected message to have a message id: "' +
                d + '" in the array, got: ' + JSON.stringify(a) + ", are you parsing with the wrong proto?");
        this.arrayIndexOffset = (d ? 0 : -1) - (this.constructor.internalGroupNumberDoNotUse || 0);
        this.convertedPrimitiveFields_ = this.internalWrappers_ = null;
        this.internalArray_ = a;
        module$contents$jspb_initPivotAndExtensionObject(this, b);
        if (c)
            for (a = 0; a < c.length; a++)
                b = c[a], b < this.pivot_ ? (b += this.arrayIndexOffset, (d = this.internalArray_[b]) ? Array.isArray(d) && module$contents$jspb$internal_array_state_markRepeatedField(d) : this.internalArray_[b] =
                    module$contents$jspb_EMPTY_LIST_SENTINEL) : (module$contents$jspb_maybeInitEmptyExtensionObject(this), (d = this.internalExtensionObject_[b]) ? Array.isArray(d) && module$contents$jspb$internal_array_state_markRepeatedField(d) : this.internalExtensionObject_[b] = module$contents$jspb_EMPTY_LIST_SENTINEL);
    } };
module$exports$jspb.Message.prototype.getJsPbMessageId = function () { return this.constructor.messageId; };
var module$contents$jspb_EMPTY_LIST_SENTINEL = Object.freeze(module$contents$jspb$internal_newRepeatedField()), module$contents$jspb_initPivotAndExtensionObject = function (a, b) { var c = a.internalArray_.length, d = c - 1; if (c && (c = a.internalArray_[d], module$contents$jspb$internal_isExtensionObject(c))) {
    a.pivot_ = d - a.arrayIndexOffset;
    a.internalExtensionObject_ = c;
    return;
} void 0 !== b && -1 < b ? (a.pivot_ = Math.max(b, d + 1 - a.arrayIndexOffset), a.internalExtensionObject_ = null) : a.pivot_ = Number.MAX_VALUE; }, module$contents$jspb_maybeInitEmptyExtensionObject = function (a) { var b = a.pivot_ + a.arrayIndexOffset; a.internalArray_[b] || (module$contents$jspb$internal_isImmutableMessage(a) ? (a.internalExtensionObject_ = {}, Object.freeze(a.internalExtensionObject_)) : a.internalExtensionObject_ = a.internalArray_[b] = {}); };
module$exports$jspb.Message.prototype.internal_getField = function (a, b) { return -1 === a ? null : a >= this.pivot_ ? this.internalExtensionObject_ ? this.internalExtensionObject_[a] : void 0 : (void 0 === b ? 0 : b) && this.internalExtensionObject_ && this.internalExtensionObject_[a] ? this.internalExtensionObject_[a] : this.internalArray_[a + this.arrayIndexOffset]; };
module$exports$jspb.Message.prototype.internal_hasField = function (a) { return null != this.internal_getField(a); };
module$exports$jspb.Message.prototype.internal_hasOneofField = function (a, b) { return this.internal_computeOneofCase(b) === a; };
module$exports$jspb.Message.prototype.internal_getRepeatedField = function (a, b, c) {
    b = void 0 === b ? !0 : b;
    c = void 0 === c ? !1 : c;
    var d = this.internal_getField(a, c);
    null == d && (d = module$contents$jspb_EMPTY_LIST_SENTINEL);
    if (module$contents$jspb$internal_isImmutableMessage(this))
        b && (module$contents$jspb$internal_array_state_markArrayImmutable(d), Object.freeze(d));
    else if (d === module$contents$jspb_EMPTY_LIST_SENTINEL || module$contents$jspb$internal_array_state_isImmutableArray(d))
        d = module$contents$jspb$internal_array_state_markRepeatedField(d.slice()),
            this.internal_setField(a, d, c);
    return d;
};
module$exports$jspb.Message.prototype.internal_getFloatingPointField = function (a) { a = this.internal_getField(a); return null == a ? a : +a; };
module$exports$jspb.Message.prototype.internal_getBooleanField = function (a) { a = this.internal_getField(a); return null == a ? a : !!a; };
module$exports$jspb.Message.prototype.internal_getRepeatedFloatingPointField = function (a) { var b = this.internal_getRepeatedField(a, !1); this.convertedPrimitiveFields_ || (this.convertedPrimitiveFields_ = {}); if (!this.convertedPrimitiveFields_[a]) {
    for (var c = 0; c < b.length; c++)
        b[c] = +b[c];
    this.convertedPrimitiveFields_[a] = !0;
} module$contents$jspb$internal_isImmutableMessage(this) && Object.freeze(b); return b; };
module$exports$jspb.Message.prototype.internal_getRepeatedBooleanField = function (a) { var b = this.internal_getRepeatedField(a, !1); this.convertedPrimitiveFields_ || (this.convertedPrimitiveFields_ = {}); if (!this.convertedPrimitiveFields_[a]) {
    for (var c = 0; c < b.length; c++)
        b[c] = !!b[c];
    this.convertedPrimitiveFields_[a] = !0;
} module$contents$jspb$internal_isImmutableMessage(this) && Object.freeze(b); return b; };
module$exports$jspb.Message.prototype.internal_getFieldWithDefault = function (a, b) { a = this.internal_getField(a); return null == a ? b : a; };
module$exports$jspb.Message.prototype.internal_getBooleanFieldWithDefault = function (a, b) { a = this.internal_getBooleanField(a); return null == a ? void 0 === b ? !1 : b : a; };
module$exports$jspb.Message.prototype.internal_getFloatingPointFieldWithDefault = function (a, b) { a = this.internal_getFloatingPointField(a); return null == a ? void 0 === b ? 0 : b : a; };
function module$contents$jspb_getMapField(a, b, c, d, e) { if (null == b) {
    if (d)
        return;
    b = module$contents$jspb$internal_newRepeatedField();
} if (b.constructor === module$exports$jspb$map.Map)
    return b; b = new module$exports$jspb$map.Map(b, e); module$contents$jspb$internal_isImmutableMessage(a) && b.internalMarkImmutable(); a.internal_setField(c, b, !1, !0); return b; }
module$exports$jspb.Message.prototype.internal_getMapField = function (a, b, c) { return module$contents$jspb_getMapField(this, this.internal_getField(a), a, b, c); };
module$exports$jspb.Message.prototype.internal_getBytesMapField = function (a, b) { var c = this.internal_getField(a); if (Array.isArray(c) && c)
    for (var d = 0; d < c.length; d++)
        c[d][1] = module$contents$jspb$internal_bytesAsByteString(c[d][1]); return module$contents$jspb_getMapField(this, c, a, b); };
module$exports$jspb.Message.prototype.internal_clearMapField = function (a) { var b = this.internal_getField(a); b instanceof module$exports$jspb$map.Map ? b.clear() : this.internal_clearField(a); return this; };
module$exports$jspb.Message.prototype.internal_setField = function (a, b, c, d) { c = void 0 === c ? !1 : c; (void 0 === d ? 0 : d) || module$contents$jspb_checkNotImmutable(this); c || a >= this.pivot_ ? (module$contents$jspb_maybeInitEmptyExtensionObject(this), this.internalExtensionObject_[a] = b) : this.internalArray_[a + this.arrayIndexOffset] = b; return this; };
module$exports$jspb.Message.prototype.internal_setRepeatedField = function (a, b, c) { c = void 0 === c ? !1 : c; return this.internal_setField(a, null == b ? module$contents$jspb$internal_array_state_markRepeatedField([]) : Array.isArray(b) ? module$contents$jspb$internal_array_state_markRepeatedField(b) : b, c); };
module$exports$jspb.Message.prototype.internal_clearField = function (a, b) { return this.internal_setField(a, void 0, !1, void 0 === b ? !1 : b); };
module$exports$jspb.Message.prototype.internal_clearRepeatedField = function (a) { return this.internal_setField(a, module$contents$jspb_EMPTY_LIST_SENTINEL); };
module$exports$jspb.Message.prototype.internal_clearWrapperField = function (a) { return this.internal_setWrapperField(a, void 0); };
module$exports$jspb.Message.prototype.internal_clearRepeatedWrapperField = function (a) { return this.internal_setRepeatedWrapperField(a, void 0); };
function module$contents$jspb_setFieldIgnoringDefault(a, b, c, d) { goog.asserts.assertInstanceof(a, module$exports$jspb.Message); module$contents$jspb_checkNotImmutable(a); c !== d ? a.internal_setField(b, c) : a.internal_clearField(b); return a; }
module$exports$jspb.Message.prototype.internal_addToRepeatedField = function (a, b, c) { module$contents$jspb_checkNotImmutable(this); a = this.internal_getRepeatedField(a); void 0 != c ? a.splice(c, 0, b) : a.push(b); return this; };
module$exports$jspb.Message.prototype.internal_setOneofField = function (a, b, c) { module$contents$jspb_checkNotImmutable(this); (b = this.internal_computeOneofCase(b)) && b !== a && null != c && (this.internalWrappers_ && b in this.internalWrappers_ && (this.internalWrappers_[b] = void 0), this.internal_setField(b, void 0)); return this.internal_setField(a, c); };
module$exports$jspb.Message.prototype.internal_computeOneofCase = function (a) { for (var b = 0, c = 0; c < a.length; c++) {
    var d = a[c];
    null != this.internal_getField(d) && (0 !== b && this.internal_clearField(b, !0), b = d);
} return b; };
module$exports$jspb.Message.prototype.internal_getWrapperField = function (a, b, c, d) { if (-1 === b)
    return null; this.internalWrappers_ || (this.internalWrappers_ = {}); var e = this.internalWrappers_[b]; if (e)
    return e; d = this.internal_getField(b, void 0 === d ? !1 : d); if (null == d && !c)
    return e; a = new a(d); module$contents$jspb$internal_isImmutableMessage(this) && module$contents$jspb$internal_internalMarkMessageImmutable(a); return this.internalWrappers_[b] = a; };
module$exports$jspb.Message.prototype.internal_getRepeatedWrapperField = function (a, b, c) {
    c = void 0 === c ? !1 : c;
    this.internalWrappers_ || (this.internalWrappers_ = {});
    var d = module$contents$jspb$internal_isImmutableMessage(this), e = this.internalWrappers_[b];
    if (!e) {
        c = this.internal_getRepeatedField(b, !0, c);
        e = [];
        d = d || module$contents$jspb$internal_array_state_isImmutableArray(c);
        for (var f = 0; f < c.length; f++)
            e[f] = new a(c[f]), d && module$contents$jspb$internal_internalMarkMessageImmutable(e[f]);
        d && (module$contents$jspb$internal_array_state_markArrayImmutable(e),
            Object.freeze(e));
        this.internalWrappers_[b] = e;
    }
    return e;
};
module$exports$jspb.Message.prototype.internal_setWrapperField = function (a, b, c) { c = void 0 === c ? !1 : c; module$contents$jspb_checkNotImmutable(this); this.internalWrappers_ || (this.internalWrappers_ = {}); var d = b ? b.toArrayInternal() : b; this.internalWrappers_[a] = b; return this.internal_setField(a, d, c); };
module$exports$jspb.Message.prototype.internal_setOneofWrapperField = function (a, b, c) { module$contents$jspb_checkNotImmutable(this); this.internalWrappers_ || (this.internalWrappers_ = {}); var d = c ? c.toArrayInternal() : c; this.internalWrappers_[a] = c; return this.internal_setOneofField(a, b, d); };
module$exports$jspb.Message.prototype.internal_setRepeatedWrapperField = function (a, b, c) { c = void 0 === c ? !1 : c; module$contents$jspb_checkNotImmutable(this); if (b) {
    var d = module$contents$jspb$internal_newRepeatedField();
    for (var e = 0; e < b.length; e++)
        d[e] = b[e].toArrayInternal();
    this.internalWrappers_ || (this.internalWrappers_ = {});
    this.internalWrappers_[a] = b;
}
else
    this.internalWrappers_ && (this.internalWrappers_[a] = void 0), d = module$contents$jspb_EMPTY_LIST_SENTINEL; return this.internal_setField(a, d, c); };
module$exports$jspb.Message.prototype.internal_addAndReturnRepeatedWrapperField = function (a, b, c, d) { module$contents$jspb_checkNotImmutable(this); var e = this.internal_getRepeatedWrapperField(c, a); b = b ? b : new c; a = this.internal_getRepeatedField(a); void 0 != d ? (e.splice(d, 0, b), a.splice(d, 0, b.toArrayInternal())) : (e.push(b), a.push(b.toArrayInternal())); return b; };
module$exports$jspb.Message.prototype.internal_addToRepeatedWrapperField = function (a, b, c, d) { this.internal_addAndReturnRepeatedWrapperField(a, b, c, d); return this; };
module$exports$jspb.Message.prototype.toArray = function () { return this.toJSON(); };
module$exports$jspb.Message.prototype.toJsonValue = function () { return this.toJSON(); };
module$exports$jspb.Message.prototype.toJSON = function () { var a = module$contents$jspb_prepareForSerialize(this.toArrayInternal()); return module$contents$jspb$internal_inSerialize ? a : module$contents$jspb$internal_copy_cloneJspbObjectInternal(a, module$contents$jspb$internal_copy_convertToJsonFormat); };
module$exports$jspb.Message.prototype.toStructuredCloneableValue = function () { return module$contents$jspb$internal_copy_cloneJspbObjectInternal(this.toArrayInternal(), module$contents$jspb$internal_copy_convertToStructuredCloneableFormat); };
module$exports$jspb.Message.prototype.toArrayInternal = function () { return this.internalArray_; };
function module$contents$jspb_serializeSpecialValues(a, b) { return module$contents$jspb$internal_json_convertToJsonFormat(b); }
module$exports$jspb.Message.prototype.serialize = function () { module$contents$jspb$internal_inSerialize = !0; try {
    return JSON.stringify(this.toJSON(), module$contents$jspb_serializeSpecialValues);
}
finally {
    module$contents$jspb$internal_inSerialize = !1;
} };
var module$contents$jspb_prepareForSerialize = function (a) {
    if (module$exports$jspb$internal_options.SERIALIZE_EMPTY_TRAILING_FIELDS)
        return a;
    for (var b, c = a.length, d = !1, e, f = a.length; f--;) {
        var g = a[f];
        if (Array.isArray(g)) {
            var k = g;
            g = module$contents$jspb$internal_isEmptyRepeatedField(g) ? null : module$contents$jspb_prepareForSerialize(g);
            g != k && (d = !0);
        }
        else if (f === a.length - 1 && module$contents$jspb$internal_isExtensionObject(g)) {
            a: {
                k = e = void 0;
                var h = g;
                goog.asserts.assert(!module$exports$jspb$internal_options.SERIALIZE_EMPTY_TRAILING_FIELDS);
                var l = {}, m = !1;
                for (k in h)
                    if (module$contents$jspb$internal_hasOwnPropertyIfNotTrusted(h, k)) {
                        var n = h[k];
                        if (Array.isArray(n)) {
                            var p = n;
                            n = module$contents$jspb$internal_isEmptyRepeatedField(n) ? null : module$contents$jspb_prepareForSerialize(n);
                            n != p && (m = !0);
                        }
                        null != n ? l[k] = n : m = !0;
                    }
                if (m) {
                    for (e in l) {
                        e = l;
                        break a;
                    }
                    e = null;
                }
                else
                    e = h;
            }
            e != g && (d = !0);
            c--;
            continue;
        }
        null == g && c == f + 1 ? (d = !0, c--) : d && (b || (b = a.slice(0, c)), b[f] = g);
    }
    if (!d)
        return a;
    b || (b = a.slice(0, c));
    e && b.push(e);
    return b;
};
module$exports$jspb.Message.deserializeWithCtor = function (a, b) { a = module$contents$jspb$message_ctor_newMessage(a, b ? JSON.parse(b) : null); goog.asserts.assertInstanceof(a, module$exports$jspb.Message); return a; };
module$exports$jspb.Message.prototype.toString = function () { return this.toArrayInternal().toString(); };
module$exports$jspb.Message.prototype.getExtension = function (a) { var b = a.fieldIndex, c = a.ctor; return a.isRepeated ? c ? this.internal_getRepeatedWrapperField(c, b, !0) : this.internal_getRepeatedField(b, !0, !0) : c ? this.internal_getWrapperField(c, b, void 0, !0) : this.internal_getField(b, !0); };
module$exports$jspb.Message.prototype.setExtension = function (a, b) { module$contents$jspb_checkNotImmutable(this); var c = a.fieldIndex, d = a.ctor; return a.isRepeated ? d ? this.internal_setRepeatedWrapperField(c, b, !0) : this.internal_setRepeatedField(c, b, !0) : d ? this.internal_setWrapperField(c, b, !0) : this.internal_setField(c, b, !0); };
module$exports$jspb.Message.difference = function (a, b) { if (!(a instanceof b.constructor))
    throw Error("Messages have different types."); var c = a.toArrayInternal(); b = b.toArrayInternal(); var d = [], e = 0, f = c.length > b.length ? c.length : b.length; a.getJsPbMessageId() && (d[0] = a.getJsPbMessageId(), e = 1); for (; e < f; e++)
    module$contents$jspb$internal_compare_compareFields(c[e], b[e]) || (d[e] = b[e]); return module$contents$jspb$message_ctor_newMessage(a.constructor, d); };
module$exports$jspb.Message.equals = function (a, b) { return a == b || !(!a || !b) && a instanceof b.constructor && module$contents$jspb$internal_compare_compareFields(a.toArrayInternal(), b.toArrayInternal()); };
module$exports$jspb.Message.prototype.clone = function () { var a = goog.asserts.assertInstanceof(this, module$exports$jspb.Message), b = a.constructor, c = module$contents$jspb$internal_copy_cloneJspbObjectInternal(a.toArrayInternal(), module$contents$jspb$internal_copy_convertToJspbFormat); b = module$contents$jspb$message_ctor_newMessage(b, c); module$contents$jspb_copyUnknownFields(b, a); return b; };
function module$contents$jspb_clearMessage(a) {
    goog.asserts.assertInstanceof(a, module$exports$jspb.Message);
    module$contents$jspb_checkNotImmutable(a);
    for (var b = a.internalArray_, c = a.internalExtensionObject_, d = b.length + (null != c ? -1 : 0), e = null != a.getJsPbMessageId() ? 1 : 0; e < d; e++)
        b[e] = module$contents$jspb$internal_array_state_isRepeatedField(b[e]) ? module$contents$jspb_EMPTY_LIST_SENTINEL : void 0;
    if (c)
        for (var f in c)
            module$contents$jspb$internal_hasOwnPropertyIfNotTrusted(c, f) && (c[f] = module$contents$jspb$internal_array_state_isRepeatedField(c[f]) ?
                module$contents$jspb_EMPTY_LIST_SENTINEL : void 0);
    a.internalWrappers_ = null;
    a.convertedPrimitiveFields_ = null;
    delete a.internalUnknownFields_;
    return a;
}
function module$contents$jspb_copyUnknownFields(a, b) {
    goog.asserts.assert(a, "expected `to` to be non-null");
    goog.asserts.assert(b, "expected `from` to be non-null");
    b.internalUnknownFields_ && (a.internalUnknownFields_ = b.internalUnknownFields_.slice());
    var c = b.internalWrappers_;
    if (c) {
        b = b.internalExtensionObject_;
        for (var d in c)
            if (module$contents$jspb$internal_hasOwnPropertyIfNotTrusted(c, d)) {
                var e = c[d];
                if (e) {
                    var f = !(!b || !b[d]), g = +d;
                    if (Array.isArray(e)) {
                        if (e.length)
                            for (f = a.internal_getRepeatedWrapperField(e[0].constructor, g, f), g = 0; g < Math.min(f.length, e.length); g++)
                                module$contents$jspb_copyUnknownFields(f[g], goog.asserts.assertInstanceof(e[g], module$exports$jspb.Message));
                    }
                    else
                        goog.asserts.assertInstanceof(e, module$exports$jspb.Message), (f = a.internal_getWrapperField(e.constructor, g, void 0, f)) && module$contents$jspb_copyUnknownFields(f, e);
                }
            }
    }
}
var module$contents$jspb_checkNotImmutable = function (a) { if (module$contents$jspb$internal_options_freezerLoaded && module$contents$jspb$internal_isImmutableMessage(a))
    throw Error("Cannot mutate an immutable Message"); };
function module$contents$jspb_isOneofCase(a, b, c) { return a.internal_computeOneofCase(b) === c ? c : -1; }
module$exports$jspb.Message.prototype.internal_getIntegerFieldWithDefault = function (a, b) { return this.internal_getFieldWithDefault(a, void 0 === b ? 0 : b); };
module$exports$jspb.Message.prototype.internal_getIntegerInStringFieldWithDefault = function (a, b) { return this.internal_getFieldWithDefault(a, void 0 === b ? "0" : b); };
module$exports$jspb.Message.prototype.internal_getStringFieldWithDefault = function (a, b) { return this.internal_getFieldWithDefault(a, void 0 === b ? "" : b); };
module$exports$jspb.Message.prototype.internal_getOneofFieldWithDefault = function (a, b, c) { return this.internal_getFieldWithDefault(module$contents$jspb_isOneofCase(this, b, a), c); };
module$exports$jspb.Message.prototype.internal_getOneofBooleanFieldWithDefault = function (a, b, c) { return this.internal_getBooleanFieldWithDefault(module$contents$jspb_isOneofCase(this, b, a), c); };
module$exports$jspb.Message.prototype.internal_getOneofIntegerFieldWithDefault = function (a, b, c) { return this.internal_getIntegerFieldWithDefault(module$contents$jspb_isOneofCase(this, b, a), c); };
module$exports$jspb.Message.prototype.internal_getOneofIntegerInStringFieldWithDefault = function (a, b, c) { return this.internal_getIntegerInStringFieldWithDefault(module$contents$jspb_isOneofCase(this, b, a), c); };
module$exports$jspb.Message.prototype.internal_getOneofFloatingPointFieldWithDefault = function (a, b, c) { return this.internal_getFloatingPointFieldWithDefault(module$contents$jspb_isOneofCase(this, b, a), c); };
module$exports$jspb.Message.prototype.internal_getOneofStringFieldWithDefault = function (a, b, c) { return this.internal_getStringFieldWithDefault(module$contents$jspb_isOneofCase(this, b, a), c); };
module$exports$jspb.Message.prototype.internal_getOneofField = function (a, b) { return this.internal_getField(module$contents$jspb_isOneofCase(this, b, a)); };
module$exports$jspb.Message.prototype.internal_getOneofBooleanField = function (a, b) { return this.internal_getBooleanField(module$contents$jspb_isOneofCase(this, b, a)); };
module$exports$jspb.Message.prototype.internal_getOneofFloatingPointField = function (a, b) { return this.internal_getFloatingPointField(module$contents$jspb_isOneofCase(this, b, a)); };
module$exports$jspb.Message.prototype.internal_getOneofWrapperField = function (a, b, c) { return this.internal_getWrapperField(a, module$contents$jspb_isOneofCase(this, c, b)); };
module$exports$jspb.Message.prototype.internal_setProto3BooleanField = function (a, b) { return module$contents$jspb_setFieldIgnoringDefault(this, a, b, !1); };
module$exports$jspb.Message.prototype.internal_setProto3IntField = function (a, b) { return module$contents$jspb_setFieldIgnoringDefault(this, a, b, 0); };
module$exports$jspb.Message.prototype.internal_setProto3FloatField = function (a, b) { return module$contents$jspb_setFieldIgnoringDefault(this, a, b, 0); };
module$exports$jspb.Message.prototype.internal_setProto3StringField = function (a, b) { return module$contents$jspb_setFieldIgnoringDefault(this, a, b, ""); };
module$exports$jspb.Message.prototype.internal_setProto3EnumField = function (a, b) { return module$contents$jspb_setFieldIgnoringDefault(this, a, b, 0); };
module$exports$jspb.Message.prototype.internal_setProto3StringIntField = function (a, b) { goog.asserts.assertInstanceof(this, module$exports$jspb.Message); module$contents$jspb_checkNotImmutable(this); null != b && 0 !== +b ? this.internal_setField(a, b) : this.internal_clearField(a); return this; };
module$exports$jspb.Message.prototype.internal_setProto3BytesField = function (a, b) { goog.asserts.assertInstanceof(this, module$exports$jspb.Message); module$contents$jspb_checkNotImmutable(this); null != b && 0 !== b.length ? this.internal_setField(a, b) : this.internal_clearField(a); return this; };
module$exports$jspb.clearMessage = module$contents$jspb_clearMessage;
module$exports$jspb.copyMessage = function (a, b) {
    goog.asserts.assertInstanceof(a, module$exports$jspb.Message);
    goog.asserts.assertInstanceof(b, module$exports$jspb.Message);
    goog.asserts.assert(b.constructor == a.constructor, "Copy source and target message should have the same type.");
    module$contents$jspb_checkNotImmutable(a);
    var c = b.toArrayInternal(), d = a.internalArray_;
    d.length = c.length;
    for (var e = 0; e < c.length; e++)
        d[e] = module$contents$jspb$internal_copy_cloneJspbField(c[e]);
    a.internalWrappers_ = null;
    a.convertedPrimitiveFields_ =
        null;
    a.internalExtensionObject_ = null;
    module$contents$jspb_initPivotAndExtensionObject(a, a.pivot_);
    module$contents$jspb_copyUnknownFields(a, b);
    return a;
};
jspb.internal = {};
jspb.internal.binary = {};
function module$contents$jspb$internal$binary_newBinaryExtension(a, b, c, d, e, f, g) { return { fieldInfo: a, binaryReaderFn: b, binaryWriterFn: c, binaryMessageSerializeFn: d, binaryFieldsInitializer: e, messageSetReaderFn: f, messageSetExtensions: g }; }
jspb.internal.binary.createBinaryExtension = function (a, b, c, d, e) { return module$contents$jspb$internal$binary_newBinaryExtension(a, b, c, d, e); };
jspb.internal.binary.createBinaryMessageSetExtension = function (a, b, c, d, e) { return module$contents$jspb$internal$binary_newBinaryExtension(a, b, c, d, void 0, module$contents$jspb$internal$binary_readBinaryExtensionMessageSet, e); };
jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields = function (a, b, c) { b.writeUnknownFields(a); if (c)
    for (var d in c)
        if (module$contents$jspb$internal_hasOwnPropertyIfNotTrusted(c, d)) {
            var e = c[d];
            goog.asserts.assert(e.binaryWriterFn);
            e.binaryWriterFn(b, a, e.fieldInfo, e.binaryMessageSerializeFn);
        } };
jspb.internal.binary.writeMessageSetExt = function (a, b, c, d) { a.writeMessageSet(c.fieldIndex, b.getExtension(c), d); };
var module$contents$jspb$internal$binary_MESSAGE_SET_START_TAG = 8 + module$exports$jspb$BinaryConstants.WireType.START_GROUP, module$contents$jspb$internal$binary_MESSAGE_SET_END_TAG = 8 + module$exports$jspb$BinaryConstants.WireType.END_GROUP, module$contents$jspb$internal$binary_MESSAGE_SET_TYPE_ID_TAG = 16 + module$exports$jspb$BinaryConstants.WireType.VARINT, module$contents$jspb$internal$binary_MESSAGE_SET_MESSAGE_TAG = 24 + module$exports$jspb$BinaryConstants.WireType.DELIMITED, module$contents$jspb$internal$binary_readBinaryExtensionMessageSet = function (a, b, c) {
    goog.asserts.assertInstanceof(a, module$exports$jspb.Message);
    var d = a.constructor;
    d = d[module$contents$jspb$internal$binary_binaryFieldsCache] || (d[module$contents$jspb$internal$binary_binaryFieldsCache] = {});
    for (var e = {}; b.nextField() && !b.isEndGroup();) {
        if (b.getTag() === module$contents$jspb$internal$binary_MESSAGE_SET_START_TAG) {
            for (var f = b.getFieldCursor(), g = 0, k = null; b.nextField();)
                if (b.getTag() === module$contents$jspb$internal$binary_MESSAGE_SET_TYPE_ID_TAG)
                    g = b.readUint32();
                else if (b.getTag() ===
                    module$contents$jspb$internal$binary_MESSAGE_SET_MESSAGE_TAG)
                    k = b.readBytes();
                else if (b.getWireType() === module$exports$jspb$BinaryConstants.WireType.END_GROUP)
                    break;
                else
                    b.skipField();
            if (b.getTag() !== module$contents$jspb$internal$binary_MESSAGE_SET_END_TAG || null === k || 0 === g)
                throw Error("Malformed binary bytes for message set");
            var h = d[g];
            if (!h) {
                var l = c[g];
                l && (e.$jscomp$loop$prop$fieldInfo$55 = l.fieldInfo, e.$jscomp$loop$prop$deserializeBinaryFromReader$56 = module$contents$jspb$internal$binary_makeDeserializeBinaryFromReaderFromBinaryExtension(l),
                    h = d[g] = function (m) { return function (n, p) { return n.setExtension(m.$jscomp$loop$prop$fieldInfo$55, m.$jscomp$loop$prop$deserializeBinaryFromReader$56(new m.$jscomp$loop$prop$fieldInfo$55.ctor, new module$exports$jspb$binary$reader.BinaryReader(p))); }; }(e));
            }
            h ? h(a, k) : b.addUnknownFieldsStartingFrom(a, f);
        }
        else
            b.handleUnknownField(a);
        e = { $jscomp$loop$prop$fieldInfo$55: e.$jscomp$loop$prop$fieldInfo$55, $jscomp$loop$prop$deserializeBinaryFromReader$56: e.$jscomp$loop$prop$deserializeBinaryFromReader$56 };
    }
    return a;
};
jspb.internal.binary.readBinaryExtensionMessageSet = module$contents$jspb$internal$binary_readBinaryExtensionMessageSet;
function module$contents$jspb$internal$binary_writeMap(a, b, c, d, e, f) { (a = a.internal_getMapField(b, !0)) && a.forEach(function (g, k) { d.writeMessage(c, g, function (h, l) { e.call(l, 1, k); f.call(l, 2, g); }); }); }
function module$contents$jspb$internal$binary_writeMessageMap(a, b, c, d, e, f, g) { (a = a.internal_getMapField(b, !0, c)) && a.forEach(function (k, h) { e.writeMessage(d, k, function (l, m) { f.call(m, 1, h); m.writeMessage(2, k, g); }); }); }
var module$contents$jspb$internal$binary_primitiveMapEntry, module$contents$jspb$internal$binary_MapEntry = function () { module$exports$jspb.Message.call(this, null); };
$jscomp.inherits(module$contents$jspb$internal$binary_MapEntry, module$exports$jspb.Message);
module$contents$jspb$internal$binary_MapEntry.prototype.applyToMap = function (a, b, c) { a.set(this.internal_getFieldWithDefault(1, b), this.internal_getFieldWithDefault(2, c)); };
module$contents$jspb$internal$binary_MapEntry.prototype.applyToMessageValuedMap = function (a, b, c) { a.set(this.internal_getFieldWithDefault(1, b), this.internal_getWrapperField(c, 2) || new c); };
module$contents$jspb$internal$binary_MapEntry.prototype.applyToBytesValuedMap = function (a, b) { a.set(this.internal_getFieldWithDefault(1, b), module$contents$jspb$internal_bytesAsByteString(this.internal_getFieldWithDefault(2, module$exports$jspb$bytestring.ByteString.empty()))); };
goog.asserts.ENABLE_ASSERTS && (module$contents$jspb$internal$binary_MapEntry.prototype[module$exports$jspb$internal.EXEMPTED_SUBCLASS_MARKER] = !0);
function module$contents$jspb$internal$binary_readMessageMapEntry(a, b, c, d, e, f, g) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; var k = new module$contents$jspb$internal$binary_MapEntry; a.readMessage(k, function (h, l) { for (; l.nextField();) {
    var m = l.getFieldNumber();
    1 === m ? e(l, h, 1) : 2 === m && jspb.internal.binary.readMessage(l, h, 2, d, g);
} }); k.applyToMessageValuedMap(goog.asserts.assert(b.internal_getMapField(c, !1, d)), f, d); return !0; }
function module$contents$jspb$internal$binary_readMapEntry(a, b, c, d, e, f, g) {
    if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
        return !1;
    void 0 === module$contents$jspb$internal$binary_primitiveMapEntry ? module$contents$jspb$internal$binary_primitiveMapEntry = new module$contents$jspb$internal$binary_MapEntry : module$contents$jspb_clearMessage(module$contents$jspb$internal$binary_primitiveMapEntry);
    a.readMessage(module$contents$jspb$internal$binary_primitiveMapEntry, function (k, h) {
        for (; h.nextField();) {
            var l = h.getFieldNumber();
            1 === l ? d(h, k, 1) : 2 === l && e(h, k, 2);
        }
    });
    a = goog.asserts.assert(b.internal_getMapField(c, !1));
    g === module$exports$jspb$bytestring.ByteString.empty() ? module$contents$jspb$internal$binary_primitiveMapEntry.applyToBytesValuedMap(a, f) : module$contents$jspb$internal$binary_primitiveMapEntry.applyToMap(a, f, g);
    return !0;
}
var module$contents$jspb$internal$binary_deserializeBinaryFromReaderCache = goog.DEBUG ? Symbol("deserializeBinaryFromReaderCache") : Symbol();
function module$contents$jspb$internal$binary_makeDeserializeBinaryFromReaderFromMessageSetAndReader(a, b, c) { goog.asserts.assertFunction(b); goog.asserts.assertObject(c); return a[module$contents$jspb$internal$binary_deserializeBinaryFromReaderCache] || (a[module$contents$jspb$internal$binary_deserializeBinaryFromReaderCache] = function (d, e) { return b(d, e, c); }); }
function module$contents$jspb$internal$binary_makeDeserializeBinaryFromReaderFromBinaryFields(a) { var b = a[module$contents$jspb$internal$binary_deserializeBinaryFromReaderCache]; if (!b) {
    var c = module$contents$jspb$internal$binary_getBinaryFields(a);
    b = function (d, e) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGenericImpl(d, e, c); };
    a[module$contents$jspb$internal$binary_deserializeBinaryFromReaderCache] = b;
} return b; }
function module$contents$jspb$internal$binary_makeDeserializeBinaryFromReaderFromBinaryExtension(a) {
    var b = a.binaryFieldsInitializer;
    goog.DEBUG && delete a.binaryFieldsInitializer;
    if (b)
        return module$contents$jspb$internal$binary_makeDeserializeBinaryFromReaderFromBinaryFields(b);
    b = a.messageSetReaderFn;
    goog.DEBUG && delete a.messageSetReaderFn;
    if (b) {
        var c = goog.asserts.assert(a.messageSetExtensions);
        delete a.messageSetExtensions;
        return module$contents$jspb$internal$binary_makeDeserializeBinaryFromReaderFromMessageSetAndReader(goog.asserts.assert(a.fieldInfo.ctor), b, c);
    }
}
function module$contents$jspb$internal$binary_makeParserFromBinaryExtension(a) { var b = module$contents$jspb$internal$binary_makeDeserializeBinaryFromReaderFromBinaryExtension(a), c = a.fieldInfo, d = goog.asserts.assert(a.binaryReaderFn); goog.DEBUG && delete a.binaryReaderFn; return b ? function (e, f) { return d(e, f, c, b); } : function (e, f) { return d(e, f, c); }; }
var module$contents$jspb$internal$binary_makeParserFromArray = function (a) {
    var b = a[0];
    switch (a.length) {
        case 2:
            var c = a[1];
            goog.asserts.assertArray(c);
            return function (t, v, u) { return b(t, v, u, c); };
        case 3:
            goog.asserts.assert(5 === b.length);
            var d = a[1];
            a = a[2];
            goog.asserts.assertFunction(d);
            var e = module$contents$jspb$internal$binary_makeDeserializeBinaryFromReaderFromBinaryFields(a);
            return function (t, v, u) { return b(t, v, u, d, e); };
        case 4:
            goog.asserts.assert(6 === b.length);
            var f = a[1], g = a[2], k = a[3];
            goog.asserts.assertFunction(f);
            var h = module$contents$jspb$internal$binary_makeDeserializeBinaryFromReaderFromBinaryFields(g);
            goog.asserts.assertArray(k);
            return function (t, v, u) { return b(t, v, u, f, h, k); };
        case 5:
            goog.asserts.assert(5 === b.length);
            var l = a[1];
            g = a[3];
            var m = a[4];
            goog.asserts.assert(void 0 === a[2]);
            goog.asserts.assertFunction(l);
            var n = module$contents$jspb$internal$binary_makeDeserializeBinaryFromReaderFromMessageSetAndReader(l, g, m);
            return function (t, v, u) { return b(t, v, u, l, n); };
        case 6:
            goog.asserts.assert(6 === b.length);
            var p = a[1];
            g = a[3];
            m = a[4];
            var q = a[5];
            goog.asserts.assert(void 0 === a[2]);
            goog.asserts.assertFunction(p);
            goog.asserts.assertArray(q);
            var r = module$contents$jspb$internal$binary_makeDeserializeBinaryFromReaderFromMessageSetAndReader(p, g, m);
            return function (t, v, u) { return b(t, v, u, p, r, q); };
        default: throw Error("Unsupported number of parameters, expected [2-6], got " + a.length);
    }
}, module$contents$jspb$internal$binary_binaryFieldsCache = goog.DEBUG ? Symbol("binaryFieldsCache") : Symbol();
function module$contents$jspb$internal$binary_getBinaryFields(a) { goog.asserts.assertFunction(a); goog.asserts.assert(0 === a.length); return a[module$contents$jspb$internal$binary_binaryFieldsCache] || (a[module$contents$jspb$internal$binary_binaryFieldsCache] = goog.asserts.assertObject(a())); }
var module$contents$jspb$internal$binary_deserializeBinaryFromReaderGenericImpl = function (a, b, c) { for (; b.nextField() && !b.isEndGroup();) {
    var d = b.getFieldNumber(), e = c[d];
    if (e)
        Array.isArray(e) && (e = c[d] = module$contents$jspb$internal$binary_makeParserFromArray(e));
    else {
        var f = c[0];
        f && (f = f[d]) && (e = c[d] = module$contents$jspb$internal$binary_makeParserFromBinaryExtension(f));
    }
    e && e(b, a, d) || b.handleUnknownField(a);
} return a; }, module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric = function (a, b, c) {
    return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGenericImpl(a, b, module$contents$jspb$internal$binary_getBinaryFields(c));
};
jspb.internal.binary.deserializeBinaryFromReaderGeneric = module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric;
jspb.internal.binary.serializeBinary = function (a, b) { var c = new module$exports$jspb$binary$writer.BinaryWriter; b(a, c); return c.getResultBuffer(); };
jspb.internal.binary.deserializeBinary = function (a, b, c) { a = module$exports$jspb$binary$reader.BinaryReader.alloc(a); try {
    return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(new b, a, c);
}
finally {
    a.free();
} };
jspb.internal.binary.deserializeBinaryMessageSet = function (a, b, c) { a = module$exports$jspb$binary$reader.BinaryReader.alloc(a); try {
    return module$contents$jspb$internal$binary_readBinaryExtensionMessageSet(new b, a, c);
}
finally {
    a.free();
} };
jspb.internal.binary.writeDoubleExt = function (a, b, c) { a.writeDouble(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedDoubleExt = function (a, b, c) { a.writeRepeatedDouble(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedDoubleExt = function (a, b, c) { a.writePackedDouble(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeDouble = function (a, b, c) { a.writeDouble(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedDouble = function (a, b, c) { a.writeRepeatedDouble(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedDouble = function (a, b, c) { a.writePackedDouble(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeFloatExt = function (a, b, c) { a.writeFloat(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedFloatExt = function (a, b, c) { a.writeRepeatedFloat(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedFloatExt = function (a, b, c) { a.writePackedFloat(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeFloat = function (a, b, c) { a.writeFloat(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedFloat = function (a, b, c) { a.writeRepeatedFloat(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedFloat = function (a, b, c) { a.writePackedFloat(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeInt64StringExt = function (a, b, c) { a.writeInt64String(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedInt64StringExt = function (a, b, c) { a.writeRepeatedInt64String(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedInt64StringExt = function (a, b, c) { a.writePackedInt64String(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeInt64Ext = function (a, b, c) { a.writeInt64(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedInt64Ext = function (a, b, c) { a.writeRepeatedInt64(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedInt64Ext = function (a, b, c) { a.writePackedInt64(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeInt64String = function (a, b, c) { a.writeInt64String(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedInt64String = function (a, b, c) { a.writeRepeatedInt64String(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedInt64String = function (a, b, c) { a.writePackedInt64String(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeInt64 = function (a, b, c) { a.writeInt64(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedInt64 = function (a, b, c) { a.writeRepeatedInt64(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedInt64 = function (a, b, c) { a.writePackedInt64(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeUint64StringExt = function (a, b, c) { a.writeUint64String(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedUint64StringExt = function (a, b, c) { a.writeRepeatedUint64String(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedUint64StringExt = function (a, b, c) { a.writePackedUint64String(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeUint64Ext = function (a, b, c) { a.writeUint64(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedUint64Ext = function (a, b, c) { a.writeRepeatedUint64(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedUint64Ext = function (a, b, c) { a.writePackedUint64(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeUint64String = function (a, b, c) { a.writeUint64String(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedUint64String = function (a, b, c) { a.writeRepeatedUint64String(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedUint64String = function (a, b, c) { a.writePackedUint64String(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeUint64 = function (a, b, c) { a.writeUint64(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedUint64 = function (a, b, c) { a.writeRepeatedUint64(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedUint64 = function (a, b, c) { a.writePackedUint64(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeInt32Ext = function (a, b, c) { a.writeInt32(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedInt32Ext = function (a, b, c) { a.writeRepeatedInt32(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedInt32Ext = function (a, b, c) { a.writePackedInt32(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeInt32 = function (a, b, c) { a.writeInt32(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedInt32 = function (a, b, c) { a.writeRepeatedInt32(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedInt32 = function (a, b, c) { a.writePackedInt32(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeFixed64StringExt = function (a, b, c) { a.writeFixed64String(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedFixed64StringExt = function (a, b, c) { a.writeRepeatedFixed64String(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedFixed64StringExt = function (a, b, c) { a.writePackedFixed64String(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeFixed64Ext = function (a, b, c) { a.writeFixed64(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedFixed64Ext = function (a, b, c) { a.writeRepeatedFixed64(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedFixed64Ext = function (a, b, c) { a.writePackedFixed64(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeFixed64String = function (a, b, c) { a.writeFixed64String(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedFixed64String = function (a, b, c) { a.writeRepeatedFixed64String(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedFixed64String = function (a, b, c) { a.writePackedFixed64String(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeFixed64 = function (a, b, c) { a.writeFixed64(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedFixed64 = function (a, b, c) { a.writeRepeatedFixed64(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedFixed64 = function (a, b, c) { a.writePackedFixed64(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeFixed32Ext = function (a, b, c) { a.writeFixed32(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedFixed32Ext = function (a, b, c) { a.writeRepeatedFixed32(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedFixed32Ext = function (a, b, c) { a.writePackedFixed32(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeFixed32 = function (a, b, c) { a.writeFixed32(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedFixed32 = function (a, b, c) { a.writeRepeatedFixed32(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedFixed32 = function (a, b, c) { a.writePackedFixed32(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeBoolExt = function (a, b, c) { a.writeBool(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedBoolExt = function (a, b, c) { a.writeRepeatedBool(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedBoolExt = function (a, b, c) { a.writePackedBool(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeBool = function (a, b, c) { a.writeBool(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedBool = function (a, b, c) { a.writeRepeatedBool(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedBool = function (a, b, c) { a.writePackedBool(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeStringExt = function (a, b, c) { a.writeString(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedStringExt = function (a, b, c) { a.writeRepeatedString(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeString = function (a, b, c) { a.writeString(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedString = function (a, b, c) { a.writeRepeatedString(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeGroupExt = function (a, b, c, d) { a.writeGroup(c.fieldIndex, b.getExtension(c), d); };
jspb.internal.binary.writeRepeatedGroupExt = function (a, b, c, d) { a.writeRepeatedGroup(c.fieldIndex, b.getExtension(c), d); };
jspb.internal.binary.writeGroup = function (a, b, c, d, e) { a.writeGroup(c, b.internal_getWrapperField(d, c), e); };
jspb.internal.binary.writeRepeatedGroup = function (a, b, c, d, e) { a.writeRepeatedGroup(c, b.internal_getRepeatedWrapperField(d, c), e); };
jspb.internal.binary.writeMessageExt = function (a, b, c, d) { a.writeMessage(c.fieldIndex, b.getExtension(c), d); };
jspb.internal.binary.writeRepeatedMessageExt = function (a, b, c, d) { a.writeRepeatedMessage(c.fieldIndex, b.getExtension(c), d); };
jspb.internal.binary.writeMessage = function (a, b, c, d, e) { a.writeMessage(c, b.internal_getWrapperField(d, c), e); };
jspb.internal.binary.writeRepeatedMessage = function (a, b, c, d, e) { a.writeRepeatedMessage(c, b.internal_getRepeatedWrapperField(d, c), e); };
jspb.internal.binary.writeBytesExt = function (a, b, c) { a.writeBytes(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedBytesExt = function (a, b, c) { a.writeRepeatedBytes(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeBytes = function (a, b, c) { a.writeBytes(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedBytes = function (a, b, c) { a.writeRepeatedBytes(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeUint32Ext = function (a, b, c) { a.writeUint32(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedUint32Ext = function (a, b, c) { a.writeRepeatedUint32(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedUint32Ext = function (a, b, c) { a.writePackedUint32(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeUint32 = function (a, b, c) { a.writeUint32(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedUint32 = function (a, b, c) { a.writeRepeatedUint32(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedUint32 = function (a, b, c) { a.writePackedUint32(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeEnumExt = function (a, b, c) { a.writeEnum(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedEnumExt = function (a, b, c) { a.writeRepeatedEnum(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedEnumExt = function (a, b, c) { a.writePackedEnum(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeEnum = function (a, b, c) { a.writeEnum(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedEnum = function (a, b, c) { a.writeRepeatedEnum(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedEnum = function (a, b, c) { a.writePackedEnum(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeSfixed32Ext = function (a, b, c) { a.writeSfixed32(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedSfixed32Ext = function (a, b, c) { a.writeRepeatedSfixed32(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedSfixed32Ext = function (a, b, c) { a.writePackedSfixed32(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeSfixed32 = function (a, b, c) { a.writeSfixed32(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedSfixed32 = function (a, b, c) { a.writeRepeatedSfixed32(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedSfixed32 = function (a, b, c) { a.writePackedSfixed32(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeSfixed64StringExt = function (a, b, c) { a.writeSfixed64String(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedSfixed64StringExt = function (a, b, c) { a.writeRepeatedSfixed64String(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedSfixed64StringExt = function (a, b, c) { a.writePackedSfixed64String(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeSfixed64Ext = function (a, b, c) { a.writeSfixed64(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedSfixed64Ext = function (a, b, c) { a.writeRepeatedSfixed64(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedSfixed64Ext = function (a, b, c) { a.writePackedSfixed64(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeSfixed64String = function (a, b, c) { a.writeSfixed64String(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedSfixed64String = function (a, b, c) { a.writeRepeatedSfixed64String(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedSfixed64String = function (a, b, c) { a.writePackedSfixed64String(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeSfixed64 = function (a, b, c) { a.writeSfixed64(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedSfixed64 = function (a, b, c) { a.writeRepeatedSfixed64(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedSfixed64 = function (a, b, c) { a.writePackedSfixed64(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeSint32Ext = function (a, b, c) { a.writeSint32(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedSint32Ext = function (a, b, c) { a.writeRepeatedSint32(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedSint32Ext = function (a, b, c) { a.writePackedSint32(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeSint32 = function (a, b, c) { a.writeSint32(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedSint32 = function (a, b, c) { a.writeRepeatedSint32(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedSint32 = function (a, b, c) { a.writePackedSint32(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeSint64StringExt = function (a, b, c) { a.writeSint64String(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedSint64StringExt = function (a, b, c) { a.writeRepeatedSint64String(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedSint64StringExt = function (a, b, c) { a.writePackedSint64String(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeSint64Ext = function (a, b, c) { a.writeSint64(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeRepeatedSint64Ext = function (a, b, c) { a.writeRepeatedSint64(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writePackedSint64Ext = function (a, b, c) { a.writePackedSint64(c.fieldIndex, b.getExtension(c)); };
jspb.internal.binary.writeSint64String = function (a, b, c) { a.writeSint64String(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedSint64String = function (a, b, c) { a.writeRepeatedSint64String(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedSint64String = function (a, b, c) { a.writePackedSint64String(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writeSint64 = function (a, b, c) { a.writeSint64(c, b.internal_getField(c)); };
jspb.internal.binary.writeRepeatedSint64 = function (a, b, c) { a.writeRepeatedSint64(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.writePackedSint64 = function (a, b, c) { a.writePackedSint64(c, b.internal_getRepeatedField(c)); };
jspb.internal.binary.readDoubleExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.setExtension(c, a.readDouble()); return !0; };
jspb.internal.binary.readPackableDoubleIntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64 && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableDoubleInto(b.getExtension(c)); return !0; };
jspb.internal.binary.readDouble = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.internal_setField(c, a.readDouble()); return !0; };
jspb.internal.binary.readPackableDoubleInto = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64 && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableDoubleInto(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readDoubleIgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.internal_setProto3FloatField(c, a.readDouble()); return !0; };
jspb.internal.binary.readDoubleOneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.internal_setOneofField(c, d, a.readDouble()); return !0; };
jspb.internal.binary.readFloatExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32)
    return !1; b.setExtension(c, a.readFloat()); return !0; };
jspb.internal.binary.readPackableFloatIntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32 && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableFloatInto(b.getExtension(c)); return !0; };
jspb.internal.binary.readFloat = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32)
    return !1; b.internal_setField(c, a.readFloat()); return !0; };
jspb.internal.binary.readPackableFloatInto = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32 && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableFloatInto(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readFloatIgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32)
    return !1; b.internal_setProto3FloatField(c, a.readFloat()); return !0; };
jspb.internal.binary.readFloatOneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32)
    return !1; b.internal_setOneofField(c, d, a.readFloat()); return !0; };
jspb.internal.binary.readInt64StringExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.setExtension(c, a.readInt64String()); return !0; };
jspb.internal.binary.readPackableInt64StringIntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableInt64StringInto(b.getExtension(c)); return !0; };
jspb.internal.binary.readInt64Ext = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.setExtension(c, a.readInt64()); return !0; };
jspb.internal.binary.readPackableInt64IntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableInt64Into(b.getExtension(c)); return !0; };
jspb.internal.binary.readInt64String = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setField(c, a.readInt64String()); return !0; };
jspb.internal.binary.readPackableInt64StringInto = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableInt64StringInto(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readInt64StringIgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setProto3StringIntField(c, a.readInt64String()); return !0; };
jspb.internal.binary.readInt64StringOneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setOneofField(c, d, a.readInt64String()); return !0; };
jspb.internal.binary.readInt64 = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setField(c, a.readInt64()); return !0; };
jspb.internal.binary.readPackableInt64Into = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableInt64Into(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readInt64IgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setProto3IntField(c, a.readInt64()); return !0; };
jspb.internal.binary.readInt64Oneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setOneofField(c, d, a.readInt64()); return !0; };
jspb.internal.binary.readUint64StringExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.setExtension(c, a.readUint64String()); return !0; };
jspb.internal.binary.readPackableUint64StringIntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableUint64StringInto(b.getExtension(c)); return !0; };
jspb.internal.binary.readUint64Ext = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.setExtension(c, a.readUint64()); return !0; };
jspb.internal.binary.readPackableUint64IntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableUint64Into(b.getExtension(c)); return !0; };
jspb.internal.binary.readUint64String = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setField(c, a.readUint64String()); return !0; };
jspb.internal.binary.readPackableUint64StringInto = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableUint64StringInto(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readUint64StringIgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setProto3StringIntField(c, a.readUint64String()); return !0; };
jspb.internal.binary.readUint64StringOneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setOneofField(c, d, a.readUint64String()); return !0; };
jspb.internal.binary.readUint64 = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setField(c, a.readUint64()); return !0; };
jspb.internal.binary.readPackableUint64Into = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableUint64Into(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readUint64IgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setProto3IntField(c, a.readUint64()); return !0; };
jspb.internal.binary.readUint64Oneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setOneofField(c, d, a.readUint64()); return !0; };
jspb.internal.binary.readInt32Ext = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.setExtension(c, a.readInt32()); return !0; };
jspb.internal.binary.readPackableInt32IntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableInt32Into(b.getExtension(c)); return !0; };
jspb.internal.binary.readInt32 = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setField(c, a.readInt32()); return !0; };
jspb.internal.binary.readPackableInt32Into = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableInt32Into(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readInt32IgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setProto3IntField(c, a.readInt32()); return !0; };
jspb.internal.binary.readInt32Oneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setOneofField(c, d, a.readInt32()); return !0; };
jspb.internal.binary.readFixed64StringExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.setExtension(c, a.readFixed64String()); return !0; };
jspb.internal.binary.readPackableFixed64StringIntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64 && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableFixed64StringInto(b.getExtension(c)); return !0; };
jspb.internal.binary.readFixed64Ext = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.setExtension(c, a.readFixed64()); return !0; };
jspb.internal.binary.readPackableFixed64IntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64 && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableFixed64Into(b.getExtension(c)); return !0; };
jspb.internal.binary.readFixed64String = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.internal_setField(c, a.readFixed64String()); return !0; };
jspb.internal.binary.readPackableFixed64StringInto = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64 && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableFixed64StringInto(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readFixed64StringIgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.internal_setProto3StringIntField(c, a.readFixed64String()); return !0; };
jspb.internal.binary.readFixed64StringOneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.internal_setOneofField(c, d, a.readFixed64String()); return !0; };
jspb.internal.binary.readFixed64 = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.internal_setField(c, a.readFixed64()); return !0; };
jspb.internal.binary.readPackableFixed64Into = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64 && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableFixed64Into(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readFixed64IgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.internal_setProto3IntField(c, a.readFixed64()); return !0; };
jspb.internal.binary.readFixed64Oneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.internal_setOneofField(c, d, a.readFixed64()); return !0; };
jspb.internal.binary.readFixed32Ext = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32)
    return !1; b.setExtension(c, a.readFixed32()); return !0; };
jspb.internal.binary.readPackableFixed32IntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32 && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableFixed32Into(b.getExtension(c)); return !0; };
jspb.internal.binary.readFixed32 = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32)
    return !1; b.internal_setField(c, a.readFixed32()); return !0; };
jspb.internal.binary.readPackableFixed32Into = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32 && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableFixed32Into(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readFixed32IgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32)
    return !1; b.internal_setProto3IntField(c, a.readFixed32()); return !0; };
jspb.internal.binary.readFixed32Oneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32)
    return !1; b.internal_setOneofField(c, d, a.readFixed32()); return !0; };
jspb.internal.binary.readBoolExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.setExtension(c, a.readBool()); return !0; };
jspb.internal.binary.readPackableBoolIntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableBoolInto(b.getExtension(c)); return !0; };
jspb.internal.binary.readBool = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setField(c, a.readBool()); return !0; };
jspb.internal.binary.readPackableBoolInto = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableBoolInto(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readBoolIgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setProto3BooleanField(c, a.readBool()); return !0; };
jspb.internal.binary.readBoolOneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setOneofField(c, d, a.readBool()); return !0; };
jspb.internal.binary.readStringRequireUtf8Ext = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.setExtension(c, a.readStringRequireUtf8()); return !0; };
jspb.internal.binary.readRepeatedStringRequireUtf8Ext = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.getExtension(c).push(a.readStringRequireUtf8()); return !0; };
jspb.internal.binary.readStringRequireUtf8 = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.internal_setField(c, a.readStringRequireUtf8()); return !0; };
jspb.internal.binary.readRepeatedStringRequireUtf8 = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.internal_addToRepeatedField(c, a.readStringRequireUtf8()); return !0; };
jspb.internal.binary.readStringRequireUtf8IgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.internal_setProto3StringField(c, a.readStringRequireUtf8()); return !0; };
jspb.internal.binary.readStringRequireUtf8Oneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.internal_setOneofField(c, d, a.readStringRequireUtf8()); return !0; };
jspb.internal.binary.readStringExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.setExtension(c, a.readString()); return !0; };
jspb.internal.binary.readRepeatedStringExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.getExtension(c).push(a.readString()); return !0; };
jspb.internal.binary.readString = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.internal_setField(c, a.readString()); return !0; };
jspb.internal.binary.readRepeatedString = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.internal_addToRepeatedField(c, a.readString()); return !0; };
jspb.internal.binary.readStringOneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.internal_setOneofField(c, d, a.readString()); return !0; };
jspb.internal.binary.readGroupExt = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.START_GROUP)
    return !1; b.setExtension(c, a.readGroup(c.fieldIndex, new c.ctor, d)); return !0; };
jspb.internal.binary.readRepeatedGroupExt = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.START_GROUP)
    return !1; var e = b.getExtension(c); e.push(a.readGroup(c.fieldIndex, new c.ctor, d)); b.setExtension(c, e); return !0; };
jspb.internal.binary.readGroup = function (a, b, c, d, e) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.START_GROUP)
    return !1; b.internal_setWrapperField(c, a.readGroup(c, new d, e)); return !0; };
jspb.internal.binary.readRepeatedGroup = function (a, b, c, d, e) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.START_GROUP)
    return !1; b.internal_addToRepeatedWrapperField(c, a.readGroup(c, new d, e), d); return !0; };
jspb.internal.binary.readGroupOneof = function (a, b, c, d, e, f) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.START_GROUP)
    return !1; b.internal_setOneofWrapperField(c, f, a.readGroup(c, new d, e)); return !0; };
jspb.internal.binary.readMessageExt = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.setExtension(c, a.readMessage(new c.ctor, d)); return !0; };
jspb.internal.binary.readRepeatedMessageExt = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; var e = b.getExtension(c); e.push(a.readMessage(new c.ctor, d)); b.setExtension(c, e); return !0; };
jspb.internal.binary.readMessage = function (a, b, c, d, e) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.internal_setWrapperField(c, a.readMessage(new d, e)); return !0; };
jspb.internal.binary.readRepeatedMessage = function (a, b, c, d, e) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.internal_addToRepeatedWrapperField(c, a.readMessage(new d, e), d); return !0; };
jspb.internal.binary.readMessageOneof = function (a, b, c, d, e, f) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.internal_setOneofWrapperField(c, f, a.readMessage(new d, e)); return !0; };
jspb.internal.binary.readBytesExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.setExtension(c, a.readBytes()); return !0; };
jspb.internal.binary.readRepeatedBytesExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.getExtension(c).push(a.readBytes()); return !0; };
jspb.internal.binary.readBytes = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.internal_setField(c, a.readBytes()); return !0; };
jspb.internal.binary.readRepeatedBytes = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.internal_addToRepeatedField(c, a.readBytes()); return !0; };
jspb.internal.binary.readBytesIgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.internal_setProto3BytesField(c, a.readBytes()); return !0; };
jspb.internal.binary.readBytesOneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; b.internal_setOneofField(c, d, a.readBytes()); return !0; };
jspb.internal.binary.readUint32Ext = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.setExtension(c, a.readUint32()); return !0; };
jspb.internal.binary.readPackableUint32IntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableUint32Into(b.getExtension(c)); return !0; };
jspb.internal.binary.readUint32 = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setField(c, a.readUint32()); return !0; };
jspb.internal.binary.readPackableUint32Into = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableUint32Into(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readUint32IgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setProto3IntField(c, a.readUint32()); return !0; };
jspb.internal.binary.readUint32Oneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setOneofField(c, d, a.readUint32()); return !0; };
jspb.internal.binary.readEnumExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.setExtension(c, a.readEnum()); return !0; };
jspb.internal.binary.readPackableEnumIntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableEnumInto(b.getExtension(c)); return !0; };
jspb.internal.binary.readEnum = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setField(c, a.readEnum()); return !0; };
jspb.internal.binary.readPackableEnumInto = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableEnumInto(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readEnumIgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setProto3EnumField(c, a.readEnum()); return !0; };
jspb.internal.binary.readEnumOneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setOneofField(c, d, a.readEnum()); return !0; };
jspb.internal.binary.readSfixed32Ext = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32)
    return !1; b.setExtension(c, a.readSfixed32()); return !0; };
jspb.internal.binary.readPackableSfixed32IntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32 && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableSfixed32Into(b.getExtension(c)); return !0; };
jspb.internal.binary.readSfixed32 = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32)
    return !1; b.internal_setField(c, a.readSfixed32()); return !0; };
jspb.internal.binary.readPackableSfixed32Into = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32 && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableSfixed32Into(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readSfixed32IgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32)
    return !1; b.internal_setProto3IntField(c, a.readSfixed32()); return !0; };
jspb.internal.binary.readSfixed32Oneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED32)
    return !1; b.internal_setOneofField(c, d, a.readSfixed32()); return !0; };
jspb.internal.binary.readSfixed64StringExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.setExtension(c, a.readSfixed64String()); return !0; };
jspb.internal.binary.readPackableSfixed64StringIntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64 && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableSfixed64StringInto(b.getExtension(c)); return !0; };
jspb.internal.binary.readSfixed64Ext = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.setExtension(c, a.readSfixed64()); return !0; };
jspb.internal.binary.readPackableSfixed64IntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64 && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableSfixed64Into(b.getExtension(c)); return !0; };
jspb.internal.binary.readSfixed64String = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.internal_setField(c, a.readSfixed64String()); return !0; };
jspb.internal.binary.readPackableSfixed64StringInto = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64 && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableSfixed64StringInto(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readSfixed64StringIgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.internal_setProto3StringIntField(c, a.readSfixed64String()); return !0; };
jspb.internal.binary.readSfixed64StringOneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.internal_setOneofField(c, d, a.readSfixed64String()); return !0; };
jspb.internal.binary.readSfixed64 = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.internal_setField(c, a.readSfixed64()); return !0; };
jspb.internal.binary.readPackableSfixed64Into = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64 && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableSfixed64Into(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readSfixed64IgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.internal_setProto3IntField(c, a.readSfixed64()); return !0; };
jspb.internal.binary.readSfixed64Oneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.FIXED64)
    return !1; b.internal_setOneofField(c, d, a.readSfixed64()); return !0; };
jspb.internal.binary.readSint32Ext = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.setExtension(c, a.readSint32()); return !0; };
jspb.internal.binary.readPackableSint32IntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableSint32Into(b.getExtension(c)); return !0; };
jspb.internal.binary.readSint32 = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setField(c, a.readSint32()); return !0; };
jspb.internal.binary.readPackableSint32Into = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableSint32Into(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readSint32IgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setProto3IntField(c, a.readSint32()); return !0; };
jspb.internal.binary.readSint32Oneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setOneofField(c, d, a.readSint32()); return !0; };
jspb.internal.binary.readSint64StringExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.setExtension(c, a.readSint64String()); return !0; };
jspb.internal.binary.readPackableSint64StringIntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableSint64StringInto(b.getExtension(c)); return !0; };
jspb.internal.binary.readSint64Ext = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.setExtension(c, a.readSint64()); return !0; };
jspb.internal.binary.readPackableSint64IntoExt = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableSint64Into(b.getExtension(c)); return !0; };
jspb.internal.binary.readSint64String = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setField(c, a.readSint64String()); return !0; };
jspb.internal.binary.readPackableSint64StringInto = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableSint64StringInto(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readSint64StringIgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setProto3StringIntField(c, a.readSint64String()); return !0; };
jspb.internal.binary.readSint64StringOneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setOneofField(c, d, a.readSint64String()); return !0; };
jspb.internal.binary.readSint64 = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setField(c, a.readSint64()); return !0; };
jspb.internal.binary.readPackableSint64Into = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT && a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.DELIMITED)
    return !1; a.readPackableSint64Into(b.internal_getRepeatedField(c)); return !0; };
jspb.internal.binary.readSint64IgnoringDefault = function (a, b, c) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setProto3IntField(c, a.readSint64()); return !0; };
jspb.internal.binary.readSint64Oneof = function (a, b, c, d) { if (a.getWireType() !== module$exports$jspb$BinaryConstants.WireType.VARINT)
    return !1; b.internal_setOneofField(c, d, a.readSint64()); return !0; };
jspb.internal.binary.writeInt64DoubleMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeDouble); };
jspb.internal.binary.writeInt64FloatMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFloat); };
jspb.internal.binary.writeInt64Int64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64); };
jspb.internal.binary.writeInt64Uint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64); };
jspb.internal.binary.writeInt64Int32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32); };
jspb.internal.binary.writeInt64Fixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64); };
jspb.internal.binary.writeInt64Fixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32); };
jspb.internal.binary.writeInt64BoolMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool); };
jspb.internal.binary.writeInt64StringMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString); };
jspb.internal.binary.writeInt64MessageMap = function (a, b, c, d, e) { module$contents$jspb$internal$binary_writeMessageMap(b, c, d, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, e); };
jspb.internal.binary.writeInt64BytesMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBytes); };
jspb.internal.binary.writeInt64Uint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32); };
jspb.internal.binary.writeInt64EnumMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeEnum); };
jspb.internal.binary.writeInt64Sfixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32); };
jspb.internal.binary.writeInt64Sfixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64); };
jspb.internal.binary.writeInt64Sint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32); };
jspb.internal.binary.writeInt64Sint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64); };
jspb.internal.binary.writeUint64DoubleMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeDouble); };
jspb.internal.binary.writeUint64FloatMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFloat); };
jspb.internal.binary.writeUint64Int64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64); };
jspb.internal.binary.writeUint64Uint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64); };
jspb.internal.binary.writeUint64Int32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32); };
jspb.internal.binary.writeUint64Fixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64); };
jspb.internal.binary.writeUint64Fixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32); };
jspb.internal.binary.writeUint64BoolMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool); };
jspb.internal.binary.writeUint64StringMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString); };
jspb.internal.binary.writeUint64MessageMap = function (a, b, c, d, e) { module$contents$jspb$internal$binary_writeMessageMap(b, c, d, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, e); };
jspb.internal.binary.writeUint64BytesMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBytes); };
jspb.internal.binary.writeUint64Uint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32); };
jspb.internal.binary.writeUint64EnumMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeEnum); };
jspb.internal.binary.writeUint64Sfixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32); };
jspb.internal.binary.writeUint64Sfixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64); };
jspb.internal.binary.writeUint64Sint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32); };
jspb.internal.binary.writeUint64Sint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64); };
jspb.internal.binary.writeInt32DoubleMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeDouble); };
jspb.internal.binary.writeInt32FloatMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFloat); };
jspb.internal.binary.writeInt32Int64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64); };
jspb.internal.binary.writeInt32Uint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64); };
jspb.internal.binary.writeInt32Int32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32); };
jspb.internal.binary.writeInt32Fixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64); };
jspb.internal.binary.writeInt32Fixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32); };
jspb.internal.binary.writeInt32BoolMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool); };
jspb.internal.binary.writeInt32StringMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString); };
jspb.internal.binary.writeInt32MessageMap = function (a, b, c, d, e) { module$contents$jspb$internal$binary_writeMessageMap(b, c, d, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, e); };
jspb.internal.binary.writeInt32BytesMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBytes); };
jspb.internal.binary.writeInt32Uint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32); };
jspb.internal.binary.writeInt32EnumMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeEnum); };
jspb.internal.binary.writeInt32Sfixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32); };
jspb.internal.binary.writeInt32Sfixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64); };
jspb.internal.binary.writeInt32Sint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32); };
jspb.internal.binary.writeInt32Sint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64); };
jspb.internal.binary.writeFixed64DoubleMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeDouble); };
jspb.internal.binary.writeFixed64FloatMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFloat); };
jspb.internal.binary.writeFixed64Int64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64); };
jspb.internal.binary.writeFixed64Uint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64); };
jspb.internal.binary.writeFixed64Int32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32); };
jspb.internal.binary.writeFixed64Fixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64); };
jspb.internal.binary.writeFixed64Fixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32); };
jspb.internal.binary.writeFixed64BoolMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool); };
jspb.internal.binary.writeFixed64StringMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString); };
jspb.internal.binary.writeFixed64MessageMap = function (a, b, c, d, e) { module$contents$jspb$internal$binary_writeMessageMap(b, c, d, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, e); };
jspb.internal.binary.writeFixed64BytesMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBytes); };
jspb.internal.binary.writeFixed64Uint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32); };
jspb.internal.binary.writeFixed64EnumMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeEnum); };
jspb.internal.binary.writeFixed64Sfixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32); };
jspb.internal.binary.writeFixed64Sfixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64); };
jspb.internal.binary.writeFixed64Sint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32); };
jspb.internal.binary.writeFixed64Sint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64); };
jspb.internal.binary.writeFixed32DoubleMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeDouble); };
jspb.internal.binary.writeFixed32FloatMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFloat); };
jspb.internal.binary.writeFixed32Int64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64); };
jspb.internal.binary.writeFixed32Uint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64); };
jspb.internal.binary.writeFixed32Int32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32); };
jspb.internal.binary.writeFixed32Fixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64); };
jspb.internal.binary.writeFixed32Fixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32); };
jspb.internal.binary.writeFixed32BoolMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool); };
jspb.internal.binary.writeFixed32StringMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString); };
jspb.internal.binary.writeFixed32MessageMap = function (a, b, c, d, e) { module$contents$jspb$internal$binary_writeMessageMap(b, c, d, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, e); };
jspb.internal.binary.writeFixed32BytesMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBytes); };
jspb.internal.binary.writeFixed32Uint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32); };
jspb.internal.binary.writeFixed32EnumMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeEnum); };
jspb.internal.binary.writeFixed32Sfixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32); };
jspb.internal.binary.writeFixed32Sfixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64); };
jspb.internal.binary.writeFixed32Sint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32); };
jspb.internal.binary.writeFixed32Sint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64); };
jspb.internal.binary.writeBoolDoubleMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeDouble); };
jspb.internal.binary.writeBoolFloatMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFloat); };
jspb.internal.binary.writeBoolInt64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64); };
jspb.internal.binary.writeBoolUint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64); };
jspb.internal.binary.writeBoolInt32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32); };
jspb.internal.binary.writeBoolFixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64); };
jspb.internal.binary.writeBoolFixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32); };
jspb.internal.binary.writeBoolBoolMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool); };
jspb.internal.binary.writeBoolStringMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString); };
jspb.internal.binary.writeBoolMessageMap = function (a, b, c, d, e) { module$contents$jspb$internal$binary_writeMessageMap(b, c, d, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, e); };
jspb.internal.binary.writeBoolBytesMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBytes); };
jspb.internal.binary.writeBoolUint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32); };
jspb.internal.binary.writeBoolEnumMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeEnum); };
jspb.internal.binary.writeBoolSfixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32); };
jspb.internal.binary.writeBoolSfixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64); };
jspb.internal.binary.writeBoolSint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32); };
jspb.internal.binary.writeBoolSint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64); };
jspb.internal.binary.writeStringDoubleMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeDouble); };
jspb.internal.binary.writeStringFloatMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFloat); };
jspb.internal.binary.writeStringInt64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64); };
jspb.internal.binary.writeStringUint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64); };
jspb.internal.binary.writeStringInt32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32); };
jspb.internal.binary.writeStringFixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64); };
jspb.internal.binary.writeStringFixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32); };
jspb.internal.binary.writeStringBoolMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool); };
jspb.internal.binary.writeStringStringMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString); };
jspb.internal.binary.writeStringMessageMap = function (a, b, c, d, e) { module$contents$jspb$internal$binary_writeMessageMap(b, c, d, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, e); };
jspb.internal.binary.writeStringBytesMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBytes); };
jspb.internal.binary.writeStringUint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32); };
jspb.internal.binary.writeStringEnumMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeEnum); };
jspb.internal.binary.writeStringSfixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32); };
jspb.internal.binary.writeStringSfixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64); };
jspb.internal.binary.writeStringSint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32); };
jspb.internal.binary.writeStringSint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64); };
jspb.internal.binary.writeUint32DoubleMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeDouble); };
jspb.internal.binary.writeUint32FloatMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFloat); };
jspb.internal.binary.writeUint32Int64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64); };
jspb.internal.binary.writeUint32Uint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64); };
jspb.internal.binary.writeUint32Int32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32); };
jspb.internal.binary.writeUint32Fixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64); };
jspb.internal.binary.writeUint32Fixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32); };
jspb.internal.binary.writeUint32BoolMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool); };
jspb.internal.binary.writeUint32StringMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString); };
jspb.internal.binary.writeUint32MessageMap = function (a, b, c, d, e) { module$contents$jspb$internal$binary_writeMessageMap(b, c, d, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, e); };
jspb.internal.binary.writeUint32BytesMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBytes); };
jspb.internal.binary.writeUint32Uint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32); };
jspb.internal.binary.writeUint32EnumMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeEnum); };
jspb.internal.binary.writeUint32Sfixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32); };
jspb.internal.binary.writeUint32Sfixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64); };
jspb.internal.binary.writeUint32Sint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32); };
jspb.internal.binary.writeUint32Sint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64); };
jspb.internal.binary.writeSfixed32DoubleMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeDouble); };
jspb.internal.binary.writeSfixed32FloatMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFloat); };
jspb.internal.binary.writeSfixed32Int64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64); };
jspb.internal.binary.writeSfixed32Uint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64); };
jspb.internal.binary.writeSfixed32Int32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32); };
jspb.internal.binary.writeSfixed32Fixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64); };
jspb.internal.binary.writeSfixed32Fixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32); };
jspb.internal.binary.writeSfixed32BoolMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool); };
jspb.internal.binary.writeSfixed32StringMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString); };
jspb.internal.binary.writeSfixed32MessageMap = function (a, b, c, d, e) { module$contents$jspb$internal$binary_writeMessageMap(b, c, d, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, e); };
jspb.internal.binary.writeSfixed32BytesMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBytes); };
jspb.internal.binary.writeSfixed32Uint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32); };
jspb.internal.binary.writeSfixed32EnumMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeEnum); };
jspb.internal.binary.writeSfixed32Sfixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32); };
jspb.internal.binary.writeSfixed32Sfixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64); };
jspb.internal.binary.writeSfixed32Sint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32); };
jspb.internal.binary.writeSfixed32Sint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64); };
jspb.internal.binary.writeSfixed64DoubleMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeDouble); };
jspb.internal.binary.writeSfixed64FloatMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFloat); };
jspb.internal.binary.writeSfixed64Int64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64); };
jspb.internal.binary.writeSfixed64Uint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64); };
jspb.internal.binary.writeSfixed64Int32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32); };
jspb.internal.binary.writeSfixed64Fixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64); };
jspb.internal.binary.writeSfixed64Fixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32); };
jspb.internal.binary.writeSfixed64BoolMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool); };
jspb.internal.binary.writeSfixed64StringMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString); };
jspb.internal.binary.writeSfixed64MessageMap = function (a, b, c, d, e) { module$contents$jspb$internal$binary_writeMessageMap(b, c, d, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, e); };
jspb.internal.binary.writeSfixed64BytesMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBytes); };
jspb.internal.binary.writeSfixed64Uint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32); };
jspb.internal.binary.writeSfixed64EnumMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeEnum); };
jspb.internal.binary.writeSfixed64Sfixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32); };
jspb.internal.binary.writeSfixed64Sfixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64); };
jspb.internal.binary.writeSfixed64Sint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32); };
jspb.internal.binary.writeSfixed64Sint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64); };
jspb.internal.binary.writeSint32DoubleMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeDouble); };
jspb.internal.binary.writeSint32FloatMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFloat); };
jspb.internal.binary.writeSint32Int64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64); };
jspb.internal.binary.writeSint32Uint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64); };
jspb.internal.binary.writeSint32Int32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32); };
jspb.internal.binary.writeSint32Fixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64); };
jspb.internal.binary.writeSint32Fixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32); };
jspb.internal.binary.writeSint32BoolMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool); };
jspb.internal.binary.writeSint32StringMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString); };
jspb.internal.binary.writeSint32MessageMap = function (a, b, c, d, e) { module$contents$jspb$internal$binary_writeMessageMap(b, c, d, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, e); };
jspb.internal.binary.writeSint32BytesMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBytes); };
jspb.internal.binary.writeSint32Uint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32); };
jspb.internal.binary.writeSint32EnumMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeEnum); };
jspb.internal.binary.writeSint32Sfixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32); };
jspb.internal.binary.writeSint32Sfixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64); };
jspb.internal.binary.writeSint32Sint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32); };
jspb.internal.binary.writeSint32Sint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64); };
jspb.internal.binary.writeSint64DoubleMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeDouble); };
jspb.internal.binary.writeSint64FloatMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFloat); };
jspb.internal.binary.writeSint64Int64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt64); };
jspb.internal.binary.writeSint64Uint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint64); };
jspb.internal.binary.writeSint64Int32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeInt32); };
jspb.internal.binary.writeSint64Fixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed64); };
jspb.internal.binary.writeSint64Fixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeFixed32); };
jspb.internal.binary.writeSint64BoolMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBool); };
jspb.internal.binary.writeSint64StringMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeString); };
jspb.internal.binary.writeSint64MessageMap = function (a, b, c, d, e) { module$contents$jspb$internal$binary_writeMessageMap(b, c, d, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, e); };
jspb.internal.binary.writeSint64BytesMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeBytes); };
jspb.internal.binary.writeSint64Uint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeUint32); };
jspb.internal.binary.writeSint64EnumMap = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeEnum); };
jspb.internal.binary.writeSint64Sfixed32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed32); };
jspb.internal.binary.writeSint64Sfixed64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSfixed64); };
jspb.internal.binary.writeSint64Sint32Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint32); };
jspb.internal.binary.writeSint64Sint64Map = function (a, b, c) { module$contents$jspb$internal$binary_writeMap(b, c, c, a, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64, module$exports$jspb$binary$writer.BinaryWriter.prototype.writeSint64); };
jspb.internal.binary.readInt64DoubleMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readDouble, 0, 0); };
jspb.internal.binary.readInt64FloatMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readFloat, 0, 0); };
jspb.internal.binary.readInt64Int64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readInt64, 0, 0); };
jspb.internal.binary.readInt64Uint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readUint64, 0, 0); };
jspb.internal.binary.readInt64Int32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readInt32, 0, 0); };
jspb.internal.binary.readInt64Fixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readFixed64, 0, 0); };
jspb.internal.binary.readInt64Fixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readFixed32, 0, 0); };
jspb.internal.binary.readInt64BoolMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readBool, 0, !1); };
jspb.internal.binary.readInt64StringRequireUtf8Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readStringRequireUtf8, 0, ""); };
jspb.internal.binary.readInt64StringMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readString, 0, ""); };
jspb.internal.binary.readInt64MessageMap = function (a, b, c, d, e) { return module$contents$jspb$internal$binary_readMessageMapEntry(a, b, c, d, jspb.internal.binary.readInt64, 0, e); };
jspb.internal.binary.readInt64BytesMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readBytes, 0, module$exports$jspb$bytestring.ByteString.empty()); };
jspb.internal.binary.readInt64Uint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readUint32, 0, 0); };
jspb.internal.binary.readInt64EnumMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readEnum, 0, 0); };
jspb.internal.binary.readInt64Sfixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readSfixed32, 0, 0); };
jspb.internal.binary.readInt64Sfixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readSfixed64, 0, 0); };
jspb.internal.binary.readInt64Sint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readSint32, 0, 0); };
jspb.internal.binary.readInt64Sint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt64, jspb.internal.binary.readSint64, 0, 0); };
jspb.internal.binary.readUint64DoubleMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readDouble, 0, 0); };
jspb.internal.binary.readUint64FloatMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readFloat, 0, 0); };
jspb.internal.binary.readUint64Int64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readInt64, 0, 0); };
jspb.internal.binary.readUint64Uint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readUint64, 0, 0); };
jspb.internal.binary.readUint64Int32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readInt32, 0, 0); };
jspb.internal.binary.readUint64Fixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readFixed64, 0, 0); };
jspb.internal.binary.readUint64Fixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readFixed32, 0, 0); };
jspb.internal.binary.readUint64BoolMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readBool, 0, !1); };
jspb.internal.binary.readUint64StringRequireUtf8Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readStringRequireUtf8, 0, ""); };
jspb.internal.binary.readUint64StringMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readString, 0, ""); };
jspb.internal.binary.readUint64MessageMap = function (a, b, c, d, e) { return module$contents$jspb$internal$binary_readMessageMapEntry(a, b, c, d, jspb.internal.binary.readUint64, 0, e); };
jspb.internal.binary.readUint64BytesMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readBytes, 0, module$exports$jspb$bytestring.ByteString.empty()); };
jspb.internal.binary.readUint64Uint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readUint32, 0, 0); };
jspb.internal.binary.readUint64EnumMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readEnum, 0, 0); };
jspb.internal.binary.readUint64Sfixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readSfixed32, 0, 0); };
jspb.internal.binary.readUint64Sfixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readSfixed64, 0, 0); };
jspb.internal.binary.readUint64Sint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readSint32, 0, 0); };
jspb.internal.binary.readUint64Sint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint64, jspb.internal.binary.readSint64, 0, 0); };
jspb.internal.binary.readInt32DoubleMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readDouble, 0, 0); };
jspb.internal.binary.readInt32FloatMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readFloat, 0, 0); };
jspb.internal.binary.readInt32Int64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readInt64, 0, 0); };
jspb.internal.binary.readInt32Uint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readUint64, 0, 0); };
jspb.internal.binary.readInt32Int32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readInt32, 0, 0); };
jspb.internal.binary.readInt32Fixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readFixed64, 0, 0); };
jspb.internal.binary.readInt32Fixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readFixed32, 0, 0); };
jspb.internal.binary.readInt32BoolMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readBool, 0, !1); };
jspb.internal.binary.readInt32StringRequireUtf8Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readStringRequireUtf8, 0, ""); };
jspb.internal.binary.readInt32StringMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readString, 0, ""); };
jspb.internal.binary.readInt32MessageMap = function (a, b, c, d, e) { return module$contents$jspb$internal$binary_readMessageMapEntry(a, b, c, d, jspb.internal.binary.readInt32, 0, e); };
jspb.internal.binary.readInt32BytesMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readBytes, 0, module$exports$jspb$bytestring.ByteString.empty()); };
jspb.internal.binary.readInt32Uint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readUint32, 0, 0); };
jspb.internal.binary.readInt32EnumMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readEnum, 0, 0); };
jspb.internal.binary.readInt32Sfixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readSfixed32, 0, 0); };
jspb.internal.binary.readInt32Sfixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readSfixed64, 0, 0); };
jspb.internal.binary.readInt32Sint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readSint32, 0, 0); };
jspb.internal.binary.readInt32Sint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readInt32, jspb.internal.binary.readSint64, 0, 0); };
jspb.internal.binary.readFixed64DoubleMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readDouble, 0, 0); };
jspb.internal.binary.readFixed64FloatMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readFloat, 0, 0); };
jspb.internal.binary.readFixed64Int64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readInt64, 0, 0); };
jspb.internal.binary.readFixed64Uint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readUint64, 0, 0); };
jspb.internal.binary.readFixed64Int32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readInt32, 0, 0); };
jspb.internal.binary.readFixed64Fixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readFixed64, 0, 0); };
jspb.internal.binary.readFixed64Fixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readFixed32, 0, 0); };
jspb.internal.binary.readFixed64BoolMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readBool, 0, !1); };
jspb.internal.binary.readFixed64StringRequireUtf8Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readStringRequireUtf8, 0, ""); };
jspb.internal.binary.readFixed64StringMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readString, 0, ""); };
jspb.internal.binary.readFixed64MessageMap = function (a, b, c, d, e) { return module$contents$jspb$internal$binary_readMessageMapEntry(a, b, c, d, jspb.internal.binary.readFixed64, 0, e); };
jspb.internal.binary.readFixed64BytesMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readBytes, 0, module$exports$jspb$bytestring.ByteString.empty()); };
jspb.internal.binary.readFixed64Uint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readUint32, 0, 0); };
jspb.internal.binary.readFixed64EnumMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readEnum, 0, 0); };
jspb.internal.binary.readFixed64Sfixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readSfixed32, 0, 0); };
jspb.internal.binary.readFixed64Sfixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readSfixed64, 0, 0); };
jspb.internal.binary.readFixed64Sint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readSint32, 0, 0); };
jspb.internal.binary.readFixed64Sint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed64, jspb.internal.binary.readSint64, 0, 0); };
jspb.internal.binary.readFixed32DoubleMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readDouble, 0, 0); };
jspb.internal.binary.readFixed32FloatMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readFloat, 0, 0); };
jspb.internal.binary.readFixed32Int64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readInt64, 0, 0); };
jspb.internal.binary.readFixed32Uint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readUint64, 0, 0); };
jspb.internal.binary.readFixed32Int32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readInt32, 0, 0); };
jspb.internal.binary.readFixed32Fixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readFixed64, 0, 0); };
jspb.internal.binary.readFixed32Fixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readFixed32, 0, 0); };
jspb.internal.binary.readFixed32BoolMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readBool, 0, !1); };
jspb.internal.binary.readFixed32StringRequireUtf8Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readStringRequireUtf8, 0, ""); };
jspb.internal.binary.readFixed32StringMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readString, 0, ""); };
jspb.internal.binary.readFixed32MessageMap = function (a, b, c, d, e) { return module$contents$jspb$internal$binary_readMessageMapEntry(a, b, c, d, jspb.internal.binary.readFixed32, 0, e); };
jspb.internal.binary.readFixed32BytesMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readBytes, 0, module$exports$jspb$bytestring.ByteString.empty()); };
jspb.internal.binary.readFixed32Uint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readUint32, 0, 0); };
jspb.internal.binary.readFixed32EnumMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readEnum, 0, 0); };
jspb.internal.binary.readFixed32Sfixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readSfixed32, 0, 0); };
jspb.internal.binary.readFixed32Sfixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readSfixed64, 0, 0); };
jspb.internal.binary.readFixed32Sint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readSint32, 0, 0); };
jspb.internal.binary.readFixed32Sint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readFixed32, jspb.internal.binary.readSint64, 0, 0); };
jspb.internal.binary.readBoolDoubleMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readDouble, !1, 0); };
jspb.internal.binary.readBoolFloatMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readFloat, !1, 0); };
jspb.internal.binary.readBoolInt64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readInt64, !1, 0); };
jspb.internal.binary.readBoolUint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readUint64, !1, 0); };
jspb.internal.binary.readBoolInt32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readInt32, !1, 0); };
jspb.internal.binary.readBoolFixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readFixed64, !1, 0); };
jspb.internal.binary.readBoolFixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readFixed32, !1, 0); };
jspb.internal.binary.readBoolBoolMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readBool, !1, !1); };
jspb.internal.binary.readBoolStringRequireUtf8Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readStringRequireUtf8, !1, ""); };
jspb.internal.binary.readBoolStringMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readString, !1, ""); };
jspb.internal.binary.readBoolMessageMap = function (a, b, c, d, e) { return module$contents$jspb$internal$binary_readMessageMapEntry(a, b, c, d, jspb.internal.binary.readBool, !1, e); };
jspb.internal.binary.readBoolBytesMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readBytes, !1, module$exports$jspb$bytestring.ByteString.empty()); };
jspb.internal.binary.readBoolUint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readUint32, !1, 0); };
jspb.internal.binary.readBoolEnumMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readEnum, !1, 0); };
jspb.internal.binary.readBoolSfixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readSfixed32, !1, 0); };
jspb.internal.binary.readBoolSfixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readSfixed64, !1, 0); };
jspb.internal.binary.readBoolSint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readSint32, !1, 0); };
jspb.internal.binary.readBoolSint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readBool, jspb.internal.binary.readSint64, !1, 0); };
jspb.internal.binary.readStringRequireUtf8DoubleMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readStringRequireUtf8, jspb.internal.binary.readDouble, "", 0); };
jspb.internal.binary.readStringDoubleMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readString, jspb.internal.binary.readDouble, "", 0); };
jspb.internal.binary.readStringRequireUtf8FloatMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readStringRequireUtf8, jspb.internal.binary.readFloat, "", 0); };
jspb.internal.binary.readStringFloatMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readString, jspb.internal.binary.readFloat, "", 0); };
jspb.internal.binary.readStringRequireUtf8Int64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readStringRequireUtf8, jspb.internal.binary.readInt64, "", 0); };
jspb.internal.binary.readStringInt64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readString, jspb.internal.binary.readInt64, "", 0); };
jspb.internal.binary.readStringRequireUtf8Uint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readStringRequireUtf8, jspb.internal.binary.readUint64, "", 0); };
jspb.internal.binary.readStringUint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readString, jspb.internal.binary.readUint64, "", 0); };
jspb.internal.binary.readStringRequireUtf8Int32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readStringRequireUtf8, jspb.internal.binary.readInt32, "", 0); };
jspb.internal.binary.readStringInt32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readString, jspb.internal.binary.readInt32, "", 0); };
jspb.internal.binary.readStringRequireUtf8Fixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readStringRequireUtf8, jspb.internal.binary.readFixed64, "", 0); };
jspb.internal.binary.readStringFixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readString, jspb.internal.binary.readFixed64, "", 0); };
jspb.internal.binary.readStringRequireUtf8Fixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readStringRequireUtf8, jspb.internal.binary.readFixed32, "", 0); };
jspb.internal.binary.readStringFixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readString, jspb.internal.binary.readFixed32, "", 0); };
jspb.internal.binary.readStringRequireUtf8BoolMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readStringRequireUtf8, jspb.internal.binary.readBool, "", !1); };
jspb.internal.binary.readStringBoolMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readString, jspb.internal.binary.readBool, "", !1); };
jspb.internal.binary.readStringRequireUtf8StringRequireUtf8Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readStringRequireUtf8, jspb.internal.binary.readStringRequireUtf8, "", ""); };
jspb.internal.binary.readStringStringMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readString, jspb.internal.binary.readString, "", ""); };
jspb.internal.binary.readStringRequireUtf8MessageMap = function (a, b, c, d, e) { return module$contents$jspb$internal$binary_readMessageMapEntry(a, b, c, d, jspb.internal.binary.readStringRequireUtf8, "", e); };
jspb.internal.binary.readStringMessageMap = function (a, b, c, d, e) { return module$contents$jspb$internal$binary_readMessageMapEntry(a, b, c, d, jspb.internal.binary.readString, "", e); };
jspb.internal.binary.readStringRequireUtf8BytesMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readStringRequireUtf8, jspb.internal.binary.readBytes, "", module$exports$jspb$bytestring.ByteString.empty()); };
jspb.internal.binary.readStringBytesMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readString, jspb.internal.binary.readBytes, "", module$exports$jspb$bytestring.ByteString.empty()); };
jspb.internal.binary.readStringRequireUtf8Uint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readStringRequireUtf8, jspb.internal.binary.readUint32, "", 0); };
jspb.internal.binary.readStringUint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readString, jspb.internal.binary.readUint32, "", 0); };
jspb.internal.binary.readStringRequireUtf8EnumMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readStringRequireUtf8, jspb.internal.binary.readEnum, "", 0); };
jspb.internal.binary.readStringEnumMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readString, jspb.internal.binary.readEnum, "", 0); };
jspb.internal.binary.readStringRequireUtf8Sfixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readStringRequireUtf8, jspb.internal.binary.readSfixed32, "", 0); };
jspb.internal.binary.readStringSfixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readString, jspb.internal.binary.readSfixed32, "", 0); };
jspb.internal.binary.readStringRequireUtf8Sfixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readStringRequireUtf8, jspb.internal.binary.readSfixed64, "", 0); };
jspb.internal.binary.readStringSfixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readString, jspb.internal.binary.readSfixed64, "", 0); };
jspb.internal.binary.readStringRequireUtf8Sint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readStringRequireUtf8, jspb.internal.binary.readSint32, "", 0); };
jspb.internal.binary.readStringSint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readString, jspb.internal.binary.readSint32, "", 0); };
jspb.internal.binary.readStringRequireUtf8Sint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readStringRequireUtf8, jspb.internal.binary.readSint64, "", 0); };
jspb.internal.binary.readStringSint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readString, jspb.internal.binary.readSint64, "", 0); };
jspb.internal.binary.readUint32DoubleMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readDouble, 0, 0); };
jspb.internal.binary.readUint32FloatMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readFloat, 0, 0); };
jspb.internal.binary.readUint32Int64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readInt64, 0, 0); };
jspb.internal.binary.readUint32Uint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readUint64, 0, 0); };
jspb.internal.binary.readUint32Int32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readInt32, 0, 0); };
jspb.internal.binary.readUint32Fixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readFixed64, 0, 0); };
jspb.internal.binary.readUint32Fixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readFixed32, 0, 0); };
jspb.internal.binary.readUint32BoolMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readBool, 0, !1); };
jspb.internal.binary.readUint32StringRequireUtf8Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readStringRequireUtf8, 0, ""); };
jspb.internal.binary.readUint32StringMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readString, 0, ""); };
jspb.internal.binary.readUint32MessageMap = function (a, b, c, d, e) { return module$contents$jspb$internal$binary_readMessageMapEntry(a, b, c, d, jspb.internal.binary.readUint32, 0, e); };
jspb.internal.binary.readUint32BytesMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readBytes, 0, module$exports$jspb$bytestring.ByteString.empty()); };
jspb.internal.binary.readUint32Uint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readUint32, 0, 0); };
jspb.internal.binary.readUint32EnumMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readEnum, 0, 0); };
jspb.internal.binary.readUint32Sfixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readSfixed32, 0, 0); };
jspb.internal.binary.readUint32Sfixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readSfixed64, 0, 0); };
jspb.internal.binary.readUint32Sint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readSint32, 0, 0); };
jspb.internal.binary.readUint32Sint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readUint32, jspb.internal.binary.readSint64, 0, 0); };
jspb.internal.binary.readSfixed32DoubleMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readDouble, 0, 0); };
jspb.internal.binary.readSfixed32FloatMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readFloat, 0, 0); };
jspb.internal.binary.readSfixed32Int64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readInt64, 0, 0); };
jspb.internal.binary.readSfixed32Uint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readUint64, 0, 0); };
jspb.internal.binary.readSfixed32Int32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readInt32, 0, 0); };
jspb.internal.binary.readSfixed32Fixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readFixed64, 0, 0); };
jspb.internal.binary.readSfixed32Fixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readFixed32, 0, 0); };
jspb.internal.binary.readSfixed32BoolMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readBool, 0, !1); };
jspb.internal.binary.readSfixed32StringRequireUtf8Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readStringRequireUtf8, 0, ""); };
jspb.internal.binary.readSfixed32StringMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readString, 0, ""); };
jspb.internal.binary.readSfixed32MessageMap = function (a, b, c, d, e) { return module$contents$jspb$internal$binary_readMessageMapEntry(a, b, c, d, jspb.internal.binary.readSfixed32, 0, e); };
jspb.internal.binary.readSfixed32BytesMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readBytes, 0, module$exports$jspb$bytestring.ByteString.empty()); };
jspb.internal.binary.readSfixed32Uint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readUint32, 0, 0); };
jspb.internal.binary.readSfixed32EnumMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readEnum, 0, 0); };
jspb.internal.binary.readSfixed32Sfixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readSfixed32, 0, 0); };
jspb.internal.binary.readSfixed32Sfixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readSfixed64, 0, 0); };
jspb.internal.binary.readSfixed32Sint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readSint32, 0, 0); };
jspb.internal.binary.readSfixed32Sint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed32, jspb.internal.binary.readSint64, 0, 0); };
jspb.internal.binary.readSfixed64DoubleMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readDouble, 0, 0); };
jspb.internal.binary.readSfixed64FloatMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readFloat, 0, 0); };
jspb.internal.binary.readSfixed64Int64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readInt64, 0, 0); };
jspb.internal.binary.readSfixed64Uint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readUint64, 0, 0); };
jspb.internal.binary.readSfixed64Int32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readInt32, 0, 0); };
jspb.internal.binary.readSfixed64Fixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readFixed64, 0, 0); };
jspb.internal.binary.readSfixed64Fixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readFixed32, 0, 0); };
jspb.internal.binary.readSfixed64BoolMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readBool, 0, !1); };
jspb.internal.binary.readSfixed64StringRequireUtf8Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readStringRequireUtf8, 0, ""); };
jspb.internal.binary.readSfixed64StringMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readString, 0, ""); };
jspb.internal.binary.readSfixed64MessageMap = function (a, b, c, d, e) { return module$contents$jspb$internal$binary_readMessageMapEntry(a, b, c, d, jspb.internal.binary.readSfixed64, 0, e); };
jspb.internal.binary.readSfixed64BytesMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readBytes, 0, module$exports$jspb$bytestring.ByteString.empty()); };
jspb.internal.binary.readSfixed64Uint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readUint32, 0, 0); };
jspb.internal.binary.readSfixed64EnumMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readEnum, 0, 0); };
jspb.internal.binary.readSfixed64Sfixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readSfixed32, 0, 0); };
jspb.internal.binary.readSfixed64Sfixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readSfixed64, 0, 0); };
jspb.internal.binary.readSfixed64Sint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readSint32, 0, 0); };
jspb.internal.binary.readSfixed64Sint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSfixed64, jspb.internal.binary.readSint64, 0, 0); };
jspb.internal.binary.readSint32DoubleMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readDouble, 0, 0); };
jspb.internal.binary.readSint32FloatMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readFloat, 0, 0); };
jspb.internal.binary.readSint32Int64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readInt64, 0, 0); };
jspb.internal.binary.readSint32Uint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readUint64, 0, 0); };
jspb.internal.binary.readSint32Int32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readInt32, 0, 0); };
jspb.internal.binary.readSint32Fixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readFixed64, 0, 0); };
jspb.internal.binary.readSint32Fixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readFixed32, 0, 0); };
jspb.internal.binary.readSint32BoolMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readBool, 0, !1); };
jspb.internal.binary.readSint32StringRequireUtf8Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readStringRequireUtf8, 0, ""); };
jspb.internal.binary.readSint32StringMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readString, 0, ""); };
jspb.internal.binary.readSint32MessageMap = function (a, b, c, d, e) { return module$contents$jspb$internal$binary_readMessageMapEntry(a, b, c, d, jspb.internal.binary.readSint32, 0, e); };
jspb.internal.binary.readSint32BytesMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readBytes, 0, module$exports$jspb$bytestring.ByteString.empty()); };
jspb.internal.binary.readSint32Uint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readUint32, 0, 0); };
jspb.internal.binary.readSint32EnumMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readEnum, 0, 0); };
jspb.internal.binary.readSint32Sfixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readSfixed32, 0, 0); };
jspb.internal.binary.readSint32Sfixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readSfixed64, 0, 0); };
jspb.internal.binary.readSint32Sint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readSint32, 0, 0); };
jspb.internal.binary.readSint32Sint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint32, jspb.internal.binary.readSint64, 0, 0); };
jspb.internal.binary.readSint64DoubleMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readDouble, 0, 0); };
jspb.internal.binary.readSint64FloatMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readFloat, 0, 0); };
jspb.internal.binary.readSint64Int64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readInt64, 0, 0); };
jspb.internal.binary.readSint64Uint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readUint64, 0, 0); };
jspb.internal.binary.readSint64Int32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readInt32, 0, 0); };
jspb.internal.binary.readSint64Fixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readFixed64, 0, 0); };
jspb.internal.binary.readSint64Fixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readFixed32, 0, 0); };
jspb.internal.binary.readSint64BoolMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readBool, 0, !1); };
jspb.internal.binary.readSint64StringRequireUtf8Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readStringRequireUtf8, 0, ""); };
jspb.internal.binary.readSint64StringMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readString, 0, ""); };
jspb.internal.binary.readSint64MessageMap = function (a, b, c, d, e) { return module$contents$jspb$internal$binary_readMessageMapEntry(a, b, c, d, jspb.internal.binary.readSint64, 0, e); };
jspb.internal.binary.readSint64BytesMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readBytes, 0, module$exports$jspb$bytestring.ByteString.empty()); };
jspb.internal.binary.readSint64Uint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readUint32, 0, 0); };
jspb.internal.binary.readSint64EnumMap = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readEnum, 0, 0); };
jspb.internal.binary.readSint64Sfixed32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readSfixed32, 0, 0); };
jspb.internal.binary.readSint64Sfixed64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readSfixed64, 0, 0); };
jspb.internal.binary.readSint64Sint32Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readSint32, 0, 0); };
jspb.internal.binary.readSint64Sint64Map = function (a, b, c) { return module$contents$jspb$internal$binary_readMapEntry(a, b, c, jspb.internal.binary.readSint64, jspb.internal.binary.readSint64, 0, 0); };
jspb.internal.public_for_gencode = {};
var module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE;
function module$contents$jspb$internal$public_for_gencode_toObjectList(a, b, c) { for (var d = [], e = 0; e < a.length; e++)
    d.push(b(c, a[e])); return d; }
function module$contents$jspb$internal$public_for_gencode_assertConsistentTypes(a) { if (goog.DEBUG && a && 1 < a.length) {
    var b = goog.typeOf(a[0]);
    module$contents$goog$array_forEach(a, function (c) { goog.typeOf(c) != b && goog.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(c) + " expected " + b); });
} }
function module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(a) { return null === a ? void 0 : a; }
var module$contents$jspb$internal$public_for_gencode_GeneratedMessageImpl = function () { module$exports$jspb.Message.apply(this, arguments); };
$jscomp.inherits(module$contents$jspb$internal$public_for_gencode_GeneratedMessageImpl, module$exports$jspb.Message);
goog.asserts.ENABLE_ASSERTS && (module$contents$jspb$internal$public_for_gencode_GeneratedMessageImpl.prototype[module$exports$jspb$internal.GENERATED_SUBCLASS_MARKER] = !0);
var module$contents$jspb$internal$public_for_gencode_GeneratedMessage = goog.asserts.ENABLE_ASSERTS ? module$contents$jspb$internal$public_for_gencode_GeneratedMessageImpl : module$exports$jspb.Message;
jspb.internal.public_for_gencode.GENERATE_FROM_OBJECT = module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT;
jspb.internal.public_for_gencode.GENERATE_TO_OBJECT = !0;
jspb.internal.public_for_gencode.GeneratedMessage = module$contents$jspb$internal$public_for_gencode_GeneratedMessage;
jspb.internal.public_for_gencode.bytesAsB64 = module$contents$jspb$internal_bytesAsB64;
jspb.internal.public_for_gencode.bytesAsU8 = module$contents$jspb$internal_bytesAsU8;
jspb.internal.public_for_gencode.bytesListAsB64 = function (a) { module$contents$jspb$internal$public_for_gencode_assertConsistentTypes(a); return a.length && "string" !== typeof a[0] ? module$contents$goog$array_map(a, module$contents$jspb$internal_bytesAsB64) : a; };
jspb.internal.public_for_gencode.bytesListAsU8 = function (a) { module$contents$jspb$internal$public_for_gencode_assertConsistentTypes(a); return !a.length || a[0] instanceof Uint8Array ? a : module$contents$goog$array_map(a, module$contents$jspb$internal_bytesAsU8); };
jspb.internal.public_for_gencode.createMessageExtension = function (a, b, c, d, e) { return new module$contents$jspb$extension_field_info_ExtensionFieldInfo(a, b, c, d, void 0 === e ? 0 : e); };
jspb.internal.public_for_gencode.createPrimitiveExtension = function (a, b, c) { return new module$contents$jspb$extension_field_info_ExtensionFieldInfo(a, b, null, null, void 0 === c ? 0 : c); };
jspb.internal.public_for_gencode.mapFromObject = function (a, b, c) { for (var d = 0; d < b.length; d++) {
    var e = b[d][0], f = c(b[d][1]);
    a.set(e, f);
} return a; };
jspb.internal.public_for_gencode.mapToObject = function (a, b, c) { var d = []; a.forEach(function (e, f) { d.push([f, c ? c(b, e) : e]); }); return d; };
jspb.internal.public_for_gencode.toObjectExtension = function (a, b, c, d) { for (var e in c)
    if (module$contents$jspb$internal_hasOwnPropertyIfNotTrusted(c, e)) {
        var f = c[e], g = a.getExtension(f);
        if (null != g) {
            var k = void 0;
            for (k in f.fieldName)
                if (f.fieldName.hasOwnProperty(k))
                    break;
            var h = f.toObjectFn;
            b[k] = h ? f.isRepeated ? module$contents$jspb$internal$public_for_gencode_toObjectList(g, h, d) : h(d, g) : g;
        }
    } };
jspb.internal.public_for_gencode.toObjectList = module$contents$jspb$internal$public_for_gencode_toObjectList;
jspb.internal.public_for_gencode.toObjectPrimitive = module$contents$jspb$internal$public_for_gencode_toObjectPrimitive;
jspb.internal.public_for_gencode.toObjectAnyValue = function (a) { a = a.internal_getField(2); if (null == a)
    return ""; if ("string" === typeof a)
    return a; if (module$contents$jspb$internal_bytes_isU8(a))
    return goog.crypt.base64.encodeByteArray(a); if (Array.isArray(a))
    return module$contents$jspb$internal_copy_cloneJspbObjectInternal(a, module$contents$jspb$internal_copy_convertToJspbFormat); throw Error("invalid value in Any.value field: " + a); };
jspb.internal.public_for_gencode.fromObjectAnyValue = function (a, b) { if (null != b)
    if ("string" === typeof b)
        b.length && a.internal_setField(2, b);
    else if (Array.isArray(b))
        a.internal_setField(2, module$contents$jspb$internal_copy_cloneJspbObjectInternal(b, module$contents$jspb$internal_copy_convertToJspbFormat));
    else
        throw Error("invalid value in Any.value field: " + b); };
jspb.internal.public_for_gencode.packAnyValueBinary = function (a, b) { goog.asserts.assertInstanceof(a, module$exports$jspb.Message); a.internal_setProto3BytesField(2, module$contents$jspb$utils_byteSourceToUint8Array(b)); return a; };
jspb.Message = module$exports$jspb.Message;
var proto = { acceleration: {} };
proto.acceleration.ModelIdentifier = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.acceleration.ModelIdentifier, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.ModelIdentifier.prototype.getModelFingerprint = function () { return this.internal_getField(1); };
proto.acceleration.ModelIdentifier.prototype.setModelFingerprint = function (a) { return this.internal_setField(1, a); };
proto.acceleration.ModelIdentifier.prototype.clearModelFingerprint = function () { return this.internal_clearField(1); };
proto.acceleration.ModelIdentifier.prototype.hasModelFingerprint = function () { return this.internal_hasField(1); };
proto.acceleration.ModelIdentifier.prototype.getModelId = function () { return this.internal_getField(2); };
proto.acceleration.ModelIdentifier.prototype.setModelId = function (a) { return this.internal_setField(2, a); };
proto.acceleration.ModelIdentifier.prototype.clearModelId = function () { return this.internal_clearField(2); };
proto.acceleration.ModelIdentifier.prototype.hasModelId = function () { return this.internal_hasField(2); };
proto.acceleration.ModelIdentifier.internalDoNotUse$proto$acceleration$ModelIdentifier$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readString, 2: jspb.internal.binary.readString }; };
proto.acceleration.ModelIdentifier.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.ModelIdentifier.serializeBinaryToWriter); };
proto.acceleration.ModelIdentifier.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeString(b, a, 1); jspb.internal.binary.writeString(b, a, 2); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.acceleration.ModelIdentifier.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.ModelIdentifier, proto.acceleration.ModelIdentifier.internalDoNotUse$proto$acceleration$ModelIdentifier$getBinaryFieldsObject); };
proto.acceleration.ModelIdentifier.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.ModelIdentifier.internalDoNotUse$proto$acceleration$ModelIdentifier$getBinaryFieldsObject); };
proto.acceleration.ModelIdentifier.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.ModelIdentifier, a); };
proto.acceleration.ModelIdentifier.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.ModelIdentifier.fromObject = function (a) { var b = new proto.acceleration.ModelIdentifier; null != a.modelFingerprint && b.internal_setField(1, a.modelFingerprint); null != a.modelId && b.internal_setField(2, a.modelId); return b; });
proto.acceleration.ModelIdentifier.prototype.toObject = function (a) { return proto.acceleration.ModelIdentifier.internal_toObject(a, this); };
proto.acceleration.ModelIdentifier.internal_toObject = function (a, b) { if (null != b) {
    var c = { modelFingerprint: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), modelId: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.acceleration.InferenceToUseFor = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.acceleration.InferenceToUseFor, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.InferenceToUseFor.prototype.getModelNamespace = function () { return this.internal_getField(1); };
proto.acceleration.InferenceToUseFor.prototype.setModelNamespace = function (a) { return this.internal_setField(1, a); };
proto.acceleration.InferenceToUseFor.prototype.clearModelNamespace = function () { return this.internal_clearField(1); };
proto.acceleration.InferenceToUseFor.prototype.hasModelNamespace = function () { return this.internal_hasField(1); };
proto.acceleration.InferenceToUseFor.prototype.getModel = function () { return this.internal_getWrapperField(proto.acceleration.ModelIdentifier, 2); };
proto.acceleration.InferenceToUseFor.prototype.setModel = function (a) { return this.internal_setWrapperField(2, a); };
proto.acceleration.InferenceToUseFor.prototype.clearModel = function () { return this.internal_clearWrapperField(2); };
proto.acceleration.InferenceToUseFor.prototype.hasModel = function () { return this.internal_hasField(2); };
proto.acceleration.InferenceToUseFor.internalDoNotUse$proto$acceleration$InferenceToUseFor$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readString, 2: [jspb.internal.binary.readMessage, proto.acceleration.ModelIdentifier, proto.acceleration.ModelIdentifier.internalDoNotUse$proto$acceleration$ModelIdentifier$getBinaryFieldsObject] }; };
proto.acceleration.InferenceToUseFor.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.InferenceToUseFor.serializeBinaryToWriter); };
proto.acceleration.InferenceToUseFor.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeString(b, a, 1); jspb.internal.binary.writeMessage(b, a, 2, proto.acceleration.ModelIdentifier, proto.acceleration.ModelIdentifier.serializeBinaryToWriter); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.acceleration.InferenceToUseFor.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.InferenceToUseFor, proto.acceleration.InferenceToUseFor.internalDoNotUse$proto$acceleration$InferenceToUseFor$getBinaryFieldsObject); };
proto.acceleration.InferenceToUseFor.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.InferenceToUseFor.internalDoNotUse$proto$acceleration$InferenceToUseFor$getBinaryFieldsObject); };
proto.acceleration.InferenceToUseFor.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.InferenceToUseFor, a); };
proto.acceleration.InferenceToUseFor.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.InferenceToUseFor.fromObject = function (a) { var b = new proto.acceleration.InferenceToUseFor; null != a.modelNamespace && b.internal_setField(1, a.modelNamespace); a.model && b.internal_setWrapperField(2, proto.acceleration.ModelIdentifier.fromObject(a.model)); return b; });
proto.acceleration.InferenceToUseFor.prototype.toObject = function (a) { return proto.acceleration.InferenceToUseFor.internal_toObject(a, this); };
proto.acceleration.InferenceToUseFor.internal_toObject = function (a, b) { if (null != b) {
    var c = { modelNamespace: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), model: proto.acceleration.ModelIdentifier.internal_toObject(a, b.getModel()) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.acceleration.BenchmarkStoragePaths = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.acceleration.BenchmarkStoragePaths, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.BenchmarkStoragePaths.prototype.getStorageFilePath = function () { return this.internal_getField(1); };
proto.acceleration.BenchmarkStoragePaths.prototype.setStorageFilePath = function (a) { return this.internal_setField(1, a); };
proto.acceleration.BenchmarkStoragePaths.prototype.clearStorageFilePath = function () { return this.internal_clearField(1); };
proto.acceleration.BenchmarkStoragePaths.prototype.hasStorageFilePath = function () { return this.internal_hasField(1); };
proto.acceleration.BenchmarkStoragePaths.prototype.getDataDirectoryPath = function () { return this.internal_getField(2); };
proto.acceleration.BenchmarkStoragePaths.prototype.setDataDirectoryPath = function (a) { return this.internal_setField(2, a); };
proto.acceleration.BenchmarkStoragePaths.prototype.clearDataDirectoryPath = function () { return this.internal_clearField(2); };
proto.acceleration.BenchmarkStoragePaths.prototype.hasDataDirectoryPath = function () { return this.internal_hasField(2); };
proto.acceleration.BenchmarkStoragePaths.internalDoNotUse$proto$acceleration$BenchmarkStoragePaths$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readString, 2: jspb.internal.binary.readString }; };
proto.acceleration.BenchmarkStoragePaths.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.BenchmarkStoragePaths.serializeBinaryToWriter); };
proto.acceleration.BenchmarkStoragePaths.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeString(b, a, 1); jspb.internal.binary.writeString(b, a, 2); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.acceleration.BenchmarkStoragePaths.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.BenchmarkStoragePaths, proto.acceleration.BenchmarkStoragePaths.internalDoNotUse$proto$acceleration$BenchmarkStoragePaths$getBinaryFieldsObject); };
proto.acceleration.BenchmarkStoragePaths.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.BenchmarkStoragePaths.internalDoNotUse$proto$acceleration$BenchmarkStoragePaths$getBinaryFieldsObject); };
proto.acceleration.BenchmarkStoragePaths.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.BenchmarkStoragePaths, a); };
proto.acceleration.BenchmarkStoragePaths.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.BenchmarkStoragePaths.fromObject = function (a) { var b = new proto.acceleration.BenchmarkStoragePaths; null != a.storageFilePath && b.internal_setField(1, a.storageFilePath); null != a.dataDirectoryPath && b.internal_setField(2, a.dataDirectoryPath); return b; });
proto.acceleration.BenchmarkStoragePaths.prototype.toObject = function (a) { return proto.acceleration.BenchmarkStoragePaths.internal_toObject(a, this); };
proto.acceleration.BenchmarkStoragePaths.internal_toObject = function (a, b) { if (null != b) {
    var c = { storageFilePath: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), dataDirectoryPath: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.acceleration.ModelFile = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.acceleration.ModelFile, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.ModelFile.prototype.getFilename = function () { return this.internal_getField(1); };
proto.acceleration.ModelFile.prototype.setFilename = function (a) { return this.internal_setField(1, a); };
proto.acceleration.ModelFile.prototype.clearFilename = function () { return this.internal_clearField(1); };
proto.acceleration.ModelFile.prototype.hasFilename = function () { return this.internal_hasField(1); };
proto.acceleration.ModelFile.prototype.getFd = function () { return this.internal_getField(2); };
proto.acceleration.ModelFile.prototype.setFd = function (a) { return this.internal_setField(2, a); };
proto.acceleration.ModelFile.prototype.clearFd = function () { return this.internal_clearField(2); };
proto.acceleration.ModelFile.prototype.hasFd = function () { return this.internal_hasField(2); };
proto.acceleration.ModelFile.prototype.getOffset = function () { return this.internal_getField(3); };
proto.acceleration.ModelFile.prototype.setOffset = function (a) { return this.internal_setField(3, a); };
proto.acceleration.ModelFile.prototype.clearOffset = function () { return this.internal_clearField(3); };
proto.acceleration.ModelFile.prototype.hasOffset = function () { return this.internal_hasField(3); };
proto.acceleration.ModelFile.prototype.getLength = function () { return this.internal_getField(4); };
proto.acceleration.ModelFile.prototype.setLength = function (a) { return this.internal_setField(4, a); };
proto.acceleration.ModelFile.prototype.clearLength = function () { return this.internal_clearField(4); };
proto.acceleration.ModelFile.prototype.hasLength = function () { return this.internal_hasField(4); };
proto.acceleration.ModelFile.internalDoNotUse$proto$acceleration$ModelFile$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readString, 2: jspb.internal.binary.readInt64, 3: jspb.internal.binary.readInt64, 4: jspb.internal.binary.readInt64 }; };
proto.acceleration.ModelFile.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.ModelFile.serializeBinaryToWriter); };
proto.acceleration.ModelFile.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeString(b, a, 1); jspb.internal.binary.writeInt64(b, a, 2); jspb.internal.binary.writeInt64(b, a, 3); jspb.internal.binary.writeInt64(b, a, 4); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.acceleration.ModelFile.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.ModelFile, proto.acceleration.ModelFile.internalDoNotUse$proto$acceleration$ModelFile$getBinaryFieldsObject); };
proto.acceleration.ModelFile.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.ModelFile.internalDoNotUse$proto$acceleration$ModelFile$getBinaryFieldsObject); };
proto.acceleration.ModelFile.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.ModelFile, a); };
proto.acceleration.ModelFile.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.ModelFile.fromObject = function (a) { var b = new proto.acceleration.ModelFile; null != a.filename && b.internal_setField(1, a.filename); null != a.fd && b.internal_setField(2, a.fd); null != a.offset && b.internal_setField(3, a.offset); null != a.length && b.internal_setField(4, a.length); return b; });
proto.acceleration.ModelFile.prototype.toObject = function (a) { return proto.acceleration.ModelFile.internal_toObject(a, this); };
proto.acceleration.ModelFile.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { filename: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), fd: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)), offset: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(3)), length: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(4)) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.acceleration.CPUSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.acceleration.CPUSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.CPUSettings.prototype.getNumThreads = function () { return this.internal_getIntegerFieldWithDefault(1, -1); };
proto.acceleration.CPUSettings.prototype.setNumThreads = function (a) { return this.internal_setField(1, a); };
proto.acceleration.CPUSettings.prototype.clearNumThreads = function () { return this.internal_clearField(1); };
proto.acceleration.CPUSettings.prototype.hasNumThreads = function () { return this.internal_hasField(1); };
proto.acceleration.CPUSettings.internalDoNotUse$proto$acceleration$CPUSettings$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readInt32 }; };
proto.acceleration.CPUSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.CPUSettings.serializeBinaryToWriter); };
proto.acceleration.CPUSettings.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeInt32(b, a, 1); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.acceleration.CPUSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.CPUSettings, proto.acceleration.CPUSettings.internalDoNotUse$proto$acceleration$CPUSettings$getBinaryFieldsObject); };
proto.acceleration.CPUSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.CPUSettings.internalDoNotUse$proto$acceleration$CPUSettings$getBinaryFieldsObject); };
proto.acceleration.CPUSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.CPUSettings, a); };
proto.acceleration.CPUSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.CPUSettings.fromObject = function (a) { var b = new proto.acceleration.CPUSettings; null != a.numThreads && b.internal_setField(1, a.numThreads); return b; });
proto.acceleration.CPUSettings.prototype.toObject = function (a) { return proto.acceleration.CPUSettings.internal_toObject(a, this); };
proto.acceleration.CPUSettings.internal_toObject = function (a, b) { if (null != b) {
    var c = { numThreads: b.internal_getIntegerFieldWithDefault(1, -1) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.acceleration.CoralDelegateSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.acceleration.CoralDelegateSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.CoralDelegateSettings.prototype.getDevice = function () { return this.internal_getField(1); };
proto.acceleration.CoralDelegateSettings.prototype.setDevice = function (a) { return this.internal_setField(1, a); };
proto.acceleration.CoralDelegateSettings.prototype.clearDevice = function () { return this.internal_clearField(1); };
proto.acceleration.CoralDelegateSettings.prototype.hasDevice = function () { return this.internal_hasField(1); };
proto.acceleration.CoralDelegateSettings.prototype.getPerformance = function () { return this.internal_getFieldWithDefault(2, 1); };
proto.acceleration.CoralDelegateSettings.prototype.setPerformance = function (a) { return this.internal_setField(2, a); };
proto.acceleration.CoralDelegateSettings.prototype.clearPerformance = function () { return this.internal_clearField(2); };
proto.acceleration.CoralDelegateSettings.prototype.hasPerformance = function () { return this.internal_hasField(2); };
proto.acceleration.CoralDelegateSettings.prototype.getUsbAlwaysDfu = function () { return this.internal_getBooleanField(3); };
proto.acceleration.CoralDelegateSettings.prototype.setUsbAlwaysDfu = function (a) { return this.internal_setField(3, a); };
proto.acceleration.CoralDelegateSettings.prototype.clearUsbAlwaysDfu = function () { return this.internal_clearField(3); };
proto.acceleration.CoralDelegateSettings.prototype.hasUsbAlwaysDfu = function () { return this.internal_hasField(3); };
proto.acceleration.CoralDelegateSettings.prototype.getUsbMaxBulkInQueueLength = function () { return this.internal_getField(4); };
proto.acceleration.CoralDelegateSettings.prototype.setUsbMaxBulkInQueueLength = function (a) { return this.internal_setField(4, a); };
proto.acceleration.CoralDelegateSettings.prototype.clearUsbMaxBulkInQueueLength = function () { return this.internal_clearField(4); };
proto.acceleration.CoralDelegateSettings.prototype.hasUsbMaxBulkInQueueLength = function () { return this.internal_hasField(4); };
proto.acceleration.CoralDelegateSettings.internalDoNotUse$proto$acceleration$CoralDelegateSettings$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readString, 2: jspb.internal.binary.readEnum, 3: jspb.internal.binary.readBool, 4: jspb.internal.binary.readInt32 }; };
proto.acceleration.CoralDelegateSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.CoralDelegateSettings.serializeBinaryToWriter); };
proto.acceleration.CoralDelegateSettings.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeString(b, a, 1); jspb.internal.binary.writeEnum(b, a, 2); jspb.internal.binary.writeBool(b, a, 3); jspb.internal.binary.writeInt32(b, a, 4); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.acceleration.CoralDelegateSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.CoralDelegateSettings, proto.acceleration.CoralDelegateSettings.internalDoNotUse$proto$acceleration$CoralDelegateSettings$getBinaryFieldsObject); };
proto.acceleration.CoralDelegateSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.CoralDelegateSettings.internalDoNotUse$proto$acceleration$CoralDelegateSettings$getBinaryFieldsObject); };
proto.acceleration.CoralDelegateSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.CoralDelegateSettings, a); };
proto.acceleration.CoralDelegateSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.CoralDelegateSettings.fromObject = function (a) { var b = new proto.acceleration.CoralDelegateSettings; null != a.device && b.internal_setField(1, a.device); null != a.performance && b.internal_setField(2, a.performance); null != a.usbAlwaysDfu && b.internal_setField(3, a.usbAlwaysDfu); null != a.usbMaxBulkInQueueLength && b.internal_setField(4, a.usbMaxBulkInQueueLength); return b; });
proto.acceleration.CoralDelegateSettings.prototype.toObject = function (a) { return proto.acceleration.CoralDelegateSettings.internal_toObject(a, this); };
proto.acceleration.CoralDelegateSettings.internal_toObject = function (a, b) { if (null != b) {
    var c = { device: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), performance: b.internal_getFieldWithDefault(2, 1), usbAlwaysDfu: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(3)), usbMaxBulkInQueueLength: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(4)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.acceleration.CoralDelegateSettings.Performance = { UNDEFINED: 0, MAXIMUM: 1, HIGH: 2, MEDIUM: 3, LOW: 4 };
proto.acceleration.EdgeTpuDelegateDeviceSpec = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a, -1, proto.acceleration.EdgeTpuDelegateDeviceSpec.repeatedFields_); };
$jscomp.inherits(proto.acceleration.EdgeTpuDelegateDeviceSpec, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.getPlatformType = function () { return this.internal_getField(1); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.setPlatformType = function (a) { return this.internal_setField(1, a); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.clearPlatformType = function () { return this.internal_clearField(1); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.hasPlatformType = function () { return this.internal_hasField(1); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.getNumChips = function () { return this.internal_getField(2); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.setNumChips = function (a) { return this.internal_setField(2, a); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.clearNumChips = function () { return this.internal_clearField(2); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.hasNumChips = function () { return this.internal_hasField(2); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.getDevicePathsList = function () { return this.internal_getRepeatedField(3); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.setDevicePathsList = function (a) { return this.internal_setRepeatedField(3, a); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.addDevicePaths = function (a, b) { return this.internal_addToRepeatedField(3, a, b); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.clearDevicePathsList = function () { return this.internal_clearRepeatedField(3); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.getChipFamily = function () { return this.internal_getField(4); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.setChipFamily = function (a) { return this.internal_setField(4, a); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.clearChipFamily = function () { return this.internal_clearField(4); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.hasChipFamily = function () { return this.internal_hasField(4); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.internalDoNotUse$proto$acceleration$EdgeTpuDelegateDeviceSpec$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readEnum, 2: jspb.internal.binary.readInt32, 3: jspb.internal.binary.readRepeatedString, 4: jspb.internal.binary.readInt32 }; };
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.EdgeTpuDelegateDeviceSpec.serializeBinaryToWriter); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeEnum(b, a, 1); jspb.internal.binary.writeInt32(b, a, 2); jspb.internal.binary.writeRepeatedString(b, a, 3); jspb.internal.binary.writeInt32(b, a, 4); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.EdgeTpuDelegateDeviceSpec, proto.acceleration.EdgeTpuDelegateDeviceSpec.internalDoNotUse$proto$acceleration$EdgeTpuDelegateDeviceSpec$getBinaryFieldsObject); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.EdgeTpuDelegateDeviceSpec.internalDoNotUse$proto$acceleration$EdgeTpuDelegateDeviceSpec$getBinaryFieldsObject); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.EdgeTpuDelegateDeviceSpec, a); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.repeatedFields_ = [3];
proto.acceleration.EdgeTpuDelegateDeviceSpec.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.EdgeTpuDelegateDeviceSpec.fromObject = function (a) { var b = new proto.acceleration.EdgeTpuDelegateDeviceSpec; null != a.platformType && b.internal_setField(1, a.platformType); null != a.numChips && b.internal_setField(2, a.numChips); null != a.devicePathsList && b.internal_setRepeatedField(3, a.devicePathsList); null != a.chipFamily && b.internal_setField(4, a.chipFamily); return b; });
proto.acceleration.EdgeTpuDelegateDeviceSpec.prototype.toObject = function (a) { return proto.acceleration.EdgeTpuDelegateDeviceSpec.internal_toObject(a, this); };
proto.acceleration.EdgeTpuDelegateDeviceSpec.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { platformType: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), numChips: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)), devicePathsList: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getRepeatedField(3)), chipFamily: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(4)) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.acceleration.EdgeTpuDelegateDeviceSpec.PlatformType = { MMIO: 0, REFERENCE: 1, SIMULATOR: 2, REMOTE_SIMULATOR: 3 };
proto.acceleration.EdgeTpuDelegateInactivePowerConfig = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.acceleration.EdgeTpuDelegateInactivePowerConfig, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.prototype.getInactivePowerState = function () { return this.internal_getField(1); };
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.prototype.setInactivePowerState = function (a) { return this.internal_setField(1, a); };
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.prototype.clearInactivePowerState = function () { return this.internal_clearField(1); };
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.prototype.hasInactivePowerState = function () { return this.internal_hasField(1); };
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.prototype.getInactiveTimeoutUs = function () { return this.internal_getField(2); };
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.prototype.setInactiveTimeoutUs = function (a) { return this.internal_setField(2, a); };
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.prototype.clearInactiveTimeoutUs = function () { return this.internal_clearField(2); };
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.prototype.hasInactiveTimeoutUs = function () { return this.internal_hasField(2); };
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.internalDoNotUse$proto$acceleration$EdgeTpuDelegateInactivePowerConfig$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readEnum, 2: jspb.internal.binary.readInt64 }; };
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.EdgeTpuDelegateInactivePowerConfig.serializeBinaryToWriter); };
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeEnum(b, a, 1); jspb.internal.binary.writeInt64(b, a, 2); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.EdgeTpuDelegateInactivePowerConfig, proto.acceleration.EdgeTpuDelegateInactivePowerConfig.internalDoNotUse$proto$acceleration$EdgeTpuDelegateInactivePowerConfig$getBinaryFieldsObject); };
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.EdgeTpuDelegateInactivePowerConfig.internalDoNotUse$proto$acceleration$EdgeTpuDelegateInactivePowerConfig$getBinaryFieldsObject); };
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.EdgeTpuDelegateInactivePowerConfig, a); };
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.EdgeTpuDelegateInactivePowerConfig.fromObject = function (a) { var b = new proto.acceleration.EdgeTpuDelegateInactivePowerConfig; null != a.inactivePowerState && b.internal_setField(1, a.inactivePowerState); null != a.inactiveTimeoutUs && b.internal_setField(2, a.inactiveTimeoutUs); return b; });
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.prototype.toObject = function (a) { return proto.acceleration.EdgeTpuDelegateInactivePowerConfig.internal_toObject(a, this); };
proto.acceleration.EdgeTpuDelegateInactivePowerConfig.internal_toObject = function (a, b) { if (null != b) {
    var c = { inactivePowerState: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), inactiveTimeoutUs: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.acceleration.EdgeTpuDelegateSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a, -1, proto.acceleration.EdgeTpuDelegateSettings.repeatedFields_); };
$jscomp.inherits(proto.acceleration.EdgeTpuDelegateSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.EdgeTpuDelegateSettings.prototype.getInferencePowerState = function () { return this.internal_getField(1); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.setInferencePowerState = function (a) { return this.internal_setField(1, a); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.clearInferencePowerState = function () { return this.internal_clearField(1); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.hasInferencePowerState = function () { return this.internal_hasField(1); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.getInactivePowerConfigsList = function () { return this.internal_getRepeatedWrapperField(proto.acceleration.EdgeTpuDelegateInactivePowerConfig, 2); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.setInactivePowerConfigsList = function (a) { return this.internal_setRepeatedWrapperField(2, a); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.addInactivePowerConfigs = function (a, b) { return this.internal_addToRepeatedWrapperField(2, a, proto.acceleration.EdgeTpuDelegateInactivePowerConfig, b); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.addAndReturnInactivePowerConfigs = function (a, b) { return this.internal_addAndReturnRepeatedWrapperField(2, a, proto.acceleration.EdgeTpuDelegateInactivePowerConfig, b); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.clearInactivePowerConfigsList = function () { return this.internal_clearRepeatedWrapperField(2); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.getInferencePriority = function () { return this.internal_getIntegerFieldWithDefault(3, -1); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.setInferencePriority = function (a) { return this.internal_setField(3, a); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.clearInferencePriority = function () { return this.internal_clearField(3); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.hasInferencePriority = function () { return this.internal_hasField(3); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.getEdgetpuDeviceSpec = function () { return this.internal_getWrapperField(proto.acceleration.EdgeTpuDelegateDeviceSpec, 4); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.setEdgetpuDeviceSpec = function (a) { return this.internal_setWrapperField(4, a); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.clearEdgetpuDeviceSpec = function () { return this.internal_clearWrapperField(4); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.hasEdgetpuDeviceSpec = function () { return this.internal_hasField(4); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.getModelToken = function () { return this.internal_getField(5); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.setModelToken = function (a) { return this.internal_setField(5, a); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.clearModelToken = function () { return this.internal_clearField(5); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.hasModelToken = function () { return this.internal_hasField(5); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.getFloatTruncationType = function () { return this.internal_getField(6); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.setFloatTruncationType = function (a) { return this.internal_setField(6, a); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.clearFloatTruncationType = function () { return this.internal_clearField(6); };
proto.acceleration.EdgeTpuDelegateSettings.prototype.hasFloatTruncationType = function () { return this.internal_hasField(6); };
proto.acceleration.EdgeTpuDelegateSettings.internalDoNotUse$proto$acceleration$EdgeTpuDelegateSettings$getBinaryFieldsObject = function () {
    return { 1: jspb.internal.binary.readEnum, 2: [jspb.internal.binary.readRepeatedMessage, proto.acceleration.EdgeTpuDelegateInactivePowerConfig, proto.acceleration.EdgeTpuDelegateInactivePowerConfig.internalDoNotUse$proto$acceleration$EdgeTpuDelegateInactivePowerConfig$getBinaryFieldsObject], 3: jspb.internal.binary.readInt32, 4: [jspb.internal.binary.readMessage, proto.acceleration.EdgeTpuDelegateDeviceSpec,
            proto.acceleration.EdgeTpuDelegateDeviceSpec.internalDoNotUse$proto$acceleration$EdgeTpuDelegateDeviceSpec$getBinaryFieldsObject], 5: jspb.internal.binary.readString, 6: jspb.internal.binary.readEnum };
};
proto.acceleration.EdgeTpuDelegateSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.EdgeTpuDelegateSettings.serializeBinaryToWriter); };
proto.acceleration.EdgeTpuDelegateSettings.serializeBinaryToWriter = function (a, b) {
    jspb.internal.binary.writeEnum(b, a, 1);
    jspb.internal.binary.writeRepeatedMessage(b, a, 2, proto.acceleration.EdgeTpuDelegateInactivePowerConfig, proto.acceleration.EdgeTpuDelegateInactivePowerConfig.serializeBinaryToWriter);
    jspb.internal.binary.writeInt32(b, a, 3);
    jspb.internal.binary.writeMessage(b, a, 4, proto.acceleration.EdgeTpuDelegateDeviceSpec, proto.acceleration.EdgeTpuDelegateDeviceSpec.serializeBinaryToWriter);
    jspb.internal.binary.writeString(b, a, 5);
    jspb.internal.binary.writeEnum(b, a, 6);
    jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b);
};
proto.acceleration.EdgeTpuDelegateSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.EdgeTpuDelegateSettings, proto.acceleration.EdgeTpuDelegateSettings.internalDoNotUse$proto$acceleration$EdgeTpuDelegateSettings$getBinaryFieldsObject); };
proto.acceleration.EdgeTpuDelegateSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.EdgeTpuDelegateSettings.internalDoNotUse$proto$acceleration$EdgeTpuDelegateSettings$getBinaryFieldsObject); };
proto.acceleration.EdgeTpuDelegateSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.EdgeTpuDelegateSettings, a); };
proto.acceleration.EdgeTpuDelegateSettings.repeatedFields_ = [2];
proto.acceleration.EdgeTpuDelegateSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.EdgeTpuDelegateSettings.fromObject = function (a) {
    var b = new proto.acceleration.EdgeTpuDelegateSettings;
    null != a.inferencePowerState && b.internal_setField(1, a.inferencePowerState);
    a.inactivePowerConfigsList && b.internal_setRepeatedWrapperField(2, a.inactivePowerConfigsList.map(proto.acceleration.EdgeTpuDelegateInactivePowerConfig.fromObject));
    null != a.inferencePriority && b.internal_setField(3, a.inferencePriority);
    a.edgetpuDeviceSpec &&
        b.internal_setWrapperField(4, proto.acceleration.EdgeTpuDelegateDeviceSpec.fromObject(a.edgetpuDeviceSpec));
    null != a.modelToken && b.internal_setField(5, a.modelToken);
    null != a.floatTruncationType && b.internal_setField(6, a.floatTruncationType);
    return b;
});
proto.acceleration.EdgeTpuDelegateSettings.prototype.toObject = function (a) { return proto.acceleration.EdgeTpuDelegateSettings.internal_toObject(a, this); };
proto.acceleration.EdgeTpuDelegateSettings.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { inferencePowerState: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), inactivePowerConfigsList: module$contents$jspb$internal$public_for_gencode_toObjectList(b.getInactivePowerConfigsList(), proto.acceleration.EdgeTpuDelegateInactivePowerConfig.internal_toObject, a), inferencePriority: b.internal_getIntegerFieldWithDefault(3, -1), edgetpuDeviceSpec: proto.acceleration.EdgeTpuDelegateDeviceSpec.internal_toObject(a, b.getEdgetpuDeviceSpec()), modelToken: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(5)), floatTruncationType: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(6)) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.acceleration.EdgeTpuDelegateSettings.FloatTruncationType = { UNSPECIFIED: 0, NO_TRUNCATION: 1, BFLOAT16: 2, HALF: 3 };
proto.acceleration.FallbackSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.acceleration.FallbackSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.FallbackSettings.prototype.getAllowAutomaticFallbackOnCompilationError = function () { return this.internal_getBooleanField(5); };
proto.acceleration.FallbackSettings.prototype.setAllowAutomaticFallbackOnCompilationError = function (a) { return this.internal_setField(5, a); };
proto.acceleration.FallbackSettings.prototype.clearAllowAutomaticFallbackOnCompilationError = function () { return this.internal_clearField(5); };
proto.acceleration.FallbackSettings.prototype.hasAllowAutomaticFallbackOnCompilationError = function () { return this.internal_hasField(5); };
proto.acceleration.FallbackSettings.prototype.getAllowAutomaticFallbackOnExecutionError = function () { return this.internal_getBooleanField(6); };
proto.acceleration.FallbackSettings.prototype.setAllowAutomaticFallbackOnExecutionError = function (a) { return this.internal_setField(6, a); };
proto.acceleration.FallbackSettings.prototype.clearAllowAutomaticFallbackOnExecutionError = function () { return this.internal_clearField(6); };
proto.acceleration.FallbackSettings.prototype.hasAllowAutomaticFallbackOnExecutionError = function () { return this.internal_hasField(6); };
proto.acceleration.FallbackSettings.internalDoNotUse$proto$acceleration$FallbackSettings$getBinaryFieldsObject = function () { return { 5: jspb.internal.binary.readBool, 6: jspb.internal.binary.readBool }; };
proto.acceleration.FallbackSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.FallbackSettings.serializeBinaryToWriter); };
proto.acceleration.FallbackSettings.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeBool(b, a, 5); jspb.internal.binary.writeBool(b, a, 6); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.acceleration.FallbackSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.FallbackSettings, proto.acceleration.FallbackSettings.internalDoNotUse$proto$acceleration$FallbackSettings$getBinaryFieldsObject); };
proto.acceleration.FallbackSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.FallbackSettings.internalDoNotUse$proto$acceleration$FallbackSettings$getBinaryFieldsObject); };
proto.acceleration.FallbackSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.FallbackSettings, a); };
proto.acceleration.FallbackSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.FallbackSettings.fromObject = function (a) { var b = new proto.acceleration.FallbackSettings; null != a.allowAutomaticFallbackOnCompilationError && b.internal_setField(5, a.allowAutomaticFallbackOnCompilationError); null != a.allowAutomaticFallbackOnExecutionError && b.internal_setField(6, a.allowAutomaticFallbackOnExecutionError); return b; });
proto.acceleration.FallbackSettings.prototype.toObject = function (a) { return proto.acceleration.FallbackSettings.internal_toObject(a, this); };
proto.acceleration.FallbackSettings.internal_toObject = function (a, b) { if (null != b) {
    var c = { allowAutomaticFallbackOnCompilationError: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(5)), allowAutomaticFallbackOnExecutionError: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(6)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.acceleration.GPUDelegateSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.acceleration.GPUDelegateSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.GPUDelegateSettings.prototype.getIsPrecisionLossAllowed = function () { return this.internal_getBooleanField(1); };
proto.acceleration.GPUDelegateSettings.prototype.setIsPrecisionLossAllowed = function (a) { return this.internal_setField(1, a); };
proto.acceleration.GPUDelegateSettings.prototype.clearIsPrecisionLossAllowed = function () { return this.internal_clearField(1); };
proto.acceleration.GPUDelegateSettings.prototype.hasIsPrecisionLossAllowed = function () { return this.internal_hasField(1); };
proto.acceleration.GPUDelegateSettings.prototype.getInferencePreference = function () { return this.internal_getField(2); };
proto.acceleration.GPUDelegateSettings.prototype.setInferencePreference = function (a) { return this.internal_setField(2, a); };
proto.acceleration.GPUDelegateSettings.prototype.clearInferencePreference = function () { return this.internal_clearField(2); };
proto.acceleration.GPUDelegateSettings.prototype.hasInferencePreference = function () { return this.internal_hasField(2); };
proto.acceleration.GPUDelegateSettings.prototype.getEnableQuantizedInference = function () { return this.internal_getBooleanFieldWithDefault(3, !0); };
proto.acceleration.GPUDelegateSettings.prototype.setEnableQuantizedInference = function (a) { return this.internal_setField(3, a); };
proto.acceleration.GPUDelegateSettings.prototype.clearEnableQuantizedInference = function () { return this.internal_clearField(3); };
proto.acceleration.GPUDelegateSettings.prototype.hasEnableQuantizedInference = function () { return this.internal_hasField(3); };
proto.acceleration.GPUDelegateSettings.prototype.getForceBackend = function () { return this.internal_getField(4); };
proto.acceleration.GPUDelegateSettings.prototype.setForceBackend = function (a) { return this.internal_setField(4, a); };
proto.acceleration.GPUDelegateSettings.prototype.clearForceBackend = function () { return this.internal_clearField(4); };
proto.acceleration.GPUDelegateSettings.prototype.hasForceBackend = function () { return this.internal_hasField(4); };
proto.acceleration.GPUDelegateSettings.prototype.getInferencePriority1 = function () { return this.internal_getFieldWithDefault(5, 0); };
proto.acceleration.GPUDelegateSettings.prototype.setInferencePriority1 = function (a) { return this.internal_setField(5, a); };
proto.acceleration.GPUDelegateSettings.prototype.clearInferencePriority1 = function () { return this.internal_clearField(5); };
proto.acceleration.GPUDelegateSettings.prototype.hasInferencePriority1 = function () { return this.internal_hasField(5); };
proto.acceleration.GPUDelegateSettings.prototype.getInferencePriority2 = function () { return this.internal_getFieldWithDefault(6, 0); };
proto.acceleration.GPUDelegateSettings.prototype.setInferencePriority2 = function (a) { return this.internal_setField(6, a); };
proto.acceleration.GPUDelegateSettings.prototype.clearInferencePriority2 = function () { return this.internal_clearField(6); };
proto.acceleration.GPUDelegateSettings.prototype.hasInferencePriority2 = function () { return this.internal_hasField(6); };
proto.acceleration.GPUDelegateSettings.prototype.getInferencePriority3 = function () { return this.internal_getFieldWithDefault(7, 0); };
proto.acceleration.GPUDelegateSettings.prototype.setInferencePriority3 = function (a) { return this.internal_setField(7, a); };
proto.acceleration.GPUDelegateSettings.prototype.clearInferencePriority3 = function () { return this.internal_clearField(7); };
proto.acceleration.GPUDelegateSettings.prototype.hasInferencePriority3 = function () { return this.internal_hasField(7); };
proto.acceleration.GPUDelegateSettings.prototype.getCacheDirectory = function () { return this.internal_getField(8); };
proto.acceleration.GPUDelegateSettings.prototype.setCacheDirectory = function (a) { return this.internal_setField(8, a); };
proto.acceleration.GPUDelegateSettings.prototype.clearCacheDirectory = function () { return this.internal_clearField(8); };
proto.acceleration.GPUDelegateSettings.prototype.hasCacheDirectory = function () { return this.internal_hasField(8); };
proto.acceleration.GPUDelegateSettings.prototype.getModelToken = function () { return this.internal_getField(9); };
proto.acceleration.GPUDelegateSettings.prototype.setModelToken = function (a) { return this.internal_setField(9, a); };
proto.acceleration.GPUDelegateSettings.prototype.clearModelToken = function () { return this.internal_clearField(9); };
proto.acceleration.GPUDelegateSettings.prototype.hasModelToken = function () { return this.internal_hasField(9); };
proto.acceleration.GPUDelegateSettings.internalDoNotUse$proto$acceleration$GPUDelegateSettings$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readBool, 2: jspb.internal.binary.readEnum, 3: jspb.internal.binary.readBool, 4: jspb.internal.binary.readEnum, 5: jspb.internal.binary.readEnum, 6: jspb.internal.binary.readEnum, 7: jspb.internal.binary.readEnum, 8: jspb.internal.binary.readString, 9: jspb.internal.binary.readString }; };
proto.acceleration.GPUDelegateSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.GPUDelegateSettings.serializeBinaryToWriter); };
proto.acceleration.GPUDelegateSettings.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeBool(b, a, 1); jspb.internal.binary.writeEnum(b, a, 2); jspb.internal.binary.writeBool(b, a, 3); jspb.internal.binary.writeEnum(b, a, 4); jspb.internal.binary.writeEnum(b, a, 5); jspb.internal.binary.writeEnum(b, a, 6); jspb.internal.binary.writeEnum(b, a, 7); jspb.internal.binary.writeString(b, a, 8); jspb.internal.binary.writeString(b, a, 9); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.acceleration.GPUDelegateSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.GPUDelegateSettings, proto.acceleration.GPUDelegateSettings.internalDoNotUse$proto$acceleration$GPUDelegateSettings$getBinaryFieldsObject); };
proto.acceleration.GPUDelegateSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.GPUDelegateSettings.internalDoNotUse$proto$acceleration$GPUDelegateSettings$getBinaryFieldsObject); };
proto.acceleration.GPUDelegateSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.GPUDelegateSettings, a); };
proto.acceleration.GPUDelegateSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.GPUDelegateSettings.fromObject = function (a) {
    var b = new proto.acceleration.GPUDelegateSettings;
    null != a.isPrecisionLossAllowed && b.internal_setField(1, a.isPrecisionLossAllowed);
    null != a.inferencePreference && b.internal_setField(2, a.inferencePreference);
    null != a.enableQuantizedInference && b.internal_setField(3, a.enableQuantizedInference);
    null != a.forceBackend && b.internal_setField(4, a.forceBackend);
    null != a.inferencePriority1 &&
        b.internal_setField(5, a.inferencePriority1);
    null != a.inferencePriority2 && b.internal_setField(6, a.inferencePriority2);
    null != a.inferencePriority3 && b.internal_setField(7, a.inferencePriority3);
    null != a.cacheDirectory && b.internal_setField(8, a.cacheDirectory);
    null != a.modelToken && b.internal_setField(9, a.modelToken);
    return b;
});
proto.acceleration.GPUDelegateSettings.prototype.toObject = function (a) { return proto.acceleration.GPUDelegateSettings.internal_toObject(a, this); };
proto.acceleration.GPUDelegateSettings.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { isPrecisionLossAllowed: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(1)), inferencePreference: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)), enableQuantizedInference: b.internal_getBooleanFieldWithDefault(3, !0), forceBackend: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(4)), inferencePriority1: b.internal_getFieldWithDefault(5, 0), inferencePriority2: b.internal_getFieldWithDefault(6, 0), inferencePriority3: b.internal_getFieldWithDefault(7, 0), cacheDirectory: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(8)), modelToken: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(9)) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.acceleration.HangDetectionSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.acceleration.HangDetectionSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.HangDetectionSettings.prototype.getBehaviour = function () { return this.internal_getField(1); };
proto.acceleration.HangDetectionSettings.prototype.setBehaviour = function (a) { return this.internal_setField(1, a); };
proto.acceleration.HangDetectionSettings.prototype.clearBehaviour = function () { return this.internal_clearField(1); };
proto.acceleration.HangDetectionSettings.prototype.hasBehaviour = function () { return this.internal_hasField(1); };
proto.acceleration.HangDetectionSettings.prototype.getCrashTriggerPercentage = function () { return this.internal_getIntegerFieldWithDefault(2, 100); };
proto.acceleration.HangDetectionSettings.prototype.setCrashTriggerPercentage = function (a) { return this.internal_setField(2, a); };
proto.acceleration.HangDetectionSettings.prototype.clearCrashTriggerPercentage = function () { return this.internal_clearField(2); };
proto.acceleration.HangDetectionSettings.prototype.hasCrashTriggerPercentage = function () { return this.internal_hasField(2); };
proto.acceleration.HangDetectionSettings.prototype.getHangTimeoutMs = function () { return this.internal_getField(3); };
proto.acceleration.HangDetectionSettings.prototype.setHangTimeoutMs = function (a) { return this.internal_setField(3, a); };
proto.acceleration.HangDetectionSettings.prototype.clearHangTimeoutMs = function () { return this.internal_clearField(3); };
proto.acceleration.HangDetectionSettings.prototype.hasHangTimeoutMs = function () { return this.internal_hasField(3); };
proto.acceleration.HangDetectionSettings.internalDoNotUse$proto$acceleration$HangDetectionSettings$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readEnum, 2: jspb.internal.binary.readInt32, 3: jspb.internal.binary.readInt32 }; };
proto.acceleration.HangDetectionSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.HangDetectionSettings.serializeBinaryToWriter); };
proto.acceleration.HangDetectionSettings.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeEnum(b, a, 1); jspb.internal.binary.writeInt32(b, a, 2); jspb.internal.binary.writeInt32(b, a, 3); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.acceleration.HangDetectionSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.HangDetectionSettings, proto.acceleration.HangDetectionSettings.internalDoNotUse$proto$acceleration$HangDetectionSettings$getBinaryFieldsObject); };
proto.acceleration.HangDetectionSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.HangDetectionSettings.internalDoNotUse$proto$acceleration$HangDetectionSettings$getBinaryFieldsObject); };
proto.acceleration.HangDetectionSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.HangDetectionSettings, a); };
proto.acceleration.HangDetectionSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.HangDetectionSettings.fromObject = function (a) { var b = new proto.acceleration.HangDetectionSettings; null != a.behaviour && b.internal_setField(1, a.behaviour); null != a.crashTriggerPercentage && b.internal_setField(2, a.crashTriggerPercentage); null != a.hangTimeoutMs && b.internal_setField(3, a.hangTimeoutMs); return b; });
proto.acceleration.HangDetectionSettings.prototype.toObject = function (a) { return proto.acceleration.HangDetectionSettings.internal_toObject(a, this); };
proto.acceleration.HangDetectionSettings.internal_toObject = function (a, b) { if (null != b) {
    var c = { behaviour: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), crashTriggerPercentage: b.internal_getIntegerFieldWithDefault(2, 100), hangTimeoutMs: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(3)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.acceleration.HexagonDelegateSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.acceleration.HexagonDelegateSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.HexagonDelegateSettings.prototype.getNoOfHexagonInstancesToCache = function () { return this.internal_getField(1); };
proto.acceleration.HexagonDelegateSettings.prototype.setNoOfHexagonInstancesToCache = function (a) { return this.internal_setField(1, a); };
proto.acceleration.HexagonDelegateSettings.prototype.clearNoOfHexagonInstancesToCache = function () { return this.internal_clearField(1); };
proto.acceleration.HexagonDelegateSettings.prototype.hasNoOfHexagonInstancesToCache = function () { return this.internal_hasField(1); };
proto.acceleration.HexagonDelegateSettings.internalDoNotUse$proto$acceleration$HexagonDelegateSettings$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readInt32 }; };
proto.acceleration.HexagonDelegateSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.HexagonDelegateSettings.serializeBinaryToWriter); };
proto.acceleration.HexagonDelegateSettings.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeInt32(b, a, 1); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.acceleration.HexagonDelegateSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.HexagonDelegateSettings, proto.acceleration.HexagonDelegateSettings.internalDoNotUse$proto$acceleration$HexagonDelegateSettings$getBinaryFieldsObject); };
proto.acceleration.HexagonDelegateSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.HexagonDelegateSettings.internalDoNotUse$proto$acceleration$HexagonDelegateSettings$getBinaryFieldsObject); };
proto.acceleration.HexagonDelegateSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.HexagonDelegateSettings, a); };
proto.acceleration.HexagonDelegateSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.HexagonDelegateSettings.fromObject = function (a) { var b = new proto.acceleration.HexagonDelegateSettings; null != a.noOfHexagonInstancesToCache && b.internal_setField(1, a.noOfHexagonInstancesToCache); return b; });
proto.acceleration.HexagonDelegateSettings.prototype.toObject = function (a) { return proto.acceleration.HexagonDelegateSettings.internal_toObject(a, this); };
proto.acceleration.HexagonDelegateSettings.internal_toObject = function (a, b) { if (null != b) {
    var c = { noOfHexagonInstancesToCache: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.acceleration.NNAPIDelegateSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.acceleration.NNAPIDelegateSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.NNAPIDelegateSettings.prototype.getAcceleratorName = function () { return this.internal_getField(1); };
proto.acceleration.NNAPIDelegateSettings.prototype.setAcceleratorName = function (a) { return this.internal_setField(1, a); };
proto.acceleration.NNAPIDelegateSettings.prototype.clearAcceleratorName = function () { return this.internal_clearField(1); };
proto.acceleration.NNAPIDelegateSettings.prototype.hasAcceleratorName = function () { return this.internal_hasField(1); };
proto.acceleration.NNAPIDelegateSettings.prototype.getCacheDirectory = function () { return this.internal_getField(2); };
proto.acceleration.NNAPIDelegateSettings.prototype.setCacheDirectory = function (a) { return this.internal_setField(2, a); };
proto.acceleration.NNAPIDelegateSettings.prototype.clearCacheDirectory = function () { return this.internal_clearField(2); };
proto.acceleration.NNAPIDelegateSettings.prototype.hasCacheDirectory = function () { return this.internal_hasField(2); };
proto.acceleration.NNAPIDelegateSettings.prototype.getModelToken = function () { return this.internal_getField(3); };
proto.acceleration.NNAPIDelegateSettings.prototype.setModelToken = function (a) { return this.internal_setField(3, a); };
proto.acceleration.NNAPIDelegateSettings.prototype.clearModelToken = function () { return this.internal_clearField(3); };
proto.acceleration.NNAPIDelegateSettings.prototype.hasModelToken = function () { return this.internal_hasField(3); };
proto.acceleration.NNAPIDelegateSettings.prototype.getExecutionPreference = function () { return this.internal_getField(4); };
proto.acceleration.NNAPIDelegateSettings.prototype.setExecutionPreference = function (a) { return this.internal_setField(4, a); };
proto.acceleration.NNAPIDelegateSettings.prototype.clearExecutionPreference = function () { return this.internal_clearField(4); };
proto.acceleration.NNAPIDelegateSettings.prototype.hasExecutionPreference = function () { return this.internal_hasField(4); };
proto.acceleration.NNAPIDelegateSettings.prototype.getNoOfNnapiInstancesToCache = function () { return this.internal_getField(5); };
proto.acceleration.NNAPIDelegateSettings.prototype.setNoOfNnapiInstancesToCache = function (a) { return this.internal_setField(5, a); };
proto.acceleration.NNAPIDelegateSettings.prototype.clearNoOfNnapiInstancesToCache = function () { return this.internal_clearField(5); };
proto.acceleration.NNAPIDelegateSettings.prototype.hasNoOfNnapiInstancesToCache = function () { return this.internal_hasField(5); };
proto.acceleration.NNAPIDelegateSettings.prototype.getFallbackSettings = function () { return this.internal_getWrapperField(proto.acceleration.FallbackSettings, 6); };
proto.acceleration.NNAPIDelegateSettings.prototype.setFallbackSettings = function (a) { return this.internal_setWrapperField(6, a); };
proto.acceleration.NNAPIDelegateSettings.prototype.clearFallbackSettings = function () { return this.internal_clearWrapperField(6); };
proto.acceleration.NNAPIDelegateSettings.prototype.hasFallbackSettings = function () { return this.internal_hasField(6); };
proto.acceleration.NNAPIDelegateSettings.prototype.getAllowNnapiCpuOnAndroid10Plus = function () { return this.internal_getBooleanField(7); };
proto.acceleration.NNAPIDelegateSettings.prototype.setAllowNnapiCpuOnAndroid10Plus = function (a) { return this.internal_setField(7, a); };
proto.acceleration.NNAPIDelegateSettings.prototype.clearAllowNnapiCpuOnAndroid10Plus = function () { return this.internal_clearField(7); };
proto.acceleration.NNAPIDelegateSettings.prototype.hasAllowNnapiCpuOnAndroid10Plus = function () { return this.internal_hasField(7); };
proto.acceleration.NNAPIDelegateSettings.prototype.getExecutionPriority = function () { return this.internal_getField(8); };
proto.acceleration.NNAPIDelegateSettings.prototype.setExecutionPriority = function (a) { return this.internal_setField(8, a); };
proto.acceleration.NNAPIDelegateSettings.prototype.clearExecutionPriority = function () { return this.internal_clearField(8); };
proto.acceleration.NNAPIDelegateSettings.prototype.hasExecutionPriority = function () { return this.internal_hasField(8); };
proto.acceleration.NNAPIDelegateSettings.prototype.getAllowDynamicDimensions = function () { return this.internal_getBooleanField(9); };
proto.acceleration.NNAPIDelegateSettings.prototype.setAllowDynamicDimensions = function (a) { return this.internal_setField(9, a); };
proto.acceleration.NNAPIDelegateSettings.prototype.clearAllowDynamicDimensions = function () { return this.internal_clearField(9); };
proto.acceleration.NNAPIDelegateSettings.prototype.hasAllowDynamicDimensions = function () { return this.internal_hasField(9); };
proto.acceleration.NNAPIDelegateSettings.prototype.getAllowFp16PrecisionForFp32 = function () { return this.internal_getBooleanField(10); };
proto.acceleration.NNAPIDelegateSettings.prototype.setAllowFp16PrecisionForFp32 = function (a) { return this.internal_setField(10, a); };
proto.acceleration.NNAPIDelegateSettings.prototype.clearAllowFp16PrecisionForFp32 = function () { return this.internal_clearField(10); };
proto.acceleration.NNAPIDelegateSettings.prototype.hasAllowFp16PrecisionForFp32 = function () { return this.internal_hasField(10); };
proto.acceleration.NNAPIDelegateSettings.prototype.getUseBurstComputation = function () { return this.internal_getBooleanField(11); };
proto.acceleration.NNAPIDelegateSettings.prototype.setUseBurstComputation = function (a) { return this.internal_setField(11, a); };
proto.acceleration.NNAPIDelegateSettings.prototype.clearUseBurstComputation = function () { return this.internal_clearField(11); };
proto.acceleration.NNAPIDelegateSettings.prototype.hasUseBurstComputation = function () { return this.internal_hasField(11); };
proto.acceleration.NNAPIDelegateSettings.prototype.getSupportLibraryHandle = function () { return this.internal_getField(12); };
proto.acceleration.NNAPIDelegateSettings.prototype.setSupportLibraryHandle = function (a) { return this.internal_setField(12, a); };
proto.acceleration.NNAPIDelegateSettings.prototype.clearSupportLibraryHandle = function () { return this.internal_clearField(12); };
proto.acceleration.NNAPIDelegateSettings.prototype.hasSupportLibraryHandle = function () { return this.internal_hasField(12); };
proto.acceleration.NNAPIDelegateSettings.internalDoNotUse$proto$acceleration$NNAPIDelegateSettings$getBinaryFieldsObject = function () {
    return { 1: jspb.internal.binary.readString, 2: jspb.internal.binary.readString, 3: jspb.internal.binary.readString, 4: jspb.internal.binary.readEnum, 5: jspb.internal.binary.readInt32, 6: [jspb.internal.binary.readMessage, proto.acceleration.FallbackSettings, proto.acceleration.FallbackSettings.internalDoNotUse$proto$acceleration$FallbackSettings$getBinaryFieldsObject], 7: jspb.internal.binary.readBool,
        8: jspb.internal.binary.readEnum, 9: jspb.internal.binary.readBool, 10: jspb.internal.binary.readBool, 11: jspb.internal.binary.readBool, 12: jspb.internal.binary.readInt64 };
};
proto.acceleration.NNAPIDelegateSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.NNAPIDelegateSettings.serializeBinaryToWriter); };
proto.acceleration.NNAPIDelegateSettings.serializeBinaryToWriter = function (a, b) {
    jspb.internal.binary.writeString(b, a, 1);
    jspb.internal.binary.writeString(b, a, 2);
    jspb.internal.binary.writeString(b, a, 3);
    jspb.internal.binary.writeEnum(b, a, 4);
    jspb.internal.binary.writeInt32(b, a, 5);
    jspb.internal.binary.writeMessage(b, a, 6, proto.acceleration.FallbackSettings, proto.acceleration.FallbackSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeBool(b, a, 7);
    jspb.internal.binary.writeEnum(b, a, 8);
    jspb.internal.binary.writeBool(b, a, 9);
    jspb.internal.binary.writeBool(b, a, 10);
    jspb.internal.binary.writeBool(b, a, 11);
    jspb.internal.binary.writeInt64(b, a, 12);
    jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b);
};
proto.acceleration.NNAPIDelegateSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.NNAPIDelegateSettings, proto.acceleration.NNAPIDelegateSettings.internalDoNotUse$proto$acceleration$NNAPIDelegateSettings$getBinaryFieldsObject); };
proto.acceleration.NNAPIDelegateSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.NNAPIDelegateSettings.internalDoNotUse$proto$acceleration$NNAPIDelegateSettings$getBinaryFieldsObject); };
proto.acceleration.NNAPIDelegateSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.NNAPIDelegateSettings, a); };
proto.acceleration.NNAPIDelegateSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.NNAPIDelegateSettings.fromObject = function (a) {
    var b = new proto.acceleration.NNAPIDelegateSettings;
    null != a.acceleratorName && b.internal_setField(1, a.acceleratorName);
    null != a.cacheDirectory && b.internal_setField(2, a.cacheDirectory);
    null != a.modelToken && b.internal_setField(3, a.modelToken);
    null != a.executionPreference && b.internal_setField(4, a.executionPreference);
    null != a.noOfNnapiInstancesToCache && b.internal_setField(5, a.noOfNnapiInstancesToCache);
    a.fallbackSettings && b.internal_setWrapperField(6, proto.acceleration.FallbackSettings.fromObject(a.fallbackSettings));
    null != a.allowNnapiCpuOnAndroid10Plus && b.internal_setField(7, a.allowNnapiCpuOnAndroid10Plus);
    null != a.executionPriority && b.internal_setField(8, a.executionPriority);
    null != a.allowDynamicDimensions && b.internal_setField(9, a.allowDynamicDimensions);
    null != a.allowFp16PrecisionForFp32 && b.internal_setField(10, a.allowFp16PrecisionForFp32);
    null != a.useBurstComputation &&
        b.internal_setField(11, a.useBurstComputation);
    null != a.supportLibraryHandle && b.internal_setField(12, a.supportLibraryHandle);
    return b;
});
proto.acceleration.NNAPIDelegateSettings.prototype.toObject = function (a) { return proto.acceleration.NNAPIDelegateSettings.internal_toObject(a, this); };
proto.acceleration.NNAPIDelegateSettings.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { acceleratorName: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), cacheDirectory: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)), modelToken: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(3)), executionPreference: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(4)),
            noOfNnapiInstancesToCache: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(5)), fallbackSettings: proto.acceleration.FallbackSettings.internal_toObject(a, b.getFallbackSettings()), allowNnapiCpuOnAndroid10Plus: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(7)), executionPriority: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(8)), allowDynamicDimensions: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(9)),
            allowFp16PrecisionForFp32: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(10)), useBurstComputation: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(11)), supportLibraryHandle: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(12)) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.acceleration.XNNPackSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.acceleration.XNNPackSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.XNNPackSettings.prototype.getNumThreads = function () { return this.internal_getField(1); };
proto.acceleration.XNNPackSettings.prototype.setNumThreads = function (a) { return this.internal_setField(1, a); };
proto.acceleration.XNNPackSettings.prototype.clearNumThreads = function () { return this.internal_clearField(1); };
proto.acceleration.XNNPackSettings.prototype.hasNumThreads = function () { return this.internal_hasField(1); };
proto.acceleration.XNNPackSettings.internalDoNotUse$proto$acceleration$XNNPackSettings$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readInt32 }; };
proto.acceleration.XNNPackSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.XNNPackSettings.serializeBinaryToWriter); };
proto.acceleration.XNNPackSettings.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeInt32(b, a, 1); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.acceleration.XNNPackSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.XNNPackSettings, proto.acceleration.XNNPackSettings.internalDoNotUse$proto$acceleration$XNNPackSettings$getBinaryFieldsObject); };
proto.acceleration.XNNPackSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.XNNPackSettings.internalDoNotUse$proto$acceleration$XNNPackSettings$getBinaryFieldsObject); };
proto.acceleration.XNNPackSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.XNNPackSettings, a); };
proto.acceleration.XNNPackSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.XNNPackSettings.fromObject = function (a) { var b = new proto.acceleration.XNNPackSettings; null != a.numThreads && b.internal_setField(1, a.numThreads); return b; });
proto.acceleration.XNNPackSettings.prototype.toObject = function (a) { return proto.acceleration.XNNPackSettings.internal_toObject(a, this); };
proto.acceleration.XNNPackSettings.internal_toObject = function (a, b) { if (null != b) {
    var c = { numThreads: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.acceleration.TFLiteSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.acceleration.TFLiteSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.TFLiteSettings.prototype.getDelegate = function () { return this.internal_getField(1); };
proto.acceleration.TFLiteSettings.prototype.setDelegate = function (a) { return this.internal_setField(1, a); };
proto.acceleration.TFLiteSettings.prototype.clearDelegate = function () { return this.internal_clearField(1); };
proto.acceleration.TFLiteSettings.prototype.hasDelegate = function () { return this.internal_hasField(1); };
proto.acceleration.TFLiteSettings.prototype.getNnapiSettings = function () { return this.internal_getWrapperField(proto.acceleration.NNAPIDelegateSettings, 2); };
proto.acceleration.TFLiteSettings.prototype.setNnapiSettings = function (a) { return this.internal_setWrapperField(2, a); };
proto.acceleration.TFLiteSettings.prototype.clearNnapiSettings = function () { return this.internal_clearWrapperField(2); };
proto.acceleration.TFLiteSettings.prototype.hasNnapiSettings = function () { return this.internal_hasField(2); };
proto.acceleration.TFLiteSettings.prototype.getGpuSettings = function () { return this.internal_getWrapperField(proto.acceleration.GPUDelegateSettings, 3); };
proto.acceleration.TFLiteSettings.prototype.setGpuSettings = function (a) { return this.internal_setWrapperField(3, a); };
proto.acceleration.TFLiteSettings.prototype.clearGpuSettings = function () { return this.internal_clearWrapperField(3); };
proto.acceleration.TFLiteSettings.prototype.hasGpuSettings = function () { return this.internal_hasField(3); };
proto.acceleration.TFLiteSettings.prototype.getCpuSettings = function () { return this.internal_getWrapperField(proto.acceleration.CPUSettings, 4); };
proto.acceleration.TFLiteSettings.prototype.setCpuSettings = function (a) { return this.internal_setWrapperField(4, a); };
proto.acceleration.TFLiteSettings.prototype.clearCpuSettings = function () { return this.internal_clearWrapperField(4); };
proto.acceleration.TFLiteSettings.prototype.hasCpuSettings = function () { return this.internal_hasField(4); };
proto.acceleration.TFLiteSettings.prototype.getHexagonSettings = function () { return this.internal_getWrapperField(proto.acceleration.HexagonDelegateSettings, 5); };
proto.acceleration.TFLiteSettings.prototype.setHexagonSettings = function (a) { return this.internal_setWrapperField(5, a); };
proto.acceleration.TFLiteSettings.prototype.clearHexagonSettings = function () { return this.internal_clearWrapperField(5); };
proto.acceleration.TFLiteSettings.prototype.hasHexagonSettings = function () { return this.internal_hasField(5); };
proto.acceleration.TFLiteSettings.prototype.getEdgetpuSettings = function () { return this.internal_getWrapperField(proto.acceleration.EdgeTpuDelegateSettings, 10); };
proto.acceleration.TFLiteSettings.prototype.setEdgetpuSettings = function (a) { return this.internal_setWrapperField(10, a); };
proto.acceleration.TFLiteSettings.prototype.clearEdgetpuSettings = function () { return this.internal_clearWrapperField(10); };
proto.acceleration.TFLiteSettings.prototype.hasEdgetpuSettings = function () { return this.internal_hasField(10); };
proto.acceleration.TFLiteSettings.prototype.getCoralSettings = function () { return this.internal_getWrapperField(proto.acceleration.CoralDelegateSettings, 12); };
proto.acceleration.TFLiteSettings.prototype.setCoralSettings = function (a) { return this.internal_setWrapperField(12, a); };
proto.acceleration.TFLiteSettings.prototype.clearCoralSettings = function () { return this.internal_clearWrapperField(12); };
proto.acceleration.TFLiteSettings.prototype.hasCoralSettings = function () { return this.internal_hasField(12); };
proto.acceleration.TFLiteSettings.prototype.getXnnpackSettings = function () { return this.internal_getWrapperField(proto.acceleration.XNNPackSettings, 13); };
proto.acceleration.TFLiteSettings.prototype.setXnnpackSettings = function (a) { return this.internal_setWrapperField(13, a); };
proto.acceleration.TFLiteSettings.prototype.clearXnnpackSettings = function () { return this.internal_clearWrapperField(13); };
proto.acceleration.TFLiteSettings.prototype.hasXnnpackSettings = function () { return this.internal_hasField(13); };
proto.acceleration.TFLiteSettings.prototype.getEnumerationHangDetection = function () { return this.internal_getWrapperField(proto.acceleration.HangDetectionSettings, 6); };
proto.acceleration.TFLiteSettings.prototype.setEnumerationHangDetection = function (a) { return this.internal_setWrapperField(6, a); };
proto.acceleration.TFLiteSettings.prototype.clearEnumerationHangDetection = function () { return this.internal_clearWrapperField(6); };
proto.acceleration.TFLiteSettings.prototype.hasEnumerationHangDetection = function () { return this.internal_hasField(6); };
proto.acceleration.TFLiteSettings.prototype.getCompilationHangDetection = function () { return this.internal_getWrapperField(proto.acceleration.HangDetectionSettings, 7); };
proto.acceleration.TFLiteSettings.prototype.setCompilationHangDetection = function (a) { return this.internal_setWrapperField(7, a); };
proto.acceleration.TFLiteSettings.prototype.clearCompilationHangDetection = function () { return this.internal_clearWrapperField(7); };
proto.acceleration.TFLiteSettings.prototype.hasCompilationHangDetection = function () { return this.internal_hasField(7); };
proto.acceleration.TFLiteSettings.prototype.getExecutionHangDetection = function () { return this.internal_getWrapperField(proto.acceleration.HangDetectionSettings, 8); };
proto.acceleration.TFLiteSettings.prototype.setExecutionHangDetection = function (a) { return this.internal_setWrapperField(8, a); };
proto.acceleration.TFLiteSettings.prototype.clearExecutionHangDetection = function () { return this.internal_clearWrapperField(8); };
proto.acceleration.TFLiteSettings.prototype.hasExecutionHangDetection = function () { return this.internal_hasField(8); };
proto.acceleration.TFLiteSettings.prototype.getAllowFp16PrecisionForFp32 = function () { return this.internal_getBooleanField(9); };
proto.acceleration.TFLiteSettings.prototype.setAllowFp16PrecisionForFp32 = function (a) { return this.internal_setField(9, a); };
proto.acceleration.TFLiteSettings.prototype.clearAllowFp16PrecisionForFp32 = function () { return this.internal_clearField(9); };
proto.acceleration.TFLiteSettings.prototype.hasAllowFp16PrecisionForFp32 = function () { return this.internal_hasField(9); };
proto.acceleration.TFLiteSettings.prototype.getFallbackSettings = function () { return this.internal_getWrapperField(proto.acceleration.FallbackSettings, 11); };
proto.acceleration.TFLiteSettings.prototype.setFallbackSettings = function (a) { return this.internal_setWrapperField(11, a); };
proto.acceleration.TFLiteSettings.prototype.clearFallbackSettings = function () { return this.internal_clearWrapperField(11); };
proto.acceleration.TFLiteSettings.prototype.hasFallbackSettings = function () { return this.internal_hasField(11); };
proto.acceleration.TFLiteSettings.prototype.getMaxDelegatedPartitions = function () { return this.internal_getIntegerFieldWithDefault(14, -1); };
proto.acceleration.TFLiteSettings.prototype.setMaxDelegatedPartitions = function (a) { return this.internal_setField(14, a); };
proto.acceleration.TFLiteSettings.prototype.clearMaxDelegatedPartitions = function () { return this.internal_clearField(14); };
proto.acceleration.TFLiteSettings.prototype.hasMaxDelegatedPartitions = function () { return this.internal_hasField(14); };
proto.acceleration.TFLiteSettings.internalDoNotUse$proto$acceleration$TFLiteSettings$getBinaryFieldsObject = function () {
    return { 1: jspb.internal.binary.readEnum, 2: [jspb.internal.binary.readMessage, proto.acceleration.NNAPIDelegateSettings, proto.acceleration.NNAPIDelegateSettings.internalDoNotUse$proto$acceleration$NNAPIDelegateSettings$getBinaryFieldsObject], 3: [jspb.internal.binary.readMessage, proto.acceleration.GPUDelegateSettings, proto.acceleration.GPUDelegateSettings.internalDoNotUse$proto$acceleration$GPUDelegateSettings$getBinaryFieldsObject],
        4: [jspb.internal.binary.readMessage, proto.acceleration.CPUSettings, proto.acceleration.CPUSettings.internalDoNotUse$proto$acceleration$CPUSettings$getBinaryFieldsObject], 5: [jspb.internal.binary.readMessage, proto.acceleration.HexagonDelegateSettings, proto.acceleration.HexagonDelegateSettings.internalDoNotUse$proto$acceleration$HexagonDelegateSettings$getBinaryFieldsObject], 10: [jspb.internal.binary.readMessage, proto.acceleration.EdgeTpuDelegateSettings, proto.acceleration.EdgeTpuDelegateSettings.internalDoNotUse$proto$acceleration$EdgeTpuDelegateSettings$getBinaryFieldsObject],
        12: [jspb.internal.binary.readMessage, proto.acceleration.CoralDelegateSettings, proto.acceleration.CoralDelegateSettings.internalDoNotUse$proto$acceleration$CoralDelegateSettings$getBinaryFieldsObject], 13: [jspb.internal.binary.readMessage, proto.acceleration.XNNPackSettings, proto.acceleration.XNNPackSettings.internalDoNotUse$proto$acceleration$XNNPackSettings$getBinaryFieldsObject], 6: [jspb.internal.binary.readMessage, proto.acceleration.HangDetectionSettings, proto.acceleration.HangDetectionSettings.internalDoNotUse$proto$acceleration$HangDetectionSettings$getBinaryFieldsObject],
        7: [jspb.internal.binary.readMessage, proto.acceleration.HangDetectionSettings, proto.acceleration.HangDetectionSettings.internalDoNotUse$proto$acceleration$HangDetectionSettings$getBinaryFieldsObject], 8: [jspb.internal.binary.readMessage, proto.acceleration.HangDetectionSettings, proto.acceleration.HangDetectionSettings.internalDoNotUse$proto$acceleration$HangDetectionSettings$getBinaryFieldsObject], 9: jspb.internal.binary.readBool, 11: [jspb.internal.binary.readMessage, proto.acceleration.FallbackSettings,
            proto.acceleration.FallbackSettings.internalDoNotUse$proto$acceleration$FallbackSettings$getBinaryFieldsObject], 14: jspb.internal.binary.readInt32 };
};
proto.acceleration.TFLiteSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.TFLiteSettings.serializeBinaryToWriter); };
proto.acceleration.TFLiteSettings.serializeBinaryToWriter = function (a, b) {
    jspb.internal.binary.writeEnum(b, a, 1);
    jspb.internal.binary.writeMessage(b, a, 2, proto.acceleration.NNAPIDelegateSettings, proto.acceleration.NNAPIDelegateSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 3, proto.acceleration.GPUDelegateSettings, proto.acceleration.GPUDelegateSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 4, proto.acceleration.CPUSettings, proto.acceleration.CPUSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 5, proto.acceleration.HexagonDelegateSettings, proto.acceleration.HexagonDelegateSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 10, proto.acceleration.EdgeTpuDelegateSettings, proto.acceleration.EdgeTpuDelegateSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 12, proto.acceleration.CoralDelegateSettings, proto.acceleration.CoralDelegateSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 13, proto.acceleration.XNNPackSettings, proto.acceleration.XNNPackSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 6, proto.acceleration.HangDetectionSettings, proto.acceleration.HangDetectionSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 7, proto.acceleration.HangDetectionSettings, proto.acceleration.HangDetectionSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 8, proto.acceleration.HangDetectionSettings, proto.acceleration.HangDetectionSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeBool(b, a, 9);
    jspb.internal.binary.writeMessage(b, a, 11, proto.acceleration.FallbackSettings, proto.acceleration.FallbackSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeInt32(b, a, 14);
    jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b);
};
proto.acceleration.TFLiteSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.TFLiteSettings, proto.acceleration.TFLiteSettings.internalDoNotUse$proto$acceleration$TFLiteSettings$getBinaryFieldsObject); };
proto.acceleration.TFLiteSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.TFLiteSettings.internalDoNotUse$proto$acceleration$TFLiteSettings$getBinaryFieldsObject); };
proto.acceleration.TFLiteSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.TFLiteSettings, a); };
proto.acceleration.TFLiteSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.TFLiteSettings.fromObject = function (a) {
    var b = new proto.acceleration.TFLiteSettings;
    null != a.delegate && b.internal_setField(1, a.delegate);
    a.nnapiSettings && b.internal_setWrapperField(2, proto.acceleration.NNAPIDelegateSettings.fromObject(a.nnapiSettings));
    a.gpuSettings && b.internal_setWrapperField(3, proto.acceleration.GPUDelegateSettings.fromObject(a.gpuSettings));
    a.cpuSettings && b.internal_setWrapperField(4, proto.acceleration.CPUSettings.fromObject(a.cpuSettings));
    a.hexagonSettings && b.internal_setWrapperField(5, proto.acceleration.HexagonDelegateSettings.fromObject(a.hexagonSettings));
    a.edgetpuSettings && b.internal_setWrapperField(10, proto.acceleration.EdgeTpuDelegateSettings.fromObject(a.edgetpuSettings));
    a.coralSettings && b.internal_setWrapperField(12, proto.acceleration.CoralDelegateSettings.fromObject(a.coralSettings));
    a.xnnpackSettings && b.internal_setWrapperField(13, proto.acceleration.XNNPackSettings.fromObject(a.xnnpackSettings));
    a.enumerationHangDetection &&
        b.internal_setWrapperField(6, proto.acceleration.HangDetectionSettings.fromObject(a.enumerationHangDetection));
    a.compilationHangDetection && b.internal_setWrapperField(7, proto.acceleration.HangDetectionSettings.fromObject(a.compilationHangDetection));
    a.executionHangDetection && b.internal_setWrapperField(8, proto.acceleration.HangDetectionSettings.fromObject(a.executionHangDetection));
    null != a.allowFp16PrecisionForFp32 && b.internal_setField(9, a.allowFp16PrecisionForFp32);
    a.fallbackSettings && b.internal_setWrapperField(11, proto.acceleration.FallbackSettings.fromObject(a.fallbackSettings));
    null != a.maxDelegatedPartitions && b.internal_setField(14, a.maxDelegatedPartitions);
    return b;
});
proto.acceleration.TFLiteSettings.prototype.toObject = function (a) { return proto.acceleration.TFLiteSettings.internal_toObject(a, this); };
proto.acceleration.TFLiteSettings.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { delegate: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), nnapiSettings: proto.acceleration.NNAPIDelegateSettings.internal_toObject(a, b.getNnapiSettings()), gpuSettings: proto.acceleration.GPUDelegateSettings.internal_toObject(a, b.getGpuSettings()), cpuSettings: proto.acceleration.CPUSettings.internal_toObject(a, b.getCpuSettings()), hexagonSettings: proto.acceleration.HexagonDelegateSettings.internal_toObject(a, b.getHexagonSettings()), edgetpuSettings: proto.acceleration.EdgeTpuDelegateSettings.internal_toObject(a, b.getEdgetpuSettings()), coralSettings: proto.acceleration.CoralDelegateSettings.internal_toObject(a, b.getCoralSettings()), xnnpackSettings: proto.acceleration.XNNPackSettings.internal_toObject(a, b.getXnnpackSettings()), enumerationHangDetection: proto.acceleration.HangDetectionSettings.internal_toObject(a, b.getEnumerationHangDetection()), compilationHangDetection: proto.acceleration.HangDetectionSettings.internal_toObject(a, b.getCompilationHangDetection()), executionHangDetection: proto.acceleration.HangDetectionSettings.internal_toObject(a, b.getExecutionHangDetection()), allowFp16PrecisionForFp32: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(9)), fallbackSettings: proto.acceleration.FallbackSettings.internal_toObject(a, b.getFallbackSettings()), maxDelegatedPartitions: b.internal_getIntegerFieldWithDefault(14, -1) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.acceleration.MinibenchmarkSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a, -1, proto.acceleration.MinibenchmarkSettings.repeatedFields_); };
$jscomp.inherits(proto.acceleration.MinibenchmarkSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.MinibenchmarkSettings.prototype.getSettingsToTestList = function () { return this.internal_getRepeatedWrapperField(proto.acceleration.TFLiteSettings, 1); };
proto.acceleration.MinibenchmarkSettings.prototype.setSettingsToTestList = function (a) { return this.internal_setRepeatedWrapperField(1, a); };
proto.acceleration.MinibenchmarkSettings.prototype.addSettingsToTest = function (a, b) { return this.internal_addToRepeatedWrapperField(1, a, proto.acceleration.TFLiteSettings, b); };
proto.acceleration.MinibenchmarkSettings.prototype.addAndReturnSettingsToTest = function (a, b) { return this.internal_addAndReturnRepeatedWrapperField(1, a, proto.acceleration.TFLiteSettings, b); };
proto.acceleration.MinibenchmarkSettings.prototype.clearSettingsToTestList = function () { return this.internal_clearRepeatedWrapperField(1); };
proto.acceleration.MinibenchmarkSettings.prototype.getModelFile = function () { return this.internal_getWrapperField(proto.acceleration.ModelFile, 2); };
proto.acceleration.MinibenchmarkSettings.prototype.setModelFile = function (a) { return this.internal_setWrapperField(2, a); };
proto.acceleration.MinibenchmarkSettings.prototype.clearModelFile = function () { return this.internal_clearWrapperField(2); };
proto.acceleration.MinibenchmarkSettings.prototype.hasModelFile = function () { return this.internal_hasField(2); };
proto.acceleration.MinibenchmarkSettings.prototype.getStoragePaths = function () { return this.internal_getWrapperField(proto.acceleration.BenchmarkStoragePaths, 3); };
proto.acceleration.MinibenchmarkSettings.prototype.setStoragePaths = function (a) { return this.internal_setWrapperField(3, a); };
proto.acceleration.MinibenchmarkSettings.prototype.clearStoragePaths = function () { return this.internal_clearWrapperField(3); };
proto.acceleration.MinibenchmarkSettings.prototype.hasStoragePaths = function () { return this.internal_hasField(3); };
proto.acceleration.MinibenchmarkSettings.internalDoNotUse$proto$acceleration$MinibenchmarkSettings$getBinaryFieldsObject = function () {
    return { 1: [jspb.internal.binary.readRepeatedMessage, proto.acceleration.TFLiteSettings, proto.acceleration.TFLiteSettings.internalDoNotUse$proto$acceleration$TFLiteSettings$getBinaryFieldsObject], 2: [jspb.internal.binary.readMessage, proto.acceleration.ModelFile, proto.acceleration.ModelFile.internalDoNotUse$proto$acceleration$ModelFile$getBinaryFieldsObject], 3: [jspb.internal.binary.readMessage,
            proto.acceleration.BenchmarkStoragePaths, proto.acceleration.BenchmarkStoragePaths.internalDoNotUse$proto$acceleration$BenchmarkStoragePaths$getBinaryFieldsObject] };
};
proto.acceleration.MinibenchmarkSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.MinibenchmarkSettings.serializeBinaryToWriter); };
proto.acceleration.MinibenchmarkSettings.serializeBinaryToWriter = function (a, b) {
    jspb.internal.binary.writeRepeatedMessage(b, a, 1, proto.acceleration.TFLiteSettings, proto.acceleration.TFLiteSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 2, proto.acceleration.ModelFile, proto.acceleration.ModelFile.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 3, proto.acceleration.BenchmarkStoragePaths, proto.acceleration.BenchmarkStoragePaths.serializeBinaryToWriter);
    jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b);
};
proto.acceleration.MinibenchmarkSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.MinibenchmarkSettings, proto.acceleration.MinibenchmarkSettings.internalDoNotUse$proto$acceleration$MinibenchmarkSettings$getBinaryFieldsObject); };
proto.acceleration.MinibenchmarkSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.MinibenchmarkSettings.internalDoNotUse$proto$acceleration$MinibenchmarkSettings$getBinaryFieldsObject); };
proto.acceleration.MinibenchmarkSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.MinibenchmarkSettings, a); };
proto.acceleration.MinibenchmarkSettings.repeatedFields_ = [1];
proto.acceleration.MinibenchmarkSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.MinibenchmarkSettings.fromObject = function (a) {
    var b = new proto.acceleration.MinibenchmarkSettings;
    a.settingsToTestList && b.internal_setRepeatedWrapperField(1, a.settingsToTestList.map(proto.acceleration.TFLiteSettings.fromObject));
    a.modelFile && b.internal_setWrapperField(2, proto.acceleration.ModelFile.fromObject(a.modelFile));
    a.storagePaths && b.internal_setWrapperField(3, proto.acceleration.BenchmarkStoragePaths.fromObject(a.storagePaths));
    return b;
});
proto.acceleration.MinibenchmarkSettings.prototype.toObject = function (a) { return proto.acceleration.MinibenchmarkSettings.internal_toObject(a, this); };
proto.acceleration.MinibenchmarkSettings.internal_toObject = function (a, b) { if (null != b) {
    var c = { settingsToTestList: module$contents$jspb$internal$public_for_gencode_toObjectList(b.getSettingsToTestList(), proto.acceleration.TFLiteSettings.internal_toObject, a), modelFile: proto.acceleration.ModelFile.internal_toObject(a, b.getModelFile()), storagePaths: proto.acceleration.BenchmarkStoragePaths.internal_toObject(a, b.getStoragePaths()) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.acceleration.Acceleration = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.acceleration.Acceleration, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.acceleration.Acceleration.prototype.getPreference = function () { return this.internal_getField(1); };
proto.acceleration.Acceleration.prototype.setPreference = function (a) { return this.internal_setField(1, a); };
proto.acceleration.Acceleration.prototype.clearPreference = function () { return this.internal_clearField(1); };
proto.acceleration.Acceleration.prototype.hasPreference = function () { return this.internal_hasField(1); };
proto.acceleration.Acceleration.prototype.getTfliteSettings = function () { return this.internal_getWrapperField(proto.acceleration.TFLiteSettings, 2); };
proto.acceleration.Acceleration.prototype.setTfliteSettings = function (a) { return this.internal_setWrapperField(2, a); };
proto.acceleration.Acceleration.prototype.clearTfliteSettings = function () { return this.internal_clearWrapperField(2); };
proto.acceleration.Acceleration.prototype.hasTfliteSettings = function () { return this.internal_hasField(2); };
proto.acceleration.Acceleration.prototype.getModelIdentifierForStatistics = function () { return this.internal_getWrapperField(proto.acceleration.InferenceToUseFor, 3); };
proto.acceleration.Acceleration.prototype.setModelIdentifierForStatistics = function (a) { return this.internal_setWrapperField(3, a); };
proto.acceleration.Acceleration.prototype.clearModelIdentifierForStatistics = function () { return this.internal_clearWrapperField(3); };
proto.acceleration.Acceleration.prototype.hasModelIdentifierForStatistics = function () { return this.internal_hasField(3); };
proto.acceleration.Acceleration.prototype.getSettingsToTestLocally = function () { return this.internal_getWrapperField(proto.acceleration.MinibenchmarkSettings, 5); };
proto.acceleration.Acceleration.prototype.setSettingsToTestLocally = function (a) { return this.internal_setWrapperField(5, a); };
proto.acceleration.Acceleration.prototype.clearSettingsToTestLocally = function () { return this.internal_clearWrapperField(5); };
proto.acceleration.Acceleration.prototype.hasSettingsToTestLocally = function () { return this.internal_hasField(5); };
proto.acceleration.Acceleration.internalDoNotUse$proto$acceleration$Acceleration$getBinaryFieldsObject = function () {
    return { 1: jspb.internal.binary.readEnum, 2: [jspb.internal.binary.readMessage, proto.acceleration.TFLiteSettings, proto.acceleration.TFLiteSettings.internalDoNotUse$proto$acceleration$TFLiteSettings$getBinaryFieldsObject], 3: [jspb.internal.binary.readMessage, proto.acceleration.InferenceToUseFor, proto.acceleration.InferenceToUseFor.internalDoNotUse$proto$acceleration$InferenceToUseFor$getBinaryFieldsObject],
        5: [jspb.internal.binary.readMessage, proto.acceleration.MinibenchmarkSettings, proto.acceleration.MinibenchmarkSettings.internalDoNotUse$proto$acceleration$MinibenchmarkSettings$getBinaryFieldsObject] };
};
proto.acceleration.Acceleration.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.acceleration.Acceleration.serializeBinaryToWriter); };
proto.acceleration.Acceleration.serializeBinaryToWriter = function (a, b) {
    jspb.internal.binary.writeEnum(b, a, 1);
    jspb.internal.binary.writeMessage(b, a, 2, proto.acceleration.TFLiteSettings, proto.acceleration.TFLiteSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 3, proto.acceleration.InferenceToUseFor, proto.acceleration.InferenceToUseFor.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 5, proto.acceleration.MinibenchmarkSettings, proto.acceleration.MinibenchmarkSettings.serializeBinaryToWriter);
    jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b);
};
proto.acceleration.Acceleration.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.acceleration.Acceleration, proto.acceleration.Acceleration.internalDoNotUse$proto$acceleration$Acceleration$getBinaryFieldsObject); };
proto.acceleration.Acceleration.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.acceleration.Acceleration.internalDoNotUse$proto$acceleration$Acceleration$getBinaryFieldsObject); };
proto.acceleration.Acceleration.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.acceleration.Acceleration, a); };
proto.acceleration.Acceleration.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.acceleration.Acceleration.fromObject = function (a) {
    var b = new proto.acceleration.Acceleration;
    null != a.preference && b.internal_setField(1, a.preference);
    a.tfliteSettings && b.internal_setWrapperField(2, proto.acceleration.TFLiteSettings.fromObject(a.tfliteSettings));
    a.modelIdentifierForStatistics && b.internal_setWrapperField(3, proto.acceleration.InferenceToUseFor.fromObject(a.modelIdentifierForStatistics));
    a.settingsToTestLocally &&
        b.internal_setWrapperField(5, proto.acceleration.MinibenchmarkSettings.fromObject(a.settingsToTestLocally));
    return b;
});
proto.acceleration.Acceleration.prototype.toObject = function (a) { return proto.acceleration.Acceleration.internal_toObject(a, this); };
proto.acceleration.Acceleration.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { preference: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), tfliteSettings: proto.acceleration.TFLiteSettings.internal_toObject(a, b.getTfliteSettings()), modelIdentifierForStatistics: proto.acceleration.InferenceToUseFor.internal_toObject(a, b.getModelIdentifierForStatistics()), settingsToTestLocally: proto.acceleration.MinibenchmarkSettings.internal_toObject(a, b.getSettingsToTestLocally()) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.visionkit = {};
proto.visionkit.FileDescriptorMeta = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.visionkit.FileDescriptorMeta, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.visionkit.FileDescriptorMeta.prototype.getFd = function () { return this.internal_getField(1); };
proto.visionkit.FileDescriptorMeta.prototype.setFd = function (a) { return this.internal_setField(1, a); };
proto.visionkit.FileDescriptorMeta.prototype.clearFd = function () { return this.internal_clearField(1); };
proto.visionkit.FileDescriptorMeta.prototype.hasFd = function () { return this.internal_hasField(1); };
proto.visionkit.FileDescriptorMeta.prototype.getLength = function () { return this.internal_getField(2); };
proto.visionkit.FileDescriptorMeta.prototype.setLength = function (a) { return this.internal_setField(2, a); };
proto.visionkit.FileDescriptorMeta.prototype.clearLength = function () { return this.internal_clearField(2); };
proto.visionkit.FileDescriptorMeta.prototype.hasLength = function () { return this.internal_hasField(2); };
proto.visionkit.FileDescriptorMeta.prototype.getOffset = function () { return this.internal_getField(3); };
proto.visionkit.FileDescriptorMeta.prototype.setOffset = function (a) { return this.internal_setField(3, a); };
proto.visionkit.FileDescriptorMeta.prototype.clearOffset = function () { return this.internal_clearField(3); };
proto.visionkit.FileDescriptorMeta.prototype.hasOffset = function () { return this.internal_hasField(3); };
proto.visionkit.FileDescriptorMeta.internalDoNotUse$proto$visionkit$FileDescriptorMeta$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readInt32, 2: jspb.internal.binary.readInt64, 3: jspb.internal.binary.readInt64 }; };
proto.visionkit.FileDescriptorMeta.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.visionkit.FileDescriptorMeta.serializeBinaryToWriter); };
proto.visionkit.FileDescriptorMeta.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeInt32(b, a, 1); jspb.internal.binary.writeInt64(b, a, 2); jspb.internal.binary.writeInt64(b, a, 3); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.visionkit.FileDescriptorMeta.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.visionkit.FileDescriptorMeta, proto.visionkit.FileDescriptorMeta.internalDoNotUse$proto$visionkit$FileDescriptorMeta$getBinaryFieldsObject); };
proto.visionkit.FileDescriptorMeta.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.visionkit.FileDescriptorMeta.internalDoNotUse$proto$visionkit$FileDescriptorMeta$getBinaryFieldsObject); };
proto.visionkit.FileDescriptorMeta.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.visionkit.FileDescriptorMeta, a); };
proto.visionkit.FileDescriptorMeta.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.visionkit.FileDescriptorMeta.fromObject = function (a) { var b = new proto.visionkit.FileDescriptorMeta; null != a.fd && b.internal_setField(1, a.fd); null != a.length && b.internal_setField(2, a.length); null != a.offset && b.internal_setField(3, a.offset); return b; });
proto.visionkit.FileDescriptorMeta.prototype.toObject = function (a) { return proto.visionkit.FileDescriptorMeta.internal_toObject(a, this); };
proto.visionkit.FileDescriptorMeta.internal_toObject = function (a, b) { if (null != b) {
    var c = { fd: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), length: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)), offset: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(3)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.visionkit.ExternalFile = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.visionkit.ExternalFile, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.visionkit.ExternalFile.prototype.getFileContent = function () { return this.internal_getField(2); };
proto.visionkit.ExternalFile.prototype.getFileContent_asB64 = function () { return module$contents$jspb$internal_bytesAsB64(this.getFileContent()); };
proto.visionkit.ExternalFile.prototype.getFileContent_asU8 = function () { return module$contents$jspb$internal_bytesAsU8(this.getFileContent()); };
proto.visionkit.ExternalFile.prototype.setFileContent = function (a) { return this.internal_setField(2, a); };
proto.visionkit.ExternalFile.prototype.clearFileContent = function () { return this.internal_clearField(2); };
proto.visionkit.ExternalFile.prototype.hasFileContent = function () { return this.internal_hasField(2); };
proto.visionkit.ExternalFile.prototype.getFileName = function () { return this.internal_getField(1); };
proto.visionkit.ExternalFile.prototype.setFileName = function (a) { return this.internal_setField(1, a); };
proto.visionkit.ExternalFile.prototype.clearFileName = function () { return this.internal_clearField(1); };
proto.visionkit.ExternalFile.prototype.hasFileName = function () { return this.internal_hasField(1); };
proto.visionkit.ExternalFile.prototype.getFileDescriptorMeta = function () { return this.internal_getWrapperField(proto.visionkit.FileDescriptorMeta, 4); };
proto.visionkit.ExternalFile.prototype.setFileDescriptorMeta = function (a) { return this.internal_setWrapperField(4, a); };
proto.visionkit.ExternalFile.prototype.clearFileDescriptorMeta = function () { return this.internal_clearWrapperField(4); };
proto.visionkit.ExternalFile.prototype.hasFileDescriptorMeta = function () { return this.internal_hasField(4); };
proto.visionkit.ExternalFile.internalDoNotUse$proto$visionkit$ExternalFile$getBinaryFieldsObject = function () { return { 2: jspb.internal.binary.readBytes, 1: jspb.internal.binary.readString, 4: [jspb.internal.binary.readMessage, proto.visionkit.FileDescriptorMeta, proto.visionkit.FileDescriptorMeta.internalDoNotUse$proto$visionkit$FileDescriptorMeta$getBinaryFieldsObject] }; };
proto.visionkit.ExternalFile.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.visionkit.ExternalFile.serializeBinaryToWriter); };
proto.visionkit.ExternalFile.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeBytes(b, a, 2); jspb.internal.binary.writeString(b, a, 1); jspb.internal.binary.writeMessage(b, a, 4, proto.visionkit.FileDescriptorMeta, proto.visionkit.FileDescriptorMeta.serializeBinaryToWriter); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.visionkit.ExternalFile.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.visionkit.ExternalFile, proto.visionkit.ExternalFile.internalDoNotUse$proto$visionkit$ExternalFile$getBinaryFieldsObject); };
proto.visionkit.ExternalFile.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.visionkit.ExternalFile.internalDoNotUse$proto$visionkit$ExternalFile$getBinaryFieldsObject); };
proto.visionkit.ExternalFile.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.visionkit.ExternalFile, a); };
proto.visionkit.ExternalFile.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.visionkit.ExternalFile.fromObject = function (a) { var b = new proto.visionkit.ExternalFile; null != a.fileContent && b.internal_setField(2, a.fileContent); null != a.fileName && b.internal_setField(1, a.fileName); a.fileDescriptorMeta && b.internal_setWrapperField(4, proto.visionkit.FileDescriptorMeta.fromObject(a.fileDescriptorMeta)); return b; });
proto.visionkit.ExternalFile.prototype.toObject = function (a) { return proto.visionkit.ExternalFile.internal_toObject(a, this); };
proto.visionkit.ExternalFile.internal_toObject = function (a, b) { if (null != b) {
    var c = { fileContent: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.getFileContent_asB64()), fileName: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), fileDescriptorMeta: proto.visionkit.FileDescriptorMeta.internal_toObject(a, b.getFileDescriptorMeta()) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
goog.dom.asserts = {};
goog.dom.asserts.assertIsLocation = function (a) { if (goog.asserts.ENABLE_ASSERTS) {
    var b = goog.dom.asserts.getWindow_(a);
    b && (!a || !(a instanceof b.Location) && a instanceof b.Element) && goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(a));
} return a; };
goog.dom.asserts.assertIsElementType_ = function (a, b) { if (goog.asserts.ENABLE_ASSERTS) {
    var c = goog.dom.asserts.getWindow_(a);
    c && "undefined" != typeof c[b] && (a && (a instanceof c[b] || !(a instanceof c.Location || a instanceof c.Element)) || goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, goog.dom.asserts.debugStringForType_(a)));
} return a; };
goog.dom.asserts.assertIsHTMLAnchorElement = function (a) { return goog.dom.asserts.assertIsElementType_(a, "HTMLAnchorElement"); };
goog.dom.asserts.assertIsHTMLButtonElement = function (a) { return goog.dom.asserts.assertIsElementType_(a, "HTMLButtonElement"); };
goog.dom.asserts.assertIsHTMLLinkElement = function (a) { return goog.dom.asserts.assertIsElementType_(a, "HTMLLinkElement"); };
goog.dom.asserts.assertIsHTMLImageElement = function (a) { return goog.dom.asserts.assertIsElementType_(a, "HTMLImageElement"); };
goog.dom.asserts.assertIsHTMLAudioElement = function (a) { return goog.dom.asserts.assertIsElementType_(a, "HTMLAudioElement"); };
goog.dom.asserts.assertIsHTMLVideoElement = function (a) { return goog.dom.asserts.assertIsElementType_(a, "HTMLVideoElement"); };
goog.dom.asserts.assertIsHTMLInputElement = function (a) { return goog.dom.asserts.assertIsElementType_(a, "HTMLInputElement"); };
goog.dom.asserts.assertIsHTMLTextAreaElement = function (a) { return goog.dom.asserts.assertIsElementType_(a, "HTMLTextAreaElement"); };
goog.dom.asserts.assertIsHTMLCanvasElement = function (a) { return goog.dom.asserts.assertIsElementType_(a, "HTMLCanvasElement"); };
goog.dom.asserts.assertIsHTMLEmbedElement = function (a) { return goog.dom.asserts.assertIsElementType_(a, "HTMLEmbedElement"); };
goog.dom.asserts.assertIsHTMLFormElement = function (a) { return goog.dom.asserts.assertIsElementType_(a, "HTMLFormElement"); };
goog.dom.asserts.assertIsHTMLFrameElement = function (a) { return goog.dom.asserts.assertIsElementType_(a, "HTMLFrameElement"); };
goog.dom.asserts.assertIsHTMLIFrameElement = function (a) { return goog.dom.asserts.assertIsElementType_(a, "HTMLIFrameElement"); };
goog.dom.asserts.assertIsHTMLObjectElement = function (a) { return goog.dom.asserts.assertIsElementType_(a, "HTMLObjectElement"); };
goog.dom.asserts.assertIsHTMLScriptElement = function (a) { return goog.dom.asserts.assertIsElementType_(a, "HTMLScriptElement"); };
goog.dom.asserts.debugStringForType_ = function (a) { if (goog.isObject(a))
    try {
        return a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
    }
    catch (b) {
        return "<object could not be stringified>";
    }
else
    return void 0 === a ? "undefined" : null === a ? "null" : typeof a; };
goog.dom.asserts.getWindow_ = function (a) { try {
    var b = a && a.ownerDocument, c = b && (b.defaultView || b.parentWindow);
    c = c || goog.global;
    if (c.Element && c.Location)
        return c;
}
catch (d) { } return null; };
goog.dom.HtmlElement = function () { };
goog.functions = {};
goog.functions.constant = function (a) { return function () { return a; }; };
goog.functions.FALSE = function () { return !1; };
goog.functions.TRUE = function () { return !0; };
goog.functions.NULL = function () { return null; };
goog.functions.UNDEFINED = function () { };
goog.functions.EMPTY = goog.functions.UNDEFINED;
goog.functions.identity = function (a) { return a; };
goog.functions.error = function (a) { return function () { throw Error(a); }; };
goog.functions.fail = function (a) { return function () { throw a; }; };
goog.functions.lock = function (a, b) { b = b || 0; return function () { return a.apply(this, Array.prototype.slice.call(arguments, 0, b)); }; };
goog.functions.nth = function (a) { return function () { return arguments[a]; }; };
goog.functions.partialRight = function (a, b) { var c = Array.prototype.slice.call(arguments, 1); return function () { var d = this; d === goog.global && (d = void 0); var e = Array.prototype.slice.call(arguments); e.push.apply(e, c); return a.apply(d, e); }; };
goog.functions.withReturnValue = function (a, b) { return goog.functions.sequence(a, goog.functions.constant(b)); };
goog.functions.equalTo = function (a, b) { return function (c) { return b ? a == c : a === c; }; };
goog.functions.compose = function (a, b) { var c = arguments, d = c.length; return function () { var e; d && (e = c[d - 1].apply(this, arguments)); for (var f = d - 2; 0 <= f; f--)
    e = c[f].call(this, e); return e; }; };
goog.functions.sequence = function (a) { var b = arguments, c = b.length; return function () { for (var d, e = 0; e < c; e++)
    d = b[e].apply(this, arguments); return d; }; };
goog.functions.and = function (a) { var b = arguments, c = b.length; return function () { for (var d = 0; d < c; d++)
    if (!b[d].apply(this, arguments))
        return !1; return !0; }; };
goog.functions.or = function (a) { var b = arguments, c = b.length; return function () { for (var d = 0; d < c; d++)
    if (b[d].apply(this, arguments))
        return !0; return !1; }; };
goog.functions.not = function (a) { return function () { return !a.apply(this, arguments); }; };
goog.functions.create = function (a, b) { var c = function () { }; c.prototype = a.prototype; c = new c; a.apply(c, Array.prototype.slice.call(arguments, 1)); return c; };
goog.functions.CACHE_RETURN_VALUE = !0;
goog.functions.cacheReturnValue = function (a) { var b = !1, c; return function () { if (!goog.functions.CACHE_RETURN_VALUE)
    return a(); b || (c = a(), b = !0); return c; }; };
goog.functions.once = function (a) { var b = a; return function () { if (b) {
    var c = b;
    b = null;
    c();
} }; };
goog.functions.debounce = function (a, b, c) { var d = 0; return function (e) { goog.global.clearTimeout(d); var f = arguments; d = goog.global.setTimeout(function () { a.apply(c, f); }, b); }; };
goog.functions.throttle = function (a, b, c) { var d = 0, e = !1, f = [], g = function () { d = 0; e && (e = !1, k()); }, k = function () { d = goog.global.setTimeout(g, b); var h = f; f = []; a.apply(c, h); }; return function (h) { f = arguments; d ? e = !0 : k(); }; };
goog.functions.rateLimit = function (a, b, c) { var d = 0, e = function () { d = 0; }; return function (f) { d || (d = goog.global.setTimeout(e, b), a.apply(c, arguments)); }; };
goog.functions.isFunction = function (a) { return "function" === typeof a; };
goog.dom.TagName = function () { };
goog.dom.TagName.cast = function (a) { return a; };
goog.dom.TagName.prototype.toString = function () { };
goog.dom.TagName.A = "A";
goog.dom.TagName.ABBR = "ABBR";
goog.dom.TagName.ACRONYM = "ACRONYM";
goog.dom.TagName.ADDRESS = "ADDRESS";
goog.dom.TagName.APPLET = "APPLET";
goog.dom.TagName.AREA = "AREA";
goog.dom.TagName.ARTICLE = "ARTICLE";
goog.dom.TagName.ASIDE = "ASIDE";
goog.dom.TagName.AUDIO = "AUDIO";
goog.dom.TagName.B = "B";
goog.dom.TagName.BASE = "BASE";
goog.dom.TagName.BASEFONT = "BASEFONT";
goog.dom.TagName.BDI = "BDI";
goog.dom.TagName.BDO = "BDO";
goog.dom.TagName.BIG = "BIG";
goog.dom.TagName.BLOCKQUOTE = "BLOCKQUOTE";
goog.dom.TagName.BODY = "BODY";
goog.dom.TagName.BR = "BR";
goog.dom.TagName.BUTTON = "BUTTON";
goog.dom.TagName.CANVAS = "CANVAS";
goog.dom.TagName.CAPTION = "CAPTION";
goog.dom.TagName.CENTER = "CENTER";
goog.dom.TagName.CITE = "CITE";
goog.dom.TagName.CODE = "CODE";
goog.dom.TagName.COL = "COL";
goog.dom.TagName.COLGROUP = "COLGROUP";
goog.dom.TagName.COMMAND = "COMMAND";
goog.dom.TagName.DATA = "DATA";
goog.dom.TagName.DATALIST = "DATALIST";
goog.dom.TagName.DD = "DD";
goog.dom.TagName.DEL = "DEL";
goog.dom.TagName.DETAILS = "DETAILS";
goog.dom.TagName.DFN = "DFN";
goog.dom.TagName.DIALOG = "DIALOG";
goog.dom.TagName.DIR = "DIR";
goog.dom.TagName.DIV = "DIV";
goog.dom.TagName.DL = "DL";
goog.dom.TagName.DT = "DT";
goog.dom.TagName.EM = "EM";
goog.dom.TagName.EMBED = "EMBED";
goog.dom.TagName.FIELDSET = "FIELDSET";
goog.dom.TagName.FIGCAPTION = "FIGCAPTION";
goog.dom.TagName.FIGURE = "FIGURE";
goog.dom.TagName.FONT = "FONT";
goog.dom.TagName.FOOTER = "FOOTER";
goog.dom.TagName.FORM = "FORM";
goog.dom.TagName.FRAME = "FRAME";
goog.dom.TagName.FRAMESET = "FRAMESET";
goog.dom.TagName.H1 = "H1";
goog.dom.TagName.H2 = "H2";
goog.dom.TagName.H3 = "H3";
goog.dom.TagName.H4 = "H4";
goog.dom.TagName.H5 = "H5";
goog.dom.TagName.H6 = "H6";
goog.dom.TagName.HEAD = "HEAD";
goog.dom.TagName.HEADER = "HEADER";
goog.dom.TagName.HGROUP = "HGROUP";
goog.dom.TagName.HR = "HR";
goog.dom.TagName.HTML = "HTML";
goog.dom.TagName.I = "I";
goog.dom.TagName.IFRAME = "IFRAME";
goog.dom.TagName.IMG = "IMG";
goog.dom.TagName.INPUT = "INPUT";
goog.dom.TagName.INS = "INS";
goog.dom.TagName.ISINDEX = "ISINDEX";
goog.dom.TagName.KBD = "KBD";
goog.dom.TagName.KEYGEN = "KEYGEN";
goog.dom.TagName.LABEL = "LABEL";
goog.dom.TagName.LEGEND = "LEGEND";
goog.dom.TagName.LI = "LI";
goog.dom.TagName.LINK = "LINK";
goog.dom.TagName.MAIN = "MAIN";
goog.dom.TagName.MAP = "MAP";
goog.dom.TagName.MARK = "MARK";
goog.dom.TagName.MATH = "MATH";
goog.dom.TagName.MENU = "MENU";
goog.dom.TagName.MENUITEM = "MENUITEM";
goog.dom.TagName.META = "META";
goog.dom.TagName.METER = "METER";
goog.dom.TagName.NAV = "NAV";
goog.dom.TagName.NOFRAMES = "NOFRAMES";
goog.dom.TagName.NOSCRIPT = "NOSCRIPT";
goog.dom.TagName.OBJECT = "OBJECT";
goog.dom.TagName.OL = "OL";
goog.dom.TagName.OPTGROUP = "OPTGROUP";
goog.dom.TagName.OPTION = "OPTION";
goog.dom.TagName.OUTPUT = "OUTPUT";
goog.dom.TagName.P = "P";
goog.dom.TagName.PARAM = "PARAM";
goog.dom.TagName.PICTURE = "PICTURE";
goog.dom.TagName.PRE = "PRE";
goog.dom.TagName.PROGRESS = "PROGRESS";
goog.dom.TagName.Q = "Q";
goog.dom.TagName.RP = "RP";
goog.dom.TagName.RT = "RT";
goog.dom.TagName.RTC = "RTC";
goog.dom.TagName.RUBY = "RUBY";
goog.dom.TagName.S = "S";
goog.dom.TagName.SAMP = "SAMP";
goog.dom.TagName.SCRIPT = "SCRIPT";
goog.dom.TagName.SECTION = "SECTION";
goog.dom.TagName.SELECT = "SELECT";
goog.dom.TagName.SMALL = "SMALL";
goog.dom.TagName.SOURCE = "SOURCE";
goog.dom.TagName.SPAN = "SPAN";
goog.dom.TagName.STRIKE = "STRIKE";
goog.dom.TagName.STRONG = "STRONG";
goog.dom.TagName.STYLE = "STYLE";
goog.dom.TagName.SUB = "SUB";
goog.dom.TagName.SUMMARY = "SUMMARY";
goog.dom.TagName.SUP = "SUP";
goog.dom.TagName.SVG = "SVG";
goog.dom.TagName.TABLE = "TABLE";
goog.dom.TagName.TBODY = "TBODY";
goog.dom.TagName.TD = "TD";
goog.dom.TagName.TEMPLATE = "TEMPLATE";
goog.dom.TagName.TEXTAREA = "TEXTAREA";
goog.dom.TagName.TFOOT = "TFOOT";
goog.dom.TagName.TH = "TH";
goog.dom.TagName.THEAD = "THEAD";
goog.dom.TagName.TIME = "TIME";
goog.dom.TagName.TITLE = "TITLE";
goog.dom.TagName.TR = "TR";
goog.dom.TagName.TRACK = "TRACK";
goog.dom.TagName.TT = "TT";
goog.dom.TagName.U = "U";
goog.dom.TagName.UL = "UL";
goog.dom.TagName.VAR = "VAR";
goog.dom.TagName.VIDEO = "VIDEO";
goog.dom.TagName.WBR = "WBR";
goog.object = {};
function module$contents$goog$object_getKeys(a) { var b = [], c = 0, d; for (d in a)
    b[c++] = d; return b; }
function module$contents$goog$object_containsValue(a, b) { for (var c in a)
    if (a[c] == b)
        return !0; return !1; }
function module$contents$goog$object_findKey(a, b, c) { for (var d in a)
    if (b.call(c, a[d], d, a))
        return d; }
function module$contents$goog$object_unsafeClone(a) {
    if (!a || "object" !== typeof a)
        return a;
    if ("function" === typeof a.clone)
        return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map)
        return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set)
        return new Set(a);
    var b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length), c;
    for (c in a)
        b[c] = module$contents$goog$object_unsafeClone(a[c]);
    return b;
}
var module$contents$goog$object_PROTOTYPE_FIELDS = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function module$contents$goog$object_create(a) { var b = arguments.length; if (1 == b && Array.isArray(arguments[0]))
    return module$contents$goog$object_create.apply(null, arguments[0]); if (b % 2)
    throw Error("Uneven number of arguments"); for (var c = {}, d = 0; d < b; d += 2)
    c[arguments[d]] = arguments[d + 1]; return c; }
function module$contents$goog$object_createSet(a) { var b = arguments.length; if (1 == b && Array.isArray(arguments[0]))
    return module$contents$goog$object_createSet.apply(null, arguments[0]); for (var c = {}, d = 0; d < b; d++)
    c[arguments[d]] = !0; return c; }
goog.object.add = function (a, b, c) { if (null !== a && b in a)
    throw Error('The object already contains the key "' + b + '"'); a[b] = c; };
goog.object.clear = function (a) { for (var b in a)
    delete a[b]; };
goog.object.clone = function (a) { var b = {}, c; for (c in a)
    b[c] = a[c]; return b; };
goog.object.contains = function (a, b) { return module$contents$goog$object_containsValue(a, b); };
goog.object.containsKey = function (a, b) { return null !== a && b in a; };
goog.object.containsValue = module$contents$goog$object_containsValue;
goog.object.create = module$contents$goog$object_create;
goog.object.createImmutableView = function (a) { var b = a; Object.isFrozen && !Object.isFrozen(a) && (b = Object.create(a), Object.freeze(b)); return b; };
goog.object.createSet = module$contents$goog$object_createSet;
goog.object.equals = function (a, b) { for (var c in a)
    if (!(c in b) || a[c] !== b[c])
        return !1; for (var d in b)
    if (!(d in a))
        return !1; return !0; };
goog.object.every = function (a, b, c) { for (var d in a)
    if (!b.call(c, a[d], d, a))
        return !1; return !0; };
goog.object.extend = function (a, b) { for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
        a[c] = d[c];
    for (var f = 0; f < module$contents$goog$object_PROTOTYPE_FIELDS.length; f++)
        c = module$contents$goog$object_PROTOTYPE_FIELDS[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
} };
goog.object.filter = function (a, b, c) { var d = {}, e; for (e in a)
    b.call(c, a[e], e, a) && (d[e] = a[e]); return d; };
goog.object.findKey = module$contents$goog$object_findKey;
goog.object.findValue = function (a, b, c) { return (b = module$contents$goog$object_findKey(a, b, c)) && a[b]; };
goog.object.forEach = function (a, b, c) { for (var d in a)
    b.call(c, a[d], d, a); };
goog.object.get = function (a, b, c) { return null !== a && b in a ? a[b] : c; };
goog.object.getAllPropertyNames = function (a, b, c) { if (!a)
    return []; if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
    return module$contents$goog$object_getKeys(a); for (var d = {}; a && (a !== Object.prototype || b) && (a !== Function.prototype || c);) {
    for (var e = Object.getOwnPropertyNames(a), f = 0; f < e.length; f++)
        d[e[f]] = !0;
    a = Object.getPrototypeOf(a);
} return module$contents$goog$object_getKeys(d); };
goog.object.getAnyKey = function (a) { for (var b in a)
    return b; };
goog.object.getAnyValue = function (a) { for (var b in a)
    return a[b]; };
goog.object.getCount = function (a) { var b = 0, c; for (c in a)
    b++; return b; };
goog.object.getKeys = module$contents$goog$object_getKeys;
goog.object.getSuperClass = function (a) { return (a = Object.getPrototypeOf(a.prototype)) && a.constructor; };
goog.object.getValueByKeys = function (a, b) { var c = goog.isArrayLike(b), d = c ? b : arguments; for (c = c ? 0 : 1; c < d.length; c++) {
    if (null == a)
        return;
    a = a[d[c]];
} return a; };
goog.object.getValues = function (a) { var b = [], c = 0, d; for (d in a)
    b[c++] = a[d]; return b; };
goog.object.isEmpty = function (a) { for (var b in a)
    return !1; return !0; };
goog.object.isImmutableView = function (a) { return !!Object.isFrozen && Object.isFrozen(a); };
goog.object.map = function (a, b, c) { var d = {}, e; for (e in a)
    d[e] = b.call(c, a[e], e, a); return d; };
goog.object.remove = function (a, b) { var c; (c = b in a) && delete a[b]; return c; };
goog.object.set = function (a, b, c) { a[b] = c; };
goog.object.setIfUndefined = function (a, b, c) { return b in a ? a[b] : a[b] = c; };
goog.object.setWithReturnValueIfNotSet = function (a, b, c) { if (b in a)
    return a[b]; c = c(); return a[b] = c; };
goog.object.some = function (a, b, c) { for (var d in a)
    if (b.call(c, a[d], d, a))
        return !0; return !1; };
goog.object.transpose = function (a) { var b = {}, c; for (c in a)
    b[a[c]] = c; return b; };
goog.object.unsafeClone = module$contents$goog$object_unsafeClone;
goog.dom.tags = {};
goog.dom.tags.VOID_TAGS_ = { area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 };
goog.dom.tags.isVoidTag = function (a) { return !0 === goog.dom.tags.VOID_TAGS_[a]; };
goog.html = {};
goog.html.trustedtypes = {};
goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse = function () { if (!goog.TRUSTED_TYPES_POLICY_NAME)
    return null; void 0 === goog.html.trustedtypes.cachedPolicy_ && (goog.html.trustedtypes.cachedPolicy_ = goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html")); return goog.html.trustedtypes.cachedPolicy_; };
goog.string.TypedString = function () { };
goog.string.Const = function (a, b) { this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = a === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && b || ""; this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_; };
goog.string.Const.prototype.implementsGoogStringTypedString = !0;
goog.string.Const.prototype.getTypedStringValue = function () { return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_; };
goog.DEBUG && (goog.string.Const.prototype.toString = function () { return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}"; });
goog.string.Const.unwrap = function (a) { if (a instanceof goog.string.Const && a.constructor === goog.string.Const && a.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_)
    return a.stringConstValueWithSecurityContract__googStringSecurityPrivate_; goog.asserts.fail("expected object of type Const, got '" + a + "'"); return "type_error:Const"; };
goog.string.Const.from = function (a) { return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, a); };
goog.string.Const.TYPE_MARKER_ = {};
goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};
goog.string.Const.EMPTY = goog.string.Const.from("");
var module$contents$goog$html$SafeScript_CONSTRUCTOR_TOKEN_PRIVATE = {}, module$contents$goog$html$SafeScript_SafeScript = function (a, b) { this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = b === module$contents$goog$html$SafeScript_CONSTRUCTOR_TOKEN_PRIVATE ? a : ""; this.implementsGoogStringTypedString = !0; };
module$contents$goog$html$SafeScript_SafeScript.fromConstant = function (a) { a = goog.string.Const.unwrap(a); return 0 === a.length ? module$contents$goog$html$SafeScript_SafeScript.EMPTY : module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a); };
module$contents$goog$html$SafeScript_SafeScript.fromJson = function (a) { return module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(module$contents$goog$html$SafeScript_SafeScript.stringify_(a)); };
module$contents$goog$html$SafeScript_SafeScript.prototype.getTypedStringValue = function () { return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString(); };
module$contents$goog$html$SafeScript_SafeScript.unwrap = function (a) { return module$contents$goog$html$SafeScript_SafeScript.unwrapTrustedScript(a).toString(); };
module$contents$goog$html$SafeScript_SafeScript.unwrapTrustedScript = function (a) { if (a instanceof module$contents$goog$html$SafeScript_SafeScript && a.constructor === module$contents$goog$html$SafeScript_SafeScript)
    return a.privateDoNotAccessOrElseSafeScriptWrappedValue_; (0, goog.asserts.fail)("expected object of type SafeScript, got '" + a + "' of type " + goog.typeOf(a)); return "type_error:SafeScript"; };
module$contents$goog$html$SafeScript_SafeScript.stringify_ = function (a) { return JSON.stringify(a).replace(/</g, "\\x3c"); };
module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function (a) { var b = goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse(); a = b ? b.createScript(a) : a; return new module$contents$goog$html$SafeScript_SafeScript(a, module$contents$goog$html$SafeScript_CONSTRUCTOR_TOKEN_PRIVATE); };
module$contents$goog$html$SafeScript_SafeScript.prototype.toString = function () { return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString(); };
module$contents$goog$html$SafeScript_SafeScript.EMPTY = module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
goog.html.SafeScript = module$contents$goog$html$SafeScript_SafeScript;
goog.fs = {};
goog.fs.url = {};
goog.fs.url.createObjectUrl = function (a) { return goog.fs.url.getUrlObject_().createObjectURL(a); };
goog.fs.url.revokeObjectUrl = function (a) { goog.fs.url.getUrlObject_().revokeObjectURL(a); };
goog.fs.url.UrlObject_ = function () { };
goog.fs.url.UrlObject_.prototype.createObjectURL = function () { };
goog.fs.url.UrlObject_.prototype.revokeObjectURL = function () { };
goog.fs.url.getUrlObject_ = function () { var a = goog.fs.url.findUrlObject_(); if (null != a)
    return a; throw Error("This browser doesn't seem to support blob URLs"); };
goog.fs.url.findUrlObject_ = function () { return void 0 !== goog.global.URL && void 0 !== goog.global.URL.createObjectURL ? goog.global.URL : void 0 !== goog.global.createObjectURL ? goog.global : null; };
goog.fs.url.browserSupportsObjectUrls = function () { return null != goog.fs.url.findUrlObject_(); };
goog.fs.blob = {};
goog.fs.blob.getBlob = function (a) { var b = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder; if (void 0 !== b) {
    b = new b;
    for (var c = 0; c < arguments.length; c++)
        b.append(arguments[c]);
    return b.getBlob();
} return goog.fs.blob.getBlobWithProperties(Array.prototype.slice.call(arguments)); };
goog.fs.blob.getBlobWithProperties = function (a, b, c) { var d = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder; if (void 0 !== d) {
    d = new d;
    for (var e = 0; e < a.length; e++)
        d.append(a[e], c);
    return d.getBlob(b);
} if (void 0 !== goog.global.Blob)
    return d = {}, b && (d.type = b), c && (d.endings = c), new Blob(a, d); throw Error("This browser doesn't seem to support creating Blobs"); };
goog.i18n = {};
goog.i18n.bidi = {};
goog.i18n.bidi.FORCE_RTL = !1;
goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || ("ar" == goog.LOCALE.substring(0, 2).toLowerCase() || "fa" == goog.LOCALE.substring(0, 2).toLowerCase() || "he" == goog.LOCALE.substring(0, 2).toLowerCase() || "iw" == goog.LOCALE.substring(0, 2).toLowerCase() || "ps" == goog.LOCALE.substring(0, 2).toLowerCase() || "sd" == goog.LOCALE.substring(0, 2).toLowerCase() || "ug" == goog.LOCALE.substring(0, 2).toLowerCase() || "ur" == goog.LOCALE.substring(0, 2).toLowerCase() || "yi" == goog.LOCALE.substring(0, 2).toLowerCase()) && (2 == goog.LOCALE.length ||
    "-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) || 3 <= goog.LOCALE.length && "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() && (3 == goog.LOCALE.length || "-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) || 7 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) && ("adlm" == goog.LOCALE.substring(3, 7).toLowerCase() || "arab" == goog.LOCALE.substring(3, 7).toLowerCase() || "hebr" == goog.LOCALE.substring(3, 7).toLowerCase() || "nkoo" == goog.LOCALE.substring(3, 7).toLowerCase() || "rohg" == goog.LOCALE.substring(3, 7).toLowerCase() || "thaa" == goog.LOCALE.substring(3, 7).toLowerCase()) || 8 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) && ("adlm" == goog.LOCALE.substring(4, 8).toLowerCase() || "arab" == goog.LOCALE.substring(4, 8).toLowerCase() || "hebr" == goog.LOCALE.substring(4, 8).toLowerCase() || "nkoo" == goog.LOCALE.substring(4, 8).toLowerCase() || "rohg" == goog.LOCALE.substring(4, 8).toLowerCase() || "thaa" == goog.LOCALE.substring(4, 8).toLowerCase());
goog.i18n.bidi.Format = { LRE: "\u202a", RLE: "\u202b", PDF: "\u202c", LRM: "\u200e", RLM: "\u200f" };
goog.i18n.bidi.Dir = { LTR: 1, RTL: -1, NEUTRAL: 0 };
goog.i18n.bidi.RIGHT = "right";
goog.i18n.bidi.LEFT = "left";
goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;
goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
goog.i18n.bidi.toDir = function (a, b) { return "number" == typeof a ? 0 < a ? goog.i18n.bidi.Dir.LTR : 0 > a ? goog.i18n.bidi.Dir.RTL : b ? null : goog.i18n.bidi.Dir.NEUTRAL : null == a ? null : a ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR; };
goog.i18n.bidi.ltrChars_ = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
goog.i18n.bidi.rtlChars_ = "\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc";
goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
goog.i18n.bidi.stripHtmlIfNeeded_ = function (a, b) { return b ? a.replace(goog.i18n.bidi.htmlSkipReg_, "") : a; };
goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
goog.i18n.bidi.hasAnyRtl = function (a, b) { return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b)); };
goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
goog.i18n.bidi.hasAnyLtr = function (a, b) { return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b)); };
goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
goog.i18n.bidi.isRtlChar = function (a) { return goog.i18n.bidi.rtlRe_.test(a); };
goog.i18n.bidi.isLtrChar = function (a) { return goog.i18n.bidi.ltrRe_.test(a); };
goog.i18n.bidi.isNeutralChar = function (a) { return !goog.i18n.bidi.isLtrChar(a) && !goog.i18n.bidi.isRtlChar(a); };
goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]");
goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]");
goog.i18n.bidi.startsWithRtl = function (a, b) { return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b)); };
goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
goog.i18n.bidi.startsWithLtr = function (a, b) { return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b)); };
goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
goog.i18n.bidi.isNeutralText = function (a, b) { a = goog.i18n.bidi.stripHtmlIfNeeded_(a, b); return goog.i18n.bidi.isRequiredLtrRe_.test(a) || !goog.i18n.bidi.hasAnyLtr(a) && !goog.i18n.bidi.hasAnyRtl(a); };
goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$");
goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$");
goog.i18n.bidi.endsWithLtr = function (a, b) { return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b)); };
goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
goog.i18n.bidi.endsWithRtl = function (a, b) { return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b)); };
goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
goog.i18n.bidi.rtlLocalesRe_ = RegExp("^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)", "i");
goog.i18n.bidi.isRtlLanguage = function (a) { return goog.i18n.bidi.rtlLocalesRe_.test(a); };
goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
goog.i18n.bidi.guardBracketInText = function (a, b) { b = (void 0 === b ? goog.i18n.bidi.hasAnyRtl(a) : b) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM; return a.replace(goog.i18n.bidi.bracketGuardTextRe_, b + "$&" + b); };
goog.i18n.bidi.enforceRtlInHtml = function (a) { return "<" == a.charAt(0) ? a.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a + "</span>"; };
goog.i18n.bidi.enforceRtlInText = function (a) { return goog.i18n.bidi.Format.RLE + a + goog.i18n.bidi.Format.PDF; };
goog.i18n.bidi.enforceLtrInHtml = function (a) { return "<" == a.charAt(0) ? a.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a + "</span>"; };
goog.i18n.bidi.enforceLtrInText = function (a) { return goog.i18n.bidi.Format.LRE + a + goog.i18n.bidi.Format.PDF; };
goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
goog.i18n.bidi.leftRe_ = /left/gi;
goog.i18n.bidi.rightRe_ = /right/gi;
goog.i18n.bidi.tempRe_ = /%%%%/g;
goog.i18n.bidi.mirrorCSS = function (a) { return a.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT); };
goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
goog.i18n.bidi.normalizeHebrewQuote = function (a) { return a.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1\u05f4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1\u05f3"); };
goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
goog.i18n.bidi.rtlDetectionThreshold_ = .4;
goog.i18n.bidi.estimateDirection = function (a, b) { var c = 0, d = 0, e = !1; a = goog.i18n.bidi.stripHtmlIfNeeded_(a, b).split(goog.i18n.bidi.wordSeparatorRe_); for (b = 0; b < a.length; b++) {
    var f = a[b];
    goog.i18n.bidi.startsWithRtl(f) ? (c++, d++) : goog.i18n.bidi.isRequiredLtrRe_.test(f) ? e = !0 : goog.i18n.bidi.hasAnyLtr(f) ? d++ : goog.i18n.bidi.hasNumeralsRe_.test(f) && (e = !0);
} return 0 == d ? e ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : c / d > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR; };
goog.i18n.bidi.detectRtlDirectionality = function (a, b) { return goog.i18n.bidi.estimateDirection(a, b) == goog.i18n.bidi.Dir.RTL; };
goog.i18n.bidi.setElementDirAndAlign = function (a, b) { a && (b = goog.i18n.bidi.toDir(b)) && (a.style.textAlign = b == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, a.dir = b == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr"); };
goog.i18n.bidi.setElementDirByTextDirectionality = function (a, b) { switch (goog.i18n.bidi.estimateDirection(b)) {
    case goog.i18n.bidi.Dir.LTR:
        "ltr" !== a.dir && (a.dir = "ltr");
        break;
    case goog.i18n.bidi.Dir.RTL:
        "rtl" !== a.dir && (a.dir = "rtl");
        break;
    default: a.removeAttribute("dir");
} };
goog.i18n.bidi.DirectionalString = function () { };
goog.html.TrustedResourceUrl = function (a, b) { this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = b === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ ? a : ""; };
goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0;
goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function () { return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString(); };
goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = !0;
goog.html.TrustedResourceUrl.prototype.getDirection = function () { return goog.i18n.bidi.Dir.LTR; };
goog.html.TrustedResourceUrl.prototype.cloneWithParams = function (a, b) { var c = goog.html.TrustedResourceUrl.unwrap(this); c = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(c); var d = c[3] || ""; return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(c[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", c[2] || "", a) + goog.html.TrustedResourceUrl.stringifyParams_("#", d, b)); };
goog.html.TrustedResourceUrl.prototype.toString = function () { return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + ""; };
goog.html.TrustedResourceUrl.unwrap = function (a) { return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(a).toString(); };
goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function (a) { if (a instanceof goog.html.TrustedResourceUrl && a.constructor === goog.html.TrustedResourceUrl)
    return a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_; goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + a + "' of type " + goog.typeOf(a)); return "type_error:TrustedResourceUrl"; };
goog.html.TrustedResourceUrl.format = function (a, b) {
    var c = goog.string.Const.unwrap(a);
    if (!goog.html.TrustedResourceUrl.BASE_URL_.test(c))
        throw Error("Invalid TrustedResourceUrl format: " + c);
    a = c.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function (d, e) {
        if (!Object.prototype.hasOwnProperty.call(b, e))
            throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
        d = b[e];
        return d instanceof goog.string.Const ? goog.string.Const.unwrap(d) :
            encodeURIComponent(String(d));
    });
    return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a);
};
goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
goog.html.TrustedResourceUrl.BASE_URL_ = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i");
goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
goog.html.TrustedResourceUrl.formatWithParams = function (a, b, c, d) { return goog.html.TrustedResourceUrl.format(a, b).cloneWithParams(c, d); };
goog.html.TrustedResourceUrl.fromConstant = function (a) { return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a)); };
goog.html.TrustedResourceUrl.fromConstants = function (a) { for (var b = "", c = 0; c < a.length; c++)
    b += goog.string.Const.unwrap(a[c]); return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b); };
goog.html.TrustedResourceUrl.fromSafeScript = function (a) { a = goog.fs.blob.getBlobWithProperties([module$contents$goog$html$SafeScript_SafeScript.unwrap(a)], "text/javascript"); a = goog.fs.url.createObjectUrl(a); return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a); };
goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function (a) { var b = goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse(); a = b ? b.createScriptURL(a) : a; return new goog.html.TrustedResourceUrl(a, goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_); };
goog.html.TrustedResourceUrl.stringifyParams_ = function (a, b, c) { if (null == c)
    return b; if ("string" === typeof c)
    return c ? a + encodeURIComponent(c) : ""; for (var d in c)
    if (Object.prototype.hasOwnProperty.call(c, d)) {
        var e = c[d];
        e = Array.isArray(e) ? e : [e];
        for (var f = 0; f < e.length; f++) {
            var g = e[f];
            null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)));
        }
    } return b; };
goog.html.SafeUrl = function (a, b) { this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = b === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ ? a : ""; };
goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0;
goog.html.SafeUrl.prototype.getTypedStringValue = function () { return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString(); };
goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = !0;
goog.html.SafeUrl.prototype.getDirection = function () { return goog.i18n.bidi.Dir.LTR; };
goog.html.SafeUrl.prototype.toString = function () { return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString(); };
goog.html.SafeUrl.unwrap = function (a) { if (a instanceof goog.html.SafeUrl && a.constructor === goog.html.SafeUrl)
    return a.privateDoNotAccessOrElseSafeUrlWrappedValue_; goog.asserts.fail("expected object of type SafeUrl, got '" + a + "' of type " + goog.typeOf(a)); return "type_error:SafeUrl"; };
goog.html.SafeUrl.fromConstant = function (a) { return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a)); };
goog.html.SAFE_MIME_TYPE_PATTERN_ = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i");
goog.html.SafeUrl.isSafeMimeType = function (a) { return goog.html.SAFE_MIME_TYPE_PATTERN_.test(a); };
goog.html.SafeUrl.fromBlob = function (a) { a = goog.html.SafeUrl.isSafeMimeType(a.type) ? goog.fs.url.createObjectUrl(a) : goog.html.SafeUrl.INNOCUOUS_STRING; return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a); };
goog.html.SafeUrl.revokeObjectUrl = function (a) { a = a.getTypedStringValue(); a !== goog.html.SafeUrl.INNOCUOUS_STRING && goog.fs.url.revokeObjectUrl(a); };
goog.html.SafeUrl.fromMediaSource = function (a) { goog.asserts.assert("MediaSource" in goog.global, "No support for MediaSource"); a = a instanceof MediaSource ? goog.fs.url.createObjectUrl(a) : goog.html.SafeUrl.INNOCUOUS_STRING; return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a); };
goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
goog.html.SafeUrl.tryFromDataUrl = function (a) { a = String(a); a = a.replace(/(%0A|%0D)/g, ""); var b = a.match(goog.html.DATA_URL_PATTERN_); return b && goog.html.SafeUrl.isSafeMimeType(b[1]) ? goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a) : null; };
goog.html.SafeUrl.fromDataUrl = function (a) { return goog.html.SafeUrl.tryFromDataUrl(a) || goog.html.SafeUrl.INNOCUOUS_URL; };
goog.html.SafeUrl.fromTelUrl = function (a) { goog.string.internal.caseInsensitiveStartsWith(a, "tel:") || (a = goog.html.SafeUrl.INNOCUOUS_STRING); return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a); };
goog.html.SIP_URL_PATTERN_ = RegExp("^sip[s]?:[+a-z0-9_.!$%&'*\\/=^`{|}~-]+@([a-z0-9-]+\\.)+[a-z0-9]{2,63}$", "i");
goog.html.SafeUrl.fromSipUrl = function (a) { goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(a)) || (a = goog.html.SafeUrl.INNOCUOUS_STRING); return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a); };
goog.html.SafeUrl.fromFacebookMessengerUrl = function (a) { goog.string.internal.caseInsensitiveStartsWith(a, "fb-messenger://share") || (a = goog.html.SafeUrl.INNOCUOUS_STRING); return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a); };
goog.html.SafeUrl.fromWhatsAppUrl = function (a) { goog.string.internal.caseInsensitiveStartsWith(a, "whatsapp://send") || (a = goog.html.SafeUrl.INNOCUOUS_STRING); return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a); };
goog.html.SafeUrl.fromSmsUrl = function (a) { goog.string.internal.caseInsensitiveStartsWith(a, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_(a) || (a = goog.html.SafeUrl.INNOCUOUS_STRING); return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a); };
goog.html.SafeUrl.isSmsUrlBodyValid_ = function (a) { var b = a.indexOf("#"); 0 < b && (a = a.substring(0, b)); b = a.match(/[?&]body=/gi); if (!b)
    return !0; if (1 < b.length)
    return !1; a = a.match(/[?&]body=([^&]*)/)[1]; if (!a)
    return !0; try {
    decodeURIComponent(a);
}
catch (c) {
    return !1;
} return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(a); };
goog.html.SafeUrl.fromSshUrl = function (a) { goog.string.internal.caseInsensitiveStartsWith(a, "ssh://") || (a = goog.html.SafeUrl.INNOCUOUS_STRING); return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a); };
goog.html.SafeUrl.sanitizeChromeExtensionUrl = function (a, b) { return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, a, b); };
goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function (a, b) { return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, a, b); };
goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function (a, b) { return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, a, b); };
goog.html.SafeUrl.sanitizeExtensionUrl_ = function (a, b, c) { (a = a.exec(b)) ? (a = a[1], -1 == (c instanceof goog.string.Const ? [goog.string.Const.unwrap(c)] : c.map(function (d) { return goog.string.Const.unwrap(d); })).indexOf(a) && (b = goog.html.SafeUrl.INNOCUOUS_STRING)) : b = goog.html.SafeUrl.INNOCUOUS_STRING; return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b); };
goog.html.SafeUrl.fromTrustedResourceUrl = function (a) { return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(a)); };
goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_;
goog.html.SafeUrl.trySanitize = function (a) { if (a instanceof goog.html.SafeUrl)
    return a; a = "object" == typeof a && a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a); return goog.html.SAFE_URL_PATTERN_.test(a) ? goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a) : goog.html.SafeUrl.tryFromDataUrl(a); };
goog.html.SafeUrl.sanitize = function (a) { return goog.html.SafeUrl.trySanitize(a) || goog.html.SafeUrl.INNOCUOUS_URL; };
goog.html.SafeUrl.sanitizeAssertUnchanged = function (a, b) { if (a instanceof goog.html.SafeUrl)
    return a; a = "object" == typeof a && a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a); if (b && /^data:/i.test(a) && (b = goog.html.SafeUrl.fromDataUrl(a), b.getTypedStringValue() == a))
    return b; goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(a), "%s does not match the safe URL pattern", a) || (a = goog.html.SafeUrl.INNOCUOUS_STRING); return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a); };
goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function (a) { return new goog.html.SafeUrl(a, goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_); };
goog.html.SafeUrl.INNOCUOUS_URL = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.SafeUrl.INNOCUOUS_STRING);
goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");
var module$contents$goog$html$SafeStyle_CONSTRUCTOR_TOKEN_PRIVATE = {}, module$contents$goog$html$SafeStyle_SafeStyle = function (a, b) { this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = b === module$contents$goog$html$SafeStyle_CONSTRUCTOR_TOKEN_PRIVATE ? a : ""; this.implementsGoogStringTypedString = !0; };
module$contents$goog$html$SafeStyle_SafeStyle.fromConstant = function (a) { a = goog.string.Const.unwrap(a); if (0 === a.length)
    return module$contents$goog$html$SafeStyle_SafeStyle.EMPTY; (0, goog.asserts.assert)((0, goog.string.internal.endsWith)(a, ";"), "Last character of style string is not ';': " + a); (0, goog.asserts.assert)((0, goog.string.internal.contains)(a, ":"), "Style string must contain at least one ':', to specify a \"name: value\" pair: " + a); return module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a); };
module$contents$goog$html$SafeStyle_SafeStyle.prototype.getTypedStringValue = function () { return this.privateDoNotAccessOrElseSafeStyleWrappedValue_; };
module$contents$goog$html$SafeStyle_SafeStyle.prototype.toString = function () { return this.privateDoNotAccessOrElseSafeStyleWrappedValue_.toString(); };
module$contents$goog$html$SafeStyle_SafeStyle.unwrap = function (a) { if (a instanceof module$contents$goog$html$SafeStyle_SafeStyle && a.constructor === module$contents$goog$html$SafeStyle_SafeStyle)
    return a.privateDoNotAccessOrElseSafeStyleWrappedValue_; (0, goog.asserts.fail)("expected object of type SafeStyle, got '" + a + "' of type " + goog.typeOf(a)); return "type_error:SafeStyle"; };
module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function (a) { return new module$contents$goog$html$SafeStyle_SafeStyle(a, module$contents$goog$html$SafeStyle_CONSTRUCTOR_TOKEN_PRIVATE); };
module$contents$goog$html$SafeStyle_SafeStyle.create = function (a) {
    var b = "", c;
    for (c in a)
        if (Object.prototype.hasOwnProperty.call(a, c)) {
            if (!/^[-_a-zA-Z0-9]+$/.test(c))
                throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
            var d = a[c];
            null != d && (d = Array.isArray(d) ? d.map(module$contents$goog$html$SafeStyle_sanitizePropertyValue).join(" ") : module$contents$goog$html$SafeStyle_sanitizePropertyValue(d), b += c + ":" + d + ";");
        }
    return b ? module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b) :
        module$contents$goog$html$SafeStyle_SafeStyle.EMPTY;
};
module$contents$goog$html$SafeStyle_SafeStyle.concat = function (a) { var b = "", c = function (d) { Array.isArray(d) ? d.forEach(c) : b += module$contents$goog$html$SafeStyle_SafeStyle.unwrap(d); }; Array.prototype.forEach.call(arguments, c); return b ? module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b) : module$contents$goog$html$SafeStyle_SafeStyle.EMPTY; };
module$contents$goog$html$SafeStyle_SafeStyle.EMPTY = module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
module$contents$goog$html$SafeStyle_SafeStyle.INNOCUOUS_STRING = "zClosurez";
function module$contents$goog$html$SafeStyle_sanitizePropertyValue(a) { if (a instanceof goog.html.SafeUrl)
    return 'url("' + goog.html.SafeUrl.unwrap(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")'; a = a instanceof goog.string.Const ? goog.string.Const.unwrap(a) : module$contents$goog$html$SafeStyle_sanitizePropertyValueString(String(a)); if (/[{;}]/.test(a))
    throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.", [a]); return a; }
function module$contents$goog$html$SafeStyle_sanitizePropertyValueString(a) {
    var b = a.replace(module$contents$goog$html$SafeStyle_FUNCTIONS_RE, "$1").replace(module$contents$goog$html$SafeStyle_FUNCTIONS_RE, "$1").replace(module$contents$goog$html$SafeStyle_URL_RE, "url");
    if (module$contents$goog$html$SafeStyle_VALUE_RE.test(b)) {
        if (module$contents$goog$html$SafeStyle_COMMENT_RE.test(a))
            return (0, goog.asserts.fail)("String value disallows comments, got: " + a), module$contents$goog$html$SafeStyle_SafeStyle.INNOCUOUS_STRING;
        for (var c = b = !0, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            "'" == e && c ? b = !b : '"' == e && b && (c = !c);
        }
        if (!b || !c)
            return (0, goog.asserts.fail)("String value requires balanced quotes, got: " + a), module$contents$goog$html$SafeStyle_SafeStyle.INNOCUOUS_STRING;
        if (!module$contents$goog$html$SafeStyle_hasBalancedSquareBrackets(a))
            return (0, goog.asserts.fail)("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a), module$contents$goog$html$SafeStyle_SafeStyle.INNOCUOUS_STRING;
    }
    else
        return (0, goog.asserts.fail)("String value allows only [-,.\"'%_!#/ a-zA-Z0-9\\[\\]] and simple functions, got: " +
            a), module$contents$goog$html$SafeStyle_SafeStyle.INNOCUOUS_STRING;
    return module$contents$goog$html$SafeStyle_sanitizeUrl(a);
}
function module$contents$goog$html$SafeStyle_hasBalancedSquareBrackets(a) { for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
    var e = a.charAt(d);
    if ("]" == e) {
        if (b)
            return !1;
        b = !0;
    }
    else if ("[" == e) {
        if (!b)
            return !1;
        b = !1;
    }
    else if (!b && !c.test(e))
        return !1;
} return b; }
var module$contents$goog$html$SafeStyle_VALUE_RE = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"), module$contents$goog$html$SafeStyle_URL_RE = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"), module$contents$goog$html$SafeStyle_FUNCTIONS_RE = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"), module$contents$goog$html$SafeStyle_COMMENT_RE = /\/\*/;
function module$contents$goog$html$SafeStyle_sanitizeUrl(a) { return a.replace(module$contents$goog$html$SafeStyle_URL_RE, function (b, c, d, e) { var f = ""; d = d.replace(/^(['"])(.*)\1$/, function (g, k, h) { f = k; return h; }); b = goog.html.SafeUrl.sanitize(d).getTypedStringValue(); return c + f + b + f + e; }); }
goog.html.SafeStyle = module$contents$goog$html$SafeStyle_SafeStyle;
var module$contents$goog$html$SafeStyleSheet_CONSTRUCTOR_TOKEN_PRIVATE = {}, module$contents$goog$html$SafeStyleSheet_SafeStyleSheet = function (a, b) { this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = b === module$contents$goog$html$SafeStyleSheet_CONSTRUCTOR_TOKEN_PRIVATE ? a : ""; this.implementsGoogStringTypedString = !0; };
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createRule = function (a, b) {
    if ((0, goog.string.internal.contains)(a, "<"))
        throw Error("Selector does not allow '<', got: " + a);
    var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
    if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))
        throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
    if (!module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.hasBalancedBrackets_(c))
        throw Error("() and [] in selector must be balanced, got: " +
            a);
    b instanceof module$contents$goog$html$SafeStyle_SafeStyle || (b = module$contents$goog$html$SafeStyle_SafeStyle.create(b));
    a = a + "{" + module$contents$goog$html$SafeStyle_SafeStyle.unwrap(b).replace(/</g, "\\3C ") + "}";
    return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a);
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.hasBalancedBrackets_ = function (a) { for (var b = { "(": ")", "[": "]" }, c = [], d = 0; d < a.length; d++) {
    var e = a[d];
    if (b[e])
        c.push(b[e]);
    else if (module$contents$goog$object_containsValue(b, e) && c.pop() != e)
        return !1;
} return 0 == c.length; };
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.concat = function (a) { var b = "", c = function (d) { Array.isArray(d) ? d.forEach(c) : b += module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.unwrap(d); }; Array.prototype.forEach.call(arguments, c); return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b); };
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.fromConstant = function (a) { a = goog.string.Const.unwrap(a); if (0 === a.length)
    return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.EMPTY; (0, goog.asserts.assert)(!(0, goog.string.internal.contains)(a, "<"), "Forbidden '<' character in style sheet string: " + a); return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a); };
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.prototype.getTypedStringValue = function () { return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_; };
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.unwrap = function (a) { if (a instanceof module$contents$goog$html$SafeStyleSheet_SafeStyleSheet && a.constructor === module$contents$goog$html$SafeStyleSheet_SafeStyleSheet)
    return a.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_; (0, goog.asserts.fail)("expected object of type SafeStyleSheet, got '" + a + "' of type " + goog.typeOf(a)); return "type_error:SafeStyleSheet"; };
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function (a) { return new module$contents$goog$html$SafeStyleSheet_SafeStyleSheet(a, module$contents$goog$html$SafeStyleSheet_CONSTRUCTOR_TOKEN_PRIVATE); };
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.prototype.toString = function () { return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_.toString(); };
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.EMPTY = module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
goog.html.SafeStyleSheet = module$contents$goog$html$SafeStyleSheet_SafeStyleSheet;
var module$contents$goog$html$SafeHtml_CONSTRUCTOR_TOKEN_PRIVATE = {}, module$contents$goog$html$SafeHtml_SafeHtml = function (a, b, c) { this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = c === module$contents$goog$html$SafeHtml_CONSTRUCTOR_TOKEN_PRIVATE ? a : ""; this.dir_ = b; this.implementsGoogStringTypedString = this.implementsGoogI18nBidiDirectionalString = !0; };
module$contents$goog$html$SafeHtml_SafeHtml.prototype.getDirection = function () { return this.dir_; };
module$contents$goog$html$SafeHtml_SafeHtml.prototype.getTypedStringValue = function () { return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString(); };
module$contents$goog$html$SafeHtml_SafeHtml.prototype.toString = function () { return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString(); };
module$contents$goog$html$SafeHtml_SafeHtml.unwrap = function (a) { return module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(a).toString(); };
module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML = function (a) { if (a instanceof module$contents$goog$html$SafeHtml_SafeHtml && a.constructor === module$contents$goog$html$SafeHtml_SafeHtml)
    return a.privateDoNotAccessOrElseSafeHtmlWrappedValue_; goog.asserts.fail("expected object of type SafeHtml, got '" + a + "' of type " + goog.typeOf(a)); return "type_error:SafeHtml"; };
module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape = function (a) { if (a instanceof module$contents$goog$html$SafeHtml_SafeHtml)
    return a; var b = "object" == typeof a, c = null; b && a.implementsGoogI18nBidiDirectionalString && (c = a.getDirection()); return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(b && a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a)), c); };
module$contents$goog$html$SafeHtml_SafeHtml.htmlEscapePreservingNewlines = function (a) { if (a instanceof module$contents$goog$html$SafeHtml_SafeHtml)
    return a; a = module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape(a); return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(module$contents$goog$html$SafeHtml_SafeHtml.unwrap(a)), a.getDirection()); };
module$contents$goog$html$SafeHtml_SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function (a) { if (a instanceof module$contents$goog$html$SafeHtml_SafeHtml)
    return a; a = module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape(a); return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(module$contents$goog$html$SafeHtml_SafeHtml.unwrap(a)), a.getDirection()); };
module$contents$goog$html$SafeHtml_SafeHtml.comment = function (a) { return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3c!--" + goog.string.internal.htmlEscape(a) + "--\x3e", null); };
module$contents$goog$html$SafeHtml_SafeHtml.create = function (a, b, c) { module$contents$goog$html$SafeHtml_SafeHtml.verifyTagName(String(a)); return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(a), b, c); };
module$contents$goog$html$SafeHtml_SafeHtml.verifyTagName = function (a) { if (!module$contents$goog$html$SafeHtml_VALID_NAMES_IN_TAG.test(a))
    throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? "Invalid tag name <" + a + ">." : ""); if (a.toUpperCase() in module$contents$goog$html$SafeHtml_NOT_ALLOWED_TAG_NAMES)
    throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? "Tag name <" + a + "> is not allowed for SafeHtml." : ""); };
module$contents$goog$html$SafeHtml_SafeHtml.createIframe = function (a, b, c, d) { a && goog.html.TrustedResourceUrl.unwrap(a); var e = {}; e.src = a || null; e.srcdoc = b && module$contents$goog$html$SafeHtml_SafeHtml.unwrap(b); a = module$contents$goog$html$SafeHtml_SafeHtml.combineAttributes(e, { sandbox: "" }, c); return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a, d); };
module$contents$goog$html$SafeHtml_SafeHtml.createSandboxIframe = function (a, b, c, d) {
    if (!module$contents$goog$html$SafeHtml_SafeHtml.canUseSandboxIframe())
        throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? "The browser does not support sandboxed iframes." : "");
    var e = {};
    e.src = a ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a)) : null;
    e.srcdoc = b || null;
    e.sandbox = "";
    a = module$contents$goog$html$SafeHtml_SafeHtml.combineAttributes(e, {}, c);
    return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a, d);
};
module$contents$goog$html$SafeHtml_SafeHtml.canUseSandboxIframe = function () { return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype; };
module$contents$goog$html$SafeHtml_SafeHtml.createScriptSrc = function (a, b) { goog.html.TrustedResourceUrl.unwrap(a); a = module$contents$goog$html$SafeHtml_SafeHtml.combineAttributes({ src: a }, {}, b); return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", a); };
module$contents$goog$html$SafeHtml_SafeHtml.createScript = function (a, b) {
    for (var c in b)
        if (Object.prototype.hasOwnProperty.call(b, c)) {
            var d = c.toLowerCase();
            if ("language" == d || "src" == d || "text" == d || "type" == d)
                throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot set "' + d + '" attribute' : "");
        }
    c = "";
    a = module$contents$goog$array_concat(a);
    for (d = 0; d < a.length; d++)
        c += module$contents$goog$html$SafeScript_SafeScript.unwrap(a[d]);
    a = module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c, goog.i18n.bidi.Dir.NEUTRAL);
    return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", b, a);
};
module$contents$goog$html$SafeHtml_SafeHtml.createStyle = function (a, b) {
    b = module$contents$goog$html$SafeHtml_SafeHtml.combineAttributes({ type: "text/css" }, {}, b);
    var c = "";
    a = module$contents$goog$array_concat(a);
    for (var d = 0; d < a.length; d++)
        c += module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.unwrap(a[d]);
    a = module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c, goog.i18n.bidi.Dir.NEUTRAL);
    return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", b, a);
};
module$contents$goog$html$SafeHtml_SafeHtml.createMetaRefresh = function (a, b) { a = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a)); (module$contents$goog$labs$userAgent$browser_matchIE() || module$contents$goog$labs$userAgent$browser_matchEdgeHtml()) && goog.string.internal.contains(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"); return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", { "http-equiv": "refresh", content: (b || 0) + "; url=" + a }); };
module$contents$goog$html$SafeHtml_SafeHtml.createWithDir = function (a, b, c, d) { b = module$contents$goog$html$SafeHtml_SafeHtml.create(b, c, d); b.dir_ = a; return b; };
module$contents$goog$html$SafeHtml_SafeHtml.join = function (a, b) {
    a = module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape(a);
    var c = a.getDirection(), d = [], e = function (f) { Array.isArray(f) ? f.forEach(e) : (f = module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape(f), d.push(module$contents$goog$html$SafeHtml_SafeHtml.unwrap(f)), f = f.getDirection(), c == goog.i18n.bidi.Dir.NEUTRAL ? c = f : f != goog.i18n.bidi.Dir.NEUTRAL && c != f && (c = null)); };
    b.forEach(e);
    return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(d.join(module$contents$goog$html$SafeHtml_SafeHtml.unwrap(a)), c);
};
module$contents$goog$html$SafeHtml_SafeHtml.concat = function (a) { return module$contents$goog$html$SafeHtml_SafeHtml.join(module$contents$goog$html$SafeHtml_SafeHtml.EMPTY, Array.prototype.slice.call(arguments)); };
module$contents$goog$html$SafeHtml_SafeHtml.concatWithDir = function (a, b) { var c = module$contents$goog$html$SafeHtml_SafeHtml.concat(Array.prototype.slice.call(arguments, 1)); c.dir_ = a; return c; };
module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function (a, b) { var c = goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse(); a = c ? c.createHTML(a) : a; return new module$contents$goog$html$SafeHtml_SafeHtml(a, b, module$contents$goog$html$SafeHtml_CONSTRUCTOR_TOKEN_PRIVATE); };
module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function (a, b, c) {
    var d = null;
    var e = "<" + a + module$contents$goog$html$SafeHtml_SafeHtml.stringifyAttributes(a, b);
    null == c ? c = [] : Array.isArray(c) || (c = [c]);
    goog.dom.tags.isVoidTag(a.toLowerCase()) ? (goog.asserts.assert(!c.length, "Void tag <" + a + "> does not allow content."), e += ">") : (d = module$contents$goog$html$SafeHtml_SafeHtml.concat(c), e += ">" + module$contents$goog$html$SafeHtml_SafeHtml.unwrap(d) + "</" + a + ">", d = d.getDirection());
    (a = b && b.dir) && (d = /^(ltr|rtl|auto)$/i.test(a) ? goog.i18n.bidi.Dir.NEUTRAL : null);
    return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e, d);
};
module$contents$goog$html$SafeHtml_SafeHtml.stringifyAttributes = function (a, b) {
    var c = "";
    if (b)
        for (var d in b)
            if (Object.prototype.hasOwnProperty.call(b, d)) {
                if (!module$contents$goog$html$SafeHtml_VALID_NAMES_IN_TAG.test(d))
                    throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? 'Invalid attribute name "' + d + '".' : "");
                var e = b[d];
                if (null != e) {
                    var f = a;
                    var g = d;
                    if (e instanceof goog.string.Const)
                        e = goog.string.Const.unwrap(e);
                    else if ("style" == g.toLowerCase())
                        if (module$contents$goog$html$SafeHtml_SafeHtml.SUPPORT_STYLE_ATTRIBUTE) {
                            if (!goog.isObject(e))
                                throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ?
                                    'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof e + " given: " + e : "");
                            e instanceof module$contents$goog$html$SafeStyle_SafeStyle || (e = module$contents$goog$html$SafeStyle_SafeStyle.create(e));
                            e = module$contents$goog$html$SafeStyle_SafeStyle.unwrap(e);
                        }
                        else
                            throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "style" not supported.' : "");
                    else {
                        if (/^on/i.test(g))
                            throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ?
                                'Attribute "' + g + '" requires goog.string.Const value, "' + e + '" given.' : "");
                        if (g.toLowerCase() in module$contents$goog$html$SafeHtml_URL_ATTRIBUTES)
                            if (e instanceof goog.html.TrustedResourceUrl)
                                e = goog.html.TrustedResourceUrl.unwrap(e);
                            else if (e instanceof goog.html.SafeUrl)
                                e = goog.html.SafeUrl.unwrap(e);
                            else if ("string" === typeof e)
                                e = goog.html.SafeUrl.sanitize(e).getTypedStringValue();
                            else
                                throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + g + '" on tag "' + f + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                                    e + '" given.' : "");
                    }
                    e.implementsGoogStringTypedString && (e = e.getTypedStringValue());
                    goog.asserts.assert("string" === typeof e || "number" === typeof e, "String or number value expected, got " + typeof e + " with value: " + e);
                    g = g + '="' + goog.string.internal.htmlEscape(String(e)) + '"';
                    c += " " + g;
                }
            }
    return c;
};
module$contents$goog$html$SafeHtml_SafeHtml.combineAttributes = function (a, b, c) {
    var d = {};
    for (g in a)
        Object.prototype.hasOwnProperty.call(a, g) && (goog.asserts.assert(g.toLowerCase() == g, "Must be lower case"), d[g] = a[g]);
    for (var e in b)
        Object.prototype.hasOwnProperty.call(b, e) && (goog.asserts.assert(e.toLowerCase() == e, "Must be lower case"), d[e] = b[e]);
    if (c)
        for (var f in c)
            if (Object.prototype.hasOwnProperty.call(c, f)) {
                var g = f.toLowerCase();
                if (g in a)
                    throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ?
                        'Cannot override "' + g + '" attribute, got "' + f + '" with value "' + c[f] + '"' : "");
                g in b && delete d[g];
                d[f] = c[f];
            }
    return d;
};
module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES = goog.DEBUG;
module$contents$goog$html$SafeHtml_SafeHtml.SUPPORT_STYLE_ATTRIBUTE = !0;
module$contents$goog$html$SafeHtml_SafeHtml.from = module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape;
var module$contents$goog$html$SafeHtml_VALID_NAMES_IN_TAG = /^[a-zA-Z0-9-]+$/, module$contents$goog$html$SafeHtml_URL_ATTRIBUTES = { action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0 }, module$contents$goog$html$SafeHtml_NOT_ALLOWED_TAG_NAMES = module$contents$goog$object_createSet(goog.dom.TagName.APPLET, goog.dom.TagName.BASE, goog.dom.TagName.EMBED, goog.dom.TagName.IFRAME, goog.dom.TagName.LINK, goog.dom.TagName.MATH, goog.dom.TagName.META, goog.dom.TagName.OBJECT, goog.dom.TagName.SCRIPT, goog.dom.TagName.STYLE, goog.dom.TagName.SVG, goog.dom.TagName.TEMPLATE);
module$contents$goog$html$SafeHtml_SafeHtml.DOCTYPE_HTML = module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL);
module$contents$goog$html$SafeHtml_SafeHtml.EMPTY = new module$contents$goog$html$SafeHtml_SafeHtml(goog.global.trustedTypes && goog.global.trustedTypes.emptyHTML || "", goog.i18n.bidi.Dir.NEUTRAL, module$contents$goog$html$SafeHtml_CONSTRUCTOR_TOKEN_PRIVATE);
module$contents$goog$html$SafeHtml_SafeHtml.BR = module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL);
goog.html.SafeHtml = module$contents$goog$html$SafeHtml_SafeHtml;
goog.html.uncheckedconversions = {};
goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function (a, b, c) { goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification"); goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification"); return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(b, c || null); };
goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function (a, b) { goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification"); goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification"); return module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(b); };
goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function (a, b) { goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification"); goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification"); return module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b); };
goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function (a, b) { goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification"); goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification"); return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b); };
goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function (a, b) { goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification"); goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification"); return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b); };
goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function (a, b) { goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification"); goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification"); return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b); };
goog.dom.safe = {};
goog.dom.safe.InsertAdjacentHtmlPosition = { AFTERBEGIN: "afterbegin", AFTEREND: "afterend", BEFOREBEGIN: "beforebegin", BEFOREEND: "beforeend" };
goog.dom.safe.insertAdjacentHtml = function (a, b, c) { a.insertAdjacentHTML(b, module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(c)); };
goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = { MATH: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 };
goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(function () { if (goog.DEBUG && "undefined" === typeof document)
    return !1; var a = document.createElement("div"), b = document.createElement("div"); b.appendChild(document.createElement("div")); a.appendChild(b); if (goog.DEBUG && !a.firstChild)
    return !1; b = a.firstChild.firstChild; a.innerHTML = module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(module$contents$goog$html$SafeHtml_SafeHtml.EMPTY); return !b.parentElement; });
goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function (a, b) { if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
    for (; a.lastChild;)
        a.removeChild(a.lastChild); a.innerHTML = module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(b); };
goog.dom.safe.setInnerHtml = function (a, b) { if (goog.asserts.ENABLE_ASSERTS && a.tagName && goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[a.tagName.toUpperCase()])
    throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + "."); goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(a, b); };
goog.dom.safe.setInnerHtmlFromConstant = function (a, b) { goog.dom.safe.setInnerHtml(a, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Constant HTML to be immediatelly used."), goog.string.Const.unwrap(b))); };
goog.dom.safe.setOuterHtml = function (a, b) { a.outerHTML = module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(b); };
goog.dom.safe.setFormElementAction = function (a, b) { b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b); goog.dom.asserts.assertIsHTMLFormElement(a).action = goog.html.SafeUrl.unwrap(b); };
goog.dom.safe.setButtonFormAction = function (a, b) { b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b); goog.dom.asserts.assertIsHTMLButtonElement(a).formAction = goog.html.SafeUrl.unwrap(b); };
goog.dom.safe.setInputFormAction = function (a, b) { b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b); goog.dom.asserts.assertIsHTMLInputElement(a).formAction = goog.html.SafeUrl.unwrap(b); };
goog.dom.safe.setStyle = function (a, b) { a.style.cssText = module$contents$goog$html$SafeStyle_SafeStyle.unwrap(b); };
goog.dom.safe.documentWrite = function (a, b) { a.write(module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(b)); };
goog.dom.safe.setAnchorHref = function (a, b) { goog.dom.asserts.assertIsHTMLAnchorElement(a); b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b); a.href = goog.html.SafeUrl.unwrap(b); };
goog.dom.safe.setImageSrc = function (a, b) { goog.dom.asserts.assertIsHTMLImageElement(a); b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b, /^data:image\//i.test(b)); a.src = goog.html.SafeUrl.unwrap(b); };
goog.dom.safe.setAudioSrc = function (a, b) { goog.dom.asserts.assertIsHTMLAudioElement(a); b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b, /^data:audio\//i.test(b)); a.src = goog.html.SafeUrl.unwrap(b); };
goog.dom.safe.setVideoSrc = function (a, b) { goog.dom.asserts.assertIsHTMLVideoElement(a); b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b, /^data:video\//i.test(b)); a.src = goog.html.SafeUrl.unwrap(b); };
goog.dom.safe.setEmbedSrc = function (a, b) { goog.dom.asserts.assertIsHTMLEmbedElement(a); a.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b); };
goog.dom.safe.setFrameSrc = function (a, b) { goog.dom.asserts.assertIsHTMLFrameElement(a); a.src = goog.html.TrustedResourceUrl.unwrap(b); };
goog.dom.safe.setIframeSrc = function (a, b) { goog.dom.asserts.assertIsHTMLIFrameElement(a); a.src = goog.html.TrustedResourceUrl.unwrap(b); };
goog.dom.safe.setIframeSrcdoc = function (a, b) { goog.dom.asserts.assertIsHTMLIFrameElement(a); a.srcdoc = module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(b); };
goog.dom.safe.setLinkHrefAndRel = function (a, b, c) {
    goog.dom.asserts.assertIsHTMLLinkElement(a);
    a.rel = c;
    goog.string.internal.caseInsensitiveContains(c, "stylesheet") ? (goog.asserts.assert(b instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'), a.href = goog.html.TrustedResourceUrl.unwrap(b), (b = goog.dom.safe.getStyleNonce(a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b)) : a.href = b instanceof goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrap(b) :
        b instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrap(b) : goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitizeAssertUnchanged(b));
};
goog.dom.safe.setObjectData = function (a, b) { goog.dom.asserts.assertIsHTMLObjectElement(a); a.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b); };
goog.dom.safe.setScriptSrc = function (a, b) { goog.dom.asserts.assertIsHTMLScriptElement(a); a.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b); goog.dom.safe.setNonceForScriptElement_(a); };
goog.dom.safe.setScriptContent = function (a, b) { goog.dom.asserts.assertIsHTMLScriptElement(a); a.textContent = module$contents$goog$html$SafeScript_SafeScript.unwrapTrustedScript(b); goog.dom.safe.setNonceForScriptElement_(a); };
goog.dom.safe.setNonceForScriptElement_ = function (a) { var b = goog.dom.safe.getScriptNonce(a.ownerDocument && a.ownerDocument.defaultView); b && a.setAttribute("nonce", b); };
goog.dom.safe.setLocationHref = function (a, b) { goog.dom.asserts.assertIsLocation(a); b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b); a.href = goog.html.SafeUrl.unwrap(b); };
goog.dom.safe.assignLocation = function (a, b) { goog.dom.asserts.assertIsLocation(a); b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b); a.assign(goog.html.SafeUrl.unwrap(b)); };
goog.dom.safe.replaceLocation = function (a, b) { b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b); a.replace(goog.html.SafeUrl.unwrap(b)); };
goog.dom.safe.openInWindow = function (a, b, c, d) { a = a instanceof goog.html.SafeUrl ? a : goog.html.SafeUrl.sanitizeAssertUnchanged(a); b = b || goog.global; c = c instanceof goog.string.Const ? goog.string.Const.unwrap(c) : c || ""; return void 0 !== d ? b.open(goog.html.SafeUrl.unwrap(a), c, d) : b.open(goog.html.SafeUrl.unwrap(a), c); };
goog.dom.safe.parseFromStringHtml = function (a, b) { return goog.dom.safe.parseFromString(a, b, "text/html"); };
goog.dom.safe.parseFromString = function (a, b, c) { return a.parseFromString(module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(b), c); };
goog.dom.safe.createImageFromBlob = function (a) { if (!/^image\/.*/g.test(a.type))
    throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*."); var b = goog.global.URL.createObjectURL(a); a = new goog.global.Image; a.onload = function () { goog.global.URL.revokeObjectURL(b); }; goog.dom.safe.setImageSrc(a, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), b)); return a; };
goog.dom.safe.createContextualFragment = function (a, b) { return a.createContextualFragment(module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(b)); };
goog.dom.safe.getScriptNonce = function (a) { return goog.dom.safe.getNonce_("script[nonce]", a); };
goog.dom.safe.getStyleNonce = function (a) { return goog.dom.safe.getNonce_('style[nonce],link[rel="stylesheet"][nonce]', a); };
goog.dom.safe.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
goog.dom.safe.getNonce_ = function (a, b) { b = (b || goog.global).document; return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && goog.dom.safe.NONCE_PATTERN_.test(a) ? a : "" : ""; };
goog.string.DETECT_DOUBLE_ESCAPING = !1;
goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1;
goog.string.Unicode = { NBSP: "\u00a0" };
goog.string.startsWith = goog.string.internal.startsWith;
goog.string.endsWith = goog.string.internal.endsWith;
goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith;
goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith;
goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals;
goog.string.subs = function (a, b) { for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)
    d += c.shift() + e.shift(); return d + c.join("%s"); };
goog.string.collapseWhitespace = function (a) { return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, ""); };
goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
goog.string.isEmptyString = function (a) { return 0 == a.length; };
goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
goog.string.isEmptyOrWhitespaceSafe = function (a) { return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a)); };
goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
goog.string.isBreakingWhitespace = function (a) { return !/[^\t\n\r ]/.test(a); };
goog.string.isAlpha = function (a) { return !/[^a-zA-Z]/.test(a); };
goog.string.isNumeric = function (a) { return !/[^0-9]/.test(a); };
goog.string.isAlphaNumeric = function (a) { return !/[^a-zA-Z0-9]/.test(a); };
goog.string.isSpace = function (a) { return " " == a; };
goog.string.isUnicodeChar = function (a) { return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a; };
goog.string.stripNewlines = function (a) { return a.replace(/(\r\n|\r|\n)+/g, " "); };
goog.string.canonicalizeNewlines = function (a) { return a.replace(/(\r\n|\r|\n)/g, "\n"); };
goog.string.normalizeWhitespace = function (a) { return a.replace(/\xa0|\s/g, " "); };
goog.string.normalizeSpaces = function (a) { return a.replace(/\xa0|[ \t]+/g, " "); };
goog.string.collapseBreakingSpaces = function (a) { return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, ""); };
goog.string.trim = goog.string.internal.trim;
goog.string.trimLeft = function (a) { return a.replace(/^[\s\xa0]+/, ""); };
goog.string.trimRight = function (a) { return a.replace(/[\s\xa0]+$/, ""); };
goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare;
goog.string.numberAwareCompare_ = function (a, b, c) { if (a == b)
    return 0; if (!a)
    return -1; if (!b)
    return 1; for (var d = a.toLowerCase().match(c), e = b.toLowerCase().match(c), f = Math.min(d.length, e.length), g = 0; g < f; g++) {
    c = d[g];
    var k = e[g];
    if (c != k)
        return a = parseInt(c, 10), !isNaN(a) && (b = parseInt(k, 10), !isNaN(b) && a - b) ? a - b : c < k ? -1 : 1;
} return d.length != e.length ? d.length - e.length : a < b ? -1 : 1; };
goog.string.intAwareCompare = function (a, b) { return goog.string.numberAwareCompare_(a, b, /\d+|\D+/g); };
goog.string.floatAwareCompare = function (a, b) { return goog.string.numberAwareCompare_(a, b, /\d+|\.\d+|\D+/g); };
goog.string.numerateCompare = goog.string.floatAwareCompare;
goog.string.urlEncode = function (a) { return encodeURIComponent(String(a)); };
goog.string.urlDecode = function (a) { return decodeURIComponent(a.replace(/\+/g, " ")); };
goog.string.newLineToBr = goog.string.internal.newLineToBr;
goog.string.htmlEscape = function (a, b) { a = goog.string.internal.htmlEscape(a, b); goog.string.DETECT_DOUBLE_ESCAPING && (a = a.replace(goog.string.E_RE_, "&#101;")); return a; };
goog.string.E_RE_ = /e/g;
goog.string.unescapeEntities = function (a) { return goog.string.contains(a, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a) : goog.string.unescapePureXmlEntities_(a) : a; };
goog.string.unescapeEntitiesWithDocument = function (a, b) { return goog.string.contains(a, "&") ? goog.string.unescapeEntitiesUsingDom_(a, b) : a; };
goog.string.unescapeEntitiesUsingDom_ = function (a, b) {
    var c = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
    var d = b ? b.createElement("div") : goog.global.document.createElement("div");
    return a.replace(goog.string.HTML_ENTITY_PATTERN_, function (e, f) {
        var g = c[e];
        if (g)
            return g;
        "#" == f.charAt(0) && (f = Number("0" + f.substr(1)), isNaN(f) || (g = String.fromCharCode(f)));
        g || (goog.dom.safe.setInnerHtml(d, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."), e + " ")), g = d.firstChild.nodeValue.slice(0, -1));
        return c[e] = g;
    });
};
goog.string.unescapePureXmlEntities_ = function (a) { return a.replace(/&([^;]+);/g, function (b, c) { switch (c) {
    case "amp": return "&";
    case "lt": return "<";
    case "gt": return ">";
    case "quot": return '"';
    default: return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? b : String.fromCharCode(c);
} }); };
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
goog.string.whitespaceEscape = function (a, b) { return goog.string.newLineToBr(a.replace(/  /g, " &#160;"), b); };
goog.string.preserveSpaces = function (a) { return a.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP); };
goog.string.stripQuotes = function (a, b) { for (var c = b.length, d = 0; d < c; d++) {
    var e = 1 == c ? b : b.charAt(d);
    if (a.charAt(0) == e && a.charAt(a.length - 1) == e)
        return a.substring(1, a.length - 1);
} return a; };
goog.string.truncate = function (a, b, c) { c && (a = goog.string.unescapeEntities(a)); a.length > b && (a = a.substring(0, b - 3) + "..."); c && (a = goog.string.htmlEscape(a)); return a; };
goog.string.truncateMiddle = function (a, b, c, d) { c && (a = goog.string.unescapeEntities(a)); d && a.length > b ? (d > b && (d = b), a = a.substring(0, b - d) + "..." + a.substring(a.length - d)) : a.length > b && (d = Math.floor(b / 2), a = a.substring(0, d + b % 2) + "..." + a.substring(a.length - d)); c && (a = goog.string.htmlEscape(a)); return a; };
goog.string.specialEscapeChars_ = { "\x00": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\x0B", '"': '\\"', "\\": "\\\\", "<": "\\u003C" };
goog.string.jsEscapeCache_ = { "'": "\\'" };
goog.string.quote = function (a) { a = String(a); for (var b = ['"'], c = 0; c < a.length; c++) {
    var d = a.charAt(c), e = d.charCodeAt(0);
    b[c + 1] = goog.string.specialEscapeChars_[d] || (31 < e && 127 > e ? d : goog.string.escapeChar(d));
} b.push('"'); return b.join(""); };
goog.string.escapeString = function (a) { for (var b = [], c = 0; c < a.length; c++)
    b[c] = goog.string.escapeChar(a.charAt(c)); return b.join(""); };
goog.string.escapeChar = function (a) { if (a in goog.string.jsEscapeCache_)
    return goog.string.jsEscapeCache_[a]; if (a in goog.string.specialEscapeChars_)
    return goog.string.jsEscapeCache_[a] = goog.string.specialEscapeChars_[a]; var b = a.charCodeAt(0); if (31 < b && 127 > b)
    var c = a;
else {
    if (256 > b) {
        if (c = "\\x", 16 > b || 256 < b)
            c += "0";
    }
    else
        c = "\\u", 4096 > b && (c += "0");
    c += b.toString(16).toUpperCase();
} return goog.string.jsEscapeCache_[a] = c; };
goog.string.contains = goog.string.internal.contains;
goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains;
goog.string.countOf = function (a, b) { return a && b ? a.split(b).length - 1 : 0; };
goog.string.removeAt = function (a, b, c) { var d = a; 0 <= b && b < a.length && 0 < c && (d = a.substr(0, b) + a.substr(b + c, a.length - b - c)); return d; };
goog.string.remove = function (a, b) { return a.replace(b, ""); };
goog.string.removeAll = function (a, b) { b = new RegExp(goog.string.regExpEscape(b), "g"); return a.replace(b, ""); };
goog.string.replaceAll = function (a, b, c) { b = new RegExp(goog.string.regExpEscape(b), "g"); return a.replace(b, c.replace(/\$/g, "$$$$")); };
goog.string.regExpEscape = function (a) { return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"); };
goog.string.repeat = String.prototype.repeat ? function (a, b) { return a.repeat(b); } : function (a, b) { return Array(b + 1).join(a); };
goog.string.padNumber = function (a, b, c) { if (!Number.isFinite(a))
    return String(a); a = void 0 !== c ? a.toFixed(c) : String(a); c = a.indexOf("."); -1 === c && (c = a.length); var d = "-" === a[0] ? "-" : ""; d && (a = a.substring(1)); return d + goog.string.repeat("0", Math.max(0, b - c)) + a; };
goog.string.makeSafe = function (a) { return null == a ? "" : String(a); };
goog.string.buildString = function (a) { return Array.prototype.join.call(arguments, ""); };
goog.string.getRandomString = function () { return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36); };
goog.string.compareVersions = goog.string.internal.compareVersions;
goog.string.hashCode = function (a) { for (var b = 0, c = 0; c < a.length; ++c)
    b = 31 * b + a.charCodeAt(c) >>> 0; return b; };
goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
goog.string.createUniqueString = function () { return "goog_" + goog.string.uniqueStringCounter_++; };
goog.string.toNumber = function (a) { var b = Number(a); return 0 == b && goog.string.isEmptyOrWhitespace(a) ? NaN : b; };
goog.string.isLowerCamelCase = function (a) { return /^[a-z]+([A-Z][a-z]*)*$/.test(a); };
goog.string.isUpperCamelCase = function (a) { return /^([A-Z][a-z]*)+$/.test(a); };
goog.string.toCamelCase = function (a) { return String(a).replace(/\-([a-z])/g, function (b, c) { return c.toUpperCase(); }); };
goog.string.toSelectorCase = function (a) { return String(a).replace(/([A-Z])/g, "-$1").toLowerCase(); };
goog.string.toTitleCase = function (a, b) { b = "string" === typeof b ? goog.string.regExpEscape(b) : "\\s"; return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (c, d, e) { return d + e.toUpperCase(); }); };
goog.string.capitalize = function (a) { return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase(); };
goog.string.parseInt = function (a) { isFinite(a) && (a = String(a)); return "string" === typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN; };
goog.string.splitLimit = function (a, b, c) { a = a.split(b); for (var d = []; 0 < c && a.length;)
    d.push(a.shift()), c--; a.length && d.push(a.join(b)); return d; };
goog.string.lastComponent = function (a, b) { if (b)
    "string" == typeof b && (b = [b]);
else
    return a; for (var c = -1, d = 0; d < b.length; d++)
    if ("" != b[d]) {
        var e = a.lastIndexOf(b[d]);
        e > c && (c = e);
    } return -1 == c ? a : a.slice(c + 1); };
goog.string.editDistance = function (a, b) { var c = [], d = []; if (a == b)
    return 0; if (!a.length || !b.length)
    return Math.max(a.length, b.length); for (var e = 0; e < b.length + 1; e++)
    c[e] = e; for (e = 0; e < a.length; e++) {
    d[0] = e + 1;
    for (var f = 0; f < b.length; f++)
        d[f + 1] = Math.min(d[f] + 1, c[f + 1] + 1, c[f] + Number(a[e] != b[f]));
    for (f = 0; f < c.length; f++)
        c[f] = d[f];
} return d[b.length]; };
goog.uri = {};
goog.uri.utils = {};
goog.uri.utils.QueryArray = {};
goog.uri.utils.QueryValue = {};
goog.uri.utils.CharCode_ = { AMPERSAND: 38, EQUAL: 61, HASH: 35, QUESTION: 63 };
goog.uri.utils.buildFromEncodedParts = function (a, b, c, d, e, f, g) { var k = ""; a && (k += a + ":"); c && (k += "//", b && (k += b + "@"), k += c, d && (k += ":" + d)); e && (k += e); f && (k += "?" + f); g && (k += "#" + g); return k; };
goog.uri.utils.splitRe_ = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
goog.uri.utils.ComponentIndex = { SCHEME: 1, USER_INFO: 2, DOMAIN: 3, PORT: 4, PATH: 5, QUERY_DATA: 6, FRAGMENT: 7 };
goog.uri.utils.urlPackageSupportLoggingHandler_ = null;
goog.uri.utils.setUrlPackageSupportLoggingHandler = function (a) { goog.uri.utils.urlPackageSupportLoggingHandler_ = a; };
goog.uri.utils.split = function (a) { var b = a.match(goog.uri.utils.splitRe_); goog.uri.utils.urlPackageSupportLoggingHandler_ && 0 <= ["http", "https", "ws", "wss", "ftp"].indexOf(b[goog.uri.utils.ComponentIndex.SCHEME]) && goog.uri.utils.urlPackageSupportLoggingHandler_(a); return b; };
goog.uri.utils.decodeIfPossible_ = function (a, b) { return a ? b ? decodeURI(a) : decodeURIComponent(a) : a; };
goog.uri.utils.getComponentByIndex_ = function (a, b) { return goog.uri.utils.split(b)[a] || null; };
goog.uri.utils.getScheme = function (a) { return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.SCHEME, a); };
goog.uri.utils.getEffectiveScheme = function (a) { a = goog.uri.utils.getScheme(a); !a && goog.global.self && goog.global.self.location && (a = goog.global.self.location.protocol, a = a.substr(0, a.length - 1)); return a ? a.toLowerCase() : ""; };
goog.uri.utils.getUserInfoEncoded = function (a) { return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.USER_INFO, a); };
goog.uri.utils.getUserInfo = function (a) { return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getUserInfoEncoded(a)); };
goog.uri.utils.getDomainEncoded = function (a) { return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.DOMAIN, a); };
goog.uri.utils.getDomain = function (a) { return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getDomainEncoded(a), !0); };
goog.uri.utils.getPort = function (a) { return Number(goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PORT, a)) || null; };
goog.uri.utils.getPathEncoded = function (a) { return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PATH, a); };
goog.uri.utils.getPath = function (a) { return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getPathEncoded(a), !0); };
goog.uri.utils.getQueryData = function (a) { return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.QUERY_DATA, a); };
goog.uri.utils.getFragmentEncoded = function (a) { var b = a.indexOf("#"); return 0 > b ? null : a.substr(b + 1); };
goog.uri.utils.setFragmentEncoded = function (a, b) { return goog.uri.utils.removeFragment(a) + (b ? "#" + b : ""); };
goog.uri.utils.getFragment = function (a) { return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getFragmentEncoded(a)); };
goog.uri.utils.getHost = function (a) { a = goog.uri.utils.split(a); return goog.uri.utils.buildFromEncodedParts(a[goog.uri.utils.ComponentIndex.SCHEME], a[goog.uri.utils.ComponentIndex.USER_INFO], a[goog.uri.utils.ComponentIndex.DOMAIN], a[goog.uri.utils.ComponentIndex.PORT]); };
goog.uri.utils.getOrigin = function (a) { a = goog.uri.utils.split(a); return goog.uri.utils.buildFromEncodedParts(a[goog.uri.utils.ComponentIndex.SCHEME], null, a[goog.uri.utils.ComponentIndex.DOMAIN], a[goog.uri.utils.ComponentIndex.PORT]); };
goog.uri.utils.getPathAndAfter = function (a) { a = goog.uri.utils.split(a); return goog.uri.utils.buildFromEncodedParts(null, null, null, null, a[goog.uri.utils.ComponentIndex.PATH], a[goog.uri.utils.ComponentIndex.QUERY_DATA], a[goog.uri.utils.ComponentIndex.FRAGMENT]); };
goog.uri.utils.removeFragment = function (a) { var b = a.indexOf("#"); return 0 > b ? a : a.substr(0, b); };
goog.uri.utils.haveSameDomain = function (a, b) { a = goog.uri.utils.split(a); b = goog.uri.utils.split(b); return a[goog.uri.utils.ComponentIndex.DOMAIN] == b[goog.uri.utils.ComponentIndex.DOMAIN] && a[goog.uri.utils.ComponentIndex.SCHEME] == b[goog.uri.utils.ComponentIndex.SCHEME] && a[goog.uri.utils.ComponentIndex.PORT] == b[goog.uri.utils.ComponentIndex.PORT]; };
goog.uri.utils.assertNoFragmentsOrQueries_ = function (a) { goog.asserts.assert(0 > a.indexOf("#") && 0 > a.indexOf("?"), "goog.uri.utils: Fragment or query identifiers are not supported: [%s]", a); };
goog.uri.utils.parseQueryData = function (a, b) { if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
        }
        else
            f = a[c];
        b(f, e ? goog.string.urlDecode(e) : "");
    }
} };
goog.uri.utils.splitQueryData_ = function (a) { var b = a.indexOf("#"); 0 > b && (b = a.length); var c = a.indexOf("?"); if (0 > c || c > b) {
    c = b;
    var d = "";
}
else
    d = a.substring(c + 1, b); return [a.substr(0, c), d, a.substr(b)]; };
goog.uri.utils.joinQueryData_ = function (a) { return a[0] + (a[1] ? "?" + a[1] : "") + a[2]; };
goog.uri.utils.appendQueryData_ = function (a, b) { return b ? a ? a + "&" + b : b : a; };
goog.uri.utils.appendQueryDataToUri_ = function (a, b) { if (!b)
    return a; a = goog.uri.utils.splitQueryData_(a); a[1] = goog.uri.utils.appendQueryData_(a[1], b); return goog.uri.utils.joinQueryData_(a); };
goog.uri.utils.appendKeyValuePairs_ = function (a, b, c) { goog.asserts.assertString(a); if (Array.isArray(b)) {
    goog.asserts.assertArray(b);
    for (var d = 0; d < b.length; d++)
        goog.uri.utils.appendKeyValuePairs_(a, String(b[d]), c);
}
else
    null != b && c.push(a + ("" === b ? "" : "=" + goog.string.urlEncode(b))); };
goog.uri.utils.buildQueryData = function (a, b) { goog.asserts.assert(0 == Math.max(a.length - (b || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length."); var c = []; for (b = b || 0; b < a.length; b += 2)
    goog.uri.utils.appendKeyValuePairs_(a[b], a[b + 1], c); return c.join("&"); };
goog.uri.utils.buildQueryDataFromMap = function (a) { var b = [], c; for (c in a)
    goog.uri.utils.appendKeyValuePairs_(c, a[c], b); return b.join("&"); };
goog.uri.utils.appendParams = function (a, b) { var c = 2 == arguments.length ? goog.uri.utils.buildQueryData(arguments[1], 0) : goog.uri.utils.buildQueryData(arguments, 1); return goog.uri.utils.appendQueryDataToUri_(a, c); };
goog.uri.utils.appendParamsFromMap = function (a, b) { b = goog.uri.utils.buildQueryDataFromMap(b); return goog.uri.utils.appendQueryDataToUri_(a, b); };
goog.uri.utils.appendParam = function (a, b, c) { c = null != c ? "=" + goog.string.urlEncode(c) : ""; return goog.uri.utils.appendQueryDataToUri_(a, b + c); };
goog.uri.utils.findParam_ = function (a, b, c, d) { for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
    var f = a.charCodeAt(b - 1);
    if (f == goog.uri.utils.CharCode_.AMPERSAND || f == goog.uri.utils.CharCode_.QUESTION)
        if (f = a.charCodeAt(b + e), !f || f == goog.uri.utils.CharCode_.EQUAL || f == goog.uri.utils.CharCode_.AMPERSAND || f == goog.uri.utils.CharCode_.HASH)
            return b;
    b += e + 1;
} return -1; };
goog.uri.utils.hashOrEndRe_ = /#|$/;
goog.uri.utils.hasParam = function (a, b) { return 0 <= goog.uri.utils.findParam_(a, 0, b, a.search(goog.uri.utils.hashOrEndRe_)); };
goog.uri.utils.getParamValue = function (a, b) { var c = a.search(goog.uri.utils.hashOrEndRe_), d = goog.uri.utils.findParam_(a, 0, b, c); if (0 > d)
    return null; var e = a.indexOf("&", d); if (0 > e || e > c)
    e = c; d += b.length + 1; return goog.string.urlDecode(a.substr(d, e - d)); };
goog.uri.utils.getParamValues = function (a, b) { for (var c = a.search(goog.uri.utils.hashOrEndRe_), d = 0, e, f = []; 0 <= (e = goog.uri.utils.findParam_(a, d, b, c));) {
    d = a.indexOf("&", e);
    if (0 > d || d > c)
        d = c;
    e += b.length + 1;
    f.push(goog.string.urlDecode(a.substr(e, d - e)));
} return f; };
goog.uri.utils.trailingQueryPunctuationRe_ = /[?&]($|#)/;
goog.uri.utils.removeParam = function (a, b) { for (var c = a.search(goog.uri.utils.hashOrEndRe_), d = 0, e, f = []; 0 <= (e = goog.uri.utils.findParam_(a, d, b, c));)
    f.push(a.substring(d, e)), d = Math.min(a.indexOf("&", e) + 1 || c, c); f.push(a.substr(d)); return f.join("").replace(goog.uri.utils.trailingQueryPunctuationRe_, "$1"); };
goog.uri.utils.setParam = function (a, b, c) { return goog.uri.utils.appendParam(goog.uri.utils.removeParam(a, b), b, c); };
goog.uri.utils.setParamsFromMap = function (a, b) { a = goog.uri.utils.splitQueryData_(a); var c = a[1], d = []; c && c.split("&").forEach(function (e) { var f = e.indexOf("="); b.hasOwnProperty(0 <= f ? e.substr(0, f) : e) || d.push(e); }); a[1] = goog.uri.utils.appendQueryData_(d.join("&"), goog.uri.utils.buildQueryDataFromMap(b)); return goog.uri.utils.joinQueryData_(a); };
goog.uri.utils.appendPath = function (a, b) { goog.uri.utils.assertNoFragmentsOrQueries_(a); goog.string.endsWith(a, "/") && (a = a.substr(0, a.length - 1)); goog.string.startsWith(b, "/") && (b = b.substr(1)); return "" + a + "/" + b; };
goog.uri.utils.setPath = function (a, b) { goog.string.startsWith(b, "/") || (b = "/" + b); a = goog.uri.utils.split(a); return goog.uri.utils.buildFromEncodedParts(a[goog.uri.utils.ComponentIndex.SCHEME], a[goog.uri.utils.ComponentIndex.USER_INFO], a[goog.uri.utils.ComponentIndex.DOMAIN], a[goog.uri.utils.ComponentIndex.PORT], b, a[goog.uri.utils.ComponentIndex.QUERY_DATA], a[goog.uri.utils.ComponentIndex.FRAGMENT]); };
goog.uri.utils.StandardQueryParam = { RANDOM: "zx" };
goog.uri.utils.makeUnique = function (a) { return goog.uri.utils.setParam(a, goog.uri.utils.StandardQueryParam.RANDOM, goog.string.getRandomString()); };
proto.tflite = {};
proto.tflite.proto = {};
proto.tflite.proto.BenchmarkStoragePaths = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.proto.BenchmarkStoragePaths, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.proto.BenchmarkStoragePaths.prototype.getStorageFilePath = function () { return this.internal_getStringFieldWithDefault(1); };
proto.tflite.proto.BenchmarkStoragePaths.prototype.setStorageFilePath = function (a) { return this.internal_setField(1, a); };
proto.tflite.proto.BenchmarkStoragePaths.prototype.clearStorageFilePath = function () { return this.internal_clearField(1); };
proto.tflite.proto.BenchmarkStoragePaths.prototype.hasStorageFilePath = function () { return this.internal_hasField(1); };
proto.tflite.proto.BenchmarkStoragePaths.prototype.getDataDirectoryPath = function () { return this.internal_getStringFieldWithDefault(2); };
proto.tflite.proto.BenchmarkStoragePaths.prototype.setDataDirectoryPath = function (a) { return this.internal_setField(2, a); };
proto.tflite.proto.BenchmarkStoragePaths.prototype.clearDataDirectoryPath = function () { return this.internal_clearField(2); };
proto.tflite.proto.BenchmarkStoragePaths.prototype.hasDataDirectoryPath = function () { return this.internal_hasField(2); };
proto.tflite.proto.BenchmarkStoragePaths.internalDoNotUse$proto$tflite$proto$BenchmarkStoragePaths$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readString, 2: jspb.internal.binary.readString }; };
proto.tflite.proto.BenchmarkStoragePaths.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.proto.BenchmarkStoragePaths.serializeBinaryToWriter); };
proto.tflite.proto.BenchmarkStoragePaths.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeString(b, a, 1); jspb.internal.binary.writeString(b, a, 2); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.proto.BenchmarkStoragePaths.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.proto.BenchmarkStoragePaths, proto.tflite.proto.BenchmarkStoragePaths.internalDoNotUse$proto$tflite$proto$BenchmarkStoragePaths$getBinaryFieldsObject); };
proto.tflite.proto.BenchmarkStoragePaths.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.proto.BenchmarkStoragePaths.internalDoNotUse$proto$tflite$proto$BenchmarkStoragePaths$getBinaryFieldsObject); };
proto.tflite.proto.BenchmarkStoragePaths.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.proto.BenchmarkStoragePaths, a); };
proto.tflite.proto.BenchmarkStoragePaths.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.proto.BenchmarkStoragePaths.fromObject = function (a) { var b = new proto.tflite.proto.BenchmarkStoragePaths; null != a.storageFilePath && b.internal_setField(1, a.storageFilePath); null != a.dataDirectoryPath && b.internal_setField(2, a.dataDirectoryPath); return b; });
proto.tflite.proto.BenchmarkStoragePaths.prototype.toObject = function (a) { return proto.tflite.proto.BenchmarkStoragePaths.internal_toObject(a, this); };
proto.tflite.proto.BenchmarkStoragePaths.internal_toObject = function (a, b) { if (null != b) {
    var c = { storageFilePath: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), dataDirectoryPath: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.proto.CPUSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.proto.CPUSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.proto.CPUSettings.prototype.getNumThreads = function () { return this.internal_getIntegerFieldWithDefault(1, -1); };
proto.tflite.proto.CPUSettings.prototype.setNumThreads = function (a) { return this.internal_setField(1, a); };
proto.tflite.proto.CPUSettings.prototype.clearNumThreads = function () { return this.internal_clearField(1); };
proto.tflite.proto.CPUSettings.prototype.hasNumThreads = function () { return this.internal_hasField(1); };
proto.tflite.proto.CPUSettings.internalDoNotUse$proto$tflite$proto$CPUSettings$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readInt32 }; };
proto.tflite.proto.CPUSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.proto.CPUSettings.serializeBinaryToWriter); };
proto.tflite.proto.CPUSettings.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeInt32(b, a, 1); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.proto.CPUSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.proto.CPUSettings, proto.tflite.proto.CPUSettings.internalDoNotUse$proto$tflite$proto$CPUSettings$getBinaryFieldsObject); };
proto.tflite.proto.CPUSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.proto.CPUSettings.internalDoNotUse$proto$tflite$proto$CPUSettings$getBinaryFieldsObject); };
proto.tflite.proto.CPUSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.proto.CPUSettings, a); };
proto.tflite.proto.CPUSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.proto.CPUSettings.fromObject = function (a) { var b = new proto.tflite.proto.CPUSettings; null != a.numThreads && b.internal_setField(1, a.numThreads); return b; });
proto.tflite.proto.CPUSettings.prototype.toObject = function (a) { return proto.tflite.proto.CPUSettings.internal_toObject(a, this); };
proto.tflite.proto.CPUSettings.internal_toObject = function (a, b) { if (null != b) {
    var c = { numThreads: b.internal_getIntegerFieldWithDefault(1, -1) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.proto.ModelFile = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.proto.ModelFile, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.proto.ModelFile.prototype.getFilename = function () { return this.internal_getStringFieldWithDefault(1); };
proto.tflite.proto.ModelFile.prototype.setFilename = function (a) { return this.internal_setField(1, a); };
proto.tflite.proto.ModelFile.prototype.clearFilename = function () { return this.internal_clearField(1); };
proto.tflite.proto.ModelFile.prototype.hasFilename = function () { return this.internal_hasField(1); };
proto.tflite.proto.ModelFile.prototype.getFd = function () { return this.internal_getIntegerFieldWithDefault(2); };
proto.tflite.proto.ModelFile.prototype.setFd = function (a) { return this.internal_setField(2, a); };
proto.tflite.proto.ModelFile.prototype.clearFd = function () { return this.internal_clearField(2); };
proto.tflite.proto.ModelFile.prototype.hasFd = function () { return this.internal_hasField(2); };
proto.tflite.proto.ModelFile.prototype.getOffset = function () { return this.internal_getIntegerFieldWithDefault(3); };
proto.tflite.proto.ModelFile.prototype.setOffset = function (a) { return this.internal_setField(3, a); };
proto.tflite.proto.ModelFile.prototype.clearOffset = function () { return this.internal_clearField(3); };
proto.tflite.proto.ModelFile.prototype.hasOffset = function () { return this.internal_hasField(3); };
proto.tflite.proto.ModelFile.prototype.getLength = function () { return this.internal_getIntegerFieldWithDefault(4); };
proto.tflite.proto.ModelFile.prototype.setLength = function (a) { return this.internal_setField(4, a); };
proto.tflite.proto.ModelFile.prototype.clearLength = function () { return this.internal_clearField(4); };
proto.tflite.proto.ModelFile.prototype.hasLength = function () { return this.internal_hasField(4); };
proto.tflite.proto.ModelFile.internalDoNotUse$proto$tflite$proto$ModelFile$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readString, 2: jspb.internal.binary.readInt64, 3: jspb.internal.binary.readInt64, 4: jspb.internal.binary.readInt64 }; };
proto.tflite.proto.ModelFile.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.proto.ModelFile.serializeBinaryToWriter); };
proto.tflite.proto.ModelFile.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeString(b, a, 1); jspb.internal.binary.writeInt64(b, a, 2); jspb.internal.binary.writeInt64(b, a, 3); jspb.internal.binary.writeInt64(b, a, 4); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.proto.ModelFile.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.proto.ModelFile, proto.tflite.proto.ModelFile.internalDoNotUse$proto$tflite$proto$ModelFile$getBinaryFieldsObject); };
proto.tflite.proto.ModelFile.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.proto.ModelFile.internalDoNotUse$proto$tflite$proto$ModelFile$getBinaryFieldsObject); };
proto.tflite.proto.ModelFile.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.proto.ModelFile, a); };
proto.tflite.proto.ModelFile.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.proto.ModelFile.fromObject = function (a) { var b = new proto.tflite.proto.ModelFile; null != a.filename && b.internal_setField(1, a.filename); null != a.fd && b.internal_setField(2, a.fd); null != a.offset && b.internal_setField(3, a.offset); null != a.length && b.internal_setField(4, a.length); return b; });
proto.tflite.proto.ModelFile.prototype.toObject = function (a) { return proto.tflite.proto.ModelFile.internal_toObject(a, this); };
proto.tflite.proto.ModelFile.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { filename: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), fd: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)), offset: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(3)), length: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(4)) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.tflite.proto.CoralSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.proto.CoralSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.proto.CoralSettings.prototype.getDevice = function () { return this.internal_getStringFieldWithDefault(1); };
proto.tflite.proto.CoralSettings.prototype.setDevice = function (a) { return this.internal_setField(1, a); };
proto.tflite.proto.CoralSettings.prototype.clearDevice = function () { return this.internal_clearField(1); };
proto.tflite.proto.CoralSettings.prototype.hasDevice = function () { return this.internal_hasField(1); };
proto.tflite.proto.CoralSettings.prototype.getPerformance = function () { return this.internal_getFieldWithDefault(2, 1); };
proto.tflite.proto.CoralSettings.prototype.setPerformance = function (a) { return this.internal_setField(2, a); };
proto.tflite.proto.CoralSettings.prototype.clearPerformance = function () { return this.internal_clearField(2); };
proto.tflite.proto.CoralSettings.prototype.hasPerformance = function () { return this.internal_hasField(2); };
proto.tflite.proto.CoralSettings.prototype.getUsbAlwaysDfu = function () { return this.internal_getBooleanFieldWithDefault(3); };
proto.tflite.proto.CoralSettings.prototype.setUsbAlwaysDfu = function (a) { return this.internal_setField(3, a); };
proto.tflite.proto.CoralSettings.prototype.clearUsbAlwaysDfu = function () { return this.internal_clearField(3); };
proto.tflite.proto.CoralSettings.prototype.hasUsbAlwaysDfu = function () { return this.internal_hasField(3); };
proto.tflite.proto.CoralSettings.prototype.getUsbMaxBulkInQueueLength = function () { return this.internal_getIntegerFieldWithDefault(4); };
proto.tflite.proto.CoralSettings.prototype.setUsbMaxBulkInQueueLength = function (a) { return this.internal_setField(4, a); };
proto.tflite.proto.CoralSettings.prototype.clearUsbMaxBulkInQueueLength = function () { return this.internal_clearField(4); };
proto.tflite.proto.CoralSettings.prototype.hasUsbMaxBulkInQueueLength = function () { return this.internal_hasField(4); };
proto.tflite.proto.CoralSettings.internalDoNotUse$proto$tflite$proto$CoralSettings$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readString, 2: jspb.internal.binary.readEnum, 3: jspb.internal.binary.readBool, 4: jspb.internal.binary.readInt32 }; };
proto.tflite.proto.CoralSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.proto.CoralSettings.serializeBinaryToWriter); };
proto.tflite.proto.CoralSettings.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeString(b, a, 1); jspb.internal.binary.writeEnum(b, a, 2); jspb.internal.binary.writeBool(b, a, 3); jspb.internal.binary.writeInt32(b, a, 4); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.proto.CoralSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.proto.CoralSettings, proto.tflite.proto.CoralSettings.internalDoNotUse$proto$tflite$proto$CoralSettings$getBinaryFieldsObject); };
proto.tflite.proto.CoralSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.proto.CoralSettings.internalDoNotUse$proto$tflite$proto$CoralSettings$getBinaryFieldsObject); };
proto.tflite.proto.CoralSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.proto.CoralSettings, a); };
proto.tflite.proto.CoralSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.proto.CoralSettings.fromObject = function (a) { var b = new proto.tflite.proto.CoralSettings; null != a.device && b.internal_setField(1, a.device); null != a.performance && b.internal_setField(2, a.performance); null != a.usbAlwaysDfu && b.internal_setField(3, a.usbAlwaysDfu); null != a.usbMaxBulkInQueueLength && b.internal_setField(4, a.usbMaxBulkInQueueLength); return b; });
proto.tflite.proto.CoralSettings.prototype.toObject = function (a) { return proto.tflite.proto.CoralSettings.internal_toObject(a, this); };
proto.tflite.proto.CoralSettings.internal_toObject = function (a, b) { if (null != b) {
    var c = { device: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), performance: b.internal_getFieldWithDefault(2, 1), usbAlwaysDfu: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(3)), usbMaxBulkInQueueLength: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(4)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.proto.CoralSettings.Performance = { UNDEFINED: 0, MAXIMUM: 1, HIGH: 2, MEDIUM: 3, LOW: 4 };
proto.tflite.proto.EdgeTpuDeviceSpec = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a, -1, proto.tflite.proto.EdgeTpuDeviceSpec.repeatedFields_); };
$jscomp.inherits(proto.tflite.proto.EdgeTpuDeviceSpec, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.getPlatformType = function () { return this.internal_getFieldWithDefault(1, 0); };
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.setPlatformType = function (a) { return this.internal_setField(1, a); };
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.clearPlatformType = function () { return this.internal_clearField(1); };
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.hasPlatformType = function () { return this.internal_hasField(1); };
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.getNumChips = function () { return this.internal_getIntegerFieldWithDefault(2); };
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.setNumChips = function (a) { return this.internal_setField(2, a); };
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.clearNumChips = function () { return this.internal_clearField(2); };
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.hasNumChips = function () { return this.internal_hasField(2); };
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.getDevicePathsList = function () { return this.internal_getRepeatedField(3); };
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.setDevicePathsList = function (a) { return this.internal_setRepeatedField(3, a); };
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.addDevicePaths = function (a, b) { return this.internal_addToRepeatedField(3, a, b); };
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.clearDevicePathsList = function () { return this.internal_clearRepeatedField(3); };
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.getChipFamily = function () { return this.internal_getIntegerFieldWithDefault(4); };
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.setChipFamily = function (a) { return this.internal_setField(4, a); };
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.clearChipFamily = function () { return this.internal_clearField(4); };
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.hasChipFamily = function () { return this.internal_hasField(4); };
proto.tflite.proto.EdgeTpuDeviceSpec.internalDoNotUse$proto$tflite$proto$EdgeTpuDeviceSpec$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readEnum, 2: jspb.internal.binary.readInt32, 3: jspb.internal.binary.readRepeatedString, 4: jspb.internal.binary.readInt32 }; };
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.proto.EdgeTpuDeviceSpec.serializeBinaryToWriter); };
proto.tflite.proto.EdgeTpuDeviceSpec.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeEnum(b, a, 1); jspb.internal.binary.writeInt32(b, a, 2); jspb.internal.binary.writeRepeatedString(b, a, 3); jspb.internal.binary.writeInt32(b, a, 4); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.proto.EdgeTpuDeviceSpec.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.proto.EdgeTpuDeviceSpec, proto.tflite.proto.EdgeTpuDeviceSpec.internalDoNotUse$proto$tflite$proto$EdgeTpuDeviceSpec$getBinaryFieldsObject); };
proto.tflite.proto.EdgeTpuDeviceSpec.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.proto.EdgeTpuDeviceSpec.internalDoNotUse$proto$tflite$proto$EdgeTpuDeviceSpec$getBinaryFieldsObject); };
proto.tflite.proto.EdgeTpuDeviceSpec.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.proto.EdgeTpuDeviceSpec, a); };
proto.tflite.proto.EdgeTpuDeviceSpec.repeatedFields_ = [3];
proto.tflite.proto.EdgeTpuDeviceSpec.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.proto.EdgeTpuDeviceSpec.fromObject = function (a) { var b = new proto.tflite.proto.EdgeTpuDeviceSpec; null != a.platformType && b.internal_setField(1, a.platformType); null != a.numChips && b.internal_setField(2, a.numChips); null != a.devicePathsList && b.internal_setRepeatedField(3, a.devicePathsList); null != a.chipFamily && b.internal_setField(4, a.chipFamily); return b; });
proto.tflite.proto.EdgeTpuDeviceSpec.prototype.toObject = function (a) { return proto.tflite.proto.EdgeTpuDeviceSpec.internal_toObject(a, this); };
proto.tflite.proto.EdgeTpuDeviceSpec.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { platformType: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), numChips: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)), devicePathsList: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getRepeatedField(3)), chipFamily: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(4)) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.tflite.proto.EdgeTpuDeviceSpec.PlatformType = { MMIO: 0, REFERENCE: 1, SIMULATOR: 2, REMOTE_SIMULATOR: 3 };
proto.tflite.proto.EdgeTpuInactivePowerConfig = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.proto.EdgeTpuInactivePowerConfig, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.proto.EdgeTpuInactivePowerConfig.prototype.getInactivePowerState = function () { return this.internal_getFieldWithDefault(1, 0); };
proto.tflite.proto.EdgeTpuInactivePowerConfig.prototype.setInactivePowerState = function (a) { return this.internal_setField(1, a); };
proto.tflite.proto.EdgeTpuInactivePowerConfig.prototype.clearInactivePowerState = function () { return this.internal_clearField(1); };
proto.tflite.proto.EdgeTpuInactivePowerConfig.prototype.hasInactivePowerState = function () { return this.internal_hasField(1); };
proto.tflite.proto.EdgeTpuInactivePowerConfig.prototype.getInactiveTimeoutUs = function () { return this.internal_getIntegerFieldWithDefault(2); };
proto.tflite.proto.EdgeTpuInactivePowerConfig.prototype.setInactiveTimeoutUs = function (a) { return this.internal_setField(2, a); };
proto.tflite.proto.EdgeTpuInactivePowerConfig.prototype.clearInactiveTimeoutUs = function () { return this.internal_clearField(2); };
proto.tflite.proto.EdgeTpuInactivePowerConfig.prototype.hasInactiveTimeoutUs = function () { return this.internal_hasField(2); };
proto.tflite.proto.EdgeTpuInactivePowerConfig.internalDoNotUse$proto$tflite$proto$EdgeTpuInactivePowerConfig$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readEnum, 2: jspb.internal.binary.readInt64 }; };
proto.tflite.proto.EdgeTpuInactivePowerConfig.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.proto.EdgeTpuInactivePowerConfig.serializeBinaryToWriter); };
proto.tflite.proto.EdgeTpuInactivePowerConfig.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeEnum(b, a, 1); jspb.internal.binary.writeInt64(b, a, 2); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.proto.EdgeTpuInactivePowerConfig.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.proto.EdgeTpuInactivePowerConfig, proto.tflite.proto.EdgeTpuInactivePowerConfig.internalDoNotUse$proto$tflite$proto$EdgeTpuInactivePowerConfig$getBinaryFieldsObject); };
proto.tflite.proto.EdgeTpuInactivePowerConfig.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.proto.EdgeTpuInactivePowerConfig.internalDoNotUse$proto$tflite$proto$EdgeTpuInactivePowerConfig$getBinaryFieldsObject); };
proto.tflite.proto.EdgeTpuInactivePowerConfig.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.proto.EdgeTpuInactivePowerConfig, a); };
proto.tflite.proto.EdgeTpuInactivePowerConfig.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.proto.EdgeTpuInactivePowerConfig.fromObject = function (a) { var b = new proto.tflite.proto.EdgeTpuInactivePowerConfig; null != a.inactivePowerState && b.internal_setField(1, a.inactivePowerState); null != a.inactiveTimeoutUs && b.internal_setField(2, a.inactiveTimeoutUs); return b; });
proto.tflite.proto.EdgeTpuInactivePowerConfig.prototype.toObject = function (a) { return proto.tflite.proto.EdgeTpuInactivePowerConfig.internal_toObject(a, this); };
proto.tflite.proto.EdgeTpuInactivePowerConfig.internal_toObject = function (a, b) { if (null != b) {
    var c = { inactivePowerState: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), inactiveTimeoutUs: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.proto.EdgeTpuSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a, -1, proto.tflite.proto.EdgeTpuSettings.repeatedFields_); };
$jscomp.inherits(proto.tflite.proto.EdgeTpuSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.proto.EdgeTpuSettings.prototype.getInferencePowerState = function () { return this.internal_getFieldWithDefault(1, 0); };
proto.tflite.proto.EdgeTpuSettings.prototype.setInferencePowerState = function (a) { return this.internal_setField(1, a); };
proto.tflite.proto.EdgeTpuSettings.prototype.clearInferencePowerState = function () { return this.internal_clearField(1); };
proto.tflite.proto.EdgeTpuSettings.prototype.hasInferencePowerState = function () { return this.internal_hasField(1); };
proto.tflite.proto.EdgeTpuSettings.prototype.getInactivePowerConfigsList = function () { return this.internal_getRepeatedWrapperField(proto.tflite.proto.EdgeTpuInactivePowerConfig, 2); };
proto.tflite.proto.EdgeTpuSettings.prototype.setInactivePowerConfigsList = function (a) { return this.internal_setRepeatedWrapperField(2, a); };
proto.tflite.proto.EdgeTpuSettings.prototype.addInactivePowerConfigs = function (a, b) { return this.internal_addToRepeatedWrapperField(2, a, proto.tflite.proto.EdgeTpuInactivePowerConfig, b); };
proto.tflite.proto.EdgeTpuSettings.prototype.addAndReturnInactivePowerConfigs = function (a, b) { return this.internal_addAndReturnRepeatedWrapperField(2, a, proto.tflite.proto.EdgeTpuInactivePowerConfig, b); };
proto.tflite.proto.EdgeTpuSettings.prototype.clearInactivePowerConfigsList = function () { return this.internal_clearRepeatedWrapperField(2); };
proto.tflite.proto.EdgeTpuSettings.prototype.getInferencePriority = function () { return this.internal_getIntegerFieldWithDefault(3, -1); };
proto.tflite.proto.EdgeTpuSettings.prototype.setInferencePriority = function (a) { return this.internal_setField(3, a); };
proto.tflite.proto.EdgeTpuSettings.prototype.clearInferencePriority = function () { return this.internal_clearField(3); };
proto.tflite.proto.EdgeTpuSettings.prototype.hasInferencePriority = function () { return this.internal_hasField(3); };
proto.tflite.proto.EdgeTpuSettings.prototype.getEdgetpuDeviceSpec = function () { return this.internal_getWrapperField(proto.tflite.proto.EdgeTpuDeviceSpec, 4); };
proto.tflite.proto.EdgeTpuSettings.prototype.setEdgetpuDeviceSpec = function (a) { return this.internal_setWrapperField(4, a); };
proto.tflite.proto.EdgeTpuSettings.prototype.clearEdgetpuDeviceSpec = function () { return this.internal_clearWrapperField(4); };
proto.tflite.proto.EdgeTpuSettings.prototype.hasEdgetpuDeviceSpec = function () { return this.internal_hasField(4); };
proto.tflite.proto.EdgeTpuSettings.prototype.getModelToken = function () { return this.internal_getStringFieldWithDefault(5); };
proto.tflite.proto.EdgeTpuSettings.prototype.setModelToken = function (a) { return this.internal_setField(5, a); };
proto.tflite.proto.EdgeTpuSettings.prototype.clearModelToken = function () { return this.internal_clearField(5); };
proto.tflite.proto.EdgeTpuSettings.prototype.hasModelToken = function () { return this.internal_hasField(5); };
proto.tflite.proto.EdgeTpuSettings.prototype.getFloatTruncationType = function () { return this.internal_getFieldWithDefault(6, 0); };
proto.tflite.proto.EdgeTpuSettings.prototype.setFloatTruncationType = function (a) { return this.internal_setField(6, a); };
proto.tflite.proto.EdgeTpuSettings.prototype.clearFloatTruncationType = function () { return this.internal_clearField(6); };
proto.tflite.proto.EdgeTpuSettings.prototype.hasFloatTruncationType = function () { return this.internal_hasField(6); };
proto.tflite.proto.EdgeTpuSettings.internalDoNotUse$proto$tflite$proto$EdgeTpuSettings$getBinaryFieldsObject = function () {
    return { 1: jspb.internal.binary.readEnum, 2: [jspb.internal.binary.readRepeatedMessage, proto.tflite.proto.EdgeTpuInactivePowerConfig, proto.tflite.proto.EdgeTpuInactivePowerConfig.internalDoNotUse$proto$tflite$proto$EdgeTpuInactivePowerConfig$getBinaryFieldsObject], 3: jspb.internal.binary.readInt32, 4: [jspb.internal.binary.readMessage, proto.tflite.proto.EdgeTpuDeviceSpec, proto.tflite.proto.EdgeTpuDeviceSpec.internalDoNotUse$proto$tflite$proto$EdgeTpuDeviceSpec$getBinaryFieldsObject],
        5: jspb.internal.binary.readString, 6: jspb.internal.binary.readEnum };
};
proto.tflite.proto.EdgeTpuSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.proto.EdgeTpuSettings.serializeBinaryToWriter); };
proto.tflite.proto.EdgeTpuSettings.serializeBinaryToWriter = function (a, b) {
    jspb.internal.binary.writeEnum(b, a, 1);
    jspb.internal.binary.writeRepeatedMessage(b, a, 2, proto.tflite.proto.EdgeTpuInactivePowerConfig, proto.tflite.proto.EdgeTpuInactivePowerConfig.serializeBinaryToWriter);
    jspb.internal.binary.writeInt32(b, a, 3);
    jspb.internal.binary.writeMessage(b, a, 4, proto.tflite.proto.EdgeTpuDeviceSpec, proto.tflite.proto.EdgeTpuDeviceSpec.serializeBinaryToWriter);
    jspb.internal.binary.writeString(b, a, 5);
    jspb.internal.binary.writeEnum(b, a, 6);
    jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b);
};
proto.tflite.proto.EdgeTpuSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.proto.EdgeTpuSettings, proto.tflite.proto.EdgeTpuSettings.internalDoNotUse$proto$tflite$proto$EdgeTpuSettings$getBinaryFieldsObject); };
proto.tflite.proto.EdgeTpuSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.proto.EdgeTpuSettings.internalDoNotUse$proto$tflite$proto$EdgeTpuSettings$getBinaryFieldsObject); };
proto.tflite.proto.EdgeTpuSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.proto.EdgeTpuSettings, a); };
proto.tflite.proto.EdgeTpuSettings.repeatedFields_ = [2];
proto.tflite.proto.EdgeTpuSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.proto.EdgeTpuSettings.fromObject = function (a) {
    var b = new proto.tflite.proto.EdgeTpuSettings;
    null != a.inferencePowerState && b.internal_setField(1, a.inferencePowerState);
    a.inactivePowerConfigsList && b.internal_setRepeatedWrapperField(2, a.inactivePowerConfigsList.map(proto.tflite.proto.EdgeTpuInactivePowerConfig.fromObject));
    null != a.inferencePriority && b.internal_setField(3, a.inferencePriority);
    a.edgetpuDeviceSpec && b.internal_setWrapperField(4, proto.tflite.proto.EdgeTpuDeviceSpec.fromObject(a.edgetpuDeviceSpec));
    null != a.modelToken && b.internal_setField(5, a.modelToken);
    null != a.floatTruncationType && b.internal_setField(6, a.floatTruncationType);
    return b;
});
proto.tflite.proto.EdgeTpuSettings.prototype.toObject = function (a) { return proto.tflite.proto.EdgeTpuSettings.internal_toObject(a, this); };
proto.tflite.proto.EdgeTpuSettings.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { inferencePowerState: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), inactivePowerConfigsList: module$contents$jspb$internal$public_for_gencode_toObjectList(b.getInactivePowerConfigsList(), proto.tflite.proto.EdgeTpuInactivePowerConfig.internal_toObject, a), inferencePriority: b.internal_getIntegerFieldWithDefault(3, -1), edgetpuDeviceSpec: proto.tflite.proto.EdgeTpuDeviceSpec.internal_toObject(a, b.getEdgetpuDeviceSpec()), modelToken: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(5)), floatTruncationType: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(6)) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.tflite.proto.EdgeTpuSettings.FloatTruncationType = { UNSPECIFIED: 0, NO_TRUNCATION: 1, BFLOAT16: 2, HALF: 3 };
proto.tflite.proto.FallbackSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.proto.FallbackSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.proto.FallbackSettings.prototype.getAllowAutomaticFallbackOnCompilationError = function () { return this.internal_getBooleanFieldWithDefault(7); };
proto.tflite.proto.FallbackSettings.prototype.setAllowAutomaticFallbackOnCompilationError = function (a) { return this.internal_setField(7, a); };
proto.tflite.proto.FallbackSettings.prototype.clearAllowAutomaticFallbackOnCompilationError = function () { return this.internal_clearField(7); };
proto.tflite.proto.FallbackSettings.prototype.hasAllowAutomaticFallbackOnCompilationError = function () { return this.internal_hasField(7); };
proto.tflite.proto.FallbackSettings.prototype.getAllowAutomaticFallbackOnExecutionError = function () { return this.internal_getBooleanFieldWithDefault(8); };
proto.tflite.proto.FallbackSettings.prototype.setAllowAutomaticFallbackOnExecutionError = function (a) { return this.internal_setField(8, a); };
proto.tflite.proto.FallbackSettings.prototype.clearAllowAutomaticFallbackOnExecutionError = function () { return this.internal_clearField(8); };
proto.tflite.proto.FallbackSettings.prototype.hasAllowAutomaticFallbackOnExecutionError = function () { return this.internal_hasField(8); };
proto.tflite.proto.FallbackSettings.internalDoNotUse$proto$tflite$proto$FallbackSettings$getBinaryFieldsObject = function () { return { 7: jspb.internal.binary.readBool, 8: jspb.internal.binary.readBool }; };
proto.tflite.proto.FallbackSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.proto.FallbackSettings.serializeBinaryToWriter); };
proto.tflite.proto.FallbackSettings.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeBool(b, a, 7); jspb.internal.binary.writeBool(b, a, 8); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.proto.FallbackSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.proto.FallbackSettings, proto.tflite.proto.FallbackSettings.internalDoNotUse$proto$tflite$proto$FallbackSettings$getBinaryFieldsObject); };
proto.tflite.proto.FallbackSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.proto.FallbackSettings.internalDoNotUse$proto$tflite$proto$FallbackSettings$getBinaryFieldsObject); };
proto.tflite.proto.FallbackSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.proto.FallbackSettings, a); };
proto.tflite.proto.FallbackSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.proto.FallbackSettings.fromObject = function (a) { var b = new proto.tflite.proto.FallbackSettings; null != a.allowAutomaticFallbackOnCompilationError && b.internal_setField(7, a.allowAutomaticFallbackOnCompilationError); null != a.allowAutomaticFallbackOnExecutionError && b.internal_setField(8, a.allowAutomaticFallbackOnExecutionError); return b; });
proto.tflite.proto.FallbackSettings.prototype.toObject = function (a) { return proto.tflite.proto.FallbackSettings.internal_toObject(a, this); };
proto.tflite.proto.FallbackSettings.internal_toObject = function (a, b) { if (null != b) {
    var c = { allowAutomaticFallbackOnCompilationError: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(7)), allowAutomaticFallbackOnExecutionError: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(8)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.proto.GPUSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.proto.GPUSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.proto.GPUSettings.prototype.getIsPrecisionLossAllowed = function () { return this.internal_getBooleanFieldWithDefault(1); };
proto.tflite.proto.GPUSettings.prototype.setIsPrecisionLossAllowed = function (a) { return this.internal_setField(1, a); };
proto.tflite.proto.GPUSettings.prototype.clearIsPrecisionLossAllowed = function () { return this.internal_clearField(1); };
proto.tflite.proto.GPUSettings.prototype.hasIsPrecisionLossAllowed = function () { return this.internal_hasField(1); };
proto.tflite.proto.GPUSettings.prototype.getEnableQuantizedInference = function () { return this.internal_getBooleanFieldWithDefault(2, !0); };
proto.tflite.proto.GPUSettings.prototype.setEnableQuantizedInference = function (a) { return this.internal_setField(2, a); };
proto.tflite.proto.GPUSettings.prototype.clearEnableQuantizedInference = function () { return this.internal_clearField(2); };
proto.tflite.proto.GPUSettings.prototype.hasEnableQuantizedInference = function () { return this.internal_hasField(2); };
proto.tflite.proto.GPUSettings.prototype.getForceBackend = function () { return this.internal_getFieldWithDefault(3, 0); };
proto.tflite.proto.GPUSettings.prototype.setForceBackend = function (a) { return this.internal_setField(3, a); };
proto.tflite.proto.GPUSettings.prototype.clearForceBackend = function () { return this.internal_clearField(3); };
proto.tflite.proto.GPUSettings.prototype.hasForceBackend = function () { return this.internal_hasField(3); };
proto.tflite.proto.GPUSettings.prototype.getInferencePriority1 = function () { return this.internal_getFieldWithDefault(4, 0); };
proto.tflite.proto.GPUSettings.prototype.setInferencePriority1 = function (a) { return this.internal_setField(4, a); };
proto.tflite.proto.GPUSettings.prototype.clearInferencePriority1 = function () { return this.internal_clearField(4); };
proto.tflite.proto.GPUSettings.prototype.hasInferencePriority1 = function () { return this.internal_hasField(4); };
proto.tflite.proto.GPUSettings.prototype.getInferencePriority2 = function () { return this.internal_getFieldWithDefault(5, 0); };
proto.tflite.proto.GPUSettings.prototype.setInferencePriority2 = function (a) { return this.internal_setField(5, a); };
proto.tflite.proto.GPUSettings.prototype.clearInferencePriority2 = function () { return this.internal_clearField(5); };
proto.tflite.proto.GPUSettings.prototype.hasInferencePriority2 = function () { return this.internal_hasField(5); };
proto.tflite.proto.GPUSettings.prototype.getInferencePriority3 = function () { return this.internal_getFieldWithDefault(6, 0); };
proto.tflite.proto.GPUSettings.prototype.setInferencePriority3 = function (a) { return this.internal_setField(6, a); };
proto.tflite.proto.GPUSettings.prototype.clearInferencePriority3 = function () { return this.internal_clearField(6); };
proto.tflite.proto.GPUSettings.prototype.hasInferencePriority3 = function () { return this.internal_hasField(6); };
proto.tflite.proto.GPUSettings.prototype.getInferencePreference = function () { return this.internal_getFieldWithDefault(7, 0); };
proto.tflite.proto.GPUSettings.prototype.setInferencePreference = function (a) { return this.internal_setField(7, a); };
proto.tflite.proto.GPUSettings.prototype.clearInferencePreference = function () { return this.internal_clearField(7); };
proto.tflite.proto.GPUSettings.prototype.hasInferencePreference = function () { return this.internal_hasField(7); };
proto.tflite.proto.GPUSettings.prototype.getCacheDirectory = function () { return this.internal_getStringFieldWithDefault(8); };
proto.tflite.proto.GPUSettings.prototype.setCacheDirectory = function (a) { return this.internal_setField(8, a); };
proto.tflite.proto.GPUSettings.prototype.clearCacheDirectory = function () { return this.internal_clearField(8); };
proto.tflite.proto.GPUSettings.prototype.hasCacheDirectory = function () { return this.internal_hasField(8); };
proto.tflite.proto.GPUSettings.prototype.getModelToken = function () { return this.internal_getStringFieldWithDefault(9); };
proto.tflite.proto.GPUSettings.prototype.setModelToken = function (a) { return this.internal_setField(9, a); };
proto.tflite.proto.GPUSettings.prototype.clearModelToken = function () { return this.internal_clearField(9); };
proto.tflite.proto.GPUSettings.prototype.hasModelToken = function () { return this.internal_hasField(9); };
proto.tflite.proto.GPUSettings.internalDoNotUse$proto$tflite$proto$GPUSettings$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readBool, 2: jspb.internal.binary.readBool, 3: jspb.internal.binary.readEnum, 4: jspb.internal.binary.readEnum, 5: jspb.internal.binary.readEnum, 6: jspb.internal.binary.readEnum, 7: jspb.internal.binary.readEnum, 8: jspb.internal.binary.readString, 9: jspb.internal.binary.readString }; };
proto.tflite.proto.GPUSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.proto.GPUSettings.serializeBinaryToWriter); };
proto.tflite.proto.GPUSettings.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeBool(b, a, 1); jspb.internal.binary.writeBool(b, a, 2); jspb.internal.binary.writeEnum(b, a, 3); jspb.internal.binary.writeEnum(b, a, 4); jspb.internal.binary.writeEnum(b, a, 5); jspb.internal.binary.writeEnum(b, a, 6); jspb.internal.binary.writeEnum(b, a, 7); jspb.internal.binary.writeString(b, a, 8); jspb.internal.binary.writeString(b, a, 9); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.proto.GPUSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.proto.GPUSettings, proto.tflite.proto.GPUSettings.internalDoNotUse$proto$tflite$proto$GPUSettings$getBinaryFieldsObject); };
proto.tflite.proto.GPUSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.proto.GPUSettings.internalDoNotUse$proto$tflite$proto$GPUSettings$getBinaryFieldsObject); };
proto.tflite.proto.GPUSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.proto.GPUSettings, a); };
proto.tflite.proto.GPUSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.proto.GPUSettings.fromObject = function (a) {
    var b = new proto.tflite.proto.GPUSettings;
    null != a.isPrecisionLossAllowed && b.internal_setField(1, a.isPrecisionLossAllowed);
    null != a.enableQuantizedInference && b.internal_setField(2, a.enableQuantizedInference);
    null != a.forceBackend && b.internal_setField(3, a.forceBackend);
    null != a.inferencePriority1 && b.internal_setField(4, a.inferencePriority1);
    null != a.inferencePriority2 && b.internal_setField(5, a.inferencePriority2);
    null != a.inferencePriority3 && b.internal_setField(6, a.inferencePriority3);
    null != a.inferencePreference && b.internal_setField(7, a.inferencePreference);
    null != a.cacheDirectory && b.internal_setField(8, a.cacheDirectory);
    null != a.modelToken && b.internal_setField(9, a.modelToken);
    return b;
});
proto.tflite.proto.GPUSettings.prototype.toObject = function (a) { return proto.tflite.proto.GPUSettings.internal_toObject(a, this); };
proto.tflite.proto.GPUSettings.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { isPrecisionLossAllowed: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(1)), enableQuantizedInference: b.internal_getBooleanFieldWithDefault(2, !0), forceBackend: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(3)), inferencePriority1: b.internal_getFieldWithDefault(4, 0), inferencePriority2: b.internal_getFieldWithDefault(5, 0), inferencePriority3: b.internal_getFieldWithDefault(6, 0), inferencePreference: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(7)), cacheDirectory: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(8)), modelToken: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(9)) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.tflite.proto.HexagonSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.proto.HexagonSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.proto.HexagonSettings.prototype.getDebugLevel = function () { return this.internal_getIntegerFieldWithDefault(1); };
proto.tflite.proto.HexagonSettings.prototype.setDebugLevel = function (a) { return this.internal_setField(1, a); };
proto.tflite.proto.HexagonSettings.prototype.clearDebugLevel = function () { return this.internal_clearField(1); };
proto.tflite.proto.HexagonSettings.prototype.hasDebugLevel = function () { return this.internal_hasField(1); };
proto.tflite.proto.HexagonSettings.prototype.getPowersaveLevel = function () { return this.internal_getIntegerFieldWithDefault(2); };
proto.tflite.proto.HexagonSettings.prototype.setPowersaveLevel = function (a) { return this.internal_setField(2, a); };
proto.tflite.proto.HexagonSettings.prototype.clearPowersaveLevel = function () { return this.internal_clearField(2); };
proto.tflite.proto.HexagonSettings.prototype.hasPowersaveLevel = function () { return this.internal_hasField(2); };
proto.tflite.proto.HexagonSettings.prototype.getPrintGraphProfile = function () { return this.internal_getBooleanFieldWithDefault(3); };
proto.tflite.proto.HexagonSettings.prototype.setPrintGraphProfile = function (a) { return this.internal_setField(3, a); };
proto.tflite.proto.HexagonSettings.prototype.clearPrintGraphProfile = function () { return this.internal_clearField(3); };
proto.tflite.proto.HexagonSettings.prototype.hasPrintGraphProfile = function () { return this.internal_hasField(3); };
proto.tflite.proto.HexagonSettings.prototype.getPrintGraphDebug = function () { return this.internal_getBooleanFieldWithDefault(4); };
proto.tflite.proto.HexagonSettings.prototype.setPrintGraphDebug = function (a) { return this.internal_setField(4, a); };
proto.tflite.proto.HexagonSettings.prototype.clearPrintGraphDebug = function () { return this.internal_clearField(4); };
proto.tflite.proto.HexagonSettings.prototype.hasPrintGraphDebug = function () { return this.internal_hasField(4); };
proto.tflite.proto.HexagonSettings.internalDoNotUse$proto$tflite$proto$HexagonSettings$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readInt32, 2: jspb.internal.binary.readInt32, 3: jspb.internal.binary.readBool, 4: jspb.internal.binary.readBool }; };
proto.tflite.proto.HexagonSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.proto.HexagonSettings.serializeBinaryToWriter); };
proto.tflite.proto.HexagonSettings.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeInt32(b, a, 1); jspb.internal.binary.writeInt32(b, a, 2); jspb.internal.binary.writeBool(b, a, 3); jspb.internal.binary.writeBool(b, a, 4); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.proto.HexagonSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.proto.HexagonSettings, proto.tflite.proto.HexagonSettings.internalDoNotUse$proto$tflite$proto$HexagonSettings$getBinaryFieldsObject); };
proto.tflite.proto.HexagonSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.proto.HexagonSettings.internalDoNotUse$proto$tflite$proto$HexagonSettings$getBinaryFieldsObject); };
proto.tflite.proto.HexagonSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.proto.HexagonSettings, a); };
proto.tflite.proto.HexagonSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.proto.HexagonSettings.fromObject = function (a) { var b = new proto.tflite.proto.HexagonSettings; null != a.debugLevel && b.internal_setField(1, a.debugLevel); null != a.powersaveLevel && b.internal_setField(2, a.powersaveLevel); null != a.printGraphProfile && b.internal_setField(3, a.printGraphProfile); null != a.printGraphDebug && b.internal_setField(4, a.printGraphDebug); return b; });
proto.tflite.proto.HexagonSettings.prototype.toObject = function (a) { return proto.tflite.proto.HexagonSettings.internal_toObject(a, this); };
proto.tflite.proto.HexagonSettings.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { debugLevel: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), powersaveLevel: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)), printGraphProfile: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(3)), printGraphDebug: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(4)) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.tflite.proto.NNAPISettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.proto.NNAPISettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.proto.NNAPISettings.prototype.getAcceleratorName = function () { return this.internal_getStringFieldWithDefault(1); };
proto.tflite.proto.NNAPISettings.prototype.setAcceleratorName = function (a) { return this.internal_setField(1, a); };
proto.tflite.proto.NNAPISettings.prototype.clearAcceleratorName = function () { return this.internal_clearField(1); };
proto.tflite.proto.NNAPISettings.prototype.hasAcceleratorName = function () { return this.internal_hasField(1); };
proto.tflite.proto.NNAPISettings.prototype.getCacheDirectory = function () { return this.internal_getStringFieldWithDefault(2); };
proto.tflite.proto.NNAPISettings.prototype.setCacheDirectory = function (a) { return this.internal_setField(2, a); };
proto.tflite.proto.NNAPISettings.prototype.clearCacheDirectory = function () { return this.internal_clearField(2); };
proto.tflite.proto.NNAPISettings.prototype.hasCacheDirectory = function () { return this.internal_hasField(2); };
proto.tflite.proto.NNAPISettings.prototype.getModelToken = function () { return this.internal_getStringFieldWithDefault(3); };
proto.tflite.proto.NNAPISettings.prototype.setModelToken = function (a) { return this.internal_setField(3, a); };
proto.tflite.proto.NNAPISettings.prototype.clearModelToken = function () { return this.internal_clearField(3); };
proto.tflite.proto.NNAPISettings.prototype.hasModelToken = function () { return this.internal_hasField(3); };
proto.tflite.proto.NNAPISettings.prototype.getExecutionPreference = function () { return this.internal_getFieldWithDefault(4, 0); };
proto.tflite.proto.NNAPISettings.prototype.setExecutionPreference = function (a) { return this.internal_setField(4, a); };
proto.tflite.proto.NNAPISettings.prototype.clearExecutionPreference = function () { return this.internal_clearField(4); };
proto.tflite.proto.NNAPISettings.prototype.hasExecutionPreference = function () { return this.internal_hasField(4); };
proto.tflite.proto.NNAPISettings.prototype.getNoOfNnapiInstancesToCache = function () { return this.internal_getIntegerFieldWithDefault(5); };
proto.tflite.proto.NNAPISettings.prototype.setNoOfNnapiInstancesToCache = function (a) { return this.internal_setField(5, a); };
proto.tflite.proto.NNAPISettings.prototype.clearNoOfNnapiInstancesToCache = function () { return this.internal_clearField(5); };
proto.tflite.proto.NNAPISettings.prototype.hasNoOfNnapiInstancesToCache = function () { return this.internal_hasField(5); };
proto.tflite.proto.NNAPISettings.prototype.getFallbackSettings = function () { return this.internal_getWrapperField(proto.tflite.proto.FallbackSettings, 6); };
proto.tflite.proto.NNAPISettings.prototype.setFallbackSettings = function (a) { return this.internal_setWrapperField(6, a); };
proto.tflite.proto.NNAPISettings.prototype.clearFallbackSettings = function () { return this.internal_clearWrapperField(6); };
proto.tflite.proto.NNAPISettings.prototype.hasFallbackSettings = function () { return this.internal_hasField(6); };
proto.tflite.proto.NNAPISettings.prototype.getAllowNnapiCpuOnAndroid10Plus = function () { return this.internal_getBooleanFieldWithDefault(7); };
proto.tflite.proto.NNAPISettings.prototype.setAllowNnapiCpuOnAndroid10Plus = function (a) { return this.internal_setField(7, a); };
proto.tflite.proto.NNAPISettings.prototype.clearAllowNnapiCpuOnAndroid10Plus = function () { return this.internal_clearField(7); };
proto.tflite.proto.NNAPISettings.prototype.hasAllowNnapiCpuOnAndroid10Plus = function () { return this.internal_hasField(7); };
proto.tflite.proto.NNAPISettings.prototype.getExecutionPriority = function () { return this.internal_getFieldWithDefault(8, 0); };
proto.tflite.proto.NNAPISettings.prototype.setExecutionPriority = function (a) { return this.internal_setField(8, a); };
proto.tflite.proto.NNAPISettings.prototype.clearExecutionPriority = function () { return this.internal_clearField(8); };
proto.tflite.proto.NNAPISettings.prototype.hasExecutionPriority = function () { return this.internal_hasField(8); };
proto.tflite.proto.NNAPISettings.prototype.getAllowDynamicDimensions = function () { return this.internal_getBooleanFieldWithDefault(9); };
proto.tflite.proto.NNAPISettings.prototype.setAllowDynamicDimensions = function (a) { return this.internal_setField(9, a); };
proto.tflite.proto.NNAPISettings.prototype.clearAllowDynamicDimensions = function () { return this.internal_clearField(9); };
proto.tflite.proto.NNAPISettings.prototype.hasAllowDynamicDimensions = function () { return this.internal_hasField(9); };
proto.tflite.proto.NNAPISettings.prototype.getAllowFp16PrecisionForFp32 = function () { return this.internal_getBooleanFieldWithDefault(10); };
proto.tflite.proto.NNAPISettings.prototype.setAllowFp16PrecisionForFp32 = function (a) { return this.internal_setField(10, a); };
proto.tflite.proto.NNAPISettings.prototype.clearAllowFp16PrecisionForFp32 = function () { return this.internal_clearField(10); };
proto.tflite.proto.NNAPISettings.prototype.hasAllowFp16PrecisionForFp32 = function () { return this.internal_hasField(10); };
proto.tflite.proto.NNAPISettings.prototype.getUseBurstComputation = function () { return this.internal_getBooleanFieldWithDefault(11); };
proto.tflite.proto.NNAPISettings.prototype.setUseBurstComputation = function (a) { return this.internal_setField(11, a); };
proto.tflite.proto.NNAPISettings.prototype.clearUseBurstComputation = function () { return this.internal_clearField(11); };
proto.tflite.proto.NNAPISettings.prototype.hasUseBurstComputation = function () { return this.internal_hasField(11); };
proto.tflite.proto.NNAPISettings.prototype.getSupportLibraryHandle = function () { return this.internal_getIntegerFieldWithDefault(12); };
proto.tflite.proto.NNAPISettings.prototype.setSupportLibraryHandle = function (a) { return this.internal_setField(12, a); };
proto.tflite.proto.NNAPISettings.prototype.clearSupportLibraryHandle = function () { return this.internal_clearField(12); };
proto.tflite.proto.NNAPISettings.prototype.hasSupportLibraryHandle = function () { return this.internal_hasField(12); };
proto.tflite.proto.NNAPISettings.internalDoNotUse$proto$tflite$proto$NNAPISettings$getBinaryFieldsObject = function () {
    return { 1: jspb.internal.binary.readString, 2: jspb.internal.binary.readString, 3: jspb.internal.binary.readString, 4: jspb.internal.binary.readEnum, 5: jspb.internal.binary.readInt32, 6: [jspb.internal.binary.readMessage, proto.tflite.proto.FallbackSettings, proto.tflite.proto.FallbackSettings.internalDoNotUse$proto$tflite$proto$FallbackSettings$getBinaryFieldsObject], 7: jspb.internal.binary.readBool,
        8: jspb.internal.binary.readEnum, 9: jspb.internal.binary.readBool, 10: jspb.internal.binary.readBool, 11: jspb.internal.binary.readBool, 12: jspb.internal.binary.readInt64 };
};
proto.tflite.proto.NNAPISettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.proto.NNAPISettings.serializeBinaryToWriter); };
proto.tflite.proto.NNAPISettings.serializeBinaryToWriter = function (a, b) {
    jspb.internal.binary.writeString(b, a, 1);
    jspb.internal.binary.writeString(b, a, 2);
    jspb.internal.binary.writeString(b, a, 3);
    jspb.internal.binary.writeEnum(b, a, 4);
    jspb.internal.binary.writeInt32(b, a, 5);
    jspb.internal.binary.writeMessage(b, a, 6, proto.tflite.proto.FallbackSettings, proto.tflite.proto.FallbackSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeBool(b, a, 7);
    jspb.internal.binary.writeEnum(b, a, 8);
    jspb.internal.binary.writeBool(b, a, 9);
    jspb.internal.binary.writeBool(b, a, 10);
    jspb.internal.binary.writeBool(b, a, 11);
    jspb.internal.binary.writeInt64(b, a, 12);
    jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b);
};
proto.tflite.proto.NNAPISettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.proto.NNAPISettings, proto.tflite.proto.NNAPISettings.internalDoNotUse$proto$tflite$proto$NNAPISettings$getBinaryFieldsObject); };
proto.tflite.proto.NNAPISettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.proto.NNAPISettings.internalDoNotUse$proto$tflite$proto$NNAPISettings$getBinaryFieldsObject); };
proto.tflite.proto.NNAPISettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.proto.NNAPISettings, a); };
proto.tflite.proto.NNAPISettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.proto.NNAPISettings.fromObject = function (a) {
    var b = new proto.tflite.proto.NNAPISettings;
    null != a.acceleratorName && b.internal_setField(1, a.acceleratorName);
    null != a.cacheDirectory && b.internal_setField(2, a.cacheDirectory);
    null != a.modelToken && b.internal_setField(3, a.modelToken);
    null != a.executionPreference && b.internal_setField(4, a.executionPreference);
    null != a.noOfNnapiInstancesToCache && b.internal_setField(5, a.noOfNnapiInstancesToCache);
    a.fallbackSettings && b.internal_setWrapperField(6, proto.tflite.proto.FallbackSettings.fromObject(a.fallbackSettings));
    null != a.allowNnapiCpuOnAndroid10Plus && b.internal_setField(7, a.allowNnapiCpuOnAndroid10Plus);
    null != a.executionPriority && b.internal_setField(8, a.executionPriority);
    null != a.allowDynamicDimensions && b.internal_setField(9, a.allowDynamicDimensions);
    null != a.allowFp16PrecisionForFp32 && b.internal_setField(10, a.allowFp16PrecisionForFp32);
    null != a.useBurstComputation && b.internal_setField(11, a.useBurstComputation);
    null != a.supportLibraryHandle && b.internal_setField(12, a.supportLibraryHandle);
    return b;
});
proto.tflite.proto.NNAPISettings.prototype.toObject = function (a) { return proto.tflite.proto.NNAPISettings.internal_toObject(a, this); };
proto.tflite.proto.NNAPISettings.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { acceleratorName: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), cacheDirectory: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)), modelToken: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(3)), executionPreference: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(4)),
            noOfNnapiInstancesToCache: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(5)), fallbackSettings: proto.tflite.proto.FallbackSettings.internal_toObject(a, b.getFallbackSettings()), allowNnapiCpuOnAndroid10Plus: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(7)), executionPriority: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(8)), allowDynamicDimensions: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(9)),
            allowFp16PrecisionForFp32: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(10)), useBurstComputation: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getBooleanField(11)), supportLibraryHandle: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(12)) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.tflite.proto.XNNPackSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.proto.XNNPackSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.proto.XNNPackSettings.prototype.getNumThreads = function () { return this.internal_getIntegerFieldWithDefault(1); };
proto.tflite.proto.XNNPackSettings.prototype.setNumThreads = function (a) { return this.internal_setField(1, a); };
proto.tflite.proto.XNNPackSettings.prototype.clearNumThreads = function () { return this.internal_clearField(1); };
proto.tflite.proto.XNNPackSettings.prototype.hasNumThreads = function () { return this.internal_hasField(1); };
proto.tflite.proto.XNNPackSettings.internalDoNotUse$proto$tflite$proto$XNNPackSettings$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readInt32 }; };
proto.tflite.proto.XNNPackSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.proto.XNNPackSettings.serializeBinaryToWriter); };
proto.tflite.proto.XNNPackSettings.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeInt32(b, a, 1); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.proto.XNNPackSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.proto.XNNPackSettings, proto.tflite.proto.XNNPackSettings.internalDoNotUse$proto$tflite$proto$XNNPackSettings$getBinaryFieldsObject); };
proto.tflite.proto.XNNPackSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.proto.XNNPackSettings.internalDoNotUse$proto$tflite$proto$XNNPackSettings$getBinaryFieldsObject); };
proto.tflite.proto.XNNPackSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.proto.XNNPackSettings, a); };
proto.tflite.proto.XNNPackSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.proto.XNNPackSettings.fromObject = function (a) { var b = new proto.tflite.proto.XNNPackSettings; null != a.numThreads && b.internal_setField(1, a.numThreads); return b; });
proto.tflite.proto.XNNPackSettings.prototype.toObject = function (a) { return proto.tflite.proto.XNNPackSettings.internal_toObject(a, this); };
proto.tflite.proto.XNNPackSettings.internal_toObject = function (a, b) { if (null != b) {
    var c = { numThreads: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.proto.TFLiteSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.proto.TFLiteSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.proto.TFLiteSettings.prototype.getDelegate = function () { return this.internal_getFieldWithDefault(1, 0); };
proto.tflite.proto.TFLiteSettings.prototype.setDelegate = function (a) { return this.internal_setField(1, a); };
proto.tflite.proto.TFLiteSettings.prototype.clearDelegate = function () { return this.internal_clearField(1); };
proto.tflite.proto.TFLiteSettings.prototype.hasDelegate = function () { return this.internal_hasField(1); };
proto.tflite.proto.TFLiteSettings.prototype.getNnapiSettings = function () { return this.internal_getWrapperField(proto.tflite.proto.NNAPISettings, 2); };
proto.tflite.proto.TFLiteSettings.prototype.setNnapiSettings = function (a) { return this.internal_setWrapperField(2, a); };
proto.tflite.proto.TFLiteSettings.prototype.clearNnapiSettings = function () { return this.internal_clearWrapperField(2); };
proto.tflite.proto.TFLiteSettings.prototype.hasNnapiSettings = function () { return this.internal_hasField(2); };
proto.tflite.proto.TFLiteSettings.prototype.getGpuSettings = function () { return this.internal_getWrapperField(proto.tflite.proto.GPUSettings, 3); };
proto.tflite.proto.TFLiteSettings.prototype.setGpuSettings = function (a) { return this.internal_setWrapperField(3, a); };
proto.tflite.proto.TFLiteSettings.prototype.clearGpuSettings = function () { return this.internal_clearWrapperField(3); };
proto.tflite.proto.TFLiteSettings.prototype.hasGpuSettings = function () { return this.internal_hasField(3); };
proto.tflite.proto.TFLiteSettings.prototype.getHexagonSettings = function () { return this.internal_getWrapperField(proto.tflite.proto.HexagonSettings, 4); };
proto.tflite.proto.TFLiteSettings.prototype.setHexagonSettings = function (a) { return this.internal_setWrapperField(4, a); };
proto.tflite.proto.TFLiteSettings.prototype.clearHexagonSettings = function () { return this.internal_clearWrapperField(4); };
proto.tflite.proto.TFLiteSettings.prototype.hasHexagonSettings = function () { return this.internal_hasField(4); };
proto.tflite.proto.TFLiteSettings.prototype.getXnnpackSettings = function () { return this.internal_getWrapperField(proto.tflite.proto.XNNPackSettings, 5); };
proto.tflite.proto.TFLiteSettings.prototype.setXnnpackSettings = function (a) { return this.internal_setWrapperField(5, a); };
proto.tflite.proto.TFLiteSettings.prototype.clearXnnpackSettings = function () { return this.internal_clearWrapperField(5); };
proto.tflite.proto.TFLiteSettings.prototype.hasXnnpackSettings = function () { return this.internal_hasField(5); };
proto.tflite.proto.TFLiteSettings.prototype.getCpuSettings = function () { return this.internal_getWrapperField(proto.tflite.proto.CPUSettings, 6); };
proto.tflite.proto.TFLiteSettings.prototype.setCpuSettings = function (a) { return this.internal_setWrapperField(6, a); };
proto.tflite.proto.TFLiteSettings.prototype.clearCpuSettings = function () { return this.internal_clearWrapperField(6); };
proto.tflite.proto.TFLiteSettings.prototype.hasCpuSettings = function () { return this.internal_hasField(6); };
proto.tflite.proto.TFLiteSettings.prototype.getMaxDelegatedPartitions = function () { return this.internal_getIntegerFieldWithDefault(7); };
proto.tflite.proto.TFLiteSettings.prototype.setMaxDelegatedPartitions = function (a) { return this.internal_setField(7, a); };
proto.tflite.proto.TFLiteSettings.prototype.clearMaxDelegatedPartitions = function () { return this.internal_clearField(7); };
proto.tflite.proto.TFLiteSettings.prototype.hasMaxDelegatedPartitions = function () { return this.internal_hasField(7); };
proto.tflite.proto.TFLiteSettings.prototype.getEdgetpuSettings = function () { return this.internal_getWrapperField(proto.tflite.proto.EdgeTpuSettings, 8); };
proto.tflite.proto.TFLiteSettings.prototype.setEdgetpuSettings = function (a) { return this.internal_setWrapperField(8, a); };
proto.tflite.proto.TFLiteSettings.prototype.clearEdgetpuSettings = function () { return this.internal_clearWrapperField(8); };
proto.tflite.proto.TFLiteSettings.prototype.hasEdgetpuSettings = function () { return this.internal_hasField(8); };
proto.tflite.proto.TFLiteSettings.prototype.getCoralSettings = function () { return this.internal_getWrapperField(proto.tflite.proto.CoralSettings, 10); };
proto.tflite.proto.TFLiteSettings.prototype.setCoralSettings = function (a) { return this.internal_setWrapperField(10, a); };
proto.tflite.proto.TFLiteSettings.prototype.clearCoralSettings = function () { return this.internal_clearWrapperField(10); };
proto.tflite.proto.TFLiteSettings.prototype.hasCoralSettings = function () { return this.internal_hasField(10); };
proto.tflite.proto.TFLiteSettings.prototype.getFallbackSettings = function () { return this.internal_getWrapperField(proto.tflite.proto.FallbackSettings, 9); };
proto.tflite.proto.TFLiteSettings.prototype.setFallbackSettings = function (a) { return this.internal_setWrapperField(9, a); };
proto.tflite.proto.TFLiteSettings.prototype.clearFallbackSettings = function () { return this.internal_clearWrapperField(9); };
proto.tflite.proto.TFLiteSettings.prototype.hasFallbackSettings = function () { return this.internal_hasField(9); };
proto.tflite.proto.TFLiteSettings.internalDoNotUse$proto$tflite$proto$TFLiteSettings$getBinaryFieldsObject = function () {
    return { 1: jspb.internal.binary.readEnum, 2: [jspb.internal.binary.readMessage, proto.tflite.proto.NNAPISettings, proto.tflite.proto.NNAPISettings.internalDoNotUse$proto$tflite$proto$NNAPISettings$getBinaryFieldsObject], 3: [jspb.internal.binary.readMessage, proto.tflite.proto.GPUSettings, proto.tflite.proto.GPUSettings.internalDoNotUse$proto$tflite$proto$GPUSettings$getBinaryFieldsObject],
        4: [jspb.internal.binary.readMessage, proto.tflite.proto.HexagonSettings, proto.tflite.proto.HexagonSettings.internalDoNotUse$proto$tflite$proto$HexagonSettings$getBinaryFieldsObject], 5: [jspb.internal.binary.readMessage, proto.tflite.proto.XNNPackSettings, proto.tflite.proto.XNNPackSettings.internalDoNotUse$proto$tflite$proto$XNNPackSettings$getBinaryFieldsObject], 6: [jspb.internal.binary.readMessage, proto.tflite.proto.CPUSettings, proto.tflite.proto.CPUSettings.internalDoNotUse$proto$tflite$proto$CPUSettings$getBinaryFieldsObject],
        7: jspb.internal.binary.readInt32, 8: [jspb.internal.binary.readMessage, proto.tflite.proto.EdgeTpuSettings, proto.tflite.proto.EdgeTpuSettings.internalDoNotUse$proto$tflite$proto$EdgeTpuSettings$getBinaryFieldsObject], 10: [jspb.internal.binary.readMessage, proto.tflite.proto.CoralSettings, proto.tflite.proto.CoralSettings.internalDoNotUse$proto$tflite$proto$CoralSettings$getBinaryFieldsObject], 9: [jspb.internal.binary.readMessage, proto.tflite.proto.FallbackSettings, proto.tflite.proto.FallbackSettings.internalDoNotUse$proto$tflite$proto$FallbackSettings$getBinaryFieldsObject] };
};
proto.tflite.proto.TFLiteSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.proto.TFLiteSettings.serializeBinaryToWriter); };
proto.tflite.proto.TFLiteSettings.serializeBinaryToWriter = function (a, b) {
    jspb.internal.binary.writeEnum(b, a, 1);
    jspb.internal.binary.writeMessage(b, a, 2, proto.tflite.proto.NNAPISettings, proto.tflite.proto.NNAPISettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 3, proto.tflite.proto.GPUSettings, proto.tflite.proto.GPUSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 4, proto.tflite.proto.HexagonSettings, proto.tflite.proto.HexagonSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 5, proto.tflite.proto.XNNPackSettings, proto.tflite.proto.XNNPackSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 6, proto.tflite.proto.CPUSettings, proto.tflite.proto.CPUSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeInt32(b, a, 7);
    jspb.internal.binary.writeMessage(b, a, 8, proto.tflite.proto.EdgeTpuSettings, proto.tflite.proto.EdgeTpuSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 10, proto.tflite.proto.CoralSettings, proto.tflite.proto.CoralSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 9, proto.tflite.proto.FallbackSettings, proto.tflite.proto.FallbackSettings.serializeBinaryToWriter);
    jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b);
};
proto.tflite.proto.TFLiteSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.proto.TFLiteSettings, proto.tflite.proto.TFLiteSettings.internalDoNotUse$proto$tflite$proto$TFLiteSettings$getBinaryFieldsObject); };
proto.tflite.proto.TFLiteSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.proto.TFLiteSettings.internalDoNotUse$proto$tflite$proto$TFLiteSettings$getBinaryFieldsObject); };
proto.tflite.proto.TFLiteSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.proto.TFLiteSettings, a); };
proto.tflite.proto.TFLiteSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.proto.TFLiteSettings.fromObject = function (a) {
    var b = new proto.tflite.proto.TFLiteSettings;
    null != a.delegate && b.internal_setField(1, a.delegate);
    a.nnapiSettings && b.internal_setWrapperField(2, proto.tflite.proto.NNAPISettings.fromObject(a.nnapiSettings));
    a.gpuSettings && b.internal_setWrapperField(3, proto.tflite.proto.GPUSettings.fromObject(a.gpuSettings));
    a.hexagonSettings && b.internal_setWrapperField(4, proto.tflite.proto.HexagonSettings.fromObject(a.hexagonSettings));
    a.xnnpackSettings && b.internal_setWrapperField(5, proto.tflite.proto.XNNPackSettings.fromObject(a.xnnpackSettings));
    a.cpuSettings && b.internal_setWrapperField(6, proto.tflite.proto.CPUSettings.fromObject(a.cpuSettings));
    null != a.maxDelegatedPartitions && b.internal_setField(7, a.maxDelegatedPartitions);
    a.edgetpuSettings && b.internal_setWrapperField(8, proto.tflite.proto.EdgeTpuSettings.fromObject(a.edgetpuSettings));
    a.coralSettings && b.internal_setWrapperField(10, proto.tflite.proto.CoralSettings.fromObject(a.coralSettings));
    a.fallbackSettings && b.internal_setWrapperField(9, proto.tflite.proto.FallbackSettings.fromObject(a.fallbackSettings));
    return b;
});
proto.tflite.proto.TFLiteSettings.prototype.toObject = function (a) { return proto.tflite.proto.TFLiteSettings.internal_toObject(a, this); };
proto.tflite.proto.TFLiteSettings.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { delegate: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), nnapiSettings: proto.tflite.proto.NNAPISettings.internal_toObject(a, b.getNnapiSettings()), gpuSettings: proto.tflite.proto.GPUSettings.internal_toObject(a, b.getGpuSettings()), hexagonSettings: proto.tflite.proto.HexagonSettings.internal_toObject(a, b.getHexagonSettings()), xnnpackSettings: proto.tflite.proto.XNNPackSettings.internal_toObject(a, b.getXnnpackSettings()), cpuSettings: proto.tflite.proto.CPUSettings.internal_toObject(a, b.getCpuSettings()), maxDelegatedPartitions: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(7)), edgetpuSettings: proto.tflite.proto.EdgeTpuSettings.internal_toObject(a, b.getEdgetpuSettings()), coralSettings: proto.tflite.proto.CoralSettings.internal_toObject(a, b.getCoralSettings()), fallbackSettings: proto.tflite.proto.FallbackSettings.internal_toObject(a, b.getFallbackSettings()) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.tflite.proto.MinibenchmarkSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a, -1, proto.tflite.proto.MinibenchmarkSettings.repeatedFields_); };
$jscomp.inherits(proto.tflite.proto.MinibenchmarkSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.proto.MinibenchmarkSettings.prototype.getSettingsToTestList = function () { return this.internal_getRepeatedWrapperField(proto.tflite.proto.TFLiteSettings, 1); };
proto.tflite.proto.MinibenchmarkSettings.prototype.setSettingsToTestList = function (a) { return this.internal_setRepeatedWrapperField(1, a); };
proto.tflite.proto.MinibenchmarkSettings.prototype.addSettingsToTest = function (a, b) { return this.internal_addToRepeatedWrapperField(1, a, proto.tflite.proto.TFLiteSettings, b); };
proto.tflite.proto.MinibenchmarkSettings.prototype.addAndReturnSettingsToTest = function (a, b) { return this.internal_addAndReturnRepeatedWrapperField(1, a, proto.tflite.proto.TFLiteSettings, b); };
proto.tflite.proto.MinibenchmarkSettings.prototype.clearSettingsToTestList = function () { return this.internal_clearRepeatedWrapperField(1); };
proto.tflite.proto.MinibenchmarkSettings.prototype.getModelFile = function () { return this.internal_getWrapperField(proto.tflite.proto.ModelFile, 2); };
proto.tflite.proto.MinibenchmarkSettings.prototype.setModelFile = function (a) { return this.internal_setWrapperField(2, a); };
proto.tflite.proto.MinibenchmarkSettings.prototype.clearModelFile = function () { return this.internal_clearWrapperField(2); };
proto.tflite.proto.MinibenchmarkSettings.prototype.hasModelFile = function () { return this.internal_hasField(2); };
proto.tflite.proto.MinibenchmarkSettings.prototype.getStoragePaths = function () { return this.internal_getWrapperField(proto.tflite.proto.BenchmarkStoragePaths, 3); };
proto.tflite.proto.MinibenchmarkSettings.prototype.setStoragePaths = function (a) { return this.internal_setWrapperField(3, a); };
proto.tflite.proto.MinibenchmarkSettings.prototype.clearStoragePaths = function () { return this.internal_clearWrapperField(3); };
proto.tflite.proto.MinibenchmarkSettings.prototype.hasStoragePaths = function () { return this.internal_hasField(3); };
proto.tflite.proto.MinibenchmarkSettings.internalDoNotUse$proto$tflite$proto$MinibenchmarkSettings$getBinaryFieldsObject = function () {
    return { 1: [jspb.internal.binary.readRepeatedMessage, proto.tflite.proto.TFLiteSettings, proto.tflite.proto.TFLiteSettings.internalDoNotUse$proto$tflite$proto$TFLiteSettings$getBinaryFieldsObject], 2: [jspb.internal.binary.readMessage, proto.tflite.proto.ModelFile, proto.tflite.proto.ModelFile.internalDoNotUse$proto$tflite$proto$ModelFile$getBinaryFieldsObject], 3: [jspb.internal.binary.readMessage,
            proto.tflite.proto.BenchmarkStoragePaths, proto.tflite.proto.BenchmarkStoragePaths.internalDoNotUse$proto$tflite$proto$BenchmarkStoragePaths$getBinaryFieldsObject] };
};
proto.tflite.proto.MinibenchmarkSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.proto.MinibenchmarkSettings.serializeBinaryToWriter); };
proto.tflite.proto.MinibenchmarkSettings.serializeBinaryToWriter = function (a, b) {
    jspb.internal.binary.writeRepeatedMessage(b, a, 1, proto.tflite.proto.TFLiteSettings, proto.tflite.proto.TFLiteSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 2, proto.tflite.proto.ModelFile, proto.tflite.proto.ModelFile.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 3, proto.tflite.proto.BenchmarkStoragePaths, proto.tflite.proto.BenchmarkStoragePaths.serializeBinaryToWriter);
    jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b);
};
proto.tflite.proto.MinibenchmarkSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.proto.MinibenchmarkSettings, proto.tflite.proto.MinibenchmarkSettings.internalDoNotUse$proto$tflite$proto$MinibenchmarkSettings$getBinaryFieldsObject); };
proto.tflite.proto.MinibenchmarkSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.proto.MinibenchmarkSettings.internalDoNotUse$proto$tflite$proto$MinibenchmarkSettings$getBinaryFieldsObject); };
proto.tflite.proto.MinibenchmarkSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.proto.MinibenchmarkSettings, a); };
proto.tflite.proto.MinibenchmarkSettings.repeatedFields_ = [1];
proto.tflite.proto.MinibenchmarkSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.proto.MinibenchmarkSettings.fromObject = function (a) {
    var b = new proto.tflite.proto.MinibenchmarkSettings;
    a.settingsToTestList && b.internal_setRepeatedWrapperField(1, a.settingsToTestList.map(proto.tflite.proto.TFLiteSettings.fromObject));
    a.modelFile && b.internal_setWrapperField(2, proto.tflite.proto.ModelFile.fromObject(a.modelFile));
    a.storagePaths && b.internal_setWrapperField(3, proto.tflite.proto.BenchmarkStoragePaths.fromObject(a.storagePaths));
    return b;
});
proto.tflite.proto.MinibenchmarkSettings.prototype.toObject = function (a) { return proto.tflite.proto.MinibenchmarkSettings.internal_toObject(a, this); };
proto.tflite.proto.MinibenchmarkSettings.internal_toObject = function (a, b) { if (null != b) {
    var c = { settingsToTestList: module$contents$jspb$internal$public_for_gencode_toObjectList(b.getSettingsToTestList(), proto.tflite.proto.TFLiteSettings.internal_toObject, a), modelFile: proto.tflite.proto.ModelFile.internal_toObject(a, b.getModelFile()), storagePaths: proto.tflite.proto.BenchmarkStoragePaths.internal_toObject(a, b.getStoragePaths()) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.proto.ComputeSettings = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.proto.ComputeSettings, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.proto.ComputeSettings.prototype.getPreference = function () { return this.internal_getFieldWithDefault(1, 0); };
proto.tflite.proto.ComputeSettings.prototype.setPreference = function (a) { return this.internal_setField(1, a); };
proto.tflite.proto.ComputeSettings.prototype.clearPreference = function () { return this.internal_clearField(1); };
proto.tflite.proto.ComputeSettings.prototype.hasPreference = function () { return this.internal_hasField(1); };
proto.tflite.proto.ComputeSettings.prototype.getTfliteSettings = function () { return this.internal_getWrapperField(proto.tflite.proto.TFLiteSettings, 2); };
proto.tflite.proto.ComputeSettings.prototype.setTfliteSettings = function (a) { return this.internal_setWrapperField(2, a); };
proto.tflite.proto.ComputeSettings.prototype.clearTfliteSettings = function () { return this.internal_clearWrapperField(2); };
proto.tflite.proto.ComputeSettings.prototype.hasTfliteSettings = function () { return this.internal_hasField(2); };
proto.tflite.proto.ComputeSettings.prototype.getModelNamespaceForStatistics = function () { return this.internal_getStringFieldWithDefault(3); };
proto.tflite.proto.ComputeSettings.prototype.setModelNamespaceForStatistics = function (a) { return this.internal_setField(3, a); };
proto.tflite.proto.ComputeSettings.prototype.clearModelNamespaceForStatistics = function () { return this.internal_clearField(3); };
proto.tflite.proto.ComputeSettings.prototype.hasModelNamespaceForStatistics = function () { return this.internal_hasField(3); };
proto.tflite.proto.ComputeSettings.prototype.getModelIdentifierForStatistics = function () { return this.internal_getStringFieldWithDefault(4); };
proto.tflite.proto.ComputeSettings.prototype.setModelIdentifierForStatistics = function (a) { return this.internal_setField(4, a); };
proto.tflite.proto.ComputeSettings.prototype.clearModelIdentifierForStatistics = function () { return this.internal_clearField(4); };
proto.tflite.proto.ComputeSettings.prototype.hasModelIdentifierForStatistics = function () { return this.internal_hasField(4); };
proto.tflite.proto.ComputeSettings.prototype.getSettingsToTestLocally = function () { return this.internal_getWrapperField(proto.tflite.proto.MinibenchmarkSettings, 5); };
proto.tflite.proto.ComputeSettings.prototype.setSettingsToTestLocally = function (a) { return this.internal_setWrapperField(5, a); };
proto.tflite.proto.ComputeSettings.prototype.clearSettingsToTestLocally = function () { return this.internal_clearWrapperField(5); };
proto.tflite.proto.ComputeSettings.prototype.hasSettingsToTestLocally = function () { return this.internal_hasField(5); };
proto.tflite.proto.ComputeSettings.internalDoNotUse$proto$tflite$proto$ComputeSettings$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readEnum, 2: [jspb.internal.binary.readMessage, proto.tflite.proto.TFLiteSettings, proto.tflite.proto.TFLiteSettings.internalDoNotUse$proto$tflite$proto$TFLiteSettings$getBinaryFieldsObject], 3: jspb.internal.binary.readString, 4: jspb.internal.binary.readString, 5: [jspb.internal.binary.readMessage, proto.tflite.proto.MinibenchmarkSettings, proto.tflite.proto.MinibenchmarkSettings.internalDoNotUse$proto$tflite$proto$MinibenchmarkSettings$getBinaryFieldsObject] }; };
proto.tflite.proto.ComputeSettings.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.proto.ComputeSettings.serializeBinaryToWriter); };
proto.tflite.proto.ComputeSettings.serializeBinaryToWriter = function (a, b) {
    jspb.internal.binary.writeEnum(b, a, 1);
    jspb.internal.binary.writeMessage(b, a, 2, proto.tflite.proto.TFLiteSettings, proto.tflite.proto.TFLiteSettings.serializeBinaryToWriter);
    jspb.internal.binary.writeString(b, a, 3);
    jspb.internal.binary.writeString(b, a, 4);
    jspb.internal.binary.writeMessage(b, a, 5, proto.tflite.proto.MinibenchmarkSettings, proto.tflite.proto.MinibenchmarkSettings.serializeBinaryToWriter);
    jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b);
};
proto.tflite.proto.ComputeSettings.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.proto.ComputeSettings, proto.tflite.proto.ComputeSettings.internalDoNotUse$proto$tflite$proto$ComputeSettings$getBinaryFieldsObject); };
proto.tflite.proto.ComputeSettings.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.proto.ComputeSettings.internalDoNotUse$proto$tflite$proto$ComputeSettings$getBinaryFieldsObject); };
proto.tflite.proto.ComputeSettings.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.proto.ComputeSettings, a); };
proto.tflite.proto.ComputeSettings.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.proto.ComputeSettings.fromObject = function (a) {
    var b = new proto.tflite.proto.ComputeSettings;
    null != a.preference && b.internal_setField(1, a.preference);
    a.tfliteSettings && b.internal_setWrapperField(2, proto.tflite.proto.TFLiteSettings.fromObject(a.tfliteSettings));
    null != a.modelNamespaceForStatistics && b.internal_setField(3, a.modelNamespaceForStatistics);
    null != a.modelIdentifierForStatistics && b.internal_setField(4, a.modelIdentifierForStatistics);
    a.settingsToTestLocally && b.internal_setWrapperField(5, proto.tflite.proto.MinibenchmarkSettings.fromObject(a.settingsToTestLocally));
    return b;
});
proto.tflite.proto.ComputeSettings.prototype.toObject = function (a) { return proto.tflite.proto.ComputeSettings.internal_toObject(a, this); };
proto.tflite.proto.ComputeSettings.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { preference: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), tfliteSettings: proto.tflite.proto.TFLiteSettings.internal_toObject(a, b.getTfliteSettings()), modelNamespaceForStatistics: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(3)), modelIdentifierForStatistics: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(4)),
            settingsToTestLocally: proto.tflite.proto.MinibenchmarkSettings.internal_toObject(a, b.getSettingsToTestLocally()) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.tflite.task = {};
proto.tflite.task.core = {};
proto.tflite.task.core.BaseOptions = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.task.core.BaseOptions, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.core.BaseOptions.prototype.getModelFile = function () { return this.internal_getWrapperField(proto.visionkit.ExternalFile, 1); };
proto.tflite.task.core.BaseOptions.prototype.setModelFile = function (a) { return this.internal_setWrapperField(1, a); };
proto.tflite.task.core.BaseOptions.prototype.clearModelFile = function () { return this.internal_clearWrapperField(1); };
proto.tflite.task.core.BaseOptions.prototype.hasModelFile = function () { return this.internal_hasField(1); };
proto.tflite.task.core.BaseOptions.prototype.getComputeSettings = function () { return this.internal_getWrapperField(proto.acceleration.Acceleration, 2); };
proto.tflite.task.core.BaseOptions.prototype.setComputeSettings = function (a) { return this.internal_setWrapperField(2, a); };
proto.tflite.task.core.BaseOptions.prototype.clearComputeSettings = function () { return this.internal_clearWrapperField(2); };
proto.tflite.task.core.BaseOptions.prototype.hasComputeSettings = function () { return this.internal_hasField(2); };
proto.tflite.task.core.BaseOptions.internalDoNotUse$proto$tflite$task$core$BaseOptions$getBinaryFieldsObject = function () { return { 1: [jspb.internal.binary.readMessage, proto.visionkit.ExternalFile, proto.visionkit.ExternalFile.internalDoNotUse$proto$visionkit$ExternalFile$getBinaryFieldsObject], 2: [jspb.internal.binary.readMessage, proto.acceleration.Acceleration, proto.acceleration.Acceleration.internalDoNotUse$proto$acceleration$Acceleration$getBinaryFieldsObject] }; };
proto.tflite.task.core.BaseOptions.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.core.BaseOptions.serializeBinaryToWriter); };
proto.tflite.task.core.BaseOptions.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeMessage(b, a, 1, proto.visionkit.ExternalFile, proto.visionkit.ExternalFile.serializeBinaryToWriter); jspb.internal.binary.writeMessage(b, a, 2, proto.acceleration.Acceleration, proto.acceleration.Acceleration.serializeBinaryToWriter); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.task.core.BaseOptions.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.core.BaseOptions, proto.tflite.task.core.BaseOptions.internalDoNotUse$proto$tflite$task$core$BaseOptions$getBinaryFieldsObject); };
proto.tflite.task.core.BaseOptions.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.core.BaseOptions.internalDoNotUse$proto$tflite$task$core$BaseOptions$getBinaryFieldsObject); };
proto.tflite.task.core.BaseOptions.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.core.BaseOptions, a); };
proto.tflite.task.core.BaseOptions.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.core.BaseOptions.fromObject = function (a) { var b = new proto.tflite.task.core.BaseOptions; a.modelFile && b.internal_setWrapperField(1, proto.visionkit.ExternalFile.fromObject(a.modelFile)); a.computeSettings && b.internal_setWrapperField(2, proto.acceleration.Acceleration.fromObject(a.computeSettings)); return b; });
proto.tflite.task.core.BaseOptions.prototype.toObject = function (a) { return proto.tflite.task.core.BaseOptions.internal_toObject(a, this); };
proto.tflite.task.core.BaseOptions.internal_toObject = function (a, b) { if (null != b) {
    var c = { modelFile: proto.visionkit.ExternalFile.internal_toObject(a, b.getModelFile()), computeSettings: proto.acceleration.Acceleration.internal_toObject(a, b.getComputeSettings()) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.task.core.FileDescriptorMeta = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.task.core.FileDescriptorMeta, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.core.FileDescriptorMeta.prototype.getFd = function () { return this.internal_getIntegerFieldWithDefault(1); };
proto.tflite.task.core.FileDescriptorMeta.prototype.setFd = function (a) { return this.internal_setField(1, a); };
proto.tflite.task.core.FileDescriptorMeta.prototype.clearFd = function () { return this.internal_clearField(1); };
proto.tflite.task.core.FileDescriptorMeta.prototype.hasFd = function () { return this.internal_hasField(1); };
proto.tflite.task.core.FileDescriptorMeta.prototype.getLength = function () { return this.internal_getIntegerFieldWithDefault(2); };
proto.tflite.task.core.FileDescriptorMeta.prototype.setLength = function (a) { return this.internal_setField(2, a); };
proto.tflite.task.core.FileDescriptorMeta.prototype.clearLength = function () { return this.internal_clearField(2); };
proto.tflite.task.core.FileDescriptorMeta.prototype.hasLength = function () { return this.internal_hasField(2); };
proto.tflite.task.core.FileDescriptorMeta.prototype.getOffset = function () { return this.internal_getIntegerFieldWithDefault(3); };
proto.tflite.task.core.FileDescriptorMeta.prototype.setOffset = function (a) { return this.internal_setField(3, a); };
proto.tflite.task.core.FileDescriptorMeta.prototype.clearOffset = function () { return this.internal_clearField(3); };
proto.tflite.task.core.FileDescriptorMeta.prototype.hasOffset = function () { return this.internal_hasField(3); };
proto.tflite.task.core.FileDescriptorMeta.internalDoNotUse$proto$tflite$task$core$FileDescriptorMeta$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readInt32, 2: jspb.internal.binary.readInt64, 3: jspb.internal.binary.readInt64 }; };
proto.tflite.task.core.FileDescriptorMeta.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.core.FileDescriptorMeta.serializeBinaryToWriter); };
proto.tflite.task.core.FileDescriptorMeta.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeInt32(b, a, 1); jspb.internal.binary.writeInt64(b, a, 2); jspb.internal.binary.writeInt64(b, a, 3); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.task.core.FileDescriptorMeta.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.core.FileDescriptorMeta, proto.tflite.task.core.FileDescriptorMeta.internalDoNotUse$proto$tflite$task$core$FileDescriptorMeta$getBinaryFieldsObject); };
proto.tflite.task.core.FileDescriptorMeta.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.core.FileDescriptorMeta.internalDoNotUse$proto$tflite$task$core$FileDescriptorMeta$getBinaryFieldsObject); };
proto.tflite.task.core.FileDescriptorMeta.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.core.FileDescriptorMeta, a); };
proto.tflite.task.core.FileDescriptorMeta.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.core.FileDescriptorMeta.fromObject = function (a) { var b = new proto.tflite.task.core.FileDescriptorMeta; null != a.fd && b.internal_setField(1, a.fd); null != a.length && b.internal_setField(2, a.length); null != a.offset && b.internal_setField(3, a.offset); return b; });
proto.tflite.task.core.FileDescriptorMeta.prototype.toObject = function (a) { return proto.tflite.task.core.FileDescriptorMeta.internal_toObject(a, this); };
proto.tflite.task.core.FileDescriptorMeta.internal_toObject = function (a, b) { if (null != b) {
    var c = { fd: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), length: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)), offset: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(3)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.task.core.ExternalFile = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.task.core.ExternalFile, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.core.ExternalFile.prototype.getFileName = function () { return this.internal_getStringFieldWithDefault(1); };
proto.tflite.task.core.ExternalFile.prototype.setFileName = function (a) { return this.internal_setField(1, a); };
proto.tflite.task.core.ExternalFile.prototype.clearFileName = function () { return this.internal_clearField(1); };
proto.tflite.task.core.ExternalFile.prototype.hasFileName = function () { return this.internal_hasField(1); };
proto.tflite.task.core.ExternalFile.prototype.getFileContent = function () { return this.internal_getStringFieldWithDefault(2); };
proto.tflite.task.core.ExternalFile.prototype.getFileContent_asB64 = function () { return module$contents$jspb$internal_bytesAsB64(this.getFileContent()); };
proto.tflite.task.core.ExternalFile.prototype.getFileContent_asU8 = function () { return module$contents$jspb$internal_bytesAsU8(this.getFileContent()); };
proto.tflite.task.core.ExternalFile.prototype.setFileContent = function (a) { return this.internal_setField(2, a); };
proto.tflite.task.core.ExternalFile.prototype.clearFileContent = function () { return this.internal_clearField(2); };
proto.tflite.task.core.ExternalFile.prototype.hasFileContent = function () { return this.internal_hasField(2); };
proto.tflite.task.core.ExternalFile.prototype.getFileDescriptorMeta = function () { return this.internal_getWrapperField(proto.tflite.task.core.FileDescriptorMeta, 4); };
proto.tflite.task.core.ExternalFile.prototype.setFileDescriptorMeta = function (a) { return this.internal_setWrapperField(4, a); };
proto.tflite.task.core.ExternalFile.prototype.clearFileDescriptorMeta = function () { return this.internal_clearWrapperField(4); };
proto.tflite.task.core.ExternalFile.prototype.hasFileDescriptorMeta = function () { return this.internal_hasField(4); };
proto.tflite.task.core.ExternalFile.internalDoNotUse$proto$tflite$task$core$ExternalFile$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readString, 2: jspb.internal.binary.readBytes, 4: [jspb.internal.binary.readMessage, proto.tflite.task.core.FileDescriptorMeta, proto.tflite.task.core.FileDescriptorMeta.internalDoNotUse$proto$tflite$task$core$FileDescriptorMeta$getBinaryFieldsObject] }; };
proto.tflite.task.core.ExternalFile.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.core.ExternalFile.serializeBinaryToWriter); };
proto.tflite.task.core.ExternalFile.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeString(b, a, 1); jspb.internal.binary.writeBytes(b, a, 2); jspb.internal.binary.writeMessage(b, a, 4, proto.tflite.task.core.FileDescriptorMeta, proto.tflite.task.core.FileDescriptorMeta.serializeBinaryToWriter); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.task.core.ExternalFile.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.core.ExternalFile, proto.tflite.task.core.ExternalFile.internalDoNotUse$proto$tflite$task$core$ExternalFile$getBinaryFieldsObject); };
proto.tflite.task.core.ExternalFile.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.core.ExternalFile.internalDoNotUse$proto$tflite$task$core$ExternalFile$getBinaryFieldsObject); };
proto.tflite.task.core.ExternalFile.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.core.ExternalFile, a); };
proto.tflite.task.core.ExternalFile.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.core.ExternalFile.fromObject = function (a) { var b = new proto.tflite.task.core.ExternalFile; null != a.fileName && b.internal_setField(1, a.fileName); null != a.fileContent && b.internal_setField(2, a.fileContent); a.fileDescriptorMeta && b.internal_setWrapperField(4, proto.tflite.task.core.FileDescriptorMeta.fromObject(a.fileDescriptorMeta)); return b; });
proto.tflite.task.core.ExternalFile.prototype.toObject = function (a) { return proto.tflite.task.core.ExternalFile.internal_toObject(a, this); };
proto.tflite.task.core.ExternalFile.internal_toObject = function (a, b) { if (null != b) {
    var c = { fileName: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), fileContent: b.getFileContent_asB64(), fileDescriptorMeta: proto.tflite.task.core.FileDescriptorMeta.internal_toObject(a, b.getFileDescriptorMeta()) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.task.text = {};
proto.tflite.task.text.BertNLClassifierOptions = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.task.text.BertNLClassifierOptions, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.text.BertNLClassifierOptions.prototype.getBaseOptions = function () { return this.internal_getWrapperField(proto.tflite.task.core.BaseOptions, 1); };
proto.tflite.task.text.BertNLClassifierOptions.prototype.setBaseOptions = function (a) { return this.internal_setWrapperField(1, a); };
proto.tflite.task.text.BertNLClassifierOptions.prototype.clearBaseOptions = function () { return this.internal_clearWrapperField(1); };
proto.tflite.task.text.BertNLClassifierOptions.prototype.hasBaseOptions = function () { return this.internal_hasField(1); };
proto.tflite.task.text.BertNLClassifierOptions.prototype.getMaxSeqLen = function () { return this.internal_getIntegerFieldWithDefault(2, 128); };
proto.tflite.task.text.BertNLClassifierOptions.prototype.setMaxSeqLen = function (a) { return this.internal_setField(2, a); };
proto.tflite.task.text.BertNLClassifierOptions.prototype.clearMaxSeqLen = function () { return this.internal_clearField(2); };
proto.tflite.task.text.BertNLClassifierOptions.prototype.hasMaxSeqLen = function () { return this.internal_hasField(2); };
proto.tflite.task.text.BertNLClassifierOptions.internalDoNotUse$proto$tflite$task$text$BertNLClassifierOptions$getBinaryFieldsObject = function () { return { 1: [jspb.internal.binary.readMessage, proto.tflite.task.core.BaseOptions, proto.tflite.task.core.BaseOptions.internalDoNotUse$proto$tflite$task$core$BaseOptions$getBinaryFieldsObject], 2: jspb.internal.binary.readInt32 }; };
proto.tflite.task.text.BertNLClassifierOptions.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.text.BertNLClassifierOptions.serializeBinaryToWriter); };
proto.tflite.task.text.BertNLClassifierOptions.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeMessage(b, a, 1, proto.tflite.task.core.BaseOptions, proto.tflite.task.core.BaseOptions.serializeBinaryToWriter); jspb.internal.binary.writeInt32(b, a, 2); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.task.text.BertNLClassifierOptions.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.text.BertNLClassifierOptions, proto.tflite.task.text.BertNLClassifierOptions.internalDoNotUse$proto$tflite$task$text$BertNLClassifierOptions$getBinaryFieldsObject); };
proto.tflite.task.text.BertNLClassifierOptions.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.text.BertNLClassifierOptions.internalDoNotUse$proto$tflite$task$text$BertNLClassifierOptions$getBinaryFieldsObject); };
proto.tflite.task.text.BertNLClassifierOptions.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.text.BertNLClassifierOptions, a); };
proto.tflite.task.text.BertNLClassifierOptions.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.text.BertNLClassifierOptions.fromObject = function (a) { var b = new proto.tflite.task.text.BertNLClassifierOptions; a.baseOptions && b.internal_setWrapperField(1, proto.tflite.task.core.BaseOptions.fromObject(a.baseOptions)); null != a.maxSeqLen && b.internal_setField(2, a.maxSeqLen); return b; });
proto.tflite.task.text.BertNLClassifierOptions.prototype.toObject = function (a) { return proto.tflite.task.text.BertNLClassifierOptions.internal_toObject(a, this); };
proto.tflite.task.text.BertNLClassifierOptions.internal_toObject = function (a, b) { if (null != b) {
    var c = { baseOptions: proto.tflite.task.core.BaseOptions.internal_toObject(a, b.getBaseOptions()), maxSeqLen: b.internal_getIntegerFieldWithDefault(2, 128) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.task.vision = {};
proto.tflite.task.vision.BoundingBox = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.task.vision.BoundingBox, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.vision.BoundingBox.prototype.getOriginX = function () { return this.internal_getIntegerFieldWithDefault(1); };
proto.tflite.task.vision.BoundingBox.prototype.setOriginX = function (a) { return this.internal_setField(1, a); };
proto.tflite.task.vision.BoundingBox.prototype.clearOriginX = function () { return this.internal_clearField(1); };
proto.tflite.task.vision.BoundingBox.prototype.hasOriginX = function () { return this.internal_hasField(1); };
proto.tflite.task.vision.BoundingBox.prototype.getOriginY = function () { return this.internal_getIntegerFieldWithDefault(2); };
proto.tflite.task.vision.BoundingBox.prototype.setOriginY = function (a) { return this.internal_setField(2, a); };
proto.tflite.task.vision.BoundingBox.prototype.clearOriginY = function () { return this.internal_clearField(2); };
proto.tflite.task.vision.BoundingBox.prototype.hasOriginY = function () { return this.internal_hasField(2); };
proto.tflite.task.vision.BoundingBox.prototype.getWidth = function () { return this.internal_getIntegerFieldWithDefault(3); };
proto.tflite.task.vision.BoundingBox.prototype.setWidth = function (a) { return this.internal_setField(3, a); };
proto.tflite.task.vision.BoundingBox.prototype.clearWidth = function () { return this.internal_clearField(3); };
proto.tflite.task.vision.BoundingBox.prototype.hasWidth = function () { return this.internal_hasField(3); };
proto.tflite.task.vision.BoundingBox.prototype.getHeight = function () { return this.internal_getIntegerFieldWithDefault(4); };
proto.tflite.task.vision.BoundingBox.prototype.setHeight = function (a) { return this.internal_setField(4, a); };
proto.tflite.task.vision.BoundingBox.prototype.clearHeight = function () { return this.internal_clearField(4); };
proto.tflite.task.vision.BoundingBox.prototype.hasHeight = function () { return this.internal_hasField(4); };
proto.tflite.task.vision.BoundingBox.internalDoNotUse$proto$tflite$task$vision$BoundingBox$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readInt32, 2: jspb.internal.binary.readInt32, 3: jspb.internal.binary.readInt32, 4: jspb.internal.binary.readInt32 }; };
proto.tflite.task.vision.BoundingBox.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.vision.BoundingBox.serializeBinaryToWriter); };
proto.tflite.task.vision.BoundingBox.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeInt32(b, a, 1); jspb.internal.binary.writeInt32(b, a, 2); jspb.internal.binary.writeInt32(b, a, 3); jspb.internal.binary.writeInt32(b, a, 4); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.task.vision.BoundingBox.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.vision.BoundingBox, proto.tflite.task.vision.BoundingBox.internalDoNotUse$proto$tflite$task$vision$BoundingBox$getBinaryFieldsObject); };
proto.tflite.task.vision.BoundingBox.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.vision.BoundingBox.internalDoNotUse$proto$tflite$task$vision$BoundingBox$getBinaryFieldsObject); };
proto.tflite.task.vision.BoundingBox.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.vision.BoundingBox, a); };
proto.tflite.task.vision.BoundingBox.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.vision.BoundingBox.fromObject = function (a) { var b = new proto.tflite.task.vision.BoundingBox; null != a.originX && b.internal_setField(1, a.originX); null != a.originY && b.internal_setField(2, a.originY); null != a.width && b.internal_setField(3, a.width); null != a.height && b.internal_setField(4, a.height); return b; });
proto.tflite.task.vision.BoundingBox.prototype.toObject = function (a) { return proto.tflite.task.vision.BoundingBox.internal_toObject(a, this); };
proto.tflite.task.vision.BoundingBox.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { originX: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), originY: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)), width: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(3)), height: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(4)) };
        a && (c.$jspbMessageInstance =
            b);
        return c;
    }
};
proto.tflite.task.vision.Class = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.task.vision.Class, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.vision.Class.prototype.getIndex = function () { return this.internal_getIntegerFieldWithDefault(1); };
proto.tflite.task.vision.Class.prototype.setIndex = function (a) { return this.internal_setField(1, a); };
proto.tflite.task.vision.Class.prototype.clearIndex = function () { return this.internal_clearField(1); };
proto.tflite.task.vision.Class.prototype.hasIndex = function () { return this.internal_hasField(1); };
proto.tflite.task.vision.Class.prototype.getScore = function () { return this.internal_getFloatingPointFieldWithDefault(2); };
proto.tflite.task.vision.Class.prototype.setScore = function (a) { return this.internal_setField(2, a); };
proto.tflite.task.vision.Class.prototype.clearScore = function () { return this.internal_clearField(2); };
proto.tflite.task.vision.Class.prototype.hasScore = function () { return this.internal_hasField(2); };
proto.tflite.task.vision.Class.prototype.getDisplayName = function () { return this.internal_getStringFieldWithDefault(3); };
proto.tflite.task.vision.Class.prototype.setDisplayName = function (a) { return this.internal_setField(3, a); };
proto.tflite.task.vision.Class.prototype.clearDisplayName = function () { return this.internal_clearField(3); };
proto.tflite.task.vision.Class.prototype.hasDisplayName = function () { return this.internal_hasField(3); };
proto.tflite.task.vision.Class.prototype.getClassName = function () { return this.internal_getStringFieldWithDefault(4); };
proto.tflite.task.vision.Class.prototype.setClassName = function (a) { return this.internal_setField(4, a); };
proto.tflite.task.vision.Class.prototype.clearClassName = function () { return this.internal_clearField(4); };
proto.tflite.task.vision.Class.prototype.hasClassName = function () { return this.internal_hasField(4); };
proto.tflite.task.vision.Class.internalDoNotUse$proto$tflite$task$vision$Class$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readInt32, 2: jspb.internal.binary.readFloat, 3: jspb.internal.binary.readString, 4: jspb.internal.binary.readString }; };
proto.tflite.task.vision.Class.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.vision.Class.serializeBinaryToWriter); };
proto.tflite.task.vision.Class.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeInt32(b, a, 1); jspb.internal.binary.writeFloat(b, a, 2); jspb.internal.binary.writeString(b, a, 3); jspb.internal.binary.writeString(b, a, 4); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.task.vision.Class.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.vision.Class, proto.tflite.task.vision.Class.internalDoNotUse$proto$tflite$task$vision$Class$getBinaryFieldsObject); };
proto.tflite.task.vision.Class.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.vision.Class.internalDoNotUse$proto$tflite$task$vision$Class$getBinaryFieldsObject); };
proto.tflite.task.vision.Class.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.vision.Class, a); };
proto.tflite.task.vision.Class.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.vision.Class.fromObject = function (a) { var b = new proto.tflite.task.vision.Class; null != a.index && b.internal_setField(1, a.index); null != a.score && b.internal_setField(2, a.score); null != a.displayName && b.internal_setField(3, a.displayName); null != a.className && b.internal_setField(4, a.className); return b; });
proto.tflite.task.vision.Class.prototype.toObject = function (a) { return proto.tflite.task.vision.Class.internal_toObject(a, this); };
proto.tflite.task.vision.Class.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { index: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), score: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getFloatingPointField(2)), displayName: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(3)), className: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(4)) };
        a && (c.$jspbMessageInstance =
            b);
        return c;
    }
};
proto.tflite.task.vision.Classifications = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a, -1, proto.tflite.task.vision.Classifications.repeatedFields_); };
$jscomp.inherits(proto.tflite.task.vision.Classifications, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.vision.Classifications.prototype.getClassesList = function () { return this.internal_getRepeatedWrapperField(proto.tflite.task.vision.Class, 1); };
proto.tflite.task.vision.Classifications.prototype.setClassesList = function (a) { return this.internal_setRepeatedWrapperField(1, a); };
proto.tflite.task.vision.Classifications.prototype.addClasses = function (a, b) { return this.internal_addToRepeatedWrapperField(1, a, proto.tflite.task.vision.Class, b); };
proto.tflite.task.vision.Classifications.prototype.addAndReturnClasses = function (a, b) { return this.internal_addAndReturnRepeatedWrapperField(1, a, proto.tflite.task.vision.Class, b); };
proto.tflite.task.vision.Classifications.prototype.clearClassesList = function () { return this.internal_clearRepeatedWrapperField(1); };
proto.tflite.task.vision.Classifications.prototype.getHeadIndex = function () { return this.internal_getIntegerFieldWithDefault(2); };
proto.tflite.task.vision.Classifications.prototype.setHeadIndex = function (a) { return this.internal_setField(2, a); };
proto.tflite.task.vision.Classifications.prototype.clearHeadIndex = function () { return this.internal_clearField(2); };
proto.tflite.task.vision.Classifications.prototype.hasHeadIndex = function () { return this.internal_hasField(2); };
proto.tflite.task.vision.Classifications.internalDoNotUse$proto$tflite$task$vision$Classifications$getBinaryFieldsObject = function () { return { 1: [jspb.internal.binary.readRepeatedMessage, proto.tflite.task.vision.Class, proto.tflite.task.vision.Class.internalDoNotUse$proto$tflite$task$vision$Class$getBinaryFieldsObject], 2: jspb.internal.binary.readInt32 }; };
proto.tflite.task.vision.Classifications.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.vision.Classifications.serializeBinaryToWriter); };
proto.tflite.task.vision.Classifications.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeRepeatedMessage(b, a, 1, proto.tflite.task.vision.Class, proto.tflite.task.vision.Class.serializeBinaryToWriter); jspb.internal.binary.writeInt32(b, a, 2); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.task.vision.Classifications.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.vision.Classifications, proto.tflite.task.vision.Classifications.internalDoNotUse$proto$tflite$task$vision$Classifications$getBinaryFieldsObject); };
proto.tflite.task.vision.Classifications.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.vision.Classifications.internalDoNotUse$proto$tflite$task$vision$Classifications$getBinaryFieldsObject); };
proto.tflite.task.vision.Classifications.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.vision.Classifications, a); };
proto.tflite.task.vision.Classifications.repeatedFields_ = [1];
proto.tflite.task.vision.Classifications.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.vision.Classifications.fromObject = function (a) { var b = new proto.tflite.task.vision.Classifications; a.classesList && b.internal_setRepeatedWrapperField(1, a.classesList.map(proto.tflite.task.vision.Class.fromObject)); null != a.headIndex && b.internal_setField(2, a.headIndex); return b; });
proto.tflite.task.vision.Classifications.prototype.toObject = function (a) { return proto.tflite.task.vision.Classifications.internal_toObject(a, this); };
proto.tflite.task.vision.Classifications.internal_toObject = function (a, b) { if (null != b) {
    var c = { classesList: module$contents$jspb$internal$public_for_gencode_toObjectList(b.getClassesList(), proto.tflite.task.vision.Class.internal_toObject, a), headIndex: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.task.vision.ClassificationResult = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a, -1, proto.tflite.task.vision.ClassificationResult.repeatedFields_); };
$jscomp.inherits(proto.tflite.task.vision.ClassificationResult, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.vision.ClassificationResult.prototype.getClassificationsList = function () { return this.internal_getRepeatedWrapperField(proto.tflite.task.vision.Classifications, 1); };
proto.tflite.task.vision.ClassificationResult.prototype.setClassificationsList = function (a) { return this.internal_setRepeatedWrapperField(1, a); };
proto.tflite.task.vision.ClassificationResult.prototype.addClassifications = function (a, b) { return this.internal_addToRepeatedWrapperField(1, a, proto.tflite.task.vision.Classifications, b); };
proto.tflite.task.vision.ClassificationResult.prototype.addAndReturnClassifications = function (a, b) { return this.internal_addAndReturnRepeatedWrapperField(1, a, proto.tflite.task.vision.Classifications, b); };
proto.tflite.task.vision.ClassificationResult.prototype.clearClassificationsList = function () { return this.internal_clearRepeatedWrapperField(1); };
proto.tflite.task.vision.ClassificationResult.internalDoNotUse$proto$tflite$task$vision$ClassificationResult$getBinaryFieldsObject = function () { return { 1: [jspb.internal.binary.readRepeatedMessage, proto.tflite.task.vision.Classifications, proto.tflite.task.vision.Classifications.internalDoNotUse$proto$tflite$task$vision$Classifications$getBinaryFieldsObject] }; };
proto.tflite.task.vision.ClassificationResult.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.vision.ClassificationResult.serializeBinaryToWriter); };
proto.tflite.task.vision.ClassificationResult.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeRepeatedMessage(b, a, 1, proto.tflite.task.vision.Classifications, proto.tflite.task.vision.Classifications.serializeBinaryToWriter); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.task.vision.ClassificationResult.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.vision.ClassificationResult, proto.tflite.task.vision.ClassificationResult.internalDoNotUse$proto$tflite$task$vision$ClassificationResult$getBinaryFieldsObject); };
proto.tflite.task.vision.ClassificationResult.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.vision.ClassificationResult.internalDoNotUse$proto$tflite$task$vision$ClassificationResult$getBinaryFieldsObject); };
proto.tflite.task.vision.ClassificationResult.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.vision.ClassificationResult, a); };
proto.tflite.task.vision.ClassificationResult.repeatedFields_ = [1];
proto.tflite.task.vision.ClassificationResult.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.vision.ClassificationResult.fromObject = function (a) { var b = new proto.tflite.task.vision.ClassificationResult; a.classificationsList && b.internal_setRepeatedWrapperField(1, a.classificationsList.map(proto.tflite.task.vision.Classifications.fromObject)); return b; });
proto.tflite.task.vision.ClassificationResult.prototype.toObject = function (a) { return proto.tflite.task.vision.ClassificationResult.internal_toObject(a, this); };
proto.tflite.task.vision.ClassificationResult.internal_toObject = function (a, b) { if (null != b) {
    var c = { classificationsList: module$contents$jspb$internal$public_for_gencode_toObjectList(b.getClassificationsList(), proto.tflite.task.vision.Classifications.internal_toObject, a) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.task.vision.Detection = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a, -1, proto.tflite.task.vision.Detection.repeatedFields_); };
$jscomp.inherits(proto.tflite.task.vision.Detection, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.vision.Detection.prototype.getBoundingBox = function () { return this.internal_getWrapperField(proto.tflite.task.vision.BoundingBox, 2); };
proto.tflite.task.vision.Detection.prototype.setBoundingBox = function (a) { return this.internal_setWrapperField(2, a); };
proto.tflite.task.vision.Detection.prototype.clearBoundingBox = function () { return this.internal_clearWrapperField(2); };
proto.tflite.task.vision.Detection.prototype.hasBoundingBox = function () { return this.internal_hasField(2); };
proto.tflite.task.vision.Detection.prototype.getClassesList = function () { return this.internal_getRepeatedWrapperField(proto.tflite.task.vision.Class, 3); };
proto.tflite.task.vision.Detection.prototype.setClassesList = function (a) { return this.internal_setRepeatedWrapperField(3, a); };
proto.tflite.task.vision.Detection.prototype.addClasses = function (a, b) { return this.internal_addToRepeatedWrapperField(3, a, proto.tflite.task.vision.Class, b); };
proto.tflite.task.vision.Detection.prototype.addAndReturnClasses = function (a, b) { return this.internal_addAndReturnRepeatedWrapperField(3, a, proto.tflite.task.vision.Class, b); };
proto.tflite.task.vision.Detection.prototype.clearClassesList = function () { return this.internal_clearRepeatedWrapperField(3); };
proto.tflite.task.vision.Detection.internalDoNotUse$proto$tflite$task$vision$Detection$getBinaryFieldsObject = function () { return { 2: [jspb.internal.binary.readMessage, proto.tflite.task.vision.BoundingBox, proto.tflite.task.vision.BoundingBox.internalDoNotUse$proto$tflite$task$vision$BoundingBox$getBinaryFieldsObject], 3: [jspb.internal.binary.readRepeatedMessage, proto.tflite.task.vision.Class, proto.tflite.task.vision.Class.internalDoNotUse$proto$tflite$task$vision$Class$getBinaryFieldsObject] }; };
proto.tflite.task.vision.Detection.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.vision.Detection.serializeBinaryToWriter); };
proto.tflite.task.vision.Detection.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeMessage(b, a, 2, proto.tflite.task.vision.BoundingBox, proto.tflite.task.vision.BoundingBox.serializeBinaryToWriter); jspb.internal.binary.writeRepeatedMessage(b, a, 3, proto.tflite.task.vision.Class, proto.tflite.task.vision.Class.serializeBinaryToWriter); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.task.vision.Detection.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.vision.Detection, proto.tflite.task.vision.Detection.internalDoNotUse$proto$tflite$task$vision$Detection$getBinaryFieldsObject); };
proto.tflite.task.vision.Detection.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.vision.Detection.internalDoNotUse$proto$tflite$task$vision$Detection$getBinaryFieldsObject); };
proto.tflite.task.vision.Detection.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.vision.Detection, a); };
proto.tflite.task.vision.Detection.repeatedFields_ = [3];
proto.tflite.task.vision.Detection.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.vision.Detection.fromObject = function (a) { var b = new proto.tflite.task.vision.Detection; a.boundingBox && b.internal_setWrapperField(2, proto.tflite.task.vision.BoundingBox.fromObject(a.boundingBox)); a.classesList && b.internal_setRepeatedWrapperField(3, a.classesList.map(proto.tflite.task.vision.Class.fromObject)); return b; });
proto.tflite.task.vision.Detection.prototype.toObject = function (a) { return proto.tflite.task.vision.Detection.internal_toObject(a, this); };
proto.tflite.task.vision.Detection.internal_toObject = function (a, b) { if (null != b) {
    var c = { boundingBox: proto.tflite.task.vision.BoundingBox.internal_toObject(a, b.getBoundingBox()), classesList: module$contents$jspb$internal$public_for_gencode_toObjectList(b.getClassesList(), proto.tflite.task.vision.Class.internal_toObject, a) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.task.vision.DetectionResult = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a, -1, proto.tflite.task.vision.DetectionResult.repeatedFields_); };
$jscomp.inherits(proto.tflite.task.vision.DetectionResult, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.vision.DetectionResult.prototype.getDetectionsList = function () { return this.internal_getRepeatedWrapperField(proto.tflite.task.vision.Detection, 1); };
proto.tflite.task.vision.DetectionResult.prototype.setDetectionsList = function (a) { return this.internal_setRepeatedWrapperField(1, a); };
proto.tflite.task.vision.DetectionResult.prototype.addDetections = function (a, b) { return this.internal_addToRepeatedWrapperField(1, a, proto.tflite.task.vision.Detection, b); };
proto.tflite.task.vision.DetectionResult.prototype.addAndReturnDetections = function (a, b) { return this.internal_addAndReturnRepeatedWrapperField(1, a, proto.tflite.task.vision.Detection, b); };
proto.tflite.task.vision.DetectionResult.prototype.clearDetectionsList = function () { return this.internal_clearRepeatedWrapperField(1); };
proto.tflite.task.vision.DetectionResult.internalDoNotUse$proto$tflite$task$vision$DetectionResult$getBinaryFieldsObject = function () { return { 1: [jspb.internal.binary.readRepeatedMessage, proto.tflite.task.vision.Detection, proto.tflite.task.vision.Detection.internalDoNotUse$proto$tflite$task$vision$Detection$getBinaryFieldsObject] }; };
proto.tflite.task.vision.DetectionResult.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.vision.DetectionResult.serializeBinaryToWriter); };
proto.tflite.task.vision.DetectionResult.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeRepeatedMessage(b, a, 1, proto.tflite.task.vision.Detection, proto.tflite.task.vision.Detection.serializeBinaryToWriter); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.task.vision.DetectionResult.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.vision.DetectionResult, proto.tflite.task.vision.DetectionResult.internalDoNotUse$proto$tflite$task$vision$DetectionResult$getBinaryFieldsObject); };
proto.tflite.task.vision.DetectionResult.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.vision.DetectionResult.internalDoNotUse$proto$tflite$task$vision$DetectionResult$getBinaryFieldsObject); };
proto.tflite.task.vision.DetectionResult.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.vision.DetectionResult, a); };
proto.tflite.task.vision.DetectionResult.repeatedFields_ = [1];
proto.tflite.task.vision.DetectionResult.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.vision.DetectionResult.fromObject = function (a) { var b = new proto.tflite.task.vision.DetectionResult; a.detectionsList && b.internal_setRepeatedWrapperField(1, a.detectionsList.map(proto.tflite.task.vision.Detection.fromObject)); return b; });
proto.tflite.task.vision.DetectionResult.prototype.toObject = function (a) { return proto.tflite.task.vision.DetectionResult.internal_toObject(a, this); };
proto.tflite.task.vision.DetectionResult.internal_toObject = function (a, b) { if (null != b) {
    var c = { detectionsList: module$contents$jspb$internal$public_for_gencode_toObjectList(b.getDetectionsList(), proto.tflite.task.vision.Detection.internal_toObject, a) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.task.vision.ImageClassifierOptions = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a, -1, proto.tflite.task.vision.ImageClassifierOptions.repeatedFields_); };
$jscomp.inherits(proto.tflite.task.vision.ImageClassifierOptions, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.vision.ImageClassifierOptions.prototype.getBaseOptions = function () { return this.internal_getWrapperField(proto.tflite.task.core.BaseOptions, 14); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.setBaseOptions = function (a) { return this.internal_setWrapperField(14, a); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.clearBaseOptions = function () { return this.internal_clearWrapperField(14); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.hasBaseOptions = function () { return this.internal_hasField(14); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.getModelFileWithMetadata = function () { return this.internal_getWrapperField(proto.tflite.task.core.ExternalFile, 10); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.setModelFileWithMetadata = function (a) { return this.internal_setWrapperField(10, a); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.clearModelFileWithMetadata = function () { return this.internal_clearWrapperField(10); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.hasModelFileWithMetadata = function () { return this.internal_hasField(10); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.getDisplayNamesLocale = function () { return this.internal_getStringFieldWithDefault(11, "en"); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.setDisplayNamesLocale = function (a) { return this.internal_setField(11, a); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.clearDisplayNamesLocale = function () { return this.internal_clearField(11); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.hasDisplayNamesLocale = function () { return this.internal_hasField(11); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.getMaxResults = function () { return this.internal_getIntegerFieldWithDefault(2, -1); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.setMaxResults = function (a) { return this.internal_setField(2, a); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.clearMaxResults = function () { return this.internal_clearField(2); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.hasMaxResults = function () { return this.internal_hasField(2); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.getScoreThreshold = function () { return this.internal_getFloatingPointFieldWithDefault(3); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.setScoreThreshold = function (a) { return this.internal_setField(3, a); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.clearScoreThreshold = function () { return this.internal_clearField(3); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.hasScoreThreshold = function () { return this.internal_hasField(3); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.getClassNameWhitelistList = function () { return this.internal_getRepeatedField(4); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.setClassNameWhitelistList = function (a) { return this.internal_setRepeatedField(4, a); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.addClassNameWhitelist = function (a, b) { return this.internal_addToRepeatedField(4, a, b); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.clearClassNameWhitelistList = function () { return this.internal_clearRepeatedField(4); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.getClassNameBlacklistList = function () { return this.internal_getRepeatedField(5); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.setClassNameBlacklistList = function (a) { return this.internal_setRepeatedField(5, a); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.addClassNameBlacklist = function (a, b) { return this.internal_addToRepeatedField(5, a, b); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.clearClassNameBlacklistList = function () { return this.internal_clearRepeatedField(5); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.getNumThreads = function () { return this.internal_getIntegerFieldWithDefault(13, -1); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.setNumThreads = function (a) { return this.internal_setField(13, a); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.clearNumThreads = function () { return this.internal_clearField(13); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.hasNumThreads = function () { return this.internal_hasField(13); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.getComputeSettings = function () { return this.internal_getWrapperField(proto.tflite.proto.ComputeSettings, 9); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.setComputeSettings = function (a) { return this.internal_setWrapperField(9, a); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.clearComputeSettings = function () { return this.internal_clearWrapperField(9); };
proto.tflite.task.vision.ImageClassifierOptions.prototype.hasComputeSettings = function () { return this.internal_hasField(9); };
proto.tflite.task.vision.ImageClassifierOptions.internalDoNotUse$proto$tflite$task$vision$ImageClassifierOptions$getBinaryFieldsObject = function () {
    return { 14: [jspb.internal.binary.readMessage, proto.tflite.task.core.BaseOptions, proto.tflite.task.core.BaseOptions.internalDoNotUse$proto$tflite$task$core$BaseOptions$getBinaryFieldsObject], 10: [jspb.internal.binary.readMessage, proto.tflite.task.core.ExternalFile, proto.tflite.task.core.ExternalFile.internalDoNotUse$proto$tflite$task$core$ExternalFile$getBinaryFieldsObject],
        11: jspb.internal.binary.readString, 2: jspb.internal.binary.readInt32, 3: jspb.internal.binary.readFloat, 4: jspb.internal.binary.readRepeatedString, 5: jspb.internal.binary.readRepeatedString, 13: jspb.internal.binary.readInt32, 9: [jspb.internal.binary.readMessage, proto.tflite.proto.ComputeSettings, proto.tflite.proto.ComputeSettings.internalDoNotUse$proto$tflite$proto$ComputeSettings$getBinaryFieldsObject] };
};
proto.tflite.task.vision.ImageClassifierOptions.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.vision.ImageClassifierOptions.serializeBinaryToWriter); };
proto.tflite.task.vision.ImageClassifierOptions.serializeBinaryToWriter = function (a, b) {
    jspb.internal.binary.writeMessage(b, a, 14, proto.tflite.task.core.BaseOptions, proto.tflite.task.core.BaseOptions.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 10, proto.tflite.task.core.ExternalFile, proto.tflite.task.core.ExternalFile.serializeBinaryToWriter);
    jspb.internal.binary.writeString(b, a, 11);
    jspb.internal.binary.writeInt32(b, a, 2);
    jspb.internal.binary.writeFloat(b, a, 3);
    jspb.internal.binary.writeRepeatedString(b, a, 4);
    jspb.internal.binary.writeRepeatedString(b, a, 5);
    jspb.internal.binary.writeInt32(b, a, 13);
    jspb.internal.binary.writeMessage(b, a, 9, proto.tflite.proto.ComputeSettings, proto.tflite.proto.ComputeSettings.serializeBinaryToWriter);
    jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b);
};
proto.tflite.task.vision.ImageClassifierOptions.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.vision.ImageClassifierOptions, proto.tflite.task.vision.ImageClassifierOptions.internalDoNotUse$proto$tflite$task$vision$ImageClassifierOptions$getBinaryFieldsObject); };
proto.tflite.task.vision.ImageClassifierOptions.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.vision.ImageClassifierOptions.internalDoNotUse$proto$tflite$task$vision$ImageClassifierOptions$getBinaryFieldsObject); };
proto.tflite.task.vision.ImageClassifierOptions.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.vision.ImageClassifierOptions, a); };
proto.tflite.task.vision.ImageClassifierOptions.repeatedFields_ = [4, 5];
proto.tflite.task.vision.ImageClassifierOptions.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.vision.ImageClassifierOptions.fromObject = function (a) {
    var b = new proto.tflite.task.vision.ImageClassifierOptions;
    a.baseOptions && b.internal_setWrapperField(14, proto.tflite.task.core.BaseOptions.fromObject(a.baseOptions));
    a.modelFileWithMetadata && b.internal_setWrapperField(10, proto.tflite.task.core.ExternalFile.fromObject(a.modelFileWithMetadata));
    null != a.displayNamesLocale && b.internal_setField(11, a.displayNamesLocale);
    null != a.maxResults && b.internal_setField(2, a.maxResults);
    null != a.scoreThreshold && b.internal_setField(3, a.scoreThreshold);
    null != a.classNameWhitelistList && b.internal_setRepeatedField(4, a.classNameWhitelistList);
    null != a.classNameBlacklistList && b.internal_setRepeatedField(5, a.classNameBlacklistList);
    null != a.numThreads && b.internal_setField(13, a.numThreads);
    a.computeSettings && b.internal_setWrapperField(9, proto.tflite.proto.ComputeSettings.fromObject(a.computeSettings));
    return b;
});
proto.tflite.task.vision.ImageClassifierOptions.prototype.toObject = function (a) { return proto.tflite.task.vision.ImageClassifierOptions.internal_toObject(a, this); };
proto.tflite.task.vision.ImageClassifierOptions.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { baseOptions: proto.tflite.task.core.BaseOptions.internal_toObject(a, b.getBaseOptions()), modelFileWithMetadata: proto.tflite.task.core.ExternalFile.internal_toObject(a, b.getModelFileWithMetadata()), displayNamesLocale: b.internal_getStringFieldWithDefault(11, "en"), maxResults: b.internal_getIntegerFieldWithDefault(2, -1), scoreThreshold: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getFloatingPointField(3)),
            classNameWhitelistList: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getRepeatedField(4)), classNameBlacklistList: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getRepeatedField(5)), numThreads: b.internal_getIntegerFieldWithDefault(13, -1), computeSettings: proto.tflite.proto.ComputeSettings.internal_toObject(a, b.getComputeSettings()) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.tflite.task.vision.ImageSegmenterOptions = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.task.vision.ImageSegmenterOptions, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.vision.ImageSegmenterOptions.prototype.getBaseOptions = function () { return this.internal_getWrapperField(proto.tflite.task.core.BaseOptions, 8); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.setBaseOptions = function (a) { return this.internal_setWrapperField(8, a); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.clearBaseOptions = function () { return this.internal_clearWrapperField(8); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.hasBaseOptions = function () { return this.internal_hasField(8); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.getModelFileWithMetadata = function () { return this.internal_getWrapperField(proto.tflite.task.core.ExternalFile, 5); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.setModelFileWithMetadata = function (a) { return this.internal_setWrapperField(5, a); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.clearModelFileWithMetadata = function () { return this.internal_clearWrapperField(5); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.hasModelFileWithMetadata = function () { return this.internal_hasField(5); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.getDisplayNamesLocale = function () { return this.internal_getStringFieldWithDefault(6, "en"); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.setDisplayNamesLocale = function (a) { return this.internal_setField(6, a); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.clearDisplayNamesLocale = function () { return this.internal_clearField(6); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.hasDisplayNamesLocale = function () { return this.internal_hasField(6); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.getOutputType = function () { return this.internal_getFieldWithDefault(3, 1); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.setOutputType = function (a) { return this.internal_setField(3, a); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.clearOutputType = function () { return this.internal_clearField(3); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.hasOutputType = function () { return this.internal_hasField(3); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.getNumThreads = function () { return this.internal_getIntegerFieldWithDefault(7, -1); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.setNumThreads = function (a) { return this.internal_setField(7, a); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.clearNumThreads = function () { return this.internal_clearField(7); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.hasNumThreads = function () { return this.internal_hasField(7); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.getComputeSettings = function () { return this.internal_getWrapperField(proto.tflite.proto.ComputeSettings, 4); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.setComputeSettings = function (a) { return this.internal_setWrapperField(4, a); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.clearComputeSettings = function () { return this.internal_clearWrapperField(4); };
proto.tflite.task.vision.ImageSegmenterOptions.prototype.hasComputeSettings = function () { return this.internal_hasField(4); };
proto.tflite.task.vision.ImageSegmenterOptions.internalDoNotUse$proto$tflite$task$vision$ImageSegmenterOptions$getBinaryFieldsObject = function () {
    return { 8: [jspb.internal.binary.readMessage, proto.tflite.task.core.BaseOptions, proto.tflite.task.core.BaseOptions.internalDoNotUse$proto$tflite$task$core$BaseOptions$getBinaryFieldsObject], 5: [jspb.internal.binary.readMessage, proto.tflite.task.core.ExternalFile, proto.tflite.task.core.ExternalFile.internalDoNotUse$proto$tflite$task$core$ExternalFile$getBinaryFieldsObject],
        6: jspb.internal.binary.readString, 3: jspb.internal.binary.readEnum, 7: jspb.internal.binary.readInt32, 4: [jspb.internal.binary.readMessage, proto.tflite.proto.ComputeSettings, proto.tflite.proto.ComputeSettings.internalDoNotUse$proto$tflite$proto$ComputeSettings$getBinaryFieldsObject] };
};
proto.tflite.task.vision.ImageSegmenterOptions.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.vision.ImageSegmenterOptions.serializeBinaryToWriter); };
proto.tflite.task.vision.ImageSegmenterOptions.serializeBinaryToWriter = function (a, b) {
    jspb.internal.binary.writeMessage(b, a, 8, proto.tflite.task.core.BaseOptions, proto.tflite.task.core.BaseOptions.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 5, proto.tflite.task.core.ExternalFile, proto.tflite.task.core.ExternalFile.serializeBinaryToWriter);
    jspb.internal.binary.writeString(b, a, 6);
    jspb.internal.binary.writeEnum(b, a, 3);
    jspb.internal.binary.writeInt32(b, a, 7);
    jspb.internal.binary.writeMessage(b, a, 4, proto.tflite.proto.ComputeSettings, proto.tflite.proto.ComputeSettings.serializeBinaryToWriter);
    jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b);
};
proto.tflite.task.vision.ImageSegmenterOptions.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.vision.ImageSegmenterOptions, proto.tflite.task.vision.ImageSegmenterOptions.internalDoNotUse$proto$tflite$task$vision$ImageSegmenterOptions$getBinaryFieldsObject); };
proto.tflite.task.vision.ImageSegmenterOptions.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.vision.ImageSegmenterOptions.internalDoNotUse$proto$tflite$task$vision$ImageSegmenterOptions$getBinaryFieldsObject); };
proto.tflite.task.vision.ImageSegmenterOptions.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.vision.ImageSegmenterOptions, a); };
proto.tflite.task.vision.ImageSegmenterOptions.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.vision.ImageSegmenterOptions.fromObject = function (a) {
    var b = new proto.tflite.task.vision.ImageSegmenterOptions;
    a.baseOptions && b.internal_setWrapperField(8, proto.tflite.task.core.BaseOptions.fromObject(a.baseOptions));
    a.modelFileWithMetadata && b.internal_setWrapperField(5, proto.tflite.task.core.ExternalFile.fromObject(a.modelFileWithMetadata));
    null != a.displayNamesLocale && b.internal_setField(6, a.displayNamesLocale);
    null != a.outputType && b.internal_setField(3, a.outputType);
    null != a.numThreads && b.internal_setField(7, a.numThreads);
    a.computeSettings && b.internal_setWrapperField(4, proto.tflite.proto.ComputeSettings.fromObject(a.computeSettings));
    return b;
});
proto.tflite.task.vision.ImageSegmenterOptions.prototype.toObject = function (a) { return proto.tflite.task.vision.ImageSegmenterOptions.internal_toObject(a, this); };
proto.tflite.task.vision.ImageSegmenterOptions.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { baseOptions: proto.tflite.task.core.BaseOptions.internal_toObject(a, b.getBaseOptions()), modelFileWithMetadata: proto.tflite.task.core.ExternalFile.internal_toObject(a, b.getModelFileWithMetadata()), displayNamesLocale: b.internal_getStringFieldWithDefault(6, "en"), outputType: b.internal_getFieldWithDefault(3, 1), numThreads: b.internal_getIntegerFieldWithDefault(7, -1), computeSettings: proto.tflite.proto.ComputeSettings.internal_toObject(a, b.getComputeSettings()) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.tflite.task.vision.ImageSegmenterOptions.OutputType = { UNSPECIFIED: 0, CATEGORY_MASK: 1, CONFIDENCE_MASK: 2 };
proto.tflite.task.vision.ObjectDetectorOptions = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a, -1, proto.tflite.task.vision.ObjectDetectorOptions.repeatedFields_); };
$jscomp.inherits(proto.tflite.task.vision.ObjectDetectorOptions, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.vision.ObjectDetectorOptions.prototype.getBaseOptions = function () { return this.internal_getWrapperField(proto.tflite.task.core.BaseOptions, 9); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.setBaseOptions = function (a) { return this.internal_setWrapperField(9, a); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.clearBaseOptions = function () { return this.internal_clearWrapperField(9); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.hasBaseOptions = function () { return this.internal_hasField(9); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.getModelFileWithMetadata = function () { return this.internal_getWrapperField(proto.tflite.task.core.ExternalFile, 1); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.setModelFileWithMetadata = function (a) { return this.internal_setWrapperField(1, a); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.clearModelFileWithMetadata = function () { return this.internal_clearWrapperField(1); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.hasModelFileWithMetadata = function () { return this.internal_hasField(1); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.getDisplayNamesLocale = function () { return this.internal_getStringFieldWithDefault(2, "en"); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.setDisplayNamesLocale = function (a) { return this.internal_setField(2, a); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.clearDisplayNamesLocale = function () { return this.internal_clearField(2); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.hasDisplayNamesLocale = function () { return this.internal_hasField(2); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.getMaxResults = function () { return this.internal_getIntegerFieldWithDefault(3, -1); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.setMaxResults = function (a) { return this.internal_setField(3, a); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.clearMaxResults = function () { return this.internal_clearField(3); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.hasMaxResults = function () { return this.internal_hasField(3); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.getScoreThreshold = function () { return this.internal_getFloatingPointFieldWithDefault(4); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.setScoreThreshold = function (a) { return this.internal_setField(4, a); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.clearScoreThreshold = function () { return this.internal_clearField(4); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.hasScoreThreshold = function () { return this.internal_hasField(4); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.getClassNameWhitelistList = function () { return this.internal_getRepeatedField(5); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.setClassNameWhitelistList = function (a) { return this.internal_setRepeatedField(5, a); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.addClassNameWhitelist = function (a, b) { return this.internal_addToRepeatedField(5, a, b); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.clearClassNameWhitelistList = function () { return this.internal_clearRepeatedField(5); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.getClassNameBlacklistList = function () { return this.internal_getRepeatedField(6); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.setClassNameBlacklistList = function (a) { return this.internal_setRepeatedField(6, a); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.addClassNameBlacklist = function (a, b) { return this.internal_addToRepeatedField(6, a, b); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.clearClassNameBlacklistList = function () { return this.internal_clearRepeatedField(6); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.getNumThreads = function () { return this.internal_getIntegerFieldWithDefault(7, -1); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.setNumThreads = function (a) { return this.internal_setField(7, a); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.clearNumThreads = function () { return this.internal_clearField(7); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.hasNumThreads = function () { return this.internal_hasField(7); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.getComputeSettings = function () { return this.internal_getWrapperField(proto.tflite.proto.ComputeSettings, 8); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.setComputeSettings = function (a) { return this.internal_setWrapperField(8, a); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.clearComputeSettings = function () { return this.internal_clearWrapperField(8); };
proto.tflite.task.vision.ObjectDetectorOptions.prototype.hasComputeSettings = function () { return this.internal_hasField(8); };
proto.tflite.task.vision.ObjectDetectorOptions.internalDoNotUse$proto$tflite$task$vision$ObjectDetectorOptions$getBinaryFieldsObject = function () {
    return { 9: [jspb.internal.binary.readMessage, proto.tflite.task.core.BaseOptions, proto.tflite.task.core.BaseOptions.internalDoNotUse$proto$tflite$task$core$BaseOptions$getBinaryFieldsObject], 1: [jspb.internal.binary.readMessage, proto.tflite.task.core.ExternalFile, proto.tflite.task.core.ExternalFile.internalDoNotUse$proto$tflite$task$core$ExternalFile$getBinaryFieldsObject],
        2: jspb.internal.binary.readString, 3: jspb.internal.binary.readInt32, 4: jspb.internal.binary.readFloat, 5: jspb.internal.binary.readRepeatedString, 6: jspb.internal.binary.readRepeatedString, 7: jspb.internal.binary.readInt32, 8: [jspb.internal.binary.readMessage, proto.tflite.proto.ComputeSettings, proto.tflite.proto.ComputeSettings.internalDoNotUse$proto$tflite$proto$ComputeSettings$getBinaryFieldsObject] };
};
proto.tflite.task.vision.ObjectDetectorOptions.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.vision.ObjectDetectorOptions.serializeBinaryToWriter); };
proto.tflite.task.vision.ObjectDetectorOptions.serializeBinaryToWriter = function (a, b) {
    jspb.internal.binary.writeMessage(b, a, 9, proto.tflite.task.core.BaseOptions, proto.tflite.task.core.BaseOptions.serializeBinaryToWriter);
    jspb.internal.binary.writeMessage(b, a, 1, proto.tflite.task.core.ExternalFile, proto.tflite.task.core.ExternalFile.serializeBinaryToWriter);
    jspb.internal.binary.writeString(b, a, 2);
    jspb.internal.binary.writeInt32(b, a, 3);
    jspb.internal.binary.writeFloat(b, a, 4);
    jspb.internal.binary.writeRepeatedString(b, a, 5);
    jspb.internal.binary.writeRepeatedString(b, a, 6);
    jspb.internal.binary.writeInt32(b, a, 7);
    jspb.internal.binary.writeMessage(b, a, 8, proto.tflite.proto.ComputeSettings, proto.tflite.proto.ComputeSettings.serializeBinaryToWriter);
    jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b);
};
proto.tflite.task.vision.ObjectDetectorOptions.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.vision.ObjectDetectorOptions, proto.tflite.task.vision.ObjectDetectorOptions.internalDoNotUse$proto$tflite$task$vision$ObjectDetectorOptions$getBinaryFieldsObject); };
proto.tflite.task.vision.ObjectDetectorOptions.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.vision.ObjectDetectorOptions.internalDoNotUse$proto$tflite$task$vision$ObjectDetectorOptions$getBinaryFieldsObject); };
proto.tflite.task.vision.ObjectDetectorOptions.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.vision.ObjectDetectorOptions, a); };
proto.tflite.task.vision.ObjectDetectorOptions.repeatedFields_ = [5, 6];
proto.tflite.task.vision.ObjectDetectorOptions.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.vision.ObjectDetectorOptions.fromObject = function (a) {
    var b = new proto.tflite.task.vision.ObjectDetectorOptions;
    a.baseOptions && b.internal_setWrapperField(9, proto.tflite.task.core.BaseOptions.fromObject(a.baseOptions));
    a.modelFileWithMetadata && b.internal_setWrapperField(1, proto.tflite.task.core.ExternalFile.fromObject(a.modelFileWithMetadata));
    null != a.displayNamesLocale && b.internal_setField(2, a.displayNamesLocale);
    null != a.maxResults && b.internal_setField(3, a.maxResults);
    null != a.scoreThreshold && b.internal_setField(4, a.scoreThreshold);
    null != a.classNameWhitelistList && b.internal_setRepeatedField(5, a.classNameWhitelistList);
    null != a.classNameBlacklistList && b.internal_setRepeatedField(6, a.classNameBlacklistList);
    null != a.numThreads && b.internal_setField(7, a.numThreads);
    a.computeSettings && b.internal_setWrapperField(8, proto.tflite.proto.ComputeSettings.fromObject(a.computeSettings));
    return b;
});
proto.tflite.task.vision.ObjectDetectorOptions.prototype.toObject = function (a) { return proto.tflite.task.vision.ObjectDetectorOptions.internal_toObject(a, this); };
proto.tflite.task.vision.ObjectDetectorOptions.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { baseOptions: proto.tflite.task.core.BaseOptions.internal_toObject(a, b.getBaseOptions()), modelFileWithMetadata: proto.tflite.task.core.ExternalFile.internal_toObject(a, b.getModelFileWithMetadata()), displayNamesLocale: b.internal_getStringFieldWithDefault(2, "en"), maxResults: b.internal_getIntegerFieldWithDefault(3, -1), scoreThreshold: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getFloatingPointField(4)),
            classNameWhitelistList: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getRepeatedField(5)), classNameBlacklistList: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getRepeatedField(6)), numThreads: b.internal_getIntegerFieldWithDefault(7, -1), computeSettings: proto.tflite.proto.ComputeSettings.internal_toObject(a, b.getComputeSettings()) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.tflite.task.vision.Segmentation = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a, -1, proto.tflite.task.vision.Segmentation.repeatedFields_); };
$jscomp.inherits(proto.tflite.task.vision.Segmentation, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.vision.Segmentation.prototype.getMaskOneofCase = function () { return this.internal_computeOneofCase(proto.tflite.task.vision.Segmentation.oneofGroup_MaskOneof_); };
proto.tflite.task.vision.Segmentation.prototype.getCategoryMask = function () { return this.internal_getOneofStringFieldWithDefault(1, proto.tflite.task.vision.Segmentation.oneofGroup_MaskOneof_); };
proto.tflite.task.vision.Segmentation.prototype.getCategoryMask_asB64 = function () { return module$contents$jspb$internal_bytesAsB64(this.getCategoryMask()); };
proto.tflite.task.vision.Segmentation.prototype.getCategoryMask_asU8 = function () { return module$contents$jspb$internal_bytesAsU8(this.getCategoryMask()); };
proto.tflite.task.vision.Segmentation.prototype.setCategoryMask = function (a) { return this.internal_setOneofField(1, proto.tflite.task.vision.Segmentation.oneofGroup_MaskOneof_, a); };
proto.tflite.task.vision.Segmentation.prototype.clearCategoryMask = function () { return this.internal_clearField(1); };
proto.tflite.task.vision.Segmentation.prototype.hasCategoryMask = function () { return this.internal_hasOneofField(1, proto.tflite.task.vision.Segmentation.oneofGroup_MaskOneof_); };
proto.tflite.task.vision.Segmentation.prototype.getConfidenceMasks = function () { return this.internal_getOneofWrapperField(proto.tflite.task.vision.Segmentation.ConfidenceMasks, 4, proto.tflite.task.vision.Segmentation.oneofGroup_MaskOneof_); };
proto.tflite.task.vision.Segmentation.prototype.setConfidenceMasks = function (a) { return this.internal_setOneofWrapperField(4, proto.tflite.task.vision.Segmentation.oneofGroup_MaskOneof_, a); };
proto.tflite.task.vision.Segmentation.prototype.clearConfidenceMasks = function () { return this.internal_clearWrapperField(4); };
proto.tflite.task.vision.Segmentation.prototype.hasConfidenceMasks = function () { return this.internal_hasOneofField(4, proto.tflite.task.vision.Segmentation.oneofGroup_MaskOneof_); };
proto.tflite.task.vision.Segmentation.prototype.getWidth = function () { return this.internal_getIntegerFieldWithDefault(2); };
proto.tflite.task.vision.Segmentation.prototype.setWidth = function (a) { return this.internal_setField(2, a); };
proto.tflite.task.vision.Segmentation.prototype.clearWidth = function () { return this.internal_clearField(2); };
proto.tflite.task.vision.Segmentation.prototype.hasWidth = function () { return this.internal_hasField(2); };
proto.tflite.task.vision.Segmentation.prototype.getHeight = function () { return this.internal_getIntegerFieldWithDefault(3); };
proto.tflite.task.vision.Segmentation.prototype.setHeight = function (a) { return this.internal_setField(3, a); };
proto.tflite.task.vision.Segmentation.prototype.clearHeight = function () { return this.internal_clearField(3); };
proto.tflite.task.vision.Segmentation.prototype.hasHeight = function () { return this.internal_hasField(3); };
proto.tflite.task.vision.Segmentation.prototype.getColoredLabelsList = function () { return this.internal_getRepeatedWrapperField(proto.tflite.task.vision.Segmentation.ColoredLabel, 5); };
proto.tflite.task.vision.Segmentation.prototype.setColoredLabelsList = function (a) { return this.internal_setRepeatedWrapperField(5, a); };
proto.tflite.task.vision.Segmentation.prototype.addColoredLabels = function (a, b) { return this.internal_addToRepeatedWrapperField(5, a, proto.tflite.task.vision.Segmentation.ColoredLabel, b); };
proto.tflite.task.vision.Segmentation.prototype.addAndReturnColoredLabels = function (a, b) { return this.internal_addAndReturnRepeatedWrapperField(5, a, proto.tflite.task.vision.Segmentation.ColoredLabel, b); };
proto.tflite.task.vision.Segmentation.prototype.clearColoredLabelsList = function () { return this.internal_clearRepeatedWrapperField(5); };
proto.tflite.task.vision.Segmentation.internalDoNotUse$proto$tflite$task$vision$Segmentation$getBinaryFieldsObject = function () {
    return { 1: [jspb.internal.binary.readBytesOneof, proto.tflite.task.vision.Segmentation.oneofGroup_MaskOneof_], 4: [jspb.internal.binary.readMessageOneof, proto.tflite.task.vision.Segmentation.ConfidenceMasks, proto.tflite.task.vision.Segmentation.ConfidenceMasks.internalDoNotUse$proto$tflite$task$vision$Segmentation$ConfidenceMasks$getBinaryFieldsObject, proto.tflite.task.vision.Segmentation.oneofGroup_MaskOneof_],
        2: jspb.internal.binary.readInt32, 3: jspb.internal.binary.readInt32, 5: [jspb.internal.binary.readRepeatedMessage, proto.tflite.task.vision.Segmentation.ColoredLabel, proto.tflite.task.vision.Segmentation.ColoredLabel.internalDoNotUse$proto$tflite$task$vision$Segmentation$ColoredLabel$getBinaryFieldsObject] };
};
proto.tflite.task.vision.Segmentation.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.vision.Segmentation.serializeBinaryToWriter); };
proto.tflite.task.vision.Segmentation.serializeBinaryToWriter = function (a, b) {
    jspb.internal.binary.writeBytes(b, a, 1);
    jspb.internal.binary.writeMessage(b, a, 4, proto.tflite.task.vision.Segmentation.ConfidenceMasks, proto.tflite.task.vision.Segmentation.ConfidenceMasks.serializeBinaryToWriter);
    jspb.internal.binary.writeInt32(b, a, 2);
    jspb.internal.binary.writeInt32(b, a, 3);
    jspb.internal.binary.writeRepeatedMessage(b, a, 5, proto.tflite.task.vision.Segmentation.ColoredLabel, proto.tflite.task.vision.Segmentation.ColoredLabel.serializeBinaryToWriter);
    jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b);
};
proto.tflite.task.vision.Segmentation.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.vision.Segmentation, proto.tflite.task.vision.Segmentation.internalDoNotUse$proto$tflite$task$vision$Segmentation$getBinaryFieldsObject); };
proto.tflite.task.vision.Segmentation.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.vision.Segmentation.internalDoNotUse$proto$tflite$task$vision$Segmentation$getBinaryFieldsObject); };
proto.tflite.task.vision.Segmentation.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.vision.Segmentation, a); };
proto.tflite.task.vision.Segmentation.ConfidenceMask = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a, -1, proto.tflite.task.vision.Segmentation.ConfidenceMask.repeatedFields_); };
$jscomp.inherits(proto.tflite.task.vision.Segmentation.ConfidenceMask, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.vision.Segmentation.ConfidenceMask.prototype.getValueList = function () { return this.internal_getRepeatedFloatingPointField(1); };
proto.tflite.task.vision.Segmentation.ConfidenceMask.prototype.setValueList = function (a) { return this.internal_setRepeatedField(1, a); };
proto.tflite.task.vision.Segmentation.ConfidenceMask.prototype.addValue = function (a, b) { return this.internal_addToRepeatedField(1, a, b); };
proto.tflite.task.vision.Segmentation.ConfidenceMask.prototype.clearValueList = function () { return this.internal_clearRepeatedField(1); };
proto.tflite.task.vision.Segmentation.ConfidenceMask.internalDoNotUse$proto$tflite$task$vision$Segmentation$ConfidenceMask$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readPackableFloatInto }; };
proto.tflite.task.vision.Segmentation.ConfidenceMask.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.vision.Segmentation.ConfidenceMask.serializeBinaryToWriter); };
proto.tflite.task.vision.Segmentation.ConfidenceMask.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writePackedFloat(b, a, 1); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.task.vision.Segmentation.ConfidenceMask.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.vision.Segmentation.ConfidenceMask, proto.tflite.task.vision.Segmentation.ConfidenceMask.internalDoNotUse$proto$tflite$task$vision$Segmentation$ConfidenceMask$getBinaryFieldsObject); };
proto.tflite.task.vision.Segmentation.ConfidenceMask.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.vision.Segmentation.ConfidenceMask.internalDoNotUse$proto$tflite$task$vision$Segmentation$ConfidenceMask$getBinaryFieldsObject); };
proto.tflite.task.vision.Segmentation.ConfidenceMask.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.vision.Segmentation.ConfidenceMask, a); };
proto.tflite.task.vision.Segmentation.ConfidenceMasks = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a, -1, proto.tflite.task.vision.Segmentation.ConfidenceMasks.repeatedFields_); };
$jscomp.inherits(proto.tflite.task.vision.Segmentation.ConfidenceMasks, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.vision.Segmentation.ConfidenceMasks.prototype.getConfidenceMaskList = function () { return this.internal_getRepeatedWrapperField(proto.tflite.task.vision.Segmentation.ConfidenceMask, 1); };
proto.tflite.task.vision.Segmentation.ConfidenceMasks.prototype.setConfidenceMaskList = function (a) { return this.internal_setRepeatedWrapperField(1, a); };
proto.tflite.task.vision.Segmentation.ConfidenceMasks.prototype.addConfidenceMask = function (a, b) { return this.internal_addToRepeatedWrapperField(1, a, proto.tflite.task.vision.Segmentation.ConfidenceMask, b); };
proto.tflite.task.vision.Segmentation.ConfidenceMasks.prototype.addAndReturnConfidenceMask = function (a, b) { return this.internal_addAndReturnRepeatedWrapperField(1, a, proto.tflite.task.vision.Segmentation.ConfidenceMask, b); };
proto.tflite.task.vision.Segmentation.ConfidenceMasks.prototype.clearConfidenceMaskList = function () { return this.internal_clearRepeatedWrapperField(1); };
proto.tflite.task.vision.Segmentation.ConfidenceMasks.internalDoNotUse$proto$tflite$task$vision$Segmentation$ConfidenceMasks$getBinaryFieldsObject = function () { return { 1: [jspb.internal.binary.readRepeatedMessage, proto.tflite.task.vision.Segmentation.ConfidenceMask, proto.tflite.task.vision.Segmentation.ConfidenceMask.internalDoNotUse$proto$tflite$task$vision$Segmentation$ConfidenceMask$getBinaryFieldsObject] }; };
proto.tflite.task.vision.Segmentation.ConfidenceMasks.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.vision.Segmentation.ConfidenceMasks.serializeBinaryToWriter); };
proto.tflite.task.vision.Segmentation.ConfidenceMasks.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeRepeatedMessage(b, a, 1, proto.tflite.task.vision.Segmentation.ConfidenceMask, proto.tflite.task.vision.Segmentation.ConfidenceMask.serializeBinaryToWriter); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.task.vision.Segmentation.ConfidenceMasks.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.vision.Segmentation.ConfidenceMasks, proto.tflite.task.vision.Segmentation.ConfidenceMasks.internalDoNotUse$proto$tflite$task$vision$Segmentation$ConfidenceMasks$getBinaryFieldsObject); };
proto.tflite.task.vision.Segmentation.ConfidenceMasks.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.vision.Segmentation.ConfidenceMasks.internalDoNotUse$proto$tflite$task$vision$Segmentation$ConfidenceMasks$getBinaryFieldsObject); };
proto.tflite.task.vision.Segmentation.ConfidenceMasks.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.vision.Segmentation.ConfidenceMasks, a); };
proto.tflite.task.vision.Segmentation.ColoredLabel = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a); };
$jscomp.inherits(proto.tflite.task.vision.Segmentation.ColoredLabel, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.getR = function () { return this.internal_getIntegerFieldWithDefault(1); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.setR = function (a) { return this.internal_setField(1, a); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.clearR = function () { return this.internal_clearField(1); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.hasR = function () { return this.internal_hasField(1); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.getG = function () { return this.internal_getIntegerFieldWithDefault(2); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.setG = function (a) { return this.internal_setField(2, a); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.clearG = function () { return this.internal_clearField(2); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.hasG = function () { return this.internal_hasField(2); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.getB = function () { return this.internal_getIntegerFieldWithDefault(3); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.setB = function (a) { return this.internal_setField(3, a); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.clearB = function () { return this.internal_clearField(3); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.hasB = function () { return this.internal_hasField(3); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.getClassName = function () { return this.internal_getStringFieldWithDefault(4); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.setClassName = function (a) { return this.internal_setField(4, a); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.clearClassName = function () { return this.internal_clearField(4); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.hasClassName = function () { return this.internal_hasField(4); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.getDisplayName = function () { return this.internal_getStringFieldWithDefault(5); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.setDisplayName = function (a) { return this.internal_setField(5, a); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.clearDisplayName = function () { return this.internal_clearField(5); };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.hasDisplayName = function () { return this.internal_hasField(5); };
proto.tflite.task.vision.Segmentation.ColoredLabel.internalDoNotUse$proto$tflite$task$vision$Segmentation$ColoredLabel$getBinaryFieldsObject = function () { return { 1: jspb.internal.binary.readUint32, 2: jspb.internal.binary.readUint32, 3: jspb.internal.binary.readUint32, 4: jspb.internal.binary.readString, 5: jspb.internal.binary.readString }; };
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.vision.Segmentation.ColoredLabel.serializeBinaryToWriter); };
proto.tflite.task.vision.Segmentation.ColoredLabel.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeUint32(b, a, 1); jspb.internal.binary.writeUint32(b, a, 2); jspb.internal.binary.writeUint32(b, a, 3); jspb.internal.binary.writeString(b, a, 4); jspb.internal.binary.writeString(b, a, 5); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.task.vision.Segmentation.ColoredLabel.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.vision.Segmentation.ColoredLabel, proto.tflite.task.vision.Segmentation.ColoredLabel.internalDoNotUse$proto$tflite$task$vision$Segmentation$ColoredLabel$getBinaryFieldsObject); };
proto.tflite.task.vision.Segmentation.ColoredLabel.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.vision.Segmentation.ColoredLabel.internalDoNotUse$proto$tflite$task$vision$Segmentation$ColoredLabel$getBinaryFieldsObject); };
proto.tflite.task.vision.Segmentation.ColoredLabel.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.vision.Segmentation.ColoredLabel, a); };
proto.tflite.task.vision.Segmentation.repeatedFields_ = [5];
proto.tflite.task.vision.Segmentation.oneofGroup_MaskOneof_ = [1, 4];
proto.tflite.task.vision.Segmentation.MaskOneofCase = { MASK_ONEOF_NOT_SET: 0, CATEGORY_MASK: 1, CONFIDENCE_MASKS: 4 };
proto.tflite.task.vision.Segmentation.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.vision.Segmentation.fromObject = function (a) {
    var b = new proto.tflite.task.vision.Segmentation;
    null != a.categoryMask && b.internal_setOneofField(1, proto.tflite.task.vision.Segmentation.oneofGroup_MaskOneof_, a.categoryMask);
    a.confidenceMasks && b.internal_setOneofWrapperField(4, proto.tflite.task.vision.Segmentation.oneofGroup_MaskOneof_, proto.tflite.task.vision.Segmentation.ConfidenceMasks.fromObject(a.confidenceMasks));
    null != a.width && b.internal_setField(2, a.width);
    null != a.height && b.internal_setField(3, a.height);
    a.coloredLabelsList && b.internal_setRepeatedWrapperField(5, a.coloredLabelsList.map(proto.tflite.task.vision.Segmentation.ColoredLabel.fromObject));
    return b;
});
proto.tflite.task.vision.Segmentation.prototype.toObject = function (a) { return proto.tflite.task.vision.Segmentation.internal_toObject(a, this); };
proto.tflite.task.vision.Segmentation.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { categoryMask: b.getCategoryMask_asB64(), confidenceMasks: proto.tflite.task.vision.Segmentation.ConfidenceMasks.internal_toObject(a, b.getConfidenceMasks()), width: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)), height: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(3)), coloredLabelsList: module$contents$jspb$internal$public_for_gencode_toObjectList(b.getColoredLabelsList(), proto.tflite.task.vision.Segmentation.ColoredLabel.internal_toObject, a) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.tflite.task.vision.Segmentation.ConfidenceMask.repeatedFields_ = [1];
proto.tflite.task.vision.Segmentation.ConfidenceMask.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.vision.Segmentation.ConfidenceMask.fromObject = function (a) { var b = new proto.tflite.task.vision.Segmentation.ConfidenceMask; null != a.valueList && b.internal_setRepeatedField(1, a.valueList); return b; });
proto.tflite.task.vision.Segmentation.ConfidenceMask.prototype.toObject = function (a) { return proto.tflite.task.vision.Segmentation.ConfidenceMask.internal_toObject(a, this); };
proto.tflite.task.vision.Segmentation.ConfidenceMask.internal_toObject = function (a, b) { if (null != b) {
    var c = { valueList: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getRepeatedFloatingPointField(1)) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.task.vision.Segmentation.ConfidenceMasks.repeatedFields_ = [1];
proto.tflite.task.vision.Segmentation.ConfidenceMasks.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.vision.Segmentation.ConfidenceMasks.fromObject = function (a) { var b = new proto.tflite.task.vision.Segmentation.ConfidenceMasks; a.confidenceMaskList && b.internal_setRepeatedWrapperField(1, a.confidenceMaskList.map(proto.tflite.task.vision.Segmentation.ConfidenceMask.fromObject)); return b; });
proto.tflite.task.vision.Segmentation.ConfidenceMasks.prototype.toObject = function (a) { return proto.tflite.task.vision.Segmentation.ConfidenceMasks.internal_toObject(a, this); };
proto.tflite.task.vision.Segmentation.ConfidenceMasks.internal_toObject = function (a, b) { if (null != b) {
    var c = { confidenceMaskList: module$contents$jspb$internal$public_for_gencode_toObjectList(b.getConfidenceMaskList(), proto.tflite.task.vision.Segmentation.ConfidenceMask.internal_toObject, a) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
proto.tflite.task.vision.Segmentation.ColoredLabel.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.vision.Segmentation.ColoredLabel.fromObject = function (a) { var b = new proto.tflite.task.vision.Segmentation.ColoredLabel; null != a.r && b.internal_setField(1, a.r); null != a.g && b.internal_setField(2, a.g); null != a.b && b.internal_setField(3, a.b); null != a.className && b.internal_setField(4, a.className); null != a.displayName && b.internal_setField(5, a.displayName); return b; });
proto.tflite.task.vision.Segmentation.ColoredLabel.prototype.toObject = function (a) { return proto.tflite.task.vision.Segmentation.ColoredLabel.internal_toObject(a, this); };
proto.tflite.task.vision.Segmentation.ColoredLabel.internal_toObject = function (a, b) {
    if (null != b) {
        var c = { r: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(1)), g: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(2)), b: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(3)), className: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(4)), displayName: module$contents$jspb$internal$public_for_gencode_toObjectPrimitive(b.internal_getField(5)) };
        a && (c.$jspbMessageInstance = b);
        return c;
    }
};
proto.tflite.task.vision.SegmentationResult = function (a) { module$contents$jspb$internal$public_for_gencode_GeneratedMessage.call(this, a, -1, proto.tflite.task.vision.SegmentationResult.repeatedFields_); };
$jscomp.inherits(proto.tflite.task.vision.SegmentationResult, module$contents$jspb$internal$public_for_gencode_GeneratedMessage);
proto.tflite.task.vision.SegmentationResult.prototype.getSegmentationList = function () { return this.internal_getRepeatedWrapperField(proto.tflite.task.vision.Segmentation, 1); };
proto.tflite.task.vision.SegmentationResult.prototype.setSegmentationList = function (a) { return this.internal_setRepeatedWrapperField(1, a); };
proto.tflite.task.vision.SegmentationResult.prototype.addSegmentation = function (a, b) { return this.internal_addToRepeatedWrapperField(1, a, proto.tflite.task.vision.Segmentation, b); };
proto.tflite.task.vision.SegmentationResult.prototype.addAndReturnSegmentation = function (a, b) { return this.internal_addAndReturnRepeatedWrapperField(1, a, proto.tflite.task.vision.Segmentation, b); };
proto.tflite.task.vision.SegmentationResult.prototype.clearSegmentationList = function () { return this.internal_clearRepeatedWrapperField(1); };
proto.tflite.task.vision.SegmentationResult.internalDoNotUse$proto$tflite$task$vision$SegmentationResult$getBinaryFieldsObject = function () { return { 1: [jspb.internal.binary.readRepeatedMessage, proto.tflite.task.vision.Segmentation, proto.tflite.task.vision.Segmentation.internalDoNotUse$proto$tflite$task$vision$Segmentation$getBinaryFieldsObject] }; };
proto.tflite.task.vision.SegmentationResult.prototype.serializeBinary = function () { return jspb.internal.binary.serializeBinary(this, proto.tflite.task.vision.SegmentationResult.serializeBinaryToWriter); };
proto.tflite.task.vision.SegmentationResult.serializeBinaryToWriter = function (a, b) { jspb.internal.binary.writeRepeatedMessage(b, a, 1, proto.tflite.task.vision.Segmentation, proto.tflite.task.vision.Segmentation.serializeBinaryToWriter); jspb.internal.binary.serializeBinaryExtensionsAndUnknownFields(a, b); };
proto.tflite.task.vision.SegmentationResult.deserializeBinary = function (a) { return jspb.internal.binary.deserializeBinary(a, proto.tflite.task.vision.SegmentationResult, proto.tflite.task.vision.SegmentationResult.internalDoNotUse$proto$tflite$task$vision$SegmentationResult$getBinaryFieldsObject); };
proto.tflite.task.vision.SegmentationResult.deserializeBinaryFromReader = function (a, b) { return module$contents$jspb$internal$binary_deserializeBinaryFromReaderGeneric(a, b, proto.tflite.task.vision.SegmentationResult.internalDoNotUse$proto$tflite$task$vision$SegmentationResult$getBinaryFieldsObject); };
proto.tflite.task.vision.SegmentationResult.deserialize = function (a) { return module$exports$jspb.Message.deserializeWithCtor(proto.tflite.task.vision.SegmentationResult, a); };
proto.tflite.task.vision.SegmentationResult.repeatedFields_ = [1];
proto.tflite.task.vision.SegmentationResult.ObjectFormat = function () { };
module$contents$jspb$internal$public_for_gencode_GENERATE_FROM_OBJECT && (proto.tflite.task.vision.SegmentationResult.fromObject = function (a) { var b = new proto.tflite.task.vision.SegmentationResult; a.segmentationList && b.internal_setRepeatedWrapperField(1, a.segmentationList.map(proto.tflite.task.vision.Segmentation.fromObject)); return b; });
proto.tflite.task.vision.SegmentationResult.prototype.toObject = function (a) { return proto.tflite.task.vision.SegmentationResult.internal_toObject(a, this); };
proto.tflite.task.vision.SegmentationResult.internal_toObject = function (a, b) { if (null != b) {
    var c = { segmentationList: module$contents$jspb$internal$public_for_gencode_toObjectList(b.getSegmentationList(), proto.tflite.task.vision.Segmentation.internal_toObject, a) };
    a && (c.$jspbMessageInstance = b);
    return c;
} };
var module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils = {}, module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_WASM_SIMD_CHECK = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 9, 1, 7, 0, 65, 0, 253, 15, 26, 11]), module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_WASM_MULTI_THREADED_CHECK = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16,
    2, 0, 26, 11]), module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_wasmFeatures = void 0;
module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.convertCppVectorToArray = function (a) { if (null == a)
    return []; for (var b = [], c = 0; c < a.size(); c++) {
    var d = a.get(c);
    b.push(d);
} return b; };
module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.callAndDelete = function (a, b) { try {
    return b(a);
}
finally {
    null != a && a.delete();
} };
module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.callWithStatusOrAndDelete = function (a, b, c) { try {
    if (!a.ok())
        throw Error(b + a.errorMessage());
    return c(a.value());
}
finally {
    a.delete();
} };
var module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_fromPixels2DContext = null;
module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.fromPixels = function (a) {
    if (null == a)
        throw Error("pixels passed to fromPixels() can not be null");
    var b = !1, c = !1, d = !1, e = !1;
    if ("undefined" !== typeof ImageData && a instanceof ImageData)
        b = !0;
    else if ("undefined" !== typeof HTMLVideoElement && a instanceof HTMLVideoElement)
        c = !0;
    else if ("undefined" !== typeof HTMLImageElement && a instanceof HTMLImageElement)
        d = !0;
    else if (null != a.getContext)
        e = !0;
    else
        throw Error("pixels passed to fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was " +
            a.constructor.name);
    if (c && c && 2 > a.readyState)
        throw Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");
    var f = $jscomp.makeIterator(c ? [a.videoWidth, a.videoHeight] : [a.width, a.height]), g = f.next().value;
    f = f.next().value;
    if (e)
        var k = a.getContext("2d").getImageData(0, 0, g, f).data;
    else if (b)
        k = a.data;
    else if (d || c)
        null == module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_fromPixels2DContext && (module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_fromPixels2DContext =
            document.createElement("canvas").getContext("2d")), module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_fromPixels2DContext.canvas.width = g, module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_fromPixels2DContext.canvas.height = f, module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_fromPixels2DContext.drawImage(a, 0, 0, g, f), k = module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_fromPixels2DContext.getImageData(0, 0, g, f).data;
    return { vals: k, width: g, height: f };
};
module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.getWasmFeatures = function () {
    var a, b, c, d, e, f, g;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (k) {
        if (1 == k.nextAddress) {
            if (module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_wasmFeatures)
                return k.jumpTo(2);
            a = $jscomp;
            b = a.makeIterator;
            return k.yield(Promise.all([module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_isSupportedSimd(), module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_isSupportedMultiThreaded()]), 3);
        }
        2 != k.nextAddress && (c = b.call(a, k.yieldResult), d = c.next().value, e = c.next().value, f = d, g = e, module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_wasmFeatures = { simd: f, multiThreading: g });
        return k.return(module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_wasmFeatures);
    });
};
function module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_isSupportedSimd() { return $jscomp.asyncExecutePromiseGeneratorProgram(function (a) { switch (a.nextAddress) {
    case 1: return a.setCatchFinallyBlocks(2), a.yield(WebAssembly.instantiate(module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_WASM_SIMD_CHECK), 4);
    case 4:
        a.leaveTryBlock(3);
        break;
    case 2: return a.enterCatchBlock(), a.return(!1);
    case 3: return a.return(!0);
} }); }
function module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_isSupportedMultiThreaded() {
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (a) {
        switch (a.nextAddress) {
            case 1: return a.setCatchFinallyBlocks(2), (new MessageChannel).port1.postMessage(new SharedArrayBuffer(1)), a.yield(WebAssembly.instantiate(module$contents$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils_WASM_MULTI_THREADED_CHECK), 4);
            case 4:
                a.leaveTryBlock(3);
                break;
            case 2: return a.enterCatchBlock(), a.return(!1);
            case 3: return a.return(!0);
        }
    });
}
var module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader = { EmscriptenModuleLoader: function (a, b, c) { this.wasmModulesPath = a; this.tfliteWebApiName = b; this.wasmWebWorkerObjectURL = c; this.scriptSrc = ""; this.scriptSrc = !this.isWebWorker() && document.currentScript ? document.currentScript.getAttribute("src") || "" : ""; } };
module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.getInstance = function (a, b, c) {
    var d = a + b;
    c = URL.createObjectURL(new Blob([c], { type: "application/javascript" }));
    module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.instances.has(d) || (a = new module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader(a, b, c), module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.instances.set(d, a));
    return module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.instances.get(d);
};
module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.prototype.load = function (a) { this.loadPromise || (this.loadPromise = this.loadModule(void 0 === a ? !1 : a)); return this.loadPromise; };
module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.prototype.loadModule = function (a) {
    a = void 0 === a ? !1 : a;
    var b = this, d, e, f, g, k, h, l, m, n, p, q, r, t, v;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (u) {
        if (1 == u.nextAddress)
            return u.yield(b.genFullLoaderUrl(), 2);
        if (3 != u.nextAddress)
            return d = u.yieldResult, d.startsWith("http") || (d.startsWith("/") ? d = b.scriptSrc.startsWith("http") ? "" + (0, goog.uri.utils.getHost)(b.scriptSrc) +
                d : "" + b.getLocation().origin + d : a ? b.scriptSrc.startsWith("http") ? (e = b.scriptSrc.lastIndexOf("/"), f = b.scriptSrc.substring(0, e), d = f + "/" + d) : b.scriptSrc.startsWith("/") ? (g = b.scriptSrc.lastIndexOf("/"), k = b.scriptSrc.substring(0, g), d = "" + b.getLocation().origin + k + "/" + d) : (h = b.getLocation().href.lastIndexOf("/"), l = b.getLocation().href.substring(0, h), m = b.scriptSrc.lastIndexOf("/"), 0 > m ? d = l + "/" + d : (n = b.scriptSrc.substring(0, m), d = l + "/" + n + "/" + d)) : (p = b.getLocation().href, q = p.lastIndexOf("/"), r = p.substring(0, q), d = r +
                "/" + d)), t = !0, u.yield(b.loadScript(d).catch(function () { t = !1; }), 3);
        if (!t)
            return u.return(void 0);
        v = b.isWebWorker() ? self : window;
        return u.return(v[b.tfliteWebApiName + "_ModuleFactory"]({ mainScriptUrlOrBlob: d, locateFile: function (w, x) { if (w.endsWith(".worker.js"))
                return b.wasmWebWorkerObjectURL; if (b.isWebWorker() && w.endsWith(".wasm")) {
                x = "";
                var y = d.lastIndexOf("/");
                0 <= y && (x = d.substring(0, y + 1));
                return x + w;
            } return x + w; } }));
    });
};
module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.prototype.genFullLoaderUrl = function () {
    var a = this, b, c, d, e;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (f) {
        if (1 == f.nextAddress)
            return b = [a.wasmModulesPath, a.tfliteWebApiName, "_cc"], f.yield((0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.getWasmFeatures)(), 2);
        c = f.yieldResult;
        d = c.simd;
        e = c.multiThreading;
        d && e ? b.push("_simd_threaded.js") :
            !d && e ? b.push("_threaded.js") : d && !e ? b.push("_simd.js") : b.push(".js");
        return f.return(b.join(""));
    });
};
module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.prototype.loadScript = function (a) {
    var b = this, c, d;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (e) {
        if (b.isWebWorker())
            return importScripts(a), e.jumpTo(0);
        c = document.createElement("script");
        c.setAttribute("id", b.tfliteWebApiName + "_loader_script");
        d = new Promise(function (f, g) { c.onerror = function () { g(); document.head.removeChild(c); }; c.onload = f; });
        document.head.appendChild(c);
        c.setAttribute("src", a);
        return e.yield(d, 0);
    });
};
module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.prototype.getLocation = function () { if (this.isWebWorker()) {
    var a = self.location, b = a.origin;
    a = a.href.replace("blob:", "");
    return { origin: b, href: a };
} return window.location; };
module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.prototype.isWebWorker = function () { return "undefined" === typeof window; };
module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.instances = new Map;
var module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client = {};
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.getWasmFeatures = module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.getWasmFeatures;
var module$contents$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client_wasmModulesPath = "";
function module$contents$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client_setWasmPath(a) { module$contents$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client_wasmModulesPath = a; }
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.setWasmPath = module$contents$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client_setWasmPath;
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertNLClassifier = function (a, b, c) { this.module = a; this.memOffsetsToFree = b; this.cppClassifier = c; };
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertNLClassifier.create = function (a, b) {
    b = void 0 === b ? new proto.tflite.task.text.BertNLClassifierOptions : b;
    var c, d, e, f, g, k, h, l, m, n, p;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (q) {
        if (1 == q.nextAddress)
            return c = module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.getInstance(module$contents$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client_wasmModulesPath, "tflite_web_api", '"use strict";var Module={};var initializedJS=false;function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(" ");console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:text,threadId:Module["_pthread_self"]()})}var err=threadPrintErr;self.alert=threadAlert;Module["instantiateWasm"]=function(info,receiveInstance){var instance=new WebAssembly.Instance(Module["wasmModule"],info);receiveInstance(instance);Module["wasmModule"]=null;return instance.exports};self.onmessage=function(e){try{if(e.data.cmd==="load"){Module["wasmModule"]=e.data.wasmModule;Module["wasmMemory"]=e.data.wasmMemory;Module["buffer"]=Module["wasmMemory"].buffer;Module["ENVIRONMENT_IS_PTHREAD"]=true;if(typeof e.data.urlOrBlob==="string"){importScripts(e.data.urlOrBlob)}else{var objectUrl=URL.createObjectURL(e.data.urlOrBlob);importScripts(objectUrl);URL.revokeObjectURL(objectUrl)}tflite_web_api_ModuleFactory(Module).then(function(instance){Module=instance})}else if(e.data.cmd==="run"){Module["__performance_now_clock_drift"]=performance.now()-e.data.time;Module["__emscripten_thread_init"](e.data.threadInfoStruct,0,0);var max=e.data.stackBase;var top=e.data.stackBase+e.data.stackSize;Module["establishStackSpace"](top,max);Module["PThread"].receiveObjectTransfer(e.data);Module["PThread"].threadInit();if(!initializedJS){Module["___embind_register_native_and_builtin_types"]();initializedJS=true}try{var result=Module["invokeEntryPoint"](e.data.start_routine,e.data.arg);if(Module["keepRuntimeAlive"]()){Module["PThread"].setExitStatus(result)}else{Module["__emscripten_thread_exit"](result)}}catch(ex){if(ex!="unwind"){if(ex instanceof Module["ExitStatus"]){if(Module["keepRuntimeAlive"]()){}else{Module["__emscripten_thread_exit"](ex.status)}}else{throw ex}}}}else if(e.data.cmd==="cancel"){if(Module["_pthread_self"]()){Module["__emscripten_thread_exit"](-1)}postMessage({"cmd":"cancelDone"})}else if(e.data.target==="setimmediate"){}else if(e.data.cmd==="processThreadQueue"){if(Module["_pthread_self"]()){Module["_emscripten_current_thread_process_queued_calls"]()}}else{err("worker.js received unknown command "+e.data.cmd);err(e.data)}}catch(ex){err("worker.js onmessage() captured an uncaught exception: "+ex);if(ex&&ex.stack)err(ex.stack);throw ex}};\n'),
                d = $jscomp, e = d.makeIterator, q.yield(Promise.all([c.load(), "string" === typeof a ? fetch(a).then(function (r) { return r.arrayBuffer(); }) : Promise.resolve(a)]), 2);
        f = e.call(d, q.yieldResult);
        g = f.next().value;
        k = f.next().value;
        h = g;
        l = k;
        m = new Uint8Array(l);
        n = h._malloc(m.length);
        h.HEAPU8.set(m, n);
        p = (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.callAndDelete)(new h.BertNLClassifierOptionsCppProto, function (r) {
            if (null != r)
                return r.initFromJsProto(b), h.BertNLClassifier.CreateFromOptions(n, m.length, r);
        });
        if (null === p || void 0 === p || !p.ok())
            throw Error("Failed to create BertNLClassifier: " + (null === p || void 0 === p ? void 0 : p.errorMessage()));
        return q.return(new module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertNLClassifier(h, [n], p.value()));
    });
};
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertNLClassifier.prototype.classify = function (a) { if (null != this.cppClassifier)
    return a = this.cppClassifier.Classify(a), (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.callAndDelete)(a, function (b) { return (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.convertCppVectorToArray)(b); }); };
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertNLClassifier.prototype.cleanUp = function () { if (null != this.cppClassifier) {
    for (var a = $jscomp.makeIterator(this.memOffsetsToFree), b = a.next(); !b.done; b = a.next())
        this.module._free(b.value);
    this.cppClassifier.delete();
} };
goog.exportSymbol("tfweb.BertNLClassifierOptions", proto.tflite.task.text.BertNLClassifierOptions);
goog.exportSymbol("tfweb.BertNLClassifierOptions.prototype.serializeBinary", proto.tflite.task.text.BertNLClassifierOptions.prototype.serializeBinary);
goog.exportSymbol("tfweb.BertNLClassifier", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertNLClassifier);
goog.exportSymbol("tfweb.BertNLClassifier.create", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertNLClassifier.create);
goog.exportSymbol("tfweb.BertNLClassifier.prototype.classify", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertNLClassifier.prototype.classify);
goog.exportSymbol("tfweb.BertNLClassifier.prototype.cleanUp", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertNLClassifier.prototype.cleanUp);
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertQuestionAnswerer = function (a, b, c) { this.module = a; this.memOffsetsToFree = b; this.cppClassifier = c; };
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertQuestionAnswerer.create = function (a) {
    var b, c, d, e, f, g, k, h, l, m, n;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (p) {
        if (1 == p.nextAddress)
            return b = module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.getInstance(module$contents$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client_wasmModulesPath, "tflite_web_api", '"use strict";var Module={};var initializedJS=false;function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(" ");console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:text,threadId:Module["_pthread_self"]()})}var err=threadPrintErr;self.alert=threadAlert;Module["instantiateWasm"]=function(info,receiveInstance){var instance=new WebAssembly.Instance(Module["wasmModule"],info);receiveInstance(instance);Module["wasmModule"]=null;return instance.exports};self.onmessage=function(e){try{if(e.data.cmd==="load"){Module["wasmModule"]=e.data.wasmModule;Module["wasmMemory"]=e.data.wasmMemory;Module["buffer"]=Module["wasmMemory"].buffer;Module["ENVIRONMENT_IS_PTHREAD"]=true;if(typeof e.data.urlOrBlob==="string"){importScripts(e.data.urlOrBlob)}else{var objectUrl=URL.createObjectURL(e.data.urlOrBlob);importScripts(objectUrl);URL.revokeObjectURL(objectUrl)}tflite_web_api_ModuleFactory(Module).then(function(instance){Module=instance})}else if(e.data.cmd==="run"){Module["__performance_now_clock_drift"]=performance.now()-e.data.time;Module["__emscripten_thread_init"](e.data.threadInfoStruct,0,0);var max=e.data.stackBase;var top=e.data.stackBase+e.data.stackSize;Module["establishStackSpace"](top,max);Module["PThread"].receiveObjectTransfer(e.data);Module["PThread"].threadInit();if(!initializedJS){Module["___embind_register_native_and_builtin_types"]();initializedJS=true}try{var result=Module["invokeEntryPoint"](e.data.start_routine,e.data.arg);if(Module["keepRuntimeAlive"]()){Module["PThread"].setExitStatus(result)}else{Module["__emscripten_thread_exit"](result)}}catch(ex){if(ex!="unwind"){if(ex instanceof Module["ExitStatus"]){if(Module["keepRuntimeAlive"]()){}else{Module["__emscripten_thread_exit"](ex.status)}}else{throw ex}}}}else if(e.data.cmd==="cancel"){if(Module["_pthread_self"]()){Module["__emscripten_thread_exit"](-1)}postMessage({"cmd":"cancelDone"})}else if(e.data.target==="setimmediate"){}else if(e.data.cmd==="processThreadQueue"){if(Module["_pthread_self"]()){Module["_emscripten_current_thread_process_queued_calls"]()}}else{err("worker.js received unknown command "+e.data.cmd);err(e.data)}}catch(ex){err("worker.js onmessage() captured an uncaught exception: "+ex);if(ex&&ex.stack)err(ex.stack);throw ex}};\n'),
                c = $jscomp, d = c.makeIterator, p.yield(Promise.all([b.load(), "string" === typeof a ? fetch(a).then(function (q) { return q.arrayBuffer(); }) : Promise.resolve(a)]), 2);
        e = d.call(c, p.yieldResult);
        f = e.next().value;
        g = e.next().value;
        k = f;
        h = g;
        l = new Uint8Array(h);
        m = k._malloc(l.length);
        k.HEAPU8.set(l, m);
        n = k.BertQuestionAnswerer.CreateFromBuffer(m, l.length);
        if (null === n || void 0 === n || !n.ok())
            throw Error("Failed to create BertQuestionAnswerer: " + (null === n || void 0 === n ? void 0 : n.errorMessage()));
        return p.return(new module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertQuestionAnswerer(k, [m], n.value()));
    });
};
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertQuestionAnswerer.prototype.answer = function (a, b) { if (null != this.cppClassifier)
    return a = this.cppClassifier.Answer(a, b), (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.callAndDelete)(a, function (c) { return (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.convertCppVectorToArray)(c); }); };
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertQuestionAnswerer.prototype.cleanUp = function () { if (null != this.cppClassifier) {
    for (var a = $jscomp.makeIterator(this.memOffsetsToFree), b = a.next(); !b.done; b = a.next())
        this.module._free(b.value);
    this.cppClassifier.delete();
} };
goog.exportSymbol("tfweb.BertQuestionAnswerer", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertQuestionAnswerer);
goog.exportSymbol("tfweb.BertQuestionAnswerer.create", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertQuestionAnswerer.create);
goog.exportSymbol("tfweb.BertQuestionAnswerer.prototype.answer", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertQuestionAnswerer.prototype.answer);
goog.exportSymbol("tfweb.BertQuestionAnswerer.prototype.cleanUp", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.BertQuestionAnswerer.prototype.cleanUp);
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageClassifier = function (a, b, c) { this.module = a; this.memOffsetsToFree = b; this.cppClassifier = c; };
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageClassifier.create = function (a, b) {
    b = void 0 === b ? new proto.tflite.task.vision.ImageClassifierOptions : b;
    var c, d, e, f, g, k, h, l, m, n, p;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (q) {
        if (1 == q.nextAddress)
            return c = module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.getInstance(module$contents$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client_wasmModulesPath, "tflite_web_api", '"use strict";var Module={};var initializedJS=false;function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(" ");console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:text,threadId:Module["_pthread_self"]()})}var err=threadPrintErr;self.alert=threadAlert;Module["instantiateWasm"]=function(info,receiveInstance){var instance=new WebAssembly.Instance(Module["wasmModule"],info);receiveInstance(instance);Module["wasmModule"]=null;return instance.exports};self.onmessage=function(e){try{if(e.data.cmd==="load"){Module["wasmModule"]=e.data.wasmModule;Module["wasmMemory"]=e.data.wasmMemory;Module["buffer"]=Module["wasmMemory"].buffer;Module["ENVIRONMENT_IS_PTHREAD"]=true;if(typeof e.data.urlOrBlob==="string"){importScripts(e.data.urlOrBlob)}else{var objectUrl=URL.createObjectURL(e.data.urlOrBlob);importScripts(objectUrl);URL.revokeObjectURL(objectUrl)}tflite_web_api_ModuleFactory(Module).then(function(instance){Module=instance})}else if(e.data.cmd==="run"){Module["__performance_now_clock_drift"]=performance.now()-e.data.time;Module["__emscripten_thread_init"](e.data.threadInfoStruct,0,0);var max=e.data.stackBase;var top=e.data.stackBase+e.data.stackSize;Module["establishStackSpace"](top,max);Module["PThread"].receiveObjectTransfer(e.data);Module["PThread"].threadInit();if(!initializedJS){Module["___embind_register_native_and_builtin_types"]();initializedJS=true}try{var result=Module["invokeEntryPoint"](e.data.start_routine,e.data.arg);if(Module["keepRuntimeAlive"]()){Module["PThread"].setExitStatus(result)}else{Module["__emscripten_thread_exit"](result)}}catch(ex){if(ex!="unwind"){if(ex instanceof Module["ExitStatus"]){if(Module["keepRuntimeAlive"]()){}else{Module["__emscripten_thread_exit"](ex.status)}}else{throw ex}}}}else if(e.data.cmd==="cancel"){if(Module["_pthread_self"]()){Module["__emscripten_thread_exit"](-1)}postMessage({"cmd":"cancelDone"})}else if(e.data.target==="setimmediate"){}else if(e.data.cmd==="processThreadQueue"){if(Module["_pthread_self"]()){Module["_emscripten_current_thread_process_queued_calls"]()}}else{err("worker.js received unknown command "+e.data.cmd);err(e.data)}}catch(ex){err("worker.js onmessage() captured an uncaught exception: "+ex);if(ex&&ex.stack)err(ex.stack);throw ex}};\n'),
                d = $jscomp, e = d.makeIterator, q.yield(Promise.all([c.load(), "string" === typeof a ? fetch(a).then(function (r) { return r.arrayBuffer(); }) : Promise.resolve(a)]), 2);
        f = e.call(d, q.yieldResult);
        g = f.next().value;
        k = f.next().value;
        h = g;
        l = k;
        m = new Uint8Array(l);
        n = h._malloc(m.length);
        h.HEAPU8.set(m, n);
        p = (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.callAndDelete)(new h.ImageClassifierOptionsCppProto, function (r) {
            if (null != r)
                return r.initFromJsProto(b), h.ImageClassifier.CreateFromOptions(n, m.length, r);
        });
        if (null === p || void 0 === p || !p.ok())
            throw Error("Failed to create ImageClassifier: " + (null === p || void 0 === p ? void 0 : p.errorMessage()));
        return q.return(new module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageClassifier(h, [n], p.value()));
    });
};
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageClassifier.prototype.classify = function (a) {
    if (null != this.cppClassifier) {
        var b = (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.fromPixels)(a);
        a = b.vals;
        var c = b.width, d = b.height;
        if (null != a)
            return b = this.module._malloc(a.length), this.module.HEAPU8.set(a, b), a = this.cppClassifier.Classify(b, c, d), this.module._free(b), (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.callWithStatusOrAndDelete)(a, "Failed to run inference method classify: ", function (e) { e = e.toArrayBuffer(); return proto.tflite.task.vision.ClassificationResult.deserializeBinary(e); });
    }
};
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageClassifier.prototype.cleanUp = function () { if (null != this.cppClassifier) {
    for (var a = $jscomp.makeIterator(this.memOffsetsToFree), b = a.next(); !b.done; b = a.next())
        this.module._free(b.value);
    this.cppClassifier.delete();
} };
goog.exportSymbol("tfweb.ClassificationResult", proto.tflite.task.vision.ClassificationResult);
goog.exportSymbol("tfweb.ClassificationResult.prototype.serializeBinary", proto.tflite.task.vision.ClassificationResult.prototype.serializeBinary);
goog.exportSymbol("tfweb.ImageClassifierOptions", proto.tflite.task.vision.ImageClassifierOptions);
goog.exportSymbol("tfweb.ImageClassifierOptions.prototype.serializeBinary", proto.tflite.task.vision.ImageClassifierOptions.prototype.serializeBinary);
goog.exportSymbol("tfweb.ImageClassifier", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageClassifier);
goog.exportSymbol("tfweb.ImageClassifier.create", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageClassifier.create);
goog.exportSymbol("tfweb.ImageClassifier.prototype.classify", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageClassifier.prototype.classify);
goog.exportSymbol("tfweb.ImageClassifier.prototype.cleanUp", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageClassifier.prototype.cleanUp);
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageSegmenter = function (a, b, c) { this.module = a; this.memOffsetsToFree = b; this.cppClassifier = c; };
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageSegmenter.create = function (a, b) {
    b = void 0 === b ? new proto.tflite.task.vision.ImageSegmenterOptions : b;
    var c, d, e, f, g, k, h, l, m, n, p;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (q) {
        if (1 == q.nextAddress)
            return c = module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.getInstance(module$contents$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client_wasmModulesPath, "tflite_web_api", '"use strict";var Module={};var initializedJS=false;function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(" ");console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:text,threadId:Module["_pthread_self"]()})}var err=threadPrintErr;self.alert=threadAlert;Module["instantiateWasm"]=function(info,receiveInstance){var instance=new WebAssembly.Instance(Module["wasmModule"],info);receiveInstance(instance);Module["wasmModule"]=null;return instance.exports};self.onmessage=function(e){try{if(e.data.cmd==="load"){Module["wasmModule"]=e.data.wasmModule;Module["wasmMemory"]=e.data.wasmMemory;Module["buffer"]=Module["wasmMemory"].buffer;Module["ENVIRONMENT_IS_PTHREAD"]=true;if(typeof e.data.urlOrBlob==="string"){importScripts(e.data.urlOrBlob)}else{var objectUrl=URL.createObjectURL(e.data.urlOrBlob);importScripts(objectUrl);URL.revokeObjectURL(objectUrl)}tflite_web_api_ModuleFactory(Module).then(function(instance){Module=instance})}else if(e.data.cmd==="run"){Module["__performance_now_clock_drift"]=performance.now()-e.data.time;Module["__emscripten_thread_init"](e.data.threadInfoStruct,0,0);var max=e.data.stackBase;var top=e.data.stackBase+e.data.stackSize;Module["establishStackSpace"](top,max);Module["PThread"].receiveObjectTransfer(e.data);Module["PThread"].threadInit();if(!initializedJS){Module["___embind_register_native_and_builtin_types"]();initializedJS=true}try{var result=Module["invokeEntryPoint"](e.data.start_routine,e.data.arg);if(Module["keepRuntimeAlive"]()){Module["PThread"].setExitStatus(result)}else{Module["__emscripten_thread_exit"](result)}}catch(ex){if(ex!="unwind"){if(ex instanceof Module["ExitStatus"]){if(Module["keepRuntimeAlive"]()){}else{Module["__emscripten_thread_exit"](ex.status)}}else{throw ex}}}}else if(e.data.cmd==="cancel"){if(Module["_pthread_self"]()){Module["__emscripten_thread_exit"](-1)}postMessage({"cmd":"cancelDone"})}else if(e.data.target==="setimmediate"){}else if(e.data.cmd==="processThreadQueue"){if(Module["_pthread_self"]()){Module["_emscripten_current_thread_process_queued_calls"]()}}else{err("worker.js received unknown command "+e.data.cmd);err(e.data)}}catch(ex){err("worker.js onmessage() captured an uncaught exception: "+ex);if(ex&&ex.stack)err(ex.stack);throw ex}};\n'),
                d = $jscomp, e = d.makeIterator, q.yield(Promise.all([c.load(), "string" === typeof a ? fetch(a).then(function (r) { return r.arrayBuffer(); }) : Promise.resolve(a)]), 2);
        f = e.call(d, q.yieldResult);
        g = f.next().value;
        k = f.next().value;
        h = g;
        l = k;
        m = new Uint8Array(l);
        n = h._malloc(m.length);
        h.HEAPU8.set(m, n);
        p = (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.callAndDelete)(new h.ImageSegmenterOptionsCppProto, function (r) {
            if (null != r)
                return r.initFromJsProto(b), h.ImageSegmenter.CreateFromOptions(n, m.length, r);
        });
        if (null === p || void 0 === p || !p.ok())
            throw Error("Failed to create ImageSegmenter: " + (null === p || void 0 === p ? void 0 : p.errorMessage()));
        return q.return(new module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageSegmenter(h, [n], p.value()));
    });
};
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageSegmenter.prototype.segment = function (a) {
    if (null != this.cppClassifier) {
        var b = (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.fromPixels)(a);
        a = b.vals;
        var c = b.width, d = b.height;
        if (null != a)
            return b = this.module._malloc(a.length), this.module.HEAPU8.set(a, b), a = this.cppClassifier.Segment(b, c, d), this.module._free(b), (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.callWithStatusOrAndDelete)(a, "Failed to run inference method segment: ", function (e) { e = e.toArrayBuffer(); return proto.tflite.task.vision.SegmentationResult.deserializeBinary(e); });
    }
};
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageSegmenter.prototype.cleanUp = function () { if (null != this.cppClassifier) {
    for (var a = $jscomp.makeIterator(this.memOffsetsToFree), b = a.next(); !b.done; b = a.next())
        this.module._free(b.value);
    this.cppClassifier.delete();
} };
goog.exportSymbol("tfweb.ImageSegmenterOptions", proto.tflite.task.vision.ImageSegmenterOptions);
goog.exportSymbol("tfweb.ImageSegmenterOptions.prototype.serializeBinary", proto.tflite.task.vision.ImageSegmenterOptions.prototype.serializeBinary);
goog.exportSymbol("tfweb.SegmentationResult", proto.tflite.task.vision.SegmentationResult);
goog.exportSymbol("tfweb.SegmentationResult.prototype.serializeBinary", proto.tflite.task.vision.SegmentationResult.prototype.serializeBinary);
goog.exportSymbol("tfweb.ImageSegmenter", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageSegmenter);
goog.exportSymbol("tfweb.ImageSegmenter.create", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageSegmenter.create);
goog.exportSymbol("tfweb.ImageSegmenter.prototype.segment", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageSegmenter.prototype.segment);
goog.exportSymbol("tfweb.ImageSegmenter.prototype.cleanUp", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ImageSegmenter.prototype.cleanUp);
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.NLClassifier = function (a, b, c) { this.module = a; this.memOffsetsToFree = b; this.cppClassifier = c; };
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.NLClassifier.create = function (a, b) {
    var c, d, e, f, g, k, h, l, m, n, p;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (q) {
        if (1 == q.nextAddress)
            return c = module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.getInstance(module$contents$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client_wasmModulesPath, "tflite_web_api", '"use strict";var Module={};var initializedJS=false;function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(" ");console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:text,threadId:Module["_pthread_self"]()})}var err=threadPrintErr;self.alert=threadAlert;Module["instantiateWasm"]=function(info,receiveInstance){var instance=new WebAssembly.Instance(Module["wasmModule"],info);receiveInstance(instance);Module["wasmModule"]=null;return instance.exports};self.onmessage=function(e){try{if(e.data.cmd==="load"){Module["wasmModule"]=e.data.wasmModule;Module["wasmMemory"]=e.data.wasmMemory;Module["buffer"]=Module["wasmMemory"].buffer;Module["ENVIRONMENT_IS_PTHREAD"]=true;if(typeof e.data.urlOrBlob==="string"){importScripts(e.data.urlOrBlob)}else{var objectUrl=URL.createObjectURL(e.data.urlOrBlob);importScripts(objectUrl);URL.revokeObjectURL(objectUrl)}tflite_web_api_ModuleFactory(Module).then(function(instance){Module=instance})}else if(e.data.cmd==="run"){Module["__performance_now_clock_drift"]=performance.now()-e.data.time;Module["__emscripten_thread_init"](e.data.threadInfoStruct,0,0);var max=e.data.stackBase;var top=e.data.stackBase+e.data.stackSize;Module["establishStackSpace"](top,max);Module["PThread"].receiveObjectTransfer(e.data);Module["PThread"].threadInit();if(!initializedJS){Module["___embind_register_native_and_builtin_types"]();initializedJS=true}try{var result=Module["invokeEntryPoint"](e.data.start_routine,e.data.arg);if(Module["keepRuntimeAlive"]()){Module["PThread"].setExitStatus(result)}else{Module["__emscripten_thread_exit"](result)}}catch(ex){if(ex!="unwind"){if(ex instanceof Module["ExitStatus"]){if(Module["keepRuntimeAlive"]()){}else{Module["__emscripten_thread_exit"](ex.status)}}else{throw ex}}}}else if(e.data.cmd==="cancel"){if(Module["_pthread_self"]()){Module["__emscripten_thread_exit"](-1)}postMessage({"cmd":"cancelDone"})}else if(e.data.target==="setimmediate"){}else if(e.data.cmd==="processThreadQueue"){if(Module["_pthread_self"]()){Module["_emscripten_current_thread_process_queued_calls"]()}}else{err("worker.js received unknown command "+e.data.cmd);err(e.data)}}catch(ex){err("worker.js onmessage() captured an uncaught exception: "+ex);if(ex&&ex.stack)err(ex.stack);throw ex}};\n'),
                d = $jscomp, e = d.makeIterator, q.yield(Promise.all([c.load(), "string" === typeof a ? fetch(a).then(function (r) { return r.arrayBuffer(); }) : Promise.resolve(a)]), 2);
        f = e.call(d, q.yieldResult);
        g = f.next().value;
        k = f.next().value;
        h = g;
        l = k;
        m = new Uint8Array(l);
        n = h._malloc(m.length);
        h.HEAPU8.set(m, n);
        p = h.NLClassifier.CreateFromBufferAndOptions(n, m.length, b);
        if (null === p || void 0 === p || !p.ok())
            throw Error("Failed to create NLClassifier: " + (null === p || void 0 === p ? void 0 : p.errorMessage()));
        return q.return(new module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.NLClassifier(h, [n], p.value()));
    });
};
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.NLClassifier.prototype.classify = function (a) { if (null != this.cppClassifier)
    return a = this.cppClassifier.Classify(a), (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.callAndDelete)(a, function (b) { return (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.convertCppVectorToArray)(b); }); };
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.NLClassifier.prototype.cleanUp = function () { if (null != this.cppClassifier) {
    for (var a = $jscomp.makeIterator(this.memOffsetsToFree), b = a.next(); !b.done; b = a.next())
        this.module._free(b.value);
    this.cppClassifier.delete();
} };
goog.exportSymbol("tfweb.NLClassifier", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.NLClassifier);
goog.exportSymbol("tfweb.NLClassifier.create", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.NLClassifier.create);
goog.exportSymbol("tfweb.NLClassifier.prototype.classify", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.NLClassifier.prototype.classify);
goog.exportSymbol("tfweb.NLClassifier.prototype.cleanUp", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.NLClassifier.prototype.cleanUp);
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ObjectDetector = function (a, b, c) { this.module = a; this.memOffsetsToFree = b; this.cppClassifier = c; };
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ObjectDetector.create = function (a, b) {
    b = void 0 === b ? new proto.tflite.task.vision.ObjectDetectorOptions : b;
    var c, d, e, f, g, k, h, l, m, n, p;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (q) {
        if (1 == q.nextAddress)
            return c = module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.getInstance(module$contents$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client_wasmModulesPath, "tflite_web_api", '"use strict";var Module={};var initializedJS=false;function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(" ");console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:text,threadId:Module["_pthread_self"]()})}var err=threadPrintErr;self.alert=threadAlert;Module["instantiateWasm"]=function(info,receiveInstance){var instance=new WebAssembly.Instance(Module["wasmModule"],info);receiveInstance(instance);Module["wasmModule"]=null;return instance.exports};self.onmessage=function(e){try{if(e.data.cmd==="load"){Module["wasmModule"]=e.data.wasmModule;Module["wasmMemory"]=e.data.wasmMemory;Module["buffer"]=Module["wasmMemory"].buffer;Module["ENVIRONMENT_IS_PTHREAD"]=true;if(typeof e.data.urlOrBlob==="string"){importScripts(e.data.urlOrBlob)}else{var objectUrl=URL.createObjectURL(e.data.urlOrBlob);importScripts(objectUrl);URL.revokeObjectURL(objectUrl)}tflite_web_api_ModuleFactory(Module).then(function(instance){Module=instance})}else if(e.data.cmd==="run"){Module["__performance_now_clock_drift"]=performance.now()-e.data.time;Module["__emscripten_thread_init"](e.data.threadInfoStruct,0,0);var max=e.data.stackBase;var top=e.data.stackBase+e.data.stackSize;Module["establishStackSpace"](top,max);Module["PThread"].receiveObjectTransfer(e.data);Module["PThread"].threadInit();if(!initializedJS){Module["___embind_register_native_and_builtin_types"]();initializedJS=true}try{var result=Module["invokeEntryPoint"](e.data.start_routine,e.data.arg);if(Module["keepRuntimeAlive"]()){Module["PThread"].setExitStatus(result)}else{Module["__emscripten_thread_exit"](result)}}catch(ex){if(ex!="unwind"){if(ex instanceof Module["ExitStatus"]){if(Module["keepRuntimeAlive"]()){}else{Module["__emscripten_thread_exit"](ex.status)}}else{throw ex}}}}else if(e.data.cmd==="cancel"){if(Module["_pthread_self"]()){Module["__emscripten_thread_exit"](-1)}postMessage({"cmd":"cancelDone"})}else if(e.data.target==="setimmediate"){}else if(e.data.cmd==="processThreadQueue"){if(Module["_pthread_self"]()){Module["_emscripten_current_thread_process_queued_calls"]()}}else{err("worker.js received unknown command "+e.data.cmd);err(e.data)}}catch(ex){err("worker.js onmessage() captured an uncaught exception: "+ex);if(ex&&ex.stack)err(ex.stack);throw ex}};\n'),
                d = $jscomp, e = d.makeIterator, q.yield(Promise.all([c.load(), "string" === typeof a ? fetch(a).then(function (r) { return r.arrayBuffer(); }) : Promise.resolve(a)]), 2);
        f = e.call(d, q.yieldResult);
        g = f.next().value;
        k = f.next().value;
        h = g;
        l = k;
        m = new Uint8Array(l);
        n = h._malloc(m.length);
        h.HEAPU8.set(m, n);
        p = (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.callAndDelete)(new h.ObjectDetectorOptionsCppProto, function (r) {
            if (null != r)
                return r.initFromJsProto(b), h.ObjectDetector.CreateFromOptions(n, m.length, r);
        });
        if (null === p || void 0 === p || !p.ok())
            throw Error("Failed to create ObjectDetector: " + (null === p || void 0 === p ? void 0 : p.errorMessage()));
        return q.return(new module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ObjectDetector(h, [n], p.value()));
    });
};
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ObjectDetector.prototype.detect = function (a) {
    if (null != this.cppClassifier) {
        var b = (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.fromPixels)(a);
        a = b.vals;
        var c = b.width, d = b.height;
        if (null != a)
            return b = this.module._malloc(a.length), this.module.HEAPU8.set(a, b), a = this.cppClassifier.Detect(b, c, d), this.module._free(b), (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.callWithStatusOrAndDelete)(a, "Failed to run inference method detect: ", function (e) { e = e.toArrayBuffer(); return proto.tflite.task.vision.DetectionResult.deserializeBinary(e); });
    }
};
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ObjectDetector.prototype.cleanUp = function () { if (null != this.cppClassifier) {
    for (var a = $jscomp.makeIterator(this.memOffsetsToFree), b = a.next(); !b.done; b = a.next())
        this.module._free(b.value);
    this.cppClassifier.delete();
} };
goog.exportSymbol("tfweb.DetectionResult", proto.tflite.task.vision.DetectionResult);
goog.exportSymbol("tfweb.DetectionResult.prototype.serializeBinary", proto.tflite.task.vision.DetectionResult.prototype.serializeBinary);
goog.exportSymbol("tfweb.ObjectDetectorOptions", proto.tflite.task.vision.ObjectDetectorOptions);
goog.exportSymbol("tfweb.ObjectDetectorOptions.prototype.serializeBinary", proto.tflite.task.vision.ObjectDetectorOptions.prototype.serializeBinary);
goog.exportSymbol("tfweb.ObjectDetector", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ObjectDetector);
goog.exportSymbol("tfweb.ObjectDetector.create", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ObjectDetector.create);
goog.exportSymbol("tfweb.ObjectDetector.prototype.detect", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ObjectDetector.prototype.detect);
goog.exportSymbol("tfweb.ObjectDetector.prototype.cleanUp", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.ObjectDetector.prototype.cleanUp);
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner = function (a, b, c) { this.module = a; this.memOffsetsToFree = b; this.cppClassifier = c; };
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner.create = function (a, b) {
    b = void 0 === b ? {} : b;
    var c, d, e, f, g, k, h, l, m, n, p;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (q) {
        if (1 == q.nextAddress)
            return c = module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.getInstance(module$contents$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client_wasmModulesPath, "tflite_web_api", '"use strict";var Module={};var initializedJS=false;function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(" ");console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:text,threadId:Module["_pthread_self"]()})}var err=threadPrintErr;self.alert=threadAlert;Module["instantiateWasm"]=function(info,receiveInstance){var instance=new WebAssembly.Instance(Module["wasmModule"],info);receiveInstance(instance);Module["wasmModule"]=null;return instance.exports};self.onmessage=function(e){try{if(e.data.cmd==="load"){Module["wasmModule"]=e.data.wasmModule;Module["wasmMemory"]=e.data.wasmMemory;Module["buffer"]=Module["wasmMemory"].buffer;Module["ENVIRONMENT_IS_PTHREAD"]=true;if(typeof e.data.urlOrBlob==="string"){importScripts(e.data.urlOrBlob)}else{var objectUrl=URL.createObjectURL(e.data.urlOrBlob);importScripts(objectUrl);URL.revokeObjectURL(objectUrl)}tflite_web_api_ModuleFactory(Module).then(function(instance){Module=instance})}else if(e.data.cmd==="run"){Module["__performance_now_clock_drift"]=performance.now()-e.data.time;Module["__emscripten_thread_init"](e.data.threadInfoStruct,0,0);var max=e.data.stackBase;var top=e.data.stackBase+e.data.stackSize;Module["establishStackSpace"](top,max);Module["PThread"].receiveObjectTransfer(e.data);Module["PThread"].threadInit();if(!initializedJS){Module["___embind_register_native_and_builtin_types"]();initializedJS=true}try{var result=Module["invokeEntryPoint"](e.data.start_routine,e.data.arg);if(Module["keepRuntimeAlive"]()){Module["PThread"].setExitStatus(result)}else{Module["__emscripten_thread_exit"](result)}}catch(ex){if(ex!="unwind"){if(ex instanceof Module["ExitStatus"]){if(Module["keepRuntimeAlive"]()){}else{Module["__emscripten_thread_exit"](ex.status)}}else{throw ex}}}}else if(e.data.cmd==="cancel"){if(Module["_pthread_self"]()){Module["__emscripten_thread_exit"](-1)}postMessage({"cmd":"cancelDone"})}else if(e.data.target==="setimmediate"){}else if(e.data.cmd==="processThreadQueue"){if(Module["_pthread_self"]()){Module["_emscripten_current_thread_process_queued_calls"]()}}else{err("worker.js received unknown command "+e.data.cmd);err(e.data)}}catch(ex){err("worker.js onmessage() captured an uncaught exception: "+ex);if(ex&&ex.stack)err(ex.stack);throw ex}};\n'),
                d = $jscomp, e = d.makeIterator, q.yield(Promise.all([c.load(), "string" === typeof a ? fetch(a).then(function (r) { return r.arrayBuffer(); }) : Promise.resolve(a)]), 2);
        f = e.call(d, q.yieldResult);
        g = f.next().value;
        k = f.next().value;
        h = g;
        l = k;
        m = new Uint8Array(l);
        n = h._malloc(m.length);
        h.HEAPU8.set(m, n);
        null == b.numThreads && (b.numThreads = navigator ? navigator.hardwareConcurrency / 2 : -1);
        null == b.enableProfiling && (b.enableProfiling = !1);
        null == b.maxProfilingBufferEntries && (b.maxProfilingBufferEntries = 1024);
        p = h.TFLiteWebModelRunner.CreateFromBufferAndOptions(n, m.length, b);
        if (null === p || void 0 === p || !p.ok())
            throw Error("Failed to create TFLiteWebModelRunner: " + (null === p || void 0 === p ? void 0 : p.errorMessage()));
        return q.return(new module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner(h, [n], p.value()));
    });
};
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner.prototype.getInputs = function () { if (null != this.cppClassifier) {
    var a = this.cppClassifier.GetInputs();
    return (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.callAndDelete)(a, function (b) { return (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.convertCppVectorToArray)(b); });
} };
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner.prototype.getOutputs = function () { if (null != this.cppClassifier) {
    var a = this.cppClassifier.GetOutputs();
    return (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.callAndDelete)(a, function (b) { return (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.convertCppVectorToArray)(b); });
} };
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner.prototype.infer = function () { if (null != this.cppClassifier)
    return this.cppClassifier.Infer(); };
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner.prototype.getProfilingResults = function () { if (null != this.cppClassifier) {
    var a = this.cppClassifier.GetProfilingResults();
    return (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.callAndDelete)(a, function (b) { return (0, module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.convertCppVectorToArray)(b); });
} };
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner.prototype.getProfilingSummary = function () { if (null != this.cppClassifier)
    return this.cppClassifier.GetProfilingSummary(); };
module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner.prototype.cleanUp = function () { if (null != this.cppClassifier) {
    for (var a = $jscomp.makeIterator(this.memOffsetsToFree), b = a.next(); !b.done; b = a.next())
        this.module._free(b.value);
    this.cppClassifier.delete();
} };
goog.exportSymbol("tfweb.TFLiteWebModelRunner", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner);
goog.exportSymbol("tfweb.TFLiteWebModelRunner.create", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner.create);
goog.exportSymbol("tfweb.TFLiteWebModelRunner.prototype.getInputs", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner.prototype.getInputs);
goog.exportSymbol("tfweb.TFLiteWebModelRunner.prototype.getOutputs", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner.prototype.getOutputs);
goog.exportSymbol("tfweb.TFLiteWebModelRunner.prototype.infer", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner.prototype.infer);
goog.exportSymbol("tfweb.TFLiteWebModelRunner.prototype.getProfilingResults", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner.prototype.getProfilingResults);
goog.exportSymbol("tfweb.TFLiteWebModelRunner.prototype.getProfilingSummary", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner.prototype.getProfilingSummary);
goog.exportSymbol("tfweb.TFLiteWebModelRunner.prototype.cleanUp", module$exports$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client.TFLiteWebModelRunner.prototype.cleanUp);
goog.exportSymbol("tfweb.tflite_web_api.setWasmPath", module$contents$google3$third_party$tensorflow_lite_support$web$tflite_web_api_client_setWasmPath);
goog.exportSymbol("tfweb.tflite_web_api.getWasmFeatures", module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$utils.getWasmFeatures);
module$exports$google3$third_party$tensorflow_lite_support$web$task$codegen$common$emscripten_module_loader.EmscriptenModuleLoader.getInstance("", "tflite_web_api", '"use strict";var Module={};var initializedJS=false;function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(" ");console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:text,threadId:Module["_pthread_self"]()})}var err=threadPrintErr;self.alert=threadAlert;Module["instantiateWasm"]=function(info,receiveInstance){var instance=new WebAssembly.Instance(Module["wasmModule"],info);receiveInstance(instance);Module["wasmModule"]=null;return instance.exports};self.onmessage=function(e){try{if(e.data.cmd==="load"){Module["wasmModule"]=e.data.wasmModule;Module["wasmMemory"]=e.data.wasmMemory;Module["buffer"]=Module["wasmMemory"].buffer;Module["ENVIRONMENT_IS_PTHREAD"]=true;if(typeof e.data.urlOrBlob==="string"){importScripts(e.data.urlOrBlob)}else{var objectUrl=URL.createObjectURL(e.data.urlOrBlob);importScripts(objectUrl);URL.revokeObjectURL(objectUrl)}tflite_web_api_ModuleFactory(Module).then(function(instance){Module=instance})}else if(e.data.cmd==="run"){Module["__performance_now_clock_drift"]=performance.now()-e.data.time;Module["__emscripten_thread_init"](e.data.threadInfoStruct,0,0);var max=e.data.stackBase;var top=e.data.stackBase+e.data.stackSize;Module["establishStackSpace"](top,max);Module["PThread"].receiveObjectTransfer(e.data);Module["PThread"].threadInit();if(!initializedJS){Module["___embind_register_native_and_builtin_types"]();initializedJS=true}try{var result=Module["invokeEntryPoint"](e.data.start_routine,e.data.arg);if(Module["keepRuntimeAlive"]()){Module["PThread"].setExitStatus(result)}else{Module["__emscripten_thread_exit"](result)}}catch(ex){if(ex!="unwind"){if(ex instanceof Module["ExitStatus"]){if(Module["keepRuntimeAlive"]()){}else{Module["__emscripten_thread_exit"](ex.status)}}else{throw ex}}}}else if(e.data.cmd==="cancel"){if(Module["_pthread_self"]()){Module["__emscripten_thread_exit"](-1)}postMessage({"cmd":"cancelDone"})}else if(e.data.target==="setimmediate"){}else if(e.data.cmd==="processThreadQueue"){if(Module["_pthread_self"]()){Module["_emscripten_current_thread_process_queued_calls"]()}}else{err("worker.js received unknown command "+e.data.cmd);err(e.data)}}catch(ex){err("worker.js onmessage() captured an uncaught exception: "+ex);if(ex&&ex.stack)err(ex.stack);throw ex}};\n').load(!0);
var tfweb$1 = (typeof window !== 'undefined' && window['tfweb']) || commonjsGlobal['tfweb'];
var tfweb_1 = tfweb$1;
var tflite_web_api_client = {
    tfweb: tfweb_1
};

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// The '../wasm/tflite_web_api_client.js' file was generated by JS closure
// compiler. It was not "module friendly" so we cannot import it directly in
// typescript code. To workaround this issue, we import and re-export it in this
// file to essentially convert it to a valid CommonJS module, which can then be
// imported correctly by typescript code.
var tfweb = tflite_web_api_client.tfweb;

var TFHUB_SEARCH_PARAM = '?lite-format=tflite';
/**
 * A `tflite.TFLiteModel` is built from a TFLite model flatbuffer and executable
 * on TFLite interpreter. To load it, use the `loadTFLiteModel` function below.
 *
 * Sample usage:
 *
 * ```js
 * // Load the MobilenetV2 tflite model from tfhub.
 * const tfliteModel = tflite.loadTFLiteModel(
 *     'https://tfhub.dev/tensorflow/lite-model/mobilenet_v2_1.0_224/1/metadata/1');
 *
 * const outputTensor = tf.tidy(() => {
 *    // Get pixels data from an image.
 *    const img = tf.browser.fromPixels(document.querySelector('img'));
 *    // Normalize (might also do resize here if necessary).
 *    const input = tf.sub(tf.div(tf.expandDims(img), 127.5), 1);
 *    // Run the inference.
 *    let outputTensor = tfliteModel.predict(input) as tf.Tensor;
 *    // De-normalize the result.
 *    return tf.mul(tf.add(outputTensor, 1), 127.5)
 *  });
 * console.log(outputTensor);
 *
 * ```
 *
 * @doc {heading: 'Models', subheading: 'Classes'}
 */
var TFLiteModel = /** @class */ (function () {
    function TFLiteModel(modelRunner) {
        this.modelRunner = modelRunner;
    }
    Object.defineProperty(TFLiteModel.prototype, "inputs", {
        get: function () {
            var modelInputs = this.modelRunner.getInputs();
            return this.convertTFLiteTensorInfos(modelInputs);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TFLiteModel.prototype, "outputs", {
        get: function () {
            var modelOutputs = this.modelRunner.getOutputs();
            return this.convertTFLiteTensorInfos(modelOutputs);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Execute the inference for the input tensors.
     *
     * @param inputs The input tensors, when there is single input for the model,
     *     inputs param should be a Tensor. For models with multiple inputs,
     *     inputs params should be in either Tensor[] if the input order is fixed,
     *     or otherwise NamedTensorMap format.
     *
     * @param config Prediction configuration for specifying the batch size.
     *     Currently this field is not used, and batch inference is not supported.
     *
     * @returns Inference result tensors. The output would be single Tensor if
     *     model has single output node, otherwise NamedTensorMap will be returned
     *     for model with multiple outputs. Tensor[] is not used.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    TFLiteModel.prototype.predict = function (inputs, config) {
        var e_1, _a;
        var modelInputs = this.modelRunner.getInputs();
        var modelOutputs = this.modelRunner.getOutputs();
        // Set model inputs from the given tensors.
        // A single tensor or a tensor array.
        if (inputs instanceof tfjsCore.Tensor || Array.isArray(inputs)) {
            var inputTensors = void 0;
            if (inputs instanceof tfjsCore.Tensor) {
                inputTensors = [inputs];
            }
            else {
                inputTensors = inputs;
            }
            if (modelInputs.length !== inputTensors.length) {
                throw new Error("The size of TFLite model inputs (" + modelInputs
                    .length + ") does not match the size of the input tensors (" + inputTensors.length + ")");
            }
            for (var i = 0; i < modelInputs.length; i++) {
                this.setModelInputFromTensor(modelInputs[i], inputTensors[i]);
            }
        }
        // Named tensors.
        else {
            var inputTensorNames = Object.keys(inputs);
            var modelInputMap_1 = {};
            modelInputs.forEach(function (modelInput) {
                modelInputMap_1[modelInput.name] = modelInput;
            });
            var modelInputNames = Object.keys(modelInputMap_1);
            this.checkMapInputs(inputTensorNames, modelInputNames);
            try {
                for (var inputTensorNames_1 = __values(inputTensorNames), inputTensorNames_1_1 = inputTensorNames_1.next(); !inputTensorNames_1_1.done; inputTensorNames_1_1 = inputTensorNames_1.next()) {
                    var name = inputTensorNames_1_1.value;
                    this.setModelInputFromTensor(modelInputMap_1[name], inputs[name]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (inputTensorNames_1_1 && !inputTensorNames_1_1.done && (_a = inputTensorNames_1.return)) _a.call(inputTensorNames_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        // Run inference.
        var success = this.modelRunner.infer();
        if (!success) {
            throw new Error('Failed running inference');
        }
        // Convert model outputs to tensors.
        var outputTensors = {};
        for (var i = 0; i < modelOutputs.length; i++) {
            var modelOutput = modelOutputs[i];
            var data = modelOutput.data();
            // Convert TFLite tensor types that are not supported by TFJS to
            // compatible types.
            switch (modelOutput.dataType) {
                case 'int8':
                case 'int16':
                case 'uint32':
                    data = Int32Array.from(data);
                    break;
                case 'float64':
                    console.warn("WARNING: converting output tensor from 'float64' to 'float32'");
                    data = Float32Array.from(data);
                    break;
            }
            var outputTensor = tfjsCore.tensor(data, this.getShapeFromTFLiteTensorInfo(modelOutput));
            outputTensors[modelOutput.name] = outputTensor;
        }
        var names = Object.keys(outputTensors);
        return names.length === 1 ? outputTensors[names[0]] : outputTensors;
    };
    /**
     * Execute the inference for the input tensors and return activation
     * values for specified output node names without batching.
     *
     * @param inputs The input tensors, when there is single input for the model,
     *     inputs param should be a Tensor. For models with multiple inputs,
     *     inputs params should be in either Tensor[] if the input order is fixed,
     *     or otherwise NamedTensorMap format.
     *
     * @param outputs string|string[]. List of output node names to retrieve
     *     activation from.
     *
     * @returns Activation values for the output nodes result tensors. The return
     *     type matches specified parameter outputs type. The output would be
     *     single Tensor if single output is specified, otherwise Tensor[] for
     *     multiple outputs.
     */
    TFLiteModel.prototype.execute = function (inputs, outputs) {
        throw new Error('execute() of TFLiteModel is not supported yet.');
    };
    TFLiteModel.prototype.getProfilingResults = function () {
        return this.modelRunner.getProfilingResults();
    };
    TFLiteModel.prototype.getProfilingSummary = function () {
        return this.modelRunner.getProfilingSummary();
    };
    TFLiteModel.prototype.setModelInputFromTensor = function (modelInput, tensor) {
        // String and complex tensors are not supported.
        if (tensor.dtype === 'string' || tensor.dtype === 'complex64') {
            throw new Error("Data type '" + tensor.dtype + "' not supported.");
        }
        // Check shape.
        //
        // At this point, we've already checked that input tensors and model inputs
        // have the same size.
        var modelInputShape = modelInput.shape.split(',').map(function (dim) { return Number(dim); });
        if (!tensor.shape.every(function (dim, index) { return modelInputShape[index] === -1 ||
            modelInputShape[index] === dim; })) {
            throw new Error("Input tensor shape mismatch: expect '" + modelInput.shape + "', got '" + tensor.shape.join(',') + "'.");
        }
        // Check types.
        switch (modelInput.dataType) {
            // All 'bool' and 'int' tflite types accpet 'bool' or 'int32' tfjs types.
            // Will throw error for 'float32' tfjs type.
            case 'bool':
            case 'int8':
            case 'uint8':
            case 'int16':
            case 'uint32':
            case 'int32':
                if (tensor.dtype === 'float32') {
                    throw this.getDataTypeMismatchError(modelInput.dataType, tensor.dtype);
                }
                else if (modelInput.dataType !== tensor.dtype) {
                    console.warn("WARNING: converting '" + tensor.dtype + "' to '" + modelInput.dataType + "'");
                }
                break;
            // All 'float' tflite types accept all tfjs types.
            case 'float32':
            case 'float64':
                if (modelInput.dataType !== tensor.dtype) {
                    console.warn("WARNING: converting '" + tensor.dtype + "' to '" + modelInput.dataType + "'");
                }
                break;
        }
        var modelInputBuffer = modelInput.data();
        switch (modelInput.dataType) {
            case 'int8':
                modelInputBuffer.set(Int8Array.from(tensor.dataSync()));
                break;
            case 'uint8':
            case 'bool':
                modelInputBuffer.set(Uint8Array.from(tensor.dataSync()));
                break;
            case 'int16':
                modelInputBuffer.set(Int16Array.from(tensor.dataSync()));
                break;
            case 'int32':
                modelInputBuffer.set(Int32Array.from(tensor.dataSync()));
                break;
            case 'uint32':
                modelInputBuffer.set(Uint32Array.from(tensor.dataSync()));
                break;
            case 'float32':
                modelInputBuffer.set(Float32Array.from(tensor.dataSync()));
                break;
            case 'float64':
                modelInputBuffer.set(Float64Array.from(tensor.dataSync()));
                break;
        }
    };
    TFLiteModel.prototype.convertTFLiteTensorInfos = function (infos) {
        var _this = this;
        return infos.map(function (info) {
            var dtype = getDTypeFromTFLiteType(info.dataType);
            return {
                name: info.name,
                shape: _this.getShapeFromTFLiteTensorInfo(info),
                dtype: dtype,
            };
        });
    };
    TFLiteModel.prototype.checkMapInputs = function (inputTensorNames, modelInputNames) {
        var notInModel = inputTensorNames.filter(function (name) { return !modelInputNames.includes(name); });
        var notInInput = modelInputNames.filter(function (name) { return !inputTensorNames.includes(name); });
        if (notInModel.length === 0 && notInInput.length === 0) {
            return;
        }
        var msgParts = ['The model input names don\'t match the model input names.'];
        if (notInModel.length > 0) {
            msgParts.push("Names in input but missing in model: [" + notInModel + "].");
        }
        if (notInInput.length > 0) {
            msgParts.push("Names in model but missing in inputs: [" + notInInput + "].");
        }
        throw new Error(msgParts.join(' '));
    };
    TFLiteModel.prototype.getShapeFromTFLiteTensorInfo = function (info) {
        return info.shape.split(',').map(function (s) { return Number(s); });
    };
    TFLiteModel.prototype.getDataTypeMismatchError = function (expected, got) {
        return new Error("Data type mismatch: input tensor expects '" + expected + "', got '" + got + "'");
    };
    return TFLiteModel;
}());
/**
 * Loads a TFLiteModel from the given model url.
 *
 * @param model The path to the model (string), or the model content in memory
 *     (ArrayBuffer).
 * @param options Options related to model inference.
 *
 * @doc {heading: 'Models', subheading: 'Loading'}
 */
function loadTFLiteModel(model, options) {
    return __awaiter(this, void 0, void 0, function () {
        var tfliteModelRunner;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Handle tfhub links.
                    if (typeof model === 'string' && model.includes('tfhub.dev') &&
                        model.includes('lite-model') && !model.endsWith(TFHUB_SEARCH_PARAM)) {
                        model = "" + model + TFHUB_SEARCH_PARAM;
                    }
                    return [4 /*yield*/, tfweb.TFLiteWebModelRunner.create(model, options)];
                case 1:
                    tfliteModelRunner = _a.sent();
                    return [2 /*return*/, new TFLiteModel(tfliteModelRunner)];
            }
        });
    });
}
/**
 * Returns the compatible tfjs DataType from the given TFLite data type.
 *
 * @param tfliteType The type in TFLite.
 *
 * @doc {heading: 'Models', subheading: 'Utilities'}
 */
function getDTypeFromTFLiteType(tfliteType) {
    var dtype;
    switch (tfliteType) {
        case 'float32':
        case 'float64':
            dtype = 'float32';
            break;
        case 'int8':
        case 'uint8':
        case 'int16':
        case 'int32':
        case 'uint32':
            dtype = 'int32';
            break;
        case 'bool':
            dtype = 'bool';
            break;
    }
    return dtype;
}

/** Convert proto Class array to our own Class array. */
function convertProtoClassesToClasses(protoClasses) {
    var classes = [];
    protoClasses.forEach(function (cls) {
        classes.push({
            className: cls.getDisplayName() || cls.getClassName(),
            probability: cls.getScore(),
        });
    });
    return classes;
}
/** The global function to set WASM path. */
var setWasmPath = tfweb.tflite_web_api.setWasmPath;
/** The global function to get supported WASM features */
var getWasmFeatures = tfweb.tflite_web_api.getWasmFeatures;
/** The base class for all task library clients. */
var BaseTaskLibraryClient = /** @class */ (function () {
    function BaseTaskLibraryClient(instance) {
        this.instance = instance;
    }
    BaseTaskLibraryClient.prototype.cleanUp = function () {
        this.instance.cleanUp();
    };
    return BaseTaskLibraryClient;
}());
/** Gets the number of threads for best performance. */
function getDefaultNumThreads() {
    return __awaiter(this, void 0, void 0, function () {
        var supportMultiThreading;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, tfweb.tflite_web_api.getWasmFeatures()];
                case 1:
                    supportMultiThreading = (_a.sent())
                        .multiThreading;
                    return [2 /*return*/, supportMultiThreading ? navigator.hardwareConcurrency / 2 : -1];
            }
        });
    });
}

/**
 * Client for ImageClassifier TFLite Task Library.
 *
 * It is a wrapper around the underlying javascript API to make it more
 * convenient to use. See comments in the corresponding type declaration file in
 * src/types for more info.
 */
var ImageClassifier = /** @class */ (function (_super) {
    __extends(ImageClassifier, _super);
    function ImageClassifier(instance) {
        var _this = _super.call(this, instance) || this;
        _this.instance = instance;
        return _this;
    }
    ImageClassifier.create = function (model, options) {
        return __awaiter(this, void 0, void 0, function () {
            var optionsProto, _a, _b, instance;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        optionsProto = new tfweb.ImageClassifierOptions();
                        if (options) {
                            if (options.maxResults !== undefined) {
                                optionsProto.setMaxResults(options.maxResults);
                            }
                            if (options.scoreThreshold !== undefined) {
                                optionsProto.setScoreThreshold(options.scoreThreshold);
                            }
                            if (options.numThreads !== undefined) {
                                optionsProto.setNumThreads(options.numThreads);
                            }
                        }
                        if (!(!options || options.numThreads === undefined)) return [3 /*break*/, 2];
                        _b = (_a = optionsProto).setNumThreads;
                        return [4 /*yield*/, getDefaultNumThreads()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2: return [4 /*yield*/, tfweb.ImageClassifier.create(model, optionsProto)];
                    case 3:
                        instance = _c.sent();
                        return [2 /*return*/, new ImageClassifier(instance)];
                }
            });
        });
    };
    ImageClassifier.prototype.classify = function (input) {
        var result = this.instance.classify(input);
        if (!result) {
            return [];
        }
        var classes = [];
        if (result.getClassificationsList().length > 0) {
            classes = convertProtoClassesToClasses(result.getClassificationsList()[0].getClassesList());
        }
        return classes;
    };
    return ImageClassifier;
}(BaseTaskLibraryClient));

/** Different output types. */
exports.OutputType = void 0;
(function (OutputType) {
    OutputType[OutputType["CATEGORY_MASK"] = 1] = "CATEGORY_MASK";
    OutputType[OutputType["CONFIDENCE_MASK"] = 2] = "CONFIDENCE_MASK";
    OutputType[OutputType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
})(exports.OutputType || (exports.OutputType = {}));
/**
 * Client for ImageSegmenter TFLite Task Library.
 *
 * It is a wrapper around the underlying javascript API to make it more
 * convenient to use. See comments in the corresponding type declaration file in
 * src/types for more info.
 */
var ImageSegmenter = /** @class */ (function (_super) {
    __extends(ImageSegmenter, _super);
    function ImageSegmenter(instance) {
        var _this = _super.call(this, instance) || this;
        _this.instance = instance;
        return _this;
    }
    ImageSegmenter.create = function (model, options) {
        return __awaiter(this, void 0, void 0, function () {
            var optionsProto, _a, _b, instance;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        optionsProto = new tfweb.ImageSegmenterOptions();
                        if (options) {
                            // Set defaults.
                            if (options.outputType) {
                                optionsProto.setOutputType(options.outputType);
                            }
                            if (options.numThreads !== undefined) {
                                optionsProto.setNumThreads(options.numThreads);
                            }
                        }
                        if (!(!options || options.numThreads === undefined)) return [3 /*break*/, 2];
                        _b = (_a = optionsProto).setNumThreads;
                        return [4 /*yield*/, getDefaultNumThreads()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2: return [4 /*yield*/, tfweb.ImageSegmenter.create(model, optionsProto)];
                    case 3:
                        instance = _c.sent();
                        return [2 /*return*/, new ImageSegmenter(instance)];
                }
            });
        });
    };
    ImageSegmenter.prototype.segment = function (input) {
        var result = this.instance.segment(input);
        if (!result) {
            return [];
        }
        var segmentations = [];
        if (result.getSegmentationList().length > 0) {
            result.getSegmentationList().forEach(function (seg) {
                var coloredLabels = seg.getColoredLabelsList().map(function (label) {
                    return {
                        r: label.getR(),
                        g: label.getG(),
                        b: label.getB(),
                        className: label.getClassName(),
                        displayName: label.getDisplayName(),
                    };
                });
                segmentations.push({
                    width: seg.getWidth(),
                    height: seg.getHeight(),
                    categoryMask: seg.getCategoryMask_asU8(),
                    coloredLabels: coloredLabels,
                });
            });
        }
        return segmentations;
    };
    return ImageSegmenter;
}(BaseTaskLibraryClient));

/**
 * Client for ObjectDetector TFLite Task Library.
 *
 * It is a wrapper around the underlying javascript API to make it more
 * convenient to use. See comments in the corresponding type declaration file in
 * src/types for more info.
 */
var ObjectDetector = /** @class */ (function (_super) {
    __extends(ObjectDetector, _super);
    function ObjectDetector(instance) {
        var _this = _super.call(this, instance) || this;
        _this.instance = instance;
        return _this;
    }
    ObjectDetector.create = function (model, options) {
        return __awaiter(this, void 0, void 0, function () {
            var optionsProto, _a, _b, instance;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        optionsProto = new tfweb.ObjectDetectorOptions();
                        if (options) {
                            if (options.maxResults !== undefined) {
                                optionsProto.setMaxResults(options.maxResults);
                            }
                            if (options.scoreThreshold !== undefined) {
                                optionsProto.setScoreThreshold(options.scoreThreshold);
                            }
                            if (options.numThreads !== undefined) {
                                optionsProto.setNumThreads(options.numThreads);
                            }
                        }
                        if (!(!options || options.numThreads === undefined)) return [3 /*break*/, 2];
                        _b = (_a = optionsProto).setNumThreads;
                        return [4 /*yield*/, getDefaultNumThreads()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2: return [4 /*yield*/, tfweb.ObjectDetector.create(model, optionsProto)];
                    case 3:
                        instance = _c.sent();
                        return [2 /*return*/, new ObjectDetector(instance)];
                }
            });
        });
    };
    ObjectDetector.prototype.detect = function (input) {
        var result = this.instance.detect(input);
        if (!result) {
            return [];
        }
        var detections = [];
        if (result.getDetectionsList().length > 0) {
            result.getDetectionsList().forEach(function (detection) {
                var boundingBoxProto = detection.getBoundingBox();
                var boundingBox = {
                    originX: boundingBoxProto.getOriginX(),
                    originY: boundingBoxProto.getOriginY(),
                    width: boundingBoxProto.getWidth(),
                    height: boundingBoxProto.getHeight(),
                };
                var classes = convertProtoClassesToClasses(detection.getClassesList());
                detections.push({ boundingBox: boundingBox, classes: classes });
            });
        }
        return detections;
    };
    return ObjectDetector;
}(BaseTaskLibraryClient));

/**
 * Default NLClassifier options.
 */
var DEFAULT_NLCLASSIFIER_OPTIONS = {
    inputTensorIndex: 0,
    outputScoreTensorIndex: 0,
    outputLabelTensorIndex: -1,
    inputTensorName: 'INPUT',
    outputScoreTensorName: 'OUTPUT_SCORE',
    outputLabelTensorName: 'OUTPUT_LABEL',
};
/**
 * Client for NLClassifier TFLite Task Library.
 *
 * It is a wrapper around the underlying javascript API to make it more
 * convenient to use. See comments in the corresponding type declaration file in
 * src/types for more info.
 */
var NLClassifier = /** @class */ (function (_super) {
    __extends(NLClassifier, _super);
    function NLClassifier(instance) {
        var _this = _super.call(this, instance) || this;
        _this.instance = instance;
        return _this;
    }
    NLClassifier.create = function (model, options) {
        if (options === void 0) { options = DEFAULT_NLCLASSIFIER_OPTIONS; }
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, tfweb.NLClassifier.create(model, options)];
                    case 1:
                        instance = _a.sent();
                        return [2 /*return*/, new NLClassifier(instance)];
                }
            });
        });
    };
    NLClassifier.prototype.classify = function (input) {
        return this.instance.classify(input).map(function (category) {
            return {
                probability: category.score,
                className: category.className,
            };
        });
    };
    return NLClassifier;
}(BaseTaskLibraryClient));

/**
 * Client for BertNLClassifier TFLite Task Library.
 *
 * It is a wrapper around the underlying javascript API to make it more
 * convenient to use. See comments in the corresponding type declaration file in
 * src/types for more info.
 */
var BertNLClassifier = /** @class */ (function (_super) {
    __extends(BertNLClassifier, _super);
    function BertNLClassifier(instance) {
        var _this = _super.call(this, instance) || this;
        _this.instance = instance;
        return _this;
    }
    BertNLClassifier.create = function (model, options) {
        return __awaiter(this, void 0, void 0, function () {
            var protoOptions, instance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protoOptions = new tfweb.BertNLClassifierOptions();
                        if (options) {
                            if (options.maxSeqLen) {
                                protoOptions.setMaxSeqLen(options.maxSeqLen);
                            }
                        }
                        return [4 /*yield*/, tfweb.BertNLClassifier.create(model, protoOptions)];
                    case 1:
                        instance = _a.sent();
                        return [2 /*return*/, new BertNLClassifier(instance)];
                }
            });
        });
    };
    BertNLClassifier.prototype.classify = function (input) {
        return this.instance.classify(input).map(function (category) {
            return {
                probability: category.score,
                className: category.className,
            };
        });
    };
    return BertNLClassifier;
}(BaseTaskLibraryClient));

/**
 * Client for BertQA TFLite Task Library.
 *
 * It is a wrapper around the underlying javascript API to make it more
 * convenient to use. See comments in the corresponding type declaration file in
 * src/types for more info.
 */
var BertQuestionAnswerer = /** @class */ (function (_super) {
    __extends(BertQuestionAnswerer, _super);
    function BertQuestionAnswerer(instance) {
        var _this = _super.call(this, instance) || this;
        _this.instance = instance;
        return _this;
    }
    BertQuestionAnswerer.create = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, tfweb.BertQuestionAnswerer.create(model)];
                    case 1:
                        instance = _a.sent();
                        return [2 /*return*/, new BertQuestionAnswerer(instance)];
                }
            });
        });
    };
    BertQuestionAnswerer.prototype.answer = function (context, question) {
        var result = this.instance.answer(context, question);
        if (!result) {
            return [];
        }
        return result.map(function (answer) {
            return {
                text: answer.text,
                pos: answer.pos,
            };
        });
    };
    return BertQuestionAnswerer;
}(BaseTaskLibraryClient));

exports.BertNLClassifier = BertNLClassifier;
exports.BertQuestionAnswerer = BertQuestionAnswerer;
exports.ImageClassifier = ImageClassifier;
exports.ImageSegmenter = ImageSegmenter;
exports.NLClassifier = NLClassifier;
exports.ObjectDetector = ObjectDetector;
exports.TFLiteModel = TFLiteModel;
exports.getDTypeFromTFLiteType = getDTypeFromTFLiteType;
exports.getWasmFeatures = getWasmFeatures;
exports.loadTFLiteModel = loadTFLiteModel;
exports.setWasmPath = setWasmPath;
//# sourceMappingURL=tf-tflite.node.js.map
