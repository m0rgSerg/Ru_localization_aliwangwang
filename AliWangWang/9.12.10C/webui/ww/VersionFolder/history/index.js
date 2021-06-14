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
return webpackJsonpIMKITModule([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(175);

	__webpack_require__(176);

	__webpack_require__(184);

	__webpack_require__(185);

	__webpack_require__(187);

	__webpack_require__(190);

	var _$HistoryRoot = __webpack_require__(4);

	//import IMKIT from '$BaseRoot';
	window.addEventListener('DOMContentLoaded', function () {
	    _$HistoryRoot.Win.container = document.getElementById(_$HistoryRoot.Constant.EL_ID.MSG_CONTAINER);
	    _$HistoryRoot.Action.start.action();
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(3);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$HistoryRoot = __webpack_require__(4);

	var _$HistoryRoot2 = _interopRequireDefault(_$HistoryRoot);

	var _$IMSDKRoot = __webpack_require__(26);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Util = _$BaseRoot.Base.Util,
	    Cache = _$BaseRoot.Base.Cache; /**
	                                    * Created by neitherzhu on 2017/1/23.
	                                    */

	var Action = _$HistoryRoot2.default.Action,
	    Win = _$HistoryRoot2.default.Win,
	    Constant = _$HistoryRoot2.default.Constant,
	    SDK = _$HistoryRoot2.default.SDK;


	Action.bindEvents.before(function () {

	    // 右键菜单
	    document.body.addEventListener('contextmenu', function (ev) {
	        ev.preventDefault();

	        return;

	        var target = ev.target;
	        var selection_text = workbench.im.get_selection_text();
	        var type = Win.conversationID.type == Constant.CON_TYPE.SINGLE ? 0 : 2;
	        var uitype = { type: type, jvale: JSON.stringify(Win.conversationID) };
	        var itemType = 0;
	        var jvale = '';
	        var parent = void 0;

	        // 1. 是图片元素
	        // 2. 有src
	        // xx 3. src中不带imemotion,即表情
	        // 4. src不是当前页面的地址
	        // 5. 不是头像
	        var hit_pic = target.tagName.toUpperCase() === 'IMG' && !!target.src && target.src !== location.href && !target.classList.contains('user-avatar');

	        // нажмите на在user上
	        // 1. нажмите на的是头像
	        // 2. нажмите на的是名字
	        if (target.classList.contains('imui-msg-avatar') || target.classList.contains('imui-msg-sender')) {
	            // 获取Новости父元素,获得appkey与nick
	            parent = Util.parents(target, 'J_msg');

	            var p = {};
	            var uid = { appkey: parent.getAttribute('data-appkey'), nick: parent.getAttribute('data-nick') };

	            // 如果是单聊
	            if (type == 0) {
	                itemType = 1;
	                p.userid = uid;
	            } else {
	                itemType = 3;
	                p.memberid = uid;
	                p.tribeid = Win.conversationID.tribeid;
	            }
	            jvale = JSON.stringify(p);
	        } else if (hit_pic) {
	            // 点在表情上
	            if (target.src.indexOf('pic:imemotion') !== -1) {
	                itemType = 9;
	                jvale = JSON.stringify({
	                    filepath: target.src,
	                    value: target.src,
	                    isurl: 0
	                });
	            }
	            // 点在Emoji上
	            else if (target.src.indexOf('pic:imemoji') !== -1) {
	                    itemType = 10;
	                    jvale = JSON.stringify({
	                        filepath: target.src,
	                        value: target.src,
	                        isurl: 0
	                    });
	                }
	                // 点在图片上
	                else {
	                        itemType = 6;
	                        jvale = JSON.stringify({
	                            filepath: target.src,
	                            fileMD5: target.getAttribute('data-md5'),
	                            filetype: target.getAttribute('data-type'),
	                            isurl: 0
	                        });
	                    }
	        }
	        // 点在语音上
	        else if (target.classList.contains('imui-msg-audio')) {
	                itemType = 7;
	                jvale = JSON.stringify({
	                    filepath: target.getAttribute('data-path'),
	                    fileMD5: target.getAttribute('data-md5'),
	                    filetype: target.getAttribute('data-type'),
	                    isurl: 0
	                });
	            }
	            // 点在视频上
	            else if (target.tagName.toUpperCase() === 'VIDEO') {
	                    itemType = 8;
	                    jvale = JSON.stringify({
	                        filepath: target.src,
	                        isurl: 1
	                    });
	                }
	                // 点在链接上
	                else if (target.tagName.toUpperCase() === 'A' && target.classList.contains('imui-msg-link')) {
	                        itemType = 12;
	                        jvale = JSON.stringify({
	                            text: target.innerText,
	                            html: target.innerHTML,
	                            link: target.href
	                        });
	                    }
	                    // 点在宝贝快照上
	                    else if (Util.parents(target, 'im-item-snap')) {
	                            itemType = 11;
	                        }
	                        // 点在Новости上
	                        else if (parent = Util.parents(target, 'msg-body-html')) {

	                                if (!selection_text) {
	                                    itemType = 15;
	                                    jvale = JSON.stringify({
	                                        text: parent.innerText,
	                                        html: parent.innerHTML
	                                    });
	                                } else {
	                                    parent = Util.parents(target, 'J_msg');

	                                    if (type == 0) {
	                                        itemType = 4;
	                                    } else {
	                                        itemType = 5;
	                                    }

	                                    jvale = JSON.stringify({
	                                        cid: Win.conversationID,
	                                        msgid: parent.id
	                                    });
	                                }
	                            }

	        var param = {
	            uitype: uitype,
	            hititem: { type: itemType, jvalue: jvale },
	            hit_x: ev.screenX,
	            hit_y: ev.screenY,
	            selecttext: selection_text,
	            time: target.getAttribute('data-time'),
	            cid: Win.conversationID
	        };

	        SDK.contextMenu(param).then(function (data) {
	            // 清屏
	            if (data && data.action == 3) {
	                Win.container.innerHTML = '';
	            }
	        });
	    });
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _$BaseRoot2 = _interopRequireDefault(_$BaseRoot);

	var _actions = __webpack_require__(6);

	var _actions2 = _interopRequireDefault(_actions);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _plugins = __webpack_require__(9);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _sdk = __webpack_require__(25);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _template = __webpack_require__(165);

	var _template2 = _interopRequireDefault(_template);

	var _window = __webpack_require__(8);

	var _window2 = _interopRequireDefault(_window);

	var _event = __webpack_require__(19);

	var _event2 = _interopRequireDefault(_event);

	var _coms = __webpack_require__(12);

	var _coms2 = _interopRequireDefault(_coms);

	__webpack_require__(173);

	__webpack_require__(174);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	//window.addEventListener('DOMContentLoaded', function() {
	//  Win.container = document.getElementById(Constant.EL_ID.MSG_CONTAINER);
	//  Action.start.action();
	//});

	exports.default = {
		Action: _actions2.default,
		Constant: _constants2.default,
		Plugin: _plugins2.default,
		SDK: _sdk2.default,
		Template: _template2.default,
		Win: _window2.default,
		Event: _event2.default,
		Coms: _coms2.default
	}; //import IMSDK from '$IMSDKRoot'; // 全局IMSDK引入， 使用fie babel时请注释

	module.exports = exports['default'];

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _start = __webpack_require__(7);

	var _start2 = _interopRequireDefault(_start);

	var _bindEvents = __webpack_require__(39);

	var _bindEvents2 = _interopRequireDefault(_bindEvents);

	var _conversationChange = __webpack_require__(40);

	var _conversationChange2 = _interopRequireDefault(_conversationChange);

	var _getLocalHistoryMsg = __webpack_require__(41);

	var _getLocalHistoryMsg2 = _interopRequireDefault(_getLocalHistoryMsg);

	var _renderMsg = __webpack_require__(42);

	var _renderMsg2 = _interopRequireDefault(_renderMsg);

	var _getCurrentLoginID = __webpack_require__(169);

	var _getCurrentLoginID2 = _interopRequireDefault(_getCurrentLoginID);

	var _searchDBMsg = __webpack_require__(170);

	var _searchDBMsg2 = _interopRequireDefault(_searchDBMsg);

	var _roamMsg = __webpack_require__(171);

	var _roamMsg2 = _interopRequireDefault(_roamMsg);

	var _dealDefaultParam = __webpack_require__(172);

	var _dealDefaultParam2 = _interopRequireDefault(_dealDefaultParam);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	  start: _start2.default,
	  bindEvents: _bindEvents2.default,
	  conversationChange: _conversationChange2.default,
	  getLocalHistoryMsg: _getLocalHistoryMsg2.default,
	  renderMsg: _renderMsg2.default,
	  getCurrentLoginID: _getCurrentLoginID2.default,
	  searchDBMsg: _searchDBMsg2.default,
	  roamMsg: _roamMsg2.default,
	  dealDefaultParam: _dealDefaultParam2.default
	};
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	var _window = __webpack_require__(8);

	var _window2 = _interopRequireDefault(_window);

	var _plugins = __webpack_require__(9);

	var _plugins2 = _interopRequireDefault(_plugins);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util,
	    Log = _$BaseRoot.Base.Log;

	var start = new _$BaseRoot.Base.ActionCreator();

	Log.setPrefix('History');
	Log.setLogLevel(0);

	start.doSync = function (context, data) {
	  _plugins2.default.init({ container: _window2.default.container });
	  _index2.default.getCurrentLoginID.action();
	};

	exports.default = start;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2017/2/17.
	 */
	exports.default = {
	  loginID: null,
	  conversationID: null,
	  container: null
	};
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createPlugin = __webpack_require__(10);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	__webpack_require__(11);

	__webpack_require__(35);

	__webpack_require__(38);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _createPlugin2.default;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var Plugin = new _$BaseRoot.Base.Plugin();

	exports.default = Plugin;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _coms = __webpack_require__(12);

	var _coms2 = _interopRequireDefault(_coms);

	var _createPlugin = __webpack_require__(10);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _actions = __webpack_require__(6);

	var _actions2 = _interopRequireDefault(_actions);

	var _sdk = __webpack_require__(25);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(8);

	var _window2 = _interopRequireDefault(_window);

	var _index = __webpack_require__(33);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(34);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/2/22.
	 */
	var DropMenu = _coms2.default.DropMenu;

	var TPL = _index2.default.trim();
	var OND_DAY_MS = 24 * 60 * 60 * 1000;

	_createPlugin2.default.addPlugin('search', {
	  init: function init() {
	    this.container = document.getElementById('J_searchWrap');

	    if (!this.container) return;

	    this.render();
	    this.initDropMenu();
	    this.events();
	  },
	  render: function render() {
	    this.container.innerHTML = TPL;

	    this.searchFrom = document.forms['search-form'];
	    this.searchValue = this.searchFrom['search-value'];
	    this.searchBtn = this.searchFrom['search-btn'];
	  },
	  initDropMenu: function initDropMenu() {

	    var searchDuration = this.container.querySelector('.search-duration');
	    /**
	     * 搜索区间选择菜单
	     */
	    if (searchDuration) {
	      this.durationMenu = new DropMenu({
	        container: searchDuration,
	        menuList: [{ value: 7, text: 'Прошлая неделя' }, { value: 30, text: 'Прошлый месяц', active: 1 }, { value: 90, text: 'Последние три месяца' }, { value: 365, text: 'Прошлый год' }, { value: -1, text: 'Все' }],
	        align: 'top',
	        clickHandler: function clickHandler(data) {
	          console.log(data);
	        }
	      });
	      this.searchDuration = searchDuration.querySelector('.default-value');
	    }

	    var searchType = this.container.querySelector('.search-type');
	    /**
	     * 搜索类型选择菜单
	     */
	    if (searchType) {
	      var _that = this;
	      this.typeMenu = new DropMenu({
	        container: this.container.querySelector('.search-type'),
	        menuList: [{ value: 1, text: 'содержание', active: 1 }, { value: 2, text: 'отправитель' }],
	        align: 'top',
	        clickHandler: function clickHandler(data) {
	          console.log(data);
	          if (data.value == 1) {
	            _that.fromIds = null;
	          }
	        }
	      });

	      this.searchType = searchType.querySelector('.default-value');
	    }
	  },
	  setSearchKey: function setSearchKey(value) {
	    this.typeMenu.selectByValue(1);
	    this.searchValue.value = value;
	    value ? this.enableSearchBtn() : this.disableSearchBtn();
	  },
	  setSearchFromId: function setSearchFromId(users) {
	    var value = '';

	    users.forEach(function (user) {
	      value += user.nick + ',';
	    });

	    value = value.substring(0, value.length - 1);

	    this.typeMenu.selectByValue(2);
	    this.searchValue.value = value;
	    value ? this.enableSearchBtn() : this.disableSearchBtn();

	    this.fromIds = users;
	  },
	  enableSearchBtn: function enableSearchBtn() {
	    this.searchBtn.disabled = false;
	  },
	  disableSearchBtn: function disableSearchBtn() {
	    this.searchBtn.disabled = true;
	  },
	  doSearch: function doSearch() {
	    var _this = this;

	    var type = this.searchType.dataset.value;
	    var value = this.searchValue.value;

	    if (!value.trim()) return;

	    if (_window2.default.prevParam) {
	      _coms.PageHistory.push(_window2.default.prevParam);
	    }

	    _sdk2.default.getServerTime().then(function (serverTimeData) {

	      var v = [];
	      var dur = parseInt(_this.searchDuration.dataset.value);
	      var etime = dur != -1 ? serverTimeData.result : '-1';
	      var btime = dur != -1 ? parseInt(etime) - dur * OND_DAY_MS + '' : '0';
	      var param = {
	        btime: btime,
	        etime: etime,
	        cid: _window2.default.conversationID,
	        needpage: 1,
	        ignoreboundary: 0
	      };

	      if (type == 1) {
	        v.push(value);
	        param.keywords = v;
	      } else {
	        if (!_this.fromIds) {
	          value.split(',').forEach(function (n) {
	            v.push({ appkey: '', nick: n });
	          });
	        } else {
	          v = _this.fromIds;
	        }

	        param.fromids = v;
	      }

	      _actions2.default.searchDBMsg.action(param);
	    });
	  },
	  events: function events() {
	    var _this2 = this;

	    this.searchFrom.addEventListener('submit', function (ev) {
	      ev.preventDefault();

	      _this2.doSearch();
	    });

	    this.searchValue.addEventListener('keyup', function (ev) {
	      if (_this2.fromIds) {
	        _this2.fromIds = null;
	      }
	      if (ev.target.value.trim()) {
	        _this2.enableSearchBtn();
	      } else {
	        _this2.disableSearchBtn();
	      }
	    });
	  }
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dropmenu = __webpack_require__(13);

	var _dropmenu2 = _interopRequireDefault(_dropmenu);

	var _pagination = __webpack_require__(17);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _pageHistory = __webpack_require__(21);

	var _pageHistory2 = _interopRequireDefault(_pageHistory);

	var _loading = __webpack_require__(22);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/2/21.
	 */
	exports.default = { DropMenu: _dropmenu2.default, Pagination: _pagination2.default, PageHistory: _pageHistory2.default, Loading: _loading2.default };
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}(); /**
	      * Created by neitherzhu on 2017/2/21.
	      */

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _$BaseRoot = __webpack_require__(5);

	var _index = __webpack_require__(15);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(16);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var TPL = _index2.default.trim();

	/**
	 * config.container
	 * config.menuList
	 * config.defaultMenu
	 * config.cls
	 * config.align[top/down]
	 * config.clickHandler
	 */

	var DropMenu = function () {
	  function DropMenu(config) {
	    _classCallCheck(this, DropMenu);

	    return this.init(config);
	  }

	  _createClass(DropMenu, [{
	    key: 'init',
	    value: function init(config) {
	      if (!config || !config.container || !config.menuList || !config.menuList.length) return this;

	      this.container = config.container;
	      this.config = config;

	      this.render(config);
	      this.events();

	      return this;
	    }
	  }, {
	    key: 'render',
	    value: function render(cfg) {

	      var config = Object.assign({}, this.config, cfg);

	      if (!config.menuList || !config.menuList.length) return;

	      var activeMenu = {};
	      var menuList = [];
	      var div = document.createElement('div');
	      var html = '';

	      config.menuList.forEach(function (menu) {
	        if (menu.exclusion) return;

	        if (menu.active) {
	          activeMenu = menu;
	        }

	        menuList.push(menu);
	      });

	      config.menus = menuList;
	      config.activeMenu = activeMenu;

	      html = (0, _$JuicerRoot2.default)(TPL, config);

	      div.innerHTML = html;

	      this.menu = div.firstChild;
	      this.selectOption = this.menu.querySelector('.default-value');
	      this.container.appendChild(this.menu);

	      div = null;
	    }
	  }, {
	    key: 'selectByValue',
	    value: function selectByValue(value) {
	      var items = [].concat(_toConsumableArray(this.menu.querySelectorAll('.J_optionItem')));
	      var target = items.filter(function (item) {
	        return item.dataset.value == value;
	      })[0];

	      if (target) {
	        this.selectByTarget(target);
	      }
	    }
	  }, {
	    key: 'selectByTarget',
	    value: function selectByTarget(target) {
	      var value = this.selectOption.dataset.value;
	      var curValue = target.dataset.value;
	      var curText = target.innerText;

	      if (value !== curValue) {
	        this.selectOption.dataset.value = curValue;
	        this.selectOption.innerText = curText;

	        this.config.clickHandler && this.config.clickHandler({
	          value: curValue,
	          text: curText,
	          target: target
	        });
	      }
	    }
	  }, {
	    key: 'events',
	    value: function events() {
	      var _this = this;

	      this.menu && this.menu.addEventListener('click', function (ev) {
	        var target = ev.target;

	        if (target.classList.contains('J_optionItem')) {
	          _this.menu.blur();
	          _this.selectByTarget(target);
	        }
	      });
	    }
	  }]);

	  return DropMenu;
	}();

	exports.default = DropMenu;
	module.exports = exports['default'];

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dropmenu{@if cls} ${cls}{@/if}{@if align == 'top'} align-top{@/if}\" tabindex=\"1\">\n  <div class=\"selected-box\">\n    <div class=\"default-value\" data-value=\"${activeMenu.value}\">${activeMenu.text}</div>\n    <i class=\"iconfont icon-xiajiantou\"></i>\n  </div>\n  <ul class=\"option-box\">\n    {@each menus as menu}\n      <li class=\"J_optionItem option-item\" data-value=\"${menu.value}\">${menu.text}</li>\n    {@/each}\n  </ul>\n</div>\n";

/***/ },
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}(); /**
	      * Created by neitherzhu on 2017/1/3.
	      */

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _index = __webpack_require__(18);

	var _index2 = _interopRequireDefault(_index);

	var _event = __webpack_require__(19);

	var _event2 = _interopRequireDefault(_event);

	__webpack_require__(20);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var TPL = _index2.default.trim();

	var _class = function () {
	  function _class(config) {
	    _classCallCheck(this, _class);

	    return this.init(config);
	  }

	  _createClass(_class, [{
	    key: 'init',
	    value: function init(config) {

	      if (!config || !config.container) return this;

	      this.container = config.container;
	      this.hasPrev = !!config.hasPrev;
	      this.hasNext = !!config.hasNext;

	      config.current = config.current || 0;
	      config.total = config.total || 1;

	      this.current = config.current;
	      this.total = config.total;
	      this.config = config;

	      this.render();
	      this.events();

	      return this;
	    }
	  }, {
	    key: 'events',
	    value: function events() {
	      var _this = this;

	      this.first && this.first.addEventListener('click', function () {
	        _this.hasPrev && _this.go('first');
	      });

	      this.prev && this.prev.addEventListener('click', function () {
	        _this.hasPrev && _this.go('prev');
	      });

	      this.next && this.next.addEventListener('click', function () {
	        _this.hasNext && _this.go('next');
	      });

	      this.last && this.last.addEventListener('click', function () {
	        _this.hasNext && _this.go('last');
	      });

	      _event2.default.on('PAGINATION_STATUS_CHANGE', function (data) {
	        data.hasPrev !== _this.hasPrev && (data.hasPrev ? (_this.enableBtn(_this.first), _this.enableBtn(_this.prev)) : (_this.disableBtn(_this.first), _this.disableBtn(_this.prev)));

	        data.hasNext !== _this.hasNext && (data.hasNext ? (_this.enableBtn(_this.last), _this.enableBtn(_this.next)) : (_this.disableBtn(_this.last), _this.disableBtn(_this.next)));

	        typeof data.current === 'number' && _this.setCurrent(data.current);
	        typeof data.total === 'number' && _this.setTotal(data.total);

	        _this.hasPrev = data.hasPrev;
	        _this.hasNext = data.hasNext;
	      });
	    }
	  }, {
	    key: 'setCurrent',
	    value: function setCurrent(current) {
	      if (!this.currentEl || this.current === current) return;
	      this.current = current;
	      this.currentEl.value = current + 1;
	    }
	  }, {
	    key: 'setTotal',
	    value: function setTotal(total) {
	      if (!this.totalEl || this.total === total) return;
	      this.total = total;
	      this.totalEl.innerText = total;

	      this.currentEl.disabled = total <= 1;
	    }
	  }, {
	    key: 'go',
	    value: function go(dir) {
	      _event2.default.emit('PAGINATION_CLICK', { dir: dir, current: this.current, total: this.total });
	    }
	  }, {
	    key: 'render',
	    value: function render(cfg) {
	      var _this2 = this;

	      var config = Object.assign({}, this.config, cfg);
	      var div = document.createElement('div');

	      div.innerHTML = (0, _$JuicerRoot2.default)(TPL, config);

	      this.pagination = div.firstChild;
	      this.container.appendChild(this.pagination);
	      this.first = this.pagination.querySelector('.J_goFirst');
	      this.prev = this.pagination.querySelector('.J_goPrev');
	      this.next = this.pagination.querySelector('.J_goNext');
	      this.last = this.pagination.querySelector('.J_goLast');
	      this.currentEl = this.pagination.querySelector('.J_pageCurrent');
	      this.totalEl = this.pagination.querySelector('.J_pageTotal');

	      if (config.turner) {
	        this.currentEl.addEventListener('focus', function (ev) {
	          ev.target.select();
	        });
	        this.currentEl.addEventListener('blur', function (ev) {
	          var current = ev.target.value;

	          !current && (ev.target.value = _this2.current + 1);
	        });
	        this.currentEl.addEventListener('keyup', function (ev) {
	          var target = ev.target;
	          var value = target.value;

	          if (!value) return;

	          if (!/^\d+$/g.test(value)) {
	            target.value = isNaN(parseInt(value)) ? '' : parseInt(value);
	          }

	          if (value < 1) {
	            target.value = 1;
	          } else if (value > _this2.total) {
	            target.value = _this2.total;
	          }

	          if (ev.keyCode == 38) {
	            if (value >= _this2.total) return;
	            target.value = ++value;
	          } else if (ev.keyCode == 40) {
	            if (value <= 1) return;
	            target.value = --value;
	          } else if (ev.keyCode === 13) {
	            _event2.default.emit('PAGINATION_TURN', { current: parseInt(target.value) - 1, total: _this2.total });
	          }
	        });
	      }
	    }
	  }, {
	    key: 'enableBtn',
	    value: function enableBtn(btn) {
	      btn.classList.remove('disabled');
	    }
	  }, {
	    key: 'disableBtn',
	    value: function disableBtn(btn) {
	      btn.classList.add('disabled');
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;
	;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div class=\"pagination-inner-wrap\">\n  <i class=\"iconfont icon-shou{@if !hasPrev} disabled{@/if} J_goFirst\" title=\"Дом\"></i>\n  <i class=\"iconfont icon-xiangqian{@if !hasPrev} disabled{@/if} J_goPrev\" title=\"Предыдущая страница\"></i>\n  {@if turner}\n    <b class=\"page-turner\">\n      <input type=\"text\" class=\"page-current J_pageCurrent\" value=\"${current + 1}\" disabled=\"{@if total <= 1}true{@else}false{@/if}\" />\n      <span class=\"page-split\">/</span>\n      <span class=\"page-total J_pageTotal\">${total}</span>\n    </b>\n  {@/if}\n  <i class=\"iconfont icon-xianghou{@if !hasNext} disabled{@/if} J_goNext\" title=\"Следующая страница\"></i>\n  <i class=\"iconfont icon-wei{@if !hasNext} disabled{@/if} J_goLast\" title=\"Последняя страница\"></i>\n</div>\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                          value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var Event = new _$BaseRoot.Base.Event(); /**
	                                          * Created by neitherzhu on 2017/1/3.
	                                          */
	exports.default = Event;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2017/4/13.
	 */
	var PAGE_HISTORY = [];
	exports.default = {
	  push: function push(page) {
	    var pages = PAGE_HISTORY.filter(function (p) {
	      return p.page == page.page;
	    });
	    if (!pages.length) {
	      PAGE_HISTORY.push(page);
	    } else {
	      var i = 0;
	      var len = PAGE_HISTORY.length;

	      for (; i < len; i++) {
	        if (PAGE_HISTORY[i].page == page.page) {
	          PAGE_HISTORY.splice(i, 1, page);
	        }
	      }
	    }
	  },
	  getBackPage: function getBackPage() {
	    return PAGE_HISTORY.pop();
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _index = __webpack_require__(23);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(24);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	    show: function show(container) {
	        container && (container.innerHTML = _index2.default);
	    },
	    hide: function hide(container) {
	        container && container.removeChild(container.querySelector('.search-loading'));
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div class=\"search-loading\">Пытаюсь загрузить...</div>";

/***/ },
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$IMSDKRoot = __webpack_require__(26);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(5);

	var _window = __webpack_require__(8);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var NativeInvoke = _$IMSDKRoot2.default.invoke;
	var Log = _$BaseRoot.Base.Log;
	// 重写invoke方法,统一打印通过接口获取到的数据

	_$IMSDKRoot2.default.invoke = function () {
	  var args = Array.prototype.slice.call(arguments);

	  return new Promise(function (resolve, reject) {
	    NativeInvoke.apply(NativeInvoke, args).then(function (data) {
	      Log.blue(args[0], args[1], data);
	      resolve(data);
	    }).catch(function (err) {
	      Log.red(args[0], args[1], err);
	      reject(err);
	    });
	  });
	};

	exports.default = {
	  /**
	   * 获取当前登录的ID
	   * @param param
	   * @returns {Promise}
	   */
	  getCurrentLoginID: function getCurrentLoginID(param) {

	    return new Promise(function (resolve, reject) {
	      _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_CURRENT_LOGIN_ID, param).then(function (data) {
	        resolve(data.result);
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  },

	  /**
	   * 获取本地历史Новости
	   * @param param
	   * @returns {*}
	   */
	  getLocalHistoryMsg: function getLocalHistoryMsg(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK_PREFIX_MAP[_window2.default.conversationID.type] + _constants2.default.SDK.GET_LOCAL_HISTORY_MSG_SUFFIX, param);
	  },

	  /**
	   * 获取远程历史Новости
	   * @param param
	   * @returns {*}
	   */
	  getRemoteHistoryMsg: function getRemoteHistoryMsg(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK_PREFIX_MAP[_window2.default.conversationID.type] + _constants2.default.SDK.GET_REMOTE_HISTORY_MSG_SUFFIX, param);
	  },

	  /**
	   * 搜索本地DBНовости
	   * @param param
	   * "cid":{xxxUserID}, // 要搜索的联系人
	   * "keywords":["xxxx",......], // 要搜索的关键字列表，可以传空
	   * "msgtypes": [1, 2, ......], // 要搜索的Новости类型
	   * "btime" : "123123", // 搜索的范围，比如一周内的Новости，则Настраивать为一周前的时间点，ms 0表示最远
	   * "etime" : "456456", // 搜索的范围，比如一周内的Новости，则Настраивать为当前时间点，ms -1表示当前时间
	   * "msgtime" : "333333", // 当前页码的Новости时间点，分页用，ms
	   * "msgid" : "123123123", // 当前页码的Новостиid
	   * "gohistory" : 1, // 指定搜索的方向，1向后，0向前
	   * "ignoreboundary" : 1, // 1忽略边界
	   * "count" : 30, // 搜索的Новости数量
	   */
	  searchDBMsg: function searchDBMsg(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK_PREFIX_MAP[_window2.default.conversationID.type] + _constants2.default.SDK.SEARCH_DB_MSG_SUFFIX, param);
	  },

	  /**
	   * 漫游N数Новости,只触发漫游,不возвращаться漫游Новости
	   * @param param
	   * @returns {*}
	   */
	  roamMsg: function roamMsg(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK_PREFIX_MAP[_window2.default.conversationID.type] + _constants2.default.SDK.ROAM_MSG_SUFFIX, param);
	  },

	  /**
	   * 清除漫游过的时间线
	   * @param param
	     */
	  clearRoamedTime: function clearRoamedTime(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK_PREFIX_MAP[_window2.default.conversationID.type] + _constants2.default.SDK.CLEAR_ROAMED_TIME_SUFFIX, param);
	  },

	  /**
	   * 获取服务器时间
	   * @returns {*}
	   */
	  getServerTime: function getServerTime() {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_SERVER_TIME);
	  },

	  /**
	   * 打开漫游Настраивать
	   */
	  openRoamSetting: function openRoamSetting() {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.ENABLE_ROAM_MSG);
	  },
	  openMessageManager: function openMessageManager(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.OPEN_MESSAGE_MANAGER, param);
	  },
	  getAttentionMembers: function getAttentionMembers(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_ATTENTION_MEMBERS, param);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _event = __webpack_require__(28);

	var _event2 = _interopRequireDefault(_event);

	var _sdk = __webpack_require__(29);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _language = __webpack_require__(30);

	var _language2 = _interopRequireDefault(_language);

	var _i18n = __webpack_require__(31);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _dropMenu = __webpack_require__(32);

	var _dropMenu2 = _interopRequireDefault(_dropMenu);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var SINGLE = 1;
	var TRIBE = 2;
	var DISCUSSION = 3;

	var TYPE = {
	  SINGLE: SINGLE,
	  TRIBE: TRIBE,
	  DISCUSSION: DISCUSSION
	};

	var SDK_PREFIX_MAP = {};
	SDK_PREFIX_MAP[SINGLE] = _sdk2.default.SINGLE_PREFIX;
	SDK_PREFIX_MAP[TRIBE] = _sdk2.default.TRIBE_PREFIX;
	SDK_PREFIX_MAP[DISCUSSION] = _sdk2.default.TRIBE_PREFIX;

	exports.default = {
	  LANGUAGE: _language2.default,
	  I18N: _i18n2.default,
	  Event: _event2.default,
	  SDK: _sdk2.default,
	  SDK_PREFIX_MAP: SDK_PREFIX_MAP,
	  CON_TYPE: TYPE,
	  EL_ID: {
	    MSG_CONTAINER: 'J_msgWrap'
	  },
	  CLS: {
	    MSG_CONTAINER: 'J_msg'
	  },
	  DEFAULT_ROAM_DURATION: 30,
	  MENU: _dropMenu2.default
	};
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  ON_CONVERSATION_CHANGE: 'im.uiutil.onConversationChange',
	  ON_AT_MSG_READ: 'im.tribemsg.onTribeAtMsgReaded',
	  ON_AUDIO_STOP: 'im.audioplayer.onAudioStop'

	};
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  SINGLE_PREFIX: 'im.singlemsg.',
	  TRIBE_PREFIX: 'im.tribemsg.',

	  GET_LOCAL_HISTORY_MSG_SUFFIX: 'GetLocalHisMsg',
	  GET_REMOTE_HISTORY_MSG_SUFFIX: 'GetRemoteHisMsg',
	  SEARCH_DB_MSG_SUFFIX: 'SearchDBMsg2',
	  ROAM_MSG_SUFFIX: 'RoamMsg',
	  CLEAR_ROAMED_TIME_SUFFIX: 'ClearRoamedTime',
	  GET_CURRENT_LOGIN_ID: 'im.login.GetCurrentLoginID',
	  GET_SERVER_TIME: 'im.bizutil.GetIMSvrTime',
	  ENABLE_ROAM_MSG: 'im.uiutil.EnableRoamMsg',
	  OPEN_MESSAGE_MANAGER: 'im.uiutil.OpenMsgsMgr',
	  GET_ATTENTION_MEMBERS: 'im.tribemgr.GetAttentionMembers'
	};
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2017/2/22.
	 */
	exports.default = 'CN';
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2017/1/25.
	 */
	exports.default = {
	  CN: {
	    ROAM_FAIL: 'Не удался роуминг, попробуйте еще раз',
	    ROAM_SUCCESS_PART: 'Некоторые сообщения были перемещены, <a href="javascript:;" class="J_continueRoam">Нажмите, чтобы продолжить роуминг</a>',
	    ROAM_SUCCESS_ALL: '${count} сообщений были перемещены для вас, нажмите<a href="javascript:;" class="J_refresh">Обновить</a>',
	    NOTHING_TO_ROAM: '{@if !duration}У вас нет сообщений для синхронизации{@else} недавний ${duration} Нет сообщений, которые нужно синхронизировать {@/if}',
	    SEARCH_FAIL: 'Ошибка поиска, попробуйте еще раз',
	    SEARCH_SUCCESS_WITH_COUNT: 'Результаты поиска для вас, нажмите на<a href="javascript:;" class="J_refresh">возвращаться</a>',
	    SEARCH_SUCCESS_WITHOUT_COUNT: 'Нет результатов поиска, нажмите на<a href="javascript:;" class="J_refresh">возвращаться</a>'
	  },
	  EN: {}
	};
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2017/3/25.
	 */
	exports.default = {
	  ROAM: [{ text: '', active: true, exclusion: true }, { text: 'Роуминг на месяц', value: '30' }, { text: 'Роуминг на три месяца', value: '90' }, { text: 'Роуминг на год', value: '365' }, { text: 'Попробовать снова', value: '-30' }]
	};
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<form name=\"search-form\">\n  <div class=\"inner-search\">\n    <div class=\"search-duration\"></div>\n    <div class=\"search-type showInMulti\"></div>\n    <input type=\"search\" name=\"search-value\" class=\"search-value\" />\n    <button type=\"submit\" name=\"search-btn\" disabled class=\"search-submit iconfont icon-huiche\"></button>\n  </div>\n</form>\n";

/***/ },
/* 34 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _event = __webpack_require__(19);

	var _event2 = _interopRequireDefault(_event);

	var _createPlugin = __webpack_require__(10);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _index = __webpack_require__(36);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(37);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var TPL = _index2.default.trim(); /**
	                                   * Created by neitherzhu on 2017/2/22.
	                                   */

	_createPlugin2.default.addPlugin('topBar', {

	  timeout: null,

	  init: function init(config) {

	    if (!config || !config.container) return;

	    this.container = config.container;
	    this.events();
	  },
	  events: function events() {},
	  render: function render(config) {
	    var _this = this;

	    var _that = this;
	    var clickEvents = config.events || {};

	    clearTimeout(this.timeout);

	    if (!this.bar) {
	      var div = document.createElement('div');

	      div.innerHTML = (0, _$JuicerRoot2.default)(TPL, { html: config.html || '' });

	      div.className = 'top-bar';
	      this.container.parentNode.insertBefore(div, this.container);
	      this.bar = div;

	      this.bar.addEventListener('click', function (ev) {
	        for (var cls in _that.clickEvents) {
	          (function (c) {
	            if (ev.target.matches(c)) {
	              _that.clickEvents[c] && _that.clickEvents[c].call(_that, ev);
	            }
	          })(cls);
	        }
	      });
	    } else {
	      this.bar.classList.remove('hide');
	      this.bar.querySelector('.bar-content').innerHTML = config.html || '';
	    }

	    !clickEvents['.J_close'] && (clickEvents['.J_close'] = function () {
	      _that.remove();
	    });

	    this.clickEvents = clickEvents;

	    config.timeout && (this.timeout = setTimeout(function () {
	      _this.remove();
	      _this.timeout = null;
	    }, config.timeout));
	  },
	  remove: function remove() {
	    this.bar && this.bar.classList.add('hide');
	  }
	});

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<i class=\"iconfont icon-info\"></i><div class=\"bar-content\">$${html}</div><i class=\"iconfont icon-close J_close\"></i>\n";

/***/ },
/* 37 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(5);

	var _createPlugin = __webpack_require__(10);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _event = __webpack_require__(19);

	var _event2 = _interopRequireDefault(_event);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/4/10.
	 */
	var Util = _$BaseRoot.Base.Util;

	_createPlugin2.default.addEventPlugin('click', 'J_goContext', function (ev) {
	  var target = ev.target;
	  var parent = Util.parents(target, _constants2.default.CLS.MSG_CONTAINER);

	  console.log(parent.id, parent.dataset.time);

	  _event2.default.emit('GO_CONTEXT', {
	    msgid: parent.id,
	    msgtime: parent.dataset.time,
	    ignoreboundary: 0
	  });
	});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _$IMSDKRoot = __webpack_require__(26);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	var _coms = __webpack_require__(12);

	var _coms2 = _interopRequireDefault(_coms);

	var _event = __webpack_require__(19);

	var _event2 = _interopRequireDefault(_event);

	var _window = __webpack_require__(8);

	var _window2 = _interopRequireDefault(_window);

	var _plugins = __webpack_require__(9);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _sdk = __webpack_require__(25);

	var _sdk2 = _interopRequireDefault(_sdk);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var Pagination = _coms2.default.Pagination,
	    DropMenu = _coms2.default.DropMenu,
	    PageHistory = _coms2.default.PageHistory; /**
	                                               * Created by neitherzhu on 2017/2/17.
	                                               */

	var Log = _$BaseRoot.Base.Log,
	    Util = _$BaseRoot.Base.Util;

	var bindEvent = new _$BaseRoot.Base.ActionCreator();

	bindEvent.doSync = function (context, data) {

	    var searchWrap = document.getElementById('J_searchWrap');

	    if (window.$ && $('#J_datePicker')) {
	        var nowTemp = new Date();
	        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
	        /**
	         * 初始化日历空间
	         * @type {*|jQuery}
	         */
	        var datePicker = $('#J_datePicker').datepicker({
	            onRender: function onRender(date) {
	                return date.valueOf() > now.valueOf() ? 'disabled' : '';
	            }
	        }).on('hide', function () {
	            this.style.visibility = 'visible';
	        }).on('show', function () {
	            this.style.visibility = 'hidden';
	        }).on('changeDate', function (ev) {
	            datePicker.datepicker('hide');

	            var param = {
	                msgtime: ev.date.valueOf() + '',
	                needpage: 1,
	                gohistory: 0,
	                doNotGoBottom: true,
	                ignoreboundary: 0,
	                cid: _window2.default.conversationID
	            };
	            _index2.default.searchDBMsg.action(Object.assign({}, _window2.default.searchOptions, param));
	        });
	    }

	    /**
	     * 翻页组件
	     */
	    new Pagination({
	        container: document.querySelector('.pagination-wrap'),
	        turner: true
	    });

	    new DropMenu({
	        container: document.querySelector('.roam-drop-menu'),
	        menuList: _constants2.default.MENU.ROAM,
	        align: 'top',
	        clickHandler: function clickHandler(data) {
	            console.log(data);

	            if (!data.value) return;

	            return new Promise(function (resolve) {
	                if (parseInt(data.value) < 0) {
	                    _sdk2.default.clearRoamedTime({ cid: _window2.default.conversationID }).then(function () {
	                        resolve();
	                    }, function () {
	                        resolve();
	                    });
	                    data.value = Math.abs(data.value);
	                } else {
	                    resolve();
	                }
	            }).then(function () {
	                _index2.default.roamMsg.action({ cid: _window2.default.conversationID, duration: data.value });
	            });
	        }
	    });

	    _event2.default.on('GO_CONTEXT', function (data) {
	        PageHistory.push(_window2.default.prevParam);
	        _event2.default.emit('REFRESH', data);
	    });

	    _event2.default.on('REFRESH', function (data) {
	        var param = Object.assign({ cid: _window2.default.conversationID, needpage: 1 }, data);
	        searchWrap.classList.add('hide');
	        _index2.default.getLocalHistoryMsg.action(param);
	        _window2.default.prevSearchOptions = Object.assign({}, _window2.default.searchOptions);
	        _window2.default.prevSearchOptions.sb = _window2.default.container.scrollTop;
	        _window2.default.searchOptions = null;
	        var searchPlugin = _plugins2.default.getPlugin('search');
	        var topBarPlugin = _plugins2.default.getPlugin('topBar');
	        searchPlugin && searchPlugin.setSearchKey('');
	        topBarPlugin && topBarPlugin.remove();
	        document.querySelector('.J_searchTrigger').classList.remove('active');
	    });

	    _event2.default.on('PAGINATION_TURN', function (data) {
	        var current = data.current;
	        var total = data.total;
	        var param = {
	            cid: _window2.default.conversationID,
	            needpage: 1,
	            page: current,
	            currentPage: current,
	            totalPage: total
	        };

	        if (_window2.default.searchOptions) {
	            _index2.default.searchDBMsg.action(Object.assign({}, _window2.default.searchOptions, param));
	        } else {
	            _index2.default.getLocalHistoryMsg.action(param);
	        }
	    });

	    /**
	     * 监听翻页事件,处理翻页
	     */
	    _event2.default.on('PAGINATION_CLICK', function (data) {

	        var goHistory = 1;
	        var msgTime = void 0;
	        var msgId = void 0;
	        var msg = void 0;
	        var doNotGoBottom = false;
	        var needPage = 0;
	        var currentPage = data.current;
	        var totalPage = data.total;

	        switch (data.dir) {
	            case 'first':
	                goHistory = 0;
	                msgTime = '0';
	                needPage = 1;
	                break;
	            case 'prev':
	                if (_window2.default.msgList && _window2.default.msgList.length) {
	                    msg = _window2.default.msgList[0];
	                    msgTime = msg.msgtime;
	                    msgId = msg.msgid;
	                    currentPage--;
	                }
	                break;
	            case 'next':
	                goHistory = 0;
	                doNotGoBottom = true;
	                if (_window2.default.msgList && _window2.default.msgList.length) {
	                    msg = _window2.default.msgList[_window2.default.msgList.length - 1];
	                    msgTime = msg.msgtime;
	                    msgId = msg.msgid;
	                    currentPage++;
	                }
	                break;
	            case 'last':
	                msgTime = '-1';
	                needPage = 1;
	                break;
	        }

	        var param = {
	            cid: _window2.default.conversationID,
	            msgid: msgId,
	            msgtime: msgTime,
	            gohistory: goHistory,
	            doNotGoBottom: doNotGoBottom,
	            currentPage: currentPage,
	            totalPage: totalPage,
	            needpage: needPage
	        };

	        if (_window2.default.searchOptions) {
	            _index2.default.searchDBMsg.action(Object.assign({}, _window2.default.searchOptions, param));
	        } else {
	            _index2.default.getLocalHistoryMsg.action(param);
	        }
	    });

	    /**
	     * 聊天对象切换
	     */
	    _$IMSDKRoot2.default.on(_constants2.default.Event.ON_CONVERSATION_CHANGE, function (data) {
	        _index2.default.conversationChange.action(data.cid);

	        if (_window2.default.conversationID) {
	            _index2.default.roamMsg.action({ cid: _window2.default.conversationID, duration: _constants2.default.DEFAULT_ROAM_DURATION, auto: true });
	            _event2.default.emit('REFRESH');
	        } else {
	            _index2.default.renderMsg.action();
	        }
	    });

	    document.getElementById('J_operationWrap').addEventListener('click', function (ev) {
	        var target = ev.target;

	        if (target.classList.contains('J_searchTrigger')) {
	            if (searchWrap.classList.contains('hide')) {
	                searchWrap.classList.remove('hide');
	                target.classList.add('active');
	            } else {
	                _event2.default.emit('REFRESH');
	            }
	        } else if (target.classList.contains('J_goMessageManager')) {
	            var isTribe = _window2.default.conversationID.type === _constants2.default.CON_TYPE.SINGLE ? 0 : 1;
	            var param = {
	                isTribe: isTribe
	            };
	            param[isTribe ? 'tid' : 'uid'] = _window2.default.conversationID;
	            _sdk2.default.openMessageManager(param);
	        } else if (target.classList.contains('J_getAttentionUser')) {
	            _sdk2.default.getAttentionMembers(_window2.default.conversationID).then(function (data) {
	                var searchPlugin = _plugins2.default.getPlugin('search');

	                if (!searchPlugin) return;

	                searchWrap.classList.remove('hide');
	                document.querySelector('.J_searchTrigger').classList.add('active');
	                searchPlugin.setSearchFromId(data.result);
	                searchPlugin.doSearch();
	            });
	        }
	    });
	};

	bindEvent.after(function () {
	    _index2.default.dealDefaultParam.action();
	});

	exports.default = bindEvent;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	var _window = __webpack_require__(8);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/2/17.
	 */
	var Util = _$BaseRoot.Base.Util,
	    Log = _$BaseRoot.Base.Log;

	var conversationChange = new _$BaseRoot.Base.ActionCreator();

	conversationChange.doSync = function (context, data) {
	  data = Util.setCidType(data);
	  _window2.default.conversationID = data;
	  Log.orange('conversationChange', data);

	  if (data.type === _constants2.default.CON_TYPE.SINGLE) {
	    document.body.classList.add('single-chat');
	  } else {
	    document.body.classList.add('multi-chat');
	  }
	};

	exports.default = conversationChange;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	var _window = __webpack_require__(8);

	var _window2 = _interopRequireDefault(_window);

	var _sdk = __webpack_require__(25);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _event = __webpack_require__(19);

	var _event2 = _interopRequireDefault(_event);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _coms = __webpack_require__(12);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var Log = _$BaseRoot.Base.Log,
	    Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2017/2/17.
	                                  */

	var getLocalHistoryMsg = new _$BaseRoot.Base.ActionCreator();

	getLocalHistoryMsg.actionType = 'async';
	getLocalHistoryMsg.count = 20;

	getLocalHistoryMsg.before(function (context, data) {

	    workbench.im.find_string('');

	    if (!data) return false;

	    if (data.usePrev && this.prevParam) {
	        context.param = this.prevParam;
	        return;
	    }

	    _coms.Loading.show(_window2.default.container);
	    if (data) {
	        data.msgid || (data.msgid = '-1');
	        data.btime || (data.btime = '-1');
	        data.etime || (data.etime = '-1');
	        data.msgtime || (data.msgtime = '-1');
	        data.count || (data.count = this.count);
	        typeof data.gohistory !== 'undefined' || (data.gohistory = 1);
	        typeof data.ignoreboundary !== 'undefined' || (data.ignoreboundary = 1);

	        context.param = data;
	    }
	});

	getLocalHistoryMsg.doAsync = function (context, param) {
	    var _this = this;

	    param = context.param;

	    var uid = Util.getUid(param.cid);

	    return new Promise(function (resolve, reject) {
	        _sdk2.default.searchDBMsg(param).then(function (data) {
	            _window2.default.prevParam = {
	                page: 'index',
	                param: param,
	                action: 'getLocalHistoryMsg'
	            };

	            if (!data || !data.result) {
	                return reject();
	            }

	            if (Util.getUid(_window2.default.conversationID) !== uid) {
	                return reject('Не тот партнер по чату');
	            }

	            data = data.result;
	            _this.prevParam = param;

	            resolve(data);
	        });
	    });
	};
	getLocalHistoryMsg.after(function (context, data) {

	    var hasPrev = true;
	    var hasNext = true;
	    var currentPage = data.currentpage >= 0 ? data.currentpage : context.param.currentPage;
	    var totalPage = data.totalpage > 0 ? data.totalpage : context.param.totalPage;

	    if (currentPage === 0) {
	        hasPrev = false;
	    }

	    if (currentPage + 1 == totalPage) {
	        hasNext = false;
	    }

	    _event2.default.emit('PAGINATION_STATUS_CHANGE', {
	        hasPrev: hasPrev,
	        hasNext: hasNext,
	        current: currentPage,
	        total: totalPage
	    });
	});

	getLocalHistoryMsg.after(function (context, data) {
	    _index2.default.renderMsg.action(context.param.cid, data.msgs, { doNotGoBottom: context.param.doNotGoBottom, scrollTop: context.param.scrollTop });
	});

	getLocalHistoryMsg.error = function (error) {
	    _event2.default.emit('PAGINATION_STATUS_CHANGE', {
	        hasPrev: false,
	        hasNext: false,
	        current: 0,
	        total: 1
	    });
	    _index2.default.renderMsg.action();

	    error && Log.red(error);
	};

	exports.default = getLocalHistoryMsg;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _$ConvertRoot = __webpack_require__(43);

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	var _window = __webpack_require__(8);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _template = __webpack_require__(165);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	    if (Array.isArray(arr)) {
	        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	            arr2[i] = arr[i];
	        }return arr2;
	    } else {
	        return Array.from(arr);
	    }
	} /**
	   * Created by neitherzhu on 2017/2/17.
	   */

	var Util = _$BaseRoot.Base.Util,
	    Log = _$BaseRoot.Base.Log;

	var renderMsg = new _$BaseRoot.Base.ActionCreator();

	/**
	 *
	 * @param context
	 * @param cid Пользователь для рендеринга cid
	 * @param msgs Новости
	 * @param obj Некоторая дополнительная информация
	 */
	renderMsg.before(function (context, cid, msgs, obj) {
	    if (!this.container) {
	        this.container = document.getElementById(_constants2.default.EL_ID.MSG_CONTAINER);
	    }
	});

	renderMsg.doSync = function (context, cid, msgs, obj) {
	    var html = '';
	    var callbacks = [];
	    var label = Util.getLabel(cid);
	    var convert = void 0;
	    var date = void 0;
	    var cacheDate = '';

	    _window2.default.msgList = [];

	    if (msgs && msgs.length) {
	        msgs.forEach(function (msg) {

	            date = new Date(parseInt(msg.msgtime, 10)).__getOnlyDate();
	            if (date !== cacheDate) {
	                cacheDate && (html += '</div>');
	                cacheDate = date;
	                html += (0, _$JuicerRoot2.default)(_template2.default.dateSplit, { date: date });

	                html += '<div class="date-split-container">';
	            }

	            convert = _$ConvertRoot.Convert.convert(label, msg, 'msgtype');

	            if (!convert || !convert.html) return;

	            _window2.default.msgList.push(msg);
	            html += convert.html;
	            convert.callback && callbacks.push(convert.callback);
	        });
	    }

	    if (!html) {
	        html = _template2.default.empty;
	    }

	    this.container.innerHTML = html;

	    callbacks.forEach(function (callback) {
	        callback();
	    });
	};

	renderMsg.after(function (context, cid, msgs, obj) {

	    var to = void 0;
	    if (obj) {
	        if (obj.doNotGoBottom) {
	            to = 0;
	        } else if (obj.scrollTop) {
	            to = obj.scrollTop;
	        }
	    }
	    Util.scrollToBottom(this.container, [].concat(_toConsumableArray(this.container.querySelectorAll('.' + _constants2.default.CLS.MSG_CONTAINER))), to);
	});

	exports.default = renderMsg;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	var _convert = __webpack_require__(67);

	var _convert2 = _interopRequireDefault(_convert);

	var _callbacks = __webpack_require__(68);

	var _callbacks2 = _interopRequireDefault(_callbacks);

	var _normalMsgFormater = __webpack_require__(69);

	var _normalMsgFormater2 = _interopRequireDefault(_normalMsgFormater);

	var _systemMsgFormater = __webpack_require__(94);

	var _systemMsgFormater2 = _interopRequireDefault(_systemMsgFormater);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(111);

	var _actions2 = _interopRequireDefault(_actions);

	var _plugins = __webpack_require__(131);

	var _plugins2 = _interopRequireDefault(_plugins);

	__webpack_require__(153);

	__webpack_require__(164);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	  Constant: _constants2.default,
	  SDK: _sdk2.default,
	  Template: _template2.default,
	  Convert: _convert2.default,
	  Callbacks: _callbacks2.default,
	  Plugin: _plugins2.default,
	  Action: _actions2.default,
	  MsgFormats: {
	    SingleNormalMsgFormat: _normalMsgFormater2.default,
	    TribeNormalMsgFormat: _normalMsgFormater2.default,
	    SystemFormat: _systemMsgFormater2.default
	  },
	  shareWin: function shareWin(w) {
	    _window2.default.sharedWin = w;
	    _plugins2.default.init({ container: _window2.default.sharedWin.container });
	    _actions2.default.start.action();
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _i18n = __webpack_require__(45);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _sdk = __webpack_require__(46);

	var _sdk2 = _interopRequireDefault(_sdk);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var SINGLE = 1;
	var TRIBE = 2;
	var DISCUSSION = 3;
	var TYPE = {
	  SINGLE: SINGLE,
	  TRIBE: TRIBE,
	  DISCUSSION: DISCUSSION
	};

	exports.default = {
	  TEXT_MODE: 'DEFAULT',
	  LANGUAGE: 'CN',
	  TYPE: TYPE,
	  SDK_PREFIX_MAP: {
	    1: _sdk2.default.SINGLE_SDK_PREFIX,
	    2: _sdk2.default.TRIBE_SDK_PREFIX,
	    3: _sdk2.default.TRIBE_SDK_PREFIX
	  },
	  CLS: {
	    // 宝贝详情卡片样式
	    SNAPSHOT: 'item-snapshot-wrap',
	    // 图片加载中样式
	    IMAGE_LOADING: 'imui-msg-img-loading',
	    // Новости状态容器样式
	    MSG_STATUS_CONTAINER: 'imui-msg-status',
	    // 语音加载中样式
	    AUDIO_PLAYING: 'imui-msg-audio-playing',
	    // 语音Новости容器
	    AUDIO_WITH_STYLE: 'imui-msg-audio',
	    // 群@Новости样式
	    AT_MSG_WITH_STYLE: 'imui-msg-atmsg',
	    // 群@Новости已读/全部已读样式
	    COMPLETED_AT_MSG: 'at-msg-done',
	    // Новости容器
	    MSG_CONTAINER: 'J_msg',
	    // 语音
	    AUDIO: 'J_audio',
	    // 图片
	    IMAGE: 'J_imImage',
	    // 群@未已读/未完全已读时,нажмите на打开群@详情
	    OPEN_READ_STATE_COUNT_DETAIL: 'J_openReadStateCountDetail',
	    // 重新加载图片按钮
	    RELOAD_IMAGE: 'J_reloadImage',
	    // 重新加载语音按钮
	    RELOAD_AUDIO: 'J_reloadAudio',
	    // 打开文件Настраивать
	    OPEN_FILE_SETTING: 'J_openFileSetting',
	    // 打开震屏Настраивать
	    OPEN_SHAKE_SETTING: 'J_openShakeSetting',
	    // 预览文件
	    PREVIEW_FILE: 'J_previewFile',
	    // 打开文件夹
	    OPEN_FILE_FOLDER: 'J_openFolder',

	    CANCEL_UPLOAD_FILE: 'J_cancelUpload',
	    CANCEL_DOWNLOAD_FILE: 'J_cancelDownload',
	    DOWNLOAD_FILE: 'J_downloadFile',

	    OPEN_AUDIO_TEXT_SETTING: 'J_goAudioTextSetting',

	    FACE_TIME_TRIGGER: 'J_faceTimeTrigger'
	  },
	  PIC_PROTOCOL: 'pic:',
	  EMOTION_PROTOCOL: 'pic:imemotion',
	  EMOJI_PROTOCOL: 'pic:imemoji',

	  Event: {
	    CONVERSATION_PREFIX: 'im.uiutil.',
	    WINDOW_COVER_CHANGE_SUFFIX: 'onIMWindowCoverChange',
	    // 群@Новости变更,自定义事件
	    ON_AT_MSG_STATUS_CHANGE: 'atMsgStatusChange',
	    // 群@Новости已读
	    ON_AT_MSG_READ: 'im.tribemsg.onTribeAtMsgReaded',
	    // 语音播放停止
	    ON_AUDIO_STOP: 'im.audioplayer.onAudioStop',
	    // 文件传输状态变更
	    UPDATE_FILE_TRANSFER_INFO: 'im.filetransfer.onUpdateTransferInfo',
	    // 文件信息变更
	    UPDATE_FILE_INFO: 'im.filetransfer.onUpdateCloudFileMeta',
	    // 发送的单聊Новости状态变更
	    CHAT_SEND_MSG_STATUS_CHANGE: 'im.singlemsg.onSendMsgStatus',
	    // 发送的群聊/讨论组Новости状态变更
	    TRIBE_SEND_MSG_STATUS_CHANGE: 'im.tribemsg.onSendMsgStatus',
	    // 发送Новости状态变更
	    SEND_MSG_STATUS_CHANGE: 'sendMsgStatusChange',
	    // 单聊Новости状态变更
	    MSG_STATUS_CHANGE: 'msgStatusChange',
	    // 单聊Новости已读事件
	    CHAT_MSG_READ: 'im.singlemsg.onFlagMyMsgReaded',

	    SHOW_AUDIO_TEXT_SETTING_CHANGE: 'im.bizutil.onShowAudio2textOptionChange'
	  },
	  FILE_MAX_LEN: 22,
	  SDK: _sdk2.default,
	  I18N: _i18n2.default,
	  TEMP20014_SMALL_MAX_WIDTH: 264,
	  TEMP20014_MIDDLE_MAX_WIDTH: 324,
	  TEMP20014_LARGE_MAX_WIDTH: 396
	};
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 多语言
	 */
	exports.default = {
	  CN: {
	    YOU: '你',
	    INVITE_IN_TRIBE: '${inviter} добавил "${users}" в группу',
	    INVITE_IN_DISCUSSION: '${inviter} добавил "${users}" в группу обсужения',
	    EXIT_TRIBE: 'Участник группы "${user}" покинул групповой чат',
	    SELF_EXIT_TRIBE: 'Вы вышли из группового чата "${display}"',
	    EXIT_DISCUSSION: '"${user}" Покинул группу обсуждения',
	    SELF_EXIT_DISCUSSION: 'Вы покинули группу обсуждения "${display}"',
	    KICK_OUT_TRIBE: '${manager} "${user}" удален из группового чата',
	    SELF_KICK_OUT_TRIBE: 'Вы удалили "${user}" из группового чата',
	    SELF_BE_KICKED_OUT_TRIBE: 'Вас удалили из группового чата ${display}',
	    JOIN_TRIBE: 'Приветствуем нового участника "${user}", который присоединился к групповому чату',
	    SELF_JOIN_TRIBE: 'Добро пожаловать в групповой чат',
	    JOIN_DISCUSSION: 'Приветствуем нового участника "${user}", который присоединился к группе обсуждения',
	    SELF_JOIN_DISCUSSION: 'Добро пожаловать в группу обсуждения',
	    DISCUSSION_DISPLAY_NAME_CHANGE: '${user} изменил группу обсуждения на "${newDisplay}"',
	    SELF_DISCUSSION_DISPLAY_NAME_CHANGE: 'Вы изменяете название группы обсуждения на "${newDisplay}"',
	    TRIBE_DISPLAY_NAME_CHANGE: '${user} изменил название группового чата на "${newDisplay}"',
	    SELF_TRIBE_DISPLAY_NAME_CHANGE: 'Вы изменяете название группового чата на "${newDisplay}"',
	    REMOVE_MANAGER: '"${user}" менеджер был отменен владельцем "${manager}"',
	    SELF_REMOVE_MANAGER: '"${user}"Отменено вами как администратором',
	    SELF_BE_REMOVED_MANAGER: 'владелец "${manager}" отменил вас как менеджера',
	    SET_MANAGER: '"${user}" назначен менеджером владельцем "${manager}"',
	    SELF_SET_MANAGER: '"${user}" Сделано вами как администратором',
	    SELF_BE_SET_MANAGER: 'Вас назначил менеджером владелец"${manager}"',
	    SENT_SHAKE: 'Вы отправили вибрирующий экран',
	    RECEIVED_SHAKE: '${user}Отправил вам вибрирующий экран',
	    SHAKE_FREQUENCY_LIMIT: 'Частота использования вибрирующего экрана слишком высока, повторите попытку позже.',
	    SHAKE_WHEN_DISABLED: 'Вы отключили функцию экрана вибрации. кликните сюда<a href="javascript:;" class="J_openShakeSetting">Настраивать</a>',
	    SHAKE_WHEN_OFFLINE: 'Собеседник не в сети, вы не можете отправить вибросигнал в ТА.',
	    SHAKE_WHEN_INVISIBLE: 'Функцию вибрационного экрана нельзя использовать в скрытом состоянии.',
	    FILE_DISABLED: '${filename} Был автоматически отклонен, вы можете<a href="javascript:;" class="J_openFileSetting">Нажмите здесь, чтобы изменить</a>Настраивать',

	    START_CHAT: 'Вы инициировали запрос голосового чата с "${user}"',
	    RECEIVED_CHAT: 'Вы получили запрос голосового чата от пользователя "${user}"',
	    STOP_CHAT: 'Вы завершили голосовой чат с пользователем "${user}"',
	    STOPPED_CHAT: '"${user}" Завершает голосовой чат с вами',
	    REFUSE_CHAT: 'Вы отклонили запрос голосового чата"${user}"',
	    REFUSED_CHAT: '"${user}"отклонил ваш запрос в голосовом чате',
	    STOP_CHAT_OR_VIDEO_FIRST_ERROR: 'Пожалуйста, остановите свой текущий голос или видео и попробуйте еще раз',
	    CHATTING_OR_VIDEO_ERROR: '${user} в процессе голосового или видеосвязи. Повторите попытку позже.',
	    STOP_CHAT_FIRST_ERROR: 'Пожалуйста, остановите текущий голосовой чат и попробуйте еще раз',
	    CHATTING_ERROR: '${user}сейчас в голосовом чате. Повторите попытку позже.',
	    CHAT_CONNECT_ERROR: 'Время ожидания соединения истекло или версия другой стороны не поддерживает его, и функция голоса или видео не может быть использована',
	    CHAT_NET_ERROR: 'Голосовая связь была прервана из-за сбоя сети',
	    CHAT_NO_ANSWER_ERROR: 'Абонент не отвечает, время соединения истекло, повторите попытку позже',

	    START_VIDEO: 'Вы отправили запрос в видеочат с "${user}"',
	    RECEIVED_VIDEO: 'Вы получили запрос на видеочат от пользователя "${user}"',
	    STOP_VIDEO: 'Вы завершили видеочат с "${user}"',
	    STOPPED_VIDEO: '"${user}" заканчивает видеочат с вами',
	    REFUSE_VIDEO: 'Вы отклонили запрос видеочата от пользователя "${user}"',
	    REFUSED_VIDEO: '"${user}" отклонил ваш запрос в видеочат',
	    VIDEOING_ERROR: '${user} сейчас в видеочате. Повторите попытку позже.',

	    ASK_FOR_REMOTE_ASSISTANCE: '"${user}" запрашивает вашу удаленную помощь',
	    ASK_FOR_CONTROL: '"${user}" запросы на управление вашим компьютером',
	    ASK_TO_REMOTE_ASSISTANCE: 'Вы запрашиваете удаленную помощь от "${user}"',
	    ASK_TO_CONTROL: 'Вы запрашиваете управление компьютером "${user}"',
	    AGREED_TO_REMOTE_ASSISTANCE: '"${user}" согласился на вашу удаленную помощь',
	    REFUSED_TO_REMOTE_ASSISTANCE: '"${user}" отклонил вашу удаленную помощь',
	    STOPPED_TO_REMOTE_ASSISTANCE: '"${user}" остановил вашу удаленную помощь',
	    AGREED_TO_CONTROL: '${user}" согласился управлять вашим компьютером',
	    AGREE_TO_REMOTE_ASSISTANCE: 'Вы согласились на удаленную помощь от "${user}"',
	    REFUSE_TO_REMOTE_ASSISTANCE: 'Вы отказались от удаленной помощи "${user}"',
	    STOP_TO_REMOTE_ASSISTANCE: 'Вы прекратили удаленную помощь "${user}"',
	    AGREE_TO_CONTROL: 'Вы согласились управлять компьютером "${user}"',
	    NOT_SUPPORT_FOR_REMOTE_ASSISTANCE: 'Версия ${user} не поддерживается, и удаленная помощь не может быть установлена.',
	    NOT_SUPPORT_TO_REMOTE_ASSISTANCE: 'Ваша версия не поддерживает, невозможно установить удаленную помощь',
	    STOP_REMOTE_ASSISTANCE_FIRST: 'Пожалуйста, сначала остановите текущую удаленную помощь и попробуйте еще раз',
	    REMOTE_ASSISTING: '${user} уже выполняет удаленную помощь. Повторите попытку позже.',
	    REMOTE_ASSISTANCE_NET_ERROR: 'Удаленная помощь была прервана из-за сетевых причин, повторите попытку позже',

	    NOT_SUPPORT_MSG: 'Типы сообщений в настоящее время не поддерживаются',

	    AT_MSG_READ: 'Прочитал',
	    ALL_AT_MSG_READ: 'Все прочитано',
	    AT_MSG_UNREAD: 'непрочитанное',
	    ALL_AT_MSG_UNREAD: 'Все непрочитанное',
	    AT_MSG_READ_UNREAD_COUNT: '${readCount} человек прочитали, ${unreadCount} не прочитали',

	    FILE_OPENED: 'Проверено',
	    FILE_UNOPENED: 'Не проверено',
	    PREVIEW_FILE: 'Предварительный просмотр',
	    CANCEL_DOWNLOAD: 'Отменить скачивание',
	    CANCEL_UPLOAD: 'отменить загрузку',
	    DOWNLOAD_FILE: 'Скачать файл',
	    RE_DOWNLOAD_FILE: 'скачать снова',
	    OPEN_FOLDER: 'Открыть папку',

	    RECALL_MSG: 'Вы отозвали сообщение',

	    MSG_RECALLED: '${user} отозвал сообщение',

	    CHECK_MAP: 'проверьте карту',

	    DO_WX_ACTION_ERROR: 'Работа с ошибками action Wang',

	    DEGRADE: 'Версия, которую вы в настоящее время используете, не может отображать это сообщение.',
	    SHAKE_WHEN_DO_NOT_DISTURB: 'Другой абонент находится в состоянии «не беспокоить» и не может принять экран вибрации.',
	    AUDIO_TO_TEXT_OLD_TIP: 'Некоторые голоса, отправленные более старыми версиями, не поддерживают отображение текста',
	    AUDIO_TO_TEXT_TIP: 'Вы можете быть в<a href="javascript:;" class="go-audio-text-setting J_goAudioTextSetting">Настраивать</a>中关闭语音显示文字功能',

	    FACE_TIME_NOT_ACCEPT: 'Видеозвонок пропущен',
	    FACE_TIME_NOT_ACCEPTED: 'Другой абонент не ответил на звонок',
	    FACE_TIME_FINISH: 'Длительность звонка',
	    FACE_TIME_TRIGGER: 'Начать видеозвонок'
	  },

	  EN: {}
	};
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2017/1/2.
	 */
	exports.default = {
	  // 单聊接口前缀
	  SINGLE_SDK_PREFIX: 'im.singlemsg.',
	  // 群聊/讨论组接口前缀
	  TRIBE_SDK_PREFIX: 'im.tribemsg.',
	  // 获取模板Новости中的链接与表情, 与接口前缀配合使用
	  CONVERT_TEXT_TO_EMOTION_SUFFIX: 'ConvertMsgText2Emotion',
	  // 获取多态卡片Новости, 与接口前缀配合使用
	  GET_DYNAMIC_MSG_SUFFIX: 'GetDynamicMsg',
	  // Скачать файл
	  DOWNLOAD_CLOUD_FILE: 'im.filetransfer.DownloadCloudFile',
	  // 预览文件
	  PREVIEW_CLOUD_FILE: 'im.filetransfer.PreviewCloudFile',
	  // 根据宝贝链接获取宝贝详情卡片
	  GET_URL_SNAPSHOT: 'im.bizutil.GetUrlSnapshot',
	  // 根据图片地址获取本地图片路径
	  GET_IMAGE_PATH: 'im.bizutil.GetPicturePath',
	  // 根据语音地址获取本地语音路径
	  GET_AUDIO_PATH: 'im.bizutil.GetAudioPath',
	  // Настраивать群@Новости已读
	  SET_AT_MSG_READ_STATE: 'im.tribemsg.SetTribeAtMsgsReaded',
	  // 获取群@Новости已读未读状态
	  GET_AT_MSG_READ_STATE: 'im.tribemsg.GetTribeAtMsgUnreadCount',
	  // 播放语音
	  START_AUDIO_PLAYER: 'im.bizutil.PlayAudio',
	  // 停止播放语音
	  STOP_AUDIO_PLAYER: 'im.bizutil.StopAudio',
	  // 查看图片
	  PREVIEW_IMAGE: 'im.uiutil.ViewPicture',
	  // 打开群@详情
	  OPEN_READ_STATE_COUNT_DETAIL: 'im.uiutil.ShowTribeAtMsgUnreadUsers',
	  // 传入url打开url
	  OPEN_URL: 'im.bizutil.DoUrlAction',
	  // 传入旺x协议地址, 主要用在多态卡片Новости
	  DO_WX_ACTION: 'im.bizutil.DoWangXAction',
	  // 打开文件Настраивать
	  OPEN_FILE_SETTING: 'im.uiutil.OpenFileSetting',
	  // 打开震屏Настраивать
	  OPEN_SHAKE_SETTING: 'im.uiutil.OpenShakeSetting',

	  // 获取文件传输状态
	  GET_FILE_TRANSFER_INFO: 'im.filetransfer.GetFileTransferInfo',
	  CANCEL_DOWNLOAD_CLOUD_FILE: 'im.filetransfer.CancelDownloadCloudFile',
	  CANCEL_UPLOAD_CLOUD_FILE: 'im.filetransfer.CancelUploadFile',
	  OPEN_FOLDER: 'im.filetransfer.OpenFolder',
	  DELETE_CLOUD_FILE: 'im.filetransfer.DeleteCloudFile',

	  // Настраивать单聊Новости已读
	  SET_SINGLE_MSG_READ_STATUS: 'im.singlemsg.SetFlagsPeerMsgReaded',
	  // 获取单聊Новости已读未读状态
	  GET_SINGLE_MSG_READ_STATUS: 'im.singlemsg.GetFlagsMyMsgReaded',
	  // 获取聊天窗口是否被遮挡
	  IS_CHAT_WINDOW_COVERED: 'im.uiutil.IsChatWindowCovered',
	  // 获取是否需要显示语音转文字
	  GET_AUDIO_SHOW_TEXT_SETTING: 'im.bizutil.GetShowAudio2textOption',
	  // 显示语音转文字系统提示，只需要调用，客户端来判断是否产生这条Новости
	  ADD_AUDIO_TEXT_SETTING_TIP_SUFFIX: 'AddAudio2textSettingRemind',

	  OPEN_SETTING: 'im.uiutil.OpenSystemSetting',

	  START_FACE_TIME: 'im.bizutil.StartVideoChat'
	};
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$IMSDKRoot = __webpack_require__(26);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(5);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	// const NativeInvoke = IMSDK.invoke;
	// const { Log } = Base;
	// // 重写invoke方法,统一打印通过接口获取到的数据
	// IMSDK.invoke = function() {
	//   const args = Array.prototype.slice.call(arguments);
	//
	//   Log.blue('调用：', args[ 0 ], '参数：', args[ 1 ]);
	//   return new Promise(( resolve, reject ) => {
	//     NativeInvoke.apply(NativeInvoke, args).then(data => {
	//       Log.green(args[ 0 ], 'возвращаться成功：', data);
	//       resolve(data);
	//     }).catch(err => {
	//       Log.red(args[ 0 ], 'возвращаться失败：', err);
	//       reject(err);
	//     });
	//   });
	// };

	exports.default = {
	  /**
	   * 获取多态卡片的详细内容
	   * @param param
	   * @returns {Promise}
	   */
	  getDynamicMsg: function getDynamicMsg(param) {
	    return new Promise(function (resolve, reject) {
	      _$IMSDKRoot2.default.invoke(_constants2.default.SDK_PREFIX_MAP[_window2.default.sharedWin.conversationID.type] + _constants2.default.SDK.GET_DYNAMIC_MSG_SUFFIX, param).then(function (data) {
	        data && data.content ? resolve(data.content) : reject(data && data.errMsg);
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  },

	  /**
	   * 传入文本获取是否有表情与链接
	   * @param param
	   * @returns {Promise}
	   */
	  convertMsgToEmotion: function convertMsgToEmotion(param) {
	    return new Promise(function (resolve, reject) {
	      _$IMSDKRoot2.default.invoke(_constants2.default.SDK_PREFIX_MAP[_window2.default.sharedWin.conversationID.type] + _constants2.default.SDK.CONVERT_TEXT_TO_EMOTION_SUFFIX, param).then(function (data) {
	        if (data && data.result && data.result.length) {
	          resolve(data.result);
	        } else {
	          reject(data);
	        }
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  },

	  /**
	   * 获取宝贝详情卡片
	   * @param param
	   * @returns {Promise}
	   */
	  getUrlSnapshot: function getUrlSnapshot(param) {
	    return new Promise(function (resolve, reject) {
	      _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_URL_SNAPSHOT, param).then(function (data) {
	        if (data.code == 0) {
	          resolve(data.result);
	        } else {
	          reject(data);
	        }
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  },

	  /**
	   * 获取图片本地路径
	   * @param param
	   * @returns {Promise}
	   */
	  getImagePath: function getImagePath(param) {
	    return new Promise(function (resolve, reject) {
	      _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_IMAGE_PATH, param).then(function (data) {
	        if (data.code == 0) {
	          resolve(data.result);
	        } else {
	          reject(data);
	        }
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  },

	  /**
	   * 获取语音本地路径
	   * @param param
	   * @returns {Promise}
	   */
	  getAudioPath: function getAudioPath(param) {
	    return new Promise(function (resolve, reject) {
	      _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_AUDIO_PATH, param).then(function (data) {
	        if (data.code == 0) {
	          resolve(data.result);
	        } else {
	          reject(data);
	        }
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  },

	  /**
	   * Настраивать群@Новости已读
	   * @param param
	   */
	  setAtMsgReadState: function setAtMsgReadState(param) {
	    return new Promise(function (resolve, reject) {
	      _$IMSDKRoot2.default.invoke(_constants2.default.SDK.SET_AT_MSG_READ_STATE, param).then(function (data) {
	        if (data && data.code == 0) {
	          resolve(data);
	        } else {
	          reject(data);
	        }
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  },

	  /**
	   * 获取群@Новости已读未读人数
	   * @param param
	   * @returns {Promise}
	   */
	  getAtMsgReadState: function getAtMsgReadState(param) {
	    return new Promise(function (resolve, reject) {
	      _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_AT_MSG_READ_STATE, param).then(function (data) {
	        resolve(data.result);
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  },

	  /**
	   * 播放语音
	   * @param param
	   */
	  playAudio: function playAudio(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.START_AUDIO_PLAYER, param);
	  },

	  /**
	   * 停止播放语音
	   */
	  stopAudio: function stopAudio() {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.STOP_AUDIO_PLAYER);
	  },

	  /**
	   * 图片预览
	   * @param param
	   */
	  previewImage: function previewImage(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.PREVIEW_IMAGE, param);
	  },

	  /**
	   * 打开已读未读人详情
	   * @param param
	   */
	  openReadStateCountDetail: function openReadStateCountDetail(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.OPEN_READ_STATE_COUNT_DETAIL, param);
	  },

	  /**
	   * 调用客户端接口Открыть ссылку
	   * @param param
	   */
	  openUrl: function openUrl(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.OPEN_URL, param);
	  },

	  /**
	   * 调用客户端接口处理多态卡片上的action
	   * @param param
	   * @returns {Promise}
	   */
	  doWXAction: function doWXAction(param) {
	    return new Promise(function (resolve, reject) {
	      _$IMSDKRoot2.default.invoke(_constants2.default.SDK.DO_WX_ACTION, param).then(function (data) {
	        if (data && data.code === 0) {
	          resolve(data);
	        } else {
	          reject(data);
	        }
	      }).catch(function (e) {
	        reject(e);
	      });
	    });
	  },

	  /**
	   * 打开文件Настраивать
	   */
	  openFileSetting: function openFileSetting() {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.OPEN_FILE_SETTING);
	  },

	  /**
	   * 打开震屏Настраивать
	   */
	  openShakeSetting: function openShakeSetting() {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.OPEN_SHAKE_SETTING);
	  },

	  /**
	   * 获取文件信息
	   * @param param
	   * @returns {Object}
	   */
	  getFileTransferInfo: function getFileTransferInfo(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_FILE_TRANSFER_INFO, param);
	  },

	  /**
	   * Скачать файл
	   * @param param
	   * @returns {Object}
	   */
	  downloadCloudFile: function downloadCloudFile(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.DOWNLOAD_CLOUD_FILE, param);
	  },

	  /**
	   * 取消Скачать файл
	   * @param param
	   * @returns {Object}
	   */
	  cancelDownloadCloudFile: function cancelDownloadCloudFile(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.CANCEL_DOWNLOAD_CLOUD_FILE, param);
	  },

	  /**
	   * 取消上传文件
	   * @param param
	   * @returns {Object}
	   */
	  cancelUploadCloudFile: function cancelUploadCloudFile(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.CANCEL_UPLOAD_CLOUD_FILE, param);
	  },

	  /**
	   * 预览文件
	   * @param param
	   * @returns {Object}
	   */
	  previewCloudFile: function previewCloudFile(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.PREVIEW_CLOUD_FILE, param);
	  },

	  /**
	   * 打开本地文件夹
	   * @param param
	   * @returns {Object}
	   */
	  openFolder: function openFolder(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.OPEN_FOLDER, param);
	  },

	  /**
	   * 删除云盘文件
	   * @param param
	   * @returns {Object}
	   */
	  deleteCloudFile: function deleteCloudFile(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.DELETE_CLOUD_FILE, param);
	  },

	  /**
	   * 获取单聊Новости已读状态
	   * @param param
	   */
	  getSingleMsgReadStatus: function getSingleMsgReadStatus(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_SINGLE_MSG_READ_STATUS, param);
	  },

	  /**
	   * Настраивать单聊Новости已读
	   * @param param
	   */
	  setSingleMsgReadStatus: function setSingleMsgReadStatus(param) {
	    return new Promise(function (resolve, reject) {
	      _$IMSDKRoot2.default.invoke(_constants2.default.SDK.SET_SINGLE_MSG_READ_STATUS, param).then(function (data) {
	        if (data && data.code == 0) {
	          resolve(data);
	        } else {
	          reject(data);
	        }
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  },

	  /**
	   * 获取当前窗口是否被遮盖
	   * @returns {Object}
	   */
	  isChatWindowCovered: function isChatWindowCovered() {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.IS_CHAT_WINDOW_COVERED);
	  },

	  /**
	   * 获取是否显示语音转文字
	   * @returns
	   */
	  getAudioShowTextSetting: function getAudioShowTextSetting() {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_AUDIO_SHOW_TEXT_SETTING);
	  },

	  /**
	   * 显示语音转文字系统提示
	   * @param {any} param
	   */
	  addAudioTextSettingTip: function addAudioTextSettingTip(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK_PREFIX_MAP[param.type] + _constants2.default.SDK.ADD_AUDIO_TEXT_SETTING_TIP_SUFFIX, param);
	  },

	  /**
	   * 打开系统Настраивать
	   * @param param
	   */
	  openSetting: function openSetting(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.OPEN_SETTING, param);
	  },

	  /**
	   * 发起视频聊天
	   * @param param
	   */
	  startFaceTime: function startFaceTime(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.START_FACE_TIME, param);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2017/2/17.
	 */
	exports.default = {
	  sharedWin: null
	};
	module.exports = exports["default"];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _audio = __webpack_require__(50);

	var _audio2 = _interopRequireDefault(_audio);

	var _image = __webpack_require__(51);

	var _image2 = _interopRequireDefault(_image);

	var _link = __webpack_require__(52);

	var _link2 = _interopRequireDefault(_link);

	var _location = __webpack_require__(53);

	var _location2 = _interopRequireDefault(_location);

	var _video = __webpack_require__(54);

	var _video2 = _interopRequireDefault(_video);

	var _card = __webpack_require__(55);

	var _card2 = _interopRequireDefault(_card);

	var _normalMsg = __webpack_require__(56);

	var _normalMsg2 = _interopRequireDefault(_normalMsg);

	var _systemMsg = __webpack_require__(57);

	var _systemMsg2 = _interopRequireDefault(_systemMsg);

	var _errorStatus = __webpack_require__(58);

	var _errorStatus2 = _interopRequireDefault(_errorStatus);

	var _loading = __webpack_require__(59);

	var _loading2 = _interopRequireDefault(_loading);

	var _atMsgReadCount = __webpack_require__(60);

	var _atMsgReadCount2 = _interopRequireDefault(_atMsgReadCount);

	var _anchor_check = __webpack_require__(61);

	var _anchor_check2 = _interopRequireDefault(_anchor_check);

	var _filemsg = __webpack_require__(62);

	var _filemsg2 = _interopRequireDefault(_filemsg);

	var _fileOptions = __webpack_require__(63);

	var _fileOptions2 = _interopRequireDefault(_fileOptions);

	var _msgReadStatus = __webpack_require__(64);

	var _msgReadStatus2 = _interopRequireDefault(_msgReadStatus);

	var _degrade = __webpack_require__(65);

	var _degrade2 = _interopRequireDefault(_degrade);

	var _facetime = __webpack_require__(66);

	var _facetime2 = _interopRequireDefault(_facetime);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	  audio: _audio2.default.trim(),
	  image: _image2.default.trim(),
	  link: _link2.default.trim(),
	  location: _location2.default.trim(),
	  video: _video2.default.trim(),
	  card: _card2.default.trim(),
	  normalMsg: _normalMsg2.default.trim(),
	  systemMsg: _systemMsg2.default.trim(),
	  errorStatus: _errorStatus2.default.trim(),
	  loading: _loading2.default.trim(),
	  atMsgReadCount: _atMsgReadCount2.default.trim(),
	  anchorCheck: _anchor_check2.default.trim(),
	  fileMsg: _filemsg2.default.trim(),
	  fileOperation: _fileOptions2.default.trim(),
	  msgReadStatus: _msgReadStatus2.default.trim(),
	  degrade: _degrade2.default.trim(),
	  facetime: _facetime2.default.trim()
	};
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<div class=\"audio-wrap{@if !text} show-audio-text{@/if}\">\n    <div id=\"J_AUDIO_${msgid}\" data-ignore=\"{@if self || readFlag == 1}1{@/if}\" class=\"imui-msg-audio J_audio\" data-md5=\"${md5}\" data-path=\"${path}\" data-type=\"${type}\">${dur}s</div>\n    {@if text}\n    <div class=\"audio-text\">${text}</div>\n    {@/if}\n</div>\n";

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "{@if !loading}\n<img src=\"${src}\"\n     id=\"J_Img_${id}\"\n     data-md5=\"${md5}\"\n     data-type=\"${type}\"\n     data-time=\"${msgtime}\"\n     class=\"J_imImage imui-msg-img J_${md5}{@if loading} imui-msg-img-loading{@/if}{@if isEmoji} imui-msg-emoji{@/if}{@if isEmotion} emotion-image{@/if}\"/>\n{@else}\n<img data-md5=\"${md5}\"\n     id=\"J_Img_${id}\"\n     data-type=\"${type}\"\n     data-time=\"${msgtime}\"\n     class=\"J_imImage imui-msg-img J_${md5}{@if loading} imui-msg-img-loading{@/if}{@if isEmoji} imui-msg-emoji{@/if}{@if isEmotion} emotion-image{@/if}\"/>\n{@/if}\n\n";

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "{@if style}\n<a class=\"imui-msg-link ${cls}-link J_link_${id}_${md5}\" href=\"${href}\" target=\"_blank\" safeflag=\"${safeflag}\" style=\"${style}\"><i class=\"link-sf\"></i>${href}</a>\n{@else}\n<a class=\"imui-msg-link ${cls}-link J_link_${id}_${md5}\" href=\"${href}\" target=\"_blank\" safeflag=\"${safeflag}\"><i class=\"link-sf\"></i>${href}</a>\n{@/if}\n\n";

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<div class=\"imui-msg-location-wrap\">\n  <a class=\"imui-msg-location\" href=\"${url}\" target=\"_blank\"><i class=\"imui-location-icon\"></i>${v}</a>\n</div>\n";

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<video src=\"${url}\" data-ignore=\"{@if self || readFlag == 1}1{@/if}\" controls=\"controls\" onplay=\"videoPlay(this)\" />\n";

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<div class=\"imui-msg-card-wrap\"><div class=\"imui-msg-card\">$${html}</div></div>\n";

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<div class=\"J_msg imui-msg{@if !self} imui-msg-l{@else} imui-msg-r{@/if}{@if cls} ${cls}{@/if}\" id=\"${msgid}\"\n     data-time=\"${msgtime}\" data-appkey=\"${from.appkey}\" data-nick=\"${from.nick}\">\n  {@if avatar}\n  <div class=\"imui-msg-avatar J_avatar_${appkey}${subNick}{@if !self && !cid.nick} add-at J_addAt{@/if}\"\n       style=\"background-image:url('${avatar}');background-size:cover;\"></div>\n  {@/if}\n  <div class=\"imui-msg-content\">\n    <div class=\"imui-msg-content-inner\">\n      <div class=\"imui-msg-head\">\n        <span class=\"imui-msg-sender J_display_${subNick}{@if !self && !cid.nick} add-at J_addAt{@/if}\"\n              title=\"{@if !isSubNick || !to}{@if from.display}${from.display}{@else}${from.nick}{@/if}{@else}{@if from.display}${from.display}{@else}${from.nick}{@/if} --> {@if to.display}${to.display}{@else}${to.nick}{@/if}{@/if}\">\n            {@if !isSubNick || !to}{@if from.display}${from.display}{@else}${from.nick}{@/if}{@else}{@if from.display}${from.display}{@else}${from.nick}{@/if} --> {@if to.display}${to.display}{@else}${to.nick}{@/if}{@/if}\n        </span>\n        <span class=\"imui-msg-date\">${msgtime | timeFormatter}</span>\n      </div>\n      <div class=\"msg-content-body\">\n        <div class=\"msg-body-html\">$${html}</div>\n        <div class=\"imui-msg-op-wrap\" data-menu=\"${menu}\">\n          <div class=\"imui-msg-status\">\n            {@if isFail}\n              <span class=\"status-icon status-error J_resend\"></span>\n            {@else}\n              {@if self && readFlagText}\n                {@if readflag == 1}\n                  <span class=\"status-read-done\" data-unread=\"0\">${readFlagText}</span>\n                {@/if}\n              {@/if}\n            {@/if}\n          </div>\n          {@if msgstatus === 0 || msgstatus === 1}\n            <div class=\"imui-msg-menu-wrap J_menuWrap\" tabindex=\"0\">\n              {@if isMe}\n                <span class=\"bubble-menu-trigger J_selfBubbleMenuTrigger\"\n                    data-svrtime=\"{@if svrtime && svrtime !== '0'}${svrtime}{@else}${msgtime}{@/if}\"></span>\n              {@else}\n                <span class=\"bubble-menu-trigger J_bubbleMenuTrigger\" data-svrtime=\"${svrtime}\"></span>\n              {@/if}\n            </div>\n          {@/if}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = "<div class=\"J_msg imui-msg-system\" id=\"${msgid}\" data-time=\"${msgtime}\"><span>$${html}</span></div>\n";

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "<span class=\"status-icon status-error{@if cls} ${cls}{@/if}\" data-id=\"{@if id}${id}{@/if}\"></span>\n";

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<span class=\"status-icon status-loading\"></span>\n";

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "<span class=\"{@if done} status-read-done{@else} status-read-count J_openReadStateCountDetail{@/if}\" data-msgid=\"${id}\">${tpl}</span>\n";

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "<div class=\"imui-msg-link-box\">\n  <i class=\"warning-icon\"></i>\n    <div>\n      <div class=\"warning-text\">\n        {@if isSafe}\n          Безопасная ссылка, будьте уверены, чтобы открыть\n        {@else}\n          <span class=\"warning-color\">предостережение！！！</span>Эта ссылка не является ссылкой на сайт Taobao, там может быть<span class=\"warning-color\">Опасность</span>,Пожалуйста, не проводите никаких транзакционных платежей, чтобы вас не обманулиv!\n        {@/if}\n      </div>\n    </div>\n  <div class=\"warning-actions\">\n    {@each btns as btn}\n      <a href=\"javascript:void(0)\" data-action=\"${btn.action}\" class=\"warning-action J_linkAction\">${btn.text}</a>\n    {@/each}\n    </div>\n  </div>\n";

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<div class=\"file-msg\" id=\"J_file${id}\" data-id=\"${id}\" data-pid=\"${parentId}\" data-type=\"${nodeType}\" data-md5=\"${md5}\" data-name=\"${nodeName}\" data-size=\"${nodeSize}\">\n  <div class=\"file-suffix J_previewFile ${cls}\" data-ignore=\"{@if optionsData && (optionsData.isSelf || optionsData.isRead)}1{@/if}\">${suffix}</div>\n  <div class=\"file-info\">\n    <div class=\"file-name J_previewFile\" title=\"${nodeName}\" data-ignore=\"{@if optionsData && (optionsData.isSelf || optionsData.isRead)}1{@/if}\">${name}</div>\n    <div class=\"file-size\">${size}</div>\n    <div class=\"file-operation\">\n      {@if optionsData}{@include fileOperation, optionsData}{@/if}\n    </div>\n  </div>\n  <div class=\"file-progress{@if !progress} hidden{@/if}\"><i style=\"{@if progress}width:${progress}%{@/if}\"></i></div>\n</div>\n";

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "{@if status == 0}\n  <a href=\"javascript:;\" class=\"preview-file J_previewFile\" data-ignore=\"{@if isSelf || isRead}1{@/if}\">预览</a>\n  <a href=\"javascript:;\" class=\"open-folder J_openFolder\" data-path=\"${path}\">Открыть папку</a>\n{@else if status == 1}\n  <a href=\"javascript:;\" class=\"cancel-upload J_cancelUpload\">отменить загрузку</a>\n{@else if status == 2}\n  <a href=\"javascript:;\" class=\"preview-file J_previewFile\" data-ignore=\"{@if isSelf || isRead}1{@/if}\">Предварительный просмотр</a>\n  <a href=\"javascript:;\" class=\"cancel-download J_cancelDownload\">Отменить скачивание</a>\n{@else if status == 3}\n  <a href=\"javascript:;\" class=\"preview-file J_previewFile\" data-ignore=\"{@if isSelf || isRead}1{@/if}\">Предварительный просмотр</a>\n  <a href=\"javascript:;\" class=\"download-file J_downloadFile\" data-ignore=\"{@if isSelf || isRead}1{@/if}\">Скачать файл</a>\n{@else if status == 4}\n  <a href=\"javascript:;\" class=\"preview-file J_previewFile\" data-ignore=\"{@if isSelf || isRead}1{@/if}\">Предварительный просмотр</a>\n  <a href=\"javascript:;\" class=\"download-file J_downloadFile\" data-ignore=\"{@if isSelf || isRead}1{@/if}\">скачать снова</a>\n{@else if status == 5}\n  <a href=\"javascript:;\" class=\"open-folder J_openFolder\" data-path=\"${path}\">Открыть папку</a>\n{@/if}\n";

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "<span class=\"status-read-done{@if !isread} single-read{@/if}\" data-unread=\"{@if isread}0{@else}1{@/if}\">${tpl}</span>\n";

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "<div class=\"degrade-msg\" id=\"J_degrade_${id}\">${text}</div>\n";

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "<div class=\"face-time\">\n  <i class=\"imui-icon imui-icon-shipin\"></i>\n  <span class=\"face-time-result\">${text}</span>\n  {@if trigger}\n  <span class=\"face-time-trigger J_faceTimeTrigger\">${trigger}</span>\n  {@/if}\n</div>\n";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	  __TypeMap: {},
	  __NameMap: {},
	  __overCallback: [],
	  __injectNormalFormats: [],
	  __injectSystemFormats: [],

	  /**
	   * 普通Новости
	   * 在传入的formatвозвращаться结果之前,
	   * 可以有机会改变возвращаться的结果
	   */
	  injectNormalFormat: function injectNormalFormat(msg, result) {

	    this.__injectNormalFormats.forEach(function (fn) {
	      result && fn && fn.call(null, msg, result);
	    });

	    return result;
	  },

	  /**
	   * 传入普通Новости的自定解析回调
	   * @param fn
	   */
	  pushInjectNormalFormat: function pushInjectNormalFormat(fn) {
	    this.__injectNormalFormats.push(fn);
	  },

	  /**
	   * 系统Новости
	   * 在传入的formatвозвращаться结果之前,
	   * 可以有机会改变возвращаться的结果
	   */
	  injectSystemFormat: function injectSystemFormat(msg, result) {
	    this.__injectSystemFormats.forEach(function (fn) {
	      result && fn && fn.call(null, msg, result);
	    });

	    return result;
	  },

	  /**
	   * 传入系统Новости的自定解析回调
	   * @param fn
	   */
	  pushInjectSystemFormat: function pushInjectSystemFormat(fn) {
	    this.__injectSystemFormats.push(fn);
	  },

	  /**
	   * 增加Новости解析处理器
	   * @param label {String} Категория сообщения, используемая для определения типа сообщения, например группового чата или одиночного чата.
	   * @param type {String} Подкласс сообщения, тип сообщения, например текстовое сообщение, системное сообщение и т. Д.
	   * @param name {String} Название функции преобразования, легко найти при вызове
	   * @param obj {Object} Преобразованный Formatter, Tpl, Callback...
	   */
	  add: function add(label, type, name, obj) {
	    // 如果type是数组
	    if (Object.prototype.toString.call(type) === '[object Array]') {
	      var _that = this;

	      type.forEach(function (t) {
	        _that.add(label, t, name, obj);
	      });
	    } else {
	      this.__NameMap[label] || (this.__NameMap[label] = {});
	      this.__NameMap[label][name] || (this.__NameMap[label][name] = []);
	      this.__TypeMap[label] || (this.__TypeMap[label] = {});
	      this.__TypeMap[label][type] = obj;
	      this.__NameMap[label][name].push(type);
	    }
	  },
	  getMsgTypesByName: function getMsgTypesByName(label, name) {
	    return this.__NameMap[label] && this.__NameMap[label][name] || [];
	  },

	  /**
	   * 更新之前定义的解析format, TPL, extra
	   * @param label
	   * @param type
	   * @param name
	   * @param obj
	   */
	  update: function update(label, type, name, obj) {
	    // 如果type是数组
	    if (Object.prototype.toString.call(type) === '[object Array]') {
	      var _that = this;

	      type.forEach(function (t) {
	        _that.update(label, t, name, obj);
	      });
	    } else {
	      if (!this.__TypeMap[label] || !this.__TypeMap[label][type]) return;

	      this.__TypeMap[label][type] = Object.assign(this.__TypeMap[label][type], obj);
	    }
	  },

	  /**
	   * 解析
	   * @param label {String} Категория сообщения, используемая для определения типа сообщения, например группового чата или одиночного чата.
	   * @param msg Данные сообщения
	   * @param key Поле, представляющее подкласс сообщения в данных источника сообщения.
	   * @returns возвращает Объект, содержащий преобразованный HTML и обратные вызовы, которые необходимо вызывать во время преобразования.
	   */
	  convert: function convert(label, msg, key) {

	    !key && (key = 'msgtype');
	    var type = msg[key];
	    var o = this.__TypeMap[label] && this.__TypeMap[label][type];

	    if (!o) return;

	    var formattedMsg = void 0;
	    var tpl = '';

	    try {
	      formattedMsg = o.format && o.format(msg);
	    } catch (e) {}

	    if (!formattedMsg) return;

	    if (!formattedMsg.ignore) {
	      tpl = formattedMsg && (0, _$JuicerRoot2.default)(o.Tpl, formattedMsg);
	      formattedMsg.ignore = true;
	    } else {
	      tpl = formattedMsg.html;
	    }

	    if (!tpl) return;

	    return {
	      html: tpl,
	      ignore: formattedMsg.ignore,
	      callback: o.extra && function (callback) {
	        o.extra(callback, tpl, formattedMsg);
	      }
	    };
	  },
	  addOverCallback: function addOverCallback(callback) {
	    this.__overCallback.push(callback);
	  },
	  over: function over() {
	    var args = Array.prototype.slice.call(arguments);
	    this.__overCallback.forEach(function (callback) {
	      try {
	        callback.apply(null, args);
	      } catch (e) {}
	    });
	  }
	}; /**
	    * Created by neitherzhu on 2017/1/1.
	    */

	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	/**
	 * Created by neitherzhu on 2017/1/2.
	 */
	var CALLBACKS = {};

	exports.default = {
	  setCallbacks: function setCallbacks(type, callbacks) {
	    if (!CALLBACKS[type]) {
	      CALLBACKS[type] = [];
	    }

	    if (Object.prototype.toString.call(callbacks) === '[object Array]') {
	      CALLBACKS[type] = [].concat(_toConsumableArray(CALLBACKS[type]), _toConsumableArray(callbacks));
	    } else {
	      CALLBACKS[type].push(callbacks);
	    }
	  },
	  getCallbacks: function getCallbacks(type) {
	    return type ? CALLBACKS[type] : CALLBACKS;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (msg) {
	  // 被撤回的Новости
	  if (msg.msgstatus === 4) {
	    msg.msgtype = 10000;
	    return _convert2.default.convert('chat', msg, 'msgtype');
	  }

	  if (msg.extinfo && msg.extinfo.syschatmsg) {
	    msg.msgtype = 10001;
	    return _convert2.default.convert('chat', msg, 'msgtype');
	  }

	  var result = (0, _defaultParse2.default)(msg);
	  var h = '';

	  if (!result) return;
	  msg.msgbody.forEach(function (mb) {
	    if (typeof mb.jvale === 'string') {
	      try {
	        mb.jvale && (mb.jvale = JSON.parse(mb.jvale));
	      } catch (e) {
	        mb.jvale = {};
	      }
	    }

	    result.menu = {};

	    switch (mb.type) {
	      case 0:
	        var type0html = '';
	        // 如果有链接
	        if (mb.jvale && mb.jvale.SAFE_URLFLAGS && Object.keys(mb.jvale.SAFE_URLFLAGS).length) {
	          type0html = (0, _link2.default)(mb, msg);
	          result.typeList.push({ type: 'link', extra: mb });
	          result.curType = 'link';
	        }

	        // 如果是群@Новости
	        if (msg.tribeat && msg.tribeat.atmsgtype !== 0) {

	          if (type0html) {
	            var tpl = '';
	            var div = document.createElement('div');
	            div.innerHTML = type0html;
	            console.log(div);
	            if (div.firstChild && div.firstChild.tagName) {
	              var cs = div.firstChild.childNodes;

	              [].concat(_toConsumableArray(cs)).forEach(function (c) {
	                if (!c.tagName) {

	                  var t = (0, _atmsg2.default)({ value: c.nodeValue }, msg, true);
	                  tpl += t || c.nodeValue;
	                } else {
	                  tpl += c.outerHTML;
	                }
	              });

	              div.firstChild.innerHTML = tpl;

	              type0html = div.innerHTML;
	            }
	          } else {
	            h = (0, _atmsg2.default)(mb, msg);
	            if (!h) {
	              h = (0, _text2.default)(mb);
	              result.curType = 'text';
	            } else {
	              result.curType = 'atmsg';
	              // 已读过的Новости不用再触发
	              if (msg.tribeat.atmsgtype != 0 && (msg.tribeat.msgreaded !== 1 || msg.tribeat.relation2me === 1)) {
	                result.typeList.push({
	                  type: 'atmsg',
	                  extra: {
	                    cid: msg.cid,
	                    msgid: msg.msgid,
	                    userid: msg.fromid,
	                    relation2me: msg.tribeat.relation2me,
	                    atmsgtype: msg.tribeat.atmsgtype
	                  }
	                });
	              }
	            }
	            type0html += h;
	          }
	        }

	        // 否则就是文本Новости
	        if (!type0html) {
	          result.curType = 'text';
	          type0html = (0, _text2.default)(mb);
	        }
	        result.html += type0html;

	        result.menu.canRecall = result.self ? 1 : 0;
	        result.menu.canForward = 1;
	        break;

	      case 1:
	        mb.msgid = msg.msgid;
	        mb.msgtime = msg.msgtime;
	        result.html += (0, _image2.default)(mb, msg);
	        result.typeList.push({
	          type: 'image',
	          extra: mb
	        });
	        result.curType = 'image';
	        result.menu.canRecall = result.self ? 1 : 0;
	        result.menu.canForward = 1;
	        break;
	      case 2:
	        mb.self = result.self;
	        mb.msgid = msg.msgid;
	        mb.readflag = msg.readflag;
	        result.doNotSetReadStatus = true;
	        result.html += (0, _audio2.default)(mb);
	        result.typeList.push({
	          type: 'audio',
	          extra: mb
	        });
	        result.curType = 'audio';
	        result.menu.canRecall = result.self ? 1 : 0;
	        result.menu.canForward = 1;
	        break;
	      case 3:
	        result.doNotSetReadStatus = true;
	        mb.self = result.self;
	        mb.readflag = result.readflag;
	        result.html = (0, _video2.default)(mb);
	        result.curType = 'video';
	        result.menu.canRecall = result.self ? 1 : 0;
	        result.menu.canForward = 1;
	        break;
	      case 8:
	        result.html += (0, _location2.default)(mb);
	        result.curType = 'location';
	        result.menu.canRecall = result.self ? 1 : 0;
	        result.menu.canForward = 1;
	        break;
	      case 65:
	        mb.msgid = msg.msgid;
	        result.curType = 'template';
	        result.html += (0, _template2.default)(mb, getMsgType(msg.cid), result);
	        if (!result.html) {
	          result = false;
	        }
	        break;
	      case 80:
	        result.html += (0, _t2.default)(mb);
	        result.curType = 'temp80';
	        break;
	      case 112:
	        if (typeof mb.value === 'string') {
	          mb.value = JSON.parse(mb.value);
	        }

	        result.doNotSetReadStatus = true;
	        result.menu.canForward = 1;

	        if (mb.value.opType === 'add') {
	          result.typeList.push({
	            type: 'dynamicMsg',
	            extra: {
	              cid: msg.cid,
	              bizType: mb.value.bizType,
	              bizUuid: mb.value.bizUuid,
	              msgtime: msg.msgtime,
	              id: msg.msgid
	            }
	          });

	          result.cls = 'temp20014-msg';
	          result.curType = 'dynamic';
	        } else {
	          mb.value.originMsgId && (0, _dynamicMsg2.default)({
	            cid: msg.cid,
	            bizType: mb.value.bizType,
	            bizUuid: mb.value.bizUuid,
	            msgtime: msg.msgtime,
	            id: mb.value.originMsgId
	          });

	          result = false;
	        }
	        break;
	      case 113:
	        if (typeof mb.value === 'string') {
	          try {
	            mb.value = JSON.parse(mb.value);
	          } catch (e) {
	            mb.value = '';
	          }
	        }
	        mb.msgid = msg.msgid;
	        mb.isFail = result.isFail;
	        mb.isSelf = result.self;
	        result.curType = 'file';

	        result.menu.canRecall = result.self ? 1 : 0;
	        result.menu.canForward = 1;

	        if (mb.value) {
	          result.html = (0, _file2.default)(mb, msg);

	          if (!result.html) {
	            result = false;
	            break;
	          }
	          result.doNotSetReadStatus = true;
	          result.cls = 'file-msg-wrap';
	          result.readFlagText = _constants2.default.I18N[_constants2.default.LANGUAGE][result.readflag ? 'FILE_OPENED' : 'FILE_UNOPENED'];
	          if (msg.msgstatus === 3) {
	            result.typeList.push({
	              type: 'file',
	              extra: mb.value && mb.value.fileInfo
	            });
	          }
	        } else {
	          result = false;
	        }

	        break;
	      default:
	        result.curType = 'degrade';
	        result.html = _constants2.default.I18N[_constants2.default.LANGUAGE].NOT_SUPPORT_MSG;
	    }
	  });

	  if (result) {
	    // 不是本人，不能撤回Новости
	    if (!result.isMe && result.menu) {
	      delete result.menu.canRecall;
	    }
	    result.menu = JSON.stringify(result.menu);
	  }
	  result = _convert2.default.injectNormalFormat(msg, result);

	  return result;
	};

	var _$BaseRoot = __webpack_require__(5);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _link = __webpack_require__(70);

	var _link2 = _interopRequireDefault(_link);

	var _atmsg = __webpack_require__(76);

	var _atmsg2 = _interopRequireDefault(_atmsg);

	var _text = __webpack_require__(77);

	var _text2 = _interopRequireDefault(_text);

	var _image = __webpack_require__(78);

	var _image2 = _interopRequireDefault(_image);

	var _audio = __webpack_require__(79);

	var _audio2 = _interopRequireDefault(_audio);

	var _video = __webpack_require__(80);

	var _video2 = _interopRequireDefault(_video);

	var _location = __webpack_require__(81);

	var _location2 = _interopRequireDefault(_location);

	var _template = __webpack_require__(82);

	var _template2 = _interopRequireDefault(_template);

	var _t = __webpack_require__(88);

	var _t2 = _interopRequireDefault(_t);

	var _file = __webpack_require__(89);

	var _file2 = _interopRequireDefault(_file);

	var _convert = __webpack_require__(67);

	var _convert2 = _interopRequireDefault(_convert);

	var _msgRecall = __webpack_require__(91);

	var _msgRecall2 = _interopRequireDefault(_msgRecall);

	var _dynamicMsg = __webpack_require__(92);

	var _dynamicMsg2 = _interopRequireDefault(_dynamicMsg);

	var _defaultParse = __webpack_require__(93);

	var _defaultParse2 = _interopRequireDefault(_defaultParse);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	} /**
	   * Created by neitherzhu on 2017/1/1.
	   */

	function getMsgType(cid) {
	  if (cid.appkey && cid.nick) {
	    return _constants2.default.TYPE.SINGLE;
	  } else if (cid.tribeid) {
	    return _constants2.default.TYPE.TRIBE;
	  }
	}

	;
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _$BaseRoot = __webpack_require__(5);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	var _translate = __webpack_require__(71);

	var _translate2 = _interopRequireDefault(_translate);

	var _md = __webpack_require__(72);

	var _md2 = _interopRequireDefault(_md);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2017/1/2.
	                                  */

	var RE_BREAK = /\r\n|\n|\r/g;
	var RE_ENCODE = /([.*+?^=!:${}()|[\]\/\\])/g;
	var RE_BLANK = / /g;

	function escapeRegExp(s) {
	    return s.replace(RE_ENCODE, "\\$&"); //$&表示被匹配的字符串
	}

	exports.default = function (mb, msg) {

	    var jv = mb.jvale;
	    var sf = void 0,
	        cls = '',
	        html = '',
	        id = void 0,
	        map = [],
	        turl = void 0,
	        i = 0,
	        reg = void 0,
	        v = mb.value;

	    mb.map = [];

	    var sfs = Object.keys(jv.SAFE_URLFLAGS);

	    // 长的放在前面先匹配,这样可以防止短的是长的一部分时,长的被短的先匹配了
	    sfs.sort(function (a, b) {
	        return b.length - a.length;
	    });

	    sfs.forEach(function (url) {
	        sf = jv.SAFE_URLFLAGS[url]['SAFE_FLAG'];

	        switch (sf) {
	            case 0:
	                cls = 'unknown';
	                break;
	            case 1:
	                cls = 'safe';
	                break;
	            case 2:
	                cls = 'danger';
	                break;
	        }

	        turl = escapeRegExp(url);
	        reg = new RegExp(turl, 'g');
	        v = v.replace(reg, '@@@' + i + '@@@');
	        id = msg ? msg.msgid : Util.guid();

	        map.push({
	            i: i,
	            url: (0, _$JuicerRoot2.default)(_template2.default.link, {
	                id: id,
	                md5: (0, _md2.default)(url),
	                cls: cls,
	                href: url,
	                safeflag: sf
	            })
	        });

	        i++;

	        mb.map.push({ id: id, url: url });
	    });

	    v = Util.htmlEncode(v);
	    v && (v = v.replace(RE_BLANK, '&nbsp;'));

	    map.forEach(function (m) {
	        reg = new RegExp('@@@' + m.i + '@@@', 'g');

	        v = v.replace(reg, m.url);
	    });

	    v && (v = v.replace(RE_BREAK, '<br>'));

	    v = (0, _translate2.default)(mb.jvale, v);

	    return v;
	};

	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (param, v) {
	  var sty = '',
	      attr = '',
	      tag_s = '',
	      tag_e = '';
	  var mode = _constants2.default.TEXT_MODE;

	  if (param) {
	    for (var _s in param) {
	      if (_s === 'FONT_SIZE' && mode === DEFAULT) {
	        sty += 'font-size:' + fixFontSize(param[_s]) + 'pt';
	      } else if (_s === 'FONT_BOLD_STYLE') {
	        tag_s = '<b>' + tag_s;
	        tag_e += '</b>';
	      } else if (_s === 'FONT_ITALIC_STYLE') {
	        tag_s = '<i>' + tag_s;
	        tag_e += '</i>';
	      } else if (_s === 'FONT_UNDERLINE_STYLE') {
	        tag_s = '<u>' + tag_s;
	        tag_e += '</u>';
	      } else if (_s === 'FONT_COLOR' && mode === DEFAULT) {
	        attr += ' color="#' + fixColor(param[_s].toString(16)) + '"';
	      } else if (_s === 'FONT_FAMILY' && mode === DEFAULT) {
	        attr += ' face="' + param[_s] + '"';
	      }
	    }
	  }

	  v = tag_s + '<font' + attr + ' style="' + sty + '">' + v + '</font>' + tag_e;

	  return v;
	};

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var s = '000000'; /**
	                   * Created by neitherzhu on 2017/1/2.
	                   */

	var DEFAULT = 'DEFAULT';
	/**
	 * 填充完整十六进制颜色
	 * @param c
	 * @returns {*}
	 */
	function fixColor(c) {

	  /**
	   * 修复Новости颜色为白色时, 将颜色加深(安全问题)
	   */
	  var color = parseInt(c, 16);
	  if ((color & 0x000000FF) >= 0xDC && (color >> 8 & 0x000000FF) >= 0xDC && (color >> 16 & 0x000000FF) >= 0xDC) {
	    c = 0x00505050;
	  }

	  if (c.length < 6) {
	    return s.slice(0, 6 - c.length) + c;
	  }

	  return c;
	}

	function fixFontSize(s) {
	  s = parseInt(s);

	  return s >= 9 ? s : 9;
	}

	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var crypt = __webpack_require__(73),
	      utf8 = __webpack_require__(74).utf8,
	      isBuffer = __webpack_require__(75),
	      bin = __webpack_require__(74).bin,

	  // The core
	  md5 = function (message, options) {
	    // Convert to byte array
	    if (message.constructor == String)
	      if (options && options.encoding === 'binary')
	        message = bin.stringToBytes(message);
	      else
	        message = utf8.stringToBytes(message);
	    else if (isBuffer(message))
	      message = Array.prototype.slice.call(message, 0);
	    else if (!Array.isArray(message))
	      message = message.toString();
	    // else, assume byte array already

	    var m = crypt.bytesToWords(message),
	        l = message.length * 8,
	        a =  1732584193,
	        b = -271733879,
	        c = -1732584194,
	        d =  271733878;

	    // Swap endian
	    for (var i = 0; i < m.length; i++) {
	      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
	             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
	    }

	    // Padding
	    m[l >>> 5] |= 0x80 << (l % 32);
	    m[(((l + 64) >>> 9) << 4) + 14] = l;

	    // Method shortcuts
	    var FF = md5._ff,
	        GG = md5._gg,
	        HH = md5._hh,
	        II = md5._ii;

	    for (var i = 0; i < m.length; i += 16) {

	      var aa = a,
	          bb = b,
	          cc = c,
	          dd = d;

	      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
	      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
	      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
	      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
	      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
	      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
	      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
	      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
	      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
	      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
	      c = FF(c, d, a, b, m[i+10], 17, -42063);
	      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
	      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
	      d = FF(d, a, b, c, m[i+13], 12, -40341101);
	      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
	      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

	      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
	      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
	      c = GG(c, d, a, b, m[i+11], 14,  643717713);
	      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
	      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
	      d = GG(d, a, b, c, m[i+10],  9,  38016083);
	      c = GG(c, d, a, b, m[i+15], 14, -660478335);
	      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
	      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
	      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
	      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
	      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
	      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
	      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
	      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
	      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

	      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
	      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
	      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
	      b = HH(b, c, d, a, m[i+14], 23, -35309556);
	      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
	      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
	      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
	      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
	      a = HH(a, b, c, d, m[i+13],  4,  681279174);
	      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
	      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
	      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
	      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
	      d = HH(d, a, b, c, m[i+12], 11, -421815835);
	      c = HH(c, d, a, b, m[i+15], 16,  530742520);
	      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

	      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
	      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
	      c = II(c, d, a, b, m[i+14], 15, -1416354905);
	      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
	      a = II(a, b, c, d, m[i+12],  6,  1700485571);
	      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
	      c = II(c, d, a, b, m[i+10], 15, -1051523);
	      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
	      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
	      d = II(d, a, b, c, m[i+15], 10, -30611744);
	      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
	      b = II(b, c, d, a, m[i+13], 21,  1309151649);
	      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
	      d = II(d, a, b, c, m[i+11], 10, -1120210379);
	      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
	      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

	      a = (a + aa) >>> 0;
	      b = (b + bb) >>> 0;
	      c = (c + cc) >>> 0;
	      d = (d + dd) >>> 0;
	    }

	    return crypt.endian([a, b, c, d]);
	  };

	  // Auxiliary functions
	  md5._ff  = function (a, b, c, d, x, s, t) {
	    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._gg  = function (a, b, c, d, x, s, t) {
	    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._hh  = function (a, b, c, d, x, s, t) {
	    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._ii  = function (a, b, c, d, x, s, t) {
	    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };

	  // Package private blocksize
	  md5._blocksize = 16;
	  md5._digestsize = 16;

	  module.exports = function (message, options) {
	    if (message === undefined || message === null)
	      throw new Error('Illegal argument ' + message);

	    var digestbytes = crypt.wordsToBytes(md5(message, options));
	    return options && options.asBytes ? digestbytes :
	        options && options.asString ? bin.bytesToString(digestbytes) :
	        crypt.bytesToHex(digestbytes);
	  };

	})();


/***/ },
/* 73 */
/***/ function(module, exports) {

	(function() {
	  var base64map
	      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

	  crypt = {
	    // Bit-wise rotation left
	    rotl: function(n, b) {
	      return (n << b) | (n >>> (32 - b));
	    },

	    // Bit-wise rotation right
	    rotr: function(n, b) {
	      return (n << (32 - b)) | (n >>> b);
	    },

	    // Swap big-endian to little-endian and vice versa
	    endian: function(n) {
	      // If number given, swap endian
	      if (n.constructor == Number) {
	        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
	      }

	      // Else, assume array and swap all items
	      for (var i = 0; i < n.length; i++)
	        n[i] = crypt.endian(n[i]);
	      return n;
	    },

	    // Generate an array of any length of random bytes
	    randomBytes: function(n) {
	      for (var bytes = []; n > 0; n--)
	        bytes.push(Math.floor(Math.random() * 256));
	      return bytes;
	    },

	    // Convert a byte array to big-endian 32-bit words
	    bytesToWords: function(bytes) {
	      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
	        words[b >>> 5] |= bytes[i] << (24 - b % 32);
	      return words;
	    },

	    // Convert big-endian 32-bit words to a byte array
	    wordsToBytes: function(words) {
	      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
	        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
	      return bytes;
	    },

	    // Convert a byte array to a hex string
	    bytesToHex: function(bytes) {
	      for (var hex = [], i = 0; i < bytes.length; i++) {
	        hex.push((bytes[i] >>> 4).toString(16));
	        hex.push((bytes[i] & 0xF).toString(16));
	      }
	      return hex.join('');
	    },

	    // Convert a hex string to a byte array
	    hexToBytes: function(hex) {
	      for (var bytes = [], c = 0; c < hex.length; c += 2)
	        bytes.push(parseInt(hex.substr(c, 2), 16));
	      return bytes;
	    },

	    // Convert a byte array to a base-64 string
	    bytesToBase64: function(bytes) {
	      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
	        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
	        for (var j = 0; j < 4; j++)
	          if (i * 8 + j * 6 <= bytes.length * 8)
	            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
	          else
	            base64.push('=');
	      }
	      return base64.join('');
	    },

	    // Convert a base-64 string to a byte array
	    base64ToBytes: function(base64) {
	      // Remove non-base-64 characters
	      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

	      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
	          imod4 = ++i % 4) {
	        if (imod4 == 0) continue;
	        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
	            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
	            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
	      }
	      return bytes;
	    }
	  };

	  module.exports = crypt;
	})();


/***/ },
/* 74 */
/***/ function(module, exports) {

	var charenc = {
	  // UTF-8 encoding
	  utf8: {
	    // Convert a string to a byte array
	    stringToBytes: function(str) {
	      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
	    },

	    // Convert a byte array to a string
	    bytesToString: function(bytes) {
	      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
	    }
	  },

	  // Binary encoding
	  bin: {
	    // Convert a string to a byte array
	    stringToBytes: function(str) {
	      for (var bytes = [], i = 0; i < str.length; i++)
	        bytes.push(str.charCodeAt(i) & 0xFF);
	      return bytes;
	    },

	    // Convert a byte array to a string
	    bytesToString: function(bytes) {
	      for (var str = [], i = 0; i < bytes.length; i++)
	        str.push(String.fromCharCode(bytes[i]));
	      return str.join('');
	    }
	  }
	};

	module.exports = charenc;


/***/ },
/* 75 */
/***/ function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */

	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}

	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _translate = __webpack_require__(71);

	var _translate2 = _interopRequireDefault(_translate);

	var _text = __webpack_require__(77);

	var _text2 = _interopRequireDefault(_text);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2017/1/1.
	                                  * 解析@Новости
	                                  */

	var RE_AT_ALL = /(@all[\s|\n|\r]*)|(@所有人[\s|\n|\r]*)/g;
	var RE_AT_USER = /@([\w|\(|\)|\:|\u4e00-\u9fa5]+)[\s|\n|\r]*/g;
	var RE_BREAK = /\r\n|\n|\r/g;
	var RE_BLANK = / /g;
	var BLANK_TEST = /[^>]&nbsp;$/;

	exports.default = function (mb, msg, doNotTranslate) {
	  var t = msg.tribeat;
	  var type = t.atmsgtype;
	  var members = t.atmembers;
	  var isAtAll = type === 2 || type === -2;
	  var re = isAtAll ? RE_AT_ALL : RE_AT_USER;
	  var html = '';
	  var users = void 0;
	  var v = Util.htmlEncode(mb.value);

	  v && (v = v.replace(RE_BREAK, '<br>'));
	  v && (v = v.replace(RE_BLANK, '&nbsp;'));

	  if (!BLANK_TEST.test(v)) {
	    v += '&nbsp;';
	  }

	  users = v.match(re);

	  !doNotTranslate && mb.jvale && (v = (0, _translate2.default)(mb.jvale, v));

	  if (!users || !users.length) {
	    html = false;
	  } else {
	    if (isAtAll) {
	      html = v.replace(re, '<span class="imui-msg-atmsg J_atMsg">' + users[0] + ' </span>');
	    } else if (members && members.length) {
	      users.forEach(function (user) {
	        var l = members.length;
	        for (var i = 0; i < l; i++) {
	          if ('@' + members[i].nick === user.trim()) {
	            var r = new RegExp(user.replace('(', '\\(').replace(')', '\\)') + '&nbsp;', 'gi');
	            v = v.replace(r, '<span class="imui-msg-atmsg J_atMsg">' + user + '&nbsp; </span> ');
	            break;
	          }
	        }
	      });
	      html = v;
	    }
	  }

	  return html;
	};

	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _translate = __webpack_require__(71);

	var _translate2 = _interopRequireDefault(_translate);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/2.
	 */
	var Util = _$BaseRoot.Base.Util;

	var RE_BREAK = /\r\n|\n|\r/g;
	var RE_BLANK = / /g;

	exports.default = function (mb) {
	  var v = Util.htmlEncode(mb.value) || '';

	  v && (v = v.replace(RE_BREAK, '<br>'));
	  v && (v = v.replace(RE_BLANK, '&nbsp;'));

	  return (0, _translate2.default)(mb.jvale, v);
	};

	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function (mb, msg) {

	  var loading = mb.value.indexOf(_constants2.default.PIC_PROTOCOL) !== 0;
	  var isEmotion = mb.value.indexOf(_constants2.default.EMOTION_PROTOCOL) === 0;
	  var isEmoji = isEmotion ? false : mb.value.indexOf(_constants2.default.EMOJI_PROTOCOL) === 0;

	  return (0, _$JuicerRoot2.default)(_template2.default.image, {
	    id: msg.msgid,
	    md5: mb.jvale && mb.jvale.FILEMD5,
	    type: mb.jvale && mb.jvale.TYPE,
	    loading: loading,
	    src: mb.value,
	    isEmoji: isEmoji,
	    isEmotion: isEmotion,
	    msgtime: msg.msgtime
	  });
	}; /**
	    * Created by neitherzhu on 2017/1/2.
	    */

	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/2.
	 */
	exports.default = function (mb) {

	    return (0, _$JuicerRoot2.default)(_template2.default.audio, {
	        dur: mb.jvale.PLAYTIME,
	        md5: mb.jvale.FILEMD5,
	        type: mb.jvale.TYPE,
	        msgid: mb.msgid,
	        text: mb.jvale.AUDIO_TEXT,
	        self: mb.self,
	        readFlag: mb.readflag
	    });
	};

	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/2.
	 */
	exports.default = function (mb) {
	  var value = mb.value,
	      url = void 0;
	  if (typeof value === 'string') {
	    try {
	      value = JSON.parse(value);
	    } catch (e) {}
	  }

	  if (value.resource) {
	    url = value.resource;
	  } else {
	    url = value;
	  }

	  return (0, _$JuicerRoot2.default)(_template2.default.video, {
	    url: url,
	    self: mb.self,
	    readFlag: mb.readflag
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function (mb) {

	  var v = '',
	      url = '';
	  if (mb.jvale && mb.jvale.NAME) {
	    v = mb.jvale.NAME;
	    url = 'https://m.amap.com/navi/?dest=' + mb.jvale.LONGITUDE + ',' + mb.jvale.LATITUDE + '&destName=' + encodeURIComponent(v) + '&hideRouteIcon=1&key=9b737f5a37b803624c41024081fc32f1';
	  }
	  return v ? (0, _$JuicerRoot2.default)(_template2.default.location, { url: url, v: v, linkText: _constants2.default.I18N[_constants2.default.LANGUAGE].CHECK_MAP }) : _constants2.default.I18N[_constants2.default.LANGUAGE].NOT_SUPPORT_MSG;
	}; /**
	    * Created by neitherzhu on 2017/1/2.
	    */

	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(83);

	var _util2 = _interopRequireDefault(_util);

	var _temp = __webpack_require__(84);

	var _temp2 = _interopRequireDefault(_temp);

	var _temp3 = __webpack_require__(85);

	var _temp4 = _interopRequireDefault(_temp3);

	var _temp5 = __webpack_require__(87);

	var _temp6 = _interopRequireDefault(_temp5);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/2.
	 */
	exports.default = function (mb, msgType, result) {

	  var value = mb.value,
	      tpl = '';

	  try {
	    value = JSON.parse(value);
	  } catch (e) {
	    value = false;
	  }

	  if (!value) return tpl;

	  // h5模板Новости
	  if (value.template.id === 20002) {
	    tpl = (0, _temp2.default)(value);
	  }
	  // alist模板Новости
	  else if (value.template.id === 20013) {
	      tpl = (0, _temp4.default)(mb, value, msgType);
	    }
	    // 栅格化Новости
	    else if (value.template.id === 20014) {
	        tpl = (0, _temp6.default)(value, result);
	      } else {
	        tpl = _util2.default.degrade(value);
	      }

	  return tpl;
	};

	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/2/17.
	 */
	var Util = _$BaseRoot.Base.Util;

	var __NOW = new Date();
	__NOW.setHours(0);
	__NOW.setMinutes(0);
	__NOW.setSeconds(0);
	__NOW.setMilliseconds(0);

	var __ONE_DAY_MS = 24 * 60 * 60 * 1000;
	var __TODAY_START_MS = +__NOW;
	var __TDOAY_END_MS = __TODAY_START_MS + __ONE_DAY_MS;
	var __YESTERDAY_START_MS = __TODAY_START_MS - __ONE_DAY_MS;
	var __YESTERDAY_END_MS = __TODAY_START_MS - 1;

	function numberify(n) {
	  return n > 9 ? n : '0' + n;
	}

	Date.prototype.__getFormatTime = function () {
	  return numberify(this.getHours()) + ':' + numberify(this.getMinutes()) + ':' + numberify(this.getSeconds());
	};

	Date.prototype.__getFormatFullDate = function () {
	  return this.getFullYear() + '-' + (this.getMonth() + 1) + '-' + this.getDate() + ' ' + this.__getFormatTime();
	};

	Date.prototype.__getOnlyDate = function () {
	  return this.getFullYear() + '-' + (this.getMonth() + 1) + '-' + this.getDate();
	};

	/**
	 * 格式化日期
	 * @param  {Number} ms Миллисекунды
	 * @return {String}
	 */
	Util.dateFormatter = function (ms) {
	  ms = parseInt(ms, 10);

	  return new Date(ms).__getFormatFullDate();
	  //if(ms >= __TODAY_START_MS) {
	  //  return new Date(ms).__getFormatTime();
	  //}else if(ms >= __YESTERDAY_START_MS) {
	  //  return '昨天 ' + (new Date(ms).__getFormatTime());
	  //}else {
	  //  return new Date(ms).__getFormatFullDate();
	  //}
	};

	Util.timeFormatter = function (ms) {
	  ms = parseInt(ms, 10);
	  return new Date(ms).__getFormatTime();
	};

	Util.degrade = function (value) {
	  return value.header && value.header.degrade && value.header.degrade.alternative || _constants2.default.I18N[_constants2.default.LANGUAGE].NOT_SUPPORT_MSG;
	};

	var SIZE_SUFFIX = {
	  0: 'B',
	  1: 'KB',
	  2: 'MB',
	  3: 'GB'
	};

	Util.getFileSize = function (s) {
	  var r = parseInt(s);
	  var c = 0;

	  while (r > 1024) {
	    r = r / 1024;
	    c++;
	  }

	  return r.toFixed(1) + SIZE_SUFFIX[c];
	};

	var isCN = /[\u4e00-\u9fa5]/;

	Util.getStrLen = function (s) {

	  var len = 0;
	  for (var i = 0, l = s.length; i < l; i++) {
	    len += isCN.test(s.charAt[i]) ? 2 : 1;
	  }

	  return len;
	};

	Util.getStrByLen = function (s, maxLen, dur) {
	  dur || (dur = 2);
	  var len = 0;
	  var goLast = false;
	  var l = s.length;
	  var ellipsisLen = 3; // ...的长度
	  var i = 0;
	  var result = '';
	  var lastStr = s.substring(l - dur, l);
	  // 获取最后2个字符的长度
	  var last2StrLen = Util.getStrLen(lastStr);

	  for (; i < l; i++) {
	    len += isCN.test(s.charAt[i]) ? 2 : 1;

	    if (len >= maxLen - last2StrLen - ellipsisLen) {

	      if (len > maxLen - last2StrLen - ellipsisLen) {
	        i--;
	      }

	      // 如果还有更多的字符需要遍历, 则不再遍历
	      if (i < l - 2) {
	        goLast = true;
	      }
	      break;
	    }
	  }

	  if (goLast) {
	    result = s.substring(0, i) + '...' + lastStr;
	  } else {
	    result = s;
	  }

	  return result;
	};

	Util.generatorFileMeta = function (target) {
	  var result = {};

	  result.parentId = target.dataset.pid;
	  result.md5 = target.dataset.md5;
	  result.nodeType = target.dataset.type;
	  result.id = target.id.substring(6);
	  result.nodeName = target.dataset.name;
	  result.nodeSize = target.dataset.size;

	  return result;
	};

	Util.getDuration = function (dur) {
	  dur = parseInt(dur);

	  var s = dur % 60;
	  var m = (dur - s) / 60;
	  var h = parseInt(m / 60);

	  return (h > 0 ? Util.numberify(h) + ':' : '') + Util.numberify(m) + ':' + Util.numberify(s);
	};

	Util.numberify = function (num) {
	  if (num > 9) {
	    return num;
	  }

	  return '0' + num;
	};

	Util.getCid = function (conversation) {
	  if (!conversation) return null;

	  var result = {};

	  if (conversation.type === _constants2.default.TYPE.SINGLE) {
	    result.uid = conversation;
	  } else {
	    result.tid = conversation;
	  }

	  result.type = conversation.type;

	  return result;
	};

	Util.getUidByCid = function (cid) {
	  if (cid.type === _constants2.default.TYPE.SINGLE) {
	    return cid.uid && cid.uid.appkey + cid.uid.nick;
	  } else {
	    return cid.tid && cid.tid.tribeid;
	  }
	};

	exports.default = Util;
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value) {
	  var tpl = '';

	  if (value.template.data && value.template.data.text) {
	    tpl = (0, _$JuicerRoot2.default)(_template2.default.card, { html: value.template.data.text });
	  } else {
	    tpl = _util2.default.degrade(value);
	  }

	  return tpl;
	};

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _util = __webpack_require__(83);

	var _util2 = _interopRequireDefault(_util);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/2/24.
	 */
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (mb, value, msgType) {
	  var tpl = '';

	  if (value.template.data && value.template.data.alist) {
	    var t = '',
	        s = '',
	        id = 'J_temp20013_' + mb.msgid,
	        len = value.template.data.alist.length,
	        v = '',
	        isChanged = false,
	        links = [];

	    value.template.data.alist.forEach(function (list, index) {

	      if (!list.label) return;

	      var label = list.label;

	      label = label.replace(RE_BREAK, '<br>');
	      label = label.replace(RE_BLANK, '&nbsp;');

	      t = '';
	      s = '';

	      _sdk2.default.convertMsgToEmotion({
	        value: list.label,
	        type: 0,
	        jvale: '',
	        strDegradeText: '',
	        msgType: msgType
	      }).then(function (data) {
	        var temp = '';
	        var l = void 0;
	        s = '';

	        data.forEach(function (r) {
	          l = r.value;

	          if (r.type === 0) {
	            isChanged = true;
	            r.jvale = JSON.parse(r.jvale);
	            temp += (0, _link2.default)(r, mb);
	            links.push(r);
	          } else if (r.type === 1) {
	            isChanged = true;
	            temp += '<img src="' + l + '"/>';
	          } else {
	            l = l.replace(RE_BREAK, '<br>');
	            l = l.replace(RE_BLANK, '&nbsp;');
	            temp += l;
	          }
	        });

	        s = translateStyle(list);

	        v += genList(list, s, temp);

	        if (len - 1 == index && isChanged) {
	          document.getElementById(id).innerHTML = v;
	          if (links && links.length) {
	            links.forEach(function (link) {
	              (0, _link4.default)(link);
	            });
	          }
	          if (window.CustomEvent && window.dispatchEvent) {
	            // 手动触发resize事件
	            var event = new CustomEvent('resize');
	            window.dispatchEvent(event);
	          }
	        }
	      }).catch(function (err) {});

	      s = translateStyle(list);

	      t = genList(list, s, label);

	      tpl += t;
	    });

	    tpl && (tpl = '<div class="alist-msg-wrap" id="' + id + '">' + tpl + '</div>');
	  } else {
	    tpl = _util2.default.degrade(value);
	  }

	  return tpl;
	};

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _util = __webpack_require__(83);

	var _util2 = _interopRequireDefault(_util);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _link = __webpack_require__(70);

	var _link2 = _interopRequireDefault(_link);

	var _link3 = __webpack_require__(86);

	var _link4 = _interopRequireDefault(_link3);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/2/24.
	 */
	var RE_BREAK = /\r\n|\n|\r/g;
	var RE_BLANK = / /g;

	function genList(list, style, v) {
	  var t = '';

	  if (list.action && list.action.length) {
	    t = '<a href="#TemplateMsgAction#' + _util2.default.htmlEncode(JSON.stringify(list.action)) + '" style="' + style + '">' + v + '</a>';
	  } else {
	    t = '<span style="' + style + '">' + v + '</span>';
	  }

	  list.br && (t += '<br>');

	  return t;
	}

	function translateStyle(list) {
	  var style = {};
	  var s = '';
	  if (list.attr) {
	    if (typeof list.attr === 'string') {
	      list.attr = list.attr.split('|');
	    }
	    list.attr.forEach(function (a) {
	      a.toUpperCase() === 'B' && (style['font-weight'] = 'bold');
	      a.toUpperCase() === 'U' && (style['text-decoration'] = 'underline');
	      a.toUpperCase() === 'I' && (style['font-style'] = 'italic');
	    });
	  }
	  list.color && (style['color'] = list.color.indexOf('#') === 0 ? list.color : '#' + list.color);
	  list.font && (style['font-family'] = list.font);
	  list.size && (style['font-size'] = list.size + 'pt');

	  for (var k in style) {
	    s += k + ':' + style[k] + ';';
	  }

	  return s;
	}
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (extra, callback) {
	  if (!extra || !extra.map || !extra.map.length) return;

	  extra.map.forEach(function (o) {
	    _sdk2.default.getUrlSnapshot({ url: o.url, msgid: o.id }).then(function (data) {

	      if (callback && !callback(data) || !data.snapshot) return;

	      var html = data.snapshot;
	      var links = document.querySelectorAll('.J_link_' + o.id + '_' + (0, _md2.default)(o.url));

	      [].concat(_toConsumableArray(links)).forEach(function (link) {
	        var next = link.nextSibling;
	        if (next && next.classList && next.classList.contains('item-snapshot-wrap')) return;
	        //let link = document.getElementById('J_link_' + o.id);
	        var div = document.createElement('div');
	        var ssId = 'J_snapshot_' + o.id;

	        //if(document.getElementById(ssId)) return;

	        div.className = _constants2.default.CLS.SNAPSHOT;
	        div.innerHTML = html;
	        div.id = ssId;

	        link.parentNode.insertBefore(div, link.nextSibling);
	      });

	      _window2.default.sharedWin.isBottom && Util.scrollToBottom(_window2.default.sharedWin.container);
	    }).catch(function (err) {});
	  });
	};

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(5);

	var _md = __webpack_require__(72);

	var _md2 = _interopRequireDefault(_md);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	} /**
	   * Created by neitherzhu on 2016/12/6.
	   * 链接Новости 可能是宝贝链接,需要去拿下是否有宝贝快照
	   */

	var Util = _$BaseRoot.Base.Util;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value, result) {

	  var body = value.template.data.body;
	  var SIZE = value.template.data.pc_width || 'small';

	  if (!CARD_SIZE || CARD_SIZE !== SIZE) {
	    CARD_SIZE = SIZE;
	    getStrMap(CARD_SIZE);
	  }
	  var data = parseData(body);
	  if (!data) return '';
	  var t = translateData(data);

	  t && (t = '<div class="temp20014-wrap ' + SIZE_MAP[CARD_SIZE].cls + (value.template.data.bgl === LUCY_MONEY_BGL ? ' lucy-money' : '') + '">' + t + '</div>');

	  if (!t) {
	    t = _util2.default.degrade(value);
	  } else if (result) {
	    result.cls = 'temp20014-msg';
	    result.curType = 'dynamic';
	  }

	  return t;
	};

	var _util = __webpack_require__(83);

	var _util2 = _interopRequireDefault(_util);

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var STYLE_KEY = ['padding', 'display', 'flex-direction', 'justify-content', 'align-items', 'align-self', 'background-color', 'color', 'text-decoration', 'font-size', 'border-radius', 'border-top-color', 'border-top-style']; /**
	                                                                                                                                                                                                                                 * Created by neitherzhu on 2017/2/24.
	                                                                                                                                                                                                                                 */

	var STR_MAP = void 0;
	var PER_WIDTH = void 0;
	var MAX_WIDTH = void 0;
	var CARD_SIZE = void 0;
	var SIZE_MAP = {
	  small: { width: 'TEMP20014_SMALL_MAX_WIDTH', cls: 'small' },
	  middle: { width: 'TEMP20014_MIDDLE_MAX_WIDTH', cls: 'middle' },
	  large: { width: 'TEMP20014_LARGE_MAX_WIDTH', cls: 'large' }
	};
	var DIV_TPL = '<div class="${cls}{@if action} J_tempAction{@/if}" style="${style}" data-action="${action}">$${html}</div>';
	var SPAN_TPL = '<span class="${cls}{@if action} J_tempAction{@/if}" style="${style}" data-action="${action}">$${html}</span>';
	var LUCY_MONEY_BGL = 'drawable://aliwx_hongbao_bubble_left_bg';

	function getStrMap(size) {
	  MAX_WIDTH = _constants2.default[SIZE_MAP[size].width] || 264;
	  PER_WIDTH = MAX_WIDTH / 12;

	  STR_MAP = {
	    f: 'frame',
	    v: 'vector',
	    p: 'padding',
	    cs: 'class',
	    ac: 'action',
	    ds: 'display',
	    fd: 'flex-direction',
	    jc: 'justify-content',
	    ai: 'align-items',
	    ad: 'align-self',
	    fs: 'flex-start',
	    fe: 'flex-end',
	    ct: 'center',
	    st: 'stretch',
	    sb: 'space-between',
	    sa: 'space-around',
	    sv: 'subviews',
	    bc: 'background-color',
	    tc: 'color',
	    /* text-color */
	    td: 'text-decoration',
	    ul: 'underline',
	    lt: 'line-through',
	    ts: 'font-size',
	    /* text-size */
	    xl: (18 / PER_WIDTH).toFixed(2),
	    /* huge */
	    l: (16 / PER_WIDTH).toFixed(2),
	    /* large */
	    m: (14 / PER_WIDTH).toFixed(2),
	    /* medium */
	    s: (12 / PER_WIDTH).toFixed(2),
	    /* small */
	    xs: (10 / PER_WIDTH).toFixed(2),
	    /* mini */
	    ir: 'background-size',
	    /*image-render */
	    al: 'aspect-fill',
	    /* aspect-fill */
	    at: 'aspect-fit',
	    /*aspect-fit */
	    tt: 'title',
	    bs: 'button-style',
	    bb: 'button-blue',
	    bg: 'button-gray',
	    bn: 'button-naked',
	    bt: 'button-theme',
	    lc: 'border-top-color',
	    /* line-color */
	    ls: 'border-top-style',
	    /* line-style */
	    tfs: 'font-size',
	    /* text-font-size */
	    rds: 'border-radius',
	    /* radius */
	    stock: 'solid',
	    dot: 'dotted'
	  };

	  return STR_MAP;
	}

	function isArray(o) {
	  return Object.prototype.toString.call(o) === '[object Array]';
	}

	function isObject(o) {
	  return Object.prototype.toString.call(o) === '[object Object]';
	}

	function getBackgroundSize(s, style) {
	  if (s === 'aspect-fill') {
	    style['background-size'] = 'cover';
	    style['background-position'] = 'center';
	  } else if (s === 'aspect-fit') {
	    style['background-size'] = 'contain';
	    style['background-position'] = 'center';
	  } else if (s === 'fill') {
	    style['background-size'] = '100% 100%';
	  }
	}
	/**
	 * 将原始数据转换成人类认识的key/value
	 * @param data
	 * @returns {*}
	 */
	function parseData(data) {
	  var newValue = void 0;
	  // let SM = getStrMap();

	  if (isObject(data)) {
	    newValue = {};
	    for (var k in data) {
	      var ok = STR_MAP[k] || k;
	      var ov = data[k];
	      newValue[ok] = parseData(ov);
	    }
	  } else if (isArray(data)) {
	    newValue = [];
	    data.forEach(function (item) {
	      newValue.push(parseData(item));
	    });
	  } else {
	    newValue = STR_MAP[data] || data;
	  }

	  return newValue;
	}

	/**
	 * 将转换后的数据解析成html
	 * @param data
	 * @param parent
	 * @returns {string}
	 */
	function translateData(data, parent) {
	  var tpl = '';
	  var style = {};
	  var styleStr = '';
	  var action = '';

	  if (parent) {
	    // 如果父元素是flex布局, 子元素需要Настраиватьflex样式
	    if (parent.display === 'flex') {
	      style.flex = '0 0 auto';
	    }
	    // 如果父元素是fix布局, 子元素需要Настраиватьposition样式
	    else if (parent.display === 'fix') {
	        style.position = 'absolute';
	      }
	  }

	  if (!style.position && data.display === 'fix') {
	    style.position = 'relative';
	  }

	  // 确保字号是数字类型
	  data['font-size'] && (data['font-size'] = Number(data['font-size']));

	  var isLineOne = false; // 是否是单行
	  // 如果有字号跟宽高属性
	  if (data['font-size'] && data['frame']) {
	    // 如果高度是数字
	    if (typeof data.frame[3] === 'number') {
	      // 如果高度除以字号小于2, 则默认认为是单行
	      // 则Настраивать单行的属性
	      if (data.frame[3] / data['font-size'] < 2) {
	        isLineOne = true;
	      }
	    }
	  }

	  // 解析css属性
	  for (var k in data) {
	    if (STYLE_KEY.indexOf(k) > -1) {
	      if (data.class === 'img') {
	        k === 'center' && (k = '100%');
	      }

	      // 需要特殊处理下颜色, 服务端给的是#ff(opacity)ffffff(color)
	      if (k === 'color' || k === 'background-color') {
	        var v = data[k].substring(1);
	        var l = 8 - v.length;
	        var t = '';

	        for (var i = 0; i < l; i++) {
	          t += 'f';
	        }

	        v = t + v;

	        var vs = [];
	        for (var _i = 0; _i < 8; _i += 2) {
	          vs.push(parseInt(v.substring(_i, _i + 2), 16));
	        }

	        data[k] = 'rgba(' + vs[1] + ',' + vs[2] + ',' + vs[3] + ',' + (vs[0] / 255).toFixed(1) + ')';
	      }
	      style[k] = getRealPx(data[k]);
	    }
	  }

	  // 如果有定位跟宽高信息
	  // Настраивать位置样式与宽高样式
	  if (data.frame) {
	    ['left', 'top', 'width', 'height'].forEach(function (s, index) {
	      if (isLineOne && s === 'height') {
	        if (typeof data.frame[index] === 'number') {
	          style['line-height'] = getRealPx(data.frame[index]);
	        }
	      }
	      style[s] = getRealPx(data.frame[index]);
	    });
	  }

	  if (style.display === 'flex' && style.width && style.height && style.width.indexOf('px') !== -1 && style.height.indexOf('px') !== -1) {
	    if (style['flex-direction'] === 'column') {
	      style['overflow-y'] = 'auto';
	      style['overflow-x'] = 'hidden';
	      style['width'] = parseInt(style['width']) + 5 + 'px';
	    } else {
	      style['overflow-x'] = 'auto';
	      style['overflow-y'] = 'hidden';
	      style['height'] = parseInt(style['height']) + 5 + 'px';
	    }
	  }

	  // 如果是线条
	  // Настраивать线条样式
	  if (data.vector) {
	    style.left = getRealPx(data.vector[0][0]);
	    style.top = getRealPx(data.vector[0][1]);
	    style.width = getRealPx(data.vector[1][0] - data.vector[0][0]);
	    style.height = '1px';
	    style['border-top-width'] = '1px';
	  }

	  // 如果是box容器
	  if (data.class === 'box') {
	    // Настраивать默认的flex-direction为column
	    !style['flex-direction'] && (style['flex-direction'] = 'column');
	  }
	  // 如果是img容器
	  else if (data.class === 'img') {
	      // 如果有图片地址, Настраивать背景图片
	      data.url && (style['background-image'] = 'url(' + data.url + ')');

	      // Настраивать默认图片剪裁方式为aspect-fill
	      !style['background-size'] && (style['background-size'] = 'aspect-fill');

	      getBackgroundSize(style['background-size'], style);
	    }
	    // 如果是lbl/btn容器
	    else if (data.class === 'lbl' || data.class === 'btn') {
	        // 如果有高度并且没有行高
	        // 则Настраивать行高
	        if (style.height && !style['line-height']) {
	          if (style.height === 'FIT') {
	            style['align-self'] = 'center';
	          } else {
	            style['line-height'] = style.height;
	          }
	        }

	        // 如果宽度为自适应
	        // 则Настраивать文字为居中对齐
	        if (style.width === 'FIT') {
	          style['text-align'] = 'center';
	        }
	      }

	  if (isLineOne || style['height'] && style['line-height']) {
	    style['text-overflow'] = 'ellipsis';
	    style['white-space'] = 'nowrap';
	    style['overflow'] = 'hidden';
	  }

	  // 默认去第一条action
	  if (data.action && data.action.length) {
	    action = data.action[0];
	  }

	  if (action) {
	    style['cursor'] = 'pointer';
	  }

	  if (parent && parent.display === 'flex') {
	    if (style.top) {
	      style['margin-top'] = style.top;
	      delete style.top;
	    }
	    if (style.right) {
	      style['margin-right'] = style.right;
	      delete style.right;
	    }
	    if (style.left) {
	      style['margin-left'] = style.left;
	      delete style.left;
	    }
	    if (style.bottom) {
	      style['margin-bottom'] = style.bottom;
	      delete style.bottom;
	    }
	  }
	  // 将样式转成字符串
	  for (var _k in style) {
	    styleStr += _k + ':' + style[_k] + ';';
	  }

	  // 如果是box容器
	  // 需要处理自容器的样式
	  if (data.class === 'box') {
	    var _t = '';
	    if (data.subviews && data.subviews.length) {
	      data.subviews.forEach(function (item) {
	        _t += translateData(item, data);
	      });
	    }

	    tpl = (0, _$JuicerRoot2.default)(DIV_TPL, {
	      cls: 'temp20014-box',
	      style: styleStr,
	      html: _t,
	      action: action
	    });
	  }
	  // 如果是lbl(label)容器
	  else if (data.class === 'lbl') {

	      tpl = (0, _$JuicerRoot2.default)(SPAN_TPL, {
	        cls: 'temp20014-lbl',
	        style: styleStr,
	        html: data.text,
	        action: action
	      });
	    } else if (data.class === 'img') {
	      tpl = (0, _$JuicerRoot2.default)(DIV_TPL, {
	        cls: 'temp20014-img',
	        style: styleStr,
	        action: action
	      });
	    } else if (data.class === 'line') {
	      tpl = (0, _$JuicerRoot2.default)(DIV_TPL, {
	        cls: 'temp20014-line',
	        style: styleStr,
	        action: action
	      });
	    } else if (data.class === 'btn') {
	      tpl = (0, _$JuicerRoot2.default)(DIV_TPL, {
	        cls: 'temp20014-btn' + (data['button-style'] ? ' ' + data['button-style'] : ''),
	        style: styleStr,
	        html: data.title,
	        action: action
	      });
	    }

	  return tpl;
	}

	function getRealPx(num) {
	  return typeof num === 'number' ? (num * PER_WIDTH).toFixed(0) + 'px' : num;
	}
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Created by neitherzhu on 2017/1/2.
	 */
	exports.default = function (mb) {
	  return '<a href="' + mb.value + '">' + mb.jvale.NAME + '</a>';
	};

	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _$BaseRoot = __webpack_require__(5);

	var _template = __webpack_require__(49);

	var _util = __webpack_require__(83);

	var _util2 = _interopRequireDefault(_util);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _getFileOptionData = __webpack_require__(90);

	var _getFileOptionData2 = _interopRequireDefault(_getFileOptionData);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/3/29.
	 */
	var Log = _$BaseRoot.Base.Log;

	var FILE_SUFFIX_CLS_MAP = {
	  PDF: { suffix: 'PDF', cls: 'suffix-red' },
	  AI: { suffix: 'AI', cls: 'suffix-orange' },
	  PAGES: { suffix: 'PGS', cls: 'suffix-orange' },
	  SKETCH: { suffix: 'SKE', cls: 'suffix-orange' },
	  PPTX: { suffix: 'PPT', cls: 'suffix-orange' },
	  PPT: { suffix: 'PPT', cls: 'suffix-orange' },
	  PSD: { suffix: 'PS', cls: 'suffix-blue' },
	  DOC: { suffix: 'DOC', cls: 'suffix-blue' },
	  NUMBERS: { suffix: 'NUM', cls: 'suffix-green' },
	  XLSX: { suffix: 'EXC', cls: 'suffix-green' },
	  MP4: { suffix: 'MP4', cls: 'suffix-green' },
	  TXT: { suffix: 'TXT', cls: 'suffix-gray' },
	  UNKNOWN: { suffix: '', cls: 'suffix-default' },
	  ZIP: { suffix: '', cls: 'suffix-zip' },
	  RAR: { suffix: '', cls: 'suffix-zip' },
	  '7Z': { suffix: '', cls: 'suffix-zip' }
	};

	exports.default = function (mb, msg) {

	  var data = mb.value.fileInfo;
	  var suffixLen = 0;
	  var suffix = '';
	  var moreData = {};

	  if (!data) return '';

	  moreData.size = _util2.default.getFileSize(data.nodeSize);

	  var s = data.nodeName.split('.');

	  if (s.length <= 1) {
	    Object.assign(moreData, FILE_SUFFIX_CLS_MAP.UNKNOWN);
	  } else {
	    suffix = s.pop();
	    suffixLen = _util2.default.getStrLen(suffix) + 1;
	    Object.assign(moreData, FILE_SUFFIX_CLS_MAP[suffix.toUpperCase()] || FILE_SUFFIX_CLS_MAP.UNKNOWN);
	    suffix = '.' + suffix;
	  }

	  moreData.name = _util2.default.getStrByLen(s.join(''), _constants2.default.FILE_MAX_LEN - suffixLen, 2) + suffix;

	  if (!mb.isFail && mb.value.transferInfo) {
	    data.optionsData = (0, _getFileOptionData2.default)(mb.value.transferInfo);
	    data.optionsData.isSelf = mb.isSelf;
	    data.optionsData.isRead = msg.readflag == 1;
	    data.fileOperation = _template.fileOperation;

	    (mb.value.transferInfo.status == 0 || mb.value.transferInfo.status == 1) && (data.progress = mb.value.transferInfo.progress);
	  }

	  Log.red('Файловое сообщение:', mb);

	  var html = (0, _$JuicerRoot2.default)(_template.fileMsg, Object.assign(moreData, data));
	  return html;
	};

	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Created by neitherzhu on 2017/3/31.
	 */
	exports.default = function (data) {

	  var result = {};

	  if (!data) return result;

	  // 上传/下载初始化状态
	  if (data.status == 0) {
	    // 上传中
	    if (data.type == 0) {
	      // 显示取消上传
	      result.status = 1;
	    } else {
	      // 显示空
	      result.status = -1;
	    }
	  }
	  // 上传/下载中
	  else if (data.status == 1) {
	      // 上传中
	      if (data.type == 0) {
	        // 显示取消上传
	        result.status = 1;
	      }
	      // 下载中
	      else if (data.type == 1) {
	          // 显示预览 取消下载
	          result.status = 2;
	        }
	    }
	    // 上传/下载 错误
	    else if (data.status == 2) {
	        // 上传中
	        if (data.type == 0) {
	          // 如果有本地路径
	          if (data.filePath) {
	            // 显示打开文件夹
	            result.status = 5;
	            result.path = data.filePath;
	          }
	          // 如果没有本地路径
	          else {
	              // 不显示
	              result.status = -1;
	            }
	        }
	        // 下载中
	        else if (data.type == 1) {
	            // 显示预览 重新下载
	            result.status = 4;
	          }
	      }
	      // 上传/下载 取消
	      else if (data.status == 3) {
	          // 如果是上传
	          if (data.type == 0) {
	            // 如果有本地路径
	            if (data.filePath) {
	              // 显示打开文件夹
	              result.status = 5;
	              result.path = data.filePath;
	            }
	            // 如果没有本地路径
	            else {
	                // 显示空
	                result.status = -1;
	              }
	          }
	          // 如果是下载
	          else {
	              // 显示预览 Скачать файл
	              result.status = 3;
	            }
	        }
	        // 上传/下载 成功 或者 未知状态
	        else if (data.status == 4 || data.status == 5) {
	            // 如果有本地路径
	            if (data.filePath) {
	              // 显示预览 打开文件夹
	              result.status = 0;
	              result.path = data.filePath;
	            } else {
	              // 显示预览 Скачать файл
	              result.status = 3;
	            }
	          }

	  return result;
	};

	module.exports = exports["default"];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(5);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/2/16.
	 */
	var Util = _$BaseRoot.Base.Util;

	exports.default = function (msg) {
	  var I18N = _constants2.default.I18N;
	  var LANGUAGE = _constants2.default.LANGUAGE;
	  var fromNick = Util.getUid(msg.fromid);
	  var loginUserNick = Util.getUid(_window2.default.sharedWin.loginID);
	  var tpl = '';

	  if (fromNick === loginUserNick) {
	    tpl = I18N[LANGUAGE].RECALL_MSG;
	  } else {
	    tpl = (0, _$JuicerRoot2.default)(I18N[LANGUAGE].MSG_RECALLED, { user: msg.fromid.display });
	  }

	  msg.html = tpl;

	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (extra, callback) {

	  _sdk2.default.getDynamicMsg(extra).then(function (data) {

	    if (!data) return;

	    if (typeof data === 'string') {
	      data = JSON.parse(data);
	    }

	    if (callback && !callback(data)) return;

	    Log.red('dynamic msg', data);

	    var html = (0, _temp2.default)(data);

	    if (!document.getElementById(extra.id)) return;

	    document.getElementById(extra.id).querySelector('.msg-body-html').innerHTML = html;

	    if (_window2.default.sharedWin && _window2.default.sharedWin.isBottom) {
	      Util.scrollToBottom && Util.scrollToBottom(_window2.default.sharedWin.container);
	    }
	  });
	};

	var _$BaseRoot = __webpack_require__(5);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _temp = __webpack_require__(87);

	var _temp2 = _interopRequireDefault(_temp);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/3/15.
	 */
	var Util = _$BaseRoot.Base.Util,
	    Log = _$BaseRoot.Base.Log;
	;
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _convert = __webpack_require__(67);

	var _convert2 = _interopRequireDefault(_convert);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/4/11.
	 */
	var Util = _$BaseRoot.Base.Util;

	exports.default = function (msg) {
	  var fromNick = Util.getUid(msg.fromid);
	  var loginUserNick = Util.getUid(_window2.default.sharedWin.loginID);
	  var result = { html: '', loading: false };
	  var activeCid = Util.getUid(msg.cid);
	  var isSelf = loginUserNick === fromNick;
	  var isSingle = _window2.default.sharedWin.conversationID.type === _constants2.default.TYPE.SINGLE;

	  if (!msg.msgbody) return;

	  if (typeof msg.msgbody === 'string') {
	    try {
	      msg.msgbody = JSON.parse(msg.msgbody);
	    } catch (e) {
	      result = false;
	    }
	  }

	  if (!result) return;

	  //if (Object.prototype.toString.call(msg.msgbody) !== '[object Array]') return;

	  // 如果是单聊
	  // 如果当前聊天对象的主账号跟登陆账号的主账号不一样
	  // 则需要考虑子账号查看同个主账号下其他子账号跟买家聊天的场景
	  // 这时候需要把其他子账号发的Новости也放到自己发送的这一方
	  if (isSingle) {
	    if (activeCid.split(':')[0] !== loginUserNick.split(':')[0]) {
	      isSelf = loginUserNick.split(':')[0] === fromNick.split(':')[0];
	    }
	    // 是否需要显示 买家-->子账号 这种形式的nick
	    result.isSubNick = !isSelf && Util.getUid(msg.toid) != loginUserNick;
	  }

	  result.isMe = loginUserNick === fromNick;
	  result.self = isSelf;
	  result.msgid = msg.msgid;
	  result.from = msg.fromid;
	  result.msgtime = msg.msgtime;
	  result.to = msg.toid;
	  result.cid = msg.cid;
	  result.type = msg.msgtype;
	  result.typeList = [];
	  result.subNick = fromNick.replace(':', '_');
	  result.avatar = msg.fromid.portrait;
	  result.isFail = msg.msgstatus == 2;
	  msg.svrtime && (result.svrtime = msg.svrtime);
	  result.readflag = msg.readflag;
	  result.msgstatus = msg.msgstatus;

	  result.readFlagText = _constants2.default.I18N[_constants2.default.LANGUAGE][result.readflag ? 'AT_MSG_READ' : 'AT_MSG_UNREAD'];

	  return result;
	};

	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _shake = __webpack_require__(95);

	var _shake2 = _interopRequireDefault(_shake);

	var _file = __webpack_require__(96);

	var _file2 = _interopRequireDefault(_file);

	var _chat = __webpack_require__(97);

	var _chat2 = _interopRequireDefault(_chat);

	var _video = __webpack_require__(98);

	var _video2 = _interopRequireDefault(_video);

	var _remoteAssistance = __webpack_require__(99);

	var _remoteAssistance2 = _interopRequireDefault(_remoteAssistance);

	var _appSys = __webpack_require__(100);

	var _appSys2 = _interopRequireDefault(_appSys);

	var _msgRecall = __webpack_require__(91);

	var _msgRecall2 = _interopRequireDefault(_msgRecall);

	var _exitTribe = __webpack_require__(101);

	var _exitTribe2 = _interopRequireDefault(_exitTribe);

	var _kickoutTribe = __webpack_require__(102);

	var _kickoutTribe2 = _interopRequireDefault(_kickoutTribe);

	var _joinTribe = __webpack_require__(103);

	var _joinTribe2 = _interopRequireDefault(_joinTribe);

	var _roleChange = __webpack_require__(104);

	var _roleChange2 = _interopRequireDefault(_roleChange);

	var _exitDiscussion = __webpack_require__(105);

	var _exitDiscussion2 = _interopRequireDefault(_exitDiscussion);

	var _joinDiscussion = __webpack_require__(106);

	var _joinDiscussion2 = _interopRequireDefault(_joinDiscussion);

	var _displayNameChange = __webpack_require__(107);

	var _displayNameChange2 = _interopRequireDefault(_displayNameChange);

	var _audio2text = __webpack_require__(108);

	var _audio2text2 = _interopRequireDefault(_audio2text);

	var _defaultSystemMsg = __webpack_require__(109);

	var _defaultSystemMsg2 = _interopRequireDefault(_defaultSystemMsg);

	var _multiJoin = __webpack_require__(110);

	var _multiJoin2 = _interopRequireDefault(_multiJoin);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	  ShakeFormat: _shake2.default,
	  FileFormat: _file2.default,
	  ChatFormat: _chat2.default,
	  VideoFormat: _video2.default,
	  RemoteAssistanceFormat: _remoteAssistance2.default,
	  AppSysFormat: _appSys2.default,
	  MsgRecall: _msgRecall2.default,
	  ExitTribeFormat: _exitTribe2.default,
	  KickOutTribeFormat: _kickoutTribe2.default,
	  JoinTribeFormat: _joinTribe2.default,
	  RoleChangeFormat: _roleChange2.default,
	  ExitDiscussionFormat: _exitDiscussion2.default,
	  JoinDiscussionFormat: _joinDiscussion2.default,
	  DisplayNameChange: _displayNameChange2.default,
	  AudioToTextFormat: _audio2text2.default,
	  DefaultSystemMsg: _defaultSystemMsg2.default,
	  MultiJoin: _multiJoin2.default
	}; /**
	    * Created by neitherzhu on 2016/12/6.
	    * 单聊系统Новости的解析Format
	    */

	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _$BaseRoot = __webpack_require__(5);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2016/12/6.
	                                  * 震屏
	                                  */

	exports.default = function (msg) {
	  var mb = void 0,
	      t = '',
	      user = void 0;
	  try {
	    mb = JSON.parse(msg.msgbody);
	  } catch (e) {
	    mb = false;
	  }

	  if (!mb) return false;

	  var I18N = _constants2.default.I18N;
	  var LANGUAGE = _constants2.default.LANGUAGE;
	  var isSelf = Util.getUid(msg.cid) != Util.getUid(msg.fromid);

	  if (mb.type == 0) {
	    user = msg.fromid.nick;
	    t = isSelf ? I18N[LANGUAGE].SENT_SHAKE : I18N[LANGUAGE].RECEIVED_SHAKE;
	    t = (0, _$JuicerRoot2.default)(t, { user: user });
	  } else if (mb.type == 1) {
	    t = I18N[LANGUAGE].SHAKE_FREQUENCY_LIMIT;
	  } else if (mb.type == 2) {
	    t = I18N[LANGUAGE].SHAKE_WHEN_DISABLED;
	  } else if (mb.type == 3) {
	    t = I18N[LANGUAGE].SHAKE_WHEN_OFFLINE;
	  } else if (mb.type == 4) {
	    t = I18N[LANGUAGE].SHAKE_WHEN_INVISIBLE;
	  } else if (mb.type == 5) {
	    t = I18N[LANGUAGE].SHAKE_WHEN_DO_NOT_DISTURB;
	  }

	  msg.html = t;

	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 文件Новости
	 */
	exports.default = function (msg) {
	  var mb = void 0,
	      t = '';
	  try {
	    mb = JSON.parse(msg.msgbody);
	  } catch (e) {
	    mb = false;
	  }

	  if (!mb) return false;

	  var I18N = _constants2.default.I18N;
	  var LANGUAGE = _constants2.default.LANGUAGE;

	  if (mb.sysType == 0) {
	    t = (0, _$JuicerRoot2.default)(I18N[LANGUAGE].FILE_DISABLED, { filename: mb.filename });
	  } else {
	    return false;
	  }

	  msg.html = t;

	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 语音系统Новости
	 */
	exports.default = function (msg) {
	  var mb = void 0,
	      t = '';
	  try {
	    mb = JSON.parse(msg.msgbody);
	  } catch (e) {
	    mb = false;
	  }

	  if (!mb) return false;

	  var I18N = _constants2.default.I18N;
	  var LANGUAGE = _constants2.default.LANGUAGE;
	  var user = msg.cid.display;

	  switch (mb.type) {
	    case 0:
	      t = I18N[LANGUAGE].START_CHAT;
	      break;
	    case 1:
	      t = I18N[LANGUAGE].RECEIVED_CHAT;
	      break;
	    case 2:
	      t = I18N[LANGUAGE].STOP_CHAT;
	      break;
	    case 3:
	      t = I18N[LANGUAGE].STOPPED_CHAT;
	      break;
	    case 4:
	      t = I18N[LANGUAGE].REFUSE_CHAT;
	      break;
	    case 5:
	      t = I18N[LANGUAGE].REFUSED_CHAT;
	      break;
	    case 6:
	      t = I18N[LANGUAGE].STOP_CHAT_OR_VIDEO_FIRST_ERROR;
	      break;
	    case 7:
	      t = I18N[LANGUAGE].CHATTING_OR_VIDEO_ERROR;
	      break;
	    case 8:
	      t = I18N[LANGUAGE].STOP_CHAT_FIRST_ERROR;
	      break;
	    case 9:
	      t = I18N[LANGUAGE].CHATTING_ERROR;
	      break;
	    case 10:
	      t = I18N[LANGUAGE].CHAT_CONNECT_ERROR;
	      break;
	    case 11:
	      t = I18N[LANGUAGE].CHAT_NET_ERROR;
	      break;
	    case 12:
	      t = I18N[LANGUAGE].CHAT_NO_ANSWER_ERROR;
	      break;
	  }

	  msg.html = (0, _$JuicerRoot2.default)(t, { user: user });

	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/7.
	 * 视频聊天
	 */
	exports.default = function (msg) {
	  var mb = void 0,
	      t = '';
	  try {
	    mb = JSON.parse(msg.msgbody);
	  } catch (e) {
	    mb = false;
	  }

	  if (!mb) return false;

	  var I18N = _constants2.default.I18N;
	  var LANGUAGE = _constants2.default.LANGUAGE;
	  var user = msg.cid.display;

	  switch (mb.type) {
	    case 0:
	      t = I18N[LANGUAGE].START_VIDEO;
	      break;
	    case 1:
	      t = I18N[LANGUAGE].RECEIVED_VIDEO;
	      break;
	    case 2:
	      t = I18N[LANGUAGE].STOP_VIDEO;
	      break;
	    case 3:
	      t = I18N[LANGUAGE].STOPPED_VIDEO;
	      break;
	    case 4:
	      t = I18N[LANGUAGE].REFUSE_VIDEO;
	      break;
	    case 5:
	      t = I18N[LANGUAGE].REFUSED_VIDEO;
	      break;
	    case 6:
	      t = I18N[LANGUAGE].STOP_CHAT_OR_VIDEO_FIRST_ERROR;
	      break;
	    case 7:
	      t = I18N[LANGUAGE].CHATTING_OR_VIDEO_ERROR;
	      break;
	    case 8:
	      t = I18N[LANGUAGE].STOP_CHAT_FIRST_ERROR;
	      break;
	    case 9:
	      t = I18N[LANGUAGE].VIDEOING_ERROR;
	      break;
	    case 10:
	      t = I18N[LANGUAGE].CHAT_CONNECT_ERROR;
	      break;
	    case 11:
	      t = I18N[LANGUAGE].CHAT_NET_ERROR;
	      break;
	    case 12:
	      t = I18N[LANGUAGE].CHAT_NO_ANSWER_ERROR;
	      break;
	  }

	  msg.html = (0, _$JuicerRoot2.default)(t, { user: user });

	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/7.
	 */
	exports.default = function (msg) {
	  var mb = void 0,
	      t = '';
	  try {
	    mb = JSON.parse(msg.msgbody);
	  } catch (e) {
	    mb = false;
	  }

	  if (!mb) return false;

	  var I18N = _constants2.default.I18N;
	  var LANGUAGE = _constants2.default.LANGUAGE;
	  var user = msg.cid.display;

	  switch (mb.type) {
	    case 0:
	      t = I18N[LANGUAGE].ASK_FOR_REMOTE_ASSISTANCE;
	      break;
	    case 1:
	      t = I18N[LANGUAGE].ASK_FOR_CONTROL;
	      break;
	    case 2:
	      t = I18N[LANGUAGE].ASK_TO_REMOTE_ASSISTANCE;
	      break;
	    case 3:
	      t = I18N[LANGUAGE].ASK_TO_CONTROL;
	      break;
	    case 4:
	      t = I18N[LANGUAGE].AGREED_TO_REMOTE_ASSISTANCE;
	      break;
	    case 5:
	      t = I18N[LANGUAGE].REFUSED_TO_REMOTE_ASSISTANCE;
	      break;
	    case 6:
	      t = I18N[LANGUAGE].STOPPED_TO_REMOTE_ASSISTANCE;
	      break;
	    case 7:
	      t = I18N[LANGUAGE].AGREED_TO_CONTROL;
	      break;
	    case 8:
	      t = I18N[LANGUAGE].AGREE_TO_REMOTE_ASSISTANCE;
	      break;
	    case 9:
	      t = I18N[LANGUAGE].REFUSE_TO_REMOTE_ASSISTANCE;
	      break;
	    case 10:
	      t = I18N[LANGUAGE].STOP_TO_REMOTE_ASSISTANCE;
	      break;
	    case 11:
	      t = I18N[LANGUAGE].AGREE_TO_CONTROL;
	      break;
	    case 12:
	      t = I18N[LANGUAGE].NOT_SUPPORT_FOR_REMOTE_ASSISTANCE;
	      break;
	    case 13:
	      t = I18N[LANGUAGE].NOT_SUPPORT_TO_REMOTE_ASSISTANCE;
	      break;
	    case 14:
	      t = I18N[LANGUAGE].STOP_REMOTE_ASSISTANCE_FIRST;
	      break;
	    case 15:
	      t = I18N[LANGUAGE].REMOTE_ASSISTING;
	      break;
	    case 16:
	      t = I18N[LANGUAGE].REMOTE_ASSISTANCE_NET_ERROR;
	      break;
	    case 17:
	      t = I18N[LANGUAGE].CHAT_NO_ANSWER_ERROR;
	      break;
	  }

	  msg.html = (0, _$JuicerRoot2.default)(t, { user: user });

	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Created by neitherzhu on 2016/12/7.
	 * 应用/APP 系统安全提示
	 */
	exports.default = function (msg) {
	  var mb = void 0,
	      t = '';
	  try {
	    mb = JSON.parse(msg.msgbody);
	  } catch (e) {
	    mb = false;
	  }

	  if (!mb) return false;

	  var value = mb.value;

	  try {
	    value = JSON.parse(value);
	  } catch (e) {
	    value = false;
	  }

	  if (!value) return false;

	  value.length && value.forEach(function (msg) {
	    t += msg.value;
	  });

	  msg.html = t;

	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(5);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 退出群
	 */
	var Util = _$BaseRoot.Base.Util;

	exports.default = function (msg) {
	  var mb = {};
	  try {
	    mb = JSON.parse(msg.msgbody);
	  } catch (e) {
	    mb = false;
	  }

	  if (!mb || !mb.stUID) return false;

	  var I18N = _constants2.default.I18N;
	  var LANGUAGE = _constants2.default.LANGUAGE;
	  var targetUser = Util.getUid(mb.stUID);
	  var isSelf = targetUser && targetUser === Util.getUid(_window2.default.sharedWin.loginID);
	  var user = mb.stUID.display || mb.stUID.strUserID;

	  msg.html = isSelf ? (0, _$JuicerRoot2.default)(I18N[LANGUAGE].SELF_EXIT_TRIBE, { display: mb.stTribeID.display || mb.stTribeID.tribeid }) : (0, _$JuicerRoot2.default)(I18N[LANGUAGE].EXIT_TRIBE, { user: user });

	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(5);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 被踢出群
	 */
	var Util = _$BaseRoot.Base.Util;

	exports.default = function (msg) {
	  var mb = {};
	  try {
	    mb = JSON.parse(msg.msgbody);
	  } catch (e) {
	    mb = false;
	  }

	  if (!mb || !mb.stKickedUID) return false;

	  var I18N = _constants2.default.I18N;
	  var LANGUAGE = _constants2.default.LANGUAGE;
	  var triggerUser = Util.getUid(msg.fromid);
	  var isSelfTrigger = triggerUser && triggerUser === Util.getUid(_window2.default.sharedWin.loginID);
	  var user = mb.stKickedUID.display || mb.stKickedUID.strUserID;

	  if (isSelfTrigger) {
	    msg.html = (0, _$JuicerRoot2.default)(I18N[LANGUAGE].SELF_KICK_OUT_TRIBE, { user: user });
	  } else {
	    var manager = msg.fromid.display ? msg.fromid.display : msg.fromid.nick;
	    var targetUser = Util.getUid(mb.stKickedUID);
	    var isSelfTarget = targetUser && targetUser === Util.getUid(_window2.default.sharedWin.loginID);

	    if (!isSelfTarget) {
	      msg.html = (0, _$JuicerRoot2.default)(I18N[LANGUAGE].KICK_OUT_TRIBE, { manager: manager, user: user });
	    } else {
	      msg.html = (0, _$JuicerRoot2.default)(I18N[LANGUAGE].SELF_BE_KICKED_OUT_TRIBE, { display: msg.cid.display || msg.cid.tribeid });
	    }
	  }

	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(5);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 加入群
	 */
	var Util = _$BaseRoot.Base.Util;

	exports.default = function (msg) {
	  var mb = {};
	  try {
	    mb = JSON.parse(msg.msgbody);
	  } catch (e) {
	    mb = false;
	  }

	  if (!mb || !mb.stUID) return false;

	  var I18N = _constants2.default.I18N;
	  var LANGUAGE = _constants2.default.LANGUAGE;
	  var targetUser = Util.getUid(mb.stUID);
	  var isSelf = targetUser && targetUser === Util.getUid(_window2.default.sharedWin.loginID);

	  if (!isSelf) {
	    var user = mb.stUID.display || mb.stUID.strUserID;

	    msg.html = (0, _$JuicerRoot2.default)(I18N[LANGUAGE].JOIN_TRIBE, { user: user });
	  } else {
	    msg.html = I18N[LANGUAGE].SELF_JOIN_TRIBE;
	  }

	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(5);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 群成员角色变更
	 */
	var Util = _$BaseRoot.Base.Util;

	exports.default = function (msg) {
	  var mb = {},
	      t = '';
	  try {
	    mb = JSON.parse(msg.msgbody);
	  } catch (e) {
	    mb = false;
	  }

	  if (!mb || !mb.stUID) return false;

	  var I18N = _constants2.default.I18N;
	  var LANGUAGE = _constants2.default.LANGUAGE;
	  var triggerUser = Util.getUid(msg.fromid);
	  var isSelfTrigger = triggerUser && triggerUser === Util.getUid(_window2.default.sharedWin.loginID);

	  var manager = msg.fromid.display ? msg.fromid.display : msg.fromid.nick;
	  var user = mb.stKickedUID && mb.stKickedUID.display || mb.stUID && mb.stUID.strUserID;

	  if (mb.emLevel === 3) {
	    if (isSelfTrigger) {
	      t = I18N[LANGUAGE].SELF_REMOVE_MANAGER;
	    } else {
	      var targetUser = Util.getUid(mb.stKickedUID || mb.stUID);
	      var isSelfTarget = targetUser && targetUser == Util.getUid(_window2.default.sharedWin.loginID);

	      if (isSelfTarget) {
	        t = I18N[LANGUAGE].SELF_BE_REMOVED_MANAGER;
	      } else {
	        t = I18N[LANGUAGE].REMOVE_MANAGER;
	      }
	    }
	  } else if (mb.emLevel === 2) {
	    if (isSelfTrigger) {
	      t = I18N[LANGUAGE].SELF_SET_MANAGER;
	    } else {
	      var _targetUser = Util.getUid(mb.stKickedUID);
	      var _isSelfTarget = _targetUser && _targetUser == Util.getUid(_window2.default.sharedWin.loginID);

	      if (_isSelfTarget) {
	        t = I18N[LANGUAGE].SELF_BE_SET_MANAGER;
	      } else {
	        t = I18N[LANGUAGE].SET_MANAGER;
	      }
	    }
	  } else {
	    return false;
	  }

	  msg.html = (0, _$JuicerRoot2.default)(t, { manager: manager, user: user });
	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(5);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/24.
	 */
	var Util = _$BaseRoot.Base.Util;

	exports.default = function (msg) {
	  var mb = {};
	  try {
	    mb = JSON.parse(msg.msgbody);
	  } catch (e) {
	    mb = false;
	  }

	  if (!mb || !mb.stUID) return false;

	  var I18N = _constants2.default.I18N;
	  var LANGUAGE = _constants2.default.LANGUAGE;
	  var targetUser = Util.getUid(mb.stUID);
	  var isSelf = targetUser && targetUser === Util.getUid(_window2.default.sharedWin.loginID);
	  var user = mb.stUID.display || mb.stUID.strUserID;

	  msg.html = isSelf ? (0, _$JuicerRoot2.default)(I18N[LANGUAGE].SELF_EXIT_DISCUSSION, { display: mb.stTribeID.display || mb.stTribeID.tribeid }) : (0, _$JuicerRoot2.default)(I18N[LANGUAGE].EXIT_DISCUSSION, { user: user });

	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(5);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/24.
	 */
	var Util = _$BaseRoot.Base.Util;

	exports.default = function (msg) {
	  var mb = {};
	  try {
	    mb = JSON.parse(msg.msgbody);
	  } catch (e) {
	    mb = false;
	  }

	  if (!mb || !mb.stUID) return false;

	  var I18N = _constants2.default.I18N;
	  var LANGUAGE = _constants2.default.LANGUAGE;
	  var targetUser = Util.getUid(mb.stUID);
	  var isSelf = targetUser && targetUser === Util.getUid(_window2.default.sharedWin.loginID);

	  if (!isSelf) {
	    var user = mb.stUID.display || mb.stUID.strUserID;

	    msg.html = (0, _$JuicerRoot2.default)(I18N[LANGUAGE].JOIN_DISCUSSION, { user: user });
	  } else {
	    msg.html = I18N[LANGUAGE].SELF_JOIN_DISCUSSION;
	  }

	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _$BaseRoot = __webpack_require__(5);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/2/6.
	 */
	var Util = _$BaseRoot.Base.Util;

	exports.default = function (msg) {
	  var mb = {};
	  try {
	    mb = JSON.parse(msg.msgbody);
	  } catch (e) {
	    mb = false;
	  }

	  if (!mb || !mb.items) return false;

	  Util.setCidType(msg.cid);

	  var I18N = _constants2.default.I18N;
	  var LANGUAGE = _constants2.default.LANGUAGE;
	  var isTribe = msg.cid.type === _constants2.default.TYPE.TRIBE;
	  var triggerUser = Util.getUid(msg.fromid);
	  var isSelf = triggerUser && triggerUser === Util.getUid(_window2.default.sharedWin.loginID);
	  var NAME = mb.items.NAME;
	  var html = '';

	  if (isTribe) {
	    html = (0, _$JuicerRoot2.default)(isSelf ? I18N[LANGUAGE].SELF_TRIBE_DISPLAY_NAME_CHANGE : I18N[LANGUAGE].TRIBE_DISPLAY_NAME_CHANGE, { user: msg.fromid.display, newDisplay: NAME });
	  } else {
	    html = (0, _$JuicerRoot2.default)(isSelf ? I18N[LANGUAGE].SELF_DISCUSSION_DISPLAY_NAME_CHANGE : I18N[LANGUAGE].DISCUSSION_DISPLAY_NAME_CHANGE, { user: msg.fromid.display, newDisplay: NAME });
	  }

	  msg.html = html;

	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function (msg) {
	  if (!msg.audioText) {
	    msg.html = _constants2.default.I18N[_constants2.default.LANGUAGE].AUDIO_TO_TEXT_OLD_TIP;
	  } else {
	    msg.html = _constants2.default.I18N[_constants2.default.LANGUAGE].AUDIO_TO_TEXT_TIP;
	  }
	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (msg) {
	  var html = '';
	  if (msg && msg.msgbody) {
	    if (typeof msg.msgbody === 'string') {
	      try {
	        msg.msgbody = JSON.parse(msg.msgbody);
	        html = msg.msgbody.length && msg.msgbody[0].value;
	      } catch (e) {}
	    }
	  }
	  msg.html = html;
	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _$BaseRoot = __webpack_require__(5);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/4/17.
	 */
	var Util = _$BaseRoot.Base.Util;

	exports.default = function (msg) {
	  var mb = {};
	  try {
	    mb = JSON.parse(msg.msgbody);
	  } catch (e) {
	    mb = false;
	  }

	  if (!mb || !mb.stUIDs) return false;

	  Util.setCidType(msg.cid);

	  var I18N = _constants2.default.I18N;
	  var LANGUAGE = _constants2.default.LANGUAGE;
	  var isTribe = msg.cid.type === _constants2.default.TYPE.TRIBE;
	  var triggerUser = Util.getUid(msg.fromid);
	  var isSelf = triggerUser && triggerUser === Util.getUid(_window2.default.sharedWin.loginID);
	  var inviter = isSelf ? _constants2.default.I18N[_constants2.default.LANGUAGE].YOU : msg.fromid.display || msg.fromid.nick;
	  var users = '';
	  var html = '';
	  var suffix = '';

	  // 超过20个人时, 只显示20个人的名字加...
	  if (mb.stUIDs.length > 20) {
	    suffix = '...';
	    mb.stUIDs = mb.stUIDs.splice(0, 20);
	  }

	  mb.stUIDs.forEach(function (user) {
	    users += (user.display || user.nick) + ',';
	  });

	  users = users.substring(0, users.length - 1);

	  users += suffix;

	  if (isTribe) {
	    html = (0, _$JuicerRoot2.default)(I18N[LANGUAGE].INVITE_IN_TRIBE, { inviter: inviter, users: users });
	  } else {
	    html = (0, _$JuicerRoot2.default)(I18N[LANGUAGE].INVITE_IN_DISCUSSION, { inviter: inviter, users: users });
	  }

	  msg.html = html;

	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _start = __webpack_require__(112);

	var _start2 = _interopRequireDefault(_start);

	var _getAtMsgReadState = __webpack_require__(113);

	var _getAtMsgReadState2 = _interopRequireDefault(_getAtMsgReadState);

	var _setAtMsgReadState = __webpack_require__(115);

	var _setAtMsgReadState2 = _interopRequireDefault(_setAtMsgReadState);

	var _updateATMsgReadCountStatus = __webpack_require__(116);

	var _updateATMsgReadCountStatus2 = _interopRequireDefault(_updateATMsgReadCountStatus);

	var _bindEvents = __webpack_require__(117);

	var _bindEvents2 = _interopRequireDefault(_bindEvents);

	var _cacheEvent = __webpack_require__(124);

	var _cacheEvent2 = _interopRequireDefault(_cacheEvent);

	var _getMsgReadStatus = __webpack_require__(125);

	var _getMsgReadStatus2 = _interopRequireDefault(_getMsgReadStatus);

	var _setMsgReadStatus = __webpack_require__(126);

	var _setMsgReadStatus2 = _interopRequireDefault(_setMsgReadStatus);

	var _updateMsgReadStatus = __webpack_require__(127);

	var _updateMsgReadStatus2 = _interopRequireDefault(_updateMsgReadStatus);

	var _msgReadStatus = __webpack_require__(128);

	var _msgReadStatus2 = _interopRequireDefault(_msgReadStatus);

	var _sendMsgStatusChange = __webpack_require__(129);

	var _sendMsgStatusChange2 = _interopRequireDefault(_sendMsgStatusChange);

	var _getAudioShowTextSetting = __webpack_require__(130);

	var _getAudioShowTextSetting2 = _interopRequireDefault(_getAudioShowTextSetting);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/2/20.
	 */
	exports.default = {
	    start: _start2.default,
	    getAtMsgReadState: _getAtMsgReadState2.default,
	    setAtMsgReadState: _setAtMsgReadState2.default,
	    updateATMsgReadCountStatus: _updateATMsgReadCountStatus2.default,
	    bindEvents: _bindEvents2.default,
	    cacheEvent: _cacheEvent2.default,
	    getMsgReadStatus: _getMsgReadStatus2.default,
	    setMsgReadStatus: _setMsgReadStatus2.default,
	    updateMsgReadStatus: _updateMsgReadStatus2.default,
	    msgReadStatus: _msgReadStatus2.default,
	    sendMsgStatusChange: _sendMsgStatusChange2.default,
	    getAudioShowTextSetting: _getAudioShowTextSetting2.default
	};
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _$IMSDKRoot = __webpack_require__(26);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _index = __webpack_require__(111);

	var _index2 = _interopRequireDefault(_index);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _util = __webpack_require__(83);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var start = new _$BaseRoot.Base.ActionCreator(); /**
	                                                  * Created by neitherzhu on 2017/2/20.
	                                                  */

	start.doSync = function () {
	  _$JuicerRoot2.default.register('dateFormatter', _util2.default.dateFormatter);
	  _$JuicerRoot2.default.register('timeFormatter', _util2.default.timeFormatter);
	  _index2.default.bindEvents.action();
	  _index2.default.getAudioShowTextSetting.action();
	};

	exports.default = start;
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _event = __webpack_require__(114);

	var _event2 = _interopRequireDefault(_event);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 获取群@Новости已读未读人数
	 */
	var getAtMsgReadState = new _$BaseRoot.Base.ActionCreator();

	getAtMsgReadState.actionType = 'async';
	getAtMsgReadState.doAsync = function (context, cid, list) {

	  if (!list.length) {
	    return new Promise(function (resolve, reject) {
	      reject('list is empty!');
	    });
	  }

	  return _sdk2.default.getAtMsgReadState({
	    tribeid: cid,
	    items: list
	  });
	};

	getAtMsgReadState.after(function (context, data) {
	  _event2.default.emit(_constants2.default.Event.ON_AT_MSG_STATUS_CHANGE, data);
	});

	getAtMsgReadState.error = function (err) {
	  console.error('Action getAtMsgReadState Error', err);
	};

	exports.default = getAtMsgReadState;
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                          value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var Event = new _$BaseRoot.Base.Event(); /**
	                                          * Created by neitherzhu on 2017/1/3.
	                                          */
	exports.default = Event;
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util,
	    Cache = _$BaseRoot.Base.Cache; /**
	                                    * Created by neitherzhu on 2016/12/6.
	                                    * Настраивать群@Новости已读状态
	                                    */

	var setAtMsgReadState = new _$BaseRoot.Base.ActionCreator();

	setAtMsgReadState.before(function (context, cid, list) {
	    var uid = Util.getUid(cid);
	    var cache = Cache.get(uid);
	    var cacheList = cache.setReadStateList || [];

	    list = cacheList ? cacheList.concat(list || []) : list;

	    if (!list || !list.length) return false;

	    var listToSet = [];
	    var listToCache = [];
	    var wh = window.innerHeight;
	    var el = void 0;
	    var rect = void 0;
	    if (_window2.default.IS_CHAT_WINDOW_COVERED) {
	        listToCache = list;
	    } else {

	        list.forEach(function (msg) {
	            if (!(el = document.getElementById(msg.msgid))) return;

	            console.info(msg.msgid);

	            rect = el.getBoundingClientRect();

	            // 如果在可视区域内
	            if (rect.top > 0 && rect.bottom <= wh) {
	                listToSet.push({
	                    userid: msg.userid,
	                    msgid: msg.msgid
	                });
	            } else {
	                listToCache.push(msg);
	            }
	        });
	    }

	    listToCache.length && Cache.set(uid, {
	        setReadStateList: listToCache
	    });

	    listToSet.length && (context.list = listToSet);
	});

	setAtMsgReadState.doSync = function (context, cid, list) {
	    if (context.list && context.list.length) {
	        _sdk2.default.setAtMsgReadState({
	            tribeid: cid,
	            items: context.list
	        }).catch(function () {
	            var uid = Util.getUid(cid);
	            var cache = Cache.get(uid);
	            var cacheList = cache.setReadStateList || [];
	            Cache.set(uid, {
	                setReadStateList: cacheList.concat(context.list)
	            });
	        });
	    }
	};

	setAtMsgReadState.error = function (err) {
	    console.error('Action setAtMsgReadState Error', err);
	};

	exports.default = setAtMsgReadState;
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	} /**
	   * Created by neitherzhu on 2016/12/8.
	   * 更新群@Новости的未读已读人数
	   */

	var Cache = _$BaseRoot.Base.Cache;

	var updateATMsgReadCountStatus = new _$BaseRoot.Base.ActionCreator();

	updateATMsgReadCountStatus.doSync = function (context, data) {
	  var el = void 0,
	      tpl = '';

	  data.forEach(function (msg) {
	    if (!msg.msgid) return;

	    if (!(el = document.getElementById(msg.msgid))) return;

	    var readCount = msg.readedcount;
	    var unreadCount = msg.unreadcount;
	    // 如果没有已读未读数量, 则移除@Новости的样式
	    if (!readCount && !unreadCount) {
	      var n = Cache.get('TO_BE_AT_MSG')[data.msgid];
	      if (!n || n > 1) {
	        Cache.clearInKey('TO_BE_AT_MSG', data.msgid);
	        return [].concat(_toConsumableArray(el.querySelectorAll('.' + _constants2.default.CLS.AT_MSG_WITH_STYLE))).forEach(function (el) {
	          el.classList.remove(_constants2.default.CLS.AT_MSG_WITH_STYLE);
	        });
	      } else {
	        return Cache.set('TO_BE_AT_MSG')[data.msgid] = n + 1;
	      }
	    }

	    Cache.clearInKey('TO_BE_AT_MSG', data.msgid);

	    var only = readCount + unreadCount === 1;
	    var done = false;
	    var stateEl = el.querySelector('.' + _constants2.default.CLS.MSG_STATUS_CONTAINER);

	    // 未读
	    if (readCount === 0) {
	      tpl = _constants2.default.I18N[_constants2.default.LANGUAGE][only ? 'AT_MSG_UNREAD' : 'ALL_AT_MSG_UNREAD'];
	    } else if (unreadCount === 0) {
	      tpl = _constants2.default.I18N[_constants2.default.LANGUAGE][only ? 'AT_MSG_READ' : 'ALL_AT_MSG_READ'];
	      done = true;
	      el.classList.add(_constants2.default.CLS.COMPLETED_AT_MSG);
	    } else {
	      tpl = (0, _$JuicerRoot2.default)(_constants2.default.I18N[_constants2.default.LANGUAGE].AT_MSG_READ_UNREAD_COUNT, { readCount: readCount, unreadCount: unreadCount });
	    }

	    stateEl && (stateEl.innerHTML = (0, _$JuicerRoot2.default)(_template2.default.atMsgReadCount, { id: msg.msgid, tpl: tpl, done: done }));
	  });
	};

	exports.default = updateATMsgReadCountStatus;
	module.exports = exports['default'];

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _$IMSDKRoot = __webpack_require__(26);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _index = __webpack_require__(111);

	var _index2 = _interopRequireDefault(_index);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _event = __webpack_require__(114);

	var _event2 = _interopRequireDefault(_event);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _coms = __webpack_require__(118);

	var _fileParse = __webpack_require__(123);

	var _fileParse2 = _interopRequireDefault(_fileParse);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	    if (Array.isArray(arr)) {
	        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	            arr2[i] = arr[i];
	        }return arr2;
	    } else {
	        return Array.from(arr);
	    }
	} /**
	   * Created by neitherzhu on 2017/2/21.
	   */

	var Util = _$BaseRoot.Base.Util,
	    Cache = _$BaseRoot.Base.Cache;

	var bindEvents = new _$BaseRoot.Base.ActionCreator();

	bindEvents.doSync = function () {
	    var param = Util.getParam(location.search.substring(1));
	    var DLG_NAME = param.dlguniqname || '';
	    var IS_CHAT_WINDOW_COVERED = param.IsChatWindowCovered;

	    _window2.default.IS_CHAT_WINDOW_COVERED = IS_CHAT_WINDOW_COVERED;

	    _sdk2.default.isChatWindowCovered().then(function (data) {
	        if (!data || !data.result) return;

	        _$IMSDKRoot2.default.fire(_constants2.default.Event.CONVERSATION_PREFIX + DLG_NAME + _constants2.default.Event.WINDOW_COVER_CHANGE_SUFFIX, {
	            bCovered: data.result.bIsChatWindowCovered
	        });
	    });
	    /**
	     * 更新群@Новости已读未读人数
	     */
	    _event2.default.on(_constants2.default.Event.ON_AT_MSG_STATUS_CHANGE, function (data) {
	        _index2.default.updateATMsgReadCountStatus.action(data);
	    });

	    _$IMSDKRoot2.default.on(_constants2.default.Event.SHOW_AUDIO_TEXT_SETTING_CHANGE, function (data) {
	        _window2.default.sharedWin.container.classList[data.show ? 'add' : 'remove']('show-audio-text');
	    });

	    /**
	     * 窗口遮盖变化事件通知
	     */
	    _$IMSDKRoot2.default.on(_constants2.default.Event.CONVERSATION_PREFIX + DLG_NAME + _constants2.default.Event.WINDOW_COVER_CHANGE_SUFFIX, function (data) {
	        _window2.default.IS_CHAT_WINDOW_COVERED = data.bCovered;

	        var conversationID = _window2.default.sharedWin.conversationID;
	        if (!data.bCovered && conversationID) {
	            if (conversationID.type === _constants2.default.TYPE.SINGLE) {
	                _index2.default.setMsgReadStatus.action(conversationID);
	            } else {
	                _index2.default.setAtMsgReadState.action(conversationID);
	            }
	        }
	    });

	    /**
	     * 群@Новости已读数量变更
	     */
	    _$IMSDKRoot2.default.on(_constants2.default.Event.ON_AT_MSG_READ, function (data) {
	        if (!data || !data.cid) return;

	        if (Util.getUid(data.cid) === Util.getUid(_window2.default.sharedWin.conversationID)) {
	            _index2.default.getAtMsgReadState.action(data.cid, [{
	                userid: _window2.default.sharedWin.loginID,
	                msgid: data.msgid
	            }]);
	        }
	    });

	    /**
	     * 语音播放停止
	     */
	    _$IMSDKRoot2.default.on(_constants2.default.Event.ON_AUDIO_STOP, function () {
	        [].concat(_toConsumableArray(document.querySelectorAll('.' + _constants2.default.CLS.AUDIO_PLAYING))).forEach(function (el) {
	            el.classList.remove(_constants2.default.CLS.AUDIO_PLAYING);
	        });
	    });

	    /**
	     * 文件传输过程
	     */
	    _$IMSDKRoot2.default.on(_constants2.default.Event.UPDATE_FILE_TRANSFER_INFO, function (data) {
	        if (!data || !data.cid) return;

	        var uid = Util.getUidByCid(data.cid);
	        // 如果不是当前联系对象, 需要缓存
	        if (uid !== Util.getUid(_window2.default.sharedWin.conversationID)) {

	            var unResolveEvents = Cache.get(uid).unResolveEvents;

	            if (unResolveEvents && unResolveEvents.length) {
	                Object.assign(unResolveEvents[0].data, data);
	                return;
	            }

	            data.event = _constants2.default.Event.UPDATE_FILE_TRANSFER_INFO;
	            return _index2.default.cacheEvent.action(uid, data);
	        }

	        (0, _fileParse2.default)(data.id, data.transferInfo);
	    });

	    /**
	     * 文件信息变更
	     */
	    _$IMSDKRoot2.default.on(_constants2.default.Event.UPDATE_FILE_INFO, function (data) {

	        if (!data || !data.cid || !data.id || !data.fileInfo) return;

	        var uid = Util.getUidByCid(data.cid);
	        // 如果不是当前联系对象, 需要缓存
	        if (uid !== Util.getUid(_window2.default.sharedWin.conversationID)) {

	            data.event = _constants2.default.Event.UPDATE_FILE_INFO;
	            return _index2.default.cacheEvent.action(uid, data);
	        }

	        var fileMsg = document.getElementById('J_file' + data.id);
	        var result = data.fileInfo;
	        if (!fileMsg) return;

	        result.id && (fileMsg.id = 'J_file' + result.id);
	        result.parentId && fileMsg.setAttribute('data-pid', result.parentId);
	        result.nodeType && fileMsg.setAttribute('data-type', result.nodeType);
	        result.md5 && fileMsg.setAttribute('data-md5', result.md5);

	        if (result.nodeName) {
	            fileMsg.setAttribute('data-name', result.nodeName);

	            var s = result.nodeName.split('.');
	            var suffix = '';
	            var suffixLen = 0;
	            var name = '';
	            var fileName = fileMsg.querySelector('.file-name');

	            if (!fileName) return;

	            if (s.length > 1) {
	                suffix = '.' + s.pop();
	                suffixLen = Util.getStrLen(suffix);
	            }

	            name = Util.getStrByLen(s.join(''), _constants2.default.FILE_MAX_LEN - suffixLen, 2) + suffix;

	            fileName.title = result.nodeName;
	            fileName.innerText = name;
	        }
	    });

	    // Новости状态变更
	    _$IMSDKRoot2.default.on(_constants2.default.Event.CHAT_SEND_MSG_STATUS_CHANGE + ' ' + _constants2.default.Event.TRIBE_SEND_MSG_STATUS_CHANGE + ' ' + _constants2.default.Event.SEND_MSG_STATUS_CHANGE, function (data) {
	        if (!data || !data.cid || !data.msgid) return;

	        var uid = Util.getUid(data.cid);
	        // 如果不是当前联系对象, 需要缓存
	        if (uid !== Util.getUid(_window2.default.sharedWin.conversationID)) {
	            data.event = _constants2.default.Event.SEND_MSG_STATUS_CHANGE;
	            return _index2.default.cacheEvent.action(uid, data);
	        }

	        _index2.default.sendMsgStatusChange.action(data);
	    });

	    // 单聊Новости已读
	    _$IMSDKRoot2.default.on(_constants2.default.Event.CHAT_MSG_READ, function (data) {
	        if (!data || !data.cid || !data.items || !data.items.length) return;

	        var uid = Util.getUid(data.cid);
	        var currentUid = Util.getUid(_window2.default.sharedWin.conversationID);
	        // 如果不是当前联系对象, 需要缓存
	        if (uid !== currentUid) {

	            data.event = _constants2.default.Event.CHAT_MSG_READ;
	            return _index2.default.cacheEvent.action(uid, data);
	        }

	        _index2.default.updateMsgReadStatus.action(data.items);
	    });

	    // 更新Новости已读未读状态
	    _event2.default.on(_constants2.default.Event.MSG_STATUS_CHANGE, function (data) {
	        _index2.default.updateMsgReadStatus.action(data);
	    });

	    document.body.addEventListener('click', function (ev) {
	        var target = ev.target;

	        if (!target) return;

	        if (target = Util.parents(target, 'J_tempAction')) {
	            var box = Util.parents(target, 'temp20014-wrap');

	            if (!box) return;

	            console.info('Вызов выполнения клиентского интерфейса action: ', target.getAttribute('data-action'));

	            var absX = ev.screenX - ev.clientX;
	            var basY = ev.screenY - ev.clientY;
	            var actionRect = target.getBoundingClientRect();
	            var boxRect = box.getBoundingClientRect();
	            var actionX = absX + actionRect.left;
	            var actionY = basY + actionRect.top;
	            var boxX = absX + boxRect.left;
	            var boxY = basY + boxRect.top;

	            _sdk2.default.doWXAction({
	                wangxurl: target.getAttribute('data-action'),
	                actionrect: {
	                    let: actionX,
	                    top: actionY,
	                    right: actionX + actionRect.width,
	                    bottom: actionY + actionRect.height
	                },
	                cardrect: {
	                    left: boxX,
	                    top: boxY,
	                    right: boxX + boxRect.width,
	                    bottom: boxY + boxRect.height
	                }
	            }).catch(function (e) {
	                var errTip = e && e.errMsg || _constants2.default.I18N[_constants2.default.LANGUAGE].DO_WX_ACTION_ERROR;

	                _coms.Toast.show(errTip);
	            });
	        }
	    });
	};

	exports.default = bindEvents;
	module.exports = exports['default'];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _popupOver = __webpack_require__(119);

	var _popupOver2 = _interopRequireDefault(_popupOver);

	var _toast = __webpack_require__(121);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/23.
	 */
	exports.default = {
	  PopupOver: _popupOver2.default,
	  Toast: _toast2.default
	};
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}(); /**
	      * Created by neitherzhu on 2016/12/9.
	      * 窗口内浮层, 负责确定弹出的位置
	      */

	__webpack_require__(120);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var PopupOver = function () {
	  function PopupOver(container, config) {
	    _classCallCheck(this, PopupOver);

	    this.container = container;
	    this.box = null;
	    this.visible = false;
	    this.config = config;

	    return this;
	  }

	  _createClass(PopupOver, [{
	    key: 'calculate',
	    value: function calculate(x, y) {
	      if (!this.box) return {};

	      var newx = x,
	          newy = y;

	      if (!this.config || this.config && newx !== this.config.x || newy !== this.config.y) {
	        var offx = 5,
	            offy = 5;
	        var boxw = this.box.clientWidth,
	            boxh = this.box.clientHeight;
	        var winw = window.innerWidth,
	            winh = window.innerHeight;

	        // 左右都超出, 展示在нажмите на位置的中间
	        if (x + boxw > winw && x < boxw) {
	          newx = (winw - boxw) / 2;
	        } else {
	          newx = x + boxw > winw ? x - boxw - offx : x + offx;
	          newx = Math.min(newx, winw - boxw); // 不能超右边界
	          newx = Math.max(newx, 0); // 不能超左边界
	        }

	        // 上下都超出
	        if (y + boxh > winh && y < boxh) {
	          newy = (winh - boxh) / 2;
	        } else {
	          newy = y + boxh > winh ? y - boxh - offy : y + offy;
	          newy = Math.min(newy, winh - boxh); // 不能超下边界
	          newy = Math.max(newy, 0); // 不能超上边界
	        }
	      }

	      var p1 = x >= 0 ? 'left' : 'right';
	      var p2 = y >= 0 ? 'top' : 'bottom';
	      var result = {};

	      result[p1] = Math.abs(newx) + 'px';
	      result[p2] = Math.abs(newy) + 'px';

	      return result;
	    }
	  }, {
	    key: 'getStyle',
	    value: function getStyle(config) {
	      var x = config.x,
	          y = config.y,
	          visible = config.visible;

	      var style = this.calculate(x, y);
	      var str = '';

	      style.visibility = visible ? 'visible' : 'hidden';
	      style.opacity = visible ? '1' : '0';
	      this.visible = visible;

	      for (var k in style) {
	        str += k + ':' + style[k] + ';';
	      }

	      return str;
	    }
	  }, {
	    key: 'render',
	    value: function render(config) {
	      var cls = config.cls,
	          tpl = config.tpl,
	          html = config.html,
	          parent = config.parent;

	      var style = this.getStyle(config);

	      cls || (cls = '');

	      if (!this.box) {

	        var div = document.createElement('div');

	        tpl && (div.innerHTML = tpl);
	        div.className = 'popup-over ' + cls;

	        this.box = div;

	        (parent || document.body).appendChild(div);
	      }

	      this.box.setAttribute('style', style);
	      html && (this.box.innerHTML = html);
	    }
	  }]);

	  return PopupOver;
	}();

	exports.default = PopupOver;
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}(); /**
	      * Created by neitherzhu on 2017/3/3.
	      */

	__webpack_require__(122);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * Новости区域toast
	 */
	var Toast = function () {
	  function Toast(container) {
	    _classCallCheck(this, Toast);

	    this.container = container;
	    this.AUTO_REMOVE_TIME = 2000;

	    return this;
	  }

	  _createClass(Toast, [{
	    key: 'show',
	    value: function show(text, duration) {
	      var _this = this;

	      duration = duration || this.AUTO_REMOVE_TIME;

	      if (this.toast) {
	        clearTimeout(this.removeTimeout);
	        this.toast.querySelector('.J_toastText').innerText = text;
	      } else {
	        var div = document.createElement('div');
	        div.className = 'toast';
	        div.innerHTML = '<span class="J_toastText">' + text + '</span>';
	        this.container.appendChild(div);
	        this.toast = div;
	      }

	      this.removeTimeout = setTimeout(function () {
	        _this.remove();
	      }, duration);
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      if (this.toast) {
	        this.toast.parentNode.removeChild(this.toast);
	        this.toast = null;
	      }
	    }
	  }]);

	  return Toast;
	}();

	exports.default = Toast;
	module.exports = exports['default'];

/***/ },
/* 122 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(49);

	var _getFileOptionData = __webpack_require__(90);

	var _getFileOptionData2 = _interopRequireDefault(_getFileOptionData);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function (id, data) {
	  if (!id || !data) return;

	  var fileMsg = document.getElementById('J_file' + id);

	  if (!fileMsg) return;

	  var operationData = (0, _getFileOptionData2.default)(data);

	  // 未开始上传/下载
	  // 上传/下载中
	  if (data.status == 0 || data.status == 1) {

	    var progressEl = fileMsg.querySelector('.file-progress');
	    if (!progressEl) return;

	    var innerProgressEl = progressEl.querySelector('i');
	    if (!innerProgressEl) return;

	    progressEl.classList.remove('hidden');
	    innerProgressEl.style.width = data.progress + '%';

	    // 针对大文件进行动画处理,小文件动画效果不明显
	    if (data.progress > 1 && data.progress < 4) {
	      innerProgressEl.classList.add('animation-width');
	    }
	  }
	  // 上传/下载错误
	  else if (data.status == 2) {
	      var _progressEl = fileMsg.querySelector('.file-progress');
	      _progressEl && _progressEl.classList.add('hidden');
	    }
	    // 上传/下载被取消
	    else if (data.status == 3) {
	        if (data.type == 0) {
	          var msgEl = document.getElementById(id);
	          msgEl && msgEl.parentNode.removeChild(msgEl);
	        } else {
	          var _progressEl2 = fileMsg.querySelector('.file-progress');
	          _progressEl2 && _progressEl2.classList.add('hidden');
	        }
	      }
	      // 上传/下载成功
	      else if (data.status == 4) {
	          var _progressEl3 = fileMsg.querySelector('.file-progress');
	          if (!_progressEl3) return;

	          var _innerProgressEl = _progressEl3.querySelector('i');

	          _progressEl3.classList.add('hidden');

	          //if(data.type == 1) {
	          //  progressEl.classList.add('hidden');
	          //}

	          _innerProgressEl && (_innerProgressEl.style.width = data.progress + '%');
	        }
	        // 未知状态
	        else if (data.status == 5) {
	            var _progressEl4 = fileMsg.querySelector('.file-progress');
	            _progressEl4 && _progressEl4.classList.add('hidden');
	          }

	  if (data.type == 0) {
	    operationData.isSelf = true;
	  }

	  fileMsg.querySelector('.file-operation').innerHTML = (0, _$JuicerRoot2.default)(_template.fileOperation, operationData);
	}; /**
	    * Created by neitherzhu on 2017/3/31.
	    */

	module.exports = exports['default'];

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var Cache = _$BaseRoot.Base.Cache; /**
	                                    * Created by neitherzhu on 2016/12/8.
	                                    * 缓存没有触发的事件
	                                    */

	var cacheEvent = new _$BaseRoot.Base.ActionCreator();

	cacheEvent.doSync = function (context, uid, data) {

	  var unResolveEvents = Cache.get(uid).unResolveEvents || [];
	  unResolveEvents.push({
	    event: data.event,
	    data: data
	  });

	  Cache.set(uid, { unResolveEvents: unResolveEvents });
	};

	exports.default = cacheEvent;
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _event = __webpack_require__(114);

	var _event2 = _interopRequireDefault(_event);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/2/15.
	 */
	var getMsgReadStatus = new _$BaseRoot.Base.ActionCreator();

	getMsgReadStatus.actionType = 'async';
	getMsgReadStatus.doAsync = function (context, cid, list) {

	  if (!list.length) {
	    return new Promise(function (resolve, reject) {
	      reject('list is empty!');
	    });
	  }

	  context.list = list;

	  return _sdk2.default.getSingleMsgReadStatus({
	    cid: cid,
	    items: list
	  });
	};

	getMsgReadStatus.after(function (context, data) {
	  data = data.result;
	  var readMap = data && data.length ? {} : null;

	  data.forEach(function (msg) {
	    readMap[msg.msgid] = 1;
	  });

	  context.list.forEach(function (msg) {
	    if (!readMap || !readMap[msg.msgid]) {
	      msg.unread = 1;
	    }
	  });

	  _event2.default.emit(_constants2.default.Event.MSG_STATUS_CHANGE, context.list);
	});

	getMsgReadStatus.error = function (err) {
	  console.error('Action getMsgReadStatus Error', err);
	};

	exports.default = getMsgReadStatus;
	module.exports = exports['default'];

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _util = __webpack_require__(83);

	var _util2 = _interopRequireDefault(_util);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/2/15.
	 */
	var Cache = _$BaseRoot.Base.Cache;

	var setMsgReadState = new _$BaseRoot.Base.ActionCreator();

	setMsgReadState.before(function (context, cid, list) {
	    var uid = _util2.default.getUid(cid);
	    var cache = Cache.get(uid);
	    var cacheList = cache.msgReadStateListToSet || [];

	    list = cacheList ? cacheList.concat(list || []) : list;

	    if (!list || !list.length) return false;

	    var listToSet = [];
	    var listToCache = [];
	    var wh = window.innerHeight;
	    var el = void 0;
	    var rect = void 0;

	    if (_window2.default.IS_CHAT_WINDOW_COVERED) {
	        listToCache = list;
	    } else {
	        list.forEach(function (msg) {
	            if (!(el = document.getElementById(msg.msgid))) return;

	            rect = el.getBoundingClientRect();

	            if (rect.height < wh) {
	                // 如果在可视区域内
	                if (rect.top > 0 && rect.bottom <= wh) {
	                    listToSet.push({
	                        svrtime: msg.svrtime || '0',
	                        msgtime: msg.msgtime,
	                        msgid: msg.msgid
	                    });
	                } else {
	                    listToCache.push(msg);
	                }
	            } else {
	                if (rect.top >= wh - rect.height && rect.top < wh || rect.bottom > 0 && rect.bottom <= rect.height) {
	                    listToSet.push({
	                        svrtime: msg.svrtime || '0',
	                        msgtime: msg.msgtime,
	                        msgid: msg.msgid
	                    });
	                } else {
	                    listToCache.push(msg);
	                }
	            }
	        });
	    }

	    Cache.set(uid, {
	        msgReadStateListToSet: listToCache
	    });

	    listToSet.length && (context.list = listToSet);
	});

	setMsgReadState.doSync = function (context, cid, list) {
	    if (context.list && context.list.length) {
	        _sdk2.default.setSingleMsgReadStatus({
	            cid: cid,
	            items: context.list
	        }).catch(function () {
	            var uid = _util2.default.getUid(cid);
	            var cache = Cache.get(uid);
	            var cacheList = cache.setReadStateList || [];
	            Cache.set(uid, {
	                msgReadStateListToSet: cacheList.concat(context.list)
	            });
	        });
	    }
	};

	setMsgReadState.error = function (err) {
	    console.error('Action setMsgReadState Error', err);
	};

	exports.default = setMsgReadState;
	module.exports = exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _event = __webpack_require__(114);

	var _event2 = _interopRequireDefault(_event);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _index = __webpack_require__(111);

	var _index2 = _interopRequireDefault(_index);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2017/2/15.
	                                  */

	var updateMsgReadStatus = new _$BaseRoot.Base.ActionCreator();

	updateMsgReadStatus.doSync = function (context, data) {
	  var el = void 0,
	      tpl = '';
	  var isSingle = _window2.default.sharedWin.conversationID.type === _constants2.default.TYPE.SINGLE;
	  var isSelf = void 0;
	  var loginNick = Util.getUid(_window2.default.sharedWin.loginID);
	  var fromNick = void 0;
	  var isFile = false;

	  data.forEach(function (msg) {
	    if (!msg.msgid) return;

	    if (!(el = document.getElementById(msg.msgid))) return;

	    if (msg.isSelf) {
	      isSelf = true;
	    } else {
	      fromNick = Util.getUid(msg.fromid || msg.from);

	      if (isSingle) {
	        if (loginNick.split(':')[0] !== Util.getUid(msg.cid).split(':')[0]) {
	          isSelf = loginNick.split(':')[0] == fromNick.split(':')[0];
	        } else {
	          isSelf = loginNick == fromNick;
	        }
	      } else {
	        isSelf = loginNick == fromNick;
	      }
	    }

	    if (!isSelf) return;

	    isFile = el.classList.contains('file-msg-wrap');

	    tpl = !msg.unread ? _constants2.default.I18N[_constants2.default.LANGUAGE][!isFile ? 'AT_MSG_READ' : 'FILE_OPENED'] : _constants2.default.I18N[_constants2.default.LANGUAGE][!isFile ? 'AT_MSG_UNREAD' : 'FILE_UNOPENED'];

	    var stateEl = el.querySelector('.' + _constants2.default.CLS.MSG_STATUS_CONTAINER);

	    if (stateEl) {
	      var readStatus = stateEl.dataset.unread;
	      if (readStatus !== '0') {
	        stateEl.setAttribute('data-unread', msg.unread ? '1' : '0');
	        stateEl.innerHTML = (0, _$JuicerRoot2.default)(_template2.default.msgReadStatus, { tpl: tpl, isread: !msg.unread });
	      }
	    }
	    // stateEl && (stateEl.innerHTML = juicer(Template.msgReadStatus, { tpl: tpl, isread: !msg.unread }));
	  });
	};

	exports.default = updateMsgReadStatus;
	module.exports = exports['default'];

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _index = __webpack_require__(111);

	var _index2 = _interopRequireDefault(_index);

	var _util = __webpack_require__(83);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	} /**
	   * Created by neitherzhu on 2017/2/15.
	   */

	var msgReadStatus = new _$BaseRoot.Base.ActionCreator();
	msgReadStatus.todoMap = {};
	msgReadStatus.doSync = function (context, cid) {
	  var uid = _util2.default.getUid(cid);
	  var m = this.todoMap[uid];

	  if (!m) return;

	  var toGetList = [];
	  var toSetList = [];
	  var list = [].concat(_toConsumableArray(m.list));
	  var i = 0;

	  list.forEach(function (msg, index) {
	    // 自己发送的Новости并且是发送成功的Новости
	    if (msg.self) {
	      if (msg.msgstatus === 1 && msg.readflag !== 2) {
	        toGetList.push(msg);
	        m.list.splice(index - i, 1);
	        i++;
	      }
	    } else {
	      if (!msg.doNotSetReadStatus) {
	        toSetList.push(msg);
	        m.list.splice(index - i, 1);
	        i++;
	      }
	    }
	  });

	  toGetList.length && _index2.default.getMsgReadStatus.action(cid, toGetList);
	  toSetList.length && _index2.default.setMsgReadStatus.action(cid, toSetList);

	  delete this.todoMap[uid];
	};

	msgReadStatus.push = function (cid, item) {
	  var uid = _util2.default.getUid(cid);

	  if (!this.todoMap[uid]) {
	    this.todoMap[uid] = {
	      list: [],
	      map: {}
	    };
	  }

	  var m = this.todoMap[uid];

	  if (m.map[item.msgid]) return;

	  m.map[item.msgid] = 1;
	  m.list.push(item);
	};

	exports.default = msgReadStatus;
	module.exports = exports['default'];

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var sendMsgStatusChange = new _$BaseRoot.Base.ActionCreator(); /**
	                                                                * Created by neitherzhu on 2017/3/31.
	                                                                */

	sendMsgStatusChange.doSync = function (context, data) {

	  var msgEl = document.getElementById(data.msgid);

	  if (!msgEl) return;

	  // Новости发送成功
	  if (data.code === 0) {
	    var progressEl = msgEl.querySelector('.file-progress');
	    progressEl && progressEl.classList.add('hidden');
	  }
	};

	exports.default = sendMsgStatusChange;
	module.exports = exports['default'];

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var getAudioShowTextSetting = new _$BaseRoot.Base.ActionCreator(); /**
	                                                                    * Created by neitherzhu on 2017/5/17.
	                                                                    */

	getAudioShowTextSetting.actionType = 'async';
	getAudioShowTextSetting.doAsync = function (context) {
	  _sdk2.default.getAudioShowTextSetting().then(function (data) {
	    console.log('getAudioShowTextSetting', data);
	    if (!data || !data.result) return;
	    _window2.default.sharedWin.container.classList[data.result.show ? 'add' : 'remove']('show-audio-text');
	  });
	};

	exports.default = getAudioShowTextSetting;
	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                           value: true
	});

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	__webpack_require__(133);

	__webpack_require__(134);

	__webpack_require__(135);

	__webpack_require__(136);

	__webpack_require__(137);

	__webpack_require__(138);

	__webpack_require__(140);

	__webpack_require__(142);

	__webpack_require__(144);

	__webpack_require__(146);

	__webpack_require__(147);

	__webpack_require__(148);

	__webpack_require__(149);

	__webpack_require__(150);

	__webpack_require__(151);

	__webpack_require__(152);

	function _interopRequireDefault(obj) {
	                                           return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _createPlugin2.default; /**
	                                           * Created by neitherzhu on 2016/12/7.
	                                           * 插件
	                                           */

	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                            value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var Plugin = new _$BaseRoot.Base.Plugin(); /**
	                                            * Created by neitherzhu on 2016/12/8.
	                                            * 创建全局插件
	                                            */
	exports.default = Plugin;
	module.exports = exports['default'];

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(111);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.AUDIO, function (ev) {
	  var target = ev.target;

	  if (!target.classList.contains(_constants2.default.CLS.AUDIO_PLAYING)) {
	    var md5 = target.getAttribute('data-md5');
	    var path = target.getAttribute('data-path');

	    _sdk2.default.playAudio({ filepath: path, fileMD5: md5 });
	    target.classList.add(_constants2.default.CLS.AUDIO_PLAYING);

	    // 暂时只支持单聊
	    if (_window2.default.sharedWin.conversationID.type !== _constants2.default.TYPE.SINGLE) return;

	    var ignore = target.getAttribute('data-ignore') === '1';

	    if (ignore) return;

	    var parent = Util.parents(target, _constants2.default.CLS.MSG_CONTAINER);
	    if (!parent) return;
	    var time = parent.getAttribute('data-time');

	    _actions2.default.setMsgReadStatus.action(_window2.default.sharedWin.conversationID, [{
	      svrtime: time,
	      msgtime: time,
	      msgid: parent.id
	    }]);

	    target.setAttribute('data-ignore', 1);
	  } else {
	    target.classList.remove(_constants2.default.CLS.AUDIO_PLAYING);
	    _sdk2.default.stopAudio();
	  }
	}); /**
	     * Created by neitherzhu on 2016/12/8.
	     * нажмите на语音Новости
	     */

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _util = __webpack_require__(83);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('dblclick', _constants2.default.CLS.IMAGE, function (ev) {

	  var target = ev.target;

	  _sdk2.default.previewImage({
	    fileMD5: target.getAttribute('data-md5'),
	    filepath: target.src,
	    cid: _util2.default.getCid(_window2.default.sharedWin.conversationID),
	    time: parseInt(target.getAttribute('data-time'))
	  });
	}); /**
	     * Created by neitherzhu on 2016/12/8.
	     * нажмите на图片
	     */

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _$BaseRoot = __webpack_require__(5);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2016/12/8.
	                                  * нажмите на打开群@Новости已读未读人数查看页面
	                                  */

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.OPEN_READ_STATE_COUNT_DETAIL, function (ev) {

	  var parent = Util.parents(ev.target, _constants2.default.CLS.MSG_CONTAINER);

	  parent && _sdk2.default.openReadStateCountDetail({
	    tribeid: _window2.default.sharedWin.conversationID,
	    msgid: parent.id,
	    userid: {
	      appkey: parent.getAttribute('data-appkey'),
	      nick: parent.getAttribute('data-nick')
	    }
	  });
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.OPEN_FILE_SETTING, function (ev) {
	  _sdk2.default.openFileSetting();
	}); /**
	     * Created by neitherzhu on 2016/12/8.
	     * нажмите на打开文件Настраивать
	     */

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.OPEN_SHAKE_SETTING, function (ev) {
	  _sdk2.default.openShakeSetting();
	}); /**
	     * Created by neitherzhu on 2016/12/8.
	     * 打开震屏Настраивать
	     */

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _image = __webpack_require__(139);

	var _image2 = _interopRequireDefault(_image);

	var _$BaseRoot = __webpack_require__(5);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	} /**
	   * Created by neitherzhu on 2016/12/8.
	   * 重新加载图片
	   */

	var Util = _$BaseRoot.Base.Util;

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.RELOAD_IMAGE, function (ev) {
	  var target = ev.target;
	  var parent = Util.parents(target, _constants2.default.CLS.MSG_CONTAINER);

	  if (!parent) return;

	  [].concat(_toConsumableArray(parent.querySelectorAll('img'))).forEach(function (img) {
	    // 如果已经是本地路径了, 则忽略
	    if (img.src.indexOf(_constants2.default.PIC_PROTOCOL) === 0) return;

	    (0, _image2.default)({
	      jvale: {
	        FILEMD5: img.getAttribute('data-md5'),
	        TYPE: img.getAttribute('data-type')
	      },
	      value: img.getAttribute('data-src'),
	      msgid: parent.id,
	      msgtime: parent.getAttribute('data-time')
	    });
	  });

	  parent.querySelector('.' + _constants2.default.CLS.MSG_STATUS_CONTAINER).innerHTML = '';
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (extra, callback) {

	    // 已经是本地路径
	    if (extra.value && extra.value.indexOf(_constants2.default.PIC_PROTOCOL) === 0) return;

	    _sdk2.default.getImagePath({
	        fileMD5: extra.jvale && extra.jvale.FILEMD5,
	        fileurl: extra.value,
	        filetype: extra.jvale && extra.jvale.TYPE,
	        cid: _util2.default.getCid(_window2.default.sharedWin.conversationID),
	        time: extra.msgtime
	    }).then(function (data) {
	        if (callback && !callback(data)) return;

	        var msg = document.getElementById(extra.msgid);

	        if (!msg) return;

	        [].concat(_toConsumableArray(msg.querySelectorAll('.J_' + extra.jvale.FILEMD5))).forEach(function (img) {
	            img.classList.remove(_constants2.default.CLS.IMAGE_LOADING);
	            img.src = data.filepath;
	            var handler = function handler() {
	                // this.height = this.height;
	                img.removeEventListener('load', handler);
	            };
	            // 固定图片的高度,防止切换联系人时,由于图片加载问题导致滚动条跳动
	            img.addEventListener('load', handler);
	        });
	    }).catch(function (err) {
	        var msg = document.getElementById(extra.msgid);
	        if (!msg) return;

	        [].concat(_toConsumableArray(msg.querySelectorAll('.J_' + extra.jvale.FILEMD5))).forEach(function (img) {
	            img.setAttribute('data-src', extra.value);
	        });

	        msg.querySelector('.' + _constants2.default.CLS.MSG_STATUS_CONTAINER).innerHTML = (0, _$JuicerRoot2.default)(_template2.default.errorStatus, { cls: _constants2.default.CLS.RELOAD_IMAGE });
	    });
	};

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _util = __webpack_require__(83);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	    if (Array.isArray(arr)) {
	        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	            arr2[i] = arr[i];
	        }return arr2;
	    } else {
	        return Array.from(arr);
	    }
	} /**
	   * Created by neitherzhu on 2016/12/6.
	   * 图片Новости 获取图片本地路径
	   */

	;
	module.exports = exports['default'];

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _audio = __webpack_require__(141);

	var _audio2 = _interopRequireDefault(_audio);

	var _$BaseRoot = __webpack_require__(5);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2016/12/9.
	                                  * нажмите на重收语音
	                                  */

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.RELOAD_AUDIO, function (ev) {
	  var target = ev.target;
	  var parent = Util.parents(target, _constants2.default.CLS.MSG_CONTAINER);

	  if (!parent) return;

	  var audio = parent.querySelector('.' + _constants2.default.CLS.AUDIO_WITH_STYLE);

	  (0, _audio2.default)({
	    jvale: {
	      FILEMD5: audio.getAttribute('data-md5'),
	      TYPE: audio.getAttribute('data-type')
	    },
	    value: audio.getAttribute('data-src'),
	    msgid: parent.id
	  });

	  parent.querySelector('.' + _constants2.default.CLS.MSG_STATUS_CONTAINER).innerHTML = '';
	});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (extra, callback) {

	  var audio = document.getElementById('J_AUDIO_' + extra.msgid);

	  if (!audio) return;

	  extra && extra.jvale && extra.jvale.AUDIO_TEXT && _sdk2.default.addAudioTextSettingTip(_window2.default.sharedWin.conversationID);
	  var msg = Util.parents(audio, _constants2.default.CLS.MSG_CONTAINER);

	  //msg.querySelector('.' + Constant.CLS.MSG_STATUS_CONTAINER).innerHTML = Template.loading;

	  _sdk2.default.getAudioPath({
	    fileMD5: extra.jvale.FILEMD5,
	    fileurl: extra.value,
	    filetype: extra.jvale.TYPE
	  }).then(function (data) {
	    if (callback && !callback(data)) return;

	    audio.setAttribute('data-path', data.filepath);

	    audio.classList.add(_constants2.default.CLS.AUDIO);

	    //msg.querySelector('.' + Constant.CLS.MSG_STATUS_CONTAINER).innerHTML = '';
	  }).catch(function (err) {

	    audio.setAttribute('data-src', extra.value);
	    msg.querySelector('.' + _constants2.default.CLS.MSG_STATUS_CONTAINER).innerHTML = (0, _$JuicerRoot2.default)(_template2.default.errorStatus, { cls: _constants2.default.CLS.RELOAD_AUDIO });
	  });
	};

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _$BaseRoot = __webpack_require__(5);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 语音Новости 获取语音Новости本地路径
	 */
	var Util = _$BaseRoot.Base.Util;
	;
	module.exports = exports['default'];

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$IMSDKRoot = __webpack_require__(26);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(5);

	var _popupOver = __webpack_require__(119);

	var _popupOver2 = _interopRequireDefault(_popupOver);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	__webpack_require__(143);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2016/12/9.
	                                  * 图片工具
	                                  */

	var TOOL_BTN_LIST = [{
	  text: 'Добавить смайлики',
	  action: 'im.uiutil.AddAsEmotion',
	  cls: 'emot-icon'
	}, {
	  text: 'сохранить изображение',
	  action: 'im.uiutil.PicSaveAs',
	  cls: 'save-icon'
	}];

	var POPUP_CLS = 'J_imagePopupOver';

	var ImageToolBox = {

	  __ToolBtnList: TOOL_BTN_LIST,

	  __lastTarget: null,

	  __timer: null,

	  init: function init(context) {
	    if (!context || !context.container) return;

	    this.container = context.container;

	    this.popupOver = new _popupOver2.default(context.container);

	    this.config = {
	      visible: false,
	      x: 0,
	      y: 0,
	      cls: POPUP_CLS,
	      tpl: '',
	      html: '',
	      parent: this.container.parentNode
	    };

	    this.render();

	    this._events();
	  },
	  _events: function _events() {
	    var _this = this;

	    // 窗口滚动隐藏工具条
	    this.container.addEventListener('scroll', function () {
	      if (_this.config.visible) {
	        _this.config.visible = false;
	        _this.render();
	      }
	    });

	    document.body.addEventListener('mousemove', function (ev) {

	      var target = ev.target;

	      if (target === _this.popupOver.box || Util.parents(target, POPUP_CLS) === _this.popupOver.box) {
	        return;
	      }

	      if (target.tagName.toUpperCase() !== 'IMG' || !target.src || target.src.indexOf(_constants2.default.EMOJI_PROTOCOL) === 0 || target.src.indexOf(_constants2.default.EMOTION_PROTOCOL) === 0 || !target.classList.contains(_constants2.default.CLS.IMAGE)) {
	        if (_this.config.visible) {
	          _this.config.visible = false;
	          _this.render();
	        }

	        return;
	      }

	      if (target === _this.__lastTarget && _this._getMoveDistance(ev.clientX, ev.clientY) < 30) {
	        return;
	      }

	      _this.__lastTarget = target;

	      clearTimeout(_this.__timer);

	      _this.__timer = setTimeout(function () {
	        _this.config.x = ev.clientX;
	        _this.config.y = ev.clientY;
	        _this.config.visible = true;
	        _this.render();
	      }, 200);
	    });

	    document.body.addEventListener('mouseleave', function (ev) {
	      clearTimeout(_this.__timer);

	      if (_this.config.visible) {
	        _this.config.visible = false;
	        _this.render();
	      }
	    });
	  },
	  _getMoveDistance: function _getMoveDistance(x, y) {
	    return Math.sqrt(Math.pow(x - this.config.x, 2) + Math.pow(y - this.config.y, 2));
	  },
	  setBtnList: function setBtnList(list) {
	    this.__ToolBtnList = list;
	    // Настраивать过按钮列表后, 需要将模板设为空
	    // 这样下次再显示的时候才能重新获取列表中的元素
	    this.config.html = '';
	  },
	  getTpl: function getTpl() {
	    var tpl = '';

	    this.__ToolBtnList.forEach(function (item) {
	      tpl += '<li class="' + item.cls + ' J_imageAction" data-action="' + item.action + '" title="' + item.text + '">' + item.text + '</li>';
	    });

	    tpl = '<ul class="image-toolbar">' + tpl + '</ul>';

	    return tpl;
	  },
	  _clickHandler: function _clickHandler(ev) {
	    var target = ev.target;

	    if (target.matches('.J_imageAction')) {
	      var action = target.getAttribute('data-action');
	      var md5 = this.__lastTarget.getAttribute('data-md5');
	      var src = this.__lastTarget.src;
	      var param = {
	        fileMD5: md5,
	        filepath: src,
	        cid: _window2.default.sharedWin.conversationID
	      };

	      _$IMSDKRoot2.default.invoke(action, param);
	    }
	  },
	  render: function render() {
	    var _this2 = this;

	    var hasTpl = !!this.config.html;
	    !hasTpl && (this.config.html = this.getTpl());

	    this.popupOver.render(this.config);

	    if (!this.isEventBinding) {
	      this.isEventBinding = true;
	      this.popupOver.box.addEventListener('click', function (ev) {
	        _this2._clickHandler(ev);
	      });
	    }
	  }
	};

	_createPlugin2.default.addPlugin('imageToolBox', ImageToolBox);

	exports.default = ImageToolBox;
	module.exports = exports['default'];

/***/ },
/* 143 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$IMSDKRoot = __webpack_require__(26);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(5);

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _popupOver = __webpack_require__(119);

	var _popupOver2 = _interopRequireDefault(_popupOver);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(145);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var TOOL_BTN_LIST = [{
	  text: 'Открыть ссылку',
	  action: 'im.bizutil.DoUrlAction',
	  param: { url: "${url}" }
	}, {
	  text: 'Отчет',
	  action: 'im.uiutil.ShowReportCenter',
	  param: { url: "${url}", page: 2 }
	}, {
	  text: 'копировать',
	  action: 'im.bizutil.CopyText2Clipboard',
	  param: { content: "${url}" }
	}]; /**
	     * Created by neitherzhu on 2016/12/14.
	     * 链接工具
	     */

	var POPUP_CLS = 'J_linkPopupOver';

	var LinkToolBox = {

	  __ToolBtnList: TOOL_BTN_LIST,

	  __lastTarget: null,

	  __timer: null,

	  __BOX_WIDTH: 250,

	  __BOX_HEIGHT: 81,

	  __OFFSET: 20,

	  init: function init(context) {
	    if (!context || !context.container) return;

	    this.container = context.container;

	    this.popupOver = new _popupOver2.default(context.container);

	    this.config = {
	      visible: false,
	      x: 0,
	      y: 0,
	      cls: POPUP_CLS,
	      tpl: '',
	      html: '',
	      parent: this.container.parentNode
	    };

	    this.windowWidth = window.innerWidth;
	    this.windowHeight = window.innerHeight;

	    this.render();

	    this._events();
	  },
	  _events: function _events() {
	    var _this = this;

	    window.addEventListener('resize', function () {
	      _this.windowWidth = window.innerWidth;
	      _this.windowHeight = window.innerHeight;
	    });

	    this.popupOver.box.addEventListener('click', function (ev) {
	      var target = ev.target;

	      if (target.matches('.J_linkAction')) {
	        var action = target.getAttribute('data-action');
	        var param = _this.__ToolBtnList.filter(function (btn) {
	          return btn.action === action;
	        })[0].param;

	        param = JSON.stringify(param).replace('${url}', _this.url);

	        _$IMSDKRoot2.default.invoke(action, JSON.parse(param));
	        _this.config.visible = false;
	        _this.render();
	      }
	    });

	    // 窗口滚动隐藏工具条
	    this.container.addEventListener('scroll', function () {
	      if (_this.config.visible) {
	        _this.config.visible = false;
	        _this.render();
	      }
	    });

	    this.container.addEventListener('click', function (ev) {
	      var target = ev.target;
	      var sf = target.getAttribute('safeflag');

	      if (target.tagName.toUpperCase() === 'A' || target.parentNode && (target = target.parentNode) && target.tagName.toUpperCase() === 'A') {
	        ev.preventDefault();

	        var u = target.getAttribute('href');

	        if (u === '#' || u === 'javascript:;') return;

	        if (!sf || sf == 1) {
	          if (_this.config.visible) {
	            _this.config.visible = false;
	            _this.render();
	          }
	          return _sdk2.default.openUrl({ url: u });
	        }

	        var left = ev.pageX;
	        var top = ev.pageY;
	        var BOX_WIDTH = _this.__BOX_WIDTH;
	        var BOX_HEIGHT = _this.__BOX_HEIGHT;
	        var OFFSET = _this.__OFFSET;

	        left = _this.windowWidth - left > BOX_WIDTH + OFFSET ? left + OFFSET : left - BOX_WIDTH - OFFSET > 0 ? left - BOX_WIDTH - OFFSET : _this.windowWidth - BOX_WIDTH - OFFSET;
	        top = _this.windowHeight - top > BOX_HEIGHT + OFFSET ? top + OFFSET : top - BOX_HEIGHT - OFFSET > 0 ? top - BOX_HEIGHT - OFFSET : _this.windowHeight - BOX_HEIGHT - OFFSET;

	        _this.url = u;
	        _this.config.x = left;
	        _this.config.y = top;
	        _this.config.visible = true;
	        _this.config.html = _this.getTpl(sf);

	        _this.render();
	      } else {
	        if (!sf || sf == 0) {
	          if (_this.config.visible) {
	            _this.config.visible = false;
	            _this.render();
	          }
	        }
	      }
	    });
	  },
	  setBtnList: function setBtnList(list) {
	    this.__ToolBtnList = list;
	    // Настраивать过按钮列表后, 需要将模板设为空
	    // 这样下次再显示的时候才能重新获取列表中的元素
	    this.config.html = '';
	  },
	  getTpl: function getTpl(sf) {
	    return (0, _$JuicerRoot2.default)(_template2.default.anchorCheck, {
	      isSafe: sf == 1,
	      btns: this.__ToolBtnList
	    });
	  },
	  render: function render() {
	    this.popupOver.render(this.config);
	  }
	};

	_createPlugin2.default.addPlugin('linkToolBox', LinkToolBox);

	exports.default = LinkToolBox;
	module.exports = exports['default'];

/***/ },
/* 145 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(5);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _util = __webpack_require__(83);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.CANCEL_DOWNLOAD_FILE, function (ev) {
	  var target = ev.target;
	  var parent = _util2.default.parents(target, 'file-msg');

	  if (!parent) return;

	  var param = _util2.default.generatorFileMeta(parent);

	  _sdk2.default.cancelDownloadCloudFile(param);
	}); /**
	     * Created by neitherzhu on 2017/3/31.
	     */

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(5);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _util = __webpack_require__(83);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.CANCEL_UPLOAD_FILE, function (ev) {
	  var target = ev.target;
	  var parent = _util2.default.parents(target, 'file-msg');

	  if (!parent) return;

	  var param = _util2.default.generatorFileMeta(parent);

	  _sdk2.default.cancelUploadCloudFile(param);
	}); /**
	     * Created by neitherzhu on 2017/3/31.
	     */

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(5);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(111);

	var _actions2 = _interopRequireDefault(_actions);

	var _util = __webpack_require__(83);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.DOWNLOAD_FILE, function (ev) {
	  var target = ev.target;
	  var parent = _util2.default.parents(target, 'file-msg');
	  if (!parent) return;

	  var param = {};

	  param.cid = _util2.default.getCid(_window2.default.sharedWin.conversationID);
	  param.fileInfo = _util2.default.generatorFileMeta(parent);

	  _sdk2.default.downloadCloudFile(param);

	  if (_window2.default.sharedWin.conversationID.type === _constants2.default.TYPE.SINGLE) {
	    var ignore = target.dataset.ignore === '1';

	    if (ignore) return;

	    var msgParent = _util2.default.parents(target, _constants2.default.CLS.MSG_CONTAINER);
	    if (!msgParent) return;
	    var time = msgParent.dataset.time;

	    _actions2.default.setMsgReadStatus.action(_window2.default.sharedWin.conversationID, [{
	      svrtime: time,
	      msgtime: time,
	      msgid: msgParent.id
	    }]);

	    // нажмите наСкачать файл会Настраивать已读, нажмите на预览也会Настраивать已读,
	    // нажмите на了这2个按钮的任何一个, 都应该把另外一个也Настраивать不发送已读状态的标记
	    var prevBtn = parent.querySelector('.' + _constants2.default.CLS.PREVIEW_FILE);
	    prevBtn && prevBtn.setAttribute('data-ignore', 1);
	    target.setAttribute('data-ignore', 1);
	  }
	}); /**
	     * Created by neitherzhu on 2017/3/31.
	     */

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(5);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/3/31.
	 */
	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.OPEN_FILE_FOLDER, function (ev) {
	  var target = ev.target;

	  _sdk2.default.openFolder({
	    filePath: target.dataset.path
	  }).then(function (data) {
	    if (data.subcode === 0x01200004) {
	      target.outerHTML = '<a href="javascript:;" class="download-file J_downloadFile" data-ignore="1">Скачать файл</a>';
	    }
	  }).catch(function (e) {
	    target.outerHTML = '<a href="javascript:;" class="download-file J_downloadFile" data-ignore="1">Скачать файл</a>';
	  });
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(5);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(111);

	var _actions2 = _interopRequireDefault(_actions);

	var _util = __webpack_require__(83);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.PREVIEW_FILE, function (ev) {
	  var target = ev.target;
	  var parent = _util2.default.parents(target, 'file-msg');
	  if (!parent) return;

	  var msgParent = _util2.default.parents(target, _constants2.default.CLS.MSG_CONTAINER);
	  if (!msgParent) return;
	  var param = {};
	  param.cid = _util2.default.getCid(_window2.default.sharedWin.conversationID);
	  param.fileInfo = _util2.default.generatorFileMeta(parent);
	  param.fileInfo.msginfo = {
	    msgid: msgParent.id
	  };

	  _sdk2.default.previewCloudFile(param);

	  if (_window2.default.sharedWin.conversationID.type === _constants2.default.TYPE.SINGLE) {
	    var ignore = target.dataset.ignore === '1';

	    if (ignore) return;
	    var time = msgParent.dataset.time;

	    _actions2.default.setMsgReadStatus.action(_window2.default.sharedWin.conversationID, [{
	      svrtime: time,
	      msgtime: time,
	      msgid: msgParent.id
	    }]);

	    // нажмите наСкачать файл会Настраивать已读, нажмите на预览也会Настраивать已读,
	    // нажмите на了这2个按钮的任何一个, 都应该把另外一个也Настраивать不发送已读状态的标记
	    var prevBtn = parent.querySelector('.' + _constants2.default.CLS.DOWNLOAD_FILE);
	    prevBtn && prevBtn.setAttribute('data-ignore', 1);
	    target.setAttribute('data-ignore', 1);
	  }
	}); /**
	     * Created by neitherzhu on 2017/3/31.
	     */

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.OPEN_AUDIO_TEXT_SETTING, function (ev) {
	  _sdk2.default.openSetting('im');
	}); /**
	     * Created by neitherzhu on 2016/12/8.
	     * нажмите на打开语音转文字Настраивать
	     */

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(132);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/5/26.
	 */
	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.FACE_TIME_TRIGGER, function (ev) {

	  _sdk2.default.startFaceTime(_window2.default.sharedWin.conversationID);
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(154);

	__webpack_require__(159);

	var _callbacks = __webpack_require__(68);

	var _callbacks2 = _interopRequireDefault(_callbacks);

	var _link = __webpack_require__(86);

	var _link2 = _interopRequireDefault(_link);

	var _image = __webpack_require__(139);

	var _image2 = _interopRequireDefault(_image);

	var _audio = __webpack_require__(141);

	var _audio2 = _interopRequireDefault(_audio);

	var _atmsg = __webpack_require__(162);

	var _atmsg2 = _interopRequireDefault(_atmsg);

	var _dynamicMsg = __webpack_require__(92);

	var _dynamicMsg2 = _interopRequireDefault(_dynamicMsg);

	var _file = __webpack_require__(163);

	var _file2 = _interopRequireDefault(_file);

	function _interopRequireDefault(obj) {
	                                                           return obj && obj.__esModule ? obj : { default: obj };
	}

	_callbacks2.default.setCallbacks('link', _link2.default); /**
	                                                           * Created by neitherzhu on 2017/1/2.
	                                                           */

	_callbacks2.default.setCallbacks('image', _image2.default);
	_callbacks2.default.setCallbacks('audio', _audio2.default);
	_callbacks2.default.setCallbacks('atmsg', _atmsg2.default);
	_callbacks2.default.setCallbacks('dynamicMsg', _dynamicMsg2.default);
	_callbacks2.default.setCallbacks('file', _file2.default);

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(155);

	__webpack_require__(158);

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(5);

	var _convert = __webpack_require__(67);

	var _convert2 = _interopRequireDefault(_convert);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _normalMsgFormater = __webpack_require__(69);

	var _normalMsgFormater2 = _interopRequireDefault(_normalMsgFormater);

	var _callbacks = __webpack_require__(68);

	var _callbacks2 = _interopRequireDefault(_callbacks);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _degrade = __webpack_require__(156);

	var _degrade2 = _interopRequireDefault(_degrade);

	var _facetime = __webpack_require__(157);

	var _facetime2 = _interopRequireDefault(_facetime);

	var _defaultParse = __webpack_require__(93);

	var _defaultParse2 = _interopRequireDefault(_defaultParse);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2017/1/2.
	                                  */

	_convert2.default.add('chat', [0, 2, 3, 12, 13, 65648 /*多态卡片*/, 65649 /*文件Новости*/, 65536 /*模板Новости*/], 'normalMsg', {
	  format: _normalMsgFormater2.default,

	  Tpl: _template2.default.normalMsg,

	  extra: function extra(callback, dom, data) {
	    var defaultCallback = _callbacks2.default.getCallbacks('DEFAULT');
	    defaultCallback && defaultCallback.length && defaultCallback.forEach(function (cb) {
	      cb(data);
	    });

	    if (!data.typeList || !data.typeList.length) {
	      return;
	    }

	    data.typeList.forEach(function (ot) {
	      if (_callbacks2.default.getCallbacks(ot.type)) {
	        _callbacks2.default.getCallbacks(ot.type).forEach(function (cb) {
	          try {
	            cb.call(null, ot.extra, callback);
	          } catch (e) {
	            console.error('in extra error', e);
	          };
	        });
	      }
	    });
	  }
	});

	// 自动回复
	_convert2.default.add('chat', 1, 'autoReplyMsg', {
	  extra: function extra(callback, dom, data) {
	    var defaultCallback = _callbacks2.default.getCallbacks('DEFAULT');
	    defaultCallback && defaultCallback.length && defaultCallback.forEach(function (cb) {
	      cb(data);
	    });

	    if (!data.typeList || !data.typeList.length) {
	      return;
	    }

	    data.typeList.forEach(function (ot) {
	      if (_callbacks2.default.getCallbacks(ot.type)) {
	        _callbacks2.default.getCallbacks(ot.type).forEach(function (cb) {
	          try {
	            cb.call(null, ot.extra, callback);
	          } catch (e) {
	            console.error('in extra error', e);
	          };
	        });
	      }
	    });
	  },
	  format: function format(msg) {
	    var result = (0, _normalMsgFormater2.default)(msg);
	    // 排除自己的自动回复Новости
	    if (Util.getUid(result.from) !== Util.getUid(_window2.default.sharedWin.loginID)) {
	      result.html && (result.html = '<span class="auto-reply-text">[автоматический ответ]</span>' + result.html + '<a href="javascript:;" class="auto-reply-tip J_stopAutoReply">Больше никаких напоминаний</a>');
	    }
	    return result;
	  },

	  Tpl: _template2.default.normalMsg
	});

	_convert2.default.add('chat', 14, 'degradeMsg', {
	  format: _degrade2.default,
	  Tpl: _template2.default.normalMsg
	});

	_convert2.default.add('chat', 16, 'facetime', {
	  format: _facetime2.default,
	  Tpl: _template2.default.normalMsg
	});

	_convert2.default.add('chat', 65602 /*自定义Новости*/, 'customMsg', {
	  format: function format(msg) {
	    var result = (0, _defaultParse2.default)(msg);

	    if (!result) return;

	    var text = '';
	    // 防止有多条降级Новости 跟客户端的逻辑保持一致，只取第一条
	    var mb = msg.msgbody && msg.msgbody.length && msg.msgbody[0];
	    if (mb && mb.header && mb.header.degrade) {
	      text = mb.header.degrade.alternative || '';
	    }

	    if (text) {
	      result.html = text;
	    } else {
	      result = false;
	    }

	    return result;
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _defaultParse = __webpack_require__(93);

	var _defaultParse2 = _interopRequireDefault(_defaultParse);

	var _link = __webpack_require__(70);

	var _link2 = _interopRequireDefault(_link);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/4/5.
	 */
	exports.default = function (msg) {
	  var result = (0, _defaultParse2.default)(msg);
	  if (!result) return;

	  var text = _constants2.default.I18N[_constants2.default.LANGUAGE].DEGRADE;
	  if (msg.msgbody && msg.msgbody.length && msg.msgbody[0].value) {
	    text = msg.msgbody[0].value;

	    if (!msg.msgbody[0].jvale) {
	      var temp = '';
	      var changed = false;
	      _sdk2.default.convertMsgToEmotion({
	        value: text,
	        type: 0,
	        jvale: '',
	        strDegradeText: '',
	        msgType: 14
	      }).then(function (data) {
	        if (data && data.length) {
	          data.forEach(function (m) {
	            if (m.type === 0) {
	              changed = true;
	              m.jvale = JSON.parse(m.jvale);
	              temp += (0, _link2.default)(m, msg);
	            }
	          });

	          if (changed) {
	            var el = document.getElementById('J_degrade_' + msg.msgid);
	            el && (el.innerHTML = temp);
	          }
	        }
	      });
	    }
	  }

	  result.html = (0, _$JuicerRoot2.default)(_template2.default.degrade, { text: text, id: msg.msgid });

	  return result;
	};

	module.exports = exports['default'];

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defaultParse = __webpack_require__(93);

	var _defaultParse2 = _interopRequireDefault(_defaultParse);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	var _util = __webpack_require__(83);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function (msg) {
	  var result = (0, _defaultParse2.default)(msg);
	  console.log(result);

	  if (msg.msgbody) {

	    var data = {};
	    var duration = '';

	    switch (msg.msgbody.type) {
	      case 1:
	        data.text = _constants2.default.I18N[_constants2.default.LANGUAGE].FACE_TIME_NOT_ACCEPT;
	        break;
	      case 2:
	        data.text = _constants2.default.I18N[_constants2.default.LANGUAGE].FACE_TIME_NOT_ACCEPTED;
	        break;
	      case 3:
	        duration = _util2.default.getDuration(msg.msgbody.duration);
	        data.text = _constants2.default.I18N[_constants2.default.LANGUAGE].FACE_TIME_FINISH + ' ' + duration;
	        break;
	    }

	    data.trigger = _constants2.default.I18N[_constants2.default.LANGUAGE].FACE_TIME_TRIGGER;
	    result.html = (0, _$JuicerRoot2.default)(_template2.default.facetime, data);
	  }

	  return result;
	}; /**
	    * Created by neitherzhu on 2017/5/26.
	    */

	module.exports = exports['default'];

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _convert = __webpack_require__(67);

	var _convert2 = _interopRequireDefault(_convert);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	var _shake = __webpack_require__(95);

	var _shake2 = _interopRequireDefault(_shake);

	var _file = __webpack_require__(96);

	var _file2 = _interopRequireDefault(_file);

	var _chat = __webpack_require__(97);

	var _chat2 = _interopRequireDefault(_chat);

	var _video = __webpack_require__(98);

	var _video2 = _interopRequireDefault(_video);

	var _remoteAssistance = __webpack_require__(99);

	var _remoteAssistance2 = _interopRequireDefault(_remoteAssistance);

	var _appSys = __webpack_require__(100);

	var _appSys2 = _interopRequireDefault(_appSys);

	var _msgRecall = __webpack_require__(91);

	var _msgRecall2 = _interopRequireDefault(_msgRecall);

	var _audio2text = __webpack_require__(108);

	var _audio2text2 = _interopRequireDefault(_audio2text);

	var _defaultSystemMsg = __webpack_require__(109);

	var _defaultSystemMsg2 = _interopRequireDefault(_defaultSystemMsg);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_convert2.default.add('chat', [4, 5, 6, 7, 8, 9, 10002, 10000, 10001], 'systemMsg', {
	  format: function format(msg) {
	    var type = msg.msgtype;
	    var result = void 0;

	    if (type == 4) {
	      // 震屏系统Новости
	      result = (0, _shake2.default)(msg);
	    } else if (type === 5) {
	      // 文件系统Новости
	      result = (0, _file2.default)(msg);
	    } else if (type === 6) {
	      // 语音聊天系统Новости
	      result = (0, _chat2.default)(msg);
	    } else if (type === 7) {
	      // 视频聊天系统Новости
	      result = (0, _video2.default)(msg);
	    } else if (type === 8) {
	      // 远程协助系统Новости
	      result = (0, _remoteAssistance2.default)(msg);
	    } else if (type === 9) {
	      // 应用系统Новости, 比如发送 qq
	      result = (0, _appSys2.default)(msg);
	    } else if (type === 10000) {
	      result = (0, _msgRecall2.default)(msg);
	    } else if (type === 10002) {
	      result = (0, _audio2text2.default)(msg);
	    } else if (type === 10001) {
	      result = (0, _defaultSystemMsg2.default)(msg);
	    }
	    result = _convert2.default.injectSystemFormat(msg, result);

	    return result;
	  },

	  Tpl: _template2.default.systemMsg
	});

	// 需要对语音转文字系统Новости做特殊处理，将一条Новости拆成2条
	/**
	 * Created by neitherzhu on 2017/1/2.
	 */
	_convert2.default.add('chat', 15, 'audioToTextSystemMsg', {
	  format: function format(msg) {
	    var html = '';
	    msg.msgtype = 10002;
	    msg.omsgid = msg.msgid;
	    msg.msgid = msg.omsgid + '_s1';
	    html += _convert2.default.convert('chat', msg, 'msgtype').html;
	    msg.audioText = 1;
	    delete msg.ignore;
	    msg.msgid = msg.omsgid + '_s2';
	    html += _convert2.default.convert('chat', msg, 'msgtype').html;
	    msg.html = html;
	    msg.msgid = msg.omsgid;
	    delete msg.ignore;
	    return msg;
	  },

	  Tpl: '<div class="J_msg" id="${msgid}" data-time="${msgtime}">$${html}</div>'
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(160);

	__webpack_require__(161);

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _convert = __webpack_require__(67);

	var _convert2 = _interopRequireDefault(_convert);

	var _normalMsgFormater = __webpack_require__(69);

	var _normalMsgFormater2 = _interopRequireDefault(_normalMsgFormater);

	var _callbacks = __webpack_require__(68);

	var _callbacks2 = _interopRequireDefault(_callbacks);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	var _degrade = __webpack_require__(156);

	var _degrade2 = _interopRequireDefault(_degrade);

	var _defaultParse = __webpack_require__(93);

	var _defaultParse2 = _interopRequireDefault(_defaultParse);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 群普通Новости解析
	 */
	_convert2.default.add('tribe', [0, 65648 /*多态卡片*/, 65649 /*文件Новости*/, 65536 /*模板Новости*/], 'normalMsg', {
	  format: _normalMsgFormater2.default,

	  Tpl: _template2.default.normalMsg,

	  extra: function extra(callback, dom, data) {
	    if (!data.typeList || !data.typeList.length) return;

	    data.typeList.forEach(function (ot) {
	      if (_callbacks2.default.getCallbacks(ot.type)) {
	        _callbacks2.default.getCallbacks(ot.type).forEach(function (cb) {
	          try {
	            cb.call(null, ot.extra, callback);
	          } catch (e) {
	            console.error('in extra error', e);
	          };
	        });
	      }
	    });
	  }
	});

	_convert2.default.add('tribe', 14, 'degradeMsg', {
	  format: _degrade2.default,
	  Tpl: _template2.default.normalMsg
	});

	_convert2.default.add('chat', 65602 /*自定义Новости*/, 'customMsg', {
	  format: function format(msg) {
	    var result = (0, _defaultParse2.default)(msg);

	    if (!result) return;

	    var text = '';
	    // 防止有多条降级Новости 跟客户端的逻辑保持一致，只取第一条
	    var mb = msg.msgbody && msg.msgbody.length && msg.msgbody[0];
	    if (mb && mb.header && mb.header.degrade) {
	      text = mb.header.degrade.alternative || '';
	    }

	    if (text) {
	      result.html = text;
	    } else {
	      result = false;
	    }

	    return result;
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _convert = __webpack_require__(67);

	var _convert2 = _interopRequireDefault(_convert);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	var _exitTribe = __webpack_require__(101);

	var _exitTribe2 = _interopRequireDefault(_exitTribe);

	var _kickoutTribe = __webpack_require__(102);

	var _kickoutTribe2 = _interopRequireDefault(_kickoutTribe);

	var _joinTribe = __webpack_require__(103);

	var _joinTribe2 = _interopRequireDefault(_joinTribe);

	var _roleChange = __webpack_require__(104);

	var _roleChange2 = _interopRequireDefault(_roleChange);

	var _exitDiscussion = __webpack_require__(105);

	var _exitDiscussion2 = _interopRequireDefault(_exitDiscussion);

	var _joinDiscussion = __webpack_require__(106);

	var _joinDiscussion2 = _interopRequireDefault(_joinDiscussion);

	var _displayNameChange = __webpack_require__(107);

	var _displayNameChange2 = _interopRequireDefault(_displayNameChange);

	var _msgRecall = __webpack_require__(91);

	var _msgRecall2 = _interopRequireDefault(_msgRecall);

	var _multiJoin = __webpack_require__(110);

	var _multiJoin2 = _interopRequireDefault(_multiJoin);

	var _audio2text = __webpack_require__(108);

	var _audio2text2 = _interopRequireDefault(_audio2text);

	var _defaultSystemMsg = __webpack_require__(109);

	var _defaultSystemMsg2 = _interopRequireDefault(_defaultSystemMsg);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_convert2.default.add('tribe', 1, 'ExitTribe', {
	  format: _exitTribe2.default,

	  Tpl: _template2.default.systemMsg
	});

	// 踢出群
	/**
	 * Created by neitherzhu on 2016/12/6.
	 */
	_convert2.default.add('tribe', 2, 'KickOutTribe', {
	  format: _kickoutTribe2.default,

	  Tpl: _template2.default.systemMsg
	});

	// 加入群
	_convert2.default.add('tribe', 3, 'JoinTribe', {
	  format: _joinTribe2.default,

	  Tpl: _template2.default.systemMsg
	});

	// 群角色变更
	_convert2.default.add('tribe', 4, 'RoleChange', {
	  format: _roleChange2.default,

	  Tpl: _template2.default.systemMsg
	});

	// 退出讨论组
	_convert2.default.add('tribe', 5, 'ExitDiscussion', {
	  format: _exitDiscussion2.default,

	  Tpl: _template2.default.systemMsg
	});

	// 加入讨论组
	_convert2.default.add('tribe', 6, 'JoinDiscussion', {
	  format: _joinDiscussion2.default,

	  Tpl: _template2.default.systemMsg
	});

	_convert2.default.add('tribe', 7, 'DisplayNameChange', {
	  format: _displayNameChange2.default,
	  Tpl: _template2.default.systemMsg
	});

	_convert2.default.add('tribe', 8, 'MultJoin', {
	  format: _multiJoin2.default,
	  Tpl: _template2.default.systemMsg
	});

	_convert2.default.add('tribe', 10000, 'MsgRecall', {
	  format: _msgRecall2.default,
	  Tpl: _template2.default.systemMsg
	});

	_convert2.default.add('tribe', 10001, 'DefaultSystemMsg', {
	  format: _defaultSystemMsg2.default,
	  Tpl: _template2.default.systemMsg
	});

	_convert2.default.add('tribe', 10002, 'audioToText', {
	  format: _audio2text2.default,
	  Tpl: _template2.default.systemMsg
	});

	// 需要对语音转文字系统Новости做特殊处理，将一条Новости拆成2条
	_convert2.default.add('tribe', 15, 'audioToTextSystemMsg', {
	  format: function format(msg) {
	    var html = '';
	    msg.msgtype = 10002;
	    msg.omsgid = msg.msgid;
	    msg.msgid = msg.omsgid + '_s1';
	    html += _convert2.default.convert('chat', msg, 'msgtype').html;
	    msg.audioText = 1;
	    delete msg.ignore;
	    msg.msgid = msg.omsgid + '_s2';
	    html += _convert2.default.convert('chat', msg, 'msgtype').html;
	    msg.html = html;
	    msg.msgid = msg.omsgid;
	    delete msg.ignore;
	    return msg;
	  },

	  Tpl: '<div class="J_msg" id="${msgid}" data-time="${msgtime}">$${html}</div>'
	});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (extra, callback) {

	  // 如果是-1(to be at memebers) -2(to be at all),
	  // 需要缓存Новостиid, 等Новости状态变更事件回来时,再判断是否是真正的@Новости
	  // 极限情况下, 会先收到Новости发送成功的事件,再获取到新Новости,
	  // 导致此条@Новости不再去获取已读未读状态
	  // 故改成如果是待确认的, 仍然去获取一次
	  if (extra.atmsgtype < 0) {
	    var d = {};

	    d[extra.msgid] = 1;

	    Cache.set('TO_BE_AT_MSG', d);
	  }

	  // 如果是我@的Новости, 放到待获取已读未读人数列表中
	  if (extra.atmsgtype < 0 || extra.relation2me == 1) {
	    cacheToGetRead.push({
	      userid: _window2.default.sharedWin.loginID,
	      msgid: extra.msgid
	    });
	  }
	  // 如果是@我的Новости, 放到待Настраивать已读状态列表中
	  else if (extra.relation2me == 2) {
	      cacheToSetRead.push(extra);
	    }

	  clearTimeout(timer);

	  // 防止频繁的发送, 过一段时间后再发送
	  timer = setTimeout(function () {

	    if (cacheToSetRead) {
	      _actions2.default.setAtMsgReadState.action(extra.cid, cacheToSetRead);
	      cacheToSetRead = [];
	    }

	    if (cacheToGetRead.length) {
	      _actions2.default.getAtMsgReadState.spliceAfterOnce(0, 0, function (context, data) {
	        cacheToGetRead = [];

	        if (callback && !callback(data)) return false;
	      });

	      _actions2.default.getAtMsgReadState.action(extra.cid, cacheToGetRead);
	    }
	  }, 30);
	};

	var _$BaseRoot = __webpack_require__(5);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _event = __webpack_require__(114);

	var _event2 = _interopRequireDefault(_event);

	var _actions = __webpack_require__(111);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 群@Новости 处理已读未读
	 */
	var Cache = _$BaseRoot.Base.Cache;
	var cacheToSetRead = [];
	var cacheToGetRead = [];
	var timer = null;

	module.exports = exports['default'];

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (extra, callback) {

	  if (!extra) return;

	  _sdk2.default.getFileTransferInfo(extra).then(function (data) {
	    Log.red('Получить информацию о передаче файлов', data);

	    if (!data || !data.result) return;

	    (0, _fileParse2.default)(extra.id, data.result);
	  });
	};

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(5);

	var _fileParse = __webpack_require__(123);

	var _fileParse2 = _interopRequireDefault(_fileParse);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Log = _$BaseRoot.Base.Log; /**
	                                * Created by neitherzhu on 2017/3/29.
	                                */

	module.exports = exports['default'];

/***/ },
/* 164 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dateSplit = __webpack_require__(166);

	var _dateSplit2 = _interopRequireDefault(_dateSplit);

	var _normalMsg = __webpack_require__(167);

	var _normalMsg2 = _interopRequireDefault(_normalMsg);

	var _empty = __webpack_require__(168);

	var _empty2 = _interopRequireDefault(_empty);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	    normalMsg: _normalMsg2.default.trim(),
	    dateSplit: _dateSplit2.default.trim(),
	    empty: _empty2.default.trim()
	}; // import jucier from '$JuicerRoot';

	module.exports = exports['default'];

/***/ },
/* 166 */
/***/ function(module, exports) {

	module.exports = "<div class=\"imui-msg-date-split\">${date}</div>\n";

/***/ },
/* 167 */
/***/ function(module, exports) {

	module.exports = "<div class=\"J_msg imui-msg{@if !self} imui-msg-l{@else} imui-msg-r{@/if}{@if cls} ${cls}{@/if}\" id=\"${msgid}\" data-time=\"${msgtime}\" data-appkey=\"${from.appkey}\" data-nick=\"${from.nick}\">\n  {@if avatar}\n    <div class=\"imui-msg-avatar J_avatar_${appkey}${subNick}{@if !self && !cid.nick} J_addAt{@/if}\"\n       style=\"background-image:url('${avatar}');background-size:cover;\"></div>\n  {@/if}\n  <div class=\"imui-msg-content\">\n    <div class=\"imui-msg-content-inner\">\n      <div class=\"imui-msg-head\">\n        <span class=\"imui-msg-sender J_display_${subNick}{@if !self && !cid.nick} add-at J_addAt{@/if}\" title=\"{@if !isSubNick}${from.display}{@else}${from.display} --> ${to.display}{@/if}\">\n            {@if !isSubNick}${from.display}{@else}${from.display} --> ${to.display}{@/if}\n        </span>\n        <span class=\"imui-msg-date\">${msgtime | timeFormatter}</span>\n        {@if search}<span class=\"go-context J_goContext\">Просмотр сообщений до и после</span>{@/if}\n      </div>\n      <div class=\"msg-content-body\">\n        <div class=\"msg-body-html\">$${html}</div>\n        <div class=\"imui-msg-op-wrap\">\n          <div class=\"imui-msg-status\">\n            {@if isFail}\n              <span class=\"status-icon status-error J_resend\"></span>\n            {@/if}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = "<div class=\"empty-block\"></div>";

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _$ConvertRoot = __webpack_require__(43);

	var _sdk = __webpack_require__(25);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(8);

	var _window2 = _interopRequireDefault(_window);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var getCurrentLoginID = new _$BaseRoot.Base.ActionCreator(); /**
	                                                              * Created by neitherzhu on 2016/12/30.
	                                                              */

	getCurrentLoginID.actionType = 'async';
	getCurrentLoginID.doAsync = function () {
	  return _sdk2.default.getCurrentLoginID();
	};

	getCurrentLoginID.after(function (context, data) {
	  _window2.default.loginID = data;
	  (0, _$ConvertRoot.shareWin)(_window2.default);
	}).after(function (context, data) {
	  _index2.default.bindEvents.action(data);
	});

	getCurrentLoginID.error = function (err) {
	  console.error('Action getCurrentLoginID Error', err);
	};

	exports.default = getCurrentLoginID;
	module.exports = exports['default'];

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _sdk = __webpack_require__(25);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	var _window = __webpack_require__(8);

	var _window2 = _interopRequireDefault(_window);

	var _event = __webpack_require__(19);

	var _event2 = _interopRequireDefault(_event);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _plugins = __webpack_require__(9);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _loading = __webpack_require__(22);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/2/21.
	 */
	var Log = _$BaseRoot.Base.Log,
	    Util = _$BaseRoot.Base.Util;

	var searchDBMsg = new _$BaseRoot.Base.ActionCreator();

	searchDBMsg.actionType = 'async';
	searchDBMsg.count = 20;

	searchDBMsg.before(function (context, param) {
	    if (!param) return false;

	    if (param.usePrev && this.prevParam) {
	        context.param = this.prevParam;
	        return;
	    }

	    _loading2.default.show(_window2.default.container);

	    if (param) {
	        // 清除高亮
	        workbench.im.find_string('');
	        param.msgid || (param.msgid = '-1');
	        param.btime || (param.btime = '0');
	        param.etime || (param.etime = '-1');
	        param.msgtime || (param.msgtime = '-1');
	        param.count || (param.count = this.count);
	        typeof param.gohistory !== 'undefined' || (param.gohistory = 1);
	        typeof param.ignoreboundary !== 'undefined' || (param.ignoreboundary = 1);
	        context.param = param;
	    }
	});

	searchDBMsg.doAsync = function (context, param) {
	    var _this = this;

	    param = context.param;

	    _window2.default.searchOptions = param;
	    var uid = Util.getUid(param.cid);

	    return new Promise(function (resolve, reject) {
	        _sdk2.default.searchDBMsg(param).then(function (data) {

	            _window2.default.prevParam = {
	                page: 'search',
	                param: param,
	                action: 'searchDBMsg',
	                showBack: true
	            };

	            if (!data || !data.result || !data.result.msgs) return reject();

	            if (Util.getUid(_window2.default.conversationID) !== uid) {
	                return reject('Не тот партнер по чату');
	            }

	            data = data.result;

	            // 高亮搜索的关键字
	            if (param.keywords && param.keywords.length) {
	                workbench.im.find_string(param.keywords[param.keywords.length - 1]);
	            } else if (param.fromids && param.fromids.length) {
	                workbench.im.find_string(param.fromids[param.fromids.length - 1].nick);
	            }

	            _this.prevParam = param;

	            resolve(data);
	        }).catch(function (err) {
	            reject(err);
	        });
	    });
	};

	searchDBMsg.after(function (context, data) {
	    var count = data.msgs.length;
	    var topBarPlugin = _plugins2.default.getPlugin('topBar');

	    if (!topBarPlugin) return;

	    var tpl = _constants2.default.I18N[_constants2.default.LANGUAGE][count ? 'SEARCH_SUCCESS_WITH_COUNT' : 'SEARCH_SUCCESS_WITHOUT_COUNT'];

	    var events = {
	        '.J_refresh': function J_refresh() {
	            _event2.default.emit('REFRESH');
	        }
	    };

	    topBarPlugin.render({
	        html: tpl,
	        events: events
	    });
	});

	searchDBMsg.after(function (context, data) {
	    var hasPrev = true;
	    var hasNext = true;
	    var currentPage = data.currentpage >= 0 ? data.currentpage : context.param.currentPage;
	    var totalPage = data.totalpage > 0 ? data.totalpage : context.param.totalPage;

	    if (!totalPage) {
	        totalPage = 1;
	    }

	    if (currentPage === 0) {
	        hasPrev = false;
	    }

	    if (currentPage + 1 == totalPage) {
	        hasNext = false;
	    }

	    _event2.default.emit('PAGINATION_STATUS_CHANGE', {
	        hasPrev: hasPrev,
	        hasNext: hasNext,
	        current: currentPage,
	        total: totalPage
	    });
	});

	searchDBMsg.after(function (context, data) {
	    _index2.default.renderMsg.action(context.param.cid, data.msgs, { doNotGoBottom: context.param.doNotGoBottom, scrollTop: context.param.scrollTop });
	});

	searchDBMsg.error = function (error) {
	    _event2.default.emit('PAGINATION_STATUS_CHANGE', {
	        hasPrev: false,
	        hasNext: false,
	        current: 0,
	        total: 1
	    });
	    _index2.default.renderMsg.action();

	    var topBarPlugin = _plugins2.default.getPlugin('topBar');

	    if (!topBarPlugin) return;

	    topBarPlugin.render({
	        html: _constants2.default.I18N[_constants2.default.LANGUAGE].SEARCH_FAIL
	    });

	    error && Log.red(error);
	};

	exports.default = searchDBMsg;
	module.exports = exports['default'];

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$IMSDKRoot = __webpack_require__(26);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(5);

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _sdk = __webpack_require__(25);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	var _window = __webpack_require__(8);

	var _window2 = _interopRequireDefault(_window);

	var _event = __webpack_require__(19);

	var _event2 = _interopRequireDefault(_event);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _plugins = __webpack_require__(9);

	var _plugins2 = _interopRequireDefault(_plugins);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var Log = _$BaseRoot.Base.Log,
	    Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2017/2/22.
	                                  */

	var roamMsg = new _$BaseRoot.Base.ActionCreator();
	var OND_DAY_MS = 24 * 60 * 60 * 1000;
	var RoamError = 0x00800003;

	roamMsg.actionType = 'async';
	roamMsg.count = 200;

	roamMsg.before(function (context, param) {
	    var _this = this;

	    if (!param) {
	        param = this.param || {};
	    }

	    return new Promise(function (resolve, reject) {
	        _sdk2.default.getServerTime().then(function (serverTimeData) {
	            param.etime = serverTimeData.result;
	            param.btime = parseInt(serverTimeData.result) - param.duration * OND_DAY_MS + '';
	            !param.identify && (param.identify = 2);
	            !param.count && (param.count = _this.count);
	            context.param = param;
	            resolve(param);
	        });
	    });
	});

	roamMsg.doAsync = function (context, param) {

	    param = context.param;
	    var topBarPlugin = _plugins2.default.getPlugin('topBar');
	    var uid = Util.getUid(param.cid);

	    topBarPlugin.remove();

	    return new Promise(function (resolve, reject) {

	        _sdk2.default.roamMsg(param).then(function (data) {

	            if (uid !== Util.getUid(_window2.default.conversationID)) {
	                return reject('Не тот партнер по чату');
	            }

	            if (!_window2.default.msgList || !_window2.default.msgList.length) {
	                _event2.default.emit('REFRESH');
	            } else {
	                if (data.subcode !== RoamError) {
	                    resolve(data);
	                } else {
	                    _sdk2.default.openRoamSetting();
	                }
	            }

	            context.param = param;
	        }).catch(function (err) {
	            reject(err);
	        });
	    });
	};

	roamMsg.after(function (context, data) {
	    var topBarPlugin = _plugins2.default.getPlugin('topBar');
	    var t = '';
	    var events = void 0;
	    var timeout = void 0;

	    if (!topBarPlugin) return;

	    // 如果是自动漫游,并且是在搜索的情况下漫游的,则不需要提示
	    if (context.param.auto && _window2.default.searchOptions) return;

	    if (data && data.result) {

	        // 自动漫游需要关心的是affectcount, 手动漫游需要关心的是roamedcount
	        var count = context.param.auto ? data.result.affectcount : data.result.roamedcount;

	        if (context.param.auto && count > 0) {
	            _$IMSDKRoot2.default.broadcast('ON_AUTO_ROAM_SUCCESS');
	        }
	        if (count > 0) {
	            if (count >= context.param.count) {
	                t = _constants2.default.I18N[_constants2.default.LANGUAGE].ROAM_SUCCESS_PART;
	                this.param = context.param;
	                events = {
	                    '.J_continueRoam': function J_continueRoam() {
	                        _index2.default.roamMsg.action();
	                    }
	                };
	            } else {
	                t = (0, _$JuicerRoot2.default)(_constants2.default.I18N[_constants2.default.LANGUAGE].ROAM_SUCCESS_ALL, { count: count });
	                events = {
	                    '.J_refresh': function J_refresh() {
	                        _event2.default.emit('REFRESH');
	                    }
	                };
	            }
	        } else {
	            var duration = context.param.duration;
	            if (duration) {
	                if (duration <= 30) {
	                    duration += 'день';
	                } else if (duration < 365) {
	                    duration = parseInt(duration / 30) + '个月';
	                } else {
	                    duration = parseInt(duration / 365) + '年';
	                }
	            }
	            t = (0, _$JuicerRoot2.default)(_constants2.default.I18N[_constants2.default.LANGUAGE].NOTHING_TO_ROAM, { duration: duration });
	            timeout = 5000;
	        }
	    } else {
	        t = _constants2.default.I18N[_constants2.default.LANGUAGE].ROAM_FAIL;
	        timeout = 5000;
	    }

	    topBarPlugin.render({
	        html: t,
	        events: events,
	        timeout: timeout
	    });
	});

	exports.default = roamMsg;
	module.exports = exports['default'];

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var _$ConvertRoot = __webpack_require__(43);

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	var _window = __webpack_require__(8);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _template = __webpack_require__(165);

	var _template2 = _interopRequireDefault(_template);

	var _plugins = __webpack_require__(9);

	var _plugins2 = _interopRequireDefault(_plugins);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/2/22.
	 */
	var Util = _$BaseRoot.Base.Util,
	    Log = _$BaseRoot.Base.Log;

	var dealDefaultParam = new _$BaseRoot.Base.ActionCreator();

	dealDefaultParam.before(function (context) {

	  var search = location.search.substring(1);

	  if (!search) return false;

	  var param = Util.getParam(search);

	  try {
	    param = JSON.parse(param.param);
	  } catch (e) {
	    param = false;
	  }

	  if (!param) return false;

	  context.actionType = param.actiontype;

	  if (param.actiondata) {
	    try {
	      var actionData = JSON.parse(param.actiondata);
	      context.actionData = actionData;
	    } catch (e) {}
	  }

	  if (param.cid) {
	    context.cid = param.cid;
	  }

	  Log.green('default params ', context);
	});

	dealDefaultParam.doSync = function (context) {
	  context.cid && _index2.default.conversationChange.action(context.cid);
	};

	dealDefaultParam.after(function (context) {
	  // 默认搜索搜索
	  if (context.actionType === 1) {

	    if (context.actionData) {
	      var searchPlugin = _plugins2.default.getPlugin('search');
	      if (searchPlugin) {
	        document.querySelector('.J_searchTrigger').click();
	        if (context.actionData.type == 0) {
	          searchPlugin.setSearchKey(context.actionData.text);
	        } else if (context.actionData.type == 1) {
	          searchPlugin.setSearchFromId(context.actionData.sender);
	        }
	        searchPlugin.searchBtn.click();
	      } else {
	        _index2.default.roamMsg.action({ cid: context.cid, duration: _constants2.default.DEFAULT_ROAM_DURATION, auto: true });
	        _index2.default.getLocalHistoryMsg.action({ cid: context.cid, needpage: 1 });
	      }
	    } else {
	      _index2.default.roamMsg.action({ cid: context.cid, duration: _constants2.default.DEFAULT_ROAM_DURATION, auto: true });
	      _index2.default.getLocalHistoryMsg.action({ cid: context.cid, needpage: 1 });
	    }

	    return false;
	  }
	});

	dealDefaultParam.after(function (context) {

	  // 默认定位到具体某条Новости
	  if (context.actionType === 4) {

	    if (context.actionData) {
	      var msg = context.actionData;

	      var param = {
	        cid: context.cid,
	        needpage: 1,
	        ignoreboundary: 0
	      };

	      if (msg) {
	        param.msgtime = msg.msgtime;
	        param.msgid = msg.msgid;
	      }

	      _index2.default.roamMsg.action({ cid: context.cid, duration: _constants2.default.DEFAULT_ROAM_DURATION, auto: true });
	      _index2.default.getLocalHistoryMsg.action(param);
	    } else {
	      _index2.default.roamMsg.action({ cid: context.cid, duration: _constants2.default.DEFAULT_ROAM_DURATION, auto: true });
	      _index2.default.getLocalHistoryMsg.action({ cid: context.cid, needpage: 1 });
	    }

	    return false;
	  }
	});

	dealDefaultParam.after(function (context) {
	  Log.green('use default');
	  _index2.default.roamMsg.action({ cid: context.cid, duration: _constants2.default.DEFAULT_ROAM_DURATION, auto: true });
	  _index2.default.getLocalHistoryMsg.action({ cid: context.cid, needpage: 1 });
	});

	exports.default = dealDefaultParam;
	module.exports = exports['default'];

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$ConvertRoot = __webpack_require__(43);

	var _template = __webpack_require__(165);

	var _template2 = _interopRequireDefault(_template);

	var _window = __webpack_require__(8);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_$ConvertRoot.Convert.update('chat', [0, 2, 3, 12, 13], 'normalMsg', {
	  Tpl: _template2.default.normalMsg
	}); /**
	     * Created by neitherzhu on 2017/2/17.
	     */

	_$ConvertRoot.Convert.update('chat', 1, 'autoReplyMsg', {
	  Tpl: _template2.default.normalMsg
	});

	_$ConvertRoot.Convert.update('tribe', 0, 'normalMsg', {
	  Tpl: _template2.default.normalMsg
	});

	_$ConvertRoot.Convert.pushInjectNormalFormat(function (msg, result) {
	  if (_window2.default.searchOptions) {
	    result.search = 1;
	  }
	  return result;
	});

/***/ },
/* 174 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$HistoryRoot = __webpack_require__(4);

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(177);

	__webpack_require__(178);

	var _createPlugin = __webpack_require__(181);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _tab = __webpack_require__(182);

	var _tab2 = _interopRequireDefault(_tab);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$IMSDKRoot = __webpack_require__(26);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$HistoryRoot = __webpack_require__(4);

	var _$HistoryRoot2 = _interopRequireDefault(_$HistoryRoot);

	var _$BaseRoot = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Plugin = _$HistoryRoot2.default.Plugin,
	    SDK = _$HistoryRoot2.default.SDK; /**
	                                       * Created by neitherzhu on 2017/2/7.
	                                       */

	var Util = _$BaseRoot.Base.Util,
	    Cache = _$BaseRoot.Base.Cache;


	Plugin.addEventPlugin('click', 'J_fileAction', function (ev) {
	  ev.preventDefault();

	  var target = ev.target;
	  var id = target.getAttribute('data-id');
	  var fileData = Cache.get('fileData')[id];
	  var action = target.getAttribute('data-action');
	  var param = void 0;

	  if (fileData.linkmsg) {
	    param = fileData.linkmsg;
	  } else {
	    param = {
	      uid: Util.getUid(fileData.from),
	      msgid: fileData.msgid,
	      filename: fileData.data.filename,
	      filepath: fileData.data.filepath
	    };
	  }

	  _$IMSDKRoot2.default.invoke('chat.file.' + action, param).then(function () {
	    if (action === 'DeleteFile') {

	      var p = Util.parents(target, 'J_msg');
	      p && p.parentNode.removeChild(p);
	    } else if (action === 'OpenFile' || action === 'OpenDir') {
	      if (fileData.data.unsafe) {
	        var f = Util.parents(target, 'file-msg');
	        var w = f && f.querySelector('.file-warning');
	        var d = f && f.querySelectorAll('.J_fileAction');

	        w && w.parentNode.removeChild(w);
	        d && d[0].parentNode.removeChild(d[0]);

	        delete fileData.data.unsafe;
	      }
	    }
	  });
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$HistoryRoot = __webpack_require__(4);

	var _$HistoryRoot2 = _interopRequireDefault(_$HistoryRoot);

	var _$BaseRoot = __webpack_require__(5);

	var _$JuicerRoot = __webpack_require__(14);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _index = __webpack_require__(179);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(180);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Plugin = _$HistoryRoot2.default.Plugin,
	    Template = _$HistoryRoot2.default.Template; /**
	                                                 * Created by neitherzhu on 2017/2/27.
	                                                 */

	var linkToolBox = Plugin.getPlugin('linkToolBox');
	var TOOL_BTN_LIST = [{
	  text: 'Открыть ссылку',
	  action: 'im.bizutil.DoUrlAction',
	  param: { url: "${url}" }
	}, {
	  text: 'Отчет',
	  action: 'im.uiutil.ShowReportCenter',
	  param: { url: "${url}", page: 2 }
	}, {
	  text: 'копировать',
	  action: 'im.bizutil.CopyText2Clipboard',
	  param: { content: "${url}" }
	}];

	if (linkToolBox) {
	  linkToolBox.getTpl = function (sf) {
	    return (0, _$JuicerRoot2.default)(_index2.default.trim(), {
	      isSafe: sf == 1,
	      btns: TOOL_BTN_LIST,
	      url: this.url,
	      encodeUrl: encodeURIComponent(this.url)
	    });
	  };
	}

/***/ },
/* 179 */
/***/ function(module, exports) {

	module.exports = "<div class=\"imui-msg-link-box\">\n  <i class=\"warning-icon\"></i>\n  <div>\n    <div class=\"warning-text\">\n      {@if isSafe}\n      Безопасная ссылка, будьте уверены, чтобы открыть\n      {@else}\n      Неизвестная ссылка, пожалуйста, открывайте с осторожностью\n      {@/if}\n    </div>\n  </div>\n  <div class=\"warning-actions\">\n    {@each btns as btn}\n    <a href=\"javascript:void(0)\" data-action=\"${btn.action}\" class=\"warning-action J_linkAction\">${btn.text}</a>\n    {@/each}\n  </div>\n  <div class=\"url-tip\">\n    {@if isSafe}\n    <a href=\"http://web.wangwang.taobao.com/safe/verifyseal.do?dn=${encodeUrl}\" class=\"muted J_CustomLink\" target=\"_blank\">Надежный веб-сайт China Net</a>\n    {@else}\n    <a href=\"http://110.taobao.com/home/school.htm\" class=\"muted J_CustomLink\" target=\"_blank\">Как определить подозрительные ссылки?</a>\n    {@/if}\n  </div>\n</div>\n";

/***/ },
/* 180 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var Plugin = new _$BaseRoot.Base.Plugin();

	exports.default = Plugin;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(183);

	var TABMAP = [{
	  name: 'Новости',
	  url: './history.html' + (location && location.search)
	}, {
	  name: 'файл',
	  url: './file_list.html' + (location && location.search)
	}];

	exports.default = {
	  init: function init(config) {
	    var container = config.container;
	    if (!container) {
	      return;
	    }
	    container.className = 'msg-outer-head';
	    this.createHtmlNode(container, config.type || 0);
	  },
	  createHtmlNode: function createHtmlNode(container, type) {
	    var tpl = TABMAP.map(function (item, index) {
	      if (index === type) {
	        return '<a href="' + item.url + '" class="head_item active">' + item.name + '</a>';
	      }
	      return '<a href="' + item.url + '" class="head_item">' + item.name + '</a>';
	    }).join('');

	    container.innerHTML = tpl;
	  }
	};

/***/ },
/* 183 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$IMSDKRoot = __webpack_require__(26);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$HistoryRoot = __webpack_require__(4);

	var _$HistoryRoot2 = _interopRequireDefault(_$HistoryRoot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SDK = _$HistoryRoot2.default.SDK;


	SDK.contextMenu = function (param) {
	  return _$IMSDKRoot2.default.invoke('im.uiutil.ShowContextMenu', param);
	};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$HistoryRoot = __webpack_require__(4);

	var _$HistoryRoot2 = _interopRequireDefault(_$HistoryRoot);

	var _fileResult = __webpack_require__(186);

	var _fileResult2 = _interopRequireDefault(_fileResult);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Template = _$HistoryRoot2.default.Template;


	Template.fileResult = _fileResult2.default;

/***/ },
/* 186 */
/***/ function(module, exports) {

	module.exports = "<div class=\"J_msg imui-msg{@if !self} imui-msg-l{@else} imui-msg-r{@/if}{@if cls} ${cls}{@/if}{@if fold} msg-fold{@/if}\" id=\"${msgid}\"data-time=\"${msgtime}\" data-appkey=\"${from.appkey}\" data-nick=\"${from.nick}\">\n  {@if avatar}\n  <div class=\"imui-msg-avatar J_avatar_${appkey}${subNick}{@if !self} J_openSingleChat{@/if}\"\n       style=\"background-image:url(${avatar});background-size:cover;\"></div>\n  {@/if}\n  <div class=\"imui-msg-content\">\n    <div class=\"imui-msg-content-inner\">\n      <div class=\"imui-msg-head\">\n                <span class=\"imui-msg-sender J_display_${subNick}\" title=\"{@if !isSubNick}${from.display}{@else}${from.display} --> ${to.display}{@/if}\">\n                    {@if !isSubNick}{@if from.display}${from.display}{@else}${from.nick}{@/if}{@else}{@if from.display}${from.display}{@else}${from.nick}{@/if} --> {@if to.display}${to.display}{@else}${to.nick}{@/if}{@/if}\n                </span>\n        <span class=\"imui-msg-date\">${msgtime | timeFormatter}</span>\n      </div>\n      <div class=\"msg-content-body\">\n        <div class=\"msg-body-html\">\n\n          <div class=\"ww-file-msg\">\n            <span class=\"ww-file-ext\"><i></i>${data.ext}</span>\n            <div class=\"ww-file-info\">\n              <h4>\n                <span class=\"ww-file-name\">${data.filename}</span>\n                {@if data.filesize}<span class=\"ww-file-size\">${data.filesize}</span>{@/if}\n              </h4>\n              {@if data.tip}<div class=\"ww-file-tip\">${data.tip}</div>{@/if}\n              {@if data.warning}<div class=\"ww-file-warning\">$${data.warning}</div>{@/if}\n              {@if !self}\n              <div class=\"ww-file-operation\">\n                {@if data.unsafe}<a href=\"javascript:;\" class=\"J_fileAction\" data-action=\"DeleteFile\" data-id=${msgid}>删除(建议)</a>{@/if}\n                <a href=\"javascript:;\" class=\"J_fileAction\" data-action=\"OpenFile\" data-id=${msgid}>打开</a>\n                {@if !is_folder_}<a href=\"javascript:;\" class=\"J_fileAction\" data-action=\"OpenDir\" data-id=${msgid}>打开文件夹</a>{@/if}\n              </div>\n              {@else}\n              {@if linkmsg}<div class=\"ww-file-operation\"><a href=\"javascript:;\" class=\"J_fileAction\" data-action=\"ClickLinkMsg\" data-id=${msgid}>修改Настраивать</a> </div>{@/if}\n              {@/if}\n            </div>\n          </div>\n\n        </div>\n        <div class=\"imui-msg-status\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$HistoryRoot = __webpack_require__(4);

	var _$HistoryRoot2 = _interopRequireDefault(_$HistoryRoot);

	var _$BaseRoot = __webpack_require__(5);

	var _$ConvertRoot = __webpack_require__(188);

	var _util = __webpack_require__(189);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by neitherzhu on 2017/3/8.
	 */
	var Log = _$BaseRoot.Base.Log,
	    Cache = _$BaseRoot.Base.Cache;
	var Win = _$HistoryRoot2.default.Win;


	_$ConvertRoot.Convert.injectNormalFormat = function (msg, result) {

	    var t = Win.conversationID.type;
	    if (t === 2) {
	        result.isTribe = true;
	    } else if (t === 1) {
	        var fromNick = _util2.default.getUid(msg.fromid);
	        var loginNick = _util2.default.getUid(Win.loginID);

	        if (fromNick === loginNick) {
	            result.self = true;
	        } else {
	            result.self = false;
	        }
	    }

	    return result;
	};

	_$ConvertRoot.Convert.add('chat', 10, 'receivedFileMsg', {
	    Tpl: _$HistoryRoot2.default.Template.fileResult,
	    format: function format(msg) {

	        msg.msgbody = JSON.parse(msg.msgbody);

	        var mb = msg.msgbody;
	        var fromUid = _util2.default.getUid(msg.fromid);
	        var cuid = _util2.default.getUid(Win.conversationID);
	        var uid = _util2.default.getUid(Win.loginID);
	        var self = uid === fromUid;
	        var isFolder = mb.isFolder;
	        var v = mb.filePath.split('.');
	        var ext = isFolder ? 'папка' : v[v.length - 1];
	        var unsafe = !self && mb.checkStatus == 2;
	        var filename = mb.filePath.match(/\\([^\\]+)$/)[1];
	        var tip = self ? mb.offlineFile && mb.offlineFileKeepDayOnSvr ? 'Файл загружен на сервер и будет сохранен для ваших друзей.' + mb.offlineFileKeepDayOnSvr + 'день.' : 'Был отправлен' : 'Сохранено успешно в' + mb.filePath;
	        var warning = unsafe ? 'Предупреждение: в полученном файле"<span class="warning">' + filename + '</span>"Существуют риски безопасности, которые могут серьезно угрожать безопасности вашей транзакции и имущества. Рекомендуется немедленно удалить его.' : '';
	        var filesize = _util2.default.getSize(mb.fileSize);
	        var result = {
	            msgid: msg.msgid,
	            msgtime: msg.msgtime,
	            from: msg.fromid,
	            to: msg.toid,
	            avatar: msg.fromid.portrait,
	            subNick: msg.fromid.nick.replace(':', '_'),
	            self: self,
	            data: {
	                ext: ext,
	                filename: filename,
	                tip: tip,
	                warning: warning,
	                filesize: filesize,
	                unsafe: unsafe,
	                is_folder_: isFolder,
	                filepath: mb.filePath
	            }
	        };
	        var c = {};
	        c[msg.msgid] = result;

	        Cache.set('fileData', c);

	        Log.red('文件Новости', result);

	        return result;
	    }
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(44);

	var _constants2 = _interopRequireDefault(_constants);

	var _sdk = __webpack_require__(47);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	var _convert = __webpack_require__(67);

	var _convert2 = _interopRequireDefault(_convert);

	var _callbacks = __webpack_require__(68);

	var _callbacks2 = _interopRequireDefault(_callbacks);

	var _normalMsgFormater = __webpack_require__(69);

	var _normalMsgFormater2 = _interopRequireDefault(_normalMsgFormater);

	var _systemMsgFormater = __webpack_require__(94);

	var _systemMsgFormater2 = _interopRequireDefault(_systemMsgFormater);

	var _window = __webpack_require__(48);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(111);

	var _actions2 = _interopRequireDefault(_actions);

	var _plugins = __webpack_require__(131);

	var _plugins2 = _interopRequireDefault(_plugins);

	__webpack_require__(153);

	__webpack_require__(164);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	  Constant: _constants2.default,
	  SDK: _sdk2.default,
	  Template: _template2.default,
	  Convert: _convert2.default,
	  Callbacks: _callbacks2.default,
	  Plugin: _plugins2.default,
	  Action: _actions2.default,
	  MsgFormats: {
	    SingleNormalMsgFormat: _normalMsgFormater2.default,
	    TribeNormalMsgFormat: _normalMsgFormater2.default,
	    SystemFormat: _systemMsgFormater2.default
	  },
	  shareWin: function shareWin(w) {
	    _window2.default.sharedWin = w;
	    _plugins2.default.init({ container: _window2.default.sharedWin.container });
	    _actions2.default.start.action();
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(5);

	var Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2017/3/8.
	                                  */

	Util.getSize = function (size) {
	  var suffix = 'KB';
	  var s = void 0;

	  size /= 1024;

	  if (size > 1024) {
	    size /= 1024;
	    suffix = 'MB';
	  }

	  if (size > 1024) {
	    size /= 1024;
	    suffix = 'GB';
	  }

	  s = size.toFixed(2);

	  if (s <= 0) {
	    s = 0.01;
	  }

	  return s + suffix;
	};

	exports.default = Util;

/***/ },
/* 190 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
])
});
;