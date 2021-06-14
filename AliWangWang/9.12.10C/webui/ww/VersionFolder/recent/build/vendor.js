(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["IMKITModule"] = factory();
	else
		root["IMKITModule"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpIMKITModule"];
/******/ 	window["webpackJsonpIMKITModule"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + {"0":"2617b2e9271660a94f96"}[chunkId] + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32);
	__webpack_require__(2);
	module.exports = __webpack_require__(3);


/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * ----------------------------------
	 * @file: @ali/im.sdk
	 * @desc: 旺旺SDK
	 * @license MIT License
	 * ----------------------------------
	 */

	!(function(global, factory) {
	    'use strict';
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	            return factory(global)
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory(global);
	    } else {
	        global.imsdk = factory(global);
	    }
	})(window, function(global) {
	    'use strict';

	    // 调试模式
	    var IS_DEBUG = (global.location && location.href && /debug=true/i.test(location.href)) || (global.localStorage && !!localStorage.getItem('WW_DEBUG'));

	    // 普通日志
	    var _log = function() {
	        if ((IS_DEBUG || global.DEBUG) && global.console) {
	            console.log.apply(console, Array.prototype.slice.apply(arguments));
	        }
	    };

	    // 错误日志
	    var _errorLog = function () {
	        global.console && console.log.apply(console, Array.prototype.slice.apply(arguments));
	    }

	    // 是否是在imsdk容器中，非imsdk容器中的部分方法或参数有区别
	    var _isInIMSDKClient = /WW_IMSDK/i.test(navigator.userAgent);

	    /*--------------------------  TASK  ----------------------------*/

	    var TASK_CACHE = {};

	    function Task(namespace, config) {
	        this.id = workbench.createSequenceId();
	        this.namespace = namespace;
	        this.config = config || {};
	        this.cmd = this.config.cmd;
	        this.param = this.config.param || '';

	        if (this.param && this.param.__other) {
	            this.other = this.param.__other;
	            delete this.param.__other;
	        }

	        TASK_CACHE[this.id] = this;
	    }

	    Task.prototype = {
	        constructor: Task,

	        bindCallback: function(name, callback) {
	            var that = this;

	            this[name] = function(result) {
	                clearTimeout(that.timmer);
	                callback.call(that, result, that.cmd, that.param);

	                // 在当前任务上加一个Разрушен的标记，8秒之后再销毁
	                that.destroyed = true;
	                setTimeout(function () {delete TASK_CACHE[that.id]}, 8000)
	            };

	            return this;
	        },

	        success: function(callback) {
	            if (!callback || (!typeof callback === 'function')) return this;

	            this.bindCallback('onSuccess', callback);

	            return this;
	        },

	        failure: function(callback) {
	            if (!callback || (!typeof callback === 'function')) return this;

	            this.bindCallback('onFailure', callback);

	            return this;
	        },

	        timeout: function(time) {
	            var that = this;
	            time = parseInt(time);

	            time && (this.timmer = setTimeout(function() {
	                that.onFailure && that.onFailure({ret: 'TIMEOUT'});
	            }, time));

	            return this;
	        },

	        run: function() {
	            var param = this.param;
	            if (typeof param !== 'string') {
	                try {
	                    param = JSON.stringify(param);
	                } catch (err) {
	                    param = '';
	                }
	            }

	            try {
	                if (!this.other) {
	                    this.namespace.invoke(this.id, this.cmd, param);
	                } else {
	                    this.namespace.invoke(this.id, this.cmd, param, this.other);
	                }
	            } catch (err) {
	                _errorLog('%cError in Task.run: ' + this.cmd, 'color:red', err);
	            }

	            return this;
	        },

	        request: function (requestMethod) {
	            requestMethod = requestMethod || 'CommitHttpRequest';
	            var options = {
	                url: this.config.url,
	                method: this.config.method || 'get',
	                param: this.param
	            };

	            options = JSON.stringify(options);
	            try {
	                workbench.httprequest.invoke(this.id, requestMethod, options);
	            } catch (err) {
	                _errorLog('%cError in Task.request: ' + this.config.url, 'color:red', err);
	            }
	            return this;
	        }
	    };

	    /*--------------------------  SDK  ----------------------------*/

	    var SDK = {};

	    /**
	     * 调用客户端方法
	     * @param   {String}      fn              Название метода
	     * @param   {Object}      config          Элемент конфигурации
	     * @param   {Object}      config.param    Входные параметры клиентского метода
	     * @param   {Function}    config.success  Успешный обратный вызов
	     * @param   {Function}    config.failure  Неудачный обратный вызов
	     * @param   {Number}      config.timeout  сверхурочная работа
	     * @return  {Object}      SDK
	     * @example
	     * SDK.invoke('util.GetUserNick', {
	     *     param: {uid: 'uid'},
	     *     success: function() {},
	     *     failure: function() {},
	     *     timeout: 5000,
	     * });
	     */
	    SDK.invoke = function(fn, config) {
	        if (typeof fn !== 'string') {
	            return _errorLog('%cError in SDK.invoke: fn must be string', 'color:red', fn);
	        }

	        fn = fn.split('.');

	        var cmd = fn.pop(),
	            namespace = workbench;

	        try {
	            fn.forEach(function(n) {
	                namespace = namespace[n];
	            });
	        } catch (err) {
	            return _errorLog('%cError in SDK.invoke', 'color:red', err);
	        }

	        config = config || {};
	        config.cmd = cmd;

	        new Task(namespace, config)
	            .success(config.success)
	            .failure(config.failure)
	            .timeout(config.timeout)
	            .run();

	        return this;
	    };

	    /**
	     * 客户端代理的http请求
	     * @param   {object} config
	     * @param   {string} config.url
	     * @param   {string} [config.method = 'get']
	     * @param   {object} [config.param] Принимать участие
	     * @param   {string} [requestMethod = 'CommitHttpRequest']
	     * @return  {object} SDK
	     * @example
	     * SDK.ajax({
	     *      url: 'http://www.taobao.com/xxxx',
	     *      param: {id: 100},
	     *      success: function (result) {
	     *          // do something...
	     *      }
	     * }, 'QintaoRequest')
	     */
	    SDK.ajax = function (config, requestMethod) {
	        new Task(null, config)
	            .success(config.success)
	            .failure(config.failure)
	            .timeout(config.timeout)
	            .request(requestMethod);

	        return this
	    };

	    // ------------ 事件 -------------------
	    var EVENT_CACHE = {};
	    var REGISTER_CACHE = {};

	    /**
	     * 注册事件
	     * @param {String|Array}    name   Имя события, несколько событий в формате массива
	     * @return {Object}         this
	     * @example
	     * SDK.register('MSG_RECEIVED')
	     */
	    SDK.register = function (name) {
	        if (!name) return this;
	        if (typeof name === 'string') name = [name];

	        name = name.filter(function (n) {return !REGISTER_CACHE[n]});

	        if (!name.length) return this;
	        try {
	            workbench.im.event_register('', JSON.stringify(name), '');
	            name.forEach(function (n) {REGISTER_CACHE[n] = true});
	        } catch (err) {
	            _errorLog('%cError in SDK.register', 'color:red;', name);
	        }

	        return this;
	    }

	    /**
	     * 反注册事件
	     * @param {String|Array}    [name]  Название события, несколько событий представлены в виде массива
	     * @param {Object}          this
	     * @example
	     * SDK.unregister();
	     * SDK.unregister('MSG_RECEIVED');
	     */
	    SDK.unregister = function (name) {
	        if (!name) name = REGISTER_CACHE.slice();
	        if (typeof name === 'string') name = [name];

	        if (!name.length) return this;
	        try {
	            workbench.im.event_unregister('', JSON.stringify(name), '');
	            name.forEach(function (n) {delete REGISTER_CACHE[n]});
	        } catch (err) {
	            _errorLog('%cError in SDK.unregister', 'color:red', err);
	        }

	        return this;
	    }

	    /**
	     * 监听事件
	     * @param   {String}      name            Имя события, несколько имен событий разделяются символом или пробелами, а пространства имен разделяются символом ::
	     * @param   {Function}    callback        Обратный вызов триггеров событий
	     * @return  {Object}      this
	     * @example
	     * function callbackHandler(data) {
	     *     console.log(data);
	     * }
	     * SDK.on('MSG_RECEIVED', callbackHandler);
	     */
	    SDK.on = function(name, callback) {
	        if (!name || !callback) return this;

	        var events = name.split(/,?\s+/);
	        var that = this;

	        events.forEach(function(event) {
	            if (!event) return;
	            // 分离出命名空间
	            var originEvent = event.split('::').pop();
	            if (!originEvent) return;

	            if (!EVENT_CACHE[event]) {
	                EVENT_CACHE[event] = {};
	                EVENT_CACHE[event].callbacks = [];
	                EVENT_CACHE[event].handle = function(e) {
	                    EVENT_CACHE[event].callbacks.forEach(function(cb) {
	                        try {
	                            cb.call(this, e.detail);
	                        } catch(ex) {
	                            console.error('Error in handle ' + event, ex);
	                        }
	                    });
	                };
	                document.addEventListener(originEvent, EVENT_CACHE[event].handle, false);
	                that.register(originEvent);
	            }

	            EVENT_CACHE[event].callbacks.push(callback);

	        });

	        return this;
	    };

	    /**
	     * 取消监听事件
	     * @param   {String}      [name]            [Необязательно] Название события, несколько названий событий разделяются символом или пробелом.
	     * @param   {Function}    [callback]        [Необязательно] Обратный вызов запускает событие
	     * @param   {Boolean}     [canUnregister=true]      [Необязательно] Можно ли отменить регистрацию событий самостоятельно, по умолчанию установлено значение true.
	     * @return  {Object}      SDK
	     * @example
	     * SDK.off();
	     * SDK.off('MSG_RECEIVED');
	     * SDK.off('MSG_RECEIVED', callbackHandler);
	     * SDK.off('MSG_RECEIVED', false);
	     */
	    SDK.off = function(name, callback, canUnregister) {
	        var events, originEvent;
	        var that = this;

	        if (canUnregister === undefined && typeof callback === 'boolean') {
	            canUnregister = callback;
	            callback = undefined;
	        } else if (callback === undefined && typeof name === 'boolean') {
	            canUnregister = name;
	            name = undefined;
	        }
	        // 默认为true
	        canUnregister = canUnregister !== false;

	        if (name) {
	            events = name.split(/,?\s+/);

	            events.forEach(function(event) {
	                if (!event) return;

	                originEvent = event.split('::').pop();
	                if (!originEvent) return;

	                if (!EVENT_CACHE[event]) return;

	                var shouldClear = true;
	                if (typeof callback === 'function') {
	                    EVENT_CACHE[event].callbacks.some(function(cb, i) {
	                        if (cb === callback) return EVENT_CACHE[event].callbacks.splice(i, 1), true;
	                    });
	                    shouldClear = !EVENT_CACHE[event].callbacks.length;
	                }

	                if (shouldClear) {
	                    document.removeEventListener(originEvent, EVENT_CACHE[event].handle);
	                    delete EVENT_CACHE[event];
	                    // NOTE 有BUG，如果清空的是命名空间的事件，会移除掉另一个事件，所以加了一个canUnregister的选项
	                    canUnregister && that.unregister(originEvent);
	                }
	            });
	        } else {
	            events = [];
	            for (var event in EVENT_CACHE) {
	                originEvent = event.split('::').pop();
	                events.push(originEvent);
	                document.removeEventListener(originEvent, EVENT_CACHE[event].handle);
	                delete EVENT_CACHE[event];
	            }
	            this.unregister(events);
	        }

	        return this;
	    };

	    /**
	     * 触发某个监听事件
	     * @param   {String}      name            Название события
	     * @param   {Object}      data            Данные, переданные в обратный вызов привязки события
	     * @return  {Object}      this
	     * @example
	     * SDK.fire('MSG_RECEIVED', {msgs: []});
	     */
	    SDK.fire = (function() {
	        var that = this;

	        // W3C标准
	        if (global.CustomEvent) {
	            return function(name, data, fromEvent) {
	                if (!name) return;
	                var event = new CustomEvent(name, {detail: data});
	                document.dispatchEvent(event);
	                !fromEvent && _log('%cSDK.fire: ' + name, 'color:pink', data);
	                return that
	            }
	        } else {
	            return function(name, data, fromEvent) {
	                if (!name) return;
	                var e = document.createEvent('HTMLEvents');
	                e.initEvent(name, false, true);
	                e.detail = data;
	                document.dispatchEvent(e);
	                !fromEvent && _log('%cSDK.fire: ' + name, 'color:pink', data);
	                return that
	            }
	        }
	    })();

	    SDK.emit = SDK.fire;

	    /**
	     * 广播
	     * @param {string} event
	     * @param {*} data
	     */
	    SDK.broadcast = function(event, data) {
	        var param = '';
	        try {
	            data && (param = JSON.stringify(data));
	        } catch(e) {}

	        workbench.im.event_notify('', event, param);
	    };

	    SDK.Binder = Binder;

	    /*--------------------------  Binder  ----------------------------*/
	    /**
	     * 用于更方便的解绑通过Binder绑定的事件
	     */
	    function Binder() {
	        this.bindList = [];
	    }

	    Binder.prototype = {
	        constructor: Binder,

	        on: function(name, callback) {
	            Array.prototype.push.apply(this.bindList, name.split(/,?\s+/));
	            SDK.on(name, callback);

	            return this;
	        },

	        clear: function(name, callback) {
	            SDK.off(this.bindList.join(' '));
	            this.bindList = [];

	            return this;
	        }
	    }

	    /*--------------------------  暴露给客户端的全局函数  ----------------------------*/
	    /*----------------------  客户端通过调用这些函数与前端通信  ------------------------*/
	    /**
	     * SDK.invoke方法的通信函数
	     * @param   {String}      sid           Случайное число, используемое для поиска сгенерированных task
	     * @param   {Object}      status        Статус вызова интерфейса, этот статус только указывает, подключен ли интерфейс или нет, и не имеет ничего общего с конкретным возвратом интерфейса
	     * @return  {Object}      response      Данные, возвращаемые интерфейсом
	     */
	    global.onInvokeNotify = function(sid, status, response) {
	        if (!sid) return _log('%cEMPTY sid in onInvokeNotify, status: ' + status, 'color:#aaaaaa', response);
	        var task = TASK_CACHE[sid];
	        if (!task) return _errorLog('%cWARNGIN: не найден sid: [' + sid + '] соответствующий task!', 'color:#ff9900;font-weight:bold');
	        if (task.destroyed) return _errorLog('%cWARNGIN: sid: [' + sid + '] соответствующий task Разрушен！', 'color:#ff4400;font-weight:bold', task.config.fn);

	        try {
	            response = (!response || /^\d+$/.test(response)) ? response : JSON.parse(response)
	        } catch (e) {}

	        if (status === 0) {
	            task.onSuccess && task.onSuccess(response);
	        } else {
	            task.onFailure && task.onFailure(response);
	        }
	    };

	    /**
	     * SDK.on方法的通信函数
	     * @param   {String}      name          Название события
	     * @return  {Object}      response      Данные, возвращаемые событием
	     */
	    global.onEventNotify = function(name, response) {
	        try {
	            response = (!response || /^\d+$/.test(response)) ? response : JSON.parse(response)
	        } catch (e) {}

	        _log('%conEventNotify ' + name, 'color:blue;font-weight:bold', response);

	        SDK.fire && SDK.fire(name, response, true);
	    };

	    /*--------------------------  一些调用方式的提升  ----------------------------*/

	    // ============== 将方法用Promise重新封装 ================
	    SDK._overrideWithPromise = function () {
	        if (SDK.__hasOverride) return this;

	        var _invoke = SDK.invoke;

	        /**
	         * 调用客户端方法
	         * @param   {String}      fn              	Название метода
	         * @param   {Object}      param           	Входные параметры клиентского метода
	         * @param   {Number}      timeout  			сверхурочная работа
	         * @return  {Object}      promise
	         * @example
	         * SDK.invoke('util.GetUserNick', {uid: 'uid'}, 5000).then(function(data) {
	         *     console.log(data)
	         * }).catch(function(error) {
	         *     console.log(error);
	         * })
	         */
	        SDK.invoke = function(fn, param, timeout) {
	            var _b = Date.now();

	            return new Promise(function(resolve, reject) {
	                _invoke(fn, {
	                    fn: fn,
	                    param: param,
	                    timeout: timeout,
	                    success: function(response) {
	                        var _t = Date.now() - _b;
	                        global.__WPO && __WPO.retCode(fn, true, _t, 'SUCCESS');
	                        resolve(response);
	                    },
	                    failure: function(error) {
	                        var _t = Date.now() - _b;

	                        if (typeof error !== 'string') {
	                            try {
	                                error = JSON.stringify(error);
	                            } catch (e) {
	                                error += '';
	                            }
	                        }
	                        global.__WPO && __WPO.retCode(fn, true, _t, error.substring(0, 50));
	                        reject(error);
	                    }
	                })
	            });
	        };

	        var _ajax = SDK.ajax;

	        SDK.ajaxSetup = {
	            // ajax方法返回后，业务层校验规则，仅用于数据打点
	            validRule: function (result) {
	                return true
	            }
	        };

	        /**
	         * 带promise的ajax调用方式
	         * @param  {object} config config
	         * @property {string} config.url
	         * @property {string} [config.method='get']
	         * @property {object} [config.param] Принимать участие
	         * @property {number} [config.timeout] timeout
	         * @property {function} [config.validRule] Правила проверки, используются только для управления данными
	         * @param  {string} [requestMethod='CommitHttpRequest']
	         * @return {Promise}
	         * @example
	         * SDK.ajax({
	         *     url: 'http://abc.com',
	         *     param: {id: 1001}
	         * }).then(function (result) {
	         *     // do something...
	         * })
	         */
	        SDK.ajax = function (config, requestMethod) {
	            var _begin = Date.now();
	            config.validRule = config.validRule || SDK.ajaxSetup.validRule;

	            return new Promise(function (resolve, reject) {
	                config.success = function (response) {
	                    var _time = Date.now() - _begin;
	                    var _flag = 'SUCCESS';
	                    try {
	                        if (!config.validRule(response)) _flag = 'WARNING'
	                    } catch (e) {
	                        _flag = 'WARNING'
	                    }
	                    global.__WPO && __WPO.retCode(config.api || config.apiKey || config.url, true, _time, _flag);
	                    resolve(response);
	                }
	                config.failure = function (error) {
	                    var _time = Date.now() - _begin;
	                    if (typeof error !== 'string') {
	                        try {
	                            error = JSON.stringify(error);
	                        } catch (e) {
	                            error += '';
	                        }
	                    }
	                    global.__WPO && __WPO.retCode(config.api || config.apiKey || config.url, false, _time, error.substring(0, 50));
	                    reject(error);
	                }
	                _ajax(config, requestMethod)
	            })
	        }

	        SDK.__hasOverride = true;
	    }

	    var _invoke = SDK.invoke;

	    if (global.Promise) SDK._overrideWithPromise();

	    /**
	     * 初始化主题
	     */
	    SDK.initTheme = function() {
	        var less = global.less;
	        if (!less) {
	            return;
	        }
	        var titleBarHeight = 31;

	        function genPalette(color, count) {
	            var i, cl = [], step, pos;
	            count = count || 25;
	            var hsl = color.toHSL();

	            step = (100 / count);
	            pos = count - Math.ceil(hsl.l * 100 / step);

	            for (i = 0; i < count; i++) {
	                if (i == pos) {
	                    cl.push(color);
	                } else {
	                    cl.push(less.tree.functions.hsla(hsl.h, hsl.s, (100 - i * step) / 100, hsl.a));
	                }
	            }

	            return {list: cl, pos: pos};
	        }

	        function changeTheme(theme) {
	            var color = new less.tree.Color(theme.rgb);
	            // https://img.alicdn.com/tps/i1/TB10CHwHXXXXXciXXXXb4A9VXXX-1200-900.jpg
	            // 前端noschema改造地址过滤
	            theme.backgroundImageUrl = theme.backgroundImageUrl.replace(/http:\/\/gtms0\d+/g, '\/\/img');
	            var i, len,
	                vars = {
	                    '@color-base': color.toRGB(),
	                    '@theme-background-image': 'url(' + theme.backgroundImageUrl + ')',
	                    '@theme-bg-img': 'url(' + theme.backgroundImageUrl + ')',
	                    '@theme-bg-url': '"' + theme.backgroundImageUrl + '"',
	                    '@theme-bg-x': theme.backgroundPositionX || 'left',
	                    '@title-bar-height': titleBarHeight + 'px'
	                };

	            var list = genPalette(color).list;
	            len = list.length;
	            for (i = 1; i <= len; i++) {
	                vars['@palette-color-' + i] = list[i - 1].toRGB();
	            }

	            if (less && less.modifyVars) {
	                less.globalResetDefaultVars = vars;
	                less.modifyVars(vars);
	            }
	        }

	        _invoke('im.uiutil.GetSkinTheme', {
	            param: {},
	            success: function(rsp) {
	                rsp = rsp.result;
	                titleBarHeight = Number(rsp.titleBarHeight || 31) || 31;
	                changeTheme(rsp);
	            }
	        });

	        SDK.on('im.uiutil.onSkinThemeChange', function(rsp) {
	            //rsp = JSON.parse(rsp);
	            changeTheme(rsp);
	        });
	    };

	    return SDK;
	});


/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["IMKIT"] = factory();
		else
			root["IMKIT"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "build";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(1);


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		
		var _util = __webpack_require__(2);
		
		var _util2 = _interopRequireDefault(_util);
		
		var _cache = __webpack_require__(3);
		
		var _cache2 = _interopRequireDefault(_cache);
		
		var _eventemitter = __webpack_require__(4);
		
		var _eventemitter2 = _interopRequireDefault(_eventemitter);
		
		var _log = __webpack_require__(5);
		
		var _log2 = _interopRequireDefault(_log);
		
		var _plugin = __webpack_require__(6);
		
		var _plugin2 = _interopRequireDefault(_plugin);
		
		var _actioncreator = __webpack_require__(7);
		
		var _actioncreator2 = _interopRequireDefault(_actioncreator);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
			Base: {
				Util: _util2.default,
				Cache: _cache2.default,
				Event: _eventemitter2.default,
				Log: _log2.default,
				Plugin: _plugin2.default,
				ActionCreator: _actioncreator2.default
			}
		};
		module.exports = exports['default'];

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
		
		var __GUID = parseInt(Math.random() * 1000000000);
		exports.default = {
		  /**
		      * 生成一个随机的唯一值
		      * @return {Number}
		      */
		  guid: function guid() {
		    return __GUID++;
		  },
		
		  /**
		   * 对一些特殊字符做转码，防止xss
		   * @param   {String} e Строка, которую нужно перекодировать
		   * @return  {String} e Транскодированная строка
		   */
		  htmlEncode: function htmlEncode(e) {
		    e = e.replace(/&/g, '&amp;');
		    e = e.replace(/>/g, '&gt;');
		    e = e.replace(/</g, '&lt;');
		    e = e.replace(/"/g, '&quot;');
		    e = e.replace(/'/g, '&#39;');
		
		    return e;
		  },
		
		  getParam: function getParam(s) {
		    var result = {};
		
		    if (s) {
		      var sArr = s.split('&'),
		          kvArr = void 0;
		
		      sArr.forEach(function (kv) {
		        kvArr = kv.split('=');
		        try {
		          result[kvArr[0]] = decodeURIComponent(kvArr[1]);
		        } catch (e) {
		          result[kvArr[0]] = kvArr[1];
		        }
		      });
		    }
		
		    return result;
		  },
		
		  /**
		   * 根据字符串生成一个可用的Fragment
		   * @param tpl
		   * @returns {DocumentFragment}
		   */
		  createFragment: function createFragment(tpl) {
		    var div = document.createElement('div');
		    var fragment = document.createDocumentFragment();
		
		    div.innerHTML = tpl;
		
		    while (div.childNodes[0]) {
		      fragment.appendChild(div.childNodes[0]);
		    }
		
		    div = null;
		
		    return fragment;
		  },
		
		  /**
		   * 根据传入的target, 获取class为cls的父元素
		   * @param target
		   * @param cls
		   * @returns {*}
		   */
		  parents: function parents(target, cls) {
		    if (!target || !cls) return null;
		
		    var parent = target;
		
		    while (parent) {
		
		      if (parent.classList && parent.classList.contains(cls)) break;
		
		      parent = parent.parentNode;
		
		      if (!parent || !parent.tagName || parent.tagName.toUpperCase() === 'BODY') {
		        parent = null;
		        break;
		      }
		    }
		
		    return parent;
		  },
		
		  /**
		   * 根据传入的聊天对象,生成长nick字符串
		   * @param cid
		   * @returns {*}
		   */
		  getUid: function getUid(cid) {
		    if (!cid) return '';
		    // 人
		    if (cid.appkey && cid.nick) {
		      return cid.appkey + cid.nick;
		    }
		    // 群
		    else if (cid.tribeid) {
		        return cid.tribeid;
		      }
		
		    return '';
		  },
		
		  /**
		   * 设置cid的类型
		   * @param {[type]} cid [description]
		   */
		  setCidType: function setCidType(cid) {
		    if (!cid) return null;
		
		    if (cid.type) return cid;
		
		    if (cid.appkey && cid.nick) {
		      cid.type = 1;
		    } else if (cid.tribeid && cid.tribeid !== '0') {
		      cid.type = 2;
		    } else {
		      cid = null;
		    }
		
		    return cid;
		  },
		  /**
		   * 根据聊天对象获取消息类型
		   * @param cid
		   * @returns {*}
		   */
		  getLabel: function getLabel(cid) {
		    if (!cid) return '';
		    // 如果有appkey跟nick,那么是单聊
		    if (cid.appkey && cid.nick) {
		      return 'chat';
		    }
		    // 如果有tribeid,那么是群聊
		    else if (cid.tribeid) {
		        return 'tribe';
		      }
		
		    return '';
		  },
		
		  stopScrollToBottom: function stopScrollToBottom() {
		    this.toBottomTimer && clearTimeout(this.toBottomTimer);
		  },
		
		  scrollToBottom: function scrollToBottom(container, els, to) {
		    var hasTo = typeof to !== 'undefined';
		    // 如果存在消息元素, 则需要遍历消息元素中的图片/视频, 保证图片/视频下载成功后,还会执行滚动到底部的操作
		    if (els && els.length) {
		      var t = void 0;
		
		      els.forEach(function (el) {
		
		        if (!el.querySelectorAll) return;
		        [].concat(_toConsumableArray(el.querySelectorAll('img'))).forEach(function (img) {
		          img.onload = img.onerror = function () {
		
		            this.onload = img.onerror = null;
		            clearTimeout(t);
		            // 设置图片高度, 防止切换回来的时候图片跳动
		            //this.height = this.height;
		            if (document.getElementById(img.id)) {
		              t = setTimeout(function () {
		                container.scrollTop = hasTo ? to : container.scrollHeight;
		              }, 400);
		            }
		          };
		        });
		
		        [].concat(_toConsumableArray(el.querySelectorAll('video'))).forEach(function (video) {
		          video.oncanplay = function () {
		            this.oncanplay = null;
		            clearTimeout(t);
		            // 设置视频高度,防止切换回来的时候视频位置跳动
		            this.height = this.clientHeight;
		
		            t = setTimeout(function () {
		              container.scrollTop = hasTo ? to : container.scrollHeight;
		            }, 400);
		          };
		        });
		      });
		    }
		
		    // 清除滚动到底部的定时器
		    clearTimeout(this.toBottomTimer);
		
		    // 再重新设置一个, 以防没有滚动到指定的位置
		    this.toBottomTimer = setTimeout(function () {
		      container.scrollTop = hasTo ? to : container.scrollHeight;
		    }, 200);
		    container.scrollTop = hasTo ? to : container.scrollHeight;
		  }
		};
		module.exports = exports['default'];

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var __CACHE = {};
		
		exports.default = {
			set: function set(key, value) {
				var o = this.get(key);
		
				__CACHE[key] = Object.assign(o, value);
		
				return this;
			},
			setAll: function setAll(value) {
				for (var k in __CACHE) {
					__CACHE[k] = Object.assign(__CACHE[k], value);
				}
		
				return this;
			},
			get: function get(key) {
				return __CACHE[key] || {};
			},
			getAll: function getAll(key) {
				var result = [],
				    item;
		
				for (var k in __CACHE) {
					if (__CACHE[k][key]) {
						item = {};
						// item['key'] = k;
						item[key] = __CACHE[k][key];
						result.push(item);
					}
				}
		
				return result;
			},
			getExactly: function getExactly(key) {
				return __CACHE[key];
			},
			clear: function clear(key) {
				key ? delete __CACHE[key] : __CACHE = {};
				return this;
			},
			clearInKey: function clearInKey(key, inkey) {
				var v = this.get(key);
		
				delete v[inkey];
			}
		};
		module.exports = exports["default"];

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		var has = Object.prototype.hasOwnProperty;
		
		//
		// We store our EE objects in a plain object whose properties are event names.
		// If `Object.create(null)` is not supported we prefix the event names with a
		// `~` to make sure that the built-in object properties are not overridden or
		// used as an attack vector.
		// We also assume that `Object.create(null)` is available when the event name
		// is an ES6 Symbol.
		//
		var prefix = typeof Object.create !== 'function' ? '~' : false;
		
		/**
		 * Representation of a single EventEmitter function.
		 *
		 * @param {Function} fn Event handler to be called.
		 * @param {Mixed} context Context for function execution.
		 * @param {Boolean} [once=false] Only emit once
		 * @api private
		 */
		function EE(fn, context, once) {
		  this.fn = fn;
		  this.context = context;
		  this.once = once || false;
		}
		
		/**
		 * Minimal EventEmitter interface that is molded against the Node.js
		 * EventEmitter interface.
		 *
		 * @constructor
		 * @api public
		 */
		function EventEmitter() {} /* Nothing to set */
		
		/**
		 * Hold the assigned EventEmitters by name.
		 *
		 * @type {Object}
		 * @private
		 */
		EventEmitter.prototype._events = undefined;
		
		/**
		 * Return an array listing the events for which the emitter has registered
		 * listeners.
		 *
		 * @returns {Array}
		 * @api public
		 */
		EventEmitter.prototype.eventNames = function eventNames() {
		  var events = this._events,
		      names = [],
		      name;
		
		  if (!events) return names;
		
		  for (name in events) {
		    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
		  }
		
		  if (Object.getOwnPropertySymbols) {
		    return names.concat(Object.getOwnPropertySymbols(events));
		  }
		
		  return names;
		};
		
		/**
		 * Return a list of assigned event listeners.
		 *
		 * @param {String} event The events that should be listed.
		 * @param {Boolean} exists We only need to know if there are listeners.
		 * @returns {Array|Boolean}
		 * @api public
		 */
		EventEmitter.prototype.listeners = function listeners(event, exists) {
		  var evt = prefix ? prefix + event : event,
		      available = this._events && this._events[evt];
		
		  if (exists) return !!available;
		  if (!available) return [];
		  if (available.fn) return [available.fn];
		
		  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
		    ee[i] = available[i].fn;
		  }
		
		  return ee;
		};
		
		/**
		 * Emit an event to all registered event listeners.
		 *
		 * @param {String} event The name of the event.
		 * @returns {Boolean} Indication if we've emitted an event.
		 * @api public
		 */
		EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
		  var evt = prefix ? prefix + event : event;
		
		  if (!this._events || !this._events[evt]) return false;
		
		  var listeners = this._events[evt],
		      len = arguments.length,
		      args,
		      i;
		
		  if ('function' === typeof listeners.fn) {
		    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
		
		    switch (len) {
		      case 1:
		        return listeners.fn.call(listeners.context), true;
		      case 2:
		        return listeners.fn.call(listeners.context, a1), true;
		      case 3:
		        return listeners.fn.call(listeners.context, a1, a2), true;
		      case 4:
		        return listeners.fn.call(listeners.context, a1, a2, a3), true;
		      case 5:
		        return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
		      case 6:
		        return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
		    }
		
		    for (i = 1, args = new Array(len - 1); i < len; i++) {
		      args[i - 1] = arguments[i];
		    }
		
		    listeners.fn.apply(listeners.context, args);
		  } else {
		    var length = listeners.length,
		        j;
		
		    for (i = 0; i < length; i++) {
		      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
		
		      switch (len) {
		        case 1:
		          listeners[i].fn.call(listeners[i].context);break;
		        case 2:
		          listeners[i].fn.call(listeners[i].context, a1);break;
		        case 3:
		          listeners[i].fn.call(listeners[i].context, a1, a2);break;
		        default:
		          if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
		            args[j - 1] = arguments[j];
		          }
		
		          listeners[i].fn.apply(listeners[i].context, args);
		      }
		    }
		  }
		
		  return true;
		};
		
		/**
		 * Register a new EventListener for the given event.
		 *
		 * @param {String} event Name of the event.
		 * @param {Function} fn Callback function.
		 * @param {Mixed} [context=this] The context of the function.
		 * @api public
		 */
		EventEmitter.prototype.on = function on(event, fn, context) {
		  var listener = new EE(fn, context || this),
		      evt = prefix ? prefix + event : event;
		
		  if (!this._events) this._events = prefix ? {} : Object.create(null);
		  if (!this._events[evt]) this._events[evt] = listener;else {
		    if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
		  }
		
		  return this;
		};
		
		/**
		 * Add an EventListener that's only called once.
		 *
		 * @param {String} event Name of the event.
		 * @param {Function} fn Callback function.
		 * @param {Mixed} [context=this] The context of the function.
		 * @api public
		 */
		EventEmitter.prototype.once = function once(event, fn, context) {
		  var listener = new EE(fn, context || this, true),
		      evt = prefix ? prefix + event : event;
		
		  if (!this._events) this._events = prefix ? {} : Object.create(null);
		  if (!this._events[evt]) this._events[evt] = listener;else {
		    if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
		  }
		
		  return this;
		};
		
		/**
		 * Remove event listeners.
		 *
		 * @param {String} event The event we want to remove.
		 * @param {Function} fn The listener that we need to find.
		 * @param {Mixed} context Only remove listeners matching this context.
		 * @param {Boolean} once Only remove once listeners.
		 * @api public
		 */
		EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
		  var evt = prefix ? prefix + event : event;
		
		  if (!this._events || !this._events[evt]) return this;
		
		  var listeners = this._events[evt],
		      events = [];
		
		  if (fn) {
		    if (listeners.fn) {
		      if (listeners.fn !== fn || once && !listeners.once || context && listeners.context !== context) {
		        events.push(listeners);
		      }
		    } else {
		      for (var i = 0, length = listeners.length; i < length; i++) {
		        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
		          events.push(listeners[i]);
		        }
		      }
		    }
		  }
		
		  //
		  // Reset the array, or remove it completely if we have no more listeners.
		  //
		  if (events.length) {
		    this._events[evt] = events.length === 1 ? events[0] : events;
		  } else {
		    delete this._events[evt];
		  }
		
		  return this;
		};
		
		/**
		 * Remove all listeners or only the listeners for the specified event.
		 *
		 * @param {String} event The event want to remove all listeners for.
		 * @api public
		 */
		EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
		  if (!this._events) return this;
		
		  if (event) delete this._events[prefix ? prefix + event : event];else this._events = prefix ? {} : Object.create(null);
		
		  return this;
		};
		
		//
		// Alias methods names because people roll like that.
		//
		EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
		EventEmitter.prototype.addListener = EventEmitter.prototype.on;
		
		//
		// This function doesn't apply anymore.
		//
		EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
		  return this;
		};
		
		//
		// Expose the prefix.
		//
		EventEmitter.prefixed = prefix;
		
		//
		// Expose the module.
		//
		if (true) {
		  module.exports = EventEmitter;
		}

	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
		
		if (!window.console) {
			window.console = {
				log: function log() {},
				warning: function warning() {},
				error: function error() {},
				info: function info() {}
			};
		}
		var Log = {
			prefix: '',
			level: -1,
			__nick: '',
		
			__glCache: {},
		
			setNick: function setNick(nick) {
				this.__nick = nick;
			},
		
			goldLog: function goldLog(logkey, param, nick) {
				var _that = this,
				    paramStr = '',
				    hold = +new Date(),
				    img = new Image(),
				    n = typeof nick === 'string' ? nick : this.__nick;
		
				this.__glCache[hold] = img;
		
				if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) === 'object') {
					for (var k in param) {
						try {
							paramStr += '&' + k + '=' + encodeURIComponent(param[k]);
						} catch (e) {}
					}
				}
		
				img.src = 'https://gm.mmstat.com/' + logkey + '?cache=' + Math.floor(Math.random() * (1111111 - 9999999) + 9999999) + '&nick=' + n + paramStr;
		
				img.onload = img.onerror = function () {
					img.onload = null;
					img.onerror = null;
					img = null;
					_that.__glCache[hold] = null;
					delete _that.__glCache[hold];
				};
			},
		
			setPrefix: function setPrefix(str) {
				this.prefix = str;
			},
		
			setLogLevel: function setLogLevel(n) {
				this.level = n;
			},
		
			addLocalLog: function addLocalLog() {
				if (!window.workbench) return;
				var logs = [];
				var args = Array.prototype.slice.call(arguments);
		
				args.forEach(function (arg) {
					if (typeof arg !== 'string') {
						try {
							logs.push(JSON.stringify(arg));
						} catch (e) {}
					} else {
						logs.push(arg);
					}
				});
		
				workbench.im.log(this.level, this.prefix + '=========>' + logs.join('\n         '));
			}
		};
		var colors = ['orange', 'blue', 'green', 'red', 'darkblue'];
		
		colors.forEach(function (color) {
			Log[color] = function () {
				var args = Array.prototype.slice.call(arguments);
		
				if (Log.level === 0) {
					Log.addLocalLog.apply(Log, args);
				}
		
				if (typeof args[0] === 'string') {
					args[0] = '%c' + args[0];
					args.splice(1, 0, 'color:' + color + ';font-size:14px;');
				}
		
				window.console.log.apply(console, args);
			};
		});
		
		exports.default = Log;
		module.exports = exports['default'];

	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		var Plugin = function () {
			function Plugin() {
				_classCallCheck(this, Plugin);
		
				// 事件插件缓存
				this.__EventPluginList = {};
				// 普通插件缓存
				this.__PluginList = {};
			}
		
			_createClass(Plugin, [{
				key: 'init',
				value: function init(context) {
					this.context = context;
		
					this.use();
		
					if (!context || !context.container) return this;
		
					var handler = void 0,
					    obj = void 0;
		
					for (var e in this.__EventPluginList) {
						obj = this.__EventPluginList[e];
		
						(function (o) {
							context.container.addEventListener(e, function (ev) {
								for (var cls in o) {
									if (cls === '*') {
										console.log('is *');
										continue;
									}
		
									if (ev && ev.target && ev.target.classList && ev.target.classList.contains(cls)) {
										o[cls].forEach(function (h) {
											h.call(null, ev);
										});
		
										break;
									}
								}
		
								if (o['*'] && o['*'].length) {
									o['*'].forEach(function (h) {
										h.call(null, ev);
									});
								}
							});
						})(obj);
					}
		
					return this;
				}
			}, {
				key: '__listener',
				value: function __listener(e) {
					var list = this.__EventPluginList;
					return function (ev) {
						var obj = list[e],
						    handler = void 0;
						for (var cls in obj) {
							if (cls === '*') return;
		
							if (ev && ev.target && ev.target.classList && ev.target.classList.contains(cls)) {
								obj[cls].forEach(function (h) {
									h.call(null, ev);
								});
		
								break;
							}
						}
		
						if (obj['*'] && obj['*'].length) {
							obj['*'].forEach(function (h) {
								h.call(null, ev);
							});
						}
					};
				}
			}, {
				key: 'addEventPlugin',
				value: function addEventPlugin(event, clses, handler) {
		
					if (typeof clses !== 'string') {
						handler = clses;
						clses = '*';
					}
		
					if (!handler) return this;
		
					var list = this.__EventPluginList;
					!list[event] && (list[event] = {});
		
					clses = clses.split(/\s+/);
		
					clses.forEach(function (cls) {
						if (!cls) return;
		
						!list[event][cls] && (list[event][cls] = []);
						list[event][cls].push(handler);
					});
		
					return this;
				}
			}, {
				key: 'removeEventPlugin',
				value: function removeEventPlugin(event, clses, handler) {
					if (!arguments.length) {
						this.__EventPluginList = {};
						return this;
					}
		
					if (typeof clses !== 'string') {
						handler = clses;
						clses = '*';
					}
		
					var list = this.__EventPluginList;
					if (!list[event]) return this;
		
					clses = clses.split(/\s+/);
		
					clses.forEach(function (cls) {
						if (!cls) return;
		
						if (!handler) {
							delete list[event][cls];
						} else if (list[event][cls]) {
							list[event][cls].forEach(function (h, index) {
								if (h === handler) {
									list[event][cls].splice(index, 1);
								}
							});
						}
					});
		
					return this;
				}
			}, {
				key: 'addPlugin',
				value: function addPlugin(name, handler) {
					this.__PluginList[name] = handler;
		
					return this;
				}
			}, {
				key: 'removePlugin',
				value: function removePlugin(name) {
					var handler = void 0;
					if (name) {
						handler = this.__PluginList[name];
						handler && handler.destroy && handler.destroy(this.context);
						delete this.__PluginList[name];
					} else {
						for (name in this.__PluginList) {
							handler = this.__PluginList[name];
							handler && handler.destroy && handler.destroy(this.context);
						}
		
						this.__PluginList = {};
					}
					return this;
				}
			}, {
				key: 'use',
				value: function use(name) {
					var handler = void 0;
					if (name) {
						handler = this.__PluginList[name];
						try {
							handler && handler.init && handler.init(this.context);
						} catch (e) {
							console.error(e);
						}
					} else {
						for (name in this.__PluginList) {
							this.use(name);
						}
					}
		
					return this;
				}
			}, {
				key: 'getPlugin',
				value: function getPlugin(name) {
					return this.__PluginList[name];
				}
			}]);
		
			return Plugin;
		}();
		
		exports.default = Plugin;
		module.exports = exports['default'];

	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		var Slice = Array.prototype.slice;
		
		var ActionCreator = function () {
			function ActionCreator() {
				_classCallCheck(this, ActionCreator);
		
				this.__beforeList = [];
				this.__afterList = [];
				this.actionType = 'sync';
			}
		
			_createClass(ActionCreator, [{
				key: '__clearOnce',
				value: function __clearOnce() {
					var _this = this;
		
					var bList = [];
					var aList = [];
					var i = 0;
					if (this.__beforeList.length) {
						this.__beforeList.forEach(function (obj, index) {
							if (obj.once) {
								bList.push(index);
							}
						});
					}
		
					if (this.__afterList.length) {
						this.__afterList.forEach(function (obj, index) {
							if (obj.once) {
								aList.push(index);
							}
						});
					}
		
					bList.length && bList.forEach(function (index) {
						_this.__beforeList.splice(index - i, 1);
						i--;
					});
		
					i = 0;
		
					aList.length && aList.forEach(function (index) {
						_this.__afterList.splice(index - i, 1);
						i--;
					});
				}
			}, {
				key: 'doSync',
				value: function doSync() {
					return this;
				}
			}, {
				key: 'doAsync',
				value: function doAsync() {
					return new Promise(function () {});
				}
			}, {
				key: 'action',
				value: function action() {
					var args = Slice.call(arguments);
		
					return this.actionType !== 'async' ? this.actionSync.apply(this, args) : this.actionAsync.apply(this, args);
				}
			}, {
				key: 'actionSync',
				value: function actionSync() {
					var _that = this,
					    args = Slice.call(arguments),
					    context = {};
		
					args.unshift(context);
					var stop = false;
					if (this.__beforeList.length) {
						try {
							var result = void 0;
							this.__beforeList.forEach(function (obj) {
								if (stop) return;
								try {
									result = obj.handler.apply(_that, args);
								} catch (e) {
									console.error('in actionSync:before error', e);
								}
		
								if (result === false) {
									stop = true;
								}
							});
						} catch (e) {
							_that.error(e);
						}
					}
		
					if (stop) return this;
		
					try {
						this.doSync.apply(this, args);
					} catch (e) {
						_that.error(e);
					}
		
					if (this.__afterList.length) {
						try {
							var _stop = false,
							    _result = void 0;
							this.__afterList.forEach(function (obj) {
								if (_stop) return;
								try {
									_result = obj.handler.apply(_that, args);
								} catch (e) {
									console.error('in actionSync:after error', e);
								}
								if (_result === false) {
									_stop = true;
								}
							});
						} catch (e) {
							_that.error(e);
						}
					}
		
					this.__clearOnce();
		
					return this;
				}
			}, {
				key: 'actionAsync',
				value: function actionAsync() {
					var _that = this,
					    args = Slice.call(arguments),
					    context = {},
					    promises = [];
		
					args.unshift(context);
		
					if (this.__beforeList.length) {
						var result = void 0;
						this.__beforeList.forEach(function (obj) {
							try {
								result = obj.handler.apply(_that, args);
							} catch (e) {
								console.error('in actionAsync:before error', e);
							}
		
							if (!(result instanceof Promise)) {
		
								result = new Promise(function (resolve, reject) {
									result === false ? reject() : resolve(result);
								});
							}
		
							promises.push(result);
						});
		
						Promise.all(promises).then(function () {
							_that.doAsync.apply(_that, args).then(function () {
								args = Slice.call(arguments);
								args.unshift(context);
								if (_that.__afterList.length) {
									var stop = false,
									    _result2 = void 0;
									_that.__afterList.forEach(function (obj) {
										if (stop) return;
		
										try {
											_result2 = obj.handler.apply(_that, args);
										} catch (e) {
											console.error('in actionAsync:after error', e);
										}
		
										if (_result2 === false) {
											stop = true;
										}
									});
								}
								_that.__clearOnce();
							}).catch(function (err) {
								_that.error(err);
							});
						}).catch(function (err) {
							_that.error(err);
						});
					} else {
						_that.doAsync.apply(_that, args).then(function () {
							args = Slice.call(arguments);
							args.unshift(context);
							if (_that.__afterList.length) {
								var stop = false,
								    _result3 = void 0;
								_that.__afterList.forEach(function (obj) {
									if (stop) return;
									try {
										_result3 = obj.handler.apply(_that, args);
									} catch (e) {
										console.error('in actionAsync:after error', e);
									}
		
									if (_result3 === false) {
										stop = true;
									}
								});
							}
							_that.__clearOnce();
						}).catch(function (err) {
							_that.error(err);
						});
					}
		
					return this;
				}
			}, {
				key: 'error',
				value: function error() {
					return this;
				}
			}, {
				key: 'spliceBefore',
				value: function spliceBefore(s, index, handler) {
					this.__beforeList.splice(s, index, { handler: handler });return this;
				}
			}, {
				key: 'spliceAfter',
				value: function spliceAfter(s, index, handler) {
					this.__afterList.splice(s, index, { handler: handler });return this;
				}
			}, {
				key: 'before',
				value: function before(handler) {
					this.__beforeList.push({ handler: handler });return this;
				}
			}, {
				key: 'after',
				value: function after(handler) {
					this.__afterList.push({ handler: handler });return this;
				}
			}, {
				key: 'spliceBeforeOnce',
				value: function spliceBeforeOnce(s, index, handler) {
					this.__beforeList.splice(s, index, { handler: handler, once: 1 });return this;
				}
			}, {
				key: 'spliceAfterOnce',
				value: function spliceAfterOnce(s, index, handler) {
					this.__afterList.splice(s, index, { handler: handler, once: 1 });return this;
				}
			}, {
				key: 'beforeOnce',
				value: function beforeOnce(handler) {
					this.__beforeList.push({ handler: handler, once: 1 });return this;
				}
			}, {
				key: 'afterOnce',
				value: function afterOnce(handler) {
					this.__afterList.push({ handler: handler, once: 1 });return this;
				}
			}]);
		
			return ActionCreator;
		}();
		
		exports.default = ActionCreator;
		module.exports = exports['default'];

	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjODNlMTRjN2FkNDk4NTgwYTI3NyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9ldmVudGVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hY3Rpb25jcmVhdG9yLmpzIl0sIm5hbWVzIjpbIkJhc2UiLCJVdGlsIiwiQ2FjaGUiLCJFdmVudCIsIkxvZyIsIlBsdWdpbiIsIkFjdGlvbkNyZWF0b3IiLCJfX0dVSUQiLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJndWlkIiwiaHRtbEVuY29kZSIsImUiLCJyZXBsYWNlIiwiZ2V0UGFyYW0iLCJzIiwicmVzdWx0Iiwic0FyciIsInNwbGl0Iiwia3ZBcnIiLCJmb3JFYWNoIiwia3YiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjcmVhdGVGcmFnbWVudCIsInRwbCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImlubmVySFRNTCIsImNoaWxkTm9kZXMiLCJhcHBlbmRDaGlsZCIsInBhcmVudHMiLCJ0YXJnZXQiLCJjbHMiLCJwYXJlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJ0YWdOYW1lIiwidG9VcHBlckNhc2UiLCJnZXRVaWQiLCJjaWQiLCJhcHBrZXkiLCJuaWNrIiwidHJpYmVpZCIsInNldENpZFR5cGUiLCJ0eXBlIiwiZ2V0TGFiZWwiLCJzdG9wU2Nyb2xsVG9Cb3R0b20iLCJ0b0JvdHRvbVRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2Nyb2xsVG9Cb3R0b20iLCJjb250YWluZXIiLCJlbHMiLCJ0byIsImhhc1RvIiwibGVuZ3RoIiwidCIsImVsIiwicXVlcnlTZWxlY3RvckFsbCIsImltZyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwic2V0VGltZW91dCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsInZpZGVvIiwib25jYW5wbGF5IiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiX19DQUNIRSIsInNldCIsImtleSIsInZhbHVlIiwibyIsImdldCIsIk9iamVjdCIsImFzc2lnbiIsInNldEFsbCIsImsiLCJnZXRBbGwiLCJpdGVtIiwicHVzaCIsImdldEV4YWN0bHkiLCJjbGVhciIsImNsZWFySW5LZXkiLCJpbmtleSIsInYiLCJoYXMiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInByZWZpeCIsImNyZWF0ZSIsIkVFIiwiZm4iLCJjb250ZXh0Iiwib25jZSIsIkV2ZW50RW1pdHRlciIsIl9ldmVudHMiLCJ1bmRlZmluZWQiLCJldmVudE5hbWVzIiwiZXZlbnRzIiwibmFtZXMiLCJuYW1lIiwiY2FsbCIsInNsaWNlIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0IiwibGlzdGVuZXJzIiwiZXZlbnQiLCJleGlzdHMiLCJldnQiLCJhdmFpbGFibGUiLCJpIiwibCIsImVlIiwiQXJyYXkiLCJlbWl0IiwiYTEiLCJhMiIsImEzIiwiYTQiLCJhNSIsImxlbiIsImFyZ3VtZW50cyIsImFyZ3MiLCJyZW1vdmVMaXN0ZW5lciIsImFwcGx5IiwiaiIsIm9uIiwibGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJvZmYiLCJhZGRMaXN0ZW5lciIsInNldE1heExpc3RlbmVycyIsInByZWZpeGVkIiwibW9kdWxlIiwiZXhwb3J0cyIsIndpbmRvdyIsImNvbnNvbGUiLCJsb2ciLCJ3YXJuaW5nIiwiZXJyb3IiLCJpbmZvIiwibGV2ZWwiLCJfX25pY2siLCJfX2dsQ2FjaGUiLCJzZXROaWNrIiwiZ29sZExvZyIsImxvZ2tleSIsInBhcmFtIiwiX3RoYXQiLCJwYXJhbVN0ciIsImhvbGQiLCJEYXRlIiwiSW1hZ2UiLCJuIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic3JjIiwiZmxvb3IiLCJzZXRQcmVmaXgiLCJzdHIiLCJzZXRMb2dMZXZlbCIsImFkZExvY2FsTG9nIiwid29ya2JlbmNoIiwibG9ncyIsImFyZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbSIsImpvaW4iLCJjb2xvcnMiLCJjb2xvciIsInNwbGljZSIsIl9fRXZlbnRQbHVnaW5MaXN0IiwiX19QbHVnaW5MaXN0IiwidXNlIiwiaGFuZGxlciIsIm9iaiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsImgiLCJsaXN0IiwiY2xzZXMiLCJpbmRleCIsImRlc3Ryb3kiLCJpbml0IiwiU2xpY2UiLCJfX2JlZm9yZUxpc3QiLCJfX2FmdGVyTGlzdCIsImFjdGlvblR5cGUiLCJiTGlzdCIsImFMaXN0IiwiUHJvbWlzZSIsImFjdGlvblN5bmMiLCJhY3Rpb25Bc3luYyIsInVuc2hpZnQiLCJzdG9wIiwiZG9TeW5jIiwiX19jbGVhck9uY2UiLCJwcm9taXNlcyIsInJlc29sdmUiLCJyZWplY3QiLCJhbGwiLCJ0aGVuIiwiZG9Bc3luYyIsImNhdGNoIiwiZXJyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7Ozs7QUFDQTs7OztBQUNBOzs7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bkdyRixDLEVBQUc2SyxLLEVBQU9QLE8sRUFBUztBQUFDLFNBQUtZLFdBQUwsQ0FBaUJoQixNQUFqQixDQUF3QmxLLENBQXhCLEVBQTJCNkssS0FBM0IsRUFBa0MsRUFBQ1AsU0FBU0EsT0FBVixFQUFtQmpGLE1BQU0sQ0FBekIsRUFBbEMsRUFBZ0UsT0FBTyxJQUFQO0FBQWE7Ozs4QkFDdEdpRixPLEVBQVM7QUFBRSxTQUFLVyxZQUFMLENBQWtCMUcsSUFBbEIsQ0FBdUIsRUFBQytGLFNBQVNBLE9BQVYsRUFBbUJqRixNQUFNLENBQXpCLEVBQXZCLEVBQXFELE9BQU8sSUFBUDtBQUFjOzs7NkJBQy9FaUYsTyxFQUFTO0FBQUUsU0FBS1ksV0FBTCxDQUFpQjNHLElBQWpCLENBQXNCLEVBQUMrRixTQUFTQSxPQUFWLEVBQW1CakYsTUFBTSxDQUF6QixFQUF0QixFQUFvRCxPQUFPLElBQVA7QUFBYzs7Ozs7O21CQTdMbkUvRixhIiwiZmlsZSI6ImluZGV4Lm1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIklNS0lUXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklNS0lUXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiYnVpbGRcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGM4M2UxNGM3YWQ0OTg1ODBhMjc3XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IFV0aWwgZnJvbSAnJE1vZHVsZVJvb3QvdXRpbCc7XG5pbXBvcnQgQ2FjaGUgZnJvbSAnJE1vZHVsZVJvb3QvY2FjaGUnO1xuaW1wb3J0IEV2ZW50IGZyb20gJyRNb2R1bGVSb290L2V2ZW50ZW1pdHRlcic7XG5pbXBvcnQgTG9nIGZyb20gJyRNb2R1bGVSb290L2xvZyc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJyRNb2R1bGVSb290L3BsdWdpbic7XG5pbXBvcnQgQWN0aW9uQ3JlYXRvciBmcm9tICckTW9kdWxlUm9vdC9hY3Rpb25jcmVhdG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdEJhc2U6IHtcblx0XHRVdGlsOiBVdGlsLFxuXHRcdENhY2hlOiBDYWNoZSxcblx0XHRFdmVudDogRXZlbnQsXG5cdFx0TG9nOiBMb2csXG5cdFx0UGx1Z2luOiBQbHVnaW4sXG5cdFx0QWN0aW9uQ3JlYXRvcjogQWN0aW9uQ3JlYXRvclxuXHR9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwibGV0IF9fR1VJRCA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkqMTAwMDAwMDAwMCk7XG5leHBvcnQgZGVmYXVsdCB7XG5cdC8qKlxuICAgICAqIOeUn+aIkOS4gOS4qumaj+acuueahOWUr+S4gOWAvFxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBndWlkOiBmdW5jdGlvbigpIHtcbiAgICBcdHJldHVybiBfX0dVSUQrKztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5a+55LiA5Lqb54m55q6K5a2X56ym5YGa6L2s56CB77yM6Ziy5q2ieHNzXG4gICAgICogQHBhcmFtICAge1N0cmluZ30gZSDpnIDopoHovaznoIHnmoTlrZfnrKbkuLJcbiAgICAgKiBAcmV0dXJuICB7U3RyaW5nfSBlIOi9rOeggeWQjueahOWtl+espuS4slxuICAgICAqL1xuICAgIGh0bWxFbmNvZGU6IGZ1bmN0aW9uKGUpIHtcbiAgICBcdGUgPSBlLnJlcGxhY2UoLyYvZywgJyZhbXA7Jyk7XG5cdCAgICBlID0gZS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG5cdCAgICBlID0gZS5yZXBsYWNlKC88L2csICcmbHQ7Jyk7XG5cdCAgICBlID0gZS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cdCAgICBlID0gZS5yZXBsYWNlKC8nL2csICcmIzM5OycpO1xuXG5cdCAgICByZXR1cm4gZTtcbiAgICB9LFxuXG4gICAgZ2V0UGFyYW06IGZ1bmN0aW9uKHMpIHtcbiAgICAgIFx0bGV0IHJlc3VsdCA9IHt9O1xuXG4gICAgICBcdGlmKHMpIHtcbiAgICAgIFx0XHRsZXQgc0FyciA9IHMuc3BsaXQoJyYnKSwga3ZBcnI7XG5cbiAgICAgIFx0XHRzQXJyLmZvckVhY2goZnVuY3Rpb24oa3YpIHtcbiAgICAgICAgXHRrdkFyciA9IGt2LnNwbGl0KCc9Jyk7XG4gICAgICAgIFx0XHR0cnl7XG4gICAgICAgICAgXHRcdFx0cmVzdWx0W2t2QXJyWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChrdkFyclsxXSk7XG4gICAgICAgIFx0XHR9Y2F0Y2goZSkge1xuICAgICAgICAgIFx0XHRcdHJlc3VsdFtrdkFyclswXV0gPSBrdkFyclsxXTtcbiAgICAgICAgXHRcdH1cbiAgICAgIFx0XHR9KTtcbiAgICAgIFx0fVxuXG4gICAgICBcdHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOagueaNruWtl+espuS4sueUn+aIkOS4gOS4quWPr+eUqOeahEZyYWdtZW50XG4gICAgICogQHBhcmFtIHRwbFxuICAgICAqIEByZXR1cm5zIHtEb2N1bWVudEZyYWdtZW50fVxuICAgICAqL1xuICAgIGNyZWF0ZUZyYWdtZW50OiBmdW5jdGlvbih0cGwpIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGxldCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgZGl2LmlubmVySFRNTCA9IHRwbDtcblxuICAgICAgd2hpbGUoZGl2LmNoaWxkTm9kZXNbMF0pIHtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGl2LmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfVxuXG4gICAgICBkaXYgPSBudWxsO1xuXG4gICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOagueaNruS8oOWFpeeahHRhcmdldCwg6I635Y+WY2xhc3PkuLpjbHPnmoTniLblhYPntKBcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICogQHBhcmFtIGNsc1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHBhcmVudHM6IGZ1bmN0aW9uKHRhcmdldCwgY2xzKXtcbiAgICAgIGlmKCF0YXJnZXQgfHwgIWNscykgcmV0dXJuIG51bGw7XG5cbiAgICAgIHZhciBwYXJlbnQgPSB0YXJnZXQ7XG5cbiAgICAgIHdoaWxlKHBhcmVudCl7XG5cbiAgICAgICAgaWYocGFyZW50LmNsYXNzTGlzdCAmJiBwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNscykpIGJyZWFrO1xuXG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuXG4gICAgICAgIGlmKCFwYXJlbnQgfHwgIXBhcmVudC50YWdOYW1lIHx8IHBhcmVudC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdCT0RZJyl7XG4gICAgICAgICAgcGFyZW50ID0gbnVsbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmoLnmja7kvKDlhaXnmoTogYrlpKnlr7nosaEs55Sf5oiQ6ZW/bmlja+Wtl+espuS4slxuICAgICAqIEBwYXJhbSBjaWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRVaWQ6IGZ1bmN0aW9uKGNpZCkge1xuICAgICAgaWYoIWNpZCkgcmV0dXJuICcnO1xuICAgICAgLy8g5Lq6XG4gICAgICBpZihjaWQuYXBwa2V5ICYmIGNpZC5uaWNrKSB7XG4gICAgICAgIHJldHVybiBjaWQuYXBwa2V5ICsgY2lkLm5pY2s7XG4gICAgICB9XG4gICAgICAvLyDnvqRcbiAgICAgIGVsc2UgaWYoY2lkLnRyaWJlaWQpIHtcbiAgICAgICAgcmV0dXJuIGNpZC50cmliZWlkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJyc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9rmNpZOeahOexu+Wei1xuICAgICAqIEBwYXJhbSB7W3R5cGVdfSBjaWQgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHNldENpZFR5cGU6IGZ1bmN0aW9uKGNpZCkge1xuICAgICAgaWYoIWNpZCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIGlmKGNpZC50eXBlKSByZXR1cm4gY2lkO1xuXG4gICAgICBpZihjaWQuYXBwa2V5ICYmIGNpZC5uaWNrKSB7XG4gICAgICAgIGNpZC50eXBlID0gMTtcbiAgICAgIH1lbHNlIGlmKGNpZC50cmliZWlkICYmIGNpZC50cmliZWlkICE9PSAnMCcpIHtcbiAgICAgICAgY2lkLnR5cGUgPSAyO1xuICAgICAgfWVsc2Uge1xuICAgICAgICBjaWQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2lkO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5qC55o2u6IGK5aSp5a+56LGh6I635Y+W5raI5oGv57G75Z6LXG4gICAgICogQHBhcmFtIGNpZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldExhYmVsOiBmdW5jdGlvbihjaWQpIHtcbiAgICAgIGlmKCFjaWQpIHJldHVybiAnJztcbiAgICAgIC8vIOWmguaenOaciWFwcGtleei3n25pY2ss6YKj5LmI5piv5Y2V6IGKXG4gICAgICBpZihjaWQuYXBwa2V5ICYmIGNpZC5uaWNrKSB7XG4gICAgICAgIHJldHVybiAnY2hhdCc7XG4gICAgICB9XG4gICAgICAvLyDlpoLmnpzmnIl0cmliZWlkLOmCo+S5iOaYr+e+pOiBilxuICAgICAgZWxzZSBpZihjaWQudHJpYmVpZCkge1xuICAgICAgICByZXR1cm4gJ3RyaWJlJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICcnO1xuICAgIH0sXG5cbiAgICBzdG9wU2Nyb2xsVG9Cb3R0b206IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy50b0JvdHRvbVRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnRvQm90dG9tVGltZXIpO1xuICAgIH0sXG5cbiAgICBzY3JvbGxUb0JvdHRvbTogZnVuY3Rpb24oY29udGFpbmVyLCBlbHMsIHRvKSB7XG4gICAgICBsZXQgaGFzVG8gPSB0eXBlb2YgdG8gIT09ICd1bmRlZmluZWQnO1xuICAgICAgLy8g5aaC5p6c5a2Y5Zyo5raI5oGv5YWD57SgLCDliJnpnIDopoHpgY3ljobmtojmga/lhYPntKDkuK3nmoTlm77niYcv6KeG6aKRLCDkv53or4Hlm77niYcv6KeG6aKR5LiL6L295oiQ5Yqf5ZCOLOi/mOS8muaJp+ihjOa7muWKqOWIsOW6lemDqOeahOaTjeS9nFxuICAgICAgaWYoZWxzICYmIGVscy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHQ7XG5cbiAgICAgICAgZWxzLmZvckVhY2goZWwgPT4ge1xuXG4gICAgICAgICAgaWYoIWVsLnF1ZXJ5U2VsZWN0b3JBbGwpIHJldHVybjtcbiAgICAgICAgICBbLi4uZWwucXVlcnlTZWxlY3RvckFsbCgnaW1nJyldLmZvckVhY2goaW1nID0+IHtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBpbWcub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgIHRoaXMub25sb2FkID0gaW1nLm9uZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgICAgICAgICAgIC8vIOiuvue9ruWbvueJh+mrmOW6piwg6Ziy5q2i5YiH5o2i5Zue5p2l55qE5pe25YCZ5Zu+54mH6Lez5YqoXG4gICAgICAgICAgICAgIC8vdGhpcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW1nLmlkKSl7XG4gICAgICAgICAgICAgICAgdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IGhhc1RvID8gdG8gOiBjb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBbLi4uZWwucXVlcnlTZWxlY3RvckFsbCgndmlkZW8nKV0uZm9yRWFjaCh2aWRlbyA9PiB7XG4gICAgICAgICAgICB2aWRlby5vbmNhbnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdGhpcy5vbmNhbnBsYXkgPSBudWxsO1xuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgICAgICAgICAgIC8vIOiuvue9ruinhumikemrmOW6pizpmLLmraLliIfmjaLlm57mnaXnmoTml7blgJnop4bpopHkvY3nva7ot7PliqhcbiAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNsaWVudEhlaWdodDtcblxuICAgICAgICAgICAgICB0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IGhhc1RvID8gdG8gOiBjb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyDmuIXpmaTmu5rliqjliLDlupXpg6jnmoTlrprml7blmahcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvQm90dG9tVGltZXIpO1xuXG4gICAgICAvLyDlho3ph43mlrDorr7nva7kuIDkuKosIOS7pemYsuayoeaciea7muWKqOWIsOaMh+WumueahOS9jee9rlxuICAgICAgdGhpcy50b0JvdHRvbVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IGhhc1RvID8gdG8gOiBjb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuICAgICAgfSwgMjAwKTtcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBoYXNUbyA/IHRvIDogY29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kdWxlcy91dGlsLmpzXG4gKiovIiwibGV0IF9fQ0FDSEUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRzZXQoa2V5LCB2YWx1ZSkge1xuXHRcdHZhciBvID0gdGhpcy5nZXQoa2V5KTtcblxuXHRcdF9fQ0FDSEVba2V5XSA9IE9iamVjdC5hc3NpZ24obywgdmFsdWUpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c2V0QWxsKHZhbHVlKSB7XG5cdFx0Zm9yKHZhciBrIGluIF9fQ0FDSEUpIHtcbiAgXHRcdFx0X19DQUNIRVtrXSA9IE9iamVjdC5hc3NpZ24oX19DQUNIRVtrXSwgdmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldChrZXkpIHtcblx0XHRyZXR1cm4gX19DQUNIRVtrZXldIHx8IHt9O1xuXHR9LFxuXG5cdGdldEFsbChrZXkpIHtcblx0XHR2YXIgcmVzdWx0ID0gW10sIGl0ZW07XG5cblx0XHRmb3IodmFyIGsgaW4gX19DQUNIRSkge1xuXHRcdFx0aWYoX19DQUNIRVtrXVtrZXldKSB7XG5cdFx0XHRcdGl0ZW0gPSB7fTtcblx0XHRcdFx0Ly8gaXRlbVsna2V5J10gPSBrO1xuXHRcdFx0XHRpdGVtW2tleV0gPSBfX0NBQ0hFW2tdW2tleV07XG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sXG5cblx0Z2V0RXhhY3RseShrZXkpIHtcblx0XHRyZXR1cm4gX19DQUNIRVtrZXldO1xuXHR9LFxuXG5cdGNsZWFyKGtleSkge1xuXHRcdGtleSA/IChkZWxldGUgX19DQUNIRVtrZXldKSA6IChfX0NBQ0hFID0ge30pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGNsZWFySW5LZXkoa2V5LCBpbmtleSkge1xuXHRcdHZhciB2ID0gdGhpcy5nZXQoa2V5KTtcblxuXHRcdGRlbGV0ZSB2W2lua2V5XTtcblx0fVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2R1bGVzL2NhY2hlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLy9cbi8vIFdlIHN0b3JlIG91ciBFRSBvYmplY3RzIGluIGEgcGxhaW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGV2ZW50IG5hbWVzLlxuLy8gSWYgYE9iamVjdC5jcmVhdGUobnVsbClgIGlzIG5vdCBzdXBwb3J0ZWQgd2UgcHJlZml4IHRoZSBldmVudCBuYW1lcyB3aXRoIGFcbi8vIGB+YCB0byBtYWtlIHN1cmUgdGhhdCB0aGUgYnVpbHQtaW4gb2JqZWN0IHByb3BlcnRpZXMgYXJlIG5vdCBvdmVycmlkZGVuIG9yXG4vLyB1c2VkIGFzIGFuIGF0dGFjayB2ZWN0b3IuXG4vLyBXZSBhbHNvIGFzc3VtZSB0aGF0IGBPYmplY3QuY3JlYXRlKG51bGwpYCBpcyBhdmFpbGFibGUgd2hlbiB0aGUgZXZlbnQgbmFtZVxuLy8gaXMgYW4gRVM2IFN5bWJvbC5cbi8vXG52YXIgcHJlZml4ID0gdHlwZW9mIE9iamVjdC5jcmVhdGUgIT09ICdmdW5jdGlvbicgPyAnficgOiBmYWxzZTtcblxuLyoqXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZSBFdmVudEVtaXR0ZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRXZlbnQgaGFuZGxlciB0byBiZSBjYWxsZWQuXG4gKiBAcGFyYW0ge01peGVkfSBjb250ZXh0IENvbnRleHQgZm9yIGZ1bmN0aW9uIGV4ZWN1dGlvbi5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29uY2U9ZmFsc2VdIE9ubHkgZW1pdCBvbmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRUUoZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdGhpcy5mbiA9IGZuO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLm9uY2UgPSBvbmNlIHx8IGZhbHNlO1xufVxuXG4vKipcbiAqIE1pbmltYWwgRXZlbnRFbWl0dGVyIGludGVyZmFjZSB0aGF0IGlzIG1vbGRlZCBhZ2FpbnN0IHRoZSBOb2RlLmpzXG4gKiBFdmVudEVtaXR0ZXIgaW50ZXJmYWNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkgeyAvKiBOb3RoaW5nIHRvIHNldCAqLyB9XG5cbi8qKlxuICogSG9sZCB0aGUgYXNzaWduZWQgRXZlbnRFbWl0dGVycyBieSBuYW1lLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGxpc3RpbmcgdGhlIGV2ZW50cyBmb3Igd2hpY2ggdGhlIGVtaXR0ZXIgaGFzIHJlZ2lzdGVyZWRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzXG4gICAgLCBuYW1lcyA9IFtdXG4gICAgLCBuYW1lO1xuXG4gIGlmICghZXZlbnRzKSByZXR1cm4gbmFtZXM7XG5cbiAgZm9yIChuYW1lIGluIGV2ZW50cykge1xuICAgIGlmIChoYXMuY2FsbChldmVudHMsIG5hbWUpKSBuYW1lcy5wdXNoKHByZWZpeCA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lKTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgcmV0dXJuIG5hbWVzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV2ZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBsaXN0IG9mIGFzc2lnbmVkIGV2ZW50IGxpc3RlbmVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgVGhlIGV2ZW50cyB0aGF0IHNob3VsZCBiZSBsaXN0ZWQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGV4aXN0cyBXZSBvbmx5IG5lZWQgdG8ga25vdyBpZiB0aGVyZSBhcmUgbGlzdGVuZXJzLlxuICogQHJldHVybnMge0FycmF5fEJvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCwgZXhpc3RzKSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBhdmFpbGFibGUgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKGV4aXN0cykgcmV0dXJuICEhYXZhaWxhYmxlO1xuICBpZiAoIWF2YWlsYWJsZSkgcmV0dXJuIFtdO1xuICBpZiAoYXZhaWxhYmxlLmZuKSByZXR1cm4gW2F2YWlsYWJsZS5mbl07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhdmFpbGFibGUubGVuZ3RoLCBlZSA9IG5ldyBBcnJheShsKTsgaSA8IGw7IGkrKykge1xuICAgIGVlW2ldID0gYXZhaWxhYmxlW2ldLmZuO1xuICB9XG5cbiAgcmV0dXJuIGVlO1xufTtcblxuLyoqXG4gKiBFbWl0IGFuIGV2ZW50IHRvIGFsbCByZWdpc3RlcmVkIGV2ZW50IGxpc3RlbmVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgVGhlIG5hbWUgb2YgdGhlIGV2ZW50LlxuICogQHJldHVybnMge0Jvb2xlYW59IEluZGljYXRpb24gaWYgd2UndmUgZW1pdHRlZCBhbiBldmVudC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiBmYWxzZTtcblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF1cbiAgICAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGFyZ3NcbiAgICAsIGk7XG5cbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAobGlzdGVuZXJzLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVycy5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCksIHRydWU7XG4gICAgICBjYXNlIDI6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEpLCB0cnVlO1xuICAgICAgY2FzZSAzOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiksIHRydWU7XG4gICAgICBjYXNlIDQ6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMyksIHRydWU7XG4gICAgICBjYXNlIDU6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQpLCB0cnVlO1xuICAgICAgY2FzZSA2OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0LCBhNSksIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mbi5hcHBseShsaXN0ZW5lcnMuY29udGV4dCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICwgajtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbaV0uZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICAgIGNhc2UgMTogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQpOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEpOyBicmVhaztcbiAgICAgICAgY2FzZSAzOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBuZXcgRXZlbnRMaXN0ZW5lciBmb3IgdGhlIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBOYW1lIG9mIHRoZSBldmVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIENhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtNaXhlZH0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgb2YgdGhlIGZ1bmN0aW9uLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICB2YXIgbGlzdGVuZXIgPSBuZXcgRUUoZm4sIGNvbnRleHQgfHwgdGhpcylcbiAgICAsIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpIHRoaXMuX2V2ZW50cyA9IHByZWZpeCA/IHt9IDogT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgdGhpcy5fZXZlbnRzW2V2dF0gPSBsaXN0ZW5lcjtcbiAgZWxzZSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XS5mbikgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gICAgZWxzZSB0aGlzLl9ldmVudHNbZXZ0XSA9IFtcbiAgICAgIHRoaXMuX2V2ZW50c1tldnRdLCBsaXN0ZW5lclxuICAgIF07XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkIGFuIEV2ZW50TGlzdGVuZXIgdGhhdCdzIG9ubHkgY2FsbGVkIG9uY2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IE5hbWUgb2YgdGhlIGV2ZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gQ2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge01peGVkfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCBvZiB0aGUgZnVuY3Rpb24uXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICB2YXIgbGlzdGVuZXIgPSBuZXcgRUUoZm4sIGNvbnRleHQgfHwgdGhpcywgdHJ1ZSlcbiAgICAsIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpIHRoaXMuX2V2ZW50cyA9IHByZWZpeCA/IHt9IDogT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgdGhpcy5fZXZlbnRzW2V2dF0gPSBsaXN0ZW5lcjtcbiAgZWxzZSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XS5mbikgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gICAgZWxzZSB0aGlzLl9ldmVudHNbZXZ0XSA9IFtcbiAgICAgIHRoaXMuX2V2ZW50c1tldnRdLCBsaXN0ZW5lclxuICAgIF07XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IHdlIHdhbnQgdG8gcmVtb3ZlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIHRoYXQgd2UgbmVlZCB0byBmaW5kLlxuICogQHBhcmFtIHtNaXhlZH0gY29udGV4dCBPbmx5IHJlbW92ZSBsaXN0ZW5lcnMgbWF0Y2hpbmcgdGhpcyBjb250ZXh0LlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIE9ubHkgcmVtb3ZlIG9uY2UgbGlzdGVuZXJzLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiB0aGlzO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgZXZlbnRzID0gW107XG5cbiAgaWYgKGZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgICAgaWYgKFxuICAgICAgICAgICBsaXN0ZW5lcnMuZm4gIT09IGZuXG4gICAgICAgIHx8IChvbmNlICYmICFsaXN0ZW5lcnMub25jZSlcbiAgICAgICAgfHwgKGNvbnRleHQgJiYgbGlzdGVuZXJzLmNvbnRleHQgIT09IGNvbnRleHQpXG4gICAgICApIHtcbiAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAgbGlzdGVuZXJzW2ldLmZuICE9PSBmblxuICAgICAgICAgIHx8IChvbmNlICYmICFsaXN0ZW5lcnNbaV0ub25jZSlcbiAgICAgICAgICB8fCAoY29udGV4dCAmJiBsaXN0ZW5lcnNbaV0uY29udGV4dCAhPT0gY29udGV4dClcbiAgICAgICAgKSB7XG4gICAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vXG4gIC8vIFJlc2V0IHRoZSBhcnJheSwgb3IgcmVtb3ZlIGl0IGNvbXBsZXRlbHkgaWYgd2UgaGF2ZSBubyBtb3JlIGxpc3RlbmVycy5cbiAgLy9cbiAgaWYgKGV2ZW50cy5sZW5ndGgpIHtcbiAgICB0aGlzLl9ldmVudHNbZXZ0XSA9IGV2ZW50cy5sZW5ndGggPT09IDEgPyBldmVudHNbMF0gOiBldmVudHM7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1tldnRdO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzIG9yIG9ubHkgdGhlIGxpc3RlbmVycyBmb3IgdGhlIHNwZWNpZmllZCBldmVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IHdhbnQgdG8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgaWYgKCF0aGlzLl9ldmVudHMpIHJldHVybiB0aGlzO1xuXG4gIGlmIChldmVudCkgZGVsZXRlIHRoaXMuX2V2ZW50c1twcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XTtcbiAgZWxzZSB0aGlzLl9ldmVudHMgPSBwcmVmaXggPyB7fSA6IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gQWxpYXMgbWV0aG9kcyBuYW1lcyBiZWNhdXNlIHBlb3BsZSByb2xsIGxpa2UgdGhhdC5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcblxuLy9cbi8vIFRoaXMgZnVuY3Rpb24gZG9lc24ndCBhcHBseSBhbnltb3JlLlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBFeHBvc2UgdGhlIHByZWZpeC5cbi8vXG5FdmVudEVtaXR0ZXIucHJlZml4ZWQgPSBwcmVmaXg7XG5cbi8vXG4vLyBFeHBvc2UgdGhlIG1vZHVsZS5cbi8vXG5pZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBtb2R1bGUpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2R1bGVzL2V2ZW50ZW1pdHRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbmlmKCF3aW5kb3cuY29uc29sZSkge1xuXHR3aW5kb3cuY29uc29sZSA9IHtcblx0XHRsb2c6IGZ1bmN0aW9uKCkge30sXG5cdFx0d2FybmluZzogZnVuY3Rpb24oKXt9LFxuXHRcdGVycm9yOiBmdW5jdGlvbigpe30sXG5cdFx0aW5mbzogZnVuY3Rpb24oKXt9XG5cdH1cbn1cbmxldCBMb2cgPSB7XG5cdHByZWZpeDogJycsXG5cdGxldmVsOiAtMSxcblx0X19uaWNrOiAnJyxcblxuXHRfX2dsQ2FjaGU6IHt9LFxuXG5cdHNldE5pY2s6IGZ1bmN0aW9uKG5pY2spIHtcblx0XHR0aGlzLl9fbmljayA9IG5pY2s7XG5cdH0sXG5cdFxuXHRnb2xkTG9nOiBmdW5jdGlvbihsb2drZXksIHBhcmFtLCBuaWNrKSB7XG5cdFx0dmFyIF90aGF0ID0gdGhpcyxcblx0XHRcdHBhcmFtU3RyID0gJycsXG4gICAgICAgICAgICBob2xkID0gK25ldyBEYXRlKCksXG4gICAgICAgICAgICBpbWcgPSBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICAgIG4gPSB0eXBlb2YgbmljayA9PT0gJ3N0cmluZycgPyBuaWNrIDogdGhpcy5fX25pY2s7XG5cbiAgICAgICAgdGhpcy5fX2dsQ2FjaGVbaG9sZF0gPSBpbWc7XG5cbiAgICAgICAgaWYodHlwZW9mIHBhcmFtID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICBmb3IodmFyIGsgaW4gcGFyYW0pe1xuICAgICAgICAgICAgXHR0cnl7XG4gICAgICAgICAgICBcdFx0cGFyYW1TdHIgKz0gJyYnICsgayArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbVtrXSk7XG4gICAgICAgICAgICBcdH1jYXRjaChlKXt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbWcuc3JjID0gJ2h0dHBzOi8vZ20ubW1zdGF0LmNvbS8nICsgbG9na2V5ICsgJz9jYWNoZT0nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKigxMTExMTExLTk5OTk5OTkpKzk5OTk5OTkpICsgJyZuaWNrPScgKyBuICsgcGFyYW1TdHI7XG5cbiAgICAgICAgaW1nLm9ubG9hZCA9IChpbWcub25lcnJvciA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIGltZyA9IG51bGw7XG4gICAgICAgICAgICBfdGhhdC5fX2dsQ2FjaGVbaG9sZF0gPSBudWxsO1xuICAgICAgICAgICAgZGVsZXRlIF90aGF0Ll9fZ2xDYWNoZVtob2xkXTtcbiAgICAgICAgfSk7XG5cdH0sXG5cblx0c2V0UHJlZml4OiBmdW5jdGlvbihzdHIpIHtcblx0XHR0aGlzLnByZWZpeCA9IHN0cjtcblx0fSxcblxuXHRzZXRMb2dMZXZlbDogZnVuY3Rpb24obikge1xuXHRcdHRoaXMubGV2ZWwgPSBuO1xuXHR9LFxuXG5cdGFkZExvY2FsTG9nOiBmdW5jdGlvbigpIHtcblx0XHRpZighd2luZG93LndvcmtiZW5jaCkgcmV0dXJuO1xuXHRcdGxldCBsb2dzID0gW107XG5cdFx0bGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG5cdFx0YXJncy5mb3JFYWNoKGZ1bmN0aW9uKGFyZykge1xuXHRcdFx0aWYodHlwZW9mIGFyZyAhPT0gJ3N0cmluZycpIHtcblx0XHQgICAgICAgIHRyeXtcblx0XHQgICAgICAgICAgbG9ncy5wdXNoKEpTT04uc3RyaW5naWZ5KGFyZykpO1xuXHRcdCAgICAgICAgfWNhdGNoKGUpe31cblx0XHQgICAgfWVsc2Uge1xuXHRcdCAgICAgICAgbG9ncy5wdXNoKGFyZyk7XG5cdFx0ICAgIH1cblx0XHR9KTtcblxuXHRcdHdvcmtiZW5jaC5pbS5sb2codGhpcy5sZXZlbCwgdGhpcy5wcmVmaXggKyAnPT09PT09PT09PicgKyBsb2dzLmpvaW4oJ1xcbiAgICAgICAgICcpKTtcblx0fVxufTtcbmxldCBjb2xvcnMgPSBbJ29yYW5nZScsICdibHVlJywgJ2dyZWVuJywgJ3JlZCcsICdkYXJrYmx1ZSddO1xuXG5jb2xvcnMuZm9yRWFjaChmdW5jdGlvbihjb2xvcikge1xuXHRMb2dbY29sb3JdID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG5cdFx0aWYoTG9nLmxldmVsID09PSAwKSB7XG5cdFx0XHRMb2cuYWRkTG9jYWxMb2cuYXBwbHkoTG9nLCBhcmdzKTtcblx0XHR9XG5cblx0XHRpZih0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGFyZ3NbMF0gPSAnJWMnICsgYXJnc1swXTtcblx0XHRcdGFyZ3Muc3BsaWNlKDEsIDAsICdjb2xvcjonICsgY29sb3IgKyAnO2ZvbnQtc2l6ZToxNHB4OycpO1xuXHRcdH1cblxuXHRcdHdpbmRvdy5jb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcblx0fVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IExvZztcblx0XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZHVsZXMvbG9nLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Ly8g5LqL5Lu25o+S5Lu257yT5a2YXG5cdFx0dGhpcy5fX0V2ZW50UGx1Z2luTGlzdCA9IHt9O1xuXHRcdC8vIOaZrumAmuaPkuS7tue8k+WtmFxuXHRcdHRoaXMuX19QbHVnaW5MaXN0ID0ge307XG5cdH1cblxuXHRpbml0KGNvbnRleHQpIHtcblx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG5cdFx0dGhpcy51c2UoKTtcblxuXHRcdGlmKCFjb250ZXh0IHx8ICFjb250ZXh0LmNvbnRhaW5lcikgcmV0dXJuIHRoaXM7XG5cblx0XHRsZXQgaGFuZGxlciwgb2JqO1xuXG5cdFx0Zm9yKHZhciBlIGluIHRoaXMuX19FdmVudFBsdWdpbkxpc3QpIHtcblx0XHRcdG9iaiA9IHRoaXMuX19FdmVudFBsdWdpbkxpc3RbZV07XG5cblx0XHRcdChmdW5jdGlvbihvKSB7XG5cdFx0XHRcdGNvbnRleHQuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZSwgZnVuY3Rpb24oZXYpIHtcblx0XHRcdFx0XHRmb3IobGV0IGNscyBpbiBvKSB7XG5cdFx0XHRcdFx0XHRpZihjbHMgPT09ICcqJykge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnaXMgKicpO1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYoZXYgJiYgZXYudGFyZ2V0ICYmXG5cdFx0XHRcdFx0XHRcdGV2LnRhcmdldC5jbGFzc0xpc3QgJiZcblx0XHRcdFx0XHRcdFx0ZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhjbHMpKSB7XG5cdFx0XHRcdFx0XHRcdG9bY2xzXS5mb3JFYWNoKGZ1bmN0aW9uKGgpIHtcblx0XHRcdFx0XHRcdFx0XHRoLmNhbGwobnVsbCwgZXYpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZihvWycqJ10gJiYgb1snKiddLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0b1snKiddLmZvckVhY2goZnVuY3Rpb24oaCkge1xuXHRcdFx0XHRcdFx0XHRoLmNhbGwobnVsbCwgZXYpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pKG9iaik7XG5cdFx0XHRcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdF9fbGlzdGVuZXIoZSkge1xuXHRcdGxldCBsaXN0ID0gdGhpcy5fX0V2ZW50UGx1Z2luTGlzdDtcblx0XHRyZXR1cm4gZnVuY3Rpb24oZXYpIHtcblx0XHRcdGxldCBvYmogPSBsaXN0W2VdLCBoYW5kbGVyO1xuXHRcdFx0Zm9yKGxldCBjbHMgaW4gb2JqKSB7XG5cdFx0XHRcdGlmKGNscyA9PT0gJyonKSByZXR1cm47XG5cblx0XHRcdFx0aWYoZXYgJiYgZXYudGFyZ2V0ICYmXG5cdFx0XHRcdFx0ZXYudGFyZ2V0LmNsYXNzTGlzdCAmJlxuXHRcdFx0XHRcdGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSkge1xuXHRcdFx0XHRcdG9ialtjbHNdLmZvckVhY2goZnVuY3Rpb24oaCkge1xuXHRcdFx0XHRcdFx0aC5jYWxsKG51bGwsIGV2KTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKG9ialsnKiddICYmIG9ialsnKiddLmxlbmd0aCkge1xuXHRcdFx0XHRvYmpbJyonXS5mb3JFYWNoKGZ1bmN0aW9uKGgpIHtcblx0XHRcdFx0XHRoLmNhbGwobnVsbCwgZXYpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRhZGRFdmVudFBsdWdpbihldmVudCwgY2xzZXMsIGhhbmRsZXIpIHtcblxuXHRcdGlmKHR5cGVvZiBjbHNlcyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdGhhbmRsZXIgPSBjbHNlcztcblx0XHRcdGNsc2VzID0gJyonO1xuXHRcdH1cblxuXHRcdGlmKCFoYW5kbGVyKSByZXR1cm4gdGhpcztcblxuXHRcdGxldCBsaXN0ID0gdGhpcy5fX0V2ZW50UGx1Z2luTGlzdDtcblx0XHQhbGlzdFtldmVudF0gJiYgKGxpc3RbZXZlbnRdID0ge30pO1xuXG5cdFx0Y2xzZXMgPSBjbHNlcy5zcGxpdCgvXFxzKy8pO1xuXG5cdFx0Y2xzZXMuZm9yRWFjaChjbHMgPT4ge1xuXHRcdFx0aWYoIWNscykgcmV0dXJuO1xuXG5cdFx0XHQhbGlzdFtldmVudF1bY2xzXSAmJiAobGlzdFtldmVudF1bY2xzXSA9IFtdKTtcblx0XHRcdGxpc3RbZXZlbnRdW2Nsc10ucHVzaChoYW5kbGVyKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cmVtb3ZlRXZlbnRQbHVnaW4oZXZlbnQsIGNsc2VzLCBoYW5kbGVyKSB7XG5cdFx0aWYoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuX19FdmVudFBsdWdpbkxpc3QgPSB7fTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKHR5cGVvZiBjbHNlcyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdGhhbmRsZXIgPSBjbHNlcztcblx0XHRcdGNsc2VzID0gJyonO1xuXHRcdH1cblxuXHRcdGxldCBsaXN0ID0gdGhpcy5fX0V2ZW50UGx1Z2luTGlzdDtcblx0XHRpZighbGlzdFtldmVudF0pIHJldHVybiB0aGlzO1xuXG5cdFx0Y2xzZXMgPSBjbHNlcy5zcGxpdCgvXFxzKy8pO1xuXG5cdFx0Y2xzZXMuZm9yRWFjaChjbHMgPT4ge1xuXHRcdFx0aWYoIWNscykgcmV0dXJuO1xuXG5cdFx0XHRpZighaGFuZGxlcikge1xuXHRcdFx0XHRkZWxldGUgbGlzdFtldmVudF1bY2xzXTtcblx0XHRcdH1lbHNlIGlmKGxpc3RbZXZlbnRdW2Nsc10pIHtcblx0XHRcdFx0bGlzdFtldmVudF1bY2xzXS5mb3JFYWNoKChoLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdGlmKGggPT09IGhhbmRsZXIpIHtcblx0XHRcdFx0XHRcdGxpc3RbZXZlbnRdW2Nsc10uc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhZGRQbHVnaW4obmFtZSwgaGFuZGxlcikge1xuXHRcdHRoaXMuX19QbHVnaW5MaXN0W25hbWVdID0gaGFuZGxlcjtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cmVtb3ZlUGx1Z2luKG5hbWUpIHtcblx0XHRsZXQgaGFuZGxlcjtcblx0XHRpZihuYW1lKSB7XG5cdFx0XHRoYW5kbGVyID0gdGhpcy5fX1BsdWdpbkxpc3RbbmFtZV07XG5cdFx0XHRoYW5kbGVyICYmIGhhbmRsZXIuZGVzdHJveSAmJiBoYW5kbGVyLmRlc3Ryb3kodGhpcy5jb250ZXh0KTtcblx0XHRcdGRlbGV0ZSB0aGlzLl9fUGx1Z2luTGlzdFtuYW1lXTtcblx0XHR9ZWxzZSB7XG5cdFx0XHRmb3IobmFtZSBpbiB0aGlzLl9fUGx1Z2luTGlzdCkge1xuXHRcdFx0XHRoYW5kbGVyID0gdGhpcy5fX1BsdWdpbkxpc3RbbmFtZV07XG5cdFx0XHRcdGhhbmRsZXIgJiYgaGFuZGxlci5kZXN0cm95ICYmIGhhbmRsZXIuZGVzdHJveSh0aGlzLmNvbnRleHQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9fUGx1Z2luTGlzdCA9IHt9O1xuXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dXNlKG5hbWUpIHtcblx0XHRsZXQgaGFuZGxlcjtcblx0XHRpZihuYW1lKSB7XG5cdFx0XHRoYW5kbGVyID0gdGhpcy5fX1BsdWdpbkxpc3RbbmFtZV07XG5cdFx0XHR0cnl7XG5cdFx0XHRcdGhhbmRsZXIgJiYgaGFuZGxlci5pbml0ICYmIGhhbmRsZXIuaW5pdCh0aGlzLmNvbnRleHQpO1xuXHRcdFx0fWNhdGNoKGUpe2NvbnNvbGUuZXJyb3IoZSk7fVxuXHRcdH1lbHNlIHtcblx0XHRcdGZvcihuYW1lIGluIHRoaXMuX19QbHVnaW5MaXN0KSB7XG5cdFx0XHRcdHRoaXMudXNlKG5hbWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0UGx1Z2luKG5hbWUpIHtcblx0XHRyZXR1cm4gdGhpcy5fX1BsdWdpbkxpc3RbbmFtZV07XG5cdH1cblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kdWxlcy9wbHVnaW4uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5jb25zdCBTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQ3JlYXRvciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuX19iZWZvcmVMaXN0ID0gW107XG5cdFx0dGhpcy5fX2FmdGVyTGlzdCA9IFtdO1xuXHRcdHRoaXMuYWN0aW9uVHlwZSA9ICdzeW5jJztcblx0fVxuXG5cdF9fY2xlYXJPbmNlKCkge1xuXHRcdGxldCBiTGlzdCA9IFtdO1xuXHRcdGxldCBhTGlzdCA9IFtdO1xuXHRcdGxldCBpID0gMDtcblx0XHRpZih0aGlzLl9fYmVmb3JlTGlzdC5sZW5ndGgpIHtcblx0XHRcdHRoaXMuX19iZWZvcmVMaXN0LmZvckVhY2goKG9iaiwgaW5kZXgpID0+IHtcblx0XHRcdFx0aWYob2JqLm9uY2UpIHtcblx0XHRcdFx0XHRiTGlzdC5wdXNoKGluZGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5fX2FmdGVyTGlzdC5sZW5ndGgpIHtcblx0XHRcdHRoaXMuX19hZnRlckxpc3QuZm9yRWFjaCgob2JqLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZihvYmoub25jZSkge1xuXHRcdFx0XHRcdGFMaXN0LnB1c2goaW5kZXgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRiTGlzdC5sZW5ndGggJiYgYkxpc3QuZm9yRWFjaChpbmRleCA9PiB7XG5cdFx0XHR0aGlzLl9fYmVmb3JlTGlzdC5zcGxpY2UoaW5kZXggLSBpLCAxKTtcblx0XHRcdGktLTtcblx0XHR9KTtcblxuXHRcdGkgPSAwO1xuXG5cdFx0YUxpc3QubGVuZ3RoICYmIGFMaXN0LmZvckVhY2goaW5kZXggPT4ge1xuXHRcdFx0dGhpcy5fX2FmdGVyTGlzdC5zcGxpY2UoaW5kZXggLSBpLCAxKTtcblx0XHRcdGktLTtcblx0XHR9KTtcblx0fVxuXG5cdGRvU3luYygpIHsgcmV0dXJuIHRoaXM7IH1cblxuXHRkb0FzeW5jKCkgeyByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pOyB9XG5cblx0YWN0aW9uKCkge1xuXHRcdGxldCBhcmdzID0gU2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuYWN0aW9uVHlwZSAhPT0gJ2FzeW5jJyA/IFxuXHRcdFx0dGhpcy5hY3Rpb25TeW5jLmFwcGx5KHRoaXMsIGFyZ3MpIDogXG5cdFx0XHR0aGlzLmFjdGlvbkFzeW5jLmFwcGx5KHRoaXMsIGFyZ3MpXG5cdH1cblxuXHRhY3Rpb25TeW5jKCkge1xuXHRcdGxldCBfdGhhdCA9IHRoaXMsXG5cdFx0XHRhcmdzID0gU2xpY2UuY2FsbChhcmd1bWVudHMpLFxuXHRcdFx0Y29udGV4dCA9IHt9O1xuXG5cdFx0YXJncy51bnNoaWZ0KGNvbnRleHQpO1xuXHRcdGxldCBzdG9wID0gZmFsc2U7XG5cdFx0aWYodGhpcy5fX2JlZm9yZUxpc3QubGVuZ3RoKXtcblx0XHRcdHRyeXtcblx0XHRcdFx0bGV0IHJlc3VsdDtcblx0XHRcdFx0dGhpcy5fX2JlZm9yZUxpc3QuZm9yRWFjaChvYmogPT4ge1xuXHRcdFx0XHRcdGlmKHN0b3ApIHJldHVybjtcblx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBvYmouaGFuZGxlci5hcHBseShfdGhhdCwgYXJncyk7XG5cdFx0XHRcdFx0fWNhdGNoKGUpIHtjb25zb2xlLmVycm9yKCdpbiBhY3Rpb25TeW5jOmJlZm9yZSBlcnJvcicsIGUpO31cblxuXHRcdFx0XHRcdGlmKHJlc3VsdCA9PT0gZmFsc2UpIHsgc3RvcCA9IHRydWU7IH1cblx0XHRcdFx0XHRcblx0XHRcdFx0fSk7XG5cdFx0XHR9Y2F0Y2goZSkge1xuXHRcdFx0XHRfdGhhdC5lcnJvcihlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZihzdG9wKSByZXR1cm4gdGhpcztcblxuXHRcdHRyeXtcblx0XHRcdHRoaXMuZG9TeW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXHRcdH1jYXRjaChlKSB7XG5cdFx0XHRfdGhhdC5lcnJvcihlKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYodGhpcy5fX2FmdGVyTGlzdC5sZW5ndGgpe1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRsZXQgc3RvcCA9IGZhbHNlLCByZXN1bHQ7XG5cdFx0XHRcdHRoaXMuX19hZnRlckxpc3QuZm9yRWFjaChvYmogPT4ge1xuXHRcdFx0XHRcdGlmKHN0b3ApIHJldHVybjtcblx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBvYmouaGFuZGxlci5hcHBseShfdGhhdCwgYXJncyk7XG5cdFx0XHRcdFx0fWNhdGNoKGUpIHtjb25zb2xlLmVycm9yKCdpbiBhY3Rpb25TeW5jOmFmdGVyIGVycm9yJywgZSk7fVxuXHRcdFx0XHRcdGlmKHJlc3VsdCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHN0b3AgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9Y2F0Y2goZSkge1xuXHRcdFx0XHRfdGhhdC5lcnJvcihlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLl9fY2xlYXJPbmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFjdGlvbkFzeW5jKCkge1xuXHRcdGxldCBfdGhhdCA9IHRoaXMsXG5cdFx0XHRhcmdzID0gU2xpY2UuY2FsbChhcmd1bWVudHMpLFxuXHRcdFx0Y29udGV4dCA9IHt9LFxuXHRcdFx0cHJvbWlzZXMgPSBbXTtcblxuXHRcdGFyZ3MudW5zaGlmdChjb250ZXh0KTtcblxuXHRcdGlmKHRoaXMuX19iZWZvcmVMaXN0Lmxlbmd0aCl7XG5cdFx0XHRsZXQgcmVzdWx0O1xuXHRcdFx0dGhpcy5fX2JlZm9yZUxpc3QuZm9yRWFjaChvYmogPT4ge1xuXHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0cmVzdWx0ID0gb2JqLmhhbmRsZXIuYXBwbHkoX3RoYXQsIGFyZ3MpO1xuXHRcdFx0XHR9Y2F0Y2goZSkge2NvbnNvbGUuZXJyb3IoJ2luIGFjdGlvbkFzeW5jOmJlZm9yZSBlcnJvcicsIGUpO31cblxuXHRcdFx0XHRpZighKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG5cblx0XHRcdFx0XHRyZXN1bHQgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9PT0gZmFsc2UgPyByZWplY3QoKSA6IHJlc29sdmUocmVzdWx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHByb21pc2VzLnB1c2gocmVzdWx0KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0X3RoYXQuZG9Bc3luYy5hcHBseShfdGhhdCwgYXJncykudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRhcmdzID0gU2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdFx0XHRcdGFyZ3MudW5zaGlmdChjb250ZXh0KTtcblx0XHRcdFx0XHRpZihfdGhhdC5fX2FmdGVyTGlzdC5sZW5ndGgpe1xuXHRcdFx0XHRcdFx0bGV0IHN0b3AgPSBmYWxzZSwgcmVzdWx0O1xuXHRcdFx0XHRcdFx0X3RoYXQuX19hZnRlckxpc3QuZm9yRWFjaChvYmogPT4ge1xuXHRcdFx0XHRcdFx0XHRpZihzdG9wKSByZXR1cm47XG5cblx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdCA9IG9iai5oYW5kbGVyLmFwcGx5KF90aGF0LCBhcmdzKTtcblx0XHRcdFx0XHRcdFx0fWNhdGNoKGUpIHtjb25zb2xlLmVycm9yKCdpbiBhY3Rpb25Bc3luYzphZnRlciBlcnJvcicsIGUpO31cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGlmKHJlc3VsdCA9PT0gZmFsc2UpIHsgc3RvcCA9IHRydWUgfVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF90aGF0Ll9fY2xlYXJPbmNlKCk7XG5cdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuXHRcdFx0XHRcdF90aGF0LmVycm9yKGVycik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG5cdFx0XHRcdF90aGF0LmVycm9yKGVycik7XG5cdFx0XHR9KTtcblxuXHRcdH1lbHNlIHtcblx0XHRcdF90aGF0LmRvQXN5bmMuYXBwbHkoX3RoYXQsIGFyZ3MpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGFyZ3MgPSBTbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0XHRcdGFyZ3MudW5zaGlmdChjb250ZXh0KTtcblx0XHRcdFx0aWYoX3RoYXQuX19hZnRlckxpc3QubGVuZ3RoKXtcblx0XHRcdFx0XHRsZXQgc3RvcCA9IGZhbHNlLCByZXN1bHQ7XG5cdFx0XHRcdFx0X3RoYXQuX19hZnRlckxpc3QuZm9yRWFjaChvYmogPT4ge1xuXHRcdFx0XHRcdFx0aWYoc3RvcCkgcmV0dXJuO1xuXHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRyZXN1bHQgPSBvYmouaGFuZGxlci5hcHBseShfdGhhdCwgYXJncyk7XG5cdFx0XHRcdFx0XHR9Y2F0Y2goZSkge2NvbnNvbGUuZXJyb3IoJ2luIGFjdGlvbkFzeW5jOmFmdGVyIGVycm9yJywgZSk7fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZihyZXN1bHQgPT09IGZhbHNlKSB7IHN0b3AgPSB0cnVlIH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfdGhhdC5fX2NsZWFyT25jZSgpO1xuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG5cdFx0XHRcdF90aGF0LmVycm9yKGVycik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlcnJvcigpIHsgcmV0dXJuIHRoaXM7IH1cblxuXHRzcGxpY2VCZWZvcmUocywgaW5kZXgsIGhhbmRsZXIpIHt0aGlzLl9fYmVmb3JlTGlzdC5zcGxpY2UocywgaW5kZXgsIHtoYW5kbGVyOiBoYW5kbGVyfSk7IHJldHVybiB0aGlzO31cblx0c3BsaWNlQWZ0ZXIocywgaW5kZXgsIGhhbmRsZXIpIHt0aGlzLl9fYWZ0ZXJMaXN0LnNwbGljZShzLCBpbmRleCwge2hhbmRsZXI6IGhhbmRsZXJ9KTsgcmV0dXJuIHRoaXM7fVxuXHRiZWZvcmUoaGFuZGxlcikgeyB0aGlzLl9fYmVmb3JlTGlzdC5wdXNoKHtoYW5kbGVyOiBoYW5kbGVyfSk7IHJldHVybiB0aGlzOyB9XG5cdGFmdGVyKGhhbmRsZXIpIHsgdGhpcy5fX2FmdGVyTGlzdC5wdXNoKHtoYW5kbGVyOiBoYW5kbGVyfSk7IHJldHVybiB0aGlzOyB9XG5cblx0c3BsaWNlQmVmb3JlT25jZShzLCBpbmRleCwgaGFuZGxlcikge3RoaXMuX19iZWZvcmVMaXN0LnNwbGljZShzLCBpbmRleCwge2hhbmRsZXI6IGhhbmRsZXIsIG9uY2U6IDF9KTsgcmV0dXJuIHRoaXM7fVxuXHRzcGxpY2VBZnRlck9uY2UocywgaW5kZXgsIGhhbmRsZXIpIHt0aGlzLl9fYWZ0ZXJMaXN0LnNwbGljZShzLCBpbmRleCwge2hhbmRsZXI6IGhhbmRsZXIsIG9uY2U6IDF9KTsgcmV0dXJuIHRoaXM7fVxuXHRiZWZvcmVPbmNlKGhhbmRsZXIpIHsgdGhpcy5fX2JlZm9yZUxpc3QucHVzaCh7aGFuZGxlcjogaGFuZGxlciwgb25jZTogMX0pOyByZXR1cm4gdGhpczsgfVxuXHRhZnRlck9uY2UoaGFuZGxlcikgeyB0aGlzLl9fYWZ0ZXJMaXN0LnB1c2goe2hhbmRsZXI6IGhhbmRsZXIsIG9uY2U6IDF9KTsgcmV0dXJuIHRoaXM7IH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZHVsZXMvYWN0aW9uY3JlYXRvci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=

/***/ },

/***/ 32:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	    ********** Juicer **********
	    ${A Fast template engine}
	    Project Home: http://juicer.name

	    Author: Guokai
	    Gtalk: badkaikai@gmail.com
	    Blog: http://benben.cc
	    Licence: MIT License
	    Version: 0.6.15
	*/

	(function() {

	    // This is the main function for not only compiling but also rendering.
	    // there's at least two parameters need to be provided, one is the tpl, 
	    // another is the data, the tpl can either be a string, or an id like #id.
	    // if only tpl was given, it'll return the compiled reusable function.
	    // if tpl and data were given at the same time, it'll return the rendered 
	    // result immediately.

	    var juicer = function() {
	        var args = [].slice.call(arguments);

	        args.push(juicer.options);

	        if(args[0].match(/^\s*#([\w:\-\.]+)\s*$/igm)) {
	            args[0].replace(/^\s*#([\w:\-\.]+)\s*$/igm, function($, $id) {
	                var _document = document;
	                var elem = _document && _document.getElementById($id);
	                args[0] = elem ? (elem.value || elem.innerHTML) : $;
	            });
	        }

	        if(juicer.documentHTML) {
	            juicer.compile.call(juicer, juicer.documentHTML);
	            juicer.documentHTML = '';
	        }

	        if(arguments.length == 1) {
	            return juicer.compile.apply(juicer, args);
	        }

	        if(arguments.length >= 2) {
	            return juicer.to_html.apply(juicer, args);
	        }
	    };

	    var __escapehtml = {
	        escapehash: {
	            '<': '&lt;',
	            '>': '&gt;',
	            '&': '&amp;',
	            '"': '&quot;',
	            "'": '&#x27;',
	            '/': '&#x2f;'
	        },
	        escapereplace: function(k) {
	            return __escapehtml.escapehash[k];
	        },
	        escaping: function(str) {
	            return typeof(str) !== 'string' ? str : str.replace(/[&<>"']/igm, this.escapereplace);
	        },
	        detection: function(data) {
	            return typeof(data) === 'undefined' ? '' : data;
	        }
	    };

	    var __throw = function(error) {
	        if(typeof(console) !== 'undefined') {
	            if(console.warn) {
	                console.warn(error);
	                return;
	            }

	            if(console.log) {
	                console.log(error);
	                return;
	            }
	        }

	        throw(error);
	    };

	    var __creator = function(o, proto) {
	        o = o !== Object(o) ? {} : o;

	        if(o.__proto__) {
	            o.__proto__ = proto;
	            return o;
	        }

	        var empty = function() {};
	        var n = Object.create ? 
	            Object.create(proto) : 
	            new(empty.prototype = proto, empty);

	        for(var i in o) {
	            if(o.hasOwnProperty(i)) {
	                n[i] = o[i];
	            }
	        }

	        return n;
	    };

	    var annotate = function(fn) {
	        var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
	        var FN_ARG_SPLIT = /,/;
	        var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
	        var FN_BODY = /^function[^{]+{([\s\S]*)}/m;
	        var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
	        var args = [],
	            fnText,
	            fnBody,
	            argDecl;

	        if (typeof fn === 'function') {
	            if (fn.length) {
	                fnText = fn.toString();
	            }
	        } else if(typeof fn === 'string') {
	            fnText = fn;
	        }

	        fnText = fnText.trim();
	        argDecl = fnText.match(FN_ARGS);
	        fnBody = fnText.match(FN_BODY)[1].trim();

	        for(var i = 0; i < argDecl[1].split(FN_ARG_SPLIT).length; i++) {
	            var arg = argDecl[1].split(FN_ARG_SPLIT)[i];
	            arg.replace(FN_ARG, function(all, underscore, name) {
	                args.push(name);
	            });
	        }

	        return [args, fnBody];
	    };

	    juicer.__cache = {};
	    juicer.version = '0.6.15';
	    juicer.settings = {};
	    juicer.documentHTML = '';

	    juicer.tags = {
	        operationOpen: '{@',
	        operationClose: '}',
	        interpolateOpen: '\\${',
	        interpolateClose: '}',
	        noneencodeOpen: '\\$\\${',
	        noneencodeClose: '}',
	        commentOpen: '\\{#',
	        commentClose: '\\}'
	    };

	    juicer.options = {
	        cache: true,
	        strip: true,
	        errorhandling: true,
	        detection: true,
	        _method: __creator({
	            __escapehtml: __escapehtml,
	            __throw: __throw,
	            __juicer: juicer
	        }, {})
	    };

	    juicer.tagInit = function() {
	        var forstart = juicer.tags.operationOpen + 'each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?' + juicer.tags.operationClose;
	        var forend = juicer.tags.operationOpen + '\\/each' + juicer.tags.operationClose;
	        var ifstart = juicer.tags.operationOpen + 'if\\s*([^}]*?)' + juicer.tags.operationClose;
	        var ifend = juicer.tags.operationOpen + '\\/if' + juicer.tags.operationClose;
	        var elsestart = juicer.tags.operationOpen + 'else' + juicer.tags.operationClose;
	        var elseifstart = juicer.tags.operationOpen + 'else if\\s*([^}]*?)' + juicer.tags.operationClose;
	        var interpolate = juicer.tags.interpolateOpen + '([\\s\\S]+?)' + juicer.tags.interpolateClose;
	        var noneencode = juicer.tags.noneencodeOpen + '([\\s\\S]+?)' + juicer.tags.noneencodeClose;
	        var inlinecomment = juicer.tags.commentOpen + '[^}]*?' + juicer.tags.commentClose;
	        var rangestart = juicer.tags.operationOpen + 'each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)' + juicer.tags.operationClose;
	        var include = juicer.tags.operationOpen + 'include\\s*([^}]*?)\\s*,\\s*([^}]*?)' + juicer.tags.operationClose;
	        var helperRegisterStart = juicer.tags.operationOpen + 'helper\\s*([^}]*?)\\s*' + juicer.tags.operationClose;
	        var helperRegisterBody = '([\\s\\S]*?)';
	        var helperRegisterEnd = juicer.tags.operationOpen + '\\/helper' + juicer.tags.operationClose;

	        juicer.settings.forstart = new RegExp(forstart, 'igm');
	        juicer.settings.forend = new RegExp(forend, 'igm');
	        juicer.settings.ifstart = new RegExp(ifstart, 'igm');
	        juicer.settings.ifend = new RegExp(ifend, 'igm');
	        juicer.settings.elsestart = new RegExp(elsestart, 'igm');
	        juicer.settings.elseifstart = new RegExp(elseifstart, 'igm');
	        juicer.settings.interpolate = new RegExp(interpolate, 'igm');
	        juicer.settings.noneencode = new RegExp(noneencode, 'igm');
	        juicer.settings.inlinecomment = new RegExp(inlinecomment, 'igm');
	        juicer.settings.rangestart = new RegExp(rangestart, 'igm');
	        juicer.settings.include = new RegExp(include, 'igm');
	        juicer.settings.helperRegister = new RegExp(helperRegisterStart + helperRegisterBody + helperRegisterEnd, 'igm');
	    };

	    juicer.tagInit();

	    // Using this method to set the options by given conf-name and conf-value,
	    // you can also provide more than one key-value pair wrapped by an object.
	    // this interface also used to custom the template tag delimater, for this
	    // situation, the conf-name must begin with tag::, for example: juicer.set
	    // ('tag::operationOpen', '{@').

	    juicer.set = function(conf, value) {
	        var that = this;

	        var escapePattern = function(v) {
	            return v.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/igm, function($) {
	                return '\\' + $;
	            });
	        };

	        var set = function(conf, value) {
	            var tag = conf.match(/^tag::(.*)$/i);

	            if(tag) {
	                that.tags[tag[1]] = escapePattern(value);
	                that.tagInit();
	                return;
	            }

	            that.options[conf] = value;
	        };

	        if(arguments.length === 2) {
	            set(conf, value);
	            return;
	        }

	        if(conf === Object(conf)) {
	            for(var i in conf) {
	                if(conf.hasOwnProperty(i)) {
	                    set(i, conf[i]);
	                }
	            }
	        }
	    };

	    // Before you're using custom functions in your template like ${name | fnName},
	    // you need to register this fn by juicer.register('fnName', fn).

	    juicer.register = function(fname, fn) {
	        var _method = this.options._method;

	        if(_method.hasOwnProperty(fname)) {
	            return false;
	        }

	        return _method[fname] = fn;
	    };

	    // remove the registered function in the memory by the provided function name.
	    // for example: juicer.unregister('fnName').

	    juicer.unregister = function(fname) {
	        var _method = this.options._method;

	        if(_method.hasOwnProperty(fname)) {
	            return delete _method[fname];
	        }
	    };

	    juicer.template = function(options) {
	        var that = this;

	        this.options = options;

	        this.__interpolate = function(_name, _escape, options) {
	            var _define = _name.split('|'), _fn = _define[0] || '', _cluster;

	            if(_define.length > 1) {
	                _name = _define.shift();
	                _cluster = _define.shift().split(',');
	                _fn = '_method.' + _cluster.shift() + '.call(this, ' + [_name].concat(_cluster) + ')';
	            }

	            return '<%= ' + (_escape ? '_method.__escapehtml.escaping' : '') + '(' +
	                        (!options || options.detection !== false ? '_method.__escapehtml.detection' : '') + '(' +
	                            _fn +
	                        ')' +
	                    ')' +
	                ' %>';
	        };

	        this.__removeShell = function(tpl, options) {
	            var _counter = 0;

	            tpl = tpl
	                // inline helper register
	                .replace(juicer.settings.helperRegister, function($, helperName, fnText) {
	                    var anno = annotate(fnText);
	                    var fnArgs = anno[0];
	                    var fnBody = anno[1];
	                    var fn = new Function(fnArgs.join(','), fnBody);

	                    juicer.register(helperName, fn);
	                    return $;
	                })

	                // for expression
	                .replace(juicer.settings.forstart, function($, _name, alias, key) {
	                    var alias = alias || 'value', key = key && key.substr(1);
	                    var _iterate = 'i' + _counter++;
	                    return '<% ~function() {' +
	                                'for(var ' + _iterate + ' in ' + _name + ') {' +
	                                    'if(' + _name + '.hasOwnProperty(' + _iterate + ')) {' +
	                                        'var ' + alias + '=' + _name + '[' + _iterate + '];' +
	                                        (key ? ('var ' + key + '=' + _iterate + ';') : '') +
	                            ' %>';
	                })
	                .replace(juicer.settings.forend, '<% }}}(); %>')

	                // if expression
	                .replace(juicer.settings.ifstart, function($, condition) {
	                    return '<% if(' + condition + ') { %>';
	                })
	                .replace(juicer.settings.ifend, '<% } %>')

	                // else expression
	                .replace(juicer.settings.elsestart, function($) {
	                    return '<% } else { %>';
	                })

	                // else if expression
	                .replace(juicer.settings.elseifstart, function($, condition) {
	                    return '<% } else if(' + condition + ') { %>';
	                })

	                // interpolate without escape
	                .replace(juicer.settings.noneencode, function($, _name) {
	                    return that.__interpolate(_name, false, options);
	                })

	                // interpolate with escape
	                .replace(juicer.settings.interpolate, function($, _name) {
	                    return that.__interpolate(_name, true, options);
	                })

	                // clean up comments
	                .replace(juicer.settings.inlinecomment, '')

	                // range expression
	                .replace(juicer.settings.rangestart, function($, _name, start, end) {
	                    var _iterate = 'j' + _counter++;
	                    return '<% ~function() {' +
	                                'for(var ' + _iterate + '=' + start + ';' + _iterate + '<' + end + ';' + _iterate + '++) {{' +
	                                    'var ' + _name + '=' + _iterate + ';' +
	                            ' %>';
	                })

	                // include sub-template
	                .replace(juicer.settings.include, function($, tpl, data) {
	                    // compatible for node.js
	                    if(tpl.match(/^file\:\/\//igm)) return $;
	                    return '<%= _method.__juicer(' + tpl + ', ' + data + '); %>';
	                });

	            // exception handling
	            if(!options || options.errorhandling !== false) {
	                tpl = '<% try { %>' + tpl;
	                tpl += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>';
	            }

	            return tpl;
	        };

	        this.__toNative = function(tpl, options) {
	            return this.__convert(tpl, !options || options.strip);
	        };

	        this.__lexicalAnalyze = function(tpl) {
	            var buffer = [];
	            var method = [];
	            var prefix = '';
	            var reserved = [
	                'if', 'each', '_', '_method', 'console', 
	                'break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete', 'do', 
	                'finally', 'for', 'function', 'in', 'instanceof', 'new', 'return', 'switch', 
	                'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'null', 'typeof', 
	                'class', 'enum', 'export', 'extends', 'import', 'super', 'implements', 'interface', 
	                'let', 'package', 'private', 'protected', 'public', 'static', 'yield', 'const', 'arguments', 
	                'true', 'false', 'undefined', 'NaN'
	            ];

	            var indexOf = function(array, item) {
	                if (Array.prototype.indexOf && array.indexOf === Array.prototype.indexOf) {
	                    return array.indexOf(item);
	                }

	                for(var i=0; i < array.length; i++) {
	                    if(array[i] === item) return i;
	                }

	                return -1;
	            };

	            var variableAnalyze = function($, statement) {
	                statement = statement.match(/\w+/igm)[0];

	                if(indexOf(buffer, statement) === -1 && indexOf(reserved, statement) === -1 && indexOf(method, statement) === -1) {

	                    // avoid re-declare native function, if not do this, template 
	                    // `{@if encodeURIComponent(name)}` could be throw undefined.

	                    if(typeof(window) !== 'undefined' && typeof(window[statement]) === 'function' && window[statement].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) {
	                        return $;
	                    }

	                    // compatible for node.js
	                    if(typeof(global) !== 'undefined' && typeof(global[statement]) === 'function' && global[statement].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) {
	                        return $;
	                    }

	                    // avoid re-declare registered function, if not do this, template 
	                    // `{@if registered_func(name)}` could be throw undefined.

	                    if(typeof(juicer.options._method[statement]) === 'function' || juicer.options._method.hasOwnProperty(statement)) {
	                        method.push(statement);
	                        return $;
	                    }

	                    // avoid SyntaxError: Unexpected number

	                    if(statement.match(/^\d+/igm)) {
	                        return $;
	                    }

	                    buffer.push(statement); // fuck ie
	                }

	                return $;
	            };

	            tpl.replace(juicer.settings.forstart, variableAnalyze).
	                replace(juicer.settings.interpolate, variableAnalyze).
	                replace(juicer.settings.ifstart, variableAnalyze).
	                replace(juicer.settings.elseifstart, variableAnalyze).
	                replace(juicer.settings.include, variableAnalyze).
	                replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_0-9]+)/igm, variableAnalyze);

	            for(var i = 0; i < buffer.length; i++) {
	                prefix += 'var ' + buffer[i] + '=_.' + buffer[i] + ';';
	            }

	            for(var i = 0; i < method.length; i++) {
	                prefix += 'var ' + method[i] + '=_method.' + method[i] + ';';
	            }

	            return '<% ' + prefix + ' %>';
	        };

	        this.__convert=function(tpl, strip) {
	            var buffer = [].join('');

	            buffer += "'use strict';"; // use strict mode
	            buffer += "var _=_||{};";
	            buffer += "var _out='';_out+='";

	            if(strip !== false) {
	                buffer += tpl
	                    .replace(/\\/g, "\\\\")
	                    .replace(/[\r\t\n]/g, " ")
	                    .replace(/'(?=[^%]*%>)/g, "\t")
	                    .split("'").join("\\'")
	                    .split("\t").join("'")
	                    .replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='")
	                    .split("<%").join("';")
	                    .split("%>").join("_out+='")+
	                    "';return _out;";

	                return buffer;
	            }

	            buffer += tpl
	                    .replace(/\\/g, "\\\\")
	                    .replace(/[\r]/g, "\\r")
	                    .replace(/[\t]/g, "\\t")
	                    .replace(/[\n]/g, "\\n")
	                    .replace(/'(?=[^%]*%>)/g, "\t")
	                    .split("'").join("\\'")
	                    .split("\t").join("'")
	                    .replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='")
	                    .split("<%").join("';")
	                    .split("%>").join("_out+='")+
	                    "';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');";

	            return buffer;
	        };

	        this.parse = function(tpl, options) {
	            var _that = this;

	            if(!options || options.loose !== false) {
	                tpl = this.__lexicalAnalyze(tpl) + tpl;
	            }

	            tpl = this.__removeShell(tpl, options);
	            tpl = this.__toNative(tpl, options);

	            this._render = new Function('_, _method', tpl);

	            this.render = function(_, _method) {
	                if(!_method || _method !== that.options._method) {
	                    _method = __creator(_method, that.options._method);
	                }

	                return _that._render.call(this, _, _method);
	            };

	            return this;
	        };
	    };

	    juicer.compile = function(tpl, options) {
	        if(!options || options !== this.options) {
	            options = __creator(options, this.options);
	        }

	        var that = this;
	        var cacheStore = {
	            get: function(tpl) {
	                if(options.cachestore) {
	                    return options.cachestore.get(tpl);
	                }

	                return that.__cache[tpl];
	            },

	            set: function(tpl, val) {
	                if(options.cachestore) {
	                    return options.cachestore.set(tpl, val);
	                }

	                return that.__cache[tpl] = val;
	            }
	        };

	        try {
	            var engine = cacheStore.get(tpl) ? 
	                cacheStore.get(tpl) : 
	                new this.template(this.options).parse(tpl, options);

	            if(!options || options.cache !== false) {
	                cacheStore.set(tpl, engine);
	            }

	            return engine;

	        } catch(e) {
	            __throw('Juicer Compile Exception: ' + e.message);

	            return {
	                render: function() {} // noop
	            };
	        }
	    };

	    juicer.to_html = function(tpl, data, options) {
	        if(!options || options !== this.options) {
	            options = __creator(options, this.options);
	        }

	        return this.compile(tpl, options).render(data, options._method);
	    };

	    // avoid memory leak for node.js
	    if(typeof(global) !== 'undefined' && typeof(window) === 'undefined') {
	        juicer.set('cache', false);
	    }

	    if(typeof(document) !== 'undefined' && document.body) {
	        juicer.documentHTML = document.body.innerHTML;
	    }

	    typeof(module) !== 'undefined' && module.exports ? module.exports = juicer : this.juicer = juicer;

	})();

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }

/******/ })
});
;