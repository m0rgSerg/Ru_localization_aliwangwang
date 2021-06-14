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

	var _$BaseRoot = __webpack_require__(2);

	var _$BaseRoot2 = _interopRequireDefault(_$BaseRoot);

	var _$ConversationRoot = __webpack_require__(3);

	var _$ConversationRoot2 = _interopRequireDefault(_$ConversationRoot);

	var _$IMSDKRoot = __webpack_require__(7);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	__webpack_require__(33);

	__webpack_require__(39);

	__webpack_require__(42);

	__webpack_require__(58);

	__webpack_require__(59);

	__webpack_require__(61);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ------------------------------------------------------
	window.DEBUG = /local|(\d+\.)/.test(location.origin) || localStorage.getItem('WW_DEBUG');

	if (window.DEBUG) {
	    window.IMSDK = _$IMSDKRoot2.default;
	}

	// 重写invoke方法，添加日志及剥离result
	var oldInvoke = _$IMSDKRoot2.default.invoke;
	_$IMSDKRoot2.default.invoke = function (api, param) {
	    return new Promise(function (resolve, reject) {
	        window.DEBUG && console.log('%c【DEBUG】INVOKE: ' + api, 'color:#999999', param);
	        return oldInvoke(api, param).then(function (result) {
	            window.DEBUG && console.log('%c【INFO】RESPONSE OF ' + api, 'color:green;', result);
	            if (param && param.doNotGiveMeResult) {
	                resolve(result);
	            } else {
	                resolve(result.result !== undefined ? result.result : result);
	            }
	        }).catch(function (error) {
	            console.log('%c【ERROR】RESPONSE OF ' + api, 'color:red;', error);
	            reject(error);
	        });
	    });
	};
	// --------------------------------------------------------

	var Log = _$BaseRoot2.default.Base.Log;
	var Action = _$ConversationRoot2.default.Action,
	    Win = _$ConversationRoot2.default.Win;

	Log.setPrefix('CONVERSATION');
	Log.setLogLevel(0);

	window.addEventListener('DOMContentLoaded', function () {
	    Win.container = document.getElementById('J_conversationListWrap');
	    Action.start.action();
	});

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _actions = __webpack_require__(4);

	var _actions2 = _interopRequireDefault(_actions);

	var _constants = __webpack_require__(8);

	var _constants2 = _interopRequireDefault(_constants);

	var _plugins = __webpack_require__(24);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _sdk = __webpack_require__(6);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _template = __webpack_require__(16);

	var _template2 = _interopRequireDefault(_template);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	var _window = __webpack_require__(15);

	var _window2 = _interopRequireDefault(_window);

	__webpack_require__(32);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  Action: _actions2.default,
	  Constant: _constants2.default,
	  Plugin: _plugins2.default,
	  SDK: _sdk2.default,
	  Template: _template2.default,
	  Event: _event2.default,
	  Win: _window2.default
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getConversations = __webpack_require__(5);

	var _getConversations2 = _interopRequireDefault(_getConversations);

	var _renderConversations = __webpack_require__(14);

	var _renderConversations2 = _interopRequireDefault(_renderConversations);

	var _setActiveConversation = __webpack_require__(21);

	var _setActiveConversation2 = _interopRequireDefault(_setActiveConversation);

	var _updateUnreadNum = __webpack_require__(22);

	var _updateUnreadNum2 = _interopRequireDefault(_updateUnreadNum);

	var _start = __webpack_require__(23);

	var _start2 = _interopRequireDefault(_start);

	var _bindEvents = __webpack_require__(28);

	var _bindEvents2 = _interopRequireDefault(_bindEvents);

	var _closeConversation = __webpack_require__(29);

	var _closeConversation2 = _interopRequireDefault(_closeConversation);

	var _getCurrentLoginID = __webpack_require__(31);

	var _getCurrentLoginID2 = _interopRequireDefault(_getCurrentLoginID);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by neitherzhu on 2016/12/9.
	 */
	exports.default = {
	  getConversations: _getConversations2.default,
	  renderConversations: _renderConversations2.default,
	  setActiveConversation: _setActiveConversation2.default,
	  updateUnreadNum: _updateUnreadNum2.default,
	  start: _start2.default,
	  bindEvents: _bindEvents2.default,
	  closeConversation: _closeConversation2.default,
	  getCurrentLoginID: _getCurrentLoginID2.default
	};
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(2);

	var _sdk = __webpack_require__(6);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Log = _$BaseRoot.Base.Log; /**
	                                * Created by neitherzhu on 2016/12/11.
	                                * 获取接入列表数据
	                                */

	var getConversations = new _$BaseRoot.Base.ActionCreator();

	getConversations.actionType = 'async';
	getConversations.doAsync = function (context, param) {

	  return _sdk2.default.getConversationCache(param);
	};

	getConversations.after(function (context, data) {

	  Log.red('getConversations', data);

	  data.cid.type = data.type;
	  _index2.default.renderConversations.action(data.items, data.cid);
	});

	exports.default = getConversations;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$IMSDKRoot = __webpack_require__(7);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _constants = __webpack_require__(8);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
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
	   * 获取事件的缓存
	   * @param param
	   * @returns {*}
	   */
	  getConversationCache: function getConversationCache(param) {
	    return new Promise(function (resolve, reject) {
	      _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_CONVERSATION_CACHE, param).then(function (data) {
	        if (data && data.code == 0 && data.result) {
	          resolve(JSON.parse(data.result));
	        } else {
	          reject(data);
	        }
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  },


	  /**
	   * 设置当前接入列表的数据
	   * @param param
	   */
	  setConversationCache: function setConversationCache(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.SET_CONVERSATION_CACHE, param);
	  },
	  tellClientReadNumChange: function tellClientReadNumChange(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.TELL_CLIENT_READ_NUM_CHANGE, param);
	  },
	  setActiveConversation: function setActiveConversation(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.SET_ACTIVE_CONVERSATION, param);
	  },
	  closeSingleConversation: function closeSingleConversation(param) {
	    param.doNotGiveMeResult = true;
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.CLOSE_SINGLE_CONVERSATION, param);
	  },


	  /**
	   * 关闭聊天大面板
	   */
	  closeWindow: function closeWindow() {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.CLOSE_WINDOW);
	  },
	  flashAdaptor: function flashAdaptor(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.FLASH_ADAPTER, param);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _event = __webpack_require__(9);

	var _event2 = _interopRequireDefault(_event);

	var _sdk = __webpack_require__(10);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _cls = __webpack_require__(11);

	var _cls2 = _interopRequireDefault(_cls);

	var _status = __webpack_require__(12);

	var _status2 = _interopRequireDefault(_status);

	var _statusIcons = __webpack_require__(13);

	var _statusIcons2 = _interopRequireDefault(_statusIcons);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TYPE = {
	  SINGLE: 1,
	  TRIBE: 2,
	  DISCUSSION: 3
	};

	exports.default = {
	  Event: _event2.default,
	  SDK: _sdk2.default,
	  CLS: _cls2.default,
	  CONVERSATION_TYPE: {
	    1: 'cid',
	    2: 'tid',
	    3: 'tid'
	  },
	  Other: {
	    TYPE: TYPE,
	    SDK_PREFIX_MAP: {
	      1: _sdk2.default.SINGLE_SDK_PREFIX,
	      2: _sdk2.default.TRIBE_SDK_PREFIX,
	      3: _sdk2.default.TRIBE_SDK_PREFIX
	    }
	  },
	  STATUS: _status2.default,
	  STATUSICONS: _statusIcons2.default,
	  MAX_UNREAD_NUM: 99
	};
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  CHAT_UNREAD_MSG_COUNT: 'im.singlemsg.onUnreadMsgCountNty',
	  TRIBE_UNREAD_MSG_COUNT: 'im.tribemsg.onUnreadMsgCountNty',
	  CONVERSATION_CHANGE: 'im.bizutil.onConversationChange',
	  CONVERSATION_TO_CLOSE: 'im.uiutil.onMainPanelPreClose',
	  MAIN_PANEL_STATUS_CHANGE: 'im.uiutil.onMainPanelStatusChange',

	  CHAT_CONVERSATION_CLOSE: 'im.uiutil.onConversationClose',
	  CHAT_CONVERSATION_CHANGE: 'im.uiutil.onConversationChange',
	  ALL_CHAT_CONVERSATION_CLOSE: 'allChatConversationClose',
	  QUIT_TRIBE: 'im.tribemgr.onQuitTribe',
	  CLOSE_TRIBE: 'im.tribemgr.onTribeClose',
	  BE_KICKED_TRIBE: 'im.tribemgr.onTribeKickMember',

	  CHAT_STATUS_CHANGE: 'im.contact.onContactStatusChange',
	  CHAT_PORTRAIT_CHANGE: 'im.contact.onContactPortraitChange',
	  CHAT_DISPLAY_CHANGE: 'im.contact.onContactDisplayChange',
	  TRIBE_PORTRAIT_CHANGE: 'im.tribemgr.onTribePortraitChanged',
	  TRIBE_INFO_CHANGE: 'im.tribemgr.onTribeBaseInfoChange'
	};
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  SINGLE_SDK_PREFIX: 'im.singlemsg.',
	  TRIBE_SDK_PREFIX: 'im.tribemsg.',

	  TELL_CLIENT_READ_NUM_CHANGE: 'im.conversation.PassNtfToClient',
	  GET_CONVERSATION_CACHE: 'im.conversation.GetConversationCache',
	  SET_CONVERSATION_CACHE: 'im.conversation.SetConversationParam',
	  SET_ACTIVE_CONVERSATION: 'im.conversation.SetActiveID',
	  GET_CONVERSATION_UNREAD_MSG_COUNT: 'im.conversation.GetConversationUnreadNum',
	  CLOSE_WINDOW: 'im.uiutil.ForceCloseWnd',
	  CLOSE_SINGLE_CONVERSATION: 'im.conversation.CloseSingleConversation',
	  GET_CURRENT_LOGIN_ID: 'im.login.GetCurrentLoginID',
	  FLASH_ADAPTER: 'im.uiutil.FlashAdapter'
	};
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  CONVERSATION_ACTIVE: 'active',
	  CLOSE_CONVERSATION: 'J_closeConversation',
	  CONVERSATION_ITEM: 'conversation-item'
	};
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2017/1/23.
	 */
	exports.default = {
	  0: { text: 'Не в сети' },
	  1: { text: 'В сети' },
	  2: { text: 'занятый', icon: 'busy' },
	  3: { text: 'Уходите', icon: 'away' },
	  4: { text: 'Телефон' },
	  5: { text: 'Столовая' },
	  6: { text: 'Подождите минутку' },
	  7: { text: 'Скрытность', icon: 'stealthy' },
	  8: { text: 'Автономный вход' },
	  9: { text: '' },
	  10: { text: 'В сети', icon: 'online' },
	  //11: {text:'免打扰',icon:quiet},
	  // 免打扰换成занятый
	  11: { text: 'занятый', icon: 'busy' },
	  12: { text: 'Войти с телефона', icon: 'wxonline' },
	  13: { text: 'Войти с телефона', icon: 'wxonline' },
	  30: { text: 'Войти с телефона', icon: 'wxonline' },
	  33: { text: 'Войти с телефона', icon: 'wxonline' },
	  34: { text: 'занятый', icon: 'busy' },
	  35: { text: 'Уходите', icon: 'away' },
	  36: { text: 'Телефон' },
	  37: { text: 'Выходить' },
	  38: { text: 'Подождите минутку' },
	  39: { text: 'Скрытность' },
	  40: { text: 'Автономный вход' },
	  41: { text: '' }
	};
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2017/1/23.
	 */
	exports.default = {
	  online: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAURJREFUKBVjZICC////M9ZfVUlhYPiXzMjAqA0S/s/w/yoDA9PcRu07cxgZGf+DxBhBROs1Tclf/34uAWpyAvHRAVDxPjYm9phqrevPmUAm41MM0gwyCKqGkbHuinIqw/9/s9BNxcpnZEpjArkZqyRUUJxdg6FM4zSDKo8jUORfMhPMgwrcFhj6RNiVGeIUFzJsflbDcPvLfqCHGbWBNkBAmOwUBg1eNxiXQYhNniFeYQnDjuetDNc/7YSLM9tnCfgDeTJ3vxxmCJGdxPD97weGH38/MiQqLmfY/6qf4eLH9XDFQCvOs4DCGeg28xc/rjPMux/GkKO6m+Hf/79Ak5sZzn9Yg1AMZjHNZQQFa8NV5T2wOOBlEWPgZRFnePbjMopiUFw0aN91YQLFIChSQAIgFZ//vMKqGKrmPzimQQpBNhGTNAC2F4qT1moY4AAAAABJRU5ErkJggg==',
	  busy: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAMdJREFUKBWNkj0OwjAMhf0sLsEZupQGiaVlQByDjZ87gUAsHAN1AAYYysYZuEWNHdKlTREZkvj52UryBRSGiICmbkVSL1VKgvwi8IEu1R6AmAabpHBDquuT7mYWdwdKYl7gWr3Zd/5ptnJtpB7zQopsrcGu2zWiMG84nDmSjUh6v4HK3wumjmg0jriCdNzaJuF+RzwDydM7CU3i6ZYKerB/55beGyoT+GfNs3M/g6ZcWdyec/YEFYoyLJtUdw3glIInbYZ/v8YHKNtKbzWC2/cAAAAASUVORK5CYII=',
	  away: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAaJJREFUKBV9U79PwkAY/e5aQmsRXCibaCIL6aoOwG4EZYI/EiYUiKvof2DDoonUrceGicVAe/Y1UmqDdGi+u3vvvh/vHaPUJ6Vk/cHYCkg2wthkjAlO7KnTvrbDWCbhLLnoDR7OOJc9RVEqJbPEsrqmfXvLpStc6fv+axCwbrd99bbhxOT+3ai1Xgf3lmX5pydlxfcDWq9XlM1mI6zjfPj2dLriTHY6t80hNiMyMkoKXhq1mpbPH0Zg1xU0cxy6vDiP1vgtFp/0OJmQomQqqICjR5RqVauZDTFGpwKcozLgIx6Ggx7L5WMlhd25REvAg8cDKetF04x738lIbWKYUEOVJEu6rmupczIMg4QQNByN46N6vUZHhQJBBcioMmKu9+UtQ4QRo8IglzOo1WoSya20oc4RBPJBf5Uz9jyfiy0icUME/SUktgm6wzgczoEB3meOnwT8F0Nv4MELEzMJ59i2rUDHfR/OYRTgwYunDIcFoa2h9y7ZUBkSqCq/+eOwTbakt4tFk+kHuuZ53nIuxH5vby6Ac6JXFeoPGaEGhrrrVf0AuzvcEvYICbUAAAAASUVORK5CYII=',
	  quiet: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAATVJREFUKBWNUjtIA1EQnH3aKqZQsLHQUizMWSYi1nZiIUgajY0gpBAEGzt7Sz+N2FkJFoISRFN6WEjKWNgIflBM6926896Fg5jChTvu7c3szs4+QRaqKpiN1qDpqqUms3QT4o5xGx+JiDInfGkpGkOaXkB0iue/IXU4tyJ38YvzlTvg/j7F1g5wfhWe3T1geMQq67wVPCVWtFys2uEABP8kgvEJYP8QGCqERu1voLKkeHsV67LuMs1AbTuAn1rAZhX4+gyEgUFgo+alE+ssGwYszYXK7NBNmp4JZMOSkAdlUE4vUoYioem/H+5DqhepcRP+GTYfmm6cnAmomcEZOAvldQzxQ9tSbB117wLduL4EPt6BJAEWl3OwyqNfIItpORqlz95vJrqDYOcWpBE/B7sM8N+r8Qt8oJApXLsQUwAAAABJRU5ErkJggg==',
	  stealthy: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkzN0ZGMDRDRkQ5RDExRTU4QUExRDcwQ0JEMEIyMENGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzN0ZGMDRERkQ5RDExRTU4QUExRDcwQ0JEMEIyMENGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkE3NDdFMDlGRDY5MTFFNThBQTFENzBDQkQwQjIwQ0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkE3NDdFMEFGRDY5MTFFNThBQTFENzBDQkQwQjIwQ0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4TmmGWAAAAn0lEQVR42mJkgIL3zZrcQCoPiKOAWB0qfBOIlwHxJMHa619BAoxQxSpAaisQqzFgB7eA2Buo6Q4j1ORzeBQjazJigjqDkGIGqJo8FqibGdiNIxg4Peuwqvz/9S3Dxwn2QMa/KJCTfgHFWBmIA7+ZGEgELNCg0yHSSTdBTqoEirURaUEVyEmToEHGQESwTmKCxqA3AU2wiPvKSGrSAAgwAOQsO/aNqLZWAAAAAElFTkSuQmCC',
	  wxonline: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEFBNzIwMkMxMTFCMTFFMzlDMDVDNUVENTM1ODNFQjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEFBNzIwMkQxMTFCMTFFMzlDMDVDNUVENTM1ODNFQjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0QUE3MjAyQTExMUIxMUUzOUMwNUM1RUQ1MzU4M0VCMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QUE3MjAyQjExMUIxMUUzOUMwNUM1RUQ1MzU4M0VCMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrW9oGQAAAE/SURBVHjanFPNSsNAEN6JazHaiyB48erBB0lepCC+iPgOgi+SQ8hbeE9O0qIE2uZvf5zZzIa0pIF24CO7O/PtfJl8AdFHgLhi0BrEYViEQWiG8aSboihWWuuNPRGUoxqqJQ7dfI1YKqVy+fWzFDOhVo97KeUTLreS5YUA4EivL7eTpM/vvcAaSoaISrLUBapxBevKDMWAevi4f9F+syCO5EEE7tAakW/VtE7MMdENT/pzY7CT1iIv2+F2gNFwMedqOOSBDKPEeqdODseOdB91VHNDnemou1niZMdeqj6f6GSYC6WWb89ndXQG7rqO7DTYJkkS94zjePRFdMUGtwEv2izLPpqmKelWQhRFDn5f1/VvmqbvVEucweSIB8Q94o79Ow6a2g7xh9iQycF7lc0bei8ez4U7VYwWLv2R/wUYAMD0zlaWHv7DAAAAAElFTkSuQmCC'
	};
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(2);

	var _window = __webpack_require__(15);

	var _window2 = _interopRequireDefault(_window);

	var _template = __webpack_require__(16);

	var _template2 = _interopRequireDefault(_template);

	var _$JuicerRoot = __webpack_require__(19);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _util = __webpack_require__(20);

	var _util2 = _interopRequireDefault(_util);

	var _constants = __webpack_require__(8);

	var _constants2 = _interopRequireDefault(_constants);

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Cache = _$BaseRoot.Base.Cache,
	    Log = _$BaseRoot.Base.Log; /**
	                                * Created by neitherzhu on 2016/12/13.
	                                * 渲染接入列表
	                                */

	var TYPE_KEY = _constants2.default.CONVERSATION_TYPE;

	var renderConversations = new _$BaseRoot.Base.ActionCreator();

	renderConversations.before(function (context, data) {

	  if (!data || !data.length) return false;
	});

	renderConversations.doSync = function (context, data, activeCid) {

	  Log.orange('renderConversations', data, activeCid);

	  var _format = this.format(data),
	      list = _format.list,
	      existList = _format.existList;

	  var cache = Cache.get('conversation');

	  if (list && list.length) {
	    if (cache.isListWrapRendered) {
	      this.converationListEl.insertBefore(_util2.default.createFragment((0, _$JuicerRoot2.default)(_template2.default.conversationItem, list)), this.converationListEl.firstChild);
	    } else {
	      Cache.set('conversation', {
	        isListWrapRendered: true
	      });
	      _window2.default.container.innerHTML = (0, _$JuicerRoot2.default)(_template2.default.conversationList, {
	        conversationItem: _template2.default.conversationItem,
	        list: list
	      });
	      this.converationListEl = _window2.default.container.querySelector('.conversation-list');
	    }
	  }

	  if (existList && existList.length) {
	    existList.forEach(function (item) {
	      _index2.default.updateUnreadNum.action(item);
	    });
	  }

	  activeCid && _index2.default.setActiveConversation.action(activeCid);
	};

	renderConversations.format = function (data) {
	  var listItem = void 0;
	  var uid = void 0;
	  var list = [];
	  var cache = Cache.get('conversation');
	  var existItem = cache.existItem || {};
	  var existList = [];
	  var toCache = {};
	  var listToCache = [];

	  data.forEach(function (item) {
	    if (!(listItem = item[TYPE_KEY[item.type]]) || !(uid = _util2.default.getUid(listItem))) return;
	    listItem.type = item.type;
	    !listItem.highlight && (listItem.highlight = listItem.unreadnum != 0);
	    if (!existItem[uid]) {
	      existItem[uid] = 1;
	      listItem.uid = uid;
	      if (typeof listItem.status !== 'undefined') {
	        listItem.isOffline = listItem.status == 0;
	        listItem.icon = _constants2.default.STATUS[listItem.status].icon;
	      }
	      list.push(listItem);
	      listToCache.push(item);
	    } else {
	      existList.push(listItem);
	    }
	  });

	  toCache.existItem = existItem;

	  if (existList.length && cache.list) {
	    existList.forEach(function (item) {
	      var uid = _util2.default.getUid(item);
	      var innerItem = void 0;

	      for (var i = 0, len = cache.list.length; i < len; i++) {
	        innerItem = cache.list[i][TYPE_KEY[item.type]];
	        if (_util2.default.getUid(innerItem) === uid) {
	          innerItem = Object.assign(innerItem, item);
	          break;
	        }
	      }
	    });
	  }

	  if (listToCache.length) {
	    toCache.list = listToCache.concat(cache.list || []);
	  }

	  Cache.set('conversation', toCache);

	  Log.orange('format', list, existList, cache.list);
	  return {
	    list: list,
	    existList: existList
	  };
	};

	exports.default = renderConversations;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2016/12/13.
	 */
	exports.default = {
	  container: null
	};
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _conversationItem = __webpack_require__(17);

	var _conversationItem2 = _interopRequireDefault(_conversationItem);

	var _conversationList = __webpack_require__(18);

	var _conversationList2 = _interopRequireDefault(_conversationList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  conversationList: _conversationList2.default.trim(),
	  conversationItem: _conversationItem2.default.trim()
	};
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "{@each _ as item}\n<li\n  class=\"conversation-item J_cItem{@if item.highlight } highlight{@/if} {@if item.isOffline}offline{@/if}\"\n  data-uid=\"${item.uid}\" title=\"${item.display}\">\n  <div class=\"contact-avatar-wrap\">\n    <img class=\"contact-avatar\" src=\"${item.portrait}\" data-uid=\"${item.uid}\">\n    <i class=\"icon-status J_statusIcon status-${item.icon}\"></i>\n  </div>\n  <div class=\"contact-name\" data-uid=\"${item.uid}\" title=\"${item.display}\">${item.display}</div>\n  <div class=\"contact-opr\">\n    <div class=\"contact-remove\" title=\"删除会话\">\n      <i class=\"iconfont icon-guanbi J_closeConversation\" data-uid=\"${item.uid}\"></i>\n    </div>\n    <div class=\"msg-count{@if item.unreadnum === 0} hide{@/if}\">\n      ${item.unreadnum | getMaxNum}\n    </div>\n  </div>\n</li>\n{@/each}\n";

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"conversation-list\">\n  {@include conversationItem, list}\n</ul>\n";

/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(2);

	var _constants = __webpack_require__(8);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * Created by neitherzhu on 2016/12/13.
	                                                                                                                                                                                                     */


	var Util = _$BaseRoot.Base.Util;

	/**
	 * 根据消息类型获取特定的cid/tid
	 * @param data
	 * @returns {*}
	 */
	Util.getCid = function (data) {
	  if (!data) return null;

	  var type = data.type;
	  var cid = data[_constants2.default.CONVERSATION_TYPE[type]];
	  cid.type = type;

	  return cid;
	};

	// const getUid = Util.getUid;
	//
	// Util.getUid = function( user ) {
	//   let uid = getUid(user);
	//   uid && (uid = this.dealSubAccountUid(uid));
	//   return uid;
	// };
	//
	// Util.dealSubAccountUid = function( uid ) {
	//   return uid.replace(/:/g, '_')
	//     .replace(/ /g, '_')
	//     .replace(/．/g, '__dot__')
	//     .replace(/\./g, '__doten__')
	//     .replace(/－/g, '__break__')
	//     .replace(/\(/g, '__lqt__')
	//     .replace(/\)/g, '__rqt__');
	// };

	Util.getTargetByUid = function (container, cls, attr, uid) {
	  var els = container.querySelectorAll(cls);
	  var target = null;
	  [].concat(_toConsumableArray(els)).some(function (item) {
	    if (item.getAttribute(attr) === uid) {
	      target = item;
	      return true;
	    }
	  });

	  return target;
	};

	exports.default = Util;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(2);

	var _$IMSDKRoot = __webpack_require__(7);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _sdk = __webpack_require__(6);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(8);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(15);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Util = _$BaseRoot.Base.Util,
	    Cache = _$BaseRoot.Base.Cache; /**
	                                    * Created by neitherzhu on 2016/12/16.
	                                    * 设置当前选中聊天对象
	                                    */

	var TYPE_KEY = _constants2.default.CONVERSATION_TYPE;

	var setActiveConversation = new _$BaseRoot.Base.ActionCreator();

	setActiveConversation.doSync = function (context, data) {
	  var ACTIVE = _constants2.default.CLS.CONVERSATION_ACTIVE;
	  var activeEl = _window2.default.container.querySelector('.' + ACTIVE);
	  var cache = Cache.get('conversation');
	  var activedCid = cache.activeConversation;
	  var param = { from: {}, to: {} };

	  Cache.set('conversation', {
	    activeConversation: data
	  });

	  activeEl && activeEl.classList.remove(ACTIVE);

	  if (!data) {
	    _$IMSDKRoot2.default.broadcast(_constants2.default.Event.CHAT_CONVERSATION_CHANGE, { cid: {} });
	    return;
	  }

	  var activeUid = Util.getUid(data);
	  var newActiveEl = Util.getTargetByUid(_window2.default.container, '.J_cItem', 'data-uid', activeUid); //Win.container.querySelector('.J_' + activeUid);

	  if (newActiveEl) {
	    newActiveEl.classList.add(ACTIVE);
	    newActiveEl.classList.remove('highlight');
	  }

	  if (activedCid) {
	    param.from[TYPE_KEY[activedCid.type]] = activedCid;
	    param.from.type = activedCid.type;
	  } else {
	    param.from.type = -1;
	  }

	  param.to[TYPE_KEY[data.type]] = data;
	  param.to.type = data.type;

	  if (cache.list && cache.list.length) {
	    var len = cache.list.length;

	    for (var i = 0; i < len; i++) {
	      if (Util.getUid(cache.list[i][TYPE_KEY[data.type]]) === activeUid) {
	        cache.list[i][TYPE_KEY[data.type]].unreadnum = 0;
	        cache.list[i][TYPE_KEY[data.type]].highlight = 0;
	        break;
	      }
	    }
	  }

	  _sdk2.default.setActiveConversation(param);
	  _$IMSDKRoot2.default.broadcast(_constants2.default.Event.CHAT_CONVERSATION_CHANGE, { cid: data });
	};

	exports.default = setActiveConversation;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(2);

	var _sdk = __webpack_require__(6);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(15);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(8);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by neitherzhu on 2016/12/19.
	 */
	var Util = _$BaseRoot.Base.Util,
	    Cache = _$BaseRoot.Base.Cache;

	var TYPE_MAP = _constants2.default.CONVERSATION_TYPE;

	var updateUnreadNum = new _$BaseRoot.Base.ActionCreator();

	updateUnreadNum.doSync = function (context, data) {

	  var uid = Util.getUid(data);
	  var targetEl = Util.getTargetByUid(_window2.default.container, '.J_cItem', 'data-uid', uid); //Win.container.querySelector('.J_' + uid);
	  var msgCountEl = targetEl.querySelector('.msg-count');

	  !data.highlight && (data.highlight = data.unreadnum != 0);

	  msgCountEl.innerText = data.unreadnum <= _constants2.default.MAX_UNREAD_NUM ? data.unreadnum : _constants2.default.MAX_UNREAD_NUM + '+';
	  msgCountEl.classList[data.unreadnum >= 1 ? 'remove' : 'add']('hide');
	  targetEl.classList[data.highlight ? 'add' : 'remove']('highlight');

	  // 只有有新消息并且不在第一个时,才需要变更位置
	  if (data.highlight && targetEl.previousElementSibling) {
	    var clonedTargetEl = targetEl.cloneNode(true);
	    var parent = targetEl.parentNode;
	    parent.insertBefore(clonedTargetEl, parent.firstChild);
	    parent.removeChild(targetEl);
	  }
	};

	updateUnreadNum.after(function (context, data) {
	  var cache = Cache.get('conversation');
	  var list = cache.list || [];
	  var len = list.length;
	  var item = void 0;

	  for (var i = 0; i < len; i++) {
	    item = list[i][TYPE_MAP[data.type]];
	    if (Util.getUid(item) === Util.getUid(data)) {
	      _sdk2.default.flashAdaptor({ bFlash: item.unreadnum < data.unreadnum });
	      item.unreadnum = data.unreadnum;
	      item.highlight = data.unreadnum != 0;
	      break;
	    }
	  }

	  Cache.set('conversation', {
	    list: list
	  });
	});

	exports.default = updateUnreadNum;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(2);

	var _plugins = __webpack_require__(24);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	var _window = __webpack_require__(15);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by neitherzhu on 2016/12/9.
	 * 初始化
	 */
	var start = new _$BaseRoot.Base.ActionCreator();

	start.doSync = function () {
	  _plugins2.default.init({ container: _window2.default.container });
	  _index2.default.getCurrentLoginID.action();
	};

	exports.default = start;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createPlugin = __webpack_require__(25);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	__webpack_require__(26);

	__webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _createPlugin2.default;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(2);

	var Plugin = new _$BaseRoot.Base.Plugin();

	exports.default = Plugin;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(25);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _actions = __webpack_require__(4);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by neitherzhu on 2016/12/16.
	 * 关闭单个接入列表
	 */
	_createPlugin2.default.addEventPlugin('click', 'J_closeConversation', function (ev) {
	  var uid = ev.target.getAttribute('data-uid');

	  _actions2.default.closeConversation.action(uid);
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(2);

	var _createPlugin = __webpack_require__(25);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _constants = __webpack_require__(8);

	var _constants2 = _interopRequireDefault(_constants);

	var _actions = __webpack_require__(4);

	var _actions2 = _interopRequireDefault(_actions);

	var _util = __webpack_require__(20);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Cache = _$BaseRoot.Base.Cache; /**
	                                    * Created by neitherzhu on 2016/12/16.
	                                    * 点击接入列表切换联系对象
	                                    */

	_createPlugin2.default.addEventPlugin('click', function (ev) {
	  // 排除点击关闭按钮
	  if (ev.target.classList.contains(_constants2.default.CLS.CLOSE_CONVERSATION)) return;

	  var conversationItemEl = _util2.default.parents(ev.target, _constants2.default.CLS.CONVERSATION_ITEM);

	  if (conversationItemEl) {
	    var cache = Cache.get('conversation');
	    var list = cache.list;
	    var activedUid = cache.activeConversation && _util2.default.getUid(cache.activeConversation);
	    var activeUid = conversationItemEl.getAttribute('data-uid');

	    var toActive = list.filter(function (item) {
	      return item[_constants2.default.CONVERSATION_TYPE[item.type]].uid === activeUid;
	    })[0];

	    var cid = _util2.default.getCid(toActive);

	    if (_util2.default.getUid(cid) === activedUid) return;

	    _actions2.default.setActiveConversation.action(cid);
	  }
	});

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(2);

	var _$IMSDKRoot = __webpack_require__(7);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$JuicerRoot = __webpack_require__(19);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	var _constants = __webpack_require__(8);

	var _constants2 = _interopRequireDefault(_constants);

	var _sdk = __webpack_require__(6);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _util = __webpack_require__(20);

	var _util2 = _interopRequireDefault(_util);

	var _window = __webpack_require__(15);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by neitherzhu on 2016/12/11.
	 * 绑定事件
	 */
	var Cache = _$BaseRoot.Base.Cache,
	    Log = _$BaseRoot.Base.Log;

	var TYPE_MAP = _constants2.default.CONVERSATION_TYPE;
	var bindEvents = new _$BaseRoot.Base.ActionCreator();

	bindEvents.doSync = function () {

	  _$JuicerRoot2.default.register('getMaxNum', function (num) {
	    return num <= _constants2.default.MAX_UNREAD_NUM ? num : _constants2.default.MAX_UNREAD_NUM + '+';
	  });

	  _$JuicerRoot2.default.register('dealSubAccountNick', _util2.default.dealSubAccountUid);

	  // 退出群
	  _$IMSDKRoot2.default.on(_constants2.default.Event.QUIT_TRIBE, function (data) {
	    if (!data) return;
	    var tid = data.tribeid;
	    var uid = _util2.default.getUid(data.actor);
	    var login = _util2.default.getUid(_window2.default.loginID);

	    Log.red('login id', _window2.default.loginID);

	    if (!tid || uid != login) return;

	    var cache = Cache.get('conversation');
	    var existItem = cache.existItem;

	    if (existItem && existItem[tid.tribeid]) {
	      _index2.default.closeConversation.action(tid.tribeid, true);
	    }
	  });

	  // 被踢出群
	  _$IMSDKRoot2.default.on(_constants2.default.Event.BE_KICKED_TRIBE, function (data) {
	    if (!data) return;
	    var tid = data.tribeid;
	    var uid = _util2.default.getUid(data.recipient);
	    var login = _util2.default.getUid(_window2.default.loginID);

	    Log.red('login id', _window2.default.loginID);

	    if (!tid || uid != login) return;

	    var cache = Cache.get('conversation');
	    var existItem = cache.existItem;

	    if (existItem && existItem[tid.tribeid]) {
	      _index2.default.closeConversation.action(tid.tribeid, true);
	    }
	  });

	  // 停用群
	  _$IMSDKRoot2.default.on(_constants2.default.Event.CLOSE_TRIBE, function (data) {
	    var tid = data && data.tribeid;

	    if (!tid) return;

	    var cache = Cache.get('conversation');
	    var existItem = cache.existItem;

	    if (existItem && existItem[tid.tribeid]) {
	      _index2.default.closeConversation.action(tid.tribeid, true);
	    }
	  });

	  // 未读消息数量变更
	  _$IMSDKRoot2.default.on(_constants2.default.Event.CHAT_UNREAD_MSG_COUNT + ' ' + _constants2.default.Event.TRIBE_UNREAD_MSG_COUNT, function (data) {

	    var cache = Cache.get('conversation');
	    var existItem = cache.existItem;
	    var activeUid = _util2.default.getUid(cache.activeConversation);
	    var id = void 0;
	    var uid = void 0;
	    var index = [];
	    var i = 0;

	    if (existItem) {
	      data.items.forEach(function (item, idx) {
	        uid = item[TYPE_MAP[item.type]];
	        id = _util2.default.getUid(uid);

	        if (id === activeUid) {
	          index.push(idx);
	          return;
	        }

	        if (existItem[id]) {
	          index.push(idx);
	          uid.type = item.type;
	          _index2.default.updateUnreadNum.action(uid);
	        }
	      });
	    }

	    index.forEach(function (idx) {
	      data.items.splice(idx - i, 1);
	      i++;
	    });

	    if (!data.items.length) return;

	    if (data.bforceadd) {
	      data.cid.type = data.type;
	      var itemsToRender = [];
	      var itemsToPass = [];
	      data.items.forEach(function (item) {
	        if (!item[TYPE_MAP[item.type]].unreadnum) {
	          itemsToPass.push(item);
	        } else {
	          itemsToRender.push(item);
	        }
	      });
	      itemsToRender.length && _index2.default.renderConversations.action(itemsToRender, data.type == -1 ? null : data.cid);
	      itemsToPass.length && _sdk2.default.tellClientReadNumChange(itemsToPass);
	    } else {
	      _sdk2.default.tellClientReadNumChange(data.items);
	    }
	  });

	  // 聊天窗口即将关闭
	  _$IMSDKRoot2.default.on(_constants2.default.Event.CONVERSATION_TO_CLOSE, function () {
	    _sdk2.default.setConversationCache(Cache.get('conversation').list);
	  });

	  // 聊天对象切换
	  _$IMSDKRoot2.default.on(_constants2.default.Event.CONVERSATION_CHANGE, function (data) {
	    if (data) {

	      if (typeof data.cid !== 'string') {
	        data.cid.type = data.type;
	      } else {
	        data.cid = null;
	      }

	      var items = [];

	      data.items && data.items.forEach(function (item) {
	        if (!item.info) {
	          item[TYPE_MAP[item.type]].highlight = 1;
	          items.push(item);
	        }
	      });

	      _index2.default.renderConversations.action(items, data.cid);
	    }
	  });

	  // 聊天对象关闭
	  _$IMSDKRoot2.default.on(_constants2.default.Event.CHAT_CONVERSATION_CLOSE, function (data) {

	    if (data.from === 'conversation') return;

	    if (data.closeall === 1) {
	      _index2.default.closeConversation.action();
	      _sdk2.default.closeWindow();
	    } else {
	      var uid = _util2.default.getUid(data.cid);
	      _index2.default.closeConversation.action(uid);
	    }
	  });

	  /**
	   * 单聊在线状态变更
	   */
	  _$IMSDKRoot2.default.on(_constants2.default.Event.CHAT_STATUS_CHANGE, function (data) {
	    if (!data || !data.length) return;

	    var cache = Cache.get('conversation');
	    var existItem = cache.existItem;
	    var uid = void 0;

	    data.forEach(function (item) {

	      uid = _util2.default.getUid(item.userid);

	      if (!existItem || !existItem[uid]) return;

	      var user = _util2.default.getTargetByUid(document, '.J_cItem', 'data-uid', uid); //document.querySelector('.J_' + uid);

	      if (!user) return;

	      var statusIcon = user.querySelector('.J_statusIcon');
	      var cls = statusIcon.className;
	      var icon = _constants2.default.STATUS[item.status].icon || '';
	      cls = cls.replace(/status-[a-z]*/, 'status-' + icon);

	      if (item.status == 0) {
	        user.classList.add('offline');
	      } else {
	        user.classList.remove('offline');
	      }

	      statusIcon.className = cls;
	    });
	  });

	  _$IMSDKRoot2.default.on(_constants2.default.Event.CHAT_DISPLAY_CHANGE, function (data) {
	    if (!data || !data.length) return;

	    var cache = Cache.get('conversation');
	    var existItem = cache.existItem;
	    var uid = void 0;

	    data.forEach(function (item) {

	      uid = _util2.default.getUid(item.userid);

	      if (!existItem || !existItem[uid]) return;

	      var user = _util2.default.getTargetByUid(document, '.J_cItem', 'data-uid', uid); //document.querySelector('.J_' + uid);

	      if (!user) return;

	      var name = user.querySelector('.contact-name');

	      name.innerText = item.display;
	      name.title = item.display;
	    });
	  });

	  /**
	   * 单聊头像变更
	   */
	  _$IMSDKRoot2.default.on(_constants2.default.Event.CHAT_PORTRAIT_CHANGE, function (data) {
	    if (!data || !data.length) return;

	    var cache = Cache.get('conversation');
	    var existItem = cache.existItem;
	    var uid = void 0;

	    data.forEach(function (item) {
	      uid = _util2.default.getUid(item.userid);

	      if (!existItem || !existItem[uid]) return;

	      var user = _util2.default.getTargetByUid(document, '.J_cItem', 'data-uid', uid); //document.querySelector('.J_' + uid);

	      if (!user) return;

	      user.querySelector('.contact-avatar').src = item.portrait;
	    });
	  });

	  /**
	   * 群头像变更
	   */
	  _$IMSDKRoot2.default.on(_constants2.default.Event.TRIBE_PORTRAIT_CHANGE, function (data) {
	    if (!data || !data.length) return;

	    var cache = Cache.get('conversation');
	    var existItem = cache.existItem;
	    var uid = void 0;

	    data.forEach(function (item) {
	      uid = _util2.default.getUid(item.tribeid);

	      if (!existItem || !existItem[uid]) return;

	      var user = _util2.default.getTargetByUid(document, '.J_cItem', 'data-uid', uid); //document.querySelector('.J_' + uid);

	      if (!user) return;

	      user.querySelector('.contact-avatar').src = item.portrait;
	    });
	  });

	  /**
	   * 群基本信息变更
	   * 只需要处理群名称变更,其他的忽略
	   */
	  _$IMSDKRoot2.default.on(_constants2.default.Event.TRIBE_INFO_CHANGE, function (data) {
	    if (!data || !data.detail || !data.detail.length) return;

	    var cache = Cache.get('conversation');
	    var uid = _util2.default.getUid(data.tribeid);
	    var existItem = cache.existItem;
	    var len = data.detail.length;

	    if (!existItem || !existItem[uid]) return;

	    var user = _util2.default.getTargetByUid(document, '.J_cItem', 'data-uid', uid); //document.querySelector('.J_' + uid);

	    if (!user) return;

	    for (var i = 0; i < len; i++) {
	      if (data.detail[i].key == 1) {
	        var name = user.querySelector('.contact-name');

	        name.innerText = data.detail[i].value;
	        name.title = data.detail[i].value;
	        break;
	      }
	    }
	  });
	};

	bindEvents.after(function () {

	  _index2.default.getConversations.action({
	    event: [_constants2.default.Event.CHAT_UNREAD_MSG_COUNT, _constants2.default.Event.TRIBE_UNREAD_MSG_COUNT, _constants2.default.Event.CONVERSATION_CHANGE]
	  });
	});

	exports.default = bindEvents;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(2);

	var _$IMSDKRoot = __webpack_require__(7);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _sdk = __webpack_require__(6);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	var _window = __webpack_require__(15);

	var _window2 = _interopRequireDefault(_window);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	var _constants = __webpack_require__(8);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Util = _$BaseRoot.Base.Util,
	    Cache = _$BaseRoot.Base.Cache,
	    Log = _$BaseRoot.Base.Log; /**
	                                * Created by neitherzhu on 2016/12/19.
	                                */

	var TYPE_MAP = _constants2.default.CONVERSATION_TYPE;
	var closeConversation = new _$BaseRoot.Base.ActionCreator();
	closeConversation.actionType = 'async';
	closeConversation.before(function (context, uid) {
	  if (!uid) {
	    Cache.clear();
	    _window2.default.container.innerHTML = '';
	    return false;
	  }
	});

	closeConversation.doAsync = function (context, uid, forceClose) {
	  var _this = this;

	  Log.green(uid);
	  var cache = Cache.get('conversation');
	  var list = cache.list || [];
	  var item = void 0;
	  var conversationItemEl = Util.getTargetByUid(_window2.default.container, '.J_cItem', 'data-uid', uid);
	  var toCloseCid = void 0;
	  var i = 0;

	  Log.green(conversationItemEl);

	  if (!conversationItemEl) return false;

	  for (var len = list.length; i < len; i++) {
	    item = list[i];

	    if (Util.getUid(item[_constants2.default.CONVERSATION_TYPE[item.type]]) === uid) {
	      toCloseCid = item;
	      break;
	    }
	  }

	  context.toCloseCid = toCloseCid;

	  return new Promise(function (resolve) {

	    if (!forceClose) {
	      _sdk2.default.closeSingleConversation(toCloseCid).then(function (data) {
	        if (data.code === 0) {
	          _this.doClose(context, conversationItemEl, uid, i);
	          resolve();
	        }
	      });
	    } else {
	      _this.doClose(context, conversationItemEl, uid, i);
	      resolve();
	    }
	  });
	};

	closeConversation.doClose = function (context, conversationItemEl, uid, index) {

	  var cache = Cache.get('conversation');
	  var existItem = cache.existItem;
	  var activeUid = Util.getUid(cache.activeConversation);
	  var closeAll = false;
	  var activeCid = void 0;
	  var toCache = {};
	  var toCloseCid = context.toCloseCid;
	  var list = cache.list || [];

	  list.splice(index, 1);
	  delete existItem[uid];

	  Log.blue('Закройте сеанс', toCloseCid);
	  conversationItemEl.parentNode.removeChild(conversationItemEl);

	  toCache.list = list;
	  toCache.existItem = existItem;

	  // 点击关闭的是当前选中的聊天对象, 则需要再选择一个聊天对象
	  if (activeUid === uid) {

	    // 如果还有列表, 则选择第一个作为选中的聊天对象
	    if (list.length) {
	      activeCid = Util.getCid(list[0]);
	      _$IMSDKRoot2.default.broadcast(_constants2.default.Event.CHAT_CONVERSATION_CLOSE, {
	        cid: toCloseCid[TYPE_MAP[toCloseCid.type]],
	        from: 'conversation'
	      });
	      _index2.default.setActiveConversation.action(activeCid);
	      toCache.activeConversation = activeCid;
	    } else {

	      toCache.activeConversation = null;
	      closeAll = true;
	      // 如果没有列表了, 则广播一个事件
	      _event2.default.emit(_constants2.default.Event.ALL_CHAT_CONVERSATION_CLOSE);
	    }
	  }

	  context.toCloseCid = toCloseCid;
	  context.closeAll = closeAll;
	};

	closeConversation.after(function (context) {
	  if (context.closeAll) {
	    _$IMSDKRoot2.default.broadcast(_constants2.default.Event.CHAT_CONVERSATION_CLOSE, { closeall: 1 });
	  }
	});

	exports.default = closeConversation;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(2);

	var Event = new _$BaseRoot.Base.Event(); /**
	                                          * Created by neitherzhu on 2016/12/11.
	                                          */
	exports.default = Event;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(2);

	var _sdk = __webpack_require__(6);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(15);

	var _window2 = _interopRequireDefault(_window);

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by neitherzhu on 2017/2/14.
	 */
	var getCurrentLoginID = new _$BaseRoot.Base.ActionCreator();

	getCurrentLoginID.actionType = 'async';
	getCurrentLoginID.doAsync = function () {
	  return _sdk2.default.getCurrentLoginID();
	};

	getCurrentLoginID.after(function (context, data) {
	  _window2.default.loginID = data;
	}).after(function (context, data) {
	  _index2.default.bindEvents.action(data);
	});

	getCurrentLoginID.error = function (err) {
	  console.error('Action getCurrentLoginID Error', err);
	};

	exports.default = getCurrentLoginID;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(34);

	__webpack_require__(35);

	__webpack_require__(36);

	__webpack_require__(37);

	__webpack_require__(38);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$ConversationRoot = __webpack_require__(3);

	var _$ConversationRoot2 = _interopRequireDefault(_$ConversationRoot);

	var _$IMSDKRoot = __webpack_require__(7);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Cache = _$BaseRoot.Base.Cache,
	    Log = _$BaseRoot.Base.Log; /**
	                                * Created by neitherzhu on 2017/2/10.
	                                */

	var Action = _$ConversationRoot2.default.Action,
	    Event = _$ConversationRoot2.default.Event,
	    Constant = _$ConversationRoot2.default.Constant,
	    Win = _$ConversationRoot2.default.Win,
	    SDK = _$ConversationRoot2.default.SDK,
	    Plugin = _$ConversationRoot2.default.Plugin;

	var TYPE_MAP = Constant.CONVERSATION_TYPE;

	Action.bindEvents.before(function () {

	    Event.on('LEFTBAR_NAV_SELECTED', function (data) {
	        Log.orange('LEFTBAR_NAV_SELECTED', data);

	        if (!data) return;

	        if (data.type == 0) {
	            Action.setActiveConversation.action();
	        }
	    });

	    Event.on('BIZ_NAV_CLEARED', function (data) {
	        var cache = Cache.get('conversation');

	        if (cache && cache.list && cache.list.length) {
	            var c = cache.list[0];
	            var type = c.type;
	            c = c[TYPE_MAP[c.type]];
	            c.type = type;

	            Action.setActiveConversation.action(c);
	        } else {
	            _$IMSDKRoot2.default.broadcast(Constant.Event.CHAT_CONVERSATION_CLOSE, { closeall: 1 });
	        }
	    });

	    Win.container.addEventListener('contextmenu', function (ev) {
	        SDK.showContextMenu({
	            hit_x: ev.screenX,
	            hit_y: ev.screenY
	        }).then(function (data) {

	            if (data.action == 18) {
	                var cache = Cache.get('conversation');

	                if (cache && cache.list && cache.list.length) {
	                    var toClearHighLight = [];
	                    // 由于文件消息没有未读数,但是会高亮,需要在调用的时候就将高亮清除
	                    cache.list.forEach(function (item) {
	                        //if(item[TYPE_MAP[item.type]].highlight) {
	                        item[TYPE_MAP[item.type]].highlight = 0;
	                        Action.updateUnreadNum.action(item[TYPE_MAP[item.type]]);
	                        //}
	                    });
	                    SDK.ClearAllUnread(cache.list);
	                }

	                var newMsgTip = Plugin.getPlugin('newMsgTip');

	                newMsgTip && newMsgTip.remove();
	            } else if (data.action == 19) {
	                var _cache = Cache.get('conversation');
	                var _newMsgTip = Plugin.getPlugin('newMsgTip');

	                _newMsgTip && _newMsgTip.remove();

	                if (_cache && _cache.list && _cache.list.length) {
	                    Action.setActiveConversation.action();

	                    Cache.clear();
	                    Win.container.querySelector('.conversation-list').innerHTML = '';
	                }

	                SDK.closeWindow();
	                // Event.emit('LEFT_SIDEBAR_USER_CLEARED');
	            }
	        });
	    });
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$ConversationRoot = __webpack_require__(3);

	var _$ConversationRoot2 = _interopRequireDefault(_$ConversationRoot);

	var _$IMSDKRoot = __webpack_require__(7);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Cache = _$BaseRoot.Base.Cache,
	    Log = _$BaseRoot.Base.Log; /**
	                                * Created by neitherzhu on 2017/2/10.
	                                */

	var Action = _$ConversationRoot2.default.Action,
	    Event = _$ConversationRoot2.default.Event;


	Action.setActiveConversation.after(function (context, data) {

	  Event.emit('LEFTBAR_NAV_SELECTED', data);
	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$ConversationRoot = __webpack_require__(3);

	var _$ConversationRoot2 = _interopRequireDefault(_$ConversationRoot);

	var _$IMSDKRoot = __webpack_require__(7);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Cache = _$BaseRoot.Base.Cache,
	    Log = _$BaseRoot.Base.Log; /**
	                                * Created by neitherzhu on 2017/2/13.
	                                */

	var Action = _$ConversationRoot2.default.Action,
	    Event = _$ConversationRoot2.default.Event,
	    SDK = _$ConversationRoot2.default.SDK,
	    Constant = _$ConversationRoot2.default.Constant;


	Action.closeConversation.spliceAfter(0, 1, function (context, data) {

	    if (context && context.closeAll) {

	        Cache.clear();
	        SDK.closeWindow();
	        // Event.emit('LEFT_SIDEBAR_USER_CLEARED', context);
	        _$IMSDKRoot2.default.broadcast(Constant.Event.CHAT_CONVERSATION_CLOSE, { closeall: context.closeAll ? 1 : 0, from: 'conversation' });
	    }
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$ConversationRoot = __webpack_require__(3);

	var _$ConversationRoot2 = _interopRequireDefault(_$ConversationRoot);

	var _$IMSDKRoot = __webpack_require__(7);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Util = _$BaseRoot.Base.Util,
	    Cache = _$BaseRoot.Base.Cache,
	    Log = _$BaseRoot.Base.Log; /**
	                                * Created by neitherzhu on 2017/3/16.
	                                */

	var Action = _$ConversationRoot2.default.Action,
	    Event = _$ConversationRoot2.default.Event,
	    Win = _$ConversationRoot2.default.Win,
	    Plugin = _$ConversationRoot2.default.Plugin;


	Action.updateUnreadNum.after(function (context, data) {

	    Log.red('Обновлять>>>>', Util.getUid(data));

	    if (!data.highlight) return;

	    var uid = Util.getUid(data);
	    var targetEl = Util.getTargetByUid(document, '.J_cItem', 'data-uid', uid); //document.querySelector('.J_' + uid);

	    if (targetEl) {
	        var targetRect = targetEl.getBoundingClientRect();
	        var containerRect = Win.container.getBoundingClientRect();

	        Log.red('rect', targetRect, containerRect);

	        if (containerRect.top > targetRect.bottom) {
	            var newMsgTip = Plugin.getPlugin('newMsgTip');
	            newMsgTip && newMsgTip.render();
	        }
	    }
	});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$ConversationRoot = __webpack_require__(3);

	var _$ConversationRoot2 = _interopRequireDefault(_$ConversationRoot);

	var _$IMSDKRoot = __webpack_require__(7);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Util = _$BaseRoot.Base.Util,
	    Cache = _$BaseRoot.Base.Cache,
	    Log = _$BaseRoot.Base.Log; /**
	                                * Created by neitherzhu on 2017/3/20.
	                                */

	var Action = _$ConversationRoot2.default.Action,
	    Event = _$ConversationRoot2.default.Event,
	    Win = _$ConversationRoot2.default.Win,
	    Plugin = _$ConversationRoot2.default.Plugin,
	    Constant = _$ConversationRoot2.default.Constant;


	var TYPE_KEY = Constant.CONVERSATION_TYPE;

	Action.renderConversations.after(function (context, list) {

	    if (!list || !list.length) return;

	    var len = list.length;
	    var uid = void 0;
	    var targetEl = void 0;

	    for (var i = 0; i < len; i++) {
	        uid = Util.getUid(list[i][TYPE_KEY[list[i].type]]);
	        targetEl = Util.getTargetByUid(document, '.J_cItem', 'data-uid', uid); //document.querySelector('.J_' + uid);

	        if (targetEl) {
	            var targetRect = targetEl.getBoundingClientRect();
	            var containerRect = Win.container.getBoundingClientRect();

	            Log.red('rect', targetRect, containerRect);

	            if (containerRect.top > targetRect.bottom) {
	                var newMsgTip = Plugin.getPlugin('newMsgTip');
	                newMsgTip && newMsgTip.render();
	                break;
	            }
	        }
	    }
	});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.KEY_CODE = undefined;

	var _event = __webpack_require__(40);

	var _event2 = _interopRequireDefault(_event);

	var _sdk = __webpack_require__(41);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _$ConversationRoot = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var KEY_CODE = exports.KEY_CODE = {
	    ENTER: 13,
	    SHIFT: 16,
	    ESC: 27,
	    LEFT: 37,
	    UP: 38,
	    RIGHT: 39,
	    DOWN: 40
	};

	exports.default = {
	    Event: _event2.default,
	    SDK: _sdk2.default,
	    KEY_CODE: KEY_CODE
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(43);

	__webpack_require__(47);

	__webpack_require__(51);

	__webpack_require__(55);

	__webpack_require__(56);

	exports.default = Plugin; // import Plugin from './createPlugin';

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$VueRoot = __webpack_require__(44);

	var _$VueRoot2 = _interopRequireDefault(_$VueRoot);

	var _$IMSDKRoot = __webpack_require__(7);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$ConversationRoot = __webpack_require__(3);

	var _index = __webpack_require__(45);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(46);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// const {Log, Util} = Base;

	// import {Base} from '$BaseRoot';
	var userinfo = {
	    template: _index2.default,

	    data: function data() {
	        return {
	            portrait: '',
	            statusImage: ''
	        };
	    },
	    created: function created() {
	        var _this = this;

	        _$ConversationRoot.SDK.getLoginInfo().then(function (result) {
	            _this.portrait = result.portrait;
	            _this.statusImage = result.statusImage;
	        });

	        this.bindEvent();
	    },
	    destroyed: function destroyed() {
	        this.binder.clear();
	    },


	    methods: {
	        bindEvent: function bindEvent() {
	            var _this2 = this;

	            this.binder = new _$IMSDKRoot2.default.Binder();

	            /**
	             * 头像变更事件
	             * @callback {object} data {param: string}
	             */
	            this.binder.on('IMOnCUPortraitChange', function (data) {
	                _this2.portrait = data.param;
	            });

	            /**
	             * 用户状态变更事件
	             * @callback {object} data {statusImage: string, status: number}
	             */
	            this.binder.on('IMOnCUStateChange', function (data) {
	                _this2.statusImage = data.statusImage;
	            });
	        }
	    }
	}; /**
	    * ----------------------------------
	    * @file:   用户头像
	    * @author: Pluto <huazhi.chz@alibaba-inc.com>
	    * @create: 2017/02/08
	    * ----------------------------------
	    */

	_$ConversationRoot.Plugin.addPlugin('userinfo', {
	    init: function init() {
	        new _$VueRoot2.default({
	            el: '#J_userinfoWrap',
	            components: {
	                userinfo: userinfo
	            }
	        });
	    }
	});

/***/ },
/* 44 */,
/* 45 */
/***/ function(module, exports) {

	module.exports = "<div class=\"userinfo-container\">\n    <img v-if=\"portrait\" :src=\"portrait\" alt=\"\" class=\"user-avatar\">\n    <img v-if=\"statusImage\" :src=\"statusImage\" alt=\"\" class=\"user-status\">\n</div>\n";

/***/ },
/* 46 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$VueRoot = __webpack_require__(44);

	var _$VueRoot2 = _interopRequireDefault(_$VueRoot);

	var _$IMSDKRoot = __webpack_require__(7);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$ConversationRoot = __webpack_require__(3);

	var _$BaseRoot = __webpack_require__(2);

	var _index = __webpack_require__(48);

	var _index2 = _interopRequireDefault(_index);

	var _classnames = __webpack_require__(49);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(50);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Log = _$BaseRoot.Base.Log; /**
	                                * ----------------------------------
	                                * @file:   search plugin
	                                * @author: Pluto <huazhi.chz@alibaba-inc.com>
	                                * @create: 2017/02/08
	                                * ----------------------------------
	                                */

	var KEY_CODE = {
	    ENTER: 13,
	    SHIFT: 16,
	    ESC: 27,
	    LEFT: 37,
	    UP: 38,
	    RIGHT: 39,
	    DOWN: 40
	};

	var searchPlugin = {
	    template: _index2.default,
	    data: function data() {
	        return {
	            isActive: false,
	            isFocus: false,
	            inputValue: '',

	            highlightIndex: -1,
	            highlightItem: null,

	            resultList: [{ group: 'Контактное лицо', data: [] }, { group: 'Дискуссионная группа', data: [] }, { group: 'группа', data: [] }],
	            extraList: {
	                before: [],
	                after: []
	            }
	        };
	    },


	    computed: {
	        inputWrapClassName: function inputWrapClassName() {
	            return (0, _classnames2.default)('search-input-wrap', {
	                'is-focus': this.isFocus,
	                'not-empty': this.inputValue
	            });
	        }
	    },

	    created: function created() {
	        var _this = this;

	        // 获取当前登录用户，用于extraList
	        this.loginUID = '';
	        _$ConversationRoot.SDK.getLoginInfo().then(function (result) {
	            _this.loginUID = result.uid;
	            Log.setNick(_this.loginUID);
	        });
	    },


	    methods: {
	        itemClazz: function itemClazz(item) {
	            return (0, _classnames2.default)({
	                'active': item === this.highlightItem
	            });
	        },


	        /**
	         * 设置接入列表面板展开状态
	         */
	        setLeftPanelMode: function setLeftPanelMode() {
	            _$IMSDKRoot2.default.invoke('im.uiutil.SetLeftPanelMode', '1').then(function () {
	                _$IMSDKRoot2.default.broadcast('LEFT_PANEL_MODE_CHANGED', {
	                    mode: 1
	                });
	            });
	        },


	        /**
	         * 搜索联系人、群&讨论组
	         * @param  {string} keyword
	         * @return {Promise}
	         * @callback {object<string, Array>}
	         */
	        queryContact: function queryContact(keyword) {
	            var fmtData = { IM: [], TM: [], Multi: [] };
	            return _$IMSDKRoot2.default.invoke('chat.contact.SearchContact', keyword).then(function (result) {
	                result && result.forEach(function (item) {
	                    item.name = item.nick;
	                    fmtData[item.stype] && fmtData[item.stype].push(item);
	                });
	                return fmtData;
	            }).catch(function (error) {
	                console.error('Error in searchPlugin.queryContact', error);
	                return fmtData;
	            });
	        },


	        // 额外的搜索结果
	        getExtraList: function getExtraList(value) {
	            var isTaobao = /^cntaobao/.test(this.loginUID);
	            var afterList = [{ _isExtra: true, title: 'Поиск по всей сети', keywords: value, type: '_CONTACT', text: '<span>\u67E5\u627E\u8054\u7CFB\u4EBA\uFF1A<b>' + value + '</b></span>', htmlTitle: '\u67E5\u627E\u8054\u7CFB\u4EBA\uFF1A' + value }];
	            isTaobao && afterList.push({ _isExtra: true, title: 'Простой поиск', keywords: value, type: '_TAOBAO', text: '<span>\u67E5\u627E\u76F8\u5173\u5B9D\u8D1D\uFF1A<b>' + value + '</b></span>', htmlTitle: '\u67E5\u770B ' + value + ' \u76F8\u5173\u5B9D\u8D1D' });
	            !isTaobao && afterList.push({ _isExtra: true, title: 'поиск продукта', keywords: value, type: '_1688', text: '<span>\u67E5\u627E\u76F8\u5173\u5546\u54C1\uFF1A<b>' + value + '</b></span>', htmlTitle: '\u67E5\u770B ' + value + ' \u76F8\u5173\u5546\u54C1' });

	            var beforeList = [
	                // {_isExtra: true, title: 'Поиск по всей сети', keywords: value, type: '_CONTACT', text: `<span>查找联系人：<b>{value}</b></span>`, htmlTitle: `查找联系人：${value}`},
	            ];

	            this.extraList.before = beforeList;
	            this.extraList.after = afterList;
	        },
	        handleInputClick: function handleInputClick(e) {
	            var _this2 = this;

	            if (!this.inputValue) return;
	            // 点击的时候，如果结果浮层从隐藏到展示，则触发一次搜索
	            if (!this.isActive) {
	                e.target.selectionStart = 0;
	                e.target.selectionEnd = 100;
	                this.handleInputChange(null, true);
	            }

	            setTimeout(function () {
	                return _this2.isActive = true;
	            });
	        },
	        handleInputChange: function handleInputChange(e, isForce) {
	            var _this3 = this;

	            var _value = this.inputValue;
	            this.isActive = !!_value;
	            this.highlightIndex = 0;
	            this.highlightItem = null;

	            clearTimeout(this.searchTimmer);
	            if (!_value) return;
	            this.searchTimmer = setTimeout(function () {
	                _this3.queryContact(_value).then(function (result) {
	                    _this3.resultList[0].data = result.IM;
	                    _this3.resultList[1].data = result.Multi;
	                    _this3.resultList[2].data = result.TM;
	                    _this3.getExtraList(_value);

	                    setTimeout(function () {
	                        return _this3.toggleHighlightItem(0, 0);
	                    });
	                });
	            }, isForce ? 0 : 99.9999);
	        },
	        handleInputKeydown: function handleInputKeydown(e) {
	            switch (e.keyCode) {
	                case KEY_CODE.ENTER:
	                    e.preventDefault();
	                    this.handleInputEnter();
	                    break;
	                // case KEY_CODE.ESC: // 客户端代理了ESC键，这里无法处理
	                //     e.preventDefault();
	                //     e.stopPropagation();
	                //     this.inputValue = '';
	                //     this.$refs.input.blur();
	                //     break;
	                case KEY_CODE.UP:
	                case KEY_CODE.DOWN:
	                    e.preventDefault();
	                    this.handleInputDir(e.keyCode);
	                    break;
	                default:
	                    break;
	            }
	        },
	        handleInputEnter: function handleInputEnter() {
	            var _this4 = this;

	            if (!this.inputValue) return;
	            if (!this.isActive) return this.isActive = true;
	            this.highlightItem && this.handleItemClick(this.highlightItem);
	            setTimeout(function () {
	                return _this4.$refs.input.blur();
	            }, 100);
	        },
	        handleInputDir: function handleInputDir(keyCode) {
	            this.toggleHighlightItem(keyCode === KEY_CODE.UP ? -1 : 1);
	        },
	        handleInputFocus: function handleInputFocus(e) {
	            var _this5 = this;

	            clearTimeout(this.inputBlurTimmer);
	            this.inputFocusTimmer = setTimeout(function () {
	                _this5.isFocus = true;
	            }, 99.9999);
	        },
	        handleInputBlur: function handleInputBlur(e) {
	            var _this6 = this;

	            clearTimeout(this.inputFocusTimmer);
	            this.inputBlurTimmer = setTimeout(function () {
	                _this6.isFocus = false;
	                _this6.isActive = false;
	                _this6.$refs.input.selectionStart = 0;
	                _this6.$refs.input.selectionEnd = 0;

	                // fix bug of client
	                _this6.$refs.foo.focus();
	            }, 200);
	        },
	        handleClearClick: function handleClearClick(e) {
	            this.inputValue = '';
	        },


	        // 切换高亮选中
	        toggleHighlightItem: function toggleHighlightItem(dir, index) {
	            var _this7 = this;

	            var allList = this.extraList.before.concat(this.resultList[0].data).concat(this.resultList[1].data).concat(this.resultList[2].data).concat(this.extraList.after);
	            var nextIndex = index !== undefined ? index : this.highlightIndex + dir;
	            if (nextIndex < 0) nextIndex = allList.length - 1;
	            if (nextIndex > allList.length - 1) nextIndex = 0;

	            this.highlightIndex = nextIndex;
	            this.highlightItem = allList[nextIndex];

	            setTimeout(function () {
	                var box = _this7.$refs.box;
	                if (!box) return;
	                var highlightNode = box.querySelector('li.active');
	                highlightNode && highlightNode.scrollIntoViewIfNeeded();
	            });
	        },
	        handleItemClick: function handleItemClick(item) {
	            // gold log: 搜索结果操作次数
	            Log.goldLog('wwxb.2.85');

	            if (item._isExtra) return this.handleExtraItemClick(item);
	            var promise = void 0;
	            var stype = item.stype,
	                uid = item.uid;

	            switch (stype) {
	                case 'IM':
	                    promise = _$IMSDKRoot2.default.invoke('im.uiutil.OpenChatDlg', {
	                        cid: { appkey: uid.substring(0, 8), nick: uid.substring(8) }
	                    });
	                    break;
	                case 'TM':
	                    promise = _$IMSDKRoot2.default.invoke('im.uiutil.OpenTribeDlg', {
	                        cid: { tribeid: uid }
	                    });
	                    break;
	                case 'Multi':
	                    promise = _$IMSDKRoot2.default.invoke('im.uiutil.OpenMultiChatDlg', {
	                        cid: { tribeid: uid }
	                    });
	                    break;
	                default:
	                    console.error('Warn: unknown stype in search.handleItemClick', item);
	                    break;

	            }

	            promise.catch(function (error) {
	                return console.error('Error in search.handleItemClick', error);
	            }

	            // gold log: 搜索结果点击联系人、群
	            );Log.goldLog(stype === 'IM' ? 'wwxb.2.86' : 'wwxb.2.88');
	        },
	        handleExtraItemClick: function handleExtraItemClick(item) {
	            var _url = void 0;
	            var escapedKeyword = encodeURIComponent(item.keywords);

	            switch (item.type) {
	                case '_CONTACT':
	                    _$IMSDKRoot2.default.invoke('chat.contact.SendToContact', item.keywords);
	                    // gold log： Поиск по всей сети联系人
	                    Log.goldLog('wwxb.2.87');
	                    break;
	                case '_TAOBAO':
	                    _url = 'https://s.taobao.com/search?q=' + escapedKeyword;
	                    // gold log: 搜索宝贝
	                    Log.goldLog('wwxb.2.89');
	                    break;
	                case '_1688':
	                    _url = 'https://s.1688.com/selloffer/offer_search.htm?tracelog=wangwang&_input_charset=utf8&keywords=' + escapedKeyword;
	                    break;
	                case '_MSG':
	                    _$IMSDKRoot2.default.invoke('webpipe.InvokeAnotherWeb', {
	                        webName: 'WebName_HistoryMsg',
	                        urlParam: '#/search?keyword=' + escapedKeyword,
	                        webParam: JSON.stringify({ hash: '#/search?keyword=' + escapedKeyword, cmd: 'SEARCH' })
	                    });
	                    break;
	                default:
	                    break;
	            }

	            _url && _$IMSDKRoot2.default.invoke('util.TranslateUrl', _url).then(function (result) {
	                window.open(result);
	            }).catch(function () {
	                window.open(_url);
	            });
	        }
	    }
	};

	_$ConversationRoot.Plugin.addPlugin('search', {
	    init: function init() {
	        new _$VueRoot2.default({
	            el: '#J_searchWrap',
	            components: {
	                'search-plugin': searchPlugin
	            }
	        });
	    }
	});

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<div class=\"search-container\">\n    <i class=\"iconfont icon-sousuo\" @click=\"setLeftPanelMode\"></i>\n    <input ref=\"foo\" type=\"text\" class=\"foo-input\" readonly>\n    <em :class=\"inputWrapClassName\">\n        <input ref=\"input\"\n            v-model=\"inputValue\"\n            @click=\"handleInputClick\"\n            @input=\"handleInputChange\"\n            @keydown=\"handleInputKeydown\"\n            @focus=\"handleInputFocus\"\n            @blur=\"handleInputBlur\"\n            type=\"text\"\n            maxlength=\"60\"\n            placeholder=\"Контакт, группа и малыш\">\n        <span class=\"fn-clear\" @click=\"handleClearClick\">&times;</span>\n    </em>\n    <div class=\"search-result-box theme-bg\" v-if=\"isActive\" ref=\"box\">\n        <!-- extra before -->\n        <template v-for=\"item in extraList.before\">\n            <h3 class=\"search-result-title\">{{item.title}}</h3>\n            <ul class=\"search-result-list\">\n                <li :title=\"item.htmlTitle\" @click=\"handleExtraItemClick(item)\" :class=\"itemClazz(item)\">\n                    <div class=\"item-info\"><div class=\"item-title\"><h4 v-html=\"item.text\"></h4></div></div>\n                </li>\n            </ul>\n        </template>\n        <!-- result list -->\n        <template v-for=\"resultGroup in resultList\">\n            <template v-if=\"resultGroup.data.length\">\n                <h3 class=\"search-result-title\">{{resultGroup.group}}</h3>\n                <ul class=\"search-result-list\">\n                    <li v-for=\"item in resultGroup.data\"\n                        @click=\"handleItemClick(item)\"\n                        :class=\"itemClazz(item)\"\n                        :title=\"item.nick\" :key=\"item.uid\">\n                        <div class=\"imgbox\"><img :src=\"item.portrait\" alt=\"\"></div>\n                        <div class=\"item-info\">\n                            <div class=\"item-title\"><h4 v-html=\"item.nick\"></h4></div>\n                        </div>\n                    </li>\n                </ul>\n            </template>\n        </template>\n        <!-- extra after -->\n        <template v-for=\"item in extraList.after\">\n            <h3 class=\"search-result-title\">{{item.title}}</h3>\n            <ul class=\"search-result-list\">\n                <li :title=\"item.htmlTitle\" @click=\"handleExtraItemClick(item)\" :class=\"itemClazz(item)\">\n                    <div class=\"item-info\"><div class=\"item-title\"><h4 v-html=\"item.text\"></h4></div></div>\n                </li>\n            </ul>\n        </template>\n    </div>\n</div>\n";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 50 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$VueRoot = __webpack_require__(44);

	var _$VueRoot2 = _interopRequireDefault(_$VueRoot);

	var _$IMSDKRoot = __webpack_require__(7);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$ConversationRoot = __webpack_require__(3);

	var _$BaseRoot = __webpack_require__(2);

	var _index = __webpack_require__(52);

	var _index2 = _interopRequireDefault(_index);

	var _classnames = __webpack_require__(49);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _util = __webpack_require__(53);

	var _util2 = _interopRequireDefault(_util);

	__webpack_require__(54);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * ----------------------------------
	 * @file:   biz nav plugin
	 * @author: Pluto <huazhi.chz@alibaba-inc.com>
	 * @create: 2017/02/09
	 * ----------------------------------
	 */

	var Log = _$BaseRoot.Base.Log;


	var ICON_MAP = {
	    focus: 'information',
	    tao: 'tao',
	    shuang11: 'shuang11',
	    calen: 'calen'
	};

	var NICK_MAP = {
	    focus: 'Мой фокус',
	    tao: 'Мой Таобао',
	    shuang11: 'Двойное 11 продвижение',
	    calen: 'Календарь событий'
	};

	var bizNavPlugin = {
	    template: _index2.default,
	    data: function data() {
	        return {
	            navList: [], // biz nav list {uid, type, nick, show, site, url, unread}
	            activeNav: {}, // 当前激活的nav <int>type, <string>appkey, <string>nick, <string>info, <string>tribeid
	            activeBiz: '', // 当前激活的biz nav id
	            bizType: 0
	        };
	    },
	    created: function created() {
	        var _this = this;

	        this.binder = new _$IMSDKRoot2.default.Binder();

	        this.getNavList().then(function () {
	            _this.getActiveNav();
	            _this.bindEvents();
	        });
	    },
	    destroyed: function destroyed() {
	        this.binder.clear();
	    },


	    methods: {
	        itemClazz: function itemClazz(item) {
	            return (0, _classnames2.default)('biz-nav-item', {
	                'active': item.url === this.activeBiz
	            });
	        },
	        iconClazz: function iconClazz(item) {
	            return (0, _classnames2.default)('iconfont', 'icon-' + (ICON_MAP[item.url] || item.url));
	        },


	        // 获取当前登录用户的唯一标识
	        getUidHash: function getUidHash() {
	            var _this2 = this;

	            this.UID_HASH = '';
	            return _$ConversationRoot.SDK.getLoginInfo().then(function (result) {
	                _this2.UID_HASH = (result.uid || '').replace(/^cntaobao|cnalichn/, '');
	                return _this2.UID_HASH;
	            });
	        },


	        // 获取导航列表
	        getNavList: function getNavList() {
	            var _this3 = this;

	            return this.getUidHash().then(function (uid) {
	                return _$IMSDKRoot2.default.invoke('im.infopanel.GetInfoList');
	            }).then(function (data) {
	                data = data || [];

	                // 过滤掉不显示的项
	                data = data.filter(function (item) {
	                    return item.show;
	                });

	                // MARK 与原数据做对比，如果已经有active的项，但是在返回的数据里面没有找到，则push到返回的数据中
	                var prevNavList = _this3.navList;
	                var prevActiveNav = _this3.activeBiz;
	                if (prevActiveNav) {
	                    var prevActiveItem = prevNavList.find(function (x) {
	                        return x.url === prevActiveNav;
	                    });
	                    var activeItemInData = data.find(function (x) {
	                        return x.url === prevActiveNav;
	                    });
	                    if (!activeItemInData && prevActiveNav) {
	                        data.push(prevActiveItem);
	                    }
	                }

	                // 如果活动日历今天有过清除红点的记录，则今天不再显示红点
	                // MARK 记录的逻辑统一在主界面
	                var todayStamp = _util2.default.date('YY-MM-dd');
	                if (_util2.default.local.getItem('CLEAR_CALEN_RED_POINT|' + _this3.UID_HASH) === todayStamp) {
	                    data.some(function (x) {
	                        return x.url === 'calen' && !(x.unread = 0);
	                    });
	                }
	                // -----------------------------------------------------

	                _this3.navList = data;
	                _this3.activeBiz = '';
	            }).catch(function (error) {
	                console.log('Error in getNavList', error);
	            });
	        },


	        /**
	         * 获取当前选中的项
	         * @callback result {<int>type, <string>appkey, <string>nick, <string>info, <string>tribeid}
	         * type 0: info, 1: IM, 2: TM, 3: Multi
	         */
	        getActiveNav: function getActiveNav() {
	            var _this4 = this;

	            _$IMSDKRoot2.default.invoke('im.uiutil.GetCurrentConversationID').then(function (result) {
	                _this4.activeNav = result || {};

	                if (!result) {
	                    _this4.setDefaultActive();
	                } else if (result.type === _this4.bizType) {
	                    if (result.info) {
	                        _this4.setActive(result.info);
	                    } else {
	                        _this4.setDefaultActive();
	                    }
	                }
	            });
	        },
	        setDefaultActive: function setDefaultActive(isClearAll) {
	            if (this.navList.length) {
	                this.setActive(this.navList[0].url, isClearAll);
	            }
	        },
	        setActive: function setActive(url, isClearAll) {
	            if (!isClearAll && url === this.activeBiz) return;

	            var nextActive = this.navList.find(function (item) {
	                return item.url === url;
	            });
	            nextActive && (nextActive.unread = 0);

	            this.activeBiz = url;
	            var activeNav = this.activeNav;
	            var paramFrom = {};
	            if (activeNav && activeNav.type !== undefined) {
	                paramFrom = {
	                    type: activeNav.type,
	                    info: activeNav.info,
	                    chat: { appkey: activeNav.appkey, nick: activeNav.nick },
	                    tribeid: { tribeid: activeNav.tribeid }
	                };
	            }
	            _$IMSDKRoot2.default.invoke('im.conversation.SetActiveID', {
	                from: paramFrom,
	                to: { type: this.bizType, info: url }
	            });

	            _$ConversationRoot.Event.emit('LEFTBAR_NAV_SELECTED', {
	                info: url,
	                type: this.bizType,
	                appkey: '',
	                nick: '',
	                tribeid: ''
	            });

	            this.activeNav = nextActive;
	        },
	        handleItemClick: function handleItemClick(item) {
	            this.setActive(item.url);
	        },


	        /**
	         * 导航菜单关闭按钮点击
	         * 1. 如果关闭的是当前项，则需要选中另一个bizNav，
	         * 2. 如果bizNav为空，则选中默认的联系人
	         * 3. 如果联系人也为空，则需要关闭面板
	         */
	        handleCloseClick: function handleCloseClick(item) {
	            var navList = this.navList;
	            var activeBiz = this.activeBiz;
	            item.show = false;
	            var nextNavList = navList.filter(function (x) {
	                return x.url !== item.url;
	            });

	            _$IMSDKRoot2.default.invoke('im.infopanel.CloseTab', {
	                type: this.bizType,
	                info: item.url
	            }).catch(function (error) {
	                return console.error('Error in bizNav.handleCloseClick', error);
	            });

	            this.navList = nextNavList;

	            if (activeBiz !== item.url) return;
	            if (nextNavList.length) {
	                this.setActive(nextNavList[0].url);
	            } else {
	                // 通知联系人模块，导航模块数据已清除
	                setTimeout(function () {
	                    return _$ConversationRoot.Event.emit('BIZ_NAV_CLEARED', {});
	                });
	            }
	        },
	        bindEvents: function bindEvents() {
	            var _this5 = this;

	            // 联系人栏被清空了, 选中默认的导航栏
	            // 如果此时导航栏也没有数据，应该由客户端来判断窗口是否关闭
	            _$ConversationRoot.Event.on('LEFT_SIDEBAR_USER_CLEARED', function () {
	                var navList = _this5.navList;

	                if (navList.length) {
	                    _this5.setDefaultActive(true);
	                } else {
	                    // 通知联系人列表模块处理
	                    _$ConversationRoot.Event.emit('BIZ_NAV_CLEARED', {});
	                }
	            });

	            // 监听联系人、群选中事件
	            _$ConversationRoot.Event.on('LEFTBAR_NAV_SELECTED', function (data) {
	                if (!data || data.type === _this5.bizType) return;

	                _this5.activeBiz = '';
	                _this5.activeNav = {
	                    type: data.type,
	                    info: '',
	                    appkey: data.appkey,
	                    nick: data.nick,
	                    tribeid: data.tribeid
	                };
	            });

	            // 面板关闭，清除所有未读数
	            this.binder.on('im.uiutil.OnConversationClose', function (data) {
	                if (data && data.closeall) {
	                    _this5.navList.forEach(function (item) {
	                        return item.unread = 0;
	                    });
	                }
	            });

	            // 主面板打开
	            // this.binder.on('im.uiutil.onMainPanelStatusChange', data => {
	            //     if (data && data.bVisalbe) {
	            //         this.getNavList().then(() => this.getActiveNav())
	            //     }
	            // });

	            // 每日焦点红点透出
	            this.binder.on('DailyFocusNotify', function () {
	                if (_this5.activeBiz === 'focus') return;

	                var tmp = _this5.navList.find(function (item) {
	                    return item.url === 'focus';
	                });
	                tmp && (tmp.unread = 1);
	            });

	            // 当前会话变更事件
	            this.binder.on('im.bizutil.onConversationChange', function (data) {
	                if (!data || !data.items.length) return;
	                data = data.items[0];

	                // 如果nextActive是biz，判断是否在列表中，如果不在，则添加到列表
	                if (data.type === _this5.bizType) {
	                    var tmp = _this5.navList.find(function (item) {
	                        return item.url === data.info;
	                    });
	                    !tmp && _this5.navList.push({
	                        uid: data.info, url: data.info, site: '',
	                        nick: NICK_MAP[data.info], type: 1,
	                        show: true, unread: 0
	                    });
	                    _this5.setActive(data.info);
	                } else {
	                    // 如果nextActive不是biz nav，则需要将activeNav设置成当前选中的联系人或群
	                    _this5.activeNav = {
	                        type: data.type,
	                        info: data.info || '',
	                        appkey: data.cid.appkey,
	                        nick: data.cid.nick,
	                        tribeid: data.tid.tribeid
	                    };
	                    _this5.activeBiz = '';
	                }
	            });
	        }
	    }
	};

	_$ConversationRoot.Plugin.addPlugin('bizNav', {
	    init: function init() {
	        new _$VueRoot2.default({
	            el: '#J_biznavWrap',
	            components: {
	                'biz-nav': bizNavPlugin
	            }
	        });
	    }
	});

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<ul>\n    <li v-for=\"item in navList\"\n        :key=\"item.url\"\n        :title=\"item.nick\"\n        :class=\"itemClazz(item)\"\n        @click=\"handleItemClick(item)\">\n        <i :class=\"iconClazz(item)\"></i>\n        <span>{{item.nick}}</span>\n        <i v-if=\"item.unread\" class=\"unread-pointer\"></i>\n        <a href=\"\" @click.prevent.stop=\"handleCloseClick(item)\" class=\"fn-close\">\n            <i class=\"iconfont icon-guanbi\"></i>\n        </a>\n    </li>\n</ul>\n";

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * @file: 工具类方法集合
	 * @author: huazhi.chz
	 */

	/**
	 * 解析URL search
	 * @param {string} [str] 要解析的字符串
	 * @returns {object}
	 */
	var parseParam = exports.parseParam = function parseParam(str, isDecode) {
	    str = str || window.location.search;
	    isDecode = isDecode === undefined ? true : isDecode;
	    var ary = str.split(/[?&]/),
	        result = {},
	        n = void 0,
	        tmp = void 0;
	    for (var i = 0, j = ary.length; i < j; i++) {
	        n = ary[i];
	        if (!n) continue;
	        tmp = n.split('=');
	        result[tmp[0]] = isDecode && !!tmp[1] ? decodeURIComponent(tmp[1]) : tmp[1];
	    }
	    return result;
	};

	/**
	 * 封装后的解析JSON方法
	 * 增加对long类型数字的处理，防止损失精度
	 * @param {string|object} json 需要解析的json字符串
	 * @param {boolean} [needObj=false] 如果入参为空，是否仍然返回对象，默认返回入参本身
	 * @returns {object}
	 */
	var parseJSON = exports.parseJSON = function parseJSON(json, needObj) {
	    if (typeof json === 'boolean') return json; // 特殊处理
	    if ((typeof json === 'undefined' ? 'undefined' : _typeof(json)) === 'object') return json; // 要注意的是 typeof null === 'object'
	    if (!json) return needObj ? {} : json;
	    try {
	        json = JSON.parse(json);
	    } catch (e) {
	        window.console && console.log('%cERROR: in parseJSON', 'color:red;', json);
	        json = needObj ? {} : null;
	    }
	    return json;
	};

	/**
	 * 返回格式化时间字符串
	 * @param {number} timestamp
	 * @param {string} fmtStr
	 *        Y >> year, M >> month, d >> date, H >> hours, m >> minutes, s >> seconds
	 * @return {string}
	 */
	var date = exports.date = function date(timestamp, fmtStr) {
	    if (fmtStr === undefined && typeof timestamp === 'string') {
	        fmtStr = timestamp;
	        timestamp = Date.now();
	    }
	    fmtStr = fmtStr || '';

	    var _date = new Date(timestamp);
	    var O = {
	        Y: (_date.getFullYear() + '').substring(2),
	        M: _date.getMonth() + 1,
	        d: _date.getDate(),
	        H: _date.getHours(),
	        m: _date.getMinutes(),
	        s: _date.getSeconds()
	    };

	    O.YY = _date.getFullYear();
	    O.MM = O.M >= 10 ? O.M : '0' + O.M;
	    O.dd = O.d >= 10 ? O.d : '0' + O.d;
	    O.HH = O.H >= 10 ? O.H : '0' + O.H;
	    O.mm = O.m >= 10 ? O.m : '0' + O.m;
	    O.ss = O.s >= 10 ? O.s : '0' + O.s;

	    return fmtStr.replace(/[YMdHms]{1,2}/g, function (x) {
	        return O[x] || '';
	    });
	};

	/**
	 * localStorage 存储
	 */
	var local = exports.local = function () {
	    var _local = window.localStorage || {};
	    var _expiredReg = /(?:\"_(expired|overdue)\"\:)(\d{13})(?:\})$/;

	    /**
	     * 清除过期数据
	     */
	    var clearExpired = function clearExpired() {
	        var now = +new Date();
	        for (var k in _local) {
	            if (_local.hasOwnProperty(k)) {
	                var v = _local.getItem(k);
	                v && (v = v.match(_expiredReg));
	                v && (v = v[1] - 0);
	                v && v < now && _local.removeItem(k);
	            }
	        }
	    };

	    /**
	     * 增加或修改数据，如果有expired，则将数据套在data中
	     * @param {string|number} k
	     * @param {*} v
	     * @param {number} [expired]
	     * @update 增加try catch，防止数据量溢出
	     */
	    var setItem = function setItem(k, v, expired) {
	        expired === undefined && (expired = +new Date() + 365 * 24 * 3600 * 1000); // 数据默认存储一年
	        v = { data: v, _expired: expired };
	        try {
	            v = JSON.stringify(v);
	        } catch (e) {
	            v = Object.prototype.toString.call(v);
	        }
	        try {
	            _local.setItem(k, v);
	        } catch (e) {
	            // 这里可能是localStorage过大导致无法添加
	        }
	    };

	    /**
	     * 获取数据，如果数据过期，则返回null，并且清除数据
	     * @param {string} k
	     * @returns {*}
	     */
	    var getItem = function getItem(k) {
	        var v = _local.getItem(k);
	        v = parseJSON(v);
	        if (v && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && (v._expired || v._overdue)) {
	            // typeof null === 'object'!!!
	            v = (v._expired || v._overdue) < +new Date() ? null : v.data;
	            v === null && _local.removeItem(k);
	        }
	        return v;
	    };

	    // 每次初始化的时候都清除一次数据
	    clearExpired();

	    return {
	        setItem: setItem,
	        getItem: getItem,
	        clear: _local.clear,
	        removeItem: _local.removeItem,
	        clearExpired: clearExpired
	    };
	}();

	// ------------ export default ---------------
	exports.default = {
	    parseParam: parseParam,
	    parseJSON: parseJSON,
	    date: date,
	    local: local
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * ----------------------------------
	                                                                                                                                                                                                                                                                   * @file:   换肤插件
	                                                                                                                                                                                                                                                                   * @author: Pluto <huazhi.chz@alibaba-inc.com>
	                                                                                                                                                                                                                                                                   * @create: 2017/02/15
	                                                                                                                                                                                                                                                                   * ----------------------------------
	                                                                                                                                                                                                                                                                   */

	var _$IMSDKRoot = __webpack_require__(7);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$ConversationRoot = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_$ConversationRoot.Plugin.addPlugin('theme', {
	    init: function init() {
	        var _this = this;

	        // ----- bind events --------
	        this.binder = new _$IMSDKRoot2.default.Binder();
	        /**
	         * 肤换事件
	         * @callback data {<string>suitId, <string>fontColor}
	         */
	        this.binder.on('SkinChanged', function (data) {
	            _this.updateTheme(_extends({ skinType: '1' }, data));
	        });

	        /**
	         * 纯色换肤事件
	         * @callback data {<string>startColor, <string>endColor, <string>fontColor}
	         */
	        this.binder.on('SkinColorChanged', function (data) {
	            _this.updateTheme(_extends({ skinType: '0' }, data));
	        });

	        /**
	         * 自定义换肤事件
	         * @callback data {<string>suitId, <string>fontColor, <string>fillColor}
	         */
	        this.binder.on('CustomSkinChanged', function (data) {
	            _this.updateTheme(_extends({ skinType: '2' }, data));
	        });

	        // ----- 初始化换肤 -------
	        window.updateTheme(location.search);
	    },
	    updateTheme: function updateTheme(data) {
	        window.updateTheme(data);

	        var _search = '',
	            key = void 0;
	        for (key in data) {
	            if (data.hasOwnProperty(key)) {
	                _search += '' + (!_search ? '?' : '&') + key + '=' + (data[key] || '');
	            }
	        }
	        window.history.replaceState('', '', location.origin + location.pathname + _search);
	    },
	    destroyed: function destroyed() {
	        this.binder.clear();
	    }
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(2);

	var _$ConversationRoot = __webpack_require__(3);

	__webpack_require__(57);

	_$ConversationRoot.Plugin.addPlugin('newMsgTip', {
	    init: function init() {
	        this.events();
	    },
	    events: function events() {
	        var _this = this;

	        _$ConversationRoot.Win.container && _$ConversationRoot.Win.container.addEventListener('scroll', function (ev) {
	            _$ConversationRoot.Win.container.scrollTop === 0 && _this.remove();
	        });
	    },
	    clickHandler: function clickHandler() {
	        _$ConversationRoot.Win.container.scrollTop = 0;
	    },
	    render: function render() {
	        if (this.tip) return;

	        var bizNav = document.getElementById('J_biznavWrap');

	        if (!bizNav) return;

	        var div = document.createElement('div');

	        div.innerHTML = '新消息';
	        div.className = 'new-msg-tip';

	        this.tip = div;

	        bizNav.appendChild(div);
	        this.tip.addEventListener('click', this.clickHandler);
	    },
	    remove: function remove() {
	        if (!this.tip) return;

	        this.tip.removeEventListener('click', this.clickHandler);
	        this.tip.parentNode.removeChild(this.tip);
	        this.tip = null;
	    }
	}); /**
	     * Created by neitherzhu on 2017/3/16.
	     */

/***/ },
/* 57 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$IMSDKRoot = __webpack_require__(7);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$ConversationRoot = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CACHE = {};

	/**
	 * 获取当前登录用户信息
	 * @return {Promise}
	 * @callback {object} data {uid, portrait, signature, status, statusImage, ...}
	 */
	_$ConversationRoot.SDK.getLoginInfo = function () {
	    var isLocked = false;
	    var cache = null;
	    var queue = [];

	    return function (forceUpdate) {
	        return new Promise(function (resolve) {
	            if (!forceUpdate && cache) return resolve(cache);
	            if (isLocked) return queue.push(resolve);

	            isLocked = true;
	            _$IMSDKRoot2.default.invoke('chat.contact.GetCUInfo').then(function (result) {
	                cache = result;
	                resolve(cache);
	                return cache;
	            }).catch(function (ex) {
	                resolve({});
	                return {};
	            }).then(function (result) {
	                isLocked = false;
	                queue.forEach(function (promise) {
	                    return promise(result);
	                });
	                queue.length = 0;
	            });
	        });
	    };
	}();

	_$ConversationRoot.SDK.showContextMenu = function (param) {
	    return _$IMSDKRoot2.default.invoke('im.uiutil.ShowConversationContextMenu', param);
	};

	_$ConversationRoot.SDK.ClearAllUnread = function (param) {
	    _$IMSDKRoot2.default.invoke('im.conversation.ClearAllUnread', param);
	};

	_$ConversationRoot.SDK.getConversationCache = function (param) {
	    return new Promise(function (resolve, reject) {
	        _$IMSDKRoot2.default.invoke(_$ConversationRoot.Constant.SDK.GET_CONVERSATION_CACHE, param).then(function (data) {
	            if (data) {
	                resolve(JSON.parse(data));
	            } else {
	                reject(data);
	            }
	        }).catch(function (err) {
	            reject(err);
	        });
	    });
	};

	_$ConversationRoot.SDK.getCurrentLoginID = function (param) {
	    return _$IMSDKRoot2.default.invoke(_$ConversationRoot.Constant.SDK.GET_CURRENT_LOGIN_ID, param);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _test = __webpack_require__(60);

	var _test2 = _interopRequireDefault(_test);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    test: _test2.default
	}; // import jucier from '$JuicerRoot';

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "test";

/***/ },
/* 61 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
])
});
;