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

	var _$IMSDKRoot = __webpack_require__(2);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(3);

	var _$BaseRoot2 = _interopRequireDefault(_$BaseRoot);

	__webpack_require__(4);

	__webpack_require__(224);

	__webpack_require__(297);

	var _$MessageManagerRoot = __webpack_require__(6);

	__webpack_require__(298);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ------------------------------------------------------

	//import Template from './template';

	//import Constant from './constants';
	// 全局IMSDK引入， 使用fie babel时请注释
	window.DEBUG = /local|(\d+\.)/.test(location.origin) || localStorage.getItem('WW_DEBUG');

	if (window.DEBUG) {
	    window.IMSDK = _$IMSDKRoot2.default;
	}

	// 重写invoke方法，添加日志及剥离result
	var oldInvoke = _$IMSDKRoot2.default.invoke;
	_$IMSDKRoot2.default.invoke = function (api, param, flag) {
	    return new Promise(function (resolve, reject) {
	        window.DEBUG && console.log('%c【DEBUG】INVOKE: ' + api, 'color:#999999', param);
	        return oldInvoke(api, param).then(function (result) {
	            window.DEBUG && console.log('%c【INFO】RESPONSE OF ' + api, 'color:green;', result);
	            resolve(flag === true && result.result !== undefined ? result.result : result);
	        }).catch(function (error) {
	            console.log('%c【ERROR】RESPONSE OF ' + api, 'color:red;', error);
	            reject(error);
	        });
	    });
	};
	// --------------------------------------------------------

	window.addEventListener('DOMContentLoaded', function () {
	    _$MessageManagerRoot.Win.container = document.getElementById(_$MessageManagerRoot.Constant.EL_ID.MSG_CONTAINER);
	    _$IMSDKRoot2.default.initTheme();
	    _$MessageManagerRoot.Action.start.action();
	});

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(5);

	__webpack_require__(223);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$MessageManagerRoot = __webpack_require__(6);

	var _$MessageManagerRoot2 = _interopRequireDefault(_$MessageManagerRoot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Action = _$MessageManagerRoot2.default.Action,
	    SDK = _$MessageManagerRoot2.default.SDK; /**
	                                              * Created by neitherzhu on 2017/3/28.
	                                              */

	Action.start.before(function () {
	    SDK.registerWebview({
	        webName: 'WebName_HistoryMsg'
	    });
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _plugins = __webpack_require__(196);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _template = __webpack_require__(36);

	var _template2 = _interopRequireDefault(_template);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _event = __webpack_require__(12);

	var _event2 = _interopRequireDefault(_event);

	__webpack_require__(222);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	//window.addEventListener('DOMContentLoaded', () => {
	//  Win.container = document.getElementById(Constant.EL_ID.MSG_CONTAINER);
	//  IMSDK.initTheme();
	//  Action.start.action();
	//});

	//import IMSDK from '$IMSDKRoot';
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _bindEvents = __webpack_require__(8);

	var _bindEvents2 = _interopRequireDefault(_bindEvents);

	var _getGroupInfo = __webpack_require__(57);

	var _getGroupInfo2 = _interopRequireDefault(_getGroupInfo);

	var _renderGroupInfo = __webpack_require__(58);

	var _renderGroupInfo2 = _interopRequireDefault(_renderGroupInfo);

	var _getCurrentLoginID = __webpack_require__(59);

	var _getCurrentLoginID2 = _interopRequireDefault(_getCurrentLoginID);

	var _searchMsg = __webpack_require__(182);

	var _searchMsg2 = _interopRequireDefault(_searchMsg);

	var _renderMsg = __webpack_require__(186);

	var _renderMsg2 = _interopRequireDefault(_renderMsg);

	var _getTribeList = __webpack_require__(189);

	var _getTribeList2 = _interopRequireDefault(_getTribeList);

	var _renderTribeList = __webpack_require__(190);

	var _renderTribeList2 = _interopRequireDefault(_renderTribeList);

	var _roamMsg = __webpack_require__(191);

	var _roamMsg2 = _interopRequireDefault(_roamMsg);

	var _renderRoamResult = __webpack_require__(192);

	var _renderRoamResult2 = _interopRequireDefault(_renderRoamResult);

	var _showTopTab = __webpack_require__(193);

	var _showTopTab2 = _interopRequireDefault(_showTopTab);

	var _deleteMsg = __webpack_require__(194);

	var _deleteMsg2 = _interopRequireDefault(_deleteMsg);

	var _start = __webpack_require__(195);

	var _start2 = _interopRequireDefault(_start);

	var _renderQuitTribeList = __webpack_require__(210);

	var _renderQuitTribeList2 = _interopRequireDefault(_renderQuitTribeList);

	var _searchCidByMsg = __webpack_require__(211);

	var _searchCidByMsg2 = _interopRequireDefault(_searchCidByMsg);

	var _renderSearchCid = __webpack_require__(212);

	var _renderSearchCid2 = _interopRequireDefault(_renderSearchCid);

	var _renderSearchMsgTypes = __webpack_require__(213);

	var _renderSearchMsgTypes2 = _interopRequireDefault(_renderSearchMsgTypes);

	var _getVerifyMsg = __webpack_require__(214);

	var _getVerifyMsg2 = _interopRequireDefault(_getVerifyMsg);

	var _goContext = __webpack_require__(215);

	var _goContext2 = _interopRequireDefault(_goContext);

	var _renderVerifyMsg = __webpack_require__(216);

	var _renderVerifyMsg2 = _interopRequireDefault(_renderVerifyMsg);

	var _renderVerifyNav = __webpack_require__(217);

	var _renderVerifyNav2 = _interopRequireDefault(_renderVerifyNav);

	var _getSystemMsgTypeList = __webpack_require__(218);

	var _getSystemMsgTypeList2 = _interopRequireDefault(_getSystemMsgTypeList);

	var _renderSystemMsgTypeList = __webpack_require__(219);

	var _renderSystemMsgTypeList2 = _interopRequireDefault(_renderSystemMsgTypeList);

	var _getSystemMsgList = __webpack_require__(220);

	var _getSystemMsgList2 = _interopRequireDefault(_getSystemMsgList);

	var _renderSystemMsg = __webpack_require__(221);

	var _renderSystemMsg2 = _interopRequireDefault(_renderSystemMsg);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	    bindEvents: _bindEvents2.default,
	    getGroupInfo: _getGroupInfo2.default,
	    renderGroupInfo: _renderGroupInfo2.default,
	    getCurrentLoginID: _getCurrentLoginID2.default,
	    searchMsg: _searchMsg2.default,
	    renderMsg: _renderMsg2.default,
	    // getLocalHistory: getLocalHistory,
	    getTribeList: _getTribeList2.default,
	    renderTribeList: _renderTribeList2.default,
	    roamMsg: _roamMsg2.default,
	    renderRoamResult: _renderRoamResult2.default,
	    showTopTab: _showTopTab2.default,
	    deleteMsg: _deleteMsg2.default,
	    start: _start2.default,
	    renderQuitTribeList: _renderQuitTribeList2.default,
	    searchCidByMsg: _searchCidByMsg2.default,
	    renderSearchCid: _renderSearchCid2.default,
	    renderSearchMsgTypes: _renderSearchMsgTypes2.default,
	    getVerifyMsg: _getVerifyMsg2.default,
	    goContext: _goContext2.default,
	    renderVerifyMsg: _renderVerifyMsg2.default,
	    renderVerifyNav: _renderVerifyNav2.default,
	    getSystemMsgTypeList: _getSystemMsgTypeList2.default,
	    renderSystemMsgTypeList: _renderSystemMsgTypeList2.default,
	    getSystemMsgList: _getSystemMsgList2.default,
	    renderSystemMsg: _renderSystemMsg2.default
	};
	// import getLocalHistory from './getLocalHistory';

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$IMSDKRoot = __webpack_require__(2);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _coms = __webpack_require__(10);

	var _coms2 = _interopRequireDefault(_coms);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _template = __webpack_require__(36);

	var _template2 = _interopRequireDefault(_template);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _event = __webpack_require__(12);

	var _event2 = _interopRequireDefault(_event);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

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

	var DropMenu = _coms2.default.DropMenu,
	    Pagination = _coms2.default.Pagination,
	    Popup = _coms2.default.Popup,
	    Confirm = _coms2.default.Confirm,
	    ContextMenu = _coms2.default.ContextMenu;
	var Util = _$BaseRoot.Base.Util;

	var OND_DAY_MS = 24 * 60 * 60 * 1000;
	var bindEvents = new _$BaseRoot.Base.ActionCreator();
	var MSG_TYPE_MAP = {
	    '1': 'Контактное лицо',
	    '2': 'группа',
	    '-1': 'Документация'
	};

	bindEvents.before(function () {
	    _$JuicerRoot2.default.register('GetUid', function (cid) {
	        var uid = Util.getUid(cid);return uid.replace(':', '_');
	    });
	});

	bindEvents.doSync = function (context, data) {

	    var hd = document.getElementById('J_hd');
	    /**
	     * 初始化分类/时间展示下拉菜单
	     */
	    //new DropMenu({
	    //  container: document.querySelector('.J_mainMenu'),
	    //  cls: 'nav-item',
	    //  menuList: Constants.Menu.MAIN_MENU,
	    //  clickHandler: function(ev, menu) {
	    //    const target = ev.target;
	    //    const type = target.getAttribute('data-type');
	    //    const activeEl = menu.querySelector('.drop-menu-active');
	    //    const activeType = activeEl.getAttribute('data-type');
	    //
	    //    if(!type) return;
	    //
	    //    if(type !== activeType) {
	    //      activeEl.querySelector('.drop-menu-active-text').innerText = target.innerHTML;
	    //      activeEl.setAttribute('data-type', type);
	    //      hd.querySelector('.sub-nav').classList[type === 'type' ? 'remove' : 'add']('time-sub-nav');
	    //    }
	    //  }
	    //});

	    /**
	     * 初始化漫游下拉菜单
	     */
	    new DropMenu({
	        container: document.querySelector('.J_roamMenu'),
	        menuList: _constants2.default.Menu.REMOTE_MENU,
	        clickHandler: function clickHandler(ev, menu) {

	            // 没有选中的聊天对象 或者 或者是验证消息 或者是系统消息 不需要漫游
	            if (!_window2.default.conversationID || _window2.default.conversationID.type == _constants2.default.TYPE.VERIFY || _window2.default.conversationID.type === _constants2.default.TYPE.SYSTEM) return;

	            var target = ev.target;
	            var type = void 0;

	            if (target.classList.contains('disabled')) return;
	            if (!(type = target.getAttribute('data-type'))) return;

	            new Promise(function (resolve) {
	                // 重新漫游
	                if (type == '-30') {
	                    _sdk2.default.clearRoamedTime({ cid: _window2.default.conversationID }).then(function () {
	                        resolve();
	                    }, function () {
	                        resolve();
	                    });
	                    type = 30;
	                } else {
	                    resolve();
	                }
	            }).then(function () {

	                _window2.default.roamOption = {
	                    duration: type,
	                    cid: _window2.default.conversationID
	                };
	                _actions2.default.roamMsg.action(_window2.default.roamOption);
	            });
	        }
	    });

	    /**
	     * 初始化"更多"下拉菜单
	     */
	    //new DropMenu({
	    //  container: hd.querySelector('.J_moreMenu'),
	    //  menuList: Constants.Menu.MORE_MENU
	    //});

	    var exportOption = void 0;
	    var exportConfig = {};

	    function numberify(n) {
	        return n >= 10 ? n : '0' + n;
	    }

	    function getExportOption(config) {
	        if (!exportOption) {
	            var date = new Date();
	            var d = date.getFullYear() + '-' + numberify(date.getMonth() + 1) + '-' + numberify(date.getDate());

	            exportOption = new Popup(Object.assign({
	                container: document.body,
	                html: (0, _$JuicerRoot2.default)(_template2.default.exportOption, {
	                    defaultStartTime: d,
	                    defaultEndTime: d
	                }),
	                cls: 'export-option-popup'
	            }, config));

	            $('#J_exportStartDate').datepicker({
	                autoclose: true,
	                endDate: new Date(),
	                language: 'cn',
	                format: 'yyyy-mm-dd'
	            }).on('changeDate', function (e) {
	                $('#J_exportEndDate').datepicker('setStartDate', e.date);
	            });

	            $('#J_exportEndDate').datepicker({
	                autoclose: true,
	                endDate: new Date(),
	                language: 'cn',
	                format: 'yyyy-mm-dd'
	            });

	            document.forms['export-form'].addEventListener('submit', function (ev) {
	                ev.preventDefault();
	                var form = ev.target;
	                var typesEls = form['message-type'];
	                var startTime = form['date-range-start'].value;
	                var endTime = form['date-range-end'].value;
	                var types = [].concat(_toConsumableArray(typesEls)).filter(function (el) {
	                    return el.checked;
	                });
	                types = types.map(function (el) {
	                    return el.value;
	                });

	                if (!types.length || !startTime || !endTime) {
	                    return;
	                }

	                startTime = +new Date(startTime.split('-').join('/'));
	                startTime < 0 && (startTime = 0);
	                endTime = +new Date(endTime.split('-').join('/')) + OND_DAY_MS - 1;

	                var t = parseInt(types.shift()) || 0;
	                while (types[0]) {
	                    t = t ^ parseInt(types.shift());
	                }

	                exportOption.hide();

	                _sdk2.default.exportMsg(Object.assign({
	                    lStartTime: startTime,
	                    lEndTime: endTime,
	                    nExportMsgTypeByte: t
	                }, exportConfig));
	            });
	        }

	        return exportOption;
	    }

	    /**
	     * 初始化"工具"下拉菜单
	     */
	    new DropMenu({
	        container: hd.querySelector('.J_toolMenu'),
	        menuList: _constants2.default.Menu.TOOL_MENU,
	        clickHandler: function clickHandler(ev, menu) {
	            var target = ev.target;
	            var type = target.getAttribute('data-type');

	            if (type === 'import') {
	                _sdk2.default.importMsg();
	            } else if (type === 'export') {
	                exportConfig = {};
	                var _exportOption = getExportOption();

	                _exportOption.popup.querySelector('.message-type').classList.remove('hide');
	                [].concat(_toConsumableArray(document.forms['export-form']['message-type'])).forEach(function (el) {
	                    el.checked = true;
	                });
	                _exportOption.show();
	            }
	        }
	    });

	    /**
	     * 初始化"искать更多选项"弹框
	     */
	    var searchOptionPopup = new Popup({
	        container: hd.querySelector('.J_searchOptionPopup'),
	        triggerText: 'искать',
	        html: _template2.default.searchOption,
	        cls: 'search-option-popup'
	        //clickHandler: function(ev, popup) {
	        //  console.log(ev.target);
	        //}
	    });

	    /**
	     * 初始化翻页组件
	     */
	    new Pagination({
	        container: document.getElementById('J_pageWrap')
	    });

	    /**
	     * 监听翻页组件触发的翻页事件
	     */
	    _event2.default.on('PAGE_TURNED', function (data) {
	        var goHistory = 1;
	        var msgTime = void 0;
	        var msgId = void 0;
	        var current = void 0;
	        var type = _window2.default.conversationID && _window2.default.conversationID.type;

	        switch (data.dir) {
	            case 'first':
	                if (type === _constants2.default.TYPE.VERIFY) {
	                    _window2.default.searchOption.btime = '0';
	                    _window2.default.searchOption.etime = '-1';
	                } else if (type === _constants2.default.TYPE.SYSTEM) {
	                    current = 1;
	                }
	                msgTime = '0';
	                goHistory = 0;
	                break;
	            case 'prev':
	                if (_window2.default.msgList && _window2.default.msgList.length) {
	                    msgTime = _window2.default.msgList[0].msgtime;
	                    msgId = _window2.default.msgList[0].msgid;
	                }

	                if (type == _constants2.default.TYPE.VERIFY) {
	                    _window2.default.searchOption.btime = '0';
	                    _window2.default.searchOption.etime = msgTime;
	                } else {
	                    current = _actions2.default.getSystemMsgList.current && _actions2.default.getSystemMsgList.current - 1;
	                }
	                break;
	            case 'next':
	                if (_window2.default.msgList && _window2.default.msgList.length) {
	                    msgTime = _window2.default.msgList[_window2.default.msgList.length - 1].msgtime;
	                    msgId = _window2.default.msgList[_window2.default.msgList.length - 1].msgid;
	                }
	                if (type == _constants2.default.TYPE.VERIFY) {
	                    _window2.default.searchOption.btime = msgTime;
	                    _window2.default.searchOption.etime = '-1';
	                } else {
	                    current = _actions2.default.getSystemMsgList.current && _actions2.default.getSystemMsgList.current + 1;
	                }
	                goHistory = 0;
	                break;
	            case 'last':
	                if (type == _constants2.default.TYPE.VERIFY) {
	                    _window2.default.searchOption.btime = '0';
	                    _window2.default.searchOption.etime = '-1';
	                }
	                msgTime = '-1';
	                break;
	        }

	        if (_window2.default.searchOption) {
	            _window2.default.searchOption.gohistory = goHistory;
	            _window2.default.searchOption.msgtime = msgTime;
	            _window2.default.searchOption.msgid = msgId;
	        }
	        var param = Object.assign({}, _window2.default.searchOption, _window2.default.searchMoreOption);

	        param.pageTurn = 1;
	        if (_window2.default.searchMoreOption && _window2.default.searchMoreOption.search === 0) {
	            delete param.keywords;
	        }

	        // 系统消息翻页
	        if (type == _constants2.default.TYPE.SYSTEM) {
	            _actions2.default.getSystemMsgList.action({
	                pageindex: current,
	                pageTurn: param.pageTurn
	            });
	        } else if (type == _constants2.default.TYPE.VERIFY) {
	            _actions2.default.getVerifyMsg.action(param);
	        } else {
	            _actions2.default.searchMsg.action(param);
	        }
	    });

	    /**
	     * 监听漫游状态信息条的显示与隐藏
	     */
	    _event2.default.on(_constants2.default.Event.ROAM_STATUS_CHANGE, function (data) {
	        if (!data.isShow) {
	            _actions2.default.renderRoamResult.hide();
	        }
	    });

	    /**
	     * 绑定右侧消息区域的点击事件
	     */
	    document.getElementById(_constants2.default.EL_ID.RIGHT_CONTENT).addEventListener('click', function (ev) {
	        if (!_window2.default.conversationID && _window2.default.type !== 4) return;

	        var target = ev.target;
	        var parent = void 0;

	        // 刷新
	        if (target.classList.contains('J_refresh')) {

	            if (target.classList.contains('disabled')) return;

	            _event2.default.emit(_constants2.default.Event.ROAM_STATUS_CHANGE, { isShow: 0 });

	            var param = Object.assign({}, _window2.default.searchOption, _window2.default.searchMoreOption);
	            var type = _window2.default.conversationID && _window2.default.conversationID.type;

	            if (type == _constants2.default.TYPE.VERIFY) {
	                _actions2.default.getVerifyMsg.action(param);
	            } else if (type === _constants2.default.TYPE.SYSTEM) {
	                _actions2.default.getSystemMsgList.action({
	                    pageindex: _actions2.default.getSystemMsgList.current
	                });
	            } else {
	                _actions2.default.searchMsg.action(param);
	            }
	        }
	        // 继续漫游
	        else if (target.classList.contains('J_continueRoam')) {

	                _actions2.default.roamMsg.action();
	            }
	            // 切换Запись сообщения/Документация
	            else if (target.classList.contains('J_singleTab')) {
	                    if (target.classList.contains('active')) return;

	                    target.parentNode.querySelector('.active').classList.remove('active');
	                    target.classList.add('active');

	                    var _type = target.getAttribute('data-type').toUpperCase();
	                    _event2.default.emit('PAGE_STATE_CHANGE', {
	                        hasPrev: false,
	                        hasNext: false
	                    });

	                    resetSearchOption(_window2.default.conversationID, _type);

	                    _actions2.default.searchMsg.action(_window2.default.searchOption);
	                }
	                // Удаленное сообщение
	                else if (target.classList.contains('J_deleteMsg')) {
	                        var id = target.getAttribute('data-id');

	                        if (target.classList.contains('disabled')) return;

	                        if (!id && (!_window2.default.msgList || !_window2.default.msgList.length)) return;

	                        var c = new Confirm({
	                            confirm: function confirm() {
	                                _actions2.default.deleteMsg.action({
	                                    cid: _window2.default.conversationID,
	                                    msgids: id ? [id] : [].concat(_toConsumableArray(_window2.default.msgList)).map(function (msg) {
	                                        return msg.msgid;
	                                    })
	                                });
	                            }
	                        });

	                        c.render({
	                            title: 'Подтверждение удаления сообщения',
	                            content: id ? 'Вы уверены, что хотите удалить это сообщение?' : 'Вы уверены, что хотите удалить все сообщения на этой странице??'
	                        });
	                    }
	                    // Просмотр сообщений до и после
	                    else if (target.classList.contains('J_goContext')) {

	                            var msgId = target.getAttribute('data-msgid');
	                            var msgTime = target.getAttribute('data-msgtime');
	                            var msgtypes = [].concat(_toConsumableArray(_constants2.default['MSG_TYPES'][Math.abs(_window2.default.conversationID.type)]));
	                            var s = {};
	                            msgtypes.forEach(function (t) {
	                                s[t] = 1;
	                            });
	                            _window2.default.searchMoreOption.msgtypes.forEach(function (t) {
	                                if (!s[t]) {
	                                    s[t] = 1;
	                                    msgtypes.push(t);
	                                }
	                            });

	                            var _param = Object.assign({}, _window2.default.searchOption, _window2.default.searchMoreOption, {
	                                msgid: msgId,
	                                msgtime: msgTime,
	                                btime: '0',
	                                etime: '-1',
	                                msgtypes: msgtypes
	                            });

	                            _actions2.default.goContext.action(_param);
	                            _actions2.default.showTopTab.action({ type: 'context' });

	                            //['J_roamMenu', 'J_yun', 'J_refresh'].forEach(cls => {
	                            //  document.querySelector('.' + cls).classList.add('disabled');
	                            //});
	                        } else if (Util.parents(target, 'J_backToSearch')) {
	                            var _param2 = Object.assign({}, _window2.default.searchOption, _window2.default.searchMoreOption);
	                            _actions2.default.searchMsg.action(_param2);

	                            //['J_roamMenu', 'J_yun', 'J_refresh'].forEach(cls => {
	                            //  document.querySelector('.' + cls).classList.remove('disabled');
	                            //});
	                        }
	    });

	    /**
	     * 绑定顶部菜单栏的点击事件
	     */
	    document.getElementById('J_hd').addEventListener('click', function (ev) {
	        var target = ev.target;

	        // 菜单项点击
	        if (target.classList.contains('J_navItem')) {
	            if (target.classList.contains('active')) return;

	            var action = target.getAttribute('data-action');
	            var param = target.getAttribute('data-param');
	            var type = target.getAttribute('data-type');

	            target.parentNode.querySelector('.active').classList.remove('active');
	            target.classList.add('active');

	            if (!action) return;

	            param && (param = Util.getParam(param));

	            type && (_window2.default.type = parseInt(type));
	            _window2.default.conversationID = null;
	            _event2.default.emit(_constants2.default.Event.ROAM_STATUS_CHANGE, { isShow: 0 });
	            _actions2.default.showTopTab.action();
	            document.getElementById('J_leftContent').innerHTML = '';
	            _window2.default.container.innerHTML = _template2.default.empty;
	            _actions2.default[action] && _actions2.default[action].action(param);
	        }
	        // 举证
	        else if (target.classList.contains('J_report')) {
	                var _param3 = _window2.default.conversationID ? { page: 4, userid: _window2.default.conversationID } : { page: 4 };
	                _sdk2.default.showReport(_param3);
	            }
	            // 返回首页
	            else if (Util.parents(target, 'J_back')) {
	                    document.getElementById('J_nav').classList.remove('hide');
	                    document.getElementById('J_back').classList.add('hide');
	                    document.getElementById('J_midContent').classList.add('hide');
	                    document.getElementById('J_leftContent').innerHTML = '';
	                    _event2.default.emit(_constants2.default.Event.ROAM_STATUS_CHANGE, { isShow: 0 });
	                    _actions2.default.showTopTab.action();
	                    // Win.container.innerHTML = Template.empty;
	                    _window2.default.searchMoreOption = null;
	                    _window2.default.conversationID = null;

	                    doAction(_window2.default.type);
	                }
	    });

	    /**
	     * 绑定左侧列表点击事件
	     */
	    document.getElementById('J_leftContent').addEventListener('click', function (ev) {
	        var target = ev.target;
	        var parent = void 0;

	        // 点击展开/收齐树
	        if (parent = Util.parents(target, 'group-name')) {
	            var container = parent.parentNode.querySelector('.group-detail');
	            var action = container && container.getAttribute('data-action');
	            var p = parent.parentNode;
	            var clickId = parent.id;
	            var clickParam = {
	                gid: clickId
	            };

	            if (action === 'fetch') {
	                container.removeAttribute('data-action');

	                var param = _window2.default.defaultParam;
	                var defaultUid = param && param.uid;
	                if (defaultUid && param.gids && param.gids.length) {
	                    var lastGid = param.gids[param.gids.length - 1];
	                    param.gids.shift();
	                    if (lastGid == clickId) {
	                        clickParam.uid = param.cid;
	                    }
	                }

	                _actions2.default.getGroupInfo.action(clickParam, container);
	            }

	            p.classList[p.classList.contains('open') ? 'remove' : 'add']('open');
	        }
	        // 点击列表项
	        else if (parent = Util.parents(target, 'J_contactItem')) {
	                contactItemSelect(parent);
	            }
	            // 点击искать时искать的消息类型
	            else if (parent = Util.parents(target, 'J_msgTypeItem')) {

	                    if (parent.classList.contains('active')) return;

	                    [].concat(_toConsumableArray(document.querySelectorAll('.J_msgTypeItem.active'))).forEach(function (el) {
	                        el.classList.remove('active');
	                    });

	                    _event2.default.emit('PAGE_STATE_CHANGE', {
	                        hasPrev: false,
	                        hasNext: false
	                    });

	                    _window2.default.container.innerHTML = _template2.default.empty;

	                    parent.classList.add('active');

	                    var type = parent.getAttribute('data-type');

	                    _window2.default.searchMoreOption.type = type;
	                    _actions2.default.searchCidByMsg.action(_window2.default.searchMoreOption);
	                } else if (parent = Util.parents(target, 'J_verifyMsgItem')) {
	                    if (parent.classList.contains('active')) return;

	                    [].concat(_toConsumableArray(document.querySelectorAll('.J_verifyMsgItem.active'))).forEach(function (el) {
	                        el.classList.remove('active');
	                    });

	                    _window2.default.container.innerHTML = '';

	                    parent.classList.add('active');

	                    _actions2.default.getVerifyMsg.action(Object.assign({}, _window2.default.searchOption));
	                } else if (parent = Util.parents(target, 'J_systemMsgTypeItem')) {
	                    if (parent.classList.contains('active')) return;

	                    [].concat(_toConsumableArray(document.querySelectorAll('.J_systemMsgTypeItem.active'))).forEach(function (el) {
	                        el.classList.remove('active');
	                    });

	                    _window2.default.container.innerHTML = '';

	                    parent.classList.add('active');

	                    _actions2.default.getSystemMsgList.action({ type_name: parent.dataset.type });
	                }
	    });

	    document.getElementById('J_midContent').addEventListener('click', function (ev) {
	        var target = ev.target;
	        var parent = void 0;

	        if (parent = Util.parents(target, 'J_contactItem')) {
	            contactItemSelect(parent);
	        }
	    });

	    function contactItemSelect(parent) {
	        if (parent.classList.contains('active')) return;

	        [].concat(_toConsumableArray(document.querySelectorAll('.J_contactItem.active'))).forEach(function (el) {
	            el.classList.remove('active');
	        });

	        parent.classList.add('active');

	        var type = parseInt(parent.getAttribute('data-type'));
	        var cid = void 0;

	        if (type == 1 || Math.abs(type) == 1) {
	            var appkey = parent.getAttribute('data-appkey');
	            var nick = parent.getAttribute('data-nick');
	            cid = { appkey: appkey, nick: nick, type: _constants2.default.TYPE.SINGLE };
	        } else if (type == 2) {
	            var tribeid = parent.getAttribute('data-tribeid');
	            cid = { tribeid: tribeid, type: _constants2.default.TYPE.TRIBE };
	        }

	        _window2.default.conversationID = cid;
	        resetSearchOption(cid, type > 0 ? 'MSG_TYPES' : 'FILE_TYPES');
	        var param = Object.assign({}, _window2.default.searchOption, _window2.default.searchMoreOption);
	        !_window2.default.searchMoreOption && _actions2.default.showTopTab.action({ type: type });
	        _actions2.default.searchMsg.action(param);
	    }

	    /**
	     * 重置искать项
	     * @param cid
	     * @param msgType
	     */
	    function resetSearchOption(cid, msgType) {
	        msgType || (msgType = 'MSG_TYPES');
	        _window2.default.searchOption = {
	            cid: cid,
	            msgtypes: _constants2.default[msgType][Math.abs(cid.type)],
	            gohistory: 1,
	            count: 21
	        };
	    }

	    var searchForm = document.forms['search-form'];

	    if (searchForm && searchForm['date-limit']) {
	        [].concat(_toConsumableArray(searchForm['date-limit'])).forEach(function (el) {
	            el.addEventListener('change', function (ev) {

	                searchForm['date-range-start'].value = '';
	                searchForm['date-range-end'].value = '';
	            });
	        });
	    }

	    /**
	     * искать表单提交
	     */
	    searchForm.addEventListener('submit', function (ev) {
	        ev.preventDefault();

	        var form = ev.target;
	        var keywords = form['search-keywords'].value;

	        if (!keywords.trim()) return;

	        var typesEls = form['message-type'];
	        var btime = form['date-range-start'].value;
	        var etime = form['date-range-end'].value;
	        var timeLimitEl = [].concat(_toConsumableArray(form['date-limit'])).filter(function (input) {
	            return input.checked;
	        })[0];
	        var types = [].concat(_toConsumableArray(typesEls)).filter(function (el) {
	            return el.checked;
	        });
	        types = types.map(function (el) {
	            return el.value;
	        });
	        if (!types.length) return;

	        var limit = void 0;
	        if (!btime || !etime) {
	            etime = '-1';
	            limit = timeLimitEl.value * OND_DAY_MS;
	            if (!limit) {
	                btime = '0';
	            }
	        } else {
	            btime = +new Date(btime.split('-').join('/'));
	            etime = +new Date(etime.split('-').join('/')) + OND_DAY_MS - 1;
	        }

	        document.getElementById('J_nav').classList.add('hide');
	        document.getElementById('J_back').classList.remove('hide');
	        document.getElementById('J_leftContent').innerHTML = '';
	        document.getElementById('J_midContent').innerHTML = '';
	        document.getElementById('J_midContent').classList.remove('hide');
	        _actions2.default.showTopTab.action();
	        _window2.default.container.innerHTML = _template2.default.empty;
	        _window2.default.conversationID = null;
	        _event2.default.emit(_constants2.default.Event.ROAM_STATUS_CHANGE, { isShow: 0 });

	        var uids = types.map(function (type) {
	            return {
	                display: MSG_TYPE_MAP[type],
	                type: type
	            };
	        });

	        var defaultType = types[0];

	        _actions2.default.renderSearchMsgTypes.action({
	            uids: uids
	        });

	        var defaultEl = document.querySelector('.J_msgTypeItem[data-type="' + defaultType + '"]');

	        defaultEl && defaultEl.classList.add('active');

	        if (limit) {
	            _sdk2.default.getServerTime().then(function (data) {
	                btime = parseInt(data.result) - limit;

	                _window2.default.searchMoreOption = {
	                    keywords: [keywords],
	                    type: defaultType,
	                    etime: etime,
	                    btime: btime,
	                    search: 1
	                };
	                _actions2.default.searchCidByMsg.action(_window2.default.searchMoreOption);
	            });
	        } else {
	            _window2.default.searchMoreOption = {
	                keywords: [keywords],
	                type: defaultType,
	                etime: etime,
	                btime: btime,
	                search: 1
	            };
	            _actions2.default.searchCidByMsg.action(_window2.default.searchMoreOption);
	        }

	        searchOptionPopup.hide();

	        return false;
	    });

	    /**
	     * 日历空间初始化
	     * @type {{days: string[], daysShort: string[], daysMin: string[], months: string[], monthsShort: string[], today: string}}
	     */
	    $.fn.datepicker.dates['cn'] = {
			//days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			//daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			//daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			//months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			//monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
			//days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
			//daysShort: ["日", "一", "二", "三", "四", "五", "六", "日"],
			//daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
			//months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			//monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
			//today: "今天"
			days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
			daysShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
			daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
			months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
			monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"]
	        today: "Настоящее время"
	    };

	    $('#J_startDate').datepicker({
	        autoclose: true,
	        endDate: new Date(),
	        language: 'cn',
	        format: 'yyyy-mm-dd'
	    }).on('changeDate', function (e) {
	        $('#J_endDate').datepicker('setStartDate', e.date);

	        var et = document.getElementById('J_endDate').value;
	        if (et) {
	            [].concat(_toConsumableArray(document.forms['search-form']['date-limit'])).forEach(function (el) {
	                el.checked = false;
	            });
	        }
	    });

	    $('#J_endDate').datepicker({
	        autoclose: true,
	        endDate: new Date(),
	        language: 'cn',
	        format: 'yyyy-mm-dd'
	    }).on('changeDate', function (e) {
	        var st = document.getElementById('J_startDate').value;
	        if (st) {
	            [].concat(_toConsumableArray(document.forms['search-form']['date-limit'])).forEach(function (el) {
	                el.checked = false;
	            });
	        }
	    }).on('show', function () {
	        document.querySelector('.datepicker').classList.add('datepicker-end');
	    });

	    /**
	     * 默认参数处理
	     */
	    function doAction(type) {
	        var TYPE = _constants2.default.TYPE;
	        _window2.default.container.innerHTML = _template2.default.empty;
	        type && (_window2.default.type = type);
	        // 默认定位到群聊
	        if (type === TYPE.TRIBE) {
	            _actions2.default.getTribeList.action();
	            var tribeNav = document.querySelector('.J_navItem[data-action=getTribeList]');
	            tribeNav && tribeNav.classList.add('active');
	        }
	        // 默认定位到单聊
	        else if (type == TYPE.SINGLE) {
	                var singleNav = document.querySelector('.J_navItem[data-action=getGroupInfo]');
	                singleNav && singleNav.classList.add('active');
	                _actions2.default.getGroupInfo.action({ gid: '-1' });
	            }
	            // 默认定位到系统消息
	            else if (type == TYPE.SYSTEM) {
	                    var systemNav = document.querySelector('.J_navItem[data-action=getSystemMsgTypeList]');
	                    systemNav && systemNav.classList.add('active');
	                    _actions2.default.getSystemMsgTypeList.action();
	                } else if (type == TYPE.VERIFY) {
	                    var verifyNav = document.querySelector('.J_navItem[data-action=renderVerifyNav]');
	                    verifyNav && verifyNav.classList.add('active');

	                    _actions2.default.renderVerifyNav.action();
	                }
	    }

	    if (_window2.default.defaultParam && _window2.default.defaultParam.cid && typeof _window2.default.defaultParam.cid.type !== 'undefined') {
	        doAction(_window2.default.defaultParam.cid.type);
	    } else {
	        doAction(1);
	    }

	    /**
	     * 屏蔽全局右键菜单
	     */
	    document.body.addEventListener('contextmenu', function (ev) {
	        ev.preventDefault();
	    });

	    var contextMenu = void 0;
	    var contextMenuTarget = void 0;
	    /**
	     * 左侧右键处理
	     */
	    document.body.addEventListener('contextmenu', function (ev) {

	        var target = ev.target;
	        var item = Util.parents(target, 'J_contextmenuTrigger');

	        if (item) {
	            if (!contextMenu) {
	                contextMenu = new ContextMenu({
	                    container: document.body,
	                    menus: [{ action: 'exportMsg', text: 'Экспорт записей сообщений' }, { action: 'openSingleChat', text: 'Отправить мгновенное сообщение' }, { action: 'viewInfo', text: 'проверка данных' }, { action: 'clearMsg', text: 'Очистить историю сообщений' }],
	                    clickHandler: function clickHandler(ev, config) {
	                        var target = ev.target;
	                        var action = target.getAttribute('data-action');

	                        if (action === 'exportMsg') {
	                            var _exportOption2 = getExportOption();
	                            _exportOption2.popup.querySelector('.message-type').classList.add('hide');
	                            [].concat(_toConsumableArray(document.forms['export-form']['message-type'])).forEach(function (el) {
	                                if (el.value == contextMenuTarget.type) {
	                                    el.checked = true;
	                                } else {
	                                    el.checked = false;
	                                }
	                            });

	                            exportConfig[contextMenuTarget.type == 1 ? 'listContactId' : 'listTribeId'] = [contextMenuTarget];
	                            _exportOption2.show();
	                        } else if (action === 'openSingleChat') {
	                            _sdk2.default[contextMenuTarget.type == 1 ? 'openChatDlg' : 'openTribeDlg']({
	                                cid: contextMenuTarget,
	                                actiontype: 0,
	                                actiondata: ''
	                            });
	                        } else if (action === 'viewInfo') {
	                            if (contextMenuTarget.type == 1) {
	                                _sdk2.default.showContactInfo({
	                                    userid: contextMenuTarget
	                                });
	                            } else {
	                                _sdk2.default.showTribeInfo(contextMenuTarget);
	                            }
	                        } else if (action === 'clearMsg') {

	                            var c = new Confirm({
	                                confirm: function confirm() {
	                                    var fn = '';
	                                    var param = {};
	                                    if (contextMenuTarget.type == _constants2.default.TYPE.SINGLE) {
	                                        fn = 'deleteChatMsg';
	                                        param = {
	                                            cid: contextMenuTarget
	                                        };
	                                    } else if (contextMenuTarget.type == _constants2.default.TYPE.TRIBE) {
	                                        fn = 'deleteTribeMsg';
	                                        param = {
	                                            cid: contextMenuTarget
	                                        };
	                                    } else {
	                                        fn = 'deleteSystemMsgByType';
	                                        param = {
	                                            type_name: contextMenuTarget.nick
	                                        };
	                                    }
	                                    _sdk2.default[fn](param).then(function (data) {
	                                        if (Util.getUid(contextMenuTarget) === Util.getUid(_window2.default.conversationID)) {
	                                            _window2.default.container.innerHTML = '';
	                                            _event2.default.emit('PAGE_STATE_CHANGE', {
	                                                hasPrev: false,
	                                                hasNext: false
	                                            });
	                                        }
	                                    });
	                                }
	                            });
	                            c.render({
	                                title: 'Подтверждение удаления сообщения',
	                                content: contextMenuTarget.type == 1 ? 'Вы уверены, что хотите удалить все сообщения этого Контактное лицо?' : 'Вы действительно хотите удалить все сообщения в этой группе??'
	                            });
	                        }
	                    }
	                });
	            }

	            var menuHeight = 100;
	            var param = {
	                x: ev.clientX,
	                y: window.innerHeight - ev.clientY > menuHeight ? ev.clientY : window.innerHeight - menuHeight
	            };

	            if (_window2.default.conversationID && _window2.default.conversationID.type === _constants2.default.TYPE.SYSTEM) {
	                param.menus = [{ action: 'clearMsg', text: 'Очистить историю сообщений' }];
	                contextMenu.remove();
	            } else {
	                if (Util.parents(target, 'J_quitTribeList')) {
	                    param.menus = [{ action: 'clearMsg', text: 'Очистить историю сообщений' }];
	                    contextMenu.remove();
	                } else if (Util.parents(target, 'J_discussion')) {
	                    param.menus = [{ action: 'exportMsg', text: 'Экспорт записей сообщений' }, { action: 'openSingleChat', text: 'Отправить мгновенное сообщение' }, { action: 'clearMsg', text: 'Очистить историю сообщений' }];
	                    contextMenu.remove();
	                }
	            }
	            contextMenu.render(param);

	            var type = item.getAttribute('data-type');
	            var cid = {};

	            if (type == _constants2.default.TYPE.SINGLE) {
	                type && (type = parseInt(type));
	                cid = {
	                    appkey: item.getAttribute('data-appkey'),
	                    nick: item.getAttribute('data-nick'),
	                    type: type
	                };
	            } else if (type == _constants2.default.TYPE.TRIBE) {
	                type && (type = parseInt(type));

	                cid = {
	                    tribeid: item.getAttribute('data-tribeid'),
	                    type: type
	                };
	            } else {
	                cid = {
	                    appkey: 'system',
	                    nick: type,
	                    type: _constants2.default.TYPE.SYSTEM
	                };
	            }
	            contextMenuTarget = cid;
	        }
	    });

	    _$IMSDKRoot2.default.on(_constants2.default.Event.VERIFY_MSG_OPERATED, function (data) {
	        if (!data || !data.length) return;

	        if (_window2.default.type !== 0) return;

	        data.forEach(function (user) {
	            [].concat(_toConsumableArray(document.querySelectorAll('.J_avatar_' + Util.getUid(user)))).forEach(function (el) {
	                var parent = Util.parents(el, 'J_msg');
	                parent && parent.parentNode.removeChild(parent);
	            });
	        });
	    });
	};

	exports.default = bindEvents;
	module.exports = exports['default'];

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _confirm = __webpack_require__(11);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _popup = __webpack_require__(15);

	var _popup2 = _interopRequireDefault(_popup);

	var _pagination = __webpack_require__(18);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _dropMenu = __webpack_require__(21);

	var _dropMenu2 = _interopRequireDefault(_dropMenu);

	var _contextmenu = __webpack_require__(24);

	var _contextmenu2 = _interopRequireDefault(_contextmenu);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	  Confirm: _confirm2.default,
	  Popup: _popup2.default,
	  Pagination: _pagination2.default,
	  DropMenu: _dropMenu2.default,
	  ContextMenu: _contextmenu2.default
	}; /**
	    * Created by neitherzhu on 2017/1/18.
	    */

	module.exports = exports['default'];

/***/ },
/* 11 */
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
	      * Created by neitherzhu on 2017/1/17.
	      */

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _event = __webpack_require__(12);

	var _event2 = _interopRequireDefault(_event);

	__webpack_require__(13);

	var _index = __webpack_require__(14);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var tpl = _index2.default.trim();

	var Confirm = function () {
	  function Confirm(config) {
	    _classCallCheck(this, Confirm);

	    this.init(config);
	  }

	  _createClass(Confirm, [{
	    key: 'init',
	    value: function init(config) {
	      this.config = config;
	    }
	  }, {
	    key: 'events',
	    value: function events() {

	      var _taht = this;
	      var handler = function handler(ev) {
	        var target = ev.target;

	        if (target.classList.contains('J_confirmOK')) {
	          _taht.remove();
	          _taht.config.confirm && _taht.config.confirm();
	          _event2.default.emit('CONFIRM_OK');
	        } else if (target.classList.contains('J_confirmCancel')) {
	          _taht.remove();
	          _taht.config.cancel && _taht.config.cancel();
	          _event2.default.emit('CONFIRM_CANCEL');
	        } else if (target.classList.contains('J_confirmClose')) {
	          _taht.remove();
	          _event2.default.emit('CONFIRM_CLOSE');
	        }
	      };

	      this.confirm.addEventListener('click', handler);

	      this.offEvents = function () {
	        this.confirm.removeEventListener('click', handler);
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render(config) {
	      var defaultBtn = {
	        ok: { text: 'определять' },
	        cancel: { text: 'отменить' }
	      };
	      var btn = config.btn;

	      btn && Object.assign(defaultBtn, btn);

	      var html = (0, _$JuicerRoot2.default)(tpl, {
	        title: config.title,
	        content: config.content,
	        btn: defaultBtn
	      });

	      this.confirm = document.createElement('div');

	      this.confirm.className = 'confirm-wrap';

	      this.confirm.innerHTML = html;

	      document.body.appendChild(this.confirm);

	      this.events();
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      this.offEvents && this.offEvents();
	      this.confirm && this.confirm.parentNode.removeChild(this.confirm);
	    }
	  }]);

	  return Confirm;
	}();

	exports.default = Confirm;
	;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                          value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var Event = new _$BaseRoot.Base.Event(); /**
	                                          * Created by neitherzhu on 2017/1/3.
	                                          */
	exports.default = Event;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=\"confirm-popup\">\n  {@if title}<h1 class=\"confirm-title\">${title}</h1>{@/if}\n  <div class=\"confirm-content-wrap\">\n    <div class=\"confirm-content\">${content}</div>\n    <div class=\"confirm-btns\">\n      {@if btn.ok}<a href=\"javascript:;\" class=\"confirm-btn J_confirmOK\">${btn.ok.text}</a>{@/if}\n      {@if btn.cancel}<a href=\"javascript:;\" class=\"confirm-btn J_confirmCancel\">${btn.cancel.text}</a>{@/if}\n    </div>\n  </div>\n  <i class=\"confirm-close iconfont icon-guanbi J_confirmClose\"></i>\n</div>\n";

/***/ },
/* 15 */
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
	      * Created by neitherzhu on 2016/12/29.
	      */

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _index = __webpack_require__(16);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(17);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var tpl = _index2.default.trim();

	var Popup = function () {
	  function Popup(config) {
	    _classCallCheck(this, Popup);

	    this.init(config);
	  }

	  _createClass(Popup, [{
	    key: 'init',
	    value: function init(config) {
	      if (!config || !config.container || !config.html) return;
	      this.container = config.container;
	      this.config = config;

	      this.render();
	      this.events();
	    }
	  }, {
	    key: 'events',
	    value: function events() {
	      var _this = this;

	      var clickHandler = this.config.clickHandler;

	      this.popup.addEventListener('click', function (ev) {

	        var target = ev.target;

	        if (target.classList.contains('J_popupTrigger')) {
	          return _this.isShow() ? _this.hide() : _this.show();
	        }

	        clickHandler && clickHandler.call(null, ev, _this.popup);

	        if (target.getAttribute('data-action') === 'close') {
	          _this.hide();
	        }
	      });
	    }
	  }, {
	    key: 'isShow',
	    value: function isShow() {
	      return this.popup.classList.contains('active');
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this.popup.classList.add('active');
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.popup.classList.remove('active');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var div = document.createElement('div');
	      var html = (0, _$JuicerRoot2.default)(tpl, this.config);

	      div.innerHTML = html;
	      this.popup = div.firstChild;

	      this.container.appendChild(this.popup);
	    }
	  }]);

	  return Popup;
	}();

	exports.default = Popup;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"popup ${cls}\">\n  <div class=\"popup-trigger J_popupTrigger\">${triggerText}<i class=\"iconfont icon-xiajiantou J_popupTrigger\"></i></div>\n  <div class=\"popup-container\">$${html}</div>\n</div>\n";

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */
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

	var _index = __webpack_require__(19);

	var _index2 = _interopRequireDefault(_index);

	var _event = __webpack_require__(12);

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

	var _class = function () {
	  function _class(config) {
	    _classCallCheck(this, _class);

	    this.init(config);
	  }

	  _createClass(_class, [{
	    key: 'init',
	    value: function init(config) {

	      if (!config || !config.container) return;

	      this.container = config.container;
	      this.hasPrev = false;
	      this.hasNext = false;

	      this.render();
	      this.events();
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

	      _event2.default.on('PAGE_STATE_CHANGE', function (data) {
	        data.hasPrev !== _this.hasPrev && (data.hasPrev ? (_this.enableBtn(_this.first), _this.enableBtn(_this.prev)) : (_this.disableBtn(_this.first), _this.disableBtn(_this.prev)));

	        data.hasNext !== _this.hasNext && (data.hasNext ? (_this.enableBtn(_this.last), _this.enableBtn(_this.next)) : (_this.disableBtn(_this.last), _this.disableBtn(_this.next)));

	        _this.hasPrev = data.hasPrev;
	        _this.hasNext = data.hasNext;
	      });
	    }
	  }, {
	    key: 'go',
	    value: function go(dir) {
	      _event2.default.emit('PAGE_TURNED', {
	        dir: dir
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.container.innerHTML = _index2.default;
	      this.first = this.container.querySelector('.J_goFirst');
	      this.prev = this.container.querySelector('.J_goPrev');
	      this.next = this.container.querySelector('.J_goNext');
	      this.last = this.container.querySelector('.J_goLast');
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
/* 19 */
/***/ function(module, exports) {

	module.exports = "<div class=\"pagination\">\n  <i class=\"iconfont icon-shou disabled J_goFirst\"></i>\n  <i class=\"iconfont icon-xiangqian disabled J_goPrev\"></i>\n  <i class=\"iconfont icon-xianghou disabled J_goNext\"></i>\n  <i class=\"iconfont icon-wei disabled J_goLast\"></i>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */
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
	      * Created by neitherzhu on 2016/12/29.
	      */

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _$BaseRoot = __webpack_require__(3);

	var _index = __webpack_require__(22);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(23);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var Util = _$BaseRoot.Base.Util;

	var tpl = _index2.default.trim();

	var DropMenu = function () {
	  function DropMenu(config) {
	    _classCallCheck(this, DropMenu);

	    this.init(config);
	  }

	  _createClass(DropMenu, [{
	    key: 'init',
	    value: function init(config) {
	      if (!config || !config.container || !config.menuList || !config.menuList.length) return;

	      this.container = config.container;
	      this.menu = config.menu;
	      this.config = config;
	      this.render();
	      this.events();
	    }
	  }, {
	    key: 'events',
	    value: function events() {
	      var _this = this;

	      var clickHandler = this.config.clickHandler;

	      this.menu.addEventListener('click', function (ev) {

	        if (_this.isShow()) {
	          clickHandler && clickHandler.call(null, ev, _this.menu);
	          _this.hide();
	        } else {
	          _this.show();
	        }
	      });

	      document.body.addEventListener('click', function (ev) {
	        if (!Util.parents(ev.target, 'J_dropMenu')) {
	          _this.hide();
	        }
	      });
	    }
	  }, {
	    key: 'isShow',
	    value: function isShow() {
	      return this.menu.classList.contains('active');
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this.menu.classList.add('active');
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.menu.classList.remove('active');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var div = document.createElement('div');
	      var menuList = this.config.menuList;
	      var active = {};
	      var html = void 0;
	      var menu = void 0;

	      for (var i = 0, len = menuList.length; i < len; i++) {
	        menu = menuList[i];
	        if (menu.active) {
	          menu.exclusion && menuList.splice(i, 1);
	          active = menu;
	          break;
	        }
	      }

	      html = (0, _$JuicerRoot2.default)(tpl, {
	        menuList: menuList,
	        active: active,
	        cls: this.config.cls
	      });

	      div.innerHTML = html;

	      this.menu = div.firstChild;

	      this.container.appendChild(this.menu);

	      this.menuContainer = this.menu.querySelector('.drop-menu-container');
	    }
	  }]);

	  return DropMenu;
	}();

	exports.default = DropMenu;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<a class=\"drop-menu J_dropMenu{@if cls} ${cls}{@/if}\" href=\"javascript:;\">\n  <div class=\"drop-menu-active\" data-type=\"${active.type}\"><span class=\"drop-menu-active-text\">${active.text}</span><i class=\"iconfont icon-xiajiantou\"></i></div>\n  <nav class=\"drop-menu-container\">\n    <ul>\n      {@each menuList as menu}\n        <li class=\"drop-menu-item\" data-type=\"${menu.type}\">${menu.text}</li>\n      {@/each}\n    </ul>\n  </nav>\n</a>\n";

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */
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
	      * Created by neitherzhu on 2017/1/19.
	      */

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _index = __webpack_require__(25);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(26);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var tpl = _index2.default.trim();

	var ContextMenu = function () {
	  function ContextMenu(config) {
	    _classCallCheck(this, ContextMenu);

	    this.index(config);
	  }

	  _createClass(ContextMenu, [{
	    key: 'index',
	    value: function index(config) {
	      if (!config || !config.container) return;

	      this.config = config;
	      this.events();
	    }
	  }, {
	    key: 'events',
	    value: function events() {
	      var _this = this;

	      this.config.container.addEventListener('click', function (ev) {
	        var target = ev.target;

	        if (target.classList.contains('J_contextMenuItem')) {
	          _this.config.clickHandler && _this.config.clickHandler(ev, _this.config);
	        }

	        _this.remove();
	      });
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      if (!this.menu) return;

	      this.menu.parentNode.removeChild(this.menu);
	      this.menu = null;
	    }
	  }, {
	    key: 'render',
	    value: function render(config) {
	      if (this.menu) {
	        this.menu.style.top = config.y + 'px';
	        this.menu.style.left = config.x + 'px';
	        return;
	      }
	      config = Object.assign({}, this.config, config);

	      var div = document.createElement('div');

	      div.innerHTML = (0, _$JuicerRoot2.default)(tpl, config);

	      div.style.position = 'fixed';
	      div.style.top = config.y + 'px';
	      div.style.left = config.x + 'px';

	      this.menu = div;

	      config.container.appendChild(div);
	    }
	  }]);

	  return ContextMenu;
	}();

	exports.default = ContextMenu;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"context-menu\">\n  {@each menus as menu}\n    <li class=\"context-menu-item J_contextMenuItem\" data-action=\"${menu.action}\">${menu.text}</li>\n  {@/each}\n</ul>\n";

/***/ },
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
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

	var _menu = __webpack_require__(30);

	var _menu2 = _interopRequireDefault(_menu);

	var _verifyBtns = __webpack_require__(31);

	var _verifyBtns2 = _interopRequireDefault(_verifyBtns);

	var _cls = __webpack_require__(32);

	var _cls2 = _interopRequireDefault(_cls);

	var _i18n = __webpack_require__(34);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _language = __webpack_require__(33);

	var _language2 = _interopRequireDefault(_language);

	var _site = __webpack_require__(35);

	var _site2 = _interopRequireDefault(_site);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var SINGLE = 1;
	var TRIBE = 2;
	var DISCUSSION = 3;
	var SYSTEM = 4;
	var VERIFY = 0;
	var TYPE = {
	  VERIFY: VERIFY,
	  SINGLE: SINGLE,
	  TRIBE: TRIBE,
	  DISCUSSION: DISCUSSION,
	  SYSTEM: SYSTEM
	};
	var MSG_TYPES = {};
	MSG_TYPES[SINGLE] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 65536];
	MSG_TYPES[TRIBE] = [0, 1, 2, 3, 4];

	var FILE_TYPES = {};
	FILE_TYPES[SINGLE] = [10];
	FILE_TYPES[TRIBE] = [];

	exports.default = {
	  LANGUAGE: _language2.default,
	  I18N: _i18n2.default,
	  Event: _event2.default,
	  MSG_TYPES: MSG_TYPES,
	  FILE_TYPES: FILE_TYPES,
	  CLS: _cls2.default,
	  EL_ID: {
	    MSG_CONTAINER: 'J_msgWrap',
	    RIGHT_CONTENT: 'J_rightContent',
	    ROAM_EL: 'J_roamResult',
	    TOP_CONTENT: 'J_topContent'
	  },
	  SDK: _sdk2.default,
	  Menu: _menu2.default,
	  SDK_PREFIX_MAP: {
	    1: _sdk2.default.SINGLE_SDK_PREFIX,
	    2: _sdk2.default.TRIBE_SDK_PREFIX,
	    3: _sdk2.default.TRIBE_SDK_PREFIX
	  },
	  TYPE: TYPE,
	  VerifyBtns: _verifyBtns2.default,
	  SITE: _site2.default
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
	  AT_MSG_STATUS_CHANGE: 'atMsgStatusChange',
	  ROAM_STATUS_CHANGE: 'roamStatusChange',
	  AUDIO_STOP: 'im.audioplayer.onAudioStop',
	  VERIFY_MSG_OPERATED: 'im.contact.OnContactVerifyMsgOperated',
	  TRIBE_AT_MSG_READ: 'im.tribemsg.onTribeAtMsgReaded'
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

	    SINGLE_SDK_PREFIX: 'im.singlemsg.',
	    TRIBE_SDK_PREFIX: 'im.tribemsg.',

	    SEARCH_MSG_SUFFIX: 'SearchDBMsg',
	    GET_LOCAL_HISTORY_MSG_SUFFIX: 'GetLocalHisMsg',
	    ROAM_MSG_SUFFIX: 'RoamMsg',
	    DELETE_MSG_SUFFIX: 'DeleteLocalMsg',
	    CLEAR_ROAMED_TIME_SUFFIX: 'ClearRoamedTime',

	    DELETE_SYSTEM_MSG: 'im.sysnotify.DeleteMsgs',
	    GET_SYSTEM_MSG_TYPE_LIST: 'im.sysnotify.GetTypeList',
	    GET_SYSTEM_MSG_LIST: 'im.sysnotify.GetMsgs',
	    GET_SYSTEM_MSG_TOTAL_PAGE: 'im.sysnotify.GetPages',
	    DELETE_SYSTEM_MSG_BY_TYPE: 'im.sysnotify.DeleteMsgsByType',

	    GET_GROUP_INFO: 'im.contact.GetGroupInfo',
	    GET_CURRENT_LOGIN_ID: 'im.login.GetCurrentLoginID',
	    GET_TRIBE_LIST: 'im.tribemgr.GetShallowTribeList',
	    GET_SERVER_TIME: 'im.bizutil.GetIMSvrTime',
	    SHOW_REPORT: 'im.uiutil.ShowReportCenter',
	    OPEN_FILE: 'im.uiutil.OpenFile',
	    OPEN_FOLDER: 'im.uiutil.OpenFolder',
	    OPEN_PARENT_FOLDER: 'im.uiutil.OpenParentFolder',
	    GET_QUIT_TRIBE: 'im.tribemgr.GetQuittedTribe',
	    SEARCH_SINGLE_CID_BY_MSG: 'im.singlemsg.SearchDBMsgCid',
	    SEARCH_TRIBE_CID_BY_MSG: 'im.tribemsg.SearchDBMsgCid',
	    GET_CONTACT_VERIFY_MSG: 'im.contact.GetContactVerifyMsgs',
	    IMPORT_MSG: 'im.bizutil.ImportMsg',
	    EXPORT_MSG: 'im.bizutil.ExportMsg',
	    OPEN_CHAT_DLG: 'im.uiutil.OpenChatDlg',
	    OPEN_TRIBE_DLG: 'im.uiutil.OpenTribeDlg',
	    SHOW_CHAT_INFO: 'im.uiutil.ShowContactInfo',
	    SHOW_TRIBE_INFO: 'im.uiutil.ShowTribeInfo',
	    ADD_TO_FRIEND: 'im.contact.AgreeAndAddContact',
	    AGREE_TO_ADD: 'im.contact.AgreeAddContact',
	    REFUSE_TO_ADD: 'im.contact.RefuseAddContact',
	    ADD_TO_BLACKLIST: 'im.contact.AddToBlack',
	    REPORT_CONTACT: 'im.contact.ReportAddContact',
	    IGNORE_CONTACT_VERIFY: 'im.contact.IgnoreAddContact',
	    DELETE_CONTACT_VERIFY_MSG: 'im.contact.DeleteContactVerifyMsgs'
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
	 * Created by neitherzhu on 2016/12/29.
	 */
	exports.default = {
	  MAIN_MENU: [{ text: 'Показать по категориям', type: 'type', active: true }, { text: 'Показать по времени', type: 'time' }],

	  MORE_MENU: [{ text: 'Более', active: true, exclusion: true }, { text: 'Фильтровать сообщения' }, { text: 'Файловое сообщение' }, { text: 'искать результат' }],

	  TOOL_MENU: [{ text: 'инструмент', active: true, exclusion: true }, { text: 'Импортировать', type: 'import' }, { text: 'Экспорт', type: 'export' }],

	  REMOTE_MENU: [{ text: '', active: true, exclusion: true }, { text: 'Роуминг на месяц', type: '30' }, { text: 'Роуминг на три месяца', type: '90' }, { text: 'Роуминг на год', type: '365' }, { text: 'Бродить снова', type: '-30' }]
	};
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cls = __webpack_require__(32);

	var _cls2 = _interopRequireDefault(_cls);

	var _language = __webpack_require__(33);

	var _language2 = _interopRequireDefault(_language);

	var _i18n = __webpack_require__(34);

	var _i18n2 = _interopRequireDefault(_i18n);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	  1: {
	    2: [{
	      text: _i18n2.default[_language2.default].ADD_TO_FRIEND,
	      action: 'addToFriend',
	      cls: _cls2.default.ADD_TO_FRIEND
	    }, {
	      text: _i18n2.default[_language2.default].ADD_TO_BLACKLIST,
	      action: 'addToBlackList',
	      cls: _cls2.default.ADD_TO_BLACKLIST
	    }, {
	      text: _i18n2.default[_language2.default].IGNORE_CONTACT_VERIFY,
	      action: 'ignoreContactVerify',
	      cls: _cls2.default.IGNORE_CONTACT_VERIFY
	    }, {
	      text: _i18n2.default[_language2.default].REPORT_CONTACT,
	      action: 'reportContact',
	      cls: _cls2.default.REPORT_CONTACT
	    }],
	    1: [{
	      text: _i18n2.default[_language2.default].ADD_TO_FRIEND,
	      action: 'addToFriend',
	      cls: _cls2.default.ADD_TO_FRIEND
	    }, {
	      text: _i18n2.default[_language2.default].AGREE_TO_ADD,
	      action: 'agreeToAdd',
	      cls: _cls2.default.AGREE_TO_ADD
	    }, {
	      text: _i18n2.default[_language2.default].REFUSE_TO_ADD,
	      action: 'refuseToAdd',
	      cls: _cls2.default.REFUSE_TO_ADD
	    }, {
	      text: _i18n2.default[_language2.default].ADD_TO_BLACKLIST,
	      action: 'addToBlackList',
	      cls: _cls2.default.ADD_TO_BLACKLIST
	    }, {
	      text: _i18n2.default[_language2.default].REPORT_CONTACT,
	      action: 'reportContact',
	      cls: _cls2.default.REPORT_CONTACT
	    }]
	  }
	}; /**
	    * Created by neitherzhu on 2017/1/24.
	    */

	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2017/1/24.
	 */
	exports.default = {
	  SNAPSHOT: 'item-snapshot-wrap',
	  IMAGE_LOADING: 'imui-msg-img-loading',
	  MSG_STATUS_CONTAINER: 'imui-msg-status',
	  MSG_CONTAINER: 'J_msg',
	  AUDIO: 'J_audio',
	  AT_MSG_WITH_STYLE: 'imui-msg-atmsg',
	  COMPLETED_AT_MSG: 'at-msg-done',
	  AUDIO_PLAYING: 'imui-msg-audio-playing',
	  IMAGE: 'J_imImage',
	  OPEN_FILE: 'J_openFile',
	  OPEN_FOLDER: 'J_openFolder',
	  OPEN_PARENT_FOLDER: 'J_openParentFolder',
	  OPEN_INFO: 'J_openInfo',
	  ADD_TO_FRIEND: 'J_addToFriend',
	  ADD_TO_BLACKLIST: 'J_addToBlackList',
	  IGNORE_CONTACT_VERIFY: 'J_ignoreContactVerify',
	  REPORT_CONTACT: 'J_reportContact',
	  AGREE_TO_ADD: 'J_agreeToAdd',
	  REFUSE_TO_ADD: 'J_refuseToADD',
	  OPEN_READ_STATE_COUNT_DETAIL: 'J_openReadStateCountDetail',
	  OPEN_FILE_SETTING: 'J_openLinkSetting',
	  OPEN_SHAKE_SETTING: 'J_openShakeSetting'
	};
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2017/1/25.
	 */
	exports.default = 'CN';
	module.exports = exports['default'];

/***/ },
/* 34 */
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
	    ADD_TO_FRIEND: 'Добавить в друзья',
	    ADD_TO_BLACKLIST: 'добавить в черный список',
	    IGNORE_CONTACT_VERIFY: 'игнорировать',
	    REPORT_CONTACT: 'Отчет',
	    AGREE_TO_ADD: 'Разрешить добавить',
	    REFUSE_TO_ADD: 'Мусор',

	    MY_OWNED_TRIBE: 'Группа, которой я владею',
	    MY_JOINED_TRIBE: 'Группа, к которой я присоединился',
	    DISCUSSION: 'Дискуссионная группа',
	    MY_QUIT_TRIBE: 'Группа, которую я покинул',
	    ROAM_FAIL: 'Не удалось роуминг, попробуйте еще раз',
	    ROAM_SUCCESS_PART: 'Некоторые сообщения были перемещены, <a href="javascript:;" class="J_continueRoam">Нажмите, чтобы продолжить роуминг</a>',
	    ROAM_SUCCESS_ALL: '${count}сообщений были перемещены для вас, нажмите<a href="javascript:;" class="J_refresh">Обновить</a>',
	    NOTHING_TO_ROAM: '{@if !duration}У вас нет сообщений для синхронизации{@else}недавний${duration}Нет сообщений, которые нужно синхронизировать{@/if}',
	    ASK_TO_ADD_FRIEND: '<a href="javascript:;" class="verify-user J_openInfo" data-type="${type}">${display}</a>{@if site}[${site}]{@/if}Хочу добавить вас (${me}) в друзья',
	    ADDED_FRIEND: '<a href="javascript:;" class="verify-user J_openInfo" data-type="${type}">${display}</a>{@if site}[${site}]{@/if}Добавил вас (${me}) в друзья',
	    TB: 'Таобао',
	    CNALI: 'Китайская станция',
	    ENALI: 'Международный вокзал'
	  },
	  EN: {}
	};
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _language = __webpack_require__(33);

	var _language2 = _interopRequireDefault(_language);

	var _i18n = __webpack_require__(34);

	var _i18n2 = _interopRequireDefault(_i18n);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/25.
	 */
	exports.default = {
	  'cntaobao': _i18n2.default[_language2.default].TB,
	  'cnalichn': _i18n2.default[_language2.default].CNALI,
	  'enaliint': _i18n2.default[_language2.default].ENALI
	};
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _searchOption = __webpack_require__(37);

	var _searchOption2 = _interopRequireDefault(_searchOption);

	var _groupList = __webpack_require__(38);

	var _groupList2 = _interopRequireDefault(_groupList);

	var _contactItem = __webpack_require__(39);

	var _contactItem2 = _interopRequireDefault(_contactItem);

	var _dateSplit = __webpack_require__(40);

	var _dateSplit2 = _interopRequireDefault(_dateSplit);

	var _normalMsg = __webpack_require__(41);

	var _normalMsg2 = _interopRequireDefault(_normalMsg);

	var _tribeItem = __webpack_require__(42);

	var _tribeItem2 = _interopRequireDefault(_tribeItem);

	var _tribeList = __webpack_require__(43);

	var _tribeList2 = _interopRequireDefault(_tribeList);

	var _roamResult = __webpack_require__(44);

	var _roamResult2 = _interopRequireDefault(_roamResult);

	var _singleTab = __webpack_require__(45);

	var _singleTab2 = _interopRequireDefault(_singleTab);

	var _file = __webpack_require__(46);

	var _file2 = _interopRequireDefault(_file);

	var _quitTribeList = __webpack_require__(47);

	var _quitTribeList2 = _interopRequireDefault(_quitTribeList);

	var _msgTypeList = __webpack_require__(48);

	var _msgTypeList2 = _interopRequireDefault(_msgTypeList);

	var _searchResult = __webpack_require__(49);

	var _searchResult2 = _interopRequireDefault(_searchResult);

	var _backToSearch = __webpack_require__(50);

	var _backToSearch2 = _interopRequireDefault(_backToSearch);

	var _exportOption = __webpack_require__(51);

	var _exportOption2 = _interopRequireDefault(_exportOption);

	var _verifyMsg = __webpack_require__(52);

	var _verifyMsg2 = _interopRequireDefault(_verifyMsg);

	var _systemMsg = __webpack_require__(53);

	var _systemMsg2 = _interopRequireDefault(_systemMsg);

	var _empty = __webpack_require__(54);

	var _empty2 = _interopRequireDefault(_empty);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	    searchOption: _searchOption2.default.trim(),
	    groupList: _groupList2.default.trim(),
	    contactItem: _contactItem2.default.trim(),
	    dateSplit: _dateSplit2.default.trim(),
	    normalMsg: _normalMsg2.default.trim(),
	    tribeItem: _tribeItem2.default.trim(),
	    tribeList: _tribeList2.default.trim(),
	    roamResult: _roamResult2.default.trim(),
	    singleTab: _singleTab2.default.trim(),
	    file: _file2.default.trim(),
	    quitTribeList: _quitTribeList2.default.trim(),
	    msgTypeList: _msgTypeList2.default.trim(),
	    searchResult: _searchResult2.default.trim(),
	    backToSearch: _backToSearch2.default.trim(),
	    exportOption: _exportOption2.default.trim(),
	    verifyMsg: _verifyMsg2.default.trim(),
	    systemMsg: _systemMsg2.default.trim(),
	    empty: _empty2.default.trim()
	};
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div class=\"search-option\">\n  <div class=\"search-option-item message-type\">\n    <label class=\"label\">Тип сообщения</label>\n    <div class=\"option-con\">\n      <div class=\"w\"><label><input type=\"checkbox\" name=\"message-type\" checked value=\"1\" />Контактное лицо</label></div>\n      <div class=\"w\"><label><input type=\"checkbox\" name=\"message-type\" checked value=\"2\" />Новости группы</label></div>\n      <div class=\"w\"><label><input type=\"checkbox\" name=\"message-type\" checked value=\"-1\" />Файловое сообщение</label></div>\n      <!--<div class=\"w\"><label><input type=\"checkbox\" name=\"message-type\" checked />Дискуссионная группа</label></div>-->\n      <!--<div class=\"w\"><label><input type=\"checkbox\" name=\"message-type\" />системная информация</label></div>-->\n      <!--<div class=\"w\"><label><input type=\"checkbox\" name=\"message-type\" />Фильтровать сообщения</label></div>-->\n    </div>\n  </div>\n  <div class=\"search-option-item time-range\">\n    <label class=\"label\">лимит времени</label>\n    <div class=\"option-con\">\n      <div class=\"date-range\">\n        <input type=\"text\" class=\"date-start\" readonly name=\"date-range-start\" id=\"J_startDate\" /><span>К</span><input type=\"text\" class=\"date-end\" readonly name=\"date-range-end\" id=\"J_endDate\" />\n      </div>\n      <div class=\"date-limit\">\n        <div class=\"w\"><label><input type=\"radio\" name=\"date-limit\" value=\"0\" />Все</label></div>\n        <div class=\"w\"><label><input type=\"radio\" name=\"date-limit\" value=\"30\" checked />Прошлый месяц</label></div>\n        <div class=\"w\"><label><input type=\"radio\" name=\"date-limit\" value=\"90\" />Последние три месяца</label></div>\n        <div class=\"w\"><label><input type=\"radio\" name=\"date-limit\" value=\"365\" />Прошлый год</label></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"search-btns\">\n    <input type=\"submit\" data-action=\"close\" value=\"определять\" />\n    <input type=\"reset\" data-action=\"close\" value=\"отменить\" />\n  </div>\n</div>\n";

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "<div class=\"group-list\">\n  {@if uids && uids.length}\n    {@each uids as uid}\n      <div class=\"group\">\n        <div class=\"contact-item J_contextmenuTrigger J_contactItem J_${uid|GetUid}\" data-appkey=\"{@if uid.appkey}${uid.appkey}{@/if}\" data-nick=\"{@if uid.nick}${uid.nick}{@/if}\" data-tribeid=\"{@if uid.tribeid}${uid.tribeid}{@/if}\" data-type=\"{@if type}${type}{@else}1{@/if}\">\n          {@if uid.portrait}\n          <div class=\"avatar\">\n            <img src=\"${uid.portrait}\" alt=\"${uid.display}\">\n          </div>\n          {@/if}\n          <div class=\"info\">\n            <span class=\"name\" title=\"{@if uid.display}${uid.display}{@else if uid.nick}${uid.nick}{@else}${uid.tribeid}{@/if}\">{@if uid.display}${uid.display}{@else if uid.nick}${uid.nick}{@else}${uid.tribeid}{@/if}</span>\n          </div>\n        </div>\n      </div>\n    {@/each}\n  {@/if}\n\n  {@if subgroups && subgroups.length}\n    {@each subgroups as group}\n      <div class=\"group\">\n        <h2 class=\"group-name\" id=\"${group.id}\" title=\"${group.display}\"><i class=\"iconfont icon-youjiantou\"></i>${group.display}</h2>\n        <div class=\"group-detail\" data-action=\"fetch\"></div>\n      </div>\n    {@/each}\n  {@/if}\n</div>\n";

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<div class=\"contact-item ${cls} J_${_|GetUid}\" data-appkey=\"${appkey}\" data-nick=\"${nick}\" data-type=\"{@if type}${type}{@else}1{@/if}\">\n  {@if portrait}\n    <div class=\"avatar\">\n      <img src=\"${portrait}\" alt=\"${display}\">\n    </div>\n  {@/if}\n  <div class=\"info\">\n    <span class=\"name\" title=\"${display}\">{@if display}${display}{@else}${nick}{@/if}</span>\n  </div>\n</div>\n";

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div class=\"date-split\"><div class=\"date-split-line\"></div><span class=\"split-date\">${date}</span></div>\n";

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<div class=\"J_msg imui-msg{@if !self} imui-msg-l{@else} imui-msg-r{@/if}{@if cls} ${cls}{@/if}{@if fold} msg-fold{@/if}\" id=\"${msgid}\"data-time=\"${msgtime}\" data-appkey=\"${from.appkey}\" data-nick=\"${from.nick}\">\n  {@if avatar}\n  <div class=\"imui-msg-avatar J_avatar_${appkey}${subNick}\"\n       style=\"background-image:url(${avatar});background-size:cover;\"></div>\n  {@/if}\n  <div class=\"imui-msg-content\">\n    <div class=\"imui-msg-content-inner\">\n      <div class=\"imui-msg-head\">\n        <span class=\"imui-msg-sender J_display_${subNick}\" title=\"{@if !isSubNick}${from.display}{@else}${from.display} --> ${to.display}{@/if}\">\n            {@if !isSubNick}${from.display}{@else}${from.display} --> ${to.display}{@/if}\n        </span>\n        <span class=\"imui-msg-date\">${msgtime | timeFormatter}</span>\n        {@if search}<a href=\"javascript:;\" class=\"context-msg J_goContext\" data-msgid=\"${msgid}\" data-msgtime=\"${msgtime}\">Просмотр сообщений до и после</a>{@/if}\n        <a href=\"javascript:;\" class=\"delete-msg J_deleteMsg\" data-id=\"${msgid}\">Удаленное сообщение</a>\n      </div>\n      <div class=\"msg-content-body\">\n        <div class=\"msg-body-html\">$${html}</div>\n        <div class=\"imui-msg-op-wrap\">\n          <div class=\"imui-msg-status\">{@if isFail}<span class=\"status-icon status-error J_resend\"></span>{@/if}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<div class=\"contact-item J_contactItem J_contextmenuTrigger J_${_|GetUid}\" data-tribeid=\"${tribeid}\" data-type=\"2\">\n  <div class=\"avatar\">\n    <img src=\"${portrait}\" alt=\"${display}\">\n  </div>\n  <div class=\"info\">\n    <span class=\"name\" title=\"{@if display}${display}{@else}${tribeid}{@/if}\">{@if display}${display}{@else}${tribeid}{@/if}</span>\n  </div>\n</div>\n";

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<div class=\"group-list\">\n  <div class=\"group\">\n    <h2 class=\"group-name\" id=\"0\"><i class=\"iconfont icon-youjiantou\"></i>${ownedTribe && ownedTribe.display}</h2>\n    {@if ownedTribe && ownedTribe.list && ownedTribe.list.length}\n        <div class=\"group-detail\">\n          {@each ownedTribe.list as tribe}\n            <div class=\"group\">\n              {@include tribeItem, tribe.tribeid}\n            </div>\n          {@/each}\n        </div>\n    {@/if}\n  </div>\n  <div class=\"group\">\n    <h2 class=\"group-name\" id=\"1\"><i class=\"iconfont icon-youjiantou\"></i>${joinedTribe && joinedTribe.display}</h2>\n      {@if joinedTribe && joinedTribe.list && joinedTribe.list.length}\n        <div class=\"group-detail\">\n          {@each joinedTribe.list as tribe}\n            <div class=\"group\">\n              {@include tribeItem, tribe.tribeid}\n            </div>\n          {@/each}\n        </div>\n      {@/if}\n  </div>\n  {@if discussion && discussion.list.length}\n    <div class=\"group\">\n      <h2 class=\"group-name\" id=\"2\"><i class=\"iconfont icon-youjiantou\"></i>${discussion && discussion.display}</h2>\n      {@if discussion && discussion.list && discussion.list.length}\n      <div class=\"group-detail\">\n        {@each discussion.list as tribe}\n        <div class=\"group J_discussion\">\n          {@include tribeItem, tribe.tribeid}\n        </div>\n        {@/each}\n      </div>\n      {@/if}\n    </div>\n  {@/if}\n</div>\n";

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<div class=\"roam-result\" id=\"J_roamResult\">$${result} <i class=\"iconfont icon-guanbi\" onclick=\"this.parentNode.classList.add('hide')\"></i></div>\n";

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<div class=\"single-tab\"><span class=\"J_singleTab active\" data-type=\"msg_types\">Запись сообщения</span><span class=\"J_singleTab\" data-type=\"file_types\">Документация</span></div>\n";

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"J_msg imui-msg{@if !self} imui-msg-l{@else} imui-msg-r{@/if}\" id=\"${msgid}\"data-time=\"${msgtime}\" data-appkey=\"${fromid.appkey}\" data-nick=\"${fromid.nick}\">\n  <div class=\"imui-msg-content\">\n    <div class=\"imui-msg-content-inner\">\n      <div class=\"imui-msg-head\">\n        <span class=\"imui-msg-sender\" title=\"${fromid.display}\">${fromid.display}</span>\n        <span class=\"imui-msg-date\">${msgtime | dateFormatter}</span>\n        {@if search}<a href=\"javascript:;\" class=\"context-msg J_goContext\" data-msgid=\"${msgid}\" data-msgtime=\"${msgtime}\">Просмотр сообщений до и после</a>{@/if}\n        <a href=\"javascript:;\" class=\"delete-msg J_deleteMsg\" data-id=\"${msgid}\">Удаленное сообщение</a>\n      </div>\n      <div class=\"msg-content-body\">\n        <div class=\"file-wrap\">\n          <div class=\"file-suffix\">\n            <img src=\"images/file.png\" alt=\"\">\n          </div>\n          <div class=\"file-info\">\n            <div class=\"file-base\"><span class=\"file-name\">${fileName}</span><span class=\"file-size\">(${fileSize})</span></div>\n            <div class=\"file-operation\" data-path=\"${encodeFileName}\">\n              {@if isFolder}\n                <a href=\"javascript:;\" class=\"J_openFolder\">打开</a>\n              {@else}\n                <a href=\"javascript:;\" class=\"J_openFile\">打开</a>\n              {@/if}\n              <a href=\"javascript:;\" class=\"J_openParentFolder\">Открыть папку</a></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<div class=\"group-list\">\n  <div class=\"group\">\n    <h2 class=\"group-name\"><i class=\"iconfont icon-youjiantou\"></i>${display}</h2>\n    {@if list && list.length}\n    <div class=\"group-detail\">\n      {@each list as tribe}\n      <div class=\"group J_quitTribeList\">\n        {@include tribeItem, tribe}\n      </div>\n      {@/each}\n    </div>\n    {@/if}\n  </div>\n</div>\n";

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<div class=\"msg-type-list\">\n  {@each uids as uid}\n    <div class=\"contact-item{@if cls} ${cls}{@else} J_msgTypeItem{@/if}{@if uid.active} active{@/if}\" data-type=\"${uid.type}\">\n      {@if uid.portrait}\n        <div class=\"avatar\">\n          <img src=\"${uid.portrait}\" alt=\"${uid.display}\">\n        </div>\n      {@/if}\n      <div class=\"info\">\n        <span class=\"name\" title=\"${uid.display}\">${uid.display}</span>\n      </div>\n    </div>\n  {@/each}\n</div>\n";

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<div class=\"search-result\">Есть записи сообщения, связанные с ${count}</div>\n";

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<div class=\"back-to-search\"><a href=\"javascript:;\" class=\"J_backToSearch\"><i class=\"iconfont icon-xiangqian\"></i>возвращаться</a></div>\n";

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "<div class=\"search-option\">\n  <form name=\"export-form\">\n    <div class=\"search-option-item message-type\">\n      <label class=\"label\">Тип сообщения</label>\n      <div class=\"option-con\">\n        <div class=\"w\"><label><input type=\"checkbox\" name=\"message-type\" checked value=\"1\" />Контактное лицо</label></div>\n        <div class=\"w\"><label><input type=\"checkbox\" name=\"message-type\" checked value=\"2\" />Новости группы</label></div>\n      </div>\n    </div>\n    <div class=\"search-option-item time-range\">\n      <label class=\"label\">лимит времени</label>\n      <div class=\"option-con\">\n        <div class=\"date-range\">\n          <input type=\"text\" class=\"date-start\" readonly name=\"date-range-start\" id=\"J_exportStartDate\" value=\"${defaultStartTime}\" /><span>К</span><input type=\"text\" class=\"date-end\" readonly name=\"date-range-end\" id=\"J_exportEndDate\" value=\"${defaultEndTime}\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"search-btns\">\n      <input type=\"submit\" value=\"определять\" />\n      <input type=\"reset\" data-action=\"close\" value=\"отменить\" />\n    </div>\n  </form>\n</div>\n";

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<div class=\"J_msg imui-msg verify-msg\" id=\"${msgid}\" data-appkey=\"${fromid.appkey}\" data-nick=\"${fromid.nick}\" data-type=\"${fromid.type}\" data-tribeid=\"${fromid.tribeid}\">\n  {@if avatar}\n  <div class=\"imui-msg-avatar J_avatar_${fromid.appkey}${fromid.subnick}\"\n       style=\"background-image:url(${avatar});background-size:cover;\"></div>\n  {@/if}\n  <div class=\"imui-msg-content\">\n    <div class=\"imui-msg-head\">$${header}<a href=\"javascript:;\" class=\"delete-msg J_deleteMsg\" data-id=\"${msgid}\">Удаленное сообщение</a></div>\n    <div class=\"imui-verify-msg\">\n      проверочное сообщение: {@if authinfo}$${authinfo}{@else}нет{@/if}\n    </div>\n    <div class=\"imui-verify-operation\">\n      {@each operations as operation}\n        <span class=\"verify-operation-btn{@if operation.cls} ${operation.cls}{@else} J_verifyBtn{@/if}\" data-action=\"${operation.action}\" data-gidinpeergroup=\"${gidinpeergroup}\" data-authinfo=\"${authinfo}\">${operation.text}</span>\n      {@/each}\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<div class=\"J_msg imui-msg\" id=\"${msgid}\" data-time=\"${msgtime}\">\n  <div class=\"imui-msg-content\">\n    <div class=\"imui-msg-content-inner\">\n      {@if msgtitle}\n      <div class=\"imui-msg-head\">\n        <span class=\"imui-msg-sender\" title=\"${msgtitle}\">\n          ${msgtitle}\n        </span>\n        <span class=\"imui-msg-date\">${time | timeFormatter}</span>\n        <a href=\"javascript:;\" class=\"delete-msg J_deleteMsg\" data-id=\"${msgid}\">Удаленное сообщение</a>\n      </div>\n      {@/if}\n      <div class=\"msg-content-body\">\n        <div class=\"msg-body-html\">$${msghtml}</div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<div class=\"empty-block\"></div>";

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2016/12/30.
	 */
	exports.default = {
	  container: null,
	  loginID: null,
	  type: 1,
	  conversationID: null
	};
	module.exports = exports["default"];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$IMSDKRoot = __webpack_require__(2);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

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
	  getGroupInfo: function getGroupInfo(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_GROUP_INFO, param);
	  },
	  getTribeList: function getTribeList(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_TRIBE_LIST, param);
	  },

	  /**
	   * искать消息
	   * @param param
	   * "cid":{xxxUserID}, // 要искать的Контактное лицо
	   * "keywords":["xxxx",......], // 要искать的关键字列表，可以传空
	   * "msgtypes": [1, 2, ......], // 要искать的消息类型
	   * "btime" : "123123", // искать的范围，比如一周内的消息，则设置为一周前的时间点，ms 0表示最远
	   * "etime" : "456456", // искать的范围，比如一周内的消息，则设置为当前时间点，ms -1表示当前时间
	   * "msgtime" : "333333", // 当前页码的消息时间点，分页用，ms
	   * "msgid" : "123123123", // 当前页码的消息id
	   * "gohistory" : 1, // 指定искать的方向，1向后，0向前
	   * "ignoreboundary" : 1, // 1忽略边界
	   * "count" : 30, // искать的消息数量
	   */
	  searchMsg: function searchMsg(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK_PREFIX_MAP[_window2.default.conversationID.type] + _constants2.default.SDK.SEARCH_MSG_SUFFIX, param);
	  },
	  searchSingleCidByMsg: function searchSingleCidByMsg(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.SEARCH_SINGLE_CID_BY_MSG, param);
	  },
	  searchTribeCidByMsg: function searchTribeCidByMsg(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.SEARCH_TRIBE_CID_BY_MSG, param);
	  },
	  getContactVerifyMsg: function getContactVerifyMsg(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_CONTACT_VERIFY_MSG, param);
	  },

	  /**
	   * 获取本地历史消息
	   * @param param
	     */
	  getLocalHistory: function getLocalHistory(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK_PREFIX_MAP[_window2.default.conversationID.type] + _constants2.default.SDK.GET_LOCAL_HISTORY_MSG_SUFFIX, param);
	  },

	  /**
	   * 漫游消息, 只返回漫游成功的条数
	   * @param param
	   * @returns {*}
	   */
	  roamMsg: function roamMsg(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK_PREFIX_MAP[_window2.default.conversationID.type] + _constants2.default.SDK.ROAM_MSG_SUFFIX, param);
	  },

	  /**
	   * 获取服务器时间
	   * @returns {*}
	   */
	  getServerTime: function getServerTime() {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_SERVER_TIME);
	  },
	  deleteMsg: function deleteMsg(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK_PREFIX_MAP[_window2.default.conversationID.type] + _constants2.default.SDK.DELETE_MSG_SUFFIX, param);
	  },
	  deleteSystemMsg: function deleteSystemMsg(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.DELETE_SYSTEM_MSG, param);
	  },
	  deleteChatMsg: function deleteChatMsg(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK_PREFIX_MAP[1] + _constants2.default.SDK.DELETE_MSG_SUFFIX, param);
	  },
	  deleteTribeMsg: function deleteTribeMsg(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK_PREFIX_MAP[2] + _constants2.default.SDK.DELETE_MSG_SUFFIX, param);
	  },
	  deleteSystemMsgByType: function deleteSystemMsgByType(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.DELETE_SYSTEM_MSG_BY_TYPE, param);
	  },
	  showReport: function showReport(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.SHOW_REPORT, param);
	  },
	  openFile: function openFile(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.OPEN_FILE, param);
	  },
	  openFolder: function openFolder(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.OPEN_FOLDER, param);
	  },
	  openParentFolder: function openParentFolder(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.OPEN_PARENT_FOLDER, param);
	  },
	  getQuitTribe: function getQuitTribe(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_QUIT_TRIBE, param);
	  },
	  importMsg: function importMsg(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.IMPORT_MSG, param);
	  },
	  exportMsg: function exportMsg(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.EXPORT_MSG, param);
	  },
	  openChatDlg: function openChatDlg(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.OPEN_CHAT_DLG, param);
	  },
	  openTribeDlg: function openTribeDlg(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.OPEN_TRIBE_DLG, param);
	  },
	  showContactInfo: function showContactInfo(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.SHOW_CHAT_INFO, param);
	  },
	  showTribeInfo: function showTribeInfo(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.SHOW_TRIBE_INFO, param);
	  },
	  addToFriend: function addToFriend(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.ADD_TO_FRIEND, param);
	  },
	  addToBlackList: function addToBlackList(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.ADD_TO_BLACKLIST, param);
	  },
	  agreeToAdd: function agreeToAdd(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.AGREE_TO_ADD, param);
	  },
	  refuseToAdd: function refuseToAdd(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.REFUSE_TO_ADD, param);
	  },
	  reportContact: function reportContact(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.REPORT_CONTACT, param);
	  },
	  ignoreContactVerify: function ignoreContactVerify(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.IGNORE_CONTACT_VERIFY, param);
	  },
	  deleteContactVerifyMsgs: function deleteContactVerifyMsgs(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.DELETE_CONTACT_VERIFY_MSG, param);
	  },
	  clearRoamedTime: function clearRoamedTime(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK_PREFIX_MAP[_window2.default.conversationID.type] + _constants2.default.SDK.CLEAR_ROAMED_TIME_SUFFIX, param);
	  },
	  getSystemMsgTypeList: function getSystemMsgTypeList() {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_SYSTEM_MSG_TYPE_LIST);
	  },
	  getSystemMsgList: function getSystemMsgList(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_SYSTEM_MSG_LIST, param);
	  },
	  getSystemMsgTotalPage: function getSystemMsgTotalPage(param) {
	    return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_SYSTEM_MSG_TOTAL_PAGE, param);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/30.
	 */
	var getGroupInfo = new _$BaseRoot.Base.ActionCreator();

	getGroupInfo.actionType = 'async';

	getGroupInfo.doAsync = function (context, param, container) {
	  return new Promise(function (resolve, reject) {
	    _sdk2.default.getGroupInfo(param).then(function (data) {
	      context.container = container;
	      resolve(data.result);
	    }).catch(function (err) {
	      reject(err);
	    });
	  });
	};

	getGroupInfo.after(function (context, data) {
	  _actions2.default.renderGroupInfo.action(data, context.container);
	});

	getGroupInfo.after(function (context, data) {
	  var param = _window2.default.defaultParam;
	  if (param && param.gids && param.gids.length) {
	    var gid = param.gids[0];
	    var el = document.getElementById(gid);

	    el && el.click();
	  }
	});

	exports.default = getGroupInfo;
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(36);

	var _template2 = _interopRequireDefault(_template);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util,
	    Log = _$BaseRoot.Base.Log; /**
	                                * Created by neitherzhu on 2016/12/30.
	                                */

	var renderGroupInfo = new _$BaseRoot.Base.ActionCreator();

	renderGroupInfo.before(function (context, data, container) {
	  if (!container || !this.container) {
	    if (!this.container) {
	      this.container = document.getElementById('J_leftContent');
	    }
	    container = this.container;
	  }

	  context.container = container;
	});

	renderGroupInfo.doSync = function (context, data) {
	  var defaultUid = _window2.default.defaultParam && _window2.default.defaultParam.uid;
	  var html = (0, _$JuicerRoot2.default)(_template2.default.groupList, {
	    contactItem: _template2.default.contactItem,
	    subgroups: data.subgroups,
	    uids: data.uids
	  });

	  Log.green('DefaultUid', defaultUid);

	  var el = Util.createFragment(html);

	  context.container.appendChild(el);

	  if (defaultUid) {
	    var active = context.container.querySelector('.J_' + defaultUid.replace(':', '_'));

	    if (active) {
	      active.scrollIntoView();
	      active.click();

	      _window2.default.defaultParam.uid = '';
	    }
	  }
	};

	exports.default = renderGroupInfo;
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$ConvertRoot = __webpack_require__(60);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _index = __webpack_require__(7);

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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _template = __webpack_require__(66);

	var _template2 = _interopRequireDefault(_template);

	var _convert = __webpack_require__(84);

	var _convert2 = _interopRequireDefault(_convert);

	var _callbacks = __webpack_require__(85);

	var _callbacks2 = _interopRequireDefault(_callbacks);

	var _normalMsgFormater = __webpack_require__(86);

	var _normalMsgFormater2 = _interopRequireDefault(_normalMsgFormater);

	var _systemMsgFormater = __webpack_require__(111);

	var _systemMsgFormater2 = _interopRequireDefault(_systemMsgFormater);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(128);

	var _actions2 = _interopRequireDefault(_actions);

	var _plugins = __webpack_require__(148);

	var _plugins2 = _interopRequireDefault(_plugins);

	__webpack_require__(170);

	__webpack_require__(181);

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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _i18n = __webpack_require__(62);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _sdk = __webpack_require__(63);

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
	    // 消息状态容器样式
	    MSG_STATUS_CONTAINER: 'imui-msg-status',
	    // 语音加载中样式
	    AUDIO_PLAYING: 'imui-msg-audio-playing',
	    // 语音消息容器
	    AUDIO_WITH_STYLE: 'imui-msg-audio',
	    // 群@消息样式
	    AT_MSG_WITH_STYLE: 'imui-msg-atmsg',
	    // 群@消息已读/全部已读样式
	    COMPLETED_AT_MSG: 'at-msg-done',
	    // 消息容器
	    MSG_CONTAINER: 'J_msg',
	    // 语音
	    AUDIO: 'J_audio',
	    // 图片
	    IMAGE: 'J_imImage',
	    // 群@未已读/未完全已读时,点击打开群@详情
	    OPEN_READ_STATE_COUNT_DETAIL: 'J_openReadStateCountDetail',
	    // 重新加载图片按钮
	    RELOAD_IMAGE: 'J_reloadImage',
	    // 重新加载语音按钮
	    RELOAD_AUDIO: 'J_reloadAudio',
	    // 打开文件设置
	    OPEN_FILE_SETTING: 'J_openFileSetting',
	    // 打开震屏设置
	    OPEN_SHAKE_SETTING: 'J_openShakeSetting',
	    // Предварительный просмотр文件
	    PREVIEW_FILE: 'J_previewFile',
	    // Открыть папку
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
	    WINDOW_COVER_CHANGE: 'onIMWindowCoverChange',
	    // 群@消息变更,自定义事件
	    ON_AT_MSG_STATUS_CHANGE: 'atMsgStatusChange',
	    // 群@消息已读
	    ON_AT_MSG_READ: 'im.tribemsg.onTribeAtMsgReaded',
	    // 语音播放停止
	    ON_AUDIO_STOP: 'im.audioplayer.onAudioStop',
	    // 文件传输状态变更
	    UPDATE_FILE_TRANSFER_INFO: 'im.filetransfer.onUpdateTransferInfo',
	    // 文件信息变更
	    UPDATE_FILE_INFO: 'im.filetransfer.onUpdateCloudFileMeta',
	    // 发送的单聊消息状态变更
	    CHAT_SEND_MSG_STATUS_CHANGE: 'im.singlemsg.onSendMsgStatus',
	    // 发送的群聊/讨论组消息状态变更
	    TRIBE_SEND_MSG_STATUS_CHANGE: 'im.tribemsg.onSendMsgStatus',
	    // 发送消息状态变更
	    SEND_MSG_STATUS_CHANGE: 'sendMsgStatusChange',
	    // 单聊消息状态变更
	    MSG_STATUS_CHANGE: 'msgStatusChange',
	    // 单聊消息已读事件
	    CHAT_MSG_READ: 'im.singlemsg.onFlagMyMsgReaded',

	    SHOW_AUDIO_TEXT_SETTING_CHANGE: 'im.bizutil.onShowAudio2textOptionChange'
	  },
	  FILE_MAX_LEN: 22,
	  SDK: _sdk2.default,
	  I18N: _i18n2.default,
	  TEMP20014_MAX_WIDTH: 264
	};
	module.exports = exports['default'];

/***/ },
/* 62 */
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
	    YOU: 'ты',
	    INVITE_IN_TRIBE: '${inviter} добавил в группу "${users}"',
	    INVITE_IN_DISCUSSION: '${inviter} добавил "${users}" в группу обсуждения',
	    EXIT_TRIBE: 'Участник группы "${user}" покинул групповой чат',
	    SELF_EXIT_TRIBE: 'Вы покинули групповой чат "${display}"',
	    EXIT_DISCUSSION: '"${user}" покинул группу обсуждения',
	    SELF_EXIT_DISCUSSION: 'Вы покинули группу обсуждения "${display}"',
	    KICK_OUT_TRIBE: '${manager} удалил "${user}" из группового чата',
	    SELF_KICK_OUT_TRIBE: 'Вы удалили "${user}" из группового чата',
	    SELF_BE_KICKED_OUT_TRIBE: 'Вас удалили из группового чата {display}',
	    JOIN_TRIBE: 'Приветствуем нового участника "${user}", который присоединился к групповому чату',
	    SELF_JOIN_TRIBE: 'Добро пожаловать в групповой чат',
	    JOIN_DISCUSSION: 'Приветствуем нового участника "${user}", который присоединился к группе обсуждения',
	    SELF_JOIN_DISCUSSION: 'Добро пожаловать в группу обсуждения',
	    DISCUSSION_DISPLAY_NAME_CHANGE: '${user} измените группу обсуждения на "${newDisplay}"',
	    SELF_DISCUSSION_DISPLAY_NAME_CHANGE: 'Вы изменяете имя группы обсуждения на "${newDisplay}"',
	    TRIBE_DISPLAY_NAME_CHANGE: '${user} измените название группового чата на "${newDisplay}"',
	    SELF_TRIBE_DISPLAY_NAME_CHANGE: 'Вы изменяете название группового чата на "${newDisplay}"',
	    REMOVE_MANAGER: '"${user}" отменен владельцем "${manager}"',
	    SELF_REMOVE_MANAGER: '"${user}" был отменен вами как администратором',
	    SELF_BE_REMOVED_MANAGER: 'Владелец "${manager}" отменил вас как менеджера',
	    SET_MANAGER: '"${user}" назначен менеджером владельцем "${manager}"',
	    SELF_SET_MANAGER: '"${user}" настроен вами как администратор',
	    SELF_BE_SET_MANAGER: 'Вас назначил менеджером владелец "${manager}"',
	    SENT_SHAKE: 'Вы отправили вибрирующий экран',
	    RECEIVED_SHAKE: '${user} отправил вам вибрирующий экран',
	    SHAKE_FREQUENCY_LIMIT: 'Частота использования вибрирующего экрана слишком высока, повторите попытку позже.',
	    SHAKE_WHEN_DISABLED: 'Вы отключили функцию экрана вибрации. кликните сюда<a href="javascript:;" class="J_openShakeSetting">Настраивать</a>',
	    SHAKE_WHEN_OFFLINE: 'Собеседник не в сети, вы не можете отправить вибросигнал в ТА.',
	    SHAKE_WHEN_INVISIBLE: 'Функцию вибрационного экрана нельзя использовать в скрытом состоянии.',
	    FILE_DISABLED: '${filename} было автоматически отклонено, вы можете<a href="javascript:;" class="J_openFileSetting">Нажмите здесь, чтобы изменить</a>Настраивать',

	    START_CHAT: 'Вы инициировали запрос голосового чата с "${user}"',
	    RECEIVED_CHAT: 'Вы получили запрос голосового чата от пользователя "${user}"',
	    STOP_CHAT: 'Вы завершили голосовой чат с пользователем "${user}"',
	    STOPPED_CHAT: '"${user}" завершает голосовой чат с вами',
	    REFUSE_CHAT: 'Вы отклонили запрос голосового чата "${user}"',
	    REFUSED_CHAT: '"${user}" отклонил ваш запрос в голосовом чате',
	    STOP_CHAT_OR_VIDEO_FIRST_ERROR: 'Пожалуйста, остановите свой текущий голос или видео и попробуйте еще раз',
	    CHATTING_OR_VIDEO_ERROR: '${user} в процессе голосового или видеосвязи. Повторите попытку позже.',
	    STOP_CHAT_FIRST_ERROR: 'Пожалуйста, остановите текущий голосовой чат и попробуйте еще раз',
	    CHATTING_ERROR: '${user} сейчас в голосовом чате. Повторите попытку позже.',
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
	    AGREED_TO_CONTROL: '"${user}" согласился управлять вашим компьютером',
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
	    AT_MSG_UNREAD: 'непрочитанный',
	    ALL_AT_MSG_UNREAD: 'Все непрочитанные',
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

	    DO_WX_ACTION_ERROR: 'Работа с ошибками действий Ванга',

	    DEGRADE: 'Версия, которую вы в настоящее время используете, не может отображать это сообщение.',
	    SHAKE_WHEN_DO_NOT_DISTURB: 'Другой абонент находится в состоянии «не беспокоить» и не может принять экран вибрации.',
	    AUDIO_TO_TEXT_OLD_TIP: 'Некоторые голоса, отправленные более старыми версиями, не поддерживают отображение текста',
	    AUDIO_TO_TEXT_TIP: 'Вы можете быть в<a href="javascript:;" class="go-audio-text-setting J_goAudioTextSetting">Настраивать</a>Отключить функцию голосового отображения текста',

	    FACE_TIME_NOT_ACCEPT: 'Видеозвонок пропущен',
	    FACE_TIME_NOT_ACCEPTED: 'Другой абонент не ответил на звонок',
	    FACE_TIME_FINISH: 'Длительность звонка',
	    FACE_TIME_TRIGGER: 'Начать видеозвонок'
	  },

	  EN: {}
	};
	module.exports = exports['default'];

/***/ },
/* 63 */
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
	  FILE_SDK_PREFIX: 'im.filetransfer.',

	  DOWNLOAD_CLOUD_FILE: 'im.filetransfer.DownloadCloudFile',
	  PREVIEW_CLOUD_FILE: 'im.filetransfer.PreviewCloudFile',

	  // 获取模板消息中的链接与表情, 与接口前缀配合使用
	  CONVERT_TEXT_TO_EMOTION_SUFFIX: 'ConvertMsgText2Emotion',
	  // 获取多态卡片消息, 与接口前缀配合使用
	  GET_DYNAMIC_MSG_SUFFIX: 'GetDynamicMsg',
	  // 根据宝贝链接获取宝贝详情卡片
	  GET_URL_SNAPSHOT: 'im.bizutil.GetUrlSnapshot',
	  // 根据图片地址获取本地图片路径
	  GET_IMAGE_PATH: 'im.bizutil.GetPicturePath',
	  // 根据语音地址获取本地语音路径
	  GET_AUDIO_PATH: 'im.bizutil.GetAudioPath',
	  // 设置群@消息已读
	  SET_AT_MSG_READ_STATE: 'im.tribemsg.SetTribeAtMsgsReaded',
	  // 获取群@消息已读未读状态
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
	  // 传入旺x协议地址, 主要用在多态卡片消息
	  DO_WX_ACTION: 'im.bizutil.DoWangXAction',
	  // 打开文件设置
	  OPEN_FILE_SETTING: 'im.uiutil.OpenFileSetting',
	  // 打开震屏设置
	  OPEN_SHAKE_SETTING: 'im.uiutil.OpenShakeSetting',

	  // 获取文件传输状态
	  GET_FILE_TRANSFER_INFO: 'im.filetransfer.GetFileTransferInfo',
	  CANCEL_DOWNLOAD_CLOUD_FILE: 'im.filetransfer.CancelDownloadCloudFile',
	  CANCEL_UPLOAD_CLOUD_FILE: 'im.filetransfer.CancelUploadFile',
	  OPEN_FOLDER: 'im.filetransfer.OpenFolder',
	  DELETE_CLOUD_FILE: 'im.filetransfer.DeleteCloudFile',

	  // 设置单聊消息已读
	  SET_SINGLE_MSG_READ_STATUS: 'im.singlemsg.SetFlagsPeerMsgReaded',
	  // 获取单聊消息已读未读状态
	  GET_SINGLE_MSG_READ_STATUS: 'im.singlemsg.GetFlagsMyMsgReaded',
	  // 获取聊天窗口是否被遮挡
	  IS_CHAT_WINDOW_COVERED: 'im.uiutil.IsChatWindowCovered',
	  // 获取是否需要显示语音转文字
	  GET_AUDIO_SHOW_TEXT_SETTING: 'im.bizutil.GetShowAudio2textOption',
	  // 显示语音转文字系统提示，只需要调用，客户端来判断是否产生这条消息
	  ADD_AUDIO_TEXT_SETTING_TIP_SUFFIX: 'AddAudio2textSettingRemind',

	  OPEN_SETTING: 'im.uiutil.OpenSystemSetting',

	  START_FACE_TIME: 'im.bizutil.StartVideoChat'
	};
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$IMSDKRoot = __webpack_require__(2);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

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
	     * 设置群@消息已读
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
	     * 获取群@消息已读未读人数
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
	     * 图片Предварительный просмотр
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
	     * 打开文件设置
	     */
	    openFileSetting: function openFileSetting() {
	        _$IMSDKRoot2.default.invoke(_constants2.default.SDK.OPEN_FILE_SETTING);
	    },

	    /**
	     * 打开震屏设置
	     */
	    openShakeSetting: function openShakeSetting() {
	        _$IMSDKRoot2.default.invoke(_constants2.default.SDK.OPEN_SHAKE_SETTING);
	    },
	    getFileTransferInfo: function getFileTransferInfo(param) {
	        return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_FILE_TRANSFER_INFO, param);
	    },
	    downloadCloudFile: function downloadCloudFile(param) {
	        return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.DOWNLOAD_CLOUD_FILE, param);
	    },
	    cancelDownloadCloudFile: function cancelDownloadCloudFile(param) {
	        return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.CANCEL_DOWNLOAD_CLOUD_FILE, param);
	    },
	    cancelUploadCloudFile: function cancelUploadCloudFile(param) {
	        return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.CANCEL_UPLOAD_CLOUD_FILE, param);
	    },
	    previewCloudFile: function previewCloudFile(param) {
	        return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.PREVIEW_CLOUD_FILE, param);
	    },
	    openFolder: function openFolder(param) {
	        return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.OPEN_FOLDER, param);
	    },
	    deleteCloudFile: function deleteCloudFile(param) {
	        return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.DELETE_CLOUD_FILE, param);
	    },

	    /**
	     * 获取单聊消息已读状态
	     * @param param
	     */
	    getSingleMsgReadStatus: function getSingleMsgReadStatus(param) {
	        return _$IMSDKRoot2.default.invoke(_constants2.default.SDK.GET_SINGLE_MSG_READ_STATUS, param);
	    },

	    /**
	     * 设置单聊消息已读
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
	    openSetting: function openSetting(param) {
	        _$IMSDKRoot2.default.invoke(_constants2.default.SDK.OPEN_SETTING, param);
	    },
	    startFaceTime: function startFaceTime(param) {
	        _$IMSDKRoot2.default.invoke(_constants2.default.SDK.START_FACE_TIME, param);
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 65 */
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _audio = __webpack_require__(67);

	var _audio2 = _interopRequireDefault(_audio);

	var _image = __webpack_require__(68);

	var _image2 = _interopRequireDefault(_image);

	var _link = __webpack_require__(69);

	var _link2 = _interopRequireDefault(_link);

	var _location = __webpack_require__(70);

	var _location2 = _interopRequireDefault(_location);

	var _video = __webpack_require__(71);

	var _video2 = _interopRequireDefault(_video);

	var _card = __webpack_require__(72);

	var _card2 = _interopRequireDefault(_card);

	var _normalMsg = __webpack_require__(73);

	var _normalMsg2 = _interopRequireDefault(_normalMsg);

	var _systemMsg = __webpack_require__(74);

	var _systemMsg2 = _interopRequireDefault(_systemMsg);

	var _errorStatus = __webpack_require__(75);

	var _errorStatus2 = _interopRequireDefault(_errorStatus);

	var _loading = __webpack_require__(76);

	var _loading2 = _interopRequireDefault(_loading);

	var _atMsgReadCount = __webpack_require__(77);

	var _atMsgReadCount2 = _interopRequireDefault(_atMsgReadCount);

	var _anchor_check = __webpack_require__(78);

	var _anchor_check2 = _interopRequireDefault(_anchor_check);

	var _filemsg = __webpack_require__(79);

	var _filemsg2 = _interopRequireDefault(_filemsg);

	var _fileOptions = __webpack_require__(80);

	var _fileOptions2 = _interopRequireDefault(_fileOptions);

	var _msgReadStatus = __webpack_require__(81);

	var _msgReadStatus2 = _interopRequireDefault(_msgReadStatus);

	var _degrade = __webpack_require__(82);

	var _degrade2 = _interopRequireDefault(_degrade);

	var _facetime = __webpack_require__(83);

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
/* 67 */
/***/ function(module, exports) {

	module.exports = "<div class=\"audio-wrap{@if !text} show-audio-text{@/if}\">\n    <div id=\"J_AUDIO_${msgid}\" data-ignore=\"{@if self || readFlag == 1}1{@/if}\" class=\"imui-msg-audio J_audio\" data-md5=\"${md5}\" data-path=\"${path}\" data-type=\"${type}\">${dur}s</div>\n    {@if text}\n    <div class=\"audio-text\">${text}</div>\n    {@/if}\n</div>\n";

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "{@if !loading}\n<img src=\"${src}\"\n     id=\"J_Img_${id}\"\n     data-md5=\"${md5}\"\n     data-type=\"${type}\"\n     data-time=\"${msgtime}\"\n     class=\"J_imImage imui-msg-img J_${md5}{@if loading} imui-msg-img-loading{@/if}{@if isEmoji} imui-msg-emoji{@/if}{@if isEmotion} emotion-image{@/if}\"/>\n{@else}\n<img data-md5=\"${md5}\"\n     id=\"J_Img_${id}\"\n     data-type=\"${type}\"\n     data-time=\"${msgtime}\"\n     class=\"J_imImage imui-msg-img J_${md5}{@if loading} imui-msg-img-loading{@/if}{@if isEmoji} imui-msg-emoji{@/if}{@if isEmotion} emotion-image{@/if}\"/>\n{@/if}\n\n";

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "{@if style}\n<a class=\"imui-msg-link ${cls}-link J_link_${id}_${md5}\" href=\"${href}\" target=\"_blank\" safeflag=\"${safeflag}\" style=\"${style}\"><i class=\"link-sf\"></i>${href}</a>\n{@else}\n<a class=\"imui-msg-link ${cls}-link J_link_${id}_${md5}\" href=\"${href}\" target=\"_blank\" safeflag=\"${safeflag}\"><i class=\"link-sf\"></i>${href}</a>\n{@/if}\n\n";

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "<div class=\"imui-msg-location-wrap\">\n  <a class=\"imui-msg-location\" href=\"${url}\" target=\"_blank\"><i class=\"imui-location-icon\"></i>${v}</a>\n</div>\n";

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<video src=\"${url}\" data-ignore=\"{@if self || readFlag == 1}1{@/if}\" controls=\"controls\" onplay=\"videoPlay(this)\" />\n";

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<div class=\"imui-msg-card-wrap\"><div class=\"imui-msg-card\">$${html}</div></div>\n";

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<div class=\"J_msg imui-msg{@if !self} imui-msg-l{@else} imui-msg-r{@/if}{@if cls} ${cls}{@/if}\" id=\"${msgid}\" data-time=\"${msgtime}\" data-appkey=\"${from.appkey}\" data-nick=\"${from.nick}\">\n  {@if avatar}\n    <div class=\"imui-msg-avatar J_avatar_${appkey}${subNick}{@if !self && !cid.nick} add-at J_addAt{@/if}\"\n       style=\"background-image:url('${avatar}');background-size:cover;\"></div>\n  {@/if}\n  <div class=\"imui-msg-content\">\n    <div class=\"imui-msg-content-inner\">\n      <div class=\"imui-msg-head\">\n        <span class=\"imui-msg-sender J_display_${subNick}{@if !self && !cid.nick} add-at J_addAt{@/if}\" title=\"{@if !isSubNick || !to}{@if from.display}${from.display}{@else}${from.nick}{@/if}{@else}{@if from.display}${from.display}{@else}${from.nick}{@/if} --> {@if to.display}${to.display}{@else}${to.nick}{@/if}{@/if}\">\n            {@if !isSubNick || !to}{@if from.display}${from.display}{@else}${from.nick}{@/if}{@else}{@if from.display}${from.display}{@else}${from.nick}{@/if} --> {@if to.display}${to.display}{@else}${to.nick}{@/if}{@/if}\n        </span>\n        <span class=\"imui-msg-date\">${msgtime | timeFormatter}</span>\n      </div>\n      <div class=\"msg-content-body\">\n        <div class=\"msg-body-html\">$${html}</div>\n        <div class=\"imui-msg-op-wrap\" data-menu=\"${menu}\">\n          {@if msgstatus === 0 || msgstatus === 1}\n          <div class=\"imui-msg-menu-wrap\" tabindex=\"0\">\n            {@if self}\n              <span class=\"bubble-menu-trigger J_selfBubbleMenuTrigger\" data-svrtime=\"{@if svrtime && svrtime !== '0'}${svrtime}{@else}${msgtime}{@/if}\"></span>\n            {@else}\n              <span class=\"bubble-menu-trigger J_bubbleMenuTrigger\" data-svrtime=\"${svrtime}\"></span>\n            {@/if}\n          </div>\n          {@/if}\n          <div class=\"imui-msg-status\">\n            {@if isFail}\n              <span class=\"status-icon status-error J_resend\"></span>\n            {@else}\n              {@if self && readFlagText}\n                {@if readflag == 1}\n                  <span class=\"status-read-done\">${readFlagText}</span>\n                {@/if}\n              {@/if}\n            {@/if}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "<div class=\"J_msg imui-msg-system\" id=\"${msgid}\" data-time=\"${msgtime}\"><span>$${html}</span></div>\n";

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "<span class=\"status-icon status-error{@if cls} ${cls}{@/if}\" data-id=\"{@if id}${id}{@/if}\"></span>\n";

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "<span class=\"status-icon status-loading\"></span>\n";

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "<span class=\"{@if done} status-read-done{@else} status-read-count J_openReadStateCountDetail{@/if}\" data-msgid=\"${id}\">${tpl}</span>\n";

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "<div class=\"imui-msg-link-box\">\n  <i class=\"warning-icon\"></i>\n    <div>\n      <div class=\"warning-text\">\n        {@if isSafe}\n          Безопасная ссылка, будьте уверены, чтобы открыть\n        {@else}\n          <span class=\"warning-color\">предостережение！！！</span>Эта ссылка не является ссылкой на сайт Taobao, там может быть<span class=\"warning-color\">Опасность</span>,пожалуйста, не проводите никаких транзакционных платежей, чтобы вас не обманули!\n        {@/if}\n      </div>\n    </div>\n  <div class=\"warning-actions\">\n    {@each btns as btn}\n      <a href=\"javascript:void(0)\" data-action=\"${btn.action}\" class=\"warning-action J_linkAction\">${btn.text}</a>\n    {@/each}\n    </div>\n  </div>\n";

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "<div class=\"file-msg\" id=\"J_file${id}\" data-id=\"${id}\" data-pid=\"${parentId}\" data-type=\"${nodeType}\" data-md5=\"${md5}\" data-name=\"${nodeName}\" data-size=\"${nodeSize}\">\n  <div class=\"file-suffix J_previewFile ${cls}\" data-ignore=\"{@if optionsData && (optionsData.isSelf || optionsData.isRead)}1{@/if}\">${suffix}</div>\n  <div class=\"file-info\">\n    <div class=\"file-name J_previewFile\" title=\"${nodeName}\" data-ignore=\"{@if optionsData && (optionsData.isSelf || optionsData.isRead)}1{@/if}\">${name}</div>\n    <div class=\"file-size\">${size}</div>\n    <div class=\"file-operation\">\n      {@if optionsData}{@include fileOperation, optionsData}{@/if}\n    </div>\n  </div>\n  <div class=\"file-progress{@if !progress} hidden{@/if}\"><i style=\"{@if progress}width:${progress}%{@/if}\"></i></div>\n</div>\n";

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "{@if status == 0}\n  <a href=\"javascript:;\" class=\"preview-file J_previewFile\" data-ignore=\"{@if isSelf || isRead}1{@/if}\">Предварительный просмотр</a>\n  <a href=\"javascript:;\" class=\"open-folder J_openFolder\" data-path=\"${path}\">Открыть папку</a>\n{@else if status == 1}\n  <a href=\"javascript:;\" class=\"cancel-upload J_cancelUpload\">отменить загрузку</a>\n{@else if status == 2}\n  <a href=\"javascript:;\" class=\"preview-file J_previewFile\" data-ignore=\"{@if isSelf || isRead}1{@/if}\">Предварительный просмотр</a>\n  <a href=\"javascript:;\" class=\"cancel-download J_cancelDownload\">Отменить скачивание</a>\n{@else if status == 3}\n  <a href=\"javascript:;\" class=\"preview-file J_previewFile\" data-ignore=\"{@if isSelf || isRead}1{@/if}\">Предварительный просмотр</a>\n  <a href=\"javascript:;\" class=\"download-file J_downloadFile\" data-ignore=\"{@if isSelf || isRead}1{@/if}\">Скачать файл</a>\n{@else if status == 4}\n  <a href=\"javascript:;\" class=\"preview-file J_previewFile\" data-ignore=\"{@if isSelf || isRead}1{@/if}\">Предварительный просмотр</a>\n  <a href=\"javascript:;\" class=\"download-file J_downloadFile\" data-ignore=\"{@if isSelf || isRead}1{@/if}\">скачать снова</a>\n{@else if status == 5}\n  <a href=\"javascript:;\" class=\"open-folder J_openFolder\" data-path=\"${path}\">Открыть папку</a>\n{@/if}\n";

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "<span class=\"status-read-done{@if !isread} single-read{@/if}\">${tpl}</span>\n";

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "<div class=\"degrade-msg\" id=\"J_degrade_${id}\">${text}</div>\n";

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "<div class=\"face-time\">\n  <i class=\"imui-icon imui-icon-shipin\"></i>\n  <span class=\"face-time-result\">${text}</span>\n  {@if trigger}\n  <span class=\"face-time-trigger J_faceTimeTrigger\">${trigger}</span>\n  {@/if}\n</div>\n";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

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
	   * 普通消息
	   * 在传入的format返回结果之前,
	   * 可以有机会改变返回的结果
	   */
	  injectNormalFormat: function injectNormalFormat(msg, result) {

	    this.__injectNormalFormats.forEach(function (fn) {
	      fn && fn.call(null, msg, result);
	    });

	    return result;
	  },

	  /**
	   * 传入普通消息的自定解析回调
	   * @param fn
	   */
	  pushInjectNormalFormat: function pushInjectNormalFormat(fn) {
	    this.__injectNormalFormats.push(fn);
	  },

	  /**
	   * 系统消息
	   * 在传入的format返回结果之前,
	   * 可以有机会改变返回的结果
	   */
	  injectSystemFormat: function injectSystemFormat(msg, result) {
	    this.__injectSystemFormats.forEach(function (fn) {
	      fn && fn.call(null, msg, result);
	    });

	    return result;
	  },

	  /**
	   * 传入系统消息的自定解析回调
	   * @param fn
	   */
	  pushInjectSystemFormat: function pushInjectSystemFormat(fn) {
	    this.__injectSystemFormats.push(fn);
	  },

	  /**
	   * 增加消息解析处理器
	   * @param label {String} 消息大类，用来区分是哪种类型的消息，比如群聊或者单聊
	   * @param type {String} 消息小类，消息类型，比如文本消息，系统消息等
	   * @param name {String} 转换函数的名称，方便调用时寻找
	   * @param obj {Object} 转换的Formatter, Tpl, Callback...
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
	   * @param label {String} 消息大类，用来区分是哪种类型的消息，比如群聊或者单聊
	   * @param msg 消息数据
	   * @param key 消息源数据中代表消息小类的字段
	   * @returns 返回一个对象，内部包含了转换后的HTML以及转换时需要调用的回调
	   */
	  convert: function convert(label, msg, key) {

	    !key && (key = 'msgtype');
	    var type = msg[key];
	    var o = this.__TypeMap[label] && this.__TypeMap[label][type];

	    if (!o) return;

	    var formattedMsg = o.format && o.format(msg);
	    var tpl = '';

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
/* 85 */
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
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (msg) {
	  // 被撤回的消息
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

	        // 如果是群@消息
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
	              // 已读过的消息不用再触发
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

	        // 否则就是文本消息
	        if (!type0html) {
	          result.curType = 'text';
	          result.html += (0, _text2.default)(mb);
	        } else {
	          result.html += type0html;
	        }

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

	  result && (result.menu = JSON.stringify(result.menu));
	  result = _convert2.default.injectNormalFormat(msg, result);

	  return result;
	};

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _link = __webpack_require__(87);

	var _link2 = _interopRequireDefault(_link);

	var _atmsg = __webpack_require__(93);

	var _atmsg2 = _interopRequireDefault(_atmsg);

	var _text = __webpack_require__(94);

	var _text2 = _interopRequireDefault(_text);

	var _image = __webpack_require__(95);

	var _image2 = _interopRequireDefault(_image);

	var _audio = __webpack_require__(96);

	var _audio2 = _interopRequireDefault(_audio);

	var _video = __webpack_require__(97);

	var _video2 = _interopRequireDefault(_video);

	var _location = __webpack_require__(98);

	var _location2 = _interopRequireDefault(_location);

	var _template = __webpack_require__(99);

	var _template2 = _interopRequireDefault(_template);

	var _t = __webpack_require__(105);

	var _t2 = _interopRequireDefault(_t);

	var _file = __webpack_require__(106);

	var _file2 = _interopRequireDefault(_file);

	var _convert = __webpack_require__(84);

	var _convert2 = _interopRequireDefault(_convert);

	var _msgRecall = __webpack_require__(108);

	var _msgRecall2 = _interopRequireDefault(_msgRecall);

	var _dynamicMsg = __webpack_require__(109);

	var _dynamicMsg2 = _interopRequireDefault(_dynamicMsg);

	var _defaultParse = __webpack_require__(110);

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
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _$BaseRoot = __webpack_require__(3);

	var _template = __webpack_require__(66);

	var _template2 = _interopRequireDefault(_template);

	var _translate = __webpack_require__(88);

	var _translate2 = _interopRequireDefault(_translate);

	var _md = __webpack_require__(89);

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
/* 88 */
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

	var _constants = __webpack_require__(61);

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
	   * 修复消息颜色为白色时, 将颜色加深(安全问题)
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var crypt = __webpack_require__(90),
	      utf8 = __webpack_require__(91).utf8,
	      isBuffer = __webpack_require__(92),
	      bin = __webpack_require__(91).bin,

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
/* 90 */
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
/* 91 */
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
/* 92 */
/***/ function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
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
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _translate = __webpack_require__(88);

	var _translate2 = _interopRequireDefault(_translate);

	var _text = __webpack_require__(94);

	var _text2 = _interopRequireDefault(_text);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2017/1/1.
	                                  * 解析@消息
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
	          if ('@' + (members[i].display || members[i].nick) === user.trim()) {
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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _translate = __webpack_require__(88);

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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(66);

	var _template2 = _interopRequireDefault(_template);

	var _constants = __webpack_require__(61);

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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(66);

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
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(66);

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
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(66);

	var _template2 = _interopRequireDefault(_template);

	var _constants = __webpack_require__(61);

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
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(100);

	var _util2 = _interopRequireDefault(_util);

	var _temp = __webpack_require__(101);

	var _temp2 = _interopRequireDefault(_temp);

	var _temp3 = __webpack_require__(102);

	var _temp4 = _interopRequireDefault(_temp3);

	var _temp5 = __webpack_require__(104);

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

	  // h5模板消息
	  if (value.template.id === 20002) {
	    tpl = (0, _temp2.default)(value);
	  }
	  // alist模板消息
	  else if (value.template.id === 20013) {
	      tpl = (0, _temp4.default)(mb, value, msgType);
	    }
	    // 栅格化消息
	    else if (value.template.id === 20014) {
	        tpl = (0, _temp6.default)(value, result);
	      } else {
	        tpl = _util2.default.degrade(value);
	      }

	  return tpl;
	};

	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(61);

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
	 * @param  {Number} ms 毫秒数
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
/* 101 */
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

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _util = __webpack_require__(100);

	var _util2 = _interopRequireDefault(_util);

	var _template = __webpack_require__(66);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/2/24.
	 */
	module.exports = exports['default'];

/***/ },
/* 102 */
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

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _util = __webpack_require__(100);

	var _util2 = _interopRequireDefault(_util);

	var _template = __webpack_require__(66);

	var _template2 = _interopRequireDefault(_template);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _link = __webpack_require__(87);

	var _link2 = _interopRequireDefault(_link);

	var _link3 = __webpack_require__(103);

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
/* 103 */
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

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(3);

	var _md = __webpack_require__(89);

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
	   * 链接消息 可能是宝贝链接,需要去拿下是否有宝贝快照
	   */

	var Util = _$BaseRoot.Base.Util;
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (value, result) {

	    var body = value.template.data.body;
	    var data = parseData(body);
	    var t = translateData(data);

	    t && (t = '<div class="temp20014-wrap' + (value.template.data.bgl === LUCY_MONEY_BGL ? " lucy-money" : "") + '">' + t + '</div>');

	    if (!t) {
	        t = _util2.default.degrade(value);
	    } else if (result) {
	        result.cls = 'temp20014-msg';
	        result.curType = 'dynamic';
	    }

	    return t;
	};

	var _util = __webpack_require__(100);

	var _util2 = _interopRequireDefault(_util);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(61);

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
	var DIV_TPL = '<div class="${cls}{@if action} J_tempAction{@/if}" style="${style}" data-action="${action}">$${html}</div>';
	var SPAN_TPL = '<span class="${cls}{@if action} J_tempAction{@/if}" style="${style}" data-action="${action}">$${html}</span>';
	var LUCY_MONEY_BGL = 'drawable://aliwx_hongbao_bubble_left_bg';

	function getStrMap() {
	    if (!STR_MAP) {
	        MAX_WIDTH = _constants2.default.TEMP20014_MAX_WIDTH || 264;
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
	    }

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
	    var SM = getStrMap();

	    if (isObject(data)) {
	        newValue = {};
	        for (var k in data) {
	            var ok = SM[k] || k;
	            var ov = data[k];
	            newValue[ok] = parseData(ov);
	        }
	    } else if (isArray(data)) {
	        newValue = [];
	        data.forEach(function (item) {
	            newValue.push(parseData(item));
	        });
	    } else {
	        newValue = SM[data] || data;
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
	        // 如果父元素是flex布局, 子元素需要设置flex样式
	        if (parent.display === 'flex') {
	            style.flex = '0 0 auto';
	        }
	        // 如果父元素是fix布局, 子元素需要设置position样式
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
	            // 则设置单行的属性
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
	    // 设置位置样式与宽高样式
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
	    // 设置线条样式
	    if (data.vector) {
	        style.left = getRealPx(data.vector[0][0]);
	        style.top = getRealPx(data.vector[0][1]);
	        style.width = getRealPx(data.vector[1][0] - data.vector[0][0]);
	        style.height = '1px';
	        style['border-top-width'] = '1px';
	    }

	    // 如果是box容器
	    if (data.class === 'box') {
	        // 设置默认的flex-direction为column
	        !style['flex-direction'] && (style['flex-direction'] = 'column');
	    }
	    // 如果是img容器
	    else if (data.class === 'img') {
	            // 如果有图片地址, 设置背景图片
	            data.url && (style['background-image'] = 'url(' + data.url + ')');

	            // 设置默认图片剪裁方式为aspect-fill
	            !style['background-size'] && (style['background-size'] = 'aspect-fill');

	            getBackgroundSize(style['background-size'], style);
	        }
	        // 如果是lbl/btn容器
	        else if (data.class === 'lbl' || data.class === 'btn') {
	                // 如果有高度并且没有行高
	                // 则设置行高
	                if (style.height && !style['line-height']) {
	                    if (style.height === 'FIT') {
	                        style['align-self'] = 'center';
	                    } else {
	                        style['line-height'] = style.height;
	                    }
	                }

	                // 如果宽度为自适应
	                // 则设置文字为居中对齐
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
/* 105 */
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
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _$BaseRoot = __webpack_require__(3);

	var _template = __webpack_require__(66);

	var _util = __webpack_require__(100);

	var _util2 = _interopRequireDefault(_util);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _getFileOptionData = __webpack_require__(107);

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

	  Log.red('文件消息:', mb);

	  var html = (0, _$JuicerRoot2.default)(_template.fileMsg, Object.assign(moreData, data));
	  return html;
	};

	module.exports = exports['default'];

/***/ },
/* 107 */
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
	          // 显示Предварительный просмотр 取消下载
	          result.status = 2;
	        }
	    }
	    // 上传/下载 错误
	    else if (data.status == 2) {
	        // 上传中
	        if (data.type == 0) {
	          // 如果有本地路径
	          if (data.filePath) {
	            // 显示Открыть папку
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
	            // 显示Предварительный просмотр скачать снова
	            result.status = 4;
	          }
	      }
	      // 上传/下载 取消
	      else if (data.status == 3) {
	          // 如果是上传
	          if (data.type == 0) {
	            // 如果有本地路径
	            if (data.filePath) {
	              // 显示Открыть папку
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
	              // 显示Предварительный просмотр Скачать файл
	              result.status = 3;
	            }
	        }
	        // 上传/下载 成功 或者 未知状态
	        else if (data.status == 4 || data.status == 5) {
	            // 如果有本地路径
	            if (data.filePath) {
	              // 显示Предварительный просмотр Открыть папку
	              result.status = 0;
	              result.path = data.filePath;
	            } else {
	              // 显示Предварительный просмотр Скачать файл
	              result.status = 3;
	            }
	          }

	  return result;
	};

	module.exports = exports["default"];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(3);

	var _window = __webpack_require__(65);

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
/* 109 */
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

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _temp = __webpack_require__(104);

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
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _convert = __webpack_require__(84);

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
	  // 这时候需要把其他子账号发的消息也放到自己发送的这一方
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
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _shake = __webpack_require__(112);

	var _shake2 = _interopRequireDefault(_shake);

	var _file = __webpack_require__(113);

	var _file2 = _interopRequireDefault(_file);

	var _chat = __webpack_require__(114);

	var _chat2 = _interopRequireDefault(_chat);

	var _video = __webpack_require__(115);

	var _video2 = _interopRequireDefault(_video);

	var _remoteAssistance = __webpack_require__(116);

	var _remoteAssistance2 = _interopRequireDefault(_remoteAssistance);

	var _appSys = __webpack_require__(117);

	var _appSys2 = _interopRequireDefault(_appSys);

	var _msgRecall = __webpack_require__(108);

	var _msgRecall2 = _interopRequireDefault(_msgRecall);

	var _exitTribe = __webpack_require__(118);

	var _exitTribe2 = _interopRequireDefault(_exitTribe);

	var _kickoutTribe = __webpack_require__(119);

	var _kickoutTribe2 = _interopRequireDefault(_kickoutTribe);

	var _joinTribe = __webpack_require__(120);

	var _joinTribe2 = _interopRequireDefault(_joinTribe);

	var _roleChange = __webpack_require__(121);

	var _roleChange2 = _interopRequireDefault(_roleChange);

	var _exitDiscussion = __webpack_require__(122);

	var _exitDiscussion2 = _interopRequireDefault(_exitDiscussion);

	var _joinDiscussion = __webpack_require__(123);

	var _joinDiscussion2 = _interopRequireDefault(_joinDiscussion);

	var _displayNameChange = __webpack_require__(124);

	var _displayNameChange2 = _interopRequireDefault(_displayNameChange);

	var _audio2text = __webpack_require__(125);

	var _audio2text2 = _interopRequireDefault(_audio2text);

	var _defaultSystemMsg = __webpack_require__(126);

	var _defaultSystemMsg2 = _interopRequireDefault(_defaultSystemMsg);

	var _multiJoin = __webpack_require__(127);

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
	    * 单聊系统消息的解析Format
	    */

	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(61);

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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 文件消息
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
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 语音系统消息
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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(61);

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
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(61);

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
/* 117 */
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
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(3);

	var _window = __webpack_require__(65);

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
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(3);

	var _window = __webpack_require__(65);

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
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(3);

	var _window = __webpack_require__(65);

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
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(3);

	var _window = __webpack_require__(65);

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
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(3);

	var _window = __webpack_require__(65);

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
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(3);

	var _window = __webpack_require__(65);

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
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(65);

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
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(61);

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
/* 126 */
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
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(65);

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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _start = __webpack_require__(129);

	var _start2 = _interopRequireDefault(_start);

	var _getAtMsgReadState = __webpack_require__(130);

	var _getAtMsgReadState2 = _interopRequireDefault(_getAtMsgReadState);

	var _setAtMsgReadState = __webpack_require__(132);

	var _setAtMsgReadState2 = _interopRequireDefault(_setAtMsgReadState);

	var _updateATMsgReadCountStatus = __webpack_require__(133);

	var _updateATMsgReadCountStatus2 = _interopRequireDefault(_updateATMsgReadCountStatus);

	var _bindEvents = __webpack_require__(134);

	var _bindEvents2 = _interopRequireDefault(_bindEvents);

	var _cacheEvent = __webpack_require__(141);

	var _cacheEvent2 = _interopRequireDefault(_cacheEvent);

	var _getMsgReadStatus = __webpack_require__(142);

	var _getMsgReadStatus2 = _interopRequireDefault(_getMsgReadStatus);

	var _setMsgReadStatus = __webpack_require__(143);

	var _setMsgReadStatus2 = _interopRequireDefault(_setMsgReadStatus);

	var _updateMsgReadStatus = __webpack_require__(144);

	var _updateMsgReadStatus2 = _interopRequireDefault(_updateMsgReadStatus);

	var _msgReadStatus = __webpack_require__(145);

	var _msgReadStatus2 = _interopRequireDefault(_msgReadStatus);

	var _sendMsgStatusChange = __webpack_require__(146);

	var _sendMsgStatusChange2 = _interopRequireDefault(_sendMsgStatusChange);

	var _getAudioShowTextSetting = __webpack_require__(147);

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
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _$IMSDKRoot = __webpack_require__(2);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _index = __webpack_require__(128);

	var _index2 = _interopRequireDefault(_index);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _util = __webpack_require__(100);

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
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _event = __webpack_require__(131);

	var _event2 = _interopRequireDefault(_event);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 获取群@消息已读未读人数
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
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                          value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var Event = new _$BaseRoot.Base.Event(); /**
	                                          * Created by neitherzhu on 2017/1/3.
	                                          */
	exports.default = Event;
	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util,
	    Cache = _$BaseRoot.Base.Cache; /**
	                                    * Created by neitherzhu on 2016/12/6.
	                                    * 设置群@消息已读状态
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
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _template = __webpack_require__(66);

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
	   * 更新群@消息的未读已读人数
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
	    // 如果没有已读未读数量, 则移除@消息的样式
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
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _$IMSDKRoot = __webpack_require__(2);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _index = __webpack_require__(128);

	var _index2 = _interopRequireDefault(_index);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _event = __webpack_require__(131);

	var _event2 = _interopRequireDefault(_event);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _coms = __webpack_require__(135);

	var _fileParse = __webpack_require__(140);

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

	        _$IMSDKRoot2.default.fire(_constants2.default.Event.CONVERSATION_PREFIX + DLG_NAME + _constants2.default.Event.WINDOW_COVER_CHANGE, {
	            bCovered: data.result.bIsChatWindowCovered
	        });
	    });
	    /**
	     * 更新群@消息已读未读人数
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
	    _$IMSDKRoot2.default.on(_constants2.default.Event.CONVERSATION_PREFIX + DLG_NAME + _constants2.default.Event.WINDOW_COVER_CHANGE, function (data) {
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
	     * 群@消息已读数量变更
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

	    // 消息状态变更
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

	    // 单聊消息已读
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

	    // 更新消息已读未读状态
	    _event2.default.on(_constants2.default.Event.MSG_STATUS_CHANGE, function (data) {
	        _index2.default.updateMsgReadStatus.action(data);
	    });

	    document.body.addEventListener('click', function (ev) {
	        var target = ev.target;

	        if (!target) return;

	        if (target = Util.parents(target, 'J_tempAction')) {
	            var box = Util.parents(target, 'temp20014-wrap');

	            if (!box) return;

	            console.info('Вызов клиентского интерфейса для выполнения действия: ', target.getAttribute('data-action'));

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
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _popupOver = __webpack_require__(136);

	var _popupOver2 = _interopRequireDefault(_popupOver);

	var _toast = __webpack_require__(138);

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
/* 136 */
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

	__webpack_require__(137);

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

	        // 左右都超出, 展示在点击位置的中间
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
/* 137 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 138 */
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

	__webpack_require__(139);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * 消息区域toast
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
/* 139 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(66);

	var _getFileOptionData = __webpack_require__(107);

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
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

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
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _event = __webpack_require__(131);

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
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _util = __webpack_require__(100);

	var _util2 = _interopRequireDefault(_util);

	var _window = __webpack_require__(65);

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
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _event = __webpack_require__(131);

	var _event2 = _interopRequireDefault(_event);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _index = __webpack_require__(128);

	var _index2 = _interopRequireDefault(_index);

	var _template = __webpack_require__(66);

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

	    stateEl && (stateEl.innerHTML = (0, _$JuicerRoot2.default)(_template2.default.msgReadStatus, { tpl: tpl, isread: !msg.unread }));
	  });
	};

	exports.default = updateMsgReadStatus;
	module.exports = exports['default'];

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _index = __webpack_require__(128);

	var _index2 = _interopRequireDefault(_index);

	var _util = __webpack_require__(100);

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
	    // 自己发送的消息并且是发送成功的消息
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
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var sendMsgStatusChange = new _$BaseRoot.Base.ActionCreator(); /**
	                                                                * Created by neitherzhu on 2017/3/31.
	                                                                */

	sendMsgStatusChange.doSync = function (context, data) {

	  var msgEl = document.getElementById(data.msgid);

	  if (!msgEl) return;

	  // 消息发送成功
	  if (data.code === 0) {
	    var progressEl = msgEl.querySelector('.file-progress');
	    progressEl && progressEl.classList.add('hidden');
	  }
	};

	exports.default = sendMsgStatusChange;
	module.exports = exports['default'];

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(65);

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
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                           value: true
	});

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	__webpack_require__(150);

	__webpack_require__(151);

	__webpack_require__(152);

	__webpack_require__(153);

	__webpack_require__(154);

	__webpack_require__(155);

	__webpack_require__(157);

	__webpack_require__(159);

	__webpack_require__(161);

	__webpack_require__(163);

	__webpack_require__(164);

	__webpack_require__(165);

	__webpack_require__(166);

	__webpack_require__(167);

	__webpack_require__(168);

	__webpack_require__(169);

	function _interopRequireDefault(obj) {
	                                           return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _createPlugin2.default; /**
	                                           * Created by neitherzhu on 2016/12/7.
	                                           * 插件
	                                           */

	module.exports = exports['default'];

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                            value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var Plugin = new _$BaseRoot.Base.Plugin(); /**
	                                            * Created by neitherzhu on 2016/12/8.
	                                            * 创建全局插件
	                                            */
	exports.default = Plugin;
	module.exports = exports['default'];

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(128);

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
	     * 点击语音消息
	     */

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _util = __webpack_require__(100);

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
	     * 点击图片
	     */

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _$BaseRoot = __webpack_require__(3);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2016/12/8.
	                                  * 点击打开群@消息已读未读人数查看页面
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
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.OPEN_FILE_SETTING, function (ev) {
	  _sdk2.default.openFileSetting();
	}); /**
	     * Created by neitherzhu on 2016/12/8.
	     * 点击打开文件设置
	     */

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.OPEN_SHAKE_SETTING, function (ev) {
	  _sdk2.default.openShakeSetting();
	}); /**
	     * Created by neitherzhu on 2016/12/8.
	     * 打开震屏设置
	     */

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _image = __webpack_require__(156);

	var _image2 = _interopRequireDefault(_image);

	var _$BaseRoot = __webpack_require__(3);

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
/* 156 */
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
	            // 固定图片的高度,防止切换Контактное лицо时,由于图片加载问题导致滚动条跳动
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

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _template = __webpack_require__(66);

	var _template2 = _interopRequireDefault(_template);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _util = __webpack_require__(100);

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
	   * 图片消息 获取图片本地路径
	   */

	;
	module.exports = exports['default'];

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _audio = __webpack_require__(158);

	var _audio2 = _interopRequireDefault(_audio);

	var _$BaseRoot = __webpack_require__(3);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2016/12/9.
	                                  * 点击重收语音
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
/* 158 */
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

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _template = __webpack_require__(66);

	var _template2 = _interopRequireDefault(_template);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _$BaseRoot = __webpack_require__(3);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 语音消息 获取语音消息本地路径
	 */
	var Util = _$BaseRoot.Base.Util;
	;
	module.exports = exports['default'];

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$IMSDKRoot = __webpack_require__(2);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(3);

	var _popupOver = __webpack_require__(136);

	var _popupOver2 = _interopRequireDefault(_popupOver);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	__webpack_require__(160);

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
	    // 设置过按钮列表后, 需要将模板设为空
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
/* 160 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$IMSDKRoot = __webpack_require__(2);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _popupOver = __webpack_require__(136);

	var _popupOver2 = _interopRequireDefault(_popupOver);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _template = __webpack_require__(66);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(162);

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
	    // 设置过按钮列表后, 需要将模板设为空
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
/* 162 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _util = __webpack_require__(100);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.CANCEL_DOWNLOAD_FILE, function (ev) {
	  var target = ev.target;
	  var parent = _util2.default.parents(target, 'file-msg');

	  if (!parent) return;

	  var param = _util2.default.generatorFileMeta(parent);

	  _sdk2.default.cancelDownloadCloudFile(param).then(function (data) {
	    console.log(data);
	  });
	}); /**
	     * Created by neitherzhu on 2017/3/31.
	     */

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _util = __webpack_require__(100);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.CANCEL_UPLOAD_FILE, function (ev) {
	  var target = ev.target;
	  var parent = _util2.default.parents(target, 'file-msg');

	  if (!parent) return;

	  var param = _util2.default.generatorFileMeta(parent);

	  _sdk2.default.cancelUploadCloudFile(param).then(function (data) {
	    console.log(data);
	  });
	}); /**
	     * Created by neitherzhu on 2017/3/31.
	     */

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(128);

	var _actions2 = _interopRequireDefault(_actions);

	var _util = __webpack_require__(100);

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

	    // 点击Скачать файл会设置已读, 点击Предварительный просмотр也会设置已读,
	    // 点击了这2个按钮的任何一个, 都应该把另外一个也设置不发送已读状态的标记
	    var prevBtn = parent.querySelector('.' + _constants2.default.CLS.PREVIEW_FILE);
	    prevBtn && prevBtn.setAttribute('data-ignore', 1);
	    target.setAttribute('data-ignore', 1);
	  }
	}); /**
	     * Created by neitherzhu on 2017/3/31.
	     */

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(64);

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
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(128);

	var _actions2 = _interopRequireDefault(_actions);

	var _util = __webpack_require__(100);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.PREVIEW_FILE, function (ev) {
	  var target = ev.target;
	  var parent = _util2.default.parents(target, 'file-msg');
	  if (!parent) return;

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

	    var _msgParent = _util2.default.parents(target, _constants2.default.CLS.MSG_CONTAINER);
	    if (!_msgParent) return;
	    var time = _msgParent.dataset.time;

	    _actions2.default.setMsgReadStatus.action(_window2.default.sharedWin.conversationID, [{
	      svrtime: time,
	      msgtime: time,
	      msgid: _msgParent.id
	    }]);

	    // 点击Скачать файл会设置已读, 点击Предварительный просмотр也会设置已读,
	    // 点击了这2个按钮的任何一个, 都应该把另外一个也设置不发送已读状态的标记
	    var prevBtn = parent.querySelector('.' + _constants2.default.CLS.DOWNLOAD_FILE);
	    prevBtn && prevBtn.setAttribute('data-ignore', 1);
	    target.setAttribute('data-ignore', 1);
	  }
	}); /**
	     * Created by neitherzhu on 2017/3/31.
	     */

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.OPEN_AUDIO_TEXT_SETTING, function (ev) {
	  _sdk2.default.openSetting('im');
	}); /**
	     * Created by neitherzhu on 2016/12/8.
	     * 点击打开语音转文字设置
	     */

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(149);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(65);

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
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(171);

	__webpack_require__(176);

	var _callbacks = __webpack_require__(85);

	var _callbacks2 = _interopRequireDefault(_callbacks);

	var _link = __webpack_require__(103);

	var _link2 = _interopRequireDefault(_link);

	var _image = __webpack_require__(156);

	var _image2 = _interopRequireDefault(_image);

	var _audio = __webpack_require__(158);

	var _audio2 = _interopRequireDefault(_audio);

	var _atmsg = __webpack_require__(179);

	var _atmsg2 = _interopRequireDefault(_atmsg);

	var _dynamicMsg = __webpack_require__(109);

	var _dynamicMsg2 = _interopRequireDefault(_dynamicMsg);

	var _file = __webpack_require__(180);

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
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(172);

	__webpack_require__(175);

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(3);

	var _convert = __webpack_require__(84);

	var _convert2 = _interopRequireDefault(_convert);

	var _template = __webpack_require__(66);

	var _template2 = _interopRequireDefault(_template);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _normalMsgFormater = __webpack_require__(86);

	var _normalMsgFormater2 = _interopRequireDefault(_normalMsgFormater);

	var _callbacks = __webpack_require__(85);

	var _callbacks2 = _interopRequireDefault(_callbacks);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _degrade = __webpack_require__(173);

	var _degrade2 = _interopRequireDefault(_degrade);

	var _facetime = __webpack_require__(174);

	var _facetime2 = _interopRequireDefault(_facetime);

	var _defaultParse = __webpack_require__(110);

	var _defaultParse2 = _interopRequireDefault(_defaultParse);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2017/1/2.
	                                  */

	_convert2.default.add('chat', [0, 2, 3, 12, 13, 65648 /*多态卡片*/, 65649 /*文件消息*/, 65536 /*模板消息*/], 'normalMsg', {
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
	    // 排除自己的自动回复消息
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

	_convert2.default.add('chat', 65602 /*自定义消息*/, 'customMsg', {
	  format: function format(msg) {
	    var result = (0, _defaultParse2.default)(msg);

	    if (!result) return;

	    var text = '';
	    // 防止有多条降级消息 跟客户端的逻辑保持一致，只取第一条
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
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(66);

	var _template2 = _interopRequireDefault(_template);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _defaultParse = __webpack_require__(110);

	var _defaultParse2 = _interopRequireDefault(_defaultParse);

	var _link = __webpack_require__(87);

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
	            console.log(temp);
	            var el = document.getElementById('J_degrade_' + msg.msgid);
	            el && (el.innerHTML = temp);
	          }
	        }
	        console.error(data);
	      });
	    }
	  }

	  result.html = (0, _$JuicerRoot2.default)(_template2.default.degrade, { text: text, id: msg.msgid });

	  return result;
	};

	module.exports = exports['default'];

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defaultParse = __webpack_require__(110);

	var _defaultParse2 = _interopRequireDefault(_defaultParse);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(66);

	var _template2 = _interopRequireDefault(_template);

	var _util = __webpack_require__(100);

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
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _convert = __webpack_require__(84);

	var _convert2 = _interopRequireDefault(_convert);

	var _template = __webpack_require__(66);

	var _template2 = _interopRequireDefault(_template);

	var _shake = __webpack_require__(112);

	var _shake2 = _interopRequireDefault(_shake);

	var _file = __webpack_require__(113);

	var _file2 = _interopRequireDefault(_file);

	var _chat = __webpack_require__(114);

	var _chat2 = _interopRequireDefault(_chat);

	var _video = __webpack_require__(115);

	var _video2 = _interopRequireDefault(_video);

	var _remoteAssistance = __webpack_require__(116);

	var _remoteAssistance2 = _interopRequireDefault(_remoteAssistance);

	var _appSys = __webpack_require__(117);

	var _appSys2 = _interopRequireDefault(_appSys);

	var _msgRecall = __webpack_require__(108);

	var _msgRecall2 = _interopRequireDefault(_msgRecall);

	var _audio2text = __webpack_require__(125);

	var _audio2text2 = _interopRequireDefault(_audio2text);

	var _defaultSystemMsg = __webpack_require__(126);

	var _defaultSystemMsg2 = _interopRequireDefault(_defaultSystemMsg);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_convert2.default.add('chat', [4, 5, 6, 7, 8, 9, 10002, 10000, 10001], 'systemMsg', {
	  format: function format(msg) {
	    var type = msg.msgtype;
	    var result = void 0;

	    if (type == 4) {
	      // 震屏系统消息
	      result = (0, _shake2.default)(msg);
	    } else if (type === 5) {
	      // 文件系统消息
	      result = (0, _file2.default)(msg);
	    } else if (type === 6) {
	      // 语音聊天系统消息
	      result = (0, _chat2.default)(msg);
	    } else if (type === 7) {
	      // 视频聊天系统消息
	      result = (0, _video2.default)(msg);
	    } else if (type === 8) {
	      // 远程协助系统消息
	      result = (0, _remoteAssistance2.default)(msg);
	    } else if (type === 9) {
	      // 应用系统消息, 比如发送 qq
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

	// 需要对语音转文字系统消息做特殊处理，将一条消息拆成2条
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
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(177);

	__webpack_require__(178);

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _convert = __webpack_require__(84);

	var _convert2 = _interopRequireDefault(_convert);

	var _normalMsgFormater = __webpack_require__(86);

	var _normalMsgFormater2 = _interopRequireDefault(_normalMsgFormater);

	var _callbacks = __webpack_require__(85);

	var _callbacks2 = _interopRequireDefault(_callbacks);

	var _template = __webpack_require__(66);

	var _template2 = _interopRequireDefault(_template);

	var _degrade = __webpack_require__(173);

	var _degrade2 = _interopRequireDefault(_degrade);

	var _defaultParse = __webpack_require__(110);

	var _defaultParse2 = _interopRequireDefault(_defaultParse);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 群普通消息解析
	 */
	_convert2.default.add('tribe', [0, 65648 /*多态卡片*/, 65649 /*文件消息*/, 65536 /*模板消息*/], 'normalMsg', {
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

	_convert2.default.add('chat', 65602 /*自定义消息*/, 'customMsg', {
	  format: function format(msg) {
	    var result = (0, _defaultParse2.default)(msg);

	    if (!result) return;

	    var text = '';
	    // 防止有多条降级消息 跟客户端的逻辑保持一致，只取第一条
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
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _convert = __webpack_require__(84);

	var _convert2 = _interopRequireDefault(_convert);

	var _template = __webpack_require__(66);

	var _template2 = _interopRequireDefault(_template);

	var _exitTribe = __webpack_require__(118);

	var _exitTribe2 = _interopRequireDefault(_exitTribe);

	var _kickoutTribe = __webpack_require__(119);

	var _kickoutTribe2 = _interopRequireDefault(_kickoutTribe);

	var _joinTribe = __webpack_require__(120);

	var _joinTribe2 = _interopRequireDefault(_joinTribe);

	var _roleChange = __webpack_require__(121);

	var _roleChange2 = _interopRequireDefault(_roleChange);

	var _exitDiscussion = __webpack_require__(122);

	var _exitDiscussion2 = _interopRequireDefault(_exitDiscussion);

	var _joinDiscussion = __webpack_require__(123);

	var _joinDiscussion2 = _interopRequireDefault(_joinDiscussion);

	var _displayNameChange = __webpack_require__(124);

	var _displayNameChange2 = _interopRequireDefault(_displayNameChange);

	var _msgRecall = __webpack_require__(108);

	var _msgRecall2 = _interopRequireDefault(_msgRecall);

	var _multiJoin = __webpack_require__(127);

	var _multiJoin2 = _interopRequireDefault(_multiJoin);

	var _audio2text = __webpack_require__(125);

	var _audio2text2 = _interopRequireDefault(_audio2text);

	var _defaultSystemMsg = __webpack_require__(126);

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

	// 需要对语音转文字系统消息做特殊处理，将一条消息拆成2条
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
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (extra, callback) {

	  // 如果是-1(to be at memebers) -2(to be at all),
	  // 需要缓存消息id, 等消息状态变更事件回来时,再判断是否是真正的@消息
	  // 极限情况下, 会先收到消息发送成功的事件,再获取到新消息,
	  // 导致此条@消息不再去获取已读未读状态
	  // 故改成如果是待确认的, 仍然去获取一次
	  if (extra.atmsgtype < 0) {
	    var d = {};

	    d[extra.msgid] = 1;

	    Cache.set('TO_BE_AT_MSG', d);
	  }

	  // 如果是我@的消息, 放到待获取已读未读人数列表中
	  if (extra.atmsgtype < 0 || extra.relation2me == 1) {
	    cacheToGetRead.push({
	      userid: _window2.default.sharedWin.loginID,
	      msgid: extra.msgid
	    });
	  }
	  // 如果是@我的消息, 放到待设置已读状态列表中
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

	var _$BaseRoot = __webpack_require__(3);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _event = __webpack_require__(131);

	var _event2 = _interopRequireDefault(_event);

	var _actions = __webpack_require__(128);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 群@消息 处理已读未读
	 */
	var Cache = _$BaseRoot.Base.Cache;
	var cacheToSetRead = [];
	var cacheToGetRead = [];
	var timer = null;

	module.exports = exports['default'];

/***/ },
/* 180 */
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

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(3);

	var _fileParse = __webpack_require__(140);

	var _fileParse2 = _interopRequireDefault(_fileParse);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Log = _$BaseRoot.Base.Log; /**
	                                * Created by neitherzhu on 2017/3/29.
	                                */

	module.exports = exports['default'];

/***/ },
/* 181 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _event = __webpack_require__(12);

	var _event2 = _interopRequireDefault(_event);

	var _loading = __webpack_require__(183);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/3.
	 */
	var Util = _$BaseRoot.Base.Util;

	var searchMsg = new _$BaseRoot.Base.ActionCreator();

	searchMsg.actionType = 'async';
	searchMsg.count = 20;

	searchMsg.before(function (context, param) {
	    if (!param || !param.cid) return false;
	    _loading2.default.show(_window2.default.container);
	    param.msgid || (param.msgid = '-1');
	    param.btime || (param.btime = '0');
	    param.etime || (param.etime = '-1');
	    param.msgtime || (param.msgtime = '-1');
	    param.count || (param.count = this.count);
	    param.ignoreboundary || (param.ignoreboundary = 1);

	    param.keywords && param.keywords.length && (_window2.default.searchMoreOption.search = 1);
	});

	searchMsg.before(function () {
	    _actions2.default.renderRoamResult.hide();
	});

	var d = false;

	searchMsg.doAsync = function (context, param) {
	    return new Promise(function (resolve, reject) {
	        _sdk2.default.searchMsg(param).then(function (data) {

	            if (data.result && data.result.msgs) {

	                if (Util.getUid(_window2.default.conversationID) !== Util.getUid(data.result.cid)) {
	                    return reject();
	                }
	                var msgs = data.result.msgs;
	                var len = msgs.length;

	                context.hasPage = len >= param.count;

	                if (len === param.count) {
	                    param.gohistory === 1 ? msgs.shift() : msgs.splice(len - 1, 1);
	                }

	                context.param = param;
	                resolve(data.result);
	            } else {
	                reject();
	            }
	        }).catch(function (err) {
	            reject(err);
	        });
	    });
	};

	searchMsg.after(function (context, data) {
	    if (!data || !data.msgs.length) return;
	    var param = context.param;
	    var hasPrev = false;
	    var hasNext = false;
	    var hasPage = context.hasPage;

	    // 当使用的searchDBMsg时:
	    // msgtime = 0 gohistory = 0 表示以最早的时间向当前时间的方向取, 即首页
	    // msgtime = -1 gohistory = 1 表示以当前的时间向以前时间的方向取, 即尾页
	    // 如果有消息时间,则1表示以当前消息时间往前取, 0表示以当前时间往后取

	    // 如果是最后一页
	    if (param.msgtime === '-1' && param.gohistory === 1) {
	        hasNext = false;
	        hasPrev = hasPage;
	    }
	    // 如果是第一页
	    else if (param.msgtime === '0' && param.gohistory === 0) {
	            hasPrev = false;
	            hasNext = hasPage;
	        } else {
	            hasPrev = param.gohistory === 1 ? hasPage : param.msgtime !== '-1';
	            hasNext = param.gohistory === 1 ? param.msgtime !== '-1' : hasPage;
	        }

	    _event2.default.emit('PAGE_STATE_CHANGE', {
	        hasPrev: hasPrev,
	        hasNext: hasNext
	    });
	});

	searchMsg.after(function (context, data) {
	    _actions2.default.renderMsg.action(data.msgs, context.container, context.param.pageTurn);
	});

	searchMsg.after(function (context, data) {
	    if (_window2.default.searchMoreOption && _window2.default.searchMoreOption.search && !context.param.pageTurn) {
	        _actions2.default.showTopTab.action({
	            type: 'search',
	            count: data.totalcount
	        });
	    }
	});

	searchMsg.error(function () {
	    _loading2.default.hide(_window2.default.container);
	});

	exports.default = searchMsg;
	module.exports = exports['default'];

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _index = __webpack_require__(184);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(185);

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
/* 184 */
/***/ function(module, exports) {

	module.exports = "<div class=\"search-loading\">Пытаюсь загрузить...</div>";

/***/ },
/* 185 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _convert = __webpack_require__(187);

	var _convert2 = _interopRequireDefault(_convert);

	var _template = __webpack_require__(36);

	var _template2 = _interopRequireDefault(_template);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

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
	   * Created by neitherzhu on 2017/1/3.
	   */

	var Util = _$BaseRoot.Base.Util,
	    Log = _$BaseRoot.Base.Log;

	var renderMsg = new _$BaseRoot.Base.ActionCreator();

	renderMsg.before(function (context, data, container, pageTurn) {
	    if (!container || !this.container) {
	        if (!this.container) {
	            this.container = document.getElementById(_constants2.default.EL_ID.MSG_CONTAINER);
	        }
	        container = this.container;
	    }

	    context.container = container;
	    context.pageTurn = pageTurn;
	});

	renderMsg.doSync = function (context, data) {

	    var html = '';
	    var callbacks = [];
	    var label = Util.getLabel(_window2.default.conversationID);
	    var convert = void 0;
	    var date = void 0;
	    var cacheDate = '';

	    _window2.default.msgList = [];

	    if (data && data.length) {

	        data.forEach(function (msg) {

	            date = new Date(parseInt(msg.msgtime, 10)).__getOnlyDate();
	            if (date !== cacheDate) {
	                if (cacheDate) {
	                    html += '</div>';
	                }
	                cacheDate = date;
	                html += (0, _$JuicerRoot2.default)(_template2.default.dateSplit, { date: date });

	                html += '<div class="date-split-container">';
	            }

	            convert = _convert2.default.convert(label, msg, 'msgtype');

	            if (!convert || !convert.html) return;

	            _window2.default.msgList.push(msg);
	            html += convert.html;
	            convert.callback && callbacks.push(convert.callback);
	        });
	    }

	    if (!html) {
	        html = _template2.default.empty;
	    }
	    context.container.innerHTML = html;

	    callbacks.forEach(function (callback) {
	        callback();
	    });

	    Log.orange('Win.searchMoreOption', _window2.default.searchMoreOption);
	    if (!_window2.default.searchMoreOption || _window2.default.searchMoreOption.search !== 0 || context.pageTurn) {
	        Util.scrollToBottom(context.container, [].concat(_toConsumableArray(context.container.childNodes)));
	    }
	};

	renderMsg.after(function (context) {
	    var defaultParam = _window2.default.defaultParam;
	    if (defaultParam && defaultParam.actiontype) {
	        if (defaultParam.actiontype === 5) {
	            document.querySelector('.J_singleTab[data-type=file_types]').click();
	            _window2.default.defaultParam = null;
	        }
	    }
	});

	exports.default = renderMsg;
	module.exports = exports['default'];

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _$ConvertRoot = __webpack_require__(60);

	var _template = __webpack_require__(36);

	var _template2 = _interopRequireDefault(_template);

	var _file = __webpack_require__(188);

	var _file2 = _interopRequireDefault(_file);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2017/1/3.
	                                  */

	var singleMsgTypes = _$ConvertRoot.Convert.getMsgTypesByName('chat', 'normalMsg');
	var tribeMsgTypes = _$ConvertRoot.Convert.getMsgTypesByName('tribe', 'normalMsg');
	_$ConvertRoot.Convert.update('chat', singleMsgTypes, 'normalMsg', {
	  Tpl: _template2.default.normalMsg
	});

	_$ConvertRoot.Convert.update('tribe', tribeMsgTypes, 'normalMsg', {
	  Tpl: _template2.default.normalMsg
	});

	_$ConvertRoot.Convert.update('chat', 1, 'autoReplyMsg', {
	  format: function format(msg) {
	    var result = _$ConvertRoot.MsgFormats.SingleNormalMsgFormat(msg);
	    // 排除自己的自动回复消息
	    if (Util.getUid(result.from) !== Util.getUid(_window2.default.loginID)) {
	      result.html && (result.html = '<span class="auto-reply-text">[автоматический ответ]</span>' + result.html);
	    }
	    return result;
	  },
	  Tpl: _template2.default.normalMsg
	});

	_$ConvertRoot.Convert.add('chat', 10, 'fileMsg', {
	  Tpl: _template2.default.file,
	  format: _file2.default
	});

	_$ConvertRoot.Convert.pushInjectNormalFormat(function (msg, result) {
	  if (_window2.default.searchMoreOption && _window2.default.searchMoreOption.search) {
	    result.search = 1;
	  }

	  return result;
	});

	_$ConvertRoot.Convert.pushInjectSystemFormat(function (msg, result) {
	  if (_window2.default.searchMoreOption && _window2.default.searchMoreOption.search) {
	    result.search = 1;
	  }

	  return result;
	});

	exports.default = _$ConvertRoot.Convert;
	module.exports = exports['default'];

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/16.
	 */
	var Util = _$BaseRoot.Base.Util;

	var SUFFIX = {
	  0: 'B',
	  1: 'KB',
	  2: 'MB',
	  3: 'GB'
	};

	function getFileSize(s) {
	  var r = s;
	  var c = 0;

	  while (r > 1024) {
	    r = r / 1024;
	    c++;
	  }

	  return r.toFixed(2) + SUFFIX[c];
	}

	exports.default = function (msg) {

	  if (msg.msgbody) {
	    msg.msgbody = JSON.parse(msg.msgbody);
	  }

	  msg.isFolder = msg.msgbody.isFolder_;
	  msg.fileName = msg.msgbody.filePath;
	  msg.encodeFileName = encodeURIComponent(msg.msgbody.filePath);
	  msg.fileSize = getFileSize(msg.msgbody.fileSize);
	  msg.self = Util.getUid(msg.cid) !== Util.getUid(msg.fromid);

	  if (_window2.default.searchMoreOption && _window2.default.searchMoreOption.search) {
	    msg.search = 1;
	  }

	  return msg;
	};

	module.exports = exports['default'];

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var getTribeList = new _$BaseRoot.Base.ActionCreator(); /**
	                                                         * Created by neitherzhu on 2017/1/3.
	                                                         */

	getTribeList.actionType = 'async';

	getTribeList.doAsync = function (context) {

	  return new Promise(function (resolve, reject) {
	    _sdk2.default.getTribeList().then(function (data) {

	      var results = {};

	      results['ownedTribe'] = {
	        display: _constants2.default.I18N[_constants2.default.LANGUAGE].MY_OWNED_TRIBE,
	        list: []
	      };
	      results['joinedTribe'] = {
	        display: _constants2.default.I18N[_constants2.default.LANGUAGE].MY_JOINED_TRIBE,
	        list: []
	      };
	      results['discussion'] = {
	        display: _constants2.default.I18N[_constants2.default.LANGUAGE].DISCUSSION,
	        list: []
	      };

	      if (data && data.result) {
	        if (data.result.length) {
	          data.result.forEach(function (t) {
	            if (t.type === 1) {
	              results['discussion'].list.push(t);
	            } else {
	              if (t.mylevel === 1) {
	                results['ownedTribe'].list.push(t);
	              } else {
	                results['joinedTribe'].list.push(t);
	              }
	            }
	          });
	        }
	      }

	      resolve(results);
	    }).catch(function (err) {
	      reject(err);
	    });
	  });
	};

	getTribeList.after(function (context, data) {
	  _sdk2.default.getQuitTribe().then(function (data) {

	    if (_window2.default.type == _constants2.default.TYPE.TRIBE) {
	      data = data.result;

	      _actions2.default.renderQuitTribeList.action(data.tribeids);
	    }
	  });
	});

	getTribeList.after(function (context, data) {
	  _actions2.default.renderTribeList.action(data);
	});

	exports.default = getTribeList;
	module.exports = exports['default'];

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(36);

	var _template2 = _interopRequireDefault(_template);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var renderTribeList = new _$BaseRoot.Base.ActionCreator(); /**
	                                                            * Created by neitherzhu on 2017/1/3.
	                                                            */

	renderTribeList.before(function (context, data, container) {
	  if (!container || !this.container) {
	    if (!this.container) {
	      this.container = document.getElementById('J_leftContent');
	    }
	    container = this.container;
	  }

	  context.container = container;
	});

	renderTribeList.doSync = function (context, data) {
	  var html = (0, _$JuicerRoot2.default)(_template2.default.tribeList, {
	    tribeItem: _template2.default.tribeItem,
	    ownedTribe: data.ownedTribe,
	    joinedTribe: data.joinedTribe,
	    discussion: data.discussion
	  });

	  context.container.innerHTML = html;
	};

	renderTribeList.after(function (context, data) {
	  var param = _window2.default.defaultParam;
	  if (param && param.gids && param.gids.length) {
	    var gid = param.gids.shift();

	    document.getElementById(gid).click();
	  }

	  var defaultUid = _window2.default.defaultParam && _window2.default.defaultParam.uid;
	  if (defaultUid) {
	    var active = context.container.querySelector('.J_' + defaultUid);

	    if (active) {
	      active.scrollIntoView();
	      active.click();

	      _window2.default.defaultParam.uid = '';
	    }
	  }
	});

	exports.default = renderTribeList;
	module.exports = exports['default'];

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var OND_DAY_MS = 24 * 60 * 60 * 1000; /**
	                                       * Created by neitherzhu on 2017/1/5.
	                                       */

	var roamMsg = new _$BaseRoot.Base.ActionCreator();

	roamMsg.actionType = 'async';
	roamMsg.count = 1000;

	roamMsg.before(function (context, param) {
	  context.param = param || this.param || {};

	  _actions2.default.renderRoamResult.hide();
	});

	roamMsg.doAsync = function (context, param) {
	  var _this = this;

	  param = context.param;

	  return new Promise(function (resolve, reject) {

	    _sdk2.default.getServerTime().then(function (data) {
	      param.identify = 2;
	      param.etime = '-1';
	      param.count = _this.count;
	      param.btime = parseInt(data.result) - param.duration * OND_DAY_MS + '';

	      _this.param = param;

	      _sdk2.default.roamMsg(param).then(function (data) {
	        var result = void 0;

	        if (data && data.result) {
	          result = data.result;
	          result.duration = param.duration;
	          result.roamedcount < _this.count && (result.all = true);
	        }

	        resolve(result);
	      }).catch(function (err) {
	        resolve();
	      });
	    });
	  });
	};

	roamMsg.after(function (context, data) {
	  _actions2.default.renderRoamResult.action(data);
	});

	exports.default = roamMsg;
	module.exports = exports['default'];

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _convert = __webpack_require__(187);

	var _convert2 = _interopRequireDefault(_convert);

	var _template = __webpack_require__(36);

	var _template2 = _interopRequireDefault(_template);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2017/1/5.
	                                  */

	var renderRoamResult = new _$BaseRoot.Base.ActionCreator();

	renderRoamResult.before(function (context, data, container) {
	  if (!container || !this.container) {
	    if (!this.container) {
	      this.container = document.getElementById(_constants2.default.EL_ID.MSG_CONTAINER);
	    }
	    container = this.container;
	  }

	  context.container = container;
	});

	renderRoamResult.hide = function () {
	  var resultEl = document.getElementById(_constants2.default.EL_ID.ROAM_EL);
	  resultEl && resultEl.classList.add('hide');
	};

	renderRoamResult.doSync = function (context, data) {
	  var _this = this;

	  var tpl = '';
	  var resultEl = document.getElementById(_constants2.default.EL_ID.ROAM_EL);
	  var autoClose = false;
	  var needRefresh = false;
	  var isBottom = _window2.default.container.scrollHeight <= _window2.default.container.scrollTop + _window2.default.container.clientHeight;

	  this.timer && clearTimeout(this.timer);

	  if (!data) {
	    tpl = _constants2.default.I18N[_constants2.default.LANGUAGE].ROAM_FAIL;
	    autoClose = true;
	  } else if (data.roamedcount) {
	    if (data.all) {
	      tpl = (0, _$JuicerRoot2.default)(_constants2.default.I18N[_constants2.default.LANGUAGE].ROAM_SUCCESS_ALL, {
	        count: data.roamedcount
	      });
	      needRefresh = true;
	    } else {
	      tpl = _constants2.default.I18N[_constants2.default.LANGUAGE].ROAM_SUCCESS_PART;
	      needRefresh = true;
	    }
	  } else {

	    var duration = data.duration;
	    if (duration) {
	      if (duration <= 30) {
	        duration += '天';
	      } else if (duration < 365) {
	        duration = parseInt(duration / 30) + '个月';
	      } else {
	        duration = parseInt(duration / 365) + '年';
	      }
	    }
	    tpl = (0, _$JuicerRoot2.default)(_constants2.default.I18N[_constants2.default.LANGUAGE].NOTHING_TO_ROAM, { duration: duration });
	    autoClose = true;
	  }

	  tpl = (0, _$JuicerRoot2.default)(_template2.default.roamResult, {
	    result: tpl
	  });

	  if (resultEl) {
	    resultEl.outerHTML = tpl;
	  } else {
	    var content = document.getElementById(_constants2.default.EL_ID.RIGHT_CONTENT);
	    var el = Util.createFragment(tpl);
	    content.insertBefore(el, document.getElementById(_constants2.default.EL_ID.TOP_CONTENT).nextSibling);
	  }

	  if (autoClose) {
	    this.timer = setTimeout(function () {
	      _this.hide();
	      _this.timer = null;
	    }, 3000);
	  }

	  if (needRefresh && (!_window2.default.msgList || !_window2.default.msgList.length)) {
	    _actions2.default.searchMsg.action(_window2.default.searchOption);
	  }

	  isBottom && Util.scrollToBottom(_window2.default.container);
	};

	exports.default = renderRoamResult;
	module.exports = exports['default'];

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _convert = __webpack_require__(187);

	var _convert2 = _interopRequireDefault(_convert);

	var _template = __webpack_require__(36);

	var _template2 = _interopRequireDefault(_template);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var showTopTab = new _$BaseRoot.Base.ActionCreator(); /**
	                                                       * Created by neitherzhu on 2017/1/5.
	                                                       */

	showTopTab.before(function (context, data) {});

	showTopTab.doSync = function (context, data) {
	  //if(data && data.type === this.type) return;

	  if (!this.container) {
	    this.container = document.getElementById(_constants2.default.EL_ID.TOP_CONTENT);
	  }
	  if (data) {
	    // 单聊消息类型选项
	    if (data.type == 1) {
	      this.container.innerHTML = _template2.default.singleTab;
	      //}else if(data.type == 2) {
	    } else if (data.type == 'search') {
	      this.container.innerHTML = (0, _$JuicerRoot2.default)(_template2.default.searchResult, { count: data.count });
	    } else if (data.type == 'context') {
	      this.container.innerHTML = _template2.default.backToSearch;
	    } else {
	      this.container.innerHTML = '';
	    }
	    this.type = data.type;
	  } else {
	    this.container.innerHTML = '';
	  }
	};

	exports.default = showTopTab;
	module.exports = exports['default'];

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var deleteMsg = new _$BaseRoot.Base.ActionCreator(); /**
	                                                      * Created by neitherzhu on 2017/1/6.
	                                                      */

	deleteMsg.actionType = 'async';

	deleteMsg.before(function (context, param) {
	  context.param = param;
	  var type = _window2.default.conversationID && _window2.default.conversationID.type;
	  // 验证消息
	  if (type == _constants2.default.TYPE.VERIFY) {
	    var l = _window2.default.msgList.length;
	    context.p = [];

	    param.msgids && param.msgids.forEach(function (id) {
	      for (var i = 0; i < l; i++) {
	        if (_window2.default.msgList[i].msgid === id) {
	          context.p.push({
	            fromid: _window2.default.msgList[i].fromid,
	            msgid: id
	          });
	        }
	      }
	    });
	  }
	  // 系统消息
	  else if (type == _constants2.default.TYPE.SYSTEM) {
	      var _l = _window2.default.msgList.length;
	      context.p = [];

	      param.msgids && param.msgids.forEach(function (id) {
	        for (var i = 0; i < _l; i++) {
	          if (_window2.default.msgList[i].msgid === id) {
	            context.p.push(_window2.default.msgList[i]);
	          }
	        }
	      });
	    } else {
	      context.p = param;
	    }
	});

	deleteMsg.doAsync = function (context, param) {

	  return new Promise(function (resolve, reject) {
	    var promise = void 0;
	    var type = _window2.default.conversationID && _window2.default.conversationID.type;

	    if (type == _constants2.default.TYPE.VERIFY) {
	      promise = _sdk2.default.deleteContactVerifyMsgs;
	    } else if (type == _constants2.default.TYPE.SYSTEM) {
	      promise = _sdk2.default.deleteSystemMsg;
	    } else {
	      promise = _sdk2.default.deleteMsg;
	    }
	    promise(context.p).then(function (data) {
	      resolve();
	    }).catch(function (err) {
	      reject(err);
	    });
	  });
	};

	deleteMsg.after(function (context, data) {
	  context.param.msgids.forEach(function (id) {
	    var msg = document.getElementById(id);
	    var len = _window2.default.msgList.length;
	    var i = 0;

	    if (msg) {
	      var parent = msg.parentNode;

	      // 删除日期分割线
	      if (parent.childNodes && parent.childNodes.length == 1) {
	        parent.parentNode.removeChild(parent.previousSibling);
	      }

	      msg.parentNode.removeChild(msg);
	    }

	    for (; i < len; i++) {
	      if (id === _window2.default.msgList[i].msgid) {
	        _window2.default.msgList.splice(i, 1);
	        break;
	      }
	    }
	  });
	});

	deleteMsg.after(function (context, data) {
	  if (_window2.default.msgList.length) return;
	  var type = _window2.default.conversationID && _window2.default.conversationID.type;

	  if (type == _constants2.default.TYPE.VERIFY) {
	    _window2.default.searchOption.btime = '0';
	    _window2.default.searchOption.etime = '-1';
	    _window2.default.searchOption.gethistory = 1;
	    var param = Object.assign({}, _window2.default.searchOption, _window2.default.searchMoreOption);
	    _actions2.default.getVerifyMsg.action(param);
	  } else if (type == _constants2.default.TYPE.SYSTEM) {
	    _actions2.default.getSystemMsgList.action();
	  } else {
	    _window2.default.searchOption.gohistory = 1;
	    _window2.default.searchOption.msgtime = '-1';
	    _window2.default.searchOption.msgid = '-1';
	    var _param = Object.assign({}, _window2.default.searchOption, _window2.default.searchMoreOption);
	    _actions2.default.searchMsg.action(_param);
	  }
	});

	exports.default = deleteMsg;
	module.exports = exports['default'];

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _index = __webpack_require__(7);

	var _index2 = _interopRequireDefault(_index);

	var _plugins = __webpack_require__(196);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/30.
	 */
	var Util = _$BaseRoot.Base.Util,
	    Log = _$BaseRoot.Base.Log;

	var start = new _$BaseRoot.Base.ActionCreator();

	Log.setPrefix('MessageManager');
	Log.setLogLevel(0);

	start.doSync = function () {
	  var param = Util.getParam(location.search.substring(1)).param;

	  if (param) {
	    param = JSON.parse(param);
	    if (!param.cid) {
	      param.cid = {};
	    }
	    Util.setCidType(param.cid);
	    param.cid && (param.uid = Util.getUid(param.cid));
	    param.actiontype === 132 && (param.cid = { type: 4 });
	    param.actiontype === 131 && (param.cid = { type: 0 });
	    _window2.default.defaultParam = param;
	  }
	  Log.red('DefaultParam', param);
	  _plugins2.default.init({ container: _window2.default.container });
	  _index2.default.getCurrentLoginID.action();
	};

	exports.default = start;
	module.exports = exports['default'];

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createPlugin = __webpack_require__(197);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	__webpack_require__(198);

	__webpack_require__(199);

	__webpack_require__(200);

	__webpack_require__(201);

	__webpack_require__(202);

	__webpack_require__(203);

	__webpack_require__(204);

	__webpack_require__(205);

	__webpack_require__(206);

	__webpack_require__(207);

	__webpack_require__(208);

	__webpack_require__(209);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _createPlugin2.default;
	module.exports = exports['default'];

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var Plugin = new _$BaseRoot.Base.Plugin();

	exports.default = Plugin;
	module.exports = exports['default'];

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(197);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.OPEN_FILE_SETTING, function (ev) {
	  _sdk2.default.openFileSetting();
	}); /**
	     * Created by neitherzhu on 2016/12/8.
	     * 点击打开文件设置
	     */

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(197);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.OPEN_SHAKE_SETTING, function (ev) {
	  _sdk2.default.openShakeSetting();
	}); /**
	     * Created by neitherzhu on 2016/12/8.
	     * 打开震屏设置
	     */

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(197);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.OPEN_FILE, function (ev) {
	  var target = ev.target;
	  var path = target.parentNode.getAttribute('data-path');

	  _sdk2.default.openFile({
	    needSafeCheck: 1,
	    filePath: decodeURIComponent(path)
	  });
	}); /**
	     * Created by neitherzhu on 2017/1/17.
	     */

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(197);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.OPEN_FOLDER, function (ev) {
	  var target = ev.target;
	  var path = target.parentNode.getAttribute('data-path');

	  _sdk2.default.openFolder({
	    needSafeCheck: 1,
	    filePath: decodeURIComponent(path)
	  });
	}); /**
	     * Created by neitherzhu on 2017/1/17.
	     */

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(197);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.OPEN_PARENT_FOLDER, function (ev) {
	  var target = ev.target;
	  var path = target.parentNode.getAttribute('data-path');

	  _sdk2.default.openParentFolder({
	    needSafeCheck: 1,
	    filePath: decodeURIComponent(path)
	  });
	}); /**
	     * Created by neitherzhu on 2017/1/17.
	     */

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(197);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/24.
	 */
	var Util = _$BaseRoot.Base.Util;

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.OPEN_INFO, function (ev) {
	  var target = ev.target;
	  var parent = Util.parents(target, _constants2.default.CLS.MSG_CONTAINER);

	  if (!parent) return;

	  var type = parent.getAttribute('data-type');
	  var cid = void 0;
	  if (type == 1) {
	    cid = {
	      appkey: parent.getAttribute('data-appkey'),
	      nick: parent.getAttribute('data-nick')
	    };

	    _sdk2.default.showContactInfo(cid);
	  } else if (type == 2) {
	    cid = {
	      tribeid: parent.getAttribute('data-tribeid')
	    };

	    _sdk2.default.showTribeInfo(cid);
	  }
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(197);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/24.
	 */
	var Util = _$BaseRoot.Base.Util;

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.ADD_TO_FRIEND, function (ev) {
	  var target = ev.target;
	  var parent = Util.parents(target, _constants2.default.CLS.MSG_CONTAINER);

	  if (!parent) return;

	  var type = parent.getAttribute('data-type');
	  var g = parent.getAttribute('data-gidinpeergroup');
	  var a = parent.getAttribute('data-authinfo');
	  var cid = void 0;
	  if (type == 1) {
	    cid = {
	      appkey: parent.getAttribute('data-appkey'),
	      nick: parent.getAttribute('data-nick')
	    };

	    _sdk2.default.addToFriend({
	      fromid: cid,
	      msgid: parent.id,
	      gidinpeergroup: g,
	      authinfo: a
	    });

	    parent.parentNode.removeChild(parent);
	  }
	});

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(197);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/24.
	 */
	var Util = _$BaseRoot.Base.Util;

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.ADD_TO_BLACKLIST, function (ev) {
	  var target = ev.target;
	  var parent = Util.parents(target, _constants2.default.CLS.MSG_CONTAINER);

	  if (!parent) return;

	  var type = parent.getAttribute('data-type');
	  var g = parent.getAttribute('data-gidinpeergroup');
	  var a = parent.getAttribute('data-authinfo');
	  var cid = void 0;
	  if (type == 1) {
	    cid = {
	      appkey: parent.getAttribute('data-appkey'),
	      nick: parent.getAttribute('data-nick')
	    };

	    _sdk2.default.addToBlackList({
	      fromid: cid,
	      msgid: parent.id,
	      gidinpeergroup: g,
	      authinfo: a
	    });
	    parent.parentNode.removeChild(parent);
	  }
	});

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(197);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/24.
	 */
	var Util = _$BaseRoot.Base.Util;

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.AGREE_TO_ADD, function (ev) {
	  var target = ev.target;
	  var parent = Util.parents(target, _constants2.default.CLS.MSG_CONTAINER);

	  if (!parent) return;

	  var type = parent.getAttribute('data-type');
	  var g = parent.getAttribute('data-gidinpeergroup');
	  var a = parent.getAttribute('data-authinfo');
	  var cid = void 0;
	  if (type == 1) {
	    cid = {
	      appkey: parent.getAttribute('data-appkey'),
	      nick: parent.getAttribute('data-nick')
	    };

	    _sdk2.default.agreeToAdd({
	      fromid: cid,
	      msgid: parent.id,
	      gidinpeergroup: g,
	      authinfo: a
	    });

	    parent.parentNode.removeChild(parent);
	  }
	});

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(197);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/24.
	 */
	var Util = _$BaseRoot.Base.Util;

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.REFUSE_TO_ADD, function (ev) {
	  var target = ev.target;
	  var parent = Util.parents(target, _constants2.default.CLS.MSG_CONTAINER);

	  if (!parent) return;

	  var type = parent.getAttribute('data-type');
	  var g = parent.getAttribute('data-gidinpeergroup');
	  var a = parent.getAttribute('data-authinfo');
	  var cid = void 0;
	  if (type == 1) {
	    cid = {
	      appkey: parent.getAttribute('data-appkey'),
	      nick: parent.getAttribute('data-nick')
	    };

	    _sdk2.default.refuseToAdd({
	      fromid: cid,
	      msgid: parent.id,
	      gidinpeergroup: g,
	      authinfo: a
	    });

	    parent.parentNode.removeChild(parent);
	  }
	});

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(197);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/24.
	 */
	var Util = _$BaseRoot.Base.Util;

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.REPORT_CONTACT, function (ev) {
	  var target = ev.target;
	  var parent = Util.parents(target, _constants2.default.CLS.MSG_CONTAINER);

	  if (!parent) return;

	  var type = parent.getAttribute('data-type');
	  var g = parent.getAttribute('data-gidinpeergroup');
	  var a = parent.getAttribute('data-authinfo');
	  var cid = void 0;
	  if (type == 1) {
	    cid = {
	      appkey: parent.getAttribute('data-appkey'),
	      nick: parent.getAttribute('data-nick')
	    };

	    _sdk2.default.reportContact({
	      fromid: cid,
	      msgid: parent.id,
	      gidinpeergroup: g,
	      authinfo: a
	    });

	    //parent.parentNode.removeChild(parent);
	  }
	});

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(197);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/25.
	 */
	var Util = _$BaseRoot.Base.Util;

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.IGNORE_CONTACT_VERIFY, function (ev) {
	  var target = ev.target;
	  var parent = Util.parents(target, _constants2.default.CLS.MSG_CONTAINER);

	  if (!parent) return;

	  var type = parent.getAttribute('data-type');
	  var g = parent.getAttribute('data-gidinpeergroup');
	  var a = parent.getAttribute('data-authinfo');
	  var cid = void 0;
	  if (type == 1) {
	    cid = {
	      appkey: parent.getAttribute('data-appkey'),
	      nick: parent.getAttribute('data-nick')
	    };
	    _sdk2.default.ignoreContactVerify({
	      fromid: cid,
	      msgid: parent.id,
	      gidinpeergroup: g,
	      authinfo: a
	    });
	    parent.parentNode.removeChild(parent);
	  }
	});

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(36);

	var _template2 = _interopRequireDefault(_template);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/18.
	 */
	var Util = _$BaseRoot.Base.Util;

	var renderQuitTribeList = new _$BaseRoot.Base.ActionCreator();

	renderQuitTribeList.before(function (context, data, container) {
	  if (!container || !this.container) {
	    if (!this.container) {
	      this.container = document.getElementById('J_leftContent');
	    }
	    container = this.container;
	  }

	  context.container = container;
	});

	renderQuitTribeList.doSync = function (context, data) {
	  var html = (0, _$JuicerRoot2.default)(_template2.default.quitTribeList, {
	    display: _constants2.default.I18N[_constants2.default.LANGUAGE].MY_QUIT_TRIBE,
	    list: data,
	    tribeItem: _template2.default.tribeItem
	  });

	  var f = Util.createFragment(html);

	  context.container.appendChild(f);
	};

	exports.default = renderQuitTribeList;
	module.exports = exports['default'];

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _event = __webpack_require__(12);

	var _event2 = _interopRequireDefault(_event);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/19.
	 */
	var searchCidByMsg = new _$BaseRoot.Base.ActionCreator();

	searchCidByMsg.actionType = 'async';

	searchCidByMsg.before(function (context, param) {
	  //if(this.pendding) {
	  //  return new Promise((resolve, reject) => {
	  //    reject();
	  //  });
	  //}else {
	  //this.pendding = 1;
	  param.btime += '';
	  param.etime += '';
	  param.msgtypes = _constants2.default[param.type > 0 ? 'MSG_TYPES' : 'FILE_TYPES'][Math.abs(param.type)];
	  //}
	});

	searchCidByMsg.before(function () {
	  _actions2.default.showTopTab.action();
	});

	searchCidByMsg.doAsync = function (context, param) {
	  return new Promise(function (resolve, reject) {
	    _sdk2.default[param.type == 2 ? 'searchTribeCidByMsg' : 'searchSingleCidByMsg'](param).then(function (data) {
	      context.type = param.type;
	      //this.pendding = 0;

	      if (!_window2.default.searchMoreOption || _window2.default.searchMoreOption && _window2.default.searchMoreOption.msgtypes.join('') != data.result.msgtypes.join('')) {
	        return reject();
	      }
	      resolve(data.result && data.result.cids);
	    }).catch(function (err) {
	      reject(err);
	    });
	  });
	};

	searchCidByMsg.after(function (context, data) {
	  _actions2.default.renderSearchCid.action({
	    uids: data,
	    type: context.type
	  });
	});

	exports.default = searchCidByMsg;
	module.exports = exports['default'];

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(36);

	var _template2 = _interopRequireDefault(_template);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var renderSearchCid = new _$BaseRoot.Base.ActionCreator(); /**
	                                                            * Created by neitherzhu on 2017/1/20.
	                                                            */

	renderSearchCid.before(function (context, data, container) {
	  if (!container || !this.container) {
	    if (!this.container) {
	      this.container = document.getElementById('J_midContent');
	    }
	    container = this.container;
	  }

	  context.container = container;
	});

	renderSearchCid.doSync = function (context, data) {
	  var html = (0, _$JuicerRoot2.default)(_template2.default.groupList, data);

	  context.container.innerHTML = html;
	};

	exports.default = renderSearchCid;
	module.exports = exports['default'];

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(36);

	var _template2 = _interopRequireDefault(_template);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util,
	    Log = _$BaseRoot.Base.Log; /**
	                                * Created by neitherzhu on 2017/1/20.
	                                */

	var renderSearchMsgTypes = new _$BaseRoot.Base.ActionCreator();

	renderSearchMsgTypes.before(function (context, data, container) {
	  if (!container || !this.container) {
	    if (!this.container) {
	      this.container = document.getElementById('J_leftContent');
	    }
	    container = this.container;
	  }

	  context.container = container;
	});

	renderSearchMsgTypes.doSync = function (context, data) {
	  var html = (0, _$JuicerRoot2.default)(_template2.default.msgTypeList, {
	    uids: data.uids,
	    type: data.type
	  });

	  context.container.innerHTML = html;
	};

	exports.default = renderSearchMsgTypes;
	module.exports = exports['default'];

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _event = __webpack_require__(12);

	var _event2 = _interopRequireDefault(_event);

	var _loading = __webpack_require__(183);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var getVerifyMsg = new _$BaseRoot.Base.ActionCreator(); /**
	                                                         * Created by neitherzhu on 2017/1/22.
	                                                         */

	getVerifyMsg.actionType = 'async';
	getVerifyMsg.count = 20;

	getVerifyMsg.before(function (context, param) {
	    _loading2.default.show(_window2.default.container);
	    param || (param = {});
	    param.btime || (param.btime = '0');
	    param.etime || (param.etime = '-1');
	    param.count || (param.count = this.count + 1);
	    //param.gohistory || (param.gohistory = 1);
	    param.msgid || (param.msgid = '-1');
	    param.msgtime || (param.msgtime = '-1');
	    param.ignoreboundary || (param.ignoreboundary = 1);

	    context.param = param;
	});

	getVerifyMsg.doAsync = function (context, param) {
	    console.log(context, param);
	    return new Promise(function (resolve, reject) {
	        _sdk2.default.getContactVerifyMsg(context.param).then(function (data) {
	            var result = data && data.result;

	            if (result) {
	                var len = result.length;

	                if (len === param.count) {
	                    param.gohistory === 1 ? result.shift() : result.splice(len - 1, 1);
	                }

	                context.hasPage = len >= param.count;
	                context.param = param;
	            }

	            resolve(result);
	        }).catch(function (err) {
	            reject(err);
	        });
	    });
	};

	getVerifyMsg.after(function (context, data) {
	    var param = context.param;
	    var hasPrev = false;
	    var hasNext = false;
	    var hasPage = context.hasPage;

	    // 当使用的searchDBMsg时:
	    // msgtime = 0 gohistory = 0 表示以最早的时间向当前时间的方向取, 即首页
	    // msgtime = -1 gohistory = 1 表示以当前的时间向以前时间的方向取, 即尾页
	    // 如果有消息时间,则1表示以当前消息时间往前取, 0表示以当前时间往后取

	    // 如果是最后一页
	    if (param.msgtime === '-1' && param.gohistory === 1) {
	        hasNext = false;
	        hasPrev = hasPage;
	    }
	    // 如果是第一页
	    else if (param.msgtime === '0' && param.gohistory === 0) {
	            hasPrev = false;
	            hasNext = hasPage;
	        } else {
	            hasPrev = param.gohistory === 1 ? hasPage : param.msgtime !== '-1';
	            hasNext = param.gohistory === 1 ? param.msgtime !== '-1' : hasPage;
	        }

	    _event2.default.emit('PAGE_STATE_CHANGE', {
	        hasPrev: hasPrev,
	        hasNext: hasNext
	    });
	});

	getVerifyMsg.after(function (context, data) {
	    _actions2.default.renderVerifyMsg.action(data);
	});

	getVerifyMsg.error(function () {
	    _loading2.default.hide(_window2.default.container);
	});

	exports.default = getVerifyMsg;
	module.exports = exports['default'];

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _event = __webpack_require__(12);

	var _event2 = _interopRequireDefault(_event);

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
	   * Created by neitherzhu on 2017/1/22.
	   */

	var goContext = new _$BaseRoot.Base.ActionCreator();

	goContext.actionType = 'async';

	goContext.before(function (context, param) {

	  _window2.default.searchMoreOption.search = 0;

	  if (!param || !param.cid) return false;

	  delete param.keywords;
	  param.msgid || (param.msgid = '-1');
	  param.btime || (param.btime = '0');
	  param.etime || (param.etime = '-1');
	  param.msgtime || (param.msgtime = '-1');
	  param.ignoreboundary || (param.ignoreboundary = 1);
	});

	goContext.getPrev = function (context, param) {
	  return new Promise(function (resolve, reject) {
	    _sdk2.default.searchMsg(param).then(function (data) {
	      if (data && data.result && data.result.msgs) {
	        context.prevList = data.result.msgs;
	        context.prevLen = context.prevList.length;
	      }

	      resolve();
	    }).catch(function (e) {
	      resolve(e);
	    });
	  });
	};

	goContext.getNext = function (context, param) {
	  param.ignoreboundary = 0;
	  param.gohistory = 0;

	  return new Promise(function (resolve, reject) {
	    _sdk2.default.searchMsg(param).then(function (data) {
	      if (data && data.result && data.result.msgs) {
	        context.nextList = data.result.msgs;
	        context.nextLen = context.nextList.length;
	      }

	      if (context.prevLen >= 10 && context.nextLen >= 10) {
	        context.hasPrev = true;
	        context.hasNext = true;
	        context.list = [].concat(_toConsumableArray(context.prevList.splice(context.prevLen - 11, 10)), _toConsumableArray(context.nextList.splice(0, 10)));
	      } else if (context.prevLen < 10 && context.nextLen < 10) {
	        context.hasPrev = false;
	        context.hasNext = false;
	        context.list = [].concat(_toConsumableArray(context.prevList), _toConsumableArray(context.nextList));
	      } else {
	        if (context.prevLen < 10) {
	          context.hasPrev = false;
	          context.hasNext = true;
	          context.list = [].concat(_toConsumableArray(context.prevList), _toConsumableArray(context.nextList.splice(0, 20 - context.prevLen)));
	        } else if (context.nextLen < 10) {
	          context.hasPrev = true;
	          context.hasNext = false;
	          var i = context.prevLen - (20 - context.nextLen + 1);
	          context.list = [].concat(_toConsumableArray(context.prevList.splice(i < 0 ? 0 : i, 20 - context.nextLen)), _toConsumableArray(context.nextList));
	        }
	      }

	      context.msgid = param.msgid;

	      resolve();
	    }).catch(function (e) {
	      resolve(e);
	    });
	  });
	};

	goContext.doAsync = function (context, param) {
	  var _this = this;

	  return new Promise(function (resolve, reject) {

	    context.list = [];
	    context.prevList = [];
	    context.prevLen = 0;
	    context.nextList = [];
	    context.nextLen = 0;
	    param.count = 20;
	    param.gohistory = 1;

	    _this.getPrev(context, param).then(function () {
	      _this.getNext(context, param).then(function () {
	        resolve(context.list);
	      });
	    });
	  });
	};

	goContext.after(function (context) {

	  _event2.default.emit('PAGE_STATE_CHANGE', {
	    hasPrev: context.hasPrev,
	    hasNext: context.hasNext
	  });
	});

	goContext.after(function (context, data) {
	  _actions2.default.renderMsg.action(data, context.container);
	  if (context.msgid) {
	    var msg = document.getElementById(context.msgid);

	    if (msg) {
	      setTimeout(function () {
	        msg.scrollIntoView();
	      }, 800);

	      [].concat(_toConsumableArray(_actions2.default.renderMsg.container.querySelectorAll('img'))).forEach(function (img) {
	        img.onload = function () {
	          img.onload = null;
	          setTimeout(function () {
	            msg && msg.scrollIntoView();
	          }, 800);
	        };
	      });
	    }
	  }
	});

	exports.default = goContext;
	module.exports = exports['default'];

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(36);

	var _template2 = _interopRequireDefault(_template);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/24.
	 */
	var Util = _$BaseRoot.Base.Util;

	var renderVerifyMsg = new _$BaseRoot.Base.ActionCreator();

	renderVerifyMsg.before(function (context, data, container) {
	    if (!container || !this.container) {
	        if (!this.container) {
	            this.container = document.getElementById(_constants2.default.EL_ID.MSG_CONTAINER);
	        }
	        container = this.container;
	    }

	    context.container = container;
	});

	renderVerifyMsg.doSync = function (context, data) {

	    var html = '';

	    _window2.default.msgList = [];

	    data && data.forEach(function (msg) {
	        _window2.default.msgList.push(msg);
	        msg.fromid = Util.setCidType(msg.fromid);
	        msg.fromid.subnick = msg.fromid.nick.replace(':', '_');
	        msg.avatar = msg.fromid.portrait;
	        var k = '';
	        if (msg.type == 1) {
	            k = 'ASK_TO_ADD_FRIEND';
	        } else if (msg.type == 2) {
	            k = 'ADDED_FRIEND';
	        }
	        k && (msg.header = (0, _$JuicerRoot2.default)(_constants2.default.I18N[_constants2.default.LANGUAGE][k], {
	            type: msg.fromid.type,
	            display: msg.fromid.display,
	            me: _window2.default.loginID.nick,
	            site: msg.fromid && msg.fromid.appkey && _constants2.default.SITE[msg.fromid.appkey]
	        }));
	        msg.operations = _constants2.default.VerifyBtns[msg.fromid.type][msg.type];

	        html += (0, _$JuicerRoot2.default)(_template2.default.verifyMsg, msg);
	    });

	    if (!html) {
	        html = _template2.default.empty;
	    }
	    context.container.innerHTML = html;
	};

	exports.default = renderVerifyMsg;
	module.exports = exports['default'];

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(36);

	var _template2 = _interopRequireDefault(_template);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/25.
	 */
	var Util = _$BaseRoot.Base.Util;

	var renderVerifyNav = new _$BaseRoot.Base.ActionCreator();

	renderVerifyNav.before(function (context, data, container) {
	  if (!container || !this.container) {
	    if (!this.container) {
	      this.container = document.getElementById('J_leftContent');
	    }
	    container = this.container;
	  }

	  context.container = container;
	});

	renderVerifyNav.doSync = function (context, data) {

	  _window2.default.conversationID = { type: 0 };
	  _window2.default.searchOption = {
	    btime: '0',
	    etime: '-1',
	    gohistory: 1
	  };

	  var html = (0, _$JuicerRoot2.default)(_template2.default.msgTypeList, {
	    uids: [{
	      display: 'Добавить заявку',
	      portrait: 'images/verify-avatar.png'
	    }],
	    cls: 'J_verifyMsgItem',
	    type: 0
	  });

	  context.container.innerHTML = html;
	};

	renderVerifyNav.after(function (context, data) {
	  this.container.querySelector('.J_verifyMsgItem').click();
	});

	exports.default = renderVerifyNav;
	module.exports = exports['default'];

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var getSystemMsgTypeList = new _$BaseRoot.Base.ActionCreator(); /**
	                                                                 * Created by neitherzhu on 2017/3/26.
	                                                                 */

	getSystemMsgTypeList.actionType = 'async';

	getSystemMsgTypeList.doAsync = function (context) {

	  return _sdk2.default.getSystemMsgTypeList();
	};

	getSystemMsgTypeList.after(function (context, data) {
	  _actions2.default.renderSystemMsgTypeList.action(data);
	});

	exports.default = getSystemMsgTypeList;
	module.exports = exports['default'];

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(36);

	var _template2 = _interopRequireDefault(_template);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util,
	    Log = _$BaseRoot.Base.Log; /**
	                                * Created by neitherzhu on 2017/3/26.
	                                */

	var renderSystemMsgTypeList = new _$BaseRoot.Base.ActionCreator();

	renderSystemMsgTypeList.before(function (context, typeList) {
	  if (!typeList || !typeList.length) return false;

	  var data = {
	    uids: [],
	    cls: 'J_contextmenuTrigger J_systemMsgTypeItem'
	  };

	  typeList.forEach(function (t) {
	    data.uids.push({
	      display: t,
	      type: t
	    });
	  });

	  context.data = data;
	});

	renderSystemMsgTypeList.before(function (context, typeList, container) {
	  if (!container || !this.container) {
	    if (!this.container) {
	      this.container = document.getElementById('J_leftContent');
	    }
	    container = this.container;
	  }

	  context.container = container;
	});

	renderSystemMsgTypeList.doSync = function (context) {
	  var html = (0, _$JuicerRoot2.default)(_template2.default.msgTypeList, context.data);

	  context.container.innerHTML = html;
	};

	renderSystemMsgTypeList.after(function () {
	  this.container.querySelector('.J_systemMsgTypeItem').click();
	});

	exports.default = renderSystemMsgTypeList;
	module.exports = exports['default'];

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(56);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	var _event = __webpack_require__(12);

	var _event2 = _interopRequireDefault(_event);

	var _loading = __webpack_require__(183);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var getSystemMsgList = new _$BaseRoot.Base.ActionCreator(); /**
	                                                             * Created by neitherzhu on 2017/3/26.
	                                                             */

	getSystemMsgList.actionType = 'async';
	getSystemMsgList.count = 20;

	getSystemMsgList.before(function (context, param) {
	    var _this = this;

	    _loading2.default.show(_window2.default.container);
	    return new Promise(function (resolve) {
	        !param.countperpage && (param.countperpage = _this.count);

	        if (typeof param.type_name === 'undefined') {
	            param.type_name = _this.name || '';
	        }

	        if (param.type_name == 'Все') {
	            param.type_name = '';
	        }

	        _sdk2.default.getSystemMsgTotalPage({
	            type_name: param.type_name,
	            countperpage: param.countperpage
	        }).then(function (data) {
	            !param.pageindex && (param.pageindex = data && data.pages || 1);
	            param.total = data && data.pages || 1;
	            resolve();
	        }).catch(function (err) {
	            !param.pageindex && (param.pageindex = data && data.pages || 1);
	            param.total = data && data.pages || 1;
	            resolve();
	        });
	    });
	});

	getSystemMsgList.doAsync = function (context, param) {
	    this.current = param.pageindex;
	    this.total = param.total;
	    this.name = param.type_name;
	    context.param = param;
	    _window2.default.conversationID = { type: _constants2.default.TYPE.SYSTEM, appkey: 'system', nick: this.name };

	    return _sdk2.default.getSystemMsgList(param);
	};

	getSystemMsgList.after(function (context, data) {
	    if (this.current && this.total) {
	        var hasPrev = false;
	        var hasNext = false;
	        if (this.total > 1) {
	            hasPrev = this.current > 1;
	            hasNext = this.current < this.total;
	        }
	        _event2.default.emit('PAGE_STATE_CHANGE', {
	            hasPrev: hasPrev,
	            hasNext: hasNext
	        });
	    }
	});

	getSystemMsgList.after(function (context, data) {
	    _actions2.default.renderSystemMsg.action(data, null, context.param.pageTurn || 1);
	});

	getSystemMsgList.error(function () {
	    _loading2.default.hide(_window2.default.container);
	});

	exports.default = getSystemMsgList;
	module.exports = exports['default'];

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _template = __webpack_require__(36);

	var _template2 = _interopRequireDefault(_template);

	var _window = __webpack_require__(55);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(7);

	var _actions2 = _interopRequireDefault(_actions);

	var _constants = __webpack_require__(27);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/3/27.
	 */
	var Util = _$BaseRoot.Base.Util,
	    Log = _$BaseRoot.Base.Log;

	var URL_REG = /^https?:\/\/([\da-z\.-]+)\.([a-z\.]{2,6})(\:\d{2,4})?\S*$/;
	var HTML_STR_REG = /<script|<link|<style/i;
	var renderSystemMsg = new _$BaseRoot.Base.ActionCreator();

	renderSystemMsg.before(function (context, data, container, pageTurn) {
	    if (!container || !this.container) {
	        if (!this.container) {
	            this.container = document.getElementById(_constants2.default.EL_ID.MSG_CONTAINER);
	        }
	        container = this.container;
	    }

	    context.container = container;
	});

	renderSystemMsg.doSync = function (context, data) {
	    _window2.default.msgList = data || [];
	    var date = void 0;
	    var html = '';
	    var cacheDate = '';
	    var shadowFrameObj = [];

	    data.forEach(function (msg) {
	        msg.time = msg.msgtime * 1000;
	        date = new Date(parseInt(msg.time, 10)).__getOnlyDate();
	        if (date !== cacheDate) {
	            if (cacheDate) {
	                html += '</div>';
	            }
	            cacheDate = date;
	            html += (0, _$JuicerRoot2.default)(_template2.default.dateSplit, { date: date });

	            html += '<div class="date-split-container">';
	        }

	        if (URL_REG.test(msg.msghtml)) {
	            msg.msghtml = '<iframe src="' + msg.msghtml + '" class="custom-frame" frameBorder="0" sandbox="allow-popups allow-same-origin allow-forms allow-scripts"></iframe>';
	        } else if (HTML_STR_REG.test(msg.msghtml)) {
	            shadowFrameObj.push({
	                id: msg.msgid,
	                html: msg.msghtml
	            });
	            msg.msghtml = '<div id="J_shadowFrame_' + msg.msgid + '"></div>';
	        }

	        html += (0, _$JuicerRoot2.default)(_template2.default.systemMsg, msg);
	    });

	    if (!html) {
	        html = _template2.default.empty;
	    }

	    context.container.innerHTML = html;

	    shadowFrameObj.forEach(function (o) {
	        shadowFrame(o.id, o.html);
	    });
	};

	renderSystemMsg.after(function (context, data, container, pageTurn) {
	    if (pageTurn) {
	        Util.scrollToBottom(context.container);
	    }
	});

	function shadowFrame(id, html) {
	    var frame = document.createElement('iframe');
	    frame.frameBorder = 0;
	    frame.sandbox = 'allow-popups allow-same-origin allow-forms allow-scripts';
	    frame.className = 'custom-frame';

	    var msgWrap = document.getElementById('J_shadowFrame_' + id);
	    if (!msgWrap) return;

	    msgWrap.appendChild(frame);
	    frame.contentDocument.documentElement.innerHTML = html;
	    frame.contentDocument.documentElement.style.background = 'transparent';
	    frame.contentDocument.body.style.overflow = 'hidden';
	    frame.contentDocument.body.style.fontFamily = '\'Arial\',\'Microsoft Yahei\',Helvetica,sans-serif';
	    frame.contentDocument.body.style.background = 'transparent';
	    frame.contentDocument.body.style.fontSize = '12px';

	    setTimeout(function () {
	        frame.style.height = frame.contentDocument.documentElement.offsetHeight + 'px';
	    });
	    window.addEventListener('resize', function () {
	        frame && (frame.style.height = frame.contentDocument.body.offsetHeight + 'px');
	    });
	}

	exports.default = renderSystemMsg;
	module.exports = exports['default'];

/***/ },
/* 222 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$IMSDKRoot = __webpack_require__(2);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$MessageManagerRoot = __webpack_require__(6);

	var _$MessageManagerRoot2 = _interopRequireDefault(_$MessageManagerRoot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by neitherzhu on 2017/3/28.
	 */
	var Action = _$MessageManagerRoot2.default.Action;


	Action.bindEvents.before(function () {

	    _$IMSDKRoot2.default.on('OnWebInvoked', function (data) {
	        if (data.actiontype === 132) {
	            var systemNav = document.querySelector('.J_navItem[data-action=getSystemMsgTypeList]');

	            systemNav && systemNav.click();
	        }
	    });
	});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(225);

	__webpack_require__(226);

	__webpack_require__(230);

	exports.default = Plugin; // import Plugin from './createPlugin';

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * ----------------------------------
	                                                                                                                                                                                                                                                                   * @file:   换肤插件
	                                                                                                                                                                                                                                                                   * @author: Pluto <huazhi.chz@alibaba-inc.com>
	                                                                                                                                                                                                                                                                   * @create: 2017/02/15
	                                                                                                                                                                                                                                                                   * ----------------------------------
	                                                                                                                                                                                                                                                                   */

	var _$IMSDKRoot = __webpack_require__(2);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$MessageManagerRoot = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_$MessageManagerRoot.Plugin.addPlugin('theme', {
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
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$VueRoot = __webpack_require__(227);

	var _$VueRoot2 = _interopRequireDefault(_$VueRoot);

	var _$IMSDKRoot = __webpack_require__(2);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$MessageManagerRoot = __webpack_require__(6);

	var _index = __webpack_require__(228);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(229);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ncPlugin = {
	    template: _index2.default,

	    data: function data() {
	        return {
	            windowState: 'normal' // normal 窗口化, max 最大化
	        };
	    },
	    created: function created() {
	        this.bindEvents();
	        this.updateDragArea(true);
	    },
	    destroyed: function destroyed() {
	        window.removeEventListener('resize', this.updateDragArea);
	    },


	    methods: {
	        /**
	         * 更新拖拽区域
	         */
	        updateDragArea: function updateDragArea(isInit) {
	            clearTimeout(this.resizeTimmer);
	            this.resizeTimmer = setTimeout(function () {
	                _$IMSDKRoot2.default.invoke('webpipe.SetWebDragArea', {
	                    strWebName: 'WebName_HistoryMsg',
	                    componentid: '',
	                    mapAreas: {
	                        header: [{ x: 0, y: 0, h: 30, w: window.innerWidth - 80 }]
	                    }
	                });
	            }, isInit ? 0 : 200);
	        },
	        handleFnClick: function handleFnClick(type) {
	            if (type === 'toggle') {
	                type = this.windowState === 'normal' ? 'maxmize' : 'restore';
	            }
	            try {
	                window.workbench.hostWindow[type]();
	                if (type === 'restore') this.windowState = 'normal';
	                if (type === 'maxmize') this.windowState = 'max';
	            } catch (e) {
	                console.warn('[ERROR]no method ' + type);
	            }
	        },
	        bindEvents: function bindEvents() {
	            window.addEventListener('resize', this.updateDragArea);
	        }
	    }
	}; /**
	    * ----------------------------------
	    * @file:   nc区域
	    * @author: Pluto <huazhi.chz@alibaba-inc.com>
	    * @create: 2017/02/28
	    * ----------------------------------
	    * iconfont地址：http://iconfont.cn/plus/manage/index?manage_type=myprojects&projectId=242661
	    */

	_$MessageManagerRoot.Plugin.addPlugin('ncPlugin', {
	    init: function init() {
	        new _$VueRoot2.default({
	            el: '#J_ncWrap',
	            components: {
	                'nc-plugin': ncPlugin
	            }
	        });
	    }
	});

/***/ },
/* 227 */,
/* 228 */
/***/ function(module, exports) {

	module.exports = "<div class=\"nc-container\">\n  <div class=\"nc-left\" @dblclick.prevent=\"handleFnClick('toggle')\">\n    <s class=\"icon-wangwang\"></s> Менеджер сообщений\n  </div>\n  <div class=\"nc-right\">\n    <a href=\"\" class=\"fn-btn\" @click.prevent=\"handleFnClick('minimize')\" title=\"минимизировать\"><i class=\"nc-iconfont ncicon-minus\"></i></a>\n    <a href=\"\" v-if=\"windowState === 'normal'\" class=\"fn-btn\" @click.prevent=\"handleFnClick('maxmize')\" title=\"максимизировать\"><i class=\"nc-iconfont ncicon-maxmize\"></i></a>\n    <a href=\"\" v-if=\"windowState === 'max'\" class=\"fn-btn\" @click.prevent=\"handleFnClick('restore')\" title=\"Восстановить\"><i class=\"nc-iconfont ncicon-restore\"></i></a>\n    <a href=\"\" class=\"fn-btn\" @click.prevent=\"handleFnClick('close')\" title=\"неисправность\"><i class=\"nc-iconfont ncicon-close\"></i></a>\n  </div>\n</div>\n";

/***/ },
/* 229 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$ChatRoot = __webpack_require__(231);

	var _$ChatRoot2 = _interopRequireDefault(_$ChatRoot);

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	__webpack_require__(295);

	var _index = __webpack_require__(296);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Plugin = _$ChatRoot2.default.Plugin; /**
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
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$BaseRoot2 = _interopRequireDefault(_$BaseRoot);

	var _actions = __webpack_require__(232);

	var _actions2 = _interopRequireDefault(_actions);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _template = __webpack_require__(247);

	var _template2 = _interopRequireDefault(_template);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _plugins = __webpack_require__(260);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _convert = __webpack_require__(276);

	var _convert2 = _interopRequireDefault(_convert);

	var _event = __webpack_require__(255);

	var _event2 = _interopRequireDefault(_event);

	var _coms = __webpack_require__(293);

	var _coms2 = _interopRequireDefault(_coms);

	__webpack_require__(294);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	//window.addEventListener('DOMContentLoaded', function() {
	//  Win.container = document.getElementById(Constant.EL_ID.CONTAINER);
	//  Action.start.action();
	//});

	var c = {
	  Action: _actions2.default,
	  SDK: _sdk2.default,
	  Template: _template2.default,
	  Win: _window2.default,
	  Plugin: _plugins2.default,
	  Convert: _convert2.default,
	  Event: _event2.default,
	  Constant: _constants2.default,
	  Coms: _coms2.default
	};

	_$BaseRoot2.default.Chat = c;

	exports.default = c;
	module.exports = exports['default'];

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getCurrentLoginID = __webpack_require__(233);

	var _getCurrentLoginID2 = _interopRequireDefault(_getCurrentLoginID);

	var _getCurrentConversationID = __webpack_require__(245);

	var _getCurrentConversationID2 = _interopRequireDefault(_getCurrentConversationID);

	var _bindEvents = __webpack_require__(254);

	var _bindEvents2 = _interopRequireDefault(_bindEvents);

	var _conversationChange = __webpack_require__(259);

	var _conversationChange2 = _interopRequireDefault(_conversationChange);

	var _getMsg = __webpack_require__(274);

	var _getMsg2 = _interopRequireDefault(_getMsg);

	var _getOfflineMsg = __webpack_require__(277);

	var _getOfflineMsg2 = _interopRequireDefault(_getOfflineMsg);

	var _getNewMsg = __webpack_require__(278);

	var _getNewMsg2 = _interopRequireDefault(_getNewMsg);

	var _getLocalHistoryMsg = __webpack_require__(279);

	var _getLocalHistoryMsg2 = _interopRequireDefault(_getLocalHistoryMsg);

	var _getRemoteHistoryMsg = __webpack_require__(280);

	var _getRemoteHistoryMsg2 = _interopRequireDefault(_getRemoteHistoryMsg);

	var _receiveMsg = __webpack_require__(281);

	var _receiveMsg2 = _interopRequireDefault(_receiveMsg);

	var _getSentMsg = __webpack_require__(282);

	var _getSentMsg2 = _interopRequireDefault(_getSentMsg);

	var _conversationClose = __webpack_require__(283);

	var _conversationClose2 = _interopRequireDefault(_conversationClose);

	var _netDisconnect = __webpack_require__(284);

	var _netDisconnect2 = _interopRequireDefault(_netDisconnect);

	var _netReconnect = __webpack_require__(285);

	var _netReconnect2 = _interopRequireDefault(_netReconnect);

	var _cacheEvent = __webpack_require__(286);

	var _cacheEvent2 = _interopRequireDefault(_cacheEvent);

	var _enteringStatusChange = __webpack_require__(287);

	var _enteringStatusChange2 = _interopRequireDefault(_enteringStatusChange);

	var _sendMsgStatusChange = __webpack_require__(288);

	var _sendMsgStatusChange2 = _interopRequireDefault(_sendMsgStatusChange);

	var _fireCacheEvent = __webpack_require__(289);

	var _fireCacheEvent2 = _interopRequireDefault(_fireCacheEvent);

	var _getMoreHistoryMsg = __webpack_require__(290);

	var _getMoreHistoryMsg2 = _interopRequireDefault(_getMoreHistoryMsg);

	var _start = __webpack_require__(291);

	var _start2 = _interopRequireDefault(_start);

	var _msgRecall = __webpack_require__(292);

	var _msgRecall2 = _interopRequireDefault(_msgRecall);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	  getCurrentLoginID: _getCurrentLoginID2.default,
	  getCurrentConversationID: _getCurrentConversationID2.default,
	  bindEvents: _bindEvents2.default,
	  conversationChange: _conversationChange2.default,
	  getMsg: _getMsg2.default,
	  getOfflineMsg: _getOfflineMsg2.default,
	  getNewMsg: _getNewMsg2.default,
	  getLocalHistoryMsg: _getLocalHistoryMsg2.default,
	  getRemoteHistoryMsg: _getRemoteHistoryMsg2.default,
	  receiveMsg: _receiveMsg2.default,
	  getSentMsg: _getSentMsg2.default,
	  conversationClose: _conversationClose2.default,
	  netDisconnect: _netDisconnect2.default,
	  netReconnect: _netReconnect2.default,
	  enteringStatusChange: _enteringStatusChange2.default,
	  sendMsgStatusChange: _sendMsgStatusChange2.default,
	  fireCacheEvent: _fireCacheEvent2.default,
	  cacheEvent: _cacheEvent2.default,
	  getMoreHistoryMsg: _getMoreHistoryMsg2.default,
	  start: _start2.default,
	  msgRecall: _msgRecall2.default
	}; /**
	    * Created by neitherzhu on 2016/12/5.
	    */

	module.exports = exports['default'];

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$ConvertRoot = __webpack_require__(234);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _index = __webpack_require__(232);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var getCurrentLoginID = new _$BaseRoot.Base.ActionCreator(); /**
	                                                              * Created by neitherzhu on 2016/12/5.
	                                                              * 获取当前登录的用户
	                                                              */

	getCurrentLoginID.actionType = 'async';
	getCurrentLoginID.doAsync = function () {
	  return _sdk2.default.getCurrentLoginID();
	};

	getCurrentLoginID.after(function (context, data) {
	  _window2.default.loginID = data;
	}).after(function (context, data) {
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
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(61);

	var _constants2 = _interopRequireDefault(_constants);

	var _sdk = __webpack_require__(64);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _template = __webpack_require__(66);

	var _template2 = _interopRequireDefault(_template);

	var _convert = __webpack_require__(84);

	var _convert2 = _interopRequireDefault(_convert);

	var _callbacks = __webpack_require__(85);

	var _callbacks2 = _interopRequireDefault(_callbacks);

	var _normalMsgFormater = __webpack_require__(86);

	var _normalMsgFormater2 = _interopRequireDefault(_normalMsgFormater);

	var _systemMsgFormater = __webpack_require__(111);

	var _systemMsgFormater2 = _interopRequireDefault(_systemMsgFormater);

	var _window = __webpack_require__(65);

	var _window2 = _interopRequireDefault(_window);

	var _actions = __webpack_require__(128);

	var _actions2 = _interopRequireDefault(_actions);

	var _plugins = __webpack_require__(148);

	var _plugins2 = _interopRequireDefault(_plugins);

	__webpack_require__(170);

	__webpack_require__(181);

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
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$IMSDKRoot = __webpack_require__(2);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var NativeInvoke = _$IMSDKRoot2.default.invoke;
	var Util = _$BaseRoot.Base.Util,
	    Log = _$BaseRoot.Base.Log;

	var SDK = _constants2.default.SDK;
	var Other = _constants2.default.Other;
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
	      _$IMSDKRoot2.default.invoke(SDK.GET_CURRENT_LOGIN_ID, param).then(function (data) {
	        resolve(data.result);
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  },

	  /**
	   * 获取当前聊天的对象ID
	   * @param param
	   * @returns {Promise}
	   */
	  getCurrentConversationID: function getCurrentConversationID(param) {

	    //let search = location.search.substring(1);
	    //const p = JSON.parse(Util.getParam(search).param || '');

	    return new Promise(function (resolve, reject) {
	      //p.cid && ((p.cid.appkey && p.cid.nick) || p.tribeid) ?
	      //  resolve(p.cid) :
	      _$IMSDKRoot2.default.invoke(SDK.GET_CURRENT_CONVERSATION_ID, param).then(function (data) {
	        resolve(data.result);
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  },

	  /**
	   * 获取离线消息
	   * @param param
	   * @returns {Promise}
	   */
	  getOfflineMsg: function getOfflineMsg(param) {
	    return new Promise(function (resolve, reject) {
	      _$IMSDKRoot2.default.invoke(Other.SDK_PREFIX_MAP[_window2.default.conversationID.type] + SDK.GET_OFFLINE_MSG_SUFFIX, param).then(function (data) {
	        resolve(data.result);
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  },

	  /**
	   * 获取在线未读消息
	   * @param param
	   * @returns {Promise}
	   */
	  getNewMsg: function getNewMsg(param) {
	    return new Promise(function (resolve, reject) {
	      _$IMSDKRoot2.default.invoke(Other.SDK_PREFIX_MAP[_window2.default.conversationID.type] + SDK.GET_NEW_MSG_SUFFIX, param).then(function (data) {
	        resolve(data.result);
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  },

	  /**
	   * 获取本地历史消息
	   * @param param
	   * @returns {Promise}
	   */
	  getLocalHistoryMsg: function getLocalHistoryMsg(param) {
	    return new Promise(function (resolve, reject) {
	      _$IMSDKRoot2.default.invoke(Other.SDK_PREFIX_MAP[_window2.default.conversationID.type] + SDK.GET_LOCAL_HISTORY_MSG_SUFFIX, param).then(function (data) {
	        resolve(data.result);
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  },

	  /**
	   * 获取漫游历史消息
	   * @param param
	   * @returns {Promise}
	   */
	  getRemoteHistoryMsg: function getRemoteHistoryMsg(param) {
	    return new Promise(function (resolve, reject) {
	      _$IMSDKRoot2.default.invoke(Other.SDK_PREFIX_MAP[_window2.default.conversationID.type] + SDK.GET_REMOTE_HISTORY_MSG_SUFFIX, param).then(function (data) {
	        resolve(data.result);
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  },

	  /**
	   * 停止接收自动回复消息
	   * @param param
	   */
	  stopAutoReply: function stopAutoReply(param) {
	    _$IMSDKRoot2.default.invoke(SDK.STOP_AUTO_REPLY, param);
	  },

	  /**
	   * 重发消息
	   * @param param
	   */
	  resendMsg: function resendMsg(param) {
	    _$IMSDKRoot2.default.invoke(Other.SDK_PREFIX_MAP[_window2.default.conversationID.type] + SDK.RESEND_MSG_SUFFIX, param);
	  },

	  /**
	   * 撤回消息
	   * @param param
	   */
	  recallMsg: function recallMsg(param) {
	    _$IMSDKRoot2.default.invoke(Other.SDK_PREFIX_MAP[_window2.default.conversationID.type] + SDK.RECALL_MSG_SUFFIX, param);
	  },

	  /**
	   * 获取服务器时间
	   */
	  getServerTime: function getServerTime() {
	    return _$IMSDKRoot2.default.invoke(SDK.GET_SERVER_TIME);
	  },

	  /**
	   * 停止播放语音
	   */
	  stopAudio: function stopAudio() {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.STOP_AUDIO_PLAYER);
	  },
	  copy: function copy(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.COPY, param);
	  },

	  /**
	   * 转发消息
	   * @param param
	   */
	  forwardMsg: function forwardMsg(param) {
	    _$IMSDKRoot2.default.invoke(_constants2.default.SDK.MSG_FORWARD, param);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _event = __webpack_require__(237);

	var _event2 = _interopRequireDefault(_event);

	var _sdk = __webpack_require__(238);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _cls = __webpack_require__(239);

	var _cls2 = _interopRequireDefault(_cls);

	var _elid = __webpack_require__(240);

	var _elid2 = _interopRequireDefault(_elid);

	var _i18n = __webpack_require__(241);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _language = __webpack_require__(242);

	var _language2 = _interopRequireDefault(_language);

	var _bubbleMenu = __webpack_require__(243);

	var _bubbleMenu2 = _interopRequireDefault(_bubbleMenu);

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
	  LANGUAGE: _language2.default,
	  Event: _event2.default,
	  SDK: _sdk2.default,
	  CLS: _cls2.default,
	  EL_ID: _elid2.default,
	  I18N: _i18n2.default,
	  Other: {
	    TYPE: TYPE,
	    fetchMsgCount: 20,
	    SDK_PREFIX_MAP: {
	      1: _sdk2.default.SINGLE_SDK_PREFIX,
	      2: _sdk2.default.TRIBE_SDK_PREFIX,
	      3: _sdk2.default.TRIBE_SDK_PREFIX
	    }
	  },
	  RECALL_LIMIT: 120000,
	  BUBBLE_MENU: _bubbleMenu2.default,
	  SCROLL_DELAY: 300
	};
	module.exports = exports['default'];

/***/ },
/* 237 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 事件列表
	 */
	exports.default = {
	  // 一些事件的前缀
	  CONVERSATION_PREFIX: 'im.uiutil.',
	  // 新增聊天对象 一般与CONVERSATION_PREFIX合并起来组成一个完整的事件
	  CONVERSATION_ADD_SUFFIX: 'onConversationAdd',
	  // 聊天对象变更  一般与CONVERSATION_PREFIX合并起来组成一个完整的事件
	  CONVERSATION_CHANGE_SUFFIX: 'onConversationChange',
	  // 聊天对象关闭  一般与CONVERSATION_PREFIX合并起来组成一个完整的事件
	  CONVERSATION_CLOSE_SUFFIX: 'onConversationClose',
	  // 断网
	  NET_DISCONNECT: 'im.login.onNetDisConnect',
	  // 网络重连
	  NET_RECONNECT: 'im.login.onNetReConnectOK',
	  // 收到单聊消息
	  CHAT_RECEIVE_MSG: 'im.singlemsg.onReceiveNewMsg',
	  // 发送单聊消息
	  CHAT_SEND_MSG: 'im.singlemsg.onSendNewMsg',
	  // 发送的单聊消息状态变更
	  CHAT_SEND_MSG_STATUS_CHANGE: 'im.singlemsg.onSendMsgStatus',
	  // 收到群聊/讨论组消息
	  TRIBE_RECEIVE_MSG: 'im.tribemsg.onReceiveNewMsg',
	  // 发送群聊/讨论组消息
	  TRIBE_SEND_MSG: 'im.tribemsg.onSendNewMsg',
	  // 群/讨论组@消息已读未读状态变更
	  TRIBE_AT_MSG_READ: 'im.tribemsg.onTribeAtMsgReaded',
	  // 发送的群聊/讨论组消息状态变更
	  TRIBE_SEND_MSG_STATUS_CHANGE: 'im.tribemsg.onSendMsgStatus',
	  // 输入状态变更
	  INPUT_STATUS_CHANGE: 'im.singlemsg.onPeerInputNotify',
	  // 单聊消息撤回事件
	  CHAT_MSG_RECALLED: 'im.singlemsg.onMsgWithdrawNty',
	  // 群聊/讨论组消息撤回事件
	  TRIBE_MSG_RECALLED: 'im.tribemsg.onMsgWithdrawNty',

	  // 一些自定义事件
	  // 开始变更聊天对象
	  CONVERSATION_CHANGE_START: 'conversationChangeStart',
	  // 聊天对象变更结束
	  CONVERSATION_CHANGE_OVER: 'conversationChangeOver',
	  // 单聊消息状态变更
	  MSG_STATUS_CHANGE: 'msgStatusChange',
	  // 网络错误
	  NET_ERROR: 'netError',
	  // 发送消息状态变更
	  SEND_MSG_STATUS_CHANGE: 'sendMsgStatusChange'
	};
	module.exports = exports['default'];

/***/ },
/* 238 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2016/12/6.
	 * SDK接口列表
	 */
	exports.default = {

	  // 单聊消息相关接口的前缀
	  SINGLE_SDK_PREFIX: 'im.singlemsg.',
	  // 群聊/讨论组相关接口的前缀
	  TRIBE_SDK_PREFIX: 'im.tribemsg.',
	  // 获取离线消息, 一般与单聊/群聊/讨论组相关接口的前缀一起组成完整接口名称使用
	  GET_OFFLINE_MSG_SUFFIX: 'GetOfflineMsg',
	  // 获取实时收到的消息, 一般与单聊/群聊/讨论组相关接口的前缀一起组成完整接口名称使用
	  GET_NEW_MSG_SUFFIX: 'GetNewMsg',
	  // 获取本地DB的历史消息, 一般与单聊/群聊/讨论组相关接口的前缀一起组成完整接口名称使用
	  GET_LOCAL_HISTORY_MSG_SUFFIX: 'GetLocalHisMsg',
	  // 获取服务端漫游的历史消息, 一般与单聊/群聊/讨论组相关接口的前缀一起组成完整接口名称使用
	  GET_REMOTE_HISTORY_MSG_SUFFIX: 'GetRemoteHisMsg',
	  // 消息重发, 一般与单聊/群聊/讨论组相关接口的前缀一起组成完整接口名称使用
	  RESEND_MSG_SUFFIX: 'FastReSendChatMsg',
	  // 获取当前登录用户
	  GET_CURRENT_LOGIN_ID: 'im.login.GetCurrentLoginID',
	  // 获取当前聊天对象
	  GET_CURRENT_CONVERSATION_ID: 'im.uiutil.GetCurrentConversationID',
	  // 停止接收自动回复消息
	  STOP_AUTO_REPLY: 'im.singlemsg.ShieldAutoReply',
	  // 消息撤回
	  RECALL_MSG_SUFFIX: 'DoChatMsgWithdraw',
	  // 获取服务器时间
	  GET_SERVER_TIME: 'im.bizutil.GetIMSvrTime',
	  // 停止播放语音
	  STOP_AUDIO_PLAYER: 'im.bizutil.StopAudio',
	  // 复制
	  COPY: 'im.bizutil.CopyToClipboard',
	  // 转发
	  MSG_FORWARD: 'im.bizutil.ForwardChatMsg'
	};
	module.exports = exports['default'];

/***/ },
/* 239 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2016/12/6.
	 * class列表
	 */
	exports.default = {
	  // 跟样式相关的一些class
	  // 隐藏元素class { display: none!important; }
	  HIDDEN: 'hidden',
	  // 语音正在播放中class
	  AUDIO_PLAYING: 'imui-msg-audio-playing',
	  // 消息状态容器 发送中/接收中/发送错误/已读未读人数
	  MSG_STATUS_CONTAINER: 'imui-msg-status',
	  // 群@消息
	  AT_MSG_WITH_STYLE: 'imui-msg-atmsg',
	  // 全部已读的群@消息样式
	  COMPLETED_AT_MSG: 'at-msg-done',
	  // 消息容器的外层容器
	  MSG_WRAPER: 'msg-outer-body',

	  // 跟一些操作相关的class, 一般用来绑定事件等
	  // 单聊消息容器上
	  MSG_CONTAINER: 'J_msg',
	  // 语音消息
	  AUDIO: 'J_audio',
	  // 群@消息
	  AT_MSG: 'J_atMsg',
	  // 消息重发
	  RESEND_BTN: 'J_resend',
	  // 停止接收自动回复
	  STOP_AUTO_REPLY: 'J_stopAutoReply',
	  // 消息区域非自己发送的菜单触发按钮
	  BUBBLE_MENU_TRIGGER: 'J_bubbleMenuTrigger',
	  // 消息区域自己发送的菜单触发按钮
	  SELF_BUBBLE_MENU_TRIGGER: 'J_selfBubbleMenuTrigger',
	  // 消息撤回菜单
	  MSG_RECALL: 'J_recallMsg',
	  // 消息复制菜单
	  BUBBLE_COPY: 'J_bubbleCopy',

	  MSG_FORWARD: 'J_forwardMsg'
	};
	module.exports = exports['default'];

/***/ },
/* 240 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2016/12/6.
	 * DOM元素ID列表
	 */
	exports.default = {
	  // 消息容器id
	  CONTAINER: 'J_msgWrap',
	  // 输入中状态容器id
	  ENTERING: 'J_entering'
	};
	module.exports = exports['default'];

/***/ },
/* 241 */
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
	    AT_MSG_READ: 'Прочитал',
	    AT_MSG_UNREAD: 'непрочитанный',
	    NEW_MSG_TIP: 'Новые новости',
	    RECALL_MSG_FAIL: 'Не удалось отозвать сообщение',
	    COPY: 'копировать',
	    RECALL: 'отзывать',
	    FORWARD: 'Вперед'
	  },

	  EN: {}
	};
	module.exports = exports['default'];

/***/ },
/* 242 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2017/3/3.
	 */
	exports.default = 'CN';
	module.exports = exports['default'];

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cls = __webpack_require__(239);

	var _cls2 = _interopRequireDefault(_cls);

	var _i18n = __webpack_require__(241);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _language = __webpack_require__(242);

	var _language2 = _interopRequireDefault(_language);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	  DEFAULT: [{
	    cls: _cls2.default.BUBBLE_COPY,
	    text: _i18n2.default[_language2.default].COPY
	  }],

	  CUSTOM: {
	    canRecall: {
	      cls: _cls2.default.MSG_RECALL,
	      text: _i18n2.default[_language2.default].RECALL
	    },

	    canForward: {
	      cls: _cls2.default.MSG_FORWARD,
	      text: _i18n2.default[_language2.default].FORWARD
	    }
	  }
	}; /**
	    * Created by neitherzhu on 2017/3/3.
	    */

	module.exports = exports['default'];

/***/ },
/* 244 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 缓存窗口的一些信息
	 */
	exports.default = {
	  conversationID: null,
	  loginID: null,
	  container: null,
	  // 聊天窗口滚动条是否在最底部
	  isBottom: true
	};
	module.exports = exports["default"];

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _index = __webpack_require__(232);

	var _index2 = _interopRequireDefault(_index);

	var _template = __webpack_require__(247);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/5.
	 * 获取当前聊天的对象
	 */
	var getCurrentConversationID = new _$BaseRoot.Base.ActionCreator();

	getCurrentConversationID.actionType = 'async';
	getCurrentConversationID.doAsync = function () {
	  return _sdk2.default.getCurrentConversationID();
	};

	getCurrentConversationID.after(function (context, data) {
	  var spliter = void 0;
	  var defaultParam = _util2.default.getParam(location.search.substring(1));
	  if (defaultParam && defaultParam.param) {
	    var param = JSON.parse(defaultParam.param);
	    var LAST_TIME = param.readmsgtime;
	    var id = _util2.default.guid();
	    if (LAST_TIME) {
	      spliter = {
	        msgid: id,
	        msgtime: LAST_TIME,
	        html: (0, _$JuicerRoot2.default)(_template2.default.historySplit, { id: id })
	      };
	    }
	  }
	  _index2.default.conversationChange.action(data, spliter);
	});

	getCurrentConversationID.error = function (err) {
	  console.error('Action getCurrentConversationID Error', err);
	};

	exports.default = getCurrentConversationID;
	module.exports = exports['default'];

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

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
	   * 增加Util工具函数
	   */

	var Util = _$BaseRoot.Base.Util;
	/**
	 * 滚动到某条消息
	 * @param els
	 * @param msgId
	 */
	Util.scrollToMsg = function (els, msgId) {
	  if (els && els.length) {
	    var t = void 0;
	    els.forEach(function (el) {
	      if (!el.querySelectorAll) return;
	      [].concat(_toConsumableArray(el.querySelectorAll('img'))).forEach(function (img) {
	        img.onload = function () {
	          this.onload = null;
	          clearTimeout(t);
	          // 设置图片高度, 防止切换回来的时候图片跳动
	          //this.height = this.height;

	          t = setTimeout(function () {
	            document.getElementById(msgId).scrollIntoView();
	          }, 300);
	        };
	      });

	      [].concat(_toConsumableArray(el.querySelectorAll('video'))).forEach(function (video) {
	        video.oncanplay = function () {
	          this.oncanplay = null;
	          clearTimeout(t);
	          // 设置视频高度,防止切换回来的时候视频位置跳动
	          this.height = this.clientHeight;

	          t = setTimeout(function () {
	            document.getElementById(msgId).scrollIntoView();
	          }, 300);
	        };
	      });
	    });
	  }

	  document.getElementById(msgId).scrollIntoView();
	};

	exports.default = Util;
	module.exports = exports['default'];

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _errorStatus = __webpack_require__(248);

	var _errorStatus2 = _interopRequireDefault(_errorStatus);

	var _entering = __webpack_require__(249);

	var _entering2 = _interopRequireDefault(_entering);

	var _menuTrigger = __webpack_require__(250);

	var _menuTrigger2 = _interopRequireDefault(_menuTrigger);

	var _menuList = __webpack_require__(251);

	var _menuList2 = _interopRequireDefault(_menuList);

	var _dateSplit = __webpack_require__(252);

	var _dateSplit2 = _interopRequireDefault(_dateSplit);

	var _historySplit = __webpack_require__(253);

	var _historySplit2 = _interopRequireDefault(_historySplit);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	//import msgReadStatus from './html/msgReadStatus.html';
	exports.default = {
	  // 错误状态
	  errorStatus: _errorStatus2.default.trim(),
	  // 输入状态
	  entering: _entering2.default.trim(),
	  // 消息已读状态
	  //msgReadStatus: msgReadStatus.trim(),
	  // 菜单触发按钮
	  menuTrigger: _menuTrigger2.default.trim(),
	  // 菜单列表
	  menuList: _menuList2.default.trim(),
	  dateSplit: _dateSplit2.default.trim(),
	  historySplit: _historySplit2.default.trim()
	};
	module.exports = exports['default'];

/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = "<span class=\"status-icon status-error{@if cls} ${cls}{@/if}\" data-id=\"{@if id}${id}{@/if}\"></span>\n";

/***/ },
/* 249 */
/***/ function(module, exports) {

	module.exports = "<div class=\"imui-msg-entering\" id=\"J_entering\"></div>\n";

/***/ },
/* 250 */
/***/ function(module, exports) {

	module.exports = "<div class=\"imui-msg-menu-wrap\" tabindex=\"0\">\n  <span class=\"bubble-menu-trigger J_selfBubbleMenuTrigger\" data-svrtime=\"${svrtime}\"></span>\n</div>\n";

/***/ },
/* 251 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bubble-menu-list bml-i${count}\">\n  <ul class=\"J_bubbleMenuList\">\n    {@each menus as item}\n      <li class=\"${item.cls}\">${item.text}</li>\n    {@/each}\n  </ul>\n</div>\n";

/***/ },
/* 252 */
/***/ function(module, exports) {

	module.exports = "<div class=\"imui-msg-date-split\">${date}</div>\n";

/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = "<div class=\"J_msg history-split\" id=\"${id}\"><i></i><span>Выше исторические новости</span></div>\n";

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$IMSDKRoot = __webpack_require__(2);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _event = __webpack_require__(255);

	var _event2 = _interopRequireDefault(_event);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _actions = __webpack_require__(232);

	var _actions2 = _interopRequireDefault(_actions);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _conversationManager = __webpack_require__(256);

	var _conversationManager2 = _interopRequireDefault(_conversationManager);

	var _toast = __webpack_require__(257);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var Log = _$BaseRoot.Base.Log,
	    Cache = _$BaseRoot.Base.Cache; /**
	                                    * Created by neitherzhu on 2016/12/5.
	                                    * 绑定需要用到的一些客户端/自定义事件
	                                    */

	var EVENT = _constants2.default.Event;
	var bindEvents = new _$BaseRoot.Base.ActionCreator();

	bindEvents.before(function () {
	    _$JuicerRoot2.default.register('dateFormatter', _util2.default.dateFormatter);
	});

	bindEvents.doSync = function () {

	    /************ 客户端触发事件 *************/

	    var param = _util2.default.getParam(location.search.substring(1));
	    var DLG_NAME = param.dlguniqname || '';
	    var Tst = new _toast2.default(_window2.default.container);

	    // 增加聊天对象
	    _$IMSDKRoot2.default.on(EVENT.CONVERSATION_PREFIX + DLG_NAME + EVENT.CONVERSATION_ADD_SUFFIX, function (data) {
	        _conversationManager2.default.clear(_util2.default.getUid(data.cid));

	        if (!_window2.default.LAST_TIMES) {
	            _window2.default.LAST_TIMES = {};
	        }

	        if (data.readmsgtime) {
	            _window2.default.LAST_TIMES[_util2.default.getUid(data.cid)] = parseInt(data.readmsgtime) + 1;

	            Log.red('ReadTIME при смене собеседника', data.readmsgtime, _util2.default.dateFormatter(data.readmsgtime));
	        }
	    });

	    // 切换聊天对象
	    _$IMSDKRoot2.default.on(EVENT.CONVERSATION_PREFIX + DLG_NAME + EVENT.CONVERSATION_CHANGE_SUFFIX, function (data) {
	        _actions2.default.conversationChange.action(data.cid);
	    });

	    // 聊天窗口关闭
	    _$IMSDKRoot2.default.on(EVENT.CONVERSATION_PREFIX + DLG_NAME + EVENT.CONVERSATION_CLOSE_SUFFIX, function (data) {
	        _actions2.default.conversationClose.action(data);
	    });

	    // 断网
	    _$IMSDKRoot2.default.on(EVENT.NET_DISCONNECT, function (data) {
	        _actions2.default.netDisconnect.action(data);
	    });

	    // 网络重连成功
	    _$IMSDKRoot2.default.on(EVENT.NET_RECONNECT, function (data) {
	        _actions2.default.netReconnect.action(data);
	    });

	    // 收到消息
	    _$IMSDKRoot2.default.on(EVENT.CHAT_RECEIVE_MSG + ' ' + EVENT.TRIBE_RECEIVE_MSG, function (users) {

	        if (!users && !users.length) return;

	        users.forEach(function (user) {
	            if (_util2.default.getUid(user) !== _util2.default.getUid(_window2.default.conversationID)) return;

	            _actions2.default.receiveMsg.action(user);
	        });
	    });

	    // 发送消息
	    _$IMSDKRoot2.default.on(EVENT.CHAT_SEND_MSG + ' ' + EVENT.TRIBE_SEND_MSG, function (users) {
	        if (!users && !users.length) return;

	        users.forEach(function (user) {
	            if (_util2.default.getUid(user) !== _util2.default.getUid(_window2.default.conversationID)) return;

	            _actions2.default.getSentMsg.action(user);
	        });
	    });

	    // 群@消息已读通知
	    _$IMSDKRoot2.default.on(EVENT.TRIBE_AT_MSG_READ, function (data) {
	        if (!data || !data.cid) return;

	        var uid = _util2.default.getUid(data.cid);
	        // 如果不是当前联系对象, 需要缓存
	        if (uid !== _util2.default.getUid(_window2.default.conversationID)) {

	            data.event = EVENT.TRIBE_AT_MSG_READ;
	            return _actions2.default.cacheEvent.action(uid, data);
	        }
	    });

	    // 输入状态变更
	    _$IMSDKRoot2.default.on(EVENT.INPUT_STATUS_CHANGE, function (data) {
	        if (!data || !data.cid) return;
	        _actions2.default.enteringStatusChange.action(data);
	    });

	    // 消息状态变更
	    _$IMSDKRoot2.default.on(EVENT.CHAT_SEND_MSG_STATUS_CHANGE + ' ' + EVENT.TRIBE_SEND_MSG_STATUS_CHANGE + ' ' + EVENT.SEND_MSG_STATUS_CHANGE, function (data) {
	        if (!data || !data.cid || !data.msgid) return;

	        _actions2.default.sendMsgStatusChange.action(data);
	    });

	    // 消息撤回
	    _$IMSDKRoot2.default.on(EVENT.TRIBE_MSG_RECALLED + ' ' + EVENT.CHAT_MSG_RECALLED, function (data) {
	        if (!data || !data.cid) return;

	        var uid = _util2.default.getUid(data.cid);
	        // 如果不是当前联系对象, 需要缓存
	        if (uid !== _util2.default.getUid(_window2.default.conversationID)) {

	            data.event = EVENT.CHAT_MSG_RECALLED;
	            return _actions2.default.cacheEvent.action(uid, data);
	        }

	        if (data.code === 0) {
	            _actions2.default.msgRecall.action(data);
	        } else {
	            Tst.show(_constants2.default.I18N[_constants2.default.LANGUAGE].RECALL_MSG_FAIL);
	        }
	    });

	    // IMSDK.on('im.contact.onContactPortraitChange', data => {
	    //     Log.green('onContactPortraitChange',data);
	    // });

	    /************ 自定义事件 *************/

	    // 联系对象切换完后,需要判断是否有缓存的事件需要触发
	    _event2.default.on(_constants2.default.Event.CONVERSATION_CHANGE_OVER, function () {
	        _actions2.default.fireCacheEvent.action();
	    });
	};

	bindEvents.after(function (context, data) {
	    _actions2.default.getCurrentConversationID.action(data);
	});

	bindEvents.error = function (err) {
	    console.error('Action bindEvents Error', err);
	};

	exports.default = bindEvents;
	module.exports = exports['default'];

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                          value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var Event = new _$BaseRoot.Base.Event(); /**
	                                          * Created by neitherzhu on 2016/12/5.
	                                          */
	exports.default = Event;
	module.exports = exports['default'];

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var Cache = _$BaseRoot.Base.Cache;
	//window.MAX_MINS = 30;
	/**
	 * Created by neitherzhu on 2016/12/19.
	 */

	var MAX_LENGTH = 100;
	//const MIN = 60 * 1000;
	var TIME = 30 * 60 * 1000;
	exports.default = {

	  __CACHE: [],

	  add: function add(uid) {
	    if (this.__CACHE.length >= MAX_LENGTH) {
	      var cache = this.__CACHE.shift();
	      Cache.clear(cache.uid);
	    }
	    this.__CACHE.push({ uid: uid, t: Date.now() });
	  },
	  update: function update(uid) {
	    for (var i = 0, l = this.__CACHE.length; i < l; i++) {
	      if (this.__CACHE[i].uid === uid) {
	        this.__CACHE[i].t = Date.now();
	      }
	    }
	  },
	  clear: function clear(uid) {
	    var _this = this;

	    var t = Date.now();
	    var s = [];
	    var idx = 0;

	    this.__CACHE.forEach(function (o, i) {
	      if (uid && uid === o.uid || t - o.t > TIME) {
	        s.push(i);
	      }
	    });

	    s.forEach(function (index) {
	      _this.__CACHE.splice(index + idx);
	      idx--;
	    });
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 257 */
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

	__webpack_require__(258);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * 消息区域toast
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
/* 258 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _event = __webpack_require__(255);

	var _event2 = _interopRequireDefault(_event);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _plugins = __webpack_require__(260);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _index = __webpack_require__(232);

	var _index2 = _interopRequireDefault(_index);

	var _conversationManager = __webpack_require__(256);

	var _conversationManager2 = _interopRequireDefault(_conversationManager);

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
	   * Created by neitherzhu on 2016/12/5.
	   * 切换聊天对象
	   */

	var Cache = _$BaseRoot.Base.Cache,
	    Log = _$BaseRoot.Base.Log;

	var conversationChange = new _$BaseRoot.Base.ActionCreator();

	// 设置一些前置任务
	conversationChange.before(function (context, contact, spliter) {
	  context.spliter = spliter;
	  var uid = _util2.default.getUid(contact);
	  var cuid = _util2.default.getUid(_window2.default.conversationID);

	  Log.orange('contact', contact, uid);
	  Log.orange('conversationID', _window2.default.conversationID, cuid);

	  // 如果一样的话 就不需要再触发了
	  if (uid && cuid && uid == cuid) return false;
	  context.contact = _util2.default.setCidType(contact);
	}
	// 停止播放语音
	).before(function (context, contact) {

	  _sdk2.default.stopAudio();
	  [].concat(_toConsumableArray(document.querySelectorAll('.' + _constants2.default.CLS.AUDIO_PLAYING))).forEach(function (el) {
	    el.classList.remove(_constants2.default.CLS.AUDIO_PLAYING);
	  });
	}).before(function () {
	  _util2.default.stopScrollToBottom();
	}
	// 清除正在输入的状态
	).before(function (context, contact) {

	  var enter = document.getElementById(_constants2.default.EL_ID.ENTERING);
	  enter && enter.classList.add(_constants2.default.CLS.HIDDEN);
	}
	// 缓存一些信息
	).before(function (context, contact) {
	  if (!this.contact) return;

	  var uid = _util2.default.getUid(this.contact);
	  var cache = Cache.get(uid);
	  var plugin = _plugins2.default.getPlugin('newMsgTip');

	  Log.green('coversation change set bottom', _window2.default.isBottom);
	  var c = {
	    scrollTop: _window2.default.container.scrollTop,
	    isBottom: _window2.default.isBottom,
	    hasNewMsgTip: plugin && plugin.isShow()
	  };
	  var messageManager = cache.messageManager;

	  messageManager && messageManager.save();
	  contact && Cache.set(uid, c);
	}).before(function (context, contact) {
	  if (context.contact) {
	    var scroll = _plugins2.default.getPlugin('scroll');

	    Log.green('conversation change get bottom', Cache.get(_util2.default.getUid(context.contact)).isBottom);
	    _window2.default.isBottom = Cache.get(_util2.default.getUid(context.contact)).isBottom === false ? false : true;
	    scroll.setBottom(_window2.default.isBottom);
	  }
	}
	// 将开始切换联系对象的事件广播出去
	).before(function (context, contact) {
	  _event2.default.emit(_constants2.default.Event.CONVERSATION_CHANGE_START, contact);
	}
	// 移除新消息提醒
	).before(function (context, contact) {
	  var plugin = _plugins2.default.getPlugin('newMsgTip');
	  plugin && plugin.hide();
	});

	conversationChange.doSync = function (context, contact) {
	  _window2.default.conversationID = context.contact;
	  this.contact = context.contact;
	};

	conversationChange.after(function (context, contact) {
	  if (context.contact) {
	    _index2.default.getMsg.action(context.contact, context.spliter);
	  } else {
	    _window2.default.container.innerHTML = '';
	  }
	});

	conversationChange.error = function (err) {
	  console.error('Action conversationChange Error', err);
	};

	exports.default = conversationChange;
	module.exports = exports['default'];

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createPlugin = __webpack_require__(261);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	__webpack_require__(262);

	__webpack_require__(263);

	__webpack_require__(264);

	__webpack_require__(265);

	__webpack_require__(266);

	__webpack_require__(267);

	__webpack_require__(268);

	__webpack_require__(272);

	__webpack_require__(273);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	//import './eventPlugin/videoPlay';

	//import './eventPlugin/audioClick';
	/**
	 * Created by neitherzhu on 2016/12/7.
	 * 插件
	 */
	exports.default = _createPlugin2.default;
	module.exports = exports['default'];

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                            value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var Plugin = new _$BaseRoot.Base.Plugin(); /**
	                                            * Created by neitherzhu on 2016/12/8.
	                                            * 创建全局插件
	                                            */
	exports.default = Plugin;
	module.exports = exports['default'];

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(261);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

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
	   * 点击自动回复消息
	   */

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.STOP_AUTO_REPLY, function (ev) {

	  _sdk2.default.stopAutoReply({ cid: _window2.default.conversationID });

	  // 移除当前屏幕上的"不再回复"按钮
	  [].concat(_toConsumableArray(document.querySelectorAll('.' + _constants2.default.CLS.STOP_AUTO_REPLY))).forEach(function (el) {
	    el.parentNode.removeChild(el);
	  });
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$BaseRoot = __webpack_require__(3);

	var _createPlugin = __webpack_require__(261);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/8.
	 * 点击重发消息
	 */
	var Cache = _$BaseRoot.Base.Cache;

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.RESEND_BTN, function (ev) {

	  var target = ev.target;
	  var parent = _util2.default.parents(target, _constants2.default.CLS.MSG_CONTAINER);
	  var messageManager = Cache.get(_util2.default.getUid(_window2.default.conversationID)).messageManager;

	  parent && _sdk2.default.resendMsg({
	    cid: _window2.default.conversationID,
	    msgid: parent.id
	  });

	  messageManager && messageManager.removeMsg(parent.id);
	  parent.parentNode.removeChild(parent);

	  //parent.querySelector('.' + Constant.CLS.MSG_STATUS_CONTAINER).innerHTML = '';
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _createPlugin = __webpack_require__(261);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _template = __webpack_require__(247);

	var _template2 = _interopRequireDefault(_template);

	var _util = __webpack_require__(246);

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
	   * Created by neitherzhu on 2017/2/16.
	   */

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.BUBBLE_MENU_TRIGGER, function (ev) {
	  var target = ev.target;
	  var wrap = _util2.default.parents(target, 'imui-msg-op-wrap');
	  var customMenu = wrap.dataset.menu && JSON.parse(wrap.dataset.menu);
	  var menus = [].concat(_toConsumableArray(_constants2.default.BUBBLE_MENU.DEFAULT));

	  for (var k in customMenu) {
	    if (customMenu[k]) {
	      menus.push(_constants2.default.BUBBLE_MENU.CUSTOM[k]);
	    }
	  }

	  var tpl = (0, _$JuicerRoot2.default)(_template2.default.menuList, { menus: menus, count: menus.length });
	  var dom = _util2.default.createFragment(tpl);

	  target.parentNode.appendChild(dom);

	  target.classList.remove(_constants2.default.CLS.BUBBLE_MENU_TRIGGER);
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(261);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _$BaseRoot = __webpack_require__(3);

	var _template = __webpack_require__(247);

	var _template2 = _interopRequireDefault(_template);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

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
	   * Created by neitherzhu on 2017/2/16.
	   */

	var Util = _$BaseRoot.Base.Util,
	    Log = _$BaseRoot.Base.Log;

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.SELF_BUBBLE_MENU_TRIGGER, function (ev) {
	  Log.red('menu trigger click');
	  var target = ev.target;

	  var svrTime = target.getAttribute('data-svrtime');

	  Log.green('Всплывающее меню', svrTime);
	  if (!svrTime) return;

	  svrTime = parseInt(svrTime);

	  _sdk2.default.getServerTime().then(function (data) {
	    var n = parseInt(data.result);
	    var canNotRecall = n - svrTime > _constants2.default.RECALL_LIMIT;
	    var menuList = target.parentNode.querySelector('.J_bubbleMenuList');

	    if (menuList && !canNotRecall) return;

	    var wrap = Util.parents(target, 'imui-msg-op-wrap');
	    var customMenu = wrap.dataset.menu && JSON.parse(wrap.dataset.menu);
	    var menus = [].concat(_toConsumableArray(_constants2.default.BUBBLE_MENU.DEFAULT));

	    for (var k in customMenu) {
	      if (customMenu[k]) {
	        if (k === 'canRecall') {
	          !canNotRecall && menus.push(_constants2.default.BUBBLE_MENU.CUSTOM[k]);
	        } else {
	          menus.push(_constants2.default.BUBBLE_MENU.CUSTOM[k]);
	        }
	      }
	    }

	    menuList && menuList.parentNode.removeChild(menuList);

	    var tpl = (0, _$JuicerRoot2.default)(_template2.default.menuList, { menus: menus, count: menus.length });
	    var dom = Util.createFragment(tpl);

	    target.parentNode.appendChild(dom);

	    if (canNotRecall) {
	      target.classList.remove(_constants2.default.CLS.SELF_BUBBLE_MENU_TRIGGER);
	    }
	  });
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(261);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.MSG_RECALL, function (ev) {
	  var target = ev.target;
	  var parent = _util2.default.parents(target, _constants2.default.CLS.MSG_CONTAINER);
	  var menuWrap = _util2.default.parents(target, 'imui-msg-menu-wrap');

	  if (!parent || !menuWrap) return;

	  var trigger = menuWrap.querySelector('.bubble-menu-trigger');
	  var msgid = parent.id;
	  var msgtime = parent.getAttribute('data-time');
	  var svrtime = trigger.getAttribute('data-svrtime');

	  menuWrap.blur();
	  _sdk2.default.recallMsg({
	    cid: _window2.default.conversationID,
	    msgid: msgid,
	    msgtime: msgtime,
	    svrtime: svrtime
	  });
	}); /**
	     * Created by neitherzhu on 2017/2/16.
	     */

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _createPlugin = __webpack_require__(261);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _event2 = __webpack_require__(255);

	var _event3 = _interopRequireDefault(_event2);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/8.
	 * 滚动条管理 滚动加载消息
	 */
	var Log = _$BaseRoot.Base.Log;

	var Buffer = 25;

	var Scroll = {

	    __scrollTopLimit: 0, // 滚动到顶部位置为0时,触发获取更多消息的行为

	    __scrollingTimer: null, // 防止频繁触发滚动事件

	    __isBottom: true, // 滚动条是否在底部

	    __switching: false, // 切换中

	    __isScrollBtnShow: false, // 快速滚动到顶部/底部的按钮是否显示

	    __topBtn: null,

	    __bottomBtn: null,

	    __disabled: false,

	    __resizeTimer: null, // 防止频繁触发窗口缩放事件

	    init: function init(context) {

	        if (!context || !context.container) return;

	        this.container = context.container;
	        this.containerHeight = 0;

	        this._event();
	    },

	    _event: function _event() {
	        var _that = this;
	        var scrollHandler = void 0;
	        if (_constants2.default.SCROLL_DELAY !== 0) {
	            scrollHandler = function scrollHandler() {
	                if (_that.__switching || _that.__disabled) return;

	                var st = this.scrollTop;

	                if (!_that.containerHeight) {
	                    _that.containerHeight = _that.container.clientHeight;
	                    Log.red('Текущая высота окна', _that.containerHeight);
	                }

	                if (st <= _that.__scrollTopLimit) {
	                    _event3.default.emit('SCROLL_REACH_TOP', st);
	                }

	                console.log(Math.abs(st + _that.containerHeight - _that.container.scrollHeight));
	                _that.__isBottom = Math.abs(st + _that.containerHeight - _that.container.scrollHeight) <= Buffer;

	                console.log('isBottom:', _that.__isBottom);
	                _event3.default.emit('SCROLLING', { isBottom: _that.__isBottom, scrollTop: st });

	                if (_that.__isBottom) {
	                    _event3.default.emit('SCROLL_REACH_BOTTOM', st);
	                }
	            };
	        } else {
	            scrollHandler = function scrollHandler() {
	                if (_that.__switching || _that.__disabled) return;

	                var st = this.scrollTop;

	                clearTimeout(_that.__scrollingTimer);

	                _that.__scrollingTimer = setTimeout(function () {
	                    if (!_that.containerHeight) {
	                        _that.containerHeight = _that.container.clientHeight;
	                        Log.red('Текущая высота окна', _that.containerHeight);
	                    }

	                    if (st <= _that.__scrollTopLimit) {
	                        _event3.default.emit('SCROLL_REACH_TOP', st);
	                    }

	                    console.log(Math.abs(st + _that.containerHeight - _that.container.scrollHeight));
	                    _that.__isBottom = Math.abs(st + _that.containerHeight - _that.container.scrollHeight) <= Buffer;

	                    console.log('isBottom:', _that.__isBottom);
	                    _event3.default.emit('SCROLLING', { isBottom: _that.__isBottom, scrollTop: st });

	                    if (_that.__isBottom) {
	                        _event3.default.emit('SCROLL_REACH_BOTTOM', st);
	                    }
	                }, parseInt(_constants2.default.SCROLL_DELAY) + 10);
	            };
	        }

	        this.container.addEventListener('scroll', scrollHandler);

	        window.addEventListener('resize', function () {
	            _that.reset();
	        });

	        // 除了自己的消息窗口外, 其他容器的变更都需要重新计算消息容器的高度
	        // 防止消息容器的高度被其他容器改变,导致滚动条及新消息提醒不准确
	        var observerHandler = function observerHandler(mutations) {

	            if (!mutations || !mutations.length) return;

	            mutations.forEach(function (m) {
	                if (!_util2.default.parents(m.target, _constants2.default.CLS.MSG_WRAPER)) {
	                    _that.reset();
	                }
	            });

	            //mutations.forEach(m => {
	            //  _that.__isBottom && _that.goBottom();
	            //
	            //  if(m.type === 'childList') {
	            //    [...m.addedNodes].forEach(n => {
	            //      [...n.querySelectorAll('.J_imImage')].forEach(img => {
	            //        img.onload = function() {
	            //          this.onload = this.onerror = null;
	            //          _that.__isBottom && _that.goBottom();
	            //        };
	            //        img.onerror = function() {
	            //          this.onload = this.onerror = null;
	            //          _that.__isBottom && _that.goBottom();
	            //        }
	            //      });
	            //    });
	            //  }
	            //});
	        };

	        var observer = new MutationObserver(observerHandler);

	        observer.observe(document.body, {
	            childList: true,
	            attributes: true,
	            subtree: true
	        });

	        this.container.addEventListener('DOMSubtreeModified', function () {
	            _that.renderScrollBtn();
	        });
	    },

	    disableScroll: function disableScroll() {
	        this.__disabled = true;
	    },

	    enableScroll: function enableScroll() {
	        this.__disabled = false;
	    },

	    setSwitching: function setSwitching(b) {
	        this.__switching = !!b;
	    },

	    reset: function reset() {
	        var _that = this;

	        if (_constants2.default.SCROLL_DELAY !== 0) {
	            clearTimeout(this.__resizeTimer);

	            this.__resizeTimer = setTimeout(function () {
	                //let st = _that.container.scrollTop;
	                _that.containerHeight = _that.container.clientHeight;
	                Log.red('Текущая высота окна', _that.containerHeight);
	                _that.renderScrollBtn();

	                //Math.abs(st + _that.containerHeight - _that.container.scrollHeight) <= Buffer
	                _that.__isBottom && _that.goBottom();
	            }, 300);
	        } else {
	            _that.containerHeight = _that.container.clientHeight;
	            Log.red('Текущая высота окна', _that.containerHeight);
	            _that.renderScrollBtn();

	            //Math.abs(st + _that.containerHeight - _that.container.scrollHeight) <= Buffer
	            _that.__isBottom && _that.goBottom();
	        }
	    },

	    setBottom: function setBottom(b) {
	        this.__isBottom = !!b;
	    },

	    renderScrollBtn: function renderScrollBtn() {
	        var _that = this;
	        var isOverY = this._isOverY();

	        if (isOverY !== this.__isScrollBtnShow) {
	            this.__isScrollBtnShow = isOverY;

	            if (!this.__topBtn) {
	                this.__topBtn = document.createElement('div');
	                this.__topBtn.className = 'auto-scroll-btn to-top J_ToTop';
	                this.container.parentNode.appendChild(this.__topBtn);
	                this.__topBtn.addEventListener('click', function () {
	                    _that.container.scrollTop = 0;
	                });
	            }

	            if (!this.__bottomBtn) {
	                this.__bottomBtn = document.createElement('div');
	                this.__bottomBtn.className = 'auto-scroll-btn to-end J_ToEnd';
	                this.container.parentNode.appendChild(this.__bottomBtn);
	                this.__bottomBtn.addEventListener('click', function () {
	                    _that.goBottom();
	                });
	            }

	            this.__bottomBtn.style.display = isOverY ? 'block' : 'none';
	            this.__topBtn.style.display = isOverY ? 'block' : 'none';
	        }
	    },

	    goBottom: function goBottom() {
	        this.container.scrollTop = this.container.scrollHeight;
	    },

	    _isOverY: function _isOverY() {
	        return this.container.scrollHeight > this.container.clientHeight;
	    }
	};

	_createPlugin2.default.addPlugin('scroll', Scroll);

	exports.default = Scroll;
	module.exports = exports['default'];

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _popupOver = __webpack_require__(269);

	var _popupOver2 = _interopRequireDefault(_popupOver);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPlugin = __webpack_require__(261);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _template = __webpack_require__(247);

	var _template2 = _interopRequireDefault(_template);

	var _event = __webpack_require__(255);

	var _event2 = _interopRequireDefault(_event);

	__webpack_require__(271);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var NewMsgTip = {

	  __isShow: false,

	  init: function init(context) {
	    if (!context || !context.container) return;

	    this.container = context.container;

	    this.config = {
	      visible: false,
	      x: -5,
	      y: -5,
	      cls: 'imui-msg-new-msg-box J_newMsgTip',
	      tpl: _constants2.default.I18N[_constants2.default.LANGUAGE].NEW_MSG_TIP,
	      parent: document.getElementById(_constants2.default.EL_ID.CONTAINER).parentNode,
	      html: ''
	    };
	    this.popupOver = new _popupOver2.default(context.container, this.config);

	    this.popupOver.render(this.config);
	    this.events();
	  },
	  events: function events() {
	    var _this = this;

	    _event2.default.on('SCROLL_REACH_BOTTOM', function (data) {
	      _this.hide();
	    });

	    _event2.default.on(_constants2.default.Event.CONVERSATION_CHANGE_START, function () {
	      _this.hide();
	    });

	    this.popupOver.box.addEventListener('click', function (ev) {
	      _this.hide();
	      _this.container.scrollTop = _this.container.scrollHeight;
	    });
	  },
	  show: function show() {
	    if (this.isShow()) return;
	    this.__isShow = true;
	    this.config.visible = true;
	    this.popupOver.render(this.config);
	  },
	  hide: function hide() {
	    if (!this.isShow()) return;
	    this.__isShow = false;
	    this.config.visible = false;
	    this.popupOver.render(this.config);
	  },
	  isShow: function isShow() {
	    return this.__isShow;
	  }
	}; /**
	    * Created by neitherzhu on 2016/12/14.
	    * 新消息提醒
	    */

	_createPlugin2.default.addPlugin('newMsgTip', NewMsgTip);

	exports.default = NewMsgTip;
	module.exports = exports['default'];

/***/ },
/* 269 */
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

	__webpack_require__(270);

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

	        // 左右都超出, 展示在点击位置的中间
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
/* 270 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 271 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(261);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _toast = __webpack_require__(257);

	var _toast2 = _interopRequireDefault(_toast);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/3/3.
	 */
	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.BUBBLE_COPY, function (ev) {

	  var parent = _util2.default.parents(ev.target, 'J_msg');

	  if (!parent) return;

	  var htmlEl = parent.querySelector('.msg-body-html');
	  var menuWrap = parent.querySelector('.imui-msg-menu-wrap');
	  menuWrap && menuWrap.blur();

	  var content = '';

	  if (htmlEl.querySelector('video')) {
	    content = htmlEl.querySelector('video').src;
	  } else {
	    content = htmlEl.innerHTML;
	  }
	  _sdk2.default.copy({ content: content });
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createPlugin = __webpack_require__(261);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_createPlugin2.default.addEventPlugin('click', _constants2.default.CLS.MSG_FORWARD, function (ev) {
	  var target = ev.target;
	  var parent = _util2.default.parents(target, _constants2.default.CLS.MSG_CONTAINER);
	  var menuWrap = _util2.default.parents(target, 'imui-msg-menu-wrap');
	  var isFile = parent && parent.classList.contains('file-msg-wrap');

	  if (!parent || !menuWrap) return;

	  var param = {
	    cid: _util2.default.getCid(_window2.default.conversationID),
	    msgid: parent.id
	  };

	  if (isFile) {
	    var fileMsg = parent.querySelector('.file-msg');
	    var nodeName = fileMsg.dataset.name;
	    var nodeSize = parseInt(fileMsg.dataset.size);
	    var md5 = fileMsg.dataset.md5;
	    var fileMeta = {
	      nodeName: nodeName,
	      nodeSize: nodeSize,
	      md5: md5
	    };

	    if (fileMsg) {
	      param.msgtype = 65649;
	      param.msgbody = [{
	        type: 113,
	        jvale: '',
	        value: JSON.stringify({ fileMeta: fileMeta })
	      }];
	    }
	  }

	  menuWrap.blur();

	  _sdk2.default.forwardMsg(param);f;
	}); /**
	     * Created by neitherzhu on 2017/5/23.
	     */

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _index = __webpack_require__(232);

	var _index2 = _interopRequireDefault(_index);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _plugins = __webpack_require__(260);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _messageManager = __webpack_require__(275);

	var _messageManager2 = _interopRequireDefault(_messageManager);

	var _template = __webpack_require__(247);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Cache = _$BaseRoot.Base.Cache,
	    Log = _$BaseRoot.Base.Log; /**
	                                * Created by neitherzhu on 2016/12/6.
	                                * 获取消息
	                                */

	var getMsg = new _$BaseRoot.Base.ActionCreator();

	getMsg.actionType = 'async';

	getMsg.doAsync = function (context, contact, spliter) {

	  var uid = _util2.default.getUid(contact);
	  var label = _util2.default.getLabel(contact);
	  var cache = Cache.get(uid);
	  var messageManager = cache.messageManager;

	  if (!messageManager) {
	    messageManager = new _messageManager2.default(_window2.default.container, uid, label, spliter);

	    Cache.set(uid, { messageManager: messageManager });
	  }

	  if (!spliter) {
	    if (_window2.default.LAST_TIMES && _window2.default.LAST_TIMES[uid]) {
	      var id = _util2.default.guid();
	      spliter = {
	        msgid: id,
	        msgtime: _window2.default.LAST_TIMES[uid],
	        html: (0, _$JuicerRoot2.default)(_template2.default.historySplit, { id: id })
	      };

	      delete _window2.default.LAST_TIMES[uid];
	    }
	  }

	  spliter && messageManager.setSplit(spliter);

	  messageManager.render();

	  var getOfflineMsgPromise = _index2.default.getOfflineMsg.action(contact);
	  var getNewMsgPromise = _index2.default.getNewMsg.action(contact);

	  return new Promise(function (resolve, reject) {
	    Promise.all([getOfflineMsgPromise, getNewMsgPromise]).then(function () {
	      uid === _util2.default.getUid(_window2.default.conversationID) ? resolve() : reject();
	    }).catch(function (err) {
	      reject(err);
	    });
	  });
	};

	getMsg.after(function () {
	  var cache = Cache.get(_util2.default.getUid(_window2.default.conversationID));
	  var scrollTop = cache.scrollTop;
	  var hasNewMsgTip = cache.hasNewMsgTip;
	  var plugin = _plugins2.default.getPlugin('newMsgTip');

	  scrollTop && (_window2.default.container.scrollTop = scrollTop);
	  hasNewMsgTip && plugin && plugin.show();
	});

	getMsg.error = function (err) {
	  console.error('Action getMsg Error', err);
	};

	exports.default = getMsg;
	module.exports = exports['default'];

/***/ },
/* 275 */
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
	      * Created by neitherzhu on 2016/12/6.
	      * 消息上屏管理
	      */

	var _$BaseRoot = __webpack_require__(3);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _convert = __webpack_require__(276);

	var _convert2 = _interopRequireDefault(_convert);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _template = __webpack_require__(247);

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
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var Cache = _$BaseRoot.Base.Cache,
	    Log = _$BaseRoot.Base.Log;

	//window.MAX_MSG_LENGTH = 200;

	var MessageManager = function () {
	    function MessageManager(container, contact, label, spliter) {
	        _classCallCheck(this, MessageManager);

	        this.container = container;
	        this.cid = contact;
	        this.label = label;
	        this.MAX_MSG_LENGTH = 200;
	        this.spliter = spliter;

	        if (this.spliter) {

	            Log.red('По умолчанию поставляется со сплиттером', this.spliter);
	            this.spliter.credible = true;
	            this.spliter.split = 1;
	        }

	        this.clear();
	    }

	    _createClass(MessageManager, [{
	        key: 'setSplit',
	        value: function setSplit(spliter) {

	            this.spliter = spliter;

	            Log.red('Активно установлен сплиттер', this.spliter);

	            if (this.spliter) {
	                this.spliter.credible = true;
	                this.spliter.split = 1;
	            }

	            //for(let i = 0, l = this.MsgList.length; i < l; i++) {
	            //  if(this.MsgList[i].split){
	            //    Log.red('找到spliter', i);
	            //    let splitId = this.MsgList[i].msigid;
	            //    let splitDom = splitId && document.getElementById(splitId);
	            //
	            //    splitDom && splitDom.parentNode.removeChild(splitDom);
	            //
	            //    this.MsgList.splice(i, 1);
	            //    break;
	            //  }
	            //}
	            //
	            //Log.red('MsgList', this.MsgList);
	            //
	            //this.spliter && this.__insert(this.spliter);
	        }
	    }, {
	        key: 'clear',
	        value: function clear(msg) {
	            var _this = this;

	            var cache = void 0;
	            var list = void 0;

	            Log.red('messageManager clear  >>>', msg);

	            if (msg) {
	                var msgtime = parseInt(msg.msgtime);
	                var msgid = msg.msgid;
	                list = [].concat(_toConsumableArray(this.MsgList));
	                cache = [];

	                list.reverse();

	                for (var i = 0, l = list.length; i < l; i++) {
	                    if (parseInt(list[i].msgtime) < msgtime) {
	                        break;
	                    }
	                    if (list[i].msgid !== msgid) {
	                        cache.push(list[i]);
	                    }
	                }
	                Log.red('getCachedMsg  >>>', cache);
	            }

	            this.dateCache = '';
	            this.HTML = '';
	            this.isClose = false;
	            // 缓存的消息列表
	            this.MsgList = [];
	            // 缓存的消息id
	            this.MsgIdInCache = {};
	            // 已经上屏的消息id
	            this.MsgIdOnScreen = {};
	            // 消息上屏后需要针对此条消息需要处理的回调
	            this.MsgCallbackList = [];
	            // 未处理完的回调
	            this.UnresolvedCallbackList = [];
	            // 本次插入消息的dom
	            this.TempConvertDOM = null;
	            // 最后一次插消息的条数
	            this.LastInsertMsgLen = 0;
	            // 每次插消息时第一条消息
	            this.firstMsgInHistory = null;
	            // 每次插消息时最后一条消息
	            this.lastMsgInHistory = null;
	            // 解析消息时的上一条消息
	            this.prevMsg = null;
	            this.spliterRendered = false;

	            if (cache && cache.length) {
	                cache.reverse();

	                var msgEl = void 0;
	                var div = document.createElement('div');

	                cache.forEach(function (m) {
	                    msgEl = document.getElementById(m.msgid);

	                    if (msgEl) {
	                        div.innerHTML = m.html;
	                        m.html = div.querySelector('.J_msg').outerHTML;
	                        Log.red('Заменить кешированный HTML  >>>', m.html);
	                        Log.green('HTML на экране >>>', msgEl.outerHTML);
	                        //m.html = msgEl.querySelector('.J_msg').outerHTML;
	                    }
	                    _this.MsgList.push(m);
	                    _this.MsgIdInCache[msg.msgid] = 1;
	                    _this.MsgIdOnScreen[msg.msgid] = 1;
	                });
	            }

	            this.msgLen = this.MsgList.length;

	            //this.spliter && this.__insert(this.spliter);
	        }
	    }, {
	        key: 'removeMsg',
	        value: function removeMsg(msgid) {
	            delete this.MsgIdInCache[msgid];
	            delete this.MsgIdOnScreen[msgid];
	            var l = this.MsgList.length;

	            for (var i = 0; i < l; i++) {
	                if (this.MsgList[i].msgid === msgid) {
	                    this.MsgList.splice(i, 1);
	                    break;
	                }
	            }
	        }
	    }, {
	        key: 'getConvertedMsg',
	        value: function getConvertedMsg(msg, credible, ignorePrevMsg, next) {

	            // 如果存在上一条消息
	            // 比较上一条消息的发送方跟当前这条消息的发送方
	            // 如果发送方一样
	            // 并且消息类型一样
	            // 并且消息时间不超过1分钟,
	            // 那么消息需要合并
	            if (!ignorePrevMsg && this.prevMsg && _util2.default.getUid(this.prevMsg.fromid) === _util2.default.getUid(msg.fromid) && this.prevMsg.msgtype === msg.msgtype && parseInt(msg.msgtime) - parseInt(this.prevMsg.msgtime) < 60000) {
	                msg.fold = true;
	            }

	            // 缓存此条消息
	            this.prevMsg = msg;

	            // 开始解析消息
	            var convert = _convert2.default.convert(this.label, msg, 'msgtype');

	            // 如果不存在解析结果
	            // 或者不存在对应的html字符串
	            // 直接返回null
	            if (!convert || !convert.html) return null;

	            if (this.spliter && !this.spliterRendered) {
	                if (msg.msgtime <= this.spliter.msgtime && (!next || next.msgtime > this.spliter.msgtime)) {
	                    this.spliterRendered = true;
	                    convert.html += this.spliter.html;
	                }
	            }

	            // 如果存在解析后需要执行的回调, 缓存
	            convert.callback && this.MsgCallbackList.push(convert.callback);

	            // 返回解析结果
	            return {
	                msgid: msg.msgid,
	                msgtime: msg.msgtime,
	                credible: credible,
	                html: convert.html
	            };
	        }

	        /**
	         * 往消息队列中插消息
	         * @param msgList 消息列表
	         * @param credible 是否为可信的消息,可信消息会将消息队列遍历一遍将连续的可信消息转成html
	         * @param doNotClear
	         * @returns {MessageManager}
	           */

	    }, {
	        key: 'insert',
	        value: function insert(msgList, credible, doNotClear) {
	            var _this2 = this;

	            console.log('insert', credible);

	            if (msgList && msgList.length) {
	                var cache = void 0,
	                    html = '',
	                    len = msgList.length;
	                var hasCache = false;
	                var dateCache = this.dateCache || '';
	                var date = '';

	                this.firstMsgInHistory = msgList[0];
	                this.lastMsgInHistory = msgList[msgList.length - 1];
	                // 记录当前插入的消息条数,为了与checkAndInsert中的消息条数做对比
	                this.LastInsertMsgLen = msgList.length;

	                msgList.forEach(function (msg, index) {
	                    if (_this2.MsgIdOnScreen[msg.msgid]) {
	                        hasCache = true;
	                        return console.log('已经存在 ' + msg.msgid + ' 消息');
	                    }

	                    // 缓存所有需要上屏的消息id
	                    _this2.MsgIdOnScreen[msg.msgid] = 1;

	                    // 解析消息
	                    cache = _this2.getConvertedMsg(msg, credible, index === 0 && len > 1, msgList[index + 1]);

	                    if (!cache) return;

	                    date = new Date(parseInt(msg.msgtime, 10)).__getOnlyDate();
	                    if (date !== dateCache) {
	                        dateCache = date;
	                        html += (0, _$JuicerRoot2.default)(_template2.default.dateSplit, { date: date });
	                    }

	                    _this2.__insert(cache);
	                    html += cache.html;
	                });

	                this.dateCache = dateCache;

	                if (html) {
	                    var fragment = document.createDocumentFragment();
	                    var div = document.createElement('div');

	                    div.innerHTML = html;

	                    while (div.childNodes[0]) {
	                        fragment.appendChild(div.childNodes[0]);
	                    }

	                    this.TempConvertDOM = fragment;

	                    this.clearCredibleInMsgList(doNotClear);
	                } else {
	                    this.TempConvertDOM = null;
	                }
	            } else {
	                this.TempConvertDOM = null;
	            }

	            return this;
	        }
	    }, {
	        key: 'insertBefore',
	        value: function insertBefore(msgList) {
	            var _this3 = this;

	            console.log('insertBefore');
	            var cache = void 0;
	            var html = '';
	            var f = document.createDocumentFragment();
	            var div = document.createElement('div');
	            var dateCache = '';
	            var date = '';

	            this.MAX_MSG_LENGTH += _constants2.default.Other.fetchMsgCount;
	            //window.MAX_MSG_LENGTH += Constant.Other.fetchMsgCount;

	            msgList.forEach(function (msg, index) {
	                if (_this3.MsgIdOnScreen[msg.msgid]) {
	                    console.log('уже существует ' + msg.msgid + ' Новости');
	                    return;
	                }

	                _this3.MsgIdOnScreen[msg.msgid] = 1;
	                cache = _this3.getConvertedMsg(msg, true, index === 0, msgList[index + 1]);

	                if (!cache) return;

	                date = new Date(parseInt(msg.msgtime, 10)).__getOnlyDate();
	                if (date !== dateCache) {
	                    dateCache = date;
	                    html += (0, _$JuicerRoot2.default)(_template2.default.dateSplit, { date: date });
	                }

	                html += cache.html;
	            });

	            if (html) {
	                div.innerHTML = html;
	                while (div.childNodes[0]) {
	                    f.appendChild(div.childNodes[0]);
	                }
	                this.TempConvertDOM = f;
	                this.HTML = html + this.HTML;
	            } else {
	                this.TempConvertDOM = null;
	            }

	            return this;
	        }

	        /**
	         * 检查消息重复并插入到消息队列中
	         * @param msgList 消息
	         * @param credible 是否设置为可信
	         * @returns {*}
	         */

	    }, {
	        key: 'checkAndInsert',
	        value: function checkAndInsert(msgList, credible) {
	            var _this4 = this;

	            console.log('checkAndInsert', credible);
	            var cache = void 0;
	            var len = msgList.length;
	            var changed = false;
	            var isRepeat = false;
	            var firstMsg = msgList[0];
	            var lastMsg = msgList[msgList.length - 1];

	            // 如果第一条跟最后一条消息已经上过屏了,
	            // 则表示里面的所有消息都上过屏了
	            if (this.LastInsertMsgLen != len || this.firstMsgInHistory && this.firstMsgInHistory.msgid !== firstMsg.msgid || this.lastMsgInHistory && this.lastMsgInHistory.msgid !== lastMsg.msgid) {

	                if (this.MsgList.length && this.MsgList[0].msgtime < firstMsg.msgtime) {
	                    console.log('mustCross', this.MsgIdOnScreen);
	                    this.clear(lastMsg);
	                }

	                if (this.MsgList.length) {
	                    this.spliterRendered = false;
	                }
	                var firstCredibleMsg = this.MsgList.length && this.MsgList[0].credible && this.MsgList[0];

	                // 如果缓存的最后一条消息的时间比新传入的第一条消息还要小,说明没有重合的消息,有丢消息的风险,需要清除后再上屏
	                //if(this.MsgList.length && this.MsgList[this.MsgList.length - 1].msgtime < firstMsg.msgtime
	                //  || (this.firstMsgInHistory && this.lastMsgInHistory && this.firstMsgInHistory.msgtime > firstMsg.msgtime && lastMsg.msgtime > this.firstMsgInHistory.msgtime && this.lastMsgInHistory.msgtime >= lastMsg.msgtime)
	                //) {
	                //  console.log('mustCross', this.MsgIdOnScreen);
	                //  this.clear();
	                //}

	                this.firstMsgInHistory = msgList[0];

	                msgList.forEach(function (msg, index) {

	                    // 如果已经上过屏, 则不再处理
	                    if (_this4.MsgIdOnScreen[msg.msgid]) {
	                        isRepeat = true;
	                        // 再次解析,保证extra能够再次执行
	                        console.log('checkandinsert:Это сообщение уже существует>>>', msg.msgdi);
	                        _this4.getConvertedMsg(msg, credible, index === 0 && len > 1, msgList[index + 1]);
	                        return;
	                    }

	                    _this4.MsgIdOnScreen[msg.msgid] = 1;
	                    cache = _this4.getConvertedMsg(msg, credible, index === 0 && len > 1, msgList[index + 1]);
	                    if (!cache) return;

	                    console.log('firstCredibleMsg', firstCredibleMsg, msg, firstCredibleMsg && firstCredibleMsg.msgtime > msg.msgtime);
	                    // 如果没有上屏的消息比在缓存列表中可信的消息时间小, 则不再去将消息上屏,因为会导致乱序
	                    if (firstCredibleMsg && firstCredibleMsg.msgtime > msg.msgtime) return;

	                    changed = true;
	                    _this4.__insert(cache);
	                });

	                Log.red('CHECK AND INSERT MSGLIST', [].concat(_toConsumableArray(this.MsgList)));
	                // 缓存中的html需要更新为目前已经上屏的html
	                // 防止已经更新过的html被再次替换成为更新时的状态
	                //let msgEl;
	                //let div = document.createElement('div');
	                //
	                //this.MsgList.forEach(m => {
	                //  msgEl = document.getElementById(m.msgid);
	                //
	                //  if(msgEl) {
	                //    div.innerHTML = m.html;
	                //    m.html = div.querySelector('.J_msg').outerHTML;
	                //    Log.red('checkAndInsert::缓存的html >>>', m.html);
	                //    Log.green('checkAndInsert::屏幕上的html >>>', msgEl.outerHTML);
	                //  }
	                //});
	            }

	            console.log('Установить все как доверенные сообщения');
	            this.setCredible(true);

	            this.clearCredibleInMsgList();

	            this.MsgList.length && (this.prevMsg = this.MsgList[this.MsgList.length - 1]);

	            if (!changed) {
	                return changed;
	            }
	            return this;
	        }
	    }, {
	        key: '__insert',
	        value: function __insert(cache) {
	            var _that = this;
	            var len = this.MsgList.length;

	            var __cache = Object.assign({}, cache);

	            // 如果存在消息缓存
	            if (len) {
	                // 如果缓存消息的最后一条消息比要缓存的消息时间小,
	                // 那么直接将要缓存的消息往后放
	                if (this.MsgList[len - 1].msgtime <= cache.msgtime) {
	                    console.log('__insert', 'push', __cache);
	                    this.MsgList.push(cache);
	                    this.msgLen++;
	                }
	                // 判断第一条的消息时间是否比要缓存的消息时间大,
	                // 如果大, 那么就将消息往前放,保证消息时间是从小到大的排序
	                else if (this.MsgList[0].msgtime >= cache.msgtime) {
	                        console.log('__insert', 'unshift', __cache);
	                        this.MsgList.unshift(cache);
	                        this.msgLen++;
	                    }
	                    // 否则, 需要找到缓存消息中某一条比要缓存的消息的时间大的那条
	                    // 将缓存消息插到此条消息前
	                    else {
	                            for (var i = 0; i < len; i++) {
	                                if (_that.MsgList[i].msgtime >= cache.msgtime) {
	                                    console.log('__insert', 'splice', __cache);
	                                    _that.MsgList.splice(i, 0, cache);
	                                    this.msgLen++;
	                                    break;
	                                }
	                            }
	                        }
	            } else {
	                this.MsgList.push(cache);
	                this.msgLen++;
	                console.log('__insert', 'push', __cache);
	            }

	            this.MsgIdInCache[cache.msgid] = 1;

	            Log.red('MSGLIST', [].concat(_toConsumableArray(this.MsgList)));
	        }
	    }, {
	        key: 'clearCredibleInMsgList',
	        value: function clearCredibleInMsgList(force, needSpliter) {
	            console.log('clearCredibleInMsgList', force);
	            var _that = this;
	            var div = document.createElement('div');
	            var len = this.MsgList.length;
	            var html = '';
	            var prevHtml = '';
	            var cache = void 0;
	            var i = 0;
	            var dateCache = this.dateCache || '';
	            var date = '';
	            var dateHtml = '';

	            // 遍历消息缓存
	            // 当非强制转换时,碰到不是可信的消息则停止
	            for (; i < len; i++) {
	                cache = _that.MsgList[i];

	                if (!force && !cache.credible) {
	                    console.info('Невыполненное преобразование, обнаружено ненадежное сообщение', cache);
	                    break;
	                } else {

	                    dateHtml = '';
	                    date = new Date(parseInt(cache.msgtime, 10)).__getOnlyDate();
	                    if (date !== dateCache) {
	                        dateCache = date;
	                        dateHtml = (0, _$JuicerRoot2.default)(_template2.default.dateSplit, { date: date });
	                        this.dateCache = dateCache;
	                    }

	                    var h = cache.html;

	                    if (needSpliter && this.spliter && !this.spliterRendered) {
	                        var next = _that.MsgList[i + 1];
	                        if (cache.msgtime < this.spliter.msgtime && (!next || next.msgtime > this.spliter.msgtime)) {
	                            h += this.spliter.html;
	                        }
	                    }

	                    html += prevHtml;
	                    prevHtml = dateHtml + h;
	                    !force && delete this.MsgIdInCache[cache.msgid];
	                }
	            }
	            // 如果不是强制的临时转换
	            if (!force && i) {
	                // 留一条可信的在列表中
	                i--;
	                this.MsgList.splice(0, i);
	                this.MsgList.length && (this.MsgIdInCache[this.MsgList[0].msgid] = 1);
	                this.HTML += html;
	            }
	            force && (html += prevHtml);

	            return html;
	        }

	        //getFirstRealMsg(key) {
	        //  let found = false;
	        //  let firstMsg;
	        //  let i = 0;
	        //
	        //  while(this.MsgList[i] && !found) {
	        //    Log.blue('getFirstRealMsg', i, found, this.MsgList[i].split, Object.assign({},this.MsgList[i]));
	        //    if(!this.MsgList[i].split && this.MsgList[i][key]) {
	        //      found = true;
	        //      firstMsg = this.MsgList[i];
	        //      break;
	        //    }else {
	        //      i++;
	        //    }
	        //  }
	        //
	        //  Log.green('firstMsg', firstMsg);
	        //
	        //  return firstMsg;
	        //}

	        /**
	         * 运行转换成DOM时需要运行的一些callback
	         * 当callback的回调返回时如果不是当前Контактное лицо了,仍然需要存下来
	         */

	    }, {
	        key: 'runExtra',
	        value: function runExtra() {
	            var _that = this;
	            var cid = this.cid;

	            this.MsgCallbackList = this.MsgCallbackList.concat(this.UnresolvedCallbackList);
	            this.UnresolvedCallbackList = [];

	            this.MsgCallbackList.forEach(function (callback) {
	                callback(function () {
	                    if (_util2.default.getUid(_window2.default.conversationID) !== cid) {
	                        _that.UnresolvedCallbackList.push(callback);
	                        return false;
	                    }
	                    return true;
	                });
	            });

	            this.MsgCallbackList = [];
	        }
	    }, {
	        key: 'setCredible',
	        value: function setCredible(credible) {
	            this.MsgList.forEach(function (cache) {
	                cache.credible != credible && (cache.credible = credible);
	            });

	            return this;
	        }

	        /**
	         * 获取最后一次convertToDOM获得的DOM
	         * @returns {null|DocumentFragment|*}
	         */

	    }, {
	        key: 'getTempConvertDOM',
	        value: function getTempConvertDOM() {
	            return this.TempConvertDOM;
	        }
	    }, {
	        key: 'clearCache',
	        value: function clearCache() {
	            var msgList = [].concat(_toConsumableArray(this.MsgList));
	            var html = this.HTML;
	            //this.spliter = null;
	            this.clear();
	            var h = this.container.innerHTML;
	            //console.log(h);
	            this.backToList(msgList, html);
	        }
	    }, {
	        key: 'backToList',
	        value: function backToList(list, html) {
	            var _this5 = this;

	            var i = list.length;
	            var msgList = [].concat(_toConsumableArray(list));
	            var item = void 0;

	            this.isClose = true;
	            if (i > 20) {
	                msgList = list.splice(list.length - 20, list.length - 1);
	            } else {
	                //msgList = [];
	                //i = 0;
	                var div = document.createElement('div');
	                div.innerHTML = html;

	                var el = div.lastChild;

	                while (el) {
	                    if (i >= 20 || !el) {
	                        break;
	                    }

	                    if (el.classList && el.id && !el.classList.contains('history-split')) {
	                        item = {
	                            msgid: el.id,
	                            msgtime: el.getAttribute('data-time'),
	                            credible: false,
	                            html: el.outerHTML
	                        };

	                        msgList.unshift(item);
	                        i++;
	                    }
	                    div.removeChild(el);
	                    el = div.lastChild;
	                }
	            }

	            msgList.forEach(function (msg, index) {
	                _this5.MsgIdInCache[msg.msgid] = 1;
	                _this5.MsgIdOnScreen[msg.msgid] = 1;
	            });

	            console.log(msgList);

	            this.MsgList = msgList;
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            //if(this.isClose) return;
	            var con = this.container;
	            this.spliterRendered = false;
	            var msgList = this.MsgList;
	            var m = void 0;

	            // 遍历还在缓存中的消息id
	            for (var id in this.MsgIdInCache) {
	                m = document.getElementById(id);

	                if (m.previousElementSibling && m.previousElementSibling.classList.contains('imui-msg-date-split')) {
	                    con.removeChild(m.previousElementSibling);
	                }

	                if (!m) continue;

	                // 找到在缓存, 重新获取缓存中的消息的html, 以防消息有什么变动
	                for (var i = 0, l = msgList.length; i < l; i++) {
	                    if (msgList[i].msgid === id) {
	                        msgList[i].html = m.outerHTML;
	                        break;
	                    }
	                }
	                // 移除消息元素
	                con.removeChild(m);
	            }

	            this.prevMsg = null;
	            if (!this.isClose) {
	                // 缓存已上屏的消息html
	                this.HTML = this.container.innerHTML;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.isClose = false;
	            this.container.innerHTML = this.HTML + this.clearCredibleInMsgList(1, 1);
	            this.runExtra();
	            var h = [].concat(_toConsumableArray(this.container.querySelectorAll('.history-split')));
	            h.pop();

	            h.forEach(function (el) {
	                el.parentNode.removeChild(el);
	            });
	        }

	        /**
	         * 插到container的后面
	         * @param f
	         */

	    }, {
	        key: 'append',
	        value: function append(f) {
	            this.container.appendChild(f);
	            this.runExtra();

	            if (this.msgLen > this.MAX_MSG_LENGTH) {
	                //if(this.msgLen > window.MAX_MSG_LENGTH) {
	                var i = this.msgLen - this.MAX_MSG_LENGTH;
	                //let i = this.msgLen - window.MAX_MSG_LENGTH;
	                var el = this.container.firstChild;

	                while (el) {
	                    if (i <= 0) break;
	                    this.container.removeChild(el);
	                    i--;

	                    el = this.container.firstChild;
	                }

	                el = this.container.firstChild;
	                var msgid = el.id;
	                var msgtime = el.getAttribute('data-time');
	                var cache = Cache.get(this.cid);

	                cache.FirstMsg && Cache.set(this.cid, {
	                    FirstMsg: { msgid: msgid, msgtime: msgtime }
	                });

	                this.msgLen = this.MAX_MSG_LENGTH;
	                //this.msgLen = window.MAX_MSG_LENGTH;
	            }
	        }

	        /**
	         * 插到container的最前面
	         * @param f
	         */

	    }, {
	        key: 'prepend',
	        value: function prepend(f) {
	            this.container.insertBefore(f, this.container.firstChild);
	            this.runExtra();
	        }
	    }, {
	        key: 'renderOver',
	        value: function renderOver() {
	            _convert2.default.over(_window2.default.conversationID);
	        }
	    }]);

	    return MessageManager;
	}();

	exports.default = MessageManager;
	module.exports = exports['default'];

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _$ConvertRoot = __webpack_require__(234);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	// import CUM from '../coms/conversationUsersManager';

	_$ConvertRoot.Callbacks.setCallbacks('DEFAULT', function (data) {
	  if (!data || !data.cid) return;

	  // console.log('DEFAULT', data);

	  // CUM.setCidUser(Util.getUid(data.cid), Util.getUid(data.from));

	  if (data.readflag === 1 || data.isFail) return;

	  _util2.default.setCidType(data.cid);

	  if (data.cid.type !== _constants2.default.Other.TYPE.SINGLE) return;

	  if (!data.svrtime) return;

	  _$ConvertRoot.Action.msgReadStatus.push(data.cid, data);
	}); /**
	     * Created by neitherzhu on 2016/12/6.
	     * 消息解析器
	     */

	_$ConvertRoot.Convert.addOverCallback(function (cid) {
	  _$ConvertRoot.Action.msgReadStatus.action(cid);
	});

	exports.default = _$ConvertRoot.Convert;
	module.exports = exports['default'];

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _plugins = __webpack_require__(260);

	var _plugins2 = _interopRequireDefault(_plugins);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 获取离线消息
	 */
	var Cache = _$BaseRoot.Base.Cache,
	    Log = _$BaseRoot.Base.Log;

	var getOfflineMsg = new _$BaseRoot.Base.ActionCreator();

	getOfflineMsg.actionType = 'async';

	getOfflineMsg.doAsync = function (context, contact) {
	  var uid = _util2.default.getUid(contact);
	  var cache = Cache.get(uid);
	  var messageManager = cache.messageManager;

	  context.messageManager = messageManager;
	  return new Promise(function (resolve, reject) {
	    _sdk2.default.getOfflineMsg(contact).then(function (data) {

	      if (!data || !data.length) return resolve();

	      messageManager.insert(data, false);

	      if (uid !== _util2.default.getUid(_window2.default.conversationID)) return reject('not current conversation');

	      var els = [],
	          tempDom = messageManager.getTempConvertDOM();

	      if (!tempDom) return resolve();

	      for (var i = 0, l = tempDom.childNodes.length; i < l; i++) {
	        els.push(tempDom.childNodes[i]);
	      }

	      messageManager.append(tempDom);

	      // 缓存第一条消息
	      //!cache.isFirstOk && Cache.set(uid, {
	      //  FirstMsg: { msgid: list[0].msgid, msgtime: list[0].msgtime }
	      //});

	      resolve({ list: data, els: els });
	    }).catch(function (err) {
	      reject(err);
	    });
	  });
	};

	getOfflineMsg.after(function (context, data) {

	  Log.green('getoffline isbottom:', _window2.default.isBottom);

	  _window2.default.isBottom && _util2.default.scrollToBottom(_window2.default.container, data ? data.els : null);

	  context.messageManager.renderOver();

	  if (!data) return;
	  var plugin = _plugins2.default.getPlugin('newMsgTip');
	  plugin && plugin[_window2.default.isBottom ? 'hide' : 'show']();
	});

	getOfflineMsg.error = function (err) {
	  console.error('Action getOfflineMsg Error', err);
	};

	exports.default = getOfflineMsg;
	module.exports = exports['default'];

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _event = __webpack_require__(255);

	var _event2 = _interopRequireDefault(_event);

	var _index = __webpack_require__(232);

	var _index2 = _interopRequireDefault(_index);

	var _plugins = __webpack_require__(260);

	var _plugins2 = _interopRequireDefault(_plugins);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/6.
	 * 获取在线未读消息
	 */
	var Cache = _$BaseRoot.Base.Cache,
	    Log = _$BaseRoot.Base.Log;

	var getNewMsg = new _$BaseRoot.Base.ActionCreator();

	getNewMsg.actionType = 'async';

	getNewMsg.doAsync = function (context, contact) {
	  var uid = _util2.default.getUid(contact);
	  var cache = Cache.get(uid);
	  var messageManager = cache.messageManager;

	  context.param = {
	    cid: contact
	  };
	  context.messageManager = messageManager;

	  return new Promise(function (resolve, reject) {
	    _sdk2.default.getNewMsg(contact).then(function (data) {

	      var list = data && data.msgs;

	      if (!list || !list.length) return resolve();

	      // 超过客户端缓存的限制, 清除所有上屏消息与缓存
	      data.outofcache && messageManager.clear() && (_window2.default.container.innerHTML = '');

	      // 首次上屏为不可信消息 其他都是可信消息
	      messageManager.insert(list, !!cache.isFirstOk, true);

	      if (uid !== _util2.default.getUid(_window2.default.conversationID)) return reject('not current conversation');

	      var els = [],
	          tempDom = messageManager.getTempConvertDOM();

	      if (!tempDom) return resolve();

	      for (var i = 0, l = tempDom.childNodes.length; i < l; i++) {
	        els.push(tempDom.childNodes[i]);
	      }

	      messageManager.append(tempDom);
	      //
	      //if(!cache.isFirstOk && !cache.FirstMsg) {
	      //  Cache.set(uid, {
	      //    FirstMsg: { msgid: list[0].msgid, msgtime: list[0].msgtime }
	      //  });
	      //}
	      //context.param.msgtime = list[0].msgtime;
	      //context.param.msgid = list[0].msgid;

	      resolve({ list: data, els: els });
	    }).catch(function (err) {
	      reject(err);
	    });
	  });
	};

	getNewMsg.after(function (context, data) {
	  var param = context.param;
	  var cache = Cache.get(_util2.default.getUid(param.cid));

	  !cache.isFirstOk && !cache.messageManager.MsgList.length && _index2.default.getLocalHistoryMsg.action(param);
	  (!cache.isFirstOk || cache.isNetReconnected) && _index2.default.getRemoteHistoryMsg.action(param);
	  cache.isFirstOk && !cache.isNetReconnected && _event2.default.emit(_constants2.default.Event.CONVERSATION_CHANGE_OVER);
	});

	getNewMsg.after(function (context, data) {

	  Log.green('getnew isBottom', _window2.default.isBottom);

	  _window2.default.isBottom && _util2.default.scrollToBottom(_window2.default.container, data ? data.els : null);
	  context.messageManager.renderOver();
	  if (!data) return;

	  var plugin = _plugins2.default.getPlugin('newMsgTip');
	  plugin && plugin[_window2.default.isBottom ? 'hide' : 'show']();
	});

	getNewMsg.error = function (err) {
	  console.error('Action getNewMsg Error', err);
	};

	exports.default = getNewMsg;
	module.exports = exports['default'];

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Cache = _$BaseRoot.Base.Cache; /**
	                                    * Created by neitherzhu on 2016/12/6.
	                                    * 获取本地历史消息
	                                    */

	var getLocalHistoryMsg = new _$BaseRoot.Base.ActionCreator();

	getLocalHistoryMsg.actionType = 'async';

	getLocalHistoryMsg.before(function (context, param) {
	  !param.msgid && (param.msgid = '-1');
	  !param.msgtime && (param.msgtime = '-1');
	  !param.count && (param.count = _constants2.default.Other.fetchMsgCount);
	});

	getLocalHistoryMsg.doAsync = function (context, param) {
	  var contact = param.cid;
	  var uid = _util2.default.getUid(contact);
	  var cache = Cache.get(uid);
	  var messageManager = cache.messageManager;

	  return new Promise(function (resolve, reject) {
	    _sdk2.default.getLocalHistoryMsg(param).then(function (data) {

	      if (!data || !data.length) return reject('msg is empty!');

	      //let hasNextPage = data.length >= param.count;

	      messageManager.insert(data, false);

	      if (uid !== _util2.default.getUid(_window2.default.conversationID)) return reject('not current user');

	      var els = [];
	      var tempDom = messageManager.getTempConvertDOM();

	      if (!tempDom) return reject();

	      for (var i = 0, l = tempDom.childNodes.length; i < l; i++) {
	        els.push(tempDom.childNodes[i]);
	      }

	      messageManager.prepend(tempDom);

	      //hasNextPage && Cache.set(uid, { FirstMsg: { msgid: data[0].msgid, msgtime: data[0].msgtime } });

	      resolve({ list: data, els: els });
	    }).catch(function (err) {
	      reject(err);
	    });
	  });
	};

	getLocalHistoryMsg.after(function (context, data) {
	  if (!data) return;

	  _util2.default.scrollToBottom(_window2.default.container, data.els);
	});

	getLocalHistoryMsg.error = function (err) {
	  _util2.default.scrollToBottom(_window2.default.container);
	  console.error('Action getLocalHistoryMsg Error', err);
	};

	exports.default = getLocalHistoryMsg;
	module.exports = exports['default'];

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$ConvertRoot = __webpack_require__(234);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _event = __webpack_require__(255);

	var _event2 = _interopRequireDefault(_event);

	var _index = __webpack_require__(232);

	var _index2 = _interopRequireDefault(_index);

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
	   * 获取漫游历史消息
	   */

	var Cache = _$BaseRoot.Base.Cache;
	var getRemoteHistoryMsg = new _$BaseRoot.Base.ActionCreator();

	getRemoteHistoryMsg.actionType = 'async';

	getRemoteHistoryMsg.before(function (context, param) {
	  !param.msgid && (param.msgid = '-1');
	  !param.msgtime && (param.msgtime = '-1');
	  !param.count && (param.count = _constants2.default.Other.fetchMsgCount);
	});

	getRemoteHistoryMsg.doAsync = function (context, param) {
	  var contact = param.cid;
	  var uid = _util2.default.getUid(contact);
	  var cache = Cache.get(uid);
	  var isNetReconnected = cache.isNetReconnected;
	  var messageManager = cache.messageManager;

	  context.messageManager = messageManager;
	  return new Promise(function (resolve, reject) {
	    _sdk2.default.getRemoteHistoryMsg(param).then(function (data) {

	      var c = {};
	      !cache.isFirstOk && (c.isFirstOk = true);
	      isNetReconnected && (c.isNetReconnected = false);

	      if (!data || !data.length) {
	        Cache.set(uid, c);
	        messageManager.setCredible(true).clearCredibleInMsgList();
	        return resolve();
	      }

	      var hasNextPage = data.length >= param.count;
	      var needToUpdate = messageManager.checkAndInsert(data, true);

	      if (uid !== _util2.default.getUid(_window2.default.conversationID)) {
	        return reject('not current user');
	      }

	      var els = [];

	      !needToUpdate && messageManager.runExtra();
	      if (needToUpdate) {
	        messageManager.render();
	        els = [].concat(_toConsumableArray(_window2.default.container.querySelectorAll('.' + _constants2.default.CLS.MSG_CONTAINER)));
	      }
	      // 如果电线重连过
	      // 如果是群
	      // 需要重新获取没有全部已读的@消息的已读未读人数
	      else if (cache.isNetReconnected && param.cid.type == 2) {
	          var ids = {},
	              items = [];
	          [].concat(_toConsumableArray(_window2.default.container.querySelectorAll('.' + _constants2.default.CLS.AT_MSG))).forEach(function (el) {
	            el = _util2.default.parents(el, _constants2.default.CLS.MSG_CONTAINER);
	            if (el && el.id && !ids[el.id] && !el.classList.contains(_constants2.default.CLS.COMPLETED_AT_MSG)) {
	              ids[el.id] = 1;
	            }
	          });

	          Object.keys(ids).forEach(function (id) {
	            items.push({
	              userid: _window2.default.loginID,
	              msgid: id
	            });
	          });

	          items.length && _$ConvertRoot.Action.getAtMsgReadState.action(param.cid, items);
	        }

	      //if(!isNetReconnected) {
	      c.hasNextPage = hasNextPage;
	      //c.FirstMsg = hasNextPage ? { msgid: data[0].msgid, msgtime: data[0].msgtime } : null;
	      //}

	      Cache.set(uid, c);

	      context.cache = Cache.get(uid);

	      resolve({ list: data, els: els });
	    }).catch(function (err) {
	      messageManager.setCredible(true).clearCredibleInMsgList();

	      var c = {};
	      !cache.isFirstOk && (c.isFirstOk = true);
	      isNetReconnected && (c.isNetReconnected = false);
	      Cache.set(uid, c);

	      _event2.default.emit(_constants2.default.Event.CONVERSATION_CHANGE_OVER);
	      reject(err);
	    });
	  });
	};

	getRemoteHistoryMsg.after(function (context, data) {
	  _event2.default.emit(_constants2.default.Event.CONVERSATION_CHANGE_OVER);
	});

	getRemoteHistoryMsg.after(function (context, data) {

	  _util2.default.scrollToBottom(_window2.default.container, data ? data.els : null);
	  context.messageManager.renderOver();

	  if (context.cache && context.cache.hasNextPage && _window2.default.container.scrollHeight <= _window2.default.container.clientHeight) {
	    _index2.default.getMoreHistoryMsg.action({ cid: _window2.default.conversationID });
	  }
	});

	getRemoteHistoryMsg.error = function (err) {
	  _util2.default.scrollToBottom(_window2.default.container);
	  console.error('Action getRemoteHistoryMsg Error', err);
	};

	exports.default = getRemoteHistoryMsg;
	module.exports = exports['default'];

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _plugins = __webpack_require__(260);

	var _plugins2 = _interopRequireDefault(_plugins);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/7.
	 * 接收新消息
	 */
	var Cache = _$BaseRoot.Base.Cache;

	var receiveMsg = new _$BaseRoot.Base.ActionCreator();

	receiveMsg.actionType = 'async';

	receiveMsg.doAsync = function (context, contact) {
	  var uid = _util2.default.getUid(contact);
	  var cache = Cache.get(uid);
	  var messageManager = cache.messageManager;

	  context.messageManager = messageManager;
	  return new Promise(function (resolve, reject) {
	    _sdk2.default.getNewMsg(contact).then(function (data) {

	      var list = data && data.msgs;

	      if (!list || !list.length) return resolve();

	      // 超过客户端缓存的限制, 清除所有上屏消息与缓存
	      data.outofcache && messageManager.clear() && (_window2.default.container.innerHTML = '');

	      messageManager.insert(list, !!cache.isFirstOk);

	      if (uid !== _util2.default.getUid(_window2.default.conversationID)) return reject();

	      var els = [],
	          tempDom = messageManager.getTempConvertDOM();

	      if (!tempDom) return resolve();

	      for (var i = 0, l = tempDom.childNodes.length; i < l; i++) {
	        els.push(tempDom.childNodes[i]);
	      }

	      messageManager.append(tempDom);

	      resolve({ list: data, els: els });
	    }).catch(function (err) {
	      reject(err);
	    });
	  });
	};

	receiveMsg.after(function (context, data) {
	  if (!data) return;

	  _window2.default.isBottom && _util2.default.scrollToBottom(_window2.default.container, data.els);

	  context.messageManager.renderOver();

	  var plugin = _plugins2.default.getPlugin('newMsgTip');

	  plugin && plugin[_window2.default.isBottom ? 'hide' : 'show']();
	});

	receiveMsg.error = function (err) {
	  console.error('Action getNewMsg Error', err);
	};

	exports.default = receiveMsg;
	module.exports = exports['default'];

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _plugins = __webpack_require__(260);

	var _plugins2 = _interopRequireDefault(_plugins);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/7.
	 * 获取自己发送的消息
	 */
	var Cache = _$BaseRoot.Base.Cache;

	var getSentMsg = new _$BaseRoot.Base.ActionCreator();

	getSentMsg.actionType = 'async';

	getSentMsg.doAsync = function (context, contact) {
	  var uid = _util2.default.getUid(contact);
	  var cache = Cache.get(uid);
	  var messageManager = cache.messageManager;

	  context.messageManager = messageManager;
	  return new Promise(function (resolve, reject) {
	    _sdk2.default.getNewMsg(contact).then(function (data) {

	      var list = data && data.msgs;

	      if (!list || !list.length) return resolve();

	      // 超过客户端缓存的限制, 清除所有上屏消息与缓存
	      data.outofcache && messageManager.clear() && (_window2.default.container.innerHTML = '');

	      messageManager.insert(list, true);

	      if (uid !== _util2.default.getUid(_window2.default.conversationID)) return reject();

	      var els = [],
	          tempDom = messageManager.getTempConvertDOM();

	      if (!tempDom) return resolve();

	      for (var i = 0, l = tempDom.childNodes.length; i < l; i++) {
	        els.push(tempDom.childNodes[i]);
	      }

	      messageManager.append(tempDom);

	      resolve({ list: data, els: els });
	    }).catch(function (err) {
	      reject(err);
	    });
	  });
	};

	getSentMsg.after(function (context, data) {
	  if (!data) return;

	  _util2.default.scrollToBottom(_window2.default.container, data.els);

	  context.messageManager.renderOver();
	  var plugin = _plugins2.default.getPlugin('newMsgTip');

	  plugin && plugin.hide();
	});

	getSentMsg.error = function (err) {
	  console.error('Action getNewMsg Error', err);
	};

	exports.default = getSentMsg;
	module.exports = exports['default'];

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _index = __webpack_require__(232);

	var _index2 = _interopRequireDefault(_index);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _conversationManager = __webpack_require__(256);

	var _conversationManager2 = _interopRequireDefault(_conversationManager);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/8.
	 * 窗口关闭
	 */
	var Cache = _$BaseRoot.Base.Cache;

	var conversationClose = new _$BaseRoot.Base.ActionCreator();
	conversationClose.doSync = function (context, data) {
	  // 全关
	  if (data.closeall === 1) {
	    _index2.default.conversationChange.action();
	    Cache.clear();
	    _window2.default.container.innerHTML = '';
	  }
	  // 关闭某个联系对象
	  else {
	      var uid = _util2.default.getUid(data.cid);
	      var cache = Cache.get(uid);
	      var messageManager = cache.messageManager;

	      Cache.clear(uid);
	      messageManager.clearCache();
	      Cache.set(uid, {
	        messageManager: messageManager
	      });

	      // 只缓存单聊
	      _util2.default.setCidType(data.cid).type === _constants2.default.Other.TYPE.SINGLE && _conversationManager2.default.add(uid);

	      if (uid === _util2.default.getUid(_window2.default.conversationID)) {
	        _index2.default.conversationChange.action();
	        _window2.default.container.innerHTML = '';
	      }
	    }
	};

	exports.default = conversationClose;
	module.exports = exports['default'];

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _event = __webpack_require__(255);

	var _event2 = _interopRequireDefault(_event);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _plugins = __webpack_require__(260);

	var _plugins2 = _interopRequireDefault(_plugins);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/8.
	 * 断网
	 */
	var netDisconnect = new _$BaseRoot.Base.ActionCreator();

	netDisconnect.doSync = function () {

	  _event2.default.emit(_constants2.default.Event.NET_ERROR, true);
	};

	netDisconnect.after(function () {
	  var scroll = _plugins2.default.getPlugin('scroll');

	  scroll && scroll.disableScroll();
	});

	exports.default = netDisconnect;
	module.exports = exports['default'];

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _event = __webpack_require__(255);

	var _event2 = _interopRequireDefault(_event);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _index = __webpack_require__(232);

	var _index2 = _interopRequireDefault(_index);

	var _plugins = __webpack_require__(260);

	var _plugins2 = _interopRequireDefault(_plugins);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/8.
	 * 网络重连
	 */
	var Cache = _$BaseRoot.Base.Cache;

	var netReconnect = new _$BaseRoot.Base.ActionCreator();

	netReconnect.before(function () {
	  var scroll = _plugins2.default.getPlugin('scroll');

	  scroll && scroll.enableScroll();
	});

	netReconnect.doSync = function () {

	  Cache.setAll({ isNetReconnected: true });
	  _event2.default.emit(_constants2.default.Event.NET_ERROR, false);
	};

	netReconnect.after(function () {
	  if (!_window2.default.conversationID) return;

	  _index2.default.getOfflineMsg.action(_window2.default.conversationID);
	  _index2.default.getNewMsg.action(_window2.default.conversationID);
	});

	exports.default = netReconnect;
	module.exports = exports['default'];

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

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
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _template = __webpack_require__(247);

	var _template2 = _interopRequireDefault(_template);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var enteringStatusChange = new _$BaseRoot.Base.ActionCreator(); /**
	                                                                 * Created by neitherzhu on 2016/12/8.
	                                                                 * 输入状态变更
	                                                                 */

	enteringStatusChange.doSync = function (context, data) {

	  var uid = _util2.default.getUid(data.cid);
	  // 如果不是当前联系对象, 需要缓存?
	  if (uid !== _util2.default.getUid(_window2.default.conversationID)) return;

	  var el = document.getElementById(_constants2.default.EL_ID.ENTERING);
	  // 输入中
	  if (data.value == 0) {
	    el ? el.classList.remove(_constants2.default.CLS.HIDDEN) : document.getElementById(_constants2.default.EL_ID.CONTAINER).parentNode.appendChild(_util2.default.createFragment(_template2.default.entering));
	  }
	  // 输入结束
	  else if (data.value == 1) {
	      el && el.classList.add(_constants2.default.CLS.HIDDEN);
	    }
	};

	exports.default = enteringStatusChange;
	module.exports = exports['default'];

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$ConvertRoot = __webpack_require__(234);

	var _$JuicerRoot = __webpack_require__(9);

	var _$JuicerRoot2 = _interopRequireDefault(_$JuicerRoot);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _index = __webpack_require__(232);

	var _index2 = _interopRequireDefault(_index);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _template = __webpack_require__(247);

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
	   */

	var Cache = _$BaseRoot.Base.Cache;

	var sendMsgStatusChange = new _$BaseRoot.Base.ActionCreator();

	sendMsgStatusChange.doSync = function (context, data) {

	    var msgEl = document.getElementById(data.msgid);

	    if (!msgEl) return;

	    var stateEl = msgEl.querySelector('.' + _constants2.default.CLS.MSG_STATUS_CONTAINER);
	    // 消息发送成功
	    if (data.code === 0) {

	        if (stateEl) {
	            var tpl = (0, _$JuicerRoot2.default)(_template2.default.menuTrigger, {
	                svrtime: data.svrtime
	            });
	            var menuTrigger = _util2.default.createFragment(tpl);
	            stateEl.parentNode.insertBefore(menuTrigger, stateEl);
	        }

	        var type = _window2.default.conversationID.type;

	        if (type == _constants2.default.Other.TYPE.SINGLE) {
	            // 开启已读未读状态时间比消息时间小的，说明此条消息是需要获取是否已读的状态
	            if (!_window2.default.msgReadOpenTime || _window2.default.msgReadOpenTime <= data.svrtime) {
	                //stateEl.innerHTML = juicer(Template.msgReadStatus, { tpl: Constant.I18N[Constant.LANGUAGE]['AT_MSG_UNREAD'] });
	                _$ConvertRoot.Action.getMsgReadStatus.action(data.cid, [{
	                    msgid: data.msgid,
	                    msgtime: data.svrtime,
	                    svrtime: data.svrtime,
	                    isSelf: true
	                }]);
	            }
	        }
	        // 判断发送成功的消息是否在@消息里面
	        else if ((_window2.default.conversationID.type == _constants2.default.Other.TYPE.TRIBE || _window2.default.conversationID.type == _constants2.default.Other.TYPE.DISCUSSION) && Cache.get('TO_BE_AT_MSG')[data.msgid]) {
	                if (data.subcode === 0) {
	                    _$ConvertRoot.Action.getAtMsgReadState.action(data.cid, [{
	                        userid: _window2.default.loginID,
	                        msgid: data.msgid
	                    }]);
	                }
	                // subcode不为0表示群@消息未发送成功
	                else {
	                        // 移除@消息的样式
	                        [].concat(_toConsumableArray(msgEl.querySelectorAll('.' + _constants2.default.CLS.AT_MSG_WITH_STYLE))).forEach(function (el) {
	                            el.classList.remove(_constants2.default.CLS.AT_MSG_WITH_STYLE);
	                        });

	                        Cache.clearInKey('TO_BE_AT_MSG', data.msgid);
	                    }
	            }
	        // 发送成功移除消息样式
	        stateEl && stateEl.classList.remove('J_msgSending');
	    }
	    // 消息发送失败
	    else {
	            if (data.code == 8 && data.subcode == 18874371) return;
	            stateEl && (stateEl.innerHTML = (0, _$JuicerRoot2.default)(_template2.default.errorStatus, { cls: _constants2.default.CLS.RESEND_BTN }));
	        }
	};

	sendMsgStatusChange.after(function (context, data) {
	    if (data.code === 0 && data.svrtime !== '0') {
	        var msg = document.getElementById(data.msgid);
	        if (!msg) return;

	        var trigger = msg.querySelector('.bubble-menu-trigger');

	        if (!trigger) return;

	        trigger.setAttribute('data-svrtime', data.svrtime);
	    }
	});

	exports.default = sendMsgStatusChange;
	module.exports = exports['default'];

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$IMSDKRoot = __webpack_require__(2);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$BaseRoot = __webpack_require__(3);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2016/12/8.
	 * 触发缓存的事件
	 */
	var Cache = _$BaseRoot.Base.Cache;

	var fireCacheEvent = new _$BaseRoot.Base.ActionCreator();

	fireCacheEvent.doSync = function () {

	  var uid = _util2.default.getUid(_window2.default.conversationID);
	  var cache = Cache.getExactly(uid);

	  if (!cache) return;

	  var unResolveEvents = cache.unResolveEvents;

	  if (unResolveEvents && unResolveEvents.length) {
	    unResolveEvents.forEach(function (data) {
	      _$IMSDKRoot2.default.fire(data.event, data.data);
	    });

	    Cache.clearInKey(uid, 'unResolveEvents');
	  }
	};

	exports.default = fireCacheEvent;
	module.exports = exports['default'];

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _sdk = __webpack_require__(235);

	var _sdk2 = _interopRequireDefault(_sdk);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _event = __webpack_require__(255);

	var _event2 = _interopRequireDefault(_event);

	var _index = __webpack_require__(232);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Cache = _$BaseRoot.Base.Cache; /**
	                                    * Created by neitherzhu on 2016/12/9.
	                                    * 获取更多历史消息
	                                    */

	var getMoreHistoryMsg = new _$BaseRoot.Base.ActionCreator();

	getMoreHistoryMsg.actionType = 'async';
	getMoreHistoryMsg.pending = false;

	getMoreHistoryMsg.before(function (context, param) {

	  if (this.pending || !param || !param.cid) return false;

	  var cache = Cache.get(_util2.default.getUid(param.cid));

	  if (!cache.hasNextPage) return false;

	  this.pending = true;

	  var i = 0;
	  var firstMsg = _window2.default.container.childNodes[i];

	  while (!firstMsg.tagName || !firstMsg.getAttribute('data-time')) {
	    i++;
	    firstMsg = _window2.default.container.childNodes[i];
	  }

	  if (firstMsg) {
	    param.msgid = firstMsg.id;
	    param.msgtime = firstMsg.getAttribute('data-time');
	  }

	  param.count || (param.count = _constants2.default.Other.fetchMsgCount);
	});

	getMoreHistoryMsg.doAsync = function (context, param) {
	  var contact = param.cid;
	  var uid = _util2.default.getUid(contact);
	  var cache = Cache.get(uid);
	  var messageManager = cache.messageManager;

	  context.messageManager = messageManager;
	  context.msgid = param.msgid;

	  return new Promise(function (resolve, reject) {

	    if (cache.isNetReconnected) {
	      return reject();
	    }

	    _sdk2.default.getRemoteHistoryMsg(param).then(function (data) {

	      if (!data || !data.length) {
	        Cache.set(uid, { hasNextPage: false });
	        return reject('msg is empty!');
	      }

	      var hasNextPage = data.length >= param.count;

	      if (uid !== _util2.default.getUid(_window2.default.conversationID)) return reject();

	      messageManager.insertBefore(data);

	      var els = [];
	      var tempDom = messageManager.getTempConvertDOM();

	      if (!tempDom) return reject();

	      for (var i = 0, l = tempDom.childNodes.length; i < l; i++) {
	        els.push(tempDom.childNodes[i]);
	      }

	      messageManager.prepend(tempDom);

	      Cache.set(uid, {
	        //FirstMsg: hasNextPage ? { msgid: data[0].msgid, msgtime: data[0].msgtime } : null
	        hasNextPage: hasNextPage
	      });

	      resolve({ list: data, els: els });
	    }).catch(function (err) {
	      reject(err);
	    });
	  });
	};

	getMoreHistoryMsg.after(function () {
	  this.pending = false;
	});

	getMoreHistoryMsg.after(function (context, data) {
	  if (!data || !data.list || !data.els) return;

	  _util2.default.scrollToMsg(data.els, context.msgid);

	  context.messageManager.renderOver();
	});

	getMoreHistoryMsg.error = function (err) {
	  this.pending = false;
	  console.error('Action getMoreHistoryMsg Error', err);
	};

	exports.default = getMoreHistoryMsg;
	module.exports = exports['default'];

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _$ConvertRoot = __webpack_require__(234);

	var _index = __webpack_require__(232);

	var _index2 = _interopRequireDefault(_index);

	var _plugins = __webpack_require__(260);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _constants = __webpack_require__(236);

	var _constants2 = _interopRequireDefault(_constants);

	var _event = __webpack_require__(255);

	var _event2 = _interopRequireDefault(_event);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Util = _$BaseRoot.Base.Util; /**
	                                  * Created by neitherzhu on 2016/12/7.
	                                  * 初始化Action
	                                  */

	var start = new _$BaseRoot.Base.ActionCreator();

	start.doSync = function () {
	  _plugins2.default.init({ container: _window2.default.container });
	  _index2.default.getCurrentLoginID.action();
	};

	start.after(function () {
	  var scroll = _plugins2.default.getPlugin('scroll');

	  _event2.default.on('SCROLL_REACH_TOP', function () {
	    _index2.default.getMoreHistoryMsg.action({ cid: _window2.default.conversationID });
	  });

	  _event2.default.on('SCROLLING', function (data) {
	    var isBottom = data.isBottom;
	    var current = _window2.default.conversationID;

	    _window2.default.isBottom = isBottom;

	    if (current) {
	      // 如果是群, 在滚动时需要去判断是否应该发送已读回执
	      if (current.type == _constants2.default.Other.TYPE.TRIBE) {
	        _$ConvertRoot.Action.setAtMsgReadState.action(current);
	      }
	      // 如果是单聊
	      else if (current.type == _constants2.default.Other.TYPE.SINGLE) {
	          _$ConvertRoot.Action.setMsgReadStatus.action(current);
	        }
	    }
	  });

	  _event2.default.on(_constants2.default.Event.CONVERSATION_CHANGE_START, function () {
	    var scroll = _plugins2.default.getPlugin('scroll');

	    scroll && scroll.setSwitching(true);
	  });

	  _event2.default.on(_constants2.default.Event.CONVERSATION_CHANGE_OVER, function () {
	    var scroll = _plugins2.default.getPlugin('scroll');

	    scroll && scroll.setSwitching(false);
	  });

	  //Win.container.addEventListener('mouseout', ev => {
	  //  console.log(ev.target);
	  //  let parent;
	  //  if(parent = Util.parents(ev.target, 'J_msg')) {
	  //    parent.querySelector('.menu-wrap').blur();
	  //  }
	  //});
	});

	exports.default = start;
	module.exports = exports['default'];

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _$BaseRoot = __webpack_require__(3);

	var _index = __webpack_require__(232);

	var _index2 = _interopRequireDefault(_index);

	var _util = __webpack_require__(246);

	var _util2 = _interopRequireDefault(_util);

	var _window = __webpack_require__(244);

	var _window2 = _interopRequireDefault(_window);

	var _$ConvertRoot = __webpack_require__(234);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Log = _$BaseRoot.Base.Log; /**
	                                * Created by neitherzhu on 2017/2/16.
	                                */

	var msgRecall = new _$BaseRoot.Base.ActionCreator();

	msgRecall.doSync = function (context, data) {
	  Log.red('msgrecall', data);

	  var convert = '';
	  var el = void 0;
	  data.withdraws.forEach(function (msg) {
	    el = document.getElementById(msg.msgid);
	    if (!el) return;
	    msg.msgtype = 10000;
	    convert = _$ConvertRoot.Convert.convert('chat', msg, 'msgtype');

	    el.outerHTML = convert.html;

	    _window2.default.isBottom && _util2.default.scrollToBottom(_window2.default.container);

	    // 如果是文件, 并且有获取文件数据的防范,并且是自己发的
	    if (el.classList.contains('file-msg-wrap') && _util2.default.generatorFileMeta && _util2.default.getUid(msg.fromid) == _util2.default.getUid(_window2.default.loginID)) {
	      var fileMsg = el.querySelector('.file-msg');
	      _$ConvertRoot.SDK.deleteCloudFile(_util2.default.generatorFileMeta(fileMsg));
	    }
	  });
	};

	exports.default = msgRecall;
	module.exports = exports['default'];

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _popupOver = __webpack_require__(269);

	var _popupOver2 = _interopRequireDefault(_popupOver);

	var _messageManager = __webpack_require__(275);

	var _messageManager2 = _interopRequireDefault(_messageManager);

	var _conversationManager = __webpack_require__(256);

	var _conversationManager2 = _interopRequireDefault(_conversationManager);

	var _toast = __webpack_require__(257);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by neitherzhu on 2017/1/23.
	 */
	exports.default = {
	  PopupOver: _popupOver2.default,
	  ConversationManager: _conversationManager2.default,
	  MessageManager: _messageManager2.default,
	  Toast: _toast2.default
	};
	module.exports = exports['default'];

/***/ },
/* 294 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 295 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 296 */
/***/ function(module, exports) {

	module.exports = "<div class=\"imui-msg-link-box\">\n  <i class=\"warning-icon\"></i>\n  <div>\n    <div class=\"warning-text\">\n      {@if isSafe}\n      Безопасная ссылка, будьте уверены, чтобы открыть\n      {@else}\n      Неизвестная ссылка, пожалуйста, открывайте с осторожностью\n      {@/if}\n    </div>\n  </div>\n  <div class=\"warning-actions\">\n    {@each btns as btn}\n    <a href=\"javascript:void(0)\" data-action=\"${btn.action}\" class=\"warning-action J_linkAction\">${btn.text}</a>\n    {@/each}\n  </div>\n  <div class=\"url-tip\">\n    {@if isSafe}\n    <a href=\"http://web.wangwang.taobao.com/safe/verifyseal.do?dn=${encodeUrl}\" class=\"muted J_CustomLink\" target=\"_blank\">Надежный веб-сайт China Net</a>\n    {@else}\n    <a href=\"http://110.taobao.com/home/school.htm\" class=\"muted J_CustomLink\" target=\"_blank\">Как определить подозрительные ссылки?</a>\n    {@/if}\n  </div>\n</div>\n";

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _$IMSDKRoot = __webpack_require__(2);

	var _$IMSDKRoot2 = _interopRequireDefault(_$IMSDKRoot);

	var _$MessageManagerRoot = __webpack_require__(6);

	var _$MessageManagerRoot2 = _interopRequireDefault(_$MessageManagerRoot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SDK = _$MessageManagerRoot2.default.SDK;


	SDK.registerWebview = function (param) {
	    _$IMSDKRoot2.default.invoke('webpipe.RegisterWebControl', param);
	};

/***/ },
/* 298 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
])
});
;